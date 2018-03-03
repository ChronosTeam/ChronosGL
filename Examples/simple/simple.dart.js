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
a[c]=function(){a[c]=function(){H.m4(b)}
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
return d?function(e){if(t===null)t=H.iD(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.iD(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.iD(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={ir:function ir(a){this.a=a},
iv:function(a,b,c,d){if(!!a.$isc)return new H.dD(a,b,[c,d])
return new H.cK(a,b,[c,d])},
ip:function(){return new P.bw("No element")},
l1:function(){return new P.bw("Too few elements")},
cZ:function(a,b,c,d){if(c-b<=32)H.lg(a,b,c,d)
else H.lf(a,b,c,d)},
lg:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.ac(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.ad(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
lf:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.H(t+1,6)
r=a3+s
q=a4-s
p=C.b.H(a3+a4,2)
o=p-s
n=p+s
t=J.ac(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.ad(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.ad(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.ad(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.ad(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ad(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.ad(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.ad(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.ad(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ad(a5.$2(j,i),0)){h=i
i=j
j=h}t.i(a2,r,m)
t.i(a2,p,k)
t.i(a2,q,i)
t.i(a2,o,t.h(a2,a3))
t.i(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.C(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.cZ(a2,a3,g-2,a5)
H.cZ(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.C(a5.$2(t.h(a2,g),l),0);)++g
for(;J.C(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.cZ(a2,g,f,a5)}else H.cZ(a2,g,f,a5)},
c:function c(){},
b_:function b_(){},
cJ:function cJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cK:function cK(a,b,c){this.a=a
this.b=b
this.$ti=c},
dD:function dD(a,b,c){this.a=a
this.b=b
this.$ti=c},
ep:function ep(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cL:function cL(a,b,c){this.a=a
this.b=b
this.$ti=c},
c_:function c_(){},
d9:function(a,b){var t=a.a5(b)
if(!u.globalState.d.cy)u.globalState.f.ab()
return t},
i1:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
k5:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.r(s).$isb)throw H.e(P.j_("Arguments to main must be a List: "+H.i(s)))
u.globalState=new H.hm(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$jd()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.fZ(P.iu(null,H.aS),0)
r=P.n
s.sdQ(new H.a8(0,null,null,null,null,null,0,[r,H.aR]))
s.sdT(new H.a8(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.hl()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.kX,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.ls)}if(u.globalState.x)return
s=u.globalState.a++
q=P.aJ(null,null,null,r)
p=new H.b1(0,null,!1)
o=new H.aR(s,new H.a8(0,null,null,null,null,null,0,[r,H.b1]),q,u.createNewIsolate(),p,new H.af(H.i6()),new H.af(H.i6()),!1,!1,[],P.aJ(null,null,null,null),null,null,!1,!0,P.aJ(null,null,null,null))
q.l(0,0)
o.bi(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.b7(a,{func:1,args:[,]}))o.a5(new H.ic(t,a))
else if(H.b7(a,{func:1,args:[,,]}))o.a5(new H.id(t,a))
else o.a5(a)
u.globalState.f.ab()},
ls:function(a){var t=P.aI(["command","print","msg",a])
return new H.ab(!0,P.bF(null,P.n)).G(t)},
kZ:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.l_()
return},
l_:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.q("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.q('Cannot extract URI from "'+t+'"'))},
kX:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.aQ(!0,[]).O(b.data)
s=J.ac(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.lT(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aQ(!0,[]).O(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aQ(!0,[]).O(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.n
j=P.aJ(null,null,null,k)
i=new H.b1(0,null,!1)
h=new H.aR(s,new H.a8(0,null,null,null,null,null,0,[k,H.b1]),j,u.createNewIsolate(),i,new H.af(H.i6()),new H.af(H.i6()),!1,!1,[],P.aJ(null,null,null,null),null,null,!1,!0,P.aJ(null,null,null,null))
j.l(0,0)
h.bi(0,i)
u.globalState.f.a.M(0,new H.aS(h,new H.ec(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.ab()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.ky(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ab()
break
case"close":u.globalState.ch.aa(0,$.$get$je().h(0,a))
a.terminate()
u.globalState.f.ab()
break
case"log":H.kW(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aI(["command","print","msg",t])
k=new H.ab(!0,P.bF(null,P.n)).G(k)
s.toString
self.postMessage(k)}else P.ao(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
kW:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aI(["command","log","msg",a])
r=new H.ab(!0,P.bF(null,P.n)).G(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.ap(q)
t=H.ay(q)
s=P.bZ(t)
throw H.e(s)}},
kY:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.jk=$.jk+("_"+s)
$.jl=$.jl+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.E(0,["spawned",new H.b4(s,r),q,t.r])
r=new H.ed(a,b,c,d,t)
if(e){t.bA(q,q)
u.globalState.f.a.M(0,new H.aS(t,r,"start isolate"))}else r.$0()},
lh:function(a,b){var t=new H.ft(!0,!1,null)
t.cT(a,b)
return t},
lt:function(a){return new H.aQ(!0,[]).O(new H.ab(!1,P.bF(null,P.n)).G(a))},
ic:function ic(a,b){this.a=a
this.b=b},
id:function id(a,b){this.a=a
this.b=b},
hm:function hm(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
aR:function aR(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
hg:function hg(a,b){this.a=a
this.b=b},
fZ:function fZ(a,b){this.a=a
this.b=b},
h_:function h_(a){this.a=a},
aS:function aS(a,b,c){this.a=a
this.b=b
this.c=c},
hl:function hl(){},
ec:function ec(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ed:function ed(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fT:function fT(){},
b4:function b4(a,b){this.b=a
this.a=b},
hn:function hn(a,b){this.a=a
this.b=b},
bG:function bG(a,b,c){this.b=a
this.c=b
this.a=c},
b1:function b1(a,b,c){this.a=a
this.b=b
this.c=c},
ft:function ft(a,b,c){this.a=a
this.b=b
this.c=c},
fu:function fu(a,b){this.a=a
this.b=b},
fv:function fv(a,b){this.a=a
this.b=b},
af:function af(a){this.a=a},
ab:function ab(a,b){this.a=a
this.b=b},
aQ:function aQ(a,b){this.a=a
this.b=b},
lO:function(a){return u.types[a]},
lV:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.r(a).$iso},
i:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.ba(a)
if(typeof t!=="string")throw H.e(H.Q(a))
return t},
ld:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.f_(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aL:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
cW:function(a){var t,s,r,q,p,o,n,m
t=J.r(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.q||!!J.r(a).$isaN){p=C.m(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.e.ay(q,0)===36)q=C.e.cC(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.da(H.hP(a),0,null),u.mangledGlobalNames)},
eW:function(a){return"Instance of '"+H.cW(a)+"'"},
O:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lb:function(a){return a.b?H.O(a).getUTCFullYear()+0:H.O(a).getFullYear()+0},
l9:function(a){return a.b?H.O(a).getUTCMonth()+1:H.O(a).getMonth()+1},
l5:function(a){return a.b?H.O(a).getUTCDate()+0:H.O(a).getDate()+0},
l6:function(a){return a.b?H.O(a).getUTCHours()+0:H.O(a).getHours()+0},
l8:function(a){return a.b?H.O(a).getUTCMinutes()+0:H.O(a).getMinutes()+0},
la:function(a){return a.b?H.O(a).getUTCSeconds()+0:H.O(a).getSeconds()+0},
l7:function(a){return a.b?H.O(a).getUTCMilliseconds()+0:H.O(a).getMilliseconds()+0},
jj:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.Q(a))
return a[b]},
M:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aq(!0,b,"index",null)
t=J.dg(a)
if(b<0||C.b.cm(b,t))return P.z(b,a,"index",null,t)
return P.eX(b,"index",null)},
Q:function(a){return new P.aq(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.cV()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.k6})
t.name=""}else t.toString=H.k6
return t},
k6:function(){return J.ba(this.dartException)},
D:function(a){throw H.e(a)},
N:function(a){throw H.e(new P.a6(a))},
ak:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.fA(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
fB:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
jw:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
it:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.ei(a,s,t?null:b.receiver)},
ap:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.ie(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aH(r,16)&8191)===10)switch(q){case 438:return t.$1(H.it(H.i(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.i(s)+" (Error "+q+")"
return t.$1(new H.cU(p,null))}}if(a instanceof TypeError){o=$.$get$jq()
n=$.$get$jr()
m=$.$get$js()
l=$.$get$jt()
k=$.$get$jx()
j=$.$get$jy()
i=$.$get$jv()
$.$get$ju()
h=$.$get$jA()
g=$.$get$jz()
f=o.J(s)
if(f!=null)return t.$1(H.it(s,f))
else{f=n.J(s)
if(f!=null){f.method="call"
return t.$1(H.it(s,f))}else{f=m.J(s)
if(f==null){f=l.J(s)
if(f==null){f=k.J(s)
if(f==null){f=j.J(s)
if(f==null){f=i.J(s)
if(f==null){f=l.J(s)
if(f==null){f=h.J(s)
if(f==null){f=g.J(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.cU(s,f==null?null:f.method))}}return t.$1(new H.fE(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.d_()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.aq(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.d_()
return a},
ay:function(a){var t
if(a==null)return new H.d8(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.d8(a,null)},
lZ:function(a){if(a==null||typeof a!='object')return J.ae(a)
else return H.aL(a)},
lL:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
lU:function(a,b,c,d,e,f,g){switch(c){case 0:return H.d9(b,new H.hX(a))
case 1:return H.d9(b,new H.hY(a,d))
case 2:return H.d9(b,new H.hZ(a,d,e))
case 3:return H.d9(b,new H.i_(a,d,e,f))
case 4:return H.d9(b,new H.i0(a,d,e,f,g))}throw H.e(P.bZ("Unsupported number of arguments for wrapped closure"))},
bK:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.lU)
a.$identity=t
return t},
kM:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.r(c).$isb){t.$reflectionInfo=c
r=H.ld(t).r}else r=c
q=d?Object.create(new H.fe().constructor.prototype):Object.create(new H.bb(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.j8(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.lO,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.j5:H.il
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.j8(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
kJ:function(a,b,c,d){var t=H.il
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
j8:function(a,b,c){var t,s,r,q
if(c)return H.kL(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.kJ(s,b==null?r!=null:b!==r,t,b)
return q},
kK:function(a,b,c,d){var t,s
t=H.il
s=H.j5
switch(b?-1:a){case 0:throw H.e(new H.f4("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
kL:function(a,b){var t,s,r,q
H.kI()
t=$.j4
if(t==null){t=H.j3("receiver")
$.j4=t}s=b.$stubName
r=b.length
q=a[s]
t=H.kK(r,b==null?q!=null:b!==q,s,b)
return t},
iD:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.r(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.kM(a,b,t,!!d,e,f)},
il:function(a){return a.a},
j5:function(a){return a.c},
kI:function(){var t=$.j6
if(t==null){t=H.j3("self")
$.j6=t}return t},
j3:function(a){var t,s,r,q,p
t=new H.bb("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
mj:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.al(a,"String"))},
U:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.al(a,"double"))},
mi:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.al(a,"num"))},
lF:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.al(a,"bool"))},
lT:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.al(a,"int"))},
m0:function(a,b){throw H.e(H.al(a,b.substring(3)))},
m_:function(a,b){var t=J.ac(b)
throw H.e(H.j7(H.cW(a),t.b5(b,3,t.gj(b))))},
jY:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.r(a)[b])return a
H.m0(a,b)},
az:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.r(a)[b]
else t=!0
if(t)return a
H.m_(a,b)},
mh:function(a){if(a==null)return a
if(!!J.r(a).$isb)return a
throw H.e(H.al(a,"List"))},
jT:function(a){var t=J.r(a)
return"$S" in t?t.$S():null},
b7:function(a,b){var t
if(a==null)return!1
t=H.jT(a)
return t==null?!1:H.jZ(t,b)},
mf:function(a,b){var t,s
if(a==null)return a
if($.iA)return a
$.iA=!0
try{if(H.b7(a,b))return a
t=H.aA(b,null)
s=H.al(a,t)
throw H.e(s)}finally{$.iA=!1}},
al:function(a,b){return new H.fC("type '"+H.cW(a)+"' is not a subtype of type '"+b+"'")},
j7:function(a,b){return new H.dq("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
aw:function(a){if(!0===a)return!1
if(!!J.r(a).$isio)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.al(a,"bool"))},
aU:function(a){throw H.e(new H.fO(a))},
d:function(a){if(H.aw(a))throw H.e(new P.bP(null))},
m4:function(a){throw H.e(new P.du(a))},
i6:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
jV:function(a){return u.getIsolateTag(a)},
H:function(a){return new H.at(a,null)},
I:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
hP:function(a){if(a==null)return
return a.$ti},
jW:function(a,b){return H.iL(a["$as"+H.i(b)],H.hP(a))},
ax:function(a,b,c){var t,s
t=H.jW(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
b8:function(a,b){var t,s
t=H.hP(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aA:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.da(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.i(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aA(t,b)
return H.lu(a,b)}return"unknown-reified-type"},
lu:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aA(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aA(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aA(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.lK(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aA(l[j],b)+(" "+H.i(j))}q+="}"}return"("+q+") => "+t},
da:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bx("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aA(o,c)}return p?"":"<"+s.k(0)+">"},
hQ:function(a){var t,s
if(a instanceof H.aX){t=H.jT(a)
if(t!=null)return H.aA(t,null)}s=J.r(a).constructor.name
if(a==null)return s
return s+H.da(a.$ti,0,null)},
iL:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.iH(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.iH(a,null,b)
return b},
hI:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.hP(a)
s=J.r(a)
if(s[b]==null)return!1
return H.jP(H.iL(s[d],t),c)},
db:function(a,b,c,d){if(a==null)return a
if(H.hI(a,b,c,d))return a
throw H.e(H.j7(H.cW(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.da(c,0,null),u.mangledGlobalNames)))},
mc:function(a,b,c,d){if(a==null)return a
if(H.hI(a,b,c,d))return a
throw H.e(H.al(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.da(c,0,null),u.mangledGlobalNames)))},
jP:function(a,b){var t,s,r,q,p
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
if(!H.V(r,b[p]))return!1}return!0},
md:function(a,b,c){return H.iH(a,b,H.jW(b,c))},
V:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aK")return!0
if('func' in b)return H.jZ(a,b)
if('func' in a)return b.name==="io"||b.name==="p"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.d(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.d(!0)
q=b[0]}else q=b
if(q!==s){p=H.aA(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.jP(H.iL(o,t),r)},
jO:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.V(o,n)||H.V(n,o)))return!1}return!0},
lB:function(a,b){var t,s,r,q,p,o
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
if(!(H.V(p,o)||H.V(o,p)))return!1}return!0},
jZ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.d('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.V(t,s)||H.V(s,t)))return!1}r=a.args
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
if(n===m){if(!H.jO(r,q,!1))return!1
if(!H.jO(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
g=r[h]
H.d(i)
f=q[h]
if(!(H.V(g,f)||H.V(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=q[e]
if(!(H.V(g,f)||H.V(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=o[e]
if(!(H.V(g,f)||H.V(f,g)))return!1}}return H.lB(a.named,b.named)},
iH:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
mk:function(a){var t=$.iF
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
mg:function(a){return H.aL(a)},
me:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lW:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.p))
t=$.iF.$1(a)
s=$.hM[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.hW[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.jN.$2(a,t)
if(t!=null){s=$.hM[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.hW[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.iI(r)
$.hM[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.hW[t]=r
return r}if(p==="-"){o=H.iI(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.k0(a,r)
if(p==="*")throw H.e(new P.d2(t))
if(u.leafTags[t]===true){o=H.iI(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.k0(a,r)},
k0:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.i3(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
iI:function(a){return J.i3(a,!1,null,!!a.$iso)},
lY:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.i3(t,!1,null,!!t.$iso)
else return J.i3(t,c,null,null)},
lR:function(){if(!0===$.iG)return
$.iG=!0
H.lS()},
lS:function(){var t,s,r,q,p,o,n,m
$.hM=Object.create(null)
$.hW=Object.create(null)
H.lQ()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.k3.$1(p)
if(o!=null){n=H.lY(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
lQ:function(){var t,s,r,q,p,o,n
t=C.w()
t=H.b6(C.t,H.b6(C.y,H.b6(C.l,H.b6(C.l,H.b6(C.x,H.b6(C.u,H.b6(C.v(C.m),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.iF=new H.hT(p)
$.jN=new H.hU(o)
$.k3=new H.hV(n)},
b6:function(a,b){return a(b)||b},
f_:function f_(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fA:function fA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cU:function cU(a,b){this.a=a
this.b=b},
ei:function ei(a,b,c){this.a=a
this.b=b
this.c=c},
fE:function fE(a){this.a=a},
ie:function ie(a){this.a=a},
d8:function d8(a,b){this.a=a
this.b=b},
hX:function hX(a){this.a=a},
hY:function hY(a,b){this.a=a
this.b=b},
hZ:function hZ(a,b,c){this.a=a
this.b=b
this.c=c},
i_:function i_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i0:function i0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
aX:function aX(){},
fn:function fn(){},
fe:function fe(){},
bb:function bb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fC:function fC(a){this.a=a},
dq:function dq(a){this.a=a},
f4:function f4(a){this.a=a},
fO:function fO(a){this.a=a},
at:function at(a,b){this.a=a
this.b=b},
a8:function a8(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eh:function eh(a){this.a=a},
ek:function ek(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
el:function el(a,b){this.a=a
this.$ti=b},
em:function em(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hT:function hT(a){this.a=a},
hU:function hU(a){this.a=a},
hV:function hV(a){this.a=a},
B:function(a){return a},
hE:function(a){var t,s,r
if(!!J.r(a).$ism)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bp:function bp(){},
b0:function b0(){},
ex:function ex(){},
cP:function cP(){},
cQ:function cQ(){},
cR:function cR(){},
cO:function cO(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
cS:function cS(){},
eE:function eE(){},
bq:function bq(){},
br:function br(){},
bs:function bs(){},
bt:function bt(){},
lK:function(a){var t=H.I(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
i5:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
r:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cH.prototype
return J.eg.prototype}if(typeof a=="string")return J.aF.prototype
if(a==null)return J.cI.prototype
if(typeof a=="boolean")return J.ef.prototype
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.p)return a
return J.hO(a)},
i3:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hO:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.iG==null){H.lR()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.d2("Return interceptor for "+H.i(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$is()]
if(p!=null)return p
p=H.lW(a)
if(p!=null)return p
if(typeof a=="function")return C.z
s=Object.getPrototypeOf(a)
if(s==null)return C.n
if(s===Object.prototype)return C.n
if(typeof q=="function"){Object.defineProperty(q,$.$get$is(),{value:C.i,enumerable:false,writable:true,configurable:true})
return C.i}return C.i},
ac:function(a){if(typeof a=="string")return J.aF.prototype
if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.p)return a
return J.hO(a)},
hN:function(a){if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.p)return a
return J.hO(a)},
jU:function(a){if(typeof a=="number")return J.aZ.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.aN.prototype
return a},
lM:function(a){if(typeof a=="number")return J.aZ.prototype
if(typeof a=="string")return J.aF.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.aN.prototype
return a},
lN:function(a){if(typeof a=="string")return J.aF.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.aN.prototype
return a},
l:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.p)return a
return J.hO(a)},
C:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.r(a).v(a,b)},
ad:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.jU(a).aq(a,b)},
k7:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.jU(a).ar(a,b)},
b9:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lV(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ac(a).h(a,b)},
k8:function(a,b,c,d){return J.l(a).cY(a,b,c,d)},
iM:function(a,b){return J.lN(a).ay(a,b)},
iN:function(a,b){return J.l(a).bz(a,b)},
iO:function(a,b,c){return J.l(a).bB(a,b,c)},
k9:function(a,b){return J.l(a).dk(a,b)},
dc:function(a,b,c){return J.l(a).bC(a,b,c)},
bO:function(a,b,c){return J.l(a).bD(a,b,c)},
dd:function(a,b){return J.l(a).dn(a,b)},
ka:function(a,b){return J.l(a).bE(a,b)},
kb:function(a,b,c){return J.l(a).bF(a,b,c)},
iP:function(a,b,c,d){return J.l(a).bG(a,b,c,d)},
kc:function(a,b,c,d,e){return J.l(a).bH(a,b,c,d,e)},
kd:function(a,b){return J.lM(a).K(a,b)},
ig:function(a){return J.l(a).bJ(a)},
ke:function(a){return J.l(a).bK(a)},
kf:function(a){return J.l(a).bN(a)},
iQ:function(a){return J.l(a).dt(a)},
kg:function(a,b){return J.l(a).bO(a,b)},
ih:function(a,b){return J.l(a).bP(a,b)},
kh:function(a,b,c,d){return J.l(a).bQ(a,b,c,d)},
ki:function(a,b,c,d,e){return J.l(a).dC(a,b,c,d,e)},
kj:function(a,b,c,d,e){return J.l(a).bR(a,b,c,d,e)},
kk:function(a,b,c,d,e,f){return J.l(a).dD(a,b,c,d,e,f)},
kl:function(a,b){return J.hN(a).p(a,b)},
de:function(a,b){return J.l(a).bS(a,b)},
km:function(a,b){return J.l(a).bT(a,b)},
kn:function(a){return J.l(a).dE(a)},
ko:function(a,b){return J.hN(a).aP(a,b)},
ae:function(a){return J.r(a).gu(a)},
df:function(a){return J.hN(a).gA(a)},
dg:function(a){return J.ac(a).gj(a)},
kp:function(a){return J.r(a).gw(a)},
kq:function(a){return J.l(a).gao(a)},
ii:function(a){return J.l(a).gm(a)},
ij:function(a){return J.l(a).gn(a)},
iR:function(a){return J.l(a).gI(a)},
kr:function(a){return J.l(a).ap(a)},
ks:function(a){return J.l(a).aX(a)},
kt:function(a,b){return J.l(a).aY(a,b)},
ku:function(a,b,c){return J.l(a).aZ(a,b,c)},
iS:function(a,b,c){return J.l(a).b1(a,b,c)},
kv:function(a,b){return J.l(a).bV(a,b)},
kw:function(a,b){return J.hN(a).bX(a,b)},
kx:function(a,b,c){return J.l(a).bY(a,b,c)},
ky:function(a,b){return J.l(a).E(a,b)},
kz:function(a,b,c,d){return J.l(a).b4(a,b,c,d)},
kA:function(a,b,c,d,e,f,g){return J.l(a).c1(a,b,c,d,e,f,g)},
kB:function(a,b,c,d){return J.l(a).c2(a,b,c,d)},
iT:function(a,b,c,d){return J.l(a).c3(a,b,c,d)},
ba:function(a){return J.r(a).k(a)},
kC:function(a,b,c,d){return J.l(a).e5(a,b,c,d)},
kD:function(a,b,c){return J.l(a).c6(a,b,c)},
kE:function(a,b,c){return J.l(a).c7(a,b,c)},
ik:function(a,b,c){return J.l(a).c8(a,b,c)},
kF:function(a,b,c){return J.l(a).c9(a,b,c)},
iU:function(a,b,c){return J.l(a).ca(a,b,c)},
iV:function(a,b,c){return J.l(a).cb(a,b,c)},
iW:function(a,b,c){return J.l(a).cc(a,b,c)},
iX:function(a,b,c,d){return J.l(a).cd(a,b,c,d)},
iY:function(a,b,c,d){return J.l(a).ce(a,b,c,d)},
kG:function(a,b){return J.l(a).cg(a,b)},
kH:function(a,b,c){return J.l(a).e6(a,b,c)},
iZ:function(a,b,c,d,e,f,g){return J.l(a).cj(a,b,c,d,e,f,g)},
a:function a(){},
ef:function ef(){},
cI:function cI(){},
bn:function bn(){},
eQ:function eQ(){},
aN:function aN(){},
aG:function aG(){},
aE:function aE(a){this.$ti=a},
iq:function iq(a){this.$ti=a},
dk:function dk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aZ:function aZ(){},
cH:function cH(){},
eg:function eg(){},
aF:function aF(){}},P={
ll:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.lC()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bK(new P.fQ(t),1)).observe(s,{childList:true})
return new P.fP(t,s,r)}else if(self.setImmediate!=null)return P.lD()
return P.lE()},
lm:function(a){++u.globalState.f.b
self.scheduleImmediate(H.bK(new P.fR(a),0))},
ln:function(a){++u.globalState.f.b
self.setImmediate(H.bK(new P.fS(a),0))},
lo:function(a){P.iw(C.k,a)},
lx:function(a,b){if(H.b7(a,{func:1,args:[P.aK,P.aK]})){b.toString
return a}else{b.toString
return a}},
lp:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.an))
H.d(b.a===0)
b.a=1
try{a.c5(new P.h5(b),new P.h6(b))}catch(r){t=H.ap(r)
s=H.ay(r)
P.m1(new P.h7(b,t,s))}},
jH:function(a,b){var t,s,r,q
H.d(b.a<=1)
for(;t=a.a,s=t===2,s;){H.d(s)
a=a.c}s=b.a
if(t>=4){H.d(s<4)
r=b.c
b.c=null
q=b.a3(r)
H.d(b.a<4)
H.d(a.a>=4)
b.a=a.a
b.c=a.c
P.bC(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bs(q)}},
bC:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.hF(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bC(t.a,b)}s=t.a
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
P.hF(null,null,p,o,s)
return}s=$.A
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.A
H.d(l==null?s!=null:l!==s)
j=$.A
$.A=l
i=j}else i=null
s=b.c
if(s===8)new P.hb(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.ha(r,b,m).$0()}else if((s&2)!==0)new P.h9(t,r,b).$0()
if(i!=null){H.d(!0)
$.A=i}s=r.b
if(!!J.r(s).$ise4){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.a3(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.jH(s,o)
return}}g=b.b
H.d(g.a<4)
h=g.c
g.c=null
b=g.a3(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.d(!o)
g.a=4
g.c=p}else{H.d(!o)
g.a=8
g.c=p}t.a=g
s=g}},
lw:function(){var t,s
for(;t=$.b5,t!=null;){$.bI=null
s=t.b
$.b5=s
if(s==null)$.bH=null
t.a.$0()}},
lA:function(){$.iB=!0
try{P.lw()}finally{$.bI=null
$.iB=!1
if($.b5!=null)$.$get$iy().$1(P.jQ())}},
jL:function(a){var t=new P.d3(a,null)
if($.b5==null){$.bH=t
$.b5=t
if(!$.iB)$.$get$iy().$1(P.jQ())}else{$.bH.b=t
$.bH=t}},
lz:function(a){var t,s,r
t=$.b5
if(t==null){P.jL(a)
$.bI=$.bH
return}s=new P.d3(a,null)
r=$.bI
if(r==null){s.b=t
$.bI=s
$.b5=s}else{s.b=r.b
r.b=s
$.bI=s
if(s.b==null)$.bH=s}},
m1:function(a){var t=$.A
if(C.d===t){P.hH(null,null,C.d,a)
return}t.toString
P.hH(null,null,t,t.aL(a))},
li:function(a,b){var t=$.A
if(t===C.d){t.toString
return P.iw(a,b)}return P.iw(a,t.aL(b))},
iw:function(a,b){var t=C.b.H(a.a,1000)
return H.lh(t<0?0:t,b)},
ix:function(a){var t,s
H.d(a!=null)
t=$.A
H.d(a==null?t!=null:a!==t)
s=$.A
$.A=a
return s},
hF:function(a,b,c,d,e){var t={}
t.a=d
P.lz(new P.hG(t,e))},
jJ:function(a,b,c,d){var t,s
if($.A===c)return d.$0()
t=P.ix(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.A=s}},
jK:function(a,b,c,d,e){var t,s
if($.A===c)return d.$1(e)
t=P.ix(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.A=s}},
ly:function(a,b,c,d,e,f){var t,s
if($.A===c)return d.$2(e,f)
t=P.ix(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.A=s}},
hH:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.aL(d):c.dl(d)
P.jL(d)},
fQ:function fQ(a){this.a=a},
fP:function fP(a,b,c){this.a=a
this.b=b
this.c=c},
fR:function fR(a){this.a=a},
fS:function fS(a){this.a=a},
fV:function fV(){},
hz:function hz(a,b){this.a=a
this.$ti=b},
d5:function d5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
h4:function h4(a,b){this.a=a
this.b=b},
h8:function h8(a,b){this.a=a
this.b=b},
h5:function h5(a){this.a=a},
h6:function h6(a){this.a=a},
h7:function h7(a,b,c){this.a=a
this.b=b
this.c=c},
hb:function hb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hc:function hc(a){this.a=a},
ha:function ha(a,b,c){this.a=a
this.b=b
this.c=c},
h9:function h9(a,b,c){this.a=a
this.b=b
this.c=c},
d3:function d3(a,b){this.a=a
this.b=b},
fg:function fg(){},
fi:function fi(a){this.a=a},
fj:function fj(a,b){this.a=a
this.b=b},
fh:function fh(){},
aW:function aW(a,b){this.a=a
this.b=b},
hD:function hD(){},
hG:function hG(a,b){this.a=a
this.b=b},
hp:function hp(){},
hr:function hr(a,b){this.a=a
this.b=b},
hq:function hq(a,b){this.a=a
this.b=b},
hs:function hs(a,b){this.a=a
this.b=b},
jg:function(a,b){return new H.a8(0,null,null,null,null,null,0,[a,b])},
K:function(){return new H.a8(0,null,null,null,null,null,0,[null,null])},
aI:function(a){return H.lL(a,new H.a8(0,null,null,null,null,null,0,[null,null]))},
bF:function(a,b){return new P.d6(0,null,null,null,null,null,0,[a,b])},
lr:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
l0:function(a,b,c){var t,s
if(P.iC(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bJ()
C.a.l(s,a)
try{P.lv(a,t)}finally{H.d(C.a.gaR(s)===a)
s.pop()}s=P.jp(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
ee:function(a,b,c){var t,s,r
if(P.iC(a))return b+"..."+c
t=new P.bx(b)
s=$.$get$bJ()
C.a.l(s,a)
try{r=t
r.a=P.jp(r.gT(),a,", ")}finally{H.d(C.a.gaR(s)===a)
s.pop()}s=t
s.a=s.gT()+c
s=t.gT()
return s.charCodeAt(0)==0?s:s},
iC:function(a){var t,s
for(t=0;s=$.$get$bJ(),t<s.length;++t)if(a===s[t])return!0
return!1},
lv:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gA(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.q())return
q=H.i(t.gt())
C.a.l(b,q)
s+=q.length+2;++r}if(!t.q()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gt();++r
if(!t.q()){if(r<=4){C.a.l(b,H.i(n))
return}p=H.i(n)
o=b.pop()
s+=p.length+2}else{m=t.gt();++r
H.d(r<100)
for(;t.q();n=m,m=l){l=t.gt();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.l(b,"...")
return}}o=H.i(n)
p=H.i(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.l(b,k)
C.a.l(b,o)
C.a.l(b,p)},
aJ:function(a,b,c,d){return new P.hi(0,null,null,null,null,null,0,[d])},
l2:function(a,b){var t,s
t=P.aJ(null,null,null,b)
for(s=J.df(a);s.q();)t.l(0,s.gt())
return t},
l3:function(a){var t,s,r
t={}
if(P.iC(a))return"{...}"
s=new P.bx("")
try{C.a.l($.$get$bJ(),a)
r=s
r.a=r.gT()+"{"
t.a=!0
a.aP(0,new P.eq(t,s))
t=s
t.a=t.gT()+"}"}finally{t=$.$get$bJ()
H.d(C.a.gaR(t)===a)
t.pop()}t=s.gT()
return t.charCodeAt(0)==0?t:t},
iu:function(a,b){var t=new P.en(null,0,0,0,[b])
t.cO(a,b)
return t},
d6:function d6(a,b,c,d,e,f,g,h){var _=this
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
bE:function bE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hf:function hf(){},
v:function v(){},
eq:function eq(a,b){this.a=a
this.b=b},
en:function en(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hk:function hk(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
f8:function f8(){},
f7:function f7(){},
jp:function(a,b,c){var t=J.df(b)
if(!t.q())return a
if(c.length===0){do a+=H.i(t.gt())
while(t.q())}else{a+=H.i(t.gt())
for(;t.q();)a=a+c+H.i(t.gt())}return a},
kN:function(a,b){return J.kd(a,b)},
kO:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.i(t)
if(t>=10)return s+"00"+H.i(t)
return s+"000"+H.i(t)},
kP:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bU:function(a){if(a>=10)return""+a
return"0"+a},
im:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ba(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kR(a)},
kR:function(a){var t=J.r(a)
if(!!t.$isaX)return t.k(a)
return H.eW(a)},
j_:function(a){return new P.aq(!1,null,null,a)},
j0:function(a,b,c){return new P.aq(!0,a,b,c)},
eX:function(a,b,c){return new P.cX(null,null,!0,a,b,"Value not in range")},
bu:function(a,b,c,d,e){return new P.cX(b,c,!0,a,d,"Invalid value")},
jm:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.bu(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.bu(b,a,c,"end",f))
return b},
z:function(a,b,c,d,e){var t=e!=null?e:J.dg(b)
return new P.ea(b,t,!0,a,c,"Index out of range")},
bZ:function(a){return new P.h3(a)},
jh:function(a,b,c){var t,s
t=H.I([],[c])
for(s=J.df(a);s.q();)C.a.l(t,s.gt())
return t},
ao:function(a){H.i5(H.i(a))},
aV:function aV(){},
E:function E(){},
bd:function bd(a,b){this.a=a
this.b=b},
J:function J(){},
aD:function aD(a){this.a=a},
dB:function dB(){},
dC:function dC(){},
aY:function aY(){},
bP:function bP(a){this.a=a},
cV:function cV(){},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cX:function cX(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ea:function ea(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
q:function q(a){this.a=a},
d2:function d2(a){this.a=a},
bw:function bw(a){this.a=a},
a6:function a6(a){this.a=a},
d_:function d_(){},
du:function du(a){this.a=a},
h3:function h3(a){this.a=a},
dE:function dE(a,b,c){this.a=a
this.b=b
this.$ti=c},
n:function n(){},
ag:function ag(){},
cG:function cG(){},
b:function b(){},
as:function as(){},
aK:function aK(){},
R:function R(){},
p:function p(){},
bv:function bv(){},
u:function u(){},
bx:function bx(a){this.a=a},
hK:function(a){var t,s,r,q,p
if(a==null)return
t=P.K()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.N)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
lI:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.ko(a,new P.hJ(t))
return t},
hJ:function hJ(a){this.a=a},
hh:function hh(){},
ho:function ho(){},
F:function F(){},
dh:function dh(){},
aB:function aB(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){},
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
e_:function e_(){},
e2:function e2(){},
a7:function a7(){},
ar:function ar(){},
e8:function e8(){},
ah:function ah(){},
ej:function ej(){},
er:function er(){},
es:function es(){},
ai:function ai(){},
eG:function eG(){},
eN:function eN(){},
eS:function eS(){},
eT:function eT(){},
eY:function eY(){},
eZ:function eZ(){},
f5:function f5(){},
fk:function fk(){},
G:function G(){},
fl:function fl(){},
fm:function fm(){},
d0:function d0(){},
fo:function fo(){},
by:function by(){},
aj:function aj(){},
fy:function fy(){},
fG:function fG(){},
fI:function fI(){},
fJ:function fJ(){},
bD:function bD(){},
ht:function ht(){},
hu:function hu(){},
hv:function hv(){},
ce:function ce(){},
c6:function c6(){},
c3:function c3(){},
cc:function cc(){},
cr:function cr(){},
ct:function ct(){},
cu:function cu(){},
cv:function cv(){},
dl:function dl(){},
f1:function f1(){},
f2:function f2(){},
hA:function hA(){},
fd:function fd(){},
ck:function ck(){},
cw:function cw(){}},W={
kQ:function(a){return"wheel"},
aT:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jI:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
am:function(a,b,c,d,e){var t=W.jM(new W.h2(c))
t=new W.h1(0,a,b,t,!1,[e])
t.cW(a,b,c,!1,e)
return t},
jM:function(a){var t=$.A
if(t===C.d)return a
return t.dm(a)},
j:function j(){},
di:function di(){},
dj:function dj(){},
W:function W(){},
dm:function dm(){},
bQ:function bQ(){},
dn:function dn(){},
bR:function bR(){},
bS:function bS(){},
bT:function bT(){},
aC:function aC(){},
ds:function ds(){},
x:function x(){},
bc:function bc(){},
dt:function dt(){},
dv:function dv(){},
dw:function dw(){},
be:function be(){},
bV:function bV(){},
dx:function dx(){},
dy:function dy(){},
bW:function bW(){},
bX:function bX(){},
dz:function dz(){},
dA:function dA(){},
bY:function bY(){},
k:function k(){},
f:function f(){},
X:function X(){},
dY:function dY(){},
dZ:function dZ(){},
e3:function e3(){},
Y:function Y(){},
e6:function e6(){},
bl:function bl(){},
c0:function c0(){},
e7:function e7(){},
bm:function bm(){},
eb:function eb(){},
aH:function aH(){},
eo:function eo(){},
et:function et(){},
eu:function eu(){},
bo:function bo(){},
Z:function Z(){},
ev:function ev(){},
L:function L(){},
eF:function eF(){},
w:function w(){},
cT:function cT(){},
eM:function eM(){},
eP:function eP(){},
a_:function a_(){},
eR:function eR(){},
eU:function eU(){},
eV:function eV(){},
f3:function f3(){},
cY:function cY(){},
f6:function f6(){},
f9:function f9(){},
a0:function a0(){},
fa:function fa(){},
a1:function a1(){},
fc:function fc(){},
a2:function a2(){},
ff:function ff(){},
S:function S(){},
aa:function aa(){},
a3:function a3(){},
T:function T(){},
fp:function fp(){},
fq:function fq(){},
fs:function fs(){},
a4:function a4(){},
aM:function aM(){},
fw:function fw(){},
fx:function fx(){},
b3:function b3(){},
fz:function fz(){},
au:function au(){},
fF:function fF(){},
fH:function fH(){},
fK:function fK(){},
fL:function fL(){},
aO:function aO(){},
bB:function bB(){},
fM:function fM(a){this.a=a},
fN:function fN(){},
aP:function aP(){},
fU:function fU(){},
d4:function d4(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(){},
hd:function hd(){},
he:function he(){},
d7:function d7(){},
hw:function hw(){},
hx:function hx(){},
hy:function hy(){},
hB:function hB(){},
hC:function hC(){},
h0:function h0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iz:function iz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
h1:function h1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
h2:function h2(a){this.a=a},
y:function y(){},
e0:function e0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bf:function bf(){},
bg:function bg(){},
bh:function bh(){},
bi:function bi(){},
bj:function bj(){},
bk:function bk(){},
c1:function c1(){},
cl:function cl(){},
c7:function c7(){},
c4:function c4(){},
cf:function cf(){},
cg:function cg(){},
ch:function ch(){},
ci:function ci(){},
cj:function cj(){},
c2:function c2(){},
c5:function c5(){},
c8:function c8(){},
c9:function c9(){},
ca:function ca(){},
cb:function cb(){},
cd:function cd(){},
cm:function cm(){},
cn:function cn(){},
co:function co(){},
cy:function cy(){},
cz:function cz(){},
cx:function cx(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
cF:function cF(){},
cp:function cp(){},
cq:function cq(){},
cs:function cs(){},
cA:function cA(){},
cB:function cB(){}},B={
m2:function(a){var t,s
t=document
s=W.aH
W.am(t,"keydown",new B.i7(),!1,s)
W.am(t,"keyup",new B.i8(),!1,s)
if(!$.m3)W.am(t,"mousemove",new B.i9(),!1,W.L)
s=W.L
W.am(t,"mousedown",new B.ia(),!1,s)
W.am(t,"mouseup",new B.ib(),!1,s)},
l4:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.B(3))
s=$.$get$hL()
r=$.$get$bL()
q=new T.a9(new Float32Array(H.B(16)))
q.Y()
q=new B.eH(a,b,c,0,new T.t(t),-0.02,s,r,q,new T.t(new Float32Array(H.B(3))),new T.t(new Float32Array(H.B(3))),new T.t(new Float32Array(H.B(3))),new T.t(new Float32Array(H.B(3))),"camera:orbit",!1,!0)
q.cP(a,b,c,d)
return q},
i7:function i7(){},
i8:function i8(){},
i9:function i9(){},
ia:function ia(){},
ib:function ib(){},
eH:function eH(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
eI:function eI(a){this.a=a},
eJ:function eJ(a){this.a=a},
eK:function eK(){},
eL:function eL(a){this.a=a},
le:function(b5,b6,b7,b8,b9,c0,c1,c2,c3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
t=[]
s=new Float32Array(H.B(3))
r=new T.t(s)
q=new T.t(new Float32Array(H.B(3)))
new Float32Array(H.B(3))
p=[[P.b,P.n]]
o=H.I(new Array(c0),p)
for(n=[P.n],m=0;m<c0;++m){o[m]=H.I(new Array(c1),n)
l=m/c0*2*b7*3.141592653589793
B.jX(l,b8,b7,b9,b6,$.$get$i4())
B.jX(l+0.02,b8,b7,b9,b6,$.$get$iK())
k=$.$get$iK().a
j=k[0]
i=$.$get$i4().a
s[0]=j-i[0]
s[1]=k[1]-i[1]
s[2]=k[2]-i[2]
j=q.a
j[0]=k[0]+i[0]
j[1]=k[1]+i[1]
j[2]=k[2]+i[2]
h=r.ak(q)
h.a9(0)
q=h.ak(r)
q.a9(0)
for(k=q.a,j=h.a,g=0;g<c1;++g){f=g/c1*2*3.141592653589793
e=c2*Math.cos(f)
d=c2*Math.sin(f)
i=$.$get$i4().a
c=i[0]
b=k[0]
a=j[0]
a0=i[1]
a1=k[1]
a2=j[1]
i=i[2]
a3=k[2]
a4=j[2]
a5=new Float32Array(3)
a5[0]=c+e*b+d*a
a5[1]=a0+e*a1+d*a2
a5[2]=i+e*a3+d*a4
C.a.l(t,new T.t(a5))
o[m][g]=t.length-1}}s=P.K()
a6=new G.e5(!1,[],[],[],s)
H.d(!s.C(0,"aTexUV"))
H.d(C.e.cA("aTexUV","a"))
switch($.$get$P().h(0,"aTexUV").a){case"vec2":s.i(0,"aTexUV",H.I([],[T.a5]))
break
case"vec3":s.i(0,"aTexUV",H.I([],[T.t]))
break
case"vec4":s.i(0,"aTexUV",H.I([],[T.av]))
break
case"float":s.i(0,"aTexUV",H.I([],[P.J]))
break
case"uvec4":s.i(0,"aTexUV",H.I([],p))
break
default:if(H.aw(!1))H.aU("unknown type for aTexUV")}for(m=0;m<c0;m=a7)for(a7=m+1,a8=a7%c0,g=0;g<c1;g=a9){a9=g+1
b0=a9%c1
s=o[m]
b1=s[g]
p=o[a8]
b2=p[g]
b3=p[b0]
b4=s[b0]
s=g/c1
p=new Float32Array(2)
p[0]=0
p[1]=s
n=new Float32Array(2)
n[0]=1
n[1]=s
s=a9/c1
k=new Float32Array(2)
k[0]=1
k[1]=s
j=new Float32Array(2)
j[0]=0
j[1]=s
a6.cH(1)
a6.ae([C.a.h(t,b4),C.a.h(t,b3),C.a.h(t,b2),C.a.h(t,b1)])
a6.cG("aTexUV",[new T.a5(p),new T.a5(n),new T.a5(k),new T.a5(j)])}a6.cL()
return a6},
jX:function(a,b,c,d,e,f){var t,s,r,q,p
t=Math.cos(a)
s=Math.sin(a)
r=b/c*a
q=d*(2+Math.cos(r))
p=f.a
p[0]=q*0.5*t
p[1]=q*s*0.5
p[2]=e*d*Math.sin(r)*0.5
return f}},G={
lk:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.i(t[s])}return C.a.a8(t,"\n")},
jG:function(a,b,c){var t,s,r,q
t=J.l(a)
s=t.bM(a,b)
t.b3(a,s,c)
t.bI(a,s)
r=t.b0(a,s,35713)
if(r!=null&&!r){q=t.b_(a,s)
P.ao("E:Compilation failed:")
P.ao("E:"+G.lk(c))
P.ao("E:Failure:")
P.ao(C.e.W("E:",q))
throw H.e(q)}return s},
ji:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
d.B(b)
d.au(a)
e.B(c)
e.au(a)
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
t=Math.sqrt(e.gan())
if(t===0)return!1
e.co(0,-1/t)
return!0},
jb:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.ii(a[s])
b[t+1]=J.ij(a[s])
b[t+2]=J.iR(a[s])}return b},
kT:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.ii(a[s])
b[t+1]=J.ij(a[s])}return b},
kU:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.ii(a[s])
b[t+1]=J.ij(a[s])
b[t+2]=J.iR(a[s])
b[t+3]=J.kq(a[s])}return b},
kS:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.b9(a[s],0)
b[t+1]=J.b9(a[s],1)
b[t+2]=J.b9(a[s],2)
b[t+3]=J.b9(a[s],3)}return b},
lq:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gL(t),s=s.gA(s),r=b.x,q=[[P.b,P.n]],p=[P.J],o=[T.av],n=[T.t],m=[T.a5];s.q();){l=s.gt()
if(!r.C(0,l)){k="Dropping unnecessary attribute: "+H.i(l)
if($.iE>0)H.i5("I: "+k)
continue}j=t.h(0,l)
switch($.$get$P().h(0,l).a){case"vec2":b.a_(l,G.kT(H.db(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.a_(l,G.jb(H.db(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.a_(l,G.kU(H.db(j,"$isb",o,"$asb"),null),4)
break
case"float":b.a_(l,new Float32Array(H.hE(H.db(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.a_(l,G.kS(H.db(j,"$isb",q,"$asb"),null),4)
break
default:if(H.aw(!1))H.aU("unknown type for "+H.i(l)+" ["+J.kp(j[0]).k(0)+"] ["+new H.at(H.hQ(j),null).k(0)+"] "+H.i(j))}}},
jn:function(a,b,c,d){var t=new G.f0(b,c,d,null,null,P.K(),P.K(),P.aJ(null,null,null,P.u),null,a,!1,!0)
t.cQ(a,b,c,d)
return t},
ew:function ew(){},
fD:function fD(){},
dp:function dp(){},
dr:function dr(a,b){this.a=a
this.b=b},
dX:function dX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e5:function e5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d1:function d1(a,b,c){this.a=a
this.b=b
this.c=c},
bA:function bA(a,b,c){this.a=a
this.b=b
this.c=c},
cM:function cM(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
cN:function cN(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
eO:function eO(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
f0:function f0(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
h:function h(a,b,c){this.a=a
this.b=b
this.c=c},
b2:function b2(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fb:function fb(){},
fr:function fr(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bz:function bz(){},
e9:function e9(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},A={
hR:function(a){var t,s
t=C.A.dH(a,0,new A.hS())
s=536870911&t+(C.b.ck(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
hS:function hS(){}},T={
jF:function(){return new T.t(new Float32Array(H.B(3)))},
a9:function a9(a){this.a=a},
a5:function a5(a){this.a=a},
t:function t(a){this.a=a},
av:function av(a){this.a=a}},M={
lX:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t={}
s=document
r=C.p.dY(s,"#webgl-canvas")
r.width=r.clientWidth
r.height=r.clientHeight
$.iE=1
q=new G.dr(null,r)
p=(r&&C.j).aW(r,"webgl2",P.aI(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
q.a=p
if(p==null)H.D(P.bZ('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+J.ba(J.kr(p))
if($.iE>0)P.ao("I: "+o)
J.kc(p,0,0,0,1)
J.de(p,2929)
n=B.l4(5,0,0,s.body)
p=new T.a9(new Float32Array(H.B(16)))
p.Y()
o=new T.a9(new Float32Array(H.B(16)))
o.Y()
m=new G.eO(n,50,1,0.1,1000,p,o,new T.a9(new Float32Array(H.B(16))),P.K(),"perspective",!1,!0)
m.bc()
m.cI(r.width,r.height)
l=G.jn("basic",q,$.$get$jS(),$.$get$jR())
k=new G.cM(P.K(),"torus-mat",!1,!0)
k.F("cDepthTest",!0)
k.F("cDepthWrite",!0)
k.F("cBlendEquation",$.$get$j2())
o=$.$get$jo()
k.F("cStencilFunc",o)
p=new T.a9(new Float32Array(H.B(16)))
p.Y()
k.F("uModelMatrix",p)
j=B.le(!0,1,2,3,1,128,16,0.4,!0)
p=l.d
i=J.iQ(p.a)
h=new G.cN(p,i,4,P.K(),l.e.x,null,0,-1,null,null,P.K(),"meshdata:torusknot",!1,!0)
h.ae(G.jb(j.d,null))
g=j.cK()
h.y=J.ig(p.a)
H.d(h.ch!=null)
f=h.ch.length
if(f<768){h.saD(new Uint8Array(H.hE(g)))
h.Q=5121}else if(f<196608){h.saD(new Uint16Array(H.hE(g)))
h.Q=5123}else{h.saD(new Uint32Array(H.hE(g)))
h.Q=5125}J.dd(p.a,i)
i=h.y
g=h.cx
p.toString
f=J.r(g)
H.d(!!f.$isjB||!!f.$isjC||!!f.$isjD)
J.dc(p.a,34963,i)
J.iP(p.a,34963,g,35048)
G.lq(j,h)
e=G.jn("basic",q,$.$get$k2(),$.$get$k1())
p=$.$get$j1()
d=new G.cM(P.K(),"stars",!1,!0)
d.F("cDepthTest",!0)
d.F("cDepthWrite",!1)
d.F("cBlendEquation",p)
d.F("cStencilFunc",o)
c=s.createElement("canvas")
c.width=64
c.height=64
b=C.j.cn(c,"2d")
a=(b&&C.h).bL(b,32,32,1,32,32,22);(a&&C.f).aj(a,0,"gray")
C.f.aj(a,1,"black")
b.fillStyle=a
C.h.dF(b,0,0,64,64)
a=C.h.bL(b,32,32,1,32,32,6);(a&&C.f).aj(a,0,"white")
C.f.aj(a,1,"gray")
b.globalAlpha=0.9
b.fillStyle=a
b.arc(32,32,4,0,6.283185307179586,!1)
b.fill("nonzero")
s=new G.fr(!1,!1,!1,!0,1,9729,9729)
p=J.kf(q.a)
o=new G.e9(c,"Utils::Particles",p,3553,q,s)
J.bO(q.a,3553,p)
J.kx(q.a,37440,1)
o.cS(c)
s.cN(q,3553)
H.d(J.ks(q.a)===0)
J.bO(q.a,3553,null)
d.F("uTexture",o)
d.F("uPointSize",1000)
s=new T.a9(new Float32Array(H.B(16)))
s.Y()
d.F("uModelMatrix",s)
a0=R.lj(e,2000,100)
t.a=0
new M.i2(t,n,m,l,k,h,e,d,a0).$1(0)},
i2:function i2(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i}},R={
lj:function(a,b,c){var t,s,r,q
t="stars_"+b
s=b*3
r=new Float32Array(H.B(s))
for(q=0;q<s;++q)r[q]=($.$get$jE().dW()-0.5)*c
s=a.d
s=new G.cN(s,J.iQ(s.a),0,P.K(),a.e.x,null,0,-1,null,null,P.K(),"meshdata:"+t,!1,!0)
s.ae(r)
return s}}
var v=[C,H,J,P,W,B,G,A,T,M,R]
setFunctionNamesIfNecessary(v)
var $={}
H.ir.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gu:function(a){return H.aL(a)},
k:function(a){return H.eW(a)},
gw:function(a){return new H.at(H.hQ(a),null)}}
J.ef.prototype={
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gw:function(a){return C.P},
$isaV:1}
J.cI.prototype={
v:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
gw:function(a){return C.J}}
J.bn.prototype={
gu:function(a){return 0},
gw:function(a){return C.I},
k:function(a){return String(a)},
$isjf:1}
J.eQ.prototype={}
J.aN.prototype={}
J.aG.prototype={
k:function(a){var t=a[$.$get$j9()]
return t==null?this.cE(a):J.ba(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isio:1}
J.aE.prototype={
aN:function(a,b){if(!!a.immutable$list)throw H.e(new P.q(b))},
aM:function(a,b){if(!!a.fixed$length)throw H.e(new P.q(b))},
l:function(a,b){this.aM(a,"add")
a.push(b)},
dh:function(a,b){var t,s,r,q,p
t=a.length
this.aM(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.N)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.D(new P.a6(a)))
a.push(q)}},
bX:function(a,b){return new H.cL(a,b,[H.b8(a,0),null])},
a8:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.i(a[s])
return t.join(b)},
p:function(a,b){return a[b]},
gdG:function(a){if(a.length>0)return a[0]
throw H.e(H.ip())},
gaR:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.ip())},
b2:function(a,b,c,d,e){var t,s
this.aN(a,"setRange")
P.jm(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.D(P.bu(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.l1())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
cz:function(a,b){this.aN(a,"sort")
H.cZ(a,0,a.length-1,P.lJ())},
at:function(a){return this.cz(a,null)},
U:function(a,b){var t
for(t=0;t<a.length;++t)if(J.C(a[t],b))return!0
return!1},
k:function(a){return P.ee(a,"[","]")},
gA:function(a){return new J.dk(a,a.length,0,null,[H.b8(a,0)])},
gu:function(a){return H.aL(a)},
gj:function(a){return a.length},
sj:function(a,b){this.aM(a,"set length")
if(b<0)throw H.e(P.bu(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.M(a,b))
if(b>=a.length||b<0)throw H.e(H.M(a,b))
return a[b]},
i:function(a,b,c){this.aN(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.M(a,b))
if(b>=a.length||b<0)throw H.e(H.M(a,b))
a[b]=c},
$ism:1,
$asm:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.iq.prototype={}
J.dk.prototype={
gt:function(){return this.d},
q:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.N(t))
r=this.c
if(r>=s){this.sbe(null)
return!1}this.sbe(t[r]);++this.c
return!0},
sbe:function(a){this.d=a}}
J.aZ.prototype={
K:function(a,b){var t
if(typeof b!=="number")throw H.e(H.Q(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaQ(b)
if(this.gaQ(a)===t)return 0
if(this.gaQ(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaQ:function(a){return a===0?1/a<0:a<0},
V:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.q(""+a+".round()"))},
dq:function(a,b,c){if(this.K(b,c)>0)throw H.e(H.Q(b))
if(this.K(a,b)<0)return b
if(this.K(a,c)>0)return c
return a},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
W:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return a+b},
Z:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return a-b},
cl:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return a/b},
D:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return a*b},
av:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bx(a,b)},
H:function(a,b){return(a|0)===a?a/b|0:this.bx(a,b)},
bx:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.q("Result of truncating division is "+H.i(t)+": "+H.i(a)+" ~/ "+b))},
aH:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
ck:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return(a&b)>>>0},
cF:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return(a^b)>>>0},
ar:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return a<b},
aq:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return a>b},
cm:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return a>=b},
gw:function(a){return C.S},
$isR:1}
J.cH.prototype={
gw:function(a){return C.R},
$isJ:1,
$isn:1,
$isR:1}
J.eg.prototype={
gw:function(a){return C.Q},
$isJ:1,
$isR:1}
J.aF.prototype={
ay:function(a,b){if(b>=a.length)throw H.e(H.M(a,b))
return a.charCodeAt(b)},
W:function(a,b){if(typeof b!=="string")throw H.e(P.j0(b,null,null))
return a+b},
cB:function(a,b,c){var t
if(c>a.length)throw H.e(P.bu(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
cA:function(a,b){return this.cB(a,b,0)},
b5:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.eX(b,null,null))
if(b>c)throw H.e(P.eX(b,null,null))
if(c>a.length)throw H.e(P.eX(c,null,null))
return a.substring(b,c)},
cC:function(a,b){return this.b5(a,b,null)},
K:function(a,b){var t
if(typeof b!=="string")throw H.e(H.Q(b))
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
gw:function(a){return C.K},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.M(a,b))
return a[b]},
$ism:1,
$asm:function(){},
$isu:1}
H.c.prototype={$asc:null}
H.b_.prototype={
gA:function(a){return new H.cJ(this,this.gj(this),0,null,[H.ax(this,"b_",0)])},
e4:function(a,b){var t,s
t=H.I([],[H.ax(this,"b_",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.p(0,s)
return t},
e3:function(a){return this.e4(a,!0)}}
H.cJ.prototype={
gt:function(){return this.d},
q:function(){var t,s,r,q
t=this.a
s=J.ac(t)
r=s.gj(t)
if(this.b!==r)throw H.e(new P.a6(t))
q=this.c
if(q>=r){this.sa1(null)
return!1}this.sa1(s.p(t,q));++this.c
return!0},
sa1:function(a){this.d=a}}
H.cK.prototype={
gA:function(a){return new H.ep(null,J.df(this.a),this.b,this.$ti)},
gj:function(a){return J.dg(this.a)},
$asag:function(a,b){return[b]}}
H.dD.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.ep.prototype={
q:function(){var t=this.b
if(t.q()){this.sa1(this.c.$1(t.gt()))
return!0}this.sa1(null)
return!1},
gt:function(){return this.a},
sa1:function(a){this.a=a},
$ascG:function(a,b){return[b]}}
H.cL.prototype={
gj:function(a){return J.dg(this.a)},
p:function(a,b){return this.b.$1(J.kl(this.a,b))},
$asc:function(a,b){return[b]},
$asb_:function(a,b){return[b]},
$asag:function(a,b){return[b]}}
H.c_.prototype={}
H.ic.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.id.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hm.prototype={
sdQ:function(a){this.z=a},
sdT:function(a){this.ch=a}}
H.aR.prototype={
bA:function(a,b){if(!this.f.v(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aK()},
e_:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.aa(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bq();++r.d}this.y=!1}this.aK()},
di:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.r(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
dZ:function(a){var t,s,r
if(this.ch==null)return
for(t=J.r(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.D(new P.q("removeRange"))
P.jm(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cw:function(a,b){if(!this.r.v(0,a))return
this.db=b},
dK:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.E(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.iu(null,null)
this.cx=t}t.M(0,new H.hg(a,c))},
dJ:function(a,b){var t
if(!this.r.v(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.am()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.iu(null,null)
this.cx=t}t.M(0,this.gdR())},
dL:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.ao(a)
if(b!=null)P.ao(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.ba(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bE(t,t.r,null,null,[null]),r.c=t.e;r.q();)r.d.E(0,s)},
a5:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.ap(o)
p=H.ay(o)
this.dL(q,p)
if(this.db){this.am()
if(this===u.globalState.e)throw o}}finally{this.cy=H.lF(r)
u.globalState.d=H.jY(t,"$isaR")
if(t!=null)$=t.gdP()
if(this.cx!=null)for(;n=this.cx,!n.gal(n);)this.cx.bZ().$0()}return s},
bW:function(a){return this.b.h(0,a)},
bi:function(a,b){var t=this.b
if(t.C(0,a))throw H.e(P.bZ("Registry: ports must be registered only once."))
t.i(0,a,b)},
aK:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.am()},
am:function(){var t,s,r
t=this.cx
if(t!=null)t.N(0)
for(t=this.b,s=t.gci(t),s=s.gA(s);s.q();)s.gt().d_()
t.N(0)
this.c.N(0)
u.globalState.z.aa(0,this.a)
this.dx.N(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].E(0,t[r+1])
this.ch=null}},
gdP:function(){return this.d},
gds:function(){return this.e}}
H.hg.prototype={
$0:function(){this.a.E(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.fZ.prototype={
dv:function(){var t=this.a
if(t.b===t.c)return
return t.bZ()},
c0:function(){var t,s,r
t=this.dv()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.C(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gal(s)}else s=!1
else s=!1
else s=!1
if(s)H.D(P.bZ("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gal(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aI(["command","close"])
r=new H.ab(!0,new P.d6(0,null,null,null,null,null,0,[null,P.n])).G(r)
s.toString
self.postMessage(r)}return!1}t.dX()
return!0},
bv:function(){if(self.window!=null)new H.h_(this).$0()
else for(;this.c0(););},
ab:function(){var t,s,r,q,p
if(!u.globalState.x)this.bv()
else try{this.bv()}catch(r){t=H.ap(r)
s=H.ay(r)
q=u.globalState.Q
p=P.aI(["command","error","msg",H.i(t)+"\n"+H.i(s)])
p=new H.ab(!0,P.bF(null,P.n)).G(p)
q.toString
self.postMessage(p)}}}
H.h_.prototype={
$0:function(){if(!this.a.c0())return
P.li(C.k,this)},
$S:function(){return{func:1,v:true}}}
H.aS.prototype={
dX:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.a5(this.b)}}
H.hl.prototype={}
H.ec.prototype={
$0:function(){H.kY(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.ed.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.b7(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.b7(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aK()},
$S:function(){return{func:1,v:true}}}
H.fT.prototype={}
H.b4.prototype={
E:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.lt(b)
if(t.gds()===s){s=J.ac(r)
switch(s.h(r,0)){case"pause":t.bA(s.h(r,1),s.h(r,2))
break
case"resume":t.e_(s.h(r,1))
break
case"add-ondone":t.di(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.dZ(s.h(r,1))
break
case"set-errors-fatal":t.cw(s.h(r,1),s.h(r,2))
break
case"ping":t.dK(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.dJ(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.aa(0,s)
break}return}u.globalState.f.a.M(0,new H.aS(t,new H.hn(this,r),"receive"))},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.b4){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.hn.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.cX(0,this.b)},
$S:function(){return{func:1}}}
H.bG.prototype={
E:function(a,b){var t,s,r
t=P.aI(["command","message","port",this,"msg",b])
s=new H.ab(!0,P.bF(null,P.n)).G(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bG){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.cF((this.b<<16^this.a<<8)>>>0,this.c)}}
H.b1.prototype={
d_:function(){this.c=!0
this.b=null},
cX:function(a,b){if(this.c)return
this.b.$1(b)},
$islc:1}
H.ft.prototype={
cT:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.M(0,new H.aS(s,new H.fu(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.bK(new H.fv(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.q("Timer greater than 0."))}}}
H.fu.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.fv.prototype={
$0:function(){this.a.c=null
H.i1()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.af.prototype={
gu:function(a){var t=this.a
t=C.b.aH(t,0)^C.b.H(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
v:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.af){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.ab.prototype={
G:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.r(a)
if(!!t.$isbp)return["buffer",a]
if(!!t.$isb0)return["typed",a]
if(!!t.$ism)return this.cs(a)
if(!!t.$iskV){r=this.gcp()
q=t.gL(a)
q=H.iv(q,r,H.ax(q,"ag",0),null)
q=P.jh(q,!0,H.ax(q,"ag",0))
t=t.gci(a)
t=H.iv(t,r,H.ax(t,"ag",0),null)
return["map",q,P.jh(t,!0,H.ax(t,"ag",0))]}if(!!t.$isjf)return this.ct(a)
if(!!t.$isa)this.cf(a)
if(!!t.$islc)this.ac(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isb4)return this.cu(a)
if(!!t.$isbG)return this.cv(a)
if(!!t.$isaX){p=a.$static_name
if(p==null)this.ac(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isaf)return["capability",a.a]
if(!(a instanceof P.p))this.cf(a)
return["dart",u.classIdExtractor(a),this.cr(u.classFieldsExtractor(a))]},
ac:function(a,b){throw H.e(new P.q((b==null?"Can't transmit:":b)+" "+H.i(a)))},
cf:function(a){return this.ac(a,null)},
cs:function(a){var t
H.d(typeof a!=="string")
t=this.cq(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ac(a,"Can't serialize indexable: ")},
cq:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.G(a[s])
return t},
cr:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.G(a[t]))
return a},
ct:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ac(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.G(a[t[r]])
return["js-object",t,s]},
cv:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cu:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aQ.prototype={
O:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.j_("Bad serialized message: "+H.i(a)))
switch(C.a.gdG(a)){case"ref":H.d(J.C(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.d(J.C(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.d(J.C(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.d(J.C(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
s=H.I(this.a4(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.C(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.I(this.a4(t),[null])
case"mutable":H.d(J.C(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.a4(t)
case"const":H.d(J.C(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.I(this.a4(t),[null])
s.fixed$length=Array
return s
case"map":return this.dA(a)
case"sendport":return this.dB(a)
case"raw sendport":H.d(J.C(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.dz(a)
case"function":H.d(J.C(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.C(a[0],"capability"))
return new H.af(a[1])
case"dart":H.d(J.C(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.l(this.b,p)
this.a4(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.i(a))}},
a4:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.O(a[t]))
return a},
dA:function(a){var t,s,r,q,p
H.d(J.C(a[0],"map"))
t=a[1]
s=a[2]
r=P.K()
C.a.l(this.b,r)
t=J.kw(t,this.gdw()).e3(0)
for(q=J.ac(s),p=0;p<t.length;++p)r.i(0,t[p],this.O(q.h(s,p)))
return r},
dB:function(a){var t,s,r,q,p,o,n
H.d(J.C(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.bW(r)
if(o==null)return
n=new H.b4(o,s)}else n=new H.bG(t,r,s)
C.a.l(this.b,n)
return n},
dz:function(a){var t,s,r,q,p,o
H.d(J.C(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.ac(t),p=J.ac(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.O(p.h(s,o))
return r}}
H.f_.prototype={}
H.fA.prototype={
J:function(a){var t,s,r
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
H.cU.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.i(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.ei.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.i(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.i(this.a)+")"}}
H.fE.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.ie.prototype={
$1:function(a){if(!!J.r(a).$isaY)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.d8.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.hX.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.hY.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.hZ.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.i_.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.i0.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.aX.prototype={
k:function(a){return"Closure '"+H.cW(this).trim()+"'"},
$isio:1,
ge7:function(){return this},
$D:null}
H.fn.prototype={}
H.fe.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bb.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bb))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.aL(this.a)
else s=typeof t!=="object"?J.ae(t):H.aL(t)
return(s^H.aL(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.i(this.d)+"' of "+H.eW(t)}}
H.fC.prototype={
k:function(a){return this.a}}
H.dq.prototype={
k:function(a){return this.a}}
H.f4.prototype={
k:function(a){return"RuntimeError: "+H.i(this.a)}}
H.fO.prototype={
k:function(a){return C.e.W("Assertion failed: ",P.im(this.a))}}
H.at.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.ae(this.a)},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.at){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.a8.prototype={
gj:function(a){return this.a},
gal:function(a){return this.a===0},
gL:function(a){return new H.el(this,[H.b8(this,0)])},
gci:function(a){return H.iv(this.gL(this),new H.eh(this),H.b8(this,0),H.b8(this,1))},
C:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bn(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bn(s,b)}else return this.dM(b)},
dM:function(a){var t=this.d
if(t==null)return!1
return this.a7(this.ai(t,this.a6(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.a2(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.a2(r,b)
return s==null?null:s.b}else return this.dN(b)},
dN:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.ai(t,this.a6(a))
r=this.a7(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aE()
this.b=t}this.bg(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aE()
this.c=s}this.bg(s,b,c)}else{r=this.d
if(r==null){r=this.aE()
this.d=r}q=this.a6(b)
p=this.ai(r,q)
if(p==null)this.aG(r,q,[this.aF(b,c)])
else{o=this.a7(p,b)
if(o>=0)p[o].b=c
else p.push(this.aF(b,c))}}},
aa:function(a,b){if(typeof b==="string")return this.bt(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bt(this.c,b)
else return this.dO(b)},
dO:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.ai(t,this.a6(a))
r=this.a7(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.by(q)
return q.b},
N:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
aP:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a6(this))
t=t.c}},
bg:function(a,b,c){var t=this.a2(a,b)
if(t==null)this.aG(a,b,this.aF(b,c))
else t.b=c},
bt:function(a,b){var t
if(a==null)return
t=this.a2(a,b)
if(t==null)return
this.by(t)
this.bo(a,b)
return t.b},
aF:function(a,b){var t,s
t=new H.ek(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
by:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
a6:function(a){return J.ae(a)&0x3ffffff},
a7:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.C(a[s].a,b))return s
return-1},
k:function(a){return P.l3(this)},
a2:function(a,b){return a[b]},
ai:function(a,b){return a[b]},
aG:function(a,b,c){H.d(c!=null)
a[b]=c},
bo:function(a,b){delete a[b]},
bn:function(a,b){return this.a2(a,b)!=null},
aE:function(){var t=Object.create(null)
this.aG(t,"<non-identifier-key>",t)
this.bo(t,"<non-identifier-key>")
return t},
$iskV:1}
H.eh.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.ek.prototype={}
H.el.prototype={
gj:function(a){return this.a.a},
gA:function(a){var t,s
t=this.a
s=new H.em(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.em.prototype={
gt:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a6(t))
else{t=this.c
if(t==null){this.sbf(null)
return!1}else{this.sbf(t.a)
this.c=this.c.c
return!0}}},
sbf:function(a){this.d=a}}
H.hT.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.hU.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.u]}}}
H.hV.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.u]}}}
H.bp.prototype={
gw:function(a){return C.B},
$isbp:1}
H.b0.prototype={$isb0:1}
H.ex.prototype={
gw:function(a){return C.C}}
H.cP.prototype={
gj:function(a){return a.length},
$ism:1,
$asm:function(){},
$iso:1,
$aso:function(){}}
H.cQ.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.M(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.D(H.M(a,b))
a[b]=c}}
H.cR.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.D(H.M(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.cO.prototype={
gw:function(a){return C.D},
$isc:1,
$asc:function(){return[P.J]},
$isb:1,
$asb:function(){return[P.J]},
$ise1:1}
H.ey.prototype={
gw:function(a){return C.E},
$isc:1,
$asc:function(){return[P.J]},
$isb:1,
$asb:function(){return[P.J]}}
H.ez.prototype={
gw:function(a){return C.F},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.eA.prototype={
gw:function(a){return C.G},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$isjc:1}
H.eB.prototype={
gw:function(a){return C.H},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.eC.prototype={
gw:function(a){return C.L},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$isjB:1}
H.eD.prototype={
gw:function(a){return C.M},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$isjC:1}
H.cS.prototype={
gw:function(a){return C.N},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.eE.prototype={
gw:function(a){return C.O},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$isjD:1}
H.bq.prototype={
$asm:function(){},
$isc:1,
$asc:function(){return[P.n]},
$aso:function(){},
$isb:1,
$asb:function(){return[P.n]}}
H.br.prototype={
$asm:function(){},
$isc:1,
$asc:function(){return[P.J]},
$aso:function(){},
$isb:1,
$asb:function(){return[P.J]}}
H.bs.prototype={
$asm:function(){},
$asc:function(){return[P.J]},
$aso:function(){},
$asb:function(){return[P.J]}}
H.bt.prototype={
$asm:function(){},
$asc:function(){return[P.n]},
$aso:function(){},
$asb:function(){return[P.n]}}
P.fQ.prototype={
$1:function(a){var t,s
H.i1()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.fP.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.fR.prototype={
$0:function(){H.i1()
this.a.$0()},
$S:function(){return{func:1}}}
P.fS.prototype={
$0:function(){H.i1()
this.a.$0()},
$S:function(){return{func:1}}}
P.fV.prototype={}
P.hz.prototype={
dr:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.bw("Future already completed"))
t.aA(b)}}
P.d5.prototype={
dU:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.aT(this.d,a.a)},
dI:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.b7(s,{func:1,args:[P.p,P.bv]}))return t.e0(s,a.a,a.b)
else return t.aT(s,a.a)}}
P.an.prototype={
c5:function(a,b){var t,s,r
t=$.A
if(t!==C.d){t.toString
if(b!=null)b=P.lx(b,t)}s=new P.an(0,t,null,[null])
r=b==null?1:3
this.bh(new P.d5(null,s,r,a,b,[H.b8(this,0),null]))
return s},
c4:function(a){return this.c5(a,null)},
bj:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
bh:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.jY(this.c,"$isd5")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.bh(a)
return}this.bj(t)}H.d(this.a>=4)
t=this.b
t.toString
P.hH(null,null,t,new P.h4(this,a))}},
bs:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.bs(a)
return}this.bj(s)}H.d(this.a>=4)
t.a=this.a3(a)
s=this.b
s.toString
P.hH(null,null,s,new P.h8(t,this))}},
bu:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.a3(t)},
a3:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aA:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.hI(a,"$ise4",t,"$ase4"))if(H.hI(a,"$isan",t,null))P.jH(a,this)
else P.lp(a,this)
else{s=this.bu()
H.d(this.a<4)
this.a=4
this.c=a
P.bC(this,s)}},
af:function(a,b){var t
H.d(this.a<4)
t=this.bu()
H.d(this.a<4)
this.a=8
this.c=new P.aW(a,b)
P.bC(this,t)},
d1:function(a){return this.af(a,null)},
$ise4:1,
gaI:function(){return this.a},
gde:function(){return this.c}}
P.h4.prototype={
$0:function(){P.bC(this.a,this.b)},
$S:function(){return{func:1}}}
P.h8.prototype={
$0:function(){P.bC(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.h5.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.aA(a)},
$S:function(){return{func:1,args:[,]}}}
P.h6.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.af(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.h7.prototype={
$0:function(){this.a.af(this.b,this.c)},
$S:function(){return{func:1}}}
P.hb.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.c_(q.d)}catch(n){s=H.ap(n)
r=H.ay(n)
if(this.c){q=this.a.a
H.d(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.d(q.a===8)
p.b=q.c}else p.b=new P.aW(s,r)
p.a=!0
return}if(!!J.r(t).$ise4){if(t instanceof P.an&&t.gaI()>=4){if(t.gaI()===8){q=t
H.d(q.gaI()===8)
p=this.b
p.b=q.gde()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.c4(new P.hc(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hc.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.ha.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.aT(r.d,this.c)}catch(q){t=H.ap(q)
s=H.ay(q)
r=this.a
r.b=new P.aW(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.h9.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.dU(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.dI(t)
p.a=!1}}catch(o){s=H.ap(o)
r=H.ay(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.aW(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.d3.prototype={}
P.fg.prototype={
gj:function(a){var t,s
t={}
s=new P.an(0,$.A,null,[P.n])
t.a=0
this.dS(new P.fi(t),!0,new P.fj(t,s),s.gd0())
return s}}
P.fi.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.fj.prototype={
$0:function(){this.b.aA(this.a.a)},
$S:function(){return{func:1}}}
P.fh.prototype={}
P.aW.prototype={
k:function(a){return H.i(this.a)},
$isaY:1}
P.hD.prototype={}
P.hG.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.cV()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.hp.prototype={
e1:function(a){var t,s,r
try{if(C.d===$.A){a.$0()
return}P.jJ(null,null,this,a)}catch(r){t=H.ap(r)
s=H.ay(r)
P.hF(null,null,this,t,s)}},
e2:function(a,b){var t,s,r
try{if(C.d===$.A){a.$1(b)
return}P.jK(null,null,this,a,b)}catch(r){t=H.ap(r)
s=H.ay(r)
P.hF(null,null,this,t,s)}},
dl:function(a){return new P.hr(this,a)},
aL:function(a){return new P.hq(this,a)},
dm:function(a){return new P.hs(this,a)},
h:function(a,b){return},
c_:function(a){if($.A===C.d)return a.$0()
return P.jJ(null,null,this,a)},
aT:function(a,b){if($.A===C.d)return a.$1(b)
return P.jK(null,null,this,a,b)},
e0:function(a,b,c){if($.A===C.d)return a.$2(b,c)
return P.ly(null,null,this,a,b,c)}}
P.hr.prototype={
$0:function(){return this.a.c_(this.b)},
$S:function(){return{func:1}}}
P.hq.prototype={
$0:function(){return this.a.e1(this.b)},
$S:function(){return{func:1}}}
P.hs.prototype={
$1:function(a){return this.a.e2(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.d6.prototype={
a6:function(a){return H.lZ(a)&0x3ffffff},
a7:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hi.prototype={
gA:function(a){var t=new P.bE(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
U:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.d2(b)},
d2:function(a){var t=this.d
if(t==null)return!1
return this.ah(t[this.ag(a)],a)>=0},
bW:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.U(0,a)?a:null
else return this.da(a)},
da:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ag(a)]
r=this.ah(s,a)
if(r<0)return
return J.b9(s,r).gd4()},
l:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bk(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bk(r,b)}else return this.M(0,b)},
M:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.lr()
this.d=t}s=this.ag(b)
r=t[s]
if(r==null){q=[this.az(b)]
H.d(q!=null)
t[s]=q}else{if(this.ah(r,b)>=0)return!1
r.push(this.az(b))}return!0},
aa:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bl(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bl(this.c,b)
else return this.dc(0,b)},
dc:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ag(b)]
r=this.ah(s,b)
if(r<0)return!1
this.bm(s.splice(r,1)[0])
return!0},
N:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bk:function(a,b){var t
if(a[b]!=null)return!1
t=this.az(b)
H.d(!0)
a[b]=t
return!0},
bl:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bm(t)
delete a[b]
return!0},
az:function(a){var t,s
t=new P.hj(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bm:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
ag:function(a){return J.ae(a)&0x3ffffff},
ah:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.C(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.hj.prototype={
gd4:function(){return this.a}}
P.bE.prototype={
gt:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a6(t))
else{t=this.c
if(t==null){this.sa0(null)
return!1}else{this.sa0(t.a)
this.c=this.c.b
return!0}}},
sa0:function(a){this.d=a}}
P.hf.prototype={}
P.v.prototype={
gA:function(a){return new H.cJ(a,this.gj(a),0,null,[H.ax(a,"v",0)])},
p:function(a,b){return this.h(a,b)},
bX:function(a,b){return new H.cL(a,b,[H.ax(a,"v",0),null])},
dH:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.e(new P.a6(a))}return s},
k:function(a){return P.ee(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.eq.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.i(a)
t.a=s+": "
t.a+=H.i(b)},
$S:function(){return{func:1,args:[,,]}}}
P.en.prototype={
gA:function(a){return new P.hk(this,this.c,this.d,this.b,null,this.$ti)},
gal:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
p:function(a,b){var t,s
t=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=t)H.D(P.z(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
N:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.ee(this,"{","}")},
bZ:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.ip());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
M:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bq();++this.d},
bq:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.I(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.b2(s,0,q,t,r)
C.a.b2(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbw(s)},
cO:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbw(H.I(t,[b]))},
sbw:function(a){this.a=a},
$asc:null}
P.hk.prototype={
gt:function(){return this.e},
q:function(){var t,s
t=this.a
if(this.c!==t.d)H.D(new P.a6(t))
s=this.d
if(s===this.b){this.sa0(null)
return!1}this.sa0(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sa0:function(a){this.e=a}}
P.f8.prototype={
k:function(a){return P.ee(this,"{","}")},
$isc:1,
$asc:null}
P.f7.prototype={}
P.aV.prototype={}
P.E.prototype={}
P.bd.prototype={
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.bd))return!1
return this.a===b.a&&this.b===b.b},
K:function(a,b){return C.b.K(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aH(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.kO(H.lb(this))
s=P.bU(H.l9(this))
r=P.bU(H.l5(this))
q=P.bU(H.l6(this))
p=P.bU(H.l8(this))
o=P.bU(H.la(this))
n=P.kP(H.l7(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isE:1,
$asE:function(){return[P.bd]}}
P.J.prototype={$isE:1,
$asE:function(){return[P.R]}}
P.aD.prototype={
ar:function(a,b){return C.b.ar(this.a,b.gd3())},
aq:function(a,b){return C.b.aq(this.a,b.gd3())},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aD))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
K:function(a,b){return C.b.K(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.dC()
s=this.a
if(s<0)return"-"+new P.aD(0-s).k(0)
r=t.$1(C.b.H(s,6e7)%60)
q=t.$1(C.b.H(s,1e6)%60)
p=new P.dB().$1(s%1e6)
return""+C.b.H(s,36e8)+":"+H.i(r)+":"+H.i(q)+"."+H.i(p)},
$isE:1,
$asE:function(){return[P.aD]}}
P.dB.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.u,args:[P.n]}}}
P.dC.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.u,args:[P.n]}}}
P.aY.prototype={}
P.bP.prototype={
k:function(a){return"Assertion failed"}}
P.cV.prototype={
k:function(a){return"Throw of null."}}
P.aq.prototype={
gaC:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaB:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+t
q=this.gaC()+s+r
if(!this.a)return q
p=this.gaB()
o=P.im(this.b)
return q+p+": "+H.i(o)}}
P.cX.prototype={
gaC:function(){return"RangeError"},
gaB:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.i(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.i(t)
else if(r>t)s=": Not in range "+H.i(t)+".."+H.i(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.i(t)}return s}}
P.ea.prototype={
gaC:function(){return"RangeError"},
gaB:function(){H.d(this.a)
if(J.k7(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.i(t)},
gj:function(a){return this.f}}
P.q.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.d2.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.bw.prototype={
k:function(a){return"Bad state: "+this.a}}
P.a6.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.im(t))+"."}}
P.d_.prototype={
k:function(a){return"Stack Overflow"},
$isaY:1}
P.du.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.h3.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.i(t)}}
P.dE.prototype={
k:function(a){return"Expando:"+H.i(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.D(P.j0(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.jj(b,"expando$values")
return s==null?null:H.jj(s,t)}}
P.n.prototype={$isE:1,
$asE:function(){return[P.R]}}
P.ag.prototype={
gj:function(a){var t,s
H.d(!this.$isc)
t=this.gA(this)
for(s=0;t.q();)++s
return s},
p:function(a,b){var t,s,r
if(b<0)H.D(P.bu(b,0,null,"index",null))
for(t=this.gA(this),s=0;t.q();){r=t.gt()
if(b===s)return r;++s}throw H.e(P.z(b,this,"index",null,s))},
k:function(a){return P.l0(this,"(",")")}}
P.cG.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.as.prototype={}
P.aK.prototype={
gu:function(a){return P.p.prototype.gu.call(this,this)},
k:function(a){return"null"}}
P.R.prototype={$isE:1,
$asE:function(){return[P.R]}}
P.p.prototype={constructor:P.p,$isp:1,
v:function(a,b){return this===b},
gu:function(a){return H.aL(this)},
k:function(a){return H.eW(this)},
gw:function(a){return new H.at(H.hQ(this),null)},
toString:function(){return this.k(this)}}
P.bv.prototype={}
P.u.prototype={$isE:1,
$asE:function(){return[P.u]}}
P.bx.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gT:function(){return this.a}}
W.j.prototype={}
W.di.prototype={
k:function(a){return String(a)},
$isa:1}
W.dj.prototype={
k:function(a){return String(a)},
$isa:1}
W.W.prototype={$isp:1}
W.dm.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.q("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.W]},
$isc:1,
$asc:function(){return[W.W]},
$iso:1,
$aso:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.bQ.prototype={}
W.dn.prototype={$isa:1}
W.bR.prototype={
aW:function(a,b,c){if(c!=null)return this.d6(a,b,P.lI(c,null))
return this.d7(a,b)},
cn:function(a,b){return this.aW(a,b,null)},
d6:function(a,b,c){return a.getContext(b,c)},
d7:function(a,b){return a.getContext(b)}}
W.bS.prototype={
aj:function(a,b,c){return a.addColorStop(b,c)}}
W.bT.prototype={
bL:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
dF:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
ap:function(a){return P.hK(a.getContextAttributes())}}
W.aC.prototype={$isa:1,
gj:function(a){return a.length}}
W.ds.prototype={$isa:1}
W.x.prototype={$isp:1}
W.bc.prototype={
gj:function(a){return a.length}}
W.dt.prototype={}
W.dv.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.dw.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.be.prototype={
dY:function(a,b){return a.querySelector(b)}}
W.bV.prototype={$isa:1}
W.dx.prototype={
k:function(a){return String(a)}}
W.dy.prototype={
gao:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.bW.prototype={
gao:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.bX.prototype={
k:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gS(a))+" x "+H.i(this.gR(a))},
v:function(a,b){var t
if(b==null)return!1
t=J.r(b)
if(!t.$isF)return!1
return a.left===t.gaS(b)&&a.top===t.gaV(b)&&this.gS(a)===t.gS(b)&&this.gR(a)===t.gR(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gS(a)
q=this.gR(a)
return W.jI(W.aT(W.aT(W.aT(W.aT(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gR:function(a){return a.height},
gaS:function(a){return a.left},
gaV:function(a){return a.top},
gS:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isF:1,
$asF:function(){}}
W.dz.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.q("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[P.u]},
$isc:1,
$asc:function(){return[P.u]},
$iso:1,
$aso:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
W.dA.prototype={
gj:function(a){return a.length}}
W.bY.prototype={
k:function(a){return a.localName},
$isa:1}
W.k.prototype={}
W.f.prototype={
cY:function(a,b,c,d){return a.addEventListener(b,H.bK(c,1),!1)},
$isp:1,
$isf:1}
W.X.prototype={$isp:1}
W.dY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.q("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.X]},
$isc:1,
$asc:function(){return[W.X]},
$iso:1,
$aso:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.dZ.prototype={
gj:function(a){return a.length}}
W.e3.prototype={
gj:function(a){return a.length}}
W.Y.prototype={$isp:1}
W.e6.prototype={
gj:function(a){return a.length}}
W.bl.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.q("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.w]},
$isc:1,
$asc:function(){return[W.w]},
$iso:1,
$aso:function(){return[W.w]},
$isb:1,
$asb:function(){return[W.w]}}
W.c0.prototype={}
W.e7.prototype={
E:function(a,b){return a.send(b)}}
W.bm.prototype={}
W.eb.prototype={$isa:1}
W.aH.prototype={$isp:1,$isaH:1}
W.eo.prototype={
k:function(a){return String(a)}}
W.et.prototype={
gj:function(a){return a.length}}
W.eu.prototype={
e8:function(a,b,c){return a.send(b,c)},
E:function(a,b){return a.send(b)}}
W.bo.prototype={}
W.Z.prototype={$isp:1}
W.ev.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.q("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.Z]},
$isc:1,
$asc:function(){return[W.Z]},
$iso:1,
$aso:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.L.prototype={$isp:1,$isL:1}
W.eF.prototype={$isa:1}
W.w.prototype={
k:function(a){var t=a.nodeValue
return t==null?this.cD(a):t},
$isp:1,
$isf:1}
W.cT.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.q("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.w]},
$isc:1,
$asc:function(){return[W.w]},
$iso:1,
$aso:function(){return[W.w]},
$isb:1,
$asb:function(){return[W.w]}}
W.eM.prototype={$isa:1}
W.eP.prototype={
gj:function(a){return a.length}}
W.a_.prototype={$isp:1,
gj:function(a){return a.length}}
W.eR.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.q("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]},
$iso:1,
$aso:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.eU.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.eV.prototype={
E:function(a,b){return a.send(b)}}
W.f3.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.cY.prototype={
E:function(a,b){return a.send(b)}}
W.f6.prototype={
gj:function(a){return a.length}}
W.f9.prototype={$isa:1}
W.a0.prototype={$isp:1,$isf:1}
W.fa.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.q("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]},
$iso:1,
$aso:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.a1.prototype={$isp:1}
W.fc.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.q("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a1]},
$isc:1,
$asc:function(){return[W.a1]},
$iso:1,
$aso:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.a2.prototype={$isp:1,
gj:function(a){return a.length}}
W.ff.prototype={
h:function(a,b){return this.bp(a,b)},
aP:function(a,b){var t,s
for(t=0;!0;++t){s=this.d9(a,t)
if(s==null)return
b.$2(s,this.bp(a,s))}},
gj:function(a){return a.length},
bp:function(a,b){return a.getItem(b)},
d9:function(a,b){return a.key(b)}}
W.S.prototype={$isp:1}
W.aa.prototype={}
W.a3.prototype={$isp:1,$isf:1}
W.T.prototype={$isp:1,$isf:1}
W.fp.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.q("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.T]},
$isc:1,
$asc:function(){return[W.T]},
$iso:1,
$aso:function(){return[W.T]},
$isb:1,
$asb:function(){return[W.T]}}
W.fq.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.q("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]},
$iso:1,
$aso:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.fs.prototype={
gj:function(a){return a.length}}
W.a4.prototype={$isp:1}
W.aM.prototype={$isp:1,$isaM:1}
W.fw.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.q("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]},
$iso:1,
$aso:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.fx.prototype={
gj:function(a){return a.length}}
W.b3.prototype={}
W.fz.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.au.prototype={}
W.fF.prototype={
k:function(a){return String(a)},
$isa:1}
W.fH.prototype={
gj:function(a){return a.length}}
W.fK.prototype={
gj:function(a){return a.length}}
W.fL.prototype={
E:function(a,b){return a.send(b)}}
W.aO.prototype={
gdu:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.q("deltaY is not supported"))},
$isp:1,
$isL:1,
$isaO:1}
W.bB.prototype={
gdj:function(a){var t,s
t=P.R
s=new P.an(0,$.A,null,[t])
this.d5(a)
this.dd(a,W.jM(new W.fM(new P.hz(s,[t]))))
return s},
dd:function(a,b){return a.requestAnimationFrame(H.bK(b,1))},
d5:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.fM.prototype={
$1:function(a){this.a.dr(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.fN.prototype={$isa:1}
W.aP.prototype={$isa:1}
W.fU.prototype={
k:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
v:function(a,b){var t,s,r
if(b==null)return!1
t=J.r(b)
if(!t.$isF)return!1
s=a.left
r=t.gaS(b)
if(s==null?r==null:s===r){s=a.top
r=t.gaV(b)
if(s==null?r==null:s===r){s=a.width
r=t.gS(b)
if(s==null?r==null:s===r){s=a.height
t=t.gR(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){var t,s,r,q
t=J.ae(a.left)
s=J.ae(a.top)
r=J.ae(a.width)
q=J.ae(a.height)
return W.jI(W.aT(W.aT(W.aT(W.aT(0,t),s),r),q))},
$isF:1,
$asF:function(){},
gR:function(a){return a.height},
gaS:function(a){return a.left},
gaV:function(a){return a.top},
gS:function(a){return a.width}}
W.d4.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.q("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[P.F]},
$isc:1,
$asc:function(){return[P.F]},
$iso:1,
$aso:function(){return[P.F]},
$isb:1,
$asb:function(){return[P.F]}}
W.fW.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.q("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.x]},
$isc:1,
$asc:function(){return[W.x]},
$iso:1,
$aso:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.fX.prototype={$isa:1}
W.fY.prototype={
gR:function(a){return a.height},
gS:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hd.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.q("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.Y]},
$isc:1,
$asc:function(){return[W.Y]},
$iso:1,
$aso:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.he.prototype={$isa:1}
W.d7.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.q("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.w]},
$isc:1,
$asc:function(){return[W.w]},
$iso:1,
$aso:function(){return[W.w]},
$isb:1,
$asb:function(){return[W.w]}}
W.hw.prototype={$isa:1}
W.hx.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.q("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]},
$iso:1,
$aso:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.hy.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.q("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.S]},
$isc:1,
$asc:function(){return[W.S]},
$iso:1,
$aso:function(){return[W.S]},
$isb:1,
$asb:function(){return[W.S]}}
W.hB.prototype={$isa:1}
W.hC.prototype={$isa:1}
W.h0.prototype={
dS:function(a,b,c,d){return W.am(this.a,this.b,a,!1,H.b8(this,0))}}
W.iz.prototype={}
W.h1.prototype={
dg:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.k8(r,this.c,t,!1)}},
cW:function(a,b,c,d,e){this.dg()}}
W.h2.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.y.prototype={
gA:function(a){return new W.e0(a,this.gj(a),-1,null,[H.ax(a,"y",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.e0.prototype={
q:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbr(J.b9(this.a,t))
this.c=t
return!0}this.sbr(null)
this.c=s
return!1},
gt:function(){return this.d},
sbr:function(a){this.d=a}}
W.bf.prototype={$isc:1,
$asc:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.bg.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.bh.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.bi.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.bj.prototype={$isc:1,
$asc:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.bk.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.c1.prototype={}
W.cl.prototype={$isc:1,
$asc:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.c7.prototype={$isc:1,
$asc:function(){return[W.w]},
$isb:1,
$asb:function(){return[W.w]}}
W.c4.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.cf.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.cg.prototype={$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
W.ch.prototype={$isc:1,
$asc:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.ci.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.cj.prototype={$isc:1,
$asc:function(){return[P.F]},
$isb:1,
$asb:function(){return[P.F]}}
W.c2.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.c5.prototype={$isc:1,
$asc:function(){return[W.w]},
$isb:1,
$asb:function(){return[W.w]}}
W.c8.prototype={$isc:1,
$asc:function(){return[W.T]},
$isb:1,
$asb:function(){return[W.T]}}
W.c9.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.ca.prototype={$isc:1,
$asc:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.cb.prototype={$isc:1,
$asc:function(){return[W.S]},
$isb:1,
$asb:function(){return[W.S]}}
W.cd.prototype={$isc:1,
$asc:function(){return[W.w]},
$isb:1,
$asb:function(){return[W.w]}}
W.cm.prototype={$isc:1,
$asc:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.cn.prototype={$isc:1,
$asc:function(){return[W.w]},
$isb:1,
$asb:function(){return[W.w]}}
W.co.prototype={$isc:1,
$asc:function(){return[W.T]},
$isb:1,
$asb:function(){return[W.T]}}
W.cy.prototype={$isc:1,
$asc:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.cz.prototype={$isc:1,
$asc:function(){return[W.w]},
$isb:1,
$asb:function(){return[W.w]}}
W.cx.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.cC.prototype={$isc:1,
$asc:function(){return[P.F]},
$isb:1,
$asb:function(){return[P.F]}}
W.cD.prototype={$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
W.cE.prototype={$isc:1,
$asc:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.cF.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.cp.prototype={$isc:1,
$asc:function(){return[W.S]},
$isb:1,
$asb:function(){return[W.S]}}
W.cq.prototype={$isc:1,
$asc:function(){return[W.w]},
$isb:1,
$asb:function(){return[W.w]}}
W.cs.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.cA.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cB.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
P.hJ.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.u,,]}}}
P.hh.prototype={
dW:function(){return Math.random()}}
P.ho.prototype={}
P.F.prototype={$asF:null}
P.dh.prototype={$isa:1}
P.aB.prototype={$isa:1}
P.dF.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dG.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dH.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dI.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dJ.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dK.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dL.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dM.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dN.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dO.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dP.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dQ.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dR.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dS.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
P.dT.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dU.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
P.dV.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dW.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e_.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e2.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.a7.prototype={}
P.ar.prototype={$isa:1}
P.e8.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ah.prototype={$isp:1}
P.ej.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){throw H.e(new P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ah]},
$isb:1,
$asb:function(){return[P.ah]}}
P.er.prototype={$isa:1}
P.es.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ai.prototype={$isp:1}
P.eG.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){throw H.e(new P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ai]},
$isb:1,
$asb:function(){return[P.ai]}}
P.eN.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eS.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eT.prototype={
gj:function(a){return a.length}}
P.eY.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eZ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f5.prototype={$isa:1}
P.fk.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){throw H.e(new P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
P.G.prototype={$isa:1}
P.fl.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fm.prototype={$isa:1}
P.d0.prototype={}
P.fo.prototype={$isa:1}
P.by.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.aj.prototype={$isp:1}
P.fy.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){throw H.e(new P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.aj]},
$isb:1,
$asb:function(){return[P.aj]}}
P.fG.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fI.prototype={$isa:1}
P.fJ.prototype={$isa:1}
P.bD.prototype={$isa:1}
P.ht.prototype={$isa:1}
P.hu.prototype={$isa:1}
P.hv.prototype={$isa:1}
P.ce.prototype={$isc:1,
$asc:function(){return[P.ah]},
$isb:1,
$asb:function(){return[P.ah]}}
P.c6.prototype={$isc:1,
$asc:function(){return[P.ai]},
$isb:1,
$asb:function(){return[P.ai]}}
P.c3.prototype={$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
P.cc.prototype={$isc:1,
$asc:function(){return[P.aj]},
$isb:1,
$asb:function(){return[P.aj]}}
P.cr.prototype={$isc:1,
$asc:function(){return[P.aj]},
$isb:1,
$asb:function(){return[P.aj]}}
P.ct.prototype={$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
P.cu.prototype={$isc:1,
$asc:function(){return[P.ai]},
$isb:1,
$asb:function(){return[P.ai]}}
P.cv.prototype={$isc:1,
$asc:function(){return[P.ah]},
$isb:1,
$asb:function(){return[P.ah]}}
P.dl.prototype={
gj:function(a){return a.length}}
P.f1.prototype={
bz:function(a,b){return a.activeTexture(b)},
bB:function(a,b,c){return a.attachShader(b,c)},
bC:function(a,b,c){return a.bindBuffer(b,c)},
bD:function(a,b,c){return a.bindTexture(b,c)},
bE:function(a,b){return a.blendEquation(b)},
bF:function(a,b,c){return a.blendFunc(b,c)},
bG:function(a,b,c,d){return a.bufferData(b,c,d)},
bH:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bI:function(a,b){return a.compileShader(b)},
bJ:function(a){return a.createBuffer()},
bK:function(a){return a.createProgram()},
bM:function(a,b){return a.createShader(b)},
bN:function(a){return a.createTexture()},
bO:function(a,b){return a.depthMask(b)},
bP:function(a,b){return a.disable(b)},
bQ:function(a,b,c,d){return a.drawArrays(b,c,d)},
bR:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bS:function(a,b){return a.enable(b)},
bT:function(a,b){return a.enableVertexAttribArray(b)},
ap:function(a){return P.hK(a.getContextAttributes())},
aX:function(a){return a.getError()},
aY:function(a,b){return a.getProgramInfoLog(b)},
aZ:function(a,b,c){return a.getProgramParameter(b,c)},
b_:function(a,b){return a.getShaderInfoLog(b)},
b0:function(a,b,c){return a.getShaderParameter(b,c)},
b1:function(a,b,c){return a.getUniformLocation(b,c)},
bV:function(a,b){return a.linkProgram(b)},
bY:function(a,b,c){return a.pixelStorei(b,c)},
b3:function(a,b,c){return a.shaderSource(b,c)},
b4:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aU:function(a,b,c,d,e,f,g,h,i,j){this.aJ(a,b,c,d,e,f,g)
return},
c1:function(a,b,c,d,e,f,g){return this.aU(a,b,c,d,e,f,g,null,null,null)},
aJ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c2:function(a,b,c,d){return a.texParameterf(b,c,d)},
c3:function(a,b,c,d){return a.texParameteri(b,c,d)},
c6:function(a,b,c){return a.uniform1f(b,c)},
c7:function(a,b,c){return a.uniform1fv(b,c)},
c8:function(a,b,c){return a.uniform1i(b,c)},
c9:function(a,b,c){return a.uniform1iv(b,c)},
ca:function(a,b,c){return a.uniform2fv(b,c)},
cb:function(a,b,c){return a.uniform3fv(b,c)},
cc:function(a,b,c){return a.uniform4fv(b,c)},
cd:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ce:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cg:function(a,b){return a.useProgram(b)},
cj:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)}}
P.f2.prototype={
dk:function(a,b){return a.beginTransformFeedback(b)},
dn:function(a,b){return a.bindVertexArray(b)},
dt:function(a){return a.createVertexArray()},
dC:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dD:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dE:function(a){return a.endTransformFeedback()},
e5:function(a,b,c,d){this.df(a,b,c,d)
return},
df:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
e6:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bz:function(a,b){return a.activeTexture(b)},
bB:function(a,b,c){return a.attachShader(b,c)},
bC:function(a,b,c){return a.bindBuffer(b,c)},
bD:function(a,b,c){return a.bindTexture(b,c)},
bE:function(a,b){return a.blendEquation(b)},
bF:function(a,b,c){return a.blendFunc(b,c)},
bG:function(a,b,c,d){return a.bufferData(b,c,d)},
bH:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bI:function(a,b){return a.compileShader(b)},
bJ:function(a){return a.createBuffer()},
bK:function(a){return a.createProgram()},
bM:function(a,b){return a.createShader(b)},
bN:function(a){return a.createTexture()},
bO:function(a,b){return a.depthMask(b)},
bP:function(a,b){return a.disable(b)},
bQ:function(a,b,c,d){return a.drawArrays(b,c,d)},
bR:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bS:function(a,b){return a.enable(b)},
bT:function(a,b){return a.enableVertexAttribArray(b)},
ap:function(a){return P.hK(a.getContextAttributes())},
aX:function(a){return a.getError()},
aY:function(a,b){return a.getProgramInfoLog(b)},
aZ:function(a,b,c){return a.getProgramParameter(b,c)},
b_:function(a,b){return a.getShaderInfoLog(b)},
b0:function(a,b,c){return a.getShaderParameter(b,c)},
b1:function(a,b,c){return a.getUniformLocation(b,c)},
bV:function(a,b){return a.linkProgram(b)},
bY:function(a,b,c){return a.pixelStorei(b,c)},
b3:function(a,b,c){return a.shaderSource(b,c)},
b4:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aU:function(a,b,c,d,e,f,g,h,i,j){this.aJ(a,b,c,d,e,f,g)
return},
c1:function(a,b,c,d,e,f,g){return this.aU(a,b,c,d,e,f,g,null,null,null)},
aJ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c2:function(a,b,c,d){return a.texParameterf(b,c,d)},
c3:function(a,b,c,d){return a.texParameteri(b,c,d)},
c6:function(a,b,c){return a.uniform1f(b,c)},
c7:function(a,b,c){return a.uniform1fv(b,c)},
c8:function(a,b,c){return a.uniform1i(b,c)},
c9:function(a,b,c){return a.uniform1iv(b,c)},
ca:function(a,b,c){return a.uniform2fv(b,c)},
cb:function(a,b,c){return a.uniform3fv(b,c)},
cc:function(a,b,c){return a.uniform4fv(b,c)},
cd:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ce:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cg:function(a,b){return a.useProgram(b)},
cj:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
$isa:1}
P.hA.prototype={$isa:1}
P.fd.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return P.hK(this.d8(a,b))},
i:function(a,b,c){throw H.e(new P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
d8:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.ck.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.cw.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
B.i7.prototype={
$1:function(a){$.$get$hL().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aH]}}}
B.i8.prototype={
$1:function(a){$.$get$hL().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aH]}}}
B.i9.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.lG=t
$.lH=C.b.Z(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.iJ=s-C.b.H(window.innerWidth,2)
$.k_=-(t-C.b.H(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.L]}}}
B.ia.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bM=t-C.b.H(window.innerWidth,2)
$.bN=-(s-C.b.H(window.innerHeight,2))
if(a.button===2)$.$get$bL().i(0,"right",!0)
else $.$get$bL().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.L]}}}
B.ib.prototype={
$1:function(a){if(a.button===2)$.$get$bL().i(0,"right",null)
else $.$get$bL().i(0,"left",null)},
$S:function(){return{func:1,args:[W.L]}}}
B.eH.prototype={
cP:function(a,b,c,d){var t
d.toString
W.am(d,W.lP().$1(d),new B.eI(this),!1,W.aO)
W.am(d,"mousemove",new B.eJ(this),!1,W.L)
t=W.aM
W.am(d,"touchstart",new B.eK(),!1,t)
W.am(d,"touchmove",new B.eL(this),!1,t)
B.m2(null)}}
B.eI.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.T.gdu(a)*r.k3
if(C.c.Z(r.fy,t)>0)r.fy=H.U(C.c.Z(r.fy,t))}catch(q){s=H.ap(q)
P.ao(s)}},
$S:function(){return{func:1,args:[W.aO]}}}
B.eJ.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.U(t.go+C.b.Z($.iJ,$.bM)*0.01)
s=t.id
r=$.bN
q=$.k_
t.id=H.U(s+(r-q)*0.01)
$.bM=$.iJ
$.bN=q}},
$S:function(){return{func:1,args:[W.L]}}}
B.eK.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.V(t.clientX)
C.c.V(t.clientY)
$.bM=s
C.c.V(t.clientX)
$.bN=C.c.V(t.clientY)},
$S:function(){return{func:1,args:[W.aM]}}}
B.eL.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.V(t.clientX)
t=C.c.V(t.clientY)
r=this.a
r.go=H.U(r.go+C.b.Z(s,$.bM)*0.01)
r.id=H.U(r.id+($.bN-t)*0.01)
$.bM=s
$.bN=t},
$S:function(){return{func:1,args:[W.aM]}}}
G.ew.prototype={}
G.fD.prototype={
F:function(a,b){var t=this.d
if(H.aw(!t.C(0,a)))H.aU("uniform "+a+" already set")
t.i(0,a,b)},
bb:function(){return this.d},
k:function(a){var t,s,r,q
t=H.I(["{"+new H.at(H.hQ(this),null).k(0)+"}["+this.a+"]"],[P.u])
for(s=this.d,r=s.gL(s),r=r.gA(r);r.q();){q=r.gt()
C.a.l(t,H.i(q)+": "+H.i(s.h(0,q)))}return C.a.a8(t,"\n")}}
G.dp.prototype={}
G.dr.prototype={
bU:function(a,b,c){J.km(this.a,b)
if(c>0)J.kH(this.a,b,c)}}
G.dX.prototype={}
G.e5.prototype={
cH:function(a){var t,s,r
H.d(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.l(s,new G.dX(t,t+1,t+2,t+3))},
ae:function(a){var t,s,r,q,p
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.N)(a),++r){q=a[r]
p=new T.t(new Float32Array(3))
p.B(q)
C.a.l(s,p)}},
cG:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.N)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.l(t,new T.a5(o))}},
cK:function(){var t,s,r,q,p,o,n,m,l,k
t=this.b
H.d(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.I(r,[P.n])
for(r=t.length,p=0,o=0;n=t.length,o<n;n===r||(0,H.N)(t),++o){m=t[o]
q[p]=m.a
q[p+1]=m.b
q[p+2]=m.c
p+=3}for(t=s.length,o=0;r=s.length,o<r;r===t||(0,H.N)(s),++o){l=s[o]
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
cL:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.d
s=new Array(t.length)
s.fixed$length=Array
r=H.I(s,[T.t])
q=new T.t(new Float32Array(H.B(3)))
p=new T.t(new Float32Array(H.B(3)))
for(s=this.b,o=s.length,n=0;n<s.length;s.length===o||(0,H.N)(s),++n){m=s[n]
l=m.a
k=m.b
j=m.c
G.ji(t[l],t[k],t[j],q,p)
i=new T.t(new Float32Array(3))
i.B(p)
r[l]=i
l=new T.t(new Float32Array(3))
l.B(p)
r[k]=l
l=new T.t(new Float32Array(3))
l.B(p)
r[j]=l}for(s=this.c,o=s.length,n=0;n<s.length;s.length===o||(0,H.N)(s),++n){h=s[n]
l=h.a
k=h.b
j=h.c
G.ji(t[l],t[k],t[j],q,p)
i=new T.t(new Float32Array(3))
i.B(p)
r[l]=i
l=new T.t(new Float32Array(3))
l.B(p)
r[k]=l
l=new T.t(new Float32Array(3))
l.B(p)
r[j]=l
l=new T.t(new Float32Array(3))
l.B(p)
r[h.d]=l}this.e.i(0,"aNormal",r)},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gL(s),r=r.gA(r);r.q();){q=r.gt()
p=$.$get$P().h(0,q).a
C.a.l(t,H.i(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.a8(t," ")}}
G.d1.prototype={}
G.bA.prototype={}
G.cM.prototype={}
G.cN.prototype={
b8:function(a,b,c){var t,s
if(C.e.ay(a,0)===105){if(H.aw(C.b.av(b.length,c)===this.z))H.aU("ChangeAttribute "+this.z)}else H.d(C.b.av(b.length,c)===(this.ch.length/3|0))
this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dc(t.a,34962,s)
J.iP(t.a,34962,b,35048)},
cM:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a_:function(a,b,c){var t,s,r,q,p,o
t=J.iM(a,0)===105
if(t&&this.z===0)this.z=C.b.av(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.ig(r.a))
this.b8(a,b,c)
q=$.$get$P().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.aw(p.C(0,a)))H.aU("unexpected attribute "+a)
o=p.h(0,a)
J.dd(r.a,this.e)
r.bU(0,o,t?1:0)
s=s.h(0,a)
p=q.ba()
J.dc(r.a,34962,s)
J.iZ(r.a,o,p,5126,!1,0,0)},
ae:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.ig(s.a))
this.ch=a
this.b8("aPosition",a,3)
r=$.$get$P().h(0,"aPosition")
if(r==null)throw H.e("Unknown canonical aPosition")
q=this.x
H.d(q.C(0,"aPosition"))
p=q.h(0,"aPosition")
J.dd(s.a,this.e)
s.bU(0,p,0)
t=t.h(0,"aPosition")
q=r.ba()
J.dc(s.a,34962,t)
J.iZ(s.a,p,q,5126,!1,0,0)},
k:function(a){var t,s,r
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,t=t.gL(t),t=t.gA(t);t.q();){r=t.gt()
C.a.l(s,H.i(r)+":"+this.cy.h(0,r).length)}return"MESH["+this.a+"] "+C.a.a8(s,"  ")},
saD:function(a){this.cx=a}}
G.eO.prototype={
cI:function(a,b){var t=C.b.cl(a,b)
if(this.z===t)return
this.z=t
this.bc()},
bc:function(){var t,s,r,q,p,o,n
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
t.X(0,0,1/(p*s))
t.X(1,1,1/p)
t.X(2,2,(q+r)/o)
t.X(3,2,-1)
t.X(2,3,2*r*q/o)},
bb:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.t(new Float32Array(H.B(3)))
o.as(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.B(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.r(n)
r=!!s.$isav
k=r?s.gao(n):1
if(!!s.$ist){j=s.gm(n)
m=s.gn(n)
l=s.gI(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gI(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.D(t[0],n)
r=C.c.D(t[4],m)
q=C.c.D(t[8],l)
i=t[12]
h=C.c.D(t[1],n)
g=C.c.D(t[5],m)
f=C.c.D(t[9],l)
e=t[13]
d=C.c.D(t[2],n)
c=C.c.D(t[6],m)
b=C.c.D(t[10],l)
a=t[14]
a0=C.c.D(t[3],n)
a1=C.c.D(t[7],m)
a2=C.c.D(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.B(this.db)
a3.dV(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.f0.prototype={
cU:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gL(s),s=s.gA(s);s.q();){q=s.gt()
if(!t.C(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bE(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.q();){q=s.d
if(!t.U(0,q))C.a.l(r,q)}return r},
cV:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gL(b),s=s.gA(s),r=this.d,q=this.y,p=this.z,o=0;s.q();){n=s.gt()
switch(J.iM(n,0)){case 117:if(q.C(0,n)){m=b.h(0,n)
if(p.C(0,n))H.i5("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$P().h(0,n)
if(l==null)H.D("unknown "+n)
H.d(q.C(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.ik(r.a,k,m)
else if(!!J.r(m).$isjc)J.kF(r.a,k,m)
break
case"float":if(l.c===0)J.kD(r.a,k,m)
else if(!!J.r(m).$ise1)J.kE(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.az(m,"$isa9").a
J.iY(r.a,k,!1,j)}else if(!!J.r(m).$ise1)J.iY(r.a,k,!1,m)
else if(H.aw(!1))H.aU("bad unform: "+n)
break
case"mat3":if(l.c===0){j=C.r.ge9(H.az(m,"$isma"))
J.iX(r.a,k,!1,j)}else if(!!J.r(m).$ise1)J.iX(r.a,k,!1,m)
else if(H.aw(!1))H.aU("bad unform: "+n)
break
case"vec4":if(l.c===0){j=H.az(m,"$isav").a
J.iW(r.a,k,j)}else J.iW(r.a,k,m)
break
case"vec3":if(l.c===0){j=H.az(m,"$ist").a
J.iV(r.a,k,j)}else J.iV(r.a,k,m)
break
case"vec2":if(l.c===0){j=H.az(m,"$isa5").a
J.iU(r.a,k,j)}else J.iU(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.W(33984,this.ch)
J.iN(r.a,j)
j=H.az(m,"$isbz").b
J.bO(r.a,3553,j)
j=this.ch
J.ik(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.W(33984,this.ch)
J.iN(r.a,j)
j=H.az(m,"$isbz").b
J.bO(r.a,34067,j)
j=this.ch
J.ik(r.a,k,j)
this.ch=this.ch+1
break
default:H.i5("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":if(J.C(m,!0))J.de(r.a,2929)
else J.ih(r.a,2929)
break
case"cStencilFunc":H.az(m,"$isd1")
j=m.a
if(j===1281)J.ih(r.a,2960)
else{J.de(r.a,2960)
i=m.b
h=m.c
J.kz(r.a,j,i,h)}break
case"cDepthWrite":J.kg(r.a,m)
break
case"cBlendEquation":H.az(m,"$isbA")
j=m.a
if(j===1281)J.ih(r.a,3042)
else{J.de(r.a,3042)
i=m.b
h=m.c
J.kb(r.a,i,h)
J.ka(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aD(1000*(s-new P.bd(t,!1).a)).k(0)},
cJ:function(a,b,c){var t,s,r,q,p,o,n,m,l
Date.now()
t=this.d
s=this.r
J.kG(t.a,s)
this.ch=0
this.z.N(0)
for(r=0;r<2;++r){q=b[r]
this.cV(q.a,q.bb())}s=this.Q
s.N(0)
for(p=a.cy,p=p.gL(p),p=p.gA(p);p.q();)s.l(0,p.gt())
o=this.cU()
if(o.length!==0)P.ao("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.i(o)))
J.dd(a.d.a,a.e)
n=this.e.f.length>0
s=a.f
p=a.cM()
m=a.Q
l=a.z
t.toString
if(n)J.k9(t.a,s)
if(m!==-1)if(l>1)J.kk(t.a,s,p,m,0,l)
else J.kj(t.a,s,p,m,0)
else if(l>1)J.ki(t.a,s,0,p,l)
else J.kh(t.a,s,0,p)
if(n)J.kn(t.a)},
b9:function(a,b){return this.cJ(a,b,null)},
cQ:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.e
r=s.b
q=this.f
p=q.b
o=s.f
n=J.ke(t.a)
m=G.jG(t.a,35633,r)
J.iO(t.a,n,m)
l=G.jG(t.a,35632,p)
J.iO(t.a,n,l)
if(o.length>0)J.kC(t.a,n,o,35980)
J.kv(t.a,n)
if(!J.ku(t.a,n,35714))H.D(J.kt(t.a,n))
this.r=n
this.scZ(0,P.l2(s.c,null))
for(s=s.d,r=s.length,p=this.y,k=0;k<s.length;s.length===r||(0,H.N)(s),++k){j=s[k]
o=this.r
p.i(0,j,J.iS(t.a,o,j))}for(s=q.d,r=s.length,k=0;k<s.length;s.length===r||(0,H.N)(s),++k){j=s[k]
q=this.r
p.i(0,j,J.iS(t.a,q,j))}},
scZ:function(a,b){this.x=b}}
G.h.prototype={
ba:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.b2.prototype={
b6:function(a){var t,s,r,q
H.d(this.b==null)
for(t=this.c,s=this.x,r=0;r<1;++r){q=a[r]
H.d($.$get$P().C(0,q))
H.d(!C.a.U(t,q))
C.a.l(t,q)
s.i(0,q,this.r);++this.r}C.a.at(t)},
aw:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.N)(a),++r){q=a[r]
if(H.aw($.$get$P().C(0,q)))H.aU("missing uniform "+q)
H.d(!C.a.U(s,q))
C.a.l(s,q)}C.a.at(s)},
b7:function(a){var t,s,r
H.d(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.d($.$get$P().C(0,r))
H.d(!C.a.U(t,r))
C.a.l(t,r)}C.a.at(t)},
cR:function(a,b){H.d(this.b==null)
this.b=this.bd(!0,a,b)},
ax:function(a){return this.cR(a,null)},
bd:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.N)(t),++o){n=t[o]
m=$.$get$P().h(0,n)
C.a.l(q,"layout (location="+H.i(p.h(0,n))+") in "+m.a+" "+H.i(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.N)(t),++o){k=t[o]
m=$.$get$P().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.i(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.N)(t),++o){k=t[o]
m=$.$get$P().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.i(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.N)(t),++o){k=t[o]
m=$.$get$P().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.i(k)+j+";")}C.a.l(q,"")
if(a)C.a.l(q,"void main(void) {")
C.a.dh(q,b)
if(a)C.a.l(q,"}")
return C.a.a8(q,"\n")}}
G.fb.prototype={}
G.fr.prototype={
cN:function(a,b){var t=this.e
if(t!==1)J.kB(a.a,b,34046,t)
J.iT(a.a,b,10240,this.r)
J.iT(a.a,b,10241,this.f)}}
G.bz.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.e9.prototype={
cS:function(a){var t,s
t=this.d
s=this.c
J.bO(t.a,s,this.b)
J.kA(t.a,s,0,6408,6408,5121,a)}}
A.hS.prototype={
$2:function(a,b){var t=536870911&a+J.ae(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.n,P.p]}}}
T.a9.prototype={
X:function(a,b,c){H.d(a<4)
H.d(b<4)
this.a[b*4+a]=c},
B:function(a){var t,s
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
k:function(a){return"[0] "+this.ad(0).k(0)+"\n[1] "+this.ad(1).k(0)+"\n[2] "+this.ad(2).k(0)+"\n[3] "+this.ad(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.a9){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.hR(this.a)},
ad:function(a){var t,s
t=new Float32Array(H.B(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.av(t)},
Y:function(){var t=this.a
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
dV:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.a5.prototype={
k:function(a){var t=this.a
return"["+H.i(t[0])+","+H.i(t[1])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.a5){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.hR(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.t.prototype={
as:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
B:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.i(t[0])+","+H.i(t[1])+","+H.i(t[2])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.t){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.hR(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){return Math.sqrt(this.gan())},
gan:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
a9:function(a){var t,s,r
t=Math.sqrt(this.gan())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
aO:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
ak:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.t(new Float32Array(H.B(3)))
t.as(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
au:function(a){var t,s
t=a.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
co:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gI:function(a){return this.a[2]}}
T.av.prototype={
k:function(a){var t=this.a
return H.i(t[0])+","+H.i(t[1])+","+H.i(t[2])+","+H.i(t[3])},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.av){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.hR(this.a)},
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
gI:function(a){return this.a[2]},
gao:function(a){return this.a[3]}}
M.i2.prototype={
$1:function(b2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
this.a.a=b2+0
t=this.b
t.go=H.U(t.go+0.003)
s=t.k4
if(s.h(0,37)!=null)t.go=H.U(t.go+0.03)
else if(s.h(0,39)!=null)t.go=H.U(t.go-0.03)
if(s.h(0,38)!=null)t.id=H.U(t.id+0.03)
else if(s.h(0,40)!=null)t.id=H.U(t.id-0.03)
if(s.h(0,33)!=null)t.fy=H.U(t.fy*0.99)
else if(s.h(0,34)!=null)t.fy=H.U(t.fy*1.01)
if(s.h(0,32)!=null){t.go=0
t.id=0}s=H.U(C.c.dq(t.id,-1.4707963267948965,1.4707963267948965))
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
q=t.k2
s=q.a
n[12]=n[12]+s[0]
n[13]=n[13]+s[1]
n[14]=n[14]+s[2]
s=n[12]
r=n[13]
o=n[14]
m=new T.t(new Float32Array(H.B(3)))
m.as(0,1,0)
l=t.e
k=l.a
k[0]=n[12]
k[1]=n[13]
k[2]=n[14]
k=new Float32Array(H.B(3))
j=new T.t(k)
j.B(l)
j.au(q)
j.a9(0)
i=m.ak(j)
i.a9(0)
h=j.ak(i)
h.a9(0)
q=i.aO(l)
g=h.aO(l)
l=j.aO(l)
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
o=Math.sqrt(o.gan())
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
d=this.c
this.d.b9(this.f,[d,this.e])
this.r.b9(this.y,[d,this.x])
C.U.gdj(window).c4(this)},
$S:function(){return{func:1,v:true,args:[P.R]}}}
J.a.prototype.cD=J.a.prototype.k
J.bn.prototype.cE=J.bn.prototype.k;(function installTearOffs(){installTearOff(H.aR.prototype,"gdR",0,0,0,null,["$0"],["am"],0)
installTearOff(H.ab.prototype,"gcp",0,0,0,null,["$1"],["G"],2)
installTearOff(H.aQ.prototype,"gdw",0,0,0,null,["$1"],["O"],2)
installTearOff(P,"lC",1,0,0,null,["$1"],["lm"],1)
installTearOff(P,"lD",1,0,0,null,["$1"],["ln"],1)
installTearOff(P,"lE",1,0,0,null,["$1"],["lo"],1)
installTearOff(P,"jQ",1,0,0,null,["$0"],["lA"],0)
installTearOff(P.an.prototype,"gd0",0,0,0,null,["$2","$1"],["af","d1"],3)
installTearOff(P,"lJ",1,0,0,null,["$2"],["kN"],4)
installTearOff(W,"lP",1,0,0,null,["$1"],["kQ"],5)
installTearOff(M,"k4",1,0,0,null,["$0"],["lX"],0)})();(function inheritance(){inherit(P.p,null)
var t=P.p
inherit(H.ir,t)
inherit(J.a,t)
inherit(J.dk,t)
inherit(P.ag,t)
inherit(H.cJ,t)
inherit(P.cG,t)
inherit(H.c_,t)
inherit(H.aX,t)
inherit(H.hm,t)
inherit(H.aR,t)
inherit(H.fZ,t)
inherit(H.aS,t)
inherit(H.hl,t)
inherit(H.fT,t)
inherit(H.b1,t)
inherit(H.ft,t)
inherit(H.af,t)
inherit(H.ab,t)
inherit(H.aQ,t)
inherit(H.f_,t)
inherit(H.fA,t)
inherit(P.aY,t)
inherit(H.d8,t)
inherit(H.at,t)
inherit(H.a8,t)
inherit(H.ek,t)
inherit(H.em,t)
inherit(P.fV,t)
inherit(P.d5,t)
inherit(P.an,t)
inherit(P.d3,t)
inherit(P.fg,t)
inherit(P.fh,t)
inherit(P.aW,t)
inherit(P.hD,t)
inherit(P.f8,t)
inherit(P.hj,t)
inherit(P.bE,t)
inherit(P.v,t)
inherit(P.hk,t)
inherit(P.aV,t)
inherit(P.E,t)
inherit(P.bd,t)
inherit(P.R,t)
inherit(P.aD,t)
inherit(P.d_,t)
inherit(P.h3,t)
inherit(P.dE,t)
inherit(P.b,t)
inherit(P.as,t)
inherit(P.aK,t)
inherit(P.bv,t)
inherit(P.u,t)
inherit(P.bx,t)
inherit(W.dt,t)
inherit(W.y,t)
inherit(W.e0,t)
inherit(P.hh,t)
inherit(P.ho,t)
inherit(G.ew,t)
inherit(G.dr,t)
inherit(G.dX,t)
inherit(G.e5,t)
inherit(G.d1,t)
inherit(G.bA,t)
inherit(G.h,t)
inherit(G.b2,t)
inherit(G.fr,t)
inherit(G.bz,t)
inherit(T.a9,t)
inherit(T.a5,t)
inherit(T.t,t)
inherit(T.av,t)
t=J.a
inherit(J.ef,t)
inherit(J.cI,t)
inherit(J.bn,t)
inherit(J.aE,t)
inherit(J.aZ,t)
inherit(J.aF,t)
inherit(H.bp,t)
inherit(H.b0,t)
inherit(W.f,t)
inherit(W.W,t)
inherit(W.bQ,t)
inherit(W.bS,t)
inherit(W.bT,t)
inherit(W.x,t)
inherit(W.c1,t)
inherit(W.dv,t)
inherit(W.dw,t)
inherit(W.dx,t)
inherit(W.bW,t)
inherit(W.bX,t)
inherit(W.cg,t)
inherit(W.dA,t)
inherit(W.k,t)
inherit(W.ci,t)
inherit(W.Y,t)
inherit(W.e6,t)
inherit(W.cd,t)
inherit(W.eo,t)
inherit(W.et,t)
inherit(W.Z,t)
inherit(W.cl,t)
inherit(W.eF,t)
inherit(W.c7,t)
inherit(W.eM,t)
inherit(W.b3,t)
inherit(W.a_,t)
inherit(W.c9,t)
inherit(W.aa,t)
inherit(W.a1,t)
inherit(W.ca,t)
inherit(W.a2,t)
inherit(W.ff,t)
inherit(W.S,t)
inherit(W.c8,t)
inherit(W.fs,t)
inherit(W.a4,t)
inherit(W.c2,t)
inherit(W.fx,t)
inherit(W.fF,t)
inherit(W.fK,t)
inherit(W.fU,t)
inherit(W.cj,t)
inherit(W.ch,t)
inherit(W.cf,t)
inherit(W.c5,t)
inherit(W.c4,t)
inherit(W.cb,t)
inherit(W.hB,t)
inherit(W.hC,t)
inherit(P.ah,t)
inherit(P.ce,t)
inherit(P.ai,t)
inherit(P.c6,t)
inherit(P.eS,t)
inherit(P.eT,t)
inherit(P.eY,t)
inherit(P.c3,t)
inherit(P.aj,t)
inherit(P.cc,t)
inherit(P.fJ,t)
inherit(P.dl,t)
inherit(P.f1,t)
inherit(P.f2,t)
inherit(P.hA,t)
inherit(P.ck,t)
t=J.bn
inherit(J.eQ,t)
inherit(J.aN,t)
inherit(J.aG,t)
inherit(J.iq,J.aE)
t=J.aZ
inherit(J.cH,t)
inherit(J.eg,t)
t=P.ag
inherit(H.c,t)
inherit(H.cK,t)
t=H.c
inherit(H.b_,t)
inherit(H.el,t)
inherit(H.dD,H.cK)
inherit(H.ep,P.cG)
t=H.b_
inherit(H.cL,t)
inherit(P.en,t)
t=H.aX
inherit(H.ic,t)
inherit(H.id,t)
inherit(H.hg,t)
inherit(H.h_,t)
inherit(H.ec,t)
inherit(H.ed,t)
inherit(H.hn,t)
inherit(H.fu,t)
inherit(H.fv,t)
inherit(H.ie,t)
inherit(H.hX,t)
inherit(H.hY,t)
inherit(H.hZ,t)
inherit(H.i_,t)
inherit(H.i0,t)
inherit(H.fn,t)
inherit(H.eh,t)
inherit(H.hT,t)
inherit(H.hU,t)
inherit(H.hV,t)
inherit(P.fQ,t)
inherit(P.fP,t)
inherit(P.fR,t)
inherit(P.fS,t)
inherit(P.h4,t)
inherit(P.h8,t)
inherit(P.h5,t)
inherit(P.h6,t)
inherit(P.h7,t)
inherit(P.hb,t)
inherit(P.hc,t)
inherit(P.ha,t)
inherit(P.h9,t)
inherit(P.fi,t)
inherit(P.fj,t)
inherit(P.hG,t)
inherit(P.hr,t)
inherit(P.hq,t)
inherit(P.hs,t)
inherit(P.eq,t)
inherit(P.dB,t)
inherit(P.dC,t)
inherit(W.fM,t)
inherit(W.h2,t)
inherit(P.hJ,t)
inherit(B.i7,t)
inherit(B.i8,t)
inherit(B.i9,t)
inherit(B.ia,t)
inherit(B.ib,t)
inherit(B.eI,t)
inherit(B.eJ,t)
inherit(B.eK,t)
inherit(B.eL,t)
inherit(A.hS,t)
inherit(M.i2,t)
t=H.fT
inherit(H.b4,t)
inherit(H.bG,t)
t=P.aY
inherit(H.cU,t)
inherit(H.ei,t)
inherit(H.fE,t)
inherit(H.fC,t)
inherit(H.dq,t)
inherit(H.f4,t)
inherit(P.bP,t)
inherit(P.cV,t)
inherit(P.aq,t)
inherit(P.q,t)
inherit(P.d2,t)
inherit(P.bw,t)
inherit(P.a6,t)
inherit(P.du,t)
t=H.fn
inherit(H.fe,t)
inherit(H.bb,t)
inherit(H.fO,P.bP)
t=H.b0
inherit(H.ex,t)
inherit(H.cP,t)
t=H.cP
inherit(H.br,t)
inherit(H.bq,t)
inherit(H.bs,H.br)
inherit(H.cQ,H.bs)
inherit(H.bt,H.bq)
inherit(H.cR,H.bt)
t=H.cQ
inherit(H.cO,t)
inherit(H.ey,t)
t=H.cR
inherit(H.ez,t)
inherit(H.eA,t)
inherit(H.eB,t)
inherit(H.eC,t)
inherit(H.eD,t)
inherit(H.cS,t)
inherit(H.eE,t)
inherit(P.hz,P.fV)
inherit(P.hp,P.hD)
inherit(P.d6,H.a8)
inherit(P.f7,P.f8)
inherit(P.hf,P.f7)
inherit(P.hi,P.hf)
t=P.R
inherit(P.J,t)
inherit(P.n,t)
t=P.aq
inherit(P.cX,t)
inherit(P.ea,t)
t=W.f
inherit(W.w,t)
inherit(W.bf,t)
inherit(W.ds,t)
inherit(W.dZ,t)
inherit(W.bm,t)
inherit(W.bo,t)
inherit(W.eV,t)
inherit(W.cY,t)
inherit(W.f9,t)
inherit(W.a0,t)
inherit(W.bg,t)
inherit(W.a3,t)
inherit(W.T,t)
inherit(W.bh,t)
inherit(W.fH,t)
inherit(W.fL,t)
inherit(W.bB,t)
inherit(W.fN,t)
inherit(W.aP,t)
inherit(W.hw,t)
t=W.w
inherit(W.bY,t)
inherit(W.aC,t)
inherit(W.be,t)
inherit(W.bV,t)
inherit(W.fX,t)
t=W.bY
inherit(W.j,t)
inherit(P.G,t)
t=W.j
inherit(W.di,t)
inherit(W.dj,t)
inherit(W.dn,t)
inherit(W.bR,t)
inherit(W.e3,t)
inherit(W.eb,t)
inherit(W.f6,t)
inherit(W.he,t)
inherit(W.bj,W.bf)
inherit(W.dm,W.bj)
inherit(W.bc,W.c1)
inherit(W.dy,W.bW)
inherit(W.cD,W.cg)
inherit(W.dz,W.cD)
inherit(W.X,W.bQ)
inherit(W.cB,W.ci)
inherit(W.dY,W.cB)
inherit(W.cz,W.cd)
inherit(W.bl,W.cz)
inherit(W.c0,W.be)
inherit(W.e7,W.bm)
inherit(W.au,W.k)
t=W.au
inherit(W.aH,t)
inherit(W.L,t)
inherit(W.aM,t)
inherit(W.eu,W.bo)
inherit(W.cy,W.cl)
inherit(W.ev,W.cy)
inherit(W.cn,W.c7)
inherit(W.cT,W.cn)
t=W.b3
inherit(W.eP,t)
inherit(W.f3,t)
inherit(W.fz,t)
inherit(W.cx,W.c9)
inherit(W.eR,W.cx)
inherit(W.eU,W.aa)
inherit(W.bi,W.bg)
inherit(W.fa,W.bi)
inherit(W.cm,W.ca)
inherit(W.fc,W.cm)
inherit(W.co,W.c8)
inherit(W.fp,W.co)
inherit(W.bk,W.bh)
inherit(W.fq,W.bk)
inherit(W.cA,W.c2)
inherit(W.fw,W.cA)
inherit(W.aO,W.L)
inherit(W.cC,W.cj)
inherit(W.d4,W.cC)
inherit(W.cE,W.ch)
inherit(W.fW,W.cE)
inherit(W.fY,W.bX)
inherit(W.cF,W.cf)
inherit(W.hd,W.cF)
inherit(W.cq,W.c5)
inherit(W.d7,W.cq)
inherit(W.cs,W.c4)
inherit(W.hx,W.cs)
inherit(W.cp,W.cb)
inherit(W.hy,W.cp)
inherit(W.h0,P.fg)
inherit(W.iz,W.h0)
inherit(W.h1,P.fh)
inherit(P.F,P.ho)
t=P.G
inherit(P.ar,t)
inherit(P.aB,t)
inherit(P.dF,t)
inherit(P.dG,t)
inherit(P.dH,t)
inherit(P.dI,t)
inherit(P.dJ,t)
inherit(P.dK,t)
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
inherit(P.e_,t)
inherit(P.er,t)
inherit(P.es,t)
inherit(P.eN,t)
inherit(P.f5,t)
inherit(P.fm,t)
inherit(P.fI,t)
inherit(P.bD,t)
inherit(P.ht,t)
inherit(P.hu,t)
inherit(P.hv,t)
t=P.ar
inherit(P.dh,t)
inherit(P.e2,t)
inherit(P.a7,t)
inherit(P.e8,t)
inherit(P.fl,t)
inherit(P.d0,t)
inherit(P.fG,t)
inherit(P.cv,P.ce)
inherit(P.ej,P.cv)
inherit(P.cu,P.c6)
inherit(P.eG,P.cu)
inherit(P.eZ,P.a7)
inherit(P.ct,P.c3)
inherit(P.fk,P.ct)
t=P.d0
inherit(P.fo,t)
inherit(P.by,t)
inherit(P.cr,P.cc)
inherit(P.fy,P.cr)
inherit(P.cw,P.ck)
inherit(P.fd,P.cw)
t=G.ew
inherit(G.fb,t)
inherit(G.fD,t)
inherit(G.cN,t)
inherit(G.f0,t)
inherit(G.dp,G.fb)
inherit(B.eH,G.dp)
t=G.fD
inherit(G.cM,t)
inherit(G.eO,t)
inherit(G.e9,G.bz)
mixin(H.bq,P.v)
mixin(H.br,P.v)
mixin(H.bs,H.c_)
mixin(H.bt,H.c_)
mixin(W.bf,P.v)
mixin(W.bg,P.v)
mixin(W.bh,P.v)
mixin(W.bi,W.y)
mixin(W.bj,W.y)
mixin(W.bk,W.y)
mixin(W.c1,W.dt)
mixin(W.cl,P.v)
mixin(W.c7,P.v)
mixin(W.c4,P.v)
mixin(W.cf,P.v)
mixin(W.cg,P.v)
mixin(W.ch,P.v)
mixin(W.ci,P.v)
mixin(W.cj,P.v)
mixin(W.c2,P.v)
mixin(W.c5,P.v)
mixin(W.c8,P.v)
mixin(W.c9,P.v)
mixin(W.ca,P.v)
mixin(W.cb,P.v)
mixin(W.cd,P.v)
mixin(W.cm,W.y)
mixin(W.cn,W.y)
mixin(W.co,W.y)
mixin(W.cy,W.y)
mixin(W.cz,W.y)
mixin(W.cx,W.y)
mixin(W.cC,W.y)
mixin(W.cD,W.y)
mixin(W.cE,W.y)
mixin(W.cF,W.y)
mixin(W.cp,W.y)
mixin(W.cq,W.y)
mixin(W.cs,W.y)
mixin(W.cA,W.y)
mixin(W.cB,W.y)
mixin(P.ce,P.v)
mixin(P.c6,P.v)
mixin(P.c3,P.v)
mixin(P.cc,P.v)
mixin(P.cr,W.y)
mixin(P.ct,W.y)
mixin(P.cu,W.y)
mixin(P.cv,W.y)
mixin(P.ck,P.v)
mixin(P.cw,W.y)})();(function constants(){C.j=W.bR.prototype
C.f=W.bS.prototype
C.h=W.bT.prototype
C.p=W.c0.prototype
C.q=J.a.prototype
C.a=J.aE.prototype
C.b=J.cH.prototype
C.r=J.cI.prototype
C.c=J.aZ.prototype
C.e=J.aF.prototype
C.z=J.aG.prototype
C.A=H.cO.prototype
C.n=J.eQ.prototype
C.i=J.aN.prototype
C.T=W.aO.prototype
C.U=W.bB.prototype
C.o=new P.hh()
C.d=new P.hp()
C.k=new P.aD(0)
C.t=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.u=function(hooks) {
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
C.l=function(hooks) { return hooks; }

C.v=function(getTagFallback) {
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
C.w=function() {
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
C.x=function(hooks) {
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
C.y=function(hooks) {
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
C.m=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.B=H.H("m5")
C.C=H.H("m6")
C.D=H.H("e1")
C.E=H.H("m7")
C.F=H.H("m8")
C.G=H.H("jc")
C.H=H.H("m9")
C.I=H.H("jf")
C.J=H.H("aK")
C.K=H.H("u")
C.L=H.H("jB")
C.M=H.H("jC")
C.N=H.H("mb")
C.O=H.H("jD")
C.P=H.H("aV")
C.Q=H.H("J")
C.R=H.H("n")
C.S=H.H("R")})();(function staticFields(){$.jk="$cachedFunction"
$.jl="$cachedInvocation"
$.j6=null
$.j4=null
$.iA=!1
$.iF=null
$.jN=null
$.k3=null
$.hM=null
$.hW=null
$.iG=null
$.b5=null
$.bH=null
$.bI=null
$.iB=!1
$.A=C.d
$.ja=0
$.lG=0
$.lH=0
$.iJ=0
$.k_=0
$.bM=0
$.bN=0
$.m3=!1
$.iE=0})();(function lazyInitializers(){lazy($,"j9","$get$j9",function(){return H.jV("_$dart_dartClosure")})
lazy($,"is","$get$is",function(){return H.jV("_$dart_js")})
lazy($,"jd","$get$jd",function(){return H.kZ()})
lazy($,"je","$get$je",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.ja
$.ja=t+1
t="expando$key$"+t}return new P.dE(null,t,[P.n])})
lazy($,"jq","$get$jq",function(){return H.ak(H.fB({
toString:function(){return"$receiver$"}}))})
lazy($,"jr","$get$jr",function(){return H.ak(H.fB({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"js","$get$js",function(){return H.ak(H.fB(null))})
lazy($,"jt","$get$jt",function(){return H.ak(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jx","$get$jx",function(){return H.ak(H.fB(void 0))})
lazy($,"jy","$get$jy",function(){return H.ak(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jv","$get$jv",function(){return H.ak(H.jw(null))})
lazy($,"ju","$get$ju",function(){return H.ak(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"jA","$get$jA",function(){return H.ak(H.jw(void 0))})
lazy($,"jz","$get$jz",function(){return H.ak(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"iy","$get$iy",function(){return P.ll()})
lazy($,"bJ","$get$bJ",function(){return[]})
lazy($,"hL","$get$hL",function(){return P.jg(P.n,P.aV)})
lazy($,"bL","$get$bL",function(){return P.jg(P.u,P.aV)})
lazy($,"jo","$get$jo",function(){return new G.d1(1281,0,4294967295)})
lazy($,"j2","$get$j2",function(){return new G.bA(1281,1281,1281)})
lazy($,"j1","$get$j1",function(){return new G.bA(32774,770,769)})
lazy($,"P","$get$P",function(){return P.aI(["cBlendEquation",new G.h("","",0),"cDepthWrite",new G.h("","",0),"cDepthTest",new G.h("","",0),"cStencilFunc",new G.h("","",0),"tPosition",new G.h("vec3","",0),"tSpeed",new G.h("vec3","",0),"tForce",new G.h("vec3","",0),"aColors",new G.h("vec3","per vertex color",0),"aColorAlpha",new G.h("vec4","per vertex color",0),"aPosition",new G.h("vec3","vertex coordinates",0),"aTexUV",new G.h("vec2","texture uvs",0),"aNormal",new G.h("vec3","vertex normals",0),"aBinormal",new G.h("vec3","vertex binormals",0),"aCenter",new G.h("vec4","for wireframe",0),"aPointSize",new G.h("float","",0),"aBoneIndex",new G.h("vec4","",0),"aBoneWeight",new G.h("vec4","",0),"aTangent",new G.h("vec3","vertex tangents",0),"aBitangent",new G.h("vec3","vertex btangents",0),"iaRotation",new G.h("vec4","",0),"iaTranslation",new G.h("vec3","",0),"iaScale",new G.h("vec3","",0),"vColor",new G.h("vec3","per vertex color",0),"vTexUV",new G.h("vec2","",0),"vLightWeighting",new G.h("vec3","",0),"vNormal",new G.h("vec3","",0),"vPosition",new G.h("vec3","vertex coordinates",0),"vPositionFromLight",new G.h("vec4","delta from light",0),"vCenter",new G.h("vec4","for wireframe",0),"vDepth",new G.h("float","depth for shadowmaps",0),"uTransformationMatrix",new G.h("mat4","",0),"uModelMatrix",new G.h("mat4","",0),"uNormalMatrix",new G.h("mat3","",0),"uConvolutionMatrix",new G.h("mat3","",0),"uPerspectiveViewMatrix",new G.h("mat4","",0),"uLightPerspectiveViewMatrix",new G.h("mat4","",0),"uShadowMap",new G.h("sampler2DShadow","",0),"uTexture",new G.h("sampler2D","",0),"uTexture2",new G.h("sampler2D","",0),"uTexture3",new G.h("sampler2D","",0),"uTexture4",new G.h("sampler2D","",0),"uSpecularMap",new G.h("sampler2D","",0),"uNormalMap",new G.h("sampler2D","",0),"uBumpMap",new G.h("sampler2D","",0),"uDepthMap",new G.h("sampler2D","",0),"uCubeTexture",new G.h("samplerCube","",0),"uAnimationTable",new G.h("sampler2D","",0),"uTime",new G.h("float","time since program start in sec",0),"uCameraNear",new G.h("float","",0),"uCameraFar",new G.h("float","",0),"uFogNear",new G.h("float","",0),"uFogFar",new G.h("float","",0),"uPointSize",new G.h("float","",0),"uScale",new G.h("float","",0),"uAngle",new G.h("float","",0),"uCanvasSize",new G.h("vec2","",0),"uCenter2",new G.h("vec2","",0),"uCutOff",new G.h("float","",0),"uShininess",new G.h("float","",0),"uShadowBias",new G.h("float","",0),"uOpacity",new G.h("float","",0),"uColor",new G.h("vec3","",0),"uAmbientDiffuse",new G.h("vec3","",0),"uColorEmissive",new G.h("vec3","",0),"uColorSpecular",new G.h("vec3","",0),"uColorDiffuse",new G.h("vec3","",0),"uColorAlpha",new G.h("vec4","",0),"uColorAlpha2",new G.h("vec4","",0),"uEyePosition",new G.h("vec3","",0),"uMaterial",new G.h("mat4","",0),"uRange",new G.h("vec2","",0),"uDirection",new G.h("vec2","",0),"uBoneMatrices",new G.h("mat4","",128),"uLightDescs",new G.h("mat4","",4),"uLightCount",new G.h("float","",0),"uLightTypes",new G.h("float","",4),"uBumpScale",new G.h("float","for bump maps",0),"uNormalScale",new G.h("float","for normal maps",0)])})
lazy($,"jE","$get$jE",function(){return C.o})
lazy($,"k2","$get$k2",function(){var t=new G.b2("PointSpritesV",null,[],[],[],[],0,P.K())
t.b6(["aPosition"])
t.aw(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.ax(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"k1","$get$k1",function(){var t=new G.b2("PointSpritesF",null,[],[],[],[],0,P.K())
t.aw(["uTexture"])
t.ax(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return t})
lazy($,"i4","$get$i4",function(){return T.jF()})
lazy($,"iK","$get$iK",function(){return T.jF()})
lazy($,"jS","$get$jS",function(){var t=new G.b2("demoVertexShader",null,[],[],[],[],0,P.K())
t.b6(["aPosition"])
t.b7(["vColor"])
t.aw(["uPerspectiveViewMatrix","uModelMatrix"])
H.d(t.b==null)
t.b=t.bd(!1,["void main(void) {\n    gl_Position = uPerspectiveViewMatrix *\n                  uModelMatrix *\n                  vec4(aPosition, 1.0);\n    vColor.r = sin(aPosition.x)/2.0+0.5;\n    vColor.g = cos(aPosition.y)/2.0+0.5;\n    vColor.b = sin(aPosition.z)/2.0+0.5;\n}\n"],null)
return t})
lazy($,"jR","$get$jR",function(){var t=new G.b2("demoFragmentShader",null,[],[],[],[],0,P.K())
t.b7(["vColor"])
t.ax(["oFragColor.rgb = vColor;"])
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
mangledGlobalNames:{n:"int",J:"double",R:"num",u:"String",aV:"bool",aK:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,v:true,args:[P.p],opt:[P.bv]},{func:1,ret:P.n,args:[P.E,P.E]},{func:1,ret:P.u,args:[W.f]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,Range:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bp,ArrayBufferView:H.b0,DataView:H.ex,Float32Array:H.cO,Float64Array:H.ey,Int16Array:H.ez,Int32Array:H.eA,Int8Array:H.eB,Uint16Array:H.eC,Uint32Array:H.eD,Uint8ClampedArray:H.cS,CanvasPixelArray:H.cS,Uint8Array:H.eE,HTMLAudioElement:W.j,HTMLBRElement:W.j,HTMLBaseElement:W.j,HTMLButtonElement:W.j,HTMLContentElement:W.j,HTMLDListElement:W.j,HTMLDataListElement:W.j,HTMLDetailsElement:W.j,HTMLDialogElement:W.j,HTMLDivElement:W.j,HTMLEmbedElement:W.j,HTMLFieldSetElement:W.j,HTMLHRElement:W.j,HTMLHeadElement:W.j,HTMLHeadingElement:W.j,HTMLHtmlElement:W.j,HTMLIFrameElement:W.j,HTMLImageElement:W.j,HTMLKeygenElement:W.j,HTMLLIElement:W.j,HTMLLabelElement:W.j,HTMLLegendElement:W.j,HTMLLinkElement:W.j,HTMLMapElement:W.j,HTMLMediaElement:W.j,HTMLMenuElement:W.j,HTMLMenuItemElement:W.j,HTMLMetaElement:W.j,HTMLMeterElement:W.j,HTMLModElement:W.j,HTMLOListElement:W.j,HTMLObjectElement:W.j,HTMLOptGroupElement:W.j,HTMLOptionElement:W.j,HTMLOutputElement:W.j,HTMLParagraphElement:W.j,HTMLParamElement:W.j,HTMLPictureElement:W.j,HTMLPreElement:W.j,HTMLProgressElement:W.j,HTMLQuoteElement:W.j,HTMLScriptElement:W.j,HTMLShadowElement:W.j,HTMLSlotElement:W.j,HTMLSourceElement:W.j,HTMLSpanElement:W.j,HTMLStyleElement:W.j,HTMLTableCaptionElement:W.j,HTMLTableCellElement:W.j,HTMLTableDataCellElement:W.j,HTMLTableHeaderCellElement:W.j,HTMLTableColElement:W.j,HTMLTableElement:W.j,HTMLTableRowElement:W.j,HTMLTableSectionElement:W.j,HTMLTemplateElement:W.j,HTMLTextAreaElement:W.j,HTMLTitleElement:W.j,HTMLTrackElement:W.j,HTMLUListElement:W.j,HTMLUnknownElement:W.j,HTMLVideoElement:W.j,HTMLDirectoryElement:W.j,HTMLFontElement:W.j,HTMLFrameElement:W.j,HTMLMarqueeElement:W.j,HTMLElement:W.j,HTMLAnchorElement:W.di,HTMLAreaElement:W.dj,AudioTrack:W.W,AudioTrackList:W.dm,Blob:W.bQ,HTMLBodyElement:W.dn,HTMLCanvasElement:W.bR,CanvasGradient:W.bS,CanvasRenderingContext2D:W.bT,CDATASection:W.aC,CharacterData:W.aC,Comment:W.aC,ProcessingInstruction:W.aC,Text:W.aC,CompositorWorker:W.ds,CSSCharsetRule:W.x,CSSFontFaceRule:W.x,CSSGroupingRule:W.x,CSSImportRule:W.x,CSSKeyframeRule:W.x,MozCSSKeyframeRule:W.x,WebKitCSSKeyframeRule:W.x,CSSKeyframesRule:W.x,MozCSSKeyframesRule:W.x,WebKitCSSKeyframesRule:W.x,CSSMediaRule:W.x,CSSNamespaceRule:W.x,CSSPageRule:W.x,CSSRule:W.x,CSSStyleRule:W.x,CSSSupportsRule:W.x,CSSViewportRule:W.x,CSSStyleDeclaration:W.bc,MSStyleCSSProperties:W.bc,CSS2Properties:W.bc,DataTransferItemList:W.dv,DeviceAcceleration:W.dw,XMLDocument:W.be,Document:W.be,DocumentFragment:W.bV,ShadowRoot:W.bV,DOMException:W.dx,DOMPoint:W.dy,DOMPointReadOnly:W.bW,DOMRectReadOnly:W.bX,DOMStringList:W.dz,DOMTokenList:W.dA,Element:W.bY,AnimationEvent:W.k,AnimationPlayerEvent:W.k,ApplicationCacheErrorEvent:W.k,AutocompleteErrorEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceLightEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,GamepadEvent:W.k,GeofencingEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RelatedEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCIceCandidateEvent:W.k,RTCPeerConnectionIceEvent:W.k,SecurityPolicyViolationEvent:W.k,ServicePortConnectEvent:W.k,ServiceWorkerMessageEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BatteryManager:W.f,CanvasCaptureMediaStreamTrack:W.f,CrossOriginServiceWorkerClient:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MessagePort:W.f,MIDIAccess:W.f,NetworkInformation:W.f,Notification:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationReceiver:W.f,PresentationRequest:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,ServicePortCollection:W.f,ServiceWorkerContainer:W.f,ServiceWorkerRegistration:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioContext:W.f,webkitAudioContext:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioSourceNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OfflineAudioContext:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.X,FileList:W.dY,FileWriter:W.dZ,HTMLFormElement:W.e3,Gamepad:W.Y,History:W.e6,HTMLCollection:W.bl,HTMLFormControlsCollection:W.bl,HTMLOptionsCollection:W.bl,HTMLDocument:W.c0,XMLHttpRequest:W.e7,XMLHttpRequestUpload:W.bm,XMLHttpRequestEventTarget:W.bm,HTMLInputElement:W.eb,KeyboardEvent:W.aH,Location:W.eo,MediaList:W.et,MIDIOutput:W.eu,MIDIInput:W.bo,MIDIPort:W.bo,MimeType:W.Z,MimeTypeArray:W.ev,PointerEvent:W.L,MouseEvent:W.L,DragEvent:W.L,Navigator:W.eF,Attr:W.w,Node:W.w,NodeList:W.cT,RadioNodeList:W.cT,Path2D:W.eM,Perspective:W.eP,Plugin:W.a_,PluginArray:W.eR,PositionValue:W.eU,PresentationConnection:W.eV,Rotation:W.f3,RTCDataChannel:W.cY,DataChannel:W.cY,HTMLSelectElement:W.f6,SharedWorker:W.f9,SourceBuffer:W.a0,SourceBufferList:W.fa,SpeechGrammar:W.a1,SpeechGrammarList:W.fc,SpeechRecognitionResult:W.a2,Storage:W.ff,CSSStyleSheet:W.S,StyleSheet:W.S,CalcLength:W.aa,KeywordValue:W.aa,LengthValue:W.aa,NumberValue:W.aa,SimpleLength:W.aa,TransformValue:W.aa,StyleValue:W.aa,TextTrack:W.a3,TextTrackCue:W.T,VTTCue:W.T,TextTrackCueList:W.fp,TextTrackList:W.fq,TimeRanges:W.fs,Touch:W.a4,TouchEvent:W.aM,TouchList:W.fw,TrackDefaultList:W.fx,Matrix:W.b3,Skew:W.b3,TransformComponent:W.b3,Translation:W.fz,CompositionEvent:W.au,FocusEvent:W.au,TextEvent:W.au,SVGZoomEvent:W.au,UIEvent:W.au,URL:W.fF,VideoTrackList:W.fH,VTTRegionList:W.fK,WebSocket:W.fL,WheelEvent:W.aO,Window:W.bB,DOMWindow:W.bB,Worker:W.fN,CompositorWorkerGlobalScope:W.aP,DedicatedWorkerGlobalScope:W.aP,ServiceWorkerGlobalScope:W.aP,SharedWorkerGlobalScope:W.aP,WorkerGlobalScope:W.aP,ClientRect:W.fU,ClientRectList:W.d4,DOMRectList:W.d4,CSSRuleList:W.fW,DocumentType:W.fX,DOMRect:W.fY,GamepadList:W.hd,HTMLFrameSetElement:W.he,NamedNodeMap:W.d7,MozNamedAttrMap:W.d7,ServiceWorker:W.hw,SpeechRecognitionResultList:W.hx,StyleSheetList:W.hy,WorkerLocation:W.hB,WorkerNavigator:W.hC,SVGAElement:P.dh,SVGAnimateElement:P.aB,SVGAnimateMotionElement:P.aB,SVGAnimateTransformElement:P.aB,SVGAnimationElement:P.aB,SVGSetElement:P.aB,SVGFEBlendElement:P.dF,SVGFEColorMatrixElement:P.dG,SVGFEComponentTransferElement:P.dH,SVGFECompositeElement:P.dI,SVGFEConvolveMatrixElement:P.dJ,SVGFEDiffuseLightingElement:P.dK,SVGFEDisplacementMapElement:P.dL,SVGFEFloodElement:P.dM,SVGFEGaussianBlurElement:P.dN,SVGFEImageElement:P.dO,SVGFEMergeElement:P.dP,SVGFEMorphologyElement:P.dQ,SVGFEOffsetElement:P.dR,SVGFEPointLightElement:P.dS,SVGFESpecularLightingElement:P.dT,SVGFESpotLightElement:P.dU,SVGFETileElement:P.dV,SVGFETurbulenceElement:P.dW,SVGFilterElement:P.e_,SVGForeignObjectElement:P.e2,SVGCircleElement:P.a7,SVGEllipseElement:P.a7,SVGLineElement:P.a7,SVGPathElement:P.a7,SVGPolygonElement:P.a7,SVGPolylineElement:P.a7,SVGGeometryElement:P.a7,SVGClipPathElement:P.ar,SVGDefsElement:P.ar,SVGGElement:P.ar,SVGSwitchElement:P.ar,SVGGraphicsElement:P.ar,SVGImageElement:P.e8,SVGLength:P.ah,SVGLengthList:P.ej,SVGMarkerElement:P.er,SVGMaskElement:P.es,SVGNumber:P.ai,SVGNumberList:P.eG,SVGPatternElement:P.eN,SVGPoint:P.eS,SVGPointList:P.eT,SVGRect:P.eY,SVGRectElement:P.eZ,SVGScriptElement:P.f5,SVGStringList:P.fk,SVGDescElement:P.G,SVGDiscardElement:P.G,SVGFEDistantLightElement:P.G,SVGFEFuncAElement:P.G,SVGFEFuncBElement:P.G,SVGFEFuncGElement:P.G,SVGFEFuncRElement:P.G,SVGFEMergeNodeElement:P.G,SVGMetadataElement:P.G,SVGStopElement:P.G,SVGStyleElement:P.G,SVGTitleElement:P.G,SVGComponentTransferFunctionElement:P.G,SVGElement:P.G,SVGSVGElement:P.fl,SVGSymbolElement:P.fm,SVGTextContentElement:P.d0,SVGTextPathElement:P.fo,SVGTSpanElement:P.by,SVGTextElement:P.by,SVGTextPositioningElement:P.by,SVGTransform:P.aj,SVGTransformList:P.fy,SVGUseElement:P.fG,SVGViewElement:P.fI,SVGViewSpec:P.fJ,SVGLinearGradientElement:P.bD,SVGRadialGradientElement:P.bD,SVGGradientElement:P.bD,SVGCursorElement:P.ht,SVGFEDropShadowElement:P.hu,SVGMPathElement:P.hv,AudioBuffer:P.dl,WebGLRenderingContext:P.f1,WebGL2RenderingContext:P.f2,WebGL2RenderingContextBase:P.hA,SQLResultSetRowList:P.fd})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.br.$nativeSuperclassTag="ArrayBufferView"
H.bs.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.bq.$nativeSuperclassTag="ArrayBufferView"
H.bt.$nativeSuperclassTag="ArrayBufferView"
H.cR.$nativeSuperclassTag="ArrayBufferView"
W.bf.$nativeSuperclassTag="EventTarget"
W.bj.$nativeSuperclassTag="EventTarget"
W.bg.$nativeSuperclassTag="EventTarget"
W.bi.$nativeSuperclassTag="EventTarget"
W.bh.$nativeSuperclassTag="EventTarget"
W.bk.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.k5(M.k4(),b)},[])
else (function(b){H.k5(M.k4(),b)})([])})})()