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
a[c]=function(){a[c]=function(){H.no(b)}
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
return d?function(e){if(t===null)t=H.jo(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jo(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jo(this,a,b,true,[],d).prototype
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
eF:function(){return new P.aE("No element")},
mc:function(){return new P.aE("Too many elements")},
mb:function(){return new P.aE("Too few elements")},
dk:function(a,b,c,d){if(c-b<=32)H.mt(a,b,c,d)
else H.ms(a,b,c,d)},
mt:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.ae(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.ap(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.j(a,q,s.h(a,p))
q=p}s.j(a,q,r)}},
ms:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
bC:function bC(a,b,c){this.a=a
this.b=b
this.$ti=c},
du:function du(a,b,c){this.a=a
this.b=b
this.$ti=c},
hk:function hk(a,b,c){this.a=a
this.b=b
this.$ti=c},
cg:function cg(){},
dC:function(a,b){var t=a.ak(b)
if(!u.globalState.d.cy)u.globalState.f.aq()
return t},
iK:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
l3:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.w(s).$isb)throw H.e(P.jJ("Arguments to main must be a List: "+H.i(s)))
u.globalState=new H.hX(0,0,1,null,null,null,null,null,null,null,null,null,a)
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
s.f=new H.hA(P.je(null,H.b5),0)
r=P.o
s.sev(new H.ah(0,null,null,null,null,null,0,[r,H.b4]))
s.sey(new H.ah(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.hW()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.m6,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.mJ)}if(u.globalState.x)return
s=u.globalState.a++
q=P.ai(null,null,null,r)
p=new H.bf(0,null,!1)
o=new H.b4(s,new H.ah(0,null,null,null,null,null,0,[r,H.bf]),q,u.createNewIsolate(),p,new H.ar(H.iP()),new H.ar(H.iP()),!1,!1,[],P.ai(null,null,null,null),null,null,!1,!0,P.ai(null,null,null,null))
q.i(0,0)
o.by(0,p)
u.globalState.e=o
u.globalState.z.j(0,s,o)
u.globalState.d=o
if(H.bk(a,{func:1,args:[,]}))o.ak(new H.iV(t,a))
else if(H.bk(a,{func:1,args:[,,]}))o.ak(new H.iW(t,a))
else o.ak(a)
u.globalState.f.aq()},
mJ:function(a){var t=P.aV(["command","print","msg",a])
return new H.am(!0,P.bW(null,P.o)).N(t)},
m8:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.m9()
return},
m9:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.v("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.v('Cannot extract URI from "'+t+'"'))},
m6:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b3(!0,[]).a_(b.data)
s=J.ae(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.na(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b3(!0,[]).a_(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b3(!0,[]).a_(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.o
j=P.ai(null,null,null,k)
i=new H.bf(0,null,!1)
h=new H.b4(s,new H.ah(0,null,null,null,null,null,0,[k,H.bf]),j,u.createNewIsolate(),i,new H.ar(H.iP()),new H.ar(H.iP()),!1,!1,[],P.ai(null,null,null,null),null,null,!1,!0,P.ai(null,null,null,null))
j.i(0,0)
h.by(0,i)
u.globalState.f.a.X(0,new H.b5(h,new H.eC(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.aq()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lC(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.aq()
break
case"close":u.globalState.ch.ap(0,$.$get$kb().h(0,a))
a.terminate()
u.globalState.f.aq()
break
case"log":H.m5(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aV(["command","print","msg",t])
k=new H.am(!0,P.bW(null,P.o)).N(k)
s.toString
self.postMessage(k)}else P.ao(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
m5:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aV(["command","log","msg",a])
r=new H.am(!0,P.bW(null,P.o)).N(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.S(q)
t=H.aJ(q)
s=P.cf(t)
throw H.e(s)}},
m7:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kg=$.kg+("_"+s)
$.kh=$.kh+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.K(0,["spawned",new H.bh(s,r),q,t.r])
r=new H.eD(a,b,c,d,t)
if(e){t.bR(q,q)
u.globalState.f.a.X(0,new H.b5(t,r,"start isolate"))}else r.$0()},
mv:function(a,b){var t=new H.h2(!0,!1,null)
t.dg(a,b)
return t},
mK:function(a){return new H.b3(!0,[]).a_(new H.am(!1,P.bW(null,P.o)).N(a))},
iV:function iV(a,b){this.a=a
this.b=b},
iW:function iW(a,b){this.a=a
this.b=b},
hX:function hX(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
hS:function hS(a,b){this.a=a
this.b=b},
hA:function hA(a,b){this.a=a
this.b=b},
hB:function hB(a){this.a=a},
b5:function b5(a,b,c){this.a=a
this.b=b
this.c=c},
hW:function hW(){},
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
ht:function ht(){},
bh:function bh(a,b){this.b=a
this.a=b},
hY:function hY(a,b){this.a=a
this.b=b},
bY:function bY(a,b,c){this.b=a
this.c=b
this.a=c},
bf:function bf(a,b,c){this.a=a
this.b=b
this.c=c},
h2:function h2(a,b,c){this.a=a
this.b=b
this.c=c},
h3:function h3(a,b){this.a=a
this.b=b},
h4:function h4(a,b){this.a=a
this.b=b},
ar:function ar(a){this.a=a},
am:function am(a,b){this.a=a
this.b=b},
b3:function b3(a,b){this.a=a
this.b=b},
n3:function(a){return u.types[a]},
nc:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.w(a).$isq},
i:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aA(a)
if(typeof t!=="string")throw H.e(H.V(a))
return t},
mp:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fv(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aY:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
df:function(a){var t,s,r,q,p,o,n,m
t=J.w(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.K||!!J.w(a).$isb0){p=C.y(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aO(q,0)===36)q=C.i.cT(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dE(H.iy(a),0,null),u.mangledGlobalNames)},
fr:function(a){return"Instance of '"+H.df(a)+"'"},
T:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mn:function(a){return a.b?H.T(a).getUTCFullYear()+0:H.T(a).getFullYear()+0},
ml:function(a){return a.b?H.T(a).getUTCMonth()+1:H.T(a).getMonth()+1},
mh:function(a){return a.b?H.T(a).getUTCDate()+0:H.T(a).getDate()+0},
mi:function(a){return a.b?H.T(a).getUTCHours()+0:H.T(a).getHours()+0},
mk:function(a){return a.b?H.T(a).getUTCMinutes()+0:H.T(a).getMinutes()+0},
mm:function(a){return a.b?H.T(a).getUTCSeconds()+0:H.T(a).getSeconds()+0},
mj:function(a){return a.b?H.T(a).getUTCMilliseconds()+0:H.T(a).getMilliseconds()+0},
kf:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.V(a))
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
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.l5})
t.name=""}else t.toString=H.l5
return t},
l5:function(){return J.aA(this.dartException)},
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
return new H.h9(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
ha:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kt:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
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
if((C.b.aX(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jc(H.i(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.i(s)+" (Error "+q+")"
return t.$1(new H.dd(p,null))}}if(a instanceof TypeError){o=$.$get$kn()
n=$.$get$ko()
m=$.$get$kp()
l=$.$get$kq()
k=$.$get$ku()
j=$.$get$kv()
i=$.$get$ks()
$.$get$kr()
h=$.$get$kx()
g=$.$get$kw()
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
if(p)return t.$1(new H.dd(s,f==null?null:f.method))}}return t.$1(new H.hc(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dl()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.af(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dl()
return a},
aJ:function(a){var t
if(a==null)return new H.dA(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dA(a,null)},
ng:function(a){if(a==null||typeof a!='object')return J.aq(a)
else return H.aY(a)},
n1:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.j(0,p,a[q])}return b},
nb:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dC(b,new H.iF(a))
case 1:return H.dC(b,new H.iG(a,d))
case 2:return H.dC(b,new H.iH(a,d,e))
case 3:return H.dC(b,new H.iI(a,d,e,f))
case 4:return H.dC(b,new H.iJ(a,d,e,f,g))}throw H.e(P.cf("Unsupported number of arguments for wrapped closure"))},
c1:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.nb)
a.$identity=t
return t},
lR:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.w(c).$isb){t.$reflectionInfo=c
r=H.mp(t).r}else r=c
q=d?Object.create(new H.fL().constructor.prototype):Object.create(new H.bo(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.jR(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.n3,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jO:H.j5
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.jR(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
lO:function(a,b,c,d){var t=H.j5
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
jR:function(a,b,c){var t,s,r,q
if(c)return H.lQ(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.lO(s,b==null?r!=null:b!==r,t,b)
return q},
lP:function(a,b,c,d){var t,s
t=H.j5
s=H.jO
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
lQ:function(a,b){var t,s,r,q
H.lN()
t=$.jN
if(t==null){t=H.jM("receiver")
$.jN=t}s=b.$stubName
r=b.length
q=a[s]
t=H.lP(r,b==null?q!=null:b!==q,s,b)
return t},
jo:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.w(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.lR(a,b,t,!!d,e,f)},
j5:function(a){return a.a},
jO:function(a){return a.c},
lN:function(){var t=$.jP
if(t==null){t=H.jM("self")
$.jP=t}return t},
jM:function(a){var t,s,r,q,p
t=new H.bo("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
nC:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aw(a,"String"))},
ad:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aw(a,"double"))},
nB:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aw(a,"num"))},
mW:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aw(a,"bool"))},
na:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aw(a,"int"))},
ni:function(a,b){throw H.e(H.aw(a,b.substring(3)))},
nh:function(a,b){var t=J.ae(b)
throw H.e(H.jQ(H.df(a),t.bn(b,3,t.gk(b))))},
jr:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.w(a)[b])return a
H.ni(a,b)},
aL:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.w(a)[b]
else t=!0
if(t)return a
H.nh(a,b)},
nA:function(a){if(a==null)return a
if(!!J.w(a).$isb)return a
throw H.e(H.aw(a,"List"))},
kR:function(a){var t=J.w(a)
return"$S" in t?t.$S():null},
bk:function(a,b){var t
if(a==null)return!1
t=H.kR(a)
return t==null?!1:H.kX(t,b)},
ny:function(a,b){var t,s
if(a==null)return a
if($.jl)return a
$.jl=!0
try{if(H.bk(a,b))return a
t=H.aM(b,null)
s=H.aw(a,t)
throw H.e(s)}finally{$.jl=!1}},
aw:function(a,b){return new H.hb("type '"+H.df(a)+"' is not a subtype of type '"+b+"'")},
jQ:function(a,b){return new H.dS("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
ay:function(a){if(!0===a)return!1
if(!!J.w(a).$isj8)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.aw(a,"bool"))},
aI:function(a){throw H.e(new H.hn(a))},
d:function(a){if(H.ay(a))throw H.e(new P.c6(null))},
no:function(a){throw H.e(new P.dW(a))},
iP:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
kV:function(a){return u.getIsolateTag(a)},
N:function(a){return new H.aF(a,null)},
G:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iy:function(a){if(a==null)return
return a.$ti},
kW:function(a,b){return H.jv(a["$as"+H.i(b)],H.iy(a))},
an:function(a,b,c){var t,s
t=H.kW(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aK:function(a,b){var t,s
t=H.iy(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aM:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dE(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.i(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aM(t,b)
return H.mL(a,b)}return"unknown-reified-type"},
mL:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aM(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aM(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aM(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.n0(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aM(l[j],b)+(" "+H.i(j))}q+="}"}return"("+q+") => "+t},
dE:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bO("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aM(o,c)}return p?"":"<"+s.l(0)+">"},
iz:function(a){var t,s
if(a instanceof H.b8){t=H.kR(a)
if(t!=null)return H.aM(t,null)}s=J.w(a).constructor.name
if(a==null)return s
return s+H.dE(a.$ti,0,null)},
jv:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.js(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.js(a,null,b)
return b},
ir:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iy(a)
s=J.w(a)
if(s[b]==null)return!1
return H.kO(H.jv(s[d],t),c)},
dF:function(a,b,c,d){if(a==null)return a
if(H.ir(a,b,c,d))return a
throw H.e(H.jQ(H.df(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dE(c,0,null),u.mangledGlobalNames)))},
nv:function(a,b,c,d){if(a==null)return a
if(H.ir(a,b,c,d))return a
throw H.e(H.aw(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dE(c,0,null),u.mangledGlobalNames)))},
kO:function(a,b){var t,s,r,q,p
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
nw:function(a,b,c){return H.js(a,b,H.kW(b,c))},
a0:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aX")return!0
if('func' in b)return H.kX(a,b)
if('func' in a)return b.name==="j8"||b.name==="p"
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
return H.kO(H.jv(o,t),r)},
kN:function(a,b,c){var t,s,r,q,p,o,n
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
mS:function(a,b){var t,s,r,q,p,o
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
kX:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
if(n===m){if(!H.kN(r,q,!1))return!1
if(!H.kN(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
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
if(!(H.a0(g,f)||H.a0(f,g)))return!1}}return H.mS(a.named,b.named)},
js:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nD:function(a){var t=$.jp
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nz:function(a){return H.aY(a)},
nx:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nd:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.p))
t=$.jp.$1(a)
s=$.iw[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iE[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kM.$2(a,t)
if(t!=null){s=$.iw[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iE[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.jt(r)
$.iw[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iE[t]=r
return r}if(p==="-"){o=H.jt(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.l_(a,r)
if(p==="*")throw H.e(new P.dt(t))
if(u.leafTags[t]===true){o=H.jt(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.l_(a,r)},
l_:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.iN(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
jt:function(a){return J.iN(a,!1,null,!!a.$isq)},
nf:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.iN(t,!1,null,!!t.$isq)
else return J.iN(t,c,null,null)},
n8:function(){if(!0===$.jq)return
$.jq=!0
H.n9()},
n9:function(){var t,s,r,q,p,o,n,m
$.iw=Object.create(null)
$.iE=Object.create(null)
H.n7()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.l0.$1(p)
if(o!=null){n=H.nf(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
n7:function(){var t,s,r,q,p,o,n
t=C.O()
t=H.bj(C.L,H.bj(C.Q,H.bj(C.x,H.bj(C.x,H.bj(C.P,H.bj(C.M,H.bj(C.N(C.y),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jp=new H.iB(p)
$.kM=new H.iC(o)
$.l0=new H.iD(n)},
bj:function(a,b){return a(b)||b},
nn:function(a,b,c){var t=a.indexOf(b,c)
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
dd:function dd(a,b){this.a=a
this.b=b},
eJ:function eJ(a,b,c){this.a=a
this.b=b
this.c=c},
hc:function hc(a){this.a=a},
iX:function iX(a){this.a=a},
dA:function dA(a,b){this.a=a
this.b=b},
iF:function iF(a){this.a=a},
iG:function iG(a,b){this.a=a
this.b=b},
iH:function iH(a,b,c){this.a=a
this.b=b
this.c=c},
iI:function iI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iJ:function iJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
b8:function b8(){},
fY:function fY(){},
fL:function fL(){},
bo:function bo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hb:function hb(a){this.a=a},
dS:function dS(a){this.a=a},
fB:function fB(a){this.a=a},
hn:function hn(a){this.a=a},
aF:function aF(a,b){this.a=a
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
iB:function iB(a){this.a=a},
iC:function iC(a){this.a=a},
iD:function iD(a){this.a=a},
f:function(a){return a},
im:function(a){var t,s,r
if(!!J.w(a).$isn)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bE:function bE(){},
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
bF:function bF(){},
bG:function bG(){},
bH:function bH(){},
bI:function bI(){},
n0:function(a){var t=H.G(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
iO:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
w:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d0.prototype
return J.d_.prototype}if(typeof a=="string")return J.aS.prototype
if(a==null)return J.eH.prototype
if(typeof a=="boolean")return J.eG.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.p)return a
return J.ix(a)},
iN:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ix:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jq==null){H.n8()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.dt("Return interceptor for "+H.i(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jb()]
if(p!=null)return p
p=H.nd(a)
if(p!=null)return p
if(typeof a=="function")return C.R
s=Object.getPrototypeOf(a)
if(s==null)return C.A
if(s===Object.prototype)return C.A
if(typeof q=="function"){Object.defineProperty(q,$.$get$jb(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
ae:function(a){if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.p)return a
return J.ix(a)},
c3:function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.p)return a
return J.ix(a)},
kT:function(a){if(typeof a=="number")return J.bc.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.b0.prototype
return a},
n2:function(a){if(typeof a=="number")return J.bc.prototype
if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.b0.prototype
return a},
kU:function(a){if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.b0.prototype
return a},
m:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.p)return a
return J.ix(a)},
J:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.w(a).A(a,b)},
ap:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kT(a).as(a,b)},
l6:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kT(a).aH(a,b)},
bl:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nc(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ae(a).h(a,b)},
l7:function(a,b,c,d){return J.m(a).dt(a,b,c,d)},
jw:function(a,b){return J.kU(a).aO(a,b)},
bm:function(a,b){return J.m(a).dK(a,b)},
l8:function(a,b,c){return J.m(a).dL(a,b,c)},
jx:function(a,b){return J.m(a).bQ(a,b)},
iY:function(a,b){return J.m(a).U(a,b)},
jy:function(a,b,c){return J.m(a).bT(a,b,c)},
l9:function(a,b){return J.m(a).dY(a,b)},
dG:function(a,b,c){return J.m(a).bU(a,b,c)},
la:function(a,b,c){return J.m(a).bV(a,b,c)},
jz:function(a,b,c){return J.m(a).bW(a,b,c)},
dH:function(a,b){return J.m(a).e0(a,b)},
lb:function(a,b){return J.m(a).bX(a,b)},
lc:function(a,b,c){return J.m(a).bY(a,b,c)},
jA:function(a,b,c,d){return J.m(a).bZ(a,b,c,d)},
ld:function(a,b){return J.c3(a).c_(a,b)},
le:function(a,b,c,d,e){return J.m(a).c0(a,b,c,d,e)},
lf:function(a,b){return J.n2(a).V(a,b)},
iZ:function(a,b,c){return J.ae(a).e4(a,b,c)},
j_:function(a){return J.m(a).c2(a)},
lg:function(a){return J.m(a).c3(a)},
lh:function(a){return J.m(a).ea(a)},
li:function(a,b){return J.m(a).c6(a,b)},
j0:function(a,b){return J.m(a).c7(a,b)},
lj:function(a,b,c,d){return J.m(a).c8(a,b,c,d)},
lk:function(a,b,c,d,e){return J.m(a).eh(a,b,c,d,e)},
ll:function(a,b,c,d,e){return J.m(a).c9(a,b,c,d,e)},
lm:function(a,b,c,d,e,f){return J.m(a).ei(a,b,c,d,e,f)},
ln:function(a,b){return J.c3(a).u(a,b)},
dI:function(a,b){return J.m(a).ca(a,b)},
lo:function(a,b){return J.m(a).cb(a,b)},
lp:function(a){return J.m(a).ej(a)},
lq:function(a,b){return J.c3(a).aA(a,b)},
lr:function(a){return J.m(a).gdX(a)},
aq:function(a){return J.w(a).gw(a)},
bn:function(a){return J.c3(a).gB(a)},
dJ:function(a){return J.ae(a).gk(a)},
ls:function(a){return J.m(a).gb5(a)},
lt:function(a){return J.w(a).gD(a)},
lu:function(a){return J.m(a).geI(a)},
lv:function(a){return J.m(a).gaE(a)},
j1:function(a){return J.m(a).gm(a)},
j2:function(a){return J.m(a).gn(a)},
jB:function(a){return J.m(a).gO(a)},
j3:function(a,b){return J.m(a).ab(a,b)},
lw:function(a){return J.m(a).aG(a)},
lx:function(a,b){return J.m(a).ba(a,b)},
ly:function(a,b,c){return J.m(a).bb(a,b,c)},
jC:function(a,b,c){return J.m(a).be(a,b,c)},
lz:function(a,b){return J.m(a).cd(a,b)},
lA:function(a,b){return J.c3(a).cf(a,b)},
lB:function(a){return J.c3(a).eC(a)},
lC:function(a,b){return J.m(a).K(a,b)},
lD:function(a,b,c,d){return J.m(a).bm(a,b,c,d)},
lE:function(a){return J.kU(a).eL(a)},
aA:function(a){return J.w(a).l(a)},
lF:function(a,b,c,d){return J.m(a).eN(a,b,c,d)},
lG:function(a,b,c){return J.m(a).cm(a,b,c)},
lH:function(a,b,c){return J.m(a).cn(a,b,c)},
j4:function(a,b,c){return J.m(a).co(a,b,c)},
lI:function(a,b,c){return J.m(a).cp(a,b,c)},
jD:function(a,b,c){return J.m(a).cq(a,b,c)},
jE:function(a,b,c){return J.m(a).cr(a,b,c)},
jF:function(a,b,c){return J.m(a).cs(a,b,c)},
jG:function(a,b,c,d){return J.m(a).ct(a,b,c,d)},
jH:function(a,b,c,d){return J.m(a).cu(a,b,c,d)},
lJ:function(a,b){return J.m(a).cw(a,b)},
lK:function(a,b,c){return J.m(a).eO(a,b,c)},
jI:function(a,b,c,d,e,f,g){return J.m(a).cA(a,b,c,d,e,f,g)},
lL:function(a,b,c,d,e){return J.m(a).cB(a,b,c,d,e)},
a:function a(){},
eG:function eG(){},
eH:function eH(){},
bB:function bB(){},
fl:function fl(){},
b0:function b0(){},
aT:function aT(){},
aR:function aR(a){this.$ti=a},
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
aS:function aS(){}},P={
mz:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.mT()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.c1(new P.hp(t),1)).observe(s,{childList:true})
return new P.ho(t,s,r)}else if(self.setImmediate!=null)return P.mU()
return P.mV()},
mA:function(a){++u.globalState.f.b
self.scheduleImmediate(H.c1(new P.hq(a),0))},
mB:function(a){++u.globalState.f.b
self.setImmediate(H.c1(new P.hr(a),0))},
mC:function(a){P.jg(C.v,a)},
mO:function(a,b){if(H.bk(a,{func:1,args:[P.aX,P.aX]})){b.toString
return a}else{b.toString
return a}},
mE:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.ax))
H.d(b.a===0)
b.a=1
try{a.cl(new P.hH(b),new P.hI(b))}catch(r){t=H.S(r)
s=H.aJ(r)
P.nj(new P.hJ(b,t,s))}},
kD:function(a,b){var t,s,r,q
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
P.bS(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bJ(q)}},
bS:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.io(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bS(t.a,b)}s=t.a
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
P.io(null,null,p,o,s)
return}s=$.D
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.D
H.d(l==null?s!=null:l!==s)
j=$.D
$.D=l
i=j}else i=null
s=b.c
if(s===8)new P.hN(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.hM(r,b,m).$0()}else if((s&2)!==0)new P.hL(t,r,b).$0()
if(i!=null){H.d(!0)
$.D=i}s=r.b
if(!!J.w(s).$isev){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.ai(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.kD(s,o)
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
mN:function(){var t,s
for(;t=$.bi,t!=null;){$.c_=null
s=t.b
$.bi=s
if(s==null)$.bZ=null
t.a.$0()}},
mR:function(){$.jm=!0
try{P.mN()}finally{$.c_=null
$.jm=!1
if($.bi!=null)$.$get$ji().$1(P.kP())}},
kK:function(a){var t=new P.dv(a,null)
if($.bi==null){$.bZ=t
$.bi=t
if(!$.jm)$.$get$ji().$1(P.kP())}else{$.bZ.b=t
$.bZ=t}},
mQ:function(a){var t,s,r
t=$.bi
if(t==null){P.kK(a)
$.c_=$.bZ
return}s=new P.dv(a,null)
r=$.c_
if(r==null){s.b=t
$.c_=s
$.bi=s}else{s.b=r.b
r.b=s
$.c_=s
if(s.b==null)$.bZ=s}},
nj:function(a){var t=$.D
if(C.f===t){P.iq(null,null,C.f,a)
return}t.toString
P.iq(null,null,t,t.b_(a))},
mw:function(a,b){var t=$.D
if(t===C.f){t.toString
return P.jg(a,b)}return P.jg(a,t.b_(b))},
jg:function(a,b){var t=C.b.H(a.a,1000)
return H.mv(t<0?0:t,b)},
jh:function(a){var t,s
H.d(a!=null)
t=$.D
H.d(a==null?t!=null:a!==t)
s=$.D
$.D=a
return s},
io:function(a,b,c,d,e){var t={}
t.a=d
P.mQ(new P.ip(t,e))},
kI:function(a,b,c,d){var t,s
if($.D===c)return d.$0()
t=P.jh(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.D=s}},
kJ:function(a,b,c,d,e){var t,s
if($.D===c)return d.$1(e)
t=P.jh(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.D=s}},
mP:function(a,b,c,d,e,f){var t,s
if($.D===c)return d.$2(e,f)
t=P.jh(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.D=s}},
iq:function(a,b,c,d){var t=C.f!==c
if(t)d=!(!t||!1)?c.b_(d):c.dZ(d)
P.kK(d)},
hp:function hp(a){this.a=a},
ho:function ho(a,b,c){this.a=a
this.b=b
this.c=c},
hq:function hq(a){this.a=a},
hr:function hr(a){this.a=a},
hv:function hv(){},
id:function id(a,b){this.a=a
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
fP:function fP(){},
fR:function fR(a){this.a=a},
fS:function fS(a,b){this.a=a
this.b=b},
fQ:function fQ(){},
b7:function b7(a,b){this.a=a
this.b=b},
il:function il(){},
ip:function ip(a,b){this.a=a
this.b=b},
i_:function i_(){},
i1:function i1(a,b){this.a=a
this.b=b},
i0:function i0(a,b){this.a=a
this.b=b},
i2:function i2(a,b){this.a=a
this.b=b},
kd:function(a,b){return new H.ah(0,null,null,null,null,null,0,[a,b])},
P:function(){return new H.ah(0,null,null,null,null,null,0,[null,null])},
aV:function(a){return H.n1(a,new H.ah(0,null,null,null,null,null,0,[null,null]))},
bW:function(a,b){return new P.dy(0,null,null,null,null,null,0,[a,b])},
mI:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
ma:function(a,b,c){var t,s
if(P.jn(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$c0()
C.a.i(s,a)
try{P.mM(a,t)}finally{H.d(C.a.gaD(s)===a)
s.pop()}s=P.km(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eE:function(a,b,c){var t,s,r
if(P.jn(a))return b+"..."+c
t=new P.bO(b)
s=$.$get$c0()
C.a.i(s,a)
try{r=t
r.a=P.km(r.ga8(),a,", ")}finally{H.d(C.a.gaD(s)===a)
s.pop()}s=t
s.a=s.ga8()+c
s=t.ga8()
return s.charCodeAt(0)==0?s:s},
jn:function(a){var t,s
for(t=0;s=$.$get$c0(),t<s.length;++t)if(a===s[t])return!0
return!1},
mM:function(a,b){var t,s,r,q,p,o,n,m,l,k
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
ai:function(a,b,c,d){return new P.hT(0,null,null,null,null,null,0,[d])},
jd:function(a,b){var t,s
t=P.ai(null,null,null,b)
for(s=J.bn(a);s.p();)t.i(0,s.gt())
return t},
md:function(a){var t,s,r
t={}
if(P.jn(a))return"{...}"
s=new P.bO("")
try{C.a.i($.$get$c0(),a)
r=s
r.a=r.ga8()+"{"
t.a=!0
a.aA(0,new P.eR(t,s))
t=s
t.a=t.ga8()+"}"}finally{t=$.$get$c0()
H.d(C.a.gaD(t)===a)
t.pop()}t=s.ga8()
return t.charCodeAt(0)==0?t:t},
je:function(a,b){var t=new P.eO(null,0,0,0,[b])
t.d8(a,b)
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
hT:function hT(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hU:function hU(a,b,c){this.a=a
this.b=b
this.c=c},
bV:function bV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hR:function hR(){},
d1:function d1(){},
x:function x(){},
eR:function eR(a,b){this.a=a
this.b=b},
eO:function eO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hV:function hV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fE:function fE(){},
fD:function fD(){},
bK:function bK(){},
km:function(a,b,c){var t=J.bn(b)
if(!t.p())return a
if(c.length===0){do a+=H.i(t.gt())
while(t.p())}else{a+=H.i(t.gt())
for(;t.p();)a=a+c+H.i(t.gt())}return a},
lS:function(a,b){return J.lf(a,b)},
lV:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.i(t)
if(t>=10)return s+"00"+H.i(t)
return s+"000"+H.i(t)},
lW:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c9:function(a){if(a>=10)return""+a
return"0"+a},
j7:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aA(a)
if(typeof a==="string")return JSON.stringify(a)
return P.m_(a)},
m_:function(a){var t=J.w(a)
if(!!t.$isb8)return t.l(a)
return H.fr(a)},
jJ:function(a){return new P.af(!1,null,null,a)},
jK:function(a,b,c){return new P.af(!0,a,b,c)},
lM:function(a){return new P.af(!1,null,a,"Must not be null")},
fs:function(a,b,c){return new P.dh(null,null,!0,a,b,"Value not in range")},
aZ:function(a,b,c,d,e){return new P.dh(b,c,!0,a,d,"Invalid value")},
ki:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.aZ(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.aZ(b,a,c,"end",f))
return b},
C:function(a,b,c,d,e){var t=e!=null?e:J.dJ(b)
return new P.eA(b,t,!0,a,c,"Index out of range")},
cf:function(a){return new P.hF(a)},
ke:function(a,b,c){var t,s
t=H.G([],[c])
for(s=J.bn(a);s.p();)C.a.i(t,s.gt())
if(b)return t
t.fixed$length=Array
return t},
ao:function(a){H.iO(H.i(a))},
az:function az(){},
L:function L(){},
bp:function bp(a,b){this.a=a
this.b=b},
O:function O(){},
aQ:function aQ(a){this.a=a},
e2:function e2(){},
e3:function e3(){},
ba:function ba(){},
c6:function c6(a){this.a=a},
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
v:function v(a){this.a=a},
dt:function dt(a){this.a=a},
aE:function aE(a){this.a=a},
a2:function a2(a){this.a=a},
dl:function dl(){},
dW:function dW(a){this.a=a},
hF:function hF(a){this.a=a},
e5:function e5(a,b,c){this.a=a
this.b=b
this.$ti=c},
o:function o(){},
X:function X(){},
cZ:function cZ(){},
b:function b(){},
aD:function aD(){},
aX:function aX(){},
W:function W(){},
p:function p(){},
bN:function bN(){},
t:function t(){},
bO:function bO(a){this.a=a},
iu:function(a){var t,s,r,q,p
if(a==null)return
t=P.P()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.H)(s),++q){p=s[q]
t.j(0,p,a[p])}return t},
mZ:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.lq(a,new P.it(t))
return t},
k2:function(){var t=$.k1
if(t==null){t=J.iZ(window.navigator.userAgent,"Opera",0)
$.k1=t}return t},
lX:function(){var t,s
t=$.jZ
if(t!=null)return t
s=$.k_
if(s==null){s=J.iZ(window.navigator.userAgent,"Firefox",0)
$.k_=s}if(s)t="-moz-"
else{s=$.k0
if(s==null){s=!P.k2()&&J.iZ(window.navigator.userAgent,"Trident/",0)
$.k0=s}if(s)t="-ms-"
else t=P.k2()?"-o-":"-webkit-"}$.jZ=t
return t},
it:function it(a){this.a=a},
nm:function(a){return Math.sqrt(a)},
hZ:function hZ(){},
M:function M(){},
dK:function dK(){},
aN:function aN(){},
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
aC:function aC(){},
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
bM:function bM(){},
fT:function fT(){},
K:function K(){},
fU:function fU(){},
fV:function fV(){},
dn:function dn(){},
fZ:function fZ(){},
bQ:function bQ(){},
au:function au(){},
h7:function h7(){},
he:function he(){},
hg:function hg(){},
hh:function hh(){},
bT:function bT(){},
i3:function i3(){},
i4:function i4(){},
i5:function i5(){},
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
ii:function ii(){},
fK:function fK(){},
cB:function cB(){},
cO:function cO(){}},W={
lY:function(a,b,c){var t,s
t=document.body
s=(t&&C.n).P(t,a,b,c)
s.toString
t=new H.du(new W.U(s),new W.is(),[W.r])
return t.ga7(t)},
lZ:function(a){return"wheel"},
br:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lu(a)
if(typeof s==="string")t=a.tagName}catch(r){H.S(r)}return t},
mD:function(a,b){return document.createElement(a)},
b6:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kG:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
al:function(a,b,c,d,e){var t=c==null?null:W.kL(new W.hE(c))
t=new W.hD(0,a,b,t,!1,[e])
t.dm(a,b,c,!1,e)
return t},
kE:function(a){var t,s
t=document.createElement("a")
s=new W.i6(t,window.location)
s=new W.bU(s)
s.dn(a)
return s},
mG:function(a,b,c,d){return!0},
mH:function(a,b,c,d){var t,s,r,q,p
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
kH:function(){var t=P.t
t=new W.ie(P.jd(C.q,t),P.ai(null,null,null,t),P.ai(null,null,null,t),P.ai(null,null,null,t),null)
t.dr(null,new H.bC(C.q,new W.ig(),[H.aK(C.q,0),null]),["TEMPLATE"],null)
return t},
kL:function(a){var t=$.D
if(t===C.f)return a
return t.e_(a)},
l:function l(){},
dL:function dL(){},
dM:function dM(){},
a1:function a1(){},
dP:function dP(){},
c7:function c7(){},
aO:function aO(){},
c8:function c8(){},
dR:function dR(){},
aP:function aP(){},
dU:function dU(){},
A:function A(){},
b9:function b9(){},
dV:function dV(){},
dX:function dX(){},
dY:function dY(){},
ca:function ca(){},
bq:function bq(){},
cb:function cb(){},
dZ:function dZ(){},
cc:function cc(){},
e_:function e_(){},
cd:function cd(){},
ce:function ce(){},
e0:function e0(){},
e1:function e1(){},
a3:function a3(){},
is:function is(){},
k:function k(){},
j:function j(){},
a4:function a4(){},
eo:function eo(){},
ep:function ep(){},
et:function et(){},
a5:function a5(){},
ci:function ci(){},
ex:function ex(){},
bz:function bz(){},
cj:function cj(){},
ey:function ey(){},
bA:function bA(){},
eB:function eB(){},
aU:function aU(){},
eP:function eP(){},
eV:function eV(){},
eX:function eX(){},
bD:function bD(){},
a6:function a6(){},
eY:function eY(){},
Q:function Q(){},
f7:function f7(){},
U:function U(a){this.a=a},
r:function r(){},
da:function da(){},
bJ:function bJ(){},
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
fG:function fG(){},
a8:function a8(){},
fH:function fH(){},
a9:function a9(){},
fJ:function fJ(){},
aa:function aa(){},
fO:function fO(){},
Y:function Y(){},
ak:function ak(){},
dm:function dm(){},
fW:function fW(){},
fX:function fX(){},
bP:function bP(){},
ab:function ab(){},
Z:function Z(){},
h_:function h_(){},
h0:function h0(){},
h1:function h1(){},
ac:function ac(){},
b_:function b_(){},
h5:function h5(){},
h6:function h6(){},
bg:function bg(){},
h8:function h8(){},
dr:function dr(){},
aG:function aG(){},
hd:function hd(){},
hf:function hf(){},
hi:function hi(){},
hj:function hj(){},
b1:function b1(){},
bR:function bR(){},
hl:function hl(a){this.a=a},
hm:function hm(){},
b2:function b2(){},
hu:function hu(){},
dw:function dw(){},
hw:function hw(){},
hx:function hx(){},
hy:function hy(){},
hP:function hP(){},
hQ:function hQ(){},
dz:function dz(){},
i7:function i7(){},
ia:function ia(){},
ib:function ib(){},
ij:function ij(){},
ik:function ik(){},
hs:function hs(){},
hz:function hz(a){this.a=a},
hC:function hC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jj:function jj(a,b,c,d){var _=this
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
bU:function bU(a){this.a=a},
B:function B(){},
dc:function dc(a){this.a=a},
f9:function f9(a){this.a=a},
f8:function f8(a,b,c){this.a=a
this.b=b
this.c=c},
bX:function bX(){},
i8:function i8(){},
i9:function i9(){},
ie:function ie(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ig:function ig(){},
ic:function ic(){},
ch:function ch(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
db:function db(){},
i6:function i6(a,b){this.a=a
this.b=b},
dB:function dB(a){this.a=a},
ih:function ih(a){this.a=a},
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
nk:function(a){var t,s
t=document
s=W.aU
W.al(t,"keydown",new B.iQ(),!1,s)
W.al(t,"keyup",new B.iR(),!1,s)
if(!$.nl)W.al(t,"mousemove",new B.iS(),!1,W.Q)
s=W.Q
W.al(t,"mousedown",new B.iT(),!1,s)
W.al(t,"mouseup",new B.iU(),!1,s)},
mf:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.f(3))
s=$.$get$iv()
r=$.$get$c2()
q=new T.E(new Float32Array(H.f(16)))
q.F()
q=new B.fb(a,b,c,0,new T.h(t),-0.02,s,r,q,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"camera:orbit",!1,!0)
q.da(a,b,c,d)
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
lT:function(d1,d2,d3,d4,d5,d6,d7,d8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
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
c8=new G.bb(!1,[],[],[],P.P())
c8.a2("aTexUV")
c8.a2("aNormal")
c8.d_(6)
c8.bp([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.aK("aTexUV",[new T.u(n),new T.u(t),new T.u(a6),new T.u(a7),new T.u(a8),new T.u(a9),new T.u(b0),new T.u(b1),new T.u(b2),new T.u(b3),new T.u(b4),new T.u(b5),new T.u(b6),new T.u(b7),new T.u(b8),new T.u(b9),new T.u(c0),new T.u(c1),new T.u(c2),new T.u(c3),new T.u(c4),new T.u(c5),new T.u(c6),new T.u(c7)])
for(c9=0;t=$.$get$kC(),c9<6;++c9){d0=t[c9]
c8.aL("aNormal",[d0,d0,d0,d0])}return c8},
lU:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
C.a.i(r,new T.u(p))
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
C.a.i(r,new T.u(o))
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
C.a.i(r,new T.u(k))
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
C.a.i(r,new T.u(o))
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
G.me(i,h,g,new T.h(o),f)
C.a.i(q,f)
C.a.i(q,f)}H.d(s.length===2+4*a4)
p=[]
o=[]
e=new G.bb(!1,p,o,[],P.P())
e.a2("aTexUV")
e.bp(s)
e.aK("aTexUV",r)
e.a2("aNormal")
e.aL("aNormal",q)
for(d=a4*2,n=0;n<a4;n=b){c=n*2+2
h=c+1
b=n+1
a=(b===a4?0:b)*2+2
a0=a+1
H.d(!0)
C.a.i(p,new G.y(0,c,a))
H.d(!0)
C.a.i(p,new G.y(1,a0,h))
H.d(!0)
C.a.i(o,new G.by(d+a,d+c,d+h,d+a0))}return e},
m3:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=[]
s=[]
C.a.M(t,$.$get$k7())
C.a.M(s,$.$get$k8())
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
C.a.i(q,new G.y(m,f,d))
C.a.i(q,new G.y(l,e,f))
C.a.i(q,new G.y(j,d,e))
C.a.i(q,new G.y(f,e,d))}}c=new G.bb(!1,[],[],[],P.P())
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
c.d0([m,l,a2])
c.aK("aTexUV",[new T.u(j),new T.u(h),new T.u(a1)])}return c},
mr:function(a,b,c,d,e,f,a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=a1+1
s=a0+1
r=B.mg(new B.fF(f,d,e,c),0,6.283185307179586,s,!1,0.001)
H.d(r.length===2*s)
q=B.mx(r,a1,a2,!1)
H.d(q.length===s)
H.d(q[0].length===2*t)
p=[]
o=new G.bb(!1,[],[],p,P.P())
for(n=q.length,m=0;m<q.length;q.length===n||(0,H.H)(q),++m){l=q[m]
for(k=0;k<l.length;k+=2){j=l[k]
j.toString
i=new T.h(new Float32Array(3))
i.v(j)
C.a.i(p,i)}}H.d(p.length===t*s)
o.d4(t,s,!1)
o.d5(t,s)
n=o.e
H.d(n.h(0,"aTexUV").length===p.length)
o.a2("aNormal")
for(j=q.length,m=0;m<q.length;q.length===j||(0,H.H)(q),++m){l=q[m]
for(k=0;k<l.length;k+=2){i=l[k+1]
h=n.h(0,"aNormal")
i.toString
g=new T.h(new Float32Array(3))
g.v(i);(h&&C.a).i(h,g)}}H.d(n.h(0,"aNormal").length===p.length)
return o},
mx:function(a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t=[]
s=new Float32Array(H.f(3))
r=new T.h(s)
q=new Float32Array(H.f(3))
p=new T.h(q)
o=new Float32Array(H.f(3))
n=new T.h(o)
for(m=a2+1,l=0;l<a1.length;l+=2){k=a1[l]
j=a1[l+1]
i=[]
C.a.i(t,i)
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
o[2]=e*d}p.C(0)
n.C(0)
for(c=0;c<m;++c){b=c/a2*2*3.141592653589793
a=a3*Math.cos(b)
a0=a3*Math.sin(b)
r.v(k)
r.az(p,a)
r.az(n,a0)
h=new T.h(new Float32Array(3))
h.v(r)
C.a.i(i,h)
s[2]=0
s[1]=0
s[0]=0
r.az(p,a)
r.az(n,a0)
r.C(0)
h=new T.h(new Float32Array(3))
h.v(r)
C.a.i(i,h)}}return t},
mg:function(a,b,c,d,e,f){var t,s,r,q,p,o,n
H.d(d>=2)
t=[]
s=new T.h(new Float32Array(H.f(3)))
r=new T.h(new Float32Array(H.f(3)))
for(q=(c-b)/(d-1),p=0;p<d;++p){o=q*p+b
a.$2(o,s)
a.$2(o+f,r)
r.at(s)
n=new T.h(new Float32Array(3))
n.v(s)
C.a.i(t,n)
n=new T.h(new Float32Array(3))
n.v(r)
C.a.i(t,n)}return t},
fF:function fF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},G={
my:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.i(t[s])}return C.a.ao(t,"\n")},
kB:function(a,b,c){var t,s,r,q
t=J.m(a)
s=t.c4(a,b)
t.bj(a,s,c)
t.c1(a,s)
r=t.bd(a,s,35713)
if(r!=null&&!r){q=t.bc(a,s)
P.ao("E:Compilation failed:")
P.ao("E:"+G.my(c))
P.ao("E:Failure:")
P.ao(C.i.a5("E:",q))
throw H.e(q)}return s},
me:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
d.v(b)
d.at(a)
e.v(c)
e.at(a)
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
d4:function(a){var t=new G.eU(P.P(),a,!1,!0)
t.d9(a)
return t},
k6:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.j1(a[s])
b[t+1]=J.j2(a[s])
b[t+2]=J.jB(a[s])}return b},
m1:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.j1(a[s])
b[t+1]=J.j2(a[s])}return b},
m2:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.j1(a[s])
b[t+1]=J.j2(a[s])
b[t+2]=J.jB(a[s])
b[t+3]=J.lv(a[s])}return b},
m0:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.bl(a[s],0)
b[t+1]=J.bl(a[s],1)
b[t+2]=J.bl(a[s],2)
b[t+3]=J.bl(a[s],3)}return b},
mF:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gG(t),s=s.gB(s),r=b.x,q=[[P.b,P.o]],p=[P.O],o=[T.aH],n=[T.h],m=[T.u];s.p();){l=s.gt()
if(!r.I(0,l)){k="Dropping unnecessary attribute: "+H.i(l)
if($.kS>0)H.iO("I: "+k)
continue}j=t.h(0,l)
switch($.$get$a_().h(0,l).a){case"vec2":b.ad(l,G.m1(H.dF(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.ad(l,G.k6(H.dF(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.ad(l,G.m2(H.dF(j,"$isb",o,"$asb"),null),4)
break
case"float":b.ad(l,new Float32Array(H.im(H.dF(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.ad(l,G.m0(H.dF(j,"$isb",q,"$asb"),null),4)
break
default:if(H.ay(!1))H.aI("unknown type for "+H.i(l)+" ["+J.lt(j[0]).l(0)+"] ["+new H.aF(H.iz(j),null).l(0)+"] "+H.i(j))}}},
ew:function(a,b,c){var t,s,r,q,p,o,n,m
t=b.d
s=b.e.x
r=P.P()
q=J.lh(t.a)
p=new G.eW(t,q,4,r,s,null,0,-1,null,null,P.P(),"meshdata:"+a,!1,!0)
o=G.k6(c.d,null)
r.j(0,"aPosition",J.j_(t.a))
p.ch=o
p.bq("aPosition",o,3)
n=$.$get$a_().h(0,"aPosition")
if(n==null)H.I("Unknown canonical aPosition")
H.d(s.I(0,"aPosition"))
m=s.h(0,"aPosition")
J.dH(t.a,q)
t.cc(0,m,0)
s=r.h(0,"aPosition")
r=n.bs()
J.dG(t.a,34962,s)
J.jI(t.a,m,r,5126,!1,0,0)
s=c.d3()
p.y=J.j_(t.a)
H.d(p.ch!=null)
r=p.ch.length
if(r<768){p.saT(new Uint8Array(H.im(s)))
p.Q=5121}else if(r<196608){p.saT(new Uint16Array(H.im(s)))
p.Q=5123}else{p.saT(new Uint32Array(H.im(s)))
p.Q=5125}J.dH(t.a,q)
s=p.y
r=p.cx
q=J.w(r)
H.d(!!q.$isky||!!q.$iskz||!!q.$iskA)
J.dG(t.a,34963,s)
J.jA(t.a,34963,r,35048)
G.mF(c,p)
return p},
mq:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.ai(null,null,null,P.t)
s=c.b
r=d.b
q=c.f
p=J.lg(b.a)
o=G.kB(b.a,35633,s)
J.jy(b.a,p,o)
n=G.kB(b.a,35632,r)
J.jy(b.a,p,n)
if(q.length>0)J.lF(b.a,p,q,35980)
J.lz(b.a,p)
if(!J.ly(b.a,p,35714))H.I(J.lx(b.a,p))
t=new G.fx(b,c,d,p,P.jd(c.c,null),P.P(),P.P(),t,null,a,!1,!0)
t.dd(a,b,c,d)
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
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
by:function by(a,b,c,d){var _=this
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
z:function z(a,b,c){this.a=a
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
fI:function fI(){}},R={
kk:function(a,b,c,d,e,f,g,h){return G.ew("cube",a,B.lT(!0,b,c,d,e,f,g,h))},
fM:function fM(){},
fN:function fN(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
kQ:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.v(c)
s=b.d
t.b4(0,s)
r=b.cx
J.aA(b)
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
p.e6(new T.aj(o))
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
a.d2(r,e,d)
e.pop()
for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.H)(s),++l)A.kQ(a,s[l],t,d,e)},
kj:function(a,b,c){var t=new A.fw(c,b,H.G([],[A.bL]),17664,0,0,0,0,a,!1,!0)
t.dc(a,b,c)
return t},
aW:function aW(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
bL:function bL(a,b,c,d,e,f){var _=this
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
t=C.V.el(a,0,new A.iA())
s=536870911&t+(C.b.cC(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iA:function iA(){}},T={
F:function(a,b,c){var t=new Float32Array(3)
t[0]=a
t[1]=b
t[2]=c
return new T.h(t)},
aj:function aj(a){this.a=a},
E:function E(a){this.a=a},
u:function u(a){this.a=a},
h:function h(a){this.a=a},
aH:function aH(a){this.a=a}},K={
ne:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t={}
s=document
r=new R.fN(0,0,null,null,null,null)
r.df(C.p.cF(s,"stats"),"blue","gray")
q=C.p.eB(s,"#webgl-canvas")
p=new G.dT(null,q)
s=(q&&C.H).cE(q,"webgl2",P.aV(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=s
if(s==null)H.I(P.cf('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+J.aA(J.lw(s))
if($.kS>0)P.ao("I: "+o)
J.le(s,0,0,0,1)
J.dI(s,2929)
n=B.mf(25,10,0,q)
m=G.mq("textured",p,$.$get$l2(),$.$get$l1())
s=new Float32Array(H.f(16))
o=new Float32Array(H.f(16))
l=new T.E(new Float32Array(H.f(16)))
l.F()
k=new G.fg(n,new T.E(s),new T.E(o),l,1,-20,20,-20,-20,100,P.P(),"othrogrpahic",!1,!0)
k.ae()
j=A.kj("shadow",p,null)
l=[]
H.d(!0)
C.a.i(j.f,new A.bL(m,[k],l,"objects",!1,!0))
s=new T.E(new Float32Array(H.f(16)))
s.F()
o=new T.E(new Float32Array(H.f(16)))
o.F()
i=new G.fj(n,50,1,0.1,1000,s,o,new T.E(new Float32Array(H.f(16))),P.P(),"perspective",!1,!0)
i.ae()
h=A.kj("perspective",p,null)
h.r&=4294950911
s=[]
H.d(!0)
C.a.i(h.f,new A.bL(m,[i],s,"objects",!1,!0))
g=G.d4("mat1")
g.T("uColor",$.$get$jS())
f=G.d4("mat2")
f.T("uColor",$.$get$jW())
e=G.d4("mat3")
e.T("uColor",$.$get$jV())
d=G.d4("mat4")
d.T("uColor",$.$get$jT())
c=G.d4("plane")
c.T("uColor",$.$get$jU())
o=G.ew("icosahedron-3",m,B.m3(3,1,!0))
b=new Float32Array(H.f(9))
a=new T.E(new Float32Array(H.f(16)))
a.F()
a0=new T.E(new Float32Array(H.f(16)))
a0.F()
a0=new A.aW(g,o,[],new T.aj(b),a,a0,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"sphere",!1,!0)
a0.a6(0,0,0)
a=R.kk(m,1,0,1,0,1,1,1)
b=new Float32Array(H.f(9))
o=new T.E(new Float32Array(H.f(16)))
o.F()
g=new T.E(new Float32Array(H.f(16)))
g.F()
g=new A.aW(f,a,[],new T.aj(b),o,g,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"cube",!1,!0)
g.a6(-5,0,-5)
o=G.ew("cylinder-32",m,B.lU(3,6,2,32,!0))
b=new Float32Array(H.f(9))
a=new T.E(new Float32Array(H.f(16)))
a.F()
f=new T.E(new Float32Array(H.f(16)))
f.F()
f=new A.aW(e,o,[],new T.aj(b),a,f,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"cylinder",!1,!0)
f.a6(5,0,-5)
a=G.ew("torusknot",m,B.mr(!0,!0,1,2,3,1,128,16,0.4,!1))
b=new Float32Array(H.f(9))
o=new T.E(new Float32Array(H.f(16)))
o.F()
e=new T.E(new Float32Array(H.f(16)))
e.F()
e=new A.aW(d,a,[],new T.aj(b),o,e,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"torus",!1,!0)
e.a6(5,0,5)
o=R.kk(m,1,0,1,0,20,0.1,20)
b=new Float32Array(H.f(9))
a=new T.E(new Float32Array(H.f(16)))
a.F()
d=new T.E(new Float32Array(H.f(16)))
d.F()
d=new A.aW(c,o,[],new T.aj(b),a,d,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"cube",!1,!0)
d.a6(0,-10,0)
a1=[a0,g,f,e,d]
for(a2=0;a2<5;++a2){a3=a1[a2]
H.d(!0)
C.a.i(l,a3)
H.d(!0)
C.a.i(s,a3)}s=new K.iM(q,k,j,i,h)
s.$1(null)
W.al(window,"resize",s,!1,W.k)
t.a=0
new K.iL(t,r,n,j,h).$1(0)},
iM:function iM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iL:function iL(a,b,c,d,e){var _=this
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
gw:function(a){return H.aY(a)},
l:function(a){return H.fr(a)},
gD:function(a){return new H.aF(H.iz(a),null)}}
J.eG.prototype={
l:function(a){return String(a)},
gw:function(a){return a?519018:218159},
gD:function(a){return C.ap},
$isaz:1}
J.eH.prototype={
A:function(a,b){return null==b},
l:function(a){return"null"},
gw:function(a){return 0},
gD:function(a){return C.aj}}
J.bB.prototype={
gw:function(a){return 0},
gD:function(a){return C.ai},
l:function(a){return String(a)},
$iskc:1}
J.fl.prototype={}
J.b0.prototype={}
J.aT.prototype={
l:function(a){var t=a[$.$get$jY()]
return t==null?this.cW(a):J.aA(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isj8:1}
J.aR.prototype={
b1:function(a,b){if(!!a.immutable$list)throw H.e(new P.v(b))},
b0:function(a,b){if(!!a.fixed$length)throw H.e(new P.v(b))},
i:function(a,b){this.b0(a,"add")
a.push(b)},
M:function(a,b){var t,s,r,q,p
t=a.length
this.b0(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.H)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.I(new P.a2(a)))
a.push(q)}},
cf:function(a,b){return new H.bC(a,b,[H.aK(a,0),null])},
ao:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.i(a[s])
return t.join(b)},
u:function(a,b){return this.h(a,b)},
gek:function(a){if(a.length>0)return a[0]
throw H.e(H.eF())},
gaD:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.eF())},
bh:function(a,b,c,d,e){var t,s
this.b1(a,"setRange")
P.ki(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.I(P.aZ(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.mb())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
bS:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.a2(a))}return!1},
cR:function(a,b){this.b1(a,"sort")
H.dk(a,0,a.length-1,P.n_())},
bk:function(a){return this.cR(a,null)},
E:function(a,b){var t
for(t=0;t<a.length;++t)if(J.J(a[t],b))return!0
return!1},
l:function(a){return P.eE(a,"[","]")},
gB:function(a){return new J.dN(a,a.length,0,null,[H.aK(a,0)])},
gw:function(a){return H.aY(a)},
gk:function(a){return a.length},
sk:function(a,b){this.b0(a,"set length")
if(b<0)throw H.e(P.aZ(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.R(a,b))
if(b>=a.length||b<0)throw H.e(H.R(a,b))
return a[b]},
j:function(a,b,c){this.b1(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.R(a,b))
if(b>=a.length||b<0)throw H.e(H.R(a,b))
a[b]=c},
$isn:1,
$asn:function(){},
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
if(r>=s){this.sbu(null)
return!1}this.sbu(t[r]);++this.c
return!0},
sbu:function(a){this.d=a}}
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
e1:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.v(""+a+".ceil()"))},
aa:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.v(""+a+".round()"))},
e2:function(a,b,c){if(this.V(b,c)>0)throw H.e(H.V(b))
if(this.V(a,b)<0)return b
if(this.V(a,c)>0)return c
return a},
eM:function(a,b){var t
if(b>20)throw H.e(P.aZ(b,0,20,"fractionDigits",null))
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
b9:function(a,b){if(typeof b!=="number")throw H.e(H.V(b))
return a/b},
J:function(a,b){if(typeof b!=="number")throw H.e(H.V(b))
return a*b},
aJ:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bO(a,b)},
H:function(a,b){return(a|0)===a?a/b|0:this.bO(a,b)},
bO:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.v("Result of truncating division is "+H.i(t)+": "+H.i(a)+" ~/ "+b))},
aX:function(a,b){var t
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
gD:function(a){return C.as},
$isW:1}
J.d0.prototype={
gD:function(a){return C.ar},
$isO:1,
$iso:1,
$isW:1}
J.d_.prototype={
gD:function(a){return C.aq},
$isO:1,
$isW:1}
J.aS.prototype={
aO:function(a,b){if(b>=a.length)throw H.e(H.R(a,b))
return a.charCodeAt(b)},
a5:function(a,b){if(typeof b!=="string")throw H.e(P.jK(b,null,null))
return a+b},
cS:function(a,b,c){var t
if(c>a.length)throw H.e(P.aZ(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bl:function(a,b){return this.cS(a,b,0)},
bn:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fs(b,null,null))
if(b>c)throw H.e(P.fs(b,null,null))
if(c>a.length)throw H.e(P.fs(c,null,null))
return a.substring(b,c)},
cT:function(a,b){return this.bn(a,b,null)},
eL:function(a){return a.toLowerCase()},
e4:function(a,b,c){if(c>a.length)throw H.e(P.aZ(c,0,a.length,null,null))
return H.nn(a,b,c)},
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
gD:function(a){return C.ak},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.R(a,b))
return a[b]},
$isn:1,
$asn:function(){},
$ist:1}
H.c.prototype={$asc:null}
H.bd.prototype={
gB:function(a){return new H.d2(this,this.gk(this),0,null,[H.an(this,"bd",0)])},
aF:function(a,b){return this.cV(0,b)},
eK:function(a,b){var t,s
t=H.G([],[H.an(this,"bd",0)])
C.a.sk(t,this.gk(this))
for(s=0;s<this.gk(this);++s)t[s]=this.u(0,s)
return t},
eJ:function(a){return this.eK(a,!0)}}
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
H.bC.prototype={
gk:function(a){return J.dJ(this.a)},
u:function(a,b){return this.b.$1(J.ln(this.a,b))},
$asc:function(a,b){return[b]},
$asbd:function(a,b){return[b]},
$asX:function(a,b){return[b]}}
H.du.prototype={
gB:function(a){return new H.hk(J.bn(this.a),this.b,this.$ti)}}
H.hk.prototype={
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
H.hX.prototype={
sev:function(a){this.z=a},
sey:function(a){this.ch=a}}
H.b4.prototype={
bR:function(a,b){if(!this.f.A(0,a))return
if(this.Q.i(0,b)&&!this.y)this.y=!0
this.aZ()},
eE:function(a){var t,s,r,q,p
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
if(q===r.c)r.bH();++r.d}this.y=!1}this.aZ()},
dT:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.w(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).i(r,a)
t=this.ch;(t&&C.a).i(t,b)},
eD:function(a){var t,s,r
if(this.ch==null)return
for(t=J.w(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.I(new P.v("removeRange"))
P.ki(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cO:function(a,b){if(!this.r.A(0,a))return
this.db=b},
eo:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.K(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.je(null,null)
this.cx=t}t.X(0,new H.hS(a,c))},
en:function(a,b){var t
if(!this.r.A(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aC()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.je(null,null)
this.cx=t}t.X(0,this.gew())},
ep:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.ao(a)
if(b!=null)P.ao(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aA(a)
s[1]=b==null?null:b.l(0)
for(r=new P.bV(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.K(0,s)},
ak:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.S(o)
p=H.aJ(o)
this.ep(q,p)
if(this.db){this.aC()
if(this===u.globalState.e)throw o}}finally{this.cy=H.mW(r)
u.globalState.d=H.jr(t,"$isb4")
if(t!=null)$=t.geu()
if(this.cx!=null)for(;n=this.cx,!n.gan(n);)this.cx.cg().$0()}return s},
ce:function(a){return this.b.h(0,a)},
by:function(a,b){var t=this.b
if(t.I(0,a))throw H.e(P.cf("Registry: ports must be registered only once."))
t.j(0,a,b)},
aZ:function(){var t=this.b
if(t.gk(t)-this.c.a>0||this.y||!this.x)u.globalState.z.j(0,this.a,this)
else this.aC()},
aC:function(){var t,s,r
t=this.cx
if(t!=null)t.Z(0)
for(t=this.b,s=t.gcz(t),s=s.gB(s);s.p();)s.gt().du()
t.Z(0)
this.c.Z(0)
u.globalState.z.ap(0,this.a)
this.dx.Z(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].K(0,t[r+1])
this.ch=null}},
geu:function(){return this.d},
ge5:function(){return this.e}}
H.hS.prototype={
$0:function(){this.a.K(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hA.prototype={
ec:function(){var t=this.a
if(t.b===t.c)return
return t.cg()},
cj:function(){var t,s,r
t=this.ec()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.I(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gan(s)}else s=!1
else s=!1
else s=!1
if(s)H.I(P.cf("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gan(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aV(["command","close"])
r=new H.am(!0,new P.dy(0,null,null,null,null,null,0,[null,P.o])).N(r)
s.toString
self.postMessage(r)}return!1}t.eA()
return!0},
bM:function(){if(self.window!=null)new H.hB(this).$0()
else for(;this.cj(););},
aq:function(){var t,s,r,q,p
if(!u.globalState.x)this.bM()
else try{this.bM()}catch(r){t=H.S(r)
s=H.aJ(r)
q=u.globalState.Q
p=P.aV(["command","error","msg",H.i(t)+"\n"+H.i(s)])
p=new H.am(!0,P.bW(null,P.o)).N(p)
q.toString
self.postMessage(p)}}}
H.hB.prototype={
$0:function(){if(!this.a.cj())return
P.mw(C.v,this)},
$S:function(){return{func:1,v:true}}}
H.b5.prototype={
eA:function(){var t=this.a
if(t.y){C.a.i(t.z,this)
return}t.ak(this.b)}}
H.hW.prototype={}
H.eC.prototype={
$0:function(){H.m7(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eD.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bk(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bk(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aZ()},
$S:function(){return{func:1,v:true}}}
H.ht.prototype={}
H.bh.prototype={
K:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mK(b)
if(t.ge5()===s){s=J.ae(r)
switch(s.h(r,0)){case"pause":t.bR(s.h(r,1),s.h(r,2))
break
case"resume":t.eE(s.h(r,1))
break
case"add-ondone":t.dT(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eD(s.h(r,1))
break
case"set-errors-fatal":t.cO(s.h(r,1),s.h(r,2))
break
case"ping":t.eo(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.en(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.i(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ap(0,s)
break}return}u.globalState.f.a.X(0,new H.b5(t,new H.hY(this,r),"receive"))},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bh){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gw:function(a){return this.b.a}}
H.hY.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.ds(0,this.b)},
$S:function(){return{func:1}}}
H.bY.prototype={
K:function(a,b){var t,s,r
t=P.aV(["command","message","port",this,"msg",b])
s=new H.am(!0,P.bW(null,P.o)).N(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bY){t=this.b
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
du:function(){this.c=!0
this.b=null},
ds:function(a,b){if(this.c)return
this.b.$1(b)},
$ismo:1}
H.h2.prototype={
dg:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.X(0,new H.b5(s,new H.h3(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.c1(new H.h4(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.v("Timer greater than 0."))}}}
H.h3.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.h4.prototype={
$0:function(){this.a.c=null
H.iK()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ar.prototype={
gw:function(a){var t=this.a
t=C.b.aX(t,0)^C.b.H(t,4294967296)
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
t=J.w(a)
if(!!t.$isbE)return["buffer",a]
if(!!t.$isbe)return["typed",a]
if(!!t.$isn)return this.cK(a)
if(!!t.$ism4){r=this.gcH()
q=t.gG(a)
q=H.jf(q,r,H.an(q,"X",0),null)
q=P.ke(q,!0,H.an(q,"X",0))
t=t.gcz(a)
t=H.jf(t,r,H.an(t,"X",0),null)
return["map",q,P.ke(t,!0,H.an(t,"X",0))]}if(!!t.$iskc)return this.cL(a)
if(!!t.$isa)this.cv(a)
if(!!t.$ismo)this.ar(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbh)return this.cM(a)
if(!!t.$isbY)return this.cN(a)
if(!!t.$isb8){p=a.$static_name
if(p==null)this.ar(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isar)return["capability",a.a]
if(!(a instanceof P.p))this.cv(a)
return["dart",u.classIdExtractor(a),this.cJ(u.classFieldsExtractor(a))]},
ar:function(a,b){throw H.e(new P.v((b==null?"Can't transmit:":b)+" "+H.i(a)))},
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
H.b3.prototype={
a_:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.jJ("Bad serialized message: "+H.i(a)))
switch(C.a.gek(a)){case"ref":H.d(J.J(a[0],"ref"))
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
s=H.G(this.aj(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.J(a[0],"extendable"))
t=a[1]
C.a.i(this.b,t)
return H.G(this.aj(t),[null])
case"mutable":H.d(J.J(a[0],"mutable"))
t=a[1]
C.a.i(this.b,t)
return this.aj(t)
case"const":H.d(J.J(a[0],"const"))
t=a[1]
C.a.i(this.b,t)
s=H.G(this.aj(t),[null])
s.fixed$length=Array
return s
case"map":return this.ef(a)
case"sendport":return this.eg(a)
case"raw sendport":H.d(J.J(a[0],"raw sendport"))
t=a[1]
C.a.i(this.b,t)
return t
case"js-object":return this.ee(a)
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
ef:function(a){var t,s,r,q,p
H.d(J.J(a[0],"map"))
t=a[1]
s=a[2]
r=P.P()
C.a.i(this.b,r)
t=J.lA(t,this.ged()).eJ(0)
for(q=J.ae(s),p=0;p<t.length;++p)r.j(0,t[p],this.a_(q.h(s,p)))
return r},
eg:function(a){var t,s,r,q,p,o,n
H.d(J.J(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.ce(r)
if(o==null)return
n=new H.bh(o,s)}else n=new H.bY(t,r,s)
C.a.i(this.b,n)
return n},
ee:function(a){var t,s,r,q,p,o
H.d(J.J(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.i(this.b,r)
for(q=J.ae(t),p=J.ae(s),o=0;o<q.gk(t);++o)r[q.h(t,o)]=this.a_(p.h(s,o))
return r}}
H.fv.prototype={}
H.h9.prototype={
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
H.hc.prototype={
l:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.iX.prototype={
$1:function(a){if(!!J.w(a).$isba)if(a.$thrownJsError==null)a.$thrownJsError=this.a
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
H.iF.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iG.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iH.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iI.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iJ.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.b8.prototype={
l:function(a){return"Closure '"+H.df(this).trim()+"'"},
$isj8:1,
geP:function(){return this},
$D:null}
H.fY.prototype={}
H.fL.prototype={
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
if(t==null)s=H.aY(this.a)
else s=typeof t!=="object"?J.aq(t):H.aY(t)
return(s^H.aY(this.b))>>>0},
l:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.i(this.d)+"' of "+H.fr(t)}}
H.hb.prototype={
l:function(a){return this.a}}
H.dS.prototype={
l:function(a){return this.a}}
H.fB.prototype={
l:function(a){return"RuntimeError: "+H.i(this.a)}}
H.hn.prototype={
l:function(a){return C.i.a5("Assertion failed: ",P.j7(this.a))}}
H.aF.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gw:function(a){return J.aq(this.a)},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aF){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ah.prototype={
gk:function(a){return this.a},
gan:function(a){return this.a===0},
gG:function(a){return new H.eM(this,[H.aK(this,0)])},
gcz:function(a){return H.jf(this.gG(this),new H.eI(this),H.aK(this,0),H.aK(this,1))},
I:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bE(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bE(s,b)}else return this.eq(b)},
eq:function(a){var t=this.d
if(t==null)return!1
return this.am(this.ax(t,this.al(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ah(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ah(r,b)
return s==null?null:s.b}else return this.er(b)},
er:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.ax(t,this.al(a))
r=this.am(s,a)
if(r<0)return
return s[r].b},
j:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aU()
this.b=t}this.bw(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aU()
this.c=s}this.bw(s,b,c)}else{r=this.d
if(r==null){r=this.aU()
this.d=r}q=this.al(b)
p=this.ax(r,q)
if(p==null)this.aW(r,q,[this.aV(b,c)])
else{o=this.am(p,b)
if(o>=0)p[o].b=c
else p.push(this.aV(b,c))}}},
ap:function(a,b){if(typeof b==="string")return this.bK(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bK(this.c,b)
else return this.es(b)},
es:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.ax(t,this.al(a))
r=this.am(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bP(q)
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
bw:function(a,b,c){var t=this.ah(a,b)
if(t==null)this.aW(a,b,this.aV(b,c))
else t.b=c},
bK:function(a,b){var t
if(a==null)return
t=this.ah(a,b)
if(t==null)return
this.bP(t)
this.bF(a,b)
return t.b},
aV:function(a,b){var t,s
t=new H.eL(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bP:function(a){var t,s,r
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
l:function(a){return P.md(this)},
ah:function(a,b){return a[b]},
ax:function(a,b){return a[b]},
aW:function(a,b,c){H.d(c!=null)
a[b]=c},
bF:function(a,b){delete a[b]},
bE:function(a,b){return this.ah(a,b)!=null},
aU:function(){var t=Object.create(null)
this.aW(t,"<non-identifier-key>",t)
this.bF(t,"<non-identifier-key>")
return t},
$ism4:1}
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
if(t==null){this.sbv(null)
return!1}else{this.sbv(t.a)
this.c=this.c.c
return!0}}},
sbv:function(a){this.d=a}}
H.iB.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.iC.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.t]}}}
H.iD.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.t]}}}
H.bE.prototype={
gD:function(a){return C.ab},
$isbE:1}
H.be.prototype={$isbe:1}
H.f_.prototype={
gD:function(a){return C.ac}}
H.d6.prototype={
gk:function(a){return a.length},
$isn:1,
$asn:function(){},
$isq:1,
$asq:function(){}}
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
gD:function(a){return C.ad},
$isc:1,
$asc:function(){return[P.O]},
$isb:1,
$asb:function(){return[P.O]},
$iser:1}
H.f0.prototype={
gD:function(a){return C.ae},
$isc:1,
$asc:function(){return[P.O]},
$isb:1,
$asb:function(){return[P.O]}}
H.f1.prototype={
gD:function(a){return C.af},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.I(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.f2.prototype={
gD:function(a){return C.ag},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.I(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$isk9:1}
H.f3.prototype={
gD:function(a){return C.ah},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.I(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.f4.prototype={
gD:function(a){return C.al},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.I(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$isky:1}
H.f5.prototype={
gD:function(a){return C.am},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.I(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$iskz:1}
H.d9.prototype={
gD:function(a){return C.an},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.I(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.f6.prototype={
gD:function(a){return C.ao},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.I(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$iskA:1}
H.bF.prototype={
$asn:function(){},
$isc:1,
$asc:function(){return[P.o]},
$asq:function(){},
$isb:1,
$asb:function(){return[P.o]}}
H.bG.prototype={
$asn:function(){},
$isc:1,
$asc:function(){return[P.O]},
$asq:function(){},
$isb:1,
$asb:function(){return[P.O]}}
H.bH.prototype={
$asn:function(){},
$asc:function(){return[P.O]},
$asq:function(){},
$asb:function(){return[P.O]}}
H.bI.prototype={
$asn:function(){},
$asc:function(){return[P.o]},
$asq:function(){},
$asb:function(){return[P.o]}}
P.hp.prototype={
$1:function(a){var t,s
H.iK()
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
$0:function(){H.iK()
this.a.$0()},
$S:function(){return{func:1}}}
P.hr.prototype={
$0:function(){H.iK()
this.a.$0()},
$S:function(){return{func:1}}}
P.hv.prototype={}
P.id.prototype={
e3:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.aE("Future already completed"))
t.aQ(b)}}
P.dx.prototype={
ez:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.b7(this.d,a.a)},
em:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bk(s,{func:1,args:[P.p,P.bN]}))return t.eF(s,a.a,a.b)
else return t.b7(s,a.a)}}
P.ax.prototype={
cl:function(a,b){var t,s,r
t=$.D
if(t!==C.f){t.toString
if(b!=null)b=P.mO(b,t)}s=new P.ax(0,t,null,[null])
r=b==null?1:3
this.bx(new P.dx(null,s,r,a,b,[H.aK(this,0),null]))
return s},
ck:function(a){return this.cl(a,null)},
bA:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
bx:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.jr(this.c,"$isdx")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.bx(a)
return}this.bA(t)}H.d(this.a>=4)
t=this.b
t.toString
P.iq(null,null,t,new P.hG(this,a))}},
bJ:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.bJ(a)
return}this.bA(s)}H.d(this.a>=4)
t.a=this.ai(a)
s=this.b
s.toString
P.iq(null,null,s,new P.hK(t,this))}},
bL:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.ai(t)},
ai:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aQ:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.ir(a,"$isev",t,"$asev"))if(H.ir(a,"$isax",t,null))P.kD(a,this)
else P.mE(a,this)
else{s=this.bL()
H.d(this.a<4)
this.a=4
this.c=a
P.bS(this,s)}},
au:function(a,b){var t
H.d(this.a<4)
t=this.bL()
H.d(this.a<4)
this.a=8
this.c=new P.b7(a,b)
P.bS(this,t)},
dw:function(a){return this.au(a,null)},
$isev:1,
gaY:function(){return this.a},
gdN:function(){return this.c}}
P.hG.prototype={
$0:function(){P.bS(this.a,this.b)},
$S:function(){return{func:1}}}
P.hK.prototype={
$0:function(){P.bS(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hH.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.aQ(a)},
$S:function(){return{func:1,args:[,]}}}
P.hI.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.au(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hJ.prototype={
$0:function(){this.a.au(this.b,this.c)},
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
t=q.b.b.ci(q.d)}catch(n){s=H.S(n)
r=H.aJ(n)
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
return}if(!!J.w(t).$isev){if(t instanceof P.ax&&t.gaY()>=4){if(t.gaY()===8){q=t
H.d(q.gaY()===8)
p=this.b
p.b=q.gdN()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.ck(new P.hO(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hO.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.hM.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.b7(r.d,this.c)}catch(q){t=H.S(q)
s=H.aJ(q)
r=this.a
r.b=new P.b7(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hL.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.ez(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.em(t)
p.a=!1}}catch(o){s=H.S(o)
r=H.aJ(o)
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
P.fP.prototype={
gk:function(a){var t,s
t={}
s=new P.ax(0,$.D,null,[P.o])
t.a=0
this.ex(new P.fR(t),!0,new P.fS(t,s),s.gdv())
return s}}
P.fR.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.fS.prototype={
$0:function(){this.b.aQ(this.a.a)},
$S:function(){return{func:1}}}
P.fQ.prototype={}
P.b7.prototype={
l:function(a){return H.i(this.a)},
$isba:1}
P.il.prototype={}
P.ip.prototype={
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
P.i_.prototype={
eG:function(a){var t,s,r
try{if(C.f===$.D){a.$0()
return}P.kI(null,null,this,a)}catch(r){t=H.S(r)
s=H.aJ(r)
P.io(null,null,this,t,s)}},
eH:function(a,b){var t,s,r
try{if(C.f===$.D){a.$1(b)
return}P.kJ(null,null,this,a,b)}catch(r){t=H.S(r)
s=H.aJ(r)
P.io(null,null,this,t,s)}},
dZ:function(a){return new P.i1(this,a)},
b_:function(a){return new P.i0(this,a)},
e_:function(a){return new P.i2(this,a)},
h:function(a,b){return},
ci:function(a){if($.D===C.f)return a.$0()
return P.kI(null,null,this,a)},
b7:function(a,b){if($.D===C.f)return a.$1(b)
return P.kJ(null,null,this,a,b)},
eF:function(a,b,c){if($.D===C.f)return a.$2(b,c)
return P.mP(null,null,this,a,b,c)}}
P.i1.prototype={
$0:function(){return this.a.ci(this.b)},
$S:function(){return{func:1}}}
P.i0.prototype={
$0:function(){return this.a.eG(this.b)},
$S:function(){return{func:1}}}
P.i2.prototype={
$1:function(a){return this.a.eH(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dy.prototype={
al:function(a){return H.ng(a)&0x3ffffff},
am:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hT.prototype={
gB:function(a){var t=new P.bV(this,this.r,null,null,[null])
t.c=this.e
return t},
gk:function(a){return this.a},
E:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dz(b)},
dz:function(a){var t=this.d
if(t==null)return!1
return this.aw(t[this.av(a)],a)>=0},
ce:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.E(0,a)?a:null
else return this.dH(a)},
dH:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.av(a)]
r=this.aw(s,a)
if(r<0)return
return J.bl(s,r).gdB()},
i:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bB(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bB(r,b)}else return this.X(0,b)},
X:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.mI()
this.d=t}s=this.av(b)
r=t[s]
if(r==null){q=[this.aP(b)]
H.d(q!=null)
t[s]=q}else{if(this.aw(r,b)>=0)return!1
r.push(this.aP(b))}return!0},
ap:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bC(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bC(this.c,b)
else return this.dI(0,b)},
dI:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.av(b)]
r=this.aw(s,b)
if(r<0)return!1
this.bD(s.splice(r,1)[0])
return!0},
Z:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bB:function(a,b){var t
if(a[b]!=null)return!1
t=this.aP(b)
H.d(!0)
a[b]=t
return!0},
bC:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bD(t)
delete a[b]
return!0},
aP:function(a){var t,s
t=new P.hU(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bD:function(a){var t,s,r
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
P.hU.prototype={
gdB:function(){return this.a}}
P.bV.prototype={
gt:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a2(t))
else{t=this.c
if(t==null){this.saf(null)
return!1}else{this.saf(t.a)
this.c=this.c.b
return!0}}},
saf:function(a){this.d=a}}
P.hR.prototype={}
P.d1.prototype={}
P.x.prototype={
gB:function(a){return new H.d2(a,this.gk(a),0,null,[H.an(a,"x",0)])},
u:function(a,b){return this.h(a,b)},
cf:function(a,b){return new H.bC(a,b,[H.an(a,"x",0),null])},
el:function(a,b,c){var t,s,r
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
gB:function(a){return new P.hV(this,this.c,this.d,this.b,null,this.$ti)},
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
if(this.b===t)this.bH();++this.d},
bH:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.G(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bh(s,0,q,t,r)
C.a.bh(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbN(s)},
d8:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbN(H.G(t,[b]))},
sbN:function(a){this.a=a},
$asc:null}
P.hV.prototype={
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
P.bK.prototype={$isc:1,$asc:null,$isb:1,$asb:null}
P.az.prototype={}
P.L.prototype={}
P.bp.prototype={
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.bp))return!1
return this.a===b.a&&this.b===b.b},
V:function(a,b){return C.b.V(this.a,b.a)},
gw:function(a){var t=this.a
return(t^C.b.aX(t,30))&1073741823},
l:function(a){var t,s,r,q,p,o,n
t=P.lV(H.mn(this))
s=P.c9(H.ml(this))
r=P.c9(H.mh(this))
q=P.c9(H.mi(this))
p=P.c9(H.mk(this))
o=P.c9(H.mm(this))
n=P.lW(H.mj(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isL:1,
$asL:function(){return[P.bp]}}
P.O.prototype={$isL:1,
$asL:function(){return[P.W]}}
P.aQ.prototype={
aH:function(a,b){return C.b.aH(this.a,b.gdA())},
as:function(a,b){return C.b.as(this.a,b.gdA())},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.aQ))return!1
return this.a===b.a},
gw:function(a){return this.a&0x1FFFFFFF},
V:function(a,b){return C.b.V(this.a,b.a)},
l:function(a){var t,s,r,q,p
t=new P.e3()
s=this.a
if(s<0)return"-"+new P.aQ(0-s).l(0)
r=t.$1(C.b.H(s,6e7)%60)
q=t.$1(C.b.H(s,1e6)%60)
p=new P.e2().$1(s%1e6)
return""+C.b.H(s,36e8)+":"+H.i(r)+":"+H.i(q)+"."+H.i(p)},
$isL:1,
$asL:function(){return[P.aQ]}}
P.e2.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.t,args:[P.o]}}}
P.e3.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.t,args:[P.o]}}}
P.ba.prototype={}
P.c6.prototype={
l:function(a){return"Assertion failed"}}
P.de.prototype={
l:function(a){return"Throw of null."}}
P.af.prototype={
gaS:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaR:function(){return""},
l:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.i(t)
q=this.gaS()+s+r
if(!this.a)return q
p=this.gaR()
o=P.j7(this.b)
return q+p+": "+H.i(o)}}
P.dh.prototype={
gaS:function(){return"RangeError"},
gaR:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.i(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.i(t)
else if(r>t)s=": Not in range "+H.i(t)+".."+H.i(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.i(t)}return s}}
P.eA.prototype={
gaS:function(){return"RangeError"},
gaR:function(){H.d(this.a)
if(J.l6(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.i(t)},
gk:function(a){return this.f}}
P.v.prototype={
l:function(a){return"Unsupported operation: "+this.a}}
P.dt.prototype={
l:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aE.prototype={
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
P.hF.prototype={
l:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.i(t)}}
P.e5.prototype={
l:function(a){return"Expando:"+H.i(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.I(P.jK(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kf(b,"expando$values")
return s==null?null:H.kf(s,t)}}
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
if(t.p())throw H.e(H.mc())
return s},
u:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.lM("index"))
if(b<0)H.I(P.aZ(b,0,null,"index",null))
for(t=this.gB(this),s=0;t.p();){r=t.gt()
if(b===s)return r;++s}throw H.e(P.C(b,this,"index",null,s))},
l:function(a){return P.ma(this,"(",")")}}
P.cZ.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.aD.prototype={}
P.aX.prototype={
gw:function(a){return P.p.prototype.gw.call(this,this)},
l:function(a){return"null"}}
P.W.prototype={$isL:1,
$asL:function(){return[P.W]}}
P.p.prototype={constructor:P.p,$isp:1,
A:function(a,b){return this===b},
gw:function(a){return H.aY(this)},
l:function(a){return H.fr(this)},
gD:function(a){return new H.aF(H.iz(this),null)},
toString:function(){return this.l(this)}}
P.bN.prototype={}
P.t.prototype={$isL:1,
$asL:function(){return[P.t]}}
P.bO.prototype={
gk:function(a){return this.a.length},
l:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga8:function(){return this.a}}
W.l.prototype={}
W.dL.prototype={
l:function(a){return String(a)},
$isa:1}
W.dM.prototype={
l:function(a){return String(a)},
$isa:1}
W.a1.prototype={$isp:1}
W.dP.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a1]},
$isc:1,
$asc:function(){return[W.a1]},
$isq:1,
$asq:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.c7.prototype={}
W.aO.prototype={$isa:1,$isaO:1}
W.c8.prototype={
cE:function(a,b,c){var t=this.dD(a,b,P.mZ(c,null))
return t},
dD:function(a,b,c){return a.getContext(b,c)}}
W.dR.prototype={
aG:function(a){return P.iu(a.getContextAttributes())}}
W.aP.prototype={$isa:1,
gk:function(a){return a.length}}
W.dU.prototype={$isa:1}
W.A.prototype={$isp:1}
W.b9.prototype={
bz:function(a,b){var t,s
t=$.$get$jX()
s=t[b]
if(typeof s==="string")return s
s=this.dQ(a,b)
t[b]=s
return s},
dQ:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.lX()+b
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
W.ca.prototype={}
W.bq.prototype={
dU:function(a,b){return a.adoptNode(b)},
cF:function(a,b){return a.getElementById(b)},
eB:function(a,b){return a.querySelector(b)}}
W.cb.prototype={$isa:1}
W.dZ.prototype={
l:function(a){return String(a)}}
W.cc.prototype={
e9:function(a,b){return a.createHTMLDocument(b)}}
W.e_.prototype={
gaE:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gO:function(a){return a.z}}
W.cd.prototype={
gaE:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gO:function(a){return a.z}}
W.ce.prototype={
l:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.ga4(a))+" x "+H.i(this.ga3(a))},
A:function(a,b){var t
if(b==null)return!1
t=J.w(b)
if(!t.$isM)return!1
return a.left===t.gb3(b)&&a.top===t.gb8(b)&&this.ga4(a)===t.ga4(b)&&this.ga3(a)===t.ga3(b)},
gw:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga4(a)
q=this.ga3(a)
return W.kG(W.b6(W.b6(W.b6(W.b6(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga3:function(a){return a.height},
gb3:function(a){return a.left},
gb8:function(a){return a.top},
ga4:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isM:1,
$asM:function(){}}
W.e0.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]},
$isq:1,
$asq:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]}}
W.e1.prototype={
gk:function(a){return a.length}}
W.a3.prototype={
gdX:function(a){return new W.hz(a)},
l:function(a){return a.localName},
P:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.k4
if(t==null){t=H.G([],[W.db])
s=new W.dc(t)
C.a.i(t,W.kE(null))
C.a.i(t,W.kH())
$.k4=s
d=s}else d=t
t=$.k3
if(t==null){t=new W.dB(d)
$.k3=t
c=t}else{t.a=d
c=t}}if($.aB==null){t=document
s=t.implementation
s=(s&&C.I).e9(s,"")
$.aB=s
$.j6=s.createRange()
s=$.aB
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aB.head;(t&&C.J).U(t,r)}t=$.aB
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jr(s,"$isaO")}t=$.aB
if(!!this.$isaO)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aB.body;(t&&C.n).U(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.E(C.T,a.tagName)){t=$.j6;(t&&C.B).cG(t,q)
t=$.j6
p=(t&&C.B).e7(t,b)}else{q.innerHTML=b
p=$.aB.createDocumentFragment()
for(t=J.m(p);s=q.firstChild,s!=null;)t.U(p,s)}t=$.aB.body
if(q==null?t!=null:q!==t)J.lB(q)
c.bg(p)
C.p.dU(document,p)
return p},
e8:function(a,b,c){return this.P(a,b,c,null)},
cQ:function(a,b,c,d){a.textContent=null
this.U(a,this.P(a,b,c,d))},
cP:function(a,b){return this.cQ(a,b,null,null)},
ab:function(a,b){return a.getAttribute(b)},
dJ:function(a,b){return a.removeAttribute(b)},
$isa:1,
$isp:1,
$isa3:1,
$isj:1,
$isr:1,
geI:function(a){return a.tagName}}
W.is.prototype={
$1:function(a){return!!J.w(a).$isa3},
$S:function(){return{func:1,args:[,]}}}
W.k.prototype={$isp:1,$isk:1}
W.j.prototype={
dt:function(a,b,c,d){return a.addEventListener(b,H.c1(c,1),!1)},
$isp:1,
$isj:1}
W.a4.prototype={$isp:1}
W.eo.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]},
$isq:1,
$asq:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.ep.prototype={
gk:function(a){return a.length}}
W.et.prototype={
gk:function(a){return a.length}}
W.a5.prototype={$isp:1}
W.ci.prototype={}
W.ex.prototype={
gk:function(a){return a.length}}
W.bz.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.r]},
$isc:1,
$asc:function(){return[W.r]},
$isq:1,
$asq:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.cj.prototype={}
W.ey.prototype={
K:function(a,b){return a.send(b)}}
W.bA.prototype={}
W.eB.prototype={$isa:1,$isa3:1}
W.aU.prototype={$isp:1,$isk:1,$isaU:1}
W.eP.prototype={
l:function(a){return String(a)}}
W.eV.prototype={
gk:function(a){return a.length}}
W.eX.prototype={
eQ:function(a,b,c){return a.send(b,c)},
K:function(a,b){return a.send(b)}}
W.bD.prototype={}
W.a6.prototype={$isp:1}
W.eY.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]},
$isq:1,
$asq:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.Q.prototype={$isp:1,$isk:1,$isQ:1}
W.f7.prototype={$isa:1}
W.U.prototype={
ga7:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.aE("No elements"))
if(s>1)throw H.e(new P.aE("More than one element"))
return t.firstChild},
M:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.m(s),p=0;p<r;++p)q.U(s,t.firstChild)
return},
j:function(a,b,c){var t=this.a
J.l8(t,c,C.z.h(t.childNodes,b))},
gB:function(a){var t=this.a.childNodes
return new W.ch(t,t.length,-1,null,[H.an(t,"B",0)])},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){return C.z.h(this.a.childNodes,b)},
$asc:function(){return[W.r]},
$asd1:function(){return[W.r]},
$asb:function(){return[W.r]},
$asbK:function(){return[W.r]}}
W.r.prototype={
eC:function(a){var t=a.parentNode
if(t!=null)J.bm(t,a)},
l:function(a){var t=a.nodeValue
return t==null?this.cU(a):t},
U:function(a,b){return a.appendChild(b)},
dK:function(a,b){return a.removeChild(b)},
dL:function(a,b,c){return a.replaceChild(b,c)},
$isp:1,
$isj:1,
$isr:1,
gb5:function(a){return a.previousSibling}}
W.da.prototype={
b6:function(a){return a.previousNode()}}
W.bJ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.r]},
$isc:1,
$asc:function(){return[W.r]},
$isq:1,
$asq:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.fh.prototype={$isa:1}
W.fk.prototype={
gk:function(a){return a.length}}
W.a7.prototype={$isp:1,
gk:function(a){return a.length}}
W.fm.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]},
$isq:1,
$asq:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.fp.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fq.prototype={
K:function(a,b){return a.send(b)}}
W.dg.prototype={
e7:function(a,b){return a.createContextualFragment(b)},
cG:function(a,b){return a.selectNodeContents(b)}}
W.fA.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gO:function(a){return a.z}}
W.di.prototype={
K:function(a,b){return a.send(b)}}
W.fC.prototype={
gk:function(a){return a.length}}
W.fG.prototype={$isa:1}
W.a8.prototype={$isp:1,$isj:1}
W.fH.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]},
$isq:1,
$asq:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.a9.prototype={$isp:1}
W.fJ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]},
$isq:1,
$asq:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.aa.prototype={$isp:1,
gk:function(a){return a.length}}
W.fO.prototype={
h:function(a,b){return this.bG(a,b)},
aA:function(a,b){var t,s
for(t=0;!0;++t){s=this.dG(a,t)
if(s==null)return
b.$2(s,this.bG(a,s))}},
gk:function(a){return a.length},
bG:function(a,b){return a.getItem(b)},
dG:function(a,b){return a.key(b)}}
W.Y.prototype={$isp:1}
W.ak.prototype={}
W.dm.prototype={
P:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aI(a,b,c,d)
t=W.lY("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.U(s).M(0,new W.U(t))
return s}}
W.fW.prototype={
P:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aI(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.G.P(t.createElement("table"),b,c,d)
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
W.fX.prototype={
P:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aI(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.G.P(t.createElement("table"),b,c,d)
t.toString
t=new W.U(t)
r=t.ga7(t)
s.toString
r.toString
new W.U(s).M(0,new W.U(r))
return s}}
W.bP.prototype={$isbP:1}
W.ab.prototype={$isp:1,$isj:1}
W.Z.prototype={$isp:1,$isj:1}
W.h_.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.Z]},
$isc:1,
$asc:function(){return[W.Z]},
$isq:1,
$asq:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.h0.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]},
$isq:1,
$asq:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.h1.prototype={
gk:function(a){return a.length}}
W.ac.prototype={$isp:1}
W.b_.prototype={$isp:1,$isk:1,$isb_:1}
W.h5.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]},
$isq:1,
$asq:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.h6.prototype={
gk:function(a){return a.length}}
W.bg.prototype={}
W.h8.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gO:function(a){return a.z}}
W.dr.prototype={
b6:function(a){return a.previousNode()}}
W.aG.prototype={}
W.hd.prototype={
l:function(a){return String(a)},
$isa:1}
W.hf.prototype={
gk:function(a){return a.length}}
W.hi.prototype={
gk:function(a){return a.length}}
W.hj.prototype={
K:function(a,b){return a.send(b)}}
W.b1.prototype={
geb:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.v("deltaY is not supported"))},
$isp:1,
$isk:1,
$isQ:1,
$isb1:1}
W.bR.prototype={
gdW:function(a){var t,s
t=P.W
s=new P.ax(0,$.D,null,[t])
this.dC(a)
this.dM(a,W.kL(new W.hl(new P.id(s,[t]))))
return s},
dM:function(a,b){return a.requestAnimationFrame(H.c1(b,1))},
dC:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.hl.prototype={
$1:function(a){this.a.e3(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hm.prototype={$isa:1}
W.b2.prototype={$isa:1}
W.hu.prototype={
l:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
A:function(a,b){var t,s,r
if(b==null)return!1
t=J.w(b)
if(!t.$isM)return!1
s=a.left
r=t.gb3(b)
if(s==null?r==null:s===r){s=a.top
r=t.gb8(b)
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
return W.kG(W.b6(W.b6(W.b6(W.b6(0,t),s),r),q))},
$isM:1,
$asM:function(){},
ga3:function(a){return a.height},
gb3:function(a){return a.left},
gb8:function(a){return a.top},
ga4:function(a){return a.width}}
W.dw.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[P.M]},
$isc:1,
$asc:function(){return[P.M]},
$isq:1,
$asq:function(){return[P.M]},
$isb:1,
$asb:function(){return[P.M]}}
W.hw.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.A]},
$isc:1,
$asc:function(){return[W.A]},
$isq:1,
$asq:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.hx.prototype={$isa:1}
W.hy.prototype={
ga3:function(a){return a.height},
ga4:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hP.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]},
$isq:1,
$asq:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.hQ.prototype={$isa:1}
W.dz.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.r]},
$isc:1,
$asc:function(){return[W.r]},
$isq:1,
$asq:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.i7.prototype={$isa:1}
W.ia.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]},
$isq:1,
$asq:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.ib.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.Y]},
$isc:1,
$asc:function(){return[W.Y]},
$isq:1,
$asq:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.ij.prototype={$isa:1}
W.ik.prototype={$isa:1}
W.hs.prototype={
aA:function(a,b){var t,s,r,q,p,o
for(t=this.gG(this),s=t.length,r=this.a,q=J.m(r),p=0;p<t.length;t.length===s||(0,H.H)(t),++p){o=t[p]
b.$2(o,q.ab(r,o))}},
gG:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.G([],[P.t])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.i(s,p.name)}return s},
gdE:function(){return this.a}}
W.hz.prototype={
h:function(a,b){return J.j3(this.a,b)},
gk:function(a){return this.gG(this).length}}
W.hC.prototype={
ex:function(a,b,c,d){return W.al(this.a,this.b,a,!1,H.aK(this,0))}}
W.jj.prototype={}
W.hD.prototype={
dS:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.l7(r,this.c,t,!1)}},
dm:function(a,b,c,d,e){this.dS()}}
W.hE.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bU.prototype={
a9:function(a){return $.$get$kF().E(0,W.br(a))},
Y:function(a,b,c){var t,s,r
t=W.br(a)
s=$.$get$jk()
r=s.h(0,H.i(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dn:function(a){var t,s
t=$.$get$jk()
if(t.gan(t)){for(s=0;s<262;++s)t.j(0,C.S[s],W.n5())
for(s=0;s<12;++s)t.j(0,C.r[s],W.n6())}}}
W.B.prototype={
gB:function(a){return new W.ch(a,this.gk(a),-1,null,[H.an(a,"B",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.dc.prototype={
a9:function(a){return C.a.bS(this.a,new W.f9(a))},
Y:function(a,b,c){return C.a.bS(this.a,new W.f8(a,b,c))}}
W.f9.prototype={
$1:function(a){return a.a9(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.f8.prototype={
$1:function(a){return a.Y(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.bX.prototype={
a9:function(a){return this.a.E(0,W.br(a))},
Y:function(a,b,c){var t,s
t=W.br(a)
s=this.c
if(s.E(0,H.i(t)+"::"+b))return this.d.dV(c)
else if(s.E(0,"*::"+b))return this.d.dV(c)
else{s=this.b
if(s.E(0,H.i(t)+"::"+b))return!0
else if(s.E(0,"*::"+b))return!0
else if(s.E(0,H.i(t)+"::*"))return!0
else if(s.E(0,"*::*"))return!0}return!1},
dr:function(a,b,c,d){var t,s,r
this.a.M(0,c)
t=b.aF(0,new W.i8())
s=b.aF(0,new W.i9())
this.b.M(0,t)
r=this.c
r.M(0,C.U)
r.M(0,s)}}
W.i8.prototype={
$1:function(a){return!C.a.E(C.r,a)},
$S:function(){return{func:1,args:[,]}}}
W.i9.prototype={
$1:function(a){return C.a.E(C.r,a)},
$S:function(){return{func:1,args:[,]}}}
W.ie.prototype={
Y:function(a,b,c){if(this.cX(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.j3(a,"template")==="")return this.e.E(0,b)
return!1}}
W.ig.prototype={
$1:function(a){return"TEMPLATE::"+H.i(a)},
$S:function(){return{func:1,args:[,]}}}
W.ic.prototype={
a9:function(a){var t=J.w(a)
if(!!t.$isbM)return!1
t=!!t.$isK
if(t&&W.br(a)==="foreignObject")return!1
if(t)return!0
return!1},
Y:function(a,b,c){if(b==="is"||C.i.bl(b,"on"))return!1
return this.a9(a)}}
W.ch.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbI(J.bl(this.a,t))
this.c=t
return!0}this.sbI(null)
this.c=s
return!1},
gt:function(){return this.d},
sbI:function(a){this.d=a}}
W.db.prototype={}
W.i6.prototype={}
W.dB.prototype={
bg:function(a){new W.ih(this).$2(a,null)},
ay:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bm(t,a)}else J.bm(b,a)},
dP:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lr(a)
r=J.j3(s.gdE(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.S(n)}p="element unprintable"
try{p=J.aA(a)}catch(n){H.S(n)}try{o=W.br(a)
this.dO(a,b,t,p,o,s,r)}catch(n){if(H.S(n) instanceof P.af)throw n
else{this.ay(a,b)
window
m="Removing corrupted element "+H.i(p)
if(typeof console!="undefined")console.warn(m)}}},
dO:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.ay(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a9(a)){this.ay(a,b)
window
t="Removing disallowed element <"+H.i(e)+"> from "+J.aA(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.Y(a,"is",g)){this.ay(a,b)
window
t="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gG(f)
s=H.G(t.slice(0),[H.aK(t,0)])
for(r=f.gG(f).length-1,t=f.a,q=J.m(t);r>=0;--r){p=s[r]
if(!this.a.Y(a,J.lE(p),q.ab(t,p))){window
o="Removing disallowed attribute <"+H.i(e)+" "+p+'="'+H.i(q.ab(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.ab(t,p)
q.dJ(t,p)}}if(!!J.w(a).$isbP)this.bg(a.content)}}
W.ih.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.dP(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bm(r,a)}else J.bm(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.ls(t)}catch(q){H.S(q)
r=t
J.bm(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.r,W.r]}}}
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
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.cq.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cn.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.cx.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
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
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.cs.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.ct.prototype={$isc:1,
$asc:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]}}
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
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.cH.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.cR.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cS.prototype={$isc:1,
$asc:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.cP.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
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
$asc:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]}}
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
P.it.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.t,,]}}}
P.hZ.prototype={}
P.M.prototype={$asM:null}
P.dK.prototype={$isa:1}
P.aN.prototype={$isa:1}
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
P.aC.prototype={$isa:1}
P.ez.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.as.prototype={$isp:1}
P.eK.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.a0(a,b)},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
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
P.at.prototype={$isp:1}
P.fa.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.a0(a,b)},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
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
P.bM.prototype={$isa:1,$isbM:1}
P.fT.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.a0(a,b)},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a0:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]}}
P.K.prototype={
P:function(a,b,c,d){var t,s,r,q,p,o
t=H.G([],[W.db])
C.a.i(t,W.kE(null))
C.a.i(t,W.kH())
C.a.i(t,new W.ic())
c=new W.dB(new W.dc(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.n).e8(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.U(q)
o=t.ga7(t)
for(t=J.m(p);r=o.firstChild,r!=null;)t.U(p,r)
return p},
$isa:1,
$isK:1}
P.fU.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fV.prototype={$isa:1}
P.dn.prototype={}
P.fZ.prototype={$isa:1}
P.bQ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.au.prototype={$isp:1}
P.h7.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.a0(a,b)},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a0:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.he.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hg.prototype={$isa:1}
P.hh.prototype={$isa:1}
P.bT.prototype={$isa:1}
P.i3.prototype={$isa:1}
P.i4.prototype={$isa:1}
P.i5.prototype={$isa:1}
P.cA.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.cm.prototype={$isc:1,
$asc:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]}}
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
$asc:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]}}
P.cT.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.dO.prototype={
gk:function(a){return a.length}}
P.fy.prototype={
bQ:function(a,b){return a.activeTexture(b)},
bT:function(a,b,c){return a.attachShader(b,c)},
bU:function(a,b,c){return a.bindBuffer(b,c)},
bV:function(a,b,c){return a.bindFramebuffer(b,c)},
bW:function(a,b,c){return a.bindTexture(b,c)},
bX:function(a,b){return a.blendEquation(b)},
bY:function(a,b,c){return a.blendFunc(b,c)},
bZ:function(a,b,c,d){return a.bufferData(b,c,d)},
c_:function(a,b){return a.clear(b)},
c0:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c1:function(a,b){return a.compileShader(b)},
c2:function(a){return a.createBuffer()},
c3:function(a){return a.createProgram()},
c4:function(a,b){return a.createShader(b)},
c6:function(a,b){return a.depthMask(b)},
c7:function(a,b){return a.disable(b)},
c8:function(a,b,c,d){return a.drawArrays(b,c,d)},
c9:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ca:function(a,b){return a.enable(b)},
cb:function(a,b){return a.enableVertexAttribArray(b)},
aG:function(a){return P.iu(a.getContextAttributes())},
ba:function(a,b){return a.getProgramInfoLog(b)},
bb:function(a,b,c){return a.getProgramParameter(b,c)},
bc:function(a,b){return a.getShaderInfoLog(b)},
bd:function(a,b,c){return a.getShaderParameter(b,c)},
be:function(a,b,c){return a.getUniformLocation(b,c)},
cd:function(a,b){return a.linkProgram(b)},
bj:function(a,b,c){return a.shaderSource(b,c)},
bm:function(a,b,c,d){return a.stencilFunc(b,c,d)},
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
dY:function(a,b){return a.beginTransformFeedback(b)},
e0:function(a,b){return a.bindVertexArray(b)},
ea:function(a){return a.createVertexArray()},
eh:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ei:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
ej:function(a){return a.endTransformFeedback()},
eN:function(a,b,c,d){this.dR(a,b,c,d)
return},
dR:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eO:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bQ:function(a,b){return a.activeTexture(b)},
bT:function(a,b,c){return a.attachShader(b,c)},
bU:function(a,b,c){return a.bindBuffer(b,c)},
bV:function(a,b,c){return a.bindFramebuffer(b,c)},
bW:function(a,b,c){return a.bindTexture(b,c)},
bX:function(a,b){return a.blendEquation(b)},
bY:function(a,b,c){return a.blendFunc(b,c)},
bZ:function(a,b,c,d){return a.bufferData(b,c,d)},
c_:function(a,b){return a.clear(b)},
c0:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c1:function(a,b){return a.compileShader(b)},
c2:function(a){return a.createBuffer()},
c3:function(a){return a.createProgram()},
c4:function(a,b){return a.createShader(b)},
c6:function(a,b){return a.depthMask(b)},
c7:function(a,b){return a.disable(b)},
c8:function(a,b,c,d){return a.drawArrays(b,c,d)},
c9:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ca:function(a,b){return a.enable(b)},
cb:function(a,b){return a.enableVertexAttribArray(b)},
aG:function(a){return P.iu(a.getContextAttributes())},
ba:function(a,b){return a.getProgramInfoLog(b)},
bb:function(a,b,c){return a.getProgramParameter(b,c)},
bc:function(a,b){return a.getShaderInfoLog(b)},
bd:function(a,b,c){return a.getShaderParameter(b,c)},
be:function(a,b,c){return a.getUniformLocation(b,c)},
cd:function(a,b){return a.linkProgram(b)},
bj:function(a,b,c){return a.shaderSource(b,c)},
bm:function(a,b,c,d){return a.stencilFunc(b,c,d)},
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
P.ii.prototype={$isa:1}
P.fK.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return P.iu(this.dF(a,b))},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
dF:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.aD]},
$isb:1,
$asb:function(){return[P.aD]}}
P.cB.prototype={$isc:1,
$asc:function(){return[P.aD]},
$isb:1,
$asb:function(){return[P.aD]}}
P.cO.prototype={$isc:1,
$asc:function(){return[P.aD]},
$isb:1,
$asb:function(){return[P.aD]}}
B.iQ.prototype={
$1:function(a){$.$get$iv().j(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aU]}}}
B.iR.prototype={
$1:function(a){$.$get$iv().j(0,a.which,null)},
$S:function(){return{func:1,args:[W.aU]}}}
B.iS.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.mX=t
$.mY=C.b.ac(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.ju=s-C.b.H(window.innerWidth,2)
$.kY=-(t-C.b.H(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.Q]}}}
B.iT.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.c4=t-C.b.H(window.innerWidth,2)
$.c5=-(s-C.b.H(window.innerHeight,2))
if(a.button===2)$.$get$c2().j(0,"right",!0)
else $.$get$c2().j(0,"left",!0)},
$S:function(){return{func:1,args:[W.Q]}}}
B.iU.prototype={
$1:function(a){if(a.button===2)$.$get$c2().j(0,"right",null)
else $.$get$c2().j(0,"left",null)},
$S:function(){return{func:1,args:[W.Q]}}}
B.fb.prototype={
da:function(a,b,c,d){var t
d.toString
W.al(d,W.n4().$1(d),new B.fc(this),!1,W.b1)
W.al(d,"mousemove",new B.fd(this),!1,W.Q)
t=W.b_
W.al(d,"touchstart",new B.fe(),!1,t)
W.al(d,"touchmove",new B.ff(this),!1,t)
B.nk(null)}}
B.fc.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.at.geb(a)*r.k3
if(C.c.ac(r.fy,t)>0)r.fy=H.ad(C.c.ac(r.fy,t))}catch(q){s=H.S(q)
P.ao(s)}},
$S:function(){return{func:1,args:[W.b1]}}}
B.fd.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.ad(t.go+C.b.ac($.ju,$.c4)*0.01)
s=t.id
r=$.c5
q=$.kY
t.id=H.ad(s+(r-q)*0.01)
$.c4=$.ju
$.c5=q}},
$S:function(){return{func:1,args:[W.Q]}}}
B.fe.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.aa(t.clientX)
C.c.aa(t.clientY)
$.c4=s
C.c.aa(t.clientX)
$.c5=C.c.aa(t.clientY)},
$S:function(){return{func:1,args:[W.b_]}}}
B.ff.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.aa(t.clientX)
t=C.c.aa(t.clientY)
r=this.a
r.go=H.ad(r.go+C.b.ac(s,$.c4)*0.01)
r.id=H.ad(r.id+($.c5-t)*0.01)
$.c4=s
$.c5=t},
$S:function(){return{func:1,args:[W.b_]}}}
G.eZ.prototype={}
G.ds.prototype={
T:function(a,b){var t=this.d
if(H.ay(!t.I(0,a)))H.aI("uniform "+a+" already set")
t.j(0,a,b)},
aN:function(){return this.d},
l:function(a){var t,s,r,q
t=H.G(["{"+new H.aF(H.iz(this),null).l(0)+"}["+this.a+"]"],[P.t])
for(s=this.d,r=s.gG(s),r=r.gB(r);r.p();){q=r.gt()
C.a.i(t,H.i(q)+": "+H.i(s.h(0,q)))}return C.a.ao(t,"\n")}}
G.dQ.prototype={
bf:function(a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
t=J.w(r)
o=!!t.$isaH
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
cc:function(a,b,c){J.lo(this.a,b)
if(c>0)J.lK(this.a,b,c)}}
G.eu.prototype={}
G.y.prototype={}
G.by.prototype={}
G.bb.prototype={
a2:function(a){var t=this.e
H.d(!t.I(0,a))
H.d(C.i.bl(a,"a"))
switch($.$get$a_().h(0,a).a){case"vec2":t.j(0,a,H.G([],[T.u]))
break
case"vec3":t.j(0,a,H.G([],[T.h]))
break
case"vec4":t.j(0,a,H.G([],[T.aH]))
break
case"float":t.j(0,a,H.G([],[P.O]))
break
case"uvec4":t.j(0,a,H.G([],[[P.b,P.o]]))
break
default:if(H.ay(!1))H.aI("unknown type for "+a)}},
d_:function(a){var t,s,r
H.d(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.i(s,new G.by(t,t+1,t+2,t+3))},
bp:function(a){var t,s,r,q,p
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.H)(a),++r){q=a[r]
p=new T.h(new Float32Array(3))
p.v(q)
C.a.i(s,p)}},
d0:function(a){var t,s,r,q,p
H.d(!0)
t=this.d
s=t.length
C.a.i(this.b,new G.y(s,s+1,s+2))
for(r=0;r<3;++r){q=a[r]
p=new T.h(new Float32Array(3))
p.v(q)
C.a.i(t,p)}},
aK:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.H)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.i(t,new T.u(o))}},
aL:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.H)(b),++q){p=b[q]
o=new T.h(new Float32Array(3))
o.v(p)
r.i(t,o)}},
d3:function(){var t,s,r,q,p,o,n,m,l,k
t=this.b
H.d(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.G(r,[P.o])
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
d5:function(a,b){var t,s,r,q,p,o,n,m
t=a*b
H.d(this.d.length===t)
s=[]
this.e.j(0,"aTexUV",s)
for(r=b-1,q=a-1,p=0;p<b;++p)for(o=p/r,n=0;n<a;++n){m=new Float32Array(2)
m[0]=o
m[1]=n/q
C.a.i(s,new T.u(m))}H.d(s.length===t)},
d4:function(a,b,c){var t,s,r,q,p,o,n,m,l
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
C.a.i(t,new G.by(p+m,l+m,l+n,p+n))
n=m}q=o}},
l:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gG(s),r=r.gB(r);r.p();){q=r.gt()
p=$.$get$a_().h(0,q).a
C.a.i(t,H.i(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.ao(t," ")}}
G.dq.prototype={}
G.dp.prototype={}
G.eU.prototype={
d9:function(a){this.T("cDepthTest",!0)
this.T("cDepthWrite",!0)
this.T("cBlendEquation",$.$get$jL())
this.T("cStencilFunc",$.$get$kl())}}
G.eW.prototype={
bq:function(a,b,c){var t,s
if(C.i.aO(a,0)===105){if(H.ay(C.b.aJ(b.length,c)===this.z))H.aI("ChangeAttribute "+this.z)}else{t=C.b.aJ(b.length,c)
if(H.ay(t===(this.ch.length/3|0)))H.aI("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.j(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dG(t.a,34962,s)
J.jA(t.a,34962,b,35048)},
d6:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
ad:function(a,b,c){var t,s,r,q,p,o
t=J.jw(a,0)===105
if(t&&this.z===0)this.z=C.b.aJ(b.length,c)
s=this.r
r=this.d
s.j(0,a,J.j_(r.a))
this.bq(a,b,c)
q=$.$get$a_().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.ay(p.I(0,a)))H.aI("unexpected attribute "+a)
o=p.h(0,a)
J.dH(r.a,this.e)
r.cc(0,o,t?1:0)
s=s.h(0,a)
p=q.bs()
J.dG(r.a,34962,s)
J.jI(r.a,o,p,5126,!1,0,0)},
l:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gG(t),r=r.gB(r);r.p();){q=r.gt()
C.a.i(s,H.i(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.ao(s,"  ")},
saT:function(a){this.cx=a}}
G.fg.prototype={
aN:function(){var t,s
t=this.z
this.x.bf(t)
s=this.Q
s.v(this.y)
s.b4(0,t)
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
q.bi()
q.L(0,0,2/r)
q.L(1,1,2/l)
q.L(2,2,-2/k)
q.L(0,3,-(t+s)/r)
q.L(1,3,-(o+p)/l)
q.L(2,3,-(m+n)/k)
q.L(3,3,1)},
aM:function(a,b){var t=C.b.b9(a,b)
if(this.ch===t)return
this.ch=t
this.ae()}}
G.fj.prototype={
aM:function(a,b){var t=C.b.b9(a,b)
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
t.bi()
t.L(0,0,1/(p*s))
t.L(1,1,1/p)
t.L(2,2,(q+r)/o)
t.L(3,2,-1)
t.L(2,3,2*r*q/o)},
aN:function(){var t,s,r,q,p
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
t.bf(p)
t=this.cx
t.v(this.db)
t.b4(0,p)
s.j(0,"uPerspectiveViewMatrix",t)
return s}}
G.fx.prototype={
dh:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gk(t)===s.gk(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gG(s),s=s.gB(s);s.p();){q=s.gt()
if(!t.I(0,q))C.a.i(r,q)}for(t=this.x,s=new P.bV(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.E(0,q))C.a.i(r,q)}return r},
dk:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gG(b),s=s.gB(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gt()
switch(J.jw(n,0)){case 117:if(q.I(0,n)){m=b.h(0,n)
if(p.I(0,n))H.iO("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.j(0,n,a)
l=$.$get$a_().h(0,n)
if(l==null)H.I("unknown "+n)
H.d(q.I(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.j4(r.a,k,m)
else if(!!J.w(m).$isk9)J.lI(r.a,k,m)
break
case"float":if(l.c===0)J.lG(r.a,k,m)
else if(!!J.w(m).$iser)J.lH(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aL(m,"$isE").a
J.jH(r.a,k,!1,j)}else if(!!J.w(m).$iser)J.jH(r.a,k,!1,m)
else if(H.ay(!1))H.aI("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.aL(m,"$isaj").a
J.jG(r.a,k,!1,j)}else if(!!J.w(m).$iser)J.jG(r.a,k,!1,m)
else if(H.ay(!1))H.aI("bad unform: "+n)
break
case"vec4":j=l.c
i=r.a
if(j===0)J.jF(i,k,H.aL(m,"$isaH").a)
else J.jF(i,k,m)
break
case"vec3":j=l.c
i=r.a
if(j===0)J.jE(i,k,H.aL(m,"$ish").a)
else J.jE(i,k,m)
break
case"vec2":j=l.c
i=r.a
if(j===0)J.jD(i,k,H.aL(m,"$isu").a)
else J.jD(i,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a5(33984,this.ch)
J.jx(r.a,j)
j=H.aL(m,"$ismu").d7()
J.jz(r.a,3553,j)
j=this.ch
J.j4(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.a5(33984,this.ch)
J.jx(r.a,j)
j=H.aL(m,"$ismu").d7()
J.jz(r.a,34067,j)
j=this.ch
J.j4(r.a,k,j)
this.ch=this.ch+1
break
default:H.iO("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":j=J.J(m,!0)
i=r.a
if(j)J.dI(i,2929)
else J.j0(i,2929)
break
case"cStencilFunc":H.aL(m,"$isdq")
j=m.a
i=r.a
if(j===1281)J.j0(i,2960)
else{J.dI(i,2960)
i=m.b
h=m.c
J.lD(r.a,j,i,h)}break
case"cDepthWrite":J.li(r.a,m)
break
case"cBlendEquation":H.aL(m,"$isdp")
j=m.a
i=r.a
if(j===1281)J.j0(i,3042)
else{J.dI(i,3042)
i=m.b
h=m.c
J.lc(r.a,i,h)
J.lb(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aQ(1000*(s-new P.bp(t,!1).a)).l(0)},
d2:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.lJ(t.a,this.r)
this.ch=0
this.z.Z(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.H)(b),++r){q=b[r]
this.dk(q.a,q.aN())}s=this.Q
s.Z(0)
for(p=a.cy,p=p.gG(p),p=p.gB(p);p.p();)s.i(0,p.gt())
o=this.dh()
if(o.length!==0)P.ao("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.i(o)))
J.dH(a.d.a,a.e)
n=this.e.f.length>0
s=a.f
p=a.d6()
m=a.Q
l=a.z
if(n)J.l9(t.a,s)
if(m!==-1){k=t.a
if(l>1)J.lm(k,s,p,m,0,l)
else J.ll(k,s,p,m,0)}else{m=t.a
if(l>1)J.lk(m,s,0,p,l)
else J.lj(m,s,0,p)}if(n)J.lp(t.a)},
dd:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.H)(t),++o){n=t[o]
r.j(0,n,J.jC(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.H)(t),++o){n=t[o]
r.j(0,n,J.jC(q.a,p,n))}}}
G.z.prototype={
bs:function(){switch(this.a){case"float":return 1
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
s.j(0,q,this.r);++this.r}C.a.bk(t)},
bo:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.H)(a),++r){q=a[r]
if(H.ay($.$get$a_().I(0,q)))H.aI("missing uniform "+q)
H.d(!C.a.E(s,q))
C.a.i(s,q)}C.a.bk(s)},
de:function(a,b){H.d(this.b==null)
this.b=this.dl(!0,a,b)},
bt:function(a){return this.de(a,null)},
dl:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
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
G.fI.prototype={
a6:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
R.fM.prototype={
dq:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.mD("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.u).bz(r,"float")
r.setProperty(p,"left","")
p=C.u.bz(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.o.U(t,s)}return t},
df:function(a,b,c){var t,s,r
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
r=this.dq(b,c,90,30)
this.d=r
J.iY(this.a,r)
t=t.createElement("div")
this.c=t
J.iY(this.a,t)}}
R.fN.prototype={
dj:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.w.eM(s,2)+" fps"
t=this.c;(t&&C.o).cP(t,b)
r=C.b.H(30*C.w.e1(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.o).U(t,q)},
di:function(a){return this.dj(a,"")}}
A.aW.prototype={
l:function(a){return"NODE["+this.a+"]"}}
A.bL.prototype={}
A.fw.prototype={
d1:function(a){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.r
r=this.x
q=this.z
p=this.Q
o=t.a
t=t.b
J.la(o.a,36160,t)
H.d(q>0&&p>0)
J.lL(o.a,r,this.y,q,p)
if(s!==0)J.ld(o.a,s)
for(t=this.f,s=t.length,n=0;n<t.length;t.length===s||(0,H.H)(t),++n){m=t[n]
l=m.e
C.a.i(l,new G.ds(P.P(),"transforms",!1,!0))
k=new T.E(new Float32Array(16))
k.F()
for(r=m.f,q=r.length,p=m.d,j=0;j<r.length;r.length===q||(0,H.H)(r),++j)A.kQ(p,r[j],k,a,l)
l.pop()}},
br:function(){return this.d1(null)},
dc:function(a,b,c){if(this.d==null)this.d=new G.eu(this.e,null,null,null,null)}}
B.fF.prototype={
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
$S:function(){return{func:1,v:true,args:[P.O,T.h]}}}
A.iA.prototype={
$2:function(a,b){var t=536870911&a+J.aq(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.o,P.p]}}}
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
e6:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
T.E.prototype={
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
if(b instanceof T.E){t=this.a
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
return new T.aH(t)},
bi:function(){var t=this.a
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
b4:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.u.prototype={
l:function(a){var t=this.a
return"["+H.i(t[0])+","+H.i(t[1])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.u){t=this.a
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
b2:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
c5:function(a){var t,s,r,q,p,o,n,m
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
az:function(a,b){var t,s
t=a.a
s=this.a
s[0]=s[0]+t[0]*b
s[1]=s[1]+t[1]*b
s[2]=s[2]+t[2]*b},
at:function(a){var t,s
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
T.aH.prototype={
l:function(a){var t=this.a
return H.i(t[0])+","+H.i(t[1])+","+H.i(t[2])+","+H.i(t[3])},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aH){t=this.a
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
K.iM.prototype={
$1:function(a){var t,s,r,q,p
t=this.a
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.ao("size change "+H.i(s)+" "+H.i(r))
t=C.b.H(s,2)
this.d.aM(t,r)
this.b.aM(t,r)
q=this.c
q.z=t
q.Q=r
p=this.e
p.z=t
p.Q=r
q.x=t},
$S:function(){return{func:1,v:true,args:[W.k]}}}
K.iL.prototype={
$1:function(b3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
t=this.a
t.a=b3+0
s=this.c
r=s.k4
if(r.h(0,37)!=null)s.go=H.ad(s.go+0.03)
else if(r.h(0,39)!=null)s.go=H.ad(s.go-0.03)
if(r.h(0,38)!=null)s.id=H.ad(s.id+0.03)
else if(r.h(0,40)!=null)s.id=H.ad(s.id-0.03)
if(r.h(0,33)!=null)s.fy=H.ad(s.fy*0.99)
else if(r.h(0,34)!=null)s.fy=H.ad(s.fy*1.01)
if(r.h(0,32)!=null){s.go=0
s.id=0}r=H.ad(C.c.e2(s.id,-1.4707963267948965,1.4707963267948965))
s.id=r
q=s.fy
p=s.go
o=q*Math.cos(r)
s.a6(o*Math.cos(p),q*Math.sin(r),o*Math.sin(p))
p=s.k2
r=s.d.a
q=p.a
r[12]=r[12]+q[0]
r[13]=r[13]+q[1]
r[14]=r[14]+q[2]
q=r[12]
n=r[13]
m=r[14]
l=new T.h(new Float32Array(H.f(3)))
l.q(0,1,0)
k=s.e
j=k.a
j[0]=r[12]
j[1]=r[13]
j[2]=r[14]
j=new Float32Array(H.f(3))
i=new T.h(j)
i.v(k)
i.at(p)
i.C(0)
h=l.c5(i)
h.C(0)
g=i.c5(h)
g.C(0)
p=h.b2(k)
f=g.b2(k)
k=i.b2(k)
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
m=Math.sqrt(m.gR())
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
this.d.br()
this.e.br()
C.au.gdW(window).ck(this)
this.b.di(t.a)},
$S:function(){return{func:1,v:true,args:[P.W]}}}
J.a.prototype.cU=J.a.prototype.l
J.bB.prototype.cW=J.bB.prototype.l
P.X.prototype.cV=P.X.prototype.aF
W.a3.prototype.aI=W.a3.prototype.P
W.bX.prototype.cX=W.bX.prototype.Y;(function installTearOffs(){installTearOff(H.b4.prototype,"gew",0,0,0,null,["$0"],["aC"],0)
installTearOff(H.am.prototype,"gcH",0,0,0,null,["$1"],["N"],2)
installTearOff(H.b3.prototype,"ged",0,0,0,null,["$1"],["a_"],2)
installTearOff(P,"mT",1,0,0,null,["$1"],["mA"],1)
installTearOff(P,"mU",1,0,0,null,["$1"],["mB"],1)
installTearOff(P,"mV",1,0,0,null,["$1"],["mC"],1)
installTearOff(P,"kP",1,0,0,null,["$0"],["mR"],0)
installTearOff(P.ax.prototype,"gdv",0,0,0,null,["$2","$1"],["au","dw"],5)
installTearOff(P,"n_",1,0,0,null,["$2"],["lS"],6)
installTearOff(W,"n4",1,0,0,null,["$1"],["lZ"],7)
installTearOff(W,"n5",1,0,0,null,["$4"],["mG"],4)
installTearOff(W,"n6",1,0,0,null,["$4"],["mH"],4)
installTearOff(W.da.prototype,"gb5",0,1,0,null,["$0"],["b6"],3)
installTearOff(W.dr.prototype,"gb5",0,1,0,null,["$0"],["b6"],3)
installTearOff(K,"kZ",1,0,0,null,["$0"],["ne"],0)})();(function inheritance(){inherit(P.p,null)
var t=P.p
inherit(H.ja,t)
inherit(J.a,t)
inherit(J.dN,t)
inherit(P.X,t)
inherit(H.d2,t)
inherit(P.cZ,t)
inherit(H.cg,t)
inherit(H.b8,t)
inherit(H.hX,t)
inherit(H.b4,t)
inherit(H.hA,t)
inherit(H.b5,t)
inherit(H.hW,t)
inherit(H.ht,t)
inherit(H.bf,t)
inherit(H.h2,t)
inherit(H.ar,t)
inherit(H.am,t)
inherit(H.b3,t)
inherit(H.fv,t)
inherit(H.h9,t)
inherit(P.ba,t)
inherit(H.dA,t)
inherit(H.aF,t)
inherit(H.ah,t)
inherit(H.eL,t)
inherit(H.eN,t)
inherit(P.hv,t)
inherit(P.dx,t)
inherit(P.ax,t)
inherit(P.dv,t)
inherit(P.fP,t)
inherit(P.fQ,t)
inherit(P.b7,t)
inherit(P.il,t)
inherit(P.fE,t)
inherit(P.hU,t)
inherit(P.bV,t)
inherit(P.bK,t)
inherit(P.x,t)
inherit(P.hV,t)
inherit(P.az,t)
inherit(P.L,t)
inherit(P.bp,t)
inherit(P.W,t)
inherit(P.aQ,t)
inherit(P.dl,t)
inherit(P.hF,t)
inherit(P.e5,t)
inherit(P.b,t)
inherit(P.aD,t)
inherit(P.aX,t)
inherit(P.bN,t)
inherit(P.t,t)
inherit(P.bO,t)
inherit(W.dV,t)
inherit(W.hs,t)
inherit(W.bU,t)
inherit(W.B,t)
inherit(W.dc,t)
inherit(W.bX,t)
inherit(W.ic,t)
inherit(W.ch,t)
inherit(W.db,t)
inherit(W.i6,t)
inherit(W.dB,t)
inherit(P.hZ,t)
inherit(G.eZ,t)
inherit(G.dT,t)
inherit(G.eu,t)
inherit(G.y,t)
inherit(G.by,t)
inherit(G.bb,t)
inherit(G.dq,t)
inherit(G.dp,t)
inherit(G.z,t)
inherit(G.dj,t)
inherit(R.fM,t)
inherit(T.aj,t)
inherit(T.E,t)
inherit(T.u,t)
inherit(T.h,t)
inherit(T.aH,t)
t=J.a
inherit(J.eG,t)
inherit(J.eH,t)
inherit(J.bB,t)
inherit(J.aR,t)
inherit(J.bc,t)
inherit(J.aS,t)
inherit(H.bE,t)
inherit(H.be,t)
inherit(W.j,t)
inherit(W.a1,t)
inherit(W.c7,t)
inherit(W.dR,t)
inherit(W.A,t)
inherit(W.ck,t)
inherit(W.dX,t)
inherit(W.dY,t)
inherit(W.dZ,t)
inherit(W.cc,t)
inherit(W.cd,t)
inherit(W.ce,t)
inherit(W.ct,t)
inherit(W.e1,t)
inherit(W.k,t)
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
inherit(W.fO,t)
inherit(W.Y,t)
inherit(W.cC,t)
inherit(W.h1,t)
inherit(W.ac,t)
inherit(W.cu,t)
inherit(W.h6,t)
inherit(W.dr,t)
inherit(W.hd,t)
inherit(W.hi,t)
inherit(W.hu,t)
inherit(W.cl,t)
inherit(W.cz,t)
inherit(W.cy,t)
inherit(W.cx,t)
inherit(W.cn,t)
inherit(W.cv,t)
inherit(W.ij,t)
inherit(W.ik,t)
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
inherit(P.hh,t)
inherit(P.dO,t)
inherit(P.fy,t)
inherit(P.fz,t)
inherit(P.ii,t)
inherit(P.cB,t)
t=J.bB
inherit(J.fl,t)
inherit(J.b0,t)
inherit(J.aT,t)
inherit(J.j9,J.aR)
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
inherit(H.hk,t)
t=H.bd
inherit(H.bC,t)
inherit(P.eO,t)
t=H.b8
inherit(H.iV,t)
inherit(H.iW,t)
inherit(H.hS,t)
inherit(H.hB,t)
inherit(H.eC,t)
inherit(H.eD,t)
inherit(H.hY,t)
inherit(H.h3,t)
inherit(H.h4,t)
inherit(H.iX,t)
inherit(H.iF,t)
inherit(H.iG,t)
inherit(H.iH,t)
inherit(H.iI,t)
inherit(H.iJ,t)
inherit(H.fY,t)
inherit(H.eI,t)
inherit(H.iB,t)
inherit(H.iC,t)
inherit(H.iD,t)
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
inherit(P.fR,t)
inherit(P.fS,t)
inherit(P.ip,t)
inherit(P.i1,t)
inherit(P.i0,t)
inherit(P.i2,t)
inherit(P.eR,t)
inherit(P.e2,t)
inherit(P.e3,t)
inherit(W.is,t)
inherit(W.hl,t)
inherit(W.hE,t)
inherit(W.f9,t)
inherit(W.f8,t)
inherit(W.i8,t)
inherit(W.i9,t)
inherit(W.ig,t)
inherit(W.ih,t)
inherit(P.it,t)
inherit(B.iQ,t)
inherit(B.iR,t)
inherit(B.iS,t)
inherit(B.iT,t)
inherit(B.iU,t)
inherit(B.fc,t)
inherit(B.fd,t)
inherit(B.fe,t)
inherit(B.ff,t)
inherit(B.fF,t)
inherit(A.iA,t)
inherit(K.iM,t)
inherit(K.iL,t)
t=H.ht
inherit(H.bh,t)
inherit(H.bY,t)
t=P.ba
inherit(H.dd,t)
inherit(H.eJ,t)
inherit(H.hc,t)
inherit(H.hb,t)
inherit(H.dS,t)
inherit(H.fB,t)
inherit(P.c6,t)
inherit(P.de,t)
inherit(P.af,t)
inherit(P.v,t)
inherit(P.dt,t)
inherit(P.aE,t)
inherit(P.a2,t)
inherit(P.dW,t)
t=H.fY
inherit(H.fL,t)
inherit(H.bo,t)
inherit(H.hn,P.c6)
t=H.be
inherit(H.f_,t)
inherit(H.d6,t)
t=H.d6
inherit(H.bG,t)
inherit(H.bF,t)
inherit(H.bH,H.bG)
inherit(H.d7,H.bH)
inherit(H.bI,H.bF)
inherit(H.d8,H.bI)
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
inherit(P.id,P.hv)
inherit(P.i_,P.il)
inherit(P.dy,H.ah)
inherit(P.fD,P.fE)
inherit(P.hR,P.fD)
inherit(P.hT,P.hR)
inherit(P.d1,P.bK)
t=P.W
inherit(P.O,t)
inherit(P.o,t)
t=P.af
inherit(P.dh,t)
inherit(P.eA,t)
t=W.j
inherit(W.r,t)
inherit(W.bs,t)
inherit(W.dU,t)
inherit(W.ep,t)
inherit(W.bA,t)
inherit(W.bD,t)
inherit(W.fq,t)
inherit(W.di,t)
inherit(W.fG,t)
inherit(W.a8,t)
inherit(W.bt,t)
inherit(W.ab,t)
inherit(W.Z,t)
inherit(W.bu,t)
inherit(W.hf,t)
inherit(W.hj,t)
inherit(W.bR,t)
inherit(W.hm,t)
inherit(W.b2,t)
inherit(W.i7,t)
t=W.r
inherit(W.a3,t)
inherit(W.aP,t)
inherit(W.bq,t)
inherit(W.cb,t)
inherit(W.hx,t)
t=W.a3
inherit(W.l,t)
inherit(P.K,t)
t=W.l
inherit(W.dL,t)
inherit(W.dM,t)
inherit(W.aO,t)
inherit(W.c8,t)
inherit(W.ca,t)
inherit(W.et,t)
inherit(W.ci,t)
inherit(W.eB,t)
inherit(W.fC,t)
inherit(W.dm,t)
inherit(W.fW,t)
inherit(W.fX,t)
inherit(W.bP,t)
inherit(W.hQ,t)
inherit(W.bx,W.bs)
inherit(W.dP,W.bx)
inherit(W.b9,W.ck)
inherit(W.e_,W.cd)
inherit(W.cX,W.ct)
inherit(W.e0,W.cX)
inherit(W.a4,W.c7)
inherit(W.cV,W.cs)
inherit(W.eo,W.cV)
inherit(W.cP,W.cE)
inherit(W.bz,W.cP)
inherit(W.cj,W.bq)
inherit(W.ey,W.bA)
inherit(W.aG,W.k)
t=W.aG
inherit(W.aU,t)
inherit(W.Q,t)
inherit(W.b_,t)
inherit(W.eX,W.bD)
inherit(W.cR,W.cq)
inherit(W.eY,W.cR)
inherit(W.U,P.d1)
inherit(W.cG,W.cp)
inherit(W.bJ,W.cG)
t=W.bg
inherit(W.fk,t)
inherit(W.fA,t)
inherit(W.h8,t)
inherit(W.cM,W.co)
inherit(W.fm,W.cM)
inherit(W.fp,W.ak)
inherit(W.bw,W.bt)
inherit(W.fH,W.bw)
inherit(W.cW,W.cD)
inherit(W.fJ,W.cW)
inherit(W.cF,W.cC)
inherit(W.h_,W.cF)
inherit(W.bv,W.bu)
inherit(W.h0,W.bv)
inherit(W.cI,W.cu)
inherit(W.h5,W.cI)
inherit(W.b1,W.Q)
inherit(W.cY,W.cl)
inherit(W.dw,W.cY)
inherit(W.cS,W.cz)
inherit(W.hw,W.cS)
inherit(W.hy,W.ce)
inherit(W.cU,W.cy)
inherit(W.hP,W.cU)
inherit(W.cH,W.cx)
inherit(W.dz,W.cH)
inherit(W.cQ,W.cn)
inherit(W.ia,W.cQ)
inherit(W.cJ,W.cv)
inherit(W.ib,W.cJ)
inherit(W.hz,W.hs)
inherit(W.hC,P.fP)
inherit(W.jj,W.hC)
inherit(W.hD,P.fQ)
inherit(W.ie,W.bX)
inherit(P.M,P.hZ)
t=P.K
inherit(P.aC,t)
inherit(P.aN,t)
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
inherit(P.bM,t)
inherit(P.fV,t)
inherit(P.hg,t)
inherit(P.bT,t)
inherit(P.i3,t)
inherit(P.i4,t)
inherit(P.i5,t)
t=P.aC
inherit(P.dK,t)
inherit(P.es,t)
inherit(P.ag,t)
inherit(P.ez,t)
inherit(P.fU,t)
inherit(P.dn,t)
inherit(P.he,t)
inherit(P.cK,P.cA)
inherit(P.eK,P.cK)
inherit(P.cT,P.cr)
inherit(P.fa,P.cT)
inherit(P.fu,P.ag)
inherit(P.cN,P.cm)
inherit(P.fT,P.cN)
t=P.dn
inherit(P.fZ,t)
inherit(P.bQ,t)
inherit(P.cL,P.cw)
inherit(P.h7,P.cL)
inherit(P.cO,P.cB)
inherit(P.fK,P.cO)
t=G.eZ
inherit(G.fI,t)
inherit(G.ds,t)
inherit(G.eW,t)
inherit(G.fx,t)
inherit(A.bL,t)
inherit(A.fw,t)
t=G.fI
inherit(G.dQ,t)
inherit(A.aW,t)
inherit(B.fb,G.dQ)
t=G.ds
inherit(G.eU,t)
inherit(G.fg,t)
inherit(G.fj,t)
inherit(R.fN,R.fM)
mixin(H.bF,P.x)
mixin(H.bG,P.x)
mixin(H.bH,H.cg)
mixin(H.bI,H.cg)
mixin(P.bK,P.x)
mixin(W.bs,P.x)
mixin(W.bt,P.x)
mixin(W.bu,P.x)
mixin(W.bv,W.B)
mixin(W.bw,W.B)
mixin(W.bx,W.B)
mixin(W.ck,W.dV)
mixin(W.cE,P.x)
mixin(W.cq,P.x)
mixin(W.cn,P.x)
mixin(W.cx,P.x)
mixin(W.cy,P.x)
mixin(W.cz,P.x)
mixin(W.cC,P.x)
mixin(W.cD,P.x)
mixin(W.cl,P.x)
mixin(W.co,P.x)
mixin(W.cp,P.x)
mixin(W.cs,P.x)
mixin(W.ct,P.x)
mixin(W.cu,P.x)
mixin(W.cv,P.x)
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
mixin(P.cA,P.x)
mixin(P.cm,P.x)
mixin(P.cr,P.x)
mixin(P.cw,P.x)
mixin(P.cK,W.B)
mixin(P.cL,W.B)
mixin(P.cN,W.B)
mixin(P.cT,W.B)
mixin(P.cB,P.x)
mixin(P.cO,W.B)})();(function constants(){C.n=W.aO.prototype
C.H=W.c8.prototype
C.u=W.b9.prototype
C.o=W.ca.prototype
C.I=W.cc.prototype
C.J=W.ci.prototype
C.p=W.cj.prototype
C.K=J.a.prototype
C.a=J.aR.prototype
C.w=J.d_.prototype
C.b=J.d0.prototype
C.c=J.bc.prototype
C.i=J.aS.prototype
C.R=J.aT.prototype
C.V=H.d5.prototype
C.z=W.bJ.prototype
C.A=J.fl.prototype
C.B=W.dg.prototype
C.G=W.dm.prototype
C.t=J.b0.prototype
C.at=W.b1.prototype
C.au=W.bR.prototype
C.f=new P.i_()
C.v=new P.aQ(0)
C.L=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.M=function(hooks) {
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
C.x=function(hooks) { return hooks; }

C.N=function(getTagFallback) {
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
C.O=function() {
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
C.P=function(hooks) {
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
C.Q=function(hooks) {
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
C.y=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.S=H.G(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.t])
C.T=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.U=makeConstList([])
C.q=H.G(makeConstList(["bind","if","ref","repeat","syntax"]),[P.t])
C.r=H.G(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.t])
C.W=new G.z("vec3","vertex btangents",0)
C.d=new G.z("vec3","",0)
C.X=new G.z("vec4","delta from light",0)
C.m=new G.z("","",0)
C.C=new G.z("vec3","vertex coordinates",0)
C.Y=new G.z("vec3","vertex binormals",0)
C.D=new G.z("vec4","for wireframe",0)
C.Z=new G.z("vec4","per vertex color",0)
C.a_=new G.z("float","for normal maps",0)
C.j=new G.z("mat4","",0)
C.a1=new G.z("mat4","",4)
C.a0=new G.z("mat4","",128)
C.e=new G.z("float","",0)
C.a2=new G.z("float","",4)
C.a3=new G.z("float","depth for shadowmaps",0)
C.h=new G.z("sampler2D","",0)
C.a4=new G.z("float","for bump maps",0)
C.a5=new G.z("vec2","texture uvs",0)
C.a6=new G.z("float","time since program start in sec",0)
C.k=new G.z("vec2","",0)
C.a7=new G.z("samplerCube","",0)
C.l=new G.z("vec4","",0)
C.a8=new G.z("vec3","vertex normals",0)
C.a9=new G.z("sampler2DShadow","",0)
C.E=new G.z("vec3","per vertex color",0)
C.F=new G.z("mat3","",0)
C.aa=new G.z("vec3","vertex tangents",0)
C.ab=H.N("np")
C.ac=H.N("nq")
C.ad=H.N("er")
C.ae=H.N("nr")
C.af=H.N("ns")
C.ag=H.N("k9")
C.ah=H.N("nt")
C.ai=H.N("kc")
C.aj=H.N("aX")
C.ak=H.N("t")
C.al=H.N("ky")
C.am=H.N("kz")
C.an=H.N("nu")
C.ao=H.N("kA")
C.ap=H.N("az")
C.aq=H.N("O")
C.ar=H.N("o")
C.as=H.N("W")})();(function staticFields(){$.kg="$cachedFunction"
$.kh="$cachedInvocation"
$.jP=null
$.jN=null
$.jl=!1
$.jp=null
$.kM=null
$.l0=null
$.iw=null
$.iE=null
$.jq=null
$.bi=null
$.bZ=null
$.c_=null
$.jm=!1
$.D=C.f
$.k5=0
$.aB=null
$.j6=null
$.k4=null
$.k3=null
$.k1=null
$.k0=null
$.k_=null
$.jZ=null
$.mX=0
$.mY=0
$.ju=0
$.kY=0
$.c4=0
$.c5=0
$.nl=!1
$.kS=0})();(function lazyInitializers(){lazy($,"jY","$get$jY",function(){return H.kV("_$dart_dartClosure")})
lazy($,"jb","$get$jb",function(){return H.kV("_$dart_js")})
lazy($,"ka","$get$ka",function(){return H.m8()})
lazy($,"kb","$get$kb",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.k5
$.k5=t+1
t="expando$key$"+t}return new P.e5(null,t,[P.o])})
lazy($,"kn","$get$kn",function(){return H.av(H.ha({
toString:function(){return"$receiver$"}}))})
lazy($,"ko","$get$ko",function(){return H.av(H.ha({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kp","$get$kp",function(){return H.av(H.ha(null))})
lazy($,"kq","$get$kq",function(){return H.av(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"ku","$get$ku",function(){return H.av(H.ha(void 0))})
lazy($,"kv","$get$kv",function(){return H.av(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"ks","$get$ks",function(){return H.av(H.kt(null))})
lazy($,"kr","$get$kr",function(){return H.av(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kx","$get$kx",function(){return H.av(H.kt(void 0))})
lazy($,"kw","$get$kw",function(){return H.av(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"ji","$get$ji",function(){return P.mz()})
lazy($,"c0","$get$c0",function(){return[]})
lazy($,"jX","$get$jX",function(){return{}})
lazy($,"kF","$get$kF",function(){return P.jd(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jk","$get$jk",function(){return P.P()})
lazy($,"iv","$get$iv",function(){return P.kd(P.o,P.az)})
lazy($,"c2","$get$c2",function(){return P.kd(P.t,P.az)})
lazy($,"kl","$get$kl",function(){return new G.dq(1281,0,4294967295)})
lazy($,"jL","$get$jL",function(){return new G.dp(1281,1281,1281)})
lazy($,"a_","$get$a_",function(){return P.aV(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColors",C.E,"aColorAlpha",C.Z,"aPosition",C.C,"aTexUV",C.a5,"aNormal",C.a8,"aBinormal",C.Y,"aCenter",C.D,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.aa,"aBitangent",C.W,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.E,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.C,"vPositionFromLight",C.X,"vCenter",C.D,"vDepth",C.a3,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.F,"uConvolutionMatrix",C.F,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a9,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a7,"uAnimationTable",C.h,"uTime",C.a6,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a0,"uLightDescs",C.a1,"uLightCount",C.e,"uLightTypes",C.a2,"uBumpScale",C.a4,"uNormalScale",C.a_])})
lazy($,"jU","$get$jU",function(){return T.F(0.8,0.8,0.8)})
lazy($,"jS","$get$jS",function(){return T.F(0,0,1)})
lazy($,"jW","$get$jW",function(){return T.F(1,0,0)})
lazy($,"jV","$get$jV",function(){return T.F(0,1,0)})
lazy($,"jT","$get$jT",function(){return T.F(0,1,1)})
lazy($,"l2","$get$l2",function(){var t=new G.dj("SolidColor",null,[],[],[],[],0,P.P())
t.cZ(["aPosition"])
t.bo(["uPerspectiveViewMatrix","uModelMatrix"])
t.bt(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"l1","$get$l1",function(){var t=new G.dj("SolidColorF",null,[],[],[],[],0,P.P())
t.bo(["uColor"])
t.bt(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"kC","$get$kC",function(){return[T.F(0,0,1),T.F(0,0,-1),T.F(0,1,0),T.F(0,-1,0),T.F(1,0,0),T.F(-1,0,0)]})
lazy($,"k7","$get$k7",function(){return[new G.y(0,11,5),new G.y(0,5,1),new G.y(0,1,7),new G.y(0,7,10),new G.y(0,10,11),new G.y(1,5,9),new G.y(5,11,4),new G.y(11,10,2),new G.y(10,7,6),new G.y(7,1,8),new G.y(3,9,4),new G.y(3,4,2),new G.y(3,2,6),new G.y(3,6,8),new G.y(3,8,9),new G.y(4,9,5),new G.y(2,4,11),new G.y(6,2,10),new G.y(8,6,7),new G.y(9,8,1)]})
lazy($,"l4","$get$l4",function(){return(1+P.nm(5))/2})
lazy($,"k8","$get$k8",function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=$.$get$l4()
s=T.F(-1,t,0)
s.C(0)
r=T.F(1,t,0)
r.C(0)
q=T.F(-1,-t,0)
q.C(0)
p=T.F(1,-t,0)
p.C(0)
o=T.F(0,-1,t)
o.C(0)
n=T.F(0,1,t)
n.C(0)
m=T.F(0,-1,-t)
m.C(0)
l=T.F(0,1,-t)
l.C(0)
k=T.F(t,0,-1)
k.C(0)
j=T.F(t,0,1)
j.C(0)
i=T.F(-t,0,-1)
i.C(0)
t=T.F(-t,0,1)
t.C(0)
return[s,r,q,p,o,n,m,l,k,j,i,t]})})()
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
mangledGlobalNames:{o:"int",O:"double",W:"num",t:"String",az:"bool",aX:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.r},{func:1,ret:P.az,args:[W.a3,P.t,P.t,W.bU]},{func:1,v:true,args:[P.p],opt:[P.bN]},{func:1,ret:P.o,args:[P.L,P.L]},{func:1,ret:P.t,args:[W.j]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bE,ArrayBufferView:H.be,DataView:H.f_,Float32Array:H.d5,Float64Array:H.f0,Int16Array:H.f1,Int32Array:H.f2,Int8Array:H.f3,Uint16Array:H.f4,Uint32Array:H.f5,Uint8ClampedArray:H.d9,CanvasPixelArray:H.d9,Uint8Array:H.f6,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLImageElement:W.l,HTMLKeygenElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMenuItemElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTextAreaElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,HTMLAnchorElement:W.dL,HTMLAreaElement:W.dM,AudioTrack:W.a1,AudioTrackList:W.dP,Blob:W.c7,HTMLBodyElement:W.aO,HTMLCanvasElement:W.c8,CanvasRenderingContext2D:W.dR,CDATASection:W.aP,CharacterData:W.aP,Comment:W.aP,ProcessingInstruction:W.aP,Text:W.aP,CompositorWorker:W.dU,CSSCharsetRule:W.A,CSSFontFaceRule:W.A,CSSGroupingRule:W.A,CSSImportRule:W.A,CSSKeyframeRule:W.A,MozCSSKeyframeRule:W.A,WebKitCSSKeyframeRule:W.A,CSSKeyframesRule:W.A,MozCSSKeyframesRule:W.A,WebKitCSSKeyframesRule:W.A,CSSMediaRule:W.A,CSSNamespaceRule:W.A,CSSPageRule:W.A,CSSRule:W.A,CSSStyleRule:W.A,CSSSupportsRule:W.A,CSSViewportRule:W.A,CSSStyleDeclaration:W.b9,MSStyleCSSProperties:W.b9,CSS2Properties:W.b9,DataTransferItemList:W.dX,DeviceAcceleration:W.dY,HTMLDivElement:W.ca,XMLDocument:W.bq,Document:W.bq,DocumentFragment:W.cb,ShadowRoot:W.cb,DOMException:W.dZ,DOMImplementation:W.cc,DOMPoint:W.e_,DOMPointReadOnly:W.cd,DOMRectReadOnly:W.ce,DOMStringList:W.e0,DOMTokenList:W.e1,Element:W.a3,AnimationEvent:W.k,AnimationPlayerEvent:W.k,ApplicationCacheErrorEvent:W.k,AutocompleteErrorEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceLightEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,GamepadEvent:W.k,GeofencingEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RelatedEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCIceCandidateEvent:W.k,RTCPeerConnectionIceEvent:W.k,SecurityPolicyViolationEvent:W.k,ServicePortConnectEvent:W.k,ServiceWorkerMessageEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BatteryManager:W.j,CanvasCaptureMediaStreamTrack:W.j,CrossOriginServiceWorkerClient:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MessagePort:W.j,MIDIAccess:W.j,NetworkInformation:W.j,Notification:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationReceiver:W.j,PresentationRequest:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,ServicePortCollection:W.j,ServiceWorkerContainer:W.j,ServiceWorkerRegistration:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioContext:W.j,webkitAudioContext:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioSourceNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OfflineAudioContext:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.a4,FileList:W.eo,FileWriter:W.ep,HTMLFormElement:W.et,Gamepad:W.a5,HTMLHeadElement:W.ci,History:W.ex,HTMLCollection:W.bz,HTMLFormControlsCollection:W.bz,HTMLOptionsCollection:W.bz,HTMLDocument:W.cj,XMLHttpRequest:W.ey,XMLHttpRequestUpload:W.bA,XMLHttpRequestEventTarget:W.bA,HTMLInputElement:W.eB,KeyboardEvent:W.aU,Location:W.eP,MediaList:W.eV,MIDIOutput:W.eX,MIDIInput:W.bD,MIDIPort:W.bD,MimeType:W.a6,MimeTypeArray:W.eY,PointerEvent:W.Q,MouseEvent:W.Q,DragEvent:W.Q,Navigator:W.f7,Attr:W.r,Node:W.r,NodeIterator:W.da,NodeList:W.bJ,RadioNodeList:W.bJ,Path2D:W.fh,Perspective:W.fk,Plugin:W.a7,PluginArray:W.fm,PositionValue:W.fp,PresentationConnection:W.fq,Range:W.dg,Rotation:W.fA,RTCDataChannel:W.di,DataChannel:W.di,HTMLSelectElement:W.fC,SharedWorker:W.fG,SourceBuffer:W.a8,SourceBufferList:W.fH,SpeechGrammar:W.a9,SpeechGrammarList:W.fJ,SpeechRecognitionResult:W.aa,Storage:W.fO,CSSStyleSheet:W.Y,StyleSheet:W.Y,CalcLength:W.ak,KeywordValue:W.ak,LengthValue:W.ak,NumberValue:W.ak,SimpleLength:W.ak,TransformValue:W.ak,StyleValue:W.ak,HTMLTableElement:W.dm,HTMLTableRowElement:W.fW,HTMLTableSectionElement:W.fX,HTMLTemplateElement:W.bP,TextTrack:W.ab,TextTrackCue:W.Z,VTTCue:W.Z,TextTrackCueList:W.h_,TextTrackList:W.h0,TimeRanges:W.h1,Touch:W.ac,TouchEvent:W.b_,TouchList:W.h5,TrackDefaultList:W.h6,Matrix:W.bg,Skew:W.bg,TransformComponent:W.bg,Translation:W.h8,TreeWalker:W.dr,CompositionEvent:W.aG,FocusEvent:W.aG,TextEvent:W.aG,SVGZoomEvent:W.aG,UIEvent:W.aG,URL:W.hd,VideoTrackList:W.hf,VTTRegionList:W.hi,WebSocket:W.hj,WheelEvent:W.b1,Window:W.bR,DOMWindow:W.bR,Worker:W.hm,CompositorWorkerGlobalScope:W.b2,DedicatedWorkerGlobalScope:W.b2,ServiceWorkerGlobalScope:W.b2,SharedWorkerGlobalScope:W.b2,WorkerGlobalScope:W.b2,ClientRect:W.hu,ClientRectList:W.dw,DOMRectList:W.dw,CSSRuleList:W.hw,DocumentType:W.hx,DOMRect:W.hy,GamepadList:W.hP,HTMLFrameSetElement:W.hQ,NamedNodeMap:W.dz,MozNamedAttrMap:W.dz,ServiceWorker:W.i7,SpeechRecognitionResultList:W.ia,StyleSheetList:W.ib,WorkerLocation:W.ij,WorkerNavigator:W.ik,SVGAElement:P.dK,SVGAnimateElement:P.aN,SVGAnimateMotionElement:P.aN,SVGAnimateTransformElement:P.aN,SVGAnimationElement:P.aN,SVGSetElement:P.aN,SVGFEBlendElement:P.e6,SVGFEColorMatrixElement:P.e7,SVGFEComponentTransferElement:P.e8,SVGFECompositeElement:P.e9,SVGFEConvolveMatrixElement:P.ea,SVGFEDiffuseLightingElement:P.eb,SVGFEDisplacementMapElement:P.ec,SVGFEFloodElement:P.ed,SVGFEGaussianBlurElement:P.ee,SVGFEImageElement:P.ef,SVGFEMergeElement:P.eg,SVGFEMorphologyElement:P.eh,SVGFEOffsetElement:P.ei,SVGFEPointLightElement:P.ej,SVGFESpecularLightingElement:P.ek,SVGFESpotLightElement:P.el,SVGFETileElement:P.em,SVGFETurbulenceElement:P.en,SVGFilterElement:P.eq,SVGForeignObjectElement:P.es,SVGCircleElement:P.ag,SVGEllipseElement:P.ag,SVGLineElement:P.ag,SVGPathElement:P.ag,SVGPolygonElement:P.ag,SVGPolylineElement:P.ag,SVGGeometryElement:P.ag,SVGClipPathElement:P.aC,SVGDefsElement:P.aC,SVGGElement:P.aC,SVGSwitchElement:P.aC,SVGGraphicsElement:P.aC,SVGImageElement:P.ez,SVGLength:P.as,SVGLengthList:P.eK,SVGMarkerElement:P.eS,SVGMaskElement:P.eT,SVGNumber:P.at,SVGNumberList:P.fa,SVGPatternElement:P.fi,SVGPoint:P.fn,SVGPointList:P.fo,SVGRect:P.ft,SVGRectElement:P.fu,SVGScriptElement:P.bM,SVGStringList:P.fT,SVGDescElement:P.K,SVGDiscardElement:P.K,SVGFEDistantLightElement:P.K,SVGFEFuncAElement:P.K,SVGFEFuncBElement:P.K,SVGFEFuncGElement:P.K,SVGFEFuncRElement:P.K,SVGFEMergeNodeElement:P.K,SVGMetadataElement:P.K,SVGStopElement:P.K,SVGStyleElement:P.K,SVGTitleElement:P.K,SVGComponentTransferFunctionElement:P.K,SVGElement:P.K,SVGSVGElement:P.fU,SVGSymbolElement:P.fV,SVGTextContentElement:P.dn,SVGTextPathElement:P.fZ,SVGTSpanElement:P.bQ,SVGTextElement:P.bQ,SVGTextPositioningElement:P.bQ,SVGTransform:P.au,SVGTransformList:P.h7,SVGUseElement:P.he,SVGViewElement:P.hg,SVGViewSpec:P.hh,SVGLinearGradientElement:P.bT,SVGRadialGradientElement:P.bT,SVGGradientElement:P.bT,SVGCursorElement:P.i3,SVGFEDropShadowElement:P.i4,SVGMPathElement:P.i5,AudioBuffer:P.dO,WebGLRenderingContext:P.fy,WebGL2RenderingContext:P.fz,WebGL2RenderingContextBase:P.ii,SQLResultSetRowList:P.fK})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.d6.$nativeSuperclassTag="ArrayBufferView"
H.bG.$nativeSuperclassTag="ArrayBufferView"
H.bH.$nativeSuperclassTag="ArrayBufferView"
H.d7.$nativeSuperclassTag="ArrayBufferView"
H.bF.$nativeSuperclassTag="ArrayBufferView"
H.bI.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.l3(K.kZ(),b)},[])
else (function(b){H.l3(K.kZ(),b)})([])})})()