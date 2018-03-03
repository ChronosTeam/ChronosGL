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
a[c]=function(){a[c]=function(){H.mT(b)}
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
return d?function(e){if(t===null)t=H.iT(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.iT(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.iT(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={iE:function iE(a){this.a=a},
iJ:function(a,b,c,d){if(!!a.$isb)return new H.dO(a,b,[c,d])
return new H.cS(a,b,[c,d])},
ek:function(){return new P.aw("No element")},
lA:function(){return new P.aw("Too many elements")},
lz:function(){return new P.aw("Too few elements")},
d6:function(a,b,c,d){if(c-b<=32)H.lQ(a,b,c,d)
else H.lP(a,b,c,d)},
lQ:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.aa(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.af(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.j(a,q,s.h(a,p))
q=p}s.j(a,q,r)}},
lP:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.C(t+1,6)
r=a3+s
q=a4-s
p=C.b.C(a3+a4,2)
o=p-s
n=p+s
t=J.aa(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.af(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.af(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.af(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.af(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.af(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.af(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.af(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.af(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.af(a5.$2(j,i),0)){h=i
i=j
j=h}t.j(a2,r,m)
t.j(a2,p,k)
t.j(a2,q,i)
t.j(a2,o,t.h(a2,a3))
t.j(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.D(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.d6(a2,a3,g-2,a5)
H.d6(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.D(a5.$2(t.h(a2,g),l),0);)++g
for(;J.D(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.d6(a2,g,f,a5)}else H.d6(a2,g,f,a5)},
b:function b(){},
b5:function b5(){},
cR:function cR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cS:function cS(a,b,c){this.a=a
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
bs:function bs(a,b,c){this.a=a
this.b=b
this.$ti=c},
de:function de(a,b,c){this.a=a
this.b=b
this.$ti=c},
fR:function fR(a,b,c){this.a=a
this.b=b
this.$ti=c},
c3:function c3(){},
dm:function(a,b){var t=a.ac(b)
if(!u.globalState.d.cy)u.globalState.f.ai()
return t},
id:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
kq:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.u(s).$isc)throw H.e(P.je("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.ht(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$jy()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.h6(P.iI(null,H.aY),0)
r=P.p
s.seh(new H.ab(0,null,null,null,null,null,0,[r,H.aX]))
s.sek(new H.ab(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.hs()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.lu,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.m8)}if(u.globalState.x)return
s=u.globalState.a++
q=P.ac(null,null,null,r)
p=new H.b7(0,null,!1)
o=new H.aX(s,new H.ab(0,null,null,null,null,null,0,[r,H.b7]),q,u.createNewIsolate(),p,new H.ai(H.ii()),new H.ai(H.ii()),!1,!1,[],P.ac(null,null,null,null),null,null,!1,!0,P.ac(null,null,null,null))
q.l(0,0)
o.bk(0,p)
u.globalState.e=o
u.globalState.z.j(0,s,o)
u.globalState.d=o
if(H.bc(a,{func:1,args:[,]}))o.ac(new H.ip(t,a))
else if(H.bc(a,{func:1,args:[,,]}))o.ac(new H.iq(t,a))
else o.ac(a)
u.globalState.f.ai()},
m8:function(a){var t=P.au(["command","print","msg",a])
return new H.ad(!0,P.bL(null,P.p)).E(t)},
lw:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.lx()
return},
lx:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.t("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.t('Cannot extract URI from "'+t+'"'))},
lu:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.aW(!0,[]).P(b.data)
s=J.aa(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.mB(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aW(!0,[]).P(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aW(!0,[]).P(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.p
j=P.ac(null,null,null,k)
i=new H.b7(0,null,!1)
h=new H.aX(s,new H.ab(0,null,null,null,null,null,0,[k,H.b7]),j,u.createNewIsolate(),i,new H.ai(H.ii()),new H.ai(H.ii()),!1,!1,[],P.ac(null,null,null,null),null,null,!1,!0,P.ac(null,null,null,null))
j.l(0,0)
h.bk(0,i)
u.globalState.f.a.M(0,new H.aY(h,new H.eh(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.ai()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.kU(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ai()
break
case"close":u.globalState.ch.ah(0,$.$get$jz().h(0,a))
a.terminate()
u.globalState.f.ai()
break
case"log":H.lt(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.au(["command","print","msg",t])
k=new H.ad(!0,P.bL(null,P.p)).E(k)
s.toString
self.postMessage(k)}else P.ar(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
lt:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.au(["command","log","msg",a])
r=new H.ad(!0,P.bL(null,P.p)).E(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.N(q)
t=H.aB(q)
s=P.c2(t)
throw H.e(s)}},
lv:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.jE=$.jE+("_"+s)
$.jF=$.jF+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.B(0,["spawned",new H.b9(s,r),q,t.r])
r=new H.ei(a,b,c,d,t)
if(e){t.bD(q,q)
u.globalState.f.a.M(0,new H.aY(t,r,"start isolate"))}else r.$0()},
lS:function(a,b){var t=new H.fz(!0,!1,null)
t.d_(a,b)
return t},
m9:function(a){return new H.aW(!0,[]).P(new H.ad(!1,P.bL(null,P.p)).E(a))},
ip:function ip(a,b){this.a=a
this.b=b},
iq:function iq(a,b){this.a=a
this.b=b},
ht:function ht(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
aX:function aX(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
ho:function ho(a,b){this.a=a
this.b=b},
h6:function h6(a,b){this.a=a
this.b=b},
h7:function h7(a){this.a=a},
aY:function aY(a,b,c){this.a=a
this.b=b
this.c=c},
hs:function hs(){},
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
h_:function h_(){},
b9:function b9(a,b){this.b=a
this.a=b},
hu:function hu(a,b){this.a=a
this.b=b},
bN:function bN(a,b,c){this.b=a
this.c=b
this.a=c},
b7:function b7(a,b,c){this.a=a
this.b=b
this.c=c},
fz:function fz(a,b,c){this.a=a
this.b=b
this.c=c},
fA:function fA(a,b){this.a=a
this.b=b},
fB:function fB(a,b){this.a=a
this.b=b},
ai:function ai(a){this.a=a},
ad:function ad(a,b){this.a=a
this.b=b},
aW:function aW(a,b){this.a=a
this.b=b},
mu:function(a){return u.types[a]},
mD:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.u(a).$isn},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aF(a)
if(typeof t!=="string")throw H.e(H.Q(a))
return t},
lN:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.f4(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aP:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
f2:function(a){var t,s,r,q,p,o,n,m
t=J.u(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.A||!!J.u(a).$isaT){p=C.r(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.h.aA(q,0)===36)q=C.h.cF(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.ic(H.i1(a),0,null),u.mangledGlobalNames)},
f1:function(a){return"Instance of '"+H.f2(a)+"'"},
O:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lL:function(a){return a.b?H.O(a).getUTCFullYear()+0:H.O(a).getFullYear()+0},
lJ:function(a){return a.b?H.O(a).getUTCMonth()+1:H.O(a).getMonth()+1},
lF:function(a){return a.b?H.O(a).getUTCDate()+0:H.O(a).getDate()+0},
lG:function(a){return a.b?H.O(a).getUTCHours()+0:H.O(a).getHours()+0},
lI:function(a){return a.b?H.O(a).getUTCMinutes()+0:H.O(a).getMinutes()+0},
lK:function(a){return a.b?H.O(a).getUTCSeconds()+0:H.O(a).getSeconds()+0},
lH:function(a){return a.b?H.O(a).getUTCMilliseconds()+0:H.O(a).getMilliseconds()+0},
jD:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.Q(a))
return a[b]},
M:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ah(!0,b,"index",null)
t=J.du(a)
if(b<0||C.b.cl(b,t))return P.y(b,a,"index",null,t)
return P.f3(b,"index",null)},
Q:function(a){return new P.ah(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.d1()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.kr})
t.name=""}else t.toString=H.kr
return t},
kr:function(){return J.aF(this.dartException)},
C:function(a){throw H.e(a)},
as:function(a){throw H.e(new P.X(a))},
an:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.fF(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
fG:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
jP:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
iG:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.en(a,s,t?null:b.receiver)},
N:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.ir(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aJ(r,16)&8191)===10)switch(q){case 438:return t.$1(H.iG(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.d0(p,null))}}if(a instanceof TypeError){o=$.$get$jJ()
n=$.$get$jK()
m=$.$get$jL()
l=$.$get$jM()
k=$.$get$jQ()
j=$.$get$jR()
i=$.$get$jO()
$.$get$jN()
h=$.$get$jT()
g=$.$get$jS()
f=o.I(s)
if(f!=null)return t.$1(H.iG(s,f))
else{f=n.I(s)
if(f!=null){f.method="call"
return t.$1(H.iG(s,f))}else{f=m.I(s)
if(f==null){f=l.I(s)
if(f==null){f=k.I(s)
if(f==null){f=j.I(s)
if(f==null){f=i.I(s)
if(f==null){f=l.I(s)
if(f==null){f=h.I(s)
if(f==null){f=g.I(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.d0(s,f==null?null:f.method))}}return t.$1(new H.fJ(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.d7()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ah(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.d7()
return a},
aB:function(a){var t
if(a==null)return new H.dk(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dk(a,null)},
mM:function(a){if(a==null||typeof a!='object')return J.ag(a)
else return H.aP(a)},
mr:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.j(0,p,a[q])}return b},
mC:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dm(b,new H.i7(a))
case 1:return H.dm(b,new H.i8(a,d))
case 2:return H.dm(b,new H.i9(a,d,e))
case 3:return H.dm(b,new H.ia(a,d,e,f))
case 4:return H.dm(b,new H.ib(a,d,e,f,g))}throw H.e(P.c2("Unsupported number of arguments for wrapped closure"))},
bR:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.mC)
a.$identity=t
return t},
l9:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.u(c).$isc){t.$reflectionInfo=c
r=H.lN(t).r}else r=c
q=d?Object.create(new H.fh().constructor.prototype):Object.create(new H.bf(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.jl(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.mu,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jj:H.iy
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.jl(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
l6:function(a,b,c,d){var t=H.iy
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
jl:function(a,b,c){var t,s,r,q
if(c)return H.l8(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.l6(s,b==null?r!=null:b!==r,t,b)
return q},
l7:function(a,b,c,d){var t,s
t=H.iy
s=H.jj
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
l8:function(a,b){var t,s,r,q
H.l4()
t=$.ji
if(t==null){t=H.jh("receiver")
$.ji=t}s=b.$stubName
r=b.length
q=a[s]
t=H.l7(r,b==null?q!=null:b!==q,s,b)
return t},
iT:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.u(c).$isc){c.fixed$length=Array
t=c}else t=c
return H.l9(a,b,t,!!d,e,f)},
iy:function(a){return a.a},
jj:function(a){return a.c},
l4:function(){var t=$.jk
if(t==null){t=H.jh("self")
$.jk=t}return t},
jh:function(a){var t,s,r,q,p
t=new H.bf("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
n0:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.ao(a,"String"))},
a9:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ao(a,"double"))},
n_:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ao(a,"num"))},
ml:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.ao(a,"bool"))},
mB:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.ao(a,"int"))},
mO:function(a,b){throw H.e(H.ao(a,b.substring(3)))},
mN:function(a,b){var t=J.aa(b)
throw H.e(H.l5(H.f2(a),t.b8(b,3,t.gi(b))))},
iX:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.u(a)[b])return a
H.mO(a,b)},
aD:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.u(a)[b]
else t=!0
if(t)return a
H.mN(a,b)},
mZ:function(a){if(a==null)return a
if(!!J.u(a).$isc)return a
throw H.e(H.ao(a,"List"))},
k7:function(a){var t=J.u(a)
return"$S" in t?t.$S():null},
bc:function(a,b){var t
if(a==null)return!1
t=H.k7(a)
return t==null?!1:H.kk(t,b)},
mX:function(a,b){var t,s
if(a==null)return a
if($.iP)return a
$.iP=!0
try{if(H.bc(a,b))return a
t=H.aE(b,null)
s=H.ao(a,t)
throw H.e(s)}finally{$.iP=!1}},
ao:function(a,b){return new H.fH("type '"+H.f2(a)+"' is not a subtype of type '"+b+"'")},
l5:function(a,b){return new H.dD("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
az:function(a){if(!0===a)return!1
if(!!J.u(a).$isiC)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.ao(a,"bool"))},
b_:function(a){throw H.e(new H.fU(a))},
d:function(a){if(H.az(a))throw H.e(new P.bV(null))},
mT:function(a){throw H.e(new P.dH(a))},
ii:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
ki:function(a){return u.getIsolateTag(a)},
F:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
i1:function(a){if(a==null)return
return a.$ti},
kj:function(a,b){return H.j0(a["$as"+H.f(b)],H.i1(a))},
ae:function(a,b,c){var t,s
t=H.kj(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aC:function(a,b){var t,s
t=H.i1(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aE:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.ic(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aE(t,b)
return H.ma(a,b)}return"unknown-reified-type"},
ma:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aE(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aE(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aE(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.mq(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aE(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
ic:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bE("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aE(o,c)}return p?"":"<"+s.k(0)+">"},
mt:function(a){var t,s
if(a instanceof H.b1){t=H.k7(a)
if(t!=null)return H.aE(t,null)}s=J.u(a).constructor.name
if(a==null)return s
return s+H.ic(a.$ti,0,null)},
j0:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.iY(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.iY(a,null,b)
return b},
iS:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.i1(a)
s=J.u(a)
if(s[b]==null)return!1
return H.k5(H.j0(s[d],t),c)},
mU:function(a,b,c,d){if(a==null)return a
if(H.iS(a,b,c,d))return a
throw H.e(H.ao(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.ic(c,0,null),u.mangledGlobalNames)))},
k5:function(a,b){var t,s,r,q,p
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
if(!H.U(r,b[p]))return!1}return!0},
mV:function(a,b,c){return H.iY(a,b,H.kj(b,c))},
U:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="b6")return!0
if('func' in b)return H.kk(a,b)
if('func' in a)return b.name==="iC"||b.name==="o"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.d(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.d(!0)
q=b[0]}else q=b
if(q!==s){p=H.aE(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.k5(H.j0(o,t),r)},
k4:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.U(o,n)||H.U(n,o)))return!1}return!0},
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
if(!(H.U(p,o)||H.U(o,p)))return!1}return!0},
kk:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.d('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.U(t,s)||H.U(s,t)))return!1}r=a.args
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
if(n===m){if(!H.k4(r,q,!1))return!1
if(!H.k4(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
g=r[h]
H.d(i)
f=q[h]
if(!(H.U(g,f)||H.U(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=q[e]
if(!(H.U(g,f)||H.U(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=o[e]
if(!(H.U(g,f)||H.U(f,g)))return!1}}return H.mh(a.named,b.named)},
iY:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
n1:function(a){var t=$.iV
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
mY:function(a){return H.aP(a)},
mW:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mJ:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.o))
t=$.iV.$1(a)
s=$.i_[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.i6[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.k3.$2(a,t)
if(t!=null){s=$.i_[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.i6[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.iZ(r)
$.i_[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.i6[t]=r
return r}if(p==="-"){o=H.iZ(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.km(a,r)
if(p==="*")throw H.e(new P.dd(t))
if(u.leafTags[t]===true){o=H.iZ(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.km(a,r)},
km:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.ig(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
iZ:function(a){return J.ig(a,!1,null,!!a.$isn)},
mL:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.ig(t,!1,null,!!t.$isn)
else return J.ig(t,c,null,null)},
mz:function(){if(!0===$.iW)return
$.iW=!0
H.mA()},
mA:function(){var t,s,r,q,p,o,n,m
$.i_=Object.create(null)
$.i6=Object.create(null)
H.my()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.kn.$1(p)
if(o!=null){n=H.mL(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
my:function(){var t,s,r,q,p,o,n
t=C.E()
t=H.bb(C.B,H.bb(C.G,H.bb(C.q,H.bb(C.q,H.bb(C.F,H.bb(C.C,H.bb(C.D(C.r),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.iV=new H.i3(p)
$.k3=new H.i4(o)
$.kn=new H.i5(n)},
bb:function(a,b){return a(b)||b},
mS:function(a,b,c){var t=a.indexOf(b,c)
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
fF:function fF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
d0:function d0(a,b){this.a=a
this.b=b},
en:function en(a,b,c){this.a=a
this.b=b
this.c=c},
fJ:function fJ(a){this.a=a},
ir:function ir(a){this.a=a},
dk:function dk(a,b){this.a=a
this.b=b},
i7:function i7(a){this.a=a},
i8:function i8(a,b){this.a=a
this.b=b},
i9:function i9(a,b,c){this.a=a
this.b=b
this.c=c},
ia:function ia(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ib:function ib(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
b1:function b1(){},
fu:function fu(){},
fh:function fh(){},
bf:function bf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fH:function fH(a){this.a=a},
dD:function dD(a){this.a=a},
f8:function f8(a){this.a=a},
fU:function fU(a){this.a=a},
dc:function dc(a,b){this.a=a
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
i3:function i3(a){this.a=a},
i4:function i4(a){this.a=a},
i5:function i5(a){this.a=a},
A:function(a){return a},
hS:function(a){var t,s,r
if(!!J.u(a).$ism)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bv:function bv(){},
aO:function aO(){},
cU:function cU(){},
cV:function cV(){},
cW:function cW(){},
cT:function cT(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
cX:function cX(){},
eK:function eK(){},
bw:function bw(){},
bx:function bx(){},
by:function by(){},
bz:function bz(){},
mq:function(a){var t=H.F(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
ih:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
u:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cO.prototype
return J.cN.prototype}if(typeof a=="string")return J.aL.prototype
if(a==null)return J.cP.prototype
if(typeof a=="boolean")return J.el.prototype
if(a.constructor==Array)return J.aK.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aM.prototype
return a}if(a instanceof P.o)return a
return J.i0(a)},
ig:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
i0:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.iW==null){H.mz()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.dd("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$iF()]
if(p!=null)return p
p=H.mJ(a)
if(p!=null)return p
if(typeof a=="function")return C.H
s=Object.getPrototypeOf(a)
if(s==null)return C.u
if(s===Object.prototype)return C.u
if(typeof q=="function"){Object.defineProperty(q,$.$get$iF(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
aa:function(a){if(typeof a=="string")return J.aL.prototype
if(a==null)return a
if(a.constructor==Array)return J.aK.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aM.prototype
return a}if(a instanceof P.o)return a
return J.i0(a)},
dp:function(a){if(a==null)return a
if(a.constructor==Array)return J.aK.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aM.prototype
return a}if(a instanceof P.o)return a
return J.i0(a)},
kg:function(a){if(typeof a=="number")return J.b4.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.aT.prototype
return a},
ms:function(a){if(typeof a=="number")return J.b4.prototype
if(typeof a=="string")return J.aL.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.aT.prototype
return a},
kh:function(a){if(typeof a=="string")return J.aL.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.aT.prototype
return a},
l:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aM.prototype
return a}if(a instanceof P.o)return a
return J.i0(a)},
D:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.u(a).t(a,b)},
af:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kg(a).ax(a,b)},
ks:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kg(a).U(a,b)},
j1:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mD(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aa(a).h(a,b)},
kt:function(a,b,c,d){return J.l(a).da(a,b,c,d)},
j2:function(a,b){return J.kh(a).aA(a,b)},
bd:function(a,b){return J.l(a).dt(a,b)},
ku:function(a,b,c){return J.l(a).du(a,b,c)},
j3:function(a,b){return J.l(a).bC(a,b)},
is:function(a,b){return J.l(a).J(a,b)},
j4:function(a,b,c){return J.l(a).bF(a,b,c)},
kv:function(a,b){return J.l(a).dL(a,b)},
dr:function(a,b,c){return J.l(a).bG(a,b,c)},
j5:function(a,b,c){return J.l(a).bH(a,b,c)},
ds:function(a,b){return J.l(a).dO(a,b)},
kw:function(a,b){return J.l(a).bI(a,b)},
kx:function(a,b,c){return J.l(a).bJ(a,b,c)},
j6:function(a,b,c,d){return J.l(a).bK(a,b,c,d)},
ky:function(a,b,c,d,e){return J.l(a).bL(a,b,c,d,e)},
kz:function(a,b){return J.ms(a).K(a,b)},
it:function(a,b,c){return J.aa(a).dT(a,b,c)},
iu:function(a){return J.l(a).bN(a)},
kA:function(a){return J.l(a).bO(a)},
kB:function(a){return J.l(a).dY(a)},
kC:function(a,b){return J.l(a).bQ(a,b)},
iv:function(a,b){return J.l(a).bR(a,b)},
kD:function(a,b,c,d){return J.l(a).bS(a,b,c,d)},
kE:function(a,b,c,d,e){return J.l(a).e4(a,b,c,d,e)},
kF:function(a,b,c,d,e){return J.l(a).bT(a,b,c,d,e)},
kG:function(a,b,c,d,e,f){return J.l(a).e5(a,b,c,d,e,f)},
kH:function(a,b){return J.dp(a).p(a,b)},
dt:function(a,b){return J.l(a).bU(a,b)},
kI:function(a,b){return J.l(a).bV(a,b)},
kJ:function(a){return J.l(a).e6(a)},
kK:function(a,b){return J.dp(a).as(a,b)},
kL:function(a){return J.l(a).gdJ(a)},
ag:function(a){return J.u(a).gq(a)},
be:function(a){return J.dp(a).gu(a)},
du:function(a){return J.aa(a).gi(a)},
kM:function(a){return J.l(a).gaT(a)},
kN:function(a){return J.l(a).gew(a)},
iw:function(a,b){return J.l(a).a2(a,b)},
kO:function(a){return J.l(a).aw(a)},
kP:function(a,b){return J.l(a).aZ(a,b)},
kQ:function(a,b,c){return J.l(a).b_(a,b,c)},
j7:function(a,b,c){return J.l(a).b2(a,b,c)},
kR:function(a,b){return J.l(a).bX(a,b)},
kS:function(a,b){return J.dp(a).bZ(a,b)},
kT:function(a){return J.dp(a).eo(a)},
kU:function(a,b){return J.l(a).B(a,b)},
kV:function(a,b,c,d){return J.l(a).b7(a,b,c,d)},
kW:function(a){return J.kh(a).ez(a)},
aF:function(a){return J.u(a).k(a)},
kX:function(a,b,c,d){return J.l(a).eB(a,b,c,d)},
kY:function(a,b,c){return J.l(a).c4(a,b,c)},
kZ:function(a,b,c){return J.l(a).c5(a,b,c)},
ix:function(a,b,c){return J.l(a).c6(a,b,c)},
l_:function(a,b,c){return J.l(a).c7(a,b,c)},
j8:function(a,b,c){return J.l(a).c8(a,b,c)},
j9:function(a,b,c){return J.l(a).c9(a,b,c)},
ja:function(a,b,c){return J.l(a).ca(a,b,c)},
jb:function(a,b,c,d){return J.l(a).cb(a,b,c,d)},
jc:function(a,b,c,d){return J.l(a).cc(a,b,c,d)},
l0:function(a,b){return J.l(a).ce(a,b)},
l1:function(a,b,c){return J.l(a).eC(a,b,c)},
jd:function(a,b,c,d,e,f,g){return J.l(a).cg(a,b,c,d,e,f,g)},
a:function a(){},
el:function el(){},
cP:function cP(){},
br:function br(){},
eY:function eY(){},
aT:function aT(){},
aM:function aM(){},
aK:function aK(a){this.$ti=a},
iD:function iD(a){this.$ti=a},
dy:function dy(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b4:function b4(){},
cO:function cO(){},
cN:function cN(){},
aL:function aL(){}},P={
lZ:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.mi()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bR(new P.fW(t),1)).observe(s,{childList:true})
return new P.fV(t,s,r)}else if(self.setImmediate!=null)return P.mj()
return P.mk()},
m_:function(a){++u.globalState.f.b
self.scheduleImmediate(H.bR(new P.fX(a),0))},
m0:function(a){++u.globalState.f.b
self.setImmediate(H.bR(new P.fY(a),0))},
m1:function(a){P.iK(C.o,a)},
md:function(a,b){if(H.bc(a,{func:1,args:[P.b6,P.b6]})){b.toString
return a}else{b.toString
return a}},
m3:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.aq))
H.d(b.a===0)
b.a=1
try{a.c3(new P.hd(b),new P.he(b))}catch(r){t=H.N(r)
s=H.aB(r)
P.mP(new P.hf(b,t,s))}},
jV:function(a,b){var t,s,r,q
H.d(b.a<=1)
for(;t=a.a,s=t===2,s;){H.d(s)
a=a.c}s=b.a
if(t>=4){H.d(s<4)
r=b.c
b.c=null
q=b.a9(r)
H.d(b.a<4)
H.d(a.a>=4)
b.a=a.a
b.c=a.c
P.bH(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bv(q)}},
bH:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.hT(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bH(t.a,b)}s=t.a
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
P.hT(null,null,p,o,s)
return}s=$.z
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.z
H.d(l==null?s!=null:l!==s)
j=$.z
$.z=l
i=j}else i=null
s=b.c
if(s===8)new P.hj(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.hi(r,b,m).$0()}else if((s&2)!==0)new P.hh(t,r,b).$0()
if(i!=null){H.d(!0)
$.z=i}s=r.b
if(!!J.u(s).$isea){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.a9(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.jV(s,o)
return}}g=b.b
H.d(g.a<4)
h=g.c
g.c=null
b=g.a9(h)
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
for(;t=$.ba,t!=null;){$.bP=null
s=t.b
$.ba=s
if(s==null)$.bO=null
t.a.$0()}},
mg:function(){$.iQ=!0
try{P.mc()}finally{$.bP=null
$.iQ=!1
if($.ba!=null)$.$get$iM().$1(P.k6())}},
k1:function(a){var t=new P.df(a,null)
if($.ba==null){$.bO=t
$.ba=t
if(!$.iQ)$.$get$iM().$1(P.k6())}else{$.bO.b=t
$.bO=t}},
mf:function(a){var t,s,r
t=$.ba
if(t==null){P.k1(a)
$.bP=$.bO
return}s=new P.df(a,null)
r=$.bP
if(r==null){s.b=t
$.bP=s
$.ba=s}else{s.b=r.b
r.b=s
$.bP=s
if(s.b==null)$.bO=s}},
mP:function(a){var t=$.z
if(C.e===t){P.hV(null,null,C.e,a)
return}t.toString
P.hV(null,null,t,t.aM(a))},
lT:function(a,b){var t=$.z
if(t===C.e){t.toString
return P.iK(a,b)}return P.iK(a,t.aM(b))},
iK:function(a,b){var t=C.b.C(a.a,1000)
return H.lS(t<0?0:t,b)},
iL:function(a){var t,s
H.d(a!=null)
t=$.z
H.d(a==null?t!=null:a!==t)
s=$.z
$.z=a
return s},
hT:function(a,b,c,d,e){var t={}
t.a=d
P.mf(new P.hU(t,e))},
k_:function(a,b,c,d){var t,s
if($.z===c)return d.$0()
t=P.iL(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.z=s}},
k0:function(a,b,c,d,e){var t,s
if($.z===c)return d.$1(e)
t=P.iL(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.z=s}},
me:function(a,b,c,d,e,f){var t,s
if($.z===c)return d.$2(e,f)
t=P.iL(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.z=s}},
hV:function(a,b,c,d){var t=C.e!==c
if(t)d=!(!t||!1)?c.aM(d):c.dM(d)
P.k1(d)},
fW:function fW(a){this.a=a},
fV:function fV(a,b,c){this.a=a
this.b=b
this.c=c},
fX:function fX(a){this.a=a},
fY:function fY(a){this.a=a},
h1:function h1(){},
hK:function hK(a,b){this.a=a
this.$ti=b},
dh:function dh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hc:function hc(a,b){this.a=a
this.b=b},
hg:function hg(a,b){this.a=a
this.b=b},
hd:function hd(a){this.a=a},
he:function he(a){this.a=a},
hf:function hf(a,b,c){this.a=a
this.b=b
this.c=c},
hj:function hj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hk:function hk(a){this.a=a},
hi:function hi(a,b,c){this.a=a
this.b=b
this.c=c},
hh:function hh(a,b,c){this.a=a
this.b=b
this.c=c},
df:function df(a,b){this.a=a
this.b=b},
fl:function fl(){},
fn:function fn(a){this.a=a},
fo:function fo(a,b){this.a=a
this.b=b},
fm:function fm(){},
b0:function b0(a,b){this.a=a
this.b=b},
hR:function hR(){},
hU:function hU(a,b){this.a=a
this.b=b},
hw:function hw(){},
hy:function hy(a,b){this.a=a
this.b=b},
hx:function hx(a,b){this.a=a
this.b=b},
hz:function hz(a,b){this.a=a
this.b=b},
jA:function(a,b){return new H.ab(0,null,null,null,null,null,0,[a,b])},
a0:function(){return new H.ab(0,null,null,null,null,null,0,[null,null])},
au:function(a){return H.mr(a,new H.ab(0,null,null,null,null,null,0,[null,null]))},
bL:function(a,b){return new P.di(0,null,null,null,null,null,0,[a,b])},
m7:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
ly:function(a,b,c){var t,s
if(P.iR(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bQ()
C.a.l(s,a)
try{P.mb(a,t)}finally{H.d(C.a.gaQ(s)===a)
s.pop()}s=P.jI(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
ej:function(a,b,c){var t,s,r
if(P.iR(a))return b+"..."+c
t=new P.bE(b)
s=$.$get$bQ()
C.a.l(s,a)
try{r=t
r.a=P.jI(r.gX(),a,", ")}finally{H.d(C.a.gaQ(s)===a)
s.pop()}s=t
s.a=s.gX()+c
s=t.gX()
return s.charCodeAt(0)==0?s:s},
iR:function(a){var t,s
for(t=0;s=$.$get$bQ(),t<s.length;++t)if(a===s[t])return!0
return!1},
mb:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gu(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.m())return
q=H.f(t.gn())
C.a.l(b,q)
s+=q.length+2;++r}if(!t.m()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gn();++r
if(!t.m()){if(r<=4){C.a.l(b,H.f(n))
return}p=H.f(n)
o=b.pop()
s+=p.length+2}else{m=t.gn();++r
H.d(r<100)
for(;t.m();n=m,m=l){l=t.gn();++r
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
ac:function(a,b,c,d){return new P.hp(0,null,null,null,null,null,0,[d])},
iH:function(a,b){var t,s
t=P.ac(null,null,null,b)
for(s=J.be(a);s.m();)t.l(0,s.gn())
return t},
lD:function(a){var t,s,r
t={}
if(P.iR(a))return"{...}"
s=new P.bE("")
try{C.a.l($.$get$bQ(),a)
r=s
r.a=r.gX()+"{"
t.a=!0
a.as(0,new P.ev(t,s))
t=s
t.a=t.gX()+"}"}finally{t=$.$get$bQ()
H.d(C.a.gaQ(t)===a)
t.pop()}t=s.gX()
return t.charCodeAt(0)==0?t:t},
iI:function(a,b){var t=new P.es(null,0,0,0,[b])
t.cV(a,b)
return t},
di:function di(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hp:function hp(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hq:function hq(a,b,c){this.a=a
this.b=b
this.c=c},
bK:function bK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hn:function hn(){},
cQ:function cQ(){},
v:function v(){},
ev:function ev(a,b){this.a=a
this.b=b},
es:function es(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hr:function hr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fb:function fb(){},
fa:function fa(){},
bB:function bB(){},
jI:function(a,b,c){var t=J.be(b)
if(!t.m())return a
if(c.length===0){do a+=H.f(t.gn())
while(t.m())}else{a+=H.f(t.gn())
for(;t.m();)a=a+c+H.f(t.gn())}return a},
la:function(a,b){return J.kz(a,b)},
lc:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.f(t)
if(t>=10)return s+"00"+H.f(t)
return s+"000"+H.f(t)},
ld:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bY:function(a){if(a>=10)return""+a
return"0"+a},
iA:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aF(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lm(a)},
lm:function(a){var t=J.u(a)
if(!!t.$isb1)return t.k(a)
return H.f1(a)},
je:function(a){return new P.ah(!1,null,null,a)},
jf:function(a,b,c){return new P.ah(!0,a,b,c)},
f3:function(a,b,c){return new P.d3(null,null,!0,a,b,"Value not in range")},
aQ:function(a,b,c,d,e){return new P.d3(b,c,!0,a,d,"Invalid value")},
jG:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.aQ(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.aQ(b,a,c,"end",f))
return b},
y:function(a,b,c,d,e){var t=e!=null?e:J.du(b)
return new P.ef(b,t,!0,a,c,"Index out of range")},
c2:function(a){return new P.hb(a)},
jB:function(a,b,c){var t,s
t=H.F([],[c])
for(s=J.be(a);s.m();)C.a.l(t,s.gn())
return t},
ar:function(a){H.ih(H.f(a))},
aA:function aA(){},
H:function H(){},
bg:function bg(a,b){this.a=a
this.b=b},
K:function K(){},
aJ:function aJ(a){this.a=a},
dM:function dM(){},
dN:function dN(){},
b3:function b3(){},
bV:function bV(a){this.a=a},
d1:function d1(){},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d3:function d3(a,b,c,d,e,f){var _=this
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
t:function t(a){this.a=a},
dd:function dd(a){this.a=a},
aw:function aw(a){this.a=a},
X:function X(a){this.a=a},
d7:function d7(){},
dH:function dH(a){this.a=a},
hb:function hb(a){this.a=a},
dP:function dP(a,b,c){this.a=a
this.b=b
this.$ti=c},
p:function p(){},
R:function R(){},
cM:function cM(){},
c:function c(){},
av:function av(){},
b6:function b6(){},
V:function V(){},
o:function o(){},
bD:function bD(){},
r:function r(){},
bE:function bE(a){this.a=a},
hY:function(a){var t,s,r,q,p
if(a==null)return
t=P.a0()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.as)(s),++q){p=s[q]
t.j(0,p,a[p])}return t},
mo:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.kK(a,new P.hX(t))
return t},
jt:function(){var t=$.js
if(t==null){t=J.it(window.navigator.userAgent,"Opera",0)
$.js=t}return t},
le:function(){var t,s
t=$.jp
if(t!=null)return t
s=$.jq
if(s==null){s=J.it(window.navigator.userAgent,"Firefox",0)
$.jq=s}if(s)t="-moz-"
else{s=$.jr
if(s==null){s=!P.jt()&&J.it(window.navigator.userAgent,"Trident/",0)
$.jr=s}if(s)t="-ms-"
else t=P.jt()?"-o-":"-webkit-"}$.jp=t
return t},
hX:function hX(a){this.a=a},
hv:function hv(){},
J:function J(){},
dv:function dv(){},
aG:function aG(){},
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
e8:function e8(){},
I:function I(){},
ee:function ee(){},
aj:function aj(){},
eo:function eo(){},
ew:function ew(){},
ex:function ex(){},
al:function al(){},
eO:function eO(){},
eV:function eV(){},
f_:function f_(){},
bC:function bC(){},
fp:function fp(){},
B:function B(){},
fq:function fq(){},
fr:function fr(){},
aR:function aR(){},
fv:function fv(){},
am:function am(){},
fE:function fE(){},
fL:function fL(){},
fN:function fN(){},
fO:function fO(){},
bI:function bI(){},
hA:function hA(){},
hB:function hB(){},
hC:function hC(){},
cd:function cd(){},
cc:function cc(){},
c9:function c9(){},
cf:function cf(){},
cv:function cv(){},
cy:function cy(){},
cA:function cA(){},
cG:function cG(){},
dz:function dz(){},
f6:function f6(){},
f7:function f7(){},
hO:function hO(){},
fg:function fg(){},
cm:function cm(){},
cJ:function cJ(){}},W={
dn:function(){return document},
lk:function(a,b,c){var t,s
t=document.body
s=(t&&C.i).H(t,a,b,c)
s.toString
t=new H.de(new W.P(s),new W.hW(),[W.q])
return t.gV(t)},
ll:function(a){return"wheel"},
bi:function(a){var t,s,r
t="element tag unavailable"
try{s=J.kN(a)
if(typeof s==="string")t=a.tagName}catch(r){H.N(r)}return t},
m2:function(a,b){return document.createElement(a)},
aZ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jY:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ap:function(a,b,c,d,e){var t=W.k2(new W.ha(c))
t=new W.h9(0,a,b,t,!1,[e])
t.d5(a,b,c,!1,e)
return t},
jW:function(a){var t,s
t=document.createElement("a")
s=new W.hD(t,window.location)
s=new W.bJ(s)
s.d6(a)
return s},
m5:function(a,b,c,d){return!0},
m6:function(a,b,c,d){var t,s,r,q,p
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
jZ:function(){var t=P.r
t=new W.hL(P.iH(C.k,t),P.ac(null,null,null,t),P.ac(null,null,null,t),P.ac(null,null,null,t),null)
t.d8(null,new H.bs(C.k,new W.hM(),[H.aC(C.k,0),null]),["TEMPLATE"],null)
return t},
k2:function(a){var t=$.z
if(t===C.e)return a
return t.dN(a)},
k:function k(){},
dw:function dw(){},
dx:function dx(){},
W:function W(){},
dA:function dA(){},
bW:function bW(){},
aH:function aH(){},
bX:function bX(){},
dC:function dC(){},
aI:function aI(){},
dF:function dF(){},
w:function w(){},
b2:function b2(){},
dG:function dG(){},
dI:function dI(){},
bZ:function bZ(){},
bh:function bh(){},
c_:function c_(){},
dJ:function dJ(){},
c0:function c0(){},
c1:function c1(){},
dK:function dK(){},
dL:function dL(){},
Y:function Y(){},
hW:function hW(){},
j:function j(){},
h:function h(){},
Z:function Z(){},
e6:function e6(){},
e7:function e7(){},
e9:function e9(){},
a_:function a_(){},
c5:function c5(){},
ec:function ec(){},
bp:function bp(){},
c6:function c6(){},
ed:function ed(){},
bq:function bq(){},
eg:function eg(){},
aN:function aN(){},
et:function et(){},
ez:function ez(){},
eB:function eB(){},
bu:function bu(){},
a1:function a1(){},
eC:function eC(){},
L:function L(){},
eL:function eL(){},
P:function P(a){this.a=a},
q:function q(){},
cY:function cY(){},
bA:function bA(){},
eU:function eU(){},
eX:function eX(){},
a2:function a2(){},
eZ:function eZ(){},
f0:function f0(){},
d2:function d2(){},
d4:function d4(){},
f9:function f9(){},
fc:function fc(){},
a3:function a3(){},
fd:function fd(){},
a4:function a4(){},
ff:function ff(){},
a5:function a5(){},
fk:function fk(){},
S:function S(){},
d8:function d8(){},
fs:function fs(){},
ft:function ft(){},
bF:function bF(){},
a6:function a6(){},
T:function T(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(){},
a7:function a7(){},
aS:function aS(){},
fC:function fC(){},
fD:function fD(){},
ax:function ax(){},
db:function db(){},
ay:function ay(){},
fK:function fK(){},
fM:function fM(){},
fP:function fP(){},
fQ:function fQ(){},
aU:function aU(){},
bG:function bG(){},
fS:function fS(a){this.a=a},
fT:function fT(){},
aV:function aV(){},
h0:function h0(){},
dg:function dg(){},
h2:function h2(){},
h3:function h3(){},
h4:function h4(){},
hl:function hl(){},
hm:function hm(){},
dj:function dj(){},
hE:function hE(){},
hH:function hH(){},
hI:function hI(){},
hP:function hP(){},
hQ:function hQ(){},
fZ:function fZ(){},
h5:function h5(a){this.a=a},
h8:function h8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iN:function iN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
h9:function h9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
ha:function ha(a){this.a=a},
bJ:function bJ(a){this.a=a},
x:function x(){},
d_:function d_(a){this.a=a},
eN:function eN(a){this.a=a},
eM:function eM(a,b,c){this.a=a
this.b=b
this.c=c},
bM:function bM(){},
hF:function hF(){},
hG:function hG(){},
hL:function hL(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
hM:function hM(){},
hJ:function hJ(){},
c4:function c4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cZ:function cZ(){},
hD:function hD(a,b){this.a=a
this.b=b},
dl:function dl(a){this.a=a},
hN:function hN(a){this.a=a},
bj:function bj(){},
bk:function bk(){},
bl:function bl(){},
bm:function bm(){},
bn:function bn(){},
bo:function bo(){},
c7:function c7(){},
cr:function cr(){},
ca:function ca(){},
ck:function ck(){},
cl:function cl(){},
cn:function cn(){},
co:function co(){},
cp:function cp(){},
cq:function cq(){},
c8:function c8(){},
cb:function cb(){},
ce:function ce(){},
cg:function cg(){},
ch:function ch(){},
ci:function ci(){},
cj:function cj(){},
cs:function cs(){},
ct:function ct(){},
cu:function cu(){},
cE:function cE(){},
cF:function cF(){},
cC:function cC(){},
cD:function cD(){},
cI:function cI(){},
cK:function cK(){},
cL:function cL(){},
cw:function cw(){},
cx:function cx(){},
cz:function cz(){},
cB:function cB(){},
cH:function cH(){}},B={
mQ:function(a){var t,s
t=document
s=W.aN
W.ap(t,"keydown",new B.ij(),!1,s)
W.ap(t,"keyup",new B.ik(),!1,s)
if(!$.mR)W.ap(t,"mousemove",new B.il(),!1,W.L)
s=W.L
W.ap(t,"mousedown",new B.im(),!1,s)
W.ap(t,"mouseup",new B.io(),!1,s)},
lE:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.A(3))
s=$.$get$hZ()
r=$.$get$bS()
q=new T.ak(new Float32Array(H.A(16)))
q.ak()
q=new B.eP(a,b,c,0,new T.E(t),-0.02,s,r,q,new T.E(new Float32Array(H.A(3))),new T.E(new Float32Array(H.A(3))),new T.E(new Float32Array(H.A(3))),new T.E(new Float32Array(H.A(3))),"camera:orbit",!1,!0)
q.cW(a,b,c,d)
return q},
ij:function ij(){},
ik:function ik(){},
il:function il(){},
im:function im(){},
io:function io(){},
eP:function eP(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
eQ:function eQ(a){this.a=a},
eR:function eR(a){this.a=a},
eS:function eS(){},
eT:function eT(a){this.a=a}},G={
lY:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.ag(t,"\n")},
jU:function(a,b,c){var t,s,r,q
t=J.l(a)
s=t.bP(a,b)
t.b5(a,s,c)
t.bM(a,s)
r=t.b1(a,s,35713)
if(r!=null&&!r){q=t.b0(a,s)
P.ar("E:Compilation failed:")
P.ar("E:"+G.lY(c))
P.ar("E:Failure:")
P.ar(C.h.a1("E:",q))
throw H.e(q)}return s},
jx:function(a,b){var t,s,r
t=a.length
b=new Float32Array(t*3)
for(t=a.length,s=0;s<t;++s){r=s*3
b[r]=a[s].a[0]
b[r+1]=a[s].a[1]
b[r+2]=a[s].a[2]}return b},
lo:function(a,b){var t,s,r
t=C.d.gi(a).v(0,2)
b=new Float32Array(t)
for(s=0;C.b.U(s,C.d.gi(a));++s){t=s*2
r=C.d.h(a,s)
b[t]=r.gaX(r)
r=C.d.h(a,s)
b[t+1]=r.gaY(r)}return b},
lp:function(a,b){var t,s,r
t=C.d.gi(a).v(0,4)
b=new Float32Array(t)
for(s=0;C.b.U(s,C.d.gi(a));++s){t=s*4
r=C.d.h(a,s)
b[t]=r.gaX(r)
r=C.d.h(a,s)
b[t+1]=r.gaY(r)
r=C.d.h(a,s)
b[t+2]=r.gci(r)
r=C.d.h(a,s)
b[t+3]=r.geD(r)}return b},
ln:function(a,b){var t,s
t=C.d.gi(a).v(0,4)
b=new Uint32Array(t)
for(s=0;C.b.U(s,C.d.gi(a));++s){t=s*4
b[t]=C.d.h(a,s).h(0,0)
b[t+1]=C.d.h(a,s).h(0,1)
b[t+2]=C.d.h(a,s).h(0,2)
b[t+3]=C.d.h(a,s).h(0,3)}return b},
m4:function(a,b){var t,s,r,q,p,o,n
for(t=a.e,s=t.gA(t),s=s.gu(s),r=b.x;s.m();){q=s.gn()
if(!r.D(0,q)){p="Dropping unnecessary attribute: "+H.f(q)
if($.kd>0)H.ih("I: "+p)
continue}o=t.h(0,q)
switch($.$get$a8().h(0,q).a){case"vec2":b.a5(q,G.lo(o,null),2)
break
case"vec3":b.a5(q,G.jx(o,null),3)
break
case"vec4":b.a5(q,G.lp(o,null),4)
break
case"float":b.a5(q,new Float32Array(H.hS(o)),1)
break
case"uvec4":b.a5(q,G.ln(o,null),4)
break
default:if(H.az(!1)){p="unknown type for "+H.f(q)+" ["
n=C.d.h(o,0)
H.b_(p+H.f(n.gev(n))+"] ["+H.f(C.d.gev(o))+"] "+H.f(o))}}}},
lO:function(a,b,c,d){var t=new G.f5(b,c,d,null,null,P.a0(),P.a0(),P.ac(null,null,null,P.r),null,a,!1,!0)
t.cX(a,b,c,d)
return t},
eD:function eD(){},
fI:function fI(){},
dB:function dB(){},
dE:function dE(a,b){this.a=a
this.b=b},
e5:function e5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eb:function eb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
da:function da(a,b,c){this.a=a
this.b=b
this.c=c},
d9:function d9(a,b,c){this.a=a
this.b=b
this.c=c},
ey:function ey(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eA:function eA(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
eW:function eW(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
i:function i(a,b,c){this.a=a
this.b=b
this.c=c},
d5:function d5(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fe:function fe(){}},R={fi:function fi(){},fj:function fj(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
dq:function(a){var t,s
t=C.L.e8(a,0,new A.i2())
s=536870911&t+(C.b.cj(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
i2:function i2(){}},T={
lX:function(a,b,c){var t=new T.E(new Float32Array(H.A(3)))
t.al(a,b,c)
return t},
bt:function bt(a){this.a=a},
ak:function ak(a){this.a=a},
G:function G(a){this.a=a},
E:function E(a){this.a=a},
b8:function b8(a){this.a=a}},N={
mK:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t={}
s=document
r=new R.fj(0,0,null,null,null,null)
r.cZ(C.f.cn(s,"stats"),"blue","gray")
q=C.f.a_(s,"#webgl-canvas")
p=q.clientWidth
o=q.clientHeight
q.width=p
q.height=o
n=new G.dE(null,q)
s=(q&&C.x).cm(q,"webgl2",P.au(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
n.a=s
if(s==null)H.C(P.c2('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
m="ChronosGL Config: "+J.aF(J.kO(s))
if($.kd>0)P.ar("I: "+m)
J.ky(s,0,0,0,1)
J.dt(s,2929)
l=B.lE(25,10,0,q)
s=new T.ak(new Float32Array(H.A(16)))
s.ak()
m=new T.ak(new Float32Array(H.A(16)))
m.ak()
k=new G.eW(l,50,1,0.1,1000,s,m,new T.ak(new Float32Array(H.A(16))),P.a0(),"perspective",!1,!0)
k.bf()
k.cP(p,o)
j=G.lO("basic",n,$.$get$kp(),$.$get$ko())
i=new G.ey(P.a0(),"wire",!1,!0)
i.W("cDepthTest",!0)
i.W("cDepthWrite",!0)
i.W("cBlendEquation",$.$get$jg())
i.W("cStencilFunc",$.$get$jH())
i.W("uColor",$.$get$jm())
m=new T.ak(new Float32Array(H.A(16)))
m.ak()
i.W("uModelMatrix",m)
t.a=0
new N.ie(t,r,l,k,j,i).$1(0)},
ie:function ie(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f}},X={
lC:function(a,b,c,d){var t,s,r
t=b.aa(d)
if(t===0)return
s=new T.G(new Float32Array(H.A(2)))
s.F(c)
s.am(a)
s=s.aa(d)
r=new T.G(new Float32Array(H.A(2)))
r.F(b)
r.co(0,s/t)
s=new T.G(new Float32Array(H.A(2)))
s.F(a)
s.l(0,r)
return s},
lq:function(a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=H.F([],[T.G])
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
j=new T.G(k)
i=m.a
k[1]=i[1]
k[0]=i[0]
j.am(n)
l.toString
h=new Float32Array(2)
g=new T.G(h)
i=l.a
h[1]=i[1]
h[0]=i[0]
g.am(m)
l=k[1]
k=k[0]
f=new Float32Array(2)
e=new T.G(f)
f[0]=l
f[1]=-k
e.Z(0)
k=h[1]
l=h[0]
d=new Float32Array(2)
c=new T.G(d)
d[0]=k
d[1]=-l
c.Z(0)
if(H.az(h[0]*f[0]+h[1]*f[1]!==0))H.b_("possibly colinear points in contour? use FilterDupsAndColinear")
n.toString
l=new Float32Array(2)
b=new T.G(l)
a=n.a
l[1]=a[1]
l[0]=a[0]
b.l(0,e)
n=new Float32Array(2)
a0=new T.G(n)
n[1]=i[1]
n[0]=i[0]
a0.l(0,c)
a1=X.lC(b,j,a0,g)
a1.toString
n=new Float32Array(2)
a2=new T.G(n)
i=a1.a
n[1]=i[1]
n[0]=i[0]
a2.am(m)
C.a.l(t,a2)}return t},
lb:function(a,b,c){var t,s,r,q,p,o
t=H.F(new Array(a),[T.G])
for(s=0;s<a;++s){r=6.283185307179586*s/a
q=Math.cos(r)
p=Math.sin(r)
o=new Float32Array(2)
o[0]=b*q
o[1]=b*p
t[s]=new T.G(o)}return t},
lf:function(a){return 1-Math.cos(a*3.141592653589793/2)},
lj:function(a){return Math.sin(a*3.141592653589793/2)},
lh:function(a){return a},
li:function(a){return a*a},
lg:function(a){return a*a*a},
l3:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
t=H.F(new Array(c),[T.G])
for(s=c-1,r=-a,q=0;q<c;++q){p=q/s
o=C.c.v(r,e.$1(p))
n=C.c.v(b,d.$1(p))
m=new Float32Array(2)
m[0]=o
m[1]=n
t[q]=new T.G(m)}return t},
l2:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=a.length
H.d(t===b.length)
s=[]
r=new Float32Array(H.A(3))
q=new T.E(r)
for(p=c.length,o=[T.E],n=0;n<p;++n){m=c[n]
l=H.F(new Array(t),o)
for(k=l.length,j=0;j<k;++j){i=a[j].a[0]
h=b[j].a[0]
g=m.a
r[0]=i+h*g[0]
r[1]=a[j].a[1]+b[j].a[1]*g[0]
r[2]=g[1]
l[j]=d.v(0,q)}C.a.l(s,l)}return s}}
var v=[C,H,J,P,W,B,G,R,A,T,N,X]
setFunctionNamesIfNecessary(v)
var $={}
H.iE.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gq:function(a){return H.aP(a)},
k:function(a){return H.f1(a)}}
J.el.prototype={
k:function(a){return String(a)},
gq:function(a){return a?519018:218159},
$isaA:1}
J.cP.prototype={
t:function(a,b){return null==b},
k:function(a){return"null"},
gq:function(a){return 0}}
J.br.prototype={
gq:function(a){return 0},
k:function(a){return String(a)},
$islB:1}
J.eY.prototype={}
J.aT.prototype={}
J.aM.prototype={
k:function(a){var t=a[$.$get$jo()]
return t==null?this.cI(a):J.aF(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isiC:1}
J.aK.prototype={
aO:function(a,b){if(!!a.immutable$list)throw H.e(new P.t(b))},
aN:function(a,b){if(!!a.fixed$length)throw H.e(new P.t(b))},
l:function(a,b){this.aN(a,"add")
a.push(b)},
G:function(a,b){var t,s,r,q
t=a.length
this.aN(a,"addAll")
for(s=0;s<1;++s,t=q){r=b[s]
q=t+1
H.d(t===a.length||H.C(new P.X(a)))
a.push(r)}},
bZ:function(a,b){return new H.bs(a,b,[H.aC(a,0),null])},
ag:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
p:function(a,b){return a[b]},
ge7:function(a){if(a.length>0)return a[0]
throw H.e(H.ek())},
gaQ:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.ek())},
b4:function(a,b,c,d,e){var t,s
this.aO(a,"setRange")
P.jG(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.C(P.aQ(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.lz())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
bE:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.X(a))}return!1},
cC:function(a,b){this.aO(a,"sort")
H.d6(a,0,a.length-1,P.mp())},
b6:function(a){return this.cC(a,null)},
w:function(a,b){var t
for(t=0;t<a.length;++t)if(J.D(a[t],b))return!0
return!1},
k:function(a){return P.ej(a,"[","]")},
gu:function(a){return new J.dy(a,a.length,0,null,[H.aC(a,0)])},
gq:function(a){return H.aP(a)},
gi:function(a){return a.length},
si:function(a,b){this.aN(a,"set length")
if(b<0)throw H.e(P.aQ(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.M(a,b))
if(b>=a.length||b<0)throw H.e(H.M(a,b))
return a[b]},
j:function(a,b,c){this.aO(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.M(a,b))
if(b>=a.length||b<0)throw H.e(H.M(a,b))
a[b]=c},
$ism:1,
$asm:function(){},
$isb:1,
$asb:null,
$isc:1,
$asc:null}
J.iD.prototype={}
J.dy.prototype={
gn:function(){return this.d},
m:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.as(t))
r=this.c
if(r>=s){this.sbg(null)
return!1}this.sbg(t[r]);++this.c
return!0},
sbg:function(a){this.d=a}}
J.b4.prototype={
K:function(a,b){var t
if(typeof b!=="number")throw H.e(H.Q(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gat(b)
if(this.gat(a)===t)return 0
if(this.gat(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gat:function(a){return a===0?1/a<0:a<0},
dQ:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.t(""+a+".ceil()"))},
a0:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.t(""+a+".round()"))},
dR:function(a,b,c){if(this.K(b,c)>0)throw H.e(H.Q(b))
if(this.K(a,b)<0)return b
if(this.K(a,c)>0)return c
return a},
eA:function(a,b){var t
if(b>20)throw H.e(P.aQ(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gat(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gq:function(a){return a&0x1FFFFFFF},
a1:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return a+b},
a4:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return a-b},
ck:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return a/b},
v:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return a*b},
az:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bA(a,b)},
C:function(a,b){return(a|0)===a?a/b|0:this.bA(a,b)},
bA:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.t("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
aJ:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cj:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return(a&b)>>>0},
cK:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return(a^b)>>>0},
U:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return a<b},
ax:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return a>b},
cl:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return a>=b},
$isV:1}
J.cO.prototype={$isK:1,$isp:1,$isV:1}
J.cN.prototype={$isK:1,$isV:1}
J.aL.prototype={
aA:function(a,b){if(b>=a.length)throw H.e(H.M(a,b))
return a.charCodeAt(b)},
a1:function(a,b){if(typeof b!=="string")throw H.e(P.jf(b,null,null))
return a+b},
cE:function(a,b,c){var t
if(c>a.length)throw H.e(P.aQ(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
cD:function(a,b){return this.cE(a,b,0)},
b8:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.f3(b,null,null))
if(b>c)throw H.e(P.f3(b,null,null))
if(c>a.length)throw H.e(P.f3(c,null,null))
return a.substring(b,c)},
cF:function(a,b){return this.b8(a,b,null)},
ez:function(a){return a.toLowerCase()},
dT:function(a,b,c){if(c>a.length)throw H.e(P.aQ(c,0,a.length,null,null))
return H.mS(a,b,c)},
K:function(a,b){var t
if(typeof b!=="string")throw H.e(H.Q(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.e(H.M(a,b))
return a[b]},
$ism:1,
$asm:function(){},
$isr:1}
H.b.prototype={$asb:null}
H.b5.prototype={
gu:function(a){return new H.cR(this,this.gi(this),0,null,[H.ae(this,"b5",0)])},
av:function(a,b){return this.cH(0,b)},
ey:function(a,b){var t,s
t=H.F([],[H.ae(this,"b5",0)])
C.a.si(t,this.gi(this))
for(s=0;s<this.gi(this);++s)t[s]=this.p(0,s)
return t},
ex:function(a){return this.ey(a,!0)}}
H.cR.prototype={
gn:function(){return this.d},
m:function(){var t,s,r,q
t=this.a
s=J.aa(t)
r=s.gi(t)
if(this.b!==r)throw H.e(new P.X(t))
q=this.c
if(q>=r){this.sa7(null)
return!1}this.sa7(s.p(t,q));++this.c
return!0},
sa7:function(a){this.d=a}}
H.cS.prototype={
gu:function(a){return new H.eu(null,J.be(this.a),this.b,this.$ti)},
gi:function(a){return J.du(this.a)},
$asR:function(a,b){return[b]}}
H.dO.prototype={$isb:1,
$asb:function(a,b){return[b]}}
H.eu.prototype={
m:function(){var t=this.b
if(t.m()){this.sa7(this.c.$1(t.gn()))
return!0}this.sa7(null)
return!1},
gn:function(){return this.a},
sa7:function(a){this.a=a},
$ascM:function(a,b){return[b]}}
H.bs.prototype={
gi:function(a){return J.du(this.a)},
p:function(a,b){return this.b.$1(J.kH(this.a,b))},
$asb:function(a,b){return[b]},
$asb5:function(a,b){return[b]},
$asR:function(a,b){return[b]}}
H.de.prototype={
gu:function(a){return new H.fR(J.be(this.a),this.b,this.$ti)}}
H.fR.prototype={
m:function(){var t,s
for(t=this.a,s=this.b;t.m();)if(s.$1(t.gn()))return!0
return!1},
gn:function(){return this.a.gn()}}
H.c3.prototype={}
H.ip.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.iq.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.ht.prototype={
seh:function(a){this.z=a},
sek:function(a){this.ch=a}}
H.aX.prototype={
bD:function(a,b){if(!this.f.t(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aL()},
eq:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.ah(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bt();++r.d}this.y=!1}this.aL()},
dF:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.t(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
ep:function(a){var t,s,r
if(this.ch==null)return
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.t(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.C(new P.t("removeRange"))
P.jG(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cz:function(a,b){if(!this.r.t(0,a))return
this.db=b},
eb:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.B(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.iI(null,null)
this.cx=t}t.M(0,new H.ho(a,c))},
ea:function(a,b){var t
if(!this.r.t(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.au()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.iI(null,null)
this.cx=t}t.M(0,this.gei())},
ec:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.ar(a)
if(b!=null)P.ar(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aF(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bK(t,t.r,null,null,[null]),r.c=t.e;r.m();)r.d.B(0,s)},
ac:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.N(o)
p=H.aB(o)
this.ec(q,p)
if(this.db){this.au()
if(this===u.globalState.e)throw o}}finally{this.cy=H.ml(r)
u.globalState.d=H.iX(t,"$isaX")
if(t!=null)$=t.geg()
if(this.cx!=null)for(;n=this.cx,!n.gaf(n);)this.cx.c_().$0()}return s},
bY:function(a){return this.b.h(0,a)},
bk:function(a,b){var t=this.b
if(t.D(0,a))throw H.e(P.c2("Registry: ports must be registered only once."))
t.j(0,a,b)},
aL:function(){var t=this.b
if(t.gi(t)-this.c.a>0||this.y||!this.x)u.globalState.z.j(0,this.a,this)
else this.au()},
au:function(){var t,s,r
t=this.cx
if(t!=null)t.O(0)
for(t=this.b,s=t.gcf(t),s=s.gu(s);s.m();)s.gn().dd()
t.O(0)
this.c.O(0)
u.globalState.z.ah(0,this.a)
this.dx.O(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].B(0,t[r+1])
this.ch=null}},
geg:function(){return this.d},
gdU:function(){return this.e}}
H.ho.prototype={
$0:function(){this.a.B(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.h6.prototype={
e_:function(){var t=this.a
if(t.b===t.c)return
return t.c_()},
c1:function(){var t,s,r
t=this.e_()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.D(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gaf(s)}else s=!1
else s=!1
else s=!1
if(s)H.C(P.c2("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gaf(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.au(["command","close"])
r=new H.ad(!0,new P.di(0,null,null,null,null,null,0,[null,P.p])).E(r)
s.toString
self.postMessage(r)}return!1}t.en()
return!0},
by:function(){if(self.window!=null)new H.h7(this).$0()
else for(;this.c1(););},
ai:function(){var t,s,r,q,p
if(!u.globalState.x)this.by()
else try{this.by()}catch(r){t=H.N(r)
s=H.aB(r)
q=u.globalState.Q
p=P.au(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.ad(!0,P.bL(null,P.p)).E(p)
q.toString
self.postMessage(p)}}}
H.h7.prototype={
$0:function(){if(!this.a.c1())return
P.lT(C.o,this)},
$S:function(){return{func:1,v:true}}}
H.aY.prototype={
en:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.ac(this.b)}}
H.hs.prototype={}
H.eh.prototype={
$0:function(){H.lv(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.ei.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bc(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bc(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aL()},
$S:function(){return{func:1,v:true}}}
H.h_.prototype={}
H.b9.prototype={
B:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.m9(b)
if(t.gdU()===s){s=J.aa(r)
switch(s.h(r,0)){case"pause":t.bD(s.h(r,1),s.h(r,2))
break
case"resume":t.eq(s.h(r,1))
break
case"add-ondone":t.dF(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.ep(s.h(r,1))
break
case"set-errors-fatal":t.cz(s.h(r,1),s.h(r,2))
break
case"ping":t.eb(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.ea(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ah(0,s)
break}return}u.globalState.f.a.M(0,new H.aY(t,new H.hu(this,r),"receive"))},
t:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.b9){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gq:function(a){return this.b.a}}
H.hu.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.d9(0,this.b)},
$S:function(){return{func:1}}}
H.bN.prototype={
B:function(a,b){var t,s,r
t=P.au(["command","message","port",this,"msg",b])
s=new H.ad(!0,P.bL(null,P.p)).E(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
t:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bN){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gq:function(a){return C.b.cK((this.b<<16^this.a<<8)>>>0,this.c)}}
H.b7.prototype={
dd:function(){this.c=!0
this.b=null},
d9:function(a,b){if(this.c)return
this.b.$1(b)},
$islM:1}
H.fz.prototype={
d_:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.M(0,new H.aY(s,new H.fA(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.bR(new H.fB(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.t("Timer greater than 0."))}}}
H.fA.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.fB.prototype={
$0:function(){this.a.c=null
H.id()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ai.prototype={
gq:function(a){var t=this.a
t=C.b.aJ(t,0)^C.b.C(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
t:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ai){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.ad.prototype={
E:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.j(0,a,t.gi(t))
t=J.u(a)
if(!!t.$isbv)return["buffer",a]
if(!!t.$isaO)return["typed",a]
if(!!t.$ism)return this.ct(a)
if(!!t.$isls){r=this.gcq()
q=t.gA(a)
q=H.iJ(q,r,H.ae(q,"R",0),null)
q=P.jB(q,!0,H.ae(q,"R",0))
t=t.gcf(a)
t=H.iJ(t,r,H.ae(t,"R",0),null)
return["map",q,P.jB(t,!0,H.ae(t,"R",0))]}if(!!t.$islB)return this.cu(a)
if(!!t.$isa)this.cd(a)
if(!!t.$islM)this.aj(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isb9)return this.cv(a)
if(!!t.$isbN)return this.cw(a)
if(!!t.$isb1){p=a.$static_name
if(p==null)this.aj(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isai)return["capability",a.a]
if(!(a instanceof P.o))this.cd(a)
return["dart",u.classIdExtractor(a),this.cs(u.classFieldsExtractor(a))]},
aj:function(a,b){throw H.e(new P.t((b==null?"Can't transmit:":b)+" "+H.f(a)))},
cd:function(a){return this.aj(a,null)},
ct:function(a){var t
H.d(typeof a!=="string")
t=this.cr(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.aj(a,"Can't serialize indexable: ")},
cr:function(a){var t,s
t=[]
C.a.si(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.E(a[s])
return t},
cs:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.E(a[t]))
return a},
cu:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.aj(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.si(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.E(a[t[r]])
return["js-object",t,s]},
cw:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cv:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aW.prototype={
P:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.je("Bad serialized message: "+H.f(a)))
switch(C.a.ge7(a)){case"ref":H.d(J.D(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.d(J.D(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.d(J.D(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.d(J.D(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
s=H.F(this.ab(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.D(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.F(this.ab(t),[null])
case"mutable":H.d(J.D(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.ab(t)
case"const":H.d(J.D(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.F(this.ab(t),[null])
s.fixed$length=Array
return s
case"map":return this.e2(a)
case"sendport":return this.e3(a)
case"raw sendport":H.d(J.D(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.e1(a)
case"function":H.d(J.D(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.D(a[0],"capability"))
return new H.ai(a[1])
case"dart":H.d(J.D(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.l(this.b,p)
this.ab(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.f(a))}},
ab:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.P(a[t]))
return a},
e2:function(a){var t,s,r,q,p
H.d(J.D(a[0],"map"))
t=a[1]
s=a[2]
r=P.a0()
C.a.l(this.b,r)
t=J.kS(t,this.ge0()).ex(0)
for(q=J.aa(s),p=0;p<t.length;++p)r.j(0,t[p],this.P(q.h(s,p)))
return r},
e3:function(a){var t,s,r,q,p,o,n
H.d(J.D(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.bY(r)
if(o==null)return
n=new H.b9(o,s)}else n=new H.bN(t,r,s)
C.a.l(this.b,n)
return n},
e1:function(a){var t,s,r,q,p,o
H.d(J.D(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.aa(t),p=J.aa(s),o=0;o<q.gi(t);++o)r[q.h(t,o)]=this.P(p.h(s,o))
return r}}
H.f4.prototype={}
H.fF.prototype={
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
H.d0.prototype={
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
H.fJ.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.ir.prototype={
$1:function(a){if(!!J.u(a).$isb3)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dk.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.i7.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.i8.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.i9.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.ia.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.ib.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.b1.prototype={
k:function(a){return"Closure '"+H.f2(this).trim()+"'"},
$isiC:1,
geE:function(){return this},
$D:null}
H.fu.prototype={}
H.fh.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bf.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bf))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gq:function(a){var t,s
t=this.c
if(t==null)s=H.aP(this.a)
else s=typeof t!=="object"?J.ag(t):H.aP(t)
return(s^H.aP(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.f1(t)}}
H.fH.prototype={
k:function(a){return this.a}}
H.dD.prototype={
k:function(a){return this.a}}
H.f8.prototype={
k:function(a){return"RuntimeError: "+H.f(this.a)}}
H.fU.prototype={
k:function(a){return C.h.a1("Assertion failed: ",P.iA(this.a))}}
H.dc.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gq:function(a){return J.ag(this.a)},
t:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.dc){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ab.prototype={
gi:function(a){return this.a},
gaf:function(a){return this.a===0},
gA:function(a){return new H.eq(this,[H.aC(this,0)])},
gcf:function(a){return H.iJ(this.gA(this),new H.em(this),H.aC(this,0),H.aC(this,1))},
D:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bq(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bq(s,b)}else return this.ed(b)},
ed:function(a){var t=this.d
if(t==null)return!1
return this.ae(this.aq(t,this.ad(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.a8(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.a8(r,b)
return s==null?null:s.b}else return this.ee(b)},
ee:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aq(t,this.ad(a))
r=this.ae(s,a)
if(r<0)return
return s[r].b},
j:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aG()
this.b=t}this.bi(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aG()
this.c=s}this.bi(s,b,c)}else{r=this.d
if(r==null){r=this.aG()
this.d=r}q=this.ad(b)
p=this.aq(r,q)
if(p==null)this.aI(r,q,[this.aH(b,c)])
else{o=this.ae(p,b)
if(o>=0)p[o].b=c
else p.push(this.aH(b,c))}}},
ah:function(a,b){if(typeof b==="string")return this.bw(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bw(this.c,b)
else return this.ef(b)},
ef:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.aq(t,this.ad(a))
r=this.ae(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bB(q)
return q.b},
O:function(a){if(this.a>0){this.f=null
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
if(s!==this.r)throw H.e(new P.X(this))
t=t.c}},
bi:function(a,b,c){var t=this.a8(a,b)
if(t==null)this.aI(a,b,this.aH(b,c))
else t.b=c},
bw:function(a,b){var t
if(a==null)return
t=this.a8(a,b)
if(t==null)return
this.bB(t)
this.br(a,b)
return t.b},
aH:function(a,b){var t,s
t=new H.ep(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bB:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
ad:function(a){return J.ag(a)&0x3ffffff},
ae:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.D(a[s].a,b))return s
return-1},
k:function(a){return P.lD(this)},
a8:function(a,b){return a[b]},
aq:function(a,b){return a[b]},
aI:function(a,b,c){H.d(c!=null)
a[b]=c},
br:function(a,b){delete a[b]},
bq:function(a,b){return this.a8(a,b)!=null},
aG:function(){var t=Object.create(null)
this.aI(t,"<non-identifier-key>",t)
this.br(t,"<non-identifier-key>")
return t},
$isls:1}
H.em.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.ep.prototype={}
H.eq.prototype={
gi:function(a){return this.a.a},
gu:function(a){var t,s
t=this.a
s=new H.er(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.er.prototype={
gn:function(){return this.d},
m:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.X(t))
else{t=this.c
if(t==null){this.sbh(null)
return!1}else{this.sbh(t.a)
this.c=this.c.c
return!0}}},
sbh:function(a){this.d=a}}
H.i3.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.i4.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.r]}}}
H.i5.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.r]}}}
H.bv.prototype={$isbv:1}
H.aO.prototype={$isaO:1}
H.cU.prototype={
gi:function(a){return a.length},
$ism:1,
$asm:function(){},
$isn:1,
$asn:function(){}}
H.cV.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.M(a,b))
return a[b]},
j:function(a,b,c){if(b>>>0!==b||b>=a.length)H.C(H.M(a,b))
a[b]=c}}
H.cW.prototype={
j:function(a,b,c){if(b>>>0!==b||b>=a.length)H.C(H.M(a,b))
a[b]=c},
$isb:1,
$asb:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]}}
H.cT.prototype={$isb:1,
$asb:function(){return[P.K]},
$isc:1,
$asc:function(){return[P.K]},
$isiB:1}
H.eE.prototype={$isb:1,
$asb:function(){return[P.K]},
$isc:1,
$asc:function(){return[P.K]}}
H.eF.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.M(a,b))
return a[b]},
$isb:1,
$asb:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]}}
H.eG.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.M(a,b))
return a[b]},
$isb:1,
$asb:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]},
$islr:1}
H.eH.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.M(a,b))
return a[b]},
$isb:1,
$asb:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]}}
H.eI.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.M(a,b))
return a[b]},
$isb:1,
$asb:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]},
$islU:1}
H.eJ.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.M(a,b))
return a[b]},
$isb:1,
$asb:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]},
$islV:1}
H.cX.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.M(a,b))
return a[b]},
$isb:1,
$asb:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]}}
H.eK.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.M(a,b))
return a[b]},
$isb:1,
$asb:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]},
$islW:1}
H.bw.prototype={
$asm:function(){},
$isb:1,
$asb:function(){return[P.p]},
$asn:function(){},
$isc:1,
$asc:function(){return[P.p]}}
H.bx.prototype={
$asm:function(){},
$isb:1,
$asb:function(){return[P.K]},
$asn:function(){},
$isc:1,
$asc:function(){return[P.K]}}
H.by.prototype={
$asm:function(){},
$asb:function(){return[P.K]},
$asn:function(){},
$asc:function(){return[P.K]}}
H.bz.prototype={
$asm:function(){},
$asb:function(){return[P.p]},
$asn:function(){},
$asc:function(){return[P.p]}}
P.fW.prototype={
$1:function(a){var t,s
H.id()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.fV.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.fX.prototype={
$0:function(){H.id()
this.a.$0()},
$S:function(){return{func:1}}}
P.fY.prototype={
$0:function(){H.id()
this.a.$0()},
$S:function(){return{func:1}}}
P.h1.prototype={}
P.hK.prototype={
dS:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.aw("Future already completed"))
t.aC(b)}}
P.dh.prototype={
el:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.aV(this.d,a.a)},
e9:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bc(s,{func:1,args:[P.o,P.bD]}))return t.er(s,a.a,a.b)
else return t.aV(s,a.a)}}
P.aq.prototype={
c3:function(a,b){var t,s,r
t=$.z
if(t!==C.e){t.toString
if(b!=null)b=P.md(b,t)}s=new P.aq(0,t,null,[null])
r=b==null?1:3
this.bj(new P.dh(null,s,r,a,b,[H.aC(this,0),null]))
return s},
c2:function(a){return this.c3(a,null)},
bm:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
bj:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.iX(this.c,"$isdh")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.bj(a)
return}this.bm(t)}H.d(this.a>=4)
t=this.b
t.toString
P.hV(null,null,t,new P.hc(this,a))}},
bv:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.bv(a)
return}this.bm(s)}H.d(this.a>=4)
t.a=this.a9(a)
s=this.b
s.toString
P.hV(null,null,s,new P.hg(t,this))}},
bx:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.a9(t)},
a9:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aC:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.iS(a,"$isea",t,"$asea"))if(H.iS(a,"$isaq",t,null))P.jV(a,this)
else P.m3(a,this)
else{s=this.bx()
H.d(this.a<4)
this.a=4
this.c=a
P.bH(this,s)}},
an:function(a,b){var t
H.d(this.a<4)
t=this.bx()
H.d(this.a<4)
this.a=8
this.c=new P.b0(a,b)
P.bH(this,t)},
df:function(a){return this.an(a,null)},
$isea:1,
gaK:function(){return this.a},
gdw:function(){return this.c}}
P.hc.prototype={
$0:function(){P.bH(this.a,this.b)},
$S:function(){return{func:1}}}
P.hg.prototype={
$0:function(){P.bH(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hd.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.aC(a)},
$S:function(){return{func:1,args:[,]}}}
P.he.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.an(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hf.prototype={
$0:function(){this.a.an(this.b,this.c)},
$S:function(){return{func:1}}}
P.hj.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.c0(q.d)}catch(n){s=H.N(n)
r=H.aB(n)
if(this.c){q=this.a.a
H.d(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.d(q.a===8)
p.b=q.c}else p.b=new P.b0(s,r)
p.a=!0
return}if(!!J.u(t).$isea){if(t instanceof P.aq&&t.gaK()>=4){if(t.gaK()===8){q=t
H.d(q.gaK()===8)
p=this.b
p.b=q.gdw()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.c2(new P.hk(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hk.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.hi.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.aV(r.d,this.c)}catch(q){t=H.N(q)
s=H.aB(q)
r=this.a
r.b=new P.b0(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hh.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.el(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.e9(t)
p.a=!1}}catch(o){s=H.N(o)
r=H.aB(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.b0(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.df.prototype={}
P.fl.prototype={
gi:function(a){var t,s
t={}
s=new P.aq(0,$.z,null,[P.p])
t.a=0
this.ej(new P.fn(t),!0,new P.fo(t,s),s.gde())
return s}}
P.fn.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.fo.prototype={
$0:function(){this.b.aC(this.a.a)},
$S:function(){return{func:1}}}
P.fm.prototype={}
P.b0.prototype={
k:function(a){return H.f(this.a)},
$isb3:1}
P.hR.prototype={}
P.hU.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.d1()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.hw.prototype={
es:function(a){var t,s,r
try{if(C.e===$.z){a.$0()
return}P.k_(null,null,this,a)}catch(r){t=H.N(r)
s=H.aB(r)
P.hT(null,null,this,t,s)}},
eu:function(a,b){var t,s,r
try{if(C.e===$.z){a.$1(b)
return}P.k0(null,null,this,a,b)}catch(r){t=H.N(r)
s=H.aB(r)
P.hT(null,null,this,t,s)}},
dM:function(a){return new P.hy(this,a)},
aM:function(a){return new P.hx(this,a)},
dN:function(a){return new P.hz(this,a)},
h:function(a,b){return},
c0:function(a){if($.z===C.e)return a.$0()
return P.k_(null,null,this,a)},
aV:function(a,b){if($.z===C.e)return a.$1(b)
return P.k0(null,null,this,a,b)},
er:function(a,b,c){if($.z===C.e)return a.$2(b,c)
return P.me(null,null,this,a,b,c)}}
P.hy.prototype={
$0:function(){return this.a.c0(this.b)},
$S:function(){return{func:1}}}
P.hx.prototype={
$0:function(){return this.a.es(this.b)},
$S:function(){return{func:1}}}
P.hz.prototype={
$1:function(a){return this.a.eu(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.di.prototype={
ad:function(a){return H.mM(a)&0x3ffffff},
ae:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hp.prototype={
gu:function(a){var t=new P.bK(this,this.r,null,null,[null])
t.c=this.e
return t},
gi:function(a){return this.a},
w:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dg(b)},
dg:function(a){var t=this.d
if(t==null)return!1
return this.ap(t[this.ao(a)],a)>=0},
bY:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.w(0,a)?a:null
else return this.dq(a)},
dq:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ao(a)]
r=this.ap(s,a)
if(r<0)return
return J.j1(s,r).gdi()},
l:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bn(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bn(r,b)}else return this.M(0,b)},
M:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.m7()
this.d=t}s=this.ao(b)
r=t[s]
if(r==null){q=[this.aB(b)]
H.d(q!=null)
t[s]=q}else{if(this.ap(r,b)>=0)return!1
r.push(this.aB(b))}return!0},
ah:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bo(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bo(this.c,b)
else return this.dr(0,b)},
dr:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ao(b)]
r=this.ap(s,b)
if(r<0)return!1
this.bp(s.splice(r,1)[0])
return!0},
O:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bn:function(a,b){var t
if(a[b]!=null)return!1
t=this.aB(b)
H.d(!0)
a[b]=t
return!0},
bo:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bp(t)
delete a[b]
return!0},
aB:function(a){var t,s
t=new P.hq(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bp:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
ao:function(a){return J.ag(a)&0x3ffffff},
ap:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.D(a[s].a,b))return s
return-1},
$isb:1,
$asb:null}
P.hq.prototype={
gdi:function(){return this.a}}
P.bK.prototype={
gn:function(){return this.d},
m:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.X(t))
else{t=this.c
if(t==null){this.sa6(null)
return!1}else{this.sa6(t.a)
this.c=this.c.b
return!0}}},
sa6:function(a){this.d=a}}
P.hn.prototype={}
P.cQ.prototype={}
P.v.prototype={
gu:function(a){return new H.cR(a,this.gi(a),0,null,[H.ae(a,"v",0)])},
p:function(a,b){return this.h(a,b)},
bZ:function(a,b){return new H.bs(a,b,[H.ae(a,"v",0),null])},
e8:function(a,b,c){var t,s,r
t=this.gi(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gi(a))throw H.e(new P.X(a))}return s},
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
gu:function(a){return new P.hr(this,this.c,this.d,this.b,null,this.$ti)},
gaf:function(a){return this.b===this.c},
gi:function(a){return(this.c-this.b&this.a.length-1)>>>0},
p:function(a,b){var t,s
t=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=t)H.C(P.y(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
O:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.ej(this,"{","}")},
c_:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.ek());++this.d
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
if(this.b===t)this.bt();++this.d},
bt:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.F(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.b4(s,0,q,t,r)
C.a.b4(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbz(s)},
cV:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbz(H.F(t,[b]))},
sbz:function(a){this.a=a},
$asb:null}
P.hr.prototype={
gn:function(){return this.e},
m:function(){var t,s
t=this.a
if(this.c!==t.d)H.C(new P.X(t))
s=this.d
if(s===this.b){this.sa6(null)
return!1}this.sa6(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sa6:function(a){this.e=a}}
P.fb.prototype={
G:function(a,b){var t
for(t=J.be(b);t.m();)this.l(0,t.gn())},
k:function(a){return P.ej(this,"{","}")},
$isb:1,
$asb:null}
P.fa.prototype={}
P.bB.prototype={$isb:1,$asb:null,$isc:1,$asc:null}
P.aA.prototype={}
P.H.prototype={}
P.bg.prototype={
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.bg))return!1
return this.a===b.a&&this.b===b.b},
K:function(a,b){return C.b.K(this.a,b.a)},
gq:function(a){var t=this.a
return(t^C.b.aJ(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.lc(H.lL(this))
s=P.bY(H.lJ(this))
r=P.bY(H.lF(this))
q=P.bY(H.lG(this))
p=P.bY(H.lI(this))
o=P.bY(H.lK(this))
n=P.ld(H.lH(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isH:1,
$asH:function(){return[P.bg]}}
P.K.prototype={$isH:1,
$asH:function(){return[P.V]}}
P.aJ.prototype={
U:function(a,b){return C.b.U(this.a,b.gdh())},
ax:function(a,b){return C.b.ax(this.a,b.gdh())},
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.aJ))return!1
return this.a===b.a},
gq:function(a){return this.a&0x1FFFFFFF},
K:function(a,b){return C.b.K(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.dN()
s=this.a
if(s<0)return"-"+new P.aJ(0-s).k(0)
r=t.$1(C.b.C(s,6e7)%60)
q=t.$1(C.b.C(s,1e6)%60)
p=new P.dM().$1(s%1e6)
return""+C.b.C(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isH:1,
$asH:function(){return[P.aJ]}}
P.dM.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.r,args:[P.p]}}}
P.dN.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.r,args:[P.p]}}}
P.b3.prototype={}
P.bV.prototype={
k:function(a){return"Assertion failed"}}
P.d1.prototype={
k:function(a){return"Throw of null."}}
P.ah.prototype={
gaE:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaD:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.f(t)
q=this.gaE()+s+r
if(!this.a)return q
p=this.gaD()
o=P.iA(this.b)
return q+p+": "+H.f(o)}}
P.d3.prototype={
gaE:function(){return"RangeError"},
gaD:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.ef.prototype={
gaE:function(){return"RangeError"},
gaD:function(){H.d(this.a)
if(J.ks(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gi:function(a){return this.f}}
P.t.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.dd.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aw.prototype={
k:function(a){return"Bad state: "+this.a}}
P.X.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.iA(t))+"."}}
P.d7.prototype={
k:function(a){return"Stack Overflow"},
$isb3:1}
P.dH.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hb.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.dP.prototype={
k:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.C(P.jf(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.jD(b,"expando$values")
return s==null?null:H.jD(s,t)}}
P.p.prototype={$isH:1,
$asH:function(){return[P.V]}}
P.R.prototype={
av:function(a,b){return new H.de(this,b,[H.ae(this,"R",0)])},
gi:function(a){var t,s
H.d(!this.$isb)
t=this.gu(this)
for(s=0;t.m();)++s
return s},
gV:function(a){var t,s
t=this.gu(this)
if(!t.m())throw H.e(H.ek())
s=t.gn()
if(t.m())throw H.e(H.lA())
return s},
p:function(a,b){var t,s,r
if(b<0)H.C(P.aQ(b,0,null,"index",null))
for(t=this.gu(this),s=0;t.m();){r=t.gn()
if(b===s)return r;++s}throw H.e(P.y(b,this,"index",null,s))},
k:function(a){return P.ly(this,"(",")")}}
P.cM.prototype={}
P.c.prototype={$isb:1,$asb:null,$asc:null}
P.av.prototype={}
P.b6.prototype={
gq:function(a){return P.o.prototype.gq.call(this,this)},
k:function(a){return"null"}}
P.V.prototype={$isH:1,
$asH:function(){return[P.V]}}
P.o.prototype={constructor:P.o,$iso:1,
t:function(a,b){return this===b},
gq:function(a){return H.aP(this)},
k:function(a){return H.f1(this)},
toString:function(){return this.k(this)}}
P.bD.prototype={}
P.r.prototype={$isH:1,
$asH:function(){return[P.r]}}
P.bE.prototype={
gi:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gX:function(){return this.a}}
W.k.prototype={}
W.dw.prototype={
k:function(a){return String(a)},
$isa:1}
W.dx.prototype={
k:function(a){return String(a)},
$isa:1}
W.W.prototype={$iso:1}
W.dA.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]},
$isn:1,
$asn:function(){return[W.W]},
$isc:1,
$asc:function(){return[W.W]}}
W.bW.prototype={}
W.aH.prototype={$isa:1,$isaH:1}
W.bX.prototype={
cm:function(a,b,c){var t=this.dk(a,b,P.mo(c,null))
return t},
dk:function(a,b,c){return a.getContext(b,c)}}
W.dC.prototype={
aw:function(a){return P.hY(a.getContextAttributes())}}
W.aI.prototype={$isa:1,
gi:function(a){return a.length}}
W.dF.prototype={$isa:1}
W.w.prototype={$iso:1}
W.b2.prototype={
bl:function(a,b){var t,s
t=$.$get$jn()
s=t[b]
if(typeof s==="string")return s
s=this.dB(a,b)
t[b]=s
return s},
dB:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.le()+b
if(t in a)return t
return b},
gi:function(a){return a.length}}
W.dG.prototype={}
W.dI.prototype={
h:function(a,b){return a[b]},
gi:function(a){return a.length}}
W.bZ.prototype={}
W.bh.prototype={
dG:function(a,b){return a.adoptNode(b)},
cn:function(a,b){return a.getElementById(b)},
a_:function(a,b){return a.querySelector(b)}}
W.c_.prototype={$isa:1}
W.dJ.prototype={
k:function(a){return String(a)}}
W.c0.prototype={
dX:function(a,b){return a.createHTMLDocument(b)}}
W.c1.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gT(a))+" x "+H.f(this.gS(a))},
t:function(a,b){var t
if(b==null)return!1
t=J.u(b)
if(!t.$isJ)return!1
return a.left===t.gaR(b)&&a.top===t.gaW(b)&&this.gT(a)===t.gT(b)&&this.gS(a)===t.gS(b)},
gq:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gT(a)
q=this.gS(a)
return W.jY(W.aZ(W.aZ(W.aZ(W.aZ(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gS:function(a){return a.height},
gaR:function(a){return a.left},
gaW:function(a){return a.top},
gT:function(a){return a.width},
$isJ:1,
$asJ:function(){}}
W.dK.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]},
$isn:1,
$asn:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]}}
W.dL.prototype={
gi:function(a){return a.length}}
W.Y.prototype={
gdJ:function(a){return new W.h5(a)},
k:function(a){return a.localName},
H:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.jv
if(t==null){t=H.F([],[W.cZ])
s=new W.d_(t)
C.a.l(t,W.jW(null))
C.a.l(t,W.jZ())
$.jv=s
d=s}else d=t
t=$.ju
if(t==null){t=new W.dl(d)
$.ju=t
c=t}else{t.a=d
c=t}}if($.at==null){t=document
s=t.implementation
s=(s&&C.y).dX(s,"")
$.at=s
$.iz=s.createRange()
s=$.at
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.at.head;(t&&C.z).J(t,r)}t=$.at
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.iX(s,"$isaH")}t=$.at
if(!!this.$isaH)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.at.body;(t&&C.i).J(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.w(C.J,a.tagName)){t=$.iz;(t&&C.v).cp(t,q)
t=$.iz
p=(t&&C.v).dV(t,b)}else{q.innerHTML=b
p=$.at.createDocumentFragment()
for(t=J.l(p);s=q.firstChild,s!=null;)t.J(p,s)}t=$.at.body
if(q==null?t!=null:q!==t)J.kT(q)
c.b3(p)
C.f.dG(document,p)
return p},
dW:function(a,b,c){return this.H(a,b,c,null)},
cB:function(a,b,c,d){a.textContent=null
this.J(a,this.H(a,b,c,d))},
cA:function(a,b){return this.cB(a,b,null,null)},
a2:function(a,b){return a.getAttribute(b)},
ds:function(a,b){return a.removeAttribute(b)},
$isa:1,
$iso:1,
$isY:1,
$ish:1,
$isq:1,
gew:function(a){return a.tagName}}
W.hW.prototype={
$1:function(a){return!!J.u(a).$isY},
$S:function(){return{func:1,args:[,]}}}
W.j.prototype={}
W.h.prototype={
da:function(a,b,c,d){return a.addEventListener(b,H.bR(c,1),!1)},
$iso:1,
$ish:1}
W.Z.prototype={$iso:1}
W.e6.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]},
$isn:1,
$asn:function(){return[W.Z]},
$isc:1,
$asc:function(){return[W.Z]}}
W.e7.prototype={
gi:function(a){return a.length}}
W.e9.prototype={
gi:function(a){return a.length}}
W.a_.prototype={$iso:1}
W.c5.prototype={}
W.ec.prototype={
gi:function(a){return a.length}}
W.bp.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]},
$isn:1,
$asn:function(){return[W.q]},
$isc:1,
$asc:function(){return[W.q]}}
W.c6.prototype={}
W.ed.prototype={
B:function(a,b){return a.send(b)}}
W.bq.prototype={}
W.eg.prototype={$isa:1,$isY:1}
W.aN.prototype={$iso:1,$isaN:1}
W.et.prototype={
k:function(a){return String(a)}}
W.ez.prototype={
gi:function(a){return a.length}}
W.eB.prototype={
eF:function(a,b,c){return a.send(b,c)},
B:function(a,b){return a.send(b)}}
W.bu.prototype={}
W.a1.prototype={$iso:1}
W.eC.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]},
$isn:1,
$asn:function(){return[W.a1]},
$isc:1,
$asc:function(){return[W.a1]}}
W.L.prototype={$iso:1,$isL:1}
W.eL.prototype={$isa:1}
W.P.prototype={
gV:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.aw("No elements"))
if(s>1)throw H.e(new P.aw("More than one element"))
return t.firstChild},
G:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.l(s),p=0;p<r;++p)q.J(s,t.firstChild)
return},
j:function(a,b,c){var t=this.a
J.ku(t,c,C.t.h(t.childNodes,b))},
gu:function(a){var t=this.a.childNodes
return new W.c4(t,t.length,-1,null,[H.ae(t,"x",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){return C.t.h(this.a.childNodes,b)},
$asb:function(){return[W.q]},
$ascQ:function(){return[W.q]},
$asc:function(){return[W.q]},
$asbB:function(){return[W.q]}}
W.q.prototype={
eo:function(a){var t=a.parentNode
if(t!=null)J.bd(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.cG(a):t},
J:function(a,b){return a.appendChild(b)},
dt:function(a,b){return a.removeChild(b)},
du:function(a,b,c){return a.replaceChild(b,c)},
$iso:1,
$ish:1,
$isq:1,
gaT:function(a){return a.previousSibling}}
W.cY.prototype={
aU:function(a){return a.previousNode()}}
W.bA.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]},
$isn:1,
$asn:function(){return[W.q]},
$isc:1,
$asc:function(){return[W.q]}}
W.eU.prototype={$isa:1}
W.eX.prototype={
gi:function(a){return a.length}}
W.a2.prototype={$iso:1,
gi:function(a){return a.length}}
W.eZ.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]},
$isn:1,
$asn:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]}}
W.f0.prototype={
B:function(a,b){return a.send(b)}}
W.d2.prototype={
dV:function(a,b){return a.createContextualFragment(b)},
cp:function(a,b){return a.selectNodeContents(b)}}
W.d4.prototype={
B:function(a,b){return a.send(b)}}
W.f9.prototype={
gi:function(a){return a.length}}
W.fc.prototype={$isa:1}
W.a3.prototype={$iso:1,$ish:1}
W.fd.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]},
$isn:1,
$asn:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]}}
W.a4.prototype={$iso:1}
W.ff.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]},
$isn:1,
$asn:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]}}
W.a5.prototype={$iso:1,
gi:function(a){return a.length}}
W.fk.prototype={
h:function(a,b){return this.bs(a,b)},
as:function(a,b){var t,s
for(t=0;!0;++t){s=this.dn(a,t)
if(s==null)return
b.$2(s,this.bs(a,s))}},
gi:function(a){return a.length},
bs:function(a,b){return a.getItem(b)},
dn:function(a,b){return a.key(b)}}
W.S.prototype={$iso:1}
W.d8.prototype={
H:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.ay(a,b,c,d)
t=W.lk("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.P(s).G(0,new W.P(t))
return s}}
W.fs.prototype={
H:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.ay(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.w.H(t.createElement("table"),b,c,d)
t.toString
t=new W.P(t)
r=t.gV(t)
r.toString
t=new W.P(r)
q=t.gV(t)
s.toString
q.toString
new W.P(s).G(0,new W.P(q))
return s}}
W.ft.prototype={
H:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.ay(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.w.H(t.createElement("table"),b,c,d)
t.toString
t=new W.P(t)
r=t.gV(t)
s.toString
r.toString
new W.P(s).G(0,new W.P(r))
return s}}
W.bF.prototype={$isbF:1}
W.a6.prototype={$iso:1,$ish:1}
W.T.prototype={$iso:1,$ish:1}
W.fw.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.T]},
$isb:1,
$asb:function(){return[W.T]},
$isn:1,
$asn:function(){return[W.T]},
$isc:1,
$asc:function(){return[W.T]}}
W.fx.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]},
$isn:1,
$asn:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]}}
W.fy.prototype={
gi:function(a){return a.length}}
W.a7.prototype={$iso:1}
W.aS.prototype={$iso:1,$isaS:1}
W.fC.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]},
$isn:1,
$asn:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]}}
W.fD.prototype={
gi:function(a){return a.length}}
W.ax.prototype={}
W.db.prototype={
aU:function(a){return a.previousNode()}}
W.ay.prototype={}
W.fK.prototype={
k:function(a){return String(a)},
$isa:1}
W.fM.prototype={
gi:function(a){return a.length}}
W.fP.prototype={
gi:function(a){return a.length}}
W.fQ.prototype={
B:function(a,b){return a.send(b)}}
W.aU.prototype={
gdZ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.t("deltaY is not supported"))},
$iso:1,
$isL:1,
$isaU:1}
W.bG.prototype={
gdI:function(a){var t,s
t=P.V
s=new P.aq(0,$.z,null,[t])
this.dj(a)
this.dv(a,W.k2(new W.fS(new P.hK(s,[t]))))
return s},
dv:function(a,b){return a.requestAnimationFrame(H.bR(b,1))},
dj:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.fS.prototype={
$1:function(a){this.a.dS(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.fT.prototype={$isa:1}
W.aV.prototype={$isa:1}
W.h0.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
t:function(a,b){var t,s,r
if(b==null)return!1
t=J.u(b)
if(!t.$isJ)return!1
s=a.left
r=t.gaR(b)
if(s==null?r==null:s===r){s=a.top
r=t.gaW(b)
if(s==null?r==null:s===r){s=a.width
r=t.gT(b)
if(s==null?r==null:s===r){s=a.height
t=t.gS(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gq:function(a){var t,s,r,q
t=J.ag(a.left)
s=J.ag(a.top)
r=J.ag(a.width)
q=J.ag(a.height)
return W.jY(W.aZ(W.aZ(W.aZ(W.aZ(0,t),s),r),q))},
$isJ:1,
$asJ:function(){},
gS:function(a){return a.height},
gaR:function(a){return a.left},
gaW:function(a){return a.top},
gT:function(a){return a.width}}
W.dg.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[P.J]},
$isb:1,
$asb:function(){return[P.J]},
$isn:1,
$asn:function(){return[P.J]},
$isc:1,
$asc:function(){return[P.J]}}
W.h2.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.w]},
$isb:1,
$asb:function(){return[W.w]},
$isn:1,
$asn:function(){return[W.w]},
$isc:1,
$asc:function(){return[W.w]}}
W.h3.prototype={$isa:1}
W.h4.prototype={
gS:function(a){return a.height},
gT:function(a){return a.width}}
W.hl.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]},
$isn:1,
$asn:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]}}
W.hm.prototype={$isa:1}
W.dj.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]},
$isn:1,
$asn:function(){return[W.q]},
$isc:1,
$asc:function(){return[W.q]}}
W.hE.prototype={$isa:1}
W.hH.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]},
$isn:1,
$asn:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]}}
W.hI.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.S]},
$isb:1,
$asb:function(){return[W.S]},
$isn:1,
$asn:function(){return[W.S]},
$isc:1,
$asc:function(){return[W.S]}}
W.hP.prototype={$isa:1}
W.hQ.prototype={$isa:1}
W.fZ.prototype={
as:function(a,b){var t,s,r,q,p,o
for(t=this.gA(this),s=t.length,r=this.a,q=J.l(r),p=0;p<t.length;t.length===s||(0,H.as)(t),++p){o=t[p]
b.$2(o,q.a2(r,o))}},
gA:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.F([],[P.r])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
gdl:function(){return this.a}}
W.h5.prototype={
h:function(a,b){return J.iw(this.a,b)},
gi:function(a){return this.gA(this).length}}
W.h8.prototype={
ej:function(a,b,c,d){return W.ap(this.a,this.b,a,!1,H.aC(this,0))}}
W.iN.prototype={}
W.h9.prototype={
dD:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.kt(r,this.c,t,!1)}},
d5:function(a,b,c,d,e){this.dD()}}
W.ha.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bJ.prototype={
Y:function(a){return $.$get$jX().w(0,W.bi(a))},
N:function(a,b,c){var t,s,r
t=W.bi(a)
s=$.$get$iO()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
d6:function(a){var t,s
t=$.$get$iO()
if(t.gaf(t)){for(s=0;s<262;++s)t.j(0,C.I[s],W.mw())
for(s=0;s<12;++s)t.j(0,C.l[s],W.mx())}}}
W.x.prototype={
gu:function(a){return new W.c4(a,this.gi(a),-1,null,[H.ae(a,"x",0)])},
$isb:1,
$asb:null,
$isc:1,
$asc:null}
W.d_.prototype={
Y:function(a){return C.a.bE(this.a,new W.eN(a))},
N:function(a,b,c){return C.a.bE(this.a,new W.eM(a,b,c))}}
W.eN.prototype={
$1:function(a){return a.Y(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.eM.prototype={
$1:function(a){return a.N(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.bM.prototype={
Y:function(a){return this.a.w(0,W.bi(a))},
N:function(a,b,c){var t,s
t=W.bi(a)
s=this.c
if(s.w(0,H.f(t)+"::"+b))return this.d.dH(c)
else if(s.w(0,"*::"+b))return this.d.dH(c)
else{s=this.b
if(s.w(0,H.f(t)+"::"+b))return!0
else if(s.w(0,"*::"+b))return!0
else if(s.w(0,H.f(t)+"::*"))return!0
else if(s.w(0,"*::*"))return!0}return!1},
d8:function(a,b,c,d){var t,s,r
this.a.G(0,c)
t=b.av(0,new W.hF())
s=b.av(0,new W.hG())
this.b.G(0,t)
r=this.c
r.G(0,C.K)
r.G(0,s)}}
W.hF.prototype={
$1:function(a){return!C.a.w(C.l,a)},
$S:function(){return{func:1,args:[,]}}}
W.hG.prototype={
$1:function(a){return C.a.w(C.l,a)},
$S:function(){return{func:1,args:[,]}}}
W.hL.prototype={
N:function(a,b,c){if(this.cJ(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.iw(a,"template")==="")return this.e.w(0,b)
return!1}}
W.hM.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.hJ.prototype={
Y:function(a){var t=J.u(a)
if(!!t.$isbC)return!1
t=!!t.$isB
if(t&&W.bi(a)==="foreignObject")return!1
if(t)return!0
return!1},
N:function(a,b,c){if(b==="is"||C.h.cD(b,"on"))return!1
return this.Y(a)}}
W.c4.prototype={
m:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbu(J.j1(this.a,t))
this.c=t
return!0}this.sbu(null)
this.c=s
return!1},
gn:function(){return this.d},
sbu:function(a){this.d=a}}
W.cZ.prototype={}
W.hD.prototype={}
W.dl.prototype={
b3:function(a){new W.hN(this).$2(a,null)},
ar:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bd(t,a)}else J.bd(b,a)},
dA:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.kL(a)
r=J.iw(s.gdl(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.N(n)}p="element unprintable"
try{p=J.aF(a)}catch(n){H.N(n)}try{o=W.bi(a)
this.dz(a,b,t,p,o,s,r)}catch(n){if(H.N(n) instanceof P.ah)throw n
else{this.ar(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
dz:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.ar(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.Y(a)){this.ar(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.aF(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.N(a,"is",g)){this.ar(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gA(f)
s=H.F(t.slice(0),[H.aC(t,0)])
for(r=f.gA(f).length-1,t=f.a,q=J.l(t);r>=0;--r){p=s[r]
if(!this.a.N(a,J.kW(p),q.a2(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.a2(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.a2(t,p)
q.ds(t,p)}}if(!!J.u(a).$isbF)this.b3(a.content)}}
W.hN.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.dA(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bd(r,a)}else J.bd(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.kM(t)}catch(q){H.N(q)
r=t
J.bd(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.q,W.q]}}}
W.bj.prototype={$isb:1,
$asb:function(){return[W.W]},
$isc:1,
$asc:function(){return[W.W]}}
W.bk.prototype={$isb:1,
$asb:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]}}
W.bl.prototype={$isb:1,
$asb:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]}}
W.bm.prototype={$isb:1,
$asb:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]}}
W.bn.prototype={$isb:1,
$asb:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]}}
W.bo.prototype={$isb:1,
$asb:function(){return[W.W]},
$isc:1,
$asc:function(){return[W.W]}}
W.c7.prototype={}
W.cr.prototype={$isb:1,
$asb:function(){return[W.q]},
$isc:1,
$asc:function(){return[W.q]}}
W.ca.prototype={$isb:1,
$asb:function(){return[W.S]},
$isc:1,
$asc:function(){return[W.S]}}
W.ck.prototype={$isb:1,
$asb:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]}}
W.cl.prototype={$isb:1,
$asb:function(){return[W.q]},
$isc:1,
$asc:function(){return[W.q]}}
W.cn.prototype={$isb:1,
$asb:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]}}
W.co.prototype={$isb:1,
$asb:function(){return[P.J]},
$isc:1,
$asc:function(){return[P.J]}}
W.cp.prototype={$isb:1,
$asb:function(){return[W.w]},
$isc:1,
$asc:function(){return[W.w]}}
W.cq.prototype={$isb:1,
$asb:function(){return[W.T]},
$isc:1,
$asc:function(){return[W.T]}}
W.c8.prototype={$isb:1,
$asb:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]}}
W.cb.prototype={$isb:1,
$asb:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]}}
W.ce.prototype={$isb:1,
$asb:function(){return[W.Z]},
$isc:1,
$asc:function(){return[W.Z]}}
W.cg.prototype={$isb:1,
$asb:function(){return[W.q]},
$isc:1,
$asc:function(){return[W.q]}}
W.ch.prototype={$isb:1,
$asb:function(){return[W.a1]},
$isc:1,
$asc:function(){return[W.a1]}}
W.ci.prototype={$isb:1,
$asb:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]}}
W.cj.prototype={$isb:1,
$asb:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]}}
W.cs.prototype={$isb:1,
$asb:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]}}
W.ct.prototype={$isb:1,
$asb:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]}}
W.cu.prototype={$isb:1,
$asb:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]}}
W.cE.prototype={$isb:1,
$asb:function(){return[W.a1]},
$isc:1,
$asc:function(){return[W.a1]}}
W.cF.prototype={$isb:1,
$asb:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]}}
W.cC.prototype={$isb:1,
$asb:function(){return[W.q]},
$isc:1,
$asc:function(){return[W.q]}}
W.cD.prototype={$isb:1,
$asb:function(){return[W.S]},
$isc:1,
$asc:function(){return[W.S]}}
W.cI.prototype={$isb:1,
$asb:function(){return[W.Z]},
$isc:1,
$asc:function(){return[W.Z]}}
W.cK.prototype={$isb:1,
$asb:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]}}
W.cL.prototype={$isb:1,
$asb:function(){return[P.J]},
$isc:1,
$asc:function(){return[P.J]}}
W.cw.prototype={$isb:1,
$asb:function(){return[W.q]},
$isc:1,
$asc:function(){return[W.q]}}
W.cx.prototype={$isb:1,
$asb:function(){return[W.w]},
$isc:1,
$asc:function(){return[W.w]}}
W.cz.prototype={$isb:1,
$asb:function(){return[W.q]},
$isc:1,
$asc:function(){return[W.q]}}
W.cB.prototype={$isb:1,
$asb:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]}}
W.cH.prototype={$isb:1,
$asb:function(){return[W.T]},
$isc:1,
$asc:function(){return[W.T]}}
P.hX.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.r,,]}}}
P.hv.prototype={}
P.J.prototype={$asJ:null}
P.dv.prototype={$isa:1}
P.aG.prototype={$isa:1}
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
P.e8.prototype={$isa:1}
P.I.prototype={$isa:1}
P.ee.prototype={$isa:1}
P.aj.prototype={$iso:1}
P.eo.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.y(b,a,null,null,null))
return this.R(a,b)},
j:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$isb:1,
$asb:function(){return[P.aj]},
$isc:1,
$asc:function(){return[P.aj]}}
P.ew.prototype={$isa:1}
P.ex.prototype={$isa:1}
P.al.prototype={$iso:1}
P.eO.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.y(b,a,null,null,null))
return this.R(a,b)},
j:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$isb:1,
$asb:function(){return[P.al]},
$isc:1,
$asc:function(){return[P.al]}}
P.eV.prototype={$isa:1}
P.f_.prototype={
gi:function(a){return a.length}}
P.bC.prototype={$isa:1,$isbC:1}
P.fp.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.y(b,a,null,null,null))
return this.R(a,b)},
j:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$isb:1,
$asb:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]}}
P.B.prototype={
H:function(a,b,c,d){var t,s,r,q,p,o
t=H.F([],[W.cZ])
C.a.l(t,W.jW(null))
C.a.l(t,W.jZ())
C.a.l(t,new W.hJ())
c=new W.dl(new W.d_(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.i).dW(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.P(q)
o=t.gV(t)
for(t=J.l(p);r=o.firstChild,r!=null;)t.J(p,r)
return p},
$isa:1,
$isB:1}
P.fq.prototype={$isa:1}
P.fr.prototype={$isa:1}
P.aR.prototype={}
P.fv.prototype={$isa:1}
P.am.prototype={$iso:1}
P.fE.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.y(b,a,null,null,null))
return this.R(a,b)},
j:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$isb:1,
$asb:function(){return[P.am]},
$isc:1,
$asc:function(){return[P.am]}}
P.fL.prototype={$isa:1}
P.fN.prototype={$isa:1}
P.fO.prototype={$isa:1}
P.bI.prototype={$isa:1}
P.hA.prototype={$isa:1}
P.hB.prototype={$isa:1}
P.hC.prototype={$isa:1}
P.cd.prototype={$isb:1,
$asb:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]}}
P.cc.prototype={$isb:1,
$asb:function(){return[P.am]},
$isc:1,
$asc:function(){return[P.am]}}
P.c9.prototype={$isb:1,
$asb:function(){return[P.aj]},
$isc:1,
$asc:function(){return[P.aj]}}
P.cf.prototype={$isb:1,
$asb:function(){return[P.al]},
$isc:1,
$asc:function(){return[P.al]}}
P.cv.prototype={$isb:1,
$asb:function(){return[P.aj]},
$isc:1,
$asc:function(){return[P.aj]}}
P.cy.prototype={$isb:1,
$asb:function(){return[P.am]},
$isc:1,
$asc:function(){return[P.am]}}
P.cA.prototype={$isb:1,
$asb:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]}}
P.cG.prototype={$isb:1,
$asb:function(){return[P.al]},
$isc:1,
$asc:function(){return[P.al]}}
P.dz.prototype={
gi:function(a){return a.length}}
P.f6.prototype={
bC:function(a,b){return a.activeTexture(b)},
bF:function(a,b,c){return a.attachShader(b,c)},
bG:function(a,b,c){return a.bindBuffer(b,c)},
bH:function(a,b,c){return a.bindTexture(b,c)},
bI:function(a,b){return a.blendEquation(b)},
bJ:function(a,b,c){return a.blendFunc(b,c)},
bK:function(a,b,c,d){return a.bufferData(b,c,d)},
bL:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bM:function(a,b){return a.compileShader(b)},
bN:function(a){return a.createBuffer()},
bO:function(a){return a.createProgram()},
bP:function(a,b){return a.createShader(b)},
bQ:function(a,b){return a.depthMask(b)},
bR:function(a,b){return a.disable(b)},
bS:function(a,b,c,d){return a.drawArrays(b,c,d)},
bT:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bU:function(a,b){return a.enable(b)},
bV:function(a,b){return a.enableVertexAttribArray(b)},
aw:function(a){return P.hY(a.getContextAttributes())},
aZ:function(a,b){return a.getProgramInfoLog(b)},
b_:function(a,b,c){return a.getProgramParameter(b,c)},
b0:function(a,b){return a.getShaderInfoLog(b)},
b1:function(a,b,c){return a.getShaderParameter(b,c)},
b2:function(a,b,c){return a.getUniformLocation(b,c)},
bX:function(a,b){return a.linkProgram(b)},
b5:function(a,b,c){return a.shaderSource(b,c)},
b7:function(a,b,c,d){return a.stencilFunc(b,c,d)},
c4:function(a,b,c){return a.uniform1f(b,c)},
c5:function(a,b,c){return a.uniform1fv(b,c)},
c6:function(a,b,c){return a.uniform1i(b,c)},
c7:function(a,b,c){return a.uniform1iv(b,c)},
c8:function(a,b,c){return a.uniform2fv(b,c)},
c9:function(a,b,c){return a.uniform3fv(b,c)},
ca:function(a,b,c){return a.uniform4fv(b,c)},
cb:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cc:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ce:function(a,b){return a.useProgram(b)},
cg:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)}}
P.f7.prototype={
dL:function(a,b){return a.beginTransformFeedback(b)},
dO:function(a,b){return a.bindVertexArray(b)},
dY:function(a){return a.createVertexArray()},
e4:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
e5:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
e6:function(a){return a.endTransformFeedback()},
eB:function(a,b,c,d){this.dC(a,b,c,d)
return},
dC:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eC:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bC:function(a,b){return a.activeTexture(b)},
bF:function(a,b,c){return a.attachShader(b,c)},
bG:function(a,b,c){return a.bindBuffer(b,c)},
bH:function(a,b,c){return a.bindTexture(b,c)},
bI:function(a,b){return a.blendEquation(b)},
bJ:function(a,b,c){return a.blendFunc(b,c)},
bK:function(a,b,c,d){return a.bufferData(b,c,d)},
bL:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bM:function(a,b){return a.compileShader(b)},
bN:function(a){return a.createBuffer()},
bO:function(a){return a.createProgram()},
bP:function(a,b){return a.createShader(b)},
bQ:function(a,b){return a.depthMask(b)},
bR:function(a,b){return a.disable(b)},
bS:function(a,b,c,d){return a.drawArrays(b,c,d)},
bT:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bU:function(a,b){return a.enable(b)},
bV:function(a,b){return a.enableVertexAttribArray(b)},
aw:function(a){return P.hY(a.getContextAttributes())},
aZ:function(a,b){return a.getProgramInfoLog(b)},
b_:function(a,b,c){return a.getProgramParameter(b,c)},
b0:function(a,b){return a.getShaderInfoLog(b)},
b1:function(a,b,c){return a.getShaderParameter(b,c)},
b2:function(a,b,c){return a.getUniformLocation(b,c)},
bX:function(a,b){return a.linkProgram(b)},
b5:function(a,b,c){return a.shaderSource(b,c)},
b7:function(a,b,c,d){return a.stencilFunc(b,c,d)},
c4:function(a,b,c){return a.uniform1f(b,c)},
c5:function(a,b,c){return a.uniform1fv(b,c)},
c6:function(a,b,c){return a.uniform1i(b,c)},
c7:function(a,b,c){return a.uniform1iv(b,c)},
c8:function(a,b,c){return a.uniform2fv(b,c)},
c9:function(a,b,c){return a.uniform3fv(b,c)},
ca:function(a,b,c){return a.uniform4fv(b,c)},
cb:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cc:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ce:function(a,b){return a.useProgram(b)},
cg:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
$isa:1}
P.hO.prototype={$isa:1}
P.fg.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.y(b,a,null,null,null))
return P.hY(this.dm(a,b))},
j:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
dm:function(a,b){return a.item(b)},
$isb:1,
$asb:function(){return[P.av]},
$isc:1,
$asc:function(){return[P.av]}}
P.cm.prototype={$isb:1,
$asb:function(){return[P.av]},
$isc:1,
$asc:function(){return[P.av]}}
P.cJ.prototype={$isb:1,
$asb:function(){return[P.av]},
$isc:1,
$asc:function(){return[P.av]}}
B.ij.prototype={
$1:function(a){$.$get$hZ().j(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aN]}}}
B.ik.prototype={
$1:function(a){$.$get$hZ().j(0,a.which,null)},
$S:function(){return{func:1,args:[W.aN]}}}
B.il.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.mm=t
$.mn=C.b.a4(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.j_=s-C.b.C(window.innerWidth,2)
$.kl=-(t-C.b.C(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.L]}}}
B.im.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bT=t-C.b.C(window.innerWidth,2)
$.bU=-(s-C.b.C(window.innerHeight,2))
if(a.button===2)$.$get$bS().j(0,"right",!0)
else $.$get$bS().j(0,"left",!0)},
$S:function(){return{func:1,args:[W.L]}}}
B.io.prototype={
$1:function(a){if(a.button===2)$.$get$bS().j(0,"right",null)
else $.$get$bS().j(0,"left",null)},
$S:function(){return{func:1,args:[W.L]}}}
B.eP.prototype={
cW:function(a,b,c,d){var t
W.ap(d,W.mv().$1(d),new B.eQ(this),!1,W.aU)
W.ap(d,"mousemove",new B.eR(this),!1,W.L)
t=W.aS
W.ap(d,"touchstart",new B.eS(),!1,t)
W.ap(d,"touchmove",new B.eT(this),!1,t)
B.mQ(null)}}
B.eQ.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.M.gdZ(a)*r.k3
if(C.c.a4(r.fy,t)>0)r.fy=H.a9(C.c.a4(r.fy,t))}catch(q){s=H.N(q)
P.ar(s)}},
$S:function(){return{func:1,args:[W.aU]}}}
B.eR.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.a9(t.go+C.b.a4($.j_,$.bT)*0.01)
s=t.id
r=$.bU
q=$.kl
t.id=H.a9(s+(r-q)*0.01)
$.bT=$.j_
$.bU=q}},
$S:function(){return{func:1,args:[W.L]}}}
B.eS.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a0(t.clientX)
C.c.a0(t.clientY)
$.bT=s
C.c.a0(t.clientX)
$.bU=C.c.a0(t.clientY)},
$S:function(){return{func:1,args:[W.aS]}}}
B.eT.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a0(t.clientX)
t=C.c.a0(t.clientY)
r=this.a
r.go=H.a9(r.go+C.b.a4(s,$.bT)*0.01)
r.id=H.a9(r.id+($.bU-t)*0.01)
$.bT=s
$.bU=t},
$S:function(){return{func:1,args:[W.aS]}}}
G.eD.prototype={}
G.fI.prototype={
W:function(a,b){var t=this.d
if(H.az(!t.D(0,a)))H.b_("uniform "+a+" already set")
t.j(0,a,b)},
bd:function(){return this.d},
k:function(a){var t,s,r,q
t=H.F(["{"+new H.dc(H.mt(this),null).k(0)+"}["+this.a+"]"],[P.r])
for(s=this.d,r=s.gA(s),r=r.gu(r);r.m();){q=r.gn()
C.a.l(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.ag(t,"\n")}}
G.dB.prototype={}
G.dE.prototype={
bW:function(a,b,c){J.kI(this.a,b)
if(c>0)J.l1(this.a,b,c)}}
G.e5.prototype={}
G.eb.prototype={
ba:function(a){var t,s,r,q,p
H.d(!0)
t=this.d
s=t.length
C.a.l(this.c,new G.e5(s,s+1,s+2,s+3))
for(r=0;r<4;++r){q=a[r]
q.toString
p=new T.E(new Float32Array(3))
p.F(q)
C.a.l(t,p)}},
cM:function(a,b,c){var t,s,r,q
t=a.length
H.d(t===b.length)
s=t-1
for(r=0;r<s;r=q){q=r+1
this.ba([b[r],b[q],a[q],a[r]])}this.ba([b[s],b[0],a[0],a[s]])},
cO:function(a,b,c){var t,s
for(t=0;t<a.length-1;t=s){s=t+1
this.cM(a[s],a[t],!0)}},
cN:function(a,b){return this.cO(a,b,!1)},
cS:function(){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=new Array(t.length*8)
s.fixed$length=Array
r=H.F(s,[P.p])
for(s=this.b,q=0,p=0;!1;++p){o=s[p]
r[q]=o.gdE(o)
r[q+1]=o.gdK(o)
r[q+2]=o.gdK(o)
r[q+3]=o.gdP(o)
r[q+4]=o.gdP(o)
r[q+5]=o.gdE(o)
q+=6}for(s=t.length,p=0;n=t.length,p<n;n===s||(0,H.as)(t),++p){m=t[p]
l=m.a
r[q]=l
k=m.b
r[q+1]=k
r[q+2]=k
k=m.c
r[q+3]=k
r[q+4]=k
k=m.d
r[q+5]=k
r[q+6]=k
r[q+7]=l
q+=8}H.d(q===r.length)
return r},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gA(s),r=r.gu(r);r.m();){q=r.gn()
p=$.$get$a8().h(0,q).a
C.a.l(t,H.f(q)+"["+p+","+H.f(C.d.gi(s.h(0,q)))+"]")}return C.a.ag(t," ")}}
G.da.prototype={}
G.d9.prototype={}
G.ey.prototype={}
G.eA.prototype={
bb:function(a,b,c){var t,s
if(C.h.aA(a,0)===105){if(H.az(C.b.az(b.length,c)===this.z))H.b_("ChangeAttribute "+this.z)}else H.d(C.b.az(b.length,c)===(this.ch.length/3|0))
this.cy.j(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dr(t.a,34962,s)
J.j6(t.a,34962,b,35048)},
cT:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a5:function(a,b,c){var t,s,r,q,p,o
t=J.j2(a,0)===105
if(t&&this.z===0)this.z=C.b.az(b.length,c)
s=this.r
r=this.d
s.j(0,a,J.iu(r.a))
this.bb(a,b,c)
q=$.$get$a8().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.az(p.D(0,a)))H.b_("unexpected attribute "+a)
o=p.h(0,a)
J.ds(r.a,this.e)
r.bW(0,o,t?1:0)
s=s.h(0,a)
p=q.bc()
J.dr(r.a,34962,s)
J.jd(r.a,o,p,5126,!1,0,0)},
k:function(a){var t,s,r
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,t=t.gA(t),t=t.gu(t);t.m();){r=t.gn()
C.a.l(s,H.f(r)+":"+this.cy.h(0,r).length)}return"MESH["+this.a+"] "+C.a.ag(s,"  ")},
saF:function(a){this.cx=a}}
G.eW.prototype={
cP:function(a,b){var t=C.b.ck(a,b)
if(this.z===t)return
this.z=t
this.bf()},
bf:function(){var t,s,r,q,p,o,n
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
t.a3(0,0,1/(p*s))
t.a3(1,1,1/p)
t.a3(2,2,(q+r)/o)
t.a3(3,2,-1)
t.a3(2,3,2*r*q/o)},
bd:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.E(new Float32Array(H.A(3)))
o.al(r,q,p)
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
r=!!s.$isb8
k=r?s.geD(n):1
if(!!s.$isE){j=s.gaX(n)
m=s.gaY(n)
l=s.gci(n)
n=j}else if(r){j=s.gaX(n)
m=s.gaY(n)
l=s.gci(n)
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
a3.em(0,o)
p.j(0,"uPerspectiveViewMatrix",a3)
return p}}
G.f5.prototype={
d0:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gi(t)===s.gi(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gA(s),s=s.gu(s);s.m();){q=s.gn()
if(!t.D(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bK(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.m();){q=s.d
if(!t.w(0,q))C.a.l(r,q)}return r},
d3:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gA(b),s=s.gu(s),r=this.d,q=this.y,p=this.z,o=0;s.m();){n=s.gn()
switch(J.j2(n,0)){case 117:if(q.D(0,n)){m=b.h(0,n)
if(p.D(0,n))H.ih("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.j(0,n,a)
l=$.$get$a8().h(0,n)
if(l==null)H.C("unknown "+n)
H.d(q.D(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.ix(r.a,k,m)
else if(!!J.u(m).$islr)J.l_(r.a,k,m)
break
case"float":if(l.c===0)J.kY(r.a,k,m)
else if(!!J.u(m).$isiB)J.kZ(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aD(m,"$isak").a
J.jc(r.a,k,!1,j)}else if(!!J.u(m).$isiB)J.jc(r.a,k,!1,m)
else if(H.az(!1))H.b_("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.aD(m,"$isbt").a
J.jb(r.a,k,!1,j)}else if(!!J.u(m).$isiB)J.jb(r.a,k,!1,m)
else if(H.az(!1))H.b_("bad unform: "+n)
break
case"vec4":if(l.c===0){j=H.aD(m,"$isb8").a
J.ja(r.a,k,j)}else J.ja(r.a,k,m)
break
case"vec3":if(l.c===0){j=H.aD(m,"$isE").a
J.j9(r.a,k,j)}else J.j9(r.a,k,m)
break
case"vec2":if(l.c===0){j=H.aD(m,"$isG").a
J.j8(r.a,k,j)}else J.j8(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a1(33984,this.ch)
J.j3(r.a,j)
j=H.aD(m,"$islR").cU()
J.j5(r.a,3553,j)
j=this.ch
J.ix(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.a1(33984,this.ch)
J.j3(r.a,j)
j=H.aD(m,"$islR").cU()
J.j5(r.a,34067,j)
j=this.ch
J.ix(r.a,k,j)
this.ch=this.ch+1
break
default:H.ih("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":if(J.D(m,!0))J.dt(r.a,2929)
else J.iv(r.a,2929)
break
case"cStencilFunc":H.aD(m,"$isda")
j=m.a
if(j===1281)J.iv(r.a,2960)
else{J.dt(r.a,2960)
i=m.b
h=m.c
J.kV(r.a,j,i,h)}break
case"cDepthWrite":J.kC(r.a,m)
break
case"cBlendEquation":H.aD(m,"$isd9")
j=m.a
if(j===1281)J.iv(r.a,3042)
else{J.dt(r.a,3042)
i=m.b
h=m.c
J.kx(r.a,i,h)
J.kw(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aJ(1000*(s-new P.bg(t,!1).a)).k(0)},
cR:function(a,b,c){var t,s,r,q,p,o,n,m,l
Date.now()
t=this.d
s=this.r
J.l0(t.a,s)
this.ch=0
this.z.O(0)
for(r=0;r<2;++r){q=b[r]
this.d3(q.a,q.bd())}s=this.Q
s.O(0)
for(p=a.cy,p=p.gA(p),p=p.gu(p);p.m();)s.l(0,p.gn())
o=this.d0()
if(o.length!==0)P.ar("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(o)))
J.ds(a.d.a,a.e)
n=this.e.f.length>0
s=a.f
p=a.cT()
m=a.Q
l=a.z
t.toString
if(n)J.kv(t.a,s)
if(m!==-1)if(l>1)J.kG(t.a,s,p,m,0,l)
else J.kF(t.a,s,p,m,0)
else if(l>1)J.kE(t.a,s,0,p,l)
else J.kD(t.a,s,0,p)
if(n)J.kJ(t.a)},
cQ:function(a,b){return this.cR(a,b,null)},
cX:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.e
r=s.b
q=this.f
p=q.b
o=s.f
n=J.kA(t.a)
m=G.jU(t.a,35633,r)
J.j4(t.a,n,m)
l=G.jU(t.a,35632,p)
J.j4(t.a,n,l)
if(o.length>0)J.kX(t.a,n,o,35980)
J.kR(t.a,n)
if(!J.kQ(t.a,n,35714))H.C(J.kP(t.a,n))
this.r=n
this.sdc(0,P.iH(s.c,null))
for(s=s.d,r=s.length,p=this.y,k=0;k<s.length;s.length===r||(0,H.as)(s),++k){j=s[k]
o=this.r
p.j(0,j,J.j7(t.a,o,j))}for(s=q.d,r=s.length,k=0;k<s.length;s.length===r||(0,H.as)(s),++k){j=s[k]
q=this.r
p.j(0,j,J.j7(t.a,q,j))}},
sdc:function(a,b){this.x=b}}
G.i.prototype={
bc:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.d5.prototype={
cL:function(a){var t,s,r,q
H.d(this.b==null)
for(t=this.c,s=this.x,r=0;r<1;++r){q=a[r]
H.d($.$get$a8().D(0,q))
H.d(!C.a.w(t,q))
C.a.l(t,q)
s.j(0,q,this.r);++this.r}C.a.b6(t)},
b9:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.as)(a),++r){q=a[r]
if(H.az($.$get$a8().D(0,q)))H.b_("missing uniform "+q)
H.d(!C.a.w(s,q))
C.a.l(s,q)}C.a.b6(s)},
cY:function(a,b){H.d(this.b==null)
this.b=this.d4(!0,a,b)},
be:function(a){return this.cY(a,null)},
d4:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.as)(t),++o){n=t[o]
m=$.$get$a8().h(0,n)
C.a.l(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,o=0;!1;++o){k=t[o]
m=$.$get$a8().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.as)(t),++o){k=t[o]
m=$.$get$a8().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.as)(t),++o){k=t[o]
m=$.$get$a8().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.l(q,"")
C.a.l(q,"void main(void) {")
C.a.G(q,b)
C.a.l(q,"}")
return C.a.ag(q,"\n")}}
G.fe.prototype={}
R.fi.prototype={
d7:function(a,b,c,d){var t,s,r,q,p
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
p=(r&&C.n).bl(r,"float")
r.setProperty(p,"left","")
p=C.n.bl(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.j.J(t,s)}return t},
cZ:function(a,b,c){var t,s,r
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
J.is(this.a,s)
r=this.d7(b,c,90,30)
this.d=r
J.is(this.a,r)
t=t.createElement("div")
this.c=t
J.is(this.a,t)}}
R.fj.prototype={
d2:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.p.eA(s,2)+" fps"
t=this.c;(t&&C.j).cA(t,b)
r=C.b.C(30*C.p.dQ(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.j).J(t,q)},
d1:function(a){return this.d2(a,"")}}
A.i2.prototype={
$2:function(a,b){var t=536870911&a+J.ag(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.p,P.o]}}}
T.bt.prototype={
k:function(a){return"[0] "+this.L(0).k(0)+"\n[1] "+this.L(1).k(0)+"\n[2] "+this.L(2).k(0)+"\n"},
h:function(a,b){return this.a[b]},
t:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.bt){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gq:function(a){return A.dq(this.a)},
L:function(a){var t,s
t=new Float32Array(H.A(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.E(t)},
v:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=new Float32Array(H.A(3))
s=new T.E(t)
s.F(b)
r=this.a
q=r[0]
p=t[0]
o=r[3]
n=t[1]
m=r[6]
l=t[2]
k=r[1]
j=r[4]
i=r[7]
h=r[2]
g=r[5]
r=r[8]
t[0]=q*p+o*n+m*l
t[1]=k*p+j*n+i*l
t[2]=h*p+g*n+r*l
return s}}
T.ak.prototype={
a3:function(a,b,c){H.d(a<4)
H.d(b<4)
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
if(b instanceof T.ak){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gq:function(a){return A.dq(this.a)},
L:function(a){var t,s
t=new Float32Array(H.A(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.b8(t)},
ak:function(){var t=this.a
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
em:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.G.prototype={
F:function(a){var t,s
t=a.a
s=this.a
s[1]=t[1]
s[0]=t[0]},
k:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
t:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.G){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gq:function(a){return A.dq(this.a)},
h:function(a,b){return this.a[b]},
gi:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
Z:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
r=Math.sqrt(s*s+r*r)
if(r===0)return 0
q=1/r
t[0]=t[0]*q
t[1]=t[1]*q
return r},
aa:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[1]-s[1]*t[0]},
l:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]},
am:function(a){var t,s
t=a.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]},
co:function(a,b){var t=this.a
t[1]=t[1]*b
t[0]=t[0]*b}}
T.E.prototype={
al:function(a,b,c){var t=this.a
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
return"["+H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+"]"},
t:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.E){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gq:function(a){return A.dq(this.a)},
h:function(a,b){return this.a[b]},
gi:function(a){return Math.sqrt(this.gaS())},
gaS:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
Z:function(a){var t,s,r
t=Math.sqrt(this.gaS())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
aP:function(a){var t,s
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
t=new T.E(new Float32Array(H.A(3)))
t.al(r*m-q*n,q*o-s*m,s*n-r*o)
return t}}
T.b8.prototype={
k:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
t:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.b8){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gq:function(a){return A.dq(this.a)},
h:function(a,b){return this.a[b]},
gi:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)}}
N.ie.prototype={
$1:function(c0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9
this.a.a=c0+0
t=this.e
s=$.$get$kf().valueAsNumber
r=$.$get$kc().valueAsNumber
q=$.$get$jC()
p=q.h(0,$.$get$ka().value)
o=q.h(0,$.$get$k9().value)
n=X.l3(s+0,r+0,$.$get$ke().valueAsNumber,o,p)
r=$.$get$iU()
s=$.$get$kb()
q=new Float32Array(H.A(9))
q[0]=1
q[1]=0
q[2]=0
q[3]=0
q[4]=1
q[5]=0
q[6]=0
q[7]=0
q[8]=1
m=[]
l=new G.eb(!1,[],[],m,P.a0())
l.cN(X.l2(r,s,n,new T.bt(q)),!0)
q=t.d
s=t.e.x
r=P.a0()
k=J.kB(q.a)
j=new G.eA(q,k,1,r,s,null,0,-1,null,null,P.a0(),"meshdata:",!1,!0)
m=G.jx(m,null)
r.j(0,"aPosition",J.iu(q.a))
j.ch=m
j.bb("aPosition",m,3)
i=$.$get$a8().h(0,"aPosition")
if(i==null)H.C("Unknown canonical aPosition")
H.d(s.D(0,"aPosition"))
h=s.h(0,"aPosition")
J.ds(q.a,k)
q.bW(0,h,0)
s=r.h(0,"aPosition")
r=i.bc()
J.dr(q.a,34962,s)
J.jd(q.a,h,r,5126,!1,0,0)
r=l.cS()
j.y=J.iu(q.a)
H.d(j.ch!=null)
s=j.ch.length
if(s<768){j.saF(new Uint8Array(H.hS(r)))
j.Q=5121}else if(s<196608){j.saF(new Uint16Array(H.hS(r)))
j.Q=5123}else{j.saF(new Uint32Array(H.hS(r)))
j.Q=5125}J.ds(q.a,k)
s=j.y
r=j.cx
m=J.u(r)
H.d(!!m.$islU||!!m.$islV||!!m.$islW)
J.dr(q.a,34963,s)
J.j6(q.a,34963,r,35048)
G.m4(l,j)
s=this.c
r=s.k4
if(r.h(0,37)!=null)s.go=H.a9(s.go+0.03)
else if(r.h(0,39)!=null)s.go=H.a9(s.go-0.03)
if(r.h(0,38)!=null)s.id=H.a9(s.id+0.03)
else if(r.h(0,40)!=null)s.id=H.a9(s.id-0.03)
if(r.h(0,33)!=null)s.fy=H.a9(s.fy*0.99)
else if(r.h(0,34)!=null)s.fy=H.a9(s.fy*1.01)
if(r.h(0,32)!=null){s.go=0
s.id=0}r=H.a9(C.c.dR(s.id,-1.4707963267948965,1.4707963267948965))
s.id=r
q=s.fy
m=s.go
g=q*Math.cos(r)
k=Math.cos(m)
r=Math.sin(r)
m=Math.sin(m)
f=s.d.a
f[12]=g*k
f[13]=q*r
f[14]=g*m
m=s.k2.a
f[12]=f[12]+m[0]
f[13]=f[13]+m[1]
f[14]=f[14]+m[2]
r=f[12]
q=f[13]
k=f[14]
e=new T.E(new Float32Array(H.A(3)))
e.al(0,1,0)
d=s.e
c=d.a
c[0]=f[12]
c[1]=f[13]
c[2]=f[14]
c=new Float32Array(H.A(3))
b=new T.E(c)
b.F(d)
c[0]=c[0]-m[0]
c[1]=c[1]-m[1]
c[2]=c[2]-m[2]
b.Z(0)
a=e.aa(b)
a.Z(0)
a0=b.aa(a)
a0.Z(0)
m=a.aP(d)
a1=a0.aP(d)
d=b.aP(d)
a2=a.a
a3=a2[0]
a4=a0.a
a5=a4[0]
a6=c[0]
a7=a2[1]
a8=a4[1]
a9=c[1]
a2=a2[2]
a4=a4[2]
c=c[2]
f[15]=1
f[14]=-d
f[13]=-a1
f[12]=-m
f[11]=0
f[10]=c
f[9]=a4
f[8]=a2
f[7]=0
f[6]=a9
f[5]=a8
f[4]=a7
f[3]=0
f[2]=a6
f[1]=a5
f[0]=a3
f[12]=r
f[13]=q
f[14]=k
k=s.f
q=k.a
q[0]=f[2]
q[1]=f[6]
q[2]=f[10]
s=-s.k1
k=Math.sqrt(k.gaS())
a=q[0]/k
a0=q[1]/k
b=q[2]/k
k=Math.cos(s)
s=Math.sin(s)
b0=1-k
b1=a*a*b0+k
q=b*s
b2=a*a0*b0-q
r=a0*s
b3=a*b*b0+r
b4=a0*a*b0+q
b5=a0*a0*b0+k
s=a*s
b6=a0*b*b0-s
b7=b*a*b0-r
b8=b*a0*b0+s
b9=b*b*b0+k
k=f[0]
s=f[4]
r=f[8]
q=f[1]
a3=f[5]
a5=f[9]
a6=f[2]
a7=f[6]
a8=f[10]
a9=f[3]
a2=f[7]
a4=f[11]
f[0]=k*b1+s*b4+r*b7
f[1]=q*b1+a3*b4+a5*b7
f[2]=a6*b1+a7*b4+a8*b7
f[3]=a9*b1+a2*b4+a4*b7
f[4]=k*b2+s*b5+r*b8
f[5]=q*b2+a3*b5+a5*b8
f[6]=a6*b2+a7*b5+a8*b8
f[7]=a9*b2+a2*b5+a4*b8
f[8]=k*b3+s*b6+r*b9
f[9]=q*b3+a3*b6+a5*b9
f[10]=a6*b3+a7*b6+a8*b9
f[11]=a9*b3+a2*b6+a4*b9
t.cQ(j,[this.d,this.f])
C.N.gdI(window).c2(this)
this.b.d1(c0)},
$S:function(){return{func:1,v:true,args:[P.V]}}}
J.a.prototype.cG=J.a.prototype.k
J.br.prototype.cI=J.br.prototype.k
P.R.prototype.cH=P.R.prototype.av
W.Y.prototype.ay=W.Y.prototype.H
W.bM.prototype.cJ=W.bM.prototype.N;(function installTearOffs(){installTearOff(H.aX.prototype,"gei",0,0,0,null,["$0"],["au"],1)
installTearOff(H.ad.prototype,"gcq",0,0,0,null,["$1"],["E"],3)
installTearOff(H.aW.prototype,"ge0",0,0,0,null,["$1"],["P"],3)
installTearOff(P,"mi",1,0,0,null,["$1"],["m_"],2)
installTearOff(P,"mj",1,0,0,null,["$1"],["m0"],2)
installTearOff(P,"mk",1,0,0,null,["$1"],["m1"],2)
installTearOff(P,"k6",1,0,0,null,["$0"],["mg"],1)
installTearOff(P.aq.prototype,"gde",0,0,0,null,["$2","$1"],["an","df"],6)
installTearOff(P,"mp",1,0,0,null,["$2"],["la"],7)
installTearOff(W,"mv",1,0,0,null,["$1"],["ll"],8)
installTearOff(W,"mw",1,0,0,null,["$4"],["m5"],5)
installTearOff(W,"mx",1,0,0,null,["$4"],["m6"],5)
installTearOff(W.cY.prototype,"gaT",0,1,0,null,["$0"],["aU"],4)
installTearOff(W.db.prototype,"gaT",0,1,0,null,["$0"],["aU"],4)
installTearOff(N,"k8",1,0,0,null,["$0"],["mK"],1)
installTearOff(X,"mE",1,0,0,null,["$1"],["lf"],0)
installTearOff(X,"mI",1,0,0,null,["$1"],["lj"],0)
installTearOff(X,"mG",1,0,0,null,["$1"],["lh"],0)
installTearOff(X,"mH",1,0,0,null,["$1"],["li"],0)
installTearOff(X,"mF",1,0,0,null,["$1"],["lg"],0)})();(function inheritance(){inherit(P.o,null)
var t=P.o
inherit(H.iE,t)
inherit(J.a,t)
inherit(J.dy,t)
inherit(P.R,t)
inherit(H.cR,t)
inherit(P.cM,t)
inherit(H.c3,t)
inherit(H.b1,t)
inherit(H.ht,t)
inherit(H.aX,t)
inherit(H.h6,t)
inherit(H.aY,t)
inherit(H.hs,t)
inherit(H.h_,t)
inherit(H.b7,t)
inherit(H.fz,t)
inherit(H.ai,t)
inherit(H.ad,t)
inherit(H.aW,t)
inherit(H.f4,t)
inherit(H.fF,t)
inherit(P.b3,t)
inherit(H.dk,t)
inherit(H.dc,t)
inherit(H.ab,t)
inherit(H.ep,t)
inherit(H.er,t)
inherit(P.h1,t)
inherit(P.dh,t)
inherit(P.aq,t)
inherit(P.df,t)
inherit(P.fl,t)
inherit(P.fm,t)
inherit(P.b0,t)
inherit(P.hR,t)
inherit(P.fb,t)
inherit(P.hq,t)
inherit(P.bK,t)
inherit(P.bB,t)
inherit(P.v,t)
inherit(P.hr,t)
inherit(P.aA,t)
inherit(P.H,t)
inherit(P.bg,t)
inherit(P.V,t)
inherit(P.aJ,t)
inherit(P.d7,t)
inherit(P.hb,t)
inherit(P.dP,t)
inherit(P.c,t)
inherit(P.av,t)
inherit(P.b6,t)
inherit(P.bD,t)
inherit(P.r,t)
inherit(P.bE,t)
inherit(W.dG,t)
inherit(W.fZ,t)
inherit(W.bJ,t)
inherit(W.x,t)
inherit(W.d_,t)
inherit(W.bM,t)
inherit(W.hJ,t)
inherit(W.c4,t)
inherit(W.cZ,t)
inherit(W.hD,t)
inherit(W.dl,t)
inherit(P.hv,t)
inherit(G.eD,t)
inherit(G.dE,t)
inherit(G.e5,t)
inherit(G.eb,t)
inherit(G.da,t)
inherit(G.d9,t)
inherit(G.i,t)
inherit(G.d5,t)
inherit(R.fi,t)
inherit(T.bt,t)
inherit(T.ak,t)
inherit(T.G,t)
inherit(T.E,t)
inherit(T.b8,t)
t=J.a
inherit(J.el,t)
inherit(J.cP,t)
inherit(J.br,t)
inherit(J.aK,t)
inherit(J.b4,t)
inherit(J.aL,t)
inherit(H.bv,t)
inherit(H.aO,t)
inherit(W.h,t)
inherit(W.W,t)
inherit(W.bW,t)
inherit(W.dC,t)
inherit(W.w,t)
inherit(W.c7,t)
inherit(W.dI,t)
inherit(W.dJ,t)
inherit(W.c0,t)
inherit(W.c1,t)
inherit(W.cb,t)
inherit(W.dL,t)
inherit(W.j,t)
inherit(W.ce,t)
inherit(W.a_,t)
inherit(W.ec,t)
inherit(W.cr,t)
inherit(W.et,t)
inherit(W.ez,t)
inherit(W.a1,t)
inherit(W.ch,t)
inherit(W.eL,t)
inherit(W.cY,t)
inherit(W.cg,t)
inherit(W.eU,t)
inherit(W.ax,t)
inherit(W.a2,t)
inherit(W.cj,t)
inherit(W.d2,t)
inherit(W.a4,t)
inherit(W.c8,t)
inherit(W.a5,t)
inherit(W.fk,t)
inherit(W.S,t)
inherit(W.cq,t)
inherit(W.fy,t)
inherit(W.a7,t)
inherit(W.ci,t)
inherit(W.fD,t)
inherit(W.db,t)
inherit(W.fK,t)
inherit(W.fP,t)
inherit(W.h0,t)
inherit(W.co,t)
inherit(W.cp,t)
inherit(W.cn,t)
inherit(W.cl,t)
inherit(W.ck,t)
inherit(W.ca,t)
inherit(W.hP,t)
inherit(W.hQ,t)
inherit(P.aj,t)
inherit(P.c9,t)
inherit(P.al,t)
inherit(P.cf,t)
inherit(P.f_,t)
inherit(P.cd,t)
inherit(P.am,t)
inherit(P.cc,t)
inherit(P.fO,t)
inherit(P.dz,t)
inherit(P.f6,t)
inherit(P.f7,t)
inherit(P.hO,t)
inherit(P.cm,t)
t=J.br
inherit(J.eY,t)
inherit(J.aT,t)
inherit(J.aM,t)
inherit(J.iD,J.aK)
t=J.b4
inherit(J.cO,t)
inherit(J.cN,t)
t=P.R
inherit(H.b,t)
inherit(H.cS,t)
inherit(H.de,t)
t=H.b
inherit(H.b5,t)
inherit(H.eq,t)
inherit(H.dO,H.cS)
t=P.cM
inherit(H.eu,t)
inherit(H.fR,t)
t=H.b5
inherit(H.bs,t)
inherit(P.es,t)
t=H.b1
inherit(H.ip,t)
inherit(H.iq,t)
inherit(H.ho,t)
inherit(H.h7,t)
inherit(H.eh,t)
inherit(H.ei,t)
inherit(H.hu,t)
inherit(H.fA,t)
inherit(H.fB,t)
inherit(H.ir,t)
inherit(H.i7,t)
inherit(H.i8,t)
inherit(H.i9,t)
inherit(H.ia,t)
inherit(H.ib,t)
inherit(H.fu,t)
inherit(H.em,t)
inherit(H.i3,t)
inherit(H.i4,t)
inherit(H.i5,t)
inherit(P.fW,t)
inherit(P.fV,t)
inherit(P.fX,t)
inherit(P.fY,t)
inherit(P.hc,t)
inherit(P.hg,t)
inherit(P.hd,t)
inherit(P.he,t)
inherit(P.hf,t)
inherit(P.hj,t)
inherit(P.hk,t)
inherit(P.hi,t)
inherit(P.hh,t)
inherit(P.fn,t)
inherit(P.fo,t)
inherit(P.hU,t)
inherit(P.hy,t)
inherit(P.hx,t)
inherit(P.hz,t)
inherit(P.ev,t)
inherit(P.dM,t)
inherit(P.dN,t)
inherit(W.hW,t)
inherit(W.fS,t)
inherit(W.ha,t)
inherit(W.eN,t)
inherit(W.eM,t)
inherit(W.hF,t)
inherit(W.hG,t)
inherit(W.hM,t)
inherit(W.hN,t)
inherit(P.hX,t)
inherit(B.ij,t)
inherit(B.ik,t)
inherit(B.il,t)
inherit(B.im,t)
inherit(B.io,t)
inherit(B.eQ,t)
inherit(B.eR,t)
inherit(B.eS,t)
inherit(B.eT,t)
inherit(A.i2,t)
inherit(N.ie,t)
t=H.h_
inherit(H.b9,t)
inherit(H.bN,t)
t=P.b3
inherit(H.d0,t)
inherit(H.en,t)
inherit(H.fJ,t)
inherit(H.fH,t)
inherit(H.dD,t)
inherit(H.f8,t)
inherit(P.bV,t)
inherit(P.d1,t)
inherit(P.ah,t)
inherit(P.t,t)
inherit(P.dd,t)
inherit(P.aw,t)
inherit(P.X,t)
inherit(P.dH,t)
t=H.fu
inherit(H.fh,t)
inherit(H.bf,t)
inherit(H.fU,P.bV)
inherit(H.cU,H.aO)
t=H.cU
inherit(H.bx,t)
inherit(H.bw,t)
inherit(H.by,H.bx)
inherit(H.cV,H.by)
inherit(H.bz,H.bw)
inherit(H.cW,H.bz)
t=H.cV
inherit(H.cT,t)
inherit(H.eE,t)
t=H.cW
inherit(H.eF,t)
inherit(H.eG,t)
inherit(H.eH,t)
inherit(H.eI,t)
inherit(H.eJ,t)
inherit(H.cX,t)
inherit(H.eK,t)
inherit(P.hK,P.h1)
inherit(P.hw,P.hR)
inherit(P.di,H.ab)
inherit(P.fa,P.fb)
inherit(P.hn,P.fa)
inherit(P.hp,P.hn)
inherit(P.cQ,P.bB)
t=P.V
inherit(P.K,t)
inherit(P.p,t)
t=P.ah
inherit(P.d3,t)
inherit(P.ef,t)
t=W.h
inherit(W.q,t)
inherit(W.bj,t)
inherit(W.dF,t)
inherit(W.e7,t)
inherit(W.bq,t)
inherit(W.bu,t)
inherit(W.f0,t)
inherit(W.d4,t)
inherit(W.fc,t)
inherit(W.a3,t)
inherit(W.bl,t)
inherit(W.a6,t)
inherit(W.T,t)
inherit(W.bk,t)
inherit(W.fM,t)
inherit(W.fQ,t)
inherit(W.bG,t)
inherit(W.fT,t)
inherit(W.aV,t)
inherit(W.hE,t)
t=W.q
inherit(W.Y,t)
inherit(W.aI,t)
inherit(W.bh,t)
inherit(W.c_,t)
inherit(W.h3,t)
t=W.Y
inherit(W.k,t)
inherit(P.B,t)
t=W.k
inherit(W.dw,t)
inherit(W.dx,t)
inherit(W.aH,t)
inherit(W.bX,t)
inherit(W.bZ,t)
inherit(W.e9,t)
inherit(W.c5,t)
inherit(W.eg,t)
inherit(W.f9,t)
inherit(W.d8,t)
inherit(W.fs,t)
inherit(W.ft,t)
inherit(W.bF,t)
inherit(W.hm,t)
inherit(W.bo,W.bj)
inherit(W.dA,W.bo)
inherit(W.b2,W.c7)
inherit(W.cK,W.cb)
inherit(W.dK,W.cK)
inherit(W.Z,W.bW)
inherit(W.cI,W.ce)
inherit(W.e6,W.cI)
inherit(W.cC,W.cr)
inherit(W.bp,W.cC)
inherit(W.c6,W.bh)
inherit(W.ed,W.bq)
inherit(W.ay,W.j)
t=W.ay
inherit(W.aN,t)
inherit(W.L,t)
inherit(W.aS,t)
inherit(W.eB,W.bu)
inherit(W.cE,W.ch)
inherit(W.eC,W.cE)
inherit(W.P,P.cQ)
inherit(W.cw,W.cg)
inherit(W.bA,W.cw)
inherit(W.eX,W.ax)
inherit(W.ct,W.cj)
inherit(W.eZ,W.ct)
inherit(W.bn,W.bl)
inherit(W.fd,W.bn)
inherit(W.cF,W.c8)
inherit(W.ff,W.cF)
inherit(W.cH,W.cq)
inherit(W.fw,W.cH)
inherit(W.bm,W.bk)
inherit(W.fx,W.bm)
inherit(W.cs,W.ci)
inherit(W.fC,W.cs)
inherit(W.aU,W.L)
inherit(W.cL,W.co)
inherit(W.dg,W.cL)
inherit(W.cx,W.cp)
inherit(W.h2,W.cx)
inherit(W.h4,W.c1)
inherit(W.cu,W.cn)
inherit(W.hl,W.cu)
inherit(W.cz,W.cl)
inherit(W.dj,W.cz)
inherit(W.cB,W.ck)
inherit(W.hH,W.cB)
inherit(W.cD,W.ca)
inherit(W.hI,W.cD)
inherit(W.h5,W.fZ)
inherit(W.h8,P.fl)
inherit(W.iN,W.h8)
inherit(W.h9,P.fm)
inherit(W.hL,W.bM)
inherit(P.J,P.hv)
t=P.B
inherit(P.I,t)
inherit(P.aG,t)
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
inherit(P.e8,t)
inherit(P.ew,t)
inherit(P.ex,t)
inherit(P.eV,t)
inherit(P.bC,t)
inherit(P.fr,t)
inherit(P.fN,t)
inherit(P.bI,t)
inherit(P.hA,t)
inherit(P.hB,t)
inherit(P.hC,t)
t=P.I
inherit(P.dv,t)
inherit(P.ee,t)
inherit(P.fq,t)
inherit(P.aR,t)
inherit(P.fL,t)
inherit(P.cv,P.c9)
inherit(P.eo,P.cv)
inherit(P.cG,P.cf)
inherit(P.eO,P.cG)
inherit(P.cA,P.cd)
inherit(P.fp,P.cA)
inherit(P.fv,P.aR)
inherit(P.cy,P.cc)
inherit(P.fE,P.cy)
inherit(P.cJ,P.cm)
inherit(P.fg,P.cJ)
t=G.eD
inherit(G.fe,t)
inherit(G.fI,t)
inherit(G.eA,t)
inherit(G.f5,t)
inherit(G.dB,G.fe)
inherit(B.eP,G.dB)
t=G.fI
inherit(G.ey,t)
inherit(G.eW,t)
inherit(R.fj,R.fi)
mixin(H.bw,P.v)
mixin(H.bx,P.v)
mixin(H.by,H.c3)
mixin(H.bz,H.c3)
mixin(P.bB,P.v)
mixin(W.bj,P.v)
mixin(W.bk,P.v)
mixin(W.bl,P.v)
mixin(W.bm,W.x)
mixin(W.bn,W.x)
mixin(W.bo,W.x)
mixin(W.c7,W.dG)
mixin(W.cr,P.v)
mixin(W.ca,P.v)
mixin(W.ck,P.v)
mixin(W.cl,P.v)
mixin(W.cn,P.v)
mixin(W.co,P.v)
mixin(W.cp,P.v)
mixin(W.cq,P.v)
mixin(W.c8,P.v)
mixin(W.cb,P.v)
mixin(W.ce,P.v)
mixin(W.cg,P.v)
mixin(W.ch,P.v)
mixin(W.ci,P.v)
mixin(W.cj,P.v)
mixin(W.cs,W.x)
mixin(W.ct,W.x)
mixin(W.cu,W.x)
mixin(W.cE,W.x)
mixin(W.cF,W.x)
mixin(W.cC,W.x)
mixin(W.cD,W.x)
mixin(W.cI,W.x)
mixin(W.cK,W.x)
mixin(W.cL,W.x)
mixin(W.cw,W.x)
mixin(W.cx,W.x)
mixin(W.cz,W.x)
mixin(W.cB,W.x)
mixin(W.cH,W.x)
mixin(P.cd,P.v)
mixin(P.cc,P.v)
mixin(P.c9,P.v)
mixin(P.cf,P.v)
mixin(P.cv,W.x)
mixin(P.cy,W.x)
mixin(P.cA,W.x)
mixin(P.cG,W.x)
mixin(P.cm,P.v)
mixin(P.cJ,W.x)})();(function constants(){C.i=W.aH.prototype
C.x=W.bX.prototype
C.n=W.b2.prototype
C.j=W.bZ.prototype
C.y=W.c0.prototype
C.z=W.c5.prototype
C.f=W.c6.prototype
C.A=J.a.prototype
C.a=J.aK.prototype
C.p=J.cN.prototype
C.b=J.cO.prototype
C.d=J.cP.prototype
C.c=J.b4.prototype
C.h=J.aL.prototype
C.H=J.aM.prototype
C.L=H.cT.prototype
C.t=W.bA.prototype
C.u=J.eY.prototype
C.v=W.d2.prototype
C.w=W.d8.prototype
C.m=J.aT.prototype
C.M=W.aU.prototype
C.N=W.bG.prototype
C.e=new P.hw()
C.o=new P.aJ(0)
C.B=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.C=function(hooks) {
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
C.q=function(hooks) { return hooks; }

C.D=function(getTagFallback) {
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
C.E=function() {
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
C.F=function(hooks) {
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
C.G=function(hooks) {
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
C.r=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.I=H.F(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.r])
C.J=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.K=makeConstList([])
C.k=H.F(makeConstList(["bind","if","ref","repeat","syntax"]),[P.r])
C.l=H.F(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.r])})();(function staticFields(){$.jE="$cachedFunction"
$.jF="$cachedInvocation"
$.jk=null
$.ji=null
$.iP=!1
$.iV=null
$.k3=null
$.kn=null
$.i_=null
$.i6=null
$.iW=null
$.ba=null
$.bO=null
$.bP=null
$.iQ=!1
$.z=C.e
$.jw=0
$.at=null
$.iz=null
$.jv=null
$.ju=null
$.js=null
$.jr=null
$.jq=null
$.jp=null
$.mm=0
$.mn=0
$.j_=0
$.kl=0
$.bT=0
$.bU=0
$.mR=!1
$.kd=0})();(function lazyInitializers(){lazy($,"jo","$get$jo",function(){return H.ki("_$dart_dartClosure")})
lazy($,"iF","$get$iF",function(){return H.ki("_$dart_js")})
lazy($,"jy","$get$jy",function(){return H.lw()})
lazy($,"jz","$get$jz",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.jw
$.jw=t+1
t="expando$key$"+t}return new P.dP(null,t,[P.p])})
lazy($,"jJ","$get$jJ",function(){return H.an(H.fG({
toString:function(){return"$receiver$"}}))})
lazy($,"jK","$get$jK",function(){return H.an(H.fG({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"jL","$get$jL",function(){return H.an(H.fG(null))})
lazy($,"jM","$get$jM",function(){return H.an(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jQ","$get$jQ",function(){return H.an(H.fG(void 0))})
lazy($,"jR","$get$jR",function(){return H.an(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jO","$get$jO",function(){return H.an(H.jP(null))})
lazy($,"jN","$get$jN",function(){return H.an(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"jT","$get$jT",function(){return H.an(H.jP(void 0))})
lazy($,"jS","$get$jS",function(){return H.an(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"iM","$get$iM",function(){return P.lZ()})
lazy($,"bQ","$get$bQ",function(){return[]})
lazy($,"jn","$get$jn",function(){return{}})
lazy($,"jX","$get$jX",function(){return P.iH(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"iO","$get$iO",function(){return P.a0()})
lazy($,"hZ","$get$hZ",function(){return P.jA(P.p,P.aA)})
lazy($,"bS","$get$bS",function(){return P.jA(P.r,P.aA)})
lazy($,"jH","$get$jH",function(){return new G.da(1281,0,4294967295)})
lazy($,"jg","$get$jg",function(){return new G.d9(1281,1281,1281)})
lazy($,"a8","$get$a8",function(){return P.au(["cBlendEquation",new G.i("","",0),"cDepthWrite",new G.i("","",0),"cDepthTest",new G.i("","",0),"cStencilFunc",new G.i("","",0),"tPosition",new G.i("vec3","",0),"tSpeed",new G.i("vec3","",0),"tForce",new G.i("vec3","",0),"aColors",new G.i("vec3","per vertex color",0),"aColorAlpha",new G.i("vec4","per vertex color",0),"aPosition",new G.i("vec3","vertex coordinates",0),"aTexUV",new G.i("vec2","texture uvs",0),"aNormal",new G.i("vec3","vertex normals",0),"aBinormal",new G.i("vec3","vertex binormals",0),"aCenter",new G.i("vec4","for wireframe",0),"aPointSize",new G.i("float","",0),"aBoneIndex",new G.i("vec4","",0),"aBoneWeight",new G.i("vec4","",0),"aTangent",new G.i("vec3","vertex tangents",0),"aBitangent",new G.i("vec3","vertex btangents",0),"iaRotation",new G.i("vec4","",0),"iaTranslation",new G.i("vec3","",0),"iaScale",new G.i("vec3","",0),"vColor",new G.i("vec3","per vertex color",0),"vTexUV",new G.i("vec2","",0),"vLightWeighting",new G.i("vec3","",0),"vNormal",new G.i("vec3","",0),"vPosition",new G.i("vec3","vertex coordinates",0),"vPositionFromLight",new G.i("vec4","delta from light",0),"vCenter",new G.i("vec4","for wireframe",0),"vDepth",new G.i("float","depth for shadowmaps",0),"uTransformationMatrix",new G.i("mat4","",0),"uModelMatrix",new G.i("mat4","",0),"uNormalMatrix",new G.i("mat3","",0),"uConvolutionMatrix",new G.i("mat3","",0),"uPerspectiveViewMatrix",new G.i("mat4","",0),"uLightPerspectiveViewMatrix",new G.i("mat4","",0),"uShadowMap",new G.i("sampler2DShadow","",0),"uTexture",new G.i("sampler2D","",0),"uTexture2",new G.i("sampler2D","",0),"uTexture3",new G.i("sampler2D","",0),"uTexture4",new G.i("sampler2D","",0),"uSpecularMap",new G.i("sampler2D","",0),"uNormalMap",new G.i("sampler2D","",0),"uBumpMap",new G.i("sampler2D","",0),"uDepthMap",new G.i("sampler2D","",0),"uCubeTexture",new G.i("samplerCube","",0),"uAnimationTable",new G.i("sampler2D","",0),"uTime",new G.i("float","time since program start in sec",0),"uCameraNear",new G.i("float","",0),"uCameraFar",new G.i("float","",0),"uFogNear",new G.i("float","",0),"uFogFar",new G.i("float","",0),"uPointSize",new G.i("float","",0),"uScale",new G.i("float","",0),"uAngle",new G.i("float","",0),"uCanvasSize",new G.i("vec2","",0),"uCenter2",new G.i("vec2","",0),"uCutOff",new G.i("float","",0),"uShininess",new G.i("float","",0),"uShadowBias",new G.i("float","",0),"uOpacity",new G.i("float","",0),"uColor",new G.i("vec3","",0),"uAmbientDiffuse",new G.i("vec3","",0),"uColorEmissive",new G.i("vec3","",0),"uColorSpecular",new G.i("vec3","",0),"uColorDiffuse",new G.i("vec3","",0),"uColorAlpha",new G.i("vec4","",0),"uColorAlpha2",new G.i("vec4","",0),"uEyePosition",new G.i("vec3","",0),"uMaterial",new G.i("mat4","",0),"uRange",new G.i("vec2","",0),"uDirection",new G.i("vec2","",0),"uBoneMatrices",new G.i("mat4","",128),"uLightDescs",new G.i("mat4","",4),"uLightCount",new G.i("float","",0),"uLightTypes",new G.i("float","",4),"uBumpScale",new G.i("float","for bump maps",0),"uNormalScale",new G.i("float","for normal maps",0)])})
lazy($,"jm","$get$jm",function(){return T.lX(1,1,0)})
lazy($,"jC","$get$jC",function(){return P.au(["Cosine",X.mE(),"Sine",X.mI(),"Quadratic",X.mH(),"Cubic",X.mF(),"Linear",X.mG()])})
lazy($,"kp","$get$kp",function(){var t=new G.d5("SolidColor",null,[],[],[],[],0,P.a0())
t.cL(["aPosition"])
t.b9(["uPerspectiveViewMatrix","uModelMatrix"])
t.be(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"ko","$get$ko",function(){var t=new G.d5("SolidColorF",null,[],[],[],[],0,P.a0())
t.b9(["uColor"])
t.be(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"kf","$get$kf",function(){return C.f.a_(W.dn(),"#width")})
lazy($,"kc","$get$kc",function(){return C.f.a_(W.dn(),"#height")})
lazy($,"ke","$get$ke",function(){return C.f.a_(W.dn(),"#segments")})
lazy($,"ka","$get$ka",function(){return C.f.a_(W.dn(),"#easingWidth")})
lazy($,"k9","$get$k9",function(){return C.f.a_(W.dn(),"#easingHeight")})
lazy($,"iU","$get$iU",function(){return X.lb(20,10,!0)})
lazy($,"kb","$get$kb",function(){return X.lq($.$get$iU())})})()
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
mangledGlobalNames:{p:"int",K:"double",V:"num",r:"String",aA:"bool",b6:"Null",c:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.K,args:[P.K]},{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.q},{func:1,ret:P.aA,args:[W.Y,P.r,P.r,W.bJ]},{func:1,v:true,args:[P.o],opt:[P.bD]},{func:1,ret:P.p,args:[P.H,P.H]},{func:1,ret:P.r,args:[W.h]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CalcLength:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,KeywordValue:J.a,LengthValue:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NumberValue:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,PositionValue:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SimpleLength:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StyleValue:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,TransformValue:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bv,DataView:H.aO,ArrayBufferView:H.aO,Float32Array:H.cT,Float64Array:H.eE,Int16Array:H.eF,Int32Array:H.eG,Int8Array:H.eH,Uint16Array:H.eI,Uint32Array:H.eJ,Uint8ClampedArray:H.cX,CanvasPixelArray:H.cX,Uint8Array:H.eK,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLImageElement:W.k,HTMLKeygenElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMenuItemElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,HTMLAnchorElement:W.dw,HTMLAreaElement:W.dx,AudioTrack:W.W,AudioTrackList:W.dA,Blob:W.bW,HTMLBodyElement:W.aH,HTMLCanvasElement:W.bX,CanvasRenderingContext2D:W.dC,CDATASection:W.aI,CharacterData:W.aI,Comment:W.aI,ProcessingInstruction:W.aI,Text:W.aI,CompositorWorker:W.dF,CSSCharsetRule:W.w,CSSFontFaceRule:W.w,CSSGroupingRule:W.w,CSSImportRule:W.w,CSSKeyframeRule:W.w,MozCSSKeyframeRule:W.w,WebKitCSSKeyframeRule:W.w,CSSKeyframesRule:W.w,MozCSSKeyframesRule:W.w,WebKitCSSKeyframesRule:W.w,CSSMediaRule:W.w,CSSNamespaceRule:W.w,CSSPageRule:W.w,CSSRule:W.w,CSSStyleRule:W.w,CSSSupportsRule:W.w,CSSViewportRule:W.w,CSSStyleDeclaration:W.b2,MSStyleCSSProperties:W.b2,CSS2Properties:W.b2,DataTransferItemList:W.dI,HTMLDivElement:W.bZ,XMLDocument:W.bh,Document:W.bh,DocumentFragment:W.c_,ShadowRoot:W.c_,DOMException:W.dJ,DOMImplementation:W.c0,DOMRectReadOnly:W.c1,DOMStringList:W.dK,DOMTokenList:W.dL,Element:W.Y,AnimationEvent:W.j,AnimationPlayerEvent:W.j,ApplicationCacheErrorEvent:W.j,AutocompleteErrorEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceLightEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,GamepadEvent:W.j,GeofencingEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RelatedEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCIceCandidateEvent:W.j,RTCPeerConnectionIceEvent:W.j,SecurityPolicyViolationEvent:W.j,ServicePortConnectEvent:W.j,ServiceWorkerMessageEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.Z,FileList:W.e6,FileWriter:W.e7,HTMLFormElement:W.e9,Gamepad:W.a_,HTMLHeadElement:W.c5,History:W.ec,HTMLCollection:W.bp,HTMLFormControlsCollection:W.bp,HTMLOptionsCollection:W.bp,HTMLDocument:W.c6,XMLHttpRequest:W.ed,XMLHttpRequestUpload:W.bq,XMLHttpRequestEventTarget:W.bq,HTMLInputElement:W.eg,KeyboardEvent:W.aN,Location:W.et,MediaList:W.ez,MIDIOutput:W.eB,MIDIInput:W.bu,MIDIPort:W.bu,MimeType:W.a1,MimeTypeArray:W.eC,PointerEvent:W.L,MouseEvent:W.L,DragEvent:W.L,Navigator:W.eL,Attr:W.q,Node:W.q,NodeIterator:W.cY,NodeList:W.bA,RadioNodeList:W.bA,Path2D:W.eU,Perspective:W.eX,Plugin:W.a2,PluginArray:W.eZ,PresentationConnection:W.f0,Range:W.d2,RTCDataChannel:W.d4,DataChannel:W.d4,HTMLSelectElement:W.f9,SharedWorker:W.fc,SourceBuffer:W.a3,SourceBufferList:W.fd,SpeechGrammar:W.a4,SpeechGrammarList:W.ff,SpeechRecognitionResult:W.a5,Storage:W.fk,CSSStyleSheet:W.S,StyleSheet:W.S,HTMLTableElement:W.d8,HTMLTableRowElement:W.fs,HTMLTableSectionElement:W.ft,HTMLTemplateElement:W.bF,TextTrack:W.a6,TextTrackCue:W.T,VTTCue:W.T,TextTrackCueList:W.fw,TextTrackList:W.fx,TimeRanges:W.fy,Touch:W.a7,TouchEvent:W.aS,TouchList:W.fC,TrackDefaultList:W.fD,Matrix:W.ax,Rotation:W.ax,Skew:W.ax,Translation:W.ax,TransformComponent:W.ax,TreeWalker:W.db,CompositionEvent:W.ay,FocusEvent:W.ay,TextEvent:W.ay,SVGZoomEvent:W.ay,UIEvent:W.ay,URL:W.fK,VideoTrackList:W.fM,VTTRegionList:W.fP,WebSocket:W.fQ,WheelEvent:W.aU,Window:W.bG,DOMWindow:W.bG,Worker:W.fT,CompositorWorkerGlobalScope:W.aV,DedicatedWorkerGlobalScope:W.aV,ServiceWorkerGlobalScope:W.aV,SharedWorkerGlobalScope:W.aV,WorkerGlobalScope:W.aV,ClientRect:W.h0,ClientRectList:W.dg,DOMRectList:W.dg,CSSRuleList:W.h2,DocumentType:W.h3,DOMRect:W.h4,GamepadList:W.hl,HTMLFrameSetElement:W.hm,NamedNodeMap:W.dj,MozNamedAttrMap:W.dj,ServiceWorker:W.hE,SpeechRecognitionResultList:W.hH,StyleSheetList:W.hI,WorkerLocation:W.hP,WorkerNavigator:W.hQ,SVGAElement:P.dv,SVGAnimateElement:P.aG,SVGAnimateMotionElement:P.aG,SVGAnimateTransformElement:P.aG,SVGAnimationElement:P.aG,SVGSetElement:P.aG,SVGFEBlendElement:P.dQ,SVGFEColorMatrixElement:P.dR,SVGFEComponentTransferElement:P.dS,SVGFECompositeElement:P.dT,SVGFEConvolveMatrixElement:P.dU,SVGFEDiffuseLightingElement:P.dV,SVGFEDisplacementMapElement:P.dW,SVGFEFloodElement:P.dX,SVGFEGaussianBlurElement:P.dY,SVGFEImageElement:P.dZ,SVGFEMergeElement:P.e_,SVGFEMorphologyElement:P.e0,SVGFEOffsetElement:P.e1,SVGFESpecularLightingElement:P.e2,SVGFETileElement:P.e3,SVGFETurbulenceElement:P.e4,SVGFilterElement:P.e8,SVGCircleElement:P.I,SVGClipPathElement:P.I,SVGDefsElement:P.I,SVGEllipseElement:P.I,SVGForeignObjectElement:P.I,SVGGElement:P.I,SVGGeometryElement:P.I,SVGLineElement:P.I,SVGPathElement:P.I,SVGPolygonElement:P.I,SVGPolylineElement:P.I,SVGRectElement:P.I,SVGSwitchElement:P.I,SVGGraphicsElement:P.I,SVGImageElement:P.ee,SVGLength:P.aj,SVGLengthList:P.eo,SVGMarkerElement:P.ew,SVGMaskElement:P.ex,SVGNumber:P.al,SVGNumberList:P.eO,SVGPatternElement:P.eV,SVGPointList:P.f_,SVGScriptElement:P.bC,SVGStringList:P.fp,SVGDescElement:P.B,SVGDiscardElement:P.B,SVGFEDistantLightElement:P.B,SVGFEFuncAElement:P.B,SVGFEFuncBElement:P.B,SVGFEFuncGElement:P.B,SVGFEFuncRElement:P.B,SVGFEMergeNodeElement:P.B,SVGFEPointLightElement:P.B,SVGFESpotLightElement:P.B,SVGMetadataElement:P.B,SVGStopElement:P.B,SVGStyleElement:P.B,SVGTitleElement:P.B,SVGComponentTransferFunctionElement:P.B,SVGElement:P.B,SVGSVGElement:P.fq,SVGSymbolElement:P.fr,SVGTSpanElement:P.aR,SVGTextElement:P.aR,SVGTextPositioningElement:P.aR,SVGTextContentElement:P.aR,SVGTextPathElement:P.fv,SVGTransform:P.am,SVGTransformList:P.fE,SVGUseElement:P.fL,SVGViewElement:P.fN,SVGViewSpec:P.fO,SVGLinearGradientElement:P.bI,SVGRadialGradientElement:P.bI,SVGGradientElement:P.bI,SVGCursorElement:P.hA,SVGFEDropShadowElement:P.hB,SVGMPathElement:P.hC,AudioBuffer:P.dz,WebGLRenderingContext:P.f6,WebGL2RenderingContext:P.f7,WebGL2RenderingContextBase:P.hO,SQLResultSetRowList:P.fg})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CalcLength:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,KeywordValue:true,LengthValue:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NumberValue:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,PositionValue:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SimpleLength:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,StyleValue:true,SyncManager:true,TextMetrics:true,TrackDefault:true,TransformValue:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Rotation:true,Skew:true,Translation:true,TransformComponent:false,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.cU.$nativeSuperclassTag="ArrayBufferView"
H.bx.$nativeSuperclassTag="ArrayBufferView"
H.by.$nativeSuperclassTag="ArrayBufferView"
H.cV.$nativeSuperclassTag="ArrayBufferView"
H.bw.$nativeSuperclassTag="ArrayBufferView"
H.bz.$nativeSuperclassTag="ArrayBufferView"
H.cW.$nativeSuperclassTag="ArrayBufferView"
W.bj.$nativeSuperclassTag="EventTarget"
W.bo.$nativeSuperclassTag="EventTarget"
W.bl.$nativeSuperclassTag="EventTarget"
W.bn.$nativeSuperclassTag="EventTarget"
W.bk.$nativeSuperclassTag="EventTarget"
W.bm.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.kq(N.k8(),b)},[])
else (function(b){H.kq(N.k8(),b)})([])})})()