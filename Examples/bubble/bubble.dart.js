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
a[c]=function(){a[c]=function(){H.nM(b)}
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
return d?function(e){if(t===null)t=H.jE(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jE(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jE(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={jh:function jh(a){this.a=a},
jo:function(a,b,c,d){if(!!a.$isj)return new H.ed(a,b,[c,d])
return new H.ct(a,b,[c,d])},
cm:function(){return new P.b4("No element")},
mC:function(){return new P.b4("Too many elements")},
mB:function(){return new P.b4("Too few elements")},
mR:function(a,b){H.cI(a,0,J.bi(a)-1,b)},
cI:function(a,b,c,d){if(c-b<=32)H.mQ(a,b,c,d)
else H.mP(a,b,c,d)},
mQ:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.S(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.a8(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mP:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.J(t+1,6)
r=a3+s
q=a4-s
p=C.b.J(a3+a4,2)
o=p-s
n=p+s
t=J.S(a2)
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
H.cI(a2,a3,g-2,a5)
H.cI(a2,f+2,a4,a5)
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
break}}H.cI(a2,g,f,a5)}else H.cI(a2,g,f,a5)},
j:function j(){},
b_:function b_(){},
cr:function cr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ct:function ct(a,b,c){this.a=a
this.b=b
this.$ti=c},
ed:function ed(a,b,c){this.a=a
this.b=b
this.$ti=c},
f2:function f2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
br:function br(a,b,c){this.a=a
this.b=b
this.$ti=c},
cU:function cU(a,b,c){this.a=a
this.b=b
this.$ti=c},
hs:function hs(a,b,c){this.a=a
this.b=b
this.$ti=c},
aV:function aV(){},
dF:function(a,b){var t=a.al(b)
if(!u.globalState.d.cy)u.globalState.f.as()
return t},
iA:function(){++u.globalState.f.b},
iO:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
lp:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.p(s).$ish)throw H.c(P.dO("Arguments to main must be a List: "+H.e(s)))
u.globalState=new H.i8(0,0,1,null,null,null,null,null,null,null,null,null,a)
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
s.f=new H.hH(P.jn(null,H.aM),0)
q=P.x
s.seQ(new H.ab(0,null,null,null,null,null,0,[q,H.b7]))
s.seS(new H.ab(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.i7()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.mw,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.n4)}if(u.globalState.x)return
o=H.kY()
u.globalState.e=o
u.globalState.z.i(0,o.a,o)
u.globalState.d=o
if(H.bf(a,{func:1,args:[P.J]}))o.al(new H.iZ(t,a))
else if(H.bf(a,{func:1,args:[P.J,P.J]}))o.al(new H.j_(t,a))
else o.al(a)
u.globalState.f.as()},
n4:function(a){var t=P.aD(["command","print","msg",a])
return new H.a4(!0,P.b8(null,P.x)).L(t)},
kY:function(){var t,s
t=u.globalState.a++
s=P.x
t=new H.b7(t,new H.ab(0,null,null,null,null,null,0,[s,H.cG]),P.aE(null,null,null,s),u.createNewIsolate(),new H.cG(0,null,!1),new H.au(H.lm()),new H.au(H.lm()),!1,!1,[],P.aE(null,null,null,null),null,null,!1,!0,P.aE(null,null,null,null))
t.dG()
return t},
my:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mz()
return},
mz:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.t("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.t('Cannot extract URI from "'+t+'"'))},
mw:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.aL(!0,[]).a0(b.data)
s=J.S(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.ny(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aL(!0,[]).a0(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aL(!0,[]).a0(s.h(t,"replyTo"))
k=H.kY()
u.globalState.f.a.Y(0,new H.aM(k,new H.eN(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.as()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lZ(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.as()
break
case"close":u.globalState.ch.ar(0,$.$get$kp().h(0,a))
a.terminate()
u.globalState.f.as()
break
case"log":H.mv(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.aD(["command","print","msg",t])
j=new H.a4(!0,P.b8(null,P.x)).L(j)
s.toString
self.postMessage(j)}else P.a7(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
mv:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aD(["command","log","msg",a])
r=new H.a4(!0,P.b8(null,P.x)).L(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.I(q)
t=H.a5(q)
s=P.cg(t)
throw H.c(s)}},
mx:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.ky=$.ky+("_"+s)
$.kz=$.kz+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.H(0,["spawned",new H.b9(s,r),q,t.r])
r=new H.eO(t,d,a,c,b)
if(e){t.bZ(q,q)
u.globalState.f.a.Y(0,new H.aM(t,r,"start isolate"))}else r.$0()},
mS:function(a,b){var t=new H.ha(!0,!1,null,0)
t.dw(a,b)
return t},
n7:function(a){return new H.aL(!0,[]).a0(new H.a4(!1,P.b8(null,P.x)).L(a))},
iZ:function iZ(a,b){this.a=a
this.b=b},
j_:function j_(a,b){this.a=a
this.b=b},
i8:function i8(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
b7:function b7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
i1:function i1(a,b){this.a=a
this.b=b},
hH:function hH(a,b){this.a=a
this.b=b},
hI:function hI(a){this.a=a},
aM:function aM(a,b,c){this.a=a
this.b=b
this.c=c},
i7:function i7(){},
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
hB:function hB(){},
b9:function b9(a,b){this.b=a
this.a=b},
i9:function i9(a,b){this.a=a
this.b=b},
bU:function bU(a,b,c){this.b=a
this.c=b
this.a=c},
cG:function cG(a,b,c){this.a=a
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
a4:function a4(a,b){this.a=a
this.b=b},
aL:function aL(a,b){this.a=a
this.b=b},
ns:function(a){return u.types[a]},
nA:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.p(a).$isr},
e:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bj(a)
if(typeof t!=="string")throw H.c(H.O(a))
return t},
mN:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.az(t)
s=t[0]
r=t[1]
return new H.fD(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aF:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
by:function(a){var t,s,r,q,p,o,n,m,l
t=J.p(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.O||!!J.p(a).$isaJ){p=C.B(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aR(q,0)===36)q=C.i.d8(q,1)
l=H.dI(H.iC(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
L:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mL:function(a){return a.b?H.L(a).getUTCFullYear()+0:H.L(a).getFullYear()+0},
mJ:function(a){return a.b?H.L(a).getUTCMonth()+1:H.L(a).getMonth()+1},
mF:function(a){return a.b?H.L(a).getUTCDate()+0:H.L(a).getDate()+0},
mG:function(a){return a.b?H.L(a).getUTCHours()+0:H.L(a).getHours()+0},
mI:function(a){return a.b?H.L(a).getUTCMinutes()+0:H.L(a).getMinutes()+0},
mK:function(a){return a.b?H.L(a).getUTCSeconds()+0:H.L(a).getSeconds()+0},
mH:function(a){return a.b?H.L(a).getUTCMilliseconds()+0:H.L(a).getMilliseconds()+0},
kx:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.O(a))
return a[b]},
be:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a9(!0,b,"index",null)
t=J.bi(a)
if(b<0||C.b.cT(b,t))return P.z(b,a,"index",null,t)
return P.fA(b,"index",null)},
O:function(a){return new P.a9(!0,a,null,null)},
c:function(a){var t
if(a==null)a=new P.bx()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.ls})
t.name=""}else t.toString=H.ls
return t},
ls:function(){return J.bj(this.dartException)},
H:function(a){throw H.c(a)},
P:function(a){throw H.c(P.ak(a))},
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
kK:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
kw:function(a,b){return new H.fl(a,b==null?null:b.method)},
jj:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eT(a,s,t?null:b.receiver)},
I:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.j0(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.b0(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jj(H.e(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.kw(H.e(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$kE()
o=$.$get$kF()
n=$.$get$kG()
m=$.$get$kH()
l=$.$get$kL()
k=$.$get$kM()
j=$.$get$kJ()
$.$get$kI()
i=$.$get$kO()
h=$.$get$kN()
g=p.P(s)
if(g!=null)return t.$1(H.jj(s,g))
else{g=o.P(s)
if(g!=null){g.method="call"
return t.$1(H.jj(s,g))}else{g=n.P(s)
if(g==null){g=m.P(s)
if(g==null){g=l.P(s)
if(g==null){g=k.P(s)
if(g==null){g=j.P(s)
if(g==null){g=m.P(s)
if(g==null){g=i.P(s)
if(g==null){g=h.P(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.kw(s,g))}}return t.$1(new H.hl(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cL()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.a9(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cL()
return a},
a5:function(a){var t
if(a==null)return new H.dj(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dj(a,null)},
nE:function(a){if(a==null||typeof a!='object')return J.bh(a)
else return H.aF(a)},
nq:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.i(0,p,a[q])}return b},
nz:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dF(b,new H.iJ(a))
case 1:return H.dF(b,new H.iK(a,d))
case 2:return H.dF(b,new H.iL(a,d,e))
case 3:return H.dF(b,new H.iM(a,d,e,f))
case 4:return H.dF(b,new H.iN(a,d,e,f,g))}throw H.c(P.cg("Unsupported number of arguments for wrapped closure"))},
bd:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.nz)
a.$identity=t
return t},
mf:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.p(c).$ish){t.$reflectionInfo=c
r=H.mN(t).r}else r=c
q=d?Object.create(new H.fS().constructor.prototype):Object.create(new H.bk(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.k7(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.ns,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.k4:H.jb
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.k7(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
mc:function(a,b,c,d){var t=H.jb
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
k7:function(a,b,c){var t,s,r,q
if(c)return H.me(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.mc(s,b==null?r!=null:b!==r,t,b)
return q},
md:function(a,b,c,d){var t,s
t=H.jb
s=H.k4
switch(b?-1:a){case 0:throw H.c(H.mO("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
me:function(a,b){var t,s,r,q
t=$.k5
if(t==null){t=H.k2("self")
$.k5=t}t=$.k3
if(t==null){t=H.k2("receiver")
$.k3=t}s=b.$stubName
r=b.length
q=a[s]
t=H.md(r,b==null?q!=null:b!==q,s,b)
return t},
jE:function(a,b,c,d,e,f){var t,s
t=J.az(b)
s=!!J.p(c).$ish?J.az(c):c
return H.mf(a,t,s,!!d,e,f)},
jb:function(a){return a.a},
k4:function(a){return a.c},
k2:function(a){var t,s,r,q,p
t=new H.bk("self","target","receiver","name")
s=J.az(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
o0:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.af(a,"String"))},
nW:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.af(a,"double"))},
o_:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.af(a,"num"))},
nk:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.af(a,"bool"))},
ny:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.af(a,"int"))},
nG:function(a,b){throw H.c(H.af(a,b.substring(3)))},
nF:function(a,b){var t=J.S(b)
throw H.c(H.k6(a,t.bu(b,3,t.gj(b))))},
jI:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.p(a)[b])return a
H.nG(a,b)},
ar:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.p(a)[b]
else t=!0
if(t)return a
H.nF(a,b)},
nZ:function(a){if(a==null)return a
if(!!J.p(a).$ish)return a
throw H.c(H.af(a,"List"))},
jF:function(a){var t=J.p(a)
return"$S" in t?t.$S():null},
bf:function(a,b){var t,s
if(a==null)return!1
t=H.jF(a)
if(t==null)s=!1
else s=H.lg(t,b)
return s},
nX:function(a,b){var t,s
if(a==null)return a
if($.jB)return a
$.jB=!0
try{if(H.bf(a,b))return a
t=H.iT(b,null)
s=H.af(a,t)
throw H.c(s)}finally{$.jB=!1}},
af:function(a,b){return new H.hi("TypeError: "+H.e(P.cf(a))+": type '"+H.l3(a)+"' is not a subtype of type '"+b+"'")},
k6:function(a,b){return new H.dT("CastError: "+H.e(P.cf(a))+": type '"+H.l3(a)+"' is not a subtype of type '"+b+"'")},
l3:function(a){var t
if(a instanceof H.aw){t=H.jF(a)
if(t!=null)return H.iT(t,null)
return"Closure"}return H.by(a)},
ah:function(a){if(!0===a)return!1
if(!!J.p(a).$isjf)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.af(a,"bool"))},
aq:function(a){throw H.c(new H.hu(a))},
b:function(a){if(H.ah(a))throw H.c(P.mb(null))},
nM:function(a){throw H.c(new P.e3(a))},
mO:function(a){return new H.fH(a)},
lm:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
le:function(a){return u.getIsolateTag(a)},
G:function(a){return new H.ao(a,null)},
A:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iC:function(a){if(a==null)return
return a.$ti},
lf:function(a,b){return H.jM(a["$as"+H.e(b)],H.iC(a))},
T:function(a,b,c){var t,s
t=H.lf(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aj:function(a,b){var t,s
t=H.iC(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
iT:function(a,b){var t=H.bg(a,b)
return t},
bg:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dI(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.e(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.bg(t,b)
return H.n9(a,b)}return"unknown-reified-type"},
n9:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.bg(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.bg(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.bg(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.np(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.bg(l[j],b)+(" "+H.e(j))}q+="}"}return"("+q+") => "+t},
dI:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.bB("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.bg(o,c)}return p?"":"<"+s.k(0)+">"},
iD:function(a){var t,s,r
if(a instanceof H.aw){t=H.jF(a)
if(t!=null)return H.iT(t,null)}s=J.p(a).constructor.name
if(a==null)return s
r=H.dI(a.$ti,0,null)
return s+r},
jM:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jJ(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jJ(a,null,b)
return b},
bY:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iC(a)
s=J.p(a)
if(s[b]==null)return!1
return H.l7(H.jM(s[d],t),c)},
dJ:function(a,b,c,d){var t,s
if(a==null)return a
t=H.bY(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dI(c,0,null)
throw H.c(H.k6(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
nT:function(a,b,c,d){var t,s
if(a==null)return a
t=H.bY(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dI(c,0,null)
throw H.c(H.af(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
l7:function(a,b){var t,s,r,q,p
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
nU:function(a,b,c){return H.jJ(a,b,H.lf(b,c))},
U:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="J")return!0
if('func' in b)return H.lg(a,b)
if('func' in a)return b.name==="jf"||b.name==="C"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.iT(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.l7(H.jM(o,t),r)},
l6:function(a,b,c){var t,s,r,q,p,o,n
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
ng:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.az(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.U(p,o)||H.U(o,p)))return!1}return!0},
lg:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
if(n===m){if(!H.l6(r,q,!1))return!1
if(!H.l6(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
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
if(!(H.U(g,f)||H.U(f,g)))return!1}}return H.ng(a.named,b.named)},
jJ:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
o1:function(a){var t=$.jG
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nY:function(a){return H.aF(a)},
nV:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nB:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.C))
t=$.jG.$1(a)
s=$.iz[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iI[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.l5.$2(a,t)
if(t!=null){s=$.iz[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iI[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.iR(r)
$.iz[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iI[t]=r
return r}if(p==="-"){o=H.iR(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.li(a,r)
if(p==="*")throw H.c(P.kS(t))
if(u.leafTags[t]===true){o=H.iR(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.li(a,r)},
li:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.jK(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
iR:function(a){return J.jK(a,!1,null,!!a.$isr)},
nD:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.iR(t)
else return J.jK(t,c,null,null)},
nw:function(){if(!0===$.jH)return
$.jH=!0
H.nx()},
nx:function(){var t,s,r,q,p,o,n,m
$.iz=Object.create(null)
$.iI=Object.create(null)
H.nv()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.ll.$1(p)
if(o!=null){n=H.nD(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
nv:function(){var t,s,r,q,p,o,n
t=C.S()
t=H.bc(C.P,H.bc(C.U,H.bc(C.A,H.bc(C.A,H.bc(C.T,H.bc(C.Q,H.bc(C.R(C.B),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jG=new H.iF(p)
$.l5=new H.iG(o)
$.ll=new H.iH(n)},
bc:function(a,b){return a(b)||b},
nL:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fD:function fD(a,b,c,d,e,f,g,h){var _=this
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
fl:function fl(a,b){this.a=a
this.b=b},
eT:function eT(a,b,c){this.a=a
this.b=b
this.c=c},
hl:function hl(a){this.a=a},
j0:function j0(a){this.a=a},
dj:function dj(a,b){this.a=a
this.b=b},
iJ:function iJ(a){this.a=a},
iK:function iK(a,b){this.a=a
this.b=b},
iL:function iL(a,b,c){this.a=a
this.b=b
this.c=c},
iM:function iM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iN:function iN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
aw:function aw(){},
h5:function h5(){},
fS:function fS(){},
bk:function bk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hi:function hi(a){this.a=a},
dT:function dT(a){this.a=a},
fH:function fH(a){this.a=a},
hu:function hu(a){this.a=a},
ao:function ao(a,b){this.a=a
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
iF:function iF(a){this.a=a},
iG:function iG(a){this.a=a},
iH:function iH(a){this.a=a},
it:function(a){var t,s,r
if(!!J.p(a).$iso)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
ag:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.be(b,a))},
bv:function bv(){},
b2:function b2(){},
fb:function fb(){},
cw:function cw(){},
cx:function cx(){},
cy:function cy(){},
cv:function cv(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
cz:function cz(){},
fi:function fi(){},
bL:function bL(){},
bM:function bM(){},
bN:function bN(){},
bO:function bO(){},
np:function(a){return J.az(H.A(a?Object.keys(a):[],[null]))},
iS:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
p:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cp.prototype
return J.co.prototype}if(typeof a=="string")return J.aA.prototype
if(a==null)return J.eR.prototype
if(typeof a=="boolean")return J.eQ.prototype
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.C)return a
return J.iB(a)},
jK:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iB:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jH==null){H.nw()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.kS("Return interceptor for "+H.e(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$ji()]
if(p!=null)return p
p=H.nB(a)
if(p!=null)return p
if(typeof a=="function")return C.V
s=Object.getPrototypeOf(a)
if(s==null)return C.E
if(s===Object.prototype)return C.E
if(typeof q=="function"){Object.defineProperty(q,$.$get$ji(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
az:function(a){a.fixed$length=Array
return a},
S:function(a){if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.C)return a
return J.iB(a)},
dG:function(a){if(a==null)return a
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.C)return a
return J.iB(a)},
lc:function(a){if(typeof a=="number")return J.aZ.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aJ.prototype
return a},
nr:function(a){if(typeof a=="number")return J.aZ.prototype
if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aJ.prototype
return a},
ld:function(a){if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aJ.prototype
return a},
i:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.C)return a
return J.iB(a)},
B:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.p(a).v(a,b)},
a8:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.lc(a).aJ(a,b)},
lt:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lc(a).aK(a,b)},
aO:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nA(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.S(a).h(a,b)},
lu:function(a,b,c,d){return J.i(a).dK(a,b,c,d)},
jN:function(a,b){return J.ld(a).aR(a,b)},
j1:function(a,b){return J.i(a).e2(a,b)},
lv:function(a,b,c,d){return J.i(a).e3(a,b,c,d)},
lw:function(a,b,c){return J.i(a).e4(a,b,c)},
jO:function(a,b){return J.i(a).bY(a,b)},
j2:function(a,b){return J.i(a).S(a,b)},
jP:function(a,b,c){return J.i(a).c0(a,b,c)},
lx:function(a,b){return J.i(a).ej(a,b)},
j3:function(a,b,c){return J.i(a).c1(a,b,c)},
c1:function(a,b,c){return J.i(a).c2(a,b,c)},
dK:function(a,b){return J.i(a).em(a,b)},
ly:function(a,b){return J.i(a).c3(a,b)},
lz:function(a,b,c){return J.i(a).c4(a,b,c)},
jQ:function(a,b,c,d){return J.i(a).c5(a,b,c,d)},
lA:function(a,b,c,d,e){return J.i(a).c6(a,b,c,d,e)},
lB:function(a,b){return J.nr(a).V(a,b)},
j4:function(a,b,c){return J.S(a).eq(a,b,c)},
j5:function(a){return J.i(a).c8(a)},
lC:function(a){return J.i(a).c9(a)},
lD:function(a){return J.i(a).cc(a)},
lE:function(a){return J.i(a).ew(a)},
lF:function(a,b){return J.i(a).ce(a,b)},
j6:function(a,b){return J.i(a).cf(a,b)},
lG:function(a,b,c,d){return J.i(a).cg(a,b,c,d)},
lH:function(a,b,c,d,e){return J.i(a).eD(a,b,c,d,e)},
lI:function(a,b,c,d,e){return J.i(a).ci(a,b,c,d,e)},
lJ:function(a,b,c,d,e,f){return J.i(a).eE(a,b,c,d,e,f)},
lK:function(a,b){return J.dG(a).t(a,b)},
c2:function(a,b){return J.i(a).cj(a,b)},
lL:function(a,b){return J.i(a).ck(a,b)},
lM:function(a){return J.i(a).eF(a)},
jR:function(a,b){return J.dG(a).am(a,b)},
lN:function(a){return J.i(a).gei(a)},
bh:function(a){return J.p(a).gu(a)},
aP:function(a){return J.dG(a).gw(a)},
bi:function(a){return J.S(a).gj(a)},
lO:function(a){return J.i(a).gbd(a)},
lP:function(a){return J.p(a).gA(a)},
lQ:function(a){return J.i(a).gf4(a)},
lR:function(a){return J.i(a).gaG(a)},
j7:function(a){return J.i(a).gm(a)},
j8:function(a){return J.i(a).gn(a)},
jS:function(a){return J.i(a).gE(a)},
j9:function(a,b){return J.i(a).ab(a,b)},
lS:function(a){return J.i(a).aI(a)},
lT:function(a){return J.i(a).bj(a)},
lU:function(a,b){return J.i(a).bk(a,b)},
lV:function(a,b,c){return J.i(a).bl(a,b,c)},
jT:function(a,b,c){return J.i(a).bo(a,b,c)},
lW:function(a,b){return J.i(a).cn(a,b)},
lX:function(a,b){return J.dG(a).cq(a,b)},
lY:function(a,b,c){return J.i(a).cr(a,b,c)},
jU:function(a){return J.dG(a).eY(a)},
lZ:function(a,b){return J.i(a).H(a,b)},
m_:function(a,b,c,d){return J.i(a).bt(a,b,c,d)},
m0:function(a,b,c,d,e,f,g){return J.i(a).cw(a,b,c,d,e,f,g)},
m1:function(a,b,c,d){return J.i(a).cz(a,b,c,d)},
jV:function(a,b,c,d){return J.i(a).cA(a,b,c,d)},
m2:function(a){return J.ld(a).f7(a)},
bj:function(a){return J.p(a).k(a)},
m3:function(a,b,c,d){return J.i(a).f9(a,b,c,d)},
m4:function(a,b,c){return J.i(a).cC(a,b,c)},
m5:function(a,b,c){return J.i(a).cD(a,b,c)},
ja:function(a,b,c){return J.i(a).cE(a,b,c)},
m6:function(a,b,c){return J.i(a).cF(a,b,c)},
jW:function(a,b,c){return J.i(a).cG(a,b,c)},
jX:function(a,b,c){return J.i(a).cH(a,b,c)},
jY:function(a,b,c){return J.i(a).cI(a,b,c)},
jZ:function(a,b,c,d){return J.i(a).cJ(a,b,c,d)},
k_:function(a,b,c,d){return J.i(a).cK(a,b,c,d)},
m7:function(a,b){return J.i(a).cM(a,b)},
m8:function(a,b,c){return J.i(a).fa(a,b,c)},
m9:function(a,b,c,d,e,f,g){return J.i(a).cO(a,b,c,d,e,f,g)},
ma:function(a,b,c,d,e){return J.i(a).cQ(a,b,c,d,e)},
a:function a(){},
eQ:function eQ(){},
eR:function eR(){},
bq:function bq(){},
fv:function fv(){},
aJ:function aJ(){},
aB:function aB(){},
ay:function ay(a){this.$ti=a},
jg:function jg(a){this.$ti=a},
dP:function dP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aZ:function aZ(){},
cp:function cp(){},
co:function co(){},
aA:function aA(){}},P={
mW:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.nh()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bd(new P.hx(t),1)).observe(s,{childList:true})
return new P.hw(t,s,r)}else if(self.setImmediate!=null)return P.ni()
return P.nj()},
mX:function(a){H.iA()
self.scheduleImmediate(H.bd(new P.hy(a),0))},
mY:function(a){H.iA()
self.setImmediate(H.bd(new P.hz(a),0))},
mZ:function(a){P.js(C.y,a)},
js:function(a,b){var t=C.b.J(a.a,1000)
return H.mS(t<0?0:t,b)},
nc:function(a,b){if(H.bf(a,{func:1,args:[P.J,P.J]})){b.toString
return a}else{b.toString
return a}},
mr:function(a,b,c){var t
if(a==null)a=new P.bx()
t=$.v
if(t!==C.d)t.toString
t=new P.F(0,t,null,[c])
t.dM(a,b)
return t},
ms:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.F(0,$.v,null,[P.h])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eF(t,b,!1,s)
try{for(m=0,l=0;m<1;++m){q=a[m]
p=l
q.bh(new P.eE(t,p,s,b,!1),r)
l=++t.b}if(l===0){l=new P.F(0,$.v,null,[null])
l.bG(C.C)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.I(j)
n=H.a5(j)
if(t.b===0||!1)return P.mr(o,n,null)
else{t.c=o
t.d=n}}return s},
n8:function(a,b,c){$.v.toString
a.R(b,c)},
n0:function(a,b){var t=new P.F(0,$.v,null,[b])
H.b(!0)
t.a=4
t.c=a
return t},
kV:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.F))
H.b(b.a===0)
b.a=1
try{a.bh(new P.hR(b),new P.hS(b))}catch(r){t=H.I(r)
s=H.a5(r)
P.nH(new P.hT(b,t,s))}},
hQ:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.aA()
b.aQ(a)
P.b6(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.bS(r)}},
b6:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.iu(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.b6(t.a,b)}s=t.a
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
P.iu(null,null,p,o,s)
return}s=$.v
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.v
H.b(l==null?s!=null:l!==s)
j=$.v
$.v=l
i=j}else i=null
s=b.c
if(s===8)new P.hY(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.hX(r,b,m).$0()}else if((s&2)!==0)new P.hW(t,r,b).$0()
if(i!=null){H.b(!0)
$.v=i}s=r.b
if(!!J.p(s).$isV){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.aB(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.hQ(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.aB(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
nb:function(){var t,s
for(;t=$.ba,t!=null;){$.bW=null
s=t.b
$.ba=s
if(s==null)$.bV=null
t.a.$0()}},
nf:function(){$.jC=!0
try{P.nb()}finally{$.bW=null
$.jC=!1
if($.ba!=null)$.$get$jy().$1(P.l8())}},
l2:function(a){var t=new P.cV(a,null)
if($.ba==null){$.bV=t
$.ba=t
if(!$.jC)$.$get$jy().$1(P.l8())}else{$.bV.b=t
$.bV=t}},
ne:function(a){var t,s,r
t=$.ba
if(t==null){P.l2(a)
$.bW=$.bV
return}s=new P.cV(a,null)
r=$.bW
if(r==null){s.b=t
$.bW=s
$.ba=s}else{s.b=r.b
r.b=s
$.bW=s
if(s.b==null)$.bV=s}},
nH:function(a){var t=$.v
if(C.d===t){P.bb(null,null,C.d,a)
return}t.toString
P.bb(null,null,t,t.b8(a))},
n6:function(a,b,c){var t=a.en(0)
if(!!J.p(t).$isV&&t!==$.$get$kj())t.fb(new P.is(b,c))
else b.ag(c)},
mT:function(a,b){var t=$.v
if(t===C.d){t.toString
return P.js(a,b)}return P.js(a,t.b8(b))},
jx:function(a){var t,s
H.b(a!=null)
t=$.v
H.b(a==null?t!=null:a!==t)
s=$.v
$.v=a
return s},
iu:function(a,b,c,d,e){var t={}
t.a=d
P.ne(new P.iv(t,e))},
l0:function(a,b,c,d){var t,s
if($.v===c)return d.$0()
t=P.jx(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.v=s}},
l1:function(a,b,c,d,e){var t,s
if($.v===c)return d.$1(e)
t=P.jx(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.v=s}},
nd:function(a,b,c,d,e,f){var t,s
if($.v===c)return d.$2(e,f)
t=P.jx(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.v=s}},
bb:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.b8(d):c.ek(d)
P.l2(d)},
hx:function hx(a){this.a=a},
hw:function hw(a,b,c){this.a=a
this.b=b
this.c=c},
hy:function hy(a){this.a=a},
hz:function hz(a){this.a=a},
V:function V(){},
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
jc:function jc(){},
hC:function hC(){},
hv:function hv(a,b){this.a=a
this.$ti=b},
im:function im(a,b){this.a=a
this.$ti=b},
bH:function bH(a,b,c,d,e,f){var _=this
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
hN:function hN(a,b){this.a=a
this.b=b},
hV:function hV(a,b){this.a=a
this.b=b},
hR:function hR(a){this.a=a},
hS:function hS(a){this.a=a},
hT:function hT(a,b,c){this.a=a
this.b=b
this.c=c},
hP:function hP(a,b){this.a=a
this.b=b},
hU:function hU(a,b){this.a=a
this.b=b},
hO:function hO(a,b,c){this.a=a
this.b=b
this.c=c},
hY:function hY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hZ:function hZ(a){this.a=a},
hX:function hX(a,b,c){this.a=a
this.b=b
this.c=c},
hW:function hW(a,b,c){this.a=a
this.b=b
this.c=c},
cV:function cV(a,b){this.a=a
this.b=b},
bA:function bA(){},
h_:function h_(a){this.a=a},
h0:function h0(a,b){this.a=a
this.b=b},
fY:function fY(a,b,c){this.a=a
this.b=b
this.c=c},
fZ:function fZ(a){this.a=a},
fX:function fX(){},
is:function is(a,b){this.a=a
this.b=b},
jr:function jr(){},
aQ:function aQ(a,b){this.a=a
this.b=b},
ir:function ir(){},
iv:function iv(a,b){this.a=a
this.b=b},
ib:function ib(){},
id:function id(a,b){this.a=a
this.b=b},
ic:function ic(a,b){this.a=a
this.b=b},
ie:function ie(a,b){this.a=a
this.b=b},
kr:function(a,b){return new H.ab(0,null,null,null,null,null,0,[a,b])},
a0:function(){return new H.ab(0,null,null,null,null,null,0,[null,null])},
aD:function(a){return H.nq(a,new H.ab(0,null,null,null,null,null,0,[null,null]))},
b8:function(a,b){return new P.i5(0,null,null,null,null,null,0,[a,b])},
aE:function(a,b,c,d){return new P.i3(0,null,null,null,null,null,0,[d])},
jA:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
mA:function(a,b,c){var t,s
if(P.jD(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bX()
C.a.l(s,a)
try{P.na(a,t)}finally{H.b(C.a.gbc(s)===a)
s.pop()}s=P.kD(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eP:function(a,b,c){var t,s,r
if(P.jD(a))return b+"..."+c
t=new P.bB(b)
s=$.$get$bX()
C.a.l(s,a)
try{r=t
r.a=P.kD(r.ga5(),a,", ")}finally{H.b(C.a.gbc(s)===a)
s.pop()}s=t
s.a=s.ga5()+c
s=t.ga5()
return s.charCodeAt(0)==0?s:s},
jD:function(a){var t,s
for(t=0;s=$.$get$bX(),t<s.length;++t)if(a===s[t])return!0
return!1},
na:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gw(a)
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
jm:function(a,b){var t,s
t=P.aE(null,null,null,b)
for(s=J.aP(a);s.p();)t.l(0,s.gq(s))
return t},
kt:function(a){var t,s,r
t={}
if(P.jD(a))return"{...}"
s=new P.bB("")
try{C.a.l($.$get$bX(),a)
r=s
r.a=r.ga5()+"{"
t.a=!0
J.jR(a,new P.f1(t,s))
t=s
t.a=t.ga5()+"}"}finally{t=$.$get$bX()
H.b(C.a.gbc(t)===a)
t.pop()}t=s.ga5()
return t.charCodeAt(0)==0?t:t},
jn:function(a,b){var t=new P.eY(null,0,0,0,[b])
t.dn(a,b)
return t},
i5:function i5(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
i3:function i3(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
i4:function i4(a,b,c){this.a=a
this.b=b
this.c=c},
bJ:function bJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i0:function i0(){},
jl:function jl(){},
cq:function cq(){},
l:function l(){},
cs:function cs(){},
f1:function f1(a,b){this.a=a
this.b=b},
b1:function b1(){},
eY:function eY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i6:function i6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fK:function fK(){},
fJ:function fJ(){},
bK:function bK(){},
mn:function(a){var t=J.p(a)
if(!!t.$isaw)return t.k(a)
return"Instance of '"+H.by(a)+"'"},
ks:function(a,b,c){var t,s
t=H.A([],[c])
for(s=J.aP(a);s.p();)C.a.l(t,s.gq(s))
return t},
kD:function(a,b,c){var t=J.aP(b)
if(!t.p())return a
if(c.length===0){do a+=H.e(t.gq(t))
while(t.p())}else{a+=H.e(t.gq(t))
for(;t.p();)a=a+c+H.e(t.gq(t))}return a},
mg:function(a,b){return J.lB(a,b)},
mh:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
mi:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c8:function(a){if(a>=10)return""+a
return"0"+a},
mk:function(a,b,c,d,e,f){return new P.ax(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
cf:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bj(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mn(a)},
mb:function(a){return new P.c4(a)},
dO:function(a){return new P.a9(!1,null,null,a)},
k0:function(a,b,c){return new P.a9(!0,a,b,c)},
fA:function(a,b,c){return new P.cF(null,null,!0,a,b,"Value not in range")},
aG:function(a,b,c,d,e){return new P.cF(b,c,!0,a,d,"Invalid value")},
kA:function(a,b,c,d,e,f){if(0>a||a>c)throw H.c(P.aG(a,0,c,"start",f))
if(a>b||b>c)throw H.c(P.aG(b,a,c,"end",f))
return b},
z:function(a,b,c,d,e){var t=e!=null?e:J.bi(b)
return new P.eM(b,t,!0,a,c,"Index out of range")},
t:function(a){return new P.hm(a)},
kS:function(a){return new P.hk(a)},
fR:function(a){return new P.b4(a)},
ak:function(a){return new P.dV(a)},
cg:function(a){return new P.hM(a)},
a7:function(a){H.iS(H.e(a))},
ai:function ai(){},
E:function E(){},
bl:function bl(a,b){this.a=a
this.b=b},
X:function X(){},
ax:function ax(a){this.a=a},
eb:function eb(){},
ec:function ec(){},
aU:function aU(){},
c4:function c4(a){this.a=a},
bx:function bx(){},
a9:function a9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cF:function cF(a,b,c,d,e,f){var _=this
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
hm:function hm(a){this.a=a},
hk:function hk(a){this.a=a},
b4:function b4(a){this.a=a},
dV:function dV(a){this.a=a},
cL:function cL(){},
e3:function e3(a){this.a=a},
je:function je(){},
hM:function hM(a){this.a=a},
ef:function ef(a,b,c){this.a=a
this.b=b
this.$ti=c},
x:function x(){},
Q:function Q(){},
cn:function cn(){},
h:function h(){},
b0:function b0(){},
J:function J(){},
a6:function a6(){},
C:function C(){},
b3:function b3(){},
n:function n(){},
bB:function bB(a){this.a=a},
ju:function ju(){},
la:function(a){return a},
ix:function(a){var t,s,r,q,p
if(a==null)return
t=P.a0()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.P)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
nn:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.jR(a,new P.iw(t))
return t},
ke:function(){var t=$.kd
if(t==null){t=J.j4(window.navigator.userAgent,"Opera",0)
$.kd=t}return t},
mj:function(){var t,s
t=$.ka
if(t!=null)return t
s=$.kb
if(s==null){s=J.j4(window.navigator.userAgent,"Firefox",0)
$.kb=s}if(s)t="-moz-"
else{s=$.kc
if(s==null){s=!P.ke()&&J.j4(window.navigator.userAgent,"Trident/",0)
$.kc=s}if(s)t="-ms-"
else t=P.ke()?"-o-":"-webkit-"}$.ka=t
return t},
iw:function iw(a){this.a=a},
nK:function(a){return Math.sqrt(a)},
i2:function i2(){},
ia:function ia(){},
R:function R(){},
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
ex:function ex(){},
eA:function eA(){},
eC:function eC(){},
a_:function a_(){},
aa:function aa(){},
eK:function eK(){},
eU:function eU(){},
f3:function f3(){},
f5:function f5(){},
fm:function fm(){},
ft:function ft(){},
fx:function fx(){},
fy:function fy(){},
fB:function fB(){},
fC:function fC(){},
bz:function bz(){},
h1:function h1(){},
u:function u(){},
h2:function h2(){},
bD:function bD(){},
bE:function bE(){},
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
dQ:function dQ(){},
dR:function dR(){},
aR:function aR(){},
fn:function fn(){},
fF:function fF(){},
fG:function fG(){},
fQ:function fQ(){},
dh:function dh(){},
di:function di(){}},W={
ml:function(a,b,c){var t,s
t=document.body
s=(t&&C.o).O(t,a,b,c)
s.toString
t=new H.cU(new W.M(s),new W.ee(),[W.q])
return t.ga4(t)},
mm:function(a){return"wheel"},
bn:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lQ(a)
if(typeof s==="string")t=a.tagName}catch(r){H.I(r)}return t},
n_:function(a,b){return document.createElement(a)},
aN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kZ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
a3:function(a,b,c,d,e){var t=W.l4(new W.hL(c))
t=new W.hK(0,a,b,t,!1,[e])
t.dE(a,b,c,!1,e)
return t},
kW:function(a){var t,s
t=document.createElement("a")
s=new W.ig(t,window.location)
s=new W.bI(s)
s.dF(a)
return s},
n2:function(a,b,c,d){return!0},
n3:function(a,b,c,d){var t,s,r,q,p
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
l_:function(){var t=P.n
t=new W.io(P.jm(C.t,t),P.aE(null,null,null,t),P.aE(null,null,null,t),P.aE(null,null,null,t),null)
t.dI(null,new H.br(C.t,new W.ip(),[H.aj(C.t,0),null]),["TEMPLATE"],null)
return t},
l4:function(a){var t=$.v
if(t===C.d)return a
return t.el(a)},
k:function k(){},
c3:function c3(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
as:function as(){},
at:function at(){},
c5:function c5(){},
c6:function c6(){},
av:function av(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
aS:function aS(){},
e_:function e_(){},
Y:function Y(){},
aT:function aT(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e4:function e4(){},
e5:function e5(){},
c9:function c9(){},
bm:function bm(){},
e6:function e6(){},
ca:function ca(){},
e7:function e7(){},
cb:function cb(){},
e8:function e8(){},
cc:function cc(){},
cd:function cd(){},
ce:function ce(){},
e9:function e9(){},
ea:function ea(){},
Z:function Z(){},
ee:function ee(){},
f:function f(){},
d:function d(){},
ey:function ey(){},
ez:function ez(){},
eD:function eD(){},
eH:function eH(){},
ck:function ck(){},
eI:function eI(){},
bo:function bo(){},
cl:function cl(){},
eJ:function eJ(){},
bp:function bp(){},
aW:function aW(){},
aX:function aX(){},
aY:function aY(){},
aC:function aC(){},
f_:function f_(){},
f0:function f0(){},
bt:function bt(){},
f6:function f6(){},
f8:function f8(){},
bu:function bu(){},
f9:function f9(){},
K:function K(){},
M:function M(a){this.a=a},
q:function q(){},
cA:function cA(){},
bw:function bw(){},
ac:function ac(){},
fw:function fw(){},
fz:function fz(){},
cE:function cE(){},
cH:function cH(){},
fI:function fI(){},
an:function an(){},
fN:function fN(){},
fP:function fP(){},
ad:function ad(){},
fV:function fV(){},
fW:function fW(a){this.a=a},
cN:function cN(){},
h3:function h3(){},
h4:function h4(){},
bC:function bC(){},
h6:function h6(){},
h7:function h7(){},
h9:function h9(){},
aH:function aH(){},
hd:function hd(){},
he:function he(){},
cT:function cT(){},
aI:function aI(){},
hn:function hn(){},
hp:function hp(){},
b5:function b5(){},
hq:function hq(){},
hr:function hr(){},
aK:function aK(){},
bG:function bG(){},
ht:function ht(a){this.a=a},
jw:function jw(){},
hD:function hD(){},
hE:function hE(){},
i_:function i_(){},
d8:function d8(){},
ij:function ij(){},
ik:function ik(){},
hA:function hA(){},
hF:function hF(a){this.a=a},
hJ:function hJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hG:function hG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hK:function hK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hL:function hL(a){this.a=a},
bI:function bI(a){this.a=a},
m:function m(){},
cC:function cC(a){this.a=a},
fk:function fk(a){this.a=a},
fj:function fj(a,b,c){this.a=a
this.b=b
this.c=c},
bP:function bP(){},
ih:function ih(){},
ii:function ii(){},
io:function io(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ip:function ip(){},
il:function il(){},
ci:function ci(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cB:function cB(){},
jp:function jp(){},
jv:function jv(){},
ig:function ig(a,b){this.a=a
this.b=b},
du:function du(a){this.a=a},
iq:function iq(a){this.a=a},
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
nI:function(a){var t,s
t=document
s=W.aC
W.a3(t,"keydown",new B.iU(),!1,s)
W.a3(t,"keyup",new B.iV(),!1,s)
if(!$.nJ)W.a3(t,"mousemove",new B.iW(),!1,W.K)
s=W.K
W.a3(t,"mousedown",new B.iX(),!1,s)
W.a3(t,"mouseup",new B.iY(),!1,s)},
mE:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$iy()
r=$.$get$bZ()
q=new T.a1(new Float32Array(16))
q.a3()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.fo(a,b,c,0,new T.y(t),-0.02,s,r,q,new T.y(p),new T.y(o),new T.y(n),new T.y(new Float32Array(3)),"camera:orbit",!1,!0)
t.dr(a,b,c,d)
return t},
iU:function iU(){},
iV:function iV(){},
iW:function iW(){},
iX:function iX(){},
iY:function iY(){},
fo:function fo(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fp:function fp(a){this.a=a},
fq:function fq(a){this.a=a},
fr:function fr(){},
fs:function fs(a){this.a=a},
mt:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=[]
s=[]
C.a.K(t,$.$get$kk())
C.a.K(s,$.$get$kl())
for(r=0;r<a3;++r,t=q){q=[]
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.P)(t),++o){n=t[o]
m=J.i(n)
l=C.a.h(s,m.gN(n))
k=new T.y(new Float32Array(3))
k.I(l)
k.l(0,C.a.h(s,m.gT(n)))
k.a2(0,0.5)
k.C(0)
l=C.a.h(s,m.gT(n))
j=new T.y(new Float32Array(3))
j.I(l)
j.l(0,C.a.h(s,m.gU(n)))
j.a2(0,0.5)
j.C(0)
l=C.a.h(s,m.gU(n))
i=new T.y(new Float32Array(3))
i.I(l)
i.l(0,C.a.h(s,m.gN(n)))
i.a2(0,0.5)
i.C(0)
h=s.length
C.a.l(s,k)
g=s.length
C.a.l(s,j)
f=s.length
C.a.l(s,i)
C.a.l(q,new G.am(m.gN(n),h,f))
C.a.l(q,new G.am(m.gT(n),g,h))
C.a.l(q,new G.am(m.gU(n),f,g))
C.a.l(q,new G.am(h,g,f))}}e=new G.eG(!1,[],[],[],P.a0())
e.bz("aTexUV")
e.bz("aNormal")
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.P)(t),++o){n=t[o]
m=J.i(n)
d=C.a.h(s,m.gN(n))
H.b(Math.sqrt(d.gW())<1.01&&Math.sqrt(d.gW())>0.99)
c=C.a.h(s,m.gT(n))
H.b(Math.sqrt(c.gW())<1.01&&Math.sqrt(c.gW())>0.99)
b=C.a.h(s,m.gU(n))
H.b(Math.sqrt(b.gW())<1.01&&Math.sqrt(b.gW())>0.99)
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
e.dg("aNormal",[d,c,b])
m=new T.y(new Float32Array(3))
m.I(d)
m.a2(0,a4)
l=new T.y(new Float32Array(3))
l.I(c)
l.a2(0,a4)
a2=new T.y(new Float32Array(3))
a2.I(b)
a2.a2(0,a4)
e.dh([m,l,a2])
e.df("aTexUV",[new T.a2(a),new T.a2(a0),new T.a2(a1)])}return e}},G={
mV:function(a){var t,s,r
t=H.A(a.split("\n"),[P.n])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.e(t[s])}return C.a.aq(t,"\n")},
kU:function(a,b,c){var t,s,r,q
t=J.i(a)
s=t.cb(a,b)
t.br(a,s,c)
t.c7(a,s)
r=t.bn(a,s,35713)
if(r!=null&&!r){q=t.bm(a,s)
P.a7("E:Compilation failed:")
P.a7("E:"+G.mV(c))
P.a7("E:Failure:")
P.a7(C.i.aa("E:",q))
throw H.c(q)}return s},
D:function(a,b,c){return new G.am(a,b,c)},
ku:function(a,b){var t=new G.f4(P.a0(),a,!1,!0)
t.dq(a,b)
return t},
ki:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.j7(a[s])
b[t+1]=J.j8(a[s])
b[t+2]=J.jS(a[s])}return b},
mp:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.j7(a[s])
b[t+1]=J.j8(a[s])}return b},
mq:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.j7(a[s])
b[t+1]=J.j8(a[s])
b[t+2]=J.jS(a[s])
b[t+3]=J.lR(a[s])}return b},
mo:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.aO(a[s],0)
b[t+1]=J.aO(a[s],1)
b[t+2]=J.aO(a[s],2)
b[t+3]=J.aO(a[s],3)}return b},
kv:function(a,b,c,d){return new G.f7(b,J.lE(b.a),c,P.a0(),d,null,0,-1,null,null,P.a0(),"meshdata:"+a,!1,!0)},
n1:function(a,b){var t,s,r,q,p,o,n,m,l,k
for(t=a.e,s=t.gD(t),s=s.gw(s),r=b.x,q=[[P.h,P.x]],p=[P.X],o=[T.ap],n=[T.y],m=[T.a2];s.p();){l=s.gq(s)
if(!r.F(0,l)){l="Dropping unnecessary attribute: "+H.e(l)
if($.lb>0)H.iS("I: "+l)
continue}k=t.h(0,l)
switch($.$get$N().h(0,l).a){case"vec2":b.ae(l,G.mp(H.dJ(k,"$ish",m,"$ash"),null),2)
break
case"vec3":b.ae(l,G.ki(H.dJ(k,"$ish",n,"$ash"),null),3)
break
case"vec4":b.ae(l,G.mq(H.dJ(k,"$ish",o,"$ash"),null),4)
break
case"float":b.ae(l,new Float32Array(H.it(H.dJ(k,"$ish",p,"$ash"))),1)
break
case"uvec4":b.ae(l,G.mo(H.dJ(k,"$ish",q,"$ash"),null),4)
break
default:if(H.ah(!1))H.aq("unknown type for "+H.e(l)+" ["+J.lP(k[0]).k(0)+"] ["+new H.ao(H.iD(k),null).k(0)+"] "+H.e(k))}}},
kB:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.aE(null,null,null,P.n)
s=c.b
r=d.b
q=c.f
p=J.lC(b.a)
o=G.kU(b.a,35633,s)
J.jP(b.a,p,o)
n=G.kU(b.a,35632,r)
J.jP(b.a,p,n)
if(q.length>0)J.m3(b.a,p,q,35980)
J.lW(b.a,p)
if(!J.lV(b.a,p,35714))H.H(J.lU(b.a,p))
t=new G.fE(b,c,d,p,P.jm(c.c,null),P.a0(),P.a0(),t,null,a,!1,!0)
t.ds(a,b,c,d)
return t},
fM:function(a){return new G.fL(a,null,[],[],[],[],0,P.a0())},
km:function(a,b,c,d,e){var t=new G.eL(c,b,J.lD(a.a),e,a,new G.h8(!1,!1,!1,!0,1,9729,9729))
t.dm(a,b,c,d,e)
return t},
fa:function fa(){},
hj:function hj(){},
dS:function dS(){},
dU:function dU(a,b){this.a=a
this.b=b},
am:function am(a,b,c){this.a=a
this.b=b
this.c=c},
eG:function eG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cR:function cR(a,b,c){this.a=a
this.b=b
this.c=c},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.c=c},
f4:function f4(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
f7:function f7(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fu:function fu(){},
fE:function fE(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
fL:function fL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fO:function fO(){},
h8:function h8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bF:function bF(){},
eL:function eL(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={
mU:function(a,b,c){var t,s,r,q
t="stars_"+b
s=b*3
r=new Float32Array(s)
for(q=0;q<s;++q)r[q]=($.$get$kT().eV()-0.5)*c
s=G.kv(t,a.d,0,a.e.x)
s.bx(r)
return s},
cD:function cD(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fT:function fT(){},
fU:function fU(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},D={
mD:function(a){var t,s,r
t=new P.F(0,$.v,null,[null])
s=document.createElement("img")
r=new W.hG(s,"load",!1,[W.f])
r.gbb(r).aF(new D.eZ(new P.hv(t,[null]),s))
s.src=a
return t},
eZ:function eZ(a,b){this.a=a
this.b=b}},A={
dH:function(a){var t,s
t=C.Y.eH(a,0,new A.iE())
s=536870911&t+(C.b.cR(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iE:function iE(){},
nC:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t={}
s=document
r=new R.fU(0,0,null,null,null,null)
r.dv(C.r.cV(s,"stats"),"blue","gray")
q=C.r.eX(s,"#webgl-canvas")
p=new G.dU(null,q)
o=(q&&C.w).bi(q,"webgl2",P.aD(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=o
if(o==null)H.H(P.cg('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+H.e(J.lS(o))
if($.lb>0)P.a7("I: "+n)
J.lA(o,0,0,0,1)
J.c2(o,2929)
J.c2(o,2884)
m=B.mE(5,10,0,q)
o=new T.a1(new Float32Array(16))
o.a3()
n=new T.a1(new Float32Array(16))
n.a3()
l=new R.cD(q,p,m,50,1,0.1,1000,o,n,new T.a1(new Float32Array(16)),P.a0(),"perspective",!1,!0)
l.bC()
l.ct(null)
W.a3(window,"resize",l.gf0(),!1,W.f)
k=G.kB("spheres",p,$.$get$lo(),$.$get$ln())
j=B.mt(3,1,!0)
i=G.kv("icosahedron-3",k.d,4,k.e.x)
i.bx(G.ki(j.d,null))
o=j.dk()
n=i.d
i.y=J.j5(n.a)
H.b(i.ch!=null)
h=i.ch.length
if(h<768){i.saW(new Uint8Array(H.it(o)))
i.Q=5121}else if(h<196608){i.saW(new Uint16Array(H.it(o)))
i.Q=5123}else{i.saW(new Uint32Array(H.it(o)))
i.Q=5125}J.dK(n.a,i.e)
o=i.y
h=i.cx
g=J.p(h)
H.b(!!g.$iskP||!!g.$iskQ||!!g.$iskR)
J.j3(n.a,34963,o)
J.jQ(n.a,34963,h,35048)
G.n1(j,i)
f=new T.a1(new Float32Array(16))
f.a3()
o=new Float32Array(9)
o[0]=1
o[1]=0
o[2]=0
o[3]=0
o[4]=1
o[5]=0
o[6]=0
o[7]=0
o[8]=1
n=$.$get$k1()
e=G.ku("sphere",n)
e.M("uNormalMatrix",new T.bs(o))
e.M("uModelMatrix",f)
d=G.kB("stars",p,$.$get$lk(),$.$get$lj())
c=G.ku("stars",n)
b=s.createElement("canvas")
b.width=64
b.height=64
a=C.w.cU(b,"2d")
a0=(a&&C.p).ca(a,32,32,1,32,32,22);(a0&&C.m).aC(a0,0,"gray")
C.m.aC(a0,1,"black")
a.fillStyle=a0
C.p.eG(a,0,0,64,64)
a0=C.p.ca(a,32,32,1,32,32,6);(a0&&C.m).aC(a0,0,"white")
C.m.aC(a0,1,"gray")
a.globalAlpha=0.9
a.fillStyle=a0
a.arc(32,32,4,0,6.283185307179586,!1)
a.fill("nonzero")
c.M("uTexture",G.km(p,"Utils::Particles",b,null,3553))
c.M("uPointSize",1000)
s=new T.a1(new Float32Array(16))
s.a3()
c.M("uModelMatrix",s)
a1=R.mU(d,2000,100)
t.a=0
P.ms([D.mD($.lr)],null,!1).aF(new A.iQ(p,e,new A.iP(t,m,f,k,i,e,l,d,a1,c,r)))},
iP:function iP(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
iQ:function iQ(a,b,c){this.a=a
this.b=b
this.c=c}},T={
W:function(a,b,c){var t=new T.y(new Float32Array(3))
t.au(a,b,c)
return t},
bs:function bs(a){this.a=a},
a1:function a1(a){this.a=a},
a2:function a2(a){this.a=a},
y:function y(a){this.a=a},
ap:function ap(a){this.a=a}}
var v=[C,H,J,P,W,B,G,R,D,A,T]
setFunctionNamesIfNecessary(v)
var $={}
H.jh.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gu:function(a){return H.aF(a)},
k:function(a){return"Instance of '"+H.by(a)+"'"},
gA:function(a){return new H.ao(H.iD(a),null)}}
J.eQ.prototype={
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gA:function(a){return C.as},
$isai:1}
J.eR.prototype={
v:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
gA:function(a){return C.am},
$isJ:1}
J.bq.prototype={
gu:function(a){return 0},
gA:function(a){return C.al},
k:function(a){return String(a)},
$iskq:1}
J.fv.prototype={}
J.aJ.prototype={}
J.aB.prototype={
k:function(a){var t=a[$.$get$k9()]
return t==null?this.dc(a):J.bj(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjf:1}
J.ay.prototype={
l:function(a,b){if(!!a.fixed$length)H.H(P.t("add"))
a.push(b)},
K:function(a,b){var t,s,r,q,p
t=a.length
if(!!a.fixed$length)H.H(P.t("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.P)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.H(P.ak(a)))
a.push(q)}},
cq:function(a,b){return new H.br(a,b,[H.aj(a,0),null])},
aq:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.e(a[s])
return t.join(b)},
t:function(a,b){return a[b]},
gbb:function(a){if(a.length>0)return a[0]
throw H.c(H.cm())},
gbc:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.cm())},
bq:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.H(P.t("setRange"))
P.kA(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.H(P.aG(e,0,null,"skipCount",null))
s=J.S(d)
if(e+t>s.gj(d))throw H.c(H.mB())
if(e<b)for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
c_:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.c(P.ak(a))}return!1},
d6:function(a,b){if(!!a.immutable$list)H.H(P.t("sort"))
H.mR(a,P.no())},
aL:function(a){return this.d6(a,null)},
B:function(a,b){var t
for(t=0;t<a.length;++t)if(J.B(a[t],b))return!0
return!1},
k:function(a){return P.eP(a,"[","]")},
gw:function(a){return new J.dP(a,a.length,0,null,[H.aj(a,0)])},
gu:function(a){return H.aF(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.H(P.t("set length"))
if(b<0)throw H.c(P.aG(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.be(a,b))
if(b>=a.length||b<0)throw H.c(H.be(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.H(P.t("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.be(a,b))
if(b>=a.length||b<0)throw H.c(H.be(a,b))
a[b]=c},
$iso:1,
$aso:function(){},
$isj:1,
$ish:1}
J.jg.prototype={}
J.dP.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.P(t))
r=this.c
if(r>=s){this.sbD(null)
return!1}this.sbD(t[r]);++this.c
return!0},
sbD:function(a){this.d=a}}
J.aZ.prototype={
V:function(a,b){var t
if(typeof b!=="number")throw H.c(H.O(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaD(b)
if(this.gaD(a)===t)return 0
if(this.gaD(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaD:function(a){return a===0?1/a<0:a<0},
eo:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.c(P.t(""+a+".ceil()"))},
a8:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.t(""+a+".round()"))},
ep:function(a,b,c){if(this.V(b,c)>0)throw H.c(H.O(b))
if(this.V(a,b)<0)return b
if(this.V(a,c)>0)return c
return a},
f8:function(a,b){var t
if(b>20)throw H.c(P.aG(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaD(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
aa:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a+b},
ad:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a-b},
cS:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a/b},
G:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a*b},
aN:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bW(a,b)},
J:function(a,b){return(a|0)===a?a/b|0:this.bW(a,b)},
bW:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.t("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
b0:function(a,b){var t
if(a>0)t=this.e9(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
e9:function(a,b){return b>31?0:a>>>b},
cR:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return(a&b)>>>0},
de:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return(a^b)>>>0},
aK:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a<b},
aJ:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a>b},
cT:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a>=b},
gA:function(a){return C.av},
$isE:1,
$asE:function(){return[P.a6]},
$isX:1,
$isa6:1}
J.cp.prototype={
gA:function(a){return C.au},
$isx:1}
J.co.prototype={
gA:function(a){return C.at}}
J.aA.prototype={
aR:function(a,b){if(b>=a.length)throw H.c(H.be(a,b))
return a.charCodeAt(b)},
aa:function(a,b){if(typeof b!=="string")throw H.c(P.k0(b,null,null))
return a+b},
d7:function(a,b,c){var t
if(c>a.length)throw H.c(P.aG(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bs:function(a,b){return this.d7(a,b,0)},
bu:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.fA(b,null,null))
if(b>c)throw H.c(P.fA(b,null,null))
if(c>a.length)throw H.c(P.fA(c,null,null))
return a.substring(b,c)},
d8:function(a,b){return this.bu(a,b,null)},
f7:function(a){return a.toLowerCase()},
eq:function(a,b,c){if(c>a.length)throw H.c(P.aG(c,0,a.length,null,null))
return H.nL(a,b,c)},
V:function(a,b){var t
if(typeof b!=="string")throw H.c(H.O(b))
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
gA:function(a){return C.an},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.be(a,b))
return a[b]},
$iso:1,
$aso:function(){},
$isE:1,
$asE:function(){return[P.n]},
$isn:1}
H.j.prototype={}
H.b_.prototype={
gw:function(a){return new H.cr(this,this.gj(this),0,null,[H.T(this,"b_",0)])},
aH:function(a,b){return this.da(0,b)},
f6:function(a,b){var t,s
t=H.A([],[H.T(this,"b_",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.t(0,s)
return t},
f5:function(a){return this.f6(a,!0)}}
H.cr.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.S(t)
r=s.gj(t)
if(this.b!==r)throw H.c(P.ak(t))
q=this.c
if(q>=r){this.sah(null)
return!1}this.sah(s.t(t,q));++this.c
return!0},
sah:function(a){this.d=a}}
H.ct.prototype={
gw:function(a){return new H.f2(null,J.aP(this.a),this.b,this.$ti)},
gj:function(a){return J.bi(this.a)},
$asQ:function(a,b){return[b]}}
H.ed.prototype={$isj:1,
$asj:function(a,b){return[b]}}
H.f2.prototype={
p:function(){var t=this.b
if(t.p()){this.sah(this.c.$1(t.gq(t)))
return!0}this.sah(null)
return!1},
gq:function(a){return this.a},
sah:function(a){this.a=a},
$ascn:function(a,b){return[b]}}
H.br.prototype={
gj:function(a){return J.bi(this.a)},
t:function(a,b){return this.b.$1(J.lK(this.a,b))},
$asj:function(a,b){return[b]},
$asb_:function(a,b){return[b]},
$asQ:function(a,b){return[b]}}
H.cU.prototype={
gw:function(a){return new H.hs(J.aP(this.a),this.b,this.$ti)}}
H.hs.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq(t)))return!0
return!1},
gq:function(a){var t=this.a
return t.gq(t)}}
H.aV.prototype={}
H.iZ.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.j_.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.i8.prototype={
seQ:function(a){this.z=a},
seS:function(a){this.ch=a}}
H.b7.prototype={
dG:function(){var t,s
t=this.e
s=t.a
this.c.l(0,s)
this.dL(s,t)},
bZ:function(a,b){if(!this.f.v(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.b7()},
f_:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.ar(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bQ();++r.d}this.y=!1}this.b7()},
ee:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.p(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eZ:function(a){var t,s,r
if(this.ch==null)return
for(t=J.p(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.H(P.t("removeRange"))
P.kA(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
d3:function(a,b){if(!this.r.v(0,a))return
this.db=b},
eK:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.H(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jn(null,null)
this.cx=t}t.Y(0,new H.i1(a,c))},
eJ:function(a,b){var t
if(!this.r.v(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aE()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jn(null,null)
this.cx=t}t.Y(0,this.geR())},
eL:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.a7(a)
if(b!=null)P.a7(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bj(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bJ(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.H(0,s)},
al:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.I(o)
p=H.a5(o)
this.eL(q,p)
if(this.db){this.aE()
if(this===u.globalState.e)throw o}}finally{this.cy=H.nk(r)
u.globalState.d=H.jI(t,"$isb7")
if(t!=null)$=t.geP()
if(this.cx!=null)for(;n=this.cx,!n.gap(n);)this.cx.cs().$0()}return s},
cp:function(a){return this.b.h(0,a)},
dL:function(a,b){var t=this.b
if(t.F(0,a))throw H.c(P.cg("Registry: ports must be registered only once."))
t.i(0,a,b)},
b7:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.aE()},
aE:function(){var t,s,r
t=this.cx
if(t!=null)t.a_(0)
for(t=this.b,s=t.gcN(t),s=s.gw(s);s.p();)s.gq(s).dO()
t.a_(0)
this.c.a_(0)
u.globalState.z.ar(0,this.a)
this.dx.a_(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].H(0,t[r+1])
this.ch=null}},
geP:function(){return this.d},
ger:function(){return this.e}}
H.i1.prototype={
$0:function(){this.a.H(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hH.prototype={
ey:function(){var t=this.a
if(t.b===t.c)return
return t.cs()},
cv:function(){var t,s,r
t=this.ey()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.F(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gap(s)}else s=!1
else s=!1
else s=!1
if(s)H.H(P.cg("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gap(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aD(["command","close"])
r=new H.a4(!0,P.b8(null,P.x)).L(r)
s.toString
self.postMessage(r)}return!1}t.eW()
return!0},
bU:function(){if(self.window!=null)new H.hI(this).$0()
else for(;this.cv(););},
as:function(){var t,s,r,q,p
if(!u.globalState.x)this.bU()
else try{this.bU()}catch(r){t=H.I(r)
s=H.a5(r)
q=u.globalState.Q
p=P.aD(["command","error","msg",H.e(t)+"\n"+H.e(s)])
p=new H.a4(!0,P.b8(null,P.x)).L(p)
q.toString
self.postMessage(p)}}}
H.hI.prototype={
$0:function(){if(!this.a.cv())return
P.mT(C.y,this)},
$S:function(){return{func:1,v:true}}}
H.aM.prototype={
eW:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.al(this.b)}}
H.i7.prototype={}
H.eN.prototype={
$0:function(){H.mx(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eO.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.bf(s,{func:1,args:[P.J,P.J]}))s.$2(this.e,this.d)
else if(H.bf(s,{func:1,args:[P.J]}))s.$1(this.e)
else s.$0()}t.b7()},
$S:function(){return{func:1,v:true}}}
H.hB.prototype={}
H.b9.prototype={
H:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.n7(b)
if(t.ger()===s){s=J.S(r)
switch(s.h(r,0)){case"pause":t.bZ(s.h(r,1),s.h(r,2))
break
case"resume":t.f_(s.h(r,1))
break
case"add-ondone":t.ee(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eZ(s.h(r,1))
break
case"set-errors-fatal":t.d3(s.h(r,1),s.h(r,2))
break
case"ping":t.eK(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eJ(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ar(0,s)
break}return}u.globalState.f.a.Y(0,new H.aM(t,new H.i9(this,r),"receive"))},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.b9){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.i9.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dJ(0,this.b)},
$S:function(){return{func:1}}}
H.bU.prototype={
H:function(a,b){var t,s,r
t=P.aD(["command","message","port",this,"msg",b])
s=new H.a4(!0,P.b8(null,P.x)).L(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
v:function(a,b){var t,s
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
gu:function(a){return C.b.de((this.b<<16^this.a<<8)>>>0,this.c)}}
H.cG.prototype={
dO:function(){this.c=!0
this.b=null},
dJ:function(a,b){if(this.c)return
this.b.$1(b)},
$ismM:1}
H.ha.prototype={
dw:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.Y(0,new H.aM(s,new H.hb(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.iA()
this.c=self.setTimeout(H.bd(new H.hc(this,b),0),a)}else{H.b(a>0)
throw H.c(P.t("Timer greater than 0."))}}}
H.hb.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.hc.prototype={
$0:function(){var t=this.a
t.c=null
H.iO()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.au.prototype={
gu:function(a){var t=this.a
t=C.b.b0(t,0)^C.b.J(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
v:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.au){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.a4.prototype={
L:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.p(a)
if(!!t.$isbv)return["buffer",a]
if(!!t.$isb2)return["typed",a]
if(!!t.$iso)return this.d_(a)
if(!!t.$ismu){r=this.gcX()
q=t.gD(a)
q=H.jo(q,r,H.T(q,"Q",0),null)
q=P.ks(q,!0,H.T(q,"Q",0))
t=t.gcN(a)
t=H.jo(t,r,H.T(t,"Q",0),null)
return["map",q,P.ks(t,!0,H.T(t,"Q",0))]}if(!!t.$iskq)return this.d0(a)
if(!!t.$isa)this.cL(a)
if(!!t.$ismM)this.at(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isb9)return this.d1(a)
if(!!t.$isbU)return this.d2(a)
if(!!t.$isaw){p=a.$static_name
if(p==null)this.at(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isau)return["capability",a.a]
if(!(a instanceof P.C))this.cL(a)
return["dart",u.classIdExtractor(a),this.cZ(u.classFieldsExtractor(a))]},
at:function(a,b){throw H.c(P.t((b==null?"Can't transmit:":b)+" "+H.e(a)))},
cL:function(a){return this.at(a,null)},
d_:function(a){var t
H.b(typeof a!=="string")
t=this.cY(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.at(a,"Can't serialize indexable: ")},
cY:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.L(a[s])
return t},
cZ:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.L(a[t]))
return a},
d0:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.at(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.L(a[t[r]])
return["js-object",t,s]},
d2:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
d1:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aL.prototype={
a0:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.dO("Bad serialized message: "+H.e(a)))
switch(C.a.gbb(a)){case"ref":H.b(J.B(a[0],"ref"))
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
return J.az(H.A(this.ak(t),[null]))
case"extendable":H.b(J.B(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.A(this.ak(t),[null])
case"mutable":H.b(J.B(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.ak(t)
case"const":H.b(J.B(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
return J.az(H.A(this.ak(t),[null]))
case"map":return this.eB(a)
case"sendport":return this.eC(a)
case"raw sendport":H.b(J.B(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.eA(a)
case"function":H.b(J.B(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.b(J.B(a[0],"capability"))
return new H.au(a[1])
case"dart":H.b(J.B(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.l(this.b,q)
this.ak(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.e(a))}},
ak:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.a0(a[t]))
return a},
eB:function(a){var t,s,r,q,p
H.b(J.B(a[0],"map"))
t=a[1]
s=a[2]
r=P.a0()
C.a.l(this.b,r)
t=J.lX(t,this.gez()).f5(0)
for(q=J.S(s),p=0;p<t.length;++p)r.i(0,t[p],this.a0(q.h(s,p)))
return r},
eC:function(a){var t,s,r,q,p,o,n
H.b(J.B(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cp(r)
if(o==null)return
n=new H.b9(o,s)}else n=new H.bU(t,r,s)
C.a.l(this.b,n)
return n},
eA:function(a){var t,s,r,q,p,o
H.b(J.B(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.S(t),p=J.S(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.a0(p.h(s,o))
return r}}
H.fD.prototype={}
H.hg.prototype={
P:function(a){var t,s,r
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
H.fl.prototype={
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
H.j0.prototype={
$1:function(a){if(!!J.p(a).$isaU)if(a.$thrownJsError==null)a.$thrownJsError=this.a
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
H.iJ.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iK.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iL.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iM.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iN.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.aw.prototype={
k:function(a){return"Closure '"+H.by(this).trim()+"'"},
$isjf:1,
gfc:function(){return this},
$D:null}
H.h5.prototype={}
H.fS.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bk.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bk))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.aF(this.a)
else s=typeof t!=="object"?J.bh(t):H.aF(t)
return(s^H.aF(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.by(t)+"'")}}
H.hi.prototype={
k:function(a){return this.a}}
H.dT.prototype={
k:function(a){return this.a}}
H.fH.prototype={
k:function(a){return"RuntimeError: "+H.e(this.a)}}
H.hu.prototype={
k:function(a){return C.i.aa("Assertion failed: ",P.cf(this.a))}}
H.ao.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.bh(this.a)},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.ao){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ab.prototype={
gj:function(a){return this.a},
gap:function(a){return this.a===0},
gD:function(a){return new H.eW(this,[H.aj(this,0)])},
gcN:function(a){return H.jo(this.gD(this),new H.eS(this),H.aj(this,0),H.aj(this,1))},
F:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bN(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bN(s,b)}else return this.eM(b)},
eM:function(a){var t=this.d
if(t==null)return!1
return this.ao(this.az(t,this.an(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ai(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ai(r,b)
return s==null?null:s.b}else return this.eN(b)},
eN:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.az(t,this.an(a))
r=this.ao(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aY()
this.b=t}this.bF(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aY()
this.c=s}this.bF(s,b,c)}else{r=this.d
if(r==null){r=this.aY()
this.d=r}q=this.an(b)
p=this.az(r,q)
if(p==null)this.b_(r,q,[this.aZ(b,c)])
else{o=this.ao(p,b)
if(o>=0)p[o].b=c
else p.push(this.aZ(b,c))}}},
ar:function(a,b){if(typeof b==="string")return this.bT(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bT(this.c,b)
else return this.eO(b)},
eO:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.az(t,this.an(a))
r=this.ao(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bX(q)
return q.b},
a_:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aX()}},
am:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.ak(this))
t=t.c}},
bF:function(a,b,c){var t=this.ai(a,b)
if(t==null)this.b_(a,b,this.aZ(b,c))
else t.b=c},
bT:function(a,b){var t
if(a==null)return
t=this.ai(a,b)
if(t==null)return
this.bX(t)
this.bO(a,b)
return t.b},
aX:function(){this.r=this.r+1&67108863},
aZ:function(a,b){var t,s
t=new H.eV(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.aX()
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
this.aX()},
an:function(a){return J.bh(a)&0x3ffffff},
ao:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.B(a[s].a,b))return s
return-1},
k:function(a){return P.kt(this)},
ai:function(a,b){return a[b]},
az:function(a,b){return a[b]},
b_:function(a,b,c){H.b(c!=null)
a[b]=c},
bO:function(a,b){delete a[b]},
bN:function(a,b){return this.ai(a,b)!=null},
aY:function(){var t=Object.create(null)
this.b_(t,"<non-identifier-key>",t)
this.bO(t,"<non-identifier-key>")
return t},
$ismu:1}
H.eS.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.eV.prototype={}
H.eW.prototype={
gj:function(a){return this.a.a},
gw:function(a){var t,s
t=this.a
s=new H.eX(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eX.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ak(t))
else{t=this.c
if(t==null){this.sbE(null)
return!1}else{this.sbE(t.a)
this.c=this.c.c
return!0}}},
sbE:function(a){this.d=a}}
H.iF.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.iG.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.n]}}}
H.iH.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.n]}}}
H.bv.prototype={
gA:function(a){return C.ae},
$isbv:1}
H.b2.prototype={$isb2:1}
H.fb.prototype={
gA:function(a){return C.af}}
H.cw.prototype={
gj:function(a){return a.length},
$iso:1,
$aso:function(){},
$isr:1,
$asr:function(){}}
H.cx.prototype={
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
i:function(a,b,c){H.ag(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.X]},
$asaV:function(){return[P.X]},
$asl:function(){return[P.X]},
$ish:1,
$ash:function(){return[P.X]}}
H.cy.prototype={
i:function(a,b,c){H.ag(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.x]},
$asaV:function(){return[P.x]},
$asl:function(){return[P.x]},
$ish:1,
$ash:function(){return[P.x]}}
H.cv.prototype={
gA:function(a){return C.ag},
$iseB:1}
H.fc.prototype={
gA:function(a){return C.ah}}
H.fd.prototype={
gA:function(a){return C.ai},
h:function(a,b){H.ag(b,a,a.length)
return a[b]}}
H.fe.prototype={
gA:function(a){return C.aj},
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
$iskn:1}
H.ff.prototype={
gA:function(a){return C.ak},
h:function(a,b){H.ag(b,a,a.length)
return a[b]}}
H.fg.prototype={
gA:function(a){return C.ao},
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
$iskP:1}
H.fh.prototype={
gA:function(a){return C.ap},
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
$iskQ:1}
H.cz.prototype={
gA:function(a){return C.aq},
gj:function(a){return a.length},
h:function(a,b){H.ag(b,a,a.length)
return a[b]}}
H.fi.prototype={
gA:function(a){return C.ar},
gj:function(a){return a.length},
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
$iskR:1}
H.bL.prototype={}
H.bM.prototype={}
H.bN.prototype={}
H.bO.prototype={}
P.hx.prototype={
$1:function(a){var t,s
H.iO()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.hw.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.iA()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.hy.prototype={
$0:function(){H.iO()
this.a.$0()},
$S:function(){return{func:1}}}
P.hz.prototype={
$0:function(){H.iO()
this.a.$0()},
$S:function(){return{func:1}}}
P.V.prototype={}
P.eF.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.c)this.d.R(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.c)this.d.R(t.c,t.d)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.eE.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.b]=a
if(s===0)this.c.bM(r)}else if(t.b===0&&!this.e)this.c.R(t.c,t.d)},
$S:function(a){return{func:1,args:[,]}}}
P.jc.prototype={}
P.hC.prototype={}
P.hv.prototype={
b9:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.fR("Future already completed"))
t.bG(b)}}
P.im.prototype={
b9:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.fR("Future already completed"))
t.ag(b)}}
P.bH.prototype={
eT:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.bf(this.d,a.a)},
eI:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.bf(s,{func:1,args:[P.C,P.b3]}))return t.f1(s,a.a,a.b)
else return t.bf(s,a.a)}}
P.F.prototype={
bh:function(a,b){var t,s,r
t=$.v
if(t!==C.d){t.toString
if(b!=null)b=P.nc(b,t)}s=new P.F(0,t,null,[null])
r=b==null?1:3
this.aP(new P.bH(null,s,r,a,b,[H.aj(this,0),null]))
return s},
aF:function(a){return this.bh(a,null)},
fb:function(a){var t,s
t=$.v
s=new P.F(0,t,null,this.$ti)
if(t!==C.d)t.toString
t=H.aj(this,0)
this.aP(new P.bH(null,s,8,a,null,[t,t]))
return s},
aQ:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
aP:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.jI(this.c,"$isbH")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.aP(a)
return}this.aQ(t)}H.b(this.a>=4)
t=this.b
t.toString
P.bb(null,null,t,new P.hN(this,a))}},
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
return}this.aQ(s)}H.b(this.a>=4)
t.a=this.aB(a)
s=this.b
s.toString
P.bb(null,null,s,new P.hV(t,this))}},
aA:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.aB(t)},
aB:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
ag:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.bY(a,"$isV",t,"$asV")
if(s){t=H.bY(a,"$isF",t,null)
if(t)P.hQ(a,this)
else P.kV(a,this)}else{r=this.aA()
H.b(this.a<4)
this.a=4
this.c=a
P.b6(this,r)}},
bM:function(a){var t
H.b(this.a<4)
H.b(!J.p(a).$isV)
t=this.aA()
H.b(this.a<4)
this.a=4
this.c=a
P.b6(this,t)},
R:function(a,b){var t
H.b(this.a<4)
t=this.aA()
H.b(this.a<4)
this.a=8
this.c=new P.aQ(a,b)
P.b6(this,t)},
dP:function(a){return this.R(a,null)},
bG:function(a){var t
H.b(this.a<4)
t=H.bY(a,"$isV",this.$ti,"$asV")
if(t){this.dN(a)
return}H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bb(null,null,t,new P.hP(this,a))},
dN:function(a){var t=H.bY(a,"$isF",this.$ti,null)
if(t){if(a.a===8){H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bb(null,null,t,new P.hU(this,a))}else P.hQ(a,this)
return}P.kV(a,this)},
dM:function(a,b){var t
H.b(this.a<4)
H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bb(null,null,t,new P.hO(this,a,b))},
$isV:1,
gb1:function(){return this.a},
ge6:function(){return this.c}}
P.hN.prototype={
$0:function(){P.b6(this.a,this.b)},
$S:function(){return{func:1}}}
P.hV.prototype={
$0:function(){P.b6(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hR.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.ag(a)},
$S:function(a){return{func:1,args:[,]}}}
P.hS.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.R(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.hT.prototype={
$0:function(){this.a.R(this.b,this.c)},
$S:function(){return{func:1}}}
P.hP.prototype={
$0:function(){this.a.bM(this.b)},
$S:function(){return{func:1}}}
P.hU.prototype={
$0:function(){P.hQ(this.b,this.a)},
$S:function(){return{func:1}}}
P.hO.prototype={
$0:function(){this.a.R(this.b,this.c)},
$S:function(){return{func:1}}}
P.hY.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.cu(q.d)}catch(n){s=H.I(n)
r=H.a5(n)
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
return}if(!!J.p(t).$isV){if(t instanceof P.F&&t.gb1()>=4){if(t.gb1()===8){q=t
H.b(q.gb1()===8)
p=this.b
p.b=q.ge6()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.aF(new P.hZ(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hZ.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.hX.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.bf(r.d,this.c)}catch(q){t=H.I(q)
s=H.a5(q)
r=this.a
r.b=new P.aQ(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hW.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.eT(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eI(t)
p.a=!1}}catch(o){s=H.I(o)
r=H.a5(o)
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
P.cV.prototype={}
P.bA.prototype={
gj:function(a){var t,s
t={}
s=new P.F(0,$.v,null,[P.x])
t.a=0
this.co(new P.h_(t),!0,new P.h0(t,s),s.gbL())
return s},
gbb:function(a){var t,s
t={}
s=new P.F(0,$.v,null,[H.T(this,"bA",0)])
t.a=null
t.a=this.co(new P.fY(t,this,s),!0,new P.fZ(s),s.gbL())
return s}}
P.h_.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.h0.prototype={
$0:function(){this.b.ag(this.a.a)},
$S:function(){return{func:1}}}
P.fY.prototype={
$1:function(a){P.n6(this.a.a,this.c,a)},
$S:function(a){return{func:1,args:[H.T(this.b,"bA",0)]}}}
P.fZ.prototype={
$0:function(){var t,s,r,q
try{r=H.cm()
throw H.c(r)}catch(q){t=H.I(q)
s=H.a5(q)
P.n8(this.a,t,s)}},
$S:function(){return{func:1}}}
P.fX.prototype={}
P.is.prototype={
$0:function(){return this.a.ag(this.b)},
$S:function(){return{func:1}}}
P.jr.prototype={}
P.aQ.prototype={
k:function(a){return H.e(this.a)},
$isaU:1}
P.ir.prototype={}
P.iv.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.bx()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.ib.prototype={
f2:function(a){var t,s,r
try{if(C.d===$.v){a.$0()
return}P.l0(null,null,this,a)}catch(r){t=H.I(r)
s=H.a5(r)
P.iu(null,null,this,t,s)}},
f3:function(a,b){var t,s,r
try{if(C.d===$.v){a.$1(b)
return}P.l1(null,null,this,a,b)}catch(r){t=H.I(r)
s=H.a5(r)
P.iu(null,null,this,t,s)}},
ek:function(a){return new P.id(this,a)},
b8:function(a){return new P.ic(this,a)},
el:function(a){return new P.ie(this,a)},
h:function(a,b){return},
cu:function(a){if($.v===C.d)return a.$0()
return P.l0(null,null,this,a)},
bf:function(a,b){if($.v===C.d)return a.$1(b)
return P.l1(null,null,this,a,b)},
f1:function(a,b,c){if($.v===C.d)return a.$2(b,c)
return P.nd(null,null,this,a,b,c)}}
P.id.prototype={
$0:function(){return this.a.cu(this.b)},
$S:function(){return{func:1}}}
P.ic.prototype={
$0:function(){return this.a.f2(this.b)},
$S:function(){return{func:1}}}
P.ie.prototype={
$1:function(a){return this.a.f3(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.i5.prototype={
an:function(a){return H.nE(a)&0x3ffffff},
ao:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.i3.prototype={
gw:function(a){var t=new P.bJ(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
B:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dQ(b)},
dQ:function(a){var t=this.d
if(t==null)return!1
return this.ay(t[this.ax(a)],a)>=0},
cp:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.B(0,a)?a:null
else return this.dZ(a)},
dZ:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ax(a)]
r=this.ay(s,a)
if(r<0)return
return J.aO(s,r).gdS()},
l:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.jA()
this.b=t}return this.bI(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.jA()
this.c=s}return this.bI(s,b)}else return this.Y(0,b)},
Y:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.jA()
this.d=t}s=this.ax(b)
r=t[s]
if(r==null){q=[this.aT(b)]
H.b(q!=null)
t[s]=q}else{if(this.ay(r,b)>=0)return!1
r.push(this.aT(b))}return!0},
ar:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bJ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bJ(this.c,b)
else return this.e0(0,b)},
e0:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ax(b)]
r=this.ay(s,b)
if(r<0)return!1
this.bK(s.splice(r,1)[0])
return!0},
a_:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aS()}},
bI:function(a,b){var t
if(a[b]!=null)return!1
t=this.aT(b)
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
aS:function(){this.r=this.r+1&67108863},
aT:function(a){var t,s
t=new P.i4(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.aS()
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
this.aS()},
ax:function(a){return J.bh(a)&0x3ffffff},
ay:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.B(a[s].a,b))return s
return-1}}
P.i4.prototype={
gdS:function(){return this.a}}
P.bJ.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ak(t))
else{t=this.c
if(t==null){this.saf(null)
return!1}else{this.saf(t.a)
this.c=this.c.b
return!0}}},
saf:function(a){this.d=a}}
P.i0.prototype={}
P.jl.prototype={$isj:1}
P.cq.prototype={$isj:1,$ish:1}
P.l.prototype={
gw:function(a){return new H.cr(a,this.gj(a),0,null,[H.T(a,"l",0)])},
t:function(a,b){return this.h(a,b)},
cq:function(a,b){return new H.br(a,b,[H.T(a,"l",0),null])},
eH:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.c(P.ak(a))}return s},
k:function(a){return P.eP(a,"[","]")}}
P.cs.prototype={}
P.f1.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.e(a)
t.a=s+": "
t.a+=H.e(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.b1.prototype={
am:function(a,b){var t,s
for(t=J.aP(this.gD(a));t.p();){s=t.gq(t)
b.$2(s,this.h(a,s))}},
gj:function(a){return J.bi(this.gD(a))},
k:function(a){return P.kt(a)}}
P.eY.prototype={
dn:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sbV(H.A(t,[b]))},
gw:function(a){return new P.i6(this,this.c,this.d,this.b,null,this.$ti)},
gap:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t,s
t=this.gj(this)
if(0>b||b>=t)H.H(P.z(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
a_:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eP(this,"{","}")},
cs:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.cm());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
Y:function(a,b){var t,s
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
C.a.bq(s,0,q,t,r)
C.a.bq(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbV(s)},
sbV:function(a){this.a=a}}
P.i6.prototype={
gq:function(a){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.H(P.ak(t))
s=this.d
if(s===this.b){this.saf(null)
return!1}this.saf(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
saf:function(a){this.e=a}}
P.fK.prototype={
K:function(a,b){var t
for(t=J.aP(b);t.p();)this.l(0,t.gq(t))},
k:function(a){return P.eP(this,"{","}")},
$isj:1}
P.fJ.prototype={}
P.bK.prototype={}
P.ai.prototype={}
P.E.prototype={}
P.bl.prototype={
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.bl))return!1
return this.a===b.a&&this.b===b.b},
V:function(a,b){return C.b.V(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.b0(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.mh(H.mL(this))
s=P.c8(H.mJ(this))
r=P.c8(H.mF(this))
q=P.c8(H.mG(this))
p=P.c8(H.mI(this))
o=P.c8(H.mK(this))
n=P.mi(H.mH(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isE:1,
$asE:function(){return[P.bl]}}
P.X.prototype={}
P.ax.prototype={
aK:function(a,b){return C.b.aK(this.a,b.gdR())},
aJ:function(a,b){return C.b.aJ(this.a,b.gdR())},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.ax))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
V:function(a,b){return C.b.V(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.ec()
s=this.a
if(s<0)return"-"+new P.ax(0-s).k(0)
r=t.$1(C.b.J(s,6e7)%60)
q=t.$1(C.b.J(s,1e6)%60)
p=new P.eb().$1(s%1e6)
return""+C.b.J(s,36e8)+":"+H.e(r)+":"+H.e(q)+"."+H.e(p)},
$isE:1,
$asE:function(){return[P.ax]}}
P.eb.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.n,args:[P.x]}}}
P.ec.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.n,args:[P.x]}}}
P.aU.prototype={}
P.c4.prototype={
k:function(a){return"Assertion failed"}}
P.bx.prototype={
k:function(a){return"Throw of null."}}
P.a9.prototype={
gaV:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaU:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+t
q=this.gaV()+s+r
if(!this.a)return q
p=this.gaU()
o=P.cf(this.b)
return q+p+": "+H.e(o)}}
P.cF.prototype={
gaV:function(){return"RangeError"},
gaU:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.e(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.e(t)
else if(r>t)s=": Not in range "+H.e(t)+".."+H.e(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.e(t)}return s}}
P.eM.prototype={
gaV:function(){return"RangeError"},
gaU:function(){H.b(this.a)
if(J.lt(this.b,0))return": index must not be negative"
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
P.dV.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.cf(t))+"."}}
P.cL.prototype={
k:function(a){return"Stack Overflow"},
$isaU:1}
P.e3.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.je.prototype={}
P.hM.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.e(t)}}
P.ef.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.H(P.k0(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kx(b,"expando$values")
return s==null?null:H.kx(s,t)},
k:function(a){return"Expando:"+H.e(this.b)}}
P.x.prototype={}
P.Q.prototype={
aH:function(a,b){return new H.cU(this,b,[H.T(this,"Q",0)])},
gj:function(a){var t,s
H.b(!this.$isj)
t=this.gw(this)
for(s=0;t.p();)++s
return s},
ga4:function(a){var t,s
t=this.gw(this)
if(!t.p())throw H.c(H.cm())
s=t.gq(t)
if(t.p())throw H.c(H.mC())
return s},
t:function(a,b){var t,s,r
if(b<0)H.H(P.aG(b,0,null,"index",null))
for(t=this.gw(this),s=0;t.p();){r=t.gq(t)
if(b===s)return r;++s}throw H.c(P.z(b,this,"index",null,s))},
k:function(a){return P.mA(this,"(",")")}}
P.cn.prototype={}
P.h.prototype={$isj:1}
P.b0.prototype={}
P.J.prototype={
gu:function(a){return P.C.prototype.gu.call(this,this)},
k:function(a){return"null"}}
P.a6.prototype={$isE:1,
$asE:function(){return[P.a6]}}
P.C.prototype={constructor:P.C,$isC:1,
v:function(a,b){return this===b},
gu:function(a){return H.aF(this)},
k:function(a){return"Instance of '"+H.by(this)+"'"},
gA:function(a){return new H.ao(H.iD(this),null)},
toString:function(){return this.k(this)}}
P.b3.prototype={}
P.n.prototype={$isE:1,
$asE:function(){return[P.n]}}
P.bB.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga5:function(){return this.a}}
P.ju.prototype={}
W.k.prototype={}
W.c3.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gE:function(a){return a.z}}
W.dL.prototype={
gj:function(a){return a.length}}
W.dM.prototype={
k:function(a){return String(a)}}
W.dN.prototype={
k:function(a){return String(a)}}
W.as.prototype={$isas:1}
W.at.prototype={
bi:function(a,b,c){if(c!=null)return this.dU(a,b,P.nn(c,null))
return this.dV(a,b)},
cU:function(a,b){return this.bi(a,b,null)},
dU:function(a,b,c){return a.getContext(b,c)},
dV:function(a,b){return a.getContext(b)},
$isat:1}
W.c5.prototype={
aC:function(a,b,c){return a.addColorStop(b,c)}}
W.c6.prototype={
ca:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
eG:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
aI:function(a){return P.ix(a.getContextAttributes())}}
W.av.prototype={
gj:function(a){return a.length}}
W.dW.prototype={
gj:function(a){return a.length}}
W.dX.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.dY.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gE:function(a){return a.z}}
W.dZ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gE:function(a){return a.z}}
W.aS.prototype={
bH:function(a,b){var t,s
t=$.$get$k8()
s=t[b]
if(typeof s==="string")return s
s=this.ea(a,b)
t[b]=s
return s},
ea:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mj()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.e_.prototype={}
W.Y.prototype={}
W.aT.prototype={}
W.e0.prototype={
gj:function(a){return a.length}}
W.e1.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gE:function(a){return a.z}}
W.e2.prototype={
gj:function(a){return a.length}}
W.e4.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.e5.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gE:function(a){return a.z}}
W.c9.prototype={}
W.bm.prototype={
ef:function(a,b){return a.adoptNode(b)},
cV:function(a,b){return a.getElementById(b)},
eX:function(a,b){return a.querySelector(b)}}
W.e6.prototype={
k:function(a){return String(a)}}
W.ca.prototype={
ev:function(a,b){return a.createHTMLDocument(b)}}
W.e7.prototype={
gN:function(a){return a.a},
gT:function(a){return a.b},
gU:function(a){return a.c}}
W.cb.prototype={
gN:function(a){return a.a},
gT:function(a){return a.b},
gU:function(a){return a.c}}
W.e8.prototype={
gaG:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gE:function(a){return a.z}}
W.cc.prototype={
gaG:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gE:function(a){return a.z}}
W.cd.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[P.R]},
$isj:1,
$asj:function(){return[P.R]},
$isr:1,
$asr:function(){return[P.R]},
$asl:function(){return[P.R]},
$ish:1,
$ash:function(){return[P.R]},
$asm:function(){return[P.R]}}
W.ce.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.ga9(a))+" x "+H.e(this.ga7(a))},
v:function(a,b){var t
if(b==null)return!1
t=J.p(b)
if(!t.$isR)return!1
return a.left===t.gcm(b)&&a.top===t.gcB(b)&&this.ga9(a)===t.ga9(b)&&this.ga7(a)===t.ga7(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga9(a)
q=this.ga7(a)
return W.kZ(W.aN(W.aN(W.aN(W.aN(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga7:function(a){return a.height},
gcm:function(a){return a.left},
gcB:function(a){return a.top},
ga9:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isR:1,
$asR:function(){}}
W.e9.prototype={
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
W.ea.prototype={
gj:function(a){return a.length}}
W.Z.prototype={
gei:function(a){return new W.hF(a)},
k:function(a){return a.localName},
O:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kg
if(t==null){t=H.A([],[W.cB])
s=new W.cC(t)
C.a.l(t,W.kW(null))
C.a.l(t,W.l_())
$.kg=s
d=s}else d=t
t=$.kf
if(t==null){t=new W.du(d)
$.kf=t
c=t}else{t.a=d
c=t}}if($.al==null){t=document
s=t.implementation
s=(s&&C.M).ev(s,"")
$.al=s
$.jd=s.createRange()
s=$.al
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.al.head;(t&&C.N).S(t,r)}t=$.al
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jI(s,"$isas")}t=$.al
if(!!this.$isas)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.al.body;(t&&C.o).S(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.B(C.X,a.tagName)){t=$.jd;(t&&C.F).cW(t,q)
t=$.jd
p=(t&&C.F).es(t,b)}else{q.innerHTML=b
p=$.al.createDocumentFragment()
for(t=J.i(p);s=q.firstChild,s!=null;)t.S(p,s)}t=$.al.body
if(q==null?t!=null:q!==t)J.jU(q)
c.bp(p)
C.r.ef(document,p)
return p},
eu:function(a,b,c){return this.O(a,b,c,null)},
d5:function(a,b,c,d){a.textContent=null
this.S(a,this.O(a,b,c,d))},
d4:function(a,b){return this.d5(a,b,null,null)},
ab:function(a,b){return a.getAttribute(b)},
e1:function(a,b){return a.removeAttribute(b)},
$isZ:1,
gf4:function(a){return a.tagName}}
W.ee.prototype={
$1:function(a){return!!J.p(a).$isZ},
$S:function(a){return{func:1,args:[,]}}}
W.f.prototype={$isf:1}
W.d.prototype={
dK:function(a,b,c,d){return a.addEventListener(b,H.bd(c,1),!1)},
e3:function(a,b,c,d){return a.removeEventListener(b,H.bd(c,1),!1)}}
W.ey.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.ch]},
$isj:1,
$asj:function(){return[W.ch]},
$isr:1,
$asr:function(){return[W.ch]},
$asl:function(){return[W.ch]},
$ish:1,
$ash:function(){return[W.ch]},
$asm:function(){return[W.ch]}}
W.ez.prototype={
gj:function(a){return a.length}}
W.eD.prototype={
gj:function(a){return a.length}}
W.eH.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gE:function(a){return a.z}}
W.ck.prototype={}
W.eI.prototype={
gj:function(a){return a.length}}
W.bo.prototype={
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
W.cl.prototype={}
W.eJ.prototype={
H:function(a,b){return a.send(b)}}
W.bp.prototype={}
W.aW.prototype={$isaW:1}
W.aX.prototype={$isaX:1}
W.aY.prototype={$isaY:1}
W.aC.prototype={$isaC:1}
W.f_.prototype={
k:function(a){return String(a)}}
W.f0.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gE:function(a){return a.z}}
W.bt.prototype={}
W.f6.prototype={
gj:function(a){return a.length}}
W.f8.prototype={
fd:function(a,b,c){return a.send(b,c)},
H:function(a,b){return a.send(b)}}
W.bu.prototype={}
W.f9.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cu]},
$isj:1,
$asj:function(){return[W.cu]},
$isr:1,
$asr:function(){return[W.cu]},
$asl:function(){return[W.cu]},
$ish:1,
$ash:function(){return[W.cu]},
$asm:function(){return[W.cu]}}
W.K.prototype={$isK:1}
W.M.prototype={
ga4:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.c(P.fR("No elements"))
if(s>1)throw H.c(P.fR("More than one element"))
return t.firstChild},
K:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.i(s),p=0;p<r;++p)q.S(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.lw(t,c,C.D.h(t.childNodes,b))},
gw:function(a){var t=this.a.childNodes
return new W.ci(t,t.length,-1,null,[H.T(t,"m",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.D.h(this.a.childNodes,b)},
$asj:function(){return[W.q]},
$ascq:function(){return[W.q]},
$asl:function(){return[W.q]},
$ash:function(){return[W.q]},
$asbK:function(){return[W.q]}}
W.q.prototype={
eY:function(a){var t=a.parentNode
if(t!=null)J.j1(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.d9(a):t},
S:function(a,b){return a.appendChild(b)},
e2:function(a,b){return a.removeChild(b)},
e4:function(a,b,c){return a.replaceChild(b,c)},
$isq:1,
gbd:function(a){return a.previousSibling}}
W.cA.prototype={
be:function(a){return a.previousNode()}}
W.bw.prototype={
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
W.ac.prototype={
gj:function(a){return a.length}}
W.fw.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.ac]},
$isj:1,
$asj:function(){return[W.ac]},
$isr:1,
$asr:function(){return[W.ac]},
$asl:function(){return[W.ac]},
$ish:1,
$ash:function(){return[W.ac]},
$asm:function(){return[W.ac]}}
W.fz.prototype={
H:function(a,b){return a.send(b)}}
W.cE.prototype={
es:function(a,b){return a.createContextualFragment(b)},
cW:function(a,b){return a.selectNodeContents(b)}}
W.cH.prototype={
H:function(a,b){return a.send(b)}}
W.fI.prototype={
gj:function(a){return a.length}}
W.an.prototype={}
W.fN.prototype={
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
W.fP.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cK]},
$isj:1,
$asj:function(){return[W.cK]},
$isr:1,
$asr:function(){return[W.cK]},
$asl:function(){return[W.cK]},
$ish:1,
$ash:function(){return[W.cK]},
$asm:function(){return[W.cK]}}
W.ad.prototype={
gj:function(a){return a.length}}
W.fV.prototype={
h:function(a,b){return this.bP(a,b)},
am:function(a,b){var t,s
for(t=0;!0;++t){s=this.dY(a,t)
if(s==null)return
b.$2(s,this.bP(a,s))}},
gD:function(a){var t=H.A([],[P.n])
this.am(a,new W.fW(t))
return t},
gj:function(a){return a.length},
bP:function(a,b){return a.getItem(b)},
dY:function(a,b){return a.key(b)},
$asb1:function(){return[P.n,P.n]}}
W.fW.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.cN.prototype={
O:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aM(a,b,c,d)
t=W.ml("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.M(s).K(0,new W.M(t))
return s}}
W.h3.prototype={
O:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aM(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.O(t.createElement("table"),b,c,d)
t.toString
t=new W.M(t)
r=t.ga4(t)
r.toString
t=new W.M(r)
q=t.ga4(t)
s.toString
q.toString
new W.M(s).K(0,new W.M(q))
return s}}
W.h4.prototype={
O:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aM(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.O(t.createElement("table"),b,c,d)
t.toString
t=new W.M(t)
r=t.ga4(t)
s.toString
r.toString
new W.M(s).K(0,new W.M(r))
return s}}
W.bC.prototype={$isbC:1}
W.h6.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cP]},
$isj:1,
$asj:function(){return[W.cP]},
$isr:1,
$asr:function(){return[W.cP]},
$asl:function(){return[W.cP]},
$ish:1,
$ash:function(){return[W.cP]},
$asm:function(){return[W.cP]}}
W.h7.prototype={
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
W.h9.prototype={
gj:function(a){return a.length}}
W.aH.prototype={$isaH:1}
W.hd.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cS]},
$isj:1,
$asj:function(){return[W.cS]},
$isr:1,
$asr:function(){return[W.cS]},
$asl:function(){return[W.cS]},
$ish:1,
$ash:function(){return[W.cS]},
$asm:function(){return[W.cS]}}
W.he.prototype={
gj:function(a){return a.length}}
W.cT.prototype={
be:function(a){return a.previousNode()}}
W.aI.prototype={}
W.hn.prototype={
k:function(a){return String(a)}}
W.hp.prototype={
gm:function(a){return a.x},
gE:function(a){return a.z}}
W.b5.prototype={$isb5:1}
W.hq.prototype={
gj:function(a){return a.length}}
W.hr.prototype={
H:function(a,b){return a.send(b)}}
W.aK.prototype={
gex:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.t("deltaY is not supported"))},
$isaK:1}
W.bG.prototype={
geh:function(a){var t,s
t=P.a6
s=new P.F(0,$.v,null,[t])
this.dT(a)
this.e5(a,W.l4(new W.ht(new P.im(s,[t]))))
return s},
e5:function(a,b){return a.requestAnimationFrame(H.bd(b,1))},
dT:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ht.prototype={
$1:function(a){this.a.b9(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.jw.prototype={}
W.hD.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.c7]},
$isj:1,
$asj:function(){return[W.c7]},
$isr:1,
$asr:function(){return[W.c7]},
$asl:function(){return[W.c7]},
$ish:1,
$ash:function(){return[W.c7]},
$asm:function(){return[W.c7]}}
W.hE.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
v:function(a,b){var t
if(b==null)return!1
t=J.p(b)
if(!t.$isR)return!1
return a.left===t.gcm(b)&&a.top===t.gcB(b)&&a.width===t.ga9(b)&&a.height===t.ga7(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.kZ(W.aN(W.aN(W.aN(W.aN(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga7:function(a){return a.height},
ga9:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.i_.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cj]},
$isj:1,
$asj:function(){return[W.cj]},
$isr:1,
$asr:function(){return[W.cj]},
$asl:function(){return[W.cj]},
$ish:1,
$ash:function(){return[W.cj]},
$asm:function(){return[W.cj]}}
W.d8.prototype={
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
W.ij.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.ad]},
$isj:1,
$asj:function(){return[W.ad]},
$isr:1,
$asr:function(){return[W.ad]},
$asl:function(){return[W.ad]},
$ish:1,
$ash:function(){return[W.ad]},
$asm:function(){return[W.ad]}}
W.ik.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cM]},
$isj:1,
$asj:function(){return[W.cM]},
$isr:1,
$asr:function(){return[W.cM]},
$asl:function(){return[W.cM]},
$ish:1,
$ash:function(){return[W.cM]},
$asm:function(){return[W.cM]}}
W.hA.prototype={
am:function(a,b){var t,s,r,q,p,o
for(t=this.gD(this),s=t.length,r=this.a,q=J.i(r),p=0;p<t.length;t.length===s||(0,H.P)(t),++p){o=t[p]
b.$2(o,q.ab(r,o))}},
gD:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.A([],[P.n])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
$ascs:function(){return[P.n,P.n]},
$asb1:function(){return[P.n,P.n]},
gdW:function(){return this.a}}
W.hF.prototype={
h:function(a,b){return J.j9(this.a,b)},
gj:function(a){return this.gD(this).length}}
W.hJ.prototype={
co:function(a,b,c,d){return W.a3(this.a,this.b,a,!1,H.aj(this,0))}}
W.hG.prototype={}
W.hK.prototype={
dE:function(a,b,c,d,e){this.ec()},
en:function(a){if(this.b==null)return
this.ed()
this.b=null
this.se_(null)
return},
ec:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lu(r,this.c,t,!1)}},
ed:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.lv(r,this.c,t,!1)}},
se_:function(a){this.d=a}}
W.hL.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.bI.prototype={
dF:function(a){var t,s
t=$.$get$jz()
if(t.gap(t)){for(s=0;s<262;++s)t.i(0,C.W[s],W.nt())
for(s=0;s<12;++s)t.i(0,C.u[s],W.nu())}},
a6:function(a){return $.$get$kX().B(0,W.bn(a))},
Z:function(a,b,c){var t,s,r
t=W.bn(a)
s=$.$get$jz()
r=s.h(0,H.e(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)}}
W.m.prototype={
gw:function(a){return new W.ci(a,this.gj(a),-1,null,[H.T(a,"m",0)])}}
W.cC.prototype={
a6:function(a){return C.a.c_(this.a,new W.fk(a))},
Z:function(a,b,c){return C.a.c_(this.a,new W.fj(a,b,c))}}
W.fk.prototype={
$1:function(a){return a.a6(this.a)},
$S:function(a){return{func:1,args:[,]}}}
W.fj.prototype={
$1:function(a){return a.Z(this.a,this.b,this.c)},
$S:function(a){return{func:1,args:[,]}}}
W.bP.prototype={
dI:function(a,b,c,d){var t,s,r
this.a.K(0,c)
t=b.aH(0,new W.ih())
s=b.aH(0,new W.ii())
this.b.K(0,t)
r=this.c
r.K(0,C.C)
r.K(0,s)},
a6:function(a){return this.a.B(0,W.bn(a))},
Z:function(a,b,c){var t,s
t=W.bn(a)
s=this.c
if(s.B(0,H.e(t)+"::"+b))return this.d.eg(c)
else if(s.B(0,"*::"+b))return this.d.eg(c)
else{s=this.b
if(s.B(0,H.e(t)+"::"+b))return!0
else if(s.B(0,"*::"+b))return!0
else if(s.B(0,H.e(t)+"::*"))return!0
else if(s.B(0,"*::*"))return!0}return!1}}
W.ih.prototype={
$1:function(a){return!C.a.B(C.u,a)},
$S:function(a){return{func:1,args:[,]}}}
W.ii.prototype={
$1:function(a){return C.a.B(C.u,a)},
$S:function(a){return{func:1,args:[,]}}}
W.io.prototype={
Z:function(a,b,c){if(this.dd(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.j9(a,"template")==="")return this.e.B(0,b)
return!1}}
W.ip.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)},
$S:function(a){return{func:1,args:[,]}}}
W.il.prototype={
a6:function(a){var t=J.p(a)
if(!!t.$isbz)return!1
t=!!t.$isu
if(t&&W.bn(a)==="foreignObject")return!1
if(t)return!0
return!1},
Z:function(a,b,c){if(b==="is"||C.i.bs(b,"on"))return!1
return this.a6(a)}}
W.ci.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbR(J.aO(this.a,t))
this.c=t
return!0}this.sbR(null)
this.c=s
return!1},
gq:function(a){return this.d},
sbR:function(a){this.d=a}}
W.cB.prototype={}
W.jp.prototype={}
W.jv.prototype={}
W.ig.prototype={}
W.du.prototype={
bp:function(a){new W.iq(this).$2(a,null)},
aj:function(a,b){if(b==null)J.jU(a)
else J.j1(b,a)},
e8:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lN(a)
r=J.j9(s.gdW(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.I(n)}p="element unprintable"
try{p=J.bj(a)}catch(n){H.I(n)}try{o=W.bn(a)
this.e7(a,b,t,p,o,s,r)}catch(n){if(H.I(n) instanceof P.a9)throw n
else{this.aj(a,b)
window
m="Removing corrupted element "+H.e(p)
if(typeof console!="undefined")window.console.warn(m)}}},
e7:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.aj(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!this.a.a6(a)){this.aj(a,b)
window
t="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!this.a.Z(a,"is",g)){this.aj(a,b)
window
t="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gD(f)
s=H.A(t.slice(0),[H.aj(t,0)])
for(r=f.gD(f).length-1,t=f.a,q=J.i(t);r>=0;--r){p=s[r]
if(!this.a.Z(a,J.m2(p),q.ab(t,p))){window
o="Removing disallowed attribute <"+H.e(e)+" "+p+'="'+H.e(q.ab(t,p))+'">'
if(typeof console!="undefined")window.console.warn(o)
q.ab(t,p)
q.e1(t,p)}}if(!!J.p(a).$isbC)this.bp(a.content)}}
W.iq.prototype={
$2:function(a,b){var t,s,r,q
r=this.a
switch(a.nodeType){case 1:r.e8(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.aj(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lO(t)}catch(q){H.I(q)
r=t
J.j1(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(a,b){return{func:1,v:true,args:[W.q,W.q]}}}
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
P.iw.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.i2.prototype={
eV:function(){return Math.random()}}
P.ia.prototype={}
P.R.prototype={}
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
gn:function(a){return a.y}}
P.et.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gE:function(a){return a.z}}
P.eu.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ev.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gE:function(a){return a.z}}
P.ew.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ex.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eA.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eC.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.a_.prototype={}
P.aa.prototype={}
P.eK.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eU.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return this.a1(a,b)},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a1:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.jk]},
$asl:function(){return[P.jk]},
$ish:1,
$ash:function(){return[P.jk]},
$asm:function(){return[P.jk]}}
P.f3.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f5.prototype={
gN:function(a){return a.a},
gT:function(a){return a.b},
gU:function(a){return a.c}}
P.fm.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return this.a1(a,b)},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a1:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.jq]},
$asl:function(){return[P.jq]},
$ish:1,
$ash:function(){return[P.jq]},
$asm:function(){return[P.jq]}}
P.ft.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fx.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fy.prototype={
gj:function(a){return a.length}}
P.fB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fC.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bz.prototype={$isbz:1}
P.h1.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return this.a1(a,b)},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a1:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.n]},
$asl:function(){return[P.n]},
$ish:1,
$ash:function(){return[P.n]},
$asm:function(){return[P.n]}}
P.u.prototype={
O:function(a,b,c,d){var t,s,r,q,p,o
t=H.A([],[W.cB])
C.a.l(t,W.kW(null))
C.a.l(t,W.l_())
C.a.l(t,new W.il())
c=new W.du(new W.cC(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.o).eu(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.M(q)
o=t.ga4(t)
for(t=J.i(p);r=o.firstChild,r!=null;)t.S(p,r)
return p},
$isu:1}
P.h2.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bD.prototype={}
P.bE.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hf.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return this.a1(a,b)},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a1:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.jt]},
$asl:function(){return[P.jt]},
$ish:1,
$ash:function(){return[P.jt]},
$asm:function(){return[P.jt]}}
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
P.dQ.prototype={
gj:function(a){return a.length}}
P.dR.prototype={
gj:function(a){return a.length}}
P.aR.prototype={}
P.fn.prototype={
gj:function(a){return a.length}}
P.fF.prototype={
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
aI:function(a){return P.ix(a.getContextAttributes())},
bj:function(a){return a.getError()},
bk:function(a,b){return a.getProgramInfoLog(b)},
bl:function(a,b,c){return a.getProgramParameter(b,c)},
bm:function(a,b){return a.getShaderInfoLog(b)},
bn:function(a,b,c){return a.getShaderParameter(b,c)},
bo:function(a,b,c){return a.getUniformLocation(b,c)},
cn:function(a,b){return a.linkProgram(b)},
cr:function(a,b,c){return a.pixelStorei(b,c)},
br:function(a,b,c){return a.shaderSource(b,c)},
bt:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bg:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=J.p(g)
if(!!t.$isaX)s=!0
else s=!1
if(s){this.b2(a,b,c,d,e,f,P.la(g))
return}if(!!t.$isaY)s=!0
else s=!1
if(s){this.b3(a,b,c,d,e,f,g)
return}if(!!t.$isat)s=!0
else s=!1
if(s){this.b4(a,b,c,d,e,f,g)
return}if(!!t.$isb5)s=!0
else s=!1
if(s){this.b5(a,b,c,d,e,f,g)
return}if(!!t.$isaW)t=!0
else t=!1
if(t){this.b6(a,b,c,d,e,f,g)
return}throw H.c(P.dO("Incorrect number or type of arguments"))},
cw:function(a,b,c,d,e,f,g){return this.bg(a,b,c,d,e,f,g,null,null,null)},
b2:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b3:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b4:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b5:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b6:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
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
P.fG.prototype={
ej:function(a,b){return a.beginTransformFeedback(b)},
em:function(a,b){return a.bindVertexArray(b)},
ew:function(a){return a.createVertexArray()},
eD:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eE:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eF:function(a){return a.endTransformFeedback()},
f9:function(a,b,c,d){this.eb(a,b,c,d)
return},
eb:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
fa:function(a,b,c){return a.vertexAttribDivisor(b,c)},
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
aI:function(a){return P.ix(a.getContextAttributes())},
bj:function(a){return a.getError()},
bk:function(a,b){return a.getProgramInfoLog(b)},
bl:function(a,b,c){return a.getProgramParameter(b,c)},
bm:function(a,b){return a.getShaderInfoLog(b)},
bn:function(a,b,c){return a.getShaderParameter(b,c)},
bo:function(a,b,c){return a.getUniformLocation(b,c)},
cn:function(a,b){return a.linkProgram(b)},
cr:function(a,b,c){return a.pixelStorei(b,c)},
br:function(a,b,c){return a.shaderSource(b,c)},
bt:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bg:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=J.p(g)
if(!!t.$isaX)s=!0
else s=!1
if(s){this.b2(a,b,c,d,e,f,P.la(g))
return}if(!!t.$isaY)s=!0
else s=!1
if(s){this.b3(a,b,c,d,e,f,g)
return}if(!!t.$isat)s=!0
else s=!1
if(s){this.b4(a,b,c,d,e,f,g)
return}if(!!t.$isb5)s=!0
else s=!1
if(s){this.b5(a,b,c,d,e,f,g)
return}if(!!t.$isaW)t=!0
else t=!1
if(t){this.b6(a,b,c,d,e,f,g)
return}throw H.c(P.dO("Incorrect number or type of arguments"))},
cw:function(a,b,c,d,e,f,g){return this.bg(a,b,c,d,e,f,g,null,null,null)},
b2:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b3:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b4:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b5:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b6:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
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
P.fQ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return P.ix(this.dX(a,b))},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
dX:function(a,b){return a.item(b)},
$isj:1,
$asj:function(){return[P.b0]},
$asl:function(){return[P.b0]},
$ish:1,
$ash:function(){return[P.b0]},
$asm:function(){return[P.b0]}}
P.dh.prototype={}
P.di.prototype={}
B.iU.prototype={
$1:function(a){$.$get$iy().i(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.aC]}}}
B.iV.prototype={
$1:function(a){$.$get$iy().i(0,a.which,null)},
$S:function(a){return{func:1,args:[W.aC]}}}
B.iW.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.nl=t
$.nm=C.b.ad(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jL=s-C.b.J(window.innerWidth,2)
$.lh=-(t-C.b.J(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.K]}}}
B.iX.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.c_=t-C.b.J(window.innerWidth,2)
$.c0=-(s-C.b.J(window.innerHeight,2))
if(a.button===2)$.$get$bZ().i(0,"right",!0)
else $.$get$bZ().i(0,"left",!0)},
$S:function(a){return{func:1,args:[W.K]}}}
B.iY.prototype={
$1:function(a){if(a.button===2)$.$get$bZ().i(0,"right",null)
else $.$get$bZ().i(0,"left",null)},
$S:function(a){return{func:1,args:[W.K]}}}
B.fo.prototype={
dr:function(a,b,c,d){var t
d.toString
W.a3(d,W.mm(d),new B.fp(this),!1,W.aK)
W.a3(d,"mousemove",new B.fq(this),!1,W.K)
t=W.aH
W.a3(d,"touchstart",new B.fr(),!1,t)
W.a3(d,"touchmove",new B.fs(this),!1,t)
B.nI(null)}}
B.fp.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.aw.gex(a)*r.k3
if(C.c.ad(r.fy,t)>0)r.fy=C.c.ad(r.fy,t)}catch(q){s=H.I(q)
P.a7(s)}},
$S:function(a){return{func:1,args:[W.aK]}}}
B.fq.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.ad($.jL,$.c_)*0.01
s=t.id
r=$.c0
q=$.lh
t.id=s+(r-q)*0.01
$.c_=$.jL
$.c0=q}},
$S:function(a){return{func:1,args:[W.K]}}}
B.fr.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a8(t.clientX)
C.c.a8(t.clientY)
$.c_=s
C.c.a8(t.clientX)
$.c0=C.c.a8(t.clientY)},
$S:function(a){return{func:1,args:[W.aH]}}}
B.fs.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a8(t.clientX)
t=C.c.a8(t.clientY)
r=this.a
r.go=r.go+C.b.ad(s,$.c_)*0.01
r.id=r.id+($.c0-t)*0.01
$.c_=s
$.c0=t},
$S:function(a){return{func:1,args:[W.aH]}}}
G.fa.prototype={}
G.hj.prototype={
M:function(a,b){var t=this.d
if(H.ah(!t.F(0,a)))H.aq("uniform "+a+" already set")
t.i(0,a,b)},
bB:function(){return this.d},
k:function(a){var t,s,r,q
t=H.A(["{"+new H.ao(H.iD(this),null).k(0)+"}["+this.a+"]"],[P.n])
for(s=this.d,r=s.gD(s),r=r.gw(r);r.p();){q=r.gq(r)
C.a.l(t,H.e(q)+": "+H.e(s.h(0,q)))}return C.a.aq(t,"\n")}}
G.dS.prototype={}
G.dU.prototype={
cl:function(a,b,c){J.lL(this.a,b)
if(c>0)J.m8(this.a,b,c)},
cP:function(a,b,c,d,e,f,g,h){J.j3(this.a,34962,b)
J.m9(this.a,c,d,e,!1,g,h)}}
G.am.prototype={
gN:function(a){return this.a},
gT:function(a){return this.b},
gU:function(a){return this.c}}
G.eG.prototype={
bz:function(a){var t=this.e
H.b(!t.F(0,a))
H.b(C.i.bs(a,"a"))
switch($.$get$N().h(0,a).a){case"vec2":t.i(0,a,H.A([],[T.a2]))
break
case"vec3":t.i(0,a,H.A([],[T.y]))
break
case"vec4":t.i(0,a,H.A([],[T.ap]))
break
case"float":t.i(0,a,H.A([],[P.X]))
break
case"uvec4":t.i(0,a,H.A([],[[P.h,P.x]]))
break
default:if(H.ah(!1))H.aq("unknown type for "+a)}},
dh:function(a){var t,s,r,q,p
H.b(!0)
t=this.d
s=t.length
C.a.l(this.b,new G.am(s,s+1,s+2))
for(r=0;r<3;++r){q=a[r]
p=new T.y(new Float32Array(3))
p.I(q)
C.a.l(t,p)}},
df:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<3;++r){q=b[r]
p=new Float32Array(2)
o=q.a
p[1]=o[1]
p[0]=o[0]
s.l(t,new T.a2(p))}},
dg:function(a,b){var t,s,r,q,p
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<3;++r){q=b[r]
p=new T.y(new Float32Array(3))
p.I(q)
s.l(t,p)}},
dk:function(){var t,s,r,q,p,o,n
t=this.b
H.b(t.length>0||!1)
s=new Array(t.length*3)
s.fixed$length=Array
r=H.A(s,[P.x])
for(s=t.length,q=0,p=0;p<s;++p){o=t[p]
r[q]=o.a
r[q+1]=o.b
r[q+2]=o.c
q+=3}for(t=this.c,p=0;!1;++p){n=t[p]
r[q]=n.gN(n)
r[q+1]=n.gT(n)
r[q+2]=n.gU(n)
r[q+3]=n.gN(n)
r[q+4]=n.gU(n)
r[q+5]=n.gfe(n)
q+=6}H.b(q===r.length)
return r},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4[0]"]
for(s=this.e,r=s.gD(s),r=r.gw(r);r.p();){q=r.gq(r)
p=$.$get$N().h(0,q).a
C.a.l(t,H.e(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.aq(t," ")}}
G.cR.prototype={}
G.cQ.prototype={}
G.f4.prototype={
dq:function(a,b){this.M("cDepthTest",!0)
this.M("cDepthWrite",!1)
this.M("cBlendEquation",b)
this.M("cStencilFunc",$.$get$kC())}}
G.f7.prototype={
by:function(a,b,c){var t,s
if(C.i.aR(a,0)===105){if(H.ah(C.b.aN(b.length,c)===this.z))H.aq("ChangeAttribute "+this.z)}else{t=C.b.aN(b.length,c)
if(H.ah(t===(this.ch.length/3|0)))H.aq("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.j3(t.a,34962,s)
J.jQ(t.a,34962,b,35048)},
dl:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
ae:function(a,b,c){var t,s,r,q,p,o
t=J.jN(a,0)===105
if(t&&this.z===0)this.z=C.b.aN(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.j5(r.a))
this.by(a,b,c)
q=$.$get$N().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.ah(p.F(0,a)))H.aq("unexpected attribute "+a)
o=p.h(0,a)
J.dK(r.a,this.e)
r.cl(0,o,t?1:0)
r.cP(0,s.h(0,a),o,q.bA(),5126,!1,0,0)},
bx:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.j5(s.a))
this.ch=a
this.by("aPosition",a,3)
r=$.$get$N().h(0,"aPosition")
if(r==null)throw H.c("Unknown canonical aPosition")
q=this.x
H.b(q.F(0,"aPosition"))
p=q.h(0,"aPosition")
J.dK(s.a,this.e)
s.cl(0,p,0)
s.cP(0,t.h(0,"aPosition"),p,r.bA(),5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gD(t),r=r.gw(r);r.p();){q=r.gq(r)
C.a.l(s,H.e(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.aq(s,"  ")},
saW:function(a){this.cx=a}}
G.fu.prototype={
di:function(a,b){var t=C.b.cS(a,b)
if(this.z===t)return
this.z=t
this.bC()},
bC:function(){var t,s,r,q,p,o,n
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
t.ac(0,0,1/(p*s))
t.ac(1,1,1/p)
t.ac(2,2,(q+r)/o)
t.ac(3,2,-1)
t.ac(2,3,2*r*q/o)},
bB:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.y(new Float32Array(3))
o.au(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.I(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.p(n)
r=!!s.$isap
k=r?s.gaG(n):1
if(!!s.$isy){j=s.gm(n)
m=s.gn(n)
l=s.gE(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gE(n)
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
a3.I(this.db)
a3.eU(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fE.prototype={
ds:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){n=t[o]
r.i(0,n,J.jT(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){n=t[o]
r.i(0,n,J.jT(q.a,p,n))}},
dz:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gD(s),s=s.gw(s);s.p();){q=s.gq(s)
if(!t.F(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bJ(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.B(0,q))C.a.l(r,q)}return r},
dC:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gD(b),s=s.gw(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq(s)
switch(J.jN(n,0)){case 117:if(q.F(0,n)){m=b.h(0,n)
if(p.F(0,n))H.iS("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$N().h(0,n)
if(l==null)H.H("unknown "+n)
H.b(q.F(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.ja(r.a,k,m)
else if(!!J.p(m).$iskn)J.m6(r.a,k,m)
break
case"float":if(l.c===0)J.m4(r.a,k,m)
else if(!!J.p(m).$iseB)J.m5(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.ar(m,"$isa1").a
J.k_(r.a,k,!1,n)}else if(!!J.p(m).$iseB)J.k_(r.a,k,!1,m)
else if(H.ah(!1))H.aq("bad unform: "+n)
break
case"mat3":if(l.c===0){n=H.ar(m,"$isbs").a
J.jZ(r.a,k,!1,n)}else if(!!J.p(m).$iseB)J.jZ(r.a,k,!1,m)
else if(H.ah(!1))H.aq("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.jY(j,k,H.ar(m,"$isap").a)
else J.jY(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.jX(j,k,H.ar(m,"$isy").a)
else J.jX(j,k,m)
break
case"vec2":n=l.c
j=r.a
if(n===0)J.jW(j,k,H.ar(m,"$isa2").a)
else J.jW(j,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.aa(33984,this.ch)
J.jO(r.a,n)
n=H.ar(m,"$isbF").b
J.c1(r.a,3553,n)
n=this.ch
J.ja(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.aa(33984,this.ch)
J.jO(r.a,n)
n=H.ar(m,"$isbF").b
J.c1(r.a,34067,n)
n=this.ch
J.ja(r.a,k,n)
this.ch=this.ch+1
break
default:H.iS("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.B(m,!0)
j=r.a
if(n)J.c2(j,2929)
else J.j6(j,2929)
break
case"cStencilFunc":H.ar(m,"$iscR")
n=m.a
j=r.a
if(n===1281)J.j6(j,2960)
else{J.c2(j,2960)
j=m.b
i=m.c
J.m_(r.a,n,j,i)}break
case"cDepthWrite":J.lF(r.a,m)
break
case"cBlendEquation":H.ar(m,"$iscQ")
n=m.a
j=r.a
if(n===1281)J.j6(j,3042)
else{J.c2(j,3042)
j=m.b
i=m.c
J.lz(r.a,j,i)
J.ly(r.a,n)}break}++o
break}}h=P.mk(0,0,0,Date.now()-new P.bl(t,!1).a,0,0)
""+o
h.k(0)},
dj:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.m7(t.a,this.r)
this.ch=0
this.z.a_(0)
for(s=0;s<2;++s){r=b[s]
this.dC(r.a,r.bB())}q=this.Q
q.a_(0)
for(p=a.cy,p=p.gD(p),p=p.gw(p);p.p();)q.l(0,p.gq(p))
o=this.dz()
if(o.length!==0)P.a7("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(o)))
J.dK(a.d.a,a.e)
n=this.e.f.length>0
q=a.f
p=a.dl()
m=a.Q
l=a.z
if(n)J.lx(t.a,q)
if(m!==-1){k=t.a
if(l>1)J.lJ(k,q,p,m,0,l)
else J.lI(k,q,p,m,0)}else{m=t.a
if(l>1)J.lH(m,q,0,p,l)
else J.lG(m,q,0,p)}if(n)J.lM(t.a)},
aO:function(a,b){return this.dj(a,b,null)}}
G.w.prototype={
bA:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.fL.prototype={
bv:function(a){var t,s,r,q,p
H.b(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.P)(a),++q){p=a[q]
H.b($.$get$N().F(0,p))
H.b(!C.a.B(s,p))
C.a.l(s,p)
r.i(0,p,this.r);++this.r}C.a.aL(s)},
av:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.P)(a),++r){q=a[r]
if(H.ah($.$get$N().F(0,q)))H.aq("missing uniform "+q)
H.b(!C.a.B(s,q))
C.a.l(s,q)}C.a.aL(s)},
bw:function(a){var t,s,r
H.b(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.b($.$get$N().F(0,r))
H.b(!C.a.B(t,r))
C.a.l(t,r)}C.a.aL(t)},
dt:function(a,b){H.b(this.b==null)
this.b=this.dD(!0,a,b)},
aw:function(a){return this.dt(a,null)},
dD:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){n=t[o]
m=$.$get$N().h(0,n)
C.a.l(q,"layout (location="+H.e(p.h(0,n))+") in "+m.a+" "+H.e(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){k=t[o]
m=$.$get$N().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){k=t[o]
m=$.$get$N().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){k=t[o]
m=$.$get$N().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.e(k)+j+";")}C.a.l(q,"")
C.a.l(q,"void main(void) {")
C.a.K(q,b)
C.a.l(q,"}")
return C.a.aq(q,"\n")}}
G.fO.prototype={}
G.h8.prototype={}
G.bF.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.eL.prototype={
dm:function(a,b,c,d,e){var t,s,r,q
t=this.d
s=this.c
J.c1(t.a,s,this.b)
J.lY(t.a,37440,1)
this.du(this.f)
r=this.e
q=r.e
if(q!==1)J.m1(t.a,s,34046,q)
J.jV(t.a,s,10240,r.r)
J.jV(t.a,s,10241,r.f)
H.b(J.lT(t.a)===0)
J.c1(t.a,s,null)},
du:function(a){var t,s
t=this.d
s=this.c
J.c1(t.a,s,this.b)
J.m0(t.a,s,0,6408,6408,5121,a)}}
R.cD.prototype={
ct:function(a){var t,s,r
t=this.fy
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.a7("size change "+H.e(s)+" "+H.e(r))
this.di(s,r)
J.ma(this.go.a,0,0,s,r)}}
R.fT.prototype={
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
J.j2(this.a,s)
r=this.dH(b,c,90,30)
this.d=r
J.j2(this.a,r)
t=t.createElement("div")
this.c=t
J.j2(this.a,t)},
dH:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.n_("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.x).bH(r,"float")
r.setProperty(p,"left","")
p=C.x.bH(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.q.S(t,s)}return t}}
R.fU.prototype={
dB:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.z.f8(s,2)+" fps"
t=this.c;(t&&C.q).d4(t,b)
r=C.b.J(30*C.z.eo(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.q).S(t,q)},
dA:function(a){return this.dB(a,"")}}
D.eZ.prototype={
$1:function(a){return this.a.b9(0,this.b)},
$S:function(a){return{func:1,args:[,]}}}
A.iE.prototype={
$2:function(a,b){var t=536870911&a+J.bh(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.x,P.C]}}}
T.bs.prototype={
k:function(a){return"[0] "+this.X(0).k(0)+"\n[1] "+this.X(1).k(0)+"\n[2] "+this.X(2).k(0)+"\n"},
h:function(a,b){return this.a[b]},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.bs){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gu:function(a){return A.dH(this.a)},
X:function(a){var t,s
t=new Float32Array(3)
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.y(t)}}
T.a1.prototype={
ac:function(a,b,c){H.b(a<4)
H.b(b<4)
this.a[b*4+a]=c},
I:function(a){var t,s
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
k:function(a){return"[0] "+this.X(0).k(0)+"\n[1] "+this.X(1).k(0)+"\n[2] "+this.X(2).k(0)+"\n[3] "+this.X(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.a1){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.dH(this.a)},
X:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.ap(t)},
a3:function(){var t=this.a
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
eU:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.a2.prototype={
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.a2){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.dH(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.y.prototype={
au:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
I:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.y){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.dH(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){return Math.sqrt(this.gW())},
gW:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
C:function(a){var t,s,r
t=Math.sqrt(this.gW())
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
cd:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.y(new Float32Array(3))
t.au(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
l:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]
s[2]=s[2]+t[2]},
a2:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gE:function(a){return this.a[2]}}
T.ap.prototype={
k:function(a){var t=this.a
return H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+","+H.e(t[3])},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ap){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.dH(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gT:function(a){return this.a[2]},
gN:function(a){return this.a[3]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gE:function(a){return this.a[2]},
gaG:function(a){return this.a[3]}}
A.iP.prototype={
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
s.id=0}r=C.c.ep(s.id,-1.4707963267948965,1.4707963267948965)
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
i=new T.y(new Float32Array(3))
i.au(0,1,0)
r=s.e
q=r.a
q[0]=m[12]
q[1]=m[13]
q[2]=m[14]
q=new Float32Array(3)
h=new T.y(q)
h.I(r)
q[0]=q[0]-p[0]
q[1]=q[1]-p[1]
q[2]=q[2]-p[2]
h.C(0)
g=i.cd(h)
g.C(0)
f=h.cd(g)
f.C(0)
p=g.ba(r)
n=f.ba(r)
r=h.ba(r)
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
a3=Math.sqrt(d.gW())
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
n.a3()
p=this.d
q=this.e
m=this.f
c=this.r
p.aO(q,[m,c])
n=n.a
n[14]=0
n[13]=0
n[12]=1.5
p.aO(q,[m,c])
this.x.aO(this.y,[this.z,c])
C.ax.geh(window).aF(this)
this.Q.dA(t.a)},
$S:function(a){return{func:1,v:true,args:[P.a6]}}}
A.iQ.prototype={
$1:function(a){this.b.M("uTexture",G.km(this.a,$.lr,J.aO(a,0),null,3553))
this.c.$1(0)},
$S:function(a){return{func:1,args:[P.h]}}}
J.a.prototype.d9=J.a.prototype.k
J.bq.prototype.dc=J.bq.prototype.k
P.Q.prototype.da=P.Q.prototype.aH
W.Z.prototype.aM=W.Z.prototype.O
W.bP.prototype.dd=W.bP.prototype.Z;(function installTearOffs(){installTearOff(H.b7.prototype,"geR",0,0,0,null,["$0"],["aE"],0)
installTearOff(H.a4.prototype,"gcX",0,0,0,null,["$1"],["L"],2)
installTearOff(H.aL.prototype,"gez",0,0,0,null,["$1"],["a0"],2)
installTearOff(P,"nh",1,0,0,null,["$1"],["mX"],1)
installTearOff(P,"ni",1,0,0,null,["$1"],["mY"],1)
installTearOff(P,"nj",1,0,0,null,["$1"],["mZ"],1)
installTearOff(P,"l8",1,0,0,null,["$0"],["nf"],0)
installTearOff(P.F.prototype,"gbL",0,0,0,null,["$2","$1"],["R","dP"],5)
installTearOff(P,"no",1,0,0,null,["$2"],["mg"],7)
installTearOff(W,"nt",1,0,0,null,["$4"],["n2"],4)
installTearOff(W,"nu",1,0,0,null,["$4"],["n3"],4)
installTearOff(W.cA.prototype,"gbd",0,1,0,null,["$0"],["be"],3)
installTearOff(W.cT.prototype,"gbd",0,1,0,null,["$0"],["be"],3)
installTearOff(R.cD.prototype,"gf0",0,0,0,null,["$1"],["ct"],6)
installTearOff(A,"l9",1,0,0,null,["$0"],["nC"],0)})();(function inheritance(){inherit(P.C,null)
var t=P.C
inherit(H.jh,t)
inherit(J.a,t)
inherit(J.dP,t)
inherit(P.Q,t)
inherit(H.cr,t)
inherit(P.cn,t)
inherit(H.aV,t)
inherit(H.aw,t)
inherit(H.i8,t)
inherit(H.b7,t)
inherit(H.hH,t)
inherit(H.aM,t)
inherit(H.i7,t)
inherit(H.hB,t)
inherit(H.cG,t)
inherit(H.ha,t)
inherit(H.au,t)
inherit(H.a4,t)
inherit(H.aL,t)
inherit(H.fD,t)
inherit(H.hg,t)
inherit(P.aU,t)
inherit(H.dj,t)
inherit(H.ao,t)
inherit(P.b1,t)
inherit(H.eV,t)
inherit(H.eX,t)
inherit(P.V,t)
inherit(P.jc,t)
inherit(P.hC,t)
inherit(P.bH,t)
inherit(P.F,t)
inherit(P.cV,t)
inherit(P.bA,t)
inherit(P.fX,t)
inherit(P.jr,t)
inherit(P.aQ,t)
inherit(P.ir,t)
inherit(P.fK,t)
inherit(P.i4,t)
inherit(P.bJ,t)
inherit(P.jl,t)
inherit(P.bK,t)
inherit(P.l,t)
inherit(P.i6,t)
inherit(P.ai,t)
inherit(P.E,t)
inherit(P.bl,t)
inherit(P.a6,t)
inherit(P.ax,t)
inherit(P.cL,t)
inherit(P.je,t)
inherit(P.hM,t)
inherit(P.ef,t)
inherit(P.h,t)
inherit(P.b0,t)
inherit(P.J,t)
inherit(P.b3,t)
inherit(P.n,t)
inherit(P.bB,t)
inherit(P.ju,t)
inherit(W.e_,t)
inherit(W.bI,t)
inherit(W.m,t)
inherit(W.cC,t)
inherit(W.bP,t)
inherit(W.il,t)
inherit(W.ci,t)
inherit(W.cB,t)
inherit(W.jp,t)
inherit(W.jv,t)
inherit(W.ig,t)
inherit(W.du,t)
inherit(P.i2,t)
inherit(P.ia,t)
inherit(G.fa,t)
inherit(G.dU,t)
inherit(G.am,t)
inherit(G.eG,t)
inherit(G.cR,t)
inherit(G.cQ,t)
inherit(G.w,t)
inherit(G.fL,t)
inherit(G.h8,t)
inherit(G.bF,t)
inherit(R.fT,t)
inherit(T.bs,t)
inherit(T.a1,t)
inherit(T.a2,t)
inherit(T.y,t)
inherit(T.ap,t)
t=J.a
inherit(J.eQ,t)
inherit(J.eR,t)
inherit(J.bq,t)
inherit(J.ay,t)
inherit(J.aZ,t)
inherit(J.aA,t)
inherit(H.bv,t)
inherit(H.b2,t)
inherit(W.d,t)
inherit(W.dL,t)
inherit(W.c5,t)
inherit(W.c6,t)
inherit(W.aT,t)
inherit(W.Y,t)
inherit(W.cW,t)
inherit(W.e4,t)
inherit(W.e5,t)
inherit(W.e6,t)
inherit(W.ca,t)
inherit(W.cb,t)
inherit(W.cc,t)
inherit(W.cX,t)
inherit(W.ce,t)
inherit(W.cZ,t)
inherit(W.ea,t)
inherit(W.f,t)
inherit(W.d0,t)
inherit(W.eI,t)
inherit(W.d2,t)
inherit(W.aW,t)
inherit(W.aX,t)
inherit(W.f_,t)
inherit(W.f6,t)
inherit(W.d6,t)
inherit(W.cA,t)
inherit(W.d9,t)
inherit(W.ac,t)
inherit(W.dd,t)
inherit(W.cE,t)
inherit(W.df,t)
inherit(W.ad,t)
inherit(W.dk,t)
inherit(W.dn,t)
inherit(W.h9,t)
inherit(W.dq,t)
inherit(W.he,t)
inherit(W.cT,t)
inherit(W.hn,t)
inherit(W.hp,t)
inherit(W.dv,t)
inherit(W.dx,t)
inherit(W.dz,t)
inherit(W.dB,t)
inherit(W.dD,t)
inherit(P.d4,t)
inherit(P.f5,t)
inherit(P.db,t)
inherit(P.fx,t)
inherit(P.fy,t)
inherit(P.fB,t)
inherit(P.dl,t)
inherit(P.ds,t)
inherit(P.dQ,t)
inherit(P.fF,t)
inherit(P.fG,t)
inherit(P.dh,t)
t=J.bq
inherit(J.fv,t)
inherit(J.aJ,t)
inherit(J.aB,t)
inherit(J.jg,J.ay)
t=J.aZ
inherit(J.cp,t)
inherit(J.co,t)
t=P.Q
inherit(H.j,t)
inherit(H.ct,t)
inherit(H.cU,t)
t=H.j
inherit(H.b_,t)
inherit(H.eW,t)
inherit(H.ed,H.ct)
t=P.cn
inherit(H.f2,t)
inherit(H.hs,t)
t=H.b_
inherit(H.br,t)
inherit(P.eY,t)
t=H.aw
inherit(H.iZ,t)
inherit(H.j_,t)
inherit(H.i1,t)
inherit(H.hI,t)
inherit(H.eN,t)
inherit(H.eO,t)
inherit(H.i9,t)
inherit(H.hb,t)
inherit(H.hc,t)
inherit(H.j0,t)
inherit(H.iJ,t)
inherit(H.iK,t)
inherit(H.iL,t)
inherit(H.iM,t)
inherit(H.iN,t)
inherit(H.h5,t)
inherit(H.eS,t)
inherit(H.iF,t)
inherit(H.iG,t)
inherit(H.iH,t)
inherit(P.hx,t)
inherit(P.hw,t)
inherit(P.hy,t)
inherit(P.hz,t)
inherit(P.eF,t)
inherit(P.eE,t)
inherit(P.hN,t)
inherit(P.hV,t)
inherit(P.hR,t)
inherit(P.hS,t)
inherit(P.hT,t)
inherit(P.hP,t)
inherit(P.hU,t)
inherit(P.hO,t)
inherit(P.hY,t)
inherit(P.hZ,t)
inherit(P.hX,t)
inherit(P.hW,t)
inherit(P.h_,t)
inherit(P.h0,t)
inherit(P.fY,t)
inherit(P.fZ,t)
inherit(P.is,t)
inherit(P.iv,t)
inherit(P.id,t)
inherit(P.ic,t)
inherit(P.ie,t)
inherit(P.f1,t)
inherit(P.eb,t)
inherit(P.ec,t)
inherit(W.ee,t)
inherit(W.fW,t)
inherit(W.ht,t)
inherit(W.hL,t)
inherit(W.fk,t)
inherit(W.fj,t)
inherit(W.ih,t)
inherit(W.ii,t)
inherit(W.ip,t)
inherit(W.iq,t)
inherit(P.iw,t)
inherit(B.iU,t)
inherit(B.iV,t)
inherit(B.iW,t)
inherit(B.iX,t)
inherit(B.iY,t)
inherit(B.fp,t)
inherit(B.fq,t)
inherit(B.fr,t)
inherit(B.fs,t)
inherit(D.eZ,t)
inherit(A.iE,t)
inherit(A.iP,t)
inherit(A.iQ,t)
t=H.hB
inherit(H.b9,t)
inherit(H.bU,t)
t=P.aU
inherit(H.fl,t)
inherit(H.eT,t)
inherit(H.hl,t)
inherit(H.hi,t)
inherit(H.dT,t)
inherit(H.fH,t)
inherit(P.c4,t)
inherit(P.bx,t)
inherit(P.a9,t)
inherit(P.hm,t)
inherit(P.hk,t)
inherit(P.b4,t)
inherit(P.dV,t)
inherit(P.e3,t)
t=H.h5
inherit(H.fS,t)
inherit(H.bk,t)
inherit(H.hu,P.c4)
inherit(P.cs,P.b1)
t=P.cs
inherit(H.ab,t)
inherit(W.hA,t)
t=H.b2
inherit(H.fb,t)
inherit(H.cw,t)
t=H.cw
inherit(H.bL,t)
inherit(H.bN,t)
inherit(H.bM,H.bL)
inherit(H.cx,H.bM)
inherit(H.bO,H.bN)
inherit(H.cy,H.bO)
t=H.cx
inherit(H.cv,t)
inherit(H.fc,t)
t=H.cy
inherit(H.fd,t)
inherit(H.fe,t)
inherit(H.ff,t)
inherit(H.fg,t)
inherit(H.fh,t)
inherit(H.cz,t)
inherit(H.fi,t)
t=P.hC
inherit(P.hv,t)
inherit(P.im,t)
inherit(P.ib,P.ir)
inherit(P.i5,H.ab)
inherit(P.fJ,P.fK)
inherit(P.i0,P.fJ)
inherit(P.i3,P.i0)
inherit(P.cq,P.bK)
t=P.a6
inherit(P.X,t)
inherit(P.x,t)
t=P.a9
inherit(P.cF,t)
inherit(P.eM,t)
t=W.d
inherit(W.q,t)
inherit(W.an,t)
inherit(W.ez,t)
inherit(W.bp,t)
inherit(W.bu,t)
inherit(W.fz,t)
inherit(W.cH,t)
inherit(W.bQ,t)
inherit(W.bS,t)
inherit(W.hq,t)
inherit(W.hr,t)
inherit(W.bG,t)
inherit(W.jw,t)
inherit(P.dR,t)
inherit(P.aR,t)
t=W.q
inherit(W.Z,t)
inherit(W.av,t)
inherit(W.bm,t)
t=W.Z
inherit(W.k,t)
inherit(P.u,t)
t=W.an
inherit(W.c3,t)
inherit(W.eH,t)
inherit(W.f0,t)
t=W.k
inherit(W.dM,t)
inherit(W.dN,t)
inherit(W.as,t)
inherit(W.at,t)
inherit(W.c9,t)
inherit(W.eD,t)
inherit(W.ck,t)
inherit(W.aY,t)
inherit(W.bt,t)
inherit(W.fI,t)
inherit(W.cN,t)
inherit(W.h3,t)
inherit(W.h4,t)
inherit(W.bC,t)
t=W.aT
inherit(W.dW,t)
inherit(W.dY,t)
inherit(W.dZ,t)
inherit(W.e1,t)
t=W.Y
inherit(W.dX,t)
inherit(W.e0,t)
inherit(W.e2,t)
inherit(W.aS,W.cW)
inherit(W.e7,W.cb)
inherit(W.e8,W.cc)
inherit(W.cY,W.cX)
inherit(W.cd,W.cY)
inherit(W.d_,W.cZ)
inherit(W.e9,W.d_)
inherit(W.d1,W.d0)
inherit(W.ey,W.d1)
inherit(W.d3,W.d2)
inherit(W.bo,W.d3)
inherit(W.cl,W.bm)
inherit(W.eJ,W.bp)
inherit(W.aI,W.f)
t=W.aI
inherit(W.aC,t)
inherit(W.K,t)
inherit(W.aH,t)
inherit(W.f8,W.bu)
inherit(W.d7,W.d6)
inherit(W.f9,W.d7)
inherit(W.M,P.cq)
inherit(W.da,W.d9)
inherit(W.bw,W.da)
inherit(W.de,W.dd)
inherit(W.fw,W.de)
inherit(W.bR,W.bQ)
inherit(W.fN,W.bR)
inherit(W.dg,W.df)
inherit(W.fP,W.dg)
inherit(W.fV,W.dk)
inherit(W.dp,W.dn)
inherit(W.h6,W.dp)
inherit(W.bT,W.bS)
inherit(W.h7,W.bT)
inherit(W.dr,W.dq)
inherit(W.hd,W.dr)
inherit(W.b5,W.bt)
inherit(W.aK,W.K)
inherit(W.dw,W.dv)
inherit(W.hD,W.dw)
inherit(W.hE,W.ce)
inherit(W.dy,W.dx)
inherit(W.i_,W.dy)
inherit(W.dA,W.dz)
inherit(W.d8,W.dA)
inherit(W.dC,W.dB)
inherit(W.ij,W.dC)
inherit(W.dE,W.dD)
inherit(W.ik,W.dE)
inherit(W.hF,W.hA)
inherit(W.hJ,P.bA)
inherit(W.hG,W.hJ)
inherit(W.hK,P.fX)
inherit(W.io,W.bP)
inherit(P.R,P.ia)
t=P.u
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
inherit(P.ex,t)
inherit(P.eA,t)
inherit(P.aa,t)
inherit(P.f3,t)
inherit(P.ft,t)
inherit(P.bz,t)
t=P.aa
inherit(P.eC,t)
inherit(P.a_,t)
inherit(P.eK,t)
inherit(P.h2,t)
inherit(P.bD,t)
inherit(P.ho,t)
inherit(P.d5,P.d4)
inherit(P.eU,P.d5)
inherit(P.dc,P.db)
inherit(P.fm,P.dc)
inherit(P.fC,P.a_)
inherit(P.dm,P.dl)
inherit(P.h1,P.dm)
inherit(P.bE,P.bD)
inherit(P.dt,P.ds)
inherit(P.hf,P.dt)
inherit(P.fn,P.aR)
inherit(P.di,P.dh)
inherit(P.fQ,P.di)
t=G.fa
inherit(G.fO,t)
inherit(G.hj,t)
inherit(G.f7,t)
inherit(G.fE,t)
inherit(G.dS,G.fO)
inherit(B.fo,G.dS)
t=G.hj
inherit(G.f4,t)
inherit(G.fu,t)
inherit(G.eL,G.bF)
inherit(R.cD,G.fu)
inherit(R.fU,R.fT)
mixin(H.bL,P.l)
mixin(H.bM,H.aV)
mixin(H.bN,P.l)
mixin(H.bO,H.aV)
mixin(P.bK,P.l)
mixin(W.cW,W.e_)
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
mixin(W.dk,P.b1)
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
mixin(P.di,W.m)})();(function constants(){C.o=W.as.prototype
C.w=W.at.prototype
C.m=W.c5.prototype
C.p=W.c6.prototype
C.x=W.aS.prototype
C.q=W.c9.prototype
C.M=W.ca.prototype
C.N=W.ck.prototype
C.r=W.cl.prototype
C.O=J.a.prototype
C.a=J.ay.prototype
C.z=J.co.prototype
C.b=J.cp.prototype
C.c=J.aZ.prototype
C.i=J.aA.prototype
C.V=J.aB.prototype
C.Y=H.cv.prototype
C.D=W.bw.prototype
C.E=J.fv.prototype
C.F=W.cE.prototype
C.K=W.cN.prototype
C.v=J.aJ.prototype
C.aw=W.aK.prototype
C.ax=W.bG.prototype
C.L=new P.i2()
C.d=new P.ib()
C.y=new P.ax(0)
C.P=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.Q=function(hooks) {
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

C.R=function(getTagFallback) {
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
C.S=function() {
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
C.T=function(hooks) {
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
C.U=function(hooks) {
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
C.W=H.A(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.n])
C.X=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.C=makeConstList([])
C.t=H.A(makeConstList(["bind","if","ref","repeat","syntax"]),[P.n])
C.u=H.A(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.n])
C.Z=new G.w("vec3","vertex btangents",0)
C.e=new G.w("vec3","",0)
C.a_=new G.w("vec4","delta from light",0)
C.n=new G.w("","",0)
C.G=new G.w("vec3","vertex coordinates",0)
C.a0=new G.w("vec3","vertex binormals",0)
C.H=new G.w("vec4","for wireframe",0)
C.a1=new G.w("vec4","per vertex color",0)
C.a2=new G.w("float","for normal maps",0)
C.j=new G.w("mat4","",0)
C.a4=new G.w("mat4","",4)
C.a3=new G.w("mat4","",128)
C.f=new G.w("float","",0)
C.a5=new G.w("float","",4)
C.a6=new G.w("float","depth for shadowmaps",0)
C.h=new G.w("sampler2D","",0)
C.a7=new G.w("float","for bump maps",0)
C.a8=new G.w("vec2","texture uvs",0)
C.a9=new G.w("float","time since program start in sec",0)
C.k=new G.w("vec2","",0)
C.aa=new G.w("samplerCube","",0)
C.l=new G.w("vec4","",0)
C.ab=new G.w("vec3","vertex normals",0)
C.ac=new G.w("sampler2DShadow","",0)
C.I=new G.w("vec3","per vertex color",0)
C.J=new G.w("mat3","",0)
C.ad=new G.w("vec3","vertex tangents",0)
C.ae=H.G("nN")
C.af=H.G("nO")
C.ag=H.G("eB")
C.ah=H.G("nP")
C.ai=H.G("nQ")
C.aj=H.G("kn")
C.ak=H.G("nR")
C.al=H.G("kq")
C.am=H.G("J")
C.an=H.G("n")
C.ao=H.G("kP")
C.ap=H.G("kQ")
C.aq=H.G("nS")
C.ar=H.G("kR")
C.as=H.G("ai")
C.at=H.G("X")
C.au=H.G("x")
C.av=H.G("a6")})();(function staticFields(){$.ky="$cachedFunction"
$.kz="$cachedInvocation"
$.k5=null
$.k3=null
$.jB=!1
$.jG=null
$.l5=null
$.ll=null
$.iz=null
$.iI=null
$.jH=null
$.ba=null
$.bV=null
$.bW=null
$.jC=!1
$.v=C.d
$.kh=0
$.al=null
$.jd=null
$.kg=null
$.kf=null
$.kd=null
$.kc=null
$.kb=null
$.ka=null
$.nl=0
$.nm=0
$.jL=0
$.lh=0
$.c_=0
$.c0=0
$.nJ=!1
$.lb=0
$.lr="sphere.png"
$.n5="  vec3 u = normalize(vec3(uModelMatrix * vec4(aPosition, 1.0)));\n  vec3 n = normalize(uNormalMatrix * aNormal );\n  vec3 r = reflect( u, n );\n  r.z += 1.0;\n  float m = 2.0 * length(r);\n  vTexUV = vec2(r.x/m + 0.5, r.y/m + 0.5);\n"})();(function lazyInitializers(){lazy($,"k9","$get$k9",function(){return H.le("_$dart_dartClosure")})
lazy($,"ji","$get$ji",function(){return H.le("_$dart_js")})
lazy($,"ko","$get$ko",function(){return H.my()})
lazy($,"kp","$get$kp",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kh
$.kh=t+1
t="expando$key$"+t}return new P.ef(t,null,[P.x])})
lazy($,"kE","$get$kE",function(){return H.ae(H.hh({
toString:function(){return"$receiver$"}}))})
lazy($,"kF","$get$kF",function(){return H.ae(H.hh({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kG","$get$kG",function(){return H.ae(H.hh(null))})
lazy($,"kH","$get$kH",function(){return H.ae(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kL","$get$kL",function(){return H.ae(H.hh(void 0))})
lazy($,"kM","$get$kM",function(){return H.ae(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kJ","$get$kJ",function(){return H.ae(H.kK(null))})
lazy($,"kI","$get$kI",function(){return H.ae(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kO","$get$kO",function(){return H.ae(H.kK(void 0))})
lazy($,"kN","$get$kN",function(){return H.ae(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jy","$get$jy",function(){return P.mW()})
lazy($,"kj","$get$kj",function(){return P.n0(null,P.J)})
lazy($,"bX","$get$bX",function(){return[]})
lazy($,"k8","$get$k8",function(){return{}})
lazy($,"kX","$get$kX",function(){return P.jm(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jz","$get$jz",function(){return P.a0()})
lazy($,"iy","$get$iy",function(){return P.kr(P.x,P.ai)})
lazy($,"bZ","$get$bZ",function(){return P.kr(P.n,P.ai)})
lazy($,"kC","$get$kC",function(){return new G.cR(1281,0,4294967295)})
lazy($,"k1","$get$k1",function(){return new G.cQ(32774,770,769)})
lazy($,"N","$get$N",function(){return P.aD(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColors",C.I,"aColorAlpha",C.a1,"aPosition",C.G,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.H,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.I,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.G,"vPositionFromLight",C.a_,"vCenter",C.H,"vDepth",C.a6,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.J,"uConvolutionMatrix",C.J,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ac,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.aa,"uAnimationTable",C.h,"uTime",C.a9,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.f,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2])})
lazy($,"kT","$get$kT",function(){return C.L})
lazy($,"lk","$get$lk",function(){var t=G.fM("PointSpritesV")
t.bv(["aPosition"])
t.av(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.aw(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"lj","$get$lj",function(){var t=G.fM("PointSpritesF")
t.av(["uTexture"])
t.aw(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return t})
lazy($,"kk","$get$kk",function(){return[G.D(0,11,5),G.D(0,5,1),G.D(0,1,7),G.D(0,7,10),G.D(0,10,11),G.D(1,5,9),G.D(5,11,4),G.D(11,10,2),G.D(10,7,6),G.D(7,1,8),G.D(3,9,4),G.D(3,4,2),G.D(3,2,6),G.D(3,6,8),G.D(3,8,9),G.D(4,9,5),G.D(2,4,11),G.D(6,2,10),G.D(8,6,7),G.D(9,8,1)]})
lazy($,"lq","$get$lq",function(){return(1+P.nK(5))/2})
lazy($,"kl","$get$kl",function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=$.$get$lq()
s=T.W(-1,t,0)
s.C(0)
r=T.W(1,t,0)
r.C(0)
q=T.W(-1,-t,0)
q.C(0)
p=T.W(1,-t,0)
p.C(0)
o=T.W(0,-1,t)
o.C(0)
n=T.W(0,1,t)
n.C(0)
m=T.W(0,-1,-t)
m.C(0)
l=T.W(0,1,-t)
l.C(0)
k=T.W(t,0,-1)
k.C(0)
j=T.W(t,0,1)
j.C(0)
i=T.W(-t,0,-1)
i.C(0)
t=T.W(-t,0,1)
t.C(0)
return[s,r,q,p,o,n,m,l,k,j,i,t]})
lazy($,"lo","$get$lo",function(){var t=G.fM("sphereV")
t.bv(["aPosition","aNormal"])
t.av(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"])
t.bw(["vTexUV"])
t.aw(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);",$.n5])
return t})
lazy($,"ln","$get$ln",function(){var t=G.fM("sphereF")
t.bw(["vTexUV"])
t.av(["uTexture"])
t.aw(["oFragColor = texture(uTexture, vTexUV);"])
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
mangledGlobalNames:{x:"int",X:"double",a6:"num",n:"String",ai:"bool",J:"Null",h:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.q},{func:1,ret:P.ai,args:[W.Z,P.n,P.n,W.bI]},{func:1,v:true,args:[P.C],opt:[P.b3]},{func:1,v:true,args:[W.f]},{func:1,ret:P.x,args:[P.E,P.E]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,Blob:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMParser:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGNumber:J.a,SVGPreserveAspectRatio:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bv,ArrayBufferView:H.b2,DataView:H.fb,Float32Array:H.cv,Float64Array:H.fc,Int16Array:H.fd,Int32Array:H.fe,Int8Array:H.ff,Uint16Array:H.fg,Uint32Array:H.fh,Uint8ClampedArray:H.cz,CanvasPixelArray:H.cz,Uint8Array:H.fi,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,Accelerometer:W.c3,LinearAccelerationSensor:W.c3,AccessibleNodeList:W.dL,HTMLAnchorElement:W.dM,HTMLAreaElement:W.dN,HTMLBodyElement:W.as,HTMLCanvasElement:W.at,CanvasGradient:W.c5,CanvasRenderingContext2D:W.c6,CDATASection:W.av,CharacterData:W.av,Comment:W.av,ProcessingInstruction:W.av,Text:W.av,CSSPerspective:W.dW,CSSPositionValue:W.dX,CSSRotation:W.dY,CSSScale:W.dZ,CSSStyleDeclaration:W.aS,MSStyleCSSProperties:W.aS,CSS2Properties:W.aS,CSSImageValue:W.Y,CSSKeywordValue:W.Y,CSSNumericValue:W.Y,CSSResourceValue:W.Y,CSSUnitValue:W.Y,CSSURLImageValue:W.Y,CSSStyleValue:W.Y,CSSMatrixComponent:W.aT,CSSSkew:W.aT,CSSTransformComponent:W.aT,CSSTransformValue:W.e0,CSSTranslation:W.e1,CSSUnparsedValue:W.e2,DataTransferItemList:W.e4,DeviceAcceleration:W.e5,HTMLDivElement:W.c9,XMLDocument:W.bm,Document:W.bm,DOMException:W.e6,DOMImplementation:W.ca,DOMMatrix:W.e7,DOMMatrixReadOnly:W.cb,DOMPoint:W.e8,DOMPointReadOnly:W.cc,ClientRectList:W.cd,DOMRectList:W.cd,DOMRectReadOnly:W.ce,DOMStringList:W.e9,DOMTokenList:W.ea,Element:W.Z,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,AccessibleNode:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RemotePlayback:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SourceBuffer:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,TextTrack:W.d,TextTrackCue:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,VTTCue:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,ServiceWorker:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,FileList:W.ey,FileWriter:W.ez,HTMLFormElement:W.eD,Gyroscope:W.eH,HTMLHeadElement:W.ck,History:W.eI,HTMLCollection:W.bo,HTMLFormControlsCollection:W.bo,HTMLOptionsCollection:W.bo,HTMLDocument:W.cl,XMLHttpRequest:W.eJ,XMLHttpRequestUpload:W.bp,XMLHttpRequestEventTarget:W.bp,ImageBitmap:W.aW,ImageData:W.aX,HTMLImageElement:W.aY,KeyboardEvent:W.aC,Location:W.f_,Magnetometer:W.f0,HTMLAudioElement:W.bt,HTMLMediaElement:W.bt,MediaList:W.f6,MIDIOutput:W.f8,MIDIInput:W.bu,MIDIPort:W.bu,MimeTypeArray:W.f9,PointerEvent:W.K,MouseEvent:W.K,DragEvent:W.K,DocumentFragment:W.q,ShadowRoot:W.q,Attr:W.q,DocumentType:W.q,Node:W.q,NodeIterator:W.cA,NodeList:W.bw,RadioNodeList:W.bw,Plugin:W.ac,PluginArray:W.fw,PresentationConnection:W.fz,Range:W.cE,RTCDataChannel:W.cH,DataChannel:W.cH,HTMLSelectElement:W.fI,AbsoluteOrientationSensor:W.an,AmbientLightSensor:W.an,OrientationSensor:W.an,RelativeOrientationSensor:W.an,Sensor:W.an,SourceBufferList:W.fN,SpeechGrammarList:W.fP,SpeechRecognitionResult:W.ad,Storage:W.fV,HTMLTableElement:W.cN,HTMLTableRowElement:W.h3,HTMLTableSectionElement:W.h4,HTMLTemplateElement:W.bC,TextTrackCueList:W.h6,TextTrackList:W.h7,TimeRanges:W.h9,TouchEvent:W.aH,TouchList:W.hd,TrackDefaultList:W.he,TreeWalker:W.cT,CompositionEvent:W.aI,FocusEvent:W.aI,TextEvent:W.aI,UIEvent:W.aI,URL:W.hn,VRStageBoundsPoint:W.hp,HTMLVideoElement:W.b5,VideoTrackList:W.hq,WebSocket:W.hr,WheelEvent:W.aK,Window:W.bG,DOMWindow:W.bG,CSSRuleList:W.hD,DOMRect:W.hE,GamepadList:W.i_,NamedNodeMap:W.d8,MozNamedAttrMap:W.d8,SpeechRecognitionResultList:W.ij,StyleSheetList:W.ik,SVGFEBlendElement:P.eg,SVGFEColorMatrixElement:P.eh,SVGFEComponentTransferElement:P.ei,SVGFECompositeElement:P.ej,SVGFEConvolveMatrixElement:P.ek,SVGFEDiffuseLightingElement:P.el,SVGFEDisplacementMapElement:P.em,SVGFEFloodElement:P.en,SVGFEGaussianBlurElement:P.eo,SVGFEImageElement:P.ep,SVGFEMergeElement:P.eq,SVGFEMorphologyElement:P.er,SVGFEOffsetElement:P.es,SVGFEPointLightElement:P.et,SVGFESpecularLightingElement:P.eu,SVGFESpotLightElement:P.ev,SVGFETileElement:P.ew,SVGFETurbulenceElement:P.ex,SVGFilterElement:P.eA,SVGForeignObjectElement:P.eC,SVGCircleElement:P.a_,SVGEllipseElement:P.a_,SVGLineElement:P.a_,SVGPathElement:P.a_,SVGPolygonElement:P.a_,SVGPolylineElement:P.a_,SVGGeometryElement:P.a_,SVGAElement:P.aa,SVGClipPathElement:P.aa,SVGDefsElement:P.aa,SVGGElement:P.aa,SVGSwitchElement:P.aa,SVGGraphicsElement:P.aa,SVGImageElement:P.eK,SVGLengthList:P.eU,SVGMaskElement:P.f3,SVGMatrix:P.f5,SVGNumberList:P.fm,SVGPatternElement:P.ft,SVGPoint:P.fx,SVGPointList:P.fy,SVGRect:P.fB,SVGRectElement:P.fC,SVGScriptElement:P.bz,SVGStringList:P.h1,SVGAnimateElement:P.u,SVGAnimateMotionElement:P.u,SVGAnimateTransformElement:P.u,SVGAnimationElement:P.u,SVGDescElement:P.u,SVGDiscardElement:P.u,SVGFEDistantLightElement:P.u,SVGFEFuncAElement:P.u,SVGFEFuncBElement:P.u,SVGFEFuncGElement:P.u,SVGFEFuncRElement:P.u,SVGFEMergeNodeElement:P.u,SVGLinearGradientElement:P.u,SVGMarkerElement:P.u,SVGMetadataElement:P.u,SVGRadialGradientElement:P.u,SVGSetElement:P.u,SVGStopElement:P.u,SVGStyleElement:P.u,SVGSymbolElement:P.u,SVGTitleElement:P.u,SVGViewElement:P.u,SVGGradientElement:P.u,SVGComponentTransferFunctionElement:P.u,SVGFEDropShadowElement:P.u,SVGMPathElement:P.u,SVGElement:P.u,SVGSVGElement:P.h2,SVGTextPathElement:P.bD,SVGTextContentElement:P.bD,SVGTSpanElement:P.bE,SVGTextElement:P.bE,SVGTextPositioningElement:P.bE,SVGTransformList:P.hf,SVGUseElement:P.ho,AudioBuffer:P.dQ,AudioTrackList:P.dR,AudioContext:P.aR,webkitAudioContext:P.aR,BaseAudioContext:P.aR,OfflineAudioContext:P.fn,WebGLRenderingContext:P.fF,WebGL2RenderingContext:P.fG,SQLResultSetRowList:P.fQ})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,Blob:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMParser:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,File:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGNumber:true,SVGPreserveAspectRatio:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,Accelerometer:true,LinearAccelerationSensor:true,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSPositionValue:true,CSSRotation:true,CSSScale:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSSkew:true,CSSTransformComponent:false,CSSTransformValue:true,CSSTranslation:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMMatrix:true,DOMMatrixReadOnly:false,DOMPoint:true,DOMPointReadOnly:false,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AccessibleNode:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,Gyroscope:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageBitmap:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,Magnetometer:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,AbsoluteOrientationSensor:true,AmbientLightSensor:true,OrientationSensor:true,RelativeOrientationSensor:true,Sensor:false,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VRStageBoundsPoint:true,HTMLVideoElement:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLengthList:true,SVGMaskElement:true,SVGMatrix:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMetadataElement:true,SVGRadialGradientElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransformList:true,SVGUseElement:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cw.$nativeSuperclassTag="ArrayBufferView"
H.bL.$nativeSuperclassTag="ArrayBufferView"
H.bM.$nativeSuperclassTag="ArrayBufferView"
H.cx.$nativeSuperclassTag="ArrayBufferView"
H.bN.$nativeSuperclassTag="ArrayBufferView"
H.bO.$nativeSuperclassTag="ArrayBufferView"
H.cy.$nativeSuperclassTag="ArrayBufferView"
W.bQ.$nativeSuperclassTag="EventTarget"
W.bR.$nativeSuperclassTag="EventTarget"
W.bS.$nativeSuperclassTag="EventTarget"
W.bT.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.lp(A.l9(),b)},[])
else (function(b){H.lp(A.l9(),b)})([])})})()