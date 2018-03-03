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
a[c]=function(){a[c]=function(){H.nS(b)}
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
return d?function(e){if(t===null)t=H.jG(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jG(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jG(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={jq:function jq(a){this.a=a},
jv:function(a,b,c,d){if(!!a.$isc)return new H.ea(a,b,[c,d])
return new H.db(a,b,[c,d])},
eK:function(){return new P.ag("No element")},
mB:function(){return new P.ag("Too many elements")},
mA:function(){return new P.ag("Too few elements")},
dq:function(a,b,c,d){if(c-b<=32)H.mR(a,b,c,d)
else H.mQ(a,b,c,d)},
mR:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.a_(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.an(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mQ:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.H(t+1,6)
r=a3+s
q=a4-s
p=C.b.H(a3+a4,2)
o=p-s
n=p+s
t=J.a_(a2)
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
if(J.y(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.dq(a2,a3,g-2,a5)
H.dq(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.y(a5.$2(t.h(a2,g),l),0);)++g
for(;J.y(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.dq(a2,g,f,a5)}else H.dq(a2,g,f,a5)},
c:function c(){},
bf:function bf(){},
da:function da(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
db:function db(a,b,c){this.a=a
this.b=b
this.$ti=c},
ea:function ea(a,b,c){this.a=a
this.b=b
this.$ti=c},
eW:function eW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bH:function bH(a,b,c){this.a=a
this.b=b
this.$ti=c},
dy:function dy(a,b,c){this.a=a
this.b=b
this.$ti=c},
hp:function hp(a,b,c){this.a=a
this.b=b
this.$ti=c},
ck:function ck(){},
dH:function(a,b){var t=a.ae(b)
if(!u.globalState.d.cy)u.globalState.f.ak()
return t},
iZ:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
lk:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.t(s).$isb)throw H.e(P.jk("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.i8(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$km()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hI(P.ju(null,H.b4),0)
r=P.n
s.seK(new H.ae(0,null,null,null,null,null,0,[r,H.b3]))
s.seN(new H.ae(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.i7()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.mv,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.n4)}if(u.globalState.x)return
s=u.globalState.a++
q=P.af(null,null,null,r)
p=new H.bi(0,null,!1)
o=new H.b3(s,new H.ae(0,null,null,null,null,null,0,[r,H.bi]),q,u.createNewIsolate(),p,new H.aq(H.j2()),new H.aq(H.j2()),!1,!1,[],P.af(null,null,null,null),null,null,!1,!0,P.af(null,null,null,null))
q.l(0,0)
o.bz(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bq(a,{func:1,args:[,]}))o.ae(new H.j8(t,a))
else if(H.bq(a,{func:1,args:[,,]}))o.ae(new H.j9(t,a))
else o.ae(a)
u.globalState.f.ak()},
n4:function(a){var t=P.aU(["command","print","msg",a])
return new H.aj(!0,P.c0(null,P.n)).I(t)},
mx:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.my()
return},
my:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.u("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.u('Cannot extract URI from "'+t+'"'))},
mv:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b2(!0,[]).V(b.data)
s=J.a_(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.nB(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b2(!0,[]).V(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b2(!0,[]).V(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.n
j=P.af(null,null,null,k)
i=new H.bi(0,null,!1)
h=new H.b3(s,new H.ae(0,null,null,null,null,null,0,[k,H.bi]),j,u.createNewIsolate(),i,new H.aq(H.j2()),new H.aq(H.j2()),!1,!1,[],P.af(null,null,null,null),null,null,!1,!0,P.af(null,null,null,null))
j.l(0,0)
h.bz(0,i)
u.globalState.f.a.S(0,new H.b4(h,new H.eH(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.ak()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lW(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ak()
break
case"close":u.globalState.ch.aj(0,$.$get$kn().h(0,a))
a.terminate()
u.globalState.f.ak()
break
case"log":H.mu(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aU(["command","print","msg",t])
k=new H.aj(!0,P.c0(null,P.n)).I(k)
s.toString
self.postMessage(k)}else P.am(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
mu:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aU(["command","log","msg",a])
r=new H.aj(!0,P.c0(null,P.n)).I(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.Q(q)
t=H.az(q)
s=P.cj(t)
throw H.e(s)}},
mw:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kv=$.kv+("_"+s)
$.kw=$.kw+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.E(0,["spawned",new H.bm(s,r),q,t.r])
r=new H.eI(a,b,c,d,t)
if(e){t.bV(q,q)
u.globalState.f.a.S(0,new H.b4(t,r,"start isolate"))}else r.$0()},
mS:function(a,b){var t=new H.h6(!0,!1,null)
t.dr(a,b)
return t},
n7:function(a){return new H.b2(!0,[]).V(new H.aj(!1,P.c0(null,P.n)).I(a))},
j8:function j8(a,b){this.a=a
this.b=b},
j9:function j9(a,b){this.a=a
this.b=b},
i8:function i8(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
b3:function b3(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
i3:function i3(a,b){this.a=a
this.b=b},
hI:function hI(a,b){this.a=a
this.b=b},
hJ:function hJ(a){this.a=a},
b4:function b4(a,b,c){this.a=a
this.b=b
this.c=c},
i7:function i7(){},
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
hB:function hB(){},
bm:function bm(a,b){this.b=a
this.a=b},
ia:function ia(a,b){this.a=a
this.b=b},
c2:function c2(a,b,c){this.b=a
this.c=b
this.a=c},
bi:function bi(a,b,c){this.a=a
this.b=b
this.c=c},
h6:function h6(a,b,c){this.a=a
this.b=b
this.c=c},
h7:function h7(a,b){this.a=a
this.b=b},
h8:function h8(a,b){this.a=a
this.b=b},
aq:function aq(a){this.a=a},
aj:function aj(a,b){this.a=a
this.b=b},
b2:function b2(a,b){this.a=a
this.b=b},
nu:function(a){return u.types[a]},
nD:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.t(a).$isp},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aK(a)
if(typeof t!=="string")throw H.e(H.P(a))
return t},
mP:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fA(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aW:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
ku:function(a,b){throw H.e(new P.bC(a,null,null))},
jx:function(a,b,c){var t,s
H.l6(a)
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.ku(a,c)
s=t[3]
if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.ku(a,c)},
kt:function(a,b){throw H.e(new P.bC("Invalid double",a,null))},
aX:function(a,b){var t,s
H.l6(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.kt(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.m3(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.kt(a,b)}return t},
dl:function(a){var t,s,r,q,p,o,n,m
t=J.t(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.C||!!J.t(a).$isb_){p=C.t(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.e.a8(q,0)===36)q=C.e.d6(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dI(H.iM(a),0,null),u.mangledGlobalNames)},
fw:function(a){return"Instance of '"+H.dl(a)+"'"},
S:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mN:function(a){return a.b?H.S(a).getUTCFullYear()+0:H.S(a).getFullYear()+0},
mL:function(a){return a.b?H.S(a).getUTCMonth()+1:H.S(a).getMonth()+1},
mH:function(a){return a.b?H.S(a).getUTCDate()+0:H.S(a).getDate()+0},
mI:function(a){return a.b?H.S(a).getUTCHours()+0:H.S(a).getHours()+0},
mK:function(a){return a.b?H.S(a).getUTCMinutes()+0:H.S(a).getMinutes()+0},
mM:function(a){return a.b?H.S(a).getUTCSeconds()+0:H.S(a).getSeconds()+0},
mJ:function(a){return a.b?H.S(a).getUTCMilliseconds()+0:H.S(a).getMilliseconds()+0},
jw:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.P(a))
return a[b]},
kx:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.P(a))
a[b]=c},
L:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ap(!0,b,"index",null)
t=J.dO(a)
if(b<0||C.b.cP(b,t))return P.B(b,a,"index",null,t)
return P.fx(b,"index",null)},
P:function(a){return new P.ap(!0,a,null,null)},
l6:function(a){if(typeof a!=="string")throw H.e(H.P(a))
return a},
e:function(a){var t
if(a==null)a=new P.bh()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.ll})
t.name=""}else t.toString=H.ll
return t},
ll:function(){return J.aK(this.dartException)},
D:function(a){throw H.e(a)},
F:function(a){throw H.e(new P.a2(a))},
av:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hd(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
he:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kK:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
js:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eO(a,s,t?null:b.receiver)},
Q:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.ja(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aS(r,16)&8191)===10)switch(q){case 438:return t.$1(H.js(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.dk(p,null))}}if(a instanceof TypeError){o=$.$get$kE()
n=$.$get$kF()
m=$.$get$kG()
l=$.$get$kH()
k=$.$get$kL()
j=$.$get$kM()
i=$.$get$kJ()
$.$get$kI()
h=$.$get$kO()
g=$.$get$kN()
f=o.N(s)
if(f!=null)return t.$1(H.js(s,f))
else{f=n.N(s)
if(f!=null){f.method="call"
return t.$1(H.js(s,f))}else{f=m.N(s)
if(f==null){f=l.N(s)
if(f==null){f=k.N(s)
if(f==null){f=j.N(s)
if(f==null){f=i.N(s)
if(f==null){f=l.N(s)
if(f==null){f=h.N(s)
if(f==null){f=g.N(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.dk(s,f==null?null:f.method))}}return t.$1(new H.hh(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dr()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ap(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dr()
return a},
az:function(a){var t
if(a==null)return new H.dF(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dF(a,null)},
nH:function(a){if(a==null||typeof a!='object')return J.ao(a)
else return H.aW(a)},
ns:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
nC:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dH(b,new H.iU(a))
case 1:return H.dH(b,new H.iV(a,d))
case 2:return H.dH(b,new H.iW(a,d,e))
case 3:return H.dH(b,new H.iX(a,d,e,f))
case 4:return H.dH(b,new H.iY(a,d,e,f,g))}throw H.e(P.cj("Unsupported number of arguments for wrapped closure"))},
b6:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.nC)
a.$identity=t
return t},
me:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.t(c).$isb){t.$reflectionInfo=c
r=H.mP(t).r}else r=c
q=d?Object.create(new H.fO().constructor.prototype):Object.create(new H.bu(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.k7(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.nu,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.k4:H.jl
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.k7(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
mb:function(a,b,c,d){var t=H.jl
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
k7:function(a,b,c){var t,s,r,q
if(c)return H.md(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.mb(s,b==null?r!=null:b!==r,t,b)
return q},
mc:function(a,b,c,d){var t,s
t=H.jl
s=H.k4
switch(b?-1:a){case 0:throw H.e(new H.fF("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
md:function(a,b){var t,s,r,q
H.ma()
t=$.k3
if(t==null){t=H.k2("receiver")
$.k3=t}s=b.$stubName
r=b.length
q=a[s]
t=H.mc(r,b==null?q!=null:b!==q,s,b)
return t},
jG:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.t(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.me(a,b,t,!!d,e,f)},
jl:function(a){return a.a},
k4:function(a){return a.c},
ma:function(){var t=$.k5
if(t==null){t=H.k2("self")
$.k5=t}return t},
k2:function(a){var t,s,r,q,p
t=new H.bu("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
o7:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aw(a,"String"))},
Z:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aw(a,"double"))},
o6:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aw(a,"num"))},
nk:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aw(a,"bool"))},
nB:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aw(a,"int"))},
nJ:function(a,b){throw H.e(H.aw(a,b.substring(3)))},
nI:function(a,b){var t=J.a_(b)
throw H.e(H.k6(H.dl(a),t.aD(b,3,t.gj(b))))},
jJ:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.t(a)[b])return a
H.nJ(a,b)},
aA:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.t(a)[b]
else t=!0
if(t)return a
H.nI(a,b)},
o5:function(a){if(a==null)return a
if(!!J.t(a).$isb)return a
throw H.e(H.aw(a,"List"))},
l7:function(a){var t=J.t(a)
return"$S" in t?t.$S():null},
bq:function(a,b){var t
if(a==null)return!1
t=H.l7(a)
return t==null?!1:H.ld(t,b)},
o3:function(a,b){var t,s
if(a==null)return a
if($.jD)return a
$.jD=!0
try{if(H.bq(a,b))return a
t=H.aJ(b,null)
s=H.aw(a,t)
throw H.e(s)}finally{$.jD=!1}},
aw:function(a,b){return new H.hf("type '"+H.dl(a)+"' is not a subtype of type '"+b+"'")},
k6:function(a,b){return new H.dY("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
ak:function(a){if(!0===a)return!1
if(!!J.t(a).$isjo)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.aw(a,"bool"))},
ax:function(a){throw H.e(new H.hv(a))},
d:function(a){if(H.ak(a))throw H.e(new P.ca(null))},
nS:function(a){throw H.e(new P.e1(a))},
j2:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
lb:function(a){return u.getIsolateTag(a)},
K:function(a){return new H.aF(a,null)},
E:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iM:function(a){if(a==null)return
return a.$ti},
lc:function(a,b){return H.jN(a["$as"+H.f(b)],H.iM(a))},
al:function(a,b,c){var t,s
t=H.lc(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aI:function(a,b){var t,s
t=H.iM(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aJ:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dI(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aJ(t,b)
return H.n9(a,b)}return"unknown-reified-type"},
n9:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aJ(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aJ(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aJ(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.nr(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aJ(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
dI:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bS("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aJ(o,c)}return p?"":"<"+s.k(0)+">"},
iN:function(a){var t,s
if(a instanceof H.ba){t=H.l7(a)
if(t!=null)return H.aJ(t,null)}s=J.t(a).constructor.name
if(a==null)return s
return s+H.dI(a.$ti,0,null)},
jN:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jK(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jK(a,null,b)
return b},
c6:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iM(a)
s=J.t(a)
if(s[b]==null)return!1
return H.l4(H.jN(s[d],t),c)},
dJ:function(a,b,c,d){if(a==null)return a
if(H.c6(a,b,c,d))return a
throw H.e(H.k6(H.dl(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dI(c,0,null),u.mangledGlobalNames)))},
o0:function(a,b,c,d){if(a==null)return a
if(H.c6(a,b,c,d))return a
throw H.e(H.aw(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dI(c,0,null),u.mangledGlobalNames)))},
l4:function(a,b){var t,s,r,q,p
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
o1:function(a,b,c){return H.jK(a,b,H.lc(b,c))},
a0:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aV")return!0
if('func' in b)return H.ld(a,b)
if('func' in a)return b.name==="jo"||b.name==="o"
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
return H.l4(H.jN(o,t),r)},
l3:function(a,b,c){var t,s,r,q,p,o,n
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
ng:function(a,b){var t,s,r,q,p,o
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
ld:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
if(n===m){if(!H.l3(r,q,!1))return!1
if(!H.l3(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
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
if(!(H.a0(g,f)||H.a0(f,g)))return!1}}return H.ng(a.named,b.named)},
jK:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
o8:function(a){var t=$.jH
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
o4:function(a){return H.aW(a)},
o2:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nE:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.o))
t=$.jH.$1(a)
s=$.iJ[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iT[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.l2.$2(a,t)
if(t!=null){s=$.iJ[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iT[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.jL(r)
$.iJ[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iT[t]=r
return r}if(p==="-"){o=H.jL(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lf(a,r)
if(p==="*")throw H.e(new P.bW(t))
if(u.leafTags[t]===true){o=H.jL(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lf(a,r)},
lf:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.j1(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
jL:function(a){return J.j1(a,!1,null,!!a.$isp)},
nG:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.j1(t,!1,null,!!t.$isp)
else return J.j1(t,c,null,null)},
nz:function(){if(!0===$.jI)return
$.jI=!0
H.nA()},
nA:function(){var t,s,r,q,p,o,n,m
$.iJ=Object.create(null)
$.iT=Object.create(null)
H.ny()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lg.$1(p)
if(o!=null){n=H.nG(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
ny:function(){var t,s,r,q,p,o,n
t=C.H()
t=H.bp(C.E,H.bp(C.J,H.bp(C.r,H.bp(C.r,H.bp(C.I,H.bp(C.F,H.bp(C.G(C.t),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jH=new H.iQ(p)
$.l2=new H.iR(o)
$.lg=new H.iS(n)},
bp:function(a,b){return a(b)||b},
kq:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.e(new P.bC("Illegal RegExp pattern ("+String(q)+")",a,null))},
n5:function(a,b){var t=new H.i9(a,b)
t.dC(a,b)
return t},
nN:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
nP:function(a,b,c,d){var t,s,r
t=b.dP(a,d)
if(t==null)return a
s=t.b
r=s.index
return H.nR(a,r,r+s[0].length,c)},
nO:function(a,b,c){var t,s
t=b.gbN()
t.lastIndex=0
s=a.replace(t,c.replace(/\$/g,"$$$$"))
return s},
nQ:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.nP(a,b,c,d)},
nR:function(a,b,c,d){var t,s
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fA:function fA(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hd:function hd(a,b,c,d,e,f){var _=this
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
hh:function hh(a){this.a=a},
ja:function ja(a){this.a=a},
dF:function dF(a,b){this.a=a
this.b=b},
iU:function iU(a){this.a=a},
iV:function iV(a,b){this.a=a
this.b=b},
iW:function iW(a,b,c){this.a=a
this.b=b
this.c=c},
iX:function iX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iY:function iY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ba:function ba(){},
h0:function h0(){},
fO:function fO(){},
bu:function bu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hf:function hf(a){this.a=a},
dY:function dY(a){this.a=a},
fF:function fF(a){this.a=a},
hv:function hv(a){this.a=a},
aF:function aF(a,b){this.a=a
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
iQ:function iQ(a){this.a=a},
iR:function iR(a){this.a=a},
iS:function iS(a){this.a=a},
eM:function eM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i9:function i9(a,b){this.a=a
this.b=b},
C:function(a){return a},
iA:function(a){var t,s,r
if(!!J.t(a).$ism)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bJ:function bJ(){},
bg:function bg(){},
f5:function f5(){},
dd:function dd(){},
de:function de(){},
df:function df(){},
dc:function dc(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
dg:function dg(){},
fc:function fc(){},
bK:function bK(){},
bL:function bL(){},
bM:function bM(){},
bN:function bN(){},
nr:function(a){var t=H.E(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
br:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
t:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d7.prototype
return J.d6.prototype}if(typeof a=="string")return J.aR.prototype
if(a==null)return J.d8.prototype
if(typeof a=="boolean")return J.eL.prototype
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.o)return a
return J.iL(a)},
j1:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iL:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jI==null){H.nz()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.bW("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jr()]
if(p!=null)return p
p=H.nE(a)
if(p!=null)return p
if(typeof a=="function")return C.K
s=Object.getPrototypeOf(a)
if(s==null)return C.w
if(s===Object.prototype)return C.w
if(typeof q=="function"){Object.defineProperty(q,$.$get$jr(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
kp:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
mC:function(a,b){var t,s
for(t=a.length;b<t;){s=C.e.a8(a,b)
if(s!==32&&s!==13&&!J.kp(s))break;++b}return b},
mD:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.e.c6(a,t)
if(s!==32&&s!==13&&!J.kp(s))break}return b},
a_:function(a){if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.o)return a
return J.iL(a)},
b7:function(a){if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.o)return a
return J.iL(a)},
la:function(a){if(typeof a=="number")return J.be.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.b_.prototype
return a},
nt:function(a){if(typeof a=="number")return J.be.prototype
if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.b_.prototype
return a},
iK:function(a){if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.b_.prototype
return a},
j:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.o)return a
return J.iL(a)},
y:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.t(a).w(a,b)},
an:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.la(a).aB(a,b)},
lm:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.la(a).an(a,b)},
b8:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nD(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a_(a).h(a,b)},
ln:function(a,b,c){return J.b7(a).i(a,b,c)},
lo:function(a,b,c,d){return J.j(a).dF(a,b,c,d)},
jO:function(a,b){return J.iK(a).a8(a,b)},
bs:function(a,b){return J.j(a).dX(a,b)},
lp:function(a,b,c){return J.j(a).dY(a,b,c)},
jP:function(a,b){return J.j(a).bU(a,b)},
jb:function(a,b){return J.j(a).O(a,b)},
jQ:function(a,b,c){return J.j(a).bX(a,b,c)},
lq:function(a,b){return J.j(a).eb(a,b)},
dK:function(a,b,c){return J.j(a).bY(a,b,c)},
jc:function(a,b,c){return J.j(a).bZ(a,b,c)},
dL:function(a,b,c){return J.j(a).c_(a,b,c)},
dM:function(a,b){return J.j(a).ee(a,b)},
lr:function(a,b){return J.j(a).c0(a,b)},
ls:function(a,b,c){return J.j(a).c1(a,b,c)},
jR:function(a,b,c,d){return J.j(a).c2(a,b,c,d)},
lt:function(a,b){return J.j(a).c3(a,b)},
lu:function(a,b){return J.b7(a).c4(a,b)},
lv:function(a,b,c,d,e){return J.j(a).c5(a,b,c,d,e)},
lw:function(a,b){return J.nt(a).P(a,b)},
jd:function(a,b,c){return J.a_(a).ej(a,b,c)},
je:function(a){return J.j(a).c8(a)},
lx:function(a){return J.j(a).c9(a)},
ly:function(a){return J.j(a).ca(a)},
lz:function(a){return J.j(a).cc(a)},
lA:function(a){return J.j(a).eo(a)},
lB:function(a,b){return J.j(a).ce(a,b)},
jf:function(a,b){return J.j(a).cf(a,b)},
lC:function(a,b,c,d){return J.j(a).cg(a,b,c,d)},
lD:function(a,b,c,d,e){return J.j(a).ew(a,b,c,d,e)},
lE:function(a,b,c,d,e){return J.j(a).ci(a,b,c,d,e)},
lF:function(a,b,c,d,e,f){return J.j(a).ex(a,b,c,d,e,f)},
lG:function(a,b){return J.b7(a).t(a,b)},
dN:function(a,b){return J.j(a).cj(a,b)},
lH:function(a,b){return J.j(a).ck(a,b)},
lI:function(a){return J.j(a).ey(a)},
lJ:function(a,b){return J.b7(a).av(a,b)},
jS:function(a,b,c,d,e,f){return J.j(a).cn(a,b,c,d,e,f)},
lK:function(a){return J.j(a).gea(a)},
ao:function(a){return J.t(a).gu(a)},
bt:function(a){return J.b7(a).gv(a)},
dO:function(a){return J.a_(a).gj(a)},
lL:function(a){return J.j(a).gb2(a)},
lM:function(a){return J.t(a).gA(a)},
lN:function(a){return J.j(a).geZ(a)},
lO:function(a){return J.j(a).gay(a)},
jg:function(a){return J.j(a).gm(a)},
jh:function(a){return J.j(a).gn(a)},
jT:function(a){return J.j(a).gK(a)},
ji:function(a,b){return J.j(a).a4(a,b)},
lP:function(a){return J.j(a).aA(a)},
lQ:function(a){return J.j(a).b9(a)},
lR:function(a,b){return J.j(a).ba(a,b)},
lS:function(a,b,c){return J.j(a).bb(a,b,c)},
jU:function(a,b,c){return J.j(a).be(a,b,c)},
lT:function(a,b){return J.j(a).co(a,b)},
lU:function(a,b){return J.b7(a).cq(a,b)},
lV:function(a){return J.b7(a).eT(a)},
lW:function(a,b){return J.j(a).E(a,b)},
lX:function(a,b,c){return J.j(a).d_(a,b,c)},
lY:function(a,b){return J.iK(a).d4(a,b)},
lZ:function(a,b,c,d){return J.j(a).bj(a,b,c,d)},
m_:function(a,b,c,d){return J.j(a).cv(a,b,c,d)},
dP:function(a,b,c,d){return J.j(a).cw(a,b,c,d)},
m0:function(a,b,c,d,e,f){return J.j(a).f_(a,b,c,d,e,f)},
m1:function(a){return J.iK(a).f2(a)},
aK:function(a){return J.t(a).k(a)},
m2:function(a,b,c,d){return J.j(a).f4(a,b,c,d)},
m3:function(a){return J.iK(a).f5(a)},
m4:function(a,b,c){return J.j(a).cz(a,b,c)},
m5:function(a,b,c){return J.j(a).cA(a,b,c)},
jj:function(a,b,c){return J.j(a).cB(a,b,c)},
m6:function(a,b,c){return J.j(a).cC(a,b,c)},
jV:function(a,b,c){return J.j(a).cD(a,b,c)},
jW:function(a,b,c){return J.j(a).cE(a,b,c)},
jX:function(a,b,c){return J.j(a).cF(a,b,c)},
jY:function(a,b,c,d){return J.j(a).cG(a,b,c,d)},
jZ:function(a,b,c,d){return J.j(a).cH(a,b,c,d)},
m7:function(a,b){return J.j(a).cJ(a,b)},
m8:function(a,b,c){return J.j(a).f6(a,b,c)},
k_:function(a,b,c,d,e,f,g){return J.j(a).cL(a,b,c,d,e,f,g)},
m9:function(a,b,c,d,e){return J.j(a).cM(a,b,c,d,e)},
a:function a(){},
eL:function eL(){},
d8:function d8(){},
bG:function bG(){},
fq:function fq(){},
b_:function b_(){},
aS:function aS(){},
aQ:function aQ(a){this.$ti=a},
jp:function jp(a){this.$ti=a},
dT:function dT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
be:function be(){},
d7:function d7(){},
d6:function d6(){},
aR:function aR(){}},P={
mW:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.nh()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.b6(new P.hx(t),1)).observe(s,{childList:true})
return new P.hw(t,s,r)}else if(self.setImmediate!=null)return P.ni()
return P.nj()},
mX:function(a){++u.globalState.f.b
self.scheduleImmediate(H.b6(new P.hy(a),0))},
mY:function(a){++u.globalState.f.b
self.setImmediate(H.b6(new P.hz(a),0))},
mZ:function(a){P.jy(C.o,a)},
nc:function(a,b){if(H.bq(a,{func:1,args:[P.aV,P.aV]})){b.toString
return a}else{b.toString
return a}},
mq:function(a,b,c){var t
if(a==null)a=new P.bh()
t=$.w
if(t!==C.d)t.toString
t=new P.O(0,t,null,[c])
t.bB(a,b)
return t},
mr:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.O(0,$.w,null,[P.b])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eD(t,!1,b,s)
try{for(m=0,l=0;m<1;++m){q=a[m]
p=l
q.b6(new P.eC(t,!1,b,s,p),r)
l=++t.b}if(l===0){l=new P.O(0,$.w,null,[null])
l.bA(C.u)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.Q(j)
n=H.az(j)
if(t.b===0||!1)return P.mq(o,n,null)
else{t.c=o
t.d=n}}return s},
kU:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.O))
H.d(b.a===0)
b.a=1
try{a.b6(new P.hS(b),new P.hT(b))}catch(r){t=H.Q(r)
s=H.az(r)
P.nK(new P.hU(b,t,s))}},
hR:function(a,b){var t,s,r,q
H.d(b.a<=1)
for(;t=a.a,s=t===2,s;){H.d(s)
a=a.c}s=b.a
if(t>=4){H.d(s<4)
r=b.c
b.c=null
q=b.ac(r)
H.d(b.a<4)
H.d(a.a>=4)
b.a=a.a
b.c=a.c
P.bl(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bO(q)}},
bl:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.iB(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bl(t.a,b)}s=t.a
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
P.iB(null,null,p,o,s)
return}s=$.w
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.w
H.d(l==null?s!=null:l!==s)
j=$.w
$.w=l
i=j}else i=null
s=b.c
if(s===8)new P.hZ(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.hY(r,b,m).$0()}else if((s&2)!==0)new P.hX(t,r,b).$0()
if(i!=null){H.d(!0)
$.w=i}s=r.b
if(!!J.t(s).$isbd){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.ac(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.hR(s,o)
return}}g=b.b
H.d(g.a<4)
h=g.c
g.c=null
b=g.ac(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.d(!o)
g.a=4
g.c=p}else{H.d(!o)
g.a=8
g.c=p}t.a=g
s=g}},
nb:function(){var t,s
for(;t=$.bn,t!=null;){$.c4=null
s=t.b
$.bn=s
if(s==null)$.c3=null
t.a.$0()}},
nf:function(){$.jE=!0
try{P.nb()}finally{$.c4=null
$.jE=!1
if($.bn!=null)$.$get$jA().$1(P.l5())}},
l0:function(a){var t=new P.dz(a,null)
if($.bn==null){$.c3=t
$.bn=t
if(!$.jE)$.$get$jA().$1(P.l5())}else{$.c3.b=t
$.c3=t}},
ne:function(a){var t,s,r
t=$.bn
if(t==null){P.l0(a)
$.c4=$.c3
return}s=new P.dz(a,null)
r=$.c4
if(r==null){s.b=t
$.c4=s
$.bn=s}else{s.b=r.b
r.b=s
$.c4=s
if(s.b==null)$.c3=s}},
nK:function(a){var t=$.w
if(C.d===t){P.bo(null,null,C.d,a)
return}t.toString
P.bo(null,null,t,t.aV(a))},
mT:function(a,b){var t=$.w
if(t===C.d){t.toString
return P.jy(a,b)}return P.jy(a,t.aV(b))},
jy:function(a,b){var t=C.b.H(a.a,1000)
return H.mS(t<0?0:t,b)},
jz:function(a){var t,s
H.d(a!=null)
t=$.w
H.d(a==null?t!=null:a!==t)
s=$.w
$.w=a
return s},
iB:function(a,b,c,d,e){var t={}
t.a=d
P.ne(new P.iC(t,e))},
kZ:function(a,b,c,d){var t,s
if($.w===c)return d.$0()
t=P.jz(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.w=s}},
l_:function(a,b,c,d,e){var t,s
if($.w===c)return d.$1(e)
t=P.jz(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.w=s}},
nd:function(a,b,c,d,e,f){var t,s
if($.w===c)return d.$2(e,f)
t=P.jz(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.w=s}},
bo:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.aV(d):c.ec(d)
P.l0(d)},
hx:function hx(a){this.a=a},
hw:function hw(a,b,c){this.a=a
this.b=b
this.c=c},
hy:function hy(a){this.a=a},
hz:function hz(a){this.a=a},
eD:function eD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eC:function eC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hD:function hD(){},
dA:function dA(a,b){this.a=a
this.$ti=b},
is:function is(a,b){this.a=a
this.$ti=b},
dC:function dC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
O:function O(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hO:function hO(a,b){this.a=a
this.b=b},
hW:function hW(a,b){this.a=a
this.b=b},
hS:function hS(a){this.a=a},
hT:function hT(a){this.a=a},
hU:function hU(a,b,c){this.a=a
this.b=b
this.c=c},
hQ:function hQ(a,b){this.a=a
this.b=b},
hV:function hV(a,b){this.a=a
this.b=b},
hP:function hP(a,b,c){this.a=a
this.b=b
this.c=c},
hZ:function hZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i_:function i_(a){this.a=a},
hY:function hY(a,b,c){this.a=a
this.b=b
this.c=c},
hX:function hX(a,b,c){this.a=a
this.b=b
this.c=c},
dz:function dz(a,b){this.a=a
this.b=b},
fS:function fS(){},
fU:function fU(a){this.a=a},
fV:function fV(a,b){this.a=a
this.b=b},
fT:function fT(){},
b9:function b9(a,b){this.a=a
this.b=b},
iz:function iz(){},
iC:function iC(a,b){this.a=a
this.b=b},
ic:function ic(){},
ie:function ie(a,b){this.a=a
this.b=b},
id:function id(a,b){this.a=a
this.b=b},
ig:function ig(a,b){this.a=a
this.b=b},
kr:function(a,b){return new H.ae(0,null,null,null,null,null,0,[a,b])},
I:function(){return new H.ae(0,null,null,null,null,null,0,[null,null])},
aU:function(a){return H.ns(a,new H.ae(0,null,null,null,null,null,0,[null,null]))},
c0:function(a,b){return new P.dD(0,null,null,null,null,null,0,[a,b])},
n3:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
mz:function(a,b,c){var t,s
if(P.jF(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$c5()
C.a.l(s,a)
try{P.na(a,t)}finally{H.d(C.a.gaZ(s)===a)
s.pop()}s=P.kC(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eJ:function(a,b,c){var t,s,r
if(P.jF(a))return b+"..."+c
t=new P.bS(b)
s=$.$get$c5()
C.a.l(s,a)
try{r=t
r.a=P.kC(r.ga1(),a,", ")}finally{H.d(C.a.gaZ(s)===a)
s.pop()}s=t
s.a=s.ga1()+c
s=t.ga1()
return s.charCodeAt(0)==0?s:s},
jF:function(a){var t,s
for(t=0;s=$.$get$c5(),t<s.length;++t)if(a===s[t])return!0
return!1},
na:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gv(a)
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
af:function(a,b,c,d){return new P.i4(0,null,null,null,null,null,0,[d])},
jt:function(a,b){var t,s
t=P.af(null,null,null,b)
for(s=J.bt(a);s.p();)t.l(0,s.gq())
return t},
mF:function(a){var t,s,r
t={}
if(P.jF(a))return"{...}"
s=new P.bS("")
try{C.a.l($.$get$c5(),a)
r=s
r.a=r.ga1()+"{"
t.a=!0
a.av(0,new P.eX(t,s))
t=s
t.a=t.ga1()+"}"}finally{t=$.$get$c5()
H.d(C.a.gaZ(t)===a)
t.pop()}t=s.ga1()
return t.charCodeAt(0)==0?t:t},
ju:function(a,b){var t=new P.eT(null,0,0,0,[b])
t.dk(a,b)
return t},
dD:function dD(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
i4:function i4(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
i5:function i5(a,b,c){this.a=a
this.b=b
this.c=c},
c_:function c_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i2:function i2(){},
d9:function d9(){},
v:function v(){},
eX:function eX(a,b){this.a=a
this.b=b},
eT:function eT(a,b,c,d,e){var _=this
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
fI:function fI(){},
fH:function fH(){},
bP:function bP(){},
kC:function(a,b,c){var t=J.bt(b)
if(!t.p())return a
if(c.length===0){do a+=H.f(t.gq())
while(t.p())}else{a+=H.f(t.gq())
for(;t.p();)a=a+c+H.f(t.gq())}return a},
mf:function(a,b){return J.lw(a,b)},
mg:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.f(t)
if(t>=10)return s+"00"+H.f(t)
return s+"000"+H.f(t)},
mh:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cd:function(a){if(a>=10)return""+a
return"0"+a},
mj:function(a,b,c,d,e,f){return new P.aB(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
jn:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aK(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mm(a)},
mm:function(a){var t=J.t(a)
if(!!t.$isba)return t.k(a)
return H.fw(a)},
jk:function(a){return new P.ap(!1,null,null,a)},
k0:function(a,b,c){return new P.ap(!0,a,b,c)},
fx:function(a,b,c){return new P.dn(null,null,!0,a,b,"Value not in range")},
aY:function(a,b,c,d,e){return new P.dn(b,c,!0,a,d,"Invalid value")},
ky:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.aY(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.aY(b,a,c,"end",f))
return b},
B:function(a,b,c,d,e){var t=e!=null?e:J.dO(b)
return new P.eG(b,t,!0,a,c,"Index out of range")},
cj:function(a){return new P.hN(a)},
ks:function(a,b,c){var t,s
t=H.E([],[c])
for(s=J.bt(a);s.p();)C.a.l(t,s.gq())
return t},
am:function(a){H.br(H.f(a))},
kz:function(a,b,c){return new H.eM(a,H.kq(a,!1,!0,!1),null,null)},
ay:function ay(){},
H:function H(){},
aO:function aO(a,b){this.a=a
this.b=b},
M:function M(){},
aB:function aB(a){this.a=a},
e8:function e8(){},
e9:function e9(){},
bc:function bc(){},
ca:function ca(a){this.a=a},
bh:function bh(){},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dn:function dn(a,b,c,d,e,f){var _=this
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
u:function u(a){this.a=a},
bW:function bW(a){this.a=a},
ag:function ag(a){this.a=a},
a2:function a2(a){this.a=a},
dr:function dr(){},
e1:function e1(a){this.a=a},
hN:function hN(a){this.a=a},
bC:function bC(a,b,c){this.a=a
this.b=b
this.c=c},
eb:function eb(a,b,c){this.a=a
this.b=b
this.$ti=c},
n:function n(){},
W:function W(){},
d5:function d5(){},
b:function b(){},
aE:function aE(){},
aV:function aV(){},
V:function V(){},
o:function o(){},
bR:function bR(){},
r:function r(){},
bS:function bS(a){this.a=a},
iH:function(a){var t,s,r,q,p
if(a==null)return
t=P.I()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.F)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
nn:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.lJ(a,new P.iE(t))
return t},
no:function(a){var t,s
t=new P.O(0,$.w,null,[null])
s=new P.dA(t,[null])
a.then(H.b6(new P.iF(s),1))["catch"](H.b6(new P.iG(s),1))
return t},
kf:function(){var t=$.ke
if(t==null){t=J.jd(window.navigator.userAgent,"Opera",0)
$.ke=t}return t},
mi:function(){var t,s
t=$.kb
if(t!=null)return t
s=$.kc
if(s==null){s=J.jd(window.navigator.userAgent,"Firefox",0)
$.kc=s}if(s)t="-moz-"
else{s=$.kd
if(s==null){s=!P.kf()&&J.jd(window.navigator.userAgent,"Trident/",0)
$.kd=s}if(s)t="-ms-"
else t=P.kf()?"-o-":"-webkit-"}$.kb=t
return t},
hs:function hs(){},
hu:function hu(a,b){this.a=a
this.b=b},
iE:function iE(a){this.a=a},
ht:function ht(a,b,c){this.a=a
this.b=b
this.c=c},
iF:function iF(a){this.a=a},
iG:function iG(a){this.a=a},
ib:function ib(){},
J:function J(){},
dQ:function dQ(){},
aL:function aL(){},
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
es:function es(){},
et:function et(){},
ey:function ey(){},
eA:function eA(){},
ad:function ad(){},
aD:function aD(){},
eF:function eF(){},
ar:function ar(){},
eP:function eP(){},
eY:function eY(){},
eZ:function eZ(){},
at:function at(){},
fg:function fg(){},
fn:function fn(){},
fs:function fs(){},
ft:function ft(){},
fy:function fy(){},
fz:function fz(){},
bQ:function bQ(){},
fW:function fW(){},
G:function G(){},
fX:function fX(){},
fY:function fY(){},
dt:function dt(){},
h1:function h1(){},
bU:function bU(){},
au:function au(){},
hb:function hb(){},
hj:function hj(){},
hl:function hl(){},
hm:function hm(){},
bY:function bY(){},
ih:function ih(){},
ii:function ii(){},
ij:function ij(){},
cu:function cu(){},
cs:function cs(){},
cz:function cz(){},
cD:function cD(){},
cN:function cN(){},
cW:function cW(){},
cS:function cS(){},
cU:function cU(){},
dU:function dU(){},
fC:function fC(){},
fD:function fD(){},
iw:function iw(){},
fN:function fN(){},
ct:function ct(){},
cQ:function cQ(){}},W={
nq:function(){return document},
mk:function(a,b,c){var t,s
t=document.body
s=(t&&C.i).M(t,a,b,c)
s.toString
t=new H.dy(new W.T(s),new W.iD(),[W.q])
return t.ga0(t)},
ml:function(a){return"wheel"},
bv:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lN(a)
if(typeof s==="string")t=a.tagName}catch(r){H.Q(r)}return t},
n_:function(a,b){return document.createElement(a)},
b5:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kX:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ai:function(a,b,c,d,e){var t=W.l1(new W.hM(c))
t=new W.hL(0,a,b,t,!1,[e])
t.dz(a,b,c,!1,e)
return t},
kV:function(a){var t,s
t=document.createElement("a")
s=new W.ik(t,window.location)
s=new W.bZ(s)
s.dA(a)
return s},
n1:function(a,b,c,d){return!0},
n2:function(a,b,c,d){var t,s,r,q,p
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
kY:function(){var t=P.r
t=new W.it(P.jt(C.k,t),P.af(null,null,null,t),P.af(null,null,null,t),P.af(null,null,null,t),null)
t.dD(null,new H.bH(C.k,new W.iu(),[H.aI(C.k,0),null]),["TEMPLATE"],null)
return t},
n8:function(a){var t
if(!!J.t(a).$isaP)return a
t=new P.ht([],[],!1)
t.c=!0
return t.b8(a)},
l1:function(a){var t=$.w
if(t===C.d)return a
return t.ed(a)},
l:function l(){},
dR:function dR(){},
dS:function dS(){},
a1:function a1(){},
dV:function dV(){},
cb:function cb(){},
aM:function aM(){},
cc:function cc(){},
dX:function dX(){},
aN:function aN(){},
e_:function e_(){},
z:function z(){},
bb:function bb(){},
e0:function e0(){},
e2:function e2(){},
e3:function e3(){},
ce:function ce(){},
aP:function aP(){},
cf:function cf(){},
e4:function e4(){},
cg:function cg(){},
e5:function e5(){},
ch:function ch(){},
ci:function ci(){},
e6:function e6(){},
e7:function e7(){},
a3:function a3(){},
iD:function iD(){},
k:function k(){},
h:function h(){},
a4:function a4(){},
ew:function ew(){},
ex:function ex(){},
eB:function eB(){},
a5:function a5(){},
co:function co(){},
eE:function eE(){},
bD:function bD(){},
cp:function cp(){},
cq:function cq(){},
bE:function bE(){},
bF:function bF(){},
aT:function aT(){},
eV:function eV(){},
f0:function f0(){},
f2:function f2(){},
bI:function bI(){},
a6:function a6(){},
f3:function f3(){},
N:function N(){},
fd:function fd(){},
T:function T(a){this.a=a},
q:function q(){},
dh:function dh(){},
bO:function bO(){},
fm:function fm(){},
fp:function fp(){},
a7:function a7(){},
fr:function fr(){},
fu:function fu(){},
fv:function fv(){},
dm:function dm(){},
fE:function fE(){},
dp:function dp(){},
fG:function fG(){},
fJ:function fJ(){},
a8:function a8(){},
fK:function fK(){},
a9:function a9(){},
fM:function fM(){},
aa:function aa(){},
fR:function fR(){},
X:function X(){},
ah:function ah(){},
ds:function ds(){},
fZ:function fZ(){},
h_:function h_(){},
bT:function bT(){},
ab:function ab(){},
Y:function Y(){},
h2:function h2(){},
h3:function h3(){},
h5:function h5(){},
ac:function ac(){},
aZ:function aZ(){},
h9:function h9(){},
ha:function ha(){},
bk:function bk(){},
hc:function hc(){},
dw:function dw(){},
aG:function aG(){},
hi:function hi(){},
hk:function hk(){},
hn:function hn(){},
ho:function ho(){},
b0:function b0(){},
bX:function bX(){},
hq:function hq(a){this.a=a},
hr:function hr(){},
b1:function b1(){},
hC:function hC(){},
dB:function dB(){},
hE:function hE(){},
hF:function hF(){},
hG:function hG(){},
i0:function i0(){},
i1:function i1(){},
dE:function dE(){},
il:function il(){},
ip:function ip(){},
iq:function iq(){},
ix:function ix(){},
iy:function iy(){},
hA:function hA(){},
hH:function hH(a){this.a=a},
hK:function hK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jB:function jB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hL:function hL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hM:function hM(a){this.a=a},
bZ:function bZ(a){this.a=a},
A:function A(){},
dj:function dj(a){this.a=a},
ff:function ff(a){this.a=a},
fe:function fe(a,b,c){this.a=a
this.b=b
this.c=c},
c1:function c1(){},
im:function im(){},
io:function io(){},
it:function it(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iu:function iu(){},
ir:function ir(){},
cl:function cl(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
di:function di(){},
ik:function ik(a,b){this.a=a
this.b=b},
dG:function dG(a){this.a=a},
iv:function iv(a){this.a=a},
bw:function bw(){},
bx:function bx(){},
by:function by(){},
bz:function bz(){},
bA:function bA(){},
bB:function bB(){},
cr:function cr(){},
cL:function cL(){},
cx:function cx(){},
cE:function cE(){},
cF:function cF(){},
cG:function cG(){},
cH:function cH(){},
cI:function cI(){},
cJ:function cJ(){},
cK:function cK(){},
cv:function cv(){},
cw:function cw(){},
cy:function cy(){},
cA:function cA(){},
cB:function cB(){},
cC:function cC(){},
cM:function cM(){},
cO:function cO(){},
cY:function cY(){},
cZ:function cZ(){},
cX:function cX(){},
d1:function d1(){},
d2:function d2(){},
d3:function d3(){},
d4:function d4(){},
cP:function cP(){},
cR:function cR(){},
cT:function cT(){},
cV:function cV(){},
d_:function d_(){},
d0:function d0(){}},B={
nL:function(a){var t,s
t=document
s=W.aT
W.ai(t,"keydown",new B.j3(),!1,s)
W.ai(t,"keyup",new B.j4(),!1,s)
if(!$.nM)W.ai(t,"mousemove",new B.j5(),!1,W.N)
s=W.N
W.ai(t,"mousedown",new B.j6(),!1,s)
W.ai(t,"mouseup",new B.j7(),!1,s)},
mG:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.C(3))
s=$.$get$iI()
r=$.$get$c7()
q=new T.as(new Float32Array(H.C(16)))
q.ao()
q=new B.fh(a,b,c,0,new T.x(t),-0.02,s,r,q,new T.x(new Float32Array(H.C(3))),new T.x(new Float32Array(H.C(3))),new T.x(new Float32Array(H.C(3))),new T.x(new Float32Array(H.C(3))),"camera:orbit",!1,!0)
q.dl(a,b,c,d)
return q},
j3:function j3(){},
j4:function j4(){},
j5:function j5(){},
j6:function j6(){},
j7:function j7(){},
fh:function fh(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
fi:function fi(a){this.a=a},
fj:function fj(a){this.a=a},
fk:function fk(){},
fl:function fl(a){this.a=a},
nF:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
t={}
s=document
r=new R.fQ(0,0,null,null,null,null)
r.dq(C.h.cR(s,"stats"),"blue","gray")
q=C.h.cr(s,"#webgl-canvas")
p=q.clientWidth
o=q.clientHeight
q.width=p
q.height=o
n=new G.dZ(null,q)
s=(q&&C.z).cQ(q,"webgl2",P.aU(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
n.a=s
if(s==null)H.D(P.cj('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
m="ChronosGL Config: "+J.aK(J.lP(s))
if($.l8>0)P.am("I: "+m)
J.lv(s,0,0,0,1)
J.dN(s,2929)
l=B.mG(15,-45,0.3,q)
s=new T.as(new Float32Array(H.C(16)))
s.ao()
m=new T.as(new Float32Array(H.C(16)))
m.ao()
k=new G.fo(l,50,1,0.1,2520,s,m,new T.as(new Float32Array(H.C(16))),P.I(),"perspective",!1,!0)
k.bu()
k.de(p,o)
m=$.$get$kD()
s=G.kP(n,"frame::color",p,o,32856,m)
m=G.kP(n,"frame::depth",p,o,33190,m)
j=new G.cm(n,null,s,m,null)
j.dh(n,s,m,null,!1)
i=G.kA("solid",n,$.$get$li(),$.$get$lh())
h=new G.bj("SSAOV",null,[],[],[],[],0,P.I())
h.bl(["aPosition","aTexUV"])
h.bo(["vTexUV"])
H.d(h.b==null)
h.b=h.aI(!0,["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"],null)
g=new G.bj("SSAOF",null,[],[],[],[],0,P.I())
g.bo(["vTexUV"])
g.aG(["uCanvasSize","uCameraNear","uCameraFar","uTexture","uDepthMap"])
f=$.n6
H.d(g.b==null)
g.b=g.aI(!1,[f],null)
e=[h,g]
d=G.kA("ssao",n,e[0],e[1])
c=new G.dx(P.I(),"plain",!1,!0)
c.J("uCameraNear",0.1)
c.J("uCameraFar",2529)
g=C.b.W(0,p)
h=C.b.W(0,o)
f=new Float32Array(H.C(2))
f[0]=g
f[1]=h
c.J("uCanvasSize",new T.R(f))
c.J("uDepthMap",m)
c.J("uTexture",s)
s=new T.x(new Float32Array(H.C(3)))
s.R(-1,-1,0)
m=new T.x(new Float32Array(H.C(3)))
m.R(1,-1,0)
f=new T.x(new Float32Array(H.C(3)))
f.R(1,1,0)
h=new T.x(new Float32Array(H.C(3)))
h.R(-1,1,0)
g=new Float32Array(H.C(2))
g[0]=0
g[1]=0
b=new Float32Array(H.C(2))
b[0]=1
b[1]=0
a=new Float32Array(H.C(2))
a[0]=1
a[1]=1
a0=new Float32Array(H.C(2))
a0[0]=0
a0[1]=1
a1=new T.x(new Float32Array(H.C(3)))
a1.R(0,0,1)
a2=new G.cn(!1,[],[],[],P.I())
a2.ap("aTexUV")
a2.bp([s,m,f,h])
a2.bm("aTexUV",[new T.R(g),new T.R(b),new T.R(a),new T.R(a0)])
a2.ap("aNormal")
a2.bn("aNormal",[a1,a1,a1,a1])
a3=G.kk("quad",d,a2)
t.a=null
a4=new G.f_(P.I(),"mat",!1,!0)
a4.J("cDepthTest",!0)
a4.J("cDepthWrite",!0)
a4.J("cBlendEquation",$.$get$k1())
a4.J("cStencilFunc",$.$get$kB())
a4.J("uColor",$.$get$k8())
a0=new Float32Array(H.C(16))
a=new T.as(a0)
a.ao()
b=Math.cos(1.5707963267948966)
g=Math.sin(1.5707963267948966)
h=a0[4]
f=a0[8]
m=a0[5]
s=a0[9]
a5=a0[6]
a6=a0[10]
a7=a0[7]
a8=a0[11]
a9=-g
a0[4]=h*b+f*g
a0[5]=m*b+s*g
a0[6]=a5*b+a6*g
a0[7]=a7*b+a8*g
a0[8]=h*a9+f*b
a0[9]=m*a9+s*b
a0[10]=a5*a9+a6*b
a0[11]=a7*a9+a8*b
a4.J("uModelMatrix",a)
t.b=0
P.mr([D.mE("../ct_logo.obj")],null,!1).b5(new B.j0(t,i,new B.j_(t,r,p,o,l,k,new G.cm(n,null,null,null,null),j,i,d,c,a3,a4)))},
j_:function j_(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
j0:function j0(a,b,c){this.a=a
this.b=b
this.c=c}},G={
mV:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.ai(t,"\n")},
kT:function(a,b,c){var t,s,r,q
t=J.j(a)
s=t.cb(a,b)
t.bh(a,s,c)
t.c7(a,s)
r=t.bd(a,s,35713)
if(r!=null&&!r){q=t.bc(a,s)
P.am("E:Compilation failed:")
P.am("E:"+G.mV(c))
P.am("E:Failure:")
P.am(C.e.W("E:",q))
throw H.e(q)}return s},
kj:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.jg(a[s])
b[t+1]=J.jh(a[s])
b[t+2]=J.jT(a[s])}return b},
mo:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.jg(a[s])
b[t+1]=J.jh(a[s])}return b},
mp:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.jg(a[s])
b[t+1]=J.jh(a[s])
b[t+2]=J.jT(a[s])
b[t+3]=J.lO(a[s])}return b},
mn:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.b8(a[s],0)
b[t+1]=J.b8(a[s],1)
b[t+2]=J.b8(a[s],2)
b[t+3]=J.b8(a[s],3)}return b},
n0:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gD(t),s=s.gv(s),r=b.x,q=[[P.b,P.n]],p=[P.M],o=[T.aH],n=[T.x],m=[T.R];s.p();){l=s.gq()
if(!r.C(0,l)){k="Dropping unnecessary attribute: "+H.f(l)
if($.l8>0)H.br("I: "+k)
continue}j=t.h(0,l)
switch($.$get$U().h(0,l).a){case"vec2":b.a7(l,G.mo(H.dJ(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.a7(l,G.kj(H.dJ(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.a7(l,G.mp(H.dJ(j,"$isb",o,"$asb"),null),4)
break
case"float":b.a7(l,new Float32Array(H.iA(H.dJ(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.a7(l,G.mn(H.dJ(j,"$isb",q,"$asb"),null),4)
break
default:if(H.ak(!1))H.ax("unknown type for "+H.f(l)+" ["+J.lM(j[0]).k(0)+"] ["+new H.aF(H.iN(j),null).k(0)+"] "+H.f(j))}}},
kk:function(a,b,c){var t,s,r,q,p,o,n,m
t=b.d
s=b.e.x
r=P.I()
q=J.lA(t.a)
p=new G.f1(t,q,4,r,s,null,0,-1,null,null,P.I(),"meshdata:"+a,!1,!0)
o=G.kj(c.d,null)
r.i(0,"aPosition",J.je(t.a))
p.ch=o
p.bq("aPosition",o,3)
n=$.$get$U().h(0,"aPosition")
if(n==null)H.D("Unknown canonical aPosition")
H.d(s.C(0,"aPosition"))
m=s.h(0,"aPosition")
J.dM(t.a,q)
t.cl(0,m,0)
s=r.h(0,"aPosition")
r=n.br()
J.dK(t.a,34962,s)
J.k_(t.a,m,r,5126,!1,0,0)
s=c.di()
p.y=J.je(t.a)
H.d(p.ch!=null)
r=p.ch.length
if(r<768){p.saN(new Uint8Array(H.iA(s)))
p.Q=5121}else if(r<196608){p.saN(new Uint16Array(H.iA(s)))
p.Q=5123}else{p.saN(new Uint32Array(H.iA(s)))
p.Q=5125}J.dM(t.a,q)
s=p.y
r=p.cx
q=J.t(r)
H.d(!!q.$iskQ||!!q.$iskR||!!q.$iskS)
J.dK(t.a,34963,s)
J.jR(t.a,34963,r,35048)
G.n0(c,p)
return p},
kA:function(a,b,c,d){var t=new G.fB(b,c,d,null,null,P.I(),P.I(),P.af(null,null,null,P.r),null,a,!1,!0)
t.dm(a,b,c,d)
return t},
kP:function(a,b,c,d,e,f){var t=new G.hg(c,d,e,b,J.lz(a.a),3553,a,f)
t.ds(a,b,c,d,e,f)
return t},
f4:function f4(){},
dx:function dx(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dW:function dW(){},
dZ:function dZ(a,b){this.a=a
this.b=b},
cm:function cm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eu:function eu(a,b,c){this.a=a
this.b=b
this.c=c},
ev:function ev(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cn:function cn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dv:function dv(a,b,c){this.a=a
this.b=b
this.c=c},
du:function du(a,b,c){this.a=a
this.b=b
this.c=c},
f_:function f_(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
f1:function f1(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
fo:function fo(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
fB:function fB(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
bj:function bj(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fL:function fL(){},
h4:function h4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bV:function bV(){},
hg:function hg(a,b,c,d,e,f,g,h){var _=this
_.f=a
_.r=b
_.x=c
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},R={fP:function fP(){},fQ:function fQ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},D={
mE:function(a){var t,s
t=new P.O(0,$.w,null,[null])
s=new XMLHttpRequest()
C.p.eR(s,"GET",a)
W.ai(s,"loadend",new D.eU(new P.dA(t,[null]),s),!1,W.nZ)
C.p.E(s,"")
return t},
eU:function eU(a,b){this.a=a
this.b=b}},A={
iO:function(a){var t,s
t=C.f.eA(a,0,new A.iP())
s=536870911&t+(C.b.cN(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iP:function iP(){}},T={
mU:function(a,b,c){var t=new Float32Array(3)
t[0]=a
t[1]=b
t[2]=c
return new T.x(t)},
as:function as(a){this.a=a},
R:function R(a){this.a=a},
x:function x(a){this.a=a},
aH:function aH(a){this.a=a}},Y={
ms:function(a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
t=new G.cn(!1,[],[],[],P.I())
t.ap("aTexUV")
t.ap("aNormal")
s=P.I()
r=a6.split("\n")
q=[]
p=[]
o=[]
n=Date.now()
m=P.kz("\\s+",!0,!1)
l=P.kz("\\s\\s*\\$",!0,!1)
for(k=r.length,j=0;j<r.length;r.length===k||(0,H.F)(r),++j){i=r[j]
i.toString
h=H.nO(i,m," ")
g=H.nQ(h,l,"",0)
if(g.length===0||g[0]==="#")continue
f=g.split(" ")
if(J.y(f[0],"g"))s.i(0,f[1],q.length)
else if(J.y(f[0],"v")){h=H.aX(f[1],null)
e=H.aX(f[2],null)
d=H.aX(f[3],null)
c=new Float32Array(3)
c[0]=h
c[1]=e
c[2]=d
C.a.l(q,new T.x(c))}else if(J.y(f[0],"vt")){h=H.aX(f[1],null)
e=H.aX(f[2],null)
d=new Float32Array(2)
d[0]=h
d[1]=e
C.a.l(o,new T.R(d))}else if(J.y(f[0],"vn")){h=H.aX(f[1],null)
e=H.aX(f[2],null)
d=H.aX(f[3],null)
c=new Float32Array(3)
c[0]=h
c[1]=e
c[2]=d
C.a.l(p,new T.x(c))}else if(J.y(f[0],"f")){h=f.length
if(h!==4&&h!==5){H.br("*** Error: face '"+g+"' not handled")
continue}b=[]
a=[]
a0=[]
for(a1=1;h=f.length,a1<h;++a1){a2=J.lY(f[a1],"/")
H.d(a2.length>0)
for(;a2.length<3;)C.a.l(a2,"")
a3=H.jx(a2[0],null,null)-1
a4=J.y(a2[1],"")?-1:H.jx(a2[1],null,null)-1
a5=J.y(a2[2],"")?-1:H.jx(a2[2],null,null)-1
if(a3<q.length)C.a.l(b,q[a3])
else C.a.l(b,new T.x(new Float32Array(3)))
if(a4!==-1&&a4<o.length)C.a.l(a0,o[a4])
else{H.br("problem uv "+a1+" "+a4)
C.a.l(a0,new T.R(new Float32Array(2)))}if(a5!==-1&&a5<p.length)C.a.l(a,p[a5])
else{H.br("problem normals "+a1+" "+a5)
C.a.l(a,new T.x(new Float32Array(3)))}}if(h===4)t.dd(b)
else t.bp(b)
t.bn("aNormal",a)
t.bm("aTexUV",a0)}}P.am("loaded ("+P.mj(0,0,0,Date.now()-new P.aO(n,!1).a,0,0).k(0)+") "+t.k(0))
return t}}
var v=[C,H,J,P,W,B,G,R,D,A,T,Y]
setFunctionNamesIfNecessary(v)
var $={}
H.jq.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gu:function(a){return H.aW(a)},
k:function(a){return H.fw(a)},
gA:function(a){return new H.aF(H.iN(a),null)}}
J.eL.prototype={
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gA:function(a){return C.a0},
$isay:1}
J.d8.prototype={
w:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
gA:function(a){return C.V}}
J.bG.prototype={
gu:function(a){return 0},
gA:function(a){return C.U},
k:function(a){return String(a)},
$isko:1}
J.fq.prototype={}
J.b_.prototype={}
J.aS.prototype={
k:function(a){var t=a[$.$get$ka()]
return t==null?this.d9(a):J.aK(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjo:1}
J.aQ.prototype={
aX:function(a,b){if(!!a.immutable$list)throw H.e(new P.u(b))},
aW:function(a,b){if(!!a.fixed$length)throw H.e(new P.u(b))},
l:function(a,b){this.aW(a,"add")
a.push(b)},
L:function(a,b){var t,s,r,q,p
t=a.length
this.aW(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.F)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.D(new P.a2(a)))
a.push(q)}},
cq:function(a,b){return new H.bH(a,b,[H.aI(a,0),null])},
ai:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
t:function(a,b){return a[b]},
gez:function(a){if(a.length>0)return a[0]
throw H.e(H.eK())},
gaZ:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.eK())},
bg:function(a,b,c,d,e){var t,s
this.aX(a,"setRange")
P.ky(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.D(P.aY(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.mA())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
bW:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.a2(a))}return!1},
d3:function(a,b){this.aX(a,"sort")
H.dq(a,0,a.length-1,P.np())},
aC:function(a){return this.d3(a,null)},
B:function(a,b){var t
for(t=0;t<a.length;++t)if(J.y(a[t],b))return!0
return!1},
k:function(a){return P.eJ(a,"[","]")},
gv:function(a){return new J.dT(a,a.length,0,null,[H.aI(a,0)])},
gu:function(a){return H.aW(a)},
gj:function(a){return a.length},
sj:function(a,b){this.aW(a,"set length")
if(b<0)throw H.e(P.aY(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.L(a,b))
if(b>=a.length||b<0)throw H.e(H.L(a,b))
return a[b]},
i:function(a,b,c){this.aX(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.L(a,b))
if(b>=a.length||b<0)throw H.e(H.L(a,b))
a[b]=c},
$ism:1,
$asm:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.jp.prototype={}
J.dT.prototype={
gq:function(){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.F(t))
r=this.c
if(r>=s){this.sbv(null)
return!1}this.sbv(t[r]);++this.c
return!0},
sbv:function(a){this.d=a}}
J.be.prototype={
P:function(a,b){var t
if(typeof b!=="number")throw H.e(H.P(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaw(b)
if(this.gaw(a)===t)return 0
if(this.gaw(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaw:function(a){return a===0?1/a<0:a<0},
ef:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.u(""+a+".ceil()"))},
a3:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.u(""+a+".round()"))},
eg:function(a,b,c){if(this.P(b,c)>0)throw H.e(H.P(b))
if(this.P(a,b)<0)return b
if(this.P(a,c)>0)return c
return a},
f3:function(a,b){var t
if(b>20)throw H.e(P.aY(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaw(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
W:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a+b},
a6:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a-b},
cO:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a/b},
F:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a*b},
aF:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bS(a,b)},
H:function(a,b){return(a|0)===a?a/b|0:this.bS(a,b)},
bS:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.u("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
aS:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cN:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return(a&b)>>>0},
dc:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return(a^b)>>>0},
an:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a<b},
aB:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a>b},
cP:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a>=b},
gA:function(a){return C.a3},
$isV:1}
J.d7.prototype={
gA:function(a){return C.a2},
$isM:1,
$isn:1,
$isV:1}
J.d6.prototype={
gA:function(a){return C.a1},
$isM:1,
$isV:1}
J.aR.prototype={
c6:function(a,b){if(b<0)throw H.e(H.L(a,b))
if(b>=a.length)H.D(H.L(a,b))
return a.charCodeAt(b)},
a8:function(a,b){if(b>=a.length)throw H.e(H.L(a,b))
return a.charCodeAt(b)},
W:function(a,b){if(typeof b!=="string")throw H.e(P.k0(b,null,null))
return a+b},
d4:function(a,b){var t=a.split(b)
return t},
d5:function(a,b,c){var t
if(c>a.length)throw H.e(P.aY(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bi:function(a,b){return this.d5(a,b,0)},
aD:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fx(b,null,null))
if(b>c)throw H.e(P.fx(b,null,null))
if(c>a.length)throw H.e(P.fx(c,null,null))
return a.substring(b,c)},
d6:function(a,b){return this.aD(a,b,null)},
f2:function(a){return a.toLowerCase()},
f5:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.a8(t,0)===133){r=J.mC(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.c6(t,q)===133?J.mD(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
ej:function(a,b,c){if(c>a.length)throw H.e(P.aY(c,0,a.length,null,null))
return H.nN(a,b,c)},
P:function(a,b){var t
if(typeof b!=="string")throw H.e(H.P(b))
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
gA:function(a){return C.W},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.L(a,b))
return a[b]},
$ism:1,
$asm:function(){},
$isr:1}
H.c.prototype={$asc:null}
H.bf.prototype={
gv:function(a){return new H.da(this,this.gj(this),0,null,[H.al(this,"bf",0)])},
az:function(a,b){return this.d8(0,b)},
f1:function(a,b){var t,s
t=H.E([],[H.al(this,"bf",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.t(0,s)
return t},
f0:function(a){return this.f1(a,!0)}}
H.da.prototype={
gq:function(){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.a_(t)
r=s.gj(t)
if(this.b!==r)throw H.e(new P.a2(t))
q=this.c
if(q>=r){this.saa(null)
return!1}this.saa(s.t(t,q));++this.c
return!0},
saa:function(a){this.d=a}}
H.db.prototype={
gv:function(a){return new H.eW(null,J.bt(this.a),this.b,this.$ti)},
gj:function(a){return J.dO(this.a)},
$asW:function(a,b){return[b]}}
H.ea.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.eW.prototype={
p:function(){var t=this.b
if(t.p()){this.saa(this.c.$1(t.gq()))
return!0}this.saa(null)
return!1},
gq:function(){return this.a},
saa:function(a){this.a=a},
$asd5:function(a,b){return[b]}}
H.bH.prototype={
gj:function(a){return J.dO(this.a)},
t:function(a,b){return this.b.$1(J.lG(this.a,b))},
$asc:function(a,b){return[b]},
$asbf:function(a,b){return[b]},
$asW:function(a,b){return[b]}}
H.dy.prototype={
gv:function(a){return new H.hp(J.bt(this.a),this.b,this.$ti)}}
H.hp.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq()))return!0
return!1},
gq:function(){return this.a.gq()}}
H.ck.prototype={}
H.j8.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.j9.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.i8.prototype={
seK:function(a){this.z=a},
seN:function(a){this.ch=a}}
H.b3.prototype={
bV:function(a,b){if(!this.f.w(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aU()},
eV:function(a){var t,s,r,q,p
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
if(q===r.c)r.bL();++r.d}this.y=!1}this.aU()},
e6:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.t(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eU:function(a){var t,s,r
if(this.ch==null)return
for(t=J.t(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.D(new P.u("removeRange"))
P.ky(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
d0:function(a,b){if(!this.r.w(0,a))return
this.db=b},
eE:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.E(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.ju(null,null)
this.cx=t}t.S(0,new H.i3(a,c))},
eD:function(a,b){var t
if(!this.r.w(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.ax()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.ju(null,null)
this.cx=t}t.S(0,this.geL())},
eF:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.am(a)
if(b!=null)P.am(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aK(a)
s[1]=b==null?null:b.k(0)
for(r=new P.c_(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.E(0,s)},
ae:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.Q(o)
p=H.az(o)
this.eF(q,p)
if(this.db){this.ax()
if(this===u.globalState.e)throw o}}finally{this.cy=H.nk(r)
u.globalState.d=H.jJ(t,"$isb3")
if(t!=null)$=t.geJ()
if(this.cx!=null)for(;n=this.cx,!n.gah(n);)this.cx.cs().$0()}return s},
cp:function(a){return this.b.h(0,a)},
bz:function(a,b){var t=this.b
if(t.C(0,a))throw H.e(P.cj("Registry: ports must be registered only once."))
t.i(0,a,b)},
aU:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.ax()},
ax:function(){var t,s,r
t=this.cx
if(t!=null)t.U(0)
for(t=this.b,s=t.gcK(t),s=s.gv(s);s.p();)s.gq().dI()
t.U(0)
this.c.U(0)
u.globalState.z.aj(0,this.a)
this.dx.U(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].E(0,t[r+1])
this.ch=null}},
geJ:function(){return this.d},
gek:function(){return this.e}}
H.i3.prototype={
$0:function(){this.a.E(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hI.prototype={
eq:function(){var t=this.a
if(t.b===t.c)return
return t.cs()},
cu:function(){var t,s,r
t=this.eq()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.C(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gah(s)}else s=!1
else s=!1
else s=!1
if(s)H.D(P.cj("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gah(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aU(["command","close"])
r=new H.aj(!0,new P.dD(0,null,null,null,null,null,0,[null,P.n])).I(r)
s.toString
self.postMessage(r)}return!1}t.eS()
return!0},
bQ:function(){if(self.window!=null)new H.hJ(this).$0()
else for(;this.cu(););},
ak:function(){var t,s,r,q,p
if(!u.globalState.x)this.bQ()
else try{this.bQ()}catch(r){t=H.Q(r)
s=H.az(r)
q=u.globalState.Q
p=P.aU(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.aj(!0,P.c0(null,P.n)).I(p)
q.toString
self.postMessage(p)}}}
H.hJ.prototype={
$0:function(){if(!this.a.cu())return
P.mT(C.o,this)},
$S:function(){return{func:1,v:true}}}
H.b4.prototype={
eS:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.ae(this.b)}}
H.i7.prototype={}
H.eH.prototype={
$0:function(){H.mw(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eI.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bq(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bq(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aU()},
$S:function(){return{func:1,v:true}}}
H.hB.prototype={}
H.bm.prototype={
E:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.n7(b)
if(t.gek()===s){s=J.a_(r)
switch(s.h(r,0)){case"pause":t.bV(s.h(r,1),s.h(r,2))
break
case"resume":t.eV(s.h(r,1))
break
case"add-ondone":t.e6(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eU(s.h(r,1))
break
case"set-errors-fatal":t.d0(s.h(r,1),s.h(r,2))
break
case"ping":t.eE(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eD(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.aj(0,s)
break}return}u.globalState.f.a.S(0,new H.b4(t,new H.ia(this,r),"receive"))},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bm){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.ia.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dE(0,this.b)},
$S:function(){return{func:1}}}
H.c2.prototype={
E:function(a,b){var t,s,r
t=P.aU(["command","message","port",this,"msg",b])
s=new H.aj(!0,P.c0(null,P.n)).I(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.c2){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.dc((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bi.prototype={
dI:function(){this.c=!0
this.b=null},
dE:function(a,b){if(this.c)return
this.b.$1(b)},
$ismO:1}
H.h6.prototype={
dr:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.S(0,new H.b4(s,new H.h7(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.b6(new H.h8(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.u("Timer greater than 0."))}}}
H.h7.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.h8.prototype={
$0:function(){this.a.c=null
H.iZ()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.aq.prototype={
gu:function(a){var t=this.a
t=C.b.aS(t,0)^C.b.H(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
w:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.aq){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.aj.prototype={
I:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.t(a)
if(!!t.$isbJ)return["buffer",a]
if(!!t.$isbg)return["typed",a]
if(!!t.$ism)return this.cW(a)
if(!!t.$ismt){r=this.gcT()
q=t.gD(a)
q=H.jv(q,r,H.al(q,"W",0),null)
q=P.ks(q,!0,H.al(q,"W",0))
t=t.gcK(a)
t=H.jv(t,r,H.al(t,"W",0),null)
return["map",q,P.ks(t,!0,H.al(t,"W",0))]}if(!!t.$isko)return this.cX(a)
if(!!t.$isa)this.cI(a)
if(!!t.$ismO)this.al(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbm)return this.cY(a)
if(!!t.$isc2)return this.cZ(a)
if(!!t.$isba){p=a.$static_name
if(p==null)this.al(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isaq)return["capability",a.a]
if(!(a instanceof P.o))this.cI(a)
return["dart",u.classIdExtractor(a),this.cV(u.classFieldsExtractor(a))]},
al:function(a,b){throw H.e(new P.u((b==null?"Can't transmit:":b)+" "+H.f(a)))},
cI:function(a){return this.al(a,null)},
cW:function(a){var t
H.d(typeof a!=="string")
t=this.cU(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.al(a,"Can't serialize indexable: ")},
cU:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.I(a[s])
return t},
cV:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.I(a[t]))
return a},
cX:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.al(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.I(a[t[r]])
return["js-object",t,s]},
cZ:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cY:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b2.prototype={
V:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.jk("Bad serialized message: "+H.f(a)))
switch(C.a.gez(a)){case"ref":H.d(J.y(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.d(J.y(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.d(J.y(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.d(J.y(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
s=H.E(this.ad(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.y(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.E(this.ad(t),[null])
case"mutable":H.d(J.y(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.ad(t)
case"const":H.d(J.y(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.E(this.ad(t),[null])
s.fixed$length=Array
return s
case"map":return this.eu(a)
case"sendport":return this.ev(a)
case"raw sendport":H.d(J.y(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.es(a)
case"function":H.d(J.y(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.y(a[0],"capability"))
return new H.aq(a[1])
case"dart":H.d(J.y(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.l(this.b,p)
this.ad(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.f(a))}},
ad:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.V(a[t]))
return a},
eu:function(a){var t,s,r,q,p
H.d(J.y(a[0],"map"))
t=a[1]
s=a[2]
r=P.I()
C.a.l(this.b,r)
t=J.lU(t,this.ger()).f0(0)
for(q=J.a_(s),p=0;p<t.length;++p)r.i(0,t[p],this.V(q.h(s,p)))
return r},
ev:function(a){var t,s,r,q,p,o,n
H.d(J.y(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cp(r)
if(o==null)return
n=new H.bm(o,s)}else n=new H.c2(t,r,s)
C.a.l(this.b,n)
return n},
es:function(a){var t,s,r,q,p,o
H.d(J.y(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.a_(t),p=J.a_(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.V(p.h(s,o))
return r}}
H.fA.prototype={}
H.hd.prototype={
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
H.hh.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.ja.prototype={
$1:function(a){if(!!J.t(a).$isbc)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dF.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.iU.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iV.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iW.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iX.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iY.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.ba.prototype={
k:function(a){return"Closure '"+H.dl(this).trim()+"'"},
$isjo:1,
gf7:function(){return this},
$D:null}
H.h0.prototype={}
H.fO.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bu.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bu))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.aW(this.a)
else s=typeof t!=="object"?J.ao(t):H.aW(t)
return(s^H.aW(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.fw(t)}}
H.hf.prototype={
k:function(a){return this.a}}
H.dY.prototype={
k:function(a){return this.a}}
H.fF.prototype={
k:function(a){return"RuntimeError: "+H.f(this.a)}}
H.hv.prototype={
k:function(a){return C.e.W("Assertion failed: ",P.jn(this.a))}}
H.aF.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.ao(this.a)},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aF){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ae.prototype={
gj:function(a){return this.a},
gah:function(a){return this.a===0},
gD:function(a){return new H.eR(this,[H.aI(this,0)])},
gcK:function(a){return H.jv(this.gD(this),new H.eN(this),H.aI(this,0),H.aI(this,1))},
C:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bI(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bI(s,b)}else return this.eG(b)},
eG:function(a){var t=this.d
if(t==null)return!1
return this.ag(this.as(t,this.af(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ab(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ab(r,b)
return s==null?null:s.b}else return this.eH(b)},
eH:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.as(t,this.af(a))
r=this.ag(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aO()
this.b=t}this.bx(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aO()
this.c=s}this.bx(s,b,c)}else{r=this.d
if(r==null){r=this.aO()
this.d=r}q=this.af(b)
p=this.as(r,q)
if(p==null)this.aR(r,q,[this.aP(b,c)])
else{o=this.ag(p,b)
if(o>=0)p[o].b=c
else p.push(this.aP(b,c))}}},
aj:function(a,b){if(typeof b==="string")return this.bP(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bP(this.c,b)
else return this.eI(b)},
eI:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.as(t,this.af(a))
r=this.ag(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bT(q)
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
if(s!==this.r)throw H.e(new P.a2(this))
t=t.c}},
bx:function(a,b,c){var t=this.ab(a,b)
if(t==null)this.aR(a,b,this.aP(b,c))
else t.b=c},
bP:function(a,b){var t
if(a==null)return
t=this.ab(a,b)
if(t==null)return
this.bT(t)
this.bJ(a,b)
return t.b},
aP:function(a,b){var t,s
t=new H.eQ(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bT:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
af:function(a){return J.ao(a)&0x3ffffff},
ag:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.y(a[s].a,b))return s
return-1},
k:function(a){return P.mF(this)},
ab:function(a,b){return a[b]},
as:function(a,b){return a[b]},
aR:function(a,b,c){H.d(c!=null)
a[b]=c},
bJ:function(a,b){delete a[b]},
bI:function(a,b){return this.ab(a,b)!=null},
aO:function(){var t=Object.create(null)
this.aR(t,"<non-identifier-key>",t)
this.bJ(t,"<non-identifier-key>")
return t},
$ismt:1}
H.eN.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.eQ.prototype={}
H.eR.prototype={
gj:function(a){return this.a.a},
gv:function(a){var t,s
t=this.a
s=new H.eS(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eS.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a2(t))
else{t=this.c
if(t==null){this.sbw(null)
return!1}else{this.sbw(t.a)
this.c=this.c.c
return!0}}},
sbw:function(a){this.d=a}}
H.iQ.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.iR.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.r]}}}
H.iS.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.r]}}}
H.eM.prototype={
k:function(a){return"RegExp/"+this.a+"/"},
gbN:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.kq(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
dP:function(a,b){var t,s
t=this.gbN()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return H.n5(this,s)}}
H.i9.prototype={
h:function(a,b){return this.b[b]},
dC:function(a,b){var t,s
t=this.b
s=t.input
H.d(typeof s==="string")
t=t.index
H.d(typeof t==="number"&&Math.floor(t)===t)}}
H.bJ.prototype={
gA:function(a){return C.N},
$isbJ:1}
H.bg.prototype={$isbg:1}
H.f5.prototype={
gA:function(a){return C.O}}
H.dd.prototype={
gj:function(a){return a.length},
$ism:1,
$asm:function(){},
$isp:1,
$asp:function(){}}
H.de.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.L(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.D(H.L(a,b))
a[b]=c}}
H.df.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.D(H.L(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.dc.prototype={
gA:function(a){return C.P},
$isc:1,
$asc:function(){return[P.M]},
$isb:1,
$asb:function(){return[P.M]},
$isez:1}
H.f6.prototype={
gA:function(a){return C.Q},
$isc:1,
$asc:function(){return[P.M]},
$isb:1,
$asb:function(){return[P.M]}}
H.f7.prototype={
gA:function(a){return C.R},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.L(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.f8.prototype={
gA:function(a){return C.S},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.L(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$iskl:1}
H.f9.prototype={
gA:function(a){return C.T},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.L(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.fa.prototype={
gA:function(a){return C.X},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.L(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$iskQ:1}
H.fb.prototype={
gA:function(a){return C.Y},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.L(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$iskR:1}
H.dg.prototype={
gA:function(a){return C.Z},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.L(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.fc.prototype={
gA:function(a){return C.a_},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.L(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$iskS:1}
H.bK.prototype={
$asm:function(){},
$isc:1,
$asc:function(){return[P.n]},
$asp:function(){},
$isb:1,
$asb:function(){return[P.n]}}
H.bL.prototype={
$asm:function(){},
$isc:1,
$asc:function(){return[P.M]},
$asp:function(){},
$isb:1,
$asb:function(){return[P.M]}}
H.bM.prototype={
$asm:function(){},
$asc:function(){return[P.M]},
$asp:function(){},
$asb:function(){return[P.M]}}
H.bN.prototype={
$asm:function(){},
$asc:function(){return[P.n]},
$asp:function(){},
$asb:function(){return[P.n]}}
P.hx.prototype={
$1:function(a){var t,s
H.iZ()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.hw.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hy.prototype={
$0:function(){H.iZ()
this.a.$0()},
$S:function(){return{func:1}}}
P.hz.prototype={
$0:function(){H.iZ()
this.a.$0()},
$S:function(){return{func:1}}}
P.eD.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.G(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.G(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.eC.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.e]=a
if(s===0)this.d.bH(r)}else if(t.b===0&&!this.b)this.d.G(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.hD.prototype={
ei:function(a,b){if(a==null)a=new P.bh()
if(this.a.a!==0)throw H.e(new P.ag("Future already completed"))
$.w.toString
this.G(a,b)},
eh:function(a){return this.ei(a,null)}}
P.dA.prototype={
au:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.ag("Future already completed"))
t.bA(b)},
G:function(a,b){this.a.bB(a,b)}}
P.is.prototype={
au:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.ag("Future already completed"))
t.aK(b)},
G:function(a,b){this.a.G(a,b)}}
P.dC.prototype={
eO:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.b4(this.d,a.a)},
eC:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bq(s,{func:1,args:[P.o,P.bR]}))return t.eW(s,a.a,a.b)
else return t.b4(s,a.a)}}
P.O.prototype={
b6:function(a,b){var t,s,r
t=$.w
if(t!==C.d){t.toString
if(b!=null)b=P.nc(b,t)}s=new P.O(0,t,null,[null])
r=b==null?1:3
this.by(new P.dC(null,s,r,a,b,[H.aI(this,0),null]))
return s},
b5:function(a){return this.b6(a,null)},
bD:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
by:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.jJ(this.c,"$isdC")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.by(a)
return}this.bD(t)}H.d(this.a>=4)
t=this.b
t.toString
P.bo(null,null,t,new P.hO(this,a))}},
bO:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.bO(a)
return}this.bD(s)}H.d(this.a>=4)
t.a=this.ac(a)
s=this.b
s.toString
P.bo(null,null,s,new P.hW(t,this))}},
aQ:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.ac(t)},
ac:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aK:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.c6(a,"$isbd",t,"$asbd"))if(H.c6(a,"$isO",t,null))P.hR(a,this)
else P.kU(a,this)
else{s=this.aQ()
H.d(this.a<4)
this.a=4
this.c=a
P.bl(this,s)}},
bH:function(a){var t
H.d(this.a<4)
H.d(!J.t(a).$isbd)
t=this.aQ()
H.d(this.a<4)
this.a=4
this.c=a
P.bl(this,t)},
G:function(a,b){var t
H.d(this.a<4)
t=this.aQ()
H.d(this.a<4)
this.a=8
this.c=new P.b9(a,b)
P.bl(this,t)},
dK:function(a){return this.G(a,null)},
bA:function(a){var t
H.d(this.a<4)
if(H.c6(a,"$isbd",this.$ti,"$asbd")){this.dH(a)
return}H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bo(null,null,t,new P.hQ(this,a))},
dH:function(a){var t
if(H.c6(a,"$isO",this.$ti,null)){if(a.a===8){H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bo(null,null,t,new P.hV(this,a))}else P.hR(a,this)
return}P.kU(a,this)},
bB:function(a,b){var t
H.d(this.a<4)
H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bo(null,null,t,new P.hP(this,a,b))},
$isbd:1,
gaT:function(){return this.a},
ge_:function(){return this.c}}
P.hO.prototype={
$0:function(){P.bl(this.a,this.b)},
$S:function(){return{func:1}}}
P.hW.prototype={
$0:function(){P.bl(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hS.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.aK(a)},
$S:function(){return{func:1,args:[,]}}}
P.hT.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.G(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hU.prototype={
$0:function(){this.a.G(this.b,this.c)},
$S:function(){return{func:1}}}
P.hQ.prototype={
$0:function(){this.a.bH(this.b)},
$S:function(){return{func:1}}}
P.hV.prototype={
$0:function(){P.hR(this.b,this.a)},
$S:function(){return{func:1}}}
P.hP.prototype={
$0:function(){this.a.G(this.b,this.c)},
$S:function(){return{func:1}}}
P.hZ.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.ct(q.d)}catch(n){s=H.Q(n)
r=H.az(n)
if(this.c){q=this.a.a
H.d(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.d(q.a===8)
p.b=q.c}else p.b=new P.b9(s,r)
p.a=!0
return}if(!!J.t(t).$isbd){if(t instanceof P.O&&t.gaT()>=4){if(t.gaT()===8){q=t
H.d(q.gaT()===8)
p=this.b
p.b=q.ge_()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.b5(new P.i_(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.i_.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.hY.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.b4(r.d,this.c)}catch(q){t=H.Q(q)
s=H.az(q)
r=this.a
r.b=new P.b9(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hX.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.eO(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eC(t)
p.a=!1}}catch(o){s=H.Q(o)
r=H.az(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.b9(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.dz.prototype={}
P.fS.prototype={
gj:function(a){var t,s
t={}
s=new P.O(0,$.w,null,[P.n])
t.a=0
this.eM(new P.fU(t),!0,new P.fV(t,s),s.gdJ())
return s}}
P.fU.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.fV.prototype={
$0:function(){this.b.aK(this.a.a)},
$S:function(){return{func:1}}}
P.fT.prototype={}
P.b9.prototype={
k:function(a){return H.f(this.a)},
$isbc:1}
P.iz.prototype={}
P.iC.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.bh()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.ic.prototype={
eX:function(a){var t,s,r
try{if(C.d===$.w){a.$0()
return}P.kZ(null,null,this,a)}catch(r){t=H.Q(r)
s=H.az(r)
P.iB(null,null,this,t,s)}},
eY:function(a,b){var t,s,r
try{if(C.d===$.w){a.$1(b)
return}P.l_(null,null,this,a,b)}catch(r){t=H.Q(r)
s=H.az(r)
P.iB(null,null,this,t,s)}},
ec:function(a){return new P.ie(this,a)},
aV:function(a){return new P.id(this,a)},
ed:function(a){return new P.ig(this,a)},
h:function(a,b){return},
ct:function(a){if($.w===C.d)return a.$0()
return P.kZ(null,null,this,a)},
b4:function(a,b){if($.w===C.d)return a.$1(b)
return P.l_(null,null,this,a,b)},
eW:function(a,b,c){if($.w===C.d)return a.$2(b,c)
return P.nd(null,null,this,a,b,c)}}
P.ie.prototype={
$0:function(){return this.a.ct(this.b)},
$S:function(){return{func:1}}}
P.id.prototype={
$0:function(){return this.a.eX(this.b)},
$S:function(){return{func:1}}}
P.ig.prototype={
$1:function(a){return this.a.eY(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dD.prototype={
af:function(a){return H.nH(a)&0x3ffffff},
ag:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.i4.prototype={
gv:function(a){var t=new P.c_(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
B:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dL(b)},
dL:function(a){var t=this.d
if(t==null)return!1
return this.ar(t[this.aq(a)],a)>=0},
cp:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.B(0,a)?a:null
else return this.dU(a)},
dU:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aq(a)]
r=this.ar(s,a)
if(r<0)return
return J.b8(s,r).gdN()},
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
if(t==null){t=P.n3()
this.d=t}s=this.aq(b)
r=t[s]
if(r==null){q=[this.aJ(b)]
H.d(q!=null)
t[s]=q}else{if(this.ar(r,b)>=0)return!1
r.push(this.aJ(b))}return!0},
aj:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bF(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bF(this.c,b)
else return this.dV(0,b)},
dV:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aq(b)]
r=this.ar(s,b)
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
t=this.aJ(b)
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
aJ:function(a){var t,s
t=new P.i5(a,null,null)
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
aq:function(a){return J.ao(a)&0x3ffffff},
ar:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.y(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.i5.prototype={
gdN:function(){return this.a}}
P.c_.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a2(t))
else{t=this.c
if(t==null){this.sa9(null)
return!1}else{this.sa9(t.a)
this.c=this.c.b
return!0}}},
sa9:function(a){this.d=a}}
P.i2.prototype={}
P.d9.prototype={}
P.v.prototype={
gv:function(a){return new H.da(a,this.gj(a),0,null,[H.al(a,"v",0)])},
t:function(a,b){return this.h(a,b)},
cq:function(a,b){return new H.bH(a,b,[H.al(a,"v",0),null])},
eA:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.e(new P.a2(a))}return s},
k:function(a){return P.eJ(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.eX.prototype={
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
gv:function(a){return new P.i6(this,this.c,this.d,this.b,null,this.$ti)},
gah:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t,s
t=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=t)H.D(P.B(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
U:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eJ(this,"{","}")},
cs:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.eK());++this.d
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
if(this.b===t)this.bL();++this.d},
bL:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.E(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bg(s,0,q,t,r)
C.a.bg(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbR(s)},
dk:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbR(H.E(t,[b]))},
sbR:function(a){this.a=a},
$asc:null}
P.i6.prototype={
gq:function(){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.D(new P.a2(t))
s=this.d
if(s===this.b){this.sa9(null)
return!1}this.sa9(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sa9:function(a){this.e=a}}
P.fI.prototype={
L:function(a,b){var t
for(t=J.bt(b);t.p();)this.l(0,t.gq())},
k:function(a){return P.eJ(this,"{","}")},
$isc:1,
$asc:null}
P.fH.prototype={}
P.bP.prototype={$isc:1,$asc:null,$isb:1,$asb:null}
P.ay.prototype={}
P.H.prototype={}
P.aO.prototype={
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.aO))return!1
return this.a===b.a&&this.b===b.b},
P:function(a,b){return C.b.P(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aS(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.mg(H.mN(this))
s=P.cd(H.mL(this))
r=P.cd(H.mH(this))
q=P.cd(H.mI(this))
p=P.cd(H.mK(this))
o=P.cd(H.mM(this))
n=P.mh(H.mJ(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
geP:function(){return this.a},
df:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.e(P.jk("DateTime is outside valid range: "+this.geP()))},
$isH:1,
$asH:function(){return[P.aO]}}
P.M.prototype={$isH:1,
$asH:function(){return[P.V]}}
P.aB.prototype={
an:function(a,b){return C.b.an(this.a,b.gdM())},
aB:function(a,b){return C.b.aB(this.a,b.gdM())},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.aB))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
P:function(a,b){return C.b.P(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.e9()
s=this.a
if(s<0)return"-"+new P.aB(0-s).k(0)
r=t.$1(C.b.H(s,6e7)%60)
q=t.$1(C.b.H(s,1e6)%60)
p=new P.e8().$1(s%1e6)
return""+C.b.H(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isH:1,
$asH:function(){return[P.aB]}}
P.e8.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.r,args:[P.n]}}}
P.e9.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.r,args:[P.n]}}}
P.bc.prototype={}
P.ca.prototype={
k:function(a){return"Assertion failed"}}
P.bh.prototype={
k:function(a){return"Throw of null."}}
P.ap.prototype={
gaM:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaL:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.f(t)
q=this.gaM()+s+r
if(!this.a)return q
p=this.gaL()
o=P.jn(this.b)
return q+p+": "+H.f(o)}}
P.dn.prototype={
gaM:function(){return"RangeError"},
gaL:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.eG.prototype={
gaM:function(){return"RangeError"},
gaL:function(){H.d(this.a)
if(J.lm(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gj:function(a){return this.f}}
P.u.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.bW.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.ag.prototype={
k:function(a){return"Bad state: "+this.a}}
P.a2.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.jn(t))+"."}}
P.dr.prototype={
k:function(a){return"Stack Overflow"},
$isbc:1}
P.e1.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hN.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.bC.prototype={
k:function(a){var t,s,r
t=this.a
s=t!=null&&""!==t?"FormatException: "+H.f(t):"FormatException"
r=this.b
if(typeof r!=="string")return s
if(r.length>78)r=C.e.aD(r,0,75)+"..."
return s+"\n"+r}}
P.eb.prototype={
k:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.D(P.k0(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.jw(b,"expando$values")
return s==null?null:H.jw(s,t)},
i:function(a,b,c){var t,s
t=this.b
if(typeof t!=="string")t.set(b,c)
else{s=H.jw(b,"expando$values")
if(s==null){s=new P.o()
H.kx(b,"expando$values",s)}H.kx(s,t,c)}}}
P.n.prototype={$isH:1,
$asH:function(){return[P.V]}}
P.W.prototype={
az:function(a,b){return new H.dy(this,b,[H.al(this,"W",0)])},
gj:function(a){var t,s
H.d(!this.$isc)
t=this.gv(this)
for(s=0;t.p();)++s
return s},
ga0:function(a){var t,s
t=this.gv(this)
if(!t.p())throw H.e(H.eK())
s=t.gq()
if(t.p())throw H.e(H.mB())
return s},
t:function(a,b){var t,s,r
if(b<0)H.D(P.aY(b,0,null,"index",null))
for(t=this.gv(this),s=0;t.p();){r=t.gq()
if(b===s)return r;++s}throw H.e(P.B(b,this,"index",null,s))},
k:function(a){return P.mz(this,"(",")")}}
P.d5.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.aE.prototype={}
P.aV.prototype={
gu:function(a){return P.o.prototype.gu.call(this,this)},
k:function(a){return"null"}}
P.V.prototype={$isH:1,
$asH:function(){return[P.V]}}
P.o.prototype={constructor:P.o,$iso:1,
w:function(a,b){return this===b},
gu:function(a){return H.aW(this)},
k:function(a){return H.fw(this)},
gA:function(a){return new H.aF(H.iN(this),null)},
toString:function(){return this.k(this)}}
P.bR.prototype={}
P.r.prototype={$isH:1,
$asH:function(){return[P.r]}}
P.bS.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga1:function(){return this.a}}
W.l.prototype={}
W.dR.prototype={
k:function(a){return String(a)},
$isa:1}
W.dS.prototype={
k:function(a){return String(a)},
$isa:1}
W.a1.prototype={$iso:1}
W.dV.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a1]},
$isc:1,
$asc:function(){return[W.a1]},
$isp:1,
$asp:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.cb.prototype={}
W.aM.prototype={$isa:1,$isaM:1}
W.cc.prototype={
cQ:function(a,b,c){var t=this.dQ(a,b,P.nn(c,null))
return t},
dQ:function(a,b,c){return a.getContext(b,c)}}
W.dX.prototype={
aA:function(a){return P.iH(a.getContextAttributes())}}
W.aN.prototype={$isa:1,
gj:function(a){return a.length}}
W.e_.prototype={$isa:1}
W.z.prototype={$iso:1}
W.bb.prototype={
bC:function(a,b){var t,s
t=$.$get$k9()
s=t[b]
if(typeof s==="string")return s
s=this.e3(a,b)
t[b]=s
return s},
e3:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mi()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.e0.prototype={}
W.e2.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.e3.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.ce.prototype={}
W.aP.prototype={
e7:function(a,b){return a.adoptNode(b)},
cR:function(a,b){return a.getElementById(b)},
cr:function(a,b){return a.querySelector(b)},
$isaP:1}
W.cf.prototype={$isa:1}
W.e4.prototype={
k:function(a){return String(a)}}
W.cg.prototype={
en:function(a,b){return a.createHTMLDocument(b)}}
W.e5.prototype={
gay:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.ch.prototype={
gay:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.ci.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.ga_(a))+" x "+H.f(this.gZ(a))},
w:function(a,b){var t
if(b==null)return!1
t=J.t(b)
if(!t.$isJ)return!1
return a.left===t.gb_(b)&&a.top===t.gb7(b)&&this.ga_(a)===t.ga_(b)&&this.gZ(a)===t.gZ(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga_(a)
q=this.gZ(a)
return W.kX(W.b5(W.b5(W.b5(W.b5(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gZ:function(a){return a.height},
gb_:function(a){return a.left},
gb7:function(a){return a.top},
ga_:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isJ:1,
$asJ:function(){}}
W.e6.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]},
$isp:1,
$asp:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
W.e7.prototype={
gj:function(a){return a.length}}
W.a3.prototype={
gea:function(a){return new W.hH(a)},
k:function(a){return a.localName},
M:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kh
if(t==null){t=H.E([],[W.di])
s=new W.dj(t)
C.a.l(t,W.kV(null))
C.a.l(t,W.kY())
$.kh=s
d=s}else d=t
t=$.kg
if(t==null){t=new W.dG(d)
$.kg=t
c=t}else{t.a=d
c=t}}if($.aC==null){t=document
s=t.implementation
s=(s&&C.A).en(s,"")
$.aC=s
$.jm=s.createRange()
s=$.aC
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aC.head;(t&&C.B).O(t,r)}t=$.aC
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jJ(s,"$isaM")}t=$.aC
if(!!this.$isaM)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aC.body;(t&&C.i).O(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.B(C.M,a.tagName)){t=$.jm;(t&&C.x).cS(t,q)
t=$.jm
p=(t&&C.x).el(t,b)}else{q.innerHTML=b
p=$.aC.createDocumentFragment()
for(t=J.j(p);s=q.firstChild,s!=null;)t.O(p,s)}t=$.aC.body
if(q==null?t!=null:q!==t)J.lV(q)
c.bf(p)
C.h.e7(document,p)
return p},
em:function(a,b,c){return this.M(a,b,c,null)},
d2:function(a,b,c,d){a.textContent=null
this.O(a,this.M(a,b,c,d))},
d1:function(a,b){return this.d2(a,b,null,null)},
a4:function(a,b){return a.getAttribute(b)},
dW:function(a,b){return a.removeAttribute(b)},
d_:function(a,b,c){return a.setAttribute(b,c)},
$isa:1,
$iso:1,
$isa3:1,
$ish:1,
$isq:1,
geZ:function(a){return a.tagName}}
W.iD.prototype={
$1:function(a){return!!J.t(a).$isa3},
$S:function(){return{func:1,args:[,]}}}
W.k.prototype={}
W.h.prototype={
dF:function(a,b,c,d){return a.addEventListener(b,H.b6(c,1),!1)},
$iso:1,
$ish:1}
W.a4.prototype={$iso:1}
W.ew.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]},
$isp:1,
$asp:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.ex.prototype={
gj:function(a){return a.length}}
W.eB.prototype={
gj:function(a){return a.length}}
W.a5.prototype={$iso:1}
W.co.prototype={}
W.eE.prototype={
gj:function(a){return a.length}}
W.bD.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.q]},
$isc:1,
$asc:function(){return[W.q]},
$isp:1,
$asp:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.cp.prototype={}
W.cq.prototype={
fa:function(a,b,c,d,e,f){return a.open(b,c,d,f,e)},
eR:function(a,b,c){return a.open(b,c)},
E:function(a,b){return a.send(b)}}
W.bE.prototype={}
W.bF.prototype={$isa:1,$isa3:1,$isbF:1}
W.aT.prototype={$iso:1,$isaT:1}
W.eV.prototype={
k:function(a){return String(a)}}
W.f0.prototype={
gj:function(a){return a.length}}
W.f2.prototype={
f8:function(a,b,c){return a.send(b,c)},
E:function(a,b){return a.send(b)}}
W.bI.prototype={}
W.a6.prototype={$iso:1}
W.f3.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]},
$isp:1,
$asp:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.N.prototype={$iso:1,$isN:1}
W.fd.prototype={$isa:1}
W.T.prototype={
ga0:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.ag("No elements"))
if(s>1)throw H.e(new P.ag("More than one element"))
return t.firstChild},
L:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.j(s),p=0;p<r;++p)q.O(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.lp(t,c,C.v.h(t.childNodes,b))},
gv:function(a){var t=this.a.childNodes
return new W.cl(t,t.length,-1,null,[H.al(t,"A",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.v.h(this.a.childNodes,b)},
$asc:function(){return[W.q]},
$asd9:function(){return[W.q]},
$asb:function(){return[W.q]},
$asbP:function(){return[W.q]}}
W.q.prototype={
eT:function(a){var t=a.parentNode
if(t!=null)J.bs(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.d7(a):t},
O:function(a,b){return a.appendChild(b)},
dX:function(a,b){return a.removeChild(b)},
dY:function(a,b,c){return a.replaceChild(b,c)},
$iso:1,
$ish:1,
$isq:1,
gb2:function(a){return a.previousSibling}}
W.dh.prototype={
b3:function(a){return a.previousNode()}}
W.bO.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.q]},
$isc:1,
$asc:function(){return[W.q]},
$isp:1,
$asp:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.fm.prototype={$isa:1}
W.fp.prototype={
gj:function(a){return a.length}}
W.a7.prototype={$iso:1,
gj:function(a){return a.length}}
W.fr.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]},
$isp:1,
$asp:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.fu.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fv.prototype={
E:function(a,b){return a.send(b)}}
W.dm.prototype={
el:function(a,b){return a.createContextualFragment(b)},
cS:function(a,b){return a.selectNodeContents(b)}}
W.fE.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.dp.prototype={
E:function(a,b){return a.send(b)}}
W.fG.prototype={
gj:function(a){return a.length}}
W.fJ.prototype={$isa:1}
W.a8.prototype={$iso:1,$ish:1}
W.fK.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]},
$isp:1,
$asp:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.a9.prototype={$iso:1}
W.fM.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]},
$isp:1,
$asp:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.aa.prototype={$iso:1,
gj:function(a){return a.length}}
W.fR.prototype={
h:function(a,b){return this.bK(a,b)},
i:function(a,b,c){this.e2(a,b,c)},
av:function(a,b){var t,s
for(t=0;!0;++t){s=this.dT(a,t)
if(s==null)return
b.$2(s,this.bK(a,s))}},
gj:function(a){return a.length},
bK:function(a,b){return a.getItem(b)},
dT:function(a,b){return a.key(b)},
e2:function(a,b,c){return a.setItem(b,c)}}
W.X.prototype={$iso:1}
W.ah.prototype={}
W.ds.prototype={
M:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aE(a,b,c,d)
t=W.mk("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.T(s).L(0,new W.T(t))
return s}}
W.fZ.prototype={
M:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aE(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.y.M(t.createElement("table"),b,c,d)
t.toString
t=new W.T(t)
r=t.ga0(t)
r.toString
t=new W.T(r)
q=t.ga0(t)
s.toString
q.toString
new W.T(s).L(0,new W.T(q))
return s}}
W.h_.prototype={
M:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aE(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.y.M(t.createElement("table"),b,c,d)
t.toString
t=new W.T(t)
r=t.ga0(t)
s.toString
r.toString
new W.T(s).L(0,new W.T(r))
return s}}
W.bT.prototype={$isbT:1}
W.ab.prototype={$iso:1,$ish:1}
W.Y.prototype={$iso:1,$ish:1}
W.h2.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.Y]},
$isc:1,
$asc:function(){return[W.Y]},
$isp:1,
$asp:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.h3.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]},
$isp:1,
$asp:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.h5.prototype={
gj:function(a){return a.length}}
W.ac.prototype={$iso:1}
W.aZ.prototype={$iso:1,$isaZ:1}
W.h9.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]},
$isp:1,
$asp:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.ha.prototype={
gj:function(a){return a.length}}
W.bk.prototype={}
W.hc.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.dw.prototype={
b3:function(a){return a.previousNode()}}
W.aG.prototype={}
W.hi.prototype={
k:function(a){return String(a)},
$isa:1}
W.hk.prototype={
gj:function(a){return a.length}}
W.hn.prototype={
gj:function(a){return a.length}}
W.ho.prototype={
E:function(a,b){return a.send(b)}}
W.b0.prototype={
gep:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.u("deltaY is not supported"))},
$iso:1,
$isN:1,
$isb0:1}
W.bX.prototype={
ge9:function(a){var t,s
t=P.V
s=new P.O(0,$.w,null,[t])
this.dO(a)
this.dZ(a,W.l1(new W.hq(new P.is(s,[t]))))
return s},
dZ:function(a,b){return a.requestAnimationFrame(H.b6(b,1))},
dO:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.hq.prototype={
$1:function(a){this.a.au(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hr.prototype={$isa:1}
W.b1.prototype={$isa:1}
W.hC.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
w:function(a,b){var t,s,r
if(b==null)return!1
t=J.t(b)
if(!t.$isJ)return!1
s=a.left
r=t.gb_(b)
if(s==null?r==null:s===r){s=a.top
r=t.gb7(b)
if(s==null?r==null:s===r){s=a.width
r=t.ga_(b)
if(s==null?r==null:s===r){s=a.height
t=t.gZ(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){var t,s,r,q
t=J.ao(a.left)
s=J.ao(a.top)
r=J.ao(a.width)
q=J.ao(a.height)
return W.kX(W.b5(W.b5(W.b5(W.b5(0,t),s),r),q))},
$isJ:1,
$asJ:function(){},
gZ:function(a){return a.height},
gb_:function(a){return a.left},
gb7:function(a){return a.top},
ga_:function(a){return a.width}}
W.dB.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[P.J]},
$isc:1,
$asc:function(){return[P.J]},
$isp:1,
$asp:function(){return[P.J]},
$isb:1,
$asb:function(){return[P.J]}}
W.hE.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.z]},
$isc:1,
$asc:function(){return[W.z]},
$isp:1,
$asp:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]}}
W.hF.prototype={$isa:1}
W.hG.prototype={
gZ:function(a){return a.height},
ga_:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.i0.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]},
$isp:1,
$asp:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.i1.prototype={$isa:1}
W.dE.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.q]},
$isc:1,
$asc:function(){return[W.q]},
$isp:1,
$asp:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.il.prototype={$isa:1}
W.ip.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]},
$isp:1,
$asp:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.iq.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.X]},
$isc:1,
$asc:function(){return[W.X]},
$isp:1,
$asp:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.ix.prototype={$isa:1}
W.iy.prototype={$isa:1}
W.hA.prototype={
av:function(a,b){var t,s,r,q,p,o
for(t=this.gD(this),s=t.length,r=this.a,q=J.j(r),p=0;p<t.length;t.length===s||(0,H.F)(t),++p){o=t[p]
b.$2(o,q.a4(r,o))}},
gD:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.E([],[P.r])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
gdR:function(){return this.a}}
W.hH.prototype={
h:function(a,b){return J.ji(this.a,b)},
i:function(a,b,c){J.lX(this.a,b,c)},
gj:function(a){return this.gD(this).length}}
W.hK.prototype={
eM:function(a,b,c,d){return W.ai(this.a,this.b,a,!1,H.aI(this,0))}}
W.jB.prototype={}
W.hL.prototype={
e5:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lo(r,this.c,t,!1)}},
dz:function(a,b,c,d,e){this.e5()}}
W.hM.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bZ.prototype={
a2:function(a){return $.$get$kW().B(0,W.bv(a))},
T:function(a,b,c){var t,s,r
t=W.bv(a)
s=$.$get$jC()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dA:function(a){var t,s
t=$.$get$jC()
if(t.gah(t)){for(s=0;s<262;++s)t.i(0,C.L[s],W.nw())
for(s=0;s<12;++s)t.i(0,C.l[s],W.nx())}}}
W.A.prototype={
gv:function(a){return new W.cl(a,this.gj(a),-1,null,[H.al(a,"A",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.dj.prototype={
a2:function(a){return C.a.bW(this.a,new W.ff(a))},
T:function(a,b,c){return C.a.bW(this.a,new W.fe(a,b,c))}}
W.ff.prototype={
$1:function(a){return a.a2(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.fe.prototype={
$1:function(a){return a.T(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.c1.prototype={
a2:function(a){return this.a.B(0,W.bv(a))},
T:function(a,b,c){var t,s
t=W.bv(a)
s=this.c
if(s.B(0,H.f(t)+"::"+b))return this.d.e8(c)
else if(s.B(0,"*::"+b))return this.d.e8(c)
else{s=this.b
if(s.B(0,H.f(t)+"::"+b))return!0
else if(s.B(0,"*::"+b))return!0
else if(s.B(0,H.f(t)+"::*"))return!0
else if(s.B(0,"*::*"))return!0}return!1},
dD:function(a,b,c,d){var t,s,r
this.a.L(0,c)
t=b.az(0,new W.im())
s=b.az(0,new W.io())
this.b.L(0,t)
r=this.c
r.L(0,C.u)
r.L(0,s)}}
W.im.prototype={
$1:function(a){return!C.a.B(C.l,a)},
$S:function(){return{func:1,args:[,]}}}
W.io.prototype={
$1:function(a){return C.a.B(C.l,a)},
$S:function(){return{func:1,args:[,]}}}
W.it.prototype={
T:function(a,b,c){if(this.da(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ji(a,"template")==="")return this.e.B(0,b)
return!1}}
W.iu.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.ir.prototype={
a2:function(a){var t=J.t(a)
if(!!t.$isbQ)return!1
t=!!t.$isG
if(t&&W.bv(a)==="foreignObject")return!1
if(t)return!0
return!1},
T:function(a,b,c){if(b==="is"||C.e.bi(b,"on"))return!1
return this.a2(a)}}
W.cl.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbM(J.b8(this.a,t))
this.c=t
return!0}this.sbM(null)
this.c=s
return!1},
gq:function(){return this.d},
sbM:function(a){this.d=a}}
W.di.prototype={}
W.ik.prototype={}
W.dG.prototype={
bf:function(a){new W.iv(this).$2(a,null)},
at:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bs(t,a)}else J.bs(b,a)},
e1:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lK(a)
r=J.ji(s.gdR(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.Q(n)}p="element unprintable"
try{p=J.aK(a)}catch(n){H.Q(n)}try{o=W.bv(a)
this.e0(a,b,t,p,o,s,r)}catch(n){if(H.Q(n) instanceof P.ap)throw n
else{this.at(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
e0:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.at(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a2(a)){this.at(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.aK(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.T(a,"is",g)){this.at(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gD(f)
s=H.E(t.slice(0),[H.aI(t,0)])
for(r=f.gD(f).length-1,t=f.a,q=J.j(t);r>=0;--r){p=s[r]
if(!this.a.T(a,J.m1(p),q.a4(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.a4(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.a4(t,p)
q.dW(t,p)}}if(!!J.t(a).$isbT)this.bf(a.content)}}
W.iv.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.e1(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bs(r,a)}else J.bs(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lL(t)}catch(q){H.Q(q)
r=t
J.bs(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.q,W.q]}}}
W.bw.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.bx.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.by.prototype={$isc:1,
$asc:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.bz.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.bA.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.bB.prototype={$isc:1,
$asc:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.cr.prototype={}
W.cL.prototype={$isc:1,
$asc:function(){return[P.J]},
$isb:1,
$asb:function(){return[P.J]}}
W.cx.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cE.prototype={$isc:1,
$asc:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.cF.prototype={$isc:1,
$asc:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.cG.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.cH.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.cI.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.cJ.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cK.prototype={$isc:1,
$asc:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]}}
W.cv.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.cw.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.cy.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cA.prototype={$isc:1,
$asc:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.cB.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cC.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
W.cM.prototype={$isc:1,
$asc:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]}}
W.cO.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cY.prototype={$isc:1,
$asc:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.cZ.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cX.prototype={$isc:1,
$asc:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.d1.prototype={$isc:1,
$asc:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.d2.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.d3.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.d4.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
W.cP.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.cR.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.cT.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cV.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.d_.prototype={$isc:1,
$asc:function(){return[P.J]},
$isb:1,
$asb:function(){return[P.J]}}
W.d0.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
P.hs.prototype={
cm:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}C.a.l(t,a)
C.a.l(this.b,null)
return s},
b8:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.aO(s,!0)
r.df(s,!0)
return r}if(a instanceof RegExp)throw H.e(new P.bW("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.no(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.cm(a)
r=this.b
o=r[p]
t.a=o
if(o!=null)return o
o=P.I()
t.a=o
r[p]=o
this.eB(a,new P.hu(t,this))
return t.a}if(a instanceof Array){p=this.cm(a)
r=this.b
o=r[p]
if(o!=null)return o
n=J.a_(a)
m=n.gj(a)
o=this.c?new Array(m):a
r[p]=o
for(r=J.b7(o),l=0;C.b.an(l,m);++l)r.i(o,l,this.b8(n.h(a,l)))
return o}return a}}
P.hu.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.b8(b)
J.ln(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.iE.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.r,,]}}}
P.ht.prototype={
eB:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.iF.prototype={
$1:function(a){return this.a.au(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.iG.prototype={
$1:function(a){return this.a.eh(a)},
$S:function(){return{func:1,args:[,]}}}
P.ib.prototype={}
P.J.prototype={$asJ:null}
P.dQ.prototype={$isa:1}
P.aL.prototype={$isa:1}
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
P.em.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.en.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eo.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ep.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
P.eq.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.er.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
P.es.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.et.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ey.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eA.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ad.prototype={}
P.aD.prototype={$isa:1}
P.eF.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ar.prototype={$iso:1}
P.eP.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.eY.prototype={$isa:1}
P.eZ.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.at.prototype={$iso:1}
P.fg.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.fn.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fs.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ft.prototype={
gj:function(a){return a.length}}
P.fy.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fz.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bQ.prototype={$isa:1,$isbQ:1}
P.fW.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
P.G.prototype={
M:function(a,b,c,d){var t,s,r,q,p,o
t=H.E([],[W.di])
C.a.l(t,W.kV(null))
C.a.l(t,W.kY())
C.a.l(t,new W.ir())
c=new W.dG(new W.dj(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.i).em(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.T(q)
o=t.ga0(t)
for(t=J.j(p);r=o.firstChild,r!=null;)t.O(p,r)
return p},
$isa:1,
$isG:1}
P.fX.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fY.prototype={$isa:1}
P.dt.prototype={}
P.h1.prototype={$isa:1}
P.bU.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.au.prototype={$iso:1}
P.hb.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.hj.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hl.prototype={$isa:1}
P.hm.prototype={$isa:1}
P.bY.prototype={$isa:1}
P.ih.prototype={$isa:1}
P.ii.prototype={$isa:1}
P.ij.prototype={$isa:1}
P.cu.prototype={$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.cs.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
P.cz.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.cD.prototype={$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.cN.prototype={$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.cW.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.cS.prototype={$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.cU.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
P.dU.prototype={
gj:function(a){return a.length}}
P.fC.prototype={
bU:function(a,b){return a.activeTexture(b)},
bX:function(a,b,c){return a.attachShader(b,c)},
bY:function(a,b,c){return a.bindBuffer(b,c)},
bZ:function(a,b,c){return a.bindFramebuffer(b,c)},
c_:function(a,b,c){return a.bindTexture(b,c)},
c0:function(a,b){return a.blendEquation(b)},
c1:function(a,b,c){return a.blendFunc(b,c)},
c2:function(a,b,c,d){return a.bufferData(b,c,d)},
c3:function(a,b){return a.checkFramebufferStatus(b)},
c4:function(a,b){return a.clear(b)},
c5:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c7:function(a,b){return a.compileShader(b)},
c8:function(a){return a.createBuffer()},
c9:function(a){return a.createFramebuffer()},
ca:function(a){return a.createProgram()},
cb:function(a,b){return a.createShader(b)},
cc:function(a){return a.createTexture()},
ce:function(a,b){return a.depthMask(b)},
cf:function(a,b){return a.disable(b)},
cg:function(a,b,c,d){return a.drawArrays(b,c,d)},
ci:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cj:function(a,b){return a.enable(b)},
ck:function(a,b){return a.enableVertexAttribArray(b)},
cn:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aA:function(a){return P.iH(a.getContextAttributes())},
b9:function(a){return a.getError()},
ba:function(a,b){return a.getProgramInfoLog(b)},
bb:function(a,b,c){return a.getProgramParameter(b,c)},
bc:function(a,b){return a.getShaderInfoLog(b)},
bd:function(a,b,c){return a.getShaderParameter(b,c)},
be:function(a,b,c){return a.getUniformLocation(b,c)},
co:function(a,b){return a.linkProgram(b)},
bh:function(a,b,c){return a.shaderSource(b,c)},
bj:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cv:function(a,b,c,d){return a.texParameterf(b,c,d)},
cw:function(a,b,c,d){return a.texParameteri(b,c,d)},
cz:function(a,b,c){return a.uniform1f(b,c)},
cA:function(a,b,c){return a.uniform1fv(b,c)},
cB:function(a,b,c){return a.uniform1i(b,c)},
cC:function(a,b,c){return a.uniform1iv(b,c)},
cD:function(a,b,c){return a.uniform2fv(b,c)},
cE:function(a,b,c){return a.uniform3fv(b,c)},
cF:function(a,b,c){return a.uniform4fv(b,c)},
cG:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cH:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cJ:function(a,b){return a.useProgram(b)},
cL:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cM:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fD.prototype={
eb:function(a,b){return a.beginTransformFeedback(b)},
ee:function(a,b){return a.bindVertexArray(b)},
eo:function(a){return a.createVertexArray()},
ew:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ex:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
ey:function(a){return a.endTransformFeedback()},
f_:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
f4:function(a,b,c,d){this.e4(a,b,c,d)
return},
e4:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
f6:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bU:function(a,b){return a.activeTexture(b)},
bX:function(a,b,c){return a.attachShader(b,c)},
bY:function(a,b,c){return a.bindBuffer(b,c)},
bZ:function(a,b,c){return a.bindFramebuffer(b,c)},
c_:function(a,b,c){return a.bindTexture(b,c)},
c0:function(a,b){return a.blendEquation(b)},
c1:function(a,b,c){return a.blendFunc(b,c)},
c2:function(a,b,c,d){return a.bufferData(b,c,d)},
c3:function(a,b){return a.checkFramebufferStatus(b)},
c4:function(a,b){return a.clear(b)},
c5:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c7:function(a,b){return a.compileShader(b)},
c8:function(a){return a.createBuffer()},
c9:function(a){return a.createFramebuffer()},
ca:function(a){return a.createProgram()},
cb:function(a,b){return a.createShader(b)},
cc:function(a){return a.createTexture()},
ce:function(a,b){return a.depthMask(b)},
cf:function(a,b){return a.disable(b)},
cg:function(a,b,c,d){return a.drawArrays(b,c,d)},
ci:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cj:function(a,b){return a.enable(b)},
ck:function(a,b){return a.enableVertexAttribArray(b)},
cn:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aA:function(a){return P.iH(a.getContextAttributes())},
b9:function(a){return a.getError()},
ba:function(a,b){return a.getProgramInfoLog(b)},
bb:function(a,b,c){return a.getProgramParameter(b,c)},
bc:function(a,b){return a.getShaderInfoLog(b)},
bd:function(a,b,c){return a.getShaderParameter(b,c)},
be:function(a,b,c){return a.getUniformLocation(b,c)},
co:function(a,b){return a.linkProgram(b)},
bh:function(a,b,c){return a.shaderSource(b,c)},
bj:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cv:function(a,b,c,d){return a.texParameterf(b,c,d)},
cw:function(a,b,c,d){return a.texParameteri(b,c,d)},
cz:function(a,b,c){return a.uniform1f(b,c)},
cA:function(a,b,c){return a.uniform1fv(b,c)},
cB:function(a,b,c){return a.uniform1i(b,c)},
cC:function(a,b,c){return a.uniform1iv(b,c)},
cD:function(a,b,c){return a.uniform2fv(b,c)},
cE:function(a,b,c){return a.uniform3fv(b,c)},
cF:function(a,b,c){return a.uniform4fv(b,c)},
cG:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cH:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cJ:function(a,b){return a.useProgram(b)},
cL:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cM:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.iw.prototype={$isa:1}
P.fN.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return P.iH(this.dS(a,b))},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
dS:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.aE]},
$isb:1,
$asb:function(){return[P.aE]}}
P.ct.prototype={$isc:1,
$asc:function(){return[P.aE]},
$isb:1,
$asb:function(){return[P.aE]}}
P.cQ.prototype={$isc:1,
$asc:function(){return[P.aE]},
$isb:1,
$asb:function(){return[P.aE]}}
B.j3.prototype={
$1:function(a){$.$get$iI().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aT]}}}
B.j4.prototype={
$1:function(a){$.$get$iI().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aT]}}}
B.j5.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.nl=t
$.nm=C.b.a6(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jM=s-C.b.H(window.innerWidth,2)
$.le=-(t-C.b.H(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.N]}}}
B.j6.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.c8=t-C.b.H(window.innerWidth,2)
$.c9=-(s-C.b.H(window.innerHeight,2))
if(a.button===2)$.$get$c7().i(0,"right",!0)
else $.$get$c7().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.N]}}}
B.j7.prototype={
$1:function(a){if(a.button===2)$.$get$c7().i(0,"right",null)
else $.$get$c7().i(0,"left",null)},
$S:function(){return{func:1,args:[W.N]}}}
B.fh.prototype={
dl:function(a,b,c,d){var t
W.ai(d,W.nv().$1(d),new B.fi(this),!1,W.b0)
W.ai(d,"mousemove",new B.fj(this),!1,W.N)
t=W.aZ
W.ai(d,"touchstart",new B.fk(),!1,t)
W.ai(d,"touchmove",new B.fl(this),!1,t)
B.nL(null)}}
B.fi.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.a4.gep(a)*r.k3
if(C.c.a6(r.fy,t)>0)r.fy=H.Z(C.c.a6(r.fy,t))}catch(q){s=H.Q(q)
P.am(s)}},
$S:function(){return{func:1,args:[W.b0]}}}
B.fj.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.Z(t.go+C.b.a6($.jM,$.c8)*0.01)
s=t.id
r=$.c9
q=$.le
t.id=H.Z(s+(r-q)*0.01)
$.c8=$.jM
$.c9=q}},
$S:function(){return{func:1,args:[W.N]}}}
B.fk.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a3(t.clientX)
C.c.a3(t.clientY)
$.c8=s
C.c.a3(t.clientX)
$.c9=C.c.a3(t.clientY)},
$S:function(){return{func:1,args:[W.aZ]}}}
B.fl.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a3(t.clientX)
t=C.c.a3(t.clientY)
r=this.a
r.go=H.Z(r.go+C.b.a6(s,$.c8)*0.01)
r.id=H.Z(r.id+($.c9-t)*0.01)
$.c8=s
$.c9=t},
$S:function(){return{func:1,args:[W.aZ]}}}
G.f4.prototype={}
G.dx.prototype={
J:function(a,b){var t=this.d
if(H.ak(!t.C(0,a)))H.ax("uniform "+a+" already set")
t.i(0,a,b)},
bs:function(){return this.d},
k:function(a){var t,s,r,q
t=H.E(["{"+new H.aF(H.iN(this),null).k(0)+"}["+this.a+"]"],[P.r])
for(s=this.d,r=s.gD(s),r=r.gv(r);r.p();){q=r.gq()
C.a.l(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.ai(t,"\n")}}
G.dW.prototype={}
G.dZ.prototype={
cl:function(a,b,c){J.lH(this.a,b)
if(c>0)J.m8(this.a,b,c)}}
G.cm.prototype={
bk:function(a,b,c,d,e){var t,s
t=this.a
s=this.b
J.jc(t.a,36160,s)
H.d(d>0&&e>0)
J.m9(t.a,b,c,d,e)
if(a!==0)J.lu(t.a,a)},
dh:function(a,b,c,d,e){var t,s,r
t=this.a
s=J.lx(t.a)
this.b=s
J.jc(t.a,36160,s)
s=this.c
if(s!=null){s=s.b
J.jS(t.a,36160,36064,3553,s,0)}s=this.d
if(s!=null){s=s.b
J.jS(t.a,36160,36096,3553,s,0)}r=J.lt(t.a,36160)
s=r===36053
if(H.ak(s))H.ax("framebuffer error: "+H.f(r))
if(!s)throw H.e("Error Incomplete Framebuffer: "+H.f(r))
J.jc(t.a,36160,null)}}
G.eu.prototype={}
G.ev.prototype={}
G.cn.prototype={
ap:function(a){var t=this.e
H.d(!t.C(0,a))
H.d(C.e.bi(a,"a"))
switch($.$get$U().h(0,a).a){case"vec2":t.i(0,a,H.E([],[T.R]))
break
case"vec3":t.i(0,a,H.E([],[T.x]))
break
case"vec4":t.i(0,a,H.E([],[T.aH]))
break
case"float":t.i(0,a,H.E([],[P.M]))
break
case"uvec4":t.i(0,a,H.E([],[[P.b,P.n]]))
break
default:if(H.ak(!1))H.ax("unknown type for "+a)}},
dd:function(a){var t,s,r,q,p,o
H.d(a.length===3)
t=this.d
s=t.length
C.a.l(this.b,new G.eu(s,s+1,s+2))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.F)(a),++q){p=a[q]
o=new T.x(new Float32Array(3))
o.Y(p)
C.a.l(t,o)}},
bm:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.F)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.l(t,new T.R(o))}},
bn:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.F)(b),++q){p=b[q]
o=new T.x(new Float32Array(3))
o.Y(p)
r.l(t,o)}},
bp:function(a){var t,s,r,q,p,o
H.d(a.length===4)
t=this.d
s=t.length
C.a.l(this.c,new G.ev(s,s+1,s+2,s+3))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.F)(a),++q){p=a[q]
o=new T.x(new Float32Array(3))
o.Y(p)
C.a.l(t,o)}},
di:function(){var t,s,r,q,p,o,n,m,l,k
t=this.b
H.d(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.E(r,[P.n])
for(r=t.length,p=0,o=0;n=t.length,o<n;n===r||(0,H.F)(t),++o){m=t[o]
q[p]=m.a
q[p+1]=m.b
q[p+2]=m.c
p+=3}for(t=s.length,o=0;r=s.length,o<r;r===t||(0,H.F)(s),++o){l=s[o]
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
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gD(s),r=r.gv(r);r.p();){q=r.gq()
p=$.$get$U().h(0,q).a
C.a.l(t,H.f(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.ai(t," ")}}
G.dv.prototype={}
G.du.prototype={}
G.f_.prototype={}
G.f1.prototype={
bq:function(a,b,c){var t,s
if(C.e.a8(a,0)===105){if(H.ak(C.b.aF(b.length,c)===this.z))H.ax("ChangeAttribute "+this.z)}else H.d(C.b.aF(b.length,c)===(this.ch.length/3|0))
this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dK(t.a,34962,s)
J.jR(t.a,34962,b,35048)},
dj:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a7:function(a,b,c){var t,s,r,q,p,o
t=J.jO(a,0)===105
if(t&&this.z===0)this.z=C.b.aF(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.je(r.a))
this.bq(a,b,c)
q=$.$get$U().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.ak(p.C(0,a)))H.ax("unexpected attribute "+a)
o=p.h(0,a)
J.dM(r.a,this.e)
r.cl(0,o,t?1:0)
s=s.h(0,a)
p=q.br()
J.dK(r.a,34962,s)
J.k_(r.a,o,p,5126,!1,0,0)},
k:function(a){var t,s,r
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,t=t.gD(t),t=t.gv(t);t.p();){r=t.gq()
C.a.l(s,H.f(r)+":"+this.cy.h(0,r).length)}return"MESH["+this.a+"] "+C.a.ai(s,"  ")},
saN:function(a){this.cx=a}}
G.fo.prototype={
de:function(a,b){var t=C.b.cO(a,b)
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
t.a5(0,0,1/(p*s))
t.a5(1,1,1/p)
t.a5(2,2,(q+r)/o)
t.a5(3,2,-1)
t.a5(2,3,2*r*q/o)},
bs:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.x(new Float32Array(H.C(3)))
o.R(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.Y(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.t(n)
r=!!s.$isaH
k=r?s.gay(n):1
if(!!s.$isx){j=s.gm(n)
m=s.gn(n)
l=s.gK(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gK(n)
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
a3.Y(this.db)
a3.eQ(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fB.prototype={
dt:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gD(s),s=s.gv(s);s.p();){q=s.gq()
if(!t.C(0,q))C.a.l(r,q)}for(t=this.x,s=new P.c_(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.B(0,q))C.a.l(r,q)}return r},
dw:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gD(b),s=s.gv(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq()
switch(J.jO(n,0)){case 117:if(q.C(0,n)){m=b.h(0,n)
if(p.C(0,n))H.br("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$U().h(0,n)
if(l==null)H.D("unknown "+n)
H.d(q.C(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.jj(r.a,k,m)
else if(!!J.t(m).$iskl)J.m6(r.a,k,m)
break
case"float":if(l.c===0)J.m4(r.a,k,m)
else if(!!J.t(m).$isez)J.m5(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aA(m,"$isas").a
J.jZ(r.a,k,!1,j)}else if(!!J.t(m).$isez)J.jZ(r.a,k,!1,m)
else if(H.ak(!1))H.ax("bad unform: "+n)
break
case"mat3":if(l.c===0){j=C.D.gf9(H.aA(m,"$isnY"))
J.jY(r.a,k,!1,j)}else if(!!J.t(m).$isez)J.jY(r.a,k,!1,m)
else if(H.ak(!1))H.ax("bad unform: "+n)
break
case"vec4":if(l.c===0){j=H.aA(m,"$isaH").a
J.jX(r.a,k,j)}else J.jX(r.a,k,m)
break
case"vec3":if(l.c===0){j=H.aA(m,"$isx").a
J.jW(r.a,k,j)}else J.jW(r.a,k,m)
break
case"vec2":if(l.c===0){j=H.aA(m,"$isR").a
J.jV(r.a,k,j)}else J.jV(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.W(33984,this.ch)
J.jP(r.a,j)
j=H.aA(m,"$isbV").b
J.dL(r.a,3553,j)
j=this.ch
J.jj(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.W(33984,this.ch)
J.jP(r.a,j)
j=H.aA(m,"$isbV").b
J.dL(r.a,34067,j)
j=this.ch
J.jj(r.a,k,j)
this.ch=this.ch+1
break
default:H.br("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":if(J.y(m,!0))J.dN(r.a,2929)
else J.jf(r.a,2929)
break
case"cStencilFunc":H.aA(m,"$isdv")
j=m.a
if(j===1281)J.jf(r.a,2960)
else{J.dN(r.a,2960)
i=m.b
h=m.c
J.lZ(r.a,j,i,h)}break
case"cDepthWrite":J.lB(r.a,m)
break
case"cBlendEquation":H.aA(m,"$isdu")
j=m.a
if(j===1281)J.jf(r.a,3042)
else{J.dN(r.a,3042)
i=m.b
h=m.c
J.ls(r.a,i,h)
J.lr(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aB(1000*(s-new P.aO(t,!1).a)).k(0)},
dg:function(a,b,c){var t,s,r,q,p,o,n,m,l
Date.now()
t=this.d
s=this.r
J.m7(t.a,s)
this.ch=0
this.z.U(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.F)(b),++r){q=b[r]
this.dw(q.a,q.bs())}s=this.Q
s.U(0)
for(p=a.cy,p=p.gD(p),p=p.gv(p);p.p();)s.l(0,p.gq())
o=this.dt()
if(o.length!==0)P.am("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(o)))
s=a.d
p=a.e
J.dM(s.a,p)
n=this.e.f.length>0
p=a.f
s=a.dj()
m=a.Q
l=a.z
t.toString
if(n)J.lq(t.a,p)
if(m!==-1)if(l>1)J.lF(t.a,p,s,m,0,l)
else J.lE(t.a,p,s,m,0)
else if(l>1)J.lD(t.a,p,0,s,l)
else J.lC(t.a,p,0,s)
if(n)J.lI(t.a)},
aH:function(a,b){return this.dg(a,b,null)},
dm:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.e
r=s.b
q=this.f
p=q.b
o=s.f
n=J.ly(t.a)
m=G.kT(t.a,35633,r)
J.jQ(t.a,n,m)
l=G.kT(t.a,35632,p)
J.jQ(t.a,n,l)
if(o.length>0)J.m2(t.a,n,o,35980)
J.lT(t.a,n)
if(!J.lS(t.a,n,35714))H.D(J.lR(t.a,n))
this.r=n
this.sdG(0,P.jt(s.c,null))
for(s=s.d,r=s.length,p=this.y,k=0;k<s.length;s.length===r||(0,H.F)(s),++k){j=s[k]
o=this.r
p.i(0,j,J.jU(t.a,o,j))}for(s=q.d,r=s.length,k=0;k<s.length;s.length===r||(0,H.F)(s),++k){j=s[k]
q=this.r
p.i(0,j,J.jU(t.a,q,j))}},
sdG:function(a,b){this.x=b}}
G.i.prototype={
br:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.bj.prototype={
bl:function(a){var t,s,r,q,p
H.d(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.F)(a),++q){p=a[q]
H.d($.$get$U().C(0,p))
H.d(!C.a.B(s,p))
C.a.l(s,p)
r.i(0,p,this.r);++this.r}C.a.aC(s)},
aG:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.F)(a),++r){q=a[r]
if(H.ak($.$get$U().C(0,q)))H.ax("missing uniform "+q)
H.d(!C.a.B(s,q))
C.a.l(s,q)}C.a.aC(s)},
bo:function(a){var t,s,r
H.d(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.d($.$get$U().C(0,r))
H.d(!C.a.B(t,r))
C.a.l(t,r)}C.a.aC(t)},
dn:function(a,b){H.d(this.b==null)
this.b=this.aI(!0,a,b)},
bt:function(a){return this.dn(a,null)},
aI:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){n=t[o]
m=$.$get$U().h(0,n)
C.a.l(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){k=t[o]
m=$.$get$U().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){k=t[o]
m=$.$get$U().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){k=t[o]
m=$.$get$U().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.l(q,"")
if(a)C.a.l(q,"void main(void) {")
C.a.L(q,b)
if(a)C.a.l(q,"}")
return C.a.ai(q,"\n")}}
G.fL.prototype={}
G.h4.prototype={}
G.bV.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.hg.prototype={
k:function(a){return"TypedTexture["+this.a+", "+this.x+", "+H.f(this.f)+" X "+H.f(this.r)+"]"},
ds:function(a,b,c,d,e,f){var t,s,r,q,p
t=this.d
s=this.c
J.dL(t.a,s,this.b)
J.m0(t.a,3553,1,this.x,this.f,this.r)
r=this.e
q=r.e
if(q!==1)J.m_(t.a,s,34046,q)
q=r.r
J.dP(t.a,s,10240,q)
q=r.f
J.dP(t.a,s,10241,q)
if(r.b){J.dP(t.a,s,10242,33071)
J.dP(t.a,s,10243,33071)}p=J.lQ(t.a)
if(H.ak(p===0))H.ax("texture error "+H.f(p))
J.dL(t.a,s,null)}}
R.fP.prototype={
dB:function(a,b,c,d){var t,s,r,q,p
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
p=(r&&C.n).bC(r,"float")
r.setProperty(p,"left","")
p=C.n.bC(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.j.O(t,s)}return t},
dq:function(a,b,c){var t,s,r
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
J.jb(this.a,s)
r=this.dB(b,c,90,30)
this.d=r
J.jb(this.a,r)
t=t.createElement("div")
this.c=t
J.jb(this.a,t)}}
R.fQ.prototype={
dv:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.q.f3(s,2)+" fps"
t=this.c;(t&&C.j).d1(t,b)
r=C.b.H(30*C.q.ef(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.j).O(t,q)},
du:function(a){return this.dv(a,"")}}
D.eU.prototype={
$1:function(a){this.a.au(0,W.n8(this.b.response))},
$S:function(){return{func:1,args:[,]}}}
A.iP.prototype={
$2:function(a,b){var t=536870911&a+J.ao(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.n,P.o]}}}
T.as.prototype={
a5:function(a,b,c){H.d(a<4)
H.d(b<4)
this.a[b*4+a]=c},
Y:function(a){var t,s
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
k:function(a){return"[0] "+this.am(0).k(0)+"\n[1] "+this.am(1).k(0)+"\n[2] "+this.am(2).k(0)+"\n[3] "+this.am(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.as){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.iO(this.a)},
am:function(a){var t,s
t=new Float32Array(H.C(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aH(t)},
ao:function(){var t=this.a
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
eQ:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.R.prototype={
k:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.R){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.iO(this.a)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.x.prototype={
R:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
Y:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.x){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.iO(this.a)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
gj:function(a){return Math.sqrt(this.gb0())},
gb0:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
b1:function(a){var t,s,r
t=Math.sqrt(this.gb0())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
aY:function(a){var t,s
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
t=new T.x(new Float32Array(H.C(3)))
t.R(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gK:function(a){return this.a[2]}}
T.aH.prototype={
k:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aH){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.iO(this.a)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
gj:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gK:function(a){return this.a[2]},
gay:function(a){return this.a[3]}}
B.j_.prototype={
$1:function(b3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
t=this.a
t.b=b3+0
s=this.e
s.go=H.Z(s.go+0.001)
r=s.k4
if(r.h(0,37)!=null)s.go=H.Z(s.go+0.03)
else if(r.h(0,39)!=null)s.go=H.Z(s.go-0.03)
if(r.h(0,38)!=null)s.id=H.Z(s.id+0.03)
else if(r.h(0,40)!=null)s.id=H.Z(s.id-0.03)
if(r.h(0,33)!=null)s.fy=H.Z(s.fy*0.99)
else if(r.h(0,34)!=null)s.fy=H.Z(s.fy*1.01)
if(r.h(0,32)!=null){s.go=0
s.id=0}r=H.Z(C.c.eg(s.id,-1.4707963267948965,1.4707963267948965))
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
l=new T.x(new Float32Array(H.C(3)))
l.R(0,1,0)
k=s.e
j=k.a
j[0]=m[12]
j[1]=m[13]
j[2]=m[14]
j=new Float32Array(H.C(3))
i=new T.x(j)
i.Y(k)
j[0]=j[0]-p[0]
j[1]=j[1]-p[1]
j[2]=j[2]-p[2]
i.b1(0)
h=l.cd(i)
h.b1(0)
g=i.cd(h)
g.b1(0)
p=h.aY(k)
f=g.aY(k)
k=i.aY(k)
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
n=Math.sqrt(n.gb0())
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
s=this.y
r=this.f
q=this.cx
if($.$get$l9().checked){p=this.c
n=this.d
this.x.bk(17664,0,0,p,n)
s.aH(t.a,[r,q])
this.r.bk(17664,0,0,p,n)
this.z.aH(this.ch,[this.Q])}else s.aH(t.a,[r,q])
C.a5.ge9(window).b5(this)
this.b.du(b3)},
$S:function(){return{func:1,v:true,args:[P.V]}}}
B.j0.prototype={
$1:function(a){this.a.a=G.kk("",this.b,Y.ms(J.b8(a,0)))
this.c.$1(0)},
$S:function(){return{func:1,args:[P.b]}}}
J.a.prototype.d7=J.a.prototype.k
J.bG.prototype.d9=J.bG.prototype.k
P.W.prototype.d8=P.W.prototype.az
W.a3.prototype.aE=W.a3.prototype.M
W.c1.prototype.da=W.c1.prototype.T;(function installTearOffs(){installTearOff(H.b3.prototype,"geL",0,0,0,null,["$0"],["ax"],0)
installTearOff(H.aj.prototype,"gcT",0,0,0,null,["$1"],["I"],2)
installTearOff(H.b2.prototype,"ger",0,0,0,null,["$1"],["V"],2)
installTearOff(P,"nh",1,0,0,null,["$1"],["mX"],1)
installTearOff(P,"ni",1,0,0,null,["$1"],["mY"],1)
installTearOff(P,"nj",1,0,0,null,["$1"],["mZ"],1)
installTearOff(P,"l5",1,0,0,null,["$0"],["nf"],0)
installTearOff(P.O.prototype,"gdJ",0,0,0,null,["$2","$1"],["G","dK"],5)
installTearOff(P,"np",1,0,0,null,["$2"],["mf"],6)
installTearOff(W,"nv",1,0,0,null,["$1"],["ml"],7)
installTearOff(W,"nw",1,0,0,null,["$4"],["n1"],4)
installTearOff(W,"nx",1,0,0,null,["$4"],["n2"],4)
installTearOff(W.dh.prototype,"gb2",0,1,0,null,["$0"],["b3"],3)
installTearOff(W.dw.prototype,"gb2",0,1,0,null,["$0"],["b3"],3)
installTearOff(B,"lj",1,0,0,null,["$0"],["nF"],0)})();(function inheritance(){inherit(P.o,null)
var t=P.o
inherit(H.jq,t)
inherit(J.a,t)
inherit(J.dT,t)
inherit(P.W,t)
inherit(H.da,t)
inherit(P.d5,t)
inherit(H.ck,t)
inherit(H.ba,t)
inherit(H.i8,t)
inherit(H.b3,t)
inherit(H.hI,t)
inherit(H.b4,t)
inherit(H.i7,t)
inherit(H.hB,t)
inherit(H.bi,t)
inherit(H.h6,t)
inherit(H.aq,t)
inherit(H.aj,t)
inherit(H.b2,t)
inherit(H.fA,t)
inherit(H.hd,t)
inherit(P.bc,t)
inherit(H.dF,t)
inherit(H.aF,t)
inherit(H.ae,t)
inherit(H.eQ,t)
inherit(H.eS,t)
inherit(H.eM,t)
inherit(H.i9,t)
inherit(P.hD,t)
inherit(P.dC,t)
inherit(P.O,t)
inherit(P.dz,t)
inherit(P.fS,t)
inherit(P.fT,t)
inherit(P.b9,t)
inherit(P.iz,t)
inherit(P.fI,t)
inherit(P.i5,t)
inherit(P.c_,t)
inherit(P.bP,t)
inherit(P.v,t)
inherit(P.i6,t)
inherit(P.ay,t)
inherit(P.H,t)
inherit(P.aO,t)
inherit(P.V,t)
inherit(P.aB,t)
inherit(P.dr,t)
inherit(P.hN,t)
inherit(P.bC,t)
inherit(P.eb,t)
inherit(P.b,t)
inherit(P.aE,t)
inherit(P.aV,t)
inherit(P.bR,t)
inherit(P.r,t)
inherit(P.bS,t)
inherit(W.e0,t)
inherit(W.hA,t)
inherit(W.bZ,t)
inherit(W.A,t)
inherit(W.dj,t)
inherit(W.c1,t)
inherit(W.ir,t)
inherit(W.cl,t)
inherit(W.di,t)
inherit(W.ik,t)
inherit(W.dG,t)
inherit(P.hs,t)
inherit(P.ib,t)
inherit(G.f4,t)
inherit(G.dZ,t)
inherit(G.cm,t)
inherit(G.eu,t)
inherit(G.ev,t)
inherit(G.cn,t)
inherit(G.dv,t)
inherit(G.du,t)
inherit(G.i,t)
inherit(G.bj,t)
inherit(G.h4,t)
inherit(G.bV,t)
inherit(R.fP,t)
inherit(T.as,t)
inherit(T.R,t)
inherit(T.x,t)
inherit(T.aH,t)
t=J.a
inherit(J.eL,t)
inherit(J.d8,t)
inherit(J.bG,t)
inherit(J.aQ,t)
inherit(J.be,t)
inherit(J.aR,t)
inherit(H.bJ,t)
inherit(H.bg,t)
inherit(W.h,t)
inherit(W.a1,t)
inherit(W.cb,t)
inherit(W.dX,t)
inherit(W.z,t)
inherit(W.cr,t)
inherit(W.e2,t)
inherit(W.e3,t)
inherit(W.e4,t)
inherit(W.cg,t)
inherit(W.ch,t)
inherit(W.ci,t)
inherit(W.cC,t)
inherit(W.e7,t)
inherit(W.k,t)
inherit(W.cB,t)
inherit(W.a5,t)
inherit(W.eE,t)
inherit(W.cA,t)
inherit(W.eV,t)
inherit(W.f0,t)
inherit(W.a6,t)
inherit(W.cy,t)
inherit(W.fd,t)
inherit(W.dh,t)
inherit(W.cE,t)
inherit(W.fm,t)
inherit(W.bk,t)
inherit(W.a7,t)
inherit(W.cx,t)
inherit(W.ah,t)
inherit(W.dm,t)
inherit(W.a9,t)
inherit(W.cw,t)
inherit(W.aa,t)
inherit(W.fR,t)
inherit(W.X,t)
inherit(W.cv,t)
inherit(W.h5,t)
inherit(W.ac,t)
inherit(W.cG,t)
inherit(W.ha,t)
inherit(W.dw,t)
inherit(W.hi,t)
inherit(W.hn,t)
inherit(W.hC,t)
inherit(W.cL,t)
inherit(W.cK,t)
inherit(W.cJ,t)
inherit(W.cF,t)
inherit(W.cI,t)
inherit(W.cH,t)
inherit(W.ix,t)
inherit(W.iy,t)
inherit(P.ar,t)
inherit(P.cu,t)
inherit(P.at,t)
inherit(P.cz,t)
inherit(P.fs,t)
inherit(P.ft,t)
inherit(P.fy,t)
inherit(P.cs,t)
inherit(P.au,t)
inherit(P.cD,t)
inherit(P.hm,t)
inherit(P.dU,t)
inherit(P.fC,t)
inherit(P.fD,t)
inherit(P.iw,t)
inherit(P.ct,t)
t=J.bG
inherit(J.fq,t)
inherit(J.b_,t)
inherit(J.aS,t)
inherit(J.jp,J.aQ)
t=J.be
inherit(J.d7,t)
inherit(J.d6,t)
t=P.W
inherit(H.c,t)
inherit(H.db,t)
inherit(H.dy,t)
t=H.c
inherit(H.bf,t)
inherit(H.eR,t)
inherit(H.ea,H.db)
t=P.d5
inherit(H.eW,t)
inherit(H.hp,t)
t=H.bf
inherit(H.bH,t)
inherit(P.eT,t)
t=H.ba
inherit(H.j8,t)
inherit(H.j9,t)
inherit(H.i3,t)
inherit(H.hJ,t)
inherit(H.eH,t)
inherit(H.eI,t)
inherit(H.ia,t)
inherit(H.h7,t)
inherit(H.h8,t)
inherit(H.ja,t)
inherit(H.iU,t)
inherit(H.iV,t)
inherit(H.iW,t)
inherit(H.iX,t)
inherit(H.iY,t)
inherit(H.h0,t)
inherit(H.eN,t)
inherit(H.iQ,t)
inherit(H.iR,t)
inherit(H.iS,t)
inherit(P.hx,t)
inherit(P.hw,t)
inherit(P.hy,t)
inherit(P.hz,t)
inherit(P.eD,t)
inherit(P.eC,t)
inherit(P.hO,t)
inherit(P.hW,t)
inherit(P.hS,t)
inherit(P.hT,t)
inherit(P.hU,t)
inherit(P.hQ,t)
inherit(P.hV,t)
inherit(P.hP,t)
inherit(P.hZ,t)
inherit(P.i_,t)
inherit(P.hY,t)
inherit(P.hX,t)
inherit(P.fU,t)
inherit(P.fV,t)
inherit(P.iC,t)
inherit(P.ie,t)
inherit(P.id,t)
inherit(P.ig,t)
inherit(P.eX,t)
inherit(P.e8,t)
inherit(P.e9,t)
inherit(W.iD,t)
inherit(W.hq,t)
inherit(W.hM,t)
inherit(W.ff,t)
inherit(W.fe,t)
inherit(W.im,t)
inherit(W.io,t)
inherit(W.iu,t)
inherit(W.iv,t)
inherit(P.hu,t)
inherit(P.iE,t)
inherit(P.iF,t)
inherit(P.iG,t)
inherit(B.j3,t)
inherit(B.j4,t)
inherit(B.j5,t)
inherit(B.j6,t)
inherit(B.j7,t)
inherit(B.fi,t)
inherit(B.fj,t)
inherit(B.fk,t)
inherit(B.fl,t)
inherit(D.eU,t)
inherit(A.iP,t)
inherit(B.j_,t)
inherit(B.j0,t)
t=H.hB
inherit(H.bm,t)
inherit(H.c2,t)
t=P.bc
inherit(H.dk,t)
inherit(H.eO,t)
inherit(H.hh,t)
inherit(H.hf,t)
inherit(H.dY,t)
inherit(H.fF,t)
inherit(P.ca,t)
inherit(P.bh,t)
inherit(P.ap,t)
inherit(P.u,t)
inherit(P.bW,t)
inherit(P.ag,t)
inherit(P.a2,t)
inherit(P.e1,t)
t=H.h0
inherit(H.fO,t)
inherit(H.bu,t)
inherit(H.hv,P.ca)
t=H.bg
inherit(H.f5,t)
inherit(H.dd,t)
t=H.dd
inherit(H.bL,t)
inherit(H.bK,t)
inherit(H.bM,H.bL)
inherit(H.de,H.bM)
inherit(H.bN,H.bK)
inherit(H.df,H.bN)
t=H.de
inherit(H.dc,t)
inherit(H.f6,t)
t=H.df
inherit(H.f7,t)
inherit(H.f8,t)
inherit(H.f9,t)
inherit(H.fa,t)
inherit(H.fb,t)
inherit(H.dg,t)
inherit(H.fc,t)
t=P.hD
inherit(P.dA,t)
inherit(P.is,t)
inherit(P.ic,P.iz)
inherit(P.dD,H.ae)
inherit(P.fH,P.fI)
inherit(P.i2,P.fH)
inherit(P.i4,P.i2)
inherit(P.d9,P.bP)
t=P.V
inherit(P.M,t)
inherit(P.n,t)
t=P.ap
inherit(P.dn,t)
inherit(P.eG,t)
t=W.h
inherit(W.q,t)
inherit(W.by,t)
inherit(W.e_,t)
inherit(W.ex,t)
inherit(W.bE,t)
inherit(W.bI,t)
inherit(W.fv,t)
inherit(W.dp,t)
inherit(W.fJ,t)
inherit(W.a8,t)
inherit(W.bx,t)
inherit(W.ab,t)
inherit(W.Y,t)
inherit(W.bw,t)
inherit(W.hk,t)
inherit(W.ho,t)
inherit(W.bX,t)
inherit(W.hr,t)
inherit(W.b1,t)
inherit(W.il,t)
t=W.q
inherit(W.a3,t)
inherit(W.aN,t)
inherit(W.aP,t)
inherit(W.cf,t)
inherit(W.hF,t)
t=W.a3
inherit(W.l,t)
inherit(P.G,t)
t=W.l
inherit(W.dR,t)
inherit(W.dS,t)
inherit(W.aM,t)
inherit(W.cc,t)
inherit(W.ce,t)
inherit(W.eB,t)
inherit(W.co,t)
inherit(W.bF,t)
inherit(W.fG,t)
inherit(W.ds,t)
inherit(W.fZ,t)
inherit(W.h_,t)
inherit(W.bT,t)
inherit(W.i1,t)
inherit(W.bB,W.by)
inherit(W.dV,W.bB)
inherit(W.bb,W.cr)
inherit(W.e5,W.ch)
inherit(W.d4,W.cC)
inherit(W.e6,W.d4)
inherit(W.a4,W.cb)
inherit(W.d2,W.cB)
inherit(W.ew,W.d2)
inherit(W.cX,W.cA)
inherit(W.bD,W.cX)
inherit(W.cp,W.aP)
inherit(W.cq,W.bE)
inherit(W.aG,W.k)
t=W.aG
inherit(W.aT,t)
inherit(W.N,t)
inherit(W.aZ,t)
inherit(W.f2,W.bI)
inherit(W.cZ,W.cy)
inherit(W.f3,W.cZ)
inherit(W.T,P.d9)
inherit(W.cY,W.cE)
inherit(W.bO,W.cY)
t=W.bk
inherit(W.fp,t)
inherit(W.fE,t)
inherit(W.hc,t)
inherit(W.cO,W.cx)
inherit(W.fr,W.cO)
inherit(W.fu,W.ah)
inherit(W.bA,W.bx)
inherit(W.fK,W.bA)
inherit(W.cR,W.cw)
inherit(W.fM,W.cR)
inherit(W.cP,W.cv)
inherit(W.h2,W.cP)
inherit(W.bz,W.bw)
inherit(W.h3,W.bz)
inherit(W.cV,W.cG)
inherit(W.h9,W.cV)
inherit(W.b0,W.N)
inherit(W.d_,W.cL)
inherit(W.dB,W.d_)
inherit(W.cM,W.cK)
inherit(W.hE,W.cM)
inherit(W.hG,W.ci)
inherit(W.cT,W.cJ)
inherit(W.i0,W.cT)
inherit(W.d1,W.cF)
inherit(W.dE,W.d1)
inherit(W.d3,W.cI)
inherit(W.ip,W.d3)
inherit(W.d0,W.cH)
inherit(W.iq,W.d0)
inherit(W.hH,W.hA)
inherit(W.hK,P.fS)
inherit(W.jB,W.hK)
inherit(W.hL,P.fT)
inherit(W.it,W.c1)
inherit(P.ht,P.hs)
inherit(P.J,P.ib)
t=P.G
inherit(P.aD,t)
inherit(P.aL,t)
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
inherit(P.es,t)
inherit(P.et,t)
inherit(P.ey,t)
inherit(P.eY,t)
inherit(P.eZ,t)
inherit(P.fn,t)
inherit(P.bQ,t)
inherit(P.fY,t)
inherit(P.hl,t)
inherit(P.bY,t)
inherit(P.ih,t)
inherit(P.ii,t)
inherit(P.ij,t)
t=P.aD
inherit(P.dQ,t)
inherit(P.eA,t)
inherit(P.ad,t)
inherit(P.eF,t)
inherit(P.fX,t)
inherit(P.dt,t)
inherit(P.hj,t)
inherit(P.cN,P.cu)
inherit(P.eP,P.cN)
inherit(P.cW,P.cz)
inherit(P.fg,P.cW)
inherit(P.fz,P.ad)
inherit(P.cU,P.cs)
inherit(P.fW,P.cU)
t=P.dt
inherit(P.h1,t)
inherit(P.bU,t)
inherit(P.cS,P.cD)
inherit(P.hb,P.cS)
inherit(P.cQ,P.ct)
inherit(P.fN,P.cQ)
t=G.f4
inherit(G.fL,t)
inherit(G.dx,t)
inherit(G.f1,t)
inherit(G.fB,t)
inherit(G.dW,G.fL)
inherit(B.fh,G.dW)
t=G.dx
inherit(G.f_,t)
inherit(G.fo,t)
inherit(G.hg,G.bV)
inherit(R.fQ,R.fP)
mixin(H.bK,P.v)
mixin(H.bL,P.v)
mixin(H.bM,H.ck)
mixin(H.bN,H.ck)
mixin(P.bP,P.v)
mixin(W.bw,P.v)
mixin(W.bx,P.v)
mixin(W.by,P.v)
mixin(W.bz,W.A)
mixin(W.bA,W.A)
mixin(W.bB,W.A)
mixin(W.cr,W.e0)
mixin(W.cL,P.v)
mixin(W.cx,P.v)
mixin(W.cE,P.v)
mixin(W.cF,P.v)
mixin(W.cG,P.v)
mixin(W.cH,P.v)
mixin(W.cI,P.v)
mixin(W.cJ,P.v)
mixin(W.cK,P.v)
mixin(W.cv,P.v)
mixin(W.cw,P.v)
mixin(W.cy,P.v)
mixin(W.cA,P.v)
mixin(W.cB,P.v)
mixin(W.cC,P.v)
mixin(W.cM,W.A)
mixin(W.cO,W.A)
mixin(W.cY,W.A)
mixin(W.cZ,W.A)
mixin(W.cX,W.A)
mixin(W.d1,W.A)
mixin(W.d2,W.A)
mixin(W.d3,W.A)
mixin(W.d4,W.A)
mixin(W.cP,W.A)
mixin(W.cR,W.A)
mixin(W.cT,W.A)
mixin(W.cV,W.A)
mixin(W.d_,W.A)
mixin(W.d0,W.A)
mixin(P.cu,P.v)
mixin(P.cs,P.v)
mixin(P.cz,P.v)
mixin(P.cD,P.v)
mixin(P.cN,W.A)
mixin(P.cW,W.A)
mixin(P.cS,W.A)
mixin(P.cU,W.A)
mixin(P.ct,P.v)
mixin(P.cQ,W.A)})();(function constants(){C.i=W.aM.prototype
C.z=W.cc.prototype
C.n=W.bb.prototype
C.j=W.ce.prototype
C.A=W.cg.prototype
C.B=W.co.prototype
C.h=W.cp.prototype
C.p=W.cq.prototype
C.C=J.a.prototype
C.a=J.aQ.prototype
C.q=J.d6.prototype
C.b=J.d7.prototype
C.D=J.d8.prototype
C.c=J.be.prototype
C.e=J.aR.prototype
C.K=J.aS.prototype
C.f=H.dc.prototype
C.v=W.bO.prototype
C.w=J.fq.prototype
C.x=W.dm.prototype
C.y=W.ds.prototype
C.m=J.b_.prototype
C.a4=W.b0.prototype
C.a5=W.bX.prototype
C.d=new P.ic()
C.o=new P.aB(0)
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
C.r=function(hooks) { return hooks; }

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
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.L=H.E(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.r])
C.M=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.u=makeConstList([])
C.k=H.E(makeConstList(["bind","if","ref","repeat","syntax"]),[P.r])
C.l=H.E(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.r])
C.N=H.K("nT")
C.O=H.K("nU")
C.P=H.K("ez")
C.Q=H.K("nV")
C.R=H.K("nW")
C.S=H.K("kl")
C.T=H.K("nX")
C.U=H.K("ko")
C.V=H.K("aV")
C.W=H.K("r")
C.X=H.K("kQ")
C.Y=H.K("kR")
C.Z=H.K("o_")
C.a_=H.K("kS")
C.a0=H.K("ay")
C.a1=H.K("M")
C.a2=H.K("n")
C.a3=H.K("V")})();(function staticFields(){$.kv="$cachedFunction"
$.kw="$cachedInvocation"
$.k5=null
$.k3=null
$.jD=!1
$.jH=null
$.l2=null
$.lg=null
$.iJ=null
$.iT=null
$.jI=null
$.bn=null
$.c3=null
$.c4=null
$.jE=!1
$.w=C.d
$.ki=0
$.aC=null
$.jm=null
$.kh=null
$.kg=null
$.ke=null
$.kd=null
$.kc=null
$.kb=null
$.nl=0
$.nm=0
$.jM=0
$.le=0
$.c8=0
$.c9=0
$.nM=!1
$.l8=0
$.n6="    //uniform bool fogEnabled;\n    const bool fogEnabled=false;\n\n    //uniform bool onlyAO;\n    const bool onlyAO=false;\n\n\n    //uniform float aoClamp;\n    const float aoClamp = 0.45;\n\n    //uniform float lumInfluence;\n    const float lumInfluence = 0.4;\n\n    //varying vec2 vUv;\n    \n    #define DL 2.399963229728653\n    #define EULER 2.718281828459045\n    \n\n\n    const int samples = 8;\n    const float radius = 5.0;\n    const bool useNoise = false;\n    const float noiseAmount = 0.0003;\n    const float diffArea = 0.4;\n    const float gDisplace = 0.4;\n    const vec3 onlyAOColor = vec3( 1.0, 0.7, 0.5 );\n    \n    float unpackDepth( const in vec4 rgba_depth ) {\n      return rgba_depth.r;\n    }\n\n    float unpackDepth2(vec4 rgba_depth) {\n      const vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n      float depth = dot( rgba_depth, bit_shift );\n      return depth;\n    }\n    \n    vec2 rand( const vec2 coord ) {\n      vec2 noise;\n      if ( useNoise ) {\n        float nx = dot ( coord, vec2( 12.9898, 78.233 ) );\n        float ny = dot ( coord, vec2( 12.9898, 78.233 ) * 2.0 );\n        noise = clamp( fract ( 43758.5453 * sin( vec2( nx, ny ) ) ), 0.0, 1.0 );\n      } else {\n        float width = uCanvasSize.x;\n        float height = uCanvasSize.y;\n        float ff = fract( 1.0 - coord.s * ( width / 2.0 ) );\n        float gg = fract( coord.t * ( height / 2.0 ) );\n        noise = vec2( 0.25, 0.75 ) * vec2( ff ) + vec2( 0.75, 0.25 ) * gg;\n      }\n      return ( noise * 2.0  - 1.0 ) * noiseAmount;\n    }\n    \n/*\n    float doFog() {\n      float zdepth = unpackDepth( texture(uDepthMap, vTexUV ) );\n      float depth = -cameraFar * cameraNear / ( zdepth * cameraFarMinusNear - cameraFar );\n      return smoothstep( fogNear, fogFar, depth );\n    }\n*/  \n\n    float readDepth(vec2 coord) {\n      float cameraFarPlusNear = uCameraFar + uCameraNear;\n      float cameraFarMinusNear = uCameraFar - uCameraNear;\n      float cameraCoef = 2.0 * uCameraNear;\n      return cameraCoef / ( cameraFarPlusNear - unpackDepth( texture(uDepthMap, coord ) ) * cameraFarMinusNear );\n    }\n    \n    float compareDepths( const in float depth1, const in float depth2, inout int far ) {\n      float garea = 2.0;\n      float diff = ( depth1 - depth2 ) * 100.0;\n      if ( diff < gDisplace ) {\n        garea = diffArea;\n      } else {\n        far = 1;\n      }\n    \n      float dd = diff - gDisplace;\n      float gauss = pow( EULER, -2.0 * dd * dd / ( garea * garea ) );\n      return gauss;\n    }\n    \n    float calcAO( float depth, float dw, float dh ) {\n      float dd = radius - depth * radius;\n      vec2 vv = vec2( dw, dh );\n      vec2 coord1 = vTexUV + dd * vv;\n      vec2 coord2 = vTexUV - dd * vv;\n      float temp1 = 0.0;\n      float temp2 = 0.0;\n      int far = 0;\n      temp1 = compareDepths( depth, readDepth( coord1 ), far );\n      if ( far > 0 ) {\n        temp2 = compareDepths( readDepth( coord2 ), depth, far );\n        temp1 += ( 1.0 - temp1 ) * temp2;\n      }\n      return temp1;\n    }\n    \n    void main() {\n      float width = uCanvasSize.x;\n      float height = uCanvasSize.y;\n\n      vec2 noise = rand( vTexUV );\n      float depth = readDepth( vTexUV );\n      float tt = clamp( depth, aoClamp, 1.0 );\n      float w = ( 1.0 / width )  / tt + ( noise.x * ( 1.0 - noise.x ) );\n      float h = ( 1.0 / height ) / tt + ( noise.y * ( 1.0 - noise.y ) );\n      float pw;\n      float ph;\n      float ao;\n      float dz = 1.0 / float( samples );\n      float z = 1.0 - dz / 2.0;\n      float l = 0.0;\n      for ( int i = 0; i <= samples; i ++ ) {\n        float r = sqrt( 1.0 - z );\n        pw = cos( l ) * r;\n        ph = sin( l ) * r;\n        ao += calcAO( depth, pw * w, ph * h );\n        z = z - dz;\n        l = l + DL;\n      }\n    \n      ao /= float( samples );\n      ao = 1.0 - ao;\n\n/*\n      if ( fogEnabled ) {\n        ao = mix( ao, 1.0, doFog() );\n      }\n*/\n\n      // Diffuse\n      vec3 color = texture(uTexture, vTexUV ).rgb;\n      vec3 lumcoeff = vec3( 0.299, 0.587, 0.114 );\n      float lum = dot( color.rgb, lumcoeff );\n      vec3 luminance = vec3( lum );\n      vec3 final = vec3( color * mix( vec3( ao ), vec3( 1.0 ), luminance * lumInfluence ) );\n    \n      if ( onlyAO ) {\n        final = onlyAOColor * vec3( mix( vec3( ao ), vec3( 1.0 ), luminance * lumInfluence ) );\n      }\n      oFragColor = vec4( final, 1.0 );\n      //oFragColor = vec4( color, 1.0 );\n    }\n    \n    "})();(function lazyInitializers(){lazy($,"ka","$get$ka",function(){return H.lb("_$dart_dartClosure")})
lazy($,"jr","$get$jr",function(){return H.lb("_$dart_js")})
lazy($,"km","$get$km",function(){return H.mx()})
lazy($,"kn","$get$kn",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.ki
$.ki=t+1
t="expando$key$"+t}return new P.eb(null,t,[P.n])})
lazy($,"kE","$get$kE",function(){return H.av(H.he({
toString:function(){return"$receiver$"}}))})
lazy($,"kF","$get$kF",function(){return H.av(H.he({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kG","$get$kG",function(){return H.av(H.he(null))})
lazy($,"kH","$get$kH",function(){return H.av(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kL","$get$kL",function(){return H.av(H.he(void 0))})
lazy($,"kM","$get$kM",function(){return H.av(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kJ","$get$kJ",function(){return H.av(H.kK(null))})
lazy($,"kI","$get$kI",function(){return H.av(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kO","$get$kO",function(){return H.av(H.kK(void 0))})
lazy($,"kN","$get$kN",function(){return H.av(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jA","$get$jA",function(){return P.mW()})
lazy($,"c5","$get$c5",function(){return[]})
lazy($,"k9","$get$k9",function(){return{}})
lazy($,"kW","$get$kW",function(){return P.jt(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jC","$get$jC",function(){return P.I()})
lazy($,"iI","$get$iI",function(){return P.kr(P.n,P.ay)})
lazy($,"c7","$get$c7",function(){return P.kr(P.r,P.ay)})
lazy($,"kB","$get$kB",function(){return new G.dv(1281,0,4294967295)})
lazy($,"k1","$get$k1",function(){return new G.du(1281,1281,1281)})
lazy($,"U","$get$U",function(){return P.aU(["cBlendEquation",new G.i("","",0),"cDepthWrite",new G.i("","",0),"cDepthTest",new G.i("","",0),"cStencilFunc",new G.i("","",0),"tPosition",new G.i("vec3","",0),"tSpeed",new G.i("vec3","",0),"tForce",new G.i("vec3","",0),"aColors",new G.i("vec3","per vertex color",0),"aColorAlpha",new G.i("vec4","per vertex color",0),"aPosition",new G.i("vec3","vertex coordinates",0),"aTexUV",new G.i("vec2","texture uvs",0),"aNormal",new G.i("vec3","vertex normals",0),"aBinormal",new G.i("vec3","vertex binormals",0),"aCenter",new G.i("vec4","for wireframe",0),"aPointSize",new G.i("float","",0),"aBoneIndex",new G.i("vec4","",0),"aBoneWeight",new G.i("vec4","",0),"aTangent",new G.i("vec3","vertex tangents",0),"aBitangent",new G.i("vec3","vertex btangents",0),"iaRotation",new G.i("vec4","",0),"iaTranslation",new G.i("vec3","",0),"iaScale",new G.i("vec3","",0),"vColor",new G.i("vec3","per vertex color",0),"vTexUV",new G.i("vec2","",0),"vLightWeighting",new G.i("vec3","",0),"vNormal",new G.i("vec3","",0),"vPosition",new G.i("vec3","vertex coordinates",0),"vPositionFromLight",new G.i("vec4","delta from light",0),"vCenter",new G.i("vec4","for wireframe",0),"vDepth",new G.i("float","depth for shadowmaps",0),"uTransformationMatrix",new G.i("mat4","",0),"uModelMatrix",new G.i("mat4","",0),"uNormalMatrix",new G.i("mat3","",0),"uConvolutionMatrix",new G.i("mat3","",0),"uPerspectiveViewMatrix",new G.i("mat4","",0),"uLightPerspectiveViewMatrix",new G.i("mat4","",0),"uShadowMap",new G.i("sampler2DShadow","",0),"uTexture",new G.i("sampler2D","",0),"uTexture2",new G.i("sampler2D","",0),"uTexture3",new G.i("sampler2D","",0),"uTexture4",new G.i("sampler2D","",0),"uSpecularMap",new G.i("sampler2D","",0),"uNormalMap",new G.i("sampler2D","",0),"uBumpMap",new G.i("sampler2D","",0),"uDepthMap",new G.i("sampler2D","",0),"uCubeTexture",new G.i("samplerCube","",0),"uAnimationTable",new G.i("sampler2D","",0),"uTime",new G.i("float","time since program start in sec",0),"uCameraNear",new G.i("float","",0),"uCameraFar",new G.i("float","",0),"uFogNear",new G.i("float","",0),"uFogFar",new G.i("float","",0),"uPointSize",new G.i("float","",0),"uScale",new G.i("float","",0),"uAngle",new G.i("float","",0),"uCanvasSize",new G.i("vec2","",0),"uCenter2",new G.i("vec2","",0),"uCutOff",new G.i("float","",0),"uShininess",new G.i("float","",0),"uShadowBias",new G.i("float","",0),"uOpacity",new G.i("float","",0),"uColor",new G.i("vec3","",0),"uAmbientDiffuse",new G.i("vec3","",0),"uColorEmissive",new G.i("vec3","",0),"uColorSpecular",new G.i("vec3","",0),"uColorDiffuse",new G.i("vec3","",0),"uColorAlpha",new G.i("vec4","",0),"uColorAlpha2",new G.i("vec4","",0),"uEyePosition",new G.i("vec3","",0),"uMaterial",new G.i("mat4","",0),"uRange",new G.i("vec2","",0),"uDirection",new G.i("vec2","",0),"uBoneMatrices",new G.i("mat4","",128),"uLightDescs",new G.i("mat4","",4),"uLightCount",new G.i("float","",0),"uLightTypes",new G.i("float","",4),"uBumpScale",new G.i("float","for bump maps",0),"uNormalScale",new G.i("float","for normal maps",0)])})
lazy($,"kD","$get$kD",function(){var t=new G.h4(!1,!1,!1,!0,1,9729,9729)
t.d=!1
t.b=!0
t.f=9728
t.r=9728
return t})
lazy($,"k8","$get$k8",function(){return T.mU(0.8,0.8,0.8)})
lazy($,"li","$get$li",function(){var t=new G.bj("SolidColor",null,[],[],[],[],0,P.I())
t.bl(["aPosition"])
t.aG(["uPerspectiveViewMatrix","uModelMatrix"])
t.bt(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"lh","$get$lh",function(){var t=new G.bj("SolidColorF",null,[],[],[],[],0,P.I())
t.aG(["uColor"])
t.bt(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"l9","$get$l9",function(){return H.aA(C.h.cr(W.nq(),"#activate"),"$isbF")})})()
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
mangledGlobalNames:{n:"int",M:"double",V:"num",r:"String",ay:"bool",aV:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.q},{func:1,ret:P.ay,args:[W.a3,P.r,P.r,W.bZ]},{func:1,v:true,args:[P.o],opt:[P.bR]},{func:1,ret:P.n,args:[P.H,P.H]},{func:1,ret:P.r,args:[W.h]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bJ,ArrayBufferView:H.bg,DataView:H.f5,Float32Array:H.dc,Float64Array:H.f6,Int16Array:H.f7,Int32Array:H.f8,Int8Array:H.f9,Uint16Array:H.fa,Uint32Array:H.fb,Uint8ClampedArray:H.dg,CanvasPixelArray:H.dg,Uint8Array:H.fc,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLImageElement:W.l,HTMLKeygenElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMenuItemElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTextAreaElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,HTMLAnchorElement:W.dR,HTMLAreaElement:W.dS,AudioTrack:W.a1,AudioTrackList:W.dV,Blob:W.cb,HTMLBodyElement:W.aM,HTMLCanvasElement:W.cc,CanvasRenderingContext2D:W.dX,CDATASection:W.aN,CharacterData:W.aN,Comment:W.aN,ProcessingInstruction:W.aN,Text:W.aN,CompositorWorker:W.e_,CSSCharsetRule:W.z,CSSFontFaceRule:W.z,CSSGroupingRule:W.z,CSSImportRule:W.z,CSSKeyframeRule:W.z,MozCSSKeyframeRule:W.z,WebKitCSSKeyframeRule:W.z,CSSKeyframesRule:W.z,MozCSSKeyframesRule:W.z,WebKitCSSKeyframesRule:W.z,CSSMediaRule:W.z,CSSNamespaceRule:W.z,CSSPageRule:W.z,CSSRule:W.z,CSSStyleRule:W.z,CSSSupportsRule:W.z,CSSViewportRule:W.z,CSSStyleDeclaration:W.bb,MSStyleCSSProperties:W.bb,CSS2Properties:W.bb,DataTransferItemList:W.e2,DeviceAcceleration:W.e3,HTMLDivElement:W.ce,XMLDocument:W.aP,Document:W.aP,DocumentFragment:W.cf,ShadowRoot:W.cf,DOMException:W.e4,DOMImplementation:W.cg,DOMPoint:W.e5,DOMPointReadOnly:W.ch,DOMRectReadOnly:W.ci,DOMStringList:W.e6,DOMTokenList:W.e7,Element:W.a3,AnimationEvent:W.k,AnimationPlayerEvent:W.k,ApplicationCacheErrorEvent:W.k,AutocompleteErrorEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceLightEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,GamepadEvent:W.k,GeofencingEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RelatedEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCIceCandidateEvent:W.k,RTCPeerConnectionIceEvent:W.k,SecurityPolicyViolationEvent:W.k,ServicePortConnectEvent:W.k,ServiceWorkerMessageEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.a4,FileList:W.ew,FileWriter:W.ex,HTMLFormElement:W.eB,Gamepad:W.a5,HTMLHeadElement:W.co,History:W.eE,HTMLCollection:W.bD,HTMLFormControlsCollection:W.bD,HTMLOptionsCollection:W.bD,HTMLDocument:W.cp,XMLHttpRequest:W.cq,XMLHttpRequestUpload:W.bE,XMLHttpRequestEventTarget:W.bE,HTMLInputElement:W.bF,KeyboardEvent:W.aT,Location:W.eV,MediaList:W.f0,MIDIOutput:W.f2,MIDIInput:W.bI,MIDIPort:W.bI,MimeType:W.a6,MimeTypeArray:W.f3,PointerEvent:W.N,MouseEvent:W.N,DragEvent:W.N,Navigator:W.fd,Attr:W.q,Node:W.q,NodeIterator:W.dh,NodeList:W.bO,RadioNodeList:W.bO,Path2D:W.fm,Perspective:W.fp,Plugin:W.a7,PluginArray:W.fr,PositionValue:W.fu,PresentationConnection:W.fv,Range:W.dm,Rotation:W.fE,RTCDataChannel:W.dp,DataChannel:W.dp,HTMLSelectElement:W.fG,SharedWorker:W.fJ,SourceBuffer:W.a8,SourceBufferList:W.fK,SpeechGrammar:W.a9,SpeechGrammarList:W.fM,SpeechRecognitionResult:W.aa,Storage:W.fR,CSSStyleSheet:W.X,StyleSheet:W.X,CalcLength:W.ah,KeywordValue:W.ah,LengthValue:W.ah,NumberValue:W.ah,SimpleLength:W.ah,TransformValue:W.ah,StyleValue:W.ah,HTMLTableElement:W.ds,HTMLTableRowElement:W.fZ,HTMLTableSectionElement:W.h_,HTMLTemplateElement:W.bT,TextTrack:W.ab,TextTrackCue:W.Y,VTTCue:W.Y,TextTrackCueList:W.h2,TextTrackList:W.h3,TimeRanges:W.h5,Touch:W.ac,TouchEvent:W.aZ,TouchList:W.h9,TrackDefaultList:W.ha,Matrix:W.bk,Skew:W.bk,TransformComponent:W.bk,Translation:W.hc,TreeWalker:W.dw,CompositionEvent:W.aG,FocusEvent:W.aG,TextEvent:W.aG,SVGZoomEvent:W.aG,UIEvent:W.aG,URL:W.hi,VideoTrackList:W.hk,VTTRegionList:W.hn,WebSocket:W.ho,WheelEvent:W.b0,Window:W.bX,DOMWindow:W.bX,Worker:W.hr,CompositorWorkerGlobalScope:W.b1,DedicatedWorkerGlobalScope:W.b1,ServiceWorkerGlobalScope:W.b1,SharedWorkerGlobalScope:W.b1,WorkerGlobalScope:W.b1,ClientRect:W.hC,ClientRectList:W.dB,DOMRectList:W.dB,CSSRuleList:W.hE,DocumentType:W.hF,DOMRect:W.hG,GamepadList:W.i0,HTMLFrameSetElement:W.i1,NamedNodeMap:W.dE,MozNamedAttrMap:W.dE,ServiceWorker:W.il,SpeechRecognitionResultList:W.ip,StyleSheetList:W.iq,WorkerLocation:W.ix,WorkerNavigator:W.iy,SVGAElement:P.dQ,SVGAnimateElement:P.aL,SVGAnimateMotionElement:P.aL,SVGAnimateTransformElement:P.aL,SVGAnimationElement:P.aL,SVGSetElement:P.aL,SVGFEBlendElement:P.ec,SVGFEColorMatrixElement:P.ed,SVGFEComponentTransferElement:P.ee,SVGFECompositeElement:P.ef,SVGFEConvolveMatrixElement:P.eg,SVGFEDiffuseLightingElement:P.eh,SVGFEDisplacementMapElement:P.ei,SVGFEFloodElement:P.ej,SVGFEGaussianBlurElement:P.ek,SVGFEImageElement:P.el,SVGFEMergeElement:P.em,SVGFEMorphologyElement:P.en,SVGFEOffsetElement:P.eo,SVGFEPointLightElement:P.ep,SVGFESpecularLightingElement:P.eq,SVGFESpotLightElement:P.er,SVGFETileElement:P.es,SVGFETurbulenceElement:P.et,SVGFilterElement:P.ey,SVGForeignObjectElement:P.eA,SVGCircleElement:P.ad,SVGEllipseElement:P.ad,SVGLineElement:P.ad,SVGPathElement:P.ad,SVGPolygonElement:P.ad,SVGPolylineElement:P.ad,SVGGeometryElement:P.ad,SVGClipPathElement:P.aD,SVGDefsElement:P.aD,SVGGElement:P.aD,SVGSwitchElement:P.aD,SVGGraphicsElement:P.aD,SVGImageElement:P.eF,SVGLength:P.ar,SVGLengthList:P.eP,SVGMarkerElement:P.eY,SVGMaskElement:P.eZ,SVGNumber:P.at,SVGNumberList:P.fg,SVGPatternElement:P.fn,SVGPoint:P.fs,SVGPointList:P.ft,SVGRect:P.fy,SVGRectElement:P.fz,SVGScriptElement:P.bQ,SVGStringList:P.fW,SVGDescElement:P.G,SVGDiscardElement:P.G,SVGFEDistantLightElement:P.G,SVGFEFuncAElement:P.G,SVGFEFuncBElement:P.G,SVGFEFuncGElement:P.G,SVGFEFuncRElement:P.G,SVGFEMergeNodeElement:P.G,SVGMetadataElement:P.G,SVGStopElement:P.G,SVGStyleElement:P.G,SVGTitleElement:P.G,SVGComponentTransferFunctionElement:P.G,SVGElement:P.G,SVGSVGElement:P.fX,SVGSymbolElement:P.fY,SVGTextContentElement:P.dt,SVGTextPathElement:P.h1,SVGTSpanElement:P.bU,SVGTextElement:P.bU,SVGTextPositioningElement:P.bU,SVGTransform:P.au,SVGTransformList:P.hb,SVGUseElement:P.hj,SVGViewElement:P.hl,SVGViewSpec:P.hm,SVGLinearGradientElement:P.bY,SVGRadialGradientElement:P.bY,SVGGradientElement:P.bY,SVGCursorElement:P.ih,SVGFEDropShadowElement:P.ii,SVGMPathElement:P.ij,AudioBuffer:P.dU,WebGLRenderingContext:P.fC,WebGL2RenderingContext:P.fD,WebGL2RenderingContextBase:P.iw,SQLResultSetRowList:P.fN})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.dd.$nativeSuperclassTag="ArrayBufferView"
H.bL.$nativeSuperclassTag="ArrayBufferView"
H.bM.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
H.bK.$nativeSuperclassTag="ArrayBufferView"
H.bN.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
W.by.$nativeSuperclassTag="EventTarget"
W.bB.$nativeSuperclassTag="EventTarget"
W.bx.$nativeSuperclassTag="EventTarget"
W.bA.$nativeSuperclassTag="EventTarget"
W.bw.$nativeSuperclassTag="EventTarget"
W.bz.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.lk(B.lj(),b)},[])
else (function(b){H.lk(B.lj(),b)})([])})})()