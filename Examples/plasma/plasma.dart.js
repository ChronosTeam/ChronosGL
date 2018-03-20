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
return d?function(e){if(t===null)t=H.jt(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jt(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jt(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={jf:function jf(a){this.a=a},
jk:function(a,b,c,d){if(!!a.$isc)return new H.e7(a,b,[c,d])
return new H.d8(a,b,[c,d])},
eK:function(){return new P.aD("No element")},
ml:function(){return new P.aD("Too many elements")},
mk:function(){return new P.aD("Too few elements")},
ds:function(a,b,c,d){if(c-b<=32)H.my(a,b,c,d)
else H.mx(a,b,c,d)},
my:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.ad(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.an(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mx:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.H(t+1,6)
r=a3+s
q=a4-s
p=C.b.H(a3+a4,2)
o=p-s
n=p+s
t=J.ad(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.an(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.an(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.an(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.an(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.an(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.an(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.an(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.an(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.an(a5.$2(j,i),0)){h=i
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
H.ds(a2,a3,g-2,a5)
H.ds(a2,f+2,a4,a5)
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
break}}H.ds(a2,g,f,a5)}else H.ds(a2,g,f,a5)},
c:function c(){},
bc:function bc(){},
d7:function d7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
d8:function d8(a,b,c){this.a=a
this.b=b
this.$ti=c},
e7:function e7(a,b,c){this.a=a
this.b=b
this.$ti=c},
eV:function eV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bA:function bA(a,b,c){this.a=a
this.b=b
this.$ti=c},
dA:function dA(a,b,c){this.a=a
this.b=b
this.$ti=c},
hn:function hn(a,b,c){this.a=a
this.b=b
this.$ti=c},
cl:function cl(){},
dI:function(a,b){var t=a.ai(b)
if(!u.globalState.d.cy)u.globalState.f.ap()
return t},
iO:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
l8:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.v(s).$isb)throw H.e(P.jP("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.i0(0,0,1,null,null,null,null,null,null,null,null,null,a)
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
s.f=new H.hD(P.jj(null,H.b5),0)
r=P.o
s.seJ(new H.ag(0,null,null,null,null,null,0,[r,H.b4]))
s.seM(new H.ag(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.i_()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.mf,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.mN)}if(u.globalState.x)return
s=u.globalState.a++
q=P.ah(null,null,null,r)
p=new H.be(0,null,!1)
o=new H.b4(s,new H.ag(0,null,null,null,null,null,0,[r,H.be]),q,u.createNewIsolate(),p,new H.ap(H.iU()),new H.ap(H.iU()),!1,!1,[],P.ah(null,null,null,null),null,null,!1,!0,P.ah(null,null,null,null))
q.l(0,0)
o.bz(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bj(a,{func:1,args:[,]}))o.ai(new H.j_(t,a))
else if(H.bj(a,{func:1,args:[,,]}))o.ai(new H.j0(t,a))
else o.ai(a)
u.globalState.f.ap()},
mN:function(a){var t=P.aU(["command","print","msg",a])
return new H.ak(!0,P.bX(null,P.o)).I(t)},
mh:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mi()
return},
mi:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.u("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.u('Cannot extract URI from "'+t+'"'))},
mf:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b3(!0,[]).Z(b.data)
s=J.ad(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.ne(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b3(!0,[]).Z(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b3(!0,[]).Z(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.o
j=P.ah(null,null,null,k)
i=new H.be(0,null,!1)
h=new H.b4(s,new H.ag(0,null,null,null,null,null,0,[k,H.be]),j,u.createNewIsolate(),i,new H.ap(H.iU()),new H.ap(H.iU()),!1,!1,[],P.ah(null,null,null,null),null,null,!1,!0,P.ah(null,null,null,null))
j.l(0,0)
h.bz(0,i)
u.globalState.f.a.W(0,new H.b5(h,new H.eH(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.ap()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lK(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ap()
break
case"close":u.globalState.ch.a_(0,$.$get$kb().h(0,a))
a.terminate()
u.globalState.f.ap()
break
case"log":H.me(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aU(["command","print","msg",t])
k=new H.ak(!0,P.bX(null,P.o)).I(k)
s.toString
self.postMessage(k)}else P.am(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
me:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aU(["command","log","msg",a])
r=new H.ak(!0,P.bX(null,P.o)).I(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.P(q)
t=H.aI(q)
s=P.ck(t)
throw H.e(s)}},
mg:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kg=$.kg+("_"+s)
$.kh=$.kh+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.G(0,["spawned",new H.bg(s,r),q,t.r])
r=new H.eI(a,b,c,d,t)
if(e){t.bS(q,q)
u.globalState.f.a.W(0,new H.b5(t,r,"start isolate"))}else r.$0()},
mz:function(a,b){var t=new H.h5(!0,!1,null)
t.du(a,b)
return t},
mO:function(a){return new H.b3(!0,[]).Z(new H.ak(!1,P.bX(null,P.o)).I(a))},
j_:function j_(a,b){this.a=a
this.b=b},
j0:function j0(a,b){this.a=a
this.b=b},
i0:function i0(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
b4:function b4(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
hV:function hV(a,b){this.a=a
this.b=b},
hD:function hD(a,b){this.a=a
this.b=b},
hE:function hE(a){this.a=a},
b5:function b5(a,b,c){this.a=a
this.b=b
this.c=c},
i_:function i_(){},
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
hw:function hw(){},
bg:function bg(a,b){this.b=a
this.a=b},
i1:function i1(a,b){this.a=a
this.b=b},
bZ:function bZ(a,b,c){this.b=a
this.c=b
this.a=c},
be:function be(a,b,c){this.a=a
this.b=b
this.c=c},
h5:function h5(a,b,c){this.a=a
this.b=b
this.c=c},
h6:function h6(a,b){this.a=a
this.b=b},
h7:function h7(a,b){this.a=a
this.b=b},
ap:function ap(a){this.a=a},
ak:function ak(a,b){this.a=a
this.b=b},
b3:function b3(a,b){this.a=a
this.b=b},
n7:function(a){return u.types[a]},
ng:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.v(a).$isq},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.az(a)
if(typeof t!=="string")throw H.e(H.U(a))
return t},
mw:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fx(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aX:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
dm:function(a){var t,s,r,q,p,o,n,m
t=J.v(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.O||!!J.v(a).$isb0){p=C.C(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aM(q,0)===36)q=C.i.d4(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dK(H.iC(a),0,null),u.mangledGlobalNames)},
ft:function(a){return"Instance of '"+H.dm(a)+"'"},
R:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mu:function(a){return a.b?H.R(a).getUTCFullYear()+0:H.R(a).getFullYear()+0},
ms:function(a){return a.b?H.R(a).getUTCMonth()+1:H.R(a).getMonth()+1},
mo:function(a){return a.b?H.R(a).getUTCDate()+0:H.R(a).getDate()+0},
mp:function(a){return a.b?H.R(a).getUTCHours()+0:H.R(a).getHours()+0},
mr:function(a){return a.b?H.R(a).getUTCMinutes()+0:H.R(a).getMinutes()+0},
mt:function(a){return a.b?H.R(a).getUTCSeconds()+0:H.R(a).getSeconds()+0},
mq:function(a){return a.b?H.R(a).getUTCMilliseconds()+0:H.R(a).getMilliseconds()+0},
kf:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.U(a))
return a[b]},
L:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ae(!0,b,"index",null)
t=J.c8(a)
if(b<0||C.b.cO(b,t))return P.B(b,a,"index",null,t)
return P.fu(b,"index",null)},
U:function(a){return new P.ae(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.dl()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.l9})
t.name=""}else t.toString=H.l9
return t},
l9:function(){return J.az(this.dartException)},
G:function(a){throw H.e(a)},
N:function(a){throw H.e(new P.a1(a))},
at:function(a){var t,s,r,q,p,o
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
kr:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jh:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eO(a,s,t?null:b.receiver)},
P:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.j1(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aV(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jh(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.dk(p,null))}}if(a instanceof TypeError){o=$.$get$kl()
n=$.$get$km()
m=$.$get$kn()
l=$.$get$ko()
k=$.$get$ks()
j=$.$get$kt()
i=$.$get$kq()
$.$get$kp()
h=$.$get$kv()
g=$.$get$ku()
f=o.N(s)
if(f!=null)return t.$1(H.jh(s,f))
else{f=n.N(s)
if(f!=null){f.method="call"
return t.$1(H.jh(s,f))}else{f=m.N(s)
if(f==null){f=l.N(s)
if(f==null){f=k.N(s)
if(f==null){f=j.N(s)
if(f==null){f=i.N(s)
if(f==null){f=l.N(s)
if(f==null){f=h.N(s)
if(f==null){f=g.N(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.dk(s,f==null?null:f.method))}}return t.$1(new H.hf(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dt()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ae(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dt()
return a},
aI:function(a){var t
if(a==null)return new H.dG(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dG(a,null)},
nk:function(a){if(a==null||typeof a!='object')return J.ao(a)
else return H.aX(a)},
n5:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
nf:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dI(b,new H.iJ(a))
case 1:return H.dI(b,new H.iK(a,d))
case 2:return H.dI(b,new H.iL(a,d,e))
case 3:return H.dI(b,new H.iM(a,d,e,f))
case 4:return H.dI(b,new H.iN(a,d,e,f,g))}throw H.e(P.ck("Unsupported number of arguments for wrapped closure"))},
c2:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.nf)
a.$identity=t
return t},
m1:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.v(c).$isb){t.$reflectionInfo=c
r=H.mw(t).r}else r=c
q=d?Object.create(new H.fM().constructor.prototype):Object.create(new H.bn(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.jY(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.n7,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jV:H.ja
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.jY(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
lZ:function(a,b,c,d){var t=H.ja
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
jY:function(a,b,c){var t,s,r,q
if(c)return H.m0(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.lZ(s,b==null?r!=null:b!==r,t,b)
return q},
m_:function(a,b,c,d){var t,s
t=H.ja
s=H.jV
switch(b?-1:a){case 0:throw H.e(new H.fE("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
m0:function(a,b){var t,s,r,q
H.lY()
t=$.jU
if(t==null){t=H.jT("receiver")
$.jU=t}s=b.$stubName
r=b.length
q=a[s]
t=H.m_(r,b==null?q!=null:b!==q,s,b)
return t},
jt:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.v(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.m1(a,b,t,!!d,e,f)},
ja:function(a){return a.a},
jV:function(a){return a.c},
lY:function(){var t=$.jW
if(t==null){t=H.jT("self")
$.jW=t}return t},
jT:function(a){var t,s,r,q,p
t=new H.bn("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
nF:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.au(a,"String"))},
Z:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.au(a,"double"))},
nE:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.au(a,"num"))},
n_:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.au(a,"bool"))},
ne:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.au(a,"int"))},
nm:function(a,b){throw H.e(H.au(a,b.substring(3)))},
nl:function(a,b){var t=J.ad(b)
throw H.e(H.jX(H.dm(a),t.bo(b,3,t.gj(b))))},
jw:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.v(a)[b])return a
H.nm(a,b)},
ay:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.v(a)[b]
else t=!0
if(t)return a
H.nl(a,b)},
nD:function(a){if(a==null)return a
if(!!J.v(a).$isb)return a
throw H.e(H.au(a,"List"))},
kQ:function(a){var t=J.v(a)
return"$S" in t?t.$S():null},
bj:function(a,b){var t
if(a==null)return!1
t=H.kQ(a)
return t==null?!1:H.kW(t,b)},
nB:function(a,b){var t,s
if(a==null)return a
if($.jq)return a
$.jq=!0
try{if(H.bj(a,b))return a
t=H.aK(b,null)
s=H.au(a,t)
throw H.e(s)}finally{$.jq=!1}},
au:function(a,b){return new H.he("type '"+H.dm(a)+"' is not a subtype of type '"+b+"'")},
jX:function(a,b){return new H.dV("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
aw:function(a){if(!0===a)return!1
if(!!J.v(a).$isjd)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.au(a,"bool"))},
aH:function(a){throw H.e(new H.hq(a))},
d:function(a){if(H.aw(a))throw H.e(new P.c9(null))},
nr:function(a){throw H.e(new P.dZ(a))},
iU:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
kU:function(a){return u.getIsolateTag(a)},
K:function(a){return new H.aE(a,null)},
D:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iC:function(a){if(a==null)return
return a.$ti},
kV:function(a,b){return H.jA(a["$as"+H.f(b)],H.iC(a))},
al:function(a,b,c){var t,s
t=H.kV(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aJ:function(a,b){var t,s
t=H.iC(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aK:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dK(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aK(t,b)
return H.mP(a,b)}return"unknown-reified-type"},
mP:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aK(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aK(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aK(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.n4(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aK(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
dK:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bM("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aK(o,c)}return p?"":"<"+s.k(0)+">"},
iD:function(a){var t,s
if(a instanceof H.b8){t=H.kQ(a)
if(t!=null)return H.aK(t,null)}s=J.v(a).constructor.name
if(a==null)return s
return s+H.dK(a.$ti,0,null)},
jA:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jx(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jx(a,null,b)
return b},
iv:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iC(a)
s=J.v(a)
if(s[b]==null)return!1
return H.kN(H.jA(s[d],t),c)},
dL:function(a,b,c,d){if(a==null)return a
if(H.iv(a,b,c,d))return a
throw H.e(H.jX(H.dm(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dK(c,0,null),u.mangledGlobalNames)))},
ny:function(a,b,c,d){if(a==null)return a
if(H.iv(a,b,c,d))return a
throw H.e(H.au(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dK(c,0,null),u.mangledGlobalNames)))},
kN:function(a,b){var t,s,r,q,p
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
if(!H.a_(r,b[p]))return!1}return!0},
nz:function(a,b,c){return H.jx(a,b,H.kV(b,c))},
a_:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aW")return!0
if('func' in b)return H.kW(a,b)
if('func' in a)return b.name==="jd"||b.name==="p"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.d(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.d(!0)
q=b[0]}else q=b
if(q!==s){p=H.aK(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.kN(H.jA(o,t),r)},
kM:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.a_(o,n)||H.a_(n,o)))return!1}return!0},
mW:function(a,b){var t,s,r,q,p,o
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
if(!(H.a_(p,o)||H.a_(o,p)))return!1}return!0},
kW:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.d('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.a_(t,s)||H.a_(s,t)))return!1}r=a.args
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
if(n===m){if(!H.kM(r,q,!1))return!1
if(!H.kM(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
g=r[h]
H.d(i)
f=q[h]
if(!(H.a_(g,f)||H.a_(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=q[e]
if(!(H.a_(g,f)||H.a_(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=o[e]
if(!(H.a_(g,f)||H.a_(f,g)))return!1}}return H.mW(a.named,b.named)},
jx:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nG:function(a){var t=$.ju
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nC:function(a){return H.aX(a)},
nA:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nh:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.p))
t=$.ju.$1(a)
s=$.iA[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iI[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kL.$2(a,t)
if(t!=null){s=$.iA[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iI[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.jy(r)
$.iA[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iI[t]=r
return r}if(p==="-"){o=H.jy(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.kY(a,r)
if(p==="*")throw H.e(new P.dz(t))
if(u.leafTags[t]===true){o=H.jy(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.kY(a,r)},
kY:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.iS(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
jy:function(a){return J.iS(a,!1,null,!!a.$isq)},
nj:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.iS(t,!1,null,!!t.$isq)
else return J.iS(t,c,null,null)},
nc:function(){if(!0===$.jv)return
$.jv=!0
H.nd()},
nd:function(){var t,s,r,q,p,o,n,m
$.iA=Object.create(null)
$.iI=Object.create(null)
H.nb()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.l7.$1(p)
if(o!=null){n=H.nj(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
nb:function(){var t,s,r,q,p,o,n
t=C.S()
t=H.bi(C.P,H.bi(C.U,H.bi(C.B,H.bi(C.B,H.bi(C.T,H.bi(C.Q,H.bi(C.R(C.C),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.ju=new H.iF(p)
$.kL=new H.iG(o)
$.l7=new H.iH(n)},
bi:function(a,b){return a(b)||b},
nq:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fx:function fx(a,b,c,d,e,f,g,h){var _=this
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
dk:function dk(a,b){this.a=a
this.b=b},
eO:function eO(a,b,c){this.a=a
this.b=b
this.c=c},
hf:function hf(a){this.a=a},
j1:function j1(a){this.a=a},
dG:function dG(a,b){this.a=a
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
b8:function b8(){},
h_:function h_(){},
fM:function fM(){},
bn:function bn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
he:function he(a){this.a=a},
dV:function dV(a){this.a=a},
fE:function fE(a){this.a=a},
hq:function hq(a){this.a=a},
aE:function aE(a,b){this.a=a
this.b=b},
ag:function ag(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eN:function eN(a){this.a=a},
eQ:function eQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
eR:function eR(a,b){this.a=a
this.$ti=b},
eS:function eS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iF:function iF(a){this.a=a},
iG:function iG(a){this.a=a},
iH:function iH(a){this.a=a},
i:function(a){return a},
ir:function(a){var t,s,r
if(!!J.v(a).$isn)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bC:function bC(){},
bd:function bd(){},
f2:function f2(){},
dc:function dc(){},
dd:function dd(){},
de:function de(){},
db:function db(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
df:function df(){},
f9:function f9(){},
bD:function bD(){},
bE:function bE(){},
bF:function bF(){},
bG:function bG(){},
n4:function(a){var t=H.D(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
iT:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
v:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d5.prototype
return J.d4.prototype}if(typeof a=="string")return J.aR.prototype
if(a==null)return J.eM.prototype
if(typeof a=="boolean")return J.eL.prototype
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.p)return a
return J.iB(a)},
iS:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iB:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jv==null){H.nc()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.dz("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jg()]
if(p!=null)return p
p=H.nh(a)
if(p!=null)return p
if(typeof a=="function")return C.V
s=Object.getPrototypeOf(a)
if(s==null)return C.E
if(s===Object.prototype)return C.E
if(typeof q=="function"){Object.defineProperty(q,$.$get$jg(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
ad:function(a){if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.p)return a
return J.iB(a)},
bk:function(a){if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.p)return a
return J.iB(a)},
kS:function(a){if(typeof a=="number")return J.bb.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.b0.prototype
return a},
n6:function(a){if(typeof a=="number")return J.bb.prototype
if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.b0.prototype
return a},
kT:function(a){if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.b0.prototype
return a},
k:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.p)return a
return J.iB(a)},
E:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.v(a).w(a,b)},
an:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kS(a).ar(a,b)},
la:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kS(a).aH(a,b)},
bl:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ng(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ad(a).h(a,b)},
lb:function(a,b,c){return J.bk(a).i(a,b,c)},
lc:function(a,b,c,d){return J.k(a).bw(a,b,c,d)},
jB:function(a,b){return J.kT(a).aM(a,b)},
bm:function(a,b){return J.k(a).dW(a,b)},
ld:function(a,b,c){return J.k(a).dX(a,b,c)},
jC:function(a,b){return J.k(a).bR(a,b)},
j2:function(a,b){return J.k(a).P(a,b)},
jD:function(a,b,c){return J.k(a).bU(a,b,c)},
le:function(a,b){return J.k(a).ea(a,b)},
dM:function(a,b,c){return J.k(a).bV(a,b,c)},
lf:function(a,b,c){return J.k(a).bW(a,b,c)},
c6:function(a,b,c){return J.k(a).bX(a,b,c)},
dN:function(a,b){return J.k(a).ed(a,b)},
lg:function(a,b){return J.k(a).bY(a,b)},
lh:function(a,b,c){return J.k(a).bZ(a,b,c)},
jE:function(a,b,c,d){return J.k(a).c_(a,b,c,d)},
li:function(a,b){return J.bk(a).c0(a,b)},
lj:function(a,b,c,d,e){return J.k(a).c1(a,b,c,d,e)},
lk:function(a,b){return J.n6(a).R(a,b)},
j3:function(a,b,c){return J.ad(a).eh(a,b,c)},
j4:function(a){return J.k(a).c3(a)},
ll:function(a){return J.k(a).c4(a)},
lm:function(a){return J.k(a).c7(a)},
jF:function(a){return J.k(a).en(a)},
ln:function(a,b){return J.k(a).c9(a,b)},
j5:function(a,b){return J.k(a).ca(a,b)},
lo:function(a,b,c,d){return J.k(a).cb(a,b,c,d)},
lp:function(a,b,c,d,e){return J.k(a).ev(a,b,c,d,e)},
lq:function(a,b,c,d,e){return J.k(a).cc(a,b,c,d,e)},
lr:function(a,b,c,d,e,f){return J.k(a).ew(a,b,c,d,e,f)},
ls:function(a,b){return J.bk(a).t(a,b)},
c7:function(a,b){return J.k(a).cd(a,b)},
lt:function(a,b){return J.k(a).ce(a,b)},
lu:function(a){return J.k(a).ex(a)},
lv:function(a,b){return J.bk(a).aj(a,b)},
lw:function(a){return J.k(a).ge9(a)},
ao:function(a){return J.v(a).gv(a)},
aL:function(a){return J.bk(a).gA(a)},
lx:function(a){return J.k(a).gD(a)},
c8:function(a){return J.ad(a).gj(a)},
ly:function(a){return J.k(a).gb4(a)},
lz:function(a){return J.v(a).gB(a)},
lA:function(a){return J.k(a).geX(a)},
lB:function(a){return J.k(a).gaE(a)},
j6:function(a){return J.k(a).gm(a)},
j7:function(a){return J.k(a).gn(a)},
jG:function(a){return J.k(a).gJ(a)},
j8:function(a,b){return J.k(a).a9(a,b)},
lC:function(a){return J.k(a).aG(a)},
lD:function(a){return J.k(a).bb(a)},
lE:function(a,b){return J.k(a).bc(a,b)},
lF:function(a,b,c){return J.k(a).bd(a,b,c)},
jH:function(a,b,c){return J.k(a).bg(a,b,c)},
lG:function(a,b){return J.k(a).cg(a,b)},
lH:function(a,b){return J.bk(a).cj(a,b)},
lI:function(a,b,c){return J.k(a).cl(a,b,c)},
lJ:function(a){return J.bk(a).eQ(a)},
lK:function(a,b){return J.k(a).G(a,b)},
lL:function(a,b,c){return J.k(a).cZ(a,b,c)},
lM:function(a,b,c,d){return J.k(a).bn(a,b,c,d)},
lN:function(a,b,c,d,e,f,g){return J.k(a).cr(a,b,c,d,e,f,g)},
lO:function(a,b,c,d){return J.k(a).cs(a,b,c,d)},
jI:function(a,b,c,d){return J.k(a).ct(a,b,c,d)},
lP:function(a){return J.kT(a).f_(a)},
az:function(a){return J.v(a).k(a)},
lQ:function(a,b,c,d){return J.k(a).f1(a,b,c,d)},
lR:function(a,b,c){return J.k(a).cw(a,b,c)},
lS:function(a,b,c){return J.k(a).cz(a,b,c)},
j9:function(a,b,c){return J.k(a).cA(a,b,c)},
lT:function(a,b,c){return J.k(a).cB(a,b,c)},
jJ:function(a,b,c){return J.k(a).cC(a,b,c)},
jK:function(a,b,c){return J.k(a).cD(a,b,c)},
jL:function(a,b,c){return J.k(a).cE(a,b,c)},
jM:function(a,b,c,d){return J.k(a).cF(a,b,c,d)},
jN:function(a,b,c,d){return J.k(a).cG(a,b,c,d)},
lU:function(a,b){return J.k(a).cI(a,b)},
lV:function(a,b,c){return J.k(a).f2(a,b,c)},
jO:function(a,b,c,d,e,f,g){return J.k(a).cK(a,b,c,d,e,f,g)},
lW:function(a,b,c,d,e){return J.k(a).cL(a,b,c,d,e)},
a:function a(){},
eL:function eL(){},
eM:function eM(){},
bz:function bz(){},
fn:function fn(){},
b0:function b0(){},
aS:function aS(){},
aQ:function aQ(a){this.$ti=a},
je:function je(a){this.$ti=a},
dR:function dR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bb:function bb(){},
d5:function d5(){},
d4:function d4(){},
aR:function aR(){}},P={
mD:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.mX()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.c2(new P.hs(t),1)).observe(s,{childList:true})
return new P.hr(t,s,r)}else if(self.setImmediate!=null)return P.mY()
return P.mZ()},
mE:function(a){++u.globalState.f.b
self.scheduleImmediate(H.c2(new P.ht(a),0))},
mF:function(a){++u.globalState.f.b
self.setImmediate(H.c2(new P.hu(a),0))},
mG:function(a){P.jl(C.z,a)},
mS:function(a,b){if(H.bj(a,{func:1,args:[P.aW,P.aW]})){b.toString
return a}else{b.toString
return a}},
mI:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.av))
H.d(b.a===0)
b.a=1
try{a.cv(new P.hK(b),new P.hL(b))}catch(r){t=H.P(r)
s=H.aI(r)
P.nn(new P.hM(b,t,s))}},
kC:function(a,b){var t,s,r,q
H.d(b.a<=1)
for(;t=a.a,s=t===2,s;){H.d(s)
a=a.c}s=b.a
if(t>=4){H.d(s<4)
r=b.c
b.c=null
q=b.ag(r)
H.d(b.a<4)
H.d(a.a>=4)
b.a=a.a
b.c=a.c
P.bT(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bK(q)}},
bT:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.is(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bT(t.a,b)}s=t.a
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
P.is(null,null,p,o,s)
return}s=$.C
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.C
H.d(l==null?s!=null:l!==s)
j=$.C
$.C=l
i=j}else i=null
s=b.c
if(s===8)new P.hQ(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.hP(r,b,m).$0()}else if((s&2)!==0)new P.hO(t,r,b).$0()
if(i!=null){H.d(!0)
$.C=i}s=r.b
if(!!J.v(s).$isez){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.ag(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.kC(s,o)
return}}g=b.b
H.d(g.a<4)
h=g.c
g.c=null
b=g.ag(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.d(!o)
g.a=4
g.c=p}else{H.d(!o)
g.a=8
g.c=p}t.a=g
s=g}},
mR:function(){var t,s
for(;t=$.bh,t!=null;){$.c0=null
s=t.b
$.bh=s
if(s==null)$.c_=null
t.a.$0()}},
mV:function(){$.jr=!0
try{P.mR()}finally{$.c0=null
$.jr=!1
if($.bh!=null)$.$get$jn().$1(P.kO())}},
kJ:function(a){var t=new P.dB(a,null)
if($.bh==null){$.c_=t
$.bh=t
if(!$.jr)$.$get$jn().$1(P.kO())}else{$.c_.b=t
$.c_=t}},
mU:function(a){var t,s,r
t=$.bh
if(t==null){P.kJ(a)
$.c0=$.c_
return}s=new P.dB(a,null)
r=$.c0
if(r==null){s.b=t
$.c0=s
$.bh=s}else{s.b=r.b
r.b=s
$.c0=s
if(s.b==null)$.c_=s}},
nn:function(a){var t=$.C
if(C.f===t){P.iu(null,null,C.f,a)
return}t.toString
P.iu(null,null,t,t.aZ(a))},
mA:function(a,b){var t=$.C
if(t===C.f){t.toString
return P.jl(a,b)}return P.jl(a,t.aZ(b))},
jl:function(a,b){var t=C.b.H(a.a,1000)
return H.mz(t<0?0:t,b)},
jm:function(a){var t,s
H.d(a!=null)
t=$.C
H.d(a==null?t!=null:a!==t)
s=$.C
$.C=a
return s},
is:function(a,b,c,d,e){var t={}
t.a=d
P.mU(new P.it(t,e))},
kH:function(a,b,c,d){var t,s
if($.C===c)return d.$0()
t=P.jm(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.C=s}},
kI:function(a,b,c,d,e){var t,s
if($.C===c)return d.$1(e)
t=P.jm(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.C=s}},
mT:function(a,b,c,d,e,f){var t,s
if($.C===c)return d.$2(e,f)
t=P.jm(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.C=s}},
iu:function(a,b,c,d){var t=C.f!==c
if(t)d=!(!t||!1)?c.aZ(d):c.eb(d)
P.kJ(d)},
hs:function hs(a){this.a=a},
hr:function hr(a,b,c){this.a=a
this.b=b
this.c=c},
ht:function ht(a){this.a=a},
hu:function hu(a){this.a=a},
hy:function hy(){},
ii:function ii(a,b){this.a=a
this.$ti=b},
dD:function dD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hJ:function hJ(a,b){this.a=a
this.b=b},
hN:function hN(a,b){this.a=a
this.b=b},
hK:function hK(a){this.a=a},
hL:function hL(a){this.a=a},
hM:function hM(a,b,c){this.a=a
this.b=b
this.c=c},
hQ:function hQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hR:function hR(a){this.a=a},
hP:function hP(a,b,c){this.a=a
this.b=b
this.c=c},
hO:function hO(a,b,c){this.a=a
this.b=b
this.c=c},
dB:function dB(a,b){this.a=a
this.b=b},
fR:function fR(){},
fT:function fT(a){this.a=a},
fU:function fU(a,b){this.a=a
this.b=b},
fS:function fS(){},
b7:function b7(a,b){this.a=a
this.b=b},
iq:function iq(){},
it:function it(a,b){this.a=a
this.b=b},
i3:function i3(){},
i5:function i5(a,b){this.a=a
this.b=b},
i4:function i4(a,b){this.a=a
this.b=b},
i6:function i6(a,b){this.a=a
this.b=b},
kd:function(a,b){return new H.ag(0,null,null,null,null,null,0,[a,b])},
F:function(){return new H.ag(0,null,null,null,null,null,0,[null,null])},
aU:function(a){return H.n5(a,new H.ag(0,null,null,null,null,null,0,[null,null]))},
bX:function(a,b){return new P.dE(0,null,null,null,null,null,0,[a,b])},
mM:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
mj:function(a,b,c){var t,s
if(P.js(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$c1()
C.a.l(s,a)
try{P.mQ(a,t)}finally{H.d(C.a.gaD(s)===a)
s.pop()}s=P.kk(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eJ:function(a,b,c){var t,s,r
if(P.js(a))return b+"..."+c
t=new P.bM(b)
s=$.$get$c1()
C.a.l(s,a)
try{r=t
r.a=P.kk(r.ga6(),a,", ")}finally{H.d(C.a.gaD(s)===a)
s.pop()}s=t
s.a=s.ga6()+c
s=t.ga6()
return s.charCodeAt(0)==0?s:s},
js:function(a){var t,s
for(t=0;s=$.$get$c1(),t<s.length;++t)if(a===s[t])return!0
return!1},
mQ:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gA(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.p())return
q=H.f(t.gq())
C.a.l(b,q)
s+=q.length+2;++r}if(!t.p()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gq();++r
if(!t.p()){if(r<=4){C.a.l(b,H.f(n))
return}p=H.f(n)
o=b.pop()
s+=p.length+2}else{m=t.gq();++r
H.d(r<100)
for(;t.p();n=m,m=l){l=t.gq();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.l(b,"...")
return}}o=H.f(n)
p=H.f(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.l(b,k)
C.a.l(b,o)
C.a.l(b,p)},
ah:function(a,b,c,d){return new P.hX(0,null,null,null,null,null,0,[d])},
ji:function(a,b){var t,s
t=P.ah(null,null,null,b)
for(s=J.aL(a);s.p();)t.l(0,s.gq())
return t},
mm:function(a){var t,s,r
t={}
if(P.js(a))return"{...}"
s=new P.bM("")
try{C.a.l($.$get$c1(),a)
r=s
r.a=r.ga6()+"{"
t.a=!0
a.aj(0,new P.eW(t,s))
t=s
t.a=t.ga6()+"}"}finally{t=$.$get$c1()
H.d(C.a.gaD(t)===a)
t.pop()}t=s.ga6()
return t.charCodeAt(0)==0?t:t},
jj:function(a,b){var t=new P.eT(null,0,0,0,[b])
t.dl(a,b)
return t},
dE:function dE(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hX:function hX(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hY:function hY(a,b,c){this.a=a
this.b=b
this.c=c},
bW:function bW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hU:function hU(){},
d6:function d6(){},
x:function x(){},
eW:function eW(a,b){this.a=a
this.b=b},
eT:function eT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hZ:function hZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fG:function fG(){},
fF:function fF(){},
bI:function bI(){},
kk:function(a,b,c){var t=J.aL(b)
if(!t.p())return a
if(c.length===0){do a+=H.f(t.gq())
while(t.p())}else{a+=H.f(t.gq())
for(;t.p();)a=a+c+H.f(t.gq())}return a},
m2:function(a,b){return J.lk(a,b)},
m4:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.f(t)
if(t>=10)return s+"00"+H.f(t)
return s+"000"+H.f(t)},
m5:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ce:function(a){if(a>=10)return""+a
return"0"+a},
jc:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.az(a)
if(typeof a==="string")return JSON.stringify(a)
return P.m9(a)},
m9:function(a){var t=J.v(a)
if(!!t.$isb8)return t.k(a)
return H.ft(a)},
jP:function(a){return new P.ae(!1,null,null,a)},
jQ:function(a,b,c){return new P.ae(!0,a,b,c)},
lX:function(a){return new P.ae(!1,null,a,"Must not be null")},
fu:function(a,b,c){return new P.dp(null,null,!0,a,b,"Value not in range")},
aY:function(a,b,c,d,e){return new P.dp(b,c,!0,a,d,"Invalid value")},
ki:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.aY(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.aY(b,a,c,"end",f))
return b},
B:function(a,b,c,d,e){var t=e!=null?e:J.c8(b)
return new P.eF(b,t,!0,a,c,"Index out of range")},
ck:function(a){return new P.hI(a)},
ke:function(a,b,c){var t,s
t=H.D([],[c])
for(s=J.aL(a);s.p();)C.a.l(t,s.gq())
if(b)return t
t.fixed$length=Array
return t},
am:function(a){H.iT(H.f(a))},
ax:function ax(){},
I:function I(){},
bo:function bo(a,b){this.a=a
this.b=b},
M:function M(){},
aP:function aP(a){this.a=a},
e5:function e5(){},
e6:function e6(){},
ba:function ba(){},
c9:function c9(a){this.a=a},
dl:function dl(){},
ae:function ae(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dp:function dp(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eF:function eF(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
u:function u(a){this.a=a},
dz:function dz(a){this.a=a},
aD:function aD(a){this.a=a},
a1:function a1(a){this.a=a},
dt:function dt(){},
dZ:function dZ(a){this.a=a},
hI:function hI(a){this.a=a},
e8:function e8(a,b,c){this.a=a
this.b=b
this.$ti=c},
o:function o(){},
W:function W(){},
d3:function d3(){},
b:function b(){},
aC:function aC(){},
aW:function aW(){},
V:function V(){},
p:function p(){},
bL:function bL(){},
t:function t(){},
bM:function bM(a){this.a=a},
iy:function(a){var t,s,r,q,p
if(a==null)return
t=P.F()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.N)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
n2:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.lv(a,new P.ix(t))
return t},
k4:function(){var t=$.k3
if(t==null){t=J.j3(window.navigator.userAgent,"Opera",0)
$.k3=t}return t},
m6:function(){var t,s
t=$.k0
if(t!=null)return t
s=$.k1
if(s==null){s=J.j3(window.navigator.userAgent,"Firefox",0)
$.k1=s}if(s)t="-moz-"
else{s=$.k2
if(s==null){s=!P.k4()&&J.j3(window.navigator.userAgent,"Trident/",0)
$.k2=s}if(s)t="-ms-"
else t=P.k4()?"-o-":"-webkit-"}$.k0=t
return t},
ix:function ix(a){this.a=a},
hW:function hW(){},
i2:function i2(){},
J:function J(){},
dO:function dO(){},
aM:function aM(){},
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
eu:function eu(){},
ew:function ew(){},
af:function af(){},
aB:function aB(){},
eD:function eD(){},
aq:function aq(){},
eP:function eP(){},
eX:function eX(){},
eY:function eY(){},
ar:function ar(){},
fd:function fd(){},
fk:function fk(){},
fp:function fp(){},
fq:function fq(){},
fv:function fv(){},
fw:function fw(){},
bJ:function bJ(){},
fV:function fV(){},
H:function H(){},
fW:function fW(){},
fX:function fX(){},
dv:function dv(){},
h0:function h0(){},
bO:function bO(){},
as:function as(){},
ha:function ha(){},
hh:function hh(){},
hj:function hj(){},
hk:function hk(){},
bU:function bU(){},
i7:function i7(){},
i8:function i8(){},
i9:function i9(){},
cs:function cs(){},
cq:function cq(){},
cx:function cx(){},
cB:function cB(){},
cM:function cM(){},
cU:function cU(){},
cQ:function cQ(){},
cS:function cS(){},
dS:function dS(){},
fB:function fB(){},
fC:function fC(){},
im:function im(){},
fL:function fL(){},
cr:function cr(){},
cO:function cO(){}},W={
m7:function(a,b,c){var t,s
t=document.body
s=(t&&C.q).M(t,a,b,c)
s.toString
t=new H.dA(new W.S(s),new W.iw(),[W.r])
return t.ga4(t)},
m8:function(a){return"wheel"},
bq:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lA(a)
if(typeof s==="string")t=a.tagName}catch(r){H.P(r)}return t},
mH:function(a,b){return document.createElement(a)},
b6:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kF:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ac:function(a,b,c,d,e){var t=c==null?null:W.kK(new W.hH(c))
t=new W.hG(0,a,b,t,!1,[e])
t.dC(a,b,c,!1,e)
return t},
kD:function(a){var t,s
t=document.createElement("a")
s=new W.ia(t,window.location)
s=new W.bV(s)
s.dD(a)
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
kG:function(){var t=P.t
t=new W.ij(P.ji(C.u,t),P.ah(null,null,null,t),P.ah(null,null,null,t),P.ah(null,null,null,t),null)
t.dF(null,new H.bA(C.u,new W.ik(),[H.aJ(C.u,0),null]),["TEMPLATE"],null)
return t},
kK:function(a){var t=$.C
if(t===C.f)return a
return t.ec(a)},
l:function l(){},
dP:function dP(){},
dQ:function dQ(){},
a0:function a0(){},
dT:function dT(){},
ca:function ca(){},
aN:function aN(){},
cb:function cb(){},
cc:function cc(){},
cd:function cd(){},
aO:function aO(){},
dX:function dX(){},
z:function z(){},
b9:function b9(){},
dY:function dY(){},
e_:function e_(){},
e0:function e0(){},
cf:function cf(){},
bp:function bp(){},
cg:function cg(){},
e1:function e1(){},
ch:function ch(){},
e2:function e2(){},
ci:function ci(){},
cj:function cj(){},
e3:function e3(){},
e4:function e4(){},
a2:function a2(){},
iw:function iw(){},
j:function j(){},
h:function h(){},
a3:function a3(){},
es:function es(){},
et:function et(){},
ex:function ex(){},
a4:function a4(){},
cn:function cn(){},
eB:function eB(){},
bx:function bx(){},
co:function co(){},
eC:function eC(){},
by:function by(){},
eG:function eG(){},
aT:function aT(){},
eU:function eU(){},
eZ:function eZ(){},
f_:function f_(){},
bB:function bB(){},
a5:function a5(){},
f0:function f0(){},
O:function O(){},
fa:function fa(){},
S:function S(a){this.a=a},
r:function r(){},
dh:function dh(){},
bH:function bH(){},
fj:function fj(){},
fm:function fm(){},
a6:function a6(){},
fo:function fo(){},
fr:function fr(){},
fs:function fs(){},
dn:function dn(){},
fD:function fD(){},
dr:function dr(){},
bK:function bK(){},
fH:function fH(){},
a7:function a7(){},
fI:function fI(){},
a8:function a8(){},
fK:function fK(){},
a9:function a9(){},
fP:function fP(){},
fQ:function fQ(a){this.a=a},
X:function X(){},
aj:function aj(){},
du:function du(){},
fY:function fY(){},
fZ:function fZ(){},
bN:function bN(){},
aa:function aa(){},
Y:function Y(){},
h1:function h1(){},
h2:function h2(){},
h4:function h4(){},
ab:function ab(){},
b_:function b_(){},
h8:function h8(){},
h9:function h9(){},
bf:function bf(){},
hb:function hb(){},
dx:function dx(){},
aF:function aF(){},
hg:function hg(){},
hi:function hi(){},
hl:function hl(){},
hm:function hm(){},
b1:function b1(){},
bS:function bS(){},
ho:function ho(a){this.a=a},
hp:function hp(){},
b2:function b2(){},
hx:function hx(){},
dC:function dC(){},
hz:function hz(){},
hA:function hA(){},
hB:function hB(){},
hS:function hS(){},
hT:function hT(){},
dF:function dF(){},
ib:function ib(){},
ie:function ie(){},
ig:function ig(){},
io:function io(){},
ip:function ip(){},
hv:function hv(){},
hC:function hC(a){this.a=a},
hF:function hF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jo:function jo(a,b,c,d){var _=this
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
bV:function bV(a){this.a=a},
A:function A(){},
dj:function dj(a){this.a=a},
fc:function fc(a){this.a=a},
fb:function fb(a,b,c){this.a=a
this.b=b
this.c=c},
bY:function bY(){},
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
cm:function cm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
di:function di(){},
ia:function ia(a,b){this.a=a
this.b=b},
dH:function dH(a){this.a=a},
il:function il(a){this.a=a},
br:function br(){},
bs:function bs(){},
bt:function bt(){},
bu:function bu(){},
bv:function bv(){},
bw:function bw(){},
cp:function cp(){},
cJ:function cJ(){},
cv:function cv(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
cF:function cF(){},
cG:function cG(){},
cH:function cH(){},
cI:function cI(){},
ct:function ct(){},
cu:function cu(){},
cw:function cw(){},
cy:function cy(){},
cz:function cz(){},
cA:function cA(){},
cK:function cK(){},
cL:function cL(){},
cW:function cW(){},
cX:function cX(){},
cV:function cV(){},
d_:function d_(){},
d0:function d0(){},
d1:function d1(){},
d2:function d2(){},
cN:function cN(){},
cP:function cP(){},
cR:function cR(){},
cT:function cT(){},
cY:function cY(){},
cZ:function cZ(){}},B={
no:function(a){var t,s
t=document
s=W.aT
W.ac(t,"keydown",new B.iV(),!1,s)
W.ac(t,"keyup",new B.iW(),!1,s)
if(!$.np)W.ac(t,"mousemove",new B.iX(),!1,W.O)
s=W.O
W.ac(t,"mousedown",new B.iY(),!1,s)
W.ac(t,"mouseup",new B.iZ(),!1,s)},
mn:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.i(3))
s=$.$get$iz()
r=$.$get$c3()
q=new T.Q(new Float32Array(H.i(16)))
q.T()
q=new B.fe(a,b,c,0,new T.m(t),-0.02,s,r,q,new T.m(new Float32Array(H.i(3))),new T.m(new Float32Array(H.i(3))),new T.m(new Float32Array(H.i(3))),new T.m(new Float32Array(H.i(3))),"camera:orbit",!1,!0)
q.dm(a,b,c,d)
return q},
iV:function iV(){},
iW:function iW(){},
iX:function iX(){},
iY:function iY(){},
iZ:function iZ(){},
fe:function fe(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
ff:function ff(a){this.a=a},
fg:function fg(a){this.a=a},
fh:function fh(){},
fi:function fi(a){this.a=a},
m3:function(d1,d2,d3,d4,d5,d6,d7,d8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
t=-d6
s=-d7
r=new T.m(new Float32Array(H.i(3)))
r.u(t,s,d8)
q=new T.m(new Float32Array(H.i(3)))
q.u(d6,s,d8)
p=new T.m(new Float32Array(H.i(3)))
p.u(d6,d7,d8)
o=new T.m(new Float32Array(H.i(3)))
o.u(t,d7,d8)
n=-d8
m=new T.m(new Float32Array(H.i(3)))
m.u(t,s,n)
l=new T.m(new Float32Array(H.i(3)))
l.u(t,d7,n)
k=new T.m(new Float32Array(H.i(3)))
k.u(d6,d7,n)
j=new T.m(new Float32Array(H.i(3)))
j.u(d6,s,n)
i=new T.m(new Float32Array(H.i(3)))
i.u(t,d7,n)
h=new T.m(new Float32Array(H.i(3)))
h.u(t,d7,d8)
g=new T.m(new Float32Array(H.i(3)))
g.u(d6,d7,d8)
f=new T.m(new Float32Array(H.i(3)))
f.u(d6,d7,n)
e=new T.m(new Float32Array(H.i(3)))
e.u(d6,s,d8)
d=new T.m(new Float32Array(H.i(3)))
d.u(t,s,d8)
c=new T.m(new Float32Array(H.i(3)))
c.u(t,s,n)
b=new T.m(new Float32Array(H.i(3)))
b.u(d6,s,n)
a=new T.m(new Float32Array(H.i(3)))
a.u(d6,s,n)
a0=new T.m(new Float32Array(H.i(3)))
a0.u(d6,d7,n)
a1=new T.m(new Float32Array(H.i(3)))
a1.u(d6,d7,d8)
a2=new T.m(new Float32Array(H.i(3)))
a2.u(d6,s,d8)
a3=new T.m(new Float32Array(H.i(3)))
a3.u(t,s,n)
a4=new T.m(new Float32Array(H.i(3)))
a4.u(t,s,d8)
s=new T.m(new Float32Array(H.i(3)))
s.u(t,d7,d8)
a5=new T.m(new Float32Array(H.i(3)))
a5.u(t,d7,n)
n=new Float32Array(H.i(2))
n[0]=d3
n[1]=d5
t=new Float32Array(H.i(2))
t[0]=d2
t[1]=d5
a6=new Float32Array(H.i(2))
a6[0]=d2
a6[1]=d4
a7=new Float32Array(H.i(2))
a7[0]=d3
a7[1]=d4
a8=new Float32Array(H.i(2))
a8[0]=d2
a8[1]=d5
a9=new Float32Array(H.i(2))
a9[0]=d2
a9[1]=d4
b0=new Float32Array(H.i(2))
b0[0]=d3
b0[1]=d4
b1=new Float32Array(H.i(2))
b1[0]=d3
b1[1]=d5
b2=new Float32Array(H.i(2))
b2[0]=d3
b2[1]=d4
b3=new Float32Array(H.i(2))
b3[0]=d3
b3[1]=d5
b4=new Float32Array(H.i(2))
b4[0]=d2
b4[1]=d5
b5=new Float32Array(H.i(2))
b5[0]=d2
b5[1]=d4
b6=new Float32Array(H.i(2))
b6[0]=d2
b6[1]=d4
b7=new Float32Array(H.i(2))
b7[0]=d3
b7[1]=d4
b8=new Float32Array(H.i(2))
b8[0]=d3
b8[1]=d5
b9=new Float32Array(H.i(2))
b9[0]=d2
b9[1]=d5
c0=new Float32Array(H.i(2))
c0[0]=d2
c0[1]=d5
c1=new Float32Array(H.i(2))
c1[0]=d2
c1[1]=d4
c2=new Float32Array(H.i(2))
c2[0]=d3
c2[1]=d4
c3=new Float32Array(H.i(2))
c3[0]=d3
c3[1]=d5
c4=new Float32Array(H.i(2))
c4[0]=d3
c4[1]=d5
c5=new Float32Array(H.i(2))
c5[0]=d2
c5[1]=d5
c6=new Float32Array(H.i(2))
c6[0]=d2
c6[1]=d4
c7=new Float32Array(H.i(2))
c7[0]=d3
c7[1]=d4
c8=new G.eA(!1,[],[],[],P.F())
c8.bq("aTexUV")
c8.bq("aNormal")
c8.dd(6)
c8.at([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.da("aTexUV",[new T.w(n),new T.w(t),new T.w(a6),new T.w(a7),new T.w(a8),new T.w(a9),new T.w(b0),new T.w(b1),new T.w(b2),new T.w(b3),new T.w(b4),new T.w(b5),new T.w(b6),new T.w(b7),new T.w(b8),new T.w(b9),new T.w(c0),new T.w(c1),new T.w(c2),new T.w(c3),new T.w(c4),new T.w(c5),new T.w(c6),new T.w(c7)])
for(c9=0;t=$.$get$kB(),c9<6;++c9){d0=t[c9]
c8.dc("aNormal",[d0,d0,d0,d0])}return c8}},G={
mC:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.an(t,"\n")},
kA:function(a,b,c){var t,s,r,q
t=J.k(a)
s=t.c6(a,b)
t.bl(a,s,c)
t.c2(a,s)
r=t.bf(a,s,35713)
if(r!=null&&!r){q=t.be(a,s)
P.am("E:Compilation failed:")
P.am("E:"+G.mC(c))
P.am("E:Failure:")
P.am(C.i.a3("E:",q))
throw H.e(q)}return s},
k8:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.j6(a[s])
b[t+1]=J.j7(a[s])
b[t+2]=J.jG(a[s])}return b},
mb:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.j6(a[s])
b[t+1]=J.j7(a[s])}return b},
mc:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.j6(a[s])
b[t+1]=J.j7(a[s])
b[t+2]=J.jG(a[s])
b[t+3]=J.lB(a[s])}return b},
ma:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.bl(a[s],0)
b[t+1]=J.bl(a[s],1)
b[t+2]=J.bl(a[s],2)
b[t+3]=J.bl(a[s],3)}return b},
mJ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gD(t),s=s.gA(s),r=b.x,q=[[P.b,P.o]],p=[P.M],o=[T.aG],n=[T.m],m=[T.w];s.p();){l=s.gq()
if(!r.E(0,l)){k="Dropping unnecessary attribute: "+H.f(l)
if($.kR>0)H.iT("I: "+k)
continue}j=t.h(0,l)
switch($.$get$T().h(0,l).a){case"vec2":b.ac(l,G.mb(H.dL(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.ac(l,G.k8(H.dL(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.ac(l,G.mc(H.dL(j,"$isb",o,"$asb"),null),4)
break
case"float":b.ac(l,new Float32Array(H.ir(H.dL(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.ac(l,G.ma(H.dL(j,"$isb",q,"$asb"),null),4)
break
default:if(H.aw(!1))H.aH("unknown type for "+H.f(l)+" ["+J.lz(j[0]).k(0)+"] ["+new H.aE(H.iD(j),null).k(0)+"] "+H.f(j))}}},
fA:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.ah(null,null,null,P.t)
s=c.b
r=d.b
q=c.f
p=J.ll(b.a)
o=G.kA(b.a,35633,s)
J.jD(b.a,p,o)
n=G.kA(b.a,35632,r)
J.jD(b.a,p,n)
if(q.length>0)J.lQ(b.a,p,q,35980)
J.lG(b.a,p)
if(!J.lF(b.a,p,35714))H.G(J.lE(b.a,p))
t=new G.fz(b,c,d,p,P.ji(c.c,null),P.F(),P.F(),t,null,a,!1,!0)
t.dq(a,b,c,d)
return t},
f1:function f1(){},
dy:function dy(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dU:function dU(){},
dW:function dW(a,b){this.a=a
this.b=b},
ey:function ey(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
er:function er(a,b,c,d){var _=this
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
dw:function dw(a,b,c){this.a=a
this.b=b
this.c=c},
bQ:function bQ(a,b,c){this.a=a
this.b=b
this.c=c},
d9:function d9(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
da:function da(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
fl:function fl(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
fz:function fz(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
ai:function ai(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fJ:function fJ(){},
h3:function h3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bP:function bP(){},
eE:function eE(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={
mB:function(a,b,c){var t,s,r,q
t="stars_"+b
s=b*3
r=new Float32Array(H.i(s))
for(q=0;q<s;++q)r[q]=($.$get$kz().eO()-0.5)*c
s=a.d
s=new G.da(s,J.jF(s.a),0,P.F(),a.e.x,null,0,-1,null,null,P.F(),"meshdata:"+t,!1,!0)
s.at(r)
return s},
dq:function dq(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
_.db=a
_.dx=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=a0
_.z=a1
_.Q=a2
_.a=a3
_.b=a4
_.c=a5},
fN:function fN(){},
fO:function fO(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
kP:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.O(c)
s=b.d
t.ck(0,s)
r=b.cx
J.az(b)
q=C.a.gaD(e)
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
p.ej(new T.aV(o))
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
C.a.l(e,b.ch)
a.dh(r,e,d)
e.pop()
for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.N)(s),++l)A.kP(a,s[l],t,d,e)},
dg:function dg(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
_.ch=a
_.cx=b
_.cy=c
_.db=d
_.dx=e
_.d=f
_.e=g
_.f=a0
_.r=a1
_.x=a2
_.a=a3
_.b=a4
_.c=a5},
aZ:function aZ(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fy:function fy(){},
dJ:function(a){var t,s
t=C.j.eA(a,0,new A.iE())
s=536870911&t+(C.b.cM(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iE:function iE(){}},T={
bR:function(a,b,c){var t=new T.m(new Float32Array(H.i(3)))
t.u(a,b,c)
return t},
aV:function aV(a){this.a=a},
Q:function Q(a){this.a=a},
w:function w(a){this.a=a},
m:function m(a){this.a=a},
aG:function aG(a){this.a=a}},Q={
ni:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
t={}
s=document
r=new R.fO(0,0,null,null,null,null)
r.dt(C.k.cQ(s,"stats"),"blue","gray")
q=C.k.cm(s,"#webgl-canvas")
p=new G.dW(null,q)
o=(q&&C.x).ba(q,"webgl2",P.aU(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=o
if(o==null)H.G(P.ck('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+J.az(J.lC(o))
if($.kR>0)P.am("I: "+n)
J.lj(o,0,0,0,1)
J.c7(o,2929)
J.c7(o,2884)
m=B.mn(65,0,0,q)
o=new T.Q(new Float32Array(H.i(16)))
o.T()
n=new T.Q(new Float32Array(H.i(16)))
n.T()
l=new G.fl(m,50,1,0.1,1000,o,n,new T.Q(new Float32Array(H.i(16))),P.F(),"perspective",!1,!0)
l.bt()
n=H.D([],[A.aZ])
k=new R.dq(q,l,null,p,n,17664,0,0,0,0,"main",!1,!0)
k.dn("main",p,null)
k.co(null)
o=W.j
W.ac(window,"resize",k.geT(),!1,o)
j=G.fA("plasma1",p,$.$get$l1(),$.$get$kZ())
i=G.fA("plasma2",p,$.$get$l2(),$.$get$l_())
h=G.fA("plasma3",p,$.$get$l3(),$.$get$l0())
g=[new A.aZ(j,[l],[],"plasma1",!1,!0),new A.aZ(i,[l],[],"plasma2",!1,!0),new A.aZ(h,[l],[],"plasma3",!1,!0)]
for(f=0;f<3;++f){e=g[f]
H.d(!0)
C.a.l(n,e)}d=new G.d9(P.F(),"mat",!1,!0)
d.K("cDepthTest",!0)
d.K("cDepthWrite",!0)
d.K("cBlendEquation",$.$get$jS())
j=$.$get$kj()
d.K("cStencilFunc",j)
i=g[0].d
c=B.m3(!0,1,0,1,0,10,10,10)
h=i.d
b=J.jF(h.a)
a=new G.da(h,b,4,P.F(),i.e.x,null,0,-1,null,null,P.F(),"meshdata:cube",!1,!0)
a.at(G.k8(c.d,null))
i=c.di()
a.y=J.j4(h.a)
H.d(a.ch!=null)
a0=a.ch.length
if(a0<768){a.saR(new Uint8Array(H.ir(i)))
a.Q=5121}else if(a0<196608){a.saR(new Uint16Array(H.ir(i)))
a.Q=5123}else{a.saR(new Uint32Array(H.ir(i)))
a.Q=5125}J.dN(h.a,b)
i=a.y
b=a.cx
a0=J.v(b)
H.d(!!a0.$iskw||!!a0.$iskx||!!a0.$isky)
J.dM(h.a,34963,i)
J.jE(h.a,34963,b,35048)
G.mJ(c,a)
i=new Float32Array(H.i(9))
h=new T.Q(new Float32Array(H.i(16)))
h.T()
b=new Float32Array(H.i(16))
a0=new T.Q(b)
a0.T()
a1=new Float32Array(H.i(3))
a2=new Float32Array(H.i(3))
a3=new Float32Array(H.i(3))
a4=new Float32Array(H.i(3))
a5=new T.m(a4)
a6=new A.dg(d,a,[],new T.aV(i),h,a0,new T.m(a1),new T.m(a2),new T.m(a3),a5,"meshdata:cube",!1,!0)
a6.bj(0,0,0)
a4[0]=b[0]
a4[1]=b[4]
a4[2]=b[8]
a0.ao(0,a5,-1)
a0.ao(0,a6.bh(),-0.7)
t.a=0
a0=g[0]
H.d(!0)
C.a.l(a0.f,a6)
C.k.bw(s,"keypress",new Q.iQ(t,g,a6),null)
a7=H.ay(C.k.cm(s,"#myselect"),"$isbK")
a7.toString
W.ac(a7,"change",new Q.iR(t,g,a6,a7),!1,o)
o=G.fA("stars",p,$.$get$l6(),$.$get$l5())
i=[]
h=o.d
b=$.$get$jR()
a8=new G.d9(P.F(),"stars",!1,!0)
a8.K("cDepthTest",!0)
a8.K("cDepthWrite",!1)
a8.K("cBlendEquation",b)
a8.K("cStencilFunc",j)
a9=s.createElement("canvas")
a9.width=64
a9.height=64
b0=C.x.cP(a9,"2d")
b1=(b0&&C.r).c5(b0,32,32,1,32,32,22);(b1&&C.o).az(b1,0,"gray")
C.o.az(b1,1,"black")
b0.fillStyle=b1
C.r.ey(b0,0,0,64,64)
b1=C.r.c5(b0,32,32,1,32,32,6);(b1&&C.o).az(b1,0,"white")
C.o.az(b1,1,"gray")
b0.globalAlpha=0.9
b0.fillStyle=b1
b0.arc(32,32,4,0,6.283185307179586,!1)
b0.fill("nonzero")
s=new G.h3(!1,!1,!1,!0,1,9729,9729)
j=J.lm(h.a)
b=new G.eE(a9,"Utils::Particles",j,3553,h,s)
J.c6(h.a,3553,j)
J.lI(h.a,37440,1)
b.ds(a9)
s.dk(h,3553)
H.d(J.lD(h.a)===0)
J.c6(h.a,3553,null)
a8.K("uTexture",b)
a8.K("uPointSize",1000)
a=R.mB(o,2000,100)
s=new Float32Array(H.i(9))
j=new T.Q(new Float32Array(H.i(16)))
j.T()
h=new T.Q(new Float32Array(H.i(16)))
h.T()
b=new Float32Array(H.i(3))
a0=new Float32Array(H.i(3))
a1=new Float32Array(H.i(3))
a2=new Float32Array(H.i(3))
H.d(!0)
C.a.l(i,new A.dg(a8,a,[],new T.aV(s),j,h,new T.m(b),new T.m(a0),new T.m(a1),new T.m(a2),a.a,!1,!0))
H.d(!0)
C.a.l(n,new A.aZ(o,[l],i,"stars",!1,!0))
t.b=0
new Q.iP(t,r,m,k,d,a6).$1(0)},
iQ:function iQ(a,b,c){this.a=a
this.b=b
this.c=c},
iR:function iR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iP:function iP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f}}
var v=[C,H,J,P,W,B,G,R,A,T,Q]
setFunctionNamesIfNecessary(v)
var $={}
H.jf.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gv:function(a){return H.aX(a)},
k:function(a){return H.ft(a)},
gB:function(a){return new H.aE(H.iD(a),null)}}
J.eL.prototype={
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
gB:function(a){return C.as},
$isax:1}
J.eM.prototype={
w:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
gB:function(a){return C.am}}
J.bz.prototype={
gv:function(a){return 0},
gB:function(a){return C.al},
k:function(a){return String(a)},
$iskc:1}
J.fn.prototype={}
J.b0.prototype={}
J.aS.prototype={
k:function(a){var t=a[$.$get$k_()]
return t==null?this.d7(a):J.az(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjd:1}
J.aQ.prototype={
b_:function(a,b){if(!!a.immutable$list)throw H.e(new P.u(b))},
aA:function(a,b){if(!!a.fixed$length)throw H.e(new P.u(b))},
l:function(a,b){this.aA(a,"add")
a.push(b)},
a_:function(a,b){var t
this.aA(a,"remove")
for(t=0;t<a.length;++t)if(J.E(a[t],b)){a.splice(t,1)
return!0}return!1},
L:function(a,b){var t,s,r,q,p
t=a.length
this.aA(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.N)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.G(new P.a1(a)))
a.push(q)}},
cj:function(a,b){return new H.bA(a,b,[H.aJ(a,0),null])},
an:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
t:function(a,b){return this.h(a,b)},
gez:function(a){if(a.length>0)return a[0]
throw H.e(H.eK())},
gaD:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.eK())},
bk:function(a,b,c,d,e){var t,s
this.b_(a,"setRange")
P.ki(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.G(P.aY(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.mk())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
bT:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.a1(a))}return!1},
d2:function(a,b){this.b_(a,"sort")
H.ds(a,0,a.length-1,P.n3())},
aJ:function(a){return this.d2(a,null)},
C:function(a,b){var t
for(t=0;t<a.length;++t)if(J.E(a[t],b))return!0
return!1},
k:function(a){return P.eJ(a,"[","]")},
gA:function(a){return new J.dR(a,a.length,0,null,[H.aJ(a,0)])},
gv:function(a){return H.aX(a)},
gj:function(a){return a.length},
sj:function(a,b){this.aA(a,"set length")
if(b<0)throw H.e(P.aY(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.L(a,b))
if(b>=a.length||b<0)throw H.e(H.L(a,b))
return a[b]},
i:function(a,b,c){this.b_(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.L(a,b))
if(b>=a.length||b<0)throw H.e(H.L(a,b))
a[b]=c},
$isn:1,
$asn:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.je.prototype={}
J.dR.prototype={
gq:function(){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.N(t))
r=this.c
if(r>=s){this.sbu(null)
return!1}this.sbu(t[r]);++this.c
return!0},
sbu:function(a){this.d=a}}
J.bb.prototype={
R:function(a,b){var t
if(typeof b!=="number")throw H.e(H.U(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaB(b)
if(this.gaB(a)===t)return 0
if(this.gaB(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaB:function(a){return a===0?1/a<0:a<0},
ee:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.u(""+a+".ceil()"))},
a8:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.u(""+a+".round()"))},
ef:function(a,b,c){if(this.R(b,c)>0)throw H.e(H.U(b))
if(this.R(a,b)<0)return b
if(this.R(a,c)>0)return c
return a},
f0:function(a,b){var t
if(b>20)throw H.e(P.aY(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaB(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
a3:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a+b},
ab:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a-b},
cN:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a/b},
F:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a*b},
aI:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
aL:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bP(a,b)},
H:function(a,b){return(a|0)===a?a/b|0:this.bP(a,b)},
bP:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.u("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
aV:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cM:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return(a&b)>>>0},
d9:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return(a^b)>>>0},
aH:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a<b},
ar:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a>b},
cO:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a>=b},
gB:function(a){return C.av},
$isV:1}
J.d5.prototype={
gB:function(a){return C.au},
$isM:1,
$iso:1,
$isV:1}
J.d4.prototype={
gB:function(a){return C.at},
$isM:1,
$isV:1}
J.aR.prototype={
aM:function(a,b){if(b>=a.length)throw H.e(H.L(a,b))
return a.charCodeAt(b)},
a3:function(a,b){if(typeof b!=="string")throw H.e(P.jQ(b,null,null))
return a+b},
d3:function(a,b,c){var t
if(c>a.length)throw H.e(P.aY(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bm:function(a,b){return this.d3(a,b,0)},
bo:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fu(b,null,null))
if(b>c)throw H.e(P.fu(b,null,null))
if(c>a.length)throw H.e(P.fu(c,null,null))
return a.substring(b,c)},
d4:function(a,b){return this.bo(a,b,null)},
f_:function(a){return a.toLowerCase()},
eh:function(a,b,c){if(c>a.length)throw H.e(P.aY(c,0,a.length,null,null))
return H.nq(a,b,c)},
R:function(a,b){var t
if(typeof b!=="string")throw H.e(H.U(b))
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
gj:function(a){return a.length},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.L(a,b))
if(b>=a.length||!1)throw H.e(H.L(a,b))
return a[b]},
$isn:1,
$asn:function(){},
$ist:1}
H.c.prototype={$asc:null}
H.bc.prototype={
gA:function(a){return new H.d7(this,this.gj(this),0,null,[H.al(this,"bc",0)])},
aF:function(a,b){return this.d6(0,b)},
eZ:function(a,b){var t,s
t=H.D([],[H.al(this,"bc",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.t(0,s)
return t},
eY:function(a){return this.eZ(a,!0)}}
H.d7.prototype={
gq:function(){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.ad(t)
r=s.gj(t)
if(this.b!==r)throw H.e(new P.a1(t))
q=this.c
if(q>=r){this.sae(null)
return!1}this.sae(s.t(t,q));++this.c
return!0},
sae:function(a){this.d=a}}
H.d8.prototype={
gA:function(a){return new H.eV(null,J.aL(this.a),this.b,this.$ti)},
gj:function(a){return J.c8(this.a)},
$asW:function(a,b){return[b]}}
H.e7.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.eV.prototype={
p:function(){var t=this.b
if(t.p()){this.sae(this.c.$1(t.gq()))
return!0}this.sae(null)
return!1},
gq:function(){return this.a},
sae:function(a){this.a=a},
$asd3:function(a,b){return[b]}}
H.bA.prototype={
gj:function(a){return J.c8(this.a)},
t:function(a,b){return this.b.$1(J.ls(this.a,b))},
$asc:function(a,b){return[b]},
$asbc:function(a,b){return[b]},
$asW:function(a,b){return[b]}}
H.dA.prototype={
gA:function(a){return new H.hn(J.aL(this.a),this.b,this.$ti)}}
H.hn.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq()))return!0
return!1},
gq:function(){return this.a.gq()}}
H.cl.prototype={}
H.j_.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.j0.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.i0.prototype={
seJ:function(a){this.z=a},
seM:function(a){this.ch=a}}
H.b4.prototype={
bS:function(a,b){if(!this.f.w(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aY()},
eS:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.a_(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bI();++r.d}this.y=!1}this.aY()},
e5:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eR:function(a){var t,s,r
if(this.ch==null)return
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.G(new P.u("removeRange"))
P.ki(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
d_:function(a,b){if(!this.r.w(0,a))return
this.db=b},
eD:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.G(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jj(null,null)
this.cx=t}t.W(0,new H.hV(a,c))},
eC:function(a,b){var t
if(!this.r.w(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aC()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jj(null,null)
this.cx=t}t.W(0,this.geK())},
eE:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.am(a)
if(b!=null)P.am(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.az(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bW(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.G(0,s)},
ai:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.P(o)
p=H.aI(o)
this.eE(q,p)
if(this.db){this.aC()
if(this===u.globalState.e)throw o}}finally{this.cy=H.n_(r)
u.globalState.d=H.jw(t,"$isb4")
if(t!=null)$=t.geI()
if(this.cx!=null)for(;n=this.cx,!n.gam(n);)this.cx.cn().$0()}return s},
ci:function(a){return this.b.h(0,a)},
bz:function(a,b){var t=this.b
if(t.E(0,a))throw H.e(P.ck("Registry: ports must be registered only once."))
t.i(0,a,b)},
aY:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.aC()},
aC:function(){var t,s,r
t=this.cx
if(t!=null)t.Y(0)
for(t=this.b,s=t.gcJ(t),s=s.gA(s);s.p();)s.gq().dH()
t.Y(0)
this.c.Y(0)
u.globalState.z.a_(0,this.a)
this.dx.Y(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].G(0,t[r+1])
this.ch=null}},
geI:function(){return this.d},
gei:function(){return this.e}}
H.hV.prototype={
$0:function(){this.a.G(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hD.prototype={
ep:function(){var t=this.a
if(t.b===t.c)return
return t.cn()},
cq:function(){var t,s,r
t=this.ep()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.E(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gam(s)}else s=!1
else s=!1
else s=!1
if(s)H.G(P.ck("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gam(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aU(["command","close"])
r=new H.ak(!0,new P.dE(0,null,null,null,null,null,0,[null,P.o])).I(r)
s.toString
self.postMessage(r)}return!1}t.eP()
return!0},
bN:function(){if(self.window!=null)new H.hE(this).$0()
else for(;this.cq(););},
ap:function(){var t,s,r,q,p
if(!u.globalState.x)this.bN()
else try{this.bN()}catch(r){t=H.P(r)
s=H.aI(r)
q=u.globalState.Q
p=P.aU(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.ak(!0,P.bX(null,P.o)).I(p)
q.toString
self.postMessage(p)}}}
H.hE.prototype={
$0:function(){if(!this.a.cq())return
P.mA(C.z,this)},
$S:function(){return{func:1,v:true}}}
H.b5.prototype={
eP:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.ai(this.b)}}
H.i_.prototype={}
H.eH.prototype={
$0:function(){H.mg(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eI.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bj(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bj(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aY()},
$S:function(){return{func:1,v:true}}}
H.hw.prototype={}
H.bg.prototype={
G:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mO(b)
if(t.gei()===s){s=J.ad(r)
switch(s.h(r,0)){case"pause":t.bS(s.h(r,1),s.h(r,2))
break
case"resume":t.eS(s.h(r,1))
break
case"add-ondone":t.e5(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eR(s.h(r,1))
break
case"set-errors-fatal":t.d_(s.h(r,1),s.h(r,2))
break
case"ping":t.eD(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eC(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.a_(0,s)
break}return}u.globalState.f.a.W(0,new H.b5(t,new H.i1(this,r),"receive"))},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bg){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gv:function(a){return this.b.a}}
H.i1.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dG(0,this.b)},
$S:function(){return{func:1}}}
H.bZ.prototype={
G:function(a,b){var t,s,r
t=P.aU(["command","message","port",this,"msg",b])
s=new H.ak(!0,P.bX(null,P.o)).I(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bZ){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gv:function(a){return C.b.d9((this.b<<16^this.a<<8)>>>0,this.c)}}
H.be.prototype={
dH:function(){this.c=!0
this.b=null},
dG:function(a,b){if(this.c)return
this.b.$1(b)},
$ismv:1}
H.h5.prototype={
du:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.W(0,new H.b5(s,new H.h6(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.c2(new H.h7(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.u("Timer greater than 0."))}}}
H.h6.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.h7.prototype={
$0:function(){this.a.c=null
H.iO()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ap.prototype={
gv:function(a){var t=this.a
t=C.b.aV(t,0)^C.b.H(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
w:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ap){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.ak.prototype={
I:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.v(a)
if(!!t.$isbC)return["buffer",a]
if(!!t.$isbd)return["typed",a]
if(!!t.$isn)return this.cV(a)
if(!!t.$ismd){r=this.gcS()
q=t.gD(a)
q=H.jk(q,r,H.al(q,"W",0),null)
q=P.ke(q,!0,H.al(q,"W",0))
t=t.gcJ(a)
t=H.jk(t,r,H.al(t,"W",0),null)
return["map",q,P.ke(t,!0,H.al(t,"W",0))]}if(!!t.$iskc)return this.cW(a)
if(!!t.$isa)this.cH(a)
if(!!t.$ismv)this.aq(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbg)return this.cX(a)
if(!!t.$isbZ)return this.cY(a)
if(!!t.$isb8){p=a.$static_name
if(p==null)this.aq(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isap)return["capability",a.a]
if(!(a instanceof P.p))this.cH(a)
return["dart",u.classIdExtractor(a),this.cU(u.classFieldsExtractor(a))]},
aq:function(a,b){throw H.e(new P.u((b==null?"Can't transmit:":b)+" "+H.f(a)))},
cH:function(a){return this.aq(a,null)},
cV:function(a){var t
H.d(typeof a!=="string")
t=this.cT(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.aq(a,"Can't serialize indexable: ")},
cT:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.I(a[s])
return t},
cU:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.I(a[t]))
return a},
cW:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.aq(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.I(a[t[r]])
return["js-object",t,s]},
cY:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cX:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b3.prototype={
Z:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.jP("Bad serialized message: "+H.f(a)))
switch(C.a.gez(a)){case"ref":H.d(J.E(a[0],"ref"))
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
s=H.D(this.ah(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.E(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.D(this.ah(t),[null])
case"mutable":H.d(J.E(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.ah(t)
case"const":H.d(J.E(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.D(this.ah(t),[null])
s.fixed$length=Array
return s
case"map":return this.es(a)
case"sendport":return this.eu(a)
case"raw sendport":H.d(J.E(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.er(a)
case"function":H.d(J.E(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.E(a[0],"capability"))
return new H.ap(a[1])
case"dart":H.d(J.E(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.l(this.b,p)
this.ah(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.f(a))}},
ah:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.Z(a[t]))
return a},
es:function(a){var t,s,r,q,p
H.d(J.E(a[0],"map"))
t=a[1]
s=a[2]
r=P.F()
C.a.l(this.b,r)
t=J.lH(t,this.geq()).eY(0)
for(q=J.ad(s),p=0;p<t.length;++p)r.i(0,t[p],this.Z(q.h(s,p)))
return r},
eu:function(a){var t,s,r,q,p,o,n
H.d(J.E(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.ci(r)
if(o==null)return
n=new H.bg(o,s)}else n=new H.bZ(t,r,s)
C.a.l(this.b,n)
return n},
er:function(a){var t,s,r,q,p,o
H.d(J.E(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.ad(t),p=J.ad(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.Z(p.h(s,o))
return r}}
H.fx.prototype={}
H.hc.prototype={
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
H.dk.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eO.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.hf.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.j1.prototype={
$1:function(a){if(!!J.v(a).$isba)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dG.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
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
H.b8.prototype={
k:function(a){return"Closure '"+H.dm(this).trim()+"'"},
$isjd:1,
gf3:function(){return this},
$D:null}
H.h_.prototype={}
H.fM.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bn.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bn))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var t,s
t=this.c
if(t==null)s=H.aX(this.a)
else s=typeof t!=="object"?J.ao(t):H.aX(t)
return(s^H.aX(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.ft(t)}}
H.he.prototype={
k:function(a){return this.a}}
H.dV.prototype={
k:function(a){return this.a}}
H.fE.prototype={
k:function(a){return"RuntimeError: "+H.f(this.a)}}
H.hq.prototype={
k:function(a){return C.i.a3("Assertion failed: ",P.jc(this.a))}}
H.aE.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gv:function(a){return J.ao(this.a)},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aE){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ag.prototype={
gj:function(a){return this.a},
gam:function(a){return this.a===0},
gD:function(a){return new H.eR(this,[H.aJ(this,0)])},
gcJ:function(a){return H.jk(this.gD(this),new H.eN(this),H.aJ(this,0),H.aJ(this,1))},
E:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bF(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bF(s,b)}else return this.eF(b)},
eF:function(a){var t=this.d
if(t==null)return!1
return this.al(this.ax(t,this.ak(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.af(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.af(r,b)
return s==null?null:s.b}else return this.eG(b)},
eG:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.ax(t,this.ak(a))
r=this.al(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aS()
this.b=t}this.bx(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aS()
this.c=s}this.bx(s,b,c)}else{r=this.d
if(r==null){r=this.aS()
this.d=r}q=this.ak(b)
p=this.ax(r,q)
if(p==null)this.aU(r,q,[this.aT(b,c)])
else{o=this.al(p,b)
if(o>=0)p[o].b=c
else p.push(this.aT(b,c))}}},
a_:function(a,b){if(typeof b==="string")return this.bL(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bL(this.c,b)
else return this.eH(b)},
eH:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.ax(t,this.ak(a))
r=this.al(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bQ(q)
return q.b},
Y:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
aj:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a1(this))
t=t.c}},
bx:function(a,b,c){var t=this.af(a,b)
if(t==null)this.aU(a,b,this.aT(b,c))
else t.b=c},
bL:function(a,b){var t
if(a==null)return
t=this.af(a,b)
if(t==null)return
this.bQ(t)
this.bG(a,b)
return t.b},
aT:function(a,b){var t,s
t=new H.eQ(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bQ:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
ak:function(a){return J.ao(a)&0x3ffffff},
al:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.E(a[s].a,b))return s
return-1},
k:function(a){return P.mm(this)},
af:function(a,b){return a[b]},
ax:function(a,b){return a[b]},
aU:function(a,b,c){H.d(c!=null)
a[b]=c},
bG:function(a,b){delete a[b]},
bF:function(a,b){return this.af(a,b)!=null},
aS:function(){var t=Object.create(null)
this.aU(t,"<non-identifier-key>",t)
this.bG(t,"<non-identifier-key>")
return t},
$ismd:1}
H.eN.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.eQ.prototype={}
H.eR.prototype={
gj:function(a){return this.a.a},
gA:function(a){var t,s
t=this.a
s=new H.eS(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eS.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a1(t))
else{t=this.c
if(t==null){this.sbv(null)
return!1}else{this.sbv(t.a)
this.c=this.c.c
return!0}}},
sbv:function(a){this.d=a}}
H.iF.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.iG.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.t]}}}
H.iH.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.t]}}}
H.bC.prototype={
gB:function(a){return C.ae},
$isbC:1}
H.bd.prototype={$isbd:1}
H.f2.prototype={
gB:function(a){return C.af}}
H.dc.prototype={
gj:function(a){return a.length},
$isn:1,
$asn:function(){},
$isq:1,
$asq:function(){}}
H.dd.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.L(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.G(H.L(a,b))
a[b]=c}}
H.de.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.G(H.L(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.db.prototype={
gB:function(a){return C.ag},
$isc:1,
$asc:function(){return[P.M]},
$isb:1,
$asb:function(){return[P.M]},
$isev:1}
H.f3.prototype={
gB:function(a){return C.ah},
$isc:1,
$asc:function(){return[P.M]},
$isb:1,
$asb:function(){return[P.M]}}
H.f4.prototype={
gB:function(a){return C.ai},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.L(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.f5.prototype={
gB:function(a){return C.aj},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.L(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$isk9:1}
H.f6.prototype={
gB:function(a){return C.ak},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.L(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.f7.prototype={
gB:function(a){return C.ao},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.L(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$iskw:1}
H.f8.prototype={
gB:function(a){return C.ap},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.L(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$iskx:1}
H.df.prototype={
gB:function(a){return C.aq},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.L(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.f9.prototype={
gB:function(a){return C.ar},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.L(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$isky:1}
H.bD.prototype={
$asn:function(){},
$isc:1,
$asc:function(){return[P.o]},
$asq:function(){},
$isb:1,
$asb:function(){return[P.o]}}
H.bE.prototype={
$asn:function(){},
$isc:1,
$asc:function(){return[P.M]},
$asq:function(){},
$isb:1,
$asb:function(){return[P.M]}}
H.bF.prototype={
$asn:function(){},
$asc:function(){return[P.M]},
$asq:function(){},
$asb:function(){return[P.M]}}
H.bG.prototype={
$asn:function(){},
$asc:function(){return[P.o]},
$asq:function(){},
$asb:function(){return[P.o]}}
P.hs.prototype={
$1:function(a){var t,s
H.iO()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.hr.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.ht.prototype={
$0:function(){H.iO()
this.a.$0()},
$S:function(){return{func:1}}}
P.hu.prototype={
$0:function(){H.iO()
this.a.$0()},
$S:function(){return{func:1}}}
P.hy.prototype={}
P.ii.prototype={
eg:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.aD("Future already completed"))
t.aO(b)}}
P.dD.prototype={
eN:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.b6(this.d,a.a)},
eB:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bj(s,{func:1,args:[P.p,P.bL]}))return t.eU(s,a.a,a.b)
else return t.b6(s,a.a)}}
P.av.prototype={
cv:function(a,b){var t,s,r
t=$.C
if(t!==C.f){t.toString
if(b!=null)b=P.mS(b,t)}s=new P.av(0,t,null,[null])
r=b==null?1:3
this.by(new P.dD(null,s,r,a,b,[H.aJ(this,0),null]))
return s},
cu:function(a){return this.cv(a,null)},
bB:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
by:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.jw(this.c,"$isdD")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.by(a)
return}this.bB(t)}H.d(this.a>=4)
t=this.b
t.toString
P.iu(null,null,t,new P.hJ(this,a))}},
bK:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.bK(a)
return}this.bB(s)}H.d(this.a>=4)
t.a=this.ag(a)
s=this.b
s.toString
P.iu(null,null,s,new P.hN(t,this))}},
bM:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.ag(t)},
ag:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aO:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.iv(a,"$isez",t,"$asez"))if(H.iv(a,"$isav",t,null))P.kC(a,this)
else P.mI(a,this)
else{s=this.bM()
H.d(this.a<4)
this.a=4
this.c=a
P.bT(this,s)}},
au:function(a,b){var t
H.d(this.a<4)
t=this.bM()
H.d(this.a<4)
this.a=8
this.c=new P.b7(a,b)
P.bT(this,t)},
dJ:function(a){return this.au(a,null)},
$isez:1,
gaW:function(){return this.a},
gdZ:function(){return this.c}}
P.hJ.prototype={
$0:function(){P.bT(this.a,this.b)},
$S:function(){return{func:1}}}
P.hN.prototype={
$0:function(){P.bT(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hK.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.aO(a)},
$S:function(){return{func:1,args:[,]}}}
P.hL.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.au(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hM.prototype={
$0:function(){this.a.au(this.b,this.c)},
$S:function(){return{func:1}}}
P.hQ.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.cp(q.d)}catch(n){s=H.P(n)
r=H.aI(n)
if(this.c){q=this.a.a
H.d(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.d(q.a===8)
p.b=q.c}else p.b=new P.b7(s,r)
p.a=!0
return}if(!!J.v(t).$isez){if(t instanceof P.av&&t.gaW()>=4){if(t.gaW()===8){q=t
H.d(q.gaW()===8)
p=this.b
p.b=q.gdZ()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.cu(new P.hR(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hR.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.hP.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.b6(r.d,this.c)}catch(q){t=H.P(q)
s=H.aI(q)
r=this.a
r.b=new P.b7(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hO.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.eN(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eB(t)
p.a=!1}}catch(o){s=H.P(o)
r=H.aI(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.b7(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.dB.prototype={}
P.fR.prototype={
gj:function(a){var t,s
t={}
s=new P.av(0,$.C,null,[P.o])
t.a=0
this.eL(new P.fT(t),!0,new P.fU(t,s),s.gdI())
return s}}
P.fT.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.fU.prototype={
$0:function(){this.b.aO(this.a.a)},
$S:function(){return{func:1}}}
P.fS.prototype={}
P.b7.prototype={
k:function(a){return H.f(this.a)},
$isba:1}
P.iq.prototype={}
P.it.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.dl()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.i3.prototype={
eV:function(a){var t,s,r
try{if(C.f===$.C){a.$0()
return}P.kH(null,null,this,a)}catch(r){t=H.P(r)
s=H.aI(r)
P.is(null,null,this,t,s)}},
eW:function(a,b){var t,s,r
try{if(C.f===$.C){a.$1(b)
return}P.kI(null,null,this,a,b)}catch(r){t=H.P(r)
s=H.aI(r)
P.is(null,null,this,t,s)}},
eb:function(a){return new P.i5(this,a)},
aZ:function(a){return new P.i4(this,a)},
ec:function(a){return new P.i6(this,a)},
h:function(a,b){return},
cp:function(a){if($.C===C.f)return a.$0()
return P.kH(null,null,this,a)},
b6:function(a,b){if($.C===C.f)return a.$1(b)
return P.kI(null,null,this,a,b)},
eU:function(a,b,c){if($.C===C.f)return a.$2(b,c)
return P.mT(null,null,this,a,b,c)}}
P.i5.prototype={
$0:function(){return this.a.cp(this.b)},
$S:function(){return{func:1}}}
P.i4.prototype={
$0:function(){return this.a.eV(this.b)},
$S:function(){return{func:1}}}
P.i6.prototype={
$1:function(a){return this.a.eW(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dE.prototype={
ak:function(a){return H.nk(a)&0x3ffffff},
al:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hX.prototype={
gA:function(a){var t=new P.bW(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
C:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dK(b)},
dK:function(a){var t=this.d
if(t==null)return!1
return this.aw(t[this.av(a)],a)>=0},
ci:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.C(0,a)?a:null
else return this.dT(a)},
dT:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.av(a)]
r=this.aw(s,a)
if(r<0)return
return J.bl(s,r).gdM()},
l:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bC(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bC(r,b)}else return this.W(0,b)},
W:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.mM()
this.d=t}s=this.av(b)
r=t[s]
if(r==null){q=[this.aN(b)]
H.d(q!=null)
t[s]=q}else{if(this.aw(r,b)>=0)return!1
r.push(this.aN(b))}return!0},
a_:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bD(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bD(this.c,b)
else return this.dU(0,b)},
dU:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.av(b)]
r=this.aw(s,b)
if(r<0)return!1
this.bE(s.splice(r,1)[0])
return!0},
Y:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bC:function(a,b){var t
if(a[b]!=null)return!1
t=this.aN(b)
H.d(!0)
a[b]=t
return!0},
bD:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bE(t)
delete a[b]
return!0},
aN:function(a){var t,s
t=new P.hY(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bE:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
av:function(a){return J.ao(a)&0x3ffffff},
aw:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.E(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.hY.prototype={
gdM:function(){return this.a}}
P.bW.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a1(t))
else{t=this.c
if(t==null){this.sad(null)
return!1}else{this.sad(t.a)
this.c=this.c.b
return!0}}},
sad:function(a){this.d=a}}
P.hU.prototype={}
P.d6.prototype={}
P.x.prototype={
gA:function(a){return new H.d7(a,this.gj(a),0,null,[H.al(a,"x",0)])},
t:function(a,b){return this.h(a,b)},
cj:function(a,b){return new H.bA(a,b,[H.al(a,"x",0),null])},
eA:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.e(new P.a1(a))}return s},
k:function(a){return P.eJ(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.eW.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.f(a)
t.a=s+": "
t.a+=H.f(b)},
$S:function(){return{func:1,args:[,,]}}}
P.eT.prototype={
gA:function(a){return new P.hZ(this,this.c,this.d,this.b,null,this.$ti)},
gam:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t=(this.c-this.b&this.a.length-1)>>>0
if(C.b.ar(0,b)||b>=t)H.G(P.B(b,this,"index",null,t))
return this.a[(C.b.a3(this.b,b)&this.a.length-1)>>>0]},
Y:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eJ(this,"{","}")},
cn:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.eK());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
W:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bI();++this.d},
bI:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.D(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bk(s,0,q,t,r)
C.a.bk(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbO(s)},
dl:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbO(H.D(t,[b]))},
sbO:function(a){this.a=a},
$asc:null}
P.hZ.prototype={
gq:function(){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.G(new P.a1(t))
s=this.d
if(s===this.b){this.sad(null)
return!1}this.sad(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sad:function(a){this.e=a}}
P.fG.prototype={
L:function(a,b){var t
for(t=J.aL(b);t.p();)this.l(0,t.gq())},
k:function(a){return P.eJ(this,"{","}")},
$isc:1,
$asc:null}
P.fF.prototype={}
P.bI.prototype={$isc:1,$asc:null,$isb:1,$asb:null}
P.ax.prototype={}
P.I.prototype={}
P.bo.prototype={
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.bo))return!1
return this.a===b.a&&this.b===b.b},
R:function(a,b){return C.b.R(this.a,b.a)},
gv:function(a){var t=this.a
return(t^C.b.aV(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.m4(H.mu(this))
s=P.ce(H.ms(this))
r=P.ce(H.mo(this))
q=P.ce(H.mp(this))
p=P.ce(H.mr(this))
o=P.ce(H.mt(this))
n=P.m5(H.mq(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isI:1,
$asI:function(){return[P.bo]}}
P.M.prototype={$isI:1,
$asI:function(){return[P.V]}}
P.aP.prototype={
aH:function(a,b){return C.b.aH(this.a,b.gdL())},
ar:function(a,b){return C.b.ar(this.a,b.gdL())},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.aP))return!1
return this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
R:function(a,b){return C.b.R(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.e6()
s=this.a
if(s<0)return"-"+new P.aP(0-s).k(0)
r=t.$1(C.b.H(s,6e7)%60)
q=t.$1(C.b.H(s,1e6)%60)
p=new P.e5().$1(s%1e6)
return""+C.b.H(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isI:1,
$asI:function(){return[P.aP]}}
P.e5.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.t,args:[P.o]}}}
P.e6.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.t,args:[P.o]}}}
P.ba.prototype={}
P.c9.prototype={
k:function(a){return"Assertion failed"}}
P.dl.prototype={
k:function(a){return"Throw of null."}}
P.ae.prototype={
gaQ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaP:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.f(t)
q=this.gaQ()+s+r
if(!this.a)return q
p=this.gaP()
o=P.jc(this.b)
return q+p+": "+H.f(o)}}
P.dp.prototype={
gaQ:function(){return"RangeError"},
gaP:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.eF.prototype={
gaQ:function(){return"RangeError"},
gaP:function(){H.d(this.a)
if(J.la(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gj:function(a){return this.f}}
P.u.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.dz.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aD.prototype={
k:function(a){return"Bad state: "+this.a}}
P.a1.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.jc(t))+"."}}
P.dt.prototype={
k:function(a){return"Stack Overflow"},
$isba:1}
P.dZ.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hI.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.e8.prototype={
k:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.G(P.jQ(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kf(b,"expando$values")
return s==null?null:H.kf(s,t)}}
P.o.prototype={$isI:1,
$asI:function(){return[P.V]}}
P.W.prototype={
aF:function(a,b){return new H.dA(this,b,[H.al(this,"W",0)])},
gj:function(a){var t,s
H.d(!this.$isc)
t=this.gA(this)
for(s=0;t.p();)++s
return s},
ga4:function(a){var t,s
t=this.gA(this)
if(!t.p())throw H.e(H.eK())
s=t.gq()
if(t.p())throw H.e(H.ml())
return s},
t:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.lX("index"))
if(b<0)H.G(P.aY(b,0,null,"index",null))
for(t=this.gA(this),s=0;t.p();){r=t.gq()
if(b===s)return r;++s}throw H.e(P.B(b,this,"index",null,s))},
k:function(a){return P.mj(this,"(",")")}}
P.d3.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.aC.prototype={}
P.aW.prototype={
gv:function(a){return P.p.prototype.gv.call(this,this)},
k:function(a){return"null"}}
P.V.prototype={$isI:1,
$asI:function(){return[P.V]}}
P.p.prototype={constructor:P.p,$isp:1,
w:function(a,b){return this===b},
gv:function(a){return H.aX(this)},
k:function(a){return H.ft(this)},
gB:function(a){return new H.aE(H.iD(this),null)},
toString:function(){return this.k(this)}}
P.bL.prototype={}
P.t.prototype={$isI:1,
$asI:function(){return[P.t]}}
P.bM.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga6:function(){return this.a}}
W.l.prototype={}
W.dP.prototype={
k:function(a){return String(a)},
$isa:1}
W.dQ.prototype={
k:function(a){return String(a)},
$isa:1}
W.a0.prototype={$isp:1}
W.dT.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]},
$isq:1,
$asq:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.ca.prototype={}
W.aN.prototype={$isa:1,$isaN:1}
W.cb.prototype={
ba:function(a,b,c){if(c!=null)return this.dO(a,b,P.n2(c,null))
return this.dP(a,b)},
cP:function(a,b){return this.ba(a,b,null)},
dO:function(a,b,c){return a.getContext(b,c)},
dP:function(a,b){return a.getContext(b)}}
W.cc.prototype={
az:function(a,b,c){return a.addColorStop(b,c)}}
W.cd.prototype={
c5:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
ey:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
aG:function(a){return P.iy(a.getContextAttributes())}}
W.aO.prototype={$isa:1,
gj:function(a){return a.length}}
W.dX.prototype={$isa:1}
W.z.prototype={$isp:1}
W.b9.prototype={
bA:function(a,b){var t,s
t=$.$get$jZ()
s=t[b]
if(typeof s==="string")return s
s=this.e2(a,b)
t[b]=s
return s},
e2:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.m6()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.dY.prototype={}
W.e_.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.e0.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
W.cf.prototype={}
W.bp.prototype={
e6:function(a,b){return a.adoptNode(b)},
cQ:function(a,b){return a.getElementById(b)},
cm:function(a,b){return a.querySelector(b)}}
W.cg.prototype={$isa:1}
W.e1.prototype={
k:function(a){return String(a)}}
W.ch.prototype={
em:function(a,b){return a.createHTMLDocument(b)}}
W.e2.prototype={
gaE:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
W.ci.prototype={
gaE:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
W.cj.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.ga2(a))+" x "+H.f(this.ga1(a))},
w:function(a,b){var t
if(b==null)return!1
t=J.v(b)
if(!t.$isJ)return!1
return a.left===t.gb1(b)&&a.top===t.gb8(b)&&this.ga2(a)===t.ga2(b)&&this.ga1(a)===t.ga1(b)},
gv:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga2(a)
q=this.ga1(a)
return W.kF(W.b6(W.b6(W.b6(W.b6(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga1:function(a){return a.height},
gb1:function(a){return a.left},
gb8:function(a){return a.top},
ga2:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isJ:1,
$asJ:function(){}}
W.e3.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]},
$isq:1,
$asq:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]}}
W.e4.prototype={
gj:function(a){return a.length}}
W.a2.prototype={
ge9:function(a){return new W.hC(a)},
k:function(a){return a.localName},
M:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.k6
if(t==null){t=H.D([],[W.di])
s=new W.dj(t)
C.a.l(t,W.kD(null))
C.a.l(t,W.kG())
$.k6=s
d=s}else d=t
t=$.k5
if(t==null){t=new W.dH(d)
$.k5=t
c=t}else{t.a=d
c=t}}if($.aA==null){t=document
s=t.implementation
s=(s&&C.M).em(s,"")
$.aA=s
$.jb=s.createRange()
s=$.aA
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aA.head;(t&&C.N).P(t,r)}t=$.aA
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jw(s,"$isaN")}t=$.aA
if(!!this.$isaN)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aA.body;(t&&C.q).P(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.C(C.X,a.tagName)){t=$.jb;(t&&C.F).cR(t,q)
t=$.jb
p=(t&&C.F).ek(t,b)}else{q.innerHTML=b
p=$.aA.createDocumentFragment()
for(t=J.k(p);s=q.firstChild,s!=null;)t.P(p,s)}t=$.aA.body
if(q==null?t!=null:q!==t)J.lJ(q)
c.bi(p)
C.k.e6(document,p)
return p},
el:function(a,b,c){return this.M(a,b,c,null)},
d1:function(a,b,c,d){a.textContent=null
this.P(a,this.M(a,b,c,d))},
d0:function(a,b){return this.d1(a,b,null,null)},
a9:function(a,b){return a.getAttribute(b)},
dV:function(a,b){return a.removeAttribute(b)},
cZ:function(a,b,c){return a.setAttribute(b,c)},
$isa:1,
$isp:1,
$isa2:1,
$ish:1,
$isr:1,
geX:function(a){return a.tagName}}
W.iw.prototype={
$1:function(a){return!!J.v(a).$isa2},
$S:function(){return{func:1,args:[,]}}}
W.j.prototype={$isp:1,$isj:1}
W.h.prototype={
bw:function(a,b,c,d){return a.addEventListener(b,H.c2(c,1),d)},
$isp:1,
$ish:1}
W.a3.prototype={$isp:1}
W.es.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]},
$isq:1,
$asq:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.et.prototype={
gj:function(a){return a.length}}
W.ex.prototype={
gj:function(a){return a.length}}
W.a4.prototype={$isp:1}
W.cn.prototype={}
W.eB.prototype={
gj:function(a){return a.length}}
W.bx.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.r]},
$isc:1,
$asc:function(){return[W.r]},
$isq:1,
$asq:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.co.prototype={}
W.eC.prototype={
G:function(a,b){return a.send(b)}}
W.by.prototype={}
W.eG.prototype={$isa:1,$isa2:1}
W.aT.prototype={$isp:1,$isj:1,$isaT:1}
W.eU.prototype={
k:function(a){return String(a)}}
W.eZ.prototype={
gj:function(a){return a.length}}
W.f_.prototype={
f4:function(a,b,c){return a.send(b,c)},
G:function(a,b){return a.send(b)}}
W.bB.prototype={}
W.a5.prototype={$isp:1}
W.f0.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]},
$isq:1,
$asq:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.O.prototype={$isp:1,$isj:1,$isO:1}
W.fa.prototype={$isa:1}
W.S.prototype={
ga4:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.aD("No elements"))
if(s>1)throw H.e(new P.aD("More than one element"))
return t.firstChild},
L:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.k(s),p=0;p<r;++p)q.P(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.ld(t,c,C.D.h(t.childNodes,b))},
gA:function(a){var t=this.a.childNodes
return new W.cm(t,t.length,-1,null,[H.al(t,"A",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.D.h(this.a.childNodes,b)},
$asc:function(){return[W.r]},
$asd6:function(){return[W.r]},
$asb:function(){return[W.r]},
$asbI:function(){return[W.r]}}
W.r.prototype={
eQ:function(a){var t=a.parentNode
if(t!=null)J.bm(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.d5(a):t},
P:function(a,b){return a.appendChild(b)},
dW:function(a,b){return a.removeChild(b)},
dX:function(a,b,c){return a.replaceChild(b,c)},
$isp:1,
$ish:1,
$isr:1,
gb4:function(a){return a.previousSibling}}
W.dh.prototype={
b5:function(a){return a.previousNode()}}
W.bH.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.r]},
$isc:1,
$asc:function(){return[W.r]},
$isq:1,
$asq:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.fj.prototype={$isa:1}
W.fm.prototype={
gj:function(a){return a.length}}
W.a6.prototype={$isp:1,
gj:function(a){return a.length}}
W.fo.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]},
$isq:1,
$asq:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.fr.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fs.prototype={
G:function(a,b){return a.send(b)}}
W.dn.prototype={
ek:function(a,b){return a.createContextualFragment(b)},
cR:function(a,b){return a.selectNodeContents(b)}}
W.fD.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
W.dr.prototype={
G:function(a,b){return a.send(b)}}
W.bK.prototype={$isbK:1,
gj:function(a){return a.length}}
W.fH.prototype={$isa:1}
W.a7.prototype={$isp:1,$ish:1}
W.fI.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]},
$isq:1,
$asq:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.a8.prototype={$isp:1}
W.fK.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]},
$isq:1,
$asq:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.a9.prototype={$isp:1,
gj:function(a){return a.length}}
W.fP.prototype={
h:function(a,b){return this.bH(a,b)},
i:function(a,b,c){this.e1(a,b,c)},
aj:function(a,b){var t,s
for(t=0;!0;++t){s=this.dS(a,t)
if(s==null)return
b.$2(s,this.bH(a,s))}},
gD:function(a){var t=H.D([],[P.t])
this.aj(a,new W.fQ(t))
return t},
gj:function(a){return a.length},
bH:function(a,b){return a.getItem(b)},
dS:function(a,b){return a.key(b)},
e1:function(a,b,c){return a.setItem(b,c)}}
W.fQ.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:function(){return{func:1,args:[,,]}}}
W.X.prototype={$isp:1}
W.aj.prototype={}
W.du.prototype={
M:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aK(a,b,c,d)
t=W.m7("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.S(s).L(0,new W.S(t))
return s}}
W.fY.prototype={
M:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aK(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.M(t.createElement("table"),b,c,d)
t.toString
t=new W.S(t)
r=t.ga4(t)
r.toString
t=new W.S(r)
q=t.ga4(t)
s.toString
q.toString
new W.S(s).L(0,new W.S(q))
return s}}
W.fZ.prototype={
M:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aK(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.M(t.createElement("table"),b,c,d)
t.toString
t=new W.S(t)
r=t.ga4(t)
s.toString
r.toString
new W.S(s).L(0,new W.S(r))
return s}}
W.bN.prototype={$isbN:1}
W.aa.prototype={$isp:1,$ish:1}
W.Y.prototype={$isp:1,$ish:1}
W.h1.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.Y]},
$isc:1,
$asc:function(){return[W.Y]},
$isq:1,
$asq:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.h2.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]},
$isq:1,
$asq:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.h4.prototype={
gj:function(a){return a.length}}
W.ab.prototype={$isp:1}
W.b_.prototype={$isp:1,$isj:1,$isb_:1}
W.h8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]},
$isq:1,
$asq:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.h9.prototype={
gj:function(a){return a.length}}
W.bf.prototype={}
W.hb.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
W.dx.prototype={
b5:function(a){return a.previousNode()}}
W.aF.prototype={}
W.hg.prototype={
k:function(a){return String(a)},
$isa:1}
W.hi.prototype={
gj:function(a){return a.length}}
W.hl.prototype={
gj:function(a){return a.length}}
W.hm.prototype={
G:function(a,b){return a.send(b)}}
W.b1.prototype={
geo:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.u("deltaY is not supported"))},
$isp:1,
$isj:1,
$isO:1,
$isb1:1}
W.bS.prototype={
ge8:function(a){var t,s
t=P.V
s=new P.av(0,$.C,null,[t])
this.dN(a)
this.dY(a,W.kK(new W.ho(new P.ii(s,[t]))))
return s},
dY:function(a,b){return a.requestAnimationFrame(H.c2(b,1))},
dN:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.ho.prototype={
$1:function(a){this.a.eg(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hp.prototype={$isa:1}
W.b2.prototype={$isa:1}
W.hx.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
w:function(a,b){var t,s,r
if(b==null)return!1
t=J.v(b)
if(!t.$isJ)return!1
s=a.left
r=t.gb1(b)
if(s==null?r==null:s===r){s=a.top
r=t.gb8(b)
if(s==null?r==null:s===r){s=a.width
r=t.ga2(b)
if(s==null?r==null:s===r){s=a.height
t=t.ga1(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gv:function(a){var t,s,r,q
t=J.ao(a.left)
s=J.ao(a.top)
r=J.ao(a.width)
q=J.ao(a.height)
return W.kF(W.b6(W.b6(W.b6(W.b6(0,t),s),r),q))},
$isJ:1,
$asJ:function(){},
ga1:function(a){return a.height},
gb1:function(a){return a.left},
gb8:function(a){return a.top},
ga2:function(a){return a.width}}
W.dC.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[P.J]},
$isc:1,
$asc:function(){return[P.J]},
$isq:1,
$asq:function(){return[P.J]},
$isb:1,
$asb:function(){return[P.J]}}
W.hz.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.z]},
$isc:1,
$asc:function(){return[W.z]},
$isq:1,
$asq:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]}}
W.hA.prototype={$isa:1}
W.hB.prototype={
ga1:function(a){return a.height},
ga2:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]},
$isq:1,
$asq:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.hT.prototype={$isa:1}
W.dF.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.r]},
$isc:1,
$asc:function(){return[W.r]},
$isq:1,
$asq:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.ib.prototype={$isa:1}
W.ie.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]},
$isq:1,
$asq:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.ig.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.X]},
$isc:1,
$asc:function(){return[W.X]},
$isq:1,
$asq:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.io.prototype={$isa:1}
W.ip.prototype={$isa:1}
W.hv.prototype={
aj:function(a,b){var t,s,r,q,p,o
for(t=this.gD(this),s=t.length,r=this.a,q=J.k(r),p=0;p<t.length;t.length===s||(0,H.N)(t),++p){o=t[p]
b.$2(o,q.a9(r,o))}},
gD:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.D([],[P.t])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
gdQ:function(){return this.a}}
W.hC.prototype={
h:function(a,b){return J.j8(this.a,b)},
i:function(a,b,c){J.lL(this.a,b,c)},
gj:function(a){return this.gD(this).length}}
W.hF.prototype={
eL:function(a,b,c,d){return W.ac(this.a,this.b,a,!1,H.aJ(this,0))}}
W.jo.prototype={}
W.hG.prototype={
e4:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lc(r,this.c,t,!1)}},
dC:function(a,b,c,d,e){this.e4()}}
W.hH.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bV.prototype={
a7:function(a){return $.$get$kE().C(0,W.bq(a))},
X:function(a,b,c){var t,s,r
t=W.bq(a)
s=$.$get$jp()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dD:function(a){var t,s
t=$.$get$jp()
if(t.gam(t)){for(s=0;s<262;++s)t.i(0,C.W[s],W.n9())
for(s=0;s<12;++s)t.i(0,C.v[s],W.na())}}}
W.A.prototype={
gA:function(a){return new W.cm(a,this.gj(a),-1,null,[H.al(a,"A",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.dj.prototype={
a7:function(a){return C.a.bT(this.a,new W.fc(a))},
X:function(a,b,c){return C.a.bT(this.a,new W.fb(a,b,c))}}
W.fc.prototype={
$1:function(a){return a.a7(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.fb.prototype={
$1:function(a){return a.X(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.bY.prototype={
a7:function(a){return this.a.C(0,W.bq(a))},
X:function(a,b,c){var t,s
t=W.bq(a)
s=this.c
if(s.C(0,H.f(t)+"::"+b))return this.d.e7(c)
else if(s.C(0,"*::"+b))return this.d.e7(c)
else{s=this.b
if(s.C(0,H.f(t)+"::"+b))return!0
else if(s.C(0,"*::"+b))return!0
else if(s.C(0,H.f(t)+"::*"))return!0
else if(s.C(0,"*::*"))return!0}return!1},
dF:function(a,b,c,d){var t,s,r
this.a.L(0,c)
t=b.aF(0,new W.ic())
s=b.aF(0,new W.id())
this.b.L(0,t)
r=this.c
r.L(0,C.Y)
r.L(0,s)}}
W.ic.prototype={
$1:function(a){return!C.a.C(C.v,a)},
$S:function(){return{func:1,args:[,]}}}
W.id.prototype={
$1:function(a){return C.a.C(C.v,a)},
$S:function(){return{func:1,args:[,]}}}
W.ij.prototype={
X:function(a,b,c){if(this.d8(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.j8(a,"template")==="")return this.e.C(0,b)
return!1}}
W.ik.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.ih.prototype={
a7:function(a){var t=J.v(a)
if(!!t.$isbJ)return!1
t=!!t.$isH
if(t&&W.bq(a)==="foreignObject")return!1
if(t)return!0
return!1},
X:function(a,b,c){if(b==="is"||C.i.bm(b,"on"))return!1
return this.a7(a)}}
W.cm.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbJ(J.bl(this.a,t))
this.c=t
return!0}this.sbJ(null)
this.c=s
return!1},
gq:function(){return this.d},
sbJ:function(a){this.d=a}}
W.di.prototype={}
W.ia.prototype={}
W.dH.prototype={
bi:function(a){new W.il(this).$2(a,null)},
ay:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bm(t,a)}else J.bm(b,a)},
e0:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lw(a)
r=J.j8(s.gdQ(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.P(n)}p="element unprintable"
try{p=J.az(a)}catch(n){H.P(n)}try{o=W.bq(a)
this.e_(a,b,t,p,o,s,r)}catch(n){if(H.P(n) instanceof P.ae)throw n
else{this.ay(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
e_:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.ay(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a7(a)){this.ay(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.az(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.X(a,"is",g)){this.ay(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gD(f)
s=H.D(t.slice(0),[H.aJ(t,0)])
for(r=f.gD(f).length-1,t=f.a,q=J.k(t);r>=0;--r){p=s[r]
if(!this.a.X(a,J.lP(p),q.a9(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.a9(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.a9(t,p)
q.dV(t,p)}}if(!!J.v(a).$isbN)this.bi(a.content)}}
W.il.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.e0(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bm(r,a)}else J.bm(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.ly(t)}catch(q){H.P(q)
r=t
J.bm(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.r,W.r]}}}
W.br.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.bs.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.bt.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.bu.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.bv.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.bw.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.cp.prototype={}
W.cJ.prototype={$isc:1,
$asc:function(){return[P.J]},
$isb:1,
$asb:function(){return[P.J]}}
W.cv.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.cC.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.cD.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.cE.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.cF.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.cG.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.cH.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cI.prototype={$isc:1,
$asc:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]}}
W.ct.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.cu.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.cw.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cy.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cz.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.cA.prototype={$isc:1,
$asc:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]}}
W.cK.prototype={$isc:1,
$asc:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]}}
W.cL.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.cW.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.cX.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cV.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.d_.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.d0.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.d1.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.d2.prototype={$isc:1,
$asc:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]}}
W.cN.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.cP.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.cR.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cT.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.cY.prototype={$isc:1,
$asc:function(){return[P.J]},
$isb:1,
$asb:function(){return[P.J]}}
W.cZ.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
P.ix.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.t,,]}}}
P.hW.prototype={
eO:function(){return Math.random()}}
P.i2.prototype={}
P.J.prototype={$asJ:null}
P.dO.prototype={$isa:1}
P.aM.prototype={$isa:1}
P.e9.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ea.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eb.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ec.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ed.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ee.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ef.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eg.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eh.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ei.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ej.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ek.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.el.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.em.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
P.en.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eo.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
P.ep.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eq.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eu.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ew.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.af.prototype={}
P.aB.prototype={$isa:1}
P.eD.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.aq.prototype={$isp:1}
P.eP.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return this.a0(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a0:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.aq]},
$isb:1,
$asb:function(){return[P.aq]}}
P.eX.prototype={$isa:1}
P.eY.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ar.prototype={$isp:1}
P.fd.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return this.a0(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a0:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.fk.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fp.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fq.prototype={
gj:function(a){return a.length}}
P.fv.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fw.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bJ.prototype={$isa:1,$isbJ:1}
P.fV.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return this.a0(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a0:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]}}
P.H.prototype={
M:function(a,b,c,d){var t,s,r,q,p,o
t=H.D([],[W.di])
C.a.l(t,W.kD(null))
C.a.l(t,W.kG())
C.a.l(t,new W.ih())
c=new W.dH(new W.dj(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.q).el(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.S(q)
o=t.ga4(t)
for(t=J.k(p);r=o.firstChild,r!=null;)t.P(p,r)
return p},
$isa:1,
$isH:1}
P.fW.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fX.prototype={$isa:1}
P.dv.prototype={}
P.h0.prototype={$isa:1}
P.bO.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.as.prototype={$isp:1}
P.ha.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return this.a0(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a0:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.hh.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hj.prototype={$isa:1}
P.hk.prototype={$isa:1}
P.bU.prototype={$isa:1}
P.i7.prototype={$isa:1}
P.i8.prototype={$isa:1}
P.i9.prototype={$isa:1}
P.cs.prototype={$isc:1,
$asc:function(){return[P.aq]},
$isb:1,
$asb:function(){return[P.aq]}}
P.cq.prototype={$isc:1,
$asc:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]}}
P.cx.prototype={$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.cB.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.cM.prototype={$isc:1,
$asc:function(){return[P.aq]},
$isb:1,
$asb:function(){return[P.aq]}}
P.cU.prototype={$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.cQ.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.cS.prototype={$isc:1,
$asc:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]}}
P.dS.prototype={
gj:function(a){return a.length}}
P.fB.prototype={
bR:function(a,b){return a.activeTexture(b)},
bU:function(a,b,c){return a.attachShader(b,c)},
bV:function(a,b,c){return a.bindBuffer(b,c)},
bW:function(a,b,c){return a.bindFramebuffer(b,c)},
bX:function(a,b,c){return a.bindTexture(b,c)},
bY:function(a,b){return a.blendEquation(b)},
bZ:function(a,b,c){return a.blendFunc(b,c)},
c_:function(a,b,c,d){return a.bufferData(b,c,d)},
c0:function(a,b){return a.clear(b)},
c1:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c2:function(a,b){return a.compileShader(b)},
c3:function(a){return a.createBuffer()},
c4:function(a){return a.createProgram()},
c6:function(a,b){return a.createShader(b)},
c7:function(a){return a.createTexture()},
c9:function(a,b){return a.depthMask(b)},
ca:function(a,b){return a.disable(b)},
cb:function(a,b,c,d){return a.drawArrays(b,c,d)},
cc:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cd:function(a,b){return a.enable(b)},
ce:function(a,b){return a.enableVertexAttribArray(b)},
aG:function(a){return P.iy(a.getContextAttributes())},
bb:function(a){return a.getError()},
bc:function(a,b){return a.getProgramInfoLog(b)},
bd:function(a,b,c){return a.getProgramParameter(b,c)},
be:function(a,b){return a.getShaderInfoLog(b)},
bf:function(a,b,c){return a.getShaderParameter(b,c)},
bg:function(a,b,c){return a.getUniformLocation(b,c)},
cg:function(a,b){return a.linkProgram(b)},
cl:function(a,b,c){return a.pixelStorei(b,c)},
bl:function(a,b,c){return a.shaderSource(b,c)},
bn:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b7:function(a,b,c,d,e,f,g,h,i,j){this.aX(a,b,c,d,e,f,g)
return},
cr:function(a,b,c,d,e,f,g){return this.b7(a,b,c,d,e,f,g,null,null,null)},
aX:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cs:function(a,b,c,d){return a.texParameterf(b,c,d)},
ct:function(a,b,c,d){return a.texParameteri(b,c,d)},
cw:function(a,b,c){return a.uniform1f(b,c)},
cz:function(a,b,c){return a.uniform1fv(b,c)},
cA:function(a,b,c){return a.uniform1i(b,c)},
cB:function(a,b,c){return a.uniform1iv(b,c)},
cC:function(a,b,c){return a.uniform2fv(b,c)},
cD:function(a,b,c){return a.uniform3fv(b,c)},
cE:function(a,b,c){return a.uniform4fv(b,c)},
cF:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cG:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cI:function(a,b){return a.useProgram(b)},
cK:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cL:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fC.prototype={
ea:function(a,b){return a.beginTransformFeedback(b)},
ed:function(a,b){return a.bindVertexArray(b)},
en:function(a){return a.createVertexArray()},
ev:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ew:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
ex:function(a){return a.endTransformFeedback()},
f1:function(a,b,c,d){this.e3(a,b,c,d)
return},
e3:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
f2:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bR:function(a,b){return a.activeTexture(b)},
bU:function(a,b,c){return a.attachShader(b,c)},
bV:function(a,b,c){return a.bindBuffer(b,c)},
bW:function(a,b,c){return a.bindFramebuffer(b,c)},
bX:function(a,b,c){return a.bindTexture(b,c)},
bY:function(a,b){return a.blendEquation(b)},
bZ:function(a,b,c){return a.blendFunc(b,c)},
c_:function(a,b,c,d){return a.bufferData(b,c,d)},
c0:function(a,b){return a.clear(b)},
c1:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c2:function(a,b){return a.compileShader(b)},
c3:function(a){return a.createBuffer()},
c4:function(a){return a.createProgram()},
c6:function(a,b){return a.createShader(b)},
c7:function(a){return a.createTexture()},
c9:function(a,b){return a.depthMask(b)},
ca:function(a,b){return a.disable(b)},
cb:function(a,b,c,d){return a.drawArrays(b,c,d)},
cc:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cd:function(a,b){return a.enable(b)},
ce:function(a,b){return a.enableVertexAttribArray(b)},
aG:function(a){return P.iy(a.getContextAttributes())},
bb:function(a){return a.getError()},
bc:function(a,b){return a.getProgramInfoLog(b)},
bd:function(a,b,c){return a.getProgramParameter(b,c)},
be:function(a,b){return a.getShaderInfoLog(b)},
bf:function(a,b,c){return a.getShaderParameter(b,c)},
bg:function(a,b,c){return a.getUniformLocation(b,c)},
cg:function(a,b){return a.linkProgram(b)},
cl:function(a,b,c){return a.pixelStorei(b,c)},
bl:function(a,b,c){return a.shaderSource(b,c)},
bn:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b7:function(a,b,c,d,e,f,g,h,i,j){this.aX(a,b,c,d,e,f,g)
return},
cr:function(a,b,c,d,e,f,g){return this.b7(a,b,c,d,e,f,g,null,null,null)},
aX:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cs:function(a,b,c,d){return a.texParameterf(b,c,d)},
ct:function(a,b,c,d){return a.texParameteri(b,c,d)},
cw:function(a,b,c){return a.uniform1f(b,c)},
cz:function(a,b,c){return a.uniform1fv(b,c)},
cA:function(a,b,c){return a.uniform1i(b,c)},
cB:function(a,b,c){return a.uniform1iv(b,c)},
cC:function(a,b,c){return a.uniform2fv(b,c)},
cD:function(a,b,c){return a.uniform3fv(b,c)},
cE:function(a,b,c){return a.uniform4fv(b,c)},
cF:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cG:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cI:function(a,b){return a.useProgram(b)},
cK:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cL:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.im.prototype={$isa:1}
P.fL.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return P.iy(this.dR(a,b))},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
dR:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.aC]},
$isb:1,
$asb:function(){return[P.aC]}}
P.cr.prototype={$isc:1,
$asc:function(){return[P.aC]},
$isb:1,
$asb:function(){return[P.aC]}}
P.cO.prototype={$isc:1,
$asc:function(){return[P.aC]},
$isb:1,
$asb:function(){return[P.aC]}}
B.iV.prototype={
$1:function(a){$.$get$iz().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aT]}}}
B.iW.prototype={
$1:function(a){$.$get$iz().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aT]}}}
B.iX.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.n0=t
$.n1=C.b.ab(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jz=s-C.b.H(window.innerWidth,2)
$.kX=-(t-C.b.H(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.O]}}}
B.iY.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.c4=t-C.b.H(window.innerWidth,2)
$.c5=-(s-C.b.H(window.innerHeight,2))
if(a.button===2)$.$get$c3().i(0,"right",!0)
else $.$get$c3().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.O]}}}
B.iZ.prototype={
$1:function(a){if(a.button===2)$.$get$c3().i(0,"right",null)
else $.$get$c3().i(0,"left",null)},
$S:function(){return{func:1,args:[W.O]}}}
B.fe.prototype={
dm:function(a,b,c,d){var t
d.toString
W.ac(d,W.n8().$1(d),new B.ff(this),!1,W.b1)
W.ac(d,"mousemove",new B.fg(this),!1,W.O)
t=W.b_
W.ac(d,"touchstart",new B.fh(),!1,t)
W.ac(d,"touchmove",new B.fi(this),!1,t)
B.no(null)}}
B.ff.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.aw.geo(a)*r.k3
if(C.c.ab(r.fy,t)>0)r.fy=H.Z(C.c.ab(r.fy,t))}catch(q){s=H.P(q)
P.am(s)}},
$S:function(){return{func:1,args:[W.b1]}}}
B.fg.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.Z(t.go+C.b.ab($.jz,$.c4)*0.01)
s=t.id
r=$.c5
q=$.kX
t.id=H.Z(s+(r-q)*0.01)
$.c4=$.jz
$.c5=q}},
$S:function(){return{func:1,args:[W.O]}}}
B.fh.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a8(t.clientX)
C.c.a8(t.clientY)
$.c4=s
C.c.a8(t.clientX)
$.c5=C.c.a8(t.clientY)},
$S:function(){return{func:1,args:[W.b_]}}}
B.fi.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a8(t.clientX)
t=C.c.a8(t.clientY)
r=this.a
r.go=H.Z(r.go+C.b.ab(s,$.c4)*0.01)
r.id=H.Z(r.id+($.c5-t)*0.01)
$.c4=s
$.c5=t},
$S:function(){return{func:1,args:[W.b_]}}}
G.f1.prototype={}
G.dy.prototype={
K:function(a,b){var t=this.d
if(H.aw(!t.E(0,a)))H.aH("uniform "+a+" already set")
t.i(0,a,b)},
bs:function(){return this.d},
k:function(a){var t,s,r,q
t=H.D(["{"+new H.aE(H.iD(this),null).k(0)+"}["+this.a+"]"],[P.t])
for(s=this.d,r=s.gD(s),r=r.gA(r);r.p();){q=r.gq()
C.a.l(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.an(t,"\n")}}
G.dU.prototype={}
G.dW.prototype={
cf:function(a,b,c){J.lt(this.a,b)
if(c>0)J.lV(this.a,b,c)}}
G.ey.prototype={}
G.er.prototype={}
G.eA.prototype={
bq:function(a){var t=this.e
H.d(!t.E(0,a))
H.d(C.i.bm(a,"a"))
switch($.$get$T().h(0,a).a){case"vec2":t.i(0,a,H.D([],[T.w]))
break
case"vec3":t.i(0,a,H.D([],[T.m]))
break
case"vec4":t.i(0,a,H.D([],[T.aG]))
break
case"float":t.i(0,a,H.D([],[P.M]))
break
case"uvec4":t.i(0,a,H.D([],[[P.b,P.o]]))
break
default:if(H.aw(!1))H.aH("unknown type for "+a)}},
dd:function(a){var t,s,r
H.d(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.l(s,new G.er(t,t+1,t+2,t+3))},
at:function(a){var t,s,r,q
for(t=this.d,s=0;s<24;++s){r=a[s]
q=new T.m(new Float32Array(3))
q.O(r)
C.a.l(t,q)}},
da:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<24;++r){q=b[r]
p=new Float32Array(2)
o=q.a
p[1]=o[1]
p[0]=o[0]
s.l(t,new T.w(p))}},
dc:function(a,b){var t,s,r,q,p
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new T.m(new Float32Array(3))
p.O(q)
s.l(t,p)}},
di:function(){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=t.length
H.d(s>0)
s=new Array(t.length*6)
s.fixed$length=Array
r=H.D(s,[P.o])
for(s=this.b,q=0,p=0;!1;++p){o=s[p]
r[q]=o.gf5(o)
r[q+1]=o.gf6(o)
r[q+2]=o.gf7(o)
q+=3}for(s=t.length,p=0;n=t.length,p<n;n===s||(0,H.N)(t),++p){m=t[p]
l=m.a
r[q]=l
r[q+1]=m.b
k=m.c
r[q+2]=k
r[q+3]=l
r[q+4]=k
r[q+5]=m.d
q+=6}H.d(q===r.length)
return r},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gD(s),r=r.gA(r);r.p();){q=r.gq()
p=$.$get$T().h(0,q).a
C.a.l(t,H.f(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.an(t," ")}}
G.dw.prototype={}
G.bQ.prototype={}
G.d9.prototype={}
G.da.prototype={
bp:function(a,b,c){var t,s
if(C.i.aM(a,0)===105){if(H.aw(C.b.aL(b.length,c)===this.z))H.aH("ChangeAttribute "+this.z)}else{t=C.b.aL(b.length,c)
if(H.aw(t===(this.ch.length/3|0)))H.aH("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}J.lb(this.cy,a,b)
t=this.d
s=this.r.h(0,a)
J.dM(t.a,34962,s)
J.jE(t.a,34962,b,35048)},
dj:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
ac:function(a,b,c){var t,s,r,q,p,o
t=J.jB(a,0)===105
if(t&&this.z===0)this.z=C.b.aL(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.j4(r.a))
this.bp(a,b,c)
q=$.$get$T().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.aw(p.E(0,a)))H.aH("unexpected attribute "+a)
o=p.h(0,a)
J.dN(r.a,this.e)
r.cf(0,o,t?1:0)
s=s.h(0,a)
p=q.br()
J.dM(r.a,34962,s)
J.jO(r.a,o,p,5126,!1,0,0)},
at:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.j4(s.a))
this.ch=a
this.bp("aPosition",a,3)
r=$.$get$T().h(0,"aPosition")
if(r==null)throw H.e("Unknown canonical aPosition")
q=this.x
H.d(q.E(0,"aPosition"))
p=q.h(0,"aPosition")
J.dN(s.a,this.e)
s.cf(0,p,0)
t=t.h(0,"aPosition")
q=r.br()
J.dM(s.a,34962,t)
J.jO(s.a,p,q,5126,!1,0,0)},
k:function(a){var t,s,r,q,p
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=J.k(t),q=J.aL(r.gD(t));q.p();){p=q.gq()
C.a.l(s,H.f(p)+":"+H.f(J.c8(r.h(t,p))))}return"MESH["+this.a+"] "+C.a.an(s,"  ")},
saR:function(a){this.cx=a}}
G.fl.prototype={
de:function(a,b){var t=C.b.cN(a,b)
if(this.z===t)return
this.z=t
this.bt()},
bt:function(){var t,s,r,q,p,o,n
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
t.aa(0,0,1/(p*s))
t.aa(1,1,1/p)
t.aa(2,2,(q+r)/o)
t.aa(3,2,-1)
t.aa(2,3,2*r*q/o)},
bs:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.m(new Float32Array(H.i(3)))
o.u(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.O(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.v(n)
r=!!s.$isaG
k=r?s.gaE(n):1
if(!!s.$ism){j=s.gm(n)
m=s.gn(n)
l=s.gJ(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gJ(n)
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
a3.O(this.db)
a3.ck(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fz.prototype={
dv:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gD(s),s=s.gA(s);s.p();){q=s.gq()
if(!t.E(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bW(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.C(0,q))C.a.l(r,q)}return r},
dA:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gD(b),s=s.gA(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq()
switch(J.jB(n,0)){case 117:if(q.E(0,n)){m=b.h(0,n)
if(p.E(0,n))H.iT("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$T().h(0,n)
if(l==null)H.G("unknown "+n)
H.d(q.E(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.j9(r.a,k,m)
else if(!!J.v(m).$isk9)J.lT(r.a,k,m)
break
case"float":if(l.c===0)J.lR(r.a,k,m)
else if(!!J.v(m).$isev)J.lS(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.ay(m,"$isQ").a
J.jN(r.a,k,!1,j)}else if(!!J.v(m).$isev)J.jN(r.a,k,!1,m)
else if(H.aw(!1))H.aH("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.ay(m,"$isaV").a
J.jM(r.a,k,!1,j)}else if(!!J.v(m).$isev)J.jM(r.a,k,!1,m)
else if(H.aw(!1))H.aH("bad unform: "+n)
break
case"vec4":j=l.c
i=r.a
if(j===0)J.jL(i,k,H.ay(m,"$isaG").a)
else J.jL(i,k,m)
break
case"vec3":j=l.c
i=r.a
if(j===0)J.jK(i,k,H.ay(m,"$ism").a)
else J.jK(i,k,m)
break
case"vec2":j=l.c
i=r.a
if(j===0)J.jJ(i,k,H.ay(m,"$isw").a)
else J.jJ(i,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a3(33984,this.ch)
J.jC(r.a,j)
j=H.ay(m,"$isbP").b
J.c6(r.a,3553,j)
j=this.ch
J.j9(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.a3(33984,this.ch)
J.jC(r.a,j)
j=H.ay(m,"$isbP").b
J.c6(r.a,34067,j)
j=this.ch
J.j9(r.a,k,j)
this.ch=this.ch+1
break
default:H.iT("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":j=J.E(m,!0)
i=r.a
if(j)J.c7(i,2929)
else J.j5(i,2929)
break
case"cStencilFunc":H.ay(m,"$isdw")
j=m.a
i=r.a
if(j===1281)J.j5(i,2960)
else{J.c7(i,2960)
i=m.b
h=m.c
J.lM(r.a,j,i,h)}break
case"cDepthWrite":J.ln(r.a,m)
break
case"cBlendEquation":H.ay(m,"$isbQ")
j=m.a
i=r.a
if(j===1281)J.j5(i,3042)
else{J.c7(i,3042)
i=m.b
h=m.c
J.lh(r.a,i,h)
J.lg(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aP(1000*(s-new P.bo(t,!1).a)).k(0)},
dh:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.lU(t.a,this.r)
this.ch=0
this.z.Y(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.N)(b),++r){q=b[r]
this.dA(q.a,q.bs())}s=this.Q
s.Y(0)
for(p=J.aL(J.lx(a.cy));p.p();)s.l(0,p.gq())
o=this.dv()
if(o.length!==0)P.am("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(o)))
J.dN(a.d.a,a.e)
n=this.e.f.length>0
s=a.f
p=a.dj()
m=a.Q
l=a.z
if(n)J.le(t.a,s)
if(m!==-1){k=t.a
if(l>1)J.lr(k,s,p,m,0,l)
else J.lq(k,s,p,m,0)}else{m=t.a
if(l>1)J.lp(m,s,0,p,l)
else J.lo(m,s,0,p)}if(n)J.lu(t.a)},
dq:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.N)(t),++o){n=t[o]
r.i(0,n,J.jH(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.N)(t),++o){n=t[o]
r.i(0,n,J.jH(q.a,p,n))}}}
G.y.prototype={
br:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.ai.prototype={
as:function(a){var t,s,r,q,p
H.d(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.N)(a),++q){p=a[q]
H.d($.$get$T().E(0,p))
H.d(!C.a.C(s,p))
C.a.l(s,p)
r.i(0,p,this.r);++this.r}C.a.aJ(s)},
U:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.N)(a),++r){q=a[r]
if(H.aw($.$get$T().E(0,q)))H.aH("missing uniform "+q)
H.d(!C.a.C(s,q))
C.a.l(s,q)}C.a.aJ(s)},
a5:function(a){var t,s,r
H.d(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.d($.$get$T().E(0,r))
H.d(!C.a.C(t,r))
C.a.l(t,r)}C.a.aJ(t)},
dr:function(a,b){H.d(this.b==null)
this.b=this.dB(!0,a,b)},
V:function(a){return this.dr(a,null)},
dB:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.N)(t),++o){n=t[o]
m=$.$get$T().h(0,n)
C.a.l(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.N)(t),++o){k=t[o]
m=$.$get$T().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.N)(t),++o){k=t[o]
m=$.$get$T().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.N)(t),++o){k=t[o]
m=$.$get$T().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.l(q,"")
C.a.l(q,"void main(void) {")
C.a.L(q,b)
C.a.l(q,"}")
return C.a.an(q,"\n")}}
G.fJ.prototype={
b9:function(){var t,s,r
t=this.f
s=this.d.a
r=t.a
r[0]=s[2]
r[1]=s[6]
r[2]=s[10]
return t},
bh:function(){var t,s,r
t=this.r
s=this.d.a
r=t.a
r[0]=s[1]
r[1]=s[5]
r[2]=s[9]
return t},
bj:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
G.h3.prototype={
dk:function(a,b){var t=this.e
if(t!==1)J.lO(a.a,b,34046,t)
J.jI(a.a,b,10240,this.r)
J.jI(a.a,b,10241,this.f)}}
G.bP.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.eE.prototype={
ds:function(a){var t,s
t=this.d
s=this.c
J.c6(t.a,s,this.b)
J.lN(t.a,s,0,6408,6408,5121,a)}}
R.dq.prototype={
co:function(a){var t,s,r
t=this.db
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.am("size change "+H.f(s)+" "+H.f(r))
this.dx.de(s,r)
this.z=s
this.Q=r}}
R.fN.prototype={
dE:function(a,b,c,d){var t,s,r,q,p
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
p=(r&&C.y).bA(r,"float")
r.setProperty(p,"left","")
p=C.y.bA(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.t.P(t,s)}return t},
dt:function(a,b,c){var t,s,r
if(a==null)throw H.e("no element provided")
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
r=this.dE(b,c,90,30)
this.d=r
J.j2(this.a,r)
t=t.createElement("div")
this.c=t
J.j2(this.a,t)}}
R.fO.prototype={
dz:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.A.f0(s,2)+" fps"
t=this.c;(t&&C.t).d0(t,b)
r=C.b.H(30*C.A.ee(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.t).P(t,q)},
dw:function(a){return this.dz(a,"")}}
A.dg.prototype={
k:function(a){return"NODE["+this.a+"]"}}
A.aZ.prototype={}
A.fy.prototype={
dg:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.lf(p.a,36160,t)
H.d(r>0&&q>0)
J.lW(p.a,this.x,this.y,r,q)
if(s!==0)J.li(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.N)(t),++o){n=t[o]
m=n.e
C.a.l(m,new G.dy(P.F(),"transforms",!1,!0))
l=new T.Q(new Float32Array(16))
l.T()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.N)(r),++k)A.kP(p,r[k],l,a,m)
m.pop()}},
df:function(){return this.dg(null)},
dn:function(a,b,c){if(this.d==null)this.d=new G.ey(this.e,null,null,null,null)}}
A.iE.prototype={
$2:function(a,b){var t=536870911&a+J.ao(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.o,P.p]}}}
T.aV.prototype={
O:function(a){var t,s
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
k:function(a){return"[0] "+this.S(0).k(0)+"\n[1] "+this.S(1).k(0)+"\n[2] "+this.S(2).k(0)+"\n"},
h:function(a,b){return C.j.h(this.a,b)},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aV){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gv:function(a){return A.dJ(this.a)},
S:function(a){var t,s
t=new Float32Array(H.i(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.m(t)},
ej:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g===0){this.O(a)
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
T.Q.prototype={
aa:function(a,b,c){H.d(a<4)
H.d(b<4)
this.a[b*4+a]=c},
O:function(a){var t,s
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
k:function(a){return"[0] "+this.S(0).k(0)+"\n[1] "+this.S(1).k(0)+"\n[2] "+this.S(2).k(0)+"\n[3] "+this.S(3).k(0)+"\n"},
h:function(a,b){return C.j.h(this.a,b)},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.Q){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gv:function(a){return A.dJ(this.a)},
S:function(a){var t,s
t=new Float32Array(H.i(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aG(t)},
ao:function(a7,a8,a9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
t=Math.sqrt(a8.gb2())
s=a8.a
r=s[0]/t
q=s[1]/t
p=s[2]/t
t=Math.cos(a9)
o=Math.sin(a9)
n=1-t
m=r*r*n+t
l=p*o
k=r*q*n-l
j=q*o
i=r*p*n+j
h=q*r*n+l
g=q*q*n+t
o=r*o
f=q*p*n-o
e=p*r*n-j
d=p*q*n+o
c=p*p*n+t
t=this.a
o=t[0]
j=t[4]
l=t[8]
b=t[1]
a=t[5]
a0=t[9]
a1=t[2]
a2=t[6]
a3=t[10]
a4=t[3]
a5=t[7]
a6=t[11]
t[0]=o*m+j*h+l*e
t[1]=b*m+a*h+a0*e
t[2]=a1*m+a2*h+a3*e
t[3]=a4*m+a5*h+a6*e
t[4]=o*k+j*g+l*d
t[5]=b*k+a*g+a0*d
t[6]=a1*k+a2*g+a3*d
t[7]=a4*k+a5*g+a6*d
t[8]=o*i+j*f+l*c
t[9]=b*i+a*f+a0*c
t[10]=a1*i+a2*f+a3*c
t[11]=a4*i+a5*f+a6*c},
T:function(){var t=this.a
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
T.w.prototype={
k:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.w){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gv:function(a){return A.dJ(this.a)},
h:function(a,b){return C.j.h(this.a,b)},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.m.prototype={
u:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
O:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.m){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gv:function(a){return A.dJ(this.a)},
h:function(a,b){return C.j.h(this.a,b)},
gj:function(a){return Math.sqrt(this.gb2())},
gb2:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
b3:function(a){var t,s,r
t=Math.sqrt(this.gb2())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
b0:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
c8:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.m(new Float32Array(H.i(3)))
t.u(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gJ:function(a){return this.a[2]}}
T.aG.prototype={
k:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aG){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gv:function(a){return A.dJ(this.a)},
h:function(a,b){return C.j.h(this.a,b)},
gj:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gJ:function(a){return this.a[2]},
gaE:function(a){return this.a[3]}}
Q.iQ.prototype={
$1:function(a){var t,s,r
t=this.b
s=this.a
r=this.c
C.a.a_(t[C.b.aI(s.a,3)].f,r)
t=t[C.b.aI(s.a+1,3)]
H.d(!0)
C.a.l(t.f,r)
s.a=C.b.aI(s.a+1,3)},
$S:function(){return{func:1,args:[,]}}}
Q.iR.prototype={
$1:function(a){var t,s,r,q
t=this.b
s=this.a
r=this.c
C.a.a_(C.a.h(t,s.a).f,r)
q=this.d.selectedIndex
s.a=q
t=C.a.h(t,q)
H.d(!0)
C.a.l(t.f,r)},
$S:function(){return{func:1,args:[W.j]}}}
Q.iP.prototype={
$1:function(a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
t=this.a
s=t.b
t.b=a5+0
r=this.c
r.go=H.Z(r.go+0.001)
q=r.k4
if(q.h(0,37)!=null)r.go=H.Z(r.go+0.03)
else if(q.h(0,39)!=null)r.go=H.Z(r.go-0.03)
if(q.h(0,38)!=null)r.id=H.Z(r.id+0.03)
else if(q.h(0,40)!=null)r.id=H.Z(r.id-0.03)
if(q.h(0,33)!=null)r.fy=H.Z(r.fy*0.99)
else if(q.h(0,34)!=null)r.fy=H.Z(r.fy*1.01)
if(q.h(0,32)!=null){r.go=0
r.id=0}q=H.Z(C.c.ef(r.id,-1.4707963267948965,1.4707963267948965))
r.id=q
p=r.fy
o=r.go
n=p*Math.cos(q)
r.bj(n*Math.cos(o),p*Math.sin(q),n*Math.sin(o))
o=r.d
q=o.a
p=r.k2.a
q[12]=q[12]+p[0]
q[13]=q[13]+p[1]
q[14]=q[14]+p[2]
m=q[12]
l=q[13]
k=q[14]
j=new T.m(new Float32Array(H.i(3)))
j.u(0,1,0)
i=r.e
h=i.a
h[0]=q[12]
h[1]=q[13]
h[2]=q[14]
h=new Float32Array(H.i(3))
g=new T.m(h)
g.O(i)
h[0]=h[0]-p[0]
h[1]=h[1]-p[1]
h[2]=h[2]-p[2]
g.b3(0)
f=j.c8(g)
f.b3(0)
e=g.c8(f)
e.b3(0)
p=f.b0(i)
d=e.b0(i)
i=g.b0(i)
c=f.a
b=c[0]
a=e.a
a0=a[0]
a1=h[0]
a2=c[1]
a3=a[1]
a4=h[1]
c=c[2]
a=a[2]
h=h[2]
q[15]=1
q[14]=-i
q[13]=-d
q[12]=-p
q[11]=0
q[10]=h
q[9]=a
q[8]=c
q[7]=0
q[6]=a4
q[5]=a3
q[4]=a2
q[3]=0
q[2]=a1
q[1]=a0
q[0]=b
q[12]=m
q[13]=l
q[14]=k
o.ao(0,r.b9(),-r.k1)
r=this.f
o=r.d
s=-((a5-s)*0.0005)
o.ao(0,r.b9(),s)
o.ao(0,r.bh(),s)
this.e.d.i(0,"uTime",a5/1000)
this.d.df()
C.ax.ge8(window).cu(this)
this.b.dw(t.b)},
$S:function(){return{func:1,v:true,args:[P.V]}}}
J.a.prototype.d5=J.a.prototype.k
J.bz.prototype.d7=J.bz.prototype.k
P.W.prototype.d6=P.W.prototype.aF
W.a2.prototype.aK=W.a2.prototype.M
W.bY.prototype.d8=W.bY.prototype.X;(function installTearOffs(){installTearOff(H.b4.prototype,"geK",0,0,0,null,["$0"],["aC"],0)
installTearOff(H.ak.prototype,"gcS",0,0,0,null,["$1"],["I"],2)
installTearOff(H.b3.prototype,"geq",0,0,0,null,["$1"],["Z"],2)
installTearOff(P,"mX",1,0,0,null,["$1"],["mE"],1)
installTearOff(P,"mY",1,0,0,null,["$1"],["mF"],1)
installTearOff(P,"mZ",1,0,0,null,["$1"],["mG"],1)
installTearOff(P,"kO",1,0,0,null,["$0"],["mV"],0)
installTearOff(P.av.prototype,"gdI",0,0,0,null,["$2","$1"],["au","dJ"],5)
installTearOff(P,"n3",1,0,0,null,["$2"],["m2"],7)
installTearOff(W,"n8",1,0,0,null,["$1"],["m8"],8)
installTearOff(W,"n9",1,0,0,null,["$4"],["mK"],4)
installTearOff(W,"na",1,0,0,null,["$4"],["mL"],4)
installTearOff(W.dh.prototype,"gb4",0,1,0,null,["$0"],["b5"],3)
installTearOff(W.dx.prototype,"gb4",0,1,0,null,["$0"],["b5"],3)
installTearOff(R.dq.prototype,"geT",0,0,0,null,["$1"],["co"],6)
installTearOff(Q,"l4",1,0,0,null,["$0"],["ni"],0)})();(function inheritance(){inherit(P.p,null)
var t=P.p
inherit(H.jf,t)
inherit(J.a,t)
inherit(J.dR,t)
inherit(P.W,t)
inherit(H.d7,t)
inherit(P.d3,t)
inherit(H.cl,t)
inherit(H.b8,t)
inherit(H.i0,t)
inherit(H.b4,t)
inherit(H.hD,t)
inherit(H.b5,t)
inherit(H.i_,t)
inherit(H.hw,t)
inherit(H.be,t)
inherit(H.h5,t)
inherit(H.ap,t)
inherit(H.ak,t)
inherit(H.b3,t)
inherit(H.fx,t)
inherit(H.hc,t)
inherit(P.ba,t)
inherit(H.dG,t)
inherit(H.aE,t)
inherit(H.ag,t)
inherit(H.eQ,t)
inherit(H.eS,t)
inherit(P.hy,t)
inherit(P.dD,t)
inherit(P.av,t)
inherit(P.dB,t)
inherit(P.fR,t)
inherit(P.fS,t)
inherit(P.b7,t)
inherit(P.iq,t)
inherit(P.fG,t)
inherit(P.hY,t)
inherit(P.bW,t)
inherit(P.bI,t)
inherit(P.x,t)
inherit(P.hZ,t)
inherit(P.ax,t)
inherit(P.I,t)
inherit(P.bo,t)
inherit(P.V,t)
inherit(P.aP,t)
inherit(P.dt,t)
inherit(P.hI,t)
inherit(P.e8,t)
inherit(P.b,t)
inherit(P.aC,t)
inherit(P.aW,t)
inherit(P.bL,t)
inherit(P.t,t)
inherit(P.bM,t)
inherit(W.dY,t)
inherit(W.hv,t)
inherit(W.bV,t)
inherit(W.A,t)
inherit(W.dj,t)
inherit(W.bY,t)
inherit(W.ih,t)
inherit(W.cm,t)
inherit(W.di,t)
inherit(W.ia,t)
inherit(W.dH,t)
inherit(P.hW,t)
inherit(P.i2,t)
inherit(G.f1,t)
inherit(G.dW,t)
inherit(G.ey,t)
inherit(G.er,t)
inherit(G.eA,t)
inherit(G.dw,t)
inherit(G.bQ,t)
inherit(G.y,t)
inherit(G.ai,t)
inherit(G.h3,t)
inherit(G.bP,t)
inherit(R.fN,t)
inherit(T.aV,t)
inherit(T.Q,t)
inherit(T.w,t)
inherit(T.m,t)
inherit(T.aG,t)
t=J.a
inherit(J.eL,t)
inherit(J.eM,t)
inherit(J.bz,t)
inherit(J.aQ,t)
inherit(J.bb,t)
inherit(J.aR,t)
inherit(H.bC,t)
inherit(H.bd,t)
inherit(W.h,t)
inherit(W.a0,t)
inherit(W.ca,t)
inherit(W.cc,t)
inherit(W.cd,t)
inherit(W.z,t)
inherit(W.cp,t)
inherit(W.e_,t)
inherit(W.e0,t)
inherit(W.e1,t)
inherit(W.ch,t)
inherit(W.ci,t)
inherit(W.cj,t)
inherit(W.cA,t)
inherit(W.e4,t)
inherit(W.j,t)
inherit(W.cz,t)
inherit(W.a4,t)
inherit(W.eB,t)
inherit(W.cE,t)
inherit(W.eU,t)
inherit(W.eZ,t)
inherit(W.a5,t)
inherit(W.cy,t)
inherit(W.fa,t)
inherit(W.dh,t)
inherit(W.cD,t)
inherit(W.fj,t)
inherit(W.bf,t)
inherit(W.a6,t)
inherit(W.cw,t)
inherit(W.aj,t)
inherit(W.dn,t)
inherit(W.a8,t)
inherit(W.cv,t)
inherit(W.a9,t)
inherit(W.fP,t)
inherit(W.X,t)
inherit(W.cu,t)
inherit(W.h4,t)
inherit(W.ab,t)
inherit(W.ct,t)
inherit(W.h9,t)
inherit(W.dx,t)
inherit(W.hg,t)
inherit(W.hl,t)
inherit(W.hx,t)
inherit(W.cJ,t)
inherit(W.cI,t)
inherit(W.cH,t)
inherit(W.cC,t)
inherit(W.cG,t)
inherit(W.cF,t)
inherit(W.io,t)
inherit(W.ip,t)
inherit(P.aq,t)
inherit(P.cs,t)
inherit(P.ar,t)
inherit(P.cx,t)
inherit(P.fp,t)
inherit(P.fq,t)
inherit(P.fv,t)
inherit(P.cq,t)
inherit(P.as,t)
inherit(P.cB,t)
inherit(P.hk,t)
inherit(P.dS,t)
inherit(P.fB,t)
inherit(P.fC,t)
inherit(P.im,t)
inherit(P.cr,t)
t=J.bz
inherit(J.fn,t)
inherit(J.b0,t)
inherit(J.aS,t)
inherit(J.je,J.aQ)
t=J.bb
inherit(J.d5,t)
inherit(J.d4,t)
t=P.W
inherit(H.c,t)
inherit(H.d8,t)
inherit(H.dA,t)
t=H.c
inherit(H.bc,t)
inherit(H.eR,t)
inherit(H.e7,H.d8)
t=P.d3
inherit(H.eV,t)
inherit(H.hn,t)
t=H.bc
inherit(H.bA,t)
inherit(P.eT,t)
t=H.b8
inherit(H.j_,t)
inherit(H.j0,t)
inherit(H.hV,t)
inherit(H.hE,t)
inherit(H.eH,t)
inherit(H.eI,t)
inherit(H.i1,t)
inherit(H.h6,t)
inherit(H.h7,t)
inherit(H.j1,t)
inherit(H.iJ,t)
inherit(H.iK,t)
inherit(H.iL,t)
inherit(H.iM,t)
inherit(H.iN,t)
inherit(H.h_,t)
inherit(H.eN,t)
inherit(H.iF,t)
inherit(H.iG,t)
inherit(H.iH,t)
inherit(P.hs,t)
inherit(P.hr,t)
inherit(P.ht,t)
inherit(P.hu,t)
inherit(P.hJ,t)
inherit(P.hN,t)
inherit(P.hK,t)
inherit(P.hL,t)
inherit(P.hM,t)
inherit(P.hQ,t)
inherit(P.hR,t)
inherit(P.hP,t)
inherit(P.hO,t)
inherit(P.fT,t)
inherit(P.fU,t)
inherit(P.it,t)
inherit(P.i5,t)
inherit(P.i4,t)
inherit(P.i6,t)
inherit(P.eW,t)
inherit(P.e5,t)
inherit(P.e6,t)
inherit(W.iw,t)
inherit(W.fQ,t)
inherit(W.ho,t)
inherit(W.hH,t)
inherit(W.fc,t)
inherit(W.fb,t)
inherit(W.ic,t)
inherit(W.id,t)
inherit(W.ik,t)
inherit(W.il,t)
inherit(P.ix,t)
inherit(B.iV,t)
inherit(B.iW,t)
inherit(B.iX,t)
inherit(B.iY,t)
inherit(B.iZ,t)
inherit(B.ff,t)
inherit(B.fg,t)
inherit(B.fh,t)
inherit(B.fi,t)
inherit(A.iE,t)
inherit(Q.iQ,t)
inherit(Q.iR,t)
inherit(Q.iP,t)
t=H.hw
inherit(H.bg,t)
inherit(H.bZ,t)
t=P.ba
inherit(H.dk,t)
inherit(H.eO,t)
inherit(H.hf,t)
inherit(H.he,t)
inherit(H.dV,t)
inherit(H.fE,t)
inherit(P.c9,t)
inherit(P.dl,t)
inherit(P.ae,t)
inherit(P.u,t)
inherit(P.dz,t)
inherit(P.aD,t)
inherit(P.a1,t)
inherit(P.dZ,t)
t=H.h_
inherit(H.fM,t)
inherit(H.bn,t)
inherit(H.hq,P.c9)
t=H.bd
inherit(H.f2,t)
inherit(H.dc,t)
t=H.dc
inherit(H.bE,t)
inherit(H.bD,t)
inherit(H.bF,H.bE)
inherit(H.dd,H.bF)
inherit(H.bG,H.bD)
inherit(H.de,H.bG)
t=H.dd
inherit(H.db,t)
inherit(H.f3,t)
t=H.de
inherit(H.f4,t)
inherit(H.f5,t)
inherit(H.f6,t)
inherit(H.f7,t)
inherit(H.f8,t)
inherit(H.df,t)
inherit(H.f9,t)
inherit(P.ii,P.hy)
inherit(P.i3,P.iq)
inherit(P.dE,H.ag)
inherit(P.fF,P.fG)
inherit(P.hU,P.fF)
inherit(P.hX,P.hU)
inherit(P.d6,P.bI)
t=P.V
inherit(P.M,t)
inherit(P.o,t)
t=P.ae
inherit(P.dp,t)
inherit(P.eF,t)
t=W.h
inherit(W.r,t)
inherit(W.bt,t)
inherit(W.dX,t)
inherit(W.et,t)
inherit(W.by,t)
inherit(W.bB,t)
inherit(W.fs,t)
inherit(W.dr,t)
inherit(W.fH,t)
inherit(W.a7,t)
inherit(W.bs,t)
inherit(W.aa,t)
inherit(W.Y,t)
inherit(W.br,t)
inherit(W.hi,t)
inherit(W.hm,t)
inherit(W.bS,t)
inherit(W.hp,t)
inherit(W.b2,t)
inherit(W.ib,t)
t=W.r
inherit(W.a2,t)
inherit(W.aO,t)
inherit(W.bp,t)
inherit(W.cg,t)
inherit(W.hA,t)
t=W.a2
inherit(W.l,t)
inherit(P.H,t)
t=W.l
inherit(W.dP,t)
inherit(W.dQ,t)
inherit(W.aN,t)
inherit(W.cb,t)
inherit(W.cf,t)
inherit(W.ex,t)
inherit(W.cn,t)
inherit(W.eG,t)
inherit(W.bK,t)
inherit(W.du,t)
inherit(W.fY,t)
inherit(W.fZ,t)
inherit(W.bN,t)
inherit(W.hT,t)
inherit(W.bw,W.bt)
inherit(W.dT,W.bw)
inherit(W.b9,W.cp)
inherit(W.e2,W.ci)
inherit(W.d2,W.cA)
inherit(W.e3,W.d2)
inherit(W.a3,W.ca)
inherit(W.d0,W.cz)
inherit(W.es,W.d0)
inherit(W.cL,W.cE)
inherit(W.bx,W.cL)
inherit(W.co,W.bp)
inherit(W.eC,W.by)
inherit(W.aF,W.j)
t=W.aF
inherit(W.aT,t)
inherit(W.O,t)
inherit(W.b_,t)
inherit(W.f_,W.bB)
inherit(W.cV,W.cy)
inherit(W.f0,W.cV)
inherit(W.S,P.d6)
inherit(W.cW,W.cD)
inherit(W.bH,W.cW)
t=W.bf
inherit(W.fm,t)
inherit(W.fD,t)
inherit(W.hb,t)
inherit(W.cX,W.cw)
inherit(W.fo,W.cX)
inherit(W.fr,W.aj)
inherit(W.bv,W.bs)
inherit(W.fI,W.bv)
inherit(W.cT,W.cv)
inherit(W.fK,W.cT)
inherit(W.cP,W.cu)
inherit(W.h1,W.cP)
inherit(W.bu,W.br)
inherit(W.h2,W.bu)
inherit(W.d_,W.ct)
inherit(W.h8,W.d_)
inherit(W.b1,W.O)
inherit(W.cY,W.cJ)
inherit(W.dC,W.cY)
inherit(W.cK,W.cI)
inherit(W.hz,W.cK)
inherit(W.hB,W.cj)
inherit(W.cR,W.cH)
inherit(W.hS,W.cR)
inherit(W.d1,W.cC)
inherit(W.dF,W.d1)
inherit(W.cN,W.cG)
inherit(W.ie,W.cN)
inherit(W.cZ,W.cF)
inherit(W.ig,W.cZ)
inherit(W.hC,W.hv)
inherit(W.hF,P.fR)
inherit(W.jo,W.hF)
inherit(W.hG,P.fS)
inherit(W.ij,W.bY)
inherit(P.J,P.i2)
t=P.H
inherit(P.aB,t)
inherit(P.aM,t)
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
inherit(P.eu,t)
inherit(P.eX,t)
inherit(P.eY,t)
inherit(P.fk,t)
inherit(P.bJ,t)
inherit(P.fX,t)
inherit(P.hj,t)
inherit(P.bU,t)
inherit(P.i7,t)
inherit(P.i8,t)
inherit(P.i9,t)
t=P.aB
inherit(P.dO,t)
inherit(P.ew,t)
inherit(P.af,t)
inherit(P.eD,t)
inherit(P.fW,t)
inherit(P.dv,t)
inherit(P.hh,t)
inherit(P.cM,P.cs)
inherit(P.eP,P.cM)
inherit(P.cU,P.cx)
inherit(P.fd,P.cU)
inherit(P.fw,P.af)
inherit(P.cS,P.cq)
inherit(P.fV,P.cS)
t=P.dv
inherit(P.h0,t)
inherit(P.bO,t)
inherit(P.cQ,P.cB)
inherit(P.ha,P.cQ)
inherit(P.cO,P.cr)
inherit(P.fL,P.cO)
t=G.f1
inherit(G.fJ,t)
inherit(G.dy,t)
inherit(G.da,t)
inherit(G.fz,t)
inherit(A.fy,t)
inherit(A.aZ,t)
t=G.fJ
inherit(G.dU,t)
inherit(A.dg,t)
inherit(B.fe,G.dU)
t=G.dy
inherit(G.d9,t)
inherit(G.fl,t)
inherit(G.eE,G.bP)
inherit(R.dq,A.fy)
inherit(R.fO,R.fN)
mixin(H.bD,P.x)
mixin(H.bE,P.x)
mixin(H.bF,H.cl)
mixin(H.bG,H.cl)
mixin(P.bI,P.x)
mixin(W.br,P.x)
mixin(W.bs,P.x)
mixin(W.bt,P.x)
mixin(W.bu,W.A)
mixin(W.bv,W.A)
mixin(W.bw,W.A)
mixin(W.cp,W.dY)
mixin(W.cJ,P.x)
mixin(W.cv,P.x)
mixin(W.cC,P.x)
mixin(W.cD,P.x)
mixin(W.cE,P.x)
mixin(W.cF,P.x)
mixin(W.cG,P.x)
mixin(W.cH,P.x)
mixin(W.cI,P.x)
mixin(W.ct,P.x)
mixin(W.cu,P.x)
mixin(W.cw,P.x)
mixin(W.cy,P.x)
mixin(W.cz,P.x)
mixin(W.cA,P.x)
mixin(W.cK,W.A)
mixin(W.cL,W.A)
mixin(W.cW,W.A)
mixin(W.cX,W.A)
mixin(W.cV,W.A)
mixin(W.d_,W.A)
mixin(W.d0,W.A)
mixin(W.d1,W.A)
mixin(W.d2,W.A)
mixin(W.cN,W.A)
mixin(W.cP,W.A)
mixin(W.cR,W.A)
mixin(W.cT,W.A)
mixin(W.cY,W.A)
mixin(W.cZ,W.A)
mixin(P.cs,P.x)
mixin(P.cq,P.x)
mixin(P.cx,P.x)
mixin(P.cB,P.x)
mixin(P.cM,W.A)
mixin(P.cU,W.A)
mixin(P.cQ,W.A)
mixin(P.cS,W.A)
mixin(P.cr,P.x)
mixin(P.cO,W.A)})();(function constants(){C.q=W.aN.prototype
C.x=W.cb.prototype
C.o=W.cc.prototype
C.r=W.cd.prototype
C.y=W.b9.prototype
C.t=W.cf.prototype
C.M=W.ch.prototype
C.N=W.cn.prototype
C.k=W.co.prototype
C.O=J.a.prototype
C.a=J.aQ.prototype
C.A=J.d4.prototype
C.b=J.d5.prototype
C.c=J.bb.prototype
C.i=J.aR.prototype
C.V=J.aS.prototype
C.j=H.db.prototype
C.D=W.bH.prototype
C.E=J.fn.prototype
C.F=W.dn.prototype
C.K=W.du.prototype
C.w=J.b0.prototype
C.aw=W.b1.prototype
C.ax=W.bS.prototype
C.L=new P.hW()
C.f=new P.i3()
C.z=new P.aP(0)
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
C.B=function(hooks) { return hooks; }

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
C.C=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.W=H.D(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.t])
C.X=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.Y=makeConstList([])
C.u=H.D(makeConstList(["bind","if","ref","repeat","syntax"]),[P.t])
C.v=H.D(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.t])
C.Z=new G.y("vec3","vertex btangents",0)
C.d=new G.y("vec3","",0)
C.a_=new G.y("vec4","delta from light",0)
C.p=new G.y("","",0)
C.G=new G.y("vec3","vertex coordinates",0)
C.a0=new G.y("vec3","vertex binormals",0)
C.H=new G.y("vec4","for wireframe",0)
C.a1=new G.y("vec4","per vertex color",0)
C.a2=new G.y("float","for normal maps",0)
C.l=new G.y("mat4","",0)
C.a4=new G.y("mat4","",4)
C.a3=new G.y("mat4","",128)
C.e=new G.y("float","",0)
C.a5=new G.y("float","",4)
C.a6=new G.y("float","depth for shadowmaps",0)
C.h=new G.y("sampler2D","",0)
C.a7=new G.y("float","for bump maps",0)
C.a8=new G.y("vec2","texture uvs",0)
C.a9=new G.y("float","time since program start in sec",0)
C.m=new G.y("vec2","",0)
C.aa=new G.y("samplerCube","",0)
C.n=new G.y("vec4","",0)
C.ab=new G.y("vec3","vertex normals",0)
C.ac=new G.y("sampler2DShadow","",0)
C.I=new G.y("vec3","per vertex color",0)
C.J=new G.y("mat3","",0)
C.ad=new G.y("vec3","vertex tangents",0)
C.ae=H.K("ns")
C.af=H.K("nt")
C.ag=H.K("ev")
C.ah=H.K("nu")
C.ai=H.K("nv")
C.aj=H.K("k9")
C.ak=H.K("nw")
C.al=H.K("kc")
C.am=H.K("aW")
C.an=H.K("t")
C.ao=H.K("kw")
C.ap=H.K("kx")
C.aq=H.K("nx")
C.ar=H.K("ky")
C.as=H.K("ax")
C.at=H.K("M")
C.au=H.K("o")
C.av=H.K("V")})();(function staticFields(){$.kg="$cachedFunction"
$.kh="$cachedInvocation"
$.jW=null
$.jU=null
$.jq=!1
$.ju=null
$.kL=null
$.l7=null
$.iA=null
$.iI=null
$.jv=null
$.bh=null
$.c_=null
$.c0=null
$.jr=!1
$.C=C.f
$.k7=0
$.aA=null
$.jb=null
$.k6=null
$.k5=null
$.k3=null
$.k2=null
$.k1=null
$.k0=null
$.n0=0
$.n1=0
$.jz=0
$.kX=0
$.c4=0
$.c5=0
$.np=!1
$.kR=0})();(function lazyInitializers(){lazy($,"k_","$get$k_",function(){return H.kU("_$dart_dartClosure")})
lazy($,"jg","$get$jg",function(){return H.kU("_$dart_js")})
lazy($,"ka","$get$ka",function(){return H.mh()})
lazy($,"kb","$get$kb",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.k7
$.k7=t+1
t="expando$key$"+t}return new P.e8(null,t,[P.o])})
lazy($,"kl","$get$kl",function(){return H.at(H.hd({
toString:function(){return"$receiver$"}}))})
lazy($,"km","$get$km",function(){return H.at(H.hd({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kn","$get$kn",function(){return H.at(H.hd(null))})
lazy($,"ko","$get$ko",function(){return H.at(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"ks","$get$ks",function(){return H.at(H.hd(void 0))})
lazy($,"kt","$get$kt",function(){return H.at(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kq","$get$kq",function(){return H.at(H.kr(null))})
lazy($,"kp","$get$kp",function(){return H.at(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kv","$get$kv",function(){return H.at(H.kr(void 0))})
lazy($,"ku","$get$ku",function(){return H.at(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jn","$get$jn",function(){return P.mD()})
lazy($,"c1","$get$c1",function(){return[]})
lazy($,"jZ","$get$jZ",function(){return{}})
lazy($,"kE","$get$kE",function(){return P.ji(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jp","$get$jp",function(){return P.F()})
lazy($,"iz","$get$iz",function(){return P.kd(P.o,P.ax)})
lazy($,"c3","$get$c3",function(){return P.kd(P.t,P.ax)})
lazy($,"kj","$get$kj",function(){return new G.dw(1281,0,4294967295)})
lazy($,"jS","$get$jS",function(){return new G.bQ(1281,1281,1281)})
lazy($,"jR","$get$jR",function(){return new G.bQ(32774,770,769)})
lazy($,"T","$get$T",function(){return P.aU(["cBlendEquation",C.p,"cDepthWrite",C.p,"cDepthTest",C.p,"cStencilFunc",C.p,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColors",C.I,"aColorAlpha",C.a1,"aPosition",C.G,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.H,"aPointSize",C.e,"aBoneIndex",C.n,"aBoneWeight",C.n,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.n,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.I,"vTexUV",C.m,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.G,"vPositionFromLight",C.a_,"vCenter",C.H,"vDepth",C.a6,"uTransformationMatrix",C.l,"uModelMatrix",C.l,"uNormalMatrix",C.J,"uConvolutionMatrix",C.J,"uPerspectiveViewMatrix",C.l,"uLightPerspectiveViewMatrix",C.l,"uShadowMap",C.ac,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.aa,"uAnimationTable",C.h,"uTime",C.a9,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.m,"uCenter2",C.m,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.n,"uColorAlpha2",C.n,"uEyePosition",C.d,"uMaterial",C.l,"uRange",C.m,"uDirection",C.m,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.e,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2])})
lazy($,"kz","$get$kz",function(){return C.L})
lazy($,"l6","$get$l6",function(){var t=new G.ai("PointSpritesV",null,[],[],[],[],0,P.F())
t.as(["aPosition"])
t.U(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.V(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"l5","$get$l5",function(){var t=new G.ai("PointSpritesF",null,[],[],[],[],0,P.F())
t.U(["uTexture"])
t.V(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return t})
lazy($,"kB","$get$kB",function(){return[T.bR(0,0,1),T.bR(0,0,-1),T.bR(0,1,0),T.bR(0,-1,0),T.bR(1,0,0),T.bR(-1,0,0)]})
lazy($,"l1","$get$l1",function(){var t=new G.ai("Plasma1V",null,[],[],[],[],0,P.F())
t.as(["aPosition","aTexUV"])
t.U(["uPerspectiveViewMatrix","uModelMatrix"])
t.a5(["vTexUV"])
t.V(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"kZ","$get$kZ",function(){var t=new G.ai("Plasma1F",null,[],[],[],[],0,P.F())
t.a5(["vTexUV"])
t.U(["uTime"])
t.V(["    #define PI 3.1415926535897932384626433832795\n    float u_time = uTime * 5.0;\n    vec2 u_k = vec2(10.0,10.0);\n\n    float v = 0.0;\n    vec2 c = vTexUV * u_k - u_k/2.0;\n    v += sin((c.x+u_time));\n    v += sin((c.y+u_time)/2.0);\n    v += sin((c.x+c.y+u_time)/2.0);\n    c += u_k/2.0 * vec2(sin(u_time/3.0), cos(u_time/2.0));\n    v += sin(sqrt(c.x*c.x+c.y*c.y+1.0)+u_time);\n    v = v / 2.0;\n    vec3 col1 = vec3(1.0, sin(PI*v), cos(PI*v));\n    vec3 col2 = vec3(sin(PI*v), cos(PI*v), -1.0);\n    vec3 col = mix(col1, col2, sin(u_time)*.5+.5);\n    oFragColor = vec4(col*.5 + .5, 1.0);\n"])
return t})
lazy($,"l2","$get$l2",function(){var t=new G.ai("Plasma2V",null,[],[],[],[],0,P.F())
t.as(["aPosition","aTexUV"])
t.U(["uPerspectiveViewMatrix","uModelMatrix"])
t.a5(["vTexUV"])
t.V(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"l_","$get$l_",function(){var t=new G.ai("Plasma2F",null,[],[],[],[],0,P.F())
t.a5(["vTexUV"])
t.U(["uTime"])
t.V(["    float x = vTexUV.x;\n    float y = vTexUV.y;\n    float v = sin(x * cos(uTime/15.0) * 120.0) +\n              cos(y * sin(uTime/10.0) * 120.0) +\n              sin(sqrt(y * y + x * x) * 40.0);\n    oFragColor = vec4(1, v,1,1);\n  "])
return t})
lazy($,"l3","$get$l3",function(){var t=new G.ai("Plasma3V",null,[],[],[],[],0,P.F())
t.as(["aPosition","aTexUV"])
t.U(["uPerspectiveViewMatrix","uModelMatrix"])
t.a5(["vTexUV"])
t.V(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"l0","$get$l0",function(){var t=new G.ai("Plasma3F",null,[],[],[],[],0,P.F())
t.a5(["vTexUV"])
t.U(["uTime"])
t.V(["    float x = vTexUV.x*1000.0; // gl_FragCoord.x;\n    float y = vTexUV.y*1000.0; // gl_FragCoord.y;\n    float time = uTime;\n    float mov0 = x+y+cos(sin(time)*2.)*100.+sin(x/100.)*1000.;\n    float mov1 = y / 720.0 / 0.2 + time;\n    float mov2 = x / 1280.0 / 0.2;\n    float c1 = abs(sin(mov1+time)/2.+mov2/2.-mov1-mov2+time);\n    float c2 = abs(sin(c1+sin(mov0/1000.+time)+sin(y/40.+time)+sin((x+y)/100.)*3.));\n    float c3 = abs(sin(c2+cos(mov1+mov2+c2)+cos(mov2)+sin(x/1000.)));\n    oFragColor = vec4( c1,c2,c3,1.0);\n  "])
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
mangledGlobalNames:{o:"int",M:"double",V:"num",t:"String",ax:"bool",aW:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.r},{func:1,ret:P.ax,args:[W.a2,P.t,P.t,W.bV]},{func:1,v:true,args:[P.p],opt:[P.bL]},{func:1,v:true,args:[W.j]},{func:1,ret:P.o,args:[P.I,P.I]},{func:1,ret:P.t,args:[W.h]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bC,ArrayBufferView:H.bd,DataView:H.f2,Float32Array:H.db,Float64Array:H.f3,Int16Array:H.f4,Int32Array:H.f5,Int8Array:H.f6,Uint16Array:H.f7,Uint32Array:H.f8,Uint8ClampedArray:H.df,CanvasPixelArray:H.df,Uint8Array:H.f9,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLImageElement:W.l,HTMLKeygenElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMenuItemElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTextAreaElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,HTMLAnchorElement:W.dP,HTMLAreaElement:W.dQ,AudioTrack:W.a0,AudioTrackList:W.dT,Blob:W.ca,HTMLBodyElement:W.aN,HTMLCanvasElement:W.cb,CanvasGradient:W.cc,CanvasRenderingContext2D:W.cd,CDATASection:W.aO,CharacterData:W.aO,Comment:W.aO,ProcessingInstruction:W.aO,Text:W.aO,CompositorWorker:W.dX,CSSCharsetRule:W.z,CSSFontFaceRule:W.z,CSSGroupingRule:W.z,CSSImportRule:W.z,CSSKeyframeRule:W.z,MozCSSKeyframeRule:W.z,WebKitCSSKeyframeRule:W.z,CSSKeyframesRule:W.z,MozCSSKeyframesRule:W.z,WebKitCSSKeyframesRule:W.z,CSSMediaRule:W.z,CSSNamespaceRule:W.z,CSSPageRule:W.z,CSSRule:W.z,CSSStyleRule:W.z,CSSSupportsRule:W.z,CSSViewportRule:W.z,CSSStyleDeclaration:W.b9,MSStyleCSSProperties:W.b9,CSS2Properties:W.b9,DataTransferItemList:W.e_,DeviceAcceleration:W.e0,HTMLDivElement:W.cf,XMLDocument:W.bp,Document:W.bp,DocumentFragment:W.cg,ShadowRoot:W.cg,DOMException:W.e1,DOMImplementation:W.ch,DOMPoint:W.e2,DOMPointReadOnly:W.ci,DOMRectReadOnly:W.cj,DOMStringList:W.e3,DOMTokenList:W.e4,Element:W.a2,AnimationEvent:W.j,AnimationPlayerEvent:W.j,ApplicationCacheErrorEvent:W.j,AutocompleteErrorEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceLightEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,GamepadEvent:W.j,GeofencingEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RelatedEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCIceCandidateEvent:W.j,RTCPeerConnectionIceEvent:W.j,SecurityPolicyViolationEvent:W.j,ServicePortConnectEvent:W.j,ServiceWorkerMessageEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.a3,FileList:W.es,FileWriter:W.et,HTMLFormElement:W.ex,Gamepad:W.a4,HTMLHeadElement:W.cn,History:W.eB,HTMLCollection:W.bx,HTMLFormControlsCollection:W.bx,HTMLOptionsCollection:W.bx,HTMLDocument:W.co,XMLHttpRequest:W.eC,XMLHttpRequestUpload:W.by,XMLHttpRequestEventTarget:W.by,HTMLInputElement:W.eG,KeyboardEvent:W.aT,Location:W.eU,MediaList:W.eZ,MIDIOutput:W.f_,MIDIInput:W.bB,MIDIPort:W.bB,MimeType:W.a5,MimeTypeArray:W.f0,PointerEvent:W.O,MouseEvent:W.O,DragEvent:W.O,Navigator:W.fa,Attr:W.r,Node:W.r,NodeIterator:W.dh,NodeList:W.bH,RadioNodeList:W.bH,Path2D:W.fj,Perspective:W.fm,Plugin:W.a6,PluginArray:W.fo,PositionValue:W.fr,PresentationConnection:W.fs,Range:W.dn,Rotation:W.fD,RTCDataChannel:W.dr,DataChannel:W.dr,HTMLSelectElement:W.bK,SharedWorker:W.fH,SourceBuffer:W.a7,SourceBufferList:W.fI,SpeechGrammar:W.a8,SpeechGrammarList:W.fK,SpeechRecognitionResult:W.a9,Storage:W.fP,CSSStyleSheet:W.X,StyleSheet:W.X,CalcLength:W.aj,KeywordValue:W.aj,LengthValue:W.aj,NumberValue:W.aj,SimpleLength:W.aj,TransformValue:W.aj,StyleValue:W.aj,HTMLTableElement:W.du,HTMLTableRowElement:W.fY,HTMLTableSectionElement:W.fZ,HTMLTemplateElement:W.bN,TextTrack:W.aa,TextTrackCue:W.Y,VTTCue:W.Y,TextTrackCueList:W.h1,TextTrackList:W.h2,TimeRanges:W.h4,Touch:W.ab,TouchEvent:W.b_,TouchList:W.h8,TrackDefaultList:W.h9,Matrix:W.bf,Skew:W.bf,TransformComponent:W.bf,Translation:W.hb,TreeWalker:W.dx,CompositionEvent:W.aF,FocusEvent:W.aF,TextEvent:W.aF,SVGZoomEvent:W.aF,UIEvent:W.aF,URL:W.hg,VideoTrackList:W.hi,VTTRegionList:W.hl,WebSocket:W.hm,WheelEvent:W.b1,Window:W.bS,DOMWindow:W.bS,Worker:W.hp,CompositorWorkerGlobalScope:W.b2,DedicatedWorkerGlobalScope:W.b2,ServiceWorkerGlobalScope:W.b2,SharedWorkerGlobalScope:W.b2,WorkerGlobalScope:W.b2,ClientRect:W.hx,ClientRectList:W.dC,DOMRectList:W.dC,CSSRuleList:W.hz,DocumentType:W.hA,DOMRect:W.hB,GamepadList:W.hS,HTMLFrameSetElement:W.hT,NamedNodeMap:W.dF,MozNamedAttrMap:W.dF,ServiceWorker:W.ib,SpeechRecognitionResultList:W.ie,StyleSheetList:W.ig,WorkerLocation:W.io,WorkerNavigator:W.ip,SVGAElement:P.dO,SVGAnimateElement:P.aM,SVGAnimateMotionElement:P.aM,SVGAnimateTransformElement:P.aM,SVGAnimationElement:P.aM,SVGSetElement:P.aM,SVGFEBlendElement:P.e9,SVGFEColorMatrixElement:P.ea,SVGFEComponentTransferElement:P.eb,SVGFECompositeElement:P.ec,SVGFEConvolveMatrixElement:P.ed,SVGFEDiffuseLightingElement:P.ee,SVGFEDisplacementMapElement:P.ef,SVGFEFloodElement:P.eg,SVGFEGaussianBlurElement:P.eh,SVGFEImageElement:P.ei,SVGFEMergeElement:P.ej,SVGFEMorphologyElement:P.ek,SVGFEOffsetElement:P.el,SVGFEPointLightElement:P.em,SVGFESpecularLightingElement:P.en,SVGFESpotLightElement:P.eo,SVGFETileElement:P.ep,SVGFETurbulenceElement:P.eq,SVGFilterElement:P.eu,SVGForeignObjectElement:P.ew,SVGCircleElement:P.af,SVGEllipseElement:P.af,SVGLineElement:P.af,SVGPathElement:P.af,SVGPolygonElement:P.af,SVGPolylineElement:P.af,SVGGeometryElement:P.af,SVGClipPathElement:P.aB,SVGDefsElement:P.aB,SVGGElement:P.aB,SVGSwitchElement:P.aB,SVGGraphicsElement:P.aB,SVGImageElement:P.eD,SVGLength:P.aq,SVGLengthList:P.eP,SVGMarkerElement:P.eX,SVGMaskElement:P.eY,SVGNumber:P.ar,SVGNumberList:P.fd,SVGPatternElement:P.fk,SVGPoint:P.fp,SVGPointList:P.fq,SVGRect:P.fv,SVGRectElement:P.fw,SVGScriptElement:P.bJ,SVGStringList:P.fV,SVGDescElement:P.H,SVGDiscardElement:P.H,SVGFEDistantLightElement:P.H,SVGFEFuncAElement:P.H,SVGFEFuncBElement:P.H,SVGFEFuncGElement:P.H,SVGFEFuncRElement:P.H,SVGFEMergeNodeElement:P.H,SVGMetadataElement:P.H,SVGStopElement:P.H,SVGStyleElement:P.H,SVGTitleElement:P.H,SVGComponentTransferFunctionElement:P.H,SVGElement:P.H,SVGSVGElement:P.fW,SVGSymbolElement:P.fX,SVGTextContentElement:P.dv,SVGTextPathElement:P.h0,SVGTSpanElement:P.bO,SVGTextElement:P.bO,SVGTextPositioningElement:P.bO,SVGTransform:P.as,SVGTransformList:P.ha,SVGUseElement:P.hh,SVGViewElement:P.hj,SVGViewSpec:P.hk,SVGLinearGradientElement:P.bU,SVGRadialGradientElement:P.bU,SVGGradientElement:P.bU,SVGCursorElement:P.i7,SVGFEDropShadowElement:P.i8,SVGMPathElement:P.i9,AudioBuffer:P.dS,WebGLRenderingContext:P.fB,WebGL2RenderingContext:P.fC,WebGL2RenderingContextBase:P.im,SQLResultSetRowList:P.fL})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.dc.$nativeSuperclassTag="ArrayBufferView"
H.bE.$nativeSuperclassTag="ArrayBufferView"
H.bF.$nativeSuperclassTag="ArrayBufferView"
H.dd.$nativeSuperclassTag="ArrayBufferView"
H.bD.$nativeSuperclassTag="ArrayBufferView"
H.bG.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
W.bt.$nativeSuperclassTag="EventTarget"
W.bw.$nativeSuperclassTag="EventTarget"
W.bs.$nativeSuperclassTag="EventTarget"
W.bv.$nativeSuperclassTag="EventTarget"
W.br.$nativeSuperclassTag="EventTarget"
W.bu.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.l8(Q.l4(),b)},[])
else (function(b){H.l8(Q.l4(),b)})([])})})()