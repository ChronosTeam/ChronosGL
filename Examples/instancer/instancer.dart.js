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
a[c]=function(){a[c]=function(){H.nc(b)}
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
return d?function(e){if(t===null)t=H.jm(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jm(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jm(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={j7:function j7(a){this.a=a},
mi:function(a,b,c,d){var t=new H.fO(a,b,c,[d])
t.dn(a,b,c,d)
return t},
jc:function(a,b,c,d){if(!!a.$isc)return new H.e2(a,b,[c,d])
return new H.d3(a,b,[c,d])},
eE:function(){return new P.ar("No element")},
m2:function(){return new P.ar("Too many elements")},
k6:function(){return new P.ar("Too few elements")},
dl:function(a,b,c,d){if(c-b<=32)H.mh(a,b,c,d)
else H.mg(a,b,c,d)},
mh:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.Z(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.al(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mg:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.I(t+1,6)
r=a3+s
q=a4-s
p=C.b.I(a3+a4,2)
o=p-s
n=p+s
t=J.Z(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.al(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.al(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.al(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.al(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.al(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.al(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.al(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.al(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.al(a5.$2(j,i),0)){h=i
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
H.dl(a2,a3,g-2,a5)
H.dl(a2,f+2,a4,a5)
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
break}}H.dl(a2,g,f,a5)}else H.dl(a2,g,f,a5)},
c:function c(){},
b9:function b9(){},
fO:function fO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
d2:function d2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
d3:function d3(a,b,c){this.a=a
this.b=b
this.$ti=c},
e2:function e2(a,b,c){this.a=a
this.b=b
this.$ti=c},
eP:function eP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
by:function by(a,b,c){this.a=a
this.b=b
this.$ti=c},
du:function du(a,b,c){this.a=a
this.b=b
this.$ti=c},
hh:function hh(a,b,c){this.a=a
this.b=b
this.$ti=c},
cg:function cg(){},
dC:function(a,b){var t=a.af(b)
if(!u.globalState.d.cy)u.globalState.f.al()
return t},
iI:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
kY:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.t(s).$isb)throw H.e(P.jJ("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.hV(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$k4()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hx(P.jb(null,H.b1),0)
r=P.m
s.seH(new H.ae(0,null,null,null,null,null,0,[r,H.b0]))
s.seK(new H.ae(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.hU()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.lY,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.my)}if(u.globalState.x)return
s=u.globalState.a++
q=P.af(null,null,null,r)
p=new H.bb(0,null,!1)
o=new H.b0(s,new H.ae(0,null,null,null,null,null,0,[r,H.bb]),q,u.createNewIsolate(),p,new H.ao(H.iM()),new H.ao(H.iM()),!1,!1,[],P.af(null,null,null,null),null,null,!1,!0,P.af(null,null,null,null))
q.l(0,0)
o.bA(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bh(a,{func:1,args:[,]}))o.af(new H.iS(t,a))
else if(H.bh(a,{func:1,args:[,,]}))o.af(new H.iT(t,a))
else o.af(a)
u.globalState.f.al()},
my:function(a){var t=P.aS(["command","print","msg",a])
return new H.aj(!0,P.bT(null,P.m)).J(t)},
m_:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.m0()
return},
m0:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.r("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.r('Cannot extract URI from "'+t+'"'))},
lY:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b_(!0,[]).V(b.data)
s=J.Z(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.n_(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b_(!0,[]).V(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b_(!0,[]).V(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.m
j=P.af(null,null,null,k)
i=new H.bb(0,null,!1)
h=new H.b0(s,new H.ae(0,null,null,null,null,null,0,[k,H.bb]),j,u.createNewIsolate(),i,new H.ao(H.iM()),new H.ao(H.iM()),!1,!1,[],P.af(null,null,null,null),null,null,!1,!0,P.af(null,null,null,null))
j.l(0,0)
h.bA(0,i)
u.globalState.f.a.S(0,new H.b1(h,new H.eB(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.al()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lu(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.al()
break
case"close":u.globalState.ch.ak(0,$.$get$k5().h(0,a))
a.terminate()
u.globalState.f.al()
break
case"log":H.lX(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aS(["command","print","msg",t])
k=new H.aj(!0,P.bT(null,P.m)).J(k)
s.toString
self.postMessage(k)}else P.ak(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
lX:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aS(["command","log","msg",a])
r=new H.aj(!0,P.bT(null,P.m)).J(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.O(q)
t=H.aF(q)
s=P.cf(t)
throw H.e(s)}},
lZ:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kb=$.kb+("_"+s)
$.kc=$.kc+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.G(0,["spawned",new H.be(s,r),q,t.r])
r=new H.eC(a,b,c,d,t)
if(e){t.bU(q,q)
u.globalState.f.a.S(0,new H.b1(t,r,"start isolate"))}else r.$0()},
mj:function(a,b){var t=new H.fZ(!0,!1,null)
t.dq(a,b)
return t},
mz:function(a){return new H.b_(!0,[]).V(new H.aj(!1,P.bT(null,P.m)).J(a))},
iS:function iS(a,b){this.a=a
this.b=b},
iT:function iT(a,b){this.a=a
this.b=b},
hV:function hV(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
b0:function b0(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
hP:function hP(a,b){this.a=a
this.b=b},
hx:function hx(a,b){this.a=a
this.b=b},
hy:function hy(a){this.a=a},
b1:function b1(a,b,c){this.a=a
this.b=b
this.c=c},
hU:function hU(){},
eB:function eB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eC:function eC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hq:function hq(){},
be:function be(a,b){this.b=a
this.a=b},
hW:function hW(a,b){this.a=a
this.b=b},
bV:function bV(a,b,c){this.b=a
this.c=b
this.a=c},
bb:function bb(a,b,c){this.a=a
this.b=b
this.c=c},
fZ:function fZ(a,b,c){this.a=a
this.b=b
this.c=c},
h_:function h_(a,b){this.a=a
this.b=b},
h0:function h0(a,b){this.a=a
this.b=b},
ao:function ao(a){this.a=a},
aj:function aj(a,b){this.a=a
this.b=b},
b_:function b_(a,b){this.a=a
this.b=b},
mT:function(a){return u.types[a]},
n1:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.t(a).$iso},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aJ(a)
if(typeof t!=="string")throw H.e(H.S(a))
return t},
me:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fr(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aU:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
dh:function(a){var t,s,r,q,p,o,n,m
t=J.t(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.O||!!J.t(a).$isaW){p=C.C(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aK(q,0)===36)q=C.i.d2(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dF(H.iv(a),0,null),u.mangledGlobalNames)},
fn:function(a){return"Instance of '"+H.dh(a)+"'"},
P:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mc:function(a){return a.b?H.P(a).getUTCFullYear()+0:H.P(a).getFullYear()+0},
ma:function(a){return a.b?H.P(a).getUTCMonth()+1:H.P(a).getMonth()+1},
m6:function(a){return a.b?H.P(a).getUTCDate()+0:H.P(a).getDate()+0},
m7:function(a){return a.b?H.P(a).getUTCHours()+0:H.P(a).getHours()+0},
m9:function(a){return a.b?H.P(a).getUTCMinutes()+0:H.P(a).getMinutes()+0},
mb:function(a){return a.b?H.P(a).getUTCSeconds()+0:H.P(a).getSeconds()+0},
m8:function(a){return a.b?H.P(a).getUTCMilliseconds()+0:H.P(a).getMilliseconds()+0},
ka:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.S(a))
return a[b]},
M:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.an(!0,b,"index",null)
t=J.b3(a)
if(b<0||C.b.b8(b,t))return P.A(b,a,"index",null,t)
return P.fo(b,"index",null)},
S:function(a){return new P.an(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.df()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.kZ})
t.name=""}else t.toString=H.kZ
return t},
kZ:function(){return J.aJ(this.dartException)},
D:function(a){throw H.e(a)},
N:function(a){throw H.e(new P.U(a))},
at:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.h5(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
h6:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
km:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
j9:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eI(a,s,t?null:b.receiver)},
O:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.iU(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aT(r,16)&8191)===10)switch(q){case 438:return t.$1(H.j9(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.de(p,null))}}if(a instanceof TypeError){o=$.$get$kg()
n=$.$get$kh()
m=$.$get$ki()
l=$.$get$kj()
k=$.$get$kn()
j=$.$get$ko()
i=$.$get$kl()
$.$get$kk()
h=$.$get$kq()
g=$.$get$kp()
f=o.O(s)
if(f!=null)return t.$1(H.j9(s,f))
else{f=n.O(s)
if(f!=null){f.method="call"
return t.$1(H.j9(s,f))}else{f=m.O(s)
if(f==null){f=l.O(s)
if(f==null){f=k.O(s)
if(f==null){f=j.O(s)
if(f==null){f=i.O(s)
if(f==null){f=l.O(s)
if(f==null){f=h.O(s)
if(f==null){f=g.O(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.de(s,f==null?null:f.method))}}return t.$1(new H.h9(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dn()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.an(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dn()
return a},
aF:function(a){var t
if(a==null)return new H.dA(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dA(a,null)},
n5:function(a){if(a==null||typeof a!='object')return J.am(a)
else return H.aU(a)},
mR:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
n0:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dC(b,new H.iD(a))
case 1:return H.dC(b,new H.iE(a,d))
case 2:return H.dC(b,new H.iF(a,d,e))
case 3:return H.dC(b,new H.iG(a,d,e,f))
case 4:return H.dC(b,new H.iH(a,d,e,f,g))}throw H.e(P.cf("Unsupported number of arguments for wrapped closure"))},
bZ:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.n0)
a.$identity=t
return t},
lL:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.t(c).$isb){t.$reflectionInfo=c
r=H.me(t).r}else r=c
q=d?Object.create(new H.fF().constructor.prototype):Object.create(new H.bl(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.jS(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.mT,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jP:H.j2
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.jS(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
lI:function(a,b,c,d){var t=H.j2
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
jS:function(a,b,c){var t,s,r,q
if(c)return H.lK(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.lI(s,b==null?r!=null:b!==r,t,b)
return q},
lJ:function(a,b,c,d){var t,s
t=H.j2
s=H.jP
switch(b?-1:a){case 0:throw H.e(new H.fw("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
lK:function(a,b){var t,s,r,q
H.lH()
t=$.jO
if(t==null){t=H.jN("receiver")
$.jO=t}s=b.$stubName
r=b.length
q=a[s]
t=H.lJ(r,b==null?q!=null:b!==q,s,b)
return t},
jm:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.t(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.lL(a,b,t,!!d,e,f)},
j2:function(a){return a.a},
jP:function(a){return a.c},
lH:function(){var t=$.jQ
if(t==null){t=H.jN("self")
$.jQ=t}return t},
jN:function(a){var t,s,r,q,p
t=new H.bl("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
nr:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.au(a,"String"))},
Y:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.au(a,"double"))},
nq:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.au(a,"num"))},
mL:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.au(a,"bool"))},
n_:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.au(a,"int"))},
n7:function(a,b){throw H.e(H.au(a,b.substring(3)))},
n6:function(a,b){var t=J.Z(b)
throw H.e(H.jR(H.dh(a),t.bn(b,3,t.gj(b))))},
jp:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.t(a)[b])return a
H.n7(a,b)},
aH:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.t(a)[b]
else t=!0
if(t)return a
H.n6(a,b)},
np:function(a){if(a==null)return a
if(!!J.t(a).$isb)return a
throw H.e(H.au(a,"List"))},
kJ:function(a){var t=J.t(a)
return"$S" in t?t.$S():null},
bh:function(a,b){var t
if(a==null)return!1
t=H.kJ(a)
return t==null?!1:H.kS(t,b)},
nn:function(a,b){var t,s
if(a==null)return a
if($.jj)return a
$.jj=!0
try{if(H.bh(a,b))return a
t=H.aI(b,null)
s=H.au(a,t)
throw H.e(s)}finally{$.jj=!1}},
au:function(a,b){return new H.h7("type '"+H.dh(a)+"' is not a subtype of type '"+b+"'")},
jR:function(a,b){return new H.dQ("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
aw:function(a){if(!0===a)return!1
if(!!J.t(a).$isj5)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.au(a,"bool"))},
aE:function(a){throw H.e(new H.hk(a))},
d:function(a){if(H.aw(a))throw H.e(new P.c4(null))},
nc:function(a){throw H.e(new P.dU(a))},
iM:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
kN:function(a){return u.getIsolateTag(a)},
I:function(a){return new H.aB(a,null)},
C:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iv:function(a){if(a==null)return
return a.$ti},
kO:function(a,b){return H.jt(a["$as"+H.f(b)],H.iv(a))},
a_:function(a,b,c){var t,s
t=H.kO(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aG:function(a,b){var t,s
t=H.iv(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aI:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dF(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aI(t,b)
return H.mA(a,b)}return"unknown-reified-type"},
mA:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aI(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aI(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aI(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.mQ(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aI(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
dF:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bJ("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aI(o,c)}return p?"":"<"+s.k(0)+">"},
iw:function(a){var t,s
if(a instanceof H.b5){t=H.kJ(a)
if(t!=null)return H.aI(t,null)}s=J.t(a).constructor.name
if(a==null)return s
return s+H.dF(a.$ti,0,null)},
jt:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jq(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jq(a,null,b)
return b},
dD:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iv(a)
s=J.t(a)
if(s[b]==null)return!1
return H.kH(H.jt(s[d],t),c)},
dG:function(a,b,c,d){if(a==null)return a
if(H.dD(a,b,c,d))return a
throw H.e(H.jR(H.dh(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dF(c,0,null),u.mangledGlobalNames)))},
nk:function(a,b,c,d){if(a==null)return a
if(H.dD(a,b,c,d))return a
throw H.e(H.au(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dF(c,0,null),u.mangledGlobalNames)))},
kH:function(a,b){var t,s,r,q,p
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
if(!H.a0(r,b[p]))return!1}return!0},
nl:function(a,b,c){return H.jq(a,b,H.kO(b,c))},
a0:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aT")return!0
if('func' in b)return H.kS(a,b)
if('func' in a)return b.name==="j5"||b.name==="n"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.d(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.d(!0)
q=b[0]}else q=b
if(q!==s){p=H.aI(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.kH(H.jt(o,t),r)},
kG:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.a0(o,n)||H.a0(n,o)))return!1}return!0},
mH:function(a,b){var t,s,r,q,p,o
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
if(!(H.a0(p,o)||H.a0(o,p)))return!1}return!0},
kS:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.d('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.a0(t,s)||H.a0(s,t)))return!1}r=a.args
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
if(n===m){if(!H.kG(r,q,!1))return!1
if(!H.kG(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
g=r[h]
H.d(i)
f=q[h]
if(!(H.a0(g,f)||H.a0(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=q[e]
if(!(H.a0(g,f)||H.a0(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=o[e]
if(!(H.a0(g,f)||H.a0(f,g)))return!1}}return H.mH(a.named,b.named)},
jq:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
ns:function(a){var t=$.jn
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
no:function(a){return H.aU(a)},
nm:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
n2:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.n))
t=$.jn.$1(a)
s=$.it[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iC[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kF.$2(a,t)
if(t!=null){s=$.it[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iC[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.jr(r)
$.it[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iC[t]=r
return r}if(p==="-"){o=H.jr(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.kU(a,r)
if(p==="*")throw H.e(new P.dt(t))
if(u.leafTags[t]===true){o=H.jr(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.kU(a,r)},
kU:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.iK(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
jr:function(a){return J.iK(a,!1,null,!!a.$iso)},
n4:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.iK(t,!1,null,!!t.$iso)
else return J.iK(t,c,null,null)},
mY:function(){if(!0===$.jo)return
$.jo=!0
H.mZ()},
mZ:function(){var t,s,r,q,p,o,n,m
$.it=Object.create(null)
$.iC=Object.create(null)
H.mX()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.kX.$1(p)
if(o!=null){n=H.n4(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
mX:function(){var t,s,r,q,p,o,n
t=C.S()
t=H.bg(C.P,H.bg(C.U,H.bg(C.B,H.bg(C.B,H.bg(C.T,H.bg(C.Q,H.bg(C.R(C.C),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jn=new H.iz(p)
$.kF=new H.iA(o)
$.kX=new H.iB(n)},
bg:function(a,b){return a(b)||b},
nb:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fr:function fr(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
h5:function h5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
de:function de(a,b){this.a=a
this.b=b},
eI:function eI(a,b,c){this.a=a
this.b=b
this.c=c},
h9:function h9(a){this.a=a},
iU:function iU(a){this.a=a},
dA:function dA(a,b){this.a=a
this.b=b},
iD:function iD(a){this.a=a},
iE:function iE(a,b){this.a=a
this.b=b},
iF:function iF(a,b,c){this.a=a
this.b=b
this.c=c},
iG:function iG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iH:function iH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
b5:function b5(){},
fT:function fT(){},
fF:function fF(){},
bl:function bl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h7:function h7(a){this.a=a},
dQ:function dQ(a){this.a=a},
fw:function fw(a){this.a=a},
hk:function hk(a){this.a=a},
aB:function aB(a,b){this.a=a
this.b=b},
ae:function ae(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eH:function eH(a){this.a=a},
eK:function eK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
eL:function eL(a,b){this.a=a
this.$ti=b},
eM:function eM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iz:function iz(a){this.a=a},
iA:function iA(a){this.a=a},
iB:function iB(a){this.a=a},
x:function(a){return a},
ik:function(a){var t,s,r
if(!!J.t(a).$isl)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bA:function bA(){},
ba:function ba(){},
eX:function eX(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
d6:function d6(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
da:function da(){},
f3:function f3(){},
bB:function bB(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
mQ:function(a){var t=H.C(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
iL:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
t:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d0.prototype
return J.d_.prototype}if(typeof a=="string")return J.aP.prototype
if(a==null)return J.eG.prototype
if(typeof a=="boolean")return J.eF.prototype
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aQ.prototype
return a}if(a instanceof P.n)return a
return J.iu(a)},
iK:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iu:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jo==null){H.mY()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.dt("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$j8()]
if(p!=null)return p
p=H.n2(a)
if(p!=null)return p
if(typeof a=="function")return C.V
s=Object.getPrototypeOf(a)
if(s==null)return C.E
if(s===Object.prototype)return C.E
if(typeof q=="function"){Object.defineProperty(q,$.$get$j8(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
Z:function(a){if(typeof a=="string")return J.aP.prototype
if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aQ.prototype
return a}if(a instanceof P.n)return a
return J.iu(a)},
dE:function(a){if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aQ.prototype
return a}if(a instanceof P.n)return a
return J.iu(a)},
kL:function(a){if(typeof a=="number")return J.b8.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.aW.prototype
return a},
mS:function(a){if(typeof a=="number")return J.b8.prototype
if(typeof a=="string")return J.aP.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.aW.prototype
return a},
kM:function(a){if(typeof a=="string")return J.aP.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.aW.prototype
return a},
j:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aQ.prototype
return a}if(a instanceof P.n)return a
return J.iu(a)},
E:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.t(a).w(a,b)},
al:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kL(a).aB(a,b)},
l_:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kL(a).aC(a,b)},
bi:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n1(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.Z(a).h(a,b)},
l0:function(a,b,c,d){return J.j(a).dC(a,b,c,d)},
ju:function(a,b){return J.kM(a).aK(a,b)},
bj:function(a,b){return J.j(a).dU(a,b)},
l1:function(a,b,c){return J.j(a).dV(a,b,c)},
jv:function(a,b){return J.j(a).bT(a,b)},
iV:function(a,b){return J.j(a).P(a,b)},
jw:function(a,b,c){return J.j(a).bW(a,b,c)},
l2:function(a,b){return J.j(a).e9(a,b)},
dH:function(a,b,c){return J.j(a).bX(a,b,c)},
c2:function(a,b,c){return J.j(a).bY(a,b,c)},
dI:function(a,b){return J.j(a).ec(a,b)},
l3:function(a,b){return J.j(a).bZ(a,b)},
l4:function(a,b,c){return J.j(a).c_(a,b,c)},
jx:function(a,b,c,d){return J.j(a).c0(a,b,c,d)},
l5:function(a,b,c,d,e){return J.j(a).c2(a,b,c,d,e)},
l6:function(a,b){return J.mS(a).R(a,b)},
iW:function(a,b,c){return J.Z(a).eg(a,b,c)},
iX:function(a){return J.j(a).c4(a)},
l7:function(a){return J.j(a).c5(a)},
l8:function(a){return J.j(a).c8(a)},
jy:function(a){return J.j(a).el(a)},
l9:function(a,b){return J.j(a).ca(a,b)},
iY:function(a,b){return J.j(a).cb(a,b)},
la:function(a,b,c,d){return J.j(a).cc(a,b,c,d)},
lb:function(a,b,c,d,e){return J.j(a).es(a,b,c,d,e)},
lc:function(a,b,c,d,e){return J.j(a).cd(a,b,c,d,e)},
ld:function(a,b,c,d,e,f){return J.j(a).eu(a,b,c,d,e,f)},
jz:function(a,b){return J.dE(a).q(a,b)},
c3:function(a,b){return J.j(a).ce(a,b)},
le:function(a,b){return J.j(a).cf(a,b)},
lf:function(a){return J.j(a).ev(a)},
lg:function(a,b){return J.dE(a).av(a,b)},
lh:function(a){return J.j(a).ge8(a)},
am:function(a){return J.t(a).gu(a)},
bk:function(a){return J.dE(a).gv(a)},
b3:function(a){return J.Z(a).gj(a)},
li:function(a){return J.j(a).gb2(a)},
lj:function(a){return J.t(a).gA(a)},
lk:function(a){return J.j(a).geX(a)},
ll:function(a){return J.j(a).gay(a)},
iZ:function(a){return J.j(a).gm(a)},
j_:function(a){return J.j(a).gn(a)},
jA:function(a){return J.j(a).gL(a)},
j0:function(a,b){return J.j(a).a6(a,b)},
lm:function(a){return J.j(a).aA(a)},
ln:function(a){return J.j(a).ba(a)},
lo:function(a,b){return J.j(a).bc(a,b)},
lp:function(a,b,c){return J.j(a).bd(a,b,c)},
jB:function(a,b,c){return J.j(a).bg(a,b,c)},
lq:function(a,b){return J.j(a).ci(a,b)},
lr:function(a,b){return J.dE(a).ck(a,b)},
ls:function(a,b,c){return J.j(a).cl(a,b,c)},
lt:function(a){return J.dE(a).eQ(a)},
lu:function(a,b){return J.j(a).G(a,b)},
lv:function(a,b,c,d){return J.j(a).bl(a,b,c,d)},
lw:function(a,b,c,d,e,f,g){return J.j(a).cq(a,b,c,d,e,f,g)},
lx:function(a,b,c,d){return J.j(a).cr(a,b,c,d)},
jC:function(a,b,c,d){return J.j(a).cs(a,b,c,d)},
ly:function(a){return J.kM(a).eZ(a)},
aJ:function(a){return J.t(a).k(a)},
lz:function(a,b,c,d){return J.j(a).f0(a,b,c,d)},
lA:function(a,b,c){return J.j(a).cv(a,b,c)},
lB:function(a,b,c){return J.j(a).cw(a,b,c)},
j1:function(a,b,c){return J.j(a).cz(a,b,c)},
lC:function(a,b,c){return J.j(a).cA(a,b,c)},
jD:function(a,b,c){return J.j(a).cB(a,b,c)},
jE:function(a,b,c){return J.j(a).cC(a,b,c)},
jF:function(a,b,c){return J.j(a).cD(a,b,c)},
jG:function(a,b,c,d){return J.j(a).cE(a,b,c,d)},
jH:function(a,b,c,d){return J.j(a).cF(a,b,c,d)},
lD:function(a,b){return J.j(a).cH(a,b)},
lE:function(a,b,c){return J.j(a).f1(a,b,c)},
jI:function(a,b,c,d,e,f,g){return J.j(a).cJ(a,b,c,d,e,f,g)},
lF:function(a,b,c,d,e){return J.j(a).cK(a,b,c,d,e)},
a:function a(){},
eF:function eF(){},
eG:function eG(){},
bx:function bx(){},
fh:function fh(){},
aW:function aW(){},
aQ:function aQ(){},
aO:function aO(a){this.$ti=a},
j6:function j6(a){this.$ti=a},
dM:function dM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b8:function b8(){},
d0:function d0(){},
d_:function d_(){},
aP:function aP(){}},P={
mo:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.mI()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bZ(new P.hm(t),1)).observe(s,{childList:true})
return new P.hl(t,s,r)}else if(self.setImmediate!=null)return P.mJ()
return P.mK()},
mp:function(a){++u.globalState.f.b
self.scheduleImmediate(H.bZ(new P.hn(a),0))},
mq:function(a){++u.globalState.f.b
self.setImmediate(H.bZ(new P.ho(a),0))},
mr:function(a){P.je(C.z,a)},
mD:function(a,b){if(H.bh(a,{func:1,args:[P.aT,P.aT]})){b.toString
return a}else{b.toString
return a}},
mt:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.av))
H.d(b.a===0)
b.a=1
try{a.cu(new P.hE(b),new P.hF(b))}catch(r){t=H.O(r)
s=H.aF(r)
P.n8(new P.hG(b,t,s))}},
kw:function(a,b){var t,s,r,q
H.d(b.a<=1)
for(;t=a.a,s=t===2,s;){H.d(s)
a=a.c}s=b.a
if(t>=4){H.d(s<4)
r=b.c
b.c=null
q=b.ad(r)
H.d(b.a<4)
H.d(a.a>=4)
b.a=a.a
b.c=a.c
P.bP(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bM(q)}},
bP:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.il(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bP(t.a,b)}s=t.a
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
P.il(null,null,p,o,s)
return}s=$.B
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.B
H.d(l==null?s!=null:l!==s)
j=$.B
$.B=l
i=j}else i=null
s=b.c
if(s===8)new P.hK(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.hJ(r,b,m).$0()}else if((s&2)!==0)new P.hI(t,r,b).$0()
if(i!=null){H.d(!0)
$.B=i}s=r.b
if(!!J.t(s).$iset){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.ad(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.kw(s,o)
return}}g=b.b
H.d(g.a<4)
h=g.c
g.c=null
b=g.ad(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.d(!o)
g.a=4
g.c=p}else{H.d(!o)
g.a=8
g.c=p}t.a=g
s=g}},
mC:function(){var t,s
for(;t=$.bf,t!=null;){$.bX=null
s=t.b
$.bf=s
if(s==null)$.bW=null
t.a.$0()}},
mG:function(){$.jk=!0
try{P.mC()}finally{$.bX=null
$.jk=!1
if($.bf!=null)$.$get$jg().$1(P.kI())}},
kD:function(a){var t=new P.dv(a,null)
if($.bf==null){$.bW=t
$.bf=t
if(!$.jk)$.$get$jg().$1(P.kI())}else{$.bW.b=t
$.bW=t}},
mF:function(a){var t,s,r
t=$.bf
if(t==null){P.kD(a)
$.bX=$.bW
return}s=new P.dv(a,null)
r=$.bX
if(r==null){s.b=t
$.bX=s
$.bf=s}else{s.b=r.b
r.b=s
$.bX=s
if(s.b==null)$.bW=s}},
n8:function(a){var t=$.B
if(C.f===t){P.io(null,null,C.f,a)
return}t.toString
P.io(null,null,t,t.aX(a))},
mk:function(a,b){var t=$.B
if(t===C.f){t.toString
return P.je(a,b)}return P.je(a,t.aX(b))},
je:function(a,b){var t=C.b.I(a.a,1000)
return H.mj(t<0?0:t,b)},
jf:function(a){var t,s
H.d(a!=null)
t=$.B
H.d(a==null?t!=null:a!==t)
s=$.B
$.B=a
return s},
il:function(a,b,c,d,e){var t={}
t.a=d
P.mF(new P.im(t,e))},
kB:function(a,b,c,d){var t,s
if($.B===c)return d.$0()
t=P.jf(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.B=s}},
kC:function(a,b,c,d,e){var t,s
if($.B===c)return d.$1(e)
t=P.jf(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.B=s}},
mE:function(a,b,c,d,e,f){var t,s
if($.B===c)return d.$2(e,f)
t=P.jf(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.B=s}},
io:function(a,b,c,d){var t=C.f!==c
if(t)d=!(!t||!1)?c.aX(d):c.ea(d)
P.kD(d)},
hm:function hm(a){this.a=a},
hl:function hl(a,b,c){this.a=a
this.b=b
this.c=c},
hn:function hn(a){this.a=a},
ho:function ho(a){this.a=a},
hs:function hs(){},
ib:function ib(a,b){this.a=a
this.$ti=b},
dx:function dx(a,b,c,d,e,f){var _=this
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
hD:function hD(a,b){this.a=a
this.b=b},
hH:function hH(a,b){this.a=a
this.b=b},
hE:function hE(a){this.a=a},
hF:function hF(a){this.a=a},
hG:function hG(a,b,c){this.a=a
this.b=b
this.c=c},
hK:function hK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hL:function hL(a){this.a=a},
hJ:function hJ(a,b,c){this.a=a
this.b=b
this.c=c},
hI:function hI(a,b,c){this.a=a
this.b=b
this.c=c},
dv:function dv(a,b){this.a=a
this.b=b},
fJ:function fJ(){},
fL:function fL(a){this.a=a},
fM:function fM(a,b){this.a=a
this.b=b},
fK:function fK(){},
b4:function b4(a,b){this.a=a
this.b=b},
ij:function ij(){},
im:function im(a,b){this.a=a
this.b=b},
hY:function hY(){},
i_:function i_(a,b){this.a=a
this.b=b},
hZ:function hZ(a,b){this.a=a
this.b=b},
i0:function i0(a,b){this.a=a
this.b=b},
k8:function(a,b){return new H.ae(0,null,null,null,null,null,0,[a,b])},
K:function(){return new H.ae(0,null,null,null,null,null,0,[null,null])},
aS:function(a){return H.mR(a,new H.ae(0,null,null,null,null,null,0,[null,null]))},
bT:function(a,b){return new P.dy(0,null,null,null,null,null,0,[a,b])},
mx:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
m1:function(a,b,c){var t,s
if(P.jl(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bY()
C.a.l(s,a)
try{P.mB(a,t)}finally{H.d(C.a.gb_(s)===a)
s.pop()}s=P.kf(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eD:function(a,b,c){var t,s,r
if(P.jl(a))return b+"..."+c
t=new P.bJ(b)
s=$.$get$bY()
C.a.l(s,a)
try{r=t
r.a=P.kf(r.ga1(),a,", ")}finally{H.d(C.a.gb_(s)===a)
s.pop()}s=t
s.a=s.ga1()+c
s=t.ga1()
return s.charCodeAt(0)==0?s:s},
jl:function(a){var t,s
for(t=0;s=$.$get$bY(),t<s.length;++t)if(a===s[t])return!0
return!1},
mB:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gv(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.p())return
q=H.f(t.gt())
C.a.l(b,q)
s+=q.length+2;++r}if(!t.p()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gt();++r
if(!t.p()){if(r<=4){C.a.l(b,H.f(n))
return}p=H.f(n)
o=b.pop()
s+=p.length+2}else{m=t.gt();++r
H.d(r<100)
for(;t.p();n=m,m=l){l=t.gt();++r
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
af:function(a,b,c,d){return new P.hR(0,null,null,null,null,null,0,[d])},
ja:function(a,b){var t,s
t=P.af(null,null,null,b)
for(s=J.bk(a);s.p();)t.l(0,s.gt())
return t},
m3:function(a){var t,s,r
t={}
if(P.jl(a))return"{...}"
s=new P.bJ("")
try{C.a.l($.$get$bY(),a)
r=s
r.a=r.ga1()+"{"
t.a=!0
a.av(0,new P.eQ(t,s))
t=s
t.a=t.ga1()+"}"}finally{t=$.$get$bY()
H.d(C.a.gb_(t)===a)
t.pop()}t=s.ga1()
return t.charCodeAt(0)==0?t:t},
jb:function(a,b){var t=new P.eN(null,0,0,0,[b])
t.dh(a,b)
return t},
dy:function dy(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hR:function hR(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hS:function hS(a,b,c){this.a=a
this.b=b
this.c=c},
bS:function bS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hO:function hO(){},
d1:function d1(){},
u:function u(){},
eQ:function eQ(a,b){this.a=a
this.b=b},
eN:function eN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hT:function hT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fz:function fz(){},
fy:function fy(){},
bG:function bG(){},
kf:function(a,b,c){var t=J.bk(b)
if(!t.p())return a
if(c.length===0){do a+=H.f(t.gt())
while(t.p())}else{a+=H.f(t.gt())
for(;t.p();)a=a+c+H.f(t.gt())}return a},
lM:function(a,b){return J.l6(a,b)},
lN:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.f(t)
if(t>=10)return s+"00"+H.f(t)
return s+"000"+H.f(t)},
lO:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c9:function(a){if(a>=10)return""+a
return"0"+a},
j4:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aJ(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lS(a)},
lS:function(a){var t=J.t(a)
if(!!t.$isb5)return t.k(a)
return H.fn(a)},
jJ:function(a){return new P.an(!1,null,null,a)},
jK:function(a,b,c){return new P.an(!0,a,b,c)},
fo:function(a,b,c){return new P.dj(null,null,!0,a,b,"Value not in range")},
ag:function(a,b,c,d,e){return new P.dj(b,c,!0,a,d,"Invalid value")},
jd:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.ag(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.ag(b,a,c,"end",f))
return b},
A:function(a,b,c,d,e){var t=e!=null?e:J.b3(b)
return new P.ez(b,t,!0,a,c,"Index out of range")},
cf:function(a){return new P.hC(a)},
k9:function(a,b,c){var t,s
t=H.C([],[c])
for(s=J.bk(a);s.p();)C.a.l(t,s.gt())
return t},
ak:function(a){H.iL(H.f(a))},
ax:function ax(){},
G:function G(){},
bm:function bm(a,b){this.a=a
this.b=b},
J:function J(){},
aN:function aN(a){this.a=a},
e0:function e0(){},
e1:function e1(){},
b7:function b7(){},
c4:function c4(a){this.a=a},
df:function df(){},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dj:function dj(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ez:function ez(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
r:function r(a){this.a=a},
dt:function dt(a){this.a=a},
ar:function ar(a){this.a=a},
U:function U(a){this.a=a},
dn:function dn(){},
dU:function dU(a){this.a=a},
hC:function hC(a){this.a=a},
e3:function e3(a,b,c){this.a=a
this.b=b
this.$ti=c},
m:function m(){},
V:function V(){},
cZ:function cZ(){},
b:function b(){},
aA:function aA(){},
aT:function aT(){},
T:function T(){},
n:function n(){},
bI:function bI(){},
q:function q(){},
bJ:function bJ(a){this.a=a},
ir:function(a){var t,s,r,q,p
if(a==null)return
t=P.K()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.N)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
mO:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.lg(a,new P.iq(t))
return t},
jZ:function(){var t=$.jY
if(t==null){t=J.iW(window.navigator.userAgent,"Opera",0)
$.jY=t}return t},
lP:function(){var t,s
t=$.jV
if(t!=null)return t
s=$.jW
if(s==null){s=J.iW(window.navigator.userAgent,"Firefox",0)
$.jW=s}if(s)t="-moz-"
else{s=$.jX
if(s==null){s=!P.jZ()&&J.iW(window.navigator.userAgent,"Trident/",0)
$.jX=s}if(s)t="-ms-"
else t=P.jZ()?"-o-":"-webkit-"}$.jV=t
return t},
iq:function iq(a){this.a=a},
hQ:function hQ(){},
hX:function hX(){},
H:function H(){},
dJ:function dJ(){},
aK:function aK(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
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
ep:function ep(){},
er:function er(){},
ad:function ad(){},
az:function az(){},
ex:function ex(){},
ap:function ap(){},
eJ:function eJ(){},
eR:function eR(){},
eS:function eS(){},
aq:function aq(){},
f7:function f7(){},
fe:function fe(){},
fj:function fj(){},
fk:function fk(){},
fp:function fp(){},
fq:function fq(){},
bH:function bH(){},
fN:function fN(){},
F:function F(){},
fP:function fP(){},
fQ:function fQ(){},
dq:function dq(){},
fU:function fU(){},
bL:function bL(){},
as:function as(){},
h3:function h3(){},
hb:function hb(){},
hd:function hd(){},
he:function he(){},
bQ:function bQ(){},
i1:function i1(){},
i2:function i2(){},
i3:function i3(){},
cn:function cn(){},
cl:function cl(){},
cs:function cs(){},
cw:function cw(){},
cG:function cG(){},
cP:function cP(){},
cL:function cL(){},
cN:function cN(){},
dN:function dN(){},
ft:function ft(){},
fu:function fu(){},
ig:function ig(){},
fE:function fE(){},
cm:function cm(){},
cJ:function cJ(){}},W={
lQ:function(a,b,c){var t,s
t=document.body
s=(t&&C.o).N(t,a,b,c)
s.toString
t=new H.du(new W.Q(s),new W.ip(),[W.p])
return t.ga0(t)},
lR:function(a){return"wheel"},
bo:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lk(a)
if(typeof s==="string")t=a.tagName}catch(r){H.O(r)}return t},
ms:function(a,b){return document.createElement(a)},
b2:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kz:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ai:function(a,b,c,d,e){var t=W.kE(new W.hB(c))
t=new W.hA(0,a,b,t,!1,[e])
t.dv(a,b,c,!1,e)
return t},
kx:function(a){var t,s
t=document.createElement("a")
s=new W.i4(t,window.location)
s=new W.bR(s)
s.dw(a)
return s},
mv:function(a,b,c,d){return!0},
mw:function(a,b,c,d){var t,s,r,q,p
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
kA:function(){var t=P.q
t=new W.ic(P.ja(C.t,t),P.af(null,null,null,t),P.af(null,null,null,t),P.af(null,null,null,t),null)
t.dA(null,new H.by(C.t,new W.id(),[H.aG(C.t,0),null]),["TEMPLATE"],null)
return t},
kE:function(a){var t=$.B
if(t===C.f)return a
return t.eb(a)},
k:function k(){},
dK:function dK(){},
dL:function dL(){},
a1:function a1(){},
dO:function dO(){},
c5:function c5(){},
aL:function aL(){},
c6:function c6(){},
c7:function c7(){},
c8:function c8(){},
aM:function aM(){},
dS:function dS(){},
y:function y(){},
b6:function b6(){},
dT:function dT(){},
dV:function dV(){},
dW:function dW(){},
ca:function ca(){},
bn:function bn(){},
cb:function cb(){},
dX:function dX(){},
cc:function cc(){},
dY:function dY(){},
cd:function cd(){},
ce:function ce(){},
dZ:function dZ(){},
e_:function e_(){},
a2:function a2(){},
ip:function ip(){},
i:function i(){},
h:function h(){},
a3:function a3(){},
en:function en(){},
eo:function eo(){},
es:function es(){},
a4:function a4(){},
ci:function ci(){},
ev:function ev(){},
bv:function bv(){},
cj:function cj(){},
ew:function ew(){},
bw:function bw(){},
eA:function eA(){},
aR:function aR(){},
eO:function eO(){},
eT:function eT(){},
eU:function eU(){},
bz:function bz(){},
a6:function a6(){},
eV:function eV(){},
L:function L(){},
f4:function f4(){},
Q:function Q(a){this.a=a},
p:function p(){},
db:function db(){},
bF:function bF(){},
fd:function fd(){},
ff:function ff(){},
a7:function a7(){},
fi:function fi(){},
fl:function fl(){},
fm:function fm(){},
di:function di(){},
fv:function fv(){},
dk:function dk(){},
fx:function fx(){},
fB:function fB(){},
a8:function a8(){},
fC:function fC(){},
a9:function a9(){},
fD:function fD(){},
aa:function aa(){},
fI:function fI(){},
W:function W(){},
ah:function ah(){},
dp:function dp(){},
fR:function fR(){},
fS:function fS(){},
bK:function bK(){},
ab:function ab(){},
X:function X(){},
fV:function fV(){},
fW:function fW(){},
fY:function fY(){},
ac:function ac(){},
aV:function aV(){},
h1:function h1(){},
h2:function h2(){},
bd:function bd(){},
h4:function h4(){},
ds:function ds(){},
aC:function aC(){},
ha:function ha(){},
hc:function hc(){},
hf:function hf(){},
hg:function hg(){},
aY:function aY(){},
bO:function bO(){},
hi:function hi(a){this.a=a},
hj:function hj(){},
aZ:function aZ(){},
hr:function hr(){},
dw:function dw(){},
ht:function ht(){},
hu:function hu(){},
hv:function hv(){},
hM:function hM(){},
hN:function hN(){},
dz:function dz(){},
i5:function i5(){},
i8:function i8(){},
i9:function i9(){},
ih:function ih(){},
ii:function ii(){},
hp:function hp(){},
hw:function hw(a){this.a=a},
hz:function hz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jh:function jh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hA:function hA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hB:function hB(a){this.a=a},
bR:function bR(a){this.a=a},
z:function z(){},
dd:function dd(a){this.a=a},
f6:function f6(a){this.a=a},
f5:function f5(a,b,c){this.a=a
this.b=b
this.c=c},
bU:function bU(){},
i6:function i6(){},
i7:function i7(){},
ic:function ic(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
id:function id(){},
ia:function ia(){},
ch:function ch(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dc:function dc(){},
i4:function i4(a,b){this.a=a
this.b=b},
dB:function dB(a){this.a=a},
ie:function ie(a){this.a=a},
bp:function bp(){},
bq:function bq(){},
br:function br(){},
bs:function bs(){},
bt:function bt(){},
bu:function bu(){},
ck:function ck(){},
cE:function cE(){},
cq:function cq(){},
cx:function cx(){},
cy:function cy(){},
cz:function cz(){},
cA:function cA(){},
cB:function cB(){},
cC:function cC(){},
cD:function cD(){},
co:function co(){},
cp:function cp(){},
cr:function cr(){},
ct:function ct(){},
cu:function cu(){},
cv:function cv(){},
cF:function cF(){},
cH:function cH(){},
cR:function cR(){},
cS:function cS(){},
cQ:function cQ(){},
cV:function cV(){},
cW:function cW(){},
cX:function cX(){},
cY:function cY(){},
cI:function cI(){},
cK:function cK(){},
cM:function cM(){},
cO:function cO(){},
cT:function cT(){},
cU:function cU(){}},B={
n9:function(a){var t,s
t=document
s=W.aR
W.ai(t,"keydown",new B.iN(),!1,s)
W.ai(t,"keyup",new B.iO(),!1,s)
if(!$.na)W.ai(t,"mousemove",new B.iP(),!1,W.L)
s=W.L
W.ai(t,"mousedown",new B.iQ(),!1,s)
W.ai(t,"mouseup",new B.iR(),!1,s)},
m4:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.x(3))
s=$.$get$is()
r=$.$get$c_()
q=new T.a5(new Float32Array(H.x(16)))
q.a_()
q=new B.f8(a,b,c,0,new T.v(t),-0.02,s,r,q,new T.v(new Float32Array(H.x(3))),new T.v(new Float32Array(H.x(3))),new T.v(new Float32Array(H.x(3))),new T.v(new Float32Array(H.x(3))),"camera:orbit",!1,!0)
q.di(a,b,c,d)
return q},
iN:function iN(){},
iO:function iO(){},
iP:function iP(){},
iQ:function iQ(){},
iR:function iR(){},
f8:function f8(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
f9:function f9(a){this.a=a},
fa:function fa(a){this.a=a},
fb:function fb(){},
fc:function fc(a){this.a=a},
mf:function(a,b,c,d,e,a0,a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=a2+1
s=a1+1
r=B.m5(new B.fA(a0,d,e,c),0,6.283185307179586,s,!1,0.001)
H.d(r.length===2*s)
q=B.ml(r,a2,a3,!1)
H.d(q.length===s)
H.d(q[0].length===2*t)
p=[]
o=new G.eu(!1,[],[],p,P.K())
for(n=q.length,m=0;m<q.length;q.length===n||(0,H.N)(q),++m){l=q[m]
for(k=0;k<l.length;k+=2){j=l[k]
j.toString
i=new T.v(new Float32Array(3))
i.K(j)
C.a.l(p,i)}}H.d(p.length===t*s)
o.dd(t,s,!1)
o.de(t,s)
n=o.e
H.d(n.h(0,"aTexUV").length===p.length)
H.d(!n.C(0,"aNormal"))
H.d(C.i.bk("aNormal","a"))
h=$.$get$R().h(0,"aNormal")
switch(h.a){case"vec2":n.i(0,"aNormal",H.C([],[T.aX]))
break
case"vec3":n.i(0,"aNormal",H.C([],[T.v]))
break
case"vec4":n.i(0,"aNormal",H.C([],[T.aD]))
break
case"float":n.i(0,"aNormal",H.C([],[P.J]))
break
case"uvec4":n.i(0,"aNormal",H.C([],[[P.b,P.m]]))
break
default:if(H.aw(!1))H.aE("unknown type for aNormal")}for(j=q.length,m=0;m<q.length;q.length===j||(0,H.N)(q),++m){l=q[m]
for(k=0;k<l.length;k+=2){i=l[k+1]
g=n.h(0,"aNormal")
i.toString
f=new T.v(new Float32Array(3))
f.K(i);(g&&C.a).l(g,f)}}H.d(n.h(0,"aNormal").length===p.length)
return o},
ml:function(a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t=[]
s=new Float32Array(H.x(3))
r=new T.v(s)
q=new Float32Array(H.x(3))
p=new T.v(q)
o=new Float32Array(H.x(3))
n=new T.v(o)
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
o[2]=e*d}p.a3(0)
n.a3(0)
for(c=0;c<m;++c){b=c/a2*2*3.141592653589793
a=a3*Math.cos(b)
a0=a3*Math.sin(b)
r.K(k)
r.au(p,a)
r.au(n,a0)
h=new T.v(new Float32Array(3))
h.K(r)
C.a.l(i,h)
s[2]=0
s[1]=0
s[0]=0
r.au(p,a)
r.au(n,a0)
r.a3(0)
h=new T.v(new Float32Array(3))
h.K(r)
C.a.l(i,h)}}return t},
m5:function(a,b,c,d,e,f){var t,s,r,q,p,o,n
H.d(d>=2)
t=[]
s=new T.v(new Float32Array(H.x(3)))
r=new T.v(new Float32Array(H.x(3)))
for(q=(c-b)/(d-1),p=0;p<d;++p){o=q*p+b
a.$2(o,s)
a.$2(o+f,r)
r.bm(s)
n=new T.v(new Float32Array(3))
n.K(s)
C.a.l(t,n)
n=new T.v(new Float32Array(3))
n.K(r)
C.a.l(t,n)}return t},
fA:function fA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},G={
mn:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.aj(t,"\n")},
kv:function(a,b,c){var t,s,r,q
t=J.j(a)
s=t.c7(a,b)
t.bj(a,s,c)
t.c3(a,s)
r=t.bf(a,s,35713)
if(r!=null&&!r){q=t.be(a,s)
P.ak("E:Compilation failed:")
P.ak("E:"+G.mn(c))
P.ak("E:Failure:")
P.ak(C.i.a5("E:",q))
throw H.e(q)}return s},
k2:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.iZ(a[s])
b[t+1]=J.j_(a[s])
b[t+2]=J.jA(a[s])}return b},
lU:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.iZ(a[s])
b[t+1]=J.j_(a[s])}return b},
lV:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.iZ(a[s])
b[t+1]=J.j_(a[s])
b[t+2]=J.jA(a[s])
b[t+3]=J.ll(a[s])}return b},
lT:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.bi(a[s],0)
b[t+1]=J.bi(a[s],1)
b[t+2]=J.bi(a[s],2)
b[t+3]=J.bi(a[s],3)}return b},
mu:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gD(t),s=s.gv(s),r=b.x,q=[[P.b,P.m]],p=[P.J],o=[T.aD],n=[T.v],m=[T.aX];s.p();){l=s.gt()
if(!r.C(0,l)){k="Dropping unnecessary attribute: "+H.f(l)
if($.kK>0)H.iL("I: "+k)
continue}j=t.h(0,l)
switch($.$get$R().h(0,l).a){case"vec2":b.X(l,G.lU(H.dG(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.X(l,G.k2(H.dG(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.X(l,G.lV(H.dG(j,"$isb",o,"$asb"),null),4)
break
case"float":b.X(l,new Float32Array(H.ik(H.dG(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.X(l,G.lT(H.dG(j,"$isb",q,"$asb"),null),4)
break
default:if(H.aw(!1))H.aE("unknown type for "+H.f(l)+" ["+J.lj(j[0]).k(0)+"] ["+new H.aB(H.iw(j),null).k(0)+"] "+H.f(j))}}},
kd:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.af(null,null,null,P.q)
s=c.b
r=d.b
q=c.f
p=J.l7(b.a)
o=G.kv(b.a,35633,s)
J.jw(b.a,p,o)
n=G.kv(b.a,35632,r)
J.jw(b.a,p,n)
if(q.length>0)J.lz(b.a,p,q,35980)
J.lq(b.a,p)
if(!J.lp(b.a,p,35714))H.D(J.lo(b.a,p))
t=new G.fs(b,c,d,p,P.ja(c.c,null),P.K(),P.K(),t,null,a,!1,!0)
t.dj(a,b,c,d)
return t},
eW:function eW(){},
h8:function h8(){},
dP:function dP(){},
dR:function dR(a,b){this.a=a
this.b=b},
em:function em(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eu:function eu(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dr:function dr(a,b,c){this.a=a
this.b=b
this.c=c},
bN:function bN(a,b,c){this.a=a
this.b=b
this.c=c},
d4:function d4(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
d5:function d5(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
fg:function fg(){},
fs:function fs(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
w:function w(a,b,c){this.a=a
this.b=b
this.c=c},
bc:function bc(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
dm:function dm(a,b,c,d,e,f,g,h){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e
_.a=f
_.b=g
_.c=h},
fX:function fX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bM:function bM(){},
ey:function ey(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={
mm:function(a,b,c){var t,s,r,q
t="stars_"+b
s=b*3
r=new Float32Array(H.x(s))
for(q=0;q<s;++q)r[q]=($.$get$ku().eN()-0.5)*c
s=a.d
s=new G.d5(s,J.jy(s.a),0,P.K(),a.e.x,null,0,-1,null,null,P.K(),"meshdata:"+t,!1,!0)
s.bp(r)
return s},
dg:function dg(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
_.fy=a
_.go=b
_.x=c
_.y=d
_.z=e
_.Q=f
_.ch=a0
_.cx=a1
_.cy=a2
_.db=a3
_.d=a4
_.a=a5
_.b=a6
_.c=a7},
fG:function fG(){},
fH:function fH(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
ix:function(a){var t,s
t=C.v.ey(a,0,new A.iy())
s=536870911&t+(C.b.cL(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iy:function iy(){}},T={a5:function a5(a){this.a=a},aX:function aX(a){this.a=a},v:function v(a){this.a=a},aD:function aD(a){this.a=a}},U={
lG:function(a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=new Float32Array(H.x(3000))
s=new Float32Array(H.x(4000))
r=new Float32Array(H.x(16))
q=new T.a5(r)
q.a_()
p=new G.dm(q,new T.v(new Float32Array(H.x(3))),new T.v(new Float32Array(H.x(3))),new T.v(new Float32Array(H.x(3))),new T.v(new Float32Array(H.x(3))),"dummy",!1,!0)
for(o=0,n=-5;n<5;++n)for(q=n*40,m=-5;m<5;++m)for(l=m*40,k=-5;k<5;++k){r[12]=q
r[13]=l
r[14]=k*30
j=o*3
C.v.bi(t,j,p.bb().a)
i=new Float32Array(9)
i[0]=r[0]
i[1]=r[1]
i[2]=r[2]
i[3]=r[4]
i[4]=r[5]
i[5]=r[6]
i[6]=r[8]
i[7]=r[9]
i[8]=r[10]
h=new Float32Array(4)
g=i[0]
f=i[4]
e=i[8]
d=0+g+f+e
if(d>0){g=Math.sqrt(d+1)
h[3]=g*0.5
c=0.5/g
h[0]=(i[5]-i[7])*c
h[1]=(i[6]-i[2])*c
h[2]=(i[1]-i[3])*c}else{if(g<f)b=f<e?2:1
else b=g<e?2:0
a=(b+1)%3
a0=(b+2)%3
g=b*3
f=a*3
e=a0*3
a1=Math.sqrt(i[g+b]-i[f+a]-i[e+a0]+1)
h[b]=a1*0.5
c=0.5/a1
h[3]=(i[f+a0]-i[e+a])*c
h[a]=(i[g+a]+i[f+b])*c
h[a0]=(i[g+a0]+i[e+b])*c}C.v.bi(s,j,h);++o}a2.X("iaRotation",s,4)
a2.X("iaTranslation",t,3)},
n3:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t={}
s=document
r=new R.fH(0,0,null,null,null,null)
r.dm(C.r.cO(s,"stats"),"blue","gray")
q=C.r.eP(s,"#webgl-canvas")
p=new G.dR(null,q)
o=(q&&C.x).b9(q,"webgl2",P.aS(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=o
if(o==null)H.D(P.cf('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+J.aJ(J.lm(o))
if($.kK>0)P.ak("I: "+n)
J.l5(o,0,0,0,1)
J.c3(o,2929)
J.c3(o,2884)
m=B.m4(265,0,0,q)
o=new T.a5(new Float32Array(H.x(16)))
o.a_()
n=new T.a5(new Float32Array(H.x(16)))
n.a_()
l=new R.dg(q,p,m,50,1,0.1,1000,o,n,new T.a5(new Float32Array(H.x(16))),P.K(),"perspective",!1,!0)
l.bu()
l.cn(null)
W.ai(window,"resize",l.geT(),!1,W.i)
k=G.kd("instanced",p,$.$get$kQ(),$.$get$kP())
j=new G.d4(P.K(),"mat",!1,!0)
j.H("cDepthTest",!0)
j.H("cDepthWrite",!0)
j.H("cBlendEquation",$.$get$jM())
n=$.$get$ke()
j.H("cStencilFunc",n)
o=new T.a5(new Float32Array(H.x(16)))
o.a_()
j.H("uModelMatrix",o)
i=B.mf(!0,!0,1,2,3,12,128,16,4,!1)
o=k.d
h=J.jy(o.a)
g=new G.d5(o,h,4,P.K(),k.e.x,null,0,-1,null,null,P.K(),"meshdata:torusknot",!1,!0)
g.bp(G.k2(i.d,null))
f=i.dc()
g.y=J.iX(o.a)
H.d(g.ch!=null)
e=g.ch.length
if(e<768){g.saP(new Uint8Array(H.ik(f)))
g.Q=5121}else if(e<196608){g.saP(new Uint16Array(H.ik(f)))
g.Q=5123}else{g.saP(new Uint32Array(H.ik(f)))
g.Q=5125}J.dI(o.a,h)
h=g.y
f=g.cx
e=J.t(f)
H.d(!!e.$iskr||!!e.$isks||!!e.$iskt)
J.dH(o.a,34963,h)
J.jx(o.a,34963,f,35048)
G.mu(i,g)
U.lG(g)
d=G.kd("stars",p,$.$get$kW(),$.$get$kV())
o=$.$get$jL()
c=new G.d4(P.K(),"stars",!1,!0)
c.H("cDepthTest",!0)
c.H("cDepthWrite",!1)
c.H("cBlendEquation",o)
c.H("cStencilFunc",n)
b=s.createElement("canvas")
b.width=64
b.height=64
a=C.x.cN(b,"2d")
a0=(a&&C.p).c6(a,32,32,1,32,32,22);(a0&&C.m).at(a0,0,"gray")
C.m.at(a0,1,"black")
a.fillStyle=a0
C.p.ew(a,0,0,64,64)
a0=C.p.c6(a,32,32,1,32,32,6);(a0&&C.m).at(a0,0,"white")
C.m.at(a0,1,"gray")
a.globalAlpha=0.9
a.fillStyle=a0
a.arc(32,32,4,0,6.283185307179586,!1)
a.fill("nonzero")
s=new G.fX(!1,!1,!1,!0,1,9729,9729)
o=J.l8(p.a)
n=new G.ey(b,"Utils::Particles",o,3553,p,s)
J.c2(p.a,3553,o)
J.ls(p.a,37440,1)
n.dl(b)
s.dg(p,3553)
H.d(J.ln(p.a)===0)
J.c2(p.a,3553,null)
c.H("uTexture",n)
c.H("uPointSize",1000)
s=new T.a5(new Float32Array(H.x(16)))
s.a_()
c.H("uModelMatrix",s)
a1=R.mm(d,2000,100)
t.a=0
new U.iJ(t,r,m,l,k,j,g,d,c,a1).$1(0)},
iJ:function iJ(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j}}
var v=[C,H,J,P,W,B,G,R,A,T,U]
setFunctionNamesIfNecessary(v)
var $={}
H.j7.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gu:function(a){return H.aU(a)},
k:function(a){return H.fn(a)},
gA:function(a){return new H.aB(H.iw(a),null)}}
J.eF.prototype={
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gA:function(a){return C.as},
$isax:1}
J.eG.prototype={
w:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
gA:function(a){return C.am}}
J.bx.prototype={
gu:function(a){return 0},
gA:function(a){return C.al},
k:function(a){return String(a)},
$isk7:1}
J.fh.prototype={}
J.aW.prototype={}
J.aQ.prototype={
k:function(a){var t=a[$.$get$jU()]
return t==null?this.d5(a):J.aJ(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isj5:1}
J.aO.prototype={
c1:function(a,b){if(!!a.immutable$list)throw H.e(new P.r(b))},
aY:function(a,b){if(!!a.fixed$length)throw H.e(new P.r(b))},
l:function(a,b){this.aY(a,"add")
a.push(b)},
M:function(a,b){var t,s,r,q,p
t=a.length
this.aY(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.N)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.D(new P.U(a)))
a.push(q)}},
ck:function(a,b){return new H.by(a,b,[H.aG(a,0),null])},
aj:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
q:function(a,b){return a[b]},
gex:function(a){if(a.length>0)return a[0]
throw H.e(H.eE())},
gb_:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.eE())},
E:function(a,b,c,d,e){var t,s
this.c1(a,"setRange")
P.jd(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.D(P.ag(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.k6())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
bV:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.U(a))}return!1},
d0:function(a,b){this.c1(a,"sort")
H.dl(a,0,a.length-1,P.mP())},
aE:function(a){return this.d0(a,null)},
B:function(a,b){var t
for(t=0;t<a.length;++t)if(J.E(a[t],b))return!0
return!1},
k:function(a){return P.eD(a,"[","]")},
gv:function(a){return new J.dM(a,a.length,0,null,[H.aG(a,0)])},
gu:function(a){return H.aU(a)},
gj:function(a){return a.length},
sj:function(a,b){this.aY(a,"set length")
if(b<0)throw H.e(P.ag(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.M(a,b))
if(b>=a.length||b<0)throw H.e(H.M(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.D(new P.r("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.M(a,b))
if(b>=a.length||b<0)throw H.e(H.M(a,b))
a[b]=c},
$isl:1,
$asl:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.j6.prototype={}
J.dM.prototype={
gt:function(){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.N(t))
r=this.c
if(r>=s){this.sbw(null)
return!1}this.sbw(t[r]);++this.c
return!0},
sbw:function(a){this.d=a}}
J.b8.prototype={
R:function(a,b){var t
if(typeof b!=="number")throw H.e(H.S(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaw(b)
if(this.gaw(a)===t)return 0
if(this.gaw(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaw:function(a){return a===0?1/a<0:a<0},
ed:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.r(""+a+".ceil()"))},
a4:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.r(""+a+".round()"))},
ee:function(a,b,c){if(this.R(b,c)>0)throw H.e(H.S(b))
if(this.R(a,b)<0)return b
if(this.R(a,c)>0)return c
return a},
f_:function(a,b){var t
if(b>20)throw H.e(P.ag(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaw(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
a5:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a+b},
a9:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a-b},
cM:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a/b},
F:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a*b},
aG:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bR(a,b)},
I:function(a,b){return(a|0)===a?a/b|0:this.bR(a,b)},
bR:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.r("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
aT:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cL:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return(a&b)>>>0},
d8:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return(a^b)>>>0},
aC:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a<b},
aB:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a>b},
b8:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a>=b},
gA:function(a){return C.av},
$isT:1}
J.d0.prototype={
gA:function(a){return C.au},
$isJ:1,
$ism:1,
$isT:1}
J.d_.prototype={
gA:function(a){return C.at},
$isJ:1,
$isT:1}
J.aP.prototype={
aK:function(a,b){if(b>=a.length)throw H.e(H.M(a,b))
return a.charCodeAt(b)},
a5:function(a,b){if(typeof b!=="string")throw H.e(P.jK(b,null,null))
return a+b},
d1:function(a,b,c){var t
if(c>a.length)throw H.e(P.ag(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bk:function(a,b){return this.d1(a,b,0)},
bn:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fo(b,null,null))
if(b>c)throw H.e(P.fo(b,null,null))
if(c>a.length)throw H.e(P.fo(c,null,null))
return a.substring(b,c)},
d2:function(a,b){return this.bn(a,b,null)},
eZ:function(a){return a.toLowerCase()},
eg:function(a,b,c){if(c>a.length)throw H.e(P.ag(c,0,a.length,null,null))
return H.nb(a,b,c)},
R:function(a,b){var t
if(typeof b!=="string")throw H.e(H.S(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.e(H.M(a,b))
return a[b]},
$isl:1,
$asl:function(){},
$isq:1}
H.c.prototype={$asc:null}
H.b9.prototype={
gv:function(a){return new H.d2(this,this.gj(this),0,null,[H.a_(this,"b9",0)])},
az:function(a,b){return this.d4(0,b)},
b6:function(a,b){var t,s
t=H.C([],[H.a_(this,"b9",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.q(0,s)
return t},
eY:function(a){return this.b6(a,!0)}}
H.fO.prototype={
gdJ:function(){var t=J.b3(this.a)
return t},
ge0:function(){var t,s
t=J.b3(this.a)
s=this.b
if(s>t)return t
return s},
gj:function(a){var t,s
t=J.b3(this.a)
s=this.b
if(s>=t)return 0
return t-s},
q:function(a,b){var t=this.ge0()+b
if(b<0||C.b.b8(t,this.gdJ()))throw H.e(P.A(b,this,"index",null,null))
return J.jz(this.a,t)},
b6:function(a,b){var t,s,r,q,p,o,n
t=this.b
s=this.a
r=J.Z(s)
q=r.gj(s)
p=q-t
if(p<0)p=0
o=H.C(new Array(p),this.$ti)
for(n=0;n<p;++n){o[n]=r.q(s,t+n)
if(r.gj(s)<q)throw H.e(new P.U(this))}return o},
dn:function(a,b,c,d){var t=this.b
if(t<0)H.D(P.ag(t,0,null,"start",null))}}
H.d2.prototype={
gt:function(){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.Z(t)
r=s.gj(t)
if(this.b!==r)throw H.e(new P.U(t))
q=this.c
if(q>=r){this.sab(null)
return!1}this.sab(s.q(t,q));++this.c
return!0},
sab:function(a){this.d=a}}
H.d3.prototype={
gv:function(a){return new H.eP(null,J.bk(this.a),this.b,this.$ti)},
gj:function(a){return J.b3(this.a)},
$asV:function(a,b){return[b]}}
H.e2.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.eP.prototype={
p:function(){var t=this.b
if(t.p()){this.sab(this.c.$1(t.gt()))
return!0}this.sab(null)
return!1},
gt:function(){return this.a},
sab:function(a){this.a=a},
$ascZ:function(a,b){return[b]}}
H.by.prototype={
gj:function(a){return J.b3(this.a)},
q:function(a,b){return this.b.$1(J.jz(this.a,b))},
$asc:function(a,b){return[b]},
$asb9:function(a,b){return[b]},
$asV:function(a,b){return[b]}}
H.du.prototype={
gv:function(a){return new H.hh(J.bk(this.a),this.b,this.$ti)}}
H.hh.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gt()))return!0
return!1},
gt:function(){return this.a.gt()}}
H.cg.prototype={}
H.iS.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.iT.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hV.prototype={
seH:function(a){this.z=a},
seK:function(a){this.ch=a}}
H.b0.prototype={
bU:function(a,b){if(!this.f.w(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aW()},
eS:function(a){var t,s,r,q,p
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
if(q===r.c)r.bK();++r.d}this.y=!1}this.aW()},
e4:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.t(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eR:function(a){var t,s,r
if(this.ch==null)return
for(t=J.t(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.D(new P.r("removeRange"))
P.jd(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cX:function(a,b){if(!this.r.w(0,a))return
this.db=b},
eB:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.G(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jb(null,null)
this.cx=t}t.S(0,new H.hP(a,c))},
eA:function(a,b){var t
if(!this.r.w(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.ax()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jb(null,null)
this.cx=t}t.S(0,this.geI())},
eC:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.ak(a)
if(b!=null)P.ak(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aJ(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bS(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.G(0,s)},
af:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.O(o)
p=H.aF(o)
this.eC(q,p)
if(this.db){this.ax()
if(this===u.globalState.e)throw o}}finally{this.cy=H.mL(r)
u.globalState.d=H.jp(t,"$isb0")
if(t!=null)$=t.geG()
if(this.cx!=null)for(;n=this.cx,!n.gai(n);)this.cx.cm().$0()}return s},
cj:function(a){return this.b.h(0,a)},
bA:function(a,b){var t=this.b
if(t.C(0,a))throw H.e(P.cf("Registry: ports must be registered only once."))
t.i(0,a,b)},
aW:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.ax()},
ax:function(){var t,s,r
t=this.cx
if(t!=null)t.U(0)
for(t=this.b,s=t.gcI(t),s=s.gv(s);s.p();)s.gt().dD()
t.U(0)
this.c.U(0)
u.globalState.z.ak(0,this.a)
this.dx.U(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].G(0,t[r+1])
this.ch=null}},
geG:function(){return this.d},
geh:function(){return this.e}}
H.hP.prototype={
$0:function(){this.a.G(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hx.prototype={
en:function(){var t=this.a
if(t.b===t.c)return
return t.cm()},
cp:function(){var t,s,r
t=this.en()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.C(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gai(s)}else s=!1
else s=!1
else s=!1
if(s)H.D(P.cf("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gai(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aS(["command","close"])
r=new H.aj(!0,new P.dy(0,null,null,null,null,null,0,[null,P.m])).J(r)
s.toString
self.postMessage(r)}return!1}t.eO()
return!0},
bP:function(){if(self.window!=null)new H.hy(this).$0()
else for(;this.cp(););},
al:function(){var t,s,r,q,p
if(!u.globalState.x)this.bP()
else try{this.bP()}catch(r){t=H.O(r)
s=H.aF(r)
q=u.globalState.Q
p=P.aS(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.aj(!0,P.bT(null,P.m)).J(p)
q.toString
self.postMessage(p)}}}
H.hy.prototype={
$0:function(){if(!this.a.cp())return
P.mk(C.z,this)},
$S:function(){return{func:1,v:true}}}
H.b1.prototype={
eO:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.af(this.b)}}
H.hU.prototype={}
H.eB.prototype={
$0:function(){H.lZ(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eC.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bh(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bh(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aW()},
$S:function(){return{func:1,v:true}}}
H.hq.prototype={}
H.be.prototype={
G:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mz(b)
if(t.geh()===s){s=J.Z(r)
switch(s.h(r,0)){case"pause":t.bU(s.h(r,1),s.h(r,2))
break
case"resume":t.eS(s.h(r,1))
break
case"add-ondone":t.e4(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eR(s.h(r,1))
break
case"set-errors-fatal":t.cX(s.h(r,1),s.h(r,2))
break
case"ping":t.eB(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eA(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ak(0,s)
break}return}u.globalState.f.a.S(0,new H.b1(t,new H.hW(this,r),"receive"))},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.be){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.hW.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dB(0,this.b)},
$S:function(){return{func:1}}}
H.bV.prototype={
G:function(a,b){var t,s,r
t=P.aS(["command","message","port",this,"msg",b])
s=new H.aj(!0,P.bT(null,P.m)).J(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bV){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.d8((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bb.prototype={
dD:function(){this.c=!0
this.b=null},
dB:function(a,b){if(this.c)return
this.b.$1(b)},
$ismd:1}
H.fZ.prototype={
dq:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.S(0,new H.b1(s,new H.h_(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.bZ(new H.h0(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.r("Timer greater than 0."))}}}
H.h_.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.h0.prototype={
$0:function(){this.a.c=null
H.iI()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ao.prototype={
gu:function(a){var t=this.a
t=C.b.aT(t,0)^C.b.I(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
w:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ao){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.aj.prototype={
J:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.t(a)
if(!!t.$isbA)return["buffer",a]
if(!!t.$isba)return["typed",a]
if(!!t.$isl)return this.cT(a)
if(!!t.$islW){r=this.gcQ()
q=t.gD(a)
q=H.jc(q,r,H.a_(q,"V",0),null)
q=P.k9(q,!0,H.a_(q,"V",0))
t=t.gcI(a)
t=H.jc(t,r,H.a_(t,"V",0),null)
return["map",q,P.k9(t,!0,H.a_(t,"V",0))]}if(!!t.$isk7)return this.cU(a)
if(!!t.$isa)this.cG(a)
if(!!t.$ismd)this.am(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbe)return this.cV(a)
if(!!t.$isbV)return this.cW(a)
if(!!t.$isb5){p=a.$static_name
if(p==null)this.am(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isao)return["capability",a.a]
if(!(a instanceof P.n))this.cG(a)
return["dart",u.classIdExtractor(a),this.cS(u.classFieldsExtractor(a))]},
am:function(a,b){throw H.e(new P.r((b==null?"Can't transmit:":b)+" "+H.f(a)))},
cG:function(a){return this.am(a,null)},
cT:function(a){var t
H.d(typeof a!=="string")
t=this.cR(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.am(a,"Can't serialize indexable: ")},
cR:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.J(a[s])
return t},
cS:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.J(a[t]))
return a},
cU:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.am(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.J(a[t[r]])
return["js-object",t,s]},
cW:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cV:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b_.prototype={
V:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.jJ("Bad serialized message: "+H.f(a)))
switch(C.a.gex(a)){case"ref":H.d(J.E(a[0],"ref"))
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
s=H.C(this.ae(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.E(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.C(this.ae(t),[null])
case"mutable":H.d(J.E(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.ae(t)
case"const":H.d(J.E(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.C(this.ae(t),[null])
s.fixed$length=Array
return s
case"map":return this.eq(a)
case"sendport":return this.er(a)
case"raw sendport":H.d(J.E(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.ep(a)
case"function":H.d(J.E(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.E(a[0],"capability"))
return new H.ao(a[1])
case"dart":H.d(J.E(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.l(this.b,p)
this.ae(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.f(a))}},
ae:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.V(a[t]))
return a},
eq:function(a){var t,s,r,q,p
H.d(J.E(a[0],"map"))
t=a[1]
s=a[2]
r=P.K()
C.a.l(this.b,r)
t=J.lr(t,this.geo()).eY(0)
for(q=J.Z(s),p=0;p<t.length;++p)r.i(0,t[p],this.V(q.h(s,p)))
return r},
er:function(a){var t,s,r,q,p,o,n
H.d(J.E(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cj(r)
if(o==null)return
n=new H.be(o,s)}else n=new H.bV(t,r,s)
C.a.l(this.b,n)
return n},
ep:function(a){var t,s,r,q,p,o
H.d(J.E(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.Z(t),p=J.Z(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.V(p.h(s,o))
return r}}
H.fr.prototype={}
H.h5.prototype={
O:function(a){var t,s,r
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
H.de.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eI.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.h9.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.iU.prototype={
$1:function(a){if(!!J.t(a).$isb7)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dA.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.iD.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iE.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iF.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iG.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iH.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.b5.prototype={
k:function(a){return"Closure '"+H.dh(this).trim()+"'"},
$isj5:1,
gf2:function(){return this},
$D:null}
H.fT.prototype={}
H.fF.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bl.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bl))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.aU(this.a)
else s=typeof t!=="object"?J.am(t):H.aU(t)
return(s^H.aU(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.fn(t)}}
H.h7.prototype={
k:function(a){return this.a}}
H.dQ.prototype={
k:function(a){return this.a}}
H.fw.prototype={
k:function(a){return"RuntimeError: "+H.f(this.a)}}
H.hk.prototype={
k:function(a){return C.i.a5("Assertion failed: ",P.j4(this.a))}}
H.aB.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.am(this.a)},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aB){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ae.prototype={
gj:function(a){return this.a},
gai:function(a){return this.a===0},
gD:function(a){return new H.eL(this,[H.aG(this,0)])},
gcI:function(a){return H.jc(this.gD(this),new H.eH(this),H.aG(this,0),H.aG(this,1))},
C:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bH(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bH(s,b)}else return this.eD(b)},
eD:function(a){var t=this.d
if(t==null)return!1
return this.ah(this.ar(t,this.ag(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ac(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ac(r,b)
return s==null?null:s.b}else return this.eE(b)},
eE:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.ar(t,this.ag(a))
r=this.ah(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aQ()
this.b=t}this.by(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aQ()
this.c=s}this.by(s,b,c)}else{r=this.d
if(r==null){r=this.aQ()
this.d=r}q=this.ag(b)
p=this.ar(r,q)
if(p==null)this.aS(r,q,[this.aR(b,c)])
else{o=this.ah(p,b)
if(o>=0)p[o].b=c
else p.push(this.aR(b,c))}}},
ak:function(a,b){if(typeof b==="string")return this.bN(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bN(this.c,b)
else return this.eF(b)},
eF:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.ar(t,this.ag(a))
r=this.ah(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bS(q)
return q.b},
U:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
av:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.U(this))
t=t.c}},
by:function(a,b,c){var t=this.ac(a,b)
if(t==null)this.aS(a,b,this.aR(b,c))
else t.b=c},
bN:function(a,b){var t
if(a==null)return
t=this.ac(a,b)
if(t==null)return
this.bS(t)
this.bI(a,b)
return t.b},
aR:function(a,b){var t,s
t=new H.eK(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bS:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
ag:function(a){return J.am(a)&0x3ffffff},
ah:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.E(a[s].a,b))return s
return-1},
k:function(a){return P.m3(this)},
ac:function(a,b){return a[b]},
ar:function(a,b){return a[b]},
aS:function(a,b,c){H.d(c!=null)
a[b]=c},
bI:function(a,b){delete a[b]},
bH:function(a,b){return this.ac(a,b)!=null},
aQ:function(){var t=Object.create(null)
this.aS(t,"<non-identifier-key>",t)
this.bI(t,"<non-identifier-key>")
return t},
$islW:1}
H.eH.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.eK.prototype={}
H.eL.prototype={
gj:function(a){return this.a.a},
gv:function(a){var t,s
t=this.a
s=new H.eM(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eM.prototype={
gt:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.U(t))
else{t=this.c
if(t==null){this.sbx(null)
return!1}else{this.sbx(t.a)
this.c=this.c.c
return!0}}},
sbx:function(a){this.d=a}}
H.iz.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.iA.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.q]}}}
H.iB.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.q]}}}
H.bA.prototype={
gA:function(a){return C.ae},
$isbA:1}
H.ba.prototype={
dO:function(a,b,c,d){var t=P.ag(b,0,c,d,null)
throw H.e(t)},
bC:function(a,b,c,d){if(b>>>0!==b||b>c)this.dO(a,b,c,d)},
$isba:1}
H.eX.prototype={
gA:function(a){return C.af}}
H.d7.prototype={
gj:function(a){return a.length},
e_:function(a,b,c,d,e){var t,s,r
t=a.length
this.bC(a,b,t,"start")
this.bC(a,c,t,"end")
if(b>c)throw H.e(P.ag(b,0,c,null,null))
s=c-b
r=d.length
if(r-e<s)throw H.e(new P.ar("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$isl:1,
$asl:function(){},
$iso:1,
$aso:function(){}}
H.d8.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.M(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.D(H.M(a,b))
a[b]=c},
E:function(a,b,c,d,e){this.e_(a,b,c,d,e)
return},
a8:function(a,b,c,d){return this.E(a,b,c,d,0)}}
H.d9.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.D(H.M(a,b))
a[b]=c},
E:function(a,b,c,d,e){this.d6(a,b,c,d,e)},
a8:function(a,b,c,d){return this.E(a,b,c,d,0)},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.d6.prototype={
gA:function(a){return C.ag},
$isc:1,
$asc:function(){return[P.J]},
$isb:1,
$asb:function(){return[P.J]},
$iseq:1}
H.eY.prototype={
gA:function(a){return C.ah},
$isc:1,
$asc:function(){return[P.J]},
$isb:1,
$asb:function(){return[P.J]}}
H.eZ.prototype={
gA:function(a){return C.ai},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.f_.prototype={
gA:function(a){return C.aj},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$isk3:1}
H.f0.prototype={
gA:function(a){return C.ak},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.f1.prototype={
gA:function(a){return C.ao},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$iskr:1}
H.f2.prototype={
gA:function(a){return C.ap},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$isks:1}
H.da.prototype={
gA:function(a){return C.aq},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.f3.prototype={
gA:function(a){return C.ar},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$iskt:1}
H.bB.prototype={
$asl:function(){},
$isc:1,
$asc:function(){return[P.m]},
$aso:function(){},
$isb:1,
$asb:function(){return[P.m]}}
H.bC.prototype={
$asl:function(){},
$isc:1,
$asc:function(){return[P.J]},
$aso:function(){},
$isb:1,
$asb:function(){return[P.J]}}
H.bD.prototype={
$asl:function(){},
$asc:function(){return[P.J]},
$aso:function(){},
$asb:function(){return[P.J]}}
H.bE.prototype={
$asl:function(){},
$asc:function(){return[P.m]},
$aso:function(){},
$asb:function(){return[P.m]}}
P.hm.prototype={
$1:function(a){var t,s
H.iI()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.hl.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hn.prototype={
$0:function(){H.iI()
this.a.$0()},
$S:function(){return{func:1}}}
P.ho.prototype={
$0:function(){H.iI()
this.a.$0()},
$S:function(){return{func:1}}}
P.hs.prototype={}
P.ib.prototype={
ef:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.ar("Future already completed"))
t.aM(b)}}
P.dx.prototype={
eL:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.b4(this.d,a.a)},
ez:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bh(s,{func:1,args:[P.n,P.bI]}))return t.eU(s,a.a,a.b)
else return t.b4(s,a.a)}}
P.av.prototype={
cu:function(a,b){var t,s,r
t=$.B
if(t!==C.f){t.toString
if(b!=null)b=P.mD(b,t)}s=new P.av(0,t,null,[null])
r=b==null?1:3
this.bz(new P.dx(null,s,r,a,b,[H.aG(this,0),null]))
return s},
ct:function(a){return this.cu(a,null)},
bD:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
bz:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.jp(this.c,"$isdx")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.bz(a)
return}this.bD(t)}H.d(this.a>=4)
t=this.b
t.toString
P.io(null,null,t,new P.hD(this,a))}},
bM:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.bM(a)
return}this.bD(s)}H.d(this.a>=4)
t.a=this.ad(a)
s=this.b
s.toString
P.io(null,null,s,new P.hH(t,this))}},
bO:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.ad(t)},
ad:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aM:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.dD(a,"$iset",t,"$aset"))if(H.dD(a,"$isav",t,null))P.kw(a,this)
else P.mt(a,this)
else{s=this.bO()
H.d(this.a<4)
this.a=4
this.c=a
P.bP(this,s)}},
ao:function(a,b){var t
H.d(this.a<4)
t=this.bO()
H.d(this.a<4)
this.a=8
this.c=new P.b4(a,b)
P.bP(this,t)},
dF:function(a){return this.ao(a,null)},
$iset:1,
gaU:function(){return this.a},
gdX:function(){return this.c}}
P.hD.prototype={
$0:function(){P.bP(this.a,this.b)},
$S:function(){return{func:1}}}
P.hH.prototype={
$0:function(){P.bP(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hE.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.aM(a)},
$S:function(){return{func:1,args:[,]}}}
P.hF.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.ao(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hG.prototype={
$0:function(){this.a.ao(this.b,this.c)},
$S:function(){return{func:1}}}
P.hK.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.co(q.d)}catch(n){s=H.O(n)
r=H.aF(n)
if(this.c){q=this.a.a
H.d(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.d(q.a===8)
p.b=q.c}else p.b=new P.b4(s,r)
p.a=!0
return}if(!!J.t(t).$iset){if(t instanceof P.av&&t.gaU()>=4){if(t.gaU()===8){q=t
H.d(q.gaU()===8)
p=this.b
p.b=q.gdX()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.ct(new P.hL(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hL.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.hJ.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.b4(r.d,this.c)}catch(q){t=H.O(q)
s=H.aF(q)
r=this.a
r.b=new P.b4(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hI.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.eL(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.ez(t)
p.a=!1}}catch(o){s=H.O(o)
r=H.aF(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.b4(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.dv.prototype={}
P.fJ.prototype={
gj:function(a){var t,s
t={}
s=new P.av(0,$.B,null,[P.m])
t.a=0
this.eJ(new P.fL(t),!0,new P.fM(t,s),s.gdE())
return s}}
P.fL.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.fM.prototype={
$0:function(){this.b.aM(this.a.a)},
$S:function(){return{func:1}}}
P.fK.prototype={}
P.b4.prototype={
k:function(a){return H.f(this.a)},
$isb7:1}
P.ij.prototype={}
P.im.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.df()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.hY.prototype={
eV:function(a){var t,s,r
try{if(C.f===$.B){a.$0()
return}P.kB(null,null,this,a)}catch(r){t=H.O(r)
s=H.aF(r)
P.il(null,null,this,t,s)}},
eW:function(a,b){var t,s,r
try{if(C.f===$.B){a.$1(b)
return}P.kC(null,null,this,a,b)}catch(r){t=H.O(r)
s=H.aF(r)
P.il(null,null,this,t,s)}},
ea:function(a){return new P.i_(this,a)},
aX:function(a){return new P.hZ(this,a)},
eb:function(a){return new P.i0(this,a)},
h:function(a,b){return},
co:function(a){if($.B===C.f)return a.$0()
return P.kB(null,null,this,a)},
b4:function(a,b){if($.B===C.f)return a.$1(b)
return P.kC(null,null,this,a,b)},
eU:function(a,b,c){if($.B===C.f)return a.$2(b,c)
return P.mE(null,null,this,a,b,c)}}
P.i_.prototype={
$0:function(){return this.a.co(this.b)},
$S:function(){return{func:1}}}
P.hZ.prototype={
$0:function(){return this.a.eV(this.b)},
$S:function(){return{func:1}}}
P.i0.prototype={
$1:function(a){return this.a.eW(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dy.prototype={
ag:function(a){return H.n5(a)&0x3ffffff},
ah:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hR.prototype={
gv:function(a){var t=new P.bS(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
B:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dG(b)},
dG:function(a){var t=this.d
if(t==null)return!1
return this.aq(t[this.ap(a)],a)>=0},
cj:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.B(0,a)?a:null
else return this.dR(a)},
dR:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ap(a)]
r=this.aq(s,a)
if(r<0)return
return J.bi(s,r).gdI()},
l:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bE(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bE(r,b)}else return this.S(0,b)},
S:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.mx()
this.d=t}s=this.ap(b)
r=t[s]
if(r==null){q=[this.aL(b)]
H.d(q!=null)
t[s]=q}else{if(this.aq(r,b)>=0)return!1
r.push(this.aL(b))}return!0},
ak:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bF(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bF(this.c,b)
else return this.dS(0,b)},
dS:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ap(b)]
r=this.aq(s,b)
if(r<0)return!1
this.bG(s.splice(r,1)[0])
return!0},
U:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bE:function(a,b){var t
if(a[b]!=null)return!1
t=this.aL(b)
H.d(!0)
a[b]=t
return!0},
bF:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bG(t)
delete a[b]
return!0},
aL:function(a){var t,s
t=new P.hS(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bG:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
ap:function(a){return J.am(a)&0x3ffffff},
aq:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.E(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.hS.prototype={
gdI:function(){return this.a}}
P.bS.prototype={
gt:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.U(t))
else{t=this.c
if(t==null){this.saa(null)
return!1}else{this.saa(t.a)
this.c=this.c.b
return!0}}},
saa:function(a){this.d=a}}
P.hO.prototype={}
P.d1.prototype={}
P.u.prototype={
gv:function(a){return new H.d2(a,this.gj(a),0,null,[H.a_(a,"u",0)])},
q:function(a,b){return this.h(a,b)},
ck:function(a,b){return new H.by(a,b,[H.a_(a,"u",0),null])},
ey:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.e(new P.U(a))}return s},
E:function(a,b,c,d,e){var t,s,r,q
P.jd(b,c,this.gj(a),null,null,null)
t=c-b
if(t===0)return
if(H.dD(d,"$isb",[H.a_(a,"u",0)],"$asb")){s=e
r=d}else{r=H.mi(d,e,null,H.a_(d,"u",0)).b6(0,!1)
s=0}if(s+t>r.length)throw H.e(H.k6())
if(s<b)for(q=t-1;q>=0;--q)this.i(a,b+q,r[s+q])
else for(q=0;q<t;++q)this.i(a,b+q,r[s+q])},
a8:function(a,b,c,d){return this.E(a,b,c,d,0)},
bi:function(a,b,c){this.a8(a,b,b+c.length,c)},
k:function(a){return P.eD(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.eQ.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.f(a)
t.a=s+": "
t.a+=H.f(b)},
$S:function(){return{func:1,args:[,,]}}}
P.eN.prototype={
gv:function(a){return new P.hT(this,this.c,this.d,this.b,null,this.$ti)},
gai:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
q:function(a,b){var t,s
t=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=t)H.D(P.A(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
U:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eD(this,"{","}")},
cm:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.eE());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
S:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bK();++this.d},
bK:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.C(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.E(s,0,q,t,r)
C.a.E(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbQ(s)},
dh:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbQ(H.C(t,[b]))},
sbQ:function(a){this.a=a},
$asc:null}
P.hT.prototype={
gt:function(){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.D(new P.U(t))
s=this.d
if(s===this.b){this.saa(null)
return!1}this.saa(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
saa:function(a){this.e=a}}
P.fz.prototype={
M:function(a,b){var t
for(t=J.bk(b);t.p();)this.l(0,t.gt())},
k:function(a){return P.eD(this,"{","}")},
$isc:1,
$asc:null}
P.fy.prototype={}
P.bG.prototype={$isc:1,$asc:null,$isb:1,$asb:null}
P.ax.prototype={}
P.G.prototype={}
P.bm.prototype={
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.bm))return!1
return this.a===b.a&&this.b===b.b},
R:function(a,b){return C.b.R(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aT(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.lN(H.mc(this))
s=P.c9(H.ma(this))
r=P.c9(H.m6(this))
q=P.c9(H.m7(this))
p=P.c9(H.m9(this))
o=P.c9(H.mb(this))
n=P.lO(H.m8(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isG:1,
$asG:function(){return[P.bm]}}
P.J.prototype={$isG:1,
$asG:function(){return[P.T]}}
P.aN.prototype={
aC:function(a,b){return C.b.aC(this.a,b.gdH())},
aB:function(a,b){return C.b.aB(this.a,b.gdH())},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.aN))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
R:function(a,b){return C.b.R(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.e1()
s=this.a
if(s<0)return"-"+new P.aN(0-s).k(0)
r=t.$1(C.b.I(s,6e7)%60)
q=t.$1(C.b.I(s,1e6)%60)
p=new P.e0().$1(s%1e6)
return""+C.b.I(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isG:1,
$asG:function(){return[P.aN]}}
P.e0.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.q,args:[P.m]}}}
P.e1.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.q,args:[P.m]}}}
P.b7.prototype={}
P.c4.prototype={
k:function(a){return"Assertion failed"}}
P.df.prototype={
k:function(a){return"Throw of null."}}
P.an.prototype={
gaO:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaN:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.f(t)
q=this.gaO()+s+r
if(!this.a)return q
p=this.gaN()
o=P.j4(this.b)
return q+p+": "+H.f(o)}}
P.dj.prototype={
gaO:function(){return"RangeError"},
gaN:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.ez.prototype={
gaO:function(){return"RangeError"},
gaN:function(){H.d(this.a)
if(J.l_(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gj:function(a){return this.f}}
P.r.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.dt.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.ar.prototype={
k:function(a){return"Bad state: "+this.a}}
P.U.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.j4(t))+"."}}
P.dn.prototype={
k:function(a){return"Stack Overflow"},
$isb7:1}
P.dU.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hC.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.e3.prototype={
k:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.D(P.jK(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.ka(b,"expando$values")
return s==null?null:H.ka(s,t)}}
P.m.prototype={$isG:1,
$asG:function(){return[P.T]}}
P.V.prototype={
az:function(a,b){return new H.du(this,b,[H.a_(this,"V",0)])},
gj:function(a){var t,s
H.d(!this.$isc)
t=this.gv(this)
for(s=0;t.p();)++s
return s},
ga0:function(a){var t,s
t=this.gv(this)
if(!t.p())throw H.e(H.eE())
s=t.gt()
if(t.p())throw H.e(H.m2())
return s},
q:function(a,b){var t,s,r
if(b<0)H.D(P.ag(b,0,null,"index",null))
for(t=this.gv(this),s=0;t.p();){r=t.gt()
if(b===s)return r;++s}throw H.e(P.A(b,this,"index",null,s))},
k:function(a){return P.m1(this,"(",")")}}
P.cZ.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.aA.prototype={}
P.aT.prototype={
gu:function(a){return P.n.prototype.gu.call(this,this)},
k:function(a){return"null"}}
P.T.prototype={$isG:1,
$asG:function(){return[P.T]}}
P.n.prototype={constructor:P.n,$isn:1,
w:function(a,b){return this===b},
gu:function(a){return H.aU(this)},
k:function(a){return H.fn(this)},
gA:function(a){return new H.aB(H.iw(this),null)},
toString:function(){return this.k(this)}}
P.bI.prototype={}
P.q.prototype={$isG:1,
$asG:function(){return[P.q]}}
P.bJ.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga1:function(){return this.a}}
W.k.prototype={}
W.dK.prototype={
k:function(a){return String(a)},
$isa:1}
W.dL.prototype={
k:function(a){return String(a)},
$isa:1}
W.a1.prototype={$isn:1}
W.dO.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
q:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a1]},
$isc:1,
$asc:function(){return[W.a1]},
$iso:1,
$aso:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.c5.prototype={}
W.aL.prototype={$isa:1,$isaL:1}
W.c6.prototype={
b9:function(a,b,c){if(c!=null)return this.dL(a,b,P.mO(c,null))
return this.dM(a,b)},
cN:function(a,b){return this.b9(a,b,null)},
dL:function(a,b,c){return a.getContext(b,c)},
dM:function(a,b){return a.getContext(b)}}
W.c7.prototype={
at:function(a,b,c){return a.addColorStop(b,c)}}
W.c8.prototype={
c6:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
ew:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
aA:function(a){return P.ir(a.getContextAttributes())}}
W.aM.prototype={$isa:1,
gj:function(a){return a.length}}
W.dS.prototype={$isa:1}
W.y.prototype={$isn:1}
W.b6.prototype={
bB:function(a,b){var t,s
t=$.$get$jT()
s=t[b]
if(typeof s==="string")return s
s=this.e1(a,b)
t[b]=s
return s},
e1:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.lP()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.dT.prototype={}
W.dV.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.dW.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
W.ca.prototype={}
W.bn.prototype={
e5:function(a,b){return a.adoptNode(b)},
cO:function(a,b){return a.getElementById(b)},
eP:function(a,b){return a.querySelector(b)}}
W.cb.prototype={$isa:1}
W.dX.prototype={
k:function(a){return String(a)}}
W.cc.prototype={
ek:function(a,b){return a.createHTMLDocument(b)}}
W.dY.prototype={
gay:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
W.cd.prototype={
gay:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
W.ce.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gZ(a))+" x "+H.f(this.gY(a))},
w:function(a,b){var t
if(b==null)return!1
t=J.t(b)
if(!t.$isH)return!1
return a.left===t.gb0(b)&&a.top===t.gb7(b)&&this.gZ(a)===t.gZ(b)&&this.gY(a)===t.gY(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gZ(a)
q=this.gY(a)
return W.kz(W.b2(W.b2(W.b2(W.b2(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gY:function(a){return a.height},
gb0:function(a){return a.left},
gb7:function(a){return a.top},
gZ:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isH:1,
$asH:function(){}}
W.dZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
q:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]},
$iso:1,
$aso:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
W.e_.prototype={
gj:function(a){return a.length}}
W.a2.prototype={
ge8:function(a){return new W.hw(a)},
k:function(a){return a.localName},
N:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.k0
if(t==null){t=H.C([],[W.dc])
s=new W.dd(t)
C.a.l(t,W.kx(null))
C.a.l(t,W.kA())
$.k0=s
d=s}else d=t
t=$.k_
if(t==null){t=new W.dB(d)
$.k_=t
c=t}else{t.a=d
c=t}}if($.ay==null){t=document
s=t.implementation
s=(s&&C.M).ek(s,"")
$.ay=s
$.j3=s.createRange()
s=$.ay
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.ay.head;(t&&C.N).P(t,r)}t=$.ay
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jp(s,"$isaL")}t=$.ay
if(!!this.$isaL)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.ay.body;(t&&C.o).P(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.B(C.X,a.tagName)){t=$.j3;(t&&C.F).cP(t,q)
t=$.j3
p=(t&&C.F).ei(t,b)}else{q.innerHTML=b
p=$.ay.createDocumentFragment()
for(t=J.j(p);s=q.firstChild,s!=null;)t.P(p,s)}t=$.ay.body
if(q==null?t!=null:q!==t)J.lt(q)
c.bh(p)
C.r.e5(document,p)
return p},
ej:function(a,b,c){return this.N(a,b,c,null)},
cZ:function(a,b,c,d){a.textContent=null
this.P(a,this.N(a,b,c,d))},
cY:function(a,b){return this.cZ(a,b,null,null)},
a6:function(a,b){return a.getAttribute(b)},
dT:function(a,b){return a.removeAttribute(b)},
$isa:1,
$isn:1,
$isa2:1,
$ish:1,
$isp:1,
geX:function(a){return a.tagName}}
W.ip.prototype={
$1:function(a){return!!J.t(a).$isa2},
$S:function(){return{func:1,args:[,]}}}
W.i.prototype={$isn:1,$isi:1}
W.h.prototype={
dC:function(a,b,c,d){return a.addEventListener(b,H.bZ(c,1),!1)},
$isn:1,
$ish:1}
W.a3.prototype={$isn:1}
W.en.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
q:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]},
$iso:1,
$aso:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.eo.prototype={
gj:function(a){return a.length}}
W.es.prototype={
gj:function(a){return a.length}}
W.a4.prototype={$isn:1}
W.ci.prototype={}
W.ev.prototype={
gj:function(a){return a.length}}
W.bv.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
q:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]},
$iso:1,
$aso:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cj.prototype={}
W.ew.prototype={
G:function(a,b){return a.send(b)}}
W.bw.prototype={}
W.eA.prototype={$isa:1,$isa2:1}
W.aR.prototype={$isn:1,$isi:1,$isaR:1}
W.eO.prototype={
k:function(a){return String(a)}}
W.eT.prototype={
gj:function(a){return a.length}}
W.eU.prototype={
f3:function(a,b,c){return a.send(b,c)},
G:function(a,b){return a.send(b)}}
W.bz.prototype={}
W.a6.prototype={$isn:1}
W.eV.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
q:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]},
$iso:1,
$aso:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.L.prototype={$isn:1,$isi:1,$isL:1}
W.f4.prototype={$isa:1}
W.Q.prototype={
ga0:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.ar("No elements"))
if(s>1)throw H.e(new P.ar("More than one element"))
return t.firstChild},
M:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.j(s),p=0;p<r;++p)q.P(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.l1(t,c,C.D.h(t.childNodes,b))},
gv:function(a){var t=this.a.childNodes
return new W.ch(t,t.length,-1,null,[H.a_(t,"z",0)])},
E:function(a,b,c,d,e){throw H.e(new P.r("Cannot setRange on Node list"))},
a8:function(a,b,c,d){return this.E(a,b,c,d,0)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.D.h(this.a.childNodes,b)},
$asc:function(){return[W.p]},
$asd1:function(){return[W.p]},
$asb:function(){return[W.p]},
$asbG:function(){return[W.p]}}
W.p.prototype={
eQ:function(a){var t=a.parentNode
if(t!=null)J.bj(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.d3(a):t},
P:function(a,b){return a.appendChild(b)},
dU:function(a,b){return a.removeChild(b)},
dV:function(a,b,c){return a.replaceChild(b,c)},
$isn:1,
$ish:1,
$isp:1,
gb2:function(a){return a.previousSibling}}
W.db.prototype={
b3:function(a){return a.previousNode()}}
W.bF.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
q:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]},
$iso:1,
$aso:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.fd.prototype={$isa:1}
W.ff.prototype={
gj:function(a){return a.length}}
W.a7.prototype={$isn:1,
gj:function(a){return a.length}}
W.fi.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
q:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]},
$iso:1,
$aso:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.fl.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fm.prototype={
G:function(a,b){return a.send(b)}}
W.di.prototype={
ei:function(a,b){return a.createContextualFragment(b)},
cP:function(a,b){return a.selectNodeContents(b)}}
W.fv.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
W.dk.prototype={
G:function(a,b){return a.send(b)}}
W.fx.prototype={
gj:function(a){return a.length}}
W.fB.prototype={$isa:1}
W.a8.prototype={$isn:1,$ish:1}
W.fC.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
q:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]},
$iso:1,
$aso:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.a9.prototype={$isn:1}
W.fD.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
q:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]},
$iso:1,
$aso:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.aa.prototype={$isn:1,
gj:function(a){return a.length}}
W.fI.prototype={
h:function(a,b){return this.bJ(a,b)},
av:function(a,b){var t,s
for(t=0;!0;++t){s=this.dQ(a,t)
if(s==null)return
b.$2(s,this.bJ(a,s))}},
gj:function(a){return a.length},
bJ:function(a,b){return a.getItem(b)},
dQ:function(a,b){return a.key(b)}}
W.W.prototype={$isn:1}
W.ah.prototype={}
W.dp.prototype={
N:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aF(a,b,c,d)
t=W.lQ("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.Q(s).M(0,new W.Q(t))
return s}}
W.fR.prototype={
N:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aF(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.N(t.createElement("table"),b,c,d)
t.toString
t=new W.Q(t)
r=t.ga0(t)
r.toString
t=new W.Q(r)
q=t.ga0(t)
s.toString
q.toString
new W.Q(s).M(0,new W.Q(q))
return s}}
W.fS.prototype={
N:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aF(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.N(t.createElement("table"),b,c,d)
t.toString
t=new W.Q(t)
r=t.ga0(t)
s.toString
r.toString
new W.Q(s).M(0,new W.Q(r))
return s}}
W.bK.prototype={$isbK:1}
W.ab.prototype={$isn:1,$ish:1}
W.X.prototype={$isn:1,$ish:1}
W.fV.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
q:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.X]},
$isc:1,
$asc:function(){return[W.X]},
$iso:1,
$aso:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.fW.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
q:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]},
$iso:1,
$aso:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.fY.prototype={
gj:function(a){return a.length}}
W.ac.prototype={$isn:1}
W.aV.prototype={$isn:1,$isi:1,$isaV:1}
W.h1.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
q:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]},
$iso:1,
$aso:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.h2.prototype={
gj:function(a){return a.length}}
W.bd.prototype={}
W.h4.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
W.ds.prototype={
b3:function(a){return a.previousNode()}}
W.aC.prototype={}
W.ha.prototype={
k:function(a){return String(a)},
$isa:1}
W.hc.prototype={
gj:function(a){return a.length}}
W.hf.prototype={
gj:function(a){return a.length}}
W.hg.prototype={
G:function(a,b){return a.send(b)}}
W.aY.prototype={
gem:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.r("deltaY is not supported"))},
$isn:1,
$isi:1,
$isL:1,
$isaY:1}
W.bO.prototype={
ge7:function(a){var t,s
t=P.T
s=new P.av(0,$.B,null,[t])
this.dK(a)
this.dW(a,W.kE(new W.hi(new P.ib(s,[t]))))
return s},
dW:function(a,b){return a.requestAnimationFrame(H.bZ(b,1))},
dK:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.hi.prototype={
$1:function(a){this.a.ef(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hj.prototype={$isa:1}
W.aZ.prototype={$isa:1}
W.hr.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
w:function(a,b){var t,s,r
if(b==null)return!1
t=J.t(b)
if(!t.$isH)return!1
s=a.left
r=t.gb0(b)
if(s==null?r==null:s===r){s=a.top
r=t.gb7(b)
if(s==null?r==null:s===r){s=a.width
r=t.gZ(b)
if(s==null?r==null:s===r){s=a.height
t=t.gY(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){var t,s,r,q
t=J.am(a.left)
s=J.am(a.top)
r=J.am(a.width)
q=J.am(a.height)
return W.kz(W.b2(W.b2(W.b2(W.b2(0,t),s),r),q))},
$isH:1,
$asH:function(){},
gY:function(a){return a.height},
gb0:function(a){return a.left},
gb7:function(a){return a.top},
gZ:function(a){return a.width}}
W.dw.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
q:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[P.H]},
$isc:1,
$asc:function(){return[P.H]},
$iso:1,
$aso:function(){return[P.H]},
$isb:1,
$asb:function(){return[P.H]}}
W.ht.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
q:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.y]},
$isc:1,
$asc:function(){return[W.y]},
$iso:1,
$aso:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.hu.prototype={$isa:1}
W.hv.prototype={
gY:function(a){return a.height},
gZ:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hM.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
q:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]},
$iso:1,
$aso:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.hN.prototype={$isa:1}
W.dz.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
q:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]},
$iso:1,
$aso:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.i5.prototype={$isa:1}
W.i8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
q:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]},
$iso:1,
$aso:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.i9.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
q:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.W]},
$isc:1,
$asc:function(){return[W.W]},
$iso:1,
$aso:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.ih.prototype={$isa:1}
W.ii.prototype={$isa:1}
W.hp.prototype={
av:function(a,b){var t,s,r,q,p,o
for(t=this.gD(this),s=t.length,r=this.a,q=J.j(r),p=0;p<t.length;t.length===s||(0,H.N)(t),++p){o=t[p]
b.$2(o,q.a6(r,o))}},
gD:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.C([],[P.q])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
gdN:function(){return this.a}}
W.hw.prototype={
h:function(a,b){return J.j0(this.a,b)},
gj:function(a){return this.gD(this).length}}
W.hz.prototype={
eJ:function(a,b,c,d){return W.ai(this.a,this.b,a,!1,H.aG(this,0))}}
W.jh.prototype={}
W.hA.prototype={
e3:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.l0(r,this.c,t,!1)}},
dv:function(a,b,c,d,e){this.e3()}}
W.hB.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bR.prototype={
a2:function(a){return $.$get$ky().B(0,W.bo(a))},
T:function(a,b,c){var t,s,r
t=W.bo(a)
s=$.$get$ji()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dw:function(a){var t,s
t=$.$get$ji()
if(t.gai(t)){for(s=0;s<262;++s)t.i(0,C.W[s],W.mV())
for(s=0;s<12;++s)t.i(0,C.u[s],W.mW())}}}
W.z.prototype={
gv:function(a){return new W.ch(a,this.gj(a),-1,null,[H.a_(a,"z",0)])},
E:function(a,b,c,d,e){throw H.e(new P.r("Cannot setRange on immutable List."))},
a8:function(a,b,c,d){return this.E(a,b,c,d,0)},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.dd.prototype={
a2:function(a){return C.a.bV(this.a,new W.f6(a))},
T:function(a,b,c){return C.a.bV(this.a,new W.f5(a,b,c))}}
W.f6.prototype={
$1:function(a){return a.a2(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.f5.prototype={
$1:function(a){return a.T(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.bU.prototype={
a2:function(a){return this.a.B(0,W.bo(a))},
T:function(a,b,c){var t,s
t=W.bo(a)
s=this.c
if(s.B(0,H.f(t)+"::"+b))return this.d.e6(c)
else if(s.B(0,"*::"+b))return this.d.e6(c)
else{s=this.b
if(s.B(0,H.f(t)+"::"+b))return!0
else if(s.B(0,"*::"+b))return!0
else if(s.B(0,H.f(t)+"::*"))return!0
else if(s.B(0,"*::*"))return!0}return!1},
dA:function(a,b,c,d){var t,s,r
this.a.M(0,c)
t=b.az(0,new W.i6())
s=b.az(0,new W.i7())
this.b.M(0,t)
r=this.c
r.M(0,C.Y)
r.M(0,s)}}
W.i6.prototype={
$1:function(a){return!C.a.B(C.u,a)},
$S:function(){return{func:1,args:[,]}}}
W.i7.prototype={
$1:function(a){return C.a.B(C.u,a)},
$S:function(){return{func:1,args:[,]}}}
W.ic.prototype={
T:function(a,b,c){if(this.d7(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.j0(a,"template")==="")return this.e.B(0,b)
return!1}}
W.id.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.ia.prototype={
a2:function(a){var t=J.t(a)
if(!!t.$isbH)return!1
t=!!t.$isF
if(t&&W.bo(a)==="foreignObject")return!1
if(t)return!0
return!1},
T:function(a,b,c){if(b==="is"||C.i.bk(b,"on"))return!1
return this.a2(a)}}
W.ch.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbL(J.bi(this.a,t))
this.c=t
return!0}this.sbL(null)
this.c=s
return!1},
gt:function(){return this.d},
sbL:function(a){this.d=a}}
W.dc.prototype={}
W.i4.prototype={}
W.dB.prototype={
bh:function(a){new W.ie(this).$2(a,null)},
as:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bj(t,a)}else J.bj(b,a)},
dZ:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lh(a)
r=J.j0(s.gdN(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.O(n)}p="element unprintable"
try{p=J.aJ(a)}catch(n){H.O(n)}try{o=W.bo(a)
this.dY(a,b,t,p,o,s,r)}catch(n){if(H.O(n) instanceof P.an)throw n
else{this.as(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
dY:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.as(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a2(a)){this.as(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.aJ(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.T(a,"is",g)){this.as(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gD(f)
s=H.C(t.slice(0),[H.aG(t,0)])
for(r=f.gD(f).length-1,t=f.a,q=J.j(t);r>=0;--r){p=s[r]
if(!this.a.T(a,J.ly(p),q.a6(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.a6(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.a6(t,p)
q.dT(t,p)}}if(!!J.t(a).$isbK)this.bh(a.content)}}
W.ie.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.dZ(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bj(r,a)}else J.bj(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.li(t)}catch(q){H.O(q)
r=t
J.bj(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.p,W.p]}}}
W.bp.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.bq.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.br.prototype={$isc:1,
$asc:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.bs.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.bt.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.bu.prototype={$isc:1,
$asc:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.ck.prototype={}
W.cE.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.cq.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cx.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cy.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cz.prototype={$isc:1,
$asc:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.cA.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.cB.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cC.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cD.prototype={$isc:1,
$asc:function(){return[P.H]},
$isb:1,
$asb:function(){return[P.H]}}
W.co.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.cp.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.cr.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.ct.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cu.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.cv.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
W.cF.prototype={$isc:1,
$asc:function(){return[P.H]},
$isb:1,
$asb:function(){return[P.H]}}
W.cH.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cR.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cS.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cQ.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cV.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cW.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.cX.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cY.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
W.cI.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.cK.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.cM.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cO.prototype={$isc:1,
$asc:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.cT.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.cU.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
P.iq.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.q,,]}}}
P.hQ.prototype={
eN:function(){return Math.random()}}
P.hX.prototype={}
P.H.prototype={$asH:null}
P.dJ.prototype={$isa:1}
P.aK.prototype={$isa:1}
P.e4.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e5.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e6.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e7.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e8.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
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
P.eh.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
P.ei.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ej.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
P.ek.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.el.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ep.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.er.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ad.prototype={}
P.az.prototype={$isa:1}
P.ex.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ap.prototype={$isn:1}
P.eJ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.W(a,b)},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
W:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ap]},
$isb:1,
$asb:function(){return[P.ap]}}
P.eR.prototype={$isa:1}
P.eS.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.aq.prototype={$isn:1}
P.f7.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.W(a,b)},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
W:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.aq]},
$isb:1,
$asb:function(){return[P.aq]}}
P.fe.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fj.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fk.prototype={
gj:function(a){return a.length}}
P.fp.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fq.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bH.prototype={$isa:1,$isbH:1}
P.fN.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.W(a,b)},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
W:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
P.F.prototype={
N:function(a,b,c,d){var t,s,r,q,p,o
t=H.C([],[W.dc])
C.a.l(t,W.kx(null))
C.a.l(t,W.kA())
C.a.l(t,new W.ia())
c=new W.dB(new W.dd(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.o).ej(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.Q(q)
o=t.ga0(t)
for(t=J.j(p);r=o.firstChild,r!=null;)t.P(p,r)
return p},
$isa:1,
$isF:1}
P.fP.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fQ.prototype={$isa:1}
P.dq.prototype={}
P.fU.prototype={$isa:1}
P.bL.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.as.prototype={$isn:1}
P.h3.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.W(a,b)},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
W:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.hb.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hd.prototype={$isa:1}
P.he.prototype={$isa:1}
P.bQ.prototype={$isa:1}
P.i1.prototype={$isa:1}
P.i2.prototype={$isa:1}
P.i3.prototype={$isa:1}
P.cn.prototype={$isc:1,
$asc:function(){return[P.ap]},
$isb:1,
$asb:function(){return[P.ap]}}
P.cl.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
P.cs.prototype={$isc:1,
$asc:function(){return[P.aq]},
$isb:1,
$asb:function(){return[P.aq]}}
P.cw.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.cG.prototype={$isc:1,
$asc:function(){return[P.ap]},
$isb:1,
$asb:function(){return[P.ap]}}
P.cP.prototype={$isc:1,
$asc:function(){return[P.aq]},
$isb:1,
$asb:function(){return[P.aq]}}
P.cL.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.cN.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
P.dN.prototype={
gj:function(a){return a.length}}
P.ft.prototype={
bT:function(a,b){return a.activeTexture(b)},
bW:function(a,b,c){return a.attachShader(b,c)},
bX:function(a,b,c){return a.bindBuffer(b,c)},
bY:function(a,b,c){return a.bindTexture(b,c)},
bZ:function(a,b){return a.blendEquation(b)},
c_:function(a,b,c){return a.blendFunc(b,c)},
c0:function(a,b,c,d){return a.bufferData(b,c,d)},
c2:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c3:function(a,b){return a.compileShader(b)},
c4:function(a){return a.createBuffer()},
c5:function(a){return a.createProgram()},
c7:function(a,b){return a.createShader(b)},
c8:function(a){return a.createTexture()},
ca:function(a,b){return a.depthMask(b)},
cb:function(a,b){return a.disable(b)},
cc:function(a,b,c,d){return a.drawArrays(b,c,d)},
cd:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ce:function(a,b){return a.enable(b)},
cf:function(a,b){return a.enableVertexAttribArray(b)},
aA:function(a){return P.ir(a.getContextAttributes())},
ba:function(a){return a.getError()},
bc:function(a,b){return a.getProgramInfoLog(b)},
bd:function(a,b,c){return a.getProgramParameter(b,c)},
be:function(a,b){return a.getShaderInfoLog(b)},
bf:function(a,b,c){return a.getShaderParameter(b,c)},
bg:function(a,b,c){return a.getUniformLocation(b,c)},
ci:function(a,b){return a.linkProgram(b)},
cl:function(a,b,c){return a.pixelStorei(b,c)},
bj:function(a,b,c){return a.shaderSource(b,c)},
bl:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b5:function(a,b,c,d,e,f,g,h,i,j){this.aV(a,b,c,d,e,f,g)
return},
cq:function(a,b,c,d,e,f,g){return this.b5(a,b,c,d,e,f,g,null,null,null)},
aV:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cr:function(a,b,c,d){return a.texParameterf(b,c,d)},
cs:function(a,b,c,d){return a.texParameteri(b,c,d)},
cv:function(a,b,c){return a.uniform1f(b,c)},
cw:function(a,b,c){return a.uniform1fv(b,c)},
cz:function(a,b,c){return a.uniform1i(b,c)},
cA:function(a,b,c){return a.uniform1iv(b,c)},
cB:function(a,b,c){return a.uniform2fv(b,c)},
cC:function(a,b,c){return a.uniform3fv(b,c)},
cD:function(a,b,c){return a.uniform4fv(b,c)},
cE:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cF:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cH:function(a,b){return a.useProgram(b)},
cJ:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cK:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fu.prototype={
e9:function(a,b){return a.beginTransformFeedback(b)},
ec:function(a,b){return a.bindVertexArray(b)},
el:function(a){return a.createVertexArray()},
es:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eu:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
ev:function(a){return a.endTransformFeedback()},
f0:function(a,b,c,d){this.e2(a,b,c,d)
return},
e2:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
f1:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bT:function(a,b){return a.activeTexture(b)},
bW:function(a,b,c){return a.attachShader(b,c)},
bX:function(a,b,c){return a.bindBuffer(b,c)},
bY:function(a,b,c){return a.bindTexture(b,c)},
bZ:function(a,b){return a.blendEquation(b)},
c_:function(a,b,c){return a.blendFunc(b,c)},
c0:function(a,b,c,d){return a.bufferData(b,c,d)},
c2:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c3:function(a,b){return a.compileShader(b)},
c4:function(a){return a.createBuffer()},
c5:function(a){return a.createProgram()},
c7:function(a,b){return a.createShader(b)},
c8:function(a){return a.createTexture()},
ca:function(a,b){return a.depthMask(b)},
cb:function(a,b){return a.disable(b)},
cc:function(a,b,c,d){return a.drawArrays(b,c,d)},
cd:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ce:function(a,b){return a.enable(b)},
cf:function(a,b){return a.enableVertexAttribArray(b)},
aA:function(a){return P.ir(a.getContextAttributes())},
ba:function(a){return a.getError()},
bc:function(a,b){return a.getProgramInfoLog(b)},
bd:function(a,b,c){return a.getProgramParameter(b,c)},
be:function(a,b){return a.getShaderInfoLog(b)},
bf:function(a,b,c){return a.getShaderParameter(b,c)},
bg:function(a,b,c){return a.getUniformLocation(b,c)},
ci:function(a,b){return a.linkProgram(b)},
cl:function(a,b,c){return a.pixelStorei(b,c)},
bj:function(a,b,c){return a.shaderSource(b,c)},
bl:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b5:function(a,b,c,d,e,f,g,h,i,j){this.aV(a,b,c,d,e,f,g)
return},
cq:function(a,b,c,d,e,f,g){return this.b5(a,b,c,d,e,f,g,null,null,null)},
aV:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cr:function(a,b,c,d){return a.texParameterf(b,c,d)},
cs:function(a,b,c,d){return a.texParameteri(b,c,d)},
cv:function(a,b,c){return a.uniform1f(b,c)},
cw:function(a,b,c){return a.uniform1fv(b,c)},
cz:function(a,b,c){return a.uniform1i(b,c)},
cA:function(a,b,c){return a.uniform1iv(b,c)},
cB:function(a,b,c){return a.uniform2fv(b,c)},
cC:function(a,b,c){return a.uniform3fv(b,c)},
cD:function(a,b,c){return a.uniform4fv(b,c)},
cE:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cF:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cH:function(a,b){return a.useProgram(b)},
cJ:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cK:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.ig.prototype={$isa:1}
P.fE.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return P.ir(this.dP(a,b))},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
dP:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.aA]},
$isb:1,
$asb:function(){return[P.aA]}}
P.cm.prototype={$isc:1,
$asc:function(){return[P.aA]},
$isb:1,
$asb:function(){return[P.aA]}}
P.cJ.prototype={$isc:1,
$asc:function(){return[P.aA]},
$isb:1,
$asb:function(){return[P.aA]}}
B.iN.prototype={
$1:function(a){$.$get$is().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aR]}}}
B.iO.prototype={
$1:function(a){$.$get$is().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aR]}}}
B.iP.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.mM=t
$.mN=C.b.a9(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.js=s-C.b.I(window.innerWidth,2)
$.kT=-(t-C.b.I(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.L]}}}
B.iQ.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.c0=t-C.b.I(window.innerWidth,2)
$.c1=-(s-C.b.I(window.innerHeight,2))
if(a.button===2)$.$get$c_().i(0,"right",!0)
else $.$get$c_().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.L]}}}
B.iR.prototype={
$1:function(a){if(a.button===2)$.$get$c_().i(0,"right",null)
else $.$get$c_().i(0,"left",null)},
$S:function(){return{func:1,args:[W.L]}}}
B.f8.prototype={
di:function(a,b,c,d){var t
d.toString
W.ai(d,W.mU().$1(d),new B.f9(this),!1,W.aY)
W.ai(d,"mousemove",new B.fa(this),!1,W.L)
t=W.aV
W.ai(d,"touchstart",new B.fb(),!1,t)
W.ai(d,"touchmove",new B.fc(this),!1,t)
B.n9(null)}}
B.f9.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.aw.gem(a)*r.k3
if(C.c.a9(r.fy,t)>0)r.fy=H.Y(C.c.a9(r.fy,t))}catch(q){s=H.O(q)
P.ak(s)}},
$S:function(){return{func:1,args:[W.aY]}}}
B.fa.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.Y(t.go+C.b.a9($.js,$.c0)*0.01)
s=t.id
r=$.c1
q=$.kT
t.id=H.Y(s+(r-q)*0.01)
$.c0=$.js
$.c1=q}},
$S:function(){return{func:1,args:[W.L]}}}
B.fb.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a4(t.clientX)
C.c.a4(t.clientY)
$.c0=s
C.c.a4(t.clientX)
$.c1=C.c.a4(t.clientY)},
$S:function(){return{func:1,args:[W.aV]}}}
B.fc.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a4(t.clientX)
t=C.c.a4(t.clientY)
r=this.a
r.go=H.Y(r.go+C.b.a9(s,$.c0)*0.01)
r.id=H.Y(r.id+($.c1-t)*0.01)
$.c0=s
$.c1=t},
$S:function(){return{func:1,args:[W.aV]}}}
G.eW.prototype={}
G.h8.prototype={
H:function(a,b){var t=this.d
if(H.aw(!t.C(0,a)))H.aE("uniform "+a+" already set")
t.i(0,a,b)},
bt:function(){return this.d},
k:function(a){var t,s,r,q
t=H.C(["{"+new H.aB(H.iw(this),null).k(0)+"}["+this.a+"]"],[P.q])
for(s=this.d,r=s.gD(s),r=r.gv(r);r.p();){q=r.gt()
C.a.l(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.aj(t,"\n")}}
G.dP.prototype={}
G.dR.prototype={
cg:function(a,b,c){J.le(this.a,b)
if(c>0)J.lE(this.a,b,c)}}
G.em.prototype={}
G.eu.prototype={
dc:function(){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=t.length
H.d(s>0)
s=new Array(t.length*6)
s.fixed$length=Array
r=H.C(s,[P.m])
for(s=this.b,q=0,p=0;!1;++p){o=s[p]
r[q]=o.gf4(o)
r[q+1]=o.gf5(o)
r[q+2]=o.gf6(o)
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
de:function(a,b){var t,s,r,q,p,o,n,m
t=a*b
H.d(this.d.length===t)
s=[]
this.e.i(0,"aTexUV",s)
for(r=b-1,q=a-1,p=0;p<b;++p)for(o=p/r,n=0;n<a;++n){m=new Float32Array(2)
m[0]=o
m[1]=n/q
C.a.l(s,new T.aX(m))}H.d(s.length===t)},
dd:function(a,b,c){var t,s,r,q,p,o,n,m,l
H.d(this.d.length===a*b)
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
H.d(!0)
C.a.l(t,new G.em(p+m,l+m,l+n,p+n))
n=m}q=o}},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gD(s),r=r.gv(r);r.p();){q=r.gt()
p=$.$get$R().h(0,q).a
C.a.l(t,H.f(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.aj(t," ")}}
G.dr.prototype={}
G.bN.prototype={}
G.d4.prototype={}
G.d5.prototype={
bq:function(a,b,c){var t,s
if(C.i.aK(a,0)===105){if(H.aw(C.b.aG(b.length,c)===this.z))H.aE("ChangeAttribute "+this.z)}else{t=C.b.aG(b.length,c)
if(H.aw(t===(this.ch.length/3|0)))H.aE("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dH(t.a,34962,s)
J.jx(t.a,34962,b,35048)},
df:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
X:function(a,b,c){var t,s,r,q,p,o
t=J.ju(a,0)===105
if(t&&this.z===0)this.z=C.b.aG(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.iX(r.a))
this.bq(a,b,c)
q=$.$get$R().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.aw(p.C(0,a)))H.aE("unexpected attribute "+a)
o=p.h(0,a)
J.dI(r.a,this.e)
r.cg(0,o,t?1:0)
s=s.h(0,a)
p=q.bs()
J.dH(r.a,34962,s)
J.jI(r.a,o,p,5126,!1,0,0)},
bp:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.iX(s.a))
this.ch=a
this.bq("aPosition",a,3)
r=$.$get$R().h(0,"aPosition")
if(r==null)throw H.e("Unknown canonical aPosition")
q=this.x
H.d(q.C(0,"aPosition"))
p=q.h(0,"aPosition")
J.dI(s.a,this.e)
s.cg(0,p,0)
t=t.h(0,"aPosition")
q=r.bs()
J.dH(s.a,34962,t)
J.jI(s.a,p,q,5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gD(t),r=r.gv(r);r.p();){q=r.gt()
C.a.l(s,H.f(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.aj(s,"  ")},
saP:function(a){this.cx=a}}
G.fg.prototype={
d9:function(a,b){var t=C.b.cM(a,b)
if(this.z===t)return
this.z=t
this.bu()},
bu:function(){var t,s,r,q,p,o,n
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
t.a7(0,0,1/(p*s))
t.a7(1,1,1/p)
t.a7(2,2,(q+r)/o)
t.a7(3,2,-1)
t.a7(2,3,2*r*q/o)},
bt:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.v(new Float32Array(H.x(3)))
o.aD(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.K(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.t(n)
r=!!s.$isaD
k=r?s.gay(n):1
if(!!s.$isv){j=s.gm(n)
m=s.gn(n)
l=s.gL(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gL(n)
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
a3.K(this.db)
a3.eM(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fs.prototype={
dr:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gD(s),s=s.gv(s);s.p();){q=s.gt()
if(!t.C(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bS(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.B(0,q))C.a.l(r,q)}return r},
du:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gD(b),s=s.gv(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gt()
switch(J.ju(n,0)){case 117:if(q.C(0,n)){m=b.h(0,n)
if(p.C(0,n))H.iL("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$R().h(0,n)
if(l==null)H.D("unknown "+n)
H.d(q.C(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.j1(r.a,k,m)
else if(!!J.t(m).$isk3)J.lC(r.a,k,m)
break
case"float":if(l.c===0)J.lA(r.a,k,m)
else if(!!J.t(m).$iseq)J.lB(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aH(m,"$isa5").a
J.jH(r.a,k,!1,j)}else if(!!J.t(m).$iseq)J.jH(r.a,k,!1,m)
else if(H.aw(!1))H.aE("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.aH(m,"$isni").a
J.jG(r.a,k,!1,j)}else if(!!J.t(m).$iseq)J.jG(r.a,k,!1,m)
else if(H.aw(!1))H.aE("bad unform: "+n)
break
case"vec4":j=l.c
i=r.a
if(j===0)J.jF(i,k,H.aH(m,"$isaD").a)
else J.jF(i,k,m)
break
case"vec3":j=l.c
i=r.a
if(j===0)J.jE(i,k,H.aH(m,"$isv").a)
else J.jE(i,k,m)
break
case"vec2":j=l.c
i=r.a
if(j===0)J.jD(i,k,H.aH(m,"$isaX").a)
else J.jD(i,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a5(33984,this.ch)
J.jv(r.a,j)
j=H.aH(m,"$isbM").b
J.c2(r.a,3553,j)
j=this.ch
J.j1(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.a5(33984,this.ch)
J.jv(r.a,j)
j=H.aH(m,"$isbM").b
J.c2(r.a,34067,j)
j=this.ch
J.j1(r.a,k,j)
this.ch=this.ch+1
break
default:H.iL("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":j=J.E(m,!0)
i=r.a
if(j)J.c3(i,2929)
else J.iY(i,2929)
break
case"cStencilFunc":H.aH(m,"$isdr")
j=m.a
i=r.a
if(j===1281)J.iY(i,2960)
else{J.c3(i,2960)
i=m.b
h=m.c
J.lv(r.a,j,i,h)}break
case"cDepthWrite":J.l9(r.a,m)
break
case"cBlendEquation":H.aH(m,"$isbN")
j=m.a
i=r.a
if(j===1281)J.iY(i,3042)
else{J.c3(i,3042)
i=m.b
h=m.c
J.l4(r.a,i,h)
J.l3(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aN(1000*(s-new P.bm(t,!1).a)).k(0)},
da:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.lD(t.a,this.r)
this.ch=0
this.z.U(0)
for(s=0;s<2;++s){r=b[s]
this.du(r.a,r.bt())}q=this.Q
q.U(0)
for(p=a.cy,p=p.gD(p),p=p.gv(p);p.p();)q.l(0,p.gt())
o=this.dr()
if(o.length!==0)P.ak("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(o)))
J.dI(a.d.a,a.e)
n=this.e.f.length>0
q=a.f
p=a.df()
m=a.Q
l=a.z
if(n)J.l2(t.a,q)
if(m!==-1){k=t.a
if(l>1)J.ld(k,q,p,m,0,l)
else J.lc(k,q,p,m,0)}else{m=t.a
if(l>1)J.lb(m,q,0,p,l)
else J.la(m,q,0,p)}if(n)J.lf(t.a)},
br:function(a,b){return this.da(a,b,null)},
dj:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.N)(t),++o){n=t[o]
r.i(0,n,J.jB(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.N)(t),++o){n=t[o]
r.i(0,n,J.jB(q.a,p,n))}}}
G.w.prototype={
bs:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.bc.prototype={
aH:function(a){var t,s,r,q,p
H.d(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.N)(a),++q){p=a[q]
H.d($.$get$R().C(0,p))
H.d(!C.a.B(s,p))
C.a.l(s,p)
r.i(0,p,this.r);++this.r}C.a.aE(s)},
aI:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.N)(a),++r){q=a[r]
if(H.aw($.$get$R().C(0,q)))H.aE("missing uniform "+q)
H.d(!C.a.B(s,q))
C.a.l(s,q)}C.a.aE(s)},
bo:function(a){var t,s,r
H.d(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.d($.$get$R().C(0,r))
H.d(!C.a.B(t,r))
C.a.l(t,r)}C.a.aE(t)},
dk:function(a,b){H.d(this.b==null)
this.b=this.bv(!0,a,b)},
aJ:function(a){return this.dk(a,null)},
bv:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.N)(t),++o){n=t[o]
m=$.$get$R().h(0,n)
C.a.l(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.N)(t),++o){k=t[o]
m=$.$get$R().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.N)(t),++o){k=t[o]
m=$.$get$R().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.N)(t),++o){k=t[o]
m=$.$get$R().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.l(q,"")
if(a)C.a.l(q,"void main(void) {")
C.a.M(q,b)
if(a)C.a.l(q,"}")
return C.a.aj(q,"\n")}}
G.dm.prototype={
bb:function(){var t,s,r
t=this.e
s=this.d.a
r=t.a
r[0]=s[12]
r[1]=s[13]
r[2]=s[14]
return t},
d_:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
G.fX.prototype={
dg:function(a,b){var t=this.e
if(t!==1)J.lx(a.a,b,34046,t)
J.jC(a.a,b,10240,this.r)
J.jC(a.a,b,10241,this.f)}}
G.bM.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.ey.prototype={
dl:function(a){var t,s
t=this.d
s=this.c
J.c2(t.a,s,this.b)
J.lw(t.a,s,0,6408,6408,5121,a)}}
R.dg.prototype={
cn:function(a){var t,s,r
t=this.fy
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.ak("size change "+H.f(s)+" "+H.f(r))
this.d9(s,r)
J.lF(this.go.a,0,0,s,r)}}
R.fG.prototype={
dz:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.ms("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.y).bB(r,"float")
r.setProperty(p,"left","")
p=C.y.bB(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.q.P(t,s)}return t},
dm:function(a,b,c){var t,s,r
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
J.iV(this.a,s)
r=this.dz(b,c,90,30)
this.d=r
J.iV(this.a,r)
t=t.createElement("div")
this.c=t
J.iV(this.a,t)}}
R.fH.prototype={
dt:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.A.f_(s,2)+" fps"
t=this.c;(t&&C.q).cY(t,b)
r=C.b.I(30*C.A.ed(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.q).P(t,q)},
ds:function(a){return this.dt(a,"")}}
B.fA.prototype={
$2:function(a,b){var t,s,r,q,p,o
t=this.a
s=this.c*a
r=Math.cos(s)
s=Math.sin(s)
q=this.b*a
p=Math.cos(q)
q=Math.sin(q)
r=t*(2+r)*0.5
o=b.a
o[0]=r*p
o[1]=r*q
o[2]=this.d*t*0.5*s},
$S:function(){return{func:1,v:true,args:[P.J,T.v]}}}
A.iy.prototype={
$2:function(a,b){var t=536870911&a+J.am(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.m,P.n]}}}
T.a5.prototype={
a7:function(a,b,c){H.d(a<4)
H.d(b<4)
this.a[b*4+a]=c},
K:function(a){var t,s
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
k:function(a){return"[0] "+this.an(0).k(0)+"\n[1] "+this.an(1).k(0)+"\n[2] "+this.an(2).k(0)+"\n[3] "+this.an(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.a5){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.ix(this.a)},
an:function(a){var t,s
t=new Float32Array(H.x(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aD(t)},
a_:function(){var t=this.a
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
eM:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.aX.prototype={
k:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aX){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.ix(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.v.prototype={
aD:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
K:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.v){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.ix(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){return Math.sqrt(this.gb1())},
gb1:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
a3:function(a){var t,s,r
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
c9:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.v(new Float32Array(H.x(3)))
t.aD(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
au:function(a,b){var t,s
t=a.a
s=this.a
s[0]=s[0]+t[0]*b
s[1]=s[1]+t[1]*b
s[2]=s[2]+t[2]*b},
bm:function(a){var t,s
t=a.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gL:function(a){return this.a[2]}}
T.aD.prototype={
k:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aD){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.ix(this.a)},
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
gL:function(a){return this.a[2]},
gay:function(a){return this.a[3]}}
U.iJ.prototype={
$1:function(b3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
t=this.a
t.a=b3+0
s=this.c
s.go=H.Y(s.go+0.001)
r=s.k4
if(r.h(0,37)!=null)s.go=H.Y(s.go+0.03)
else if(r.h(0,39)!=null)s.go=H.Y(s.go-0.03)
if(r.h(0,38)!=null)s.id=H.Y(s.id+0.03)
else if(r.h(0,40)!=null)s.id=H.Y(s.id-0.03)
if(r.h(0,33)!=null)s.fy=H.Y(s.fy*0.99)
else if(r.h(0,34)!=null)s.fy=H.Y(s.fy*1.01)
if(r.h(0,32)!=null){s.go=0
s.id=0}r=H.Y(C.c.ee(s.id,-1.4707963267948965,1.4707963267948965))
s.id=r
q=s.fy
p=s.go
o=q*Math.cos(r)
s.d_(o*Math.cos(p),q*Math.sin(r),o*Math.sin(p))
p=s.k2
r=s.d.a
q=p.a
r[12]=r[12]+q[0]
r[13]=r[13]+q[1]
r[14]=r[14]+q[2]
q=r[12]
n=r[13]
m=r[14]
l=new T.v(new Float32Array(H.x(3)))
l.aD(0,1,0)
k=s.bb()
j=new Float32Array(H.x(3))
i=new T.v(j)
i.K(k)
i.bm(p)
i.a3(0)
h=l.c9(i)
h.a3(0)
g=i.c9(h)
g.a3(0)
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
r[15]=1
r[14]=-k
r[13]=-f
r[12]=-p
r[11]=0
r[10]=j
r[9]=c
r[8]=e
r[7]=0
r[6]=a2
r[5]=a1
r[4]=a0
r[3]=0
r[2]=a
r[1]=b
r[0]=d
r[12]=q
r[13]=n
r[14]=m
m=s.f
n=m.a
n[0]=r[2]
n[1]=r[6]
n[2]=r[10]
s=-s.k1
m=Math.sqrt(m.gb1())
h=n[0]/m
g=n[1]/m
i=n[2]/m
m=Math.cos(s)
s=Math.sin(s)
a3=1-m
a4=h*h*a3+m
n=i*s
a5=h*g*a3-n
q=g*s
a6=h*i*a3+q
a7=g*h*a3+n
a8=g*g*a3+m
s=h*s
a9=g*i*a3-s
b0=i*h*a3-q
b1=i*g*a3+s
b2=i*i*a3+m
m=r[0]
s=r[4]
q=r[8]
n=r[1]
d=r[5]
b=r[9]
a=r[2]
a0=r[6]
a1=r[10]
a2=r[3]
e=r[7]
c=r[11]
r[0]=m*a4+s*a7+q*b0
r[1]=n*a4+d*a7+b*b0
r[2]=a*a4+a0*a7+a1*b0
r[3]=a2*a4+e*a7+c*b0
r[4]=m*a5+s*a8+q*b1
r[5]=n*a5+d*a8+b*b1
r[6]=a*a5+a0*a8+a1*b1
r[7]=a2*a5+e*a8+c*b1
r[8]=m*a6+s*a9+q*b2
r[9]=n*a6+d*a9+b*b2
r[10]=a*a6+a0*a9+a1*b2
r[11]=a2*a6+e*a9+c*b2
c=this.d
this.e.br(this.r,[this.f,c])
this.x.br(this.z,[this.y,c])
C.ax.ge7(window).ct(this)
this.b.ds(t.a)},
$S:function(){return{func:1,v:true,args:[P.T]}}}
J.a.prototype.d3=J.a.prototype.k
J.bx.prototype.d5=J.bx.prototype.k
P.u.prototype.d6=P.u.prototype.E
P.V.prototype.d4=P.V.prototype.az
W.a2.prototype.aF=W.a2.prototype.N
W.bU.prototype.d7=W.bU.prototype.T;(function installTearOffs(){installTearOff(H.b0.prototype,"geI",0,0,0,null,["$0"],["ax"],0)
installTearOff(H.aj.prototype,"gcQ",0,0,0,null,["$1"],["J"],2)
installTearOff(H.b_.prototype,"geo",0,0,0,null,["$1"],["V"],2)
installTearOff(P,"mI",1,0,0,null,["$1"],["mp"],1)
installTearOff(P,"mJ",1,0,0,null,["$1"],["mq"],1)
installTearOff(P,"mK",1,0,0,null,["$1"],["mr"],1)
installTearOff(P,"kI",1,0,0,null,["$0"],["mG"],0)
installTearOff(P.av.prototype,"gdE",0,0,0,null,["$2","$1"],["ao","dF"],5)
installTearOff(P,"mP",1,0,0,null,["$2"],["lM"],7)
installTearOff(W,"mU",1,0,0,null,["$1"],["lR"],8)
installTearOff(W,"mV",1,0,0,null,["$4"],["mv"],4)
installTearOff(W,"mW",1,0,0,null,["$4"],["mw"],4)
installTearOff(W.db.prototype,"gb2",0,1,0,null,["$0"],["b3"],3)
installTearOff(W.ds.prototype,"gb2",0,1,0,null,["$0"],["b3"],3)
installTearOff(R.dg.prototype,"geT",0,0,0,null,["$1"],["cn"],6)
installTearOff(U,"kR",1,0,0,null,["$0"],["n3"],0)})();(function inheritance(){inherit(P.n,null)
var t=P.n
inherit(H.j7,t)
inherit(J.a,t)
inherit(J.dM,t)
inherit(P.V,t)
inherit(H.d2,t)
inherit(P.cZ,t)
inherit(H.cg,t)
inherit(H.b5,t)
inherit(H.hV,t)
inherit(H.b0,t)
inherit(H.hx,t)
inherit(H.b1,t)
inherit(H.hU,t)
inherit(H.hq,t)
inherit(H.bb,t)
inherit(H.fZ,t)
inherit(H.ao,t)
inherit(H.aj,t)
inherit(H.b_,t)
inherit(H.fr,t)
inherit(H.h5,t)
inherit(P.b7,t)
inherit(H.dA,t)
inherit(H.aB,t)
inherit(H.ae,t)
inherit(H.eK,t)
inherit(H.eM,t)
inherit(P.hs,t)
inherit(P.dx,t)
inherit(P.av,t)
inherit(P.dv,t)
inherit(P.fJ,t)
inherit(P.fK,t)
inherit(P.b4,t)
inherit(P.ij,t)
inherit(P.fz,t)
inherit(P.hS,t)
inherit(P.bS,t)
inherit(P.bG,t)
inherit(P.u,t)
inherit(P.hT,t)
inherit(P.ax,t)
inherit(P.G,t)
inherit(P.bm,t)
inherit(P.T,t)
inherit(P.aN,t)
inherit(P.dn,t)
inherit(P.hC,t)
inherit(P.e3,t)
inherit(P.b,t)
inherit(P.aA,t)
inherit(P.aT,t)
inherit(P.bI,t)
inherit(P.q,t)
inherit(P.bJ,t)
inherit(W.dT,t)
inherit(W.hp,t)
inherit(W.bR,t)
inherit(W.z,t)
inherit(W.dd,t)
inherit(W.bU,t)
inherit(W.ia,t)
inherit(W.ch,t)
inherit(W.dc,t)
inherit(W.i4,t)
inherit(W.dB,t)
inherit(P.hQ,t)
inherit(P.hX,t)
inherit(G.eW,t)
inherit(G.dR,t)
inherit(G.em,t)
inherit(G.eu,t)
inherit(G.dr,t)
inherit(G.bN,t)
inherit(G.w,t)
inherit(G.bc,t)
inherit(G.fX,t)
inherit(G.bM,t)
inherit(R.fG,t)
inherit(T.a5,t)
inherit(T.aX,t)
inherit(T.v,t)
inherit(T.aD,t)
t=J.a
inherit(J.eF,t)
inherit(J.eG,t)
inherit(J.bx,t)
inherit(J.aO,t)
inherit(J.b8,t)
inherit(J.aP,t)
inherit(H.bA,t)
inherit(H.ba,t)
inherit(W.h,t)
inherit(W.a1,t)
inherit(W.c5,t)
inherit(W.c7,t)
inherit(W.c8,t)
inherit(W.y,t)
inherit(W.ck,t)
inherit(W.dV,t)
inherit(W.dW,t)
inherit(W.dX,t)
inherit(W.cc,t)
inherit(W.cd,t)
inherit(W.ce,t)
inherit(W.cv,t)
inherit(W.e_,t)
inherit(W.i,t)
inherit(W.cu,t)
inherit(W.a4,t)
inherit(W.ev,t)
inherit(W.ct,t)
inherit(W.eO,t)
inherit(W.eT,t)
inherit(W.a6,t)
inherit(W.cr,t)
inherit(W.f4,t)
inherit(W.db,t)
inherit(W.cy,t)
inherit(W.fd,t)
inherit(W.bd,t)
inherit(W.a7,t)
inherit(W.cq,t)
inherit(W.ah,t)
inherit(W.di,t)
inherit(W.a9,t)
inherit(W.cp,t)
inherit(W.aa,t)
inherit(W.fI,t)
inherit(W.W,t)
inherit(W.co,t)
inherit(W.fY,t)
inherit(W.ac,t)
inherit(W.cE,t)
inherit(W.h2,t)
inherit(W.ds,t)
inherit(W.ha,t)
inherit(W.hf,t)
inherit(W.hr,t)
inherit(W.cD,t)
inherit(W.cC,t)
inherit(W.cB,t)
inherit(W.cx,t)
inherit(W.cA,t)
inherit(W.cz,t)
inherit(W.ih,t)
inherit(W.ii,t)
inherit(P.ap,t)
inherit(P.cn,t)
inherit(P.aq,t)
inherit(P.cs,t)
inherit(P.fj,t)
inherit(P.fk,t)
inherit(P.fp,t)
inherit(P.cl,t)
inherit(P.as,t)
inherit(P.cw,t)
inherit(P.he,t)
inherit(P.dN,t)
inherit(P.ft,t)
inherit(P.fu,t)
inherit(P.ig,t)
inherit(P.cm,t)
t=J.bx
inherit(J.fh,t)
inherit(J.aW,t)
inherit(J.aQ,t)
inherit(J.j6,J.aO)
t=J.b8
inherit(J.d0,t)
inherit(J.d_,t)
t=P.V
inherit(H.c,t)
inherit(H.d3,t)
inherit(H.du,t)
t=H.c
inherit(H.b9,t)
inherit(H.eL,t)
t=H.b9
inherit(H.fO,t)
inherit(H.by,t)
inherit(P.eN,t)
inherit(H.e2,H.d3)
t=P.cZ
inherit(H.eP,t)
inherit(H.hh,t)
t=H.b5
inherit(H.iS,t)
inherit(H.iT,t)
inherit(H.hP,t)
inherit(H.hy,t)
inherit(H.eB,t)
inherit(H.eC,t)
inherit(H.hW,t)
inherit(H.h_,t)
inherit(H.h0,t)
inherit(H.iU,t)
inherit(H.iD,t)
inherit(H.iE,t)
inherit(H.iF,t)
inherit(H.iG,t)
inherit(H.iH,t)
inherit(H.fT,t)
inherit(H.eH,t)
inherit(H.iz,t)
inherit(H.iA,t)
inherit(H.iB,t)
inherit(P.hm,t)
inherit(P.hl,t)
inherit(P.hn,t)
inherit(P.ho,t)
inherit(P.hD,t)
inherit(P.hH,t)
inherit(P.hE,t)
inherit(P.hF,t)
inherit(P.hG,t)
inherit(P.hK,t)
inherit(P.hL,t)
inherit(P.hJ,t)
inherit(P.hI,t)
inherit(P.fL,t)
inherit(P.fM,t)
inherit(P.im,t)
inherit(P.i_,t)
inherit(P.hZ,t)
inherit(P.i0,t)
inherit(P.eQ,t)
inherit(P.e0,t)
inherit(P.e1,t)
inherit(W.ip,t)
inherit(W.hi,t)
inherit(W.hB,t)
inherit(W.f6,t)
inherit(W.f5,t)
inherit(W.i6,t)
inherit(W.i7,t)
inherit(W.id,t)
inherit(W.ie,t)
inherit(P.iq,t)
inherit(B.iN,t)
inherit(B.iO,t)
inherit(B.iP,t)
inherit(B.iQ,t)
inherit(B.iR,t)
inherit(B.f9,t)
inherit(B.fa,t)
inherit(B.fb,t)
inherit(B.fc,t)
inherit(B.fA,t)
inherit(A.iy,t)
inherit(U.iJ,t)
t=H.hq
inherit(H.be,t)
inherit(H.bV,t)
t=P.b7
inherit(H.de,t)
inherit(H.eI,t)
inherit(H.h9,t)
inherit(H.h7,t)
inherit(H.dQ,t)
inherit(H.fw,t)
inherit(P.c4,t)
inherit(P.df,t)
inherit(P.an,t)
inherit(P.r,t)
inherit(P.dt,t)
inherit(P.ar,t)
inherit(P.U,t)
inherit(P.dU,t)
t=H.fT
inherit(H.fF,t)
inherit(H.bl,t)
inherit(H.hk,P.c4)
t=H.ba
inherit(H.eX,t)
inherit(H.d7,t)
t=H.d7
inherit(H.bC,t)
inherit(H.bB,t)
inherit(H.bD,H.bC)
inherit(H.d8,H.bD)
inherit(H.bE,H.bB)
inherit(H.d9,H.bE)
t=H.d8
inherit(H.d6,t)
inherit(H.eY,t)
t=H.d9
inherit(H.eZ,t)
inherit(H.f_,t)
inherit(H.f0,t)
inherit(H.f1,t)
inherit(H.f2,t)
inherit(H.da,t)
inherit(H.f3,t)
inherit(P.ib,P.hs)
inherit(P.hY,P.ij)
inherit(P.dy,H.ae)
inherit(P.fy,P.fz)
inherit(P.hO,P.fy)
inherit(P.hR,P.hO)
inherit(P.d1,P.bG)
t=P.T
inherit(P.J,t)
inherit(P.m,t)
t=P.an
inherit(P.dj,t)
inherit(P.ez,t)
t=W.h
inherit(W.p,t)
inherit(W.br,t)
inherit(W.dS,t)
inherit(W.eo,t)
inherit(W.bw,t)
inherit(W.bz,t)
inherit(W.fm,t)
inherit(W.dk,t)
inherit(W.fB,t)
inherit(W.a8,t)
inherit(W.bq,t)
inherit(W.ab,t)
inherit(W.X,t)
inherit(W.bp,t)
inherit(W.hc,t)
inherit(W.hg,t)
inherit(W.bO,t)
inherit(W.hj,t)
inherit(W.aZ,t)
inherit(W.i5,t)
t=W.p
inherit(W.a2,t)
inherit(W.aM,t)
inherit(W.bn,t)
inherit(W.cb,t)
inherit(W.hu,t)
t=W.a2
inherit(W.k,t)
inherit(P.F,t)
t=W.k
inherit(W.dK,t)
inherit(W.dL,t)
inherit(W.aL,t)
inherit(W.c6,t)
inherit(W.ca,t)
inherit(W.es,t)
inherit(W.ci,t)
inherit(W.eA,t)
inherit(W.fx,t)
inherit(W.dp,t)
inherit(W.fR,t)
inherit(W.fS,t)
inherit(W.bK,t)
inherit(W.hN,t)
inherit(W.bu,W.br)
inherit(W.dO,W.bu)
inherit(W.b6,W.ck)
inherit(W.dY,W.cd)
inherit(W.cY,W.cv)
inherit(W.dZ,W.cY)
inherit(W.a3,W.c5)
inherit(W.cW,W.cu)
inherit(W.en,W.cW)
inherit(W.cQ,W.ct)
inherit(W.bv,W.cQ)
inherit(W.cj,W.bn)
inherit(W.ew,W.bw)
inherit(W.aC,W.i)
t=W.aC
inherit(W.aR,t)
inherit(W.L,t)
inherit(W.aV,t)
inherit(W.eU,W.bz)
inherit(W.cS,W.cr)
inherit(W.eV,W.cS)
inherit(W.Q,P.d1)
inherit(W.cR,W.cy)
inherit(W.bF,W.cR)
t=W.bd
inherit(W.ff,t)
inherit(W.fv,t)
inherit(W.h4,t)
inherit(W.cH,W.cq)
inherit(W.fi,W.cH)
inherit(W.fl,W.ah)
inherit(W.bt,W.bq)
inherit(W.fC,W.bt)
inherit(W.cK,W.cp)
inherit(W.fD,W.cK)
inherit(W.cI,W.co)
inherit(W.fV,W.cI)
inherit(W.bs,W.bp)
inherit(W.fW,W.bs)
inherit(W.cT,W.cE)
inherit(W.h1,W.cT)
inherit(W.aY,W.L)
inherit(W.cF,W.cD)
inherit(W.dw,W.cF)
inherit(W.cM,W.cC)
inherit(W.ht,W.cM)
inherit(W.hv,W.ce)
inherit(W.cX,W.cB)
inherit(W.hM,W.cX)
inherit(W.cV,W.cx)
inherit(W.dz,W.cV)
inherit(W.cU,W.cA)
inherit(W.i8,W.cU)
inherit(W.cO,W.cz)
inherit(W.i9,W.cO)
inherit(W.hw,W.hp)
inherit(W.hz,P.fJ)
inherit(W.jh,W.hz)
inherit(W.hA,P.fK)
inherit(W.ic,W.bU)
inherit(P.H,P.hX)
t=P.F
inherit(P.az,t)
inherit(P.aK,t)
inherit(P.e4,t)
inherit(P.e5,t)
inherit(P.e6,t)
inherit(P.e7,t)
inherit(P.e8,t)
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
inherit(P.ep,t)
inherit(P.eR,t)
inherit(P.eS,t)
inherit(P.fe,t)
inherit(P.bH,t)
inherit(P.fQ,t)
inherit(P.hd,t)
inherit(P.bQ,t)
inherit(P.i1,t)
inherit(P.i2,t)
inherit(P.i3,t)
t=P.az
inherit(P.dJ,t)
inherit(P.er,t)
inherit(P.ad,t)
inherit(P.ex,t)
inherit(P.fP,t)
inherit(P.dq,t)
inherit(P.hb,t)
inherit(P.cG,P.cn)
inherit(P.eJ,P.cG)
inherit(P.cP,P.cs)
inherit(P.f7,P.cP)
inherit(P.fq,P.ad)
inherit(P.cN,P.cl)
inherit(P.fN,P.cN)
t=P.dq
inherit(P.fU,t)
inherit(P.bL,t)
inherit(P.cL,P.cw)
inherit(P.h3,P.cL)
inherit(P.cJ,P.cm)
inherit(P.fE,P.cJ)
t=G.eW
inherit(G.dm,t)
inherit(G.h8,t)
inherit(G.d5,t)
inherit(G.fs,t)
inherit(G.dP,G.dm)
inherit(B.f8,G.dP)
t=G.h8
inherit(G.d4,t)
inherit(G.fg,t)
inherit(G.ey,G.bM)
inherit(R.dg,G.fg)
inherit(R.fH,R.fG)
mixin(H.bB,P.u)
mixin(H.bC,P.u)
mixin(H.bD,H.cg)
mixin(H.bE,H.cg)
mixin(P.bG,P.u)
mixin(W.bp,P.u)
mixin(W.bq,P.u)
mixin(W.br,P.u)
mixin(W.bs,W.z)
mixin(W.bt,W.z)
mixin(W.bu,W.z)
mixin(W.ck,W.dT)
mixin(W.cE,P.u)
mixin(W.cq,P.u)
mixin(W.cx,P.u)
mixin(W.cy,P.u)
mixin(W.cz,P.u)
mixin(W.cA,P.u)
mixin(W.cB,P.u)
mixin(W.cC,P.u)
mixin(W.cD,P.u)
mixin(W.co,P.u)
mixin(W.cp,P.u)
mixin(W.cr,P.u)
mixin(W.ct,P.u)
mixin(W.cu,P.u)
mixin(W.cv,P.u)
mixin(W.cF,W.z)
mixin(W.cH,W.z)
mixin(W.cR,W.z)
mixin(W.cS,W.z)
mixin(W.cQ,W.z)
mixin(W.cV,W.z)
mixin(W.cW,W.z)
mixin(W.cX,W.z)
mixin(W.cY,W.z)
mixin(W.cI,W.z)
mixin(W.cK,W.z)
mixin(W.cM,W.z)
mixin(W.cO,W.z)
mixin(W.cT,W.z)
mixin(W.cU,W.z)
mixin(P.cn,P.u)
mixin(P.cl,P.u)
mixin(P.cs,P.u)
mixin(P.cw,P.u)
mixin(P.cG,W.z)
mixin(P.cP,W.z)
mixin(P.cL,W.z)
mixin(P.cN,W.z)
mixin(P.cm,P.u)
mixin(P.cJ,W.z)})();(function constants(){C.o=W.aL.prototype
C.x=W.c6.prototype
C.m=W.c7.prototype
C.p=W.c8.prototype
C.y=W.b6.prototype
C.q=W.ca.prototype
C.M=W.cc.prototype
C.N=W.ci.prototype
C.r=W.cj.prototype
C.O=J.a.prototype
C.a=J.aO.prototype
C.A=J.d_.prototype
C.b=J.d0.prototype
C.c=J.b8.prototype
C.i=J.aP.prototype
C.V=J.aQ.prototype
C.v=H.d6.prototype
C.D=W.bF.prototype
C.E=J.fh.prototype
C.F=W.di.prototype
C.K=W.dp.prototype
C.w=J.aW.prototype
C.aw=W.aY.prototype
C.ax=W.bO.prototype
C.L=new P.hQ()
C.f=new P.hY()
C.z=new P.aN(0)
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
C.W=H.C(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.q])
C.X=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.Y=makeConstList([])
C.t=H.C(makeConstList(["bind","if","ref","repeat","syntax"]),[P.q])
C.u=H.C(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.q])
C.Z=new G.w("vec3","vertex btangents",0)
C.d=new G.w("vec3","",0)
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
C.e=new G.w("float","",0)
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
C.ae=H.I("nd")
C.af=H.I("ne")
C.ag=H.I("eq")
C.ah=H.I("nf")
C.ai=H.I("ng")
C.aj=H.I("k3")
C.ak=H.I("nh")
C.al=H.I("k7")
C.am=H.I("aT")
C.an=H.I("q")
C.ao=H.I("kr")
C.ap=H.I("ks")
C.aq=H.I("nj")
C.ar=H.I("kt")
C.as=H.I("ax")
C.at=H.I("J")
C.au=H.I("m")
C.av=H.I("T")})();(function staticFields(){$.kb="$cachedFunction"
$.kc="$cachedInvocation"
$.jQ=null
$.jO=null
$.jj=!1
$.jn=null
$.kF=null
$.kX=null
$.it=null
$.iC=null
$.jo=null
$.bf=null
$.bW=null
$.bX=null
$.jk=!1
$.B=C.f
$.k1=0
$.ay=null
$.j3=null
$.k0=null
$.k_=null
$.jY=null
$.jX=null
$.jW=null
$.jV=null
$.mM=0
$.mN=0
$.js=0
$.kT=0
$.c0=0
$.c1=0
$.na=!1
$.kK=0})();(function lazyInitializers(){lazy($,"jU","$get$jU",function(){return H.kN("_$dart_dartClosure")})
lazy($,"j8","$get$j8",function(){return H.kN("_$dart_js")})
lazy($,"k4","$get$k4",function(){return H.m_()})
lazy($,"k5","$get$k5",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.k1
$.k1=t+1
t="expando$key$"+t}return new P.e3(null,t,[P.m])})
lazy($,"kg","$get$kg",function(){return H.at(H.h6({
toString:function(){return"$receiver$"}}))})
lazy($,"kh","$get$kh",function(){return H.at(H.h6({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"ki","$get$ki",function(){return H.at(H.h6(null))})
lazy($,"kj","$get$kj",function(){return H.at(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kn","$get$kn",function(){return H.at(H.h6(void 0))})
lazy($,"ko","$get$ko",function(){return H.at(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kl","$get$kl",function(){return H.at(H.km(null))})
lazy($,"kk","$get$kk",function(){return H.at(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kq","$get$kq",function(){return H.at(H.km(void 0))})
lazy($,"kp","$get$kp",function(){return H.at(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jg","$get$jg",function(){return P.mo()})
lazy($,"bY","$get$bY",function(){return[]})
lazy($,"jT","$get$jT",function(){return{}})
lazy($,"ky","$get$ky",function(){return P.ja(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"ji","$get$ji",function(){return P.K()})
lazy($,"is","$get$is",function(){return P.k8(P.m,P.ax)})
lazy($,"c_","$get$c_",function(){return P.k8(P.q,P.ax)})
lazy($,"ke","$get$ke",function(){return new G.dr(1281,0,4294967295)})
lazy($,"jM","$get$jM",function(){return new G.bN(1281,1281,1281)})
lazy($,"jL","$get$jL",function(){return new G.bN(32774,770,769)})
lazy($,"R","$get$R",function(){return P.aS(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColors",C.I,"aColorAlpha",C.a1,"aPosition",C.G,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.H,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.I,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.G,"vPositionFromLight",C.a_,"vCenter",C.H,"vDepth",C.a6,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.J,"uConvolutionMatrix",C.J,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ac,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.aa,"uAnimationTable",C.h,"uTime",C.a9,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.e,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2])})
lazy($,"ku","$get$ku",function(){return C.L})
lazy($,"kW","$get$kW",function(){var t=new G.bc("PointSpritesV",null,[],[],[],[],0,P.K())
t.aH(["aPosition"])
t.aI(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.aJ(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"kV","$get$kV",function(){var t=new G.bc("PointSpritesF",null,[],[],[],[],0,P.K())
t.aI(["uTexture"])
t.aJ(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return t})
lazy($,"kQ","$get$kQ",function(){var t=new G.bc("InstancedV",null,[],[],[],[],0,P.K())
t.aH(["aPosition"])
t.aH(["iaRotation","iaTranslation"])
t.bo(["vColor"])
t.aI(["uPerspectiveViewMatrix","uModelMatrix"])
H.d(t.b==null)
t.b=t.bv(!1,["vec3 rotate_vertex_position(vec3 pos, vec4 rot) { \n    return pos + 2.0 * cross(rot.xyz, cross(rot.xyz, pos) + rot.w * pos);\n}\n\nvoid main(void) {\n    vec3 P = rotate_vertex_position(aPosition, iaRotation) +\n             iaTranslation;\n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(P, 1);\n    vColor = vec3(sin(aPosition.x)/2.0+0.5,\n                     cos(aPosition.y)/2.0+0.5, \n                     sin(aPosition.z)/2.0+0.5);\n}\n"],null)
return t})
lazy($,"kP","$get$kP",function(){var t=new G.bc("InstancedF",null,[],[],[],[],0,P.K())
t.bo(["vColor"])
t.aJ(["oFragColor = vec4( vColor, 1. );"])
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
mangledGlobalNames:{m:"int",J:"double",T:"num",q:"String",ax:"bool",aT:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.p},{func:1,ret:P.ax,args:[W.a2,P.q,P.q,W.bR]},{func:1,v:true,args:[P.n],opt:[P.bI]},{func:1,v:true,args:[W.i]},{func:1,ret:P.m,args:[P.G,P.G]},{func:1,ret:P.q,args:[W.h]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bA,ArrayBufferView:H.ba,DataView:H.eX,Float32Array:H.d6,Float64Array:H.eY,Int16Array:H.eZ,Int32Array:H.f_,Int8Array:H.f0,Uint16Array:H.f1,Uint32Array:H.f2,Uint8ClampedArray:H.da,CanvasPixelArray:H.da,Uint8Array:H.f3,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLImageElement:W.k,HTMLKeygenElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMenuItemElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,HTMLAnchorElement:W.dK,HTMLAreaElement:W.dL,AudioTrack:W.a1,AudioTrackList:W.dO,Blob:W.c5,HTMLBodyElement:W.aL,HTMLCanvasElement:W.c6,CanvasGradient:W.c7,CanvasRenderingContext2D:W.c8,CDATASection:W.aM,CharacterData:W.aM,Comment:W.aM,ProcessingInstruction:W.aM,Text:W.aM,CompositorWorker:W.dS,CSSCharsetRule:W.y,CSSFontFaceRule:W.y,CSSGroupingRule:W.y,CSSImportRule:W.y,CSSKeyframeRule:W.y,MozCSSKeyframeRule:W.y,WebKitCSSKeyframeRule:W.y,CSSKeyframesRule:W.y,MozCSSKeyframesRule:W.y,WebKitCSSKeyframesRule:W.y,CSSMediaRule:W.y,CSSNamespaceRule:W.y,CSSPageRule:W.y,CSSRule:W.y,CSSStyleRule:W.y,CSSSupportsRule:W.y,CSSViewportRule:W.y,CSSStyleDeclaration:W.b6,MSStyleCSSProperties:W.b6,CSS2Properties:W.b6,DataTransferItemList:W.dV,DeviceAcceleration:W.dW,HTMLDivElement:W.ca,XMLDocument:W.bn,Document:W.bn,DocumentFragment:W.cb,ShadowRoot:W.cb,DOMException:W.dX,DOMImplementation:W.cc,DOMPoint:W.dY,DOMPointReadOnly:W.cd,DOMRectReadOnly:W.ce,DOMStringList:W.dZ,DOMTokenList:W.e_,Element:W.a2,AnimationEvent:W.i,AnimationPlayerEvent:W.i,ApplicationCacheErrorEvent:W.i,AutocompleteErrorEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceLightEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,GamepadEvent:W.i,GeofencingEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RelatedEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCIceCandidateEvent:W.i,RTCPeerConnectionIceEvent:W.i,SecurityPolicyViolationEvent:W.i,ServicePortConnectEvent:W.i,ServiceWorkerMessageEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.a3,FileList:W.en,FileWriter:W.eo,HTMLFormElement:W.es,Gamepad:W.a4,HTMLHeadElement:W.ci,History:W.ev,HTMLCollection:W.bv,HTMLFormControlsCollection:W.bv,HTMLOptionsCollection:W.bv,HTMLDocument:W.cj,XMLHttpRequest:W.ew,XMLHttpRequestUpload:W.bw,XMLHttpRequestEventTarget:W.bw,HTMLInputElement:W.eA,KeyboardEvent:W.aR,Location:W.eO,MediaList:W.eT,MIDIOutput:W.eU,MIDIInput:W.bz,MIDIPort:W.bz,MimeType:W.a6,MimeTypeArray:W.eV,PointerEvent:W.L,MouseEvent:W.L,DragEvent:W.L,Navigator:W.f4,Attr:W.p,Node:W.p,NodeIterator:W.db,NodeList:W.bF,RadioNodeList:W.bF,Path2D:W.fd,Perspective:W.ff,Plugin:W.a7,PluginArray:W.fi,PositionValue:W.fl,PresentationConnection:W.fm,Range:W.di,Rotation:W.fv,RTCDataChannel:W.dk,DataChannel:W.dk,HTMLSelectElement:W.fx,SharedWorker:W.fB,SourceBuffer:W.a8,SourceBufferList:W.fC,SpeechGrammar:W.a9,SpeechGrammarList:W.fD,SpeechRecognitionResult:W.aa,Storage:W.fI,CSSStyleSheet:W.W,StyleSheet:W.W,CalcLength:W.ah,KeywordValue:W.ah,LengthValue:W.ah,NumberValue:W.ah,SimpleLength:W.ah,TransformValue:W.ah,StyleValue:W.ah,HTMLTableElement:W.dp,HTMLTableRowElement:W.fR,HTMLTableSectionElement:W.fS,HTMLTemplateElement:W.bK,TextTrack:W.ab,TextTrackCue:W.X,VTTCue:W.X,TextTrackCueList:W.fV,TextTrackList:W.fW,TimeRanges:W.fY,Touch:W.ac,TouchEvent:W.aV,TouchList:W.h1,TrackDefaultList:W.h2,Matrix:W.bd,Skew:W.bd,TransformComponent:W.bd,Translation:W.h4,TreeWalker:W.ds,CompositionEvent:W.aC,FocusEvent:W.aC,TextEvent:W.aC,SVGZoomEvent:W.aC,UIEvent:W.aC,URL:W.ha,VideoTrackList:W.hc,VTTRegionList:W.hf,WebSocket:W.hg,WheelEvent:W.aY,Window:W.bO,DOMWindow:W.bO,Worker:W.hj,CompositorWorkerGlobalScope:W.aZ,DedicatedWorkerGlobalScope:W.aZ,ServiceWorkerGlobalScope:W.aZ,SharedWorkerGlobalScope:W.aZ,WorkerGlobalScope:W.aZ,ClientRect:W.hr,ClientRectList:W.dw,DOMRectList:W.dw,CSSRuleList:W.ht,DocumentType:W.hu,DOMRect:W.hv,GamepadList:W.hM,HTMLFrameSetElement:W.hN,NamedNodeMap:W.dz,MozNamedAttrMap:W.dz,ServiceWorker:W.i5,SpeechRecognitionResultList:W.i8,StyleSheetList:W.i9,WorkerLocation:W.ih,WorkerNavigator:W.ii,SVGAElement:P.dJ,SVGAnimateElement:P.aK,SVGAnimateMotionElement:P.aK,SVGAnimateTransformElement:P.aK,SVGAnimationElement:P.aK,SVGSetElement:P.aK,SVGFEBlendElement:P.e4,SVGFEColorMatrixElement:P.e5,SVGFEComponentTransferElement:P.e6,SVGFECompositeElement:P.e7,SVGFEConvolveMatrixElement:P.e8,SVGFEDiffuseLightingElement:P.e9,SVGFEDisplacementMapElement:P.ea,SVGFEFloodElement:P.eb,SVGFEGaussianBlurElement:P.ec,SVGFEImageElement:P.ed,SVGFEMergeElement:P.ee,SVGFEMorphologyElement:P.ef,SVGFEOffsetElement:P.eg,SVGFEPointLightElement:P.eh,SVGFESpecularLightingElement:P.ei,SVGFESpotLightElement:P.ej,SVGFETileElement:P.ek,SVGFETurbulenceElement:P.el,SVGFilterElement:P.ep,SVGForeignObjectElement:P.er,SVGCircleElement:P.ad,SVGEllipseElement:P.ad,SVGLineElement:P.ad,SVGPathElement:P.ad,SVGPolygonElement:P.ad,SVGPolylineElement:P.ad,SVGGeometryElement:P.ad,SVGClipPathElement:P.az,SVGDefsElement:P.az,SVGGElement:P.az,SVGSwitchElement:P.az,SVGGraphicsElement:P.az,SVGImageElement:P.ex,SVGLength:P.ap,SVGLengthList:P.eJ,SVGMarkerElement:P.eR,SVGMaskElement:P.eS,SVGNumber:P.aq,SVGNumberList:P.f7,SVGPatternElement:P.fe,SVGPoint:P.fj,SVGPointList:P.fk,SVGRect:P.fp,SVGRectElement:P.fq,SVGScriptElement:P.bH,SVGStringList:P.fN,SVGDescElement:P.F,SVGDiscardElement:P.F,SVGFEDistantLightElement:P.F,SVGFEFuncAElement:P.F,SVGFEFuncBElement:P.F,SVGFEFuncGElement:P.F,SVGFEFuncRElement:P.F,SVGFEMergeNodeElement:P.F,SVGMetadataElement:P.F,SVGStopElement:P.F,SVGStyleElement:P.F,SVGTitleElement:P.F,SVGComponentTransferFunctionElement:P.F,SVGElement:P.F,SVGSVGElement:P.fP,SVGSymbolElement:P.fQ,SVGTextContentElement:P.dq,SVGTextPathElement:P.fU,SVGTSpanElement:P.bL,SVGTextElement:P.bL,SVGTextPositioningElement:P.bL,SVGTransform:P.as,SVGTransformList:P.h3,SVGUseElement:P.hb,SVGViewElement:P.hd,SVGViewSpec:P.he,SVGLinearGradientElement:P.bQ,SVGRadialGradientElement:P.bQ,SVGGradientElement:P.bQ,SVGCursorElement:P.i1,SVGFEDropShadowElement:P.i2,SVGMPathElement:P.i3,AudioBuffer:P.dN,WebGLRenderingContext:P.ft,WebGL2RenderingContext:P.fu,WebGL2RenderingContextBase:P.ig,SQLResultSetRowList:P.fE})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.d7.$nativeSuperclassTag="ArrayBufferView"
H.bC.$nativeSuperclassTag="ArrayBufferView"
H.bD.$nativeSuperclassTag="ArrayBufferView"
H.d8.$nativeSuperclassTag="ArrayBufferView"
H.bB.$nativeSuperclassTag="ArrayBufferView"
H.bE.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
W.br.$nativeSuperclassTag="EventTarget"
W.bu.$nativeSuperclassTag="EventTarget"
W.bq.$nativeSuperclassTag="EventTarget"
W.bt.$nativeSuperclassTag="EventTarget"
W.bp.$nativeSuperclassTag="EventTarget"
W.bs.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.kY(U.kR(),b)},[])
else (function(b){H.kY(U.kR(),b)})([])})})()