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
a[c]=function(){a[c]=function(){H.mm(b)}
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
return d?function(e){if(t===null)t=H.iI(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.iI(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.iI(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={il:function il(a){this.a=a},
is:function(a,b,c,d){if(!!a.$isj)return new H.dJ(a,b,[c,d])
return new H.c0(a,b,[c,d])},
ij:function(){return new P.bf("No element")},
lj:function(){return new P.bf("Too few elements")},
ly:function(a,b){H.cf(a,0,J.b1(a)-1,b)},
cf:function(a,b,c,d){if(c-b<=32)H.lx(a,b,c,d)
else H.lw(a,b,c,d)},
lx:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.T(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.a1(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
lw:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.L(t+1,6)
r=a3+s
q=a4-s
p=C.b.L(a3+a4,2)
o=p-s
n=p+s
t=J.T(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.a1(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.a1(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.a1(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.a1(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.a1(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.a1(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.a1(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.a1(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.a1(a5.$2(j,i),0)){h=i
i=j
j=h}t.i(a2,r,m)
t.i(a2,p,k)
t.i(a2,q,i)
t.i(a2,o,t.h(a2,a3))
t.i(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.A(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.cf(a2,a3,g-2,a5)
H.cf(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.A(a5.$2(t.h(a2,g),l),0);)++g
for(;J.A(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.cf(a2,g,f,a5)}else H.cf(a2,g,f,a5)},
j:function j(){},
aN:function aN(){},
c_:function c_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
c0:function c0(a,b,c){this.a=a
this.b=b
this.$ti=c},
dJ:function dJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
ez:function ez(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
c1:function c1(a,b,c){this.a=a
this.b=b
this.$ti=c},
aL:function aL(){},
d9:function(a,b){var t=a.ae(b)
if(!u.globalState.d.cy)u.globalState.f.aj()
return t},
hH:function(){++u.globalState.f.b},
hV:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
kf:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.r(s).$isi)throw H.c(P.j2("Arguments to main must be a List: "+H.e(s)))
u.globalState=new H.hn(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$ji()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.h_(P.ir(null,H.aE),0)
q=P.v
s.se4(new H.a5(0,null,null,null,null,null,0,[q,H.aR]))
s.se7(new H.a5(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.hm()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.le,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.lK)}if(u.globalState.x)return
o=H.jP()
u.globalState.e=o
u.globalState.z.i(0,o.a,o)
u.globalState.d=o
if(H.aX(a,{func:1,args:[P.J]}))o.ae(new H.i4(t,a))
else if(H.aX(a,{func:1,args:[P.J,P.J]}))o.ae(new H.i5(t,a))
else o.ae(a)
u.globalState.f.aj()},
lK:function(a){var t=P.aw(["command","print","msg",a])
return new H.Z(!0,P.aS(null,P.v)).K(t)},
jP:function(){var t,s
t=u.globalState.a++
s=P.v
t=new H.aR(t,new H.a5(0,null,null,null,null,null,0,[s,H.cc]),P.bZ(null,null,null,s),u.createNewIsolate(),new H.cc(0,null,!1),new H.an(H.kc()),new H.an(H.kc()),!1,!1,[],P.bZ(null,null,null,null),null,null,!1,!0,P.bZ(null,null,null,null))
t.d9()
return t},
lg:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.lh()
return},
lh:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.q("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.q('Cannot extract URI from "'+t+'"'))},
le:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.aD(!0,[]).Y(b.data)
s=J.T(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.m9(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aD(!0,[]).Y(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aD(!0,[]).Y(s.h(t,"replyTo"))
k=H.jP()
u.globalState.f.a.W(0,new H.aE(k,new H.ei(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.aj()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.kL(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.aj()
break
case"close":u.globalState.ch.ai(0,$.$get$jj().h(0,a))
a.terminate()
u.globalState.f.aj()
break
case"log":H.ld(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.aw(["command","print","msg",t])
j=new H.Z(!0,P.aS(null,P.v)).K(j)
s.toString
self.postMessage(j)}else P.a0(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
ld:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aw(["command","log","msg",a])
r=new H.Z(!0,P.aS(null,P.v)).K(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.ad(q)
t=H.al(q)
s=P.bT(t)
throw H.c(s)}},
lf:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.jr=$.jr+("_"+s)
$.js=$.js+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.I(0,["spawned",new H.aT(s,r),q,t.r])
r=new H.ej(t,d,a,c,b)
if(e){t.bA(q,q)
u.globalState.f.a.W(0,new H.aE(t,r,"start isolate"))}else r.$0()},
lA:function(a,b){var t=new H.fz(!0,!1,null,0)
t.d4(a,b)
return t},
lL:function(a){return new H.aD(!0,[]).Y(new H.Z(!1,P.aS(null,P.v)).K(a))},
i4:function i4(a,b){this.a=a
this.b=b},
i5:function i5(a,b){this.a=a
this.b=b},
hn:function hn(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
aR:function aR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
hg:function hg(a,b){this.a=a
this.b=b},
h_:function h_(a,b){this.a=a
this.b=b},
h0:function h0(a){this.a=a},
aE:function aE(a,b,c){this.a=a
this.b=b
this.c=c},
hm:function hm(){},
ei:function ei(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ej:function ej(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fW:function fW(){},
aT:function aT(a,b){this.b=a
this.a=b},
ho:function ho(a,b){this.a=a
this.b=b},
bv:function bv(a,b,c){this.b=a
this.c=b
this.a=c},
cc:function cc(a,b,c){this.a=a
this.b=b
this.c=c},
fz:function fz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fA:function fA(a,b){this.a=a
this.b=b},
fB:function fB(a,b){this.a=a
this.b=b},
an:function an(a){this.a=a},
Z:function Z(a,b){this.a=a
this.b=b},
aD:function aD(a,b){this.a=a
this.b=b},
m5:function(a){return u.types[a]},
mb:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.r(a).$isp},
e:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bF(a)
if(typeof t!=="string")throw H.c(H.M(a))
return t},
lu:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.af(t)
s=t[0]
r=t[1]
return new H.f6(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
ay:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
bc:function(a){var t,s,r,q,p,o,n,m,l
t=J.r(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.C||!!J.r(a).$isaB){p=C.u(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aC(q,0)===36)q=C.i.cK(q,1)
l=H.dc(H.hJ(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
L:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ls:function(a){return a.b?H.L(a).getUTCFullYear()+0:H.L(a).getFullYear()+0},
lq:function(a){return a.b?H.L(a).getUTCMonth()+1:H.L(a).getMonth()+1},
lm:function(a){return a.b?H.L(a).getUTCDate()+0:H.L(a).getDate()+0},
ln:function(a){return a.b?H.L(a).getUTCHours()+0:H.L(a).getHours()+0},
lp:function(a){return a.b?H.L(a).getUTCMinutes()+0:H.L(a).getMinutes()+0},
lr:function(a){return a.b?H.L(a).getUTCSeconds()+0:H.L(a).getSeconds()+0},
lo:function(a){return a.b?H.L(a).getUTCMilliseconds()+0:H.L(a).getMilliseconds()+0},
jq:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.M(a))
return a[b]},
aW:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a2(!0,b,"index",null)
t=J.b1(a)
if(b<0||C.b.aY(b,t))return P.y(b,a,"index",null,t)
return P.f3(b,"index",null)},
M:function(a){return new P.a2(!0,a,null,null)},
c:function(a){var t
if(a==null)a=new P.ca()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.kh})
t.name=""}else t.toString=H.kh
return t},
kh:function(){return J.bF(this.dartException)},
H:function(a){throw H.c(a)},
K:function(a){throw H.c(P.aq(a))},
a8:function(a){var t,s,r,q,p,o
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
jD:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jp:function(a,b){return new H.eP(a,b==null?null:b.method)},
io:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.ep(a,s,t?null:b.receiver)},
ad:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.i6(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aO(r,16)&8191)===10)switch(q){case 438:return t.$1(H.io(H.e(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.jp(H.e(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$jx()
o=$.$get$jy()
n=$.$get$jz()
m=$.$get$jA()
l=$.$get$jE()
k=$.$get$jF()
j=$.$get$jC()
$.$get$jB()
i=$.$get$jH()
h=$.$get$jG()
g=p.O(s)
if(g!=null)return t.$1(H.io(s,g))
else{g=o.O(s)
if(g!=null){g.method="call"
return t.$1(H.io(s,g))}else{g=n.O(s)
if(g==null){g=m.O(s)
if(g==null){g=l.O(s)
if(g==null){g=k.O(s)
if(g==null){g=j.O(s)
if(g==null){g=m.O(s)
if(g==null){g=i.O(s)
if(g==null){g=h.O(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.jp(s,g))}}return t.$1(new H.fJ(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.ci()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.a2(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.ci()
return a},
al:function(a){var t
if(a==null)return new H.cQ(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.cQ(a,null)},
mf:function(a){if(a==null||typeof a!='object')return J.b0(a)
else return H.ay(a)},
m2:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.i(0,p,a[q])}return b},
ma:function(a,b,c,d,e,f,g){switch(c){case 0:return H.d9(b,new H.hQ(a))
case 1:return H.d9(b,new H.hR(a,d))
case 2:return H.d9(b,new H.hS(a,d,e))
case 3:return H.d9(b,new H.hT(a,d,e,f))
case 4:return H.d9(b,new H.hU(a,d,e,f,g))}throw H.c(P.bT("Unsupported number of arguments for wrapped closure"))},
bz:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.ma)
a.$identity=t
return t},
l1:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.r(c).$isi){t.$reflectionInfo=c
r=H.lu(t).r}else r=c
q=d?Object.create(new H.fl().constructor.prototype):Object.create(new H.b2(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.ja(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.m5,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.j7:H.ie
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.ja(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
kZ:function(a,b,c,d){var t=H.ie
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
ja:function(a,b,c){var t,s,r,q
if(c)return H.l0(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.kZ(s,b==null?r!=null:b!==r,t,b)
return q},
l_:function(a,b,c,d){var t,s
t=H.ie
s=H.j7
switch(b?-1:a){case 0:throw H.c(H.lv("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
l0:function(a,b){var t,s,r,q
t=$.j8
if(t==null){t=H.j5("self")
$.j8=t}t=$.j6
if(t==null){t=H.j5("receiver")
$.j6=t}s=b.$stubName
r=b.length
q=a[s]
t=H.l_(r,b==null?q!=null:b!==q,s,b)
return t},
iI:function(a,b,c,d,e,f){var t,s
t=J.af(b)
s=!!J.r(c).$isi?J.af(c):c
return H.l1(a,t,s,!!d,e,f)},
ie:function(a){return a.a},
j7:function(a){return a.c},
j5:function(a){var t,s,r,q,p
t=new H.b2("self","target","receiver","name")
s=J.af(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
mB:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a9(a,"String"))},
mw:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a9(a,"double"))},
mA:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a9(a,"num"))},
lX:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a9(a,"bool"))},
m9:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a9(a,"int"))},
mh:function(a,b){throw H.c(H.a9(a,b.substring(3)))},
mg:function(a,b){var t=J.T(b)
throw H.c(H.j9(a,t.b9(b,3,t.gj(b))))},
k4:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.r(a)[b])return a
H.mh(a,b)},
am:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.r(a)[b]
else t=!0
if(t)return a
H.mg(a,b)},
mz:function(a){if(a==null)return a
if(!!J.r(a).$isi)return a
throw H.c(H.a9(a,"List"))},
iJ:function(a){var t=J.r(a)
return"$S" in t?t.$S():null},
aX:function(a,b){var t,s
if(a==null)return!1
t=H.iJ(a)
if(t==null)s=!1
else s=H.k5(t,b)
return s},
mx:function(a,b){var t,s
if(a==null)return a
if($.iF)return a
$.iF=!0
try{if(H.aX(a,b))return a
t=H.hZ(b,null)
s=H.a9(a,t)
throw H.c(s)}finally{$.iF=!1}},
a9:function(a,b){return new H.fH("TypeError: "+H.e(P.bS(a))+": type '"+H.jU(a)+"' is not a subtype of type '"+b+"'")},
j9:function(a,b){return new H.dn("CastError: "+H.e(P.bS(a))+": type '"+H.jU(a)+"' is not a subtype of type '"+b+"'")},
jU:function(a){var t
if(a instanceof H.ap){t=H.iJ(a)
if(t!=null)return H.hZ(t,null)
return"Closure"}return H.bc(a)},
ac:function(a){if(!0===a)return!1
if(!!J.r(a).$isii)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.a9(a,"bool"))},
aj:function(a){throw H.c(new H.fR(a))},
b:function(a){if(H.ac(a))throw H.c(P.kY(null))},
mm:function(a){throw H.c(new P.dz(a))},
lv:function(a){return new H.fb(a)},
kc:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
k2:function(a){return u.getIsolateTag(a)},
F:function(a){return new H.ah(a,null)},
G:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
hJ:function(a){if(a==null)return
return a.$ti},
k3:function(a,b){return H.iP(a["$as"+H.e(b)],H.hJ(a))},
ak:function(a,b,c){var t,s
t=H.k3(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aY:function(a,b){var t,s
t=H.hJ(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
hZ:function(a,b){var t=H.aZ(a,b)
return t},
aZ:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dc(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.e(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aZ(t,b)
return H.lM(a,b)}return"unknown-reified-type"},
lM:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aZ(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aZ(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aZ(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.m1(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aZ(l[j],b)+(" "+H.e(j))}q+="}"}return"("+q+") => "+t},
dc:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.bg("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aZ(o,c)}return p?"":"<"+s.k(0)+">"},
hK:function(a){var t,s,r
if(a instanceof H.ap){t=H.iJ(a)
if(t!=null)return H.hZ(t,null)}s=J.r(a).constructor.name
if(a==null)return s
r=H.dc(a.$ti,0,null)
return s+r},
iP:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.iM(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.iM(a,null,b)
return b},
hC:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.hJ(a)
s=J.r(a)
if(s[b]==null)return!1
return H.jY(H.iP(s[d],t),c)},
dd:function(a,b,c,d){var t,s
if(a==null)return a
t=H.hC(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dc(c,0,null)
throw H.c(H.j9(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
mt:function(a,b,c,d){var t,s
if(a==null)return a
t=H.hC(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dc(c,0,null)
throw H.c(H.a9(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
jY:function(a,b){var t,s,r,q,p
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
if(!H.Q(r,b[p]))return!1}return!0},
mu:function(a,b,c){return H.iM(a,b,H.k3(b,c))},
Q:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="J")return!0
if('func' in b)return H.k5(a,b)
if('func' in a)return b.name==="ii"||b.name==="B"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.hZ(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.jY(H.iP(o,t),r)},
jX:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.Q(o,n)||H.Q(n,o)))return!1}return!0},
lT:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.af(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.Q(p,o)||H.Q(o,p)))return!1}return!0},
k5:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.Q(t,s)||H.Q(s,t)))return!1}r=a.args
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
if(n===m){if(!H.jX(r,q,!1))return!1
if(!H.jX(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.Q(g,f)||H.Q(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.Q(g,f)||H.Q(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.Q(g,f)||H.Q(f,g)))return!1}}return H.lT(a.named,b.named)},
iM:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
mC:function(a){var t=$.iK
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
my:function(a){return H.ay(a)},
mv:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mc:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.B))
t=$.iK.$1(a)
s=$.hG[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.hP[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.jW.$2(a,t)
if(t!=null){s=$.hG[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.hP[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.hX(r)
$.hG[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.hP[t]=r
return r}if(p==="-"){o=H.hX(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.k8(a,r)
if(p==="*")throw H.c(P.jL(t))
if(u.leafTags[t]===true){o=H.hX(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.k8(a,r)},
k8:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.iN(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
hX:function(a){return J.iN(a,!1,null,!!a.$isp)},
me:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.hX(t)
else return J.iN(t,c,null,null)},
m7:function(){if(!0===$.iL)return
$.iL=!0
H.m8()},
m8:function(){var t,s,r,q,p,o,n,m
$.hG=Object.create(null)
$.hP=Object.create(null)
H.m6()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.kb.$1(p)
if(o!=null){n=H.me(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
m6:function(){var t,s,r,q,p,o,n
t=C.G()
t=H.aV(C.D,H.aV(C.I,H.aV(C.t,H.aV(C.t,H.aV(C.H,H.aV(C.E,H.aV(C.F(C.u),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.iK=new H.hM(p)
$.jW=new H.hN(o)
$.kb=new H.hO(n)},
aV:function(a,b){return a(b)||b},
f6:function f6(a,b,c,d,e,f,g,h){var _=this
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
eP:function eP(a,b){this.a=a
this.b=b},
ep:function ep(a,b,c){this.a=a
this.b=b
this.c=c},
fJ:function fJ(a){this.a=a},
i6:function i6(a){this.a=a},
cQ:function cQ(a,b){this.a=a
this.b=b},
hQ:function hQ(a){this.a=a},
hR:function hR(a,b){this.a=a
this.b=b},
hS:function hS(a,b,c){this.a=a
this.b=b
this.c=c},
hT:function hT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hU:function hU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ap:function ap(){},
fu:function fu(){},
fl:function fl(){},
b2:function b2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fH:function fH(a){this.a=a},
dn:function dn(a){this.a=a},
fb:function fb(a){this.a=a},
fR:function fR(a){this.a=a},
ah:function ah(a,b){this.a=a
this.b=b},
a5:function a5(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eo:function eo(a){this.a=a},
er:function er(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
es:function es(a,b){this.a=a
this.$ti=b},
et:function et(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hM:function hM(a){this.a=a},
hN:function hN(a){this.a=a},
hO:function hO(a){this.a=a},
hy:function(a){var t,s,r
if(!!J.r(a).$iso)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
ab:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.aW(b,a))},
bb:function bb(){},
aP:function aP(){},
eH:function eH(){},
c5:function c5(){},
c6:function c6(){},
c7:function c7(){},
c4:function c4(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
c8:function c8(){},
eO:function eO(){},
bn:function bn(){},
bo:function bo(){},
bp:function bp(){},
bq:function bq(){},
m1:function(a){return J.af(H.G(a?Object.keys(a):[],[null]))},
hY:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
r:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bY.prototype
return J.em.prototype}if(typeof a=="string")return J.at.prototype
if(a==null)return J.en.prototype
if(typeof a=="boolean")return J.el.prototype
if(a.constructor==Array)return J.as.prototype
if(typeof a!="object"){if(typeof a=="function")return J.au.prototype
return a}if(a instanceof P.B)return a
return J.hI(a)},
iN:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hI:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.iL==null){H.m7()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.jL("Return interceptor for "+H.e(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$im()]
if(p!=null)return p
p=H.mc(a)
if(p!=null)return p
if(typeof a=="function")return C.J
s=Object.getPrototypeOf(a)
if(s==null)return C.v
if(s===Object.prototype)return C.v
if(typeof q=="function"){Object.defineProperty(q,$.$get$im(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
af:function(a){a.fixed$length=Array
return a},
T:function(a){if(typeof a=="string")return J.at.prototype
if(a==null)return a
if(a.constructor==Array)return J.as.prototype
if(typeof a!="object"){if(typeof a=="function")return J.au.prototype
return a}if(a instanceof P.B)return a
return J.hI(a)},
da:function(a){if(a==null)return a
if(a.constructor==Array)return J.as.prototype
if(typeof a!="object"){if(typeof a=="function")return J.au.prototype
return a}if(a instanceof P.B)return a
return J.hI(a)},
k1:function(a){if(typeof a=="number")return J.aM.prototype
if(a==null)return a
if(!(a instanceof P.B))return J.aB.prototype
return a},
m3:function(a){if(typeof a=="number")return J.aM.prototype
if(typeof a=="string")return J.at.prototype
if(a==null)return a
if(!(a instanceof P.B))return J.aB.prototype
return a},
m4:function(a){if(typeof a=="string")return J.at.prototype
if(a==null)return a
if(!(a instanceof P.B))return J.aB.prototype
return a},
k:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.au.prototype
return a}if(a instanceof P.B)return a
return J.hI(a)},
A:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.r(a).v(a,b)},
a1:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.k1(a).V(a,b)},
ki:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.k1(a).a_(a,b)},
b_:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mb(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.T(a).h(a,b)},
kj:function(a,b,c,d){return J.k(a).dc(a,b,c,d)},
iQ:function(a,b){return J.m4(a).aC(a,b)},
iR:function(a,b){return J.k(a).bz(a,b)},
iS:function(a,b,c){return J.k(a).bB(a,b,c)},
kk:function(a,b){return J.k(a).dC(a,b)},
i7:function(a,b,c){return J.k(a).bC(a,b,c)},
kl:function(a,b,c){return J.k(a).bD(a,b,c)},
bD:function(a,b,c){return J.k(a).bE(a,b,c)},
de:function(a,b){return J.k(a).dF(a,b)},
km:function(a,b){return J.k(a).bF(a,b)},
kn:function(a,b,c){return J.k(a).bG(a,b,c)},
iT:function(a,b,c,d){return J.k(a).bH(a,b,c,d)},
ko:function(a,b){return J.da(a).bI(a,b)},
kp:function(a,b,c,d,e){return J.k(a).bJ(a,b,c,d,e)},
kq:function(a,b){return J.m3(a).S(a,b)},
i8:function(a){return J.k(a).bL(a)},
kr:function(a){return J.k(a).bM(a)},
ks:function(a){return J.k(a).bP(a)},
kt:function(a){return J.k(a).dK(a)},
ku:function(a,b){return J.k(a).bR(a,b)},
i9:function(a,b){return J.k(a).bS(a,b)},
kv:function(a,b,c,d){return J.k(a).bT(a,b,c,d)},
kw:function(a,b,c,d,e){return J.k(a).dR(a,b,c,d,e)},
kx:function(a,b,c,d,e){return J.k(a).bU(a,b,c,d,e)},
ky:function(a,b,c,d,e,f){return J.k(a).dS(a,b,c,d,e,f)},
kz:function(a,b){return J.da(a).p(a,b)},
df:function(a,b){return J.k(a).bV(a,b)},
kA:function(a,b){return J.k(a).bW(a,b)},
kB:function(a){return J.k(a).dT(a)},
iU:function(a,b){return J.da(a).au(a,b)},
b0:function(a){return J.r(a).gu(a)},
bE:function(a){return J.da(a).gA(a)},
b1:function(a){return J.T(a).gj(a)},
kC:function(a){return J.r(a).gw(a)},
kD:function(a){return J.k(a).gay(a)},
ia:function(a){return J.k(a).gm(a)},
ib:function(a){return J.k(a).gn(a)},
iV:function(a){return J.k(a).gC(a)},
kE:function(a){return J.k(a).az(a)},
kF:function(a){return J.k(a).b_(a)},
kG:function(a,b){return J.k(a).b0(a,b)},
kH:function(a,b,c){return J.k(a).b1(a,b,c)},
iW:function(a,b,c){return J.k(a).b4(a,b,c)},
kI:function(a,b){return J.k(a).bZ(a,b)},
kJ:function(a,b){return J.da(a).c0(a,b)},
kK:function(a,b,c){return J.k(a).c2(a,b,c)},
kL:function(a,b){return J.k(a).I(a,b)},
kM:function(a,b,c,d){return J.k(a).b8(a,b,c,d)},
kN:function(a,b,c,d,e,f,g){return J.k(a).c7(a,b,c,d,e,f,g)},
kO:function(a,b,c,d){return J.k(a).c8(a,b,c,d)},
iX:function(a,b,c,d){return J.k(a).c9(a,b,c,d)},
bF:function(a){return J.r(a).k(a)},
kP:function(a,b,c,d){return J.k(a).ek(a,b,c,d)},
kQ:function(a,b,c){return J.k(a).cd(a,b,c)},
kR:function(a,b,c){return J.k(a).ce(a,b,c)},
ic:function(a,b,c){return J.k(a).cf(a,b,c)},
kS:function(a,b,c){return J.k(a).cg(a,b,c)},
iY:function(a,b,c){return J.k(a).ci(a,b,c)},
iZ:function(a,b,c){return J.k(a).cj(a,b,c)},
j_:function(a,b,c){return J.k(a).ck(a,b,c)},
j0:function(a,b,c,d){return J.k(a).cl(a,b,c,d)},
j1:function(a,b,c,d){return J.k(a).cm(a,b,c,d)},
kT:function(a,b){return J.k(a).co(a,b)},
kU:function(a,b,c){return J.k(a).el(a,b,c)},
kV:function(a,b,c,d,e,f,g){return J.k(a).cq(a,b,c,d,e,f,g)},
kW:function(a,b,c,d,e){return J.k(a).cs(a,b,c,d,e)},
a:function a(){},
el:function el(){},
en:function en(){},
b8:function b8(){},
eZ:function eZ(){},
aB:function aB(){},
au:function au(){},
as:function as(a){this.$ti=a},
ik:function ik(a){this.$ti=a},
dj:function dj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aM:function aM(){},
bY:function bY(){},
em:function em(){},
at:function at(){}},P={
lE:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.lU()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bz(new P.fT(t),1)).observe(s,{childList:true})
return new P.fS(t,s,r)}else if(self.setImmediate!=null)return P.lV()
return P.lW()},
lF:function(a){H.hH()
self.scheduleImmediate(H.bz(new P.fU(a),0))},
lG:function(a){H.hH()
self.setImmediate(H.bz(new P.fV(a),0))},
lH:function(a){P.ix(C.r,a)},
ix:function(a,b){var t=C.b.L(a.a,1000)
return H.lA(t<0?0:t,b)},
lP:function(a,b){if(H.aX(a,{func:1,args:[P.J,P.J]})){b.toString
return a}else{b.toString
return a}},
lI:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.aa))
H.b(b.a===0)
b.a=1
try{a.cb(new P.h6(b),new P.h7(b))}catch(r){t=H.ad(r)
s=H.al(r)
P.mi(new P.h8(b,t,s))}},
jO:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.aM()
b.aB(a)
P.bl(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.bt(r)}},
bl:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.hz(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
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
if(k){H.b(s.a===8)
s=s.c
p=t.a.b
o=s.a
s=s.b
p.toString
P.hz(null,null,p,o,s)
return}s=$.z
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.z
H.b(l==null?s!=null:l!==s)
j=$.z
$.z=l
i=j}else i=null
s=b.c
if(s===8)new P.hc(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.hb(r,b,m).$0()}else if((s&2)!==0)new P.ha(t,r,b).$0()
if(i!=null){H.b(!0)
$.z=i}s=r.b
if(!!J.r(s).$isea){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.as(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.jO(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.as(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
lO:function(){var t,s
for(;t=$.aU,t!=null;){$.bx=null
s=t.b
$.aU=s
if(s==null)$.bw=null
t.a.$0()}},
lS:function(){$.iG=!0
try{P.lO()}finally{$.bx=null
$.iG=!1
if($.aU!=null)$.$get$iC().$1(P.jZ())}},
jT:function(a){var t=new P.cq(a,null)
if($.aU==null){$.bw=t
$.aU=t
if(!$.iG)$.$get$iC().$1(P.jZ())}else{$.bw.b=t
$.bw=t}},
lR:function(a){var t,s,r
t=$.aU
if(t==null){P.jT(a)
$.bx=$.bw
return}s=new P.cq(a,null)
r=$.bx
if(r==null){s.b=t
$.bx=s
$.aU=s}else{s.b=r.b
r.b=s
$.bx=s
if(s.b==null)$.bw=s}},
mi:function(a){var t=$.z
if(C.f===t){P.hB(null,null,C.f,a)
return}t.toString
P.hB(null,null,t,t.aT(a))},
lB:function(a,b){var t=$.z
if(t===C.f){t.toString
return P.ix(a,b)}return P.ix(a,t.aT(b))},
iB:function(a){var t,s
H.b(a!=null)
t=$.z
H.b(a==null?t!=null:a!==t)
s=$.z
$.z=a
return s},
hz:function(a,b,c,d,e){var t={}
t.a=d
P.lR(new P.hA(t,e))},
jR:function(a,b,c,d){var t,s
if($.z===c)return d.$0()
t=P.iB(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.z=s}},
jS:function(a,b,c,d,e){var t,s
if($.z===c)return d.$1(e)
t=P.iB(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.z=s}},
lQ:function(a,b,c,d,e,f){var t,s
if($.z===c)return d.$2(e,f)
t=P.iB(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.z=s}},
hB:function(a,b,c,d){var t=C.f!==c
if(t)d=!(!t||!1)?c.aT(d):c.dD(d)
P.jT(d)},
fT:function fT(a){this.a=a},
fS:function fS(a,b,c){this.a=a
this.b=b
this.c=c},
fU:function fU(a){this.a=a},
fV:function fV(a){this.a=a},
ig:function ig(){},
fX:function fX(){},
hw:function hw(a,b){this.a=a
this.$ti=b},
cy:function cy(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
aa:function aa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
h5:function h5(a,b){this.a=a
this.b=b},
h9:function h9(a,b){this.a=a
this.b=b},
h6:function h6(a){this.a=a},
h7:function h7(a){this.a=a},
h8:function h8(a,b,c){this.a=a
this.b=b
this.c=c},
hc:function hc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hd:function hd(a){this.a=a},
hb:function hb(a,b,c){this.a=a
this.b=b
this.c=c},
ha:function ha(a,b,c){this.a=a
this.b=b
this.c=c},
cq:function cq(a,b){this.a=a
this.b=b},
fo:function fo(){},
fq:function fq(a){this.a=a},
fr:function fr(a,b){this.a=a
this.b=b},
fp:function fp(){},
iw:function iw(){},
aH:function aH(a,b){this.a=a
this.b=b},
hx:function hx(){},
hA:function hA(a,b){this.a=a
this.b=b},
hq:function hq(){},
hs:function hs(a,b){this.a=a
this.b=b},
hr:function hr(a,b){this.a=a
this.b=b},
ht:function ht(a,b){this.a=a
this.b=b},
jl:function(a,b){return new H.a5(0,null,null,null,null,null,0,[a,b])},
R:function(){return new H.a5(0,null,null,null,null,null,0,[null,null])},
aw:function(a){return H.m2(a,new H.a5(0,null,null,null,null,null,0,[null,null]))},
aS:function(a,b){return new P.hk(0,null,null,null,null,null,0,[a,b])},
bZ:function(a,b,c,d){return new P.hi(0,null,null,null,null,null,0,[d])},
iE:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
li:function(a,b,c){var t,s
if(P.iH(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$by()
C.a.l(s,a)
try{P.lN(a,t)}finally{H.b(C.a.gax(s)===a)
s.pop()}s=P.jv(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
ek:function(a,b,c){var t,s,r
if(P.iH(a))return b+"..."+c
t=new P.bg(b)
s=$.$get$by()
C.a.l(s,a)
try{r=t
r.a=P.jv(r.ga3(),a,", ")}finally{H.b(C.a.gax(s)===a)
s.pop()}s=t
s.a=s.ga3()+c
s=t.ga3()
return s.charCodeAt(0)==0?s:s},
iH:function(a){var t,s
for(t=0;s=$.$get$by(),t<s.length;++t)if(a===s[t])return!0
return!1},
lN:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gA(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.q())return
q=H.e(t.gt(t))
C.a.l(b,q)
s+=q.length+2;++r}if(!t.q()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gt(t);++r
if(!t.q()){if(r<=4){C.a.l(b,H.e(n))
return}p=H.e(n)
o=b.pop()
s+=p.length+2}else{m=t.gt(t);++r
H.b(r<100)
for(;t.q();n=m,m=l){l=t.gt(t);++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.l(b,"...")
return}}o=H.e(n)
p=H.e(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.l(b,k)
C.a.l(b,o)
C.a.l(b,p)},
lk:function(a,b){var t,s
t=P.bZ(null,null,null,b)
for(s=J.bE(a);s.q();)t.l(0,s.gt(s))
return t},
jn:function(a){var t,s,r
t={}
if(P.iH(a))return"{...}"
s=new P.bg("")
try{C.a.l($.$get$by(),a)
r=s
r.a=r.ga3()+"{"
t.a=!0
J.iU(a,new P.ey(t,s))
t=s
t.a=t.ga3()+"}"}finally{t=$.$get$by()
H.b(C.a.gax(t)===a)
t.pop()}t=s.ga3()
return t.charCodeAt(0)==0?t:t},
ir:function(a,b){var t=new P.eu(null,0,0,0,[b])
t.cY(a,b)
return t},
hk:function hk(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hi:function hi(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
bm:function bm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hf:function hf(){},
iq:function iq(){},
l:function l(){},
ex:function ex(){},
ey:function ey(a,b){this.a=a
this.b=b},
b9:function b9(){},
eu:function eu(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hl:function hl(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fe:function fe(){},
fd:function fd(){},
l7:function(a){var t=J.r(a)
if(!!t.$isap)return t.k(a)
return"Instance of '"+H.bc(a)+"'"},
jm:function(a,b,c){var t,s
t=H.G([],[c])
for(s=J.bE(a);s.q();)C.a.l(t,s.gt(s))
if(b)return t
return J.af(t)},
jv:function(a,b,c){var t=J.bE(b)
if(!t.q())return a
if(c.length===0){do a+=H.e(t.gt(t))
while(t.q())}else{a+=H.e(t.gt(t))
for(;t.q();)a=a+c+H.e(t.gt(t))}return a},
l2:function(a,b){return J.kq(a,b)},
l3:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
l4:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bM:function(a){if(a>=10)return""+a
return"0"+a},
l5:function(a,b,c,d,e,f){return new P.ar(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
bS:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bF(a)
if(typeof a==="string")return JSON.stringify(a)
return P.l7(a)},
kY:function(a){return new P.bH(a)},
j2:function(a){return new P.a2(!1,null,null,a)},
id:function(a,b,c){return new P.a2(!0,a,b,c)},
kX:function(a){return new P.a2(!1,null,a,"Must not be null")},
f3:function(a,b,c){return new P.cb(null,null,!0,a,b,"Value not in range")},
bd:function(a,b,c,d,e){return new P.cb(b,c,!0,a,d,"Invalid value")},
jt:function(a,b,c,d,e,f){if(C.b.V(0,a)||C.b.V(a,c))throw H.c(P.bd(a,0,c,"start",f))
if(b!=null){if(a>b||C.b.V(b,c))throw H.c(P.bd(b,a,c,"end",f))
return b}return c},
y:function(a,b,c,d,e){var t=e!=null?e:J.b1(b)
return new P.eh(b,t,!0,a,c,"Index out of range")},
q:function(a){return new P.fK(a)},
jL:function(a){return new P.fI(a)},
lz:function(a){return new P.bf(a)},
aq:function(a){return new P.dq(a)},
bT:function(a){return new P.h4(a)},
a0:function(a){H.hY(H.e(a))},
aG:function aG(){},
E:function E(){},
b4:function b4(a,b){this.a=a
this.b=b},
S:function S(){},
ar:function ar(a){this.a=a},
dH:function dH(){},
dI:function dI(){},
aK:function aK(){},
bH:function bH(a){this.a=a},
ca:function ca(){},
a2:function a2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cb:function cb(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eh:function eh(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fK:function fK(a){this.a=a},
fI:function fI(a){this.a=a},
bf:function bf(a){this.a=a},
dq:function dq(a){this.a=a},
ci:function ci(){},
dz:function dz(a){this.a=a},
ih:function ih(){},
h4:function h4(a){this.a=a},
dK:function dK(a,b,c){this.a=a
this.b=b
this.$ti=c},
v:function v(){},
a4:function a4(){},
bX:function bX(){},
i:function i(){},
aO:function aO(){},
J:function J(){},
a_:function a_(){},
B:function B(){},
aQ:function aQ(){},
w:function w(){},
bg:function bg(a){this.a=a},
iz:function iz(){},
hE:function(a){var t,s,r,q,p
if(a==null)return
t=P.R()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.K)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
m_:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.iU(a,new P.hD(t))
return t},
hD:function hD(a){this.a=a},
ml:function(a){return Math.sqrt(a)},
hh:function hh(){},
hp:function hp(){},
N:function N(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){},
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
e4:function e4(){},
e7:function e7(){},
V:function V(){},
a3:function a3(){},
ef:function ef(){},
eq:function eq(){},
eA:function eA(){},
eB:function eB(){},
eQ:function eQ(){},
eX:function eX(){},
f0:function f0(){},
f1:function f1(){},
f4:function f4(){},
f5:function f5(){},
fs:function fs(){},
t:function t(){},
ft:function ft(){},
bh:function bh(){},
bi:function bi(){},
fE:function fE(){},
fM:function fM(){},
cB:function cB(){},
cC:function cC(){},
cI:function cI(){},
cJ:function cJ(){},
cS:function cS(){},
cT:function cT(){},
cY:function cY(){},
cZ:function cZ(){},
dk:function dk(){},
dl:function dl(){},
aI:function aI(){},
eR:function eR(){},
f9:function f9(){},
fa:function fa(){},
fk:function fk(){},
cO:function cO(){},
cP:function cP(){}},W={
l6:function(a){return"wheel"},
aF:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jQ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
Y:function(a,b,c,d,e){var t=c==null?null:W.jV(new W.h3(c))
t=new W.h2(0,a,b,t,!1,[e])
t.d8(a,b,c,!1,e)
return t},
jV:function(a){var t=$.z
if(t===C.f)return a
return t.dE(a)},
h:function h(){},
bG:function bG(){},
dg:function dg(){},
dh:function dh(){},
di:function di(){},
bI:function bI(){},
bJ:function bJ(){},
bK:function bK(){},
ao:function ao(){},
dr:function dr(){},
ds:function ds(){},
dt:function dt(){},
du:function du(){},
b3:function b3(){},
dv:function dv(){},
U:function U(){},
aJ:function aJ(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
dA:function dA(){},
dB:function dB(){},
b5:function b5(){},
dC:function dC(){},
dD:function dD(){},
bN:function bN(){},
dE:function dE(){},
bO:function bO(){},
bP:function bP(){},
bQ:function bQ(){},
dF:function dF(){},
dG:function dG(){},
bR:function bR(){},
f:function f(){},
d:function d(){},
e2:function e2(){},
e3:function e3(){},
e8:function e8(){},
ec:function ec(){},
ed:function ed(){},
b6:function b6(){},
bW:function bW(){},
ee:function ee(){},
b7:function b7(){},
av:function av(){},
ev:function ev(){},
ew:function ew(){},
eC:function eC(){},
eE:function eE(){},
ba:function ba(){},
eF:function eF(){},
I:function I(){},
x:function x(){},
c9:function c9(){},
a6:function a6(){},
f_:function f_(){},
f2:function f2(){},
ce:function ce(){},
fc:function fc(){},
ag:function ag(){},
fh:function fh(){},
fj:function fj(){},
a7:function a7(){},
fm:function fm(){},
fn:function fn(a){this.a=a},
fv:function fv(){},
fw:function fw(){},
fy:function fy(){},
az:function az(){},
fC:function fC(){},
fD:function fD(){},
aA:function aA(){},
fL:function fL(){},
fN:function fN(){},
fO:function fO(){},
fP:function fP(){},
aC:function aC(){},
bk:function bk(){},
fQ:function fQ(a){this.a=a},
iA:function iA(){},
fY:function fY(){},
fZ:function fZ(){},
he:function he(){},
cF:function cF(){},
hu:function hu(){},
hv:function hv(){},
h1:function h1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iD:function iD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
h2:function h2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
h3:function h3(a){this.a=a},
n:function n(){},
e5:function e5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cr:function cr(){},
cs:function cs(){},
ct:function ct(){},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
cx:function cx(){},
cz:function cz(){},
cA:function cA(){},
cD:function cD(){},
cE:function cE(){},
cG:function cG(){},
cH:function cH(){},
cK:function cK(){},
cL:function cL(){},
br:function br(){},
bs:function bs(){},
cM:function cM(){},
cN:function cN(){},
cR:function cR(){},
cU:function cU(){},
cV:function cV(){},
bt:function bt(){},
bu:function bu(){},
cW:function cW(){},
cX:function cX(){},
d_:function d_(){},
d0:function d0(){},
d1:function d1(){},
d2:function d2(){},
d3:function d3(){},
d4:function d4(){},
d5:function d5(){},
d6:function d6(){},
d7:function d7(){},
d8:function d8(){}},B={
mj:function(a){var t,s
t=document
s=W.av
W.Y(t,"keydown",new B.i_(),!1,s)
W.Y(t,"keyup",new B.i0(),!1,s)
if(!$.mk)W.Y(t,"mousemove",new B.i1(),!1,W.I)
s=W.I
W.Y(t,"mousedown",new B.i2(),!1,s)
W.Y(t,"mouseup",new B.i3(),!1,s)},
ll:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$hF()
r=$.$get$bA()
q=new T.D(new Float32Array(16))
q.E()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.eS(a,b,c,0,new T.m(t),-0.02,s,r,q,new T.m(p),new T.m(o),new T.m(n),new T.m(new Float32Array(3)),"camera:orbit",!1,!0)
t.d_(a,b,c,d)
return t},
i_:function i_(){},
i0:function i0(){},
i1:function i1(){},
i2:function i2(){},
i3:function i3(){},
eS:function eS(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
eT:function eT(a){this.a=a},
eU:function eU(a){this.a=a},
eV:function eV(){},
eW:function eW(a){this.a=a},
lb:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=[]
s=[]
C.a.aS(t,$.$get$jf())
C.a.aS(s,$.$get$jg())
for(r=0;r<a3;++r,t=q){q=[]
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.K)(t),++o){n=t[o]
m=J.k(n)
l=C.a.h(s,m.gN(n))
k=new T.m(new Float32Array(3))
k.D(l)
k.l(0,C.a.h(s,m.gP(n)))
k.M(0,0.5)
k.B(0)
l=C.a.h(s,m.gP(n))
j=new T.m(new Float32Array(3))
j.D(l)
j.l(0,C.a.h(s,m.gR(n)))
j.M(0,0.5)
j.B(0)
l=C.a.h(s,m.gR(n))
i=new T.m(new Float32Array(3))
i.D(l)
i.l(0,C.a.h(s,m.gN(n)))
i.M(0,0.5)
i.B(0)
h=s.length
C.a.l(s,k)
g=s.length
C.a.l(s,j)
f=s.length
C.a.l(s,i)
C.a.l(q,new G.ae(m.gN(n),h,f))
C.a.l(q,new G.ae(m.gP(n),g,h))
C.a.l(q,new G.ae(m.gR(n),f,g))
C.a.l(q,new G.ae(h,g,f))}}e=new G.eb(!1,[],[],[],P.R())
e.bd("aTexUV")
e.bd("aNormal")
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.K)(t),++o){n=t[o]
m=J.k(n)
d=C.a.h(s,m.gN(n))
H.b(Math.sqrt(d.gT())<1.01&&Math.sqrt(d.gT())>0.99)
c=C.a.h(s,m.gP(n))
H.b(Math.sqrt(c.gT())<1.01&&Math.sqrt(c.gT())>0.99)
b=C.a.h(s,m.gR(n))
H.b(Math.sqrt(b.gT())<1.01&&Math.sqrt(b.gT())>0.99)
m=d.a
l=Math.atan2(m[2],m[0])
m=Math.acos(m[1])
a=new Float32Array(2)
a[0]=0.5*(1+l*0.3183098861837907)
a[1]=m*0.3183098861837907
m=c.a
l=Math.atan2(m[2],m[0])
m=Math.acos(m[1])
a0=new Float32Array(2)
a0[0]=0.5*(1+l*0.3183098861837907)
a0[1]=m*0.3183098861837907
m=b.a
l=Math.atan2(m[2],m[0])
m=Math.acos(m[1])
a1=new Float32Array(2)
a1[0]=0.5*(1+l*0.3183098861837907)
a1[1]=m*0.3183098861837907
e.cP("aNormal",[d,c,b])
m=new T.m(new Float32Array(3))
m.D(d)
m.M(0,a4)
l=new T.m(new Float32Array(3))
l.D(c)
l.M(0,a4)
a2=new T.m(new Float32Array(3))
a2.D(b)
a2.M(0,a4)
e.cQ([m,l,a2])
e.cO("aTexUV",[new T.X(a),new T.X(a0),new T.X(a1)])}return e}},G={
lD:function(a){var t,s,r
t=H.G(a.split("\n"),[P.w])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.e(t[s])}return C.a.ah(t,"\n")},
jN:function(a,b,c){var t,s,r,q
t=J.k(a)
s=t.bO(a,b)
t.b6(a,s,c)
t.bK(a,s)
r=t.b3(a,s,35713)
if(r!=null&&!r){q=t.b2(a,s)
P.a0("E:Compilation failed:")
P.a0("E:"+G.lD(c))
P.a0("E:Failure:")
P.a0(C.i.a0("E:",q))
throw H.c(q)}return s},
C:function(a,b,c){return new G.ae(a,b,c)},
jw:function(a,b,c){return new G.cm(a,b,c)},
it:function(a){var t=new G.c2(P.R(),a,!1,!0)
t.cZ(a)
return t},
je:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.ia(a[s])
b[t+1]=J.ib(a[s])
b[t+2]=J.iV(a[s])}return b},
l9:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.ia(a[s])
b[t+1]=J.ib(a[s])}return b},
la:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.ia(a[s])
b[t+1]=J.ib(a[s])
b[t+2]=J.iV(a[s])
b[t+3]=J.kD(a[s])}return b},
l8:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.b_(a[s],0)
b[t+1]=J.b_(a[s],1)
b[t+2]=J.b_(a[s],2)
b[t+3]=J.b_(a[s],3)}return b},
jo:function(a,b,c,d){return new G.eD(b,J.kt(b.a),c,P.R(),d,null,0,-1,null,null,P.R(),"meshdata:"+a,!1,!0)},
lJ:function(a,b){var t,s,r,q,p,o,n,m,l,k
for(t=a.e,s=t.gJ(t),s=s.gA(s),r=b.x,q=[[P.i,P.v]],p=[P.S],o=[T.ai],n=[T.m],m=[T.X];s.q();){l=s.gt(s)
if(!r.G(0,l)){l="Dropping unnecessary attribute: "+H.e(l)
if($.k0>0)H.hY("I: "+l)
continue}k=t.h(0,l)
switch($.$get$P().h(0,l).a){case"vec2":b.a8(l,G.l9(H.dd(k,"$isi",m,"$asi"),null),2)
break
case"vec3":b.a8(l,G.je(H.dd(k,"$isi",n,"$asi"),null),3)
break
case"vec4":b.a8(l,G.la(H.dd(k,"$isi",o,"$asi"),null),4)
break
case"float":b.a8(l,new Float32Array(H.hy(H.dd(k,"$isi",p,"$asi"))),1)
break
case"uvec4":b.a8(l,G.l8(H.dd(k,"$isi",q,"$asi"),null),4)
break
default:if(H.ac(!1))H.aj("unknown type for "+H.e(l)+" ["+J.kC(k[0]).k(0)+"] ["+new H.ah(H.hK(k),null).k(0)+"] "+H.e(k))}}},
ju:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.bZ(null,null,null,P.w)
s=c.b
r=d.b
q=c.f
p=J.kr(b.a)
o=G.jN(b.a,35633,s)
J.iS(b.a,p,o)
n=G.jN(b.a,35632,r)
J.iS(b.a,p,n)
if(q.length>0)J.kP(b.a,p,q,35980)
J.kI(b.a,p)
if(!J.kH(b.a,p,35714))H.H(J.kG(b.a,p))
t=new G.f8(b,c,d,p,P.lk(c.c,null),P.R(),P.R(),t,null,a,!1,!0)
t.d1(a,b,c,d)
return t},
fg:function(a){return new G.ff(a,null,[],[],[],[],0,P.R())},
eG:function eG(){},
cp:function cp(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dm:function dm(){},
dp:function dp(a,b){this.a=a
this.b=b},
e9:function e9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ae:function ae(a,b,c){this.a=a
this.b=b
this.c=c},
eb:function eb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cn:function cn(a,b,c){this.a=a
this.b=b
this.c=c},
cm:function cm(a,b,c){this.a=a
this.b=b
this.c=c},
c2:function c2(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eD:function eD(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
eY:function eY(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
f8:function f8(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
u:function u(a,b,c){this.a=a
this.b=b
this.c=c},
ff:function ff(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fi:function fi(){},
fx:function fx(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bj:function bj(){},
eg:function eg(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={
lC:function(a,b,c){var t,s,r,q
t="stars_"+b
s=b*3
r=new Float32Array(s)
for(q=0;q<s;++q)r[q]=($.$get$jM().e9()-0.5)*c
s=G.jo(t,a.d,0,a.e.x)
s.bb(r)
return s},
cd:function cd(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.db=a
_.dx=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i
_.Q=j
_.a=k
_.b=l
_.c=m}},A={
k_:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.D(c)
s=b.d
t.c1(0,s)
r=b.cx
H.e(b)
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
p.dJ(new T.W(o))
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
a.cU(r,e,d)
e.pop()
for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.K)(s),++l)A.k_(a,s[l],t,d,e)},
ax:function ax(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
be:function be(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
f7:function f7(){},
db:function(a){var t,s
t=C.K.dW(a,0,new A.hL())
s=536870911&t+(C.b.ct(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
hL:function hL(){}},T={
O:function(a,b,c){var t=new T.m(new Float32Array(3))
t.a1(a,b,c)
return t},
W:function W(a){this.a=a},
D:function D(a){this.a=a},
X:function X(a){this.a=a},
m:function m(a){this.a=a},
ai:function ai(a){this.a=a}},V={
md:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
t={}
s=document
r=C.B.eb(s,"#webgl-canvas")
q=new G.dp(null,r)
p=(r&&C.q).aZ(r,"webgl2",P.aw(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
q.a=p
if(p==null)H.H(P.bT('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+H.e(J.kE(p))
if($.k0>0)P.a0("I: "+o)
J.kp(p,0,0,0,1)
J.df(p,2929)
n=B.ll(15,0,0,r)
p=new T.D(new Float32Array(16))
p.E()
o=new T.D(new Float32Array(16))
o.E()
m=new G.eY(n,50,1,0.1,1000,p,o,new T.D(new Float32Array(16)),P.R(),"perspective",!1,!0)
m.bg()
p=G.ju("solid",q,$.$get$ke(),$.$get$kd())
o=[]
l=B.lb(4,1,!0)
k=G.jo("icosahedron-4",p.d,4,p.e.x)
k.bb(G.je(l.d,null))
j=l.cV()
i=k.d
k.y=J.i8(i.a)
H.b(k.ch!=null)
h=k.ch.length
if(h<768){k.saI(new Uint8Array(H.hy(j)))
k.Q=5121}else if(h<196608){k.saI(new Uint16Array(H.hy(j)))
k.Q=5123}else{k.saI(new Uint32Array(H.hy(j)))
k.Q=5125}J.de(i.a,k.e)
j=k.y
h=k.cx
g=J.r(h)
H.b(!!g.$isjI||!!g.$isjJ||!!g.$isjK)
J.i7(i.a,34963,j)
J.iT(i.a,34963,h,35048)
G.lJ(l,k)
f=G.it("head")
j=new T.m(new Float32Array(3))
j.a1(0.94,0.72,0.63)
f.F("uColor",j)
j=[]
i=new Float32Array(9)
h=new T.D(new Float32Array(16))
h.E()
g=new T.D(new Float32Array(16))
g.E()
e=new Float32Array(3)
d=new Float32Array(3)
c=new Float32Array(3)
b=new Float32Array(3)
a=G.it("eye")
a.F("uColor",$.$get$jb())
a0=new Float32Array(9)
a1=new T.D(new Float32Array(16))
a1.E()
a2=new T.D(new Float32Array(16))
a2.E()
a3=new Float32Array(3)
a4=new Float32Array(3)
a5=new Float32Array(3)
a6=new A.ax(a,k,[],new T.W(a0),a1,a2,new T.m(a3),new T.m(a4),new T.m(a5),new T.m(new Float32Array(3)),"leftEye",!1,!0)
a6.al(-0.2,0.4,-0.8)
a2.M(0,0.2)
C.a.l(j,a6)
a0=new Float32Array(9)
a1=new T.D(new Float32Array(16))
a1.E()
a2=new T.D(new Float32Array(16))
a2.E()
a3=new Float32Array(3)
a4=new Float32Array(3)
a5=new Float32Array(3)
a7=new A.ax(a,k,[],new T.W(a0),a1,a2,new T.m(a3),new T.m(a4),new T.m(a5),new T.m(new Float32Array(3)),"rightEye",!1,!0)
a2.M(0,0.2)
a7.al(0.2,0.4,-0.8)
C.a.l(j,a7)
a8=G.it("nose")
a0=new T.m(new Float32Array(3))
a0.a1(0.9,0.7,0.6)
a8.F("uColor",a0)
a0=new Float32Array(9)
a1=new T.D(new Float32Array(16))
a1.E()
a2=new T.D(new Float32Array(16))
a2.E()
a3=new Float32Array(3)
a4=new Float32Array(3)
a5=new Float32Array(3)
a9=new A.ax(a8,k,[],new T.W(a0),a1,a2,new T.m(a3),new T.m(a4),new T.m(a5),new T.m(new Float32Array(3)),"nose",!1,!0)
a2.M(0,0.3)
a9.al(0,0,-0.9)
C.a.l(j,a9)
H.b(!0)
C.a.l(o,new A.ax(f,k,j,new T.W(i),h,g,new T.m(e),new T.m(d),new T.m(c),new T.m(b),"head",!1,!0))
j=H.G([],[A.be])
b0=new R.cd(r,m,null,q,j,17664,0,0,0,0,"main",!1,!0)
b0.d0("main",q,null)
b0.c4(null)
W.Y(window,"resize",b0.gee(),!1,W.f)
H.b(!0)
C.a.l(j,new A.be(p,[m],o,"objects",!1,!0))
o=G.ju("stars",q,$.$get$ka(),$.$get$k9())
p=[]
i=o.d
h=$.$get$j3()
b1=new G.c2(P.R(),"stars",!1,!0)
b1.F("cDepthTest",!0)
b1.F("cDepthWrite",!1)
b1.F("cBlendEquation",h)
b1.F("cStencilFunc",$.$get$iv())
b2=s.createElement("canvas")
b2.width=64
b2.height=64
b3=C.q.cv(b2,"2d")
b4=(b3&&C.o).bN(b3,32,32,1,32,32,22);(b4&&C.m).at(b4,0,"gray")
C.m.at(b4,1,"black")
b3.fillStyle=b4
C.o.dU(b3,0,0,64,64)
b4=C.o.bN(b3,32,32,1,32,32,6);(b4&&C.m).at(b4,0,"white")
C.m.at(b4,1,"gray")
b3.globalAlpha=0.9
b3.fillStyle=b4
b3.arc(32,32,4,0,6.283185307179586,!1)
b3.fill("nonzero")
s=new G.fx(!1,!1,!1,!0,1,9729,9729)
h=J.ks(i.a)
g=new G.eg(b2,"Utils::Particles",h,3553,i,s)
J.bD(i.a,3553,h)
J.kK(i.a,37440,1)
g.d3(b2)
s.cX(i,3553)
H.b(J.kF(i.a)===0)
J.bD(i.a,3553,null)
b1.F("uTexture",g)
b1.F("uPointSize",1000)
k=R.lC(o,2000,100)
s=new Float32Array(9)
i=new T.D(new Float32Array(16))
i.E()
h=new T.D(new Float32Array(16))
h.E()
g=new Float32Array(3)
e=new Float32Array(3)
d=new Float32Array(3)
c=new Float32Array(3)
H.b(!0)
C.a.l(p,new A.ax(b1,k,[],new T.W(s),i,h,new T.m(g),new T.m(e),new T.m(d),new T.m(c),k.a,!1,!0))
H.b(!0)
C.a.l(j,new A.be(o,[m],p,"stars",!1,!0))
t.a=0
new V.hW(t,n,b0).$1(0)},
hW:function hW(a,b,c){this.a=a
this.b=b
this.c=c}}
var v=[C,H,J,P,W,B,G,R,A,T,V]
setFunctionNamesIfNecessary(v)
var $={}
H.il.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gu:function(a){return H.ay(a)},
k:function(a){return"Instance of '"+H.bc(a)+"'"},
gw:function(a){return new H.ah(H.hK(a),null)}}
J.el.prototype={
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gw:function(a){return C.ae},
$isaG:1}
J.en.prototype={
v:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
gw:function(a){return C.a8},
$isJ:1}
J.b8.prototype={
gu:function(a){return 0},
gw:function(a){return C.a7},
k:function(a){return String(a)},
$isjk:1}
J.eZ.prototype={}
J.aB.prototype={}
J.au.prototype={
k:function(a){var t=a[$.$get$jc()]
return t==null?this.cM(a):J.bF(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isii:1}
J.as.prototype={
l:function(a,b){if(!!a.fixed$length)H.H(P.q("add"))
a.push(b)},
aS:function(a,b){var t,s,r,q,p
t=a.length
if(!!a.fixed$length)H.H(P.q("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.K)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.H(P.aq(a)))
a.push(q)}},
c0:function(a,b){return new H.c1(a,b,[H.aY(a,0),null])},
ah:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.e(a[s])
return t.join(b)},
p:function(a,b){return this.h(a,b)},
gdV:function(a){if(a.length>0)return a[0]
throw H.c(H.ij())},
gax:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.ij())},
b5:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.H(P.q("setRange"))
P.jt(b,c,a.length,null,null,null)
t=C.b.a2(c,b)
if(t===0)return
if(e<0)H.H(P.bd(e,0,null,"skipCount",null))
s=J.T(d)
if(C.b.V(e+t,s.gj(d)))throw H.c(H.lj())
if(C.b.a_(e,b))for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
cH:function(a,b){if(!!a.immutable$list)H.H(P.q("sort"))
H.ly(a,P.m0())},
b7:function(a){return this.cH(a,null)},
ac:function(a,b){var t
for(t=0;t<a.length;++t)if(J.A(a[t],b))return!0
return!1},
k:function(a){return P.ek(a,"[","]")},
gA:function(a){return new J.dj(a,a.length,0,null,[H.aY(a,0)])},
gu:function(a){return H.ay(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.H(P.q("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.id(b,"newLength",null))
if(b<0)throw H.c(P.bd(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aW(a,b))
if(b>=a.length||b<0)throw H.c(H.aW(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.H(P.q("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aW(a,b))
if(b>=a.length||b<0)throw H.c(H.aW(a,b))
a[b]=c},
$iso:1,
$aso:function(){},
$isj:1,
$isi:1}
J.ik.prototype={}
J.dj.prototype={
gt:function(a){return this.d},
q:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.K(t))
r=this.c
if(r>=s){this.sbh(null)
return!1}this.sbh(t[r]);++this.c
return!0},
sbh:function(a){this.d=a}}
J.aM.prototype={
S:function(a,b){var t
if(typeof b!=="number")throw H.c(H.M(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaV(b)
if(this.gaV(a)===t)return 0
if(this.gaV(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaV:function(a){return a===0?1/a<0:a<0},
a5:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.q(""+a+".round()"))},
dG:function(a,b,c){if(this.S(b,c)>0)throw H.c(H.M(b))
if(this.S(a,b)<0)return b
if(this.S(a,c)>0)return c
return a},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
a0:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a+b},
a2:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a-b},
cu:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a/b},
H:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a*b},
aA:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bx(a,b)},
L:function(a,b){return(a|0)===a?a/b|0:this.bx(a,b)},
bx:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.q("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
aO:function(a,b){var t
if(a>0)t=this.dv(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
dv:function(a,b){return b>31?0:a>>>b},
ct:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return(a&b)>>>0},
cN:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return(a^b)>>>0},
a_:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a<b},
V:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a>b},
aY:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a>=b},
gw:function(a){return C.ah},
$isE:1,
$asE:function(){return[P.a_]},
$isS:1,
$isa_:1}
J.bY.prototype={
gw:function(a){return C.ag},
$isv:1}
J.em.prototype={
gw:function(a){return C.af}}
J.at.prototype={
aC:function(a,b){if(b>=a.length)throw H.c(H.aW(a,b))
return a.charCodeAt(b)},
a0:function(a,b){if(typeof b!=="string")throw H.c(P.id(b,null,null))
return a+b},
cJ:function(a,b,c){var t
if(c>a.length)throw H.c(P.bd(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
cI:function(a,b){return this.cJ(a,b,0)},
b9:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.f3(b,null,null))
if(b>c)throw H.c(P.f3(b,null,null))
if(c>a.length)throw H.c(P.f3(c,null,null))
return a.substring(b,c)},
cK:function(a,b){return this.b9(a,b,null)},
S:function(a,b){var t
if(typeof b!=="string")throw H.c(H.M(b))
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
gw:function(a){return C.a9},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.aW(a,b))
return a[b]},
$iso:1,
$aso:function(){},
$isE:1,
$asE:function(){return[P.w]},
$isw:1}
H.j.prototype={}
H.aN.prototype={
gA:function(a){return new H.c_(this,this.gj(this),0,null,[H.ak(this,"aN",0)])},
ej:function(a,b){var t,s
t=H.G([],[H.ak(this,"aN",0)])
C.a.sj(t,this.gj(this))
for(s=0;C.b.a_(s,this.gj(this));++s)t[s]=this.p(0,s)
return t},
ei:function(a){return this.ej(a,!0)}}
H.c_.prototype={
gt:function(a){return this.d},
q:function(){var t,s,r,q
t=this.a
s=J.T(t)
r=s.gj(t)
q=this.b
if(q==null?r!=null:q!==r)throw H.c(P.aq(t))
if(C.b.aY(this.c,r)){this.saa(null)
return!1}this.saa(s.p(t,this.c));++this.c
return!0},
saa:function(a){this.d=a}}
H.c0.prototype={
gA:function(a){return new H.ez(null,J.bE(this.a),this.b,this.$ti)},
gj:function(a){return J.b1(this.a)},
$asa4:function(a,b){return[b]}}
H.dJ.prototype={$isj:1,
$asj:function(a,b){return[b]}}
H.ez.prototype={
q:function(){var t=this.b
if(t.q()){this.saa(this.c.$1(t.gt(t)))
return!0}this.saa(null)
return!1},
gt:function(a){return this.a},
saa:function(a){this.a=a},
$asbX:function(a,b){return[b]}}
H.c1.prototype={
gj:function(a){return J.b1(this.a)},
p:function(a,b){return this.b.$1(J.kz(this.a,b))},
$asj:function(a,b){return[b]},
$asaN:function(a,b){return[b]},
$asa4:function(a,b){return[b]}}
H.aL.prototype={}
H.i4.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.i5.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hn.prototype={
se4:function(a){this.z=a},
se7:function(a){this.ch=a}}
H.aR.prototype={
d9:function(){var t,s
t=this.e
s=t.a
this.c.l(0,s)
this.dd(s,t)},
bA:function(a,b){if(!this.f.v(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aR()},
ed:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.ai(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.br();++r.d}this.y=!1}this.aR()},
dA:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.r(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
ec:function(a){var t,s,r
if(this.ch==null)return
for(t=J.r(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.H(P.q("removeRange"))
P.jt(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cG:function(a,b){if(!this.r.v(0,a))return
this.db=b},
dZ:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.I(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.ir(null,null)
this.cx=t}t.W(0,new H.hg(a,c))},
dY:function(a,b){var t
if(!this.r.v(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aw()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.ir(null,null)
this.cx=t}t.W(0,this.ge5())},
e_:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.a0(a)
if(b!=null)P.a0(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bF(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bm(t,t.r,null,null,[null]),r.c=t.e;r.q();)r.d.I(0,s)},
ae:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.ad(o)
p=H.al(o)
this.e_(q,p)
if(this.db){this.aw()
if(this===u.globalState.e)throw o}}finally{this.cy=H.lX(r)
u.globalState.d=H.k4(t,"$isaR")
if(t!=null)$=t.ge3()
if(this.cx!=null)for(;n=this.cx,!n.gav(n);)this.cx.c3().$0()}return s},
c_:function(a){return this.b.h(0,a)},
dd:function(a,b){var t=this.b
if(t.G(0,a))throw H.c(P.bT("Registry: ports must be registered only once."))
t.i(0,a,b)},
aR:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.aw()},
aw:function(){var t,s,r
t=this.cx
if(t!=null)t.X(0)
for(t=this.b,s=t.gcp(t),s=s.gA(s);s.q();)s.gt(s).de()
t.X(0)
this.c.X(0)
u.globalState.z.ai(0,this.a)
this.dx.X(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].I(0,t[r+1])
this.ch=null}},
ge3:function(){return this.d},
gdI:function(){return this.e}}
H.hg.prototype={
$0:function(){this.a.I(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.h_.prototype={
dM:function(){var t=this.a
if(t.b===t.c)return
return t.c3()},
c6:function(){var t,s,r
t=this.dM()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.G(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gav(s)}else s=!1
else s=!1
else s=!1
if(s)H.H(P.bT("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gav(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aw(["command","close"])
r=new H.Z(!0,P.aS(null,P.v)).K(r)
s.toString
self.postMessage(r)}return!1}t.ea()
return!0},
bv:function(){if(self.window!=null)new H.h0(this).$0()
else for(;this.c6(););},
aj:function(){var t,s,r,q,p
if(!u.globalState.x)this.bv()
else try{this.bv()}catch(r){t=H.ad(r)
s=H.al(r)
q=u.globalState.Q
p=P.aw(["command","error","msg",H.e(t)+"\n"+H.e(s)])
p=new H.Z(!0,P.aS(null,P.v)).K(p)
q.toString
self.postMessage(p)}}}
H.h0.prototype={
$0:function(){if(!this.a.c6())return
P.lB(C.r,this)},
$S:function(){return{func:1,v:true}}}
H.aE.prototype={
ea:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.ae(this.b)}}
H.hm.prototype={}
H.ei.prototype={
$0:function(){H.lf(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.ej.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.aX(s,{func:1,args:[P.J,P.J]}))s.$2(this.e,this.d)
else if(H.aX(s,{func:1,args:[P.J]}))s.$1(this.e)
else s.$0()}t.aR()},
$S:function(){return{func:1,v:true}}}
H.fW.prototype={}
H.aT.prototype={
I:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.lL(b)
if(t.gdI()===s){s=J.T(r)
switch(s.h(r,0)){case"pause":t.bA(s.h(r,1),s.h(r,2))
break
case"resume":t.ed(s.h(r,1))
break
case"add-ondone":t.dA(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.ec(s.h(r,1))
break
case"set-errors-fatal":t.cG(s.h(r,1),s.h(r,2))
break
case"ping":t.dZ(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.dY(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ai(0,s)
break}return}u.globalState.f.a.W(0,new H.aE(t,new H.ho(this,r),"receive"))},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aT){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.ho.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.da(0,this.b)},
$S:function(){return{func:1}}}
H.bv.prototype={
I:function(a,b){var t,s,r
t=P.aw(["command","message","port",this,"msg",b])
s=new H.Z(!0,P.aS(null,P.v)).K(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bv){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.cN((this.b<<16^this.a<<8)>>>0,this.c)}}
H.cc.prototype={
de:function(){this.c=!0
this.b=null},
da:function(a,b){if(this.c)return
this.b.$1(b)},
$islt:1}
H.fz.prototype={
d4:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.W(0,new H.aE(s,new H.fA(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.hH()
this.c=self.setTimeout(H.bz(new H.fB(this,b),0),a)}else{H.b(a>0)
throw H.c(P.q("Timer greater than 0."))}}}
H.fA.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.fB.prototype={
$0:function(){var t=this.a
t.c=null
H.hV()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.an.prototype={
gu:function(a){var t=this.a
t=C.b.aO(t,0)^C.b.L(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
v:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.an){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.Z.prototype={
K:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.r(a)
if(!!t.$isbb)return["buffer",a]
if(!!t.$isaP)return["typed",a]
if(!!t.$iso)return this.cC(a)
if(!!t.$islc){r=this.gcz()
q=t.gJ(a)
q=H.is(q,r,H.ak(q,"a4",0),null)
q=P.jm(q,!0,H.ak(q,"a4",0))
t=t.gcp(a)
t=H.is(t,r,H.ak(t,"a4",0),null)
return["map",q,P.jm(t,!0,H.ak(t,"a4",0))]}if(!!t.$isjk)return this.cD(a)
if(!!t.$isa)this.cn(a)
if(!!t.$islt)this.ak(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isaT)return this.cE(a)
if(!!t.$isbv)return this.cF(a)
if(!!t.$isap){p=a.$static_name
if(p==null)this.ak(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isan)return["capability",a.a]
if(!(a instanceof P.B))this.cn(a)
return["dart",u.classIdExtractor(a),this.cB(u.classFieldsExtractor(a))]},
ak:function(a,b){throw H.c(P.q((b==null?"Can't transmit:":b)+" "+H.e(a)))},
cn:function(a){return this.ak(a,null)},
cC:function(a){var t
H.b(typeof a!=="string")
t=this.cA(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ak(a,"Can't serialize indexable: ")},
cA:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.K(a[s])
return t},
cB:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.K(a[t]))
return a},
cD:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ak(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.K(a[t[r]])
return["js-object",t,s]},
cF:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cE:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aD.prototype={
Y:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.j2("Bad serialized message: "+H.e(a)))
switch(C.a.gdV(a)){case"ref":H.b(J.A(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.A(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.b(J.A(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.b(J.A(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
return J.af(H.G(this.ad(t),[null]))
case"extendable":H.b(J.A(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.G(this.ad(t),[null])
case"mutable":H.b(J.A(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.ad(t)
case"const":H.b(J.A(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
return J.af(H.G(this.ad(t),[null]))
case"map":return this.dP(a)
case"sendport":return this.dQ(a)
case"raw sendport":H.b(J.A(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.dO(a)
case"function":H.b(J.A(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.b(J.A(a[0],"capability"))
return new H.an(a[1])
case"dart":H.b(J.A(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.l(this.b,q)
this.ad(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.e(a))}},
ad:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.Y(a[t]))
return a},
dP:function(a){var t,s,r,q,p
H.b(J.A(a[0],"map"))
t=a[1]
s=a[2]
r=P.R()
C.a.l(this.b,r)
t=J.kJ(t,this.gdN()).ei(0)
for(q=J.T(s),p=0;p<t.length;++p)r.i(0,t[p],this.Y(q.h(s,p)))
return r},
dQ:function(a){var t,s,r,q,p,o,n
H.b(J.A(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.c_(r)
if(o==null)return
n=new H.aT(o,s)}else n=new H.bv(t,r,s)
C.a.l(this.b,n)
return n},
dO:function(a){var t,s,r,q,p,o
H.b(J.A(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.T(t),p=J.T(s),o=0;C.b.a_(o,q.gj(t));++o)r[q.h(t,o)]=this.Y(p.h(s,o))
return r}}
H.f6.prototype={}
H.fF.prototype={
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
H.eP.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.e(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.ep.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.e(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.e(this.a)+")"}}
H.fJ.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.i6.prototype={
$1:function(a){if(!!J.r(a).$isaK)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.cQ.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isaQ:1}
H.hQ.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.hR.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.hS.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.hT.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.hU.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.ap.prototype={
k:function(a){return"Closure '"+H.bc(this).trim()+"'"},
$isii:1,
gem:function(){return this},
$D:null}
H.fu.prototype={}
H.fl.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.b2.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.b2))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.ay(this.a)
else s=typeof t!=="object"?J.b0(t):H.ay(t)
return(s^H.ay(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bc(t)+"'")}}
H.fH.prototype={
k:function(a){return this.a}}
H.dn.prototype={
k:function(a){return this.a}}
H.fb.prototype={
k:function(a){return"RuntimeError: "+H.e(this.a)}}
H.fR.prototype={
k:function(a){return C.i.a0("Assertion failed: ",P.bS(this.a))}}
H.ah.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.b0(this.a)},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.ah){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.a5.prototype={
gj:function(a){return this.a},
gav:function(a){return this.a===0},
gJ:function(a){return new H.es(this,[H.aY(this,0)])},
gcp:function(a){return H.is(this.gJ(this),new H.eo(this),H.aY(this,0),H.aY(this,1))},
G:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bo(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bo(s,b)}else return this.e0(b)},
e0:function(a){var t=this.d
if(t==null)return!1
return this.ag(this.ar(t,this.af(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ab(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ab(r,b)
return s==null?null:s.b}else return this.e1(b)},
e1:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.ar(t,this.af(a))
r=this.ag(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aK()
this.b=t}this.bj(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aK()
this.c=s}this.bj(s,b,c)}else{r=this.d
if(r==null){r=this.aK()
this.d=r}q=this.af(b)
p=this.ar(r,q)
if(p==null)this.aN(r,q,[this.aL(b,c)])
else{o=this.ag(p,b)
if(o>=0)p[o].b=c
else p.push(this.aL(b,c))}}},
ai:function(a,b){if(typeof b==="string")return this.bu(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bu(this.c,b)
else return this.e2(b)},
e2:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.ar(t,this.af(a))
r=this.ag(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.by(q)
return q.b},
X:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aJ()}},
au:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.aq(this))
t=t.c}},
bj:function(a,b,c){var t=this.ab(a,b)
if(t==null)this.aN(a,b,this.aL(b,c))
else t.b=c},
bu:function(a,b){var t
if(a==null)return
t=this.ab(a,b)
if(t==null)return
this.by(t)
this.bp(a,b)
return t.b},
aJ:function(){this.r=this.r+1&67108863},
aL:function(a,b){var t,s
t=new H.er(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.aJ()
return t},
by:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.aJ()},
af:function(a){return J.b0(a)&0x3ffffff},
ag:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.A(a[s].a,b))return s
return-1},
k:function(a){return P.jn(this)},
ab:function(a,b){return a[b]},
ar:function(a,b){return a[b]},
aN:function(a,b,c){H.b(c!=null)
a[b]=c},
bp:function(a,b){delete a[b]},
bo:function(a,b){return this.ab(a,b)!=null},
aK:function(){var t=Object.create(null)
this.aN(t,"<non-identifier-key>",t)
this.bp(t,"<non-identifier-key>")
return t},
$islc:1}
H.eo.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.er.prototype={}
H.es.prototype={
gj:function(a){return this.a.a},
gA:function(a){var t,s
t=this.a
s=new H.et(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.et.prototype={
gt:function(a){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.aq(t))
else{t=this.c
if(t==null){this.sbi(null)
return!1}else{this.sbi(t.a)
this.c=this.c.c
return!0}}},
sbi:function(a){this.d=a}}
H.hM.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.hN.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.w]}}}
H.hO.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.w]}}}
H.bb.prototype={
gw:function(a){return C.a0},
$isbb:1}
H.aP.prototype={$isaP:1}
H.eH.prototype={
gw:function(a){return C.a1}}
H.c5.prototype={
gj:function(a){return a.length},
$iso:1,
$aso:function(){},
$isp:1,
$asp:function(){}}
H.c6.prototype={
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
i:function(a,b,c){H.ab(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.S]},
$asaL:function(){return[P.S]},
$asl:function(){return[P.S]},
$isi:1,
$asi:function(){return[P.S]}}
H.c7.prototype={
i:function(a,b,c){H.ab(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.v]},
$asaL:function(){return[P.v]},
$asl:function(){return[P.v]},
$isi:1,
$asi:function(){return[P.v]}}
H.c4.prototype={
gw:function(a){return C.a2},
$ise6:1}
H.eI.prototype={
gw:function(a){return C.a3}}
H.eJ.prototype={
gw:function(a){return C.a4},
h:function(a,b){H.ab(b,a,a.length)
return a[b]}}
H.eK.prototype={
gw:function(a){return C.a5},
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
$isjh:1}
H.eL.prototype={
gw:function(a){return C.a6},
h:function(a,b){H.ab(b,a,a.length)
return a[b]}}
H.eM.prototype={
gw:function(a){return C.aa},
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
$isjI:1}
H.eN.prototype={
gw:function(a){return C.ab},
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
$isjJ:1}
H.c8.prototype={
gw:function(a){return C.ac},
gj:function(a){return a.length},
h:function(a,b){H.ab(b,a,a.length)
return a[b]}}
H.eO.prototype={
gw:function(a){return C.ad},
gj:function(a){return a.length},
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
$isjK:1}
H.bn.prototype={}
H.bo.prototype={}
H.bp.prototype={}
H.bq.prototype={}
P.fT.prototype={
$1:function(a){var t,s
H.hV()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.fS.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.hH()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.fU.prototype={
$0:function(){H.hV()
this.a.$0()},
$S:function(){return{func:1}}}
P.fV.prototype={
$0:function(){H.hV()
this.a.$0()},
$S:function(){return{func:1}}}
P.ig.prototype={}
P.fX.prototype={}
P.hw.prototype={
dH:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.lz("Future already completed"))
t.aF(b)}}
P.cy.prototype={
e8:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.aW(this.d,a.a)},
dX:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.aX(s,{func:1,args:[P.B,P.aQ]}))return t.ef(s,a.a,a.b)
else return t.aW(s,a.a)}}
P.aa.prototype={
cb:function(a,b){var t,s,r
t=$.z
if(t!==C.f){t.toString
if(b!=null)b=P.lP(b,t)}s=new P.aa(0,t,null,[null])
r=b==null?1:3
this.bk(new P.cy(null,s,r,a,b,[H.aY(this,0),null]))
return s},
ca:function(a){return this.cb(a,null)},
aB:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
bk:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.k4(this.c,"$iscy")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.bk(a)
return}this.aB(t)}H.b(this.a>=4)
t=this.b
t.toString
P.hB(null,null,t,new P.h5(this,a))}},
bt:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bt(a)
return}this.aB(s)}H.b(this.a>=4)
t.a=this.as(a)
s=this.b
s.toString
P.hB(null,null,s,new P.h9(t,this))}},
aM:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.as(t)},
as:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aF:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.hC(a,"$isea",t,"$asea")
if(s){t=H.hC(a,"$isaa",t,null)
if(t)P.jO(a,this)
else P.lI(a,this)}else{r=this.aM()
H.b(this.a<4)
this.a=4
this.c=a
P.bl(this,r)}},
ao:function(a,b){var t
H.b(this.a<4)
t=this.aM()
H.b(this.a<4)
this.a=8
this.c=new P.aH(a,b)
P.bl(this,t)},
dg:function(a){return this.ao(a,null)},
$isea:1,
gaP:function(){return this.a},
gdu:function(){return this.c}}
P.h5.prototype={
$0:function(){P.bl(this.a,this.b)},
$S:function(){return{func:1}}}
P.h9.prototype={
$0:function(){P.bl(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.h6.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.aF(a)},
$S:function(a){return{func:1,args:[,]}}}
P.h7.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.ao(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.h8.prototype={
$0:function(){this.a.ao(this.b,this.c)},
$S:function(){return{func:1}}}
P.hc.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.c5(q.d)}catch(n){s=H.ad(n)
r=H.al(n)
if(this.d){q=this.a.a
H.b(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.b(q.a===8)
p.b=q.c}else p.b=new P.aH(s,r)
p.a=!0
return}if(!!J.r(t).$isea){if(t instanceof P.aa&&t.gaP()>=4){if(t.gaP()===8){q=t
H.b(q.gaP()===8)
p=this.b
p.b=q.gdu()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.ca(new P.hd(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hd.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.hb.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.aW(r.d,this.c)}catch(q){t=H.ad(q)
s=H.al(q)
r=this.a
r.b=new P.aH(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.ha.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.e8(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.dX(t)
p.a=!1}}catch(o){s=H.ad(o)
r=H.al(o)
q=this.a
p=q.a
H.b(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.b(q.a===8)
m.b=q.c}else m.b=new P.aH(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.cq.prototype={}
P.fo.prototype={
gj:function(a){var t,s
t={}
s=new P.aa(0,$.z,null,[P.v])
t.a=0
this.e6(new P.fq(t),!0,new P.fr(t,s),s.gdf())
return s}}
P.fq.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.fr.prototype={
$0:function(){this.b.aF(this.a.a)},
$S:function(){return{func:1}}}
P.fp.prototype={}
P.iw.prototype={}
P.aH.prototype={
k:function(a){return H.e(this.a)},
$isaK:1}
P.hx.prototype={}
P.hA.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.ca()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.hq.prototype={
eg:function(a){var t,s,r
try{if(C.f===$.z){a.$0()
return}P.jR(null,null,this,a)}catch(r){t=H.ad(r)
s=H.al(r)
P.hz(null,null,this,t,s)}},
eh:function(a,b){var t,s,r
try{if(C.f===$.z){a.$1(b)
return}P.jS(null,null,this,a,b)}catch(r){t=H.ad(r)
s=H.al(r)
P.hz(null,null,this,t,s)}},
dD:function(a){return new P.hs(this,a)},
aT:function(a){return new P.hr(this,a)},
dE:function(a){return new P.ht(this,a)},
h:function(a,b){return},
c5:function(a){if($.z===C.f)return a.$0()
return P.jR(null,null,this,a)},
aW:function(a,b){if($.z===C.f)return a.$1(b)
return P.jS(null,null,this,a,b)},
ef:function(a,b,c){if($.z===C.f)return a.$2(b,c)
return P.lQ(null,null,this,a,b,c)}}
P.hs.prototype={
$0:function(){return this.a.c5(this.b)},
$S:function(){return{func:1}}}
P.hr.prototype={
$0:function(){return this.a.eg(this.b)},
$S:function(){return{func:1}}}
P.ht.prototype={
$1:function(a){return this.a.eh(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.hk.prototype={
af:function(a){return H.mf(a)&0x3ffffff},
ag:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hi.prototype={
gA:function(a){var t=new P.bm(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
ac:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dh(b)},
dh:function(a){var t=this.d
if(t==null)return!1
return this.aq(t[this.ap(a)],a)>=0},
c_:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.ac(0,a)?a:null
else return this.dr(a)},
dr:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ap(a)]
r=this.aq(s,a)
if(r<0)return
return J.b_(s,r).gdj()},
l:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.iE()
this.b=t}return this.bl(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.iE()
this.c=s}return this.bl(s,b)}else return this.W(0,b)},
W:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.iE()
this.d=t}s=this.ap(b)
r=t[s]
if(r==null){q=[this.aE(b)]
H.b(q!=null)
t[s]=q}else{if(this.aq(r,b)>=0)return!1
r.push(this.aE(b))}return!0},
ai:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bm(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bm(this.c,b)
else return this.ds(0,b)},
ds:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ap(b)]
r=this.aq(s,b)
if(r<0)return!1
this.bn(s.splice(r,1)[0])
return!0},
X:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aD()}},
bl:function(a,b){var t
if(a[b]!=null)return!1
t=this.aE(b)
H.b(!0)
a[b]=t
return!0},
bm:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bn(t)
delete a[b]
return!0},
aD:function(){this.r=this.r+1&67108863},
aE:function(a){var t,s
t=new P.hj(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.aD()
return t},
bn:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.aD()},
ap:function(a){return J.b0(a)&0x3ffffff},
aq:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.A(a[s].a,b))return s
return-1}}
P.hj.prototype={
gdj:function(){return this.a}}
P.bm.prototype={
gt:function(a){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.aq(t))
else{t=this.c
if(t==null){this.sa9(null)
return!1}else{this.sa9(t.a)
this.c=this.c.b
return!0}}},
sa9:function(a){this.d=a}}
P.hf.prototype={}
P.iq.prototype={$isj:1}
P.l.prototype={
gA:function(a){return new H.c_(a,this.gj(a),0,null,[H.ak(a,"l",0)])},
p:function(a,b){return this.h(a,b)},
c0:function(a,b){return new H.c1(a,b,[H.ak(a,"l",0),null])},
dW:function(a,b,c){var t,s,r,q
t=this.gj(a)
for(s=b,r=0;C.b.a_(r,t);++r){s=c.$2(s,this.h(a,r))
q=this.gj(a)
if(t==null?q!=null:t!==q)throw H.c(P.aq(a))}return s},
k:function(a){return P.ek(a,"[","]")}}
P.ex.prototype={}
P.ey.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.e(a)
t.a=s+": "
t.a+=H.e(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.b9.prototype={
au:function(a,b){var t,s
for(t=J.bE(this.gJ(a));t.q();){s=t.gt(t)
b.$2(s,this.h(a,s))}},
gj:function(a){return J.b1(this.gJ(a))},
k:function(a){return P.jn(a)}}
P.eu.prototype={
cY:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sbw(H.G(t,[b]))},
gA:function(a){return new P.hl(this,this.c,this.d,this.b,null,this.$ti)},
gav:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
p:function(a,b){var t=this.gj(this)
if(C.b.V(0,b)||b>=t)H.H(P.y(b,this,"index",null,t))
return this.a[(C.b.a0(this.b,b)&this.a.length-1)>>>0]},
X:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.ek(this,"{","}")},
c3:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.ij());++this.d
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
if(this.b===t)this.br();++this.d},
br:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.G(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.b5(s,0,q,t,r)
C.a.b5(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbw(s)},
sbw:function(a){this.a=a}}
P.hl.prototype={
gt:function(a){return this.e},
q:function(){var t,s
t=this.a
if(this.c!==t.d)H.H(P.aq(t))
s=this.d
if(s===this.b){this.sa9(null)
return!1}this.sa9(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sa9:function(a){this.e=a}}
P.fe.prototype={
k:function(a){return P.ek(this,"{","}")},
$isj:1}
P.fd.prototype={}
P.aG.prototype={}
P.E.prototype={}
P.b4.prototype={
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.b4))return!1
return this.a===b.a&&this.b===b.b},
S:function(a,b){return C.b.S(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aO(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.l3(H.ls(this))
s=P.bM(H.lq(this))
r=P.bM(H.lm(this))
q=P.bM(H.ln(this))
p=P.bM(H.lp(this))
o=P.bM(H.lr(this))
n=P.l4(H.lo(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isE:1,
$asE:function(){return[P.b4]}}
P.S.prototype={}
P.ar.prototype={
a_:function(a,b){return C.b.a_(this.a,b.gdi())},
V:function(a,b){return C.b.V(this.a,b.gdi())},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.ar))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
S:function(a,b){return C.b.S(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.dI()
s=this.a
if(s<0)return"-"+new P.ar(0-s).k(0)
r=t.$1(C.b.L(s,6e7)%60)
q=t.$1(C.b.L(s,1e6)%60)
p=new P.dH().$1(s%1e6)
return""+C.b.L(s,36e8)+":"+H.e(r)+":"+H.e(q)+"."+H.e(p)},
$isE:1,
$asE:function(){return[P.ar]}}
P.dH.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.w,args:[P.v]}}}
P.dI.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.w,args:[P.v]}}}
P.aK.prototype={}
P.bH.prototype={
k:function(a){return"Assertion failed"}}
P.ca.prototype={
k:function(a){return"Throw of null."}}
P.a2.prototype={
gaH:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaG:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.e(t)
q=this.gaH()+s+r
if(!this.a)return q
p=this.gaG()
o=P.bS(this.b)
return q+p+": "+H.e(o)}}
P.cb.prototype={
gaH:function(){return"RangeError"},
gaG:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.e(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.e(t)
else if(r>t)s=": Not in range "+H.e(t)+".."+H.e(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.e(t)}return s}}
P.eh.prototype={
gaH:function(){return"RangeError"},
gaG:function(){H.b(this.a)
if(J.ki(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gj:function(a){return this.f}}
P.fK.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.fI.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.bf.prototype={
k:function(a){return"Bad state: "+this.a}}
P.dq.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.bS(t))+"."}}
P.ci.prototype={
k:function(a){return"Stack Overflow"},
$isaK:1}
P.dz.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.ih.prototype={}
P.h4.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.e(t)}}
P.dK.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.H(P.id(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.jq(b,"expando$values")
return s==null?null:H.jq(s,t)},
k:function(a){return"Expando:"+H.e(this.b)}}
P.v.prototype={}
P.a4.prototype={
gj:function(a){var t,s
H.b(!this.$isj)
t=this.gA(this)
for(s=0;t.q();)++s
return s},
p:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.kX("index"))
if(b<0)H.H(P.bd(b,0,null,"index",null))
for(t=this.gA(this),s=0;t.q();){r=t.gt(t)
if(b===s)return r;++s}throw H.c(P.y(b,this,"index",null,s))},
k:function(a){return P.li(this,"(",")")}}
P.bX.prototype={}
P.i.prototype={$isj:1}
P.aO.prototype={}
P.J.prototype={
gu:function(a){return P.B.prototype.gu.call(this,this)},
k:function(a){return"null"}}
P.a_.prototype={$isE:1,
$asE:function(){return[P.a_]}}
P.B.prototype={constructor:P.B,$isB:1,
v:function(a,b){return this===b},
gu:function(a){return H.ay(this)},
k:function(a){return"Instance of '"+H.bc(this)+"'"},
gw:function(a){return new H.ah(H.hK(this),null)},
toString:function(){return this.k(this)}}
P.aQ.prototype={}
P.w.prototype={$isE:1,
$asE:function(){return[P.w]}}
P.bg.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga3:function(){return this.a}}
P.iz.prototype={}
W.h.prototype={}
W.bG.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
W.dg.prototype={
gj:function(a){return a.length}}
W.dh.prototype={
k:function(a){return String(a)}}
W.di.prototype={
k:function(a){return String(a)}}
W.bI.prototype={
aZ:function(a,b,c){if(c!=null)return this.dl(a,b,P.m_(c,null))
return this.dm(a,b)},
cv:function(a,b){return this.aZ(a,b,null)},
dl:function(a,b,c){return a.getContext(b,c)},
dm:function(a,b){return a.getContext(b)}}
W.bJ.prototype={
at:function(a,b,c){return a.addColorStop(b,c)}}
W.bK.prototype={
bN:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
dU:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
az:function(a){return P.hE(a.getContextAttributes())}}
W.ao.prototype={
gj:function(a){return a.length}}
W.dr.prototype={
gj:function(a){return a.length}}
W.ds.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.dt.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
W.du.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
W.b3.prototype={
gj:function(a){return a.length}}
W.dv.prototype={}
W.U.prototype={}
W.aJ.prototype={}
W.dw.prototype={
gj:function(a){return a.length}}
W.dx.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
W.dy.prototype={
gj:function(a){return a.length}}
W.dA.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.dB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
W.b5.prototype={
eb:function(a,b){return a.querySelector(b)}}
W.dC.prototype={
k:function(a){return String(a)}}
W.dD.prototype={
gN:function(a){return a.a},
gP:function(a){return a.b},
gR:function(a){return a.c}}
W.bN.prototype={
gN:function(a){return a.a},
gP:function(a){return a.b},
gR:function(a){return a.c}}
W.dE.prototype={
gay:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
W.bO.prototype={
gay:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
W.bP.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[P.N]},
$isj:1,
$asj:function(){return[P.N]},
$isp:1,
$asp:function(){return[P.N]},
$asl:function(){return[P.N]},
$isi:1,
$asi:function(){return[P.N]},
$asn:function(){return[P.N]}}
W.bQ.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.ga6(a))+" x "+H.e(this.ga4(a))},
v:function(a,b){var t
if(b==null)return!1
t=J.r(b)
if(!t.$isN)return!1
return a.left===t.gbY(b)&&a.top===t.gcc(b)&&this.ga6(a)===t.ga6(b)&&this.ga4(a)===t.ga4(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga6(a)
q=this.ga4(a)
return W.jQ(W.aF(W.aF(W.aF(W.aF(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga4:function(a){return a.height},
gbY:function(a){return a.left},
gcc:function(a){return a.top},
ga6:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isN:1,
$asN:function(){}}
W.dF.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[P.w]},
$isj:1,
$asj:function(){return[P.w]},
$isp:1,
$asp:function(){return[P.w]},
$asl:function(){return[P.w]},
$isi:1,
$asi:function(){return[P.w]},
$asn:function(){return[P.w]}}
W.dG.prototype={
gj:function(a){return a.length}}
W.bR.prototype={
k:function(a){return a.localName}}
W.f.prototype={$isf:1}
W.d.prototype={
dc:function(a,b,c,d){return a.addEventListener(b,H.bz(c,1),!1)}}
W.e2.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.bU]},
$isj:1,
$asj:function(){return[W.bU]},
$isp:1,
$asp:function(){return[W.bU]},
$asl:function(){return[W.bU]},
$isi:1,
$asi:function(){return[W.bU]},
$asn:function(){return[W.bU]}}
W.e3.prototype={
gj:function(a){return a.length}}
W.e8.prototype={
gj:function(a){return a.length}}
W.ec.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
W.ed.prototype={
gj:function(a){return a.length}}
W.b6.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.x]},
$isj:1,
$asj:function(){return[W.x]},
$isp:1,
$asp:function(){return[W.x]},
$asl:function(){return[W.x]},
$isi:1,
$asi:function(){return[W.x]},
$asn:function(){return[W.x]}}
W.bW.prototype={}
W.ee.prototype={
I:function(a,b){return a.send(b)}}
W.b7.prototype={}
W.av.prototype={$isav:1}
W.ev.prototype={
k:function(a){return String(a)}}
W.ew.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
W.eC.prototype={
gj:function(a){return a.length}}
W.eE.prototype={
en:function(a,b,c){return a.send(b,c)},
I:function(a,b){return a.send(b)}}
W.ba.prototype={}
W.eF.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.c3]},
$isj:1,
$asj:function(){return[W.c3]},
$isp:1,
$asp:function(){return[W.c3]},
$asl:function(){return[W.c3]},
$isi:1,
$asi:function(){return[W.c3]},
$asn:function(){return[W.c3]}}
W.I.prototype={$isI:1}
W.x.prototype={
k:function(a){var t=a.nodeValue
return t==null?this.cL(a):t}}
W.c9.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.x]},
$isj:1,
$asj:function(){return[W.x]},
$isp:1,
$asp:function(){return[W.x]},
$asl:function(){return[W.x]},
$isi:1,
$asi:function(){return[W.x]},
$asn:function(){return[W.x]}}
W.a6.prototype={
gj:function(a){return a.length}}
W.f_.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a6]},
$isj:1,
$asj:function(){return[W.a6]},
$isp:1,
$asp:function(){return[W.a6]},
$asl:function(){return[W.a6]},
$isi:1,
$asi:function(){return[W.a6]},
$asn:function(){return[W.a6]}}
W.f2.prototype={
I:function(a,b){return a.send(b)}}
W.ce.prototype={
I:function(a,b){return a.send(b)}}
W.fc.prototype={
gj:function(a){return a.length}}
W.ag.prototype={}
W.fh.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.cg]},
$isj:1,
$asj:function(){return[W.cg]},
$isp:1,
$asp:function(){return[W.cg]},
$asl:function(){return[W.cg]},
$isi:1,
$asi:function(){return[W.cg]},
$asn:function(){return[W.cg]}}
W.fj.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.ch]},
$isj:1,
$asj:function(){return[W.ch]},
$isp:1,
$asp:function(){return[W.ch]},
$asl:function(){return[W.ch]},
$isi:1,
$asi:function(){return[W.ch]},
$asn:function(){return[W.ch]}}
W.a7.prototype={
gj:function(a){return a.length}}
W.fm.prototype={
h:function(a,b){return this.bq(a,b)},
au:function(a,b){var t,s
for(t=0;!0;++t){s=this.dq(a,t)
if(s==null)return
b.$2(s,this.bq(a,s))}},
gJ:function(a){var t=H.G([],[P.w])
this.au(a,new W.fn(t))
return t},
gj:function(a){return a.length},
bq:function(a,b){return a.getItem(b)},
dq:function(a,b){return a.key(b)},
$asb9:function(){return[P.w,P.w]}}
W.fn.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.fv.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.cl]},
$isj:1,
$asj:function(){return[W.cl]},
$isp:1,
$asp:function(){return[W.cl]},
$asl:function(){return[W.cl]},
$isi:1,
$asi:function(){return[W.cl]},
$asn:function(){return[W.cl]}}
W.fw.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.ck]},
$isj:1,
$asj:function(){return[W.ck]},
$isp:1,
$asp:function(){return[W.ck]},
$asl:function(){return[W.ck]},
$isi:1,
$asi:function(){return[W.ck]},
$asn:function(){return[W.ck]}}
W.fy.prototype={
gj:function(a){return a.length}}
W.az.prototype={$isaz:1}
W.fC.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.co]},
$isj:1,
$asj:function(){return[W.co]},
$isp:1,
$asp:function(){return[W.co]},
$asl:function(){return[W.co]},
$isi:1,
$asi:function(){return[W.co]},
$asn:function(){return[W.co]}}
W.fD.prototype={
gj:function(a){return a.length}}
W.aA.prototype={}
W.fL.prototype={
k:function(a){return String(a)}}
W.fN.prototype={
gm:function(a){return a.x},
gC:function(a){return a.z}}
W.fO.prototype={
gj:function(a){return a.length}}
W.fP.prototype={
I:function(a,b){return a.send(b)}}
W.aC.prototype={
gdL:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.q("deltaY is not supported"))},
$isaC:1}
W.bk.prototype={
gdB:function(a){var t,s
t=P.a_
s=new P.aa(0,$.z,null,[t])
this.dk(a)
this.dt(a,W.jV(new W.fQ(new P.hw(s,[t]))))
return s},
dt:function(a,b){return a.requestAnimationFrame(H.bz(b,1))},
dk:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.fQ.prototype={
$1:function(a){this.a.dH(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.iA.prototype={}
W.fY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.bL]},
$isj:1,
$asj:function(){return[W.bL]},
$isp:1,
$asp:function(){return[W.bL]},
$asl:function(){return[W.bL]},
$isi:1,
$asi:function(){return[W.bL]},
$asn:function(){return[W.bL]}}
W.fZ.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
v:function(a,b){var t
if(b==null)return!1
t=J.r(b)
if(!t.$isN)return!1
return a.left===t.gbY(b)&&a.top===t.gcc(b)&&a.width===t.ga6(b)&&a.height===t.ga4(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.jQ(W.aF(W.aF(W.aF(W.aF(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga4:function(a){return a.height},
ga6:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.he.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.bV]},
$isj:1,
$asj:function(){return[W.bV]},
$isp:1,
$asp:function(){return[W.bV]},
$asl:function(){return[W.bV]},
$isi:1,
$asi:function(){return[W.bV]},
$asn:function(){return[W.bV]}}
W.cF.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.x]},
$isj:1,
$asj:function(){return[W.x]},
$isp:1,
$asp:function(){return[W.x]},
$asl:function(){return[W.x]},
$isi:1,
$asi:function(){return[W.x]},
$asn:function(){return[W.x]}}
W.hu.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a7]},
$isj:1,
$asj:function(){return[W.a7]},
$isp:1,
$asp:function(){return[W.a7]},
$asl:function(){return[W.a7]},
$isi:1,
$asi:function(){return[W.a7]},
$asn:function(){return[W.a7]}}
W.hv.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.cj]},
$isj:1,
$asj:function(){return[W.cj]},
$isp:1,
$asp:function(){return[W.cj]},
$asl:function(){return[W.cj]},
$isi:1,
$asi:function(){return[W.cj]},
$asn:function(){return[W.cj]}}
W.h1.prototype={
e6:function(a,b,c,d){return W.Y(this.a,this.b,a,!1,H.aY(this,0))}}
W.iD.prototype={}
W.h2.prototype={
d8:function(a,b,c,d,e){this.dz()},
dz:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.kj(r,this.c,t,!1)}}}
W.h3.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.n.prototype={
gA:function(a){return new W.e5(a,this.gj(a),-1,null,[H.ak(a,"n",0)])}}
W.e5.prototype={
q:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbs(J.b_(this.a,t))
this.c=t
return!0}this.sbs(null)
this.c=s
return!1},
gt:function(a){return this.d},
sbs:function(a){this.d=a}}
W.cr.prototype={}
W.cs.prototype={}
W.ct.prototype={}
W.cu.prototype={}
W.cv.prototype={}
W.cw.prototype={}
W.cx.prototype={}
W.cz.prototype={}
W.cA.prototype={}
W.cD.prototype={}
W.cE.prototype={}
W.cG.prototype={}
W.cH.prototype={}
W.cK.prototype={}
W.cL.prototype={}
W.br.prototype={}
W.bs.prototype={}
W.cM.prototype={}
W.cN.prototype={}
W.cR.prototype={}
W.cU.prototype={}
W.cV.prototype={}
W.bt.prototype={}
W.bu.prototype={}
W.cW.prototype={}
W.cX.prototype={}
W.d_.prototype={}
W.d0.prototype={}
W.d1.prototype={}
W.d2.prototype={}
W.d3.prototype={}
W.d4.prototype={}
W.d5.prototype={}
W.d6.prototype={}
W.d7.prototype={}
W.d8.prototype={}
P.hD.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.hh.prototype={
e9:function(){return Math.random()}}
P.hp.prototype={}
P.N.prototype={}
P.dL.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dM.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dN.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dO.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dP.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dQ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dR.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dS.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dT.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dU.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dV.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dW.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dX.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dY.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
P.dZ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e_.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
P.e0.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e1.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e4.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e7.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.V.prototype={}
P.a3.prototype={}
P.ef.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eq.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.Z(a,b)},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
Z:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.ip]},
$asl:function(){return[P.ip]},
$isi:1,
$asi:function(){return[P.ip]},
$asn:function(){return[P.ip]}}
P.eA.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eB.prototype={
gN:function(a){return a.a},
gP:function(a){return a.b},
gR:function(a){return a.c}}
P.eQ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.Z(a,b)},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
Z:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.iu]},
$asl:function(){return[P.iu]},
$isi:1,
$asi:function(){return[P.iu]},
$asn:function(){return[P.iu]}}
P.eX.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f0.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f1.prototype={
gj:function(a){return a.length}}
P.f4.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f5.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fs.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.Z(a,b)},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
Z:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.w]},
$asl:function(){return[P.w]},
$isi:1,
$asi:function(){return[P.w]},
$asn:function(){return[P.w]}}
P.t.prototype={}
P.ft.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bh.prototype={}
P.bi.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fE.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.Z(a,b)},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
Z:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.iy]},
$asl:function(){return[P.iy]},
$isi:1,
$asi:function(){return[P.iy]},
$asn:function(){return[P.iy]}}
P.fM.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.cB.prototype={}
P.cC.prototype={}
P.cI.prototype={}
P.cJ.prototype={}
P.cS.prototype={}
P.cT.prototype={}
P.cY.prototype={}
P.cZ.prototype={}
P.dk.prototype={
gj:function(a){return a.length}}
P.dl.prototype={
gj:function(a){return a.length}}
P.aI.prototype={}
P.eR.prototype={
gj:function(a){return a.length}}
P.f9.prototype={
bz:function(a,b){return a.activeTexture(b)},
bB:function(a,b,c){return a.attachShader(b,c)},
bC:function(a,b,c){return a.bindBuffer(b,c)},
bD:function(a,b,c){return a.bindFramebuffer(b,c)},
bE:function(a,b,c){return a.bindTexture(b,c)},
bF:function(a,b){return a.blendEquation(b)},
bG:function(a,b,c){return a.blendFunc(b,c)},
bH:function(a,b,c,d){return a.bufferData(b,c,d)},
bI:function(a,b){return a.clear(b)},
bJ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bK:function(a,b){return a.compileShader(b)},
bL:function(a){return a.createBuffer()},
bM:function(a){return a.createProgram()},
bO:function(a,b){return a.createShader(b)},
bP:function(a){return a.createTexture()},
bR:function(a,b){return a.depthMask(b)},
bS:function(a,b){return a.disable(b)},
bT:function(a,b,c,d){return a.drawArrays(b,c,d)},
bU:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bV:function(a,b){return a.enable(b)},
bW:function(a,b){return a.enableVertexAttribArray(b)},
az:function(a){return P.hE(a.getContextAttributes())},
b_:function(a){return a.getError()},
b0:function(a,b){return a.getProgramInfoLog(b)},
b1:function(a,b,c){return a.getProgramParameter(b,c)},
b2:function(a,b){return a.getShaderInfoLog(b)},
b3:function(a,b,c){return a.getShaderParameter(b,c)},
b4:function(a,b,c){return a.getUniformLocation(b,c)},
bZ:function(a,b){return a.linkProgram(b)},
c2:function(a,b,c){return a.pixelStorei(b,c)},
b6:function(a,b,c){return a.shaderSource(b,c)},
b8:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aX:function(a,b,c,d,e,f,g,h,i,j){this.aQ(a,b,c,d,e,f,g)
return},
c7:function(a,b,c,d,e,f,g){return this.aX(a,b,c,d,e,f,g,null,null,null)},
aQ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c8:function(a,b,c,d){return a.texParameterf(b,c,d)},
c9:function(a,b,c,d){return a.texParameteri(b,c,d)},
cd:function(a,b,c){return a.uniform1f(b,c)},
ce:function(a,b,c){return a.uniform1fv(b,c)},
cf:function(a,b,c){return a.uniform1i(b,c)},
cg:function(a,b,c){return a.uniform1iv(b,c)},
ci:function(a,b,c){return a.uniform2fv(b,c)},
cj:function(a,b,c){return a.uniform3fv(b,c)},
ck:function(a,b,c){return a.uniform4fv(b,c)},
cl:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cm:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
co:function(a,b){return a.useProgram(b)},
cq:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cs:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fa.prototype={
dC:function(a,b){return a.beginTransformFeedback(b)},
dF:function(a,b){return a.bindVertexArray(b)},
dK:function(a){return a.createVertexArray()},
dR:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dS:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dT:function(a){return a.endTransformFeedback()},
ek:function(a,b,c,d){this.dw(a,b,c,d)
return},
dw:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
el:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bz:function(a,b){return a.activeTexture(b)},
bB:function(a,b,c){return a.attachShader(b,c)},
bC:function(a,b,c){return a.bindBuffer(b,c)},
bD:function(a,b,c){return a.bindFramebuffer(b,c)},
bE:function(a,b,c){return a.bindTexture(b,c)},
bF:function(a,b){return a.blendEquation(b)},
bG:function(a,b,c){return a.blendFunc(b,c)},
bH:function(a,b,c,d){return a.bufferData(b,c,d)},
bI:function(a,b){return a.clear(b)},
bJ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bK:function(a,b){return a.compileShader(b)},
bL:function(a){return a.createBuffer()},
bM:function(a){return a.createProgram()},
bO:function(a,b){return a.createShader(b)},
bP:function(a){return a.createTexture()},
bR:function(a,b){return a.depthMask(b)},
bS:function(a,b){return a.disable(b)},
bT:function(a,b,c,d){return a.drawArrays(b,c,d)},
bU:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bV:function(a,b){return a.enable(b)},
bW:function(a,b){return a.enableVertexAttribArray(b)},
az:function(a){return P.hE(a.getContextAttributes())},
b_:function(a){return a.getError()},
b0:function(a,b){return a.getProgramInfoLog(b)},
b1:function(a,b,c){return a.getProgramParameter(b,c)},
b2:function(a,b){return a.getShaderInfoLog(b)},
b3:function(a,b,c){return a.getShaderParameter(b,c)},
b4:function(a,b,c){return a.getUniformLocation(b,c)},
bZ:function(a,b){return a.linkProgram(b)},
c2:function(a,b,c){return a.pixelStorei(b,c)},
b6:function(a,b,c){return a.shaderSource(b,c)},
b8:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aX:function(a,b,c,d,e,f,g,h,i,j){this.aQ(a,b,c,d,e,f,g)
return},
c7:function(a,b,c,d,e,f,g){return this.aX(a,b,c,d,e,f,g,null,null,null)},
aQ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c8:function(a,b,c,d){return a.texParameterf(b,c,d)},
c9:function(a,b,c,d){return a.texParameteri(b,c,d)},
cd:function(a,b,c){return a.uniform1f(b,c)},
ce:function(a,b,c){return a.uniform1fv(b,c)},
cf:function(a,b,c){return a.uniform1i(b,c)},
cg:function(a,b,c){return a.uniform1iv(b,c)},
ci:function(a,b,c){return a.uniform2fv(b,c)},
cj:function(a,b,c){return a.uniform3fv(b,c)},
ck:function(a,b,c){return a.uniform4fv(b,c)},
cl:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cm:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
co:function(a,b){return a.useProgram(b)},
cq:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cs:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fk.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return P.hE(this.dn(a,b))},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
dn:function(a,b){return a.item(b)},
$isj:1,
$asj:function(){return[P.aO]},
$asl:function(){return[P.aO]},
$isi:1,
$asi:function(){return[P.aO]},
$asn:function(){return[P.aO]}}
P.cO.prototype={}
P.cP.prototype={}
B.i_.prototype={
$1:function(a){$.$get$hF().i(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.av]}}}
B.i0.prototype={
$1:function(a){$.$get$hF().i(0,a.which,null)},
$S:function(a){return{func:1,args:[W.av]}}}
B.i1.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.lY=t
$.lZ=C.b.a2(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.iO=s-C.b.L(window.innerWidth,2)
$.k6=-(t-C.b.L(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.I]}}}
B.i2.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bB=t-C.b.L(window.innerWidth,2)
$.bC=-(s-C.b.L(window.innerHeight,2))
if(a.button===2)$.$get$bA().i(0,"right",!0)
else $.$get$bA().i(0,"left",!0)},
$S:function(a){return{func:1,args:[W.I]}}}
B.i3.prototype={
$1:function(a){if(a.button===2)$.$get$bA().i(0,"right",null)
else $.$get$bA().i(0,"left",null)},
$S:function(a){return{func:1,args:[W.I]}}}
B.eS.prototype={
d_:function(a,b,c,d){var t
d.toString
W.Y(d,W.l6(d),new B.eT(this),!1,W.aC)
W.Y(d,"mousemove",new B.eU(this),!1,W.I)
t=W.az
W.Y(d,"touchstart",new B.eV(),!1,t)
W.Y(d,"touchmove",new B.eW(this),!1,t)
B.mj(null)}}
B.eT.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.ai.gdL(a)*r.k3
if(C.c.a2(r.fy,t)>0)r.fy=C.c.a2(r.fy,t)}catch(q){s=H.ad(q)
P.a0(s)}},
$S:function(a){return{func:1,args:[W.aC]}}}
B.eU.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.a2($.iO,$.bB)*0.01
s=t.id
r=$.bC
q=$.k6
t.id=s+(r-q)*0.01
$.bB=$.iO
$.bC=q}},
$S:function(a){return{func:1,args:[W.I]}}}
B.eV.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a5(t.clientX)
C.c.a5(t.clientY)
$.bB=s
C.c.a5(t.clientX)
$.bC=C.c.a5(t.clientY)},
$S:function(a){return{func:1,args:[W.az]}}}
B.eW.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a5(t.clientX)
t=C.c.a5(t.clientY)
r=this.a
r.go=r.go+C.b.a2(s,$.bB)*0.01
r.id=r.id+($.bC-t)*0.01
$.bB=s
$.bC=t},
$S:function(a){return{func:1,args:[W.az]}}}
G.eG.prototype={}
G.cp.prototype={
F:function(a,b){var t=this.d
if(H.ac(!t.G(0,a)))H.aj("uniform "+a+" already set")
t.i(0,a,b)},
bf:function(){return this.d},
k:function(a){var t,s,r,q
t=H.G(["{"+new H.ah(H.hK(this),null).k(0)+"}["+this.a+"]"],[P.w])
for(s=this.d,r=s.gJ(s),r=r.gA(r);r.q();){q=r.gt(r)
C.a.l(t,H.e(q)+": "+H.e(s.h(0,q)))}return C.a.ah(t,"\n")}}
G.dm.prototype={}
G.dp.prototype={
bX:function(a,b,c){J.kA(this.a,b)
if(c>0)J.kU(this.a,b,c)},
cr:function(a,b,c,d,e,f,g,h){J.i7(this.a,34962,b)
J.kV(this.a,c,d,e,!1,g,h)}}
G.e9.prototype={}
G.ae.prototype={
gN:function(a){return this.a},
gP:function(a){return this.b},
gR:function(a){return this.c}}
G.eb.prototype={
bd:function(a){var t=this.e
H.b(!t.G(0,a))
H.b(C.i.cI(a,"a"))
switch($.$get$P().h(0,a).a){case"vec2":t.i(0,a,H.G([],[T.X]))
break
case"vec3":t.i(0,a,H.G([],[T.m]))
break
case"vec4":t.i(0,a,H.G([],[T.ai]))
break
case"float":t.i(0,a,H.G([],[P.S]))
break
case"uvec4":t.i(0,a,H.G([],[[P.i,P.v]]))
break
default:if(H.ac(!1))H.aj("unknown type for "+a)}},
cQ:function(a){var t,s,r,q,p
H.b(!0)
t=this.d
s=t.length
C.a.l(this.b,new G.ae(s,s+1,s+2))
for(r=0;r<3;++r){q=a[r]
p=new T.m(new Float32Array(3))
p.D(q)
C.a.l(t,p)}},
cO:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<3;++r){q=b[r]
p=new Float32Array(2)
o=q.a
p[1]=o[1]
p[0]=o[0]
s.l(t,new T.X(p))}},
cP:function(a,b){var t,s,r,q,p
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<3;++r){q=b[r]
p=new T.m(new Float32Array(3))
p.D(q)
s.l(t,p)}},
cV:function(){var t,s,r,q,p,o,n
t=this.b
H.b(t.length>0||!1)
s=new Array(t.length*3)
s.fixed$length=Array
r=H.G(s,[P.v])
for(s=t.length,q=0,p=0;p<s;++p){o=t[p]
r[q]=o.a
r[q+1]=o.b
r[q+2]=o.c
q+=3}for(t=this.c,p=0;!1;++p){n=t[p]
r[q]=n.gN(n)
r[q+1]=n.gP(n)
r[q+2]=n.gR(n)
r[q+3]=n.gN(n)
r[q+4]=n.gR(n)
r[q+5]=n.geo(n)
q+=6}H.b(q===r.length)
return r},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4[0]"]
for(s=this.e,r=s.gJ(s),r=r.gA(r);r.q();){q=r.gt(r)
p=$.$get$P().h(0,q).a
C.a.l(t,H.e(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.ah(t," ")}}
G.cn.prototype={}
G.cm.prototype={}
G.c2.prototype={
cZ:function(a){this.F("cDepthTest",!0)
this.F("cDepthWrite",!0)
this.F("cBlendEquation",$.$get$j4())
this.F("cStencilFunc",$.$get$iv())}}
G.eD.prototype={
bc:function(a,b,c){var t,s
if(C.i.aC(a,0)===105){if(H.ac(C.b.aA(b.length,c)===this.z))H.aj("ChangeAttribute "+this.z)}else{t=C.b.aA(b.length,c)
if(H.ac(t===(this.ch.length/3|0)))H.aj("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.i7(t.a,34962,s)
J.iT(t.a,34962,b,35048)},
cW:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a8:function(a,b,c){var t,s,r,q,p,o
t=J.iQ(a,0)===105
if(t&&this.z===0)this.z=C.b.aA(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.i8(r.a))
this.bc(a,b,c)
q=$.$get$P().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.ac(p.G(0,a)))H.aj("unexpected attribute "+a)
o=p.h(0,a)
J.de(r.a,this.e)
r.bX(0,o,t?1:0)
r.cr(0,s.h(0,a),o,q.be(),5126,!1,0,0)},
bb:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.i8(s.a))
this.ch=a
this.bc("aPosition",a,3)
r=$.$get$P().h(0,"aPosition")
if(r==null)throw H.c("Unknown canonical aPosition")
q=this.x
H.b(q.G(0,"aPosition"))
p=q.h(0,"aPosition")
J.de(s.a,this.e)
s.bX(0,p,0)
s.cr(0,t.h(0,"aPosition"),p,r.be(),5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gJ(t),r=r.gA(r);r.q();){q=r.gt(r)
C.a.l(s,H.e(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.ah(s,"  ")},
saI:function(a){this.cx=a}}
G.eY.prototype={
cR:function(a,b){var t=C.b.cu(a,b)
if(this.z===t)return
this.z=t
this.bg()},
bg:function(){var t,s,r,q,p,o,n
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
bf:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.m(new Float32Array(3))
o.a1(r,q,p)
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
s=J.r(n)
r=!!s.$isai
k=r?s.gay(n):1
if(!!s.$ism){j=s.gm(n)
m=s.gn(n)
l=s.gC(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gC(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.H(t[0],n)
r=C.c.H(t[4],m)
q=C.c.H(t[8],l)
i=t[12]
h=C.c.H(t[1],n)
g=C.c.H(t[5],m)
f=C.c.H(t[9],l)
e=t[13]
d=C.c.H(t[2],n)
c=C.c.H(t[6],m)
b=C.c.H(t[10],l)
a=t[14]
a0=C.c.H(t[3],n)
a1=C.c.H(t[7],m)
a2=C.c.H(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.D(this.db)
a3.c1(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.f8.prototype={
d1:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.K)(t),++o){n=t[o]
r.i(0,n,J.iW(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.K)(t),++o){n=t[o]
r.i(0,n,J.iW(q.a,p,n))}},
d5:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gJ(s),s=s.gA(s);s.q();){q=s.gt(s)
if(!t.G(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bm(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.q();){q=s.d
if(!t.ac(0,q))C.a.l(r,q)}return r},
d6:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gJ(b),s=s.gA(s),r=this.d,q=this.y,p=this.z,o=0;s.q();){n=s.gt(s)
switch(J.iQ(n,0)){case 117:if(q.G(0,n)){m=b.h(0,n)
if(p.G(0,n))H.hY("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$P().h(0,n)
if(l==null)H.H("unknown "+n)
H.b(q.G(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.ic(r.a,k,m)
else if(!!J.r(m).$isjh)J.kS(r.a,k,m)
break
case"float":if(l.c===0)J.kQ(r.a,k,m)
else if(!!J.r(m).$ise6)J.kR(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.am(m,"$isD").a
J.j1(r.a,k,!1,n)}else if(!!J.r(m).$ise6)J.j1(r.a,k,!1,m)
else if(H.ac(!1))H.aj("bad unform: "+n)
break
case"mat3":if(l.c===0){n=H.am(m,"$isW").a
J.j0(r.a,k,!1,n)}else if(!!J.r(m).$ise6)J.j0(r.a,k,!1,m)
else if(H.ac(!1))H.aj("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.j_(j,k,H.am(m,"$isai").a)
else J.j_(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.iZ(j,k,H.am(m,"$ism").a)
else J.iZ(j,k,m)
break
case"vec2":n=l.c
j=r.a
if(n===0)J.iY(j,k,H.am(m,"$isX").a)
else J.iY(j,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.a0(33984,this.ch)
J.iR(r.a,n)
n=H.am(m,"$isbj").b
J.bD(r.a,3553,n)
n=this.ch
J.ic(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.a0(33984,this.ch)
J.iR(r.a,n)
n=H.am(m,"$isbj").b
J.bD(r.a,34067,n)
n=this.ch
J.ic(r.a,k,n)
this.ch=this.ch+1
break
default:H.hY("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.A(m,!0)
j=r.a
if(n)J.df(j,2929)
else J.i9(j,2929)
break
case"cStencilFunc":H.am(m,"$iscn")
n=m.a
j=r.a
if(n===1281)J.i9(j,2960)
else{J.df(j,2960)
j=m.b
i=m.c
J.kM(r.a,n,j,i)}break
case"cDepthWrite":J.ku(r.a,m)
break
case"cBlendEquation":H.am(m,"$iscm")
n=m.a
j=r.a
if(n===1281)J.i9(j,3042)
else{J.df(j,3042)
j=m.b
i=m.c
J.kn(r.a,j,i)
J.km(r.a,n)}break}++o
break}}h=P.l5(0,0,0,Date.now()-new P.b4(t,!1).a,0,0)
""+o
h.k(0)},
cU:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.kT(t.a,this.r)
this.ch=0
this.z.X(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.K)(b),++r){q=b[r]
this.d6(q.a,q.bf())}s=this.Q
s.X(0)
for(p=a.cy,p=p.gJ(p),p=p.gA(p);p.q();)s.l(0,p.gt(p))
o=this.d5()
if(o.length!==0)P.a0("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(o)))
J.de(a.d.a,a.e)
n=this.e.f.length>0
s=a.f
p=a.cW()
m=a.Q
l=a.z
if(n)J.kk(t.a,s)
if(m!==-1){k=t.a
if(l>1)J.ky(k,s,p,m,0,l)
else J.kx(k,s,p,m,0)}else{m=t.a
if(l>1)J.kw(m,s,0,p,l)
else J.kv(m,s,0,p)}if(n)J.kB(t.a)}}
G.u.prototype={
be:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.ff.prototype={
ba:function(a){var t,s,r,q
H.b(this.b==null)
for(t=this.c,s=this.x,r=0;r<1;++r){q=a[r]
H.b($.$get$P().G(0,q))
H.b(!C.a.ac(t,q))
C.a.l(t,q)
s.i(0,q,this.r);++this.r}C.a.b7(t)},
am:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.K)(a),++r){q=a[r]
if(H.ac($.$get$P().G(0,q)))H.aj("missing uniform "+q)
H.b(!C.a.ac(s,q))
C.a.l(s,q)}C.a.b7(s)},
d2:function(a,b){H.b(this.b==null)
this.b=this.d7(!0,a,b)},
an:function(a){return this.d2(a,null)},
d7:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.K)(t),++o){n=t[o]
m=$.$get$P().h(0,n)
C.a.l(q,"layout (location="+H.e(p.h(0,n))+") in "+m.a+" "+H.e(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,o=0;!1;++o){k=t[o]
m=$.$get$P().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.K)(t),++o){k=t[o]
m=$.$get$P().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.K)(t),++o){k=t[o]
m=$.$get$P().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.e(k)+j+";")}C.a.l(q,"")
C.a.l(q,"void main(void) {")
C.a.aS(q,b)
C.a.l(q,"}")
return C.a.ah(q,"\n")}}
G.fi.prototype={
al:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
G.fx.prototype={
cX:function(a,b){var t=this.e
if(t!==1)J.kO(a.a,b,34046,t)
J.iX(a.a,b,10240,this.r)
J.iX(a.a,b,10241,this.f)}}
G.bj.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.eg.prototype={
d3:function(a){var t,s
t=this.d
s=this.c
J.bD(t.a,s,this.b)
J.kN(t.a,s,0,6408,6408,5121,a)}}
R.cd.prototype={
c4:function(a){var t,s,r
t=this.db
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.a0("size change "+H.e(s)+" "+H.e(r))
this.dx.cR(s,r)
this.z=s
this.Q=r}}
A.ax.prototype={
k:function(a){return"NODE["+this.a+"]"}}
A.be.prototype={}
A.f7.prototype={
d0:function(a,b,c){if(this.d==null)this.d=new G.e9(this.e,null,null,null,null)},
cT:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.kl(p.a,36160,t)
H.b(r>0&&q>0)
J.kW(p.a,this.x,this.y,r,q)
if(s!==0)J.ko(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.K)(t),++o){n=t[o]
m=n.e
C.a.l(m,new G.cp(P.R(),"transforms",!1,!0))
l=new T.D(new Float32Array(16))
l.E()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.K)(r),++k)A.k_(p,r[k],l,a,m)
m.pop()}},
cS:function(){return this.cT(null)}}
A.hL.prototype={
$2:function(a,b){var t=536870911&a+J.b0(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.v,P.B]}}}
T.W.prototype={
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
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.W){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gu:function(a){return A.db(this.a)},
U:function(a){var t,s
t=new Float32Array(3)
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.m(t)},
dJ:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
T.D.prototype={
a7:function(a,b,c){H.b(a<4)
H.b(b<4)
this.a[b*4+a]=c},
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
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.D){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.db(this.a)},
U:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.ai(t)},
cw:function(a,b,c,d){var t=this.a
t[0]=t[0]*b
t[1]=t[1]*b
t[2]=t[2]*b
t[3]=t[3]*b
t[4]=t[4]*b
t[5]=t[5]*b
t[6]=t[6]*b
t[7]=t[7]*b
t[8]=t[8]*b
t[9]=t[9]*b
t[10]=t[10]*b
t[11]=t[11]*b
t[12]=t[12]
t[13]=t[13]
t[14]=t[14]
t[15]=t[15]},
M:function(a,b){return this.cw(a,b,null,null)},
E:function(){var t=this.a
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
c1:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.X.prototype={
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.X){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.db(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.m.prototype={
a1:function(a,b,c){var t=this.a
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
return"["+H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.m){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.db(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){return Math.sqrt(this.gT())},
gT:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
B:function(a){var t,s,r
t=Math.sqrt(this.gT())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
aU:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
bQ:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.m(new Float32Array(3))
t.a1(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
l:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]
s[2]=s[2]+t[2]},
M:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gC:function(a){return this.a[2]}}
T.ai.prototype={
k:function(a){var t=this.a
return H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+","+H.e(t[3])},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ai){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.db(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gP:function(a){return this.a[2]},
gN:function(a){return this.a[3]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gC:function(a){return this.a[2]},
gay:function(a){return this.a[3]}}
V.hW.prototype={
$1:function(b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
this.a.a=b5+0
t=this.b
t.go+=0.001
s=t.k4
if(s.h(0,37)!=null)t.go+=0.03
else if(s.h(0,39)!=null)t.go-=0.03
if(s.h(0,38)!=null)t.id+=0.03
else if(s.h(0,40)!=null)t.id-=0.03
if(s.h(0,33)!=null)t.fy*=0.99
else if(s.h(0,34)!=null)t.fy*=1.01
if(s.h(0,32)!=null){t.go=0
t.id=0}s=C.c.dG(t.id,-1.4707963267948965,1.4707963267948965)
t.id=s
r=t.fy
q=t.go
p=r*Math.cos(s)
t.al(p*Math.cos(q),r*Math.sin(s),p*Math.sin(q))
q=t.d.a
s=t.k2.a
q[12]=q[12]+s[0]
q[13]=q[13]+s[1]
q[14]=q[14]+s[2]
o=q[12]
n=q[13]
m=q[14]
l=new T.m(new Float32Array(3))
l.a1(0,1,0)
r=t.e
k=r.a
k[0]=q[12]
k[1]=q[13]
k[2]=q[14]
k=new Float32Array(3)
j=new T.m(k)
j.D(r)
k[0]=k[0]-s[0]
k[1]=k[1]-s[1]
k[2]=k[2]-s[2]
j.B(0)
i=l.bQ(j)
i.B(0)
h=j.bQ(i)
h.B(0)
s=i.aU(r)
g=h.aU(r)
r=j.aU(r)
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
q[15]=1
q[14]=-r
q[13]=-g
q[12]=-s
q[11]=0
q[10]=k
q[9]=d
q[8]=f
q[7]=0
q[6]=a1
q[5]=a0
q[4]=a
q[3]=0
q[2]=b
q[1]=c
q[0]=e
q[12]=o
q[13]=n
q[14]=m
e=t.f
c=e.a
c[0]=q[2]
c[1]=q[6]
c[2]=q[10]
t=-t.k1
a2=Math.sqrt(e.gT())
o=c[0]/a2
n=c[1]/a2
m=c[2]/a2
a3=Math.cos(t)
a4=Math.sin(t)
a5=1-a3
a6=o*o*a5+a3
t=m*a4
a7=o*n*a5-t
c=n*a4
a8=o*m*a5+c
a9=n*o*a5+t
b0=n*n*a5+a3
t=o*a4
b1=n*m*a5-t
b2=m*o*a5-c
b3=m*n*a5+t
b4=m*m*a5+a3
t=q[0]
c=q[4]
e=q[8]
b=q[1]
a=q[5]
a0=q[9]
a1=q[2]
f=q[6]
d=q[10]
k=q[3]
s=q[7]
g=q[11]
q[0]=t*a6+c*a9+e*b2
q[1]=b*a6+a*a9+a0*b2
q[2]=a1*a6+f*a9+d*b2
q[3]=k*a6+s*a9+g*b2
q[4]=t*a7+c*b0+e*b3
q[5]=b*a7+a*b0+a0*b3
q[6]=a1*a7+f*b0+d*b3
q[7]=k*a7+s*b0+g*b3
q[8]=t*a8+c*b1+e*b4
q[9]=b*a8+a*b1+a0*b4
q[10]=a1*a8+f*b1+d*b4
q[11]=k*a8+s*b1+g*b4
this.c.cS()
C.aj.gdB(window).ca(this)},
$S:function(a){return{func:1,v:true,args:[P.a_]}}}
J.a.prototype.cL=J.a.prototype.k
J.b8.prototype.cM=J.b8.prototype.k;(function installTearOffs(){installTearOff(H.aR.prototype,"ge5",0,0,0,null,["$0"],["aw"],0)
installTearOff(H.Z.prototype,"gcz",0,0,0,null,["$1"],["K"],2)
installTearOff(H.aD.prototype,"gdN",0,0,0,null,["$1"],["Y"],2)
installTearOff(P,"lU",1,0,0,null,["$1"],["lF"],1)
installTearOff(P,"lV",1,0,0,null,["$1"],["lG"],1)
installTearOff(P,"lW",1,0,0,null,["$1"],["lH"],1)
installTearOff(P,"jZ",1,0,0,null,["$0"],["lS"],0)
installTearOff(P.aa.prototype,"gdf",0,0,0,null,["$2","$1"],["ao","dg"],3)
installTearOff(P,"m0",1,0,0,null,["$2"],["l2"],5)
installTearOff(R.cd.prototype,"gee",0,0,0,null,["$1"],["c4"],4)
installTearOff(V,"k7",1,0,0,null,["$0"],["md"],0)})();(function inheritance(){inherit(P.B,null)
var t=P.B
inherit(H.il,t)
inherit(J.a,t)
inherit(J.dj,t)
inherit(P.a4,t)
inherit(H.c_,t)
inherit(P.bX,t)
inherit(H.aL,t)
inherit(H.ap,t)
inherit(H.hn,t)
inherit(H.aR,t)
inherit(H.h_,t)
inherit(H.aE,t)
inherit(H.hm,t)
inherit(H.fW,t)
inherit(H.cc,t)
inherit(H.fz,t)
inherit(H.an,t)
inherit(H.Z,t)
inherit(H.aD,t)
inherit(H.f6,t)
inherit(H.fF,t)
inherit(P.aK,t)
inherit(H.cQ,t)
inherit(H.ah,t)
inherit(P.b9,t)
inherit(H.er,t)
inherit(H.et,t)
inherit(P.ig,t)
inherit(P.fX,t)
inherit(P.cy,t)
inherit(P.aa,t)
inherit(P.cq,t)
inherit(P.fo,t)
inherit(P.fp,t)
inherit(P.iw,t)
inherit(P.aH,t)
inherit(P.hx,t)
inherit(P.fe,t)
inherit(P.hj,t)
inherit(P.bm,t)
inherit(P.iq,t)
inherit(P.l,t)
inherit(P.hl,t)
inherit(P.aG,t)
inherit(P.E,t)
inherit(P.b4,t)
inherit(P.a_,t)
inherit(P.ar,t)
inherit(P.ci,t)
inherit(P.ih,t)
inherit(P.h4,t)
inherit(P.dK,t)
inherit(P.i,t)
inherit(P.aO,t)
inherit(P.J,t)
inherit(P.aQ,t)
inherit(P.w,t)
inherit(P.bg,t)
inherit(P.iz,t)
inherit(W.dv,t)
inherit(W.n,t)
inherit(W.e5,t)
inherit(P.hh,t)
inherit(P.hp,t)
inherit(G.eG,t)
inherit(G.dp,t)
inherit(G.e9,t)
inherit(G.ae,t)
inherit(G.eb,t)
inherit(G.cn,t)
inherit(G.cm,t)
inherit(G.u,t)
inherit(G.ff,t)
inherit(G.fx,t)
inherit(G.bj,t)
inherit(T.W,t)
inherit(T.D,t)
inherit(T.X,t)
inherit(T.m,t)
inherit(T.ai,t)
t=J.a
inherit(J.el,t)
inherit(J.en,t)
inherit(J.b8,t)
inherit(J.as,t)
inherit(J.aM,t)
inherit(J.at,t)
inherit(H.bb,t)
inherit(H.aP,t)
inherit(W.d,t)
inherit(W.dg,t)
inherit(W.bJ,t)
inherit(W.bK,t)
inherit(W.aJ,t)
inherit(W.U,t)
inherit(W.cr,t)
inherit(W.dA,t)
inherit(W.dB,t)
inherit(W.dC,t)
inherit(W.bN,t)
inherit(W.bO,t)
inherit(W.cs,t)
inherit(W.bQ,t)
inherit(W.cu,t)
inherit(W.dG,t)
inherit(W.f,t)
inherit(W.cw,t)
inherit(W.ed,t)
inherit(W.cz,t)
inherit(W.ev,t)
inherit(W.eC,t)
inherit(W.cD,t)
inherit(W.cG,t)
inherit(W.a6,t)
inherit(W.cK,t)
inherit(W.cM,t)
inherit(W.a7,t)
inherit(W.cR,t)
inherit(W.cU,t)
inherit(W.fy,t)
inherit(W.cW,t)
inherit(W.fD,t)
inherit(W.fL,t)
inherit(W.fN,t)
inherit(W.d_,t)
inherit(W.d1,t)
inherit(W.d3,t)
inherit(W.d5,t)
inherit(W.d7,t)
inherit(P.cB,t)
inherit(P.eB,t)
inherit(P.cI,t)
inherit(P.f0,t)
inherit(P.f1,t)
inherit(P.f4,t)
inherit(P.cS,t)
inherit(P.cY,t)
inherit(P.dk,t)
inherit(P.f9,t)
inherit(P.fa,t)
inherit(P.cO,t)
t=J.b8
inherit(J.eZ,t)
inherit(J.aB,t)
inherit(J.au,t)
inherit(J.ik,J.as)
t=J.aM
inherit(J.bY,t)
inherit(J.em,t)
t=P.a4
inherit(H.j,t)
inherit(H.c0,t)
t=H.j
inherit(H.aN,t)
inherit(H.es,t)
inherit(H.dJ,H.c0)
inherit(H.ez,P.bX)
t=H.aN
inherit(H.c1,t)
inherit(P.eu,t)
t=H.ap
inherit(H.i4,t)
inherit(H.i5,t)
inherit(H.hg,t)
inherit(H.h0,t)
inherit(H.ei,t)
inherit(H.ej,t)
inherit(H.ho,t)
inherit(H.fA,t)
inherit(H.fB,t)
inherit(H.i6,t)
inherit(H.hQ,t)
inherit(H.hR,t)
inherit(H.hS,t)
inherit(H.hT,t)
inherit(H.hU,t)
inherit(H.fu,t)
inherit(H.eo,t)
inherit(H.hM,t)
inherit(H.hN,t)
inherit(H.hO,t)
inherit(P.fT,t)
inherit(P.fS,t)
inherit(P.fU,t)
inherit(P.fV,t)
inherit(P.h5,t)
inherit(P.h9,t)
inherit(P.h6,t)
inherit(P.h7,t)
inherit(P.h8,t)
inherit(P.hc,t)
inherit(P.hd,t)
inherit(P.hb,t)
inherit(P.ha,t)
inherit(P.fq,t)
inherit(P.fr,t)
inherit(P.hA,t)
inherit(P.hs,t)
inherit(P.hr,t)
inherit(P.ht,t)
inherit(P.ey,t)
inherit(P.dH,t)
inherit(P.dI,t)
inherit(W.fn,t)
inherit(W.fQ,t)
inherit(W.h3,t)
inherit(P.hD,t)
inherit(B.i_,t)
inherit(B.i0,t)
inherit(B.i1,t)
inherit(B.i2,t)
inherit(B.i3,t)
inherit(B.eT,t)
inherit(B.eU,t)
inherit(B.eV,t)
inherit(B.eW,t)
inherit(A.hL,t)
inherit(V.hW,t)
t=H.fW
inherit(H.aT,t)
inherit(H.bv,t)
t=P.aK
inherit(H.eP,t)
inherit(H.ep,t)
inherit(H.fJ,t)
inherit(H.fH,t)
inherit(H.dn,t)
inherit(H.fb,t)
inherit(P.bH,t)
inherit(P.ca,t)
inherit(P.a2,t)
inherit(P.fK,t)
inherit(P.fI,t)
inherit(P.bf,t)
inherit(P.dq,t)
inherit(P.dz,t)
t=H.fu
inherit(H.fl,t)
inherit(H.b2,t)
inherit(H.fR,P.bH)
inherit(P.ex,P.b9)
inherit(H.a5,P.ex)
t=H.aP
inherit(H.eH,t)
inherit(H.c5,t)
t=H.c5
inherit(H.bn,t)
inherit(H.bp,t)
inherit(H.bo,H.bn)
inherit(H.c6,H.bo)
inherit(H.bq,H.bp)
inherit(H.c7,H.bq)
t=H.c6
inherit(H.c4,t)
inherit(H.eI,t)
t=H.c7
inherit(H.eJ,t)
inherit(H.eK,t)
inherit(H.eL,t)
inherit(H.eM,t)
inherit(H.eN,t)
inherit(H.c8,t)
inherit(H.eO,t)
inherit(P.hw,P.fX)
inherit(P.hq,P.hx)
inherit(P.hk,H.a5)
inherit(P.fd,P.fe)
inherit(P.hf,P.fd)
inherit(P.hi,P.hf)
t=P.a_
inherit(P.S,t)
inherit(P.v,t)
t=P.a2
inherit(P.cb,t)
inherit(P.eh,t)
t=W.d
inherit(W.x,t)
inherit(W.ag,t)
inherit(W.e3,t)
inherit(W.b7,t)
inherit(W.ba,t)
inherit(W.f2,t)
inherit(W.ce,t)
inherit(W.br,t)
inherit(W.bt,t)
inherit(W.fO,t)
inherit(W.fP,t)
inherit(W.bk,t)
inherit(W.iA,t)
inherit(P.dl,t)
inherit(P.aI,t)
t=W.x
inherit(W.bR,t)
inherit(W.ao,t)
inherit(W.b5,t)
t=W.bR
inherit(W.h,t)
inherit(P.t,t)
t=W.ag
inherit(W.bG,t)
inherit(W.ec,t)
inherit(W.ew,t)
t=W.h
inherit(W.dh,t)
inherit(W.di,t)
inherit(W.bI,t)
inherit(W.e8,t)
inherit(W.fc,t)
t=W.aJ
inherit(W.dr,t)
inherit(W.dt,t)
inherit(W.du,t)
inherit(W.dx,t)
t=W.U
inherit(W.ds,t)
inherit(W.dw,t)
inherit(W.dy,t)
inherit(W.b3,W.cr)
inherit(W.dD,W.bN)
inherit(W.dE,W.bO)
inherit(W.ct,W.cs)
inherit(W.bP,W.ct)
inherit(W.cv,W.cu)
inherit(W.dF,W.cv)
inherit(W.cx,W.cw)
inherit(W.e2,W.cx)
inherit(W.cA,W.cz)
inherit(W.b6,W.cA)
inherit(W.bW,W.b5)
inherit(W.ee,W.b7)
inherit(W.aA,W.f)
t=W.aA
inherit(W.av,t)
inherit(W.I,t)
inherit(W.az,t)
inherit(W.eE,W.ba)
inherit(W.cE,W.cD)
inherit(W.eF,W.cE)
inherit(W.cH,W.cG)
inherit(W.c9,W.cH)
inherit(W.cL,W.cK)
inherit(W.f_,W.cL)
inherit(W.bs,W.br)
inherit(W.fh,W.bs)
inherit(W.cN,W.cM)
inherit(W.fj,W.cN)
inherit(W.fm,W.cR)
inherit(W.cV,W.cU)
inherit(W.fv,W.cV)
inherit(W.bu,W.bt)
inherit(W.fw,W.bu)
inherit(W.cX,W.cW)
inherit(W.fC,W.cX)
inherit(W.aC,W.I)
inherit(W.d0,W.d_)
inherit(W.fY,W.d0)
inherit(W.fZ,W.bQ)
inherit(W.d2,W.d1)
inherit(W.he,W.d2)
inherit(W.d4,W.d3)
inherit(W.cF,W.d4)
inherit(W.d6,W.d5)
inherit(W.hu,W.d6)
inherit(W.d8,W.d7)
inherit(W.hv,W.d8)
inherit(W.h1,P.fo)
inherit(W.iD,W.h1)
inherit(W.h2,P.fp)
inherit(P.N,P.hp)
t=P.t
inherit(P.dL,t)
inherit(P.dM,t)
inherit(P.dN,t)
inherit(P.dO,t)
inherit(P.dP,t)
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
inherit(P.e4,t)
inherit(P.a3,t)
inherit(P.eA,t)
inherit(P.eX,t)
t=P.a3
inherit(P.e7,t)
inherit(P.V,t)
inherit(P.ef,t)
inherit(P.ft,t)
inherit(P.bh,t)
inherit(P.fM,t)
inherit(P.cC,P.cB)
inherit(P.eq,P.cC)
inherit(P.cJ,P.cI)
inherit(P.eQ,P.cJ)
inherit(P.f5,P.V)
inherit(P.cT,P.cS)
inherit(P.fs,P.cT)
inherit(P.bi,P.bh)
inherit(P.cZ,P.cY)
inherit(P.fE,P.cZ)
inherit(P.eR,P.aI)
inherit(P.cP,P.cO)
inherit(P.fk,P.cP)
t=G.eG
inherit(G.fi,t)
inherit(G.cp,t)
inherit(G.eD,t)
inherit(G.f8,t)
inherit(A.f7,t)
inherit(A.be,t)
t=G.fi
inherit(G.dm,t)
inherit(A.ax,t)
inherit(B.eS,G.dm)
t=G.cp
inherit(G.c2,t)
inherit(G.eY,t)
inherit(G.eg,G.bj)
inherit(R.cd,A.f7)
mixin(H.bn,P.l)
mixin(H.bo,H.aL)
mixin(H.bp,P.l)
mixin(H.bq,H.aL)
mixin(W.cr,W.dv)
mixin(W.cs,P.l)
mixin(W.ct,W.n)
mixin(W.cu,P.l)
mixin(W.cv,W.n)
mixin(W.cw,P.l)
mixin(W.cx,W.n)
mixin(W.cz,P.l)
mixin(W.cA,W.n)
mixin(W.cD,P.l)
mixin(W.cE,W.n)
mixin(W.cG,P.l)
mixin(W.cH,W.n)
mixin(W.cK,P.l)
mixin(W.cL,W.n)
mixin(W.br,P.l)
mixin(W.bs,W.n)
mixin(W.cM,P.l)
mixin(W.cN,W.n)
mixin(W.cR,P.b9)
mixin(W.cU,P.l)
mixin(W.cV,W.n)
mixin(W.bt,P.l)
mixin(W.bu,W.n)
mixin(W.cW,P.l)
mixin(W.cX,W.n)
mixin(W.d_,P.l)
mixin(W.d0,W.n)
mixin(W.d1,P.l)
mixin(W.d2,W.n)
mixin(W.d3,P.l)
mixin(W.d4,W.n)
mixin(W.d5,P.l)
mixin(W.d6,W.n)
mixin(W.d7,P.l)
mixin(W.d8,W.n)
mixin(P.cB,P.l)
mixin(P.cC,W.n)
mixin(P.cI,P.l)
mixin(P.cJ,W.n)
mixin(P.cS,P.l)
mixin(P.cT,W.n)
mixin(P.cY,P.l)
mixin(P.cZ,W.n)
mixin(P.cO,P.l)
mixin(P.cP,W.n)})();(function constants(){C.q=W.bI.prototype
C.m=W.bJ.prototype
C.o=W.bK.prototype
C.B=W.bW.prototype
C.C=J.a.prototype
C.a=J.as.prototype
C.b=J.bY.prototype
C.c=J.aM.prototype
C.i=J.at.prototype
C.J=J.au.prototype
C.K=H.c4.prototype
C.v=J.eZ.prototype
C.p=J.aB.prototype
C.ai=W.aC.prototype
C.aj=W.bk.prototype
C.A=new P.hh()
C.f=new P.hq()
C.r=new P.ar(0)
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
C.L=new G.u("vec3","vertex btangents",0)
C.d=new G.u("vec3","",0)
C.M=new G.u("vec4","delta from light",0)
C.n=new G.u("","",0)
C.w=new G.u("vec3","vertex coordinates",0)
C.N=new G.u("vec3","vertex binormals",0)
C.x=new G.u("vec4","for wireframe",0)
C.O=new G.u("vec4","per vertex color",0)
C.P=new G.u("float","for normal maps",0)
C.j=new G.u("mat4","",0)
C.R=new G.u("mat4","",4)
C.Q=new G.u("mat4","",128)
C.e=new G.u("float","",0)
C.S=new G.u("float","",4)
C.T=new G.u("float","depth for shadowmaps",0)
C.h=new G.u("sampler2D","",0)
C.U=new G.u("float","for bump maps",0)
C.V=new G.u("vec2","texture uvs",0)
C.W=new G.u("float","time since program start in sec",0)
C.k=new G.u("vec2","",0)
C.X=new G.u("samplerCube","",0)
C.l=new G.u("vec4","",0)
C.Y=new G.u("vec3","vertex normals",0)
C.Z=new G.u("sampler2DShadow","",0)
C.y=new G.u("vec3","per vertex color",0)
C.z=new G.u("mat3","",0)
C.a_=new G.u("vec3","vertex tangents",0)
C.a0=H.F("mn")
C.a1=H.F("mo")
C.a2=H.F("e6")
C.a3=H.F("mp")
C.a4=H.F("mq")
C.a5=H.F("jh")
C.a6=H.F("mr")
C.a7=H.F("jk")
C.a8=H.F("J")
C.a9=H.F("w")
C.aa=H.F("jI")
C.ab=H.F("jJ")
C.ac=H.F("ms")
C.ad=H.F("jK")
C.ae=H.F("aG")
C.af=H.F("S")
C.ag=H.F("v")
C.ah=H.F("a_")})();(function staticFields(){$.jr="$cachedFunction"
$.js="$cachedInvocation"
$.j8=null
$.j6=null
$.iF=!1
$.iK=null
$.jW=null
$.kb=null
$.hG=null
$.hP=null
$.iL=null
$.aU=null
$.bw=null
$.bx=null
$.iG=!1
$.z=C.f
$.jd=0
$.lY=0
$.lZ=0
$.iO=0
$.k6=0
$.bB=0
$.bC=0
$.mk=!1
$.k0=0})();(function lazyInitializers(){lazy($,"jc","$get$jc",function(){return H.k2("_$dart_dartClosure")})
lazy($,"im","$get$im",function(){return H.k2("_$dart_js")})
lazy($,"ji","$get$ji",function(){return H.lg()})
lazy($,"jj","$get$jj",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.jd
$.jd=t+1
t="expando$key$"+t}return new P.dK(t,null,[P.v])})
lazy($,"jx","$get$jx",function(){return H.a8(H.fG({
toString:function(){return"$receiver$"}}))})
lazy($,"jy","$get$jy",function(){return H.a8(H.fG({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"jz","$get$jz",function(){return H.a8(H.fG(null))})
lazy($,"jA","$get$jA",function(){return H.a8(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jE","$get$jE",function(){return H.a8(H.fG(void 0))})
lazy($,"jF","$get$jF",function(){return H.a8(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jC","$get$jC",function(){return H.a8(H.jD(null))})
lazy($,"jB","$get$jB",function(){return H.a8(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"jH","$get$jH",function(){return H.a8(H.jD(void 0))})
lazy($,"jG","$get$jG",function(){return H.a8(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"iC","$get$iC",function(){return P.lE()})
lazy($,"by","$get$by",function(){return[]})
lazy($,"hF","$get$hF",function(){return P.jl(P.v,P.aG)})
lazy($,"bA","$get$bA",function(){return P.jl(P.w,P.aG)})
lazy($,"iv","$get$iv",function(){return new G.cn(1281,0,4294967295)})
lazy($,"j4","$get$j4",function(){return G.jw(1281,1281,1281)})
lazy($,"j3","$get$j3",function(){return G.jw(32774,770,769)})
lazy($,"P","$get$P",function(){return P.aw(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColors",C.y,"aColorAlpha",C.O,"aPosition",C.w,"aTexUV",C.V,"aNormal",C.Y,"aBinormal",C.N,"aCenter",C.x,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a_,"aBitangent",C.L,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.y,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.w,"vPositionFromLight",C.M,"vCenter",C.x,"vDepth",C.T,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.z,"uConvolutionMatrix",C.z,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.Z,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.X,"uAnimationTable",C.h,"uTime",C.W,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.Q,"uLightDescs",C.R,"uLightCount",C.e,"uLightTypes",C.S,"uBumpScale",C.U,"uNormalScale",C.P])})
lazy($,"jM","$get$jM",function(){return C.A})
lazy($,"jb","$get$jb",function(){return T.O(0,0,1)})
lazy($,"ke","$get$ke",function(){var t=G.fg("SolidColor")
t.ba(["aPosition"])
t.am(["uPerspectiveViewMatrix","uModelMatrix"])
t.an(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"kd","$get$kd",function(){var t=G.fg("SolidColorF")
t.am(["uColor"])
t.an(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"ka","$get$ka",function(){var t=G.fg("PointSpritesV")
t.ba(["aPosition"])
t.am(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.an(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"k9","$get$k9",function(){var t=G.fg("PointSpritesF")
t.am(["uTexture"])
t.an(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return t})
lazy($,"jf","$get$jf",function(){return[G.C(0,11,5),G.C(0,5,1),G.C(0,1,7),G.C(0,7,10),G.C(0,10,11),G.C(1,5,9),G.C(5,11,4),G.C(11,10,2),G.C(10,7,6),G.C(7,1,8),G.C(3,9,4),G.C(3,4,2),G.C(3,2,6),G.C(3,6,8),G.C(3,8,9),G.C(4,9,5),G.C(2,4,11),G.C(6,2,10),G.C(8,6,7),G.C(9,8,1)]})
lazy($,"kg","$get$kg",function(){return(1+P.ml(5))/2})
lazy($,"jg","$get$jg",function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=$.$get$kg()
s=T.O(-1,t,0)
s.B(0)
r=T.O(1,t,0)
r.B(0)
q=T.O(-1,-t,0)
q.B(0)
p=T.O(1,-t,0)
p.B(0)
o=T.O(0,-1,t)
o.B(0)
n=T.O(0,1,t)
n.B(0)
m=T.O(0,-1,-t)
m.B(0)
l=T.O(0,1,-t)
l.B(0)
k=T.O(t,0,-1)
k.B(0)
j=T.O(t,0,1)
j.B(0)
i=T.O(-t,0,-1)
i.B(0)
t=T.O(-t,0,1)
t.B(0)
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
mangledGlobalNames:{v:"int",S:"double",a_:"num",w:"String",aG:"bool",J:"Null",i:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,v:true,args:[P.B],opt:[P.aQ]},{func:1,v:true,args:[W.f]},{func:1,ret:P.v,args:[P.E,P.E]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,Blob:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMParser:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGNumber:J.a,SVGPreserveAspectRatio:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bb,ArrayBufferView:H.aP,DataView:H.eH,Float32Array:H.c4,Float64Array:H.eI,Int16Array:H.eJ,Int32Array:H.eK,Int8Array:H.eL,Uint16Array:H.eM,Uint32Array:H.eN,Uint8ClampedArray:H.c8,CanvasPixelArray:H.c8,Uint8Array:H.eO,HTMLAudioElement:W.h,HTMLBRElement:W.h,HTMLBaseElement:W.h,HTMLBodyElement:W.h,HTMLButtonElement:W.h,HTMLContentElement:W.h,HTMLDListElement:W.h,HTMLDataElement:W.h,HTMLDataListElement:W.h,HTMLDetailsElement:W.h,HTMLDialogElement:W.h,HTMLDivElement:W.h,HTMLEmbedElement:W.h,HTMLFieldSetElement:W.h,HTMLHRElement:W.h,HTMLHeadElement:W.h,HTMLHeadingElement:W.h,HTMLHtmlElement:W.h,HTMLIFrameElement:W.h,HTMLImageElement:W.h,HTMLInputElement:W.h,HTMLLIElement:W.h,HTMLLabelElement:W.h,HTMLLegendElement:W.h,HTMLLinkElement:W.h,HTMLMapElement:W.h,HTMLMediaElement:W.h,HTMLMenuElement:W.h,HTMLMetaElement:W.h,HTMLMeterElement:W.h,HTMLModElement:W.h,HTMLOListElement:W.h,HTMLObjectElement:W.h,HTMLOptGroupElement:W.h,HTMLOptionElement:W.h,HTMLOutputElement:W.h,HTMLParagraphElement:W.h,HTMLParamElement:W.h,HTMLPictureElement:W.h,HTMLPreElement:W.h,HTMLProgressElement:W.h,HTMLQuoteElement:W.h,HTMLScriptElement:W.h,HTMLShadowElement:W.h,HTMLSlotElement:W.h,HTMLSourceElement:W.h,HTMLSpanElement:W.h,HTMLStyleElement:W.h,HTMLTableCaptionElement:W.h,HTMLTableCellElement:W.h,HTMLTableDataCellElement:W.h,HTMLTableHeaderCellElement:W.h,HTMLTableColElement:W.h,HTMLTableElement:W.h,HTMLTableRowElement:W.h,HTMLTableSectionElement:W.h,HTMLTemplateElement:W.h,HTMLTextAreaElement:W.h,HTMLTimeElement:W.h,HTMLTitleElement:W.h,HTMLTrackElement:W.h,HTMLUListElement:W.h,HTMLUnknownElement:W.h,HTMLVideoElement:W.h,HTMLDirectoryElement:W.h,HTMLFontElement:W.h,HTMLFrameElement:W.h,HTMLFrameSetElement:W.h,HTMLMarqueeElement:W.h,HTMLElement:W.h,Accelerometer:W.bG,LinearAccelerationSensor:W.bG,AccessibleNodeList:W.dg,HTMLAnchorElement:W.dh,HTMLAreaElement:W.di,HTMLCanvasElement:W.bI,CanvasGradient:W.bJ,CanvasRenderingContext2D:W.bK,CDATASection:W.ao,CharacterData:W.ao,Comment:W.ao,ProcessingInstruction:W.ao,Text:W.ao,CSSPerspective:W.dr,CSSPositionValue:W.ds,CSSRotation:W.dt,CSSScale:W.du,CSSStyleDeclaration:W.b3,MSStyleCSSProperties:W.b3,CSS2Properties:W.b3,CSSImageValue:W.U,CSSKeywordValue:W.U,CSSNumericValue:W.U,CSSResourceValue:W.U,CSSUnitValue:W.U,CSSURLImageValue:W.U,CSSStyleValue:W.U,CSSMatrixComponent:W.aJ,CSSSkew:W.aJ,CSSTransformComponent:W.aJ,CSSTransformValue:W.dw,CSSTranslation:W.dx,CSSUnparsedValue:W.dy,DataTransferItemList:W.dA,DeviceAcceleration:W.dB,XMLDocument:W.b5,Document:W.b5,DOMException:W.dC,DOMMatrix:W.dD,DOMMatrixReadOnly:W.bN,DOMPoint:W.dE,DOMPointReadOnly:W.bO,ClientRectList:W.bP,DOMRectList:W.bP,DOMRectReadOnly:W.bQ,DOMStringList:W.dF,DOMTokenList:W.dG,Element:W.bR,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,AccessibleNode:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RemotePlayback:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SourceBuffer:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,TextTrack:W.d,TextTrackCue:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,VTTCue:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,ServiceWorker:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,FileList:W.e2,FileWriter:W.e3,HTMLFormElement:W.e8,Gyroscope:W.ec,History:W.ed,HTMLCollection:W.b6,HTMLFormControlsCollection:W.b6,HTMLOptionsCollection:W.b6,HTMLDocument:W.bW,XMLHttpRequest:W.ee,XMLHttpRequestUpload:W.b7,XMLHttpRequestEventTarget:W.b7,KeyboardEvent:W.av,Location:W.ev,Magnetometer:W.ew,MediaList:W.eC,MIDIOutput:W.eE,MIDIInput:W.ba,MIDIPort:W.ba,MimeTypeArray:W.eF,PointerEvent:W.I,MouseEvent:W.I,DragEvent:W.I,DocumentFragment:W.x,ShadowRoot:W.x,Attr:W.x,DocumentType:W.x,Node:W.x,NodeList:W.c9,RadioNodeList:W.c9,Plugin:W.a6,PluginArray:W.f_,PresentationConnection:W.f2,RTCDataChannel:W.ce,DataChannel:W.ce,HTMLSelectElement:W.fc,AbsoluteOrientationSensor:W.ag,AmbientLightSensor:W.ag,OrientationSensor:W.ag,RelativeOrientationSensor:W.ag,Sensor:W.ag,SourceBufferList:W.fh,SpeechGrammarList:W.fj,SpeechRecognitionResult:W.a7,Storage:W.fm,TextTrackCueList:W.fv,TextTrackList:W.fw,TimeRanges:W.fy,TouchEvent:W.az,TouchList:W.fC,TrackDefaultList:W.fD,CompositionEvent:W.aA,FocusEvent:W.aA,TextEvent:W.aA,UIEvent:W.aA,URL:W.fL,VRStageBoundsPoint:W.fN,VideoTrackList:W.fO,WebSocket:W.fP,WheelEvent:W.aC,Window:W.bk,DOMWindow:W.bk,CSSRuleList:W.fY,DOMRect:W.fZ,GamepadList:W.he,NamedNodeMap:W.cF,MozNamedAttrMap:W.cF,SpeechRecognitionResultList:W.hu,StyleSheetList:W.hv,SVGFEBlendElement:P.dL,SVGFEColorMatrixElement:P.dM,SVGFEComponentTransferElement:P.dN,SVGFECompositeElement:P.dO,SVGFEConvolveMatrixElement:P.dP,SVGFEDiffuseLightingElement:P.dQ,SVGFEDisplacementMapElement:P.dR,SVGFEFloodElement:P.dS,SVGFEGaussianBlurElement:P.dT,SVGFEImageElement:P.dU,SVGFEMergeElement:P.dV,SVGFEMorphologyElement:P.dW,SVGFEOffsetElement:P.dX,SVGFEPointLightElement:P.dY,SVGFESpecularLightingElement:P.dZ,SVGFESpotLightElement:P.e_,SVGFETileElement:P.e0,SVGFETurbulenceElement:P.e1,SVGFilterElement:P.e4,SVGForeignObjectElement:P.e7,SVGCircleElement:P.V,SVGEllipseElement:P.V,SVGLineElement:P.V,SVGPathElement:P.V,SVGPolygonElement:P.V,SVGPolylineElement:P.V,SVGGeometryElement:P.V,SVGAElement:P.a3,SVGClipPathElement:P.a3,SVGDefsElement:P.a3,SVGGElement:P.a3,SVGSwitchElement:P.a3,SVGGraphicsElement:P.a3,SVGImageElement:P.ef,SVGLengthList:P.eq,SVGMaskElement:P.eA,SVGMatrix:P.eB,SVGNumberList:P.eQ,SVGPatternElement:P.eX,SVGPoint:P.f0,SVGPointList:P.f1,SVGRect:P.f4,SVGRectElement:P.f5,SVGStringList:P.fs,SVGAnimateElement:P.t,SVGAnimateMotionElement:P.t,SVGAnimateTransformElement:P.t,SVGAnimationElement:P.t,SVGDescElement:P.t,SVGDiscardElement:P.t,SVGFEDistantLightElement:P.t,SVGFEFuncAElement:P.t,SVGFEFuncBElement:P.t,SVGFEFuncGElement:P.t,SVGFEFuncRElement:P.t,SVGFEMergeNodeElement:P.t,SVGLinearGradientElement:P.t,SVGMarkerElement:P.t,SVGMetadataElement:P.t,SVGRadialGradientElement:P.t,SVGScriptElement:P.t,SVGSetElement:P.t,SVGStopElement:P.t,SVGStyleElement:P.t,SVGSymbolElement:P.t,SVGTitleElement:P.t,SVGViewElement:P.t,SVGGradientElement:P.t,SVGComponentTransferFunctionElement:P.t,SVGFEDropShadowElement:P.t,SVGMPathElement:P.t,SVGElement:P.t,SVGSVGElement:P.ft,SVGTextPathElement:P.bh,SVGTextContentElement:P.bh,SVGTSpanElement:P.bi,SVGTextElement:P.bi,SVGTextPositioningElement:P.bi,SVGTransformList:P.fE,SVGUseElement:P.fM,AudioBuffer:P.dk,AudioTrackList:P.dl,AudioContext:P.aI,webkitAudioContext:P.aI,BaseAudioContext:P.aI,OfflineAudioContext:P.eR,WebGLRenderingContext:P.f9,WebGL2RenderingContext:P.fa,SQLResultSetRowList:P.fk})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,Blob:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMParser:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,File:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGNumber:true,SVGPreserveAspectRatio:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,Accelerometer:true,LinearAccelerationSensor:true,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSPositionValue:true,CSSRotation:true,CSSScale:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSSkew:true,CSSTransformComponent:false,CSSTransformValue:true,CSSTranslation:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceAcceleration:true,XMLDocument:true,Document:false,DOMException:true,DOMMatrix:true,DOMMatrixReadOnly:false,DOMPoint:true,DOMPointReadOnly:false,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AccessibleNode:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,Gyroscope:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,KeyboardEvent:true,Location:true,Magnetometer:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,AbsoluteOrientationSensor:true,AmbientLightSensor:true,OrientationSensor:true,RelativeOrientationSensor:true,Sensor:false,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VRStageBoundsPoint:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLengthList:true,SVGMaskElement:true,SVGMatrix:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGStringList:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMetadataElement:true,SVGRadialGradientElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransformList:true,SVGUseElement:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.c5.$nativeSuperclassTag="ArrayBufferView"
H.bn.$nativeSuperclassTag="ArrayBufferView"
H.bo.$nativeSuperclassTag="ArrayBufferView"
H.c6.$nativeSuperclassTag="ArrayBufferView"
H.bp.$nativeSuperclassTag="ArrayBufferView"
H.bq.$nativeSuperclassTag="ArrayBufferView"
H.c7.$nativeSuperclassTag="ArrayBufferView"
W.br.$nativeSuperclassTag="EventTarget"
W.bs.$nativeSuperclassTag="EventTarget"
W.bt.$nativeSuperclassTag="EventTarget"
W.bu.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.kf(V.k7(),b)},[])
else (function(b){H.kf(V.k7(),b)})([])})})()