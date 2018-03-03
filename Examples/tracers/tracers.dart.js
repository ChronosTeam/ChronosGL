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
a[c]=function(){a[c]=function(){H.nh(b)}
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
return d?function(e){if(t===null)t=H.jp(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jp(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jp(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={jb:function jb(a){this.a=a},
jg:function(a,b,c,d){if(!!a.$isc)return new H.e4(a,b,[c,d])
return new H.d4(a,b,[c,d])},
eH:function(){return new P.aC("No element")},
mb:function(){return new P.aC("Too many elements")},
ma:function(){return new P.aC("Too few elements")},
dl:function(a,b,c,d){if(c-b<=32)H.mo(a,b,c,d)
else H.mn(a,b,c,d)},
mo:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.ac(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.am(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mn:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.G(t+1,6)
r=a3+s
q=a4-s
p=C.b.G(a3+a4,2)
o=p-s
n=p+s
t=J.ac(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.am(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.am(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.am(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.am(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.am(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.am(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.am(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.am(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.am(a5.$2(j,i),0)){h=i
i=j
j=h}t.i(a2,r,m)
t.i(a2,p,k)
t.i(a2,q,i)
t.i(a2,o,t.h(a2,a3))
t.i(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.D(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
if(g<r&&f>q){for(;J.D(a5.$2(t.h(a2,g),l),0);)++g
for(;J.D(a5.$2(t.h(a2,f),j),0);)--f
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
ba:function ba(){},
d3:function d3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
d4:function d4(a,b,c){this.a=a
this.b=b
this.$ti=c},
e4:function e4(a,b,c){this.a=a
this.b=b
this.$ti=c},
eS:function eS(a,b,c,d){var _=this
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
hk:function hk(a,b,c){this.a=a
this.b=b
this.$ti=c},
ch:function ch(){},
dC:function(a,b){var t=a.af(b)
if(!u.globalState.d.cy)u.globalState.f.ak()
return t},
iL:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
l0:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.v(s).$isb)throw H.e(P.jL("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.hY(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$k6()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hA(P.jf(null,H.b1),0)
r=P.n
s.sey(new H.af(0,null,null,null,null,null,0,[r,H.b0]))
s.seB(new H.af(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.hX()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.m5,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.mD)}if(u.globalState.x)return
s=u.globalState.a++
q=P.ag(null,null,null,r)
p=new H.bc(0,null,!1)
o=new H.b0(s,new H.af(0,null,null,null,null,null,0,[r,H.bc]),q,u.createNewIsolate(),p,new H.ao(H.iQ()),new H.ao(H.iQ()),!1,!1,[],P.ag(null,null,null,null),null,null,!1,!0,P.ag(null,null,null,null))
q.l(0,0)
o.bt(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bi(a,{func:1,args:[,]}))o.af(new H.iW(t,a))
else if(H.bi(a,{func:1,args:[,,]}))o.af(new H.iX(t,a))
else o.af(a)
u.globalState.f.ak()},
mD:function(a){var t=P.aR(["command","print","msg",a])
return new H.aj(!0,P.bU(null,P.n)).H(t)},
m7:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.m8()
return},
m8:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.u("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.u('Cannot extract URI from "'+t+'"'))},
m5:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b_(!0,[]).W(b.data)
s=J.ac(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.n4(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b_(!0,[]).W(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b_(!0,[]).W(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.n
j=P.ag(null,null,null,k)
i=new H.bc(0,null,!1)
h=new H.b0(s,new H.af(0,null,null,null,null,null,0,[k,H.bc]),j,u.createNewIsolate(),i,new H.ao(H.iQ()),new H.ao(H.iQ()),!1,!1,[],P.ag(null,null,null,null),null,null,!1,!0,P.ag(null,null,null,null))
j.l(0,0)
h.bt(0,i)
u.globalState.f.a.T(0,new H.b1(h,new H.eE(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.ak()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lB(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ak()
break
case"close":u.globalState.ch.aj(0,$.$get$k7().h(0,a))
a.terminate()
u.globalState.f.ak()
break
case"log":H.m4(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aR(["command","print","msg",t])
k=new H.aj(!0,P.bU(null,P.n)).H(k)
s.toString
self.postMessage(k)}else P.al(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
m4:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aR(["command","log","msg",a])
r=new H.aj(!0,P.bU(null,P.n)).H(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.O(q)
t=H.aG(q)
s=P.cg(t)
throw H.e(s)}},
m6:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kd=$.kd+("_"+s)
$.ke=$.ke+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.F(0,["spawned",new H.bf(s,r),q,t.r])
r=new H.eF(a,b,c,d,t)
if(e){t.bM(q,q)
u.globalState.f.a.T(0,new H.b1(t,r,"start isolate"))}else r.$0()},
mp:function(a,b){var t=new H.h2(!0,!1,null)
t.dh(a,b)
return t},
mE:function(a){return new H.b_(!0,[]).W(new H.aj(!1,P.bU(null,P.n)).H(a))},
iW:function iW(a,b){this.a=a
this.b=b},
iX:function iX(a,b){this.a=a
this.b=b},
hY:function hY(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
hS:function hS(a,b){this.a=a
this.b=b},
hA:function hA(a,b){this.a=a
this.b=b},
hB:function hB(a){this.a=a},
b1:function b1(a,b,c){this.a=a
this.b=b
this.c=c},
hX:function hX(){},
eE:function eE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eF:function eF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ht:function ht(){},
bf:function bf(a,b){this.b=a
this.a=b},
hZ:function hZ(a,b){this.a=a
this.b=b},
bW:function bW(a,b,c){this.b=a
this.c=b
this.a=c},
bc:function bc(a,b,c){this.a=a
this.b=b
this.c=c},
h2:function h2(a,b,c){this.a=a
this.b=b
this.c=c},
h3:function h3(a,b){this.a=a
this.b=b},
h4:function h4(a,b){this.a=a
this.b=b},
ao:function ao(a){this.a=a},
aj:function aj(a,b){this.a=a
this.b=b},
b_:function b_(a,b){this.a=a
this.b=b},
mY:function(a){return u.types[a]},
n6:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.v(a).$isp},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.ax(a)
if(typeof t!=="string")throw H.e(H.S(a))
return t},
mm:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fv(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aU:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
dh:function(a){var t,s,r,q,p,o,n,m
t=J.v(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.C||!!J.v(a).$isaX){p=C.u(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.e.aF(q,0)===36)q=C.e.cW(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dE(H.iz(a),0,null),u.mangledGlobalNames)},
fr:function(a){return"Instance of '"+H.dh(a)+"'"},
Q:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mk:function(a){return a.b?H.Q(a).getUTCFullYear()+0:H.Q(a).getFullYear()+0},
mi:function(a){return a.b?H.Q(a).getUTCMonth()+1:H.Q(a).getMonth()+1},
me:function(a){return a.b?H.Q(a).getUTCDate()+0:H.Q(a).getDate()+0},
mf:function(a){return a.b?H.Q(a).getUTCHours()+0:H.Q(a).getHours()+0},
mh:function(a){return a.b?H.Q(a).getUTCMinutes()+0:H.Q(a).getMinutes()+0},
mj:function(a){return a.b?H.Q(a).getUTCSeconds()+0:H.Q(a).getSeconds()+0},
mg:function(a){return a.b?H.Q(a).getUTCMilliseconds()+0:H.Q(a).getMilliseconds()+0},
kc:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.S(a))
return a[b]},
M:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ad(!0,b,"index",null)
t=J.dJ(a)
if(b<0||C.b.cG(b,t))return P.A(b,a,"index",null,t)
return P.fs(b,"index",null)},
S:function(a){return new P.ad(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.dg()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.l1})
t.name=""}else t.toString=H.l1
return t},
l1:function(){return J.ax(this.dartException)},
E:function(a){throw H.e(a)},
N:function(a){throw H.e(new P.a0(a))},
as:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.h9(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
ha:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kp:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jd:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eL(a,s,t?null:b.receiver)},
O:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.iY(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aO(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jd(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.df(p,null))}}if(a instanceof TypeError){o=$.$get$kj()
n=$.$get$kk()
m=$.$get$kl()
l=$.$get$km()
k=$.$get$kq()
j=$.$get$kr()
i=$.$get$ko()
$.$get$kn()
h=$.$get$kt()
g=$.$get$ks()
f=o.L(s)
if(f!=null)return t.$1(H.jd(s,f))
else{f=n.L(s)
if(f!=null){f.method="call"
return t.$1(H.jd(s,f))}else{f=m.L(s)
if(f==null){f=l.L(s)
if(f==null){f=k.L(s)
if(f==null){f=j.L(s)
if(f==null){f=i.L(s)
if(f==null){f=l.L(s)
if(f==null){f=h.L(s)
if(f==null){f=g.L(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.df(s,f==null?null:f.method))}}return t.$1(new H.hc(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dm()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ad(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dm()
return a},
aG:function(a){var t
if(a==null)return new H.dA(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dA(a,null)},
na:function(a){if(a==null||typeof a!='object')return J.an(a)
else return H.aU(a)},
mW:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
n5:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dC(b,new H.iG(a))
case 1:return H.dC(b,new H.iH(a,d))
case 2:return H.dC(b,new H.iI(a,d,e))
case 3:return H.dC(b,new H.iJ(a,d,e,f))
case 4:return H.dC(b,new H.iK(a,d,e,f,g))}throw H.e(P.cg("Unsupported number of arguments for wrapped closure"))},
c_:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.n5)
a.$identity=t
return t},
lS:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.v(c).$isb){t.$reflectionInfo=c
r=H.mm(t).r}else r=c
q=d?Object.create(new H.fK().constructor.prototype):Object.create(new H.bm(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.jU(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.mY,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jR:H.j6
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.jU(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
lP:function(a,b,c,d){var t=H.j6
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
jU:function(a,b,c){var t,s,r,q
if(c)return H.lR(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.lP(s,b==null?r!=null:b!==r,t,b)
return q},
lQ:function(a,b,c,d){var t,s
t=H.j6
s=H.jR
switch(b?-1:a){case 0:throw H.e(new H.fB("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
lR:function(a,b){var t,s,r,q
H.lO()
t=$.jQ
if(t==null){t=H.jP("receiver")
$.jQ=t}s=b.$stubName
r=b.length
q=a[s]
t=H.lQ(r,b==null?q!=null:b!==q,s,b)
return t},
jp:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.v(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.lS(a,b,t,!!d,e,f)},
j6:function(a){return a.a},
jR:function(a){return a.c},
lO:function(){var t=$.jS
if(t==null){t=H.jP("self")
$.jS=t}return t},
jP:function(a){var t,s,r,q,p
t=new H.bm("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
nv:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.at(a,"String"))},
Y:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.at(a,"double"))},
nu:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.at(a,"num"))},
mQ:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.at(a,"bool"))},
n4:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.at(a,"int"))},
nc:function(a,b){throw H.e(H.at(a,b.substring(3)))},
nb:function(a,b){var t=J.ac(b)
throw H.e(H.jT(H.dh(a),t.bg(b,3,t.gk(b))))},
js:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.v(a)[b])return a
H.nc(a,b)},
aI:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.v(a)[b]
else t=!0
if(t)return a
H.nb(a,b)},
nt:function(a){if(a==null)return a
if(!!J.v(a).$isb)return a
throw H.e(H.at(a,"List"))},
kP:function(a){var t=J.v(a)
return"$S" in t?t.$S():null},
bi:function(a,b){var t
if(a==null)return!1
t=H.kP(a)
return t==null?!1:H.kV(t,b)},
nr:function(a,b){var t,s
if(a==null)return a
if($.jm)return a
$.jm=!0
try{if(H.bi(a,b))return a
t=H.aJ(b,null)
s=H.at(a,t)
throw H.e(s)}finally{$.jm=!1}},
at:function(a,b){return new H.hb("type '"+H.dh(a)+"' is not a subtype of type '"+b+"'")},
jT:function(a,b){return new H.dR("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
aF:function(a){if(!0===a)return!1
if(!!J.v(a).$isj9)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.at(a,"bool"))},
b3:function(a){throw H.e(new H.hn(a))},
d:function(a){if(H.aF(a))throw H.e(new P.c5(null))},
nh:function(a){throw H.e(new P.dV(a))},
iQ:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
kT:function(a){return u.getIsolateTag(a)},
I:function(a){return new H.aD(a,null)},
C:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iz:function(a){if(a==null)return
return a.$ti},
kU:function(a,b){return H.jw(a["$as"+H.f(b)],H.iz(a))},
ak:function(a,b,c){var t,s
t=H.kU(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aH:function(a,b){var t,s
t=H.iz(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aJ:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dE(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aJ(t,b)
return H.mF(a,b)}return"unknown-reified-type"},
mF:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aJ(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aJ(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aJ(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.mV(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aJ(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
dE:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bK("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aJ(o,c)}return p?"":"<"+s.j(0)+">"},
iA:function(a){var t,s
if(a instanceof H.b5){t=H.kP(a)
if(t!=null)return H.aJ(t,null)}s=J.v(a).constructor.name
if(a==null)return s
return s+H.dE(a.$ti,0,null)},
jw:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jt(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jt(a,null,b)
return b},
is:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iz(a)
s=J.v(a)
if(s[b]==null)return!1
return H.kK(H.jw(s[d],t),c)},
dF:function(a,b,c,d){if(a==null)return a
if(H.is(a,b,c,d))return a
throw H.e(H.jT(H.dh(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dE(c,0,null),u.mangledGlobalNames)))},
no:function(a,b,c,d){if(a==null)return a
if(H.is(a,b,c,d))return a
throw H.e(H.at(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dE(c,0,null),u.mangledGlobalNames)))},
kK:function(a,b){var t,s,r,q,p
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
if(!H.Z(r,b[p]))return!1}return!0},
np:function(a,b,c){return H.jt(a,b,H.kU(b,c))},
Z:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aT")return!0
if('func' in b)return H.kV(a,b)
if('func' in a)return b.name==="j9"||b.name==="o"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.d(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.d(!0)
q=b[0]}else q=b
if(q!==s){p=H.aJ(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.kK(H.jw(o,t),r)},
kJ:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.Z(o,n)||H.Z(n,o)))return!1}return!0},
mM:function(a,b){var t,s,r,q,p,o
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
if(!(H.Z(p,o)||H.Z(o,p)))return!1}return!0},
kV:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.d('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.Z(t,s)||H.Z(s,t)))return!1}r=a.args
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
if(n===m){if(!H.kJ(r,q,!1))return!1
if(!H.kJ(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
g=r[h]
H.d(i)
f=q[h]
if(!(H.Z(g,f)||H.Z(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=q[e]
if(!(H.Z(g,f)||H.Z(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=o[e]
if(!(H.Z(g,f)||H.Z(f,g)))return!1}}return H.mM(a.named,b.named)},
jt:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nw:function(a){var t=$.jq
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
ns:function(a){return H.aU(a)},
nq:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
n7:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.o))
t=$.jq.$1(a)
s=$.ix[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iF[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kI.$2(a,t)
if(t!=null){s=$.ix[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iF[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.ju(r)
$.ix[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iF[t]=r
return r}if(p==="-"){o=H.ju(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.kX(a,r)
if(p==="*")throw H.e(new P.dt(t))
if(u.leafTags[t]===true){o=H.ju(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.kX(a,r)},
kX:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.iO(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
ju:function(a){return J.iO(a,!1,null,!!a.$isp)},
n9:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.iO(t,!1,null,!!t.$isp)
else return J.iO(t,c,null,null)},
n2:function(){if(!0===$.jr)return
$.jr=!0
H.n3()},
n3:function(){var t,s,r,q,p,o,n,m
$.ix=Object.create(null)
$.iF=Object.create(null)
H.n1()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.l_.$1(p)
if(o!=null){n=H.n9(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
n1:function(){var t,s,r,q,p,o,n
t=C.G()
t=H.bh(C.D,H.bh(C.I,H.bh(C.t,H.bh(C.t,H.bh(C.H,H.bh(C.E,H.bh(C.F(C.u),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jq=new H.iC(p)
$.kI=new H.iD(o)
$.l_=new H.iE(n)},
bh:function(a,b){return a(b)||b},
ng:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fv:function fv(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
h9:function h9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
df:function df(a,b){this.a=a
this.b=b},
eL:function eL(a,b,c){this.a=a
this.b=b
this.c=c},
hc:function hc(a){this.a=a},
iY:function iY(a){this.a=a},
dA:function dA(a,b){this.a=a
this.b=b},
iG:function iG(a){this.a=a},
iH:function iH(a,b){this.a=a
this.b=b},
iI:function iI(a,b,c){this.a=a
this.b=b
this.c=c},
iJ:function iJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iK:function iK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
b5:function b5(){},
fX:function fX(){},
fK:function fK(){},
bm:function bm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hb:function hb(a){this.a=a},
dR:function dR(a){this.a=a},
fB:function fB(a){this.a=a},
hn:function hn(a){this.a=a},
aD:function aD(a,b){this.a=a
this.b=b},
af:function af(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eK:function eK(a){this.a=a},
eN:function eN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
eO:function eO(a,b){this.a=a
this.$ti=b},
eP:function eP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iC:function iC(a){this.a=a},
iD:function iD(a){this.a=a},
iE:function iE(a){this.a=a},
t:function(a){return a},
io:function(a){var t,s,r
if(!!J.v(a).$ism)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bA:function bA(){},
bb:function bb(){},
f0:function f0(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
d6:function d6(){},
f1:function f1(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
da:function da(){},
f7:function f7(){},
bB:function bB(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
mV:function(a){var t=H.C(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
iP:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
v:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d1.prototype
return J.d0.prototype}if(typeof a=="string")return J.aO.prototype
if(a==null)return J.eJ.prototype
if(typeof a=="boolean")return J.eI.prototype
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.o)return a
return J.iy(a)},
iO:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iy:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jr==null){H.n2()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.dt("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jc()]
if(p!=null)return p
p=H.n7(a)
if(p!=null)return p
if(typeof a=="function")return C.J
s=Object.getPrototypeOf(a)
if(s==null)return C.w
if(s===Object.prototype)return C.w
if(typeof q=="function"){Object.defineProperty(q,$.$get$jc(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
ac:function(a){if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.o)return a
return J.iy(a)},
c1:function(a){if(a==null)return a
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.o)return a
return J.iy(a)},
kR:function(a){if(typeof a=="number")return J.b9.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.aX.prototype
return a},
mX:function(a){if(typeof a=="number")return J.b9.prototype
if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.aX.prototype
return a},
kS:function(a){if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.aX.prototype
return a},
k:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.o)return a
return J.iy(a)},
D:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.v(a).v(a,b)},
am:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kR(a).am(a,b)},
l3:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kR(a).aB(a,b)},
bj:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n6(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ac(a).h(a,b)},
l4:function(a,b,c,d){return J.k(a).dt(a,b,c,d)},
jx:function(a,b){return J.kS(a).aF(a,b)},
bk:function(a,b){return J.k(a).dM(a,b)},
l5:function(a,b,c){return J.k(a).dN(a,b,c)},
jy:function(a,b){return J.k(a).bL(a,b)},
iZ:function(a,b){return J.k(a).N(a,b)},
jz:function(a,b,c){return J.k(a).bO(a,b,c)},
l6:function(a,b){return J.k(a).e_(a,b)},
dG:function(a,b,c){return J.k(a).bP(a,b,c)},
l7:function(a,b,c){return J.k(a).bQ(a,b,c)},
c4:function(a,b,c){return J.k(a).bR(a,b,c)},
dH:function(a,b){return J.k(a).e2(a,b)},
l8:function(a,b){return J.k(a).bS(a,b)},
l9:function(a,b,c){return J.k(a).bT(a,b,c)},
jA:function(a,b,c,d){return J.k(a).bU(a,b,c,d)},
la:function(a,b){return J.c1(a).bV(a,b)},
lb:function(a,b,c,d,e){return J.k(a).bW(a,b,c,d,e)},
lc:function(a,b){return J.mX(a).O(a,b)},
j_:function(a,b,c){return J.ac(a).e6(a,b,c)},
j0:function(a){return J.k(a).bY(a)},
ld:function(a){return J.k(a).bZ(a)},
le:function(a){return J.k(a).c1(a)},
jB:function(a){return J.k(a).ec(a)},
lf:function(a,b){return J.k(a).c3(a,b)},
j1:function(a,b){return J.k(a).c4(a,b)},
lg:function(a,b,c,d){return J.k(a).c5(a,b,c,d)},
lh:function(a,b,c,d,e){return J.k(a).ej(a,b,c,d,e)},
li:function(a,b,c,d,e){return J.k(a).c6(a,b,c,d,e)},
lj:function(a,b,c,d,e,f){return J.k(a).ek(a,b,c,d,e,f)},
lk:function(a,b){return J.c1(a).t(a,b)},
dI:function(a,b){return J.k(a).c7(a,b)},
ll:function(a,b){return J.k(a).c8(a,b)},
lm:function(a){return J.k(a).el(a)},
ln:function(a,b){return J.c1(a).au(a,b)},
lo:function(a){return J.k(a).gdZ(a)},
an:function(a){return J.v(a).gu(a)},
bl:function(a){return J.c1(a).gw(a)},
dJ:function(a){return J.ac(a).gk(a)},
lp:function(a){return J.k(a).gaZ(a)},
lq:function(a){return J.v(a).gA(a)},
lr:function(a){return J.k(a).geM(a)},
ls:function(a){return J.k(a).gay(a)},
j2:function(a){return J.k(a).gm(a)},
j3:function(a){return J.k(a).gn(a)},
jC:function(a){return J.k(a).gI(a)},
j4:function(a,b){return J.k(a).a6(a,b)},
lt:function(a){return J.k(a).aA(a)},
lu:function(a){return J.k(a).b4(a)},
lv:function(a,b){return J.k(a).b5(a,b)},
lw:function(a,b,c){return J.k(a).b6(a,b,c)},
jD:function(a,b,c){return J.k(a).b9(a,b,c)},
lx:function(a,b){return J.k(a).ca(a,b)},
ly:function(a,b){return J.c1(a).cc(a,b)},
lz:function(a,b,c){return J.k(a).ce(a,b,c)},
lA:function(a){return J.c1(a).eG(a)},
lB:function(a,b){return J.k(a).F(a,b)},
lC:function(a,b,c,d){return J.k(a).bf(a,b,c,d)},
lD:function(a,b,c,d,e,f,g){return J.k(a).cj(a,b,c,d,e,f,g)},
lE:function(a,b,c,d){return J.k(a).ck(a,b,c,d)},
jE:function(a,b,c,d){return J.k(a).cl(a,b,c,d)},
lF:function(a){return J.kS(a).eP(a)},
ax:function(a){return J.v(a).j(a)},
lG:function(a,b,c,d){return J.k(a).eR(a,b,c,d)},
lH:function(a,b,c){return J.k(a).co(a,b,c)},
lI:function(a,b,c){return J.k(a).cp(a,b,c)},
j5:function(a,b,c){return J.k(a).cq(a,b,c)},
lJ:function(a,b,c){return J.k(a).cr(a,b,c)},
jF:function(a,b,c){return J.k(a).cs(a,b,c)},
jG:function(a,b,c){return J.k(a).ct(a,b,c)},
jH:function(a,b,c){return J.k(a).cu(a,b,c)},
jI:function(a,b,c,d){return J.k(a).cv(a,b,c,d)},
jJ:function(a,b,c,d){return J.k(a).cw(a,b,c,d)},
lK:function(a,b){return J.k(a).cA(a,b)},
lL:function(a,b,c){return J.k(a).eS(a,b,c)},
jK:function(a,b,c,d,e,f,g){return J.k(a).cC(a,b,c,d,e,f,g)},
lM:function(a,b,c,d,e){return J.k(a).cD(a,b,c,d,e)},
a:function a(){},
eI:function eI(){},
eJ:function eJ(){},
bx:function bx(){},
fl:function fl(){},
aX:function aX(){},
aP:function aP(){},
aN:function aN(a){this.$ti=a},
ja:function ja(a){this.$ti=a},
dN:function dN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b9:function b9(){},
d1:function d1(){},
d0:function d0(){},
aO:function aO(){}},P={
mt:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.mN()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.c_(new P.hp(t),1)).observe(s,{childList:true})
return new P.ho(t,s,r)}else if(self.setImmediate!=null)return P.mO()
return P.mP()},
mu:function(a){++u.globalState.f.b
self.scheduleImmediate(H.c_(new P.hq(a),0))},
mv:function(a){++u.globalState.f.b
self.setImmediate(H.c_(new P.hr(a),0))},
mw:function(a){P.jh(C.q,a)},
mI:function(a,b){if(H.bi(a,{func:1,args:[P.aT,P.aT]})){b.toString
return a}else{b.toString
return a}},
my:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.av))
H.d(b.a===0)
b.a=1
try{a.cn(new P.hH(b),new P.hI(b))}catch(r){t=H.O(r)
s=H.aG(r)
P.nd(new P.hJ(b,t,s))}},
kz:function(a,b){var t,s,r,q
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
P.bQ(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bE(q)}},
bQ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.ip(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bQ(t.a,b)}s=t.a
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
P.ip(null,null,p,o,s)
return}s=$.B
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.B
H.d(l==null?s!=null:l!==s)
j=$.B
$.B=l
i=j}else i=null
s=b.c
if(s===8)new P.hN(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.hM(r,b,m).$0()}else if((s&2)!==0)new P.hL(t,r,b).$0()
if(i!=null){H.d(!0)
$.B=i}s=r.b
if(!!J.v(s).$isew){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.ad(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.kz(s,o)
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
mH:function(){var t,s
for(;t=$.bg,t!=null;){$.bY=null
s=t.b
$.bg=s
if(s==null)$.bX=null
t.a.$0()}},
mL:function(){$.jn=!0
try{P.mH()}finally{$.bY=null
$.jn=!1
if($.bg!=null)$.$get$jj().$1(P.kL())}},
kG:function(a){var t=new P.dv(a,null)
if($.bg==null){$.bX=t
$.bg=t
if(!$.jn)$.$get$jj().$1(P.kL())}else{$.bX.b=t
$.bX=t}},
mK:function(a){var t,s,r
t=$.bg
if(t==null){P.kG(a)
$.bY=$.bX
return}s=new P.dv(a,null)
r=$.bY
if(r==null){s.b=t
$.bY=s
$.bg=s}else{s.b=r.b
r.b=s
$.bY=s
if(s.b==null)$.bX=s}},
nd:function(a){var t=$.B
if(C.d===t){P.ir(null,null,C.d,a)
return}t.toString
P.ir(null,null,t,t.aS(a))},
mq:function(a,b){var t=$.B
if(t===C.d){t.toString
return P.jh(a,b)}return P.jh(a,t.aS(b))},
jh:function(a,b){var t=C.b.G(a.a,1000)
return H.mp(t<0?0:t,b)},
ji:function(a){var t,s
H.d(a!=null)
t=$.B
H.d(a==null?t!=null:a!==t)
s=$.B
$.B=a
return s},
ip:function(a,b,c,d,e){var t={}
t.a=d
P.mK(new P.iq(t,e))},
kE:function(a,b,c,d){var t,s
if($.B===c)return d.$0()
t=P.ji(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.B=s}},
kF:function(a,b,c,d,e){var t,s
if($.B===c)return d.$1(e)
t=P.ji(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.B=s}},
mJ:function(a,b,c,d,e,f){var t,s
if($.B===c)return d.$2(e,f)
t=P.ji(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.B=s}},
ir:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.aS(d):c.e0(d)
P.kG(d)},
hp:function hp(a){this.a=a},
ho:function ho(a,b,c){this.a=a
this.b=b
this.c=c},
hq:function hq(a){this.a=a},
hr:function hr(a){this.a=a},
hv:function hv(){},
ie:function ie(a,b){this.a=a
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
hG:function hG(a,b){this.a=a
this.b=b},
hK:function hK(a,b){this.a=a
this.b=b},
hH:function hH(a){this.a=a},
hI:function hI(a){this.a=a},
hJ:function hJ(a,b,c){this.a=a
this.b=b
this.c=c},
hN:function hN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hO:function hO(a){this.a=a},
hM:function hM(a,b,c){this.a=a
this.b=b
this.c=c},
hL:function hL(a,b,c){this.a=a
this.b=b
this.c=c},
dv:function dv(a,b){this.a=a
this.b=b},
fO:function fO(){},
fQ:function fQ(a){this.a=a},
fR:function fR(a,b){this.a=a
this.b=b},
fP:function fP(){},
b4:function b4(a,b){this.a=a
this.b=b},
im:function im(){},
iq:function iq(a,b){this.a=a
this.b=b},
i0:function i0(){},
i2:function i2(a,b){this.a=a
this.b=b},
i1:function i1(a,b){this.a=a
this.b=b},
i3:function i3(a,b){this.a=a
this.b=b},
k9:function(a,b){return new H.af(0,null,null,null,null,null,0,[a,b])},
J:function(){return new H.af(0,null,null,null,null,null,0,[null,null])},
aR:function(a){return H.mW(a,new H.af(0,null,null,null,null,null,0,[null,null]))},
bU:function(a,b){return new P.dy(0,null,null,null,null,null,0,[a,b])},
mC:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
m9:function(a,b,c){var t,s
if(P.jo(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bZ()
C.a.l(s,a)
try{P.mG(a,t)}finally{H.d(C.a.gax(s)===a)
s.pop()}s=P.ki(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eG:function(a,b,c){var t,s,r
if(P.jo(a))return b+"..."+c
t=new P.bK(b)
s=$.$get$bZ()
C.a.l(s,a)
try{r=t
r.a=P.ki(r.ga2(),a,", ")}finally{H.d(C.a.gax(s)===a)
s.pop()}s=t
s.a=s.ga2()+c
s=t.ga2()
return s.charCodeAt(0)==0?s:s},
jo:function(a){var t,s
for(t=0;s=$.$get$bZ(),t<s.length;++t)if(a===s[t])return!0
return!1},
mG:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gw(a)
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
ag:function(a,b,c,d){return new P.hU(0,null,null,null,null,null,0,[d])},
je:function(a,b){var t,s
t=P.ag(null,null,null,b)
for(s=J.bl(a);s.p();)t.l(0,s.gq())
return t},
mc:function(a){var t,s,r
t={}
if(P.jo(a))return"{...}"
s=new P.bK("")
try{C.a.l($.$get$bZ(),a)
r=s
r.a=r.ga2()+"{"
t.a=!0
a.au(0,new P.eT(t,s))
t=s
t.a=t.ga2()+"}"}finally{t=$.$get$bZ()
H.d(C.a.gax(t)===a)
t.pop()}t=s.ga2()
return t.charCodeAt(0)==0?t:t},
jf:function(a,b){var t=new P.eQ(null,0,0,0,[b])
t.d9(a,b)
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
hU:function hU(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hV:function hV(a,b,c){this.a=a
this.b=b
this.c=c},
bT:function bT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hR:function hR(){},
d2:function d2(){},
x:function x(){},
eT:function eT(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hW:function hW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fE:function fE(){},
fD:function fD(){},
bG:function bG(){},
ki:function(a,b,c){var t=J.bl(b)
if(!t.p())return a
if(c.length===0){do a+=H.f(t.gq())
while(t.p())}else{a+=H.f(t.gq())
for(;t.p();)a=a+c+H.f(t.gq())}return a},
lT:function(a,b){return J.lc(a,b)},
lU:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.f(t)
if(t>=10)return s+"00"+H.f(t)
return s+"000"+H.f(t)},
lV:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ca:function(a){if(a>=10)return""+a
return"0"+a},
lX:function(a,b,c,d,e,f){return new P.ay(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
j8:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ax(a)
if(typeof a==="string")return JSON.stringify(a)
return P.m_(a)},
m_:function(a){var t=J.v(a)
if(!!t.$isb5)return t.j(a)
return H.fr(a)},
jL:function(a){return new P.ad(!1,null,null,a)},
jM:function(a,b,c){return new P.ad(!0,a,b,c)},
lN:function(a){return new P.ad(!1,null,a,"Must not be null")},
fs:function(a,b,c){return new P.dj(null,null,!0,a,b,"Value not in range")},
aV:function(a,b,c,d,e){return new P.dj(b,c,!0,a,d,"Invalid value")},
kf:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.aV(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.aV(b,a,c,"end",f))
return b},
A:function(a,b,c,d,e){var t=e!=null?e:J.dJ(b)
return new P.eC(b,t,!0,a,c,"Index out of range")},
cg:function(a){return new P.hF(a)},
ka:function(a,b,c){var t,s
t=H.C([],[c])
for(s=J.bl(a);s.p();)C.a.l(t,s.gq())
if(b)return t
t.fixed$length=Array
return t},
al:function(a){H.iP(H.f(a))},
aw:function aw(){},
G:function G(){},
b7:function b7(a,b){this.a=a
this.b=b},
K:function K(){},
ay:function ay(a){this.a=a},
e2:function e2(){},
e3:function e3(){},
b8:function b8(){},
c5:function c5(a){this.a=a},
dg:function dg(){},
ad:function ad(a,b,c,d){var _=this
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
eC:function eC(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
u:function u(a){this.a=a},
dt:function dt(a){this.a=a},
aC:function aC(a){this.a=a},
a0:function a0(a){this.a=a},
dm:function dm(){},
dV:function dV(a){this.a=a},
hF:function hF(a){this.a=a},
e5:function e5(a,b,c){this.a=a
this.b=b
this.$ti=c},
n:function n(){},
U:function U(){},
d_:function d_(){},
b:function b(){},
aB:function aB(){},
aT:function aT(){},
T:function T(){},
o:function o(){},
bJ:function bJ(){},
r:function r(){},
bK:function bK(a){this.a=a},
iv:function(a){var t,s,r,q,p
if(a==null)return
t=P.J()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.N)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
mT:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.ln(a,new P.iu(t))
return t},
k0:function(){var t=$.k_
if(t==null){t=J.j_(window.navigator.userAgent,"Opera",0)
$.k_=t}return t},
lW:function(){var t,s
t=$.jX
if(t!=null)return t
s=$.jY
if(s==null){s=J.j_(window.navigator.userAgent,"Firefox",0)
$.jY=s}if(s)t="-moz-"
else{s=$.jZ
if(s==null){s=!P.k0()&&J.j_(window.navigator.userAgent,"Trident/",0)
$.jZ=s}if(s)t="-ms-"
else t=P.k0()?"-o-":"-webkit-"}$.jX=t
return t},
iu:function iu(a){this.a=a},
hT:function hT(){},
i_:function i_(){},
H:function H(){},
dK:function dK(){},
aK:function aK(){},
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
em:function em(){},
en:function en(){},
er:function er(){},
et:function et(){},
ae:function ae(){},
aA:function aA(){},
eA:function eA(){},
ap:function ap(){},
eM:function eM(){},
eU:function eU(){},
eV:function eV(){},
aq:function aq(){},
fb:function fb(){},
fi:function fi(){},
fn:function fn(){},
fo:function fo(){},
ft:function ft(){},
fu:function fu(){},
bI:function bI(){},
fS:function fS(){},
F:function F(){},
fT:function fT(){},
fU:function fU(){},
dp:function dp(){},
fY:function fY(){},
bM:function bM(){},
ar:function ar(){},
h7:function h7(){},
he:function he(){},
hg:function hg(){},
hh:function hh(){},
bR:function bR(){},
i4:function i4(){},
i5:function i5(){},
i6:function i6(){},
co:function co(){},
cm:function cm(){},
ct:function ct(){},
cx:function cx(){},
cI:function cI(){},
cQ:function cQ(){},
cM:function cM(){},
cO:function cO(){},
dO:function dO(){},
fy:function fy(){},
fz:function fz(){},
ij:function ij(){},
fJ:function fJ(){},
cn:function cn(){},
cK:function cK(){}},W={
lY:function(a,b,c){var t,s
t=document.body
s=(t&&C.h).K(t,a,b,c)
s.toString
t=new H.du(new W.R(s),new W.it(),[W.q])
return t.ga1(t)},
lZ:function(a){return"wheel"},
bo:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lr(a)
if(typeof s==="string")t=a.tagName}catch(r){H.O(r)}return t},
mx:function(a,b){return document.createElement(a)},
b2:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kC:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ai:function(a,b,c,d,e){var t=c==null?null:W.kH(new W.hE(c))
t=new W.hD(0,a,b,t,!1,[e])
t.dm(a,b,c,!1,e)
return t},
kA:function(a){var t,s
t=document.createElement("a")
s=new W.i7(t,window.location)
s=new W.bS(s)
s.dn(a)
return s},
mA:function(a,b,c,d){return!0},
mB:function(a,b,c,d){var t,s,r,q,p
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
kD:function(){var t=P.r
t=new W.ig(P.je(C.l,t),P.ag(null,null,null,t),P.ag(null,null,null,t),P.ag(null,null,null,t),null)
t.dr(null,new H.by(C.l,new W.ih(),[H.aH(C.l,0),null]),["TEMPLATE"],null)
return t},
kH:function(a){var t=$.B
if(t===C.d)return a
return t.e1(a)},
l:function l(){},
dL:function dL(){},
dM:function dM(){},
a_:function a_(){},
dP:function dP(){},
c6:function c6(){},
aL:function aL(){},
c7:function c7(){},
c8:function c8(){},
c9:function c9(){},
aM:function aM(){},
dT:function dT(){},
y:function y(){},
b6:function b6(){},
dU:function dU(){},
dW:function dW(){},
dX:function dX(){},
cb:function cb(){},
bn:function bn(){},
cc:function cc(){},
dY:function dY(){},
cd:function cd(){},
dZ:function dZ(){},
ce:function ce(){},
cf:function cf(){},
e_:function e_(){},
e0:function e0(){},
a1:function a1(){},
it:function it(){},
j:function j(){},
h:function h(){},
a2:function a2(){},
ep:function ep(){},
eq:function eq(){},
eu:function eu(){},
a3:function a3(){},
cj:function cj(){},
ey:function ey(){},
bv:function bv(){},
ck:function ck(){},
ez:function ez(){},
bw:function bw(){},
eD:function eD(){},
aQ:function aQ(){},
eR:function eR(){},
eX:function eX(){},
eY:function eY(){},
bz:function bz(){},
a4:function a4(){},
eZ:function eZ(){},
L:function L(){},
f8:function f8(){},
R:function R(a){this.a=a},
q:function q(){},
dc:function dc(){},
bF:function bF(){},
fh:function fh(){},
fk:function fk(){},
a5:function a5(){},
fm:function fm(){},
fp:function fp(){},
fq:function fq(){},
di:function di(){},
fA:function fA(){},
dk:function dk(){},
fC:function fC(){},
fF:function fF(){},
a6:function a6(){},
fG:function fG(){},
a7:function a7(){},
fI:function fI(){},
a8:function a8(){},
fN:function fN(){},
V:function V(){},
ah:function ah(){},
dn:function dn(){},
fV:function fV(){},
fW:function fW(){},
bL:function bL(){},
a9:function a9(){},
W:function W(){},
fZ:function fZ(){},
h_:function h_(){},
h1:function h1(){},
aa:function aa(){},
aW:function aW(){},
h5:function h5(){},
h6:function h6(){},
be:function be(){},
h8:function h8(){},
dr:function dr(){},
aE:function aE(){},
hd:function hd(){},
hf:function hf(){},
hi:function hi(){},
hj:function hj(){},
aY:function aY(){},
bP:function bP(){},
hl:function hl(a){this.a=a},
hm:function hm(){},
aZ:function aZ(){},
hu:function hu(){},
dw:function dw(){},
hw:function hw(){},
hx:function hx(){},
hy:function hy(){},
hP:function hP(){},
hQ:function hQ(){},
dz:function dz(){},
i8:function i8(){},
ib:function ib(){},
ic:function ic(){},
ik:function ik(){},
il:function il(){},
hs:function hs(){},
hz:function hz(a){this.a=a},
hC:function hC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jk:function jk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hD:function hD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hE:function hE(a){this.a=a},
bS:function bS(a){this.a=a},
z:function z(){},
de:function de(a){this.a=a},
fa:function fa(a){this.a=a},
f9:function f9(a,b,c){this.a=a
this.b=b
this.c=c},
bV:function bV(){},
i9:function i9(){},
ia:function ia(){},
ig:function ig(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ih:function ih(){},
id:function id(){},
ci:function ci(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dd:function dd(){},
i7:function i7(a,b){this.a=a
this.b=b},
dB:function dB(a){this.a=a},
ii:function ii(a){this.a=a},
bp:function bp(){},
bq:function bq(){},
br:function br(){},
bs:function bs(){},
bt:function bt(){},
bu:function bu(){},
cl:function cl(){},
cF:function cF(){},
cr:function cr(){},
cy:function cy(){},
cz:function cz(){},
cA:function cA(){},
cB:function cB(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
cp:function cp(){},
cq:function cq(){},
cs:function cs(){},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
cG:function cG(){},
cH:function cH(){},
cS:function cS(){},
cT:function cT(){},
cR:function cR(){},
cW:function cW(){},
cX:function cX(){},
cY:function cY(){},
cZ:function cZ(){},
cJ:function cJ(){},
cL:function cL(){},
cN:function cN(){},
cP:function cP(){},
cU:function cU(){},
cV:function cV(){}},B={
ne:function(a){var t,s
t=document
s=W.aQ
W.ai(t,"keydown",new B.iR(),!1,s)
W.ai(t,"keyup",new B.iS(),!1,s)
if(!$.nf)W.ai(t,"mousemove",new B.iT(),!1,W.L)
s=W.L
W.ai(t,"mousedown",new B.iU(),!1,s)
W.ai(t,"mouseup",new B.iV(),!1,s)},
md:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.t(3))
s=$.$get$iw()
r=$.$get$c0()
q=new T.P(new Float32Array(H.t(16)))
q.R()
q=new B.fc(a,b,c,0,new T.w(t),-0.02,s,r,q,new T.w(new Float32Array(H.t(3))),new T.w(new Float32Array(H.t(3))),new T.w(new Float32Array(H.t(3))),new T.w(new Float32Array(H.t(3))),"camera:orbit",!1,!0)
q.dc(a,b,c,d)
return q},
iR:function iR(){},
iS:function iS(){},
iT:function iT(){},
iU:function iU(){},
iV:function iV(){},
fc:function fc(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
fd:function fd(a){this.a=a},
fe:function fe(a){this.a=a},
ff:function ff(){},
fg:function fg(a){this.a=a}},G={
ms:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.a4(t,"\n")},
ky:function(a,b,c){var t,s,r,q
t=J.k(a)
s=t.c0(a,b)
t.bc(a,s,c)
t.bX(a,s)
r=t.b8(a,s,35713)
if(r!=null&&!r){q=t.b7(a,s)
P.al("E:Compilation failed:")
P.al("E:"+G.ms(c))
P.al("E:Failure:")
P.al(C.e.a0("E:",q))
throw H.e(q)}return s},
kb:function(a,b){var t=new G.eW(P.J(),a,!1,!0)
t.da(a,b)
return t},
k4:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.j2(a[s])
b[t+1]=J.j3(a[s])
b[t+2]=J.jC(a[s])}return b},
m1:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.j2(a[s])
b[t+1]=J.j3(a[s])}return b},
m2:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.j2(a[s])
b[t+1]=J.j3(a[s])
b[t+2]=J.jC(a[s])
b[t+3]=J.ls(a[s])}return b},
m0:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.bj(a[s],0)
b[t+1]=J.bj(a[s],1)
b[t+2]=J.bj(a[s],2)
b[t+3]=J.bj(a[s],3)}return b},
mz:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gC(t),s=s.gw(s),r=b.x,q=[[P.b,P.n]],p=[P.K],o=[T.au],n=[T.w],m=[T.ab];s.p();){l=s.gq()
if(!r.D(0,l)){k="Dropping unnecessary attribute: "+H.f(l)
if($.kQ>0)H.iP("I: "+k)
continue}j=t.h(0,l)
switch($.$get$X().h(0,l).a){case"vec2":b.a9(l,G.m1(H.dF(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.a9(l,G.k4(H.dF(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.a9(l,G.m2(H.dF(j,"$isb",o,"$asb"),null),4)
break
case"float":b.a9(l,new Float32Array(H.io(H.dF(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.a9(l,G.m0(H.dF(j,"$isb",q,"$asb"),null),4)
break
default:if(H.aF(!1))H.b3("unknown type for "+H.f(l)+" ["+J.lq(j[0]).j(0)+"] ["+new H.aD(H.iA(j),null).j(0)+"] "+H.f(j))}}},
kg:function(a,b,c,d){var t=new G.fx(b,c,d,null,null,P.J(),P.J(),P.ag(null,null,null,P.r),null,a,!1,!0)
t.dd(a,b,c,d)
return t},
f_:function f_(){},
ds:function ds(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dQ:function dQ(){},
dS:function dS(a,b){this.a=a
this.b=b},
ev:function ev(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eo:function eo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ex:function ex(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dq:function dq(a,b,c){this.a=a
this.b=b
this.c=c},
bO:function bO(a,b,c){this.a=a
this.b=b
this.c=c},
eW:function eW(a,b,c,d){var _=this
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
fj:function fj(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
e1:function e1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fx:function fx(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
bd:function bd(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fH:function fH(){},
h0:function h0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bN:function bN(){},
eB:function eB(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={
mr:function(a,b,c){var t,s,r,q
t="stars_"+b
s=b*3
r=new Float32Array(H.t(s))
for(q=0;q<s;++q)r[q]=($.$get$kx().eD()-0.5)*c
s=a.d
s=new G.d5(s,J.jB(s.a),0,P.J(),a.e.x,null,0,-1,null,null,P.J(),"meshdata:"+t,!1,!0)
s.bi(r)
return s},
fL:function fL(){},
fM:function fM(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
kO:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.M(c)
s=b.d
t.cd(0,s)
r=b.cx
J.ax(b)
q=C.a.gax(e)
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
p.e8(new T.aS(o))
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
a.d6(r,e,d)
e.pop()
for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.N)(s),++l)A.kO(a,s[l],t,d,e)},
db:function db(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
bH:function bH(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fw:function fw(a,b,c,d,e,f,g,h,i,a0,a1){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.a=i
_.b=a0
_.c=a1},
dD:function(a){var t,s
t=C.N.eo(a,0,new A.iB())
s=536870911&t+(C.b.cE(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iB:function iB(){}},T={aS:function aS(a){this.a=a},P:function P(a){this.a=a},ab:function ab(a){this.a=a},w:function w(a){this.a=a},au:function au(a){this.a=a}},Y={
n8:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
t={}
s=document
r=new R.fM(0,0,null,null,null,null)
r.dg(C.k.cI(s,"stats"),"blue","gray")
q=C.k.eF(s,"#webgl-canvas")
p=new G.dS(null,q)
o=(q&&C.o).b3(q,"webgl2",P.aR(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!0,"failIfMajorPerformanceCaveat",!1]))
p.a=o
if(o==null)H.E(P.cg('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+J.ax(J.lt(o))
if($.kQ>0)P.al("I: "+n)
J.lb(o,0,0,0,1)
J.dI(o,2929)
m=B.md(25,10,0,q)
o=new T.P(new Float32Array(H.t(16)))
o.R()
n=new T.P(new Float32Array(H.t(16)))
n.R()
l=new G.fj(m,50,1,0.1,1000,o,n,new T.P(new Float32Array(H.t(16))),P.J(),"perspective",!1,!0)
l.bo()
n=H.C([],[A.bH])
k=new A.fw(null,p,n,17664,0,0,0,0,"main",!1,!0)
k.d=new G.ev(p,null,null,null,null)
k.r=17664
k.r=1280
o=G.kg("blur",p,$.$get$kM(),$.$get$kN())
j=[]
H.d(!0)
C.a.l(n,new A.bH(o,[l],j,"blur",!1,!0))
i=G.kb("blur",$.$get$jO())
h=new Float32Array(H.t(4))
h[3]=0.04
h[2]=0
h[1]=0
h[0]=0
i.Y("uColorAlpha",new T.au(h))
h=new T.w(new Float32Array(H.t(3)))
h.S(-1,-1,0)
g=new T.w(new Float32Array(H.t(3)))
g.S(1,-1,0)
f=new T.w(new Float32Array(H.t(3)))
f.S(1,1,0)
e=new T.w(new Float32Array(H.t(3)))
e.S(-1,1,0)
d=new Float32Array(H.t(2))
d[0]=0
d[1]=0
c=new Float32Array(H.t(2))
c[0]=1
c[1]=0
b=new Float32Array(H.t(2))
b[0]=1
b[1]=1
a=new Float32Array(H.t(2))
a[0]=0
a[1]=1
a0=new T.w(new Float32Array(H.t(3)))
a0.S(0,0,1)
a1=[]
a2=new G.ex(!1,[],[],a1,P.J())
a2.bk("aTexUV")
a2.d3([h,g,f,e])
a2.d1("aTexUV",[new T.ab(d),new T.ab(c),new T.ab(b),new T.ab(a)])
a2.bk("aNormal")
a2.d2("aNormal",[a0,a0,a0,a0])
h=o.d
g=J.jB(h.a)
a3=new G.d5(h,g,4,P.J(),o.e.x,null,0,-1,null,null,P.J(),"meshdata:quad",!1,!0)
a3.bi(G.k4(a1,null))
o=a2.d7()
a3.y=J.j0(h.a)
H.d(a3.ch!=null)
f=a3.ch.length
if(f<768){a3.saK(new Uint8Array(H.io(o)))
a3.Q=5121}else if(f<196608){a3.saK(new Uint16Array(H.io(o)))
a3.Q=5123}else{a3.saK(new Uint32Array(H.io(o)))
a3.Q=5125}J.dH(h.a,g)
o=a3.y
g=a3.cx
h.toString
f=J.v(g)
H.d(!!f.$isku||!!f.$iskv||!!f.$iskw)
J.dG(h.a,34963,o)
J.jA(h.a,34963,g,35048)
G.mz(a2,a3)
o=new Float32Array(H.t(9))
h=new T.P(new Float32Array(H.t(16)))
h.R()
g=new T.P(new Float32Array(H.t(16)))
g.R()
f=new Float32Array(H.t(3))
e=new Float32Array(H.t(3))
d=new Float32Array(H.t(3))
c=new Float32Array(H.t(3))
H.d(!0)
C.a.l(j,new A.db(i,a3,[],new T.aS(o),h,g,new T.w(f),new T.w(e),new T.w(d),new T.w(c),"",!1,!0))
c=G.kg("stars",p,$.$get$kZ(),$.$get$kY())
d=[]
o=c.d
a4=G.kb("stars",$.$get$jN())
a5=s.createElement("canvas")
a5.width=64
a5.height=64
a6=C.o.cH(a5,"2d")
a7=(a6&&C.i).c_(a6,32,32,1,32,32,22);(a7&&C.f).at(a7,0,"gray")
C.f.at(a7,1,"black")
a6.fillStyle=a7
C.i.em(a6,0,0,64,64)
a7=C.i.c_(a6,32,32,1,32,32,6);(a7&&C.f).at(a7,0,"white")
C.f.at(a7,1,"gray")
a6.globalAlpha=0.9
a6.fillStyle=a7
a6.arc(32,32,4,0,6.283185307179586,!1)
a6.fill("nonzero")
s=new G.h0(!1,!1,!1,!0,1,9729,9729)
j=J.le(o.a)
h=new G.eB(a5,"Utils::Particles",j,3553,o,s)
J.c4(o.a,3553,j)
J.lz(o.a,37440,1)
h.df(a5)
s.d8(o,3553)
H.d(J.lu(o.a)===0)
J.c4(o.a,3553,null)
a4.Y("uTexture",h)
a4.Y("uPointSize",1000)
a3=R.mr(c,2000,100)
s=new Float32Array(H.t(9))
o=new T.P(new Float32Array(H.t(16)))
o.R()
j=new T.P(new Float32Array(H.t(16)))
j.R()
h=new Float32Array(H.t(3))
g=new Float32Array(H.t(3))
f=new Float32Array(H.t(3))
e=new Float32Array(H.t(3))
H.d(!0)
C.a.l(d,new A.db(a4,a3,[],new T.aS(s),o,j,new T.w(h),new T.w(g),new T.w(f),new T.w(e),a3.a,!1,!0))
H.d(!0)
C.a.l(n,new A.bH(c,[l],d,"stars",!1,!0))
d=new Y.iN(q,l,k)
d.$1(null)
W.ai(window,"resize",d,!1,W.j)
t.a=0
new Y.iM(t,r,m,k).$1(0)},
iN:function iN(a,b,c){this.a=a
this.b=b
this.c=c},
iM:function iM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}}
var v=[C,H,J,P,W,B,G,R,A,T,Y]
setFunctionNamesIfNecessary(v)
var $={}
H.jb.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gu:function(a){return H.aU(a)},
j:function(a){return H.fr(a)},
gA:function(a){return new H.aD(H.iA(a),null)}}
J.eI.prototype={
j:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gA:function(a){return C.a1},
$isaw:1}
J.eJ.prototype={
v:function(a,b){return null==b},
j:function(a){return"null"},
gu:function(a){return 0},
gA:function(a){return C.W}}
J.bx.prototype={
gu:function(a){return 0},
gA:function(a){return C.V},
j:function(a){return String(a)},
$isk8:1}
J.fl.prototype={}
J.aX.prototype={}
J.aP.prototype={
j:function(a){var t=a[$.$get$jW()]
return t==null?this.cZ(a):J.ax(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isj9:1}
J.aN.prototype={
aU:function(a,b){if(!!a.immutable$list)throw H.e(new P.u(b))},
aT:function(a,b){if(!!a.fixed$length)throw H.e(new P.u(b))},
l:function(a,b){this.aT(a,"add")
a.push(b)},
J:function(a,b){var t,s,r,q,p
t=a.length
this.aT(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.N)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.E(new P.a0(a)))
a.push(q)}},
cc:function(a,b){return new H.by(a,b,[H.aH(a,0),null])},
a4:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
t:function(a,b){return this.h(a,b)},
gen:function(a){if(a.length>0)return a[0]
throw H.e(H.eH())},
gax:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.eH())},
bb:function(a,b,c,d,e){var t,s
this.aU(a,"setRange")
P.kf(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.E(P.aV(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.ma())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
bN:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.a0(a))}return!1},
cU:function(a,b){this.aU(a,"sort")
H.dl(a,0,a.length-1,P.mU())},
bd:function(a){return this.cU(a,null)},
B:function(a,b){var t
for(t=0;t<a.length;++t)if(J.D(a[t],b))return!0
return!1},
j:function(a){return P.eG(a,"[","]")},
gw:function(a){return new J.dN(a,a.length,0,null,[H.aH(a,0)])},
gu:function(a){return H.aU(a)},
gk:function(a){return a.length},
sk:function(a,b){this.aT(a,"set length")
if(b<0)throw H.e(P.aV(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.M(a,b))
if(b>=a.length||b<0)throw H.e(H.M(a,b))
return a[b]},
i:function(a,b,c){this.aU(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.M(a,b))
if(b>=a.length||b<0)throw H.e(H.M(a,b))
a[b]=c},
$ism:1,
$asm:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.ja.prototype={}
J.dN.prototype={
gq:function(){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.N(t))
r=this.c
if(r>=s){this.sbp(null)
return!1}this.sbp(t[r]);++this.c
return!0},
sbp:function(a){this.d=a}}
J.b9.prototype={
O:function(a,b){var t
if(typeof b!=="number")throw H.e(H.S(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gav(b)
if(this.gav(a)===t)return 0
if(this.gav(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gav:function(a){return a===0?1/a<0:a<0},
e3:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.u(""+a+".ceil()"))},
a5:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.u(""+a+".round()"))},
e4:function(a,b,c){if(this.O(b,c)>0)throw H.e(H.S(b))
if(this.O(a,b)<0)return b
if(this.O(a,c)>0)return c
return a},
eQ:function(a,b){var t
if(b>20)throw H.e(P.aV(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gav(a))return"-"+t
return t},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
a0:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a+b},
a8:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a-b},
cF:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a/b},
E:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a*b},
aD:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bJ(a,b)},
G:function(a,b){return(a|0)===a?a/b|0:this.bJ(a,b)},
bJ:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.u("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
aO:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cE:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return(a&b)>>>0},
d0:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return(a^b)>>>0},
aB:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a<b},
am:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a>b},
cG:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a>=b},
gA:function(a){return C.a4},
$isT:1}
J.d1.prototype={
gA:function(a){return C.a3},
$isK:1,
$isn:1,
$isT:1}
J.d0.prototype={
gA:function(a){return C.a2},
$isK:1,
$isT:1}
J.aO.prototype={
aF:function(a,b){if(b>=a.length)throw H.e(H.M(a,b))
return a.charCodeAt(b)},
a0:function(a,b){if(typeof b!=="string")throw H.e(P.jM(b,null,null))
return a+b},
cV:function(a,b,c){var t
if(c>a.length)throw H.e(P.aV(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
be:function(a,b){return this.cV(a,b,0)},
bg:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fs(b,null,null))
if(b>c)throw H.e(P.fs(b,null,null))
if(c>a.length)throw H.e(P.fs(c,null,null))
return a.substring(b,c)},
cW:function(a,b){return this.bg(a,b,null)},
eP:function(a){return a.toLowerCase()},
e6:function(a,b,c){if(c>a.length)throw H.e(P.aV(c,0,a.length,null,null))
return H.ng(a,b,c)},
O:function(a,b){var t
if(typeof b!=="string")throw H.e(H.S(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
j:function(a){return a},
gu:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gA:function(a){return C.X},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.M(a,b))
return a[b]},
$ism:1,
$asm:function(){},
$isr:1}
H.c.prototype={$asc:null}
H.ba.prototype={
gw:function(a){return new H.d3(this,this.gk(this),0,null,[H.ak(this,"ba",0)])},
az:function(a,b){return this.cY(0,b)},
eO:function(a,b){var t,s
t=H.C([],[H.ak(this,"ba",0)])
C.a.sk(t,this.gk(this))
for(s=0;s<this.gk(this);++s)t[s]=this.t(0,s)
return t},
eN:function(a){return this.eO(a,!0)}}
H.d3.prototype={
gq:function(){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.ac(t)
r=s.gk(t)
if(this.b!==r)throw H.e(new P.a0(t))
q=this.c
if(q>=r){this.sab(null)
return!1}this.sab(s.t(t,q));++this.c
return!0},
sab:function(a){this.d=a}}
H.d4.prototype={
gw:function(a){return new H.eS(null,J.bl(this.a),this.b,this.$ti)},
gk:function(a){return J.dJ(this.a)},
$asU:function(a,b){return[b]}}
H.e4.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.eS.prototype={
p:function(){var t=this.b
if(t.p()){this.sab(this.c.$1(t.gq()))
return!0}this.sab(null)
return!1},
gq:function(){return this.a},
sab:function(a){this.a=a},
$asd_:function(a,b){return[b]}}
H.by.prototype={
gk:function(a){return J.dJ(this.a)},
t:function(a,b){return this.b.$1(J.lk(this.a,b))},
$asc:function(a,b){return[b]},
$asba:function(a,b){return[b]},
$asU:function(a,b){return[b]}}
H.du.prototype={
gw:function(a){return new H.hk(J.bl(this.a),this.b,this.$ti)}}
H.hk.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq()))return!0
return!1},
gq:function(){return this.a.gq()}}
H.ch.prototype={}
H.iW.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.iX.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hY.prototype={
sey:function(a){this.z=a},
seB:function(a){this.ch=a}}
H.b0.prototype={
bM:function(a,b){if(!this.f.v(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aR()},
eI:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.aj(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bC();++r.d}this.y=!1}this.aR()},
dV:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eH:function(a){var t,s,r
if(this.ch==null)return
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.E(new P.u("removeRange"))
P.kf(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cR:function(a,b){if(!this.r.v(0,a))return
this.db=b},
er:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.F(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jf(null,null)
this.cx=t}t.T(0,new H.hS(a,c))},
eq:function(a,b){var t
if(!this.r.v(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aw()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jf(null,null)
this.cx=t}t.T(0,this.gez())},
es:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.al(a)
if(b!=null)P.al(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.ax(a)
s[1]=b==null?null:b.j(0)
for(r=new P.bT(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.F(0,s)},
af:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.O(o)
p=H.aG(o)
this.es(q,p)
if(this.db){this.aw()
if(this===u.globalState.e)throw o}}finally{this.cy=H.mQ(r)
u.globalState.d=H.js(t,"$isb0")
if(t!=null)$=t.gex()
if(this.cx!=null)for(;n=this.cx,!n.gai(n);)this.cx.cf().$0()}return s},
cb:function(a){return this.b.h(0,a)},
bt:function(a,b){var t=this.b
if(t.D(0,a))throw H.e(P.cg("Registry: ports must be registered only once."))
t.i(0,a,b)},
aR:function(){var t=this.b
if(t.gk(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.aw()},
aw:function(){var t,s,r
t=this.cx
if(t!=null)t.V(0)
for(t=this.b,s=t.gcB(t),s=s.gw(s);s.p();)s.gq().dv()
t.V(0)
this.c.V(0)
u.globalState.z.aj(0,this.a)
this.dx.V(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].F(0,t[r+1])
this.ch=null}},
gex:function(){return this.d},
ge7:function(){return this.e}}
H.hS.prototype={
$0:function(){this.a.F(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hA.prototype={
ee:function(){var t=this.a
if(t.b===t.c)return
return t.cf()},
ci:function(){var t,s,r
t=this.ee()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.D(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gai(s)}else s=!1
else s=!1
else s=!1
if(s)H.E(P.cg("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gai(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aR(["command","close"])
r=new H.aj(!0,new P.dy(0,null,null,null,null,null,0,[null,P.n])).H(r)
s.toString
self.postMessage(r)}return!1}t.eE()
return!0},
bH:function(){if(self.window!=null)new H.hB(this).$0()
else for(;this.ci(););},
ak:function(){var t,s,r,q,p
if(!u.globalState.x)this.bH()
else try{this.bH()}catch(r){t=H.O(r)
s=H.aG(r)
q=u.globalState.Q
p=P.aR(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.aj(!0,P.bU(null,P.n)).H(p)
q.toString
self.postMessage(p)}}}
H.hB.prototype={
$0:function(){if(!this.a.ci())return
P.mq(C.q,this)},
$S:function(){return{func:1,v:true}}}
H.b1.prototype={
eE:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.af(this.b)}}
H.hX.prototype={}
H.eE.prototype={
$0:function(){H.m6(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eF.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bi(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bi(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aR()},
$S:function(){return{func:1,v:true}}}
H.ht.prototype={}
H.bf.prototype={
F:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mE(b)
if(t.ge7()===s){s=J.ac(r)
switch(s.h(r,0)){case"pause":t.bM(s.h(r,1),s.h(r,2))
break
case"resume":t.eI(s.h(r,1))
break
case"add-ondone":t.dV(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eH(s.h(r,1))
break
case"set-errors-fatal":t.cR(s.h(r,1),s.h(r,2))
break
case"ping":t.er(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eq(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.aj(0,s)
break}return}u.globalState.f.a.T(0,new H.b1(t,new H.hZ(this,r),"receive"))},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bf){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.hZ.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.ds(0,this.b)},
$S:function(){return{func:1}}}
H.bW.prototype={
F:function(a,b){var t,s,r
t=P.aR(["command","message","port",this,"msg",b])
s=new H.aj(!0,P.bU(null,P.n)).H(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bW){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.d0((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bc.prototype={
dv:function(){this.c=!0
this.b=null},
ds:function(a,b){if(this.c)return
this.b.$1(b)},
$isml:1}
H.h2.prototype={
dh:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.T(0,new H.b1(s,new H.h3(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.c_(new H.h4(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.u("Timer greater than 0."))}}}
H.h3.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.h4.prototype={
$0:function(){this.a.c=null
H.iL()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ao.prototype={
gu:function(a){var t=this.a
t=C.b.aO(t,0)^C.b.G(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
v:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ao){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.aj.prototype={
H:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gk(t))
t=J.v(a)
if(!!t.$isbA)return["buffer",a]
if(!!t.$isbb)return["typed",a]
if(!!t.$ism)return this.cN(a)
if(!!t.$ism3){r=this.gcK()
q=t.gC(a)
q=H.jg(q,r,H.ak(q,"U",0),null)
q=P.ka(q,!0,H.ak(q,"U",0))
t=t.gcB(a)
t=H.jg(t,r,H.ak(t,"U",0),null)
return["map",q,P.ka(t,!0,H.ak(t,"U",0))]}if(!!t.$isk8)return this.cO(a)
if(!!t.$isa)this.cz(a)
if(!!t.$isml)this.al(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbf)return this.cP(a)
if(!!t.$isbW)return this.cQ(a)
if(!!t.$isb5){p=a.$static_name
if(p==null)this.al(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isao)return["capability",a.a]
if(!(a instanceof P.o))this.cz(a)
return["dart",u.classIdExtractor(a),this.cM(u.classFieldsExtractor(a))]},
al:function(a,b){throw H.e(new P.u((b==null?"Can't transmit:":b)+" "+H.f(a)))},
cz:function(a){return this.al(a,null)},
cN:function(a){var t
H.d(typeof a!=="string")
t=this.cL(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.al(a,"Can't serialize indexable: ")},
cL:function(a){var t,s
t=[]
C.a.sk(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.H(a[s])
return t},
cM:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.H(a[t]))
return a},
cO:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.al(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sk(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.H(a[t[r]])
return["js-object",t,s]},
cQ:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cP:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b_.prototype={
W:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.jL("Bad serialized message: "+H.f(a)))
switch(C.a.gen(a)){case"ref":H.d(J.D(a[0],"ref"))
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
s=H.C(this.ae(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.D(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.C(this.ae(t),[null])
case"mutable":H.d(J.D(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.ae(t)
case"const":H.d(J.D(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.C(this.ae(t),[null])
s.fixed$length=Array
return s
case"map":return this.eh(a)
case"sendport":return this.ei(a)
case"raw sendport":H.d(J.D(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.eg(a)
case"function":H.d(J.D(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.D(a[0],"capability"))
return new H.ao(a[1])
case"dart":H.d(J.D(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.l(this.b,p)
this.ae(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.f(a))}},
ae:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.W(a[t]))
return a},
eh:function(a){var t,s,r,q,p
H.d(J.D(a[0],"map"))
t=a[1]
s=a[2]
r=P.J()
C.a.l(this.b,r)
t=J.ly(t,this.gef()).eN(0)
for(q=J.ac(s),p=0;p<t.length;++p)r.i(0,t[p],this.W(q.h(s,p)))
return r},
ei:function(a){var t,s,r,q,p,o,n
H.d(J.D(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cb(r)
if(o==null)return
n=new H.bf(o,s)}else n=new H.bW(t,r,s)
C.a.l(this.b,n)
return n},
eg:function(a){var t,s,r,q,p,o
H.d(J.D(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.ac(t),p=J.ac(s),o=0;o<q.gk(t);++o)r[q.h(t,o)]=this.W(p.h(s,o))
return r}}
H.fv.prototype={}
H.h9.prototype={
L:function(a){var t,s,r
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
H.df.prototype={
j:function(a){var t=this.b
if(t==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eL.prototype={
j:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.hc.prototype={
j:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.iY.prototype={
$1:function(a){if(!!J.v(a).$isb8)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dA.prototype={
j:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.iG.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iH.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iI.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iJ.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iK.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.b5.prototype={
j:function(a){return"Closure '"+H.dh(this).trim()+"'"},
$isj9:1,
geT:function(){return this},
$D:null}
H.fX.prototype={}
H.fK.prototype={
j:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bm.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bm))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.aU(this.a)
else s=typeof t!=="object"?J.an(t):H.aU(t)
return(s^H.aU(this.b))>>>0},
j:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.fr(t)}}
H.hb.prototype={
j:function(a){return this.a}}
H.dR.prototype={
j:function(a){return this.a}}
H.fB.prototype={
j:function(a){return"RuntimeError: "+H.f(this.a)}}
H.hn.prototype={
j:function(a){return C.e.a0("Assertion failed: ",P.j8(this.a))}}
H.aD.prototype={
j:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.an(this.a)},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aD){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.af.prototype={
gk:function(a){return this.a},
gai:function(a){return this.a===0},
gC:function(a){return new H.eO(this,[H.aH(this,0)])},
gcB:function(a){return H.jg(this.gC(this),new H.eK(this),H.aH(this,0),H.aH(this,1))},
D:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bz(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bz(s,b)}else return this.eu(b)},
eu:function(a){var t=this.d
if(t==null)return!1
return this.ah(this.ar(t,this.ag(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ac(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ac(r,b)
return s==null?null:s.b}else return this.ev(b)},
ev:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.ar(t,this.ag(a))
r=this.ah(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aL()
this.b=t}this.br(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aL()
this.c=s}this.br(s,b,c)}else{r=this.d
if(r==null){r=this.aL()
this.d=r}q=this.ag(b)
p=this.ar(r,q)
if(p==null)this.aN(r,q,[this.aM(b,c)])
else{o=this.ah(p,b)
if(o>=0)p[o].b=c
else p.push(this.aM(b,c))}}},
aj:function(a,b){if(typeof b==="string")return this.bF(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bF(this.c,b)
else return this.ew(b)},
ew:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.ar(t,this.ag(a))
r=this.ah(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bK(q)
return q.b},
V:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
au:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a0(this))
t=t.c}},
br:function(a,b,c){var t=this.ac(a,b)
if(t==null)this.aN(a,b,this.aM(b,c))
else t.b=c},
bF:function(a,b){var t
if(a==null)return
t=this.ac(a,b)
if(t==null)return
this.bK(t)
this.bA(a,b)
return t.b},
aM:function(a,b){var t,s
t=new H.eN(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bK:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
ag:function(a){return J.an(a)&0x3ffffff},
ah:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.D(a[s].a,b))return s
return-1},
j:function(a){return P.mc(this)},
ac:function(a,b){return a[b]},
ar:function(a,b){return a[b]},
aN:function(a,b,c){H.d(c!=null)
a[b]=c},
bA:function(a,b){delete a[b]},
bz:function(a,b){return this.ac(a,b)!=null},
aL:function(){var t=Object.create(null)
this.aN(t,"<non-identifier-key>",t)
this.bA(t,"<non-identifier-key>")
return t},
$ism3:1}
H.eK.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.eN.prototype={}
H.eO.prototype={
gk:function(a){return this.a.a},
gw:function(a){var t,s
t=this.a
s=new H.eP(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eP.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a0(t))
else{t=this.c
if(t==null){this.sbq(null)
return!1}else{this.sbq(t.a)
this.c=this.c.c
return!0}}},
sbq:function(a){this.d=a}}
H.iC.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.iD.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.r]}}}
H.iE.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.r]}}}
H.bA.prototype={
gA:function(a){return C.O},
$isbA:1}
H.bb.prototype={$isbb:1}
H.f0.prototype={
gA:function(a){return C.P}}
H.d7.prototype={
gk:function(a){return a.length},
$ism:1,
$asm:function(){},
$isp:1,
$asp:function(){}}
H.d8.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.M(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.M(a,b))
a[b]=c}}
H.d9.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.M(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.d6.prototype={
gA:function(a){return C.Q},
$isc:1,
$asc:function(){return[P.K]},
$isb:1,
$asb:function(){return[P.K]},
$ises:1}
H.f1.prototype={
gA:function(a){return C.R},
$isc:1,
$asc:function(){return[P.K]},
$isb:1,
$asb:function(){return[P.K]}}
H.f2.prototype={
gA:function(a){return C.S},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.f3.prototype={
gA:function(a){return C.T},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$isk5:1}
H.f4.prototype={
gA:function(a){return C.U},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.f5.prototype={
gA:function(a){return C.Y},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$isku:1}
H.f6.prototype={
gA:function(a){return C.Z},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$iskv:1}
H.da.prototype={
gA:function(a){return C.a_},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.f7.prototype={
gA:function(a){return C.a0},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$iskw:1}
H.bB.prototype={
$asm:function(){},
$isc:1,
$asc:function(){return[P.n]},
$asp:function(){},
$isb:1,
$asb:function(){return[P.n]}}
H.bC.prototype={
$asm:function(){},
$isc:1,
$asc:function(){return[P.K]},
$asp:function(){},
$isb:1,
$asb:function(){return[P.K]}}
H.bD.prototype={
$asm:function(){},
$asc:function(){return[P.K]},
$asp:function(){},
$asb:function(){return[P.K]}}
H.bE.prototype={
$asm:function(){},
$asc:function(){return[P.n]},
$asp:function(){},
$asb:function(){return[P.n]}}
P.hp.prototype={
$1:function(a){var t,s
H.iL()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.ho.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hq.prototype={
$0:function(){H.iL()
this.a.$0()},
$S:function(){return{func:1}}}
P.hr.prototype={
$0:function(){H.iL()
this.a.$0()},
$S:function(){return{func:1}}}
P.hv.prototype={}
P.ie.prototype={
e5:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.aC("Future already completed"))
t.aH(b)}}
P.dx.prototype={
eC:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.b0(this.d,a.a)},
ep:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bi(s,{func:1,args:[P.o,P.bJ]}))return t.eJ(s,a.a,a.b)
else return t.b0(s,a.a)}}
P.av.prototype={
cn:function(a,b){var t,s,r
t=$.B
if(t!==C.d){t.toString
if(b!=null)b=P.mI(b,t)}s=new P.av(0,t,null,[null])
r=b==null?1:3
this.bs(new P.dx(null,s,r,a,b,[H.aH(this,0),null]))
return s},
cm:function(a){return this.cn(a,null)},
bv:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
bs:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.js(this.c,"$isdx")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.bs(a)
return}this.bv(t)}H.d(this.a>=4)
t=this.b
t.toString
P.ir(null,null,t,new P.hG(this,a))}},
bE:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.bE(a)
return}this.bv(s)}H.d(this.a>=4)
t.a=this.ad(a)
s=this.b
s.toString
P.ir(null,null,s,new P.hK(t,this))}},
bG:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.ad(t)},
ad:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aH:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.is(a,"$isew",t,"$asew"))if(H.is(a,"$isav",t,null))P.kz(a,this)
else P.my(a,this)
else{s=this.bG()
H.d(this.a<4)
this.a=4
this.c=a
P.bQ(this,s)}},
ao:function(a,b){var t
H.d(this.a<4)
t=this.bG()
H.d(this.a<4)
this.a=8
this.c=new P.b4(a,b)
P.bQ(this,t)},
dz:function(a){return this.ao(a,null)},
$isew:1,
gaP:function(){return this.a},
gdP:function(){return this.c}}
P.hG.prototype={
$0:function(){P.bQ(this.a,this.b)},
$S:function(){return{func:1}}}
P.hK.prototype={
$0:function(){P.bQ(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hH.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.aH(a)},
$S:function(){return{func:1,args:[,]}}}
P.hI.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.ao(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hJ.prototype={
$0:function(){this.a.ao(this.b,this.c)},
$S:function(){return{func:1}}}
P.hN.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.cg(q.d)}catch(n){s=H.O(n)
r=H.aG(n)
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
return}if(!!J.v(t).$isew){if(t instanceof P.av&&t.gaP()>=4){if(t.gaP()===8){q=t
H.d(q.gaP()===8)
p=this.b
p.b=q.gdP()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.cm(new P.hO(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hO.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.hM.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.b0(r.d,this.c)}catch(q){t=H.O(q)
s=H.aG(q)
r=this.a
r.b=new P.b4(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hL.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.eC(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.ep(t)
p.a=!1}}catch(o){s=H.O(o)
r=H.aG(o)
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
P.fO.prototype={
gk:function(a){var t,s
t={}
s=new P.av(0,$.B,null,[P.n])
t.a=0
this.eA(new P.fQ(t),!0,new P.fR(t,s),s.gdw())
return s}}
P.fQ.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.fR.prototype={
$0:function(){this.b.aH(this.a.a)},
$S:function(){return{func:1}}}
P.fP.prototype={}
P.b4.prototype={
j:function(a){return H.f(this.a)},
$isb8:1}
P.im.prototype={}
P.iq.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.dg()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.j(0)
throw r},
$S:function(){return{func:1}}}
P.i0.prototype={
eK:function(a){var t,s,r
try{if(C.d===$.B){a.$0()
return}P.kE(null,null,this,a)}catch(r){t=H.O(r)
s=H.aG(r)
P.ip(null,null,this,t,s)}},
eL:function(a,b){var t,s,r
try{if(C.d===$.B){a.$1(b)
return}P.kF(null,null,this,a,b)}catch(r){t=H.O(r)
s=H.aG(r)
P.ip(null,null,this,t,s)}},
e0:function(a){return new P.i2(this,a)},
aS:function(a){return new P.i1(this,a)},
e1:function(a){return new P.i3(this,a)},
h:function(a,b){return},
cg:function(a){if($.B===C.d)return a.$0()
return P.kE(null,null,this,a)},
b0:function(a,b){if($.B===C.d)return a.$1(b)
return P.kF(null,null,this,a,b)},
eJ:function(a,b,c){if($.B===C.d)return a.$2(b,c)
return P.mJ(null,null,this,a,b,c)}}
P.i2.prototype={
$0:function(){return this.a.cg(this.b)},
$S:function(){return{func:1}}}
P.i1.prototype={
$0:function(){return this.a.eK(this.b)},
$S:function(){return{func:1}}}
P.i3.prototype={
$1:function(a){return this.a.eL(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dy.prototype={
ag:function(a){return H.na(a)&0x3ffffff},
ah:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hU.prototype={
gw:function(a){var t=new P.bT(this,this.r,null,null,[null])
t.c=this.e
return t},
gk:function(a){return this.a},
B:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dA(b)},
dA:function(a){var t=this.d
if(t==null)return!1
return this.aq(t[this.ap(a)],a)>=0},
cb:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.B(0,a)?a:null
else return this.dJ(a)},
dJ:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ap(a)]
r=this.aq(s,a)
if(r<0)return
return J.bj(s,r).gdC()},
l:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bw(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bw(r,b)}else return this.T(0,b)},
T:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.mC()
this.d=t}s=this.ap(b)
r=t[s]
if(r==null){q=[this.aG(b)]
H.d(q!=null)
t[s]=q}else{if(this.aq(r,b)>=0)return!1
r.push(this.aG(b))}return!0},
aj:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bx(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bx(this.c,b)
else return this.dK(0,b)},
dK:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ap(b)]
r=this.aq(s,b)
if(r<0)return!1
this.by(s.splice(r,1)[0])
return!0},
V:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bw:function(a,b){var t
if(a[b]!=null)return!1
t=this.aG(b)
H.d(!0)
a[b]=t
return!0},
bx:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.by(t)
delete a[b]
return!0},
aG:function(a){var t,s
t=new P.hV(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
by:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
ap:function(a){return J.an(a)&0x3ffffff},
aq:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.D(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.hV.prototype={
gdC:function(){return this.a}}
P.bT.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a0(t))
else{t=this.c
if(t==null){this.saa(null)
return!1}else{this.saa(t.a)
this.c=this.c.b
return!0}}},
saa:function(a){this.d=a}}
P.hR.prototype={}
P.d2.prototype={}
P.x.prototype={
gw:function(a){return new H.d3(a,this.gk(a),0,null,[H.ak(a,"x",0)])},
t:function(a,b){return this.h(a,b)},
cc:function(a,b){return new H.by(a,b,[H.ak(a,"x",0),null])},
eo:function(a,b,c){var t,s,r
t=this.gk(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gk(a))throw H.e(new P.a0(a))}return s},
j:function(a){return P.eG(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.eT.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.f(a)
t.a=s+": "
t.a+=H.f(b)},
$S:function(){return{func:1,args:[,,]}}}
P.eQ.prototype={
gw:function(a){return new P.hW(this,this.c,this.d,this.b,null,this.$ti)},
gai:function(a){return this.b===this.c},
gk:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t=(this.c-this.b&this.a.length-1)>>>0
if(C.b.am(0,b)||b>=t)H.E(P.A(b,this,"index",null,t))
return this.a[(C.b.a0(this.b,b)&this.a.length-1)>>>0]},
V:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
j:function(a){return P.eG(this,"{","}")},
cf:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.eH());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
T:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bC();++this.d},
bC:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.C(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bb(s,0,q,t,r)
C.a.bb(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbI(s)},
d9:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbI(H.C(t,[b]))},
sbI:function(a){this.a=a},
$asc:null}
P.hW.prototype={
gq:function(){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.E(new P.a0(t))
s=this.d
if(s===this.b){this.saa(null)
return!1}this.saa(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
saa:function(a){this.e=a}}
P.fE.prototype={
J:function(a,b){var t
for(t=J.bl(b);t.p();)this.l(0,t.gq())},
j:function(a){return P.eG(this,"{","}")},
$isc:1,
$asc:null}
P.fD.prototype={}
P.bG.prototype={$isc:1,$asc:null,$isb:1,$asb:null}
P.aw.prototype={}
P.G.prototype={}
P.b7.prototype={
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.b7))return!1
return this.a===b.a&&this.b===b.b},
O:function(a,b){return C.b.O(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aO(t,30))&1073741823},
j:function(a){var t,s,r,q,p,o,n
t=P.lU(H.mk(this))
s=P.ca(H.mi(this))
r=P.ca(H.me(this))
q=P.ca(H.mf(this))
p=P.ca(H.mh(this))
o=P.ca(H.mj(this))
n=P.lV(H.mg(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isG:1,
$asG:function(){return[P.b7]}}
P.K.prototype={$isG:1,
$asG:function(){return[P.T]}}
P.ay.prototype={
aB:function(a,b){return C.b.aB(this.a,b.gdB())},
am:function(a,b){return C.b.am(this.a,b.gdB())},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.ay))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
O:function(a,b){return C.b.O(this.a,b.a)},
j:function(a){var t,s,r,q,p
t=new P.e3()
s=this.a
if(s<0)return"-"+new P.ay(0-s).j(0)
r=t.$1(C.b.G(s,6e7)%60)
q=t.$1(C.b.G(s,1e6)%60)
p=new P.e2().$1(s%1e6)
return""+C.b.G(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isG:1,
$asG:function(){return[P.ay]}}
P.e2.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.r,args:[P.n]}}}
P.e3.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.r,args:[P.n]}}}
P.b8.prototype={}
P.c5.prototype={
j:function(a){return"Assertion failed"}}
P.dg.prototype={
j:function(a){return"Throw of null."}}
P.ad.prototype={
gaJ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaI:function(){return""},
j:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.f(t)
q=this.gaJ()+s+r
if(!this.a)return q
p=this.gaI()
o=P.j8(this.b)
return q+p+": "+H.f(o)}}
P.dj.prototype={
gaJ:function(){return"RangeError"},
gaI:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.eC.prototype={
gaJ:function(){return"RangeError"},
gaI:function(){H.d(this.a)
if(J.l3(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gk:function(a){return this.f}}
P.u.prototype={
j:function(a){return"Unsupported operation: "+this.a}}
P.dt.prototype={
j:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aC.prototype={
j:function(a){return"Bad state: "+this.a}}
P.a0.prototype={
j:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.j8(t))+"."}}
P.dm.prototype={
j:function(a){return"Stack Overflow"},
$isb8:1}
P.dV.prototype={
j:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hF.prototype={
j:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.e5.prototype={
j:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.E(P.jM(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kc(b,"expando$values")
return s==null?null:H.kc(s,t)}}
P.n.prototype={$isG:1,
$asG:function(){return[P.T]}}
P.U.prototype={
az:function(a,b){return new H.du(this,b,[H.ak(this,"U",0)])},
gk:function(a){var t,s
H.d(!this.$isc)
t=this.gw(this)
for(s=0;t.p();)++s
return s},
ga1:function(a){var t,s
t=this.gw(this)
if(!t.p())throw H.e(H.eH())
s=t.gq()
if(t.p())throw H.e(H.mb())
return s},
t:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.lN("index"))
if(b<0)H.E(P.aV(b,0,null,"index",null))
for(t=this.gw(this),s=0;t.p();){r=t.gq()
if(b===s)return r;++s}throw H.e(P.A(b,this,"index",null,s))},
j:function(a){return P.m9(this,"(",")")}}
P.d_.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.aB.prototype={}
P.aT.prototype={
gu:function(a){return P.o.prototype.gu.call(this,this)},
j:function(a){return"null"}}
P.T.prototype={$isG:1,
$asG:function(){return[P.T]}}
P.o.prototype={constructor:P.o,$iso:1,
v:function(a,b){return this===b},
gu:function(a){return H.aU(this)},
j:function(a){return H.fr(this)},
gA:function(a){return new H.aD(H.iA(this),null)},
toString:function(){return this.j(this)}}
P.bJ.prototype={}
P.r.prototype={$isG:1,
$asG:function(){return[P.r]}}
P.bK.prototype={
gk:function(a){return this.a.length},
j:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga2:function(){return this.a}}
W.l.prototype={}
W.dL.prototype={
j:function(a){return String(a)},
$isa:1}
W.dM.prototype={
j:function(a){return String(a)},
$isa:1}
W.a_.prototype={$iso:1}
W.dP.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]},
$isp:1,
$asp:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.c6.prototype={}
W.aL.prototype={$isa:1,$isaL:1}
W.c7.prototype={
b3:function(a,b,c){if(c!=null)return this.dE(a,b,P.mT(c,null))
return this.dF(a,b)},
cH:function(a,b){return this.b3(a,b,null)},
dE:function(a,b,c){return a.getContext(b,c)},
dF:function(a,b){return a.getContext(b)}}
W.c8.prototype={
at:function(a,b,c){return a.addColorStop(b,c)}}
W.c9.prototype={
c_:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
em:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
aA:function(a){return P.iv(a.getContextAttributes())}}
W.aM.prototype={$isa:1,
gk:function(a){return a.length}}
W.dT.prototype={$isa:1}
W.y.prototype={$iso:1}
W.b6.prototype={
bu:function(a,b){var t,s
t=$.$get$jV()
s=t[b]
if(typeof s==="string")return s
s=this.dS(a,b)
t[b]=s
return s},
dS:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.lW()+b
if(t in a)return t
return b},
gk:function(a){return a.length}}
W.dU.prototype={}
W.dW.prototype={
h:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.dX.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.cb.prototype={}
W.bn.prototype={
dW:function(a,b){return a.adoptNode(b)},
cI:function(a,b){return a.getElementById(b)},
eF:function(a,b){return a.querySelector(b)}}
W.cc.prototype={$isa:1}
W.dY.prototype={
j:function(a){return String(a)}}
W.cd.prototype={
eb:function(a,b){return a.createHTMLDocument(b)}}
W.dZ.prototype={
gay:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.ce.prototype={
gay:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.cf.prototype={
j:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.ga_(a))+" x "+H.f(this.gZ(a))},
v:function(a,b){var t
if(b==null)return!1
t=J.v(b)
if(!t.$isH)return!1
return a.left===t.gaW(b)&&a.top===t.gb2(b)&&this.ga_(a)===t.ga_(b)&&this.gZ(a)===t.gZ(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga_(a)
q=this.gZ(a)
return W.kC(W.b2(W.b2(W.b2(W.b2(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gZ:function(a){return a.height},
gaW:function(a){return a.left},
gb2:function(a){return a.top},
ga_:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isH:1,
$asH:function(){}}
W.e_.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]},
$isp:1,
$asp:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
W.e0.prototype={
gk:function(a){return a.length}}
W.a1.prototype={
gdZ:function(a){return new W.hz(a)},
j:function(a){return a.localName},
K:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.k2
if(t==null){t=H.C([],[W.dd])
s=new W.de(t)
C.a.l(t,W.kA(null))
C.a.l(t,W.kD())
$.k2=s
d=s}else d=t
t=$.k1
if(t==null){t=new W.dB(d)
$.k1=t
c=t}else{t.a=d
c=t}}if($.az==null){t=document
s=t.implementation
s=(s&&C.A).eb(s,"")
$.az=s
$.j7=s.createRange()
s=$.az
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.az.head;(t&&C.B).N(t,r)}t=$.az
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.js(s,"$isaL")}t=$.az
if(!!this.$isaL)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.az.body;(t&&C.h).N(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.B(C.L,a.tagName)){t=$.j7;(t&&C.x).cJ(t,q)
t=$.j7
p=(t&&C.x).e9(t,b)}else{q.innerHTML=b
p=$.az.createDocumentFragment()
for(t=J.k(p);s=q.firstChild,s!=null;)t.N(p,s)}t=$.az.body
if(q==null?t!=null:q!==t)J.lA(q)
c.ba(p)
C.k.dW(document,p)
return p},
ea:function(a,b,c){return this.K(a,b,c,null)},
cT:function(a,b,c,d){a.textContent=null
this.N(a,this.K(a,b,c,d))},
cS:function(a,b){return this.cT(a,b,null,null)},
a6:function(a,b){return a.getAttribute(b)},
dL:function(a,b){return a.removeAttribute(b)},
$isa:1,
$iso:1,
$isa1:1,
$ish:1,
$isq:1,
geM:function(a){return a.tagName}}
W.it.prototype={
$1:function(a){return!!J.v(a).$isa1},
$S:function(){return{func:1,args:[,]}}}
W.j.prototype={$iso:1,$isj:1}
W.h.prototype={
dt:function(a,b,c,d){return a.addEventListener(b,H.c_(c,1),!1)},
$iso:1,
$ish:1}
W.a2.prototype={$iso:1}
W.ep.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]},
$isp:1,
$asp:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.eq.prototype={
gk:function(a){return a.length}}
W.eu.prototype={
gk:function(a){return a.length}}
W.a3.prototype={$iso:1}
W.cj.prototype={}
W.ey.prototype={
gk:function(a){return a.length}}
W.bv.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.q]},
$isc:1,
$asc:function(){return[W.q]},
$isp:1,
$asp:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.ck.prototype={}
W.ez.prototype={
F:function(a,b){return a.send(b)}}
W.bw.prototype={}
W.eD.prototype={$isa:1,$isa1:1}
W.aQ.prototype={$iso:1,$isj:1,$isaQ:1}
W.eR.prototype={
j:function(a){return String(a)}}
W.eX.prototype={
gk:function(a){return a.length}}
W.eY.prototype={
eU:function(a,b,c){return a.send(b,c)},
F:function(a,b){return a.send(b)}}
W.bz.prototype={}
W.a4.prototype={$iso:1}
W.eZ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]},
$isp:1,
$asp:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.L.prototype={$iso:1,$isj:1,$isL:1}
W.f8.prototype={$isa:1}
W.R.prototype={
ga1:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.aC("No elements"))
if(s>1)throw H.e(new P.aC("More than one element"))
return t.firstChild},
J:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.k(s),p=0;p<r;++p)q.N(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.l5(t,c,C.v.h(t.childNodes,b))},
gw:function(a){var t=this.a.childNodes
return new W.ci(t,t.length,-1,null,[H.ak(t,"z",0)])},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){return C.v.h(this.a.childNodes,b)},
$asc:function(){return[W.q]},
$asd2:function(){return[W.q]},
$asb:function(){return[W.q]},
$asbG:function(){return[W.q]}}
W.q.prototype={
eG:function(a){var t=a.parentNode
if(t!=null)J.bk(t,a)},
j:function(a){var t=a.nodeValue
return t==null?this.cX(a):t},
N:function(a,b){return a.appendChild(b)},
dM:function(a,b){return a.removeChild(b)},
dN:function(a,b,c){return a.replaceChild(b,c)},
$iso:1,
$ish:1,
$isq:1,
gaZ:function(a){return a.previousSibling}}
W.dc.prototype={
b_:function(a){return a.previousNode()}}
W.bF.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.q]},
$isc:1,
$asc:function(){return[W.q]},
$isp:1,
$asp:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.fh.prototype={$isa:1}
W.fk.prototype={
gk:function(a){return a.length}}
W.a5.prototype={$iso:1,
gk:function(a){return a.length}}
W.fm.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]},
$isp:1,
$asp:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.fp.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fq.prototype={
F:function(a,b){return a.send(b)}}
W.di.prototype={
e9:function(a,b){return a.createContextualFragment(b)},
cJ:function(a,b){return a.selectNodeContents(b)}}
W.fA.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.dk.prototype={
F:function(a,b){return a.send(b)}}
W.fC.prototype={
gk:function(a){return a.length}}
W.fF.prototype={$isa:1}
W.a6.prototype={$iso:1,$ish:1}
W.fG.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]},
$isp:1,
$asp:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.a7.prototype={$iso:1}
W.fI.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]},
$isp:1,
$asp:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.a8.prototype={$iso:1,
gk:function(a){return a.length}}
W.fN.prototype={
h:function(a,b){return this.bB(a,b)},
au:function(a,b){var t,s
for(t=0;!0;++t){s=this.dI(a,t)
if(s==null)return
b.$2(s,this.bB(a,s))}},
gk:function(a){return a.length},
bB:function(a,b){return a.getItem(b)},
dI:function(a,b){return a.key(b)}}
W.V.prototype={$iso:1}
W.ah.prototype={}
W.dn.prototype={
K:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aC(a,b,c,d)
t=W.lY("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.R(s).J(0,new W.R(t))
return s}}
W.fV.prototype={
K:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aC(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.y.K(t.createElement("table"),b,c,d)
t.toString
t=new W.R(t)
r=t.ga1(t)
r.toString
t=new W.R(r)
q=t.ga1(t)
s.toString
q.toString
new W.R(s).J(0,new W.R(q))
return s}}
W.fW.prototype={
K:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aC(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.y.K(t.createElement("table"),b,c,d)
t.toString
t=new W.R(t)
r=t.ga1(t)
s.toString
r.toString
new W.R(s).J(0,new W.R(r))
return s}}
W.bL.prototype={$isbL:1}
W.a9.prototype={$iso:1,$ish:1}
W.W.prototype={$iso:1,$ish:1}
W.fZ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.W]},
$isc:1,
$asc:function(){return[W.W]},
$isp:1,
$asp:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.h_.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]},
$isp:1,
$asp:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.h1.prototype={
gk:function(a){return a.length}}
W.aa.prototype={$iso:1}
W.aW.prototype={$iso:1,$isj:1,$isaW:1}
W.h5.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]},
$isp:1,
$asp:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.h6.prototype={
gk:function(a){return a.length}}
W.be.prototype={}
W.h8.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.dr.prototype={
b_:function(a){return a.previousNode()}}
W.aE.prototype={}
W.hd.prototype={
j:function(a){return String(a)},
$isa:1}
W.hf.prototype={
gk:function(a){return a.length}}
W.hi.prototype={
gk:function(a){return a.length}}
W.hj.prototype={
F:function(a,b){return a.send(b)}}
W.aY.prototype={
ged:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.u("deltaY is not supported"))},
$iso:1,
$isj:1,
$isL:1,
$isaY:1}
W.bP.prototype={
gdY:function(a){var t,s
t=P.T
s=new P.av(0,$.B,null,[t])
this.dD(a)
this.dO(a,W.kH(new W.hl(new P.ie(s,[t]))))
return s},
dO:function(a,b){return a.requestAnimationFrame(H.c_(b,1))},
dD:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.hl.prototype={
$1:function(a){this.a.e5(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hm.prototype={$isa:1}
W.aZ.prototype={$isa:1}
W.hu.prototype={
j:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
v:function(a,b){var t,s,r
if(b==null)return!1
t=J.v(b)
if(!t.$isH)return!1
s=a.left
r=t.gaW(b)
if(s==null?r==null:s===r){s=a.top
r=t.gb2(b)
if(s==null?r==null:s===r){s=a.width
r=t.ga_(b)
if(s==null?r==null:s===r){s=a.height
t=t.gZ(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){var t,s,r,q
t=J.an(a.left)
s=J.an(a.top)
r=J.an(a.width)
q=J.an(a.height)
return W.kC(W.b2(W.b2(W.b2(W.b2(0,t),s),r),q))},
$isH:1,
$asH:function(){},
gZ:function(a){return a.height},
gaW:function(a){return a.left},
gb2:function(a){return a.top},
ga_:function(a){return a.width}}
W.dw.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[P.H]},
$isc:1,
$asc:function(){return[P.H]},
$isp:1,
$asp:function(){return[P.H]},
$isb:1,
$asb:function(){return[P.H]}}
W.hw.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.y]},
$isc:1,
$asc:function(){return[W.y]},
$isp:1,
$asp:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.hx.prototype={$isa:1}
W.hy.prototype={
gZ:function(a){return a.height},
ga_:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hP.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]},
$isp:1,
$asp:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.hQ.prototype={$isa:1}
W.dz.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.q]},
$isc:1,
$asc:function(){return[W.q]},
$isp:1,
$asp:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.i8.prototype={$isa:1}
W.ib.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]},
$isp:1,
$asp:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.ic.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.V]},
$isc:1,
$asc:function(){return[W.V]},
$isp:1,
$asp:function(){return[W.V]},
$isb:1,
$asb:function(){return[W.V]}}
W.ik.prototype={$isa:1}
W.il.prototype={$isa:1}
W.hs.prototype={
au:function(a,b){var t,s,r,q,p,o
for(t=this.gC(this),s=t.length,r=this.a,q=J.k(r),p=0;p<t.length;t.length===s||(0,H.N)(t),++p){o=t[p]
b.$2(o,q.a6(r,o))}},
gC:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.C([],[P.r])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
gdG:function(){return this.a}}
W.hz.prototype={
h:function(a,b){return J.j4(this.a,b)},
gk:function(a){return this.gC(this).length}}
W.hC.prototype={
eA:function(a,b,c,d){return W.ai(this.a,this.b,a,!1,H.aH(this,0))}}
W.jk.prototype={}
W.hD.prototype={
dU:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.l4(r,this.c,t,!1)}},
dm:function(a,b,c,d,e){this.dU()}}
W.hE.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bS.prototype={
a3:function(a){return $.$get$kB().B(0,W.bo(a))},
U:function(a,b,c){var t,s,r
t=W.bo(a)
s=$.$get$jl()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dn:function(a){var t,s
t=$.$get$jl()
if(t.gai(t)){for(s=0;s<262;++s)t.i(0,C.K[s],W.n_())
for(s=0;s<12;++s)t.i(0,C.m[s],W.n0())}}}
W.z.prototype={
gw:function(a){return new W.ci(a,this.gk(a),-1,null,[H.ak(a,"z",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.de.prototype={
a3:function(a){return C.a.bN(this.a,new W.fa(a))},
U:function(a,b,c){return C.a.bN(this.a,new W.f9(a,b,c))}}
W.fa.prototype={
$1:function(a){return a.a3(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.f9.prototype={
$1:function(a){return a.U(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.bV.prototype={
a3:function(a){return this.a.B(0,W.bo(a))},
U:function(a,b,c){var t,s
t=W.bo(a)
s=this.c
if(s.B(0,H.f(t)+"::"+b))return this.d.dX(c)
else if(s.B(0,"*::"+b))return this.d.dX(c)
else{s=this.b
if(s.B(0,H.f(t)+"::"+b))return!0
else if(s.B(0,"*::"+b))return!0
else if(s.B(0,H.f(t)+"::*"))return!0
else if(s.B(0,"*::*"))return!0}return!1},
dr:function(a,b,c,d){var t,s,r
this.a.J(0,c)
t=b.az(0,new W.i9())
s=b.az(0,new W.ia())
this.b.J(0,t)
r=this.c
r.J(0,C.M)
r.J(0,s)}}
W.i9.prototype={
$1:function(a){return!C.a.B(C.m,a)},
$S:function(){return{func:1,args:[,]}}}
W.ia.prototype={
$1:function(a){return C.a.B(C.m,a)},
$S:function(){return{func:1,args:[,]}}}
W.ig.prototype={
U:function(a,b,c){if(this.d_(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.j4(a,"template")==="")return this.e.B(0,b)
return!1}}
W.ih.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.id.prototype={
a3:function(a){var t=J.v(a)
if(!!t.$isbI)return!1
t=!!t.$isF
if(t&&W.bo(a)==="foreignObject")return!1
if(t)return!0
return!1},
U:function(a,b,c){if(b==="is"||C.e.be(b,"on"))return!1
return this.a3(a)}}
W.ci.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbD(J.bj(this.a,t))
this.c=t
return!0}this.sbD(null)
this.c=s
return!1},
gq:function(){return this.d},
sbD:function(a){this.d=a}}
W.dd.prototype={}
W.i7.prototype={}
W.dB.prototype={
ba:function(a){new W.ii(this).$2(a,null)},
as:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bk(t,a)}else J.bk(b,a)},
dR:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lo(a)
r=J.j4(s.gdG(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.O(n)}p="element unprintable"
try{p=J.ax(a)}catch(n){H.O(n)}try{o=W.bo(a)
this.dQ(a,b,t,p,o,s,r)}catch(n){if(H.O(n) instanceof P.ad)throw n
else{this.as(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
dQ:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.as(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a3(a)){this.as(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.ax(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.U(a,"is",g)){this.as(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gC(f)
s=H.C(t.slice(0),[H.aH(t,0)])
for(r=f.gC(f).length-1,t=f.a,q=J.k(t);r>=0;--r){p=s[r]
if(!this.a.U(a,J.lF(p),q.a6(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.a6(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.a6(t,p)
q.dL(t,p)}}if(!!J.v(a).$isbL)this.ba(a.content)}}
W.ii.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.dR(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bk(r,a)}else J.bk(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lp(t)}catch(q){H.O(q)
r=t
J.bk(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.q,W.q]}}}
W.bp.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.bq.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.br.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.bs.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.bt.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.bu.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.cl.prototype={}
W.cF.prototype={$isc:1,
$asc:function(){return[P.H]},
$isb:1,
$asb:function(){return[P.H]}}
W.cr.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cy.prototype={$isc:1,
$asc:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.cz.prototype={$isc:1,
$asc:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.cA.prototype={$isc:1,
$asc:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.cB.prototype={$isc:1,
$asc:function(){return[W.V]},
$isb:1,
$asb:function(){return[W.V]}}
W.cC.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.cD.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.cE.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cp.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.cq.prototype={$isc:1,
$asc:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.cs.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cu.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cv.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.cw.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
W.cG.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cH.prototype={$isc:1,
$asc:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.cS.prototype={$isc:1,
$asc:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.cT.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cR.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cW.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.cX.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.cY.prototype={$isc:1,
$asc:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.cZ.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
W.cJ.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.cL.prototype={$isc:1,
$asc:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.cN.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.cP.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cU.prototype={$isc:1,
$asc:function(){return[P.H]},
$isb:1,
$asb:function(){return[P.H]}}
W.cV.prototype={$isc:1,
$asc:function(){return[W.V]},
$isb:1,
$asb:function(){return[W.V]}}
P.iu.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.r,,]}}}
P.hT.prototype={
eD:function(){return Math.random()}}
P.i_.prototype={}
P.H.prototype={$asH:null}
P.dK.prototype={$isa:1}
P.aK.prototype={$isa:1}
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
P.eh.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ei.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ej.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
P.ek.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.el.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
P.em.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.en.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.er.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.et.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ae.prototype={}
P.aA.prototype={$isa:1}
P.eA.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ap.prototype={$iso:1}
P.eM.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ap]},
$isb:1,
$asb:function(){return[P.ap]}}
P.eU.prototype={$isa:1}
P.eV.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.aq.prototype={$iso:1}
P.fb.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.aq]},
$isb:1,
$asb:function(){return[P.aq]}}
P.fi.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fn.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fo.prototype={
gk:function(a){return a.length}}
P.ft.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fu.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bI.prototype={$isa:1,$isbI:1}
P.fS.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
P.F.prototype={
K:function(a,b,c,d){var t,s,r,q,p,o
t=H.C([],[W.dd])
C.a.l(t,W.kA(null))
C.a.l(t,W.kD())
C.a.l(t,new W.id())
c=new W.dB(new W.de(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.h).ea(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.R(q)
o=t.ga1(t)
for(t=J.k(p);r=o.firstChild,r!=null;)t.N(p,r)
return p},
$isa:1,
$isF:1}
P.fT.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fU.prototype={$isa:1}
P.dp.prototype={}
P.fY.prototype={$isa:1}
P.bM.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ar.prototype={$iso:1}
P.h7.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.he.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hg.prototype={$isa:1}
P.hh.prototype={$isa:1}
P.bR.prototype={$isa:1}
P.i4.prototype={$isa:1}
P.i5.prototype={$isa:1}
P.i6.prototype={$isa:1}
P.co.prototype={$isc:1,
$asc:function(){return[P.ap]},
$isb:1,
$asb:function(){return[P.ap]}}
P.cm.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
P.ct.prototype={$isc:1,
$asc:function(){return[P.aq]},
$isb:1,
$asb:function(){return[P.aq]}}
P.cx.prototype={$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.cI.prototype={$isc:1,
$asc:function(){return[P.ap]},
$isb:1,
$asb:function(){return[P.ap]}}
P.cQ.prototype={$isc:1,
$asc:function(){return[P.aq]},
$isb:1,
$asb:function(){return[P.aq]}}
P.cM.prototype={$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.cO.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
P.dO.prototype={
gk:function(a){return a.length}}
P.fy.prototype={
bL:function(a,b){return a.activeTexture(b)},
bO:function(a,b,c){return a.attachShader(b,c)},
bP:function(a,b,c){return a.bindBuffer(b,c)},
bQ:function(a,b,c){return a.bindFramebuffer(b,c)},
bR:function(a,b,c){return a.bindTexture(b,c)},
bS:function(a,b){return a.blendEquation(b)},
bT:function(a,b,c){return a.blendFunc(b,c)},
bU:function(a,b,c,d){return a.bufferData(b,c,d)},
bV:function(a,b){return a.clear(b)},
bW:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bX:function(a,b){return a.compileShader(b)},
bY:function(a){return a.createBuffer()},
bZ:function(a){return a.createProgram()},
c0:function(a,b){return a.createShader(b)},
c1:function(a){return a.createTexture()},
c3:function(a,b){return a.depthMask(b)},
c4:function(a,b){return a.disable(b)},
c5:function(a,b,c,d){return a.drawArrays(b,c,d)},
c6:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c7:function(a,b){return a.enable(b)},
c8:function(a,b){return a.enableVertexAttribArray(b)},
aA:function(a){return P.iv(a.getContextAttributes())},
b4:function(a){return a.getError()},
b5:function(a,b){return a.getProgramInfoLog(b)},
b6:function(a,b,c){return a.getProgramParameter(b,c)},
b7:function(a,b){return a.getShaderInfoLog(b)},
b8:function(a,b,c){return a.getShaderParameter(b,c)},
b9:function(a,b,c){return a.getUniformLocation(b,c)},
ca:function(a,b){return a.linkProgram(b)},
ce:function(a,b,c){return a.pixelStorei(b,c)},
bc:function(a,b,c){return a.shaderSource(b,c)},
bf:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b1:function(a,b,c,d,e,f,g,h,i,j){this.aQ(a,b,c,d,e,f,g)
return},
cj:function(a,b,c,d,e,f,g){return this.b1(a,b,c,d,e,f,g,null,null,null)},
aQ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ck:function(a,b,c,d){return a.texParameterf(b,c,d)},
cl:function(a,b,c,d){return a.texParameteri(b,c,d)},
co:function(a,b,c){return a.uniform1f(b,c)},
cp:function(a,b,c){return a.uniform1fv(b,c)},
cq:function(a,b,c){return a.uniform1i(b,c)},
cr:function(a,b,c){return a.uniform1iv(b,c)},
cs:function(a,b,c){return a.uniform2fv(b,c)},
ct:function(a,b,c){return a.uniform3fv(b,c)},
cu:function(a,b,c){return a.uniform4fv(b,c)},
cv:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cw:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cA:function(a,b){return a.useProgram(b)},
cC:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cD:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fz.prototype={
e_:function(a,b){return a.beginTransformFeedback(b)},
e2:function(a,b){return a.bindVertexArray(b)},
ec:function(a){return a.createVertexArray()},
ej:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ek:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
el:function(a){return a.endTransformFeedback()},
eR:function(a,b,c,d){this.dT(a,b,c,d)
return},
dT:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eS:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bL:function(a,b){return a.activeTexture(b)},
bO:function(a,b,c){return a.attachShader(b,c)},
bP:function(a,b,c){return a.bindBuffer(b,c)},
bQ:function(a,b,c){return a.bindFramebuffer(b,c)},
bR:function(a,b,c){return a.bindTexture(b,c)},
bS:function(a,b){return a.blendEquation(b)},
bT:function(a,b,c){return a.blendFunc(b,c)},
bU:function(a,b,c,d){return a.bufferData(b,c,d)},
bV:function(a,b){return a.clear(b)},
bW:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bX:function(a,b){return a.compileShader(b)},
bY:function(a){return a.createBuffer()},
bZ:function(a){return a.createProgram()},
c0:function(a,b){return a.createShader(b)},
c1:function(a){return a.createTexture()},
c3:function(a,b){return a.depthMask(b)},
c4:function(a,b){return a.disable(b)},
c5:function(a,b,c,d){return a.drawArrays(b,c,d)},
c6:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c7:function(a,b){return a.enable(b)},
c8:function(a,b){return a.enableVertexAttribArray(b)},
aA:function(a){return P.iv(a.getContextAttributes())},
b4:function(a){return a.getError()},
b5:function(a,b){return a.getProgramInfoLog(b)},
b6:function(a,b,c){return a.getProgramParameter(b,c)},
b7:function(a,b){return a.getShaderInfoLog(b)},
b8:function(a,b,c){return a.getShaderParameter(b,c)},
b9:function(a,b,c){return a.getUniformLocation(b,c)},
ca:function(a,b){return a.linkProgram(b)},
ce:function(a,b,c){return a.pixelStorei(b,c)},
bc:function(a,b,c){return a.shaderSource(b,c)},
bf:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b1:function(a,b,c,d,e,f,g,h,i,j){this.aQ(a,b,c,d,e,f,g)
return},
cj:function(a,b,c,d,e,f,g){return this.b1(a,b,c,d,e,f,g,null,null,null)},
aQ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ck:function(a,b,c,d){return a.texParameterf(b,c,d)},
cl:function(a,b,c,d){return a.texParameteri(b,c,d)},
co:function(a,b,c){return a.uniform1f(b,c)},
cp:function(a,b,c){return a.uniform1fv(b,c)},
cq:function(a,b,c){return a.uniform1i(b,c)},
cr:function(a,b,c){return a.uniform1iv(b,c)},
cs:function(a,b,c){return a.uniform2fv(b,c)},
ct:function(a,b,c){return a.uniform3fv(b,c)},
cu:function(a,b,c){return a.uniform4fv(b,c)},
cv:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cw:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cA:function(a,b){return a.useProgram(b)},
cC:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cD:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.ij.prototype={$isa:1}
P.fJ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return P.iv(this.dH(a,b))},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
dH:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.aB]},
$isb:1,
$asb:function(){return[P.aB]}}
P.cn.prototype={$isc:1,
$asc:function(){return[P.aB]},
$isb:1,
$asb:function(){return[P.aB]}}
P.cK.prototype={$isc:1,
$asc:function(){return[P.aB]},
$isb:1,
$asb:function(){return[P.aB]}}
B.iR.prototype={
$1:function(a){$.$get$iw().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aQ]}}}
B.iS.prototype={
$1:function(a){$.$get$iw().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aQ]}}}
B.iT.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.mR=t
$.mS=C.b.a8(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jv=s-C.b.G(window.innerWidth,2)
$.kW=-(t-C.b.G(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.L]}}}
B.iU.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.c2=t-C.b.G(window.innerWidth,2)
$.c3=-(s-C.b.G(window.innerHeight,2))
if(a.button===2)$.$get$c0().i(0,"right",!0)
else $.$get$c0().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.L]}}}
B.iV.prototype={
$1:function(a){if(a.button===2)$.$get$c0().i(0,"right",null)
else $.$get$c0().i(0,"left",null)},
$S:function(){return{func:1,args:[W.L]}}}
B.fc.prototype={
dc:function(a,b,c,d){var t
d.toString
W.ai(d,W.mZ().$1(d),new B.fd(this),!1,W.aY)
W.ai(d,"mousemove",new B.fe(this),!1,W.L)
t=W.aW
W.ai(d,"touchstart",new B.ff(),!1,t)
W.ai(d,"touchmove",new B.fg(this),!1,t)
B.ne(null)}}
B.fd.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.a5.ged(a)*r.k3
if(C.c.a8(r.fy,t)>0)r.fy=H.Y(C.c.a8(r.fy,t))}catch(q){s=H.O(q)
P.al(s)}},
$S:function(){return{func:1,args:[W.aY]}}}
B.fe.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.Y(t.go+C.b.a8($.jv,$.c2)*0.01)
s=t.id
r=$.c3
q=$.kW
t.id=H.Y(s+(r-q)*0.01)
$.c2=$.jv
$.c3=q}},
$S:function(){return{func:1,args:[W.L]}}}
B.ff.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a5(t.clientX)
C.c.a5(t.clientY)
$.c2=s
C.c.a5(t.clientX)
$.c3=C.c.a5(t.clientY)},
$S:function(){return{func:1,args:[W.aW]}}}
B.fg.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a5(t.clientX)
t=C.c.a5(t.clientY)
r=this.a
r.go=H.Y(r.go+C.b.a8(s,$.c2)*0.01)
r.id=H.Y(r.id+($.c3-t)*0.01)
$.c2=s
$.c3=t},
$S:function(){return{func:1,args:[W.aW]}}}
G.f_.prototype={}
G.ds.prototype={
Y:function(a,b){var t=this.d
if(H.aF(!t.D(0,a)))H.b3("uniform "+a+" already set")
t.i(0,a,b)},
bn:function(){return this.d},
j:function(a){var t,s,r,q
t=H.C(["{"+new H.aD(H.iA(this),null).j(0)+"}["+this.a+"]"],[P.r])
for(s=this.d,r=s.gC(s),r=r.gw(r);r.p();){q=r.gq()
C.a.l(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.a4(t,"\n")}}
G.dQ.prototype={}
G.dS.prototype={
c9:function(a,b,c){J.ll(this.a,b)
if(c>0)J.lL(this.a,b,c)}}
G.ev.prototype={}
G.eo.prototype={}
G.ex.prototype={
bk:function(a){var t=this.e
H.d(!t.D(0,a))
H.d(C.e.be(a,"a"))
switch($.$get$X().h(0,a).a){case"vec2":t.i(0,a,H.C([],[T.ab]))
break
case"vec3":t.i(0,a,H.C([],[T.w]))
break
case"vec4":t.i(0,a,H.C([],[T.au]))
break
case"float":t.i(0,a,H.C([],[P.K]))
break
case"uvec4":t.i(0,a,H.C([],[[P.b,P.n]]))
break
default:if(H.aF(!1))H.b3("unknown type for "+a)}},
d1:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new Float32Array(2)
o=q.a
p[1]=o[1]
p[0]=o[0]
s.l(t,new T.ab(p))}},
d2:function(a,b){var t,s,r,q,p
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new T.w(new Float32Array(3))
p.M(q)
s.l(t,p)}},
d3:function(a){var t,s,r,q,p
H.d(!0)
t=this.d
s=t.length
C.a.l(this.c,new G.eo(s,s+1,s+2,s+3))
for(r=0;r<4;++r){q=a[r]
p=new T.w(new Float32Array(3))
p.M(q)
C.a.l(t,p)}},
d7:function(){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=t.length
H.d(s>0)
s=new Array(t.length*6)
s.fixed$length=Array
r=H.C(s,[P.n])
for(s=this.b,q=0,p=0;!1;++p){o=s[p]
r[q]=o.geV(o)
r[q+1]=o.geW(o)
r[q+2]=o.geX(o)
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
j:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gC(s),r=r.gw(r);r.p();){q=r.gq()
p=$.$get$X().h(0,q).a
C.a.l(t,H.f(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.a4(t," ")}}
G.dq.prototype={}
G.bO.prototype={}
G.eW.prototype={
da:function(a,b){this.Y("cDepthTest",!0)
this.Y("cDepthWrite",!1)
this.Y("cBlendEquation",b)
this.Y("cStencilFunc",$.$get$kh())}}
G.d5.prototype={
bj:function(a,b,c){var t,s
if(C.e.aF(a,0)===105){if(H.aF(C.b.aD(b.length,c)===this.z))H.b3("ChangeAttribute "+this.z)}else H.d(C.b.aD(b.length,c)===(this.ch.length/3|0))
this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dG(t.a,34962,s)
J.jA(t.a,34962,b,35048)},
bl:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a9:function(a,b,c){var t,s,r,q,p,o
t=J.jx(a,0)===105
if(t&&this.z===0)this.z=C.b.aD(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.j0(r.a))
this.bj(a,b,c)
q=$.$get$X().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.aF(p.D(0,a)))H.b3("unexpected attribute "+a)
o=p.h(0,a)
J.dH(r.a,this.e)
r.c9(0,o,t?1:0)
s=s.h(0,a)
p=q.bm()
J.dG(r.a,34962,s)
J.jK(r.a,o,p,5126,!1,0,0)},
bi:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.j0(s.a))
this.ch=a
this.bj("aPosition",a,3)
r=$.$get$X().h(0,"aPosition")
if(r==null)throw H.e("Unknown canonical aPosition")
q=this.x
H.d(q.D(0,"aPosition"))
p=q.h(0,"aPosition")
J.dH(s.a,this.e)
s.c9(0,p,0)
t=t.h(0,"aPosition")
q=r.bm()
J.dG(s.a,34962,t)
J.jK(s.a,p,q,5126,!1,0,0)},
j:function(a){var t,s,r
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,t=t.gC(t),t=t.gw(t);t.p();){r=t.gq()
C.a.l(s,H.f(r)+":"+this.cy.h(0,r).length)}return"MESH["+this.a+"] "+C.a.a4(s,"  ")},
saK:function(a){this.cx=a}}
G.fj.prototype={
d4:function(a,b){var t=C.b.cF(a,b)
if(this.z===t)return
this.z=t
this.bo()},
bo:function(){var t,s,r,q,p,o,n
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
bn:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.w(new Float32Array(H.t(3)))
o.S(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.M(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.v(n)
r=!!s.$isau
k=r?s.gay(n):1
if(!!s.$isw){j=s.gm(n)
m=s.gn(n)
l=s.gI(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gI(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.E(t[0],n)
r=C.c.E(t[4],m)
q=C.c.E(t[8],l)
i=t[12]
h=C.c.E(t[1],n)
g=C.c.E(t[5],m)
f=C.c.E(t[9],l)
e=t[13]
d=C.c.E(t[2],n)
c=C.c.E(t[6],m)
b=C.c.E(t[10],l)
a=t[14]
a0=C.c.E(t[3],n)
a1=C.c.E(t[7],m)
a2=C.c.E(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.M(this.db)
a3.cd(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.e1.prototype={
j:function(a){return"["+this.a+"] "+this.b+" "+this.c+" mode:"+this.d+" ["+this.e.a+"usec]"}}
G.fx.prototype={
di:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gk(t)===s.gk(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gC(s),s=s.gw(s);s.p();){q=s.gq()
if(!t.D(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bT(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.B(0,q))C.a.l(r,q)}return r},
dk:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gC(b),s=s.gw(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq()
switch(J.jx(n,0)){case 117:if(q.D(0,n)){m=b.h(0,n)
if(p.D(0,n))H.iP("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$X().h(0,n)
if(l==null)H.E("unknown "+n)
H.d(q.D(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.j5(r.a,k,m)
else if(!!J.v(m).$isk5)J.lJ(r.a,k,m)
break
case"float":if(l.c===0)J.lH(r.a,k,m)
else if(!!J.v(m).$ises)J.lI(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aI(m,"$isP").a
J.jJ(r.a,k,!1,j)}else if(!!J.v(m).$ises)J.jJ(r.a,k,!1,m)
else if(H.aF(!1))H.b3("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.aI(m,"$isaS").a
J.jI(r.a,k,!1,j)}else if(!!J.v(m).$ises)J.jI(r.a,k,!1,m)
else if(H.aF(!1))H.b3("bad unform: "+n)
break
case"vec4":if(l.c===0){j=H.aI(m,"$isau").a
J.jH(r.a,k,j)}else J.jH(r.a,k,m)
break
case"vec3":if(l.c===0){j=H.aI(m,"$isw").a
J.jG(r.a,k,j)}else J.jG(r.a,k,m)
break
case"vec2":if(l.c===0){j=H.aI(m,"$isab").a
J.jF(r.a,k,j)}else J.jF(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a0(33984,this.ch)
J.jy(r.a,j)
j=H.aI(m,"$isbN").b
J.c4(r.a,3553,j)
j=this.ch
J.j5(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.a0(33984,this.ch)
J.jy(r.a,j)
j=H.aI(m,"$isbN").b
J.c4(r.a,34067,j)
j=this.ch
J.j5(r.a,k,j)
this.ch=this.ch+1
break
default:H.iP("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":if(J.D(m,!0))J.dI(r.a,2929)
else J.j1(r.a,2929)
break
case"cStencilFunc":H.aI(m,"$isdq")
j=m.a
if(j===1281)J.j1(r.a,2960)
else{J.dI(r.a,2960)
i=m.b
h=m.c
J.lC(r.a,j,i,h)}break
case"cDepthWrite":J.lf(r.a,m)
break
case"cBlendEquation":H.aI(m,"$isbO")
j=m.a
if(j===1281)J.j1(r.a,3042)
else{J.dI(r.a,3042)
i=m.b
h=m.c
J.l9(r.a,i,h)
J.l8(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.ay(1000*(s-new P.b7(t,!1).a)).j(0)},
d6:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
t=Date.now()
s=this.d
r=this.r
J.lK(s.a,r)
this.ch=0
this.z.V(0)
for(r=b.length,q=0;q<b.length;b.length===r||(0,H.N)(b),++q){p=b[q]
this.dk(p.a,p.bn())}r=this.Q
r.V(0)
for(o=a.cy,o=o.gC(o),o=o.gw(o);o.p();)r.l(0,o.gq())
n=this.di()
if(n.length!==0)P.al("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(n)))
J.dH(a.d.a,a.e)
m=this.e.f.length>0
r=a.f
o=a.bl()
l=a.Q
k=a.z
s.toString
if(m)J.l6(s.a,r)
if(l!==-1)if(k>1)J.lj(s.a,r,o,l,0,k)
else J.li(s.a,r,o,l,0)
else if(k>1)J.lh(s.a,r,0,o,k)
else J.lg(s.a,r,0,o)
if(m)J.lm(s.a)
C.a.l(c,new G.e1(this.a,a.z,a.bl(),r,P.lX(0,0,0,Date.now()-new P.b7(t,!1).a,0,0)))},
dd:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.e
r=s.b
q=this.f
p=q.b
o=s.f
n=J.ld(t.a)
m=G.ky(t.a,35633,r)
J.jz(t.a,n,m)
l=G.ky(t.a,35632,p)
J.jz(t.a,n,l)
if(o.length>0)J.lG(t.a,n,o,35980)
J.lx(t.a,n)
if(!J.lw(t.a,n,35714))H.E(J.lv(t.a,n))
this.r=n
this.sdu(0,P.je(s.c,null))
for(s=s.d,r=s.length,p=this.y,k=0;k<s.length;s.length===r||(0,H.N)(s),++k){j=s[k]
o=this.r
p.i(0,j,J.jD(t.a,o,j))}for(s=q.d,r=s.length,k=0;k<s.length;s.length===r||(0,H.N)(s),++k){j=s[k]
q=this.r
p.i(0,j,J.jD(t.a,q,j))}},
sdu:function(a,b){this.x=b}}
G.i.prototype={
bm:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.bd.prototype={
bh:function(a){var t,s,r,q
H.d(this.b==null)
for(t=this.c,s=this.x,r=0;r<1;++r){q=a[r]
H.d($.$get$X().D(0,q))
H.d(!C.a.B(t,q))
C.a.l(t,q)
s.i(0,q,this.r);++this.r}C.a.bd(t)},
aE:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.N)(a),++r){q=a[r]
if(H.aF($.$get$X().D(0,q)))H.b3("missing uniform "+q)
H.d(!C.a.B(s,q))
C.a.l(s,q)}C.a.bd(s)},
de:function(a,b){H.d(this.b==null)
this.b=this.dl(!0,a,b)},
an:function(a){return this.de(a,null)},
dl:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.N)(t),++o){n=t[o]
m=$.$get$X().h(0,n)
C.a.l(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,o=0;!1;++o){k=t[o]
m=$.$get$X().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.N)(t),++o){k=t[o]
m=$.$get$X().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.N)(t),++o){k=t[o]
m=$.$get$X().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.l(q,"")
C.a.l(q,"void main(void) {")
C.a.J(q,b)
C.a.l(q,"}")
return C.a.a4(q,"\n")}}
G.fH.prototype={}
G.h0.prototype={
d8:function(a,b){var t=this.e
if(t!==1)J.lE(a.a,b,34046,t)
J.jE(a.a,b,10240,this.r)
J.jE(a.a,b,10241,this.f)}}
G.bN.prototype={
j:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.eB.prototype={
df:function(a){var t,s
t=this.d
s=this.c
J.c4(t.a,s,this.b)
J.lD(t.a,s,0,6408,6408,5121,a)}}
R.fL.prototype={
dq:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.mx("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.p).bu(r,"float")
r.setProperty(p,"left","")
p=C.p.bu(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.j.N(t,s)}return t},
dg:function(a,b,c){var t,s,r
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
J.iZ(this.a,s)
r=this.dq(b,c,90,30)
this.d=r
J.iZ(this.a,r)
t=t.createElement("div")
this.c=t
J.iZ(this.a,t)}}
R.fM.prototype={
dj:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.r.eQ(s,2)+" fps"
t=this.c;(t&&C.j).cS(t,b)
r=C.b.G(30*C.r.e3(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.j).N(t,q)}}
A.db.prototype={
j:function(a){return"NODE["+this.a+"]"}}
A.bH.prototype={}
A.fw.prototype={
d5:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.l7(p.a,36160,t)
H.d(r>0&&q>0)
J.lM(p.a,this.x,this.y,r,q)
if(s!==0)J.la(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.N)(t),++o){n=t[o]
m=n.e
C.a.l(m,new G.ds(P.J(),"transforms",!1,!0))
l=new T.P(new Float32Array(16))
l.R()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.N)(r),++k)A.kO(p,r[k],l,a,m)
m.pop()}}}
A.iB.prototype={
$2:function(a,b){var t=536870911&a+J.an(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.n,P.o]}}}
T.aS.prototype={
M:function(a){var t,s
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
j:function(a){return"[0] "+this.P(0).j(0)+"\n[1] "+this.P(1).j(0)+"\n[2] "+this.P(2).j(0)+"\n"},
h:function(a,b){return this.a[b]},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aS){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gu:function(a){return A.dD(this.a)},
P:function(a){var t,s
t=new Float32Array(H.t(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.w(t)},
e8:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g===0){this.M(a)
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
T.P.prototype={
a7:function(a,b,c){H.d(a<4)
H.d(b<4)
this.a[b*4+a]=c},
M:function(a){var t,s
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
j:function(a){return"[0] "+this.P(0).j(0)+"\n[1] "+this.P(1).j(0)+"\n[2] "+this.P(2).j(0)+"\n[3] "+this.P(3).j(0)+"\n"},
h:function(a,b){return this.a[b]},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.P){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.dD(this.a)},
P:function(a){var t,s
t=new Float32Array(H.t(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.au(t)},
R:function(){var t=this.a
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
cd:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.ab.prototype={
j:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ab){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.dD(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.w.prototype={
S:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
M:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
j:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.w){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.dD(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){return Math.sqrt(this.gaX())},
gaX:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
aY:function(a){var t,s,r
t=Math.sqrt(this.gaX())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
aV:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
c2:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.w(new Float32Array(H.t(3)))
t.S(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gI:function(a){return this.a[2]}}
T.au.prototype={
j:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.au){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.dD(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gI:function(a){return this.a[2]},
gay:function(a){return this.a[3]}}
Y.iN.prototype={
$1:function(a){var t,s,r
t=this.a
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.al("size change "+H.f(s)+" "+H.f(r))
this.b.d4(s,r)
t=this.c
t.z=s
t.Q=r},
$S:function(){return{func:1,v:true,args:[W.j]}}}
Y.iM.prototype={
$1:function(b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
this.a.a=b5+0
t=this.c
t.go=H.Y(t.go+0.005)
s=t.k4
if(s.h(0,37)!=null)t.go=H.Y(t.go+0.03)
else if(s.h(0,39)!=null)t.go=H.Y(t.go-0.03)
if(s.h(0,38)!=null)t.id=H.Y(t.id+0.03)
else if(s.h(0,40)!=null)t.id=H.Y(t.id-0.03)
if(s.h(0,33)!=null)t.fy=H.Y(t.fy*0.99)
else if(s.h(0,34)!=null)t.fy=H.Y(t.fy*1.01)
if(s.h(0,32)!=null){t.go=0
t.id=0}s=H.Y(C.c.e4(t.id,-1.4707963267948965,1.4707963267948965))
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
q=t.k2.a
n[12]=n[12]+q[0]
n[13]=n[13]+q[1]
n[14]=n[14]+q[2]
s=n[12]
r=n[13]
o=n[14]
m=new T.w(new Float32Array(H.t(3)))
m.S(0,1,0)
l=t.e
k=l.a
k[0]=n[12]
k[1]=n[13]
k[2]=n[14]
k=new Float32Array(H.t(3))
j=new T.w(k)
j.M(l)
k[0]=k[0]-q[0]
k[1]=k[1]-q[1]
k[2]=k[2]-q[2]
j.aY(0)
i=m.c2(j)
i.aY(0)
h=j.c2(i)
h.aY(0)
q=i.aV(l)
g=h.aV(l)
l=j.aV(l)
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
o=Math.sqrt(o.gaX())
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
b2=[]
this.d.d5(b2)
b3=[]
for(t=b2.length,b4=0;b4<b2.length;b2.length===t||(0,H.N)(b2),++b4)C.a.l(b3,b2[b4].j(0))
this.b.dj(b5,C.a.a4(b3,"<br>"))
C.a6.gdY(window).cm(this)},
$S:function(){return{func:1,v:true,args:[P.T]}}}
J.a.prototype.cX=J.a.prototype.j
J.bx.prototype.cZ=J.bx.prototype.j
P.U.prototype.cY=P.U.prototype.az
W.a1.prototype.aC=W.a1.prototype.K
W.bV.prototype.d_=W.bV.prototype.U;(function installTearOffs(){installTearOff(H.b0.prototype,"gez",0,0,0,null,["$0"],["aw"],0)
installTearOff(H.aj.prototype,"gcK",0,0,0,null,["$1"],["H"],2)
installTearOff(H.b_.prototype,"gef",0,0,0,null,["$1"],["W"],2)
installTearOff(P,"mN",1,0,0,null,["$1"],["mu"],1)
installTearOff(P,"mO",1,0,0,null,["$1"],["mv"],1)
installTearOff(P,"mP",1,0,0,null,["$1"],["mw"],1)
installTearOff(P,"kL",1,0,0,null,["$0"],["mL"],0)
installTearOff(P.av.prototype,"gdw",0,0,0,null,["$2","$1"],["ao","dz"],5)
installTearOff(P,"mU",1,0,0,null,["$2"],["lT"],6)
installTearOff(W,"mZ",1,0,0,null,["$1"],["lZ"],7)
installTearOff(W,"n_",1,0,0,null,["$4"],["mA"],4)
installTearOff(W,"n0",1,0,0,null,["$4"],["mB"],4)
installTearOff(W.dc.prototype,"gaZ",0,1,0,null,["$0"],["b_"],3)
installTearOff(W.dr.prototype,"gaZ",0,1,0,null,["$0"],["b_"],3)
installTearOff(Y,"l2",1,0,0,null,["$0"],["n8"],0)})();(function inheritance(){inherit(P.o,null)
var t=P.o
inherit(H.jb,t)
inherit(J.a,t)
inherit(J.dN,t)
inherit(P.U,t)
inherit(H.d3,t)
inherit(P.d_,t)
inherit(H.ch,t)
inherit(H.b5,t)
inherit(H.hY,t)
inherit(H.b0,t)
inherit(H.hA,t)
inherit(H.b1,t)
inherit(H.hX,t)
inherit(H.ht,t)
inherit(H.bc,t)
inherit(H.h2,t)
inherit(H.ao,t)
inherit(H.aj,t)
inherit(H.b_,t)
inherit(H.fv,t)
inherit(H.h9,t)
inherit(P.b8,t)
inherit(H.dA,t)
inherit(H.aD,t)
inherit(H.af,t)
inherit(H.eN,t)
inherit(H.eP,t)
inherit(P.hv,t)
inherit(P.dx,t)
inherit(P.av,t)
inherit(P.dv,t)
inherit(P.fO,t)
inherit(P.fP,t)
inherit(P.b4,t)
inherit(P.im,t)
inherit(P.fE,t)
inherit(P.hV,t)
inherit(P.bT,t)
inherit(P.bG,t)
inherit(P.x,t)
inherit(P.hW,t)
inherit(P.aw,t)
inherit(P.G,t)
inherit(P.b7,t)
inherit(P.T,t)
inherit(P.ay,t)
inherit(P.dm,t)
inherit(P.hF,t)
inherit(P.e5,t)
inherit(P.b,t)
inherit(P.aB,t)
inherit(P.aT,t)
inherit(P.bJ,t)
inherit(P.r,t)
inherit(P.bK,t)
inherit(W.dU,t)
inherit(W.hs,t)
inherit(W.bS,t)
inherit(W.z,t)
inherit(W.de,t)
inherit(W.bV,t)
inherit(W.id,t)
inherit(W.ci,t)
inherit(W.dd,t)
inherit(W.i7,t)
inherit(W.dB,t)
inherit(P.hT,t)
inherit(P.i_,t)
inherit(G.f_,t)
inherit(G.dS,t)
inherit(G.ev,t)
inherit(G.eo,t)
inherit(G.ex,t)
inherit(G.dq,t)
inherit(G.bO,t)
inherit(G.e1,t)
inherit(G.i,t)
inherit(G.bd,t)
inherit(G.h0,t)
inherit(G.bN,t)
inherit(R.fL,t)
inherit(T.aS,t)
inherit(T.P,t)
inherit(T.ab,t)
inherit(T.w,t)
inherit(T.au,t)
t=J.a
inherit(J.eI,t)
inherit(J.eJ,t)
inherit(J.bx,t)
inherit(J.aN,t)
inherit(J.b9,t)
inherit(J.aO,t)
inherit(H.bA,t)
inherit(H.bb,t)
inherit(W.h,t)
inherit(W.a_,t)
inherit(W.c6,t)
inherit(W.c8,t)
inherit(W.c9,t)
inherit(W.y,t)
inherit(W.cl,t)
inherit(W.dW,t)
inherit(W.dX,t)
inherit(W.dY,t)
inherit(W.cd,t)
inherit(W.ce,t)
inherit(W.cf,t)
inherit(W.cw,t)
inherit(W.e0,t)
inherit(W.j,t)
inherit(W.cv,t)
inherit(W.a3,t)
inherit(W.ey,t)
inherit(W.cA,t)
inherit(W.eR,t)
inherit(W.eX,t)
inherit(W.a4,t)
inherit(W.cu,t)
inherit(W.f8,t)
inherit(W.dc,t)
inherit(W.cz,t)
inherit(W.fh,t)
inherit(W.be,t)
inherit(W.a5,t)
inherit(W.cs,t)
inherit(W.ah,t)
inherit(W.di,t)
inherit(W.a7,t)
inherit(W.cr,t)
inherit(W.a8,t)
inherit(W.fN,t)
inherit(W.V,t)
inherit(W.cq,t)
inherit(W.h1,t)
inherit(W.aa,t)
inherit(W.cp,t)
inherit(W.h6,t)
inherit(W.dr,t)
inherit(W.hd,t)
inherit(W.hi,t)
inherit(W.hu,t)
inherit(W.cF,t)
inherit(W.cE,t)
inherit(W.cD,t)
inherit(W.cy,t)
inherit(W.cC,t)
inherit(W.cB,t)
inherit(W.ik,t)
inherit(W.il,t)
inherit(P.ap,t)
inherit(P.co,t)
inherit(P.aq,t)
inherit(P.ct,t)
inherit(P.fn,t)
inherit(P.fo,t)
inherit(P.ft,t)
inherit(P.cm,t)
inherit(P.ar,t)
inherit(P.cx,t)
inherit(P.hh,t)
inherit(P.dO,t)
inherit(P.fy,t)
inherit(P.fz,t)
inherit(P.ij,t)
inherit(P.cn,t)
t=J.bx
inherit(J.fl,t)
inherit(J.aX,t)
inherit(J.aP,t)
inherit(J.ja,J.aN)
t=J.b9
inherit(J.d1,t)
inherit(J.d0,t)
t=P.U
inherit(H.c,t)
inherit(H.d4,t)
inherit(H.du,t)
t=H.c
inherit(H.ba,t)
inherit(H.eO,t)
inherit(H.e4,H.d4)
t=P.d_
inherit(H.eS,t)
inherit(H.hk,t)
t=H.ba
inherit(H.by,t)
inherit(P.eQ,t)
t=H.b5
inherit(H.iW,t)
inherit(H.iX,t)
inherit(H.hS,t)
inherit(H.hB,t)
inherit(H.eE,t)
inherit(H.eF,t)
inherit(H.hZ,t)
inherit(H.h3,t)
inherit(H.h4,t)
inherit(H.iY,t)
inherit(H.iG,t)
inherit(H.iH,t)
inherit(H.iI,t)
inherit(H.iJ,t)
inherit(H.iK,t)
inherit(H.fX,t)
inherit(H.eK,t)
inherit(H.iC,t)
inherit(H.iD,t)
inherit(H.iE,t)
inherit(P.hp,t)
inherit(P.ho,t)
inherit(P.hq,t)
inherit(P.hr,t)
inherit(P.hG,t)
inherit(P.hK,t)
inherit(P.hH,t)
inherit(P.hI,t)
inherit(P.hJ,t)
inherit(P.hN,t)
inherit(P.hO,t)
inherit(P.hM,t)
inherit(P.hL,t)
inherit(P.fQ,t)
inherit(P.fR,t)
inherit(P.iq,t)
inherit(P.i2,t)
inherit(P.i1,t)
inherit(P.i3,t)
inherit(P.eT,t)
inherit(P.e2,t)
inherit(P.e3,t)
inherit(W.it,t)
inherit(W.hl,t)
inherit(W.hE,t)
inherit(W.fa,t)
inherit(W.f9,t)
inherit(W.i9,t)
inherit(W.ia,t)
inherit(W.ih,t)
inherit(W.ii,t)
inherit(P.iu,t)
inherit(B.iR,t)
inherit(B.iS,t)
inherit(B.iT,t)
inherit(B.iU,t)
inherit(B.iV,t)
inherit(B.fd,t)
inherit(B.fe,t)
inherit(B.ff,t)
inherit(B.fg,t)
inherit(A.iB,t)
inherit(Y.iN,t)
inherit(Y.iM,t)
t=H.ht
inherit(H.bf,t)
inherit(H.bW,t)
t=P.b8
inherit(H.df,t)
inherit(H.eL,t)
inherit(H.hc,t)
inherit(H.hb,t)
inherit(H.dR,t)
inherit(H.fB,t)
inherit(P.c5,t)
inherit(P.dg,t)
inherit(P.ad,t)
inherit(P.u,t)
inherit(P.dt,t)
inherit(P.aC,t)
inherit(P.a0,t)
inherit(P.dV,t)
t=H.fX
inherit(H.fK,t)
inherit(H.bm,t)
inherit(H.hn,P.c5)
t=H.bb
inherit(H.f0,t)
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
inherit(H.f1,t)
t=H.d9
inherit(H.f2,t)
inherit(H.f3,t)
inherit(H.f4,t)
inherit(H.f5,t)
inherit(H.f6,t)
inherit(H.da,t)
inherit(H.f7,t)
inherit(P.ie,P.hv)
inherit(P.i0,P.im)
inherit(P.dy,H.af)
inherit(P.fD,P.fE)
inherit(P.hR,P.fD)
inherit(P.hU,P.hR)
inherit(P.d2,P.bG)
t=P.T
inherit(P.K,t)
inherit(P.n,t)
t=P.ad
inherit(P.dj,t)
inherit(P.eC,t)
t=W.h
inherit(W.q,t)
inherit(W.br,t)
inherit(W.dT,t)
inherit(W.eq,t)
inherit(W.bw,t)
inherit(W.bz,t)
inherit(W.fq,t)
inherit(W.dk,t)
inherit(W.fF,t)
inherit(W.a6,t)
inherit(W.bq,t)
inherit(W.a9,t)
inherit(W.W,t)
inherit(W.bp,t)
inherit(W.hf,t)
inherit(W.hj,t)
inherit(W.bP,t)
inherit(W.hm,t)
inherit(W.aZ,t)
inherit(W.i8,t)
t=W.q
inherit(W.a1,t)
inherit(W.aM,t)
inherit(W.bn,t)
inherit(W.cc,t)
inherit(W.hx,t)
t=W.a1
inherit(W.l,t)
inherit(P.F,t)
t=W.l
inherit(W.dL,t)
inherit(W.dM,t)
inherit(W.aL,t)
inherit(W.c7,t)
inherit(W.cb,t)
inherit(W.eu,t)
inherit(W.cj,t)
inherit(W.eD,t)
inherit(W.fC,t)
inherit(W.dn,t)
inherit(W.fV,t)
inherit(W.fW,t)
inherit(W.bL,t)
inherit(W.hQ,t)
inherit(W.bu,W.br)
inherit(W.dP,W.bu)
inherit(W.b6,W.cl)
inherit(W.dZ,W.ce)
inherit(W.cZ,W.cw)
inherit(W.e_,W.cZ)
inherit(W.a2,W.c6)
inherit(W.cX,W.cv)
inherit(W.ep,W.cX)
inherit(W.cH,W.cA)
inherit(W.bv,W.cH)
inherit(W.ck,W.bn)
inherit(W.ez,W.bw)
inherit(W.aE,W.j)
t=W.aE
inherit(W.aQ,t)
inherit(W.L,t)
inherit(W.aW,t)
inherit(W.eY,W.bz)
inherit(W.cR,W.cu)
inherit(W.eZ,W.cR)
inherit(W.R,P.d2)
inherit(W.cS,W.cz)
inherit(W.bF,W.cS)
t=W.be
inherit(W.fk,t)
inherit(W.fA,t)
inherit(W.h8,t)
inherit(W.cT,W.cs)
inherit(W.fm,W.cT)
inherit(W.fp,W.ah)
inherit(W.bt,W.bq)
inherit(W.fG,W.bt)
inherit(W.cP,W.cr)
inherit(W.fI,W.cP)
inherit(W.cL,W.cq)
inherit(W.fZ,W.cL)
inherit(W.bs,W.bp)
inherit(W.h_,W.bs)
inherit(W.cW,W.cp)
inherit(W.h5,W.cW)
inherit(W.aY,W.L)
inherit(W.cU,W.cF)
inherit(W.dw,W.cU)
inherit(W.cG,W.cE)
inherit(W.hw,W.cG)
inherit(W.hy,W.cf)
inherit(W.cN,W.cD)
inherit(W.hP,W.cN)
inherit(W.cY,W.cy)
inherit(W.dz,W.cY)
inherit(W.cJ,W.cC)
inherit(W.ib,W.cJ)
inherit(W.cV,W.cB)
inherit(W.ic,W.cV)
inherit(W.hz,W.hs)
inherit(W.hC,P.fO)
inherit(W.jk,W.hC)
inherit(W.hD,P.fP)
inherit(W.ig,W.bV)
inherit(P.H,P.i_)
t=P.F
inherit(P.aA,t)
inherit(P.aK,t)
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
inherit(P.em,t)
inherit(P.en,t)
inherit(P.er,t)
inherit(P.eU,t)
inherit(P.eV,t)
inherit(P.fi,t)
inherit(P.bI,t)
inherit(P.fU,t)
inherit(P.hg,t)
inherit(P.bR,t)
inherit(P.i4,t)
inherit(P.i5,t)
inherit(P.i6,t)
t=P.aA
inherit(P.dK,t)
inherit(P.et,t)
inherit(P.ae,t)
inherit(P.eA,t)
inherit(P.fT,t)
inherit(P.dp,t)
inherit(P.he,t)
inherit(P.cI,P.co)
inherit(P.eM,P.cI)
inherit(P.cQ,P.ct)
inherit(P.fb,P.cQ)
inherit(P.fu,P.ae)
inherit(P.cO,P.cm)
inherit(P.fS,P.cO)
t=P.dp
inherit(P.fY,t)
inherit(P.bM,t)
inherit(P.cM,P.cx)
inherit(P.h7,P.cM)
inherit(P.cK,P.cn)
inherit(P.fJ,P.cK)
t=G.f_
inherit(G.fH,t)
inherit(G.ds,t)
inherit(G.d5,t)
inherit(G.fx,t)
inherit(A.bH,t)
inherit(A.fw,t)
t=G.fH
inherit(G.dQ,t)
inherit(A.db,t)
inherit(B.fc,G.dQ)
t=G.ds
inherit(G.eW,t)
inherit(G.fj,t)
inherit(G.eB,G.bN)
inherit(R.fM,R.fL)
mixin(H.bB,P.x)
mixin(H.bC,P.x)
mixin(H.bD,H.ch)
mixin(H.bE,H.ch)
mixin(P.bG,P.x)
mixin(W.bp,P.x)
mixin(W.bq,P.x)
mixin(W.br,P.x)
mixin(W.bs,W.z)
mixin(W.bt,W.z)
mixin(W.bu,W.z)
mixin(W.cl,W.dU)
mixin(W.cF,P.x)
mixin(W.cr,P.x)
mixin(W.cy,P.x)
mixin(W.cz,P.x)
mixin(W.cA,P.x)
mixin(W.cB,P.x)
mixin(W.cC,P.x)
mixin(W.cD,P.x)
mixin(W.cE,P.x)
mixin(W.cp,P.x)
mixin(W.cq,P.x)
mixin(W.cs,P.x)
mixin(W.cu,P.x)
mixin(W.cv,P.x)
mixin(W.cw,P.x)
mixin(W.cG,W.z)
mixin(W.cH,W.z)
mixin(W.cS,W.z)
mixin(W.cT,W.z)
mixin(W.cR,W.z)
mixin(W.cW,W.z)
mixin(W.cX,W.z)
mixin(W.cY,W.z)
mixin(W.cZ,W.z)
mixin(W.cJ,W.z)
mixin(W.cL,W.z)
mixin(W.cN,W.z)
mixin(W.cP,W.z)
mixin(W.cU,W.z)
mixin(W.cV,W.z)
mixin(P.co,P.x)
mixin(P.cm,P.x)
mixin(P.ct,P.x)
mixin(P.cx,P.x)
mixin(P.cI,W.z)
mixin(P.cQ,W.z)
mixin(P.cM,W.z)
mixin(P.cO,W.z)
mixin(P.cn,P.x)
mixin(P.cK,W.z)})();(function constants(){C.h=W.aL.prototype
C.o=W.c7.prototype
C.f=W.c8.prototype
C.i=W.c9.prototype
C.p=W.b6.prototype
C.j=W.cb.prototype
C.A=W.cd.prototype
C.B=W.cj.prototype
C.k=W.ck.prototype
C.C=J.a.prototype
C.a=J.aN.prototype
C.r=J.d0.prototype
C.b=J.d1.prototype
C.c=J.b9.prototype
C.e=J.aO.prototype
C.J=J.aP.prototype
C.N=H.d6.prototype
C.v=W.bF.prototype
C.w=J.fl.prototype
C.x=W.di.prototype
C.y=W.dn.prototype
C.n=J.aX.prototype
C.a5=W.aY.prototype
C.a6=W.bP.prototype
C.z=new P.hT()
C.d=new P.i0()
C.q=new P.ay(0)
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
C.t=function(hooks) { return hooks; }

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
C.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.K=H.C(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.r])
C.L=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.M=makeConstList([])
C.l=H.C(makeConstList(["bind","if","ref","repeat","syntax"]),[P.r])
C.m=H.C(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.r])
C.O=H.I("ni")
C.P=H.I("nj")
C.Q=H.I("es")
C.R=H.I("nk")
C.S=H.I("nl")
C.T=H.I("k5")
C.U=H.I("nm")
C.V=H.I("k8")
C.W=H.I("aT")
C.X=H.I("r")
C.Y=H.I("ku")
C.Z=H.I("kv")
C.a_=H.I("nn")
C.a0=H.I("kw")
C.a1=H.I("aw")
C.a2=H.I("K")
C.a3=H.I("n")
C.a4=H.I("T")})();(function staticFields(){$.kd="$cachedFunction"
$.ke="$cachedInvocation"
$.jS=null
$.jQ=null
$.jm=!1
$.jq=null
$.kI=null
$.l_=null
$.ix=null
$.iF=null
$.jr=null
$.bg=null
$.bX=null
$.bY=null
$.jn=!1
$.B=C.d
$.k3=0
$.az=null
$.j7=null
$.k2=null
$.k1=null
$.k_=null
$.jZ=null
$.jY=null
$.jX=null
$.mR=0
$.mS=0
$.jv=0
$.kW=0
$.c2=0
$.c3=0
$.nf=!1
$.kQ=0})();(function lazyInitializers(){lazy($,"jW","$get$jW",function(){return H.kT("_$dart_dartClosure")})
lazy($,"jc","$get$jc",function(){return H.kT("_$dart_js")})
lazy($,"k6","$get$k6",function(){return H.m7()})
lazy($,"k7","$get$k7",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.k3
$.k3=t+1
t="expando$key$"+t}return new P.e5(null,t,[P.n])})
lazy($,"kj","$get$kj",function(){return H.as(H.ha({
toString:function(){return"$receiver$"}}))})
lazy($,"kk","$get$kk",function(){return H.as(H.ha({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kl","$get$kl",function(){return H.as(H.ha(null))})
lazy($,"km","$get$km",function(){return H.as(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kq","$get$kq",function(){return H.as(H.ha(void 0))})
lazy($,"kr","$get$kr",function(){return H.as(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"ko","$get$ko",function(){return H.as(H.kp(null))})
lazy($,"kn","$get$kn",function(){return H.as(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kt","$get$kt",function(){return H.as(H.kp(void 0))})
lazy($,"ks","$get$ks",function(){return H.as(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jj","$get$jj",function(){return P.mt()})
lazy($,"bZ","$get$bZ",function(){return[]})
lazy($,"jV","$get$jV",function(){return{}})
lazy($,"kB","$get$kB",function(){return P.je(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jl","$get$jl",function(){return P.J()})
lazy($,"iw","$get$iw",function(){return P.k9(P.n,P.aw)})
lazy($,"c0","$get$c0",function(){return P.k9(P.r,P.aw)})
lazy($,"kh","$get$kh",function(){return new G.dq(1281,0,4294967295)})
lazy($,"jO","$get$jO",function(){return new G.bO(32774,770,771)})
lazy($,"jN","$get$jN",function(){return new G.bO(32774,770,769)})
lazy($,"X","$get$X",function(){return P.aR(["cBlendEquation",new G.i("","",0),"cDepthWrite",new G.i("","",0),"cDepthTest",new G.i("","",0),"cStencilFunc",new G.i("","",0),"tPosition",new G.i("vec3","",0),"tSpeed",new G.i("vec3","",0),"tForce",new G.i("vec3","",0),"aColors",new G.i("vec3","per vertex color",0),"aColorAlpha",new G.i("vec4","per vertex color",0),"aPosition",new G.i("vec3","vertex coordinates",0),"aTexUV",new G.i("vec2","texture uvs",0),"aNormal",new G.i("vec3","vertex normals",0),"aBinormal",new G.i("vec3","vertex binormals",0),"aCenter",new G.i("vec4","for wireframe",0),"aPointSize",new G.i("float","",0),"aBoneIndex",new G.i("vec4","",0),"aBoneWeight",new G.i("vec4","",0),"aTangent",new G.i("vec3","vertex tangents",0),"aBitangent",new G.i("vec3","vertex btangents",0),"iaRotation",new G.i("vec4","",0),"iaTranslation",new G.i("vec3","",0),"iaScale",new G.i("vec3","",0),"vColor",new G.i("vec3","per vertex color",0),"vTexUV",new G.i("vec2","",0),"vLightWeighting",new G.i("vec3","",0),"vNormal",new G.i("vec3","",0),"vPosition",new G.i("vec3","vertex coordinates",0),"vPositionFromLight",new G.i("vec4","delta from light",0),"vCenter",new G.i("vec4","for wireframe",0),"vDepth",new G.i("float","depth for shadowmaps",0),"uTransformationMatrix",new G.i("mat4","",0),"uModelMatrix",new G.i("mat4","",0),"uNormalMatrix",new G.i("mat3","",0),"uConvolutionMatrix",new G.i("mat3","",0),"uPerspectiveViewMatrix",new G.i("mat4","",0),"uLightPerspectiveViewMatrix",new G.i("mat4","",0),"uShadowMap",new G.i("sampler2DShadow","",0),"uTexture",new G.i("sampler2D","",0),"uTexture2",new G.i("sampler2D","",0),"uTexture3",new G.i("sampler2D","",0),"uTexture4",new G.i("sampler2D","",0),"uSpecularMap",new G.i("sampler2D","",0),"uNormalMap",new G.i("sampler2D","",0),"uBumpMap",new G.i("sampler2D","",0),"uDepthMap",new G.i("sampler2D","",0),"uCubeTexture",new G.i("samplerCube","",0),"uAnimationTable",new G.i("sampler2D","",0),"uTime",new G.i("float","time since program start in sec",0),"uCameraNear",new G.i("float","",0),"uCameraFar",new G.i("float","",0),"uFogNear",new G.i("float","",0),"uFogFar",new G.i("float","",0),"uPointSize",new G.i("float","",0),"uScale",new G.i("float","",0),"uAngle",new G.i("float","",0),"uCanvasSize",new G.i("vec2","",0),"uCenter2",new G.i("vec2","",0),"uCutOff",new G.i("float","",0),"uShininess",new G.i("float","",0),"uShadowBias",new G.i("float","",0),"uOpacity",new G.i("float","",0),"uColor",new G.i("vec3","",0),"uAmbientDiffuse",new G.i("vec3","",0),"uColorEmissive",new G.i("vec3","",0),"uColorSpecular",new G.i("vec3","",0),"uColorDiffuse",new G.i("vec3","",0),"uColorAlpha",new G.i("vec4","",0),"uColorAlpha2",new G.i("vec4","",0),"uEyePosition",new G.i("vec3","",0),"uMaterial",new G.i("mat4","",0),"uRange",new G.i("vec2","",0),"uDirection",new G.i("vec2","",0),"uBoneMatrices",new G.i("mat4","",128),"uLightDescs",new G.i("mat4","",4),"uLightCount",new G.i("float","",0),"uLightTypes",new G.i("float","",4),"uBumpScale",new G.i("float","for bump maps",0),"uNormalScale",new G.i("float","for normal maps",0)])})
lazy($,"kx","$get$kx",function(){return C.z})
lazy($,"kZ","$get$kZ",function(){var t=new G.bd("PointSpritesV",null,[],[],[],[],0,P.J())
t.bh(["aPosition"])
t.aE(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.an(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"kY","$get$kY",function(){var t=new G.bd("PointSpritesF",null,[],[],[],[],0,P.J())
t.aE(["uTexture"])
t.an(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return t})
lazy($,"kM","$get$kM",function(){var t=new G.bd("bluredV",null,[],[],[],[],0,P.J())
t.bh(["aPosition"])
t.an(["gl_Position = vec4(aPosition, 1.0);"])
return t})
lazy($,"kN","$get$kN",function(){var t=new G.bd("bluredF",null,[],[],[],[],0,P.J())
t.aE(["uColorAlpha"])
t.an(["oFragColor = uColorAlpha;"])
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
mangledGlobalNames:{n:"int",K:"double",T:"num",r:"String",aw:"bool",aT:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.q},{func:1,ret:P.aw,args:[W.a1,P.r,P.r,W.bS]},{func:1,v:true,args:[P.o],opt:[P.bJ]},{func:1,ret:P.n,args:[P.G,P.G]},{func:1,ret:P.r,args:[W.h]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bA,ArrayBufferView:H.bb,DataView:H.f0,Float32Array:H.d6,Float64Array:H.f1,Int16Array:H.f2,Int32Array:H.f3,Int8Array:H.f4,Uint16Array:H.f5,Uint32Array:H.f6,Uint8ClampedArray:H.da,CanvasPixelArray:H.da,Uint8Array:H.f7,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLImageElement:W.l,HTMLKeygenElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMenuItemElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTextAreaElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,HTMLAnchorElement:W.dL,HTMLAreaElement:W.dM,AudioTrack:W.a_,AudioTrackList:W.dP,Blob:W.c6,HTMLBodyElement:W.aL,HTMLCanvasElement:W.c7,CanvasGradient:W.c8,CanvasRenderingContext2D:W.c9,CDATASection:W.aM,CharacterData:W.aM,Comment:W.aM,ProcessingInstruction:W.aM,Text:W.aM,CompositorWorker:W.dT,CSSCharsetRule:W.y,CSSFontFaceRule:W.y,CSSGroupingRule:W.y,CSSImportRule:W.y,CSSKeyframeRule:W.y,MozCSSKeyframeRule:W.y,WebKitCSSKeyframeRule:W.y,CSSKeyframesRule:W.y,MozCSSKeyframesRule:W.y,WebKitCSSKeyframesRule:W.y,CSSMediaRule:W.y,CSSNamespaceRule:W.y,CSSPageRule:W.y,CSSRule:W.y,CSSStyleRule:W.y,CSSSupportsRule:W.y,CSSViewportRule:W.y,CSSStyleDeclaration:W.b6,MSStyleCSSProperties:W.b6,CSS2Properties:W.b6,DataTransferItemList:W.dW,DeviceAcceleration:W.dX,HTMLDivElement:W.cb,XMLDocument:W.bn,Document:W.bn,DocumentFragment:W.cc,ShadowRoot:W.cc,DOMException:W.dY,DOMImplementation:W.cd,DOMPoint:W.dZ,DOMPointReadOnly:W.ce,DOMRectReadOnly:W.cf,DOMStringList:W.e_,DOMTokenList:W.e0,Element:W.a1,AnimationEvent:W.j,AnimationPlayerEvent:W.j,ApplicationCacheErrorEvent:W.j,AutocompleteErrorEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceLightEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,GamepadEvent:W.j,GeofencingEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RelatedEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCIceCandidateEvent:W.j,RTCPeerConnectionIceEvent:W.j,SecurityPolicyViolationEvent:W.j,ServicePortConnectEvent:W.j,ServiceWorkerMessageEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.a2,FileList:W.ep,FileWriter:W.eq,HTMLFormElement:W.eu,Gamepad:W.a3,HTMLHeadElement:W.cj,History:W.ey,HTMLCollection:W.bv,HTMLFormControlsCollection:W.bv,HTMLOptionsCollection:W.bv,HTMLDocument:W.ck,XMLHttpRequest:W.ez,XMLHttpRequestUpload:W.bw,XMLHttpRequestEventTarget:W.bw,HTMLInputElement:W.eD,KeyboardEvent:W.aQ,Location:W.eR,MediaList:W.eX,MIDIOutput:W.eY,MIDIInput:W.bz,MIDIPort:W.bz,MimeType:W.a4,MimeTypeArray:W.eZ,PointerEvent:W.L,MouseEvent:W.L,DragEvent:W.L,Navigator:W.f8,Attr:W.q,Node:W.q,NodeIterator:W.dc,NodeList:W.bF,RadioNodeList:W.bF,Path2D:W.fh,Perspective:W.fk,Plugin:W.a5,PluginArray:W.fm,PositionValue:W.fp,PresentationConnection:W.fq,Range:W.di,Rotation:W.fA,RTCDataChannel:W.dk,DataChannel:W.dk,HTMLSelectElement:W.fC,SharedWorker:W.fF,SourceBuffer:W.a6,SourceBufferList:W.fG,SpeechGrammar:W.a7,SpeechGrammarList:W.fI,SpeechRecognitionResult:W.a8,Storage:W.fN,CSSStyleSheet:W.V,StyleSheet:W.V,CalcLength:W.ah,KeywordValue:W.ah,LengthValue:W.ah,NumberValue:W.ah,SimpleLength:W.ah,TransformValue:W.ah,StyleValue:W.ah,HTMLTableElement:W.dn,HTMLTableRowElement:W.fV,HTMLTableSectionElement:W.fW,HTMLTemplateElement:W.bL,TextTrack:W.a9,TextTrackCue:W.W,VTTCue:W.W,TextTrackCueList:W.fZ,TextTrackList:W.h_,TimeRanges:W.h1,Touch:W.aa,TouchEvent:W.aW,TouchList:W.h5,TrackDefaultList:W.h6,Matrix:W.be,Skew:W.be,TransformComponent:W.be,Translation:W.h8,TreeWalker:W.dr,CompositionEvent:W.aE,FocusEvent:W.aE,TextEvent:W.aE,SVGZoomEvent:W.aE,UIEvent:W.aE,URL:W.hd,VideoTrackList:W.hf,VTTRegionList:W.hi,WebSocket:W.hj,WheelEvent:W.aY,Window:W.bP,DOMWindow:W.bP,Worker:W.hm,CompositorWorkerGlobalScope:W.aZ,DedicatedWorkerGlobalScope:W.aZ,ServiceWorkerGlobalScope:W.aZ,SharedWorkerGlobalScope:W.aZ,WorkerGlobalScope:W.aZ,ClientRect:W.hu,ClientRectList:W.dw,DOMRectList:W.dw,CSSRuleList:W.hw,DocumentType:W.hx,DOMRect:W.hy,GamepadList:W.hP,HTMLFrameSetElement:W.hQ,NamedNodeMap:W.dz,MozNamedAttrMap:W.dz,ServiceWorker:W.i8,SpeechRecognitionResultList:W.ib,StyleSheetList:W.ic,WorkerLocation:W.ik,WorkerNavigator:W.il,SVGAElement:P.dK,SVGAnimateElement:P.aK,SVGAnimateMotionElement:P.aK,SVGAnimateTransformElement:P.aK,SVGAnimationElement:P.aK,SVGSetElement:P.aK,SVGFEBlendElement:P.e6,SVGFEColorMatrixElement:P.e7,SVGFEComponentTransferElement:P.e8,SVGFECompositeElement:P.e9,SVGFEConvolveMatrixElement:P.ea,SVGFEDiffuseLightingElement:P.eb,SVGFEDisplacementMapElement:P.ec,SVGFEFloodElement:P.ed,SVGFEGaussianBlurElement:P.ee,SVGFEImageElement:P.ef,SVGFEMergeElement:P.eg,SVGFEMorphologyElement:P.eh,SVGFEOffsetElement:P.ei,SVGFEPointLightElement:P.ej,SVGFESpecularLightingElement:P.ek,SVGFESpotLightElement:P.el,SVGFETileElement:P.em,SVGFETurbulenceElement:P.en,SVGFilterElement:P.er,SVGForeignObjectElement:P.et,SVGCircleElement:P.ae,SVGEllipseElement:P.ae,SVGLineElement:P.ae,SVGPathElement:P.ae,SVGPolygonElement:P.ae,SVGPolylineElement:P.ae,SVGGeometryElement:P.ae,SVGClipPathElement:P.aA,SVGDefsElement:P.aA,SVGGElement:P.aA,SVGSwitchElement:P.aA,SVGGraphicsElement:P.aA,SVGImageElement:P.eA,SVGLength:P.ap,SVGLengthList:P.eM,SVGMarkerElement:P.eU,SVGMaskElement:P.eV,SVGNumber:P.aq,SVGNumberList:P.fb,SVGPatternElement:P.fi,SVGPoint:P.fn,SVGPointList:P.fo,SVGRect:P.ft,SVGRectElement:P.fu,SVGScriptElement:P.bI,SVGStringList:P.fS,SVGDescElement:P.F,SVGDiscardElement:P.F,SVGFEDistantLightElement:P.F,SVGFEFuncAElement:P.F,SVGFEFuncBElement:P.F,SVGFEFuncGElement:P.F,SVGFEFuncRElement:P.F,SVGFEMergeNodeElement:P.F,SVGMetadataElement:P.F,SVGStopElement:P.F,SVGStyleElement:P.F,SVGTitleElement:P.F,SVGComponentTransferFunctionElement:P.F,SVGElement:P.F,SVGSVGElement:P.fT,SVGSymbolElement:P.fU,SVGTextContentElement:P.dp,SVGTextPathElement:P.fY,SVGTSpanElement:P.bM,SVGTextElement:P.bM,SVGTextPositioningElement:P.bM,SVGTransform:P.ar,SVGTransformList:P.h7,SVGUseElement:P.he,SVGViewElement:P.hg,SVGViewSpec:P.hh,SVGLinearGradientElement:P.bR,SVGRadialGradientElement:P.bR,SVGGradientElement:P.bR,SVGCursorElement:P.i4,SVGFEDropShadowElement:P.i5,SVGMPathElement:P.i6,AudioBuffer:P.dO,WebGLRenderingContext:P.fy,WebGL2RenderingContext:P.fz,WebGL2RenderingContextBase:P.ij,SQLResultSetRowList:P.fJ})
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
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.l0(Y.l2(),b)},[])
else (function(b){H.l0(Y.l2(),b)})([])})})()