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
a[c]=function(){a[c]=function(){H.om(b)}
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
return d?function(e){if(t===null)t=H.k0(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.k0(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.k0(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={jB:function jB(a){this.a=a},
jI:function(a,b,c,d){if(!!J.q(a).$isk)return new H.el(a,b,[c,d])
return new H.cr(a,b,[c,d])},
f0:function(){return new P.b6("No element")},
n8:function(){return new P.b6("Too many elements")},
n7:function(){return new P.b6("Too few elements")},
np:function(a,b){H.cG(a,0,J.ab(a)-1,b)},
cG:function(a,b,c,d){if(c-b<=32)H.no(a,b,c,d)
else H.nn(a,b,c,d)},
no:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.x(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.aa(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.k(a,q,s.h(a,p))
q=p}s.k(a,q,r)}},
nn:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.G(t+1,6)
r=a3+s
q=a4-s
p=C.b.G(a3+a4,2)
o=p-s
n=p+s
t=J.x(a2)
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
j=h}t.k(a2,r,m)
t.k(a2,p,k)
t.k(a2,q,i)
t.k(a2,o,t.h(a2,a3))
t.k(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.F(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
c=a5.$2(d,l)
if(c===0)continue
if(c<0){if(e!==g){t.k(a2,e,t.h(a2,g))
t.k(a2,g,d)}++g}else for(;!0;){c=a5.$2(t.h(a2,f),l)
if(c>0){--f
continue}else{b=f-1
if(c<0){t.k(a2,e,t.h(a2,g))
a=g+1
t.k(a2,g,t.h(a2,f))
t.k(a2,f,d)
f=b
g=a
break}else{t.k(a2,e,t.h(a2,f))
t.k(a2,f,d)
f=b
break}}}}a0=!0}else{for(e=g;e<=f;++e){d=t.h(a2,e)
if(a5.$2(d,l)<0){if(e!==g){t.k(a2,e,t.h(a2,g))
t.k(a2,g,d)}++g}else if(a5.$2(d,j)>0)for(;!0;)if(a5.$2(t.h(a2,f),j)>0){--f
if(f<e)break
continue}else{b=f-1
if(a5.$2(t.h(a2,f),l)<0){t.k(a2,e,t.h(a2,g))
a=g+1
t.k(a2,g,t.h(a2,f))
t.k(a2,f,d)
g=a}else{t.k(a2,e,t.h(a2,f))
t.k(a2,f,d)}f=b
break}}a0=!1}a1=g-1
t.k(a2,a3,t.h(a2,a1))
t.k(a2,a1,l)
a1=f+1
t.k(a2,a4,t.h(a2,a1))
t.k(a2,a1,j)
H.cG(a2,a3,g-2,a5)
H.cG(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.F(a5.$2(t.h(a2,g),l),0);)++g
for(;J.F(a5.$2(t.h(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=t.h(a2,e)
if(a5.$2(d,l)===0){if(e!==g){t.k(a2,e,t.h(a2,g))
t.k(a2,g,d)}++g}else if(a5.$2(d,j)===0)for(;!0;)if(a5.$2(t.h(a2,f),j)===0){--f
if(f<e)break
continue}else{b=f-1
if(a5.$2(t.h(a2,f),l)<0){t.k(a2,e,t.h(a2,g))
a=g+1
t.k(a2,g,t.h(a2,f))
t.k(a2,f,d)
g=a}else{t.k(a2,e,t.h(a2,f))
t.k(a2,f,d)}f=b
break}}H.cG(a2,g,f,a5)}else H.cG(a2,g,f,a5)},
k:function k(){},
aI:function aI(){},
cq:function cq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cr:function cr(a,b,c){this.a=a
this.b=b
this.$ti=c},
el:function el(a,b,c){this.a=a
this.b=b
this.$ti=c},
fg:function fg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
br:function br(a,b,c){this.a=a
this.b=b
this.$ti=c},
cV:function cV(a,b,c){this.a=a
this.b=b
this.$ti=c},
hF:function hF(a,b,c){this.a=a
this.b=b
this.$ti=c},
b_:function b_(){},
dK:function(a,b){var t=a.an(b)
if(!u.globalState.d.cy)u.globalState.f.as()
return t},
iR:function(){++u.globalState.f.b},
j4:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
lP:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.q(s).$ish)throw H.c(P.js("Arguments to main must be a List: "+H.d(s)))
u.globalState=new H.ip(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$kK()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hW(P.jH(null,H.aR),0)
q=P.y
s.sfi(new H.ae(0,null,null,null,null,null,0,[q,H.b8]))
s.sfm(new H.ae(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.io()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.n2,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.nF)}if(u.globalState.x)return
o=H.lm()
u.globalState.e=o
u.globalState.z.k(0,o.a,o)
u.globalState.d=o
if(H.bf(a,{func:1,args:[P.P]}))o.an(new H.jf(t,a))
else if(H.bf(a,{func:1,args:[P.P,P.P]}))o.an(new H.jg(t,a))
else o.an(a)
u.globalState.f.as()},
nF:function(a){var t=P.ar(["command","print","msg",a])
return new H.a5(!0,P.b9(null,P.y)).M(t)},
lm:function(){var t,s
t=u.globalState.a++
s=P.y
t=new H.b8(t,new H.ae(0,null,null,null,null,null,0,[s,H.cD]),P.aH(null,null,null,s),u.createNewIsolate(),new H.cD(0,null,!1),new H.ax(H.lM()),new H.ax(H.lM()),!1,!1,[],P.aH(null,null,null,null),null,null,!1,!0,P.aH(null,null,null,null))
t.dV()
return t},
n4:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.n5()
return},
n5:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.t("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.t('Cannot extract URI from "'+t+'"'))},
n2:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.aQ(!0,[]).a_(b.data)
s=J.x(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.o9(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aQ(!0,[]).a_(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aQ(!0,[]).a_(s.h(t,"replyTo"))
k=H.lm()
u.globalState.f.a.X(0,new H.aR(k,new H.eY(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.as()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.mr(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.as()
break
case"close":u.globalState.ch.ar(0,$.$get$kL().h(0,a))
a.terminate()
u.globalState.f.as()
break
case"log":H.n1(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.ar(["command","print","msg",t])
j=new H.a5(!0,P.b9(null,P.y)).M(j)
s.toString
self.postMessage(j)}else P.I(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
n1:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.ar(["command","log","msg",a])
r=new H.a5(!0,P.b9(null,P.y)).M(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.L(q)
t=H.am(q)
s=P.cf(t)
throw H.c(s)}},
n3:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kZ=$.kZ+("_"+s)
$.l_=$.l_+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.K(0,["spawned",new H.ba(s,r),q,t.r])
r=new H.eZ(t,d,a,c,b)
if(e){t.c4(q,q)
u.globalState.f.a.X(0,new H.aR(t,r,"start isolate"))}else r.$0()},
nq:function(a,b){var t=new H.hm(!0,!1,null,0)
t.dO(a,b)
return t},
nG:function(a){return new H.aQ(!0,[]).a_(new H.a5(!1,P.b9(null,P.y)).M(a))},
jf:function jf(a,b){this.a=a
this.b=b},
jg:function jg(a,b){this.a=a
this.b=b},
ip:function ip(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
b8:function b8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ig:function ig(a,b){this.a=a
this.b=b},
hW:function hW(a,b){this.a=a
this.b=b},
hX:function hX(a){this.a=a},
aR:function aR(a,b,c){this.a=a
this.b=b
this.c=c},
io:function io(){},
eY:function eY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eZ:function eZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hQ:function hQ(){},
ba:function ba(a,b){this.b=a
this.a=b},
iq:function iq(a,b){this.a=a
this.b=b},
bS:function bS(a,b,c){this.b=a
this.c=b
this.a=c},
cD:function cD(a,b,c){this.a=a
this.b=b
this.c=c},
hm:function hm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hn:function hn(a,b){this.a=a
this.b=b},
ho:function ho(a,b){this.a=a
this.b=b},
ax:function ax(a){this.a=a},
a5:function a5(a,b){this.a=a
this.b=b},
aQ:function aQ(a,b){this.a=a
this.b=b},
o3:function(a){return u.types[a]},
ob:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.q(a).$isu},
d:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bj(a)
if(typeof t!=="string")throw H.c(H.J(a))
return t},
nl:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.aq(t)
s=t[0]
r=t[1]
return new H.fQ(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aK:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
bw:function(a){var t,s,r,q,p,o,n,m,l
t=J.q(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.M||!!J.q(a).$isaO){p=C.z(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aP(q,0)===36)q=C.i.dk(q,1)
l=H.dM(H.iT(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
R:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ni:function(a){return a.b?H.R(a).getUTCFullYear()+0:H.R(a).getFullYear()+0},
ng:function(a){return a.b?H.R(a).getUTCMonth()+1:H.R(a).getMonth()+1},
nc:function(a){return a.b?H.R(a).getUTCDate()+0:H.R(a).getDate()+0},
nd:function(a){return a.b?H.R(a).getUTCHours()+0:H.R(a).getHours()+0},
nf:function(a){return a.b?H.R(a).getUTCMinutes()+0:H.R(a).getMinutes()+0},
nh:function(a){return a.b?H.R(a).getUTCSeconds()+0:H.R(a).getSeconds()+0},
ne:function(a){return a.b?H.R(a).getUTCMilliseconds()+0:H.R(a).getMilliseconds()+0},
kY:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.J(a))
return a[b]},
be:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a0(!0,b,"index",null)
t=J.ab(a)
if(b<0||C.b.bh(b,t))return P.D(b,a,"index",null,t)
return P.fN(b,"index",null)},
J:function(a){return new P.a0(!0,a,null,null)},
c:function(a){var t
if(a==null)a=new P.b3()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lQ})
t.name=""}else t.toString=H.lQ
return t},
lQ:function(){return J.bj(this.dartException)},
K:function(a){throw H.c(a)},
C:function(a){throw H.c(P.ac(a))},
ah:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hs(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
ht:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
la:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
kX:function(a,b){return new H.fy(a,b==null?null:b.method)},
jD:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.f4(a,s,t?null:b.receiver)},
L:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.jh(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.b0(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jD(H.d(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.kX(H.d(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$l4()
o=$.$get$l5()
n=$.$get$l6()
m=$.$get$l7()
l=$.$get$lb()
k=$.$get$lc()
j=$.$get$l9()
$.$get$l8()
i=$.$get$le()
h=$.$get$ld()
g=p.P(s)
if(g!=null)return t.$1(H.jD(s,g))
else{g=o.P(s)
if(g!=null){g.method="call"
return t.$1(H.jD(s,g))}else{g=n.P(s)
if(g==null){g=m.P(s)
if(g==null){g=l.P(s)
if(g==null){g=k.P(s)
if(g==null){g=j.P(s)
if(g==null){g=m.P(s)
if(g==null){g=i.P(s)
if(g==null){g=h.P(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.kX(s,g))}}return t.$1(new H.hx(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cJ()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.a0(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cJ()
return a},
am:function(a){var t
if(a==null)return new H.dp(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dp(a,null)},
of:function(a){if(a==null||typeof a!='object')return J.bi(a)
else return H.aK(a)},
o1:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.k(0,p,a[q])}return b},
oa:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dK(b,new H.j_(a))
case 1:return H.dK(b,new H.j0(a,d))
case 2:return H.dK(b,new H.j1(a,d,e))
case 3:return H.dK(b,new H.j2(a,d,e,f))
case 4:return H.dK(b,new H.j3(a,d,e,f,g))}throw H.c(P.cf("Unsupported number of arguments for wrapped closure"))},
aT:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.oa)
a.$identity=t
return t},
mJ:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.q(c).$ish){t.$reflectionInfo=c
r=H.nl(t).r}else r=c
q=d?Object.create(new H.h4().constructor.prototype):Object.create(new H.bk(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.kv(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.o3,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.ks:H.jv
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.kv(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
mG:function(a,b,c,d){var t=H.jv
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
kv:function(a,b,c){var t,s,r,q
if(c)return H.mI(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.mG(s,b==null?r!=null:b!==r,t,b)
return q},
mH:function(a,b,c,d){var t,s
t=H.jv
s=H.ks
switch(b?-1:a){case 0:throw H.c(H.nm("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
mI:function(a,b){var t,s,r,q
t=$.kt
if(t==null){t=H.kq("self")
$.kt=t}t=$.kr
if(t==null){t=H.kq("receiver")
$.kr=t}s=b.$stubName
r=b.length
q=a[s]
t=H.mH(r,b==null?q!=null:b!==q,s,b)
return t},
k0:function(a,b,c,d,e,f){var t,s
t=J.aq(b)
s=!!J.q(c).$ish?J.aq(c):c
return H.mJ(a,t,s,!!d,e,f)},
jv:function(a){return a.a},
ks:function(a){return a.c},
kq:function(a){var t,s,r,q,p
t=new H.bk("self","target","receiver","name")
s=J.aq(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
oC:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.ai(a,"String"))},
ox:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ai(a,"double"))},
oB:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ai(a,"num"))},
nV:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.ai(a,"bool"))},
o9:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.ai(a,"int"))},
oh:function(a,b){throw H.c(H.ai(a,b.substring(3)))},
og:function(a,b){var t=J.x(b)
throw H.c(H.ku(a,t.bw(b,3,t.gi(b))))},
k5:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.q(a)[b])return a
H.oh(a,b)},
an:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.q(a)[b]
else t=!0
if(t)return a
H.og(a,b)},
oA:function(a){if(a==null)return a
if(!!J.q(a).$ish)return a
throw H.c(H.ai(a,"List"))},
k1:function(a){var t=J.q(a)
return"$S" in t?t.$S():null},
bf:function(a,b){var t,s
if(a==null)return!1
t=H.k1(a)
if(t==null)s=!1
else s=H.lI(t,b)
return s},
oy:function(a,b){var t,s
if(a==null)return a
if($.jY)return a
$.jY=!0
try{if(H.bf(a,b))return a
t=H.j9(b,null)
s=H.ai(a,t)
throw H.c(s)}finally{$.jY=!1}},
ai:function(a,b){return new H.hu("TypeError: "+H.d(P.ce(a))+": type '"+H.ls(a)+"' is not a subtype of type '"+b+"'")},
ku:function(a,b){return new H.e0("CastError: "+H.d(P.ce(a))+": type '"+H.ls(a)+"' is not a subtype of type '"+b+"'")},
ls:function(a){var t
if(a instanceof H.az){t=H.k1(a)
if(t!=null)return H.j9(t,null)
return"Closure"}return H.bw(a)},
a_:function(a){if(!0===a)return!1
if(!!J.q(a).$isjz)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.ai(a,"bool"))},
a6:function(a){throw H.c(new H.hK(a))},
b:function(a){if(H.a_(a))throw H.c(P.mF(null))},
om:function(a){throw H.c(new P.eb(a))},
nm:function(a){return new H.fV(a)},
lM:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
lG:function(a){return u.getIsolateTag(a)},
H:function(a){return new H.au(a,null)},
v:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iT:function(a){if(a==null)return
return a.$ti},
lH:function(a,b){return H.k9(a["$as"+H.d(b)],H.iT(a))},
a7:function(a,b,c){var t,s
t=H.lH(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
a8:function(a,b){var t,s
t=H.iT(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
j9:function(a,b){var t=H.bh(a,b)
return t},
bh:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dM(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.d(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.bh(t,b)
return H.nJ(a,b)}return"unknown-reified-type"},
nJ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.bh(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.bh(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.bh(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.o0(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.bh(l[j],b)+(" "+H.d(j))}q+="}"}return"("+q+") => "+t},
dM:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.bA("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.bh(o,c)}return p?"":"<"+s.l(0)+">"},
iU:function(a){var t,s,r
if(a instanceof H.az){t=H.k1(a)
if(t!=null)return H.j9(t,null)}s=J.q(a).constructor.name
if(a==null)return s
r=H.dM(a.$ti,0,null)
return s+r},
k9:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.k6(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.k6(a,null,b)
return b},
bW:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iT(a)
s=J.q(a)
if(s[b]==null)return!1
return H.lz(H.k9(s[d],t),c)},
dN:function(a,b,c,d){var t,s
if(a==null)return a
t=H.bW(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dM(c,0,null)
throw H.c(H.ku(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
ou:function(a,b,c,d){var t,s
if(a==null)return a
t=H.bW(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dM(c,0,null)
throw H.c(H.ai(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
lz:function(a,b){var t,s,r,q,p
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
if(!H.Z(r,b[p]))return!1}return!0},
ov:function(a,b,c){return H.k6(a,b,H.lH(b,c))},
Z:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="P")return!0
if('func' in b)return H.lI(a,b)
if('func' in a)return b.name==="jz"||b.name==="E"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.j9(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.lz(H.k9(o,t),r)},
ly:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.Z(o,n)||H.Z(n,o)))return!1}return!0},
nR:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.aq(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.Z(p,o)||H.Z(o,p)))return!1}return!0},
lI:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.Z(t,s)||H.Z(s,t)))return!1}r=a.args
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
if(n===m){if(!H.ly(r,q,!1))return!1
if(!H.ly(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.Z(g,f)||H.Z(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.Z(g,f)||H.Z(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.Z(g,f)||H.Z(f,g)))return!1}}return H.nR(a.named,b.named)},
k6:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
oD:function(a){var t=$.k3
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
oz:function(a){return H.aK(a)},
ow:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oc:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.E))
t=$.k3.$1(a)
s=$.iQ[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iZ[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.lu.$2(a,t)
if(t!=null){s=$.iQ[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iZ[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.j8(r)
$.iQ[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iZ[t]=r
return r}if(p==="-"){o=H.j8(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lK(a,r)
if(p==="*")throw H.c(P.jQ(t))
if(u.leafTags[t]===true){o=H.j8(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lK(a,r)},
lK:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.k7(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
j8:function(a){return J.k7(a,!1,null,!!a.$isu)},
oe:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.j8(t)
else return J.k7(t,c,null,null)},
o7:function(){if(!0===$.k4)return
$.k4=!0
H.o8()},
o8:function(){var t,s,r,q,p,o,n,m
$.iQ=Object.create(null)
$.iZ=Object.create(null)
H.o6()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lL.$1(p)
if(o!=null){n=H.oe(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
o6:function(){var t,s,r,q,p,o,n
t=C.Q()
t=H.bd(C.N,H.bd(C.S,H.bd(C.y,H.bd(C.y,H.bd(C.R,H.bd(C.O,H.bd(C.P(C.z),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.k3=new H.iW(p)
$.lu=new H.iX(o)
$.lL=new H.iY(n)},
bd:function(a,b){return a(b)||b},
ol:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fQ:function fQ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hs:function hs(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fy:function fy(a,b){this.a=a
this.b=b},
f4:function f4(a,b,c){this.a=a
this.b=b
this.c=c},
hx:function hx(a){this.a=a},
jh:function jh(a){this.a=a},
dp:function dp(a,b){this.a=a
this.b=b},
j_:function j_(a){this.a=a},
j0:function j0(a,b){this.a=a
this.b=b},
j1:function j1(a,b,c){this.a=a
this.b=b
this.c=c},
j2:function j2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j3:function j3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
az:function az(){},
hh:function hh(){},
h4:function h4(){},
bk:function bk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hu:function hu(a){this.a=a},
e0:function e0(a){this.a=a},
fV:function fV(a){this.a=a},
hK:function hK(a){this.a=a},
au:function au(a,b){this.a=a
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
f3:function f3(a){this.a=a},
f8:function f8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f9:function f9(a,b){this.a=a
this.$ti=b},
fa:function fa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iW:function iW(a){this.a=a},
iX:function iX(a){this.a=a},
iY:function iY(a){this.a=a},
iI:function(a){var t,s,r
if(!!J.q(a).$isp)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
ak:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.be(b,a))},
bt:function bt(){},
b2:function b2(){},
fo:function fo(){},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
ct:function ct(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
cx:function cx(){},
fv:function fv(){},
bJ:function bJ(){},
bK:function bK(){},
bL:function bL(){},
bM:function bM(){},
o0:function(a){return J.aq(H.v(a?Object.keys(a):[],[null]))},
bg:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.co.prototype
return J.cn.prototype}if(typeof a=="string")return J.aE.prototype
if(a==null)return J.f2.prototype
if(typeof a=="boolean")return J.f1.prototype
if(a.constructor==Array)return J.aD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aF.prototype
return a}if(a instanceof P.E)return a
return J.iS(a)},
k7:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iS:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.k4==null){H.o7()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.jQ("Return interceptor for "+H.d(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jC()]
if(p!=null)return p
p=H.oc(a)
if(p!=null)return p
if(typeof a=="function")return C.T
s=Object.getPrototypeOf(a)
if(s==null)return C.C
if(s===Object.prototype)return C.C
if(typeof q=="function"){Object.defineProperty(q,$.$get$jC(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
aq:function(a){a.fixed$length=Array
return a},
x:function(a){if(typeof a=="string")return J.aE.prototype
if(a==null)return a
if(a.constructor==Array)return J.aD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aF.prototype
return a}if(a instanceof P.E)return a
return J.iS(a)},
aU:function(a){if(a==null)return a
if(a.constructor==Array)return J.aD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aF.prototype
return a}if(a instanceof P.E)return a
return J.iS(a)},
k2:function(a){if(typeof a=="number")return J.b0.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.aO.prototype
return a},
o2:function(a){if(typeof a=="number")return J.b0.prototype
if(typeof a=="string")return J.aE.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.aO.prototype
return a},
lF:function(a){if(typeof a=="string")return J.aE.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.aO.prototype
return a},
i:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aF.prototype
return a}if(a instanceof P.E)return a
return J.iS(a)},
F:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.q(a).w(a,b)},
aa:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.k2(a).R(a,b)},
lR:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.k2(a).I(a,b)},
ao:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ob(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.x(a).h(a,b)},
lS:function(a,b,c){return J.aU(a).k(a,b,c)},
lT:function(a,b,c,d){return J.i(a).dZ(a,b,c,d)},
ka:function(a,b){return J.lF(a).aP(a,b)},
lU:function(a,b){return J.i(a).ea(a,b)},
lV:function(a,b,c,d){return J.i(a).ec(a,b,c,d)},
ji:function(a,b){return J.i(a).el(a,b)},
lW:function(a,b,c){return J.i(a).em(a,b,c)},
kb:function(a,b){return J.i(a).c3(a,b)},
jj:function(a,b){return J.i(a).S(a,b)},
kc:function(a,b,c){return J.i(a).c6(a,b,c)},
lX:function(a,b){return J.i(a).eF(a,b)},
jk:function(a,b,c){return J.i(a).c7(a,b,c)},
lY:function(a,b,c){return J.i(a).c8(a,b,c)},
dO:function(a,b,c){return J.i(a).c9(a,b,c)},
dP:function(a,b){return J.i(a).eI(a,b)},
lZ:function(a,b){return J.i(a).ca(a,b)},
m_:function(a,b,c){return J.i(a).cb(a,b,c)},
kd:function(a,b,c,d){return J.i(a).cc(a,b,c,d)},
m0:function(a,b){return J.aU(a).cd(a,b)},
m1:function(a,b,c,d,e){return J.i(a).ce(a,b,c,d,e)},
m2:function(a,b){return J.o2(a).T(a,b)},
jl:function(a,b,c){return J.x(a).eN(a,b,c)},
jm:function(a){return J.i(a).cg(a)},
m3:function(a){return J.i(a).ci(a)},
m4:function(a){return J.i(a).ck(a)},
m5:function(a){return J.i(a).eS(a)},
m6:function(a,b){return J.i(a).cm(a,b)},
jn:function(a,b){return J.i(a).cn(a,b)},
m7:function(a,b,c,d){return J.i(a).co(a,b,c,d)},
m8:function(a,b,c,d,e){return J.i(a).f2(a,b,c,d,e)},
m9:function(a,b,c,d,e){return J.i(a).cp(a,b,c,d,e)},
ma:function(a,b,c,d,e,f){return J.i(a).f3(a,b,c,d,e,f)},
mb:function(a,b){return J.aU(a).t(a,b)},
dQ:function(a,b){return J.i(a).cq(a,b)},
mc:function(a,b){return J.i(a).cr(a,b)},
md:function(a){return J.i(a).f4(a)},
ke:function(a,b){return J.aU(a).a1(a,b)},
me:function(a){return J.i(a).geE(a)},
bi:function(a){return J.q(a).gv(a)},
av:function(a){return J.aU(a).gu(a)},
ab:function(a){return J.x(a).gi(a)},
mf:function(a){return J.i(a).gba(a)},
mg:function(a){return J.i(a).gbb(a)},
mh:function(a){return J.q(a).gD(a)},
mi:function(a){return J.i(a).gfC(a)},
mj:function(a){return J.i(a).gcF(a)},
mk:function(a){return J.i(a).gau(a)},
jo:function(a){return J.i(a).gm(a)},
jp:function(a){return J.i(a).gn(a)},
kf:function(a){return J.i(a).gH(a)},
jq:function(a,b){return J.i(a).ad(a,b)},
ml:function(a){return J.i(a).aJ(a)},
mm:function(a){return J.i(a).bj(a)},
mn:function(a,b){return J.i(a).bk(a,b)},
mo:function(a,b,c){return J.i(a).bl(a,b,c)},
kg:function(a,b,c){return J.i(a).bo(a,b,c)},
mp:function(a,b){return J.i(a).cv(a,b)},
mq:function(a,b){return J.aU(a).cz(a,b)},
kh:function(a){return J.aU(a).ft(a)},
mr:function(a,b){return J.i(a).K(a,b)},
ms:function(a,b,c,d){return J.i(a).bv(a,b,c,d)},
mt:function(a,b,c,d,e,f,g,h,i,j){return J.i(a).cG(a,b,c,d,e,f,g,h,i,j)},
mu:function(a,b,c,d){return J.i(a).cH(a,b,c,d)},
dR:function(a,b,c,d){return J.i(a).cI(a,b,c,d)},
N:function(a){return J.k2(a).fD(a)},
mv:function(a){return J.lF(a).fG(a)},
bj:function(a){return J.q(a).l(a)},
mw:function(a,b,c,d){return J.i(a).fI(a,b,c,d)},
mx:function(a,b,c){return J.i(a).cK(a,b,c)},
my:function(a,b,c){return J.i(a).cL(a,b,c)},
jr:function(a,b,c){return J.i(a).cM(a,b,c)},
mz:function(a,b,c){return J.i(a).cN(a,b,c)},
ki:function(a,b,c){return J.i(a).cO(a,b,c)},
kj:function(a,b,c){return J.i(a).cP(a,b,c)},
kk:function(a,b,c){return J.i(a).cQ(a,b,c)},
kl:function(a,b,c,d){return J.i(a).cR(a,b,c,d)},
km:function(a,b,c,d){return J.i(a).cS(a,b,c,d)},
mA:function(a,b){return J.i(a).cU(a,b)},
mB:function(a,b,c){return J.i(a).fJ(a,b,c)},
mC:function(a,b,c,d,e,f,g){return J.i(a).cW(a,b,c,d,e,f,g)},
mD:function(a,b,c,d,e){return J.i(a).cY(a,b,c,d,e)},
a:function a(){},
f1:function f1(){},
f2:function f2(){},
bp:function bp(){},
fI:function fI(){},
aO:function aO(){},
aF:function aF(){},
aD:function aD(a){this.$ti=a},
jA:function jA(a){this.$ti=a},
c0:function c0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b0:function b0(){},
co:function co(){},
cn:function cn(){},
aE:function aE(){}},P={
nt:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.nS()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.aT(new P.hM(t),1)).observe(s,{childList:true})
return new P.hL(t,s,r)}else if(self.setImmediate!=null)return P.nT()
return P.nU()},
nu:function(a){H.iR()
self.scheduleImmediate(H.aT(new P.hN(a),0))},
nv:function(a){H.iR()
self.setImmediate(H.aT(new P.hO(a),0))},
nw:function(a){P.jN(C.w,a)},
jN:function(a,b){var t=C.b.G(a.a,1000)
return H.nq(t<0?0:t,b)},
nN:function(a,b){if(H.bf(a,{func:1,args:[P.P,P.P]})){b.toString
return a}else{b.toString
return a}},
mW:function(a,b,c){var t
if(a==null)a=new P.b3()
t=$.z
if(t!==C.d)t.toString
t=new P.M(0,t,null,[c])
t.bO(a,b)
return t},
mX:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.M(0,$.z,null,[P.h])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eS(t,b,!1,s)
try{for(m=0,l=0;m<1;++m){q=a[m]
p=l
q.bf(new P.eR(t,p,s,b,!1),r)
l=++t.b}if(l===0){l=new P.M(0,$.z,null,[null])
l.bN(C.A)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.L(j)
n=H.am(j)
if(t.b===0||!1)return P.mW(o,n,null)
else{t.c=o
t.d=n}}return s},
lj:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.M))
H.b(b.a===0)
b.a=1
try{a.bf(new P.i4(b),new P.i5(b))}catch(r){t=H.L(r)
s=H.am(r)
P.oi(new P.i6(b,t,s))}},
i3:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.aC()
b.aO(a)
P.b7(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.bY(r)}},
b7:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.iJ(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.b7(t.a,b)}s=t.a
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
P.iJ(null,null,p,o,s)
return}s=$.z
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.z
H.b(l==null?s!=null:l!==s)
j=$.z
$.z=l
i=j}else i=null
s=b.c
if(s===8)new P.ib(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.ia(r,b,m).$0()}else if((s&2)!==0)new P.i9(t,r,b).$0()
if(i!=null){H.b(!0)
$.z=i}s=r.b
if(!!J.q(s).$isa3){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.aD(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.i3(s,o)
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
nL:function(){var t,s
for(;t=$.bb,t!=null;){$.bU=null
s=t.b
$.bb=s
if(s==null)$.bT=null
t.a.$0()}},
nQ:function(){$.jZ=!0
try{P.nL()}finally{$.bU=null
$.jZ=!1
if($.bb!=null)$.$get$jV().$1(P.lA())}},
lr:function(a){var t=new P.cW(a,null)
if($.bb==null){$.bT=t
$.bb=t
if(!$.jZ)$.$get$jV().$1(P.lA())}else{$.bT.b=t
$.bT=t}},
nP:function(a){var t,s,r
t=$.bb
if(t==null){P.lr(a)
$.bU=$.bT
return}s=new P.cW(a,null)
r=$.bU
if(r==null){s.b=t
$.bU=s
$.bb=s}else{s.b=r.b
r.b=s
$.bU=s
if(s.b==null)$.bT=s}},
oi:function(a){var t=$.z
if(C.d===t){P.bc(null,null,C.d,a)
return}t.toString
P.bc(null,null,t,t.b4(a))},
nr:function(a,b){var t=$.z
if(t===C.d){t.toString
return P.jN(a,b)}return P.jN(a,t.b4(b))},
jU:function(a){var t,s
H.b(a!=null)
t=$.z
H.b(a==null?t!=null:a!==t)
s=$.z
$.z=a
return s},
iJ:function(a,b,c,d,e){var t={}
t.a=d
P.nP(new P.iK(t,e))},
lp:function(a,b,c,d){var t,s
if($.z===c)return d.$0()
t=P.jU(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.z=s}},
lq:function(a,b,c,d,e){var t,s
if($.z===c)return d.$1(e)
t=P.jU(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.z=s}},
nO:function(a,b,c,d,e,f){var t,s
if($.z===c)return d.$2(e,f)
t=P.jU(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.z=s}},
bc:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.b4(d):c.eG(d)
P.lr(d)},
hM:function hM(a){this.a=a},
hL:function hL(a,b,c){this.a=a
this.b=b
this.c=c},
hN:function hN(a){this.a=a},
hO:function hO(a){this.a=a},
a3:function a3(){},
eS:function eS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eR:function eR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jw:function jw(){},
hR:function hR(){},
cX:function cX(a,b){this.a=a
this.$ti=b},
iC:function iC(a,b){this.a=a
this.$ti=b},
d6:function d6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
M:function M(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i0:function i0(a,b){this.a=a
this.b=b},
i8:function i8(a,b){this.a=a
this.b=b},
i4:function i4(a){this.a=a},
i5:function i5(a){this.a=a},
i6:function i6(a,b,c){this.a=a
this.b=b
this.c=c},
i2:function i2(a,b){this.a=a
this.b=b},
i7:function i7(a,b){this.a=a
this.b=b},
i1:function i1(a,b,c){this.a=a
this.b=b
this.c=c},
ib:function ib(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ic:function ic(a){this.a=a},
ia:function ia(a,b,c){this.a=a
this.b=b
this.c=c},
i9:function i9(a,b,c){this.a=a
this.b=b
this.c=c},
cW:function cW(a,b){this.a=a
this.b=b},
h9:function h9(){},
hb:function hb(a){this.a=a},
hc:function hc(a,b){this.a=a
this.b=b},
ha:function ha(){},
cL:function cL(){},
jM:function jM(){},
aV:function aV(a,b){this.a=a
this.b=b},
iG:function iG(){},
iK:function iK(a,b){this.a=a
this.b=b},
is:function is(){},
iu:function iu(a,b){this.a=a
this.b=b},
it:function it(a,b){this.a=a
this.b=b},
iv:function iv(a,b){this.a=a
this.b=b},
kN:function(a,b){return new H.ae(0,null,null,null,null,null,0,[a,b])},
U:function(){return new H.ae(0,null,null,null,null,null,0,[null,null])},
ar:function(a){return H.o1(a,new H.ae(0,null,null,null,null,null,0,[null,null]))},
b9:function(a,b){return new P.il(0,null,null,null,null,null,0,[a,b])},
aH:function(a,b,c,d){return new P.ij(0,null,null,null,null,null,0,[d])},
jX:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
n6:function(a,b,c){var t,s
if(P.k_(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bV()
C.a.j(s,a)
try{P.nK(a,t)}finally{H.b(C.a.gaH(s)===a)
s.pop()}s=P.l2(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
f_:function(a,b,c){var t,s,r
if(P.k_(a))return b+"..."+c
t=new P.bA(b)
s=$.$get$bV()
C.a.j(s,a)
try{r=t
r.a=P.l2(r.ga7(),a,", ")}finally{H.b(C.a.gaH(s)===a)
s.pop()}s=t
s.a=s.ga7()+c
s=t.ga7()
return s.charCodeAt(0)==0?s:s},
k_:function(a){var t,s
for(t=0;s=$.$get$bV(),t<s.length;++t)if(a===s[t])return!0
return!1},
nK:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gu(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.p())return
q=H.d(t.gq(t))
C.a.j(b,q)
s+=q.length+2;++r}if(!t.p()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gq(t);++r
if(!t.p()){if(r<=4){C.a.j(b,H.d(n))
return}p=H.d(n)
o=b.pop()
s+=p.length+2}else{m=t.gq(t);++r
H.b(r<100)
for(;t.p();n=m,m=l){l=t.gq(t);++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.j(b,"...")
return}}o=H.d(n)
p=H.d(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.j(b,k)
C.a.j(b,o)
C.a.j(b,p)},
jG:function(a,b){var t,s
t=P.aH(null,null,null,b)
for(s=J.av(a);s.p();)t.j(0,s.gq(s))
return t},
kT:function(a){var t,s,r
t={}
if(P.k_(a))return"{...}"
s=new P.bA("")
try{C.a.j($.$get$bV(),a)
r=s
r.a=r.ga7()+"{"
t.a=!0
J.ke(a,new P.ff(t,s))
t=s
t.a=t.ga7()+"}"}finally{t=$.$get$bV()
H.b(C.a.gaH(t)===a)
t.pop()}t=s.ga7()
return t.charCodeAt(0)==0?t:t},
jH:function(a,b){var t=new P.fb(null,0,0,0,[b])
t.dG(a,b)
return t},
il:function il(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
ij:function ij(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
ik:function ik(a,b,c){this.a=a
this.b=b
this.c=c},
bH:function bH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ie:function ie(){},
jF:function jF(){},
cp:function cp(){},
l:function l(){},
bq:function bq(){},
ff:function ff(a,b){this.a=a
this.b=b},
aJ:function aJ(){},
fb:function fb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
im:function im(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fY:function fY(){},
fX:function fX(){},
bI:function bI(){},
nM:function(a,b){var t,s,r,q
if(typeof a!=="string")throw H.c(H.J(a))
t=null
try{t=JSON.parse(a)}catch(r){s=H.L(r)
q=String(s)
throw H.c(new P.eP(q,null,null))}q=P.iH(t)
return q},
iH:function(a){var t
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.ih(a,Object.create(null),null)
for(t=0;t<a.length;++t)a[t]=P.iH(a[t])
return a},
ih:function ih(a,b,c){this.a=a
this.b=b
this.c=c},
ii:function ii(a){this.a=a},
c5:function c5(){},
c6:function c6(){},
f5:function f5(a,b){this.a=a
this.b=b},
f6:function f6(a){this.a=a},
mS:function(a){var t=J.q(a)
if(!!t.$isaz)return t.l(a)
return"Instance of '"+H.bw(a)+"'"},
kO:function(a,b,c){var t,s
t=H.v([],[c])
for(s=J.av(a);s.p();)C.a.j(t,s.gq(s))
if(b)return t
return J.aq(t)},
l2:function(a,b,c){var t=J.av(b)
if(!t.p())return a
if(c.length===0){do a+=H.d(t.gq(t))
while(t.p())}else{a+=H.d(t.gq(t))
for(;t.p();)a=a+c+H.d(t.gq(t))}return a},
mK:function(a,b){return J.m2(a,b)},
mN:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
mO:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c8:function(a){if(a>=10)return""+a
return"0"+a},
kF:function(a,b,c,d,e,f){return new P.aC(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
ce:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bj(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mS(a)},
mF:function(a){return new P.c1(a)},
js:function(a){return new P.a0(!1,null,null,a)},
jt:function(a,b,c){return new P.a0(!0,a,b,c)},
mE:function(a){return new P.a0(!1,null,a,"Must not be null")},
fN:function(a,b,c){return new P.cC(null,null,!0,a,b,"Value not in range")},
aL:function(a,b,c,d,e){return new P.cC(b,c,!0,a,d,"Invalid value")},
l0:function(a,b,c,d,e,f){if(C.b.R(0,a)||C.b.R(a,c))throw H.c(P.aL(a,0,c,"start",f))
if(b!=null){if(a>b||C.b.R(b,c))throw H.c(P.aL(b,a,c,"end",f))
return b}return c},
D:function(a,b,c,d,e){var t=e!=null?e:J.ab(b)
return new P.eX(b,t,!0,a,c,"Index out of range")},
t:function(a){return new P.hy(a)},
jQ:function(a){return new P.hw(a)},
cK:function(a){return new P.b6(a)},
ac:function(a){return new P.e2(a)},
cf:function(a){return new P.i_(a)},
I:function(a){H.bg(H.d(a))},
al:function al(){},
G:function G(){},
aA:function aA(a,b){this.a=a
this.b=b},
Y:function Y(){},
aC:function aC(a){this.a=a},
ej:function ej(){},
ek:function ek(){},
aZ:function aZ(){},
c1:function c1(a){this.a=a},
b3:function b3(){},
a0:function a0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cC:function cC(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eX:function eX(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hy:function hy(a){this.a=a},
hw:function hw(a){this.a=a},
b6:function b6(a){this.a=a},
e2:function e2(a){this.a=a},
cJ:function cJ(){},
eb:function eb(a){this.a=a},
jy:function jy(){},
i_:function i_(a){this.a=a},
eP:function eP(a,b,c){this.a=a
this.b=b
this.c=c},
en:function en(a,b,c){this.a=a
this.b=b
this.$ti=c},
y:function y(){},
Q:function Q(){},
cm:function cm(){},
h:function h(){},
b1:function b1(){},
P:function P(){},
a9:function a9(){},
E:function E(){},
b5:function b5(){},
m:function m(){},
bA:function bA(a){this.a=a},
jP:function jP(){},
iO:function(a){var t,s,r,q,p
if(a==null)return
t=P.U()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
t.k(0,p,a[p])}return t},
nY:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.ke(a,new P.iL(t))
return t},
nZ:function(a){var t,s
t=new P.M(0,$.z,null,[null])
s=new P.cX(t,[null])
a.then(H.aT(new P.iM(s),1))["catch"](H.aT(new P.iN(s),1))
return t},
kE:function(){var t=$.kD
if(t==null){t=J.jl(window.navigator.userAgent,"Opera",0)
$.kD=t}return t},
mP:function(){var t,s
t=$.kA
if(t!=null)return t
s=$.kB
if(s==null){s=J.jl(window.navigator.userAgent,"Firefox",0)
$.kB=s}if(s)t="-moz-"
else{s=$.kC
if(s==null){s=!P.kE()&&J.jl(window.navigator.userAgent,"Trident/",0)
$.kC=s}if(s)t="-ms-"
else t=P.kE()?"-o-":"-webkit-"}$.kA=t
return t},
hH:function hH(){},
hJ:function hJ(a,b){this.a=a
this.b=b},
iL:function iL(a){this.a=a},
hI:function hI(a,b,c){this.a=a
this.b=b
this.c=c},
iM:function iM(a){this.a=a},
iN:function iN(a){this.a=a},
hC:function hC(){},
ir:function ir(){},
V:function V(){},
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
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eK:function eK(){},
eN:function eN(){},
a4:function a4(){},
ad:function ad(){},
eW:function eW(){},
f7:function f7(){},
fh:function fh(){},
fz:function fz(){},
fG:function fG(){},
fK:function fK(){},
fL:function fL(){},
fO:function fO(){},
fP:function fP(){},
by:function by(){},
hd:function hd(){},
w:function w(){},
he:function he(){},
bC:function bC(){},
bD:function bD(){},
hr:function hr(){},
hA:function hA(){},
d9:function d9(){},
da:function da(){},
dg:function dg(){},
dh:function dh(){},
dr:function dr(){},
ds:function ds(){},
dx:function dx(){},
dy:function dy(){},
dW:function dW(){},
dX:function dX(){},
aW:function aW(){},
fA:function fA(){},
fT:function fT(){},
fU:function fU(){},
h3:function h3(){},
dm:function dm(){},
dn:function dn(){}},W={
mQ:function(a,b,c){var t,s
t=document.body
s=(t&&C.p).O(t,a,b,c)
s.toString
t=new H.cV(new W.S(s),new W.em(),[W.r])
return t.ga4(t)},
mR:function(a){return"wheel"},
bl:function(a){var t,s,r
t="element tag unavailable"
try{s=J.mi(a)
if(typeof s==="string")t=a.tagName}catch(r){H.L(r)}return t},
ny:function(a,b){return document.createElement(a)},
aS:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ln:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
X:function(a,b,c,d,e){var t=c==null?null:W.lt(new W.hZ(c))
t=new W.hY(0,a,b,t,!1,[e])
t.dT(a,b,c,!1,e)
return t},
lk:function(a){var t,s
t=document.createElement("a")
s=new W.iw(t,window.location)
s=new W.bG(s)
s.dU(a)
return s},
nC:function(a,b,c,d){return!0},
nD:function(a,b,c,d){var t,s,r,q,p
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
lo:function(){var t=P.m
t=new W.iD(P.jG(C.r,t),P.aH(null,null,null,t),P.aH(null,null,null,t),P.aH(null,null,null,t),null)
t.dX(null,new H.br(C.r,new W.iE(),[H.a8(C.r,0),null]),["TEMPLATE"],null)
return t},
nH:function(a){var t
if(a==null)return
if("postMessage" in a){t=W.nx(a)
if(!!J.q(t).$ise)return t
return}else return a},
nI:function(a){var t
if(!!J.q(a).$isaB)return a
t=new P.hI([],[],!1)
t.c=!0
return t.bg(a)},
nx:function(a){if(a===window)return a
else return new W.hT(a)},
lt:function(a){var t=$.z
if(t===C.d)return a
return t.eH(a)},
j:function j(){},
c_:function c_(){},
dS:function dS(){},
dT:function dT(){},
dV:function dV(){},
aw:function aw(){},
c4:function c4(){},
e_:function e_(){},
ay:function ay(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
aX:function aX(){},
e7:function e7(){},
a1:function a1(){},
aY:function aY(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
ec:function ec(){},
ed:function ed(){},
c9:function c9(){},
aB:function aB(){},
ee:function ee(){},
ca:function ca(){},
ef:function ef(){},
cb:function cb(){},
cc:function cc(){},
cd:function cd(){},
eg:function eg(){},
eh:function eh(){},
a2:function a2(){},
em:function em(){},
f:function f(){},
e:function e(){},
eI:function eI(){},
eJ:function eJ(){},
eO:function eO(){},
eU:function eU(){},
cj:function cj(){},
eV:function eV(){},
bm:function bm(){},
ck:function ck(){},
cl:function cl(){},
bn:function bn(){},
bo:function bo(){},
aG:function aG(){},
fd:function fd(){},
fe:function fe(){},
fj:function fj(){},
fl:function fl(){},
bs:function bs(){},
fm:function fm(){},
O:function O(){},
S:function S(a){this.a=a},
r:function r(){},
cy:function cy(){},
bv:function bv(){},
af:function af(){},
fJ:function fJ(){},
fM:function fM(){},
cB:function cB(){},
cF:function cF(){},
fW:function fW(){},
at:function at(){},
h0:function h0(){},
h2:function h2(){},
ag:function ag(){},
h7:function h7(){},
h8:function h8(a){this.a=a},
cN:function cN(){},
hf:function hf(){},
hg:function hg(){},
bB:function bB(){},
hi:function hi(){},
hj:function hj(){},
hl:function hl(){},
aM:function aM(){},
hp:function hp(){},
hq:function hq(){},
cT:function cT(){},
aN:function aN(){},
hz:function hz(){},
hB:function hB(){},
hD:function hD(){},
hE:function hE(){},
aP:function aP(){},
bF:function bF(){},
hG:function hG(a){this.a=a},
jT:function jT(){},
hS:function hS(){},
hU:function hU(){},
id:function id(){},
dd:function dd(){},
iz:function iz(){},
iA:function iA(){},
hP:function hP(){},
hV:function hV(a){this.a=a},
d3:function d3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
d2:function d2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hY:function hY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hZ:function hZ(a){this.a=a},
bG:function bG(a){this.a=a},
n:function n(){},
cA:function cA(a){this.a=a},
fx:function fx(a){this.a=a},
fw:function fw(a,b,c){this.a=a
this.b=b
this.c=c},
bN:function bN(){},
ix:function ix(){},
iy:function iy(){},
iD:function iD(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iE:function iE(){},
iB:function iB(){},
ch:function ch(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hT:function hT(a){this.a=a},
cz:function cz(){},
jJ:function jJ(){},
jS:function jS(){},
iw:function iw(a,b){this.a=a
this.b=b},
dz:function dz(a){this.a=a},
iF:function iF(a){this.a=a},
cY:function cY(){},
cZ:function cZ(){},
d_:function d_(){},
d0:function d0(){},
d1:function d1(){},
d4:function d4(){},
d5:function d5(){},
d7:function d7(){},
d8:function d8(){},
db:function db(){},
dc:function dc(){},
de:function de(){},
df:function df(){},
di:function di(){},
dj:function dj(){},
bO:function bO(){},
bP:function bP(){},
dk:function dk(){},
dl:function dl(){},
dq:function dq(){},
dt:function dt(){},
du:function du(){},
bQ:function bQ(){},
bR:function bR(){},
dv:function dv(){},
dw:function dw(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){}},B={
oj:function(a){var t,s
t=document
s=W.aG
W.X(t,"keydown",new B.ja(),!1,s)
W.X(t,"keyup",new B.jb(),!1,s)
if(!$.ok)W.X(t,"mousemove",new B.jc(),!1,W.O)
s=W.O
W.X(t,"mousedown",new B.jd(),!1,s)
W.X(t,"mouseup",new B.je(),!1,s)},
nb:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$iP()
r=$.$get$bX()
q=new T.B(new Float32Array(16))
q.J()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.fB(a,b,c,0,new T.o(t),-0.02,s,r,q,new T.o(p),new T.o(o),new T.o(n),new T.o(new Float32Array(3)),"camera:orbit",!1,!0)
t.dJ(a,b,c,d)
return t},
ja:function ja(){},
jb:function jb(){},
jc:function jc(){},
jd:function jd(){},
je:function je(){},
fB:function fB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fC:function fC(a){this.a=a},
fD:function fD(a){this.a=a},
fE:function fE(){},
fF:function fF(a){this.a=a},
od:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t={}
s=document
r=new R.h6(0,0,null,null,null,null)
r.dN(C.j.d1(s,"stats"),"blue","gray")
q=C.j.fs(s,"#webgl-canvas")
p=new G.e1(null,q)
o=(q&&C.J).d0(q,"webgl2",P.ar(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=o
if(o==null)H.K(P.cf('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+H.d(J.ml(o))
if($.lE>0)P.I("I: "+n)
J.m1(o,0,0,0,1)
J.dQ(o,2929)
m=B.nb(20,0,0,q)
o=new T.B(new Float32Array(16))
o.J()
n=new T.B(new Float32Array(16))
n.J()
l=new G.fH(m,50,1,0.1,1000,o,n,new T.B(new Float32Array(16)),P.U(),"perspective",!1,!0)
l.bH()
o=G.jL("animation",p,$.$get$lx(),$.$get$lw())
k=new A.b4(o,[l],[],"animation",!1,!0)
n=G.jL("solid",p,$.$get$lO(),$.$get$lN())
j=new A.b4(n,[l],[],"solid",!1,!0)
i=G.jL("demo",p,$.$get$lC(),$.$get$lB())
h=new A.b4(i,[l],[],"demo",!1,!0)
H.b(n.dE(o))
g=H.v([],[A.b4])
f=new R.cE(q,l,null,p,g,17664,0,0,0,0,"main",!1,!0)
f.dK("main",p,null)
f.cB(null)
W.X(window,"resize",f.gfw(),!1,W.f)
H.b(!0)
C.a.j(g,j)
H.b(!0)
C.a.j(g,k)
H.b(!0)
C.a.j(g,h)
e=G.kU("wire")
g=new T.o(new Float32Array(3))
g.W(1,1,0)
e.a6("uColor",g)
t.a=null
t.b=null
t.c=null
d=G.kU("mat")
c=P.ar(["idSkeleton",n,"idStatic",i,"idAnimation",o])
for(o=C.j.bi(s,"input"),n=o.length,b=0;b<o.length;o.length===n||(0,H.C)(o),++b){i=J.mf(o[b])
W.X(i.a,i.b,new B.j6(c),!1,H.a8(i,0))}for(o=C.j.bi(s,"input"),n=o.length,b=0;b<o.length;o.length===n||(0,H.C)(o),++b){a=o[b]
i=J.i(a)
H.bg("initialize inputs "+H.d(i.gfd(a)))
a0=C.j.e5(s,"Event")
J.lV(a0,"change",!0,!0)
i.f1(a,a0)}t.d=0
d.d.k(0,"uTime",0)
P.mX([D.na("../asset/knight/knight.js")],null,!1).be(new B.j7(t,k,d,h,p,j,e,new B.j5(t,m,f,r,d)))},
j6:function j6(a){this.a=a},
j5:function j5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
j7:function j7(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h}},L={
kn:function(a){var t,s,r
t=new Array(a)
t.fixed$length=Array
s=[T.B]
t=H.v(t,s)
r=new Array(a)
r.fixed$length=Array
s=new L.dU(t,H.v(r,s))
s.dz(a)
return s},
nk:function(a){var t,s,r,q,p
P.I("recomputing local transform")
t=a.length
s=new Array(t)
s.fixed$length=Array
r=H.v(s,[T.B])
for(q=0;q<t;++q){p=a[q]
s=p.e
if(s<0){s=new T.B(new Float32Array(16))
s.J()
s=s.F(0,p.b)
r[q]=s}else{s=r[s].F(0,p.b)
r[q]=s}p.c.b5(s)}},
jR:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new T.B(new Float32Array(16))
for(s=a.length,r=c.b,q=d.a,p=0;p<s;++p){o=a[p]
n=q[p]
m=o.e
if(m<0)n.J()
else n.C(q[m])
l=r[p]
if(l!=null){k=L.ju(l.f,e)
H.b(!0)
j=L.ju(l.b,e)
H.b(!0)
i=L.ju(l.d,e)
H.b(!0)
h=l.r[k]
t.br(l.c[j],l.e[i])
t.V(0,h)
n.a2(0,t)}else n.a2(0,o.b)}for(r=d.b,p=0;p<s;++p){n=r[p]
n.C(b)
n.a2(0,q[p])
n.a2(0,a[p].c)}},
mM:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k
t=a.length
s=L.kn(t)
r=d.length
q=new Float32Array(t*16*r)
for(t=d.length,r=s.b,p=r.length,o=0,n=0;n<d.length;d.length===t||(0,H.C)(d),++n){L.jR(a,b,c,s,d[n])
for(m=0;m<p;++m){l=r[m]
for(k=0;k<16;++k)q[o+k]=l.a[k]
o+=16}}return q},
ju:function(a,b){var t,s,r
for(t=a.length-1,s=0;s<t;s=r){r=s+1
if(b<a[r])return s}return 0},
c2:function c2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dU:function dU(a,b){this.a=a
this.b=b},
c3:function c3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
h_:function h_(a,b,c){this.a=a
this.b=b
this.c=c}},G={
ns:function(a){var t,s,r
t=H.v(a.split("\n"),[P.m])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.d(t[s])}return C.a.aa(t,"\n")},
li:function(a,b,c){var t,s,r,q
t=J.i(a)
s=t.cj(a,b)
t.bt(a,s,c)
t.cf(a,s)
r=t.bn(a,s,35713)
if(r!=null&&!r){q=t.bm(a,s)
P.I("E:Compilation failed:")
P.I("E:"+G.ns(c))
P.I("E:Failure:")
P.I(C.i.a3("E:",q))
throw H.c(q)}return s},
kU:function(a){var t=new G.fi(P.U(),a,!1,!0)
t.dH(a)
return t},
eL:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.jo(a[s])
b[t+1]=J.jp(a[s])
b[t+2]=J.kf(a[s])}return b},
mU:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.jo(a[s])
b[t+1]=J.jp(a[s])}return b},
mV:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.jo(a[s])
b[t+1]=J.jp(a[s])
b[t+2]=J.kf(a[s])
b[t+3]=J.mk(a[s])}return b},
mT:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.ao(a[s],0)
b[t+1]=J.ao(a[s],1)
b[t+2]=J.ao(a[s],2)
b[t+3]=J.ao(a[s],3)}return b},
kV:function(a,b,c,d){return new G.fk(b,J.m5(b.a),c,P.U(),d,null,0,-1,null,null,P.U(),"meshdata:"+a,!1,!0)},
nB:function(a,b){var t,s,r,q,p,o,n,m,l,k
for(t=a.e,s=t.gA(t),s=s.gu(s),r=b.x,q=[[P.h,P.y]],p=[P.Y],o=[T.W],n=[T.o],m=[T.aj];s.p();){l=s.gq(s)
if(!r.B(0,l)){l="Dropping unnecessary attribute: "+H.d(l)
if($.lE>0)H.bg("I: "+l)
continue}k=t.h(0,l)
switch($.$get$T().h(0,l).a){case"vec2":b.ag(l,G.mU(H.dN(k,"$ish",m,"$ash"),null),2)
break
case"vec3":b.ag(l,G.eL(H.dN(k,"$ish",n,"$ash"),null),3)
break
case"vec4":b.ag(l,G.mV(H.dN(k,"$ish",o,"$ash"),null),4)
break
case"float":b.ag(l,new Float32Array(H.iI(H.dN(k,"$ish",p,"$ash"))),1)
break
case"uvec4":b.ag(l,G.mT(H.dN(k,"$ish",q,"$ash"),null),4)
break
default:if(H.a_(!1))H.a6("unknown type for "+H.d(l)+" ["+J.mh(k[0]).l(0)+"] ["+new H.au(H.iU(k),null).l(0)+"] "+H.d(k))}}},
n9:function(a,b,c){var t,s,r,q
t=G.kV(a,b.d,1,b.e.x)
t.bz(G.eL(c,null))
s=new Array(c.length)
s.fixed$length=Array
r=H.v(s,[P.y])
for(s=c.length,q=0;q<s;++q)r[q]=q
t.by(r)
return t},
jL:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.aH(null,null,null,P.m)
s=c.b
r=d.b
q=c.f
p=J.m3(b.a)
o=G.li(b.a,35633,s)
J.kc(b.a,p,o)
n=G.li(b.a,35632,r)
J.kc(b.a,p,n)
if(q.length>0)J.mw(b.a,p,q,35980)
J.mp(b.a,p)
if(!J.mo(b.a,p,35714))H.K(J.mn(b.a,p))
t=new G.fS(b,c,d,p,P.jG(c.c,null),P.U(),P.U(),t,null,a,!1,!0)
t.dL(a,b,c,d)
return t},
bz:function(a){return new G.fZ(a,null,[],[],[],[],0,P.U())},
fn:function fn(){},
cU:function cU(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dZ:function dZ(){},
e1:function e1(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eG:function eG(a,b,c){this.a=a
this.b=b
this.c=c},
eH:function eH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eT:function eT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cR:function cR(a,b,c){this.a=a
this.b=b
this.c=c},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.c=c},
fi:function fi(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
fk:function fk(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fH:function fH(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
ei:function ei(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fS:function fS(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
fZ:function fZ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
h1:function h1(){},
hk:function hk(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bE:function bE(){},
hv:function hv(a,b,c,d,e,f,g,h){var _=this
_.f=a
_.r=b
_.x=c
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},R={
kp:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
t=[]
for(s=a.length,r=b.a,q=0;q<s;++q){p=a[q].e
if(p===-1)continue
o=r[q].a
n=o[14]
m=o[13]
l=o[12]
o=new Float32Array(3)
o[0]=l
o[1]=m
o[2]=n
k=new T.o(new Float32Array(3))
k.C(new T.o(o))
k.V(0,c)
C.a.j(t,k)
k=C.a.h(r,p).a
n=k[14]
m=k[13]
l=k[12]
o=new Float32Array(3)
o[0]=l
o[1]=m
o[2]=n
k=new T.o(new Float32Array(3))
k.C(new T.o(o))
k.V(0,c)
C.a.j(t,k)}return t},
dY:function dY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cE:function cE(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
_.c=m},
h5:function h5(){},
h6:function h6(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
kW:function(a,b){var t,s,r,q,p,o
t=new Float32Array(9)
s=new T.B(new Float32Array(16))
s.J()
r=new T.B(new Float32Array(16))
r.J()
q=new Float32Array(3)
p=new Float32Array(3)
o=new Float32Array(3)
t=new A.bu(null,null,[],new T.as(t),s,r,new T.o(q),new T.o(p),new T.o(o),new T.o(new Float32Array(3)),a,!1,!0)
t.dI(a,b)
return t},
lD:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
if(!b.c)return
t=b.dx
t.C(c)
s=b.d
t.a2(0,s)
r=b.ch
if(r!=null&&b.cx!=null){H.d(b)
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
p.b5(new T.as(o))
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
q.k(0,"uTransformationMatrix",s)
q.k(0,"uModelMatrix",t)
q.k(0,"uNormalMatrix",p)
C.a.j(e,r)
a.dC(b.cx,e,d)
e.pop()}for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.C)(s),++l)A.lD(a,s[l],t,d,e)},
bu:function bu(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
b4:function b4(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fR:function fR(){},
dL:function(a){var t,s
t=C.Y.f7(a,0,new A.iV())
s=536870911&t+(C.b.cZ(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iV:function iV(){}},D={
na:function(a){var t,s
t=new P.M(0,$.z,null,[null])
s=new XMLHttpRequest()
C.x.fp(s,"GET",a)
W.X(s,"loadend",new D.fc(new P.cX(t,[null]),s),!1,W.os)
C.x.K(s,"")
return t},
fc:function fc(a,b){this.a=a
this.b=b}},T={as:function as(a){this.a=a},B:function B(a){this.a=a},bx:function bx(a){this.a=a},aj:function aj(a){this.a=a},o:function o(a){this.a=a},W:function W(a){this.a=a}},Y={
nA:function(a){var t,s,r,q
t=J.x(a)
s=new Array(t.gi(a))
s.fixed$length=Array
r=H.v(s,[P.Y])
for(q=0;C.b.I(q,t.gi(a));++q){s=t.h(a,q)
if(typeof s==="number"&&Math.floor(s)===s)r[q]=J.N(t.h(a,q))
else{s=t.h(a,q)
if(typeof s==="number")r[q]=t.h(a,q)
else if(H.a_(!1))H.a6("bad numeric type ["+H.d(t.h(a,q))+"]")}}return r},
nE:function(a){var t,s,r,q
t=J.x(a)
s=new Array(t.gi(a))
s.fixed$length=Array
r=H.v(s,[P.y])
for(q=0;C.b.I(q,t.gi(a));++q)r[q]=t.h(a,q)
return r},
nz:function(a){var t,s,r,q,p
t=J.x(a)
s=t.h(a,"skinIndices")
r=t.h(a,"skinWeights")
if(s==null||J.ab(s)===0)return 0
t=C.c.G(J.ab(t.h(a,"vertices")),3)
q=J.x(s)
p=C.b.af(q.gi(s),t)
t*=p
H.b(t===q.gi(s))
H.b(t===J.ab(r))
H.b(p<=4)
P.I("Skin multiplier is "+p)
return p},
mZ:function(b2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
t=[]
s=Y.nz(b2)
r=J.x(b2)
q=Y.nE(r.h(b2,"faces"))
p=q.length
P.I("faces: "+p)
o=Y.kw(r.h(b2,"vertices"))
n=Y.kw(r.h(b2,"normals"))
m=s===0
l=m?null:Y.kx(s,r.h(b2,"skinIndices"))
k=m?null:Y.kx(s,Y.nA(r.h(b2,"skinWeights")))
if(k!=null)for(m=k.length,j=0;j<m;++j){i=k[j]
h=i.a
g=h[0]+h[1]+h[2]+h[3]
if(g<0.98||g>1.02)H.bg("bad vector: "+H.d(i))}f=Y.mL(J.ao(r.h(b2,"uvs"),0))
for(r=s>0,m=f.length>0,h=n.length>0,e=o.length,d=0;d<p;){c=d+1
b=q[d]
g=(b&1)===0?3:4
a=[]
for(d=c,a0=0;a0<g;++a0,d=c){c=d+1
C.a.j(a,q[d])}if((b&2)!==0){c=d+1
a1=q[d]
d=c}else a1=0
a2=[]
if((b&8)!==0)for(a0=0;a0<g;++a0,d=c){c=d+1
C.a.j(a2,C.a.h(f,q[d]))}a3=[]
if((b&16)!==0){c=d+1
a4=C.a.h(n,q[d])
for(a0=0;a0<g;++a0)C.a.j(a3,a4)
d=c}if((b&32)!==0)for(a0=0;a0<g;++a0,d=c){c=d+1
C.a.j(a3,C.a.h(n,q[d]))}a5=[]
if((b&64)!==0){H.b(!1)
c=d+1
a6=q[d]
for(a0=0;a0<g;++a0)C.a.j(a5,a6)
d=c}if((b&128)!==0){H.b(!1)
for(a0=0;a0<g;++a0,d=c){c=d+1
C.a.j(a5,q[d])}}for(;C.b.d2(t.length,a1);){a7=new G.eT(!1,[],[],[],P.U())
if(h)a7.ax("aNormal")
if(m)a7.ax("aTexUV")
if(r){a7.ax("aBoneIndex")
a7.ax("aBoneWeight")}C.a.j(t,a7)}a7=C.a.h(t,a1)
a8=[]
for(a9=a.length,j=0;j<a.length;a.length===a9||(0,H.C)(a),++j)C.a.j(a8,C.a.h(o,a[j]))
if(g===3)a7.du(a8)
else{H.b(g===4)
a7.dv(a8)}if(a2.length>0)a7.ds("aTexUV",a2)
if(a3.length>0)a7.dt("aNormal",a3)
if(r){H.b(e===l.length)
H.b(e===k.length)
b0=[]
b1=[]
for(a9=a.length,j=0;j<a.length;a.length===a9||(0,H.C)(a),++j){c=a[j]
C.a.j(b0,C.a.h(l,c))
C.a.j(b1,C.a.h(k,c))}a7.bx("aBoneIndex",b0)
a7.bx("aBoneWeight",b1)}}P.I("out: "+t.length+" "+t[0].l(0))
return t},
mY:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=J.x(a)
s=t.h(a,"animation")
r=J.x(s)
q=r.h(s,"hierarchy")
p=r.h(s,"name")
r=r.h(s,"length")
o=J.x(q)
n=new Array(o.gi(q))
n.fixed$length=Array
n=H.v(n,[L.c3])
m=o.gi(q)
t=J.ab(t.h(a,"bones"))
H.b(m==null?t==null:m===t)
for(l=0;C.b.I(l,o.gi(q));++l){k=[]
j=[]
i=[]
h=[]
g=[]
f=[]
for(t=J.av(J.ao(o.h(q,l),"keys"));t.p();){m=t.gq(t)
e=J.x(m)
d=J.N(e.h(m,"time"))
if(e.B(m,"pos")){C.a.j(k,d)
C.a.j(j,Y.kR(e.h(m,"pos")))}if(e.B(m,"scale")){C.a.j(g,d)
C.a.j(f,Y.kQ(e.h(m,"scl")))}if(e.B(m,"rot")){C.a.j(i,d)
C.a.j(h,Y.kP(e.h(m,"rot")))}}t=b[l]
c=new L.c3(t,k,j,i,h,g,f)
m=k.length
if(m===0){c.seg([0])
m=new Float32Array(3)
m[0]=0
m[1]=0
m[2]=0
c.seh([new T.o(m)])}m=c.d
if(m==null||m.length===0){c.sep([0])
m=new Float32Array(4)
m[0]=0
m[1]=0
m[2]=0
m[3]=1
c.seq([new T.bx(m)])}m=c.f
if(m==null||m.length===0){c.seu([0])
m=new Float32Array(3)
m[0]=1
m[1]=1
m[2]=1
c.sev([new T.o(m)])}H.b(c.d.length>0)
H.b(c.b.length>0)
H.b(c.f.length>0)
H.b(c.d.length===c.e.length)
H.b(c.b.length===c.c.length)
H.b(c.f.length===c.r.length)
t=t.d
H.b(n[t]==null)
n[t]=c}P.I("anim-bones: "+n.length)
return new L.h_(p,n,r)},
n_:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=J.x(a)
s=t.h(a,"metadata")
r=t.h(a,"bones")
t=new Array(J.ao(s,"bones"))
t.fixed$length=Array
q=H.v(t,[L.c2])
for(t=J.x(r),p=0;C.b.I(p,t.gi(r));++p){o=t.h(r,p)
n=J.x(o)
m=n.h(o,"name")
l=n.h(o,"parent")
k=Y.kQ(n.h(o,"scl"))
j=Y.kR(n.h(o,"pos"))
i=Y.kP(n.h(o,"rotq"))
h=new T.B(new Float32Array(16))
h.br(j,i)
h.V(0,k)
if(p!==0&&l<0)H.bg("found unusal root node "+p+" "+H.d(l))
n=new T.B(new Float32Array(16))
n.J()
H.b(C.b.R(p,l))
q[p]=new L.c2(m,h,n,p,l)}P.I("bones: "+q.length)
L.nk(q)
return q},
kw:function(a){var t,s,r,q,p,o,n,m
t=J.x(a)
s=new Array(C.b.G(t.gi(a),3))
s.fixed$length=Array
r=H.v(s,[T.o])
for(q=0;C.b.I(q,t.gi(a));q+=3){s=C.b.G(q,3)
p=J.N(t.h(a,q))
o=J.N(t.h(a,q+1))
n=J.N(t.h(a,q+2))
m=new Float32Array(3)
m[0]=p
m[1]=o
m[2]=n
r[s]=new T.o(m)}return r},
mL:function(a){var t,s,r,q,p,o,n
t=J.x(a)
s=new Array(C.b.G(t.gi(a),2))
s.fixed$length=Array
r=H.v(s,[T.aj])
for(q=0;C.b.I(q,t.gi(a));q+=2){s=C.b.G(q,2)
p=J.N(t.h(a,q))
o=J.N(t.h(a,q+1))
n=new Float32Array(2)
n[0]=p
n[1]=o
r[s]=new T.aj(n)}return r},
kx:function(a,b){var t,s,r,q,p,o
t=J.x(b)
s=new Array(C.b.af(t.gi(b),a))
s.fixed$length=Array
r=H.v(s,[T.W])
for(q=0,p=0;C.b.I(q,t.gi(b));q+=a,++p){s=new Float32Array(4)
for(o=0;o<a;++o)s[o]=J.N(t.h(b,q+o))
r[p]=new T.W(s)}return r},
kS:function(a){var t,s,r,q
t=J.x(a)
s=J.N(t.h(a,0))
r=J.N(t.h(a,1))
t=J.N(t.h(a,2))
q=new T.o(new Float32Array(3))
q.W(s,r,t)
return q},
kR:function(a){if(a==null)return new T.o(new Float32Array(3))
return Y.kS(a)},
kQ:function(a){var t
if(a==null){t=new T.o(new Float32Array(3))
t.W(1,1,1)
return t}return Y.kS(a)},
kP:function(a){var t,s,r,q,p
if(a==null){t=new Float32Array(4)
t[3]=1
return new T.bx(t)}t=J.x(a)
s=J.N(t.h(a,0))
r=J.N(t.h(a,1))
q=J.N(t.h(a,2))
t=J.N(t.h(a,3))
p=new T.bx(new Float32Array(4))
p.dh(s,r,q,t)
return p}}
var v=[C,H,J,P,W,B,L,G,R,A,D,T,Y]
setFunctionNamesIfNecessary(v)
var $={}
H.jB.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gv:function(a){return H.aK(a)},
l:function(a){return"Instance of '"+H.bw(a)+"'"},
gD:function(a){return new H.au(H.iU(a),null)}}
J.f1.prototype={
l:function(a){return String(a)},
gv:function(a){return a?519018:218159},
gD:function(a){return C.as},
$isal:1}
J.f2.prototype={
w:function(a,b){return null==b},
l:function(a){return"null"},
gv:function(a){return 0},
gD:function(a){return C.am},
$isP:1}
J.bp.prototype={
gv:function(a){return 0},
gD:function(a){return C.al},
l:function(a){return String(a)},
$iskM:1}
J.fI.prototype={}
J.aO.prototype={}
J.aF.prototype={
l:function(a){var t=a[$.$get$kz()]
return t==null?this.dn(a):J.bj(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjz:1}
J.aD.prototype={
j:function(a,b){if(!!a.fixed$length)H.K(P.t("add"))
a.push(b)},
N:function(a,b){var t,s,r,q,p
t=a.length
if(!!a.fixed$length)H.K(P.t("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.C)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.K(P.ac(a)))
a.push(q)}},
cz:function(a,b){return new H.br(a,b,[H.a8(a,0),null])},
aa:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.d(a[s])
return t.join(b)},
t:function(a,b){return this.h(a,b)},
gf5:function(a){if(a.length>0)return a[0]
throw H.c(H.f0())},
gaH:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.f0())},
bs:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.K(P.t("setRange"))
P.l0(b,c,a.length,null,null,null)
t=C.b.a5(c,b)
if(t===0)return
if(e<0)H.K(P.aL(e,0,null,"skipCount",null))
s=J.x(d)
if(C.b.R(e+t,s.gi(d)))throw H.c(H.n7())
if(C.b.I(e,b))for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
c5:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.c(P.ac(a))}return!1},
di:function(a,b){if(!!a.immutable$list)H.K(P.t("sort"))
H.np(a,P.o_())},
aK:function(a){return this.di(a,null)},
E:function(a,b){var t
for(t=0;t<a.length;++t)if(J.F(a[t],b))return!0
return!1},
l:function(a){return P.f_(a,"[","]")},
gu:function(a){return new J.c0(a,a.length,0,null,[H.a8(a,0)])},
gv:function(a){return H.aK(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.K(P.t("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.jt(b,"newLength",null))
if(b<0)throw H.c(P.aL(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.be(a,b))
if(b>=a.length||b<0)throw H.c(H.be(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.K(P.t("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.be(a,b))
if(b>=a.length||b<0)throw H.c(H.be(a,b))
a[b]=c},
$isp:1,
$asp:function(){},
$isk:1,
$ish:1}
J.jA.prototype={}
J.c0.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.C(t))
r=this.c
if(r>=s){this.sbJ(null)
return!1}this.sbJ(t[r]);++this.c
return!0},
sbJ:function(a){this.d=a}}
J.b0.prototype={
T:function(a,b){var t
if(typeof b!=="number")throw H.c(H.J(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaF(b)
if(this.gaF(a)===t)return 0
if(this.gaF(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaF:function(a){return a===0?1/a<0:a<0},
eJ:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.c(P.t(""+a+".ceil()"))},
f6:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.c(P.t(""+a+".floor()"))},
ab:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.t(""+a+".round()"))},
eK:function(a,b,c){if(this.T(b,c)>0)throw H.c(H.J(b))
if(this.T(a,b)<0)return b
if(this.T(a,c)>0)return c
return a},
fD:function(a){return a},
fH:function(a,b){var t
if(b>20)throw H.c(P.aL(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaF(a))return"-"+t
return t},
l:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
a3:function(a,b){if(typeof b!=="number")throw H.c(H.J(b))
return a+b},
a5:function(a,b){if(typeof b!=="number")throw H.c(H.J(b))
return a-b},
d_:function(a,b){if(typeof b!=="number")throw H.c(H.J(b))
return a/b},
F:function(a,b){if(typeof b!=="number")throw H.c(H.J(b))
return a*b},
bp:function(a,b){var t
if(typeof b!=="number")throw H.c(H.J(b))
t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
af:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.c1(a,b)},
G:function(a,b){return(a|0)===a?a/b|0:this.c1(a,b)},
c1:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.t("Result of truncating division is "+H.d(t)+": "+H.d(a)+" ~/ "+b))},
b0:function(a,b){var t
if(a>0)t=this.ew(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
ew:function(a,b){return b>31?0:a>>>b},
cZ:function(a,b){if(typeof b!=="number")throw H.c(H.J(b))
return(a&b)>>>0},
dr:function(a,b){if(typeof b!=="number")throw H.c(H.J(b))
return(a^b)>>>0},
I:function(a,b){if(typeof b!=="number")throw H.c(H.J(b))
return a<b},
R:function(a,b){if(typeof b!=="number")throw H.c(H.J(b))
return a>b},
d2:function(a,b){if(typeof b!=="number")throw H.c(H.J(b))
return a<=b},
bh:function(a,b){if(typeof b!=="number")throw H.c(H.J(b))
return a>=b},
gD:function(a){return C.av},
$isG:1,
$asG:function(){return[P.a9]},
$isY:1,
$isa9:1}
J.co.prototype={
gD:function(a){return C.au},
$isy:1}
J.cn.prototype={
gD:function(a){return C.at}}
J.aE.prototype={
aP:function(a,b){if(b>=a.length)throw H.c(H.be(a,b))
return a.charCodeAt(b)},
a3:function(a,b){if(typeof b!=="string")throw H.c(P.jt(b,null,null))
return a+b},
dj:function(a,b,c){var t
if(c>a.length)throw H.c(P.aL(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bu:function(a,b){return this.dj(a,b,0)},
bw:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.fN(b,null,null))
if(b>c)throw H.c(P.fN(b,null,null))
if(c>a.length)throw H.c(P.fN(c,null,null))
return a.substring(b,c)},
dk:function(a,b){return this.bw(a,b,null)},
fG:function(a){return a.toLowerCase()},
eN:function(a,b,c){if(c>a.length)throw H.c(P.aL(c,0,a.length,null,null))
return H.ol(a,b,c)},
T:function(a,b){var t
if(typeof b!=="string")throw H.c(H.J(b))
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
gD:function(a){return C.an},
gi:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.be(a,b))
return a[b]},
$isp:1,
$asp:function(){},
$isG:1,
$asG:function(){return[P.m]},
$ism:1}
H.k.prototype={}
H.aI.prototype={
gu:function(a){return new H.cq(this,this.gi(this),0,null,[H.a7(this,"aI",0)])},
aI:function(a,b){return this.dm(0,b)},
fF:function(a,b){var t,s
t=H.v([],[H.a7(this,"aI",0)])
C.a.si(t,this.gi(this))
for(s=0;C.b.I(s,this.gi(this));++s)t[s]=this.t(0,s)
return t},
fE:function(a){return this.fF(a,!0)}}
H.cq.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.x(t)
r=s.gi(t)
q=this.b
if(q==null?r!=null:q!==r)throw H.c(P.ac(t))
if(C.b.bh(this.c,r)){this.sai(null)
return!1}this.sai(s.t(t,this.c));++this.c
return!0},
sai:function(a){this.d=a}}
H.cr.prototype={
gu:function(a){return new H.fg(null,J.av(this.a),this.b,this.$ti)},
gi:function(a){return J.ab(this.a)},
$asQ:function(a,b){return[b]}}
H.el.prototype={$isk:1,
$ask:function(a,b){return[b]}}
H.fg.prototype={
p:function(){var t=this.b
if(t.p()){this.sai(this.c.$1(t.gq(t)))
return!0}this.sai(null)
return!1},
gq:function(a){return this.a},
sai:function(a){this.a=a},
$ascm:function(a,b){return[b]}}
H.br.prototype={
gi:function(a){return J.ab(this.a)},
t:function(a,b){return this.b.$1(J.mb(this.a,b))},
$ask:function(a,b){return[b]},
$asaI:function(a,b){return[b]},
$asQ:function(a,b){return[b]}}
H.cV.prototype={
gu:function(a){return new H.hF(J.av(this.a),this.b,this.$ti)}}
H.hF.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq(t)))return!0
return!1},
gq:function(a){var t=this.a
return t.gq(t)}}
H.b_.prototype={}
H.jf.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.jg.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.ip.prototype={
sfi:function(a){this.z=a},
sfm:function(a){this.ch=a}}
H.b8.prototype={
dV:function(){var t,s
t=this.e
s=t.a
this.c.j(0,s)
this.e_(s,t)},
c4:function(a,b){if(!this.f.w(0,a))return
if(this.Q.j(0,b)&&!this.y)this.y=!0
this.b3()},
fv:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.ar(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bW();++r.d}this.y=!1}this.b3()},
eA:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.q(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).j(r,a)
t=this.ch;(t&&C.a).j(t,b)},
fu:function(a){var t,s,r
if(this.ch==null)return
for(t=J.q(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.K(P.t("removeRange"))
P.l0(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
de:function(a,b){if(!this.r.w(0,a))return
this.db=b},
fb:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.K(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jH(null,null)
this.cx=t}t.X(0,new H.ig(a,c))},
fa:function(a,b){var t
if(!this.r.w(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aG()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jH(null,null)
this.cx=t}t.X(0,this.gfj())},
fc:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.I(a)
if(b!=null)P.I(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bj(a)
s[1]=b==null?null:b.l(0)
for(r=new P.bH(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.K(0,s)},
an:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.L(o)
p=H.am(o)
this.fc(q,p)
if(this.db){this.aG()
if(this===u.globalState.e)throw o}}finally{this.cy=H.nV(r)
u.globalState.d=H.k5(t,"$isb8")
if(t!=null)$=t.gfh()
if(this.cx!=null)for(;n=this.cx,!n.gaq(n);)this.cx.cA().$0()}return s},
cw:function(a){return this.b.h(0,a)},
e_:function(a,b){var t=this.b
if(t.B(0,a))throw H.c(P.cf("Registry: ports must be registered only once."))
t.k(0,a,b)},
b3:function(){var t=this.b
if(t.gi(t)-this.c.a>0||this.y||!this.x)u.globalState.z.k(0,this.a,this)
else this.aG()},
aG:function(){var t,s,r
t=this.cx
if(t!=null)t.Z(0)
for(t=this.b,s=t.gcV(t),s=s.gu(s);s.p();)s.gq(s).e1()
t.Z(0)
this.c.Z(0)
u.globalState.z.ar(0,this.a)
this.dx.Z(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].K(0,t[r+1])
this.ch=null}},
gfh:function(){return this.d},
geO:function(){return this.e}}
H.ig.prototype={
$0:function(){this.a.K(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hW.prototype={
eX:function(){var t=this.a
if(t.b===t.c)return
return t.cA()},
cE:function(){var t,s,r
t=this.eX()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.B(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gaq(s)}else s=!1
else s=!1
else s=!1
if(s)H.K(P.cf("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gaq(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.ar(["command","close"])
r=new H.a5(!0,P.b9(null,P.y)).M(r)
s.toString
self.postMessage(r)}return!1}t.fq()
return!0},
c_:function(){if(self.window!=null)new H.hX(this).$0()
else for(;this.cE(););},
as:function(){var t,s,r,q,p
if(!u.globalState.x)this.c_()
else try{this.c_()}catch(r){t=H.L(r)
s=H.am(r)
q=u.globalState.Q
p=P.ar(["command","error","msg",H.d(t)+"\n"+H.d(s)])
p=new H.a5(!0,P.b9(null,P.y)).M(p)
q.toString
self.postMessage(p)}}}
H.hX.prototype={
$0:function(){if(!this.a.cE())return
P.nr(C.w,this)},
$S:function(){return{func:1,v:true}}}
H.aR.prototype={
fq:function(){var t=this.a
if(t.y){C.a.j(t.z,this)
return}t.an(this.b)}}
H.io.prototype={}
H.eY.prototype={
$0:function(){H.n3(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eZ.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.bf(s,{func:1,args:[P.P,P.P]}))s.$2(this.e,this.d)
else if(H.bf(s,{func:1,args:[P.P]}))s.$1(this.e)
else s.$0()}t.b3()},
$S:function(){return{func:1,v:true}}}
H.hQ.prototype={}
H.ba.prototype={
K:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.nG(b)
if(t.geO()===s){s=J.x(r)
switch(s.h(r,0)){case"pause":t.c4(s.h(r,1),s.h(r,2))
break
case"resume":t.fv(s.h(r,1))
break
case"add-ondone":t.eA(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.fu(s.h(r,1))
break
case"set-errors-fatal":t.de(s.h(r,1),s.h(r,2))
break
case"ping":t.fb(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.fa(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.j(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ar(0,s)
break}return}u.globalState.f.a.X(0,new H.aR(t,new H.iq(this,r),"receive"))},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.ba){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gv:function(a){return this.b.a}}
H.iq.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dY(0,this.b)},
$S:function(){return{func:1}}}
H.bS.prototype={
K:function(a,b){var t,s,r
t=P.ar(["command","message","port",this,"msg",b])
s=new H.a5(!0,P.b9(null,P.y)).M(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bS){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gv:function(a){return C.b.dr((this.b<<16^this.a<<8)>>>0,this.c)}}
H.cD.prototype={
e1:function(){this.c=!0
this.b=null},
dY:function(a,b){if(this.c)return
this.b.$1(b)},
$isnj:1}
H.hm.prototype={
dO:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.X(0,new H.aR(s,new H.hn(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.iR()
this.c=self.setTimeout(H.aT(new H.ho(this,b),0),a)}else{H.b(a>0)
throw H.c(P.t("Timer greater than 0."))}}}
H.hn.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ho.prototype={
$0:function(){var t=this.a
t.c=null
H.j4()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ax.prototype={
gv:function(a){var t=this.a
t=C.b.b0(t,0)^C.b.G(t,4294967296)
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
H.a5.prototype={
M:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.k(0,a,t.gi(t))
t=J.q(a)
if(!!t.$isbt)return["buffer",a]
if(!!t.$isb2)return["typed",a]
if(!!t.$isp)return this.d9(a)
if(!!t.$isn0){r=this.gd6()
q=t.gA(a)
q=H.jI(q,r,H.a7(q,"Q",0),null)
q=P.kO(q,!0,H.a7(q,"Q",0))
t=t.gcV(a)
t=H.jI(t,r,H.a7(t,"Q",0),null)
return["map",q,P.kO(t,!0,H.a7(t,"Q",0))]}if(!!t.$iskM)return this.da(a)
if(!!t.$isa)this.cT(a)
if(!!t.$isnj)this.at(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isba)return this.dc(a)
if(!!t.$isbS)return this.dd(a)
if(!!t.$isaz){p=a.$static_name
if(p==null)this.at(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isax)return["capability",a.a]
if(!(a instanceof P.E))this.cT(a)
return["dart",u.classIdExtractor(a),this.d8(u.classFieldsExtractor(a))]},
at:function(a,b){throw H.c(P.t((b==null?"Can't transmit:":b)+" "+H.d(a)))},
cT:function(a){return this.at(a,null)},
d9:function(a){var t
H.b(typeof a!=="string")
t=this.d7(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.at(a,"Can't serialize indexable: ")},
d7:function(a){var t,s
t=[]
C.a.si(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.M(a[s])
return t},
d8:function(a){var t
for(t=0;t<a.length;++t)C.a.k(a,t,this.M(a[t]))
return a},
da:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.at(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.si(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.M(a[t[r]])
return["js-object",t,s]},
dd:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
dc:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aQ.prototype={
a_:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.js("Bad serialized message: "+H.d(a)))
switch(C.a.gf5(a)){case"ref":H.b(J.F(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.F(a[0],"buffer"))
t=a[1]
C.a.j(this.b,t)
return t
case"typed":H.b(J.F(a[0],"typed"))
t=a[1]
C.a.j(this.b,t)
return t
case"fixed":H.b(J.F(a[0],"fixed"))
t=a[1]
C.a.j(this.b,t)
return J.aq(H.v(this.am(t),[null]))
case"extendable":H.b(J.F(a[0],"extendable"))
t=a[1]
C.a.j(this.b,t)
return H.v(this.am(t),[null])
case"mutable":H.b(J.F(a[0],"mutable"))
t=a[1]
C.a.j(this.b,t)
return this.am(t)
case"const":H.b(J.F(a[0],"const"))
t=a[1]
C.a.j(this.b,t)
return J.aq(H.v(this.am(t),[null]))
case"map":return this.f_(a)
case"sendport":return this.f0(a)
case"raw sendport":H.b(J.F(a[0],"raw sendport"))
t=a[1]
C.a.j(this.b,t)
return t
case"js-object":return this.eZ(a)
case"function":H.b(J.F(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.j(this.b,t)
return t
case"capability":H.b(J.F(a[0],"capability"))
return new H.ax(a[1])
case"dart":H.b(J.F(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.j(this.b,q)
this.am(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.d(a))}},
am:function(a){var t
for(t=0;t<a.length;++t)C.a.k(a,t,this.a_(a[t]))
return a},
f_:function(a){var t,s,r,q,p
H.b(J.F(a[0],"map"))
t=a[1]
s=a[2]
r=P.U()
C.a.j(this.b,r)
t=J.mq(t,this.geY()).fE(0)
for(q=J.x(s),p=0;p<t.length;++p)r.k(0,t[p],this.a_(q.h(s,p)))
return r},
f0:function(a){var t,s,r,q,p,o,n
H.b(J.F(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cw(r)
if(o==null)return
n=new H.ba(o,s)}else n=new H.bS(t,r,s)
C.a.j(this.b,n)
return n},
eZ:function(a){var t,s,r,q,p,o
H.b(J.F(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.j(this.b,r)
for(q=J.x(t),p=J.x(s),o=0;C.b.I(o,q.gi(t));++o)r[q.h(t,o)]=this.a_(p.h(s,o))
return r}}
H.fQ.prototype={}
H.hs.prototype={
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
H.fy.prototype={
l:function(a){var t=this.b
if(t==null)return"NullError: "+H.d(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.f4.prototype={
l:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.d(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.d(this.a)+")"}}
H.hx.prototype={
l:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.jh.prototype={
$1:function(a){if(!!J.q(a).$isaZ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.dp.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isb5:1}
H.j_.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.j0.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.j1.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.j2.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.j3.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.az.prototype={
l:function(a){return"Closure '"+H.bw(this).trim()+"'"},
$isjz:1,
gfK:function(){return this},
$D:null}
H.hh.prototype={}
H.h4.prototype={
l:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bk.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bk))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var t,s
t=this.c
if(t==null)s=H.aK(this.a)
else s=typeof t!=="object"?J.bi(t):H.aK(t)
return(s^H.aK(this.b))>>>0},
l:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.bw(t)+"'")}}
H.hu.prototype={
l:function(a){return this.a}}
H.e0.prototype={
l:function(a){return this.a}}
H.fV.prototype={
l:function(a){return"RuntimeError: "+H.d(this.a)}}
H.hK.prototype={
l:function(a){return C.i.a3("Assertion failed: ",P.ce(this.a))}}
H.au.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gv:function(a){return J.bi(this.a)},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.au){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ae.prototype={
gi:function(a){return this.a},
gaq:function(a){return this.a===0},
gA:function(a){return new H.f9(this,[H.a8(this,0)])},
gcV:function(a){return H.jI(this.gA(this),new H.f3(this),H.a8(this,0),H.a8(this,1))},
B:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bU(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bU(s,b)}else return this.fe(b)},
fe:function(a){var t=this.d
if(t==null)return!1
return this.ap(this.aB(t,this.ao(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.aj(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.aj(r,b)
return s==null?null:s.b}else return this.ff(b)},
ff:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aB(t,this.ao(a))
r=this.ap(s,a)
if(r<0)return
return s[r].b},
k:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aY()
this.b=t}this.bL(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aY()
this.c=s}this.bL(s,b,c)}else{r=this.d
if(r==null){r=this.aY()
this.d=r}q=this.ao(b)
p=this.aB(r,q)
if(p==null)this.b_(r,q,[this.aZ(b,c)])
else{o=this.ap(p,b)
if(o>=0)p[o].b=c
else p.push(this.aZ(b,c))}}},
ar:function(a,b){if(typeof b==="string")return this.bZ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bZ(this.c,b)
else return this.fg(b)},
fg:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.aB(t,this.ao(a))
r=this.ap(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.c2(q)
return q.b},
Z:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aX()}},
a1:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.ac(this))
t=t.c}},
bL:function(a,b,c){var t=this.aj(a,b)
if(t==null)this.b_(a,b,this.aZ(b,c))
else t.b=c},
bZ:function(a,b){var t
if(a==null)return
t=this.aj(a,b)
if(t==null)return
this.c2(t)
this.bV(a,b)
return t.b},
aX:function(){this.r=this.r+1&67108863},
aZ:function(a,b){var t,s
t=new H.f8(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.aX()
return t},
c2:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.aX()},
ao:function(a){return J.bi(a)&0x3ffffff},
ap:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.F(a[s].a,b))return s
return-1},
l:function(a){return P.kT(this)},
aj:function(a,b){return a[b]},
aB:function(a,b){return a[b]},
b_:function(a,b,c){H.b(c!=null)
a[b]=c},
bV:function(a,b){delete a[b]},
bU:function(a,b){return this.aj(a,b)!=null},
aY:function(){var t=Object.create(null)
this.b_(t,"<non-identifier-key>",t)
this.bV(t,"<non-identifier-key>")
return t},
$isn0:1}
H.f3.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.f8.prototype={}
H.f9.prototype={
gi:function(a){return this.a.a},
gu:function(a){var t,s
t=this.a
s=new H.fa(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.fa.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ac(t))
else{t=this.c
if(t==null){this.sbK(null)
return!1}else{this.sbK(t.a)
this.c=this.c.c
return!0}}},
sbK:function(a){this.d=a}}
H.iW.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.iX.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.m]}}}
H.iY.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.m]}}}
H.bt.prototype={
gD:function(a){return C.ae},
$isbt:1}
H.b2.prototype={$isb2:1}
H.fo.prototype={
gD:function(a){return C.af}}
H.cu.prototype={
gi:function(a){return a.length},
$isp:1,
$asp:function(){},
$isu:1,
$asu:function(){}}
H.cv.prototype={
h:function(a,b){H.ak(b,a,a.length)
return a[b]},
k:function(a,b,c){H.ak(b,a,a.length)
a[b]=c},
$isk:1,
$ask:function(){return[P.Y]},
$asb_:function(){return[P.Y]},
$asl:function(){return[P.Y]},
$ish:1,
$ash:function(){return[P.Y]}}
H.cw.prototype={
k:function(a,b,c){H.ak(b,a,a.length)
a[b]=c},
$isk:1,
$ask:function(){return[P.y]},
$asb_:function(){return[P.y]},
$asl:function(){return[P.y]},
$ish:1,
$ash:function(){return[P.y]}}
H.ct.prototype={
gD:function(a){return C.ag},
$iseM:1}
H.fp.prototype={
gD:function(a){return C.ah}}
H.fq.prototype={
gD:function(a){return C.ai},
h:function(a,b){H.ak(b,a,a.length)
return a[b]}}
H.fr.prototype={
gD:function(a){return C.aj},
h:function(a,b){H.ak(b,a,a.length)
return a[b]},
$iskJ:1}
H.fs.prototype={
gD:function(a){return C.ak},
h:function(a,b){H.ak(b,a,a.length)
return a[b]}}
H.ft.prototype={
gD:function(a){return C.ao},
h:function(a,b){H.ak(b,a,a.length)
return a[b]},
$islf:1}
H.fu.prototype={
gD:function(a){return C.ap},
h:function(a,b){H.ak(b,a,a.length)
return a[b]},
$islg:1}
H.cx.prototype={
gD:function(a){return C.aq},
gi:function(a){return a.length},
h:function(a,b){H.ak(b,a,a.length)
return a[b]}}
H.fv.prototype={
gD:function(a){return C.ar},
gi:function(a){return a.length},
h:function(a,b){H.ak(b,a,a.length)
return a[b]},
$islh:1}
H.bJ.prototype={}
H.bK.prototype={}
H.bL.prototype={}
H.bM.prototype={}
P.hM.prototype={
$1:function(a){var t,s
H.j4()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.hL.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.iR()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.hN.prototype={
$0:function(){H.j4()
this.a.$0()},
$S:function(){return{func:1}}}
P.hO.prototype={
$0:function(){H.j4()
this.a.$0()},
$S:function(){return{func:1}}}
P.a3.prototype={}
P.eS.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.c)this.d.L(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.c)this.d.L(t.c,t.d)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.eR.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.b]=a
if(s===0)this.c.bT(r)}else if(t.b===0&&!this.e)this.c.L(t.c,t.d)},
$S:function(a){return{func:1,args:[,]}}}
P.jw.prototype={}
P.hR.prototype={
eM:function(a,b){if(a==null)a=new P.b3()
if(this.a.a!==0)throw H.c(P.cK("Future already completed"))
$.z.toString
this.L(a,b)},
eL:function(a){return this.eM(a,null)}}
P.cX.prototype={
aE:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.cK("Future already completed"))
t.bN(b)},
L:function(a,b){this.a.bO(a,b)}}
P.iC.prototype={
aE:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.cK("Future already completed"))
t.aS(b)},
L:function(a,b){this.a.L(a,b)}}
P.d6.prototype={
fn:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.bd(this.d,a.a)},
f9:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.bf(s,{func:1,args:[P.E,P.b5]}))return t.fz(s,a.a,a.b)
else return t.bd(s,a.a)}}
P.M.prototype={
bf:function(a,b){var t,s,r
t=$.z
if(t!==C.d){t.toString
if(b!=null)b=P.nN(b,t)}s=new P.M(0,t,null,[null])
r=b==null?1:3
this.bM(new P.d6(null,s,r,a,b,[H.a8(this,0),null]))
return s},
be:function(a){return this.bf(a,null)},
aO:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
bM:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.k5(this.c,"$isd6")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.bM(a)
return}this.aO(t)}H.b(this.a>=4)
t=this.b
t.toString
P.bc(null,null,t,new P.i0(this,a))}},
bY:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bY(a)
return}this.aO(s)}H.b(this.a>=4)
t.a=this.aD(a)
s=this.b
s.toString
P.bc(null,null,s,new P.i8(t,this))}},
aC:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.aD(t)},
aD:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aS:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.bW(a,"$isa3",t,"$asa3")
if(s){t=H.bW(a,"$isM",t,null)
if(t)P.i3(a,this)
else P.lj(a,this)}else{r=this.aC()
H.b(this.a<4)
this.a=4
this.c=a
P.b7(this,r)}},
bT:function(a){var t
H.b(this.a<4)
H.b(!J.q(a).$isa3)
t=this.aC()
H.b(this.a<4)
this.a=4
this.c=a
P.b7(this,t)},
L:function(a,b){var t
H.b(this.a<4)
t=this.aC()
H.b(this.a<4)
this.a=8
this.c=new P.aV(a,b)
P.b7(this,t)},
e3:function(a){return this.L(a,null)},
bN:function(a){var t
H.b(this.a<4)
t=H.bW(a,"$isa3",this.$ti,"$asa3")
if(t){this.e0(a)
return}H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bc(null,null,t,new P.i2(this,a))},
e0:function(a){var t=H.bW(a,"$isM",this.$ti,null)
if(t){if(a.a===8){H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bc(null,null,t,new P.i7(this,a))}else P.i3(a,this)
return}P.lj(a,this)},
bO:function(a,b){var t
H.b(this.a<4)
H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bc(null,null,t,new P.i1(this,a,b))},
$isa3:1,
gb1:function(){return this.a},
geo:function(){return this.c}}
P.i0.prototype={
$0:function(){P.b7(this.a,this.b)},
$S:function(){return{func:1}}}
P.i8.prototype={
$0:function(){P.b7(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.i4.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.aS(a)},
$S:function(a){return{func:1,args:[,]}}}
P.i5.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.L(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.i6.prototype={
$0:function(){this.a.L(this.b,this.c)},
$S:function(){return{func:1}}}
P.i2.prototype={
$0:function(){this.a.bT(this.b)},
$S:function(){return{func:1}}}
P.i7.prototype={
$0:function(){P.i3(this.b,this.a)},
$S:function(){return{func:1}}}
P.i1.prototype={
$0:function(){this.a.L(this.b,this.c)},
$S:function(){return{func:1}}}
P.ib.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.cD(q.d)}catch(n){s=H.L(n)
r=H.am(n)
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
return}if(!!J.q(t).$isa3){if(t instanceof P.M&&t.gb1()>=4){if(t.gb1()===8){q=t
H.b(q.gb1()===8)
p=this.b
p.b=q.geo()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.be(new P.ic(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.ic.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.ia.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.bd(r.d,this.c)}catch(q){t=H.L(q)
s=H.am(q)
r=this.a
r.b=new P.aV(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.i9.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.fn(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.f9(t)
p.a=!1}}catch(o){s=H.L(o)
r=H.am(o)
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
P.cW.prototype={}
P.h9.prototype={
gi:function(a){var t,s
t={}
s=new P.M(0,$.z,null,[P.y])
t.a=0
this.fk(new P.hb(t),!0,new P.hc(t,s),s.ge2())
return s}}
P.hb.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.hc.prototype={
$0:function(){this.b.aS(this.a.a)},
$S:function(){return{func:1}}}
P.ha.prototype={}
P.cL.prototype={}
P.jM.prototype={}
P.aV.prototype={
l:function(a){return H.d(this.a)},
$isaZ:1}
P.iG.prototype={}
P.iK.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.b3()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.l(0)
throw r},
$S:function(){return{func:1}}}
P.is.prototype={
fA:function(a){var t,s,r
try{if(C.d===$.z){a.$0()
return}P.lp(null,null,this,a)}catch(r){t=H.L(r)
s=H.am(r)
P.iJ(null,null,this,t,s)}},
fB:function(a,b){var t,s,r
try{if(C.d===$.z){a.$1(b)
return}P.lq(null,null,this,a,b)}catch(r){t=H.L(r)
s=H.am(r)
P.iJ(null,null,this,t,s)}},
eG:function(a){return new P.iu(this,a)},
b4:function(a){return new P.it(this,a)},
eH:function(a){return new P.iv(this,a)},
h:function(a,b){return},
cD:function(a){if($.z===C.d)return a.$0()
return P.lp(null,null,this,a)},
bd:function(a,b){if($.z===C.d)return a.$1(b)
return P.lq(null,null,this,a,b)},
fz:function(a,b,c){if($.z===C.d)return a.$2(b,c)
return P.nO(null,null,this,a,b,c)}}
P.iu.prototype={
$0:function(){return this.a.cD(this.b)},
$S:function(){return{func:1}}}
P.it.prototype={
$0:function(){return this.a.fA(this.b)},
$S:function(){return{func:1}}}
P.iv.prototype={
$1:function(a){return this.a.fB(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.il.prototype={
ao:function(a){return H.of(a)&0x3ffffff},
ap:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.ij.prototype={
gu:function(a){var t=new P.bH(this,this.r,null,null,[null])
t.c=this.e
return t},
gi:function(a){return this.a},
E:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.e4(b)},
e4:function(a){var t=this.d
if(t==null)return!1
return this.aA(t[this.ay(a)],a)>=0},
cw:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.E(0,a)?a:null
else return this.ef(a)},
ef:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ay(a)]
r=this.aA(s,a)
if(r<0)return
return J.ao(s,r).ge7()},
j:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.jX()
this.b=t}return this.bQ(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.jX()
this.c=s}return this.bQ(s,b)}else return this.X(0,b)},
X:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.jX()
this.d=t}s=this.ay(b)
r=t[s]
if(r==null){q=[this.aR(b)]
H.b(q!=null)
t[s]=q}else{if(this.aA(r,b)>=0)return!1
r.push(this.aR(b))}return!0},
ar:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bR(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bR(this.c,b)
else return this.ej(0,b)},
ej:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ay(b)]
r=this.aA(s,b)
if(r<0)return!1
this.bS(s.splice(r,1)[0])
return!0},
Z:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aQ()}},
bQ:function(a,b){var t
if(a[b]!=null)return!1
t=this.aR(b)
H.b(!0)
a[b]=t
return!0},
bR:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bS(t)
delete a[b]
return!0},
aQ:function(){this.r=this.r+1&67108863},
aR:function(a){var t,s
t=new P.ik(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.aQ()
return t},
bS:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.aQ()},
ay:function(a){return J.bi(a)&0x3ffffff},
aA:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.F(a[s].a,b))return s
return-1}}
P.ik.prototype={
ge7:function(){return this.a}}
P.bH.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ac(t))
else{t=this.c
if(t==null){this.sah(null)
return!1}else{this.sah(t.a)
this.c=this.c.b
return!0}}},
sah:function(a){this.d=a}}
P.ie.prototype={}
P.jF.prototype={$isk:1}
P.cp.prototype={$isk:1,$ish:1}
P.l.prototype={
gu:function(a){return new H.cq(a,this.gi(a),0,null,[H.a7(a,"l",0)])},
t:function(a,b){return this.h(a,b)},
cz:function(a,b){return new H.br(a,b,[H.a7(a,"l",0),null])},
f7:function(a,b,c){var t,s,r,q
t=this.gi(a)
for(s=b,r=0;C.b.I(r,t);++r){s=c.$2(s,this.h(a,r))
q=this.gi(a)
if(t==null?q!=null:t!==q)throw H.c(P.ac(a))}return s},
l:function(a){return P.f_(a,"[","]")}}
P.bq.prototype={}
P.ff.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.d(a)
t.a=s+": "
t.a+=H.d(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.aJ.prototype={
a1:function(a,b){var t,s
for(t=J.av(this.gA(a));t.p();){s=t.gq(t)
b.$2(s,this.h(a,s))}},
gi:function(a){return J.ab(this.gA(a))},
l:function(a){return P.kT(a)}}
P.fb.prototype={
dG:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sc0(H.v(t,[b]))},
gu:function(a){return new P.im(this,this.c,this.d,this.b,null,this.$ti)},
gaq:function(a){return this.b===this.c},
gi:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t=this.gi(this)
if(C.b.R(0,b)||b>=t)H.K(P.D(b,this,"index",null,t))
return this.a[(C.b.a3(this.b,b)&this.a.length-1)>>>0]},
Z:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
l:function(a){return P.f_(this,"{","}")},
cA:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.f0());++this.d
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
if(this.b===t)this.bW();++this.d},
bW:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.v(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bs(s,0,q,t,r)
C.a.bs(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sc0(s)},
sc0:function(a){this.a=a}}
P.im.prototype={
gq:function(a){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.K(P.ac(t))
s=this.d
if(s===this.b){this.sah(null)
return!1}this.sah(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sah:function(a){this.e=a}}
P.fY.prototype={
N:function(a,b){var t
for(t=J.av(b);t.p();)this.j(0,t.gq(t))},
l:function(a){return P.f_(this,"{","}")},
$isk:1}
P.fX.prototype={}
P.bI.prototype={}
P.ih.prototype={
h:function(a,b){var t,s
t=this.b
if(t==null)return this.gal().h(0,b)
else if(typeof b!=="string")return
else{s=t[b]
return typeof s=="undefined"?this.ei(b):s}},
gi:function(a){var t
if(this.b==null){t=this.gal()
t=t.gi(t)}else t=this.az().length
return t},
gA:function(a){var t
if(this.b==null){t=this.gal()
return t.gA(t)}return new P.ii(this)},
B:function(a,b){if(this.b==null)return this.gal().B(0,b)
return Object.prototype.hasOwnProperty.call(this.a,b)},
a1:function(a,b){var t,s,r,q
if(this.b==null)return this.gal().a1(0,b)
t=this.az()
for(s=0;s<t.length;++s){r=t[s]
q=this.b[r]
if(typeof q=="undefined"){q=P.iH(this.a[r])
this.b[r]=q}b.$2(r,q)
if(t!==this.c)throw H.c(P.ac(this))}},
gal:function(){H.b(this.b==null)
return this.c},
az:function(){H.b(this.b!=null)
var t=this.c
if(t==null){t=Object.keys(this.a)
this.c=t}return t},
ei:function(a){var t
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
t=P.iH(this.a[a])
return this.b[a]=t},
$asbq:function(){return[P.m,null]},
$asaJ:function(){return[P.m,null]}}
P.ii.prototype={
gi:function(a){var t=this.a
return t.gi(t)},
t:function(a,b){var t=this.a
return t.b==null?t.gA(t).t(0,b):C.a.h(t.az(),b)},
gu:function(a){var t=this.a
if(t.b==null){t=t.gA(t)
t=t.gu(t)}else{t=t.az()
t=new J.c0(t,t.length,0,null,[H.a8(t,0)])}return t},
$ask:function(){return[P.m]},
$asaI:function(){return[P.m]},
$asQ:function(){return[P.m]}}
P.c5.prototype={}
P.c6.prototype={}
P.f5.prototype={
eU:function(a,b,c){var t=P.nM(b,this.geV().a)
return t},
eT:function(a,b){return this.eU(a,b,null)},
geV:function(){return C.V},
$asc5:function(){return[P.E,P.m]}}
P.f6.prototype={
$ascL:function(){return[P.m,P.E]},
$asc6:function(){return[P.m,P.E]}}
P.al.prototype={}
P.G.prototype={}
P.aA.prototype={
gfo:function(){return this.a},
dA:function(a,b){var t
if(Math.abs(this.a)<=864e13)t=!1
else t=!0
if(t)throw H.c(P.js("DateTime is outside valid range: "+this.gfo()))},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.aA))return!1
return this.a===b.a&&this.b===b.b},
T:function(a,b){return C.b.T(this.a,b.a)},
gv:function(a){var t=this.a
return(t^C.b.b0(t,30))&1073741823},
l:function(a){var t,s,r,q,p,o,n
t=P.mN(H.ni(this))
s=P.c8(H.ng(this))
r=P.c8(H.nc(this))
q=P.c8(H.nd(this))
p=P.c8(H.nf(this))
o=P.c8(H.nh(this))
n=P.mO(H.ne(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isG:1,
$asG:function(){return[P.aA]}}
P.Y.prototype={}
P.aC.prototype={
I:function(a,b){return C.b.I(this.a,b.ge6())},
R:function(a,b){return C.b.R(this.a,b.ge6())},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.aC))return!1
return this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
T:function(a,b){return C.b.T(this.a,b.a)},
l:function(a){var t,s,r,q,p
t=new P.ek()
s=this.a
if(s<0)return"-"+new P.aC(0-s).l(0)
r=t.$1(C.b.G(s,6e7)%60)
q=t.$1(C.b.G(s,1e6)%60)
p=new P.ej().$1(s%1e6)
return""+C.b.G(s,36e8)+":"+H.d(r)+":"+H.d(q)+"."+H.d(p)},
$isG:1,
$asG:function(){return[P.aC]}}
P.ej.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.m,args:[P.y]}}}
P.ek.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.m,args:[P.y]}}}
P.aZ.prototype={}
P.c1.prototype={
l:function(a){return"Assertion failed"}}
P.b3.prototype={
l:function(a){return"Throw of null."}}
P.a0.prototype={
gaU:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaT:function(){return""},
l:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.d(t)
q=this.gaU()+s+r
if(!this.a)return q
p=this.gaT()
o=P.ce(this.b)
return q+p+": "+H.d(o)}}
P.cC.prototype={
gaU:function(){return"RangeError"},
gaT:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.d(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.d(t)
else if(r>t)s=": Not in range "+H.d(t)+".."+H.d(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.d(t)}return s}}
P.eX.prototype={
gaU:function(){return"RangeError"},
gaT:function(){H.b(this.a)
if(J.lR(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.d(t)},
gi:function(a){return this.f}}
P.hy.prototype={
l:function(a){return"Unsupported operation: "+this.a}}
P.hw.prototype={
l:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.b6.prototype={
l:function(a){return"Bad state: "+this.a}}
P.e2.prototype={
l:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.d(P.ce(t))+"."}}
P.cJ.prototype={
l:function(a){return"Stack Overflow"},
$isaZ:1}
P.eb.prototype={
l:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.jy.prototype={}
P.i_.prototype={
l:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.d(t)}}
P.eP.prototype={
l:function(a){var t,s
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
return s}}
P.en.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.K(P.jt(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kY(b,"expando$values")
return s==null?null:H.kY(s,t)},
l:function(a){return"Expando:"+H.d(this.b)}}
P.y.prototype={}
P.Q.prototype={
aI:function(a,b){return new H.cV(this,b,[H.a7(this,"Q",0)])},
gi:function(a){var t,s
H.b(!this.$isk)
t=this.gu(this)
for(s=0;t.p();)++s
return s},
ga4:function(a){var t,s
t=this.gu(this)
if(!t.p())throw H.c(H.f0())
s=t.gq(t)
if(t.p())throw H.c(H.n8())
return s},
t:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.mE("index"))
if(b<0)H.K(P.aL(b,0,null,"index",null))
for(t=this.gu(this),s=0;t.p();){r=t.gq(t)
if(b===s)return r;++s}throw H.c(P.D(b,this,"index",null,s))},
l:function(a){return P.n6(this,"(",")")}}
P.cm.prototype={}
P.h.prototype={$isk:1}
P.b1.prototype={}
P.P.prototype={
gv:function(a){return P.E.prototype.gv.call(this,this)},
l:function(a){return"null"}}
P.a9.prototype={$isG:1,
$asG:function(){return[P.a9]}}
P.E.prototype={constructor:P.E,$isE:1,
w:function(a,b){return this===b},
gv:function(a){return H.aK(this)},
l:function(a){return"Instance of '"+H.bw(this)+"'"},
gD:function(a){return new H.au(H.iU(this),null)},
toString:function(){return this.l(this)}}
P.b5.prototype={}
P.m.prototype={$isG:1,
$asG:function(){return[P.m]}}
P.bA.prototype={
gi:function(a){return this.a.length},
l:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga7:function(){return this.a}}
P.jP.prototype={}
W.j.prototype={}
W.c_.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.dS.prototype={
gi:function(a){return a.length}}
W.dT.prototype={
l:function(a){return String(a)}}
W.dV.prototype={
l:function(a){return String(a)}}
W.aw.prototype={$isaw:1}
W.c4.prototype={
d0:function(a,b,c){var t=this.e9(a,b,P.nY(c,null))
return t},
e9:function(a,b,c){return a.getContext(b,c)}}
W.e_.prototype={
aJ:function(a){return P.iO(a.getContextAttributes())}}
W.ay.prototype={
gi:function(a){return a.length}}
W.e3.prototype={
gi:function(a){return a.length}}
W.e4.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.e5.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.e6.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.aX.prototype={
bP:function(a,b){var t,s
t=$.$get$ky()
s=t[b]
if(typeof s==="string")return s
s=this.ex(a,b)
t[b]=s
return s},
ex:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mP()+b
if(t in a)return t
return b},
gi:function(a){return a.length}}
W.e7.prototype={}
W.a1.prototype={}
W.aY.prototype={}
W.e8.prototype={
gi:function(a){return a.length}}
W.e9.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.ea.prototype={
gi:function(a){return a.length}}
W.ec.prototype={
h:function(a,b){return a[b]},
gi:function(a){return a.length}}
W.ed.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.c9.prototype={}
W.aB.prototype={
eB:function(a,b){return a.adoptNode(b)},
e5:function(a,b){return a.createEvent(b)},
bi:function(a,b){return a.getElementsByTagName(b)},
d1:function(a,b){return a.getElementById(b)},
fs:function(a,b){return a.querySelector(b)},
gba:function(a){return new W.d3(a,"change",!1,[W.f])},
$isaB:1}
W.ee.prototype={
l:function(a){return String(a)}}
W.ca.prototype={
eR:function(a,b){return a.createHTMLDocument(b)}}
W.ef.prototype={
gau:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.cb.prototype={
gau:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.cc.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[P.V]},
$isk:1,
$ask:function(){return[P.V]},
$isu:1,
$asu:function(){return[P.V]},
$asl:function(){return[P.V]},
$ish:1,
$ash:function(){return[P.V]},
$asn:function(){return[P.V]}}
W.cd.prototype={
l:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gac(a))+" x "+H.d(this.ga9(a))},
w:function(a,b){var t
if(b==null)return!1
t=J.q(b)
if(!t.$isV)return!1
return a.left===t.gcu(b)&&a.top===t.gcJ(b)&&this.gac(a)===t.gac(b)&&this.ga9(a)===t.ga9(b)},
gv:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gac(a)
q=this.ga9(a)
return W.ln(W.aS(W.aS(W.aS(W.aS(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga9:function(a){return a.height},
gcu:function(a){return a.left},
gcJ:function(a){return a.top},
gac:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isV:1,
$asV:function(){}}
W.eg.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[P.m]},
$isk:1,
$ask:function(){return[P.m]},
$isu:1,
$asu:function(){return[P.m]},
$asl:function(){return[P.m]},
$ish:1,
$ash:function(){return[P.m]},
$asn:function(){return[P.m]}}
W.eh.prototype={
gi:function(a){return a.length}}
W.a2.prototype={
geE:function(a){return new W.hV(a)},
l:function(a){return a.localName},
O:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kH
if(t==null){t=H.v([],[W.cz])
s=new W.cA(t)
C.a.j(t,W.lk(null))
C.a.j(t,W.lo())
$.kH=s
d=s}else d=t
t=$.kG
if(t==null){t=new W.dz(d)
$.kG=t
c=t}else{t.a=d
c=t}}if($.ap==null){t=document
s=t.implementation
s=(s&&C.K).eR(s,"")
$.ap=s
$.jx=s.createRange()
s=$.ap
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.ap.head;(t&&C.L).S(t,r)}t=$.ap
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.k5(s,"$isaw")}t=$.ap
if(!!this.$isaw)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.ap.body;(t&&C.p).S(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.E(C.X,a.tagName)){t=$.jx;(t&&C.D).d5(t,q)
t=$.jx
p=(t&&C.D).eP(t,b)}else{q.innerHTML=b
p=$.ap.createDocumentFragment()
for(t=J.i(p);s=q.firstChild,s!=null;)t.S(p,s)}t=$.ap.body
if(q==null?t!=null:q!==t)J.kh(q)
c.bq(p)
C.j.eB(document,p)
return p},
eQ:function(a,b,c){return this.O(a,b,c,null)},
dg:function(a,b,c,d){a.textContent=null
this.S(a,this.O(a,b,c,d))},
df:function(a,b){return this.dg(a,b,null,null)},
ad:function(a,b){return a.getAttribute(b)},
ea:function(a,b){return a.hasAttribute(b)},
ek:function(a,b){return a.removeAttribute(b)},
gba:function(a){return new W.d2(a,"change",!1,[W.f])},
$isa2:1,
gfd:function(a){return a.id},
gfC:function(a){return a.tagName}}
W.em.prototype={
$1:function(a){return!!J.q(a).$isa2},
$S:function(a){return{func:1,args:[,]}}}
W.f.prototype={
gcF:function(a){return W.nH(a.target)},
ec:function(a,b,c,d){return a.initEvent(b,!0,!0)},
$isf:1}
W.e.prototype={
dZ:function(a,b,c,d){return a.addEventListener(b,H.aT(c,1),!1)},
f1:function(a,b){return a.dispatchEvent(b)},
$ise:1}
W.eI.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cg]},
$isk:1,
$ask:function(){return[W.cg]},
$isu:1,
$asu:function(){return[W.cg]},
$asl:function(){return[W.cg]},
$ish:1,
$ash:function(){return[W.cg]},
$asn:function(){return[W.cg]}}
W.eJ.prototype={
gi:function(a){return a.length}}
W.eO.prototype={
gi:function(a){return a.length}}
W.eU.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.cj.prototype={}
W.eV.prototype={
gi:function(a){return a.length}}
W.bm.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.r]},
$isk:1,
$ask:function(){return[W.r]},
$isu:1,
$asu:function(){return[W.r]},
$asl:function(){return[W.r]},
$ish:1,
$ash:function(){return[W.r]},
$asn:function(){return[W.r]}}
W.ck.prototype={}
W.cl.prototype={
fM:function(a,b,c,d,e,f){return a.open(b,c)},
fp:function(a,b,c){return a.open(b,c)},
K:function(a,b){return a.send(b)}}
W.bn.prototype={}
W.bo.prototype={$isbo:1}
W.aG.prototype={$isaG:1}
W.fd.prototype={
l:function(a){return String(a)}}
W.fe.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.fj.prototype={
gi:function(a){return a.length}}
W.fl.prototype={
fL:function(a,b,c){return a.send(b,c)},
K:function(a,b){return a.send(b)}}
W.bs.prototype={}
W.fm.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cs]},
$isk:1,
$ask:function(){return[W.cs]},
$isu:1,
$asu:function(){return[W.cs]},
$asl:function(){return[W.cs]},
$ish:1,
$ash:function(){return[W.cs]},
$asn:function(){return[W.cs]}}
W.O.prototype={$isO:1}
W.S.prototype={
ga4:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.c(P.cK("No elements"))
if(s>1)throw H.c(P.cK("More than one element"))
return t.firstChild},
N:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.i(s),p=0;p<r;++p)q.S(s,t.firstChild)
return},
k:function(a,b,c){var t=this.a
J.lW(t,c,C.B.h(t.childNodes,b))},
gu:function(a){var t=this.a.childNodes
return new W.ch(t,t.length,-1,null,[H.a7(t,"n",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){return C.B.h(this.a.childNodes,b)},
$ask:function(){return[W.r]},
$ascp:function(){return[W.r]},
$asl:function(){return[W.r]},
$ash:function(){return[W.r]},
$asbI:function(){return[W.r]}}
W.r.prototype={
ft:function(a){var t=a.parentNode
if(t!=null)J.ji(t,a)},
l:function(a){var t=a.nodeValue
return t==null?this.dl(a):t},
S:function(a,b){return a.appendChild(b)},
el:function(a,b){return a.removeChild(b)},
em:function(a,b,c){return a.replaceChild(b,c)},
$isr:1,
gbb:function(a){return a.previousSibling}}
W.cy.prototype={
bc:function(a){return a.previousNode()}}
W.bv.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.r]},
$isk:1,
$ask:function(){return[W.r]},
$isu:1,
$asu:function(){return[W.r]},
$asl:function(){return[W.r]},
$ish:1,
$ash:function(){return[W.r]},
$asn:function(){return[W.r]}}
W.af.prototype={
gi:function(a){return a.length}}
W.fJ.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.af]},
$isk:1,
$ask:function(){return[W.af]},
$isu:1,
$asu:function(){return[W.af]},
$asl:function(){return[W.af]},
$ish:1,
$ash:function(){return[W.af]},
$asn:function(){return[W.af]}}
W.fM.prototype={
K:function(a,b){return a.send(b)}}
W.cB.prototype={
eP:function(a,b){return a.createContextualFragment(b)},
d5:function(a,b){return a.selectNodeContents(b)}}
W.cF.prototype={
K:function(a,b){return a.send(b)}}
W.fW.prototype={
gi:function(a){return a.length}}
W.at.prototype={}
W.h0.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cH]},
$isk:1,
$ask:function(){return[W.cH]},
$isu:1,
$asu:function(){return[W.cH]},
$asl:function(){return[W.cH]},
$ish:1,
$ash:function(){return[W.cH]},
$asn:function(){return[W.cH]}}
W.h2.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cI]},
$isk:1,
$ask:function(){return[W.cI]},
$isu:1,
$asu:function(){return[W.cI]},
$asl:function(){return[W.cI]},
$ish:1,
$ash:function(){return[W.cI]},
$asn:function(){return[W.cI]}}
W.ag.prototype={
gi:function(a){return a.length}}
W.h7.prototype={
B:function(a,b){return this.aW(a,b)!=null},
h:function(a,b){return this.aW(a,b)},
a1:function(a,b){var t,s
for(t=0;!0;++t){s=this.ee(a,t)
if(s==null)return
b.$2(s,this.aW(a,s))}},
gA:function(a){var t=H.v([],[P.m])
this.a1(a,new W.h8(t))
return t},
gi:function(a){return a.length},
aW:function(a,b){return a.getItem(b)},
ee:function(a,b){return a.key(b)},
$asaJ:function(){return[P.m,P.m]}}
W.h8.prototype={
$2:function(a,b){return C.a.j(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.cN.prototype={
O:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aL(a,b,c,d)
t=W.mQ("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.S(s).N(0,new W.S(t))
return s}}
W.hf.prototype={
O:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aL(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.I.O(t.createElement("table"),b,c,d)
t.toString
t=new W.S(t)
r=t.ga4(t)
r.toString
t=new W.S(r)
q=t.ga4(t)
s.toString
q.toString
new W.S(s).N(0,new W.S(q))
return s}}
W.hg.prototype={
O:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aL(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.I.O(t.createElement("table"),b,c,d)
t.toString
t=new W.S(t)
r=t.ga4(t)
s.toString
r.toString
new W.S(s).N(0,new W.S(r))
return s}}
W.bB.prototype={$isbB:1}
W.hi.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cP]},
$isk:1,
$ask:function(){return[W.cP]},
$isu:1,
$asu:function(){return[W.cP]},
$asl:function(){return[W.cP]},
$ish:1,
$ash:function(){return[W.cP]},
$asn:function(){return[W.cP]}}
W.hj.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cO]},
$isk:1,
$ask:function(){return[W.cO]},
$isu:1,
$asu:function(){return[W.cO]},
$asl:function(){return[W.cO]},
$ish:1,
$ash:function(){return[W.cO]},
$asn:function(){return[W.cO]}}
W.hl.prototype={
gi:function(a){return a.length}}
W.aM.prototype={$isaM:1}
W.hp.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cS]},
$isk:1,
$ask:function(){return[W.cS]},
$isu:1,
$asu:function(){return[W.cS]},
$asl:function(){return[W.cS]},
$ish:1,
$ash:function(){return[W.cS]},
$asn:function(){return[W.cS]}}
W.hq.prototype={
gi:function(a){return a.length}}
W.cT.prototype={
bc:function(a){return a.previousNode()}}
W.aN.prototype={}
W.hz.prototype={
l:function(a){return String(a)}}
W.hB.prototype={
gm:function(a){return a.x},
gH:function(a){return a.z}}
W.hD.prototype={
gi:function(a){return a.length}}
W.hE.prototype={
K:function(a,b){return a.send(b)}}
W.aP.prototype={
geW:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.t("deltaY is not supported"))},
$isaP:1}
W.bF.prototype={
geD:function(a){var t,s
t=P.a9
s=new P.M(0,$.z,null,[t])
this.e8(a)
this.en(a,W.lt(new W.hG(new P.iC(s,[t]))))
return s},
en:function(a,b){return a.requestAnimationFrame(H.aT(b,1))},
e8:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.hG.prototype={
$1:function(a){this.a.aE(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.jT.prototype={}
W.hS.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.c7]},
$isk:1,
$ask:function(){return[W.c7]},
$isu:1,
$asu:function(){return[W.c7]},
$asl:function(){return[W.c7]},
$ish:1,
$ash:function(){return[W.c7]},
$asn:function(){return[W.c7]}}
W.hU.prototype={
l:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
w:function(a,b){var t
if(b==null)return!1
t=J.q(b)
if(!t.$isV)return!1
return a.left===t.gcu(b)&&a.top===t.gcJ(b)&&a.width===t.gac(b)&&a.height===t.ga9(b)},
gv:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.ln(W.aS(W.aS(W.aS(W.aS(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga9:function(a){return a.height},
gac:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.id.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.ci]},
$isk:1,
$ask:function(){return[W.ci]},
$isu:1,
$asu:function(){return[W.ci]},
$asl:function(){return[W.ci]},
$ish:1,
$ash:function(){return[W.ci]},
$asn:function(){return[W.ci]}}
W.dd.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.r]},
$isk:1,
$ask:function(){return[W.r]},
$isu:1,
$asu:function(){return[W.r]},
$asl:function(){return[W.r]},
$ish:1,
$ash:function(){return[W.r]},
$asn:function(){return[W.r]}}
W.iz.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.ag]},
$isk:1,
$ask:function(){return[W.ag]},
$isu:1,
$asu:function(){return[W.ag]},
$asl:function(){return[W.ag]},
$ish:1,
$ash:function(){return[W.ag]},
$asn:function(){return[W.ag]}}
W.iA.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cM]},
$isk:1,
$ask:function(){return[W.cM]},
$isu:1,
$asu:function(){return[W.cM]},
$asl:function(){return[W.cM]},
$ish:1,
$ash:function(){return[W.cM]},
$asn:function(){return[W.cM]}}
W.hP.prototype={
a1:function(a,b){var t,s,r,q,p,o
for(t=this.gA(this),s=t.length,r=this.a,q=J.i(r),p=0;p<t.length;t.length===s||(0,H.C)(t),++p){o=t[p]
b.$2(o,q.ad(r,o))}},
gA:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.v([],[P.m])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.j(s,p.name)}return s},
$asbq:function(){return[P.m,P.m]},
$asaJ:function(){return[P.m,P.m]},
geb:function(){return this.a}}
W.hV.prototype={
B:function(a,b){return J.lU(this.a,b)},
h:function(a,b){return J.jq(this.a,b)},
gi:function(a){return this.gA(this).length}}
W.d3.prototype={
fk:function(a,b,c,d){return W.X(this.a,this.b,a,!1,H.a8(this,0))}}
W.d2.prototype={}
W.hY.prototype={
dT:function(a,b,c,d,e){this.ez()},
ez:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lT(r,this.c,t,!1)}}}
W.hZ.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.bG.prototype={
dU:function(a){var t,s
t=$.$get$jW()
if(t.gaq(t)){for(s=0;s<262;++s)t.k(0,C.W[s],W.o4())
for(s=0;s<12;++s)t.k(0,C.t[s],W.o5())}},
a8:function(a){return $.$get$ll().E(0,W.bl(a))},
Y:function(a,b,c){var t,s,r
t=W.bl(a)
s=$.$get$jW()
r=s.h(0,H.d(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)}}
W.n.prototype={
gu:function(a){return new W.ch(a,this.gi(a),-1,null,[H.a7(a,"n",0)])}}
W.cA.prototype={
a8:function(a){return C.a.c5(this.a,new W.fx(a))},
Y:function(a,b,c){return C.a.c5(this.a,new W.fw(a,b,c))}}
W.fx.prototype={
$1:function(a){return a.a8(this.a)},
$S:function(a){return{func:1,args:[,]}}}
W.fw.prototype={
$1:function(a){return a.Y(this.a,this.b,this.c)},
$S:function(a){return{func:1,args:[,]}}}
W.bN.prototype={
dX:function(a,b,c,d){var t,s,r
this.a.N(0,c)
t=b.aI(0,new W.ix())
s=b.aI(0,new W.iy())
this.b.N(0,t)
r=this.c
r.N(0,C.A)
r.N(0,s)},
a8:function(a){return this.a.E(0,W.bl(a))},
Y:function(a,b,c){var t,s
t=W.bl(a)
s=this.c
if(s.E(0,H.d(t)+"::"+b))return this.d.eC(c)
else if(s.E(0,"*::"+b))return this.d.eC(c)
else{s=this.b
if(s.E(0,H.d(t)+"::"+b))return!0
else if(s.E(0,"*::"+b))return!0
else if(s.E(0,H.d(t)+"::*"))return!0
else if(s.E(0,"*::*"))return!0}return!1}}
W.ix.prototype={
$1:function(a){return!C.a.E(C.t,a)},
$S:function(a){return{func:1,args:[,]}}}
W.iy.prototype={
$1:function(a){return C.a.E(C.t,a)},
$S:function(a){return{func:1,args:[,]}}}
W.iD.prototype={
Y:function(a,b,c){if(this.dq(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jq(a,"template")==="")return this.e.E(0,b)
return!1}}
W.iE.prototype={
$1:function(a){return"TEMPLATE::"+H.d(a)},
$S:function(a){return{func:1,args:[,]}}}
W.iB.prototype={
a8:function(a){var t=J.q(a)
if(!!t.$isby)return!1
t=!!t.$isw
if(t&&W.bl(a)==="foreignObject")return!1
if(t)return!0
return!1},
Y:function(a,b,c){if(b==="is"||C.i.bu(b,"on"))return!1
return this.a8(a)}}
W.ch.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbX(J.ao(this.a,t))
this.c=t
return!0}this.sbX(null)
this.c=s
return!1},
gq:function(a){return this.d},
sbX:function(a){this.d=a}}
W.hT.prototype={$isa:1,$ise:1}
W.cz.prototype={}
W.jJ.prototype={}
W.jS.prototype={}
W.iw.prototype={}
W.dz.prototype={
bq:function(a){new W.iF(this).$2(a,null)},
ak:function(a,b){if(b==null)J.kh(a)
else J.ji(b,a)},
es:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.me(a)
r=J.jq(s.geb(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.L(n)}p="element unprintable"
try{p=J.bj(a)}catch(n){H.L(n)}try{o=W.bl(a)
this.er(a,b,t,p,o,s,r)}catch(n){if(H.L(n) instanceof P.a0)throw n
else{this.ak(a,b)
window
m="Removing corrupted element "+H.d(p)
if(typeof console!="undefined")window.console.warn(m)}}},
er:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.ak(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!this.a.a8(a)){this.ak(a,b)
window
t="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!this.a.Y(a,"is",g)){this.ak(a,b)
window
t="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gA(f)
s=H.v(t.slice(0),[H.a8(t,0)])
for(r=f.gA(f).length-1,t=f.a,q=J.i(t);r>=0;--r){p=s[r]
if(!this.a.Y(a,J.mv(p),q.ad(t,p))){window
o="Removing disallowed attribute <"+H.d(e)+" "+p+'="'+H.d(q.ad(t,p))+'">'
if(typeof console!="undefined")window.console.warn(o)
q.ad(t,p)
q.ek(t,p)}}if(!!J.q(a).$isbB)this.bq(a.content)}}
W.iF.prototype={
$2:function(a,b){var t,s,r,q
r=this.a
switch(a.nodeType){case 1:r.es(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.ak(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.mg(t)}catch(q){H.L(q)
r=t
J.ji(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(a,b){return{func:1,v:true,args:[W.r,W.r]}}}
W.cY.prototype={}
W.cZ.prototype={}
W.d_.prototype={}
W.d0.prototype={}
W.d1.prototype={}
W.d4.prototype={}
W.d5.prototype={}
W.d7.prototype={}
W.d8.prototype={}
W.db.prototype={}
W.dc.prototype={}
W.de.prototype={}
W.df.prototype={}
W.di.prototype={}
W.dj.prototype={}
W.bO.prototype={}
W.bP.prototype={}
W.dk.prototype={}
W.dl.prototype={}
W.dq.prototype={}
W.dt.prototype={}
W.du.prototype={}
W.bQ.prototype={}
W.bR.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.dH.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
P.hH.prototype={
ct:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}C.a.j(t,a)
C.a.j(this.b,null)
return s},
bg:function(a){var t,s,r,q,p,o,n,m,l,k
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.aA(s,!0)
r.dA(s,!0)
return r}if(a instanceof RegExp)throw H.c(P.jQ("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.nZ(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.ct(a)
r=this.b
o=r[p]
t.a=o
if(o!=null)return o
o=P.U()
t.a=o
r[p]=o
this.f8(a,new P.hJ(t,this))
return t.a}if(a instanceof Array){n=a
p=this.ct(n)
r=this.b
o=r[p]
if(o!=null)return o
m=J.x(n)
l=m.gi(n)
o=this.c?new Array(l):n
r[p]=o
for(r=J.aU(o),k=0;C.b.I(k,l);++k)r.k(o,k,this.bg(m.h(n,k)))
return o}return a}}
P.hJ.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.bg(b)
J.lS(t,a,s)
return s},
$S:function(a,b){return{func:1,args:[,,]}}}
P.iL.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.hI.prototype={
f8:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.iM.prototype={
$1:function(a){return this.a.aE(0,a)},
$S:function(a){return{func:1,args:[,]}}}
P.iN.prototype={
$1:function(a){return this.a.eL(a)},
$S:function(a){return{func:1,args:[,]}}}
P.hC.prototype={
gcF:function(a){return a.target}}
P.ir.prototype={}
P.V.prototype={}
P.eo.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ep.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eq.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.er.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.es.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
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
gn:function(a){return a.y},
gH:function(a){return a.z}}
P.eC.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eD.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
P.eE.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eF.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eK.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eN.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.a4.prototype={}
P.ad.prototype={}
P.eW.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f7.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return this.a0(a,b)},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a0:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.jE]},
$asl:function(){return[P.jE]},
$ish:1,
$ash:function(){return[P.jE]},
$asn:function(){return[P.jE]}}
P.fh.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fz.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return this.a0(a,b)},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a0:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.jK]},
$asl:function(){return[P.jK]},
$ish:1,
$ash:function(){return[P.jK]},
$asn:function(){return[P.jK]}}
P.fG.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fK.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fL.prototype={
gi:function(a){return a.length}}
P.fO.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fP.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.by.prototype={$isby:1}
P.hd.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return this.a0(a,b)},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a0:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.m]},
$asl:function(){return[P.m]},
$ish:1,
$ash:function(){return[P.m]},
$asn:function(){return[P.m]}}
P.w.prototype={
O:function(a,b,c,d){var t,s,r,q,p,o
t=H.v([],[W.cz])
C.a.j(t,W.lk(null))
C.a.j(t,W.lo())
C.a.j(t,new W.iB())
c=new W.dz(new W.cA(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.p).eQ(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.S(q)
o=t.ga4(t)
for(t=J.i(p);r=o.firstChild,r!=null;)t.S(p,r)
return p},
gba:function(a){return new W.d2(a,"change",!1,[W.f])},
$isw:1}
P.he.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bC.prototype={}
P.bD.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hr.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return this.a0(a,b)},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a0:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.jO]},
$asl:function(){return[P.jO]},
$ish:1,
$ash:function(){return[P.jO]},
$asn:function(){return[P.jO]}}
P.hA.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.d9.prototype={}
P.da.prototype={}
P.dg.prototype={}
P.dh.prototype={}
P.dr.prototype={}
P.ds.prototype={}
P.dx.prototype={}
P.dy.prototype={}
P.dW.prototype={
gi:function(a){return a.length}}
P.dX.prototype={
gi:function(a){return a.length}}
P.aW.prototype={}
P.fA.prototype={
gi:function(a){return a.length}}
P.fT.prototype={
c3:function(a,b){return a.activeTexture(b)},
c6:function(a,b,c){return a.attachShader(b,c)},
c7:function(a,b,c){return a.bindBuffer(b,c)},
c8:function(a,b,c){return a.bindFramebuffer(b,c)},
c9:function(a,b,c){return a.bindTexture(b,c)},
ca:function(a,b){return a.blendEquation(b)},
cb:function(a,b,c){return a.blendFunc(b,c)},
cc:function(a,b,c,d){return a.bufferData(b,c,d)},
cd:function(a,b){return a.clear(b)},
ce:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
cf:function(a,b){return a.compileShader(b)},
cg:function(a){return a.createBuffer()},
ci:function(a){return a.createProgram()},
cj:function(a,b){return a.createShader(b)},
ck:function(a){return a.createTexture()},
cm:function(a,b){return a.depthMask(b)},
cn:function(a,b){return a.disable(b)},
co:function(a,b,c,d){return a.drawArrays(b,c,d)},
cp:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cq:function(a,b){return a.enable(b)},
cr:function(a,b){return a.enableVertexAttribArray(b)},
aJ:function(a){return P.iO(a.getContextAttributes())},
bj:function(a){return a.getError()},
bk:function(a,b){return a.getProgramInfoLog(b)},
bl:function(a,b,c){return a.getProgramParameter(b,c)},
bm:function(a,b){return a.getShaderInfoLog(b)},
bn:function(a,b,c){return a.getShaderParameter(b,c)},
bo:function(a,b,c){return a.getUniformLocation(b,c)},
cv:function(a,b){return a.linkProgram(b)},
bt:function(a,b,c){return a.shaderSource(b,c)},
bv:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cG:function(a,b,c,d,e,f,g,h,i,j){this.b2(a,b,c,d,e,f,g,h,i,j)
return},
b2:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
cH:function(a,b,c,d){return a.texParameterf(b,c,d)},
cI:function(a,b,c,d){return a.texParameteri(b,c,d)},
cK:function(a,b,c){return a.uniform1f(b,c)},
cL:function(a,b,c){return a.uniform1fv(b,c)},
cM:function(a,b,c){return a.uniform1i(b,c)},
cN:function(a,b,c){return a.uniform1iv(b,c)},
cO:function(a,b,c){return a.uniform2fv(b,c)},
cP:function(a,b,c){return a.uniform3fv(b,c)},
cQ:function(a,b,c){return a.uniform4fv(b,c)},
cR:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cS:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cU:function(a,b){return a.useProgram(b)},
cW:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cY:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fU.prototype={
eF:function(a,b){return a.beginTransformFeedback(b)},
eI:function(a,b){return a.bindVertexArray(b)},
eS:function(a){return a.createVertexArray()},
f2:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
f3:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
f4:function(a){return a.endTransformFeedback()},
fI:function(a,b,c,d){this.ey(a,b,c,d)
return},
ey:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
fJ:function(a,b,c){return a.vertexAttribDivisor(b,c)},
c3:function(a,b){return a.activeTexture(b)},
c6:function(a,b,c){return a.attachShader(b,c)},
c7:function(a,b,c){return a.bindBuffer(b,c)},
c8:function(a,b,c){return a.bindFramebuffer(b,c)},
c9:function(a,b,c){return a.bindTexture(b,c)},
ca:function(a,b){return a.blendEquation(b)},
cb:function(a,b,c){return a.blendFunc(b,c)},
cc:function(a,b,c,d){return a.bufferData(b,c,d)},
cd:function(a,b){return a.clear(b)},
ce:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
cf:function(a,b){return a.compileShader(b)},
cg:function(a){return a.createBuffer()},
ci:function(a){return a.createProgram()},
cj:function(a,b){return a.createShader(b)},
ck:function(a){return a.createTexture()},
cm:function(a,b){return a.depthMask(b)},
cn:function(a,b){return a.disable(b)},
co:function(a,b,c,d){return a.drawArrays(b,c,d)},
cp:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cq:function(a,b){return a.enable(b)},
cr:function(a,b){return a.enableVertexAttribArray(b)},
aJ:function(a){return P.iO(a.getContextAttributes())},
bj:function(a){return a.getError()},
bk:function(a,b){return a.getProgramInfoLog(b)},
bl:function(a,b,c){return a.getProgramParameter(b,c)},
bm:function(a,b){return a.getShaderInfoLog(b)},
bn:function(a,b,c){return a.getShaderParameter(b,c)},
bo:function(a,b,c){return a.getUniformLocation(b,c)},
cv:function(a,b){return a.linkProgram(b)},
bt:function(a,b,c){return a.shaderSource(b,c)},
bv:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cG:function(a,b,c,d,e,f,g,h,i,j){this.b2(a,b,c,d,e,f,g,h,i,j)
return},
b2:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
cH:function(a,b,c,d){return a.texParameterf(b,c,d)},
cI:function(a,b,c,d){return a.texParameteri(b,c,d)},
cK:function(a,b,c){return a.uniform1f(b,c)},
cL:function(a,b,c){return a.uniform1fv(b,c)},
cM:function(a,b,c){return a.uniform1i(b,c)},
cN:function(a,b,c){return a.uniform1iv(b,c)},
cO:function(a,b,c){return a.uniform2fv(b,c)},
cP:function(a,b,c){return a.uniform3fv(b,c)},
cQ:function(a,b,c){return a.uniform4fv(b,c)},
cR:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cS:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cU:function(a,b){return a.useProgram(b)},
cW:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cY:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.h3.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return P.iO(this.ed(a,b))},
k:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
ed:function(a,b){return a.item(b)},
$isk:1,
$ask:function(){return[P.b1]},
$asl:function(){return[P.b1]},
$ish:1,
$ash:function(){return[P.b1]},
$asn:function(){return[P.b1]}}
P.dm.prototype={}
P.dn.prototype={}
B.ja.prototype={
$1:function(a){$.$get$iP().k(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.aG]}}}
B.jb.prototype={
$1:function(a){$.$get$iP().k(0,a.which,null)},
$S:function(a){return{func:1,args:[W.aG]}}}
B.jc.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.nW=t
$.nX=C.b.a5(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.k8=s-C.b.G(window.innerWidth,2)
$.lJ=-(t-C.b.G(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.O]}}}
B.jd.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bY=t-C.b.G(window.innerWidth,2)
$.bZ=-(s-C.b.G(window.innerHeight,2))
if(a.button===2)$.$get$bX().k(0,"right",!0)
else $.$get$bX().k(0,"left",!0)},
$S:function(a){return{func:1,args:[W.O]}}}
B.je.prototype={
$1:function(a){if(a.button===2)$.$get$bX().k(0,"right",null)
else $.$get$bX().k(0,"left",null)},
$S:function(a){return{func:1,args:[W.O]}}}
B.fB.prototype={
dJ:function(a,b,c,d){var t
d.toString
W.X(d,W.mR(d),new B.fC(this),!1,W.aP)
W.X(d,"mousemove",new B.fD(this),!1,W.O)
t=W.aM
W.X(d,"touchstart",new B.fE(),!1,t)
W.X(d,"touchmove",new B.fF(this),!1,t)
B.oj(null)}}
B.fC.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.aw.geW(a)*r.k3
if(C.c.a5(r.fy,t)>0)r.fy=C.c.a5(r.fy,t)}catch(q){s=H.L(q)
P.I(s)}},
$S:function(a){return{func:1,args:[W.aP]}}}
B.fD.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.a5($.k8,$.bY)*0.01
s=t.id
r=$.bZ
q=$.lJ
t.id=s+(r-q)*0.01
$.bY=$.k8
$.bZ=q}},
$S:function(a){return{func:1,args:[W.O]}}}
B.fE.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.ab(t.clientX)
C.c.ab(t.clientY)
$.bY=s
C.c.ab(t.clientX)
$.bZ=C.c.ab(t.clientY)},
$S:function(a){return{func:1,args:[W.aM]}}}
B.fF.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.ab(t.clientX)
t=C.c.ab(t.clientY)
r=this.a
r.go=r.go+C.b.a5(s,$.bY)*0.01
r.id=r.id+($.bZ-t)*0.01
$.bY=s
$.bZ=t},
$S:function(a){return{func:1,args:[W.aM]}}}
L.c2.prototype={
l:function(a){return"BONE["+this.d+"] ("+H.d(this.e)+") "+H.d(this.a)+"\ntrans:\n"+this.b.l(0)+"offset:\n"+this.c.l(0)}}
L.dU.prototype={
dz:function(a){var t,s,r
for(t=this.b,s=this.a,r=0;r<a;++r){s[r]=new T.B(new Float32Array(16))
t[r]=new T.B(new Float32Array(16))}}}
L.c3.prototype={
l:function(a){var t=[]
C.a.j(t,H.d(this.a.a))
C.a.j(t,""+this.b.length+": "+H.d(this.c))
C.a.j(t,""+this.d.length+": "+H.d(this.e))
C.a.j(t,""+this.f.length+": "+H.d(this.r))
return C.a.aa(t,"\n")},
seg:function(a){this.b=a},
seh:function(a){this.c=a},
sep:function(a){this.d=a},
seq:function(a){this.e=a},
seu:function(a){this.f=a},
sev:function(a){this.r=a}}
L.h_.prototype={
l:function(a){return"SkeletalAnimation["+H.d(this.a)+", duration: "+H.d(this.c)+", frames: "+this.b.length+"]"}}
G.fn.prototype={}
G.cU.prototype={
a6:function(a,b){var t=this.d
if(H.a_(!t.B(0,a)))H.a6("uniform "+a+" already set")
t.k(0,a,b)},
bE:function(){return this.d},
l:function(a){var t,s,r,q
t=H.v(["{"+new H.au(H.iU(this),null).l(0)+"}["+this.a+"]"],[P.m])
for(s=this.d,r=s.gA(s),r=r.gu(r);r.p();){q=r.gq(r)
C.a.j(t,H.d(q)+": "+H.d(s.h(0,q)))}return C.a.aa(t,"\n")}}
G.dZ.prototype={}
G.e1.prototype={
cs:function(a,b,c){J.mc(this.a,b)
if(c>0)J.mB(this.a,b,c)},
cX:function(a,b,c,d,e,f,g,h){J.jk(this.a,34962,b)
J.mC(this.a,c,d,e,!1,g,h)}}
G.eQ.prototype={}
G.eG.prototype={}
G.eH.prototype={}
G.eT.prototype={
ax:function(a){var t=this.e
H.b(!t.B(0,a))
H.b(C.i.bu(a,"a"))
switch($.$get$T().h(0,a).a){case"vec2":t.k(0,a,H.v([],[T.aj]))
break
case"vec3":t.k(0,a,H.v([],[T.o]))
break
case"vec4":t.k(0,a,H.v([],[T.W]))
break
case"float":t.k(0,a,H.v([],[P.Y]))
break
case"uvec4":t.k(0,a,H.v([],[[P.h,P.y]]))
break
default:if(H.a_(!1))H.a6("unknown type for "+a)}},
du:function(a){var t,s,r,q,p,o
H.b(a.length===3)
t=this.d
s=t.length
C.a.j(this.b,new G.eG(s,s+1,s+2))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.C)(a),++q){p=a[q]
p.toString
o=new T.o(new Float32Array(3))
o.C(p)
C.a.j(t,o)}},
ds:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.C)(b),++q){p=b[q]
p.toString
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.j(t,new T.aj(o))}},
dt:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.C)(b),++q){p=b[q]
p.toString
o=new T.o(new Float32Array(3))
o.C(p)
r.j(t,o)}},
bx:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.C)(b),++q){p=b[q]
p.toString
o=new T.W(new Float32Array(4))
o.C(p)
r.j(t,o)}},
dv:function(a){var t,s,r,q,p,o
H.b(a.length===4)
t=this.d
s=t.length
C.a.j(this.c,new G.eH(s,s+1,s+2,s+3))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.C)(a),++q){p=a[q]
p.toString
o=new T.o(new Float32Array(3))
o.C(p)
C.a.j(t,o)}},
dD:function(){var t,s,r,q,p,o,n,m,l
t=this.b
H.b(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.v(r,[P.y])
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
for(s=this.e,r=s.gA(s),r=r.gu(r);r.p();){q=r.gq(r)
p=$.$get$T().h(0,q).a
C.a.j(t,H.d(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.aa(t," ")}}
G.cR.prototype={}
G.cQ.prototype={}
G.fi.prototype={
dH:function(a){this.a6("cDepthTest",!0)
this.a6("cDepthWrite",!0)
this.a6("cBlendEquation",$.$get$ko())
this.a6("cStencilFunc",$.$get$l1())}}
G.fk.prototype={
bA:function(a,b,c){var t,s
if(C.i.aP(a,0)===105){if(H.a_(C.b.af(b.length,c)===this.z))H.a6("ChangeAttribute "+this.z)}else{t=C.b.af(b.length,c)
if(H.a_(t===(this.ch.length/3|0)))H.a6("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.k(0,a,b)
t=this.d
s=this.r.h(0,a)
J.jk(t.a,34962,s)
J.kd(t.a,34962,b,35048)},
bB:function(a){this.ch=a
this.bA("aPosition",a,3)},
bC:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
ag:function(a,b,c){var t,s,r,q,p,o
t=J.ka(a,0)===105
if(t&&this.z===0)this.z=C.b.af(b.length,c)
s=this.r
r=this.d
s.k(0,a,J.jm(r.a))
this.bA(a,b,c)
q=$.$get$T().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.a_(p.B(0,a)))H.a6("unexpected attribute "+a)
o=p.h(0,a)
J.dP(r.a,this.e)
r.cs(0,o,t?1:0)
r.cX(0,s.h(0,a),o,q.bD(),5126,!1,0,0)},
bz:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.k(0,"aPosition",J.jm(s.a))
this.bB(a)
r=$.$get$T().h(0,"aPosition")
if(r==null)throw H.c("Unknown canonical aPosition")
q=this.x
H.b(q.B(0,"aPosition"))
p=q.h(0,"aPosition")
J.dP(s.a,this.e)
s.cs(0,p,0)
s.cX(0,t.h(0,"aPosition"),p,r.bD(),5126,!1,0,0)},
by:function(a){var t,s,r,q
t=this.d
this.y=J.jm(t.a)
H.b(this.ch!=null)
s=this.ch.length
if(s<768){this.saV(new Uint8Array(H.iI(a)))
this.Q=5121}else if(s<196608){this.saV(new Uint16Array(H.iI(a)))
this.Q=5123}else{this.saV(new Uint32Array(H.iI(a)))
this.Q=5125}J.dP(t.a,this.e)
s=this.y
r=this.cx
q=J.q(r)
H.b(!!q.$islf||!!q.$islg||!!q.$islh)
J.jk(t.a,34963,s)
J.kd(t.a,34963,r,35048)},
l:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gA(t),r=r.gu(r);r.p();){q=r.gq(r)
C.a.j(s,H.d(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.aa(s,"  ")},
saV:function(a){this.cx=a}}
G.fH.prototype={
dw:function(a,b){var t=C.b.d_(a,b)
if(this.z===t)return
this.z=t
this.bH()},
bH:function(){var t,s,r,q,p,o,n
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
t.ae(0,0,1/(p*s))
t.ae(1,1,1/p)
t.ae(2,2,(q+r)/o)
t.ae(3,2,-1)
t.ae(2,3,2*r*q/o)},
bE:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.o(new Float32Array(3))
o.W(r,q,p)
p=this.d
p.k(0,"uEyePosition",o)
o=this.cy
o.C(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.q(n)
r=!!s.$isW
k=r?s.gau(n):1
if(!!s.$iso){j=s.gm(n)
m=s.gn(n)
l=s.gH(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gH(n)
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
a3.C(this.db)
a3.a2(0,o)
p.k(0,"uPerspectiveViewMatrix",a3)
return p}}
G.ei.prototype={
l:function(a){return"["+this.a+"] "+this.b+" "+this.c+" mode:"+this.d+" ["+this.e.a+"usec]"}}
G.fS.prototype={
dL:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){n=t[o]
r.k(0,n,J.kg(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){n=t[o]
r.k(0,n,J.kg(q.a,p,n))}},
dE:function(a){var t,s,r,q,p
t=this.e.x
s=a.e.x
for(r=t.gA(t),r=r.gu(r);r.p();){q=r.gq(r)
p=t.h(0,q)
q=s.h(0,q)
if(p==null?q!=null:p!==q)return!1}return!0},
dP:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gi(t)===s.gi(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gA(s),s=s.gu(s);s.p();){q=s.gq(s)
if(!t.B(0,q))C.a.j(r,q)}for(t=this.x,s=new P.bH(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.E(0,q))C.a.j(r,q)}return r},
dS:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gA(b),s=s.gu(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq(s)
switch(J.ka(n,0)){case 117:if(q.B(0,n)){m=b.h(0,n)
if(p.B(0,n))H.bg("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.k(0,n,a)
l=$.$get$T().h(0,n)
if(l==null)H.K("unknown "+n)
H.b(q.B(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.jr(r.a,k,m)
else if(!!J.q(m).$iskJ)J.mz(r.a,k,m)
break
case"float":if(l.c===0)J.mx(r.a,k,m)
else if(!!J.q(m).$iseM)J.my(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.an(m,"$isB").a
J.km(r.a,k,!1,n)}else if(!!J.q(m).$iseM)J.km(r.a,k,!1,m)
else if(H.a_(!1))H.a6("bad unform: "+n)
break
case"mat3":if(l.c===0){n=H.an(m,"$isas").a
J.kl(r.a,k,!1,n)}else if(!!J.q(m).$iseM)J.kl(r.a,k,!1,m)
else if(H.a_(!1))H.a6("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.kk(j,k,H.an(m,"$isW").a)
else J.kk(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.kj(j,k,H.an(m,"$iso").a)
else J.kj(j,k,m)
break
case"vec2":n=l.c
j=r.a
if(n===0)J.ki(j,k,H.an(m,"$isaj").a)
else J.ki(j,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.a3(33984,this.ch)
J.kb(r.a,n)
n=H.an(m,"$isbE").b
J.dO(r.a,3553,n)
n=this.ch
J.jr(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.a3(33984,this.ch)
J.kb(r.a,n)
n=H.an(m,"$isbE").b
J.dO(r.a,34067,n)
n=this.ch
J.jr(r.a,k,n)
this.ch=this.ch+1
break
default:H.bg("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.F(m,!0)
j=r.a
if(n)J.dQ(j,2929)
else J.jn(j,2929)
break
case"cStencilFunc":H.an(m,"$iscR")
n=m.a
j=r.a
if(n===1281)J.jn(j,2960)
else{J.dQ(j,2960)
j=m.b
i=m.c
J.ms(r.a,n,j,i)}break
case"cDepthWrite":J.m6(r.a,m)
break
case"cBlendEquation":H.an(m,"$iscQ")
n=m.a
j=r.a
if(n===1281)J.jn(j,3042)
else{J.dQ(j,3042)
j=m.b
i=m.c
J.m_(r.a,j,i)
J.lZ(r.a,n)}break}++o
break}}h=P.kF(0,0,0,Date.now()-new P.aA(t,!1).a,0,0)
""+o
h.l(0)},
dC:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t=Date.now()
s=this.d
J.mA(s.a,this.r)
this.ch=0
this.z.Z(0)
for(r=b.length,q=0;q<b.length;b.length===r||(0,H.C)(b),++q){p=b[q]
this.dS(p.a,p.bE())}r=this.Q
r.Z(0)
for(o=a.cy,o=o.gA(o),o=o.gu(o);o.p();)r.j(0,o.gq(o))
n=this.dP()
if(n.length!==0)P.I("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.d(n)))
r=a.d
o=a.e
J.dP(r.a,o)
m=this.e.f.length>0
o=a.f
r=a.bC()
l=a.Q
k=a.z
if(m)J.lX(s.a,o)
if(l!==-1){j=s.a
if(k>1)J.ma(j,o,r,l,0,k)
else J.m9(j,o,r,l,0)}else{l=s.a
if(k>1)J.m8(l,o,0,r,k)
else J.m7(l,o,0,r)}if(m)J.md(s.a)
C.a.j(c,new G.ei(this.a,a.z,a.bC(),o,P.kF(0,0,0,Date.now()-new P.aA(t,!1).a,0,0)))}}
G.A.prototype={
bD:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.fZ.prototype={
aM:function(a){var t,s,r,q,p
H.b(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.C)(a),++q){p=a[q]
H.b($.$get$T().B(0,p))
H.b(!C.a.E(s,p))
C.a.j(s,p)
r.k(0,p,this.r);++this.r}C.a.aK(s)},
av:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=a[r]
if(H.a_($.$get$T().B(0,q)))H.a6("missing uniform "+q)
H.b(!C.a.E(s,q))
C.a.j(s,q)}C.a.aK(s)},
aw:function(a){var t,s,r
H.b(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.b($.$get$T().B(0,r))
H.b(!C.a.E(t,r))
C.a.j(t,r)}C.a.aK(t)},
bG:function(a,b){H.b(this.b==null)
this.b=this.bI(!0,a,b)},
aN:function(a){return this.bG(a,null)},
dM:function(a,b){H.b(this.b==null)
this.b=this.bI(!1,a,b)},
bF:function(a){return this.dM(a,null)},
bI:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){n=t[o]
m=$.$get$T().h(0,n)
C.a.j(q,"layout (location="+H.d(p.h(0,n))+") in "+m.a+" "+H.d(n)+";")}C.a.j(q,"")
l=r?"in":"out"
if(r)C.a.j(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){k=t[o]
m=$.$get$T().h(0,k)
C.a.j(q,l+" "+m.a+" "+H.d(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){k=t[o]
m=$.$get$T().h(0,k)
C.a.j(q,l+" "+m.a+" "+H.d(k)+";")}C.a.j(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){k=t[o]
m=$.$get$T().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.j(q,"uniform "+m.a+" "+H.d(k)+j+";")}C.a.j(q,"")
if(c!=null)C.a.N(q,c)
if(a)C.a.j(q,"void main(void) {")
C.a.N(q,b)
if(a)C.a.j(q,"}")
return C.a.aa(q,"\n")}}
G.h1.prototype={
fl:function(a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t=this.d.a
s=t[12]
r=t[13]
q=t[14]
a1=new T.o(new Float32Array(3))
a1.W(0,1,0)
p=this.e
o=p.a
o[0]=t[12]
o[1]=t[13]
o[2]=t[14]
o=new Float32Array(3)
n=new T.o(o)
n.C(p)
m=a0.a
o[0]=o[0]-m[0]
o[1]=o[1]-m[1]
o[2]=o[2]-m[2]
n.b9(0)
l=a1.cl(n)
l.b9(0)
k=n.cl(l)
k.b9(0)
j=l.b6(p)
i=k.b6(p)
p=n.b6(p)
h=l.a
g=h[0]
f=k.a
e=f[0]
d=o[0]
c=h[1]
b=f[1]
a=o[1]
h=h[2]
f=f[2]
o=o[2]
t[15]=1
t[14]=-p
t[13]=-i
t[12]=-j
t[11]=0
t[10]=o
t[9]=f
t[8]=h
t[7]=0
t[6]=a
t[5]=b
t[4]=c
t[3]=0
t[2]=d
t[1]=e
t[0]=g
t[12]=s
t[13]=r
t[14]=q},
b8:function(a){return this.fl(a,null)}}
G.hk.prototype={
dF:function(a,b){var t=this.e
if(t!==1)J.mu(a.a,b,34046,t)
t=this.r
J.dR(a.a,b,10240,t)
t=this.f
J.dR(a.a,b,10241,t)
if(this.b){J.dR(a.a,b,10242,33071)
J.dR(a.a,b,10243,33071)}}}
G.bE.prototype={
l:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.hv.prototype={
l:function(a){return"TypedTextureMutable["+this.a+", "+this.x+", "+this.f+" X "+this.r+"]"}}
R.dY.prototype={}
R.cE.prototype={
cB:function(a){var t,s,r
t=this.db
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.I("size change "+H.d(s)+" "+H.d(r))
this.dx.dw(s,r)
this.z=s
this.Q=r}}
R.h5.prototype={
dN:function(a,b,c){var t,s,r
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
J.jj(this.a,s)
r=this.dW(b,c,90,30)
this.d=r
J.jj(this.a,r)
t=t.createElement("div")
this.c=t
J.jj(this.a,t)},
dW:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.ny("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.v).bP(r,"float")
r.setProperty(p,"left","")
p=C.v.bP(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.q.S(t,s)}return t}}
R.h6.prototype={
dR:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.n.fH(s,2)+" fps"
t=this.c;(t&&C.q).df(t,b)
r=C.b.G(30*C.n.eJ(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.q).S(t,q)},
dQ:function(a){return this.dR(a,"")}}
A.bu.prototype={
dI:function(a,b){C.a.j(this.cy,b)},
l:function(a){return"NODE["+this.a+"]"}}
A.b4.prototype={}
A.fR.prototype={
dK:function(a,b,c){if(this.d==null)this.d=new G.eQ(this.e,null,null,null,null)},
dB:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.lY(p.a,36160,t)
H.b(r>0&&q>0)
J.mD(p.a,this.x,this.y,r,q)
if(s!==0)J.m0(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){n=t[o]
if(!n.c)continue
r=n.d
if(!r.c)continue
m=n.e
C.a.j(m,new G.cU(P.U(),"transforms",!1,!0))
l=new T.B(new Float32Array(16))
l.J()
for(q=n.f,p=q.length,k=0;k<q.length;q.length===p||(0,H.C)(q),++k)A.lD(r,q[k],l,a,m)
m.pop()}}}
D.fc.prototype={
$1:function(a){this.a.aE(0,C.U.eT(0,W.nI(this.b.response)))},
$S:function(a){return{func:1,args:[,]}}}
A.iV.prototype={
$2:function(a,b){var t=536870911&a+J.bi(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.y,P.E]}}}
T.as.prototype={
C:function(a){var t,s
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
l:function(a){return"[0] "+this.U(0).l(0)+"\n[1] "+this.U(1).l(0)+"\n[2] "+this.U(2).l(0)+"\n"},
h:function(a,b){return this.a[b]},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.as){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gv:function(a){return A.dL(this.a)},
U:function(a){var t,s
t=new Float32Array(3)
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.o(t)},
b5:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g===0){this.C(a)
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
T.B.prototype={
ae:function(a,b,c){H.b(a<4)
H.b(b<4)
this.a[b*4+a]=c},
C:function(a){var t,s
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
br:function(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t=a0.a
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=s+s
n=r+r
m=q+q
l=s*o
k=s*n
j=s*m
i=r*n
h=r*m
g=q*m
f=p*o
e=p*n
d=p*m
c=a.a
b=this.a
b[0]=1-(i+g)
b[1]=k+d
b[2]=j-e
b[3]=0
b[4]=k-d
b[5]=1-(l+g)
b[6]=h+f
b[7]=0
b[8]=j+e
b[9]=h-f
b[10]=1-(l+i)
b[11]=0
b[12]=c[0]
b[13]=c[1]
b[14]=c[2]
b[15]=1},
l:function(a){return"[0] "+this.U(0).l(0)+"\n[1] "+this.U(1).l(0)+"\n[2] "+this.U(2).l(0)+"\n[3] "+this.U(3).l(0)+"\n"},
h:function(a,b){return this.a[b]},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.B){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gv:function(a){return A.dL(this.a)},
U:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.W(t)},
F:function(a,b){var t=new T.B(new Float32Array(16))
t.C(this)
t.a2(0,b)
return t},
cC:function(a){var t,s,r,q,p,o,n,m,l,k,j,i
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
d3:function(a,b,c,d){var t,s,r,q
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
V:function(a,b){return this.d3(a,b,null,null)},
J:function(){var t=this.a
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
b5:function(b4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
t=b4.a
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
n=t[5]
m=t[6]
l=t[7]
k=t[8]
j=t[9]
i=t[10]
h=t[11]
g=t[12]
f=t[13]
e=t[14]
d=t[15]
c=s*n-r*o
b=s*m-q*o
a=s*l-p*o
a0=r*m-q*n
a1=r*l-p*n
a2=q*l-p*m
a3=k*f-j*g
a4=k*e-i*g
a5=k*d-h*g
a6=j*e-i*f
a7=j*d-h*f
a8=i*d-h*e
a9=c*a8-b*a7+a*a6+a0*a5-a1*a4+a2*a3
if(a9===0){this.C(b4)
return 0}b0=1/a9
b1=this.a
b1[0]=(n*a8-m*a7+l*a6)*b0
b1[1]=(-r*a8+q*a7-p*a6)*b0
b1[2]=(f*a2-e*a1+d*a0)*b0
b1[3]=(-j*a2+i*a1-h*a0)*b0
b2=-o
b1[4]=(b2*a8+m*a5-l*a4)*b0
b1[5]=(s*a8-q*a5+p*a4)*b0
b3=-g
b1[6]=(b3*a2+e*a-d*b)*b0
b1[7]=(k*a2-i*a+h*b)*b0
b1[8]=(o*a7-n*a5+l*a3)*b0
b1[9]=(-s*a7+r*a5-p*a3)*b0
b1[10]=(g*a1-f*a+d*c)*b0
b1[11]=(-k*a1+j*a-h*c)*b0
b1[12]=(b2*a6+n*a4-m*a3)*b0
b1[13]=(s*a6-r*a4+q*a3)*b0
b1[14]=(b3*a0+f*b-e*c)*b0
b1[15]=(k*a0-j*b+i*c)*b0
return a9},
a2:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.bx.prototype={
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gH:function(a){return this.a[2]},
gau:function(a){return this.a[3]},
dh:function(a,b,c,d){var t=this.a
t[0]=a
t[1]=b
t[2]=c
t[3]=d},
gi:function(a){var t,s,r,q,p
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=t[3]
return Math.sqrt(s*s+r*r+q*q+p*p)},
h:function(a,b){return this.a[b]},
l:function(a){var t=this.a
return H.d(t[0])+", "+H.d(t[1])+", "+H.d(t[2])+" @ "+H.d(t[3])}}
T.aj.prototype={
l:function(a){var t=this.a
return"["+H.d(t[0])+","+H.d(t[1])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aj){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gv:function(a){return A.dL(this.a)},
h:function(a,b){return this.a[b]},
gi:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.o.prototype={
W:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
C:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
l:function(a){var t=this.a
return"["+H.d(t[0])+","+H.d(t[1])+","+H.d(t[2])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.o){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gv:function(a){return A.dL(this.a)},
F:function(a,b){return this.d4(b)},
h:function(a,b){return this.a[b]},
gi:function(a){return Math.sqrt(this.gb7())},
gb7:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
b9:function(a){var t,s,r
t=Math.sqrt(this.gb7())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
b6:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
cl:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.o(new Float32Array(3))
t.W(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
V:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
d4:function(a){var t=new T.o(new Float32Array(3))
t.C(this)
t.V(0,a)
return t},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gH:function(a){return this.a[2]}}
T.W.prototype={
C:function(a){var t,s
t=a.a
s=this.a
s[3]=t[3]
s[2]=t[2]
s[1]=t[1]
s[0]=t[0]},
l:function(a){var t=this.a
return H.d(t[0])+","+H.d(t[1])+","+H.d(t[2])+","+H.d(t[3])},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.W){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gv:function(a){return A.dL(this.a)},
F:function(a,b){var t=new T.W(new Float32Array(4))
t.C(this)
t.V(0,b)
return t},
h:function(a,b){return this.a[b]},
gi:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
V:function(a,b){var t=this.a
t[0]=t[0]*b
t[1]=t[1]*b
t[2]=t[2]*b
t[3]=t[3]*b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gH:function(a){return this.a[2]},
gau:function(a){return this.a[3]}}
B.j6.prototype={
$1:function(a){var t=H.an(J.mj(a),"$isbo")
P.I(H.d(t.id)+" toggle "+H.d(t.checked))
this.a.h(0,t.id).c=t.checked},
$S:function(a){return{func:1,args:[W.f]}}}
B.j5.prototype={
$1:function(b2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
t=this.a
t.d=b2+0
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
s.id=0}r=C.c.eK(s.id,-1.4707963267948965,1.4707963267948965)
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
s.b8(p)
p=s.f
r=p.a
r[0]=m[2]
r[1]=m[6]
r[2]=m[10]
s=-s.k1
l=Math.sqrt(p.gb7())
k=r[0]/l
j=r[1]/l
i=r[2]/l
h=Math.cos(s)
g=Math.sin(s)
f=1-h
e=k*k*f+h
s=i*g
d=k*j*f-s
r=j*g
c=k*i*f+r
b=j*k*f+s
a=j*j*f+h
s=k*g
a0=j*i*f-s
a1=i*k*f-r
a2=i*j*f+s
a3=i*i*f+h
s=m[0]
r=m[4]
p=m[8]
q=m[1]
n=m[5]
a4=m[9]
a5=m[2]
a6=m[6]
a7=m[10]
a8=m[3]
a9=m[7]
b0=m[11]
m[0]=s*e+r*b+p*a1
m[1]=q*e+n*b+a4*a1
m[2]=a5*e+a6*b+a7*a1
m[3]=a8*e+a9*b+b0*a1
m[4]=s*d+r*a+p*a2
m[5]=q*d+n*a+a4*a2
m[6]=a5*d+a6*a+a7*a2
m[7]=a8*d+a9*a+b0*a2
m[8]=s*c+r*a0+p*a3
m[9]=q*c+n*a0+a4*a3
m[10]=a5*c+a6*a0+a7*a3
m[11]=a8*c+a9*a0+b0*a3
this.c.dB([])
C.ax.geD(window).be(this)
this.d.dQ(t.d)
b0=b2/1000
this.e.d.k(0,"uTime",C.b.bp(C.n.f6(b0/0.0333),t.c.length))
t=t.a
a9=t.c
a8=t.a
m=t.d
L.jR(a9,a8,m,t.e,C.n.bp(b0,m.c))
b1=R.kp(a9,t.e,1)
t.b.bB(G.eL(b1,null))},
$S:function(a){return{func:1,v:true,args:[P.a9]}}}
B.j7.prototype={
$1:function(a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t=new T.B(new Float32Array(16))
t.J()
s=J.x(a0)
r=Y.mZ(s.h(a0,0))
q=Y.n_(s.h(a0,0))
p=Y.mY(s.h(a0,0),q)
s=this.b
o=s.d
n=r[0]
m=G.kV("../asset/knight/knight.js",o.d,4,o.e.x)
m.bz(G.eL(n.d,null))
m.by(n.dD())
G.nB(n,m)
o=this.c
n=new Float32Array(9)
l=new T.B(new Float32Array(16))
l.J()
k=new T.B(new Float32Array(16))
k.J()
j=new Float32Array(3)
i=new Float32Array(3)
h=new Float32Array(3)
g=new Float32Array(3)
k.cC(-0.785)
f=A.kW("wrapper",new A.bu(o,m,[],new T.as(n),l,k,new T.o(j),new T.o(i),new T.o(h),new T.o(g),m.a,!1,!0))
n=new T.o(new Float32Array(3))
n.W(100,0,0)
f.b8(n)
H.b(!0)
C.a.j(this.d.f,f)
H.b(!0)
C.a.j(s.f,f)
s=this.a
s.c=[]
for(n=p.c,e=0;C.c.I(e,n);e+=0.0333){l=s.c;(l&&C.a).j(l,e)}d=L.mM(q,t,p,s.c)
n=this.e
l=q.length
k=l*4
j=s.c.length
i=$.$get$l3()
h=J.m4(n.a)
c=new G.hv(k,j,34836,"anim",h,3553,n,i)
J.dO(n.a,3553,h)
J.mt(n.a,3553,0,34836,k,j,0,6408,5126,d)
i.dF(n,3553)
b=J.mm(n.a)
if(H.a_(b===0))H.a6("texture error "+H.d(b))
J.dO(n.a,3553,null)
s.b=c
o.a6("uAnimationTable",c)
o=this.f
n=new T.B(new Float32Array(16))
n.J()
a=new R.dY(n,null,q,p,null,null)
l=L.kn(l)
a.e=l
L.jR(q,n,p,l,0)
l=G.n9("wire",o.d,R.kp(q,l,1))
a.b=l
n=new Float32Array(9)
k=new T.B(new Float32Array(16))
k.J()
j=new T.B(new Float32Array(16))
j.J()
i=new Float32Array(3)
h=new Float32Array(3)
g=new Float32Array(3)
n=new A.bu(this.r,l,[],new T.as(n),k,j,new T.o(i),new T.o(h),new T.o(g),new T.o(new Float32Array(3)),l.a,!1,!0)
a.f=n
s.a=a
j.cC(0.785)
f=A.kW("wrapper",n)
s=new T.o(new Float32Array(3))
s.W(100,0,0)
f.b8(s)
H.b(!0)
C.a.j(o.f,f)
this.x.$1(0)},
$S:function(a){return{func:1,args:[P.h]}}}
J.a.prototype.dl=J.a.prototype.l
J.bp.prototype.dn=J.bp.prototype.l
P.Q.prototype.dm=P.Q.prototype.aI
W.a2.prototype.aL=W.a2.prototype.O
W.bN.prototype.dq=W.bN.prototype.Y;(function installTearOffs(){installTearOff(H.b8.prototype,"gfj",0,0,0,null,["$0"],["aG"],0)
installTearOff(H.a5.prototype,"gd6",0,0,0,null,["$1"],["M"],2)
installTearOff(H.aQ.prototype,"geY",0,0,0,null,["$1"],["a_"],2)
installTearOff(P,"nS",1,0,0,null,["$1"],["nu"],1)
installTearOff(P,"nT",1,0,0,null,["$1"],["nv"],1)
installTearOff(P,"nU",1,0,0,null,["$1"],["nw"],1)
installTearOff(P,"lA",1,0,0,null,["$0"],["nQ"],0)
installTearOff(P.M.prototype,"ge2",0,0,0,null,["$2","$1"],["L","e3"],5)
installTearOff(P,"o_",1,0,0,null,["$2"],["mK"],7)
installTearOff(W,"o4",1,0,0,null,["$4"],["nC"],4)
installTearOff(W,"o5",1,0,0,null,["$4"],["nD"],4)
installTearOff(W.cy.prototype,"gbb",0,1,0,null,["$0"],["bc"],3)
installTearOff(W.cT.prototype,"gbb",0,1,0,null,["$0"],["bc"],3)
installTearOff(R.cE.prototype,"gfw",0,0,0,null,["$1"],["cB"],6)
installTearOff(B,"lv",1,0,0,null,["$0"],["od"],0)})();(function inheritance(){inherit(P.E,null)
var t=P.E
inherit(H.jB,t)
inherit(J.a,t)
inherit(J.c0,t)
inherit(P.Q,t)
inherit(H.cq,t)
inherit(P.cm,t)
inherit(H.b_,t)
inherit(H.az,t)
inherit(H.ip,t)
inherit(H.b8,t)
inherit(H.hW,t)
inherit(H.aR,t)
inherit(H.io,t)
inherit(H.hQ,t)
inherit(H.cD,t)
inherit(H.hm,t)
inherit(H.ax,t)
inherit(H.a5,t)
inherit(H.aQ,t)
inherit(H.fQ,t)
inherit(H.hs,t)
inherit(P.aZ,t)
inherit(H.dp,t)
inherit(H.au,t)
inherit(P.aJ,t)
inherit(H.f8,t)
inherit(H.fa,t)
inherit(P.a3,t)
inherit(P.jw,t)
inherit(P.hR,t)
inherit(P.d6,t)
inherit(P.M,t)
inherit(P.cW,t)
inherit(P.h9,t)
inherit(P.ha,t)
inherit(P.cL,t)
inherit(P.jM,t)
inherit(P.aV,t)
inherit(P.iG,t)
inherit(P.fY,t)
inherit(P.ik,t)
inherit(P.bH,t)
inherit(P.jF,t)
inherit(P.bI,t)
inherit(P.l,t)
inherit(P.im,t)
inherit(P.c5,t)
inherit(P.al,t)
inherit(P.G,t)
inherit(P.aA,t)
inherit(P.a9,t)
inherit(P.aC,t)
inherit(P.cJ,t)
inherit(P.jy,t)
inherit(P.i_,t)
inherit(P.eP,t)
inherit(P.en,t)
inherit(P.h,t)
inherit(P.b1,t)
inherit(P.P,t)
inherit(P.b5,t)
inherit(P.m,t)
inherit(P.bA,t)
inherit(P.jP,t)
inherit(W.e7,t)
inherit(W.bG,t)
inherit(W.n,t)
inherit(W.cA,t)
inherit(W.bN,t)
inherit(W.iB,t)
inherit(W.ch,t)
inherit(W.hT,t)
inherit(W.cz,t)
inherit(W.jJ,t)
inherit(W.jS,t)
inherit(W.iw,t)
inherit(W.dz,t)
inherit(P.hH,t)
inherit(P.ir,t)
inherit(G.fn,t)
inherit(L.c2,t)
inherit(L.dU,t)
inherit(L.c3,t)
inherit(L.h_,t)
inherit(G.e1,t)
inherit(G.eQ,t)
inherit(G.eG,t)
inherit(G.eH,t)
inherit(G.eT,t)
inherit(G.cR,t)
inherit(G.cQ,t)
inherit(G.ei,t)
inherit(G.A,t)
inherit(G.fZ,t)
inherit(G.hk,t)
inherit(G.bE,t)
inherit(R.dY,t)
inherit(R.h5,t)
inherit(T.as,t)
inherit(T.B,t)
inherit(T.bx,t)
inherit(T.aj,t)
inherit(T.o,t)
inherit(T.W,t)
t=J.a
inherit(J.f1,t)
inherit(J.f2,t)
inherit(J.bp,t)
inherit(J.aD,t)
inherit(J.b0,t)
inherit(J.aE,t)
inherit(H.bt,t)
inherit(H.b2,t)
inherit(W.e,t)
inherit(W.dS,t)
inherit(W.e_,t)
inherit(W.aY,t)
inherit(W.a1,t)
inherit(W.cY,t)
inherit(W.ec,t)
inherit(W.ed,t)
inherit(W.ee,t)
inherit(W.ca,t)
inherit(W.cb,t)
inherit(W.cZ,t)
inherit(W.cd,t)
inherit(W.d0,t)
inherit(W.eh,t)
inherit(W.f,t)
inherit(W.d4,t)
inherit(W.eV,t)
inherit(W.d7,t)
inherit(W.fd,t)
inherit(W.fj,t)
inherit(W.db,t)
inherit(W.cy,t)
inherit(W.de,t)
inherit(W.af,t)
inherit(W.di,t)
inherit(W.cB,t)
inherit(W.dk,t)
inherit(W.ag,t)
inherit(W.dq,t)
inherit(W.dt,t)
inherit(W.hl,t)
inherit(W.dv,t)
inherit(W.hq,t)
inherit(W.cT,t)
inherit(W.hz,t)
inherit(W.hB,t)
inherit(W.dA,t)
inherit(W.dC,t)
inherit(W.dE,t)
inherit(W.dG,t)
inherit(W.dI,t)
inherit(P.d9,t)
inherit(P.dg,t)
inherit(P.fK,t)
inherit(P.fL,t)
inherit(P.fO,t)
inherit(P.dr,t)
inherit(P.dx,t)
inherit(P.dW,t)
inherit(P.fT,t)
inherit(P.fU,t)
inherit(P.dm,t)
t=J.bp
inherit(J.fI,t)
inherit(J.aO,t)
inherit(J.aF,t)
inherit(J.jA,J.aD)
t=J.b0
inherit(J.co,t)
inherit(J.cn,t)
t=P.Q
inherit(H.k,t)
inherit(H.cr,t)
inherit(H.cV,t)
t=H.k
inherit(H.aI,t)
inherit(H.f9,t)
inherit(H.el,H.cr)
t=P.cm
inherit(H.fg,t)
inherit(H.hF,t)
t=H.aI
inherit(H.br,t)
inherit(P.fb,t)
inherit(P.ii,t)
t=H.az
inherit(H.jf,t)
inherit(H.jg,t)
inherit(H.ig,t)
inherit(H.hX,t)
inherit(H.eY,t)
inherit(H.eZ,t)
inherit(H.iq,t)
inherit(H.hn,t)
inherit(H.ho,t)
inherit(H.jh,t)
inherit(H.j_,t)
inherit(H.j0,t)
inherit(H.j1,t)
inherit(H.j2,t)
inherit(H.j3,t)
inherit(H.hh,t)
inherit(H.f3,t)
inherit(H.iW,t)
inherit(H.iX,t)
inherit(H.iY,t)
inherit(P.hM,t)
inherit(P.hL,t)
inherit(P.hN,t)
inherit(P.hO,t)
inherit(P.eS,t)
inherit(P.eR,t)
inherit(P.i0,t)
inherit(P.i8,t)
inherit(P.i4,t)
inherit(P.i5,t)
inherit(P.i6,t)
inherit(P.i2,t)
inherit(P.i7,t)
inherit(P.i1,t)
inherit(P.ib,t)
inherit(P.ic,t)
inherit(P.ia,t)
inherit(P.i9,t)
inherit(P.hb,t)
inherit(P.hc,t)
inherit(P.iK,t)
inherit(P.iu,t)
inherit(P.it,t)
inherit(P.iv,t)
inherit(P.ff,t)
inherit(P.ej,t)
inherit(P.ek,t)
inherit(W.em,t)
inherit(W.h8,t)
inherit(W.hG,t)
inherit(W.hZ,t)
inherit(W.fx,t)
inherit(W.fw,t)
inherit(W.ix,t)
inherit(W.iy,t)
inherit(W.iE,t)
inherit(W.iF,t)
inherit(P.hJ,t)
inherit(P.iL,t)
inherit(P.iM,t)
inherit(P.iN,t)
inherit(B.ja,t)
inherit(B.jb,t)
inherit(B.jc,t)
inherit(B.jd,t)
inherit(B.je,t)
inherit(B.fC,t)
inherit(B.fD,t)
inherit(B.fE,t)
inherit(B.fF,t)
inherit(D.fc,t)
inherit(A.iV,t)
inherit(B.j6,t)
inherit(B.j5,t)
inherit(B.j7,t)
t=H.hQ
inherit(H.ba,t)
inherit(H.bS,t)
t=P.aZ
inherit(H.fy,t)
inherit(H.f4,t)
inherit(H.hx,t)
inherit(H.hu,t)
inherit(H.e0,t)
inherit(H.fV,t)
inherit(P.c1,t)
inherit(P.b3,t)
inherit(P.a0,t)
inherit(P.hy,t)
inherit(P.hw,t)
inherit(P.b6,t)
inherit(P.e2,t)
inherit(P.eb,t)
t=H.hh
inherit(H.h4,t)
inherit(H.bk,t)
inherit(H.hK,P.c1)
inherit(P.bq,P.aJ)
t=P.bq
inherit(H.ae,t)
inherit(P.ih,t)
inherit(W.hP,t)
t=H.b2
inherit(H.fo,t)
inherit(H.cu,t)
t=H.cu
inherit(H.bJ,t)
inherit(H.bL,t)
inherit(H.bK,H.bJ)
inherit(H.cv,H.bK)
inherit(H.bM,H.bL)
inherit(H.cw,H.bM)
t=H.cv
inherit(H.ct,t)
inherit(H.fp,t)
t=H.cw
inherit(H.fq,t)
inherit(H.fr,t)
inherit(H.fs,t)
inherit(H.ft,t)
inherit(H.fu,t)
inherit(H.cx,t)
inherit(H.fv,t)
t=P.hR
inherit(P.cX,t)
inherit(P.iC,t)
inherit(P.is,P.iG)
inherit(P.il,H.ae)
inherit(P.fX,P.fY)
inherit(P.ie,P.fX)
inherit(P.ij,P.ie)
inherit(P.cp,P.bI)
inherit(P.c6,P.cL)
inherit(P.f5,P.c5)
inherit(P.f6,P.c6)
t=P.a9
inherit(P.Y,t)
inherit(P.y,t)
t=P.a0
inherit(P.cC,t)
inherit(P.eX,t)
t=W.e
inherit(W.r,t)
inherit(W.at,t)
inherit(W.eJ,t)
inherit(W.bn,t)
inherit(W.bs,t)
inherit(W.fM,t)
inherit(W.cF,t)
inherit(W.bO,t)
inherit(W.bQ,t)
inherit(W.hD,t)
inherit(W.hE,t)
inherit(W.bF,t)
inherit(W.jT,t)
inherit(P.dX,t)
inherit(P.aW,t)
t=W.r
inherit(W.a2,t)
inherit(W.ay,t)
inherit(W.aB,t)
t=W.a2
inherit(W.j,t)
inherit(P.w,t)
t=W.at
inherit(W.c_,t)
inherit(W.eU,t)
inherit(W.fe,t)
t=W.j
inherit(W.dT,t)
inherit(W.dV,t)
inherit(W.aw,t)
inherit(W.c4,t)
inherit(W.c9,t)
inherit(W.eO,t)
inherit(W.cj,t)
inherit(W.bo,t)
inherit(W.fW,t)
inherit(W.cN,t)
inherit(W.hf,t)
inherit(W.hg,t)
inherit(W.bB,t)
t=W.aY
inherit(W.e3,t)
inherit(W.e5,t)
inherit(W.e6,t)
inherit(W.e9,t)
t=W.a1
inherit(W.e4,t)
inherit(W.e8,t)
inherit(W.ea,t)
inherit(W.aX,W.cY)
inherit(W.ef,W.cb)
inherit(W.d_,W.cZ)
inherit(W.cc,W.d_)
inherit(W.d1,W.d0)
inherit(W.eg,W.d1)
inherit(W.d5,W.d4)
inherit(W.eI,W.d5)
inherit(W.d8,W.d7)
inherit(W.bm,W.d8)
inherit(W.ck,W.aB)
inherit(W.cl,W.bn)
t=W.f
inherit(W.aN,t)
inherit(P.hC,t)
t=W.aN
inherit(W.aG,t)
inherit(W.O,t)
inherit(W.aM,t)
inherit(W.fl,W.bs)
inherit(W.dc,W.db)
inherit(W.fm,W.dc)
inherit(W.S,P.cp)
inherit(W.df,W.de)
inherit(W.bv,W.df)
inherit(W.dj,W.di)
inherit(W.fJ,W.dj)
inherit(W.bP,W.bO)
inherit(W.h0,W.bP)
inherit(W.dl,W.dk)
inherit(W.h2,W.dl)
inherit(W.h7,W.dq)
inherit(W.du,W.dt)
inherit(W.hi,W.du)
inherit(W.bR,W.bQ)
inherit(W.hj,W.bR)
inherit(W.dw,W.dv)
inherit(W.hp,W.dw)
inherit(W.aP,W.O)
inherit(W.dB,W.dA)
inherit(W.hS,W.dB)
inherit(W.hU,W.cd)
inherit(W.dD,W.dC)
inherit(W.id,W.dD)
inherit(W.dF,W.dE)
inherit(W.dd,W.dF)
inherit(W.dH,W.dG)
inherit(W.iz,W.dH)
inherit(W.dJ,W.dI)
inherit(W.iA,W.dJ)
inherit(W.hV,W.hP)
inherit(W.d3,P.h9)
inherit(W.d2,W.d3)
inherit(W.hY,P.ha)
inherit(W.iD,W.bN)
inherit(P.hI,P.hH)
inherit(P.V,P.ir)
t=P.w
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
inherit(P.eC,t)
inherit(P.eD,t)
inherit(P.eE,t)
inherit(P.eF,t)
inherit(P.eK,t)
inherit(P.ad,t)
inherit(P.fh,t)
inherit(P.fG,t)
inherit(P.by,t)
t=P.ad
inherit(P.eN,t)
inherit(P.a4,t)
inherit(P.eW,t)
inherit(P.he,t)
inherit(P.bC,t)
inherit(P.hA,t)
inherit(P.da,P.d9)
inherit(P.f7,P.da)
inherit(P.dh,P.dg)
inherit(P.fz,P.dh)
inherit(P.fP,P.a4)
inherit(P.ds,P.dr)
inherit(P.hd,P.ds)
inherit(P.bD,P.bC)
inherit(P.dy,P.dx)
inherit(P.hr,P.dy)
inherit(P.fA,P.aW)
inherit(P.dn,P.dm)
inherit(P.h3,P.dn)
t=G.fn
inherit(G.h1,t)
inherit(G.cU,t)
inherit(G.fk,t)
inherit(G.fS,t)
inherit(A.fR,t)
inherit(A.b4,t)
t=G.h1
inherit(G.dZ,t)
inherit(A.bu,t)
inherit(B.fB,G.dZ)
t=G.cU
inherit(G.fi,t)
inherit(G.fH,t)
inherit(G.hv,G.bE)
inherit(R.cE,A.fR)
inherit(R.h6,R.h5)
mixin(H.bJ,P.l)
mixin(H.bK,H.b_)
mixin(H.bL,P.l)
mixin(H.bM,H.b_)
mixin(P.bI,P.l)
mixin(W.cY,W.e7)
mixin(W.cZ,P.l)
mixin(W.d_,W.n)
mixin(W.d0,P.l)
mixin(W.d1,W.n)
mixin(W.d4,P.l)
mixin(W.d5,W.n)
mixin(W.d7,P.l)
mixin(W.d8,W.n)
mixin(W.db,P.l)
mixin(W.dc,W.n)
mixin(W.de,P.l)
mixin(W.df,W.n)
mixin(W.di,P.l)
mixin(W.dj,W.n)
mixin(W.bO,P.l)
mixin(W.bP,W.n)
mixin(W.dk,P.l)
mixin(W.dl,W.n)
mixin(W.dq,P.aJ)
mixin(W.dt,P.l)
mixin(W.du,W.n)
mixin(W.bQ,P.l)
mixin(W.bR,W.n)
mixin(W.dv,P.l)
mixin(W.dw,W.n)
mixin(W.dA,P.l)
mixin(W.dB,W.n)
mixin(W.dC,P.l)
mixin(W.dD,W.n)
mixin(W.dE,P.l)
mixin(W.dF,W.n)
mixin(W.dG,P.l)
mixin(W.dH,W.n)
mixin(W.dI,P.l)
mixin(W.dJ,W.n)
mixin(P.d9,P.l)
mixin(P.da,W.n)
mixin(P.dg,P.l)
mixin(P.dh,W.n)
mixin(P.dr,P.l)
mixin(P.ds,W.n)
mixin(P.dx,P.l)
mixin(P.dy,W.n)
mixin(P.dm,P.l)
mixin(P.dn,W.n)})();(function constants(){C.p=W.aw.prototype
C.J=W.c4.prototype
C.v=W.aX.prototype
C.q=W.c9.prototype
C.K=W.ca.prototype
C.L=W.cj.prototype
C.j=W.ck.prototype
C.x=W.cl.prototype
C.M=J.a.prototype
C.a=J.aD.prototype
C.n=J.cn.prototype
C.b=J.co.prototype
C.c=J.b0.prototype
C.i=J.aE.prototype
C.T=J.aF.prototype
C.Y=H.ct.prototype
C.B=W.bv.prototype
C.C=J.fI.prototype
C.D=W.cB.prototype
C.I=W.cN.prototype
C.u=J.aO.prototype
C.aw=W.aP.prototype
C.ax=W.bF.prototype
C.d=new P.is()
C.w=new P.aC(0)
C.N=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.O=function(hooks) {
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
C.y=function(hooks) { return hooks; }

C.P=function(getTagFallback) {
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
C.Q=function() {
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
C.R=function(hooks) {
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
C.S=function(hooks) {
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
C.z=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.U=new P.f5(null,null)
C.V=new P.f6(null)
C.W=H.v(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.m])
C.X=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.A=makeConstList([])
C.r=H.v(makeConstList(["bind","if","ref","repeat","syntax"]),[P.m])
C.t=H.v(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.m])
C.Z=new G.A("vec3","vertex btangents",0)
C.e=new G.A("vec3","",0)
C.a_=new G.A("vec4","delta from light",0)
C.o=new G.A("","",0)
C.E=new G.A("vec3","vertex coordinates",0)
C.a0=new G.A("vec3","vertex binormals",0)
C.F=new G.A("vec4","for wireframe",0)
C.a1=new G.A("vec4","per vertex color",0)
C.a2=new G.A("float","for normal maps",0)
C.k=new G.A("mat4","",0)
C.a4=new G.A("mat4","",4)
C.a3=new G.A("mat4","",128)
C.f=new G.A("float","",0)
C.a5=new G.A("float","",4)
C.a6=new G.A("float","depth for shadowmaps",0)
C.h=new G.A("sampler2D","",0)
C.a7=new G.A("float","for bump maps",0)
C.a8=new G.A("vec2","texture uvs",0)
C.a9=new G.A("float","time since program start in sec",0)
C.l=new G.A("vec2","",0)
C.aa=new G.A("samplerCube","",0)
C.m=new G.A("vec4","",0)
C.ab=new G.A("vec3","vertex normals",0)
C.ac=new G.A("sampler2DShadow","",0)
C.G=new G.A("vec3","per vertex color",0)
C.H=new G.A("mat3","",0)
C.ad=new G.A("vec3","vertex tangents",0)
C.ae=H.H("on")
C.af=H.H("oo")
C.ag=H.H("eM")
C.ah=H.H("op")
C.ai=H.H("oq")
C.aj=H.H("kJ")
C.ak=H.H("or")
C.al=H.H("kM")
C.am=H.H("P")
C.an=H.H("m")
C.ao=H.H("lf")
C.ap=H.H("lg")
C.aq=H.H("ot")
C.ar=H.H("lh")
C.as=H.H("al")
C.at=H.H("Y")
C.au=H.H("y")
C.av=H.H("a9")})();(function staticFields(){$.kZ="$cachedFunction"
$.l_="$cachedInvocation"
$.kt=null
$.kr=null
$.jY=!1
$.k3=null
$.lu=null
$.lL=null
$.iQ=null
$.iZ=null
$.k4=null
$.bb=null
$.bT=null
$.bU=null
$.jZ=!1
$.z=C.d
$.kI=0
$.ap=null
$.jx=null
$.kH=null
$.kG=null
$.kD=null
$.kC=null
$.kB=null
$.kA=null
$.nW=0
$.nX=0
$.k8=0
$.lJ=0
$.bY=0
$.bZ=0
$.ok=!1
$.lE=0})();(function lazyInitializers(){lazy($,"kz","$get$kz",function(){return H.lG("_$dart_dartClosure")})
lazy($,"jC","$get$jC",function(){return H.lG("_$dart_js")})
lazy($,"kK","$get$kK",function(){return H.n4()})
lazy($,"kL","$get$kL",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kI
$.kI=t+1
t="expando$key$"+t}return new P.en(t,null,[P.y])})
lazy($,"l4","$get$l4",function(){return H.ah(H.ht({
toString:function(){return"$receiver$"}}))})
lazy($,"l5","$get$l5",function(){return H.ah(H.ht({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"l6","$get$l6",function(){return H.ah(H.ht(null))})
lazy($,"l7","$get$l7",function(){return H.ah(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"lb","$get$lb",function(){return H.ah(H.ht(void 0))})
lazy($,"lc","$get$lc",function(){return H.ah(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"l9","$get$l9",function(){return H.ah(H.la(null))})
lazy($,"l8","$get$l8",function(){return H.ah(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"le","$get$le",function(){return H.ah(H.la(void 0))})
lazy($,"ld","$get$ld",function(){return H.ah(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jV","$get$jV",function(){return P.nt()})
lazy($,"bV","$get$bV",function(){return[]})
lazy($,"ky","$get$ky",function(){return{}})
lazy($,"ll","$get$ll",function(){return P.jG(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jW","$get$jW",function(){return P.U()})
lazy($,"iP","$get$iP",function(){return P.kN(P.y,P.al)})
lazy($,"bX","$get$bX",function(){return P.kN(P.m,P.al)})
lazy($,"l1","$get$l1",function(){return new G.cR(1281,0,4294967295)})
lazy($,"ko","$get$ko",function(){return new G.cQ(1281,1281,1281)})
lazy($,"T","$get$T",function(){return P.ar(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColors",C.G,"aColorAlpha",C.a1,"aPosition",C.E,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.F,"aPointSize",C.f,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.m,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.G,"vTexUV",C.l,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.E,"vPositionFromLight",C.a_,"vCenter",C.F,"vDepth",C.a6,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.H,"uConvolutionMatrix",C.H,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.ac,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.aa,"uAnimationTable",C.h,"uTime",C.a9,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.e,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.f,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2])})
lazy($,"l3","$get$l3",function(){var t=new G.hk(!1,!1,!1,!0,1,9729,9729)
t.d=!1
t.b=!0
t.f=9728
t.r=9728
return t})
lazy($,"lO","$get$lO",function(){var t=G.bz("SolidColor")
t.aM(["aPosition"])
t.av(["uPerspectiveViewMatrix","uModelMatrix"])
t.aN(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"lN","$get$lN",function(){var t=G.bz("SolidColorF")
t.av(["uColor"])
t.aN(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"lC","$get$lC",function(){var t=G.bz("FixedVertexColorV")
t.aM(["aPosition"])
t.av(["uPerspectiveViewMatrix","uModelMatrix"])
t.aw(["vColor"])
t.bG(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vColor = ColorFromPosition(aPosition);"],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return t})
lazy($,"lB","$get$lB",function(){var t=G.bz("FixedVertexColorF")
t.aw(["vColor"])
t.aN(["oFragColor = vec4( vColor, 1.0 );"])
return t})
lazy($,"lx","$get$lx",function(){var t=G.bz("AnimationV")
t.aM(["aPosition","aBoneIndex","aBoneWeight"])
t.aw(["vColor"])
t.av(["uPerspectiveViewMatrix","uModelMatrix","uAnimationTable","uTime"])
t.bF(["mat4 GetBoneMatrix(sampler2D table, int index, int time) {\n    vec4 v1 = texelFetch(table, ivec2(index * 4 + 0, time), 0);\n    vec4 v2 = texelFetch(table, ivec2(index * 4 + 1, time), 0);\n    vec4 v3 = texelFetch(table, ivec2(index * 4 + 2, time), 0);\n    vec4 v4 = texelFetch(table, ivec2(index * 4 + 3, time), 0);\n    return mat4(v1, v2, v3, v4);\n    //return uBoneMatrices[index];\n}\n\nmat4 adjustMatrix(sampler2D table, vec4 weights, ivec4 indices, int time) {\n    return weights.x * GetBoneMatrix(table, indices.x, time) +\n           weights.y * GetBoneMatrix(table, indices.y, time) +\n           weights.z * GetBoneMatrix(table, indices.z, time) +\n           weights.w * GetBoneMatrix(table, indices.w, time);\n}\n\nvoid main() {\n   mat4 skinMat = uModelMatrix * adjustMatrix(uAnimationTable,\n                                              aBoneWeight,\n                                              ivec4(aBoneIndex),\n                                              int(uTime));\n   vec4 pos = skinMat * vec4(aPosition, 1.0);\n   // vPosition = pos.xyz;\n   // This is not quite accurate\n   //vNormal = normalize(mat3(skinMat) * aNormal);\n   gl_Position = uPerspectiveViewMatrix * pos;\n\n\n   vColor = vec3( sin(aPosition.x)/2.0+0.5,\n                      cos(aPosition.y)/2.0+0.5,\n                      sin(aPosition.z)/2.0+0.5);\n   //vTexUV = aTexUV;\n}\n\n"])
return t})
lazy($,"lw","$get$lw",function(){var t=G.bz("AnimationV")
t.aw(["vColor"])
t.bF(["void main() {\n  oFragColor.rgb = vColor;\n}\n"])
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
mangledGlobalNames:{y:"int",Y:"double",a9:"num",m:"String",al:"bool",P:"Null",h:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.r},{func:1,ret:P.al,args:[W.a2,P.m,P.m,W.bG]},{func:1,v:true,args:[P.E],opt:[P.b5]},{func:1,v:true,args:[W.f]},{func:1,ret:P.y,args:[P.G,P.G]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,Blob:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGMatrix:J.a,SVGNumber:J.a,SVGPreserveAspectRatio:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bt,ArrayBufferView:H.b2,DataView:H.fo,Float32Array:H.ct,Float64Array:H.fp,Int16Array:H.fq,Int32Array:H.fr,Int8Array:H.fs,Uint16Array:H.ft,Uint32Array:H.fu,Uint8ClampedArray:H.cx,CanvasPixelArray:H.cx,Uint8Array:H.fv,HTMLAudioElement:W.j,HTMLBRElement:W.j,HTMLBaseElement:W.j,HTMLButtonElement:W.j,HTMLContentElement:W.j,HTMLDListElement:W.j,HTMLDataElement:W.j,HTMLDataListElement:W.j,HTMLDetailsElement:W.j,HTMLDialogElement:W.j,HTMLEmbedElement:W.j,HTMLFieldSetElement:W.j,HTMLHRElement:W.j,HTMLHeadingElement:W.j,HTMLHtmlElement:W.j,HTMLIFrameElement:W.j,HTMLImageElement:W.j,HTMLLIElement:W.j,HTMLLabelElement:W.j,HTMLLegendElement:W.j,HTMLLinkElement:W.j,HTMLMapElement:W.j,HTMLMediaElement:W.j,HTMLMenuElement:W.j,HTMLMetaElement:W.j,HTMLMeterElement:W.j,HTMLModElement:W.j,HTMLOListElement:W.j,HTMLObjectElement:W.j,HTMLOptGroupElement:W.j,HTMLOptionElement:W.j,HTMLOutputElement:W.j,HTMLParagraphElement:W.j,HTMLParamElement:W.j,HTMLPictureElement:W.j,HTMLPreElement:W.j,HTMLProgressElement:W.j,HTMLQuoteElement:W.j,HTMLScriptElement:W.j,HTMLShadowElement:W.j,HTMLSlotElement:W.j,HTMLSourceElement:W.j,HTMLSpanElement:W.j,HTMLStyleElement:W.j,HTMLTableCaptionElement:W.j,HTMLTableCellElement:W.j,HTMLTableDataCellElement:W.j,HTMLTableHeaderCellElement:W.j,HTMLTableColElement:W.j,HTMLTextAreaElement:W.j,HTMLTimeElement:W.j,HTMLTitleElement:W.j,HTMLTrackElement:W.j,HTMLUListElement:W.j,HTMLUnknownElement:W.j,HTMLVideoElement:W.j,HTMLDirectoryElement:W.j,HTMLFontElement:W.j,HTMLFrameElement:W.j,HTMLFrameSetElement:W.j,HTMLMarqueeElement:W.j,HTMLElement:W.j,Accelerometer:W.c_,LinearAccelerationSensor:W.c_,AccessibleNodeList:W.dS,HTMLAnchorElement:W.dT,HTMLAreaElement:W.dV,HTMLBodyElement:W.aw,HTMLCanvasElement:W.c4,CanvasRenderingContext2D:W.e_,CDATASection:W.ay,CharacterData:W.ay,Comment:W.ay,ProcessingInstruction:W.ay,Text:W.ay,CSSPerspective:W.e3,CSSPositionValue:W.e4,CSSRotation:W.e5,CSSScale:W.e6,CSSStyleDeclaration:W.aX,MSStyleCSSProperties:W.aX,CSS2Properties:W.aX,CSSImageValue:W.a1,CSSKeywordValue:W.a1,CSSNumericValue:W.a1,CSSResourceValue:W.a1,CSSUnitValue:W.a1,CSSURLImageValue:W.a1,CSSStyleValue:W.a1,CSSMatrixComponent:W.aY,CSSSkew:W.aY,CSSTransformComponent:W.aY,CSSTransformValue:W.e8,CSSTranslation:W.e9,CSSUnparsedValue:W.ea,DataTransferItemList:W.ec,DeviceAcceleration:W.ed,HTMLDivElement:W.c9,XMLDocument:W.aB,Document:W.aB,DOMException:W.ee,DOMImplementation:W.ca,DOMPoint:W.ef,DOMPointReadOnly:W.cb,ClientRectList:W.cc,DOMRectList:W.cc,DOMRectReadOnly:W.cd,DOMStringList:W.eg,DOMTokenList:W.eh,Element:W.a2,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,AccessibleNode:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RemotePlayback:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SourceBuffer:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,TextTrack:W.e,TextTrackCue:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,VTTCue:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,ServiceWorker:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,FileList:W.eI,FileWriter:W.eJ,HTMLFormElement:W.eO,Gyroscope:W.eU,HTMLHeadElement:W.cj,History:W.eV,HTMLCollection:W.bm,HTMLFormControlsCollection:W.bm,HTMLOptionsCollection:W.bm,HTMLDocument:W.ck,XMLHttpRequest:W.cl,XMLHttpRequestUpload:W.bn,XMLHttpRequestEventTarget:W.bn,HTMLInputElement:W.bo,KeyboardEvent:W.aG,Location:W.fd,Magnetometer:W.fe,MediaList:W.fj,MIDIOutput:W.fl,MIDIInput:W.bs,MIDIPort:W.bs,MimeTypeArray:W.fm,PointerEvent:W.O,MouseEvent:W.O,DragEvent:W.O,DocumentFragment:W.r,ShadowRoot:W.r,Attr:W.r,DocumentType:W.r,Node:W.r,NodeIterator:W.cy,NodeList:W.bv,RadioNodeList:W.bv,Plugin:W.af,PluginArray:W.fJ,PresentationConnection:W.fM,Range:W.cB,RTCDataChannel:W.cF,DataChannel:W.cF,HTMLSelectElement:W.fW,AbsoluteOrientationSensor:W.at,AmbientLightSensor:W.at,OrientationSensor:W.at,RelativeOrientationSensor:W.at,Sensor:W.at,SourceBufferList:W.h0,SpeechGrammarList:W.h2,SpeechRecognitionResult:W.ag,Storage:W.h7,HTMLTableElement:W.cN,HTMLTableRowElement:W.hf,HTMLTableSectionElement:W.hg,HTMLTemplateElement:W.bB,TextTrackCueList:W.hi,TextTrackList:W.hj,TimeRanges:W.hl,TouchEvent:W.aM,TouchList:W.hp,TrackDefaultList:W.hq,TreeWalker:W.cT,CompositionEvent:W.aN,FocusEvent:W.aN,TextEvent:W.aN,UIEvent:W.aN,URL:W.hz,VRStageBoundsPoint:W.hB,VideoTrackList:W.hD,WebSocket:W.hE,WheelEvent:W.aP,Window:W.bF,DOMWindow:W.bF,CSSRuleList:W.hS,DOMRect:W.hU,GamepadList:W.id,NamedNodeMap:W.dd,MozNamedAttrMap:W.dd,SpeechRecognitionResultList:W.iz,StyleSheetList:W.iA,IDBVersionChangeEvent:P.hC,SVGFEBlendElement:P.eo,SVGFEColorMatrixElement:P.ep,SVGFEComponentTransferElement:P.eq,SVGFECompositeElement:P.er,SVGFEConvolveMatrixElement:P.es,SVGFEDiffuseLightingElement:P.et,SVGFEDisplacementMapElement:P.eu,SVGFEFloodElement:P.ev,SVGFEGaussianBlurElement:P.ew,SVGFEImageElement:P.ex,SVGFEMergeElement:P.ey,SVGFEMorphologyElement:P.ez,SVGFEOffsetElement:P.eA,SVGFEPointLightElement:P.eB,SVGFESpecularLightingElement:P.eC,SVGFESpotLightElement:P.eD,SVGFETileElement:P.eE,SVGFETurbulenceElement:P.eF,SVGFilterElement:P.eK,SVGForeignObjectElement:P.eN,SVGCircleElement:P.a4,SVGEllipseElement:P.a4,SVGLineElement:P.a4,SVGPathElement:P.a4,SVGPolygonElement:P.a4,SVGPolylineElement:P.a4,SVGGeometryElement:P.a4,SVGAElement:P.ad,SVGClipPathElement:P.ad,SVGDefsElement:P.ad,SVGGElement:P.ad,SVGSwitchElement:P.ad,SVGGraphicsElement:P.ad,SVGImageElement:P.eW,SVGLengthList:P.f7,SVGMaskElement:P.fh,SVGNumberList:P.fz,SVGPatternElement:P.fG,SVGPoint:P.fK,SVGPointList:P.fL,SVGRect:P.fO,SVGRectElement:P.fP,SVGScriptElement:P.by,SVGStringList:P.hd,SVGAnimateElement:P.w,SVGAnimateMotionElement:P.w,SVGAnimateTransformElement:P.w,SVGAnimationElement:P.w,SVGDescElement:P.w,SVGDiscardElement:P.w,SVGFEDistantLightElement:P.w,SVGFEFuncAElement:P.w,SVGFEFuncBElement:P.w,SVGFEFuncGElement:P.w,SVGFEFuncRElement:P.w,SVGFEMergeNodeElement:P.w,SVGLinearGradientElement:P.w,SVGMarkerElement:P.w,SVGMetadataElement:P.w,SVGRadialGradientElement:P.w,SVGSetElement:P.w,SVGStopElement:P.w,SVGStyleElement:P.w,SVGSymbolElement:P.w,SVGTitleElement:P.w,SVGViewElement:P.w,SVGGradientElement:P.w,SVGComponentTransferFunctionElement:P.w,SVGFEDropShadowElement:P.w,SVGMPathElement:P.w,SVGElement:P.w,SVGSVGElement:P.he,SVGTextPathElement:P.bC,SVGTextContentElement:P.bC,SVGTSpanElement:P.bD,SVGTextElement:P.bD,SVGTextPositioningElement:P.bD,SVGTransformList:P.hr,SVGUseElement:P.hA,AudioBuffer:P.dW,AudioTrackList:P.dX,AudioContext:P.aW,webkitAudioContext:P.aW,BaseAudioContext:P.aW,OfflineAudioContext:P.fA,WebGLRenderingContext:P.fT,WebGL2RenderingContext:P.fU,SQLResultSetRowList:P.h3})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,Blob:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,File:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGMatrix:true,SVGNumber:true,SVGPreserveAspectRatio:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,Accelerometer:true,LinearAccelerationSensor:true,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSPositionValue:true,CSSRotation:true,CSSScale:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSSkew:true,CSSTransformComponent:false,CSSTransformValue:true,CSSTranslation:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AccessibleNode:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,Gyroscope:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,Magnetometer:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,AbsoluteOrientationSensor:true,AmbientLightSensor:true,OrientationSensor:true,RelativeOrientationSensor:true,Sensor:false,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VRStageBoundsPoint:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,IDBVersionChangeEvent:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLengthList:true,SVGMaskElement:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMetadataElement:true,SVGRadialGradientElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransformList:true,SVGUseElement:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cu.$nativeSuperclassTag="ArrayBufferView"
H.bJ.$nativeSuperclassTag="ArrayBufferView"
H.bK.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.bL.$nativeSuperclassTag="ArrayBufferView"
H.bM.$nativeSuperclassTag="ArrayBufferView"
H.cw.$nativeSuperclassTag="ArrayBufferView"
W.bO.$nativeSuperclassTag="EventTarget"
W.bP.$nativeSuperclassTag="EventTarget"
W.bQ.$nativeSuperclassTag="EventTarget"
W.bR.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.lP(B.lv(),b)},[])
else (function(b){H.lP(B.lv(),b)})([])})})()