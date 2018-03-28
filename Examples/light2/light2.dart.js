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
a[c]=function(){a[c]=function(){H.oM(b)}
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
return d?function(e){if(t===null)t=H.k7(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.k7(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.k7(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={jG:function jG(a){this.a=a},
jN:function(a,b,c,d){if(!!a.$isj)return new H.eq(a,b,[c,d])
return new H.cC(a,b,[c,d])},
cv:function(){return new P.bb("No element")},
no:function(){return new P.bb("Too many elements")},
nn:function(){return new P.bb("Too few elements")},
nH:function(a,b){H.cS(a,0,J.bo(a)-1,b)},
cS:function(a,b,c,d){if(c-b<=32)H.nG(a,b,c,d)
else H.nF(a,b,c,d)},
nG:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.P(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.aa(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.j(a,q,s.h(a,p))
q=p}s.j(a,q,r)}},
nF:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.K(t+1,6)
r=a3+s
q=a4-s
p=C.b.K(a3+a4,2)
o=p-s
n=p+s
t=J.P(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.aa(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.aa(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.aa(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.aa(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.aa(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.aa(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.aa(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.aa(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.aa(a5.$2(j,i),0)){h=i
i=j
j=h}t.j(a2,r,m)
t.j(a2,p,k)
t.j(a2,q,i)
t.j(a2,o,t.h(a2,a3))
t.j(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.z(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.cS(a2,a3,g-2,a5)
H.cS(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.z(a5.$2(t.h(a2,g),l),0);)++g
for(;J.z(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.cS(a2,g,f,a5)}else H.cS(a2,g,f,a5)},
j:function j(){},
b4:function b4(){},
cA:function cA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cC:function cC(a,b,c){this.a=a
this.b=b
this.$ti=c},
eq:function eq(a,b,c){this.a=a
this.b=b
this.$ti=c},
fm:function fm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bw:function bw(a,b,c){this.a=a
this.b=b
this.$ti=c},
d6:function d6(a,b,c){this.a=a
this.b=b
this.$ti=c},
hK:function hK(a,b,c){this.a=a
this.b=b
this.$ti=c},
b_:function b_(){},
dT:function(a,b){var t=a.an(b)
if(!u.globalState.d.cy)u.globalState.f.au()
return t},
iV:function(){++u.globalState.f.b},
ja:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
m3:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.p(s).$ish)throw H.c(P.cc("Arguments to main must be a List: "+H.d(s)))
u.globalState=new H.is(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$kV()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.i0(P.jM(null,H.aQ),0)
q=P.x
s.sfl(new H.ac(0,null,null,null,null,null,0,[q,H.be]))
s.sfo(new H.ac(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.ir()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.ni,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.nY)}if(u.globalState.x)return
o=H.lw()
u.globalState.e=o
u.globalState.z.j(0,o.a,o)
u.globalState.d=o
if(H.bk(a,{func:1,args:[P.N]}))o.an(new H.jm(t,a))
else if(H.bk(a,{func:1,args:[P.N,P.N]}))o.an(new H.jn(t,a))
else o.an(a)
u.globalState.f.au()},
nY:function(a){var t=P.ao(["command","print","msg",a])
return new H.a4(!0,P.bf(null,P.x)).L(t)},
lw:function(){var t,s
t=u.globalState.a++
s=P.x
t=new H.be(t,new H.ac(0,null,null,null,null,null,0,[s,H.cQ]),P.aH(null,null,null,s),u.createNewIsolate(),new H.cQ(0,null,!1),new H.ax(H.m_()),new H.ax(H.m_()),!1,!1,[],P.aH(null,null,null,null),null,null,!1,!0,P.aH(null,null,null,null))
t.e3()
return t},
nk:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.nl()
return},
nl:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.t("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.t('Cannot extract URI from "'+t+'"'))},
ni:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.aP(!0,[]).a1(b.data)
s=J.P(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.ou(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aP(!0,[]).a1(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aP(!0,[]).a1(s.h(t,"replyTo"))
k=H.lw()
u.globalState.f.a.Z(0,new H.aQ(k,new H.f3(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.au()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.mH(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.au()
break
case"close":u.globalState.ch.at(0,$.$get$kW().h(0,a))
a.terminate()
u.globalState.f.au()
break
case"log":H.nh(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.ao(["command","print","msg",t])
j=new H.a4(!0,P.bf(null,P.x)).L(j)
s.toString
self.postMessage(j)}else P.T(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
nh:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.ao(["command","log","msg",a])
r=new H.a4(!0,P.bf(null,P.x)).L(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.M(q)
t=H.a6(q)
s=P.cn(t)
throw H.c(s)}},
nj:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.l8=$.l8+("_"+s)
$.l9=$.l9+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.H(0,["spawned",new H.bg(s,r),q,t.r])
r=new H.f4(t,d,a,c,b)
if(e){t.c8(q,q)
u.globalState.f.a.Z(0,new H.aQ(t,r,"start isolate"))}else r.$0()},
nI:function(a,b){var t=new H.hs(!0,!1,null,0)
t.dX(a,b)
return t},
o0:function(a){return new H.aP(!0,[]).a1(new H.a4(!1,P.bf(null,P.x)).L(a))},
jm:function jm(a,b){this.a=a
this.b=b},
jn:function jn(a,b){this.a=a
this.b=b},
is:function is(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
be:function be(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
il:function il(a,b){this.a=a
this.b=b},
i0:function i0(a,b){this.a=a
this.b=b},
i1:function i1(a){this.a=a},
aQ:function aQ(a,b,c){this.a=a
this.b=b
this.c=c},
ir:function ir(){},
f3:function f3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f4:function f4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hV:function hV(){},
bg:function bg(a,b){this.b=a
this.a=b},
iu:function iu(a,b){this.a=a
this.b=b},
c1:function c1(a,b,c){this.b=a
this.c=b
this.a=c},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.c=c},
hs:function hs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ht:function ht(a,b){this.a=a
this.b=b},
hu:function hu(a,b){this.a=a
this.b=b},
ax:function ax(a){this.a=a},
a4:function a4(a,b){this.a=a
this.b=b},
aP:function aP(a,b){this.a=a
this.b=b},
oo:function(a){return u.types[a]},
ow:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.p(a).$isu},
d:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bp(a)
if(typeof t!=="string")throw H.c(H.L(a))
return t},
nD:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.an(t)
s=t[0]
r=t[1]
return new H.fX(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aI:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
l6:function(a,b){var t=P.jD(a,null,null)
throw H.c(t)},
jQ:function(a,b,c){var t,s
if(typeof a!=="string")H.G(H.L(a))
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.l6(a,c)
s=t[3]
if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.l6(a,c)},
l5:function(a,b){var t=P.jD("Invalid double",a,null)
throw H.c(t)},
aJ:function(a,b){var t,s
if(typeof a!=="string")H.G(H.L(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.l5(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.mO(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.l5(a,b)}return t},
bC:function(a){var t,s,r,q,p,o,n,m,l
t=J.p(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.N||!!J.p(a).$isaN){p=C.A(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.h.af(q,0)===36)q=C.h.ds(q,1)
l=H.dV(H.iZ(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
Q:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nB:function(a){return a.b?H.Q(a).getUTCFullYear()+0:H.Q(a).getFullYear()+0},
nz:function(a){return a.b?H.Q(a).getUTCMonth()+1:H.Q(a).getMonth()+1},
nv:function(a){return a.b?H.Q(a).getUTCDate()+0:H.Q(a).getDate()+0},
nw:function(a){return a.b?H.Q(a).getUTCHours()+0:H.Q(a).getHours()+0},
ny:function(a){return a.b?H.Q(a).getUTCMinutes()+0:H.Q(a).getMinutes()+0},
nA:function(a){return a.b?H.Q(a).getUTCSeconds()+0:H.Q(a).getSeconds()+0},
nx:function(a){return a.b?H.Q(a).getUTCMilliseconds()+0:H.Q(a).getMilliseconds()+0},
l7:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.L(a))
return a[b]},
au:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a0(!0,b,"index",null)
t=J.bo(a)
if(b<0||C.b.bo(b,t))return P.B(b,a,"index",null,t)
return P.fU(b,"index",null)},
L:function(a){return new P.a0(!0,a,null,null)},
lI:function(a){if(typeof a!=="number")throw H.c(H.L(a))
return a},
c:function(a){var t
if(a==null)a=new P.b8()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.m5})
t.name=""}else t.toString=H.m5
return t},
m5:function(){return J.bp(this.dartException)},
G:function(a){throw H.c(a)},
C:function(a){throw H.c(P.al(a))},
af:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hy(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
hz:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
lk:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
l4:function(a,b){return new H.fE(a,b==null?null:b.method)},
jI:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.fa(a,s,t?null:b.receiver)},
M:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.jo(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.b6(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jI(H.d(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.l4(H.d(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$le()
o=$.$get$lf()
n=$.$get$lg()
m=$.$get$lh()
l=$.$get$ll()
k=$.$get$lm()
j=$.$get$lj()
$.$get$li()
i=$.$get$lo()
h=$.$get$ln()
g=p.R(s)
if(g!=null)return t.$1(H.jI(s,g))
else{g=o.R(s)
if(g!=null){g.method="call"
return t.$1(H.jI(s,g))}else{g=n.R(s)
if(g==null){g=m.R(s)
if(g==null){g=l.R(s)
if(g==null){g=k.R(s)
if(g==null){g=j.R(s)
if(g==null){g=m.R(s)
if(g==null){g=i.R(s)
if(g==null){g=h.R(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.l4(s,g))}}return t.$1(new H.hC(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cW()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.a0(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cW()
return a},
a6:function(a){var t
if(a==null)return new H.dy(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dy(a,null)},
oA:function(a){if(a==null||typeof a!='object')return J.bn(a)
else return H.aI(a)},
om:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.j(0,p,a[q])}return b},
ov:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dT(b,new H.j5(a))
case 1:return H.dT(b,new H.j6(a,d))
case 2:return H.dT(b,new H.j7(a,d,e))
case 3:return H.dT(b,new H.j8(a,d,e,f))
case 4:return H.dT(b,new H.j9(a,d,e,f,g))}throw H.c(P.cn("Unsupported number of arguments for wrapped closure"))},
at:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.ov)
a.$identity=t
return t},
n0:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.p(c).$ish){t.$reflectionInfo=c
r=H.nD(t).r}else r=c
q=d?Object.create(new H.h9().constructor.prototype):Object.create(new H.bq(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.kB(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.oo,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.ky:H.jz
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.kB(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
mY:function(a,b,c,d){var t=H.jz
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
kB:function(a,b,c){var t,s,r,q
if(c)return H.n_(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.mY(s,b==null?r!=null:b!==r,t,b)
return q},
mZ:function(a,b,c,d){var t,s
t=H.jz
s=H.ky
switch(b?-1:a){case 0:throw H.c(H.nE("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
n_:function(a,b){var t,s,r,q
t=$.kz
if(t==null){t=H.kw("self")
$.kz=t}t=$.kx
if(t==null){t=H.kw("receiver")
$.kx=t}s=b.$stubName
r=b.length
q=a[s]
t=H.mZ(r,b==null?q!=null:b!==q,s,b)
return t},
k7:function(a,b,c,d,e,f){var t,s
t=J.an(b)
s=!!J.p(c).$ish?J.an(c):c
return H.n0(a,t,s,!!d,e,f)},
jz:function(a){return a.a},
ky:function(a){return a.c},
kw:function(a){var t,s,r,q,p
t=new H.bq("self","target","receiver","name")
s=J.an(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
p1:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.ag(a,"String"))},
oX:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ag(a,"double"))},
p0:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ag(a,"num"))},
of:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.ag(a,"bool"))},
ou:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.ag(a,"int"))},
oC:function(a,b){throw H.c(H.ag(a,b.substring(3)))},
oB:function(a,b){var t=J.P(b)
throw H.c(H.kA(a,t.aP(b,3,t.gk(b))))},
kb:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.p(a)[b])return a
H.oC(a,b)},
a8:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.p(a)[b]
else t=!0
if(t)return a
H.oB(a,b)},
p_:function(a){if(a==null)return a
if(!!J.p(a).$ish)return a
throw H.c(H.ag(a,"List"))},
k8:function(a){var t=J.p(a)
return"$S" in t?t.$S():null},
bk:function(a,b){var t,s
if(a==null)return!1
t=H.k8(a)
if(t==null)s=!1
else s=H.lQ(t,b)
return s},
oY:function(a,b){var t,s
if(a==null)return a
if($.k4)return a
$.k4=!0
try{if(H.bk(a,b))return a
t=H.jg(b,null)
s=H.ag(a,t)
throw H.c(s)}finally{$.k4=!1}},
ag:function(a,b){return new H.hA("TypeError: "+H.d(P.cm(a))+": type '"+H.lC(a)+"' is not a subtype of type '"+b+"'")},
kA:function(a,b){return new H.e6("CastError: "+H.d(P.cm(a))+": type '"+H.lC(a)+"' is not a subtype of type '"+b+"'")},
lC:function(a){var t
if(a instanceof H.az){t=H.k8(a)
if(t!=null)return H.jg(t,null)
return"Closure"}return H.bC(a)},
a5:function(a){if(!0===a)return!1
if(!!J.p(a).$isjE)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.ag(a,"bool"))},
aj:function(a){throw H.c(new H.hP(a))},
b:function(a){if(H.a5(a))throw H.c(P.mX(null))},
oM:function(a){throw H.c(new P.eh(a))},
nE:function(a){return new H.h1(a)},
m_:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
lO:function(a){return u.getIsolateTag(a)},
J:function(a){return new H.ar(a,null)},
A:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iZ:function(a){if(a==null)return
return a.$ti},
lP:function(a,b){return H.kf(a["$as"+H.d(b)],H.iZ(a))},
X:function(a,b,c){var t,s
t=H.lP(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
a7:function(a,b){var t,s
t=H.iZ(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
jg:function(a,b){var t=H.bl(a,b)
return t},
bl:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dV(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.d(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.bl(t,b)
return H.o4(a,b)}return"unknown-reified-type"},
o4:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.bl(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.bl(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.bl(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.ol(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.bl(l[j],b)+(" "+H.d(j))}q+="}"}return"("+q+") => "+t},
dV:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.bH("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.bl(o,c)}return p?"":"<"+s.l(0)+">"},
j_:function(a){var t,s,r
if(a instanceof H.az){t=H.k8(a)
if(t!=null)return H.jg(t,null)}s=J.p(a).constructor.name
if(a==null)return s
r=H.dV(a.$ti,0,null)
return s+r},
kf:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.kc(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.kc(a,null,b)
return b},
c5:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iZ(a)
s=J.p(a)
if(s[b]==null)return!1
return H.lG(H.kf(s[d],t),c)},
dW:function(a,b,c,d){var t,s
if(a==null)return a
t=H.c5(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dV(c,0,null)
throw H.c(H.kA(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
oU:function(a,b,c,d){var t,s
if(a==null)return a
t=H.c5(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dV(c,0,null)
throw H.c(H.ag(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
lG:function(a,b){var t,s,r,q,p
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
if(!H.Y(r,b[p]))return!1}return!0},
oV:function(a,b,c){return H.kc(a,b,H.lP(b,c))},
Y:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="N")return!0
if('func' in b)return H.lQ(a,b)
if('func' in a)return b.name==="jE"||b.name==="D"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.jg(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.lG(H.kf(o,t),r)},
lF:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.Y(o,n)||H.Y(n,o)))return!1}return!0},
ob:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.an(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.Y(p,o)||H.Y(o,p)))return!1}return!0},
lQ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.Y(t,s)||H.Y(s,t)))return!1}r=a.args
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
if(n===m){if(!H.lF(r,q,!1))return!1
if(!H.lF(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.Y(g,f)||H.Y(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.Y(g,f)||H.Y(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.Y(g,f)||H.Y(f,g)))return!1}}return H.ob(a.named,b.named)},
kc:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
p2:function(a){var t=$.k9
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
oZ:function(a){return H.aI(a)},
oW:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ox:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.D))
t=$.k9.$1(a)
s=$.iU[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.j4[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.lE.$2(a,t)
if(t!=null){s=$.iU[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.j4[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.jf(r)
$.iU[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.j4[t]=r
return r}if(p==="-"){o=H.jf(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lX(a,r)
if(p==="*")throw H.c(P.jY(t))
if(u.leafTags[t]===true){o=H.jf(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lX(a,r)},
lX:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.kd(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
jf:function(a){return J.kd(a,!1,null,!!a.$isu)},
oz:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.jf(t)
else return J.kd(t,c,null,null)},
os:function(){if(!0===$.ka)return
$.ka=!0
H.ot()},
ot:function(){var t,s,r,q,p,o,n,m
$.iU=Object.create(null)
$.j4=Object.create(null)
H.or()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lZ.$1(p)
if(o!=null){n=H.oz(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
or:function(){var t,s,r,q,p,o,n
t=C.R()
t=H.bj(C.O,H.bj(C.T,H.bj(C.z,H.bj(C.z,H.bj(C.S,H.bj(C.P,H.bj(C.Q(C.A),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.k9=new H.j1(p)
$.lE=new H.j2(o)
$.lZ=new H.j3(n)},
bj:function(a,b){return a(b)||b},
kZ:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.c(P.jD("Illegal RegExp pattern ("+String(q)+")",a,null))},
nZ:function(a,b){var t=new H.it(a,b)
t.e5(a,b)
return t},
oH:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
oJ:function(a,b,c,d){var t,s,r
t=b.ei(a,d)
if(t==null)return a
s=t.b
r=s.index
return H.oL(a,r,r+s[0].length,c)},
oI:function(a,b,c){var t,s
t=b.gc0()
t.lastIndex=0
s=a.replace(t,c.replace(/\$/g,"$$$$"))
return s},
oK:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.oJ(a,b,c,d)},
oL:function(a,b,c,d){var t,s
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fX:function fX(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hy:function hy(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fE:function fE(a,b){this.a=a
this.b=b},
fa:function fa(a,b,c){this.a=a
this.b=b
this.c=c},
hC:function hC(a){this.a=a},
jo:function jo(a){this.a=a},
dy:function dy(a,b){this.a=a
this.b=b},
j5:function j5(a){this.a=a},
j6:function j6(a,b){this.a=a
this.b=b},
j7:function j7(a,b,c){this.a=a
this.b=b
this.c=c},
j8:function j8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j9:function j9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
az:function az(){},
hn:function hn(){},
h9:function h9(){},
bq:function bq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hA:function hA(a){this.a=a},
e6:function e6(a){this.a=a},
h1:function h1(a){this.a=a},
hP:function hP(a){this.a=a},
ar:function ar(a,b){this.a=a
this.b=b},
ac:function ac(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
f9:function f9(a){this.a=a},
fd:function fd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fe:function fe(a,b){this.a=a
this.$ti=b},
ff:function ff(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
j1:function j1(a){this.a=a},
j2:function j2(a){this.a=a},
j3:function j3(a){this.a=a},
f8:function f8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
it:function it(a,b){this.a=a
this.b=b},
iM:function(a){var t,s,r
if(!!J.p(a).$isq)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
ai:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.au(b,a))},
bz:function bz(){},
b7:function b7(){},
fu:function fu(){},
cG:function cG(){},
cH:function cH(){},
cI:function cI(){},
cF:function cF(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(){},
fA:function fA(){},
cJ:function cJ(){},
fB:function fB(){},
bT:function bT(){},
bU:function bU(){},
bV:function bV(){},
bW:function bW(){},
ol:function(a){return J.an(H.A(a?Object.keys(a):[],[null]))},
aT:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
p:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cy.prototype
return J.cx.prototype}if(typeof a=="string")return J.aE.prototype
if(a==null)return J.f7.prototype
if(typeof a=="boolean")return J.f6.prototype
if(a.constructor==Array)return J.aD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aF.prototype
return a}if(a instanceof P.D)return a
return J.iY(a)},
kd:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iY:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.ka==null){H.os()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.jY("Return interceptor for "+H.d(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jH()]
if(p!=null)return p
p=H.ox(a)
if(p!=null)return p
if(typeof a=="function")return C.U
s=Object.getPrototypeOf(a)
if(s==null)return C.D
if(s===Object.prototype)return C.D
if(typeof q=="function"){Object.defineProperty(q,$.$get$jH(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
an:function(a){a.fixed$length=Array
return a},
kY:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
np:function(a,b){var t,s
for(t=a.length;b<t;){s=C.h.af(a,b)
if(s!==32&&s!==13&&!J.kY(s))break;++b}return b},
nq:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.h.ck(a,t)
if(s!==32&&s!==13&&!J.kY(s))break}return b},
P:function(a){if(typeof a=="string")return J.aE.prototype
if(a==null)return a
if(a.constructor==Array)return J.aD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aF.prototype
return a}if(a instanceof P.D)return a
return J.iY(a)},
aS:function(a){if(a==null)return a
if(a.constructor==Array)return J.aD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aF.prototype
return a}if(a instanceof P.D)return a
return J.iY(a)},
lN:function(a){if(typeof a=="number")return J.b3.prototype
if(a==null)return a
if(!(a instanceof P.D))return J.aN.prototype
return a},
on:function(a){if(typeof a=="number")return J.b3.prototype
if(typeof a=="string")return J.aE.prototype
if(a==null)return a
if(!(a instanceof P.D))return J.aN.prototype
return a},
iX:function(a){if(typeof a=="string")return J.aE.prototype
if(a==null)return a
if(!(a instanceof P.D))return J.aN.prototype
return a},
i:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aF.prototype
return a}if(a instanceof P.D)return a
return J.iY(a)},
z:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.p(a).w(a,b)},
aa:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.lN(a).W(a,b)},
m6:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lN(a).X(a,b)},
bm:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ow(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.P(a).h(a,b)},
m7:function(a,b,c){return J.aS(a).j(a,b,c)},
m8:function(a,b,c,d){return J.i(a).e8(a,b,c,d)},
kg:function(a,b){return J.iX(a).af(a,b)},
m9:function(a,b,c,d){return J.i(a).el(a,b,c,d)},
jp:function(a,b){return J.i(a).es(a,b)},
ma:function(a,b,c,d){return J.i(a).eu(a,b,c,d)},
mb:function(a,b,c){return J.i(a).ev(a,b,c)},
kh:function(a,b){return J.i(a).c7(a,b)},
jq:function(a,b){return J.i(a).S(a,b)},
ki:function(a,b,c){return J.i(a).ca(a,b,c)},
mc:function(a,b){return J.i(a).eK(a,b)},
jr:function(a,b,c){return J.i(a).cb(a,b,c)},
md:function(a,b,c){return J.i(a).cc(a,b,c)},
c9:function(a,b,c){return J.i(a).cd(a,b,c)},
dX:function(a,b){return J.i(a).eN(a,b)},
me:function(a,b){return J.i(a).ce(a,b)},
mf:function(a,b,c){return J.i(a).cf(a,b,c)},
kj:function(a,b,c,d){return J.i(a).cg(a,b,c,d)},
mg:function(a,b){return J.aS(a).ci(a,b)},
mh:function(a,b,c,d,e){return J.i(a).cj(a,b,c,d,e)},
mi:function(a,b){return J.on(a).T(a,b)},
js:function(a,b,c){return J.P(a).eT(a,b,c)},
dY:function(a){return J.i(a).cm(a)},
mj:function(a){return J.i(a).cn(a)},
mk:function(a){return J.i(a).cp(a)},
kk:function(a){return J.i(a).eZ(a)},
ml:function(a,b){return J.i(a).cr(a,b)},
jt:function(a,b){return J.i(a).cs(a,b)},
mm:function(a,b,c,d){return J.i(a).ct(a,b,c,d)},
mn:function(a,b,c,d,e){return J.i(a).f6(a,b,c,d,e)},
mo:function(a,b,c,d,e){return J.i(a).cu(a,b,c,d,e)},
mp:function(a,b,c,d,e,f){return J.i(a).f7(a,b,c,d,e,f)},
mq:function(a,b){return J.aS(a).t(a,b)},
ca:function(a,b){return J.i(a).cv(a,b)},
mr:function(a,b){return J.i(a).cw(a,b)},
ms:function(a){return J.i(a).f8(a)},
kl:function(a,b){return J.aS(a).ao(a,b)},
mt:function(a){return J.i(a).geJ(a)},
bn:function(a){return J.p(a).gv(a)},
aU:function(a){return J.aS(a).gu(a)},
bo:function(a){return J.P(a).gk(a)},
mu:function(a){return J.i(a).gbh(a)},
mv:function(a){return J.i(a).gbi(a)},
mw:function(a){return J.p(a).gA(a)},
mx:function(a){return J.i(a).gfC(a)},
my:function(a){return J.i(a).gcO(a)},
mz:function(a){return J.i(a).gaw(a)},
ju:function(a){return J.i(a).gm(a)},
jv:function(a){return J.i(a).gn(a)},
km:function(a){return J.i(a).gE(a)},
jw:function(a,b){return J.i(a).ab(a,b)},
mA:function(a){return J.i(a).aL(a)},
mB:function(a){return J.i(a).bq(a)},
mC:function(a,b){return J.i(a).br(a,b)},
mD:function(a,b,c){return J.i(a).bs(a,b,c)},
kn:function(a,b,c){return J.i(a).bv(a,b,c)},
mE:function(a,b){return J.i(a).cD(a,b)},
mF:function(a,b){return J.aS(a).cH(a,b)},
mG:function(a,b,c){return J.i(a).cJ(a,b,c)},
ko:function(a){return J.aS(a).fu(a)},
mH:function(a,b){return J.i(a).H(a,b)},
mI:function(a,b){return J.iX(a).dq(a,b)},
mJ:function(a,b,c,d){return J.i(a).bB(a,b,c,d)},
mK:function(a,b,c,d,e,f,g){return J.i(a).cP(a,b,c,d,e,f,g)},
mL:function(a,b,c,d){return J.i(a).cQ(a,b,c,d)},
kp:function(a,b,c,d){return J.i(a).cR(a,b,c,d)},
mM:function(a){return J.iX(a).fF(a)},
bp:function(a){return J.p(a).l(a)},
mN:function(a,b,c,d){return J.i(a).fH(a,b,c,d)},
mO:function(a){return J.iX(a).fI(a)},
mP:function(a,b,c){return J.i(a).cT(a,b,c)},
mQ:function(a,b,c){return J.i(a).cU(a,b,c)},
jx:function(a,b,c){return J.i(a).cV(a,b,c)},
mR:function(a,b,c){return J.i(a).cW(a,b,c)},
kq:function(a,b,c){return J.i(a).cX(a,b,c)},
kr:function(a,b,c){return J.i(a).cY(a,b,c)},
ks:function(a,b,c){return J.i(a).cZ(a,b,c)},
kt:function(a,b,c,d){return J.i(a).d_(a,b,c,d)},
ku:function(a,b,c,d){return J.i(a).d0(a,b,c,d)},
mS:function(a,b){return J.i(a).d2(a,b)},
mT:function(a,b,c){return J.i(a).fJ(a,b,c)},
mU:function(a,b,c,d,e,f,g){return J.i(a).d3(a,b,c,d,e,f,g)},
mV:function(a,b,c,d,e){return J.i(a).d5(a,b,c,d,e)},
a:function a(){},
f6:function f6(){},
f7:function f7(){},
bv:function bv(){},
fO:function fO(){},
aN:function aN(){},
aF:function aF(){},
aD:function aD(a){this.$ti=a},
jF:function jF(a){this.$ti=a},
e1:function e1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b3:function b3(){},
cy:function cy(){},
cx:function cx(){},
aE:function aE(){}},P={
nO:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.oc()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.at(new P.hR(t),1)).observe(s,{childList:true})
return new P.hQ(t,s,r)}else if(self.setImmediate!=null)return P.od()
return P.oe()},
nP:function(a){H.iV()
self.scheduleImmediate(H.at(new P.hS(a),0))},
nQ:function(a){H.iV()
self.setImmediate(H.at(new P.hT(a),0))},
nR:function(a){P.jV(C.x,a)},
jV:function(a,b){var t=C.b.K(a.a,1000)
return H.nI(t<0?0:t,b)},
o7:function(a,b){if(H.bk(a,{func:1,args:[P.N,P.N]})){b.toString
return a}else{b.toString
return a}},
nb:function(a,b,c){var t
if(a==null)a=new P.b8()
t=$.v
if(t!==C.d)t.toString
t=new P.F(0,t,null,[c])
t.bP(a,b)
return t},
nc:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.F(0,$.v,null,[P.h])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eW(t,b,!1,s)
try{for(m=0,l=0;m<2;++m){q=a[m]
p=l
q.bm(new P.eV(t,p,s,b,!1),r)
l=++t.b}if(l===0){l=new P.F(0,$.v,null,[null])
l.bO(C.B)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.M(j)
n=H.a6(j)
if(t.b===0||!1)return P.nb(o,n,null)
else{t.c=o
t.d=n}}return s},
o1:function(a,b,c){$.v.toString
a.I(b,c)},
nU:function(a,b){var t=new P.F(0,$.v,null,[b])
H.b(!0)
t.a=4
t.c=a
return t},
lt:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.F))
H.b(b.a===0)
b.a=1
try{a.bm(new P.i9(b),new P.ia(b))}catch(r){t=H.M(r)
s=H.a6(r)
P.oD(new P.ib(b,t,s))}},
i8:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.aC()
b.aX(a)
P.bd(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.c1(r)}},
bd:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.iN(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bd(t.a,b)}s=t.a
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
P.iN(null,null,p,o,s)
return}s=$.v
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.v
H.b(l==null?s!=null:l!==s)
j=$.v
$.v=l
i=j}else i=null
s=b.c
if(s===8)new P.ih(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.ig(r,b,m).$0()}else if((s&2)!==0)new P.ie(t,r,b).$0()
if(i!=null){H.b(!0)
$.v=i}s=r.b
if(!!J.p(s).$isZ){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.aD(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.i8(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.aD(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
o6:function(){var t,s
for(;t=$.bh,t!=null;){$.c3=null
s=t.b
$.bh=s
if(s==null)$.c2=null
t.a.$0()}},
oa:function(){$.k5=!0
try{P.o6()}finally{$.c3=null
$.k5=!1
if($.bh!=null)$.$get$k1().$1(P.lH())}},
lB:function(a){var t=new P.d7(a,null)
if($.bh==null){$.c2=t
$.bh=t
if(!$.k5)$.$get$k1().$1(P.lH())}else{$.c2.b=t
$.c2=t}},
o9:function(a){var t,s,r
t=$.bh
if(t==null){P.lB(a)
$.c3=$.c2
return}s=new P.d7(a,null)
r=$.c3
if(r==null){s.b=t
$.c3=s
$.bh=s}else{s.b=r.b
r.b=s
$.c3=s
if(s.b==null)$.c2=s}},
oD:function(a){var t=$.v
if(C.d===t){P.bi(null,null,C.d,a)
return}t.toString
P.bi(null,null,t,t.be(a))},
o_:function(a,b,c){var t=a.eO(0)
if(!!J.p(t).$isZ&&t!==$.$get$kS())t.fK(new P.iL(b,c))
else b.ah(c)},
nJ:function(a,b){var t=$.v
if(t===C.d){t.toString
return P.jV(a,b)}return P.jV(a,t.be(b))},
k0:function(a){var t,s
H.b(a!=null)
t=$.v
H.b(a==null?t!=null:a!==t)
s=$.v
$.v=a
return s},
iN:function(a,b,c,d,e){var t={}
t.a=d
P.o9(new P.iO(t,e))},
lz:function(a,b,c,d){var t,s
if($.v===c)return d.$0()
t=P.k0(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.v=s}},
lA:function(a,b,c,d,e){var t,s
if($.v===c)return d.$1(e)
t=P.k0(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.v=s}},
o8:function(a,b,c,d,e,f){var t,s
if($.v===c)return d.$2(e,f)
t=P.k0(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.v=s}},
bi:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.be(d):c.eL(d)
P.lB(d)},
hR:function hR(a){this.a=a},
hQ:function hQ(a,b,c){this.a=a
this.b=b
this.c=c},
hS:function hS(a){this.a=a},
hT:function hT(a){this.a=a},
Z:function Z(){},
eW:function eW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eV:function eV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jA:function jA(){},
hW:function hW(){},
bN:function bN(a,b){this.a=a
this.$ti=b},
iG:function iG(a,b){this.a=a
this.$ti=b},
bP:function bP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
F:function F(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i5:function i5(a,b){this.a=a
this.b=b},
id:function id(a,b){this.a=a
this.b=b},
i9:function i9(a){this.a=a},
ia:function ia(a){this.a=a},
ib:function ib(a,b,c){this.a=a
this.b=b
this.c=c},
i7:function i7(a,b){this.a=a
this.b=b},
ic:function ic(a,b){this.a=a
this.b=b},
i6:function i6(a,b,c){this.a=a
this.b=b
this.c=c},
ih:function ih(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ii:function ii(a){this.a=a},
ig:function ig(a,b,c){this.a=a
this.b=b
this.c=c},
ie:function ie(a,b,c){this.a=a
this.b=b
this.c=c},
d7:function d7(a,b){this.a=a
this.b=b},
bG:function bG(){},
hh:function hh(a){this.a=a},
hi:function hi(a,b){this.a=a
this.b=b},
hf:function hf(a,b,c){this.a=a
this.b=b
this.c=c},
hg:function hg(a){this.a=a},
he:function he(){},
iL:function iL(a,b){this.a=a
this.b=b},
jU:function jU(){},
aV:function aV(a,b){this.a=a
this.b=b},
iK:function iK(){},
iO:function iO(a,b){this.a=a
this.b=b},
iw:function iw(){},
iy:function iy(a,b){this.a=a
this.b=b},
ix:function ix(a,b){this.a=a
this.b=b},
iz:function iz(a,b){this.a=a
this.b=b},
l_:function(a,b){return new H.ac(0,null,null,null,null,null,0,[a,b])},
I:function(){return new H.ac(0,null,null,null,null,null,0,[null,null])},
ao:function(a){return H.om(a,new H.ac(0,null,null,null,null,null,0,[null,null]))},
bf:function(a,b){return new P.ip(0,null,null,null,null,null,0,[a,b])},
aH:function(a,b,c,d){return new P.im(0,null,null,null,null,null,0,[d])},
k3:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
nm:function(a,b,c){var t,s
if(P.k6(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$c4()
C.a.i(s,a)
try{P.o5(a,t)}finally{H.b(C.a.gaG(s)===a)
s.pop()}s=P.ld(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
f5:function(a,b,c){var t,s,r
if(P.k6(a))return b+"..."+c
t=new P.bH(b)
s=$.$get$c4()
C.a.i(s,a)
try{r=t
r.a=P.ld(r.ga6(),a,", ")}finally{H.b(C.a.gaG(s)===a)
s.pop()}s=t
s.a=s.ga6()+c
s=t.ga6()
return s.charCodeAt(0)==0?s:s},
k6:function(a){var t,s
for(t=0;s=$.$get$c4(),t<s.length;++t)if(a===s[t])return!0
return!1},
o5:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gu(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.p())return
q=H.d(t.gq(t))
C.a.i(b,q)
s+=q.length+2;++r}if(!t.p()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gq(t);++r
if(!t.p()){if(r<=4){C.a.i(b,H.d(n))
return}p=H.d(n)
o=b.pop()
s+=p.length+2}else{m=t.gq(t);++r
H.b(r<100)
for(;t.p();n=m,m=l){l=t.gq(t);++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.i(b,"...")
return}}o=H.d(n)
p=H.d(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.i(b,k)
C.a.i(b,o)
C.a.i(b,p)},
jL:function(a,b){var t,s
t=P.aH(null,null,null,b)
for(s=J.aU(a);s.p();)t.i(0,s.gq(s))
return t},
l1:function(a){var t,s,r
t={}
if(P.k6(a))return"{...}"
s=new P.bH("")
try{C.a.i($.$get$c4(),a)
r=s
r.a=r.ga6()+"{"
t.a=!0
J.kl(a,new P.fl(t,s))
t=s
t.a=t.ga6()+"}"}finally{t=$.$get$c4()
H.b(C.a.gaG(t)===a)
t.pop()}t=s.ga6()
return t.charCodeAt(0)==0?t:t},
jM:function(a,b){var t=new P.fg(null,0,0,0,[b])
t.dO(a,b)
return t},
ip:function ip(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
im:function im(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
io:function io(a,b,c){this.a=a
this.b=b
this.c=c},
bR:function bR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ik:function ik(){},
jK:function jK(){},
cz:function cz(){},
m:function m(){},
cB:function cB(){},
fl:function fl(a,b){this.a=a
this.b=b},
b6:function b6(){},
fg:function fg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iq:function iq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
h3:function h3(){},
h2:function h2(){},
bS:function bS(){},
n7:function(a){var t=J.p(a)
if(!!t.$isaz)return t.l(a)
return"Instance of '"+H.bC(a)+"'"},
l0:function(a,b,c){var t,s
t=H.A([],[c])
for(s=J.aU(a);s.p();)C.a.i(t,s.gq(s))
if(b)return t
return J.an(t)},
la:function(a,b,c){return new H.f8(a,H.kZ(a,!1,!0,!1),null,null)},
ld:function(a,b,c){var t=J.aU(b)
if(!t.p())return a
if(c.length===0){do a+=H.d(t.gq(t))
while(t.p())}else{a+=H.d(t.gq(t))
for(;t.p();)a=a+c+H.d(t.gq(t))}return a},
n1:function(a,b){return J.mi(a,b)},
n2:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
n3:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cf:function(a){if(a>=10)return""+a
return"0"+a},
kO:function(a,b,c,d,e,f){return new P.aC(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
cm:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bp(a)
if(typeof a==="string")return JSON.stringify(a)
return P.n7(a)},
mX:function(a){return new P.cd(a)},
cc:function(a){return new P.a0(!1,null,null,a)},
jy:function(a,b,c){return new P.a0(!0,a,b,c)},
mW:function(a){return new P.a0(!1,null,a,"Must not be null")},
fU:function(a,b,c){return new P.cP(null,null,!0,a,b,"Value not in range")},
aK:function(a,b,c,d,e){return new P.cP(b,c,!0,a,d,"Invalid value")},
jR:function(a,b,c,d,e,f){if(C.b.W(0,a)||C.b.W(a,c))throw H.c(P.aK(a,0,c,"start",f))
if(b!=null){if(a>b||C.b.W(b,c))throw H.c(P.aK(b,a,c,"end",f))
return b}return c},
B:function(a,b,c,d,e){var t=e!=null?e:J.bo(b)
return new P.f2(b,t,!0,a,c,"Index out of range")},
t:function(a){return new P.hD(a)},
jY:function(a){return new P.hB(a)},
cX:function(a){return new P.bb(a)},
al:function(a){return new P.e8(a)},
cn:function(a){return new P.i4(a)},
jD:function(a,b,c){return new P.eT(a,b,c)},
T:function(a){H.aT(H.d(a))},
ak:function ak(){},
H:function H(){},
aA:function aA(a,b){this.a=a
this.b=b},
a_:function a_(){},
aC:function aC(a){this.a=a},
eo:function eo(){},
ep:function ep(){},
aZ:function aZ(){},
cd:function cd(a){this.a=a},
b8:function b8(){},
a0:function a0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cP:function cP(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
f2:function f2(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hD:function hD(a){this.a=a},
hB:function hB(a){this.a=a},
bb:function bb(a){this.a=a},
e8:function e8(a){this.a=a},
cW:function cW(){},
eh:function eh(a){this.a=a},
jC:function jC(){},
i4:function i4(a){this.a=a},
eT:function eT(a,b,c){this.a=a
this.b=b
this.c=c},
es:function es(a,b,c){this.a=a
this.b=b
this.$ti=c},
x:function x(){},
U:function U(){},
cw:function cw(){},
h:function h(){},
b5:function b5(){},
N:function N(){},
a9:function a9(){},
D:function D(){},
jS:function jS(){},
ba:function ba(){},
o:function o(){},
bH:function bH(a){this.a=a},
jX:function jX(){},
lJ:function(a){return a},
iS:function(a){var t,s,r,q,p
if(a==null)return
t=P.I()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
t.j(0,p,a[p])}return t},
oi:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.kl(a,new P.iP(t))
return t},
oj:function(a){var t,s
t=new P.F(0,$.v,null,[null])
s=new P.bN(t,[null])
a.then(H.at(new P.iQ(s),1))["catch"](H.at(new P.iR(s),1))
return t},
kN:function(){var t=$.kM
if(t==null){t=J.js(window.navigator.userAgent,"Opera",0)
$.kM=t}return t},
n4:function(){var t,s
t=$.kJ
if(t!=null)return t
s=$.kK
if(s==null){s=J.js(window.navigator.userAgent,"Firefox",0)
$.kK=s}if(s)t="-moz-"
else{s=$.kL
if(s==null){s=!P.kN()&&J.js(window.navigator.userAgent,"Trident/",0)
$.kL=s}if(s)t="-ms-"
else t=P.kN()?"-o-":"-webkit-"}$.kJ=t
return t},
hM:function hM(){},
hO:function hO(a,b){this.a=a
this.b=b},
iP:function iP(a){this.a=a},
hN:function hN(a,b,c){this.a=a
this.b=b
this.c=c},
iQ:function iQ(a){this.a=a},
iR:function iR(a){this.a=a},
hH:function hH(){},
oG:function(a){return Math.sqrt(a)},
iv:function iv(){},
V:function V(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
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
eP:function eP(){},
eR:function eR(){},
a3:function a3(){},
ab:function ab(){},
f0:function f0(){},
fb:function fb(){},
fn:function fn(){},
fF:function fF(){},
fM:function fM(){},
fQ:function fQ(){},
fR:function fR(){},
fV:function fV(){},
fW:function fW(){},
bD:function bD(){},
hj:function hj(){},
w:function w(){},
hk:function hk(){},
bJ:function bJ(){},
bK:function bK(){},
hx:function hx(){},
hF:function hF(){},
di:function di(){},
dj:function dj(){},
dq:function dq(){},
dr:function dr(){},
dA:function dA(){},
dB:function dB(){},
dG:function dG(){},
dH:function dH(){},
e2:function e2(){},
e3:function e3(){},
aW:function aW(){},
fG:function fG(){},
h_:function h_(){},
h0:function h0(){},
h8:function h8(){},
dw:function dw(){},
dx:function dx(){}},W={
n5:function(a,b,c){var t,s
t=document.body
s=(t&&C.o).P(t,a,b,c)
s.toString
t=new H.d6(new W.R(s),new W.er(),[W.r])
return t.ga4(t)},
n6:function(a){return"wheel"},
br:function(a){var t,s,r
t="element tag unavailable"
try{s=J.mx(a)
if(typeof s==="string")t=a.tagName}catch(r){H.M(r)}return t},
nT:function(a,b){return document.createElement(a)},
aR:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lx:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
W:function(a,b,c,d,e){var t=c==null?null:W.lD(new W.i3(c))
t=new W.i2(0,a,b,t,!1,[e])
t.e1(a,b,c,!1,e)
return t},
lu:function(a){var t,s
t=document.createElement("a")
s=new W.iA(t,window.location)
s=new W.bQ(s)
s.e2(a)
return s},
nW:function(a,b,c,d){return!0},
nX:function(a,b,c,d){var t,s,r,q,p
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
ly:function(){var t=P.o
t=new W.iH(P.jL(C.r,t),P.aH(null,null,null,t),P.aH(null,null,null,t),P.aH(null,null,null,t),null)
t.e6(null,new H.bw(C.r,new W.iI(),[H.a7(C.r,0),null]),["TEMPLATE"],null)
return t},
o2:function(a){var t
if(a==null)return
if("postMessage" in a){t=W.nS(a)
if(!!J.p(t).$ise)return t
return}else return a},
o3:function(a){var t
if(!!J.p(a).$isaB)return a
t=new P.hN([],[],!1)
t.c=!0
return t.bn(a)},
nS:function(a){if(a===window)return a
else return new W.hY(a)},
lD:function(a){var t=$.v
if(t===C.d)return a
return t.eM(a)},
k:function k(){},
cb:function cb(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
av:function av(){},
aw:function aw(){},
e5:function e5(){},
ay:function ay(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
aX:function aX(){},
ed:function ed(){},
a1:function a1(){},
aY:function aY(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
ei:function ei(){},
ej:function ej(){},
ch:function ch(){},
aB:function aB(){},
ek:function ek(){},
ci:function ci(){},
el:function el(){},
cj:function cj(){},
ck:function ck(){},
cl:function cl(){},
em:function em(){},
en:function en(){},
a2:function a2(){},
er:function er(){},
f:function f(){},
e:function e(){},
eN:function eN(){},
eO:function eO(){},
eS:function eS(){},
eY:function eY(){},
cs:function cs(){},
eZ:function eZ(){},
bs:function bs(){},
ct:function ct(){},
cu:function cu(){},
bt:function bt(){},
b0:function b0(){},
b1:function b1(){},
b2:function b2(){},
bu:function bu(){},
aG:function aG(){},
fj:function fj(){},
fk:function fk(){},
bx:function bx(){},
fq:function fq(){},
fr:function fr(){},
by:function by(){},
fs:function fs(){},
O:function O(){},
R:function R(a){this.a=a},
r:function r(){},
cK:function cK(){},
bB:function bB(){},
ad:function ad(){},
fP:function fP(){},
fS:function fS(){},
cO:function cO(){},
cR:function cR(){},
bE:function bE(){},
aq:function aq(){},
h5:function h5(){},
h7:function h7(){},
ae:function ae(){},
hc:function hc(){},
hd:function hd(a){this.a=a},
cZ:function cZ(){},
hl:function hl(){},
hm:function hm(){},
bI:function bI(){},
ho:function ho(){},
hp:function hp(){},
hr:function hr(){},
aL:function aL(){},
hv:function hv(){},
hw:function hw(){},
d4:function d4(){},
aM:function aM(){},
hE:function hE(){},
hG:function hG(){},
bc:function bc(){},
hI:function hI(){},
hJ:function hJ(){},
aO:function aO(){},
bM:function bM(){},
hL:function hL(a){this.a=a},
k_:function k_(){},
hX:function hX(){},
hZ:function hZ(){},
ij:function ij(){},
dm:function dm(){},
iD:function iD(){},
iE:function iE(){},
hU:function hU(){},
i_:function i_(a){this.a=a},
dd:function dd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bO:function bO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i2:function i2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
i3:function i3(a){this.a=a},
bQ:function bQ(a){this.a=a},
n:function n(){},
cM:function cM(a){this.a=a},
fD:function fD(a){this.a=a},
fC:function fC(a,b,c){this.a=a
this.b=b
this.c=c},
bX:function bX(){},
iB:function iB(){},
iC:function iC(){},
iH:function iH(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iI:function iI(){},
iF:function iF(){},
cp:function cp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hY:function hY(a){this.a=a},
cL:function cL(){},
jO:function jO(){},
jZ:function jZ(){},
iA:function iA(a,b){this.a=a
this.b=b},
dI:function dI(a){this.a=a},
iJ:function iJ(a){this.a=a},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
db:function db(){},
dc:function dc(){},
de:function de(){},
df:function df(){},
dg:function dg(){},
dh:function dh(){},
dk:function dk(){},
dl:function dl(){},
dn:function dn(){},
dp:function dp(){},
ds:function ds(){},
dt:function dt(){},
bY:function bY(){},
bZ:function bZ(){},
du:function du(){},
dv:function dv(){},
dz:function dz(){},
dC:function dC(){},
dD:function dD(){},
c_:function c_(){},
c0:function c0(){},
dE:function dE(){},
dF:function dF(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){}},B={
oE:function(a){var t,s
t=document
s=W.aG
W.W(t,"keydown",new B.jh(),!1,s)
W.W(t,"keyup",new B.ji(),!1,s)
if(!$.oF)W.W(t,"mousemove",new B.jj(),!1,W.O)
s=W.O
W.W(t,"mousedown",new B.jk(),!1,s)
W.W(t,"mouseup",new B.jl(),!1,s)},
nu:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$iT()
r=$.$get$c6()
q=new T.K(new Float32Array(16))
q.O()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.fH(a,b,c,0,new T.l(t),-0.02,s,r,q,new T.l(p),new T.l(o),new T.l(n),new T.l(new Float32Array(3)),"camera:orbit",!1,!0)
t.dR(a,b,c,d)
return t},
jh:function jh(){},
ji:function ji(){},
jj:function jj(){},
jk:function jk(){},
jl:function jl(){},
fH:function fH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fI:function fI(a){this.a=a},
fJ:function fJ(a){this.a=a},
fK:function fK(){},
fL:function fL(a){this.a=a}},G={
nN:function(a){var t,s,r
t=H.A(a.split("\n"),[P.o])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.d(t[s])}return C.a.as(t,"\n")},
ls:function(a,b,c){var t,s,r,q
t=J.i(a)
s=t.co(a,b)
t.bz(a,s,c)
t.cl(a,s)
r=t.bu(a,s,35713)
if(r!=null&&!r){q=t.bt(a,s)
P.T("E:Compilation failed:")
P.T("E:"+G.nN(c))
P.T("E:Failure:")
P.T(C.h.U("E:",q))
throw H.c(q)}return s},
ne:function(a,b,c){var t,s,r,q
C.u.cA(a,0,a.length,0)
C.u.cA(b,0,4,0)
for(t=c.length,s=0,r=0;r<c.length;c.length===t||(0,H.C)(c),++r){q=c[r]
if(q.c){q.aT(a,s*16)
b[s]=q.d;++s}}},
l2:function(a){var t=new G.fo(P.I(),a,!1,!0)
t.dP(a)
return t},
cq:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.ju(a[s])
b[t+1]=J.jv(a[s])
b[t+2]=J.km(a[s])}return b},
n9:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.ju(a[s])
b[t+1]=J.jv(a[s])}return b},
na:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.ju(a[s])
b[t+1]=J.jv(a[s])
b[t+2]=J.km(a[s])
b[t+3]=J.mz(a[s])}return b},
n8:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.bm(a[s],0)
b[t+1]=J.bm(a[s],1)
b[t+2]=J.bm(a[s],2)
b[t+3]=J.bm(a[s],3)}return b},
nt:function(a,b,c,d){return new G.cD(b,J.kk(b.a),c,P.I(),d,null,0,-1,null,null,P.I(),"meshdata:"+a,!1,!0)},
nV:function(a,b){var t,s,r,q,p,o,n,m,l,k
for(t=a.e,s=t.gB(t),s=s.gu(s),r=b.x,q=[[P.h,P.x]],p=[P.a_],o=[T.as],n=[T.l],m=[T.ah];s.p();){l=s.gq(s)
if(!r.G(0,l)){l="Dropping unnecessary attribute: "+H.d(l)
if($.lM>0)H.aT("I: "+l)
continue}k=t.h(0,l)
switch($.$get$S().h(0,l).a){case"vec2":b.ad(l,G.n9(H.dW(k,"$ish",m,"$ash"),null),2)
break
case"vec3":b.ad(l,G.cq(H.dW(k,"$ish",n,"$ash"),null),3)
break
case"vec4":b.ad(l,G.na(H.dW(k,"$ish",o,"$ash"),null),4)
break
case"float":b.ad(l,new Float32Array(H.iM(H.dW(k,"$ish",p,"$ash"))),1)
break
case"uvec4":b.ad(l,G.n8(H.dW(k,"$ish",q,"$ash"),null),4)
break
default:if(H.a5(!1))H.aj("unknown type for "+H.d(l)+" ["+J.mw(k[0]).l(0)+"] ["+new H.ar(H.j_(k),null).l(0)+"] "+H.d(k))}}},
jT:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.aH(null,null,null,P.o)
s=c.b
r=d.b
q=c.f
p=J.mj(b.a)
o=G.ls(b.a,35633,s)
J.ki(b.a,p,o)
n=G.ls(b.a,35632,r)
J.ki(b.a,p,n)
if(q.length>0)J.mN(b.a,p,q,35980)
J.mE(b.a,p)
if(!J.mD(b.a,p,35714))H.G(J.mC(b.a,p))
t=new G.fZ(b,c,d,p,P.jL(c.c,null),P.I(),P.I(),t,null,a,!1,!0)
t.dT(a,b,c,d)
return t},
bF:function(a){return new G.h4(a,null,[],[],[],[],0,P.I())},
ft:function ft(){},
d5:function d5(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
e4:function e4(){},
e7:function e7(a,b){this.a=a
this.b=b},
eU:function eU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eL:function eL(a,b,c){this.a=a
this.b=b
this.c=c},
eM:function eM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eX:function eX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fc:function fc(){},
cN:function cN(a,b,c,d,e,f,g,h){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.d=e
_.a=f
_.b=g
_.c=h},
cg:function cg(a,b,c,d,e,f,g,h,i,j){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.d=g
_.a=h
_.b=i
_.c=j},
cV:function cV(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.dx=i
_.dy=j
_.fr=k
_.fx=l
_.d=m
_.a=n
_.b=o
_.c=p},
f_:function f_(a,b,c,d,e,f,g){var _=this
_.x=a
_.y=b
_.z=c
_.d=d
_.a=e
_.b=f
_.c=g},
d2:function d2(a,b,c){this.a=a
this.b=b
this.c=c},
d1:function d1(a,b,c){this.a=a
this.b=b
this.c=c},
fo:function fo(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
cD:function cD(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fN:function fN(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.d=i
_.a=j
_.b=k
_.c=l},
fZ:function fZ(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
h4:function h4(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
h6:function h6(){},
hq:function hq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bL:function bL(){},
f1:function f1(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={
nK:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=d.a
if(t[1]===0)return
s=b*0.5
r=c*C.q.f9(s/c)
q=-r
p=d.aN(s).aN(1/t[1])
o=[]
for(n=q;n<=r;n+=c)for(m=q;m<=r;m+=c){t=new Float32Array(3)
l=new T.l(t)
t[0]=n
t[1]=0
t[2]=m
l.i(0,p)
C.a.i(o,l)
t=new Float32Array(3)
l=new T.l(t)
t[0]=n
t[1]=0
t[2]=m
l.bC(0,p)
C.a.i(o,l)}for(k=0;k<8;++k){n=(k&1)===1?1:-1
j=(k&2)===2?1:-1
m=(k&4)===4?1:-1
if(n>0){t=j*s
l=m*s
i=new Float32Array(3)
i[0]=n*s
i[1]=t
i[2]=l
C.a.i(o,new T.l(i))
i=new Float32Array(3)
i[0]=-n*s
i[1]=t
i[2]=l
C.a.i(o,new T.l(i))}if(j>0){t=n*s
l=m*s
i=new Float32Array(3)
i[0]=t
i[1]=j*s
i[2]=l
C.a.i(o,new T.l(i))
i=new Float32Array(3)
i[0]=t
i[1]=-j*s
i[2]=l
C.a.i(o,new T.l(i))}if(m>0){t=n*s
l=j*s
i=new Float32Array(3)
i[0]=t
i[1]=l
i[2]=m*s
C.a.i(o,new T.l(i))
i=new Float32Array(3)
i[0]=t
i[1]=l
i[2]=-m*s
C.a.i(o,new T.l(i))}}a.ay(G.cq(o,null))
t=new Array(o.length)
t.fixed$length=Array
h=H.A(t,[P.x])
for(t=o.length,k=0;k<t;++k)h[k]=k
a.ae(h)},
nd:function(a){var t,s,r
t=a.a
s=t[0]
if(s!==0){r=t[1]
if(r!==0){t=new T.l(new Float32Array(3))
t.M(-r,s,0)
return t}t=t[2]
if(t!==0){r=new T.l(new Float32Array(3))
r.M(-t,0,s)
return r}t=new T.l(new Float32Array(3))
t.M(0,1,1)
return t}else{s=t[1]
if(s===0){t=new T.l(new Float32Array(3))
t.M(1,1,0)
return t}t=t[2]
if(t===0){t=new T.l(new Float32Array(3))
t.M(1,0,1)
return t}r=new T.l(new Float32Array(3))
r.M(0,-t,s)
return r}},
nM:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a3.toString
t=new T.l(new Float32Array(3))
t.F(a3)
t.D(0)
s=a2.U(0,t.aN(a4))
r=[a2,s]
q=R.nd(a3)
q.D(0)
q.aM(0,Math.tan(H.lI(a5))*a4)
for(p=0;p<8;++p){t=new Float32Array(3)
o=new T.l(t)
o.F(q)
n=new Float32Array(4)
new T.fT(n).dj(a3,p*2*3.141592653589793/8)
m=t[0]
l=t[1]
k=t[2]
j=n[0]
i=n[1]
h=n[2]
g=n[3]
f=g*m+i*k-h*l
e=g*l+h*m-j*k
d=g*k+j*l-i*m
n=-j
c=n*m-i*l-h*k
b=-h
a=-i
t[0]=f*g+c*n+e*b-d*a
t[1]=e*g+c*a+d*n-f*b
t[2]=d*g+c*b+f*a-e*n
o.i(0,s)
C.a.i(r,o)}a0=[]
for(p=1;p<r.length;++p){C.a.i(a0,0)
C.a.i(a0,p)}for(p=3;t=r.length,p<t;++p){C.a.i(a0,p-1)
C.a.i(a0,p)}C.a.i(a0,t-1)
C.a.i(a0,2)
for(p=2;p<r.length;++p)if(p%2===0){C.a.i(a0,1)
C.a.i(a0,p)}a1.ay(G.cq(r,null))
a1.ae(a0)},
nL:function(a,b,c){var t,s,r,q,p,o,n
t=[]
s=[]
for(r=$.$get$kT(),q=0;q<12;++q){p=r[q]
C.a.i(s,t.length)
C.a.i(s,12)
o=new T.l(new Float32Array(3))
o.F(p)
o.aM(0,c)
b.toString
n=new T.l(new Float32Array(3))
n.F(b)
n.i(0,o)
C.a.i(t,n)}C.a.i(t,b)
a.ay(G.cq(t,null))
a.ae(s)},
ha:function ha(){},
hb:function hb(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
l3:function(a,b){var t,s,r,q,p,o
t=new Float32Array(9)
s=new T.K(new Float32Array(16))
s.O()
r=new T.K(new Float32Array(16))
r.O()
q=new Float32Array(3)
p=new Float32Array(3)
o=new Float32Array(3)
t=new A.bA(null,null,[],new T.ap(t),s,r,new T.l(q),new T.l(p),new T.l(o),new T.l(new Float32Array(3)),a,!1,!0)
t.dQ(a,b)
return t},
lL:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
if(!b.c)return
t=b.dx
t.F(c)
s=b.d
t.cI(0,s)
r=b.ch
if(r!=null&&b.cx!=null){H.d(b)
q=C.a.gaG(e)
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
p.eV(new T.ap(o))
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
C.a.i(e,r)
a.dJ(b.cx,e,d)
e.pop()}for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.C)(s),++l)A.lL(a,s[l],t,d,e)},
lb:function(a,b,c){var t=new A.fY(c,b,H.A([],[A.b9]),17664,0,0,0,0,a,!1,!0)
t.dS(a,b,c)
return t},
bA:function bA(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.ch=a
_.cx=b
_.cy=c
_.db=d
_.dx=e
_.d=f
_.e=g
_.f=h
_.r=i
_.x=j
_.a=k
_.b=l
_.c=m},
b9:function b9(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fY:function fY(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.a=i
_.b=j
_.c=k},
dU:function(a){var t,s
t=C.u.fa(a,0,new A.j0())
s=536870911&t+(C.b.d6(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
j0:function j0(){}},D={
ns:function(a){var t,s
t=new P.F(0,$.v,null,[null])
s=new XMLHttpRequest()
C.y.fs(s,"GET",a)
W.W(s,"loadend",new D.fi(new P.bN(t,[null]),s),!1,W.oS)
C.y.H(s,"")
return t},
nr:function(a){var t,s,r
t=new P.F(0,$.v,null,[null])
s=document.createElement("img")
r=new W.bO(s,"load",!1,[W.f])
r.gbg(r).aI(new D.fh(new P.bN(t,[null]),s))
s.src=a
return t},
fi:function fi(a,b){this.a=a
this.b=b},
fh:function fh(a,b){this.a=a
this.b=b}},T={
fp:function(){return new T.K(new Float32Array(16))},
E:function(a,b,c){var t=new T.l(new Float32Array(3))
t.M(a,b,c)
return t},
ap:function ap(a){this.a=a},
K:function K(a){this.a=a},
fT:function fT(a){this.a=a},
ah:function ah(a){this.a=a},
l:function l(a){this.a=a},
as:function as(a){this.a=a},
oy:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
t={}
s=document
r=new R.hb(0,0,null,null,null,null)
r.dW(C.j.d9(s,"stats"),"blue","gray")
q=C.j.cK(s,"#webgl-canvas")
p=new G.e7(null,q)
o=(q&&C.K).d8(q,"webgl2",P.ao(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=o
if(o==null)H.G(P.cn('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+H.d(J.mA(o))
if($.lM>0)P.T("I: "+n)
J.mh(o,0,0,0,1)
J.ca(o,2929)
J.ca(o,2884)
m=B.nu(50,10,0,q)
m.bx(0,0,56)
o=new T.K(new Float32Array(16))
o.O()
n=new T.K(new Float32Array(16))
n.O()
l=new G.fN(m,50,1,0.1,1e4,o,n,new T.K(new Float32Array(16)),P.I(),"perspective",!1,!0)
l.bJ()
o=[]
n=new Float32Array(64)
k=new G.f_(o,n,new Float32Array(4),P.I(),"illumination",!1,!0)
for(n=$.$get$iW(),n=n.gaJ(n),n=n.gu(n);n.p();)C.a.i(o,n.gq(n))
o=G.jT("BlinnPhong",p,$.$get$lU(),$.$get$lS())
j=new A.b9(o,[l,k],[],"BlinnPhong",!1,!0)
n=G.jT("Gourad",p,$.$get$lV(),$.$get$lT())
i=new A.b9(n,[l,k],[],"Gourad",!1,!0)
H.b(o.dM(n))
o=G.jT("Fixed",p,$.$get$m1(),$.$get$m0())
h=new A.b9(o,[l],[],"Fixed",!1,!0)
g=A.lb("BlinnPhong",p,null)
H.b(!0)
n=g.f
C.a.i(n,j)
H.b(!0)
C.a.i(n,h)
f=A.lb("Gourad",p,null)
H.b(!0)
n=f.f
C.a.i(n,i)
H.b(!0)
C.a.i(n,h)
e=G.l2("light")
e.a3("uColor",$.$get$kG())
d=P.I()
for(n=$.$get$iW(),c=n.gB(n),c=c.gu(c),b=o.d,o=o.e;c.p();){a=c.gq(c)
a0=n.h(0,a)
a1=o.x
a2=new G.cD(b,J.kk(b.a),1,P.I(),a1,null,0,-1,null,null,P.I(),"meshdata:dirLightViz",!1,!0)
a2.bD(new Float32Array(3))
a2.y=J.dY(b.a)
a2.ae([0,0])
a1=J.p(a0)
if(!!a1.$iscg){a1=a0.Q
R.nK(a2,a1,a1/4,a0.x)}else if(!!a1.$iscV)R.nM(a2,a0.x,a0.y,a0.ch,a0.cx)
else if(!!a1.$iscN)R.nL(a2,a0.x,a0.Q)
else if(H.a5(!1))H.aj("unknown light: "+a1.gA(a0).l(0))
a1=new Float32Array(9)
a3=new T.K(new Float32Array(16))
a3.O()
a4=new T.K(new Float32Array(16))
a4.O()
a5=new Float32Array(3)
a6=new Float32Array(3)
a7=new Float32Array(3)
d.j(0,a,new A.bA(e,a2,[],new T.ap(a1),a3,a4,new T.l(a5),new T.l(a6),new T.l(a7),new T.l(new Float32Array(3)),a,!1,!0))}for(o=d.gaJ(d),o=o.gu(o),n=h.f;o.p();){c=o.gq(o)
H.b(c!=null)
C.a.i(n,c)}a8=A.l3("dragon",null)
H.b(!0)
C.a.i(i.f,a8)
H.b(!0)
C.a.i(j.f,a8)
a9=H.a8(C.j.cK(s,"#phase"),"$isbE")
H.b(a9!=null)
a9.selectedIndex=0
for(o=C.j.bp(s,"input"),n=o.length,b0=0;b0<o.length;o.length===n||(0,H.C)(o),++b0){c=J.mu(o[b0])
W.W(c.a,c.b,new T.jc(d),!1,H.a7(c,0))}for(o=C.j.bp(s,"input"),n=o.length,b0=0;b0<o.length;o.length===n||(0,H.C)(o),++b0){b1=o[b0]
c=J.i(b1)
H.aT("initialize inputs "+H.d(c.gfg(b1)))
b2=C.j.ee(s,"Event")
J.m9(b2,"change",!0,!0)
c.f5(b1,b2)}s=new T.je(q,l,f,g)
s.$1(null)
W.W(window,"resize",s,!1,W.f)
t.a=0
P.nc([D.ns("../asset/dragon/dragon.obj"),D.nr("../asset/dragon/dragon.png")],null,!1).aI(new T.jd(p,j,a8,new T.jb(t,m,a9,g,f,r)))},
jc:function jc(a){this.a=a},
je:function je(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jb:function jb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jd:function jd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},Y={
nf:function(a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
t=new G.eX(!1,[],[],[],P.I())
t.bF("aTexUV")
t.bF("aNormal")
s=P.I()
r=a6.split("\n")
q=[]
p=[]
o=[]
n=Date.now()
m=P.la("\\s+",!0,!1)
l=P.la("\\s\\s*\\$",!0,!1)
for(k=r.length,j=0;j<r.length;r.length===k||(0,H.C)(r),++j){i=r[j]
i.toString
h=H.oI(i,m," ")
g=H.oK(h,l,"",0)
if(g.length===0||g[0]==="#")continue
f=g.split(" ")
h=f[0]
if(J.z(h,"g"))s.j(0,f[1],q.length)
else if(J.z(h,"v")){h=H.aJ(f[1],null)
e=H.aJ(f[2],null)
d=H.aJ(f[3],null)
c=new Float32Array(3)
c[0]=h
c[1]=e
c[2]=d
C.a.i(q,new T.l(c))}else if(J.z(h,"vt")){h=H.aJ(f[1],null)
e=H.aJ(f[2],null)
d=new Float32Array(2)
d[0]=h
d[1]=e
C.a.i(o,new T.ah(d))}else if(J.z(h,"vn")){h=H.aJ(f[1],null)
e=H.aJ(f[2],null)
d=H.aJ(f[3],null)
c=new Float32Array(3)
c[0]=h
c[1]=e
c[2]=d
C.a.i(p,new T.l(c))}else if(J.z(h,"f")){h=f.length
if(h!==4&&h!==5){H.aT("*** Error: face '"+g+"' not handled")
continue}b=[]
a=[]
a0=[]
for(a1=1;h=f.length,a1<h;++a1){a2=J.mI(f[a1],"/")
H.b(a2.length>0)
for(;a2.length<3;)C.a.i(a2,"")
a3=H.jQ(a2[0],null,null)-1
a4=J.z(a2[1],"")?-1:H.jQ(a2[1],null,null)-1
a5=J.z(a2[2],"")?-1:H.jQ(a2[2],null,null)-1
if(a3<q.length)C.a.i(b,q[a3])
else C.a.i(b,new T.l(new Float32Array(3)))
if(a4!==-1&&a4<o.length)C.a.i(a0,o[a4])
else{H.aT("problem uv "+a1+" "+a4)
C.a.i(a0,new T.ah(new Float32Array(2)))}if(a5!==-1&&a5<p.length)C.a.i(a,p[a5])
else{H.aT("problem normals "+a1+" "+a5)
C.a.i(a,new T.l(new Float32Array(3)))}}if(h===4)t.dD(b)
else t.dE(b)
t.dB("aNormal",a)
t.dA("aTexUV",a0)}}P.T("loaded ("+P.kO(0,0,0,Date.now()-new P.aA(n,!1).a,0,0).l(0)+") "+t.l(0))
return t}}
var v=[C,H,J,P,W,B,G,R,A,D,T,Y]
setFunctionNamesIfNecessary(v)
var $={}
H.jG.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gv:function(a){return H.aI(a)},
l:function(a){return"Instance of '"+H.bC(a)+"'"},
gA:function(a){return new H.ar(H.j_(a),null)}}
J.f6.prototype={
l:function(a){return String(a)},
gv:function(a){return a?519018:218159},
gA:function(a){return C.aq},
$isak:1}
J.f7.prototype={
w:function(a,b){return null==b},
l:function(a){return"null"},
gv:function(a){return 0},
gA:function(a){return C.ak},
$isN:1}
J.bv.prototype={
gv:function(a){return 0},
gA:function(a){return C.aj},
l:function(a){return String(a)},
$iskX:1}
J.fO.prototype={}
J.aN.prototype={}
J.aF.prototype={
l:function(a){var t=a[$.$get$kI()]
return t==null?this.dv(a):J.bp(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjE:1}
J.aD.prototype={
i:function(a,b){if(!!a.fixed$length)H.G(P.t("add"))
a.push(b)},
N:function(a,b){var t,s,r,q
t=a.length
if(!!a.fixed$length)H.G(P.t("addAll"))
for(s=0;s<1;++s,t=q){r=b[s]
q=t+1
H.b(t===a.length||H.G(P.al(a)))
a.push(r)}},
cH:function(a,b){return new H.bw(a,b,[H.a7(a,0),null])},
as:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.d(a[s])
return t.join(b)},
t:function(a,b){return this.h(a,b)},
gbg:function(a){if(a.length>0)return a[0]
throw H.c(H.cv())},
gaG:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.cv())},
by:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.G(P.t("setRange"))
P.jR(b,c,a.length,null,null,null)
t=C.b.a5(c,b)
if(t===0)return
if(e<0)H.G(P.aK(e,0,null,"skipCount",null))
s=J.P(d)
if(C.b.W(e+t,s.gk(d)))throw H.c(H.nn())
if(C.b.X(e,b))for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
c9:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.c(P.al(a))}return!1},
dn:function(a,b){if(!!a.immutable$list)H.G(P.t("sort"))
H.nH(a,P.ok())},
aO:function(a){return this.dn(a,null)},
C:function(a,b){var t
for(t=0;t<a.length;++t)if(J.z(a[t],b))return!0
return!1},
l:function(a){return P.f5(a,"[","]")},
gu:function(a){return new J.e1(a,a.length,0,null,[H.a7(a,0)])},
gv:function(a){return H.aI(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.G(P.t("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.jy(b,"newLength",null))
if(b<0)throw H.c(P.aK(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.au(a,b))
if(b>=a.length||b<0)throw H.c(H.au(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.G(P.t("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.au(a,b))
if(b>=a.length||b<0)throw H.c(H.au(a,b))
a[b]=c},
$isq:1,
$asq:function(){},
$isj:1,
$ish:1}
J.jF.prototype={}
J.e1.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.C(t))
r=this.c
if(r>=s){this.sbL(null)
return!1}this.sbL(t[r]);++this.c
return!0},
sbL:function(a){this.d=a}}
J.b3.prototype={
T:function(a,b){var t
if(typeof b!=="number")throw H.c(H.L(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaE(b)
if(this.gaE(a)===t)return 0
if(this.gaE(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaE:function(a){return a===0?1/a<0:a<0},
eP:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.c(P.t(""+a+".ceil()"))},
f9:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.c(P.t(""+a+".floor()"))},
a9:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.t(""+a+".round()"))},
eQ:function(a,b,c){if(this.T(b,c)>0)throw H.c(H.L(b))
if(this.T(a,b)<0)return b
if(this.T(a,c)>0)return c
return a},
fG:function(a,b){var t
if(b>20)throw H.c(P.aK(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaE(a))return"-"+t
return t},
l:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
U:function(a,b){if(typeof b!=="number")throw H.c(H.L(b))
return a+b},
a5:function(a,b){if(typeof b!=="number")throw H.c(H.L(b))
return a-b},
d7:function(a,b){if(typeof b!=="number")throw H.c(H.L(b))
return a/b},
J:function(a,b){if(typeof b!=="number")throw H.c(H.L(b))
return a*b},
aR:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.c5(a,b)},
K:function(a,b){return(a|0)===a?a/b|0:this.c5(a,b)},
c5:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.t("Result of truncating division is "+H.d(t)+": "+H.d(a)+" ~/ "+b))},
b6:function(a,b){var t
if(a>0)t=this.eA(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
eA:function(a,b){return b>31?0:a>>>b},
d6:function(a,b){if(typeof b!=="number")throw H.c(H.L(b))
return(a&b)>>>0},
dz:function(a,b){if(typeof b!=="number")throw H.c(H.L(b))
return(a^b)>>>0},
X:function(a,b){if(typeof b!=="number")throw H.c(H.L(b))
return a<b},
W:function(a,b){if(typeof b!=="number")throw H.c(H.L(b))
return a>b},
bo:function(a,b){if(typeof b!=="number")throw H.c(H.L(b))
return a>=b},
gA:function(a){return C.at},
$isH:1,
$asH:function(){return[P.a9]},
$isa_:1,
$isa9:1}
J.cy.prototype={
gA:function(a){return C.as},
$isx:1}
J.cx.prototype={
gA:function(a){return C.ar}}
J.aE.prototype={
ck:function(a,b){if(b<0)throw H.c(H.au(a,b))
if(b>=a.length)H.G(H.au(a,b))
return a.charCodeAt(b)},
af:function(a,b){if(b>=a.length)throw H.c(H.au(a,b))
return a.charCodeAt(b)},
U:function(a,b){if(typeof b!=="string")throw H.c(P.jy(b,null,null))
return a+b},
dq:function(a,b){var t=H.A(a.split(b),[P.o])
return t},
dr:function(a,b,c){var t
if(c>a.length)throw H.c(P.aK(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bA:function(a,b){return this.dr(a,b,0)},
aP:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.fU(b,null,null))
if(b>c)throw H.c(P.fU(b,null,null))
if(c>a.length)throw H.c(P.fU(c,null,null))
return a.substring(b,c)},
ds:function(a,b){return this.aP(a,b,null)},
fF:function(a){return a.toLowerCase()},
fI:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.af(t,0)===133){r=J.np(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.ck(t,q)===133?J.nq(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
eT:function(a,b,c){if(c>a.length)throw H.c(P.aK(c,0,a.length,null,null))
return H.oH(a,b,c)},
T:function(a,b){var t
if(typeof b!=="string")throw H.c(H.L(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
l:function(a){return a},
gv:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gA:function(a){return C.al},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.au(a,b))
return a[b]},
$isq:1,
$asq:function(){},
$isH:1,
$asH:function(){return[P.o]},
$iso:1}
H.j.prototype={}
H.b4.prototype={
gu:function(a){return new H.cA(this,this.gk(this),0,null,[H.X(this,"b4",0)])},
aK:function(a,b){return this.du(0,b)},
fE:function(a,b){var t,s
t=H.A([],[H.X(this,"b4",0)])
C.a.sk(t,this.gk(this))
for(s=0;C.b.X(s,this.gk(this));++s)t[s]=this.t(0,s)
return t},
fD:function(a){return this.fE(a,!0)}}
H.cA.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.P(t)
r=s.gk(t)
q=this.b
if(q==null?r!=null:q!==r)throw H.c(P.al(t))
if(C.b.bo(this.c,r)){this.sai(null)
return!1}this.sai(s.t(t,this.c));++this.c
return!0},
sai:function(a){this.d=a}}
H.cC.prototype={
gu:function(a){return new H.fm(null,J.aU(this.a),this.b,this.$ti)},
gk:function(a){return J.bo(this.a)},
$asU:function(a,b){return[b]}}
H.eq.prototype={$isj:1,
$asj:function(a,b){return[b]}}
H.fm.prototype={
p:function(){var t=this.b
if(t.p()){this.sai(this.c.$1(t.gq(t)))
return!0}this.sai(null)
return!1},
gq:function(a){return this.a},
sai:function(a){this.a=a},
$ascw:function(a,b){return[b]}}
H.bw.prototype={
gk:function(a){return J.bo(this.a)},
t:function(a,b){return this.b.$1(J.mq(this.a,b))},
$asj:function(a,b){return[b]},
$asb4:function(a,b){return[b]},
$asU:function(a,b){return[b]}}
H.d6.prototype={
gu:function(a){return new H.hK(J.aU(this.a),this.b,this.$ti)}}
H.hK.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq(t)))return!0
return!1},
gq:function(a){var t=this.a
return t.gq(t)}}
H.b_.prototype={}
H.jm.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.jn.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.is.prototype={
sfl:function(a){this.z=a},
sfo:function(a){this.ch=a}}
H.be.prototype={
e3:function(){var t,s
t=this.e
s=t.a
this.c.i(0,s)
this.e9(s,t)},
c8:function(a,b){if(!this.f.w(0,a))return
if(this.Q.i(0,b)&&!this.y)this.y=!0
this.bd()},
fw:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.at(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bZ();++r.d}this.y=!1}this.bd()},
eF:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.p(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).i(r,a)
t=this.ch;(t&&C.a).i(t,b)},
fv:function(a){var t,s,r
if(this.ch==null)return
for(t=J.p(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.G(P.t("removeRange"))
P.jR(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
dk:function(a,b){if(!this.r.w(0,a))return
this.db=b},
fe:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.H(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jM(null,null)
this.cx=t}t.Z(0,new H.il(a,c))},
fd:function(a,b){var t
if(!this.r.w(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aF()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jM(null,null)
this.cx=t}t.Z(0,this.gfm())},
ff:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.T(a)
if(b!=null)P.T(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bp(a)
s[1]=b==null?null:b.l(0)
for(r=new P.bR(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.H(0,s)},
an:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.M(o)
p=H.a6(o)
this.ff(q,p)
if(this.db){this.aF()
if(this===u.globalState.e)throw o}}finally{this.cy=H.of(r)
u.globalState.d=H.kb(t,"$isbe")
if(t!=null)$=t.gfk()
if(this.cx!=null)for(;n=this.cx,!n.gar(n);)this.cx.cL().$0()}return s},
cG:function(a){return this.b.h(0,a)},
e9:function(a,b){var t=this.b
if(t.G(0,a))throw H.c(P.cn("Registry: ports must be registered only once."))
t.j(0,a,b)},
bd:function(){var t=this.b
if(t.gk(t)-this.c.a>0||this.y||!this.x)u.globalState.z.j(0,this.a,this)
else this.aF()},
aF:function(){var t,s,r
t=this.cx
if(t!=null)t.a0(0)
for(t=this.b,s=t.gaJ(t),s=s.gu(s);s.p();)s.gq(s).eb()
t.a0(0)
this.c.a0(0)
u.globalState.z.at(0,this.a)
this.dx.a0(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].H(0,t[r+1])
this.ch=null}},
gfk:function(){return this.d},
geU:function(){return this.e}}
H.il.prototype={
$0:function(){this.a.H(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.i0.prototype={
f0:function(){var t=this.a
if(t.b===t.c)return
return t.cL()},
cN:function(){var t,s,r
t=this.f0()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.G(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gar(s)}else s=!1
else s=!1
else s=!1
if(s)H.G(P.cn("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gar(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.ao(["command","close"])
r=new H.a4(!0,P.bf(null,P.x)).L(r)
s.toString
self.postMessage(r)}return!1}t.ft()
return!0},
c3:function(){if(self.window!=null)new H.i1(this).$0()
else for(;this.cN(););},
au:function(){var t,s,r,q,p
if(!u.globalState.x)this.c3()
else try{this.c3()}catch(r){t=H.M(r)
s=H.a6(r)
q=u.globalState.Q
p=P.ao(["command","error","msg",H.d(t)+"\n"+H.d(s)])
p=new H.a4(!0,P.bf(null,P.x)).L(p)
q.toString
self.postMessage(p)}}}
H.i1.prototype={
$0:function(){if(!this.a.cN())return
P.nJ(C.x,this)},
$S:function(){return{func:1,v:true}}}
H.aQ.prototype={
ft:function(){var t=this.a
if(t.y){C.a.i(t.z,this)
return}t.an(this.b)}}
H.ir.prototype={}
H.f3.prototype={
$0:function(){H.nj(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.f4.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.bk(s,{func:1,args:[P.N,P.N]}))s.$2(this.e,this.d)
else if(H.bk(s,{func:1,args:[P.N]}))s.$1(this.e)
else s.$0()}t.bd()},
$S:function(){return{func:1,v:true}}}
H.hV.prototype={}
H.bg.prototype={
H:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.o0(b)
if(t.geU()===s){s=J.P(r)
switch(s.h(r,0)){case"pause":t.c8(s.h(r,1),s.h(r,2))
break
case"resume":t.fw(s.h(r,1))
break
case"add-ondone":t.eF(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.fv(s.h(r,1))
break
case"set-errors-fatal":t.dk(s.h(r,1),s.h(r,2))
break
case"ping":t.fe(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.fd(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.i(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.at(0,s)
break}return}u.globalState.f.a.Z(0,new H.aQ(t,new H.iu(this,r),"receive"))},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bg){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gv:function(a){return this.b.a}}
H.iu.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.e7(0,this.b)},
$S:function(){return{func:1}}}
H.c1.prototype={
H:function(a,b){var t,s,r
t=P.ao(["command","message","port",this,"msg",b])
s=new H.a4(!0,P.bf(null,P.x)).L(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.c1){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gv:function(a){return C.b.dz((this.b<<16^this.a<<8)>>>0,this.c)}}
H.cQ.prototype={
eb:function(){this.c=!0
this.b=null},
e7:function(a,b){if(this.c)return
this.b.$1(b)},
$isnC:1}
H.hs.prototype={
dX:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.Z(0,new H.aQ(s,new H.ht(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.iV()
this.c=self.setTimeout(H.at(new H.hu(this,b),0),a)}else{H.b(a>0)
throw H.c(P.t("Timer greater than 0."))}}}
H.ht.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.hu.prototype={
$0:function(){var t=this.a
t.c=null
H.ja()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ax.prototype={
gv:function(a){var t=this.a
t=C.b.b6(t,0)^C.b.K(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
w:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ax){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.a4.prototype={
L:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.j(0,a,t.gk(t))
t=J.p(a)
if(!!t.$isbz)return["buffer",a]
if(!!t.$isb7)return["typed",a]
if(!!t.$isq)return this.df(a)
if(!!t.$isng){r=this.gdc()
q=t.gB(a)
q=H.jN(q,r,H.X(q,"U",0),null)
q=P.l0(q,!0,H.X(q,"U",0))
t=t.gaJ(a)
t=H.jN(t,r,H.X(t,"U",0),null)
return["map",q,P.l0(t,!0,H.X(t,"U",0))]}if(!!t.$iskX)return this.dg(a)
if(!!t.$isa)this.d1(a)
if(!!t.$isnC)this.av(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbg)return this.dh(a)
if(!!t.$isc1)return this.di(a)
if(!!t.$isaz){p=a.$static_name
if(p==null)this.av(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isax)return["capability",a.a]
if(!(a instanceof P.D))this.d1(a)
return["dart",u.classIdExtractor(a),this.de(u.classFieldsExtractor(a))]},
av:function(a,b){throw H.c(P.t((b==null?"Can't transmit:":b)+" "+H.d(a)))},
d1:function(a){return this.av(a,null)},
df:function(a){var t
H.b(typeof a!=="string")
t=this.dd(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.av(a,"Can't serialize indexable: ")},
dd:function(a){var t,s
t=[]
C.a.sk(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.L(a[s])
return t},
de:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.L(a[t]))
return a},
dg:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.av(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sk(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.L(a[t[r]])
return["js-object",t,s]},
di:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
dh:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aP.prototype={
a1:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.cc("Bad serialized message: "+H.d(a)))
switch(C.a.gbg(a)){case"ref":H.b(J.z(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.z(a[0],"buffer"))
t=a[1]
C.a.i(this.b,t)
return t
case"typed":H.b(J.z(a[0],"typed"))
t=a[1]
C.a.i(this.b,t)
return t
case"fixed":H.b(J.z(a[0],"fixed"))
t=a[1]
C.a.i(this.b,t)
return J.an(H.A(this.am(t),[null]))
case"extendable":H.b(J.z(a[0],"extendable"))
t=a[1]
C.a.i(this.b,t)
return H.A(this.am(t),[null])
case"mutable":H.b(J.z(a[0],"mutable"))
t=a[1]
C.a.i(this.b,t)
return this.am(t)
case"const":H.b(J.z(a[0],"const"))
t=a[1]
C.a.i(this.b,t)
return J.an(H.A(this.am(t),[null]))
case"map":return this.f3(a)
case"sendport":return this.f4(a)
case"raw sendport":H.b(J.z(a[0],"raw sendport"))
t=a[1]
C.a.i(this.b,t)
return t
case"js-object":return this.f2(a)
case"function":H.b(J.z(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.i(this.b,t)
return t
case"capability":H.b(J.z(a[0],"capability"))
return new H.ax(a[1])
case"dart":H.b(J.z(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.i(this.b,q)
this.am(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.d(a))}},
am:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.a1(a[t]))
return a},
f3:function(a){var t,s,r,q,p
H.b(J.z(a[0],"map"))
t=a[1]
s=a[2]
r=P.I()
C.a.i(this.b,r)
t=J.mF(t,this.gf1()).fD(0)
for(q=J.P(s),p=0;p<t.length;++p)r.j(0,t[p],this.a1(q.h(s,p)))
return r},
f4:function(a){var t,s,r,q,p,o,n
H.b(J.z(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cG(r)
if(o==null)return
n=new H.bg(o,s)}else n=new H.c1(t,r,s)
C.a.i(this.b,n)
return n},
f2:function(a){var t,s,r,q,p,o
H.b(J.z(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.i(this.b,r)
for(q=J.P(t),p=J.P(s),o=0;C.b.X(o,q.gk(t));++o)r[q.h(t,o)]=this.a1(p.h(s,o))
return r}}
H.fX.prototype={}
H.hy.prototype={
R:function(a){var t,s,r
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
H.fE.prototype={
l:function(a){var t=this.b
if(t==null)return"NullError: "+H.d(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.fa.prototype={
l:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.d(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.d(this.a)+")"}}
H.hC.prototype={
l:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.jo.prototype={
$1:function(a){if(!!J.p(a).$isaZ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.dy.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isba:1}
H.j5.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.j6.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.j7.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.j8.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.j9.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.az.prototype={
l:function(a){return"Closure '"+H.bC(this).trim()+"'"},
$isjE:1,
gfL:function(){return this},
$D:null}
H.hn.prototype={}
H.h9.prototype={
l:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bq.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bq))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var t,s
t=this.c
if(t==null)s=H.aI(this.a)
else s=typeof t!=="object"?J.bn(t):H.aI(t)
return(s^H.aI(this.b))>>>0},
l:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.bC(t)+"'")}}
H.hA.prototype={
l:function(a){return this.a}}
H.e6.prototype={
l:function(a){return this.a}}
H.h1.prototype={
l:function(a){return"RuntimeError: "+H.d(this.a)}}
H.hP.prototype={
l:function(a){return C.h.U("Assertion failed: ",P.cm(this.a))}}
H.ar.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gv:function(a){return J.bn(this.a)},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.ar){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ac.prototype={
gk:function(a){return this.a},
gar:function(a){return this.a===0},
gB:function(a){return new H.fe(this,[H.a7(this,0)])},
gaJ:function(a){return H.jN(this.gB(this),new H.f9(this),H.a7(this,0),H.a7(this,1))},
G:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bW(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bW(s,b)}else return this.fh(b)},
fh:function(a){var t=this.d
if(t==null)return!1
return this.aq(this.aB(t,this.ap(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.aj(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.aj(r,b)
return s==null?null:s.b}else return this.fi(b)},
fi:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aB(t,this.ap(a))
r=this.aq(s,a)
if(r<0)return
return s[r].b},
j:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.b3()
this.b=t}this.bN(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.b3()
this.c=s}this.bN(s,b,c)}else{r=this.d
if(r==null){r=this.b3()
this.d=r}q=this.ap(b)
p=this.aB(r,q)
if(p==null)this.b5(r,q,[this.b4(b,c)])
else{o=this.aq(p,b)
if(o>=0)p[o].b=c
else p.push(this.b4(b,c))}}},
at:function(a,b){if(typeof b==="string")return this.c2(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.c2(this.c,b)
else return this.fj(b)},
fj:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.aB(t,this.ap(a))
r=this.aq(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.c6(q)
return q.b},
a0:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.b2()}},
ao:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.al(this))
t=t.c}},
bN:function(a,b,c){var t=this.aj(a,b)
if(t==null)this.b5(a,b,this.b4(b,c))
else t.b=c},
c2:function(a,b){var t
if(a==null)return
t=this.aj(a,b)
if(t==null)return
this.c6(t)
this.bX(a,b)
return t.b},
b2:function(){this.r=this.r+1&67108863},
b4:function(a,b){var t,s
t=new H.fd(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.b2()
return t},
c6:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.b2()},
ap:function(a){return J.bn(a)&0x3ffffff},
aq:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.z(a[s].a,b))return s
return-1},
l:function(a){return P.l1(this)},
aj:function(a,b){return a[b]},
aB:function(a,b){return a[b]},
b5:function(a,b,c){H.b(c!=null)
a[b]=c},
bX:function(a,b){delete a[b]},
bW:function(a,b){return this.aj(a,b)!=null},
b3:function(){var t=Object.create(null)
this.b5(t,"<non-identifier-key>",t)
this.bX(t,"<non-identifier-key>")
return t},
$isng:1}
H.f9.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.fd.prototype={}
H.fe.prototype={
gk:function(a){return this.a.a},
gu:function(a){var t,s
t=this.a
s=new H.ff(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.ff.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.al(t))
else{t=this.c
if(t==null){this.sbM(null)
return!1}else{this.sbM(t.a)
this.c=this.c.c
return!0}}},
sbM:function(a){this.d=a}}
H.j1.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.j2.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.o]}}}
H.j3.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.o]}}}
H.f8.prototype={
l:function(a){return"RegExp/"+this.a+"/"},
gc0:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.kZ(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
ei:function(a,b){var t,s
t=this.gc0()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return H.nZ(this,s)}}
H.it.prototype={
e5:function(a,b){var t,s
t=this.b
s=t.input
H.b(typeof s==="string")
t=t.index
H.b(typeof t==="number"&&Math.floor(t)===t)},
h:function(a,b){return this.b[b]}}
H.bz.prototype={
gA:function(a){return C.ac},
$isbz:1}
H.b7.prototype={$isb7:1}
H.fu.prototype={
gA:function(a){return C.ad}}
H.cG.prototype={
gk:function(a){return a.length},
$isq:1,
$asq:function(){},
$isu:1,
$asu:function(){}}
H.cH.prototype={
h:function(a,b){H.ai(b,a,a.length)
return a[b]},
j:function(a,b,c){H.ai(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.a_]},
$asb_:function(){return[P.a_]},
$asm:function(){return[P.a_]},
$ish:1,
$ash:function(){return[P.a_]}}
H.cI.prototype={
j:function(a,b,c){H.ai(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.x]},
$asb_:function(){return[P.x]},
$asm:function(){return[P.x]},
$ish:1,
$ash:function(){return[P.x]}}
H.cF.prototype={
gA:function(a){return C.ae},
$iseQ:1}
H.fv.prototype={
gA:function(a){return C.af}}
H.fw.prototype={
gA:function(a){return C.ag},
h:function(a,b){H.ai(b,a,a.length)
return a[b]}}
H.fx.prototype={
gA:function(a){return C.ah},
h:function(a,b){H.ai(b,a,a.length)
return a[b]},
$iskU:1}
H.fy.prototype={
gA:function(a){return C.ai},
h:function(a,b){H.ai(b,a,a.length)
return a[b]}}
H.fz.prototype={
gA:function(a){return C.am},
h:function(a,b){H.ai(b,a,a.length)
return a[b]},
$islp:1}
H.fA.prototype={
gA:function(a){return C.an},
h:function(a,b){H.ai(b,a,a.length)
return a[b]},
$islq:1}
H.cJ.prototype={
gA:function(a){return C.ao},
gk:function(a){return a.length},
h:function(a,b){H.ai(b,a,a.length)
return a[b]}}
H.fB.prototype={
gA:function(a){return C.ap},
gk:function(a){return a.length},
h:function(a,b){H.ai(b,a,a.length)
return a[b]},
$islr:1}
H.bT.prototype={}
H.bU.prototype={}
H.bV.prototype={}
H.bW.prototype={}
P.hR.prototype={
$1:function(a){var t,s
H.ja()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.hQ.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.iV()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.hS.prototype={
$0:function(){H.ja()
this.a.$0()},
$S:function(){return{func:1}}}
P.hT.prototype={
$0:function(){H.ja()
this.a.$0()},
$S:function(){return{func:1}}}
P.Z.prototype={}
P.eW.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.c)this.d.I(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.c)this.d.I(t.c,t.d)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.eV.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.b]=a
if(s===0)this.c.bV(r)}else if(t.b===0&&!this.e)this.c.I(t.c,t.d)},
$S:function(a){return{func:1,args:[,]}}}
P.jA.prototype={}
P.hW.prototype={
eS:function(a,b){if(a==null)a=new P.b8()
if(this.a.a!==0)throw H.c(P.cX("Future already completed"))
$.v.toString
this.I(a,b)},
eR:function(a){return this.eS(a,null)}}
P.bN.prototype={
al:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.cX("Future already completed"))
t.bO(b)},
I:function(a,b){this.a.bP(a,b)}}
P.iG.prototype={
al:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.cX("Future already completed"))
t.ah(b)},
I:function(a,b){this.a.I(a,b)}}
P.bP.prototype={
fp:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.bk(this.d,a.a)},
fc:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.bk(s,{func:1,args:[P.D,P.ba]}))return t.fz(s,a.a,a.b)
else return t.bk(s,a.a)}}
P.F.prototype={
bm:function(a,b){var t,s,r
t=$.v
if(t!==C.d){t.toString
if(b!=null)b=P.o7(b,t)}s=new P.F(0,t,null,[null])
r=b==null?1:3
this.aW(new P.bP(null,s,r,a,b,[H.a7(this,0),null]))
return s},
aI:function(a){return this.bm(a,null)},
fK:function(a){var t,s
t=$.v
s=new P.F(0,t,null,this.$ti)
if(t!==C.d)t.toString
t=H.a7(this,0)
this.aW(new P.bP(null,s,8,a,null,[t,t]))
return s},
aX:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
aW:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.kb(this.c,"$isbP")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.aW(a)
return}this.aX(t)}H.b(this.a>=4)
t=this.b
t.toString
P.bi(null,null,t,new P.i5(this,a))}},
c1:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.c1(a)
return}this.aX(s)}H.b(this.a>=4)
t.a=this.aD(a)
s=this.b
s.toString
P.bi(null,null,s,new P.id(t,this))}},
aC:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.aD(t)},
aD:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
ah:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.c5(a,"$isZ",t,"$asZ")
if(s){t=H.c5(a,"$isF",t,null)
if(t)P.i8(a,this)
else P.lt(a,this)}else{r=this.aC()
H.b(this.a<4)
this.a=4
this.c=a
P.bd(this,r)}},
bV:function(a){var t
H.b(this.a<4)
H.b(!J.p(a).$isZ)
t=this.aC()
H.b(this.a<4)
this.a=4
this.c=a
P.bd(this,t)},
I:function(a,b){var t
H.b(this.a<4)
t=this.aC()
H.b(this.a<4)
this.a=8
this.c=new P.aV(a,b)
P.bd(this,t)},
ec:function(a){return this.I(a,null)},
bO:function(a){var t
H.b(this.a<4)
t=H.c5(a,"$isZ",this.$ti,"$asZ")
if(t){this.ea(a)
return}H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bi(null,null,t,new P.i7(this,a))},
ea:function(a){var t=H.c5(a,"$isF",this.$ti,null)
if(t){if(a.a===8){H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bi(null,null,t,new P.ic(this,a))}else P.i8(a,this)
return}P.lt(a,this)},
bP:function(a,b){var t
H.b(this.a<4)
H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bi(null,null,t,new P.i6(this,a,b))},
$isZ:1,
gb7:function(){return this.a},
gex:function(){return this.c}}
P.i5.prototype={
$0:function(){P.bd(this.a,this.b)},
$S:function(){return{func:1}}}
P.id.prototype={
$0:function(){P.bd(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.i9.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.ah(a)},
$S:function(a){return{func:1,args:[,]}}}
P.ia.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.I(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.ib.prototype={
$0:function(){this.a.I(this.b,this.c)},
$S:function(){return{func:1}}}
P.i7.prototype={
$0:function(){this.a.bV(this.b)},
$S:function(){return{func:1}}}
P.ic.prototype={
$0:function(){P.i8(this.b,this.a)},
$S:function(){return{func:1}}}
P.i6.prototype={
$0:function(){this.a.I(this.b,this.c)},
$S:function(){return{func:1}}}
P.ih.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.cM(q.d)}catch(n){s=H.M(n)
r=H.a6(n)
if(this.d){q=this.a.a
H.b(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.b(q.a===8)
p.b=q.c}else p.b=new P.aV(s,r)
p.a=!0
return}if(!!J.p(t).$isZ){if(t instanceof P.F&&t.gb7()>=4){if(t.gb7()===8){q=t
H.b(q.gb7()===8)
p=this.b
p.b=q.gex()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.aI(new P.ii(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.ii.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.ig.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.bk(r.d,this.c)}catch(q){t=H.M(q)
s=H.a6(q)
r=this.a
r.b=new P.aV(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.ie.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.fp(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.fc(t)
p.a=!1}}catch(o){s=H.M(o)
r=H.a6(o)
q=this.a
p=q.a
H.b(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.b(q.a===8)
m.b=q.c}else m.b=new P.aV(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.d7.prototype={}
P.bG.prototype={
gk:function(a){var t,s
t={}
s=new P.F(0,$.v,null,[P.x])
t.a=0
this.cE(new P.hh(t),!0,new P.hi(t,s),s.gbU())
return s},
gbg:function(a){var t,s
t={}
s=new P.F(0,$.v,null,[H.X(this,"bG",0)])
t.a=null
t.a=this.cE(new P.hf(t,this,s),!0,new P.hg(s),s.gbU())
return s}}
P.hh.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.hi.prototype={
$0:function(){this.b.ah(this.a.a)},
$S:function(){return{func:1}}}
P.hf.prototype={
$1:function(a){P.o_(this.a.a,this.c,a)},
$S:function(a){return{func:1,args:[H.X(this.b,"bG",0)]}}}
P.hg.prototype={
$0:function(){var t,s,r,q
try{r=H.cv()
throw H.c(r)}catch(q){t=H.M(q)
s=H.a6(q)
P.o1(this.a,t,s)}},
$S:function(){return{func:1}}}
P.he.prototype={}
P.iL.prototype={
$0:function(){return this.a.ah(this.b)},
$S:function(){return{func:1}}}
P.jU.prototype={}
P.aV.prototype={
l:function(a){return H.d(this.a)},
$isaZ:1}
P.iK.prototype={}
P.iO.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.b8()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.l(0)
throw r},
$S:function(){return{func:1}}}
P.iw.prototype={
fA:function(a){var t,s,r
try{if(C.d===$.v){a.$0()
return}P.lz(null,null,this,a)}catch(r){t=H.M(r)
s=H.a6(r)
P.iN(null,null,this,t,s)}},
fB:function(a,b){var t,s,r
try{if(C.d===$.v){a.$1(b)
return}P.lA(null,null,this,a,b)}catch(r){t=H.M(r)
s=H.a6(r)
P.iN(null,null,this,t,s)}},
eL:function(a){return new P.iy(this,a)},
be:function(a){return new P.ix(this,a)},
eM:function(a){return new P.iz(this,a)},
h:function(a,b){return},
cM:function(a){if($.v===C.d)return a.$0()
return P.lz(null,null,this,a)},
bk:function(a,b){if($.v===C.d)return a.$1(b)
return P.lA(null,null,this,a,b)},
fz:function(a,b,c){if($.v===C.d)return a.$2(b,c)
return P.o8(null,null,this,a,b,c)}}
P.iy.prototype={
$0:function(){return this.a.cM(this.b)},
$S:function(){return{func:1}}}
P.ix.prototype={
$0:function(){return this.a.fA(this.b)},
$S:function(){return{func:1}}}
P.iz.prototype={
$1:function(a){return this.a.fB(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.ip.prototype={
ap:function(a){return H.oA(a)&0x3ffffff},
aq:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.im.prototype={
gu:function(a){var t=new P.bR(this,this.r,null,null,[null])
t.c=this.e
return t},
gk:function(a){return this.a},
C:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.ed(b)},
ed:function(a){var t=this.d
if(t==null)return!1
return this.aA(t[this.az(a)],a)>=0},
cG:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.C(0,a)?a:null
else return this.eo(a)},
eo:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.az(a)]
r=this.aA(s,a)
if(r<0)return
return J.bm(s,r).geg()},
i:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.k3()
this.b=t}return this.bR(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.k3()
this.c=s}return this.bR(s,b)}else return this.Z(0,b)},
Z:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.k3()
this.d=t}s=this.az(b)
r=t[s]
if(r==null){q=[this.aZ(b)]
H.b(q!=null)
t[s]=q}else{if(this.aA(r,b)>=0)return!1
r.push(this.aZ(b))}return!0},
at:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bS(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bS(this.c,b)
else return this.eq(0,b)},
eq:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.az(b)]
r=this.aA(s,b)
if(r<0)return!1
this.bT(s.splice(r,1)[0])
return!0},
a0:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aY()}},
bR:function(a,b){var t
if(a[b]!=null)return!1
t=this.aZ(b)
H.b(!0)
a[b]=t
return!0},
bS:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bT(t)
delete a[b]
return!0},
aY:function(){this.r=this.r+1&67108863},
aZ:function(a){var t,s
t=new P.io(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.aY()
return t},
bT:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.aY()},
az:function(a){return J.bn(a)&0x3ffffff},
aA:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.z(a[s].a,b))return s
return-1}}
P.io.prototype={
geg:function(){return this.a}}
P.bR.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.al(t))
else{t=this.c
if(t==null){this.sag(null)
return!1}else{this.sag(t.a)
this.c=this.c.b
return!0}}},
sag:function(a){this.d=a}}
P.ik.prototype={}
P.jK.prototype={$isj:1}
P.cz.prototype={$isj:1,$ish:1}
P.m.prototype={
gu:function(a){return new H.cA(a,this.gk(a),0,null,[H.X(a,"m",0)])},
t:function(a,b){return this.h(a,b)},
cH:function(a,b){return new H.bw(a,b,[H.X(a,"m",0),null])},
fa:function(a,b,c){var t,s,r,q
t=this.gk(a)
for(s=b,r=0;C.b.X(r,t);++r){s=c.$2(s,this.h(a,r))
q=this.gk(a)
if(t==null?q!=null:t!==q)throw H.c(P.al(a))}return s},
cA:function(a,b,c,d){var t
P.jR(b,c,this.gk(a),null,null,null)
for(t=b;t<c;++t)this.j(a,t,d)},
l:function(a){return P.f5(a,"[","]")}}
P.cB.prototype={}
P.fl.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.d(a)
t.a=s+": "
t.a+=H.d(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.b6.prototype={
ao:function(a,b){var t,s
for(t=J.aU(this.gB(a));t.p();){s=t.gq(t)
b.$2(s,this.h(a,s))}},
gk:function(a){return J.bo(this.gB(a))},
l:function(a){return P.l1(a)}}
P.fg.prototype={
dO:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sc4(H.A(t,[b]))},
gu:function(a){return new P.iq(this,this.c,this.d,this.b,null,this.$ti)},
gar:function(a){return this.b===this.c},
gk:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t=this.gk(this)
if(C.b.W(0,b)||b>=t)H.G(P.B(b,this,"index",null,t))
return this.a[(C.b.U(this.b,b)&this.a.length-1)>>>0]},
a0:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
l:function(a){return P.f5(this,"{","}")},
cL:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.cv());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
Z:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bZ();++this.d},
bZ:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.A(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.by(s,0,q,t,r)
C.a.by(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sc4(s)},
sc4:function(a){this.a=a}}
P.iq.prototype={
gq:function(a){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.G(P.al(t))
s=this.d
if(s===this.b){this.sag(null)
return!1}this.sag(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sag:function(a){this.e=a}}
P.h3.prototype={
N:function(a,b){var t
for(t=J.aU(b);t.p();)this.i(0,t.gq(t))},
l:function(a){return P.f5(this,"{","}")},
$isj:1}
P.h2.prototype={}
P.bS.prototype={}
P.ak.prototype={}
P.H.prototype={}
P.aA.prototype={
gfq:function(){return this.a},
dG:function(a,b){var t
if(Math.abs(this.a)<=864e13)t=!1
else t=!0
if(t)throw H.c(P.cc("DateTime is outside valid range: "+this.gfq()))},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.aA))return!1
return this.a===b.a&&this.b===b.b},
T:function(a,b){return C.b.T(this.a,b.a)},
gv:function(a){var t=this.a
return(t^C.b.b6(t,30))&1073741823},
l:function(a){var t,s,r,q,p,o,n
t=P.n2(H.nB(this))
s=P.cf(H.nz(this))
r=P.cf(H.nv(this))
q=P.cf(H.nw(this))
p=P.cf(H.ny(this))
o=P.cf(H.nA(this))
n=P.n3(H.nx(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isH:1,
$asH:function(){return[P.aA]}}
P.a_.prototype={}
P.aC.prototype={
X:function(a,b){return C.b.X(this.a,b.gef())},
W:function(a,b){return C.b.W(this.a,b.gef())},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.aC))return!1
return this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
T:function(a,b){return C.b.T(this.a,b.a)},
l:function(a){var t,s,r,q,p
t=new P.ep()
s=this.a
if(s<0)return"-"+new P.aC(0-s).l(0)
r=t.$1(C.b.K(s,6e7)%60)
q=t.$1(C.b.K(s,1e6)%60)
p=new P.eo().$1(s%1e6)
return""+C.b.K(s,36e8)+":"+H.d(r)+":"+H.d(q)+"."+H.d(p)},
$isH:1,
$asH:function(){return[P.aC]}}
P.eo.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.o,args:[P.x]}}}
P.ep.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.o,args:[P.x]}}}
P.aZ.prototype={}
P.cd.prototype={
l:function(a){return"Assertion failed"}}
P.b8.prototype={
l:function(a){return"Throw of null."}}
P.a0.prototype={
gb0:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gb_:function(){return""},
l:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.d(t)
q=this.gb0()+s+r
if(!this.a)return q
p=this.gb_()
o=P.cm(this.b)
return q+p+": "+H.d(o)}}
P.cP.prototype={
gb0:function(){return"RangeError"},
gb_:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.d(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.d(t)
else if(r>t)s=": Not in range "+H.d(t)+".."+H.d(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.d(t)}return s}}
P.f2.prototype={
gb0:function(){return"RangeError"},
gb_:function(){H.b(this.a)
if(J.m6(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.d(t)},
gk:function(a){return this.f}}
P.hD.prototype={
l:function(a){return"Unsupported operation: "+this.a}}
P.hB.prototype={
l:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.bb.prototype={
l:function(a){return"Bad state: "+this.a}}
P.e8.prototype={
l:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.d(P.cm(t))+"."}}
P.cW.prototype={
l:function(a){return"Stack Overflow"},
$isaZ:1}
P.eh.prototype={
l:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.jC.prototype={}
P.i4.prototype={
l:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.d(t)}}
P.eT.prototype={
l:function(a){var t,s,r
t=this.a
s=t!=null&&""!==t?"FormatException: "+H.d(t):"FormatException"
r=this.b
if(typeof r!=="string")return s
if(r.length>78)r=C.h.aP(r,0,75)+"..."
return s+"\n"+r}}
P.es.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.G(P.jy(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.l7(b,"expando$values")
return s==null?null:H.l7(s,t)},
l:function(a){return"Expando:"+H.d(this.b)}}
P.x.prototype={}
P.U.prototype={
aK:function(a,b){return new H.d6(this,b,[H.X(this,"U",0)])},
gk:function(a){var t,s
H.b(!this.$isj)
t=this.gu(this)
for(s=0;t.p();)++s
return s},
ga4:function(a){var t,s
t=this.gu(this)
if(!t.p())throw H.c(H.cv())
s=t.gq(t)
if(t.p())throw H.c(H.no())
return s},
t:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.mW("index"))
if(b<0)H.G(P.aK(b,0,null,"index",null))
for(t=this.gu(this),s=0;t.p();){r=t.gq(t)
if(b===s)return r;++s}throw H.c(P.B(b,this,"index",null,s))},
l:function(a){return P.nm(this,"(",")")}}
P.cw.prototype={}
P.h.prototype={$isj:1}
P.b5.prototype={}
P.N.prototype={
gv:function(a){return P.D.prototype.gv.call(this,this)},
l:function(a){return"null"}}
P.a9.prototype={$isH:1,
$asH:function(){return[P.a9]}}
P.D.prototype={constructor:P.D,$isD:1,
w:function(a,b){return this===b},
gv:function(a){return H.aI(this)},
l:function(a){return"Instance of '"+H.bC(this)+"'"},
gA:function(a){return new H.ar(H.j_(this),null)},
toString:function(){return this.l(this)}}
P.jS.prototype={}
P.ba.prototype={}
P.o.prototype={$isH:1,
$asH:function(){return[P.o]}}
P.bH.prototype={
gk:function(a){return this.a.length},
l:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga6:function(){return this.a}}
P.jX.prototype={}
W.k.prototype={}
W.cb.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gE:function(a){return a.z}}
W.dZ.prototype={
gk:function(a){return a.length}}
W.e_.prototype={
l:function(a){return String(a)}}
W.e0.prototype={
l:function(a){return String(a)}}
W.av.prototype={$isav:1}
W.aw.prototype={
d8:function(a,b,c){var t=this.ej(a,b,P.oi(c,null))
return t},
ej:function(a,b,c){return a.getContext(b,c)},
$isaw:1}
W.e5.prototype={
aL:function(a){return P.iS(a.getContextAttributes())}}
W.ay.prototype={
gk:function(a){return a.length}}
W.e9.prototype={
gk:function(a){return a.length}}
W.ea.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.eb.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gE:function(a){return a.z}}
W.ec.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gE:function(a){return a.z}}
W.aX.prototype={
bQ:function(a,b){var t,s
t=$.$get$kH()
s=t[b]
if(typeof s==="string")return s
s=this.eB(a,b)
t[b]=s
return s},
eB:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.n4()+b
if(t in a)return t
return b},
gk:function(a){return a.length}}
W.ed.prototype={}
W.a1.prototype={}
W.aY.prototype={}
W.ee.prototype={
gk:function(a){return a.length}}
W.ef.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gE:function(a){return a.z}}
W.eg.prototype={
gk:function(a){return a.length}}
W.ei.prototype={
h:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.ej.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gE:function(a){return a.z}}
W.ch.prototype={}
W.aB.prototype={
eG:function(a,b){return a.adoptNode(b)},
ee:function(a,b){return a.createEvent(b)},
bp:function(a,b){return a.getElementsByTagName(b)},
d9:function(a,b){return a.getElementById(b)},
cK:function(a,b){return a.querySelector(b)},
gbh:function(a){return new W.dd(a,"change",!1,[W.f])},
$isaB:1}
W.ek.prototype={
l:function(a){return String(a)}}
W.ci.prototype={
eY:function(a,b){return a.createHTMLDocument(b)}}
W.el.prototype={
gaw:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gE:function(a){return a.z}}
W.cj.prototype={
gaw:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gE:function(a){return a.z}}
W.ck.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[P.V]},
$isj:1,
$asj:function(){return[P.V]},
$isu:1,
$asu:function(){return[P.V]},
$asm:function(){return[P.V]},
$ish:1,
$ash:function(){return[P.V]},
$asn:function(){return[P.V]}}
W.cl.prototype={
l:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gaa(a))+" x "+H.d(this.ga8(a))},
w:function(a,b){var t
if(b==null)return!1
t=J.p(b)
if(!t.$isV)return!1
return a.left===t.gcC(b)&&a.top===t.gcS(b)&&this.gaa(a)===t.gaa(b)&&this.ga8(a)===t.ga8(b)},
gv:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gaa(a)
q=this.ga8(a)
return W.lx(W.aR(W.aR(W.aR(W.aR(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga8:function(a){return a.height},
gcC:function(a){return a.left},
gcS:function(a){return a.top},
gaa:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isV:1,
$asV:function(){}}
W.em.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[P.o]},
$isj:1,
$asj:function(){return[P.o]},
$isu:1,
$asu:function(){return[P.o]},
$asm:function(){return[P.o]},
$ish:1,
$ash:function(){return[P.o]},
$asn:function(){return[P.o]}}
W.en.prototype={
gk:function(a){return a.length}}
W.a2.prototype={
geJ:function(a){return new W.i_(a)},
l:function(a){return a.localName},
P:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kQ
if(t==null){t=H.A([],[W.cL])
s=new W.cM(t)
C.a.i(t,W.lu(null))
C.a.i(t,W.ly())
$.kQ=s
d=s}else d=t
t=$.kP
if(t==null){t=new W.dI(d)
$.kP=t
c=t}else{t.a=d
c=t}}if($.am==null){t=document
s=t.implementation
s=(s&&C.L).eY(s,"")
$.am=s
$.jB=s.createRange()
s=$.am
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.am.head;(t&&C.M).S(t,r)}t=$.am
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.kb(s,"$isav")}t=$.am
if(!!this.$isav)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.am.body;(t&&C.o).S(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.C(C.W,a.tagName)){t=$.jB;(t&&C.E).da(t,q)
t=$.jB
p=(t&&C.E).eW(t,b)}else{q.innerHTML=b
p=$.am.createDocumentFragment()
for(t=J.i(p);s=q.firstChild,s!=null;)t.S(p,s)}t=$.am.body
if(q==null?t!=null:q!==t)J.ko(q)
c.bw(p)
C.j.eG(document,p)
return p},
eX:function(a,b,c){return this.P(a,b,c,null)},
dm:function(a,b,c,d){a.textContent=null
this.S(a,this.P(a,b,c,d))},
dl:function(a,b){return this.dm(a,b,null,null)},
ab:function(a,b){return a.getAttribute(b)},
er:function(a,b){return a.removeAttribute(b)},
gbh:function(a){return new W.bO(a,"change",!1,[W.f])},
$isa2:1,
gfg:function(a){return a.id},
gfC:function(a){return a.tagName}}
W.er.prototype={
$1:function(a){return!!J.p(a).$isa2},
$S:function(a){return{func:1,args:[,]}}}
W.f.prototype={
gcO:function(a){return W.o2(a.target)},
el:function(a,b,c,d){return a.initEvent(b,!0,!0)},
$isf:1}
W.e.prototype={
e8:function(a,b,c,d){return a.addEventListener(b,H.at(c,1),!1)},
f5:function(a,b){return a.dispatchEvent(b)},
eu:function(a,b,c,d){return a.removeEventListener(b,H.at(c,1),!1)},
$ise:1}
W.eN.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.co]},
$isj:1,
$asj:function(){return[W.co]},
$isu:1,
$asu:function(){return[W.co]},
$asm:function(){return[W.co]},
$ish:1,
$ash:function(){return[W.co]},
$asn:function(){return[W.co]}}
W.eO.prototype={
gk:function(a){return a.length}}
W.eS.prototype={
gk:function(a){return a.length}}
W.eY.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gE:function(a){return a.z}}
W.cs.prototype={}
W.eZ.prototype={
gk:function(a){return a.length}}
W.bs.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$isu:1,
$asu:function(){return[W.r]},
$asm:function(){return[W.r]},
$ish:1,
$ash:function(){return[W.r]},
$asn:function(){return[W.r]}}
W.ct.prototype={}
W.cu.prototype={
fN:function(a,b,c,d,e,f){return a.open(b,c)},
fs:function(a,b,c){return a.open(b,c)},
H:function(a,b){return a.send(b)}}
W.bt.prototype={}
W.b0.prototype={$isb0:1}
W.b1.prototype={$isb1:1}
W.b2.prototype={$isb2:1}
W.bu.prototype={$isbu:1}
W.aG.prototype={$isaG:1}
W.fj.prototype={
l:function(a){return String(a)}}
W.fk.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gE:function(a){return a.z}}
W.bx.prototype={}
W.fq.prototype={
gk:function(a){return a.length}}
W.fr.prototype={
fM:function(a,b,c){return a.send(b,c)},
H:function(a,b){return a.send(b)}}
W.by.prototype={}
W.fs.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cE]},
$isj:1,
$asj:function(){return[W.cE]},
$isu:1,
$asu:function(){return[W.cE]},
$asm:function(){return[W.cE]},
$ish:1,
$ash:function(){return[W.cE]},
$asn:function(){return[W.cE]}}
W.O.prototype={$isO:1}
W.R.prototype={
ga4:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.c(P.cX("No elements"))
if(s>1)throw H.c(P.cX("More than one element"))
return t.firstChild},
N:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.i(s),p=0;p<r;++p)q.S(s,t.firstChild)
return},
j:function(a,b,c){var t=this.a
J.mb(t,c,C.C.h(t.childNodes,b))},
gu:function(a){var t=this.a.childNodes
return new W.cp(t,t.length,-1,null,[H.X(t,"n",0)])},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){return C.C.h(this.a.childNodes,b)},
$asj:function(){return[W.r]},
$ascz:function(){return[W.r]},
$asm:function(){return[W.r]},
$ash:function(){return[W.r]},
$asbS:function(){return[W.r]}}
W.r.prototype={
fu:function(a){var t=a.parentNode
if(t!=null)J.jp(t,a)},
l:function(a){var t=a.nodeValue
return t==null?this.dt(a):t},
S:function(a,b){return a.appendChild(b)},
es:function(a,b){return a.removeChild(b)},
ev:function(a,b,c){return a.replaceChild(b,c)},
$isr:1,
gbi:function(a){return a.previousSibling}}
W.cK.prototype={
bj:function(a){return a.previousNode()}}
W.bB.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$isu:1,
$asu:function(){return[W.r]},
$asm:function(){return[W.r]},
$ish:1,
$ash:function(){return[W.r]},
$asn:function(){return[W.r]}}
W.ad.prototype={
gk:function(a){return a.length}}
W.fP.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ad]},
$isj:1,
$asj:function(){return[W.ad]},
$isu:1,
$asu:function(){return[W.ad]},
$asm:function(){return[W.ad]},
$ish:1,
$ash:function(){return[W.ad]},
$asn:function(){return[W.ad]}}
W.fS.prototype={
H:function(a,b){return a.send(b)}}
W.cO.prototype={
eW:function(a,b){return a.createContextualFragment(b)},
da:function(a,b){return a.selectNodeContents(b)}}
W.cR.prototype={
H:function(a,b){return a.send(b)}}
W.bE.prototype={$isbE:1,
gk:function(a){return a.length}}
W.aq.prototype={}
W.h5.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cT]},
$isj:1,
$asj:function(){return[W.cT]},
$isu:1,
$asu:function(){return[W.cT]},
$asm:function(){return[W.cT]},
$ish:1,
$ash:function(){return[W.cT]},
$asn:function(){return[W.cT]}}
W.h7.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cU]},
$isj:1,
$asj:function(){return[W.cU]},
$isu:1,
$asu:function(){return[W.cU]},
$asm:function(){return[W.cU]},
$ish:1,
$ash:function(){return[W.cU]},
$asn:function(){return[W.cU]}}
W.ae.prototype={
gk:function(a){return a.length}}
W.hc.prototype={
h:function(a,b){return this.bY(a,b)},
ao:function(a,b){var t,s
for(t=0;!0;++t){s=this.en(a,t)
if(s==null)return
b.$2(s,this.bY(a,s))}},
gB:function(a){var t=H.A([],[P.o])
this.ao(a,new W.hd(t))
return t},
gk:function(a){return a.length},
bY:function(a,b){return a.getItem(b)},
en:function(a,b){return a.key(b)},
$asb6:function(){return[P.o,P.o]}}
W.hd.prototype={
$2:function(a,b){return C.a.i(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.cZ.prototype={
P:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aQ(a,b,c,d)
t=W.n5("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.R(s).N(0,new W.R(t))
return s}}
W.hl.prototype={
P:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aQ(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.J.P(t.createElement("table"),b,c,d)
t.toString
t=new W.R(t)
r=t.ga4(t)
r.toString
t=new W.R(r)
q=t.ga4(t)
s.toString
q.toString
new W.R(s).N(0,new W.R(q))
return s}}
W.hm.prototype={
P:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aQ(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.J.P(t.createElement("table"),b,c,d)
t.toString
t=new W.R(t)
r=t.ga4(t)
s.toString
r.toString
new W.R(s).N(0,new W.R(r))
return s}}
W.bI.prototype={$isbI:1}
W.ho.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.d0]},
$isj:1,
$asj:function(){return[W.d0]},
$isu:1,
$asu:function(){return[W.d0]},
$asm:function(){return[W.d0]},
$ish:1,
$ash:function(){return[W.d0]},
$asn:function(){return[W.d0]}}
W.hp.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.d_]},
$isj:1,
$asj:function(){return[W.d_]},
$isu:1,
$asu:function(){return[W.d_]},
$asm:function(){return[W.d_]},
$ish:1,
$ash:function(){return[W.d_]},
$asn:function(){return[W.d_]}}
W.hr.prototype={
gk:function(a){return a.length}}
W.aL.prototype={$isaL:1}
W.hv.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.d3]},
$isj:1,
$asj:function(){return[W.d3]},
$isu:1,
$asu:function(){return[W.d3]},
$asm:function(){return[W.d3]},
$ish:1,
$ash:function(){return[W.d3]},
$asn:function(){return[W.d3]}}
W.hw.prototype={
gk:function(a){return a.length}}
W.d4.prototype={
bj:function(a){return a.previousNode()}}
W.aM.prototype={}
W.hE.prototype={
l:function(a){return String(a)}}
W.hG.prototype={
gm:function(a){return a.x},
gE:function(a){return a.z}}
W.bc.prototype={$isbc:1}
W.hI.prototype={
gk:function(a){return a.length}}
W.hJ.prototype={
H:function(a,b){return a.send(b)}}
W.aO.prototype={
gf_:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.t("deltaY is not supported"))},
$isaO:1}
W.bM.prototype={
geI:function(a){var t,s
t=P.a9
s=new P.F(0,$.v,null,[t])
this.eh(a)
this.ew(a,W.lD(new W.hL(new P.iG(s,[t]))))
return s},
ew:function(a,b){return a.requestAnimationFrame(H.at(b,1))},
eh:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.hL.prototype={
$1:function(a){this.a.al(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.k_.prototype={}
W.hX.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ce]},
$isj:1,
$asj:function(){return[W.ce]},
$isu:1,
$asu:function(){return[W.ce]},
$asm:function(){return[W.ce]},
$ish:1,
$ash:function(){return[W.ce]},
$asn:function(){return[W.ce]}}
W.hZ.prototype={
l:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
w:function(a,b){var t
if(b==null)return!1
t=J.p(b)
if(!t.$isV)return!1
return a.left===t.gcC(b)&&a.top===t.gcS(b)&&a.width===t.gaa(b)&&a.height===t.ga8(b)},
gv:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.lx(W.aR(W.aR(W.aR(W.aR(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga8:function(a){return a.height},
gaa:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.ij.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cr]},
$isj:1,
$asj:function(){return[W.cr]},
$isu:1,
$asu:function(){return[W.cr]},
$asm:function(){return[W.cr]},
$ish:1,
$ash:function(){return[W.cr]},
$asn:function(){return[W.cr]}}
W.dm.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$isu:1,
$asu:function(){return[W.r]},
$asm:function(){return[W.r]},
$ish:1,
$ash:function(){return[W.r]},
$asn:function(){return[W.r]}}
W.iD.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ae]},
$isj:1,
$asj:function(){return[W.ae]},
$isu:1,
$asu:function(){return[W.ae]},
$asm:function(){return[W.ae]},
$ish:1,
$ash:function(){return[W.ae]},
$asn:function(){return[W.ae]}}
W.iE.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cY]},
$isj:1,
$asj:function(){return[W.cY]},
$isu:1,
$asu:function(){return[W.cY]},
$asm:function(){return[W.cY]},
$ish:1,
$ash:function(){return[W.cY]},
$asn:function(){return[W.cY]}}
W.hU.prototype={
ao:function(a,b){var t,s,r,q,p,o
for(t=this.gB(this),s=t.length,r=this.a,q=J.i(r),p=0;p<t.length;t.length===s||(0,H.C)(t),++p){o=t[p]
b.$2(o,q.ab(r,o))}},
gB:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.A([],[P.o])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.i(s,p.name)}return s},
$ascB:function(){return[P.o,P.o]},
$asb6:function(){return[P.o,P.o]},
gek:function(){return this.a}}
W.i_.prototype={
h:function(a,b){return J.jw(this.a,b)},
gk:function(a){return this.gB(this).length}}
W.dd.prototype={
cE:function(a,b,c,d){return W.W(this.a,this.b,a,!1,H.a7(this,0))}}
W.bO.prototype={}
W.i2.prototype={
e1:function(a,b,c,d,e){this.eD()},
eO:function(a){if(this.b==null)return
this.eE()
this.b=null
this.sep(null)
return},
eD:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.m8(r,this.c,t,!1)}},
eE:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.ma(r,this.c,t,!1)}},
sep:function(a){this.d=a}}
W.i3.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.bQ.prototype={
e2:function(a){var t,s
t=$.$get$k2()
if(t.gar(t)){for(s=0;s<262;++s)t.j(0,C.V[s],W.op())
for(s=0;s<12;++s)t.j(0,C.t[s],W.oq())}},
a7:function(a){return $.$get$lv().C(0,W.br(a))},
a_:function(a,b,c){var t,s,r
t=W.br(a)
s=$.$get$k2()
r=s.h(0,H.d(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)}}
W.n.prototype={
gu:function(a){return new W.cp(a,this.gk(a),-1,null,[H.X(a,"n",0)])}}
W.cM.prototype={
a7:function(a){return C.a.c9(this.a,new W.fD(a))},
a_:function(a,b,c){return C.a.c9(this.a,new W.fC(a,b,c))}}
W.fD.prototype={
$1:function(a){return a.a7(this.a)},
$S:function(a){return{func:1,args:[,]}}}
W.fC.prototype={
$1:function(a){return a.a_(this.a,this.b,this.c)},
$S:function(a){return{func:1,args:[,]}}}
W.bX.prototype={
e6:function(a,b,c,d){var t,s,r
this.a.N(0,c)
t=b.aK(0,new W.iB())
s=b.aK(0,new W.iC())
this.b.N(0,t)
r=this.c
r.N(0,C.B)
r.N(0,s)},
a7:function(a){return this.a.C(0,W.br(a))},
a_:function(a,b,c){var t,s
t=W.br(a)
s=this.c
if(s.C(0,H.d(t)+"::"+b))return this.d.eH(c)
else if(s.C(0,"*::"+b))return this.d.eH(c)
else{s=this.b
if(s.C(0,H.d(t)+"::"+b))return!0
else if(s.C(0,"*::"+b))return!0
else if(s.C(0,H.d(t)+"::*"))return!0
else if(s.C(0,"*::*"))return!0}return!1}}
W.iB.prototype={
$1:function(a){return!C.a.C(C.t,a)},
$S:function(a){return{func:1,args:[,]}}}
W.iC.prototype={
$1:function(a){return C.a.C(C.t,a)},
$S:function(a){return{func:1,args:[,]}}}
W.iH.prototype={
a_:function(a,b,c){if(this.dw(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jw(a,"template")==="")return this.e.C(0,b)
return!1}}
W.iI.prototype={
$1:function(a){return"TEMPLATE::"+H.d(a)},
$S:function(a){return{func:1,args:[,]}}}
W.iF.prototype={
a7:function(a){var t=J.p(a)
if(!!t.$isbD)return!1
t=!!t.$isw
if(t&&W.br(a)==="foreignObject")return!1
if(t)return!0
return!1},
a_:function(a,b,c){if(b==="is"||C.h.bA(b,"on"))return!1
return this.a7(a)}}
W.cp.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sc_(J.bm(this.a,t))
this.c=t
return!0}this.sc_(null)
this.c=s
return!1},
gq:function(a){return this.d},
sc_:function(a){this.d=a}}
W.hY.prototype={$isa:1,$ise:1}
W.cL.prototype={}
W.jO.prototype={}
W.jZ.prototype={}
W.iA.prototype={}
W.dI.prototype={
bw:function(a){new W.iJ(this).$2(a,null)},
ak:function(a,b){if(b==null)J.ko(a)
else J.jp(b,a)},
ez:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.mt(a)
r=J.jw(s.gek(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.M(n)}p="element unprintable"
try{p=J.bp(a)}catch(n){H.M(n)}try{o=W.br(a)
this.ey(a,b,t,p,o,s,r)}catch(n){if(H.M(n) instanceof P.a0)throw n
else{this.ak(a,b)
window
m="Removing corrupted element "+H.d(p)
if(typeof console!="undefined")window.console.warn(m)}}},
ey:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.ak(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!this.a.a7(a)){this.ak(a,b)
window
t="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!this.a.a_(a,"is",g)){this.ak(a,b)
window
t="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gB(f)
s=H.A(t.slice(0),[H.a7(t,0)])
for(r=f.gB(f).length-1,t=f.a,q=J.i(t);r>=0;--r){p=s[r]
if(!this.a.a_(a,J.mM(p),q.ab(t,p))){window
o="Removing disallowed attribute <"+H.d(e)+" "+p+'="'+H.d(q.ab(t,p))+'">'
if(typeof console!="undefined")window.console.warn(o)
q.ab(t,p)
q.er(t,p)}}if(!!J.p(a).$isbI)this.bw(a.content)}}
W.iJ.prototype={
$2:function(a,b){var t,s,r,q
r=this.a
switch(a.nodeType){case 1:r.ez(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.ak(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.mv(t)}catch(q){H.M(q)
r=t
J.jp(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(a,b){return{func:1,v:true,args:[W.r,W.r]}}}
W.d8.prototype={}
W.d9.prototype={}
W.da.prototype={}
W.db.prototype={}
W.dc.prototype={}
W.de.prototype={}
W.df.prototype={}
W.dg.prototype={}
W.dh.prototype={}
W.dk.prototype={}
W.dl.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.ds.prototype={}
W.dt.prototype={}
W.bY.prototype={}
W.bZ.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dz.prototype={}
W.dC.prototype={}
W.dD.prototype={}
W.c_.prototype={}
W.c0.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dS.prototype={}
P.hM.prototype={
cB:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}C.a.i(t,a)
C.a.i(this.b,null)
return s},
bn:function(a){var t,s,r,q,p,o,n,m,l,k
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.aA(s,!0)
r.dG(s,!0)
return r}if(a instanceof RegExp)throw H.c(P.jY("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.oj(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.cB(a)
r=this.b
o=r[p]
t.a=o
if(o!=null)return o
o=P.I()
t.a=o
r[p]=o
this.fb(a,new P.hO(t,this))
return t.a}if(a instanceof Array){n=a
p=this.cB(n)
r=this.b
o=r[p]
if(o!=null)return o
m=J.P(n)
l=m.gk(n)
o=this.c?new Array(l):n
r[p]=o
for(r=J.aS(o),k=0;C.b.X(k,l);++k)r.j(o,k,this.bn(m.h(n,k)))
return o}return a}}
P.hO.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.bn(b)
J.m7(t,a,s)
return s},
$S:function(a,b){return{func:1,args:[,,]}}}
P.iP.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.hN.prototype={
fb:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.iQ.prototype={
$1:function(a){return this.a.al(0,a)},
$S:function(a){return{func:1,args:[,]}}}
P.iR.prototype={
$1:function(a){return this.a.eR(a)},
$S:function(a){return{func:1,args:[,]}}}
P.hH.prototype={
gcO:function(a){return a.target}}
P.iv.prototype={}
P.V.prototype={}
P.et.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eu.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ev.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ew.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ex.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ey.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ez.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eA.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eC.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eD.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eE.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eF.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eG.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gE:function(a){return a.z}}
P.eH.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eI.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gE:function(a){return a.z}}
P.eJ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eK.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eP.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eR.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.a3.prototype={}
P.ab.prototype={}
P.f0.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fb.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return this.a2(a,b)},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a2:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.jJ]},
$asm:function(){return[P.jJ]},
$ish:1,
$ash:function(){return[P.jJ]},
$asn:function(){return[P.jJ]}}
P.fn.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fF.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return this.a2(a,b)},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a2:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.jP]},
$asm:function(){return[P.jP]},
$ish:1,
$ash:function(){return[P.jP]},
$asn:function(){return[P.jP]}}
P.fM.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fQ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fR.prototype={
gk:function(a){return a.length}}
P.fV.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fW.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bD.prototype={$isbD:1}
P.hj.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return this.a2(a,b)},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a2:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.o]},
$asm:function(){return[P.o]},
$ish:1,
$ash:function(){return[P.o]},
$asn:function(){return[P.o]}}
P.w.prototype={
P:function(a,b,c,d){var t,s,r,q,p,o
t=H.A([],[W.cL])
C.a.i(t,W.lu(null))
C.a.i(t,W.ly())
C.a.i(t,new W.iF())
c=new W.dI(new W.cM(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.o).eX(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.R(q)
o=t.ga4(t)
for(t=J.i(p);r=o.firstChild,r!=null;)t.S(p,r)
return p},
gbh:function(a){return new W.bO(a,"change",!1,[W.f])},
$isw:1}
P.hk.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bJ.prototype={}
P.bK.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hx.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return this.a2(a,b)},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a2:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.jW]},
$asm:function(){return[P.jW]},
$ish:1,
$ash:function(){return[P.jW]},
$asn:function(){return[P.jW]}}
P.hF.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.di.prototype={}
P.dj.prototype={}
P.dq.prototype={}
P.dr.prototype={}
P.dA.prototype={}
P.dB.prototype={}
P.dG.prototype={}
P.dH.prototype={}
P.e2.prototype={
gk:function(a){return a.length}}
P.e3.prototype={
gk:function(a){return a.length}}
P.aW.prototype={}
P.fG.prototype={
gk:function(a){return a.length}}
P.h_.prototype={
c7:function(a,b){return a.activeTexture(b)},
ca:function(a,b,c){return a.attachShader(b,c)},
cb:function(a,b,c){return a.bindBuffer(b,c)},
cc:function(a,b,c){return a.bindFramebuffer(b,c)},
cd:function(a,b,c){return a.bindTexture(b,c)},
ce:function(a,b){return a.blendEquation(b)},
cf:function(a,b,c){return a.blendFunc(b,c)},
cg:function(a,b,c,d){return a.bufferData(b,c,d)},
ci:function(a,b){return a.clear(b)},
cj:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
cl:function(a,b){return a.compileShader(b)},
cm:function(a){return a.createBuffer()},
cn:function(a){return a.createProgram()},
co:function(a,b){return a.createShader(b)},
cp:function(a){return a.createTexture()},
cr:function(a,b){return a.depthMask(b)},
cs:function(a,b){return a.disable(b)},
ct:function(a,b,c,d){return a.drawArrays(b,c,d)},
cu:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cv:function(a,b){return a.enable(b)},
cw:function(a,b){return a.enableVertexAttribArray(b)},
aL:function(a){return P.iS(a.getContextAttributes())},
bq:function(a){return a.getError()},
br:function(a,b){return a.getProgramInfoLog(b)},
bs:function(a,b,c){return a.getProgramParameter(b,c)},
bt:function(a,b){return a.getShaderInfoLog(b)},
bu:function(a,b,c){return a.getShaderParameter(b,c)},
bv:function(a,b,c){return a.getUniformLocation(b,c)},
cD:function(a,b){return a.linkProgram(b)},
cJ:function(a,b,c){return a.pixelStorei(b,c)},
bz:function(a,b,c){return a.shaderSource(b,c)},
bB:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bl:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=J.p(g)
if(!!t.$isb1)s=!0
else s=!1
if(s){this.b8(a,b,c,d,e,f,P.lJ(g))
return}if(!!t.$isb2)s=!0
else s=!1
if(s){this.b9(a,b,c,d,e,f,g)
return}if(!!t.$isaw)s=!0
else s=!1
if(s){this.ba(a,b,c,d,e,f,g)
return}if(!!t.$isbc)s=!0
else s=!1
if(s){this.bb(a,b,c,d,e,f,g)
return}if(!!t.$isb0)t=!0
else t=!1
if(t){this.bc(a,b,c,d,e,f,g)
return}throw H.c(P.cc("Incorrect number or type of arguments"))},
cP:function(a,b,c,d,e,f,g){return this.bl(a,b,c,d,e,f,g,null,null,null)},
b8:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b9:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ba:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bb:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bc:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cQ:function(a,b,c,d){return a.texParameterf(b,c,d)},
cR:function(a,b,c,d){return a.texParameteri(b,c,d)},
cT:function(a,b,c){return a.uniform1f(b,c)},
cU:function(a,b,c){return a.uniform1fv(b,c)},
cV:function(a,b,c){return a.uniform1i(b,c)},
cW:function(a,b,c){return a.uniform1iv(b,c)},
cX:function(a,b,c){return a.uniform2fv(b,c)},
cY:function(a,b,c){return a.uniform3fv(b,c)},
cZ:function(a,b,c){return a.uniform4fv(b,c)},
d_:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
d0:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
d2:function(a,b){return a.useProgram(b)},
d3:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
d5:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.h0.prototype={
eK:function(a,b){return a.beginTransformFeedback(b)},
eN:function(a,b){return a.bindVertexArray(b)},
eZ:function(a){return a.createVertexArray()},
f6:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
f7:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
f8:function(a){return a.endTransformFeedback()},
fH:function(a,b,c,d){this.eC(a,b,c,d)
return},
eC:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
fJ:function(a,b,c){return a.vertexAttribDivisor(b,c)},
c7:function(a,b){return a.activeTexture(b)},
ca:function(a,b,c){return a.attachShader(b,c)},
cb:function(a,b,c){return a.bindBuffer(b,c)},
cc:function(a,b,c){return a.bindFramebuffer(b,c)},
cd:function(a,b,c){return a.bindTexture(b,c)},
ce:function(a,b){return a.blendEquation(b)},
cf:function(a,b,c){return a.blendFunc(b,c)},
cg:function(a,b,c,d){return a.bufferData(b,c,d)},
ci:function(a,b){return a.clear(b)},
cj:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
cl:function(a,b){return a.compileShader(b)},
cm:function(a){return a.createBuffer()},
cn:function(a){return a.createProgram()},
co:function(a,b){return a.createShader(b)},
cp:function(a){return a.createTexture()},
cr:function(a,b){return a.depthMask(b)},
cs:function(a,b){return a.disable(b)},
ct:function(a,b,c,d){return a.drawArrays(b,c,d)},
cu:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cv:function(a,b){return a.enable(b)},
cw:function(a,b){return a.enableVertexAttribArray(b)},
aL:function(a){return P.iS(a.getContextAttributes())},
bq:function(a){return a.getError()},
br:function(a,b){return a.getProgramInfoLog(b)},
bs:function(a,b,c){return a.getProgramParameter(b,c)},
bt:function(a,b){return a.getShaderInfoLog(b)},
bu:function(a,b,c){return a.getShaderParameter(b,c)},
bv:function(a,b,c){return a.getUniformLocation(b,c)},
cD:function(a,b){return a.linkProgram(b)},
cJ:function(a,b,c){return a.pixelStorei(b,c)},
bz:function(a,b,c){return a.shaderSource(b,c)},
bB:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bl:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=J.p(g)
if(!!t.$isb1)s=!0
else s=!1
if(s){this.b8(a,b,c,d,e,f,P.lJ(g))
return}if(!!t.$isb2)s=!0
else s=!1
if(s){this.b9(a,b,c,d,e,f,g)
return}if(!!t.$isaw)s=!0
else s=!1
if(s){this.ba(a,b,c,d,e,f,g)
return}if(!!t.$isbc)s=!0
else s=!1
if(s){this.bb(a,b,c,d,e,f,g)
return}if(!!t.$isb0)t=!0
else t=!1
if(t){this.bc(a,b,c,d,e,f,g)
return}throw H.c(P.cc("Incorrect number or type of arguments"))},
cP:function(a,b,c,d,e,f,g){return this.bl(a,b,c,d,e,f,g,null,null,null)},
b8:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b9:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ba:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bb:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bc:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cQ:function(a,b,c,d){return a.texParameterf(b,c,d)},
cR:function(a,b,c,d){return a.texParameteri(b,c,d)},
cT:function(a,b,c){return a.uniform1f(b,c)},
cU:function(a,b,c){return a.uniform1fv(b,c)},
cV:function(a,b,c){return a.uniform1i(b,c)},
cW:function(a,b,c){return a.uniform1iv(b,c)},
cX:function(a,b,c){return a.uniform2fv(b,c)},
cY:function(a,b,c){return a.uniform3fv(b,c)},
cZ:function(a,b,c){return a.uniform4fv(b,c)},
d_:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
d0:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
d2:function(a,b){return a.useProgram(b)},
d3:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
d5:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.h8.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return P.iS(this.em(a,b))},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
em:function(a,b){return a.item(b)},
$isj:1,
$asj:function(){return[P.b5]},
$asm:function(){return[P.b5]},
$ish:1,
$ash:function(){return[P.b5]},
$asn:function(){return[P.b5]}}
P.dw.prototype={}
P.dx.prototype={}
B.jh.prototype={
$1:function(a){$.$get$iT().j(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.aG]}}}
B.ji.prototype={
$1:function(a){$.$get$iT().j(0,a.which,null)},
$S:function(a){return{func:1,args:[W.aG]}}}
B.jj.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.og=t
$.oh=C.b.a5(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.ke=s-C.b.K(window.innerWidth,2)
$.lW=-(t-C.b.K(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.O]}}}
B.jk.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.c7=t-C.b.K(window.innerWidth,2)
$.c8=-(s-C.b.K(window.innerHeight,2))
if(a.button===2)$.$get$c6().j(0,"right",!0)
else $.$get$c6().j(0,"left",!0)},
$S:function(a){return{func:1,args:[W.O]}}}
B.jl.prototype={
$1:function(a){if(a.button===2)$.$get$c6().j(0,"right",null)
else $.$get$c6().j(0,"left",null)},
$S:function(a){return{func:1,args:[W.O]}}}
B.fH.prototype={
dR:function(a,b,c,d){var t
d.toString
W.W(d,W.n6(d),new B.fI(this),!1,W.aO)
W.W(d,"mousemove",new B.fJ(this),!1,W.O)
t=W.aL
W.W(d,"touchstart",new B.fK(),!1,t)
W.W(d,"touchmove",new B.fL(this),!1,t)
B.oE(null)}}
B.fI.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.au.gf_(a)*r.k3
if(C.c.a5(r.fy,t)>0)r.fy=C.c.a5(r.fy,t)}catch(q){s=H.M(q)
P.T(s)}},
$S:function(a){return{func:1,args:[W.aO]}}}
B.fJ.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.a5($.ke,$.c7)*0.01
s=t.id
r=$.c8
q=$.lW
t.id=s+(r-q)*0.01
$.c7=$.ke
$.c8=q}},
$S:function(a){return{func:1,args:[W.O]}}}
B.fK.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a9(t.clientX)
C.c.a9(t.clientY)
$.c7=s
C.c.a9(t.clientX)
$.c8=C.c.a9(t.clientY)},
$S:function(a){return{func:1,args:[W.aL]}}}
B.fL.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a9(t.clientX)
t=C.c.a9(t.clientY)
r=this.a
r.go=r.go+C.b.a5(s,$.c7)*0.01
r.id=r.id+($.c8-t)*0.01
$.c7=s
$.c8=t},
$S:function(a){return{func:1,args:[W.aL]}}}
G.ft.prototype={}
G.d5.prototype={
a3:function(a,b){var t=this.d
if(H.a5(!t.G(0,a)))H.aj("uniform "+a+" already set")
t.j(0,a,b)},
aU:function(){return this.d},
l:function(a){var t,s,r,q
t=H.A(["{"+new H.ar(H.j_(this),null).l(0)+"}["+H.d(this.a)+"]"],[P.o])
for(s=this.d,r=s.gB(s),r=r.gu(r);r.p();){q=r.gq(r)
C.a.i(t,H.d(q)+": "+H.d(s.h(0,q)))}return C.a.as(t,"\n")}}
G.e4.prototype={}
G.e7.prototype={
cz:function(a,b,c){J.mr(this.a,b)
if(c>0)J.mT(this.a,b,c)},
d4:function(a,b,c,d,e,f,g,h){J.jr(this.a,34962,b)
J.mU(this.a,c,d,e,!1,g,h)}}
G.eU.prototype={}
G.eL.prototype={}
G.eM.prototype={}
G.eX.prototype={
bF:function(a){var t=this.e
H.b(!t.G(0,a))
H.b(C.h.bA(a,"a"))
switch($.$get$S().h(0,a).a){case"vec2":t.j(0,a,H.A([],[T.ah]))
break
case"vec3":t.j(0,a,H.A([],[T.l]))
break
case"vec4":t.j(0,a,H.A([],[T.as]))
break
case"float":t.j(0,a,H.A([],[P.a_]))
break
case"uvec4":t.j(0,a,H.A([],[[P.h,P.x]]))
break
default:if(H.a5(!1))H.aj("unknown type for "+a)}},
dD:function(a){var t,s,r,q,p,o
H.b(a.length===3)
t=this.d
s=t.length
C.a.i(this.b,new G.eL(s,s+1,s+2))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.C)(a),++q){p=a[q]
o=new T.l(new Float32Array(3))
o.F(p)
C.a.i(t,o)}},
dA:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.C)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.i(t,new T.ah(o))}},
dB:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.C)(b),++q){p=b[q]
o=new T.l(new Float32Array(3))
o.F(p)
r.i(t,o)}},
dE:function(a){var t,s,r,q,p,o
H.b(a.length===4)
t=this.d
s=t.length
C.a.i(this.c,new G.eM(s,s+1,s+2,s+3))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.C)(a),++q){p=a[q]
o=new T.l(new Float32Array(3))
o.F(p)
C.a.i(t,o)}},
dK:function(){var t,s,r,q,p,o,n,m,l
t=this.b
H.b(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.A(r,[P.x])
for(r=t.length,p=0,o=0;o<r;++o){n=t[o]
q[p]=n.a
q[p+1]=n.b
q[p+2]=n.c
p+=3}for(t=s.length,o=0;o<t;++o){m=s[o]
r=m.a
q[p]=r
q[p+1]=m.b
l=m.c
q[p+2]=l
q[p+3]=r
q[p+4]=l
q[p+5]=m.d
p+=6}H.b(p===q.length)
return q},
l:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gB(s),r=r.gu(r);r.p();){q=r.gq(r)
p=$.$get$S().h(0,q).a
C.a.i(t,H.d(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.as(t," ")}}
G.fc.prototype={}
G.cN.prototype={
aT:function(a,b){var t=this.x.a
a[b]=t[0]
a[b+1]=t[1]
a[b+2]=t[2]
t=this.y.a
a[b+8]=t[0]
a[b+9]=t[1]
a[b+10]=t[2]
t=this.z.a
a[b+12]=t[0]
a[b+13]=t[1]
a[b+14]=t[2]
a[b+7]=this.Q},
l:function(a){return"PL: p:"+H.d(this.x)+"  r:"+this.Q}}
G.cg.prototype={
aT:function(a,b){var t=this.x.a
a[b+4]=t[0]
a[b+5]=t[1]
a[b+6]=t[2]
t=this.y.a
a[b+8]=t[0]
a[b+9]=t[1]
a[b+10]=t[2]
t=this.z.a
a[b+12]=t[0]
a[b+13]=t[1]
a[b+14]=t[2]},
l:function(a){return"DL: p:"+H.d(this.x)}}
G.cV.prototype={
aT:function(a,b){var t=this.x.a
a[b]=t[0]
a[b+1]=t[1]
a[b+2]=t[2]
t=this.y.a
a[b+4]=t[0]
a[b+5]=t[1]
a[b+6]=t[2]
t=this.z.a
a[b+8]=t[0]
a[b+9]=t[1]
a[b+10]=t[2]
t=this.Q.a
a[b+12]=t[0]
a[b+13]=t[1]
a[b+14]=t[2]
a[b+7]=this.ch
a[b+11]=Math.cos(H.lI(this.cx))
a[b+15]=this.cy},
l:function(a){return"SL: p:"+H.d(this.x)+"  d:"+H.d(this.y)+"  r:"+this.ch+"  a:"+H.d(this.cx)}}
G.f_.prototype={
aU:function(){var t,s,r
t=this.y
s=this.z
G.ne(t,s,this.x)
r=this.d
r.j(0,"uLightDescs",t)
r.j(0,"uLightTypes",s)
return r}}
G.d2.prototype={}
G.d1.prototype={}
G.fo.prototype={
dP:function(a){this.a3("cDepthTest",!0)
this.a3("cDepthWrite",!0)
this.a3("cBlendEquation",$.$get$kv())
this.a3("cStencilFunc",$.$get$lc())}}
G.cD.prototype={
bE:function(a,b,c){var t,s
if(C.h.af(a,0)===105){if(H.a5(C.b.aR(b.length,c)===this.z))H.aj("ChangeAttribute "+this.z)}else{t=C.b.aR(b.length,c)
if(H.a5(t===(this.ch.length/3|0)))H.aj("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.j(0,a,b)
t=this.d
s=this.r.h(0,a)
J.jr(t.a,34962,s)
J.kj(t.a,34962,b,35048)},
ay:function(a){this.ch=a
this.bE("aPosition",a,3)},
dL:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
ad:function(a,b,c){var t,s,r,q,p,o
t=J.kg(a,0)===105
if(t&&this.z===0)this.z=C.b.aR(b.length,c)
s=this.r
r=this.d
s.j(0,a,J.dY(r.a))
this.bE(a,b,c)
q=$.$get$S().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.a5(p.G(0,a)))H.aj("unexpected attribute "+a)
o=p.h(0,a)
J.dX(r.a,this.e)
r.cz(0,o,t?1:0)
r.d4(0,s.h(0,a),o,q.bG(),5126,!1,0,0)},
bD:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.j(0,"aPosition",J.dY(s.a))
this.ay(a)
r=$.$get$S().h(0,"aPosition")
if(r==null)throw H.c("Unknown canonical aPosition")
q=this.x
H.b(q.G(0,"aPosition"))
p=q.h(0,"aPosition")
J.dX(s.a,this.e)
s.cz(0,p,0)
s.d4(0,t.h(0,"aPosition"),p,r.bG(),5126,!1,0,0)},
ae:function(a){var t,s,r,q
H.b(this.ch!=null)
t=this.ch.length
if(t<768){this.sb1(new Uint8Array(H.iM(a)))
this.Q=5121}else if(t<196608){this.sb1(new Uint16Array(H.iM(a)))
this.Q=5123}else{this.sb1(new Uint32Array(H.iM(a)))
this.Q=5125}t=this.d
J.dX(t.a,this.e)
s=this.y
r=this.cx
q=J.p(r)
H.b(!!q.$islp||!!q.$islq||!!q.$islr)
J.jr(t.a,34963,s)
J.kj(t.a,34963,r,35048)},
dC:function(a){this.y=J.dY(this.d.a)
this.ae(a)},
l:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gB(t),r=r.gu(r);r.p();){q=r.gq(r)
C.a.i(s,H.d(q)+":"+t.h(0,q).length)}return"MESH["+H.d(this.a)+"] "+C.a.as(s,"  ")},
sb1:function(a){this.cx=a}}
G.fN.prototype={
dF:function(a,b){var t=C.b.d7(a,b)
if(this.z===t)return
this.z=t
this.bJ()},
bJ:function(){var t,s,r,q,p,o,n
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
t.ac(0,0,1/(p*s))
t.ac(1,1,1/p)
t.ac(2,2,(q+r)/o)
t.ac(3,2,-1)
t.ac(2,3,2*r*q/o)},
aU:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.l(new Float32Array(3))
o.M(r,q,p)
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
s=J.p(n)
r=!!s.$isas
k=r?s.gaw(n):1
if(!!s.$isl){j=s.gm(n)
m=s.gn(n)
l=s.gE(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gE(n)
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
a3.F(this.db)
a3.cI(0,o)
p.j(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fZ.prototype={
dT:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){n=t[o]
r.j(0,n,J.kn(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){n=t[o]
r.j(0,n,J.kn(q.a,p,n))}},
dM:function(a){var t,s,r,q,p
t=this.e.x
s=a.e.x
if(t.gk(t)!==s.gk(s))return!1
for(r=t.gB(t),r=r.gu(r);r.p();){q=r.gq(r)
p=t.h(0,q)
q=s.h(0,q)
if(p==null?q!=null:p!==q)return!1}return!0},
dY:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gk(t)===s.gk(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gB(s),s=s.gu(s);s.p();){q=s.gq(s)
if(!t.G(0,q))C.a.i(r,q)}for(t=this.x,s=new P.bR(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.C(0,q))C.a.i(r,q)}return r},
e0:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gB(b),s=s.gu(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq(s)
switch(J.kg(n,0)){case 117:if(q.G(0,n)){m=b.h(0,n)
if(p.G(0,n))H.aT("E:"+(n+" : group ["+H.d(a)+"] overwrites ["+n+"]"))
p.j(0,n,a)
l=$.$get$S().h(0,n)
if(l==null)H.G("unknown "+n)
H.b(q.G(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.jx(r.a,k,m)
else if(!!J.p(m).$iskU)J.mR(r.a,k,m)
break
case"float":if(l.c===0)J.mP(r.a,k,m)
else if(!!J.p(m).$iseQ)J.mQ(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.a8(m,"$isK").a
J.ku(r.a,k,!1,n)}else if(!!J.p(m).$iseQ)J.ku(r.a,k,!1,m)
else if(H.a5(!1))H.aj("bad unform: "+n)
break
case"mat3":if(l.c===0){n=H.a8(m,"$isap").a
J.kt(r.a,k,!1,n)}else if(!!J.p(m).$iseQ)J.kt(r.a,k,!1,m)
else if(H.a5(!1))H.aj("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.ks(j,k,H.a8(m,"$isas").a)
else J.ks(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.kr(j,k,H.a8(m,"$isl").a)
else J.kr(j,k,m)
break
case"vec2":n=l.c
j=r.a
if(n===0)J.kq(j,k,H.a8(m,"$isah").a)
else J.kq(j,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.U(33984,this.ch)
J.kh(r.a,n)
n=H.a8(m,"$isbL").b
J.c9(r.a,3553,n)
n=this.ch
J.jx(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.U(33984,this.ch)
J.kh(r.a,n)
n=H.a8(m,"$isbL").b
J.c9(r.a,34067,n)
n=this.ch
J.jx(r.a,k,n)
this.ch=this.ch+1
break
default:H.aT("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.z(m,!0)
j=r.a
if(n)J.ca(j,2929)
else J.jt(j,2929)
break
case"cStencilFunc":H.a8(m,"$isd2")
n=m.a
j=r.a
if(n===1281)J.jt(j,2960)
else{J.ca(j,2960)
j=m.b
i=m.c
J.mJ(r.a,n,j,i)}break
case"cDepthWrite":J.ml(r.a,m)
break
case"cBlendEquation":H.a8(m,"$isd1")
n=m.a
j=r.a
if(n===1281)J.jt(j,3042)
else{J.ca(j,3042)
j=m.b
i=m.c
J.mf(r.a,j,i)
J.me(r.a,n)}break}++o
break}}h=P.kO(0,0,0,Date.now()-new P.aA(t,!1).a,0,0)
""+o
h.l(0)},
dJ:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.mS(t.a,this.r)
this.ch=0
this.z.a0(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.C)(b),++r){q=b[r]
this.e0(q.a,q.aU())}s=this.Q
s.a0(0)
for(p=a.cy,p=p.gB(p),p=p.gu(p);p.p();)s.i(0,p.gq(p))
o=this.dY()
if(o.length!==0)P.T("E:"+(H.d(this.a)+" "+a.f+": uninitialized inputs: "+H.d(o)))
s=a.d
p=a.e
J.dX(s.a,p)
n=this.e.f.length>0
p=a.f
s=a.dL()
m=a.Q
l=a.z
if(n)J.mc(t.a,p)
if(m!==-1){k=t.a
if(l>1)J.mp(k,p,s,m,0,l)
else J.mo(k,p,s,m,0)}else{m=t.a
if(l>1)J.mn(m,p,0,s,l)
else J.mm(m,p,0,s)}if(n)J.ms(t.a)}}
G.y.prototype={
bG:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.h4.prototype={
aS:function(a){var t,s,r,q,p
H.b(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.C)(a),++q){p=a[q]
H.b($.$get$S().G(0,p))
H.b(!C.a.C(s,p))
C.a.i(s,p)
r.j(0,p,this.r);++this.r}C.a.aO(s)},
Y:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=a[r]
if(H.a5($.$get$S().G(0,q)))H.aj("missing uniform "+q)
H.b(!C.a.C(s,q))
C.a.i(s,q)}C.a.aO(s)},
ax:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.e,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=a[r]
H.b($.$get$S().G(0,q))
H.b(!C.a.C(s,q))
C.a.i(s,q)}C.a.aO(s)},
bI:function(a,b){H.b(this.b==null)
this.b=this.bK(!0,a,b)},
aV:function(a){return this.bI(a,null)},
bH:function(a,b){H.b(this.b==null)
this.b=this.bK(!1,a,b)},
dU:function(a){return this.bH(a,null)},
bK:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){n=t[o]
m=$.$get$S().h(0,n)
C.a.i(q,"layout (location="+H.d(p.h(0,n))+") in "+m.a+" "+H.d(n)+";")}C.a.i(q,"")
l=r?"in":"out"
if(r)C.a.i(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
C.a.i(q,l+" "+m.a+" "+H.d(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
C.a.i(q,l+" "+m.a+" "+H.d(k)+";")}C.a.i(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.i(q,"uniform "+m.a+" "+H.d(k)+j+";")}C.a.i(q,"")
if(c!=null)C.a.N(q,c)
if(a)C.a.i(q,"void main(void) {")
C.a.N(q,b)
if(a)C.a.i(q,"}")
return C.a.as(q,"\n")}}
G.h6.prototype={
bx:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c},
fn:function(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t=this.d.a
s=t[12]
r=t[13]
q=t[14]
a0=new T.l(new Float32Array(3))
a0.M(0,1,0)
p=this.e
o=p.a
o[0]=t[12]
o[1]=t[13]
o[2]=t[14]
o=new Float32Array(3)
n=new T.l(o)
n.F(p)
n.bC(0,a)
n.D(0)
m=a0.cq(n)
m.D(0)
l=n.cq(m)
l.D(0)
k=m.bf(p)
j=l.bf(p)
p=n.bf(p)
i=m.a
h=i[0]
g=l.a
f=g[0]
e=o[0]
d=i[1]
c=g[1]
b=o[1]
i=i[2]
g=g[2]
o=o[2]
t[15]=1
t[14]=-p
t[13]=-j
t[12]=-k
t[11]=0
t[10]=o
t[9]=g
t[8]=i
t[7]=0
t[6]=b
t[5]=c
t[4]=d
t[3]=0
t[2]=e
t[1]=f
t[0]=h
t[12]=s
t[13]=r
t[14]=q},
cF:function(a){return this.fn(a,null)}}
G.hq.prototype={
dN:function(a,b){var t=this.e
if(t!==1)J.mL(a.a,b,34046,t)
J.kp(a.a,b,10240,this.r)
J.kp(a.a,b,10241,this.f)}}
G.bL.prototype={
l:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.f1.prototype={
dV:function(a){var t,s
t=this.d
s=this.c
J.c9(t.a,s,this.b)
J.mK(t.a,s,0,6408,6408,5121,a)}}
R.ha.prototype={
dW:function(a,b,c){var t,s,r
if(a==null)throw H.c("no element provided")
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
J.jq(this.a,s)
r=this.e4(b,c,90,30)
this.d=r
J.jq(this.a,r)
t=t.createElement("div")
this.c=t
J.jq(this.a,t)},
e4:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.nT("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.w).bQ(r,"float")
r.setProperty(p,"left","")
p=C.w.bQ(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.p.S(t,s)}return t}}
R.hb.prototype={
e_:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.q.fG(s,2)+" fps"
t=this.c;(t&&C.p).dl(t,b)
r=C.b.K(30*C.q.eP(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.p).S(t,q)},
dZ:function(a){return this.e_(a,"")}}
A.bA.prototype={
dQ:function(a,b){if(b!=null)C.a.i(this.cy,b)},
l:function(a){return"NODE["+H.d(this.a)+"]"}}
A.b9.prototype={}
A.fY.prototype={
dS:function(a,b,c){if(this.d==null)this.d=new G.eU(this.e,null,null,null,null)},
dI:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.md(p.a,36160,t)
H.b(r>0&&q>0)
J.mV(p.a,this.x,this.y,r,q)
if(s!==0)J.mg(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){n=t[o]
if(!n.c)continue
r=n.d
if(!r.c)continue
m=n.e
C.a.i(m,new G.d5(P.I(),"transforms",!1,!0))
l=new T.K(new Float32Array(16))
l.O()
for(q=n.f,p=q.length,k=0;k<q.length;q.length===p||(0,H.C)(q),++k)A.lL(r,q[k],l,a,m)
m.pop()}},
dH:function(){return this.dI(null)}}
D.fi.prototype={
$1:function(a){this.a.al(0,W.o3(this.b.response))},
$S:function(a){return{func:1,args:[,]}}}
D.fh.prototype={
$1:function(a){return this.a.al(0,this.b)},
$S:function(a){return{func:1,args:[,]}}}
A.j0.prototype={
$2:function(a,b){var t=536870911&a+J.bn(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.x,P.D]}}}
T.ap.prototype={
F:function(a){var t,s
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
l:function(a){return"[0] "+this.V(0).l(0)+"\n[1] "+this.V(1).l(0)+"\n[2] "+this.V(2).l(0)+"\n"},
h:function(a,b){return this.a[b]},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ap){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gv:function(a){return A.dU(this.a)},
V:function(a){var t,s
t=new Float32Array(3)
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.l(t)},
eV:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g===0){this.F(a)
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
T.K.prototype={
ac:function(a,b,c){H.b(a<4)
H.b(b<4)
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
l:function(a){return"[0] "+this.V(0).l(0)+"\n[1] "+this.V(1).l(0)+"\n[2] "+this.V(2).l(0)+"\n[3] "+this.V(3).l(0)+"\n"},
h:function(a,b){return this.a[b]},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.K){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gv:function(a){return A.dU(this.a)},
V:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.as(t)},
O:function(){var t=this.a
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
cI:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.fT.prototype={
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gE:function(a){return this.a[2]},
gaw:function(a){return this.a[3]},
dj:function(a,b){var t,s,r,q,p
t=Math.sqrt(a.gaH())
if(t===0)return
s=b*0.5
r=Math.sin(s)/t
q=a.a
p=this.a
p[0]=q[0]*r
p[1]=q[1]*r
p[2]=q[2]*r
p[3]=Math.cos(s)},
gk:function(a){var t,s,r,q,p
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=t[3]
return Math.sqrt(s*s+r*r+q*q+p*p)},
h:function(a,b){return this.a[b]},
l:function(a){var t=this.a
return H.d(t[0])+", "+H.d(t[1])+", "+H.d(t[2])+" @ "+H.d(t[3])}}
T.ah.prototype={
l:function(a){var t=this.a
return"["+H.d(t[0])+","+H.d(t[1])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ah){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gv:function(a){return A.dU(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.l.prototype={
M:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
F:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
l:function(a){var t=this.a
return"["+H.d(t[0])+","+H.d(t[1])+","+H.d(t[2])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.l){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gv:function(a){return A.dU(this.a)},
U:function(a,b){var t=new T.l(new Float32Array(3))
t.F(this)
t.i(0,b)
return t},
h:function(a,b){return this.a[b]},
gk:function(a){return Math.sqrt(this.gaH())},
gaH:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
D:function(a){var t,s,r
t=Math.sqrt(this.gaH())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
bf:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
cq:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.l(new Float32Array(3))
t.M(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
i:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]
s[2]=s[2]+t[2]},
bC:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
aM:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
aN:function(a){var t=new T.l(new Float32Array(3))
t.F(this)
t.aM(0,a)
return t},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gE:function(a){return this.a[2]}}
T.as.prototype={
l:function(a){var t=this.a
return H.d(t[0])+","+H.d(t[1])+","+H.d(t[2])+","+H.d(t[3])},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.as){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gv:function(a){return A.dU(this.a)},
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
gE:function(a){return this.a[2]},
gaw:function(a){return this.a[3]}}
T.jc.prototype={
$1:function(a){var t=H.a8(J.my(a),"$isbu")
P.T(H.d(t.id)+" toggle "+H.d(t.checked))
$.$get$iW().h(0,t.id).c=t.checked
this.a.h(0,t.id).c=t.checked},
$S:function(a){return{func:1,args:[W.f]}}}
T.je.prototype={
$1:function(a){var t,s,r
t=this.a
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.T("size change "+H.d(s)+" "+H.d(r))
this.b.dF(s,r)
t=this.c
t.z=s
t.Q=r
t=this.d
t.z=s
t.Q=r},
$S:function(a){return{func:1,v:true,args:[W.f]}}}
T.jb.prototype={
$1:function(b1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
t=this.a
t.a=b1+0
s=this.b
s.go+=0.001
r=s.k4
if(r.h(0,37)!=null)s.go+=0.03
else if(r.h(0,39)!=null)s.go-=0.03
if(r.h(0,38)!=null)s.id+=0.03
else if(r.h(0,40)!=null)s.id-=0.03
if(r.h(0,33)!=null)s.fy*=0.99
else if(r.h(0,34)!=null)s.fy*=1.01
if(r.h(0,32)!=null){s.go=0
s.id=0}r=C.c.eQ(s.id,-1.4707963267948965,1.4707963267948965)
s.id=r
q=s.fy
p=s.go
o=q*Math.cos(r)
s.bx(o*Math.cos(p),q*Math.sin(r),o*Math.sin(p))
p=s.k2
r=s.d.a
q=p.a
r[12]=r[12]+q[0]
r[13]=r[13]+q[1]
r[14]=r[14]+q[2]
s.cF(p)
p=s.f
q=p.a
q[0]=r[2]
q[1]=r[6]
q[2]=r[10]
s=-s.k1
n=Math.sqrt(p.gaH())
m=q[0]/n
l=q[1]/n
k=q[2]/n
j=Math.cos(s)
i=Math.sin(s)
h=1-j
g=m*m*h+j
s=k*i
f=m*l*h-s
q=l*i
e=m*k*h+q
d=l*m*h+s
c=l*l*h+j
s=m*i
b=l*k*h-s
a=k*m*h-q
a0=k*l*h+s
a1=k*k*h+j
s=r[0]
q=r[4]
p=r[8]
a2=r[1]
a3=r[5]
a4=r[9]
a5=r[2]
a6=r[6]
a7=r[10]
a8=r[3]
a9=r[7]
b0=r[11]
r[0]=s*g+q*d+p*a
r[1]=a2*g+a3*d+a4*a
r[2]=a5*g+a6*d+a7*a
r[3]=a8*g+a9*d+b0*a
r[4]=s*f+q*c+p*a0
r[5]=a2*f+a3*c+a4*a0
r[6]=a5*f+a6*c+a7*a0
r[7]=a8*f+a9*c+b0*a0
r[8]=s*e+q*b+p*a1
r[9]=a2*e+a3*b+a4*a1
r[10]=a5*e+a6*b+a7*a1
r[11]=a8*e+a9*b+b0*a1;(this.c.selectedIndex===0?this.d:this.e).dH()
C.av.geI(window).aI(this)
this.f.dZ(t.a)},
$S:function(a){return{func:1,v:true,args:[P.a9]}}}
T.jd.prototype={
$1:function(a){var t,s,r,q,p,o,n,m,l,k,j
t=this.a
s=J.P(a)
r=s.h(a,1)
q=new G.hq(!1,!1,!1,!0,1,9729,9729)
p=J.mk(t.a)
o=new G.f1(r,"../asset/dragon/dragon.png",p,3553,t,q)
J.c9(t.a,3553,p)
J.mG(t.a,37440,1)
o.dV(r)
q.dN(t,3553)
H.b(J.mB(t.a)===0)
J.c9(t.a,3553,null)
n=G.l2("matDragon")
n.a3("uTexture",o)
n.a3("uShininess",10)
m=Y.nf(s.h(a,0))
P.T(m)
t=this.b.d
l=G.nt("../asset/dragon/dragon.obj",t.d,4,t.e.x)
l.bD(G.cq(m.d,null))
l.dC(m.dK())
G.nV(m,l)
t=new Float32Array(9)
s=new T.K(new Float32Array(16))
s.O()
r=new T.K(new Float32Array(16))
r.O()
q=new Float32Array(3)
p=new Float32Array(3)
k=new Float32Array(3)
j=A.l3("wrapper",new A.bA(n,l,[],new T.ap(t),s,r,new T.l(q),new T.l(p),new T.l(k),new T.l(new Float32Array(3)),l.a,!1,!0))
t=new T.l(new Float32Array(3))
t.M(100,0,0)
j.cF(t)
C.a.i(this.c.cy,j)
this.d.$1(0)},
$S:function(a){return{func:1,args:[P.h]}}}
J.a.prototype.dt=J.a.prototype.l
J.bv.prototype.dv=J.bv.prototype.l
P.U.prototype.du=P.U.prototype.aK
W.a2.prototype.aQ=W.a2.prototype.P
W.bX.prototype.dw=W.bX.prototype.a_;(function installTearOffs(){installTearOff(H.be.prototype,"gfm",0,0,0,null,["$0"],["aF"],0)
installTearOff(H.a4.prototype,"gdc",0,0,0,null,["$1"],["L"],2)
installTearOff(H.aP.prototype,"gf1",0,0,0,null,["$1"],["a1"],2)
installTearOff(P,"oc",1,0,0,null,["$1"],["nP"],1)
installTearOff(P,"od",1,0,0,null,["$1"],["nQ"],1)
installTearOff(P,"oe",1,0,0,null,["$1"],["nR"],1)
installTearOff(P,"lH",1,0,0,null,["$0"],["oa"],0)
installTearOff(P.F.prototype,"gbU",0,0,0,null,["$2","$1"],["I","ec"],5)
installTearOff(P,"ok",1,0,0,null,["$2"],["n1"],6)
installTearOff(W,"op",1,0,0,null,["$4"],["nW"],4)
installTearOff(W,"oq",1,0,0,null,["$4"],["nX"],4)
installTearOff(W.cK.prototype,"gbi",0,1,0,null,["$0"],["bj"],3)
installTearOff(W.d4.prototype,"gbi",0,1,0,null,["$0"],["bj"],3)
installTearOff(T,"lR",1,0,0,null,["$0"],["oy"],0)})();(function inheritance(){inherit(P.D,null)
var t=P.D
inherit(H.jG,t)
inherit(J.a,t)
inherit(J.e1,t)
inherit(P.U,t)
inherit(H.cA,t)
inherit(P.cw,t)
inherit(H.b_,t)
inherit(H.az,t)
inherit(H.is,t)
inherit(H.be,t)
inherit(H.i0,t)
inherit(H.aQ,t)
inherit(H.ir,t)
inherit(H.hV,t)
inherit(H.cQ,t)
inherit(H.hs,t)
inherit(H.ax,t)
inherit(H.a4,t)
inherit(H.aP,t)
inherit(H.fX,t)
inherit(H.hy,t)
inherit(P.aZ,t)
inherit(H.dy,t)
inherit(H.ar,t)
inherit(P.b6,t)
inherit(H.fd,t)
inherit(H.ff,t)
inherit(H.f8,t)
inherit(H.it,t)
inherit(P.Z,t)
inherit(P.jA,t)
inherit(P.hW,t)
inherit(P.bP,t)
inherit(P.F,t)
inherit(P.d7,t)
inherit(P.bG,t)
inherit(P.he,t)
inherit(P.jU,t)
inherit(P.aV,t)
inherit(P.iK,t)
inherit(P.h3,t)
inherit(P.io,t)
inherit(P.bR,t)
inherit(P.jK,t)
inherit(P.bS,t)
inherit(P.m,t)
inherit(P.iq,t)
inherit(P.ak,t)
inherit(P.H,t)
inherit(P.aA,t)
inherit(P.a9,t)
inherit(P.aC,t)
inherit(P.cW,t)
inherit(P.jC,t)
inherit(P.i4,t)
inherit(P.eT,t)
inherit(P.es,t)
inherit(P.h,t)
inherit(P.b5,t)
inherit(P.N,t)
inherit(P.jS,t)
inherit(P.ba,t)
inherit(P.o,t)
inherit(P.bH,t)
inherit(P.jX,t)
inherit(W.ed,t)
inherit(W.bQ,t)
inherit(W.n,t)
inherit(W.cM,t)
inherit(W.bX,t)
inherit(W.iF,t)
inherit(W.cp,t)
inherit(W.hY,t)
inherit(W.cL,t)
inherit(W.jO,t)
inherit(W.jZ,t)
inherit(W.iA,t)
inherit(W.dI,t)
inherit(P.hM,t)
inherit(P.iv,t)
inherit(G.ft,t)
inherit(G.e7,t)
inherit(G.eU,t)
inherit(G.eL,t)
inherit(G.eM,t)
inherit(G.eX,t)
inherit(G.d2,t)
inherit(G.d1,t)
inherit(G.y,t)
inherit(G.h4,t)
inherit(G.hq,t)
inherit(G.bL,t)
inherit(R.ha,t)
inherit(T.ap,t)
inherit(T.K,t)
inherit(T.fT,t)
inherit(T.ah,t)
inherit(T.l,t)
inherit(T.as,t)
t=J.a
inherit(J.f6,t)
inherit(J.f7,t)
inherit(J.bv,t)
inherit(J.aD,t)
inherit(J.b3,t)
inherit(J.aE,t)
inherit(H.bz,t)
inherit(H.b7,t)
inherit(W.e,t)
inherit(W.dZ,t)
inherit(W.e5,t)
inherit(W.aY,t)
inherit(W.a1,t)
inherit(W.d8,t)
inherit(W.ei,t)
inherit(W.ej,t)
inherit(W.ek,t)
inherit(W.ci,t)
inherit(W.cj,t)
inherit(W.d9,t)
inherit(W.cl,t)
inherit(W.db,t)
inherit(W.en,t)
inherit(W.f,t)
inherit(W.de,t)
inherit(W.eZ,t)
inherit(W.dg,t)
inherit(W.b0,t)
inherit(W.b1,t)
inherit(W.fj,t)
inherit(W.fq,t)
inherit(W.dk,t)
inherit(W.cK,t)
inherit(W.dn,t)
inherit(W.ad,t)
inherit(W.ds,t)
inherit(W.cO,t)
inherit(W.du,t)
inherit(W.ae,t)
inherit(W.dz,t)
inherit(W.dC,t)
inherit(W.hr,t)
inherit(W.dE,t)
inherit(W.hw,t)
inherit(W.d4,t)
inherit(W.hE,t)
inherit(W.hG,t)
inherit(W.dJ,t)
inherit(W.dL,t)
inherit(W.dN,t)
inherit(W.dP,t)
inherit(W.dR,t)
inherit(P.di,t)
inherit(P.dq,t)
inherit(P.fQ,t)
inherit(P.fR,t)
inherit(P.fV,t)
inherit(P.dA,t)
inherit(P.dG,t)
inherit(P.e2,t)
inherit(P.h_,t)
inherit(P.h0,t)
inherit(P.dw,t)
t=J.bv
inherit(J.fO,t)
inherit(J.aN,t)
inherit(J.aF,t)
inherit(J.jF,J.aD)
t=J.b3
inherit(J.cy,t)
inherit(J.cx,t)
t=P.U
inherit(H.j,t)
inherit(H.cC,t)
inherit(H.d6,t)
t=H.j
inherit(H.b4,t)
inherit(H.fe,t)
inherit(H.eq,H.cC)
t=P.cw
inherit(H.fm,t)
inherit(H.hK,t)
t=H.b4
inherit(H.bw,t)
inherit(P.fg,t)
t=H.az
inherit(H.jm,t)
inherit(H.jn,t)
inherit(H.il,t)
inherit(H.i1,t)
inherit(H.f3,t)
inherit(H.f4,t)
inherit(H.iu,t)
inherit(H.ht,t)
inherit(H.hu,t)
inherit(H.jo,t)
inherit(H.j5,t)
inherit(H.j6,t)
inherit(H.j7,t)
inherit(H.j8,t)
inherit(H.j9,t)
inherit(H.hn,t)
inherit(H.f9,t)
inherit(H.j1,t)
inherit(H.j2,t)
inherit(H.j3,t)
inherit(P.hR,t)
inherit(P.hQ,t)
inherit(P.hS,t)
inherit(P.hT,t)
inherit(P.eW,t)
inherit(P.eV,t)
inherit(P.i5,t)
inherit(P.id,t)
inherit(P.i9,t)
inherit(P.ia,t)
inherit(P.ib,t)
inherit(P.i7,t)
inherit(P.ic,t)
inherit(P.i6,t)
inherit(P.ih,t)
inherit(P.ii,t)
inherit(P.ig,t)
inherit(P.ie,t)
inherit(P.hh,t)
inherit(P.hi,t)
inherit(P.hf,t)
inherit(P.hg,t)
inherit(P.iL,t)
inherit(P.iO,t)
inherit(P.iy,t)
inherit(P.ix,t)
inherit(P.iz,t)
inherit(P.fl,t)
inherit(P.eo,t)
inherit(P.ep,t)
inherit(W.er,t)
inherit(W.hd,t)
inherit(W.hL,t)
inherit(W.i3,t)
inherit(W.fD,t)
inherit(W.fC,t)
inherit(W.iB,t)
inherit(W.iC,t)
inherit(W.iI,t)
inherit(W.iJ,t)
inherit(P.hO,t)
inherit(P.iP,t)
inherit(P.iQ,t)
inherit(P.iR,t)
inherit(B.jh,t)
inherit(B.ji,t)
inherit(B.jj,t)
inherit(B.jk,t)
inherit(B.jl,t)
inherit(B.fI,t)
inherit(B.fJ,t)
inherit(B.fK,t)
inherit(B.fL,t)
inherit(D.fi,t)
inherit(D.fh,t)
inherit(A.j0,t)
inherit(T.jc,t)
inherit(T.je,t)
inherit(T.jb,t)
inherit(T.jd,t)
t=H.hV
inherit(H.bg,t)
inherit(H.c1,t)
t=P.aZ
inherit(H.fE,t)
inherit(H.fa,t)
inherit(H.hC,t)
inherit(H.hA,t)
inherit(H.e6,t)
inherit(H.h1,t)
inherit(P.cd,t)
inherit(P.b8,t)
inherit(P.a0,t)
inherit(P.hD,t)
inherit(P.hB,t)
inherit(P.bb,t)
inherit(P.e8,t)
inherit(P.eh,t)
t=H.hn
inherit(H.h9,t)
inherit(H.bq,t)
inherit(H.hP,P.cd)
inherit(P.cB,P.b6)
t=P.cB
inherit(H.ac,t)
inherit(W.hU,t)
t=H.b7
inherit(H.fu,t)
inherit(H.cG,t)
t=H.cG
inherit(H.bT,t)
inherit(H.bV,t)
inherit(H.bU,H.bT)
inherit(H.cH,H.bU)
inherit(H.bW,H.bV)
inherit(H.cI,H.bW)
t=H.cH
inherit(H.cF,t)
inherit(H.fv,t)
t=H.cI
inherit(H.fw,t)
inherit(H.fx,t)
inherit(H.fy,t)
inherit(H.fz,t)
inherit(H.fA,t)
inherit(H.cJ,t)
inherit(H.fB,t)
t=P.hW
inherit(P.bN,t)
inherit(P.iG,t)
inherit(P.iw,P.iK)
inherit(P.ip,H.ac)
inherit(P.h2,P.h3)
inherit(P.ik,P.h2)
inherit(P.im,P.ik)
inherit(P.cz,P.bS)
t=P.a9
inherit(P.a_,t)
inherit(P.x,t)
t=P.a0
inherit(P.cP,t)
inherit(P.f2,t)
t=W.e
inherit(W.r,t)
inherit(W.aq,t)
inherit(W.eO,t)
inherit(W.bt,t)
inherit(W.by,t)
inherit(W.fS,t)
inherit(W.cR,t)
inherit(W.bY,t)
inherit(W.c_,t)
inherit(W.hI,t)
inherit(W.hJ,t)
inherit(W.bM,t)
inherit(W.k_,t)
inherit(P.e3,t)
inherit(P.aW,t)
t=W.r
inherit(W.a2,t)
inherit(W.ay,t)
inherit(W.aB,t)
t=W.a2
inherit(W.k,t)
inherit(P.w,t)
t=W.aq
inherit(W.cb,t)
inherit(W.eY,t)
inherit(W.fk,t)
t=W.k
inherit(W.e_,t)
inherit(W.e0,t)
inherit(W.av,t)
inherit(W.aw,t)
inherit(W.ch,t)
inherit(W.eS,t)
inherit(W.cs,t)
inherit(W.b2,t)
inherit(W.bu,t)
inherit(W.bx,t)
inherit(W.bE,t)
inherit(W.cZ,t)
inherit(W.hl,t)
inherit(W.hm,t)
inherit(W.bI,t)
t=W.aY
inherit(W.e9,t)
inherit(W.eb,t)
inherit(W.ec,t)
inherit(W.ef,t)
t=W.a1
inherit(W.ea,t)
inherit(W.ee,t)
inherit(W.eg,t)
inherit(W.aX,W.d8)
inherit(W.el,W.cj)
inherit(W.da,W.d9)
inherit(W.ck,W.da)
inherit(W.dc,W.db)
inherit(W.em,W.dc)
inherit(W.df,W.de)
inherit(W.eN,W.df)
inherit(W.dh,W.dg)
inherit(W.bs,W.dh)
inherit(W.ct,W.aB)
inherit(W.cu,W.bt)
t=W.f
inherit(W.aM,t)
inherit(P.hH,t)
t=W.aM
inherit(W.aG,t)
inherit(W.O,t)
inherit(W.aL,t)
inherit(W.fr,W.by)
inherit(W.dl,W.dk)
inherit(W.fs,W.dl)
inherit(W.R,P.cz)
inherit(W.dp,W.dn)
inherit(W.bB,W.dp)
inherit(W.dt,W.ds)
inherit(W.fP,W.dt)
inherit(W.bZ,W.bY)
inherit(W.h5,W.bZ)
inherit(W.dv,W.du)
inherit(W.h7,W.dv)
inherit(W.hc,W.dz)
inherit(W.dD,W.dC)
inherit(W.ho,W.dD)
inherit(W.c0,W.c_)
inherit(W.hp,W.c0)
inherit(W.dF,W.dE)
inherit(W.hv,W.dF)
inherit(W.bc,W.bx)
inherit(W.aO,W.O)
inherit(W.dK,W.dJ)
inherit(W.hX,W.dK)
inherit(W.hZ,W.cl)
inherit(W.dM,W.dL)
inherit(W.ij,W.dM)
inherit(W.dO,W.dN)
inherit(W.dm,W.dO)
inherit(W.dQ,W.dP)
inherit(W.iD,W.dQ)
inherit(W.dS,W.dR)
inherit(W.iE,W.dS)
inherit(W.i_,W.hU)
inherit(W.dd,P.bG)
inherit(W.bO,W.dd)
inherit(W.i2,P.he)
inherit(W.iH,W.bX)
inherit(P.hN,P.hM)
inherit(P.V,P.iv)
t=P.w
inherit(P.et,t)
inherit(P.eu,t)
inherit(P.ev,t)
inherit(P.ew,t)
inherit(P.ex,t)
inherit(P.ey,t)
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
inherit(P.eP,t)
inherit(P.ab,t)
inherit(P.fn,t)
inherit(P.fM,t)
inherit(P.bD,t)
t=P.ab
inherit(P.eR,t)
inherit(P.a3,t)
inherit(P.f0,t)
inherit(P.hk,t)
inherit(P.bJ,t)
inherit(P.hF,t)
inherit(P.dj,P.di)
inherit(P.fb,P.dj)
inherit(P.dr,P.dq)
inherit(P.fF,P.dr)
inherit(P.fW,P.a3)
inherit(P.dB,P.dA)
inherit(P.hj,P.dB)
inherit(P.bK,P.bJ)
inherit(P.dH,P.dG)
inherit(P.hx,P.dH)
inherit(P.fG,P.aW)
inherit(P.dx,P.dw)
inherit(P.h8,P.dx)
t=G.ft
inherit(G.h6,t)
inherit(G.d5,t)
inherit(G.fc,t)
inherit(G.cD,t)
inherit(G.fZ,t)
inherit(A.b9,t)
inherit(A.fY,t)
t=G.h6
inherit(G.e4,t)
inherit(A.bA,t)
inherit(B.fH,G.e4)
t=G.fc
inherit(G.cN,t)
inherit(G.cg,t)
inherit(G.cV,t)
t=G.d5
inherit(G.f_,t)
inherit(G.fo,t)
inherit(G.fN,t)
inherit(G.f1,G.bL)
inherit(R.hb,R.ha)
mixin(H.bT,P.m)
mixin(H.bU,H.b_)
mixin(H.bV,P.m)
mixin(H.bW,H.b_)
mixin(P.bS,P.m)
mixin(W.d8,W.ed)
mixin(W.d9,P.m)
mixin(W.da,W.n)
mixin(W.db,P.m)
mixin(W.dc,W.n)
mixin(W.de,P.m)
mixin(W.df,W.n)
mixin(W.dg,P.m)
mixin(W.dh,W.n)
mixin(W.dk,P.m)
mixin(W.dl,W.n)
mixin(W.dn,P.m)
mixin(W.dp,W.n)
mixin(W.ds,P.m)
mixin(W.dt,W.n)
mixin(W.bY,P.m)
mixin(W.bZ,W.n)
mixin(W.du,P.m)
mixin(W.dv,W.n)
mixin(W.dz,P.b6)
mixin(W.dC,P.m)
mixin(W.dD,W.n)
mixin(W.c_,P.m)
mixin(W.c0,W.n)
mixin(W.dE,P.m)
mixin(W.dF,W.n)
mixin(W.dJ,P.m)
mixin(W.dK,W.n)
mixin(W.dL,P.m)
mixin(W.dM,W.n)
mixin(W.dN,P.m)
mixin(W.dO,W.n)
mixin(W.dP,P.m)
mixin(W.dQ,W.n)
mixin(W.dR,P.m)
mixin(W.dS,W.n)
mixin(P.di,P.m)
mixin(P.dj,W.n)
mixin(P.dq,P.m)
mixin(P.dr,W.n)
mixin(P.dA,P.m)
mixin(P.dB,W.n)
mixin(P.dG,P.m)
mixin(P.dH,W.n)
mixin(P.dw,P.m)
mixin(P.dx,W.n)})();(function constants(){C.o=W.av.prototype
C.K=W.aw.prototype
C.w=W.aX.prototype
C.p=W.ch.prototype
C.L=W.ci.prototype
C.M=W.cs.prototype
C.j=W.ct.prototype
C.y=W.cu.prototype
C.N=J.a.prototype
C.a=J.aD.prototype
C.q=J.cx.prototype
C.b=J.cy.prototype
C.c=J.b3.prototype
C.h=J.aE.prototype
C.U=J.aF.prototype
C.u=H.cF.prototype
C.C=W.bB.prototype
C.D=J.fO.prototype
C.E=W.cO.prototype
C.J=W.cZ.prototype
C.v=J.aN.prototype
C.au=W.aO.prototype
C.av=W.bM.prototype
C.d=new P.iw()
C.x=new P.aC(0)
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
C.V=H.A(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.o])
C.W=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.B=makeConstList([])
C.r=H.A(makeConstList(["bind","if","ref","repeat","syntax"]),[P.o])
C.t=H.A(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.o])
C.X=new G.y("vec3","vertex btangents",0)
C.e=new G.y("vec3","",0)
C.Y=new G.y("vec4","delta from light",0)
C.n=new G.y("","",0)
C.F=new G.y("vec3","vertex coordinates",0)
C.Z=new G.y("vec3","vertex binormals",0)
C.G=new G.y("vec4","for wireframe",0)
C.a_=new G.y("vec4","per vertex color",0)
C.a0=new G.y("float","for normal maps",0)
C.k=new G.y("mat4","",0)
C.a2=new G.y("mat4","",4)
C.a1=new G.y("mat4","",128)
C.f=new G.y("float","",0)
C.a3=new G.y("float","",4)
C.a4=new G.y("float","depth for shadowmaps",0)
C.i=new G.y("sampler2D","",0)
C.a5=new G.y("float","for bump maps",0)
C.a6=new G.y("vec2","texture uvs",0)
C.a7=new G.y("float","time since program start in sec",0)
C.l=new G.y("vec2","",0)
C.a8=new G.y("samplerCube","",0)
C.m=new G.y("vec4","",0)
C.a9=new G.y("vec3","vertex normals",0)
C.aa=new G.y("sampler2DShadow","",0)
C.H=new G.y("vec3","per vertex color",0)
C.I=new G.y("mat3","",0)
C.ab=new G.y("vec3","vertex tangents",0)
C.ac=H.J("oN")
C.ad=H.J("oO")
C.ae=H.J("eQ")
C.af=H.J("oP")
C.ag=H.J("oQ")
C.ah=H.J("kU")
C.ai=H.J("oR")
C.aj=H.J("kX")
C.ak=H.J("N")
C.al=H.J("o")
C.am=H.J("lp")
C.an=H.J("lq")
C.ao=H.J("oT")
C.ap=H.J("lr")
C.aq=H.J("ak")
C.ar=H.J("a_")
C.as=H.J("x")
C.at=H.J("a9")})();(function staticFields(){$.l8="$cachedFunction"
$.l9="$cachedInvocation"
$.kz=null
$.kx=null
$.k4=!1
$.k9=null
$.lE=null
$.lZ=null
$.iU=null
$.j4=null
$.ka=null
$.bh=null
$.c2=null
$.c3=null
$.k5=!1
$.v=C.d
$.kR=0
$.am=null
$.jB=null
$.kQ=null
$.kP=null
$.kM=null
$.kL=null
$.kK=null
$.kJ=null
$.og=0
$.oh=0
$.ke=0
$.lW=0
$.c7=0
$.c8=0
$.oF=!1
$.lM=0})();(function lazyInitializers(){lazy($,"kI","$get$kI",function(){return H.lO("_$dart_dartClosure")})
lazy($,"jH","$get$jH",function(){return H.lO("_$dart_js")})
lazy($,"kV","$get$kV",function(){return H.nk()})
lazy($,"kW","$get$kW",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kR
$.kR=t+1
t="expando$key$"+t}return new P.es(t,null,[P.x])})
lazy($,"le","$get$le",function(){return H.af(H.hz({
toString:function(){return"$receiver$"}}))})
lazy($,"lf","$get$lf",function(){return H.af(H.hz({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"lg","$get$lg",function(){return H.af(H.hz(null))})
lazy($,"lh","$get$lh",function(){return H.af(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"ll","$get$ll",function(){return H.af(H.hz(void 0))})
lazy($,"lm","$get$lm",function(){return H.af(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"lj","$get$lj",function(){return H.af(H.lk(null))})
lazy($,"li","$get$li",function(){return H.af(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"lo","$get$lo",function(){return H.af(H.lk(void 0))})
lazy($,"ln","$get$ln",function(){return H.af(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"k1","$get$k1",function(){return P.nO()})
lazy($,"kS","$get$kS",function(){return P.nU(null,P.N)})
lazy($,"c4","$get$c4",function(){return[]})
lazy($,"kH","$get$kH",function(){return{}})
lazy($,"lv","$get$lv",function(){return P.jL(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"k2","$get$k2",function(){return P.I()})
lazy($,"iT","$get$iT",function(){return P.l_(P.x,P.ak)})
lazy($,"c6","$get$c6",function(){return P.l_(P.o,P.ak)})
lazy($,"lc","$get$lc",function(){return new G.d2(1281,0,4294967295)})
lazy($,"kv","$get$kv",function(){return new G.d1(1281,1281,1281)})
lazy($,"S","$get$S",function(){return P.ao(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColors",C.H,"aColorAlpha",C.a_,"aPosition",C.F,"aTexUV",C.a6,"aNormal",C.a9,"aBinormal",C.Z,"aCenter",C.G,"aPointSize",C.f,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.ab,"aBitangent",C.X,"iaRotation",C.m,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.H,"vTexUV",C.l,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.F,"vPositionFromLight",C.Y,"vCenter",C.G,"vDepth",C.a4,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.I,"uConvolutionMatrix",C.I,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.aa,"uTexture",C.i,"uTexture2",C.i,"uTexture3",C.i,"uTexture4",C.i,"uSpecularMap",C.i,"uNormalMap",C.i,"uBumpMap",C.i,"uDepthMap",C.i,"uCubeTexture",C.a8,"uAnimationTable",C.i,"uTime",C.a7,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.e,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a1,"uLightDescs",C.a2,"uLightCount",C.f,"uLightTypes",C.a3,"uBumpScale",C.a5,"uNormalScale",C.a0])})
lazy($,"kF","$get$kF",function(){return T.E(1,1,1)})
lazy($,"kC","$get$kC",function(){return T.E(0,0,0)})
lazy($,"kD","$get$kD",function(){return T.E(0,0,0.5)})
lazy($,"kE","$get$kE",function(){return T.E(0,0.5,0)})
lazy($,"kG","$get$kG",function(){return T.E(1,1,0)})
lazy($,"lV","$get$lV",function(){var t=G.bF("LightGouradV")
t.aS(["aPosition","aNormal","aTexUV"])
t.ax(["vColor"])
t.Y(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"])
t.Y(["uLightDescs","uLightTypes","uShininess"])
t.Y(["uEyePosition","uTexture"])
t.bH(["void main() {\n    vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n    gl_Position = uPerspectiveViewMatrix * pos;\n    vec3 normal = uNormalMatrix * aNormal;\n\n    ColorComponents acc = CombinedLight(pos.xyz, normal, uEyePosition,\n                  uLightDescs,\n                  uLightTypes,\n                  uShininess);\n\n     vColor = acc.diffuse +\n                 acc.specular +\n                 texture(uTexture, aTexUV).rgb;\n}\n        "],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return t})
lazy($,"lT","$get$lT",function(){var t=G.bF("LightGrouradV")
t.ax(["vColor"])
t.aV(["oFragColor = vec4(vColor, 1.0 );"])
return t})
lazy($,"lU","$get$lU",function(){var t=G.bF("LightBlinnPhongV")
t.aS(["aPosition","aNormal","aTexUV"])
t.ax(["vPosition","vNormal","vTexUV"])
t.Y(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"])
t.dU(["void main() {\n    vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n    gl_Position = uPerspectiveViewMatrix * pos;\n    vPosition = pos.xyz;\n    vTexUV = aTexUV;\n    vNormal = uNormalMatrix * aNormal;\n}\n"])
return t})
lazy($,"lS","$get$lS",function(){var t=G.bF("LightBlinnPhongF")
t.ax(["vPosition","vNormal","vTexUV"])
t.Y(["uLightDescs","uLightTypes","uShininess"])
t.Y(["uEyePosition","uTexture"])
t.bI(["ColorComponents acc = CombinedLight(vPosition,\n                                    vNormal,\n                                    uEyePosition,\n                                    uLightDescs,\n                                    uLightTypes,\n                                    uShininess);\n\noFragColor.rgb = acc.diffuse +\n                    acc.specular +\n                    texture(uTexture, vTexUV).rgb;\noFragColor.a = 1.0;\n"],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return t})
lazy($,"m1","$get$m1",function(){var t=G.bF("SolidColor")
t.aS(["aPosition"])
t.Y(["uPerspectiveViewMatrix","uModelMatrix"])
t.aV(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"m0","$get$m0",function(){var t=G.bF("SolidColorF")
t.Y(["uColor"])
t.aV(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"m4","$get$m4",function(){return(1+P.oG(5))/2})
lazy($,"kT","$get$kT",function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=$.$get$m4()
s=T.E(-1,t,0)
s.D(0)
r=T.E(1,t,0)
r.D(0)
q=T.E(-1,-t,0)
q.D(0)
p=T.E(1,-t,0)
p.D(0)
o=T.E(0,-1,t)
o.D(0)
n=T.E(0,1,t)
n.D(0)
m=T.E(0,-1,-t)
m.D(0)
l=T.E(0,1,-t)
l.D(0)
k=T.E(t,0,-1)
k.D(0)
j=T.E(t,0,1)
j.D(0)
i=T.E(-t,0,-1)
i.D(0)
t=T.E(-t,0,1)
t.D(0)
return[s,r,q,p,o,n,m,l,k,j,i,t]})
lazy($,"lY","$get$lY",function(){return T.E(11,20,0)})
lazy($,"lK","$get$lK",function(){return T.E(0,-50,0)})
lazy($,"m2","$get$m2",function(){return T.E(-11,-30,0)})
lazy($,"iW","$get$iW",function(){var t,s,r,q,p,o
t=$.$get$lK()
s=$.$get$kC()
r=$.$get$kF()
q=T.fp()
p=T.fp()
o=$.$get$lY()
return P.ao(["idDirectional",new G.cg(t,s,r,40,q,p,1,"dir",!1,!0),"idPoint",new G.cN(o,$.$get$kD(),r,50,3,"point",!1,!0),"idSpot",new G.cV(o,$.$get$m2(),$.$get$kE(),r,50,0.4487989505128276,2,1,1,40,T.fp(),T.fp(),2,"spot",!1,!0)])})})()
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
mangledGlobalNames:{x:"int",a_:"double",a9:"num",o:"String",ak:"bool",N:"Null",h:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.r},{func:1,ret:P.ak,args:[W.a2,P.o,P.o,W.bQ]},{func:1,v:true,args:[P.D],opt:[P.ba]},{func:1,ret:P.x,args:[P.H,P.H]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,Blob:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGMatrix:J.a,SVGNumber:J.a,SVGPreserveAspectRatio:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bz,ArrayBufferView:H.b7,DataView:H.fu,Float32Array:H.cF,Float64Array:H.fv,Int16Array:H.fw,Int32Array:H.fx,Int8Array:H.fy,Uint16Array:H.fz,Uint32Array:H.fA,Uint8ClampedArray:H.cJ,CanvasPixelArray:H.cJ,Uint8Array:H.fB,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,Accelerometer:W.cb,LinearAccelerationSensor:W.cb,AccessibleNodeList:W.dZ,HTMLAnchorElement:W.e_,HTMLAreaElement:W.e0,HTMLBodyElement:W.av,HTMLCanvasElement:W.aw,CanvasRenderingContext2D:W.e5,CDATASection:W.ay,CharacterData:W.ay,Comment:W.ay,ProcessingInstruction:W.ay,Text:W.ay,CSSPerspective:W.e9,CSSPositionValue:W.ea,CSSRotation:W.eb,CSSScale:W.ec,CSSStyleDeclaration:W.aX,MSStyleCSSProperties:W.aX,CSS2Properties:W.aX,CSSImageValue:W.a1,CSSKeywordValue:W.a1,CSSNumericValue:W.a1,CSSResourceValue:W.a1,CSSUnitValue:W.a1,CSSURLImageValue:W.a1,CSSStyleValue:W.a1,CSSMatrixComponent:W.aY,CSSSkew:W.aY,CSSTransformComponent:W.aY,CSSTransformValue:W.ee,CSSTranslation:W.ef,CSSUnparsedValue:W.eg,DataTransferItemList:W.ei,DeviceAcceleration:W.ej,HTMLDivElement:W.ch,XMLDocument:W.aB,Document:W.aB,DOMException:W.ek,DOMImplementation:W.ci,DOMPoint:W.el,DOMPointReadOnly:W.cj,ClientRectList:W.ck,DOMRectList:W.ck,DOMRectReadOnly:W.cl,DOMStringList:W.em,DOMTokenList:W.en,Element:W.a2,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,AccessibleNode:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RemotePlayback:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SourceBuffer:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,TextTrack:W.e,TextTrackCue:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,VTTCue:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,ServiceWorker:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,FileList:W.eN,FileWriter:W.eO,HTMLFormElement:W.eS,Gyroscope:W.eY,HTMLHeadElement:W.cs,History:W.eZ,HTMLCollection:W.bs,HTMLFormControlsCollection:W.bs,HTMLOptionsCollection:W.bs,HTMLDocument:W.ct,XMLHttpRequest:W.cu,XMLHttpRequestUpload:W.bt,XMLHttpRequestEventTarget:W.bt,ImageBitmap:W.b0,ImageData:W.b1,HTMLImageElement:W.b2,HTMLInputElement:W.bu,KeyboardEvent:W.aG,Location:W.fj,Magnetometer:W.fk,HTMLAudioElement:W.bx,HTMLMediaElement:W.bx,MediaList:W.fq,MIDIOutput:W.fr,MIDIInput:W.by,MIDIPort:W.by,MimeTypeArray:W.fs,PointerEvent:W.O,MouseEvent:W.O,DragEvent:W.O,DocumentFragment:W.r,ShadowRoot:W.r,Attr:W.r,DocumentType:W.r,Node:W.r,NodeIterator:W.cK,NodeList:W.bB,RadioNodeList:W.bB,Plugin:W.ad,PluginArray:W.fP,PresentationConnection:W.fS,Range:W.cO,RTCDataChannel:W.cR,DataChannel:W.cR,HTMLSelectElement:W.bE,AbsoluteOrientationSensor:W.aq,AmbientLightSensor:W.aq,OrientationSensor:W.aq,RelativeOrientationSensor:W.aq,Sensor:W.aq,SourceBufferList:W.h5,SpeechGrammarList:W.h7,SpeechRecognitionResult:W.ae,Storage:W.hc,HTMLTableElement:W.cZ,HTMLTableRowElement:W.hl,HTMLTableSectionElement:W.hm,HTMLTemplateElement:W.bI,TextTrackCueList:W.ho,TextTrackList:W.hp,TimeRanges:W.hr,TouchEvent:W.aL,TouchList:W.hv,TrackDefaultList:W.hw,TreeWalker:W.d4,CompositionEvent:W.aM,FocusEvent:W.aM,TextEvent:W.aM,UIEvent:W.aM,URL:W.hE,VRStageBoundsPoint:W.hG,HTMLVideoElement:W.bc,VideoTrackList:W.hI,WebSocket:W.hJ,WheelEvent:W.aO,Window:W.bM,DOMWindow:W.bM,CSSRuleList:W.hX,DOMRect:W.hZ,GamepadList:W.ij,NamedNodeMap:W.dm,MozNamedAttrMap:W.dm,SpeechRecognitionResultList:W.iD,StyleSheetList:W.iE,IDBVersionChangeEvent:P.hH,SVGFEBlendElement:P.et,SVGFEColorMatrixElement:P.eu,SVGFEComponentTransferElement:P.ev,SVGFECompositeElement:P.ew,SVGFEConvolveMatrixElement:P.ex,SVGFEDiffuseLightingElement:P.ey,SVGFEDisplacementMapElement:P.ez,SVGFEFloodElement:P.eA,SVGFEGaussianBlurElement:P.eB,SVGFEImageElement:P.eC,SVGFEMergeElement:P.eD,SVGFEMorphologyElement:P.eE,SVGFEOffsetElement:P.eF,SVGFEPointLightElement:P.eG,SVGFESpecularLightingElement:P.eH,SVGFESpotLightElement:P.eI,SVGFETileElement:P.eJ,SVGFETurbulenceElement:P.eK,SVGFilterElement:P.eP,SVGForeignObjectElement:P.eR,SVGCircleElement:P.a3,SVGEllipseElement:P.a3,SVGLineElement:P.a3,SVGPathElement:P.a3,SVGPolygonElement:P.a3,SVGPolylineElement:P.a3,SVGGeometryElement:P.a3,SVGAElement:P.ab,SVGClipPathElement:P.ab,SVGDefsElement:P.ab,SVGGElement:P.ab,SVGSwitchElement:P.ab,SVGGraphicsElement:P.ab,SVGImageElement:P.f0,SVGLengthList:P.fb,SVGMaskElement:P.fn,SVGNumberList:P.fF,SVGPatternElement:P.fM,SVGPoint:P.fQ,SVGPointList:P.fR,SVGRect:P.fV,SVGRectElement:P.fW,SVGScriptElement:P.bD,SVGStringList:P.hj,SVGAnimateElement:P.w,SVGAnimateMotionElement:P.w,SVGAnimateTransformElement:P.w,SVGAnimationElement:P.w,SVGDescElement:P.w,SVGDiscardElement:P.w,SVGFEDistantLightElement:P.w,SVGFEFuncAElement:P.w,SVGFEFuncBElement:P.w,SVGFEFuncGElement:P.w,SVGFEFuncRElement:P.w,SVGFEMergeNodeElement:P.w,SVGLinearGradientElement:P.w,SVGMarkerElement:P.w,SVGMetadataElement:P.w,SVGRadialGradientElement:P.w,SVGSetElement:P.w,SVGStopElement:P.w,SVGStyleElement:P.w,SVGSymbolElement:P.w,SVGTitleElement:P.w,SVGViewElement:P.w,SVGGradientElement:P.w,SVGComponentTransferFunctionElement:P.w,SVGFEDropShadowElement:P.w,SVGMPathElement:P.w,SVGElement:P.w,SVGSVGElement:P.hk,SVGTextPathElement:P.bJ,SVGTextContentElement:P.bJ,SVGTSpanElement:P.bK,SVGTextElement:P.bK,SVGTextPositioningElement:P.bK,SVGTransformList:P.hx,SVGUseElement:P.hF,AudioBuffer:P.e2,AudioTrackList:P.e3,AudioContext:P.aW,webkitAudioContext:P.aW,BaseAudioContext:P.aW,OfflineAudioContext:P.fG,WebGLRenderingContext:P.h_,WebGL2RenderingContext:P.h0,SQLResultSetRowList:P.h8})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,Blob:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,File:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGMatrix:true,SVGNumber:true,SVGPreserveAspectRatio:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,Accelerometer:true,LinearAccelerationSensor:true,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSPositionValue:true,CSSRotation:true,CSSScale:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSSkew:true,CSSTransformComponent:false,CSSTransformValue:true,CSSTranslation:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AccessibleNode:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,Gyroscope:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageBitmap:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,Magnetometer:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,AbsoluteOrientationSensor:true,AmbientLightSensor:true,OrientationSensor:true,RelativeOrientationSensor:true,Sensor:false,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VRStageBoundsPoint:true,HTMLVideoElement:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,IDBVersionChangeEvent:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLengthList:true,SVGMaskElement:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMetadataElement:true,SVGRadialGradientElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransformList:true,SVGUseElement:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cG.$nativeSuperclassTag="ArrayBufferView"
H.bT.$nativeSuperclassTag="ArrayBufferView"
H.bU.$nativeSuperclassTag="ArrayBufferView"
H.cH.$nativeSuperclassTag="ArrayBufferView"
H.bV.$nativeSuperclassTag="ArrayBufferView"
H.bW.$nativeSuperclassTag="ArrayBufferView"
H.cI.$nativeSuperclassTag="ArrayBufferView"
W.bY.$nativeSuperclassTag="EventTarget"
W.bZ.$nativeSuperclassTag="EventTarget"
W.c_.$nativeSuperclassTag="EventTarget"
W.c0.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.m3(T.lR(),b)},[])
else (function(b){H.m3(T.lR(),b)})([])})})()