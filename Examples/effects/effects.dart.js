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
a[c]=function(){a[c]=function(){H.oo(b)}
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
return d?function(e){if(t===null)t=H.jO(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jO(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jO(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={jx:function jx(a){this.a=a},
jC:function(a,b,c,d){if(!!a.$isc)return new H.ei(a,b,[c,d])
return new H.dg(a,b,[c,d])},
eT:function(){return new P.aj("No element")},
n7:function(){return new P.aj("Too many elements")},
n6:function(){return new P.aj("Too few elements")},
dv:function(a,b,c,d){if(c-b<=32)H.no(a,b,c,d)
else H.nn(a,b,c,d)},
no:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.a2(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.aq(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
nn:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.K(t+1,6)
r=a3+s
q=a4-s
p=C.b.K(a3+a4,2)
o=p-s
n=p+s
t=J.a2(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.aq(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.aq(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.aq(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.aq(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.aq(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.aq(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.aq(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.aq(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.aq(a5.$2(j,i),0)){h=i
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
H.dv(a2,a3,g-2,a5)
H.dv(a2,f+2,a4,a5)
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
break}}H.dv(a2,g,f,a5)}else H.dv(a2,g,f,a5)},
c:function c(){},
bi:function bi(){},
df:function df(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dg:function dg(a,b,c){this.a=a
this.b=b
this.$ti=c},
ei:function ei(a,b,c){this.a=a
this.b=b
this.$ti=c},
f5:function f5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bK:function bK(a,b,c){this.a=a
this.b=b
this.$ti=c},
dC:function dC(a,b,c){this.a=a
this.b=b
this.$ti=c},
hy:function hy(a,b,c){this.a=a
this.b=b
this.$ti=c},
cq:function cq(){},
dL:function(a,b){var t=a.ai(b)
if(!u.globalState.d.cy)u.globalState.f.ao()
return t},
j6:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
lP:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.u(s).$isb)throw H.e(P.dZ("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.ii(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$kH()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hR(P.jB(null,H.b7),0)
r=P.o
s.seQ(new H.ah(0,null,null,null,null,null,0,[r,H.b6]))
s.seT(new H.ah(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.ih()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.n1,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.nB)}if(u.globalState.x)return
s=u.globalState.a++
q=P.ai(null,null,null,r)
p=new H.bl(0,null,!1)
o=new H.b6(s,new H.ah(0,null,null,null,null,null,0,[r,H.bl]),q,u.createNewIsolate(),p,new H.at(H.ja()),new H.at(H.ja()),!1,!1,[],P.ai(null,null,null,null),null,null,!1,!0,P.ai(null,null,null,null))
q.l(0,0)
o.bC(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bu(a,{func:1,args:[,]}))o.ai(new H.jg(t,a))
else if(H.bu(a,{func:1,args:[,,]}))o.ai(new H.jh(t,a))
else o.ai(a)
u.globalState.f.ao()},
nB:function(a){var t=P.aX(["command","print","msg",a])
return new H.am(!0,P.c5(null,P.o)).L(t)},
n3:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.n4()
return},
n4:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.v("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.v('Cannot extract URI from "'+t+'"'))},
n1:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b5(!0,[]).Z(b.data)
s=J.a2(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.o7(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b5(!0,[]).Z(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b5(!0,[]).Z(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.o
j=P.ai(null,null,null,k)
i=new H.bl(0,null,!1)
h=new H.b6(s,new H.ah(0,null,null,null,null,null,0,[k,H.bl]),j,u.createNewIsolate(),i,new H.at(H.ja()),new H.at(H.ja()),!1,!1,[],P.ai(null,null,null,null),null,null,!1,!0,P.ai(null,null,null,null))
j.l(0,0)
h.bC(0,i)
u.globalState.f.a.W(0,new H.b7(h,new H.eQ(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.ao()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.ms(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ao()
break
case"close":u.globalState.ch.an(0,$.$get$kI().h(0,a))
a.terminate()
u.globalState.f.ao()
break
case"log":H.n0(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aX(["command","print","msg",t])
k=new H.am(!0,P.c5(null,P.o)).L(k)
s.toString
self.postMessage(k)}else P.ap(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
n0:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aX(["command","log","msg",a])
r=new H.am(!0,P.c5(null,P.o)).L(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.U(q)
t=H.aD(q)
s=P.cp(t)
throw H.e(s)}},
n2:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kQ=$.kQ+("_"+s)
$.kR=$.kR+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.G(0,["spawned",new H.bq(s,r),q,t.r])
r=new H.eR(a,b,c,d,t)
if(e){t.bY(q,q)
u.globalState.f.a.W(0,new H.b7(t,r,"start isolate"))}else r.$0()},
np:function(a,b){var t=new H.hf(!0,!1,null)
t.dw(a,b)
return t},
nD:function(a){return new H.b5(!0,[]).Z(new H.am(!1,P.c5(null,P.o)).L(a))},
jg:function jg(a,b){this.a=a
this.b=b},
jh:function jh(a,b){this.a=a
this.b=b},
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
_.cx=a5},
b6:function b6(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
ic:function ic(a,b){this.a=a
this.b=b},
hR:function hR(a,b){this.a=a
this.b=b},
hS:function hS(a){this.a=a},
b7:function b7(a,b,c){this.a=a
this.b=b
this.c=c},
ih:function ih(){},
eQ:function eQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eR:function eR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hK:function hK(){},
bq:function bq(a,b){this.b=a
this.a=b},
ik:function ik(a,b){this.a=a
this.b=b},
c7:function c7(a,b,c){this.b=a
this.c=b
this.a=c},
bl:function bl(a,b,c){this.a=a
this.b=b
this.c=c},
hf:function hf(a,b,c){this.a=a
this.b=b
this.c=c},
hg:function hg(a,b){this.a=a
this.b=b},
hh:function hh(a,b){this.a=a
this.b=b},
at:function at(a){this.a=a},
am:function am(a,b){this.a=a
this.b=b},
b5:function b5(a,b){this.a=a
this.b=b},
o0:function(a){return u.types[a]},
o9:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.u(a).$isq},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aN(a)
if(typeof t!=="string")throw H.e(H.T(a))
return t},
nl:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fK(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aZ:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
kP:function(a,b){throw H.e(new P.bG(a,null,null))},
jE:function(a,b,c){var t,s
H.lr(a)
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.kP(a,c)
s=t[3]
if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.kP(a,c)},
kO:function(a,b){throw H.e(new P.bG("Invalid double",a,null))},
b_:function(a,b){var t,s
H.lr(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.kO(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.mA(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.kO(a,b)}return t},
dr:function(a){var t,s,r,q,p,o,n,m
t=J.u(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.C||!!J.u(a).$isb2){p=C.t(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.e.ac(q,0)===36)q=C.e.da(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dO(H.iV(a),0,null),u.mangledGlobalNames)},
fG:function(a){return"Instance of '"+H.dr(a)+"'"},
V:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nj:function(a){return a.b?H.V(a).getUTCFullYear()+0:H.V(a).getFullYear()+0},
nh:function(a){return a.b?H.V(a).getUTCMonth()+1:H.V(a).getMonth()+1},
nd:function(a){return a.b?H.V(a).getUTCDate()+0:H.V(a).getDate()+0},
ne:function(a){return a.b?H.V(a).getUTCHours()+0:H.V(a).getHours()+0},
ng:function(a){return a.b?H.V(a).getUTCMinutes()+0:H.V(a).getMinutes()+0},
ni:function(a){return a.b?H.V(a).getUTCSeconds()+0:H.V(a).getSeconds()+0},
nf:function(a){return a.b?H.V(a).getUTCMilliseconds()+0:H.V(a).getMilliseconds()+0},
jD:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.T(a))
return a[b]},
kS:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.T(a))
a[b]=c},
P:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.as(!0,b,"index",null)
t=J.dU(a)
if(b<0||C.b.cT(b,t))return P.E(b,a,"index",null,t)
return P.fH(b,"index",null)},
T:function(a){return new P.as(!0,a,null,null)},
lr:function(a){if(typeof a!=="string")throw H.e(H.T(a))
return a},
e:function(a){var t
if(a==null)a=new P.bk()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lQ})
t.name=""}else t.toString=H.lQ
return t},
lQ:function(){return J.aN(this.dartException)},
G:function(a){throw H.e(a)},
J:function(a){throw H.e(new P.a5(a))},
ay:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hm(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
hn:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
l4:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jz:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eY(a,s,t?null:b.receiver)},
U:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.ji(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aT(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jz(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.dq(p,null))}}if(a instanceof TypeError){o=$.$get$kZ()
n=$.$get$l_()
m=$.$get$l0()
l=$.$get$l1()
k=$.$get$l5()
j=$.$get$l6()
i=$.$get$l3()
$.$get$l2()
h=$.$get$l8()
g=$.$get$l7()
f=o.S(s)
if(f!=null)return t.$1(H.jz(s,f))
else{f=n.S(s)
if(f!=null){f.method="call"
return t.$1(H.jz(s,f))}else{f=m.S(s)
if(f==null){f=l.S(s)
if(f==null){f=k.S(s)
if(f==null){f=j.S(s)
if(f==null){f=i.S(s)
if(f==null){f=l.S(s)
if(f==null){f=h.S(s)
if(f==null){f=g.S(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.dq(s,f==null?null:f.method))}}return t.$1(new H.hq(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dw()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.as(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dw()
return a},
aD:function(a){var t
if(a==null)return new H.dJ(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dJ(a,null)},
od:function(a){if(a==null||typeof a!='object')return J.ar(a)
else return H.aZ(a)},
nZ:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
o8:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dL(b,new H.j1(a))
case 1:return H.dL(b,new H.j2(a,d))
case 2:return H.dL(b,new H.j3(a,d,e))
case 3:return H.dL(b,new H.j4(a,d,e,f))
case 4:return H.dL(b,new H.j5(a,d,e,f,g))}throw H.e(P.cp("Unsupported number of arguments for wrapped closure"))},
b9:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.o8)
a.$identity=t
return t},
mL:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.u(c).$isb){t.$reflectionInfo=c
r=H.nl(t).r}else r=c
q=d?Object.create(new H.fX().constructor.prototype):Object.create(new H.by(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.kg(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.o0,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.kd:H.js
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.kg(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
mI:function(a,b,c,d){var t=H.js
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
kg:function(a,b,c){var t,s,r,q
if(c)return H.mK(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.mI(s,b==null?r!=null:b!==r,t,b)
return q},
mJ:function(a,b,c,d){var t,s
t=H.js
s=H.kd
switch(b?-1:a){case 0:throw H.e(new H.fP("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
mK:function(a,b){var t,s,r,q
H.mH()
t=$.kc
if(t==null){t=H.kb("receiver")
$.kc=t}s=b.$stubName
r=b.length
q=a[s]
t=H.mJ(r,b==null?q!=null:b!==q,s,b)
return t},
jO:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.u(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.mL(a,b,t,!!d,e,f)},
js:function(a){return a.a},
kd:function(a){return a.c},
mH:function(){var t=$.ke
if(t==null){t=H.kb("self")
$.ke=t}return t},
kb:function(a){var t,s,r,q,p
t=new H.by("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
oD:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.az(a,"String"))},
a1:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.az(a,"double"))},
oC:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.az(a,"num"))},
nR:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.az(a,"bool"))},
o7:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.az(a,"int"))},
of:function(a,b){throw H.e(H.az(a,b.substring(3)))},
oe:function(a,b){var t=J.a2(b)
throw H.e(H.kf(H.dr(a),t.aG(b,3,t.gk(b))))},
jR:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.u(a)[b])return a
H.of(a,b)},
aE:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.u(a)[b]
else t=!0
if(t)return a
H.oe(a,b)},
oB:function(a){if(a==null)return a
if(!!J.u(a).$isb)return a
throw H.e(H.az(a,"List"))},
lz:function(a){var t=J.u(a)
return"$S" in t?t.$S():null},
bu:function(a,b){var t
if(a==null)return!1
t=H.lz(a)
return t==null?!1:H.lH(t,b)},
oz:function(a,b){var t,s
if(a==null)return a
if($.jL)return a
$.jL=!0
try{if(H.bu(a,b))return a
t=H.aM(b,null)
s=H.az(a,t)
throw H.e(s)}finally{$.jL=!1}},
az:function(a,b){return new H.ho("type '"+H.dr(a)+"' is not a subtype of type '"+b+"'")},
kf:function(a,b){return new H.e4("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
an:function(a){if(!0===a)return!1
if(!!J.u(a).$isjv)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.az(a,"bool"))},
aB:function(a){throw H.e(new H.hE(a))},
d:function(a){if(H.an(a))throw H.e(new P.cf(null))},
oo:function(a){throw H.e(new P.e8(a))},
ja:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
lE:function(a){return u.getIsolateTag(a)},
O:function(a){return new H.aJ(a,null)},
I:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iV:function(a){if(a==null)return
return a.$ti},
lF:function(a,b){return H.jV(a["$as"+H.f(b)],H.iV(a))},
ao:function(a,b,c){var t,s
t=H.lF(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aL:function(a,b){var t,s
t=H.iV(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aM:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dO(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aM(t,b)
return H.nF(a,b)}return"unknown-reified-type"},
nF:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aM(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aM(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aM(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.nY(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aM(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
dO:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bX("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aM(o,c)}return p?"":"<"+s.j(0)+">"},
iW:function(a){var t,s
if(a instanceof H.bd){t=H.lz(a)
if(t!=null)return H.aM(t,null)}s=J.u(a).constructor.name
if(a==null)return s
return s+H.dO(a.$ti,0,null)},
jV:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jS(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jS(a,null,b)
return b},
cb:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iV(a)
s=J.u(a)
if(s[b]==null)return!1
return H.lp(H.jV(s[d],t),c)},
dP:function(a,b,c,d){if(a==null)return a
if(H.cb(a,b,c,d))return a
throw H.e(H.kf(H.dr(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dO(c,0,null),u.mangledGlobalNames)))},
ow:function(a,b,c,d){if(a==null)return a
if(H.cb(a,b,c,d))return a
throw H.e(H.az(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dO(c,0,null),u.mangledGlobalNames)))},
lp:function(a,b){var t,s,r,q,p
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
if(!H.a3(r,b[p]))return!1}return!0},
ox:function(a,b,c){return H.jS(a,b,H.lF(b,c))},
a3:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aY")return!0
if('func' in b)return H.lH(a,b)
if('func' in a)return b.name==="jv"||b.name==="p"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.d(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.d(!0)
q=b[0]}else q=b
if(q!==s){p=H.aM(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.lp(H.jV(o,t),r)},
lo:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.a3(o,n)||H.a3(n,o)))return!1}return!0},
nN:function(a,b){var t,s,r,q,p,o
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
if(!(H.a3(p,o)||H.a3(o,p)))return!1}return!0},
lH:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.d('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.a3(t,s)||H.a3(s,t)))return!1}r=a.args
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
if(n===m){if(!H.lo(r,q,!1))return!1
if(!H.lo(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
g=r[h]
H.d(i)
f=q[h]
if(!(H.a3(g,f)||H.a3(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=q[e]
if(!(H.a3(g,f)||H.a3(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=o[e]
if(!(H.a3(g,f)||H.a3(f,g)))return!1}}return H.nN(a.named,b.named)},
jS:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
oE:function(a){var t=$.jP
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
oA:function(a){return H.aZ(a)},
oy:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oa:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.p))
t=$.jP.$1(a)
s=$.iS[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.j0[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.ln.$2(a,t)
if(t!=null){s=$.iS[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.j0[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.jT(r)
$.iS[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.j0[t]=r
return r}if(p==="-"){o=H.jT(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lM(a,r)
if(p==="*")throw H.e(new P.c0(t))
if(u.leafTags[t]===true){o=H.jT(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lM(a,r)},
lM:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.j9(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
jT:function(a){return J.j9(a,!1,null,!!a.$isq)},
oc:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.j9(t,!1,null,!!t.$isq)
else return J.j9(t,c,null,null)},
o5:function(){if(!0===$.jQ)return
$.jQ=!0
H.o6()},
o6:function(){var t,s,r,q,p,o,n,m
$.iS=Object.create(null)
$.j0=Object.create(null)
H.o4()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lN.$1(p)
if(o!=null){n=H.oc(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
o4:function(){var t,s,r,q,p,o,n
t=C.G()
t=H.bt(C.D,H.bt(C.I,H.bt(C.r,H.bt(C.r,H.bt(C.H,H.bt(C.E,H.bt(C.F(C.t),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jP=new H.iY(p)
$.ln=new H.iZ(o)
$.lN=new H.j_(n)},
bt:function(a,b){return a(b)||b},
kL:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.e(new P.bG("Illegal RegExp pattern ("+String(q)+")",a,null))},
nC:function(a,b){var t=new H.ij(a,b)
t.dH(a,b)
return t},
oj:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
ol:function(a,b,c,d){var t,s,r
t=b.dU(a,d)
if(t==null)return a
s=t.b
r=s.index
return H.on(a,r,r+s[0].length,c)},
ok:function(a,b,c){var t,s
t=b.gbQ()
t.lastIndex=0
s=a.replace(t,c.replace(/\$/g,"$$$$"))
return s},
om:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.ol(a,b,c,d)},
on:function(a,b,c,d){var t,s
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fK:function fK(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hm:function hm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dq:function dq(a,b){this.a=a
this.b=b},
eY:function eY(a,b,c){this.a=a
this.b=b
this.c=c},
hq:function hq(a){this.a=a},
ji:function ji(a){this.a=a},
dJ:function dJ(a,b){this.a=a
this.b=b},
j1:function j1(a){this.a=a},
j2:function j2(a,b){this.a=a
this.b=b},
j3:function j3(a,b,c){this.a=a
this.b=b
this.c=c},
j4:function j4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j5:function j5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bd:function bd(){},
h9:function h9(){},
fX:function fX(){},
by:function by(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ho:function ho(a){this.a=a},
e4:function e4(a){this.a=a},
fP:function fP(a){this.a=a},
hE:function hE(a){this.a=a},
aJ:function aJ(a,b){this.a=a
this.b=b},
ah:function ah(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eX:function eX(a){this.a=a},
f_:function f_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
f0:function f0(a,b){this.a=a
this.$ti=b},
f1:function f1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iY:function iY(a){this.a=a},
iZ:function iZ(a){this.a=a},
j_:function j_(a){this.a=a},
eW:function eW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ij:function ij(a,b){this.a=a
this.b=b},
w:function(a){return a},
iJ:function(a){var t,s,r
if(!!J.u(a).$isn)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bO:function bO(){},
bj:function bj(){},
ff:function ff(){},
di:function di(){},
dj:function dj(){},
dk:function dk(){},
dh:function dh(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
dl:function dl(){},
fm:function fm(){},
bP:function bP(){},
bQ:function bQ(){},
bR:function bR(){},
bS:function bS(){},
nY:function(a){var t=H.I(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
bv:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
u:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dd.prototype
return J.dc.prototype}if(typeof a=="string")return J.aU.prototype
if(a==null)return J.eV.prototype
if(typeof a=="boolean")return J.eU.prototype
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.p)return a
return J.iU(a)},
j9:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iU:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jQ==null){H.o5()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.c0("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jy()]
if(p!=null)return p
p=H.oa(a)
if(p!=null)return p
if(typeof a=="function")return C.J
s=Object.getPrototypeOf(a)
if(s==null)return C.w
if(s===Object.prototype)return C.w
if(typeof q=="function"){Object.defineProperty(q,$.$get$jy(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
kK:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
n8:function(a,b){var t,s
for(t=a.length;b<t;){s=C.e.ac(a,b)
if(s!==32&&s!==13&&!J.kK(s))break;++b}return b},
n9:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.e.c9(a,t)
if(s!==32&&s!==13&&!J.kK(s))break}return b},
a2:function(a){if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.p)return a
return J.iU(a)},
ba:function(a){if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.p)return a
return J.iU(a)},
lD:function(a){if(typeof a=="number")return J.bh.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.b2.prototype
return a},
o_:function(a){if(typeof a=="number")return J.bh.prototype
if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.b2.prototype
return a},
iT:function(a){if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.b2.prototype
return a},
j:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.p)return a
return J.iU(a)},
B:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.u(a).A(a,b)},
aq:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.lD(a).aE(a,b)},
lT:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lD(a).aq(a,b)},
bb:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.o9(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a2(a).h(a,b)},
lU:function(a,b,c){return J.ba(a).i(a,b,c)},
lV:function(a,b,c,d){return J.j(a).dK(a,b,c,d)},
jW:function(a,b){return J.iT(a).ac(a,b)},
bw:function(a,b){return J.j(a).e1(a,b)},
lW:function(a,b,c){return J.j(a).e2(a,b,c)},
jX:function(a,b){return J.j(a).bX(a,b)},
jj:function(a,b){return J.j(a).R(a,b)},
jY:function(a,b,c){return J.j(a).c_(a,b,c)},
lX:function(a,b){return J.j(a).eg(a,b)},
dQ:function(a,b,c){return J.j(a).c0(a,b,c)},
jk:function(a,b,c){return J.j(a).c1(a,b,c)},
dR:function(a,b,c){return J.j(a).c2(a,b,c)},
dS:function(a,b){return J.j(a).ej(a,b)},
lY:function(a,b){return J.j(a).c3(a,b)},
lZ:function(a,b,c){return J.j(a).c4(a,b,c)},
jZ:function(a,b,c,d){return J.j(a).c5(a,b,c,d)},
m_:function(a,b){return J.j(a).c6(a,b)},
m0:function(a,b){return J.ba(a).c7(a,b)},
m1:function(a,b,c,d,e){return J.j(a).c8(a,b,c,d,e)},
m2:function(a,b){return J.o_(a).T(a,b)},
jl:function(a,b,c){return J.a2(a).eo(a,b,c)},
jm:function(a){return J.j(a).cb(a)},
m3:function(a){return J.j(a).cc(a)},
m4:function(a){return J.j(a).cd(a)},
m5:function(a){return J.j(a).cf(a)},
m6:function(a){return J.j(a).eu(a)},
m7:function(a,b){return J.j(a).ci(a,b)},
jn:function(a,b){return J.j(a).cj(a,b)},
m8:function(a,b,c,d){return J.j(a).ck(a,b,c,d)},
m9:function(a,b,c,d,e){return J.j(a).eB(a,b,c,d,e)},
ma:function(a,b,c,d,e){return J.j(a).cl(a,b,c,d,e)},
mb:function(a,b,c,d,e,f){return J.j(a).eC(a,b,c,d,e,f)},
mc:function(a,b){return J.ba(a).u(a,b)},
dT:function(a,b){return J.j(a).cm(a,b)},
md:function(a,b){return J.j(a).cn(a,b)},
me:function(a){return J.j(a).eD(a)},
mf:function(a,b){return J.ba(a).ay(a,b)},
k_:function(a,b,c,d,e,f){return J.j(a).cq(a,b,c,d,e,f)},
mg:function(a){return J.j(a).gef(a)},
ar:function(a){return J.u(a).gv(a)},
bx:function(a){return J.ba(a).gw(a)},
dU:function(a){return J.a2(a).gk(a)},
mh:function(a){return J.j(a).gb3(a)},
mi:function(a){return J.u(a).gB(a)},
mj:function(a){return J.j(a).gf4(a)},
mk:function(a){return J.j(a).gaB(a)},
jo:function(a){return J.j(a).gn(a)},
jp:function(a){return J.j(a).gp(a)},
k0:function(a){return J.j(a).gP(a)},
jq:function(a,b){return J.j(a).a8(a,b)},
ml:function(a){return J.j(a).aD(a)},
mm:function(a){return J.j(a).ba(a)},
mn:function(a,b){return J.j(a).bb(a,b)},
mo:function(a,b,c){return J.j(a).bc(a,b,c)},
k1:function(a,b,c){return J.j(a).bf(a,b,c)},
k2:function(a,b,c){return J.j(a).cr(a,b,c)},
mp:function(a,b){return J.j(a).cs(a,b)},
mq:function(a,b){return J.ba(a).cu(a,b)},
mr:function(a){return J.ba(a).eZ(a)},
ms:function(a,b){return J.j(a).G(a,b)},
mt:function(a,b,c){return J.j(a).d3(a,b,c)},
mu:function(a,b){return J.iT(a).d8(a,b)},
mv:function(a,b,c,d){return J.j(a).bl(a,b,c,d)},
mw:function(a,b,c,d){return J.j(a).cB(a,b,c,d)},
dV:function(a,b,c,d){return J.j(a).cC(a,b,c,d)},
mx:function(a,b,c,d,e,f){return J.j(a).f5(a,b,c,d,e,f)},
my:function(a){return J.iT(a).f8(a)},
aN:function(a){return J.u(a).j(a)},
mz:function(a,b,c,d){return J.j(a).fa(a,b,c,d)},
mA:function(a){return J.iT(a).fb(a)},
mB:function(a,b,c){return J.j(a).cD(a,b,c)},
mC:function(a,b,c){return J.j(a).cE(a,b,c)},
jr:function(a,b,c){return J.j(a).cF(a,b,c)},
mD:function(a,b,c){return J.j(a).cG(a,b,c)},
k3:function(a,b,c){return J.j(a).cH(a,b,c)},
k4:function(a,b,c){return J.j(a).cI(a,b,c)},
k5:function(a,b,c){return J.j(a).cJ(a,b,c)},
k6:function(a,b,c,d){return J.j(a).cK(a,b,c,d)},
k7:function(a,b,c,d){return J.j(a).cL(a,b,c,d)},
mE:function(a,b){return J.j(a).cN(a,b)},
mF:function(a,b,c){return J.j(a).fc(a,b,c)},
k8:function(a,b,c,d,e,f,g){return J.j(a).cP(a,b,c,d,e,f,g)},
mG:function(a,b,c,d,e){return J.j(a).cQ(a,b,c,d,e)},
a:function a(){},
eU:function eU(){},
eV:function eV(){},
bJ:function bJ(){},
fA:function fA(){},
b2:function b2(){},
aV:function aV(){},
aT:function aT(a){this.$ti=a},
jw:function jw(a){this.$ti=a},
e_:function e_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bh:function bh(){},
dd:function dd(){},
dc:function dc(){},
aU:function aU(){}},P={
ns:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.nO()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.b9(new P.hG(t),1)).observe(s,{childList:true})
return new P.hF(t,s,r)}else if(self.setImmediate!=null)return P.nP()
return P.nQ()},
nt:function(a){++u.globalState.f.b
self.scheduleImmediate(H.b9(new P.hH(a),0))},
nu:function(a){++u.globalState.f.b
self.setImmediate(H.b9(new P.hI(a),0))},
nv:function(a){P.jG(C.o,a)},
nI:function(a,b){if(H.bu(a,{func:1,args:[P.aY,P.aY]})){b.toString
return a}else{b.toString
return a}},
mX:function(a,b,c){var t
if(a==null)a=new P.bk()
t=$.z
if(t!==C.d)t.toString
t=new P.S(0,t,null,[c])
t.bE(a,b)
return t},
mY:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.S(0,$.z,null,[P.b])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eL(t,!1,b,s)
try{for(m=0,l=0;m<1;++m){q=a[m]
p=l
q.b7(new P.eK(t,!1,b,s,p),r)
l=++t.b}if(l===0){l=new P.S(0,$.z,null,[null])
l.bD(C.u)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.U(j)
n=H.aD(j)
if(t.b===0||!1)return P.mX(o,n,null)
else{t.c=o
t.d=n}}return s},
le:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.S))
H.d(b.a===0)
b.a=1
try{a.b7(new P.i0(b),new P.i1(b))}catch(r){t=H.U(r)
s=H.aD(r)
P.og(new P.i2(b,t,s))}},
i_:function(a,b){var t,s,r,q
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
P.bp(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bR(q)}},
bp:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.iK(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bp(t.a,b)}s=t.a
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
P.iK(null,null,p,o,s)
return}s=$.z
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.z
H.d(l==null?s!=null:l!==s)
j=$.z
$.z=l
i=j}else i=null
s=b.c
if(s===8)new P.i7(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.i6(r,b,m).$0()}else if((s&2)!==0)new P.i5(t,r,b).$0()
if(i!=null){H.d(!0)
$.z=i}s=r.b
if(!!J.u(s).$isbg){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.ag(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.i_(s,o)
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
nH:function(){var t,s
for(;t=$.br,t!=null;){$.c9=null
s=t.b
$.br=s
if(s==null)$.c8=null
t.a.$0()}},
nL:function(){$.jM=!0
try{P.nH()}finally{$.c9=null
$.jM=!1
if($.br!=null)$.$get$jI().$1(P.lq())}},
ll:function(a){var t=new P.dD(a,null)
if($.br==null){$.c8=t
$.br=t
if(!$.jM)$.$get$jI().$1(P.lq())}else{$.c8.b=t
$.c8=t}},
nK:function(a){var t,s,r
t=$.br
if(t==null){P.ll(a)
$.c9=$.c8
return}s=new P.dD(a,null)
r=$.c9
if(r==null){s.b=t
$.c9=s
$.br=s}else{s.b=r.b
r.b=s
$.c9=s
if(s.b==null)$.c8=s}},
og:function(a){var t=$.z
if(C.d===t){P.bs(null,null,C.d,a)
return}t.toString
P.bs(null,null,t,t.aW(a))},
nq:function(a,b){var t=$.z
if(t===C.d){t.toString
return P.jG(a,b)}return P.jG(a,t.aW(b))},
jG:function(a,b){var t=C.b.K(a.a,1000)
return H.np(t<0?0:t,b)},
jH:function(a){var t,s
H.d(a!=null)
t=$.z
H.d(a==null?t!=null:a!==t)
s=$.z
$.z=a
return s},
iK:function(a,b,c,d,e){var t={}
t.a=d
P.nK(new P.iL(t,e))},
lj:function(a,b,c,d){var t,s
if($.z===c)return d.$0()
t=P.jH(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.z=s}},
lk:function(a,b,c,d,e){var t,s
if($.z===c)return d.$1(e)
t=P.jH(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.z=s}},
nJ:function(a,b,c,d,e,f){var t,s
if($.z===c)return d.$2(e,f)
t=P.jH(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.z=s}},
bs:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.aW(d):c.eh(d)
P.ll(d)},
hG:function hG(a){this.a=a},
hF:function hF(a,b,c){this.a=a
this.b=b
this.c=c},
hH:function hH(a){this.a=a},
hI:function hI(a){this.a=a},
eL:function eL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eK:function eK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hM:function hM(){},
dE:function dE(a,b){this.a=a
this.$ti=b},
iB:function iB(a,b){this.a=a
this.$ti=b},
dG:function dG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
S:function S(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hX:function hX(a,b){this.a=a
this.b=b},
i4:function i4(a,b){this.a=a
this.b=b},
i0:function i0(a){this.a=a},
i1:function i1(a){this.a=a},
i2:function i2(a,b,c){this.a=a
this.b=b
this.c=c},
hZ:function hZ(a,b){this.a=a
this.b=b},
i3:function i3(a,b){this.a=a
this.b=b},
hY:function hY(a,b,c){this.a=a
this.b=b
this.c=c},
i7:function i7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i8:function i8(a){this.a=a},
i6:function i6(a,b,c){this.a=a
this.b=b
this.c=c},
i5:function i5(a,b,c){this.a=a
this.b=b
this.c=c},
dD:function dD(a,b){this.a=a
this.b=b},
h0:function h0(){},
h2:function h2(a){this.a=a},
h3:function h3(a,b){this.a=a
this.b=b},
h1:function h1(){},
bc:function bc(a,b){this.a=a
this.b=b},
iI:function iI(){},
iL:function iL(a,b){this.a=a
this.b=b},
im:function im(){},
ip:function ip(a,b){this.a=a
this.b=b},
io:function io(a,b){this.a=a
this.b=b},
iq:function iq(a,b){this.a=a
this.b=b},
kM:function(a,b){return new H.ah(0,null,null,null,null,null,0,[a,b])},
m:function(){return new H.ah(0,null,null,null,null,null,0,[null,null])},
aX:function(a){return H.nZ(a,new H.ah(0,null,null,null,null,null,0,[null,null]))},
c5:function(a,b){return new P.dH(0,null,null,null,null,null,0,[a,b])},
nA:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
n5:function(a,b,c){var t,s
if(P.jN(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$ca()
C.a.l(s,a)
try{P.nG(a,t)}finally{H.d(C.a.gb_(s)===a)
s.pop()}s=P.kX(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eS:function(a,b,c){var t,s,r
if(P.jN(a))return b+"..."+c
t=new P.bX(b)
s=$.$get$ca()
C.a.l(s,a)
try{r=t
r.a=P.kX(r.ga4(),a,", ")}finally{H.d(C.a.gb_(s)===a)
s.pop()}s=t
s.a=s.ga4()+c
s=t.ga4()
return s.charCodeAt(0)==0?s:s},
jN:function(a){var t,s
for(t=0;s=$.$get$ca(),t<s.length;++t)if(a===s[t])return!0
return!1},
nG:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gw(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.q())return
q=H.f(t.gt())
C.a.l(b,q)
s+=q.length+2;++r}if(!t.q()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gt();++r
if(!t.q()){if(r<=4){C.a.l(b,H.f(n))
return}p=H.f(n)
o=b.pop()
s+=p.length+2}else{m=t.gt();++r
H.d(r<100)
for(;t.q();n=m,m=l){l=t.gt();++r
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
ai:function(a,b,c,d){return new P.id(0,null,null,null,null,null,0,[d])},
jA:function(a,b){var t,s
t=P.ai(null,null,null,b)
for(s=J.bx(a);s.q();)t.l(0,s.gt())
return t},
nb:function(a){var t,s,r
t={}
if(P.jN(a))return"{...}"
s=new P.bX("")
try{C.a.l($.$get$ca(),a)
r=s
r.a=r.ga4()+"{"
t.a=!0
a.ay(0,new P.f6(t,s))
t=s
t.a=t.ga4()+"}"}finally{t=$.$get$ca()
H.d(C.a.gb_(t)===a)
t.pop()}t=s.ga4()
return t.charCodeAt(0)==0?t:t},
jB:function(a,b){var t=new P.f2(null,0,0,0,[b])
t.dr(a,b)
return t},
dH:function dH(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
id:function id(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
ie:function ie(a,b,c){this.a=a
this.b=b
this.c=c},
c4:function c4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ib:function ib(){},
de:function de(){},
x:function x(){},
f6:function f6(a,b){this.a=a
this.b=b},
f2:function f2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ig:function ig(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fR:function fR(){},
fQ:function fQ(){},
bU:function bU(){},
kX:function(a,b,c){var t=J.bx(b)
if(!t.q())return a
if(c.length===0){do a+=H.f(t.gt())
while(t.q())}else{a+=H.f(t.gt())
for(;t.q();)a=a+c+H.f(t.gt())}return a},
mM:function(a,b){return J.m2(a,b)},
mN:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.f(t)
if(t>=10)return s+"00"+H.f(t)
return s+"000"+H.f(t)},
mO:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ci:function(a){if(a>=10)return""+a
return"0"+a},
mQ:function(a,b,c,d,e,f){return new P.aF(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
ju:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aN(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mT(a)},
mT:function(a){var t=J.u(a)
if(!!t.$isbd)return t.j(a)
return H.fG(a)},
dZ:function(a){return new P.as(!1,null,null,a)},
k9:function(a,b,c){return new P.as(!0,a,b,c)},
fH:function(a,b,c){return new P.dt(null,null,!0,a,b,"Value not in range")},
b0:function(a,b,c,d,e){return new P.dt(b,c,!0,a,d,"Invalid value")},
kT:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.b0(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.b0(b,a,c,"end",f))
return b},
E:function(a,b,c,d,e){var t=e!=null?e:J.dU(b)
return new P.eO(b,t,!0,a,c,"Index out of range")},
cp:function(a){return new P.hW(a)},
kN:function(a,b,c){var t,s
t=H.I([],[c])
for(s=J.bx(a);s.q();)C.a.l(t,s.gt())
return t},
ap:function(a){H.bv(H.f(a))},
kU:function(a,b,c){return new H.eW(a,H.kL(a,!1,!0,!1),null,null)},
aC:function aC(){},
L:function L(){},
aR:function aR(a,b){this.a=a
this.b=b},
Q:function Q(){},
aF:function aF(a){this.a=a},
ef:function ef(){},
eg:function eg(){},
bf:function bf(){},
cf:function cf(a){this.a=a},
bk:function bk(){},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dt:function dt(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eO:function eO(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
v:function v(a){this.a=a},
c0:function c0(a){this.a=a},
aj:function aj(a){this.a=a},
a5:function a5(a){this.a=a},
dw:function dw(){},
e8:function e8(a){this.a=a},
hW:function hW(a){this.a=a},
bG:function bG(a,b,c){this.a=a
this.b=b
this.c=c},
ej:function ej(a,b,c){this.a=a
this.b=b
this.$ti=c},
o:function o(){},
Z:function Z(){},
db:function db(){},
b:function b(){},
aI:function aI(){},
aY:function aY(){},
Y:function Y(){},
p:function p(){},
bW:function bW(){},
t:function t(){},
bX:function bX(a){this.a=a},
iQ:function(a){var t,s,r,q,p
if(a==null)return
t=P.m()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.J)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
nU:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.mf(a,new P.iN(t))
return t},
nV:function(a){var t,s
t=new P.S(0,$.z,null,[null])
s=new P.dE(t,[null])
a.then(H.b9(new P.iO(s),1))["catch"](H.b9(new P.iP(s),1))
return t},
kA:function(){var t=$.kz
if(t==null){t=J.jl(window.navigator.userAgent,"Opera",0)
$.kz=t}return t},
mP:function(){var t,s
t=$.kw
if(t!=null)return t
s=$.kx
if(s==null){s=J.jl(window.navigator.userAgent,"Firefox",0)
$.kx=s}if(s)t="-moz-"
else{s=$.ky
if(s==null){s=!P.kA()&&J.jl(window.navigator.userAgent,"Trident/",0)
$.ky=s}if(s)t="-ms-"
else t=P.kA()?"-o-":"-webkit-"}$.kw=t
return t},
hB:function hB(){},
hD:function hD(a,b){this.a=a
this.b=b},
iN:function iN(a){this.a=a},
hC:function hC(a,b,c){this.a=a
this.b=b
this.c=c},
iO:function iO(a){this.a=a},
iP:function iP(a){this.a=a},
il:function il(){},
M:function M(){},
dW:function dW(){},
aO:function aO(){},
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
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eG:function eG(){},
eI:function eI(){},
ag:function ag(){},
aH:function aH(){},
eN:function eN(){},
au:function au(){},
eZ:function eZ(){},
f7:function f7(){},
f8:function f8(){},
aw:function aw(){},
fq:function fq(){},
fx:function fx(){},
fC:function fC(){},
fD:function fD(){},
fI:function fI(){},
fJ:function fJ(){},
bV:function bV(){},
h4:function h4(){},
K:function K(){},
h5:function h5(){},
h6:function h6(){},
dy:function dy(){},
ha:function ha(){},
bZ:function bZ(){},
ax:function ax(){},
hk:function hk(){},
hs:function hs(){},
hu:function hu(){},
hv:function hv(){},
c2:function c2(){},
ir:function ir(){},
is:function is(){},
it:function it(){},
cA:function cA(){},
cy:function cy(){},
cF:function cF(){},
cJ:function cJ(){},
cT:function cT(){},
d1:function d1(){},
cY:function cY(){},
d_:function d_(){},
e0:function e0(){},
fM:function fM(){},
fN:function fN(){},
iF:function iF(){},
fW:function fW(){},
cz:function cz(){},
cW:function cW(){}},W={
nX:function(){return document},
mR:function(a,b,c){var t,s
t=document.body
s=(t&&C.i).O(t,a,b,c)
s.toString
t=new H.dC(new W.W(s),new W.iM(),[W.r])
return t.ga3(t)},
mS:function(a){return"wheel"},
bz:function(a){var t,s,r
t="element tag unavailable"
try{s=J.mj(a)
if(typeof s==="string")t=a.tagName}catch(r){H.U(r)}return t},
nw:function(a,b){return document.createElement(a)},
b8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lh:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
al:function(a,b,c,d,e){var t=W.lm(new W.hV(c))
t=new W.hU(0,a,b,t,!1,[e])
t.dE(a,b,c,!1,e)
return t},
lf:function(a){var t,s
t=document.createElement("a")
s=new W.iu(t,window.location)
s=new W.c3(s)
s.dF(a)
return s},
ny:function(a,b,c,d){return!0},
nz:function(a,b,c,d){var t,s,r,q,p
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
li:function(){var t=P.t
t=new W.iC(P.jA(C.k,t),P.ai(null,null,null,t),P.ai(null,null,null,t),P.ai(null,null,null,t),null)
t.dI(null,new H.bK(C.k,new W.iD(),[H.aL(C.k,0),null]),["TEMPLATE"],null)
return t},
nE:function(a){var t
if(!!J.u(a).$isaS)return a
t=new P.hC([],[],!1)
t.c=!0
return t.b9(a)},
lm:function(a){var t=$.z
if(t===C.d)return a
return t.ei(a)},
l:function l(){},
dX:function dX(){},
dY:function dY(){},
a4:function a4(){},
e1:function e1(){},
cg:function cg(){},
aP:function aP(){},
ch:function ch(){},
e3:function e3(){},
aQ:function aQ(){},
e6:function e6(){},
C:function C(){},
be:function be(){},
e7:function e7(){},
e9:function e9(){},
ea:function ea(){},
cj:function cj(){},
aS:function aS(){},
ck:function ck(){},
eb:function eb(){},
cl:function cl(){},
ec:function ec(){},
cm:function cm(){},
cn:function cn(){},
ed:function ed(){},
ee:function ee(){},
a6:function a6(){},
iM:function iM(){},
k:function k(){},
h:function h(){},
a7:function a7(){},
eE:function eE(){},
eF:function eF(){},
eJ:function eJ(){},
a8:function a8(){},
cu:function cu(){},
eM:function eM(){},
bH:function bH(){},
cv:function cv(){},
cw:function cw(){},
bI:function bI(){},
eP:function eP(){},
aW:function aW(){},
f4:function f4(){},
fa:function fa(){},
fc:function fc(){},
bN:function bN(){},
a9:function a9(){},
fd:function fd(){},
R:function R(){},
fn:function fn(){},
W:function W(a){this.a=a},
r:function r(){},
dm:function dm(){},
bT:function bT(){},
fw:function fw(){},
fz:function fz(){},
aa:function aa(){},
fB:function fB(){},
fE:function fE(){},
fF:function fF(){},
ds:function ds(){},
fO:function fO(){},
du:function du(){},
bm:function bm(){},
fS:function fS(){},
ab:function ab(){},
fT:function fT(){},
ac:function ac(){},
fV:function fV(){},
ad:function ad(){},
h_:function h_(){},
a_:function a_(){},
ak:function ak(){},
dx:function dx(){},
h7:function h7(){},
h8:function h8(){},
bY:function bY(){},
ae:function ae(){},
a0:function a0(){},
hb:function hb(){},
hc:function hc(){},
he:function he(){},
af:function af(){},
b1:function b1(){},
hi:function hi(){},
hj:function hj(){},
bn:function bn(){},
hl:function hl(){},
dB:function dB(){},
aK:function aK(){},
hr:function hr(){},
ht:function ht(){},
hw:function hw(){},
hx:function hx(){},
b3:function b3(){},
c1:function c1(){},
hz:function hz(a){this.a=a},
hA:function hA(){},
b4:function b4(){},
hL:function hL(){},
dF:function dF(){},
hN:function hN(){},
hO:function hO(){},
hP:function hP(){},
i9:function i9(){},
ia:function ia(){},
dI:function dI(){},
iv:function iv(){},
iy:function iy(){},
iz:function iz(){},
iG:function iG(){},
iH:function iH(){},
hJ:function hJ(){},
hQ:function hQ(a){this.a=a},
hT:function hT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jJ:function jJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hU:function hU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hV:function hV(a){this.a=a},
c3:function c3(a){this.a=a},
D:function D(){},
dp:function dp(a){this.a=a},
fp:function fp(a){this.a=a},
fo:function fo(a,b,c){this.a=a
this.b=b
this.c=c},
c6:function c6(){},
iw:function iw(){},
ix:function ix(){},
iC:function iC(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iD:function iD(){},
iA:function iA(){},
cr:function cr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dn:function dn(){},
iu:function iu(a,b){this.a=a
this.b=b},
dK:function dK(a){this.a=a},
iE:function iE(a){this.a=a},
bA:function bA(){},
bB:function bB(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
bF:function bF(){},
cx:function cx(){},
cR:function cR(){},
cD:function cD(){},
cK:function cK(){},
cL:function cL(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
cB:function cB(){},
cC:function cC(){},
cE:function cE(){},
cG:function cG(){},
cH:function cH(){},
cI:function cI(){},
cS:function cS(){},
cU:function cU(){},
d3:function d3(){},
d4:function d4(){},
d2:function d2(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
cV:function cV(){},
cX:function cX(){},
cZ:function cZ(){},
d0:function d0(){},
d5:function d5(){},
d6:function d6(){}},B={
oh:function(a){var t,s
t=document
s=W.aW
W.al(t,"keydown",new B.jb(),!1,s)
W.al(t,"keyup",new B.jc(),!1,s)
if(!$.oi)W.al(t,"mousemove",new B.jd(),!1,W.R)
s=W.R
W.al(t,"mousedown",new B.je(),!1,s)
W.al(t,"mouseup",new B.jf(),!1,s)},
nc:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.w(3))
s=$.$get$iR()
r=$.$get$cc()
q=new T.av(new Float32Array(H.w(16)))
q.ar()
q=new B.fr(a,b,c,0,new T.y(t),-0.02,s,r,q,new T.y(new Float32Array(H.w(3))),new T.y(new Float32Array(H.w(3))),new T.y(new Float32Array(H.w(3))),new T.y(new Float32Array(H.w(3))),"camera:orbit",!1,!0)
q.ds(a,b,c,d)
return q},
jb:function jb(){},
jc:function jc(){},
jd:function jd(){},
je:function je(){},
jf:function jf(){},
fr:function fr(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
fs:function fs(a){this.a=a},
ft:function ft(a){this.a=a},
fu:function fu(){},
fv:function fv(a){this.a=a}},G={
nr:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.am(t,"\n")},
ld:function(a,b,c){var t,s,r,q
t=J.j(a)
s=t.ce(a,b)
t.bj(a,s,c)
t.ca(a,s)
r=t.be(a,s,35713)
if(r!=null&&!r){q=t.bd(a,s)
P.ap("E:Compilation failed:")
P.ap("E:"+G.nr(c))
P.ap("E:Failure:")
P.ap(C.e.a7("E:",q))
throw H.e(q)}return s},
kE:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.jo(a[s])
b[t+1]=J.jp(a[s])
b[t+2]=J.k0(a[s])}return b},
mV:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.jo(a[s])
b[t+1]=J.jp(a[s])}return b},
mW:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.jo(a[s])
b[t+1]=J.jp(a[s])
b[t+2]=J.k0(a[s])
b[t+3]=J.mk(a[s])}return b},
mU:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.bb(a[s],0)
b[t+1]=J.bb(a[s],1)
b[t+2]=J.bb(a[s],2)
b[t+3]=J.bb(a[s],3)}return b},
nx:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gE(t),s=s.gw(s),r=b.x,q=[[P.b,P.o]],p=[P.Q],o=[T.aA],n=[T.y],m=[T.H];s.q();){l=s.gt()
if(!r.F(0,l)){k="Dropping unnecessary attribute: "+H.f(l)
if($.lC>0)H.bv("I: "+k)
continue}j=t.h(0,l)
switch($.$get$X().h(0,l).a){case"vec2":b.ab(l,G.mV(H.dP(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.ab(l,G.kE(H.dP(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.ab(l,G.mW(H.dP(j,"$isb",o,"$asb"),null),4)
break
case"float":b.ab(l,new Float32Array(H.iJ(H.dP(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.ab(l,G.mU(H.dP(j,"$isb",q,"$asb"),null),4)
break
default:if(H.an(!1))H.aB("unknown type for "+H.f(l)+" ["+J.mi(j[0]).j(0)+"] ["+new H.aJ(H.iW(j),null).j(0)+"] "+H.f(j))}}},
kF:function(a,b,c){var t,s,r,q,p,o,n,m
t=b.d
s=b.e.x
r=P.m()
q=J.m6(t.a)
p=new G.fb(t,q,4,r,s,null,0,-1,null,null,P.m(),"meshdata:"+a,!1,!0)
o=G.kE(c.d,null)
r.i(0,"aPosition",J.jm(t.a))
p.ch=o
p.br("aPosition",o,3)
n=$.$get$X().h(0,"aPosition")
if(n==null)H.G("Unknown canonical aPosition")
H.d(s.F(0,"aPosition"))
m=s.h(0,"aPosition")
J.dS(t.a,q)
t.co(0,m,0)
s=r.h(0,"aPosition")
r=n.bt()
J.dQ(t.a,34962,s)
J.k8(t.a,m,r,5126,!1,0,0)
s=c.dn()
p.y=J.jm(t.a)
H.d(p.ch!=null)
r=p.ch.length
if(r<768){p.saO(new Uint8Array(H.iJ(s)))
p.Q=5121}else if(r<196608){p.saO(new Uint16Array(H.iJ(s)))
p.Q=5123}else{p.saO(new Uint32Array(H.iJ(s)))
p.Q=5125}J.dS(t.a,q)
s=p.y
r=p.cx
q=J.u(r)
H.d(!!q.$isla||!!q.$islb||!!q.$islc)
J.dQ(t.a,34963,s)
J.jZ(t.a,34963,r,35048)
G.nx(c,p)
return p},
kV:function(a,b,c,d){var t=new G.fL(b,c,d,null,null,P.m(),P.m(),P.ai(null,null,null,P.t),null,a,!1,!0)
t.dt(a,b,c,d)
return t},
l9:function(a,b,c,d,e,f){var t=new G.hp(c,d,e,b,J.m5(a.a),3553,a,f)
t.dz(a,b,c,d,e,f)
return t},
fe:function fe(){},
A:function A(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
e2:function e2(){},
e5:function e5(a,b){this.a=a
this.b=b},
cs:function cs(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eC:function eC(a,b,c){this.a=a
this.b=b
this.c=c},
eD:function eD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ct:function ct(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dA:function dA(a,b,c){this.a=a
this.b=b
this.c=c},
dz:function dz(a,b,c){this.a=a
this.b=b
this.c=c},
f9:function f9(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
fb:function fb(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
fy:function fy(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
fL:function fL(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
N:function N(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fU:function fU(){},
hd:function hd(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
c_:function c_(){},
hp:function hp(a,b,c,d,e,f,g,h){var _=this
_.f=a
_.r=b
_.x=c
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},R={fY:function fY(){},fZ:function fZ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},D={
na:function(a){var t,s
t=new P.S(0,$.z,null,[null])
s=new XMLHttpRequest()
C.p.eX(s,"GET",a)
W.al(s,"loadend",new D.f3(new P.dE(t,[null]),s),!1,W.ou)
C.p.G(s,"")
return t},
f3:function f3(a,b){this.a=a
this.b=b}},A={
dN:function(a){var t,s
t=C.f.eF(a,0,new A.iX())
s=536870911&t+(C.b.cR(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iX:function iX(){}},T={
bM:function(a,b,c,d,e,f,g,h,i){var t=new Float32Array(H.w(9))
t[8]=i
t[7]=h
t[6]=g
t[5]=f
t[4]=e
t[3]=d
t[2]=c
t[1]=b
t[0]=a
return new T.bL(t)},
bo:function(a,b,c){var t=new Float32Array(3)
t[0]=a
t[1]=b
t[2]=c
return new T.y(t)},
bL:function bL(a){this.a=a},
av:function av(a){this.a=a},
H:function H(a){this.a=a},
y:function y(a){this.a=a},
aA:function aA(a){this.a=a}},U={
jF:function(a,b,c,d){return(b-a)*(0.5+0.5*Math.cos(d))+a},
F:function(a,b,c){var t=c.a
t=new U.eh(t,G.kV(t,a,$.$get$lx(),b),c)
t.dl(a,b,c)
return t},
nm:function(a,b){var t,s,r,q
t=$.$get$lt()
s=new G.A(P.m(),"none",!1,!0)
s.m("uTexture",b)
U.F(a,t,s)
s=$.$get$lR()
t=new G.A(P.m(),"toon",!1,!0)
t.m("uTexture",b)
U.F(a,s,t)
t=$.$get$lG()
s=new G.A(P.m(),"hexalate-10",!1,!0)
r=new Float32Array(H.w(2))
r[0]=0.5
r[1]=0.5
s.m("uCenter2",new T.H(r))
s.m("uPointSize",10)
s.m("uTexture",b)
U.F(a,t,s)
s=new G.A(P.m(),"hexalate-20",!1,!0)
r=new Float32Array(H.w(2))
r[0]=0.5
r[1]=0.5
s.m("uCenter2",new T.H(r))
s.m("uPointSize",20)
s.m("uTexture",b)
U.F(a,t,s)
s=new G.A(P.m(),"hexalate-varying",!1,!0)
r=new Float32Array(H.w(2))
r[0]=0.5
r[1]=0.5
s.m("uCenter2",new T.H(r))
s.m("uPointSize",10)
s.m("uTexture",b)
U.F(a,t,s)
s=$.$get$lw()
t=new G.A(P.m(),"dot",!1,!0)
r=new Float32Array(H.w(2))
r[0]=0
r[1]=0
t.m("uCenter2",new T.H(r))
t.m("uScale",0.8)
t.m("uAngle",0.5)
t.m("uTexture",b)
U.F(a,s,t)
t=new G.A(P.m(),"dot2",!1,!0)
r=new Float32Array(H.w(2))
r[0]=0
r[1]=0
t.m("uCenter2",new T.H(r))
t.m("uScale",0.3)
t.m("uAngle",0.5)
t.m("uTexture",b)
U.F(a,s,t)
t=$.$get$lS()
s=new G.A(P.m(),"tv-distortion",!1,!0)
s.m("uScale",0.0009)
s.m("uTime",0)
s.m("uTexture",b)
U.F(a,t,s)
s=$.$get$lI()
t=new G.A(P.m(),"kaleidoscope8",!1,!0)
t.m("uScale",8)
r=new Float32Array(H.w(2))
r[0]=0.5
r[1]=0.5
t.m("uCenter2",new T.H(r))
t.m("uTexture",b)
U.F(a,s,t)
t=new G.A(P.m(),"kaleidoscope5",!1,!0)
t.m("uScale",5)
r=new Float32Array(H.w(2))
r[0]=0.5
r[1]=0.5
t.m("uCenter2",new T.H(r))
t.m("uTexture",b)
U.F(a,s,t)
t=$.$get$lJ()
s=new G.A(P.m(),"lumidots-8",!1,!0)
s.m("uPointSize",8)
s.m("uTexture",b)
U.F(a,t,s)
s=new G.A(P.m(),"lumidots-16",!1,!0)
s.m("uPointSize",16)
s.m("uTexture",b)
U.F(a,t,s)
s=new G.A(P.m(),"lumidots-varying",!1,!0)
s.m("uPointSize",16)
s.m("uTexture",b)
U.F(a,t,s)
s=$.$get$lO()
t=new G.A(P.m(),"square-8",!1,!0)
t.m("uPointSize",8)
t.m("uTexture",b)
U.F(a,s,t)
t=new G.A(P.m(),"square-16",!1,!0)
t.m("uPointSize",16)
t.m("uTexture",b)
U.F(a,s,t)
t=new G.A(P.m(),"square-varying",!1,!0)
t.m("uPointSize",16)
t.m("uTexture",b)
U.F(a,s,t)
t=$.$get$lK()
s=new G.A(P.m(),"luminosity-highpass",!1,!0)
r=new Float32Array(H.w(2))
r[0]=0.85
r[1]=0.86
s.m("uRange",new T.H(r))
s.m("uColorAlpha",new T.aA(new Float32Array(H.w(4))))
s.m("uTexture",b)
U.F(a,t,s)
s=$.$get$lB()
t=new G.A(P.m(),"fisheye",!1,!0)
t.m("uTexture",b)
U.F(a,s,t)
t=$.$get$lA()
s=new G.A(P.m(),"film",!1,!0)
s.m("uTexture",b)
U.F(a,t,s)
s=$.$get$ls()
t=new G.A(P.m(),"emboss",!1,!0)
t.m("uConvolutionMatrix",$.$get$kk())
t.m("uColor",$.$get$kq())
U.F(a,s,t)
t=new G.A(P.m(),"emboss2",!1,!0)
t.m("uConvolutionMatrix",$.$get$kl())
t.m("uColor",$.$get$kr())
U.F(a,s,t)
t=new G.A(P.m(),"engrave",!1,!0)
t.m("uConvolutionMatrix",$.$get$km())
t.m("uColor",$.$get$ks())
U.F(a,s,t)
t=new G.A(P.m(),"sharpen",!1,!0)
t.m("uConvolutionMatrix",$.$get$kn())
t.m("uColor",$.$get$kt())
U.F(a,s,t)
t=new G.A(P.m(),"edges",!1,!0)
t.m("uConvolutionMatrix",$.$get$kj())
t.m("uColor",$.$get$kp())
U.F(a,s,t)
t=new G.A(P.m(),"blur",!1,!0)
t.m("uConvolutionMatrix",$.$get$ki())
t.m("uColor",$.$get$ko())
U.F(a,s,t)
H.d($.$get$dM()!=null)
for(t=$.$get$co(),t=t.gE(t),t=t.gw(t);t.q();){q=t.gt()
s=$.$get$dM();(s&&C.M).eL(s,"beforeend","<option>"+H.f(q)+"</option>",null,null)}},
ob:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
t={}
s=document
r=new R.fZ(0,0,null,null,null,null)
r.dv(C.h.cV(s,"stats"),"blue","gray")
q=C.h.cv(s,"#webgl-canvas")
p=q.clientWidth
o=q.clientHeight
q.width=p
q.height=o
n=new G.e5(null,q)
s=(q&&C.z).cU(q,"webgl2",P.aX(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
n.a=s
if(s==null)H.G(P.cp('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
m="ChronosGL Config: "+J.aN(J.ml(s))
if($.lC>0)P.ap("I: "+m)
J.m1(s,0,0,0,1)
J.dT(s,2929)
l=B.nc(15,-45,0.3,q)
s=new T.av(new Float32Array(H.w(16)))
s.ar()
m=new T.av(new Float32Array(H.w(16)))
m.ar()
k=new G.fy(l,50,1,0.1,2520,s,m,new T.av(new Float32Array(H.w(16))),P.m(),"perspective",!1,!0)
k.bw()
k.di(p,o)
m=$.$get$kY()
s=G.l9(n,"frame::color",p,o,32856,m)
m=G.l9(n,"frame::depth",p,o,33190,m)
j=new G.cs(n,null,s,m,null)
j.dm(n,s,m,null,!1)
U.nm(n,s)
i=G.kV("demo",n,$.$get$lv(),$.$get$lu())
s=$.$get$co().h(0,"dot").b
m=new T.y(new Float32Array(H.w(3)))
m.V(-1,-1,0)
h=new T.y(new Float32Array(H.w(3)))
h.V(1,-1,0)
g=new T.y(new Float32Array(H.w(3)))
g.V(1,1,0)
f=new T.y(new Float32Array(H.w(3)))
f.V(-1,1,0)
e=new Float32Array(H.w(2))
e[0]=0
e[1]=0
d=new Float32Array(H.w(2))
d[0]=1
d[1]=0
c=new Float32Array(H.w(2))
c[0]=1
c[1]=1
b=new Float32Array(H.w(2))
b[0]=0
b[1]=1
a=new T.y(new Float32Array(H.w(3)))
a.V(0,0,1)
a0=new G.ct(!1,[],[],[],P.m())
a0.as("aTexUV")
a0.bq([m,h,g,f])
a0.bo("aTexUV",[new T.H(e),new T.H(d),new T.H(c),new T.H(b)])
a0.as("aNormal")
a0.bp("aNormal",[a,a,a,a])
a1=G.kF("quad",s,a0)
t.a=null
a2=new G.f9(P.m(),"mat",!1,!0)
a2.m("cDepthTest",!0)
a2.m("cDepthWrite",!0)
a2.m("cBlendEquation",$.$get$ka())
a2.m("cStencilFunc",$.$get$kW())
a2.m("uColor",$.$get$kh())
s=new Float32Array(H.w(16))
b=new T.av(s)
b.ar()
c=Math.cos(1.5707963267948966)
d=Math.sin(1.5707963267948966)
e=s[4]
f=s[8]
g=s[5]
h=s[9]
m=s[6]
a3=s[10]
a4=s[7]
a5=s[11]
a6=-d
s[4]=e*c+f*d
s[5]=g*c+h*d
s[6]=m*c+a3*d
s[7]=a4*c+a5*d
s[8]=e*a6+f*c
s[9]=g*a6+h*c
s[10]=m*a6+a3*c
s[11]=a4*a6+a5*c
a2.m("uModelMatrix",b)
t.b=0
P.mY([D.na("../ct_logo.obj")],null,!1).b6(new U.j8(t,i,new U.j7(t,r,p,o,l,k,new G.cs(n,null,null,null,null),j,i,a1,a2)))},
eh:function eh(a,b,c){this.a=a
this.b=b
this.c=c},
j7:function j7(a,b,c,d,e,f,g,h,i,a0,a1){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=a0
_.Q=a1},
j8:function j8(a,b,c){this.a=a
this.b=b
this.c=c}},Y={
mZ:function(a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
t=new G.ct(!1,[],[],[],P.m())
t.as("aTexUV")
t.as("aNormal")
s=P.m()
r=a6.split("\n")
q=[]
p=[]
o=[]
n=Date.now()
m=P.kU("\\s+",!0,!1)
l=P.kU("\\s\\s*\\$",!0,!1)
for(k=r.length,j=0;j<r.length;r.length===k||(0,H.J)(r),++j){i=r[j]
i.toString
h=H.ok(i,m," ")
g=H.om(h,l,"",0)
if(g.length===0||g[0]==="#")continue
f=g.split(" ")
if(J.B(f[0],"g"))s.i(0,f[1],q.length)
else if(J.B(f[0],"v")){h=H.b_(f[1],null)
e=H.b_(f[2],null)
d=H.b_(f[3],null)
c=new Float32Array(3)
c[0]=h
c[1]=e
c[2]=d
C.a.l(q,new T.y(c))}else if(J.B(f[0],"vt")){h=H.b_(f[1],null)
e=H.b_(f[2],null)
d=new Float32Array(2)
d[0]=h
d[1]=e
C.a.l(o,new T.H(d))}else if(J.B(f[0],"vn")){h=H.b_(f[1],null)
e=H.b_(f[2],null)
d=H.b_(f[3],null)
c=new Float32Array(3)
c[0]=h
c[1]=e
c[2]=d
C.a.l(p,new T.y(c))}else if(J.B(f[0],"f")){h=f.length
if(h!==4&&h!==5){H.bv("*** Error: face '"+g+"' not handled")
continue}b=[]
a=[]
a0=[]
for(a1=1;h=f.length,a1<h;++a1){a2=J.mu(f[a1],"/")
H.d(a2.length>0)
for(;a2.length<3;)C.a.l(a2,"")
a3=H.jE(a2[0],null,null)-1
a4=J.B(a2[1],"")?-1:H.jE(a2[1],null,null)-1
a5=J.B(a2[2],"")?-1:H.jE(a2[2],null,null)-1
if(a3<q.length)C.a.l(b,q[a3])
else C.a.l(b,new T.y(new Float32Array(3)))
if(a4!==-1&&a4<o.length)C.a.l(a0,o[a4])
else{H.bv("problem uv "+a1+" "+a4)
C.a.l(a0,new T.H(new Float32Array(2)))}if(a5!==-1&&a5<p.length)C.a.l(a,p[a5])
else{H.bv("problem normals "+a1+" "+a5)
C.a.l(a,new T.y(new Float32Array(3)))}}if(h===4)t.dh(b)
else t.bq(b)
t.bp("aNormal",a)
t.bo("aTexUV",a0)}}P.ap("loaded ("+P.mQ(0,0,0,Date.now()-new P.aR(n,!1).a,0,0).j(0)+") "+t.j(0))
return t}}
var v=[C,H,J,P,W,B,G,R,D,A,T,U,Y]
setFunctionNamesIfNecessary(v)
var $={}
H.jx.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gv:function(a){return H.aZ(a)},
j:function(a){return H.fG(a)},
gB:function(a){return new H.aJ(H.iW(a),null)}}
J.eU.prototype={
j:function(a){return String(a)},
gv:function(a){return a?519018:218159},
gB:function(a){return C.a0},
$isaC:1}
J.eV.prototype={
A:function(a,b){return null==b},
j:function(a){return"null"},
gv:function(a){return 0},
gB:function(a){return C.V}}
J.bJ.prototype={
gv:function(a){return 0},
gB:function(a){return C.U},
j:function(a){return String(a)},
$iskJ:1}
J.fA.prototype={}
J.b2.prototype={}
J.aV.prototype={
j:function(a){var t=a[$.$get$kv()]
return t==null?this.de(a):J.aN(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjv:1}
J.aT.prototype={
aY:function(a,b){if(!!a.immutable$list)throw H.e(new P.v(b))},
aX:function(a,b){if(!!a.fixed$length)throw H.e(new P.v(b))},
l:function(a,b){this.aX(a,"add")
a.push(b)},
N:function(a,b){var t,s,r,q,p
t=a.length
this.aX(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.J)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.G(new P.a5(a)))
a.push(q)}},
cu:function(a,b){return new H.bK(a,b,[H.aL(a,0),null])},
am:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
u:function(a,b){return a[b]},
geE:function(a){if(a.length>0)return a[0]
throw H.e(H.eT())},
gb_:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.eT())},
bi:function(a,b,c,d,e){var t,s
this.aY(a,"setRange")
P.kT(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.G(P.b0(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.n6())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
bZ:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.a5(a))}return!1},
d7:function(a,b){this.aY(a,"sort")
H.dv(a,0,a.length-1,P.nW())},
aF:function(a){return this.d7(a,null)},
C:function(a,b){var t
for(t=0;t<a.length;++t)if(J.B(a[t],b))return!0
return!1},
j:function(a){return P.eS(a,"[","]")},
gw:function(a){return new J.e_(a,a.length,0,null,[H.aL(a,0)])},
gv:function(a){return H.aZ(a)},
gk:function(a){return a.length},
sk:function(a,b){this.aX(a,"set length")
if(b<0)throw H.e(P.b0(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.P(a,b))
if(b>=a.length||b<0)throw H.e(H.P(a,b))
return a[b]},
i:function(a,b,c){this.aY(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.P(a,b))
if(b>=a.length||b<0)throw H.e(H.P(a,b))
a[b]=c},
$isn:1,
$asn:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.jw.prototype={}
J.e_.prototype={
gt:function(){return this.d},
q:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.J(t))
r=this.c
if(r>=s){this.sby(null)
return!1}this.sby(t[r]);++this.c
return!0},
sby:function(a){this.d=a}}
J.bh.prototype={
T:function(a,b){var t
if(typeof b!=="number")throw H.e(H.T(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaz(b)
if(this.gaz(a)===t)return 0
if(this.gaz(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaz:function(a){return a===0?1/a<0:a<0},
ek:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.v(""+a+".ceil()"))},
a6:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.v(""+a+".round()"))},
el:function(a,b,c){if(this.T(b,c)>0)throw H.e(H.T(b))
if(this.T(a,b)<0)return b
if(this.T(a,c)>0)return c
return a},
f9:function(a,b){var t
if(b>20)throw H.e(P.b0(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaz(a))return"-"+t
return t},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
a7:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a+b},
aa:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a-b},
cS:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a/b},
I:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a*b},
aI:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bV(a,b)},
K:function(a,b){return(a|0)===a?a/b|0:this.bV(a,b)},
bV:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.v("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
aT:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cR:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return(a&b)>>>0},
dg:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return(a^b)>>>0},
aq:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a<b},
aE:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a>b},
cT:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a>=b},
gB:function(a){return C.a3},
$isY:1}
J.dd.prototype={
gB:function(a){return C.a2},
$isQ:1,
$iso:1,
$isY:1}
J.dc.prototype={
gB:function(a){return C.a1},
$isQ:1,
$isY:1}
J.aU.prototype={
c9:function(a,b){if(b<0)throw H.e(H.P(a,b))
if(b>=a.length)H.G(H.P(a,b))
return a.charCodeAt(b)},
ac:function(a,b){if(b>=a.length)throw H.e(H.P(a,b))
return a.charCodeAt(b)},
a7:function(a,b){if(typeof b!=="string")throw H.e(P.k9(b,null,null))
return a+b},
d8:function(a,b){var t=a.split(b)
return t},
d9:function(a,b,c){var t
if(c>a.length)throw H.e(P.b0(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bk:function(a,b){return this.d9(a,b,0)},
aG:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fH(b,null,null))
if(b>c)throw H.e(P.fH(b,null,null))
if(c>a.length)throw H.e(P.fH(c,null,null))
return a.substring(b,c)},
da:function(a,b){return this.aG(a,b,null)},
f8:function(a){return a.toLowerCase()},
fb:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.ac(t,0)===133){r=J.n8(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.c9(t,q)===133?J.n9(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
eo:function(a,b,c){if(c>a.length)throw H.e(P.b0(c,0,a.length,null,null))
return H.oj(a,b,c)},
T:function(a,b){var t
if(typeof b!=="string")throw H.e(H.T(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
j:function(a){return a},
gv:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gB:function(a){return C.W},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.P(a,b))
return a[b]},
$isn:1,
$asn:function(){},
$ist:1}
H.c.prototype={$asc:null}
H.bi.prototype={
gw:function(a){return new H.df(this,this.gk(this),0,null,[H.ao(this,"bi",0)])},
aC:function(a,b){return this.dd(0,b)},
f7:function(a,b){var t,s
t=H.I([],[H.ao(this,"bi",0)])
C.a.sk(t,this.gk(this))
for(s=0;s<this.gk(this);++s)t[s]=this.u(0,s)
return t},
f6:function(a){return this.f7(a,!0)}}
H.df.prototype={
gt:function(){return this.d},
q:function(){var t,s,r,q
t=this.a
s=J.a2(t)
r=s.gk(t)
if(this.b!==r)throw H.e(new P.a5(t))
q=this.c
if(q>=r){this.sae(null)
return!1}this.sae(s.u(t,q));++this.c
return!0},
sae:function(a){this.d=a}}
H.dg.prototype={
gw:function(a){return new H.f5(null,J.bx(this.a),this.b,this.$ti)},
gk:function(a){return J.dU(this.a)},
$asZ:function(a,b){return[b]}}
H.ei.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.f5.prototype={
q:function(){var t=this.b
if(t.q()){this.sae(this.c.$1(t.gt()))
return!0}this.sae(null)
return!1},
gt:function(){return this.a},
sae:function(a){this.a=a},
$asdb:function(a,b){return[b]}}
H.bK.prototype={
gk:function(a){return J.dU(this.a)},
u:function(a,b){return this.b.$1(J.mc(this.a,b))},
$asc:function(a,b){return[b]},
$asbi:function(a,b){return[b]},
$asZ:function(a,b){return[b]}}
H.dC.prototype={
gw:function(a){return new H.hy(J.bx(this.a),this.b,this.$ti)}}
H.hy.prototype={
q:function(){var t,s
for(t=this.a,s=this.b;t.q();)if(s.$1(t.gt()))return!0
return!1},
gt:function(){return this.a.gt()}}
H.cq.prototype={}
H.jg.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.jh.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.ii.prototype={
seQ:function(a){this.z=a},
seT:function(a){this.ch=a}}
H.b6.prototype={
bY:function(a,b){if(!this.f.A(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aV()},
f0:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.an(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bO();++r.d}this.y=!1}this.aV()},
eb:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
f_:function(a){var t,s,r
if(this.ch==null)return
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.G(new P.v("removeRange"))
P.kT(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
d4:function(a,b){if(!this.r.A(0,a))return
this.db=b},
eJ:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.G(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jB(null,null)
this.cx=t}t.W(0,new H.ic(a,c))},
eI:function(a,b){var t
if(!this.r.A(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aA()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jB(null,null)
this.cx=t}t.W(0,this.geR())},
eK:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.ap(a)
if(b!=null)P.ap(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aN(a)
s[1]=b==null?null:b.j(0)
for(r=new P.c4(t,t.r,null,null,[null]),r.c=t.e;r.q();)r.d.G(0,s)},
ai:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.U(o)
p=H.aD(o)
this.eK(q,p)
if(this.db){this.aA()
if(this===u.globalState.e)throw o}}finally{this.cy=H.nR(r)
u.globalState.d=H.jR(t,"$isb6")
if(t!=null)$=t.geP()
if(this.cx!=null)for(;n=this.cx,!n.gal(n);)this.cx.cw().$0()}return s},
ct:function(a){return this.b.h(0,a)},
bC:function(a,b){var t=this.b
if(t.F(0,a))throw H.e(P.cp("Registry: ports must be registered only once."))
t.i(0,a,b)},
aV:function(){var t=this.b
if(t.gk(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.aA()},
aA:function(){var t,s,r
t=this.cx
if(t!=null)t.Y(0)
for(t=this.b,s=t.gcO(t),s=s.gw(s);s.q();)s.gt().dN()
t.Y(0)
this.c.Y(0)
u.globalState.z.an(0,this.a)
this.dx.Y(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].G(0,t[r+1])
this.ch=null}},
geP:function(){return this.d},
gep:function(){return this.e}}
H.ic.prototype={
$0:function(){this.a.G(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hR.prototype={
ew:function(){var t=this.a
if(t.b===t.c)return
return t.cw()},
cA:function(){var t,s,r
t=this.ew()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.F(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gal(s)}else s=!1
else s=!1
else s=!1
if(s)H.G(P.cp("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gal(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aX(["command","close"])
r=new H.am(!0,new P.dH(0,null,null,null,null,null,0,[null,P.o])).L(r)
s.toString
self.postMessage(r)}return!1}t.eY()
return!0},
bT:function(){if(self.window!=null)new H.hS(this).$0()
else for(;this.cA(););},
ao:function(){var t,s,r,q,p
if(!u.globalState.x)this.bT()
else try{this.bT()}catch(r){t=H.U(r)
s=H.aD(r)
q=u.globalState.Q
p=P.aX(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.am(!0,P.c5(null,P.o)).L(p)
q.toString
self.postMessage(p)}}}
H.hS.prototype={
$0:function(){if(!this.a.cA())return
P.nq(C.o,this)},
$S:function(){return{func:1,v:true}}}
H.b7.prototype={
eY:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.ai(this.b)}}
H.ih.prototype={}
H.eQ.prototype={
$0:function(){H.n2(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eR.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bu(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bu(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aV()},
$S:function(){return{func:1,v:true}}}
H.hK.prototype={}
H.bq.prototype={
G:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.nD(b)
if(t.gep()===s){s=J.a2(r)
switch(s.h(r,0)){case"pause":t.bY(s.h(r,1),s.h(r,2))
break
case"resume":t.f0(s.h(r,1))
break
case"add-ondone":t.eb(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.f_(s.h(r,1))
break
case"set-errors-fatal":t.d4(s.h(r,1),s.h(r,2))
break
case"ping":t.eJ(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eI(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.an(0,s)
break}return}u.globalState.f.a.W(0,new H.b7(t,new H.ik(this,r),"receive"))},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bq){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gv:function(a){return this.b.a}}
H.ik.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dJ(0,this.b)},
$S:function(){return{func:1}}}
H.c7.prototype={
G:function(a,b){var t,s,r
t=P.aX(["command","message","port",this,"msg",b])
s=new H.am(!0,P.c5(null,P.o)).L(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.c7){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gv:function(a){return C.b.dg((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bl.prototype={
dN:function(){this.c=!0
this.b=null},
dJ:function(a,b){if(this.c)return
this.b.$1(b)},
$isnk:1}
H.hf.prototype={
dw:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.W(0,new H.b7(s,new H.hg(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.b9(new H.hh(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.v("Timer greater than 0."))}}}
H.hg.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.hh.prototype={
$0:function(){this.a.c=null
H.j6()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.at.prototype={
gv:function(a){var t=this.a
t=C.b.aT(t,0)^C.b.K(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
A:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.at){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.am.prototype={
L:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gk(t))
t=J.u(a)
if(!!t.$isbO)return["buffer",a]
if(!!t.$isbj)return["typed",a]
if(!!t.$isn)return this.d_(a)
if(!!t.$isn_){r=this.gcX()
q=t.gE(a)
q=H.jC(q,r,H.ao(q,"Z",0),null)
q=P.kN(q,!0,H.ao(q,"Z",0))
t=t.gcO(a)
t=H.jC(t,r,H.ao(t,"Z",0),null)
return["map",q,P.kN(t,!0,H.ao(t,"Z",0))]}if(!!t.$iskJ)return this.d0(a)
if(!!t.$isa)this.cM(a)
if(!!t.$isnk)this.ap(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbq)return this.d1(a)
if(!!t.$isc7)return this.d2(a)
if(!!t.$isbd){p=a.$static_name
if(p==null)this.ap(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isat)return["capability",a.a]
if(!(a instanceof P.p))this.cM(a)
return["dart",u.classIdExtractor(a),this.cZ(u.classFieldsExtractor(a))]},
ap:function(a,b){throw H.e(new P.v((b==null?"Can't transmit:":b)+" "+H.f(a)))},
cM:function(a){return this.ap(a,null)},
d_:function(a){var t
H.d(typeof a!=="string")
t=this.cY(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ap(a,"Can't serialize indexable: ")},
cY:function(a){var t,s
t=[]
C.a.sk(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.L(a[s])
return t},
cZ:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.L(a[t]))
return a},
d0:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ap(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sk(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.L(a[t[r]])
return["js-object",t,s]},
d2:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
d1:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b5.prototype={
Z:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.dZ("Bad serialized message: "+H.f(a)))
switch(C.a.geE(a)){case"ref":H.d(J.B(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.d(J.B(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.d(J.B(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.d(J.B(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
s=H.I(this.ah(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.B(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.I(this.ah(t),[null])
case"mutable":H.d(J.B(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.ah(t)
case"const":H.d(J.B(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.I(this.ah(t),[null])
s.fixed$length=Array
return s
case"map":return this.ez(a)
case"sendport":return this.eA(a)
case"raw sendport":H.d(J.B(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.ey(a)
case"function":H.d(J.B(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.B(a[0],"capability"))
return new H.at(a[1])
case"dart":H.d(J.B(a[0],"dart"))
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
ez:function(a){var t,s,r,q,p
H.d(J.B(a[0],"map"))
t=a[1]
s=a[2]
r=P.m()
C.a.l(this.b,r)
t=J.mq(t,this.gex()).f6(0)
for(q=J.a2(s),p=0;p<t.length;++p)r.i(0,t[p],this.Z(q.h(s,p)))
return r},
eA:function(a){var t,s,r,q,p,o,n
H.d(J.B(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.ct(r)
if(o==null)return
n=new H.bq(o,s)}else n=new H.c7(t,r,s)
C.a.l(this.b,n)
return n},
ey:function(a){var t,s,r,q,p,o
H.d(J.B(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.a2(t),p=J.a2(s),o=0;o<q.gk(t);++o)r[q.h(t,o)]=this.Z(p.h(s,o))
return r}}
H.fK.prototype={}
H.hm.prototype={
S:function(a){var t,s,r
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
H.dq.prototype={
j:function(a){var t=this.b
if(t==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eY.prototype={
j:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.hq.prototype={
j:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.ji.prototype={
$1:function(a){if(!!J.u(a).$isbf)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dJ.prototype={
j:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.j1.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.j2.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.j3.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.j4.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.j5.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.bd.prototype={
j:function(a){return"Closure '"+H.dr(this).trim()+"'"},
$isjv:1,
gfd:function(){return this},
$D:null}
H.h9.prototype={}
H.fX.prototype={
j:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.by.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.by))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var t,s
t=this.c
if(t==null)s=H.aZ(this.a)
else s=typeof t!=="object"?J.ar(t):H.aZ(t)
return(s^H.aZ(this.b))>>>0},
j:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.fG(t)}}
H.ho.prototype={
j:function(a){return this.a}}
H.e4.prototype={
j:function(a){return this.a}}
H.fP.prototype={
j:function(a){return"RuntimeError: "+H.f(this.a)}}
H.hE.prototype={
j:function(a){return C.e.a7("Assertion failed: ",P.ju(this.a))}}
H.aJ.prototype={
j:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gv:function(a){return J.ar(this.a)},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aJ){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ah.prototype={
gk:function(a){return this.a},
gal:function(a){return this.a===0},
gE:function(a){return new H.f0(this,[H.aL(this,0)])},
gcO:function(a){return H.jC(this.gE(this),new H.eX(this),H.aL(this,0),H.aL(this,1))},
F:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bL(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bL(s,b)}else return this.eM(b)},
eM:function(a){var t=this.d
if(t==null)return!1
return this.ak(this.av(t,this.aj(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.af(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.af(r,b)
return s==null?null:s.b}else return this.eN(b)},
eN:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.av(t,this.aj(a))
r=this.ak(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aP()
this.b=t}this.bA(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aP()
this.c=s}this.bA(s,b,c)}else{r=this.d
if(r==null){r=this.aP()
this.d=r}q=this.aj(b)
p=this.av(r,q)
if(p==null)this.aS(r,q,[this.aQ(b,c)])
else{o=this.ak(p,b)
if(o>=0)p[o].b=c
else p.push(this.aQ(b,c))}}},
an:function(a,b){if(typeof b==="string")return this.bS(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bS(this.c,b)
else return this.eO(b)},
eO:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.av(t,this.aj(a))
r=this.ak(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bW(q)
return q.b},
Y:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
ay:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a5(this))
t=t.c}},
bA:function(a,b,c){var t=this.af(a,b)
if(t==null)this.aS(a,b,this.aQ(b,c))
else t.b=c},
bS:function(a,b){var t
if(a==null)return
t=this.af(a,b)
if(t==null)return
this.bW(t)
this.bM(a,b)
return t.b},
aQ:function(a,b){var t,s
t=new H.f_(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bW:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
aj:function(a){return J.ar(a)&0x3ffffff},
ak:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.B(a[s].a,b))return s
return-1},
j:function(a){return P.nb(this)},
af:function(a,b){return a[b]},
av:function(a,b){return a[b]},
aS:function(a,b,c){H.d(c!=null)
a[b]=c},
bM:function(a,b){delete a[b]},
bL:function(a,b){return this.af(a,b)!=null},
aP:function(){var t=Object.create(null)
this.aS(t,"<non-identifier-key>",t)
this.bM(t,"<non-identifier-key>")
return t},
$isn_:1}
H.eX.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.f_.prototype={}
H.f0.prototype={
gk:function(a){return this.a.a},
gw:function(a){var t,s
t=this.a
s=new H.f1(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.f1.prototype={
gt:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a5(t))
else{t=this.c
if(t==null){this.sbz(null)
return!1}else{this.sbz(t.a)
this.c=this.c.c
return!0}}},
sbz:function(a){this.d=a}}
H.iY.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.iZ.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.t]}}}
H.j_.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.t]}}}
H.eW.prototype={
j:function(a){return"RegExp/"+this.a+"/"},
gbQ:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.kL(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
dU:function(a,b){var t,s
t=this.gbQ()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return H.nC(this,s)}}
H.ij.prototype={
h:function(a,b){return this.b[b]},
dH:function(a,b){var t,s
t=this.b
s=t.input
H.d(typeof s==="string")
t=t.index
H.d(typeof t==="number"&&Math.floor(t)===t)}}
H.bO.prototype={
gB:function(a){return C.N},
$isbO:1}
H.bj.prototype={$isbj:1}
H.ff.prototype={
gB:function(a){return C.O}}
H.di.prototype={
gk:function(a){return a.length},
$isn:1,
$asn:function(){},
$isq:1,
$asq:function(){}}
H.dj.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.P(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.G(H.P(a,b))
a[b]=c}}
H.dk.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.G(H.P(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.dh.prototype={
gB:function(a){return C.P},
$isc:1,
$asc:function(){return[P.Q]},
$isb:1,
$asb:function(){return[P.Q]},
$iseH:1}
H.fg.prototype={
gB:function(a){return C.Q},
$isc:1,
$asc:function(){return[P.Q]},
$isb:1,
$asb:function(){return[P.Q]}}
H.fh.prototype={
gB:function(a){return C.R},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.fi.prototype={
gB:function(a){return C.S},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$iskG:1}
H.fj.prototype={
gB:function(a){return C.T},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.fk.prototype={
gB:function(a){return C.X},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$isla:1}
H.fl.prototype={
gB:function(a){return C.Y},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$islb:1}
H.dl.prototype={
gB:function(a){return C.Z},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.fm.prototype={
gB:function(a){return C.a_},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$islc:1}
H.bP.prototype={
$asn:function(){},
$isc:1,
$asc:function(){return[P.o]},
$asq:function(){},
$isb:1,
$asb:function(){return[P.o]}}
H.bQ.prototype={
$asn:function(){},
$isc:1,
$asc:function(){return[P.Q]},
$asq:function(){},
$isb:1,
$asb:function(){return[P.Q]}}
H.bR.prototype={
$asn:function(){},
$asc:function(){return[P.Q]},
$asq:function(){},
$asb:function(){return[P.Q]}}
H.bS.prototype={
$asn:function(){},
$asc:function(){return[P.o]},
$asq:function(){},
$asb:function(){return[P.o]}}
P.hG.prototype={
$1:function(a){var t,s
H.j6()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.hF.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hH.prototype={
$0:function(){H.j6()
this.a.$0()},
$S:function(){return{func:1}}}
P.hI.prototype={
$0:function(){H.j6()
this.a.$0()},
$S:function(){return{func:1}}}
P.eL.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.J(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.J(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.eK.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.e]=a
if(s===0)this.d.bK(r)}else if(t.b===0&&!this.b)this.d.J(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.hM.prototype={
en:function(a,b){if(a==null)a=new P.bk()
if(this.a.a!==0)throw H.e(new P.aj("Future already completed"))
$.z.toString
this.J(a,b)},
em:function(a){return this.en(a,null)}}
P.dE.prototype={
ax:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.aj("Future already completed"))
t.bD(b)},
J:function(a,b){this.a.bE(a,b)}}
P.iB.prototype={
ax:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.aj("Future already completed"))
t.aL(b)},
J:function(a,b){this.a.J(a,b)}}
P.dG.prototype={
eU:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.b5(this.d,a.a)},
eH:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bu(s,{func:1,args:[P.p,P.bW]}))return t.f1(s,a.a,a.b)
else return t.b5(s,a.a)}}
P.S.prototype={
b7:function(a,b){var t,s,r
t=$.z
if(t!==C.d){t.toString
if(b!=null)b=P.nI(b,t)}s=new P.S(0,t,null,[null])
r=b==null?1:3
this.bB(new P.dG(null,s,r,a,b,[H.aL(this,0),null]))
return s},
b6:function(a){return this.b7(a,null)},
bG:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
bB:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.jR(this.c,"$isdG")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.bB(a)
return}this.bG(t)}H.d(this.a>=4)
t=this.b
t.toString
P.bs(null,null,t,new P.hX(this,a))}},
bR:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.bR(a)
return}this.bG(s)}H.d(this.a>=4)
t.a=this.ag(a)
s=this.b
s.toString
P.bs(null,null,s,new P.i4(t,this))}},
aR:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.ag(t)},
ag:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aL:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.cb(a,"$isbg",t,"$asbg"))if(H.cb(a,"$isS",t,null))P.i_(a,this)
else P.le(a,this)
else{s=this.aR()
H.d(this.a<4)
this.a=4
this.c=a
P.bp(this,s)}},
bK:function(a){var t
H.d(this.a<4)
H.d(!J.u(a).$isbg)
t=this.aR()
H.d(this.a<4)
this.a=4
this.c=a
P.bp(this,t)},
J:function(a,b){var t
H.d(this.a<4)
t=this.aR()
H.d(this.a<4)
this.a=8
this.c=new P.bc(a,b)
P.bp(this,t)},
dP:function(a){return this.J(a,null)},
bD:function(a){var t
H.d(this.a<4)
if(H.cb(a,"$isbg",this.$ti,"$asbg")){this.dM(a)
return}H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bs(null,null,t,new P.hZ(this,a))},
dM:function(a){var t
if(H.cb(a,"$isS",this.$ti,null)){if(a.a===8){H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bs(null,null,t,new P.i3(this,a))}else P.i_(a,this)
return}P.le(a,this)},
bE:function(a,b){var t
H.d(this.a<4)
H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bs(null,null,t,new P.hY(this,a,b))},
$isbg:1,
gaU:function(){return this.a},
ge4:function(){return this.c}}
P.hX.prototype={
$0:function(){P.bp(this.a,this.b)},
$S:function(){return{func:1}}}
P.i4.prototype={
$0:function(){P.bp(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.i0.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.aL(a)},
$S:function(){return{func:1,args:[,]}}}
P.i1.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.J(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.i2.prototype={
$0:function(){this.a.J(this.b,this.c)},
$S:function(){return{func:1}}}
P.hZ.prototype={
$0:function(){this.a.bK(this.b)},
$S:function(){return{func:1}}}
P.i3.prototype={
$0:function(){P.i_(this.b,this.a)},
$S:function(){return{func:1}}}
P.hY.prototype={
$0:function(){this.a.J(this.b,this.c)},
$S:function(){return{func:1}}}
P.i7.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.cz(q.d)}catch(n){s=H.U(n)
r=H.aD(n)
if(this.c){q=this.a.a
H.d(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.d(q.a===8)
p.b=q.c}else p.b=new P.bc(s,r)
p.a=!0
return}if(!!J.u(t).$isbg){if(t instanceof P.S&&t.gaU()>=4){if(t.gaU()===8){q=t
H.d(q.gaU()===8)
p=this.b
p.b=q.ge4()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.b6(new P.i8(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.i8.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.i6.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.b5(r.d,this.c)}catch(q){t=H.U(q)
s=H.aD(q)
r=this.a
r.b=new P.bc(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.i5.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.eU(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eH(t)
p.a=!1}}catch(o){s=H.U(o)
r=H.aD(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.bc(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.dD.prototype={}
P.h0.prototype={
gk:function(a){var t,s
t={}
s=new P.S(0,$.z,null,[P.o])
t.a=0
this.eS(new P.h2(t),!0,new P.h3(t,s),s.gdO())
return s}}
P.h2.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.h3.prototype={
$0:function(){this.b.aL(this.a.a)},
$S:function(){return{func:1}}}
P.h1.prototype={}
P.bc.prototype={
j:function(a){return H.f(this.a)},
$isbf:1}
P.iI.prototype={}
P.iL.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.bk()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.j(0)
throw r},
$S:function(){return{func:1}}}
P.im.prototype={
f2:function(a){var t,s,r
try{if(C.d===$.z){a.$0()
return}P.lj(null,null,this,a)}catch(r){t=H.U(r)
s=H.aD(r)
P.iK(null,null,this,t,s)}},
f3:function(a,b){var t,s,r
try{if(C.d===$.z){a.$1(b)
return}P.lk(null,null,this,a,b)}catch(r){t=H.U(r)
s=H.aD(r)
P.iK(null,null,this,t,s)}},
eh:function(a){return new P.ip(this,a)},
aW:function(a){return new P.io(this,a)},
ei:function(a){return new P.iq(this,a)},
h:function(a,b){return},
cz:function(a){if($.z===C.d)return a.$0()
return P.lj(null,null,this,a)},
b5:function(a,b){if($.z===C.d)return a.$1(b)
return P.lk(null,null,this,a,b)},
f1:function(a,b,c){if($.z===C.d)return a.$2(b,c)
return P.nJ(null,null,this,a,b,c)}}
P.ip.prototype={
$0:function(){return this.a.cz(this.b)},
$S:function(){return{func:1}}}
P.io.prototype={
$0:function(){return this.a.f2(this.b)},
$S:function(){return{func:1}}}
P.iq.prototype={
$1:function(a){return this.a.f3(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dH.prototype={
aj:function(a){return H.od(a)&0x3ffffff},
ak:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.id.prototype={
gw:function(a){var t=new P.c4(this,this.r,null,null,[null])
t.c=this.e
return t},
gk:function(a){return this.a},
C:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dQ(b)},
dQ:function(a){var t=this.d
if(t==null)return!1
return this.au(t[this.at(a)],a)>=0},
ct:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.C(0,a)?a:null
else return this.dZ(a)},
dZ:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.at(a)]
r=this.au(s,a)
if(r<0)return
return J.bb(s,r).gdS()},
l:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bH(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bH(r,b)}else return this.W(0,b)},
W:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.nA()
this.d=t}s=this.at(b)
r=t[s]
if(r==null){q=[this.aK(b)]
H.d(q!=null)
t[s]=q}else{if(this.au(r,b)>=0)return!1
r.push(this.aK(b))}return!0},
an:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bI(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bI(this.c,b)
else return this.e_(0,b)},
e_:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.at(b)]
r=this.au(s,b)
if(r<0)return!1
this.bJ(s.splice(r,1)[0])
return!0},
Y:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bH:function(a,b){var t
if(a[b]!=null)return!1
t=this.aK(b)
H.d(!0)
a[b]=t
return!0},
bI:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bJ(t)
delete a[b]
return!0},
aK:function(a){var t,s
t=new P.ie(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bJ:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
at:function(a){return J.ar(a)&0x3ffffff},
au:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.B(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.ie.prototype={
gdS:function(){return this.a}}
P.c4.prototype={
gt:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a5(t))
else{t=this.c
if(t==null){this.sad(null)
return!1}else{this.sad(t.a)
this.c=this.c.b
return!0}}},
sad:function(a){this.d=a}}
P.ib.prototype={}
P.de.prototype={}
P.x.prototype={
gw:function(a){return new H.df(a,this.gk(a),0,null,[H.ao(a,"x",0)])},
u:function(a,b){return this.h(a,b)},
cu:function(a,b){return new H.bK(a,b,[H.ao(a,"x",0),null])},
eF:function(a,b,c){var t,s,r
t=this.gk(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gk(a))throw H.e(new P.a5(a))}return s},
j:function(a){return P.eS(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.f6.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.f(a)
t.a=s+": "
t.a+=H.f(b)},
$S:function(){return{func:1,args:[,,]}}}
P.f2.prototype={
gw:function(a){return new P.ig(this,this.c,this.d,this.b,null,this.$ti)},
gal:function(a){return this.b===this.c},
gk:function(a){return(this.c-this.b&this.a.length-1)>>>0},
u:function(a,b){var t,s
t=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=t)H.G(P.E(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
Y:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
j:function(a){return P.eS(this,"{","}")},
cw:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.eT());++this.d
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
if(this.b===t)this.bO();++this.d},
bO:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.I(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bi(s,0,q,t,r)
C.a.bi(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbU(s)},
dr:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbU(H.I(t,[b]))},
sbU:function(a){this.a=a},
$asc:null}
P.ig.prototype={
gt:function(){return this.e},
q:function(){var t,s
t=this.a
if(this.c!==t.d)H.G(new P.a5(t))
s=this.d
if(s===this.b){this.sad(null)
return!1}this.sad(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sad:function(a){this.e=a}}
P.fR.prototype={
N:function(a,b){var t
for(t=J.bx(b);t.q();)this.l(0,t.gt())},
j:function(a){return P.eS(this,"{","}")},
$isc:1,
$asc:null}
P.fQ.prototype={}
P.bU.prototype={$isc:1,$asc:null,$isb:1,$asb:null}
P.aC.prototype={}
P.L.prototype={}
P.aR.prototype={
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.aR))return!1
return this.a===b.a&&this.b===b.b},
T:function(a,b){return C.b.T(this.a,b.a)},
gv:function(a){var t=this.a
return(t^C.b.aT(t,30))&1073741823},
j:function(a){var t,s,r,q,p,o,n
t=P.mN(H.nj(this))
s=P.ci(H.nh(this))
r=P.ci(H.nd(this))
q=P.ci(H.ne(this))
p=P.ci(H.ng(this))
o=P.ci(H.ni(this))
n=P.mO(H.nf(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
geV:function(){return this.a},
dj:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.e(P.dZ("DateTime is outside valid range: "+this.geV()))},
$isL:1,
$asL:function(){return[P.aR]}}
P.Q.prototype={$isL:1,
$asL:function(){return[P.Y]}}
P.aF.prototype={
aq:function(a,b){return C.b.aq(this.a,b.gdR())},
aE:function(a,b){return C.b.aE(this.a,b.gdR())},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.aF))return!1
return this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
T:function(a,b){return C.b.T(this.a,b.a)},
j:function(a){var t,s,r,q,p
t=new P.eg()
s=this.a
if(s<0)return"-"+new P.aF(0-s).j(0)
r=t.$1(C.b.K(s,6e7)%60)
q=t.$1(C.b.K(s,1e6)%60)
p=new P.ef().$1(s%1e6)
return""+C.b.K(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isL:1,
$asL:function(){return[P.aF]}}
P.ef.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.t,args:[P.o]}}}
P.eg.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.t,args:[P.o]}}}
P.bf.prototype={}
P.cf.prototype={
j:function(a){return"Assertion failed"}}
P.bk.prototype={
j:function(a){return"Throw of null."}}
P.as.prototype={
gaN:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaM:function(){return""},
j:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.f(t)
q=this.gaN()+s+r
if(!this.a)return q
p=this.gaM()
o=P.ju(this.b)
return q+p+": "+H.f(o)}}
P.dt.prototype={
gaN:function(){return"RangeError"},
gaM:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.eO.prototype={
gaN:function(){return"RangeError"},
gaM:function(){H.d(this.a)
if(J.lT(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gk:function(a){return this.f}}
P.v.prototype={
j:function(a){return"Unsupported operation: "+this.a}}
P.c0.prototype={
j:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aj.prototype={
j:function(a){return"Bad state: "+this.a}}
P.a5.prototype={
j:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.ju(t))+"."}}
P.dw.prototype={
j:function(a){return"Stack Overflow"},
$isbf:1}
P.e8.prototype={
j:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hW.prototype={
j:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.bG.prototype={
j:function(a){var t,s,r
t=this.a
s=t!=null&&""!==t?"FormatException: "+H.f(t):"FormatException"
r=this.b
if(typeof r!=="string")return s
if(r.length>78)r=C.e.aG(r,0,75)+"..."
return s+"\n"+r}}
P.ej.prototype={
j:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.G(P.k9(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.jD(b,"expando$values")
return s==null?null:H.jD(s,t)},
i:function(a,b,c){var t,s
t=this.b
if(typeof t!=="string")t.set(b,c)
else{s=H.jD(b,"expando$values")
if(s==null){s=new P.p()
H.kS(b,"expando$values",s)}H.kS(s,t,c)}}}
P.o.prototype={$isL:1,
$asL:function(){return[P.Y]}}
P.Z.prototype={
aC:function(a,b){return new H.dC(this,b,[H.ao(this,"Z",0)])},
gk:function(a){var t,s
H.d(!this.$isc)
t=this.gw(this)
for(s=0;t.q();)++s
return s},
ga3:function(a){var t,s
t=this.gw(this)
if(!t.q())throw H.e(H.eT())
s=t.gt()
if(t.q())throw H.e(H.n7())
return s},
u:function(a,b){var t,s,r
if(b<0)H.G(P.b0(b,0,null,"index",null))
for(t=this.gw(this),s=0;t.q();){r=t.gt()
if(b===s)return r;++s}throw H.e(P.E(b,this,"index",null,s))},
j:function(a){return P.n5(this,"(",")")}}
P.db.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.aI.prototype={}
P.aY.prototype={
gv:function(a){return P.p.prototype.gv.call(this,this)},
j:function(a){return"null"}}
P.Y.prototype={$isL:1,
$asL:function(){return[P.Y]}}
P.p.prototype={constructor:P.p,$isp:1,
A:function(a,b){return this===b},
gv:function(a){return H.aZ(this)},
j:function(a){return H.fG(this)},
gB:function(a){return new H.aJ(H.iW(this),null)},
toString:function(){return this.j(this)}}
P.bW.prototype={}
P.t.prototype={$isL:1,
$asL:function(){return[P.t]}}
P.bX.prototype={
gk:function(a){return this.a.length},
j:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga4:function(){return this.a}}
W.l.prototype={}
W.dX.prototype={
j:function(a){return String(a)},
$isa:1}
W.dY.prototype={
j:function(a){return String(a)},
$isa:1}
W.a4.prototype={$isp:1}
W.e1.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]},
$isq:1,
$asq:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cg.prototype={}
W.aP.prototype={$isa:1,$isaP:1}
W.ch.prototype={
cU:function(a,b,c){var t=this.dV(a,b,P.nU(c,null))
return t},
dV:function(a,b,c){return a.getContext(b,c)}}
W.e3.prototype={
aD:function(a){return P.iQ(a.getContextAttributes())}}
W.aQ.prototype={$isa:1,
gk:function(a){return a.length}}
W.e6.prototype={$isa:1}
W.C.prototype={$isp:1}
W.be.prototype={
bF:function(a,b){var t,s
t=$.$get$ku()
s=t[b]
if(typeof s==="string")return s
s=this.e8(a,b)
t[b]=s
return s},
e8:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mP()+b
if(t in a)return t
return b},
gk:function(a){return a.length}}
W.e7.prototype={}
W.e9.prototype={
h:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.ea.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gP:function(a){return a.z}}
W.cj.prototype={}
W.aS.prototype={
ec:function(a,b){return a.adoptNode(b)},
cV:function(a,b){return a.getElementById(b)},
cv:function(a,b){return a.querySelector(b)},
$isaS:1}
W.ck.prototype={$isa:1}
W.eb.prototype={
j:function(a){return String(a)}}
W.cl.prototype={
es:function(a,b){return a.createHTMLDocument(b)}}
W.ec.prototype={
gaB:function(a){return a.w},
gn:function(a){return a.x},
gp:function(a){return a.y},
gP:function(a){return a.z}}
W.cm.prototype={
gaB:function(a){return a.w},
gn:function(a){return a.x},
gp:function(a){return a.y},
gP:function(a){return a.z}}
W.cn.prototype={
j:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.ga2(a))+" x "+H.f(this.ga1(a))},
A:function(a,b){var t
if(b==null)return!1
t=J.u(b)
if(!t.$isM)return!1
return a.left===t.gb0(b)&&a.top===t.gb8(b)&&this.ga2(a)===t.ga2(b)&&this.ga1(a)===t.ga1(b)},
gv:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga2(a)
q=this.ga1(a)
return W.lh(W.b8(W.b8(W.b8(W.b8(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga1:function(a){return a.height},
gb0:function(a){return a.left},
gb8:function(a){return a.top},
ga2:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
$isM:1,
$asM:function(){}}
W.ed.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]},
$isq:1,
$asq:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]}}
W.ee.prototype={
gk:function(a){return a.length}}
W.a6.prototype={
gef:function(a){return new W.hQ(a)},
j:function(a){return a.localName},
eL:function(a,b,c,d,e){var t,s
t=this.O(a,c,d,e)
switch(b.toLowerCase()){case"beforebegin":J.k2(a.parentNode,t,a)
break
case"afterbegin":s=a.childNodes
this.cr(a,t,s.length>0?s[0]:null)
break
case"beforeend":this.R(a,t)
break
case"afterend":J.k2(a.parentNode,t,a.nextSibling)
break
default:H.G(P.dZ("Invalid position "+b))}},
O:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kC
if(t==null){t=H.I([],[W.dn])
s=new W.dp(t)
C.a.l(t,W.lf(null))
C.a.l(t,W.li())
$.kC=s
d=s}else d=t
t=$.kB
if(t==null){t=new W.dK(d)
$.kB=t
c=t}else{t.a=d
c=t}}if($.aG==null){t=document
s=t.implementation
s=(s&&C.A).es(s,"")
$.aG=s
$.jt=s.createRange()
s=$.aG
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aG.head;(t&&C.B).R(t,r)}t=$.aG
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jR(s,"$isaP")}t=$.aG
if(!!this.$isaP)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aG.body;(t&&C.i).R(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.C(C.L,a.tagName)){t=$.jt;(t&&C.x).cW(t,q)
t=$.jt
p=(t&&C.x).eq(t,b)}else{q.innerHTML=b
p=$.aG.createDocumentFragment()
for(t=J.j(p);s=q.firstChild,s!=null;)t.R(p,s)}t=$.aG.body
if(q==null?t!=null:q!==t)J.mr(q)
c.bg(p)
C.h.ec(document,p)
return p},
er:function(a,b,c){return this.O(a,b,c,null)},
d6:function(a,b,c,d){a.textContent=null
this.R(a,this.O(a,b,c,d))},
d5:function(a,b){return this.d6(a,b,null,null)},
a8:function(a,b){return a.getAttribute(b)},
e0:function(a,b){return a.removeAttribute(b)},
d3:function(a,b,c){return a.setAttribute(b,c)},
$isa:1,
$isp:1,
$isa6:1,
$ish:1,
$isr:1,
gf4:function(a){return a.tagName}}
W.iM.prototype={
$1:function(a){return!!J.u(a).$isa6},
$S:function(){return{func:1,args:[,]}}}
W.k.prototype={}
W.h.prototype={
dK:function(a,b,c,d){return a.addEventListener(b,H.b9(c,1),!1)},
$isp:1,
$ish:1}
W.a7.prototype={$isp:1}
W.eE.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]},
$isq:1,
$asq:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.eF.prototype={
gk:function(a){return a.length}}
W.eJ.prototype={
gk:function(a){return a.length}}
W.a8.prototype={$isp:1}
W.cu.prototype={}
W.eM.prototype={
gk:function(a){return a.length}}
W.bH.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.r]},
$isc:1,
$asc:function(){return[W.r]},
$isq:1,
$asq:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.cv.prototype={}
W.cw.prototype={
ff:function(a,b,c,d,e,f){return a.open(b,c,d,f,e)},
eX:function(a,b,c){return a.open(b,c)},
G:function(a,b){return a.send(b)}}
W.bI.prototype={}
W.eP.prototype={$isa:1,$isa6:1}
W.aW.prototype={$isp:1,$isaW:1}
W.f4.prototype={
j:function(a){return String(a)}}
W.fa.prototype={
gk:function(a){return a.length}}
W.fc.prototype={
fe:function(a,b,c){return a.send(b,c)},
G:function(a,b){return a.send(b)}}
W.bN.prototype={}
W.a9.prototype={$isp:1}
W.fd.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]},
$isq:1,
$asq:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.R.prototype={$isp:1,$isR:1}
W.fn.prototype={$isa:1}
W.W.prototype={
ga3:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.aj("No elements"))
if(s>1)throw H.e(new P.aj("More than one element"))
return t.firstChild},
N:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.j(s),p=0;p<r;++p)q.R(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.lW(t,c,C.v.h(t.childNodes,b))},
gw:function(a){var t=this.a.childNodes
return new W.cr(t,t.length,-1,null,[H.ao(t,"D",0)])},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){return C.v.h(this.a.childNodes,b)},
$asc:function(){return[W.r]},
$asde:function(){return[W.r]},
$asb:function(){return[W.r]},
$asbU:function(){return[W.r]}}
W.r.prototype={
eZ:function(a){var t=a.parentNode
if(t!=null)J.bw(t,a)},
j:function(a){var t=a.nodeValue
return t==null?this.dc(a):t},
R:function(a,b){return a.appendChild(b)},
cr:function(a,b,c){return a.insertBefore(b,c)},
e1:function(a,b){return a.removeChild(b)},
e2:function(a,b,c){return a.replaceChild(b,c)},
$isp:1,
$ish:1,
$isr:1,
gb3:function(a){return a.previousSibling}}
W.dm.prototype={
b4:function(a){return a.previousNode()}}
W.bT.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.r]},
$isc:1,
$asc:function(){return[W.r]},
$isq:1,
$asq:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.fw.prototype={$isa:1}
W.fz.prototype={
gk:function(a){return a.length}}
W.aa.prototype={$isp:1,
gk:function(a){return a.length}}
W.fB.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]},
$isq:1,
$asq:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.fE.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
W.fF.prototype={
G:function(a,b){return a.send(b)}}
W.ds.prototype={
eq:function(a,b){return a.createContextualFragment(b)},
cW:function(a,b){return a.selectNodeContents(b)}}
W.fO.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gP:function(a){return a.z}}
W.du.prototype={
G:function(a,b){return a.send(b)}}
W.bm.prototype={$isbm:1,
gk:function(a){return a.length}}
W.fS.prototype={$isa:1}
W.ab.prototype={$isp:1,$ish:1}
W.fT.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]},
$isq:1,
$asq:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.ac.prototype={$isp:1}
W.fV.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]},
$isq:1,
$asq:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.ad.prototype={$isp:1,
gk:function(a){return a.length}}
W.h_.prototype={
h:function(a,b){return this.bN(a,b)},
i:function(a,b,c){this.e7(a,b,c)},
ay:function(a,b){var t,s
for(t=0;!0;++t){s=this.dY(a,t)
if(s==null)return
b.$2(s,this.bN(a,s))}},
gk:function(a){return a.length},
bN:function(a,b){return a.getItem(b)},
dY:function(a,b){return a.key(b)},
e7:function(a,b,c){return a.setItem(b,c)}}
W.a_.prototype={$isp:1}
W.ak.prototype={}
W.dx.prototype={
O:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
t=W.mR("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.W(s).N(0,new W.W(t))
return s}}
W.h7.prototype={
O:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.y.O(t.createElement("table"),b,c,d)
t.toString
t=new W.W(t)
r=t.ga3(t)
r.toString
t=new W.W(r)
q=t.ga3(t)
s.toString
q.toString
new W.W(s).N(0,new W.W(q))
return s}}
W.h8.prototype={
O:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.y.O(t.createElement("table"),b,c,d)
t.toString
t=new W.W(t)
r=t.ga3(t)
s.toString
r.toString
new W.W(s).N(0,new W.W(r))
return s}}
W.bY.prototype={$isbY:1}
W.ae.prototype={$isp:1,$ish:1}
W.a0.prototype={$isp:1,$ish:1}
W.hb.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]},
$isq:1,
$asq:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.hc.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.ae]},
$isc:1,
$asc:function(){return[W.ae]},
$isq:1,
$asq:function(){return[W.ae]},
$isb:1,
$asb:function(){return[W.ae]}}
W.he.prototype={
gk:function(a){return a.length}}
W.af.prototype={$isp:1}
W.b1.prototype={$isp:1,$isb1:1}
W.hi.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.af]},
$isc:1,
$asc:function(){return[W.af]},
$isq:1,
$asq:function(){return[W.af]},
$isb:1,
$asb:function(){return[W.af]}}
W.hj.prototype={
gk:function(a){return a.length}}
W.bn.prototype={}
W.hl.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gP:function(a){return a.z}}
W.dB.prototype={
b4:function(a){return a.previousNode()}}
W.aK.prototype={}
W.hr.prototype={
j:function(a){return String(a)},
$isa:1}
W.ht.prototype={
gk:function(a){return a.length}}
W.hw.prototype={
gk:function(a){return a.length}}
W.hx.prototype={
G:function(a,b){return a.send(b)}}
W.b3.prototype={
gev:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.v("deltaY is not supported"))},
$isp:1,
$isR:1,
$isb3:1}
W.c1.prototype={
gee:function(a){var t,s
t=P.Y
s=new P.S(0,$.z,null,[t])
this.dT(a)
this.e3(a,W.lm(new W.hz(new P.iB(s,[t]))))
return s},
e3:function(a,b){return a.requestAnimationFrame(H.b9(b,1))},
dT:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.hz.prototype={
$1:function(a){this.a.ax(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hA.prototype={$isa:1}
W.b4.prototype={$isa:1}
W.hL.prototype={
j:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
A:function(a,b){var t,s,r
if(b==null)return!1
t=J.u(b)
if(!t.$isM)return!1
s=a.left
r=t.gb0(b)
if(s==null?r==null:s===r){s=a.top
r=t.gb8(b)
if(s==null?r==null:s===r){s=a.width
r=t.ga2(b)
if(s==null?r==null:s===r){s=a.height
t=t.ga1(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gv:function(a){var t,s,r,q
t=J.ar(a.left)
s=J.ar(a.top)
r=J.ar(a.width)
q=J.ar(a.height)
return W.lh(W.b8(W.b8(W.b8(W.b8(0,t),s),r),q))},
$isM:1,
$asM:function(){},
ga1:function(a){return a.height},
gb0:function(a){return a.left},
gb8:function(a){return a.top},
ga2:function(a){return a.width}}
W.dF.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[P.M]},
$isc:1,
$asc:function(){return[P.M]},
$isq:1,
$asq:function(){return[P.M]},
$isb:1,
$asb:function(){return[P.M]}}
W.hN.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.C]},
$isc:1,
$asc:function(){return[W.C]},
$isq:1,
$asq:function(){return[W.C]},
$isb:1,
$asb:function(){return[W.C]}}
W.hO.prototype={$isa:1}
W.hP.prototype={
ga1:function(a){return a.height},
ga2:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y}}
W.i9.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]},
$isq:1,
$asq:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.ia.prototype={$isa:1}
W.dI.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.r]},
$isc:1,
$asc:function(){return[W.r]},
$isq:1,
$asq:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.iv.prototype={$isa:1}
W.iy.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.ad]},
$isc:1,
$asc:function(){return[W.ad]},
$isq:1,
$asq:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.iz.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]},
$isq:1,
$asq:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.iG.prototype={$isa:1}
W.iH.prototype={$isa:1}
W.hJ.prototype={
ay:function(a,b){var t,s,r,q,p,o
for(t=this.gE(this),s=t.length,r=this.a,q=J.j(r),p=0;p<t.length;t.length===s||(0,H.J)(t),++p){o=t[p]
b.$2(o,q.a8(r,o))}},
gE:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.I([],[P.t])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
gdW:function(){return this.a}}
W.hQ.prototype={
h:function(a,b){return J.jq(this.a,b)},
i:function(a,b,c){J.mt(this.a,b,c)},
gk:function(a){return this.gE(this).length}}
W.hT.prototype={
eS:function(a,b,c,d){return W.al(this.a,this.b,a,!1,H.aL(this,0))}}
W.jJ.prototype={}
W.hU.prototype={
ea:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lV(r,this.c,t,!1)}},
dE:function(a,b,c,d,e){this.ea()}}
W.hV.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.c3.prototype={
a5:function(a){return $.$get$lg().C(0,W.bz(a))},
X:function(a,b,c){var t,s,r
t=W.bz(a)
s=$.$get$jK()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dF:function(a){var t,s
t=$.$get$jK()
if(t.gal(t)){for(s=0;s<262;++s)t.i(0,C.K[s],W.o2())
for(s=0;s<12;++s)t.i(0,C.l[s],W.o3())}}}
W.D.prototype={
gw:function(a){return new W.cr(a,this.gk(a),-1,null,[H.ao(a,"D",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.dp.prototype={
a5:function(a){return C.a.bZ(this.a,new W.fp(a))},
X:function(a,b,c){return C.a.bZ(this.a,new W.fo(a,b,c))}}
W.fp.prototype={
$1:function(a){return a.a5(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.fo.prototype={
$1:function(a){return a.X(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.c6.prototype={
a5:function(a){return this.a.C(0,W.bz(a))},
X:function(a,b,c){var t,s
t=W.bz(a)
s=this.c
if(s.C(0,H.f(t)+"::"+b))return this.d.ed(c)
else if(s.C(0,"*::"+b))return this.d.ed(c)
else{s=this.b
if(s.C(0,H.f(t)+"::"+b))return!0
else if(s.C(0,"*::"+b))return!0
else if(s.C(0,H.f(t)+"::*"))return!0
else if(s.C(0,"*::*"))return!0}return!1},
dI:function(a,b,c,d){var t,s,r
this.a.N(0,c)
t=b.aC(0,new W.iw())
s=b.aC(0,new W.ix())
this.b.N(0,t)
r=this.c
r.N(0,C.u)
r.N(0,s)}}
W.iw.prototype={
$1:function(a){return!C.a.C(C.l,a)},
$S:function(){return{func:1,args:[,]}}}
W.ix.prototype={
$1:function(a){return C.a.C(C.l,a)},
$S:function(){return{func:1,args:[,]}}}
W.iC.prototype={
X:function(a,b,c){if(this.df(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jq(a,"template")==="")return this.e.C(0,b)
return!1}}
W.iD.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.iA.prototype={
a5:function(a){var t=J.u(a)
if(!!t.$isbV)return!1
t=!!t.$isK
if(t&&W.bz(a)==="foreignObject")return!1
if(t)return!0
return!1},
X:function(a,b,c){if(b==="is"||C.e.bk(b,"on"))return!1
return this.a5(a)}}
W.cr.prototype={
q:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbP(J.bb(this.a,t))
this.c=t
return!0}this.sbP(null)
this.c=s
return!1},
gt:function(){return this.d},
sbP:function(a){this.d=a}}
W.dn.prototype={}
W.iu.prototype={}
W.dK.prototype={
bg:function(a){new W.iE(this).$2(a,null)},
aw:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bw(t,a)}else J.bw(b,a)},
e6:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.mg(a)
r=J.jq(s.gdW(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.U(n)}p="element unprintable"
try{p=J.aN(a)}catch(n){H.U(n)}try{o=W.bz(a)
this.e5(a,b,t,p,o,s,r)}catch(n){if(H.U(n) instanceof P.as)throw n
else{this.aw(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
e5:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.aw(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a5(a)){this.aw(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.aN(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.X(a,"is",g)){this.aw(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gE(f)
s=H.I(t.slice(0),[H.aL(t,0)])
for(r=f.gE(f).length-1,t=f.a,q=J.j(t);r>=0;--r){p=s[r]
if(!this.a.X(a,J.my(p),q.a8(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.a8(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.a8(t,p)
q.e0(t,p)}}if(!!J.u(a).$isbY)this.bg(a.content)}}
W.iE.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.e6(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bw(r,a)}else J.bw(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.mh(t)}catch(q){H.U(q)
r=t
J.bw(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.r,W.r]}}}
W.bA.prototype={$isc:1,
$asc:function(){return[W.ae]},
$isb:1,
$asb:function(){return[W.ae]}}
W.bB.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.bC.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.bD.prototype={$isc:1,
$asc:function(){return[W.ae]},
$isb:1,
$asb:function(){return[W.ae]}}
W.bE.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.bF.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cx.prototype={}
W.cR.prototype={$isc:1,
$asc:function(){return[P.M]},
$isb:1,
$asb:function(){return[P.M]}}
W.cD.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.cK.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.cL.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.cM.prototype={$isc:1,
$asc:function(){return[W.af]},
$isb:1,
$asb:function(){return[W.af]}}
W.cN.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.cO.prototype={$isc:1,
$asc:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.cP.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.cQ.prototype={$isc:1,
$asc:function(){return[W.C]},
$isb:1,
$asb:function(){return[W.C]}}
W.cB.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.cC.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.cE.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.cG.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.cH.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cI.prototype={$isc:1,
$asc:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]}}
W.cS.prototype={$isc:1,
$asc:function(){return[W.C]},
$isb:1,
$asb:function(){return[W.C]}}
W.cU.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.d3.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.d4.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.d2.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.d7.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.d8.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.d9.prototype={$isc:1,
$asc:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.da.prototype={$isc:1,
$asc:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]}}
W.cV.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.cX.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.cZ.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.d0.prototype={$isc:1,
$asc:function(){return[W.af]},
$isb:1,
$asb:function(){return[W.af]}}
W.d5.prototype={$isc:1,
$asc:function(){return[P.M]},
$isb:1,
$asb:function(){return[P.M]}}
W.d6.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
P.hB.prototype={
cp:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}C.a.l(t,a)
C.a.l(this.b,null)
return s},
b9:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.aR(s,!0)
r.dj(s,!0)
return r}if(a instanceof RegExp)throw H.e(new P.c0("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.nV(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.cp(a)
r=this.b
o=r[p]
t.a=o
if(o!=null)return o
o=P.m()
t.a=o
r[p]=o
this.eG(a,new P.hD(t,this))
return t.a}if(a instanceof Array){p=this.cp(a)
r=this.b
o=r[p]
if(o!=null)return o
n=J.a2(a)
m=n.gk(a)
o=this.c?new Array(m):a
r[p]=o
for(r=J.ba(o),l=0;C.b.aq(l,m);++l)r.i(o,l,this.b9(n.h(a,l)))
return o}return a}}
P.hD.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.b9(b)
J.lU(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.iN.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.t,,]}}}
P.hC.prototype={
eG:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.J)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.iO.prototype={
$1:function(a){return this.a.ax(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.iP.prototype={
$1:function(a){return this.a.em(a)},
$S:function(){return{func:1,args:[,]}}}
P.il.prototype={}
P.M.prototype={$asM:null}
P.dW.prototype={$isa:1}
P.aO.prototype={$isa:1}
P.ek.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.el.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.em.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.en.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eo.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ep.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eq.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.er.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.es.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.et.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eu.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ev.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ew.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ex.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gP:function(a){return a.z}}
P.ey.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ez.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gP:function(a){return a.z}}
P.eA.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eB.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eG.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eI.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ag.prototype={}
P.aH.prototype={$isa:1}
P.eN.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.au.prototype={$isp:1}
P.eZ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.E(b,a,null,null,null))
return this.a_(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a_:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.f7.prototype={$isa:1}
P.f8.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.aw.prototype={$isp:1}
P.fq.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.E(b,a,null,null,null))
return this.a_(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a_:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.aw]},
$isb:1,
$asb:function(){return[P.aw]}}
P.fx.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.fC.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.fD.prototype={
gk:function(a){return a.length}}
P.fI.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.fJ.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.bV.prototype={$isa:1,$isbV:1}
P.h4.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.E(b,a,null,null,null))
return this.a_(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a_:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]}}
P.K.prototype={
O:function(a,b,c,d){var t,s,r,q,p,o
t=H.I([],[W.dn])
C.a.l(t,W.lf(null))
C.a.l(t,W.li())
C.a.l(t,new W.iA())
c=new W.dK(new W.dp(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.i).er(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.W(q)
o=t.ga3(t)
for(t=J.j(p);r=o.firstChild,r!=null;)t.R(p,r)
return p},
$isa:1,
$isK:1}
P.h5.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.h6.prototype={$isa:1}
P.dy.prototype={}
P.ha.prototype={$isa:1}
P.bZ.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ax.prototype={$isp:1}
P.hk.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.E(b,a,null,null,null))
return this.a_(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a_:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ax]},
$isb:1,
$asb:function(){return[P.ax]}}
P.hs.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.hu.prototype={$isa:1}
P.hv.prototype={$isa:1}
P.c2.prototype={$isa:1}
P.ir.prototype={$isa:1}
P.is.prototype={$isa:1}
P.it.prototype={$isa:1}
P.cA.prototype={$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.cy.prototype={$isc:1,
$asc:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]}}
P.cF.prototype={$isc:1,
$asc:function(){return[P.aw]},
$isb:1,
$asb:function(){return[P.aw]}}
P.cJ.prototype={$isc:1,
$asc:function(){return[P.ax]},
$isb:1,
$asb:function(){return[P.ax]}}
P.cT.prototype={$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.d1.prototype={$isc:1,
$asc:function(){return[P.aw]},
$isb:1,
$asb:function(){return[P.aw]}}
P.cY.prototype={$isc:1,
$asc:function(){return[P.ax]},
$isb:1,
$asb:function(){return[P.ax]}}
P.d_.prototype={$isc:1,
$asc:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]}}
P.e0.prototype={
gk:function(a){return a.length}}
P.fM.prototype={
bX:function(a,b){return a.activeTexture(b)},
c_:function(a,b,c){return a.attachShader(b,c)},
c0:function(a,b,c){return a.bindBuffer(b,c)},
c1:function(a,b,c){return a.bindFramebuffer(b,c)},
c2:function(a,b,c){return a.bindTexture(b,c)},
c3:function(a,b){return a.blendEquation(b)},
c4:function(a,b,c){return a.blendFunc(b,c)},
c5:function(a,b,c,d){return a.bufferData(b,c,d)},
c6:function(a,b){return a.checkFramebufferStatus(b)},
c7:function(a,b){return a.clear(b)},
c8:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
ca:function(a,b){return a.compileShader(b)},
cb:function(a){return a.createBuffer()},
cc:function(a){return a.createFramebuffer()},
cd:function(a){return a.createProgram()},
ce:function(a,b){return a.createShader(b)},
cf:function(a){return a.createTexture()},
ci:function(a,b){return a.depthMask(b)},
cj:function(a,b){return a.disable(b)},
ck:function(a,b,c,d){return a.drawArrays(b,c,d)},
cl:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cm:function(a,b){return a.enable(b)},
cn:function(a,b){return a.enableVertexAttribArray(b)},
cq:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aD:function(a){return P.iQ(a.getContextAttributes())},
ba:function(a){return a.getError()},
bb:function(a,b){return a.getProgramInfoLog(b)},
bc:function(a,b,c){return a.getProgramParameter(b,c)},
bd:function(a,b){return a.getShaderInfoLog(b)},
be:function(a,b,c){return a.getShaderParameter(b,c)},
bf:function(a,b,c){return a.getUniformLocation(b,c)},
cs:function(a,b){return a.linkProgram(b)},
bj:function(a,b,c){return a.shaderSource(b,c)},
bl:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cB:function(a,b,c,d){return a.texParameterf(b,c,d)},
cC:function(a,b,c,d){return a.texParameteri(b,c,d)},
cD:function(a,b,c){return a.uniform1f(b,c)},
cE:function(a,b,c){return a.uniform1fv(b,c)},
cF:function(a,b,c){return a.uniform1i(b,c)},
cG:function(a,b,c){return a.uniform1iv(b,c)},
cH:function(a,b,c){return a.uniform2fv(b,c)},
cI:function(a,b,c){return a.uniform3fv(b,c)},
cJ:function(a,b,c){return a.uniform4fv(b,c)},
cK:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cL:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cN:function(a,b){return a.useProgram(b)},
cP:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cQ:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fN.prototype={
eg:function(a,b){return a.beginTransformFeedback(b)},
ej:function(a,b){return a.bindVertexArray(b)},
eu:function(a){return a.createVertexArray()},
eB:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eC:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eD:function(a){return a.endTransformFeedback()},
f5:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
fa:function(a,b,c,d){this.e9(a,b,c,d)
return},
e9:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
fc:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bX:function(a,b){return a.activeTexture(b)},
c_:function(a,b,c){return a.attachShader(b,c)},
c0:function(a,b,c){return a.bindBuffer(b,c)},
c1:function(a,b,c){return a.bindFramebuffer(b,c)},
c2:function(a,b,c){return a.bindTexture(b,c)},
c3:function(a,b){return a.blendEquation(b)},
c4:function(a,b,c){return a.blendFunc(b,c)},
c5:function(a,b,c,d){return a.bufferData(b,c,d)},
c6:function(a,b){return a.checkFramebufferStatus(b)},
c7:function(a,b){return a.clear(b)},
c8:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
ca:function(a,b){return a.compileShader(b)},
cb:function(a){return a.createBuffer()},
cc:function(a){return a.createFramebuffer()},
cd:function(a){return a.createProgram()},
ce:function(a,b){return a.createShader(b)},
cf:function(a){return a.createTexture()},
ci:function(a,b){return a.depthMask(b)},
cj:function(a,b){return a.disable(b)},
ck:function(a,b,c,d){return a.drawArrays(b,c,d)},
cl:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cm:function(a,b){return a.enable(b)},
cn:function(a,b){return a.enableVertexAttribArray(b)},
cq:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aD:function(a){return P.iQ(a.getContextAttributes())},
ba:function(a){return a.getError()},
bb:function(a,b){return a.getProgramInfoLog(b)},
bc:function(a,b,c){return a.getProgramParameter(b,c)},
bd:function(a,b){return a.getShaderInfoLog(b)},
be:function(a,b,c){return a.getShaderParameter(b,c)},
bf:function(a,b,c){return a.getUniformLocation(b,c)},
cs:function(a,b){return a.linkProgram(b)},
bj:function(a,b,c){return a.shaderSource(b,c)},
bl:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cB:function(a,b,c,d){return a.texParameterf(b,c,d)},
cC:function(a,b,c,d){return a.texParameteri(b,c,d)},
cD:function(a,b,c){return a.uniform1f(b,c)},
cE:function(a,b,c){return a.uniform1fv(b,c)},
cF:function(a,b,c){return a.uniform1i(b,c)},
cG:function(a,b,c){return a.uniform1iv(b,c)},
cH:function(a,b,c){return a.uniform2fv(b,c)},
cI:function(a,b,c){return a.uniform3fv(b,c)},
cJ:function(a,b,c){return a.uniform4fv(b,c)},
cK:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cL:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cN:function(a,b){return a.useProgram(b)},
cP:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cQ:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.iF.prototype={$isa:1}
P.fW.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.E(b,a,null,null,null))
return P.iQ(this.dX(a,b))},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
dX:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.aI]},
$isb:1,
$asb:function(){return[P.aI]}}
P.cz.prototype={$isc:1,
$asc:function(){return[P.aI]},
$isb:1,
$asb:function(){return[P.aI]}}
P.cW.prototype={$isc:1,
$asc:function(){return[P.aI]},
$isb:1,
$asb:function(){return[P.aI]}}
B.jb.prototype={
$1:function(a){$.$get$iR().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aW]}}}
B.jc.prototype={
$1:function(a){$.$get$iR().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aW]}}}
B.jd.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.nS=t
$.nT=C.b.aa(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jU=s-C.b.K(window.innerWidth,2)
$.lL=-(t-C.b.K(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.R]}}}
B.je.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.cd=t-C.b.K(window.innerWidth,2)
$.ce=-(s-C.b.K(window.innerHeight,2))
if(a.button===2)$.$get$cc().i(0,"right",!0)
else $.$get$cc().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.R]}}}
B.jf.prototype={
$1:function(a){if(a.button===2)$.$get$cc().i(0,"right",null)
else $.$get$cc().i(0,"left",null)},
$S:function(){return{func:1,args:[W.R]}}}
B.fr.prototype={
ds:function(a,b,c,d){var t
W.al(d,W.o1().$1(d),new B.fs(this),!1,W.b3)
W.al(d,"mousemove",new B.ft(this),!1,W.R)
t=W.b1
W.al(d,"touchstart",new B.fu(),!1,t)
W.al(d,"touchmove",new B.fv(this),!1,t)
B.oh(null)}}
B.fs.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.a4.gev(a)*r.k3
if(C.c.aa(r.fy,t)>0)r.fy=H.a1(C.c.aa(r.fy,t))}catch(q){s=H.U(q)
P.ap(s)}},
$S:function(){return{func:1,args:[W.b3]}}}
B.ft.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.a1(t.go+C.b.aa($.jU,$.cd)*0.01)
s=t.id
r=$.ce
q=$.lL
t.id=H.a1(s+(r-q)*0.01)
$.cd=$.jU
$.ce=q}},
$S:function(){return{func:1,args:[W.R]}}}
B.fu.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a6(t.clientX)
C.c.a6(t.clientY)
$.cd=s
C.c.a6(t.clientX)
$.ce=C.c.a6(t.clientY)},
$S:function(){return{func:1,args:[W.b1]}}}
B.fv.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a6(t.clientX)
t=C.c.a6(t.clientY)
r=this.a
r.go=H.a1(r.go+C.b.aa(s,$.cd)*0.01)
r.id=H.a1(r.id+($.ce-t)*0.01)
$.cd=s
$.ce=t},
$S:function(){return{func:1,args:[W.b1]}}}
G.fe.prototype={}
G.A.prototype={
m:function(a,b){var t=this.d
if(H.an(!t.F(0,a)))H.aB("uniform "+a+" already set")
t.i(0,a,b)},
bu:function(){return this.d},
j:function(a){var t,s,r,q
t=H.I(["{"+new H.aJ(H.iW(this),null).j(0)+"}["+this.a+"]"],[P.t])
for(s=this.d,r=s.gE(s),r=r.gw(r);r.q();){q=r.gt()
C.a.l(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.am(t,"\n")}}
G.e2.prototype={}
G.e5.prototype={
co:function(a,b,c){J.md(this.a,b)
if(c>0)J.mF(this.a,b,c)}}
G.cs.prototype={
bm:function(a,b,c,d,e){var t,s
t=this.a
s=this.b
J.jk(t.a,36160,s)
H.d(d>0&&e>0)
J.mG(t.a,b,c,d,e)
if(a!==0)J.m0(t.a,a)},
dm:function(a,b,c,d,e){var t,s,r
t=this.a
s=J.m3(t.a)
this.b=s
J.jk(t.a,36160,s)
s=this.c
if(s!=null){s=s.b
J.k_(t.a,36160,36064,3553,s,0)}s=this.d
if(s!=null){s=s.b
J.k_(t.a,36160,36096,3553,s,0)}r=J.m_(t.a,36160)
s=r===36053
if(H.an(s))H.aB("framebuffer error: "+H.f(r))
if(!s)throw H.e("Error Incomplete Framebuffer: "+H.f(r))
J.jk(t.a,36160,null)}}
G.eC.prototype={}
G.eD.prototype={}
G.ct.prototype={
as:function(a){var t=this.e
H.d(!t.F(0,a))
H.d(C.e.bk(a,"a"))
switch($.$get$X().h(0,a).a){case"vec2":t.i(0,a,H.I([],[T.H]))
break
case"vec3":t.i(0,a,H.I([],[T.y]))
break
case"vec4":t.i(0,a,H.I([],[T.aA]))
break
case"float":t.i(0,a,H.I([],[P.Q]))
break
case"uvec4":t.i(0,a,H.I([],[[P.b,P.o]]))
break
default:if(H.an(!1))H.aB("unknown type for "+a)}},
dh:function(a){var t,s,r,q,p,o
H.d(a.length===3)
t=this.d
s=t.length
C.a.l(this.b,new G.eC(s,s+1,s+2))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.J)(a),++q){p=a[q]
o=new T.y(new Float32Array(3))
o.a0(p)
C.a.l(t,o)}},
bo:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.J)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.l(t,new T.H(o))}},
bp:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.J)(b),++q){p=b[q]
o=new T.y(new Float32Array(3))
o.a0(p)
r.l(t,o)}},
bq:function(a){var t,s,r,q,p,o
H.d(a.length===4)
t=this.d
s=t.length
C.a.l(this.c,new G.eD(s,s+1,s+2,s+3))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.J)(a),++q){p=a[q]
o=new T.y(new Float32Array(3))
o.a0(p)
C.a.l(t,o)}},
dn:function(){var t,s,r,q,p,o,n,m,l,k
t=this.b
H.d(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.I(r,[P.o])
for(r=t.length,p=0,o=0;n=t.length,o<n;n===r||(0,H.J)(t),++o){m=t[o]
q[p]=m.a
q[p+1]=m.b
q[p+2]=m.c
p+=3}for(t=s.length,o=0;r=s.length,o<r;r===t||(0,H.J)(s),++o){l=s[o]
n=l.a
q[p]=n
q[p+1]=l.b
k=l.c
q[p+2]=k
q[p+3]=n
q[p+4]=k
q[p+5]=l.d
p+=6}H.d(p===q.length)
return q},
j:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gE(s),r=r.gw(r);r.q();){q=r.gt()
p=$.$get$X().h(0,q).a
C.a.l(t,H.f(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.am(t," ")}}
G.dA.prototype={}
G.dz.prototype={}
G.f9.prototype={}
G.fb.prototype={
br:function(a,b,c){var t,s
if(C.e.ac(a,0)===105){if(H.an(C.b.aI(b.length,c)===this.z))H.aB("ChangeAttribute "+this.z)}else H.d(C.b.aI(b.length,c)===(this.ch.length/3|0))
this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dQ(t.a,34962,s)
J.jZ(t.a,34962,b,35048)},
dq:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
ab:function(a,b,c){var t,s,r,q,p,o
t=J.jW(a,0)===105
if(t&&this.z===0)this.z=C.b.aI(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.jm(r.a))
this.br(a,b,c)
q=$.$get$X().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.an(p.F(0,a)))H.aB("unexpected attribute "+a)
o=p.h(0,a)
J.dS(r.a,this.e)
r.co(0,o,t?1:0)
s=s.h(0,a)
p=q.bt()
J.dQ(r.a,34962,s)
J.k8(r.a,o,p,5126,!1,0,0)},
j:function(a){var t,s,r
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,t=t.gE(t),t=t.gw(t);t.q();){r=t.gt()
C.a.l(s,H.f(r)+":"+this.cy.h(0,r).length)}return"MESH["+this.a+"] "+C.a.am(s,"  ")},
saO:function(a){this.cx=a}}
G.fy.prototype={
di:function(a,b){var t=C.b.cS(a,b)
if(this.z===t)return
this.z=t
this.bw()},
bw:function(){var t,s,r,q,p,o,n
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
t.a9(0,0,1/(p*s))
t.a9(1,1,1/p)
t.a9(2,2,(q+r)/o)
t.a9(3,2,-1)
t.a9(2,3,2*r*q/o)},
bu:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.y(new Float32Array(H.w(3)))
o.V(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.a0(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.u(n)
r=!!s.$isaA
k=r?s.gaB(n):1
if(!!s.$isy){j=s.gn(n)
m=s.gp(n)
l=s.gP(n)
n=j}else if(r){j=s.gn(n)
m=s.gp(n)
l=s.gP(n)
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
a3.a0(this.db)
a3.eW(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fL.prototype={
dA:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gk(t)===s.gk(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gE(s),s=s.gw(s);s.q();){q=s.gt()
if(!t.F(0,q))C.a.l(r,q)}for(t=this.x,s=new P.c4(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.q();){q=s.d
if(!t.C(0,q))C.a.l(r,q)}return r},
dD:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gE(b),s=s.gw(s),r=this.d,q=this.y,p=this.z,o=0;s.q();){n=s.gt()
switch(J.jW(n,0)){case 117:if(q.F(0,n)){m=b.h(0,n)
if(p.F(0,n))H.bv("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$X().h(0,n)
if(l==null)H.G("unknown "+n)
H.d(q.F(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.jr(r.a,k,m)
else if(!!J.u(m).$iskG)J.mD(r.a,k,m)
break
case"float":if(l.c===0)J.mB(r.a,k,m)
else if(!!J.u(m).$iseH)J.mC(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aE(m,"$isav").a
J.k7(r.a,k,!1,j)}else if(!!J.u(m).$iseH)J.k7(r.a,k,!1,m)
else if(H.an(!1))H.aB("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.aE(m,"$isbL").a
J.k6(r.a,k,!1,j)}else if(!!J.u(m).$iseH)J.k6(r.a,k,!1,m)
else if(H.an(!1))H.aB("bad unform: "+n)
break
case"vec4":if(l.c===0){j=H.aE(m,"$isaA").a
J.k5(r.a,k,j)}else J.k5(r.a,k,m)
break
case"vec3":if(l.c===0){j=H.aE(m,"$isy").a
J.k4(r.a,k,j)}else J.k4(r.a,k,m)
break
case"vec2":if(l.c===0){j=H.aE(m,"$isH").a
J.k3(r.a,k,j)}else J.k3(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a7(33984,this.ch)
J.jX(r.a,j)
j=H.aE(m,"$isc_").b
J.dR(r.a,3553,j)
j=this.ch
J.jr(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.a7(33984,this.ch)
J.jX(r.a,j)
j=H.aE(m,"$isc_").b
J.dR(r.a,34067,j)
j=this.ch
J.jr(r.a,k,j)
this.ch=this.ch+1
break
default:H.bv("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":if(J.B(m,!0))J.dT(r.a,2929)
else J.jn(r.a,2929)
break
case"cStencilFunc":H.aE(m,"$isdA")
j=m.a
if(j===1281)J.jn(r.a,2960)
else{J.dT(r.a,2960)
i=m.b
h=m.c
J.mv(r.a,j,i,h)}break
case"cDepthWrite":J.m7(r.a,m)
break
case"cBlendEquation":H.aE(m,"$isdz")
j=m.a
if(j===1281)J.jn(r.a,3042)
else{J.dT(r.a,3042)
i=m.b
h=m.c
J.lZ(r.a,i,h)
J.lY(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aF(1000*(s-new P.aR(t,!1).a)).j(0)},
dk:function(a,b,c){var t,s,r,q,p,o,n,m,l
Date.now()
t=this.d
s=this.r
J.mE(t.a,s)
this.ch=0
this.z.Y(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.J)(b),++r){q=b[r]
this.dD(q.a,q.bu())}s=this.Q
s.Y(0)
for(p=a.cy,p=p.gE(p),p=p.gw(p);p.q();)s.l(0,p.gt())
o=this.dA()
if(o.length!==0)P.ap("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(o)))
s=a.d
p=a.e
J.dS(s.a,p)
n=this.e.f.length>0
p=a.f
s=a.dq()
m=a.Q
l=a.z
t.toString
if(n)J.lX(t.a,p)
if(m!==-1)if(l>1)J.mb(t.a,p,s,m,0,l)
else J.ma(t.a,p,s,m,0)
else if(l>1)J.m9(t.a,p,0,s,l)
else J.m8(t.a,p,0,s)
if(n)J.me(t.a)},
bs:function(a,b){return this.dk(a,b,null)},
dt:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.e
r=s.b
q=this.f
p=q.b
o=s.f
n=J.m4(t.a)
m=G.ld(t.a,35633,r)
J.jY(t.a,n,m)
l=G.ld(t.a,35632,p)
J.jY(t.a,n,l)
if(o.length>0)J.mz(t.a,n,o,35980)
J.mp(t.a,n)
if(!J.mo(t.a,n,35714))H.G(J.mn(t.a,n))
this.r=n
this.sdL(0,P.jA(s.c,null))
for(s=s.d,r=s.length,p=this.y,k=0;k<s.length;s.length===r||(0,H.J)(s),++k){j=s[k]
o=this.r
p.i(0,j,J.k1(t.a,o,j))}for(s=q.d,r=s.length,k=0;k<s.length;s.length===r||(0,H.J)(s),++k){j=s[k]
q=this.r
p.i(0,j,J.k1(t.a,q,j))}},
sdL:function(a,b){this.x=b}}
G.i.prototype={
bt:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.N.prototype={
bn:function(a){var t,s,r,q,p
H.d(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.J)(a),++q){p=a[q]
H.d($.$get$X().F(0,p))
H.d(!C.a.C(s,p))
C.a.l(s,p)
r.i(0,p,this.r);++this.r}C.a.aF(s)},
H:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.J)(a),++r){q=a[r]
if(H.an($.$get$X().F(0,q)))H.aB("missing uniform "+q)
H.d(!C.a.C(s,q))
C.a.l(s,q)}C.a.aF(s)},
D:function(a){var t,s,r
H.d(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.d($.$get$X().F(0,r))
H.d(!C.a.C(t,r))
C.a.l(t,r)}C.a.aF(t)},
bv:function(a,b){H.d(this.b==null)
this.b=this.bx(!0,a,b)},
aJ:function(a){return this.bv(a,null)},
du:function(a,b){H.d(this.b==null)
this.b=this.bx(!1,a,b)},
M:function(a){return this.du(a,null)},
bx:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.J)(t),++o){n=t[o]
m=$.$get$X().h(0,n)
C.a.l(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.J)(t),++o){k=t[o]
m=$.$get$X().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.J)(t),++o){k=t[o]
m=$.$get$X().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.J)(t),++o){k=t[o]
m=$.$get$X().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.l(q,"")
if(c!=null)C.a.N(q,c)
if(a)C.a.l(q,"void main(void) {")
C.a.N(q,b)
if(a)C.a.l(q,"}")
return C.a.am(q,"\n")}}
G.fU.prototype={}
G.hd.prototype={}
G.c_.prototype={
j:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.hp.prototype={
j:function(a){return"TypedTexture["+this.a+", "+this.x+", "+H.f(this.f)+" X "+H.f(this.r)+"]"},
dz:function(a,b,c,d,e,f){var t,s,r,q,p
t=this.d
s=this.c
J.dR(t.a,s,this.b)
J.mx(t.a,3553,1,this.x,this.f,this.r)
r=this.e
q=r.e
if(q!==1)J.mw(t.a,s,34046,q)
q=r.r
J.dV(t.a,s,10240,q)
q=r.f
J.dV(t.a,s,10241,q)
if(r.b){J.dV(t.a,s,10242,33071)
J.dV(t.a,s,10243,33071)}p=J.mm(t.a)
if(H.an(p===0))H.aB("texture error "+H.f(p))
J.dR(t.a,s,null)}}
R.fY.prototype={
dG:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.nw("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.n).bF(r,"float")
r.setProperty(p,"left","")
p=C.n.bF(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.j.R(t,s)}return t},
dv:function(a,b,c){var t,s,r
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
J.jj(this.a,s)
r=this.dG(b,c,90,30)
this.d=r
J.jj(this.a,r)
t=t.createElement("div")
this.c=t
J.jj(this.a,t)}}
R.fZ.prototype={
dC:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.q.f9(s,2)+" fps"
t=this.c;(t&&C.j).d5(t,b)
r=C.b.K(30*C.q.ek(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.j).R(t,q)},
dB:function(a){return this.dC(a,"")}}
D.f3.prototype={
$1:function(a){this.a.ax(0,W.nE(this.b.response))},
$S:function(){return{func:1,args:[,]}}}
A.iX.prototype={
$2:function(a,b){var t=536870911&a+J.ar(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.o,P.p]}}}
T.bL.prototype={
j:function(a){return"[0] "+this.U(0).j(0)+"\n[1] "+this.U(1).j(0)+"\n[2] "+this.U(2).j(0)+"\n"},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.bL){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gv:function(a){return A.dN(this.a)},
U:function(a){var t,s
t=new Float32Array(H.w(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.y(t)},
bh:function(a,b){var t=this.a
t[0]=t[0]*b
t[1]=t[1]*b
t[2]=t[2]*b
t[3]=t[3]*b
t[4]=t[4]*b
t[5]=t[5]*b
t[6]=t[6]*b
t[7]=t[7]*b
t[8]=t[8]*b}}
T.av.prototype={
a9:function(a,b,c){H.d(a<4)
H.d(b<4)
this.a[b*4+a]=c},
a0:function(a){var t,s
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
j:function(a){return"[0] "+this.U(0).j(0)+"\n[1] "+this.U(1).j(0)+"\n[2] "+this.U(2).j(0)+"\n[3] "+this.U(3).j(0)+"\n"},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.av){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gv:function(a){return A.dN(this.a)},
U:function(a){var t,s
t=new Float32Array(H.w(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aA(t)},
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
eW:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.H.prototype={
j:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.H){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gv:function(a){return A.dN(this.a)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
gk:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gn:function(a){return this.a[0]},
gp:function(a){return this.a[1]}}
T.y.prototype={
V:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
a0:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
j:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.y){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gv:function(a){return A.dN(this.a)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
gk:function(a){return Math.sqrt(this.gb1())},
gb1:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
b2:function(a){var t,s,r
t=Math.sqrt(this.gb1())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
aZ:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
cg:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.y(new Float32Array(H.w(3)))
t.V(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
gn:function(a){return this.a[0]},
gp:function(a){return this.a[1]},
gP:function(a){return this.a[2]}}
T.aA.prototype={
j:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aA){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gv:function(a){return A.dN(this.a)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
gk:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gn:function(a){return this.a[0]},
gp:function(a){return this.a[1]},
gP:function(a){return this.a[2]},
gaB:function(a){return this.a[3]}}
U.eh.prototype={
dl:function(a,b,c){$.$get$co().i(0,this.c.a,this)}}
U.j7.prototype={
$1:function(b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
t=this.a
t.b=b5+0
s=this.e
s.go=H.a1(s.go+0.01)
r=s.k4
if(r.h(0,37)!=null)s.go=H.a1(s.go+0.03)
else if(r.h(0,39)!=null)s.go=H.a1(s.go-0.03)
if(r.h(0,38)!=null)s.id=H.a1(s.id+0.03)
else if(r.h(0,40)!=null)s.id=H.a1(s.id-0.03)
if(r.h(0,33)!=null)s.fy=H.a1(s.fy*0.99)
else if(r.h(0,34)!=null)s.fy=H.a1(s.fy*1.01)
if(r.h(0,32)!=null){s.go=0
s.id=0}r=H.a1(C.c.el(s.id,-1.4707963267948965,1.4707963267948965))
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
r=m[12]
q=m[13]
n=m[14]
l=new T.y(new Float32Array(H.w(3)))
l.V(0,1,0)
k=s.e
j=k.a
j[0]=m[12]
j[1]=m[13]
j[2]=m[14]
j=new Float32Array(H.w(3))
i=new T.y(j)
i.a0(k)
j[0]=j[0]-p[0]
j[1]=j[1]-p[1]
j[2]=j[2]-p[2]
i.b2(0)
h=l.cg(i)
h.b2(0)
g=i.cg(h)
g.b2(0)
p=h.aZ(k)
f=g.aZ(k)
k=i.aZ(k)
e=h.a
d=e[0]
c=g.a
b=c[0]
a=j[0]
a0=e[1]
a1=c[1]
a2=j[1]
e=e[2]
c=c[2]
j=j[2]
m[15]=1
m[14]=-k
m[13]=-f
m[12]=-p
m[11]=0
m[10]=j
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
m[12]=r
m[13]=q
m[14]=n
n=s.f
q=n.a
q[0]=m[2]
q[1]=m[6]
q[2]=m[10]
s=-s.k1
n=Math.sqrt(n.gb1())
h=q[0]/n
g=q[1]/n
i=q[2]/n
n=Math.cos(s)
s=Math.sin(s)
a3=1-n
a4=h*h*a3+n
q=i*s
a5=h*g*a3-q
r=g*s
a6=h*i*a3+r
a7=g*h*a3+q
a8=g*g*a3+n
s=h*s
a9=g*i*a3-s
b0=i*h*a3-r
b1=i*g*a3+s
b2=i*i*a3+n
n=m[0]
s=m[4]
r=m[8]
q=m[1]
d=m[5]
b=m[9]
a=m[2]
a0=m[6]
a1=m[10]
a2=m[3]
e=m[7]
c=m[11]
m[0]=n*a4+s*a7+r*b0
m[1]=q*a4+d*a7+b*b0
m[2]=a*a4+a0*a7+a1*b0
m[3]=a2*a4+e*a7+c*b0
m[4]=n*a5+s*a8+r*b1
m[5]=q*a5+d*a8+b*b1
m[6]=a*a5+a0*a8+a1*b1
m[7]=a2*a5+e*a8+c*b1
m[8]=n*a6+s*a9+r*b2
m[9]=q*a6+d*a9+b*b2
m[10]=a*a6+a0*a9+a1*b2
m[11]=a2*a6+e*a9+c*b2
this.b.dB(b5)
b3=$.$get$co().h(0,$.$get$dM().value)
b4=b5/1000
s=$.$get$dM().value
if(s==="tv-distortion")b3.c.d.i(0,"uTime",b4)
else if(s==="hexalate-varying")b3.c.d.i(0,"uPointSize",U.jF(4,30,20,b4))
else if(s==="square-varying")b3.c.d.i(0,"uPointSize",U.jF(4,30,20,b4))
else if(s==="lumidots-varying")b3.c.d.i(0,"uPointSize",U.jF(4,30,20,b4))
s=this.c
r=this.d
this.x.bm(17664,0,0,s,r)
this.y.bs(t.a,[this.f,this.Q])
this.r.bm(17664,0,0,s,r)
b3.b.bs(this.z,[b3.c])
C.a5.gee(window).b6(this)},
$S:function(){return{func:1,v:true,args:[P.Y]}}}
U.j8.prototype={
$1:function(a){this.a.a=G.kF("",this.b,Y.mZ(J.bb(a,0)))
this.c.$1(0)},
$S:function(){return{func:1,args:[P.b]}}}
J.a.prototype.dc=J.a.prototype.j
J.bJ.prototype.de=J.bJ.prototype.j
P.Z.prototype.dd=P.Z.prototype.aC
W.a6.prototype.aH=W.a6.prototype.O
W.c6.prototype.df=W.c6.prototype.X;(function installTearOffs(){installTearOff(H.b6.prototype,"geR",0,0,0,null,["$0"],["aA"],0)
installTearOff(H.am.prototype,"gcX",0,0,0,null,["$1"],["L"],2)
installTearOff(H.b5.prototype,"gex",0,0,0,null,["$1"],["Z"],2)
installTearOff(P,"nO",1,0,0,null,["$1"],["nt"],1)
installTearOff(P,"nP",1,0,0,null,["$1"],["nu"],1)
installTearOff(P,"nQ",1,0,0,null,["$1"],["nv"],1)
installTearOff(P,"lq",1,0,0,null,["$0"],["nL"],0)
installTearOff(P.S.prototype,"gdO",0,0,0,null,["$2","$1"],["J","dP"],5)
installTearOff(P,"nW",1,0,0,null,["$2"],["mM"],6)
installTearOff(W,"o1",1,0,0,null,["$1"],["mS"],7)
installTearOff(W,"o2",1,0,0,null,["$4"],["ny"],4)
installTearOff(W,"o3",1,0,0,null,["$4"],["nz"],4)
installTearOff(W.dm.prototype,"gb3",0,1,0,null,["$0"],["b4"],3)
installTearOff(W.dB.prototype,"gb3",0,1,0,null,["$0"],["b4"],3)
installTearOff(U,"ly",1,0,0,null,["$0"],["ob"],0)})();(function inheritance(){inherit(P.p,null)
var t=P.p
inherit(H.jx,t)
inherit(J.a,t)
inherit(J.e_,t)
inherit(P.Z,t)
inherit(H.df,t)
inherit(P.db,t)
inherit(H.cq,t)
inherit(H.bd,t)
inherit(H.ii,t)
inherit(H.b6,t)
inherit(H.hR,t)
inherit(H.b7,t)
inherit(H.ih,t)
inherit(H.hK,t)
inherit(H.bl,t)
inherit(H.hf,t)
inherit(H.at,t)
inherit(H.am,t)
inherit(H.b5,t)
inherit(H.fK,t)
inherit(H.hm,t)
inherit(P.bf,t)
inherit(H.dJ,t)
inherit(H.aJ,t)
inherit(H.ah,t)
inherit(H.f_,t)
inherit(H.f1,t)
inherit(H.eW,t)
inherit(H.ij,t)
inherit(P.hM,t)
inherit(P.dG,t)
inherit(P.S,t)
inherit(P.dD,t)
inherit(P.h0,t)
inherit(P.h1,t)
inherit(P.bc,t)
inherit(P.iI,t)
inherit(P.fR,t)
inherit(P.ie,t)
inherit(P.c4,t)
inherit(P.bU,t)
inherit(P.x,t)
inherit(P.ig,t)
inherit(P.aC,t)
inherit(P.L,t)
inherit(P.aR,t)
inherit(P.Y,t)
inherit(P.aF,t)
inherit(P.dw,t)
inherit(P.hW,t)
inherit(P.bG,t)
inherit(P.ej,t)
inherit(P.b,t)
inherit(P.aI,t)
inherit(P.aY,t)
inherit(P.bW,t)
inherit(P.t,t)
inherit(P.bX,t)
inherit(W.e7,t)
inherit(W.hJ,t)
inherit(W.c3,t)
inherit(W.D,t)
inherit(W.dp,t)
inherit(W.c6,t)
inherit(W.iA,t)
inherit(W.cr,t)
inherit(W.dn,t)
inherit(W.iu,t)
inherit(W.dK,t)
inherit(P.hB,t)
inherit(P.il,t)
inherit(G.fe,t)
inherit(G.e5,t)
inherit(G.cs,t)
inherit(G.eC,t)
inherit(G.eD,t)
inherit(G.ct,t)
inherit(G.dA,t)
inherit(G.dz,t)
inherit(G.i,t)
inherit(G.N,t)
inherit(G.hd,t)
inherit(G.c_,t)
inherit(R.fY,t)
inherit(T.bL,t)
inherit(T.av,t)
inherit(T.H,t)
inherit(T.y,t)
inherit(T.aA,t)
inherit(U.eh,t)
t=J.a
inherit(J.eU,t)
inherit(J.eV,t)
inherit(J.bJ,t)
inherit(J.aT,t)
inherit(J.bh,t)
inherit(J.aU,t)
inherit(H.bO,t)
inherit(H.bj,t)
inherit(W.h,t)
inherit(W.a4,t)
inherit(W.cg,t)
inherit(W.e3,t)
inherit(W.C,t)
inherit(W.cx,t)
inherit(W.e9,t)
inherit(W.ea,t)
inherit(W.eb,t)
inherit(W.cl,t)
inherit(W.cm,t)
inherit(W.cn,t)
inherit(W.cI,t)
inherit(W.ee,t)
inherit(W.k,t)
inherit(W.cH,t)
inherit(W.a8,t)
inherit(W.eM,t)
inherit(W.cG,t)
inherit(W.f4,t)
inherit(W.fa,t)
inherit(W.a9,t)
inherit(W.cE,t)
inherit(W.fn,t)
inherit(W.dm,t)
inherit(W.cK,t)
inherit(W.fw,t)
inherit(W.bn,t)
inherit(W.aa,t)
inherit(W.cD,t)
inherit(W.ak,t)
inherit(W.ds,t)
inherit(W.ac,t)
inherit(W.cC,t)
inherit(W.ad,t)
inherit(W.h_,t)
inherit(W.a_,t)
inherit(W.cB,t)
inherit(W.he,t)
inherit(W.af,t)
inherit(W.cM,t)
inherit(W.hj,t)
inherit(W.dB,t)
inherit(W.hr,t)
inherit(W.hw,t)
inherit(W.hL,t)
inherit(W.cR,t)
inherit(W.cQ,t)
inherit(W.cP,t)
inherit(W.cL,t)
inherit(W.cO,t)
inherit(W.cN,t)
inherit(W.iG,t)
inherit(W.iH,t)
inherit(P.au,t)
inherit(P.cA,t)
inherit(P.aw,t)
inherit(P.cF,t)
inherit(P.fC,t)
inherit(P.fD,t)
inherit(P.fI,t)
inherit(P.cy,t)
inherit(P.ax,t)
inherit(P.cJ,t)
inherit(P.hv,t)
inherit(P.e0,t)
inherit(P.fM,t)
inherit(P.fN,t)
inherit(P.iF,t)
inherit(P.cz,t)
t=J.bJ
inherit(J.fA,t)
inherit(J.b2,t)
inherit(J.aV,t)
inherit(J.jw,J.aT)
t=J.bh
inherit(J.dd,t)
inherit(J.dc,t)
t=P.Z
inherit(H.c,t)
inherit(H.dg,t)
inherit(H.dC,t)
t=H.c
inherit(H.bi,t)
inherit(H.f0,t)
inherit(H.ei,H.dg)
t=P.db
inherit(H.f5,t)
inherit(H.hy,t)
t=H.bi
inherit(H.bK,t)
inherit(P.f2,t)
t=H.bd
inherit(H.jg,t)
inherit(H.jh,t)
inherit(H.ic,t)
inherit(H.hS,t)
inherit(H.eQ,t)
inherit(H.eR,t)
inherit(H.ik,t)
inherit(H.hg,t)
inherit(H.hh,t)
inherit(H.ji,t)
inherit(H.j1,t)
inherit(H.j2,t)
inherit(H.j3,t)
inherit(H.j4,t)
inherit(H.j5,t)
inherit(H.h9,t)
inherit(H.eX,t)
inherit(H.iY,t)
inherit(H.iZ,t)
inherit(H.j_,t)
inherit(P.hG,t)
inherit(P.hF,t)
inherit(P.hH,t)
inherit(P.hI,t)
inherit(P.eL,t)
inherit(P.eK,t)
inherit(P.hX,t)
inherit(P.i4,t)
inherit(P.i0,t)
inherit(P.i1,t)
inherit(P.i2,t)
inherit(P.hZ,t)
inherit(P.i3,t)
inherit(P.hY,t)
inherit(P.i7,t)
inherit(P.i8,t)
inherit(P.i6,t)
inherit(P.i5,t)
inherit(P.h2,t)
inherit(P.h3,t)
inherit(P.iL,t)
inherit(P.ip,t)
inherit(P.io,t)
inherit(P.iq,t)
inherit(P.f6,t)
inherit(P.ef,t)
inherit(P.eg,t)
inherit(W.iM,t)
inherit(W.hz,t)
inherit(W.hV,t)
inherit(W.fp,t)
inherit(W.fo,t)
inherit(W.iw,t)
inherit(W.ix,t)
inherit(W.iD,t)
inherit(W.iE,t)
inherit(P.hD,t)
inherit(P.iN,t)
inherit(P.iO,t)
inherit(P.iP,t)
inherit(B.jb,t)
inherit(B.jc,t)
inherit(B.jd,t)
inherit(B.je,t)
inherit(B.jf,t)
inherit(B.fs,t)
inherit(B.ft,t)
inherit(B.fu,t)
inherit(B.fv,t)
inherit(D.f3,t)
inherit(A.iX,t)
inherit(U.j7,t)
inherit(U.j8,t)
t=H.hK
inherit(H.bq,t)
inherit(H.c7,t)
t=P.bf
inherit(H.dq,t)
inherit(H.eY,t)
inherit(H.hq,t)
inherit(H.ho,t)
inherit(H.e4,t)
inherit(H.fP,t)
inherit(P.cf,t)
inherit(P.bk,t)
inherit(P.as,t)
inherit(P.v,t)
inherit(P.c0,t)
inherit(P.aj,t)
inherit(P.a5,t)
inherit(P.e8,t)
t=H.h9
inherit(H.fX,t)
inherit(H.by,t)
inherit(H.hE,P.cf)
t=H.bj
inherit(H.ff,t)
inherit(H.di,t)
t=H.di
inherit(H.bQ,t)
inherit(H.bP,t)
inherit(H.bR,H.bQ)
inherit(H.dj,H.bR)
inherit(H.bS,H.bP)
inherit(H.dk,H.bS)
t=H.dj
inherit(H.dh,t)
inherit(H.fg,t)
t=H.dk
inherit(H.fh,t)
inherit(H.fi,t)
inherit(H.fj,t)
inherit(H.fk,t)
inherit(H.fl,t)
inherit(H.dl,t)
inherit(H.fm,t)
t=P.hM
inherit(P.dE,t)
inherit(P.iB,t)
inherit(P.im,P.iI)
inherit(P.dH,H.ah)
inherit(P.fQ,P.fR)
inherit(P.ib,P.fQ)
inherit(P.id,P.ib)
inherit(P.de,P.bU)
t=P.Y
inherit(P.Q,t)
inherit(P.o,t)
t=P.as
inherit(P.dt,t)
inherit(P.eO,t)
t=W.h
inherit(W.r,t)
inherit(W.bC,t)
inherit(W.e6,t)
inherit(W.eF,t)
inherit(W.bI,t)
inherit(W.bN,t)
inherit(W.fF,t)
inherit(W.du,t)
inherit(W.fS,t)
inherit(W.ab,t)
inherit(W.bB,t)
inherit(W.ae,t)
inherit(W.a0,t)
inherit(W.bA,t)
inherit(W.ht,t)
inherit(W.hx,t)
inherit(W.c1,t)
inherit(W.hA,t)
inherit(W.b4,t)
inherit(W.iv,t)
t=W.r
inherit(W.a6,t)
inherit(W.aQ,t)
inherit(W.aS,t)
inherit(W.ck,t)
inherit(W.hO,t)
t=W.a6
inherit(W.l,t)
inherit(P.K,t)
t=W.l
inherit(W.dX,t)
inherit(W.dY,t)
inherit(W.aP,t)
inherit(W.ch,t)
inherit(W.cj,t)
inherit(W.eJ,t)
inherit(W.cu,t)
inherit(W.eP,t)
inherit(W.bm,t)
inherit(W.dx,t)
inherit(W.h7,t)
inherit(W.h8,t)
inherit(W.bY,t)
inherit(W.ia,t)
inherit(W.bF,W.bC)
inherit(W.e1,W.bF)
inherit(W.be,W.cx)
inherit(W.ec,W.cm)
inherit(W.da,W.cI)
inherit(W.ed,W.da)
inherit(W.a7,W.cg)
inherit(W.d8,W.cH)
inherit(W.eE,W.d8)
inherit(W.d2,W.cG)
inherit(W.bH,W.d2)
inherit(W.cv,W.aS)
inherit(W.cw,W.bI)
inherit(W.aK,W.k)
t=W.aK
inherit(W.aW,t)
inherit(W.R,t)
inherit(W.b1,t)
inherit(W.fc,W.bN)
inherit(W.d4,W.cE)
inherit(W.fd,W.d4)
inherit(W.W,P.de)
inherit(W.d3,W.cK)
inherit(W.bT,W.d3)
t=W.bn
inherit(W.fz,t)
inherit(W.fO,t)
inherit(W.hl,t)
inherit(W.cU,W.cD)
inherit(W.fB,W.cU)
inherit(W.fE,W.ak)
inherit(W.bE,W.bB)
inherit(W.fT,W.bE)
inherit(W.cX,W.cC)
inherit(W.fV,W.cX)
inherit(W.cV,W.cB)
inherit(W.hb,W.cV)
inherit(W.bD,W.bA)
inherit(W.hc,W.bD)
inherit(W.d0,W.cM)
inherit(W.hi,W.d0)
inherit(W.b3,W.R)
inherit(W.d5,W.cR)
inherit(W.dF,W.d5)
inherit(W.cS,W.cQ)
inherit(W.hN,W.cS)
inherit(W.hP,W.cn)
inherit(W.cZ,W.cP)
inherit(W.i9,W.cZ)
inherit(W.d7,W.cL)
inherit(W.dI,W.d7)
inherit(W.d9,W.cO)
inherit(W.iy,W.d9)
inherit(W.d6,W.cN)
inherit(W.iz,W.d6)
inherit(W.hQ,W.hJ)
inherit(W.hT,P.h0)
inherit(W.jJ,W.hT)
inherit(W.hU,P.h1)
inherit(W.iC,W.c6)
inherit(P.hC,P.hB)
inherit(P.M,P.il)
t=P.K
inherit(P.aH,t)
inherit(P.aO,t)
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
inherit(P.ez,t)
inherit(P.eA,t)
inherit(P.eB,t)
inherit(P.eG,t)
inherit(P.f7,t)
inherit(P.f8,t)
inherit(P.fx,t)
inherit(P.bV,t)
inherit(P.h6,t)
inherit(P.hu,t)
inherit(P.c2,t)
inherit(P.ir,t)
inherit(P.is,t)
inherit(P.it,t)
t=P.aH
inherit(P.dW,t)
inherit(P.eI,t)
inherit(P.ag,t)
inherit(P.eN,t)
inherit(P.h5,t)
inherit(P.dy,t)
inherit(P.hs,t)
inherit(P.cT,P.cA)
inherit(P.eZ,P.cT)
inherit(P.d1,P.cF)
inherit(P.fq,P.d1)
inherit(P.fJ,P.ag)
inherit(P.d_,P.cy)
inherit(P.h4,P.d_)
t=P.dy
inherit(P.ha,t)
inherit(P.bZ,t)
inherit(P.cY,P.cJ)
inherit(P.hk,P.cY)
inherit(P.cW,P.cz)
inherit(P.fW,P.cW)
t=G.fe
inherit(G.fU,t)
inherit(G.A,t)
inherit(G.fb,t)
inherit(G.fL,t)
inherit(G.e2,G.fU)
inherit(B.fr,G.e2)
t=G.A
inherit(G.f9,t)
inherit(G.fy,t)
inherit(G.hp,G.c_)
inherit(R.fZ,R.fY)
mixin(H.bP,P.x)
mixin(H.bQ,P.x)
mixin(H.bR,H.cq)
mixin(H.bS,H.cq)
mixin(P.bU,P.x)
mixin(W.bA,P.x)
mixin(W.bB,P.x)
mixin(W.bC,P.x)
mixin(W.bD,W.D)
mixin(W.bE,W.D)
mixin(W.bF,W.D)
mixin(W.cx,W.e7)
mixin(W.cR,P.x)
mixin(W.cD,P.x)
mixin(W.cK,P.x)
mixin(W.cL,P.x)
mixin(W.cM,P.x)
mixin(W.cN,P.x)
mixin(W.cO,P.x)
mixin(W.cP,P.x)
mixin(W.cQ,P.x)
mixin(W.cB,P.x)
mixin(W.cC,P.x)
mixin(W.cE,P.x)
mixin(W.cG,P.x)
mixin(W.cH,P.x)
mixin(W.cI,P.x)
mixin(W.cS,W.D)
mixin(W.cU,W.D)
mixin(W.d3,W.D)
mixin(W.d4,W.D)
mixin(W.d2,W.D)
mixin(W.d7,W.D)
mixin(W.d8,W.D)
mixin(W.d9,W.D)
mixin(W.da,W.D)
mixin(W.cV,W.D)
mixin(W.cX,W.D)
mixin(W.cZ,W.D)
mixin(W.d0,W.D)
mixin(W.d5,W.D)
mixin(W.d6,W.D)
mixin(P.cA,P.x)
mixin(P.cy,P.x)
mixin(P.cF,P.x)
mixin(P.cJ,P.x)
mixin(P.cT,W.D)
mixin(P.d1,W.D)
mixin(P.cY,W.D)
mixin(P.d_,W.D)
mixin(P.cz,P.x)
mixin(P.cW,W.D)})();(function constants(){C.i=W.aP.prototype
C.z=W.ch.prototype
C.n=W.be.prototype
C.j=W.cj.prototype
C.A=W.cl.prototype
C.B=W.cu.prototype
C.h=W.cv.prototype
C.p=W.cw.prototype
C.C=J.a.prototype
C.a=J.aT.prototype
C.q=J.dc.prototype
C.b=J.dd.prototype
C.c=J.bh.prototype
C.e=J.aU.prototype
C.J=J.aV.prototype
C.f=H.dh.prototype
C.v=W.bT.prototype
C.w=J.fA.prototype
C.x=W.ds.prototype
C.M=W.bm.prototype
C.y=W.dx.prototype
C.m=J.b2.prototype
C.a4=W.b3.prototype
C.a5=W.c1.prototype
C.d=new P.im()
C.o=new P.aF(0)
C.D=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.E=function(hooks) {
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
C.r=function(hooks) { return hooks; }

C.F=function(getTagFallback) {
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
C.G=function() {
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
C.H=function(hooks) {
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
C.I=function(hooks) {
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
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.K=H.I(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.t])
C.L=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.u=makeConstList([])
C.k=H.I(makeConstList(["bind","if","ref","repeat","syntax"]),[P.t])
C.l=H.I(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.t])
C.N=H.O("op")
C.O=H.O("oq")
C.P=H.O("eH")
C.Q=H.O("or")
C.R=H.O("os")
C.S=H.O("kG")
C.T=H.O("ot")
C.U=H.O("kJ")
C.V=H.O("aY")
C.W=H.O("t")
C.X=H.O("la")
C.Y=H.O("lb")
C.Z=H.O("ov")
C.a_=H.O("lc")
C.a0=H.O("aC")
C.a1=H.O("Q")
C.a2=H.O("o")
C.a3=H.O("Y")})();(function staticFields(){$.kQ="$cachedFunction"
$.kR="$cachedInvocation"
$.ke=null
$.kc=null
$.jL=!1
$.jP=null
$.ln=null
$.lN=null
$.iS=null
$.j0=null
$.jQ=null
$.br=null
$.c8=null
$.c9=null
$.jM=!1
$.z=C.d
$.kD=0
$.aG=null
$.jt=null
$.kC=null
$.kB=null
$.kz=null
$.ky=null
$.kx=null
$.kw=null
$.nS=0
$.nT=0
$.jU=0
$.lL=0
$.cd=0
$.ce=0
$.oi=!1
$.lC=0
$.nM="\nfloat nearestLevel(float col, int mode) {\n   if (mode==0) return ceil(col / 80.0) * 80.0;\n\t else if (mode==1) return ceil(col * 6.0) / 6.0;\n\t else return ceil(col * 3.0) / 3.0;\n}\n\n// averaged pixel intensity from 3 color channels\nfloat avg3(vec3 pix) {\n return (pix.r + pix.g + pix.b)/3.0;\n}\n\nvec3 get_pixel(vec2 coords, float dx, float dy) {\n return texture(uTexture, coords + vec2(dx, dy)).rgb;\n}\n\n// returns pixel color\nfloat IsEdge(vec2 coords, vec2 dim) {\n  vec2 d = vec2(1.0, 1.0) / dim;\n\n  // read neighboring pixel intensities\n  float pix0 = avg3(get_pixel(coords, -d.x, -d.y));\n  float pix1 = avg3(get_pixel(coords, -d.x, 0.0));\n  float pix2 = avg3(get_pixel(coords, -d.x, d.y));\n  float pix3 = avg3(get_pixel(coords, 0.0, -d.y));\n\n  float pix5 = avg3(get_pixel(coords, 0.0, d.y));\n  float pix6 = avg3(get_pixel(coords, d.x, -d.y));\n  float pix7 = avg3(get_pixel(coords, d.x, 0.0));\n  float pix8 = avg3(get_pixel(coords, d.x, d.y));\n\n\n  // average color differences around neighboring pixels\n  float delta = (abs(pix1-pix7) + abs(pix5-pix3) +\n                 abs(pix0-pix8) + abs(pix2-pix6)) * 0.25;\n  return clamp(5.5*delta, 0.0, 1.0);\n}\n\nvoid main() {\n    vec2 texdim = vec2(textureSize(uTexture, 0));\n    vec4 colorOrg = texture(uTexture, vTexUV);\n    vec3 vHSV =  RGBtoHSV(colorOrg.rgb);\n    vHSV.x = nearestLevel(vHSV.x, 0);\n    vHSV.y = nearestLevel(vHSV.y, 1);\n    vHSV.z = nearestLevel(vHSV.z, 2);\n    float edg = IsEdge(vTexUV, texdim);\n    vec3 vRGB = (edg >= 0.3) ? vec3(0.0,0.0,0.0) : HSVtoRGB(vHSV);\n    //vec3 vRGB = HSVtoRGB(vHSV);\n    oFragColor = vec4(vRGB, 1.0);\n}\n"})();(function lazyInitializers(){lazy($,"kv","$get$kv",function(){return H.lE("_$dart_dartClosure")})
lazy($,"jy","$get$jy",function(){return H.lE("_$dart_js")})
lazy($,"kH","$get$kH",function(){return H.n3()})
lazy($,"kI","$get$kI",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kD
$.kD=t+1
t="expando$key$"+t}return new P.ej(null,t,[P.o])})
lazy($,"kZ","$get$kZ",function(){return H.ay(H.hn({
toString:function(){return"$receiver$"}}))})
lazy($,"l_","$get$l_",function(){return H.ay(H.hn({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"l0","$get$l0",function(){return H.ay(H.hn(null))})
lazy($,"l1","$get$l1",function(){return H.ay(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"l5","$get$l5",function(){return H.ay(H.hn(void 0))})
lazy($,"l6","$get$l6",function(){return H.ay(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"l3","$get$l3",function(){return H.ay(H.l4(null))})
lazy($,"l2","$get$l2",function(){return H.ay(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"l8","$get$l8",function(){return H.ay(H.l4(void 0))})
lazy($,"l7","$get$l7",function(){return H.ay(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jI","$get$jI",function(){return P.ns()})
lazy($,"ca","$get$ca",function(){return[]})
lazy($,"ku","$get$ku",function(){return{}})
lazy($,"lg","$get$lg",function(){return P.jA(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jK","$get$jK",function(){return P.m()})
lazy($,"iR","$get$iR",function(){return P.kM(P.o,P.aC)})
lazy($,"cc","$get$cc",function(){return P.kM(P.t,P.aC)})
lazy($,"kW","$get$kW",function(){return new G.dA(1281,0,4294967295)})
lazy($,"ka","$get$ka",function(){return new G.dz(1281,1281,1281)})
lazy($,"X","$get$X",function(){return P.aX(["cBlendEquation",new G.i("","",0),"cDepthWrite",new G.i("","",0),"cDepthTest",new G.i("","",0),"cStencilFunc",new G.i("","",0),"tPosition",new G.i("vec3","",0),"tSpeed",new G.i("vec3","",0),"tForce",new G.i("vec3","",0),"aColors",new G.i("vec3","per vertex color",0),"aColorAlpha",new G.i("vec4","per vertex color",0),"aPosition",new G.i("vec3","vertex coordinates",0),"aTexUV",new G.i("vec2","texture uvs",0),"aNormal",new G.i("vec3","vertex normals",0),"aBinormal",new G.i("vec3","vertex binormals",0),"aCenter",new G.i("vec4","for wireframe",0),"aPointSize",new G.i("float","",0),"aBoneIndex",new G.i("vec4","",0),"aBoneWeight",new G.i("vec4","",0),"aTangent",new G.i("vec3","vertex tangents",0),"aBitangent",new G.i("vec3","vertex btangents",0),"iaRotation",new G.i("vec4","",0),"iaTranslation",new G.i("vec3","",0),"iaScale",new G.i("vec3","",0),"vColor",new G.i("vec3","per vertex color",0),"vTexUV",new G.i("vec2","",0),"vLightWeighting",new G.i("vec3","",0),"vNormal",new G.i("vec3","",0),"vPosition",new G.i("vec3","vertex coordinates",0),"vPositionFromLight",new G.i("vec4","delta from light",0),"vCenter",new G.i("vec4","for wireframe",0),"vDepth",new G.i("float","depth for shadowmaps",0),"uTransformationMatrix",new G.i("mat4","",0),"uModelMatrix",new G.i("mat4","",0),"uNormalMatrix",new G.i("mat3","",0),"uConvolutionMatrix",new G.i("mat3","",0),"uPerspectiveViewMatrix",new G.i("mat4","",0),"uLightPerspectiveViewMatrix",new G.i("mat4","",0),"uShadowMap",new G.i("sampler2DShadow","",0),"uTexture",new G.i("sampler2D","",0),"uTexture2",new G.i("sampler2D","",0),"uTexture3",new G.i("sampler2D","",0),"uTexture4",new G.i("sampler2D","",0),"uSpecularMap",new G.i("sampler2D","",0),"uNormalMap",new G.i("sampler2D","",0),"uBumpMap",new G.i("sampler2D","",0),"uDepthMap",new G.i("sampler2D","",0),"uCubeTexture",new G.i("samplerCube","",0),"uAnimationTable",new G.i("sampler2D","",0),"uTime",new G.i("float","time since program start in sec",0),"uCameraNear",new G.i("float","",0),"uCameraFar",new G.i("float","",0),"uFogNear",new G.i("float","",0),"uFogFar",new G.i("float","",0),"uPointSize",new G.i("float","",0),"uScale",new G.i("float","",0),"uAngle",new G.i("float","",0),"uCanvasSize",new G.i("vec2","",0),"uCenter2",new G.i("vec2","",0),"uCutOff",new G.i("float","",0),"uShininess",new G.i("float","",0),"uShadowBias",new G.i("float","",0),"uOpacity",new G.i("float","",0),"uColor",new G.i("vec3","",0),"uAmbientDiffuse",new G.i("vec3","",0),"uColorEmissive",new G.i("vec3","",0),"uColorSpecular",new G.i("vec3","",0),"uColorDiffuse",new G.i("vec3","",0),"uColorAlpha",new G.i("vec4","",0),"uColorAlpha2",new G.i("vec4","",0),"uEyePosition",new G.i("vec3","",0),"uMaterial",new G.i("mat4","",0),"uRange",new G.i("vec2","",0),"uDirection",new G.i("vec2","",0),"uBoneMatrices",new G.i("mat4","",128),"uLightDescs",new G.i("mat4","",4),"uLightCount",new G.i("float","",0),"uLightTypes",new G.i("float","",4),"uBumpScale",new G.i("float","for bump maps",0),"uNormalScale",new G.i("float","for normal maps",0)])})
lazy($,"kY","$get$kY",function(){var t=new G.hd(!1,!1,!1,!0,1,9729,9729)
t.d=!1
t.b=!0
t.f=9728
t.r=9728
return t})
lazy($,"kh","$get$kh",function(){return T.bo(0.8,0.8,0.8)})
lazy($,"lx","$get$lx",function(){var t=new G.N("uv-passthru",null,[],[],[],[],0,P.m())
t.bn(["aPosition","aTexUV"])
t.D(["vTexUV"])
t.aJ(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"lt","$get$lt",function(){var t=new G.N("copyF",null,[],[],[],[],0,P.m())
t.D(["vTexUV"])
t.H(["uTexture"])
t.aJ(["oFragColor = texture(uTexture, vTexUV);"])
return t})
lazy($,"lR","$get$lR",function(){var t=new G.N("ToonF",null,[],[],[],[],0,P.m())
t.D(["vTexUV"])
t.H(["uTexture"])
t.M(["vec3 RGBtoHSV(vec3 rgb) {\n   float r = rgb.r;\n   float g = rgb.g;\n   float b = rgb.b;\n\n\n   float minv = min(min(r, g), b);\n   float maxv = max(max(r, g), b);\n   float delta = maxv - minv;\n\n   vec3 res;\n   res.z = maxv;            // v\n   if( maxv == 0.0 ) {\n      // r = g = b = 0      // s = 0, v is undefined\n      res.y = 0.0;\n      res.x = -1.0;\n      return res;\n   }\n\n   res.y = delta / maxv;      // s\n   if (r == maxv) res.x = (g - b) / delta;  // btwn yellow & magenta\n   else if (g == maxv) res.x = 2.0 + (b - r) / delta;   // btwn cyan & yellow\n   else res.x = 4.0 + (r - g) / delta;   // btwn magenta & cyan\n\n   res.x = res.x * 60.0;            // degrees\n   if( res.x < 0.0 ) res.x = res.x + 360.0;\n\n   return res;\n}\n\nvec3 HSVtoRGB(vec3 hsv) {\n   float h = hsv.x / 60.0;  // sector 0 to 5\n   float s = hsv.y;\n   float v = hsv.z;\n\n   if( s == 0.0 ) {\n      // achromatic (grey)\n      return vec3(v, v, v);\n   }\n\n   int i = int(floor( h ));\n   float f = h - float(i);         // fractional part of h\n   float p = v * ( 1.0 - s );\n   float q = v * ( 1.0 - s * f );\n   float t = v * ( 1.0 - s * ( 1.0 - f ) );\n\n   if (i == 0) return vec3(v, t, p);\n   else if (i == 1) return vec3(q, v , p);\n   else if (i == 2) return vec3(p, v, t);\n   else if (i == 3) return vec3(p, q, v);\n   else if (i == 4) return vec3(t, p, v);\n   return vec3(v, p, q);\n}\n",$.nM])
return t})
lazy($,"lG","$get$lG",function(){var t=new G.N("HexPixelateF",null,[],[],[],[],0,P.m())
t.D(["vTexUV"])
t.H(["uCenter2","uPointSize","uTexture"])
t.M(["\nfloat S = 0.86602540378;\n\nvec2 GetHexCenter(vec2 p) {\n vec2 a;\n    if (p.x + p.y - floor(p.x) - floor(p.y) < 1.0) a = vec2(floor(p.x), floor(p.y));\n    else a = vec2(ceil(p.x), ceil(p.y));\n    vec2 b = vec2(ceil(p.x), floor(p.y));\n    vec2 c = vec2(floor(p.x), ceil(p.y));\n\n    vec3 P = vec3(p.x, p.y, 1.0 - p.x - p.y);\n    vec3 A = vec3(a.x, a.y, 1.0 - a.x - a.y);\n    vec3 B = vec3(b.x, b.y, 1.0 - b.x - b.y);\n    vec3 C = vec3(c.x, c.y, 1.0 - c.x - c.y);\n\n    float alen = length(P - A);\n    float blen = length(P - B);\n    float clen = length(P - C);\n\n    if (alen < blen) {\n        return (alen < clen) ? a : c;\n    } else {\n        return (blen < clen) ? b : c;\n    }\n}\n\nvec2 ToPixelSpace(vec2 v, vec2 texdim) {\n    vec2 p = (v * texdim - uCenter2) / uPointSize;\n    float t = p.y / S;\n    return vec2(p.x - 0.5 * t, t);\n}\n\nvec2 ToNormalizedSpace(vec2 v, vec2 texdim) {\n   vec2 p = vec2(v.x + v.y * 0.5, v.y * S);\n   return p * uPointSize / texdim + uCenter2 / texdim;\n}\n\nvoid main() {\n    vec2 texdim = vec2(textureSize(uTexture, 0));\n    vec2 p = ToPixelSpace(vTexUV, texdim);\n    vec2 c = GetHexCenter(p);\n    vec2 q = ToNormalizedSpace(c, texdim);\n    oFragColor = texture(uTexture, q);\n}\n"])
return t})
lazy($,"lw","$get$lw",function(){var t=new G.N("DotF",null,[],[],[],[],0,P.m())
t.D(["vTexUV"])
t.H(["uCenter2","uScale","uAngle","uTexture"])
t.M(["float pattern(vec2 tex) {\n\t\tfloat s = sin( uAngle );\n\t\tfloat c = cos( uAngle );\n\t\tvec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * uScale;\n\t\treturn ( sin( point.x ) * sin( point.y ) ) * 4.0;\n}\n\nvoid main() {\n\t\tvec2 texdim = vec2(textureSize(uTexture, 0));\n\t\tvec4 color = texture(uTexture, vTexUV );\n\t\tfloat average = ( color.r + color.g + color.b ) / 3.0;\n     vec2 tex = vTexUV* texdim - uCenter2;\n\t\toFragColor = vec4( vec3( average * 10.0 - 5.0 + pattern(tex) ), color.a );\n}\n"])
return t})
lazy($,"lS","$get$lS",function(){var t=new G.N("DotF",null,[],[],[],[],0,P.m())
t.D(["vTexUV"])
t.H(["uScale","uTime","uTexture"])
t.M(["float rand(vec2 co)  {\n    float a = 12.9898;\n    float b = 78.233;\n    float c = 43758.5453;\n    float dt = dot(co.xy, vec2(a,b));\n    float sn = mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\nvec3 rgbDistortion(vec2 uv, float magnitude, float time) {\n    // x offset for the three color channels\n    // we do not change the y\n\t  float dR = rand(vec2(time * 0.03, uv.y * 0.42)) * 0.001 +\n\t             sin(rand(vec2(time * 0.2, uv.y))) * magnitude;\n\t  float dG = rand(vec2(time * 0.004, uv.y * 0.002)) * 0.004 +\n               sin(time * 9.0) * magnitude;\n\t  float dB = 0.0;\n    return vec3(dR, dG, dB);\n}\n\nvoid main() {\n      vec3 d = rgbDistortion(vTexUV, uScale, uTime);\n      float x = vTexUV.x;\n      float y = vTexUV.y;\n\n\t\t\tfloat r = texture(uTexture, vec2(x + d.r, y) ).r;\n\t\t\tfloat g = texture(uTexture, vec2(x + d.g, y) ).g;\n\t\t\tfloat b = texture(uTexture, vec2(x + d.b, y) ).b;\n\t\t\toFragColor = vec4( r, g, b, 1.0 );\n}\n"])
return t})
lazy($,"lI","$get$lI",function(){var t=new G.N("KaleidoscopeF",null,[],[],[],[],0,P.m())
t.D(["vTexUV"])
t.H(["uScale","uCenter2","uTexture"])
t.M(["vec2 kaleidoscope( vec2 uv, float n) {\n   float PI = 3.1415926;\n    float angle = PI / n;\n    float r = length(uv);\n\t  float a = atan( uv.y, uv.x ) / angle;\n\t  a = mix( fract( a ), 1.0 - fract( a ), mod( floor( a ), 2.0 ) ) * angle;\n\treturn vec2( cos( a ), sin( a ) ) * r;\n}\n\nvoid main() {\n    vec2 uv = kaleidoscope(vTexUV - uCenter2, uScale);\n    oFragColor = texture(uTexture, uv + uCenter2);\n}\n"])
return t})
lazy($,"lJ","$get$lJ",function(){var t=new G.N("LumidotsF",null,[],[],[],[],0,P.m())
t.D(["vTexUV"])
t.H(["uPointSize","uTexture"])
t.M(["\n// http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color\nfloat RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.212, 0.715, 0.072)); }\n// float RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.299, 0.587, 0.114)); }\n\n\nvoid main() {\n\t  vec2 texdim = vec2(textureSize(uTexture, 0));\n    float r = uPointSize;\n    vec2 uv = vTexUV * texdim;\n    vec2 center = floor(uv / r / 2.0) * 2.0 * r + r;\n    vec3 col = texture(uTexture, center / texdim).rgb;\n    float lum = max(0.1, RGB2Luma(col));\n    float alpha =  smoothstep(1.0, 0.5,\n                              distance(center, uv) / lum / r);\n    oFragColor.rgb = col.rgb * alpha;\n}\n"])
return t})
lazy($,"lO","$get$lO",function(){var t=new G.N("SquarePixelateF",null,[],[],[],[],0,P.m())
t.D(["vTexUV"])
t.H(["uPointSize","uTexture"])
t.M(["void main() {\n\t  vec2 texdim = vec2(textureSize(uTexture, 0));\n    float r = uPointSize;\n    vec2 uv = vTexUV * texdim;\n    vec2 center = floor(uv / r / 2.0) * 2.0 * r + r;\n    oFragColor = texture(uTexture, center / texdim);\n}\n"])
return t})
lazy($,"lK","$get$lK",function(){var t=new G.N("LuminosityHighPassF",null,[],[],[],[],0,P.m())
t.D(["vTexUV"])
t.H(["uRange","uColorAlpha","uTexture"])
t.M(["\n// http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color\nfloat RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.212, 0.715, 0.072)); }\n// float RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.299, 0.587, 0.114)); }\n\nvoid main() {\n    vec4 color = texture(uTexture, vTexUV);\n    float luma = RGB2Luma(color.rgb);\n    float alpha = smoothstep(uRange.x, uRange.y, luma);\n    oFragColor = mix(uColorAlpha, color, alpha );\n}\n"])
return t})
lazy($,"lB","$get$lB",function(){var t=new G.N("FisheyePassF",null,[],[],[],[],0,P.m())
t.D(["vTexUV"])
t.H(["uTexture"])
t.M(["\nfloat fisheye_radius = 1.0;\n      \nvoid main() {\n    float y = (vTexUV.y-0.5) * 2.0; // [0,1] => [-1, 1]\n\n    float angle = asin(y/fisheye_radius); // [-pi/2, pi/2]\n    float arc_length = angle * fisheye_radius;\n\n    float max_arc_length = asin(1.0 / fisheye_radius) * fisheye_radius;\n    float normalized_arc_length = (arc_length + max_arc_length) / \n                                  (max_arc_length * 2.0);\n    // set arc_length as y\n    vec2 uv = vec2(vTexUV.x, normalized_arc_length); \n    oFragColor = texture(uTexture, uv); \n}\n"])
return t})
lazy($,"lA","$get$lA",function(){var t=new G.N("FilmPassF",null,[],[],[],[],0,P.m())
t.D(["vTexUV"])
t.H(["uTexture"])
t.M(["\nvec2 translation = vec2(0.1, 0.0);\nfloat frame = 1.0;\n\nfloat rand(vec2 co){\n    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nfloat vignette(vec2 uv) {\n    return min(1., 6000. * (uv.x * uv.y * (1. - uv.x) * (1. - uv.y) - pow(.2, 4.)));\n}\n\nfloat verticalNoise(vec2 uv) {\n    return rand(vec2(uv.x * 0.3242 + 1.4839, 1.));\n}\n\nfloat randomLines(vec2 uv, float a, float b, float c, float d) {\n    float discrete = floor(frame / 4.);\n    return step(0.0002 + 0.0005 * sin(discrete / a),\n            abs(uv.x - b + 0.05 * sin(discrete / c) * cos(discrete / d)));\n}\n\nvec3 scene(vec2 uv) {\n    vec3 color = texture(uTexture, uv).rgb;\n    color += 0.1;\n    color *= vignette(uv);\n    color *= 0.9 + 0.1 * rand(uv);\n    color *= 0.95 + 0.05 * verticalNoise(vTexUV + floor(frame / 4.));\n    color = 0.5 * color + color * 0.5 * randomLines(uv, 28., 0.7, 33., 58.);\n    color = color * 0.8 + color * 0.2 * randomLines(uv, 47., 0.78, 61., 27.);\n    color = color * 0.7 + color * 0.3 * randomLines(uv, 31., 0.28, 79., 43.);\n    color = pow(max(vec3(0.),color), vec3(1.5));\n    color *= 0.8 + 0.4 * rand(vec2(floor(frame / 4.), 0.2));\n    return color;\n}\n\nvoid main() {\n    vec2 uv = vTexUV;\n    uv += translation;\n    uv = vec2(vTexUV.x, mod(uv.y, 1.));\n    oFragColor = vec4(scene(uv), 1.);\n}\n"])
return t})
lazy($,"kk","$get$kk",function(){return T.bM(-1,0,-1,0,4,0,-1,0,-1)})
lazy($,"kq","$get$kq",function(){return T.bo(0.5,0.5,0.5)})
lazy($,"kl","$get$kl",function(){return T.bM(2,0,0,0,-1,0,0,0,-1)})
lazy($,"kr","$get$kr",function(){return T.bo(0.5,0.5,0.5)})
lazy($,"km","$get$km",function(){return T.bM(-2,0,0,0,2,0,0,0,0)})
lazy($,"ks","$get$ks",function(){return T.bo(0.37,0.37,0.37)})
lazy($,"kn","$get$kn",function(){var t=T.bM(0,-2,0,-2,11,-2,0,-2,0)
t.bh(0,0.333)
return t})
lazy($,"kt","$get$kt",function(){return T.bo(0,0,0)})
lazy($,"kj","$get$kj",function(){return T.bM(-1,-1,-1,-1,8,-1,-1,-1,-1)})
lazy($,"kp","$get$kp",function(){return T.bo(0,0,0)})
lazy($,"ki","$get$ki",function(){var t=T.bM(1,2,1,2,4,2,1,2,1)
t.bh(0,0.0625)
return t})
lazy($,"ko","$get$ko",function(){return T.bo(0,0,0)})
lazy($,"ls","$get$ls",function(){var t=new G.N("Convolution3x3F",null,[],[],[],[],0,P.m())
t.D(["vTexUV"])
t.H(["uTexture","uColor","uConvolutionMatrix"])
t.M(["void main() {\n    mat3 m = uConvolutionMatrix;\n    vec2 d = 1.0 / vec2(textureSize(uTexture, 0));\n    vec3 sum = vec3(0.0, 0.0, 0.0);\n    for (int x = -1; x <= 1; x++) {\n      for (int y = -1; y <= 1; y++) {\n        sum += m[x+1][y+1] * texture(uTexture, vTexUV + d * vec2(x, y)).rgb;     \n      }\n    }\n    oFragColor.rgb = uColor + sum;\n}\n"])
return t})
lazy($,"lv","$get$lv",function(){var t=new G.N("FixedVertexColorV",null,[],[],[],[],0,P.m())
t.bn(["aPosition"])
t.H(["uPerspectiveViewMatrix","uModelMatrix"])
t.D(["vColor"])
t.bv(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vColor = ColorFromPosition(aPosition);"],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return t})
lazy($,"lu","$get$lu",function(){var t=new G.N("FixedVertexColorF",null,[],[],[],[],0,P.m())
t.D(["vColor"])
t.aJ(["oFragColor = vec4( vColor, 1.0 );"])
return t})
lazy($,"dM","$get$dM",function(){return H.aE(C.h.cv(W.nX(),"#effect"),"$isbm")})
lazy($,"co","$get$co",function(){return P.m()})})()
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
mangledGlobalNames:{o:"int",Q:"double",Y:"num",t:"String",aC:"bool",aY:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.r},{func:1,ret:P.aC,args:[W.a6,P.t,P.t,W.c3]},{func:1,v:true,args:[P.p],opt:[P.bW]},{func:1,ret:P.o,args:[P.L,P.L]},{func:1,ret:P.t,args:[W.h]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bO,ArrayBufferView:H.bj,DataView:H.ff,Float32Array:H.dh,Float64Array:H.fg,Int16Array:H.fh,Int32Array:H.fi,Int8Array:H.fj,Uint16Array:H.fk,Uint32Array:H.fl,Uint8ClampedArray:H.dl,CanvasPixelArray:H.dl,Uint8Array:H.fm,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLImageElement:W.l,HTMLKeygenElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMenuItemElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTextAreaElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,HTMLAnchorElement:W.dX,HTMLAreaElement:W.dY,AudioTrack:W.a4,AudioTrackList:W.e1,Blob:W.cg,HTMLBodyElement:W.aP,HTMLCanvasElement:W.ch,CanvasRenderingContext2D:W.e3,CDATASection:W.aQ,CharacterData:W.aQ,Comment:W.aQ,ProcessingInstruction:W.aQ,Text:W.aQ,CompositorWorker:W.e6,CSSCharsetRule:W.C,CSSFontFaceRule:W.C,CSSGroupingRule:W.C,CSSImportRule:W.C,CSSKeyframeRule:W.C,MozCSSKeyframeRule:W.C,WebKitCSSKeyframeRule:W.C,CSSKeyframesRule:W.C,MozCSSKeyframesRule:W.C,WebKitCSSKeyframesRule:W.C,CSSMediaRule:W.C,CSSNamespaceRule:W.C,CSSPageRule:W.C,CSSRule:W.C,CSSStyleRule:W.C,CSSSupportsRule:W.C,CSSViewportRule:W.C,CSSStyleDeclaration:W.be,MSStyleCSSProperties:W.be,CSS2Properties:W.be,DataTransferItemList:W.e9,DeviceAcceleration:W.ea,HTMLDivElement:W.cj,XMLDocument:W.aS,Document:W.aS,DocumentFragment:W.ck,ShadowRoot:W.ck,DOMException:W.eb,DOMImplementation:W.cl,DOMPoint:W.ec,DOMPointReadOnly:W.cm,DOMRectReadOnly:W.cn,DOMStringList:W.ed,DOMTokenList:W.ee,Element:W.a6,AnimationEvent:W.k,AnimationPlayerEvent:W.k,ApplicationCacheErrorEvent:W.k,AutocompleteErrorEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceLightEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,GamepadEvent:W.k,GeofencingEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RelatedEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCIceCandidateEvent:W.k,RTCPeerConnectionIceEvent:W.k,SecurityPolicyViolationEvent:W.k,ServicePortConnectEvent:W.k,ServiceWorkerMessageEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.a7,FileList:W.eE,FileWriter:W.eF,HTMLFormElement:W.eJ,Gamepad:W.a8,HTMLHeadElement:W.cu,History:W.eM,HTMLCollection:W.bH,HTMLFormControlsCollection:W.bH,HTMLOptionsCollection:W.bH,HTMLDocument:W.cv,XMLHttpRequest:W.cw,XMLHttpRequestUpload:W.bI,XMLHttpRequestEventTarget:W.bI,HTMLInputElement:W.eP,KeyboardEvent:W.aW,Location:W.f4,MediaList:W.fa,MIDIOutput:W.fc,MIDIInput:W.bN,MIDIPort:W.bN,MimeType:W.a9,MimeTypeArray:W.fd,PointerEvent:W.R,MouseEvent:W.R,DragEvent:W.R,Navigator:W.fn,Attr:W.r,Node:W.r,NodeIterator:W.dm,NodeList:W.bT,RadioNodeList:W.bT,Path2D:W.fw,Perspective:W.fz,Plugin:W.aa,PluginArray:W.fB,PositionValue:W.fE,PresentationConnection:W.fF,Range:W.ds,Rotation:W.fO,RTCDataChannel:W.du,DataChannel:W.du,HTMLSelectElement:W.bm,SharedWorker:W.fS,SourceBuffer:W.ab,SourceBufferList:W.fT,SpeechGrammar:W.ac,SpeechGrammarList:W.fV,SpeechRecognitionResult:W.ad,Storage:W.h_,CSSStyleSheet:W.a_,StyleSheet:W.a_,CalcLength:W.ak,KeywordValue:W.ak,LengthValue:W.ak,NumberValue:W.ak,SimpleLength:W.ak,TransformValue:W.ak,StyleValue:W.ak,HTMLTableElement:W.dx,HTMLTableRowElement:W.h7,HTMLTableSectionElement:W.h8,HTMLTemplateElement:W.bY,TextTrack:W.ae,TextTrackCue:W.a0,VTTCue:W.a0,TextTrackCueList:W.hb,TextTrackList:W.hc,TimeRanges:W.he,Touch:W.af,TouchEvent:W.b1,TouchList:W.hi,TrackDefaultList:W.hj,Matrix:W.bn,Skew:W.bn,TransformComponent:W.bn,Translation:W.hl,TreeWalker:W.dB,CompositionEvent:W.aK,FocusEvent:W.aK,TextEvent:W.aK,SVGZoomEvent:W.aK,UIEvent:W.aK,URL:W.hr,VideoTrackList:W.ht,VTTRegionList:W.hw,WebSocket:W.hx,WheelEvent:W.b3,Window:W.c1,DOMWindow:W.c1,Worker:W.hA,CompositorWorkerGlobalScope:W.b4,DedicatedWorkerGlobalScope:W.b4,ServiceWorkerGlobalScope:W.b4,SharedWorkerGlobalScope:W.b4,WorkerGlobalScope:W.b4,ClientRect:W.hL,ClientRectList:W.dF,DOMRectList:W.dF,CSSRuleList:W.hN,DocumentType:W.hO,DOMRect:W.hP,GamepadList:W.i9,HTMLFrameSetElement:W.ia,NamedNodeMap:W.dI,MozNamedAttrMap:W.dI,ServiceWorker:W.iv,SpeechRecognitionResultList:W.iy,StyleSheetList:W.iz,WorkerLocation:W.iG,WorkerNavigator:W.iH,SVGAElement:P.dW,SVGAnimateElement:P.aO,SVGAnimateMotionElement:P.aO,SVGAnimateTransformElement:P.aO,SVGAnimationElement:P.aO,SVGSetElement:P.aO,SVGFEBlendElement:P.ek,SVGFEColorMatrixElement:P.el,SVGFEComponentTransferElement:P.em,SVGFECompositeElement:P.en,SVGFEConvolveMatrixElement:P.eo,SVGFEDiffuseLightingElement:P.ep,SVGFEDisplacementMapElement:P.eq,SVGFEFloodElement:P.er,SVGFEGaussianBlurElement:P.es,SVGFEImageElement:P.et,SVGFEMergeElement:P.eu,SVGFEMorphologyElement:P.ev,SVGFEOffsetElement:P.ew,SVGFEPointLightElement:P.ex,SVGFESpecularLightingElement:P.ey,SVGFESpotLightElement:P.ez,SVGFETileElement:P.eA,SVGFETurbulenceElement:P.eB,SVGFilterElement:P.eG,SVGForeignObjectElement:P.eI,SVGCircleElement:P.ag,SVGEllipseElement:P.ag,SVGLineElement:P.ag,SVGPathElement:P.ag,SVGPolygonElement:P.ag,SVGPolylineElement:P.ag,SVGGeometryElement:P.ag,SVGClipPathElement:P.aH,SVGDefsElement:P.aH,SVGGElement:P.aH,SVGSwitchElement:P.aH,SVGGraphicsElement:P.aH,SVGImageElement:P.eN,SVGLength:P.au,SVGLengthList:P.eZ,SVGMarkerElement:P.f7,SVGMaskElement:P.f8,SVGNumber:P.aw,SVGNumberList:P.fq,SVGPatternElement:P.fx,SVGPoint:P.fC,SVGPointList:P.fD,SVGRect:P.fI,SVGRectElement:P.fJ,SVGScriptElement:P.bV,SVGStringList:P.h4,SVGDescElement:P.K,SVGDiscardElement:P.K,SVGFEDistantLightElement:P.K,SVGFEFuncAElement:P.K,SVGFEFuncBElement:P.K,SVGFEFuncGElement:P.K,SVGFEFuncRElement:P.K,SVGFEMergeNodeElement:P.K,SVGMetadataElement:P.K,SVGStopElement:P.K,SVGStyleElement:P.K,SVGTitleElement:P.K,SVGComponentTransferFunctionElement:P.K,SVGElement:P.K,SVGSVGElement:P.h5,SVGSymbolElement:P.h6,SVGTextContentElement:P.dy,SVGTextPathElement:P.ha,SVGTSpanElement:P.bZ,SVGTextElement:P.bZ,SVGTextPositioningElement:P.bZ,SVGTransform:P.ax,SVGTransformList:P.hk,SVGUseElement:P.hs,SVGViewElement:P.hu,SVGViewSpec:P.hv,SVGLinearGradientElement:P.c2,SVGRadialGradientElement:P.c2,SVGGradientElement:P.c2,SVGCursorElement:P.ir,SVGFEDropShadowElement:P.is,SVGMPathElement:P.it,AudioBuffer:P.e0,WebGLRenderingContext:P.fM,WebGL2RenderingContext:P.fN,WebGL2RenderingContextBase:P.iF,SQLResultSetRowList:P.fW})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.di.$nativeSuperclassTag="ArrayBufferView"
H.bQ.$nativeSuperclassTag="ArrayBufferView"
H.bR.$nativeSuperclassTag="ArrayBufferView"
H.dj.$nativeSuperclassTag="ArrayBufferView"
H.bP.$nativeSuperclassTag="ArrayBufferView"
H.bS.$nativeSuperclassTag="ArrayBufferView"
H.dk.$nativeSuperclassTag="ArrayBufferView"
W.bC.$nativeSuperclassTag="EventTarget"
W.bF.$nativeSuperclassTag="EventTarget"
W.bB.$nativeSuperclassTag="EventTarget"
W.bE.$nativeSuperclassTag="EventTarget"
W.bA.$nativeSuperclassTag="EventTarget"
W.bD.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.lP(U.ly(),b)},[])
else (function(b){H.lP(U.ly(),b)})([])})})()