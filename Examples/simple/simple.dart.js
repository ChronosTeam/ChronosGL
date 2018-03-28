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
a[c]=function(){a[c]=function(){H.m5(b)}
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
return d?function(e){if(t===null)t=H.iw(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.iw(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.iw(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={ia:function ia(a){this.a=a},
ih:function(a,b,c,d){if(!!a.$isj)return new H.dz(a,b,[c,d])
return new H.bV(a,b,[c,d])},
i8:function(){return new P.b9("No element")},
l0:function(){return new P.b9("Too few elements")},
lh:function(a,b){H.c9(a,0,J.aX(a)-1,b)},
c9:function(a,b,c,d){if(c-b<=32)H.lg(a,b,c,d)
else H.lf(a,b,c,d)},
lg:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.O(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.Y(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
lf:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.J(t+1,6)
r=a3+s
q=a4-s
p=C.b.J(a3+a4,2)
o=p-s
n=p+s
t=J.O(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.Y(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.Y(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.Y(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.Y(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.Y(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.Y(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.Y(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.Y(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.Y(a5.$2(j,i),0)){h=i
i=j
j=h}t.i(a2,r,m)
t.i(a2,p,k)
t.i(a2,q,i)
t.i(a2,o,t.h(a2,a3))
t.i(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.A(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.c9(a2,a3,g-2,a5)
H.c9(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.A(a5.$2(t.h(a2,g),l),0);)++g
for(;J.A(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.c9(a2,g,f,a5)}else H.c9(a2,g,f,a5)},
j:function j(){},
aI:function aI(){},
bU:function bU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bV:function bV(a,b,c){this.a=a
this.b=b
this.$ti=c},
dz:function dz(a,b,c){this.a=a
this.b=b
this.$ti=c},
eo:function eo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bW:function bW(a,b,c){this.a=a
this.b=b
this.$ti=c},
aG:function aG(){},
d2:function(a,b){var t=a.a5(b)
if(!u.globalState.d.cy)u.globalState.f.aa()
return t},
hw:function(){++u.globalState.f.b},
hM:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
k1:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.q(s).$isi)throw H.c(P.iS("Arguments to main must be a List: "+H.e(s)))
u.globalState=new H.hc(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$j5()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.fP(P.ig(null,H.az),0)
q=P.u
s.sdT(new H.a0(0,null,null,null,null,null,0,[q,H.aM]))
s.sdW(new H.a0(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.hb()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.kW,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.lu)}if(u.globalState.x)return
o=H.jD()
u.globalState.e=o
u.globalState.z.i(0,o.a,o)
u.globalState.d=o
if(H.aS(a,{func:1,args:[P.H]}))o.a5(new H.hW(t,a))
else if(H.aS(a,{func:1,args:[P.H,P.H]}))o.a5(new H.hX(t,a))
else o.a5(a)
u.globalState.f.aa()},
lu:function(a){var t=P.ar(["command","print","msg",a])
return new H.V(!0,P.aN(null,P.u)).H(t)},
jD:function(){var t,s
t=u.globalState.a++
s=P.u
t=new H.aM(t,new H.a0(0,null,null,null,null,null,0,[s,H.c7]),P.bT(null,null,null,s),u.createNewIsolate(),new H.c7(0,null,!1),new H.ah(H.k_()),new H.ah(H.k_()),!1,!1,[],P.bT(null,null,null,null),null,null,!1,!0,P.bT(null,null,null,null))
t.cY()
return t},
kY:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.kZ()
return},
kZ:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.p("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.p('Cannot extract URI from "'+t+'"'))},
kW:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.ay(!0,[]).O(b.data)
s=J.O(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.lU(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.ay(!0,[]).O(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.ay(!0,[]).O(s.h(t,"replyTo"))
k=H.jD()
u.globalState.f.a.M(0,new H.az(k,new H.e8(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.aa()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.ku(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.aa()
break
case"close":u.globalState.ch.a9(0,$.$get$j6().h(0,a))
a.terminate()
u.globalState.f.aa()
break
case"log":H.kV(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.ar(["command","print","msg",t])
j=new H.V(!0,P.aN(null,P.u)).H(j)
s.toString
self.postMessage(j)}else P.X(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
kV:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.ar(["command","log","msg",a])
r=new H.V(!0,P.aN(null,P.u)).H(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.a8(q)
t=H.af(q)
s=P.bM(t)
throw H.c(s)}},
kX:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.je=$.je+("_"+s)
$.jf=$.jf+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.E(0,["spawned",new H.aO(s,r),q,t.r])
r=new H.e9(t,d,a,c,b)
if(e){t.bx(q,q)
u.globalState.f.a.M(0,new H.az(t,r,"start isolate"))}else r.$0()},
lj:function(a,b){var t=new H.fn(!0,!1,null,0)
t.cU(a,b)
return t},
lv:function(a){return new H.ay(!0,[]).O(new H.V(!1,P.aN(null,P.u)).H(a))},
hW:function hW(a,b){this.a=a
this.b=b},
hX:function hX(a,b){this.a=a
this.b=b},
hc:function hc(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
aM:function aM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
h5:function h5(a,b){this.a=a
this.b=b},
fP:function fP(a,b){this.a=a
this.b=b},
fQ:function fQ(a){this.a=a},
az:function az(a,b,c){this.a=a
this.b=b
this.c=c},
hb:function hb(){},
e8:function e8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
e9:function e9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fL:function fL(){},
aO:function aO(a,b){this.b=a
this.a=b},
hd:function hd(a,b){this.a=a
this.b=b},
bp:function bp(a,b,c){this.b=a
this.c=b
this.a=c},
c7:function c7(a,b,c){this.a=a
this.b=b
this.c=c},
fn:function fn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fo:function fo(a,b){this.a=a
this.b=b},
fp:function fp(a,b){this.a=a
this.b=b},
ah:function ah(a){this.a=a},
V:function V(a,b){this.a=a
this.b=b},
ay:function ay(a,b){this.a=a
this.b=b},
lQ:function(a){return u.types[a]},
lW:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.q(a).$iso},
e:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bz(a)
if(typeof t!=="string")throw H.c(H.K(a))
return t},
lc:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.an(t)
s=t[0]
r=t[1]
return new H.eV(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
as:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
b7:function(a){var t,s,r,q,p,o,n,m,l
t=J.q(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.C||!!J.q(a).$isav){p=C.u(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.ax(q,0)===36)q=C.i.cE(q,1)
l=H.d3(H.hz(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
I:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
la:function(a){return a.b?H.I(a).getUTCFullYear()+0:H.I(a).getFullYear()+0},
l8:function(a){return a.b?H.I(a).getUTCMonth()+1:H.I(a).getMonth()+1},
l4:function(a){return a.b?H.I(a).getUTCDate()+0:H.I(a).getDate()+0},
l5:function(a){return a.b?H.I(a).getUTCHours()+0:H.I(a).getHours()+0},
l7:function(a){return a.b?H.I(a).getUTCMinutes()+0:H.I(a).getMinutes()+0},
l9:function(a){return a.b?H.I(a).getUTCSeconds()+0:H.I(a).getSeconds()+0},
l6:function(a){return a.b?H.I(a).getUTCMilliseconds()+0:H.I(a).getMilliseconds()+0},
jd:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.K(a))
return a[b]},
aR:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a9(!0,b,"index",null)
t=J.aX(a)
if(b<0||C.b.cp(b,t))return P.y(b,a,"index",null,t)
return P.eS(b,"index",null)},
K:function(a){return new P.a9(!0,a,null,null)},
c:function(a){var t
if(a==null)a=new P.c4()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.k2})
t.name=""}else t.toString=H.k2
return t},
k2:function(){return J.bz(this.dartException)},
F:function(a){throw H.c(a)},
P:function(a){throw H.c(P.ak(a))},
a3:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.ft(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
fu:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
jr:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jc:function(a,b){return new H.eD(a,b==null?null:b.method)},
ic:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.ee(a,s,t?null:b.receiver)},
a8:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.hY(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aJ(r,16)&8191)===10)switch(q){case 438:return t.$1(H.ic(H.e(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.jc(H.e(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$jl()
o=$.$get$jm()
n=$.$get$jn()
m=$.$get$jo()
l=$.$get$js()
k=$.$get$jt()
j=$.$get$jq()
$.$get$jp()
i=$.$get$jv()
h=$.$get$ju()
g=p.K(s)
if(g!=null)return t.$1(H.ic(s,g))
else{g=o.K(s)
if(g!=null){g.method="call"
return t.$1(H.ic(s,g))}else{g=n.K(s)
if(g==null){g=m.K(s)
if(g==null){g=l.K(s)
if(g==null){g=k.K(s)
if(g==null){g=j.K(s)
if(g==null){g=m.K(s)
if(g==null){g=i.K(s)
if(g==null){g=h.K(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.jc(s,g))}}return t.$1(new H.fy(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cc()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.a9(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cc()
return a},
af:function(a){var t
if(a==null)return new H.cJ(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.cJ(a,null)},
m_:function(a){if(a==null||typeof a!='object')return J.aW(a)
else return H.as(a)},
lN:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.i(0,p,a[q])}return b},
lV:function(a,b,c,d,e,f,g){switch(c){case 0:return H.d2(b,new H.hH(a))
case 1:return H.d2(b,new H.hI(a,d))
case 2:return H.d2(b,new H.hJ(a,d,e))
case 3:return H.d2(b,new H.hK(a,d,e,f))
case 4:return H.d2(b,new H.hL(a,d,e,f,g))}throw H.c(P.bM("Unsupported number of arguments for wrapped closure"))},
bt:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.lV)
a.$identity=t
return t},
kK:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.q(c).$isi){t.$reflectionInfo=c
r=H.lc(t).r}else r=c
q=d?Object.create(new H.f9().constructor.prototype):Object.create(new H.aY(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.j0(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.lQ,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.iY:H.i4
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.j0(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
kH:function(a,b,c,d){var t=H.i4
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
j0:function(a,b,c){var t,s,r,q
if(c)return H.kJ(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.kH(s,b==null?r!=null:b!==r,t,b)
return q},
kI:function(a,b,c,d){var t,s
t=H.i4
s=H.iY
switch(b?-1:a){case 0:throw H.c(H.ld("Intercepted function with no arguments."))
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
t=$.iZ
if(t==null){t=H.iW("self")
$.iZ=t}t=$.iX
if(t==null){t=H.iW("receiver")
$.iX=t}s=b.$stubName
r=b.length
q=a[s]
t=H.kI(r,b==null?q!=null:b!==q,s,b)
return t},
iw:function(a,b,c,d,e,f){var t,s
t=J.an(b)
s=!!J.q(c).$isi?J.an(c):c
return H.kK(a,t,s,!!d,e,f)},
i4:function(a){return a.a},
iY:function(a){return a.c},
iW:function(a){var t,s,r,q,p
t=new H.aY("self","target","receiver","name")
s=J.an(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
ml:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a4(a,"String"))},
mg:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a4(a,"double"))},
mk:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a4(a,"num"))},
lH:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a4(a,"bool"))},
lU:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a4(a,"int"))},
m1:function(a,b){throw H.c(H.a4(a,b.substring(3)))},
m0:function(a,b){var t=J.O(b)
throw H.c(H.j_(a,t.b4(b,3,t.gj(b))))},
jT:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.q(a)[b])return a
H.m1(a,b)},
ag:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.q(a)[b]
else t=!0
if(t)return a
H.m0(a,b)},
mj:function(a){if(a==null)return a
if(!!J.q(a).$isi)return a
throw H.c(H.a4(a,"List"))},
ix:function(a){var t=J.q(a)
return"$S" in t?t.$S():null},
aS:function(a,b){var t,s
if(a==null)return!1
t=H.ix(a)
if(t==null)s=!1
else s=H.jU(t,b)
return s},
mh:function(a,b){var t,s
if(a==null)return a
if($.it)return a
$.it=!0
try{if(H.aS(a,b))return a
t=H.hQ(b,null)
s=H.a4(a,t)
throw H.c(s)}finally{$.it=!1}},
a4:function(a,b){return new H.fv("TypeError: "+H.e(P.bL(a))+": type '"+H.jI(a)+"' is not a subtype of type '"+b+"'")},
j_:function(a,b){return new H.de("CastError: "+H.e(P.bL(a))+": type '"+H.jI(a)+"' is not a subtype of type '"+b+"'")},
jI:function(a){var t
if(a instanceof H.aj){t=H.ix(a)
if(t!=null)return H.hQ(t,null)
return"Closure"}return H.b7(a)},
a7:function(a){if(!0===a)return!1
if(!!J.q(a).$isi7)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.a4(a,"bool"))},
ad:function(a){throw H.c(new H.fG(a))},
b:function(a){if(H.a7(a))throw H.c(P.kG(null))},
m5:function(a){throw H.c(new P.dq(a))},
ld:function(a){return new H.eZ(a)},
k_:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
jR:function(a){return u.getIsolateTag(a)},
D:function(a){return new H.ab(a,null)},
E:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
hz:function(a){if(a==null)return
return a.$ti},
jS:function(a,b){return H.iE(a["$as"+H.e(b)],H.hz(a))},
ae:function(a,b,c){var t,s
t=H.jS(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aT:function(a,b){var t,s
t=H.hz(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
hQ:function(a,b){var t=H.aU(a,b)
return t},
aU:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.d3(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.e(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aU(t,b)
return H.lw(a,b)}return"unknown-reified-type"},
lw:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aU(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aU(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aU(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.lM(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aU(l[j],b)+(" "+H.e(j))}q+="}"}return"("+q+") => "+t},
d3:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.ba("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aU(o,c)}return p?"":"<"+s.k(0)+">"},
hA:function(a){var t,s,r
if(a instanceof H.aj){t=H.ix(a)
if(t!=null)return H.hQ(t,null)}s=J.q(a).constructor.name
if(a==null)return s
r=H.d3(a.$ti,0,null)
return s+r},
iE:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.iB(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.iB(a,null,b)
return b},
hr:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.hz(a)
s=J.q(a)
if(s[b]==null)return!1
return H.jM(H.iE(s[d],t),c)},
d4:function(a,b,c,d){var t,s
if(a==null)return a
t=H.hr(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.d3(c,0,null)
throw H.c(H.j_(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
md:function(a,b,c,d){var t,s
if(a==null)return a
t=H.hr(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.d3(c,0,null)
throw H.c(H.a4(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
jM:function(a,b){var t,s,r,q,p
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
if(!H.N(r,b[p]))return!1}return!0},
me:function(a,b,c){return H.iB(a,b,H.jS(b,c))},
N:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="H")return!0
if('func' in b)return H.jU(a,b)
if('func' in a)return b.name==="i7"||b.name==="B"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.hQ(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.jM(H.iE(o,t),r)},
jL:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.N(o,n)||H.N(n,o)))return!1}return!0},
lD:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.an(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.N(p,o)||H.N(o,p)))return!1}return!0},
jU:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.N(t,s)||H.N(s,t)))return!1}r=a.args
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
if(n===m){if(!H.jL(r,q,!1))return!1
if(!H.jL(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.N(g,f)||H.N(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.N(g,f)||H.N(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.N(g,f)||H.N(f,g)))return!1}}return H.lD(a.named,b.named)},
iB:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
mm:function(a){var t=$.iz
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
mi:function(a){return H.as(a)},
mf:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lX:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.B))
t=$.iz.$1(a)
s=$.hv[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.hG[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.jK.$2(a,t)
if(t!=null){s=$.hv[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.hG[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.hO(r)
$.hv[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.hG[t]=r
return r}if(p==="-"){o=H.hO(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.jW(a,r)
if(p==="*")throw H.c(P.jz(t))
if(u.leafTags[t]===true){o=H.hO(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.jW(a,r)},
jW:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.iC(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
hO:function(a){return J.iC(a,!1,null,!!a.$iso)},
lZ:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.hO(t)
else return J.iC(t,c,null,null)},
lS:function(){if(!0===$.iA)return
$.iA=!0
H.lT()},
lT:function(){var t,s,r,q,p,o,n,m
$.hv=Object.create(null)
$.hG=Object.create(null)
H.lR()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.jZ.$1(p)
if(o!=null){n=H.lZ(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
lR:function(){var t,s,r,q,p,o,n
t=C.H()
t=H.aQ(C.E,H.aQ(C.J,H.aQ(C.t,H.aQ(C.t,H.aQ(C.I,H.aQ(C.F,H.aQ(C.G(C.u),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.iz=new H.hD(p)
$.jK=new H.hE(o)
$.jZ=new H.hF(n)},
aQ:function(a,b){return a(b)||b},
eV:function eV(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
ft:function ft(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eD:function eD(a,b){this.a=a
this.b=b},
ee:function ee(a,b,c){this.a=a
this.b=b
this.c=c},
fy:function fy(a){this.a=a},
hY:function hY(a){this.a=a},
cJ:function cJ(a,b){this.a=a
this.b=b},
hH:function hH(a){this.a=a},
hI:function hI(a,b){this.a=a
this.b=b},
hJ:function hJ(a,b,c){this.a=a
this.b=b
this.c=c},
hK:function hK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hL:function hL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
aj:function aj(){},
fi:function fi(){},
f9:function f9(){},
aY:function aY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fv:function fv(a){this.a=a},
de:function de(a){this.a=a},
eZ:function eZ(a){this.a=a},
fG:function fG(a){this.a=a},
ab:function ab(a,b){this.a=a
this.b=b},
a0:function a0(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
ed:function ed(a){this.a=a},
eg:function eg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eh:function eh(a,b){this.a=a
this.$ti=b},
ei:function ei(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hD:function hD(a){this.a=a},
hE:function hE(a){this.a=a},
hF:function hF(a){this.a=a},
hn:function(a){var t,s,r
if(!!J.q(a).$isn)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
a6:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.aR(b,a))},
b6:function b6(){},
aK:function aK(){},
ev:function ev(){},
c_:function c_(){},
c0:function c0(){},
c1:function c1(){},
bZ:function bZ(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
c2:function c2(){},
eC:function eC(){},
bh:function bh(){},
bi:function bi(){},
bj:function bj(){},
bk:function bk(){},
lM:function(a){return J.an(H.E(a?Object.keys(a):[],[null]))},
hP:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bR.prototype
return J.ec.prototype}if(typeof a=="string")return J.ao.prototype
if(a==null)return J.bS.prototype
if(typeof a=="boolean")return J.eb.prototype
if(a.constructor==Array)return J.am.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ap.prototype
return a}if(a instanceof P.B)return a
return J.hy(a)},
iC:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hy:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.iA==null){H.lS()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.jz("Return interceptor for "+H.e(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$ib()]
if(p!=null)return p
p=H.lX(a)
if(p!=null)return p
if(typeof a=="function")return C.K
s=Object.getPrototypeOf(a)
if(s==null)return C.v
if(s===Object.prototype)return C.v
if(typeof q=="function"){Object.defineProperty(q,$.$get$ib(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
an:function(a){a.fixed$length=Array
return a},
O:function(a){if(typeof a=="string")return J.ao.prototype
if(a==null)return a
if(a.constructor==Array)return J.am.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ap.prototype
return a}if(a instanceof P.B)return a
return J.hy(a)},
hx:function(a){if(a==null)return a
if(a.constructor==Array)return J.am.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ap.prototype
return a}if(a instanceof P.B)return a
return J.hy(a)},
jQ:function(a){if(typeof a=="number")return J.aH.prototype
if(a==null)return a
if(!(a instanceof P.B))return J.av.prototype
return a},
lO:function(a){if(typeof a=="number")return J.aH.prototype
if(typeof a=="string")return J.ao.prototype
if(a==null)return a
if(!(a instanceof P.B))return J.av.prototype
return a},
lP:function(a){if(typeof a=="string")return J.ao.prototype
if(a==null)return a
if(!(a instanceof P.B))return J.av.prototype
return a},
k:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ap.prototype
return a}if(a instanceof P.B)return a
return J.hy(a)},
A:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.q(a).v(a,b)},
Y:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.jQ(a).ap(a,b)},
k3:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.jQ(a).aq(a,b)},
aV:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lW(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.O(a).h(a,b)},
k4:function(a,b,c,d){return J.k(a).d_(a,b,c,d)},
iF:function(a,b){return J.lP(a).ax(a,b)},
iG:function(a,b){return J.k(a).bw(a,b)},
iH:function(a,b,c){return J.k(a).by(a,b,c)},
k5:function(a,b){return J.k(a).dn(a,b)},
hZ:function(a,b,c){return J.k(a).bz(a,b,c)},
bx:function(a,b,c){return J.k(a).bA(a,b,c)},
d5:function(a,b){return J.k(a).ds(a,b)},
k6:function(a,b){return J.k(a).bB(a,b)},
k7:function(a,b,c){return J.k(a).bC(a,b,c)},
iI:function(a,b,c,d){return J.k(a).bD(a,b,c,d)},
k8:function(a,b,c,d,e){return J.k(a).bE(a,b,c,d,e)},
k9:function(a,b){return J.lO(a).L(a,b)},
i_:function(a){return J.k(a).bG(a)},
ka:function(a){return J.k(a).bH(a)},
kb:function(a){return J.k(a).bK(a)},
kc:function(a){return J.k(a).dw(a)},
kd:function(a,b){return J.k(a).bM(a,b)},
i0:function(a,b){return J.k(a).bN(a,b)},
ke:function(a,b,c,d){return J.k(a).bO(a,b,c,d)},
kf:function(a,b,c,d,e){return J.k(a).dF(a,b,c,d,e)},
kg:function(a,b,c,d,e){return J.k(a).bP(a,b,c,d,e)},
kh:function(a,b,c,d,e,f){return J.k(a).dG(a,b,c,d,e,f)},
ki:function(a,b){return J.hx(a).p(a,b)},
d6:function(a,b){return J.k(a).bQ(a,b)},
kj:function(a,b){return J.k(a).bR(a,b)},
kk:function(a){return J.k(a).dH(a)},
iJ:function(a,b){return J.hx(a).ak(a,b)},
aW:function(a){return J.q(a).gu(a)},
by:function(a){return J.hx(a).gA(a)},
aX:function(a){return J.O(a).gj(a)},
kl:function(a){return J.q(a).gw(a)},
km:function(a){return J.k(a).gan(a)},
i1:function(a){return J.k(a).gm(a)},
i2:function(a){return J.k(a).gn(a)},
iK:function(a){return J.k(a).gB(a)},
kn:function(a){return J.k(a).ao(a)},
ko:function(a){return J.k(a).aV(a)},
kp:function(a,b){return J.k(a).aW(a,b)},
kq:function(a,b,c){return J.k(a).aX(a,b,c)},
iL:function(a,b,c){return J.k(a).b_(a,b,c)},
kr:function(a,b){return J.k(a).bU(a,b)},
ks:function(a,b){return J.hx(a).bW(a,b)},
kt:function(a,b,c){return J.k(a).bX(a,b,c)},
ku:function(a,b){return J.k(a).E(a,b)},
kv:function(a,b,c,d){return J.k(a).b2(a,b,c,d)},
kw:function(a,b,c,d,e,f,g){return J.k(a).c1(a,b,c,d,e,f,g)},
kx:function(a,b,c,d){return J.k(a).c2(a,b,c,d)},
iM:function(a,b,c,d){return J.k(a).c3(a,b,c,d)},
bz:function(a){return J.q(a).k(a)},
ky:function(a,b,c,d){return J.k(a).e9(a,b,c,d)},
kz:function(a,b,c){return J.k(a).c7(a,b,c)},
kA:function(a,b,c){return J.k(a).c8(a,b,c)},
i3:function(a,b,c){return J.k(a).c9(a,b,c)},
kB:function(a,b,c){return J.k(a).ca(a,b,c)},
iN:function(a,b,c){return J.k(a).cb(a,b,c)},
iO:function(a,b,c){return J.k(a).cc(a,b,c)},
iP:function(a,b,c){return J.k(a).cd(a,b,c)},
iQ:function(a,b,c,d){return J.k(a).ce(a,b,c,d)},
iR:function(a,b,c,d){return J.k(a).cf(a,b,c,d)},
kC:function(a,b){return J.k(a).ci(a,b)},
kD:function(a,b,c){return J.k(a).ea(a,b,c)},
kE:function(a,b,c,d,e,f,g){return J.k(a).ck(a,b,c,d,e,f,g)},
kF:function(a,b,c,d,e){return J.k(a).cm(a,b,c,d,e)},
a:function a(){},
eb:function eb(){},
bS:function bS(){},
b3:function b3(){},
eN:function eN(){},
av:function av(){},
ap:function ap(){},
am:function am(a){this.$ti=a},
i9:function i9(a){this.$ti=a},
da:function da(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aH:function aH(){},
bR:function bR(){},
ec:function ec(){},
ao:function ao(){}},P={
lo:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.lE()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bt(new P.fI(t),1)).observe(s,{childList:true})
return new P.fH(t,s,r)}else if(self.setImmediate!=null)return P.lF()
return P.lG()},
lp:function(a){H.hw()
self.scheduleImmediate(H.bt(new P.fJ(a),0))},
lq:function(a){H.hw()
self.setImmediate(H.bt(new P.fK(a),0))},
lr:function(a){P.ik(C.r,a)},
ik:function(a,b){var t=C.b.J(a.a,1000)
return H.lj(t<0?0:t,b)},
lz:function(a,b){if(H.aS(a,{func:1,args:[P.H,P.H]})){b.toString
return a}else{b.toString
return a}},
ls:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.a5))
H.b(b.a===0)
b.a=1
try{a.c5(new P.fW(b),new P.fX(b))}catch(r){t=H.a8(r)
s=H.af(r)
P.m2(new P.fY(b,t,s))}},
jC:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.aH()
b.aw(a)
P.bf(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.bq(r)}},
bf:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.ho(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bf(t.a,b)}s=t.a
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
P.ho(null,null,p,o,s)
return}s=$.z
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.z
H.b(l==null?s!=null:l!==s)
j=$.z
$.z=l
i=j}else i=null
s=b.c
if(s===8)new P.h1(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.h0(r,b,m).$0()}else if((s&2)!==0)new P.h_(t,r,b).$0()
if(i!=null){H.b(!0)
$.z=i}s=r.b
if(!!J.q(s).$ise0){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.ah(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.jC(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.ah(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
ly:function(){var t,s
for(;t=$.aP,t!=null;){$.br=null
s=t.b
$.aP=s
if(s==null)$.bq=null
t.a.$0()}},
lC:function(){$.iu=!0
try{P.ly()}finally{$.br=null
$.iu=!1
if($.aP!=null)$.$get$iq().$1(P.jN())}},
jH:function(a){var t=new P.cj(a,null)
if($.aP==null){$.bq=t
$.aP=t
if(!$.iu)$.$get$iq().$1(P.jN())}else{$.bq.b=t
$.bq=t}},
lB:function(a){var t,s,r
t=$.aP
if(t==null){P.jH(a)
$.br=$.bq
return}s=new P.cj(a,null)
r=$.br
if(r==null){s.b=t
$.br=s
$.aP=s}else{s.b=r.b
r.b=s
$.br=s
if(s.b==null)$.bq=s}},
m2:function(a){var t=$.z
if(C.f===t){P.hq(null,null,C.f,a)
return}t.toString
P.hq(null,null,t,t.aN(a))},
lk:function(a,b){var t=$.z
if(t===C.f){t.toString
return P.ik(a,b)}return P.ik(a,t.aN(b))},
ip:function(a){var t,s
H.b(a!=null)
t=$.z
H.b(a==null?t!=null:a!==t)
s=$.z
$.z=a
return s},
ho:function(a,b,c,d,e){var t={}
t.a=d
P.lB(new P.hp(t,e))},
jF:function(a,b,c,d){var t,s
if($.z===c)return d.$0()
t=P.ip(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.z=s}},
jG:function(a,b,c,d,e){var t,s
if($.z===c)return d.$1(e)
t=P.ip(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.z=s}},
lA:function(a,b,c,d,e,f){var t,s
if($.z===c)return d.$2(e,f)
t=P.ip(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.z=s}},
hq:function(a,b,c,d){var t=C.f!==c
if(t)d=!(!t||!1)?c.aN(d):c.dq(d)
P.jH(d)},
fI:function fI(a){this.a=a},
fH:function fH(a,b,c){this.a=a
this.b=b
this.c=c},
fJ:function fJ(a){this.a=a},
fK:function fK(a){this.a=a},
i5:function i5(){},
fM:function fM(){},
hl:function hl(a,b){this.a=a
this.$ti=b},
cr:function cr(a,b,c,d,e,f){var _=this
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
fV:function fV(a,b){this.a=a
this.b=b},
fZ:function fZ(a,b){this.a=a
this.b=b},
fW:function fW(a){this.a=a},
fX:function fX(a){this.a=a},
fY:function fY(a,b,c){this.a=a
this.b=b
this.c=c},
h1:function h1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h2:function h2(a){this.a=a},
h0:function h0(a,b,c){this.a=a
this.b=b
this.c=c},
h_:function h_(a,b,c){this.a=a
this.b=b
this.c=c},
cj:function cj(a,b){this.a=a
this.b=b},
fc:function fc(){},
fe:function fe(a){this.a=a},
ff:function ff(a,b){this.a=a
this.b=b},
fd:function fd(){},
ij:function ij(){},
aC:function aC(a,b){this.a=a
this.b=b},
hm:function hm(){},
hp:function hp(a,b){this.a=a
this.b=b},
hf:function hf(){},
hh:function hh(a,b){this.a=a
this.b=b},
hg:function hg(a,b){this.a=a
this.b=b},
hi:function hi(a,b){this.a=a
this.b=b},
j8:function(a,b){return new H.a0(0,null,null,null,null,null,0,[a,b])},
S:function(){return new H.a0(0,null,null,null,null,null,0,[null,null])},
ar:function(a){return H.lN(a,new H.a0(0,null,null,null,null,null,0,[null,null]))},
aN:function(a,b){return new P.h9(0,null,null,null,null,null,0,[a,b])},
bT:function(a,b,c,d){return new P.h7(0,null,null,null,null,null,0,[d])},
is:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
l_:function(a,b,c){var t,s
if(P.iv(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bs()
C.a.l(s,a)
try{P.lx(a,t)}finally{H.b(C.a.gaQ(s)===a)
s.pop()}s=P.jj(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
ea:function(a,b,c){var t,s,r
if(P.iv(a))return b+"..."+c
t=new P.ba(b)
s=$.$get$bs()
C.a.l(s,a)
try{r=t
r.a=P.jj(r.gR(),a,", ")}finally{H.b(C.a.gaQ(s)===a)
s.pop()}s=t
s.a=s.gR()+c
s=t.gR()
return s.charCodeAt(0)==0?s:s},
iv:function(a){var t,s
for(t=0;s=$.$get$bs(),t<s.length;++t)if(a===s[t])return!0
return!1},
lx:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gA(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.q())return
q=H.e(t.gt(t))
C.a.l(b,q)
s+=q.length+2;++r}if(!t.q()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gt(t);++r
if(!t.q()){if(r<=4){C.a.l(b,H.e(n))
return}p=H.e(n)
o=b.pop()
s+=p.length+2}else{m=t.gt(t);++r
H.b(r<100)
for(;t.q();n=m,m=l){l=t.gt(t);++r
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
l1:function(a,b){var t,s
t=P.bT(null,null,null,b)
for(s=J.by(a);s.q();)t.l(0,s.gt(s))
return t},
ja:function(a){var t,s,r
t={}
if(P.iv(a))return"{...}"
s=new P.ba("")
try{C.a.l($.$get$bs(),a)
r=s
r.a=r.gR()+"{"
t.a=!0
J.iJ(a,new P.en(t,s))
t=s
t.a=t.gR()+"}"}finally{t=$.$get$bs()
H.b(C.a.gaQ(t)===a)
t.pop()}t=s.gR()
return t.charCodeAt(0)==0?t:t},
ig:function(a,b){var t=new P.ej(null,0,0,0,[b])
t.cP(a,b)
return t},
h9:function h9(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
h7:function h7(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
h8:function h8(a,b,c){this.a=a
this.b=b
this.c=c},
bg:function bg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
h4:function h4(){},
ie:function ie(){},
l:function l(){},
em:function em(){},
en:function en(a,b){this.a=a
this.b=b},
b4:function b4(){},
ej:function ej(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ha:function ha(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
f1:function f1(){},
f0:function f0(){},
kQ:function(a){var t=J.q(a)
if(!!t.$isaj)return t.k(a)
return"Instance of '"+H.b7(a)+"'"},
j9:function(a,b,c){var t,s
t=H.E([],[c])
for(s=J.by(a);s.q();)C.a.l(t,s.gt(s))
return t},
jj:function(a,b,c){var t=J.by(b)
if(!t.q())return a
if(c.length===0){do a+=H.e(t.gt(t))
while(t.q())}else{a+=H.e(t.gt(t))
for(;t.q();)a=a+c+H.e(t.gt(t))}return a},
kL:function(a,b){return J.k9(a,b)},
kM:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
kN:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bG:function(a){if(a>=10)return""+a
return"0"+a},
kO:function(a,b,c,d,e,f){return new P.al(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
bL:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bz(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kQ(a)},
kG:function(a){return new P.bB(a)},
iS:function(a){return new P.a9(!1,null,null,a)},
iT:function(a,b,c){return new P.a9(!0,a,b,c)},
eS:function(a,b,c){return new P.c6(null,null,!0,a,b,"Value not in range")},
b8:function(a,b,c,d,e){return new P.c6(b,c,!0,a,d,"Invalid value")},
jg:function(a,b,c,d,e,f){if(0>a||a>c)throw H.c(P.b8(a,0,c,"start",f))
if(a>b||b>c)throw H.c(P.b8(b,a,c,"end",f))
return b},
y:function(a,b,c,d,e){var t=e!=null?e:J.aX(b)
return new P.e7(b,t,!0,a,c,"Index out of range")},
p:function(a){return new P.fz(a)},
jz:function(a){return new P.fx(a)},
li:function(a){return new P.b9(a)},
ak:function(a){return new P.dg(a)},
bM:function(a){return new P.fU(a)},
X:function(a){H.hP(H.e(a))},
aB:function aB(){},
C:function C(){},
b_:function b_(a,b){this.a=a
this.b=b},
M:function M(){},
al:function al(a){this.a=a},
dx:function dx(){},
dy:function dy(){},
aF:function aF(){},
bB:function bB(a){this.a=a},
c4:function c4(){},
a9:function a9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c6:function c6(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
e7:function e7(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fz:function fz(a){this.a=a},
fx:function fx(a){this.a=a},
b9:function b9(a){this.a=a},
dg:function dg(a){this.a=a},
cc:function cc(){},
dq:function dq(a){this.a=a},
i6:function i6(){},
fU:function fU(a){this.a=a},
dA:function dA(a,b,c){this.a=a
this.b=b
this.$ti=c},
u:function u(){},
a_:function a_(){},
bQ:function bQ(){},
i:function i(){},
aJ:function aJ(){},
H:function H(){},
W:function W(){},
B:function B(){},
aL:function aL(){},
v:function v(){},
ba:function ba(a){this.a=a},
im:function im(){},
ht:function(a){var t,s,r,q,p
if(a==null)return
t=P.S()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.P)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
lK:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.iJ(a,new P.hs(t))
return t},
hs:function hs(a){this.a=a},
h6:function h6(){},
he:function he(){},
L:function L(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
dW:function dW(){},
dZ:function dZ(){},
R:function R(){},
Z:function Z(){},
e5:function e5(){},
ef:function ef(){},
ep:function ep(){},
eE:function eE(){},
eL:function eL(){},
eP:function eP(){},
eQ:function eQ(){},
eT:function eT(){},
eU:function eU(){},
fg:function fg(){},
r:function r(){},
fh:function fh(){},
bb:function bb(){},
bc:function bc(){},
fs:function fs(){},
fB:function fB(){},
cu:function cu(){},
cv:function cv(){},
cB:function cB(){},
cC:function cC(){},
cL:function cL(){},
cM:function cM(){},
cR:function cR(){},
cS:function cS(){},
db:function db(){},
dc:function dc(){},
aD:function aD(){},
eF:function eF(){},
eX:function eX(){},
eY:function eY(){},
f8:function f8(){},
cH:function cH(){},
cI:function cI(){}},W={
kP:function(a){return"wheel"},
aA:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jE:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
U:function(a,b,c,d,e){var t=W.jJ(new W.fT(c))
t=new W.fS(0,a,b,t,!1,[e])
t.cX(a,b,c,!1,e)
return t},
jJ:function(a){var t=$.z
if(t===C.f)return a
return t.dr(a)},
h:function h(){},
bA:function bA(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
ai:function ai(){},
dh:function dh(){},
di:function di(){},
dj:function dj(){},
dk:function dk(){},
aZ:function aZ(){},
dl:function dl(){},
Q:function Q(){},
aE:function aE(){},
dm:function dm(){},
dn:function dn(){},
dp:function dp(){},
dr:function dr(){},
ds:function ds(){},
b0:function b0(){},
dt:function dt(){},
du:function du(){},
bH:function bH(){},
bI:function bI(){},
bJ:function bJ(){},
dv:function dv(){},
dw:function dw(){},
bK:function bK(){},
f:function f(){},
d:function d(){},
dU:function dU(){},
dV:function dV(){},
e_:function e_(){},
e2:function e2(){},
e3:function e3(){},
b1:function b1(){},
bP:function bP(){},
e4:function e4(){},
b2:function b2(){},
aq:function aq(){},
ek:function ek(){},
el:function el(){},
eq:function eq(){},
es:function es(){},
b5:function b5(){},
et:function et(){},
G:function G(){},
x:function x(){},
c3:function c3(){},
a1:function a1(){},
eO:function eO(){},
eR:function eR(){},
c8:function c8(){},
f_:function f_(){},
aa:function aa(){},
f5:function f5(){},
f7:function f7(){},
a2:function a2(){},
fa:function fa(){},
fb:function fb(a){this.a=a},
fj:function fj(){},
fk:function fk(){},
fm:function fm(){},
at:function at(){},
fq:function fq(){},
fr:function fr(){},
au:function au(){},
fA:function fA(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(){},
ax:function ax(){},
be:function be(){},
fF:function fF(a){this.a=a},
io:function io(){},
fN:function fN(){},
fO:function fO(){},
h3:function h3(){},
cy:function cy(){},
hj:function hj(){},
hk:function hk(){},
fR:function fR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ir:function ir(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fS:function fS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fT:function fT(a){this.a=a},
m:function m(){},
dX:function dX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ck:function ck(){},
cl:function cl(){},
cm:function cm(){},
cn:function cn(){},
co:function co(){},
cp:function cp(){},
cq:function cq(){},
cs:function cs(){},
ct:function ct(){},
cw:function cw(){},
cx:function cx(){},
cz:function cz(){},
cA:function cA(){},
cD:function cD(){},
cE:function cE(){},
bl:function bl(){},
bm:function bm(){},
cF:function cF(){},
cG:function cG(){},
cK:function cK(){},
cN:function cN(){},
cO:function cO(){},
bn:function bn(){},
bo:function bo(){},
cP:function cP(){},
cQ:function cQ(){},
cT:function cT(){},
cU:function cU(){},
cV:function cV(){},
cW:function cW(){},
cX:function cX(){},
cY:function cY(){},
cZ:function cZ(){},
d_:function d_(){},
d0:function d0(){},
d1:function d1(){}},B={
m3:function(a){var t,s
t=document
s=W.aq
W.U(t,"keydown",new B.hR(),!1,s)
W.U(t,"keyup",new B.hS(),!1,s)
if(!$.m4)W.U(t,"mousemove",new B.hT(),!1,W.G)
s=W.G
W.U(t,"mousedown",new B.hU(),!1,s)
W.U(t,"mouseup",new B.hV(),!1,s)},
l2:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$hu()
r=$.$get$bu()
q=new T.T(new Float32Array(16))
q.Z()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.eG(a,b,c,0,new T.w(t),-0.02,s,r,q,new T.w(p),new T.w(o),new T.w(n),new T.w(new Float32Array(3)),"camera:orbit",!1,!0)
t.cQ(a,b,c,d)
return t},
hR:function hR(){},
hS:function hS(){},
hT:function hT(){},
hU:function hU(){},
hV:function hV(){},
eG:function eG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
eH:function eH(a){this.a=a},
eI:function eI(a){this.a=a},
eJ:function eJ(){},
eK:function eK(a){this.a=a},
le:function(a,b,c,d,e,a0,a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=a2+1
s=a1+1
r=B.l3(new B.f4(e,d,a0,c),0,6.283185307179586,s,!1,0.001)
H.b(r.length===2*s)
q=B.ll(r,a2,a3,!1)
H.b(q.length===s)
H.b(q[0].length===2*t)
p=[]
o=new G.e1(!1,[],[],p,P.S())
for(n=q.length,m=0;m<q.length;q.length===n||(0,H.P)(q),++m){l=q[m]
for(k=0;k<l.length;k+=2){j=l[k]
j.toString
i=new T.w(new Float32Array(3))
i.I(j)
C.a.l(p,i)}}H.b(p.length===t*s)
o.cL(t,s,!1)
o.cM(t,s)
n=o.e
H.b(n.h(0,"aTexUV").length===p.length)
H.b(!n.C(0,"aNormal"))
H.b(C.i.cC("aNormal","a"))
h=$.$get$J().h(0,"aNormal")
switch(h.a){case"vec2":n.i(0,"aNormal",H.E([],[T.aw]))
break
case"vec3":n.i(0,"aNormal",H.E([],[T.w]))
break
case"vec4":n.i(0,"aNormal",H.E([],[T.ac]))
break
case"float":n.i(0,"aNormal",H.E([],[P.M]))
break
case"uvec4":n.i(0,"aNormal",H.E([],[[P.i,P.u]]))
break
default:if(H.a7(!1))H.ad("unknown type for aNormal")}for(j=q.length,m=0;m<q.length;q.length===j||(0,H.P)(q),++m){l=q[m]
for(k=0;k<l.length;k+=2){i=l[k+1]
g=n.h(0,"aNormal")
i.toString
f=new T.w(new Float32Array(3))
f.I(i);(g&&C.a).l(g,f)}}H.b(n.h(0,"aNormal").length===p.length)
return o},
ll:function(a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t=[]
s=new Float32Array(3)
r=new T.w(s)
q=new Float32Array(3)
p=new T.w(q)
o=new Float32Array(3)
n=new T.w(o)
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
o[2]=e*d}p.U(0)
n.U(0)
for(c=0;c<m;++c){b=c/a2*2*3.141592653589793
a=a3*Math.cos(b)
a0=a3*Math.sin(b)
r.I(k)
r.aj(p,a)
r.aj(n,a0)
h=new T.w(new Float32Array(3))
h.I(r)
C.a.l(i,h)
s[2]=0
s[1]=0
s[0]=0
r.aj(p,a)
r.aj(n,a0)
r.U(0)
h=new T.w(new Float32Array(3))
h.I(r)
C.a.l(i,h)}}return t},
l3:function(a,b,c,d,e,f){var t,s,r,q,p,o,n
H.b(d>=2)
t=[]
s=new T.w(new Float32Array(3))
r=new T.w(new Float32Array(3))
for(q=(c-b)/(d-1),p=0;p<d;++p){o=q*p+b
a.$2(o,s)
a.$2(o+f,r)
r.b3(0,s)
n=new T.w(new Float32Array(3))
n.I(s)
C.a.l(t,n)
n=new T.w(new Float32Array(3))
n.I(r)
C.a.l(t,n)}return t},
f4:function f4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},G={
ln:function(a){var t,s,r
t=H.E(a.split("\n"),[P.v])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.e(t[s])}return C.a.a8(t,"\n")},
jB:function(a,b,c){var t,s,r,q
t=J.k(a)
s=t.bJ(a,b)
t.b1(a,s,c)
t.bF(a,s)
r=t.aZ(a,s,35713)
if(r!=null&&!r){q=t.aY(a,s)
P.X("E:Compilation failed:")
P.X("E:"+G.ln(c))
P.X("E:Failure:")
P.X(C.i.X("E:",q))
throw H.c(q)}return s},
jk:function(a,b,c){return new G.cg(a,b,c)},
j3:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.i1(a[s])
b[t+1]=J.i2(a[s])
b[t+2]=J.iK(a[s])}return b},
kS:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.i1(a[s])
b[t+1]=J.i2(a[s])}return b},
kT:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.i1(a[s])
b[t+1]=J.i2(a[s])
b[t+2]=J.iK(a[s])
b[t+3]=J.km(a[s])}return b},
kR:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.aV(a[s],0)
b[t+1]=J.aV(a[s],1)
b[t+2]=J.aV(a[s],2)
b[t+3]=J.aV(a[s],3)}return b},
jb:function(a,b,c,d){return new G.er(b,J.kc(b.a),c,P.S(),d,null,0,-1,null,null,P.S(),"meshdata:"+a,!1,!0)},
lt:function(a,b){var t,s,r,q,p,o,n,m,l,k
for(t=a.e,s=t.gG(t),s=s.gA(s),r=b.x,q=[[P.i,P.u]],p=[P.M],o=[T.ac],n=[T.w],m=[T.aw];s.q();){l=s.gt(s)
if(!r.C(0,l)){l="Dropping unnecessary attribute: "+H.e(l)
if($.iy>0)H.hP("I: "+l)
continue}k=t.h(0,l)
switch($.$get$J().h(0,l).a){case"vec2":b.a0(l,G.kS(H.d4(k,"$isi",m,"$asi"),null),2)
break
case"vec3":b.a0(l,G.j3(H.d4(k,"$isi",n,"$asi"),null),3)
break
case"vec4":b.a0(l,G.kT(H.d4(k,"$isi",o,"$asi"),null),4)
break
case"float":b.a0(l,new Float32Array(H.hn(H.d4(k,"$isi",p,"$asi"))),1)
break
case"uvec4":b.a0(l,G.kR(H.d4(k,"$isi",q,"$asi"),null),4)
break
default:if(H.a7(!1))H.ad("unknown type for "+H.e(l)+" ["+J.kl(k[0]).k(0)+"] ["+new H.ab(H.hA(k),null).k(0)+"] "+H.e(k))}}},
jh:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.bT(null,null,null,P.v)
s=c.b
r=d.b
q=c.f
p=J.ka(b.a)
o=G.jB(b.a,35633,s)
J.iH(b.a,p,o)
n=G.jB(b.a,35632,r)
J.iH(b.a,p,n)
if(q.length>0)J.ky(b.a,p,q,35980)
J.kr(b.a,p)
if(!J.kq(b.a,p,35714))H.F(J.kp(b.a,p))
t=new G.eW(b,c,d,p,P.l1(c.c,null),P.S(),P.S(),t,null,a,!1,!0)
t.cR(a,b,c,d)
return t},
f3:function(a){return new G.f2(a,null,[],[],[],[],0,P.S())},
eu:function eu(){},
fw:function fw(){},
dd:function dd(){},
df:function df(a,b){this.a=a
this.b=b},
dT:function dT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e1:function e1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ch:function ch(a,b,c){this.a=a
this.b=b
this.c=c},
cg:function cg(a,b,c){this.a=a
this.b=b
this.c=c},
bX:function bX(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
er:function er(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
eM:function eM(){},
eW:function eW(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
t:function t(a,b,c){this.a=a
this.b=b
this.c=c},
f2:function f2(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
f6:function f6(){},
fl:function fl(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bd:function bd(){},
e6:function e6(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={
lm:function(a,b,c){var t,s,r,q
t="stars_"+b
s=b*3
r=new Float32Array(s)
for(q=0;q<s;++q)r[q]=($.$get$jA().dZ()-0.5)*c
s=G.jb(t,a.d,0,a.e.x)
s.b7(r)
return s},
c5:function c5(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.c=n}},A={
hB:function(a){var t,s
t=C.L.dK(a,0,new A.hC())
s=536870911&t+(C.b.cn(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
hC:function hC(){}},T={T:function T(a){this.a=a},aw:function aw(a){this.a=a},w:function w(a){this.a=a},ac:function ac(a){this.a=a}},M={
lY:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t={}
s=document
r=C.B.e0(s,"#webgl-canvas")
$.iy=1
q=new G.df(null,r)
p=(r&&C.q).aU(r,"webgl2",P.ar(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
q.a=p
if(p==null)H.F(P.bM('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+H.e(J.kn(p))
if($.iy>0)P.X("I: "+o)
J.k8(p,0,0,0,1)
J.d6(p,2929)
n=B.l2(5,0,0,s.body)
p=new T.T(new Float32Array(16))
p.Z()
o=new T.T(new Float32Array(16))
o.Z()
m=new R.c5(r,q,n,50,1,0.1,1000,p,o,new T.T(new Float32Array(16)),P.S(),"perspective",!1,!0)
m.bc()
m.bZ(null)
W.U(window,"resize",m.ge3(),!1,W.f)
l=G.jh("basic",q,$.$get$jP(),$.$get$jO())
k=new G.bX(P.S(),"torus-mat",!1,!0)
k.F("cDepthTest",!0)
k.F("cDepthWrite",!0)
k.F("cBlendEquation",$.$get$iV())
p=$.$get$ji()
k.F("cStencilFunc",p)
o=new T.T(new Float32Array(16))
o.Z()
k.F("uModelMatrix",o)
j=B.le(!0,!0,1,2,3,1,128,16,0.4,!1)
i=G.jb("torusknot",l.d,4,l.e.x)
i.b7(G.j3(j.d,null))
o=j.cK()
h=i.d
i.y=J.i_(h.a)
H.b(i.ch!=null)
g=i.ch.length
if(g<768){i.saD(new Uint8Array(H.hn(o)))
i.Q=5121}else if(g<196608){i.saD(new Uint16Array(H.hn(o)))
i.Q=5123}else{i.saD(new Uint32Array(H.hn(o)))
i.Q=5125}J.d5(h.a,i.e)
o=i.y
g=i.cx
f=J.q(g)
H.b(!!f.$isjw||!!f.$isjx||!!f.$isjy)
J.hZ(h.a,34963,o)
J.iI(h.a,34963,g,35048)
G.lt(j,i)
e=G.jh("basic",q,$.$get$jY(),$.$get$jX())
o=$.$get$iU()
d=new G.bX(P.S(),"stars",!1,!0)
d.F("cDepthTest",!0)
d.F("cDepthWrite",!1)
d.F("cBlendEquation",o)
d.F("cStencilFunc",p)
c=s.createElement("canvas")
c.width=64
c.height=64
b=C.q.cq(c,"2d")
a=(b&&C.o).bI(b,32,32,1,32,32,22);(a&&C.m).ai(a,0,"gray")
C.m.ai(a,1,"black")
b.fillStyle=a
C.o.dI(b,0,0,64,64)
a=C.o.bI(b,32,32,1,32,32,6);(a&&C.m).ai(a,0,"white")
C.m.ai(a,1,"gray")
b.globalAlpha=0.9
b.fillStyle=a
b.arc(32,32,4,0,6.283185307179586,!1)
b.fill("nonzero")
s=new G.fl(!1,!1,!1,!0,1,9729,9729)
p=J.kb(q.a)
o=new G.e6(c,"Utils::Particles",p,3553,q,s)
J.bx(q.a,3553,p)
J.kt(q.a,37440,1)
o.cT(c)
s.cO(q,3553)
H.b(J.ko(q.a)===0)
J.bx(q.a,3553,null)
d.F("uTexture",o)
d.F("uPointSize",1000)
s=new T.T(new Float32Array(16))
s.Z()
d.F("uModelMatrix",s)
a0=R.lm(e,2000,100)
t.a=0
new M.hN(t,n,l,i,m,k,e,a0,d).$1(0)},
hN:function hN(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i}}
var v=[C,H,J,P,W,B,G,R,A,T,M]
setFunctionNamesIfNecessary(v)
var $={}
H.ia.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gu:function(a){return H.as(a)},
k:function(a){return"Instance of '"+H.b7(a)+"'"},
gw:function(a){return new H.ab(H.hA(a),null)}}
J.eb.prototype={
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gw:function(a){return C.af},
$isaB:1}
J.bS.prototype={
v:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
gw:function(a){return C.a9},
$isH:1}
J.b3.prototype={
gu:function(a){return 0},
gw:function(a){return C.a8},
k:function(a){return String(a)},
$isj7:1}
J.eN.prototype={}
J.av.prototype={}
J.ap.prototype={
k:function(a){var t=a[$.$get$j1()]
return t==null?this.cG(a):J.bz(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isi7:1}
J.am.prototype={
l:function(a,b){if(!!a.fixed$length)H.F(P.p("add"))
a.push(b)},
dk:function(a,b){var t,s,r,q,p
t=a.length
if(!!a.fixed$length)H.F(P.p("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.P)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.F(P.ak(a)))
a.push(q)}},
bW:function(a,b){return new H.bW(a,b,[H.aT(a,0),null])},
a8:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.e(a[s])
return t.join(b)},
p:function(a,b){return a[b]},
gdJ:function(a){if(a.length>0)return a[0]
throw H.c(H.i8())},
gaQ:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.i8())},
b0:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.F(P.p("setRange"))
P.jg(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.F(P.b8(e,0,null,"skipCount",null))
s=J.O(d)
if(e+t>s.gj(d))throw H.c(H.l0())
if(e<b)for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
cB:function(a,b){if(!!a.immutable$list)H.F(P.p("sort"))
H.lh(a,P.lL())},
as:function(a){return this.cB(a,null)},
S:function(a,b){var t
for(t=0;t<a.length;++t)if(J.A(a[t],b))return!0
return!1},
k:function(a){return P.ea(a,"[","]")},
gA:function(a){return new J.da(a,a.length,0,null,[H.aT(a,0)])},
gu:function(a){return H.as(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.F(P.p("set length"))
if(b<0)throw H.c(P.b8(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aR(a,b))
if(b>=a.length||b<0)throw H.c(H.aR(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.F(P.p("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aR(a,b))
if(b>=a.length||b<0)throw H.c(H.aR(a,b))
a[b]=c},
$isn:1,
$asn:function(){},
$isj:1,
$isi:1}
J.i9.prototype={}
J.da.prototype={
gt:function(a){return this.d},
q:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.P(t))
r=this.c
if(r>=s){this.sbe(null)
return!1}this.sbe(t[r]);++this.c
return!0},
sbe:function(a){this.d=a}}
J.aH.prototype={
L:function(a,b){var t
if(typeof b!=="number")throw H.c(H.K(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaP(b)
if(this.gaP(a)===t)return 0
if(this.gaP(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaP:function(a){return a===0?1/a<0:a<0},
V:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.p(""+a+".round()"))},
dt:function(a,b,c){if(this.L(b,c)>0)throw H.c(H.K(b))
if(this.L(a,b)<0)return b
if(this.L(a,c)>0)return c
return a},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
X:function(a,b){if(typeof b!=="number")throw H.c(H.K(b))
return a+b},
a_:function(a,b){if(typeof b!=="number")throw H.c(H.K(b))
return a-b},
co:function(a,b){if(typeof b!=="number")throw H.c(H.K(b))
return a/b},
D:function(a,b){if(typeof b!=="number")throw H.c(H.K(b))
return a*b},
at:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bu(a,b)},
J:function(a,b){return(a|0)===a?a/b|0:this.bu(a,b)},
bu:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.p("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
aJ:function(a,b){var t
if(a>0)t=this.dh(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
dh:function(a,b){return b>31?0:a>>>b},
cn:function(a,b){if(typeof b!=="number")throw H.c(H.K(b))
return(a&b)>>>0},
cH:function(a,b){if(typeof b!=="number")throw H.c(H.K(b))
return(a^b)>>>0},
aq:function(a,b){if(typeof b!=="number")throw H.c(H.K(b))
return a<b},
ap:function(a,b){if(typeof b!=="number")throw H.c(H.K(b))
return a>b},
cp:function(a,b){if(typeof b!=="number")throw H.c(H.K(b))
return a>=b},
gw:function(a){return C.ai},
$isC:1,
$asC:function(){return[P.W]},
$isM:1,
$isW:1}
J.bR.prototype={
gw:function(a){return C.ah},
$isu:1}
J.ec.prototype={
gw:function(a){return C.ag}}
J.ao.prototype={
ax:function(a,b){if(b>=a.length)throw H.c(H.aR(a,b))
return a.charCodeAt(b)},
X:function(a,b){if(typeof b!=="string")throw H.c(P.iT(b,null,null))
return a+b},
cD:function(a,b,c){var t
if(c>a.length)throw H.c(P.b8(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
cC:function(a,b){return this.cD(a,b,0)},
b4:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.eS(b,null,null))
if(b>c)throw H.c(P.eS(b,null,null))
if(c>a.length)throw H.c(P.eS(c,null,null))
return a.substring(b,c)},
cE:function(a,b){return this.b4(a,b,null)},
L:function(a,b){var t
if(typeof b!=="string")throw H.c(H.K(b))
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
gw:function(a){return C.aa},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.aR(a,b))
return a[b]},
$isn:1,
$asn:function(){},
$isC:1,
$asC:function(){return[P.v]},
$isv:1}
H.j.prototype={}
H.aI.prototype={
gA:function(a){return new H.bU(this,this.gj(this),0,null,[H.ae(this,"aI",0)])},
e8:function(a,b){var t,s
t=H.E([],[H.ae(this,"aI",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.p(0,s)
return t},
e7:function(a){return this.e8(a,!0)}}
H.bU.prototype={
gt:function(a){return this.d},
q:function(){var t,s,r,q
t=this.a
s=J.O(t)
r=s.gj(t)
if(this.b!==r)throw H.c(P.ak(t))
q=this.c
if(q>=r){this.sa2(null)
return!1}this.sa2(s.p(t,q));++this.c
return!0},
sa2:function(a){this.d=a}}
H.bV.prototype={
gA:function(a){return new H.eo(null,J.by(this.a),this.b,this.$ti)},
gj:function(a){return J.aX(this.a)},
$asa_:function(a,b){return[b]}}
H.dz.prototype={$isj:1,
$asj:function(a,b){return[b]}}
H.eo.prototype={
q:function(){var t=this.b
if(t.q()){this.sa2(this.c.$1(t.gt(t)))
return!0}this.sa2(null)
return!1},
gt:function(a){return this.a},
sa2:function(a){this.a=a},
$asbQ:function(a,b){return[b]}}
H.bW.prototype={
gj:function(a){return J.aX(this.a)},
p:function(a,b){return this.b.$1(J.ki(this.a,b))},
$asj:function(a,b){return[b]},
$asaI:function(a,b){return[b]},
$asa_:function(a,b){return[b]}}
H.aG.prototype={}
H.hW.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.hX.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hc.prototype={
sdT:function(a){this.z=a},
sdW:function(a){this.ch=a}}
H.aM.prototype={
cY:function(){var t,s
t=this.e
s=t.a
this.c.l(0,s)
this.d0(s,t)},
bx:function(a,b){if(!this.f.v(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aM()},
e2:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.a9(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bo();++r.d}this.y=!1}this.aM()},
dl:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.q(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
e1:function(a){var t,s,r
if(this.ch==null)return
for(t=J.q(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.F(P.p("removeRange"))
P.jg(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cA:function(a,b){if(!this.r.v(0,a))return
this.db=b},
dN:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.E(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.ig(null,null)
this.cx=t}t.M(0,new H.h5(a,c))},
dM:function(a,b){var t
if(!this.r.v(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.am()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.ig(null,null)
this.cx=t}t.M(0,this.gdU())},
dO:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.X(a)
if(b!=null)P.X(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bz(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bg(t,t.r,null,null,[null]),r.c=t.e;r.q();)r.d.E(0,s)},
a5:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.a8(o)
p=H.af(o)
this.dO(q,p)
if(this.db){this.am()
if(this===u.globalState.e)throw o}}finally{this.cy=H.lH(r)
u.globalState.d=H.jT(t,"$isaM")
if(t!=null)$=t.gdS()
if(this.cx!=null)for(;n=this.cx,!n.gal(n);)this.cx.bY().$0()}return s},
bV:function(a){return this.b.h(0,a)},
d0:function(a,b){var t=this.b
if(t.C(0,a))throw H.c(P.bM("Registry: ports must be registered only once."))
t.i(0,a,b)},
aM:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.am()},
am:function(){var t,s,r
t=this.cx
if(t!=null)t.N(0)
for(t=this.b,s=t.gcj(t),s=s.gA(s);s.q();)s.gt(s).d1()
t.N(0)
this.c.N(0)
u.globalState.z.a9(0,this.a)
this.dx.N(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].E(0,t[r+1])
this.ch=null}},
gdS:function(){return this.d},
gdv:function(){return this.e}}
H.h5.prototype={
$0:function(){this.a.E(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.fP.prototype={
dA:function(){var t=this.a
if(t.b===t.c)return
return t.bY()},
c0:function(){var t,s,r
t=this.dA()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.C(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gal(s)}else s=!1
else s=!1
else s=!1
if(s)H.F(P.bM("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gal(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.ar(["command","close"])
r=new H.V(!0,P.aN(null,P.u)).H(r)
s.toString
self.postMessage(r)}return!1}t.e_()
return!0},
bs:function(){if(self.window!=null)new H.fQ(this).$0()
else for(;this.c0(););},
aa:function(){var t,s,r,q,p
if(!u.globalState.x)this.bs()
else try{this.bs()}catch(r){t=H.a8(r)
s=H.af(r)
q=u.globalState.Q
p=P.ar(["command","error","msg",H.e(t)+"\n"+H.e(s)])
p=new H.V(!0,P.aN(null,P.u)).H(p)
q.toString
self.postMessage(p)}}}
H.fQ.prototype={
$0:function(){if(!this.a.c0())return
P.lk(C.r,this)},
$S:function(){return{func:1,v:true}}}
H.az.prototype={
e_:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.a5(this.b)}}
H.hb.prototype={}
H.e8.prototype={
$0:function(){H.kX(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.e9.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.aS(s,{func:1,args:[P.H,P.H]}))s.$2(this.e,this.d)
else if(H.aS(s,{func:1,args:[P.H]}))s.$1(this.e)
else s.$0()}t.aM()},
$S:function(){return{func:1,v:true}}}
H.fL.prototype={}
H.aO.prototype={
E:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.lv(b)
if(t.gdv()===s){s=J.O(r)
switch(s.h(r,0)){case"pause":t.bx(s.h(r,1),s.h(r,2))
break
case"resume":t.e2(s.h(r,1))
break
case"add-ondone":t.dl(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.e1(s.h(r,1))
break
case"set-errors-fatal":t.cA(s.h(r,1),s.h(r,2))
break
case"ping":t.dN(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.dM(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.a9(0,s)
break}return}u.globalState.f.a.M(0,new H.az(t,new H.hd(this,r),"receive"))},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aO){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.hd.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.cZ(0,this.b)},
$S:function(){return{func:1}}}
H.bp.prototype={
E:function(a,b){var t,s,r
t=P.ar(["command","message","port",this,"msg",b])
s=new H.V(!0,P.aN(null,P.u)).H(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bp){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.cH((this.b<<16^this.a<<8)>>>0,this.c)}}
H.c7.prototype={
d1:function(){this.c=!0
this.b=null},
cZ:function(a,b){if(this.c)return
this.b.$1(b)},
$islb:1}
H.fn.prototype={
cU:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.M(0,new H.az(s,new H.fo(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.hw()
this.c=self.setTimeout(H.bt(new H.fp(this,b),0),a)}else{H.b(a>0)
throw H.c(P.p("Timer greater than 0."))}}}
H.fo.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.fp.prototype={
$0:function(){var t=this.a
t.c=null
H.hM()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ah.prototype={
gu:function(a){var t=this.a
t=C.b.aJ(t,0)^C.b.J(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
v:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ah){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.V.prototype={
H:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.q(a)
if(!!t.$isb6)return["buffer",a]
if(!!t.$isaK)return["typed",a]
if(!!t.$isn)return this.cu(a)
if(!!t.$iskU){r=this.gcr()
q=t.gG(a)
q=H.ih(q,r,H.ae(q,"a_",0),null)
q=P.j9(q,!0,H.ae(q,"a_",0))
t=t.gcj(a)
t=H.ih(t,r,H.ae(t,"a_",0),null)
return["map",q,P.j9(t,!0,H.ae(t,"a_",0))]}if(!!t.$isj7)return this.cv(a)
if(!!t.$isa)this.cg(a)
if(!!t.$islb)this.ab(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isaO)return this.cw(a)
if(!!t.$isbp)return this.cz(a)
if(!!t.$isaj){p=a.$static_name
if(p==null)this.ab(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isah)return["capability",a.a]
if(!(a instanceof P.B))this.cg(a)
return["dart",u.classIdExtractor(a),this.ct(u.classFieldsExtractor(a))]},
ab:function(a,b){throw H.c(P.p((b==null?"Can't transmit:":b)+" "+H.e(a)))},
cg:function(a){return this.ab(a,null)},
cu:function(a){var t
H.b(typeof a!=="string")
t=this.cs(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ab(a,"Can't serialize indexable: ")},
cs:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.H(a[s])
return t},
ct:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.H(a[t]))
return a},
cv:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ab(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.H(a[t[r]])
return["js-object",t,s]},
cz:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cw:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.ay.prototype={
O:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.iS("Bad serialized message: "+H.e(a)))
switch(C.a.gdJ(a)){case"ref":H.b(J.A(a[0],"ref"))
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
return J.an(H.E(this.a4(t),[null]))
case"extendable":H.b(J.A(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.E(this.a4(t),[null])
case"mutable":H.b(J.A(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.a4(t)
case"const":H.b(J.A(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
return J.an(H.E(this.a4(t),[null]))
case"map":return this.dD(a)
case"sendport":return this.dE(a)
case"raw sendport":H.b(J.A(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.dC(a)
case"function":H.b(J.A(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.b(J.A(a[0],"capability"))
return new H.ah(a[1])
case"dart":H.b(J.A(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.l(this.b,q)
this.a4(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.e(a))}},
a4:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.O(a[t]))
return a},
dD:function(a){var t,s,r,q,p
H.b(J.A(a[0],"map"))
t=a[1]
s=a[2]
r=P.S()
C.a.l(this.b,r)
t=J.ks(t,this.gdB()).e7(0)
for(q=J.O(s),p=0;p<t.length;++p)r.i(0,t[p],this.O(q.h(s,p)))
return r},
dE:function(a){var t,s,r,q,p,o,n
H.b(J.A(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.bV(r)
if(o==null)return
n=new H.aO(o,s)}else n=new H.bp(t,r,s)
C.a.l(this.b,n)
return n},
dC:function(a){var t,s,r,q,p,o
H.b(J.A(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.O(t),p=J.O(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.O(p.h(s,o))
return r}}
H.eV.prototype={}
H.ft.prototype={
K:function(a){var t,s,r
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
H.eD.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.e(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.ee.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.e(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.e(this.a)+")"}}
H.fy.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.hY.prototype={
$1:function(a){if(!!J.q(a).$isaF)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.cJ.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isaL:1}
H.hH.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.hI.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.hJ.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.hK.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.hL.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.aj.prototype={
k:function(a){return"Closure '"+H.b7(this).trim()+"'"},
$isi7:1,
geb:function(){return this},
$D:null}
H.fi.prototype={}
H.f9.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.aY.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.aY))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.as(this.a)
else s=typeof t!=="object"?J.aW(t):H.as(t)
return(s^H.as(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.b7(t)+"'")}}
H.fv.prototype={
k:function(a){return this.a}}
H.de.prototype={
k:function(a){return this.a}}
H.eZ.prototype={
k:function(a){return"RuntimeError: "+H.e(this.a)}}
H.fG.prototype={
k:function(a){return C.i.X("Assertion failed: ",P.bL(this.a))}}
H.ab.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.aW(this.a)},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.ab){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.a0.prototype={
gj:function(a){return this.a},
gal:function(a){return this.a===0},
gG:function(a){return new H.eh(this,[H.aT(this,0)])},
gcj:function(a){return H.ih(this.gG(this),new H.ed(this),H.aT(this,0),H.aT(this,1))},
C:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bl(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bl(s,b)}else return this.dP(b)},
dP:function(a){var t=this.d
if(t==null)return!1
return this.a7(this.ag(t,this.a6(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.a3(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.a3(r,b)
return s==null?null:s.b}else return this.dQ(b)},
dQ:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.ag(t,this.a6(a))
r=this.a7(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aF()
this.b=t}this.bg(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aF()
this.c=s}this.bg(s,b,c)}else{r=this.d
if(r==null){r=this.aF()
this.d=r}q=this.a6(b)
p=this.ag(r,q)
if(p==null)this.aI(r,q,[this.aG(b,c)])
else{o=this.a7(p,b)
if(o>=0)p[o].b=c
else p.push(this.aG(b,c))}}},
a9:function(a,b){if(typeof b==="string")return this.br(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.br(this.c,b)
else return this.dR(b)},
dR:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.ag(t,this.a6(a))
r=this.a7(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bv(q)
return q.b},
N:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aE()}},
ak:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.ak(this))
t=t.c}},
bg:function(a,b,c){var t=this.a3(a,b)
if(t==null)this.aI(a,b,this.aG(b,c))
else t.b=c},
br:function(a,b){var t
if(a==null)return
t=this.a3(a,b)
if(t==null)return
this.bv(t)
this.bm(a,b)
return t.b},
aE:function(){this.r=this.r+1&67108863},
aG:function(a,b){var t,s
t=new H.eg(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.aE()
return t},
bv:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.aE()},
a6:function(a){return J.aW(a)&0x3ffffff},
a7:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.A(a[s].a,b))return s
return-1},
k:function(a){return P.ja(this)},
a3:function(a,b){return a[b]},
ag:function(a,b){return a[b]},
aI:function(a,b,c){H.b(c!=null)
a[b]=c},
bm:function(a,b){delete a[b]},
bl:function(a,b){return this.a3(a,b)!=null},
aF:function(){var t=Object.create(null)
this.aI(t,"<non-identifier-key>",t)
this.bm(t,"<non-identifier-key>")
return t},
$iskU:1}
H.ed.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.eg.prototype={}
H.eh.prototype={
gj:function(a){return this.a.a},
gA:function(a){var t,s
t=this.a
s=new H.ei(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.ei.prototype={
gt:function(a){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ak(t))
else{t=this.c
if(t==null){this.sbf(null)
return!1}else{this.sbf(t.a)
this.c=this.c.c
return!0}}},
sbf:function(a){this.d=a}}
H.hD.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.hE.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.v]}}}
H.hF.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.v]}}}
H.b6.prototype={
gw:function(a){return C.a1},
$isb6:1}
H.aK.prototype={$isaK:1}
H.ev.prototype={
gw:function(a){return C.a2}}
H.c_.prototype={
gj:function(a){return a.length},
$isn:1,
$asn:function(){},
$iso:1,
$aso:function(){}}
H.c0.prototype={
h:function(a,b){H.a6(b,a,a.length)
return a[b]},
i:function(a,b,c){H.a6(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.M]},
$asaG:function(){return[P.M]},
$asl:function(){return[P.M]},
$isi:1,
$asi:function(){return[P.M]}}
H.c1.prototype={
i:function(a,b,c){H.a6(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.u]},
$asaG:function(){return[P.u]},
$asl:function(){return[P.u]},
$isi:1,
$asi:function(){return[P.u]}}
H.bZ.prototype={
gw:function(a){return C.a3},
$isdY:1}
H.ew.prototype={
gw:function(a){return C.a4}}
H.ex.prototype={
gw:function(a){return C.a5},
h:function(a,b){H.a6(b,a,a.length)
return a[b]}}
H.ey.prototype={
gw:function(a){return C.a6},
h:function(a,b){H.a6(b,a,a.length)
return a[b]},
$isj4:1}
H.ez.prototype={
gw:function(a){return C.a7},
h:function(a,b){H.a6(b,a,a.length)
return a[b]}}
H.eA.prototype={
gw:function(a){return C.ab},
h:function(a,b){H.a6(b,a,a.length)
return a[b]},
$isjw:1}
H.eB.prototype={
gw:function(a){return C.ac},
h:function(a,b){H.a6(b,a,a.length)
return a[b]},
$isjx:1}
H.c2.prototype={
gw:function(a){return C.ad},
gj:function(a){return a.length},
h:function(a,b){H.a6(b,a,a.length)
return a[b]}}
H.eC.prototype={
gw:function(a){return C.ae},
gj:function(a){return a.length},
h:function(a,b){H.a6(b,a,a.length)
return a[b]},
$isjy:1}
H.bh.prototype={}
H.bi.prototype={}
H.bj.prototype={}
H.bk.prototype={}
P.fI.prototype={
$1:function(a){var t,s
H.hM()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.fH.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.hw()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.fJ.prototype={
$0:function(){H.hM()
this.a.$0()},
$S:function(){return{func:1}}}
P.fK.prototype={
$0:function(){H.hM()
this.a.$0()},
$S:function(){return{func:1}}}
P.i5.prototype={}
P.fM.prototype={}
P.hl.prototype={
du:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.li("Future already completed"))
t.aA(b)}}
P.cr.prototype={
dX:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.aS(this.d,a.a)},
dL:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.aS(s,{func:1,args:[P.B,P.aL]}))return t.e4(s,a.a,a.b)
else return t.aS(s,a.a)}}
P.a5.prototype={
c5:function(a,b){var t,s,r
t=$.z
if(t!==C.f){t.toString
if(b!=null)b=P.lz(b,t)}s=new P.a5(0,t,null,[null])
r=b==null?1:3
this.bh(new P.cr(null,s,r,a,b,[H.aT(this,0),null]))
return s},
c4:function(a){return this.c5(a,null)},
aw:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
bh:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.jT(this.c,"$iscr")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.bh(a)
return}this.aw(t)}H.b(this.a>=4)
t=this.b
t.toString
P.hq(null,null,t,new P.fV(this,a))}},
bq:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bq(a)
return}this.aw(s)}H.b(this.a>=4)
t.a=this.ah(a)
s=this.b
s.toString
P.hq(null,null,s,new P.fZ(t,this))}},
aH:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.ah(t)},
ah:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aA:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.hr(a,"$ise0",t,"$ase0")
if(s){t=H.hr(a,"$isa5",t,null)
if(t)P.jC(a,this)
else P.ls(a,this)}else{r=this.aH()
H.b(this.a<4)
this.a=4
this.c=a
P.bf(this,r)}},
ad:function(a,b){var t
H.b(this.a<4)
t=this.aH()
H.b(this.a<4)
this.a=8
this.c=new P.aC(a,b)
P.bf(this,t)},
d3:function(a){return this.ad(a,null)},
$ise0:1,
gaK:function(){return this.a},
gdg:function(){return this.c}}
P.fV.prototype={
$0:function(){P.bf(this.a,this.b)},
$S:function(){return{func:1}}}
P.fZ.prototype={
$0:function(){P.bf(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.fW.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.aA(a)},
$S:function(a){return{func:1,args:[,]}}}
P.fX.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.ad(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.fY.prototype={
$0:function(){this.a.ad(this.b,this.c)},
$S:function(){return{func:1}}}
P.h1.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.c_(q.d)}catch(n){s=H.a8(n)
r=H.af(n)
if(this.d){q=this.a.a
H.b(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.b(q.a===8)
p.b=q.c}else p.b=new P.aC(s,r)
p.a=!0
return}if(!!J.q(t).$ise0){if(t instanceof P.a5&&t.gaK()>=4){if(t.gaK()===8){q=t
H.b(q.gaK()===8)
p=this.b
p.b=q.gdg()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.c4(new P.h2(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.h2.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.h0.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.aS(r.d,this.c)}catch(q){t=H.a8(q)
s=H.af(q)
r=this.a
r.b=new P.aC(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.h_.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.dX(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.dL(t)
p.a=!1}}catch(o){s=H.a8(o)
r=H.af(o)
q=this.a
p=q.a
H.b(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.b(q.a===8)
m.b=q.c}else m.b=new P.aC(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.cj.prototype={}
P.fc.prototype={
gj:function(a){var t,s
t={}
s=new P.a5(0,$.z,null,[P.u])
t.a=0
this.dV(new P.fe(t),!0,new P.ff(t,s),s.gd2())
return s}}
P.fe.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.ff.prototype={
$0:function(){this.b.aA(this.a.a)},
$S:function(){return{func:1}}}
P.fd.prototype={}
P.ij.prototype={}
P.aC.prototype={
k:function(a){return H.e(this.a)},
$isaF:1}
P.hm.prototype={}
P.hp.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.c4()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.hf.prototype={
e5:function(a){var t,s,r
try{if(C.f===$.z){a.$0()
return}P.jF(null,null,this,a)}catch(r){t=H.a8(r)
s=H.af(r)
P.ho(null,null,this,t,s)}},
e6:function(a,b){var t,s,r
try{if(C.f===$.z){a.$1(b)
return}P.jG(null,null,this,a,b)}catch(r){t=H.a8(r)
s=H.af(r)
P.ho(null,null,this,t,s)}},
dq:function(a){return new P.hh(this,a)},
aN:function(a){return new P.hg(this,a)},
dr:function(a){return new P.hi(this,a)},
h:function(a,b){return},
c_:function(a){if($.z===C.f)return a.$0()
return P.jF(null,null,this,a)},
aS:function(a,b){if($.z===C.f)return a.$1(b)
return P.jG(null,null,this,a,b)},
e4:function(a,b,c){if($.z===C.f)return a.$2(b,c)
return P.lA(null,null,this,a,b,c)}}
P.hh.prototype={
$0:function(){return this.a.c_(this.b)},
$S:function(){return{func:1}}}
P.hg.prototype={
$0:function(){return this.a.e5(this.b)},
$S:function(){return{func:1}}}
P.hi.prototype={
$1:function(a){return this.a.e6(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.h9.prototype={
a6:function(a){return H.m_(a)&0x3ffffff},
a7:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.h7.prototype={
gA:function(a){var t=new P.bg(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
S:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.d4(b)},
d4:function(a){var t=this.d
if(t==null)return!1
return this.af(t[this.ae(a)],a)>=0},
bV:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.S(0,a)?a:null
else return this.dd(a)},
dd:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ae(a)]
r=this.af(s,a)
if(r<0)return
return J.aV(s,r).gd6()},
l:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.is()
this.b=t}return this.bi(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.is()
this.c=s}return this.bi(s,b)}else return this.M(0,b)},
M:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.is()
this.d=t}s=this.ae(b)
r=t[s]
if(r==null){q=[this.az(b)]
H.b(q!=null)
t[s]=q}else{if(this.af(r,b)>=0)return!1
r.push(this.az(b))}return!0},
a9:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bj(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bj(this.c,b)
else return this.de(0,b)},
de:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ae(b)]
r=this.af(s,b)
if(r<0)return!1
this.bk(s.splice(r,1)[0])
return!0},
N:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.ay()}},
bi:function(a,b){var t
if(a[b]!=null)return!1
t=this.az(b)
H.b(!0)
a[b]=t
return!0},
bj:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bk(t)
delete a[b]
return!0},
ay:function(){this.r=this.r+1&67108863},
az:function(a){var t,s
t=new P.h8(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.ay()
return t},
bk:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.ay()},
ae:function(a){return J.aW(a)&0x3ffffff},
af:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.A(a[s].a,b))return s
return-1}}
P.h8.prototype={
gd6:function(){return this.a}}
P.bg.prototype={
gt:function(a){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ak(t))
else{t=this.c
if(t==null){this.sa1(null)
return!1}else{this.sa1(t.a)
this.c=this.c.b
return!0}}},
sa1:function(a){this.d=a}}
P.h4.prototype={}
P.ie.prototype={$isj:1}
P.l.prototype={
gA:function(a){return new H.bU(a,this.gj(a),0,null,[H.ae(a,"l",0)])},
p:function(a,b){return this.h(a,b)},
bW:function(a,b){return new H.bW(a,b,[H.ae(a,"l",0),null])},
dK:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.c(P.ak(a))}return s},
k:function(a){return P.ea(a,"[","]")}}
P.em.prototype={}
P.en.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.e(a)
t.a=s+": "
t.a+=H.e(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.b4.prototype={
ak:function(a,b){var t,s
for(t=J.by(this.gG(a));t.q();){s=t.gt(t)
b.$2(s,this.h(a,s))}},
gj:function(a){return J.aX(this.gG(a))},
k:function(a){return P.ja(a)}}
P.ej.prototype={
cP:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sbt(H.E(t,[b]))},
gA:function(a){return new P.ha(this,this.c,this.d,this.b,null,this.$ti)},
gal:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
p:function(a,b){var t,s
t=this.gj(this)
if(0>b||b>=t)H.F(P.y(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
N:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.ea(this,"{","}")},
bY:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.i8());++this.d
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
if(this.b===t)this.bo();++this.d},
bo:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.E(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.b0(s,0,q,t,r)
C.a.b0(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbt(s)},
sbt:function(a){this.a=a}}
P.ha.prototype={
gt:function(a){return this.e},
q:function(){var t,s
t=this.a
if(this.c!==t.d)H.F(P.ak(t))
s=this.d
if(s===this.b){this.sa1(null)
return!1}this.sa1(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sa1:function(a){this.e=a}}
P.f1.prototype={
k:function(a){return P.ea(this,"{","}")},
$isj:1}
P.f0.prototype={}
P.aB.prototype={}
P.C.prototype={}
P.b_.prototype={
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.b_))return!1
return this.a===b.a&&this.b===b.b},
L:function(a,b){return C.b.L(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aJ(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.kM(H.la(this))
s=P.bG(H.l8(this))
r=P.bG(H.l4(this))
q=P.bG(H.l5(this))
p=P.bG(H.l7(this))
o=P.bG(H.l9(this))
n=P.kN(H.l6(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isC:1,
$asC:function(){return[P.b_]}}
P.M.prototype={}
P.al.prototype={
aq:function(a,b){return C.b.aq(this.a,b.gd5())},
ap:function(a,b){return C.b.ap(this.a,b.gd5())},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.al))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
L:function(a,b){return C.b.L(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.dy()
s=this.a
if(s<0)return"-"+new P.al(0-s).k(0)
r=t.$1(C.b.J(s,6e7)%60)
q=t.$1(C.b.J(s,1e6)%60)
p=new P.dx().$1(s%1e6)
return""+C.b.J(s,36e8)+":"+H.e(r)+":"+H.e(q)+"."+H.e(p)},
$isC:1,
$asC:function(){return[P.al]}}
P.dx.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.v,args:[P.u]}}}
P.dy.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.v,args:[P.u]}}}
P.aF.prototype={}
P.bB.prototype={
k:function(a){return"Assertion failed"}}
P.c4.prototype={
k:function(a){return"Throw of null."}}
P.a9.prototype={
gaC:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaB:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+t
q=this.gaC()+s+r
if(!this.a)return q
p=this.gaB()
o=P.bL(this.b)
return q+p+": "+H.e(o)}}
P.c6.prototype={
gaC:function(){return"RangeError"},
gaB:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.e(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.e(t)
else if(r>t)s=": Not in range "+H.e(t)+".."+H.e(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.e(t)}return s}}
P.e7.prototype={
gaC:function(){return"RangeError"},
gaB:function(){H.b(this.a)
if(J.k3(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gj:function(a){return this.f}}
P.fz.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.fx.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.b9.prototype={
k:function(a){return"Bad state: "+this.a}}
P.dg.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.bL(t))+"."}}
P.cc.prototype={
k:function(a){return"Stack Overflow"},
$isaF:1}
P.dq.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.i6.prototype={}
P.fU.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.e(t)}}
P.dA.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.F(P.iT(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.jd(b,"expando$values")
return s==null?null:H.jd(s,t)},
k:function(a){return"Expando:"+H.e(this.b)}}
P.u.prototype={}
P.a_.prototype={
gj:function(a){var t,s
H.b(!this.$isj)
t=this.gA(this)
for(s=0;t.q();)++s
return s},
p:function(a,b){var t,s,r
if(b<0)H.F(P.b8(b,0,null,"index",null))
for(t=this.gA(this),s=0;t.q();){r=t.gt(t)
if(b===s)return r;++s}throw H.c(P.y(b,this,"index",null,s))},
k:function(a){return P.l_(this,"(",")")}}
P.bQ.prototype={}
P.i.prototype={$isj:1}
P.aJ.prototype={}
P.H.prototype={
gu:function(a){return P.B.prototype.gu.call(this,this)},
k:function(a){return"null"}}
P.W.prototype={$isC:1,
$asC:function(){return[P.W]}}
P.B.prototype={constructor:P.B,$isB:1,
v:function(a,b){return this===b},
gu:function(a){return H.as(this)},
k:function(a){return"Instance of '"+H.b7(this)+"'"},
gw:function(a){return new H.ab(H.hA(this),null)},
toString:function(){return this.k(this)}}
P.aL.prototype={}
P.v.prototype={$isC:1,
$asC:function(){return[P.v]}}
P.ba.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gR:function(){return this.a}}
P.im.prototype={}
W.h.prototype={}
W.bA.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
W.d7.prototype={
gj:function(a){return a.length}}
W.d8.prototype={
k:function(a){return String(a)}}
W.d9.prototype={
k:function(a){return String(a)}}
W.bC.prototype={
aU:function(a,b,c){if(c!=null)return this.d8(a,b,P.lK(c,null))
return this.d9(a,b)},
cq:function(a,b){return this.aU(a,b,null)},
d8:function(a,b,c){return a.getContext(b,c)},
d9:function(a,b){return a.getContext(b)}}
W.bD.prototype={
ai:function(a,b,c){return a.addColorStop(b,c)}}
W.bE.prototype={
bI:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
dI:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
ao:function(a){return P.ht(a.getContextAttributes())}}
W.ai.prototype={
gj:function(a){return a.length}}
W.dh.prototype={
gj:function(a){return a.length}}
W.di.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.dj.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
W.dk.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
W.aZ.prototype={
gj:function(a){return a.length}}
W.dl.prototype={}
W.Q.prototype={}
W.aE.prototype={}
W.dm.prototype={
gj:function(a){return a.length}}
W.dn.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
W.dp.prototype={
gj:function(a){return a.length}}
W.dr.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.ds.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
W.b0.prototype={
e0:function(a,b){return a.querySelector(b)}}
W.dt.prototype={
k:function(a){return String(a)}}
W.du.prototype={
gan:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
W.bH.prototype={
gan:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
W.bI.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[P.L]},
$isj:1,
$asj:function(){return[P.L]},
$iso:1,
$aso:function(){return[P.L]},
$asl:function(){return[P.L]},
$isi:1,
$asi:function(){return[P.L]},
$asm:function(){return[P.L]}}
W.bJ.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gW(a))+" x "+H.e(this.gT(a))},
v:function(a,b){var t
if(b==null)return!1
t=J.q(b)
if(!t.$isL)return!1
return a.left===t.gbT(b)&&a.top===t.gc6(b)&&this.gW(a)===t.gW(b)&&this.gT(a)===t.gT(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gW(a)
q=this.gT(a)
return W.jE(W.aA(W.aA(W.aA(W.aA(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gT:function(a){return a.height},
gbT:function(a){return a.left},
gc6:function(a){return a.top},
gW:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isL:1,
$asL:function(){}}
W.dv.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[P.v]},
$isj:1,
$asj:function(){return[P.v]},
$iso:1,
$aso:function(){return[P.v]},
$asl:function(){return[P.v]},
$isi:1,
$asi:function(){return[P.v]},
$asm:function(){return[P.v]}}
W.dw.prototype={
gj:function(a){return a.length}}
W.bK.prototype={
k:function(a){return a.localName}}
W.f.prototype={$isf:1}
W.d.prototype={
d_:function(a,b,c,d){return a.addEventListener(b,H.bt(c,1),!1)}}
W.dU.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.bN]},
$isj:1,
$asj:function(){return[W.bN]},
$iso:1,
$aso:function(){return[W.bN]},
$asl:function(){return[W.bN]},
$isi:1,
$asi:function(){return[W.bN]},
$asm:function(){return[W.bN]}}
W.dV.prototype={
gj:function(a){return a.length}}
W.e_.prototype={
gj:function(a){return a.length}}
W.e2.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
W.e3.prototype={
gj:function(a){return a.length}}
W.b1.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.x]},
$isj:1,
$asj:function(){return[W.x]},
$iso:1,
$aso:function(){return[W.x]},
$asl:function(){return[W.x]},
$isi:1,
$asi:function(){return[W.x]},
$asm:function(){return[W.x]}}
W.bP.prototype={}
W.e4.prototype={
E:function(a,b){return a.send(b)}}
W.b2.prototype={}
W.aq.prototype={$isaq:1}
W.ek.prototype={
k:function(a){return String(a)}}
W.el.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
W.eq.prototype={
gj:function(a){return a.length}}
W.es.prototype={
ec:function(a,b,c){return a.send(b,c)},
E:function(a,b){return a.send(b)}}
W.b5.prototype={}
W.et.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.bY]},
$isj:1,
$asj:function(){return[W.bY]},
$iso:1,
$aso:function(){return[W.bY]},
$asl:function(){return[W.bY]},
$isi:1,
$asi:function(){return[W.bY]},
$asm:function(){return[W.bY]}}
W.G.prototype={$isG:1}
W.x.prototype={
k:function(a){var t=a.nodeValue
return t==null?this.cF(a):t}}
W.c3.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.x]},
$isj:1,
$asj:function(){return[W.x]},
$iso:1,
$aso:function(){return[W.x]},
$asl:function(){return[W.x]},
$isi:1,
$asi:function(){return[W.x]},
$asm:function(){return[W.x]}}
W.a1.prototype={
gj:function(a){return a.length}}
W.eO.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.a1]},
$isj:1,
$asj:function(){return[W.a1]},
$iso:1,
$aso:function(){return[W.a1]},
$asl:function(){return[W.a1]},
$isi:1,
$asi:function(){return[W.a1]},
$asm:function(){return[W.a1]}}
W.eR.prototype={
E:function(a,b){return a.send(b)}}
W.c8.prototype={
E:function(a,b){return a.send(b)}}
W.f_.prototype={
gj:function(a){return a.length}}
W.aa.prototype={}
W.f5.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.ca]},
$isj:1,
$asj:function(){return[W.ca]},
$iso:1,
$aso:function(){return[W.ca]},
$asl:function(){return[W.ca]},
$isi:1,
$asi:function(){return[W.ca]},
$asm:function(){return[W.ca]}}
W.f7.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.cb]},
$isj:1,
$asj:function(){return[W.cb]},
$iso:1,
$aso:function(){return[W.cb]},
$asl:function(){return[W.cb]},
$isi:1,
$asi:function(){return[W.cb]},
$asm:function(){return[W.cb]}}
W.a2.prototype={
gj:function(a){return a.length}}
W.fa.prototype={
h:function(a,b){return this.bn(a,b)},
ak:function(a,b){var t,s
for(t=0;!0;++t){s=this.dc(a,t)
if(s==null)return
b.$2(s,this.bn(a,s))}},
gG:function(a){var t=H.E([],[P.v])
this.ak(a,new W.fb(t))
return t},
gj:function(a){return a.length},
bn:function(a,b){return a.getItem(b)},
dc:function(a,b){return a.key(b)},
$asb4:function(){return[P.v,P.v]}}
W.fb.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.fj.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.cf]},
$isj:1,
$asj:function(){return[W.cf]},
$iso:1,
$aso:function(){return[W.cf]},
$asl:function(){return[W.cf]},
$isi:1,
$asi:function(){return[W.cf]},
$asm:function(){return[W.cf]}}
W.fk.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.ce]},
$isj:1,
$asj:function(){return[W.ce]},
$iso:1,
$aso:function(){return[W.ce]},
$asl:function(){return[W.ce]},
$isi:1,
$asi:function(){return[W.ce]},
$asm:function(){return[W.ce]}}
W.fm.prototype={
gj:function(a){return a.length}}
W.at.prototype={$isat:1}
W.fq.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.ci]},
$isj:1,
$asj:function(){return[W.ci]},
$iso:1,
$aso:function(){return[W.ci]},
$asl:function(){return[W.ci]},
$isi:1,
$asi:function(){return[W.ci]},
$asm:function(){return[W.ci]}}
W.fr.prototype={
gj:function(a){return a.length}}
W.au.prototype={}
W.fA.prototype={
k:function(a){return String(a)}}
W.fC.prototype={
gm:function(a){return a.x},
gB:function(a){return a.z}}
W.fD.prototype={
gj:function(a){return a.length}}
W.fE.prototype={
E:function(a,b){return a.send(b)}}
W.ax.prototype={
gdz:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.p("deltaY is not supported"))},
$isax:1}
W.be.prototype={
gdm:function(a){var t,s
t=P.W
s=new P.a5(0,$.z,null,[t])
this.d7(a)
this.df(a,W.jJ(new W.fF(new P.hl(s,[t]))))
return s},
df:function(a,b){return a.requestAnimationFrame(H.bt(b,1))},
d7:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.fF.prototype={
$1:function(a){this.a.du(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.io.prototype={}
W.fN.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.bF]},
$isj:1,
$asj:function(){return[W.bF]},
$iso:1,
$aso:function(){return[W.bF]},
$asl:function(){return[W.bF]},
$isi:1,
$asi:function(){return[W.bF]},
$asm:function(){return[W.bF]}}
W.fO.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
v:function(a,b){var t
if(b==null)return!1
t=J.q(b)
if(!t.$isL)return!1
return a.left===t.gbT(b)&&a.top===t.gc6(b)&&a.width===t.gW(b)&&a.height===t.gT(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.jE(W.aA(W.aA(W.aA(W.aA(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gT:function(a){return a.height},
gW:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.h3.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.bO]},
$isj:1,
$asj:function(){return[W.bO]},
$iso:1,
$aso:function(){return[W.bO]},
$asl:function(){return[W.bO]},
$isi:1,
$asi:function(){return[W.bO]},
$asm:function(){return[W.bO]}}
W.cy.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.x]},
$isj:1,
$asj:function(){return[W.x]},
$iso:1,
$aso:function(){return[W.x]},
$asl:function(){return[W.x]},
$isi:1,
$asi:function(){return[W.x]},
$asm:function(){return[W.x]}}
W.hj.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.a2]},
$isj:1,
$asj:function(){return[W.a2]},
$iso:1,
$aso:function(){return[W.a2]},
$asl:function(){return[W.a2]},
$isi:1,
$asi:function(){return[W.a2]},
$asm:function(){return[W.a2]}}
W.hk.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.cd]},
$isj:1,
$asj:function(){return[W.cd]},
$iso:1,
$aso:function(){return[W.cd]},
$asl:function(){return[W.cd]},
$isi:1,
$asi:function(){return[W.cd]},
$asm:function(){return[W.cd]}}
W.fR.prototype={
dV:function(a,b,c,d){return W.U(this.a,this.b,a,!1,H.aT(this,0))}}
W.ir.prototype={}
W.fS.prototype={
cX:function(a,b,c,d,e){this.dj()},
dj:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.k4(r,this.c,t,!1)}}}
W.fT.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.m.prototype={
gA:function(a){return new W.dX(a,this.gj(a),-1,null,[H.ae(a,"m",0)])}}
W.dX.prototype={
q:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbp(J.aV(this.a,t))
this.c=t
return!0}this.sbp(null)
this.c=s
return!1},
gt:function(a){return this.d},
sbp:function(a){this.d=a}}
W.ck.prototype={}
W.cl.prototype={}
W.cm.prototype={}
W.cn.prototype={}
W.co.prototype={}
W.cp.prototype={}
W.cq.prototype={}
W.cs.prototype={}
W.ct.prototype={}
W.cw.prototype={}
W.cx.prototype={}
W.cz.prototype={}
W.cA.prototype={}
W.cD.prototype={}
W.cE.prototype={}
W.bl.prototype={}
W.bm.prototype={}
W.cF.prototype={}
W.cG.prototype={}
W.cK.prototype={}
W.cN.prototype={}
W.cO.prototype={}
W.bn.prototype={}
W.bo.prototype={}
W.cP.prototype={}
W.cQ.prototype={}
W.cT.prototype={}
W.cU.prototype={}
W.cV.prototype={}
W.cW.prototype={}
W.cX.prototype={}
W.cY.prototype={}
W.cZ.prototype={}
W.d_.prototype={}
W.d0.prototype={}
W.d1.prototype={}
P.hs.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.h6.prototype={
dZ:function(){return Math.random()}}
P.he.prototype={}
P.L.prototype={}
P.dB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dC.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dD.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dE.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dF.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dG.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dH.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dI.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dJ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dK.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dL.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dM.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dN.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dO.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
P.dP.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dQ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
P.dR.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dS.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dW.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dZ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.R.prototype={}
P.Z.prototype={}
P.e5.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ef.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.id]},
$asl:function(){return[P.id]},
$isi:1,
$asi:function(){return[P.id]},
$asm:function(){return[P.id]}}
P.ep.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eE.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.ii]},
$asl:function(){return[P.ii]},
$isi:1,
$asi:function(){return[P.ii]},
$asm:function(){return[P.ii]}}
P.eL.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eP.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eQ.prototype={
gj:function(a){return a.length}}
P.eT.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eU.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fg.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.v]},
$asl:function(){return[P.v]},
$isi:1,
$asi:function(){return[P.v]},
$asm:function(){return[P.v]}}
P.r.prototype={}
P.fh.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bb.prototype={}
P.bc.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fs.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.il]},
$asl:function(){return[P.il]},
$isi:1,
$asi:function(){return[P.il]},
$asm:function(){return[P.il]}}
P.fB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.cu.prototype={}
P.cv.prototype={}
P.cB.prototype={}
P.cC.prototype={}
P.cL.prototype={}
P.cM.prototype={}
P.cR.prototype={}
P.cS.prototype={}
P.db.prototype={
gj:function(a){return a.length}}
P.dc.prototype={
gj:function(a){return a.length}}
P.aD.prototype={}
P.eF.prototype={
gj:function(a){return a.length}}
P.eX.prototype={
bw:function(a,b){return a.activeTexture(b)},
by:function(a,b,c){return a.attachShader(b,c)},
bz:function(a,b,c){return a.bindBuffer(b,c)},
bA:function(a,b,c){return a.bindTexture(b,c)},
bB:function(a,b){return a.blendEquation(b)},
bC:function(a,b,c){return a.blendFunc(b,c)},
bD:function(a,b,c,d){return a.bufferData(b,c,d)},
bE:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bF:function(a,b){return a.compileShader(b)},
bG:function(a){return a.createBuffer()},
bH:function(a){return a.createProgram()},
bJ:function(a,b){return a.createShader(b)},
bK:function(a){return a.createTexture()},
bM:function(a,b){return a.depthMask(b)},
bN:function(a,b){return a.disable(b)},
bO:function(a,b,c,d){return a.drawArrays(b,c,d)},
bP:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bQ:function(a,b){return a.enable(b)},
bR:function(a,b){return a.enableVertexAttribArray(b)},
ao:function(a){return P.ht(a.getContextAttributes())},
aV:function(a){return a.getError()},
aW:function(a,b){return a.getProgramInfoLog(b)},
aX:function(a,b,c){return a.getProgramParameter(b,c)},
aY:function(a,b){return a.getShaderInfoLog(b)},
aZ:function(a,b,c){return a.getShaderParameter(b,c)},
b_:function(a,b,c){return a.getUniformLocation(b,c)},
bU:function(a,b){return a.linkProgram(b)},
bX:function(a,b,c){return a.pixelStorei(b,c)},
b1:function(a,b,c){return a.shaderSource(b,c)},
b2:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aT:function(a,b,c,d,e,f,g,h,i,j){this.aL(a,b,c,d,e,f,g)
return},
c1:function(a,b,c,d,e,f,g){return this.aT(a,b,c,d,e,f,g,null,null,null)},
aL:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c2:function(a,b,c,d){return a.texParameterf(b,c,d)},
c3:function(a,b,c,d){return a.texParameteri(b,c,d)},
c7:function(a,b,c){return a.uniform1f(b,c)},
c8:function(a,b,c){return a.uniform1fv(b,c)},
c9:function(a,b,c){return a.uniform1i(b,c)},
ca:function(a,b,c){return a.uniform1iv(b,c)},
cb:function(a,b,c){return a.uniform2fv(b,c)},
cc:function(a,b,c){return a.uniform3fv(b,c)},
cd:function(a,b,c){return a.uniform4fv(b,c)},
ce:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cf:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ci:function(a,b){return a.useProgram(b)},
ck:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cm:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.eY.prototype={
dn:function(a,b){return a.beginTransformFeedback(b)},
ds:function(a,b){return a.bindVertexArray(b)},
dw:function(a){return a.createVertexArray()},
dF:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dG:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dH:function(a){return a.endTransformFeedback()},
e9:function(a,b,c,d){this.di(a,b,c,d)
return},
di:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
ea:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bw:function(a,b){return a.activeTexture(b)},
by:function(a,b,c){return a.attachShader(b,c)},
bz:function(a,b,c){return a.bindBuffer(b,c)},
bA:function(a,b,c){return a.bindTexture(b,c)},
bB:function(a,b){return a.blendEquation(b)},
bC:function(a,b,c){return a.blendFunc(b,c)},
bD:function(a,b,c,d){return a.bufferData(b,c,d)},
bE:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bF:function(a,b){return a.compileShader(b)},
bG:function(a){return a.createBuffer()},
bH:function(a){return a.createProgram()},
bJ:function(a,b){return a.createShader(b)},
bK:function(a){return a.createTexture()},
bM:function(a,b){return a.depthMask(b)},
bN:function(a,b){return a.disable(b)},
bO:function(a,b,c,d){return a.drawArrays(b,c,d)},
bP:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bQ:function(a,b){return a.enable(b)},
bR:function(a,b){return a.enableVertexAttribArray(b)},
ao:function(a){return P.ht(a.getContextAttributes())},
aV:function(a){return a.getError()},
aW:function(a,b){return a.getProgramInfoLog(b)},
aX:function(a,b,c){return a.getProgramParameter(b,c)},
aY:function(a,b){return a.getShaderInfoLog(b)},
aZ:function(a,b,c){return a.getShaderParameter(b,c)},
b_:function(a,b,c){return a.getUniformLocation(b,c)},
bU:function(a,b){return a.linkProgram(b)},
bX:function(a,b,c){return a.pixelStorei(b,c)},
b1:function(a,b,c){return a.shaderSource(b,c)},
b2:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aT:function(a,b,c,d,e,f,g,h,i,j){this.aL(a,b,c,d,e,f,g)
return},
c1:function(a,b,c,d,e,f,g){return this.aT(a,b,c,d,e,f,g,null,null,null)},
aL:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c2:function(a,b,c,d){return a.texParameterf(b,c,d)},
c3:function(a,b,c,d){return a.texParameteri(b,c,d)},
c7:function(a,b,c){return a.uniform1f(b,c)},
c8:function(a,b,c){return a.uniform1fv(b,c)},
c9:function(a,b,c){return a.uniform1i(b,c)},
ca:function(a,b,c){return a.uniform1iv(b,c)},
cb:function(a,b,c){return a.uniform2fv(b,c)},
cc:function(a,b,c){return a.uniform3fv(b,c)},
cd:function(a,b,c){return a.uniform4fv(b,c)},
ce:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cf:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ci:function(a,b){return a.useProgram(b)},
ck:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cm:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.f8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return P.ht(this.da(a,b))},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
da:function(a,b){return a.item(b)},
$isj:1,
$asj:function(){return[P.aJ]},
$asl:function(){return[P.aJ]},
$isi:1,
$asi:function(){return[P.aJ]},
$asm:function(){return[P.aJ]}}
P.cH.prototype={}
P.cI.prototype={}
B.hR.prototype={
$1:function(a){$.$get$hu().i(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.aq]}}}
B.hS.prototype={
$1:function(a){$.$get$hu().i(0,a.which,null)},
$S:function(a){return{func:1,args:[W.aq]}}}
B.hT.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.lI=t
$.lJ=C.b.a_(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.iD=s-C.b.J(window.innerWidth,2)
$.jV=-(t-C.b.J(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.G]}}}
B.hU.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bv=t-C.b.J(window.innerWidth,2)
$.bw=-(s-C.b.J(window.innerHeight,2))
if(a.button===2)$.$get$bu().i(0,"right",!0)
else $.$get$bu().i(0,"left",!0)},
$S:function(a){return{func:1,args:[W.G]}}}
B.hV.prototype={
$1:function(a){if(a.button===2)$.$get$bu().i(0,"right",null)
else $.$get$bu().i(0,"left",null)},
$S:function(a){return{func:1,args:[W.G]}}}
B.eG.prototype={
cQ:function(a,b,c,d){var t
d.toString
W.U(d,W.kP(d),new B.eH(this),!1,W.ax)
W.U(d,"mousemove",new B.eI(this),!1,W.G)
t=W.at
W.U(d,"touchstart",new B.eJ(),!1,t)
W.U(d,"touchmove",new B.eK(this),!1,t)
B.m3(null)}}
B.eH.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.aj.gdz(a)*r.k3
if(C.c.a_(r.fy,t)>0)r.fy=C.c.a_(r.fy,t)}catch(q){s=H.a8(q)
P.X(s)}},
$S:function(a){return{func:1,args:[W.ax]}}}
B.eI.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.a_($.iD,$.bv)*0.01
s=t.id
r=$.bw
q=$.jV
t.id=s+(r-q)*0.01
$.bv=$.iD
$.bw=q}},
$S:function(a){return{func:1,args:[W.G]}}}
B.eJ.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.V(t.clientX)
C.c.V(t.clientY)
$.bv=s
C.c.V(t.clientX)
$.bw=C.c.V(t.clientY)},
$S:function(a){return{func:1,args:[W.at]}}}
B.eK.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.V(t.clientX)
t=C.c.V(t.clientY)
r=this.a
r.go=r.go+C.b.a_(s,$.bv)*0.01
r.id=r.id+($.bw-t)*0.01
$.bv=s
$.bw=t},
$S:function(a){return{func:1,args:[W.at]}}}
G.eu.prototype={}
G.fw.prototype={
F:function(a,b){var t=this.d
if(H.a7(!t.C(0,a)))H.ad("uniform "+a+" already set")
t.i(0,a,b)},
bb:function(){return this.d},
k:function(a){var t,s,r,q
t=H.E(["{"+new H.ab(H.hA(this),null).k(0)+"}["+this.a+"]"],[P.v])
for(s=this.d,r=s.gG(s),r=r.gA(r);r.q();){q=r.gt(r)
C.a.l(t,H.e(q)+": "+H.e(s.h(0,q)))}return C.a.a8(t,"\n")}}
G.dd.prototype={}
G.df.prototype={
bS:function(a,b,c){J.kj(this.a,b)
if(c>0)J.kD(this.a,b,c)},
cl:function(a,b,c,d,e,f,g,h){J.hZ(this.a,34962,b)
J.kE(this.a,c,d,e,!1,g,h)}}
G.dT.prototype={}
G.e1.prototype={
cK:function(){var t,s,r,q,p,o,n,m,l
t=this.c
s=t.length
H.b(s>0)
s=new Array(t.length*6)
s.fixed$length=Array
r=H.E(s,[P.u])
for(s=this.b,q=0,p=0;!1;++p){o=s[p]
r[q]=o.gee(o)
r[q+1]=o.gef(o)
r[q+2]=o.geg(o)
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
cM:function(a,b){var t,s,r,q,p,o,n,m
t=a*b
H.b(this.d.length===t)
s=[]
this.e.i(0,"aTexUV",s)
for(r=b-1,q=a-1,p=0;p<b;++p)for(o=p/r,n=0;n<a;++n){m=new Float32Array(2)
m[0]=o
m[1]=n/q
C.a.l(s,new T.aw(m))}H.b(s.length===t)},
cL:function(a,b,c){var t,s,r,q,p,o,n,m,l
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
C.a.l(t,new G.dT(p+m,l+m,l+n,p+n))
n=m}q=o}},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gG(s),r=r.gA(r);r.q();){q=r.gt(r)
p=$.$get$J().h(0,q).a
C.a.l(t,H.e(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.a8(t," ")}}
G.ch.prototype={}
G.cg.prototype={}
G.bX.prototype={}
G.er.prototype={
b8:function(a,b,c){var t,s
if(C.i.ax(a,0)===105){if(H.a7(C.b.at(b.length,c)===this.z))H.ad("ChangeAttribute "+this.z)}else{t=C.b.at(b.length,c)
if(H.a7(t===(this.ch.length/3|0)))H.ad("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.hZ(t.a,34962,s)
J.iI(t.a,34962,b,35048)},
cN:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a0:function(a,b,c){var t,s,r,q,p,o
t=J.iF(a,0)===105
if(t&&this.z===0)this.z=C.b.at(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.i_(r.a))
this.b8(a,b,c)
q=$.$get$J().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.a7(p.C(0,a)))H.ad("unexpected attribute "+a)
o=p.h(0,a)
J.d5(r.a,this.e)
r.bS(0,o,t?1:0)
r.cl(0,s.h(0,a),o,q.ba(),5126,!1,0,0)},
b7:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.i_(s.a))
this.ch=a
this.b8("aPosition",a,3)
r=$.$get$J().h(0,"aPosition")
if(r==null)throw H.c("Unknown canonical aPosition")
q=this.x
H.b(q.C(0,"aPosition"))
p=q.h(0,"aPosition")
J.d5(s.a,this.e)
s.bS(0,p,0)
s.cl(0,t.h(0,"aPosition"),p,r.ba(),5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gG(t),r=r.gA(r);r.q();){q=r.gt(r)
C.a.l(s,H.e(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.a8(s,"  ")},
saD:function(a){this.cx=a}}
G.eM.prototype={
cI:function(a,b){var t=C.b.co(a,b)
if(this.z===t)return
this.z=t
this.bc()},
bc:function(){var t,s,r,q,p,o,n
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
t.Y(0,0,1/(p*s))
t.Y(1,1,1/p)
t.Y(2,2,(q+r)/o)
t.Y(3,2,-1)
t.Y(2,3,2*r*q/o)},
bb:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.w(new Float32Array(3))
o.ar(r,q,p)
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
s=J.q(n)
r=!!s.$isac
k=r?s.gan(n):1
if(!!s.$isw){j=s.gm(n)
m=s.gn(n)
l=s.gB(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gB(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.D(t[0],n)
r=C.c.D(t[4],m)
q=C.c.D(t[8],l)
i=t[12]
h=C.c.D(t[1],n)
g=C.c.D(t[5],m)
f=C.c.D(t[9],l)
e=t[13]
d=C.c.D(t[2],n)
c=C.c.D(t[6],m)
b=C.c.D(t[10],l)
a=t[14]
a0=C.c.D(t[3],n)
a1=C.c.D(t[7],m)
a2=C.c.D(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.I(this.db)
a3.dY(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.eW.prototype={
cR:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){n=t[o]
r.i(0,n,J.iL(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){n=t[o]
r.i(0,n,J.iL(q.a,p,n))}},
cV:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gG(s),s=s.gA(s);s.q();){q=s.gt(s)
if(!t.C(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bg(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.q();){q=s.d
if(!t.S(0,q))C.a.l(r,q)}return r},
cW:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gG(b),s=s.gA(s),r=this.d,q=this.y,p=this.z,o=0;s.q();){n=s.gt(s)
switch(J.iF(n,0)){case 117:if(q.C(0,n)){m=b.h(0,n)
if(p.C(0,n))H.hP("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$J().h(0,n)
if(l==null)H.F("unknown "+n)
H.b(q.C(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.i3(r.a,k,m)
else if(!!J.q(m).$isj4)J.kB(r.a,k,m)
break
case"float":if(l.c===0)J.kz(r.a,k,m)
else if(!!J.q(m).$isdY)J.kA(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.ag(m,"$isT").a
J.iR(r.a,k,!1,n)}else if(!!J.q(m).$isdY)J.iR(r.a,k,!1,m)
else if(H.a7(!1))H.ad("bad unform: "+n)
break
case"mat3":if(l.c===0){n=C.D.ged(H.ag(m,"$ismb"))
J.iQ(r.a,k,!1,n)}else if(!!J.q(m).$isdY)J.iQ(r.a,k,!1,m)
else if(H.a7(!1))H.ad("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.iP(j,k,H.ag(m,"$isac").a)
else J.iP(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.iO(j,k,H.ag(m,"$isw").a)
else J.iO(j,k,m)
break
case"vec2":n=l.c
j=r.a
if(n===0)J.iN(j,k,H.ag(m,"$isaw").a)
else J.iN(j,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.X(33984,this.ch)
J.iG(r.a,n)
n=H.ag(m,"$isbd").b
J.bx(r.a,3553,n)
n=this.ch
J.i3(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.X(33984,this.ch)
J.iG(r.a,n)
n=H.ag(m,"$isbd").b
J.bx(r.a,34067,n)
n=this.ch
J.i3(r.a,k,n)
this.ch=this.ch+1
break
default:H.hP("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.A(m,!0)
j=r.a
if(n)J.d6(j,2929)
else J.i0(j,2929)
break
case"cStencilFunc":H.ag(m,"$isch")
n=m.a
j=r.a
if(n===1281)J.i0(j,2960)
else{J.d6(j,2960)
j=m.b
i=m.c
J.kv(r.a,n,j,i)}break
case"cDepthWrite":J.kd(r.a,m)
break
case"cBlendEquation":H.ag(m,"$iscg")
n=m.a
j=r.a
if(n===1281)J.i0(j,3042)
else{J.d6(j,3042)
j=m.b
i=m.c
J.k7(r.a,j,i)
J.k6(r.a,n)}break}++o
break}}h=P.kO(0,0,0,Date.now()-new P.b_(t,!1).a,0,0)
""+o
h.k(0)},
cJ:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.kC(t.a,this.r)
this.ch=0
this.z.N(0)
for(s=0;s<2;++s){r=b[s]
this.cW(r.a,r.bb())}q=this.Q
q.N(0)
for(p=a.cy,p=p.gG(p),p=p.gA(p);p.q();)q.l(0,p.gt(p))
o=this.cV()
if(o.length!==0)P.X("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(o)))
J.d5(a.d.a,a.e)
n=this.e.f.length>0
q=a.f
p=a.cN()
m=a.Q
l=a.z
if(n)J.k5(t.a,q)
if(m!==-1){k=t.a
if(l>1)J.kh(k,q,p,m,0,l)
else J.kg(k,q,p,m,0)}else{m=t.a
if(l>1)J.kf(m,q,0,p,l)
else J.ke(m,q,0,p)}if(n)J.kk(t.a)},
b9:function(a,b){return this.cJ(a,b,null)}}
G.t.prototype={
ba:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.f2.prototype={
b5:function(a){var t,s,r,q
H.b(this.b==null)
for(t=this.c,s=this.x,r=0;r<1;++r){q=a[r]
H.b($.$get$J().C(0,q))
H.b(!C.a.S(t,q))
C.a.l(t,q)
s.i(0,q,this.r);++this.r}C.a.as(t)},
au:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.P)(a),++r){q=a[r]
if(H.a7($.$get$J().C(0,q)))H.ad("missing uniform "+q)
H.b(!C.a.S(s,q))
C.a.l(s,q)}C.a.as(s)},
b6:function(a){var t,s,r
H.b(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.b($.$get$J().C(0,r))
H.b(!C.a.S(t,r))
C.a.l(t,r)}C.a.as(t)},
cS:function(a,b){H.b(this.b==null)
this.b=this.bd(!0,a,b)},
av:function(a){return this.cS(a,null)},
bd:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){n=t[o]
m=$.$get$J().h(0,n)
C.a.l(q,"layout (location="+H.e(p.h(0,n))+") in "+m.a+" "+H.e(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){k=t[o]
m=$.$get$J().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){k=t[o]
m=$.$get$J().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){k=t[o]
m=$.$get$J().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.e(k)+j+";")}C.a.l(q,"")
if(a)C.a.l(q,"void main(void) {")
C.a.dk(q,b)
if(a)C.a.l(q,"}")
return C.a.a8(q,"\n")}}
G.f6.prototype={}
G.fl.prototype={
cO:function(a,b){var t=this.e
if(t!==1)J.kx(a.a,b,34046,t)
J.iM(a.a,b,10240,this.r)
J.iM(a.a,b,10241,this.f)}}
G.bd.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.e6.prototype={
cT:function(a){var t,s
t=this.d
s=this.c
J.bx(t.a,s,this.b)
J.kw(t.a,s,0,6408,6408,5121,a)}}
R.c5.prototype={
bZ:function(a){var t,s,r
t=this.fy
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.X("size change "+H.e(s)+" "+H.e(r))
this.cI(s,r)
J.kF(this.go.a,0,0,s,r)}}
B.f4.prototype={
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
b.sB(0,this.d*t*0.5*q)},
$S:function(a,b){return{func:1,v:true,args:[P.M,T.w]}}}
A.hC.prototype={
$2:function(a,b){var t=536870911&a+J.aW(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.u,P.B]}}}
T.T.prototype={
Y:function(a,b,c){H.b(a<4)
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
k:function(a){return"[0] "+this.ac(0).k(0)+"\n[1] "+this.ac(1).k(0)+"\n[2] "+this.ac(2).k(0)+"\n[3] "+this.ac(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.T){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.hB(this.a)},
ac:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.ac(t)},
Z:function(){var t=this.a
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
dY:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.aw.prototype={
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aw){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.hB(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.w.prototype={
ar:function(a,b,c){var t=this.a
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
if(b instanceof T.w){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.hB(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){return Math.sqrt(this.gaR())},
gaR:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
U:function(a){var t,s,r
t=Math.sqrt(this.gaR())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
aO:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
bL:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.w(new Float32Array(3))
t.ar(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
aj:function(a,b){var t,s
t=a.a
s=this.a
s[0]=s[0]+t[0]*b
s[1]=s[1]+t[1]*b
s[2]=s[2]+t[2]*b},
b3:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
sm:function(a,b){this.a[0]=b
return b},
sn:function(a,b){this.a[1]=b
return b},
sB:function(a,b){this.a[2]=b
return b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gB:function(a){return this.a[2]}}
T.ac.prototype={
k:function(a){var t=this.a
return H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+","+H.e(t[3])},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ac){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.hB(this.a)},
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
gB:function(a){return this.a[2]},
gan:function(a){return this.a[3]}}
M.hN.prototype={
$1:function(b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
this.a.a=b5+0
t=this.b
t.go+=0.003
s=t.k4
if(s.h(0,37)!=null)t.go+=0.03
else if(s.h(0,39)!=null)t.go-=0.03
if(s.h(0,38)!=null)t.id+=0.03
else if(s.h(0,40)!=null)t.id-=0.03
if(s.h(0,33)!=null)t.fy*=0.99
else if(s.h(0,34)!=null)t.fy*=1.01
if(s.h(0,32)!=null){t.go=0
t.id=0}s=C.c.dt(t.id,-1.4707963267948965,1.4707963267948965)
t.id=s
r=t.fy
q=t.go
p=r*Math.cos(s)
o=Math.cos(q)
s=Math.sin(s)
q=Math.sin(q)
n=t.d.a
n[12]=p*o
n[13]=r*s
n[14]=p*q
q=t.k2
s=q.a
n[12]=n[12]+s[0]
n[13]=n[13]+s[1]
n[14]=n[14]+s[2]
m=n[12]
l=n[13]
k=n[14]
j=new T.w(new Float32Array(3))
j.ar(0,1,0)
s=t.e
r=s.a
r[0]=n[12]
r[1]=n[13]
r[2]=n[14]
r=new Float32Array(3)
i=new T.w(r)
i.I(s)
i.b3(0,q)
i.U(0)
h=j.bL(i)
h.U(0)
g=i.bL(h)
g.U(0)
q=h.aO(s)
o=g.aO(s)
s=i.aO(s)
f=h.a
e=f[0]
d=g.a
c=d[0]
b=r[0]
a=f[1]
a0=d[1]
a1=r[1]
f=f[2]
d=d[2]
r=r[2]
n[15]=1
n[14]=-s
n[13]=-o
n[12]=-q
n[11]=0
n[10]=r
n[9]=d
n[8]=f
n[7]=0
n[6]=a1
n[5]=a0
n[4]=a
n[3]=0
n[2]=b
n[1]=c
n[0]=e
n[12]=m
n[13]=l
n[14]=k
e=t.f
c=e.a
c[0]=n[2]
c[1]=n[6]
c[2]=n[10]
t=-t.k1
a2=Math.sqrt(e.gaR())
m=c[0]/a2
l=c[1]/a2
k=c[2]/a2
a3=Math.cos(t)
a4=Math.sin(t)
a5=1-a3
a6=m*m*a5+a3
t=k*a4
a7=m*l*a5-t
c=l*a4
a8=m*k*a5+c
a9=l*m*a5+t
b0=l*l*a5+a3
t=m*a4
b1=l*k*a5-t
b2=k*m*a5-c
b3=k*l*a5+t
b4=k*k*a5+a3
t=n[0]
c=n[4]
e=n[8]
b=n[1]
a=n[5]
a0=n[9]
a1=n[2]
f=n[6]
d=n[10]
r=n[3]
q=n[7]
o=n[11]
n[0]=t*a6+c*a9+e*b2
n[1]=b*a6+a*a9+a0*b2
n[2]=a1*a6+f*a9+d*b2
n[3]=r*a6+q*a9+o*b2
n[4]=t*a7+c*b0+e*b3
n[5]=b*a7+a*b0+a0*b3
n[6]=a1*a7+f*b0+d*b3
n[7]=r*a7+q*b0+o*b3
n[8]=t*a8+c*b1+e*b4
n[9]=b*a8+a*b1+a0*b4
n[10]=a1*a8+f*b1+d*b4
n[11]=r*a8+q*b1+o*b4
o=this.e
this.c.b9(this.d,[o,this.f])
this.r.b9(this.x,[o,this.y])
C.ak.gdm(window).c4(this)},
$S:function(a){return{func:1,v:true,args:[P.W]}}}
J.a.prototype.cF=J.a.prototype.k
J.b3.prototype.cG=J.b3.prototype.k;(function installTearOffs(){installTearOff(H.aM.prototype,"gdU",0,0,0,null,["$0"],["am"],0)
installTearOff(H.V.prototype,"gcr",0,0,0,null,["$1"],["H"],2)
installTearOff(H.ay.prototype,"gdB",0,0,0,null,["$1"],["O"],2)
installTearOff(P,"lE",1,0,0,null,["$1"],["lp"],1)
installTearOff(P,"lF",1,0,0,null,["$1"],["lq"],1)
installTearOff(P,"lG",1,0,0,null,["$1"],["lr"],1)
installTearOff(P,"jN",1,0,0,null,["$0"],["lC"],0)
installTearOff(P.a5.prototype,"gd2",0,0,0,null,["$2","$1"],["ad","d3"],3)
installTearOff(P,"lL",1,0,0,null,["$2"],["kL"],5)
installTearOff(R.c5.prototype,"ge3",0,0,0,null,["$1"],["bZ"],4)
installTearOff(M,"k0",1,0,0,null,["$0"],["lY"],0)})();(function inheritance(){inherit(P.B,null)
var t=P.B
inherit(H.ia,t)
inherit(J.a,t)
inherit(J.da,t)
inherit(P.a_,t)
inherit(H.bU,t)
inherit(P.bQ,t)
inherit(H.aG,t)
inherit(H.aj,t)
inherit(H.hc,t)
inherit(H.aM,t)
inherit(H.fP,t)
inherit(H.az,t)
inherit(H.hb,t)
inherit(H.fL,t)
inherit(H.c7,t)
inherit(H.fn,t)
inherit(H.ah,t)
inherit(H.V,t)
inherit(H.ay,t)
inherit(H.eV,t)
inherit(H.ft,t)
inherit(P.aF,t)
inherit(H.cJ,t)
inherit(H.ab,t)
inherit(P.b4,t)
inherit(H.eg,t)
inherit(H.ei,t)
inherit(P.i5,t)
inherit(P.fM,t)
inherit(P.cr,t)
inherit(P.a5,t)
inherit(P.cj,t)
inherit(P.fc,t)
inherit(P.fd,t)
inherit(P.ij,t)
inherit(P.aC,t)
inherit(P.hm,t)
inherit(P.f1,t)
inherit(P.h8,t)
inherit(P.bg,t)
inherit(P.ie,t)
inherit(P.l,t)
inherit(P.ha,t)
inherit(P.aB,t)
inherit(P.C,t)
inherit(P.b_,t)
inherit(P.W,t)
inherit(P.al,t)
inherit(P.cc,t)
inherit(P.i6,t)
inherit(P.fU,t)
inherit(P.dA,t)
inherit(P.i,t)
inherit(P.aJ,t)
inherit(P.H,t)
inherit(P.aL,t)
inherit(P.v,t)
inherit(P.ba,t)
inherit(P.im,t)
inherit(W.dl,t)
inherit(W.m,t)
inherit(W.dX,t)
inherit(P.h6,t)
inherit(P.he,t)
inherit(G.eu,t)
inherit(G.df,t)
inherit(G.dT,t)
inherit(G.e1,t)
inherit(G.ch,t)
inherit(G.cg,t)
inherit(G.t,t)
inherit(G.f2,t)
inherit(G.fl,t)
inherit(G.bd,t)
inherit(T.T,t)
inherit(T.aw,t)
inherit(T.w,t)
inherit(T.ac,t)
t=J.a
inherit(J.eb,t)
inherit(J.bS,t)
inherit(J.b3,t)
inherit(J.am,t)
inherit(J.aH,t)
inherit(J.ao,t)
inherit(H.b6,t)
inherit(H.aK,t)
inherit(W.d,t)
inherit(W.d7,t)
inherit(W.bD,t)
inherit(W.bE,t)
inherit(W.aE,t)
inherit(W.Q,t)
inherit(W.ck,t)
inherit(W.dr,t)
inherit(W.ds,t)
inherit(W.dt,t)
inherit(W.bH,t)
inherit(W.cl,t)
inherit(W.bJ,t)
inherit(W.cn,t)
inherit(W.dw,t)
inherit(W.f,t)
inherit(W.cp,t)
inherit(W.e3,t)
inherit(W.cs,t)
inherit(W.ek,t)
inherit(W.eq,t)
inherit(W.cw,t)
inherit(W.cz,t)
inherit(W.a1,t)
inherit(W.cD,t)
inherit(W.cF,t)
inherit(W.a2,t)
inherit(W.cK,t)
inherit(W.cN,t)
inherit(W.fm,t)
inherit(W.cP,t)
inherit(W.fr,t)
inherit(W.fA,t)
inherit(W.fC,t)
inherit(W.cT,t)
inherit(W.cV,t)
inherit(W.cX,t)
inherit(W.cZ,t)
inherit(W.d0,t)
inherit(P.cu,t)
inherit(P.cB,t)
inherit(P.eP,t)
inherit(P.eQ,t)
inherit(P.eT,t)
inherit(P.cL,t)
inherit(P.cR,t)
inherit(P.db,t)
inherit(P.eX,t)
inherit(P.eY,t)
inherit(P.cH,t)
t=J.b3
inherit(J.eN,t)
inherit(J.av,t)
inherit(J.ap,t)
inherit(J.i9,J.am)
t=J.aH
inherit(J.bR,t)
inherit(J.ec,t)
t=P.a_
inherit(H.j,t)
inherit(H.bV,t)
t=H.j
inherit(H.aI,t)
inherit(H.eh,t)
inherit(H.dz,H.bV)
inherit(H.eo,P.bQ)
t=H.aI
inherit(H.bW,t)
inherit(P.ej,t)
t=H.aj
inherit(H.hW,t)
inherit(H.hX,t)
inherit(H.h5,t)
inherit(H.fQ,t)
inherit(H.e8,t)
inherit(H.e9,t)
inherit(H.hd,t)
inherit(H.fo,t)
inherit(H.fp,t)
inherit(H.hY,t)
inherit(H.hH,t)
inherit(H.hI,t)
inherit(H.hJ,t)
inherit(H.hK,t)
inherit(H.hL,t)
inherit(H.fi,t)
inherit(H.ed,t)
inherit(H.hD,t)
inherit(H.hE,t)
inherit(H.hF,t)
inherit(P.fI,t)
inherit(P.fH,t)
inherit(P.fJ,t)
inherit(P.fK,t)
inherit(P.fV,t)
inherit(P.fZ,t)
inherit(P.fW,t)
inherit(P.fX,t)
inherit(P.fY,t)
inherit(P.h1,t)
inherit(P.h2,t)
inherit(P.h0,t)
inherit(P.h_,t)
inherit(P.fe,t)
inherit(P.ff,t)
inherit(P.hp,t)
inherit(P.hh,t)
inherit(P.hg,t)
inherit(P.hi,t)
inherit(P.en,t)
inherit(P.dx,t)
inherit(P.dy,t)
inherit(W.fb,t)
inherit(W.fF,t)
inherit(W.fT,t)
inherit(P.hs,t)
inherit(B.hR,t)
inherit(B.hS,t)
inherit(B.hT,t)
inherit(B.hU,t)
inherit(B.hV,t)
inherit(B.eH,t)
inherit(B.eI,t)
inherit(B.eJ,t)
inherit(B.eK,t)
inherit(B.f4,t)
inherit(A.hC,t)
inherit(M.hN,t)
t=H.fL
inherit(H.aO,t)
inherit(H.bp,t)
t=P.aF
inherit(H.eD,t)
inherit(H.ee,t)
inherit(H.fy,t)
inherit(H.fv,t)
inherit(H.de,t)
inherit(H.eZ,t)
inherit(P.bB,t)
inherit(P.c4,t)
inherit(P.a9,t)
inherit(P.fz,t)
inherit(P.fx,t)
inherit(P.b9,t)
inherit(P.dg,t)
inherit(P.dq,t)
t=H.fi
inherit(H.f9,t)
inherit(H.aY,t)
inherit(H.fG,P.bB)
inherit(P.em,P.b4)
inherit(H.a0,P.em)
t=H.aK
inherit(H.ev,t)
inherit(H.c_,t)
t=H.c_
inherit(H.bh,t)
inherit(H.bj,t)
inherit(H.bi,H.bh)
inherit(H.c0,H.bi)
inherit(H.bk,H.bj)
inherit(H.c1,H.bk)
t=H.c0
inherit(H.bZ,t)
inherit(H.ew,t)
t=H.c1
inherit(H.ex,t)
inherit(H.ey,t)
inherit(H.ez,t)
inherit(H.eA,t)
inherit(H.eB,t)
inherit(H.c2,t)
inherit(H.eC,t)
inherit(P.hl,P.fM)
inherit(P.hf,P.hm)
inherit(P.h9,H.a0)
inherit(P.f0,P.f1)
inherit(P.h4,P.f0)
inherit(P.h7,P.h4)
t=P.W
inherit(P.M,t)
inherit(P.u,t)
t=P.a9
inherit(P.c6,t)
inherit(P.e7,t)
t=W.d
inherit(W.x,t)
inherit(W.aa,t)
inherit(W.dV,t)
inherit(W.b2,t)
inherit(W.b5,t)
inherit(W.eR,t)
inherit(W.c8,t)
inherit(W.bl,t)
inherit(W.bn,t)
inherit(W.fD,t)
inherit(W.fE,t)
inherit(W.be,t)
inherit(W.io,t)
inherit(P.dc,t)
inherit(P.aD,t)
t=W.x
inherit(W.bK,t)
inherit(W.ai,t)
inherit(W.b0,t)
t=W.bK
inherit(W.h,t)
inherit(P.r,t)
t=W.aa
inherit(W.bA,t)
inherit(W.e2,t)
inherit(W.el,t)
t=W.h
inherit(W.d8,t)
inherit(W.d9,t)
inherit(W.bC,t)
inherit(W.e_,t)
inherit(W.f_,t)
t=W.aE
inherit(W.dh,t)
inherit(W.dj,t)
inherit(W.dk,t)
inherit(W.dn,t)
t=W.Q
inherit(W.di,t)
inherit(W.dm,t)
inherit(W.dp,t)
inherit(W.aZ,W.ck)
inherit(W.du,W.bH)
inherit(W.cm,W.cl)
inherit(W.bI,W.cm)
inherit(W.co,W.cn)
inherit(W.dv,W.co)
inherit(W.cq,W.cp)
inherit(W.dU,W.cq)
inherit(W.ct,W.cs)
inherit(W.b1,W.ct)
inherit(W.bP,W.b0)
inherit(W.e4,W.b2)
inherit(W.au,W.f)
t=W.au
inherit(W.aq,t)
inherit(W.G,t)
inherit(W.at,t)
inherit(W.es,W.b5)
inherit(W.cx,W.cw)
inherit(W.et,W.cx)
inherit(W.cA,W.cz)
inherit(W.c3,W.cA)
inherit(W.cE,W.cD)
inherit(W.eO,W.cE)
inherit(W.bm,W.bl)
inherit(W.f5,W.bm)
inherit(W.cG,W.cF)
inherit(W.f7,W.cG)
inherit(W.fa,W.cK)
inherit(W.cO,W.cN)
inherit(W.fj,W.cO)
inherit(W.bo,W.bn)
inherit(W.fk,W.bo)
inherit(W.cQ,W.cP)
inherit(W.fq,W.cQ)
inherit(W.ax,W.G)
inherit(W.cU,W.cT)
inherit(W.fN,W.cU)
inherit(W.fO,W.bJ)
inherit(W.cW,W.cV)
inherit(W.h3,W.cW)
inherit(W.cY,W.cX)
inherit(W.cy,W.cY)
inherit(W.d_,W.cZ)
inherit(W.hj,W.d_)
inherit(W.d1,W.d0)
inherit(W.hk,W.d1)
inherit(W.fR,P.fc)
inherit(W.ir,W.fR)
inherit(W.fS,P.fd)
inherit(P.L,P.he)
t=P.r
inherit(P.dB,t)
inherit(P.dC,t)
inherit(P.dD,t)
inherit(P.dE,t)
inherit(P.dF,t)
inherit(P.dG,t)
inherit(P.dH,t)
inherit(P.dI,t)
inherit(P.dJ,t)
inherit(P.dK,t)
inherit(P.dL,t)
inherit(P.dM,t)
inherit(P.dN,t)
inherit(P.dO,t)
inherit(P.dP,t)
inherit(P.dQ,t)
inherit(P.dR,t)
inherit(P.dS,t)
inherit(P.dW,t)
inherit(P.Z,t)
inherit(P.ep,t)
inherit(P.eL,t)
t=P.Z
inherit(P.dZ,t)
inherit(P.R,t)
inherit(P.e5,t)
inherit(P.fh,t)
inherit(P.bb,t)
inherit(P.fB,t)
inherit(P.cv,P.cu)
inherit(P.ef,P.cv)
inherit(P.cC,P.cB)
inherit(P.eE,P.cC)
inherit(P.eU,P.R)
inherit(P.cM,P.cL)
inherit(P.fg,P.cM)
inherit(P.bc,P.bb)
inherit(P.cS,P.cR)
inherit(P.fs,P.cS)
inherit(P.eF,P.aD)
inherit(P.cI,P.cH)
inherit(P.f8,P.cI)
t=G.eu
inherit(G.f6,t)
inherit(G.fw,t)
inherit(G.er,t)
inherit(G.eW,t)
inherit(G.dd,G.f6)
inherit(B.eG,G.dd)
t=G.fw
inherit(G.bX,t)
inherit(G.eM,t)
inherit(G.e6,G.bd)
inherit(R.c5,G.eM)
mixin(H.bh,P.l)
mixin(H.bi,H.aG)
mixin(H.bj,P.l)
mixin(H.bk,H.aG)
mixin(W.ck,W.dl)
mixin(W.cl,P.l)
mixin(W.cm,W.m)
mixin(W.cn,P.l)
mixin(W.co,W.m)
mixin(W.cp,P.l)
mixin(W.cq,W.m)
mixin(W.cs,P.l)
mixin(W.ct,W.m)
mixin(W.cw,P.l)
mixin(W.cx,W.m)
mixin(W.cz,P.l)
mixin(W.cA,W.m)
mixin(W.cD,P.l)
mixin(W.cE,W.m)
mixin(W.bl,P.l)
mixin(W.bm,W.m)
mixin(W.cF,P.l)
mixin(W.cG,W.m)
mixin(W.cK,P.b4)
mixin(W.cN,P.l)
mixin(W.cO,W.m)
mixin(W.bn,P.l)
mixin(W.bo,W.m)
mixin(W.cP,P.l)
mixin(W.cQ,W.m)
mixin(W.cT,P.l)
mixin(W.cU,W.m)
mixin(W.cV,P.l)
mixin(W.cW,W.m)
mixin(W.cX,P.l)
mixin(W.cY,W.m)
mixin(W.cZ,P.l)
mixin(W.d_,W.m)
mixin(W.d0,P.l)
mixin(W.d1,W.m)
mixin(P.cu,P.l)
mixin(P.cv,W.m)
mixin(P.cB,P.l)
mixin(P.cC,W.m)
mixin(P.cL,P.l)
mixin(P.cM,W.m)
mixin(P.cR,P.l)
mixin(P.cS,W.m)
mixin(P.cH,P.l)
mixin(P.cI,W.m)})();(function constants(){C.q=W.bC.prototype
C.m=W.bD.prototype
C.o=W.bE.prototype
C.B=W.bP.prototype
C.C=J.a.prototype
C.a=J.am.prototype
C.b=J.bR.prototype
C.D=J.bS.prototype
C.c=J.aH.prototype
C.i=J.ao.prototype
C.K=J.ap.prototype
C.L=H.bZ.prototype
C.v=J.eN.prototype
C.p=J.av.prototype
C.aj=W.ax.prototype
C.ak=W.be.prototype
C.A=new P.h6()
C.f=new P.hf()
C.r=new P.al(0)
C.E=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.F=function(hooks) {
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
C.t=function(hooks) { return hooks; }

C.G=function(getTagFallback) {
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
C.H=function() {
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
C.I=function(hooks) {
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
C.J=function(hooks) {
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
C.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.M=new G.t("vec3","vertex btangents",0)
C.d=new G.t("vec3","",0)
C.N=new G.t("vec4","delta from light",0)
C.n=new G.t("","",0)
C.w=new G.t("vec3","vertex coordinates",0)
C.O=new G.t("vec3","vertex binormals",0)
C.x=new G.t("vec4","for wireframe",0)
C.P=new G.t("vec4","per vertex color",0)
C.Q=new G.t("float","for normal maps",0)
C.j=new G.t("mat4","",0)
C.S=new G.t("mat4","",4)
C.R=new G.t("mat4","",128)
C.e=new G.t("float","",0)
C.T=new G.t("float","",4)
C.U=new G.t("float","depth for shadowmaps",0)
C.h=new G.t("sampler2D","",0)
C.V=new G.t("float","for bump maps",0)
C.W=new G.t("vec2","texture uvs",0)
C.X=new G.t("float","time since program start in sec",0)
C.k=new G.t("vec2","",0)
C.Y=new G.t("samplerCube","",0)
C.l=new G.t("vec4","",0)
C.Z=new G.t("vec3","vertex normals",0)
C.a_=new G.t("sampler2DShadow","",0)
C.y=new G.t("vec3","per vertex color",0)
C.z=new G.t("mat3","",0)
C.a0=new G.t("vec3","vertex tangents",0)
C.a1=H.D("m6")
C.a2=H.D("m7")
C.a3=H.D("dY")
C.a4=H.D("m8")
C.a5=H.D("m9")
C.a6=H.D("j4")
C.a7=H.D("ma")
C.a8=H.D("j7")
C.a9=H.D("H")
C.aa=H.D("v")
C.ab=H.D("jw")
C.ac=H.D("jx")
C.ad=H.D("mc")
C.ae=H.D("jy")
C.af=H.D("aB")
C.ag=H.D("M")
C.ah=H.D("u")
C.ai=H.D("W")})();(function staticFields(){$.je="$cachedFunction"
$.jf="$cachedInvocation"
$.iZ=null
$.iX=null
$.it=!1
$.iz=null
$.jK=null
$.jZ=null
$.hv=null
$.hG=null
$.iA=null
$.aP=null
$.bq=null
$.br=null
$.iu=!1
$.z=C.f
$.j2=0
$.lI=0
$.lJ=0
$.iD=0
$.jV=0
$.bv=0
$.bw=0
$.m4=!1
$.iy=0})();(function lazyInitializers(){lazy($,"j1","$get$j1",function(){return H.jR("_$dart_dartClosure")})
lazy($,"ib","$get$ib",function(){return H.jR("_$dart_js")})
lazy($,"j5","$get$j5",function(){return H.kY()})
lazy($,"j6","$get$j6",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.j2
$.j2=t+1
t="expando$key$"+t}return new P.dA(t,null,[P.u])})
lazy($,"jl","$get$jl",function(){return H.a3(H.fu({
toString:function(){return"$receiver$"}}))})
lazy($,"jm","$get$jm",function(){return H.a3(H.fu({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"jn","$get$jn",function(){return H.a3(H.fu(null))})
lazy($,"jo","$get$jo",function(){return H.a3(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"js","$get$js",function(){return H.a3(H.fu(void 0))})
lazy($,"jt","$get$jt",function(){return H.a3(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jq","$get$jq",function(){return H.a3(H.jr(null))})
lazy($,"jp","$get$jp",function(){return H.a3(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"jv","$get$jv",function(){return H.a3(H.jr(void 0))})
lazy($,"ju","$get$ju",function(){return H.a3(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"iq","$get$iq",function(){return P.lo()})
lazy($,"bs","$get$bs",function(){return[]})
lazy($,"hu","$get$hu",function(){return P.j8(P.u,P.aB)})
lazy($,"bu","$get$bu",function(){return P.j8(P.v,P.aB)})
lazy($,"ji","$get$ji",function(){return new G.ch(1281,0,4294967295)})
lazy($,"iV","$get$iV",function(){return G.jk(1281,1281,1281)})
lazy($,"iU","$get$iU",function(){return G.jk(32774,770,769)})
lazy($,"J","$get$J",function(){return P.ar(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColors",C.y,"aColorAlpha",C.P,"aPosition",C.w,"aTexUV",C.W,"aNormal",C.Z,"aBinormal",C.O,"aCenter",C.x,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a0,"aBitangent",C.M,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.y,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.w,"vPositionFromLight",C.N,"vCenter",C.x,"vDepth",C.U,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.z,"uConvolutionMatrix",C.z,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a_,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.Y,"uAnimationTable",C.h,"uTime",C.X,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.R,"uLightDescs",C.S,"uLightCount",C.e,"uLightTypes",C.T,"uBumpScale",C.V,"uNormalScale",C.Q])})
lazy($,"jA","$get$jA",function(){return C.A})
lazy($,"jY","$get$jY",function(){var t=G.f3("PointSpritesV")
t.b5(["aPosition"])
t.au(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.av(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"jX","$get$jX",function(){var t=G.f3("PointSpritesF")
t.au(["uTexture"])
t.av(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return t})
lazy($,"jP","$get$jP",function(){var t=G.f3("demoVertexShader")
t.b5(["aPosition"])
t.b6(["vColor"])
t.au(["uPerspectiveViewMatrix","uModelMatrix"])
H.b(t.b==null)
t.b=t.bd(!1,["void main(void) {\n    gl_Position = uPerspectiveViewMatrix *\n                  uModelMatrix *\n                  vec4(aPosition, 1.0);\n    vColor.r = sin(aPosition.x)/2.0+0.5;\n    vColor.g = cos(aPosition.y)/2.0+0.5;\n    vColor.b = sin(aPosition.z)/2.0+0.5;\n}\n"],null)
return t})
lazy($,"jO","$get$jO",function(){var t=G.f3("demoFragmentShader")
t.b6(["vColor"])
t.av(["oFragColor.rgb = vColor;"])
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
mangledGlobalNames:{u:"int",M:"double",W:"num",v:"String",aB:"bool",H:"Null",i:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,v:true,args:[P.B],opt:[P.aL]},{func:1,v:true,args:[W.f]},{func:1,ret:P.u,args:[P.C,P.C]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,Blob:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGMatrix:J.a,SVGNumber:J.a,SVGPreserveAspectRatio:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.b6,ArrayBufferView:H.aK,DataView:H.ev,Float32Array:H.bZ,Float64Array:H.ew,Int16Array:H.ex,Int32Array:H.ey,Int8Array:H.ez,Uint16Array:H.eA,Uint32Array:H.eB,Uint8ClampedArray:H.c2,CanvasPixelArray:H.c2,Uint8Array:H.eC,HTMLAudioElement:W.h,HTMLBRElement:W.h,HTMLBaseElement:W.h,HTMLBodyElement:W.h,HTMLButtonElement:W.h,HTMLContentElement:W.h,HTMLDListElement:W.h,HTMLDataElement:W.h,HTMLDataListElement:W.h,HTMLDetailsElement:W.h,HTMLDialogElement:W.h,HTMLDivElement:W.h,HTMLEmbedElement:W.h,HTMLFieldSetElement:W.h,HTMLHRElement:W.h,HTMLHeadElement:W.h,HTMLHeadingElement:W.h,HTMLHtmlElement:W.h,HTMLIFrameElement:W.h,HTMLImageElement:W.h,HTMLInputElement:W.h,HTMLLIElement:W.h,HTMLLabelElement:W.h,HTMLLegendElement:W.h,HTMLLinkElement:W.h,HTMLMapElement:W.h,HTMLMediaElement:W.h,HTMLMenuElement:W.h,HTMLMetaElement:W.h,HTMLMeterElement:W.h,HTMLModElement:W.h,HTMLOListElement:W.h,HTMLObjectElement:W.h,HTMLOptGroupElement:W.h,HTMLOptionElement:W.h,HTMLOutputElement:W.h,HTMLParagraphElement:W.h,HTMLParamElement:W.h,HTMLPictureElement:W.h,HTMLPreElement:W.h,HTMLProgressElement:W.h,HTMLQuoteElement:W.h,HTMLScriptElement:W.h,HTMLShadowElement:W.h,HTMLSlotElement:W.h,HTMLSourceElement:W.h,HTMLSpanElement:W.h,HTMLStyleElement:W.h,HTMLTableCaptionElement:W.h,HTMLTableCellElement:W.h,HTMLTableDataCellElement:W.h,HTMLTableHeaderCellElement:W.h,HTMLTableColElement:W.h,HTMLTableElement:W.h,HTMLTableRowElement:W.h,HTMLTableSectionElement:W.h,HTMLTemplateElement:W.h,HTMLTextAreaElement:W.h,HTMLTimeElement:W.h,HTMLTitleElement:W.h,HTMLTrackElement:W.h,HTMLUListElement:W.h,HTMLUnknownElement:W.h,HTMLVideoElement:W.h,HTMLDirectoryElement:W.h,HTMLFontElement:W.h,HTMLFrameElement:W.h,HTMLFrameSetElement:W.h,HTMLMarqueeElement:W.h,HTMLElement:W.h,Accelerometer:W.bA,LinearAccelerationSensor:W.bA,AccessibleNodeList:W.d7,HTMLAnchorElement:W.d8,HTMLAreaElement:W.d9,HTMLCanvasElement:W.bC,CanvasGradient:W.bD,CanvasRenderingContext2D:W.bE,CDATASection:W.ai,CharacterData:W.ai,Comment:W.ai,ProcessingInstruction:W.ai,Text:W.ai,CSSPerspective:W.dh,CSSPositionValue:W.di,CSSRotation:W.dj,CSSScale:W.dk,CSSStyleDeclaration:W.aZ,MSStyleCSSProperties:W.aZ,CSS2Properties:W.aZ,CSSImageValue:W.Q,CSSKeywordValue:W.Q,CSSNumericValue:W.Q,CSSResourceValue:W.Q,CSSUnitValue:W.Q,CSSURLImageValue:W.Q,CSSStyleValue:W.Q,CSSMatrixComponent:W.aE,CSSSkew:W.aE,CSSTransformComponent:W.aE,CSSTransformValue:W.dm,CSSTranslation:W.dn,CSSUnparsedValue:W.dp,DataTransferItemList:W.dr,DeviceAcceleration:W.ds,XMLDocument:W.b0,Document:W.b0,DOMException:W.dt,DOMPoint:W.du,DOMPointReadOnly:W.bH,ClientRectList:W.bI,DOMRectList:W.bI,DOMRectReadOnly:W.bJ,DOMStringList:W.dv,DOMTokenList:W.dw,Element:W.bK,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,AccessibleNode:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RemotePlayback:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SourceBuffer:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,TextTrack:W.d,TextTrackCue:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,VTTCue:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,ServiceWorker:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,FileList:W.dU,FileWriter:W.dV,HTMLFormElement:W.e_,Gyroscope:W.e2,History:W.e3,HTMLCollection:W.b1,HTMLFormControlsCollection:W.b1,HTMLOptionsCollection:W.b1,HTMLDocument:W.bP,XMLHttpRequest:W.e4,XMLHttpRequestUpload:W.b2,XMLHttpRequestEventTarget:W.b2,KeyboardEvent:W.aq,Location:W.ek,Magnetometer:W.el,MediaList:W.eq,MIDIOutput:W.es,MIDIInput:W.b5,MIDIPort:W.b5,MimeTypeArray:W.et,PointerEvent:W.G,MouseEvent:W.G,DragEvent:W.G,DocumentFragment:W.x,ShadowRoot:W.x,Attr:W.x,DocumentType:W.x,Node:W.x,NodeList:W.c3,RadioNodeList:W.c3,Plugin:W.a1,PluginArray:W.eO,PresentationConnection:W.eR,RTCDataChannel:W.c8,DataChannel:W.c8,HTMLSelectElement:W.f_,AbsoluteOrientationSensor:W.aa,AmbientLightSensor:W.aa,OrientationSensor:W.aa,RelativeOrientationSensor:W.aa,Sensor:W.aa,SourceBufferList:W.f5,SpeechGrammarList:W.f7,SpeechRecognitionResult:W.a2,Storage:W.fa,TextTrackCueList:W.fj,TextTrackList:W.fk,TimeRanges:W.fm,TouchEvent:W.at,TouchList:W.fq,TrackDefaultList:W.fr,CompositionEvent:W.au,FocusEvent:W.au,TextEvent:W.au,UIEvent:W.au,URL:W.fA,VRStageBoundsPoint:W.fC,VideoTrackList:W.fD,WebSocket:W.fE,WheelEvent:W.ax,Window:W.be,DOMWindow:W.be,CSSRuleList:W.fN,DOMRect:W.fO,GamepadList:W.h3,NamedNodeMap:W.cy,MozNamedAttrMap:W.cy,SpeechRecognitionResultList:W.hj,StyleSheetList:W.hk,SVGFEBlendElement:P.dB,SVGFEColorMatrixElement:P.dC,SVGFEComponentTransferElement:P.dD,SVGFECompositeElement:P.dE,SVGFEConvolveMatrixElement:P.dF,SVGFEDiffuseLightingElement:P.dG,SVGFEDisplacementMapElement:P.dH,SVGFEFloodElement:P.dI,SVGFEGaussianBlurElement:P.dJ,SVGFEImageElement:P.dK,SVGFEMergeElement:P.dL,SVGFEMorphologyElement:P.dM,SVGFEOffsetElement:P.dN,SVGFEPointLightElement:P.dO,SVGFESpecularLightingElement:P.dP,SVGFESpotLightElement:P.dQ,SVGFETileElement:P.dR,SVGFETurbulenceElement:P.dS,SVGFilterElement:P.dW,SVGForeignObjectElement:P.dZ,SVGCircleElement:P.R,SVGEllipseElement:P.R,SVGLineElement:P.R,SVGPathElement:P.R,SVGPolygonElement:P.R,SVGPolylineElement:P.R,SVGGeometryElement:P.R,SVGAElement:P.Z,SVGClipPathElement:P.Z,SVGDefsElement:P.Z,SVGGElement:P.Z,SVGSwitchElement:P.Z,SVGGraphicsElement:P.Z,SVGImageElement:P.e5,SVGLengthList:P.ef,SVGMaskElement:P.ep,SVGNumberList:P.eE,SVGPatternElement:P.eL,SVGPoint:P.eP,SVGPointList:P.eQ,SVGRect:P.eT,SVGRectElement:P.eU,SVGStringList:P.fg,SVGAnimateElement:P.r,SVGAnimateMotionElement:P.r,SVGAnimateTransformElement:P.r,SVGAnimationElement:P.r,SVGDescElement:P.r,SVGDiscardElement:P.r,SVGFEDistantLightElement:P.r,SVGFEFuncAElement:P.r,SVGFEFuncBElement:P.r,SVGFEFuncGElement:P.r,SVGFEFuncRElement:P.r,SVGFEMergeNodeElement:P.r,SVGLinearGradientElement:P.r,SVGMarkerElement:P.r,SVGMetadataElement:P.r,SVGRadialGradientElement:P.r,SVGScriptElement:P.r,SVGSetElement:P.r,SVGStopElement:P.r,SVGStyleElement:P.r,SVGSymbolElement:P.r,SVGTitleElement:P.r,SVGViewElement:P.r,SVGGradientElement:P.r,SVGComponentTransferFunctionElement:P.r,SVGFEDropShadowElement:P.r,SVGMPathElement:P.r,SVGElement:P.r,SVGSVGElement:P.fh,SVGTextPathElement:P.bb,SVGTextContentElement:P.bb,SVGTSpanElement:P.bc,SVGTextElement:P.bc,SVGTextPositioningElement:P.bc,SVGTransformList:P.fs,SVGUseElement:P.fB,AudioBuffer:P.db,AudioTrackList:P.dc,AudioContext:P.aD,webkitAudioContext:P.aD,BaseAudioContext:P.aD,OfflineAudioContext:P.eF,WebGLRenderingContext:P.eX,WebGL2RenderingContext:P.eY,SQLResultSetRowList:P.f8})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,Blob:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,File:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGMatrix:true,SVGNumber:true,SVGPreserveAspectRatio:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,Accelerometer:true,LinearAccelerationSensor:true,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSPositionValue:true,CSSRotation:true,CSSScale:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSSkew:true,CSSTransformComponent:false,CSSTransformValue:true,CSSTranslation:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceAcceleration:true,XMLDocument:true,Document:false,DOMException:true,DOMPoint:true,DOMPointReadOnly:false,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AccessibleNode:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,Gyroscope:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,KeyboardEvent:true,Location:true,Magnetometer:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,AbsoluteOrientationSensor:true,AmbientLightSensor:true,OrientationSensor:true,RelativeOrientationSensor:true,Sensor:false,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VRStageBoundsPoint:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLengthList:true,SVGMaskElement:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGStringList:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMetadataElement:true,SVGRadialGradientElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransformList:true,SVGUseElement:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.c_.$nativeSuperclassTag="ArrayBufferView"
H.bh.$nativeSuperclassTag="ArrayBufferView"
H.bi.$nativeSuperclassTag="ArrayBufferView"
H.c0.$nativeSuperclassTag="ArrayBufferView"
H.bj.$nativeSuperclassTag="ArrayBufferView"
H.bk.$nativeSuperclassTag="ArrayBufferView"
H.c1.$nativeSuperclassTag="ArrayBufferView"
W.bl.$nativeSuperclassTag="EventTarget"
W.bm.$nativeSuperclassTag="EventTarget"
W.bn.$nativeSuperclassTag="EventTarget"
W.bo.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.k1(M.k0(),b)},[])
else (function(b){H.k1(M.k0(),b)})([])})})()