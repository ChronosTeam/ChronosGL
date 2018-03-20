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
a[c]=function(){a[c]=function(){H.ox(b)}
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
if(v[t][a])return v[t][a]}}var C={},H={k0:function k0(a){this.a=a},
k5:function(a,b,c,d){if(!!J.t(a).$isd)return new H.ex(a,b,[c,d])
return new H.du(a,b,[c,d])},
dm:function(){return new P.aq("No element")},
nh:function(){return new P.aq("Too many elements")},
ng:function(){return new P.aq("Too few elements")},
dL:function(a,b,c,d){if(c-b<=32)H.nw(a,b,c,d)
else H.nv(a,b,c,d)},
nw:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.y(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.av(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
nv:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.F(t+1,6)
r=a3+s
q=a4-s
p=C.b.F(a3+a4,2)
o=p-s
n=p+s
t=J.y(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.av(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.av(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.av(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.av(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.av(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.av(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.av(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.av(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.av(a5.$2(j,i),0)){h=i
i=j
j=h}t.i(a2,r,m)
t.i(a2,p,k)
t.i(a2,q,i)
t.i(a2,o,t.h(a2,a3))
t.i(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.F(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.dL(a2,a3,g-2,a5)
H.dL(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.F(a5.$2(t.h(a2,g),l),0);)++g
for(;J.F(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.dL(a2,g,f,a5)}else H.dL(a2,g,f,a5)},
d:function d(){},
b2:function b2(){},
dt:function dt(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
du:function du(a,b,c){this.a=a
this.b=b
this.$ti=c},
ex:function ex(a,b,c){this.a=a
this.b=b
this.$ti=c},
fr:function fr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bQ:function bQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
dU:function dU(a,b,c){this.a=a
this.b=b
this.$ti=c},
hX:function hX(a,b,c){this.a=a
this.b=b
this.$ti=c},
cD:function cD(){},
e1:function(a,b){var t=a.aq(b)
if(!u.globalState.d.cy)u.globalState.f.av()
return t},
jz:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
lW:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.t(s).$isc)throw H.e(P.cp("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.iL(0,0,1,null,null,null,null,null,null,null,null,null,a)
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
s.f=new H.ih(P.k4(null,H.bb),0)
r=P.p
s.sft(new H.ao(0,null,null,null,null,null,0,[r,H.ba]))
s.sfw(new H.ao(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.iK()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.nb,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.nM)}if(u.globalState.x)return
s=u.globalState.a++
q=P.ap(null,null,null,r)
p=new H.bs(0,null,!1)
o=new H.ba(s,new H.ao(0,null,null,null,null,null,0,[r,H.bs]),q,u.createNewIsolate(),p,new H.ax(H.jE()),new H.ax(H.jE()),!1,!1,[],P.ap(null,null,null,null),null,null,!1,!0,P.ap(null,null,null,null))
q.l(0,0)
o.bT(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bB(a,{func:1,args:[,]}))o.aq(new H.jK(t,a))
else if(H.bB(a,{func:1,args:[,,]}))o.aq(new H.jL(t,a))
else o.aq(a)
u.globalState.f.av()},
nM:function(a){var t=P.aK(["command","print","msg",a])
return new H.at(!0,P.ce(null,P.p)).L(t)},
nd:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.ne()
return},
ne:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.v("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.v('Cannot extract URI from "'+t+'"'))},
nb:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b9(!0,[]).Y(b.data)
s=J.y(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.ok(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b9(!0,[]).Y(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b9(!0,[]).Y(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.p
j=P.ap(null,null,null,k)
i=new H.bs(0,null,!1)
h=new H.ba(s,new H.ao(0,null,null,null,null,null,0,[k,H.bs]),j,u.createNewIsolate(),i,new H.ax(H.jE()),new H.ax(H.jE()),!1,!1,[],P.ap(null,null,null,null),null,null,!1,!0,P.ap(null,null,null,null))
j.l(0,0)
h.bT(0,i)
u.globalState.f.a.V(0,new H.bb(h,new H.fa(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.av()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.mz(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.av()
break
case"close":u.globalState.ch.au(0,$.$get$l0().h(0,a))
a.terminate()
u.globalState.f.av()
break
case"log":H.na(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aK(["command","print","msg",t])
k=new H.at(!0,P.ce(null,P.p)).L(k)
s.toString
self.postMessage(k)}else P.T(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
na:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aK(["command","log","msg",a])
r=new H.at(!0,P.ce(null,P.p)).L(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.O(q)
t=H.au(q)
s=P.cC(t)
throw H.e(s)}},
nc:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.l5=$.l5+("_"+s)
$.l6=$.l6+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.H(0,["spawned",new H.bx(s,r),q,t.r])
r=new H.fb(a,b,c,d,t)
if(e){t.cd(q,q)
u.globalState.f.a.V(0,new H.bb(t,r,"start isolate"))}else r.$0()},
nx:function(a,b){var t=new H.hE(!0,!1,null)
t.dV(a,b)
return t},
nO:function(a){return new H.b9(!0,[]).Y(new H.at(!1,P.ce(null,P.p)).L(a))},
jK:function jK(a,b){this.a=a
this.b=b},
jL:function jL(a,b){this.a=a
this.b=b},
iL:function iL(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
ba:function ba(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
iE:function iE(a,b){this.a=a
this.b=b},
ih:function ih(a,b){this.a=a
this.b=b},
ii:function ii(a){this.a=a},
bb:function bb(a,b,c){this.a=a
this.b=b
this.c=c},
iK:function iK(){},
fa:function fa(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fb:function fb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
i8:function i8(){},
bx:function bx(a,b){this.b=a
this.a=b},
iM:function iM(a,b){this.a=a
this.b=b},
cg:function cg(a,b,c){this.b=a
this.c=b
this.a=c},
bs:function bs(a,b,c){this.a=a
this.b=b
this.c=c},
hE:function hE(a,b,c){this.a=a
this.b=b
this.c=c},
hF:function hF(a,b){this.a=a
this.b=b},
hG:function hG(a,b){this.a=a
this.b=b},
ax:function ax(a){this.a=a},
at:function at(a,b){this.a=a
this.b=b},
b9:function b9(a,b){this.a=a
this.b=b},
od:function(a){return u.types[a]},
om:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.t(a).$isr},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aH(a)
if(typeof t!=="string")throw H.e(H.P(a))
return t},
nu:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.h4(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
b3:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
dF:function(a){var t,s,r,q,p,o,n,m
t=J.t(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.N||!!J.t(a).$isb6){p=C.A(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aT(q,0)===36)q=C.i.dv(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.e3(H.jn(a),0,null),u.mangledGlobalNames)},
h0:function(a){return"Instance of '"+H.dF(a)+"'"},
X:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ns:function(a){return a.b?H.X(a).getUTCFullYear()+0:H.X(a).getFullYear()+0},
nq:function(a){return a.b?H.X(a).getUTCMonth()+1:H.X(a).getMonth()+1},
nm:function(a){return a.b?H.X(a).getUTCDate()+0:H.X(a).getDate()+0},
nn:function(a){return a.b?H.X(a).getUTCHours()+0:H.X(a).getHours()+0},
np:function(a){return a.b?H.X(a).getUTCMinutes()+0:H.X(a).getMinutes()+0},
nr:function(a){return a.b?H.X(a).getUTCSeconds()+0:H.X(a).getSeconds()+0},
no:function(a){return a.b?H.X(a).getUTCMilliseconds()+0:H.X(a).getMilliseconds()+0},
k6:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.P(a))
return a[b]},
l7:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.P(a))
a[b]=c},
S:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.am(!0,b,"index",null)
t=J.bD(a)
if(b<0||C.b.da(b,t))return P.D(b,a,"index",null,t)
return P.h1(b,"index",null)},
P:function(a){return new P.am(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.br()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lX})
t.name=""}else t.toString=H.lX
return t},
lX:function(){return J.aH(this.dartException)},
H:function(a){throw H.e(a)},
G:function(a){throw H.e(new P.V(a))},
aD:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hL(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
hM:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
li:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
k2:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.fg(a,s,t?null:b.receiver)},
O:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.jM(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.b2(r,16)&8191)===10)switch(q){case 438:return t.$1(H.k2(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.dE(p,null))}}if(a instanceof TypeError){o=$.$get$lc()
n=$.$get$ld()
m=$.$get$le()
l=$.$get$lf()
k=$.$get$lj()
j=$.$get$lk()
i=$.$get$lh()
$.$get$lg()
h=$.$get$lm()
g=$.$get$ll()
f=o.P(s)
if(f!=null)return t.$1(H.k2(s,f))
else{f=n.P(s)
if(f!=null){f.method="call"
return t.$1(H.k2(s,f))}else{f=m.P(s)
if(f==null){f=l.P(s)
if(f==null){f=k.P(s)
if(f==null){f=j.P(s)
if(f==null){f=i.P(s)
if(f==null){f=l.P(s)
if(f==null){f=h.P(s)
if(f==null){f=g.P(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.dE(s,f==null?null:f.method))}}return t.$1(new H.hP(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dM()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.am(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dM()
return a},
au:function(a){var t
if(a==null)return new H.e_(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.e_(a,null)},
oq:function(a){if(a==null||typeof a!='object')return J.aw(a)
else return H.b3(a)},
ob:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.i(0,p,a[q])}return b},
ol:function(a,b,c,d,e,f,g){switch(c){case 0:return H.e1(b,new H.ju(a))
case 1:return H.e1(b,new H.jv(a,d))
case 2:return H.e1(b,new H.jw(a,d,e))
case 3:return H.e1(b,new H.jx(a,d,e,f))
case 4:return H.e1(b,new H.jy(a,d,e,f,g))}throw H.e(P.cC("Unsupported number of arguments for wrapped closure"))},
aP:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.ol)
a.$identity=t
return t},
mS:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.t(c).$isc){t.$reflectionInfo=c
r=H.nu(t).r}else r=c
q=d?Object.create(new H.hk().constructor.prototype):Object.create(new H.bE(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.kM(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.od,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.kJ:H.jW
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.kM(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
mP:function(a,b,c,d){var t=H.jW
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
kM:function(a,b,c){var t,s,r,q
if(c)return H.mR(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.mP(s,b==null?r!=null:b!==r,t,b)
return q},
mQ:function(a,b,c,d){var t,s
t=H.jW
s=H.kJ
switch(b?-1:a){case 0:throw H.e(new H.ha("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
mR:function(a,b){var t,s,r,q
H.mO()
t=$.kI
if(t==null){t=H.kH("receiver")
$.kI=t}s=b.$stubName
r=b.length
q=a[s]
t=H.mQ(r,b==null?q!=null:b!==q,s,b)
return t},
kg:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.t(c).$isc){c.fixed$length=Array
t=c}else t=c
return H.mS(a,b,t,!!d,e,f)},
jW:function(a){return a.a},
kJ:function(a){return a.c},
mO:function(){var t=$.kK
if(t==null){t=H.kH("self")
$.kK=t}return t},
kH:function(a){var t,s,r,q,p
t=new H.bE("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
oL:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aE(a,"String"))},
a6:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aE(a,"double"))},
oK:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aE(a,"num"))},
o3:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aE(a,"bool"))},
ok:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aE(a,"int"))},
os:function(a,b){throw H.e(H.aE(a,b.substring(3)))},
or:function(a,b){var t=J.y(b)
throw H.e(H.kL(H.dF(a),t.bE(b,3,t.gj(b))))},
kj:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.t(a)[b])return a
H.os(a,b)},
aG:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.t(a)[b]
else t=!0
if(t)return a
H.or(a,b)},
oJ:function(a){if(a==null)return a
if(!!J.t(a).$isc)return a
throw H.e(H.aE(a,"List"))},
lL:function(a){var t=J.t(a)
return"$S" in t?t.$S():null},
bB:function(a,b){var t
if(a==null)return!1
t=H.lL(a)
return t==null?!1:H.lQ(t,b)},
oH:function(a,b){var t,s
if(a==null)return a
if($.kd)return a
$.kd=!0
try{if(H.bB(a,b))return a
t=H.aQ(b,null)
s=H.aE(a,t)
throw H.e(s)}finally{$.kd=!1}},
aE:function(a,b){return new H.hN("type '"+H.dF(a)+"' is not a subtype of type '"+b+"'")},
kL:function(a,b){return new H.ej("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
a5:function(a){if(!0===a)return!1
if(!!J.t(a).$isjZ)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.aE(a,"bool"))},
aj:function(a){throw H.e(new H.i2(a))},
b:function(a){if(H.a5(a))throw H.e(new P.cr(null))},
ox:function(a){throw H.e(new P.eo(a))},
jE:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
lO:function(a){return u.getIsolateTag(a)},
N:function(a){return new H.aN(a,null)},
x:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
jn:function(a){if(a==null)return
return a.$ti},
lP:function(a,b){return H.kn(a["$as"+H.f(b)],H.jn(a))},
ak:function(a,b,c){var t,s
t=H.lP(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
al:function(a,b){var t,s
t=H.jn(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aQ:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.e3(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aQ(t,b)
return H.nS(a,b)}return"unknown-reified-type"},
nS:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aQ(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aQ(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aQ(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.oa(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aQ(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
e3:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.c2("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aQ(o,c)}return p?"":"<"+s.k(0)+">"},
jo:function(a){var t,s
if(a instanceof H.bh){t=H.lL(a)
if(t!=null)return H.aQ(t,null)}s=J.t(a).constructor.name
if(a==null)return s
return s+H.e3(a.$ti,0,null)},
kn:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.kk(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.kk(a,null,b)
return b},
ck:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.jn(a)
s=J.t(a)
if(s[b]==null)return!1
return H.lF(H.kn(s[d],t),c)},
e5:function(a,b,c,d){if(a==null)return a
if(H.ck(a,b,c,d))return a
throw H.e(H.kL(H.dF(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.e3(c,0,null),u.mangledGlobalNames)))},
oF:function(a,b,c,d){if(a==null)return a
if(H.ck(a,b,c,d))return a
throw H.e(H.aE(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.e3(c,0,null),u.mangledGlobalNames)))},
lF:function(a,b){var t,s,r,q,p
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
if(!H.a7(r,b[p]))return!1}return!0},
o6:function(a,b,c){return H.kk(a,b,H.lP(b,c))},
a7:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aL")return!0
if('func' in b)return H.lQ(a,b)
if('func' in a)return b.name==="jZ"||b.name==="o"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.aQ(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.lF(H.kn(o,t),r)},
lE:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.a7(o,n)||H.a7(n,o)))return!1}return!0},
o_:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.a7(p,o)||H.a7(o,p)))return!1}return!0},
lQ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.a7(t,s)||H.a7(s,t)))return!1}r=a.args
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
if(n===m){if(!H.lE(r,q,!1))return!1
if(!H.lE(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.a7(g,f)||H.a7(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.a7(g,f)||H.a7(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.a7(g,f)||H.a7(f,g)))return!1}}return H.o_(a.named,b.named)},
kk:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
oM:function(a){var t=$.kh
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
oI:function(a){return H.b3(a)},
oG:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
on:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.o))
t=$.kh.$1(a)
s=$.jk[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.jt[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.lA.$2(a,t)
if(t!=null){s=$.jk[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.jt[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.kl(r)
$.jk[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.jt[t]=r
return r}if(p==="-"){o=H.kl(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lS(a,r)
if(p==="*")throw H.e(new P.c6(t))
if(u.leafTags[t]===true){o=H.kl(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lS(a,r)},
lS:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.jD(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
kl:function(a){return J.jD(a,!1,null,!!a.$isr)},
op:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.jD(t,!1,null,!!t.$isr)
else return J.jD(t,c,null,null)},
oi:function(){if(!0===$.ki)return
$.ki=!0
H.oj()},
oj:function(){var t,s,r,q,p,o,n,m
$.jk=Object.create(null)
$.jt=Object.create(null)
H.oh()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lT.$1(p)
if(o!=null){n=H.op(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
oh:function(){var t,s,r,q,p,o,n
t=C.R()
t=H.bA(C.O,H.bA(C.T,H.bA(C.z,H.bA(C.z,H.bA(C.S,H.bA(C.P,H.bA(C.Q(C.A),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.kh=new H.jq(p)
$.lA=new H.jr(o)
$.lT=new H.js(n)},
bA:function(a,b){return a(b)||b},
ow:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
h4:function h4(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hL:function hL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dE:function dE(a,b){this.a=a
this.b=b},
fg:function fg(a,b,c){this.a=a
this.b=b
this.c=c},
hP:function hP(a){this.a=a},
jM:function jM(a){this.a=a},
e_:function e_(a,b){this.a=a
this.b=b},
ju:function ju(a){this.a=a},
jv:function jv(a,b){this.a=a
this.b=b},
jw:function jw(a,b,c){this.a=a
this.b=b
this.c=c},
jx:function jx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jy:function jy(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bh:function bh(){},
hz:function hz(){},
hk:function hk(){},
bE:function bE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hN:function hN(a){this.a=a},
ej:function ej(a){this.a=a},
ha:function ha(a){this.a=a},
i2:function i2(a){this.a=a},
aN:function aN(a,b){this.a=a
this.b=b},
ao:function ao(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
ff:function ff(a){this.a=a},
fk:function fk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
fl:function fl(a,b){this.a=a
this.$ti=b},
fm:function fm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
jq:function jq(a){this.a=a},
jr:function jr(a){this.a=a},
js:function js(a){this.a=a},
l:function(a){return a},
jb:function(a){var t,s,r
if(!!J.t(a).$isq)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bT:function bT(){},
bp:function bp(){},
fA:function fA(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
dw:function dw(){},
fB:function fB(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(){},
dA:function dA(){},
fH:function fH(){},
bU:function bU(){},
bV:function bV(){},
bW:function bW(){},
bX:function bX(){},
oa:function(a){var t=H.x(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
e4:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
t:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dq.prototype
return J.dp.prototype}if(typeof a=="string")return J.b_.prototype
if(a==null)return J.fe.prototype
if(typeof a=="boolean")return J.fd.prototype
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.o)return a
return J.jm(a)},
jD:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jm:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.ki==null){H.oi()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.c6("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$k1()]
if(p!=null)return p
p=H.on(a)
if(p!=null)return p
if(typeof a=="function")return C.U
s=Object.getPrototypeOf(a)
if(s==null)return C.D
if(s===Object.prototype)return C.D
if(typeof q=="function"){Object.defineProperty(q,$.$get$k1(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
y:function(a){if(typeof a=="string")return J.b_.prototype
if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.o)return a
return J.jm(a)},
bd:function(a){if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.o)return a
return J.jm(a)},
jl:function(a){if(typeof a=="number")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.b6.prototype
return a},
oc:function(a){if(typeof a=="number")return J.bo.prototype
if(typeof a=="string")return J.b_.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.b6.prototype
return a},
lN:function(a){if(typeof a=="string")return J.b_.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.b6.prototype
return a},
j:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.o)return a
return J.jm(a)},
jN:function(a,b){if(typeof a=="number"&&typeof b=="number")return a/b
return J.jl(a).ad(a,b)},
F:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.t(a).A(a,b)},
av:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.jl(a).ay(a,b)},
lY:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.jl(a).a3(a,b)},
a1:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.om(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.y(a).h(a,b)},
lZ:function(a,b,c){return J.bd(a).i(a,b,c)},
m_:function(a,b,c,d){return J.j(a).e4(a,b,c,d)},
ko:function(a,b){return J.lN(a).aT(a,b)},
m0:function(a,b){return J.j(a).ee(a,b)},
m1:function(a,b,c,d){return J.j(a).eg(a,b,c,d)},
bC:function(a,b){return J.j(a).eq(a,b)},
m2:function(a,b,c,d){return J.j(a).er(a,b,c,d)},
m3:function(a,b,c){return J.j(a).es(a,b,c)},
kp:function(a,b){return J.j(a).cc(a,b)},
jO:function(a,b){return J.j(a).S(a,b)},
kq:function(a,b,c){return J.j(a).cf(a,b,c)},
m4:function(a,b){return J.j(a).eO(a,b)},
e6:function(a,b,c){return J.j(a).cg(a,b,c)},
m5:function(a,b,c){return J.j(a).ci(a,b,c)},
be:function(a,b,c){return J.j(a).cj(a,b,c)},
e7:function(a,b){return J.j(a).eR(a,b)},
m6:function(a,b){return J.j(a).ck(a,b)},
m7:function(a,b,c){return J.j(a).cl(a,b,c)},
kr:function(a,b,c,d){return J.j(a).cn(a,b,c,d)},
m8:function(a,b){return J.bd(a).co(a,b)},
m9:function(a,b,c,d,e){return J.j(a).cp(a,b,c,d,e)},
ma:function(a,b){return J.oc(a).T(a,b)},
jP:function(a,b,c){return J.y(a).eY(a,b,c)},
e8:function(a){return J.j(a).cs(a)},
mb:function(a){return J.j(a).ct(a)},
ks:function(a){return J.j(a).cv(a)},
kt:function(a){return J.j(a).f3(a)},
mc:function(a,b){return J.j(a).cz(a,b)},
jQ:function(a,b){return J.j(a).cA(a,b)},
md:function(a,b){return J.j(a).fd(a,b)},
me:function(a,b,c,d){return J.j(a).cB(a,b,c,d)},
mf:function(a,b,c,d,e){return J.j(a).fe(a,b,c,d,e)},
mg:function(a,b,c,d,e){return J.j(a).cC(a,b,c,d,e)},
mh:function(a,b,c,d,e,f){return J.j(a).ff(a,b,c,d,e,f)},
mi:function(a,b){return J.bd(a).t(a,b)},
co:function(a,b){return J.j(a).cD(a,b)},
mj:function(a,b){return J.j(a).cE(a,b)},
mk:function(a){return J.j(a).fg(a)},
ml:function(a,b){return J.bd(a).O(a,b)},
mm:function(a){return J.j(a).geN(a)},
aw:function(a){return J.t(a).gw(a)},
U:function(a){return J.bd(a).gv(a)},
bD:function(a){return J.y(a).gj(a)},
mn:function(a){return J.j(a).gcL(a)},
mo:function(a){return J.j(a).gbj(a)},
mp:function(a){return J.t(a).gC(a)},
mq:function(a){return J.j(a).gfL(a)},
mr:function(a){return J.j(a).gax(a)},
jR:function(a){return J.j(a).gn(a)},
jS:function(a){return J.j(a).gp(a)},
ku:function(a){return J.j(a).gK(a)},
jT:function(a,b){return J.j(a).ae(a,b)},
ms:function(a){return J.j(a).aL(a)},
kv:function(a){return J.j(a).bq(a)},
mt:function(a,b){return J.j(a).br(a,b)},
mu:function(a,b,c){return J.j(a).bs(a,b,c)},
kw:function(a,b,c){return J.j(a).bw(a,b,c)},
mv:function(a,b){return J.j(a).cH(a,b)},
mw:function(a,b){return J.bd(a).cK(a,b)},
mx:function(a,b,c){return J.j(a).cM(a,b,c)},
my:function(a){return J.bd(a).fE(a)},
mz:function(a,b){return J.j(a).H(a,b)},
mA:function(a,b,c){return J.j(a).dn(a,b,c)},
mB:function(a,b,c,d){return J.j(a).bD(a,b,c,d)},
mC:function(a,b,c,d,e,f,g){return J.j(a).cS(a,b,c,d,e,f,g)},
mD:function(a,b,c,d,e,f,g,h,i,j){return J.j(a).aI(a,b,c,d,e,f,g,h,i,j)},
mE:function(a,b,c,d){return J.j(a).cT(a,b,c,d)},
e9:function(a,b,c,d){return J.j(a).cU(a,b,c,d)},
aR:function(a){return J.jl(a).fM(a)},
mF:function(a){return J.lN(a).fP(a)},
aH:function(a){return J.t(a).k(a)},
mG:function(a,b,c,d){return J.j(a).fR(a,b,c,d)},
mH:function(a,b,c){return J.j(a).cW(a,b,c)},
mI:function(a,b,c){return J.j(a).cX(a,b,c)},
jU:function(a,b,c){return J.j(a).cY(a,b,c)},
mJ:function(a,b,c){return J.j(a).cZ(a,b,c)},
kx:function(a,b,c){return J.j(a).d_(a,b,c)},
ky:function(a,b,c){return J.j(a).d0(a,b,c)},
kz:function(a,b,c){return J.j(a).d1(a,b,c)},
kA:function(a,b,c,d){return J.j(a).d2(a,b,c,d)},
kB:function(a,b,c,d){return J.j(a).d3(a,b,c,d)},
mK:function(a,b){return J.j(a).d5(a,b)},
mL:function(a,b,c){return J.j(a).fS(a,b,c)},
kC:function(a,b,c,d,e,f,g){return J.j(a).d7(a,b,c,d,e,f,g)},
mM:function(a,b,c,d,e){return J.j(a).d8(a,b,c,d,e)},
a:function a(){},
fd:function fd(){},
fe:function fe(){},
bP:function bP(){},
fV:function fV(){},
b6:function b6(){},
b0:function b0(){},
aZ:function aZ(a){this.$ti=a},
k_:function k_(a){this.$ti=a},
cq:function cq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bo:function bo(){},
dq:function dq(){},
dp:function dp(){},
b_:function b_(){}},P={
nB:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.o0()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.aP(new P.i4(t),1)).observe(s,{childList:true})
return new P.i3(t,s,r)}else if(self.setImmediate!=null)return P.o1()
return P.o2()},
nC:function(a){++u.globalState.f.b
self.scheduleImmediate(H.aP(new P.i5(a),0))},
nD:function(a){++u.globalState.f.b
self.setImmediate(H.aP(new P.i6(a),0))},
nE:function(a){P.k8(C.x,a)},
nW:function(a,b){if(H.bB(a,{func:1,args:[P.aL,P.aL]})){b.toString
return a}else{b.toString
return a}},
n4:function(a,b,c){var t
if(a==null)a=new P.br()
t=$.w
if(t!==C.d)t.toString
t=new P.K(0,t,null,[c])
t.bV(a,b)
return t},
n5:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.K(0,$.w,null,[P.c])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.f1(t,!1,b,s)
try{for(m=0,l=0;m<2;++m){q=a[m]
p=l
q.bm(new P.f0(t,!1,b,s,p),r)
l=++t.b}if(l===0){l=new P.K(0,$.w,null,[null])
l.bU(C.B)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.O(j)
n=H.au(j)
if(t.b===0||!1)return P.n4(o,n,null)
else{t.c=o
t.d=n}}return s},
nP:function(a,b,c){$.w.toString
a.I(b,c)},
nH:function(a,b){var t=new P.K(0,$.w,null,[b])
H.b(!0)
t.a=4
t.c=a
return t},
lr:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.K))
H.b(b.a===0)
b.a=1
try{a.bm(new P.is(b),new P.it(b))}catch(r){t=H.O(r)
s=H.au(r)
P.ot(new P.iu(b,t,s))}},
ir:function(a,b){var t,s,r,q
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}s=b.a
if(t>=4){H.b(s<4)
r=b.c
b.c=null
q=b.an(r)
H.b(b.a<4)
H.b(a.a>=4)
b.a=a.a
b.c=a.c
P.bw(b,q)}else{q=b.c
H.b(s<=1)
b.a=2
b.c=a
a.c6(q)}},
bw:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.jc(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bw(t.a,b)}s=t.a
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
P.jc(null,null,p,o,s)
return}s=$.w
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.w
H.b(l==null?s!=null:l!==s)
j=$.w
$.w=l
i=j}else i=null
s=b.c
if(s===8)new P.iz(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.iy(r,b,m).$0()}else if((s&2)!==0)new P.ix(t,r,b).$0()
if(i!=null){H.b(!0)
$.w=i}s=r.b
if(!!J.t(s).$isaY){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.an(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.ir(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.an(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
nU:function(){var t,s
for(;t=$.by,t!=null;){$.ci=null
s=t.b
$.by=s
if(s==null)$.ch=null
t.a.$0()}},
nZ:function(){$.ke=!0
try{P.nU()}finally{$.ci=null
$.ke=!1
if($.by!=null)$.$get$kb().$1(P.lG())}},
ly:function(a){var t=new P.dV(a,null)
if($.by==null){$.ch=t
$.by=t
if(!$.ke)$.$get$kb().$1(P.lG())}else{$.ch.b=t
$.ch=t}},
nY:function(a){var t,s,r
t=$.by
if(t==null){P.ly(a)
$.ci=$.ch
return}s=new P.dV(a,null)
r=$.ci
if(r==null){s.b=t
$.ci=s
$.by=s}else{s.b=r.b
r.b=s
$.ci=s
if(s.b==null)$.ch=s}},
ot:function(a){var t=$.w
if(C.d===t){P.bz(null,null,C.d,a)
return}t.toString
P.bz(null,null,t,t.bb(a))},
nN:function(a,b,c){var t=a.eT(0)
if(!!J.t(t).$isaY&&t!==$.$get$kY())t.fT(new P.j9(b,c))
else b.ak(c)},
ny:function(a,b){var t=$.w
if(t===C.d){t.toString
return P.k8(a,b)}return P.k8(a,t.bb(b))},
k8:function(a,b){var t=C.b.F(a.a,1000)
return H.nx(t<0?0:t,b)},
ka:function(a){var t,s
H.b(a!=null)
t=$.w
H.b(a==null?t!=null:a!==t)
s=$.w
$.w=a
return s},
jc:function(a,b,c,d,e){var t={}
t.a=d
P.nY(new P.jd(t,e))},
lw:function(a,b,c,d){var t,s
if($.w===c)return d.$0()
t=P.ka(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.w=s}},
lx:function(a,b,c,d,e){var t,s
if($.w===c)return d.$1(e)
t=P.ka(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.w=s}},
nX:function(a,b,c,d,e,f){var t,s
if($.w===c)return d.$2(e,f)
t=P.ka(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.w=s}},
bz:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.bb(d):c.eP(d)
P.ly(d)},
i4:function i4(a){this.a=a},
i3:function i3(a,b,c){this.a=a
this.b=b
this.c=c},
i5:function i5(a){this.a=a},
i6:function i6(a){this.a=a},
f1:function f1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f0:function f0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ia:function ia(){},
c8:function c8(a,b){this.a=a
this.$ti=b},
j1:function j1(a,b){this.a=a
this.$ti=b},
ca:function ca(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
K:function K(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
io:function io(a,b){this.a=a
this.b=b},
iw:function iw(a,b){this.a=a
this.b=b},
is:function is(a){this.a=a},
it:function it(a){this.a=a},
iu:function iu(a,b,c){this.a=a
this.b=b
this.c=c},
iq:function iq(a,b){this.a=a
this.b=b},
iv:function iv(a,b){this.a=a
this.b=b},
ip:function ip(a,b,c){this.a=a
this.b=b
this.c=c},
iz:function iz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iA:function iA(a){this.a=a},
iy:function iy(a,b,c){this.a=a
this.b=b
this.c=c},
ix:function ix(a,b,c){this.a=a
this.b=b
this.c=c},
dV:function dV(a,b){this.a=a
this.b=b},
c1:function c1(){},
hs:function hs(a){this.a=a},
ht:function ht(a,b){this.a=a
this.b=b},
hq:function hq(a,b,c){this.a=a
this.b=b
this.c=c},
hr:function hr(a){this.a=a},
hp:function hp(){},
j9:function j9(a,b){this.a=a
this.b=b},
bf:function bf(a,b){this.a=a
this.b=b},
j8:function j8(){},
jd:function jd(a,b){this.a=a
this.b=b},
iO:function iO(){},
iQ:function iQ(a,b){this.a=a
this.b=b},
iP:function iP(a,b){this.a=a
this.b=b},
iR:function iR(a,b){this.a=a
this.b=b},
dr:function(a,b){return new H.ao(0,null,null,null,null,null,0,[a,b])},
I:function(){return new H.ao(0,null,null,null,null,null,0,[null,null])},
aK:function(a){return H.ob(a,new H.ao(0,null,null,null,null,null,0,[null,null]))},
ce:function(a,b){return new P.dY(0,null,null,null,null,null,0,[a,b])},
nL:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
nf:function(a,b,c){var t,s
if(P.kf(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$cj()
C.a.l(s,a)
try{P.nT(a,t)}finally{H.b(C.a.gaH(s)===a)
s.pop()}s=P.la(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
fc:function(a,b,c){var t,s,r
if(P.kf(a))return b+"..."+c
t=new P.c2(b)
s=$.$get$cj()
C.a.l(s,a)
try{r=t
r.a=P.la(r.ga8(),a,", ")}finally{H.b(C.a.gaH(s)===a)
s.pop()}s=t
s.a=s.ga8()+c
s=t.ga8()
return s.charCodeAt(0)==0?s:s},
kf:function(a){var t,s
for(t=0;s=$.$get$cj(),t<s.length;++t)if(a===s[t])return!0
return!1},
nT:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gv(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.m())return
q=H.f(t.gq())
C.a.l(b,q)
s+=q.length+2;++r}if(!t.m()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gq();++r
if(!t.m()){if(r<=4){C.a.l(b,H.f(n))
return}p=H.f(n)
o=b.pop()
s+=p.length+2}else{m=t.gq();++r
H.b(r<100)
for(;t.m();n=m,m=l){l=t.gq();++r
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
ap:function(a,b,c,d){return new P.iH(0,null,null,null,null,null,0,[d])},
k3:function(a,b){var t,s
t=P.ap(null,null,null,b)
for(s=J.U(a);s.m();)t.l(0,s.gq())
return t},
l3:function(a){var t,s,r
t={}
if(P.kf(a))return"{...}"
s=new P.c2("")
try{C.a.l($.$get$cj(),a)
r=s
r.a=r.ga8()+"{"
t.a=!0
a.O(0,new P.fs(t,s))
t=s
t.a=t.ga8()+"}"}finally{t=$.$get$cj()
H.b(C.a.gaH(t)===a)
t.pop()}t=s.ga8()
return t.charCodeAt(0)==0?t:t},
k4:function(a,b){var t=new P.fn(null,0,0,0,[b])
t.dN(a,b)
return t},
dY:function dY(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
iH:function iH(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
iI:function iI(a,b,c){this.a=a
this.b=b
this.c=c},
cd:function cd(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iD:function iD(){},
ds:function ds(){},
z:function z(){},
fs:function fs(a,b){this.a=a
this.b=b},
fn:function fn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iJ:function iJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hd:function hd(){},
hc:function hc(){},
bZ:function bZ(){},
ja:function(a){var t
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.iF(a,Object.create(null),null)
for(t=0;t<a.length;++t)a[t]=P.ja(a[t])
return a},
nV:function(a,b){var t,s,r,q
if(typeof a!=="string")throw H.e(H.P(a))
t=null
try{t=JSON.parse(a)}catch(r){s=H.O(r)
q=String(s)
throw H.e(new P.eZ(q,null,null))}q=P.ja(t)
return q},
iF:function iF(a,b,c){this.a=a
this.b=b
this.c=c},
iG:function iG(a){this.a=a},
cu:function cu(){},
cv:function cv(){},
fh:function fh(a,b){this.a=a
this.b=b},
fi:function fi(a){this.a=a},
la:function(a,b,c){var t=J.U(b)
if(!t.m())return a
if(c.length===0){do a+=H.f(t.gq())
while(t.m())}else{a+=H.f(t.gq())
for(;t.m();)a=a+c+H.f(t.gq())}return a},
mT:function(a,b){return J.ma(a,b)},
mW:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.f(t)
if(t>=10)return s+"00"+H.f(t)
return s+"000"+H.f(t)},
mX:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cw:function(a){if(a>=10)return""+a
return"0"+a},
jY:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aH(a)
if(typeof a==="string")return JSON.stringify(a)
return P.n0(a)},
n0:function(a){var t=J.t(a)
if(!!t.$isbh)return t.k(a)
return H.h0(a)},
cp:function(a){return new P.am(!1,null,null,a)},
kE:function(a,b,c){return new P.am(!0,a,b,c)},
mN:function(a){return new P.am(!1,null,a,"Must not be null")},
h1:function(a,b,c){return new P.dI(null,null,!0,a,b,"Value not in range")},
b4:function(a,b,c,d,e){return new P.dI(b,c,!0,a,d,"Invalid value")},
l8:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.b4(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.b4(b,a,c,"end",f))
return b},
D:function(a,b,c,d,e){var t=e!=null?e:J.bD(b)
return new P.f9(b,t,!0,a,c,"Index out of range")},
cC:function(a){return new P.im(a)},
l2:function(a,b,c){var t,s
t=H.x([],[c])
for(s=J.U(a);s.m();)C.a.l(t,s.gq())
if(b)return t
t.fixed$length=Array
return t},
T:function(a){H.e4(H.f(a))},
aF:function aF(){},
L:function L(){},
bj:function bj(a,b){this.a=a
this.b=b},
Q:function Q(){},
aX:function aX(a){this.a=a},
ev:function ev(){},
ew:function ew(){},
bk:function bk(){},
cr:function cr(a){this.a=a},
br:function br(){},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dI:function dI(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
f9:function f9(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
v:function v(a){this.a=a},
c6:function c6(a){this.a=a},
aq:function aq(a){this.a=a},
V:function V(a){this.a=a},
dM:function dM(){},
eo:function eo(a){this.a=a},
im:function im(a){this.a=a},
eZ:function eZ(a,b,c){this.a=a
this.b=b
this.c=c},
ey:function ey(a,b,c){this.a=a
this.b=b
this.$ti=c},
p:function p(){},
W:function W(){},
dn:function dn(){},
c:function c(){},
az:function az(){},
aL:function aL(){},
a0:function a0(){},
o:function o(){},
c0:function c0(){},
m:function m(){},
c2:function c2(a){this.a=a},
lH:function(a){return a},
ji:function(a){var t,s,r,q,p
if(a==null)return
t=P.I()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.G)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
o7:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.ml(a,new P.jf(t))
return t},
o8:function(a){var t,s
t=new P.K(0,$.w,null,[null])
s=new P.c8(t,[null])
a.then(H.aP(new P.jg(s),1))["catch"](H.aP(new P.jh(s),1))
return t},
kU:function(){var t=$.kT
if(t==null){t=J.jP(window.navigator.userAgent,"Opera",0)
$.kT=t}return t},
mY:function(){var t,s
t=$.kQ
if(t!=null)return t
s=$.kR
if(s==null){s=J.jP(window.navigator.userAgent,"Firefox",0)
$.kR=s}if(s)t="-moz-"
else{s=$.kS
if(s==null){s=!P.kU()&&J.jP(window.navigator.userAgent,"Trident/",0)
$.kS=s}if(s)t="-ms-"
else t=P.kU()?"-o-":"-webkit-"}$.kQ=t
return t},
i_:function i_(){},
i1:function i1(a,b){this.a=a
this.b=b},
jf:function jf(a){this.a=a},
i0:function i0(a,b,c){this.a=a
this.b=b
this.c=c},
jg:function jg(a){this.a=a},
jh:function jh(a){this.a=a},
iN:function iN(){},
M:function M(){},
ea:function ea(){},
aS:function aS(){},
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
eP:function eP(){},
eQ:function eQ(){},
eU:function eU(){},
eX:function eX(){},
an:function an(){},
aJ:function aJ(){},
f4:function f4(){},
ay:function ay(){},
fj:function fj(){},
ft:function ft(){},
fu:function fu(){},
aB:function aB(){},
fL:function fL(){},
fS:function fS(){},
fX:function fX(){},
fY:function fY(){},
h2:function h2(){},
h3:function h3(){},
c_:function c_(){},
hu:function hu(){},
J:function J(){},
hv:function hv(){},
hw:function hw(){},
dO:function dO(){},
hA:function hA(){},
c4:function c4(){},
aC:function aC(){},
hJ:function hJ(){},
hR:function hR(){},
hT:function hT(){},
hU:function hU(){},
cb:function cb(){},
iS:function iS(){},
iT:function iT(){},
iU:function iU(){},
cL:function cL(){},
cJ:function cJ(){},
cQ:function cQ(){},
cU:function cU(){},
d4:function d4(){},
dc:function dc(){},
d8:function d8(){},
da:function da(){},
ee:function ee(){},
h7:function h7(){},
h8:function h8(){},
j5:function j5(){},
hj:function hj(){},
cK:function cK(){},
d3:function d3(){}},W={
mZ:function(a,b,c){var t,s
t=document.body
s=(t&&C.q).N(t,a,b,c)
s.toString
t=new H.dU(new W.Z(s),new W.je(),[W.u])
return t.ga5(t)},
n_:function(a){return"wheel"},
bF:function(a){var t,s,r
t="element tag unavailable"
try{s=J.mq(a)
if(typeof s==="string")t=a.tagName}catch(r){H.O(r)}return t},
nG:function(a,b){return document.createElement(a)},
bc:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lu:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
a4:function(a,b,c,d,e){var t=c==null?null:W.lz(new W.il(c))
t=new W.ik(0,a,b,t,!1,[e])
t.e_(a,b,c,!1,e)
return t},
ls:function(a){var t,s
t=document.createElement("a")
s=new W.iV(t,window.location)
s=new W.cc(s)
s.e0(a)
return s},
nJ:function(a,b,c,d){return!0},
nK:function(a,b,c,d){var t,s,r,q,p
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
lv:function(){var t=P.m
t=new W.j2(P.k3(C.t,t),P.ap(null,null,null,t),P.ap(null,null,null,t),P.ap(null,null,null,t),null)
t.e2(null,new H.bQ(C.t,new W.j3(),[H.al(C.t,0),null]),["TEMPLATE"],null)
return t},
nQ:function(a){var t
if(a==null)return
if("postMessage" in a){t=W.nF(a)
if(!!J.t(t).$ish)return t
return}else return a},
nR:function(a){var t
if(!!J.t(a).$isaW)return a
t=new P.i0([],[],!1)
t.c=!0
return t.bo(a)},
nF:function(a){if(a===window)return a
else return new W.ic(a)},
lz:function(a){var t=$.w
if(t===C.d)return a
return t.eQ(a)},
k:function k(){},
eb:function eb(){},
ed:function ed(){},
a8:function a8(){},
ef:function ef(){},
cs:function cs(){},
aT:function aT(){},
aU:function aU(){},
ei:function ei(){},
aV:function aV(){},
el:function el(){},
B:function B(){},
bi:function bi(){},
en:function en(){},
ep:function ep(){},
eq:function eq(){},
cx:function cx(){},
aW:function aW(){},
cy:function cy(){},
er:function er(){},
cz:function cz(){},
es:function es(){},
cA:function cA(){},
cB:function cB(){},
et:function et(){},
eu:function eu(){},
a9:function a9(){},
je:function je(){},
i:function i(){},
h:function h(){},
aa:function aa(){},
eS:function eS(){},
eT:function eT(){},
eY:function eY(){},
ab:function ab(){},
cF:function cF(){},
f3:function f3(){},
bM:function bM(){},
cG:function cG(){},
cH:function cH(){},
bN:function bN(){},
bl:function bl(){},
bm:function bm(){},
bn:function bn(){},
bO:function bO(){},
b1:function b1(){},
fq:function fq(){},
bR:function bR(){},
fw:function fw(){},
fx:function fx(){},
bS:function bS(){},
ac:function ac(){},
fy:function fy(){},
R:function R(){},
fI:function fI(){},
Z:function Z(a){this.a=a},
u:function u(){},
dB:function dB(){},
bY:function bY(){},
fR:function fR(){},
fU:function fU(){},
ad:function ad(){},
fW:function fW(){},
fZ:function fZ(){},
h_:function h_(){},
dH:function dH(){},
h9:function h9(){},
dK:function dK(){},
hb:function hb(){},
he:function he(){},
ae:function ae(){},
hg:function hg(){},
af:function af(){},
hi:function hi(){},
ag:function ag(){},
hn:function hn(){},
ho:function ho(a){this.a=a},
a2:function a2(){},
ar:function ar(){},
dN:function dN(){},
hx:function hx(){},
hy:function hy(){},
c3:function c3(){},
ah:function ah(){},
a3:function a3(){},
hB:function hB(){},
hC:function hC(){},
hD:function hD(){},
ai:function ai(){},
b5:function b5(){},
hH:function hH(){},
hI:function hI(){},
bu:function bu(){},
hK:function hK(){},
dS:function dS(){},
aO:function aO(){},
hQ:function hQ(){},
bv:function bv(){},
hS:function hS(){},
hV:function hV(){},
hW:function hW(){},
b7:function b7(){},
c7:function c7(){},
hY:function hY(a){this.a=a},
hZ:function hZ(){},
b8:function b8(){},
i9:function i9(){},
dW:function dW(){},
ib:function ib(){},
id:function id(){},
ie:function ie(){},
iB:function iB(){},
iC:function iC(){},
dZ:function dZ(){},
iW:function iW(){},
iZ:function iZ(){},
j_:function j_(){},
j6:function j6(){},
j7:function j7(){},
i7:function i7(){},
ig:function ig(a){this.a=a},
ij:function ij(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
c9:function c9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ik:function ik(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
il:function il(a){this.a=a},
cc:function cc(a){this.a=a},
C:function C(){},
dD:function dD(a){this.a=a},
fK:function fK(a){this.a=a},
fJ:function fJ(a,b,c){this.a=a
this.b=b
this.c=c},
cf:function cf(){},
iX:function iX(){},
iY:function iY(){},
j2:function j2(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
j3:function j3(){},
j0:function j0(){},
cE:function cE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ic:function ic(a){this.a=a},
dC:function dC(){},
iV:function iV(a,b){this.a=a
this.b=b},
e0:function e0(a){this.a=a},
j4:function j4(a){this.a=a},
bG:function bG(){},
bH:function bH(){},
bI:function bI(){},
bJ:function bJ(){},
bK:function bK(){},
bL:function bL(){},
cI:function cI(){},
d1:function d1(){},
cO:function cO(){},
cV:function cV(){},
cW:function cW(){},
cX:function cX(){},
cY:function cY(){},
cZ:function cZ(){},
d_:function d_(){},
d0:function d0(){},
cM:function cM(){},
cN:function cN(){},
cP:function cP(){},
cR:function cR(){},
cS:function cS(){},
cT:function cT(){},
d2:function d2(){},
de:function de(){},
df:function df(){},
dd:function dd(){},
di:function di(){},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
d5:function d5(){},
d6:function d6(){},
d7:function d7(){},
d9:function d9(){},
db:function db(){},
dg:function dg(){},
dh:function dh(){}},B={
ou:function(a){var t,s
t=document
s=W.b1
W.a4(t,"keydown",new B.jF(),!1,s)
W.a4(t,"keyup",new B.jG(),!1,s)
if(!$.ov)W.a4(t,"mousemove",new B.jH(),!1,W.R)
s=W.R
W.a4(t,"mousedown",new B.jI(),!1,s)
W.a4(t,"mouseup",new B.jJ(),!1,s)},
nl:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.l(3))
s=$.$get$jj()
r=$.$get$cl()
q=new T.E(new Float32Array(H.l(16)))
q.G()
q=new B.fM(a,b,c,0,new T.n(t),-0.02,s,r,q,new T.n(new Float32Array(H.l(3))),new T.n(new Float32Array(H.l(3))),new T.n(new Float32Array(H.l(3))),new T.n(new Float32Array(H.l(3))),"camera:orbit",!1,!0)
q.dP(a,b,c,d)
return q},
jF:function jF(){},
jG:function jG(){},
jH:function jH(){},
jI:function jI(){},
jJ:function jJ(){},
fM:function fM(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
fN:function fN(a){this.a=a},
fO:function fO(a){this.a=a},
fP:function fP(){},
fQ:function fQ(a){this.a=a}},L={
kD:function(a){var t=[T.E]
t=new L.ec(H.x(new Array(a),t),H.x(new Array(a),t))
t.dF(a)
return t},
k9:function(b1,b2,b3,b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
t=new Float32Array(16)
s=new T.E(t)
for(r=b3.b,q=b4.a,p=0;p<b1.length;++p){o=b1[p]
n=q[p]
m=o.e
if(m<0)n.G()
else n.D(q[m])
l=r[p]
if(l!=null){k=L.jV(l.f,b5)
H.b(!0)
j=L.jV(l.b,b5)
H.b(!0)
i=L.jV(l.d,b5)
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
s.R(0,h)
n.ab(0,s)}else n.ab(0,o.b)}for(t=b4.b,p=0;p<b1.length;++p){n=t[p]
n.D(b2)
n.ab(0,q[p])
n.ab(0,b1[p].c)}},
mV:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k
t=L.kD(a.length)
s=new Float32Array(H.l(a.length*16*d.length))
for(r=d.length,q=t.b,p=q.length,o=0,n=0;n<d.length;d.length===r||(0,H.G)(d),++n){L.k9(a,b,c,t,d[n])
for(m=0;m<p;++m){l=q[m]
for(k=0;k<16;++k)s[o+k]=l.a[k]
o+=16}}return s},
jV:function(a,b){var t,s
for(t=0;t<a.length-1;t=s){s=t+1
if(C.l.a3(b,a[s]))return t}return 0},
bg:function bg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ec:function ec(a,b){this.a=a
this.b=b},
ct:function ct(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hf:function hf(a,b,c){this.a=a
this.b=b
this.c=c}},G={
nA:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.aa(t,"\n")},
lq:function(a,b,c){var t,s,r,q
t=J.j(a)
s=t.cu(a,b)
t.bB(a,s,c)
t.cq(a,s)
r=t.bu(a,s,35713)
if(r!=null&&!r){q=t.bt(a,s)
P.T("E:Compilation failed:")
P.T("E:"+G.nA(c))
P.T("E:Failure:")
P.T(C.i.a2("E:",q))
throw H.e(q)}return s},
l4:function(a){var t=new G.fv(P.I(),a,!1,!0)
t.dO(a)
return t},
eV:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.jR(a[s])
b[t+1]=J.jS(a[s])
b[t+2]=J.ku(a[s])}return b},
n2:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.jR(a[s])
b[t+1]=J.jS(a[s])}return b},
n3:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.jR(a[s])
b[t+1]=J.jS(a[s])
b[t+2]=J.ku(a[s])
b[t+3]=J.mr(a[s])}return b},
n1:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.a1(a[s],0)
b[t+1]=J.a1(a[s],1)
b[t+2]=J.a1(a[s],2)
b[t+3]=J.a1(a[s],3)}return b},
nI:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gB(t),s=s.gv(s),r=b.x,q=[[P.c,P.p]],p=[P.Q],o=[T.Y],n=[T.n],m=[T.as];s.m();){l=s.gq()
if(!r.u(0,l)){k="Dropping unnecessary attribute: "+H.f(l)
if($.lM>0)H.e4("I: "+k)
continue}j=t.h(0,l)
switch($.$get$a_().h(0,l).a){case"vec2":b.ah(l,G.n2(H.e5(j,"$isc",m,"$asc"),null),2)
break
case"vec3":b.ah(l,G.eV(H.e5(j,"$isc",n,"$asc"),null),3)
break
case"vec4":b.ah(l,G.n3(H.e5(j,"$isc",o,"$asc"),null),4)
break
case"float":b.ah(l,new Float32Array(H.jb(H.e5(j,"$isc",p,"$asc"))),1)
break
case"uvec4":b.ah(l,G.n1(H.e5(j,"$isc",q,"$asc"),null),4)
break
default:if(H.a5(!1))H.aj("unknown type for "+H.f(l)+" ["+J.mp(j[0]).k(0)+"] ["+new H.aN(H.jo(j),null).k(0)+"] "+H.f(j))}}},
ni:function(a,b,c){var t,s,r,q
t=b.d
s=new G.dv(t,J.kt(t.a),1,P.I(),b.e.x,null,0,-1,null,null,P.I(),"meshdata:"+a,!1,!0)
s.aA(G.eV(c,null))
t=new Array(c.length)
t.fixed$length=Array
r=H.x(t,[P.p])
for(t=c.length,q=0;q<t;++q)r[q]=q
s.y=J.e8(s.d.a)
s.bH(r)
return s},
k7:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.ap(null,null,null,P.m)
s=c.b
r=d.b
q=c.f
p=J.mb(b.a)
o=G.lq(b.a,35633,s)
J.kq(b.a,p,o)
n=G.lq(b.a,35632,r)
J.kq(b.a,p,n)
if(q.length>0)J.mG(b.a,p,q,35980)
J.mv(b.a,p)
if(!J.mu(b.a,p,35714))H.H(J.mt(b.a,p))
t=new G.h6(b,c,d,p,P.k3(c.c,null),P.I(),P.I(),t,null,a,!1,!0)
t.dR(a,b,c,d)
return t},
fz:function fz(){},
dT:function dT(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eh:function eh(){},
ek:function ek(a,b){this.a=a
this.b=b},
f_:function f_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eR:function eR(a,b,c){this.a=a
this.b=b
this.c=c},
f2:function f2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dR:function dR(a,b,c){this.a=a
this.b=b
this.c=c},
dQ:function dQ(a,b,c){this.a=a
this.b=b
this.c=c},
fv:function fv(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dv:function dv(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
fT:function fT(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
h6:function h6(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
aM:function aM(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hh:function hh(){},
dP:function dP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
c5:function c5(){},
hO:function hO(a,b,c,d,e,f,g,h){var _=this
_.f=a
_.r=b
_.x=c
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f5:function f5(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},Y={
dX:function(a){var t,s,r
for(t=J.y(a),s=0;s<t.gj(a);++s){r=t.h(a,s)
if(typeof r==="number"&&Math.floor(r)===r)t.i(a,s,J.aR(t.h(a,s)))}return a},
n7:function(a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=[]
s=new G.f2(!1,t,[],[],P.I())
r=J.y(a2)
q=r.h(a2,"name")
if(H.a5(r.u(a2,"vertices")))H.aj("no vertices")
s.aA(Y.em(r.h(a2,"vertices")))
if(r.u(a2,"normals")){s.a6("aNormal")
s.aQ("aNormal",Y.em(r.h(a2,"normals")))}if(r.u(a2,"texturecoords")){H.b(J.bD(r.h(a2,"texturecoords"))===1)
s.a6("aTexUV")
s.dD("aTexUV",Y.mU(J.a1(r.h(a2,"texturecoords"),0)))}if(r.u(a2,"tangents")){s.a6("aTangent")
s.aQ("aTangent",Y.em(r.h(a2,"tangents")))}if(r.u(a2,"bitangents")){s.a6("aBitangent")
s.aQ("aBitangent",Y.em(r.h(a2,"bitangents")))}p=r.h(a2,"faces")
if(H.a5(p!=null))H.aj("no faces")
for(o=J.U(p);o.m();){n=o.gq()
m=J.y(n)
H.b(m.gj(n)===3)
l=m.h(n,0)
k=m.h(n,1)
m=m.h(n,2)
H.b(!0)
C.a.l(t,new G.eR(l,k,m))}j=P.dr(P.m,L.bg)
C.a.O(a3,new Y.f7(j))
t=C.c.F(J.bD(r.h(a2,"normals")),3)
o=[T.Y]
i=H.x(new Array(t),o)
h=H.x(new Array(t),o)
for(g=0;g<t;++g){i[g]=new T.Y(new Float32Array(4))
h[g]=new T.Y(new Float32Array(4))}for(t=J.U(r.h(a2,"bones"));t.m();){f=t.gq()
o=J.y(f)
H.b(j.u(0,o.h(f,"name")))
e=j.h(0,o.h(f,"name"))
d=o.h(f,"offsetmatrix")
m=e.c
l=Y.dX(d)
k=m.a
c=J.y(l)
k[15]=c.h(l,15)
k[14]=c.h(l,14)
k[13]=c.h(l,13)
k[12]=c.h(l,12)
k[11]=c.h(l,11)
k[10]=c.h(l,10)
k[9]=c.h(l,9)
k[8]=c.h(l,8)
k[7]=c.h(l,7)
k[6]=c.h(l,6)
k[5]=c.h(l,5)
k[4]=c.h(l,4)
k[3]=c.h(l,3)
k[2]=c.h(l,2)
k[1]=c.h(l,1)
k[0]=c.h(l,0)
m.cV()
if(o.u(f,"weights")){b=e.d
for(o=J.U(o.h(f,"weights"));o.m();){a=o.gq()
m=J.y(a)
a0=m.h(a,0)
for(a1=0;a1<4;++a1)if(C.a.h(h,a0).a[a1]===0)break
H.b(a1!==4)
l=C.a.h(h,a0)
m=J.aR(m.h(a,1))
l.a[a1]=m
C.a.h(i,a0).a[a1]=b}}}s.a6("aBoneIndex")
s.a6("aBoneWeight")
s.bF("aBoneIndex",i)
s.bF("aBoneWeight",h)
P.T("mesh "+H.f(q)+" "+s.k(0)+" "+H.f(r.gB(a2)))
return s},
n8:function(a){var t,s,r,q
t={}
s=H.x([],[L.bg])
t.a=0
r=new Y.f8(t,s)
for(q=J.U(J.a1(J.a1(a,"rootnode"),"children"));q.m();)r.$2(q.gq(),-1)
return s},
n6:function(a6,a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
t=P.dr(P.m,L.bg)
C.a.O(a7,new Y.f6(t))
s=J.y(a6)
r=s.h(a6,"name")
q=J.aR(s.h(a6,"tickspersecond"))
p=s.h(a6,"duration")
o=s.h(a6,"channels")
H.b(o!=null)
s=H.x(new Array(a7.length),[L.ct])
n=J.y(o)
P.T("animated bones: "+n.gj(o))
for(n=n.gv(o);n.m();){m=n.gq()
l=J.y(m)
H.b(t.u(0,l.h(m,"name")))
k=t.h(0,l.h(m,"name"))
j=[]
i=[]
for(h=J.U(l.h(m,"positionkeys"));h.m();){g=h.gq()
f=J.y(g)
C.a.l(j,J.jN(f.h(g,0),q))
f=Y.dX(f.h(g,1))
e=new T.n(new Float32Array(3))
e.cr(f,0)
C.a.l(i,e)}d=[]
c=[]
for(h=J.U(l.h(m,"rotationkeys"));h.m();){b=h.gq()
f=J.y(b)
C.a.l(d,J.jN(f.h(b,0),q))
a=Y.dX(f.h(b,1))
f=J.y(a)
e=f.h(a,1)
a0=f.h(a,2)
a1=f.h(a,3)
f=f.h(a,0)
a2=new Float32Array(4)
a2[0]=e
a2[1]=a0
a2[2]=a1
a2[3]=f
C.a.l(c,new T.dG(a2))}a3=[]
a4=[]
for(l=J.U(l.h(m,"scalingkeys"));l.m();){a5=l.gq()
h=J.y(a5)
C.a.l(a3,J.jN(h.h(a5,0),q))
h=Y.dX(h.h(a5,1))
f=new T.n(new Float32Array(3))
f.cr(h,0)
C.a.l(a4,f)}l=new L.ct(k,j,i,d,c,a3,a4)
h=j.length
if(h===0){l.sel([0])
h=new Float32Array(3)
h[0]=0
h[1]=0
h[2]=0
l.sem([new T.n(h)])}h=l.d
if(h==null||h.length===0){l.sew([0])
h=new Float32Array(4)
h[0]=0
h[1]=0
h[2]=0
h[3]=1
l.sex([new T.dG(h)])}h=l.f
if(h==null||h.length===0){l.seA([0])
h=new Float32Array(3)
h[0]=1
h[1]=1
h[2]=1
l.seB([new T.n(h)])}H.b(l.d.length>0)
H.b(l.b.length>0)
H.b(l.f.length>0)
H.b(l.d.length===l.e.length)
H.b(l.b.length===l.c.length)
H.b(l.f.length===l.r.length)
h=k.d
H.b(s[h]==null)
s[h]=l}return new L.hf(r,s,p)},
em:function(a){var t,s,r,q,p,o,n,m
t=J.y(a)
s=H.x(new Array(C.b.F(t.gj(a),3)),[T.n])
for(r=0;r<t.gj(a);r+=3){q=C.b.F(r,3)
p=J.aR(t.h(a,r))
o=J.aR(t.h(a,r+1))
n=J.aR(t.h(a,r+2))
m=new Float32Array(3)
m[0]=p
m[1]=o
m[2]=n
s[q]=new T.n(m)}return s},
mU:function(a){var t,s,r,q,p,o,n
t=J.y(a)
s=H.x(new Array(C.b.F(t.gj(a),2)),[T.as])
for(r=0;r<t.gj(a);r+=2){q=C.b.F(r,2)
p=J.aR(t.h(a,r))
o=J.aR(t.h(a,r+1))
n=new Float32Array(2)
n[0]=p
n[1]=o
s[q]=new T.as(n)}return s},
f7:function f7(a){this.a=a},
f8:function f8(a,b){this.a=a
this.b=b},
f6:function f6(a){this.a=a}},R={
kG:function(a,b,c){var t,s,r,q,p,o
t=[]
for(s=b.a,r=0;r<a.length;++r){q=a[r].e
if(q===-1)continue
p=s[r].bv()
o=new T.n(new Float32Array(3))
o.D(p)
o.R(0,c)
C.a.l(t,o)
o=s[q].bv()
p=new T.n(new Float32Array(3))
p.D(o)
p.R(0,c)
C.a.l(t,p)}return t},
eg:function eg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dJ:function dJ(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
hl:function hl(){},
hm:function hm(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
lK:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
if(!b.c)return
t=b.dx
t.D(c)
s=b.d
t.ab(0,s)
r=b.ch
if(r!=null&&b.cx!=null){J.aH(b)
q=C.a.gaH(e)
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
p.f_(new T.aA(o))
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
C.a.l(e,r)
a.dJ(b.cx,e,d)
e.pop()}for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.G)(s),++l)A.lK(a,s[l],t,d,e)},
bq:function bq(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
bt:function bt(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
h5:function h5(){},
e2:function(a){var t,s
t=C.j.fi(a,0,new A.jp())
s=536870911&t+(C.b.d9(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
jp:function jp(){}},D={
nk:function(a){var t,s
t=new P.K(0,$.w,null,[null])
s=new XMLHttpRequest()
C.y.fB(s,"GET",a)
W.a4(s,"loadend",new D.fp(new P.c8(t,[null]),s),!1,W.oD)
C.y.H(s,"")
return t},
nj:function(a){var t,s,r
t=new P.K(0,$.w,null,[null])
s=document.createElement("img")
r=new W.c9(s,"load",!1,[W.i])
r.gbf(r).aJ(new D.fo(new P.c8(t,[null]),s))
s.src=a
return t},
fp:function fp(a,b){this.a=a
this.b=b},
fo:function fo(a,b){this.a=a
this.b=b}},T={
nz:function(a,b,c){var t=new Float32Array(3)
t[0]=a
t[1]=b
t[2]=c
return new T.n(t)},
aA:function aA(a){this.a=a},
E:function E(a){this.a=a},
dG:function dG(a){this.a=a},
as:function as(a){this.a=a},
n:function n(a){this.a=a},
Y:function Y(a){this.a=a}},X={
oo:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t={}
s=document
r=new R.hm(0,0,null,null,null,null)
r.dU(C.k.dd(s,"stats"),"blue","gray")
q=C.k.fD(s,"#webgl-canvas")
p=new G.ek(null,q)
o=(q&&C.K).dc(q,"webgl2",P.aK(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=o
if(o==null)H.H(P.cC('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+J.aH(J.ms(o))
if($.lM>0)P.T("I: "+n)
J.m9(o,0,0,0,1)
J.co(o,2929)
J.co(o,2884)
m=B.nl(5000,0,0,q)
o=new T.E(new Float32Array(H.l(16)))
o.G()
n=new T.E(new Float32Array(H.l(16)))
n.G()
l=new G.fT(m,50,1,1,1e4,o,n,new T.E(new Float32Array(H.l(16))),P.I(),"perspective",!1,!0)
l.bO()
n=G.k7("animation",p,$.$get$lC(),$.$get$lB())
k=new A.bt(n,[l],[],"animation",!1,!0)
o=G.k7("solid",p,$.$get$lV(),$.$get$lU())
j=new A.bt(o,[l],[],"solid",!1,!0)
i=G.k7("demo",p,$.$get$lJ(),$.$get$lI())
h=new A.bt(i,[l],[],"demo",!1,!0)
H.b(o.dM(n))
g=H.x([],[A.bt])
f=new R.dJ(q,l,null,p,g,17664,0,0,0,0,"main",!1,!0)
f.dQ("main",p,null)
f.cO(null)
W.a4(window,"resize",f.gfH(),!1,W.i)
H.b(!0)
C.a.l(g,j)
H.b(!0)
C.a.l(g,k)
H.b(!0)
C.a.l(g,h)
e=G.l4("wire")
e.a_("uColor",$.$get$kN())
d=G.l4("mat")
t.a=null
t.b=null
t.c=null
c=P.aK(["idSkeleton",o,"idStatic",i,"idAnimation",n])
for(o=C.k.bp(s,"input"),n=o.length,b=0;b<o.length;o.length===n||(0,H.G)(o),++b){i=J.mn(o[b])
W.a4(i.a,i.b,new X.jB(c),!1,H.al(i,0))}for(o=C.k.bp(s,"input"),n=o.length,b=0;b<o.length;o.length===n||(0,H.G)(o),++b){a=o[b]
H.e4("initialize inputs "+H.f(a.id))
a0=C.k.e9(s,"Event")
J.m1(a0,"change",!0,!0)
J.md(a,a0)}t.d=0
d.d.i(0,"uTime",0)
P.n5([D.nk("../asset/monster/monster.json"),D.nj("../asset/monster/monster.jpg")],null,!1).aJ(new X.jC(t,p,k,j,h,e,d,new X.jA(t,r,m,f,d)))},
jB:function jB(a){this.a=a},
jA:function jA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jC:function jC(a,b,c,d,e,f,g,h){var _=this
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
H.k0.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gw:function(a){return H.b3(a)},
k:function(a){return H.h0(a)},
gC:function(a){return new H.aN(H.jo(a),null)}}
J.fd.prototype={
k:function(a){return String(a)},
gw:function(a){return a?519018:218159},
gC:function(a){return C.as},
$isaF:1}
J.fe.prototype={
A:function(a,b){return null==b},
k:function(a){return"null"},
gw:function(a){return 0},
gC:function(a){return C.am}}
J.bP.prototype={
gw:function(a){return 0},
gC:function(a){return C.al},
k:function(a){return String(a)},
$isl1:1}
J.fV.prototype={}
J.b6.prototype={}
J.b0.prototype={
k:function(a){var t=a[$.$get$kP()]
return t==null?this.dA(a):J.aH(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjZ:1}
J.aZ.prototype={
bd:function(a,b){if(!!a.immutable$list)throw H.e(new P.v(b))},
bc:function(a,b){if(!!a.fixed$length)throw H.e(new P.v(b))},
l:function(a,b){this.bc(a,"add")
a.push(b)},
M:function(a,b){var t,s,r,q,p
t=a.length
this.bc(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.G)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.H(new P.V(a)))
a.push(q)}},
O:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.e(new P.V(a))}},
cK:function(a,b){return new H.bQ(a,b,[H.al(a,0),null])},
aa:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
t:function(a,b){return this.h(a,b)},
gbf:function(a){if(a.length>0)return a[0]
throw H.e(H.dm())},
gaH:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.dm())},
bz:function(a,b,c,d,e){var t,s
this.bd(a,"setRange")
P.l8(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.H(P.b4(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.ng())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
ce:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.V(a))}return!1},
dt:function(a,b){this.bd(a,"sort")
H.dL(a,0,a.length-1,P.o9())},
aM:function(a){return this.dt(a,null)},
E:function(a,b){var t
for(t=0;t<a.length;++t)if(J.F(a[t],b))return!0
return!1},
k:function(a){return P.fc(a,"[","]")},
gv:function(a){return new J.cq(a,a.length,0,null,[H.al(a,0)])},
gw:function(a){return H.b3(a)},
gj:function(a){return a.length},
sj:function(a,b){this.bc(a,"set length")
if(b<0)throw H.e(P.b4(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.S(a,b))
if(b>=a.length||b<0)throw H.e(H.S(a,b))
return a[b]},
i:function(a,b,c){this.bd(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.S(a,b))
if(b>=a.length||b<0)throw H.e(H.S(a,b))
a[b]=c},
$isq:1,
$asq:function(){},
$isd:1,
$asd:null,
$isc:1,
$asc:null}
J.k_.prototype={}
J.cq.prototype={
gq:function(){return this.d},
m:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.G(t))
r=this.c
if(r>=s){this.sbQ(null)
return!1}this.sbQ(t[r]);++this.c
return!0},
sbQ:function(a){this.d=a}}
J.bo.prototype={
T:function(a,b){var t
if(typeof b!=="number")throw H.e(H.P(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaF(b)
if(this.gaF(a)===t)return 0
if(this.gaF(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaF:function(a){return a===0?1/a<0:a<0},
eU:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.v(""+a+".ceil()"))},
fh:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.e(new P.v(""+a+".floor()"))},
ac:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.v(""+a+".round()"))},
eV:function(a,b,c){if(this.T(b,c)>0)throw H.e(H.P(b))
if(this.T(a,b)<0)return b
if(this.T(a,c)>0)return c
return a},
fM:function(a){return a},
fQ:function(a,b){var t
if(b>20)throw H.e(P.b4(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaF(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw:function(a){return a&0x1FFFFFFF},
a2:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a+b},
ag:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a-b},
ad:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a/b},
J:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a*b},
bx:function(a,b){var t
if(typeof b!=="number")throw H.e(H.P(b))
t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
aO:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.ca(a,b)},
F:function(a,b){return(a|0)===a?a/b|0:this.ca(a,b)},
ca:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.v("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
b2:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
d9:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return(a&b)>>>0},
dC:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return(a^b)>>>0},
a3:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a<b},
ay:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a>b},
da:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a>=b},
gC:function(a){return C.av},
$isa0:1}
J.dq.prototype={
gC:function(a){return C.au},
$isQ:1,
$isp:1,
$isa0:1}
J.dp.prototype={
gC:function(a){return C.at},
$isQ:1,
$isa0:1}
J.b_.prototype={
aT:function(a,b){if(b>=a.length)throw H.e(H.S(a,b))
return a.charCodeAt(b)},
a2:function(a,b){if(typeof b!=="string")throw H.e(P.kE(b,null,null))
return a+b},
du:function(a,b,c){var t
if(c>a.length)throw H.e(P.b4(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bC:function(a,b){return this.du(a,b,0)},
bE:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.h1(b,null,null))
if(b>c)throw H.e(P.h1(b,null,null))
if(c>a.length)throw H.e(P.h1(c,null,null))
return a.substring(b,c)},
dv:function(a,b){return this.bE(a,b,null)},
fP:function(a){return a.toLowerCase()},
eY:function(a,b,c){if(c>a.length)throw H.e(P.b4(c,0,a.length,null,null))
return H.ow(a,b,c)},
T:function(a,b){var t
if(typeof b!=="string")throw H.e(H.P(b))
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
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.S(a,b))
return a[b]},
$isq:1,
$asq:function(){},
$ism:1}
H.d.prototype={$asd:null}
H.b2.prototype={
gv:function(a){return new H.dt(this,this.gj(this),0,null,[H.ak(this,"b2",0)])},
aK:function(a,b){return this.dz(0,b)},
fO:function(a,b){var t,s
t=H.x([],[H.ak(this,"b2",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.t(0,s)
return t},
fN:function(a){return this.fO(a,!0)}}
H.dt.prototype={
gq:function(){return this.d},
m:function(){var t,s,r,q
t=this.a
s=J.y(t)
r=s.gj(t)
if(this.b!==r)throw H.e(new P.V(t))
q=this.c
if(q>=r){this.sal(null)
return!1}this.sal(s.t(t,q));++this.c
return!0},
sal:function(a){this.d=a}}
H.du.prototype={
gv:function(a){return new H.fr(null,J.U(this.a),this.b,this.$ti)},
gj:function(a){return J.bD(this.a)},
$asW:function(a,b){return[b]}}
H.ex.prototype={$isd:1,
$asd:function(a,b){return[b]}}
H.fr.prototype={
m:function(){var t=this.b
if(t.m()){this.sal(this.c.$1(t.gq()))
return!0}this.sal(null)
return!1},
gq:function(){return this.a},
sal:function(a){this.a=a},
$asdn:function(a,b){return[b]}}
H.bQ.prototype={
gj:function(a){return J.bD(this.a)},
t:function(a,b){return this.b.$1(J.mi(this.a,b))},
$asd:function(a,b){return[b]},
$asb2:function(a,b){return[b]},
$asW:function(a,b){return[b]}}
H.dU.prototype={
gv:function(a){return new H.hX(J.U(this.a),this.b,this.$ti)}}
H.hX.prototype={
m:function(){var t,s
for(t=this.a,s=this.b;t.m();)if(s.$1(t.gq()))return!0
return!1},
gq:function(){return this.a.gq()}}
H.cD.prototype={}
H.jK.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.jL.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.iL.prototype={
sft:function(a){this.z=a},
sfw:function(a){this.ch=a}}
H.ba.prototype={
cd:function(a,b){if(!this.f.A(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.ba()},
fG:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.au(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.c4();++r.d}this.y=!1}this.ba()},
eJ:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.t(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
fF:function(a){var t,s,r
if(this.ch==null)return
for(t=J.t(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.H(new P.v("removeRange"))
P.l8(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
dq:function(a,b){if(!this.r.A(0,a))return
this.db=b},
fm:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.H(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.k4(null,null)
this.cx=t}t.V(0,new H.iE(a,c))},
fl:function(a,b){var t
if(!this.r.A(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aG()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.k4(null,null)
this.cx=t}t.V(0,this.gfu())},
fn:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.T(a)
if(b!=null)P.T(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aH(a)
s[1]=b==null?null:b.k(0)
for(r=new P.cd(t,t.r,null,null,[null]),r.c=t.e;r.m();)r.d.H(0,s)},
aq:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.O(o)
p=H.au(o)
this.fn(q,p)
if(this.db){this.aG()
if(this===u.globalState.e)throw o}}finally{this.cy=H.o3(r)
u.globalState.d=H.kj(t,"$isba")
if(t!=null)$=t.gfs()
if(this.cx!=null)for(;n=this.cx,!n.gat(n);)this.cx.cN().$0()}return s},
cJ:function(a){return this.b.h(0,a)},
bT:function(a,b){var t=this.b
if(t.u(0,a))throw H.e(P.cC("Registry: ports must be registered only once."))
t.i(0,a,b)},
ba:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.aG()},
aG:function(){var t,s,r
t=this.cx
if(t!=null)t.X(0)
for(t=this.b,s=t.gd6(t),s=s.gv(s);s.m();)s.gq().e6()
t.X(0)
this.c.X(0)
u.globalState.z.au(0,this.a)
this.dx.X(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].H(0,t[r+1])
this.ch=null}},
gfs:function(){return this.d},
geZ:function(){return this.e}}
H.iE.prototype={
$0:function(){this.a.H(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.ih.prototype={
f8:function(){var t=this.a
if(t.b===t.c)return
return t.cN()},
cR:function(){var t,s,r
t=this.f8()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.u(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gat(s)}else s=!1
else s=!1
else s=!1
if(s)H.H(P.cC("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gat(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aK(["command","close"])
r=new H.at(!0,new P.dY(0,null,null,null,null,null,0,[null,P.p])).L(r)
s.toString
self.postMessage(r)}return!1}t.fC()
return!0},
c8:function(){if(self.window!=null)new H.ii(this).$0()
else for(;this.cR(););},
av:function(){var t,s,r,q,p
if(!u.globalState.x)this.c8()
else try{this.c8()}catch(r){t=H.O(r)
s=H.au(r)
q=u.globalState.Q
p=P.aK(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.at(!0,P.ce(null,P.p)).L(p)
q.toString
self.postMessage(p)}}}
H.ii.prototype={
$0:function(){if(!this.a.cR())return
P.ny(C.x,this)},
$S:function(){return{func:1,v:true}}}
H.bb.prototype={
fC:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.aq(this.b)}}
H.iK.prototype={}
H.fa.prototype={
$0:function(){H.nc(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.fb.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bB(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bB(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.ba()},
$S:function(){return{func:1,v:true}}}
H.i8.prototype={}
H.bx.prototype={
H:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.nO(b)
if(t.geZ()===s){s=J.y(r)
switch(s.h(r,0)){case"pause":t.cd(s.h(r,1),s.h(r,2))
break
case"resume":t.fG(s.h(r,1))
break
case"add-ondone":t.eJ(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.fF(s.h(r,1))
break
case"set-errors-fatal":t.dq(s.h(r,1),s.h(r,2))
break
case"ping":t.fm(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.fl(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.au(0,s)
break}return}u.globalState.f.a.V(0,new H.bb(t,new H.iM(this,r),"receive"))},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bx){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gw:function(a){return this.b.a}}
H.iM.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.e3(0,this.b)},
$S:function(){return{func:1}}}
H.cg.prototype={
H:function(a,b){var t,s,r
t=P.aK(["command","message","port",this,"msg",b])
s=new H.at(!0,P.ce(null,P.p)).L(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.cg){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gw:function(a){return C.b.dC((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bs.prototype={
e6:function(){this.c=!0
this.b=null},
e3:function(a,b){if(this.c)return
this.b.$1(b)},
$isnt:1}
H.hE.prototype={
dV:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.V(0,new H.bb(s,new H.hF(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.aP(new H.hG(this,b),0),a)}else{H.b(a>0)
throw H.e(new P.v("Timer greater than 0."))}}}
H.hF.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.hG.prototype={
$0:function(){this.a.c=null
H.jz()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ax.prototype={
gw:function(a){var t=this.a
t=C.b.b2(t,0)^C.b.F(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
A:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ax){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.at.prototype={
L:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.t(a)
if(!!t.$isbT)return["buffer",a]
if(!!t.$isbp)return["typed",a]
if(!!t.$isq)return this.dj(a)
if(!!t.$isn9){r=this.gdg()
q=t.gB(a)
q=H.k5(q,r,H.ak(q,"W",0),null)
q=P.l2(q,!0,H.ak(q,"W",0))
t=t.gd6(a)
t=H.k5(t,r,H.ak(t,"W",0),null)
return["map",q,P.l2(t,!0,H.ak(t,"W",0))]}if(!!t.$isl1)return this.dk(a)
if(!!t.$isa)this.d4(a)
if(!!t.$isnt)this.aw(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbx)return this.dl(a)
if(!!t.$iscg)return this.dm(a)
if(!!t.$isbh){p=a.$static_name
if(p==null)this.aw(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isax)return["capability",a.a]
if(!(a instanceof P.o))this.d4(a)
return["dart",u.classIdExtractor(a),this.di(u.classFieldsExtractor(a))]},
aw:function(a,b){throw H.e(new P.v((b==null?"Can't transmit:":b)+" "+H.f(a)))},
d4:function(a){return this.aw(a,null)},
dj:function(a){var t
H.b(typeof a!=="string")
t=this.dh(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.aw(a,"Can't serialize indexable: ")},
dh:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.L(a[s])
return t},
di:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.L(a[t]))
return a},
dk:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.aw(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.L(a[t[r]])
return["js-object",t,s]},
dm:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
dl:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b9.prototype={
Y:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.cp("Bad serialized message: "+H.f(a)))
switch(C.a.gbf(a)){case"ref":H.b(J.F(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.F(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.b(J.F(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.b(J.F(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
s=H.x(this.ap(t),[null])
s.fixed$length=Array
return s
case"extendable":H.b(J.F(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.x(this.ap(t),[null])
case"mutable":H.b(J.F(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.ap(t)
case"const":H.b(J.F(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.x(this.ap(t),[null])
s.fixed$length=Array
return s
case"map":return this.fb(a)
case"sendport":return this.fc(a)
case"raw sendport":H.b(J.F(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.fa(a)
case"function":H.b(J.F(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.b(J.F(a[0],"capability"))
return new H.ax(a[1])
case"dart":H.b(J.F(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.l(this.b,p)
this.ap(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.f(a))}},
ap:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.Y(a[t]))
return a},
fb:function(a){var t,s,r,q,p
H.b(J.F(a[0],"map"))
t=a[1]
s=a[2]
r=P.I()
C.a.l(this.b,r)
t=J.mw(t,this.gf9()).fN(0)
for(q=J.y(s),p=0;p<t.length;++p)r.i(0,t[p],this.Y(q.h(s,p)))
return r},
fc:function(a){var t,s,r,q,p,o,n
H.b(J.F(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cJ(r)
if(o==null)return
n=new H.bx(o,s)}else n=new H.cg(t,r,s)
C.a.l(this.b,n)
return n},
fa:function(a){var t,s,r,q,p,o
H.b(J.F(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.y(t),p=J.y(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.Y(p.h(s,o))
return r}}
H.h4.prototype={}
H.hL.prototype={
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
H.dE.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.fg.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.hP.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.jM.prototype={
$1:function(a){if(!!J.t(a).$isbk)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.e_.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.ju.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.jv.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.jw.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.jx.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.jy.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.bh.prototype={
k:function(a){return"Closure '"+H.dF(this).trim()+"'"},
$isjZ:1,
gfU:function(){return this},
$D:null}
H.hz.prototype={}
H.hk.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bE.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bE))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gw:function(a){var t,s
t=this.c
if(t==null)s=H.b3(this.a)
else s=typeof t!=="object"?J.aw(t):H.b3(t)
return(s^H.b3(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.h0(t)}}
H.hN.prototype={
k:function(a){return this.a}}
H.ej.prototype={
k:function(a){return this.a}}
H.ha.prototype={
k:function(a){return"RuntimeError: "+H.f(this.a)}}
H.i2.prototype={
k:function(a){return C.i.a2("Assertion failed: ",P.jY(this.a))}}
H.aN.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gw:function(a){return J.aw(this.a)},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aN){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ao.prototype={
gj:function(a){return this.a},
gat:function(a){return this.a===0},
gB:function(a){return new H.fl(this,[H.al(this,0)])},
gd6:function(a){return H.k5(this.gB(this),new H.ff(this),H.al(this,0),H.al(this,1))},
u:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.c2(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.c2(s,b)}else return this.fo(b)},
fo:function(a){var t=this.d
if(t==null)return!1
return this.as(this.aD(t,this.ar(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.am(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.am(r,b)
return s==null?null:s.b}else return this.fp(b)},
fp:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aD(t,this.ar(a))
r=this.as(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aZ()
this.b=t}this.bS(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aZ()
this.c=s}this.bS(s,b,c)}else{r=this.d
if(r==null){r=this.aZ()
this.d=r}q=this.ar(b)
p=this.aD(r,q)
if(p==null)this.b1(r,q,[this.b_(b,c)])
else{o=this.as(p,b)
if(o>=0)p[o].b=c
else p.push(this.b_(b,c))}}},
au:function(a,b){if(typeof b==="string")return this.c7(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.c7(this.c,b)
else return this.fq(b)},
fq:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.aD(t,this.ar(a))
r=this.as(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.cb(q)
return q.b},
X:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
O:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.V(this))
t=t.c}},
bS:function(a,b,c){var t=this.am(a,b)
if(t==null)this.b1(a,b,this.b_(b,c))
else t.b=c},
c7:function(a,b){var t
if(a==null)return
t=this.am(a,b)
if(t==null)return
this.cb(t)
this.c3(a,b)
return t.b},
b_:function(a,b){var t,s
t=new H.fk(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
cb:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
ar:function(a){return J.aw(a)&0x3ffffff},
as:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.F(a[s].a,b))return s
return-1},
k:function(a){return P.l3(this)},
am:function(a,b){return a[b]},
aD:function(a,b){return a[b]},
b1:function(a,b,c){H.b(c!=null)
a[b]=c},
c3:function(a,b){delete a[b]},
c2:function(a,b){return this.am(a,b)!=null},
aZ:function(){var t=Object.create(null)
this.b1(t,"<non-identifier-key>",t)
this.c3(t,"<non-identifier-key>")
return t},
$isn9:1}
H.ff.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.fk.prototype={}
H.fl.prototype={
gj:function(a){return this.a.a},
gv:function(a){var t,s
t=this.a
s=new H.fm(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.fm.prototype={
gq:function(){return this.d},
m:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.V(t))
else{t=this.c
if(t==null){this.sbR(null)
return!1}else{this.sbR(t.a)
this.c=this.c.c
return!0}}},
sbR:function(a){this.d=a}}
H.jq.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.jr.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.m]}}}
H.js.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.m]}}}
H.bT.prototype={
gC:function(a){return C.ae},
$isbT:1}
H.bp.prototype={$isbp:1}
H.fA.prototype={
gC:function(a){return C.af}}
H.dx.prototype={
gj:function(a){return a.length},
$isq:1,
$asq:function(){},
$isr:1,
$asr:function(){}}
H.dy.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.H(H.S(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.H(H.S(a,b))
a[b]=c}}
H.dz.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.H(H.S(a,b))
a[b]=c},
$isd:1,
$asd:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]}}
H.dw.prototype={
gC:function(a){return C.ag},
$isd:1,
$asd:function(){return[P.Q]},
$isc:1,
$asc:function(){return[P.Q]},
$iseW:1}
H.fB.prototype={
gC:function(a){return C.ah},
$isd:1,
$asd:function(){return[P.Q]},
$isc:1,
$asc:function(){return[P.Q]}}
H.fC.prototype={
gC:function(a){return C.ai},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.H(H.S(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]}}
H.fD.prototype={
gC:function(a){return C.aj},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.H(H.S(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]},
$iskZ:1}
H.fE.prototype={
gC:function(a){return C.ak},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.H(H.S(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]}}
H.fF.prototype={
gC:function(a){return C.ao},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.H(H.S(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]},
$isln:1}
H.fG.prototype={
gC:function(a){return C.ap},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.H(H.S(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]},
$islo:1}
H.dA.prototype={
gC:function(a){return C.aq},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.H(H.S(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]}}
H.fH.prototype={
gC:function(a){return C.ar},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.H(H.S(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]},
$islp:1}
H.bU.prototype={
$asq:function(){},
$isd:1,
$asd:function(){return[P.p]},
$asr:function(){},
$isc:1,
$asc:function(){return[P.p]}}
H.bV.prototype={
$asq:function(){},
$isd:1,
$asd:function(){return[P.Q]},
$asr:function(){},
$isc:1,
$asc:function(){return[P.Q]}}
H.bW.prototype={
$asq:function(){},
$asd:function(){return[P.Q]},
$asr:function(){},
$asc:function(){return[P.Q]}}
H.bX.prototype={
$asq:function(){},
$asd:function(){return[P.p]},
$asr:function(){},
$asc:function(){return[P.p]}}
P.i4.prototype={
$1:function(a){var t,s
H.jz()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.i3.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.i5.prototype={
$0:function(){H.jz()
this.a.$0()},
$S:function(){return{func:1}}}
P.i6.prototype={
$0:function(){H.jz()
this.a.$0()},
$S:function(){return{func:1}}}
P.f1.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.I(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.I(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.f0.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.e]=a
if(s===0)this.d.c1(r)}else if(t.b===0&&!this.b)this.d.I(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.ia.prototype={
eX:function(a,b){if(a==null)a=new P.br()
if(this.a.a!==0)throw H.e(new P.aq("Future already completed"))
$.w.toString
this.I(a,b)},
eW:function(a){return this.eX(a,null)}}
P.c8.prototype={
ao:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.aq("Future already completed"))
t.bU(b)},
I:function(a,b){this.a.bV(a,b)}}
P.j1.prototype={
ao:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.aq("Future already completed"))
t.ak(b)},
I:function(a,b){this.a.I(a,b)}}
P.ca.prototype={
fz:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.bl(this.d,a.a)},
fk:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.bB(s,{func:1,args:[P.o,P.c0]}))return t.fI(s,a.a,a.b)
else return t.bl(s,a.a)}}
P.K.prototype={
bm:function(a,b){var t,s,r
t=$.w
if(t!==C.d){t.toString
if(b!=null)b=P.nW(b,t)}s=new P.K(0,t,null,[null])
r=b==null?1:3
this.aS(new P.ca(null,s,r,a,b,[H.al(this,0),null]))
return s},
aJ:function(a){return this.bm(a,null)},
fT:function(a){var t,s
t=$.w
s=new P.K(0,t,null,this.$ti)
if(t!==C.d)t.toString
t=H.al(this,0)
this.aS(new P.ca(null,s,8,a,null,[t,t]))
return s},
bX:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
aS:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.kj(this.c,"$isca")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.aS(a)
return}this.bX(t)}H.b(this.a>=4)
t=this.b
t.toString
P.bz(null,null,t,new P.io(this,a))}},
c6:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.c6(a)
return}this.bX(s)}H.b(this.a>=4)
t.a=this.an(a)
s=this.b
s.toString
P.bz(null,null,s,new P.iw(t,this))}},
b0:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.an(t)},
an:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
ak:function(a){var t,s
H.b(this.a<4)
t=this.$ti
if(H.ck(a,"$isaY",t,"$asaY"))if(H.ck(a,"$isK",t,null))P.ir(a,this)
else P.lr(a,this)
else{s=this.b0()
H.b(this.a<4)
this.a=4
this.c=a
P.bw(this,s)}},
c1:function(a){var t
H.b(this.a<4)
H.b(!J.t(a).$isaY)
t=this.b0()
H.b(this.a<4)
this.a=4
this.c=a
P.bw(this,t)},
I:function(a,b){var t
H.b(this.a<4)
t=this.b0()
H.b(this.a<4)
this.a=8
this.c=new P.bf(a,b)
P.bw(this,t)},
e7:function(a){return this.I(a,null)},
bU:function(a){var t
H.b(this.a<4)
if(H.ck(a,"$isaY",this.$ti,"$asaY")){this.e5(a)
return}H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bz(null,null,t,new P.iq(this,a))},
e5:function(a){var t
if(H.ck(a,"$isK",this.$ti,null)){if(a.a===8){H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bz(null,null,t,new P.iv(this,a))}else P.ir(a,this)
return}P.lr(a,this)},
bV:function(a,b){var t
H.b(this.a<4)
H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bz(null,null,t,new P.ip(this,a,b))},
$isaY:1,
gb3:function(){return this.a},
gev:function(){return this.c}}
P.io.prototype={
$0:function(){P.bw(this.a,this.b)},
$S:function(){return{func:1}}}
P.iw.prototype={
$0:function(){P.bw(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.is.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.ak(a)},
$S:function(){return{func:1,args:[,]}}}
P.it.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.I(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.iu.prototype={
$0:function(){this.a.I(this.b,this.c)},
$S:function(){return{func:1}}}
P.iq.prototype={
$0:function(){this.a.c1(this.b)},
$S:function(){return{func:1}}}
P.iv.prototype={
$0:function(){P.ir(this.b,this.a)},
$S:function(){return{func:1}}}
P.ip.prototype={
$0:function(){this.a.I(this.b,this.c)},
$S:function(){return{func:1}}}
P.iz.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.cQ(q.d)}catch(n){s=H.O(n)
r=H.au(n)
if(this.c){q=this.a.a
H.b(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.b(q.a===8)
p.b=q.c}else p.b=new P.bf(s,r)
p.a=!0
return}if(!!J.t(t).$isaY){if(t instanceof P.K&&t.gb3()>=4){if(t.gb3()===8){q=t
H.b(q.gb3()===8)
p=this.b
p.b=q.gev()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.aJ(new P.iA(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.iA.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.iy.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.bl(r.d,this.c)}catch(q){t=H.O(q)
s=H.au(q)
r=this.a
r.b=new P.bf(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.ix.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.fz(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.fk(t)
p.a=!1}}catch(o){s=H.O(o)
r=H.au(o)
q=this.a
p=q.a
H.b(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.b(q.a===8)
m.b=q.c}else m.b=new P.bf(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.dV.prototype={}
P.c1.prototype={
gj:function(a){var t,s
t={}
s=new P.K(0,$.w,null,[P.p])
t.a=0
this.cI(new P.hs(t),!0,new P.ht(t,s),s.gc0())
return s},
gbf:function(a){var t,s
t={}
s=new P.K(0,$.w,null,[H.ak(this,"c1",0)])
t.a=null
t.a=this.cI(new P.hq(t,this,s),!0,new P.hr(s),s.gc0())
return s}}
P.hs.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.ht.prototype={
$0:function(){this.b.ak(this.a.a)},
$S:function(){return{func:1}}}
P.hq.prototype={
$1:function(a){P.nN(this.a.a,this.c,a)},
$S:function(){return H.o6(function(a){return{func:1,args:[a]}},this.b,"c1")}}
P.hr.prototype={
$0:function(){var t,s,r,q
try{r=H.dm()
throw H.e(r)}catch(q){t=H.O(q)
s=H.au(q)
P.nP(this.a,t,s)}},
$S:function(){return{func:1}}}
P.hp.prototype={}
P.j9.prototype={
$0:function(){return this.a.ak(this.b)},
$S:function(){return{func:1}}}
P.bf.prototype={
k:function(a){return H.f(this.a)},
$isbk:1}
P.j8.prototype={}
P.jd.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.br()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.iO.prototype={
fJ:function(a){var t,s,r
try{if(C.d===$.w){a.$0()
return}P.lw(null,null,this,a)}catch(r){t=H.O(r)
s=H.au(r)
P.jc(null,null,this,t,s)}},
fK:function(a,b){var t,s,r
try{if(C.d===$.w){a.$1(b)
return}P.lx(null,null,this,a,b)}catch(r){t=H.O(r)
s=H.au(r)
P.jc(null,null,this,t,s)}},
eP:function(a){return new P.iQ(this,a)},
bb:function(a){return new P.iP(this,a)},
eQ:function(a){return new P.iR(this,a)},
h:function(a,b){return},
cQ:function(a){if($.w===C.d)return a.$0()
return P.lw(null,null,this,a)},
bl:function(a,b){if($.w===C.d)return a.$1(b)
return P.lx(null,null,this,a,b)},
fI:function(a,b,c){if($.w===C.d)return a.$2(b,c)
return P.nX(null,null,this,a,b,c)}}
P.iQ.prototype={
$0:function(){return this.a.cQ(this.b)},
$S:function(){return{func:1}}}
P.iP.prototype={
$0:function(){return this.a.fJ(this.b)},
$S:function(){return{func:1}}}
P.iR.prototype={
$1:function(a){return this.a.fK(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dY.prototype={
ar:function(a){return H.oq(a)&0x3ffffff},
as:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.iH.prototype={
gv:function(a){var t=new P.cd(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
E:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.e8(b)},
e8:function(a){var t=this.d
if(t==null)return!1
return this.aC(t[this.aB(a)],a)>=0},
cJ:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.E(0,a)?a:null
else return this.ej(a)},
ej:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aB(a)]
r=this.aC(s,a)
if(r<0)return
return J.a1(s,r).geb()},
l:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.b(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bY(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.b(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bY(r,b)}else return this.V(0,b)},
V:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.nL()
this.d=t}s=this.aB(b)
r=t[s]
if(r==null){q=[this.aU(b)]
H.b(q!=null)
t[s]=q}else{if(this.aC(r,b)>=0)return!1
r.push(this.aU(b))}return!0},
au:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bZ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bZ(this.c,b)
else return this.eo(0,b)},
eo:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aB(b)]
r=this.aC(s,b)
if(r<0)return!1
this.c_(s.splice(r,1)[0])
return!0},
X:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bY:function(a,b){var t
if(a[b]!=null)return!1
t=this.aU(b)
H.b(!0)
a[b]=t
return!0},
bZ:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.c_(t)
delete a[b]
return!0},
aU:function(a){var t,s
t=new P.iI(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
c_:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
aB:function(a){return J.aw(a)&0x3ffffff},
aC:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.F(a[s].a,b))return s
return-1},
$isd:1,
$asd:null}
P.iI.prototype={
geb:function(){return this.a}}
P.cd.prototype={
gq:function(){return this.d},
m:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.V(t))
else{t=this.c
if(t==null){this.saj(null)
return!1}else{this.saj(t.a)
this.c=this.c.b
return!0}}},
saj:function(a){this.d=a}}
P.iD.prototype={}
P.ds.prototype={}
P.z.prototype={
gv:function(a){return new H.dt(a,this.gj(a),0,null,[H.ak(a,"z",0)])},
t:function(a,b){return this.h(a,b)},
cK:function(a,b){return new H.bQ(a,b,[H.ak(a,"z",0),null])},
fi:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.e(new P.V(a))}return s},
k:function(a){return P.fc(a,"[","]")},
$isd:1,
$asd:null,
$isc:1,
$asc:null}
P.fs.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.f(a)
t.a=s+": "
t.a+=H.f(b)},
$S:function(){return{func:1,args:[,,]}}}
P.fn.prototype={
gv:function(a){return new P.iJ(this,this.c,this.d,this.b,null,this.$ti)},
gat:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t=(this.c-this.b&this.a.length-1)>>>0
if(C.b.ay(0,b)||b>=t)H.H(P.D(b,this,"index",null,t))
return this.a[(C.b.a2(this.b,b)&this.a.length-1)>>>0]},
X:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.fc(this,"{","}")},
cN:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.dm());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
V:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.c4();++this.d},
c4:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.x(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bz(s,0,q,t,r)
C.a.bz(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sc9(s)},
dN:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sc9(H.x(t,[b]))},
sc9:function(a){this.a=a},
$asd:null}
P.iJ.prototype={
gq:function(){return this.e},
m:function(){var t,s
t=this.a
if(this.c!==t.d)H.H(new P.V(t))
s=this.d
if(s===this.b){this.saj(null)
return!1}this.saj(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
saj:function(a){this.e=a}}
P.hd.prototype={
M:function(a,b){var t
for(t=J.U(b);t.m();)this.l(0,t.gq())},
k:function(a){return P.fc(this,"{","}")},
$isd:1,
$asd:null}
P.hc.prototype={}
P.bZ.prototype={$isd:1,$asd:null,$isc:1,$asc:null}
P.iF.prototype={
h:function(a,b){var t,s
t=this.b
if(t==null){H.b(!0)
return this.c.h(0,b)}else if(typeof b!=="string")return
else{s=t[b]
return typeof s=="undefined"?this.en(b):s}},
gj:function(a){var t
if(this.b==null){H.b(!0)
t=this.c
t=t.gj(t)}else t=this.a7().length
return t},
gB:function(a){var t
if(this.b==null){H.b(!0)
t=this.c
return t.gB(t)}return new P.iG(this)},
i:function(a,b,c){var t,s
if(this.b==null){H.b(!0)
this.c.i(0,b,c)}else if(this.u(0,b)){t=this.b
t[b]=c
s=this.a
if(s==null?t!=null:s!==t)s[b]=null}else this.eH().i(0,b,c)},
u:function(a,b){if(this.b==null){H.b(!0)
return this.c.u(0,b)}if(typeof b!=="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,b)},
O:function(a,b){var t,s,r,q
if(this.b==null){H.b(!0)
return this.c.O(0,b)}t=this.a7()
for(s=0;s<t.length;++s){r=t[s]
q=this.b[r]
if(typeof q=="undefined"){q=P.ja(this.a[r])
this.b[r]=q}b.$2(r,q)
if(t!==this.c)throw H.e(new P.V(this))}},
k:function(a){return P.l3(this)},
a7:function(){H.b(this.b!=null)
var t=this.c
if(t==null){t=Object.keys(this.a)
this.c=t}return t},
eH:function(){var t,s,r,q,p
if(this.b==null){H.b(!0)
return this.c}t=P.dr(P.m,null)
s=this.a7()
for(r=0;q=s.length,r<q;++r){p=s[r]
t.i(0,p,this.h(0,p))}if(q===0)C.a.l(s,null)
else C.a.sj(s,0)
this.b=null
this.a=null
this.c=t
H.b(!0)
return t},
en:function(a){var t
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
t=P.ja(this.a[a])
return this.b[a]=t}}
P.iG.prototype={
gj:function(a){var t=this.a
if(t.b==null){H.b(!0)
t=t.c
t=t.gj(t)}else t=t.a7().length
return t},
t:function(a,b){var t=this.a
return t.b==null?t.gB(t).t(0,b):C.a.h(t.a7(),b)},
gv:function(a){var t=this.a
if(t.b==null){t=t.gB(t)
t=t.gv(t)}else{t=t.a7()
t=new J.cq(t,t.length,0,null,[H.al(t,0)])}return t},
$asd:function(){return[P.m]},
$asb2:function(){return[P.m]},
$asW:function(){return[P.m]}}
P.cu.prototype={}
P.cv.prototype={}
P.fh.prototype={
f5:function(a,b){var t=P.nV(a,this.gf6().a)
return t},
f4:function(a){return this.f5(a,null)},
gf6:function(){return C.W},
$ascu:function(){return[P.o,P.m]}}
P.fi.prototype={
$ascv:function(){return[P.m,P.o]}}
P.aF.prototype={}
P.L.prototype={}
P.bj.prototype={
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.bj))return!1
return this.a===b.a&&this.b===b.b},
T:function(a,b){return C.b.T(this.a,b.a)},
gw:function(a){var t=this.a
return(t^C.b.b2(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.mW(H.ns(this))
s=P.cw(H.nq(this))
r=P.cw(H.nm(this))
q=P.cw(H.nn(this))
p=P.cw(H.np(this))
o=P.cw(H.nr(this))
n=P.mX(H.no(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
gfA:function(){return this.a},
dG:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.e(P.cp("DateTime is outside valid range: "+this.gfA()))},
$isL:1,
$asL:function(){return[P.bj]}}
P.Q.prototype={$isL:1,
$asL:function(){return[P.a0]}}
P.aX.prototype={
a3:function(a,b){return C.b.a3(this.a,b.gea())},
ay:function(a,b){return C.b.ay(this.a,b.gea())},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.aX))return!1
return this.a===b.a},
gw:function(a){return this.a&0x1FFFFFFF},
T:function(a,b){return C.b.T(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.ew()
s=this.a
if(s<0)return"-"+new P.aX(0-s).k(0)
r=t.$1(C.b.F(s,6e7)%60)
q=t.$1(C.b.F(s,1e6)%60)
p=new P.ev().$1(s%1e6)
return""+C.b.F(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isL:1,
$asL:function(){return[P.aX]}}
P.ev.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.m,args:[P.p]}}}
P.ew.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.m,args:[P.p]}}}
P.bk.prototype={}
P.cr.prototype={
k:function(a){return"Assertion failed"}}
P.br.prototype={
k:function(a){return"Throw of null."}}
P.am.prototype={
gaW:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaV:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.f(t)
q=this.gaW()+s+r
if(!this.a)return q
p=this.gaV()
o=P.jY(this.b)
return q+p+": "+H.f(o)}}
P.dI.prototype={
gaW:function(){return"RangeError"},
gaV:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.f9.prototype={
gaW:function(){return"RangeError"},
gaV:function(){H.b(this.a)
if(J.lY(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gj:function(a){return this.f}}
P.v.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.c6.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aq.prototype={
k:function(a){return"Bad state: "+this.a}}
P.V.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.jY(t))+"."}}
P.dM.prototype={
k:function(a){return"Stack Overflow"},
$isbk:1}
P.eo.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.im.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.eZ.prototype={
k:function(a){var t,s
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
return s}}
P.ey.prototype={
k:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.H(P.kE(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.k6(b,"expando$values")
return s==null?null:H.k6(s,t)},
i:function(a,b,c){var t,s
t=this.b
if(typeof t!=="string")t.set(b,c)
else{s=H.k6(b,"expando$values")
if(s==null){s=new P.o()
H.l7(b,"expando$values",s)}H.l7(s,t,c)}}}
P.p.prototype={$isL:1,
$asL:function(){return[P.a0]}}
P.W.prototype={
aK:function(a,b){return new H.dU(this,b,[H.ak(this,"W",0)])},
gj:function(a){var t,s
H.b(!this.$isd)
t=this.gv(this)
for(s=0;t.m();)++s
return s},
ga5:function(a){var t,s
t=this.gv(this)
if(!t.m())throw H.e(H.dm())
s=t.gq()
if(t.m())throw H.e(H.nh())
return s},
t:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.mN("index"))
if(b<0)H.H(P.b4(b,0,null,"index",null))
for(t=this.gv(this),s=0;t.m();){r=t.gq()
if(b===s)return r;++s}throw H.e(P.D(b,this,"index",null,s))},
k:function(a){return P.nf(this,"(",")")}}
P.dn.prototype={}
P.c.prototype={$isd:1,$asd:null,$asc:null}
P.az.prototype={}
P.aL.prototype={
gw:function(a){return P.o.prototype.gw.call(this,this)},
k:function(a){return"null"}}
P.a0.prototype={$isL:1,
$asL:function(){return[P.a0]}}
P.o.prototype={constructor:P.o,$iso:1,
A:function(a,b){return this===b},
gw:function(a){return H.b3(this)},
k:function(a){return H.h0(this)},
gC:function(a){return new H.aN(H.jo(this),null)},
toString:function(){return this.k(this)}}
P.c0.prototype={}
P.m.prototype={$isL:1,
$asL:function(){return[P.m]}}
P.c2.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga8:function(){return this.a}}
W.k.prototype={}
W.eb.prototype={
k:function(a){return String(a)},
$isa:1}
W.ed.prototype={
k:function(a){return String(a)},
$isa:1}
W.a8.prototype={$iso:1}
W.ef.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.a8]},
$isd:1,
$asd:function(){return[W.a8]},
$isr:1,
$asr:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]}}
W.cs.prototype={}
W.aT.prototype={$isa:1,$isaT:1,$ish:1}
W.aU.prototype={
dc:function(a,b,c){var t=this.ed(a,b,P.o7(c,null))
return t},
ed:function(a,b,c){return a.getContext(b,c)},
$isaU:1}
W.ei.prototype={
aL:function(a){return P.ji(a.getContextAttributes())}}
W.aV.prototype={$isa:1,
gj:function(a){return a.length}}
W.el.prototype={$isa:1,$ish:1}
W.B.prototype={$iso:1}
W.bi.prototype={
bW:function(a,b){var t,s
t=$.$get$kO()
s=t[b]
if(typeof s==="string")return s
s=this.eD(a,b)
t[b]=s
return s},
eD:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mY()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.en.prototype={}
W.ep.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.eq.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gK:function(a){return a.z}}
W.cx.prototype={}
W.aW.prototype={
eK:function(a,b){return a.adoptNode(b)},
e9:function(a,b){return a.createEvent(b)},
bp:function(a,b){return a.getElementsByTagName(b)},
dd:function(a,b){return a.getElementById(b)},
fD:function(a,b){return a.querySelector(b)},
$isaW:1}
W.cy.prototype={$isa:1}
W.er.prototype={
k:function(a){return String(a)}}
W.cz.prototype={
f2:function(a,b){return a.createHTMLDocument(b)}}
W.es.prototype={
gax:function(a){return a.w},
gn:function(a){return a.x},
gp:function(a){return a.y},
gK:function(a){return a.z}}
W.cA.prototype={
gax:function(a){return a.w},
gn:function(a){return a.x},
gp:function(a){return a.y},
gK:function(a){return a.z}}
W.cB.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.ga1(a))+" x "+H.f(this.ga0(a))},
A:function(a,b){var t
if(b==null)return!1
t=J.t(b)
if(!t.$isM)return!1
return a.left===t.gbg(b)&&a.top===t.gbn(b)&&this.ga1(a)===t.ga1(b)&&this.ga0(a)===t.ga0(b)},
gw:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga1(a)
q=this.ga0(a)
return W.lu(W.bc(W.bc(W.bc(W.bc(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga0:function(a){return a.height},
gbg:function(a){return a.left},
gbn:function(a){return a.top},
ga1:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
$isM:1,
$asM:function(){}}
W.et.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[P.m]},
$isd:1,
$asd:function(){return[P.m]},
$isr:1,
$asr:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}}
W.eu.prototype={
gj:function(a){return a.length}}
W.a9.prototype={
geN:function(a){return new W.ig(a)},
k:function(a){return a.localName},
N:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kW
if(t==null){t=H.x([],[W.dC])
s=new W.dD(t)
C.a.l(t,W.ls(null))
C.a.l(t,W.lv())
$.kW=s
d=s}else d=t
t=$.kV
if(t==null){t=new W.e0(d)
$.kV=t
c=t}else{t.a=d
c=t}}if($.aI==null){t=document
s=t.implementation
s=(s&&C.L).f2(s,"")
$.aI=s
$.jX=s.createRange()
s=$.aI
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aI.head;(t&&C.M).S(t,r)}t=$.aI
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.kj(s,"$isaT")}t=$.aI
if(!!this.$isaT)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aI.body;(t&&C.q).S(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.E(C.Y,a.tagName)){t=$.jX;(t&&C.E).df(t,q)
t=$.jX
p=(t&&C.E).f0(t,b)}else{q.innerHTML=b
p=$.aI.createDocumentFragment()
for(t=J.j(p);s=q.firstChild,s!=null;)t.S(p,s)}t=$.aI.body
if(q==null?t!=null:q!==t)J.my(q)
c.by(p)
C.k.eK(document,p)
return p},
f1:function(a,b,c){return this.N(a,b,c,null)},
ds:function(a,b,c,d){a.textContent=null
this.S(a,this.N(a,b,c,d))},
dr:function(a,b){return this.ds(a,b,null,null)},
ae:function(a,b){return a.getAttribute(b)},
ee:function(a,b){return a.hasAttribute(b)},
ep:function(a,b){return a.removeAttribute(b)},
dn:function(a,b,c){return a.setAttribute(b,c)},
gcL:function(a){return new W.c9(a,"change",!1,[W.i])},
$isa:1,
$iso:1,
$isa9:1,
$ish:1,
$isu:1,
gfL:function(a){return a.tagName}}
W.je.prototype={
$1:function(a){return!!J.t(a).$isa9},
$S:function(){return{func:1,args:[,]}}}
W.i.prototype={
eg:function(a,b,c,d){return a.initEvent(b,!0,!0)},
$iso:1,
$isi:1}
W.h.prototype={
e4:function(a,b,c,d){return a.addEventListener(b,H.aP(c,1),!1)},
fd:function(a,b){return a.dispatchEvent(b)},
er:function(a,b,c,d){return a.removeEventListener(b,H.aP(c,1),!1)},
$iso:1,
$ish:1}
W.aa.prototype={$iso:1}
W.eS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.aa]},
$isd:1,
$asd:function(){return[W.aa]},
$isr:1,
$asr:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]}}
W.eT.prototype={
gj:function(a){return a.length}}
W.eY.prototype={
gj:function(a){return a.length}}
W.ab.prototype={$iso:1}
W.cF.prototype={}
W.f3.prototype={
gj:function(a){return a.length}}
W.bM.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.u]},
$isd:1,
$asd:function(){return[W.u]},
$isr:1,
$asr:function(){return[W.u]},
$isc:1,
$asc:function(){return[W.u]}}
W.cG.prototype={}
W.cH.prototype={
fY:function(a,b,c,d,e,f){return a.open(b,c,d,f,e)},
fB:function(a,b,c){return a.open(b,c)},
H:function(a,b){return a.send(b)}}
W.bN.prototype={}
W.bl.prototype={$isbl:1}
W.bm.prototype={$isbm:1}
W.bn.prototype={$isbn:1}
W.bO.prototype={$isa:1,$isa9:1,$ish:1,$isbO:1}
W.b1.prototype={$iso:1,$isi:1,$isb1:1}
W.fq.prototype={
k:function(a){return String(a)}}
W.bR.prototype={}
W.fw.prototype={
gj:function(a){return a.length}}
W.fx.prototype={
fV:function(a,b,c){return a.send(b,c)},
H:function(a,b){return a.send(b)}}
W.bS.prototype={}
W.ac.prototype={$iso:1}
W.fy.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ac]},
$isd:1,
$asd:function(){return[W.ac]},
$isr:1,
$asr:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]}}
W.R.prototype={$iso:1,$isi:1,$isR:1}
W.fI.prototype={$isa:1}
W.Z.prototype={
ga5:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.aq("No elements"))
if(s>1)throw H.e(new P.aq("More than one element"))
return t.firstChild},
M:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.j(s),p=0;p<r;++p)q.S(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.m3(t,c,C.C.h(t.childNodes,b))},
gv:function(a){var t=this.a.childNodes
return new W.cE(t,t.length,-1,null,[H.ak(t,"C",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.C.h(this.a.childNodes,b)},
$asd:function(){return[W.u]},
$asds:function(){return[W.u]},
$asc:function(){return[W.u]},
$asbZ:function(){return[W.u]}}
W.u.prototype={
fE:function(a){var t=a.parentNode
if(t!=null)J.bC(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.dw(a):t},
S:function(a,b){return a.appendChild(b)},
eq:function(a,b){return a.removeChild(b)},
es:function(a,b,c){return a.replaceChild(b,c)},
$iso:1,
$ish:1,
$isu:1,
gbj:function(a){return a.previousSibling}}
W.dB.prototype={
bk:function(a){return a.previousNode()}}
W.bY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.u]},
$isd:1,
$asd:function(){return[W.u]},
$isr:1,
$asr:function(){return[W.u]},
$isc:1,
$asc:function(){return[W.u]}}
W.fR.prototype={$isa:1}
W.fU.prototype={
gj:function(a){return a.length}}
W.ad.prototype={$iso:1,
gj:function(a){return a.length}}
W.fW.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ad]},
$isd:1,
$asd:function(){return[W.ad]},
$isr:1,
$asr:function(){return[W.ad]},
$isc:1,
$asc:function(){return[W.ad]}}
W.fZ.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
W.h_.prototype={
H:function(a,b){return a.send(b)}}
W.dH.prototype={
f0:function(a,b){return a.createContextualFragment(b)},
df:function(a,b){return a.selectNodeContents(b)}}
W.h9.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gK:function(a){return a.z}}
W.dK.prototype={
H:function(a,b){return a.send(b)}}
W.hb.prototype={
gj:function(a){return a.length}}
W.he.prototype={$isa:1,$ish:1}
W.ae.prototype={$iso:1,$ish:1}
W.hg.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ae]},
$isd:1,
$asd:function(){return[W.ae]},
$isr:1,
$asr:function(){return[W.ae]},
$isc:1,
$asc:function(){return[W.ae]}}
W.af.prototype={$iso:1}
W.hi.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.af]},
$isd:1,
$asd:function(){return[W.af]},
$isr:1,
$asr:function(){return[W.af]},
$isc:1,
$asc:function(){return[W.af]}}
W.ag.prototype={$iso:1,
gj:function(a){return a.length}}
W.hn.prototype={
u:function(a,b){return this.aY(a,b)!=null},
h:function(a,b){return this.aY(a,b)},
i:function(a,b,c){this.eC(a,b,c)},
O:function(a,b){var t,s
for(t=0;!0;++t){s=this.ei(a,t)
if(s==null)return
b.$2(s,this.aY(a,s))}},
gB:function(a){var t=H.x([],[P.m])
this.O(a,new W.ho(t))
return t},
gj:function(a){return a.length},
aY:function(a,b){return a.getItem(b)},
ei:function(a,b){return a.key(b)},
eC:function(a,b,c){return a.setItem(b,c)}}
W.ho.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:function(){return{func:1,args:[,,]}}}
W.a2.prototype={$iso:1}
W.ar.prototype={}
W.dN.prototype={
N:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aN(a,b,c,d)
t=W.mZ("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.Z(s).M(0,new W.Z(t))
return s}}
W.hx.prototype={
N:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aN(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.J.N(t.createElement("table"),b,c,d)
t.toString
t=new W.Z(t)
r=t.ga5(t)
r.toString
t=new W.Z(r)
q=t.ga5(t)
s.toString
q.toString
new W.Z(s).M(0,new W.Z(q))
return s}}
W.hy.prototype={
N:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aN(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.J.N(t.createElement("table"),b,c,d)
t.toString
t=new W.Z(t)
r=t.ga5(t)
s.toString
r.toString
new W.Z(s).M(0,new W.Z(r))
return s}}
W.c3.prototype={$isc3:1}
W.ah.prototype={$iso:1,$ish:1}
W.a3.prototype={$iso:1,$ish:1}
W.hB.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.a3]},
$isd:1,
$asd:function(){return[W.a3]},
$isr:1,
$asr:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]}}
W.hC.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ah]},
$isd:1,
$asd:function(){return[W.ah]},
$isr:1,
$asr:function(){return[W.ah]},
$isc:1,
$asc:function(){return[W.ah]}}
W.hD.prototype={
gj:function(a){return a.length}}
W.ai.prototype={$iso:1}
W.b5.prototype={$iso:1,$isi:1,$isb5:1}
W.hH.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ai]},
$isd:1,
$asd:function(){return[W.ai]},
$isr:1,
$asr:function(){return[W.ai]},
$isc:1,
$asc:function(){return[W.ai]}}
W.hI.prototype={
gj:function(a){return a.length}}
W.bu.prototype={}
W.hK.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gK:function(a){return a.z}}
W.dS.prototype={
bk:function(a){return a.previousNode()}}
W.aO.prototype={}
W.hQ.prototype={
k:function(a){return String(a)},
$isa:1}
W.bv.prototype={$isbv:1}
W.hS.prototype={
gj:function(a){return a.length}}
W.hV.prototype={
gj:function(a){return a.length}}
W.hW.prototype={
H:function(a,b){return a.send(b)}}
W.b7.prototype={
gf7:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.v("deltaY is not supported"))},
$iso:1,
$isi:1,
$isR:1,
$isb7:1}
W.c7.prototype={
geM:function(a){var t,s
t=P.a0
s=new P.K(0,$.w,null,[t])
this.ec(a)
this.eu(a,W.lz(new W.hY(new P.j1(s,[t]))))
return s},
eu:function(a,b){return a.requestAnimationFrame(H.aP(b,1))},
ec:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1,
$ish:1}
W.hY.prototype={
$1:function(a){this.a.ao(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hZ.prototype={$isa:1,$ish:1}
W.b8.prototype={$isa:1}
W.i9.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
A:function(a,b){var t,s,r
if(b==null)return!1
t=J.t(b)
if(!t.$isM)return!1
s=a.left
r=t.gbg(b)
if(s==null?r==null:s===r){s=a.top
r=t.gbn(b)
if(s==null?r==null:s===r){s=a.width
r=t.ga1(b)
if(s==null?r==null:s===r){s=a.height
t=t.ga0(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gw:function(a){var t,s,r,q
t=J.aw(a.left)
s=J.aw(a.top)
r=J.aw(a.width)
q=J.aw(a.height)
return W.lu(W.bc(W.bc(W.bc(W.bc(0,t),s),r),q))},
$isM:1,
$asM:function(){},
ga0:function(a){return a.height},
gbg:function(a){return a.left},
gbn:function(a){return a.top},
ga1:function(a){return a.width}}
W.dW.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[P.M]},
$isd:1,
$asd:function(){return[P.M]},
$isr:1,
$asr:function(){return[P.M]},
$isc:1,
$asc:function(){return[P.M]}}
W.ib.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.B]},
$isd:1,
$asd:function(){return[W.B]},
$isr:1,
$asr:function(){return[W.B]},
$isc:1,
$asc:function(){return[W.B]}}
W.id.prototype={$isa:1}
W.ie.prototype={
ga0:function(a){return a.height},
ga1:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y}}
W.iB.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ab]},
$isd:1,
$asd:function(){return[W.ab]},
$isr:1,
$asr:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]}}
W.iC.prototype={$isa:1,$ish:1}
W.dZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.u]},
$isd:1,
$asd:function(){return[W.u]},
$isr:1,
$asr:function(){return[W.u]},
$isc:1,
$asc:function(){return[W.u]}}
W.iW.prototype={$isa:1,$ish:1}
W.iZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ag]},
$isd:1,
$asd:function(){return[W.ag]},
$isr:1,
$asr:function(){return[W.ag]},
$isc:1,
$asc:function(){return[W.ag]}}
W.j_.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.a2]},
$isd:1,
$asd:function(){return[W.a2]},
$isr:1,
$asr:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]}}
W.j6.prototype={$isa:1}
W.j7.prototype={$isa:1}
W.i7.prototype={
O:function(a,b){var t,s,r,q,p,o
for(t=this.gB(this),s=t.length,r=this.a,q=J.j(r),p=0;p<t.length;t.length===s||(0,H.G)(t),++p){o=t[p]
b.$2(o,q.ae(r,o))}},
gB:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.x([],[P.m])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
gef:function(){return this.a}}
W.ig.prototype={
u:function(a,b){return J.m0(this.a,b)},
h:function(a,b){return J.jT(this.a,b)},
i:function(a,b,c){J.mA(this.a,b,c)},
gj:function(a){return this.gB(this).length}}
W.ij.prototype={
cI:function(a,b,c,d){return W.a4(this.a,this.b,a,!1,H.al(this,0))}}
W.c9.prototype={}
W.ik.prototype={
eT:function(a){if(this.b==null)return
this.eG()
this.b=null
this.sek(null)
return},
eF:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.m_(r,this.c,t,!1)}},
eG:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.m2(r,this.c,t,!1)}},
e_:function(a,b,c,d,e){this.eF()},
sek:function(a){this.d=a}}
W.il.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.cc.prototype={
a9:function(a){return $.$get$lt().E(0,W.bF(a))},
W:function(a,b,c){var t,s,r
t=W.bF(a)
s=$.$get$kc()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
e0:function(a){var t,s
t=$.$get$kc()
if(t.gat(t)){for(s=0;s<262;++s)t.i(0,C.X[s],W.of())
for(s=0;s<12;++s)t.i(0,C.u[s],W.og())}}}
W.C.prototype={
gv:function(a){return new W.cE(a,this.gj(a),-1,null,[H.ak(a,"C",0)])},
$isd:1,
$asd:null,
$isc:1,
$asc:null}
W.dD.prototype={
a9:function(a){return C.a.ce(this.a,new W.fK(a))},
W:function(a,b,c){return C.a.ce(this.a,new W.fJ(a,b,c))}}
W.fK.prototype={
$1:function(a){return a.a9(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.fJ.prototype={
$1:function(a){return a.W(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.cf.prototype={
a9:function(a){return this.a.E(0,W.bF(a))},
W:function(a,b,c){var t,s
t=W.bF(a)
s=this.c
if(s.E(0,H.f(t)+"::"+b))return this.d.eL(c)
else if(s.E(0,"*::"+b))return this.d.eL(c)
else{s=this.b
if(s.E(0,H.f(t)+"::"+b))return!0
else if(s.E(0,"*::"+b))return!0
else if(s.E(0,H.f(t)+"::*"))return!0
else if(s.E(0,"*::*"))return!0}return!1},
e2:function(a,b,c,d){var t,s,r
this.a.M(0,c)
t=b.aK(0,new W.iX())
s=b.aK(0,new W.iY())
this.b.M(0,t)
r=this.c
r.M(0,C.B)
r.M(0,s)}}
W.iX.prototype={
$1:function(a){return!C.a.E(C.u,a)},
$S:function(){return{func:1,args:[,]}}}
W.iY.prototype={
$1:function(a){return C.a.E(C.u,a)},
$S:function(){return{func:1,args:[,]}}}
W.j2.prototype={
W:function(a,b,c){if(this.dB(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jT(a,"template")==="")return this.e.E(0,b)
return!1}}
W.j3.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.j0.prototype={
a9:function(a){var t=J.t(a)
if(!!t.$isc_)return!1
t=!!t.$isJ
if(t&&W.bF(a)==="foreignObject")return!1
if(t)return!0
return!1},
W:function(a,b,c){if(b==="is"||C.i.bC(b,"on"))return!1
return this.a9(a)}}
W.cE.prototype={
m:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sc5(J.a1(this.a,t))
this.c=t
return!0}this.sc5(null)
this.c=s
return!1},
gq:function(){return this.d},
sc5:function(a){this.d=a}}
W.ic.prototype={$isa:1,$ish:1}
W.dC.prototype={}
W.iV.prototype={}
W.e0.prototype={
by:function(a){new W.j4(this).$2(a,null)},
aE:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bC(t,a)}else J.bC(b,a)},
ez:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.mm(a)
r=J.jT(s.gef(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.O(n)}p="element unprintable"
try{p=J.aH(a)}catch(n){H.O(n)}try{o=W.bF(a)
this.ey(a,b,t,p,o,s,r)}catch(n){if(H.O(n) instanceof P.am)throw n
else{this.aE(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
ey:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.aE(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a9(a)){this.aE(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.aH(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.W(a,"is",g)){this.aE(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gB(f)
s=H.x(t.slice(0),[H.al(t,0)])
for(r=f.gB(f).length-1,t=f.a,q=J.j(t);r>=0;--r){p=s[r]
if(!this.a.W(a,J.mF(p),q.ae(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.ae(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.ae(t,p)
q.ep(t,p)}}if(!!J.t(a).$isc3)this.by(a.content)}}
W.j4.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.ez(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bC(r,a)}else J.bC(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.mo(t)}catch(q){H.O(q)
r=t
J.bC(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.u,W.u]}}}
W.bG.prototype={$isd:1,
$asd:function(){return[W.ah]},
$isc:1,
$asc:function(){return[W.ah]}}
W.bH.prototype={$isd:1,
$asd:function(){return[W.ae]},
$isc:1,
$asc:function(){return[W.ae]}}
W.bI.prototype={$isd:1,
$asd:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]}}
W.bJ.prototype={$isd:1,
$asd:function(){return[W.ah]},
$isc:1,
$asc:function(){return[W.ah]}}
W.bK.prototype={$isd:1,
$asd:function(){return[W.ae]},
$isc:1,
$asc:function(){return[W.ae]}}
W.bL.prototype={$isd:1,
$asd:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]}}
W.cI.prototype={}
W.d1.prototype={$isd:1,
$asd:function(){return[W.B]},
$isc:1,
$asc:function(){return[W.B]}}
W.cO.prototype={$isd:1,
$asd:function(){return[W.af]},
$isc:1,
$asc:function(){return[W.af]}}
W.cV.prototype={$isd:1,
$asd:function(){return[W.u]},
$isc:1,
$asc:function(){return[W.u]}}
W.cW.prototype={$isd:1,
$asd:function(){return[W.u]},
$isc:1,
$asc:function(){return[W.u]}}
W.cX.prototype={$isd:1,
$asd:function(){return[W.u]},
$isc:1,
$asc:function(){return[W.u]}}
W.cY.prototype={$isd:1,
$asd:function(){return[W.ai]},
$isc:1,
$asc:function(){return[W.ai]}}
W.cZ.prototype={$isd:1,
$asd:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]}}
W.d_.prototype={$isd:1,
$asd:function(){return[W.ag]},
$isc:1,
$asc:function(){return[W.ag]}}
W.d0.prototype={$isd:1,
$asd:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]}}
W.cM.prototype={$isd:1,
$asd:function(){return[P.M]},
$isc:1,
$asc:function(){return[P.M]}}
W.cN.prototype={$isd:1,
$asd:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]}}
W.cP.prototype={$isd:1,
$asd:function(){return[W.ad]},
$isc:1,
$asc:function(){return[W.ad]}}
W.cR.prototype={$isd:1,
$asd:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]}}
W.cS.prototype={$isd:1,
$asd:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]}}
W.cT.prototype={$isd:1,
$asd:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}}
W.d2.prototype={$isd:1,
$asd:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]}}
W.de.prototype={$isd:1,
$asd:function(){return[W.u]},
$isc:1,
$asc:function(){return[W.u]}}
W.df.prototype={$isd:1,
$asd:function(){return[W.ad]},
$isc:1,
$asc:function(){return[W.ad]}}
W.dd.prototype={$isd:1,
$asd:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]}}
W.di.prototype={$isd:1,
$asd:function(){return[P.M]},
$isc:1,
$asc:function(){return[P.M]}}
W.dj.prototype={$isd:1,
$asd:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]}}
W.dk.prototype={$isd:1,
$asd:function(){return[W.u]},
$isc:1,
$asc:function(){return[W.u]}}
W.dl.prototype={$isd:1,
$asd:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}}
W.d5.prototype={$isd:1,
$asd:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]}}
W.d6.prototype={$isd:1,
$asd:function(){return[W.u]},
$isc:1,
$asc:function(){return[W.u]}}
W.d7.prototype={$isd:1,
$asd:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]}}
W.d9.prototype={$isd:1,
$asd:function(){return[W.ag]},
$isc:1,
$asc:function(){return[W.ag]}}
W.db.prototype={$isd:1,
$asd:function(){return[W.af]},
$isc:1,
$asc:function(){return[W.af]}}
W.dg.prototype={$isd:1,
$asd:function(){return[W.B]},
$isc:1,
$asc:function(){return[W.B]}}
W.dh.prototype={$isd:1,
$asd:function(){return[W.ai]},
$isc:1,
$asc:function(){return[W.ai]}}
P.i_.prototype={
cG:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}C.a.l(t,a)
C.a.l(this.b,null)
return s},
bo:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.bj(s,!0)
r.dG(s,!0)
return r}if(a instanceof RegExp)throw H.e(new P.c6("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.o8(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.cG(a)
r=this.b
o=r[p]
t.a=o
if(o!=null)return o
o=P.I()
t.a=o
r[p]=o
this.fj(a,new P.i1(t,this))
return t.a}if(a instanceof Array){p=this.cG(a)
r=this.b
o=r[p]
if(o!=null)return o
n=J.y(a)
m=n.gj(a)
o=this.c?new Array(m):a
r[p]=o
for(r=J.bd(o),l=0;C.b.a3(l,m);++l)r.i(o,l,this.bo(n.h(a,l)))
return o}return a}}
P.i1.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.bo(b)
J.lZ(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.jf.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.m,,]}}}
P.i0.prototype={
fj:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.jg.prototype={
$1:function(a){return this.a.ao(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.jh.prototype={
$1:function(a){return this.a.eW(a)},
$S:function(){return{func:1,args:[,]}}}
P.iN.prototype={}
P.M.prototype={$asM:null}
P.ea.prototype={$isa:1}
P.aS.prototype={$isa:1}
P.ez.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eA.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eB.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eC.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eD.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eE.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eF.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eG.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eH.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eI.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eJ.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eK.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eL.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eM.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gK:function(a){return a.z}}
P.eN.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eO.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gK:function(a){return a.z}}
P.eP.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eQ.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eU.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eX.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.an.prototype={}
P.aJ.prototype={$isa:1}
P.f4.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ay.prototype={$iso:1}
P.fj.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return this.Z(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Z:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.ay]},
$isc:1,
$asc:function(){return[P.ay]}}
P.ft.prototype={$isa:1}
P.fu.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.aB.prototype={$iso:1}
P.fL.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return this.Z(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Z:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.aB]},
$isc:1,
$asc:function(){return[P.aB]}}
P.fS.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.fX.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.fY.prototype={
gj:function(a){return a.length}}
P.h2.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.h3.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.c_.prototype={$isa:1,$isc_:1}
P.hu.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return this.Z(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Z:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}}
P.J.prototype={
N:function(a,b,c,d){var t,s,r,q,p,o
t=H.x([],[W.dC])
C.a.l(t,W.ls(null))
C.a.l(t,W.lv())
C.a.l(t,new W.j0())
c=new W.e0(new W.dD(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.q).f1(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.Z(q)
o=t.ga5(t)
for(t=J.j(p);r=o.firstChild,r!=null;)t.S(p,r)
return p},
gcL:function(a){return new W.c9(a,"change",!1,[W.i])},
$isa:1,
$ish:1,
$isJ:1}
P.hv.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.hw.prototype={$isa:1}
P.dO.prototype={}
P.hA.prototype={$isa:1}
P.c4.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.aC.prototype={$iso:1}
P.hJ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return this.Z(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Z:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.aC]},
$isc:1,
$asc:function(){return[P.aC]}}
P.hR.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.hT.prototype={$isa:1}
P.hU.prototype={$isa:1}
P.cb.prototype={$isa:1}
P.iS.prototype={$isa:1}
P.iT.prototype={$isa:1}
P.iU.prototype={$isa:1}
P.cL.prototype={$isd:1,
$asd:function(){return[P.ay]},
$isc:1,
$asc:function(){return[P.ay]}}
P.cJ.prototype={$isd:1,
$asd:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}}
P.cQ.prototype={$isd:1,
$asd:function(){return[P.aB]},
$isc:1,
$asc:function(){return[P.aB]}}
P.cU.prototype={$isd:1,
$asd:function(){return[P.aC]},
$isc:1,
$asc:function(){return[P.aC]}}
P.d4.prototype={$isd:1,
$asd:function(){return[P.ay]},
$isc:1,
$asc:function(){return[P.ay]}}
P.dc.prototype={$isd:1,
$asd:function(){return[P.aB]},
$isc:1,
$asc:function(){return[P.aB]}}
P.d8.prototype={$isd:1,
$asd:function(){return[P.aC]},
$isc:1,
$asc:function(){return[P.aC]}}
P.da.prototype={$isd:1,
$asd:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}}
P.ee.prototype={
gj:function(a){return a.length}}
P.h7.prototype={
cc:function(a,b){return a.activeTexture(b)},
cf:function(a,b,c){return a.attachShader(b,c)},
cg:function(a,b,c){return a.bindBuffer(b,c)},
ci:function(a,b,c){return a.bindFramebuffer(b,c)},
cj:function(a,b,c){return a.bindTexture(b,c)},
ck:function(a,b){return a.blendEquation(b)},
cl:function(a,b,c){return a.blendFunc(b,c)},
cn:function(a,b,c,d){return a.bufferData(b,c,d)},
co:function(a,b){return a.clear(b)},
cp:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
cq:function(a,b){return a.compileShader(b)},
cs:function(a){return a.createBuffer()},
ct:function(a){return a.createProgram()},
cu:function(a,b){return a.createShader(b)},
cv:function(a){return a.createTexture()},
cz:function(a,b){return a.depthMask(b)},
cA:function(a,b){return a.disable(b)},
cB:function(a,b,c,d){return a.drawArrays(b,c,d)},
cC:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cD:function(a,b){return a.enable(b)},
cE:function(a,b){return a.enableVertexAttribArray(b)},
aL:function(a){return P.ji(a.getContextAttributes())},
bq:function(a){return a.getError()},
br:function(a,b){return a.getProgramInfoLog(b)},
bs:function(a,b,c){return a.getProgramParameter(b,c)},
bt:function(a,b){return a.getShaderInfoLog(b)},
bu:function(a,b,c){return a.getShaderParameter(b,c)},
bw:function(a,b,c){return a.getUniformLocation(b,c)},
cH:function(a,b){return a.linkProgram(b)},
cM:function(a,b,c){return a.pixelStorei(b,c)},
bB:function(a,b,c){return a.shaderSource(b,c)},
bD:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aI:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){this.b4(a,b,c,d,e,f,g,h,i,j)
return}s=J.t(g)
if((!!s.$isbm||g==null)&&h==null&&t&&j==null){this.b5(a,b,c,d,e,f,P.lH(g))
return}if(!!s.$isbn&&h==null&&t&&j==null){this.b6(a,b,c,d,e,f,g)
return}if(!!s.$isaU&&h==null&&t&&j==null){this.b7(a,b,c,d,e,f,g)
return}if(!!s.$isbv&&h==null&&t&&j==null){this.b8(a,b,c,d,e,f,g)
return}if(!!s.$isbl&&h==null&&t&&j==null){this.b9(a,b,c,d,e,f,g)
return}throw H.e(P.cp("Incorrect number or type of arguments"))},
cS:function(a,b,c,d,e,f,g){return this.aI(a,b,c,d,e,f,g,null,null,null)},
b4:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
b5:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b6:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b7:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b8:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b9:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cT:function(a,b,c,d){return a.texParameterf(b,c,d)},
cU:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
d8:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.h8.prototype={
eO:function(a,b){return a.beginTransformFeedback(b)},
eR:function(a,b){return a.bindVertexArray(b)},
f3:function(a){return a.createVertexArray()},
fe:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ff:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
fg:function(a){return a.endTransformFeedback()},
fR:function(a,b,c,d){this.eE(a,b,c,d)
return},
eE:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
fS:function(a,b,c){return a.vertexAttribDivisor(b,c)},
cc:function(a,b){return a.activeTexture(b)},
cf:function(a,b,c){return a.attachShader(b,c)},
cg:function(a,b,c){return a.bindBuffer(b,c)},
ci:function(a,b,c){return a.bindFramebuffer(b,c)},
cj:function(a,b,c){return a.bindTexture(b,c)},
ck:function(a,b){return a.blendEquation(b)},
cl:function(a,b,c){return a.blendFunc(b,c)},
cn:function(a,b,c,d){return a.bufferData(b,c,d)},
co:function(a,b){return a.clear(b)},
cp:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
cq:function(a,b){return a.compileShader(b)},
cs:function(a){return a.createBuffer()},
ct:function(a){return a.createProgram()},
cu:function(a,b){return a.createShader(b)},
cv:function(a){return a.createTexture()},
cz:function(a,b){return a.depthMask(b)},
cA:function(a,b){return a.disable(b)},
cB:function(a,b,c,d){return a.drawArrays(b,c,d)},
cC:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cD:function(a,b){return a.enable(b)},
cE:function(a,b){return a.enableVertexAttribArray(b)},
aL:function(a){return P.ji(a.getContextAttributes())},
bq:function(a){return a.getError()},
br:function(a,b){return a.getProgramInfoLog(b)},
bs:function(a,b,c){return a.getProgramParameter(b,c)},
bt:function(a,b){return a.getShaderInfoLog(b)},
bu:function(a,b,c){return a.getShaderParameter(b,c)},
bw:function(a,b,c){return a.getUniformLocation(b,c)},
cH:function(a,b){return a.linkProgram(b)},
cM:function(a,b,c){return a.pixelStorei(b,c)},
bB:function(a,b,c){return a.shaderSource(b,c)},
bD:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aI:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){this.b4(a,b,c,d,e,f,g,h,i,j)
return}s=J.t(g)
if((!!s.$isbm||g==null)&&h==null&&t&&j==null){this.b5(a,b,c,d,e,f,P.lH(g))
return}if(!!s.$isbn&&h==null&&t&&j==null){this.b6(a,b,c,d,e,f,g)
return}if(!!s.$isaU&&h==null&&t&&j==null){this.b7(a,b,c,d,e,f,g)
return}if(!!s.$isbv&&h==null&&t&&j==null){this.b8(a,b,c,d,e,f,g)
return}if(!!s.$isbl&&h==null&&t&&j==null){this.b9(a,b,c,d,e,f,g)
return}throw H.e(P.cp("Incorrect number or type of arguments"))},
cS:function(a,b,c,d,e,f,g){return this.aI(a,b,c,d,e,f,g,null,null,null)},
b4:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
b5:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b6:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b7:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b8:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b9:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cT:function(a,b,c,d){return a.texParameterf(b,c,d)},
cU:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
d8:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.j5.prototype={$isa:1}
P.hj.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return P.ji(this.eh(a,b))},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
eh:function(a,b){return a.item(b)},
$isd:1,
$asd:function(){return[P.az]},
$isc:1,
$asc:function(){return[P.az]}}
P.cK.prototype={$isd:1,
$asd:function(){return[P.az]},
$isc:1,
$asc:function(){return[P.az]}}
P.d3.prototype={$isd:1,
$asd:function(){return[P.az]},
$isc:1,
$asc:function(){return[P.az]}}
B.jF.prototype={
$1:function(a){$.$get$jj().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.b1]}}}
B.jG.prototype={
$1:function(a){$.$get$jj().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.b1]}}}
B.jH.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.o4=t
$.o5=C.b.ag(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.km=s-C.b.F(window.innerWidth,2)
$.lR=-(t-C.b.F(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.R]}}}
B.jI.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.cm=t-C.b.F(window.innerWidth,2)
$.cn=-(s-C.b.F(window.innerHeight,2))
if(a.button===2)$.$get$cl().i(0,"right",!0)
else $.$get$cl().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.R]}}}
B.jJ.prototype={
$1:function(a){if(a.button===2)$.$get$cl().i(0,"right",null)
else $.$get$cl().i(0,"left",null)},
$S:function(){return{func:1,args:[W.R]}}}
B.fM.prototype={
dP:function(a,b,c,d){var t
d.toString
W.a4(d,W.oe().$1(d),new B.fN(this),!1,W.b7)
W.a4(d,"mousemove",new B.fO(this),!1,W.R)
t=W.b5
W.a4(d,"touchstart",new B.fP(),!1,t)
W.a4(d,"touchmove",new B.fQ(this),!1,t)
B.ou(null)}}
B.fN.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.aw.gf7(a)*r.k3
if(C.c.ag(r.fy,t)>0)r.fy=H.a6(C.c.ag(r.fy,t))}catch(q){s=H.O(q)
P.T(s)}},
$S:function(){return{func:1,args:[W.b7]}}}
B.fO.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.a6(t.go+C.b.ag($.km,$.cm)*0.01)
s=t.id
r=$.cn
q=$.lR
t.id=H.a6(s+(r-q)*0.01)
$.cm=$.km
$.cn=q}},
$S:function(){return{func:1,args:[W.R]}}}
B.fP.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.ac(t.clientX)
C.c.ac(t.clientY)
$.cm=s
C.c.ac(t.clientX)
$.cn=C.c.ac(t.clientY)},
$S:function(){return{func:1,args:[W.b5]}}}
B.fQ.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.ac(t.clientX)
t=C.c.ac(t.clientY)
r=this.a
r.go=H.a6(r.go+C.b.ag(s,$.cm)*0.01)
r.id=H.a6(r.id+($.cn-t)*0.01)
$.cm=s
$.cn=t},
$S:function(){return{func:1,args:[W.b5]}}}
L.bg.prototype={
k:function(a){return"BONE["+this.d+"] ("+this.e+") "+H.f(this.a)+"\ntrans:\n"+this.b.k(0)+"offset:\n"+this.c.k(0)},
gcm:function(){return this.a}}
L.ec.prototype={
dF:function(a){var t,s,r
for(t=this.b,s=this.a,r=0;r<a;++r){s[r]=new T.E(new Float32Array(16))
t[r]=new T.E(new Float32Array(16))}}}
L.ct.prototype={
k:function(a){var t=[]
C.a.l(t,H.f(this.a.a))
C.a.l(t,""+this.b.length+": "+H.f(this.c))
C.a.l(t,""+this.d.length+": "+H.f(this.e))
C.a.l(t,""+this.f.length+": "+H.f(this.r))
return C.a.aa(t,"\n")},
sel:function(a){this.b=a},
sem:function(a){this.c=a},
sew:function(a){this.d=a},
sex:function(a){this.e=a},
seA:function(a){this.f=a},
seB:function(a){this.r=a}}
L.hf.prototype={
k:function(a){return"SkeletalAnimation["+H.f(this.a)+", duration: "+H.f(this.c)+", frames: "+this.b.length+"]"}}
G.fz.prototype={}
G.dT.prototype={
a_:function(a,b){var t=this.d
if(H.a5(!t.u(0,a)))H.aj("uniform "+a+" already set")
t.i(0,a,b)},
bK:function(){return this.d},
k:function(a){var t,s,r,q
t=H.x(["{"+new H.aN(H.jo(this),null).k(0)+"}["+this.a+"]"],[P.m])
for(s=this.d,r=s.gB(s),r=r.gv(r);r.m();){q=r.gq()
C.a.l(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.aa(t,"\n")}}
G.eh.prototype={}
G.ek.prototype={
cF:function(a,b,c){J.mj(this.a,b)
if(c>0)J.mL(this.a,b,c)}}
G.f_.prototype={}
G.eR.prototype={}
G.f2.prototype={
a6:function(a){var t=this.e
H.b(!t.u(0,a))
H.b(C.i.bC(a,"a"))
switch($.$get$a_().h(0,a).a){case"vec2":t.i(0,a,H.x([],[T.as]))
break
case"vec3":t.i(0,a,H.x([],[T.n]))
break
case"vec4":t.i(0,a,H.x([],[T.Y]))
break
case"float":t.i(0,a,H.x([],[P.Q]))
break
case"uvec4":t.i(0,a,H.x([],[[P.c,P.p]]))
break
default:if(H.a5(!1))H.aj("unknown type for "+a)}},
aA:function(a){var t,s,r,q,p
for(t=a.length,s=this.d,r=0;r<t;++r){q=a[r]
q.toString
p=new T.n(new Float32Array(3))
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
r.l(t,new T.as(o))}},
aQ:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<s;++q){p=b[q]
p.toString
o=new T.n(new Float32Array(3))
o.D(p)
r.l(t,o)}},
bF:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<s;++q){p=b[q]
p.toString
o=new T.Y(new Float32Array(4))
o.D(p)
r.l(t,o)}},
dK:function(){var t,s,r,q,p,o,n,m
t=this.b
H.b(t.length>0||!1)
s=new Array(t.length*3)
s.fixed$length=Array
r=H.x(s,[P.p])
for(s=t.length,q=0,p=0;o=t.length,p<o;o===s||(0,H.G)(t),++p){n=t[p]
r[q]=n.a
r[q+1]=n.b
r[q+2]=n.c
q+=3}for(t=this.c,p=0;!1;++p){m=t[p]
r[q]=m.geI(m)
r[q+1]=m.gfW(m)
r[q+2]=m.geS(m)
r[q+3]=m.geI(m)
r[q+4]=m.geS(m)
r[q+5]=m.gfX(m)
q+=6}H.b(q===r.length)
return r},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4[0]"]
for(s=this.e,r=s.gB(s),r=r.gv(r);r.m();){q=r.gq()
p=$.$get$a_().h(0,q).a
C.a.l(t,H.f(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.aa(t," ")}}
G.dR.prototype={}
G.dQ.prototype={}
G.fv.prototype={
dO:function(a){this.a_("cDepthTest",!0)
this.a_("cDepthWrite",!0)
this.a_("cBlendEquation",$.$get$kF())
this.a_("cStencilFunc",$.$get$l9())}}
G.dv.prototype={
bG:function(a,b,c){var t,s
if(C.i.aT(a,0)===105){if(H.a5(C.b.aO(b.length,c)===this.z))H.aj("ChangeAttribute "+this.z)}else{t=C.b.aO(b.length,c)
if(H.a5(t===(this.ch.length/3|0)))H.aj("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.e6(t.a,34962,s)
J.kr(t.a,34962,b,35048)},
bI:function(a){this.ch=a
this.bG("aPosition",a,3)},
dL:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
ah:function(a,b,c){var t,s,r,q,p,o
t=J.ko(a,0)===105
if(t&&this.z===0)this.z=C.b.aO(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.e8(r.a))
this.bG(a,b,c)
q=$.$get$a_().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.a5(p.u(0,a)))H.aj("unexpected attribute "+a)
o=p.h(0,a)
J.e7(r.a,this.e)
r.cF(0,o,t?1:0)
s=s.h(0,a)
p=q.bJ()
J.e6(r.a,34962,s)
J.kC(r.a,o,p,5126,!1,0,0)},
aA:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.e8(s.a))
this.bI(a)
r=$.$get$a_().h(0,"aPosition")
if(r==null)throw H.e("Unknown canonical aPosition")
q=this.x
H.b(q.u(0,"aPosition"))
p=q.h(0,"aPosition")
J.e7(s.a,this.e)
s.cF(0,p,0)
t=t.h(0,"aPosition")
q=r.bJ()
J.e6(s.a,34962,t)
J.kC(s.a,p,q,5126,!1,0,0)},
bH:function(a){var t,s,r,q
H.b(this.ch!=null)
t=this.ch.length
if(t<768){this.saX(new Uint8Array(H.jb(a)))
this.Q=5121}else if(t<196608){this.saX(new Uint16Array(H.jb(a)))
this.Q=5123}else{this.saX(new Uint32Array(H.jb(a)))
this.Q=5125}t=this.d
J.e7(t.a,this.e)
s=this.y
r=this.cx
q=J.t(r)
H.b(!!q.$isln||!!q.$islo||!!q.$islp)
J.e6(t.a,34963,s)
J.kr(t.a,34963,r,35048)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gB(t),r=r.gv(r);r.m();){q=r.gq()
C.a.l(s,H.f(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.aa(s,"  ")},
saX:function(a){this.cx=a}}
G.fT.prototype={
dE:function(a,b){var t=C.b.ad(a,b)
if(this.z===t)return
this.z=t
this.bO()},
bO:function(){var t,s,r,q,p,o,n
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
t.af(0,0,1/(p*s))
t.af(1,1,1/p)
t.af(2,2,(q+r)/o)
t.af(3,2,-1)
t.af(2,3,2*r*q/o)},
bK:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.n(new Float32Array(H.l(3)))
o.a4(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
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
s=J.t(n)
r=!!s.$isY
k=r?s.gax(n):1
if(!!s.$isn){j=s.gn(n)
m=s.gp(n)
l=s.gK(n)
n=j}else if(r){j=s.gn(n)
m=s.gp(n)
l=s.gK(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.J(t[0],n)
r=C.c.J(t[4],m)
q=C.c.J(t[8],l)
i=t[12]
h=C.c.J(t[1],n)
g=C.c.J(t[5],m)
f=C.c.J(t[9],l)
e=t[13]
d=C.c.J(t[2],n)
c=C.c.J(t[6],m)
b=C.c.J(t[10],l)
a=t[14]
a0=C.c.J(t[3],n)
a1=C.c.J(t[7],m)
a2=C.c.J(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.D(this.db)
a3.ab(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.h6.prototype={
dM:function(a){var t,s,r,q,p,o
t=this.e.x
s=a.e.x
for(r=t.gB(t),r=r.gv(r);r.m();){q=r.gq()
p=t.h(0,q)
o=s.h(0,q)
if(p==null?o!=null:p!==o)return!1}return!0},
dW:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gB(s),s=s.gv(s);s.m();){q=s.gq()
if(!t.u(0,q))C.a.l(r,q)}for(t=this.x,s=new P.cd(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.m();){q=s.d
if(!t.E(0,q))C.a.l(r,q)}return r},
dZ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gB(b),s=s.gv(s),r=this.d,q=this.y,p=this.z,o=0;s.m();){n=s.gq()
switch(J.ko(n,0)){case 117:if(q.u(0,n)){m=b.h(0,n)
if(p.u(0,n))H.e4("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$a_().h(0,n)
if(l==null)H.H("unknown "+n)
H.b(q.u(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.jU(r.a,k,m)
else if(!!J.t(m).$iskZ)J.mJ(r.a,k,m)
break
case"float":if(l.c===0)J.mH(r.a,k,m)
else if(!!J.t(m).$iseW)J.mI(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aG(m,"$isE").a
J.kB(r.a,k,!1,j)}else if(!!J.t(m).$iseW)J.kB(r.a,k,!1,m)
else if(H.a5(!1))H.aj("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.aG(m,"$isaA").a
J.kA(r.a,k,!1,j)}else if(!!J.t(m).$iseW)J.kA(r.a,k,!1,m)
else if(H.a5(!1))H.aj("bad unform: "+n)
break
case"vec4":j=l.c
i=r.a
if(j===0)J.kz(i,k,H.aG(m,"$isY").a)
else J.kz(i,k,m)
break
case"vec3":j=l.c
i=r.a
if(j===0)J.ky(i,k,H.aG(m,"$isn").a)
else J.ky(i,k,m)
break
case"vec2":j=l.c
i=r.a
if(j===0)J.kx(i,k,H.aG(m,"$isas").a)
else J.kx(i,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a2(33984,this.ch)
J.kp(r.a,j)
j=H.aG(m,"$isc5").b
J.be(r.a,3553,j)
j=this.ch
J.jU(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
j=C.b.a2(33984,this.ch)
J.kp(r.a,j)
j=H.aG(m,"$isc5").b
J.be(r.a,34067,j)
j=this.ch
J.jU(r.a,k,j)
this.ch=this.ch+1
break
default:H.e4("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":j=J.F(m,!0)
i=r.a
if(j)J.co(i,2929)
else J.jQ(i,2929)
break
case"cStencilFunc":H.aG(m,"$isdR")
j=m.a
i=r.a
if(j===1281)J.jQ(i,2960)
else{J.co(i,2960)
i=m.b
h=m.c
J.mB(r.a,j,i,h)}break
case"cDepthWrite":J.mc(r.a,m)
break
case"cBlendEquation":H.aG(m,"$isdQ")
j=m.a
i=r.a
if(j===1281)J.jQ(i,3042)
else{J.co(i,3042)
i=m.b
h=m.c
J.m7(r.a,i,h)
J.m6(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aX(1000*(s-new P.bj(t,!1).a)).k(0)},
dJ:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.mK(t.a,this.r)
this.ch=0
this.z.X(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.G)(b),++r){q=b[r]
this.dZ(q.a,q.bK())}s=this.Q
s.X(0)
for(p=a.cy,p=p.gB(p),p=p.gv(p);p.m();)s.l(0,p.gq())
o=this.dW()
if(o.length!==0)P.T("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(o)))
s=a.d
p=a.e
J.e7(s.a,p)
n=this.e.f.length>0
p=a.f
s=a.dL()
m=a.Q
l=a.z
if(n)J.m4(t.a,p)
if(m!==-1){k=t.a
if(l>1)J.mh(k,p,s,m,0,l)
else J.mg(k,p,s,m,0)}else{m=t.a
if(l>1)J.mf(m,p,0,s,l)
else J.me(m,p,0,s)}if(n)J.mk(t.a)},
dR:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){n=t[o]
r.i(0,n,J.kw(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){n=t[o]
r.i(0,n,J.kw(q.a,p,n))}}}
G.A.prototype={
bJ:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.aM.prototype={
aP:function(a){var t,s,r,q,p
H.b(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.G)(a),++q){p=a[q]
H.b($.$get$a_().u(0,p))
H.b(!C.a.E(s,p))
C.a.l(s,p)
r.i(0,p,this.r);++this.r}C.a.aM(s)},
ai:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.G)(a),++r){q=a[r]
if(H.a5($.$get$a_().u(0,q)))H.aj("missing uniform "+q)
H.b(!C.a.E(s,q))
C.a.l(s,q)}C.a.aM(s)},
az:function(a){var t,s,r
H.b(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.b($.$get$a_().u(0,r))
H.b(!C.a.E(t,r))
C.a.l(t,r)}C.a.aM(t)},
bN:function(a,b){H.b(this.b==null)
this.b=this.bP(!0,a,b)},
aR:function(a){return this.bN(a,null)},
dS:function(a,b){H.b(this.b==null)
this.b=this.bP(!1,a,b)},
bM:function(a){return this.dS(a,null)},
bP:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){n=t[o]
m=$.$get$a_().h(0,n)
C.a.l(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){k=t[o]
m=$.$get$a_().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){k=t[o]
m=$.$get$a_().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){k=t[o]
m=$.$get$a_().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.l(q,"")
if(c!=null)C.a.M(q,c)
if(a)C.a.l(q,"void main(void) {")
C.a.M(q,b)
if(a)C.a.l(q,"}")
return C.a.aa(q,"\n")}}
G.hh.prototype={
fv:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=this.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
b=new T.n(new Float32Array(H.l(3)))
b.a4(0,1,0)
o=this.e
n=o.a
n[0]=s[12]
n[1]=s[13]
n[2]=s[14]
n=new Float32Array(H.l(3))
m=new T.n(n)
m.D(o)
l=a.a
n[0]=n[0]-l[0]
n[1]=n[1]-l[1]
n[2]=n[2]-l[2]
m.bi(0)
k=b.cw(m)
k.bi(0)
j=m.cw(k)
j.bi(0)
i=k.be(o)
h=j.be(o)
o=m.be(o)
g=k.a
f=j.a
t.bA(g[0],f[0],n[0],0,g[1],f[1],n[1],0,g[2],f[2],n[2],0,-i,-h,-o,1)
s[12]=r
s[13]=q
s[14]=p},
bh:function(a){return this.fv(a,null)}}
G.dP.prototype={
bL:function(a,b){var t=this.e
if(t!==1)J.mE(a.a,b,34046,t)
t=this.r
J.e9(a.a,b,10240,t)
t=this.f
J.e9(a.a,b,10241,t)
if(this.b){J.e9(a.a,b,10242,33071)
J.e9(a.a,b,10243,33071)}}}
G.c5.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.hO.prototype={
k:function(a){return"TypedTextureMutable["+this.a+", "+this.x+", "+this.f+" X "+this.r+"]"}}
G.f5.prototype={
dT:function(a){var t,s
t=this.d
s=this.c
J.be(t.a,s,this.b)
J.mC(t.a,s,0,6408,6408,5121,a)}}
Y.f7.prototype={
$1:function(a){this.a.i(0,a.gcm(),a)
return a},
$S:function(){return{func:1,args:[,]}}}
Y.f8.prototype={
$2:function(a,b){var t,s,r,q,p,o
t=J.y(a)
s=t.h(a,"name")
r=Y.dX(t.h(a,"transformation"))
q=new T.E(new Float32Array(16))
p=J.y(r)
q.bA(p.h(r,0),p.h(r,1),p.h(r,2),p.h(r,3),p.h(r,4),p.h(r,5),p.h(r,6),p.h(r,7),p.h(r,8),p.h(r,9),p.h(r,10),p.h(r,11),p.h(r,12),p.h(r,13),p.h(r,14),p.h(r,15))
q.cV()
o=new T.E(new Float32Array(16))
o.G()
r=this.a
p=r.a
H.b(p>b);++r.a
C.a.l(this.b,new L.bg(s,q,o,p,b))
if(t.u(a,"children"))for(t=J.U(t.h(a,"children"));t.m();)this.$2(t.gq(),p)},
$S:function(){return{func:1,v:true,args:[[P.az,P.m,,],P.p]}}}
Y.f6.prototype={
$1:function(a){this.a.i(0,a.gcm(),a)
return a},
$S:function(){return{func:1,args:[,]}}}
R.eg.prototype={}
R.dJ.prototype={
cO:function(a){var t,s,r
t=this.db
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.T("size change "+H.f(s)+" "+H.f(r))
this.dx.dE(s,r)
this.z=s
this.Q=r}}
R.hl.prototype={
e1:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.nG("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.w).bW(r,"float")
r.setProperty(p,"left","")
p=C.w.bW(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.r.S(t,s)}return t},
dU:function(a,b,c){var t,s,r
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
J.jO(this.a,s)
r=this.e1(b,c,90,30)
this.d=r
J.jO(this.a,r)
t=t.createElement("div")
this.c=t
J.jO(this.a,t)}}
R.hm.prototype={
dY:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.l.fQ(s,2)+" fps"
t=this.c;(t&&C.r).dr(t,b)
r=C.b.F(30*C.l.eU(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.r).S(t,q)},
dX:function(a){return this.dY(a,"")}}
A.bq.prototype={
k:function(a){return"NODE["+this.a+"]"}}
A.bt.prototype={}
A.h5.prototype={
dI:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.m5(p.a,36160,t)
H.b(r>0&&q>0)
J.mM(p.a,this.x,this.y,r,q)
if(s!==0)J.m8(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){n=t[o]
if(!n.c)continue
r=n.d
if(!r.c)continue
m=n.e
C.a.l(m,new G.dT(P.I(),"transforms",!1,!0))
l=new T.E(new Float32Array(16))
l.G()
for(q=n.f,p=q.length,k=0;k<q.length;q.length===p||(0,H.G)(q),++k)A.lK(r,q[k],l,a,m)
m.pop()}},
dH:function(){return this.dI(null)},
dQ:function(a,b,c){if(this.d==null)this.d=new G.f_(this.e,null,null,null,null)}}
D.fp.prototype={
$1:function(a){this.a.ao(0,C.V.f4(W.nR(this.b.response)))},
$S:function(){return{func:1,args:[,]}}}
D.fo.prototype={
$1:function(a){return this.a.ao(0,this.b)},
$S:function(){return{func:1,args:[,]}}}
A.jp.prototype={
$2:function(a,b){var t=536870911&a+J.aw(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.p,P.o]}}}
T.aA.prototype={
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
k:function(a){return"[0] "+this.U(0).k(0)+"\n[1] "+this.U(1).k(0)+"\n[2] "+this.U(2).k(0)+"\n"},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.j.i(this.a,b,c)},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aA){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gw:function(a){return A.e2(this.a)},
U:function(a){var t,s
t=new Float32Array(H.l(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.n(t)},
f_:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
T.E.prototype={
af:function(a,b,c){H.b(a<4)
H.b(b<4)
this.a[b*4+a]=c},
bA:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var t=this.a
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
k:function(a){return"[0] "+this.U(0).k(0)+"\n[1] "+this.U(1).k(0)+"\n[2] "+this.U(2).k(0)+"\n[3] "+this.U(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.j.i(this.a,b,c)},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.E){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gw:function(a){return A.e2(this.a)},
U:function(a){var t,s
t=new Float32Array(H.l(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.Y(t)},
cP:function(a){var t,s,r,q,p,o,n,m,l,k,j,i
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
R:function(a,b){return this.de(a,b,null,null)},
G:function(){var t=this.a
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
bv:function(){var t,s,r,q
t=this.a
s=t[14]
r=t[13]
q=t[12]
t=new T.n(new Float32Array(H.l(3)))
t.a4(q,r,s)
return t},
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
T.dG.prototype={
gn:function(a){return this.a[0]},
gp:function(a){return this.a[1]},
gK:function(a){return this.a[2]},
gax:function(a){return this.a[3]},
gj:function(a){var t,s,r,q,p
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=t[3]
return Math.sqrt(s*s+r*r+q*q+p*p)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.j.i(this.a,b,c)},
k:function(a){var t=this.a
return H.f(t[0])+", "+H.f(t[1])+", "+H.f(t[2])+" @ "+H.f(t[3])}}
T.as.prototype={
D:function(a){var t,s
t=a.a
s=this.a
s[1]=t[1]
s[0]=t[0]},
k:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.as){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gw:function(a){return A.e2(this.a)},
ad:function(a,b){var t=new T.as(new Float32Array(H.l(2)))
t.D(this)
t.R(0,1/b)
return t},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.j.i(this.a,b,c)},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
R:function(a,b){var t=this.a
t[1]=t[1]*b
t[0]=t[0]*b},
gn:function(a){return this.a[0]},
gp:function(a){return this.a[1]}}
T.n.prototype={
a4:function(a,b,c){var t=this.a
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
return"["+H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.n){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gw:function(a){return A.e2(this.a)},
ad:function(a,b){var t=new T.n(new Float32Array(H.l(3)))
t.D(this)
t.R(0,1/b)
return t},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.j.i(this.a,b,c)},
gj:function(a){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return Math.sqrt(s*s+r*r+t*t)},
bi:function(a){var t,s,r,q,p
t=this.a
s=t[0]
r=t[1]
q=t[2]
q=Math.sqrt(s*s+r*r+q*q)
if(q===0)return 0
p=1/q
t[0]=t[0]*p
t[1]=t[1]*p
t[2]=t[2]*p
return q},
be:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
cw:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.n(new Float32Array(H.l(3)))
t.a4(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
R:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
cr:function(a,b){var t,s
t=this.a
s=J.y(a)
t[2]=s.h(a,b+2)
t[1]=s.h(a,b+1)
t[0]=s.h(a,b)},
gn:function(a){return this.a[0]},
gp:function(a){return this.a[1]},
gK:function(a){return this.a[2]}}
T.Y.prototype={
D:function(a){var t,s
t=a.a
s=this.a
s[3]=t[3]
s[2]=t[2]
s[1]=t[1]
s[0]=t[0]},
k:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.Y){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gw:function(a){return A.e2(this.a)},
ad:function(a,b){var t=new T.Y(new Float32Array(H.l(4)))
t.D(this)
t.R(0,1/b)
return t},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.j.i(this.a,b,c)},
gj:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
R:function(a,b){var t=this.a
t[0]=t[0]*b
t[1]=t[1]*b
t[2]=t[2]*b
t[3]=t[3]*b},
gn:function(a){return this.a[0]},
gp:function(a){return this.a[1]},
gK:function(a){return this.a[2]},
gax:function(a){return this.a[3]}}
X.jB.prototype={
$1:function(a){var t=H.aG(W.nQ(a.target),"$isbO")
P.T(H.f(t.id)+" toggle "+H.f(t.checked))
this.a.h(0,t.id).c=t.checked},
$S:function(){return{func:1,args:[W.i]}}}
X.jA.prototype={
$1:function(a9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
t=this.a
t.d=a9+0
s=this.c
s.go=H.a6(s.go+0.001)
r=s.k4
if(r.h(0,37)!=null)s.go=H.a6(s.go+0.03)
else if(r.h(0,39)!=null)s.go=H.a6(s.go-0.03)
if(r.h(0,38)!=null)s.id=H.a6(s.id+0.03)
else if(r.h(0,40)!=null)s.id=H.a6(s.id-0.03)
if(r.h(0,33)!=null)s.fy=H.a6(s.fy*0.99)
else if(r.h(0,34)!=null)s.fy=H.a6(s.fy*1.01)
if(r.h(0,32)!=null){s.go=0
s.id=0}r=H.a6(C.c.eV(s.id,-1.4707963267948965,1.4707963267948965))
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
s.bh(p)
p=s.f.a
p[0]=m[2]
p[1]=m[6]
p[2]=m[10]
s=-s.k1
r=p[0]
q=p[1]
n=p[2]
n=Math.sqrt(r*r+q*q+n*n)
l=p[0]/n
k=p[1]/n
j=p[2]/n
n=Math.cos(s)
s=Math.sin(s)
i=1-n
h=l*l*i+n
p=j*s
g=l*k*i-p
q=k*s
f=l*j*i+q
e=k*l*i+p
d=k*k*i+n
s=l*s
c=k*j*i-s
b=j*l*i-q
a=j*k*i+s
a0=j*j*i+n
n=m[0]
s=m[4]
q=m[8]
p=m[1]
r=m[5]
a1=m[9]
a2=m[2]
a3=m[6]
a4=m[10]
a5=m[3]
a6=m[7]
a7=m[11]
m[0]=n*h+s*e+q*b
m[1]=p*h+r*e+a1*b
m[2]=a2*h+a3*e+a4*b
m[3]=a5*h+a6*e+a7*b
m[4]=n*g+s*d+q*a
m[5]=p*g+r*d+a1*a
m[6]=a2*g+a3*d+a4*a
m[7]=a5*g+a6*d+a7*a
m[8]=n*f+s*c+q*a0
m[9]=p*f+r*c+a1*a0
m[10]=a2*f+a3*c+a4*a0
m[11]=a5*f+a6*c+a7*a0
this.d.dH()
C.ax.geM(window).aJ(this)
this.b.dX(t.d)
a7=a9/1000
this.e.d.i(0,"uTime",C.b.bx(C.l.fh(a7/0.0333),t.b.length))
t=t.c
a6=t.c
a5=t.a
m=t.d
L.k9(a6,a5,m,t.e,C.l.bx(a7,m.c))
a8=R.kG(a6,t.e,1)
t.b.bI(G.eV(a8,null))},
$S:function(){return{func:1,v:true,args:[P.a0]}}}
X.jC.prototype={
$1:function(a8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
t=this.b
s=J.y(a8)
r=s.h(a8,1)
q=new G.dP(!1,!1,!1,!0,1,9729,9729)
p=J.ks(t.a)
o=new G.f5(r,"../asset/monster/monster.jpg",p,3553,t,q)
J.be(t.a,3553,p)
p=q.d?1:0
J.mx(t.a,37440,p)
o.dT(r)
q.bL(t,3553)
H.b(J.kv(t.a)===0)
J.be(t.a,3553,null)
q=this.r
q.a_("uTexture",o)
n=J.a1(J.a1(s.h(a8,0),"meshes"),0)
m=J.a1(J.a1(s.h(a8,0),"animations"),0)
l=new T.E(new Float32Array(H.l(16)))
l.G()
k=Y.n8(s.h(a8,0))
j=Y.n7(n,k)
i=Y.n6(m,k)
P.T("Imnported "+i.k(0))
s=this.c
r=s.d
p=r.d
h=new G.dv(p,J.kt(p.a),4,P.I(),r.e.x,null,0,-1,null,null,P.I(),"meshdata:../asset/monster/monster.json",!1,!0)
h.aA(G.eV(j.d,null))
r=j.dK()
h.y=J.e8(p.a)
h.bH(r)
G.nI(j,h)
r=new Float32Array(H.l(9))
p=new T.E(new Float32Array(H.l(16)))
p.G()
g=new T.E(new Float32Array(H.l(16)))
g.G()
f=new Float32Array(H.l(3))
e=new Float32Array(H.l(3))
d=new Float32Array(H.l(3))
c=new Float32Array(H.l(3))
g.cP(-0.785)
b=[]
a=new Float32Array(H.l(9))
a0=new T.E(new Float32Array(H.l(16)))
a0.G()
a1=new T.E(new Float32Array(H.l(16)))
a1.G()
a2=new A.bq(null,null,b,new T.aA(a),a0,a1,new T.n(new Float32Array(H.l(3))),new T.n(new Float32Array(H.l(3))),new T.n(new Float32Array(H.l(3))),new T.n(new Float32Array(H.l(3))),"wrapper",!1,!0)
C.a.l(b,new A.bq(q,h,[],new T.aA(r),p,g,new T.n(f),new T.n(e),new T.n(d),new T.n(c),"meshdata:../asset/monster/monster.json",!1,!0))
r=new T.n(new Float32Array(H.l(3)))
r.a4(100,0,0)
a2.bh(r)
H.b(!0)
C.a.l(this.e.f,a2)
H.b(!0)
C.a.l(s.f,a2)
s=this.a
s.b=[]
for(r=i.c,a3=0;C.c.a3(a3,r);a3+=0.0333){p=s.b;(p&&C.a).l(p,a3)}a4=L.mV(k,l,i,s.b)
r=k.length*4
p=s.b.length
g=$.$get$lb()
f=J.ks(t.a)
a5=new G.hO(r,p,34836,"anim",f,3553,t,g)
J.be(t.a,3553,f)
J.mD(t.a,3553,0,34836,r,p,0,6408,5126,a4)
g.bL(t,3553)
a6=J.kv(t.a)
if(H.a5(a6===0))H.aj("texture error "+H.f(a6))
J.be(t.a,3553,null)
s.a=a5
q.a_("uAnimationTable",a5)
t=this.d
r=new T.E(new Float32Array(H.l(16)))
r.G()
a7=new R.eg(r,null,k,i,null,null)
q=L.kD(k.length)
a7.e=q
L.k9(k,r,i,q,0)
q=G.ni("wire",t.d,R.kG(k,q,1))
a7.b=q
r=new Float32Array(H.l(9))
p=new T.E(new Float32Array(H.l(16)))
p.G()
g=new T.E(new Float32Array(H.l(16)))
g.G()
q=new A.bq(this.f,q,[],new T.aA(r),p,g,new T.n(new Float32Array(H.l(3))),new T.n(new Float32Array(H.l(3))),new T.n(new Float32Array(H.l(3))),new T.n(new Float32Array(H.l(3))),q.a,!1,!0)
a7.f=q
s.c=a7
g.cP(0.785)
g=[]
s=new Float32Array(H.l(9))
p=new T.E(new Float32Array(H.l(16)))
p.G()
r=new T.E(new Float32Array(H.l(16)))
r.G()
a2=new A.bq(null,null,g,new T.aA(s),p,r,new T.n(new Float32Array(H.l(3))),new T.n(new Float32Array(H.l(3))),new T.n(new Float32Array(H.l(3))),new T.n(new Float32Array(H.l(3))),"wrapper",!1,!0)
C.a.l(g,q)
s=new T.n(new Float32Array(H.l(3)))
s.a4(100,0,0)
a2.bh(s)
H.b(!0)
C.a.l(t.f,a2)
this.x.$1(0)},
$S:function(){return{func:1,args:[P.c]}}}
J.a.prototype.dw=J.a.prototype.k
J.bP.prototype.dA=J.bP.prototype.k
P.W.prototype.dz=P.W.prototype.aK
W.a9.prototype.aN=W.a9.prototype.N
W.cf.prototype.dB=W.cf.prototype.W;(function installTearOffs(){installTearOff(H.ba.prototype,"gfu",0,0,0,null,["$0"],["aG"],0)
installTearOff(H.at.prototype,"gdg",0,0,0,null,["$1"],["L"],2)
installTearOff(H.b9.prototype,"gf9",0,0,0,null,["$1"],["Y"],2)
installTearOff(P,"o0",1,0,0,null,["$1"],["nC"],1)
installTearOff(P,"o1",1,0,0,null,["$1"],["nD"],1)
installTearOff(P,"o2",1,0,0,null,["$1"],["nE"],1)
installTearOff(P,"lG",1,0,0,null,["$0"],["nZ"],0)
installTearOff(P.K.prototype,"gc0",0,0,0,null,["$2","$1"],["I","e7"],5)
installTearOff(P,"o9",1,0,0,null,["$2"],["mT"],7)
installTearOff(W,"oe",1,0,0,null,["$1"],["n_"],8)
installTearOff(W,"of",1,0,0,null,["$4"],["nJ"],4)
installTearOff(W,"og",1,0,0,null,["$4"],["nK"],4)
installTearOff(W.dB.prototype,"gbj",0,1,0,null,["$0"],["bk"],3)
installTearOff(W.dS.prototype,"gbj",0,1,0,null,["$0"],["bk"],3)
installTearOff(R.dJ.prototype,"gfH",0,0,0,null,["$1"],["cO"],6)
installTearOff(X,"lD",1,0,0,null,["$0"],["oo"],0)})();(function inheritance(){inherit(P.o,null)
var t=P.o
inherit(H.k0,t)
inherit(J.a,t)
inherit(J.cq,t)
inherit(P.W,t)
inherit(H.dt,t)
inherit(P.dn,t)
inherit(H.cD,t)
inherit(H.bh,t)
inherit(H.iL,t)
inherit(H.ba,t)
inherit(H.ih,t)
inherit(H.bb,t)
inherit(H.iK,t)
inherit(H.i8,t)
inherit(H.bs,t)
inherit(H.hE,t)
inherit(H.ax,t)
inherit(H.at,t)
inherit(H.b9,t)
inherit(H.h4,t)
inherit(H.hL,t)
inherit(P.bk,t)
inherit(H.e_,t)
inherit(H.aN,t)
inherit(H.ao,t)
inherit(H.fk,t)
inherit(H.fm,t)
inherit(P.ia,t)
inherit(P.ca,t)
inherit(P.K,t)
inherit(P.dV,t)
inherit(P.c1,t)
inherit(P.hp,t)
inherit(P.bf,t)
inherit(P.j8,t)
inherit(P.hd,t)
inherit(P.iI,t)
inherit(P.cd,t)
inherit(P.bZ,t)
inherit(P.z,t)
inherit(P.iJ,t)
inherit(P.iF,t)
inherit(P.cu,t)
inherit(P.cv,t)
inherit(P.aF,t)
inherit(P.L,t)
inherit(P.bj,t)
inherit(P.a0,t)
inherit(P.aX,t)
inherit(P.dM,t)
inherit(P.im,t)
inherit(P.eZ,t)
inherit(P.ey,t)
inherit(P.c,t)
inherit(P.az,t)
inherit(P.aL,t)
inherit(P.c0,t)
inherit(P.m,t)
inherit(P.c2,t)
inherit(W.en,t)
inherit(W.i7,t)
inherit(W.cc,t)
inherit(W.C,t)
inherit(W.dD,t)
inherit(W.cf,t)
inherit(W.j0,t)
inherit(W.cE,t)
inherit(W.ic,t)
inherit(W.dC,t)
inherit(W.iV,t)
inherit(W.e0,t)
inherit(P.i_,t)
inherit(P.iN,t)
inherit(G.fz,t)
inherit(L.bg,t)
inherit(L.ec,t)
inherit(L.ct,t)
inherit(L.hf,t)
inherit(G.ek,t)
inherit(G.f_,t)
inherit(G.eR,t)
inherit(G.f2,t)
inherit(G.dR,t)
inherit(G.dQ,t)
inherit(G.A,t)
inherit(G.aM,t)
inherit(G.dP,t)
inherit(G.c5,t)
inherit(R.eg,t)
inherit(R.hl,t)
inherit(T.aA,t)
inherit(T.E,t)
inherit(T.dG,t)
inherit(T.as,t)
inherit(T.n,t)
inherit(T.Y,t)
t=J.a
inherit(J.fd,t)
inherit(J.fe,t)
inherit(J.bP,t)
inherit(J.aZ,t)
inherit(J.bo,t)
inherit(J.b_,t)
inherit(H.bT,t)
inherit(H.bp,t)
inherit(W.h,t)
inherit(W.a8,t)
inherit(W.cs,t)
inherit(W.ei,t)
inherit(W.B,t)
inherit(W.cI,t)
inherit(W.ep,t)
inherit(W.eq,t)
inherit(W.er,t)
inherit(W.cz,t)
inherit(W.cA,t)
inherit(W.cB,t)
inherit(W.cT,t)
inherit(W.eu,t)
inherit(W.i,t)
inherit(W.cS,t)
inherit(W.ab,t)
inherit(W.f3,t)
inherit(W.cX,t)
inherit(W.bl,t)
inherit(W.bm,t)
inherit(W.fq,t)
inherit(W.fw,t)
inherit(W.ac,t)
inherit(W.cR,t)
inherit(W.fI,t)
inherit(W.dB,t)
inherit(W.cW,t)
inherit(W.fR,t)
inherit(W.bu,t)
inherit(W.ad,t)
inherit(W.cP,t)
inherit(W.ar,t)
inherit(W.dH,t)
inherit(W.af,t)
inherit(W.cO,t)
inherit(W.ag,t)
inherit(W.hn,t)
inherit(W.a2,t)
inherit(W.cN,t)
inherit(W.hD,t)
inherit(W.ai,t)
inherit(W.cY,t)
inherit(W.hI,t)
inherit(W.dS,t)
inherit(W.hQ,t)
inherit(W.hV,t)
inherit(W.i9,t)
inherit(W.cM,t)
inherit(W.d1,t)
inherit(W.d0,t)
inherit(W.cV,t)
inherit(W.d_,t)
inherit(W.cZ,t)
inherit(W.j6,t)
inherit(W.j7,t)
inherit(P.ay,t)
inherit(P.cL,t)
inherit(P.aB,t)
inherit(P.cQ,t)
inherit(P.fX,t)
inherit(P.fY,t)
inherit(P.h2,t)
inherit(P.cJ,t)
inherit(P.aC,t)
inherit(P.cU,t)
inherit(P.hU,t)
inherit(P.ee,t)
inherit(P.h7,t)
inherit(P.h8,t)
inherit(P.j5,t)
inherit(P.cK,t)
t=J.bP
inherit(J.fV,t)
inherit(J.b6,t)
inherit(J.b0,t)
inherit(J.k_,J.aZ)
t=J.bo
inherit(J.dq,t)
inherit(J.dp,t)
t=P.W
inherit(H.d,t)
inherit(H.du,t)
inherit(H.dU,t)
t=H.d
inherit(H.b2,t)
inherit(H.fl,t)
inherit(H.ex,H.du)
t=P.dn
inherit(H.fr,t)
inherit(H.hX,t)
t=H.b2
inherit(H.bQ,t)
inherit(P.fn,t)
inherit(P.iG,t)
t=H.bh
inherit(H.jK,t)
inherit(H.jL,t)
inherit(H.iE,t)
inherit(H.ii,t)
inherit(H.fa,t)
inherit(H.fb,t)
inherit(H.iM,t)
inherit(H.hF,t)
inherit(H.hG,t)
inherit(H.jM,t)
inherit(H.ju,t)
inherit(H.jv,t)
inherit(H.jw,t)
inherit(H.jx,t)
inherit(H.jy,t)
inherit(H.hz,t)
inherit(H.ff,t)
inherit(H.jq,t)
inherit(H.jr,t)
inherit(H.js,t)
inherit(P.i4,t)
inherit(P.i3,t)
inherit(P.i5,t)
inherit(P.i6,t)
inherit(P.f1,t)
inherit(P.f0,t)
inherit(P.io,t)
inherit(P.iw,t)
inherit(P.is,t)
inherit(P.it,t)
inherit(P.iu,t)
inherit(P.iq,t)
inherit(P.iv,t)
inherit(P.ip,t)
inherit(P.iz,t)
inherit(P.iA,t)
inherit(P.iy,t)
inherit(P.ix,t)
inherit(P.hs,t)
inherit(P.ht,t)
inherit(P.hq,t)
inherit(P.hr,t)
inherit(P.j9,t)
inherit(P.jd,t)
inherit(P.iQ,t)
inherit(P.iP,t)
inherit(P.iR,t)
inherit(P.fs,t)
inherit(P.ev,t)
inherit(P.ew,t)
inherit(W.je,t)
inherit(W.ho,t)
inherit(W.hY,t)
inherit(W.il,t)
inherit(W.fK,t)
inherit(W.fJ,t)
inherit(W.iX,t)
inherit(W.iY,t)
inherit(W.j3,t)
inherit(W.j4,t)
inherit(P.i1,t)
inherit(P.jf,t)
inherit(P.jg,t)
inherit(P.jh,t)
inherit(B.jF,t)
inherit(B.jG,t)
inherit(B.jH,t)
inherit(B.jI,t)
inherit(B.jJ,t)
inherit(B.fN,t)
inherit(B.fO,t)
inherit(B.fP,t)
inherit(B.fQ,t)
inherit(Y.f7,t)
inherit(Y.f8,t)
inherit(Y.f6,t)
inherit(D.fp,t)
inherit(D.fo,t)
inherit(A.jp,t)
inherit(X.jB,t)
inherit(X.jA,t)
inherit(X.jC,t)
t=H.i8
inherit(H.bx,t)
inherit(H.cg,t)
t=P.bk
inherit(H.dE,t)
inherit(H.fg,t)
inherit(H.hP,t)
inherit(H.hN,t)
inherit(H.ej,t)
inherit(H.ha,t)
inherit(P.cr,t)
inherit(P.br,t)
inherit(P.am,t)
inherit(P.v,t)
inherit(P.c6,t)
inherit(P.aq,t)
inherit(P.V,t)
inherit(P.eo,t)
t=H.hz
inherit(H.hk,t)
inherit(H.bE,t)
inherit(H.i2,P.cr)
t=H.bp
inherit(H.fA,t)
inherit(H.dx,t)
t=H.dx
inherit(H.bV,t)
inherit(H.bU,t)
inherit(H.bW,H.bV)
inherit(H.dy,H.bW)
inherit(H.bX,H.bU)
inherit(H.dz,H.bX)
t=H.dy
inherit(H.dw,t)
inherit(H.fB,t)
t=H.dz
inherit(H.fC,t)
inherit(H.fD,t)
inherit(H.fE,t)
inherit(H.fF,t)
inherit(H.fG,t)
inherit(H.dA,t)
inherit(H.fH,t)
t=P.ia
inherit(P.c8,t)
inherit(P.j1,t)
inherit(P.iO,P.j8)
inherit(P.dY,H.ao)
inherit(P.hc,P.hd)
inherit(P.iD,P.hc)
inherit(P.iH,P.iD)
inherit(P.ds,P.bZ)
inherit(P.fh,P.cu)
inherit(P.fi,P.cv)
t=P.a0
inherit(P.Q,t)
inherit(P.p,t)
t=P.am
inherit(P.dI,t)
inherit(P.f9,t)
t=W.h
inherit(W.u,t)
inherit(W.bI,t)
inherit(W.el,t)
inherit(W.eT,t)
inherit(W.bN,t)
inherit(W.bS,t)
inherit(W.h_,t)
inherit(W.dK,t)
inherit(W.he,t)
inherit(W.ae,t)
inherit(W.bH,t)
inherit(W.ah,t)
inherit(W.a3,t)
inherit(W.bG,t)
inherit(W.hS,t)
inherit(W.hW,t)
inherit(W.c7,t)
inherit(W.hZ,t)
inherit(W.b8,t)
inherit(W.iW,t)
t=W.u
inherit(W.a9,t)
inherit(W.aV,t)
inherit(W.aW,t)
inherit(W.cy,t)
inherit(W.id,t)
t=W.a9
inherit(W.k,t)
inherit(P.J,t)
t=W.k
inherit(W.eb,t)
inherit(W.ed,t)
inherit(W.aT,t)
inherit(W.aU,t)
inherit(W.cx,t)
inherit(W.eY,t)
inherit(W.cF,t)
inherit(W.bn,t)
inherit(W.bO,t)
inherit(W.bR,t)
inherit(W.hb,t)
inherit(W.dN,t)
inherit(W.hx,t)
inherit(W.hy,t)
inherit(W.c3,t)
inherit(W.iC,t)
inherit(W.bL,W.bI)
inherit(W.ef,W.bL)
inherit(W.bi,W.cI)
inherit(W.es,W.cA)
inherit(W.dl,W.cT)
inherit(W.et,W.dl)
inherit(W.aa,W.cs)
inherit(W.dj,W.cS)
inherit(W.eS,W.dj)
inherit(W.d6,W.cX)
inherit(W.bM,W.d6)
inherit(W.cG,W.aW)
inherit(W.cH,W.bN)
inherit(W.aO,W.i)
t=W.aO
inherit(W.b1,t)
inherit(W.R,t)
inherit(W.b5,t)
inherit(W.fx,W.bS)
inherit(W.dd,W.cR)
inherit(W.fy,W.dd)
inherit(W.Z,P.ds)
inherit(W.de,W.cW)
inherit(W.bY,W.de)
t=W.bu
inherit(W.fU,t)
inherit(W.h9,t)
inherit(W.hK,t)
inherit(W.df,W.cP)
inherit(W.fW,W.df)
inherit(W.fZ,W.ar)
inherit(W.bK,W.bH)
inherit(W.hg,W.bK)
inherit(W.db,W.cO)
inherit(W.hi,W.db)
inherit(W.d7,W.cN)
inherit(W.hB,W.d7)
inherit(W.bJ,W.bG)
inherit(W.hC,W.bJ)
inherit(W.dh,W.cY)
inherit(W.hH,W.dh)
inherit(W.bv,W.bR)
inherit(W.b7,W.R)
inherit(W.di,W.cM)
inherit(W.dW,W.di)
inherit(W.dg,W.d1)
inherit(W.ib,W.dg)
inherit(W.ie,W.cB)
inherit(W.d2,W.d0)
inherit(W.iB,W.d2)
inherit(W.dk,W.cV)
inherit(W.dZ,W.dk)
inherit(W.d9,W.d_)
inherit(W.iZ,W.d9)
inherit(W.d5,W.cZ)
inherit(W.j_,W.d5)
inherit(W.ig,W.i7)
inherit(W.ij,P.c1)
inherit(W.c9,W.ij)
inherit(W.ik,P.hp)
inherit(W.j2,W.cf)
inherit(P.i0,P.i_)
inherit(P.M,P.iN)
t=P.J
inherit(P.aJ,t)
inherit(P.aS,t)
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
inherit(P.eP,t)
inherit(P.eQ,t)
inherit(P.eU,t)
inherit(P.ft,t)
inherit(P.fu,t)
inherit(P.fS,t)
inherit(P.c_,t)
inherit(P.hw,t)
inherit(P.hT,t)
inherit(P.cb,t)
inherit(P.iS,t)
inherit(P.iT,t)
inherit(P.iU,t)
t=P.aJ
inherit(P.ea,t)
inherit(P.eX,t)
inherit(P.an,t)
inherit(P.f4,t)
inherit(P.hv,t)
inherit(P.dO,t)
inherit(P.hR,t)
inherit(P.d4,P.cL)
inherit(P.fj,P.d4)
inherit(P.dc,P.cQ)
inherit(P.fL,P.dc)
inherit(P.h3,P.an)
inherit(P.da,P.cJ)
inherit(P.hu,P.da)
t=P.dO
inherit(P.hA,t)
inherit(P.c4,t)
inherit(P.d8,P.cU)
inherit(P.hJ,P.d8)
inherit(P.d3,P.cK)
inherit(P.hj,P.d3)
t=G.fz
inherit(G.hh,t)
inherit(G.dT,t)
inherit(G.dv,t)
inherit(G.h6,t)
inherit(A.h5,t)
inherit(A.bt,t)
t=G.hh
inherit(G.eh,t)
inherit(A.bq,t)
inherit(B.fM,G.eh)
t=G.dT
inherit(G.fv,t)
inherit(G.fT,t)
t=G.c5
inherit(G.hO,t)
inherit(G.f5,t)
inherit(R.dJ,A.h5)
inherit(R.hm,R.hl)
mixin(H.bU,P.z)
mixin(H.bV,P.z)
mixin(H.bW,H.cD)
mixin(H.bX,H.cD)
mixin(P.bZ,P.z)
mixin(W.bG,P.z)
mixin(W.bH,P.z)
mixin(W.bI,P.z)
mixin(W.bJ,W.C)
mixin(W.bK,W.C)
mixin(W.bL,W.C)
mixin(W.cI,W.en)
mixin(W.d1,P.z)
mixin(W.cO,P.z)
mixin(W.cV,P.z)
mixin(W.cW,P.z)
mixin(W.cX,P.z)
mixin(W.cY,P.z)
mixin(W.cZ,P.z)
mixin(W.d_,P.z)
mixin(W.d0,P.z)
mixin(W.cM,P.z)
mixin(W.cN,P.z)
mixin(W.cP,P.z)
mixin(W.cR,P.z)
mixin(W.cS,P.z)
mixin(W.cT,P.z)
mixin(W.d2,W.C)
mixin(W.de,W.C)
mixin(W.df,W.C)
mixin(W.dd,W.C)
mixin(W.di,W.C)
mixin(W.dj,W.C)
mixin(W.dk,W.C)
mixin(W.dl,W.C)
mixin(W.d5,W.C)
mixin(W.d6,W.C)
mixin(W.d7,W.C)
mixin(W.d9,W.C)
mixin(W.db,W.C)
mixin(W.dg,W.C)
mixin(W.dh,W.C)
mixin(P.cL,P.z)
mixin(P.cJ,P.z)
mixin(P.cQ,P.z)
mixin(P.cU,P.z)
mixin(P.d4,W.C)
mixin(P.dc,W.C)
mixin(P.d8,W.C)
mixin(P.da,W.C)
mixin(P.cK,P.z)
mixin(P.d3,W.C)})();(function constants(){C.q=W.aT.prototype
C.K=W.aU.prototype
C.w=W.bi.prototype
C.r=W.cx.prototype
C.L=W.cz.prototype
C.M=W.cF.prototype
C.k=W.cG.prototype
C.y=W.cH.prototype
C.N=J.a.prototype
C.a=J.aZ.prototype
C.l=J.dp.prototype
C.b=J.dq.prototype
C.c=J.bo.prototype
C.i=J.b_.prototype
C.U=J.b0.prototype
C.j=H.dw.prototype
C.C=W.bY.prototype
C.D=J.fV.prototype
C.E=W.dH.prototype
C.J=W.dN.prototype
C.v=J.b6.prototype
C.aw=W.b7.prototype
C.ax=W.c7.prototype
C.d=new P.iO()
C.x=new P.aX(0)
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
C.z=function(hooks) { return hooks; }

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
C.A=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.V=new P.fh(null,null)
C.W=new P.fi(null)
C.X=H.x(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.m])
C.Y=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.B=makeConstList([])
C.t=H.x(makeConstList(["bind","if","ref","repeat","syntax"]),[P.m])
C.u=H.x(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.m])
C.Z=new G.A("vec3","vertex btangents",0)
C.e=new G.A("vec3","",0)
C.a_=new G.A("vec4","delta from light",0)
C.p=new G.A("","",0)
C.F=new G.A("vec3","vertex coordinates",0)
C.a0=new G.A("vec3","vertex binormals",0)
C.G=new G.A("vec4","for wireframe",0)
C.a1=new G.A("vec4","per vertex color",0)
C.a2=new G.A("float","for normal maps",0)
C.m=new G.A("mat4","",0)
C.a4=new G.A("mat4","",4)
C.a3=new G.A("mat4","",128)
C.f=new G.A("float","",0)
C.a5=new G.A("float","",4)
C.a6=new G.A("float","depth for shadowmaps",0)
C.h=new G.A("sampler2D","",0)
C.a7=new G.A("float","for bump maps",0)
C.a8=new G.A("vec2","texture uvs",0)
C.a9=new G.A("float","time since program start in sec",0)
C.n=new G.A("vec2","",0)
C.aa=new G.A("samplerCube","",0)
C.o=new G.A("vec4","",0)
C.ab=new G.A("vec3","vertex normals",0)
C.ac=new G.A("sampler2DShadow","",0)
C.H=new G.A("vec3","per vertex color",0)
C.I=new G.A("mat3","",0)
C.ad=new G.A("vec3","vertex tangents",0)
C.ae=H.N("oy")
C.af=H.N("oz")
C.ag=H.N("eW")
C.ah=H.N("oA")
C.ai=H.N("oB")
C.aj=H.N("kZ")
C.ak=H.N("oC")
C.al=H.N("l1")
C.am=H.N("aL")
C.an=H.N("m")
C.ao=H.N("ln")
C.ap=H.N("lo")
C.aq=H.N("oE")
C.ar=H.N("lp")
C.as=H.N("aF")
C.at=H.N("Q")
C.au=H.N("p")
C.av=H.N("a0")})();(function staticFields(){$.l5="$cachedFunction"
$.l6="$cachedInvocation"
$.kK=null
$.kI=null
$.kd=!1
$.kh=null
$.lA=null
$.lT=null
$.jk=null
$.jt=null
$.ki=null
$.by=null
$.ch=null
$.ci=null
$.ke=!1
$.w=C.d
$.kX=0
$.aI=null
$.jX=null
$.kW=null
$.kV=null
$.kT=null
$.kS=null
$.kR=null
$.kQ=null
$.o4=0
$.o5=0
$.km=0
$.lR=0
$.cm=0
$.cn=0
$.ov=!1
$.lM=0})();(function lazyInitializers(){lazy($,"kP","$get$kP",function(){return H.lO("_$dart_dartClosure")})
lazy($,"k1","$get$k1",function(){return H.lO("_$dart_js")})
lazy($,"l_","$get$l_",function(){return H.nd()})
lazy($,"l0","$get$l0",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kX
$.kX=t+1
t="expando$key$"+t}return new P.ey(null,t,[P.p])})
lazy($,"lc","$get$lc",function(){return H.aD(H.hM({
toString:function(){return"$receiver$"}}))})
lazy($,"ld","$get$ld",function(){return H.aD(H.hM({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"le","$get$le",function(){return H.aD(H.hM(null))})
lazy($,"lf","$get$lf",function(){return H.aD(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"lj","$get$lj",function(){return H.aD(H.hM(void 0))})
lazy($,"lk","$get$lk",function(){return H.aD(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"lh","$get$lh",function(){return H.aD(H.li(null))})
lazy($,"lg","$get$lg",function(){return H.aD(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"lm","$get$lm",function(){return H.aD(H.li(void 0))})
lazy($,"ll","$get$ll",function(){return H.aD(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"kb","$get$kb",function(){return P.nB()})
lazy($,"kY","$get$kY",function(){return P.nH(null,P.aL)})
lazy($,"cj","$get$cj",function(){return[]})
lazy($,"kO","$get$kO",function(){return{}})
lazy($,"lt","$get$lt",function(){return P.k3(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"kc","$get$kc",function(){return P.I()})
lazy($,"jj","$get$jj",function(){return P.dr(P.p,P.aF)})
lazy($,"cl","$get$cl",function(){return P.dr(P.m,P.aF)})
lazy($,"l9","$get$l9",function(){return new G.dR(1281,0,4294967295)})
lazy($,"kF","$get$kF",function(){return new G.dQ(1281,1281,1281)})
lazy($,"a_","$get$a_",function(){return P.aK(["cBlendEquation",C.p,"cDepthWrite",C.p,"cDepthTest",C.p,"cStencilFunc",C.p,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColors",C.H,"aColorAlpha",C.a1,"aPosition",C.F,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.G,"aPointSize",C.f,"aBoneIndex",C.o,"aBoneWeight",C.o,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.o,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.H,"vTexUV",C.n,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.F,"vPositionFromLight",C.a_,"vCenter",C.G,"vDepth",C.a6,"uTransformationMatrix",C.m,"uModelMatrix",C.m,"uNormalMatrix",C.I,"uConvolutionMatrix",C.I,"uPerspectiveViewMatrix",C.m,"uLightPerspectiveViewMatrix",C.m,"uShadowMap",C.ac,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.aa,"uAnimationTable",C.h,"uTime",C.a9,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.n,"uCenter2",C.n,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.o,"uColorAlpha2",C.o,"uEyePosition",C.e,"uMaterial",C.m,"uRange",C.n,"uDirection",C.n,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.f,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2])})
lazy($,"lb","$get$lb",function(){var t=new G.dP(!1,!1,!1,!0,1,9729,9729)
t.d=!1
t.b=!0
t.f=9728
t.r=9728
return t})
lazy($,"kN","$get$kN",function(){return T.nz(1,1,0)})
lazy($,"lV","$get$lV",function(){var t=new G.aM("SolidColor",null,[],[],[],[],0,P.I())
t.aP(["aPosition"])
t.ai(["uPerspectiveViewMatrix","uModelMatrix"])
t.aR(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"lU","$get$lU",function(){var t=new G.aM("SolidColorF",null,[],[],[],[],0,P.I())
t.ai(["uColor"])
t.aR(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"lJ","$get$lJ",function(){var t=new G.aM("FixedVertexColorV",null,[],[],[],[],0,P.I())
t.aP(["aPosition"])
t.ai(["uPerspectiveViewMatrix","uModelMatrix"])
t.az(["vColor"])
t.bN(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vColor = ColorFromPosition(aPosition);"],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return t})
lazy($,"lI","$get$lI",function(){var t=new G.aM("FixedVertexColorF",null,[],[],[],[],0,P.I())
t.az(["vColor"])
t.aR(["oFragColor = vec4( vColor, 1.0 );"])
return t})
lazy($,"lC","$get$lC",function(){var t=new G.aM("AnimationV",null,[],[],[],[],0,P.I())
t.aP(["aPosition","aTexUV","aBoneIndex","aBoneWeight"])
t.az(["vTexUV"])
t.ai(["uPerspectiveViewMatrix","uModelMatrix","uAnimationTable","uTime"])
t.bM(["mat4 GetBoneMatrix(sampler2D table, int index, int time) {\n    vec4 v1 = texelFetch(table, ivec2(index * 4 + 0, time), 0);\n    vec4 v2 = texelFetch(table, ivec2(index * 4 + 1, time), 0);\n    vec4 v3 = texelFetch(table, ivec2(index * 4 + 2, time), 0);\n    vec4 v4 = texelFetch(table, ivec2(index * 4 + 3, time), 0);\n    return mat4(v1, v2, v3, v4);\n    //return uBoneMatrices[index];\n}\n\nmat4 adjustMatrix(sampler2D table, vec4 weights, ivec4 indices, int time) {\n    return weights.x * GetBoneMatrix(table, indices.x, time) +\n           weights.y * GetBoneMatrix(table, indices.y, time) +\n           weights.z * GetBoneMatrix(table, indices.z, time) +\n           weights.w * GetBoneMatrix(table, indices.w, time);\n}\n\nvoid main() {\n   mat4 skinMat = uModelMatrix * adjustMatrix(uAnimationTable,\n                                              aBoneWeight,\n                                              ivec4(aBoneIndex),\n                                              int(uTime));\n   vec4 pos = skinMat * vec4(aPosition, 1.0);\n   // vPosition = pos.xyz;\n   // This is not quite accurate\n   //vNormal = normalize(mat3(skinMat) * aNormal);\n   gl_Position = uPerspectiveViewMatrix * pos;\n\n   vTexUV = aTexUV;\n}\n\n"])
return t})
lazy($,"lB","$get$lB",function(){var t=new G.aM("AnimationV",null,[],[],[],[],0,P.I())
t.az(["vTexUV"])
t.ai(["uTexture"])
t.bM(["void main() {\n  oFragColor = texture(uTexture, vTexUV);\n}\n"])
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
mangledGlobalNames:{p:"int",Q:"double",a0:"num",m:"String",aF:"bool",aL:"Null",c:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.u},{func:1,ret:P.aF,args:[W.a9,P.m,P.m,W.cc]},{func:1,v:true,args:[P.o],opt:[P.c0]},{func:1,v:true,args:[W.i]},{func:1,ret:P.p,args:[P.L,P.L]},{func:1,ret:P.m,args:[W.h]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmapRenderingContext:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bT,ArrayBufferView:H.bp,DataView:H.fA,Float32Array:H.dw,Float64Array:H.fB,Int16Array:H.fC,Int32Array:H.fD,Int8Array:H.fE,Uint16Array:H.fF,Uint32Array:H.fG,Uint8ClampedArray:H.dA,CanvasPixelArray:H.dA,Uint8Array:H.fH,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLKeygenElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMenuElement:W.k,HTMLMenuItemElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,HTMLAnchorElement:W.eb,HTMLAreaElement:W.ed,AudioTrack:W.a8,AudioTrackList:W.ef,Blob:W.cs,HTMLBodyElement:W.aT,HTMLCanvasElement:W.aU,CanvasRenderingContext2D:W.ei,CDATASection:W.aV,CharacterData:W.aV,Comment:W.aV,ProcessingInstruction:W.aV,Text:W.aV,CompositorWorker:W.el,CSSCharsetRule:W.B,CSSFontFaceRule:W.B,CSSGroupingRule:W.B,CSSImportRule:W.B,CSSKeyframeRule:W.B,MozCSSKeyframeRule:W.B,WebKitCSSKeyframeRule:W.B,CSSKeyframesRule:W.B,MozCSSKeyframesRule:W.B,WebKitCSSKeyframesRule:W.B,CSSMediaRule:W.B,CSSNamespaceRule:W.B,CSSPageRule:W.B,CSSRule:W.B,CSSStyleRule:W.B,CSSSupportsRule:W.B,CSSViewportRule:W.B,CSSStyleDeclaration:W.bi,MSStyleCSSProperties:W.bi,CSS2Properties:W.bi,DataTransferItemList:W.ep,DeviceAcceleration:W.eq,HTMLDivElement:W.cx,XMLDocument:W.aW,Document:W.aW,DocumentFragment:W.cy,ShadowRoot:W.cy,DOMException:W.er,DOMImplementation:W.cz,DOMPoint:W.es,DOMPointReadOnly:W.cA,DOMRectReadOnly:W.cB,DOMStringList:W.et,DOMTokenList:W.eu,Element:W.a9,AnimationEvent:W.i,AnimationPlayerEvent:W.i,ApplicationCacheErrorEvent:W.i,AutocompleteErrorEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceLightEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,GamepadEvent:W.i,GeofencingEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RelatedEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCIceCandidateEvent:W.i,RTCPeerConnectionIceEvent:W.i,SecurityPolicyViolationEvent:W.i,ServicePortConnectEvent:W.i,ServiceWorkerMessageEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.aa,FileList:W.eS,FileWriter:W.eT,HTMLFormElement:W.eY,Gamepad:W.ab,HTMLHeadElement:W.cF,History:W.f3,HTMLCollection:W.bM,HTMLFormControlsCollection:W.bM,HTMLOptionsCollection:W.bM,HTMLDocument:W.cG,XMLHttpRequest:W.cH,XMLHttpRequestUpload:W.bN,XMLHttpRequestEventTarget:W.bN,ImageBitmap:W.bl,ImageData:W.bm,HTMLImageElement:W.bn,HTMLInputElement:W.bO,KeyboardEvent:W.b1,Location:W.fq,HTMLAudioElement:W.bR,HTMLMediaElement:W.bR,MediaList:W.fw,MIDIOutput:W.fx,MIDIInput:W.bS,MIDIPort:W.bS,MimeType:W.ac,MimeTypeArray:W.fy,PointerEvent:W.R,MouseEvent:W.R,DragEvent:W.R,Navigator:W.fI,Attr:W.u,Node:W.u,NodeIterator:W.dB,NodeList:W.bY,RadioNodeList:W.bY,Path2D:W.fR,Perspective:W.fU,Plugin:W.ad,PluginArray:W.fW,PositionValue:W.fZ,PresentationConnection:W.h_,Range:W.dH,Rotation:W.h9,RTCDataChannel:W.dK,DataChannel:W.dK,HTMLSelectElement:W.hb,SharedWorker:W.he,SourceBuffer:W.ae,SourceBufferList:W.hg,SpeechGrammar:W.af,SpeechGrammarList:W.hi,SpeechRecognitionResult:W.ag,Storage:W.hn,CSSStyleSheet:W.a2,StyleSheet:W.a2,CalcLength:W.ar,KeywordValue:W.ar,LengthValue:W.ar,NumberValue:W.ar,SimpleLength:W.ar,TransformValue:W.ar,StyleValue:W.ar,HTMLTableElement:W.dN,HTMLTableRowElement:W.hx,HTMLTableSectionElement:W.hy,HTMLTemplateElement:W.c3,TextTrack:W.ah,TextTrackCue:W.a3,VTTCue:W.a3,TextTrackCueList:W.hB,TextTrackList:W.hC,TimeRanges:W.hD,Touch:W.ai,TouchEvent:W.b5,TouchList:W.hH,TrackDefaultList:W.hI,Matrix:W.bu,Skew:W.bu,TransformComponent:W.bu,Translation:W.hK,TreeWalker:W.dS,CompositionEvent:W.aO,FocusEvent:W.aO,TextEvent:W.aO,SVGZoomEvent:W.aO,UIEvent:W.aO,URL:W.hQ,HTMLVideoElement:W.bv,VideoTrackList:W.hS,VTTRegionList:W.hV,WebSocket:W.hW,WheelEvent:W.b7,Window:W.c7,DOMWindow:W.c7,Worker:W.hZ,CompositorWorkerGlobalScope:W.b8,DedicatedWorkerGlobalScope:W.b8,ServiceWorkerGlobalScope:W.b8,SharedWorkerGlobalScope:W.b8,WorkerGlobalScope:W.b8,ClientRect:W.i9,ClientRectList:W.dW,DOMRectList:W.dW,CSSRuleList:W.ib,DocumentType:W.id,DOMRect:W.ie,GamepadList:W.iB,HTMLFrameSetElement:W.iC,NamedNodeMap:W.dZ,MozNamedAttrMap:W.dZ,ServiceWorker:W.iW,SpeechRecognitionResultList:W.iZ,StyleSheetList:W.j_,WorkerLocation:W.j6,WorkerNavigator:W.j7,SVGAElement:P.ea,SVGAnimateElement:P.aS,SVGAnimateMotionElement:P.aS,SVGAnimateTransformElement:P.aS,SVGAnimationElement:P.aS,SVGSetElement:P.aS,SVGFEBlendElement:P.ez,SVGFEColorMatrixElement:P.eA,SVGFEComponentTransferElement:P.eB,SVGFECompositeElement:P.eC,SVGFEConvolveMatrixElement:P.eD,SVGFEDiffuseLightingElement:P.eE,SVGFEDisplacementMapElement:P.eF,SVGFEFloodElement:P.eG,SVGFEGaussianBlurElement:P.eH,SVGFEImageElement:P.eI,SVGFEMergeElement:P.eJ,SVGFEMorphologyElement:P.eK,SVGFEOffsetElement:P.eL,SVGFEPointLightElement:P.eM,SVGFESpecularLightingElement:P.eN,SVGFESpotLightElement:P.eO,SVGFETileElement:P.eP,SVGFETurbulenceElement:P.eQ,SVGFilterElement:P.eU,SVGForeignObjectElement:P.eX,SVGCircleElement:P.an,SVGEllipseElement:P.an,SVGLineElement:P.an,SVGPathElement:P.an,SVGPolygonElement:P.an,SVGPolylineElement:P.an,SVGGeometryElement:P.an,SVGClipPathElement:P.aJ,SVGDefsElement:P.aJ,SVGGElement:P.aJ,SVGSwitchElement:P.aJ,SVGGraphicsElement:P.aJ,SVGImageElement:P.f4,SVGLength:P.ay,SVGLengthList:P.fj,SVGMarkerElement:P.ft,SVGMaskElement:P.fu,SVGNumber:P.aB,SVGNumberList:P.fL,SVGPatternElement:P.fS,SVGPoint:P.fX,SVGPointList:P.fY,SVGRect:P.h2,SVGRectElement:P.h3,SVGScriptElement:P.c_,SVGStringList:P.hu,SVGDescElement:P.J,SVGDiscardElement:P.J,SVGFEDistantLightElement:P.J,SVGFEFuncAElement:P.J,SVGFEFuncBElement:P.J,SVGFEFuncGElement:P.J,SVGFEFuncRElement:P.J,SVGFEMergeNodeElement:P.J,SVGMetadataElement:P.J,SVGStopElement:P.J,SVGStyleElement:P.J,SVGTitleElement:P.J,SVGComponentTransferFunctionElement:P.J,SVGElement:P.J,SVGSVGElement:P.hv,SVGSymbolElement:P.hw,SVGTextContentElement:P.dO,SVGTextPathElement:P.hA,SVGTSpanElement:P.c4,SVGTextElement:P.c4,SVGTextPositioningElement:P.c4,SVGTransform:P.aC,SVGTransformList:P.hJ,SVGUseElement:P.hR,SVGViewElement:P.hT,SVGViewSpec:P.hU,SVGLinearGradientElement:P.cb,SVGRadialGradientElement:P.cb,SVGGradientElement:P.cb,SVGCursorElement:P.iS,SVGFEDropShadowElement:P.iT,SVGMPathElement:P.iU,AudioBuffer:P.ee,WebGLRenderingContext:P.h7,WebGL2RenderingContext:P.h8,WebGL2RenderingContextBase:P.j5,SQLResultSetRowList:P.hj})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageBitmap:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.dx.$nativeSuperclassTag="ArrayBufferView"
H.bV.$nativeSuperclassTag="ArrayBufferView"
H.bW.$nativeSuperclassTag="ArrayBufferView"
H.dy.$nativeSuperclassTag="ArrayBufferView"
H.bU.$nativeSuperclassTag="ArrayBufferView"
H.bX.$nativeSuperclassTag="ArrayBufferView"
H.dz.$nativeSuperclassTag="ArrayBufferView"
W.bI.$nativeSuperclassTag="EventTarget"
W.bL.$nativeSuperclassTag="EventTarget"
W.bH.$nativeSuperclassTag="EventTarget"
W.bK.$nativeSuperclassTag="EventTarget"
W.bG.$nativeSuperclassTag="EventTarget"
W.bJ.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.lW(X.lD(),b)},[])
else (function(b){H.lW(X.lD(),b)})([])})})()