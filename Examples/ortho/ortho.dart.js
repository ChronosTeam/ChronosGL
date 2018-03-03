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
a[c]=function(){a[c]=function(){H.np(b)}
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
if(v[t][a])return v[t][a]}}var C={},H={ja:function ja(a){this.a=a},
jf:function(a,b,c,d){if(!!a.$isc)return new H.e4(a,b,[c,d])
return new H.d3(a,b,[c,d])},
eF:function(){return new P.aD("No element")},
mg:function(){return new P.aD("Too many elements")},
mf:function(){return new P.aD("Too few elements")},
dk:function(a,b,c,d){if(c-b<=32)H.mv(a,b,c,d)
else H.mu(a,b,c,d)},
mv:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.ae(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.ap(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.j(a,q,s.h(a,p))
q=p}s.j(a,q,r)}},
mu:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.H(t+1,6)
r=a3+s
q=a4-s
p=C.b.H(a3+a4,2)
o=p-s
n=p+s
t=J.ae(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.ap(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.ap(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.ap(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.ap(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ap(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.ap(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.ap(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.ap(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ap(a5.$2(j,i),0)){h=i
i=j
j=h}t.j(a2,r,m)
t.j(a2,p,k)
t.j(a2,q,i)
t.j(a2,o,t.h(a2,a3))
t.j(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.J(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.dk(a2,a3,g-2,a5)
H.dk(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.J(a5.$2(t.h(a2,g),l),0);)++g
for(;J.J(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.dk(a2,g,f,a5)}else H.dk(a2,g,f,a5)},
c:function c(){},
bd:function bd(){},
d2:function d2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
d3:function d3(a,b,c){this.a=a
this.b=b
this.$ti=c},
e4:function e4(a,b,c){this.a=a
this.b=b
this.$ti=c},
eQ:function eQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bB:function bB(a,b,c){this.a=a
this.b=b
this.$ti=c},
du:function du(a,b,c){this.a=a
this.b=b
this.$ti=c},
hj:function hj(a,b,c){this.a=a
this.b=b
this.$ti=c},
cg:function cg(){},
dC:function(a,b){var t=a.ak(b)
if(!u.globalState.d.cy)u.globalState.f.aq()
return t},
iJ:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
l7:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.x(s).$isb)throw H.e(P.jL("Arguments to main must be a List: "+H.i(s)))
u.globalState=new H.hW(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$kc()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hz(P.je(null,H.b4),0)
r=P.o
s.seu(new H.ah(0,null,null,null,null,null,0,[r,H.b3]))
s.sex(new H.ah(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.hV()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.ma,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.mK)}if(u.globalState.x)return
s=u.globalState.a++
q=P.ai(null,null,null,r)
p=new H.bf(0,null,!1)
o=new H.b3(s,new H.ah(0,null,null,null,null,null,0,[r,H.bf]),q,u.createNewIsolate(),p,new H.ar(H.iP()),new H.ar(H.iP()),!1,!1,[],P.ai(null,null,null,null),null,null,!1,!0,P.ai(null,null,null,null))
q.i(0,0)
o.bz(0,p)
u.globalState.e=o
u.globalState.z.j(0,s,o)
u.globalState.d=o
if(H.bk(a,{func:1,args:[,]}))o.ak(new H.iV(t,a))
else if(H.bk(a,{func:1,args:[,,]}))o.ak(new H.iW(t,a))
else o.ak(a)
u.globalState.f.aq()},
mK:function(a){var t=P.aU(["command","print","msg",a])
return new H.am(!0,P.bV(null,P.o)).N(t)},
mc:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.md()
return},
md:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.w("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.w('Cannot extract URI from "'+t+'"'))},
ma:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b2(!0,[]).a_(b.data)
s=J.ae(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.nb(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b2(!0,[]).a_(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b2(!0,[]).a_(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.o
j=P.ai(null,null,null,k)
i=new H.bf(0,null,!1)
h=new H.b3(s,new H.ah(0,null,null,null,null,null,0,[k,H.bf]),j,u.createNewIsolate(),i,new H.ar(H.iP()),new H.ar(H.iP()),!1,!1,[],P.ai(null,null,null,null),null,null,!1,!0,P.ai(null,null,null,null))
j.i(0,0)
h.bz(0,i)
u.globalState.f.a.X(0,new H.b4(h,new H.eC(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.aq()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lG(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.aq()
break
case"close":u.globalState.ch.ap(0,$.$get$kd().h(0,a))
a.terminate()
u.globalState.f.aq()
break
case"log":H.m9(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aU(["command","print","msg",t])
k=new H.am(!0,P.bV(null,P.o)).N(k)
s.toString
self.postMessage(k)}else P.ao(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
m9:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aU(["command","log","msg",a])
r=new H.am(!0,P.bV(null,P.o)).N(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.S(q)
t=H.aI(q)
s=P.ce(t)
throw H.e(s)}},
mb:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.ki=$.ki+("_"+s)
$.kj=$.kj+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.K(0,["spawned",new H.bh(s,r),q,t.r])
r=new H.eD(a,b,c,d,t)
if(e){t.bS(q,q)
u.globalState.f.a.X(0,new H.b4(t,r,"start isolate"))}else r.$0()},
mx:function(a,b){var t=new H.h1(!0,!1,null)
t.de(a,b)
return t},
mL:function(a){return new H.b2(!0,[]).a_(new H.am(!1,P.bV(null,P.o)).N(a))},
iV:function iV(a,b){this.a=a
this.b=b},
iW:function iW(a,b){this.a=a
this.b=b},
hW:function hW(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
hR:function hR(a,b){this.a=a
this.b=b},
hz:function hz(a,b){this.a=a
this.b=b},
hA:function hA(a){this.a=a},
b4:function b4(a,b,c){this.a=a
this.b=b
this.c=c},
hV:function hV(){},
eC:function eC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eD:function eD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hs:function hs(){},
bh:function bh(a,b){this.b=a
this.a=b},
hX:function hX(a,b){this.a=a
this.b=b},
bX:function bX(a,b,c){this.b=a
this.c=b
this.a=c},
bf:function bf(a,b,c){this.a=a
this.b=b
this.c=c},
h1:function h1(a,b,c){this.a=a
this.b=b
this.c=c},
h2:function h2(a,b){this.a=a
this.b=b},
h3:function h3(a,b){this.a=a
this.b=b},
ar:function ar(a){this.a=a},
am:function am(a,b){this.a=a
this.b=b},
b2:function b2(a,b){this.a=a
this.b=b},
n4:function(a){return u.types[a]},
nd:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.x(a).$isr},
i:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.az(a)
if(typeof t!=="string")throw H.e(H.V(a))
return t},
mr:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fv(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aX:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
df:function(a){var t,s,r,q,p,o,n,m
t=J.x(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.z||!!J.x(a).$isb_){p=C.q(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.e.aP(q,0)===36)q=C.e.cT(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dE(H.ix(a),0,null),u.mangledGlobalNames)},
fr:function(a){return"Instance of '"+H.df(a)+"'"},
T:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mp:function(a){return a.b?H.T(a).getUTCFullYear()+0:H.T(a).getFullYear()+0},
mn:function(a){return a.b?H.T(a).getUTCMonth()+1:H.T(a).getMonth()+1},
mj:function(a){return a.b?H.T(a).getUTCDate()+0:H.T(a).getDate()+0},
mk:function(a){return a.b?H.T(a).getUTCHours()+0:H.T(a).getHours()+0},
mm:function(a){return a.b?H.T(a).getUTCMinutes()+0:H.T(a).getMinutes()+0},
mo:function(a){return a.b?H.T(a).getUTCSeconds()+0:H.T(a).getSeconds()+0},
ml:function(a){return a.b?H.T(a).getUTCMilliseconds()+0:H.T(a).getMilliseconds()+0},
kh:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.V(a))
return a[b]},
R:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.af(!0,b,"index",null)
t=J.dJ(a)
if(b<0||C.b.cD(b,t))return P.C(b,a,"index",null,t)
return P.fs(b,"index",null)},
V:function(a){return new P.af(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.de()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.l9})
t.name=""}else t.toString=H.l9
return t},
l9:function(){return J.az(this.dartException)},
I:function(a){throw H.e(a)},
H:function(a){throw H.e(new P.a2(a))},
av:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.h8(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
h9:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kv:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jc:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eJ(a,s,t?null:b.receiver)},
S:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.iX(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aY(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jc(H.i(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.i(s)+" (Error "+q+")"
return t.$1(new H.dd(p,null))}}if(a instanceof TypeError){o=$.$get$kp()
n=$.$get$kq()
m=$.$get$kr()
l=$.$get$ks()
k=$.$get$kw()
j=$.$get$kx()
i=$.$get$ku()
$.$get$kt()
h=$.$get$kz()
g=$.$get$ky()
f=o.S(s)
if(f!=null)return t.$1(H.jc(s,f))
else{f=n.S(s)
if(f!=null){f.method="call"
return t.$1(H.jc(s,f))}else{f=m.S(s)
if(f==null){f=l.S(s)
if(f==null){f=k.S(s)
if(f==null){f=j.S(s)
if(f==null){f=i.S(s)
if(f==null){f=l.S(s)
if(f==null){f=h.S(s)
if(f==null){f=g.S(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.dd(s,f==null?null:f.method))}}return t.$1(new H.hb(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dl()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.af(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dl()
return a},
aI:function(a){var t
if(a==null)return new H.dA(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dA(a,null)},
nh:function(a){if(a==null||typeof a!='object')return J.aq(a)
else return H.aX(a)},
n2:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.j(0,p,a[q])}return b},
nc:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dC(b,new H.iE(a))
case 1:return H.dC(b,new H.iF(a,d))
case 2:return H.dC(b,new H.iG(a,d,e))
case 3:return H.dC(b,new H.iH(a,d,e,f))
case 4:return H.dC(b,new H.iI(a,d,e,f,g))}throw H.e(P.ce("Unsupported number of arguments for wrapped closure"))},
c0:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.nc)
a.$identity=t
return t},
lV:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.x(c).$isb){t.$reflectionInfo=c
r=H.mr(t).r}else r=c
q=d?Object.create(new H.fK().constructor.prototype):Object.create(new H.bo(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.jT(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.n4,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jQ:H.j5
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.jT(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
lS:function(a,b,c,d){var t=H.j5
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
jT:function(a,b,c){var t,s,r,q
if(c)return H.lU(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.lS(s,b==null?r!=null:b!==r,t,b)
return q},
lT:function(a,b,c,d){var t,s
t=H.j5
s=H.jQ
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
lU:function(a,b){var t,s,r,q
H.lR()
t=$.jP
if(t==null){t=H.jO("receiver")
$.jP=t}s=b.$stubName
r=b.length
q=a[s]
t=H.lT(r,b==null?q!=null:b!==q,s,b)
return t},
jp:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.x(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.lV(a,b,t,!!d,e,f)},
j5:function(a){return a.a},
jQ:function(a){return a.c},
lR:function(){var t=$.jR
if(t==null){t=H.jO("self")
$.jR=t}return t},
jO:function(a){var t,s,r,q,p
t=new H.bo("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
nD:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aw(a,"String"))},
ad:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aw(a,"double"))},
nC:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aw(a,"num"))},
mX:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aw(a,"bool"))},
nb:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aw(a,"int"))},
nj:function(a,b){throw H.e(H.aw(a,b.substring(3)))},
ni:function(a,b){var t=J.ae(b)
throw H.e(H.jS(H.df(a),t.bo(b,3,t.gk(b))))},
js:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.x(a)[b])return a
H.nj(a,b)},
aK:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.x(a)[b]
else t=!0
if(t)return a
H.ni(a,b)},
nB:function(a){if(a==null)return a
if(!!J.x(a).$isb)return a
throw H.e(H.aw(a,"List"))},
kU:function(a){var t=J.x(a)
return"$S" in t?t.$S():null},
bk:function(a,b){var t
if(a==null)return!1
t=H.kU(a)
return t==null?!1:H.l0(t,b)},
nz:function(a,b){var t,s
if(a==null)return a
if($.jm)return a
$.jm=!0
try{if(H.bk(a,b))return a
t=H.aL(b,null)
s=H.aw(a,t)
throw H.e(s)}finally{$.jm=!1}},
aw:function(a,b){return new H.ha("type '"+H.df(a)+"' is not a subtype of type '"+b+"'")},
jS:function(a,b){return new H.dS("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
aH:function(a){if(!0===a)return!1
if(!!J.x(a).$isj8)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.aw(a,"bool"))},
b6:function(a){throw H.e(new H.hm(a))},
d:function(a){if(H.aH(a))throw H.e(new P.c5(null))},
np:function(a){throw H.e(new P.dW(a))},
iP:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
kY:function(a){return u.getIsolateTag(a)},
N:function(a){return new H.aE(a,null)},
D:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
ix:function(a){if(a==null)return
return a.$ti},
kZ:function(a,b){return H.jx(a["$as"+H.i(b)],H.ix(a))},
an:function(a,b,c){var t,s
t=H.kZ(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aJ:function(a,b){var t,s
t=H.ix(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aL:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dE(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.i(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aL(t,b)
return H.mM(a,b)}return"unknown-reified-type"},
mM:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aL(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aL(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aL(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.n1(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aL(l[j],b)+(" "+H.i(j))}q+="}"}return"("+q+") => "+t},
dE:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bN("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aL(o,c)}return p?"":"<"+s.l(0)+">"},
iy:function(a){var t,s
if(a instanceof H.b8){t=H.kU(a)
if(t!=null)return H.aL(t,null)}s=J.x(a).constructor.name
if(a==null)return s
return s+H.dE(a.$ti,0,null)},
jx:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jt(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jt(a,null,b)
return b},
iq:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.ix(a)
s=J.x(a)
if(s[b]==null)return!1
return H.kR(H.jx(s[d],t),c)},
dF:function(a,b,c,d){if(a==null)return a
if(H.iq(a,b,c,d))return a
throw H.e(H.jS(H.df(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dE(c,0,null),u.mangledGlobalNames)))},
nw:function(a,b,c,d){if(a==null)return a
if(H.iq(a,b,c,d))return a
throw H.e(H.aw(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dE(c,0,null),u.mangledGlobalNames)))},
kR:function(a,b){var t,s,r,q,p
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
nx:function(a,b,c){return H.jt(a,b,H.kZ(b,c))},
a0:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aW")return!0
if('func' in b)return H.l0(a,b)
if('func' in a)return b.name==="j8"||b.name==="q"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.d(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.d(!0)
q=b[0]}else q=b
if(q!==s){p=H.aL(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.kR(H.jx(o,t),r)},
kQ:function(a,b,c){var t,s,r,q,p,o,n
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
mT:function(a,b){var t,s,r,q,p,o
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
l0:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
if(n===m){if(!H.kQ(r,q,!1))return!1
if(!H.kQ(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
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
if(!(H.a0(g,f)||H.a0(f,g)))return!1}}return H.mT(a.named,b.named)},
jt:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nE:function(a){var t=$.jq
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nA:function(a){return H.aX(a)},
ny:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ne:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.q))
t=$.jq.$1(a)
s=$.iv[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iD[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kP.$2(a,t)
if(t!=null){s=$.iv[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iD[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.ju(r)
$.iv[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iD[t]=r
return r}if(p==="-"){o=H.ju(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.l3(a,r)
if(p==="*")throw H.e(new P.dt(t))
if(u.leafTags[t]===true){o=H.ju(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.l3(a,r)},
l3:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.iM(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
ju:function(a){return J.iM(a,!1,null,!!a.$isr)},
ng:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.iM(t,!1,null,!!t.$isr)
else return J.iM(t,c,null,null)},
n9:function(){if(!0===$.jr)return
$.jr=!0
H.na()},
na:function(){var t,s,r,q,p,o,n,m
$.iv=Object.create(null)
$.iD=Object.create(null)
H.n8()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.l4.$1(p)
if(o!=null){n=H.ng(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
n8:function(){var t,s,r,q,p,o,n
t=C.D()
t=H.bj(C.A,H.bj(C.F,H.bj(C.p,H.bj(C.p,H.bj(C.E,H.bj(C.B,H.bj(C.C(C.q),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jq=new H.iA(p)
$.kP=new H.iB(o)
$.l4=new H.iC(n)},
bj:function(a,b){return a(b)||b},
no:function(a,b,c){var t=a.indexOf(b,c)
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
h8:function h8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dd:function dd(a,b){this.a=a
this.b=b},
eJ:function eJ(a,b,c){this.a=a
this.b=b
this.c=c},
hb:function hb(a){this.a=a},
iX:function iX(a){this.a=a},
dA:function dA(a,b){this.a=a
this.b=b},
iE:function iE(a){this.a=a},
iF:function iF(a,b){this.a=a
this.b=b},
iG:function iG(a,b,c){this.a=a
this.b=b
this.c=c},
iH:function iH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iI:function iI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
b8:function b8(){},
fX:function fX(){},
fK:function fK(){},
bo:function bo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ha:function ha(a){this.a=a},
dS:function dS(a){this.a=a},
fB:function fB(a){this.a=a},
hm:function hm(a){this.a=a},
aE:function aE(a,b){this.a=a
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
eI:function eI(a){this.a=a},
eL:function eL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
eM:function eM(a,b){this.a=a
this.$ti=b},
eN:function eN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iA:function iA(a){this.a=a},
iB:function iB(a){this.a=a},
iC:function iC(a){this.a=a},
f:function(a){return a},
il:function(a){var t,s,r
if(!!J.x(a).$isp)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bD:function bD(){},
be:function be(){},
f_:function f_(){},
d6:function d6(){},
d7:function d7(){},
d8:function d8(){},
d5:function d5(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
d9:function d9(){},
f6:function f6(){},
bE:function bE(){},
bF:function bF(){},
bG:function bG(){},
bH:function bH(){},
n1:function(a){var t=H.D(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
iO:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
x:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d0.prototype
return J.d_.prototype}if(typeof a=="string")return J.aR.prototype
if(a==null)return J.eH.prototype
if(typeof a=="boolean")return J.eG.prototype
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.q)return a
return J.iw(a)},
iM:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iw:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jr==null){H.n9()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.dt("Return interceptor for "+H.i(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jb()]
if(p!=null)return p
p=H.ne(a)
if(p!=null)return p
if(typeof a=="function")return C.G
s=Object.getPrototypeOf(a)
if(s==null)return C.t
if(s===Object.prototype)return C.t
if(typeof q=="function"){Object.defineProperty(q,$.$get$jb(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
ae:function(a){if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.q)return a
return J.iw(a)},
c2:function(a){if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.q)return a
return J.iw(a)},
kW:function(a){if(typeof a=="number")return J.bc.prototype
if(a==null)return a
if(!(a instanceof P.q))return J.b_.prototype
return a},
n3:function(a){if(typeof a=="number")return J.bc.prototype
if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(!(a instanceof P.q))return J.b_.prototype
return a},
kX:function(a){if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(!(a instanceof P.q))return J.b_.prototype
return a},
n:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.q)return a
return J.iw(a)},
J:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.x(a).A(a,b)},
ap:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kW(a).as(a,b)},
la:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kW(a).aH(a,b)},
bl:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nd(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ae(a).h(a,b)},
lb:function(a,b,c,d){return J.n(a).dr(a,b,c,d)},
jy:function(a,b){return J.kX(a).aP(a,b)},
bm:function(a,b){return J.n(a).dJ(a,b)},
lc:function(a,b,c){return J.n(a).dK(a,b,c)},
jz:function(a,b){return J.n(a).bR(a,b)},
iY:function(a,b){return J.n(a).U(a,b)},
jA:function(a,b,c){return J.n(a).bU(a,b,c)},
ld:function(a,b){return J.n(a).dX(a,b)},
dG:function(a,b,c){return J.n(a).bV(a,b,c)},
le:function(a,b,c){return J.n(a).bW(a,b,c)},
jB:function(a,b,c){return J.n(a).bX(a,b,c)},
dH:function(a,b){return J.n(a).e_(a,b)},
lf:function(a,b){return J.n(a).bY(a,b)},
lg:function(a,b,c){return J.n(a).bZ(a,b,c)},
jC:function(a,b,c,d){return J.n(a).c_(a,b,c,d)},
lh:function(a,b){return J.c2(a).c0(a,b)},
li:function(a,b,c,d,e){return J.n(a).c1(a,b,c,d,e)},
lj:function(a,b){return J.n3(a).V(a,b)},
iZ:function(a,b,c){return J.ae(a).e3(a,b,c)},
j_:function(a){return J.n(a).c3(a)},
lk:function(a){return J.n(a).c4(a)},
ll:function(a){return J.n(a).e9(a)},
lm:function(a,b){return J.n(a).c6(a,b)},
j0:function(a,b){return J.n(a).c7(a,b)},
ln:function(a,b,c,d){return J.n(a).c8(a,b,c,d)},
lo:function(a,b,c,d,e){return J.n(a).eg(a,b,c,d,e)},
lp:function(a,b,c,d,e){return J.n(a).c9(a,b,c,d,e)},
lq:function(a,b,c,d,e,f){return J.n(a).eh(a,b,c,d,e,f)},
lr:function(a,b){return J.c2(a).u(a,b)},
dI:function(a,b){return J.n(a).ca(a,b)},
ls:function(a,b){return J.n(a).cb(a,b)},
lt:function(a){return J.n(a).ei(a)},
lu:function(a,b){return J.c2(a).aA(a,b)},
lv:function(a){return J.n(a).gdW(a)},
aq:function(a){return J.x(a).gw(a)},
bn:function(a){return J.c2(a).gB(a)},
dJ:function(a){return J.ae(a).gk(a)},
lw:function(a){return J.n(a).gb6(a)},
lx:function(a){return J.x(a).gD(a)},
ly:function(a){return J.n(a).geH(a)},
lz:function(a){return J.n(a).gaE(a)},
j1:function(a){return J.n(a).gm(a)},
j2:function(a){return J.n(a).gn(a)},
jD:function(a){return J.n(a).gO(a)},
j3:function(a,b){return J.n(a).ab(a,b)},
lA:function(a){return J.n(a).aG(a)},
lB:function(a,b){return J.n(a).bb(a,b)},
lC:function(a,b,c){return J.n(a).bc(a,b,c)},
jE:function(a,b,c){return J.n(a).bf(a,b,c)},
lD:function(a,b){return J.n(a).cd(a,b)},
lE:function(a,b){return J.c2(a).cf(a,b)},
lF:function(a){return J.c2(a).eB(a)},
lG:function(a,b){return J.n(a).K(a,b)},
lH:function(a,b,c,d){return J.n(a).bn(a,b,c,d)},
lI:function(a){return J.kX(a).eK(a)},
az:function(a){return J.x(a).l(a)},
lJ:function(a,b,c,d){return J.n(a).eM(a,b,c,d)},
lK:function(a,b,c){return J.n(a).cm(a,b,c)},
lL:function(a,b,c){return J.n(a).cn(a,b,c)},
j4:function(a,b,c){return J.n(a).co(a,b,c)},
lM:function(a,b,c){return J.n(a).cp(a,b,c)},
jF:function(a,b,c){return J.n(a).cq(a,b,c)},
jG:function(a,b,c){return J.n(a).cr(a,b,c)},
jH:function(a,b,c){return J.n(a).cs(a,b,c)},
jI:function(a,b,c,d){return J.n(a).ct(a,b,c,d)},
jJ:function(a,b,c,d){return J.n(a).cu(a,b,c,d)},
lN:function(a,b){return J.n(a).cw(a,b)},
lO:function(a,b,c){return J.n(a).eN(a,b,c)},
jK:function(a,b,c,d,e,f,g){return J.n(a).cA(a,b,c,d,e,f,g)},
lP:function(a,b,c,d,e){return J.n(a).cB(a,b,c,d,e)},
a:function a(){},
eG:function eG(){},
eH:function eH(){},
bA:function bA(){},
fl:function fl(){},
b_:function b_(){},
aS:function aS(){},
aQ:function aQ(a){this.$ti=a},
j9:function j9(a){this.$ti=a},
dN:function dN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bc:function bc(){},
d0:function d0(){},
d_:function d_(){},
aR:function aR(){}},P={
mA:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.mU()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.c0(new P.ho(t),1)).observe(s,{childList:true})
return new P.hn(t,s,r)}else if(self.setImmediate!=null)return P.mV()
return P.mW()},
mB:function(a){++u.globalState.f.b
self.scheduleImmediate(H.c0(new P.hp(a),0))},
mC:function(a){++u.globalState.f.b
self.setImmediate(H.c0(new P.hq(a),0))},
mD:function(a){P.jh(C.n,a)},
mP:function(a,b){if(H.bk(a,{func:1,args:[P.aW,P.aW]})){b.toString
return a}else{b.toString
return a}},
mF:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.ax))
H.d(b.a===0)
b.a=1
try{a.cl(new P.hG(b),new P.hH(b))}catch(r){t=H.S(r)
s=H.aI(r)
P.nk(new P.hI(b,t,s))}},
kG:function(a,b){var t,s,r,q
H.d(b.a<=1)
for(;t=a.a,s=t===2,s;){H.d(s)
a=a.c}s=b.a
if(t>=4){H.d(s<4)
r=b.c
b.c=null
q=b.ai(r)
H.d(b.a<4)
H.d(a.a>=4)
b.a=a.a
b.c=a.c
P.bR(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bK(q)}},
bR:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.im(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bR(t.a,b)}s=t.a
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
P.im(null,null,p,o,s)
return}s=$.E
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.E
H.d(l==null?s!=null:l!==s)
j=$.E
$.E=l
i=j}else i=null
s=b.c
if(s===8)new P.hM(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.hL(r,b,m).$0()}else if((s&2)!==0)new P.hK(t,r,b).$0()
if(i!=null){H.d(!0)
$.E=i}s=r.b
if(!!J.x(s).$isev){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.ai(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.kG(s,o)
return}}g=b.b
H.d(g.a<4)
h=g.c
g.c=null
b=g.ai(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.d(!o)
g.a=4
g.c=p}else{H.d(!o)
g.a=8
g.c=p}t.a=g
s=g}},
mO:function(){var t,s
for(;t=$.bi,t!=null;){$.bZ=null
s=t.b
$.bi=s
if(s==null)$.bY=null
t.a.$0()}},
mS:function(){$.jn=!0
try{P.mO()}finally{$.bZ=null
$.jn=!1
if($.bi!=null)$.$get$jj().$1(P.kS())}},
kN:function(a){var t=new P.dv(a,null)
if($.bi==null){$.bY=t
$.bi=t
if(!$.jn)$.$get$jj().$1(P.kS())}else{$.bY.b=t
$.bY=t}},
mR:function(a){var t,s,r
t=$.bi
if(t==null){P.kN(a)
$.bZ=$.bY
return}s=new P.dv(a,null)
r=$.bZ
if(r==null){s.b=t
$.bZ=s
$.bi=s}else{s.b=r.b
r.b=s
$.bZ=s
if(s.b==null)$.bY=s}},
nk:function(a){var t=$.E
if(C.d===t){P.ip(null,null,C.d,a)
return}t.toString
P.ip(null,null,t,t.b0(a))},
my:function(a,b){var t=$.E
if(t===C.d){t.toString
return P.jh(a,b)}return P.jh(a,t.b0(b))},
jh:function(a,b){var t=C.b.H(a.a,1000)
return H.mx(t<0?0:t,b)},
ji:function(a){var t,s
H.d(a!=null)
t=$.E
H.d(a==null?t!=null:a!==t)
s=$.E
$.E=a
return s},
im:function(a,b,c,d,e){var t={}
t.a=d
P.mR(new P.io(t,e))},
kL:function(a,b,c,d){var t,s
if($.E===c)return d.$0()
t=P.ji(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.E=s}},
kM:function(a,b,c,d,e){var t,s
if($.E===c)return d.$1(e)
t=P.ji(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.E=s}},
mQ:function(a,b,c,d,e,f){var t,s
if($.E===c)return d.$2(e,f)
t=P.ji(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.E=s}},
ip:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.b0(d):c.dY(d)
P.kN(d)},
ho:function ho(a){this.a=a},
hn:function hn(a,b,c){this.a=a
this.b=b
this.c=c},
hp:function hp(a){this.a=a},
hq:function hq(a){this.a=a},
hu:function hu(){},
ic:function ic(a,b){this.a=a
this.$ti=b},
dx:function dx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hF:function hF(a,b){this.a=a
this.b=b},
hJ:function hJ(a,b){this.a=a
this.b=b},
hG:function hG(a){this.a=a},
hH:function hH(a){this.a=a},
hI:function hI(a,b,c){this.a=a
this.b=b
this.c=c},
hM:function hM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hN:function hN(a){this.a=a},
hL:function hL(a,b,c){this.a=a
this.b=b
this.c=c},
hK:function hK(a,b,c){this.a=a
this.b=b
this.c=c},
dv:function dv(a,b){this.a=a
this.b=b},
fO:function fO(){},
fQ:function fQ(a){this.a=a},
fR:function fR(a,b){this.a=a
this.b=b},
fP:function fP(){},
b7:function b7(a,b){this.a=a
this.b=b},
ik:function ik(){},
io:function io(a,b){this.a=a
this.b=b},
hZ:function hZ(){},
i0:function i0(a,b){this.a=a
this.b=b},
i_:function i_(a,b){this.a=a
this.b=b},
i1:function i1(a,b){this.a=a
this.b=b},
kf:function(a,b){return new H.ah(0,null,null,null,null,null,0,[a,b])},
O:function(){return new H.ah(0,null,null,null,null,null,0,[null,null])},
aU:function(a){return H.n2(a,new H.ah(0,null,null,null,null,null,0,[null,null]))},
bV:function(a,b){return new P.dy(0,null,null,null,null,null,0,[a,b])},
mJ:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
me:function(a,b,c){var t,s
if(P.jo(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$c_()
C.a.i(s,a)
try{P.mN(a,t)}finally{H.d(C.a.gaD(s)===a)
s.pop()}s=P.ko(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eE:function(a,b,c){var t,s,r
if(P.jo(a))return b+"..."+c
t=new P.bN(b)
s=$.$get$c_()
C.a.i(s,a)
try{r=t
r.a=P.ko(r.ga8(),a,", ")}finally{H.d(C.a.gaD(s)===a)
s.pop()}s=t
s.a=s.ga8()+c
s=t.ga8()
return s.charCodeAt(0)==0?s:s},
jo:function(a){var t,s
for(t=0;s=$.$get$c_(),t<s.length;++t)if(a===s[t])return!0
return!1},
mN:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gB(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.p())return
q=H.i(t.gt())
C.a.i(b,q)
s+=q.length+2;++r}if(!t.p()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gt();++r
if(!t.p()){if(r<=4){C.a.i(b,H.i(n))
return}p=H.i(n)
o=b.pop()
s+=p.length+2}else{m=t.gt();++r
H.d(r<100)
for(;t.p();n=m,m=l){l=t.gt();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.i(b,"...")
return}}o=H.i(n)
p=H.i(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.i(b,k)
C.a.i(b,o)
C.a.i(b,p)},
ai:function(a,b,c,d){return new P.hS(0,null,null,null,null,null,0,[d])},
jd:function(a,b){var t,s
t=P.ai(null,null,null,b)
for(s=J.bn(a);s.p();)t.i(0,s.gt())
return t},
mh:function(a){var t,s,r
t={}
if(P.jo(a))return"{...}"
s=new P.bN("")
try{C.a.i($.$get$c_(),a)
r=s
r.a=r.ga8()+"{"
t.a=!0
a.aA(0,new P.eR(t,s))
t=s
t.a=t.ga8()+"}"}finally{t=$.$get$c_()
H.d(C.a.gaD(t)===a)
t.pop()}t=s.ga8()
return t.charCodeAt(0)==0?t:t},
je:function(a,b){var t=new P.eO(null,0,0,0,[b])
t.d6(a,b)
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
hS:function hS(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hT:function hT(a,b,c){this.a=a
this.b=b
this.c=c},
bU:function bU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hQ:function hQ(){},
d1:function d1(){},
y:function y(){},
eR:function eR(a,b){this.a=a
this.b=b},
eO:function eO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hU:function hU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fE:function fE(){},
fD:function fD(){},
bJ:function bJ(){},
ko:function(a,b,c){var t=J.bn(b)
if(!t.p())return a
if(c.length===0){do a+=H.i(t.gt())
while(t.p())}else{a+=H.i(t.gt())
for(;t.p();)a=a+c+H.i(t.gt())}return a},
lW:function(a,b){return J.lj(a,b)},
lZ:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.i(t)
if(t>=10)return s+"00"+H.i(t)
return s+"000"+H.i(t)},
m_:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c8:function(a){if(a>=10)return""+a
return"0"+a},
j7:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.az(a)
if(typeof a==="string")return JSON.stringify(a)
return P.m3(a)},
m3:function(a){var t=J.x(a)
if(!!t.$isb8)return t.l(a)
return H.fr(a)},
jL:function(a){return new P.af(!1,null,null,a)},
jM:function(a,b,c){return new P.af(!0,a,b,c)},
lQ:function(a){return new P.af(!1,null,a,"Must not be null")},
fs:function(a,b,c){return new P.dh(null,null,!0,a,b,"Value not in range")},
aY:function(a,b,c,d,e){return new P.dh(b,c,!0,a,d,"Invalid value")},
kk:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.aY(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.aY(b,a,c,"end",f))
return b},
C:function(a,b,c,d,e){var t=e!=null?e:J.dJ(b)
return new P.eA(b,t,!0,a,c,"Index out of range")},
ce:function(a){return new P.hE(a)},
kg:function(a,b,c){var t,s
t=H.D([],[c])
for(s=J.bn(a);s.p();)C.a.i(t,s.gt())
if(b)return t
t.fixed$length=Array
return t},
ao:function(a){H.iO(H.i(a))},
ay:function ay(){},
L:function L(){},
bp:function bp(a,b){this.a=a
this.b=b},
P:function P(){},
aP:function aP(a){this.a=a},
e2:function e2(){},
e3:function e3(){},
ba:function ba(){},
c5:function c5(a){this.a=a},
de:function de(){},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dh:function dh(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eA:function eA(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
w:function w(a){this.a=a},
dt:function dt(a){this.a=a},
aD:function aD(a){this.a=a},
a2:function a2(a){this.a=a},
dl:function dl(){},
dW:function dW(a){this.a=a},
hE:function hE(a){this.a=a},
e5:function e5(a,b,c){this.a=a
this.b=b
this.$ti=c},
o:function o(){},
X:function X(){},
cZ:function cZ(){},
b:function b(){},
aC:function aC(){},
aW:function aW(){},
W:function W(){},
q:function q(){},
bM:function bM(){},
v:function v(){},
bN:function bN(a){this.a=a},
it:function(a){var t,s,r,q,p
if(a==null)return
t=P.O()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.H)(s),++q){p=s[q]
t.j(0,p,a[p])}return t},
n_:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.lu(a,new P.is(t))
return t},
k4:function(){var t=$.k3
if(t==null){t=J.iZ(window.navigator.userAgent,"Opera",0)
$.k3=t}return t},
m0:function(){var t,s
t=$.k0
if(t!=null)return t
s=$.k1
if(s==null){s=J.iZ(window.navigator.userAgent,"Firefox",0)
$.k1=s}if(s)t="-moz-"
else{s=$.k2
if(s==null){s=!P.k4()&&J.iZ(window.navigator.userAgent,"Trident/",0)
$.k2=s}if(s)t="-ms-"
else t=P.k4()?"-o-":"-webkit-"}$.k0=t
return t},
is:function is(a){this.a=a},
nn:function(a){return Math.sqrt(a)},
hY:function hY(){},
M:function M(){},
dK:function dK(){},
aM:function aM(){},
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
eq:function eq(){},
es:function es(){},
ag:function ag(){},
aB:function aB(){},
ez:function ez(){},
as:function as(){},
eK:function eK(){},
eS:function eS(){},
eT:function eT(){},
at:function at(){},
fa:function fa(){},
fi:function fi(){},
fn:function fn(){},
fo:function fo(){},
ft:function ft(){},
fu:function fu(){},
bL:function bL(){},
fS:function fS(){},
K:function K(){},
fT:function fT(){},
fU:function fU(){},
dn:function dn(){},
fY:function fY(){},
bP:function bP(){},
au:function au(){},
h6:function h6(){},
hd:function hd(){},
hf:function hf(){},
hg:function hg(){},
bS:function bS(){},
i2:function i2(){},
i3:function i3(){},
i4:function i4(){},
cA:function cA(){},
cm:function cm(){},
cr:function cr(){},
cw:function cw(){},
cK:function cK(){},
cL:function cL(){},
cN:function cN(){},
cT:function cT(){},
dO:function dO(){},
fy:function fy(){},
fz:function fz(){},
ih:function ih(){},
fJ:function fJ(){},
cB:function cB(){},
cO:function cO(){}},W={
m1:function(a,b,c){var t,s
t=document.body
s=(t&&C.f).P(t,a,b,c)
s.toString
t=new H.du(new W.U(s),new W.ir(),[W.u])
return t.ga7(t)},
m2:function(a){return"wheel"},
br:function(a){var t,s,r
t="element tag unavailable"
try{s=J.ly(a)
if(typeof s==="string")t=a.tagName}catch(r){H.S(r)}return t},
mE:function(a,b){return document.createElement(a)},
b5:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kJ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
al:function(a,b,c,d,e){var t=c==null?null:W.kO(new W.hD(c))
t=new W.hC(0,a,b,t,!1,[e])
t.dk(a,b,c,!1,e)
return t},
kH:function(a){var t,s
t=document.createElement("a")
s=new W.i5(t,window.location)
s=new W.bT(s)
s.dl(a)
return s},
mH:function(a,b,c,d){return!0},
mI:function(a,b,c,d){var t,s,r,q,p
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
kK:function(){var t=P.v
t=new W.id(P.jd(C.j,t),P.ai(null,null,null,t),P.ai(null,null,null,t),P.ai(null,null,null,t),null)
t.dn(null,new H.bB(C.j,new W.ie(),[H.aJ(C.j,0),null]),["TEMPLATE"],null)
return t},
kO:function(a){var t=$.E
if(t===C.d)return a
return t.dZ(a)},
m:function m(){},
dL:function dL(){},
dM:function dM(){},
a1:function a1(){},
dP:function dP(){},
c6:function c6(){},
aN:function aN(){},
c7:function c7(){},
dR:function dR(){},
aO:function aO(){},
dU:function dU(){},
A:function A(){},
b9:function b9(){},
dV:function dV(){},
dX:function dX(){},
dY:function dY(){},
c9:function c9(){},
bq:function bq(){},
ca:function ca(){},
dZ:function dZ(){},
cb:function cb(){},
e_:function e_(){},
cc:function cc(){},
cd:function cd(){},
e0:function e0(){},
e1:function e1(){},
a3:function a3(){},
ir:function ir(){},
l:function l(){},
j:function j(){},
a4:function a4(){},
eo:function eo(){},
ep:function ep(){},
et:function et(){},
a5:function a5(){},
ci:function ci(){},
ex:function ex(){},
by:function by(){},
cj:function cj(){},
ey:function ey(){},
bz:function bz(){},
eB:function eB(){},
aT:function aT(){},
eP:function eP(){},
eV:function eV(){},
eX:function eX(){},
bC:function bC(){},
a6:function a6(){},
eY:function eY(){},
Q:function Q(){},
f7:function f7(){},
U:function U(a){this.a=a},
u:function u(){},
da:function da(){},
bI:function bI(){},
fh:function fh(){},
fk:function fk(){},
a7:function a7(){},
fm:function fm(){},
fp:function fp(){},
fq:function fq(){},
dg:function dg(){},
fA:function fA(){},
di:function di(){},
fC:function fC(){},
fF:function fF(){},
a8:function a8(){},
fG:function fG(){},
a9:function a9(){},
fI:function fI(){},
aa:function aa(){},
fN:function fN(){},
Y:function Y(){},
ak:function ak(){},
dm:function dm(){},
fV:function fV(){},
fW:function fW(){},
bO:function bO(){},
ab:function ab(){},
Z:function Z(){},
fZ:function fZ(){},
h_:function h_(){},
h0:function h0(){},
ac:function ac(){},
aZ:function aZ(){},
h4:function h4(){},
h5:function h5(){},
bg:function bg(){},
h7:function h7(){},
dr:function dr(){},
aF:function aF(){},
hc:function hc(){},
he:function he(){},
hh:function hh(){},
hi:function hi(){},
b0:function b0(){},
bQ:function bQ(){},
hk:function hk(a){this.a=a},
hl:function hl(){},
b1:function b1(){},
ht:function ht(){},
dw:function dw(){},
hv:function hv(){},
hw:function hw(){},
hx:function hx(){},
hO:function hO(){},
hP:function hP(){},
dz:function dz(){},
i6:function i6(){},
i9:function i9(){},
ia:function ia(){},
ii:function ii(){},
ij:function ij(){},
hr:function hr(){},
hy:function hy(a){this.a=a},
hB:function hB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jk:function jk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hC:function hC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hD:function hD(a){this.a=a},
bT:function bT(a){this.a=a},
B:function B(){},
dc:function dc(a){this.a=a},
f9:function f9(a){this.a=a},
f8:function f8(a,b,c){this.a=a
this.b=b
this.c=c},
bW:function bW(){},
i7:function i7(){},
i8:function i8(){},
id:function id(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ie:function ie(){},
ib:function ib(){},
ch:function ch(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
db:function db(){},
i5:function i5(a,b){this.a=a
this.b=b},
dB:function dB(a){this.a=a},
ig:function ig(a){this.a=a},
bs:function bs(){},
bt:function bt(){},
bu:function bu(){},
bv:function bv(){},
bw:function bw(){},
bx:function bx(){},
ck:function ck(){},
cE:function cE(){},
cq:function cq(){},
cn:function cn(){},
cx:function cx(){},
cy:function cy(){},
cz:function cz(){},
cC:function cC(){},
cD:function cD(){},
cl:function cl(){},
co:function co(){},
cp:function cp(){},
cs:function cs(){},
ct:function ct(){},
cu:function cu(){},
cv:function cv(){},
cF:function cF(){},
cG:function cG(){},
cH:function cH(){},
cR:function cR(){},
cS:function cS(){},
cP:function cP(){},
cQ:function cQ(){},
cV:function cV(){},
cW:function cW(){},
cX:function cX(){},
cY:function cY(){},
cI:function cI(){},
cJ:function cJ(){},
cM:function cM(){},
cU:function cU(){}},B={
nl:function(a){var t,s
t=document
s=W.aT
W.al(t,"keydown",new B.iQ(),!1,s)
W.al(t,"keyup",new B.iR(),!1,s)
if(!$.nm)W.al(t,"mousemove",new B.iS(),!1,W.Q)
s=W.Q
W.al(t,"mousedown",new B.iT(),!1,s)
W.al(t,"mouseup",new B.iU(),!1,s)},
mi:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.f(3))
s=$.$get$iu()
r=$.$get$c1()
q=new T.F(new Float32Array(H.f(16)))
q.F()
q=new B.fb(a,b,c,0,new T.h(t),-0.02,s,r,q,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"camera:orbit",!1,!0)
q.d8(a,b,c,d)
return q},
iQ:function iQ(){},
iR:function iR(){},
iS:function iS(){},
iT:function iT(){},
iU:function iU(){},
fb:function fb(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
fc:function fc(a){this.a=a},
fd:function fd(a){this.a=a},
fe:function fe(){},
ff:function ff(a){this.a=a},
lX:function(d1,d2,d3,d4,d5,d6,d7,d8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
t=-d6
s=-d7
r=new T.h(new Float32Array(H.f(3)))
r.q(t,s,d8)
q=new T.h(new Float32Array(H.f(3)))
q.q(d6,s,d8)
p=new T.h(new Float32Array(H.f(3)))
p.q(d6,d7,d8)
o=new T.h(new Float32Array(H.f(3)))
o.q(t,d7,d8)
n=-d8
m=new T.h(new Float32Array(H.f(3)))
m.q(t,s,n)
l=new T.h(new Float32Array(H.f(3)))
l.q(t,d7,n)
k=new T.h(new Float32Array(H.f(3)))
k.q(d6,d7,n)
j=new T.h(new Float32Array(H.f(3)))
j.q(d6,s,n)
i=new T.h(new Float32Array(H.f(3)))
i.q(t,d7,n)
h=new T.h(new Float32Array(H.f(3)))
h.q(t,d7,d8)
g=new T.h(new Float32Array(H.f(3)))
g.q(d6,d7,d8)
f=new T.h(new Float32Array(H.f(3)))
f.q(d6,d7,n)
e=new T.h(new Float32Array(H.f(3)))
e.q(d6,s,d8)
d=new T.h(new Float32Array(H.f(3)))
d.q(t,s,d8)
c=new T.h(new Float32Array(H.f(3)))
c.q(t,s,n)
b=new T.h(new Float32Array(H.f(3)))
b.q(d6,s,n)
a=new T.h(new Float32Array(H.f(3)))
a.q(d6,s,n)
a0=new T.h(new Float32Array(H.f(3)))
a0.q(d6,d7,n)
a1=new T.h(new Float32Array(H.f(3)))
a1.q(d6,d7,d8)
a2=new T.h(new Float32Array(H.f(3)))
a2.q(d6,s,d8)
a3=new T.h(new Float32Array(H.f(3)))
a3.q(t,s,n)
a4=new T.h(new Float32Array(H.f(3)))
a4.q(t,s,d8)
s=new T.h(new Float32Array(H.f(3)))
s.q(t,d7,d8)
a5=new T.h(new Float32Array(H.f(3)))
a5.q(t,d7,n)
n=new Float32Array(H.f(2))
n[0]=d3
n[1]=d5
t=new Float32Array(H.f(2))
t[0]=d2
t[1]=d5
a6=new Float32Array(H.f(2))
a6[0]=d2
a6[1]=d4
a7=new Float32Array(H.f(2))
a7[0]=d3
a7[1]=d4
a8=new Float32Array(H.f(2))
a8[0]=d2
a8[1]=d5
a9=new Float32Array(H.f(2))
a9[0]=d2
a9[1]=d4
b0=new Float32Array(H.f(2))
b0[0]=d3
b0[1]=d4
b1=new Float32Array(H.f(2))
b1[0]=d3
b1[1]=d5
b2=new Float32Array(H.f(2))
b2[0]=d3
b2[1]=d4
b3=new Float32Array(H.f(2))
b3[0]=d3
b3[1]=d5
b4=new Float32Array(H.f(2))
b4[0]=d2
b4[1]=d5
b5=new Float32Array(H.f(2))
b5[0]=d2
b5[1]=d4
b6=new Float32Array(H.f(2))
b6[0]=d2
b6[1]=d4
b7=new Float32Array(H.f(2))
b7[0]=d3
b7[1]=d4
b8=new Float32Array(H.f(2))
b8[0]=d3
b8[1]=d5
b9=new Float32Array(H.f(2))
b9[0]=d2
b9[1]=d5
c0=new Float32Array(H.f(2))
c0[0]=d2
c0[1]=d5
c1=new Float32Array(H.f(2))
c1[0]=d2
c1[1]=d4
c2=new Float32Array(H.f(2))
c2[0]=d3
c2[1]=d4
c3=new Float32Array(H.f(2))
c3[0]=d3
c3[1]=d5
c4=new Float32Array(H.f(2))
c4[0]=d3
c4[1]=d5
c5=new Float32Array(H.f(2))
c5[0]=d2
c5[1]=d5
c6=new Float32Array(H.f(2))
c6[0]=d2
c6[1]=d4
c7=new Float32Array(H.f(2))
c7[0]=d3
c7[1]=d4
c8=new G.bb(!1,[],[],[],P.O())
c8.a2("aTexUV")
c8.a2("aNormal")
c8.bp(6)
c8.aM([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.at("aTexUV",[new T.t(n),new T.t(t),new T.t(a6),new T.t(a7),new T.t(a8),new T.t(a9),new T.t(b0),new T.t(b1),new T.t(b2),new T.t(b3),new T.t(b4),new T.t(b5),new T.t(b6),new T.t(b7),new T.t(b8),new T.t(b9),new T.t(c0),new T.t(c1),new T.t(c2),new T.t(c3),new T.t(c4),new T.t(c5),new T.t(c6),new T.t(c7)])
for(c9=0;t=$.$get$kF(),c9<6;++c9){d0=t[c9]
c8.aL("aNormal",[d0,d0,d0,d0])}return c8},
lY:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t=a3/2
s=[]
r=[]
q=[]
p=new T.h(new Float32Array(H.f(3)))
p.q(0,t,0)
C.a.i(s,p)
p=new Float32Array(H.f(2))
p[0]=0
p[1]=0
C.a.i(r,new T.t(p))
p=new T.h(new Float32Array(H.f(3)))
p.q(0,1,0)
C.a.i(q,p)
p=-t
o=new T.h(new Float32Array(H.f(3)))
o.q(0,p,0)
C.a.i(s,o)
o=new Float32Array(H.f(2))
o[0]=1
o[1]=1
C.a.i(r,new T.t(o))
o=new T.h(new Float32Array(H.f(3)))
o.q(0,-1,0)
C.a.i(q,o)
for(n=0;n<a4;++n){m=n/a4
o=m*3.141592653589793*2
l=Math.sin(o)
o=Math.cos(o)
k=new Float32Array(3)
k[0]=l*a1
k[1]=t
k[2]=o*a1
C.a.i(s,new T.h(k))
k=new Float32Array(2)
k[0]=m
k[1]=1
C.a.i(r,new T.t(k))
k=new Float32Array(3)
k[0]=0
k[1]=1
k[2]=0
C.a.i(q,new T.h(k))
k=new Float32Array(3)
k[0]=l*a2
k[1]=p
k[2]=o*a2
C.a.i(s,new T.h(k))
o=new Float32Array(2)
o[0]=m
o[1]=0
C.a.i(r,new T.t(o))
o=new Float32Array(3)
o[0]=0
o[1]=-1
o[2]=0
C.a.i(q,new T.h(o))}p=2*a4
o=2+p
H.d(s.length===o)
H.d(r.length===o)
for(n=0;n<p;n=j){j=n+2
C.a.i(s,s[j])
o=n+3
C.a.i(s,s[o])
C.a.i(r,r[j])
C.a.i(r,r[o])
i=s[j]
h=s[o]
g=s[n+4]
o=new Float32Array(3)
f=new T.h(new Float32Array(3))
G.jg(i,h,g,new T.h(o),f)
C.a.i(q,f)
C.a.i(q,f)}H.d(s.length===2+4*a4)
p=[]
o=[]
e=new G.bb(!1,p,o,[],P.O())
e.a2("aTexUV")
e.aM(s)
e.at("aTexUV",r)
e.a2("aNormal")
e.aL("aNormal",q)
for(d=a4*2,n=0;n<a4;n=b){c=n*2+2
h=c+1
b=n+1
a=(b===a4?0:b)*2+2
a0=a+1
H.d(!0)
C.a.i(p,new G.z(0,c,a))
H.d(!0)
C.a.i(p,new G.z(1,a0,h))
H.d(!0)
C.a.i(o,new G.cf(d+a,d+c,d+h,d+a0))}return e},
m7:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=[]
s=[]
C.a.M(t,$.$get$k9())
C.a.M(s,$.$get$ka())
for(r=0;r<a3;++r,t=q){q=[]
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.H)(t),++o){n=t[o]
m=n.a
l=s[m]
k=new T.h(new Float32Array(3))
k.v(l)
l=n.b
k.i(0,s[l])
k.a1(0,0.5)
k.C(0)
j=s[l]
i=new T.h(new Float32Array(3))
i.v(j)
j=n.c
i.i(0,s[j])
i.a1(0,0.5)
i.C(0)
h=s[j]
g=new T.h(new Float32Array(3))
g.v(h)
g.i(0,s[m])
g.a1(0,0.5)
g.C(0)
f=s.length
C.a.i(s,k)
e=s.length
C.a.i(s,i)
d=s.length
C.a.i(s,g)
C.a.i(q,new G.z(m,f,d))
C.a.i(q,new G.z(l,e,f))
C.a.i(q,new G.z(j,d,e))
C.a.i(q,new G.z(f,e,d))}}c=new G.bb(!1,[],[],[],P.O())
c.a2("aTexUV")
c.a2("aNormal")
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.H)(t),++o){n=t[o]
b=s[n.a]
H.d(Math.sqrt(b.gR())<1.01&&Math.sqrt(b.gR())>0.99)
a=s[n.b]
H.d(Math.sqrt(a.gR())<1.01&&Math.sqrt(a.gR())>0.99)
a0=s[n.c]
H.d(Math.sqrt(a0.gR())<1.01&&Math.sqrt(a0.gR())>0.99)
m=b.a
l=Math.atan2(m[2],m[0])
m=Math.acos(m[1])
j=new Float32Array(2)
j[0]=0.5*(1+l*0.3183098861837907)
j[1]=m*0.3183098861837907
m=a.a
l=Math.atan2(m[2],m[0])
m=Math.acos(m[1])
h=new Float32Array(2)
h[0]=0.5*(1+l*0.3183098861837907)
h[1]=m*0.3183098861837907
m=a0.a
l=Math.atan2(m[2],m[0])
m=Math.acos(m[1])
a1=new Float32Array(2)
a1[0]=0.5*(1+l*0.3183098861837907)
a1[1]=m*0.3183098861837907
c.aL("aNormal",[b,a,a0])
m=new T.h(new Float32Array(3))
m.v(b)
m.a1(0,a4)
l=new T.h(new Float32Array(3))
l.v(a)
l.a1(0,a4)
a2=new T.h(new Float32Array(3))
a2.v(a0)
a2.a1(0,a4)
c.d_([m,l,a2])
c.at("aTexUV",[new T.t(j),new T.t(h),new T.t(a1)])}return c},
mt:function(b4,b5,b6,b7,b8,b9,c0,c1,c2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
t=[]
s=new Float32Array(H.f(3))
r=new T.h(s)
q=new T.h(new Float32Array(H.f(3)))
new Float32Array(H.f(3))
p=H.D(new Array(b9),[[P.b,P.o]])
for(o=[P.o],n=0;n<b9;++n){p[n]=H.D(new Array(c0),o)
m=n/b9*2*b6*3.141592653589793
B.l_(m,b7,b6,b8,b5,$.$get$iN())
B.l_(m+0.02,b7,b6,b8,b5,$.$get$jw())
l=$.$get$jw().a
k=l[0]
j=$.$get$iN().a
s[0]=k-j[0]
s[1]=l[1]-j[1]
s[2]=l[2]-j[2]
k=q.a
k[0]=l[0]+j[0]
k[1]=l[1]+j[1]
k[2]=l[2]+j[2]
i=r.az(q)
i.C(0)
q=i.az(r)
q.C(0)
for(l=q.a,k=i.a,h=0;h<c0;++h){g=h/c0*2*3.141592653589793
f=c1*Math.cos(g)
e=c1*Math.sin(g)
j=$.$get$iN().a
d=j[0]
c=l[0]
b=k[0]
a=j[1]
a0=l[1]
a1=k[1]
j=j[2]
a2=l[2]
a3=k[2]
a4=new Float32Array(3)
a4[0]=d+f*c+e*b
a4[1]=a+f*a0+e*a1
a4[2]=j+f*a2+e*a3
C.a.i(t,new T.h(a4))
p[n][h]=t.length-1}}a5=new G.bb(!1,[],[],[],P.O())
a5.a2("aTexUV")
for(n=0;n<b9;n=a6)for(a6=n+1,a7=a6%b9,h=0;h<c0;h=a8){a8=h+1
a9=a8%c0
s=p[n]
b0=s[h]
o=p[a7]
b1=o[h]
b2=o[a9]
b3=s[a9]
s=h/c0
o=new Float32Array(2)
o[0]=0
o[1]=s
l=new Float32Array(2)
l[0]=1
l[1]=s
s=a8/c0
k=new Float32Array(2)
k[0]=1
k[1]=s
j=new Float32Array(2)
j[0]=0
j[1]=s
a5.bp(1)
a5.aM([C.a.h(t,b3),C.a.h(t,b2),C.a.h(t,b1),C.a.h(t,b0)])
a5.at("aTexUV",[new T.t(o),new T.t(l),new T.t(k),new T.t(j)])}a5.d3()
return a5},
l_:function(a,b,c,d,e,f){var t,s,r,q,p
t=Math.cos(a)
s=Math.sin(a)
r=b/c*a
q=d*(2+Math.cos(r))
p=f.a
p[0]=q*0.5*t
p[1]=q*s*0.5
p[2]=e*d*Math.sin(r)*0.5
return f}},G={
mz:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.i(t[s])}return C.a.ao(t,"\n")},
kE:function(a,b,c){var t,s,r,q
t=J.n(a)
s=t.c5(a,b)
t.bk(a,s,c)
t.c2(a,s)
r=t.be(a,s,35713)
if(r!=null&&!r){q=t.bd(a,s)
P.ao("E:Compilation failed:")
P.ao("E:"+G.mz(c))
P.ao("E:Failure:")
P.ao(C.e.a5("E:",q))
throw H.e(q)}return s},
jg:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
d.v(b)
d.aI(a)
e.v(c)
e.aI(a)
t=e.a
s=t[0]
r=t[1]
q=t[2]
p=d.a
o=p[0]
n=p[1]
m=p[2]
t[0]=r*m-q*n
t[1]=q*o-s*m
t[2]=s*n-r*o
t=Math.sqrt(e.gR())
if(t===0)return!1
e.a1(0,-1/t)
return!0},
d4:function(a){var t=new G.eU(P.O(),a,!1,!0)
t.d7(a)
return t},
k8:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.j1(a[s])
b[t+1]=J.j2(a[s])
b[t+2]=J.jD(a[s])}return b},
m5:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.j1(a[s])
b[t+1]=J.j2(a[s])}return b},
m6:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.j1(a[s])
b[t+1]=J.j2(a[s])
b[t+2]=J.jD(a[s])
b[t+3]=J.lz(a[s])}return b},
m4:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.bl(a[s],0)
b[t+1]=J.bl(a[s],1)
b[t+2]=J.bl(a[s],2)
b[t+3]=J.bl(a[s],3)}return b},
mG:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gG(t),s=s.gB(s),r=b.x,q=[[P.b,P.o]],p=[P.P],o=[T.aG],n=[T.h],m=[T.t];s.p();){l=s.gt()
if(!r.I(0,l)){k="Dropping unnecessary attribute: "+H.i(l)
if($.kV>0)H.iO("I: "+k)
continue}j=t.h(0,l)
switch($.$get$a_().h(0,l).a){case"vec2":b.ad(l,G.m5(H.dF(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.ad(l,G.k8(H.dF(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.ad(l,G.m6(H.dF(j,"$isb",o,"$asb"),null),4)
break
case"float":b.ad(l,new Float32Array(H.il(H.dF(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.ad(l,G.m4(H.dF(j,"$isb",q,"$asb"),null),4)
break
default:if(H.aH(!1))H.b6("unknown type for "+H.i(l)+" ["+J.lx(j[0]).l(0)+"] ["+new H.aE(H.iy(j),null).l(0)+"] "+H.i(j))}}},
ew:function(a,b,c){var t,s,r,q,p,o,n,m
t=b.d
s=b.e.x
r=P.O()
q=J.ll(t.a)
p=new G.eW(t,q,4,r,s,null,0,-1,null,null,P.O(),"meshdata:"+a,!1,!0)
o=G.k8(c.d,null)
r.j(0,"aPosition",J.j_(t.a))
p.ch=o
p.br("aPosition",o,3)
n=$.$get$a_().h(0,"aPosition")
if(n==null)H.I("Unknown canonical aPosition")
H.d(s.I(0,"aPosition"))
m=s.h(0,"aPosition")
J.dH(t.a,q)
t.cc(0,m,0)
s=r.h(0,"aPosition")
r=n.bt()
J.dG(t.a,34962,s)
J.jK(t.a,m,r,5126,!1,0,0)
s=c.d2()
p.y=J.j_(t.a)
H.d(p.ch!=null)
r=p.ch.length
if(r<768){p.saU(new Uint8Array(H.il(s)))
p.Q=5121}else if(r<196608){p.saU(new Uint16Array(H.il(s)))
p.Q=5123}else{p.saU(new Uint32Array(H.il(s)))
p.Q=5125}J.dH(t.a,q)
s=p.y
r=p.cx
q=J.x(r)
H.d(!!q.$iskA||!!q.$iskB||!!q.$iskC)
J.dG(t.a,34963,s)
J.jC(t.a,34963,r,35048)
G.mG(c,p)
return p},
ms:function(a,b,c,d){var t=new G.fx(b,c,d,null,null,P.O(),P.O(),P.ai(null,null,null,P.v),null,a,!1,!0)
t.da(a,b,c,d)
return t},
eZ:function eZ(){},
ds:function ds(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dQ:function dQ(){},
dT:function dT(a,b){this.a=a
this.b=b},
eu:function eu(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
cf:function cf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bb:function bb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dq:function dq(a,b,c){this.a=a
this.b=b
this.c=c},
dp:function dp(a,b,c){this.a=a
this.b=b
this.c=c},
eU:function eU(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eW:function eW(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
fg:function fg(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=a0
_.db=a1
_.dx=a2
_.dy=a3
_.d=a4
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
k:function k(a,b,c){this.a=a
this.b=b
this.c=c},
dj:function dj(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fH:function fH(){}},R={
km:function(a,b,c,d,e,f,g,h){return G.ew("cube",a,B.lX(!0,b,c,d,e,f,g,h))},
fL:function fL(){},
fM:function fM(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
kT:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.v(c)
s=b.d
t.b5(0,s)
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
p.e5(new T.aj(o))
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
q.j(0,"uTransformationMatrix",s)
q.j(0,"uModelMatrix",t)
q.j(0,"uNormalMatrix",p)
C.a.i(e,b.ch)
a.d1(r,e,d)
e.pop()
for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.H)(s),++l)A.kT(a,s[l],t,d,e)},
kl:function(a,b,c){var t=new A.fw(c,b,H.D([],[A.bK]),17664,0,0,0,0,a,!1,!0)
t.d9(a,b,c)
return t},
aV:function aV(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
bK:function bK(a,b,c,d,e,f){var _=this
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
t=C.K.ek(a,0,new A.iz())
s=536870911&t+(C.b.cC(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iz:function iz(){}},T={
G:function(a,b,c){var t=new Float32Array(3)
t[0]=a
t[1]=b
t[2]=c
return new T.h(t)},
kD:function(){return new T.h(new Float32Array(H.f(3)))},
aj:function aj(a){this.a=a},
F:function F(a){this.a=a},
t:function t(a){this.a=a},
h:function h(a){this.a=a},
aG:function aG(a){this.a=a}},K={
nf:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t={}
s=document
r=new R.fM(0,0,null,null,null,null)
r.dd(C.i.cF(s,"stats"),"blue","gray")
q=C.i.eA(s,"#webgl-canvas")
p=new G.dT(null,q)
s=(q&&C.w).cE(q,"webgl2",P.aU(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=s
if(s==null)H.I(P.ce('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+J.az(J.lA(s))
if($.kV>0)P.ao("I: "+o)
J.li(s,0,0,0,1)
J.dI(s,2929)
n=B.mi(25,10,0,q)
m=G.ms("textured",p,$.$get$l6(),$.$get$l5())
s=new Float32Array(H.f(16))
o=new Float32Array(H.f(16))
l=new T.F(new Float32Array(H.f(16)))
l.F()
k=new G.fg(n,new T.F(s),new T.F(o),l,1,-20,20,-20,-20,100,P.O(),"othrogrpahic",!1,!0)
k.ae()
j=A.kl("shadow",p,null)
l=[]
H.d(!0)
C.a.i(j.f,new A.bK(m,[k],l,"objects",!1,!0))
s=new T.F(new Float32Array(H.f(16)))
s.F()
o=new T.F(new Float32Array(H.f(16)))
o.F()
i=new G.fj(n,50,1,0.1,1000,s,o,new T.F(new Float32Array(H.f(16))),P.O(),"perspective",!1,!0)
i.ae()
h=A.kl("perspective",p,null)
h.r&=4294950911
s=[]
H.d(!0)
C.a.i(h.f,new A.bK(m,[i],s,"objects",!1,!0))
g=G.d4("mat1")
g.T("uColor",$.$get$jU())
f=G.d4("mat2")
f.T("uColor",$.$get$jY())
e=G.d4("mat3")
e.T("uColor",$.$get$jX())
d=G.d4("mat4")
d.T("uColor",$.$get$jV())
c=G.d4("plane")
c.T("uColor",$.$get$jW())
o=G.ew("icosahedron-3",m,B.m7(3,1,!0))
b=new Float32Array(H.f(9))
a=new T.F(new Float32Array(H.f(16)))
a.F()
a0=new T.F(new Float32Array(H.f(16)))
a0.F()
a0=new A.aV(g,o,[],new T.aj(b),a,a0,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"sphere",!1,!0)
a0.a6(0,0,0)
a=R.km(m,1,0,1,0,1,1,1)
b=new Float32Array(H.f(9))
o=new T.F(new Float32Array(H.f(16)))
o.F()
g=new T.F(new Float32Array(H.f(16)))
g.F()
g=new A.aV(f,a,[],new T.aj(b),o,g,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"cube",!1,!0)
g.a6(-5,0,-5)
o=G.ew("cylinder-32",m,B.lY(3,6,2,32,!0))
b=new Float32Array(H.f(9))
a=new T.F(new Float32Array(H.f(16)))
a.F()
f=new T.F(new Float32Array(H.f(16)))
f.F()
f=new A.aV(e,o,[],new T.aj(b),a,f,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"cylinder",!1,!0)
f.a6(5,0,-5)
a=G.ew("torusknot",m,B.mt(!0,1,2,3,1,128,16,0.4,!0))
b=new Float32Array(H.f(9))
o=new T.F(new Float32Array(H.f(16)))
o.F()
e=new T.F(new Float32Array(H.f(16)))
e.F()
e=new A.aV(d,a,[],new T.aj(b),o,e,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"torus",!1,!0)
e.a6(5,0,5)
o=R.km(m,1,0,1,0,20,0.1,20)
b=new Float32Array(H.f(9))
a=new T.F(new Float32Array(H.f(16)))
a.F()
d=new T.F(new Float32Array(H.f(16)))
d.F()
d=new A.aV(c,o,[],new T.aj(b),a,d,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"cube",!1,!0)
d.a6(0,-10,0)
a1=[a0,g,f,e,d]
for(a2=0;a2<5;++a2){a3=a1[a2]
H.d(!0)
C.a.i(l,a3)
H.d(!0)
C.a.i(s,a3)}s=new K.iL(q,k,j,i,h)
s.$1(null)
W.al(window,"resize",s,!1,W.l)
t.a=0
new K.iK(t,r,n,j,h).$1(0)},
iL:function iL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iK:function iK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e}}
var v=[C,H,J,P,W,B,G,R,A,T,K]
setFunctionNamesIfNecessary(v)
var $={}
H.ja.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gw:function(a){return H.aX(a)},
l:function(a){return H.fr(a)},
gD:function(a){return new H.aE(H.iy(a),null)}}
J.eG.prototype={
l:function(a){return String(a)},
gw:function(a){return a?519018:218159},
gD:function(a){return C.Z},
$isay:1}
J.eH.prototype={
A:function(a,b){return null==b},
l:function(a){return"null"},
gw:function(a){return 0},
gD:function(a){return C.T}}
J.bA.prototype={
gw:function(a){return 0},
gD:function(a){return C.S},
l:function(a){return String(a)},
$iske:1}
J.fl.prototype={}
J.b_.prototype={}
J.aS.prototype={
l:function(a){var t=a[$.$get$k_()]
return t==null?this.cW(a):J.az(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isj8:1}
J.aQ.prototype={
b2:function(a,b){if(!!a.immutable$list)throw H.e(new P.w(b))},
b1:function(a,b){if(!!a.fixed$length)throw H.e(new P.w(b))},
i:function(a,b){this.b1(a,"add")
a.push(b)},
M:function(a,b){var t,s,r,q,p
t=a.length
this.b1(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.H)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.I(new P.a2(a)))
a.push(q)}},
cf:function(a,b){return new H.bB(a,b,[H.aJ(a,0),null])},
ao:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.i(a[s])
return t.join(b)},
u:function(a,b){return this.h(a,b)},
gej:function(a){if(a.length>0)return a[0]
throw H.e(H.eF())},
gaD:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.eF())},
bi:function(a,b,c,d,e){var t,s
this.b2(a,"setRange")
P.kk(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.I(P.aY(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.mf())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
bT:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.a2(a))}return!1},
cR:function(a,b){this.b2(a,"sort")
H.dk(a,0,a.length-1,P.n0())},
bl:function(a){return this.cR(a,null)},
E:function(a,b){var t
for(t=0;t<a.length;++t)if(J.J(a[t],b))return!0
return!1},
l:function(a){return P.eE(a,"[","]")},
gB:function(a){return new J.dN(a,a.length,0,null,[H.aJ(a,0)])},
gw:function(a){return H.aX(a)},
gk:function(a){return a.length},
sk:function(a,b){this.b1(a,"set length")
if(b<0)throw H.e(P.aY(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.R(a,b))
if(b>=a.length||b<0)throw H.e(H.R(a,b))
return a[b]},
j:function(a,b,c){this.b2(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.R(a,b))
if(b>=a.length||b<0)throw H.e(H.R(a,b))
a[b]=c},
$isp:1,
$asp:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.j9.prototype={}
J.dN.prototype={
gt:function(){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.H(t))
r=this.c
if(r>=s){this.sbv(null)
return!1}this.sbv(t[r]);++this.c
return!0},
sbv:function(a){this.d=a}}
J.bc.prototype={
V:function(a,b){var t
if(typeof b!=="number")throw H.e(H.V(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaB(b)
if(this.gaB(a)===t)return 0
if(this.gaB(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaB:function(a){return a===0?1/a<0:a<0},
e0:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.w(""+a+".ceil()"))},
aa:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.w(""+a+".round()"))},
e1:function(a,b,c){if(this.V(b,c)>0)throw H.e(H.V(b))
if(this.V(a,b)<0)return b
if(this.V(a,c)>0)return c
return a},
eL:function(a,b){var t
if(b>20)throw H.e(P.aY(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaB(a))return"-"+t
return t},
l:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw:function(a){return a&0x1FFFFFFF},
a5:function(a,b){if(typeof b!=="number")throw H.e(H.V(b))
return a+b},
ac:function(a,b){if(typeof b!=="number")throw H.e(H.V(b))
return a-b},
ba:function(a,b){if(typeof b!=="number")throw H.e(H.V(b))
return a/b},
J:function(a,b){if(typeof b!=="number")throw H.e(H.V(b))
return a*b},
aK:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bP(a,b)},
H:function(a,b){return(a|0)===a?a/b|0:this.bP(a,b)},
bP:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.w("Result of truncating division is "+H.i(t)+": "+H.i(a)+" ~/ "+b))},
aY:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cC:function(a,b){if(typeof b!=="number")throw H.e(H.V(b))
return(a&b)>>>0},
cY:function(a,b){if(typeof b!=="number")throw H.e(H.V(b))
return(a^b)>>>0},
aH:function(a,b){if(typeof b!=="number")throw H.e(H.V(b))
return a<b},
as:function(a,b){if(typeof b!=="number")throw H.e(H.V(b))
return a>b},
cD:function(a,b){if(typeof b!=="number")throw H.e(H.V(b))
return a>=b},
gD:function(a){return C.a1},
$isW:1}
J.d0.prototype={
gD:function(a){return C.a0},
$isP:1,
$iso:1,
$isW:1}
J.d_.prototype={
gD:function(a){return C.a_},
$isP:1,
$isW:1}
J.aR.prototype={
aP:function(a,b){if(b>=a.length)throw H.e(H.R(a,b))
return a.charCodeAt(b)},
a5:function(a,b){if(typeof b!=="string")throw H.e(P.jM(b,null,null))
return a+b},
cS:function(a,b,c){var t
if(c>a.length)throw H.e(P.aY(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bm:function(a,b){return this.cS(a,b,0)},
bo:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fs(b,null,null))
if(b>c)throw H.e(P.fs(b,null,null))
if(c>a.length)throw H.e(P.fs(c,null,null))
return a.substring(b,c)},
cT:function(a,b){return this.bo(a,b,null)},
eK:function(a){return a.toLowerCase()},
e3:function(a,b,c){if(c>a.length)throw H.e(P.aY(c,0,a.length,null,null))
return H.no(a,b,c)},
V:function(a,b){var t
if(typeof b!=="string")throw H.e(H.V(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
l:function(a){return a},
gw:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gD:function(a){return C.U},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.R(a,b))
return a[b]},
$isp:1,
$asp:function(){},
$isv:1}
H.c.prototype={$asc:null}
H.bd.prototype={
gB:function(a){return new H.d2(this,this.gk(this),0,null,[H.an(this,"bd",0)])},
aF:function(a,b){return this.cV(0,b)},
eJ:function(a,b){var t,s
t=H.D([],[H.an(this,"bd",0)])
C.a.sk(t,this.gk(this))
for(s=0;s<this.gk(this);++s)t[s]=this.u(0,s)
return t},
eI:function(a){return this.eJ(a,!0)}}
H.d2.prototype={
gt:function(){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.ae(t)
r=s.gk(t)
if(this.b!==r)throw H.e(new P.a2(t))
q=this.c
if(q>=r){this.sag(null)
return!1}this.sag(s.u(t,q));++this.c
return!0},
sag:function(a){this.d=a}}
H.d3.prototype={
gB:function(a){return new H.eQ(null,J.bn(this.a),this.b,this.$ti)},
gk:function(a){return J.dJ(this.a)},
$asX:function(a,b){return[b]}}
H.e4.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.eQ.prototype={
p:function(){var t=this.b
if(t.p()){this.sag(this.c.$1(t.gt()))
return!0}this.sag(null)
return!1},
gt:function(){return this.a},
sag:function(a){this.a=a},
$ascZ:function(a,b){return[b]}}
H.bB.prototype={
gk:function(a){return J.dJ(this.a)},
u:function(a,b){return this.b.$1(J.lr(this.a,b))},
$asc:function(a,b){return[b]},
$asbd:function(a,b){return[b]},
$asX:function(a,b){return[b]}}
H.du.prototype={
gB:function(a){return new H.hj(J.bn(this.a),this.b,this.$ti)}}
H.hj.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gt()))return!0
return!1},
gt:function(){return this.a.gt()}}
H.cg.prototype={}
H.iV.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.iW.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hW.prototype={
seu:function(a){this.z=a},
sex:function(a){this.ch=a}}
H.b3.prototype={
bS:function(a,b){if(!this.f.A(0,a))return
if(this.Q.i(0,b)&&!this.y)this.y=!0
this.b_()},
eD:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.ap(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bI();++r.d}this.y=!1}this.b_()},
dS:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.x(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).i(r,a)
t=this.ch;(t&&C.a).i(t,b)},
eC:function(a){var t,s,r
if(this.ch==null)return
for(t=J.x(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.I(new P.w("removeRange"))
P.kk(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cO:function(a,b){if(!this.r.A(0,a))return
this.db=b},
en:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.K(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.je(null,null)
this.cx=t}t.X(0,new H.hR(a,c))},
em:function(a,b){var t
if(!this.r.A(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aC()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.je(null,null)
this.cx=t}t.X(0,this.gev())},
eo:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.ao(a)
if(b!=null)P.ao(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.az(a)
s[1]=b==null?null:b.l(0)
for(r=new P.bU(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.K(0,s)},
ak:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.S(o)
p=H.aI(o)
this.eo(q,p)
if(this.db){this.aC()
if(this===u.globalState.e)throw o}}finally{this.cy=H.mX(r)
u.globalState.d=H.js(t,"$isb3")
if(t!=null)$=t.ges()
if(this.cx!=null)for(;n=this.cx,!n.gan(n);)this.cx.cg().$0()}return s},
ce:function(a){return this.b.h(0,a)},
bz:function(a,b){var t=this.b
if(t.I(0,a))throw H.e(P.ce("Registry: ports must be registered only once."))
t.j(0,a,b)},
b_:function(){var t=this.b
if(t.gk(t)-this.c.a>0||this.y||!this.x)u.globalState.z.j(0,this.a,this)
else this.aC()},
aC:function(){var t,s,r
t=this.cx
if(t!=null)t.Z(0)
for(t=this.b,s=t.gcz(t),s=s.gB(s);s.p();)s.gt().dt()
t.Z(0)
this.c.Z(0)
u.globalState.z.ap(0,this.a)
this.dx.Z(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].K(0,t[r+1])
this.ch=null}},
ges:function(){return this.d},
ge4:function(){return this.e}}
H.hR.prototype={
$0:function(){this.a.K(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hz.prototype={
eb:function(){var t=this.a
if(t.b===t.c)return
return t.cg()},
cj:function(){var t,s,r
t=this.eb()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.I(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gan(s)}else s=!1
else s=!1
else s=!1
if(s)H.I(P.ce("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gan(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aU(["command","close"])
r=new H.am(!0,new P.dy(0,null,null,null,null,null,0,[null,P.o])).N(r)
s.toString
self.postMessage(r)}return!1}t.ez()
return!0},
bN:function(){if(self.window!=null)new H.hA(this).$0()
else for(;this.cj(););},
aq:function(){var t,s,r,q,p
if(!u.globalState.x)this.bN()
else try{this.bN()}catch(r){t=H.S(r)
s=H.aI(r)
q=u.globalState.Q
p=P.aU(["command","error","msg",H.i(t)+"\n"+H.i(s)])
p=new H.am(!0,P.bV(null,P.o)).N(p)
q.toString
self.postMessage(p)}}}
H.hA.prototype={
$0:function(){if(!this.a.cj())return
P.my(C.n,this)},
$S:function(){return{func:1,v:true}}}
H.b4.prototype={
ez:function(){var t=this.a
if(t.y){C.a.i(t.z,this)
return}t.ak(this.b)}}
H.hV.prototype={}
H.eC.prototype={
$0:function(){H.mb(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eD.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bk(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bk(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.b_()},
$S:function(){return{func:1,v:true}}}
H.hs.prototype={}
H.bh.prototype={
K:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mL(b)
if(t.ge4()===s){s=J.ae(r)
switch(s.h(r,0)){case"pause":t.bS(s.h(r,1),s.h(r,2))
break
case"resume":t.eD(s.h(r,1))
break
case"add-ondone":t.dS(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eC(s.h(r,1))
break
case"set-errors-fatal":t.cO(s.h(r,1),s.h(r,2))
break
case"ping":t.en(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.em(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.i(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ap(0,s)
break}return}u.globalState.f.a.X(0,new H.b4(t,new H.hX(this,r),"receive"))},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bh){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gw:function(a){return this.b.a}}
H.hX.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dq(0,this.b)},
$S:function(){return{func:1}}}
H.bX.prototype={
K:function(a,b){var t,s,r
t=P.aU(["command","message","port",this,"msg",b])
s=new H.am(!0,P.bV(null,P.o)).N(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bX){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gw:function(a){return C.b.cY((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bf.prototype={
dt:function(){this.c=!0
this.b=null},
dq:function(a,b){if(this.c)return
this.b.$1(b)},
$ismq:1}
H.h1.prototype={
de:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.X(0,new H.b4(s,new H.h2(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.c0(new H.h3(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.w("Timer greater than 0."))}}}
H.h2.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.h3.prototype={
$0:function(){this.a.c=null
H.iJ()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ar.prototype={
gw:function(a){var t=this.a
t=C.b.aY(t,0)^C.b.H(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
A:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ar){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.am.prototype={
N:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.j(0,a,t.gk(t))
t=J.x(a)
if(!!t.$isbD)return["buffer",a]
if(!!t.$isbe)return["typed",a]
if(!!t.$isp)return this.cK(a)
if(!!t.$ism8){r=this.gcH()
q=t.gG(a)
q=H.jf(q,r,H.an(q,"X",0),null)
q=P.kg(q,!0,H.an(q,"X",0))
t=t.gcz(a)
t=H.jf(t,r,H.an(t,"X",0),null)
return["map",q,P.kg(t,!0,H.an(t,"X",0))]}if(!!t.$iske)return this.cL(a)
if(!!t.$isa)this.cv(a)
if(!!t.$ismq)this.ar(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbh)return this.cM(a)
if(!!t.$isbX)return this.cN(a)
if(!!t.$isb8){p=a.$static_name
if(p==null)this.ar(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isar)return["capability",a.a]
if(!(a instanceof P.q))this.cv(a)
return["dart",u.classIdExtractor(a),this.cJ(u.classFieldsExtractor(a))]},
ar:function(a,b){throw H.e(new P.w((b==null?"Can't transmit:":b)+" "+H.i(a)))},
cv:function(a){return this.ar(a,null)},
cK:function(a){var t
H.d(typeof a!=="string")
t=this.cI(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ar(a,"Can't serialize indexable: ")},
cI:function(a){var t,s
t=[]
C.a.sk(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.N(a[s])
return t},
cJ:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.N(a[t]))
return a},
cL:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ar(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sk(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.N(a[t[r]])
return["js-object",t,s]},
cN:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cM:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b2.prototype={
a_:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.jL("Bad serialized message: "+H.i(a)))
switch(C.a.gej(a)){case"ref":H.d(J.J(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.d(J.J(a[0],"buffer"))
t=a[1]
C.a.i(this.b,t)
return t
case"typed":H.d(J.J(a[0],"typed"))
t=a[1]
C.a.i(this.b,t)
return t
case"fixed":H.d(J.J(a[0],"fixed"))
t=a[1]
C.a.i(this.b,t)
s=H.D(this.aj(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.J(a[0],"extendable"))
t=a[1]
C.a.i(this.b,t)
return H.D(this.aj(t),[null])
case"mutable":H.d(J.J(a[0],"mutable"))
t=a[1]
C.a.i(this.b,t)
return this.aj(t)
case"const":H.d(J.J(a[0],"const"))
t=a[1]
C.a.i(this.b,t)
s=H.D(this.aj(t),[null])
s.fixed$length=Array
return s
case"map":return this.ee(a)
case"sendport":return this.ef(a)
case"raw sendport":H.d(J.J(a[0],"raw sendport"))
t=a[1]
C.a.i(this.b,t)
return t
case"js-object":return this.ed(a)
case"function":H.d(J.J(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.i(this.b,t)
return t
case"capability":H.d(J.J(a[0],"capability"))
return new H.ar(a[1])
case"dart":H.d(J.J(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.i(this.b,p)
this.aj(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.i(a))}},
aj:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.a_(a[t]))
return a},
ee:function(a){var t,s,r,q,p
H.d(J.J(a[0],"map"))
t=a[1]
s=a[2]
r=P.O()
C.a.i(this.b,r)
t=J.lE(t,this.gec()).eI(0)
for(q=J.ae(s),p=0;p<t.length;++p)r.j(0,t[p],this.a_(q.h(s,p)))
return r},
ef:function(a){var t,s,r,q,p,o,n
H.d(J.J(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.ce(r)
if(o==null)return
n=new H.bh(o,s)}else n=new H.bX(t,r,s)
C.a.i(this.b,n)
return n},
ed:function(a){var t,s,r,q,p,o
H.d(J.J(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.i(this.b,r)
for(q=J.ae(t),p=J.ae(s),o=0;o<q.gk(t);++o)r[q.h(t,o)]=this.a_(p.h(s,o))
return r}}
H.fv.prototype={}
H.h8.prototype={
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
H.dd.prototype={
l:function(a){var t=this.b
if(t==null)return"NullError: "+H.i(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eJ.prototype={
l:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.i(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.i(this.a)+")"}}
H.hb.prototype={
l:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.iX.prototype={
$1:function(a){if(!!J.x(a).$isba)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dA.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.iE.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iF.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iG.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iH.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iI.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.b8.prototype={
l:function(a){return"Closure '"+H.df(this).trim()+"'"},
$isj8:1,
geO:function(){return this},
$D:null}
H.fX.prototype={}
H.fK.prototype={
l:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bo.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bo))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gw:function(a){var t,s
t=this.c
if(t==null)s=H.aX(this.a)
else s=typeof t!=="object"?J.aq(t):H.aX(t)
return(s^H.aX(this.b))>>>0},
l:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.i(this.d)+"' of "+H.fr(t)}}
H.ha.prototype={
l:function(a){return this.a}}
H.dS.prototype={
l:function(a){return this.a}}
H.fB.prototype={
l:function(a){return"RuntimeError: "+H.i(this.a)}}
H.hm.prototype={
l:function(a){return C.e.a5("Assertion failed: ",P.j7(this.a))}}
H.aE.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gw:function(a){return J.aq(this.a)},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aE){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ah.prototype={
gk:function(a){return this.a},
gan:function(a){return this.a===0},
gG:function(a){return new H.eM(this,[H.aJ(this,0)])},
gcz:function(a){return H.jf(this.gG(this),new H.eI(this),H.aJ(this,0),H.aJ(this,1))},
I:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bF(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bF(s,b)}else return this.ep(b)},
ep:function(a){var t=this.d
if(t==null)return!1
return this.am(this.ax(t,this.al(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ah(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ah(r,b)
return s==null?null:s.b}else return this.eq(b)},
eq:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.ax(t,this.al(a))
r=this.am(s,a)
if(r<0)return
return s[r].b},
j:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aV()
this.b=t}this.bx(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aV()
this.c=s}this.bx(s,b,c)}else{r=this.d
if(r==null){r=this.aV()
this.d=r}q=this.al(b)
p=this.ax(r,q)
if(p==null)this.aX(r,q,[this.aW(b,c)])
else{o=this.am(p,b)
if(o>=0)p[o].b=c
else p.push(this.aW(b,c))}}},
ap:function(a,b){if(typeof b==="string")return this.bL(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bL(this.c,b)
else return this.er(b)},
er:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.ax(t,this.al(a))
r=this.am(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bQ(q)
return q.b},
Z:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
aA:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a2(this))
t=t.c}},
bx:function(a,b,c){var t=this.ah(a,b)
if(t==null)this.aX(a,b,this.aW(b,c))
else t.b=c},
bL:function(a,b){var t
if(a==null)return
t=this.ah(a,b)
if(t==null)return
this.bQ(t)
this.bG(a,b)
return t.b},
aW:function(a,b){var t,s
t=new H.eL(a,b,null,null,[null,null])
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
al:function(a){return J.aq(a)&0x3ffffff},
am:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.J(a[s].a,b))return s
return-1},
l:function(a){return P.mh(this)},
ah:function(a,b){return a[b]},
ax:function(a,b){return a[b]},
aX:function(a,b,c){H.d(c!=null)
a[b]=c},
bG:function(a,b){delete a[b]},
bF:function(a,b){return this.ah(a,b)!=null},
aV:function(){var t=Object.create(null)
this.aX(t,"<non-identifier-key>",t)
this.bG(t,"<non-identifier-key>")
return t},
$ism8:1}
H.eI.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.eL.prototype={}
H.eM.prototype={
gk:function(a){return this.a.a},
gB:function(a){var t,s
t=this.a
s=new H.eN(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eN.prototype={
gt:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a2(t))
else{t=this.c
if(t==null){this.sbw(null)
return!1}else{this.sbw(t.a)
this.c=this.c.c
return!0}}},
sbw:function(a){this.d=a}}
H.iA.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.iB.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.v]}}}
H.iC.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.v]}}}
H.bD.prototype={
gD:function(a){return C.L},
$isbD:1}
H.be.prototype={$isbe:1}
H.f_.prototype={
gD:function(a){return C.M}}
H.d6.prototype={
gk:function(a){return a.length},
$isp:1,
$asp:function(){},
$isr:1,
$asr:function(){}}
H.d7.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.I(H.R(a,b))
return a[b]},
j:function(a,b,c){if(b>>>0!==b||b>=a.length)H.I(H.R(a,b))
a[b]=c}}
H.d8.prototype={
j:function(a,b,c){if(b>>>0!==b||b>=a.length)H.I(H.R(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.d5.prototype={
gD:function(a){return C.N},
$isc:1,
$asc:function(){return[P.P]},
$isb:1,
$asb:function(){return[P.P]},
$iser:1}
H.f0.prototype={
gD:function(a){return C.O},
$isc:1,
$asc:function(){return[P.P]},
$isb:1,
$asb:function(){return[P.P]}}
H.f1.prototype={
gD:function(a){return C.P},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.I(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.f2.prototype={
gD:function(a){return C.Q},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.I(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$iskb:1}
H.f3.prototype={
gD:function(a){return C.R},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.I(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.f4.prototype={
gD:function(a){return C.V},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.I(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$iskA:1}
H.f5.prototype={
gD:function(a){return C.W},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.I(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$iskB:1}
H.d9.prototype={
gD:function(a){return C.X},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.I(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.f6.prototype={
gD:function(a){return C.Y},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.I(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$iskC:1}
H.bE.prototype={
$asp:function(){},
$isc:1,
$asc:function(){return[P.o]},
$asr:function(){},
$isb:1,
$asb:function(){return[P.o]}}
H.bF.prototype={
$asp:function(){},
$isc:1,
$asc:function(){return[P.P]},
$asr:function(){},
$isb:1,
$asb:function(){return[P.P]}}
H.bG.prototype={
$asp:function(){},
$asc:function(){return[P.P]},
$asr:function(){},
$asb:function(){return[P.P]}}
H.bH.prototype={
$asp:function(){},
$asc:function(){return[P.o]},
$asr:function(){},
$asb:function(){return[P.o]}}
P.ho.prototype={
$1:function(a){var t,s
H.iJ()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.hn.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hp.prototype={
$0:function(){H.iJ()
this.a.$0()},
$S:function(){return{func:1}}}
P.hq.prototype={
$0:function(){H.iJ()
this.a.$0()},
$S:function(){return{func:1}}}
P.hu.prototype={}
P.ic.prototype={
e2:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.aD("Future already completed"))
t.aR(b)}}
P.dx.prototype={
ey:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.b8(this.d,a.a)},
el:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bk(s,{func:1,args:[P.q,P.bM]}))return t.eE(s,a.a,a.b)
else return t.b8(s,a.a)}}
P.ax.prototype={
cl:function(a,b){var t,s,r
t=$.E
if(t!==C.d){t.toString
if(b!=null)b=P.mP(b,t)}s=new P.ax(0,t,null,[null])
r=b==null?1:3
this.by(new P.dx(null,s,r,a,b,[H.aJ(this,0),null]))
return s},
ck:function(a){return this.cl(a,null)},
bB:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
by:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.js(this.c,"$isdx")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.by(a)
return}this.bB(t)}H.d(this.a>=4)
t=this.b
t.toString
P.ip(null,null,t,new P.hF(this,a))}},
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
t.a=this.ai(a)
s=this.b
s.toString
P.ip(null,null,s,new P.hJ(t,this))}},
bM:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.ai(t)},
ai:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aR:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.iq(a,"$isev",t,"$asev"))if(H.iq(a,"$isax",t,null))P.kG(a,this)
else P.mF(a,this)
else{s=this.bM()
H.d(this.a<4)
this.a=4
this.c=a
P.bR(this,s)}},
au:function(a,b){var t
H.d(this.a<4)
t=this.bM()
H.d(this.a<4)
this.a=8
this.c=new P.b7(a,b)
P.bR(this,t)},
dv:function(a){return this.au(a,null)},
$isev:1,
gaZ:function(){return this.a},
gdM:function(){return this.c}}
P.hF.prototype={
$0:function(){P.bR(this.a,this.b)},
$S:function(){return{func:1}}}
P.hJ.prototype={
$0:function(){P.bR(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hG.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.aR(a)},
$S:function(){return{func:1,args:[,]}}}
P.hH.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.au(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hI.prototype={
$0:function(){this.a.au(this.b,this.c)},
$S:function(){return{func:1}}}
P.hM.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.ci(q.d)}catch(n){s=H.S(n)
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
return}if(!!J.x(t).$isev){if(t instanceof P.ax&&t.gaZ()>=4){if(t.gaZ()===8){q=t
H.d(q.gaZ()===8)
p=this.b
p.b=q.gdM()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.ck(new P.hN(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hN.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.hL.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.b8(r.d,this.c)}catch(q){t=H.S(q)
s=H.aI(q)
r=this.a
r.b=new P.b7(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hK.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.ey(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.el(t)
p.a=!1}}catch(o){s=H.S(o)
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
P.dv.prototype={}
P.fO.prototype={
gk:function(a){var t,s
t={}
s=new P.ax(0,$.E,null,[P.o])
t.a=0
this.ew(new P.fQ(t),!0,new P.fR(t,s),s.gdu())
return s}}
P.fQ.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.fR.prototype={
$0:function(){this.b.aR(this.a.a)},
$S:function(){return{func:1}}}
P.fP.prototype={}
P.b7.prototype={
l:function(a){return H.i(this.a)},
$isba:1}
P.ik.prototype={}
P.io.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.de()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.l(0)
throw r},
$S:function(){return{func:1}}}
P.hZ.prototype={
eF:function(a){var t,s,r
try{if(C.d===$.E){a.$0()
return}P.kL(null,null,this,a)}catch(r){t=H.S(r)
s=H.aI(r)
P.im(null,null,this,t,s)}},
eG:function(a,b){var t,s,r
try{if(C.d===$.E){a.$1(b)
return}P.kM(null,null,this,a,b)}catch(r){t=H.S(r)
s=H.aI(r)
P.im(null,null,this,t,s)}},
dY:function(a){return new P.i0(this,a)},
b0:function(a){return new P.i_(this,a)},
dZ:function(a){return new P.i1(this,a)},
h:function(a,b){return},
ci:function(a){if($.E===C.d)return a.$0()
return P.kL(null,null,this,a)},
b8:function(a,b){if($.E===C.d)return a.$1(b)
return P.kM(null,null,this,a,b)},
eE:function(a,b,c){if($.E===C.d)return a.$2(b,c)
return P.mQ(null,null,this,a,b,c)}}
P.i0.prototype={
$0:function(){return this.a.ci(this.b)},
$S:function(){return{func:1}}}
P.i_.prototype={
$0:function(){return this.a.eF(this.b)},
$S:function(){return{func:1}}}
P.i1.prototype={
$1:function(a){return this.a.eG(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dy.prototype={
al:function(a){return H.nh(a)&0x3ffffff},
am:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hS.prototype={
gB:function(a){var t=new P.bU(this,this.r,null,null,[null])
t.c=this.e
return t},
gk:function(a){return this.a},
E:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dw(b)},
dw:function(a){var t=this.d
if(t==null)return!1
return this.aw(t[this.av(a)],a)>=0},
ce:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.E(0,a)?a:null
else return this.dG(a)},
dG:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.av(a)]
r=this.aw(s,a)
if(r<0)return
return J.bl(s,r).gdA()},
i:function(a,b){var t,s,r
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
r=s}return this.bC(r,b)}else return this.X(0,b)},
X:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.mJ()
this.d=t}s=this.av(b)
r=t[s]
if(r==null){q=[this.aQ(b)]
H.d(q!=null)
t[s]=q}else{if(this.aw(r,b)>=0)return!1
r.push(this.aQ(b))}return!0},
ap:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bD(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bD(this.c,b)
else return this.dH(0,b)},
dH:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.av(b)]
r=this.aw(s,b)
if(r<0)return!1
this.bE(s.splice(r,1)[0])
return!0},
Z:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bC:function(a,b){var t
if(a[b]!=null)return!1
t=this.aQ(b)
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
aQ:function(a){var t,s
t=new P.hT(a,null,null)
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
av:function(a){return J.aq(a)&0x3ffffff},
aw:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.J(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.hT.prototype={
gdA:function(){return this.a}}
P.bU.prototype={
gt:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a2(t))
else{t=this.c
if(t==null){this.saf(null)
return!1}else{this.saf(t.a)
this.c=this.c.b
return!0}}},
saf:function(a){this.d=a}}
P.hQ.prototype={}
P.d1.prototype={}
P.y.prototype={
gB:function(a){return new H.d2(a,this.gk(a),0,null,[H.an(a,"y",0)])},
u:function(a,b){return this.h(a,b)},
cf:function(a,b){return new H.bB(a,b,[H.an(a,"y",0),null])},
ek:function(a,b,c){var t,s,r
t=this.gk(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gk(a))throw H.e(new P.a2(a))}return s},
l:function(a){return P.eE(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.eR.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.i(a)
t.a=s+": "
t.a+=H.i(b)},
$S:function(){return{func:1,args:[,,]}}}
P.eO.prototype={
gB:function(a){return new P.hU(this,this.c,this.d,this.b,null,this.$ti)},
gan:function(a){return this.b===this.c},
gk:function(a){return(this.c-this.b&this.a.length-1)>>>0},
u:function(a,b){var t=(this.c-this.b&this.a.length-1)>>>0
if(C.b.as(0,b)||b>=t)H.I(P.C(b,this,"index",null,t))
return this.a[(C.b.a5(this.b,b)&this.a.length-1)>>>0]},
Z:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
l:function(a){return P.eE(this,"{","}")},
cg:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.eF());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
X:function(a,b){var t,s
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
C.a.bi(s,0,q,t,r)
C.a.bi(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbO(s)},
d6:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbO(H.D(t,[b]))},
sbO:function(a){this.a=a},
$asc:null}
P.hU.prototype={
gt:function(){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.I(new P.a2(t))
s=this.d
if(s===this.b){this.saf(null)
return!1}this.saf(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
saf:function(a){this.e=a}}
P.fE.prototype={
M:function(a,b){var t
for(t=J.bn(b);t.p();)this.i(0,t.gt())},
l:function(a){return P.eE(this,"{","}")},
$isc:1,
$asc:null}
P.fD.prototype={}
P.bJ.prototype={$isc:1,$asc:null,$isb:1,$asb:null}
P.ay.prototype={}
P.L.prototype={}
P.bp.prototype={
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.bp))return!1
return this.a===b.a&&this.b===b.b},
V:function(a,b){return C.b.V(this.a,b.a)},
gw:function(a){var t=this.a
return(t^C.b.aY(t,30))&1073741823},
l:function(a){var t,s,r,q,p,o,n
t=P.lZ(H.mp(this))
s=P.c8(H.mn(this))
r=P.c8(H.mj(this))
q=P.c8(H.mk(this))
p=P.c8(H.mm(this))
o=P.c8(H.mo(this))
n=P.m_(H.ml(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isL:1,
$asL:function(){return[P.bp]}}
P.P.prototype={$isL:1,
$asL:function(){return[P.W]}}
P.aP.prototype={
aH:function(a,b){return C.b.aH(this.a,b.gdz())},
as:function(a,b){return C.b.as(this.a,b.gdz())},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.aP))return!1
return this.a===b.a},
gw:function(a){return this.a&0x1FFFFFFF},
V:function(a,b){return C.b.V(this.a,b.a)},
l:function(a){var t,s,r,q,p
t=new P.e3()
s=this.a
if(s<0)return"-"+new P.aP(0-s).l(0)
r=t.$1(C.b.H(s,6e7)%60)
q=t.$1(C.b.H(s,1e6)%60)
p=new P.e2().$1(s%1e6)
return""+C.b.H(s,36e8)+":"+H.i(r)+":"+H.i(q)+"."+H.i(p)},
$isL:1,
$asL:function(){return[P.aP]}}
P.e2.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.v,args:[P.o]}}}
P.e3.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.v,args:[P.o]}}}
P.ba.prototype={}
P.c5.prototype={
l:function(a){return"Assertion failed"}}
P.de.prototype={
l:function(a){return"Throw of null."}}
P.af.prototype={
gaT:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaS:function(){return""},
l:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.i(t)
q=this.gaT()+s+r
if(!this.a)return q
p=this.gaS()
o=P.j7(this.b)
return q+p+": "+H.i(o)}}
P.dh.prototype={
gaT:function(){return"RangeError"},
gaS:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.i(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.i(t)
else if(r>t)s=": Not in range "+H.i(t)+".."+H.i(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.i(t)}return s}}
P.eA.prototype={
gaT:function(){return"RangeError"},
gaS:function(){H.d(this.a)
if(J.la(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.i(t)},
gk:function(a){return this.f}}
P.w.prototype={
l:function(a){return"Unsupported operation: "+this.a}}
P.dt.prototype={
l:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aD.prototype={
l:function(a){return"Bad state: "+this.a}}
P.a2.prototype={
l:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.j7(t))+"."}}
P.dl.prototype={
l:function(a){return"Stack Overflow"},
$isba:1}
P.dW.prototype={
l:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hE.prototype={
l:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.i(t)}}
P.e5.prototype={
l:function(a){return"Expando:"+H.i(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.I(P.jM(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kh(b,"expando$values")
return s==null?null:H.kh(s,t)}}
P.o.prototype={$isL:1,
$asL:function(){return[P.W]}}
P.X.prototype={
aF:function(a,b){return new H.du(this,b,[H.an(this,"X",0)])},
gk:function(a){var t,s
H.d(!this.$isc)
t=this.gB(this)
for(s=0;t.p();)++s
return s},
ga7:function(a){var t,s
t=this.gB(this)
if(!t.p())throw H.e(H.eF())
s=t.gt()
if(t.p())throw H.e(H.mg())
return s},
u:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.lQ("index"))
if(b<0)H.I(P.aY(b,0,null,"index",null))
for(t=this.gB(this),s=0;t.p();){r=t.gt()
if(b===s)return r;++s}throw H.e(P.C(b,this,"index",null,s))},
l:function(a){return P.me(this,"(",")")}}
P.cZ.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.aC.prototype={}
P.aW.prototype={
gw:function(a){return P.q.prototype.gw.call(this,this)},
l:function(a){return"null"}}
P.W.prototype={$isL:1,
$asL:function(){return[P.W]}}
P.q.prototype={constructor:P.q,$isq:1,
A:function(a,b){return this===b},
gw:function(a){return H.aX(this)},
l:function(a){return H.fr(this)},
gD:function(a){return new H.aE(H.iy(this),null)},
toString:function(){return this.l(this)}}
P.bM.prototype={}
P.v.prototype={$isL:1,
$asL:function(){return[P.v]}}
P.bN.prototype={
gk:function(a){return this.a.length},
l:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga8:function(){return this.a}}
W.m.prototype={}
W.dL.prototype={
l:function(a){return String(a)},
$isa:1}
W.dM.prototype={
l:function(a){return String(a)},
$isa:1}
W.a1.prototype={$isq:1}
W.dP.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.a1]},
$isc:1,
$asc:function(){return[W.a1]},
$isr:1,
$asr:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.c6.prototype={}
W.aN.prototype={$isa:1,$isaN:1}
W.c7.prototype={
cE:function(a,b,c){var t=this.dC(a,b,P.n_(c,null))
return t},
dC:function(a,b,c){return a.getContext(b,c)}}
W.dR.prototype={
aG:function(a){return P.it(a.getContextAttributes())}}
W.aO.prototype={$isa:1,
gk:function(a){return a.length}}
W.dU.prototype={$isa:1}
W.A.prototype={$isq:1}
W.b9.prototype={
bA:function(a,b){var t,s
t=$.$get$jZ()
s=t[b]
if(typeof s==="string")return s
s=this.dP(a,b)
t[b]=s
return s},
dP:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.m0()+b
if(t in a)return t
return b},
gk:function(a){return a.length}}
W.dV.prototype={}
W.dX.prototype={
h:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.dY.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gO:function(a){return a.z}}
W.c9.prototype={}
W.bq.prototype={
dT:function(a,b){return a.adoptNode(b)},
cF:function(a,b){return a.getElementById(b)},
eA:function(a,b){return a.querySelector(b)}}
W.ca.prototype={$isa:1}
W.dZ.prototype={
l:function(a){return String(a)}}
W.cb.prototype={
e8:function(a,b){return a.createHTMLDocument(b)}}
W.e_.prototype={
gaE:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gO:function(a){return a.z}}
W.cc.prototype={
gaE:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gO:function(a){return a.z}}
W.cd.prototype={
l:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.ga4(a))+" x "+H.i(this.ga3(a))},
A:function(a,b){var t
if(b==null)return!1
t=J.x(b)
if(!t.$isM)return!1
return a.left===t.gb4(b)&&a.top===t.gb9(b)&&this.ga4(a)===t.ga4(b)&&this.ga3(a)===t.ga3(b)},
gw:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga4(a)
q=this.ga3(a)
return W.kJ(W.b5(W.b5(W.b5(W.b5(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga3:function(a){return a.height},
gb4:function(a){return a.left},
gb9:function(a){return a.top},
ga4:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isM:1,
$asM:function(){}}
W.e0.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[P.v]},
$isc:1,
$asc:function(){return[P.v]},
$isr:1,
$asr:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
W.e1.prototype={
gk:function(a){return a.length}}
W.a3.prototype={
gdW:function(a){return new W.hy(a)},
l:function(a){return a.localName},
P:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.k6
if(t==null){t=H.D([],[W.db])
s=new W.dc(t)
C.a.i(t,W.kH(null))
C.a.i(t,W.kK())
$.k6=s
d=s}else d=t
t=$.k5
if(t==null){t=new W.dB(d)
$.k5=t
c=t}else{t.a=d
c=t}}if($.aA==null){t=document
s=t.implementation
s=(s&&C.x).e8(s,"")
$.aA=s
$.j6=s.createRange()
s=$.aA
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aA.head;(t&&C.y).U(t,r)}t=$.aA
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.js(s,"$isaN")}t=$.aA
if(!!this.$isaN)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aA.body;(t&&C.f).U(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.E(C.I,a.tagName)){t=$.j6;(t&&C.u).cG(t,q)
t=$.j6
p=(t&&C.u).e6(t,b)}else{q.innerHTML=b
p=$.aA.createDocumentFragment()
for(t=J.n(p);s=q.firstChild,s!=null;)t.U(p,s)}t=$.aA.body
if(q==null?t!=null:q!==t)J.lF(q)
c.bh(p)
C.i.dT(document,p)
return p},
e7:function(a,b,c){return this.P(a,b,c,null)},
cQ:function(a,b,c,d){a.textContent=null
this.U(a,this.P(a,b,c,d))},
cP:function(a,b){return this.cQ(a,b,null,null)},
ab:function(a,b){return a.getAttribute(b)},
dI:function(a,b){return a.removeAttribute(b)},
$isa:1,
$isq:1,
$isa3:1,
$isj:1,
$isu:1,
geH:function(a){return a.tagName}}
W.ir.prototype={
$1:function(a){return!!J.x(a).$isa3},
$S:function(){return{func:1,args:[,]}}}
W.l.prototype={$isq:1,$isl:1}
W.j.prototype={
dr:function(a,b,c,d){return a.addEventListener(b,H.c0(c,1),!1)},
$isq:1,
$isj:1}
W.a4.prototype={$isq:1}
W.eo.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]},
$isr:1,
$asr:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.ep.prototype={
gk:function(a){return a.length}}
W.et.prototype={
gk:function(a){return a.length}}
W.a5.prototype={$isq:1}
W.ci.prototype={}
W.ex.prototype={
gk:function(a){return a.length}}
W.by.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.u]},
$isc:1,
$asc:function(){return[W.u]},
$isr:1,
$asr:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cj.prototype={}
W.ey.prototype={
K:function(a,b){return a.send(b)}}
W.bz.prototype={}
W.eB.prototype={$isa:1,$isa3:1}
W.aT.prototype={$isq:1,$isl:1,$isaT:1}
W.eP.prototype={
l:function(a){return String(a)}}
W.eV.prototype={
gk:function(a){return a.length}}
W.eX.prototype={
eP:function(a,b,c){return a.send(b,c)},
K:function(a,b){return a.send(b)}}
W.bC.prototype={}
W.a6.prototype={$isq:1}
W.eY.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]},
$isr:1,
$asr:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.Q.prototype={$isq:1,$isl:1,$isQ:1}
W.f7.prototype={$isa:1}
W.U.prototype={
ga7:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.aD("No elements"))
if(s>1)throw H.e(new P.aD("More than one element"))
return t.firstChild},
M:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.n(s),p=0;p<r;++p)q.U(s,t.firstChild)
return},
j:function(a,b,c){var t=this.a
J.lc(t,c,C.r.h(t.childNodes,b))},
gB:function(a){var t=this.a.childNodes
return new W.ch(t,t.length,-1,null,[H.an(t,"B",0)])},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){return C.r.h(this.a.childNodes,b)},
$asc:function(){return[W.u]},
$asd1:function(){return[W.u]},
$asb:function(){return[W.u]},
$asbJ:function(){return[W.u]}}
W.u.prototype={
eB:function(a){var t=a.parentNode
if(t!=null)J.bm(t,a)},
l:function(a){var t=a.nodeValue
return t==null?this.cU(a):t},
U:function(a,b){return a.appendChild(b)},
dJ:function(a,b){return a.removeChild(b)},
dK:function(a,b,c){return a.replaceChild(b,c)},
$isq:1,
$isj:1,
$isu:1,
gb6:function(a){return a.previousSibling}}
W.da.prototype={
b7:function(a){return a.previousNode()}}
W.bI.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.u]},
$isc:1,
$asc:function(){return[W.u]},
$isr:1,
$asr:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.fh.prototype={$isa:1}
W.fk.prototype={
gk:function(a){return a.length}}
W.a7.prototype={$isq:1,
gk:function(a){return a.length}}
W.fm.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]},
$isr:1,
$asr:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.fp.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fq.prototype={
K:function(a,b){return a.send(b)}}
W.dg.prototype={
e6:function(a,b){return a.createContextualFragment(b)},
cG:function(a,b){return a.selectNodeContents(b)}}
W.fA.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gO:function(a){return a.z}}
W.di.prototype={
K:function(a,b){return a.send(b)}}
W.fC.prototype={
gk:function(a){return a.length}}
W.fF.prototype={$isa:1}
W.a8.prototype={$isq:1,$isj:1}
W.fG.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]},
$isr:1,
$asr:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.a9.prototype={$isq:1}
W.fI.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]},
$isr:1,
$asr:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.aa.prototype={$isq:1,
gk:function(a){return a.length}}
W.fN.prototype={
h:function(a,b){return this.bH(a,b)},
aA:function(a,b){var t,s
for(t=0;!0;++t){s=this.dF(a,t)
if(s==null)return
b.$2(s,this.bH(a,s))}},
gk:function(a){return a.length},
bH:function(a,b){return a.getItem(b)},
dF:function(a,b){return a.key(b)}}
W.Y.prototype={$isq:1}
W.ak.prototype={}
W.dm.prototype={
P:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aJ(a,b,c,d)
t=W.m1("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.U(s).M(0,new W.U(t))
return s}}
W.fV.prototype={
P:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aJ(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.v.P(t.createElement("table"),b,c,d)
t.toString
t=new W.U(t)
r=t.ga7(t)
r.toString
t=new W.U(r)
q=t.ga7(t)
s.toString
q.toString
new W.U(s).M(0,new W.U(q))
return s}}
W.fW.prototype={
P:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aJ(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.v.P(t.createElement("table"),b,c,d)
t.toString
t=new W.U(t)
r=t.ga7(t)
s.toString
r.toString
new W.U(s).M(0,new W.U(r))
return s}}
W.bO.prototype={$isbO:1}
W.ab.prototype={$isq:1,$isj:1}
W.Z.prototype={$isq:1,$isj:1}
W.fZ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.Z]},
$isc:1,
$asc:function(){return[W.Z]},
$isr:1,
$asr:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.h_.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]},
$isr:1,
$asr:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.h0.prototype={
gk:function(a){return a.length}}
W.ac.prototype={$isq:1}
W.aZ.prototype={$isq:1,$isl:1,$isaZ:1}
W.h4.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]},
$isr:1,
$asr:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.h5.prototype={
gk:function(a){return a.length}}
W.bg.prototype={}
W.h7.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gO:function(a){return a.z}}
W.dr.prototype={
b7:function(a){return a.previousNode()}}
W.aF.prototype={}
W.hc.prototype={
l:function(a){return String(a)},
$isa:1}
W.he.prototype={
gk:function(a){return a.length}}
W.hh.prototype={
gk:function(a){return a.length}}
W.hi.prototype={
K:function(a,b){return a.send(b)}}
W.b0.prototype={
gea:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.w("deltaY is not supported"))},
$isq:1,
$isl:1,
$isQ:1,
$isb0:1}
W.bQ.prototype={
gdV:function(a){var t,s
t=P.W
s=new P.ax(0,$.E,null,[t])
this.dB(a)
this.dL(a,W.kO(new W.hk(new P.ic(s,[t]))))
return s},
dL:function(a,b){return a.requestAnimationFrame(H.c0(b,1))},
dB:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.hk.prototype={
$1:function(a){this.a.e2(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hl.prototype={$isa:1}
W.b1.prototype={$isa:1}
W.ht.prototype={
l:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
A:function(a,b){var t,s,r
if(b==null)return!1
t=J.x(b)
if(!t.$isM)return!1
s=a.left
r=t.gb4(b)
if(s==null?r==null:s===r){s=a.top
r=t.gb9(b)
if(s==null?r==null:s===r){s=a.width
r=t.ga4(b)
if(s==null?r==null:s===r){s=a.height
t=t.ga3(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gw:function(a){var t,s,r,q
t=J.aq(a.left)
s=J.aq(a.top)
r=J.aq(a.width)
q=J.aq(a.height)
return W.kJ(W.b5(W.b5(W.b5(W.b5(0,t),s),r),q))},
$isM:1,
$asM:function(){},
ga3:function(a){return a.height},
gb4:function(a){return a.left},
gb9:function(a){return a.top},
ga4:function(a){return a.width}}
W.dw.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[P.M]},
$isc:1,
$asc:function(){return[P.M]},
$isr:1,
$asr:function(){return[P.M]},
$isb:1,
$asb:function(){return[P.M]}}
W.hv.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.A]},
$isc:1,
$asc:function(){return[W.A]},
$isr:1,
$asr:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.hw.prototype={$isa:1}
W.hx.prototype={
ga3:function(a){return a.height},
ga4:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hO.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]},
$isr:1,
$asr:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.hP.prototype={$isa:1}
W.dz.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.u]},
$isc:1,
$asc:function(){return[W.u]},
$isr:1,
$asr:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.i6.prototype={$isa:1}
W.i9.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]},
$isr:1,
$asr:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.ia.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.Y]},
$isc:1,
$asc:function(){return[W.Y]},
$isr:1,
$asr:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.ii.prototype={$isa:1}
W.ij.prototype={$isa:1}
W.hr.prototype={
aA:function(a,b){var t,s,r,q,p,o
for(t=this.gG(this),s=t.length,r=this.a,q=J.n(r),p=0;p<t.length;t.length===s||(0,H.H)(t),++p){o=t[p]
b.$2(o,q.ab(r,o))}},
gG:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.D([],[P.v])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.i(s,p.name)}return s},
gdD:function(){return this.a}}
W.hy.prototype={
h:function(a,b){return J.j3(this.a,b)},
gk:function(a){return this.gG(this).length}}
W.hB.prototype={
ew:function(a,b,c,d){return W.al(this.a,this.b,a,!1,H.aJ(this,0))}}
W.jk.prototype={}
W.hC.prototype={
dR:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lb(r,this.c,t,!1)}},
dk:function(a,b,c,d,e){this.dR()}}
W.hD.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bT.prototype={
a9:function(a){return $.$get$kI().E(0,W.br(a))},
Y:function(a,b,c){var t,s,r
t=W.br(a)
s=$.$get$jl()
r=s.h(0,H.i(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dl:function(a){var t,s
t=$.$get$jl()
if(t.gan(t)){for(s=0;s<262;++s)t.j(0,C.H[s],W.n6())
for(s=0;s<12;++s)t.j(0,C.k[s],W.n7())}}}
W.B.prototype={
gB:function(a){return new W.ch(a,this.gk(a),-1,null,[H.an(a,"B",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.dc.prototype={
a9:function(a){return C.a.bT(this.a,new W.f9(a))},
Y:function(a,b,c){return C.a.bT(this.a,new W.f8(a,b,c))}}
W.f9.prototype={
$1:function(a){return a.a9(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.f8.prototype={
$1:function(a){return a.Y(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.bW.prototype={
a9:function(a){return this.a.E(0,W.br(a))},
Y:function(a,b,c){var t,s
t=W.br(a)
s=this.c
if(s.E(0,H.i(t)+"::"+b))return this.d.dU(c)
else if(s.E(0,"*::"+b))return this.d.dU(c)
else{s=this.b
if(s.E(0,H.i(t)+"::"+b))return!0
else if(s.E(0,"*::"+b))return!0
else if(s.E(0,H.i(t)+"::*"))return!0
else if(s.E(0,"*::*"))return!0}return!1},
dn:function(a,b,c,d){var t,s,r
this.a.M(0,c)
t=b.aF(0,new W.i7())
s=b.aF(0,new W.i8())
this.b.M(0,t)
r=this.c
r.M(0,C.J)
r.M(0,s)}}
W.i7.prototype={
$1:function(a){return!C.a.E(C.k,a)},
$S:function(){return{func:1,args:[,]}}}
W.i8.prototype={
$1:function(a){return C.a.E(C.k,a)},
$S:function(){return{func:1,args:[,]}}}
W.id.prototype={
Y:function(a,b,c){if(this.cX(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.j3(a,"template")==="")return this.e.E(0,b)
return!1}}
W.ie.prototype={
$1:function(a){return"TEMPLATE::"+H.i(a)},
$S:function(){return{func:1,args:[,]}}}
W.ib.prototype={
a9:function(a){var t=J.x(a)
if(!!t.$isbL)return!1
t=!!t.$isK
if(t&&W.br(a)==="foreignObject")return!1
if(t)return!0
return!1},
Y:function(a,b,c){if(b==="is"||C.e.bm(b,"on"))return!1
return this.a9(a)}}
W.ch.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbJ(J.bl(this.a,t))
this.c=t
return!0}this.sbJ(null)
this.c=s
return!1},
gt:function(){return this.d},
sbJ:function(a){this.d=a}}
W.db.prototype={}
W.i5.prototype={}
W.dB.prototype={
bh:function(a){new W.ig(this).$2(a,null)},
ay:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bm(t,a)}else J.bm(b,a)},
dO:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lv(a)
r=J.j3(s.gdD(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.S(n)}p="element unprintable"
try{p=J.az(a)}catch(n){H.S(n)}try{o=W.br(a)
this.dN(a,b,t,p,o,s,r)}catch(n){if(H.S(n) instanceof P.af)throw n
else{this.ay(a,b)
window
m="Removing corrupted element "+H.i(p)
if(typeof console!="undefined")console.warn(m)}}},
dN:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.ay(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a9(a)){this.ay(a,b)
window
t="Removing disallowed element <"+H.i(e)+"> from "+J.az(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.Y(a,"is",g)){this.ay(a,b)
window
t="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gG(f)
s=H.D(t.slice(0),[H.aJ(t,0)])
for(r=f.gG(f).length-1,t=f.a,q=J.n(t);r>=0;--r){p=s[r]
if(!this.a.Y(a,J.lI(p),q.ab(t,p))){window
o="Removing disallowed attribute <"+H.i(e)+" "+p+'="'+H.i(q.ab(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.ab(t,p)
q.dI(t,p)}}if(!!J.x(a).$isbO)this.bh(a.content)}}
W.ig.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.dO(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bm(r,a)}else J.bm(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lw(t)}catch(q){H.S(q)
r=t
J.bm(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.u,W.u]}}}
W.bs.prototype={$isc:1,
$asc:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.bt.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.bu.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.bv.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.bw.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.bx.prototype={$isc:1,
$asc:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.ck.prototype={}
W.cE.prototype={$isc:1,
$asc:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cq.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cn.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.cx.prototype={$isc:1,
$asc:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cy.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cz.prototype={$isc:1,
$asc:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.cC.prototype={$isc:1,
$asc:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.cD.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.cl.prototype={$isc:1,
$asc:function(){return[P.M]},
$isb:1,
$asb:function(){return[P.M]}}
W.co.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cp.prototype={$isc:1,
$asc:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cs.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.ct.prototype={$isc:1,
$asc:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
W.cu.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.cv.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.cF.prototype={$isc:1,
$asc:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.cG.prototype={$isc:1,
$asc:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cH.prototype={$isc:1,
$asc:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cR.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cS.prototype={$isc:1,
$asc:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.cP.prototype={$isc:1,
$asc:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cQ.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.cV.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cW.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.cX.prototype={$isc:1,
$asc:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
W.cY.prototype={$isc:1,
$asc:function(){return[P.M]},
$isb:1,
$asb:function(){return[P.M]}}
W.cI.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.cJ.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.cM.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cU.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
P.is.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.v,,]}}}
P.hY.prototype={}
P.M.prototype={$asM:null}
P.dK.prototype={$isa:1}
P.aM.prototype={$isa:1}
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
gO:function(a){return a.z}}
P.ek.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.el.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gO:function(a){return a.z}}
P.em.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.en.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eq.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.es.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ag.prototype={}
P.aB.prototype={$isa:1}
P.ez.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.as.prototype={$isq:1}
P.eK.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.a0(a,b)},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a0:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.eS.prototype={$isa:1}
P.eT.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.at.prototype={$isq:1}
P.fa.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.a0(a,b)},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a0:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
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
P.bL.prototype={$isa:1,$isbL:1}
P.fS.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.a0(a,b)},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a0:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
P.K.prototype={
P:function(a,b,c,d){var t,s,r,q,p,o
t=H.D([],[W.db])
C.a.i(t,W.kH(null))
C.a.i(t,W.kK())
C.a.i(t,new W.ib())
c=new W.dB(new W.dc(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.f).e7(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.U(q)
o=t.ga7(t)
for(t=J.n(p);r=o.firstChild,r!=null;)t.U(p,r)
return p},
$isa:1,
$isK:1}
P.fT.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fU.prototype={$isa:1}
P.dn.prototype={}
P.fY.prototype={$isa:1}
P.bP.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.au.prototype={$isq:1}
P.h6.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.a0(a,b)},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a0:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.hd.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hf.prototype={$isa:1}
P.hg.prototype={$isa:1}
P.bS.prototype={$isa:1}
P.i2.prototype={$isa:1}
P.i3.prototype={$isa:1}
P.i4.prototype={$isa:1}
P.cA.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.cm.prototype={$isc:1,
$asc:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
P.cr.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.cw.prototype={$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.cK.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.cL.prototype={$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.cN.prototype={$isc:1,
$asc:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
P.cT.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.dO.prototype={
gk:function(a){return a.length}}
P.fy.prototype={
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
c5:function(a,b){return a.createShader(b)},
c6:function(a,b){return a.depthMask(b)},
c7:function(a,b){return a.disable(b)},
c8:function(a,b,c,d){return a.drawArrays(b,c,d)},
c9:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ca:function(a,b){return a.enable(b)},
cb:function(a,b){return a.enableVertexAttribArray(b)},
aG:function(a){return P.it(a.getContextAttributes())},
bb:function(a,b){return a.getProgramInfoLog(b)},
bc:function(a,b,c){return a.getProgramParameter(b,c)},
bd:function(a,b){return a.getShaderInfoLog(b)},
be:function(a,b,c){return a.getShaderParameter(b,c)},
bf:function(a,b,c){return a.getUniformLocation(b,c)},
cd:function(a,b){return a.linkProgram(b)},
bk:function(a,b,c){return a.shaderSource(b,c)},
bn:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cm:function(a,b,c){return a.uniform1f(b,c)},
cn:function(a,b,c){return a.uniform1fv(b,c)},
co:function(a,b,c){return a.uniform1i(b,c)},
cp:function(a,b,c){return a.uniform1iv(b,c)},
cq:function(a,b,c){return a.uniform2fv(b,c)},
cr:function(a,b,c){return a.uniform3fv(b,c)},
cs:function(a,b,c){return a.uniform4fv(b,c)},
ct:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cu:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cw:function(a,b){return a.useProgram(b)},
cA:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cB:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fz.prototype={
dX:function(a,b){return a.beginTransformFeedback(b)},
e_:function(a,b){return a.bindVertexArray(b)},
e9:function(a){return a.createVertexArray()},
eg:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eh:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
ei:function(a){return a.endTransformFeedback()},
eM:function(a,b,c,d){this.dQ(a,b,c,d)
return},
dQ:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eN:function(a,b,c){return a.vertexAttribDivisor(b,c)},
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
c5:function(a,b){return a.createShader(b)},
c6:function(a,b){return a.depthMask(b)},
c7:function(a,b){return a.disable(b)},
c8:function(a,b,c,d){return a.drawArrays(b,c,d)},
c9:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ca:function(a,b){return a.enable(b)},
cb:function(a,b){return a.enableVertexAttribArray(b)},
aG:function(a){return P.it(a.getContextAttributes())},
bb:function(a,b){return a.getProgramInfoLog(b)},
bc:function(a,b,c){return a.getProgramParameter(b,c)},
bd:function(a,b){return a.getShaderInfoLog(b)},
be:function(a,b,c){return a.getShaderParameter(b,c)},
bf:function(a,b,c){return a.getUniformLocation(b,c)},
cd:function(a,b){return a.linkProgram(b)},
bk:function(a,b,c){return a.shaderSource(b,c)},
bn:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cm:function(a,b,c){return a.uniform1f(b,c)},
cn:function(a,b,c){return a.uniform1fv(b,c)},
co:function(a,b,c){return a.uniform1i(b,c)},
cp:function(a,b,c){return a.uniform1iv(b,c)},
cq:function(a,b,c){return a.uniform2fv(b,c)},
cr:function(a,b,c){return a.uniform3fv(b,c)},
cs:function(a,b,c){return a.uniform4fv(b,c)},
ct:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cu:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cw:function(a,b){return a.useProgram(b)},
cA:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cB:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.ih.prototype={$isa:1}
P.fJ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return P.it(this.dE(a,b))},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
dE:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.aC]},
$isb:1,
$asb:function(){return[P.aC]}}
P.cB.prototype={$isc:1,
$asc:function(){return[P.aC]},
$isb:1,
$asb:function(){return[P.aC]}}
P.cO.prototype={$isc:1,
$asc:function(){return[P.aC]},
$isb:1,
$asb:function(){return[P.aC]}}
B.iQ.prototype={
$1:function(a){$.$get$iu().j(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aT]}}}
B.iR.prototype={
$1:function(a){$.$get$iu().j(0,a.which,null)},
$S:function(){return{func:1,args:[W.aT]}}}
B.iS.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.mY=t
$.mZ=C.b.ac(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jv=s-C.b.H(window.innerWidth,2)
$.l1=-(t-C.b.H(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.Q]}}}
B.iT.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.c3=t-C.b.H(window.innerWidth,2)
$.c4=-(s-C.b.H(window.innerHeight,2))
if(a.button===2)$.$get$c1().j(0,"right",!0)
else $.$get$c1().j(0,"left",!0)},
$S:function(){return{func:1,args:[W.Q]}}}
B.iU.prototype={
$1:function(a){if(a.button===2)$.$get$c1().j(0,"right",null)
else $.$get$c1().j(0,"left",null)},
$S:function(){return{func:1,args:[W.Q]}}}
B.fb.prototype={
d8:function(a,b,c,d){var t
d.toString
W.al(d,W.n5().$1(d),new B.fc(this),!1,W.b0)
W.al(d,"mousemove",new B.fd(this),!1,W.Q)
t=W.aZ
W.al(d,"touchstart",new B.fe(),!1,t)
W.al(d,"touchmove",new B.ff(this),!1,t)
B.nl(null)}}
B.fc.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.a2.gea(a)*r.k3
if(C.c.ac(r.fy,t)>0)r.fy=H.ad(C.c.ac(r.fy,t))}catch(q){s=H.S(q)
P.ao(s)}},
$S:function(){return{func:1,args:[W.b0]}}}
B.fd.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.ad(t.go+C.b.ac($.jv,$.c3)*0.01)
s=t.id
r=$.c4
q=$.l1
t.id=H.ad(s+(r-q)*0.01)
$.c3=$.jv
$.c4=q}},
$S:function(){return{func:1,args:[W.Q]}}}
B.fe.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.aa(t.clientX)
C.c.aa(t.clientY)
$.c3=s
C.c.aa(t.clientX)
$.c4=C.c.aa(t.clientY)},
$S:function(){return{func:1,args:[W.aZ]}}}
B.ff.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.aa(t.clientX)
t=C.c.aa(t.clientY)
r=this.a
r.go=H.ad(r.go+C.b.ac(s,$.c3)*0.01)
r.id=H.ad(r.id+($.c4-t)*0.01)
$.c3=s
$.c4=t},
$S:function(){return{func:1,args:[W.aZ]}}}
G.eZ.prototype={}
G.ds.prototype={
T:function(a,b){var t=this.d
if(H.aH(!t.I(0,a)))H.b6("uniform "+a+" already set")
t.j(0,a,b)},
aO:function(){return this.d},
l:function(a){var t,s,r,q
t=H.D(["{"+new H.aE(H.iy(this),null).l(0)+"}["+this.a+"]"],[P.v])
for(s=this.d,r=s.gG(s),r=r.gB(r);r.p();){q=r.gt()
C.a.i(t,H.i(q)+": "+H.i(s.h(0,q)))}return C.a.ao(t,"\n")}}
G.dQ.prototype={
bg:function(a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=this.d
a2.v(t)
s=a2.a
s[12]=0
s[13]=0
s[14]=0
s[15]=1
t=t.a
r=-t[12]
q=-t[13]
p=-t[14]
t=J.x(r)
o=!!t.$isaG
n=o?t.gaE(r):1
if(!!t.$ish){m=t.gm(r)
q=t.gn(r)
p=t.gO(r)
r=m}else if(o){m=t.gm(r)
q=t.gn(r)
p=t.gO(r)
r=m}else if(!(typeof r==="number")){r=null
q=null
p=null}t=C.c.J(s[0],r)
o=C.c.J(s[4],q)
l=C.c.J(s[8],p)
k=s[12]
j=C.c.J(s[1],r)
i=C.c.J(s[5],q)
h=C.c.J(s[9],p)
g=s[13]
f=C.c.J(s[2],r)
e=C.c.J(s[6],q)
d=C.c.J(s[10],p)
c=s[14]
b=C.c.J(s[3],r)
a=C.c.J(s[7],q)
a0=C.c.J(s[11],p)
a1=s[15]
s[12]=t+o+l+k*n
s[13]=j+i+h+g*n
s[14]=f+e+d+c*n
s[15]=b+a+a0+a1*n}}
G.dT.prototype={
cc:function(a,b,c){J.ls(this.a,b)
if(c>0)J.lO(this.a,b,c)}}
G.eu.prototype={}
G.z.prototype={}
G.cf.prototype={}
G.bb.prototype={
a2:function(a){var t=this.e
H.d(!t.I(0,a))
H.d(C.e.bm(a,"a"))
switch($.$get$a_().h(0,a).a){case"vec2":t.j(0,a,H.D([],[T.t]))
break
case"vec3":t.j(0,a,H.D([],[T.h]))
break
case"vec4":t.j(0,a,H.D([],[T.aG]))
break
case"float":t.j(0,a,H.D([],[P.P]))
break
case"uvec4":t.j(0,a,H.D([],[[P.b,P.o]]))
break
default:if(H.aH(!1))H.b6("unknown type for "+a)}},
bp:function(a){var t,s,r
H.d(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.i(s,new G.cf(t,t+1,t+2,t+3))},
aM:function(a){var t,s,r,q,p
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.H)(a),++r){q=a[r]
p=new T.h(new Float32Array(3))
p.v(q)
C.a.i(s,p)}},
d_:function(a){var t,s,r,q,p
H.d(!0)
t=this.d
s=t.length
C.a.i(this.b,new G.z(s,s+1,s+2))
for(r=0;r<3;++r){q=a[r]
p=new T.h(new Float32Array(3))
p.v(q)
C.a.i(t,p)}},
at:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.H)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.i(t,new T.t(o))}},
aL:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.H)(b),++q){p=b[q]
o=new T.h(new Float32Array(3))
o.v(p)
r.i(t,o)}},
d2:function(){var t,s,r,q,p,o,n,m,l,k
t=this.b
H.d(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.D(r,[P.o])
for(r=t.length,p=0,o=0;n=t.length,o<n;n===r||(0,H.H)(t),++o){m=t[o]
q[p]=m.a
q[p+1]=m.b
q[p+2]=m.c
p+=3}for(t=s.length,o=0;r=s.length,o<r;r===t||(0,H.H)(s),++o){l=s[o]
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
d3:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.d
s=new Array(t.length)
s.fixed$length=Array
r=H.D(s,[T.h])
q=new T.h(new Float32Array(H.f(3)))
p=new T.h(new Float32Array(H.f(3)))
for(s=this.b,o=s.length,n=0;n<s.length;s.length===o||(0,H.H)(s),++n){m=s[n]
l=m.a
k=m.b
j=m.c
G.jg(t[l],t[k],t[j],q,p)
i=new T.h(new Float32Array(3))
i.v(p)
r[l]=i
l=new T.h(new Float32Array(3))
l.v(p)
r[k]=l
l=new T.h(new Float32Array(3))
l.v(p)
r[j]=l}for(s=this.c,o=s.length,n=0;n<s.length;s.length===o||(0,H.H)(s),++n){h=s[n]
l=h.a
k=h.b
j=h.c
G.jg(t[l],t[k],t[j],q,p)
i=new T.h(new Float32Array(3))
i.v(p)
r[l]=i
l=new T.h(new Float32Array(3))
l.v(p)
r[k]=l
l=new T.h(new Float32Array(3))
l.v(p)
r[j]=l
l=new T.h(new Float32Array(3))
l.v(p)
r[h.d]=l}this.e.j(0,"aNormal",r)},
l:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gG(s),r=r.gB(r);r.p();){q=r.gt()
p=$.$get$a_().h(0,q).a
C.a.i(t,H.i(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.ao(t," ")}}
G.dq.prototype={}
G.dp.prototype={}
G.eU.prototype={
d7:function(a){this.T("cDepthTest",!0)
this.T("cDepthWrite",!0)
this.T("cBlendEquation",$.$get$jN())
this.T("cStencilFunc",$.$get$kn())}}
G.eW.prototype={
br:function(a,b,c){var t,s
if(C.e.aP(a,0)===105){if(H.aH(C.b.aK(b.length,c)===this.z))H.b6("ChangeAttribute "+this.z)}else H.d(C.b.aK(b.length,c)===(this.ch.length/3|0))
this.cy.j(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dG(t.a,34962,s)
J.jC(t.a,34962,b,35048)},
d4:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
ad:function(a,b,c){var t,s,r,q,p,o
t=J.jy(a,0)===105
if(t&&this.z===0)this.z=C.b.aK(b.length,c)
s=this.r
r=this.d
s.j(0,a,J.j_(r.a))
this.br(a,b,c)
q=$.$get$a_().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.aH(p.I(0,a)))H.b6("unexpected attribute "+a)
o=p.h(0,a)
J.dH(r.a,this.e)
r.cc(0,o,t?1:0)
s=s.h(0,a)
p=q.bt()
J.dG(r.a,34962,s)
J.jK(r.a,o,p,5126,!1,0,0)},
l:function(a){var t,s,r
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,t=t.gG(t),t=t.gB(t);t.p();){r=t.gt()
C.a.i(s,H.i(r)+":"+this.cy.h(0,r).length)}return"MESH["+this.a+"] "+C.a.ao(s,"  ")},
saU:function(a){this.cx=a}}
G.fg.prototype={
aO:function(){var t,s
t=this.z
this.x.bg(t)
s=this.Q
s.v(this.y)
s.b5(0,t)
t=this.d
t.j(0,"uPerspectiveViewMatrix",s)
return t},
ae:function(){var t,s,r,q,p,o,n,m,l,k
t=this.cy
s=this.cx
r=t-s
q=this.y
p=this.db
o=p+r/this.ch
n=this.dx
m=this.dy
l=o-p
k=m-n
q.bj()
q.L(0,0,2/r)
q.L(1,1,2/l)
q.L(2,2,-2/k)
q.L(0,3,-(t+s)/r)
q.L(1,3,-(o+p)/l)
q.L(2,3,-(m+n)/k)
q.L(3,3,1)},
aN:function(a,b){var t=C.b.ba(a,b)
if(this.ch===t)return
this.ch=t
this.ae()}}
G.fj.prototype={
aN:function(a,b){var t=C.b.ba(a,b)
if(this.z===t)return
this.z=t
this.ae()},
ae:function(){var t,s,r,q,p,o
t=this.db
s=this.z
r=this.Q
q=this.ch
p=Math.tan(this.y*3.141592653589793/180*0.5)
o=r-q
t.bj()
t.L(0,0,1/(p*s))
t.L(1,1,1/p)
t.L(2,2,(q+r)/o)
t.L(3,2,-1)
t.L(2,3,2*r*q/o)},
aO:function(){var t,s,r,q,p
t=this.x
s=t.d.a
r=s[12]
q=s[13]
s=s[14]
p=new T.h(new Float32Array(H.f(3)))
p.q(r,q,s)
s=this.d
s.j(0,"uEyePosition",p)
p=this.cy
t.bg(p)
t=this.cx
t.v(this.db)
t.b5(0,p)
s.j(0,"uPerspectiveViewMatrix",t)
return s}}
G.fx.prototype={
df:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gk(t)===s.gk(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gG(s),s=s.gB(s);s.p();){q=s.gt()
if(!t.I(0,q))C.a.i(r,q)}for(t=this.x,s=new P.bU(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.E(0,q))C.a.i(r,q)}return r},
di:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gG(b),s=s.gB(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gt()
switch(J.jy(n,0)){case 117:if(q.I(0,n)){m=b.h(0,n)
if(p.I(0,n))H.iO("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.j(0,n,a)
l=$.$get$a_().h(0,n)
if(l==null)H.I("unknown "+n)
H.d(q.I(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.j4(r.a,k,m)
else if(!!J.x(m).$iskb)J.lM(r.a,k,m)
break
case"float":if(l.c===0)J.lK(r.a,k,m)
else if(!!J.x(m).$iser)J.lL(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aK(m,"$isF").a
J.jJ(r.a,k,!1,j)}else if(!!J.x(m).$iser)J.jJ(r.a,k,!1,m)
else if(H.aH(!1))H.b6("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.aK(m,"$isaj").a
J.jI(r.a,k,!1,j)}else if(!!J.x(m).$iser)J.jI(r.a,k,!1,m)
else if(H.aH(!1))H.b6("bad unform: "+n)
break
case"vec4":if(l.c===0){j=H.aK(m,"$isaG").a
J.jH(r.a,k,j)}else J.jH(r.a,k,m)
break
case"vec3":if(l.c===0){j=H.aK(m,"$ish").a
J.jG(r.a,k,j)}else J.jG(r.a,k,m)
break
case"vec2":if(l.c===0){j=H.aK(m,"$ist").a
J.jF(r.a,k,j)}else J.jF(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a5(33984,this.ch)
J.jz(r.a,j)
j=H.aK(m,"$ismw").d5()
J.jB(r.a,3553,j)
j=this.ch
J.j4(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.a5(33984,this.ch)
J.jz(r.a,j)
j=H.aK(m,"$ismw").d5()
J.jB(r.a,34067,j)
j=this.ch
J.j4(r.a,k,j)
this.ch=this.ch+1
break
default:H.iO("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":if(J.J(m,!0))J.dI(r.a,2929)
else J.j0(r.a,2929)
break
case"cStencilFunc":H.aK(m,"$isdq")
j=m.a
if(j===1281)J.j0(r.a,2960)
else{J.dI(r.a,2960)
i=m.b
h=m.c
J.lH(r.a,j,i,h)}break
case"cDepthWrite":J.lm(r.a,m)
break
case"cBlendEquation":H.aK(m,"$isdp")
j=m.a
if(j===1281)J.j0(r.a,3042)
else{J.dI(r.a,3042)
i=m.b
h=m.c
J.lg(r.a,i,h)
J.lf(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aP(1000*(s-new P.bp(t,!1).a)).l(0)},
d1:function(a,b,c){var t,s,r,q,p,o,n,m,l
Date.now()
t=this.d
s=this.r
J.lN(t.a,s)
this.ch=0
this.z.Z(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.H)(b),++r){q=b[r]
this.di(q.a,q.aO())}s=this.Q
s.Z(0)
for(p=a.cy,p=p.gG(p),p=p.gB(p);p.p();)s.i(0,p.gt())
o=this.df()
if(o.length!==0)P.ao("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.i(o)))
J.dH(a.d.a,a.e)
n=this.e.f.length>0
s=a.f
p=a.d4()
m=a.Q
l=a.z
t.toString
if(n)J.ld(t.a,s)
if(m!==-1)if(l>1)J.lq(t.a,s,p,m,0,l)
else J.lp(t.a,s,p,m,0)
else if(l>1)J.lo(t.a,s,0,p,l)
else J.ln(t.a,s,0,p)
if(n)J.lt(t.a)},
da:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.e
r=s.b
q=this.f
p=q.b
o=s.f
n=J.lk(t.a)
m=G.kE(t.a,35633,r)
J.jA(t.a,n,m)
l=G.kE(t.a,35632,p)
J.jA(t.a,n,l)
if(o.length>0)J.lJ(t.a,n,o,35980)
J.lD(t.a,n)
if(!J.lC(t.a,n,35714))H.I(J.lB(t.a,n))
this.r=n
this.sds(0,P.jd(s.c,null))
for(s=s.d,r=s.length,p=this.y,k=0;k<s.length;s.length===r||(0,H.H)(s),++k){j=s[k]
o=this.r
p.j(0,j,J.jE(t.a,o,j))}for(s=q.d,r=s.length,k=0;k<s.length;s.length===r||(0,H.H)(s),++k){j=s[k]
q=this.r
p.j(0,j,J.jE(t.a,q,j))}},
sds:function(a,b){this.x=b}}
G.k.prototype={
bt:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.dj.prototype={
cZ:function(a){var t,s,r,q
H.d(this.b==null)
for(t=this.c,s=this.x,r=0;r<1;++r){q=a[r]
H.d($.$get$a_().I(0,q))
H.d(!C.a.E(t,q))
C.a.i(t,q)
s.j(0,q,this.r);++this.r}C.a.bl(t)},
bq:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.H)(a),++r){q=a[r]
if(H.aH($.$get$a_().I(0,q)))H.b6("missing uniform "+q)
H.d(!C.a.E(s,q))
C.a.i(s,q)}C.a.bl(s)},
dc:function(a,b){H.d(this.b==null)
this.b=this.dj(!0,a,b)},
bu:function(a){return this.dc(a,null)},
dj:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.H)(t),++o){n=t[o]
m=$.$get$a_().h(0,n)
C.a.i(q,"layout (location="+H.i(p.h(0,n))+") in "+m.a+" "+H.i(n)+";")}C.a.i(q,"")
l=r?"in":"out"
if(r)C.a.i(q,"out vec4 oFragColor;")
for(t=this.e,o=0;!1;++o){k=t[o]
m=$.$get$a_().h(0,k)
C.a.i(q,l+" "+m.a+" "+H.i(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.H)(t),++o){k=t[o]
m=$.$get$a_().h(0,k)
C.a.i(q,l+" "+m.a+" "+H.i(k)+";")}C.a.i(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.H)(t),++o){k=t[o]
m=$.$get$a_().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.i(q,"uniform "+m.a+" "+H.i(k)+j+";")}C.a.i(q,"")
C.a.i(q,"void main(void) {")
C.a.M(q,b)
C.a.i(q,"}")
return C.a.ao(q,"\n")}}
G.fH.prototype={
a6:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
R.fL.prototype={
dm:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.mE("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.m).bA(r,"float")
r.setProperty(p,"left","")
p=C.m.bA(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.h.U(t,s)}return t},
dd:function(a,b,c){var t,s,r
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
J.iY(this.a,s)
r=this.dm(b,c,90,30)
this.d=r
J.iY(this.a,r)
t=t.createElement("div")
this.c=t
J.iY(this.a,t)}}
R.fM.prototype={
dh:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.o.eL(s,2)+" fps"
t=this.c;(t&&C.h).cP(t,b)
r=C.b.H(30*C.o.e0(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.h).U(t,q)},
dg:function(a){return this.dh(a,"")}}
A.aV.prototype={
l:function(a){return"NODE["+this.a+"]"}}
A.bK.prototype={}
A.fw.prototype={
d0:function(a){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.r
r=this.x
q=this.z
p=this.Q
o=t.a
t=t.b
J.le(o.a,36160,t)
H.d(q>0&&p>0)
J.lP(o.a,r,this.y,q,p)
if(s!==0)J.lh(o.a,s)
for(t=this.f,s=t.length,n=0;n<t.length;t.length===s||(0,H.H)(t),++n){m=t[n]
l=m.e
C.a.i(l,new G.ds(P.O(),"transforms",!1,!0))
k=new T.F(new Float32Array(16))
k.F()
for(r=m.f,q=r.length,p=m.d,j=0;j<r.length;r.length===q||(0,H.H)(r),++j)A.kT(p,r[j],k,a,l)
l.pop()}},
bs:function(){return this.d0(null)},
d9:function(a,b,c){if(this.d==null)this.d=new G.eu(this.e,null,null,null,null)}}
A.iz.prototype={
$2:function(a,b){var t=536870911&a+J.aq(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.o,P.q]}}}
T.aj.prototype={
v:function(a){var t,s
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
l:function(a){return"[0] "+this.W(0).l(0)+"\n[1] "+this.W(1).l(0)+"\n[2] "+this.W(2).l(0)+"\n"},
h:function(a,b){return this.a[b]},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aj){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gw:function(a){return A.dD(this.a)},
W:function(a){var t,s
t=new Float32Array(H.f(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.h(t)},
e5:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g===0){this.v(a)
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
T.F.prototype={
L:function(a,b,c){H.d(a<4)
H.d(b<4)
this.a[b*4+a]=c},
v:function(a){var t,s
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
l:function(a){return"[0] "+this.W(0).l(0)+"\n[1] "+this.W(1).l(0)+"\n[2] "+this.W(2).l(0)+"\n[3] "+this.W(3).l(0)+"\n"},
h:function(a,b){return this.a[b]},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.F){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gw:function(a){return A.dD(this.a)},
W:function(a){var t,s
t=new Float32Array(H.f(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aG(t)},
bj:function(){var t=this.a
t[0]=0
t[1]=0
t[2]=0
t[3]=0
t[4]=0
t[5]=0
t[6]=0
t[7]=0
t[8]=0
t[9]=0
t[10]=0
t[11]=0
t[12]=0
t[13]=0
t[14]=0
t[15]=0},
F:function(){var t=this.a
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
b5:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
l:function(a){var t=this.a
return"["+H.i(t[0])+","+H.i(t[1])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.t){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gw:function(a){return A.dD(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.h.prototype={
q:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
v:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
l:function(a){var t=this.a
return"["+H.i(t[0])+","+H.i(t[1])+","+H.i(t[2])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.h){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gw:function(a){return A.dD(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){return Math.sqrt(this.gR())},
gR:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
C:function(a){var t,s,r
t=Math.sqrt(this.gR())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
b3:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
az:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.h(new Float32Array(H.f(3)))
t.q(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
i:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]
s[2]=s[2]+t[2]},
aI:function(a){var t,s
t=a.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
a1:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gO:function(a){return this.a[2]}}
T.aG.prototype={
l:function(a){var t=this.a
return H.i(t[0])+","+H.i(t[1])+","+H.i(t[2])+","+H.i(t[3])},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aG){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gw:function(a){return A.dD(this.a)},
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
gO:function(a){return this.a[2]},
gaE:function(a){return this.a[3]}}
K.iL.prototype={
$1:function(a){var t,s,r,q,p
t=this.a
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.ao("size change "+H.i(s)+" "+H.i(r))
t=C.b.H(s,2)
this.d.aN(t,r)
this.b.aN(t,r)
q=this.c
q.z=t
q.Q=r
p=this.e
p.z=t
p.Q=r
q.x=t},
$S:function(){return{func:1,v:true,args:[W.l]}}}
K.iK.prototype={
$1:function(b2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
this.a.a=b2+0
t=this.c
s=t.k4
if(s.h(0,37)!=null)t.go=H.ad(t.go+0.03)
else if(s.h(0,39)!=null)t.go=H.ad(t.go-0.03)
if(s.h(0,38)!=null)t.id=H.ad(t.id+0.03)
else if(s.h(0,40)!=null)t.id=H.ad(t.id-0.03)
if(s.h(0,33)!=null)t.fy=H.ad(t.fy*0.99)
else if(s.h(0,34)!=null)t.fy=H.ad(t.fy*1.01)
if(s.h(0,32)!=null){t.go=0
t.id=0}s=H.ad(C.c.e1(t.id,-1.4707963267948965,1.4707963267948965))
t.id=s
r=t.fy
q=t.go
p=r*Math.cos(s)
t.a6(p*Math.cos(q),r*Math.sin(s),p*Math.sin(q))
q=t.k2
s=t.d.a
r=q.a
s[12]=s[12]+r[0]
s[13]=s[13]+r[1]
s[14]=s[14]+r[2]
r=s[12]
o=s[13]
n=s[14]
m=new T.h(new Float32Array(H.f(3)))
m.q(0,1,0)
l=t.e
k=l.a
k[0]=s[12]
k[1]=s[13]
k[2]=s[14]
k=new Float32Array(H.f(3))
j=new T.h(k)
j.v(l)
j.aI(q)
j.C(0)
i=m.az(j)
i.C(0)
h=j.az(i)
h.C(0)
q=i.b3(l)
g=h.b3(l)
l=j.b3(l)
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
s[15]=1
s[14]=-l
s[13]=-g
s[12]=-q
s[11]=0
s[10]=k
s[9]=d
s[8]=f
s[7]=0
s[6]=a1
s[5]=a0
s[4]=a
s[3]=0
s[2]=b
s[1]=c
s[0]=e
s[12]=r
s[13]=o
s[14]=n
n=t.f
o=n.a
o[0]=s[2]
o[1]=s[6]
o[2]=s[10]
t=-t.k1
n=Math.sqrt(n.gR())
i=o[0]/n
h=o[1]/n
j=o[2]/n
n=Math.cos(t)
t=Math.sin(t)
a2=1-n
a3=i*i*a2+n
o=j*t
a4=i*h*a2-o
r=h*t
a5=i*j*a2+r
a6=h*i*a2+o
a7=h*h*a2+n
t=i*t
a8=h*j*a2-t
a9=j*i*a2-r
b0=j*h*a2+t
b1=j*j*a2+n
n=s[0]
t=s[4]
r=s[8]
o=s[1]
e=s[5]
c=s[9]
b=s[2]
a=s[6]
a0=s[10]
a1=s[3]
f=s[7]
d=s[11]
s[0]=n*a3+t*a6+r*a9
s[1]=o*a3+e*a6+c*a9
s[2]=b*a3+a*a6+a0*a9
s[3]=a1*a3+f*a6+d*a9
s[4]=n*a4+t*a7+r*b0
s[5]=o*a4+e*a7+c*b0
s[6]=b*a4+a*a7+a0*b0
s[7]=a1*a4+f*a7+d*b0
s[8]=n*a5+t*a8+r*b1
s[9]=o*a5+e*a8+c*b1
s[10]=b*a5+a*a8+a0*b1
s[11]=a1*a5+f*a8+d*b1
this.b.dg(b2)
this.d.bs()
this.e.bs()
C.a3.gdV(window).ck(this)},
$S:function(){return{func:1,v:true,args:[P.W]}}}
J.a.prototype.cU=J.a.prototype.l
J.bA.prototype.cW=J.bA.prototype.l
P.X.prototype.cV=P.X.prototype.aF
W.a3.prototype.aJ=W.a3.prototype.P
W.bW.prototype.cX=W.bW.prototype.Y;(function installTearOffs(){installTearOff(H.b3.prototype,"gev",0,0,0,null,["$0"],["aC"],0)
installTearOff(H.am.prototype,"gcH",0,0,0,null,["$1"],["N"],2)
installTearOff(H.b2.prototype,"gec",0,0,0,null,["$1"],["a_"],2)
installTearOff(P,"mU",1,0,0,null,["$1"],["mB"],1)
installTearOff(P,"mV",1,0,0,null,["$1"],["mC"],1)
installTearOff(P,"mW",1,0,0,null,["$1"],["mD"],1)
installTearOff(P,"kS",1,0,0,null,["$0"],["mS"],0)
installTearOff(P.ax.prototype,"gdu",0,0,0,null,["$2","$1"],["au","dv"],5)
installTearOff(P,"n0",1,0,0,null,["$2"],["lW"],6)
installTearOff(W,"n5",1,0,0,null,["$1"],["m2"],7)
installTearOff(W,"n6",1,0,0,null,["$4"],["mH"],4)
installTearOff(W,"n7",1,0,0,null,["$4"],["mI"],4)
installTearOff(W.da.prototype,"gb6",0,1,0,null,["$0"],["b7"],3)
installTearOff(W.dr.prototype,"gb6",0,1,0,null,["$0"],["b7"],3)
installTearOff(K,"l2",1,0,0,null,["$0"],["nf"],0)})();(function inheritance(){inherit(P.q,null)
var t=P.q
inherit(H.ja,t)
inherit(J.a,t)
inherit(J.dN,t)
inherit(P.X,t)
inherit(H.d2,t)
inherit(P.cZ,t)
inherit(H.cg,t)
inherit(H.b8,t)
inherit(H.hW,t)
inherit(H.b3,t)
inherit(H.hz,t)
inherit(H.b4,t)
inherit(H.hV,t)
inherit(H.hs,t)
inherit(H.bf,t)
inherit(H.h1,t)
inherit(H.ar,t)
inherit(H.am,t)
inherit(H.b2,t)
inherit(H.fv,t)
inherit(H.h8,t)
inherit(P.ba,t)
inherit(H.dA,t)
inherit(H.aE,t)
inherit(H.ah,t)
inherit(H.eL,t)
inherit(H.eN,t)
inherit(P.hu,t)
inherit(P.dx,t)
inherit(P.ax,t)
inherit(P.dv,t)
inherit(P.fO,t)
inherit(P.fP,t)
inherit(P.b7,t)
inherit(P.ik,t)
inherit(P.fE,t)
inherit(P.hT,t)
inherit(P.bU,t)
inherit(P.bJ,t)
inherit(P.y,t)
inherit(P.hU,t)
inherit(P.ay,t)
inherit(P.L,t)
inherit(P.bp,t)
inherit(P.W,t)
inherit(P.aP,t)
inherit(P.dl,t)
inherit(P.hE,t)
inherit(P.e5,t)
inherit(P.b,t)
inherit(P.aC,t)
inherit(P.aW,t)
inherit(P.bM,t)
inherit(P.v,t)
inherit(P.bN,t)
inherit(W.dV,t)
inherit(W.hr,t)
inherit(W.bT,t)
inherit(W.B,t)
inherit(W.dc,t)
inherit(W.bW,t)
inherit(W.ib,t)
inherit(W.ch,t)
inherit(W.db,t)
inherit(W.i5,t)
inherit(W.dB,t)
inherit(P.hY,t)
inherit(G.eZ,t)
inherit(G.dT,t)
inherit(G.eu,t)
inherit(G.z,t)
inherit(G.cf,t)
inherit(G.bb,t)
inherit(G.dq,t)
inherit(G.dp,t)
inherit(G.k,t)
inherit(G.dj,t)
inherit(R.fL,t)
inherit(T.aj,t)
inherit(T.F,t)
inherit(T.t,t)
inherit(T.h,t)
inherit(T.aG,t)
t=J.a
inherit(J.eG,t)
inherit(J.eH,t)
inherit(J.bA,t)
inherit(J.aQ,t)
inherit(J.bc,t)
inherit(J.aR,t)
inherit(H.bD,t)
inherit(H.be,t)
inherit(W.j,t)
inherit(W.a1,t)
inherit(W.c6,t)
inherit(W.dR,t)
inherit(W.A,t)
inherit(W.ck,t)
inherit(W.dX,t)
inherit(W.dY,t)
inherit(W.dZ,t)
inherit(W.cb,t)
inherit(W.cc,t)
inherit(W.cd,t)
inherit(W.ct,t)
inherit(W.e1,t)
inherit(W.l,t)
inherit(W.cs,t)
inherit(W.a5,t)
inherit(W.ex,t)
inherit(W.cE,t)
inherit(W.eP,t)
inherit(W.eV,t)
inherit(W.a6,t)
inherit(W.cq,t)
inherit(W.f7,t)
inherit(W.da,t)
inherit(W.cp,t)
inherit(W.fh,t)
inherit(W.bg,t)
inherit(W.a7,t)
inherit(W.co,t)
inherit(W.ak,t)
inherit(W.dg,t)
inherit(W.a9,t)
inherit(W.cD,t)
inherit(W.aa,t)
inherit(W.fN,t)
inherit(W.Y,t)
inherit(W.cC,t)
inherit(W.h0,t)
inherit(W.ac,t)
inherit(W.cu,t)
inherit(W.h5,t)
inherit(W.dr,t)
inherit(W.hc,t)
inherit(W.hh,t)
inherit(W.ht,t)
inherit(W.cl,t)
inherit(W.cz,t)
inherit(W.cy,t)
inherit(W.cx,t)
inherit(W.cn,t)
inherit(W.cv,t)
inherit(W.ii,t)
inherit(W.ij,t)
inherit(P.as,t)
inherit(P.cA,t)
inherit(P.at,t)
inherit(P.cr,t)
inherit(P.fn,t)
inherit(P.fo,t)
inherit(P.ft,t)
inherit(P.cm,t)
inherit(P.au,t)
inherit(P.cw,t)
inherit(P.hg,t)
inherit(P.dO,t)
inherit(P.fy,t)
inherit(P.fz,t)
inherit(P.ih,t)
inherit(P.cB,t)
t=J.bA
inherit(J.fl,t)
inherit(J.b_,t)
inherit(J.aS,t)
inherit(J.j9,J.aQ)
t=J.bc
inherit(J.d0,t)
inherit(J.d_,t)
t=P.X
inherit(H.c,t)
inherit(H.d3,t)
inherit(H.du,t)
t=H.c
inherit(H.bd,t)
inherit(H.eM,t)
inherit(H.e4,H.d3)
t=P.cZ
inherit(H.eQ,t)
inherit(H.hj,t)
t=H.bd
inherit(H.bB,t)
inherit(P.eO,t)
t=H.b8
inherit(H.iV,t)
inherit(H.iW,t)
inherit(H.hR,t)
inherit(H.hA,t)
inherit(H.eC,t)
inherit(H.eD,t)
inherit(H.hX,t)
inherit(H.h2,t)
inherit(H.h3,t)
inherit(H.iX,t)
inherit(H.iE,t)
inherit(H.iF,t)
inherit(H.iG,t)
inherit(H.iH,t)
inherit(H.iI,t)
inherit(H.fX,t)
inherit(H.eI,t)
inherit(H.iA,t)
inherit(H.iB,t)
inherit(H.iC,t)
inherit(P.ho,t)
inherit(P.hn,t)
inherit(P.hp,t)
inherit(P.hq,t)
inherit(P.hF,t)
inherit(P.hJ,t)
inherit(P.hG,t)
inherit(P.hH,t)
inherit(P.hI,t)
inherit(P.hM,t)
inherit(P.hN,t)
inherit(P.hL,t)
inherit(P.hK,t)
inherit(P.fQ,t)
inherit(P.fR,t)
inherit(P.io,t)
inherit(P.i0,t)
inherit(P.i_,t)
inherit(P.i1,t)
inherit(P.eR,t)
inherit(P.e2,t)
inherit(P.e3,t)
inherit(W.ir,t)
inherit(W.hk,t)
inherit(W.hD,t)
inherit(W.f9,t)
inherit(W.f8,t)
inherit(W.i7,t)
inherit(W.i8,t)
inherit(W.ie,t)
inherit(W.ig,t)
inherit(P.is,t)
inherit(B.iQ,t)
inherit(B.iR,t)
inherit(B.iS,t)
inherit(B.iT,t)
inherit(B.iU,t)
inherit(B.fc,t)
inherit(B.fd,t)
inherit(B.fe,t)
inherit(B.ff,t)
inherit(A.iz,t)
inherit(K.iL,t)
inherit(K.iK,t)
t=H.hs
inherit(H.bh,t)
inherit(H.bX,t)
t=P.ba
inherit(H.dd,t)
inherit(H.eJ,t)
inherit(H.hb,t)
inherit(H.ha,t)
inherit(H.dS,t)
inherit(H.fB,t)
inherit(P.c5,t)
inherit(P.de,t)
inherit(P.af,t)
inherit(P.w,t)
inherit(P.dt,t)
inherit(P.aD,t)
inherit(P.a2,t)
inherit(P.dW,t)
t=H.fX
inherit(H.fK,t)
inherit(H.bo,t)
inherit(H.hm,P.c5)
t=H.be
inherit(H.f_,t)
inherit(H.d6,t)
t=H.d6
inherit(H.bF,t)
inherit(H.bE,t)
inherit(H.bG,H.bF)
inherit(H.d7,H.bG)
inherit(H.bH,H.bE)
inherit(H.d8,H.bH)
t=H.d7
inherit(H.d5,t)
inherit(H.f0,t)
t=H.d8
inherit(H.f1,t)
inherit(H.f2,t)
inherit(H.f3,t)
inherit(H.f4,t)
inherit(H.f5,t)
inherit(H.d9,t)
inherit(H.f6,t)
inherit(P.ic,P.hu)
inherit(P.hZ,P.ik)
inherit(P.dy,H.ah)
inherit(P.fD,P.fE)
inherit(P.hQ,P.fD)
inherit(P.hS,P.hQ)
inherit(P.d1,P.bJ)
t=P.W
inherit(P.P,t)
inherit(P.o,t)
t=P.af
inherit(P.dh,t)
inherit(P.eA,t)
t=W.j
inherit(W.u,t)
inherit(W.bs,t)
inherit(W.dU,t)
inherit(W.ep,t)
inherit(W.bz,t)
inherit(W.bC,t)
inherit(W.fq,t)
inherit(W.di,t)
inherit(W.fF,t)
inherit(W.a8,t)
inherit(W.bt,t)
inherit(W.ab,t)
inherit(W.Z,t)
inherit(W.bu,t)
inherit(W.he,t)
inherit(W.hi,t)
inherit(W.bQ,t)
inherit(W.hl,t)
inherit(W.b1,t)
inherit(W.i6,t)
t=W.u
inherit(W.a3,t)
inherit(W.aO,t)
inherit(W.bq,t)
inherit(W.ca,t)
inherit(W.hw,t)
t=W.a3
inherit(W.m,t)
inherit(P.K,t)
t=W.m
inherit(W.dL,t)
inherit(W.dM,t)
inherit(W.aN,t)
inherit(W.c7,t)
inherit(W.c9,t)
inherit(W.et,t)
inherit(W.ci,t)
inherit(W.eB,t)
inherit(W.fC,t)
inherit(W.dm,t)
inherit(W.fV,t)
inherit(W.fW,t)
inherit(W.bO,t)
inherit(W.hP,t)
inherit(W.bx,W.bs)
inherit(W.dP,W.bx)
inherit(W.b9,W.ck)
inherit(W.e_,W.cc)
inherit(W.cX,W.ct)
inherit(W.e0,W.cX)
inherit(W.a4,W.c6)
inherit(W.cV,W.cs)
inherit(W.eo,W.cV)
inherit(W.cP,W.cE)
inherit(W.by,W.cP)
inherit(W.cj,W.bq)
inherit(W.ey,W.bz)
inherit(W.aF,W.l)
t=W.aF
inherit(W.aT,t)
inherit(W.Q,t)
inherit(W.aZ,t)
inherit(W.eX,W.bC)
inherit(W.cR,W.cq)
inherit(W.eY,W.cR)
inherit(W.U,P.d1)
inherit(W.cG,W.cp)
inherit(W.bI,W.cG)
t=W.bg
inherit(W.fk,t)
inherit(W.fA,t)
inherit(W.h7,t)
inherit(W.cM,W.co)
inherit(W.fm,W.cM)
inherit(W.fp,W.ak)
inherit(W.bw,W.bt)
inherit(W.fG,W.bw)
inherit(W.cW,W.cD)
inherit(W.fI,W.cW)
inherit(W.cF,W.cC)
inherit(W.fZ,W.cF)
inherit(W.bv,W.bu)
inherit(W.h_,W.bv)
inherit(W.cI,W.cu)
inherit(W.h4,W.cI)
inherit(W.b0,W.Q)
inherit(W.cY,W.cl)
inherit(W.dw,W.cY)
inherit(W.cS,W.cz)
inherit(W.hv,W.cS)
inherit(W.hx,W.cd)
inherit(W.cU,W.cy)
inherit(W.hO,W.cU)
inherit(W.cH,W.cx)
inherit(W.dz,W.cH)
inherit(W.cQ,W.cn)
inherit(W.i9,W.cQ)
inherit(W.cJ,W.cv)
inherit(W.ia,W.cJ)
inherit(W.hy,W.hr)
inherit(W.hB,P.fO)
inherit(W.jk,W.hB)
inherit(W.hC,P.fP)
inherit(W.id,W.bW)
inherit(P.M,P.hY)
t=P.K
inherit(P.aB,t)
inherit(P.aM,t)
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
inherit(P.eq,t)
inherit(P.eS,t)
inherit(P.eT,t)
inherit(P.fi,t)
inherit(P.bL,t)
inherit(P.fU,t)
inherit(P.hf,t)
inherit(P.bS,t)
inherit(P.i2,t)
inherit(P.i3,t)
inherit(P.i4,t)
t=P.aB
inherit(P.dK,t)
inherit(P.es,t)
inherit(P.ag,t)
inherit(P.ez,t)
inherit(P.fT,t)
inherit(P.dn,t)
inherit(P.hd,t)
inherit(P.cK,P.cA)
inherit(P.eK,P.cK)
inherit(P.cT,P.cr)
inherit(P.fa,P.cT)
inherit(P.fu,P.ag)
inherit(P.cN,P.cm)
inherit(P.fS,P.cN)
t=P.dn
inherit(P.fY,t)
inherit(P.bP,t)
inherit(P.cL,P.cw)
inherit(P.h6,P.cL)
inherit(P.cO,P.cB)
inherit(P.fJ,P.cO)
t=G.eZ
inherit(G.fH,t)
inherit(G.ds,t)
inherit(G.eW,t)
inherit(G.fx,t)
inherit(A.bK,t)
inherit(A.fw,t)
t=G.fH
inherit(G.dQ,t)
inherit(A.aV,t)
inherit(B.fb,G.dQ)
t=G.ds
inherit(G.eU,t)
inherit(G.fg,t)
inherit(G.fj,t)
inherit(R.fM,R.fL)
mixin(H.bE,P.y)
mixin(H.bF,P.y)
mixin(H.bG,H.cg)
mixin(H.bH,H.cg)
mixin(P.bJ,P.y)
mixin(W.bs,P.y)
mixin(W.bt,P.y)
mixin(W.bu,P.y)
mixin(W.bv,W.B)
mixin(W.bw,W.B)
mixin(W.bx,W.B)
mixin(W.ck,W.dV)
mixin(W.cE,P.y)
mixin(W.cq,P.y)
mixin(W.cn,P.y)
mixin(W.cx,P.y)
mixin(W.cy,P.y)
mixin(W.cz,P.y)
mixin(W.cC,P.y)
mixin(W.cD,P.y)
mixin(W.cl,P.y)
mixin(W.co,P.y)
mixin(W.cp,P.y)
mixin(W.cs,P.y)
mixin(W.ct,P.y)
mixin(W.cu,P.y)
mixin(W.cv,P.y)
mixin(W.cF,W.B)
mixin(W.cG,W.B)
mixin(W.cH,W.B)
mixin(W.cR,W.B)
mixin(W.cS,W.B)
mixin(W.cP,W.B)
mixin(W.cQ,W.B)
mixin(W.cV,W.B)
mixin(W.cW,W.B)
mixin(W.cX,W.B)
mixin(W.cY,W.B)
mixin(W.cI,W.B)
mixin(W.cJ,W.B)
mixin(W.cM,W.B)
mixin(W.cU,W.B)
mixin(P.cA,P.y)
mixin(P.cm,P.y)
mixin(P.cr,P.y)
mixin(P.cw,P.y)
mixin(P.cK,W.B)
mixin(P.cL,W.B)
mixin(P.cN,W.B)
mixin(P.cT,W.B)
mixin(P.cB,P.y)
mixin(P.cO,W.B)})();(function constants(){C.f=W.aN.prototype
C.w=W.c7.prototype
C.m=W.b9.prototype
C.h=W.c9.prototype
C.x=W.cb.prototype
C.y=W.ci.prototype
C.i=W.cj.prototype
C.z=J.a.prototype
C.a=J.aQ.prototype
C.o=J.d_.prototype
C.b=J.d0.prototype
C.c=J.bc.prototype
C.e=J.aR.prototype
C.G=J.aS.prototype
C.K=H.d5.prototype
C.r=W.bI.prototype
C.t=J.fl.prototype
C.u=W.dg.prototype
C.v=W.dm.prototype
C.l=J.b_.prototype
C.a2=W.b0.prototype
C.a3=W.bQ.prototype
C.d=new P.hZ()
C.n=new P.aP(0)
C.A=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.B=function(hooks) {
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
C.p=function(hooks) { return hooks; }

C.C=function(getTagFallback) {
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
C.D=function() {
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
C.E=function(hooks) {
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
C.F=function(hooks) {
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
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.H=H.D(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.v])
C.I=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.J=makeConstList([])
C.j=H.D(makeConstList(["bind","if","ref","repeat","syntax"]),[P.v])
C.k=H.D(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.v])
C.L=H.N("nq")
C.M=H.N("nr")
C.N=H.N("er")
C.O=H.N("ns")
C.P=H.N("nt")
C.Q=H.N("kb")
C.R=H.N("nu")
C.S=H.N("ke")
C.T=H.N("aW")
C.U=H.N("v")
C.V=H.N("kA")
C.W=H.N("kB")
C.X=H.N("nv")
C.Y=H.N("kC")
C.Z=H.N("ay")
C.a_=H.N("P")
C.a0=H.N("o")
C.a1=H.N("W")})();(function staticFields(){$.ki="$cachedFunction"
$.kj="$cachedInvocation"
$.jR=null
$.jP=null
$.jm=!1
$.jq=null
$.kP=null
$.l4=null
$.iv=null
$.iD=null
$.jr=null
$.bi=null
$.bY=null
$.bZ=null
$.jn=!1
$.E=C.d
$.k7=0
$.aA=null
$.j6=null
$.k6=null
$.k5=null
$.k3=null
$.k2=null
$.k1=null
$.k0=null
$.mY=0
$.mZ=0
$.jv=0
$.l1=0
$.c3=0
$.c4=0
$.nm=!1
$.kV=0})();(function lazyInitializers(){lazy($,"k_","$get$k_",function(){return H.kY("_$dart_dartClosure")})
lazy($,"jb","$get$jb",function(){return H.kY("_$dart_js")})
lazy($,"kc","$get$kc",function(){return H.mc()})
lazy($,"kd","$get$kd",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.k7
$.k7=t+1
t="expando$key$"+t}return new P.e5(null,t,[P.o])})
lazy($,"kp","$get$kp",function(){return H.av(H.h9({
toString:function(){return"$receiver$"}}))})
lazy($,"kq","$get$kq",function(){return H.av(H.h9({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kr","$get$kr",function(){return H.av(H.h9(null))})
lazy($,"ks","$get$ks",function(){return H.av(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kw","$get$kw",function(){return H.av(H.h9(void 0))})
lazy($,"kx","$get$kx",function(){return H.av(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"ku","$get$ku",function(){return H.av(H.kv(null))})
lazy($,"kt","$get$kt",function(){return H.av(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kz","$get$kz",function(){return H.av(H.kv(void 0))})
lazy($,"ky","$get$ky",function(){return H.av(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jj","$get$jj",function(){return P.mA()})
lazy($,"c_","$get$c_",function(){return[]})
lazy($,"jZ","$get$jZ",function(){return{}})
lazy($,"kI","$get$kI",function(){return P.jd(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jl","$get$jl",function(){return P.O()})
lazy($,"iu","$get$iu",function(){return P.kf(P.o,P.ay)})
lazy($,"c1","$get$c1",function(){return P.kf(P.v,P.ay)})
lazy($,"kn","$get$kn",function(){return new G.dq(1281,0,4294967295)})
lazy($,"jN","$get$jN",function(){return new G.dp(1281,1281,1281)})
lazy($,"a_","$get$a_",function(){return P.aU(["cBlendEquation",new G.k("","",0),"cDepthWrite",new G.k("","",0),"cDepthTest",new G.k("","",0),"cStencilFunc",new G.k("","",0),"tPosition",new G.k("vec3","",0),"tSpeed",new G.k("vec3","",0),"tForce",new G.k("vec3","",0),"aColors",new G.k("vec3","per vertex color",0),"aColorAlpha",new G.k("vec4","per vertex color",0),"aPosition",new G.k("vec3","vertex coordinates",0),"aTexUV",new G.k("vec2","texture uvs",0),"aNormal",new G.k("vec3","vertex normals",0),"aBinormal",new G.k("vec3","vertex binormals",0),"aCenter",new G.k("vec4","for wireframe",0),"aPointSize",new G.k("float","",0),"aBoneIndex",new G.k("vec4","",0),"aBoneWeight",new G.k("vec4","",0),"aTangent",new G.k("vec3","vertex tangents",0),"aBitangent",new G.k("vec3","vertex btangents",0),"iaRotation",new G.k("vec4","",0),"iaTranslation",new G.k("vec3","",0),"iaScale",new G.k("vec3","",0),"vColor",new G.k("vec3","per vertex color",0),"vTexUV",new G.k("vec2","",0),"vLightWeighting",new G.k("vec3","",0),"vNormal",new G.k("vec3","",0),"vPosition",new G.k("vec3","vertex coordinates",0),"vPositionFromLight",new G.k("vec4","delta from light",0),"vCenter",new G.k("vec4","for wireframe",0),"vDepth",new G.k("float","depth for shadowmaps",0),"uTransformationMatrix",new G.k("mat4","",0),"uModelMatrix",new G.k("mat4","",0),"uNormalMatrix",new G.k("mat3","",0),"uConvolutionMatrix",new G.k("mat3","",0),"uPerspectiveViewMatrix",new G.k("mat4","",0),"uLightPerspectiveViewMatrix",new G.k("mat4","",0),"uShadowMap",new G.k("sampler2DShadow","",0),"uTexture",new G.k("sampler2D","",0),"uTexture2",new G.k("sampler2D","",0),"uTexture3",new G.k("sampler2D","",0),"uTexture4",new G.k("sampler2D","",0),"uSpecularMap",new G.k("sampler2D","",0),"uNormalMap",new G.k("sampler2D","",0),"uBumpMap",new G.k("sampler2D","",0),"uDepthMap",new G.k("sampler2D","",0),"uCubeTexture",new G.k("samplerCube","",0),"uAnimationTable",new G.k("sampler2D","",0),"uTime",new G.k("float","time since program start in sec",0),"uCameraNear",new G.k("float","",0),"uCameraFar",new G.k("float","",0),"uFogNear",new G.k("float","",0),"uFogFar",new G.k("float","",0),"uPointSize",new G.k("float","",0),"uScale",new G.k("float","",0),"uAngle",new G.k("float","",0),"uCanvasSize",new G.k("vec2","",0),"uCenter2",new G.k("vec2","",0),"uCutOff",new G.k("float","",0),"uShininess",new G.k("float","",0),"uShadowBias",new G.k("float","",0),"uOpacity",new G.k("float","",0),"uColor",new G.k("vec3","",0),"uAmbientDiffuse",new G.k("vec3","",0),"uColorEmissive",new G.k("vec3","",0),"uColorSpecular",new G.k("vec3","",0),"uColorDiffuse",new G.k("vec3","",0),"uColorAlpha",new G.k("vec4","",0),"uColorAlpha2",new G.k("vec4","",0),"uEyePosition",new G.k("vec3","",0),"uMaterial",new G.k("mat4","",0),"uRange",new G.k("vec2","",0),"uDirection",new G.k("vec2","",0),"uBoneMatrices",new G.k("mat4","",128),"uLightDescs",new G.k("mat4","",4),"uLightCount",new G.k("float","",0),"uLightTypes",new G.k("float","",4),"uBumpScale",new G.k("float","for bump maps",0),"uNormalScale",new G.k("float","for normal maps",0)])})
lazy($,"jW","$get$jW",function(){return T.G(0.8,0.8,0.8)})
lazy($,"jU","$get$jU",function(){return T.G(0,0,1)})
lazy($,"jY","$get$jY",function(){return T.G(1,0,0)})
lazy($,"jX","$get$jX",function(){return T.G(0,1,0)})
lazy($,"jV","$get$jV",function(){return T.G(0,1,1)})
lazy($,"l6","$get$l6",function(){var t=new G.dj("SolidColor",null,[],[],[],[],0,P.O())
t.cZ(["aPosition"])
t.bq(["uPerspectiveViewMatrix","uModelMatrix"])
t.bu(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"l5","$get$l5",function(){var t=new G.dj("SolidColorF",null,[],[],[],[],0,P.O())
t.bq(["uColor"])
t.bu(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"kF","$get$kF",function(){return[T.G(0,0,1),T.G(0,0,-1),T.G(0,1,0),T.G(0,-1,0),T.G(1,0,0),T.G(-1,0,0)]})
lazy($,"k9","$get$k9",function(){return[new G.z(0,11,5),new G.z(0,5,1),new G.z(0,1,7),new G.z(0,7,10),new G.z(0,10,11),new G.z(1,5,9),new G.z(5,11,4),new G.z(11,10,2),new G.z(10,7,6),new G.z(7,1,8),new G.z(3,9,4),new G.z(3,4,2),new G.z(3,2,6),new G.z(3,6,8),new G.z(3,8,9),new G.z(4,9,5),new G.z(2,4,11),new G.z(6,2,10),new G.z(8,6,7),new G.z(9,8,1)]})
lazy($,"l8","$get$l8",function(){return(1+P.nn(5))/2})
lazy($,"ka","$get$ka",function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=$.$get$l8()
s=T.G(-1,t,0)
s.C(0)
r=T.G(1,t,0)
r.C(0)
q=T.G(-1,-t,0)
q.C(0)
p=T.G(1,-t,0)
p.C(0)
o=T.G(0,-1,t)
o.C(0)
n=T.G(0,1,t)
n.C(0)
m=T.G(0,-1,-t)
m.C(0)
l=T.G(0,1,-t)
l.C(0)
k=T.G(t,0,-1)
k.C(0)
j=T.G(t,0,1)
j.C(0)
i=T.G(-t,0,-1)
i.C(0)
t=T.G(-t,0,1)
t.C(0)
return[s,r,q,p,o,n,m,l,k,j,i,t]})
lazy($,"iN","$get$iN",function(){return T.kD()})
lazy($,"jw","$get$jw",function(){return T.kD()})})()
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
mangledGlobalNames:{o:"int",P:"double",W:"num",v:"String",ay:"bool",aW:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.u},{func:1,ret:P.ay,args:[W.a3,P.v,P.v,W.bT]},{func:1,v:true,args:[P.q],opt:[P.bM]},{func:1,ret:P.o,args:[P.L,P.L]},{func:1,ret:P.v,args:[W.j]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bD,ArrayBufferView:H.be,DataView:H.f_,Float32Array:H.d5,Float64Array:H.f0,Int16Array:H.f1,Int32Array:H.f2,Int8Array:H.f3,Uint16Array:H.f4,Uint32Array:H.f5,Uint8ClampedArray:H.d9,CanvasPixelArray:H.d9,Uint8Array:H.f6,HTMLAudioElement:W.m,HTMLBRElement:W.m,HTMLBaseElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLImageElement:W.m,HTMLKeygenElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMediaElement:W.m,HTMLMenuElement:W.m,HTMLMenuItemElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableCellElement:W.m,HTMLTableDataCellElement:W.m,HTMLTableHeaderCellElement:W.m,HTMLTableColElement:W.m,HTMLTextAreaElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLVideoElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,HTMLAnchorElement:W.dL,HTMLAreaElement:W.dM,AudioTrack:W.a1,AudioTrackList:W.dP,Blob:W.c6,HTMLBodyElement:W.aN,HTMLCanvasElement:W.c7,CanvasRenderingContext2D:W.dR,CDATASection:W.aO,CharacterData:W.aO,Comment:W.aO,ProcessingInstruction:W.aO,Text:W.aO,CompositorWorker:W.dU,CSSCharsetRule:W.A,CSSFontFaceRule:W.A,CSSGroupingRule:W.A,CSSImportRule:W.A,CSSKeyframeRule:W.A,MozCSSKeyframeRule:W.A,WebKitCSSKeyframeRule:W.A,CSSKeyframesRule:W.A,MozCSSKeyframesRule:W.A,WebKitCSSKeyframesRule:W.A,CSSMediaRule:W.A,CSSNamespaceRule:W.A,CSSPageRule:W.A,CSSRule:W.A,CSSStyleRule:W.A,CSSSupportsRule:W.A,CSSViewportRule:W.A,CSSStyleDeclaration:W.b9,MSStyleCSSProperties:W.b9,CSS2Properties:W.b9,DataTransferItemList:W.dX,DeviceAcceleration:W.dY,HTMLDivElement:W.c9,XMLDocument:W.bq,Document:W.bq,DocumentFragment:W.ca,ShadowRoot:W.ca,DOMException:W.dZ,DOMImplementation:W.cb,DOMPoint:W.e_,DOMPointReadOnly:W.cc,DOMRectReadOnly:W.cd,DOMStringList:W.e0,DOMTokenList:W.e1,Element:W.a3,AnimationEvent:W.l,AnimationPlayerEvent:W.l,ApplicationCacheErrorEvent:W.l,AutocompleteErrorEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceLightEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,GamepadEvent:W.l,GeofencingEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RelatedEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCIceCandidateEvent:W.l,RTCPeerConnectionIceEvent:W.l,SecurityPolicyViolationEvent:W.l,ServicePortConnectEvent:W.l,ServiceWorkerMessageEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BatteryManager:W.j,CanvasCaptureMediaStreamTrack:W.j,CrossOriginServiceWorkerClient:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MessagePort:W.j,MIDIAccess:W.j,NetworkInformation:W.j,Notification:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationReceiver:W.j,PresentationRequest:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,ServicePortCollection:W.j,ServiceWorkerContainer:W.j,ServiceWorkerRegistration:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioContext:W.j,webkitAudioContext:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioSourceNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OfflineAudioContext:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.a4,FileList:W.eo,FileWriter:W.ep,HTMLFormElement:W.et,Gamepad:W.a5,HTMLHeadElement:W.ci,History:W.ex,HTMLCollection:W.by,HTMLFormControlsCollection:W.by,HTMLOptionsCollection:W.by,HTMLDocument:W.cj,XMLHttpRequest:W.ey,XMLHttpRequestUpload:W.bz,XMLHttpRequestEventTarget:W.bz,HTMLInputElement:W.eB,KeyboardEvent:W.aT,Location:W.eP,MediaList:W.eV,MIDIOutput:W.eX,MIDIInput:W.bC,MIDIPort:W.bC,MimeType:W.a6,MimeTypeArray:W.eY,PointerEvent:W.Q,MouseEvent:W.Q,DragEvent:W.Q,Navigator:W.f7,Attr:W.u,Node:W.u,NodeIterator:W.da,NodeList:W.bI,RadioNodeList:W.bI,Path2D:W.fh,Perspective:W.fk,Plugin:W.a7,PluginArray:W.fm,PositionValue:W.fp,PresentationConnection:W.fq,Range:W.dg,Rotation:W.fA,RTCDataChannel:W.di,DataChannel:W.di,HTMLSelectElement:W.fC,SharedWorker:W.fF,SourceBuffer:W.a8,SourceBufferList:W.fG,SpeechGrammar:W.a9,SpeechGrammarList:W.fI,SpeechRecognitionResult:W.aa,Storage:W.fN,CSSStyleSheet:W.Y,StyleSheet:W.Y,CalcLength:W.ak,KeywordValue:W.ak,LengthValue:W.ak,NumberValue:W.ak,SimpleLength:W.ak,TransformValue:W.ak,StyleValue:W.ak,HTMLTableElement:W.dm,HTMLTableRowElement:W.fV,HTMLTableSectionElement:W.fW,HTMLTemplateElement:W.bO,TextTrack:W.ab,TextTrackCue:W.Z,VTTCue:W.Z,TextTrackCueList:W.fZ,TextTrackList:W.h_,TimeRanges:W.h0,Touch:W.ac,TouchEvent:W.aZ,TouchList:W.h4,TrackDefaultList:W.h5,Matrix:W.bg,Skew:W.bg,TransformComponent:W.bg,Translation:W.h7,TreeWalker:W.dr,CompositionEvent:W.aF,FocusEvent:W.aF,TextEvent:W.aF,SVGZoomEvent:W.aF,UIEvent:W.aF,URL:W.hc,VideoTrackList:W.he,VTTRegionList:W.hh,WebSocket:W.hi,WheelEvent:W.b0,Window:W.bQ,DOMWindow:W.bQ,Worker:W.hl,CompositorWorkerGlobalScope:W.b1,DedicatedWorkerGlobalScope:W.b1,ServiceWorkerGlobalScope:W.b1,SharedWorkerGlobalScope:W.b1,WorkerGlobalScope:W.b1,ClientRect:W.ht,ClientRectList:W.dw,DOMRectList:W.dw,CSSRuleList:W.hv,DocumentType:W.hw,DOMRect:W.hx,GamepadList:W.hO,HTMLFrameSetElement:W.hP,NamedNodeMap:W.dz,MozNamedAttrMap:W.dz,ServiceWorker:W.i6,SpeechRecognitionResultList:W.i9,StyleSheetList:W.ia,WorkerLocation:W.ii,WorkerNavigator:W.ij,SVGAElement:P.dK,SVGAnimateElement:P.aM,SVGAnimateMotionElement:P.aM,SVGAnimateTransformElement:P.aM,SVGAnimationElement:P.aM,SVGSetElement:P.aM,SVGFEBlendElement:P.e6,SVGFEColorMatrixElement:P.e7,SVGFEComponentTransferElement:P.e8,SVGFECompositeElement:P.e9,SVGFEConvolveMatrixElement:P.ea,SVGFEDiffuseLightingElement:P.eb,SVGFEDisplacementMapElement:P.ec,SVGFEFloodElement:P.ed,SVGFEGaussianBlurElement:P.ee,SVGFEImageElement:P.ef,SVGFEMergeElement:P.eg,SVGFEMorphologyElement:P.eh,SVGFEOffsetElement:P.ei,SVGFEPointLightElement:P.ej,SVGFESpecularLightingElement:P.ek,SVGFESpotLightElement:P.el,SVGFETileElement:P.em,SVGFETurbulenceElement:P.en,SVGFilterElement:P.eq,SVGForeignObjectElement:P.es,SVGCircleElement:P.ag,SVGEllipseElement:P.ag,SVGLineElement:P.ag,SVGPathElement:P.ag,SVGPolygonElement:P.ag,SVGPolylineElement:P.ag,SVGGeometryElement:P.ag,SVGClipPathElement:P.aB,SVGDefsElement:P.aB,SVGGElement:P.aB,SVGSwitchElement:P.aB,SVGGraphicsElement:P.aB,SVGImageElement:P.ez,SVGLength:P.as,SVGLengthList:P.eK,SVGMarkerElement:P.eS,SVGMaskElement:P.eT,SVGNumber:P.at,SVGNumberList:P.fa,SVGPatternElement:P.fi,SVGPoint:P.fn,SVGPointList:P.fo,SVGRect:P.ft,SVGRectElement:P.fu,SVGScriptElement:P.bL,SVGStringList:P.fS,SVGDescElement:P.K,SVGDiscardElement:P.K,SVGFEDistantLightElement:P.K,SVGFEFuncAElement:P.K,SVGFEFuncBElement:P.K,SVGFEFuncGElement:P.K,SVGFEFuncRElement:P.K,SVGFEMergeNodeElement:P.K,SVGMetadataElement:P.K,SVGStopElement:P.K,SVGStyleElement:P.K,SVGTitleElement:P.K,SVGComponentTransferFunctionElement:P.K,SVGElement:P.K,SVGSVGElement:P.fT,SVGSymbolElement:P.fU,SVGTextContentElement:P.dn,SVGTextPathElement:P.fY,SVGTSpanElement:P.bP,SVGTextElement:P.bP,SVGTextPositioningElement:P.bP,SVGTransform:P.au,SVGTransformList:P.h6,SVGUseElement:P.hd,SVGViewElement:P.hf,SVGViewSpec:P.hg,SVGLinearGradientElement:P.bS,SVGRadialGradientElement:P.bS,SVGGradientElement:P.bS,SVGCursorElement:P.i2,SVGFEDropShadowElement:P.i3,SVGMPathElement:P.i4,AudioBuffer:P.dO,WebGLRenderingContext:P.fy,WebGL2RenderingContext:P.fz,WebGL2RenderingContextBase:P.ih,SQLResultSetRowList:P.fJ})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.d6.$nativeSuperclassTag="ArrayBufferView"
H.bF.$nativeSuperclassTag="ArrayBufferView"
H.bG.$nativeSuperclassTag="ArrayBufferView"
H.d7.$nativeSuperclassTag="ArrayBufferView"
H.bE.$nativeSuperclassTag="ArrayBufferView"
H.bH.$nativeSuperclassTag="ArrayBufferView"
H.d8.$nativeSuperclassTag="ArrayBufferView"
W.bs.$nativeSuperclassTag="EventTarget"
W.bx.$nativeSuperclassTag="EventTarget"
W.bt.$nativeSuperclassTag="EventTarget"
W.bw.$nativeSuperclassTag="EventTarget"
W.bu.$nativeSuperclassTag="EventTarget"
W.bv.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.l7(K.l2(),b)},[])
else (function(b){H.l7(K.l2(),b)})([])})})()