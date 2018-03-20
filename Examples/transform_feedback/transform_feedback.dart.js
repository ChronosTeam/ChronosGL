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
a[c]=function(){a[c]=function(){H.mQ(b)}
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
return d?function(e){if(t===null)t=H.iW(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.iW(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.iW(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={iH:function iH(a){this.a=a},
iM:function(a,b,c,d){if(!!a.$isb)return new H.dO(a,b,[c,d])
return new H.cZ(a,b,[c,d])},
ek:function(){return new P.au("No element")},
lE:function(){return new P.au("Too many elements")},
lD:function(){return new P.au("Too few elements")},
db:function(a,b,c,d){if(c-b<=32)H.lV(a,b,c,d)
else H.lU(a,b,c,d)},
lV:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.a9(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.ai(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
lU:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.u(t+1,6)
r=a3+s
q=a4-s
p=C.b.u(a3+a4,2)
o=p-s
n=p+s
t=J.a9(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.ai(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.ai(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.ai(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.ai(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ai(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.ai(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.ai(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.ai(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ai(a5.$2(j,i),0)){h=i
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
H.db(a2,a3,g-2,a5)
H.db(a2,f+2,a4,a5)
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
break}}H.db(a2,g,f,a5)}else H.db(a2,g,f,a5)},
b:function b(){},
b2:function b2(){},
cY:function cY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cZ:function cZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
dO:function dO(a,b,c){this.a=a
this.b=b
this.$ti=c},
eu:function eu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
br:function br(a,b,c){this.a=a
this.b=b
this.$ti=c},
dj:function dj(a,b,c){this.a=a
this.b=b
this.$ti=c},
fS:function fS(a,b,c){this.a=a
this.b=b
this.$ti=c},
c9:function c9(){},
ds:function(a,b){var t=a.aa(b)
if(!u.globalState.d.cy)u.globalState.f.ag()
return t},
ie:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
kv:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.u(s).$isc)throw H.e(P.ji("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.hu(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$jD()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.h7(P.iL(null,H.aW),0)
r=P.o
s.sex(new H.ab(0,null,null,null,null,null,0,[r,H.aV]))
s.seA(new H.ab(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.ht()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.ly,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.m7)}if(u.globalState.x)return
s=u.globalState.a++
q=P.ac(null,null,null,r)
p=new H.b4(0,null,!1)
o=new H.aV(s,new H.ab(0,null,null,null,null,null,0,[r,H.b4]),q,u.createNewIsolate(),p,new H.al(H.ik()),new H.al(H.ik()),!1,!1,[],P.ac(null,null,null,null),null,null,!1,!0,P.ac(null,null,null,null))
q.l(0,0)
o.bo(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bb(a,{func:1,args:[,]}))o.aa(new H.ir(t,a))
else if(H.bb(a,{func:1,args:[,,]}))o.aa(new H.is(t,a))
else o.aa(a)
u.globalState.f.ag()},
m7:function(a){var t=P.aL(["command","print","msg",a])
return new H.af(!0,P.bM(null,P.o)).H(t)},
lA:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.lB()
return},
lB:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.r("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.r('Cannot extract URI from "'+t+'"'))},
ly:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.aU(!0,[]).T(b.data)
s=J.a9(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.mD(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aU(!0,[]).T(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aU(!0,[]).T(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.o
j=P.ac(null,null,null,k)
i=new H.b4(0,null,!1)
h=new H.aV(s,new H.ab(0,null,null,null,null,null,0,[k,H.b4]),j,u.createNewIsolate(),i,new H.al(H.ik()),new H.al(H.ik()),!1,!1,[],P.ac(null,null,null,null),null,null,!1,!0,P.ac(null,null,null,null))
j.l(0,0)
h.bo(0,i)
u.globalState.f.a.O(0,new H.aW(h,new H.eh(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.ag()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.l7(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ag()
break
case"close":u.globalState.ch.af(0,$.$get$jE().h(0,a))
a.terminate()
u.globalState.f.ag()
break
case"log":H.lx(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aL(["command","print","msg",t])
k=new H.af(!0,P.bM(null,P.o)).H(k)
s.toString
self.postMessage(k)}else P.aa(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
lx:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aL(["command","log","msg",a])
r=new H.af(!0,P.bM(null,P.o)).H(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.P(q)
t=H.ay(q)
s=P.c8(t)
throw H.e(s)}},
lz:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.jL=$.jL+("_"+s)
$.jM=$.jM+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.C(0,["spawned",new H.b7(s,r),q,t.r])
r=new H.ei(a,b,c,d,t)
if(e){t.bH(q,q)
u.globalState.f.a.O(0,new H.aW(t,r,"start isolate"))}else r.$0()},
lW:function(a,b){var t=new H.fA(!0,!1,null)
t.d8(a,b)
return t},
m9:function(a){return new H.aU(!0,[]).T(new H.af(!1,P.bM(null,P.o)).H(a))},
ir:function ir(a,b){this.a=a
this.b=b},
is:function is(a,b){this.a=a
this.b=b},
hu:function hu(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
aV:function aV(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
hp:function hp(a,b){this.a=a
this.b=b},
h7:function h7(a,b){this.a=a
this.b=b},
h8:function h8(a){this.a=a},
aW:function aW(a,b,c){this.a=a
this.b=b
this.c=c},
ht:function ht(){},
eh:function eh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ei:function ei(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h0:function h0(){},
b7:function b7(a,b){this.b=a
this.a=b},
hv:function hv(a,b){this.a=a
this.b=b},
bO:function bO(a,b,c){this.b=a
this.c=b
this.a=c},
b4:function b4(a,b,c){this.a=a
this.b=b
this.c=c},
fA:function fA(a,b,c){this.a=a
this.b=b
this.c=c},
fB:function fB(a,b){this.a=a
this.b=b},
fC:function fC(a,b){this.a=a
this.b=b},
al:function al(a){this.a=a},
af:function af(a,b){this.a=a
this.b=b},
aU:function aU(a,b){this.a=a
this.b=b},
mw:function(a){return u.types[a]},
mF:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.u(a).$isn},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aC(a)
if(typeof t!=="string")throw H.e(H.M(a))
return t},
lT:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.f4(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aN:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
jJ:function(a,b){throw H.e(new P.e9(a,null,null))},
lP:function(a,b,c){var t,s
H.mm(a)
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.jJ(a,c)
s=t[3]
if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.jJ(a,c)},
f2:function(a){var t,s,r,q,p,o,n,m
t=J.u(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.N||!!J.u(a).$isaR){p=C.C(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.j.br(q,0)===36)q=C.j.cP(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.id(H.i2(a),0,null),u.mangledGlobalNames)},
f1:function(a){return"Instance of '"+H.f2(a)+"'"},
Q:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lO:function(a){return a.b?H.Q(a).getUTCFullYear()+0:H.Q(a).getFullYear()+0},
lM:function(a){return a.b?H.Q(a).getUTCMonth()+1:H.Q(a).getMonth()+1},
lI:function(a){return a.b?H.Q(a).getUTCDate()+0:H.Q(a).getDate()+0},
lJ:function(a){return a.b?H.Q(a).getUTCHours()+0:H.Q(a).getHours()+0},
lL:function(a){return a.b?H.Q(a).getUTCMinutes()+0:H.Q(a).getMinutes()+0},
lN:function(a){return a.b?H.Q(a).getUTCSeconds()+0:H.Q(a).getSeconds()+0},
lK:function(a){return a.b?H.Q(a).getUTCMilliseconds()+0:H.Q(a).getMilliseconds()+0},
jK:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.M(a))
return a[b]},
K:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ak(!0,b,"index",null)
t=J.dv(a)
if(b<0||C.b.cv(b,t))return P.z(b,a,"index",null,t)
return P.f3(b,"index",null)},
M:function(a){return new P.ak(!0,a,null,null)},
mm:function(a){if(typeof a!=="string")throw H.e(H.M(a))
return a},
e:function(a){var t
if(a==null)a=new P.d8()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.kw})
t.name=""}else t.toString=H.kw
return t},
kw:function(){return J.aC(this.dartException)},
E:function(a){throw H.e(a)},
O:function(a){throw H.e(new P.Z(a))},
ap:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.fG(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
fH:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
jX:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
iJ:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.en(a,s,t?null:b.receiver)},
P:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.it(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aM(r,16)&8191)===10)switch(q){case 438:return t.$1(H.iJ(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.d7(p,null))}}if(a instanceof TypeError){o=$.$get$jR()
n=$.$get$jS()
m=$.$get$jT()
l=$.$get$jU()
k=$.$get$jY()
j=$.$get$jZ()
i=$.$get$jW()
$.$get$jV()
h=$.$get$k0()
g=$.$get$k_()
f=o.K(s)
if(f!=null)return t.$1(H.iJ(s,f))
else{f=n.K(s)
if(f!=null){f.method="call"
return t.$1(H.iJ(s,f))}else{f=m.K(s)
if(f==null){f=l.K(s)
if(f==null){f=k.K(s)
if(f==null){f=j.K(s)
if(f==null){f=i.K(s)
if(f==null){f=l.K(s)
if(f==null){f=h.K(s)
if(f==null){f=g.K(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.d7(s,f==null?null:f.method))}}return t.$1(new H.fK(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dc()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ak(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dc()
return a},
ay:function(a){var t
if(a==null)return new H.dq(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dq(a,null)},
mJ:function(a){if(a==null||typeof a!='object')return J.aj(a)
else return H.aN(a)},
ms:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
mE:function(a,b,c,d,e,f,g){switch(c){case 0:return H.ds(b,new H.i8(a))
case 1:return H.ds(b,new H.i9(a,d))
case 2:return H.ds(b,new H.ia(a,d,e))
case 3:return H.ds(b,new H.ib(a,d,e,f))
case 4:return H.ds(b,new H.ic(a,d,e,f,g))}throw H.e(P.c8("Unsupported number of arguments for wrapped closure"))},
bT:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.mE)
a.$identity=t
return t},
ln:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.u(c).$isc){t.$reflectionInfo=c
r=H.lT(t).r}else r=c
q=d?Object.create(new H.fh().constructor.prototype):Object.create(new H.be(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.jp(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.mw,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jn:H.iA
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.jp(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
lk:function(a,b,c,d){var t=H.iA
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
jp:function(a,b,c){var t,s,r,q
if(c)return H.lm(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.lk(s,b==null?r!=null:b!==r,t,b)
return q},
ll:function(a,b,c,d){var t,s
t=H.iA
s=H.jn
switch(b?-1:a){case 0:throw H.e(new H.f8("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
lm:function(a,b){var t,s,r,q
H.li()
t=$.jm
if(t==null){t=H.jl("receiver")
$.jm=t}s=b.$stubName
r=b.length
q=a[s]
t=H.ll(r,b==null?q!=null:b!==q,s,b)
return t},
iW:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.u(c).$isc){c.fixed$length=Array
t=c}else t=c
return H.ln(a,b,t,!!d,e,f)},
iA:function(a){return a.a},
jn:function(a){return a.c},
li:function(){var t=$.jo
if(t==null){t=H.jl("self")
$.jo=t}return t},
jl:function(a){var t,s,r,q,p
t=new H.be("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
n_:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aq(a,"String"))},
V:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aq(a,"double"))},
mZ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aq(a,"num"))},
ml:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aq(a,"bool"))},
mD:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aq(a,"int"))},
mL:function(a,b){throw H.e(H.aq(a,b.substring(3)))},
mK:function(a,b){var t=J.a9(b)
throw H.e(H.lj(H.f2(a),t.bc(b,3,t.gj(b))))},
j0:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.u(a)[b])return a
H.mL(a,b)},
aA:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.u(a)[b]
else t=!0
if(t)return a
H.mK(a,b)},
mY:function(a){if(a==null)return a
if(!!J.u(a).$isc)return a
throw H.e(H.aq(a,"List"))},
kh:function(a){var t=J.u(a)
return"$S" in t?t.$S():null},
bb:function(a,b){var t
if(a==null)return!1
t=H.kh(a)
return t==null?!1:H.kn(t,b)},
mW:function(a,b){var t,s
if(a==null)return a
if($.iS)return a
$.iS=!0
try{if(H.bb(a,b))return a
t=H.aB(b,null)
s=H.aq(a,t)
throw H.e(s)}finally{$.iS=!1}},
aq:function(a,b){return new H.fI("type '"+H.f2(a)+"' is not a subtype of type '"+b+"'")},
lj:function(a,b){return new H.dD("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
ba:function(a){if(!0===a)return!1
if(!!J.u(a).$isiF)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.aq(a,"bool"))},
bS:function(a){throw H.e(new H.fV(a))},
d:function(a){if(H.ba(a))throw H.e(new P.bZ(null))},
mQ:function(a){throw H.e(new P.dH(a))},
ik:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
kl:function(a){return u.getIsolateTag(a)},
L:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
i2:function(a){if(a==null)return
return a.$ti},
km:function(a,b){return H.j5(a["$as"+H.f(b)],H.i2(a))},
ah:function(a,b,c){var t,s
t=H.km(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
az:function(a,b){var t,s
t=H.i2(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aB:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.id(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aB(t,b)
return H.ma(a,b)}return"unknown-reified-type"},
ma:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aB(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aB(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aB(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.mr(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aB(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
id:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bE("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aB(o,c)}return p?"":"<"+s.k(0)+">"},
mv:function(a){var t,s
if(a instanceof H.aZ){t=H.kh(a)
if(t!=null)return H.aB(t,null)}s=J.u(a).constructor.name
if(a==null)return s
return s+H.id(a.$ti,0,null)},
j5:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.j1(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.j1(a,null,b)
return b},
iV:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.i2(a)
s=J.u(a)
if(s[b]==null)return!1
return H.ke(H.j5(s[d],t),c)},
mT:function(a,b,c,d){if(a==null)return a
if(H.iV(a,b,c,d))return a
throw H.e(H.aq(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.id(c,0,null),u.mangledGlobalNames)))},
ke:function(a,b){var t,s,r,q,p
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
if(!H.W(r,b[p]))return!1}return!0},
mU:function(a,b,c){return H.j1(a,b,H.km(b,c))},
W:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="b3")return!0
if('func' in b)return H.kn(a,b)
if('func' in a)return b.name==="iF"||b.name==="m"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.d(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.d(!0)
q=b[0]}else q=b
if(q!==s){p=H.aB(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.ke(H.j5(o,t),r)},
kd:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.W(o,n)||H.W(n,o)))return!1}return!0},
mh:function(a,b){var t,s,r,q,p,o
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
if(!(H.W(p,o)||H.W(o,p)))return!1}return!0},
kn:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.d('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.W(t,s)||H.W(s,t)))return!1}r=a.args
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
if(n===m){if(!H.kd(r,q,!1))return!1
if(!H.kd(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
g=r[h]
H.d(i)
f=q[h]
if(!(H.W(g,f)||H.W(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=q[e]
if(!(H.W(g,f)||H.W(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=o[e]
if(!(H.W(g,f)||H.W(f,g)))return!1}}return H.mh(a.named,b.named)},
j1:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
n0:function(a){var t=$.iY
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
mX:function(a){return H.aN(a)},
mV:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mG:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.m))
t=$.iY.$1(a)
s=$.i0[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.i7[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kc.$2(a,t)
if(t!=null){s=$.i0[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.i7[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.j2(r)
$.i0[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.i7[t]=r
return r}if(p==="-"){o=H.j2(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.kr(a,r)
if(p==="*")throw H.e(new P.di(t))
if(u.leafTags[t]===true){o=H.j2(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.kr(a,r)},
kr:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.ij(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
j2:function(a){return J.ij(a,!1,null,!!a.$isn)},
mI:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.ij(t,!1,null,!!t.$isn)
else return J.ij(t,c,null,null)},
mB:function(){if(!0===$.j_)return
$.j_=!0
H.mC()},
mC:function(){var t,s,r,q,p,o,n,m
$.i0=Object.create(null)
$.i7=Object.create(null)
H.mA()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.ku.$1(p)
if(o!=null){n=H.mI(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
mA:function(){var t,s,r,q,p,o,n
t=C.R()
t=H.b9(C.O,H.b9(C.T,H.b9(C.B,H.b9(C.B,H.b9(C.S,H.b9(C.P,H.b9(C.Q(C.C),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.iY=new H.i4(p)
$.kc=new H.i5(o)
$.ku=new H.i6(n)},
b9:function(a,b){return a(b)||b},
mP:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
f4:function f4(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fG:function fG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
d7:function d7(a,b){this.a=a
this.b=b},
en:function en(a,b,c){this.a=a
this.b=b
this.c=c},
fK:function fK(a){this.a=a},
it:function it(a){this.a=a},
dq:function dq(a,b){this.a=a
this.b=b},
i8:function i8(a){this.a=a},
i9:function i9(a,b){this.a=a
this.b=b},
ia:function ia(a,b,c){this.a=a
this.b=b
this.c=c},
ib:function ib(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ic:function ic(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
aZ:function aZ(){},
fu:function fu(){},
fh:function fh(){},
be:function be(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fI:function fI(a){this.a=a},
dD:function dD(a){this.a=a},
f8:function f8(a){this.a=a},
fV:function fV(a){this.a=a},
dh:function dh(a,b){this.a=a
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
em:function em(a){this.a=a},
ep:function ep(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
eq:function eq(a,b){this.a=a
this.$ti=b},
er:function er(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i4:function i4(a){this.a=a},
i5:function i5(a){this.a=a},
i6:function i6(a){this.a=a},
B:function(a){return a},
bu:function bu(){},
aM:function aM(){},
d0:function d0(){},
d1:function d1(){},
d2:function d2(){},
d_:function d_(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
d3:function d3(){},
eJ:function eJ(){},
bv:function bv(){},
bw:function bw(){},
bx:function bx(){},
by:function by(){},
mr:function(a){var t=H.L(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
j4:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
u:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cV.prototype
return J.cU.prototype}if(typeof a=="string")return J.aI.prototype
if(a==null)return J.cW.prototype
if(typeof a=="boolean")return J.el.prototype
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.m)return a
return J.i1(a)},
ij:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
i1:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.j_==null){H.mB()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.di("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$iI()]
if(p!=null)return p
p=H.mG(a)
if(p!=null)return p
if(typeof a=="function")return C.U
s=Object.getPrototypeOf(a)
if(s==null)return C.E
if(s===Object.prototype)return C.E
if(typeof q=="function"){Object.defineProperty(q,$.$get$iI(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
a9:function(a){if(typeof a=="string")return J.aI.prototype
if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.m)return a
return J.i1(a)},
dt:function(a){if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.m)return a
return J.i1(a)},
kj:function(a){if(typeof a=="number")return J.b1.prototype
if(a==null)return a
if(!(a instanceof P.m))return J.aR.prototype
return a},
mu:function(a){if(typeof a=="number")return J.b1.prototype
if(typeof a=="string")return J.aI.prototype
if(a==null)return a
if(!(a instanceof P.m))return J.aR.prototype
return a},
kk:function(a){if(typeof a=="string")return J.aI.prototype
if(a==null)return a
if(!(a instanceof P.m))return J.aR.prototype
return a},
k:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.m)return a
return J.i1(a)},
C:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.u(a).t(a,b)},
ai:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kj(a).az(a,b)},
ky:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kj(a).aj(a,b)},
j6:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mF(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a9(a).h(a,b)},
kz:function(a,b,c,d){return J.k(a).dl(a,b,c,d)},
kA:function(a,b){return J.kk(a).br(a,b)},
bc:function(a,b){return J.k(a).dF(a,b)},
kB:function(a,b,c){return J.k(a).dG(a,b,c)},
j7:function(a,b){return J.k(a).bG(a,b)},
iu:function(a,b){return J.k(a).L(a,b)},
j8:function(a,b,c){return J.k(a).bJ(a,b,c)},
kC:function(a,b){return J.k(a).dU(a,b)},
bX:function(a,b,c){return J.k(a).bK(a,b,c)},
j9:function(a,b,c,d){return J.k(a).dV(a,b,c,d)},
bY:function(a,b,c){return J.k(a).bL(a,b,c)},
kD:function(a,b,c){return J.k(a).dX(a,b,c)},
ja:function(a,b){return J.k(a).dZ(a,b)},
kE:function(a,b){return J.k(a).bM(a,b)},
kF:function(a,b,c){return J.k(a).bN(a,b,c)},
kG:function(a,b,c,d){return J.k(a).bO(a,b,c,d)},
kH:function(a,b,c,d,e){return J.k(a).bP(a,b,c,d,e)},
kI:function(a,b){return J.mu(a).M(a,b)},
iv:function(a,b,c){return J.a9(a).e2(a,b,c)},
kJ:function(a,b,c,d,e,f){return J.k(a).e4(a,b,c,d,e,f)},
kK:function(a){return J.k(a).bR(a)},
kL:function(a){return J.k(a).bS(a)},
kM:function(a){return J.k(a).bV(a)},
kN:function(a){return J.k(a).e8(a)},
iw:function(a){return J.k(a).e9(a)},
kO:function(a,b){return J.k(a).bX(a,b)},
ix:function(a,b){return J.k(a).bY(a,b)},
kP:function(a,b,c,d){return J.k(a).bZ(a,b,c,d)},
kQ:function(a,b,c,d,e){return J.k(a).eg(a,b,c,d,e)},
kR:function(a,b,c,d,e){return J.k(a).c_(a,b,c,d,e)},
kS:function(a,b,c,d,e,f){return J.k(a).eh(a,b,c,d,e,f)},
kT:function(a,b){return J.dt(a).n(a,b)},
du:function(a,b){return J.k(a).c0(a,b)},
kU:function(a,b){return J.k(a).c1(a,b)},
kV:function(a){return J.k(a).ei(a)},
kW:function(a,b){return J.dt(a).as(a,b)},
kX:function(a){return J.k(a).gdT(a)},
aj:function(a){return J.u(a).gq(a)},
bd:function(a){return J.dt(a).gv(a)},
dv:function(a){return J.a9(a).gj(a)},
kY:function(a){return J.k(a).gaW(a)},
kZ:function(a){return J.k(a).geK(a)},
iy:function(a,b){return J.k(a).a1(a,b)},
l_:function(a){return J.k(a).ay(a)},
l0:function(a){return J.k(a).b2(a)},
l1:function(a,b){return J.k(a).b3(a,b)},
l2:function(a,b,c){return J.k(a).b4(a,b,c)},
jb:function(a,b,c){return J.k(a).b7(a,b,c)},
l3:function(a,b){return J.k(a).c2(a,b)},
l4:function(a,b){return J.dt(a).c4(a,b)},
l5:function(a,b,c){return J.k(a).c6(a,b,c)},
l6:function(a){return J.dt(a).eE(a)},
l7:function(a,b){return J.k(a).C(a,b)},
l8:function(a,b,c,d){return J.k(a).bb(a,b,c,d)},
l9:function(a,b,c,d,e,f,g){return J.k(a).ca(a,b,c,d,e,f,g)},
la:function(a,b,c,d){return J.k(a).cb(a,b,c,d)},
jc:function(a,b,c,d){return J.k(a).cc(a,b,c,d)},
lb:function(a){return J.kk(a).eN(a)},
aC:function(a){return J.u(a).k(a)},
lc:function(a,b,c,d){return J.k(a).eP(a,b,c,d)},
ld:function(a,b,c){return J.k(a).cf(a,b,c)},
le:function(a,b,c){return J.k(a).cg(a,b,c)},
iz:function(a,b,c){return J.k(a).ci(a,b,c)},
lf:function(a,b,c){return J.k(a).cj(a,b,c)},
jd:function(a,b,c){return J.k(a).ck(a,b,c)},
je:function(a,b,c){return J.k(a).cl(a,b,c)},
jf:function(a,b,c){return J.k(a).cm(a,b,c)},
jg:function(a,b,c,d){return J.k(a).cn(a,b,c,d)},
jh:function(a,b,c,d){return J.k(a).co(a,b,c,d)},
lg:function(a,b){return J.k(a).cq(a,b)},
lh:function(a,b,c,d,e,f,g){return J.k(a).cs(a,b,c,d,e,f,g)},
a:function a(){},
el:function el(){},
cW:function cW(){},
bq:function bq(){},
eX:function eX(){},
aR:function aR(){},
aJ:function aJ(){},
aH:function aH(a){this.$ti=a},
iG:function iG(a){this.$ti=a},
dz:function dz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b1:function b1(){},
cV:function cV(){},
cU:function cU(){},
aI:function aI(){}},P={
lZ:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.mi()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bT(new P.fX(t),1)).observe(s,{childList:true})
return new P.fW(t,s,r)}else if(self.setImmediate!=null)return P.mj()
return P.mk()},
m_:function(a){++u.globalState.f.b
self.scheduleImmediate(H.bT(new P.fY(a),0))},
m0:function(a){++u.globalState.f.b
self.setImmediate(H.bT(new P.fZ(a),0))},
m1:function(a){P.iN(C.y,a)},
md:function(a,b){if(H.bb(a,{func:1,args:[P.b3,P.b3]})){b.toString
return a}else{b.toString
return a}},
m3:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.ar))
H.d(b.a===0)
b.a=1
try{a.ce(new P.he(b),new P.hf(b))}catch(r){t=H.P(r)
s=H.ay(r)
P.mM(new P.hg(b,t,s))}},
k3:function(a,b){var t,s,r,q
H.d(b.a<=1)
for(;t=a.a,s=t===2,s;){H.d(s)
a=a.c}s=b.a
if(t>=4){H.d(s<4)
r=b.c
b.c=null
q=b.a8(r)
H.d(b.a<4)
H.d(a.a>=4)
b.a=a.a
b.c=a.c
P.bI(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bA(q)}},
bI:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.hU(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bI(t.a,b)}s=t.a
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
P.hU(null,null,p,o,s)
return}s=$.A
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.A
H.d(l==null?s!=null:l!==s)
j=$.A
$.A=l
i=j}else i=null
s=b.c
if(s===8)new P.hk(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.hj(r,b,m).$0()}else if((s&2)!==0)new P.hi(t,r,b).$0()
if(i!=null){H.d(!0)
$.A=i}s=r.b
if(!!J.u(s).$isea){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.a8(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.k3(s,o)
return}}g=b.b
H.d(g.a<4)
h=g.c
g.c=null
b=g.a8(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.d(!o)
g.a=4
g.c=p}else{H.d(!o)
g.a=8
g.c=p}t.a=g
s=g}},
mc:function(){var t,s
for(;t=$.b8,t!=null;){$.bQ=null
s=t.b
$.b8=s
if(s==null)$.bP=null
t.a.$0()}},
mg:function(){$.iT=!0
try{P.mc()}finally{$.bQ=null
$.iT=!1
if($.b8!=null)$.$get$iP().$1(P.kf())}},
ka:function(a){var t=new P.dk(a,null)
if($.b8==null){$.bP=t
$.b8=t
if(!$.iT)$.$get$iP().$1(P.kf())}else{$.bP.b=t
$.bP=t}},
mf:function(a){var t,s,r
t=$.b8
if(t==null){P.ka(a)
$.bQ=$.bP
return}s=new P.dk(a,null)
r=$.bQ
if(r==null){s.b=t
$.bQ=s
$.b8=s}else{s.b=r.b
r.b=s
$.bQ=s
if(s.b==null)$.bP=s}},
mM:function(a){var t=$.A
if(C.f===t){P.hW(null,null,C.f,a)
return}t.toString
P.hW(null,null,t,t.aQ(a))},
lX:function(a,b){var t=$.A
if(t===C.f){t.toString
return P.iN(a,b)}return P.iN(a,t.aQ(b))},
iN:function(a,b){var t=C.b.u(a.a,1000)
return H.lW(t<0?0:t,b)},
iO:function(a){var t,s
H.d(a!=null)
t=$.A
H.d(a==null?t!=null:a!==t)
s=$.A
$.A=a
return s},
hU:function(a,b,c,d,e){var t={}
t.a=d
P.mf(new P.hV(t,e))},
k8:function(a,b,c,d){var t,s
if($.A===c)return d.$0()
t=P.iO(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.A=s}},
k9:function(a,b,c,d,e){var t,s
if($.A===c)return d.$1(e)
t=P.iO(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.A=s}},
me:function(a,b,c,d,e,f){var t,s
if($.A===c)return d.$2(e,f)
t=P.iO(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.A=s}},
hW:function(a,b,c,d){var t=C.f!==c
if(t)d=!(!t||!1)?c.aQ(d):c.dW(d)
P.ka(d)},
fX:function fX(a){this.a=a},
fW:function fW(a,b,c){this.a=a
this.b=b
this.c=c},
fY:function fY(a){this.a=a},
fZ:function fZ(a){this.a=a},
h2:function h2(){},
hM:function hM(a,b){this.a=a
this.$ti=b},
dm:function dm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hd:function hd(a,b){this.a=a
this.b=b},
hh:function hh(a,b){this.a=a
this.b=b},
he:function he(a){this.a=a},
hf:function hf(a){this.a=a},
hg:function hg(a,b,c){this.a=a
this.b=b
this.c=c},
hk:function hk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hl:function hl(a){this.a=a},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
hi:function hi(a,b,c){this.a=a
this.b=b
this.c=c},
dk:function dk(a,b){this.a=a
this.b=b},
fl:function fl(){},
fn:function fn(a){this.a=a},
fo:function fo(a,b){this.a=a
this.b=b},
fm:function fm(){},
aY:function aY(a,b){this.a=a
this.b=b},
hT:function hT(){},
hV:function hV(a,b){this.a=a
this.b=b},
hy:function hy(){},
hA:function hA(a,b){this.a=a
this.b=b},
hz:function hz(a,b){this.a=a
this.b=b},
hB:function hB(a,b){this.a=a
this.b=b},
jF:function(a,b){return new H.ab(0,null,null,null,null,null,0,[a,b])},
I:function(){return new H.ab(0,null,null,null,null,null,0,[null,null])},
aL:function(a){return H.ms(a,new H.ab(0,null,null,null,null,null,0,[null,null]))},
bM:function(a,b){return new P.dn(0,null,null,null,null,null,0,[a,b])},
m6:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
lC:function(a,b,c){var t,s
if(P.iU(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bR()
C.a.l(s,a)
try{P.mb(a,t)}finally{H.d(C.a.gaU(s)===a)
s.pop()}s=P.jQ(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
ej:function(a,b,c){var t,s,r
if(P.iU(a))return b+"..."+c
t=new P.bE(b)
s=$.$get$bR()
C.a.l(s,a)
try{r=t
r.a=P.jQ(r.gY(),a,", ")}finally{H.d(C.a.gaU(s)===a)
s.pop()}s=t
s.a=s.gY()+c
s=t.gY()
return s.charCodeAt(0)==0?s:s},
iU:function(a){var t,s
for(t=0;s=$.$get$bR(),t<s.length;++t)if(a===s[t])return!0
return!1},
mb:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gv(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.m())return
q=H.f(t.gp())
C.a.l(b,q)
s+=q.length+2;++r}if(!t.m()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gp();++r
if(!t.m()){if(r<=4){C.a.l(b,H.f(n))
return}p=H.f(n)
o=b.pop()
s+=p.length+2}else{m=t.gp();++r
H.d(r<100)
for(;t.m();n=m,m=l){l=t.gp();++r
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
ac:function(a,b,c,d){return new P.hq(0,null,null,null,null,null,0,[d])},
iK:function(a,b){var t,s
t=P.ac(null,null,null,b)
for(s=J.bd(a);s.m();)t.l(0,s.gp())
return t},
lG:function(a){var t,s,r
t={}
if(P.iU(a))return"{...}"
s=new P.bE("")
try{C.a.l($.$get$bR(),a)
r=s
r.a=r.gY()+"{"
t.a=!0
a.as(0,new P.ev(t,s))
t=s
t.a=t.gY()+"}"}finally{t=$.$get$bR()
H.d(C.a.gaU(t)===a)
t.pop()}t=s.gY()
return t.charCodeAt(0)==0?t:t},
iL:function(a,b){var t=new P.es(null,0,0,0,[b])
t.d0(a,b)
return t},
dn:function dn(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hq:function hq(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hr:function hr(a,b,c){this.a=a
this.b=b
this.c=c},
bL:function bL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ho:function ho(){},
cX:function cX(){},
w:function w(){},
ev:function ev(a,b){this.a=a
this.b=b},
es:function es(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hs:function hs(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fb:function fb(){},
fa:function fa(){},
bA:function bA(){},
jQ:function(a,b,c){var t=J.bd(b)
if(!t.m())return a
if(c.length===0){do a+=H.f(t.gp())
while(t.m())}else{a+=H.f(t.gp())
for(;t.m();)a=a+c+H.f(t.gp())}return a},
lo:function(a,b){return J.kI(a,b)},
lp:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.f(t)
if(t>=10)return s+"00"+H.f(t)
return s+"000"+H.f(t)},
lq:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c3:function(a){if(a>=10)return""+a
return"0"+a},
iC:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aC(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lu(a)},
lu:function(a){var t=J.u(a)
if(!!t.$isaZ)return t.k(a)
return H.f1(a)},
ji:function(a){return new P.ak(!1,null,null,a)},
jj:function(a,b,c){return new P.ak(!0,a,b,c)},
lR:function(a){return new P.bB(null,null,!1,null,null,a)},
f3:function(a,b,c){return new P.bB(null,null,!0,a,b,"Value not in range")},
aO:function(a,b,c,d,e){return new P.bB(b,c,!0,a,d,"Invalid value")},
jN:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.aO(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.aO(b,a,c,"end",f))
return b},
z:function(a,b,c,d,e){var t=e!=null?e:J.dv(b)
return new P.ef(b,t,!0,a,c,"Index out of range")},
c8:function(a){return new P.hc(a)},
jG:function(a,b,c){var t,s
t=H.L([],[c])
for(s=J.bd(a);s.m();)C.a.l(t,s.gp())
return t},
aa:function(a){H.j4(H.f(a))},
ax:function ax(){},
F:function F(){},
bf:function bf(a,b){this.a=a
this.b=b},
N:function N(){},
aG:function aG(a){this.a=a},
dM:function dM(){},
dN:function dN(){},
b0:function b0(){},
bZ:function bZ(a){this.a=a},
d8:function d8(){},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bB:function bB(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ef:function ef(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
r:function r(a){this.a=a},
di:function di(a){this.a=a},
au:function au(a){this.a=a},
Z:function Z(a){this.a=a},
dc:function dc(){},
dH:function dH(a){this.a=a},
hc:function hc(a){this.a=a},
e9:function e9(a,b,c){this.a=a
this.b=b
this.c=c},
dP:function dP(a,b,c){this.a=a
this.b=b
this.$ti=c},
o:function o(){},
S:function S(){},
cT:function cT(){},
c:function c(){},
at:function at(){},
b3:function b3(){},
X:function X(){},
m:function m(){},
bD:function bD(){},
q:function q(){},
bE:function bE(a){this.a=a},
hZ:function(a){var t,s,r,q,p
if(a==null)return
t=P.I()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.O)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
mp:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.kW(a,new P.hY(t))
return t},
jw:function(){var t=$.jv
if(t==null){t=J.iv(window.navigator.userAgent,"Opera",0)
$.jv=t}return t},
lr:function(){var t,s
t=$.js
if(t!=null)return t
s=$.jt
if(s==null){s=J.iv(window.navigator.userAgent,"Firefox",0)
$.jt=s}if(s)t="-moz-"
else{s=$.ju
if(s==null){s=!P.jw()&&J.iv(window.navigator.userAgent,"Trident/",0)
$.ju=s}if(s)t="-ms-"
else t=P.jw()?"-o-":"-webkit-"}$.js=t
return t},
hY:function hY(a){this.a=a},
m8:function(a){var t=new P.hw(0,0)
t.di(a)
return t},
hw:function hw(a,b){this.a=a
this.b=b},
hx:function hx(){},
H:function H(){},
dw:function dw(){},
aD:function aD(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
e7:function e7(){},
G:function G(){},
ed:function ed(){},
am:function am(){},
eo:function eo(){},
ew:function ew(){},
ex:function ex(){},
an:function an(){},
eN:function eN(){},
eU:function eU(){},
eZ:function eZ(){},
bC:function bC(){},
fp:function fp(){},
D:function D(){},
fq:function fq(){},
fr:function fr(){},
aP:function aP(){},
fv:function fv(){},
ao:function ao(){},
fF:function fF(){},
fM:function fM(){},
fO:function fO(){},
fP:function fP(){},
bJ:function bJ(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(){},
cg:function cg(){},
ce:function ce(){},
cl:function cl(){},
cp:function cp(){},
cz:function cz(){},
cI:function cI(){},
cE:function cE(){},
cG:function cG(){},
dA:function dA(){},
f6:function f6(){},
f7:function f7(){},
hQ:function hQ(){},
fg:function fg(){},
cf:function cf(){},
cC:function cC(){}},W={
kg:function(){return document},
ls:function(a,b,c){var t,s
t=document.body
s=(t&&C.p).J(t,a,b,c)
s.toString
t=new H.dj(new W.R(s),new W.hX(),[W.p])
return t.gX(t)},
lt:function(a){return"wheel"},
bh:function(a){var t,s,r
t="element tag unavailable"
try{s=J.kZ(a)
if(typeof s==="string")t=a.tagName}catch(r){H.P(r)}return t},
m2:function(a,b){return document.createElement(a)},
aX:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
k6:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ae:function(a,b,c,d,e){var t=W.kb(new W.hb(c))
t=new W.ha(0,a,b,t,!1,[e])
t.df(a,b,c,!1,e)
return t},
k4:function(a){var t,s
t=document.createElement("a")
s=new W.hF(t,window.location)
s=new W.bK(s)
s.dg(a)
return s},
m4:function(a,b,c,d){return!0},
m5:function(a,b,c,d){var t,s,r,q,p
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
k7:function(){var t=P.q
t=new W.hN(P.iK(C.t,t),P.ac(null,null,null,t),P.ac(null,null,null,t),P.ac(null,null,null,t),null)
t.dj(null,new H.br(C.t,new W.hO(),[H.az(C.t,0),null]),["TEMPLATE"],null)
return t},
kb:function(a){var t=$.A
if(t===C.f)return a
return t.dY(a)},
j:function j(){},
dx:function dx(){},
dy:function dy(){},
Y:function Y(){},
dB:function dB(){},
c_:function c_(){},
aE:function aE(){},
c0:function c0(){},
c1:function c1(){},
c2:function c2(){},
aF:function aF(){},
dF:function dF(){},
x:function x(){},
b_:function b_(){},
dG:function dG(){},
dI:function dI(){},
c4:function c4(){},
bg:function bg(){},
c5:function c5(){},
dJ:function dJ(){},
c6:function c6(){},
c7:function c7(){},
dK:function dK(){},
dL:function dL(){},
a_:function a_(){},
hX:function hX(){},
i:function i(){},
h:function h(){},
a0:function a0(){},
e5:function e5(){},
e6:function e6(){},
e8:function e8(){},
a1:function a1(){},
cb:function cb(){},
eb:function eb(){},
bo:function bo(){},
cc:function cc(){},
ec:function ec(){},
bp:function bp(){},
eg:function eg(){},
aK:function aK(){},
et:function et(){},
ez:function ez(){},
eA:function eA(){},
bt:function bt(){},
a2:function a2(){},
eB:function eB(){},
J:function J(){},
eK:function eK(){},
R:function R(a){this.a=a},
p:function p(){},
d4:function d4(){},
bz:function bz(){},
eT:function eT(){},
eW:function eW(){},
a3:function a3(){},
eY:function eY(){},
f0:function f0(){},
d9:function d9(){},
da:function da(){},
f9:function f9(){},
fc:function fc(){},
a4:function a4(){},
fd:function fd(){},
a5:function a5(){},
ff:function ff(){},
a6:function a6(){},
fk:function fk(){},
T:function T(){},
dd:function dd(){},
fs:function fs(){},
ft:function ft(){},
bF:function bF(){},
a7:function a7(){},
U:function U(){},
fw:function fw(){},
fx:function fx(){},
fz:function fz(){},
a8:function a8(){},
aQ:function aQ(){},
fD:function fD(){},
fE:function fE(){},
av:function av(){},
dg:function dg(){},
aw:function aw(){},
fL:function fL(){},
fN:function fN(){},
fQ:function fQ(){},
fR:function fR(){},
aS:function aS(){},
bH:function bH(){},
fT:function fT(a){this.a=a},
fU:function fU(){},
aT:function aT(){},
h1:function h1(){},
dl:function dl(){},
h3:function h3(){},
h4:function h4(){},
h5:function h5(){},
hm:function hm(){},
hn:function hn(){},
dp:function dp(){},
hG:function hG(){},
hJ:function hJ(){},
hK:function hK(){},
hR:function hR(){},
hS:function hS(){},
h_:function h_(){},
h6:function h6(a){this.a=a},
h9:function h9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iQ:function iQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ha:function ha(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hb:function hb(a){this.a=a},
bK:function bK(a){this.a=a},
y:function y(){},
d6:function d6(a){this.a=a},
eM:function eM(a){this.a=a},
eL:function eL(a,b,c){this.a=a
this.b=b
this.c=c},
bN:function bN(){},
hH:function hH(){},
hI:function hI(){},
hN:function hN(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
hO:function hO(){},
hL:function hL(){},
ca:function ca(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
d5:function d5(){},
hF:function hF(a,b){this.a=a
this.b=b},
dr:function dr(a){this.a=a},
hP:function hP(a){this.a=a},
bi:function bi(){},
bj:function bj(){},
bk:function bk(){},
bl:function bl(){},
bm:function bm(){},
bn:function bn(){},
cd:function cd(){},
cx:function cx(){},
cj:function cj(){},
cq:function cq(){},
cr:function cr(){},
cs:function cs(){},
ct:function ct(){},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
ch:function ch(){},
ci:function ci(){},
ck:function ck(){},
cm:function cm(){},
cn:function cn(){},
co:function co(){},
cy:function cy(){},
cA:function cA(){},
cK:function cK(){},
cL:function cL(){},
cJ:function cJ(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
cR:function cR(){},
cB:function cB(){},
cD:function cD(){},
cF:function cF(){},
cH:function cH(){},
cM:function cM(){},
cN:function cN(){}},B={
mN:function(a){var t,s
t=document
s=W.aK
W.ae(t,"keydown",new B.il(),!1,s)
W.ae(t,"keyup",new B.im(),!1,s)
if(!$.mO)W.ae(t,"mousemove",new B.io(),!1,W.J)
s=W.J
W.ae(t,"mousedown",new B.ip(),!1,s)
W.ae(t,"mouseup",new B.iq(),!1,s)},
lH:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.B(3))
s=$.$get$i_()
r=$.$get$bU()
q=new T.ad(new Float32Array(H.B(16)))
q.a3()
q=new B.eO(a,b,c,0,new T.t(t),-0.02,s,r,q,new T.t(new Float32Array(H.B(3))),new T.t(new Float32Array(H.B(3))),new T.t(new Float32Array(H.B(3))),new T.t(new Float32Array(H.B(3))),"camera:orbit",!1,!0)
q.d2(a,b,c,d)
return q},
il:function il(){},
im:function im(){},
io:function io(){},
ip:function ip(){},
iq:function iq(){},
eO:function eO(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
eP:function eP(a){this.a=a},
eQ:function eQ(a){this.a=a},
eR:function eR(){},
eS:function eS(a){this.a=a}},G={
lY:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.au(t,"\n")},
k2:function(a,b,c){var t,s,r,q
t=J.k(a)
s=t.bU(a,b)
t.ba(a,s,c)
t.bQ(a,s)
r=t.b6(a,s,35713)
if(r!=null&&!r){q=t.b5(a,s)
P.aa("E:Compilation failed:")
P.aa("E:"+G.lY(c))
P.aa("E:Failure:")
P.aa(C.j.a0("E:",q))
throw H.e(q)}return s},
jI:function(a,b){var t=new G.ey(P.I(),a,!1,!0)
t.d1(a,b)
return t},
jO:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.ac(null,null,null,P.q)
s=c.b
r=d.b
q=c.f
p=J.kL(b.a)
o=G.k2(b.a,35633,s)
J.j8(b.a,p,o)
n=G.k2(b.a,35632,r)
J.j8(b.a,p,n)
if(q.length>0)J.lc(b.a,p,q,35980)
J.l3(b.a,p)
if(!J.l2(b.a,p,35714))H.E(J.l1(b.a,p))
t=new G.f5(b,c,d,p,P.iK(c.c,null),P.I(),P.I(),t,null,a,!1,!0)
t.d3(a,b,c,d)
return t},
jC:function(a,b){var t=$.$get$ag()
if(H.ba(!t.E(0,a)))H.bS("duplicate shader variable "+a)
t.i(0,a,b)},
jB:function(a,b,c,d,e){var t=new G.ee(c,b,J.kM(a.a),e,a,new G.fy(!1,!1,!1,!0,1,9729,9729))
t.d_(a,b,c,d,e)
return t},
eC:function eC(){},
fJ:function fJ(){},
dC:function dC(){},
dE:function dE(a,b){this.a=a
this.b=b},
df:function df(a,b,c){this.a=a
this.b=b
this.c=c},
de:function de(a,b,c){this.a=a
this.b=b
this.c=c},
ey:function ey(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
bs:function bs(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
eV:function eV(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
f5:function f5(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
v:function v(a,b,c){this.a=a
this.b=b
this.c=c},
b5:function b5(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fe:function fe(){},
fy:function fy(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bG:function bG(){},
ee:function ee(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={
k1:function(){var t,s,r
t=document.createElement("canvas")
t.width=64
t.height=64
s=C.w.cw(t,"2d")
r=(s&&C.q).bT(s,32,32,1,32,32,22);(r&&C.n).ar(r,0,"gray")
C.n.ar(r,1,"black")
s.fillStyle=r
C.q.ej(s,0,0,64,64)
r=C.q.bT(s,32,32,1,32,32,6);(r&&C.n).ar(r,0,"white")
C.n.ar(r,1,"gray")
s.globalAlpha=0.9
s.fillStyle=r
s.arc(32,32,4,0,6.283185307179586,!1)
s.fill("nonzero")
return t},
fi:function fi(){},
fj:function fj(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
iZ:function(a){var t,s
t=C.Y.el(a,0,new A.i3())
s=536870911&t+(C.b.ct(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
i3:function i3(){}},T={ad:function ad(a){this.a=a},t:function t(a){this.a=a},b6:function b6(a){this.a=a}},Z={
lQ:function(a,b){var t,s,r,q,p
t=a.G()
s=a.G()
r=a.G()
q=new Float32Array(3)
p=new T.t(q)
q[0]=t-0.5
q[1]=s-0.5
q[2]=r-0.5
p.N(0,b)
return p},
jH:function(a,b,c,d){var t,s,r,q,p,o
t=[]
for(s=0;s<5;++s){r=a[s]
q=new Float32Array(3)
q[0]=r
q[1]=b
q[2]=c
p=new T.t(new Float32Array(3))
p.w(new T.t(q))
p.N(0,d)
q=new Z.f_(new T.t(new Float32Array(3)))
o=new T.t(new Float32Array(3))
o.w(p)
q.a=o
C.a.l(t,q)}return t},
jA:function(a){var t,s,r,q,p,o
t=new Float32Array(H.B(3*a.length))
for(s=a.length,r=0,q=0;p=a.length,q<p;p===s||(0,H.O)(a),++q){o=a[q].a.a
t[r]=o[0]
t[r+1]=o[1]
t[r+2]=o[2]
r+=3}return t},
iD:function(a,b){var t,s,r,q,p
H.d(a.length*3===b.length)
for(t=a.length,s=0,r=0;q=a.length,r<q;q===t||(0,H.O)(a),++r){p=a[r].a.a
b[s]=p[0]
b[s+1]=p[1]
b[s+2]=p[2]
s+=3}},
mH:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
t={}
G.jC("uSources",new G.v("vec3","",5))
G.jC("uSinks",new G.v("vec3","",5))
s=document
r=new R.fj(0,0,null,null,null,null)
r.d7(C.i.cz(s,"stats"),"blue","gray")
q=P.m8(0)
p=C.i.aY(s,"#webgl-canvas")
o=p.clientWidth
n=p.clientHeight
p.width=o
p.height=n
m=new G.dE(null,p)
s=(p&&C.w).b1(p,"webgl2",P.aL(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
m.a=s
if(s==null)H.E(P.c8('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
l="ChronosGL Config: "+J.aC(J.l_(s))
if($.mt>0)P.aa("I: "+l)
J.kH(s,0,0,0,1)
J.du(s,2929)
k=B.lH(15,0.5,0.5,p)
s=new T.ad(new Float32Array(H.B(16)))
s.a3()
l=new T.ad(new Float32Array(H.B(16)))
l.a3()
j=new G.eV(k,50,1,0.1,1000,s,l,new T.ad(new Float32Array(H.B(16))),P.I(),"perspective",!1,!0)
j.bi()
j.cW(o,n)
i=G.jO("CPU",m,$.$get$kt(),$.$get$ks())
h=G.jO("GPU",m,$.$get$kq(),$.$get$kp())
l=h.e
g=C.a.eq(l.f,"tPosition")
P.aa("@@@@ "+g)
f=Z.jH([2,1,0,-1,-2],0,2,3)
e=Z.jH([2,1,0,-1,-2],0,-2,3)
s=Z.lQ(q,10010)
d=new Z.cS(null)
c=new T.t(new Float32Array(H.B(3)))
c.w(s)
d.a=c
b=[d]
a=new Float32Array(H.B(3*b.length))
t.a=a
Z.iD(b,a)
d=$.$get$jk()
a0=G.jI("stars",d)
a0.D("uTexture",G.jB(m,"Utils::Particles",R.k1(),null,3553))
c=new T.ad(new Float32Array(H.B(16)))
c.a3()
a0.D("uModelMatrix",c)
a0.D("uPointSize",200)
c=i.d
a1=new G.bs(c,J.iw(c.a),0,P.I(),i.e.x,null,0,-1,null,null,P.I(),"meshdata:mdJS",!1,!0)
a1.aE(a)
a2=G.jI("stars",d)
a2.D("uTexture",G.jB(m,"Utils::Particles",R.k1(),null,3553))
d=new T.ad(new Float32Array(H.B(16)))
d.a3()
a2.D("uModelMatrix",d)
a2.D("uPointSize",200)
a2.D("uSources",Z.jA(f))
a2.D("uSinks",Z.jA(e))
d=h.d
l=l.x
a3=new G.bs(d,J.iw(d.a),0,P.I(),l,null,0,-1,null,null,P.I(),"meshdata:ionsOut",!1,!0)
a3.aE(a)
a4=new G.bs(d,J.iw(d.a),0,P.I(),l,null,0,-1,null,null,P.I(),"meshdata:ionsIn",!1,!0)
a4.aE(a)
l=new Z.ig(t,q,m,g,b,a3,a4)
a5=J.kN(m.a)
J.kD(m.a,36386,a5)
l.$1(null)
d=$.$get$iX()
d.toString
W.ae(d,"change",l,!1,W.i)
new Z.ii(r,m,k,j,i,h,b,a0,a1,a2,a3,a4,new Z.ih(t,q,f,e,b,a1)).$1(0)},
f_:function f_(a){this.a=a},
cS:function cS(a){this.a=a},
ig:function ig(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ih:function ih(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ii:function ii(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
_.cx=a5}}
var v=[C,H,J,P,W,B,G,R,A,T,Z]
setFunctionNamesIfNecessary(v)
var $={}
H.iH.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gq:function(a){return H.aN(a)},
k:function(a){return H.f1(a)}}
J.el.prototype={
k:function(a){return String(a)},
gq:function(a){return a?519018:218159},
$isax:1}
J.cW.prototype={
t:function(a,b){return null==b},
k:function(a){return"null"},
gq:function(a){return 0}}
J.bq.prototype={
gq:function(a){return 0},
k:function(a){return String(a)},
$islF:1}
J.eX.prototype={}
J.aR.prototype={}
J.aJ.prototype={
k:function(a){var t=a[$.$get$jr()]
return t==null?this.cS(a):J.aC(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isiF:1}
J.aH.prototype={
aS:function(a,b){if(!!a.immutable$list)throw H.e(new P.r(b))},
aR:function(a,b){if(!!a.fixed$length)throw H.e(new P.r(b))},
l:function(a,b){this.aR(a,"add")
a.push(b)},
I:function(a,b){var t,s,r,q,p
t=a.length
this.aR(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.O)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.E(new P.Z(a)))
a.push(q)}},
c4:function(a,b){return new H.br(a,b,[H.az(a,0),null])},
au:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
n:function(a,b){return a[b]},
gek:function(a){if(a.length>0)return a[0]
throw H.e(H.ek())},
gaU:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.ek())},
b9:function(a,b,c,d,e){var t,s
this.aS(a,"setRange")
P.jN(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.E(P.aO(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.lD())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
bI:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.Z(a))}return!1},
cL:function(a,b){this.aS(a,"sort")
H.db(a,0,a.length-1,P.mq())},
aB:function(a){return this.cL(a,null)},
er:function(a,b,c){var t
if(c>=a.length)return-1
for(t=c;t<a.length;++t)if(J.C(a[t],b))return t
return-1},
eq:function(a,b){return this.er(a,b,0)},
A:function(a,b){var t
for(t=0;t<a.length;++t)if(J.C(a[t],b))return!0
return!1},
k:function(a){return P.ej(a,"[","]")},
gv:function(a){return new J.dz(a,a.length,0,null,[H.az(a,0)])},
gq:function(a){return H.aN(a)},
gj:function(a){return a.length},
sj:function(a,b){this.aR(a,"set length")
if(b<0)throw H.e(P.aO(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.K(a,b))
if(b>=a.length||b<0)throw H.e(H.K(a,b))
return a[b]},
i:function(a,b,c){this.aS(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.K(a,b))
if(b>=a.length||b<0)throw H.e(H.K(a,b))
a[b]=c},
$isl:1,
$asl:function(){},
$isb:1,
$asb:null,
$isc:1,
$asc:null}
J.iG.prototype={}
J.dz.prototype={
gp:function(){return this.d},
m:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.O(t))
r=this.c
if(r>=s){this.sbk(null)
return!1}this.sbk(t[r]);++this.c
return!0},
sbk:function(a){this.d=a}}
J.b1.prototype={
M:function(a,b){var t
if(typeof b!=="number")throw H.e(H.M(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gat(b)
if(this.gat(a)===t)return 0
if(this.gat(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gat:function(a){return a===0?1/a<0:a<0},
e_:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.r(""+a+".ceil()"))},
a_:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.r(""+a+".round()"))},
e0:function(a,b,c){if(this.M(b,c)>0)throw H.e(H.M(b))
if(this.M(a,b)<0)return b
if(this.M(a,c)>0)return c
return a},
eO:function(a,b){var t
if(b>20)throw H.e(P.aO(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gat(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gq:function(a){return a&0x1FFFFFFF},
a0:function(a,b){if(typeof b!=="number")throw H.e(H.M(b))
return a+b},
a4:function(a,b){if(typeof b!=="number")throw H.e(H.M(b))
return a-b},
cu:function(a,b){if(typeof b!=="number")throw H.e(H.M(b))
return a/b},
B:function(a,b){if(typeof b!=="number")throw H.e(H.M(b))
return a*b},
u:function(a,b){return(a|0)===a?a/b|0:this.dM(a,b)},
dM:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.r("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
aM:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
ct:function(a,b){if(typeof b!=="number")throw H.e(H.M(b))
return(a&b)>>>0},
cU:function(a,b){if(typeof b!=="number")throw H.e(H.M(b))
return(a^b)>>>0},
aj:function(a,b){if(typeof b!=="number")throw H.e(H.M(b))
return a<b},
az:function(a,b){if(typeof b!=="number")throw H.e(H.M(b))
return a>b},
cv:function(a,b){if(typeof b!=="number")throw H.e(H.M(b))
return a>=b},
$isX:1}
J.cV.prototype={$isN:1,$iso:1,$isX:1}
J.cU.prototype={$isN:1,$isX:1}
J.aI.prototype={
br:function(a,b){if(b>=a.length)throw H.e(H.K(a,b))
return a.charCodeAt(b)},
a0:function(a,b){if(typeof b!=="string")throw H.e(P.jj(b,null,null))
return a+b},
cN:function(a,b,c){var t
if(c>a.length)throw H.e(P.aO(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
cM:function(a,b){return this.cN(a,b,0)},
bc:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.f3(b,null,null))
if(b>c)throw H.e(P.f3(b,null,null))
if(c>a.length)throw H.e(P.f3(c,null,null))
return a.substring(b,c)},
cP:function(a,b){return this.bc(a,b,null)},
eN:function(a){return a.toLowerCase()},
e2:function(a,b,c){if(c>a.length)throw H.e(P.aO(c,0,a.length,null,null))
return H.mP(a,b,c)},
M:function(a,b){var t
if(typeof b!=="string")throw H.e(H.M(b))
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
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.K(a,b))
return a[b]},
$isl:1,
$asl:function(){},
$isq:1}
H.b.prototype={$asb:null}
H.b2.prototype={
gv:function(a){return new H.cY(this,this.gj(this),0,null,[H.ah(this,"b2",0)])},
ax:function(a,b){return this.cR(0,b)},
eM:function(a,b){var t,s
t=H.L([],[H.ah(this,"b2",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.n(0,s)
return t},
eL:function(a){return this.eM(a,!0)}}
H.cY.prototype={
gp:function(){return this.d},
m:function(){var t,s,r,q
t=this.a
s=J.a9(t)
r=s.gj(t)
if(this.b!==r)throw H.e(new P.Z(t))
q=this.c
if(q>=r){this.sa6(null)
return!1}this.sa6(s.n(t,q));++this.c
return!0},
sa6:function(a){this.d=a}}
H.cZ.prototype={
gv:function(a){return new H.eu(null,J.bd(this.a),this.b,this.$ti)},
gj:function(a){return J.dv(this.a)},
$asS:function(a,b){return[b]}}
H.dO.prototype={$isb:1,
$asb:function(a,b){return[b]}}
H.eu.prototype={
m:function(){var t=this.b
if(t.m()){this.sa6(this.c.$1(t.gp()))
return!0}this.sa6(null)
return!1},
gp:function(){return this.a},
sa6:function(a){this.a=a},
$ascT:function(a,b){return[b]}}
H.br.prototype={
gj:function(a){return J.dv(this.a)},
n:function(a,b){return this.b.$1(J.kT(this.a,b))},
$asb:function(a,b){return[b]},
$asb2:function(a,b){return[b]},
$asS:function(a,b){return[b]}}
H.dj.prototype={
gv:function(a){return new H.fS(J.bd(this.a),this.b,this.$ti)}}
H.fS.prototype={
m:function(){var t,s
for(t=this.a,s=this.b;t.m();)if(s.$1(t.gp()))return!0
return!1},
gp:function(){return this.a.gp()}}
H.c9.prototype={}
H.ir.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.is.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hu.prototype={
sex:function(a){this.z=a},
seA:function(a){this.ch=a}}
H.aV.prototype={
bH:function(a,b){if(!this.f.t(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aP()},
eG:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.af(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.by();++r.d}this.y=!1}this.aP()},
dP:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.t(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eF:function(a){var t,s,r
if(this.ch==null)return
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.t(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.E(new P.r("removeRange"))
P.jN(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cI:function(a,b){if(!this.r.t(0,a))return
this.db=b},
eo:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.C(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.iL(null,null)
this.cx=t}t.O(0,new H.hp(a,c))},
en:function(a,b){var t
if(!this.r.t(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.av()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.iL(null,null)
this.cx=t}t.O(0,this.gey())},
ep:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.aa(a)
if(b!=null)P.aa(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aC(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bL(t,t.r,null,null,[null]),r.c=t.e;r.m();)r.d.C(0,s)},
aa:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.P(o)
p=H.ay(o)
this.ep(q,p)
if(this.db){this.av()
if(this===u.globalState.e)throw o}}finally{this.cy=H.ml(r)
u.globalState.d=H.j0(t,"$isaV")
if(t!=null)$=t.gew()
if(this.cx!=null)for(;n=this.cx,!n.gad(n);)this.cx.c7().$0()}return s},
c3:function(a){return this.b.h(0,a)},
bo:function(a,b){var t=this.b
if(t.E(0,a))throw H.e(P.c8("Registry: ports must be registered only once."))
t.i(0,a,b)},
aP:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.av()},
av:function(){var t,s,r
t=this.cx
if(t!=null)t.S(0)
for(t=this.b,s=t.gcr(t),s=s.gv(s);s.m();)s.gp().dm()
t.S(0)
this.c.S(0)
u.globalState.z.af(0,this.a)
this.dx.S(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].C(0,t[r+1])
this.ch=null}},
gew:function(){return this.d},
ge3:function(){return this.e}}
H.hp.prototype={
$0:function(){this.a.C(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.h7.prototype={
eb:function(){var t=this.a
if(t.b===t.c)return
return t.c7()},
c9:function(){var t,s,r
t=this.eb()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.E(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gad(s)}else s=!1
else s=!1
else s=!1
if(s)H.E(P.c8("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gad(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aL(["command","close"])
r=new H.af(!0,new P.dn(0,null,null,null,null,null,0,[null,P.o])).H(r)
s.toString
self.postMessage(r)}return!1}t.eD()
return!0},
bD:function(){if(self.window!=null)new H.h8(this).$0()
else for(;this.c9(););},
ag:function(){var t,s,r,q,p
if(!u.globalState.x)this.bD()
else try{this.bD()}catch(r){t=H.P(r)
s=H.ay(r)
q=u.globalState.Q
p=P.aL(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.af(!0,P.bM(null,P.o)).H(p)
q.toString
self.postMessage(p)}}}
H.h8.prototype={
$0:function(){if(!this.a.c9())return
P.lX(C.y,this)},
$S:function(){return{func:1,v:true}}}
H.aW.prototype={
eD:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.aa(this.b)}}
H.ht.prototype={}
H.eh.prototype={
$0:function(){H.lz(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.ei.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bb(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bb(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aP()},
$S:function(){return{func:1,v:true}}}
H.h0.prototype={}
H.b7.prototype={
C:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.m9(b)
if(t.ge3()===s){s=J.a9(r)
switch(s.h(r,0)){case"pause":t.bH(s.h(r,1),s.h(r,2))
break
case"resume":t.eG(s.h(r,1))
break
case"add-ondone":t.dP(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eF(s.h(r,1))
break
case"set-errors-fatal":t.cI(s.h(r,1),s.h(r,2))
break
case"ping":t.eo(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.en(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.af(0,s)
break}return}u.globalState.f.a.O(0,new H.aW(t,new H.hv(this,r),"receive"))},
t:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.b7){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gq:function(a){return this.b.a}}
H.hv.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dk(0,this.b)},
$S:function(){return{func:1}}}
H.bO.prototype={
C:function(a,b){var t,s,r
t=P.aL(["command","message","port",this,"msg",b])
s=new H.af(!0,P.bM(null,P.o)).H(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
t:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bO){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gq:function(a){return C.b.cU((this.b<<16^this.a<<8)>>>0,this.c)}}
H.b4.prototype={
dm:function(){this.c=!0
this.b=null},
dk:function(a,b){if(this.c)return
this.b.$1(b)},
$islS:1}
H.fA.prototype={
d8:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.O(0,new H.aW(s,new H.fB(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.bT(new H.fC(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.r("Timer greater than 0."))}}}
H.fB.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.fC.prototype={
$0:function(){this.a.c=null
H.ie()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.al.prototype={
gq:function(a){var t=this.a
t=C.b.aM(t,0)^C.b.u(t,4294967296)
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
H.af.prototype={
H:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.u(a)
if(!!t.$isbu)return["buffer",a]
if(!!t.$isaM)return["typed",a]
if(!!t.$isl)return this.cE(a)
if(!!t.$islw){r=this.gcB()
q=t.gF(a)
q=H.iM(q,r,H.ah(q,"S",0),null)
q=P.jG(q,!0,H.ah(q,"S",0))
t=t.gcr(a)
t=H.iM(t,r,H.ah(t,"S",0),null)
return["map",q,P.jG(t,!0,H.ah(t,"S",0))]}if(!!t.$islF)return this.cF(a)
if(!!t.$isa)this.cp(a)
if(!!t.$islS)this.ah(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isb7)return this.cG(a)
if(!!t.$isbO)return this.cH(a)
if(!!t.$isaZ){p=a.$static_name
if(p==null)this.ah(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isal)return["capability",a.a]
if(!(a instanceof P.m))this.cp(a)
return["dart",u.classIdExtractor(a),this.cD(u.classFieldsExtractor(a))]},
ah:function(a,b){throw H.e(new P.r((b==null?"Can't transmit:":b)+" "+H.f(a)))},
cp:function(a){return this.ah(a,null)},
cE:function(a){var t
H.d(typeof a!=="string")
t=this.cC(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ah(a,"Can't serialize indexable: ")},
cC:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.H(a[s])
return t},
cD:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.H(a[t]))
return a},
cF:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ah(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.H(a[t[r]])
return["js-object",t,s]},
cH:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cG:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aU.prototype={
T:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.ji("Bad serialized message: "+H.f(a)))
switch(C.a.gek(a)){case"ref":H.d(J.C(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.d(J.C(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.d(J.C(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.d(J.C(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
s=H.L(this.a9(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.C(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.L(this.a9(t),[null])
case"mutable":H.d(J.C(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.a9(t)
case"const":H.d(J.C(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.L(this.a9(t),[null])
s.fixed$length=Array
return s
case"map":return this.ee(a)
case"sendport":return this.ef(a)
case"raw sendport":H.d(J.C(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.ed(a)
case"function":H.d(J.C(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.C(a[0],"capability"))
return new H.al(a[1])
case"dart":H.d(J.C(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.l(this.b,p)
this.a9(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.f(a))}},
a9:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.T(a[t]))
return a},
ee:function(a){var t,s,r,q,p
H.d(J.C(a[0],"map"))
t=a[1]
s=a[2]
r=P.I()
C.a.l(this.b,r)
t=J.l4(t,this.gec()).eL(0)
for(q=J.a9(s),p=0;p<t.length;++p)r.i(0,t[p],this.T(q.h(s,p)))
return r},
ef:function(a){var t,s,r,q,p,o,n
H.d(J.C(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.c3(r)
if(o==null)return
n=new H.b7(o,s)}else n=new H.bO(t,r,s)
C.a.l(this.b,n)
return n},
ed:function(a){var t,s,r,q,p,o
H.d(J.C(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.a9(t),p=J.a9(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.T(p.h(s,o))
return r}}
H.f4.prototype={}
H.fG.prototype={
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
H.d7.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.en.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.fK.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.it.prototype={
$1:function(a){if(!!J.u(a).$isb0)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dq.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.i8.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.i9.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.ia.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.ib.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.ic.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.aZ.prototype={
k:function(a){return"Closure '"+H.f2(this).trim()+"'"},
$isiF:1,
geT:function(){return this},
$D:null}
H.fu.prototype={}
H.fh.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.be.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.be))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gq:function(a){var t,s
t=this.c
if(t==null)s=H.aN(this.a)
else s=typeof t!=="object"?J.aj(t):H.aN(t)
return(s^H.aN(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.f1(t)}}
H.fI.prototype={
k:function(a){return this.a}}
H.dD.prototype={
k:function(a){return this.a}}
H.f8.prototype={
k:function(a){return"RuntimeError: "+H.f(this.a)}}
H.fV.prototype={
k:function(a){return C.j.a0("Assertion failed: ",P.iC(this.a))}}
H.dh.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gq:function(a){return J.aj(this.a)},
t:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.dh){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ab.prototype={
gj:function(a){return this.a},
gad:function(a){return this.a===0},
gF:function(a){return new H.eq(this,[H.az(this,0)])},
gcr:function(a){return H.iM(this.gF(this),new H.em(this),H.az(this,0),H.az(this,1))},
E:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bv(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bv(s,b)}else return this.es(b)},
es:function(a){var t=this.d
if(t==null)return!1
return this.ac(this.ap(t,this.ab(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.a7(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.a7(r,b)
return s==null?null:s.b}else return this.eu(b)},
eu:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.ap(t,this.ab(a))
r=this.ac(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aJ()
this.b=t}this.bm(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aJ()
this.c=s}this.bm(s,b,c)}else{r=this.d
if(r==null){r=this.aJ()
this.d=r}q=this.ab(b)
p=this.ap(r,q)
if(p==null)this.aL(r,q,[this.aK(b,c)])
else{o=this.ac(p,b)
if(o>=0)p[o].b=c
else p.push(this.aK(b,c))}}},
af:function(a,b){if(typeof b==="string")return this.bB(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bB(this.c,b)
else return this.ev(b)},
ev:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.ap(t,this.ab(a))
r=this.ac(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bF(q)
return q.b},
S:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
as:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.Z(this))
t=t.c}},
bm:function(a,b,c){var t=this.a7(a,b)
if(t==null)this.aL(a,b,this.aK(b,c))
else t.b=c},
bB:function(a,b){var t
if(a==null)return
t=this.a7(a,b)
if(t==null)return
this.bF(t)
this.bw(a,b)
return t.b},
aK:function(a,b){var t,s
t=new H.ep(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bF:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
ab:function(a){return J.aj(a)&0x3ffffff},
ac:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.C(a[s].a,b))return s
return-1},
k:function(a){return P.lG(this)},
a7:function(a,b){return a[b]},
ap:function(a,b){return a[b]},
aL:function(a,b,c){H.d(c!=null)
a[b]=c},
bw:function(a,b){delete a[b]},
bv:function(a,b){return this.a7(a,b)!=null},
aJ:function(){var t=Object.create(null)
this.aL(t,"<non-identifier-key>",t)
this.bw(t,"<non-identifier-key>")
return t},
$islw:1}
H.em.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.ep.prototype={}
H.eq.prototype={
gj:function(a){return this.a.a},
gv:function(a){var t,s
t=this.a
s=new H.er(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.er.prototype={
gp:function(){return this.d},
m:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.Z(t))
else{t=this.c
if(t==null){this.sbl(null)
return!1}else{this.sbl(t.a)
this.c=this.c.c
return!0}}},
sbl:function(a){this.d=a}}
H.i4.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.i5.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.q]}}}
H.i6.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.q]}}}
H.bu.prototype={$isbu:1}
H.aM.prototype={$isaM:1}
H.d0.prototype={
gj:function(a){return a.length},
$isl:1,
$asl:function(){},
$isn:1,
$asn:function(){}}
H.d1.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.K(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.K(a,b))
a[b]=c}}
H.d2.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.K(a,b))
a[b]=c},
$isb:1,
$asb:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]}}
H.d_.prototype={$isb:1,
$asb:function(){return[P.N]},
$isc:1,
$asc:function(){return[P.N]},
$isiE:1}
H.eD.prototype={$isb:1,
$asb:function(){return[P.N]},
$isc:1,
$asc:function(){return[P.N]}}
H.eE.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.K(a,b))
return a[b]},
$isb:1,
$asb:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]}}
H.eF.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.K(a,b))
return a[b]},
$isb:1,
$asb:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]},
$islv:1}
H.eG.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.K(a,b))
return a[b]},
$isb:1,
$asb:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]}}
H.eH.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.K(a,b))
return a[b]},
$isb:1,
$asb:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]}}
H.eI.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.K(a,b))
return a[b]},
$isb:1,
$asb:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]}}
H.d3.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.K(a,b))
return a[b]},
$isb:1,
$asb:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]}}
H.eJ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.K(a,b))
return a[b]},
$isb:1,
$asb:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]}}
H.bv.prototype={
$asl:function(){},
$isb:1,
$asb:function(){return[P.N]},
$asn:function(){},
$isc:1,
$asc:function(){return[P.N]}}
H.bw.prototype={
$asl:function(){},
$isb:1,
$asb:function(){return[P.o]},
$asn:function(){},
$isc:1,
$asc:function(){return[P.o]}}
H.bx.prototype={
$asl:function(){},
$asb:function(){return[P.o]},
$asn:function(){},
$asc:function(){return[P.o]}}
H.by.prototype={
$asl:function(){},
$asb:function(){return[P.N]},
$asn:function(){},
$asc:function(){return[P.N]}}
P.fX.prototype={
$1:function(a){var t,s
H.ie()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.fW.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.fY.prototype={
$0:function(){H.ie()
this.a.$0()},
$S:function(){return{func:1}}}
P.fZ.prototype={
$0:function(){H.ie()
this.a.$0()},
$S:function(){return{func:1}}}
P.h2.prototype={}
P.hM.prototype={
e1:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.au("Future already completed"))
t.aG(b)}}
P.dm.prototype={
eB:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.aZ(this.d,a.a)},
em:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bb(s,{func:1,args:[P.m,P.bD]}))return t.eH(s,a.a,a.b)
else return t.aZ(s,a.a)}}
P.ar.prototype={
ce:function(a,b){var t,s,r
t=$.A
if(t!==C.f){t.toString
if(b!=null)b=P.md(b,t)}s=new P.ar(0,t,null,[null])
r=b==null?1:3
this.bn(new P.dm(null,s,r,a,b,[H.az(this,0),null]))
return s},
cd:function(a){return this.ce(a,null)},
bq:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
bn:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.j0(this.c,"$isdm")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.bn(a)
return}this.bq(t)}H.d(this.a>=4)
t=this.b
t.toString
P.hW(null,null,t,new P.hd(this,a))}},
bA:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.bA(a)
return}this.bq(s)}H.d(this.a>=4)
t.a=this.a8(a)
s=this.b
s.toString
P.hW(null,null,s,new P.hh(t,this))}},
bC:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.a8(t)},
a8:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aG:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.iV(a,"$isea",t,"$asea"))if(H.iV(a,"$isar",t,null))P.k3(a,this)
else P.m3(a,this)
else{s=this.bC()
H.d(this.a<4)
this.a=4
this.c=a
P.bI(this,s)}},
am:function(a,b){var t
H.d(this.a<4)
t=this.bC()
H.d(this.a<4)
this.a=8
this.c=new P.aY(a,b)
P.bI(this,t)},
dq:function(a){return this.am(a,null)},
$isea:1,
gaN:function(){return this.a},
gdI:function(){return this.c}}
P.hd.prototype={
$0:function(){P.bI(this.a,this.b)},
$S:function(){return{func:1}}}
P.hh.prototype={
$0:function(){P.bI(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.he.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.aG(a)},
$S:function(){return{func:1,args:[,]}}}
P.hf.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.am(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hg.prototype={
$0:function(){this.a.am(this.b,this.c)},
$S:function(){return{func:1}}}
P.hk.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.c8(q.d)}catch(n){s=H.P(n)
r=H.ay(n)
if(this.c){q=this.a.a
H.d(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.d(q.a===8)
p.b=q.c}else p.b=new P.aY(s,r)
p.a=!0
return}if(!!J.u(t).$isea){if(t instanceof P.ar&&t.gaN()>=4){if(t.gaN()===8){q=t
H.d(q.gaN()===8)
p=this.b
p.b=q.gdI()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.cd(new P.hl(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hl.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.hj.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.aZ(r.d,this.c)}catch(q){t=H.P(q)
s=H.ay(q)
r=this.a
r.b=new P.aY(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hi.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.eB(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.em(t)
p.a=!1}}catch(o){s=H.P(o)
r=H.ay(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.aY(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.dk.prototype={}
P.fl.prototype={
gj:function(a){var t,s
t={}
s=new P.ar(0,$.A,null,[P.o])
t.a=0
this.ez(new P.fn(t),!0,new P.fo(t,s),s.gdn())
return s}}
P.fn.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.fo.prototype={
$0:function(){this.b.aG(this.a.a)},
$S:function(){return{func:1}}}
P.fm.prototype={}
P.aY.prototype={
k:function(a){return H.f(this.a)},
$isb0:1}
P.hT.prototype={}
P.hV.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.d8()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.hy.prototype={
eI:function(a){var t,s,r
try{if(C.f===$.A){a.$0()
return}P.k8(null,null,this,a)}catch(r){t=H.P(r)
s=H.ay(r)
P.hU(null,null,this,t,s)}},
eJ:function(a,b){var t,s,r
try{if(C.f===$.A){a.$1(b)
return}P.k9(null,null,this,a,b)}catch(r){t=H.P(r)
s=H.ay(r)
P.hU(null,null,this,t,s)}},
dW:function(a){return new P.hA(this,a)},
aQ:function(a){return new P.hz(this,a)},
dY:function(a){return new P.hB(this,a)},
h:function(a,b){return},
c8:function(a){if($.A===C.f)return a.$0()
return P.k8(null,null,this,a)},
aZ:function(a,b){if($.A===C.f)return a.$1(b)
return P.k9(null,null,this,a,b)},
eH:function(a,b,c){if($.A===C.f)return a.$2(b,c)
return P.me(null,null,this,a,b,c)}}
P.hA.prototype={
$0:function(){return this.a.c8(this.b)},
$S:function(){return{func:1}}}
P.hz.prototype={
$0:function(){return this.a.eI(this.b)},
$S:function(){return{func:1}}}
P.hB.prototype={
$1:function(a){return this.a.eJ(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dn.prototype={
ab:function(a){return H.mJ(a)&0x3ffffff},
ac:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hq.prototype={
gv:function(a){var t=new P.bL(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
A:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dr(b)},
dr:function(a){var t=this.d
if(t==null)return!1
return this.ao(t[this.an(a)],a)>=0},
c3:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.A(0,a)?a:null
else return this.dC(a)},
dC:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.an(a)]
r=this.ao(s,a)
if(r<0)return
return J.j6(s,r).gdt()},
l:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bs(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bs(r,b)}else return this.O(0,b)},
O:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.m6()
this.d=t}s=this.an(b)
r=t[s]
if(r==null){q=[this.aF(b)]
H.d(q!=null)
t[s]=q}else{if(this.ao(r,b)>=0)return!1
r.push(this.aF(b))}return!0},
af:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bt(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bt(this.c,b)
else return this.dD(0,b)},
dD:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.an(b)]
r=this.ao(s,b)
if(r<0)return!1
this.bu(s.splice(r,1)[0])
return!0},
S:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bs:function(a,b){var t
if(a[b]!=null)return!1
t=this.aF(b)
H.d(!0)
a[b]=t
return!0},
bt:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bu(t)
delete a[b]
return!0},
aF:function(a){var t,s
t=new P.hr(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bu:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
an:function(a){return J.aj(a)&0x3ffffff},
ao:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.C(a[s].a,b))return s
return-1},
$isb:1,
$asb:null}
P.hr.prototype={
gdt:function(){return this.a}}
P.bL.prototype={
gp:function(){return this.d},
m:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.Z(t))
else{t=this.c
if(t==null){this.sa5(null)
return!1}else{this.sa5(t.a)
this.c=this.c.b
return!0}}},
sa5:function(a){this.d=a}}
P.ho.prototype={}
P.cX.prototype={}
P.w.prototype={
gv:function(a){return new H.cY(a,this.gj(a),0,null,[H.ah(a,"w",0)])},
n:function(a,b){return this.h(a,b)},
c4:function(a,b){return new H.br(a,b,[H.ah(a,"w",0),null])},
el:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.e(new P.Z(a))}return s},
k:function(a){return P.ej(a,"[","]")},
$isb:1,
$asb:null,
$isc:1,
$asc:null}
P.ev.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.f(a)
t.a=s+": "
t.a+=H.f(b)},
$S:function(){return{func:1,args:[,,]}}}
P.es.prototype={
gv:function(a){return new P.hs(this,this.c,this.d,this.b,null,this.$ti)},
gad:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
n:function(a,b){var t,s
t=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=t)H.E(P.z(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
S:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.ej(this,"{","}")},
c7:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.ek());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
O:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.by();++this.d},
by:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.L(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.b9(s,0,q,t,r)
C.a.b9(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbE(s)},
d0:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbE(H.L(t,[b]))},
sbE:function(a){this.a=a},
$asb:null}
P.hs.prototype={
gp:function(){return this.e},
m:function(){var t,s
t=this.a
if(this.c!==t.d)H.E(new P.Z(t))
s=this.d
if(s===this.b){this.sa5(null)
return!1}this.sa5(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sa5:function(a){this.e=a}}
P.fb.prototype={
I:function(a,b){var t
for(t=J.bd(b);t.m();)this.l(0,t.gp())},
k:function(a){return P.ej(this,"{","}")},
$isb:1,
$asb:null}
P.fa.prototype={}
P.bA.prototype={$isb:1,$asb:null,$isc:1,$asc:null}
P.ax.prototype={}
P.F.prototype={}
P.bf.prototype={
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.bf))return!1
return this.a===b.a&&this.b===b.b},
M:function(a,b){return C.b.M(this.a,b.a)},
gq:function(a){var t=this.a
return(t^C.b.aM(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.lp(H.lO(this))
s=P.c3(H.lM(this))
r=P.c3(H.lI(this))
q=P.c3(H.lJ(this))
p=P.c3(H.lL(this))
o=P.c3(H.lN(this))
n=P.lq(H.lK(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isF:1,
$asF:function(){return[P.bf]}}
P.N.prototype={$isF:1,
$asF:function(){return[P.X]}}
P.aG.prototype={
aj:function(a,b){return C.b.aj(this.a,b.gds())},
az:function(a,b){return C.b.az(this.a,b.gds())},
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.aG))return!1
return this.a===b.a},
gq:function(a){return this.a&0x1FFFFFFF},
M:function(a,b){return C.b.M(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.dN()
s=this.a
if(s<0)return"-"+new P.aG(0-s).k(0)
r=t.$1(C.b.u(s,6e7)%60)
q=t.$1(C.b.u(s,1e6)%60)
p=new P.dM().$1(s%1e6)
return""+C.b.u(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isF:1,
$asF:function(){return[P.aG]}}
P.dM.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.q,args:[P.o]}}}
P.dN.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.q,args:[P.o]}}}
P.b0.prototype={}
P.bZ.prototype={
k:function(a){return"Assertion failed"}}
P.d8.prototype={
k:function(a){return"Throw of null."}}
P.ak.prototype={
gaI:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaH:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+t
q=this.gaI()+s+r
if(!this.a)return q
p=this.gaH()
o=P.iC(this.b)
return q+p+": "+H.f(o)}}
P.bB.prototype={
gaI:function(){return"RangeError"},
gaH:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.ef.prototype={
gaI:function(){return"RangeError"},
gaH:function(){H.d(this.a)
if(J.ky(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gj:function(a){return this.f}}
P.r.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.di.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.au.prototype={
k:function(a){return"Bad state: "+this.a}}
P.Z.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.iC(t))+"."}}
P.dc.prototype={
k:function(a){return"Stack Overflow"},
$isb0:1}
P.dH.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hc.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.e9.prototype={
k:function(a){var t,s
t=this.a
s=t!=null&&""!==t?"FormatException: "+H.f(t):"FormatException"
return s}}
P.dP.prototype={
k:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.E(P.jj(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.jK(b,"expando$values")
return s==null?null:H.jK(s,t)}}
P.o.prototype={$isF:1,
$asF:function(){return[P.X]}}
P.S.prototype={
ax:function(a,b){return new H.dj(this,b,[H.ah(this,"S",0)])},
gj:function(a){var t,s
H.d(!this.$isb)
t=this.gv(this)
for(s=0;t.m();)++s
return s},
gX:function(a){var t,s
t=this.gv(this)
if(!t.m())throw H.e(H.ek())
s=t.gp()
if(t.m())throw H.e(H.lE())
return s},
n:function(a,b){var t,s,r
if(b<0)H.E(P.aO(b,0,null,"index",null))
for(t=this.gv(this),s=0;t.m();){r=t.gp()
if(b===s)return r;++s}throw H.e(P.z(b,this,"index",null,s))},
k:function(a){return P.lC(this,"(",")")}}
P.cT.prototype={}
P.c.prototype={$isb:1,$asb:null,$asc:null}
P.at.prototype={}
P.b3.prototype={
gq:function(a){return P.m.prototype.gq.call(this,this)},
k:function(a){return"null"}}
P.X.prototype={$isF:1,
$asF:function(){return[P.X]}}
P.m.prototype={constructor:P.m,$ism:1,
t:function(a,b){return this===b},
gq:function(a){return H.aN(this)},
k:function(a){return H.f1(this)},
toString:function(){return this.k(this)}}
P.bD.prototype={}
P.q.prototype={$isF:1,
$asF:function(){return[P.q]}}
P.bE.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gY:function(){return this.a}}
W.j.prototype={}
W.dx.prototype={
k:function(a){return String(a)},
$isa:1}
W.dy.prototype={
k:function(a){return String(a)},
$isa:1}
W.Y.prototype={$ism:1}
W.dB.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
n:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]},
$isn:1,
$asn:function(){return[W.Y]},
$isc:1,
$asc:function(){return[W.Y]}}
W.c_.prototype={}
W.aE.prototype={$isa:1,$isaE:1}
W.c0.prototype={
b1:function(a,b,c){if(c!=null)return this.dv(a,b,P.mp(c,null))
return this.dw(a,b)},
cw:function(a,b){return this.b1(a,b,null)},
dv:function(a,b,c){return a.getContext(b,c)},
dw:function(a,b){return a.getContext(b)}}
W.c1.prototype={
ar:function(a,b,c){return a.addColorStop(b,c)}}
W.c2.prototype={
bT:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
ej:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
ay:function(a){return P.hZ(a.getContextAttributes())}}
W.aF.prototype={$isa:1,
gj:function(a){return a.length}}
W.dF.prototype={$isa:1}
W.x.prototype={$ism:1}
W.b_.prototype={
bp:function(a,b){var t,s
t=$.$get$jq()
s=t[b]
if(typeof s==="string")return s
s=this.dL(a,b)
t[b]=s
return s},
dL:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.lr()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.dG.prototype={}
W.dI.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.c4.prototype={}
W.bg.prototype={
dQ:function(a,b){return a.adoptNode(b)},
cz:function(a,b){return a.getElementById(b)},
aY:function(a,b){return a.querySelector(b)}}
W.c5.prototype={$isa:1}
W.dJ.prototype={
k:function(a){return String(a)}}
W.c6.prototype={
e7:function(a,b){return a.createHTMLDocument(b)}}
W.c7.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gW(a))+" x "+H.f(this.gV(a))},
t:function(a,b){var t
if(b==null)return!1
t=J.u(b)
if(!t.$isH)return!1
return a.left===t.gaV(b)&&a.top===t.gb0(b)&&this.gW(a)===t.gW(b)&&this.gV(a)===t.gV(b)},
gq:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gW(a)
q=this.gV(a)
return W.k6(W.aX(W.aX(W.aX(W.aX(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gV:function(a){return a.height},
gaV:function(a){return a.left},
gb0:function(a){return a.top},
gW:function(a){return a.width},
$isH:1,
$asH:function(){}}
W.dK.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
n:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]},
$isn:1,
$asn:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]}}
W.dL.prototype={
gj:function(a){return a.length}}
W.a_.prototype={
gdT:function(a){return new W.h6(a)},
k:function(a){return a.localName},
J:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.jy
if(t==null){t=H.L([],[W.d5])
s=new W.d6(t)
C.a.l(t,W.k4(null))
C.a.l(t,W.k7())
$.jy=s
d=s}else d=t
t=$.jx
if(t==null){t=new W.dr(d)
$.jx=t
c=t}else{t.a=d
c=t}}if($.as==null){t=document
s=t.implementation
s=(s&&C.L).e7(s,"")
$.as=s
$.iB=s.createRange()
s=$.as
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.as.head;(t&&C.M).L(t,r)}t=$.as
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.j0(s,"$isaE")}t=$.as
if(!!this.$isaE)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.as.body;(t&&C.p).L(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.A(C.W,a.tagName)){t=$.iB;(t&&C.F).cA(t,q)
t=$.iB
p=(t&&C.F).e5(t,b)}else{q.innerHTML=b
p=$.as.createDocumentFragment()
for(t=J.k(p);s=q.firstChild,s!=null;)t.L(p,s)}t=$.as.body
if(q==null?t!=null:q!==t)J.l6(q)
c.b8(p)
C.i.dQ(document,p)
return p},
e6:function(a,b,c){return this.J(a,b,c,null)},
cK:function(a,b,c,d){a.textContent=null
this.L(a,this.J(a,b,c,d))},
cJ:function(a,b){return this.cK(a,b,null,null)},
a1:function(a,b){return a.getAttribute(b)},
dE:function(a,b){return a.removeAttribute(b)},
$isa:1,
$ism:1,
$isa_:1,
$ish:1,
$isp:1,
geK:function(a){return a.tagName}}
W.hX.prototype={
$1:function(a){return!!J.u(a).$isa_},
$S:function(){return{func:1,args:[,]}}}
W.i.prototype={$ism:1,$isi:1}
W.h.prototype={
dl:function(a,b,c,d){return a.addEventListener(b,H.bT(c,1),!1)},
$ism:1,
$ish:1}
W.a0.prototype={$ism:1}
W.e5.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
n:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]},
$isn:1,
$asn:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]}}
W.e6.prototype={
gj:function(a){return a.length}}
W.e8.prototype={
gj:function(a){return a.length}}
W.a1.prototype={$ism:1}
W.cb.prototype={}
W.eb.prototype={
gj:function(a){return a.length}}
W.bo.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
n:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]},
$isn:1,
$asn:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]}}
W.cc.prototype={}
W.ec.prototype={
C:function(a,b){return a.send(b)}}
W.bp.prototype={}
W.eg.prototype={$isa:1,$isa_:1}
W.aK.prototype={$ism:1,$isi:1,$isaK:1}
W.et.prototype={
k:function(a){return String(a)}}
W.ez.prototype={
gj:function(a){return a.length}}
W.eA.prototype={
eU:function(a,b,c){return a.send(b,c)},
C:function(a,b){return a.send(b)}}
W.bt.prototype={}
W.a2.prototype={$ism:1}
W.eB.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
n:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]},
$isn:1,
$asn:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]}}
W.J.prototype={$ism:1,$isi:1,$isJ:1}
W.eK.prototype={$isa:1}
W.R.prototype={
gX:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.au("No elements"))
if(s>1)throw H.e(new P.au("More than one element"))
return t.firstChild},
I:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.k(s),p=0;p<r;++p)q.L(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.kB(t,c,C.D.h(t.childNodes,b))},
gv:function(a){var t=this.a.childNodes
return new W.ca(t,t.length,-1,null,[H.ah(t,"y",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.D.h(this.a.childNodes,b)},
$asb:function(){return[W.p]},
$ascX:function(){return[W.p]},
$asc:function(){return[W.p]},
$asbA:function(){return[W.p]}}
W.p.prototype={
eE:function(a){var t=a.parentNode
if(t!=null)J.bc(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.cQ(a):t},
L:function(a,b){return a.appendChild(b)},
dF:function(a,b){return a.removeChild(b)},
dG:function(a,b,c){return a.replaceChild(b,c)},
$ism:1,
$ish:1,
$isp:1,
gaW:function(a){return a.previousSibling}}
W.d4.prototype={
aX:function(a){return a.previousNode()}}
W.bz.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
n:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]},
$isn:1,
$asn:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]}}
W.eT.prototype={$isa:1}
W.eW.prototype={
gj:function(a){return a.length}}
W.a3.prototype={$ism:1,
gj:function(a){return a.length}}
W.eY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
n:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]},
$isn:1,
$asn:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]}}
W.f0.prototype={
C:function(a,b){return a.send(b)}}
W.d9.prototype={
e5:function(a,b){return a.createContextualFragment(b)},
cA:function(a,b){return a.selectNodeContents(b)}}
W.da.prototype={
C:function(a,b){return a.send(b)}}
W.f9.prototype={
gj:function(a){return a.length}}
W.fc.prototype={$isa:1}
W.a4.prototype={$ism:1,$ish:1}
W.fd.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
n:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]},
$isn:1,
$asn:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]}}
W.a5.prototype={$ism:1}
W.ff.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
n:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]},
$isn:1,
$asn:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]}}
W.a6.prototype={$ism:1,
gj:function(a){return a.length}}
W.fk.prototype={
h:function(a,b){return this.bx(a,b)},
as:function(a,b){var t,s
for(t=0;!0;++t){s=this.dB(a,t)
if(s==null)return
b.$2(s,this.bx(a,s))}},
gj:function(a){return a.length},
bx:function(a,b){return a.getItem(b)},
dB:function(a,b){return a.key(b)}}
W.T.prototype={$ism:1}
W.dd.prototype={
J:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aD(a,b,c,d)
t=W.ls("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.R(s).I(0,new W.R(t))
return s}}
W.fs.prototype={
J:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aD(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.J(t.createElement("table"),b,c,d)
t.toString
t=new W.R(t)
r=t.gX(t)
r.toString
t=new W.R(r)
q=t.gX(t)
s.toString
q.toString
new W.R(s).I(0,new W.R(q))
return s}}
W.ft.prototype={
J:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aD(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.J(t.createElement("table"),b,c,d)
t.toString
t=new W.R(t)
r=t.gX(t)
s.toString
r.toString
new W.R(s).I(0,new W.R(r))
return s}}
W.bF.prototype={$isbF:1}
W.a7.prototype={$ism:1,$ish:1}
W.U.prototype={$ism:1,$ish:1}
W.fw.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
n:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.U]},
$isb:1,
$asb:function(){return[W.U]},
$isn:1,
$asn:function(){return[W.U]},
$isc:1,
$asc:function(){return[W.U]}}
W.fx.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
n:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]},
$isn:1,
$asn:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]}}
W.fz.prototype={
gj:function(a){return a.length}}
W.a8.prototype={$ism:1}
W.aQ.prototype={$ism:1,$isi:1,$isaQ:1}
W.fD.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
n:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]},
$isn:1,
$asn:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]}}
W.fE.prototype={
gj:function(a){return a.length}}
W.av.prototype={}
W.dg.prototype={
aX:function(a){return a.previousNode()}}
W.aw.prototype={}
W.fL.prototype={
k:function(a){return String(a)},
$isa:1}
W.fN.prototype={
gj:function(a){return a.length}}
W.fQ.prototype={
gj:function(a){return a.length}}
W.fR.prototype={
C:function(a,b){return a.send(b)}}
W.aS.prototype={
gea:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.r("deltaY is not supported"))},
$ism:1,
$isi:1,
$isJ:1,
$isaS:1}
W.bH.prototype={
gdS:function(a){var t,s
t=P.X
s=new P.ar(0,$.A,null,[t])
this.du(a)
this.dH(a,W.kb(new W.fT(new P.hM(s,[t]))))
return s},
dH:function(a,b){return a.requestAnimationFrame(H.bT(b,1))},
du:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.fT.prototype={
$1:function(a){this.a.e1(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.fU.prototype={$isa:1}
W.aT.prototype={$isa:1}
W.h1.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
t:function(a,b){var t,s,r
if(b==null)return!1
t=J.u(b)
if(!t.$isH)return!1
s=a.left
r=t.gaV(b)
if(s==null?r==null:s===r){s=a.top
r=t.gb0(b)
if(s==null?r==null:s===r){s=a.width
r=t.gW(b)
if(s==null?r==null:s===r){s=a.height
t=t.gV(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gq:function(a){var t,s,r,q
t=J.aj(a.left)
s=J.aj(a.top)
r=J.aj(a.width)
q=J.aj(a.height)
return W.k6(W.aX(W.aX(W.aX(W.aX(0,t),s),r),q))},
$isH:1,
$asH:function(){},
gV:function(a){return a.height},
gaV:function(a){return a.left},
gb0:function(a){return a.top},
gW:function(a){return a.width}}
W.dl.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
n:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[P.H]},
$isb:1,
$asb:function(){return[P.H]},
$isn:1,
$asn:function(){return[P.H]},
$isc:1,
$asc:function(){return[P.H]}}
W.h3.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
n:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]},
$isn:1,
$asn:function(){return[W.x]},
$isc:1,
$asc:function(){return[W.x]}}
W.h4.prototype={$isa:1}
W.h5.prototype={
gV:function(a){return a.height},
gW:function(a){return a.width}}
W.hm.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
n:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]},
$isn:1,
$asn:function(){return[W.a1]},
$isc:1,
$asc:function(){return[W.a1]}}
W.hn.prototype={$isa:1}
W.dp.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
n:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]},
$isn:1,
$asn:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]}}
W.hG.prototype={$isa:1}
W.hJ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
n:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]},
$isn:1,
$asn:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]}}
W.hK.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
n:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.T]},
$isb:1,
$asb:function(){return[W.T]},
$isn:1,
$asn:function(){return[W.T]},
$isc:1,
$asc:function(){return[W.T]}}
W.hR.prototype={$isa:1}
W.hS.prototype={$isa:1}
W.h_.prototype={
as:function(a,b){var t,s,r,q,p,o
for(t=this.gF(this),s=t.length,r=this.a,q=J.k(r),p=0;p<t.length;t.length===s||(0,H.O)(t),++p){o=t[p]
b.$2(o,q.a1(r,o))}},
gF:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.L([],[P.q])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
gdz:function(){return this.a}}
W.h6.prototype={
h:function(a,b){return J.iy(this.a,b)},
gj:function(a){return this.gF(this).length}}
W.h9.prototype={
ez:function(a,b,c,d){return W.ae(this.a,this.b,a,!1,H.az(this,0))}}
W.iQ.prototype={}
W.ha.prototype={
dO:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.kz(r,this.c,t,!1)}},
df:function(a,b,c,d,e){this.dO()}}
W.hb.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bK.prototype={
Z:function(a){return $.$get$k5().A(0,W.bh(a))},
R:function(a,b,c){var t,s,r
t=W.bh(a)
s=$.$get$iR()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dg:function(a){var t,s
t=$.$get$iR()
if(t.gad(t)){for(s=0;s<262;++s)t.i(0,C.V[s],W.my())
for(s=0;s<12;++s)t.i(0,C.u[s],W.mz())}}}
W.y.prototype={
gv:function(a){return new W.ca(a,this.gj(a),-1,null,[H.ah(a,"y",0)])},
$isb:1,
$asb:null,
$isc:1,
$asc:null}
W.d6.prototype={
Z:function(a){return C.a.bI(this.a,new W.eM(a))},
R:function(a,b,c){return C.a.bI(this.a,new W.eL(a,b,c))}}
W.eM.prototype={
$1:function(a){return a.Z(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.eL.prototype={
$1:function(a){return a.R(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.bN.prototype={
Z:function(a){return this.a.A(0,W.bh(a))},
R:function(a,b,c){var t,s
t=W.bh(a)
s=this.c
if(s.A(0,H.f(t)+"::"+b))return this.d.dR(c)
else if(s.A(0,"*::"+b))return this.d.dR(c)
else{s=this.b
if(s.A(0,H.f(t)+"::"+b))return!0
else if(s.A(0,"*::"+b))return!0
else if(s.A(0,H.f(t)+"::*"))return!0
else if(s.A(0,"*::*"))return!0}return!1},
dj:function(a,b,c,d){var t,s,r
this.a.I(0,c)
t=b.ax(0,new W.hH())
s=b.ax(0,new W.hI())
this.b.I(0,t)
r=this.c
r.I(0,C.X)
r.I(0,s)}}
W.hH.prototype={
$1:function(a){return!C.a.A(C.u,a)},
$S:function(){return{func:1,args:[,]}}}
W.hI.prototype={
$1:function(a){return C.a.A(C.u,a)},
$S:function(){return{func:1,args:[,]}}}
W.hN.prototype={
R:function(a,b,c){if(this.cT(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.iy(a,"template")==="")return this.e.A(0,b)
return!1}}
W.hO.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.hL.prototype={
Z:function(a){var t=J.u(a)
if(!!t.$isbC)return!1
t=!!t.$isD
if(t&&W.bh(a)==="foreignObject")return!1
if(t)return!0
return!1},
R:function(a,b,c){if(b==="is"||C.j.cM(b,"on"))return!1
return this.Z(a)}}
W.ca.prototype={
m:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbz(J.j6(this.a,t))
this.c=t
return!0}this.sbz(null)
this.c=s
return!1},
gp:function(){return this.d},
sbz:function(a){this.d=a}}
W.d5.prototype={}
W.hF.prototype={}
W.dr.prototype={
b8:function(a){new W.hP(this).$2(a,null)},
aq:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bc(t,a)}else J.bc(b,a)},
dK:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.kX(a)
r=J.iy(s.gdz(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.P(n)}p="element unprintable"
try{p=J.aC(a)}catch(n){H.P(n)}try{o=W.bh(a)
this.dJ(a,b,t,p,o,s,r)}catch(n){if(H.P(n) instanceof P.ak)throw n
else{this.aq(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
dJ:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.aq(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.Z(a)){this.aq(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.aC(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.R(a,"is",g)){this.aq(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gF(f)
s=H.L(t.slice(0),[H.az(t,0)])
for(r=f.gF(f).length-1,t=f.a,q=J.k(t);r>=0;--r){p=s[r]
if(!this.a.R(a,J.lb(p),q.a1(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.a1(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.a1(t,p)
q.dE(t,p)}}if(!!J.u(a).$isbF)this.b8(a.content)}}
W.hP.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.dK(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bc(r,a)}else J.bc(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.kY(t)}catch(q){H.P(q)
r=t
J.bc(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.p,W.p]}}}
W.bi.prototype={$isb:1,
$asb:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]}}
W.bj.prototype={$isb:1,
$asb:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]}}
W.bk.prototype={$isb:1,
$asb:function(){return[W.Y]},
$isc:1,
$asc:function(){return[W.Y]}}
W.bl.prototype={$isb:1,
$asb:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]}}
W.bm.prototype={$isb:1,
$asb:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]}}
W.bn.prototype={$isb:1,
$asb:function(){return[W.Y]},
$isc:1,
$asc:function(){return[W.Y]}}
W.cd.prototype={}
W.cx.prototype={$isb:1,
$asb:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]}}
W.cj.prototype={$isb:1,
$asb:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]}}
W.cq.prototype={$isb:1,
$asb:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]}}
W.cr.prototype={$isb:1,
$asb:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]}}
W.cs.prototype={$isb:1,
$asb:function(){return[W.T]},
$isc:1,
$asc:function(){return[W.T]}}
W.ct.prototype={$isb:1,
$asb:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]}}
W.cu.prototype={$isb:1,
$asb:function(){return[W.a1]},
$isc:1,
$asc:function(){return[W.a1]}}
W.cv.prototype={$isb:1,
$asb:function(){return[W.x]},
$isc:1,
$asc:function(){return[W.x]}}
W.cw.prototype={$isb:1,
$asb:function(){return[P.H]},
$isc:1,
$asc:function(){return[P.H]}}
W.ch.prototype={$isb:1,
$asb:function(){return[W.U]},
$isc:1,
$asc:function(){return[W.U]}}
W.ci.prototype={$isb:1,
$asb:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]}}
W.ck.prototype={$isb:1,
$asb:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]}}
W.cm.prototype={$isb:1,
$asb:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]}}
W.cn.prototype={$isb:1,
$asb:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]}}
W.co.prototype={$isb:1,
$asb:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]}}
W.cy.prototype={$isb:1,
$asb:function(){return[P.H]},
$isc:1,
$asc:function(){return[P.H]}}
W.cA.prototype={$isb:1,
$asb:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]}}
W.cK.prototype={$isb:1,
$asb:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]}}
W.cL.prototype={$isb:1,
$asb:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]}}
W.cJ.prototype={$isb:1,
$asb:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]}}
W.cO.prototype={$isb:1,
$asb:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]}}
W.cP.prototype={$isb:1,
$asb:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]}}
W.cQ.prototype={$isb:1,
$asb:function(){return[W.a1]},
$isc:1,
$asc:function(){return[W.a1]}}
W.cR.prototype={$isb:1,
$asb:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]}}
W.cB.prototype={$isb:1,
$asb:function(){return[W.U]},
$isc:1,
$asc:function(){return[W.U]}}
W.cD.prototype={$isb:1,
$asb:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]}}
W.cF.prototype={$isb:1,
$asb:function(){return[W.x]},
$isc:1,
$asc:function(){return[W.x]}}
W.cH.prototype={$isb:1,
$asb:function(){return[W.T]},
$isc:1,
$asc:function(){return[W.T]}}
W.cM.prototype={$isb:1,
$asb:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]}}
W.cN.prototype={$isb:1,
$asb:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]}}
P.hY.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.q,,]}}}
P.hw.prototype={
P:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.b.u(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0
H.d(!0)
H.d(this.b<4294967296)},
c5:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.e(P.lR("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){this.P()
return(this.a&t)>>>0}do{this.P()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
G:function(){this.P()
var t=this.a
this.P()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
di:function(a){var t,s,r,q,p,o,n
do{t=(a&4294967295)>>>0
a=C.b.u(a-t,4294967296)
s=(a&4294967295)>>>0
a=C.b.u(a-s,4294967296)
r=((~t&4294967295)>>>0)+(t<<21>>>0)
q=(r&4294967295)>>>0
s=(~s>>>0)+((s<<21|t>>>11)>>>0)+C.b.u(r-q,4294967296)&4294967295
r=((q^(q>>>24|s<<8))>>>0)*265
t=(r&4294967295)>>>0
s=((s^s>>>24)>>>0)*265+C.b.u(r-t,4294967296)&4294967295
r=((t^(t>>>14|s<<18))>>>0)*21
t=(r&4294967295)>>>0
s=((s^s>>>14)>>>0)*21+C.b.u(r-t,4294967296)&4294967295
t=(t^(t>>>28|s<<4))>>>0
s=(s^s>>>28)>>>0
r=(t<<31>>>0)+t
q=(r&4294967295)>>>0
p=C.b.u(r-q,4294967296)
r=this.a*1037
o=(r&4294967295)>>>0
this.a=o
n=(this.b*1037+C.b.u(r-o,4294967296)&4294967295)>>>0
this.b=n
o=(o^q)>>>0
this.a=o
p=(n^s+((s<<31|t>>>1)>>>0)+p&4294967295)>>>0
this.b=p}while(a!==0)
if(p===0&&o===0)this.a=23063
this.P()
this.P()
this.P()
this.P()}}
P.hx.prototype={}
P.H.prototype={$asH:null}
P.dw.prototype={$isa:1}
P.aD.prototype={$isa:1}
P.dQ.prototype={$isa:1}
P.dR.prototype={$isa:1}
P.dS.prototype={$isa:1}
P.dT.prototype={$isa:1}
P.dU.prototype={$isa:1}
P.dV.prototype={$isa:1}
P.dW.prototype={$isa:1}
P.dX.prototype={$isa:1}
P.dY.prototype={$isa:1}
P.dZ.prototype={$isa:1}
P.e_.prototype={$isa:1}
P.e0.prototype={$isa:1}
P.e1.prototype={$isa:1}
P.e2.prototype={$isa:1}
P.e3.prototype={$isa:1}
P.e4.prototype={$isa:1}
P.e7.prototype={$isa:1}
P.G.prototype={$isa:1}
P.ed.prototype={$isa:1}
P.am.prototype={$ism:1}
P.eo.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return this.U(a,b)},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
n:function(a,b){return this.h(a,b)},
U:function(a,b){return a.getItem(b)},
$isb:1,
$asb:function(){return[P.am]},
$isc:1,
$asc:function(){return[P.am]}}
P.ew.prototype={$isa:1}
P.ex.prototype={$isa:1}
P.an.prototype={$ism:1}
P.eN.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return this.U(a,b)},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
n:function(a,b){return this.h(a,b)},
U:function(a,b){return a.getItem(b)},
$isb:1,
$asb:function(){return[P.an]},
$isc:1,
$asc:function(){return[P.an]}}
P.eU.prototype={$isa:1}
P.eZ.prototype={
gj:function(a){return a.length}}
P.bC.prototype={$isa:1,$isbC:1}
P.fp.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return this.U(a,b)},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
n:function(a,b){return this.h(a,b)},
U:function(a,b){return a.getItem(b)},
$isb:1,
$asb:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]}}
P.D.prototype={
J:function(a,b,c,d){var t,s,r,q,p,o
t=H.L([],[W.d5])
C.a.l(t,W.k4(null))
C.a.l(t,W.k7())
C.a.l(t,new W.hL())
c=new W.dr(new W.d6(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.p).e6(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.R(q)
o=t.gX(t)
for(t=J.k(p);r=o.firstChild,r!=null;)t.L(p,r)
return p},
$isa:1,
$isD:1}
P.fq.prototype={$isa:1}
P.fr.prototype={$isa:1}
P.aP.prototype={}
P.fv.prototype={$isa:1}
P.ao.prototype={$ism:1}
P.fF.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return this.U(a,b)},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
n:function(a,b){return this.h(a,b)},
U:function(a,b){return a.getItem(b)},
$isb:1,
$asb:function(){return[P.ao]},
$isc:1,
$asc:function(){return[P.ao]}}
P.fM.prototype={$isa:1}
P.fO.prototype={$isa:1}
P.fP.prototype={$isa:1}
P.bJ.prototype={$isa:1}
P.hC.prototype={$isa:1}
P.hD.prototype={$isa:1}
P.hE.prototype={$isa:1}
P.cg.prototype={$isb:1,
$asb:function(){return[P.am]},
$isc:1,
$asc:function(){return[P.am]}}
P.ce.prototype={$isb:1,
$asb:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]}}
P.cl.prototype={$isb:1,
$asb:function(){return[P.an]},
$isc:1,
$asc:function(){return[P.an]}}
P.cp.prototype={$isb:1,
$asb:function(){return[P.ao]},
$isc:1,
$asc:function(){return[P.ao]}}
P.cz.prototype={$isb:1,
$asb:function(){return[P.am]},
$isc:1,
$asc:function(){return[P.am]}}
P.cI.prototype={$isb:1,
$asb:function(){return[P.an]},
$isc:1,
$asc:function(){return[P.an]}}
P.cE.prototype={$isb:1,
$asb:function(){return[P.ao]},
$isc:1,
$asc:function(){return[P.ao]}}
P.cG.prototype={$isb:1,
$asb:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]}}
P.dA.prototype={
gj:function(a){return a.length}}
P.f6.prototype={
bG:function(a,b){return a.activeTexture(b)},
bJ:function(a,b,c){return a.attachShader(b,c)},
bK:function(a,b,c){return a.bindBuffer(b,c)},
bL:function(a,b,c){return a.bindTexture(b,c)},
bM:function(a,b){return a.blendEquation(b)},
bN:function(a,b,c){return a.blendFunc(b,c)},
bO:function(a,b,c,d){return a.bufferData(b,c,d)},
bP:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bQ:function(a,b){return a.compileShader(b)},
bR:function(a){return a.createBuffer()},
bS:function(a){return a.createProgram()},
bU:function(a,b){return a.createShader(b)},
bV:function(a){return a.createTexture()},
bX:function(a,b){return a.depthMask(b)},
bY:function(a,b){return a.disable(b)},
bZ:function(a,b,c,d){return a.drawArrays(b,c,d)},
c_:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c0:function(a,b){return a.enable(b)},
c1:function(a,b){return a.enableVertexAttribArray(b)},
ay:function(a){return P.hZ(a.getContextAttributes())},
b2:function(a){return a.getError()},
b3:function(a,b){return a.getProgramInfoLog(b)},
b4:function(a,b,c){return a.getProgramParameter(b,c)},
b5:function(a,b){return a.getShaderInfoLog(b)},
b6:function(a,b,c){return a.getShaderParameter(b,c)},
b7:function(a,b,c){return a.getUniformLocation(b,c)},
c2:function(a,b){return a.linkProgram(b)},
c6:function(a,b,c){return a.pixelStorei(b,c)},
ba:function(a,b,c){return a.shaderSource(b,c)},
bb:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b_:function(a,b,c,d,e,f,g,h,i,j){this.aO(a,b,c,d,e,f,g)
return},
ca:function(a,b,c,d,e,f,g){return this.b_(a,b,c,d,e,f,g,null,null,null)},
aO:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cb:function(a,b,c,d){return a.texParameterf(b,c,d)},
cc:function(a,b,c,d){return a.texParameteri(b,c,d)},
cf:function(a,b,c){return a.uniform1f(b,c)},
cg:function(a,b,c){return a.uniform1fv(b,c)},
ci:function(a,b,c){return a.uniform1i(b,c)},
cj:function(a,b,c){return a.uniform1iv(b,c)},
ck:function(a,b,c){return a.uniform2fv(b,c)},
cl:function(a,b,c){return a.uniform3fv(b,c)},
cm:function(a,b,c){return a.uniform4fv(b,c)},
cn:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
co:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cq:function(a,b){return a.useProgram(b)},
cs:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)}}
P.f7.prototype={
dU:function(a,b){return a.beginTransformFeedback(b)},
dV:function(a,b,c,d){return a.bindBufferBase(b,c,d)},
dX:function(a,b,c){return a.bindTransformFeedback(b,c)},
dZ:function(a,b){return a.bindVertexArray(b)},
e4:function(a,b,c,d,e,f){return a.copyBufferSubData(b,c,d,e,f)},
e8:function(a){return a.createTransformFeedback()},
e9:function(a){return a.createVertexArray()},
eg:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eh:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
ei:function(a){return a.endTransformFeedback()},
eP:function(a,b,c,d){this.dN(a,b,c,d)
return},
dN:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
bG:function(a,b){return a.activeTexture(b)},
bJ:function(a,b,c){return a.attachShader(b,c)},
bK:function(a,b,c){return a.bindBuffer(b,c)},
bL:function(a,b,c){return a.bindTexture(b,c)},
bM:function(a,b){return a.blendEquation(b)},
bN:function(a,b,c){return a.blendFunc(b,c)},
bO:function(a,b,c,d){return a.bufferData(b,c,d)},
bP:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bQ:function(a,b){return a.compileShader(b)},
bR:function(a){return a.createBuffer()},
bS:function(a){return a.createProgram()},
bU:function(a,b){return a.createShader(b)},
bV:function(a){return a.createTexture()},
bX:function(a,b){return a.depthMask(b)},
bY:function(a,b){return a.disable(b)},
bZ:function(a,b,c,d){return a.drawArrays(b,c,d)},
c_:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c0:function(a,b){return a.enable(b)},
c1:function(a,b){return a.enableVertexAttribArray(b)},
ay:function(a){return P.hZ(a.getContextAttributes())},
b2:function(a){return a.getError()},
b3:function(a,b){return a.getProgramInfoLog(b)},
b4:function(a,b,c){return a.getProgramParameter(b,c)},
b5:function(a,b){return a.getShaderInfoLog(b)},
b6:function(a,b,c){return a.getShaderParameter(b,c)},
b7:function(a,b,c){return a.getUniformLocation(b,c)},
c2:function(a,b){return a.linkProgram(b)},
c6:function(a,b,c){return a.pixelStorei(b,c)},
ba:function(a,b,c){return a.shaderSource(b,c)},
bb:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b_:function(a,b,c,d,e,f,g,h,i,j){this.aO(a,b,c,d,e,f,g)
return},
ca:function(a,b,c,d,e,f,g){return this.b_(a,b,c,d,e,f,g,null,null,null)},
aO:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cb:function(a,b,c,d){return a.texParameterf(b,c,d)},
cc:function(a,b,c,d){return a.texParameteri(b,c,d)},
cf:function(a,b,c){return a.uniform1f(b,c)},
cg:function(a,b,c){return a.uniform1fv(b,c)},
ci:function(a,b,c){return a.uniform1i(b,c)},
cj:function(a,b,c){return a.uniform1iv(b,c)},
ck:function(a,b,c){return a.uniform2fv(b,c)},
cl:function(a,b,c){return a.uniform3fv(b,c)},
cm:function(a,b,c){return a.uniform4fv(b,c)},
cn:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
co:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cq:function(a,b){return a.useProgram(b)},
cs:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
$isa:1}
P.hQ.prototype={$isa:1}
P.fg.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return P.hZ(this.dA(a,b))},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
n:function(a,b){return this.h(a,b)},
dA:function(a,b){return a.item(b)},
$isb:1,
$asb:function(){return[P.at]},
$isc:1,
$asc:function(){return[P.at]}}
P.cf.prototype={$isb:1,
$asb:function(){return[P.at]},
$isc:1,
$asc:function(){return[P.at]}}
P.cC.prototype={$isb:1,
$asb:function(){return[P.at]},
$isc:1,
$asc:function(){return[P.at]}}
B.il.prototype={
$1:function(a){$.$get$i_().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aK]}}}
B.im.prototype={
$1:function(a){$.$get$i_().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aK]}}}
B.io.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.mn=t
$.mo=C.b.a4(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.j3=s-C.b.u(window.innerWidth,2)
$.ko=-(t-C.b.u(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.J]}}}
B.ip.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bV=t-C.b.u(window.innerWidth,2)
$.bW=-(s-C.b.u(window.innerHeight,2))
if(a.button===2)$.$get$bU().i(0,"right",!0)
else $.$get$bU().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.J]}}}
B.iq.prototype={
$1:function(a){if(a.button===2)$.$get$bU().i(0,"right",null)
else $.$get$bU().i(0,"left",null)},
$S:function(){return{func:1,args:[W.J]}}}
B.eO.prototype={
d2:function(a,b,c,d){var t
W.ae(d,W.mx().$1(d),new B.eP(this),!1,W.aS)
W.ae(d,"mousemove",new B.eQ(this),!1,W.J)
t=W.aQ
W.ae(d,"touchstart",new B.eR(),!1,t)
W.ae(d,"touchmove",new B.eS(this),!1,t)
B.mN(null)}}
B.eP.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.ae.gea(a)*r.k3
if(C.c.a4(r.fy,t)>0)r.fy=H.V(C.c.a4(r.fy,t))}catch(q){s=H.P(q)
P.aa(s)}},
$S:function(){return{func:1,args:[W.aS]}}}
B.eQ.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.V(t.go+C.b.a4($.j3,$.bV)*0.01)
s=t.id
r=$.bW
q=$.ko
t.id=H.V(s+(r-q)*0.01)
$.bV=$.j3
$.bW=q}},
$S:function(){return{func:1,args:[W.J]}}}
B.eR.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a_(t.clientX)
C.c.a_(t.clientY)
$.bV=s
C.c.a_(t.clientX)
$.bW=C.c.a_(t.clientY)},
$S:function(){return{func:1,args:[W.aQ]}}}
B.eS.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a_(t.clientX)
t=C.c.a_(t.clientY)
r=this.a
r.go=H.V(r.go+C.b.a4(s,$.bV)*0.01)
r.id=H.V(r.id+($.bW-t)*0.01)
$.bV=s
$.bW=t},
$S:function(){return{func:1,args:[W.aQ]}}}
G.eC.prototype={}
G.fJ.prototype={
D:function(a,b){var t=this.d
if(H.ba(!t.E(0,a)))H.bS("uniform "+a+" already set")
t.i(0,a,b)},
bf:function(){return this.d},
k:function(a){var t,s,r,q
t=H.L(["{"+new H.dh(H.mv(this),null).k(0)+"}["+this.a+"]"],[P.q])
for(s=this.d,r=s.gF(s),r=r.gv(r);r.m();){q=r.gp()
C.a.l(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.au(t,"\n")}}
G.dC.prototype={}
G.dE.prototype={}
G.df.prototype={}
G.de.prototype={}
G.ey.prototype={
d1:function(a,b){this.D("cDepthTest",!0)
this.D("cDepthWrite",!1)
this.D("cBlendEquation",b)
this.D("cStencilFunc",$.$get$jP())}}
G.bs.prototype={
al:function(a){var t,s
this.ch=a
if(H.ba(!0))H.bS("wrong size for attribute: aPosition expected: "+(this.ch.length/3|0)+" got: "+(a.length/3|0))
this.cy.i(0,"aPosition",a)
t=this.d
s=this.r.h(0,"aPosition")
J.bX(t.a,34962,s)
J.kG(t.a,34962,a,35048)},
cY:function(){return this.ch.length/3|0},
aE:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.kK(s.a))
this.al(a)
r=$.$get$ag().h(0,"aPosition")
if(r==null)throw H.e("Unknown canonical aPosition")
q=this.x
H.d(q.E(0,"aPosition"))
p=q.h(0,"aPosition")
J.ja(s.a,this.e)
J.kU(s.a,p)
t=t.h(0,"aPosition")
q=r.cZ()
J.bX(s.a,34962,t)
J.lh(s.a,p,q,5126,!1,0,0)},
k:function(a){var t,s,r,q
t=["Faces:0"]
for(s=this.cy,r=s.gF(s),r=r.gv(r);r.m();){q=r.gp()
C.a.l(t,H.f(q)+":"+s.h(0,q).length)}return"MESH["+this.a+"] "+C.a.au(t,"  ")}}
G.eV.prototype={
cW:function(a,b){var t=C.b.cu(a,b)
if(this.z===t)return
this.z=t
this.bi()},
bi:function(){var t,s,r,q,p,o,n
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
bf:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.t(new Float32Array(H.B(3)))
o.aA(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
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
s=J.u(n)
r=!!s.$isb6
k=r?s.geV(n):1
if(!!s.$ist){j=s.geQ(n)
m=s.geR(n)
l=s.geS(n)
n=j}else if(r){j=s.geQ(n)
m=s.geR(n)
l=s.geS(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.B(t[0],n)
r=C.c.B(t[4],m)
q=C.c.B(t[8],l)
i=t[12]
h=C.c.B(t[1],n)
g=C.c.B(t[5],m)
f=C.c.B(t[9],l)
e=t[13]
d=C.c.B(t[2],n)
c=C.c.B(t[6],m)
b=C.c.B(t[10],l)
a=t[14]
a0=C.c.B(t[3],n)
a1=C.c.B(t[7],m)
a2=C.c.B(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.w(this.db)
a3.eC(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.f5.prototype={
d9:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gF(s),s=s.gv(s);s.m();){q=s.gp()
if(!t.E(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bL(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.m();){q=s.d
if(!t.A(0,q))C.a.l(r,q)}return r},
de:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gF(b),s=s.gv(s),r=this.d,q=this.y,p=this.z,o=0;s.m();){n=s.gp()
switch(J.kA(n,0)){case 117:if(q.E(0,n)){m=b.h(0,n)
if(p.E(0,n))H.j4("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$ag().h(0,n)
if(l==null)H.E("unknown "+n)
H.d(q.E(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.iz(r.a,k,m)
else if(!!J.u(m).$islv)J.lf(r.a,k,m)
break
case"float":if(l.c===0)J.ld(r.a,k,m)
else if(!!J.u(m).$isiE)J.le(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aA(m,"$isad").a
J.jh(r.a,k,!1,j)}else if(!!J.u(m).$isiE)J.jh(r.a,k,!1,m)
else if(H.ba(!1))H.bS("bad unform: "+n)
break
case"mat3":if(l.c===0){j=C.A.gcO(H.aA(m,"$ismR"))
J.jg(r.a,k,!1,j)}else if(!!J.u(m).$isiE)J.jg(r.a,k,!1,m)
else if(H.ba(!1))H.bS("bad unform: "+n)
break
case"vec4":j=l.c
i=r.a
if(j===0)J.jf(i,k,H.aA(m,"$isb6").a)
else J.jf(i,k,m)
break
case"vec3":j=l.c
i=r.a
if(j===0)J.je(i,k,H.aA(m,"$ist").a)
else J.je(i,k,m)
break
case"vec2":if(l.c===0){j=C.A.gcO(H.aA(m,"$ismS"))
J.jd(r.a,k,j)}else J.jd(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a0(33984,this.ch)
J.j7(r.a,j)
j=H.aA(m,"$isbG").b
J.bY(r.a,3553,j)
j=this.ch
J.iz(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.a0(33984,this.ch)
J.j7(r.a,j)
j=H.aA(m,"$isbG").b
J.bY(r.a,34067,j)
j=this.ch
J.iz(r.a,k,j)
this.ch=this.ch+1
break
default:H.j4("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":j=J.C(m,!0)
i=r.a
if(j)J.du(i,2929)
else J.ix(i,2929)
break
case"cStencilFunc":H.aA(m,"$isdf")
j=m.a
i=r.a
if(j===1281)J.ix(i,2960)
else{J.du(i,2960)
i=m.b
h=m.c
J.l8(r.a,j,i,h)}break
case"cDepthWrite":J.kO(r.a,m)
break
case"cBlendEquation":H.aA(m,"$isde")
j=m.a
i=r.a
if(j===1281)J.ix(i,3042)
else{J.du(i,3042)
i=m.b
h=m.c
J.kF(r.a,i,h)
J.kE(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aG(1000*(s-new P.bf(t,!1).a)).k(0)},
cX:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.lg(t.a,this.r)
this.ch=0
this.z.S(0)
for(s=0;s<2;++s){r=b[s]
this.de(r.a,r.bf())}q=this.Q
q.S(0)
for(p=a.cy,p=p.gF(p),p=p.gv(p);p.m();)q.l(0,p.gp())
o=this.d9()
if(o.length!==0)P.aa("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(o)))
J.ja(a.d.a,a.e)
n=this.e.f.length>0
q=a.f
p=a.cY()
m=a.Q
l=a.z
if(n)J.kC(t.a,q)
if(m!==-1){k=t.a
if(l>1)J.kS(k,q,p,m,0,l)
else J.kR(k,q,p,m,0)}else{m=t.a
if(l>1)J.kQ(m,q,0,p,l)
else J.kP(m,q,0,p)}if(n)J.kV(t.a)},
be:function(a,b){return this.cX(a,b,null)},
d3:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.O)(t),++o){n=t[o]
r.i(0,n,J.jb(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.O)(t),++o){n=t[o]
r.i(0,n,J.jb(q.a,p,n))}}}
G.v.prototype={
cZ:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.b5.prototype={
bd:function(a){var t,s,r,q
H.d(this.b==null)
for(t=this.c,s=this.x,r=0;r<1;++r){q=a[r]
H.d($.$get$ag().E(0,q))
H.d(!C.a.A(t,q))
C.a.l(t,q)
s.i(0,q,this.r);++this.r}C.a.aB(t)},
ak:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.O)(a),++r){q=a[r]
if(H.ba($.$get$ag().E(0,q)))H.bS("missing uniform "+q)
H.d(!C.a.A(s,q))
C.a.l(s,q)}C.a.aB(s)},
cV:function(a){var t,s,r
H.d(this.b==null)
for(t=this.f,s=0;s<1;++s){r=a[s]
H.d($.$get$ag().E(0,r))
H.d(!C.a.A(t,r))
C.a.l(t,r)}C.a.aB(t)},
d5:function(a,b){H.d(this.b==null)
this.b=this.bj(!0,a,b)},
bh:function(a){return this.d5(a,null)},
d4:function(a,b){H.d(this.b==null)
this.b=this.bj(!1,a,b)},
bg:function(a){return this.d4(a,null)},
bj:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.O)(t),++o){n=t[o]
m=$.$get$ag().h(0,n)
C.a.l(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,o=0;!1;++o){k=t[o]
m=$.$get$ag().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.O)(t),++o){k=t[o]
m=$.$get$ag().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.O)(t),++o){k=t[o]
m=$.$get$ag().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.l(q,"")
if(a)C.a.l(q,"void main(void) {")
C.a.I(q,b)
if(a)C.a.l(q,"}")
return C.a.au(q,"\n")}}
G.fe.prototype={}
G.fy.prototype={}
G.bG.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.ee.prototype={
d6:function(a){var t,s
t=this.d
s=this.c
J.bY(t.a,s,this.b)
J.l9(t.a,s,0,6408,6408,5121,a)},
d_:function(a,b,c,d,e){var t,s,r,q
t=this.d
s=this.c
J.bY(t.a,s,this.b)
J.l5(t.a,37440,1)
this.d6(this.f)
r=this.e
q=r.e
if(q!==1)J.la(t.a,s,34046,q)
J.jc(t.a,s,10240,r.r)
J.jc(t.a,s,10241,r.f)
H.d(J.l0(t.a)===0)
J.bY(t.a,s,null)}}
R.fi.prototype={
dh:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.m2("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.x).bp(r,"float")
r.setProperty(p,"left","")
p=C.x.bp(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.r.L(t,s)}return t},
d7:function(a,b,c){var t,s,r
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
J.iu(this.a,s)
r=this.dh(b,c,90,30)
this.d=r
J.iu(this.a,r)
t=t.createElement("div")
this.c=t
J.iu(this.a,t)}}
R.fj.prototype={
dd:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.z.eO(s,2)+" fps"
t=this.c;(t&&C.r).cJ(t,b)
r=C.b.u(30*C.z.e_(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.r).L(t,q)},
dc:function(a){return this.dd(a,"")}}
A.i3.prototype={
$2:function(a,b){var t=536870911&a+J.aj(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.o,P.m]}}}
T.ad.prototype={
a2:function(a,b,c){H.d(a<4)
H.d(b<4)
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
k:function(a){return"[0] "+this.ai(0).k(0)+"\n[1] "+this.ai(1).k(0)+"\n[2] "+this.ai(2).k(0)+"\n[3] "+this.ai(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
t:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ad){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gq:function(a){return A.iZ(this.a)},
ai:function(a){var t,s
t=new Float32Array(H.B(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.b6(t)},
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
eC:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.t.prototype={
aA:function(a,b,c){var t=this.a
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
return"["+H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+"]"},
t:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.t){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gq:function(a){return A.iZ(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){return Math.sqrt(this.gae())},
gae:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
aw:function(a){var t,s,r
t=Math.sqrt(this.gae())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
aT:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
bW:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.t(new Float32Array(H.B(3)))
t.aA(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
l:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]
s[2]=s[2]+t[2]},
aC:function(a){var t,s
t=a.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
N:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b}}
T.b6.prototype={
k:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
t:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.b6){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gq:function(a){return A.iZ(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)}}
Z.f_.prototype={
k:function(a){var t=this.a.a
return"POLE: "+(H.f(t[0])+" "+H.f(t[1])+" "+H.f(t[2]))}}
Z.cS.prototype={
da:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=new T.t(new Float32Array(H.B(3)))
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.O)(a),++r){q=a[r]
p=this.a
o=q.a
n=new T.t(new Float32Array(3))
n.w(p)
n.aC(o)
p=Math.sqrt(n.gae())
if(p<=0.2)continue
if(p>100.1){s=a[c.c5(a.length)].a
p=c.G()
o=c.G()
m=c.G()
l=new Float32Array(3)
k=new T.t(l)
l[0]=p-0.5
l[1]=o-0.5
l[2]=m-0.5
k.N(0,0.35)
p=new T.t(new Float32Array(3))
p.w(s)
p.l(0,k)
this.a=p
return}o=new T.t(new Float32Array(3))
o.w(n)
o.N(0,1/(p*p))
j=new T.t(new Float32Array(3))
j.w(t)
j.l(0,o)
t=j}for(s=b.length,r=0;r<b.length;b.length===s||(0,H.O)(b),++r,t=j){p=b[r].a
o=this.a
n=new T.t(new Float32Array(3))
n.w(p)
n.aC(o)
p=Math.sqrt(n.gae())
if(p<=0.2){s=a[c.c5(a.length)].a
p=c.G()
o=c.G()
m=c.G()
l=new Float32Array(3)
k=new T.t(l)
l[0]=p-0.5
l[1]=o-0.5
l[2]=m-0.5
k.N(0,0.35)
p=new T.t(new Float32Array(3))
p.w(s)
p.l(0,k)
this.a=p
return}o=new T.t(new Float32Array(3))
o.w(n)
o.N(0,1/(p*p))
j=new T.t(new Float32Array(3))
j.w(t)
j.l(0,o)}s=this.a
p=new T.t(new Float32Array(H.B(3)))
p.w(t)
p.aw(0)
o=new T.t(new Float32Array(H.B(3)))
o.w(p)
o.N(0,d)
p=new T.t(new Float32Array(H.B(3)))
p.w(s)
p.l(0,o)
this.a=p},
k:function(a){var t=this.a.a
return"ION: "+(H.f(t[0])+" "+H.f(t[1])+" "+H.f(t[2]))}}
Z.ig.prototype={
$1:function(a){var t,s,r,q,p,o,n,m,l,k,j
t=H.lP($.$get$iX().value,null,null)
P.aa("resize to "+H.f(t)+" ions")
s=this.e
C.a.sj(s,0)
for(r=this.b,q=0;C.b.aj(q,t);++q){p=r.G()
o=r.G()
n=r.G()
m=new Float32Array(3)
l=new T.t(m)
m[0]=p-0.5
m[1]=o-0.5
m[2]=n-0.5
l.N(0,10010)
k=new Z.cS(null)
p=new T.t(new Float32Array(3))
p.w(l)
k.a=p
C.a.l(s,k)}j=new Float32Array(H.B(C.b.B(3,t)))
r=this.a
r.a=j
Z.iD(s,j)
s=this.c
J.bX(s.a,34962,null)
p=this.d
J.j9(s.a,35982,p,null)
o=this.f
o.al(r.a)
this.r.al(r.a)
o=o.r.h(0,"aPosition")
J.j9(s.a,35982,p,o)},
$S:function(){return{func:1,v:true,args:[W.i]}}}
Z.ih.prototype={
$1:function(a){var t,s,r,q,p,o
for(t=this.e,s=t.length,r=this.c,q=this.d,p=this.b,o=0;o<t.length;t.length===s||(0,H.O)(t),++o)t[o].da(r,q,p,a)
s=this.a
Z.iD(t,s.a)
this.f.al(s.a)},
$S:function(){return{func:1,v:true,args:[P.N]}}}
Z.ii.prototype={
$1:function(b2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
t=this.c
t.go=H.V(t.go+0.002)
s=t.k4
if(s.h(0,37)!=null)t.go=H.V(t.go+0.03)
else if(s.h(0,39)!=null)t.go=H.V(t.go-0.03)
if(s.h(0,38)!=null)t.id=H.V(t.id+0.03)
else if(s.h(0,40)!=null)t.id=H.V(t.id-0.03)
if(s.h(0,33)!=null)t.fy=H.V(t.fy*0.99)
else if(s.h(0,34)!=null)t.fy=H.V(t.fy*1.01)
if(s.h(0,32)!=null){t.go=0
t.id=0}s=H.V(C.c.e0(t.id,-1.4707963267948965,1.4707963267948965))
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
s=n[12]
r=n[13]
o=n[14]
m=new T.t(new Float32Array(H.B(3)))
m.aA(0,1,0)
l=t.e
k=l.a
k[0]=n[12]
k[1]=n[13]
k[2]=n[14]
k=new Float32Array(H.B(3))
j=new T.t(k)
j.w(l)
j.aC(q)
j.aw(0)
i=m.bW(j)
i.aw(0)
h=j.bW(i)
h.aw(0)
q=i.aT(l)
g=h.aT(l)
l=j.aT(l)
f=i.a
e=f[0]
d=h.a
c=d[0]
b=k[0]
a=f[1]
a0=d[1]
a1=k[1]
f=f[2]
d=d[2]
k=k[2]
n[15]=1
n[14]=-l
n[13]=-g
n[12]=-q
n[11]=0
n[10]=k
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
n[12]=s
n[13]=r
n[14]=o
o=t.f
r=o.a
r[0]=n[2]
r[1]=n[6]
r[2]=n[10]
t=-t.k1
o=Math.sqrt(o.gae())
i=r[0]/o
h=r[1]/o
j=r[2]/o
o=Math.cos(t)
t=Math.sin(t)
a2=1-o
a3=i*i*a2+o
r=j*t
a4=i*h*a2-r
s=h*t
a5=i*j*a2+s
a6=h*i*a2+r
a7=h*h*a2+o
t=i*t
a8=h*j*a2-t
a9=j*i*a2-s
b0=j*h*a2+t
b1=j*j*a2+o
o=n[0]
t=n[4]
s=n[8]
r=n[1]
e=n[5]
c=n[9]
b=n[2]
a=n[6]
a0=n[10]
a1=n[3]
f=n[7]
d=n[11]
n[0]=o*a3+t*a6+s*a9
n[1]=r*a3+e*a6+c*a9
n[2]=b*a3+a*a6+a0*a9
n[3]=a1*a3+f*a6+d*a9
n[4]=o*a4+t*a7+s*b0
n[5]=r*a4+e*a7+c*b0
n[6]=b*a4+a*a7+a0*b0
n[7]=a1*a4+f*a7+d*b0
n[8]=o*a5+t*a8+s*b1
n[9]=r*a5+e*a8+c*b1
n[10]=b*a5+a*a8+a0*b1
n[11]=a1*a5+f*a8+d*b1
t=this.d
if($.$get$ki().checked){this.cx.$1(0.06)
this.e.be(this.y,[t,this.x])}else{s=this.ch
this.f.be(s,[t,this.z])
t=this.b
s=s.r.h(0,"aPosition")
J.bX(t.a,34962,s)
s=this.Q.r.h(0,"aPosition")
J.bX(t.a,35982,s)
s=this.r.length
J.kJ(t.a,35982,34962,0,0,s*3*4)}C.af.gdS(window).cd(this)
this.a.dc(b2+0)},
$S:function(){return{func:1,v:true,args:[P.X]}}}
J.a.prototype.cQ=J.a.prototype.k
J.bq.prototype.cS=J.bq.prototype.k
P.S.prototype.cR=P.S.prototype.ax
W.a_.prototype.aD=W.a_.prototype.J
W.bN.prototype.cT=W.bN.prototype.R;(function installTearOffs(){installTearOff(H.aV.prototype,"gey",0,0,0,null,["$0"],["av"],0)
installTearOff(H.af.prototype,"gcB",0,0,0,null,["$1"],["H"],2)
installTearOff(H.aU.prototype,"gec",0,0,0,null,["$1"],["T"],2)
installTearOff(P,"mi",1,0,0,null,["$1"],["m_"],1)
installTearOff(P,"mj",1,0,0,null,["$1"],["m0"],1)
installTearOff(P,"mk",1,0,0,null,["$1"],["m1"],1)
installTearOff(P,"kf",1,0,0,null,["$0"],["mg"],0)
installTearOff(P.ar.prototype,"gdn",0,0,0,null,["$2","$1"],["am","dq"],5)
installTearOff(P,"mq",1,0,0,null,["$2"],["lo"],6)
installTearOff(W,"mx",1,0,0,null,["$1"],["lt"],7)
installTearOff(W,"my",1,0,0,null,["$4"],["m4"],4)
installTearOff(W,"mz",1,0,0,null,["$4"],["m5"],4)
installTearOff(W.d4.prototype,"gaW",0,1,0,null,["$0"],["aX"],3)
installTearOff(W.dg.prototype,"gaW",0,1,0,null,["$0"],["aX"],3)
installTearOff(Z,"kx",1,0,0,null,["$0"],["mH"],0)})();(function inheritance(){inherit(P.m,null)
var t=P.m
inherit(H.iH,t)
inherit(J.a,t)
inherit(J.dz,t)
inherit(P.S,t)
inherit(H.cY,t)
inherit(P.cT,t)
inherit(H.c9,t)
inherit(H.aZ,t)
inherit(H.hu,t)
inherit(H.aV,t)
inherit(H.h7,t)
inherit(H.aW,t)
inherit(H.ht,t)
inherit(H.h0,t)
inherit(H.b4,t)
inherit(H.fA,t)
inherit(H.al,t)
inherit(H.af,t)
inherit(H.aU,t)
inherit(H.f4,t)
inherit(H.fG,t)
inherit(P.b0,t)
inherit(H.dq,t)
inherit(H.dh,t)
inherit(H.ab,t)
inherit(H.ep,t)
inherit(H.er,t)
inherit(P.h2,t)
inherit(P.dm,t)
inherit(P.ar,t)
inherit(P.dk,t)
inherit(P.fl,t)
inherit(P.fm,t)
inherit(P.aY,t)
inherit(P.hT,t)
inherit(P.fb,t)
inherit(P.hr,t)
inherit(P.bL,t)
inherit(P.bA,t)
inherit(P.w,t)
inherit(P.hs,t)
inherit(P.ax,t)
inherit(P.F,t)
inherit(P.bf,t)
inherit(P.X,t)
inherit(P.aG,t)
inherit(P.dc,t)
inherit(P.hc,t)
inherit(P.e9,t)
inherit(P.dP,t)
inherit(P.c,t)
inherit(P.at,t)
inherit(P.b3,t)
inherit(P.bD,t)
inherit(P.q,t)
inherit(P.bE,t)
inherit(W.dG,t)
inherit(W.h_,t)
inherit(W.bK,t)
inherit(W.y,t)
inherit(W.d6,t)
inherit(W.bN,t)
inherit(W.hL,t)
inherit(W.ca,t)
inherit(W.d5,t)
inherit(W.hF,t)
inherit(W.dr,t)
inherit(P.hw,t)
inherit(P.hx,t)
inherit(G.eC,t)
inherit(G.dE,t)
inherit(G.df,t)
inherit(G.de,t)
inherit(G.v,t)
inherit(G.b5,t)
inherit(G.fy,t)
inherit(G.bG,t)
inherit(R.fi,t)
inherit(T.ad,t)
inherit(T.t,t)
inherit(T.b6,t)
inherit(Z.f_,t)
inherit(Z.cS,t)
t=J.a
inherit(J.el,t)
inherit(J.cW,t)
inherit(J.bq,t)
inherit(J.aH,t)
inherit(J.b1,t)
inherit(J.aI,t)
inherit(H.bu,t)
inherit(H.aM,t)
inherit(W.h,t)
inherit(W.Y,t)
inherit(W.c_,t)
inherit(W.c1,t)
inherit(W.c2,t)
inherit(W.x,t)
inherit(W.cd,t)
inherit(W.dI,t)
inherit(W.dJ,t)
inherit(W.c6,t)
inherit(W.c7,t)
inherit(W.co,t)
inherit(W.dL,t)
inherit(W.i,t)
inherit(W.cn,t)
inherit(W.a1,t)
inherit(W.eb,t)
inherit(W.cm,t)
inherit(W.et,t)
inherit(W.ez,t)
inherit(W.a2,t)
inherit(W.ck,t)
inherit(W.eK,t)
inherit(W.d4,t)
inherit(W.cr,t)
inherit(W.eT,t)
inherit(W.av,t)
inherit(W.a3,t)
inherit(W.cj,t)
inherit(W.d9,t)
inherit(W.a5,t)
inherit(W.ci,t)
inherit(W.a6,t)
inherit(W.fk,t)
inherit(W.T,t)
inherit(W.ch,t)
inherit(W.fz,t)
inherit(W.a8,t)
inherit(W.cx,t)
inherit(W.fE,t)
inherit(W.dg,t)
inherit(W.fL,t)
inherit(W.fQ,t)
inherit(W.h1,t)
inherit(W.cw,t)
inherit(W.cv,t)
inherit(W.cu,t)
inherit(W.cq,t)
inherit(W.ct,t)
inherit(W.cs,t)
inherit(W.hR,t)
inherit(W.hS,t)
inherit(P.am,t)
inherit(P.cg,t)
inherit(P.an,t)
inherit(P.cl,t)
inherit(P.eZ,t)
inherit(P.ce,t)
inherit(P.ao,t)
inherit(P.cp,t)
inherit(P.fP,t)
inherit(P.dA,t)
inherit(P.f6,t)
inherit(P.f7,t)
inherit(P.hQ,t)
inherit(P.cf,t)
t=J.bq
inherit(J.eX,t)
inherit(J.aR,t)
inherit(J.aJ,t)
inherit(J.iG,J.aH)
t=J.b1
inherit(J.cV,t)
inherit(J.cU,t)
t=P.S
inherit(H.b,t)
inherit(H.cZ,t)
inherit(H.dj,t)
t=H.b
inherit(H.b2,t)
inherit(H.eq,t)
inherit(H.dO,H.cZ)
t=P.cT
inherit(H.eu,t)
inherit(H.fS,t)
t=H.b2
inherit(H.br,t)
inherit(P.es,t)
t=H.aZ
inherit(H.ir,t)
inherit(H.is,t)
inherit(H.hp,t)
inherit(H.h8,t)
inherit(H.eh,t)
inherit(H.ei,t)
inherit(H.hv,t)
inherit(H.fB,t)
inherit(H.fC,t)
inherit(H.it,t)
inherit(H.i8,t)
inherit(H.i9,t)
inherit(H.ia,t)
inherit(H.ib,t)
inherit(H.ic,t)
inherit(H.fu,t)
inherit(H.em,t)
inherit(H.i4,t)
inherit(H.i5,t)
inherit(H.i6,t)
inherit(P.fX,t)
inherit(P.fW,t)
inherit(P.fY,t)
inherit(P.fZ,t)
inherit(P.hd,t)
inherit(P.hh,t)
inherit(P.he,t)
inherit(P.hf,t)
inherit(P.hg,t)
inherit(P.hk,t)
inherit(P.hl,t)
inherit(P.hj,t)
inherit(P.hi,t)
inherit(P.fn,t)
inherit(P.fo,t)
inherit(P.hV,t)
inherit(P.hA,t)
inherit(P.hz,t)
inherit(P.hB,t)
inherit(P.ev,t)
inherit(P.dM,t)
inherit(P.dN,t)
inherit(W.hX,t)
inherit(W.fT,t)
inherit(W.hb,t)
inherit(W.eM,t)
inherit(W.eL,t)
inherit(W.hH,t)
inherit(W.hI,t)
inherit(W.hO,t)
inherit(W.hP,t)
inherit(P.hY,t)
inherit(B.il,t)
inherit(B.im,t)
inherit(B.io,t)
inherit(B.ip,t)
inherit(B.iq,t)
inherit(B.eP,t)
inherit(B.eQ,t)
inherit(B.eR,t)
inherit(B.eS,t)
inherit(A.i3,t)
inherit(Z.ig,t)
inherit(Z.ih,t)
inherit(Z.ii,t)
t=H.h0
inherit(H.b7,t)
inherit(H.bO,t)
t=P.b0
inherit(H.d7,t)
inherit(H.en,t)
inherit(H.fK,t)
inherit(H.fI,t)
inherit(H.dD,t)
inherit(H.f8,t)
inherit(P.bZ,t)
inherit(P.d8,t)
inherit(P.ak,t)
inherit(P.r,t)
inherit(P.di,t)
inherit(P.au,t)
inherit(P.Z,t)
inherit(P.dH,t)
t=H.fu
inherit(H.fh,t)
inherit(H.be,t)
inherit(H.fV,P.bZ)
inherit(H.d0,H.aM)
t=H.d0
inherit(H.bv,t)
inherit(H.bw,t)
inherit(H.by,H.bv)
inherit(H.d1,H.by)
inherit(H.bx,H.bw)
inherit(H.d2,H.bx)
t=H.d1
inherit(H.d_,t)
inherit(H.eD,t)
t=H.d2
inherit(H.eE,t)
inherit(H.eF,t)
inherit(H.eG,t)
inherit(H.eH,t)
inherit(H.eI,t)
inherit(H.d3,t)
inherit(H.eJ,t)
inherit(P.hM,P.h2)
inherit(P.hy,P.hT)
inherit(P.dn,H.ab)
inherit(P.fa,P.fb)
inherit(P.ho,P.fa)
inherit(P.hq,P.ho)
inherit(P.cX,P.bA)
t=P.X
inherit(P.N,t)
inherit(P.o,t)
t=P.ak
inherit(P.bB,t)
inherit(P.ef,t)
t=W.h
inherit(W.p,t)
inherit(W.bk,t)
inherit(W.dF,t)
inherit(W.e6,t)
inherit(W.bp,t)
inherit(W.bt,t)
inherit(W.f0,t)
inherit(W.da,t)
inherit(W.fc,t)
inherit(W.a4,t)
inherit(W.bj,t)
inherit(W.a7,t)
inherit(W.U,t)
inherit(W.bi,t)
inherit(W.fN,t)
inherit(W.fR,t)
inherit(W.bH,t)
inherit(W.fU,t)
inherit(W.aT,t)
inherit(W.hG,t)
t=W.p
inherit(W.a_,t)
inherit(W.aF,t)
inherit(W.bg,t)
inherit(W.c5,t)
inherit(W.h4,t)
t=W.a_
inherit(W.j,t)
inherit(P.D,t)
t=W.j
inherit(W.dx,t)
inherit(W.dy,t)
inherit(W.aE,t)
inherit(W.c0,t)
inherit(W.c4,t)
inherit(W.e8,t)
inherit(W.cb,t)
inherit(W.eg,t)
inherit(W.f9,t)
inherit(W.dd,t)
inherit(W.fs,t)
inherit(W.ft,t)
inherit(W.bF,t)
inherit(W.hn,t)
inherit(W.bn,W.bk)
inherit(W.dB,W.bn)
inherit(W.b_,W.cd)
inherit(W.cR,W.co)
inherit(W.dK,W.cR)
inherit(W.a0,W.c_)
inherit(W.cP,W.cn)
inherit(W.e5,W.cP)
inherit(W.cJ,W.cm)
inherit(W.bo,W.cJ)
inherit(W.cc,W.bg)
inherit(W.ec,W.bp)
inherit(W.aw,W.i)
t=W.aw
inherit(W.aK,t)
inherit(W.J,t)
inherit(W.aQ,t)
inherit(W.eA,W.bt)
inherit(W.cL,W.ck)
inherit(W.eB,W.cL)
inherit(W.R,P.cX)
inherit(W.cK,W.cr)
inherit(W.bz,W.cK)
inherit(W.eW,W.av)
inherit(W.cA,W.cj)
inherit(W.eY,W.cA)
inherit(W.bm,W.bj)
inherit(W.fd,W.bm)
inherit(W.cD,W.ci)
inherit(W.ff,W.cD)
inherit(W.cB,W.ch)
inherit(W.fw,W.cB)
inherit(W.bl,W.bi)
inherit(W.fx,W.bl)
inherit(W.cM,W.cx)
inherit(W.fD,W.cM)
inherit(W.aS,W.J)
inherit(W.cy,W.cw)
inherit(W.dl,W.cy)
inherit(W.cF,W.cv)
inherit(W.h3,W.cF)
inherit(W.h5,W.c7)
inherit(W.cQ,W.cu)
inherit(W.hm,W.cQ)
inherit(W.cO,W.cq)
inherit(W.dp,W.cO)
inherit(W.cN,W.ct)
inherit(W.hJ,W.cN)
inherit(W.cH,W.cs)
inherit(W.hK,W.cH)
inherit(W.h6,W.h_)
inherit(W.h9,P.fl)
inherit(W.iQ,W.h9)
inherit(W.ha,P.fm)
inherit(W.hN,W.bN)
inherit(P.H,P.hx)
t=P.D
inherit(P.G,t)
inherit(P.aD,t)
inherit(P.dQ,t)
inherit(P.dR,t)
inherit(P.dS,t)
inherit(P.dT,t)
inherit(P.dU,t)
inherit(P.dV,t)
inherit(P.dW,t)
inherit(P.dX,t)
inherit(P.dY,t)
inherit(P.dZ,t)
inherit(P.e_,t)
inherit(P.e0,t)
inherit(P.e1,t)
inherit(P.e2,t)
inherit(P.e3,t)
inherit(P.e4,t)
inherit(P.e7,t)
inherit(P.ew,t)
inherit(P.ex,t)
inherit(P.eU,t)
inherit(P.bC,t)
inherit(P.fr,t)
inherit(P.fO,t)
inherit(P.bJ,t)
inherit(P.hC,t)
inherit(P.hD,t)
inherit(P.hE,t)
t=P.G
inherit(P.dw,t)
inherit(P.ed,t)
inherit(P.fq,t)
inherit(P.aP,t)
inherit(P.fM,t)
inherit(P.cz,P.cg)
inherit(P.eo,P.cz)
inherit(P.cI,P.cl)
inherit(P.eN,P.cI)
inherit(P.cG,P.ce)
inherit(P.fp,P.cG)
inherit(P.fv,P.aP)
inherit(P.cE,P.cp)
inherit(P.fF,P.cE)
inherit(P.cC,P.cf)
inherit(P.fg,P.cC)
t=G.eC
inherit(G.fe,t)
inherit(G.fJ,t)
inherit(G.bs,t)
inherit(G.f5,t)
inherit(G.dC,G.fe)
inherit(B.eO,G.dC)
t=G.fJ
inherit(G.ey,t)
inherit(G.eV,t)
inherit(G.ee,G.bG)
inherit(R.fj,R.fi)
mixin(H.bv,P.w)
mixin(H.bw,P.w)
mixin(H.bx,H.c9)
mixin(H.by,H.c9)
mixin(P.bA,P.w)
mixin(W.bi,P.w)
mixin(W.bj,P.w)
mixin(W.bk,P.w)
mixin(W.bl,W.y)
mixin(W.bm,W.y)
mixin(W.bn,W.y)
mixin(W.cd,W.dG)
mixin(W.cx,P.w)
mixin(W.cj,P.w)
mixin(W.cq,P.w)
mixin(W.cr,P.w)
mixin(W.cs,P.w)
mixin(W.ct,P.w)
mixin(W.cu,P.w)
mixin(W.cv,P.w)
mixin(W.cw,P.w)
mixin(W.ch,P.w)
mixin(W.ci,P.w)
mixin(W.ck,P.w)
mixin(W.cm,P.w)
mixin(W.cn,P.w)
mixin(W.co,P.w)
mixin(W.cy,W.y)
mixin(W.cA,W.y)
mixin(W.cK,W.y)
mixin(W.cL,W.y)
mixin(W.cJ,W.y)
mixin(W.cO,W.y)
mixin(W.cP,W.y)
mixin(W.cQ,W.y)
mixin(W.cR,W.y)
mixin(W.cB,W.y)
mixin(W.cD,W.y)
mixin(W.cF,W.y)
mixin(W.cH,W.y)
mixin(W.cM,W.y)
mixin(W.cN,W.y)
mixin(P.cg,P.w)
mixin(P.ce,P.w)
mixin(P.cl,P.w)
mixin(P.cp,P.w)
mixin(P.cz,W.y)
mixin(P.cI,W.y)
mixin(P.cE,W.y)
mixin(P.cG,W.y)
mixin(P.cf,P.w)
mixin(P.cC,W.y)})();(function constants(){C.p=W.aE.prototype
C.w=W.c0.prototype
C.n=W.c1.prototype
C.q=W.c2.prototype
C.x=W.b_.prototype
C.r=W.c4.prototype
C.L=W.c6.prototype
C.M=W.cb.prototype
C.i=W.cc.prototype
C.N=J.a.prototype
C.a=J.aH.prototype
C.z=J.cU.prototype
C.b=J.cV.prototype
C.A=J.cW.prototype
C.c=J.b1.prototype
C.j=J.aI.prototype
C.U=J.aJ.prototype
C.Y=H.d_.prototype
C.D=W.bz.prototype
C.E=J.eX.prototype
C.F=W.d9.prototype
C.K=W.dd.prototype
C.v=J.aR.prototype
C.ae=W.aS.prototype
C.af=W.bH.prototype
C.f=new P.hy()
C.y=new P.aG(0)
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
C.V=H.L(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.q])
C.W=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.X=makeConstList([])
C.t=H.L(makeConstList(["bind","if","ref","repeat","syntax"]),[P.q])
C.u=H.L(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.q])
C.Z=new G.v("vec3","vertex btangents",0)
C.d=new G.v("vec3","",0)
C.a_=new G.v("vec4","delta from light",0)
C.o=new G.v("","",0)
C.G=new G.v("vec3","vertex coordinates",0)
C.a0=new G.v("vec3","vertex binormals",0)
C.H=new G.v("vec4","for wireframe",0)
C.a1=new G.v("vec4","per vertex color",0)
C.a2=new G.v("float","for normal maps",0)
C.k=new G.v("mat4","",0)
C.a4=new G.v("mat4","",4)
C.a3=new G.v("mat4","",128)
C.e=new G.v("float","",0)
C.a5=new G.v("float","",4)
C.a6=new G.v("float","depth for shadowmaps",0)
C.h=new G.v("sampler2D","",0)
C.a7=new G.v("float","for bump maps",0)
C.a8=new G.v("vec2","texture uvs",0)
C.a9=new G.v("float","time since program start in sec",0)
C.l=new G.v("vec2","",0)
C.aa=new G.v("samplerCube","",0)
C.m=new G.v("vec4","",0)
C.ab=new G.v("vec3","vertex normals",0)
C.ac=new G.v("sampler2DShadow","",0)
C.I=new G.v("vec3","per vertex color",0)
C.J=new G.v("mat3","",0)
C.ad=new G.v("vec3","vertex tangents",0)})();(function staticFields(){$.jL="$cachedFunction"
$.jM="$cachedInvocation"
$.jo=null
$.jm=null
$.iS=!1
$.iY=null
$.kc=null
$.ku=null
$.i0=null
$.i7=null
$.j_=null
$.b8=null
$.bP=null
$.bQ=null
$.iT=!1
$.A=C.f
$.jz=0
$.as=null
$.iB=null
$.jy=null
$.jx=null
$.jv=null
$.ju=null
$.jt=null
$.js=null
$.mn=0
$.mo=0
$.j3=0
$.ko=0
$.bV=0
$.bW=0
$.mO=!1
$.mt=0})();(function lazyInitializers(){lazy($,"jr","$get$jr",function(){return H.kl("_$dart_dartClosure")})
lazy($,"iI","$get$iI",function(){return H.kl("_$dart_js")})
lazy($,"jD","$get$jD",function(){return H.lA()})
lazy($,"jE","$get$jE",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.jz
$.jz=t+1
t="expando$key$"+t}return new P.dP(null,t,[P.o])})
lazy($,"jR","$get$jR",function(){return H.ap(H.fH({
toString:function(){return"$receiver$"}}))})
lazy($,"jS","$get$jS",function(){return H.ap(H.fH({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"jT","$get$jT",function(){return H.ap(H.fH(null))})
lazy($,"jU","$get$jU",function(){return H.ap(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jY","$get$jY",function(){return H.ap(H.fH(void 0))})
lazy($,"jZ","$get$jZ",function(){return H.ap(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jW","$get$jW",function(){return H.ap(H.jX(null))})
lazy($,"jV","$get$jV",function(){return H.ap(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"k0","$get$k0",function(){return H.ap(H.jX(void 0))})
lazy($,"k_","$get$k_",function(){return H.ap(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"iP","$get$iP",function(){return P.lZ()})
lazy($,"bR","$get$bR",function(){return[]})
lazy($,"jq","$get$jq",function(){return{}})
lazy($,"k5","$get$k5",function(){return P.iK(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"iR","$get$iR",function(){return P.I()})
lazy($,"i_","$get$i_",function(){return P.jF(P.o,P.ax)})
lazy($,"bU","$get$bU",function(){return P.jF(P.q,P.ax)})
lazy($,"jP","$get$jP",function(){return new G.df(1281,0,4294967295)})
lazy($,"jk","$get$jk",function(){return new G.de(32774,770,769)})
lazy($,"ag","$get$ag",function(){return P.aL(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColors",C.I,"aColorAlpha",C.a1,"aPosition",C.G,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.H,"aPointSize",C.e,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.m,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.I,"vTexUV",C.l,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.G,"vPositionFromLight",C.a_,"vCenter",C.H,"vDepth",C.a6,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.J,"uConvolutionMatrix",C.J,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.ac,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.aa,"uAnimationTable",C.h,"uTime",C.a9,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.d,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.e,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2])})
lazy($,"kt","$get$kt",function(){var t=new G.b5("PointSpritesV",null,[],[],[],[],0,P.I())
t.bd(["aPosition"])
t.ak(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.bh(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"ks","$get$ks",function(){var t=new G.b5("PointSpritesF",null,[],[],[],[],0,P.I())
t.ak(["uTexture"])
t.bh(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return t})
lazy($,"iX","$get$iX",function(){return C.i.aY(W.kg(),"#particles")})
lazy($,"ki","$get$ki",function(){return C.i.aY(W.kg(),"#cpucompute")})
lazy($,"kq","$get$kq",function(){var t=new G.b5("ParticleV",null,[],[],[],[],0,P.I())
t.bd(["aPosition"])
t.ak(["uPerspectiveViewMatrix","uModelMatrix","uPointSize","uSources","uSinks"])
t.cV(["tPosition"])
t.bg(["const float kMaxDistance = 100.1;\nconst float kMinDistance = 0.2;\nconst float dt = 0.06;  \n    \nfloat rand(vec2 seed){\n    return fract(sin(dot(seed, vec2(12.9898,78.233))) * 43758.5453);\n}      \n\nint irand(int n, vec2 seed) {\n    return int(floor(rand(seed) * float(n)));\n}\n\nvec3 vec3rand(vec3 seed) {\n    return vec3(rand(seed.yz) - 0.5, rand(seed.xz) - 0.5, rand(seed.xy) - 0.5);\n}\n\nvec3 RandomSource(vec3 seed) {\n    return uSources[irand(uSources.length(), seed.xy * seed.z)];\n}\n\nvec3 Update(vec3 pos, vec3 seed) {\n    vec3 force = vec3(0.0, 0.0, 0.0);\n    for (int i = 0; i < uSources.length(); ++i) {\n       vec3 d = pos - uSources[i];\n       float l = length(d);\n       if (l <= kMinDistance) continue;\n       if (l >= kMaxDistance) {\n           return RandomSource(seed) + vec3rand(seed) * 0.35;\n       }\n       force += d / (l * l); \n    } \n    \n    for (int i = 0; i < uSinks.length(); ++i) {\n       vec3 d = uSinks[i] - pos;\n       float l = length(d);\n       if (l <= kMinDistance) {\n          return RandomSource(seed) + vec3rand(seed) * 0.35;\n       }\n       force += d / (l * l); \n    } \n    return pos + normalize(force) * dt;\n}\n      \nvoid main() {        \n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * \n                  vec4(aPosition, 1.0);\n    gl_PointSize = uPointSize/gl_Position.z;\n    \n    // new position for next round\n    tPosition = Update(aPosition, gl_Position.xyz);\n}\n"])
return t})
lazy($,"kp","$get$kp",function(){var t=new G.b5("ParticleF",null,[],[],[],[],0,P.I())
t.ak(["uTexture"])
t.bg(["void main() {\n      oFragColor = texture( uTexture,  gl_PointCoord);\n}\n"])
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
mangledGlobalNames:{o:"int",N:"double",X:"num",q:"String",ax:"bool",b3:"Null",c:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.p},{func:1,ret:P.ax,args:[W.a_,P.q,P.q,W.bK]},{func:1,v:true,args:[P.m],opt:[P.bD]},{func:1,ret:P.o,args:[P.F,P.F]},{func:1,ret:P.q,args:[W.h]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CalcLength:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,KeywordValue:J.a,LengthValue:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NumberValue:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,PositionValue:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SimpleLength:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StyleValue:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,TransformValue:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bu,DataView:H.aM,ArrayBufferView:H.aM,Float32Array:H.d_,Float64Array:H.eD,Int16Array:H.eE,Int32Array:H.eF,Int8Array:H.eG,Uint16Array:H.eH,Uint32Array:H.eI,Uint8ClampedArray:H.d3,CanvasPixelArray:H.d3,Uint8Array:H.eJ,HTMLAudioElement:W.j,HTMLBRElement:W.j,HTMLBaseElement:W.j,HTMLButtonElement:W.j,HTMLContentElement:W.j,HTMLDListElement:W.j,HTMLDataListElement:W.j,HTMLDetailsElement:W.j,HTMLDialogElement:W.j,HTMLEmbedElement:W.j,HTMLFieldSetElement:W.j,HTMLHRElement:W.j,HTMLHeadingElement:W.j,HTMLHtmlElement:W.j,HTMLIFrameElement:W.j,HTMLImageElement:W.j,HTMLKeygenElement:W.j,HTMLLIElement:W.j,HTMLLabelElement:W.j,HTMLLegendElement:W.j,HTMLLinkElement:W.j,HTMLMapElement:W.j,HTMLMediaElement:W.j,HTMLMenuElement:W.j,HTMLMenuItemElement:W.j,HTMLMetaElement:W.j,HTMLMeterElement:W.j,HTMLModElement:W.j,HTMLOListElement:W.j,HTMLObjectElement:W.j,HTMLOptGroupElement:W.j,HTMLOptionElement:W.j,HTMLOutputElement:W.j,HTMLParagraphElement:W.j,HTMLParamElement:W.j,HTMLPictureElement:W.j,HTMLPreElement:W.j,HTMLProgressElement:W.j,HTMLQuoteElement:W.j,HTMLScriptElement:W.j,HTMLShadowElement:W.j,HTMLSlotElement:W.j,HTMLSourceElement:W.j,HTMLSpanElement:W.j,HTMLStyleElement:W.j,HTMLTableCaptionElement:W.j,HTMLTableCellElement:W.j,HTMLTableDataCellElement:W.j,HTMLTableHeaderCellElement:W.j,HTMLTableColElement:W.j,HTMLTextAreaElement:W.j,HTMLTitleElement:W.j,HTMLTrackElement:W.j,HTMLUListElement:W.j,HTMLUnknownElement:W.j,HTMLVideoElement:W.j,HTMLDirectoryElement:W.j,HTMLFontElement:W.j,HTMLFrameElement:W.j,HTMLMarqueeElement:W.j,HTMLElement:W.j,HTMLAnchorElement:W.dx,HTMLAreaElement:W.dy,AudioTrack:W.Y,AudioTrackList:W.dB,Blob:W.c_,HTMLBodyElement:W.aE,HTMLCanvasElement:W.c0,CanvasGradient:W.c1,CanvasRenderingContext2D:W.c2,CDATASection:W.aF,CharacterData:W.aF,Comment:W.aF,ProcessingInstruction:W.aF,Text:W.aF,CompositorWorker:W.dF,CSSCharsetRule:W.x,CSSFontFaceRule:W.x,CSSGroupingRule:W.x,CSSImportRule:W.x,CSSKeyframeRule:W.x,MozCSSKeyframeRule:W.x,WebKitCSSKeyframeRule:W.x,CSSKeyframesRule:W.x,MozCSSKeyframesRule:W.x,WebKitCSSKeyframesRule:W.x,CSSMediaRule:W.x,CSSNamespaceRule:W.x,CSSPageRule:W.x,CSSRule:W.x,CSSStyleRule:W.x,CSSSupportsRule:W.x,CSSViewportRule:W.x,CSSStyleDeclaration:W.b_,MSStyleCSSProperties:W.b_,CSS2Properties:W.b_,DataTransferItemList:W.dI,HTMLDivElement:W.c4,XMLDocument:W.bg,Document:W.bg,DocumentFragment:W.c5,ShadowRoot:W.c5,DOMException:W.dJ,DOMImplementation:W.c6,DOMRectReadOnly:W.c7,DOMStringList:W.dK,DOMTokenList:W.dL,Element:W.a_,AnimationEvent:W.i,AnimationPlayerEvent:W.i,ApplicationCacheErrorEvent:W.i,AutocompleteErrorEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceLightEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,GamepadEvent:W.i,GeofencingEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RelatedEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCIceCandidateEvent:W.i,RTCPeerConnectionIceEvent:W.i,SecurityPolicyViolationEvent:W.i,ServicePortConnectEvent:W.i,ServiceWorkerMessageEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.a0,FileList:W.e5,FileWriter:W.e6,HTMLFormElement:W.e8,Gamepad:W.a1,HTMLHeadElement:W.cb,History:W.eb,HTMLCollection:W.bo,HTMLFormControlsCollection:W.bo,HTMLOptionsCollection:W.bo,HTMLDocument:W.cc,XMLHttpRequest:W.ec,XMLHttpRequestUpload:W.bp,XMLHttpRequestEventTarget:W.bp,HTMLInputElement:W.eg,KeyboardEvent:W.aK,Location:W.et,MediaList:W.ez,MIDIOutput:W.eA,MIDIInput:W.bt,MIDIPort:W.bt,MimeType:W.a2,MimeTypeArray:W.eB,PointerEvent:W.J,MouseEvent:W.J,DragEvent:W.J,Navigator:W.eK,Attr:W.p,Node:W.p,NodeIterator:W.d4,NodeList:W.bz,RadioNodeList:W.bz,Path2D:W.eT,Perspective:W.eW,Plugin:W.a3,PluginArray:W.eY,PresentationConnection:W.f0,Range:W.d9,RTCDataChannel:W.da,DataChannel:W.da,HTMLSelectElement:W.f9,SharedWorker:W.fc,SourceBuffer:W.a4,SourceBufferList:W.fd,SpeechGrammar:W.a5,SpeechGrammarList:W.ff,SpeechRecognitionResult:W.a6,Storage:W.fk,CSSStyleSheet:W.T,StyleSheet:W.T,HTMLTableElement:W.dd,HTMLTableRowElement:W.fs,HTMLTableSectionElement:W.ft,HTMLTemplateElement:W.bF,TextTrack:W.a7,TextTrackCue:W.U,VTTCue:W.U,TextTrackCueList:W.fw,TextTrackList:W.fx,TimeRanges:W.fz,Touch:W.a8,TouchEvent:W.aQ,TouchList:W.fD,TrackDefaultList:W.fE,Matrix:W.av,Rotation:W.av,Skew:W.av,Translation:W.av,TransformComponent:W.av,TreeWalker:W.dg,CompositionEvent:W.aw,FocusEvent:W.aw,TextEvent:W.aw,SVGZoomEvent:W.aw,UIEvent:W.aw,URL:W.fL,VideoTrackList:W.fN,VTTRegionList:W.fQ,WebSocket:W.fR,WheelEvent:W.aS,Window:W.bH,DOMWindow:W.bH,Worker:W.fU,CompositorWorkerGlobalScope:W.aT,DedicatedWorkerGlobalScope:W.aT,ServiceWorkerGlobalScope:W.aT,SharedWorkerGlobalScope:W.aT,WorkerGlobalScope:W.aT,ClientRect:W.h1,ClientRectList:W.dl,DOMRectList:W.dl,CSSRuleList:W.h3,DocumentType:W.h4,DOMRect:W.h5,GamepadList:W.hm,HTMLFrameSetElement:W.hn,NamedNodeMap:W.dp,MozNamedAttrMap:W.dp,ServiceWorker:W.hG,SpeechRecognitionResultList:W.hJ,StyleSheetList:W.hK,WorkerLocation:W.hR,WorkerNavigator:W.hS,SVGAElement:P.dw,SVGAnimateElement:P.aD,SVGAnimateMotionElement:P.aD,SVGAnimateTransformElement:P.aD,SVGAnimationElement:P.aD,SVGSetElement:P.aD,SVGFEBlendElement:P.dQ,SVGFEColorMatrixElement:P.dR,SVGFEComponentTransferElement:P.dS,SVGFECompositeElement:P.dT,SVGFEConvolveMatrixElement:P.dU,SVGFEDiffuseLightingElement:P.dV,SVGFEDisplacementMapElement:P.dW,SVGFEFloodElement:P.dX,SVGFEGaussianBlurElement:P.dY,SVGFEImageElement:P.dZ,SVGFEMergeElement:P.e_,SVGFEMorphologyElement:P.e0,SVGFEOffsetElement:P.e1,SVGFESpecularLightingElement:P.e2,SVGFETileElement:P.e3,SVGFETurbulenceElement:P.e4,SVGFilterElement:P.e7,SVGCircleElement:P.G,SVGClipPathElement:P.G,SVGDefsElement:P.G,SVGEllipseElement:P.G,SVGForeignObjectElement:P.G,SVGGElement:P.G,SVGGeometryElement:P.G,SVGLineElement:P.G,SVGPathElement:P.G,SVGPolygonElement:P.G,SVGPolylineElement:P.G,SVGRectElement:P.G,SVGSwitchElement:P.G,SVGGraphicsElement:P.G,SVGImageElement:P.ed,SVGLength:P.am,SVGLengthList:P.eo,SVGMarkerElement:P.ew,SVGMaskElement:P.ex,SVGNumber:P.an,SVGNumberList:P.eN,SVGPatternElement:P.eU,SVGPointList:P.eZ,SVGScriptElement:P.bC,SVGStringList:P.fp,SVGDescElement:P.D,SVGDiscardElement:P.D,SVGFEDistantLightElement:P.D,SVGFEFuncAElement:P.D,SVGFEFuncBElement:P.D,SVGFEFuncGElement:P.D,SVGFEFuncRElement:P.D,SVGFEMergeNodeElement:P.D,SVGFEPointLightElement:P.D,SVGFESpotLightElement:P.D,SVGMetadataElement:P.D,SVGStopElement:P.D,SVGStyleElement:P.D,SVGTitleElement:P.D,SVGComponentTransferFunctionElement:P.D,SVGElement:P.D,SVGSVGElement:P.fq,SVGSymbolElement:P.fr,SVGTSpanElement:P.aP,SVGTextElement:P.aP,SVGTextPositioningElement:P.aP,SVGTextContentElement:P.aP,SVGTextPathElement:P.fv,SVGTransform:P.ao,SVGTransformList:P.fF,SVGUseElement:P.fM,SVGViewElement:P.fO,SVGViewSpec:P.fP,SVGLinearGradientElement:P.bJ,SVGRadialGradientElement:P.bJ,SVGGradientElement:P.bJ,SVGCursorElement:P.hC,SVGFEDropShadowElement:P.hD,SVGMPathElement:P.hE,AudioBuffer:P.dA,WebGLRenderingContext:P.f6,WebGL2RenderingContext:P.f7,WebGL2RenderingContextBase:P.hQ,SQLResultSetRowList:P.fg})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CalcLength:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,KeywordValue:true,LengthValue:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NumberValue:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,PositionValue:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SimpleLength:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,StyleValue:true,SyncManager:true,TextMetrics:true,TrackDefault:true,TransformValue:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Rotation:true,Skew:true,Translation:true,TransformComponent:false,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.d0.$nativeSuperclassTag="ArrayBufferView"
H.bv.$nativeSuperclassTag="ArrayBufferView"
H.by.$nativeSuperclassTag="ArrayBufferView"
H.d1.$nativeSuperclassTag="ArrayBufferView"
H.bw.$nativeSuperclassTag="ArrayBufferView"
H.bx.$nativeSuperclassTag="ArrayBufferView"
H.d2.$nativeSuperclassTag="ArrayBufferView"
W.bk.$nativeSuperclassTag="EventTarget"
W.bn.$nativeSuperclassTag="EventTarget"
W.bj.$nativeSuperclassTag="EventTarget"
W.bm.$nativeSuperclassTag="EventTarget"
W.bi.$nativeSuperclassTag="EventTarget"
W.bl.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.kv(Z.kx(),b)},[])
else (function(b){H.kv(Z.kx(),b)})([])})})()