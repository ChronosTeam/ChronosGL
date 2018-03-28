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
a[c]=function(){a[c]=function(){H.op(b)}
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
return d?function(e){if(t===null)t=H.jN(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jN(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jN(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={jl:function jl(a){this.a=a},
js:function(a,b,c,d){if(!!a.$isk)return new H.eg(a,b,[c,d])
return new H.cq(a,b,[c,d])},
eT:function(){return new P.b8("No element")},
n9:function(){return new P.b8("Too many elements")},
n8:function(){return new P.b8("Too few elements")},
nr:function(a,b){H.cE(a,0,J.bl(a)-1,b)},
cE:function(a,b,c,d){if(c-b<=32)H.nq(a,b,c,d)
else H.np(a,b,c,d)},
nq:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.U(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.a9(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
np:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.M(t+1,6)
r=a3+s
q=a4-s
p=C.b.M(a3+a4,2)
o=p-s
n=p+s
t=J.U(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.a9(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.a9(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.a9(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.a9(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.a9(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.a9(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.a9(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.a9(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.a9(a5.$2(j,i),0)){h=i
i=j
j=h}t.i(a2,r,m)
t.i(a2,p,k)
t.i(a2,q,i)
t.i(a2,o,t.h(a2,a3))
t.i(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.B(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.cE(a2,a3,g-2,a5)
H.cE(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.B(a5.$2(t.h(a2,g),l),0);)++g
for(;J.B(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.cE(a2,g,f,a5)}else H.cE(a2,g,f,a5)},
k:function k(){},
b1:function b1(){},
co:function co(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cq:function cq(a,b,c){this.a=a
this.b=b
this.$ti=c},
eg:function eg(a,b,c){this.a=a
this.b=b
this.$ti=c},
f7:function f7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bs:function bs(a,b,c){this.a=a
this.b=b
this.$ti=c},
cR:function cR(a,b,c){this.a=a
this.b=b
this.$ti=c},
hs:function hs(a,b,c){this.a=a
this.b=b
this.$ti=c},
b_:function b_(){},
dE:function(a,b){var t=a.aj(b)
if(!u.globalState.d.cy)u.globalState.f.aq()
return t},
iC:function(){++u.globalState.f.b},
iR:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
lU:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.r(s).$ish)throw H.c(P.dQ("Arguments to main must be a List: "+H.e(s)))
u.globalState=new H.i8(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$kJ()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hI(P.jr(null,H.aP),0)
q=P.z
s.seR(new H.ac(0,null,null,null,null,null,0,[q,H.bb]))
s.seU(new H.ac(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.i7()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.n3,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.nD)}if(u.globalState.x)return
o=H.ll()
u.globalState.e=o
u.globalState.z.i(0,o.a,o)
u.globalState.d=o
if(H.bh(a,{func:1,args:[P.P]}))o.aj(new H.j0(t,a))
else if(H.bh(a,{func:1,args:[P.P,P.P]}))o.aj(new H.j1(t,a))
else o.aj(a)
u.globalState.f.aq()},
nD:function(a){var t=P.aF(["command","print","msg",a])
return new H.a4(!0,P.bc(null,P.z)).N(t)},
ll:function(){var t,s
t=u.globalState.a++
s=P.z
t=new H.bb(t,new H.ac(0,null,null,null,null,null,0,[s,H.cC]),P.aG(null,null,null,s),u.createNewIsolate(),new H.cC(0,null,!1),new H.au(H.lS()),new H.au(H.lS()),!1,!1,[],P.aG(null,null,null,null),null,null,!1,!0,P.aG(null,null,null,null))
t.dG()
return t},
n5:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.n6()
return},
n6:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.u("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.u('Cannot extract URI from "'+t+'"'))},
n3:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.aO(!0,[]).a_(b.data)
s=J.U(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.o8(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aO(!0,[]).a_(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aO(!0,[]).a_(s.h(t,"replyTo"))
k=H.ll()
u.globalState.f.a.X(0,new H.aP(k,new H.eQ(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.aq()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.mv(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.aq()
break
case"close":u.globalState.ch.ap(0,$.$get$kK().h(0,a))
a.terminate()
u.globalState.f.aq()
break
case"log":H.n2(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.aF(["command","print","msg",t])
j=new H.a4(!0,P.bc(null,P.z)).N(j)
s.toString
self.postMessage(j)}else P.a8(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
n2:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aF(["command","log","msg",a])
r=new H.a4(!0,P.bc(null,P.z)).N(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.N(q)
t=H.al(q)
s=P.cb(t)
throw H.c(s)}},
n4:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kV=$.kV+("_"+s)
$.kW=$.kW+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.H(0,["spawned",new H.bd(s,r),q,t.r])
r=new H.eR(t,d,a,c,b)
if(e){t.bW(q,q)
u.globalState.f.a.X(0,new H.aP(t,r,"start isolate"))}else r.$0()},
ns:function(a,b){var t=new H.ha(!0,!1,null,0)
t.dw(a,b)
return t},
nF:function(a){return new H.aO(!0,[]).a_(new H.a4(!1,P.bc(null,P.z)).N(a))},
j0:function j0(a,b){this.a=a
this.b=b},
j1:function j1(a,b){this.a=a
this.b=b},
i8:function i8(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
bb:function bb(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
i2:function i2(a,b){this.a=a
this.b=b},
hI:function hI(a,b){this.a=a
this.b=b},
hJ:function hJ(a){this.a=a},
aP:function aP(a,b,c){this.a=a
this.b=b
this.c=c},
i7:function i7(){},
eQ:function eQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eR:function eR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hD:function hD(){},
bd:function bd(a,b){this.b=a
this.a=b},
ia:function ia(a,b){this.a=a
this.b=b},
bS:function bS(a,b,c){this.b=a
this.c=b
this.a=c},
cC:function cC(a,b,c){this.a=a
this.b=b
this.c=c},
ha:function ha(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hb:function hb(a,b){this.a=a
this.b=b},
hc:function hc(a,b){this.a=a
this.b=b},
au:function au(a){this.a=a},
a4:function a4(a,b){this.a=a
this.b=b},
aO:function aO(a,b){this.a=a
this.b=b},
o2:function(a){return u.types[a]},
oa:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.r(a).$ist},
e:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bm(a)
if(typeof t!=="string")throw H.c(H.M(a))
return t},
nm:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.aB(t)
s=t[0]
r=t[1]
return new H.fH(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aH:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
kT:function(a,b){var t=P.ji(a,null,null)
throw H.c(t)},
jv:function(a,b,c){var t,s
if(typeof a!=="string")H.G(H.M(a))
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.kT(a,c)
s=t[3]
if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.kT(a,c)},
kS:function(a,b){var t=P.ji("Invalid double",a,null)
throw H.c(t)},
aI:function(a,b){var t,s
if(typeof a!=="string")H.G(H.M(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.kS(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.mC(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.kS(a,b)}return t},
by:function(a){var t,s,r,q,p,o,n,m,l
t=J.r(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.M||!!J.r(a).$isaM){p=C.z(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.h.ad(q,0)===36)q=C.h.da(q,1)
l=H.dH(H.iF(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
R:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nk:function(a){return a.b?H.R(a).getUTCFullYear()+0:H.R(a).getFullYear()+0},
ni:function(a){return a.b?H.R(a).getUTCMonth()+1:H.R(a).getMonth()+1},
ne:function(a){return a.b?H.R(a).getUTCDate()+0:H.R(a).getDate()+0},
nf:function(a){return a.b?H.R(a).getUTCHours()+0:H.R(a).getHours()+0},
nh:function(a){return a.b?H.R(a).getUTCMinutes()+0:H.R(a).getMinutes()+0},
nj:function(a){return a.b?H.R(a).getUTCSeconds()+0:H.R(a).getSeconds()+0},
ng:function(a){return a.b?H.R(a).getUTCMilliseconds()+0:H.R(a).getMilliseconds()+0},
kU:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.M(a))
return a[b]},
ar:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aa(!0,b,"index",null)
t=J.bl(a)
if(b<0||C.b.cU(b,t))return P.D(b,a,"index",null,t)
return P.fE(b,"index",null)},
M:function(a){return new P.aa(!0,a,null,null)},
c:function(a){var t
if(a==null)a=new P.b5()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lV})
t.name=""}else t.toString=H.lV
return t},
lV:function(){return J.bm(this.dartException)},
G:function(a){throw H.c(a)},
J:function(a){throw H.c(P.an(a))},
ag:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hg(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
hh:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
l8:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
kR:function(a,b){return new H.fp(a,b==null?null:b.method)},
jn:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eY(a,s,t?null:b.receiver)},
N:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.j2(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aX(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jn(H.e(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.kR(H.e(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$l2()
o=$.$get$l3()
n=$.$get$l4()
m=$.$get$l5()
l=$.$get$l9()
k=$.$get$la()
j=$.$get$l7()
$.$get$l6()
i=$.$get$lc()
h=$.$get$lb()
g=p.T(s)
if(g!=null)return t.$1(H.jn(s,g))
else{g=o.T(s)
if(g!=null){g.method="call"
return t.$1(H.jn(s,g))}else{g=n.T(s)
if(g==null){g=m.T(s)
if(g==null){g=l.T(s)
if(g==null){g=k.T(s)
if(g==null){g=j.T(s)
if(g==null){g=m.T(s)
if(g==null){g=i.T(s)
if(g==null){g=h.T(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.kR(s,g))}}return t.$1(new H.hl(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cH()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.aa(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cH()
return a},
al:function(a){var t
if(a==null)return new H.di(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.di(a,null)},
oe:function(a){if(a==null||typeof a!='object')return J.bk(a)
else return H.aH(a)},
o0:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.i(0,p,a[q])}return b},
o9:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dE(b,new H.iM(a))
case 1:return H.dE(b,new H.iN(a,d))
case 2:return H.dE(b,new H.iO(a,d,e))
case 3:return H.dE(b,new H.iP(a,d,e,f))
case 4:return H.dE(b,new H.iQ(a,d,e,f,g))}throw H.c(P.cb("Unsupported number of arguments for wrapped closure"))},
aR:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.o9)
a.$identity=t
return t},
mO:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.r(c).$ish){t.$reflectionInfo=c
r=H.nm(t).r}else r=c
q=d?Object.create(new H.fT().constructor.prototype):Object.create(new H.bn(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.kh(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.o2,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.ke:H.je
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.kh(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
mL:function(a,b,c,d){var t=H.je
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
kh:function(a,b,c){var t,s,r,q
if(c)return H.mN(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.mL(s,b==null?r!=null:b!==r,t,b)
return q},
mM:function(a,b,c,d){var t,s
t=H.je
s=H.ke
switch(b?-1:a){case 0:throw H.c(H.no("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
mN:function(a,b){var t,s,r,q
t=$.kf
if(t==null){t=H.kc("self")
$.kf=t}t=$.kd
if(t==null){t=H.kc("receiver")
$.kd=t}s=b.$stubName
r=b.length
q=a[s]
t=H.mM(r,b==null?q!=null:b!==q,s,b)
return t},
jN:function(a,b,c,d,e,f){var t,s
t=J.aB(b)
s=!!J.r(c).$ish?J.aB(c):c
return H.mO(a,t,s,!!d,e,f)},
je:function(a){return a.a},
ke:function(a){return a.c},
kc:function(a){var t,s,r,q,p
t=new H.bn("self","target","receiver","name")
s=J.aB(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
oF:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.ah(a,"String"))},
oA:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ah(a,"double"))},
oE:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ah(a,"num"))},
nT:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.ah(a,"bool"))},
o8:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.ah(a,"int"))},
og:function(a,b){throw H.c(H.ah(a,b.substring(3)))},
of:function(a,b){var t=J.U(b)
throw H.c(H.kg(a,t.aI(b,3,t.gj(b))))},
jR:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.r(a)[b])return a
H.og(a,b)},
am:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.r(a)[b]
else t=!0
if(t)return a
H.of(a,b)},
oD:function(a){if(a==null)return a
if(!!J.r(a).$ish)return a
throw H.c(H.ah(a,"List"))},
jO:function(a){var t=J.r(a)
return"$S" in t?t.$S():null},
bh:function(a,b){var t,s
if(a==null)return!1
t=H.jO(a)
if(t==null)s=!1
else s=H.lL(t,b)
return s},
oB:function(a,b){var t,s
if(a==null)return a
if($.jK)return a
$.jK=!0
try{if(H.bh(a,b))return a
t=H.iV(b,null)
s=H.ah(a,t)
throw H.c(s)}finally{$.jK=!1}},
ah:function(a,b){return new H.hi("TypeError: "+H.e(P.ca(a))+": type '"+H.lr(a)+"' is not a subtype of type '"+b+"'")},
kg:function(a,b){return new H.dW("CastError: "+H.e(P.ca(a))+": type '"+H.lr(a)+"' is not a subtype of type '"+b+"'")},
lr:function(a){var t
if(a instanceof H.aw){t=H.jO(a)
if(t!=null)return H.iV(t,null)
return"Closure"}return H.by(a)},
Y:function(a){if(!0===a)return!1
if(!!J.r(a).$isjj)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.ah(a,"bool"))},
a5:function(a){throw H.c(new H.hx(a))},
b:function(a){if(H.Y(a))throw H.c(P.mK(null))},
op:function(a){throw H.c(new P.e6(a))},
no:function(a){return new H.fL(a)},
lS:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
lI:function(a){return u.getIsolateTag(a)},
K:function(a){return new H.aq(a,null)},
E:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iF:function(a){if(a==null)return
return a.$ti},
lJ:function(a,b){return H.jV(a["$as"+H.e(b)],H.iF(a))},
a6:function(a,b,c){var t,s
t=H.lJ(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
as:function(a,b){var t,s
t=H.iF(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
iV:function(a,b){var t=H.bj(a,b)
return t},
bj:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dH(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.e(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.bj(t,b)
return H.nH(a,b)}return"unknown-reified-type"},
nH:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.bj(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.bj(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.bj(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.o_(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.bj(l[j],b)+(" "+H.e(j))}q+="}"}return"("+q+") => "+t},
dH:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.bA("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.bj(o,c)}return p?"":"<"+s.k(0)+">"},
iG:function(a){var t,s,r
if(a instanceof H.aw){t=H.jO(a)
if(t!=null)return H.iV(t,null)}s=J.r(a).constructor.name
if(a==null)return s
r=H.dH(a.$ti,0,null)
return s+r},
jV:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jS(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jS(a,null,b)
return b},
bW:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iF(a)
s=J.r(a)
if(s[b]==null)return!1
return H.lv(H.jV(s[d],t),c)},
dI:function(a,b,c,d){var t,s
if(a==null)return a
t=H.bW(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dH(c,0,null)
throw H.c(H.kg(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
ox:function(a,b,c,d){var t,s
if(a==null)return a
t=H.bW(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dH(c,0,null)
throw H.c(H.ah(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
lv:function(a,b){var t,s,r,q,p
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
if(!H.X(r,b[p]))return!1}return!0},
oy:function(a,b,c){return H.jS(a,b,H.lJ(b,c))},
X:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="P")return!0
if('func' in b)return H.lL(a,b)
if('func' in a)return b.name==="jj"||b.name==="H"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.iV(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.lv(H.jV(o,t),r)},
lu:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.X(o,n)||H.X(n,o)))return!1}return!0},
nP:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.aB(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.X(p,o)||H.X(o,p)))return!1}return!0},
lL:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.X(t,s)||H.X(s,t)))return!1}r=a.args
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
if(n===m){if(!H.lu(r,q,!1))return!1
if(!H.lu(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.X(g,f)||H.X(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.X(g,f)||H.X(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.X(g,f)||H.X(f,g)))return!1}}return H.nP(a.named,b.named)},
jS:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
oG:function(a){var t=$.jP
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
oC:function(a){return H.aH(a)},
oz:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ob:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.H))
t=$.jP.$1(a)
s=$.iB[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iL[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.lt.$2(a,t)
if(t!=null){s=$.iB[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iL[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.iU(r)
$.iB[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iL[t]=r
return r}if(p==="-"){o=H.iU(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lQ(a,r)
if(p==="*")throw H.c(P.jC(t))
if(u.leafTags[t]===true){o=H.iU(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lQ(a,r)},
lQ:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.jT(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
iU:function(a){return J.jT(a,!1,null,!!a.$ist)},
od:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.iU(t)
else return J.jT(t,c,null,null)},
o6:function(){if(!0===$.jQ)return
$.jQ=!0
H.o7()},
o7:function(){var t,s,r,q,p,o,n,m
$.iB=Object.create(null)
$.iL=Object.create(null)
H.o5()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lR.$1(p)
if(o!=null){n=H.od(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
o5:function(){var t,s,r,q,p,o,n
t=C.Q()
t=H.bg(C.N,H.bg(C.S,H.bg(C.y,H.bg(C.y,H.bg(C.R,H.bg(C.O,H.bg(C.P(C.z),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jP=new H.iI(p)
$.lt=new H.iJ(o)
$.lR=new H.iK(n)},
bg:function(a,b){return a(b)||b},
kN:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.c(P.ji("Illegal RegExp pattern ("+String(q)+")",a,null))},
nE:function(a,b){var t=new H.i9(a,b)
t.dI(a,b)
return t},
ok:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
om:function(a,b,c,d){var t,s,r
t=b.dV(a,d)
if(t==null)return a
s=t.b
r=s.index
return H.oo(a,r,r+s[0].length,c)},
ol:function(a,b,c){var t,s
t=b.gbO()
t.lastIndex=0
s=a.replace(t,c.replace(/\$/g,"$$$$"))
return s},
on:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.om(a,b,c,d)},
oo:function(a,b,c,d){var t,s
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fH:function fH(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hg:function hg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fp:function fp(a,b){this.a=a
this.b=b},
eY:function eY(a,b,c){this.a=a
this.b=b
this.c=c},
hl:function hl(a){this.a=a},
j2:function j2(a){this.a=a},
di:function di(a,b){this.a=a
this.b=b},
iM:function iM(a){this.a=a},
iN:function iN(a,b){this.a=a
this.b=b},
iO:function iO(a,b,c){this.a=a
this.b=b
this.c=c},
iP:function iP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iQ:function iQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
aw:function aw(){},
h5:function h5(){},
fT:function fT(){},
bn:function bn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hi:function hi(a){this.a=a},
dW:function dW(a){this.a=a},
fL:function fL(a){this.a=a},
hx:function hx(a){this.a=a},
aq:function aq(a,b){this.a=a
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
eX:function eX(a){this.a=a},
f_:function f_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f0:function f0(a,b){this.a=a
this.$ti=b},
f1:function f1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iI:function iI(a){this.a=a},
iJ:function iJ(a){this.a=a},
iK:function iK(a){this.a=a},
eW:function eW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i9:function i9(a,b){this.a=a
this.b=b},
it:function(a){var t,s,r
if(!!J.r(a).$iso)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
aj:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.ar(b,a))},
bw:function bw(){},
b4:function b4(){},
ff:function ff(){},
ct:function ct(){},
cu:function cu(){},
cv:function cv(){},
cs:function cs(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
cw:function cw(){},
fm:function fm(){},
bJ:function bJ(){},
bK:function bK(){},
bL:function bL(){},
bM:function bM(){},
o_:function(a){return J.aB(H.E(a?Object.keys(a):[],[null]))},
bi:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
r:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cm.prototype
return J.cl.prototype}if(typeof a=="string")return J.aC.prototype
if(a==null)return J.eV.prototype
if(typeof a=="boolean")return J.eU.prototype
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.H)return a
return J.iE(a)},
jT:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iE:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jQ==null){H.o6()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.jC("Return interceptor for "+H.e(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jm()]
if(p!=null)return p
p=H.ob(a)
if(p!=null)return p
if(typeof a=="function")return C.T
s=Object.getPrototypeOf(a)
if(s==null)return C.C
if(s===Object.prototype)return C.C
if(typeof q=="function"){Object.defineProperty(q,$.$get$jm(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
aB:function(a){a.fixed$length=Array
return a},
kM:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
na:function(a,b){var t,s
for(t=a.length;b<t;){s=C.h.ad(a,b)
if(s!==32&&s!==13&&!J.kM(s))break;++b}return b},
nb:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.h.c7(a,t)
if(s!==32&&s!==13&&!J.kM(s))break}return b},
U:function(a){if(typeof a=="string")return J.aC.prototype
if(a==null)return a
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.H)return a
return J.iE(a)},
aS:function(a){if(a==null)return a
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.H)return a
return J.iE(a)},
lH:function(a){if(typeof a=="number")return J.b0.prototype
if(a==null)return a
if(!(a instanceof P.H))return J.aM.prototype
return a},
o1:function(a){if(typeof a=="number")return J.b0.prototype
if(typeof a=="string")return J.aC.prototype
if(a==null)return a
if(!(a instanceof P.H))return J.aM.prototype
return a},
iD:function(a){if(typeof a=="string")return J.aC.prototype
if(a==null)return a
if(!(a instanceof P.H))return J.aM.prototype
return a},
i:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.H)return a
return J.iE(a)},
B:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.r(a).A(a,b)},
a9:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.lH(a).aF(a,b)},
lY:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lH(a).aG(a,b)},
aT:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.oa(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.U(a).h(a,b)},
lZ:function(a,b,c){return J.aS(a).i(a,b,c)},
m_:function(a,b,c,d){return J.i(a).dL(a,b,c,d)},
jW:function(a,b){return J.iD(a).ad(a,b)},
j3:function(a,b){return J.i(a).e2(a,b)},
m0:function(a,b,c){return J.i(a).e3(a,b,c)},
jX:function(a,b){return J.i(a).bV(a,b)},
j4:function(a,b){return J.i(a).S(a,b)},
jY:function(a,b,c){return J.i(a).bY(a,b,c)},
m1:function(a,b){return J.i(a).eh(a,b)},
j5:function(a,b,c){return J.i(a).bZ(a,b,c)},
j6:function(a,b,c){return J.i(a).c_(a,b,c)},
dJ:function(a,b,c){return J.i(a).c0(a,b,c)},
dK:function(a,b){return J.i(a).ek(a,b)},
m2:function(a,b){return J.i(a).c1(a,b)},
m3:function(a,b,c){return J.i(a).c2(a,b,c)},
jZ:function(a,b,c,d){return J.i(a).c3(a,b,c,d)},
m4:function(a,b){return J.i(a).c4(a,b)},
m5:function(a,b){return J.aS(a).c5(a,b)},
m6:function(a,b,c,d,e){return J.i(a).c6(a,b,c,d,e)},
m7:function(a,b){return J.o1(a).V(a,b)},
j7:function(a,b,c){return J.U(a).ep(a,b,c)},
j8:function(a){return J.i(a).c9(a)},
m8:function(a){return J.i(a).ca(a)},
m9:function(a){return J.i(a).cb(a)},
ma:function(a){return J.i(a).cd(a)},
mb:function(a){return J.i(a).ev(a)},
mc:function(a,b){return J.i(a).cf(a,b)},
j9:function(a,b){return J.i(a).cg(a,b)},
md:function(a,b,c,d){return J.i(a).ci(a,b,c,d)},
me:function(a,b,c,d,e){return J.i(a).eC(a,b,c,d,e)},
mf:function(a,b,c,d,e){return J.i(a).cj(a,b,c,d,e)},
mg:function(a,b,c,d,e,f){return J.i(a).eD(a,b,c,d,e,f)},
mh:function(a,b){return J.aS(a).u(a,b)},
dL:function(a,b){return J.i(a).ck(a,b)},
mi:function(a,b){return J.i(a).cl(a,b)},
mj:function(a){return J.i(a).eE(a)},
k_:function(a,b){return J.aS(a).ak(a,b)},
k0:function(a,b,c,d,e,f){return J.i(a).co(a,b,c,d,e,f)},
mk:function(a){return J.i(a).geg(a)},
bk:function(a){return J.r(a).gv(a)},
aU:function(a){return J.aS(a).gw(a)},
bl:function(a){return J.U(a).gj(a)},
ml:function(a){return J.i(a).gb4(a)},
mm:function(a){return J.r(a).gB(a)},
mn:function(a){return J.i(a).gf5(a)},
mo:function(a){return J.i(a).gaC(a)},
ja:function(a){return J.i(a).gn(a)},
jb:function(a){return J.i(a).gp(a)},
k1:function(a){return J.i(a).gE(a)},
jc:function(a,b){return J.i(a).a9(a,b)},
mp:function(a){return J.i(a).aE(a)},
mq:function(a){return J.i(a).ba(a)},
mr:function(a,b){return J.i(a).bb(a,b)},
ms:function(a,b,c){return J.i(a).bc(a,b,c)},
k2:function(a,b,c){return J.i(a).bf(a,b,c)},
k3:function(a,b,c){return J.i(a).cp(a,b,c)},
mt:function(a,b){return J.i(a).cr(a,b)},
mu:function(a,b){return J.aS(a).ct(a,b)},
k4:function(a){return J.aS(a).f_(a)},
mv:function(a,b){return J.i(a).H(a,b)},
mw:function(a,b){return J.iD(a).d8(a,b)},
mx:function(a,b,c,d){return J.i(a).bl(a,b,c,d)},
my:function(a,b,c,d){return J.i(a).cA(a,b,c,d)},
dM:function(a,b,c,d){return J.i(a).cB(a,b,c,d)},
mz:function(a,b,c,d,e,f){return J.i(a).f6(a,b,c,d,e,f)},
mA:function(a){return J.iD(a).f9(a)},
bm:function(a){return J.r(a).k(a)},
mB:function(a,b,c,d){return J.i(a).fb(a,b,c,d)},
mC:function(a){return J.iD(a).fc(a)},
mD:function(a,b,c){return J.i(a).cD(a,b,c)},
mE:function(a,b,c){return J.i(a).cE(a,b,c)},
jd:function(a,b,c){return J.i(a).cF(a,b,c)},
mF:function(a,b,c){return J.i(a).cG(a,b,c)},
k5:function(a,b,c){return J.i(a).cH(a,b,c)},
k6:function(a,b,c){return J.i(a).cI(a,b,c)},
k7:function(a,b,c){return J.i(a).cJ(a,b,c)},
k8:function(a,b,c,d){return J.i(a).cK(a,b,c,d)},
k9:function(a,b,c,d){return J.i(a).cL(a,b,c,d)},
mG:function(a,b){return J.i(a).cN(a,b)},
mH:function(a,b,c){return J.i(a).fd(a,b,c)},
mI:function(a,b,c,d,e,f,g){return J.i(a).cP(a,b,c,d,e,f,g)},
mJ:function(a,b,c,d,e){return J.i(a).cR(a,b,c,d,e)},
a:function a(){},
eU:function eU(){},
eV:function eV(){},
br:function br(){},
fz:function fz(){},
aM:function aM(){},
aD:function aD(){},
aA:function aA(a){this.$ti=a},
jk:function jk(a){this.$ti=a},
dR:function dR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b0:function b0(){},
cm:function cm(){},
cl:function cl(){},
aC:function aC(){}},P={
nv:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.nQ()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.aR(new P.hz(t),1)).observe(s,{childList:true})
return new P.hy(t,s,r)}else if(self.setImmediate!=null)return P.nR()
return P.nS()},
nw:function(a){H.iC()
self.scheduleImmediate(H.aR(new P.hA(a),0))},
nx:function(a){H.iC()
self.setImmediate(H.aR(new P.hB(a),0))},
ny:function(a){P.jz(C.v,a)},
jz:function(a,b){var t=C.b.M(a.a,1000)
return H.ns(t<0?0:t,b)},
nK:function(a,b){if(H.bh(a,{func:1,args:[P.P,P.P]})){b.toString
return a}else{b.toString
return a}},
mZ:function(a,b,c){var t
if(a==null)a=new P.b5()
t=$.x
if(t!==C.d)t.toString
t=new P.L(0,t,null,[c])
t.bD(a,b)
return t},
n_:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.L(0,$.x,null,[P.h])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eL(t,b,!1,s)
try{for(m=0,l=0;m<1;++m){q=a[m]
p=l
q.b8(new P.eK(t,p,s,b,!1),r)
l=++t.b}if(l===0){l=new P.L(0,$.x,null,[null])
l.bC(C.A)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.N(j)
n=H.al(j)
if(t.b===0||!1)return P.mZ(o,n,null)
else{t.c=o
t.d=n}}return s},
li:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.L))
H.b(b.a===0)
b.a=1
try{a.b8(new P.hS(b),new P.hT(b))}catch(r){t=H.N(r)
s=H.al(r)
P.oh(new P.hU(b,t,s))}},
hR:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.ax()
b.aM(a)
P.ba(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.bP(r)}},
ba:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.iu(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.ba(t.a,b)}s=t.a
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
P.iu(null,null,p,o,s)
return}s=$.x
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.x
H.b(l==null?s!=null:l!==s)
j=$.x
$.x=l
i=j}else i=null
s=b.c
if(s===8)new P.hZ(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.hY(r,b,m).$0()}else if((s&2)!==0)new P.hX(t,r,b).$0()
if(i!=null){H.b(!0)
$.x=i}s=r.b
if(!!J.r(s).$isa1){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.ay(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.hR(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.ay(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
nJ:function(){var t,s
for(;t=$.be,t!=null;){$.bU=null
s=t.b
$.be=s
if(s==null)$.bT=null
t.a.$0()}},
nN:function(){$.jL=!0
try{P.nJ()}finally{$.bU=null
$.jL=!1
if($.be!=null)$.$get$jG().$1(P.lw())}},
lq:function(a){var t=new P.cS(a,null)
if($.be==null){$.bT=t
$.be=t
if(!$.jL)$.$get$jG().$1(P.lw())}else{$.bT.b=t
$.bT=t}},
nM:function(a){var t,s,r
t=$.be
if(t==null){P.lq(a)
$.bU=$.bT
return}s=new P.cS(a,null)
r=$.bU
if(r==null){s.b=t
$.bU=s
$.be=s}else{s.b=r.b
r.b=s
$.bU=s
if(s.b==null)$.bT=s}},
oh:function(a){var t=$.x
if(C.d===t){P.bf(null,null,C.d,a)
return}t.toString
P.bf(null,null,t,t.b_(a))},
nt:function(a,b){var t=$.x
if(t===C.d){t.toString
return P.jz(a,b)}return P.jz(a,t.b_(b))},
jF:function(a){var t,s
H.b(a!=null)
t=$.x
H.b(a==null?t!=null:a!==t)
s=$.x
$.x=a
return s},
iu:function(a,b,c,d,e){var t={}
t.a=d
P.nM(new P.iv(t,e))},
lo:function(a,b,c,d){var t,s
if($.x===c)return d.$0()
t=P.jF(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.x=s}},
lp:function(a,b,c,d,e){var t,s
if($.x===c)return d.$1(e)
t=P.jF(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.x=s}},
nL:function(a,b,c,d,e,f){var t,s
if($.x===c)return d.$2(e,f)
t=P.jF(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.x=s}},
bf:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.b_(d):c.ei(d)
P.lq(d)},
hz:function hz(a){this.a=a},
hy:function hy(a,b,c){this.a=a
this.b=b
this.c=c},
hA:function hA(a){this.a=a},
hB:function hB(a){this.a=a},
a1:function a1(){},
eL:function eL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eK:function eK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jf:function jf(){},
hE:function hE(){},
cT:function cT(a,b){this.a=a
this.$ti=b},
io:function io(a,b){this.a=a
this.$ti=b},
d0:function d0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
L:function L(a,b,c,d){var _=this
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
cS:function cS(a,b){this.a=a
this.b=b},
fY:function fY(){},
h_:function h_(a){this.a=a},
h0:function h0(a,b){this.a=a
this.b=b},
fZ:function fZ(){},
jy:function jy(){},
aV:function aV(a,b){this.a=a
this.b=b},
is:function is(){},
iv:function iv(a,b){this.a=a
this.b=b},
ic:function ic(){},
ie:function ie(a,b){this.a=a
this.b=b},
id:function id(a,b){this.a=a
this.b=b},
ig:function ig(a,b){this.a=a
this.b=b},
kO:function(a,b){return new H.ac(0,null,null,null,null,null,0,[a,b])},
p:function(){return new H.ac(0,null,null,null,null,null,0,[null,null])},
aF:function(a){return H.o0(a,new H.ac(0,null,null,null,null,null,0,[null,null]))},
bc:function(a,b){return new P.i5(0,null,null,null,null,null,0,[a,b])},
aG:function(a,b,c,d){return new P.i3(0,null,null,null,null,null,0,[d])},
jJ:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
n7:function(a,b,c){var t,s
if(P.jM(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bV()
C.a.l(s,a)
try{P.nI(a,t)}finally{H.b(C.a.gb1(s)===a)
s.pop()}s=P.l0(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eS:function(a,b,c){var t,s,r
if(P.jM(a))return b+"..."+c
t=new P.bA(b)
s=$.$get$bV()
C.a.l(s,a)
try{r=t
r.a=P.l0(r.ga3(),a,", ")}finally{H.b(C.a.gb1(s)===a)
s.pop()}s=t
s.a=s.ga3()+c
s=t.ga3()
return s.charCodeAt(0)==0?s:s},
jM:function(a){var t,s
for(t=0;s=$.$get$bV(),t<s.length;++t)if(a===s[t])return!0
return!1},
nI:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gw(a)
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
jq:function(a,b){var t,s
t=P.aG(null,null,null,b)
for(s=J.aU(a);s.q();)t.l(0,s.gt(s))
return t},
kQ:function(a){var t,s,r
t={}
if(P.jM(a))return"{...}"
s=new P.bA("")
try{C.a.l($.$get$bV(),a)
r=s
r.a=r.ga3()+"{"
t.a=!0
J.k_(a,new P.f6(t,s))
t=s
t.a=t.ga3()+"}"}finally{t=$.$get$bV()
H.b(C.a.gb1(t)===a)
t.pop()}t=s.ga3()
return t.charCodeAt(0)==0?t:t},
jr:function(a,b){var t=new P.f2(null,0,0,0,[b])
t.dr(a,b)
return t},
i5:function i5(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
i3:function i3(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
i4:function i4(a,b,c){this.a=a
this.b=b
this.c=c},
bH:function bH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i1:function i1(){},
jp:function jp(){},
cn:function cn(){},
l:function l(){},
cp:function cp(){},
f6:function f6(a,b){this.a=a
this.b=b},
b3:function b3(){},
f2:function f2(a,b,c,d,e){var _=this
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
fN:function fN(){},
fM:function fM(){},
bI:function bI(){},
mV:function(a){var t=J.r(a)
if(!!t.$isaw)return t.k(a)
return"Instance of '"+H.by(a)+"'"},
kP:function(a,b,c){var t,s
t=H.E([],[c])
for(s=J.aU(a);s.q();)C.a.l(t,s.gt(s))
return t},
kY:function(a,b,c){return new H.eW(a,H.kN(a,!1,!0,!1),null,null)},
l0:function(a,b,c){var t=J.aU(b)
if(!t.q())return a
if(c.length===0){do a+=H.e(t.gt(t))
while(t.q())}else{a+=H.e(t.gt(t))
for(;t.q();)a=a+c+H.e(t.gt(t))}return a},
mP:function(a,b){return J.m7(a,b)},
mQ:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
mR:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c3:function(a){if(a>=10)return""+a
return"0"+a},
kC:function(a,b,c,d,e,f){return new P.az(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
ca:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bm(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mV(a)},
mK:function(a){return new P.c0(a)},
dQ:function(a){return new P.aa(!1,null,null,a)},
ka:function(a,b,c){return new P.aa(!0,a,b,c)},
fE:function(a,b,c){return new P.cB(null,null,!0,a,b,"Value not in range")},
aJ:function(a,b,c,d,e){return new P.cB(b,c,!0,a,d,"Invalid value")},
kX:function(a,b,c,d,e,f){if(0>a||a>c)throw H.c(P.aJ(a,0,c,"start",f))
if(a>b||b>c)throw H.c(P.aJ(b,a,c,"end",f))
return b},
D:function(a,b,c,d,e){var t=e!=null?e:J.bl(b)
return new P.eP(b,t,!0,a,c,"Index out of range")},
u:function(a){return new P.hm(a)},
jC:function(a){return new P.hk(a)},
cI:function(a){return new P.b8(a)},
an:function(a){return new P.dY(a)},
cb:function(a){return new P.hN(a)},
ji:function(a,b,c){return new P.eJ(a,b,c)},
a8:function(a){H.bi(H.e(a))},
ak:function ak(){},
I:function I(){},
ax:function ax(a,b){this.a=a
this.b=b},
Z:function Z(){},
az:function az(a){this.a=a},
ed:function ed(){},
ee:function ee(){},
aZ:function aZ(){},
c0:function c0(a){this.a=a},
b5:function b5(){},
aa:function aa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cB:function cB(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eP:function eP(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hm:function hm(a){this.a=a},
hk:function hk(a){this.a=a},
b8:function b8(a){this.a=a},
dY:function dY(a){this.a=a},
cH:function cH(){},
e6:function e6(a){this.a=a},
jh:function jh(){},
hN:function hN(a){this.a=a},
eJ:function eJ(a,b,c){this.a=a
this.b=b
this.c=c},
ei:function ei(a,b,c){this.a=a
this.b=b
this.$ti=c},
z:function z(){},
V:function V(){},
ck:function ck(){},
h:function h(){},
b2:function b2(){},
P:function P(){},
a7:function a7(){},
H:function H(){},
jx:function jx(){},
b7:function b7(){},
n:function n(){},
bA:function bA(a){this.a=a},
jB:function jB(){},
iz:function(a){var t,s,r,q,p
if(a==null)return
t=P.p()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.J)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
nW:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.k_(a,new P.iw(t))
return t},
nX:function(a){var t,s
t=new P.L(0,$.x,null,[null])
s=new P.cT(t,[null])
a.then(H.aR(new P.ix(s),1))["catch"](H.aR(new P.iy(s),1))
return t},
kB:function(){var t=$.kA
if(t==null){t=J.j7(window.navigator.userAgent,"Opera",0)
$.kA=t}return t},
mS:function(){var t,s
t=$.kx
if(t!=null)return t
s=$.ky
if(s==null){s=J.j7(window.navigator.userAgent,"Firefox",0)
$.ky=s}if(s)t="-moz-"
else{s=$.kz
if(s==null){s=!P.kB()&&J.j7(window.navigator.userAgent,"Trident/",0)
$.kz=s}if(s)t="-ms-"
else t=P.kB()?"-o-":"-webkit-"}$.kx=t
return t},
hu:function hu(){},
hw:function hw(a,b){this.a=a
this.b=b},
iw:function iw(a){this.a=a},
hv:function hv(a,b,c){this.a=a
this.b=b
this.c=c},
ix:function ix(a){this.a=a},
iy:function iy(a){this.a=a},
ib:function ib(){},
W:function W(){},
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
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eF:function eF(){},
eH:function eH(){},
a2:function a2(){},
ab:function ab(){},
eO:function eO(){},
eZ:function eZ(){},
f8:function f8(){},
fq:function fq(){},
fx:function fx(){},
fB:function fB(){},
fC:function fC(){},
fF:function fF(){},
fG:function fG(){},
bz:function bz(){},
h1:function h1(){},
v:function v(){},
h2:function h2(){},
bC:function bC(){},
bD:function bD(){},
hf:function hf(){},
ho:function ho(){},
d3:function d3(){},
d4:function d4(){},
da:function da(){},
db:function db(){},
dk:function dk(){},
dl:function dl(){},
dr:function dr(){},
ds:function ds(){},
dS:function dS(){},
dT:function dT(){},
aW:function aW(){},
fr:function fr(){},
fJ:function fJ(){},
fK:function fK(){},
fS:function fS(){},
dg:function dg(){},
dh:function dh(){}},W={
nZ:function(){return document},
mT:function(a,b,c){var t,s
t=document.body
s=(t&&C.o).R(t,a,b,c)
s.toString
t=new H.cR(new W.S(s),new W.eh(),[W.q])
return t.ga2(t)},
mU:function(a){return"wheel"},
bo:function(a){var t,s,r
t="element tag unavailable"
try{s=J.mn(a)
if(typeof s==="string")t=a.tagName}catch(r){H.N(r)}return t},
nz:function(a,b){return document.createElement(a)},
aQ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lm:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
a3:function(a,b,c,d,e){var t=W.ls(new W.hM(c))
t=new W.hL(0,a,b,t,!1,[e])
t.dE(a,b,c,!1,e)
return t},
lj:function(a){var t,s
t=document.createElement("a")
s=new W.ih(t,window.location)
s=new W.bG(s)
s.dF(a)
return s},
nB:function(a,b,c,d){return!0},
nC:function(a,b,c,d){var t,s,r,q,p
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
ln:function(){var t=P.n
t=new W.ip(P.jq(C.q,t),P.aG(null,null,null,t),P.aG(null,null,null,t),P.aG(null,null,null,t),null)
t.dJ(null,new H.bs(C.q,new W.iq(),[H.as(C.q,0),null]),["TEMPLATE"],null)
return t},
nG:function(a){var t
if(!!J.r(a).$isay)return a
t=new P.hv([],[],!1)
t.c=!0
return t.b9(a)},
ls:function(a){var t=$.x
if(t===C.d)return a
return t.ej(a)},
j:function j(){},
c_:function c_(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){},
at:function at(){},
c1:function c1(){},
dV:function dV(){},
av:function av(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
aX:function aX(){},
e2:function e2(){},
a_:function a_(){},
aY:function aY(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e7:function e7(){},
e8:function e8(){},
c4:function c4(){},
ay:function ay(){},
e9:function e9(){},
c5:function c5(){},
ea:function ea(){},
c6:function c6(){},
c7:function c7(){},
c8:function c8(){},
eb:function eb(){},
ec:function ec(){},
a0:function a0(){},
eh:function eh(){},
f:function f(){},
d:function d(){},
eD:function eD(){},
eE:function eE(){},
eI:function eI(){},
eM:function eM(){},
ch:function ch(){},
eN:function eN(){},
bp:function bp(){},
ci:function ci(){},
cj:function cj(){},
bq:function bq(){},
aE:function aE(){},
f4:function f4(){},
f5:function f5(){},
fa:function fa(){},
fc:function fc(){},
bv:function bv(){},
fd:function fd(){},
O:function O(){},
S:function S(a){this.a=a},
q:function q(){},
cx:function cx(){},
bx:function bx(){},
ae:function ae(){},
fA:function fA(){},
fD:function fD(){},
cA:function cA(){},
cD:function cD(){},
b6:function b6(){},
ap:function ap(){},
fP:function fP(){},
fR:function fR(){},
af:function af(){},
fW:function fW(){},
fX:function fX(a){this.a=a},
cK:function cK(){},
h3:function h3(){},
h4:function h4(){},
bB:function bB(){},
h6:function h6(){},
h7:function h7(){},
h9:function h9(){},
aK:function aK(){},
hd:function hd(){},
he:function he(){},
cQ:function cQ(){},
aL:function aL(){},
hn:function hn(){},
hp:function hp(){},
hq:function hq(){},
hr:function hr(){},
aN:function aN(){},
bF:function bF(){},
ht:function ht(a){this.a=a},
jE:function jE(){},
hF:function hF(){},
hG:function hG(){},
i0:function i0(){},
d7:function d7(){},
ik:function ik(){},
il:function il(){},
hC:function hC(){},
hH:function hH(a){this.a=a},
hK:function hK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jH:function jH(a,b,c,d){var _=this
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
bG:function bG(a){this.a=a},
m:function m(){},
cz:function cz(a){this.a=a},
fo:function fo(a){this.a=a},
fn:function fn(a,b,c){this.a=a
this.b=b
this.c=c},
bN:function bN(){},
ii:function ii(){},
ij:function ij(){},
ip:function ip(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iq:function iq(){},
im:function im(){},
cd:function cd(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cy:function cy(){},
jt:function jt(){},
jD:function jD(){},
ih:function ih(a,b){this.a=a
this.b=b},
dt:function dt(a){this.a=a},
ir:function ir(a){this.a=a},
cU:function cU(){},
cV:function cV(){},
cW:function cW(){},
cX:function cX(){},
cY:function cY(){},
cZ:function cZ(){},
d_:function d_(){},
d1:function d1(){},
d2:function d2(){},
d5:function d5(){},
d6:function d6(){},
d8:function d8(){},
d9:function d9(){},
dc:function dc(){},
dd:function dd(){},
bO:function bO(){},
bP:function bP(){},
de:function de(){},
df:function df(){},
dj:function dj(){},
dm:function dm(){},
dn:function dn(){},
bQ:function bQ(){},
bR:function bR(){},
dp:function dp(){},
dq:function dq(){},
du:function du(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){}},B={
oi:function(a){var t,s
t=document
s=W.aE
W.a3(t,"keydown",new B.iW(),!1,s)
W.a3(t,"keyup",new B.iX(),!1,s)
if(!$.oj)W.a3(t,"mousemove",new B.iY(),!1,W.O)
s=W.O
W.a3(t,"mousedown",new B.iZ(),!1,s)
W.a3(t,"mouseup",new B.j_(),!1,s)},
nd:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$iA()
r=$.$get$bX()
q=new T.ad(new Float32Array(16))
q.as()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.fs(a,b,c,0,new T.w(t),-0.02,s,r,q,new T.w(p),new T.w(o),new T.w(n),new T.w(new Float32Array(3)),"camera:orbit",!1,!0)
t.ds(a,b,c,d)
return t},
iW:function iW(){},
iX:function iX(){},
iY:function iY(){},
iZ:function iZ(){},
j_:function j_(){},
fs:function fs(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ft:function ft(a){this.a=a},
fu:function fu(a){this.a=a},
fv:function fv(){},
fw:function fw(a){this.a=a}},G={
nu:function(a){var t,s,r
t=H.E(a.split("\n"),[P.n])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.e(t[s])}return C.a.ao(t,"\n")},
lh:function(a,b,c){var t,s,r,q
t=J.i(a)
s=t.cc(a,b)
t.bj(a,s,c)
t.c8(a,s)
r=t.be(a,s,35713)
if(r!=null&&!r){q=t.bd(a,s)
P.a8("E:Compilation failed:")
P.a8("E:"+G.nu(c))
P.a8("E:Failure:")
P.a8(C.h.a8("E:",q))
throw H.c(q)}return s},
kG:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.ja(a[s])
b[t+1]=J.jb(a[s])
b[t+2]=J.k1(a[s])}return b},
mX:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.ja(a[s])
b[t+1]=J.jb(a[s])}return b},
mY:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.ja(a[s])
b[t+1]=J.jb(a[s])
b[t+2]=J.k1(a[s])
b[t+3]=J.mo(a[s])}return b},
mW:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.aT(a[s],0)
b[t+1]=J.aT(a[s],1)
b[t+2]=J.aT(a[s],2)
b[t+3]=J.aT(a[s],3)}return b},
nA:function(a,b){var t,s,r,q,p,o,n,m,l,k
for(t=a.e,s=t.gD(t),s=s.gw(s),r=b.x,q=[[P.h,P.z]],p=[P.Z],o=[T.ai],n=[T.w],m=[T.F];s.q();){l=s.gt(s)
if(!r.G(0,l)){l="Dropping unnecessary attribute: "+H.e(l)
if($.lG>0)H.bi("I: "+l)
continue}k=t.h(0,l)
switch($.$get$T().h(0,l).a){case"vec2":b.ac(l,G.mX(H.dI(k,"$ish",m,"$ash"),null),2)
break
case"vec3":b.ac(l,G.kG(H.dI(k,"$ish",n,"$ash"),null),3)
break
case"vec4":b.ac(l,G.mY(H.dI(k,"$ish",o,"$ash"),null),4)
break
case"float":b.ac(l,new Float32Array(H.it(H.dI(k,"$ish",p,"$ash"))),1)
break
case"uvec4":b.ac(l,G.mW(H.dI(k,"$ish",q,"$ash"),null),4)
break
default:if(H.Y(!1))H.a5("unknown type for "+H.e(l)+" ["+J.mm(k[0]).k(0)+"] ["+new H.aq(H.iG(k),null).k(0)+"] "+H.e(k))}}},
kH:function(a,b,c){var t,s,r,q,p,o,n,m
t=b.d
s=b.e.x
r=P.p()
q=J.mb(t.a)
p=new G.fb(t,q,4,r,s,null,0,-1,null,null,P.p(),"meshdata:"+a,!1,!0)
o=G.kG(c.d,null)
r.i(0,"aPosition",J.j8(t.a))
p.ch=o
p.br("aPosition",o,3)
n=$.$get$T().h(0,"aPosition")
if(n==null)H.G("Unknown canonical aPosition")
H.b(s.G(0,"aPosition"))
m=s.h(0,"aPosition")
J.dK(t.a,q)
t.cm(0,m,0)
t.cQ(0,r.h(0,"aPosition"),m,n.bt(),5126,!1,0,0)
s=c.dn()
p.y=J.j8(t.a)
H.b(p.ch!=null)
r=p.ch.length
if(r<768){p.saS(new Uint8Array(H.it(s)))
p.Q=5121}else if(r<196608){p.saS(new Uint16Array(H.it(s)))
p.Q=5123}else{p.saS(new Uint32Array(H.it(s)))
p.Q=5125}J.dK(t.a,q)
s=p.y
r=p.cx
q=J.r(r)
H.b(!!q.$isle||!!q.$islf||!!q.$islg)
J.j5(t.a,34963,s)
J.jZ(t.a,34963,r,35048)
G.nA(c,p)
return p},
kZ:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.aG(null,null,null,P.n)
s=c.b
r=d.b
q=c.f
p=J.m9(b.a)
o=G.lh(b.a,35633,s)
J.jY(b.a,p,o)
n=G.lh(b.a,35632,r)
J.jY(b.a,p,n)
if(q.length>0)J.mB(b.a,p,q,35980)
J.mt(b.a,p)
if(!J.ms(b.a,p,35714))H.G(J.mr(b.a,p))
t=new G.fI(b,c,d,p,P.jq(c.c,null),P.p(),P.p(),t,null,a,!1,!0)
t.dt(a,b,c,d)
return t},
Q:function(a){return new G.fO(a,null,[],[],[],[],0,P.p())},
ld:function(a,b,c,d,e,f){var t=new G.hj(c,d,e,b,J.ma(a.a),3553,a,f)
t.dz(a,b,c,d,e,f)
return t},
fe:function fe(){},
A:function A(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dU:function dU(){},
dX:function dX(a,b){this.a=a
this.b=b},
ce:function ce(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eB:function eB(a,b,c){this.a=a
this.b=b
this.c=c},
eC:function eC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cg:function cg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cO:function cO(a,b,c){this.a=a
this.b=b
this.c=c},
cN:function cN(a,b,c){this.a=a
this.b=b
this.c=c},
f9:function f9(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
fb:function fb(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fy:function fy(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
fI:function fI(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
fO:function fO(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fQ:function fQ(){},
h8:function h8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bE:function bE(){},
hj:function hj(a,b,c,d,e,f,g,h){var _=this
_.f=a
_.r=b
_.x=c
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},R={fU:function fU(){},fV:function fV(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},D={
nc:function(a){var t,s
t=new P.L(0,$.x,null,[null])
s=new XMLHttpRequest()
C.w.eY(s,"GET",a)
W.a3(s,"loadend",new D.f3(new P.cT(t,[null]),s),!1,W.ov)
C.w.H(s,"")
return t},
f3:function f3(a,b){this.a=a
this.b=b}},A={
dG:function(a){var t,s
t=C.W.eG(a,0,new A.iH())
s=536870911&t+(C.b.cS(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iH:function iH(){}},T={
bu:function(a,b,c,d,e,f,g,h,i){var t=new Float32Array(9)
t[8]=i
t[7]=h
t[6]=g
t[5]=f
t[4]=e
t[3]=d
t[2]=c
t[1]=b
t[0]=a
return new T.bt(t)},
b9:function(a,b,c){var t=new T.w(new Float32Array(3))
t.U(a,b,c)
return t},
bt:function bt(a){this.a=a},
ad:function ad(a){this.a=a},
F:function F(a){this.a=a},
w:function w(a){this.a=a},
ai:function ai(a){this.a=a}},U={
jw:function(a,b,c,d){return(b-a)*(0.5+0.5*Math.cos(d))+a},
C:function(a,b,c){var t=c.a
t=new U.ef(t,G.kZ(t,a,$.$get$lC(),b),c)
t.dl(a,b,c)
return t},
nn:function(a,b){var t,s,r
t=$.$get$ly()
s=new G.A(P.p(),"none",!1,!0)
s.m("uTexture",b)
U.C(a,t,s)
s=$.$get$lW()
t=new G.A(P.p(),"toon",!1,!0)
t.m("uTexture",b)
U.C(a,s,t)
t=$.$get$lK()
s=new G.A(P.p(),"hexalate-10",!1,!0)
r=new T.F(new Float32Array(2))
r.K(0.5,0.5)
s.m("uCenter2",r)
s.m("uPointSize",10)
s.m("uTexture",b)
U.C(a,t,s)
s=new G.A(P.p(),"hexalate-20",!1,!0)
r=new T.F(new Float32Array(2))
r.K(0.5,0.5)
s.m("uCenter2",r)
s.m("uPointSize",20)
s.m("uTexture",b)
U.C(a,t,s)
s=new G.A(P.p(),"hexalate-varying",!1,!0)
r=new T.F(new Float32Array(2))
r.K(0.5,0.5)
s.m("uCenter2",r)
s.m("uPointSize",10)
s.m("uTexture",b)
U.C(a,t,s)
s=$.$get$lB()
t=new G.A(P.p(),"dot",!1,!0)
r=new T.F(new Float32Array(2))
r.K(0,0)
t.m("uCenter2",r)
t.m("uScale",0.8)
t.m("uAngle",0.5)
t.m("uTexture",b)
U.C(a,s,t)
t=new G.A(P.p(),"dot2",!1,!0)
r=new T.F(new Float32Array(2))
r.K(0,0)
t.m("uCenter2",r)
t.m("uScale",0.3)
t.m("uAngle",0.5)
t.m("uTexture",b)
U.C(a,s,t)
t=$.$get$lX()
s=new G.A(P.p(),"tv-distortion",!1,!0)
s.m("uScale",0.0009)
s.m("uTime",0)
s.m("uTexture",b)
U.C(a,t,s)
s=$.$get$lM()
t=new G.A(P.p(),"kaleidoscope8",!1,!0)
t.m("uScale",8)
r=new T.F(new Float32Array(2))
r.K(0.5,0.5)
t.m("uCenter2",r)
t.m("uTexture",b)
U.C(a,s,t)
t=new G.A(P.p(),"kaleidoscope5",!1,!0)
t.m("uScale",5)
r=new T.F(new Float32Array(2))
r.K(0.5,0.5)
t.m("uCenter2",r)
t.m("uTexture",b)
U.C(a,s,t)
t=$.$get$lN()
s=new G.A(P.p(),"lumidots-8",!1,!0)
s.m("uPointSize",8)
s.m("uTexture",b)
U.C(a,t,s)
s=new G.A(P.p(),"lumidots-16",!1,!0)
s.m("uPointSize",16)
s.m("uTexture",b)
U.C(a,t,s)
s=new G.A(P.p(),"lumidots-varying",!1,!0)
s.m("uPointSize",16)
s.m("uTexture",b)
U.C(a,t,s)
s=$.$get$lT()
t=new G.A(P.p(),"square-8",!1,!0)
t.m("uPointSize",8)
t.m("uTexture",b)
U.C(a,s,t)
t=new G.A(P.p(),"square-16",!1,!0)
t.m("uPointSize",16)
t.m("uTexture",b)
U.C(a,s,t)
t=new G.A(P.p(),"square-varying",!1,!0)
t.m("uPointSize",16)
t.m("uTexture",b)
U.C(a,s,t)
t=$.$get$lO()
s=new G.A(P.p(),"luminosity-highpass",!1,!0)
r=new T.F(new Float32Array(2))
r.K(0.85,0.86)
s.m("uRange",r)
s.m("uColorAlpha",new T.ai(new Float32Array(4)))
s.m("uTexture",b)
U.C(a,t,s)
t=$.$get$lF()
s=new G.A(P.p(),"fisheye",!1,!0)
s.m("uTexture",b)
U.C(a,t,s)
s=$.$get$lE()
t=new G.A(P.p(),"film",!1,!0)
t.m("uTexture",b)
U.C(a,s,t)
t=$.$get$lx()
s=new G.A(P.p(),"emboss",!1,!0)
s.m("uConvolutionMatrix",$.$get$kl())
s.m("uColor",$.$get$kr())
U.C(a,t,s)
s=new G.A(P.p(),"emboss2",!1,!0)
s.m("uConvolutionMatrix",$.$get$km())
s.m("uColor",$.$get$ks())
U.C(a,t,s)
s=new G.A(P.p(),"engrave",!1,!0)
s.m("uConvolutionMatrix",$.$get$kn())
s.m("uColor",$.$get$kt())
U.C(a,t,s)
s=new G.A(P.p(),"sharpen",!1,!0)
s.m("uConvolutionMatrix",$.$get$ko())
s.m("uColor",$.$get$ku())
U.C(a,t,s)
s=new G.A(P.p(),"edges",!1,!0)
s.m("uConvolutionMatrix",$.$get$kk())
s.m("uColor",$.$get$kq())
U.C(a,t,s)
s=new G.A(P.p(),"blur",!1,!0)
s.m("uConvolutionMatrix",$.$get$kj())
s.m("uColor",$.$get$kp())
U.C(a,t,s)
H.b($.$get$dF()!=null)
for(t=$.$get$c9(),t=t.gD(t),t=t.gw(t);t.q();){s=t.gt(t)
r=$.$get$dF();(r&&C.X).eM(r,"beforeend","<option>"+H.e(s)+"</option>",null,null)}},
oc:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
t={}
s=document
r=new R.fV(0,0,null,null,null,null)
r.dv(C.m.cW(s,"stats"),"blue","gray")
q=C.m.cu(s,"#webgl-canvas")
p=q.clientWidth
o=q.clientHeight
q.width=p
q.height=o
n=new G.dX(null,q)
s=(q&&C.J).cV(q,"webgl2",P.aF(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
n.a=s
if(s==null)H.G(P.cb('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
m="ChronosGL Config: "+H.e(J.mp(s))
if($.lG>0)P.a8("I: "+m)
J.m6(s,0,0,0,1)
J.dL(s,2929)
l=B.nd(15,-45,0.3,q)
s=new T.ad(new Float32Array(16))
s.as()
m=new T.ad(new Float32Array(16))
m.as()
k=new G.fy(l,50,1,0.1,2520,s,m,new T.ad(new Float32Array(16)),P.p(),"perspective",!1,!0)
k.bw()
k.di(p,o)
s=$.$get$l1()
m=G.ld(n,"frame::color",p,o,32856,s)
s=G.ld(n,"frame::depth",p,o,33190,s)
j=new G.ce(n,null,m,s,null)
j.dm(n,m,s,null,!1)
U.nn(n,m)
i=G.kZ("demo",n,$.$get$lA(),$.$get$lz())
m=$.$get$c9().h(0,"dot").b
s=new T.w(new Float32Array(3))
s.U(-1,-1,0)
h=new T.w(new Float32Array(3))
h.U(1,-1,0)
g=new T.w(new Float32Array(3))
g.U(1,1,0)
f=new T.w(new Float32Array(3))
f.U(-1,1,0)
e=new T.F(new Float32Array(2))
e.K(0,0)
d=new T.F(new Float32Array(2))
d.K(1,0)
c=new T.F(new Float32Array(2))
c.K(1,1)
b=new T.F(new Float32Array(2))
b.K(0,1)
a=new T.w(new Float32Array(3))
a.U(0,0,1)
a0=new G.cg(!1,[],[],[],P.p())
a0.at("aTexUV")
a0.bq([s,h,g,f])
a0.bo("aTexUV",[e,d,c,b])
a0.at("aNormal")
a0.bp("aNormal",[a,a,a,a])
a1=G.kH("quad",m,a0)
t.a=null
a2=new G.f9(P.p(),"mat",!1,!0)
a2.m("cDepthTest",!0)
a2.m("cDepthWrite",!0)
a2.m("cBlendEquation",$.$get$kb())
a2.m("cStencilFunc",$.$get$l_())
a2.m("uColor",$.$get$ki())
s=new Float32Array(16)
m=new T.ad(s)
m.as()
a3=Math.cos(1.5707963267948966)
a4=Math.sin(1.5707963267948966)
h=s[4]
g=s[8]
f=s[5]
e=s[9]
d=s[6]
c=s[10]
b=s[7]
a5=s[11]
a6=-a4
s[4]=h*a3+g*a4
s[5]=f*a3+e*a4
s[6]=d*a3+c*a4
s[7]=b*a3+a5*a4
s[8]=h*a6+g*a3
s[9]=f*a6+e*a3
s[10]=d*a6+c*a3
s[11]=b*a6+a5*a3
a2.m("uModelMatrix",m)
t.b=0
P.n_([D.nc("../ct_logo.obj")],null,!1).b7(new U.iT(t,i,new U.iS(t,l,j,p,o,i,k,a2,new G.ce(n,null,null,null,null),a1,r)))},
ef:function ef(a,b,c){this.a=a
this.b=b
this.c=c},
iS:function iS(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
_.Q=k},
iT:function iT(a,b,c){this.a=a
this.b=b
this.c=c}},Y={
n0:function(a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
t=new G.cg(!1,[],[],[],P.p())
t.at("aTexUV")
t.at("aNormal")
s=P.p()
r=a6.split("\n")
q=[]
p=[]
o=[]
n=Date.now()
m=P.kY("\\s+",!0,!1)
l=P.kY("\\s\\s*\\$",!0,!1)
for(k=r.length,j=0;j<r.length;r.length===k||(0,H.J)(r),++j){i=r[j]
i.toString
h=H.ol(i,m," ")
g=H.on(h,l,"",0)
if(g.length===0||g[0]==="#")continue
f=g.split(" ")
h=f[0]
if(J.B(h,"g"))s.i(0,f[1],q.length)
else if(J.B(h,"v")){h=H.aI(f[1],null)
e=H.aI(f[2],null)
d=H.aI(f[3],null)
c=new Float32Array(3)
c[0]=h
c[1]=e
c[2]=d
C.a.l(q,new T.w(c))}else if(J.B(h,"vt")){h=H.aI(f[1],null)
e=H.aI(f[2],null)
d=new Float32Array(2)
d[0]=h
d[1]=e
C.a.l(o,new T.F(d))}else if(J.B(h,"vn")){h=H.aI(f[1],null)
e=H.aI(f[2],null)
d=H.aI(f[3],null)
c=new Float32Array(3)
c[0]=h
c[1]=e
c[2]=d
C.a.l(p,new T.w(c))}else if(J.B(h,"f")){h=f.length
if(h!==4&&h!==5){H.bi("*** Error: face '"+g+"' not handled")
continue}b=[]
a=[]
a0=[]
for(a1=1;h=f.length,a1<h;++a1){a2=J.mw(f[a1],"/")
H.b(a2.length>0)
for(;a2.length<3;)C.a.l(a2,"")
a3=H.jv(a2[0],null,null)-1
a4=J.B(a2[1],"")?-1:H.jv(a2[1],null,null)-1
a5=J.B(a2[2],"")?-1:H.jv(a2[2],null,null)-1
if(a3<q.length)C.a.l(b,q[a3])
else C.a.l(b,new T.w(new Float32Array(3)))
if(a4!==-1&&a4<o.length)C.a.l(a0,o[a4])
else{H.bi("problem uv "+a1+" "+a4)
C.a.l(a0,new T.F(new Float32Array(2)))}if(a5!==-1&&a5<p.length)C.a.l(a,p[a5])
else{H.bi("problem normals "+a1+" "+a5)
C.a.l(a,new T.w(new Float32Array(3)))}}if(h===4)t.dh(b)
else t.bq(b)
t.bp("aNormal",a)
t.bo("aTexUV",a0)}}P.a8("loaded ("+P.kC(0,0,0,Date.now()-new P.ax(n,!1).a,0,0).k(0)+") "+t.k(0))
return t}}
var v=[C,H,J,P,W,B,G,R,D,A,T,U,Y]
setFunctionNamesIfNecessary(v)
var $={}
H.jl.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gv:function(a){return H.aH(a)},
k:function(a){return"Instance of '"+H.by(a)+"'"},
gB:function(a){return new H.aq(H.iG(a),null)}}
J.eU.prototype={
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
gB:function(a){return C.ar},
$isak:1}
J.eV.prototype={
A:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
gB:function(a){return C.al},
$isP:1}
J.br.prototype={
gv:function(a){return 0},
gB:function(a){return C.ak},
k:function(a){return String(a)},
$iskL:1}
J.fz.prototype={}
J.aM.prototype={}
J.aD.prototype={
k:function(a){var t=a[$.$get$kw()]
return t==null?this.de(a):J.bm(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjj:1}
J.aA.prototype={
l:function(a,b){if(!!a.fixed$length)H.G(P.u("add"))
a.push(b)},
P:function(a,b){var t,s,r,q,p
t=a.length
if(!!a.fixed$length)H.G(P.u("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.J)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.G(P.an(a)))
a.push(q)}},
ct:function(a,b){return new H.bs(a,b,[H.as(a,0),null])},
ao:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.e(a[s])
return t.join(b)},
u:function(a,b){return a[b]},
geF:function(a){if(a.length>0)return a[0]
throw H.c(H.eT())},
gb1:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.eT())},
bi:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.G(P.u("setRange"))
P.kX(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.G(P.aJ(e,0,null,"skipCount",null))
s=J.U(d)
if(e+t>s.gj(d))throw H.c(H.n8())
if(e<b)for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
bX:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.c(P.an(a))}return!1},
d7:function(a,b){if(!!a.immutable$list)H.G(P.u("sort"))
H.nr(a,P.nY())},
aH:function(a){return this.d7(a,null)},
C:function(a,b){var t
for(t=0;t<a.length;++t)if(J.B(a[t],b))return!0
return!1},
k:function(a){return P.eS(a,"[","]")},
gw:function(a){return new J.dR(a,a.length,0,null,[H.as(a,0)])},
gv:function(a){return H.aH(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.G(P.u("set length"))
if(b<0)throw H.c(P.aJ(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.ar(a,b))
if(b>=a.length||b<0)throw H.c(H.ar(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.G(P.u("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.ar(a,b))
if(b>=a.length||b<0)throw H.c(H.ar(a,b))
a[b]=c},
$iso:1,
$aso:function(){},
$isk:1,
$ish:1}
J.jk.prototype={}
J.dR.prototype={
gt:function(a){return this.d},
q:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.J(t))
r=this.c
if(r>=s){this.sby(null)
return!1}this.sby(t[r]);++this.c
return!0},
sby:function(a){this.d=a}}
J.b0.prototype={
V:function(a,b){var t
if(typeof b!=="number")throw H.c(H.M(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaA(b)
if(this.gaA(a)===t)return 0
if(this.gaA(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaA:function(a){return a===0?1/a<0:a<0},
el:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.c(P.u(""+a+".ceil()"))},
a6:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.u(""+a+".round()"))},
em:function(a,b,c){if(this.V(b,c)>0)throw H.c(H.M(b))
if(this.V(a,b)<0)return b
if(this.V(a,c)>0)return c
return a},
fa:function(a,b){var t
if(b>20)throw H.c(P.aJ(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaA(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
a8:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a+b},
ab:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a-b},
cT:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a/b},
J:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a*b},
aK:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bT(a,b)},
M:function(a,b){return(a|0)===a?a/b|0:this.bT(a,b)},
bT:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.u("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
aX:function(a,b){var t
if(a>0)t=this.e8(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
e8:function(a,b){return b>31?0:a>>>b},
cS:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return(a&b)>>>0},
dg:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return(a^b)>>>0},
aG:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a<b},
aF:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a>b},
cU:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a>=b},
gB:function(a){return C.au},
$isI:1,
$asI:function(){return[P.a7]},
$isZ:1,
$isa7:1}
J.cm.prototype={
gB:function(a){return C.at},
$isz:1}
J.cl.prototype={
gB:function(a){return C.as}}
J.aC.prototype={
c7:function(a,b){if(b<0)throw H.c(H.ar(a,b))
if(b>=a.length)H.G(H.ar(a,b))
return a.charCodeAt(b)},
ad:function(a,b){if(b>=a.length)throw H.c(H.ar(a,b))
return a.charCodeAt(b)},
a8:function(a,b){if(typeof b!=="string")throw H.c(P.ka(b,null,null))
return a+b},
d8:function(a,b){var t=H.E(a.split(b),[P.n])
return t},
d9:function(a,b,c){var t
if(c>a.length)throw H.c(P.aJ(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bk:function(a,b){return this.d9(a,b,0)},
aI:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.fE(b,null,null))
if(b>c)throw H.c(P.fE(b,null,null))
if(c>a.length)throw H.c(P.fE(c,null,null))
return a.substring(b,c)},
da:function(a,b){return this.aI(a,b,null)},
f9:function(a){return a.toLowerCase()},
fc:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.ad(t,0)===133){r=J.na(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.c7(t,q)===133?J.nb(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
ep:function(a,b,c){if(c>a.length)throw H.c(P.aJ(c,0,a.length,null,null))
return H.ok(a,b,c)},
V:function(a,b){var t
if(typeof b!=="string")throw H.c(H.M(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
k:function(a){return a},
gv:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gB:function(a){return C.am},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.ar(a,b))
return a[b]},
$iso:1,
$aso:function(){},
$isI:1,
$asI:function(){return[P.n]},
$isn:1}
H.k.prototype={}
H.b1.prototype={
gw:function(a){return new H.co(this,this.gj(this),0,null,[H.a6(this,"b1",0)])},
aD:function(a,b){return this.dd(0,b)},
f8:function(a,b){var t,s
t=H.E([],[H.a6(this,"b1",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.u(0,s)
return t},
f7:function(a){return this.f8(a,!0)}}
H.co.prototype={
gt:function(a){return this.d},
q:function(){var t,s,r,q
t=this.a
s=J.U(t)
r=s.gj(t)
if(this.b!==r)throw H.c(P.an(t))
q=this.c
if(q>=r){this.saf(null)
return!1}this.saf(s.u(t,q));++this.c
return!0},
saf:function(a){this.d=a}}
H.cq.prototype={
gw:function(a){return new H.f7(null,J.aU(this.a),this.b,this.$ti)},
gj:function(a){return J.bl(this.a)},
$asV:function(a,b){return[b]}}
H.eg.prototype={$isk:1,
$ask:function(a,b){return[b]}}
H.f7.prototype={
q:function(){var t=this.b
if(t.q()){this.saf(this.c.$1(t.gt(t)))
return!0}this.saf(null)
return!1},
gt:function(a){return this.a},
saf:function(a){this.a=a},
$asck:function(a,b){return[b]}}
H.bs.prototype={
gj:function(a){return J.bl(this.a)},
u:function(a,b){return this.b.$1(J.mh(this.a,b))},
$ask:function(a,b){return[b]},
$asb1:function(a,b){return[b]},
$asV:function(a,b){return[b]}}
H.cR.prototype={
gw:function(a){return new H.hs(J.aU(this.a),this.b,this.$ti)}}
H.hs.prototype={
q:function(){var t,s
for(t=this.a,s=this.b;t.q();)if(s.$1(t.gt(t)))return!0
return!1},
gt:function(a){var t=this.a
return t.gt(t)}}
H.b_.prototype={}
H.j0.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.j1.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.i8.prototype={
seR:function(a){this.z=a},
seU:function(a){this.ch=a}}
H.bb.prototype={
dG:function(){var t,s
t=this.e
s=t.a
this.c.l(0,s)
this.dM(s,t)},
bW:function(a,b){if(!this.f.A(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aZ()},
f1:function(a){var t,s,r,q,p
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
if(q===r.c)r.bM();++r.d}this.y=!1}this.aZ()},
ec:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.r(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
f0:function(a){var t,s,r
if(this.ch==null)return
for(t=J.r(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.G(P.u("removeRange"))
P.kX(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
d4:function(a,b){if(!this.r.A(0,a))return
this.db=b},
eK:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.H(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jr(null,null)
this.cx=t}t.X(0,new H.i2(a,c))},
eJ:function(a,b){var t
if(!this.r.A(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aB()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jr(null,null)
this.cx=t}t.X(0,this.geS())},
eL:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.a8(a)
if(b!=null)P.a8(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bm(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bH(t,t.r,null,null,[null]),r.c=t.e;r.q();)r.d.H(0,s)},
aj:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.N(o)
p=H.al(o)
this.eL(q,p)
if(this.db){this.aB()
if(this===u.globalState.e)throw o}}finally{this.cy=H.nT(r)
u.globalState.d=H.jR(t,"$isbb")
if(t!=null)$=t.geQ()
if(this.cx!=null)for(;n=this.cx,!n.gan(n);)this.cx.cv().$0()}return s},
cs:function(a){return this.b.h(0,a)},
dM:function(a,b){var t=this.b
if(t.G(0,a))throw H.c(P.cb("Registry: ports must be registered only once."))
t.i(0,a,b)},
aZ:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.aB()},
aB:function(){var t,s,r
t=this.cx
if(t!=null)t.Z(0)
for(t=this.b,s=t.gcO(t),s=s.gw(s);s.q();)s.gt(s).dO()
t.Z(0)
this.c.Z(0)
u.globalState.z.ap(0,this.a)
this.dx.Z(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].H(0,t[r+1])
this.ch=null}},
geQ:function(){return this.d},
geq:function(){return this.e}}
H.i2.prototype={
$0:function(){this.a.H(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hI.prototype={
ex:function(){var t=this.a
if(t.b===t.c)return
return t.cv()},
cz:function(){var t,s,r
t=this.ex()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.G(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gan(s)}else s=!1
else s=!1
else s=!1
if(s)H.G(P.cb("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gan(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aF(["command","close"])
r=new H.a4(!0,P.bc(null,P.z)).N(r)
s.toString
self.postMessage(r)}return!1}t.eZ()
return!0},
bR:function(){if(self.window!=null)new H.hJ(this).$0()
else for(;this.cz(););},
aq:function(){var t,s,r,q,p
if(!u.globalState.x)this.bR()
else try{this.bR()}catch(r){t=H.N(r)
s=H.al(r)
q=u.globalState.Q
p=P.aF(["command","error","msg",H.e(t)+"\n"+H.e(s)])
p=new H.a4(!0,P.bc(null,P.z)).N(p)
q.toString
self.postMessage(p)}}}
H.hJ.prototype={
$0:function(){if(!this.a.cz())return
P.nt(C.v,this)},
$S:function(){return{func:1,v:true}}}
H.aP.prototype={
eZ:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.aj(this.b)}}
H.i7.prototype={}
H.eQ.prototype={
$0:function(){H.n4(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eR.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.bh(s,{func:1,args:[P.P,P.P]}))s.$2(this.e,this.d)
else if(H.bh(s,{func:1,args:[P.P]}))s.$1(this.e)
else s.$0()}t.aZ()},
$S:function(){return{func:1,v:true}}}
H.hD.prototype={}
H.bd.prototype={
H:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.nF(b)
if(t.geq()===s){s=J.U(r)
switch(s.h(r,0)){case"pause":t.bW(s.h(r,1),s.h(r,2))
break
case"resume":t.f1(s.h(r,1))
break
case"add-ondone":t.ec(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.f0(s.h(r,1))
break
case"set-errors-fatal":t.d4(s.h(r,1),s.h(r,2))
break
case"ping":t.eK(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eJ(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ap(0,s)
break}return}u.globalState.f.a.X(0,new H.aP(t,new H.ia(this,r),"receive"))},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bd){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gv:function(a){return this.b.a}}
H.ia.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dK(0,this.b)},
$S:function(){return{func:1}}}
H.bS.prototype={
H:function(a,b){var t,s,r
t=P.aF(["command","message","port",this,"msg",b])
s=new H.a4(!0,P.bc(null,P.z)).N(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
A:function(a,b){var t,s
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
gv:function(a){return C.b.dg((this.b<<16^this.a<<8)>>>0,this.c)}}
H.cC.prototype={
dO:function(){this.c=!0
this.b=null},
dK:function(a,b){if(this.c)return
this.b.$1(b)},
$isnl:1}
H.ha.prototype={
dw:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.X(0,new H.aP(s,new H.hb(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.iC()
this.c=self.setTimeout(H.aR(new H.hc(this,b),0),a)}else{H.b(a>0)
throw H.c(P.u("Timer greater than 0."))}}}
H.hb.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.hc.prototype={
$0:function(){var t=this.a
t.c=null
H.iR()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.au.prototype={
gv:function(a){var t=this.a
t=C.b.aX(t,0)^C.b.M(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
A:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.au){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.a4.prototype={
N:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.r(a)
if(!!t.$isbw)return["buffer",a]
if(!!t.$isb4)return["typed",a]
if(!!t.$iso)return this.d0(a)
if(!!t.$isn1){r=this.gcY()
q=t.gD(a)
q=H.js(q,r,H.a6(q,"V",0),null)
q=P.kP(q,!0,H.a6(q,"V",0))
t=t.gcO(a)
t=H.js(t,r,H.a6(t,"V",0),null)
return["map",q,P.kP(t,!0,H.a6(t,"V",0))]}if(!!t.$iskL)return this.d1(a)
if(!!t.$isa)this.cM(a)
if(!!t.$isnl)this.ar(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbd)return this.d2(a)
if(!!t.$isbS)return this.d3(a)
if(!!t.$isaw){p=a.$static_name
if(p==null)this.ar(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isau)return["capability",a.a]
if(!(a instanceof P.H))this.cM(a)
return["dart",u.classIdExtractor(a),this.d_(u.classFieldsExtractor(a))]},
ar:function(a,b){throw H.c(P.u((b==null?"Can't transmit:":b)+" "+H.e(a)))},
cM:function(a){return this.ar(a,null)},
d0:function(a){var t
H.b(typeof a!=="string")
t=this.cZ(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ar(a,"Can't serialize indexable: ")},
cZ:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.N(a[s])
return t},
d_:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.N(a[t]))
return a},
d1:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ar(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.N(a[t[r]])
return["js-object",t,s]},
d3:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
d2:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aO.prototype={
a_:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.dQ("Bad serialized message: "+H.e(a)))
switch(C.a.geF(a)){case"ref":H.b(J.B(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.B(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.b(J.B(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.b(J.B(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
return J.aB(H.E(this.ai(t),[null]))
case"extendable":H.b(J.B(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.E(this.ai(t),[null])
case"mutable":H.b(J.B(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.ai(t)
case"const":H.b(J.B(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
return J.aB(H.E(this.ai(t),[null]))
case"map":return this.eA(a)
case"sendport":return this.eB(a)
case"raw sendport":H.b(J.B(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.ez(a)
case"function":H.b(J.B(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.b(J.B(a[0],"capability"))
return new H.au(a[1])
case"dart":H.b(J.B(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.l(this.b,q)
this.ai(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.e(a))}},
ai:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.a_(a[t]))
return a},
eA:function(a){var t,s,r,q,p
H.b(J.B(a[0],"map"))
t=a[1]
s=a[2]
r=P.p()
C.a.l(this.b,r)
t=J.mu(t,this.gey()).f7(0)
for(q=J.U(s),p=0;p<t.length;++p)r.i(0,t[p],this.a_(q.h(s,p)))
return r},
eB:function(a){var t,s,r,q,p,o,n
H.b(J.B(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cs(r)
if(o==null)return
n=new H.bd(o,s)}else n=new H.bS(t,r,s)
C.a.l(this.b,n)
return n},
ez:function(a){var t,s,r,q,p,o
H.b(J.B(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.U(t),p=J.U(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.a_(p.h(s,o))
return r}}
H.fH.prototype={}
H.hg.prototype={
T:function(a){var t,s,r
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
H.fp.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.e(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eY.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.e(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.e(this.a)+")"}}
H.hl.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.j2.prototype={
$1:function(a){if(!!J.r(a).$isaZ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.di.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isb7:1}
H.iM.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iN.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iO.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iP.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iQ.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.aw.prototype={
k:function(a){return"Closure '"+H.by(this).trim()+"'"},
$isjj:1,
gfe:function(){return this},
$D:null}
H.h5.prototype={}
H.fT.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bn.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bn))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var t,s
t=this.c
if(t==null)s=H.aH(this.a)
else s=typeof t!=="object"?J.bk(t):H.aH(t)
return(s^H.aH(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.by(t)+"'")}}
H.hi.prototype={
k:function(a){return this.a}}
H.dW.prototype={
k:function(a){return this.a}}
H.fL.prototype={
k:function(a){return"RuntimeError: "+H.e(this.a)}}
H.hx.prototype={
k:function(a){return C.h.a8("Assertion failed: ",P.ca(this.a))}}
H.aq.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gv:function(a){return J.bk(this.a)},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aq){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ac.prototype={
gj:function(a){return this.a},
gan:function(a){return this.a===0},
gD:function(a){return new H.f0(this,[H.as(this,0)])},
gcO:function(a){return H.js(this.gD(this),new H.eX(this),H.as(this,0),H.as(this,1))},
G:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bJ(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bJ(s,b)}else return this.eN(b)},
eN:function(a){var t=this.d
if(t==null)return!1
return this.am(this.aw(t,this.al(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ag(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ag(r,b)
return s==null?null:s.b}else return this.eO(b)},
eO:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aw(t,this.al(a))
r=this.am(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aU()
this.b=t}this.bA(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aU()
this.c=s}this.bA(s,b,c)}else{r=this.d
if(r==null){r=this.aU()
this.d=r}q=this.al(b)
p=this.aw(r,q)
if(p==null)this.aW(r,q,[this.aV(b,c)])
else{o=this.am(p,b)
if(o>=0)p[o].b=c
else p.push(this.aV(b,c))}}},
ap:function(a,b){if(typeof b==="string")return this.bQ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bQ(this.c,b)
else return this.eP(b)},
eP:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.aw(t,this.al(a))
r=this.am(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bU(q)
return q.b},
Z:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aT()}},
ak:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.an(this))
t=t.c}},
bA:function(a,b,c){var t=this.ag(a,b)
if(t==null)this.aW(a,b,this.aV(b,c))
else t.b=c},
bQ:function(a,b){var t
if(a==null)return
t=this.ag(a,b)
if(t==null)return
this.bU(t)
this.bK(a,b)
return t.b},
aT:function(){this.r=this.r+1&67108863},
aV:function(a,b){var t,s
t=new H.f_(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.aT()
return t},
bU:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.aT()},
al:function(a){return J.bk(a)&0x3ffffff},
am:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.B(a[s].a,b))return s
return-1},
k:function(a){return P.kQ(this)},
ag:function(a,b){return a[b]},
aw:function(a,b){return a[b]},
aW:function(a,b,c){H.b(c!=null)
a[b]=c},
bK:function(a,b){delete a[b]},
bJ:function(a,b){return this.ag(a,b)!=null},
aU:function(){var t=Object.create(null)
this.aW(t,"<non-identifier-key>",t)
this.bK(t,"<non-identifier-key>")
return t},
$isn1:1}
H.eX.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.f_.prototype={}
H.f0.prototype={
gj:function(a){return this.a.a},
gw:function(a){var t,s
t=this.a
s=new H.f1(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.f1.prototype={
gt:function(a){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.an(t))
else{t=this.c
if(t==null){this.sbz(null)
return!1}else{this.sbz(t.a)
this.c=this.c.c
return!0}}},
sbz:function(a){this.d=a}}
H.iI.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.iJ.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.n]}}}
H.iK.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.n]}}}
H.eW.prototype={
k:function(a){return"RegExp/"+this.a+"/"},
gbO:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.kN(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
dV:function(a,b){var t,s
t=this.gbO()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return H.nE(this,s)}}
H.i9.prototype={
dI:function(a,b){var t,s
t=this.b
s=t.input
H.b(typeof s==="string")
t=t.index
H.b(typeof t==="number"&&Math.floor(t)===t)},
h:function(a,b){return this.b[b]}}
H.bw.prototype={
gB:function(a){return C.ad},
$isbw:1}
H.b4.prototype={$isb4:1}
H.ff.prototype={
gB:function(a){return C.ae}}
H.ct.prototype={
gj:function(a){return a.length},
$iso:1,
$aso:function(){},
$ist:1,
$ast:function(){}}
H.cu.prototype={
h:function(a,b){H.aj(b,a,a.length)
return a[b]},
i:function(a,b,c){H.aj(b,a,a.length)
a[b]=c},
$isk:1,
$ask:function(){return[P.Z]},
$asb_:function(){return[P.Z]},
$asl:function(){return[P.Z]},
$ish:1,
$ash:function(){return[P.Z]}}
H.cv.prototype={
i:function(a,b,c){H.aj(b,a,a.length)
a[b]=c},
$isk:1,
$ask:function(){return[P.z]},
$asb_:function(){return[P.z]},
$asl:function(){return[P.z]},
$ish:1,
$ash:function(){return[P.z]}}
H.cs.prototype={
gB:function(a){return C.af},
$iseG:1}
H.fg.prototype={
gB:function(a){return C.ag}}
H.fh.prototype={
gB:function(a){return C.ah},
h:function(a,b){H.aj(b,a,a.length)
return a[b]}}
H.fi.prototype={
gB:function(a){return C.ai},
h:function(a,b){H.aj(b,a,a.length)
return a[b]},
$iskI:1}
H.fj.prototype={
gB:function(a){return C.aj},
h:function(a,b){H.aj(b,a,a.length)
return a[b]}}
H.fk.prototype={
gB:function(a){return C.an},
h:function(a,b){H.aj(b,a,a.length)
return a[b]},
$isle:1}
H.fl.prototype={
gB:function(a){return C.ao},
h:function(a,b){H.aj(b,a,a.length)
return a[b]},
$islf:1}
H.cw.prototype={
gB:function(a){return C.ap},
gj:function(a){return a.length},
h:function(a,b){H.aj(b,a,a.length)
return a[b]}}
H.fm.prototype={
gB:function(a){return C.aq},
gj:function(a){return a.length},
h:function(a,b){H.aj(b,a,a.length)
return a[b]},
$islg:1}
H.bJ.prototype={}
H.bK.prototype={}
H.bL.prototype={}
H.bM.prototype={}
P.hz.prototype={
$1:function(a){var t,s
H.iR()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.hy.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.iC()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.hA.prototype={
$0:function(){H.iR()
this.a.$0()},
$S:function(){return{func:1}}}
P.hB.prototype={
$0:function(){H.iR()
this.a.$0()},
$S:function(){return{func:1}}}
P.a1.prototype={}
P.eL.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.c)this.d.L(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.c)this.d.L(t.c,t.d)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.eK.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.b]=a
if(s===0)this.c.bI(r)}else if(t.b===0&&!this.e)this.c.L(t.c,t.d)},
$S:function(a){return{func:1,args:[,]}}}
P.jf.prototype={}
P.hE.prototype={
eo:function(a,b){if(a==null)a=new P.b5()
if(this.a.a!==0)throw H.c(P.cI("Future already completed"))
$.x.toString
this.L(a,b)},
en:function(a){return this.eo(a,null)}}
P.cT.prototype={
az:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.cI("Future already completed"))
t.bC(b)},
L:function(a,b){this.a.bD(a,b)}}
P.io.prototype={
az:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.cI("Future already completed"))
t.aP(b)},
L:function(a,b){this.a.L(a,b)}}
P.d0.prototype={
eV:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.b6(this.d,a.a)},
eI:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.bh(s,{func:1,args:[P.H,P.b7]}))return t.f2(s,a.a,a.b)
else return t.b6(s,a.a)}}
P.L.prototype={
b8:function(a,b){var t,s,r
t=$.x
if(t!==C.d){t.toString
if(b!=null)b=P.nK(b,t)}s=new P.L(0,t,null,[null])
r=b==null?1:3
this.bB(new P.d0(null,s,r,a,b,[H.as(this,0),null]))
return s},
b7:function(a){return this.b8(a,null)},
aM:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
bB:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.jR(this.c,"$isd0")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.bB(a)
return}this.aM(t)}H.b(this.a>=4)
t=this.b
t.toString
P.bf(null,null,t,new P.hO(this,a))}},
bP:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bP(a)
return}this.aM(s)}H.b(this.a>=4)
t.a=this.ay(a)
s=this.b
s.toString
P.bf(null,null,s,new P.hW(t,this))}},
ax:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.ay(t)},
ay:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aP:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.bW(a,"$isa1",t,"$asa1")
if(s){t=H.bW(a,"$isL",t,null)
if(t)P.hR(a,this)
else P.li(a,this)}else{r=this.ax()
H.b(this.a<4)
this.a=4
this.c=a
P.ba(this,r)}},
bI:function(a){var t
H.b(this.a<4)
H.b(!J.r(a).$isa1)
t=this.ax()
H.b(this.a<4)
this.a=4
this.c=a
P.ba(this,t)},
L:function(a,b){var t
H.b(this.a<4)
t=this.ax()
H.b(this.a<4)
this.a=8
this.c=new P.aV(a,b)
P.ba(this,t)},
dQ:function(a){return this.L(a,null)},
bC:function(a){var t
H.b(this.a<4)
t=H.bW(a,"$isa1",this.$ti,"$asa1")
if(t){this.dN(a)
return}H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bf(null,null,t,new P.hQ(this,a))},
dN:function(a){var t=H.bW(a,"$isL",this.$ti,null)
if(t){if(a.a===8){H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bf(null,null,t,new P.hV(this,a))}else P.hR(a,this)
return}P.li(a,this)},
bD:function(a,b){var t
H.b(this.a<4)
H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bf(null,null,t,new P.hP(this,a,b))},
$isa1:1,
gaY:function(){return this.a},
ge5:function(){return this.c}}
P.hO.prototype={
$0:function(){P.ba(this.a,this.b)},
$S:function(){return{func:1}}}
P.hW.prototype={
$0:function(){P.ba(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hS.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.aP(a)},
$S:function(a){return{func:1,args:[,]}}}
P.hT.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.L(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.hU.prototype={
$0:function(){this.a.L(this.b,this.c)},
$S:function(){return{func:1}}}
P.hQ.prototype={
$0:function(){this.a.bI(this.b)},
$S:function(){return{func:1}}}
P.hV.prototype={
$0:function(){P.hR(this.b,this.a)},
$S:function(){return{func:1}}}
P.hP.prototype={
$0:function(){this.a.L(this.b,this.c)},
$S:function(){return{func:1}}}
P.hZ.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.cw(q.d)}catch(n){s=H.N(n)
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
p.b=q.c}else p.b=new P.aV(s,r)
p.a=!0
return}if(!!J.r(t).$isa1){if(t instanceof P.L&&t.gaY()>=4){if(t.gaY()===8){q=t
H.b(q.gaY()===8)
p=this.b
p.b=q.ge5()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.b7(new P.i_(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.i_.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.hY.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.b6(r.d,this.c)}catch(q){t=H.N(q)
s=H.al(q)
r=this.a
r.b=new P.aV(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hX.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.eV(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eI(t)
p.a=!1}}catch(o){s=H.N(o)
r=H.al(o)
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
P.cS.prototype={}
P.fY.prototype={
gj:function(a){var t,s
t={}
s=new P.L(0,$.x,null,[P.z])
t.a=0
this.eT(new P.h_(t),!0,new P.h0(t,s),s.gdP())
return s}}
P.h_.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.h0.prototype={
$0:function(){this.b.aP(this.a.a)},
$S:function(){return{func:1}}}
P.fZ.prototype={}
P.jy.prototype={}
P.aV.prototype={
k:function(a){return H.e(this.a)},
$isaZ:1}
P.is.prototype={}
P.iv.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.b5()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.ic.prototype={
f3:function(a){var t,s,r
try{if(C.d===$.x){a.$0()
return}P.lo(null,null,this,a)}catch(r){t=H.N(r)
s=H.al(r)
P.iu(null,null,this,t,s)}},
f4:function(a,b){var t,s,r
try{if(C.d===$.x){a.$1(b)
return}P.lp(null,null,this,a,b)}catch(r){t=H.N(r)
s=H.al(r)
P.iu(null,null,this,t,s)}},
ei:function(a){return new P.ie(this,a)},
b_:function(a){return new P.id(this,a)},
ej:function(a){return new P.ig(this,a)},
h:function(a,b){return},
cw:function(a){if($.x===C.d)return a.$0()
return P.lo(null,null,this,a)},
b6:function(a,b){if($.x===C.d)return a.$1(b)
return P.lp(null,null,this,a,b)},
f2:function(a,b,c){if($.x===C.d)return a.$2(b,c)
return P.nL(null,null,this,a,b,c)}}
P.ie.prototype={
$0:function(){return this.a.cw(this.b)},
$S:function(){return{func:1}}}
P.id.prototype={
$0:function(){return this.a.f3(this.b)},
$S:function(){return{func:1}}}
P.ig.prototype={
$1:function(a){return this.a.f4(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.i5.prototype={
al:function(a){return H.oe(a)&0x3ffffff},
am:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.i3.prototype={
gw:function(a){var t=new P.bH(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
C:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dR(b)},
dR:function(a){var t=this.d
if(t==null)return!1
return this.av(t[this.au(a)],a)>=0},
cs:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.C(0,a)?a:null
else return this.e_(a)},
e_:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.au(a)]
r=this.av(s,a)
if(r<0)return
return J.aT(s,r).gdT()},
l:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.jJ()
this.b=t}return this.bF(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.jJ()
this.c=s}return this.bF(s,b)}else return this.X(0,b)},
X:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.jJ()
this.d=t}s=this.au(b)
r=t[s]
if(r==null){q=[this.aO(b)]
H.b(q!=null)
t[s]=q}else{if(this.av(r,b)>=0)return!1
r.push(this.aO(b))}return!0},
ap:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bG(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bG(this.c,b)
else return this.e0(0,b)},
e0:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.au(b)]
r=this.av(s,b)
if(r<0)return!1
this.bH(s.splice(r,1)[0])
return!0},
Z:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aN()}},
bF:function(a,b){var t
if(a[b]!=null)return!1
t=this.aO(b)
H.b(!0)
a[b]=t
return!0},
bG:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bH(t)
delete a[b]
return!0},
aN:function(){this.r=this.r+1&67108863},
aO:function(a){var t,s
t=new P.i4(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.aN()
return t},
bH:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.aN()},
au:function(a){return J.bk(a)&0x3ffffff},
av:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.B(a[s].a,b))return s
return-1}}
P.i4.prototype={
gdT:function(){return this.a}}
P.bH.prototype={
gt:function(a){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.an(t))
else{t=this.c
if(t==null){this.sae(null)
return!1}else{this.sae(t.a)
this.c=this.c.b
return!0}}},
sae:function(a){this.d=a}}
P.i1.prototype={}
P.jp.prototype={$isk:1}
P.cn.prototype={$isk:1,$ish:1}
P.l.prototype={
gw:function(a){return new H.co(a,this.gj(a),0,null,[H.a6(a,"l",0)])},
u:function(a,b){return this.h(a,b)},
ct:function(a,b){return new H.bs(a,b,[H.a6(a,"l",0),null])},
eG:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.c(P.an(a))}return s},
k:function(a){return P.eS(a,"[","]")}}
P.cp.prototype={}
P.f6.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.e(a)
t.a=s+": "
t.a+=H.e(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.b3.prototype={
ak:function(a,b){var t,s
for(t=J.aU(this.gD(a));t.q();){s=t.gt(t)
b.$2(s,this.h(a,s))}},
gj:function(a){return J.bl(this.gD(a))},
k:function(a){return P.kQ(a)}}
P.f2.prototype={
dr:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sbS(H.E(t,[b]))},
gw:function(a){return new P.i6(this,this.c,this.d,this.b,null,this.$ti)},
gan:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
u:function(a,b){var t,s
t=this.gj(this)
if(0>b||b>=t)H.G(P.D(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
Z:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eS(this,"{","}")},
cv:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.eT());++this.d
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
if(this.b===t)this.bM();++this.d},
bM:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.E(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bi(s,0,q,t,r)
C.a.bi(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbS(s)},
sbS:function(a){this.a=a}}
P.i6.prototype={
gt:function(a){return this.e},
q:function(){var t,s
t=this.a
if(this.c!==t.d)H.G(P.an(t))
s=this.d
if(s===this.b){this.sae(null)
return!1}this.sae(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sae:function(a){this.e=a}}
P.fN.prototype={
P:function(a,b){var t
for(t=J.aU(b);t.q();)this.l(0,t.gt(t))},
k:function(a){return P.eS(this,"{","}")},
$isk:1}
P.fM.prototype={}
P.bI.prototype={}
P.ak.prototype={}
P.I.prototype={}
P.ax.prototype={
geW:function(){return this.a},
dj:function(a,b){var t
if(Math.abs(this.a)<=864e13)t=!1
else t=!0
if(t)throw H.c(P.dQ("DateTime is outside valid range: "+this.geW()))},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.ax))return!1
return this.a===b.a&&this.b===b.b},
V:function(a,b){return C.b.V(this.a,b.a)},
gv:function(a){var t=this.a
return(t^C.b.aX(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.mQ(H.nk(this))
s=P.c3(H.ni(this))
r=P.c3(H.ne(this))
q=P.c3(H.nf(this))
p=P.c3(H.nh(this))
o=P.c3(H.nj(this))
n=P.mR(H.ng(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isI:1,
$asI:function(){return[P.ax]}}
P.Z.prototype={}
P.az.prototype={
aG:function(a,b){return C.b.aG(this.a,b.gdS())},
aF:function(a,b){return C.b.aF(this.a,b.gdS())},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.az))return!1
return this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
V:function(a,b){return C.b.V(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.ee()
s=this.a
if(s<0)return"-"+new P.az(0-s).k(0)
r=t.$1(C.b.M(s,6e7)%60)
q=t.$1(C.b.M(s,1e6)%60)
p=new P.ed().$1(s%1e6)
return""+C.b.M(s,36e8)+":"+H.e(r)+":"+H.e(q)+"."+H.e(p)},
$isI:1,
$asI:function(){return[P.az]}}
P.ed.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.n,args:[P.z]}}}
P.ee.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.n,args:[P.z]}}}
P.aZ.prototype={}
P.c0.prototype={
k:function(a){return"Assertion failed"}}
P.b5.prototype={
k:function(a){return"Throw of null."}}
P.aa.prototype={
gaR:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaQ:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.e(t)
q=this.gaR()+s+r
if(!this.a)return q
p=this.gaQ()
o=P.ca(this.b)
return q+p+": "+H.e(o)}}
P.cB.prototype={
gaR:function(){return"RangeError"},
gaQ:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.e(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.e(t)
else if(r>t)s=": Not in range "+H.e(t)+".."+H.e(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.e(t)}return s}}
P.eP.prototype={
gaR:function(){return"RangeError"},
gaQ:function(){H.b(this.a)
if(J.lY(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gj:function(a){return this.f}}
P.hm.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.hk.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.b8.prototype={
k:function(a){return"Bad state: "+this.a}}
P.dY.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.ca(t))+"."}}
P.cH.prototype={
k:function(a){return"Stack Overflow"},
$isaZ:1}
P.e6.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.jh.prototype={}
P.hN.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.e(t)}}
P.eJ.prototype={
k:function(a){var t,s,r
t=this.a
s=t!=null&&""!==t?"FormatException: "+H.e(t):"FormatException"
r=this.b
if(typeof r!=="string")return s
if(r.length>78)r=C.h.aI(r,0,75)+"..."
return s+"\n"+r}}
P.ei.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.G(P.ka(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kU(b,"expando$values")
return s==null?null:H.kU(s,t)},
k:function(a){return"Expando:"+H.e(this.b)}}
P.z.prototype={}
P.V.prototype={
aD:function(a,b){return new H.cR(this,b,[H.a6(this,"V",0)])},
gj:function(a){var t,s
H.b(!this.$isk)
t=this.gw(this)
for(s=0;t.q();)++s
return s},
ga2:function(a){var t,s
t=this.gw(this)
if(!t.q())throw H.c(H.eT())
s=t.gt(t)
if(t.q())throw H.c(H.n9())
return s},
u:function(a,b){var t,s,r
if(b<0)H.G(P.aJ(b,0,null,"index",null))
for(t=this.gw(this),s=0;t.q();){r=t.gt(t)
if(b===s)return r;++s}throw H.c(P.D(b,this,"index",null,s))},
k:function(a){return P.n7(this,"(",")")}}
P.ck.prototype={}
P.h.prototype={$isk:1}
P.b2.prototype={}
P.P.prototype={
gv:function(a){return P.H.prototype.gv.call(this,this)},
k:function(a){return"null"}}
P.a7.prototype={$isI:1,
$asI:function(){return[P.a7]}}
P.H.prototype={constructor:P.H,$isH:1,
A:function(a,b){return this===b},
gv:function(a){return H.aH(this)},
k:function(a){return"Instance of '"+H.by(this)+"'"},
gB:function(a){return new H.aq(H.iG(this),null)},
toString:function(){return this.k(this)}}
P.jx.prototype={}
P.b7.prototype={}
P.n.prototype={$isI:1,
$asI:function(){return[P.n]}}
P.bA.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga3:function(){return this.a}}
P.jB.prototype={}
W.j.prototype={}
W.c_.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gE:function(a){return a.z}}
W.dN.prototype={
gj:function(a){return a.length}}
W.dO.prototype={
k:function(a){return String(a)}}
W.dP.prototype={
k:function(a){return String(a)}}
W.at.prototype={$isat:1}
W.c1.prototype={
cV:function(a,b,c){var t=this.dW(a,b,P.nW(c,null))
return t},
dW:function(a,b,c){return a.getContext(b,c)}}
W.dV.prototype={
aE:function(a){return P.iz(a.getContextAttributes())}}
W.av.prototype={
gj:function(a){return a.length}}
W.dZ.prototype={
gj:function(a){return a.length}}
W.e_.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
W.e0.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gE:function(a){return a.z}}
W.e1.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gE:function(a){return a.z}}
W.aX.prototype={
bE:function(a,b){var t,s
t=$.$get$kv()
s=t[b]
if(typeof s==="string")return s
s=this.e9(a,b)
t[b]=s
return s},
e9:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mS()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.e2.prototype={}
W.a_.prototype={}
W.aY.prototype={}
W.e3.prototype={
gj:function(a){return a.length}}
W.e4.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gE:function(a){return a.z}}
W.e5.prototype={
gj:function(a){return a.length}}
W.e7.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.e8.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gE:function(a){return a.z}}
W.c4.prototype={}
W.ay.prototype={
ed:function(a,b){return a.adoptNode(b)},
cW:function(a,b){return a.getElementById(b)},
cu:function(a,b){return a.querySelector(b)},
$isay:1}
W.e9.prototype={
k:function(a){return String(a)}}
W.c5.prototype={
eu:function(a,b){return a.createHTMLDocument(b)}}
W.ea.prototype={
gaC:function(a){return a.w},
gn:function(a){return a.x},
gp:function(a){return a.y},
gE:function(a){return a.z}}
W.c6.prototype={
gaC:function(a){return a.w},
gn:function(a){return a.x},
gp:function(a){return a.y},
gE:function(a){return a.z}}
W.c7.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[P.W]},
$isk:1,
$ask:function(){return[P.W]},
$ist:1,
$ast:function(){return[P.W]},
$asl:function(){return[P.W]},
$ish:1,
$ash:function(){return[P.W]},
$asm:function(){return[P.W]}}
W.c8.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.ga7(a))+" x "+H.e(this.ga5(a))},
A:function(a,b){var t
if(b==null)return!1
t=J.r(b)
if(!t.$isW)return!1
return a.left===t.gcq(b)&&a.top===t.gcC(b)&&this.ga7(a)===t.ga7(b)&&this.ga5(a)===t.ga5(b)},
gv:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga7(a)
q=this.ga5(a)
return W.lm(W.aQ(W.aQ(W.aQ(W.aQ(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga5:function(a){return a.height},
gcq:function(a){return a.left},
gcC:function(a){return a.top},
ga7:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
$isW:1,
$asW:function(){}}
W.eb.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[P.n]},
$isk:1,
$ask:function(){return[P.n]},
$ist:1,
$ast:function(){return[P.n]},
$asl:function(){return[P.n]},
$ish:1,
$ash:function(){return[P.n]},
$asm:function(){return[P.n]}}
W.ec.prototype={
gj:function(a){return a.length}}
W.a0.prototype={
geg:function(a){return new W.hH(a)},
k:function(a){return a.localName},
eM:function(a,b,c,d,e){var t,s
t=this.R(a,c,d,e)
switch(b.toLowerCase()){case"beforebegin":J.k3(a.parentNode,t,a)
break
case"afterbegin":s=a.childNodes
this.cp(a,t,s.length>0?s[0]:null)
break
case"beforeend":this.S(a,t)
break
case"afterend":J.k3(a.parentNode,t,a.nextSibling)
break
default:H.G(P.dQ("Invalid position "+b))}},
R:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kE
if(t==null){t=H.E([],[W.cy])
s=new W.cz(t)
C.a.l(t,W.lj(null))
C.a.l(t,W.ln())
$.kE=s
d=s}else d=t
t=$.kD
if(t==null){t=new W.dt(d)
$.kD=t
c=t}else{t.a=d
c=t}}if($.ao==null){t=document
s=t.implementation
s=(s&&C.K).eu(s,"")
$.ao=s
$.jg=s.createRange()
s=$.ao
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.ao.head;(t&&C.L).S(t,r)}t=$.ao
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jR(s,"$isat")}t=$.ao
if(!!this.$isat)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.ao.body;(t&&C.o).S(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.C(C.V,a.tagName)){t=$.jg;(t&&C.D).cX(t,q)
t=$.jg
p=(t&&C.D).er(t,b)}else{q.innerHTML=b
p=$.ao.createDocumentFragment()
for(t=J.i(p);s=q.firstChild,s!=null;)t.S(p,s)}t=$.ao.body
if(q==null?t!=null:q!==t)J.k4(q)
c.bg(p)
C.m.ed(document,p)
return p},
es:function(a,b,c){return this.R(a,b,c,null)},
d6:function(a,b,c,d){a.textContent=null
this.S(a,this.R(a,b,c,d))},
d5:function(a,b){return this.d6(a,b,null,null)},
a9:function(a,b){return a.getAttribute(b)},
e1:function(a,b){return a.removeAttribute(b)},
$isa0:1,
gf5:function(a){return a.tagName}}
W.eh.prototype={
$1:function(a){return!!J.r(a).$isa0},
$S:function(a){return{func:1,args:[,]}}}
W.f.prototype={}
W.d.prototype={
dL:function(a,b,c,d){return a.addEventListener(b,H.aR(c,1),!1)}}
W.eD.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cc]},
$isk:1,
$ask:function(){return[W.cc]},
$ist:1,
$ast:function(){return[W.cc]},
$asl:function(){return[W.cc]},
$ish:1,
$ash:function(){return[W.cc]},
$asm:function(){return[W.cc]}}
W.eE.prototype={
gj:function(a){return a.length}}
W.eI.prototype={
gj:function(a){return a.length}}
W.eM.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gE:function(a){return a.z}}
W.ch.prototype={}
W.eN.prototype={
gj:function(a){return a.length}}
W.bp.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.q]},
$isk:1,
$ask:function(){return[W.q]},
$ist:1,
$ast:function(){return[W.q]},
$asl:function(){return[W.q]},
$ish:1,
$ash:function(){return[W.q]},
$asm:function(){return[W.q]}}
W.ci.prototype={}
W.cj.prototype={
fg:function(a,b,c,d,e,f){return a.open(b,c)},
eY:function(a,b,c){return a.open(b,c)},
H:function(a,b){return a.send(b)}}
W.bq.prototype={}
W.aE.prototype={$isaE:1}
W.f4.prototype={
k:function(a){return String(a)}}
W.f5.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gE:function(a){return a.z}}
W.fa.prototype={
gj:function(a){return a.length}}
W.fc.prototype={
ff:function(a,b,c){return a.send(b,c)},
H:function(a,b){return a.send(b)}}
W.bv.prototype={}
W.fd.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cr]},
$isk:1,
$ask:function(){return[W.cr]},
$ist:1,
$ast:function(){return[W.cr]},
$asl:function(){return[W.cr]},
$ish:1,
$ash:function(){return[W.cr]},
$asm:function(){return[W.cr]}}
W.O.prototype={$isO:1}
W.S.prototype={
ga2:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.c(P.cI("No elements"))
if(s>1)throw H.c(P.cI("More than one element"))
return t.firstChild},
P:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.i(s),p=0;p<r;++p)q.S(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.m0(t,c,C.B.h(t.childNodes,b))},
gw:function(a){var t=this.a.childNodes
return new W.cd(t,t.length,-1,null,[H.a6(t,"m",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.B.h(this.a.childNodes,b)},
$ask:function(){return[W.q]},
$ascn:function(){return[W.q]},
$asl:function(){return[W.q]},
$ash:function(){return[W.q]},
$asbI:function(){return[W.q]}}
W.q.prototype={
f_:function(a){var t=a.parentNode
if(t!=null)J.j3(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.dc(a):t},
S:function(a,b){return a.appendChild(b)},
cp:function(a,b,c){return a.insertBefore(b,c)},
e2:function(a,b){return a.removeChild(b)},
e3:function(a,b,c){return a.replaceChild(b,c)},
$isq:1,
gb4:function(a){return a.previousSibling}}
W.cx.prototype={
b5:function(a){return a.previousNode()}}
W.bx.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.q]},
$isk:1,
$ask:function(){return[W.q]},
$ist:1,
$ast:function(){return[W.q]},
$asl:function(){return[W.q]},
$ish:1,
$ash:function(){return[W.q]},
$asm:function(){return[W.q]}}
W.ae.prototype={
gj:function(a){return a.length}}
W.fA.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.ae]},
$isk:1,
$ask:function(){return[W.ae]},
$ist:1,
$ast:function(){return[W.ae]},
$asl:function(){return[W.ae]},
$ish:1,
$ash:function(){return[W.ae]},
$asm:function(){return[W.ae]}}
W.fD.prototype={
H:function(a,b){return a.send(b)}}
W.cA.prototype={
er:function(a,b){return a.createContextualFragment(b)},
cX:function(a,b){return a.selectNodeContents(b)}}
W.cD.prototype={
H:function(a,b){return a.send(b)}}
W.b6.prototype={$isb6:1,
gj:function(a){return a.length}}
W.ap.prototype={}
W.fP.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cF]},
$isk:1,
$ask:function(){return[W.cF]},
$ist:1,
$ast:function(){return[W.cF]},
$asl:function(){return[W.cF]},
$ish:1,
$ash:function(){return[W.cF]},
$asm:function(){return[W.cF]}}
W.fR.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cG]},
$isk:1,
$ask:function(){return[W.cG]},
$ist:1,
$ast:function(){return[W.cG]},
$asl:function(){return[W.cG]},
$ish:1,
$ash:function(){return[W.cG]},
$asm:function(){return[W.cG]}}
W.af.prototype={
gj:function(a){return a.length}}
W.fW.prototype={
h:function(a,b){return this.bL(a,b)},
ak:function(a,b){var t,s
for(t=0;!0;++t){s=this.dZ(a,t)
if(s==null)return
b.$2(s,this.bL(a,s))}},
gD:function(a){var t=H.E([],[P.n])
this.ak(a,new W.fX(t))
return t},
gj:function(a){return a.length},
bL:function(a,b){return a.getItem(b)},
dZ:function(a,b){return a.key(b)},
$asb3:function(){return[P.n,P.n]}}
W.fX.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.cK.prototype={
R:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aJ(a,b,c,d)
t=W.mT("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.S(s).P(0,new W.S(t))
return s}}
W.h3.prototype={
R:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aJ(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.I.R(t.createElement("table"),b,c,d)
t.toString
t=new W.S(t)
r=t.ga2(t)
r.toString
t=new W.S(r)
q=t.ga2(t)
s.toString
q.toString
new W.S(s).P(0,new W.S(q))
return s}}
W.h4.prototype={
R:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aJ(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.I.R(t.createElement("table"),b,c,d)
t.toString
t=new W.S(t)
r=t.ga2(t)
s.toString
r.toString
new W.S(s).P(0,new W.S(r))
return s}}
W.bB.prototype={$isbB:1}
W.h6.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cM]},
$isk:1,
$ask:function(){return[W.cM]},
$ist:1,
$ast:function(){return[W.cM]},
$asl:function(){return[W.cM]},
$ish:1,
$ash:function(){return[W.cM]},
$asm:function(){return[W.cM]}}
W.h7.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cL]},
$isk:1,
$ask:function(){return[W.cL]},
$ist:1,
$ast:function(){return[W.cL]},
$asl:function(){return[W.cL]},
$ish:1,
$ash:function(){return[W.cL]},
$asm:function(){return[W.cL]}}
W.h9.prototype={
gj:function(a){return a.length}}
W.aK.prototype={$isaK:1}
W.hd.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cP]},
$isk:1,
$ask:function(){return[W.cP]},
$ist:1,
$ast:function(){return[W.cP]},
$asl:function(){return[W.cP]},
$ish:1,
$ash:function(){return[W.cP]},
$asm:function(){return[W.cP]}}
W.he.prototype={
gj:function(a){return a.length}}
W.cQ.prototype={
b5:function(a){return a.previousNode()}}
W.aL.prototype={}
W.hn.prototype={
k:function(a){return String(a)}}
W.hp.prototype={
gn:function(a){return a.x},
gE:function(a){return a.z}}
W.hq.prototype={
gj:function(a){return a.length}}
W.hr.prototype={
H:function(a,b){return a.send(b)}}
W.aN.prototype={
gew:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.u("deltaY is not supported"))},
$isaN:1}
W.bF.prototype={
gef:function(a){var t,s
t=P.a7
s=new P.L(0,$.x,null,[t])
this.dU(a)
this.e4(a,W.ls(new W.ht(new P.io(s,[t]))))
return s},
e4:function(a,b){return a.requestAnimationFrame(H.aR(b,1))},
dU:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ht.prototype={
$1:function(a){this.a.az(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.jE.prototype={}
W.hF.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.c2]},
$isk:1,
$ask:function(){return[W.c2]},
$ist:1,
$ast:function(){return[W.c2]},
$asl:function(){return[W.c2]},
$ish:1,
$ash:function(){return[W.c2]},
$asm:function(){return[W.c2]}}
W.hG.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
A:function(a,b){var t
if(b==null)return!1
t=J.r(b)
if(!t.$isW)return!1
return a.left===t.gcq(b)&&a.top===t.gcC(b)&&a.width===t.ga7(b)&&a.height===t.ga5(b)},
gv:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.lm(W.aQ(W.aQ(W.aQ(W.aQ(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga5:function(a){return a.height},
ga7:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y}}
W.i0.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cf]},
$isk:1,
$ask:function(){return[W.cf]},
$ist:1,
$ast:function(){return[W.cf]},
$asl:function(){return[W.cf]},
$ish:1,
$ash:function(){return[W.cf]},
$asm:function(){return[W.cf]}}
W.d7.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.q]},
$isk:1,
$ask:function(){return[W.q]},
$ist:1,
$ast:function(){return[W.q]},
$asl:function(){return[W.q]},
$ish:1,
$ash:function(){return[W.q]},
$asm:function(){return[W.q]}}
W.ik.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.af]},
$isk:1,
$ask:function(){return[W.af]},
$ist:1,
$ast:function(){return[W.af]},
$asl:function(){return[W.af]},
$ish:1,
$ash:function(){return[W.af]},
$asm:function(){return[W.af]}}
W.il.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cJ]},
$isk:1,
$ask:function(){return[W.cJ]},
$ist:1,
$ast:function(){return[W.cJ]},
$asl:function(){return[W.cJ]},
$ish:1,
$ash:function(){return[W.cJ]},
$asm:function(){return[W.cJ]}}
W.hC.prototype={
ak:function(a,b){var t,s,r,q,p,o
for(t=this.gD(this),s=t.length,r=this.a,q=J.i(r),p=0;p<t.length;t.length===s||(0,H.J)(t),++p){o=t[p]
b.$2(o,q.a9(r,o))}},
gD:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.E([],[P.n])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
$ascp:function(){return[P.n,P.n]},
$asb3:function(){return[P.n,P.n]},
gdX:function(){return this.a}}
W.hH.prototype={
h:function(a,b){return J.jc(this.a,b)},
gj:function(a){return this.gD(this).length}}
W.hK.prototype={
eT:function(a,b,c,d){return W.a3(this.a,this.b,a,!1,H.as(this,0))}}
W.jH.prototype={}
W.hL.prototype={
dE:function(a,b,c,d,e){this.eb()},
eb:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.m_(r,this.c,t,!1)}}}
W.hM.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.bG.prototype={
dF:function(a){var t,s
t=$.$get$jI()
if(t.gan(t)){for(s=0;s<262;++s)t.i(0,C.U[s],W.o3())
for(s=0;s<12;++s)t.i(0,C.r[s],W.o4())}},
a4:function(a){return $.$get$lk().C(0,W.bo(a))},
Y:function(a,b,c){var t,s,r
t=W.bo(a)
s=$.$get$jI()
r=s.h(0,H.e(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)}}
W.m.prototype={
gw:function(a){return new W.cd(a,this.gj(a),-1,null,[H.a6(a,"m",0)])}}
W.cz.prototype={
a4:function(a){return C.a.bX(this.a,new W.fo(a))},
Y:function(a,b,c){return C.a.bX(this.a,new W.fn(a,b,c))}}
W.fo.prototype={
$1:function(a){return a.a4(this.a)},
$S:function(a){return{func:1,args:[,]}}}
W.fn.prototype={
$1:function(a){return a.Y(this.a,this.b,this.c)},
$S:function(a){return{func:1,args:[,]}}}
W.bN.prototype={
dJ:function(a,b,c,d){var t,s,r
this.a.P(0,c)
t=b.aD(0,new W.ii())
s=b.aD(0,new W.ij())
this.b.P(0,t)
r=this.c
r.P(0,C.A)
r.P(0,s)},
a4:function(a){return this.a.C(0,W.bo(a))},
Y:function(a,b,c){var t,s
t=W.bo(a)
s=this.c
if(s.C(0,H.e(t)+"::"+b))return this.d.ee(c)
else if(s.C(0,"*::"+b))return this.d.ee(c)
else{s=this.b
if(s.C(0,H.e(t)+"::"+b))return!0
else if(s.C(0,"*::"+b))return!0
else if(s.C(0,H.e(t)+"::*"))return!0
else if(s.C(0,"*::*"))return!0}return!1}}
W.ii.prototype={
$1:function(a){return!C.a.C(C.r,a)},
$S:function(a){return{func:1,args:[,]}}}
W.ij.prototype={
$1:function(a){return C.a.C(C.r,a)},
$S:function(a){return{func:1,args:[,]}}}
W.ip.prototype={
Y:function(a,b,c){if(this.df(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jc(a,"template")==="")return this.e.C(0,b)
return!1}}
W.iq.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)},
$S:function(a){return{func:1,args:[,]}}}
W.im.prototype={
a4:function(a){var t=J.r(a)
if(!!t.$isbz)return!1
t=!!t.$isv
if(t&&W.bo(a)==="foreignObject")return!1
if(t)return!0
return!1},
Y:function(a,b,c){if(b==="is"||C.h.bk(b,"on"))return!1
return this.a4(a)}}
W.cd.prototype={
q:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbN(J.aT(this.a,t))
this.c=t
return!0}this.sbN(null)
this.c=s
return!1},
gt:function(a){return this.d},
sbN:function(a){this.d=a}}
W.cy.prototype={}
W.jt.prototype={}
W.jD.prototype={}
W.ih.prototype={}
W.dt.prototype={
bg:function(a){new W.ir(this).$2(a,null)},
ah:function(a,b){if(b==null)J.k4(a)
else J.j3(b,a)},
e7:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.mk(a)
r=J.jc(s.gdX(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.N(n)}p="element unprintable"
try{p=J.bm(a)}catch(n){H.N(n)}try{o=W.bo(a)
this.e6(a,b,t,p,o,s,r)}catch(n){if(H.N(n) instanceof P.aa)throw n
else{this.ah(a,b)
window
m="Removing corrupted element "+H.e(p)
if(typeof console!="undefined")window.console.warn(m)}}},
e6:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.ah(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!this.a.a4(a)){this.ah(a,b)
window
t="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!this.a.Y(a,"is",g)){this.ah(a,b)
window
t="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gD(f)
s=H.E(t.slice(0),[H.as(t,0)])
for(r=f.gD(f).length-1,t=f.a,q=J.i(t);r>=0;--r){p=s[r]
if(!this.a.Y(a,J.mA(p),q.a9(t,p))){window
o="Removing disallowed attribute <"+H.e(e)+" "+p+'="'+H.e(q.a9(t,p))+'">'
if(typeof console!="undefined")window.console.warn(o)
q.a9(t,p)
q.e1(t,p)}}if(!!J.r(a).$isbB)this.bg(a.content)}}
W.ir.prototype={
$2:function(a,b){var t,s,r,q
r=this.a
switch(a.nodeType){case 1:r.e7(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.ah(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.ml(t)}catch(q){H.N(q)
r=t
J.j3(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(a,b){return{func:1,v:true,args:[W.q,W.q]}}}
W.cU.prototype={}
W.cV.prototype={}
W.cW.prototype={}
W.cX.prototype={}
W.cY.prototype={}
W.cZ.prototype={}
W.d_.prototype={}
W.d1.prototype={}
W.d2.prototype={}
W.d5.prototype={}
W.d6.prototype={}
W.d8.prototype={}
W.d9.prototype={}
W.dc.prototype={}
W.dd.prototype={}
W.bO.prototype={}
W.bP.prototype={}
W.de.prototype={}
W.df.prototype={}
W.dj.prototype={}
W.dm.prototype={}
W.dn.prototype={}
W.bQ.prototype={}
W.bR.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dD.prototype={}
P.hu.prototype={
cn:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}C.a.l(t,a)
C.a.l(this.b,null)
return s},
b9:function(a){var t,s,r,q,p,o,n,m,l,k
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.ax(s,!0)
r.dj(s,!0)
return r}if(a instanceof RegExp)throw H.c(P.jC("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.nX(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.cn(a)
r=this.b
o=r[p]
t.a=o
if(o!=null)return o
o=P.p()
t.a=o
r[p]=o
this.eH(a,new P.hw(t,this))
return t.a}if(a instanceof Array){n=a
p=this.cn(n)
r=this.b
o=r[p]
if(o!=null)return o
m=J.U(n)
l=m.gj(n)
o=this.c?new Array(l):n
r[p]=o
for(r=J.aS(o),k=0;k<l;++k)r.i(o,k,this.b9(m.h(n,k)))
return o}return a}}
P.hw.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.b9(b)
J.lZ(t,a,s)
return s},
$S:function(a,b){return{func:1,args:[,,]}}}
P.iw.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.hv.prototype={
eH:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.J)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.ix.prototype={
$1:function(a){return this.a.az(0,a)},
$S:function(a){return{func:1,args:[,]}}}
P.iy.prototype={
$1:function(a){return this.a.en(a)},
$S:function(a){return{func:1,args:[,]}}}
P.ib.prototype={}
P.W.prototype={}
P.ej.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ek.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.el.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.em.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.en.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eo.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ep.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eq.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.er.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.es.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.et.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eu.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ev.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ew.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gE:function(a){return a.z}}
P.ex.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ey.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gE:function(a){return a.z}}
P.ez.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eA.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eF.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eH.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.a2.prototype={}
P.ab.prototype={}
P.eO.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return this.a0(a,b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a0:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.jo]},
$asl:function(){return[P.jo]},
$ish:1,
$ash:function(){return[P.jo]},
$asm:function(){return[P.jo]}}
P.f8.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.fq.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return this.a0(a,b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a0:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.ju]},
$asl:function(){return[P.ju]},
$ish:1,
$ash:function(){return[P.ju]},
$asm:function(){return[P.ju]}}
P.fx.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.fB.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.fC.prototype={
gj:function(a){return a.length}}
P.fF.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.fG.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.bz.prototype={$isbz:1}
P.h1.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return this.a0(a,b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a0:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.n]},
$asl:function(){return[P.n]},
$ish:1,
$ash:function(){return[P.n]},
$asm:function(){return[P.n]}}
P.v.prototype={
R:function(a,b,c,d){var t,s,r,q,p,o
t=H.E([],[W.cy])
C.a.l(t,W.lj(null))
C.a.l(t,W.ln())
C.a.l(t,new W.im())
c=new W.dt(new W.cz(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.o).es(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.S(q)
o=t.ga2(t)
for(t=J.i(p);r=o.firstChild,r!=null;)t.S(p,r)
return p},
$isv:1}
P.h2.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.bC.prototype={}
P.bD.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.hf.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return this.a0(a,b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a0:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.jA]},
$asl:function(){return[P.jA]},
$ish:1,
$ash:function(){return[P.jA]},
$asm:function(){return[P.jA]}}
P.ho.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.d3.prototype={}
P.d4.prototype={}
P.da.prototype={}
P.db.prototype={}
P.dk.prototype={}
P.dl.prototype={}
P.dr.prototype={}
P.ds.prototype={}
P.dS.prototype={
gj:function(a){return a.length}}
P.dT.prototype={
gj:function(a){return a.length}}
P.aW.prototype={}
P.fr.prototype={
gj:function(a){return a.length}}
P.fJ.prototype={
bV:function(a,b){return a.activeTexture(b)},
bY:function(a,b,c){return a.attachShader(b,c)},
bZ:function(a,b,c){return a.bindBuffer(b,c)},
c_:function(a,b,c){return a.bindFramebuffer(b,c)},
c0:function(a,b,c){return a.bindTexture(b,c)},
c1:function(a,b){return a.blendEquation(b)},
c2:function(a,b,c){return a.blendFunc(b,c)},
c3:function(a,b,c,d){return a.bufferData(b,c,d)},
c4:function(a,b){return a.checkFramebufferStatus(b)},
c5:function(a,b){return a.clear(b)},
c6:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c8:function(a,b){return a.compileShader(b)},
c9:function(a){return a.createBuffer()},
ca:function(a){return a.createFramebuffer()},
cb:function(a){return a.createProgram()},
cc:function(a,b){return a.createShader(b)},
cd:function(a){return a.createTexture()},
cf:function(a,b){return a.depthMask(b)},
cg:function(a,b){return a.disable(b)},
ci:function(a,b,c,d){return a.drawArrays(b,c,d)},
cj:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ck:function(a,b){return a.enable(b)},
cl:function(a,b){return a.enableVertexAttribArray(b)},
co:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aE:function(a){return P.iz(a.getContextAttributes())},
ba:function(a){return a.getError()},
bb:function(a,b){return a.getProgramInfoLog(b)},
bc:function(a,b,c){return a.getProgramParameter(b,c)},
bd:function(a,b){return a.getShaderInfoLog(b)},
be:function(a,b,c){return a.getShaderParameter(b,c)},
bf:function(a,b,c){return a.getUniformLocation(b,c)},
cr:function(a,b){return a.linkProgram(b)},
bj:function(a,b,c){return a.shaderSource(b,c)},
bl:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cA:function(a,b,c,d){return a.texParameterf(b,c,d)},
cB:function(a,b,c,d){return a.texParameteri(b,c,d)},
cD:function(a,b,c){return a.uniform1f(b,c)},
cE:function(a,b,c){return a.uniform1fv(b,c)},
cF:function(a,b,c){return a.uniform1i(b,c)},
cG:function(a,b,c){return a.uniform1iv(b,c)},
cH:function(a,b,c){return a.uniform2fv(b,c)},
cI:function(a,b,c){return a.uniform3fv(b,c)},
cJ:function(a,b,c){return a.uniform4fv(b,c)},
cK:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cL:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cN:function(a,b){return a.useProgram(b)},
cP:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cR:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fK.prototype={
eh:function(a,b){return a.beginTransformFeedback(b)},
ek:function(a,b){return a.bindVertexArray(b)},
ev:function(a){return a.createVertexArray()},
eC:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eD:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eE:function(a){return a.endTransformFeedback()},
f6:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
fb:function(a,b,c,d){this.ea(a,b,c,d)
return},
ea:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
fd:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bV:function(a,b){return a.activeTexture(b)},
bY:function(a,b,c){return a.attachShader(b,c)},
bZ:function(a,b,c){return a.bindBuffer(b,c)},
c_:function(a,b,c){return a.bindFramebuffer(b,c)},
c0:function(a,b,c){return a.bindTexture(b,c)},
c1:function(a,b){return a.blendEquation(b)},
c2:function(a,b,c){return a.blendFunc(b,c)},
c3:function(a,b,c,d){return a.bufferData(b,c,d)},
c4:function(a,b){return a.checkFramebufferStatus(b)},
c5:function(a,b){return a.clear(b)},
c6:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c8:function(a,b){return a.compileShader(b)},
c9:function(a){return a.createBuffer()},
ca:function(a){return a.createFramebuffer()},
cb:function(a){return a.createProgram()},
cc:function(a,b){return a.createShader(b)},
cd:function(a){return a.createTexture()},
cf:function(a,b){return a.depthMask(b)},
cg:function(a,b){return a.disable(b)},
ci:function(a,b,c,d){return a.drawArrays(b,c,d)},
cj:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ck:function(a,b){return a.enable(b)},
cl:function(a,b){return a.enableVertexAttribArray(b)},
co:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aE:function(a){return P.iz(a.getContextAttributes())},
ba:function(a){return a.getError()},
bb:function(a,b){return a.getProgramInfoLog(b)},
bc:function(a,b,c){return a.getProgramParameter(b,c)},
bd:function(a,b){return a.getShaderInfoLog(b)},
be:function(a,b,c){return a.getShaderParameter(b,c)},
bf:function(a,b,c){return a.getUniformLocation(b,c)},
cr:function(a,b){return a.linkProgram(b)},
bj:function(a,b,c){return a.shaderSource(b,c)},
bl:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cA:function(a,b,c,d){return a.texParameterf(b,c,d)},
cB:function(a,b,c,d){return a.texParameteri(b,c,d)},
cD:function(a,b,c){return a.uniform1f(b,c)},
cE:function(a,b,c){return a.uniform1fv(b,c)},
cF:function(a,b,c){return a.uniform1i(b,c)},
cG:function(a,b,c){return a.uniform1iv(b,c)},
cH:function(a,b,c){return a.uniform2fv(b,c)},
cI:function(a,b,c){return a.uniform3fv(b,c)},
cJ:function(a,b,c){return a.uniform4fv(b,c)},
cK:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cL:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cN:function(a,b){return a.useProgram(b)},
cP:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cR:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return P.iz(this.dY(a,b))},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
dY:function(a,b){return a.item(b)},
$isk:1,
$ask:function(){return[P.b2]},
$asl:function(){return[P.b2]},
$ish:1,
$ash:function(){return[P.b2]},
$asm:function(){return[P.b2]}}
P.dg.prototype={}
P.dh.prototype={}
B.iW.prototype={
$1:function(a){$.$get$iA().i(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.aE]}}}
B.iX.prototype={
$1:function(a){$.$get$iA().i(0,a.which,null)},
$S:function(a){return{func:1,args:[W.aE]}}}
B.iY.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.nU=t
$.nV=C.b.ab(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jU=s-C.b.M(window.innerWidth,2)
$.lP=-(t-C.b.M(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.O]}}}
B.iZ.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bY=t-C.b.M(window.innerWidth,2)
$.bZ=-(s-C.b.M(window.innerHeight,2))
if(a.button===2)$.$get$bX().i(0,"right",!0)
else $.$get$bX().i(0,"left",!0)},
$S:function(a){return{func:1,args:[W.O]}}}
B.j_.prototype={
$1:function(a){if(a.button===2)$.$get$bX().i(0,"right",null)
else $.$get$bX().i(0,"left",null)},
$S:function(a){return{func:1,args:[W.O]}}}
B.fs.prototype={
ds:function(a,b,c,d){var t
W.a3(d,W.mU(d),new B.ft(this),!1,W.aN)
W.a3(d,"mousemove",new B.fu(this),!1,W.O)
t=W.aK
W.a3(d,"touchstart",new B.fv(),!1,t)
W.a3(d,"touchmove",new B.fw(this),!1,t)
B.oi(null)}}
B.ft.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.av.gew(a)*r.k3
if(C.c.ab(r.fy,t)>0)r.fy=C.c.ab(r.fy,t)}catch(q){s=H.N(q)
P.a8(s)}},
$S:function(a){return{func:1,args:[W.aN]}}}
B.fu.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.ab($.jU,$.bY)*0.01
s=t.id
r=$.bZ
q=$.lP
t.id=s+(r-q)*0.01
$.bY=$.jU
$.bZ=q}},
$S:function(a){return{func:1,args:[W.O]}}}
B.fv.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a6(t.clientX)
C.c.a6(t.clientY)
$.bY=s
C.c.a6(t.clientX)
$.bZ=C.c.a6(t.clientY)},
$S:function(a){return{func:1,args:[W.aK]}}}
B.fw.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a6(t.clientX)
t=C.c.a6(t.clientY)
r=this.a
r.go=r.go+C.b.ab(s,$.bY)*0.01
r.id=r.id+($.bZ-t)*0.01
$.bY=s
$.bZ=t},
$S:function(a){return{func:1,args:[W.aK]}}}
G.fe.prototype={}
G.A.prototype={
m:function(a,b){var t=this.d
if(H.Y(!t.G(0,a)))H.a5("uniform "+a+" already set")
t.i(0,a,b)},
bu:function(){return this.d},
k:function(a){var t,s,r,q
t=H.E(["{"+new H.aq(H.iG(this),null).k(0)+"}["+this.a+"]"],[P.n])
for(s=this.d,r=s.gD(s),r=r.gw(r);r.q();){q=r.gt(r)
C.a.l(t,H.e(q)+": "+H.e(s.h(0,q)))}return C.a.ao(t,"\n")}}
G.dU.prototype={}
G.dX.prototype={
cm:function(a,b,c){J.mi(this.a,b)
if(c>0)J.mH(this.a,b,c)},
cQ:function(a,b,c,d,e,f,g,h){J.j5(this.a,34962,b)
J.mI(this.a,c,d,e,!1,g,h)}}
G.ce.prototype={
dm:function(a,b,c,d,e){var t,s,r
t=this.a
s=J.m8(t.a)
this.b=s
J.j6(t.a,36160,s)
s=this.c
if(s!=null){s=s.b
J.k0(t.a,36160,36064,3553,s,0)}s=this.d
if(s!=null){s=s.b
J.k0(t.a,36160,36096,3553,s,0)}r=J.m4(t.a,36160)
s=r===36053
if(H.Y(s))H.a5("framebuffer error: "+H.e(r))
if(!s)throw H.c("Error Incomplete Framebuffer: "+H.e(r))
J.j6(t.a,36160,null)},
bm:function(a,b,c,d,e){var t,s
t=this.a
s=this.b
J.j6(t.a,36160,s)
H.b(d>0&&e>0)
J.mJ(t.a,b,c,d,e)
if(a!==0)J.m5(t.a,a)}}
G.eB.prototype={}
G.eC.prototype={}
G.cg.prototype={
at:function(a){var t=this.e
H.b(!t.G(0,a))
H.b(C.h.bk(a,"a"))
switch($.$get$T().h(0,a).a){case"vec2":t.i(0,a,H.E([],[T.F]))
break
case"vec3":t.i(0,a,H.E([],[T.w]))
break
case"vec4":t.i(0,a,H.E([],[T.ai]))
break
case"float":t.i(0,a,H.E([],[P.Z]))
break
case"uvec4":t.i(0,a,H.E([],[[P.h,P.z]]))
break
default:if(H.Y(!1))H.a5("unknown type for "+a)}},
dh:function(a){var t,s,r,q,p,o
H.b(a.length===3)
t=this.d
s=t.length
C.a.l(this.b,new G.eB(s,s+1,s+2))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.J)(a),++q){p=a[q]
o=new T.w(new Float32Array(3))
o.a1(p)
C.a.l(t,o)}},
bo:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.J)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.l(t,new T.F(o))}},
bp:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.J)(b),++q){p=b[q]
o=new T.w(new Float32Array(3))
o.a1(p)
r.l(t,o)}},
bq:function(a){var t,s,r,q,p,o
H.b(a.length===4)
t=this.d
s=t.length
C.a.l(this.c,new G.eC(s,s+1,s+2,s+3))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.J)(a),++q){p=a[q]
o=new T.w(new Float32Array(3))
o.a1(p)
C.a.l(t,o)}},
dn:function(){var t,s,r,q,p,o,n,m,l
t=this.b
H.b(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.E(r,[P.z])
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
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gD(s),r=r.gw(r);r.q();){q=r.gt(r)
p=$.$get$T().h(0,q).a
C.a.l(t,H.e(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.ao(t," ")}}
G.cO.prototype={}
G.cN.prototype={}
G.f9.prototype={}
G.fb.prototype={
br:function(a,b,c){var t,s
if(C.h.ad(a,0)===105){if(H.Y(C.b.aK(b.length,c)===this.z))H.a5("ChangeAttribute "+this.z)}else{t=C.b.aK(b.length,c)
if(H.Y(t===(this.ch.length/3|0)))H.a5("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.j5(t.a,34962,s)
J.jZ(t.a,34962,b,35048)},
dq:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
ac:function(a,b,c){var t,s,r,q,p,o
t=J.jW(a,0)===105
if(t&&this.z===0)this.z=C.b.aK(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.j8(r.a))
this.br(a,b,c)
q=$.$get$T().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.Y(p.G(0,a)))H.a5("unexpected attribute "+a)
o=p.h(0,a)
J.dK(r.a,this.e)
r.cm(0,o,t?1:0)
r.cQ(0,s.h(0,a),o,q.bt(),5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gD(t),r=r.gw(r);r.q();){q=r.gt(r)
C.a.l(s,H.e(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.ao(s,"  ")},
saS:function(a){this.cx=a}}
G.fy.prototype={
di:function(a,b){var t=C.b.cT(a,b)
if(this.z===t)return
this.z=t
this.bw()},
bw:function(){var t,s,r,q,p,o,n
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
t.aa(0,0,1/(p*s))
t.aa(1,1,1/p)
t.aa(2,2,(q+r)/o)
t.aa(3,2,-1)
t.aa(2,3,2*r*q/o)},
bu:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.w(new Float32Array(3))
o.U(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.a1(t)
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
k=r?s.gaC(n):1
if(!!s.$isw){j=s.gn(n)
m=s.gp(n)
l=s.gE(n)
n=j}else if(r){j=s.gn(n)
m=s.gp(n)
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
a3.a1(this.db)
a3.eX(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fI.prototype={
dt:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.J)(t),++o){n=t[o]
r.i(0,n,J.k2(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.J)(t),++o){n=t[o]
r.i(0,n,J.k2(q.a,p,n))}},
dA:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gD(s),s=s.gw(s);s.q();){q=s.gt(s)
if(!t.G(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bH(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.q();){q=s.d
if(!t.C(0,q))C.a.l(r,q)}return r},
dD:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gD(b),s=s.gw(s),r=this.d,q=this.y,p=this.z,o=0;s.q();){n=s.gt(s)
switch(J.jW(n,0)){case 117:if(q.G(0,n)){m=b.h(0,n)
if(p.G(0,n))H.bi("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$T().h(0,n)
if(l==null)H.G("unknown "+n)
H.b(q.G(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.jd(r.a,k,m)
else if(!!J.r(m).$iskI)J.mF(r.a,k,m)
break
case"float":if(l.c===0)J.mD(r.a,k,m)
else if(!!J.r(m).$iseG)J.mE(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.am(m,"$isad").a
J.k9(r.a,k,!1,n)}else if(!!J.r(m).$iseG)J.k9(r.a,k,!1,m)
else if(H.Y(!1))H.a5("bad unform: "+n)
break
case"mat3":if(l.c===0){n=H.am(m,"$isbt").a
J.k8(r.a,k,!1,n)}else if(!!J.r(m).$iseG)J.k8(r.a,k,!1,m)
else if(H.Y(!1))H.a5("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.k7(j,k,H.am(m,"$isai").a)
else J.k7(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.k6(j,k,H.am(m,"$isw").a)
else J.k6(j,k,m)
break
case"vec2":n=l.c
j=r.a
if(n===0)J.k5(j,k,H.am(m,"$isF").a)
else J.k5(j,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.a8(33984,this.ch)
J.jX(r.a,n)
n=H.am(m,"$isbE").b
J.dJ(r.a,3553,n)
n=this.ch
J.jd(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.a8(33984,this.ch)
J.jX(r.a,n)
n=H.am(m,"$isbE").b
J.dJ(r.a,34067,n)
n=this.ch
J.jd(r.a,k,n)
this.ch=this.ch+1
break
default:H.bi("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.B(m,!0)
j=r.a
if(n)J.dL(j,2929)
else J.j9(j,2929)
break
case"cStencilFunc":H.am(m,"$iscO")
n=m.a
j=r.a
if(n===1281)J.j9(j,2960)
else{J.dL(j,2960)
j=m.b
i=m.c
J.mx(r.a,n,j,i)}break
case"cDepthWrite":J.mc(r.a,m)
break
case"cBlendEquation":H.am(m,"$iscN")
n=m.a
j=r.a
if(n===1281)J.j9(j,3042)
else{J.dL(j,3042)
j=m.b
i=m.c
J.m3(r.a,j,i)
J.m2(r.a,n)}break}++o
break}}h=P.kC(0,0,0,Date.now()-new P.ax(t,!1).a,0,0)
""+o
h.k(0)},
dk:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.mG(t.a,this.r)
this.ch=0
this.z.Z(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.J)(b),++r){q=b[r]
this.dD(q.a,q.bu())}s=this.Q
s.Z(0)
for(p=a.cy,p=p.gD(p),p=p.gw(p);p.q();)s.l(0,p.gt(p))
o=this.dA()
if(o.length!==0)P.a8("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(o)))
s=a.d
p=a.e
J.dK(s.a,p)
n=this.e.f.length>0
p=a.f
s=a.dq()
m=a.Q
l=a.z
if(n)J.m1(t.a,p)
if(m!==-1){k=t.a
if(l>1)J.mg(k,p,s,m,0,l)
else J.mf(k,p,s,m,0)}else{m=t.a
if(l>1)J.me(m,p,0,s,l)
else J.md(m,p,0,s)}if(n)J.mj(t.a)},
bs:function(a,b){return this.dk(a,b,null)}}
G.y.prototype={
bt:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.fO.prototype={
bn:function(a){var t,s,r,q,p
H.b(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.J)(a),++q){p=a[q]
H.b($.$get$T().G(0,p))
H.b(!C.a.C(s,p))
C.a.l(s,p)
r.i(0,p,this.r);++this.r}C.a.aH(s)},
I:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.J)(a),++r){q=a[r]
if(H.Y($.$get$T().G(0,q)))H.a5("missing uniform "+q)
H.b(!C.a.C(s,q))
C.a.l(s,q)}C.a.aH(s)},
F:function(a){var t,s,r
H.b(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.b($.$get$T().G(0,r))
H.b(!C.a.C(t,r))
C.a.l(t,r)}C.a.aH(t)},
bv:function(a,b){H.b(this.b==null)
this.b=this.bx(!0,a,b)},
aL:function(a){return this.bv(a,null)},
du:function(a,b){H.b(this.b==null)
this.b=this.bx(!1,a,b)},
O:function(a){return this.du(a,null)},
bx:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.J)(t),++o){n=t[o]
m=$.$get$T().h(0,n)
C.a.l(q,"layout (location="+H.e(p.h(0,n))+") in "+m.a+" "+H.e(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.J)(t),++o){k=t[o]
m=$.$get$T().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.J)(t),++o){k=t[o]
m=$.$get$T().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.J)(t),++o){k=t[o]
m=$.$get$T().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.e(k)+j+";")}C.a.l(q,"")
if(c!=null)C.a.P(q,c)
if(a)C.a.l(q,"void main(void) {")
C.a.P(q,b)
if(a)C.a.l(q,"}")
return C.a.ao(q,"\n")}}
G.fQ.prototype={}
G.h8.prototype={}
G.bE.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.hj.prototype={
dz:function(a,b,c,d,e,f){var t,s,r,q,p
t=this.d
s=this.c
J.dJ(t.a,s,this.b)
J.mz(t.a,3553,1,this.x,this.f,this.r)
r=this.e
q=r.e
if(q!==1)J.my(t.a,s,34046,q)
q=r.r
J.dM(t.a,s,10240,q)
q=r.f
J.dM(t.a,s,10241,q)
if(r.b){J.dM(t.a,s,10242,33071)
J.dM(t.a,s,10243,33071)}r.c
p=J.mq(t.a)
if(H.Y(p===0))H.a5("texture error "+H.e(p))
J.dJ(t.a,s,null)},
k:function(a){return"TypedTexture["+this.a+", "+this.x+", "+H.e(this.f)+" X "+H.e(this.r)+"]"}}
R.fU.prototype={
dv:function(a,b,c){var t,s,r
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
J.j4(this.a,s)
r=this.dH(b,c,90,30)
this.d=r
J.j4(this.a,r)
t=t.createElement("div")
this.c=t
J.j4(this.a,t)},
dH:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.nz("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.u).bE(r,"float")
r.setProperty(p,"left","")
p=C.u.bE(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.p.S(t,s)}return t}}
R.fV.prototype={
dC:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.x.fa(s,2)+" fps"
t=this.c;(t&&C.p).d5(t,b)
r=C.b.M(30*C.x.el(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.p).S(t,q)},
dB:function(a){return this.dC(a,"")}}
D.f3.prototype={
$1:function(a){this.a.az(0,W.nG(this.b.response))},
$S:function(a){return{func:1,args:[,]}}}
A.iH.prototype={
$2:function(a,b){var t=536870911&a+J.bk(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.z,P.H]}}}
T.bt.prototype={
k:function(a){return"[0] "+this.W(0).k(0)+"\n[1] "+this.W(1).k(0)+"\n[2] "+this.W(2).k(0)+"\n"},
h:function(a,b){return this.a[b]},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.bt){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gv:function(a){return A.dG(this.a)},
W:function(a){var t,s
t=new Float32Array(3)
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.w(t)},
bh:function(a,b){var t=this.a
t[0]=t[0]*b
t[1]=t[1]*b
t[2]=t[2]*b
t[3]=t[3]*b
t[4]=t[4]*b
t[5]=t[5]*b
t[6]=t[6]*b
t[7]=t[7]*b
t[8]=t[8]*b}}
T.ad.prototype={
aa:function(a,b,c){H.b(a<4)
H.b(b<4)
this.a[b*4+a]=c},
a1:function(a){var t,s
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
k:function(a){return"[0] "+this.W(0).k(0)+"\n[1] "+this.W(1).k(0)+"\n[2] "+this.W(2).k(0)+"\n[3] "+this.W(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ad){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gv:function(a){return A.dG(this.a)},
W:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.ai(t)},
as:function(){var t=this.a
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
eX:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.F.prototype={
K:function(a,b){var t=this.a
t[0]=a
t[1]=b},
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.F){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gv:function(a){return A.dG(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gn:function(a){return this.a[0]},
gp:function(a){return this.a[1]}}
T.w.prototype={
U:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
a1:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.w){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gv:function(a){return A.dG(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){return Math.sqrt(this.gb2())},
gb2:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
b3:function(a){var t,s,r
t=Math.sqrt(this.gb2())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
b0:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
ce:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.w(new Float32Array(3))
t.U(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
gn:function(a){return this.a[0]},
gp:function(a){return this.a[1]},
gE:function(a){return this.a[2]}}
T.ai.prototype={
k:function(a){var t=this.a
return H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+","+H.e(t[3])},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ai){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gv:function(a){return A.dG(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gn:function(a){return this.a[0]},
gp:function(a){return this.a[1]},
gE:function(a){return this.a[2]},
gaC:function(a){return this.a[3]}}
U.ef.prototype={
dl:function(a,b,c){$.$get$c9().i(0,this.c.a,this)}}
U.iS.prototype={
$1:function(b8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
t=this.a
t.b=b8+0
s=this.b
s.go+=0.01
r=s.k4
if(r.h(0,37)!=null)s.go+=0.03
else if(r.h(0,39)!=null)s.go-=0.03
if(r.h(0,38)!=null)s.id+=0.03
else if(r.h(0,40)!=null)s.id-=0.03
if(r.h(0,33)!=null)s.fy*=0.99
else if(r.h(0,34)!=null)s.fy*=1.01
if(r.h(0,32)!=null){s.go=0
s.id=0}r=C.c.em(s.id,-1.4707963267948965,1.4707963267948965)
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
l=m[12]
k=m[13]
j=m[14]
i=new T.w(new Float32Array(3))
i.U(0,1,0)
r=s.e
q=r.a
q[0]=m[12]
q[1]=m[13]
q[2]=m[14]
q=new Float32Array(3)
h=new T.w(q)
h.a1(r)
q[0]=q[0]-p[0]
q[1]=q[1]-p[1]
q[2]=q[2]-p[2]
h.b3(0)
g=i.ce(h)
g.b3(0)
f=h.ce(g)
f.b3(0)
p=g.b0(r)
n=f.b0(r)
r=h.b0(r)
e=g.a
d=e[0]
c=f.a
b=c[0]
a=q[0]
a0=e[1]
a1=c[1]
a2=q[1]
e=e[2]
c=c[2]
q=q[2]
m[15]=1
m[14]=-r
m[13]=-n
m[12]=-p
m[11]=0
m[10]=q
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
m[12]=l
m[13]=k
m[14]=j
d=s.f
b=d.a
b[0]=m[2]
b[1]=m[6]
b[2]=m[10]
s=-s.k1
a3=Math.sqrt(d.gb2())
l=b[0]/a3
k=b[1]/a3
j=b[2]/a3
a4=Math.cos(s)
a5=Math.sin(s)
a6=1-a4
a7=l*l*a6+a4
s=j*a5
a8=l*k*a6-s
b=k*a5
a9=l*j*a6+b
b0=k*l*a6+s
b1=k*k*a6+a4
s=l*a5
b2=k*j*a6-s
b3=j*l*a6-b
b4=j*k*a6+s
b5=j*j*a6+a4
s=m[0]
b=m[4]
d=m[8]
a=m[1]
a0=m[5]
a1=m[9]
a2=m[2]
e=m[6]
c=m[10]
q=m[3]
p=m[7]
n=m[11]
m[0]=s*a7+b*b0+d*b3
m[1]=a*a7+a0*b0+a1*b3
m[2]=a2*a7+e*b0+c*b3
m[3]=q*a7+p*b0+n*b3
m[4]=s*a8+b*b1+d*b4
m[5]=a*a8+a0*b1+a1*b4
m[6]=a2*a8+e*b1+c*b4
m[7]=q*a8+p*b1+n*b4
m[8]=s*a9+b*b2+d*b5
m[9]=a*a9+a0*b2+a1*b5
m[10]=a2*a9+e*b2+c*b5
m[11]=q*a9+p*b2+n*b5
b6=$.$get$c9().h(0,$.$get$dF().value)
b7=b8/1000
s=$.$get$dF().value
if(s==="tv-distortion")b6.c.d.i(0,"uTime",b7)
else if(s==="hexalate-varying")b6.c.d.i(0,"uPointSize",U.jw(4,30,20,b7))
else if(s==="square-varying")b6.c.d.i(0,"uPointSize",U.jw(4,30,20,b7))
else if(s==="lumidots-varying")b6.c.d.i(0,"uPointSize",U.jw(4,30,20,b7))
s=this.d
r=this.e
this.c.bm(17664,0,0,s,r)
this.f.bs(t.a,[this.r,this.x])
this.y.bm(17664,0,0,s,r)
b6.b.bs(this.z,[b6.c])
C.aw.gef(window).b7(this)
this.Q.dB(t.b)},
$S:function(a){return{func:1,v:true,args:[P.a7]}}}
U.iT.prototype={
$1:function(a){this.a.a=G.kH("",this.b,Y.n0(J.aT(a,0)))
this.c.$1(0)},
$S:function(a){return{func:1,args:[P.h]}}}
J.a.prototype.dc=J.a.prototype.k
J.br.prototype.de=J.br.prototype.k
P.V.prototype.dd=P.V.prototype.aD
W.a0.prototype.aJ=W.a0.prototype.R
W.bN.prototype.df=W.bN.prototype.Y;(function installTearOffs(){installTearOff(H.bb.prototype,"geS",0,0,0,null,["$0"],["aB"],0)
installTearOff(H.a4.prototype,"gcY",0,0,0,null,["$1"],["N"],2)
installTearOff(H.aO.prototype,"gey",0,0,0,null,["$1"],["a_"],2)
installTearOff(P,"nQ",1,0,0,null,["$1"],["nw"],1)
installTearOff(P,"nR",1,0,0,null,["$1"],["nx"],1)
installTearOff(P,"nS",1,0,0,null,["$1"],["ny"],1)
installTearOff(P,"lw",1,0,0,null,["$0"],["nN"],0)
installTearOff(P.L.prototype,"gdP",0,0,0,null,["$2","$1"],["L","dQ"],5)
installTearOff(P,"nY",1,0,0,null,["$2"],["mP"],6)
installTearOff(W,"o3",1,0,0,null,["$4"],["nB"],4)
installTearOff(W,"o4",1,0,0,null,["$4"],["nC"],4)
installTearOff(W.cx.prototype,"gb4",0,1,0,null,["$0"],["b5"],3)
installTearOff(W.cQ.prototype,"gb4",0,1,0,null,["$0"],["b5"],3)
installTearOff(U,"lD",1,0,0,null,["$0"],["oc"],0)})();(function inheritance(){inherit(P.H,null)
var t=P.H
inherit(H.jl,t)
inherit(J.a,t)
inherit(J.dR,t)
inherit(P.V,t)
inherit(H.co,t)
inherit(P.ck,t)
inherit(H.b_,t)
inherit(H.aw,t)
inherit(H.i8,t)
inherit(H.bb,t)
inherit(H.hI,t)
inherit(H.aP,t)
inherit(H.i7,t)
inherit(H.hD,t)
inherit(H.cC,t)
inherit(H.ha,t)
inherit(H.au,t)
inherit(H.a4,t)
inherit(H.aO,t)
inherit(H.fH,t)
inherit(H.hg,t)
inherit(P.aZ,t)
inherit(H.di,t)
inherit(H.aq,t)
inherit(P.b3,t)
inherit(H.f_,t)
inherit(H.f1,t)
inherit(H.eW,t)
inherit(H.i9,t)
inherit(P.a1,t)
inherit(P.jf,t)
inherit(P.hE,t)
inherit(P.d0,t)
inherit(P.L,t)
inherit(P.cS,t)
inherit(P.fY,t)
inherit(P.fZ,t)
inherit(P.jy,t)
inherit(P.aV,t)
inherit(P.is,t)
inherit(P.fN,t)
inherit(P.i4,t)
inherit(P.bH,t)
inherit(P.jp,t)
inherit(P.bI,t)
inherit(P.l,t)
inherit(P.i6,t)
inherit(P.ak,t)
inherit(P.I,t)
inherit(P.ax,t)
inherit(P.a7,t)
inherit(P.az,t)
inherit(P.cH,t)
inherit(P.jh,t)
inherit(P.hN,t)
inherit(P.eJ,t)
inherit(P.ei,t)
inherit(P.h,t)
inherit(P.b2,t)
inherit(P.P,t)
inherit(P.jx,t)
inherit(P.b7,t)
inherit(P.n,t)
inherit(P.bA,t)
inherit(P.jB,t)
inherit(W.e2,t)
inherit(W.bG,t)
inherit(W.m,t)
inherit(W.cz,t)
inherit(W.bN,t)
inherit(W.im,t)
inherit(W.cd,t)
inherit(W.cy,t)
inherit(W.jt,t)
inherit(W.jD,t)
inherit(W.ih,t)
inherit(W.dt,t)
inherit(P.hu,t)
inherit(P.ib,t)
inherit(G.fe,t)
inherit(G.dX,t)
inherit(G.ce,t)
inherit(G.eB,t)
inherit(G.eC,t)
inherit(G.cg,t)
inherit(G.cO,t)
inherit(G.cN,t)
inherit(G.y,t)
inherit(G.fO,t)
inherit(G.h8,t)
inherit(G.bE,t)
inherit(R.fU,t)
inherit(T.bt,t)
inherit(T.ad,t)
inherit(T.F,t)
inherit(T.w,t)
inherit(T.ai,t)
inherit(U.ef,t)
t=J.a
inherit(J.eU,t)
inherit(J.eV,t)
inherit(J.br,t)
inherit(J.aA,t)
inherit(J.b0,t)
inherit(J.aC,t)
inherit(H.bw,t)
inherit(H.b4,t)
inherit(W.d,t)
inherit(W.dN,t)
inherit(W.dV,t)
inherit(W.aY,t)
inherit(W.a_,t)
inherit(W.cU,t)
inherit(W.e7,t)
inherit(W.e8,t)
inherit(W.e9,t)
inherit(W.c5,t)
inherit(W.c6,t)
inherit(W.cV,t)
inherit(W.c8,t)
inherit(W.cX,t)
inherit(W.ec,t)
inherit(W.f,t)
inherit(W.cZ,t)
inherit(W.eN,t)
inherit(W.d1,t)
inherit(W.f4,t)
inherit(W.fa,t)
inherit(W.d5,t)
inherit(W.cx,t)
inherit(W.d8,t)
inherit(W.ae,t)
inherit(W.dc,t)
inherit(W.cA,t)
inherit(W.de,t)
inherit(W.af,t)
inherit(W.dj,t)
inherit(W.dm,t)
inherit(W.h9,t)
inherit(W.dp,t)
inherit(W.he,t)
inherit(W.cQ,t)
inherit(W.hn,t)
inherit(W.hp,t)
inherit(W.du,t)
inherit(W.dw,t)
inherit(W.dy,t)
inherit(W.dA,t)
inherit(W.dC,t)
inherit(P.d3,t)
inherit(P.da,t)
inherit(P.fB,t)
inherit(P.fC,t)
inherit(P.fF,t)
inherit(P.dk,t)
inherit(P.dr,t)
inherit(P.dS,t)
inherit(P.fJ,t)
inherit(P.fK,t)
inherit(P.dg,t)
t=J.br
inherit(J.fz,t)
inherit(J.aM,t)
inherit(J.aD,t)
inherit(J.jk,J.aA)
t=J.b0
inherit(J.cm,t)
inherit(J.cl,t)
t=P.V
inherit(H.k,t)
inherit(H.cq,t)
inherit(H.cR,t)
t=H.k
inherit(H.b1,t)
inherit(H.f0,t)
inherit(H.eg,H.cq)
t=P.ck
inherit(H.f7,t)
inherit(H.hs,t)
t=H.b1
inherit(H.bs,t)
inherit(P.f2,t)
t=H.aw
inherit(H.j0,t)
inherit(H.j1,t)
inherit(H.i2,t)
inherit(H.hJ,t)
inherit(H.eQ,t)
inherit(H.eR,t)
inherit(H.ia,t)
inherit(H.hb,t)
inherit(H.hc,t)
inherit(H.j2,t)
inherit(H.iM,t)
inherit(H.iN,t)
inherit(H.iO,t)
inherit(H.iP,t)
inherit(H.iQ,t)
inherit(H.h5,t)
inherit(H.eX,t)
inherit(H.iI,t)
inherit(H.iJ,t)
inherit(H.iK,t)
inherit(P.hz,t)
inherit(P.hy,t)
inherit(P.hA,t)
inherit(P.hB,t)
inherit(P.eL,t)
inherit(P.eK,t)
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
inherit(P.h_,t)
inherit(P.h0,t)
inherit(P.iv,t)
inherit(P.ie,t)
inherit(P.id,t)
inherit(P.ig,t)
inherit(P.f6,t)
inherit(P.ed,t)
inherit(P.ee,t)
inherit(W.eh,t)
inherit(W.fX,t)
inherit(W.ht,t)
inherit(W.hM,t)
inherit(W.fo,t)
inherit(W.fn,t)
inherit(W.ii,t)
inherit(W.ij,t)
inherit(W.iq,t)
inherit(W.ir,t)
inherit(P.hw,t)
inherit(P.iw,t)
inherit(P.ix,t)
inherit(P.iy,t)
inherit(B.iW,t)
inherit(B.iX,t)
inherit(B.iY,t)
inherit(B.iZ,t)
inherit(B.j_,t)
inherit(B.ft,t)
inherit(B.fu,t)
inherit(B.fv,t)
inherit(B.fw,t)
inherit(D.f3,t)
inherit(A.iH,t)
inherit(U.iS,t)
inherit(U.iT,t)
t=H.hD
inherit(H.bd,t)
inherit(H.bS,t)
t=P.aZ
inherit(H.fp,t)
inherit(H.eY,t)
inherit(H.hl,t)
inherit(H.hi,t)
inherit(H.dW,t)
inherit(H.fL,t)
inherit(P.c0,t)
inherit(P.b5,t)
inherit(P.aa,t)
inherit(P.hm,t)
inherit(P.hk,t)
inherit(P.b8,t)
inherit(P.dY,t)
inherit(P.e6,t)
t=H.h5
inherit(H.fT,t)
inherit(H.bn,t)
inherit(H.hx,P.c0)
inherit(P.cp,P.b3)
t=P.cp
inherit(H.ac,t)
inherit(W.hC,t)
t=H.b4
inherit(H.ff,t)
inherit(H.ct,t)
t=H.ct
inherit(H.bJ,t)
inherit(H.bL,t)
inherit(H.bK,H.bJ)
inherit(H.cu,H.bK)
inherit(H.bM,H.bL)
inherit(H.cv,H.bM)
t=H.cu
inherit(H.cs,t)
inherit(H.fg,t)
t=H.cv
inherit(H.fh,t)
inherit(H.fi,t)
inherit(H.fj,t)
inherit(H.fk,t)
inherit(H.fl,t)
inherit(H.cw,t)
inherit(H.fm,t)
t=P.hE
inherit(P.cT,t)
inherit(P.io,t)
inherit(P.ic,P.is)
inherit(P.i5,H.ac)
inherit(P.fM,P.fN)
inherit(P.i1,P.fM)
inherit(P.i3,P.i1)
inherit(P.cn,P.bI)
t=P.a7
inherit(P.Z,t)
inherit(P.z,t)
t=P.aa
inherit(P.cB,t)
inherit(P.eP,t)
t=W.d
inherit(W.q,t)
inherit(W.ap,t)
inherit(W.eE,t)
inherit(W.bq,t)
inherit(W.bv,t)
inherit(W.fD,t)
inherit(W.cD,t)
inherit(W.bO,t)
inherit(W.bQ,t)
inherit(W.hq,t)
inherit(W.hr,t)
inherit(W.bF,t)
inherit(W.jE,t)
inherit(P.dT,t)
inherit(P.aW,t)
t=W.q
inherit(W.a0,t)
inherit(W.av,t)
inherit(W.ay,t)
t=W.a0
inherit(W.j,t)
inherit(P.v,t)
t=W.ap
inherit(W.c_,t)
inherit(W.eM,t)
inherit(W.f5,t)
t=W.j
inherit(W.dO,t)
inherit(W.dP,t)
inherit(W.at,t)
inherit(W.c1,t)
inherit(W.c4,t)
inherit(W.eI,t)
inherit(W.ch,t)
inherit(W.b6,t)
inherit(W.cK,t)
inherit(W.h3,t)
inherit(W.h4,t)
inherit(W.bB,t)
t=W.aY
inherit(W.dZ,t)
inherit(W.e0,t)
inherit(W.e1,t)
inherit(W.e4,t)
t=W.a_
inherit(W.e_,t)
inherit(W.e3,t)
inherit(W.e5,t)
inherit(W.aX,W.cU)
inherit(W.ea,W.c6)
inherit(W.cW,W.cV)
inherit(W.c7,W.cW)
inherit(W.cY,W.cX)
inherit(W.eb,W.cY)
inherit(W.d_,W.cZ)
inherit(W.eD,W.d_)
inherit(W.d2,W.d1)
inherit(W.bp,W.d2)
inherit(W.ci,W.ay)
inherit(W.cj,W.bq)
inherit(W.aL,W.f)
t=W.aL
inherit(W.aE,t)
inherit(W.O,t)
inherit(W.aK,t)
inherit(W.fc,W.bv)
inherit(W.d6,W.d5)
inherit(W.fd,W.d6)
inherit(W.S,P.cn)
inherit(W.d9,W.d8)
inherit(W.bx,W.d9)
inherit(W.dd,W.dc)
inherit(W.fA,W.dd)
inherit(W.bP,W.bO)
inherit(W.fP,W.bP)
inherit(W.df,W.de)
inherit(W.fR,W.df)
inherit(W.fW,W.dj)
inherit(W.dn,W.dm)
inherit(W.h6,W.dn)
inherit(W.bR,W.bQ)
inherit(W.h7,W.bR)
inherit(W.dq,W.dp)
inherit(W.hd,W.dq)
inherit(W.aN,W.O)
inherit(W.dv,W.du)
inherit(W.hF,W.dv)
inherit(W.hG,W.c8)
inherit(W.dx,W.dw)
inherit(W.i0,W.dx)
inherit(W.dz,W.dy)
inherit(W.d7,W.dz)
inherit(W.dB,W.dA)
inherit(W.ik,W.dB)
inherit(W.dD,W.dC)
inherit(W.il,W.dD)
inherit(W.hH,W.hC)
inherit(W.hK,P.fY)
inherit(W.jH,W.hK)
inherit(W.hL,P.fZ)
inherit(W.ip,W.bN)
inherit(P.hv,P.hu)
inherit(P.W,P.ib)
t=P.v
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
inherit(P.eu,t)
inherit(P.ev,t)
inherit(P.ew,t)
inherit(P.ex,t)
inherit(P.ey,t)
inherit(P.ez,t)
inherit(P.eA,t)
inherit(P.eF,t)
inherit(P.ab,t)
inherit(P.f8,t)
inherit(P.fx,t)
inherit(P.bz,t)
t=P.ab
inherit(P.eH,t)
inherit(P.a2,t)
inherit(P.eO,t)
inherit(P.h2,t)
inherit(P.bC,t)
inherit(P.ho,t)
inherit(P.d4,P.d3)
inherit(P.eZ,P.d4)
inherit(P.db,P.da)
inherit(P.fq,P.db)
inherit(P.fG,P.a2)
inherit(P.dl,P.dk)
inherit(P.h1,P.dl)
inherit(P.bD,P.bC)
inherit(P.ds,P.dr)
inherit(P.hf,P.ds)
inherit(P.fr,P.aW)
inherit(P.dh,P.dg)
inherit(P.fS,P.dh)
t=G.fe
inherit(G.fQ,t)
inherit(G.A,t)
inherit(G.fb,t)
inherit(G.fI,t)
inherit(G.dU,G.fQ)
inherit(B.fs,G.dU)
t=G.A
inherit(G.f9,t)
inherit(G.fy,t)
inherit(G.hj,G.bE)
inherit(R.fV,R.fU)
mixin(H.bJ,P.l)
mixin(H.bK,H.b_)
mixin(H.bL,P.l)
mixin(H.bM,H.b_)
mixin(P.bI,P.l)
mixin(W.cU,W.e2)
mixin(W.cV,P.l)
mixin(W.cW,W.m)
mixin(W.cX,P.l)
mixin(W.cY,W.m)
mixin(W.cZ,P.l)
mixin(W.d_,W.m)
mixin(W.d1,P.l)
mixin(W.d2,W.m)
mixin(W.d5,P.l)
mixin(W.d6,W.m)
mixin(W.d8,P.l)
mixin(W.d9,W.m)
mixin(W.dc,P.l)
mixin(W.dd,W.m)
mixin(W.bO,P.l)
mixin(W.bP,W.m)
mixin(W.de,P.l)
mixin(W.df,W.m)
mixin(W.dj,P.b3)
mixin(W.dm,P.l)
mixin(W.dn,W.m)
mixin(W.bQ,P.l)
mixin(W.bR,W.m)
mixin(W.dp,P.l)
mixin(W.dq,W.m)
mixin(W.du,P.l)
mixin(W.dv,W.m)
mixin(W.dw,P.l)
mixin(W.dx,W.m)
mixin(W.dy,P.l)
mixin(W.dz,W.m)
mixin(W.dA,P.l)
mixin(W.dB,W.m)
mixin(W.dC,P.l)
mixin(W.dD,W.m)
mixin(P.d3,P.l)
mixin(P.d4,W.m)
mixin(P.da,P.l)
mixin(P.db,W.m)
mixin(P.dk,P.l)
mixin(P.dl,W.m)
mixin(P.dr,P.l)
mixin(P.ds,W.m)
mixin(P.dg,P.l)
mixin(P.dh,W.m)})();(function constants(){C.o=W.at.prototype
C.J=W.c1.prototype
C.u=W.aX.prototype
C.p=W.c4.prototype
C.K=W.c5.prototype
C.L=W.ch.prototype
C.m=W.ci.prototype
C.w=W.cj.prototype
C.M=J.a.prototype
C.a=J.aA.prototype
C.x=J.cl.prototype
C.b=J.cm.prototype
C.c=J.b0.prototype
C.h=J.aC.prototype
C.T=J.aD.prototype
C.W=H.cs.prototype
C.B=W.bx.prototype
C.C=J.fz.prototype
C.D=W.cA.prototype
C.X=W.b6.prototype
C.I=W.cK.prototype
C.t=J.aM.prototype
C.av=W.aN.prototype
C.aw=W.bF.prototype
C.d=new P.ic()
C.v=new P.az(0)
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
C.U=H.E(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.n])
C.V=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.A=makeConstList([])
C.q=H.E(makeConstList(["bind","if","ref","repeat","syntax"]),[P.n])
C.r=H.E(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.n])
C.Y=new G.y("vec3","vertex btangents",0)
C.e=new G.y("vec3","",0)
C.Z=new G.y("vec4","delta from light",0)
C.n=new G.y("","",0)
C.E=new G.y("vec3","vertex coordinates",0)
C.a_=new G.y("vec3","vertex binormals",0)
C.F=new G.y("vec4","for wireframe",0)
C.a0=new G.y("vec4","per vertex color",0)
C.a1=new G.y("float","for normal maps",0)
C.j=new G.y("mat4","",0)
C.a3=new G.y("mat4","",4)
C.a2=new G.y("mat4","",128)
C.f=new G.y("float","",0)
C.a4=new G.y("float","",4)
C.a5=new G.y("float","depth for shadowmaps",0)
C.i=new G.y("sampler2D","",0)
C.a6=new G.y("float","for bump maps",0)
C.a7=new G.y("vec2","texture uvs",0)
C.a8=new G.y("float","time since program start in sec",0)
C.k=new G.y("vec2","",0)
C.a9=new G.y("samplerCube","",0)
C.l=new G.y("vec4","",0)
C.aa=new G.y("vec3","vertex normals",0)
C.ab=new G.y("sampler2DShadow","",0)
C.G=new G.y("vec3","per vertex color",0)
C.H=new G.y("mat3","",0)
C.ac=new G.y("vec3","vertex tangents",0)
C.ad=H.K("oq")
C.ae=H.K("or")
C.af=H.K("eG")
C.ag=H.K("os")
C.ah=H.K("ot")
C.ai=H.K("kI")
C.aj=H.K("ou")
C.ak=H.K("kL")
C.al=H.K("P")
C.am=H.K("n")
C.an=H.K("le")
C.ao=H.K("lf")
C.ap=H.K("ow")
C.aq=H.K("lg")
C.ar=H.K("ak")
C.as=H.K("Z")
C.at=H.K("z")
C.au=H.K("a7")})();(function staticFields(){$.kV="$cachedFunction"
$.kW="$cachedInvocation"
$.kf=null
$.kd=null
$.jK=!1
$.jP=null
$.lt=null
$.lR=null
$.iB=null
$.iL=null
$.jQ=null
$.be=null
$.bT=null
$.bU=null
$.jL=!1
$.x=C.d
$.kF=0
$.ao=null
$.jg=null
$.kE=null
$.kD=null
$.kA=null
$.kz=null
$.ky=null
$.kx=null
$.nU=0
$.nV=0
$.jU=0
$.lP=0
$.bY=0
$.bZ=0
$.oj=!1
$.lG=0
$.nO="\nfloat nearestLevel(float col, int mode) {\n   if (mode==0) return ceil(col / 80.0) * 80.0;\n\t else if (mode==1) return ceil(col * 6.0) / 6.0;\n\t else return ceil(col * 3.0) / 3.0;\n}\n\n// averaged pixel intensity from 3 color channels\nfloat avg3(vec3 pix) {\n return (pix.r + pix.g + pix.b)/3.0;\n}\n\nvec3 get_pixel(vec2 coords, float dx, float dy) {\n return texture(uTexture, coords + vec2(dx, dy)).rgb;\n}\n\n// returns pixel color\nfloat IsEdge(vec2 coords, vec2 dim) {\n  vec2 d = vec2(1.0, 1.0) / dim;\n\n  // read neighboring pixel intensities\n  float pix0 = avg3(get_pixel(coords, -d.x, -d.y));\n  float pix1 = avg3(get_pixel(coords, -d.x, 0.0));\n  float pix2 = avg3(get_pixel(coords, -d.x, d.y));\n  float pix3 = avg3(get_pixel(coords, 0.0, -d.y));\n\n  float pix5 = avg3(get_pixel(coords, 0.0, d.y));\n  float pix6 = avg3(get_pixel(coords, d.x, -d.y));\n  float pix7 = avg3(get_pixel(coords, d.x, 0.0));\n  float pix8 = avg3(get_pixel(coords, d.x, d.y));\n\n\n  // average color differences around neighboring pixels\n  float delta = (abs(pix1-pix7) + abs(pix5-pix3) +\n                 abs(pix0-pix8) + abs(pix2-pix6)) * 0.25;\n  return clamp(5.5*delta, 0.0, 1.0);\n}\n\nvoid main() {\n    vec2 texdim = vec2(textureSize(uTexture, 0));\n    vec4 colorOrg = texture(uTexture, vTexUV);\n    vec3 vHSV =  RGBtoHSV(colorOrg.rgb);\n    vHSV.x = nearestLevel(vHSV.x, 0);\n    vHSV.y = nearestLevel(vHSV.y, 1);\n    vHSV.z = nearestLevel(vHSV.z, 2);\n    float edg = IsEdge(vTexUV, texdim);\n    vec3 vRGB = (edg >= 0.3) ? vec3(0.0,0.0,0.0) : HSVtoRGB(vHSV);\n    //vec3 vRGB = HSVtoRGB(vHSV);\n    oFragColor = vec4(vRGB, 1.0);\n}\n"})();(function lazyInitializers(){lazy($,"kw","$get$kw",function(){return H.lI("_$dart_dartClosure")})
lazy($,"jm","$get$jm",function(){return H.lI("_$dart_js")})
lazy($,"kJ","$get$kJ",function(){return H.n5()})
lazy($,"kK","$get$kK",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kF
$.kF=t+1
t="expando$key$"+t}return new P.ei(t,null,[P.z])})
lazy($,"l2","$get$l2",function(){return H.ag(H.hh({
toString:function(){return"$receiver$"}}))})
lazy($,"l3","$get$l3",function(){return H.ag(H.hh({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"l4","$get$l4",function(){return H.ag(H.hh(null))})
lazy($,"l5","$get$l5",function(){return H.ag(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"l9","$get$l9",function(){return H.ag(H.hh(void 0))})
lazy($,"la","$get$la",function(){return H.ag(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"l7","$get$l7",function(){return H.ag(H.l8(null))})
lazy($,"l6","$get$l6",function(){return H.ag(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"lc","$get$lc",function(){return H.ag(H.l8(void 0))})
lazy($,"lb","$get$lb",function(){return H.ag(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jG","$get$jG",function(){return P.nv()})
lazy($,"bV","$get$bV",function(){return[]})
lazy($,"kv","$get$kv",function(){return{}})
lazy($,"lk","$get$lk",function(){return P.jq(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jI","$get$jI",function(){return P.p()})
lazy($,"iA","$get$iA",function(){return P.kO(P.z,P.ak)})
lazy($,"bX","$get$bX",function(){return P.kO(P.n,P.ak)})
lazy($,"l_","$get$l_",function(){return new G.cO(1281,0,4294967295)})
lazy($,"kb","$get$kb",function(){return new G.cN(1281,1281,1281)})
lazy($,"T","$get$T",function(){return P.aF(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColors",C.G,"aColorAlpha",C.a0,"aPosition",C.E,"aTexUV",C.a7,"aNormal",C.aa,"aBinormal",C.a_,"aCenter",C.F,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ac,"aBitangent",C.Y,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.G,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.E,"vPositionFromLight",C.Z,"vCenter",C.F,"vDepth",C.a5,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.H,"uConvolutionMatrix",C.H,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ab,"uTexture",C.i,"uTexture2",C.i,"uTexture3",C.i,"uTexture4",C.i,"uSpecularMap",C.i,"uNormalMap",C.i,"uBumpMap",C.i,"uDepthMap",C.i,"uCubeTexture",C.a9,"uAnimationTable",C.i,"uTime",C.a8,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a2,"uLightDescs",C.a3,"uLightCount",C.f,"uLightTypes",C.a4,"uBumpScale",C.a6,"uNormalScale",C.a1])})
lazy($,"l1","$get$l1",function(){var t=new G.h8(!1,!1,!1,!0,1,9729,9729)
t.d=!1
t.b=!0
t.f=9728
t.r=9728
return t})
lazy($,"ki","$get$ki",function(){return T.b9(0.8,0.8,0.8)})
lazy($,"lC","$get$lC",function(){var t=G.Q("uv-passthru")
t.bn(["aPosition","aTexUV"])
t.F(["vTexUV"])
t.aL(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"ly","$get$ly",function(){var t=G.Q("copyF")
t.F(["vTexUV"])
t.I(["uTexture"])
t.aL(["oFragColor = texture(uTexture, vTexUV);"])
return t})
lazy($,"lW","$get$lW",function(){var t=G.Q("ToonF")
t.F(["vTexUV"])
t.I(["uTexture"])
t.O(["vec3 RGBtoHSV(vec3 rgb) {\n   float r = rgb.r;\n   float g = rgb.g;\n   float b = rgb.b;\n\n\n   float minv = min(min(r, g), b);\n   float maxv = max(max(r, g), b);\n   float delta = maxv - minv;\n\n   vec3 res;\n   res.z = maxv;            // v\n   if( maxv == 0.0 ) {\n      // r = g = b = 0      // s = 0, v is undefined\n      res.y = 0.0;\n      res.x = -1.0;\n      return res;\n   }\n\n   res.y = delta / maxv;      // s\n   if (r == maxv) res.x = (g - b) / delta;  // btwn yellow & magenta\n   else if (g == maxv) res.x = 2.0 + (b - r) / delta;   // btwn cyan & yellow\n   else res.x = 4.0 + (r - g) / delta;   // btwn magenta & cyan\n\n   res.x = res.x * 60.0;            // degrees\n   if( res.x < 0.0 ) res.x = res.x + 360.0;\n\n   return res;\n}\n\nvec3 HSVtoRGB(vec3 hsv) {\n   float h = hsv.x / 60.0;  // sector 0 to 5\n   float s = hsv.y;\n   float v = hsv.z;\n\n   if( s == 0.0 ) {\n      // achromatic (grey)\n      return vec3(v, v, v);\n   }\n\n   int i = int(floor( h ));\n   float f = h - float(i);         // fractional part of h\n   float p = v * ( 1.0 - s );\n   float q = v * ( 1.0 - s * f );\n   float t = v * ( 1.0 - s * ( 1.0 - f ) );\n\n   if (i == 0) return vec3(v, t, p);\n   else if (i == 1) return vec3(q, v , p);\n   else if (i == 2) return vec3(p, v, t);\n   else if (i == 3) return vec3(p, q, v);\n   else if (i == 4) return vec3(t, p, v);\n   return vec3(v, p, q);\n}\n",$.nO])
return t})
lazy($,"lK","$get$lK",function(){var t=G.Q("HexPixelateF")
t.F(["vTexUV"])
t.I(["uCenter2","uPointSize","uTexture"])
t.O(["\nfloat S = 0.86602540378;\n\nvec2 GetHexCenter(vec2 p) {\n vec2 a;\n    if (p.x + p.y - floor(p.x) - floor(p.y) < 1.0) a = vec2(floor(p.x), floor(p.y));\n    else a = vec2(ceil(p.x), ceil(p.y));\n    vec2 b = vec2(ceil(p.x), floor(p.y));\n    vec2 c = vec2(floor(p.x), ceil(p.y));\n\n    vec3 P = vec3(p.x, p.y, 1.0 - p.x - p.y);\n    vec3 A = vec3(a.x, a.y, 1.0 - a.x - a.y);\n    vec3 B = vec3(b.x, b.y, 1.0 - b.x - b.y);\n    vec3 C = vec3(c.x, c.y, 1.0 - c.x - c.y);\n\n    float alen = length(P - A);\n    float blen = length(P - B);\n    float clen = length(P - C);\n\n    if (alen < blen) {\n        return (alen < clen) ? a : c;\n    } else {\n        return (blen < clen) ? b : c;\n    }\n}\n\nvec2 ToPixelSpace(vec2 v, vec2 texdim) {\n    vec2 p = (v * texdim - uCenter2) / uPointSize;\n    float t = p.y / S;\n    return vec2(p.x - 0.5 * t, t);\n}\n\nvec2 ToNormalizedSpace(vec2 v, vec2 texdim) {\n   vec2 p = vec2(v.x + v.y * 0.5, v.y * S);\n   return p * uPointSize / texdim + uCenter2 / texdim;\n}\n\nvoid main() {\n    vec2 texdim = vec2(textureSize(uTexture, 0));\n    vec2 p = ToPixelSpace(vTexUV, texdim);\n    vec2 c = GetHexCenter(p);\n    vec2 q = ToNormalizedSpace(c, texdim);\n    oFragColor = texture(uTexture, q);\n}\n"])
return t})
lazy($,"lB","$get$lB",function(){var t=G.Q("DotF")
t.F(["vTexUV"])
t.I(["uCenter2","uScale","uAngle","uTexture"])
t.O(["float pattern(vec2 tex) {\n\t\tfloat s = sin( uAngle );\n\t\tfloat c = cos( uAngle );\n\t\tvec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * uScale;\n\t\treturn ( sin( point.x ) * sin( point.y ) ) * 4.0;\n}\n\nvoid main() {\n\t\tvec2 texdim = vec2(textureSize(uTexture, 0));\n\t\tvec4 color = texture(uTexture, vTexUV );\n\t\tfloat average = ( color.r + color.g + color.b ) / 3.0;\n     vec2 tex = vTexUV* texdim - uCenter2;\n\t\toFragColor = vec4( vec3( average * 10.0 - 5.0 + pattern(tex) ), color.a );\n}\n"])
return t})
lazy($,"lX","$get$lX",function(){var t=G.Q("DotF")
t.F(["vTexUV"])
t.I(["uScale","uTime","uTexture"])
t.O(["float rand(vec2 co)  {\n    float a = 12.9898;\n    float b = 78.233;\n    float c = 43758.5453;\n    float dt = dot(co.xy, vec2(a,b));\n    float sn = mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\nvec3 rgbDistortion(vec2 uv, float magnitude, float time) {\n    // x offset for the three color channels\n    // we do not change the y\n\t  float dR = rand(vec2(time * 0.03, uv.y * 0.42)) * 0.001 +\n\t             sin(rand(vec2(time * 0.2, uv.y))) * magnitude;\n\t  float dG = rand(vec2(time * 0.004, uv.y * 0.002)) * 0.004 +\n               sin(time * 9.0) * magnitude;\n\t  float dB = 0.0;\n    return vec3(dR, dG, dB);\n}\n\nvoid main() {\n      vec3 d = rgbDistortion(vTexUV, uScale, uTime);\n      float x = vTexUV.x;\n      float y = vTexUV.y;\n\n\t\t\tfloat r = texture(uTexture, vec2(x + d.r, y) ).r;\n\t\t\tfloat g = texture(uTexture, vec2(x + d.g, y) ).g;\n\t\t\tfloat b = texture(uTexture, vec2(x + d.b, y) ).b;\n\t\t\toFragColor = vec4( r, g, b, 1.0 );\n}\n"])
return t})
lazy($,"lM","$get$lM",function(){var t=G.Q("KaleidoscopeF")
t.F(["vTexUV"])
t.I(["uScale","uCenter2","uTexture"])
t.O(["vec2 kaleidoscope( vec2 uv, float n) {\n   float PI = 3.1415926;\n    float angle = PI / n;\n    float r = length(uv);\n\t  float a = atan( uv.y, uv.x ) / angle;\n\t  a = mix( fract( a ), 1.0 - fract( a ), mod( floor( a ), 2.0 ) ) * angle;\n\treturn vec2( cos( a ), sin( a ) ) * r;\n}\n\nvoid main() {\n    vec2 uv = kaleidoscope(vTexUV - uCenter2, uScale);\n    oFragColor = texture(uTexture, uv + uCenter2);\n}\n"])
return t})
lazy($,"lN","$get$lN",function(){var t=G.Q("LumidotsF")
t.F(["vTexUV"])
t.I(["uPointSize","uTexture"])
t.O(["\n// http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color\nfloat RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.212, 0.715, 0.072)); }\n// float RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.299, 0.587, 0.114)); }\n\n\nvoid main() {\n\t  vec2 texdim = vec2(textureSize(uTexture, 0));\n    float r = uPointSize;\n    vec2 uv = vTexUV * texdim;\n    vec2 center = floor(uv / r / 2.0) * 2.0 * r + r;\n    vec3 col = texture(uTexture, center / texdim).rgb;\n    float lum = max(0.1, RGB2Luma(col));\n    float alpha =  smoothstep(1.0, 0.5,\n                              distance(center, uv) / lum / r);\n    oFragColor.rgb = col.rgb * alpha;\n}\n"])
return t})
lazy($,"lT","$get$lT",function(){var t=G.Q("SquarePixelateF")
t.F(["vTexUV"])
t.I(["uPointSize","uTexture"])
t.O(["void main() {\n\t  vec2 texdim = vec2(textureSize(uTexture, 0));\n    float r = uPointSize;\n    vec2 uv = vTexUV * texdim;\n    vec2 center = floor(uv / r / 2.0) * 2.0 * r + r;\n    oFragColor = texture(uTexture, center / texdim);\n}\n"])
return t})
lazy($,"lO","$get$lO",function(){var t=G.Q("LuminosityHighPassF")
t.F(["vTexUV"])
t.I(["uRange","uColorAlpha","uTexture"])
t.O(["\n// http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color\nfloat RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.212, 0.715, 0.072)); }\n// float RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.299, 0.587, 0.114)); }\n\nvoid main() {\n    vec4 color = texture(uTexture, vTexUV);\n    float luma = RGB2Luma(color.rgb);\n    float alpha = smoothstep(uRange.x, uRange.y, luma);\n    oFragColor = mix(uColorAlpha, color, alpha );\n}\n"])
return t})
lazy($,"lF","$get$lF",function(){var t=G.Q("FisheyePassF")
t.F(["vTexUV"])
t.I(["uTexture"])
t.O(["\nfloat fisheye_radius = 1.0;\n      \nvoid main() {\n    float y = (vTexUV.y-0.5) * 2.0; // [0,1] => [-1, 1]\n\n    float angle = asin(y/fisheye_radius); // [-pi/2, pi/2]\n    float arc_length = angle * fisheye_radius;\n\n    float max_arc_length = asin(1.0 / fisheye_radius) * fisheye_radius;\n    float normalized_arc_length = (arc_length + max_arc_length) / \n                                  (max_arc_length * 2.0);\n    // set arc_length as y\n    vec2 uv = vec2(vTexUV.x, normalized_arc_length); \n    oFragColor = texture(uTexture, uv); \n}\n"])
return t})
lazy($,"lE","$get$lE",function(){var t=G.Q("FilmPassF")
t.F(["vTexUV"])
t.I(["uTexture"])
t.O(["\nvec2 translation = vec2(0.1, 0.0);\nfloat frame = 1.0;\n\nfloat rand(vec2 co){\n    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nfloat vignette(vec2 uv) {\n    return min(1., 6000. * (uv.x * uv.y * (1. - uv.x) * (1. - uv.y) - pow(.2, 4.)));\n}\n\nfloat verticalNoise(vec2 uv) {\n    return rand(vec2(uv.x * 0.3242 + 1.4839, 1.));\n}\n\nfloat randomLines(vec2 uv, float a, float b, float c, float d) {\n    float discrete = floor(frame / 4.);\n    return step(0.0002 + 0.0005 * sin(discrete / a),\n            abs(uv.x - b + 0.05 * sin(discrete / c) * cos(discrete / d)));\n}\n\nvec3 scene(vec2 uv) {\n    vec3 color = texture(uTexture, uv).rgb;\n    color += 0.1;\n    color *= vignette(uv);\n    color *= 0.9 + 0.1 * rand(uv);\n    color *= 0.95 + 0.05 * verticalNoise(vTexUV + floor(frame / 4.));\n    color = 0.5 * color + color * 0.5 * randomLines(uv, 28., 0.7, 33., 58.);\n    color = color * 0.8 + color * 0.2 * randomLines(uv, 47., 0.78, 61., 27.);\n    color = color * 0.7 + color * 0.3 * randomLines(uv, 31., 0.28, 79., 43.);\n    color = pow(max(vec3(0.),color), vec3(1.5));\n    color *= 0.8 + 0.4 * rand(vec2(floor(frame / 4.), 0.2));\n    return color;\n}\n\nvoid main() {\n    vec2 uv = vTexUV;\n    uv += translation;\n    uv = vec2(vTexUV.x, mod(uv.y, 1.));\n    oFragColor = vec4(scene(uv), 1.);\n}\n"])
return t})
lazy($,"kl","$get$kl",function(){return T.bu(-1,0,-1,0,4,0,-1,0,-1)})
lazy($,"kr","$get$kr",function(){return T.b9(0.5,0.5,0.5)})
lazy($,"km","$get$km",function(){return T.bu(2,0,0,0,-1,0,0,0,-1)})
lazy($,"ks","$get$ks",function(){return T.b9(0.5,0.5,0.5)})
lazy($,"kn","$get$kn",function(){return T.bu(-2,0,0,0,2,0,0,0,0)})
lazy($,"kt","$get$kt",function(){return T.b9(0.37,0.37,0.37)})
lazy($,"ko","$get$ko",function(){var t=T.bu(0,-2,0,-2,11,-2,0,-2,0)
t.bh(0,0.333)
return t})
lazy($,"ku","$get$ku",function(){return T.b9(0,0,0)})
lazy($,"kk","$get$kk",function(){return T.bu(-1,-1,-1,-1,8,-1,-1,-1,-1)})
lazy($,"kq","$get$kq",function(){return T.b9(0,0,0)})
lazy($,"kj","$get$kj",function(){var t=T.bu(1,2,1,2,4,2,1,2,1)
t.bh(0,0.0625)
return t})
lazy($,"kp","$get$kp",function(){return T.b9(0,0,0)})
lazy($,"lx","$get$lx",function(){var t=G.Q("Convolution3x3F")
t.F(["vTexUV"])
t.I(["uTexture","uColor","uConvolutionMatrix"])
t.O(["void main() {\n    mat3 m = uConvolutionMatrix;\n    vec2 d = 1.0 / vec2(textureSize(uTexture, 0));\n    vec3 sum = vec3(0.0, 0.0, 0.0);\n    for (int x = -1; x <= 1; x++) {\n      for (int y = -1; y <= 1; y++) {\n        sum += m[x+1][y+1] * texture(uTexture, vTexUV + d * vec2(x, y)).rgb;     \n      }\n    }\n    oFragColor.rgb = uColor + sum;\n}\n"])
return t})
lazy($,"lA","$get$lA",function(){var t=G.Q("FixedVertexColorV")
t.bn(["aPosition"])
t.I(["uPerspectiveViewMatrix","uModelMatrix"])
t.F(["vColor"])
t.bv(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vColor = ColorFromPosition(aPosition);"],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return t})
lazy($,"lz","$get$lz",function(){var t=G.Q("FixedVertexColorF")
t.F(["vColor"])
t.aL(["oFragColor = vec4( vColor, 1.0 );"])
return t})
lazy($,"dF","$get$dF",function(){return H.am(C.m.cu(W.nZ(),"#effect"),"$isb6")})
lazy($,"c9","$get$c9",function(){return P.p()})})()
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
mangledGlobalNames:{z:"int",Z:"double",a7:"num",n:"String",ak:"bool",P:"Null",h:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.q},{func:1,ret:P.ak,args:[W.a0,P.n,P.n,W.bG]},{func:1,v:true,args:[P.H],opt:[P.b7]},{func:1,ret:P.z,args:[P.I,P.I]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,Blob:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGMatrix:J.a,SVGNumber:J.a,SVGPreserveAspectRatio:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bw,ArrayBufferView:H.b4,DataView:H.ff,Float32Array:H.cs,Float64Array:H.fg,Int16Array:H.fh,Int32Array:H.fi,Int8Array:H.fj,Uint16Array:H.fk,Uint32Array:H.fl,Uint8ClampedArray:H.cw,CanvasPixelArray:H.cw,Uint8Array:H.fm,HTMLAudioElement:W.j,HTMLBRElement:W.j,HTMLBaseElement:W.j,HTMLButtonElement:W.j,HTMLContentElement:W.j,HTMLDListElement:W.j,HTMLDataElement:W.j,HTMLDataListElement:W.j,HTMLDetailsElement:W.j,HTMLDialogElement:W.j,HTMLEmbedElement:W.j,HTMLFieldSetElement:W.j,HTMLHRElement:W.j,HTMLHeadingElement:W.j,HTMLHtmlElement:W.j,HTMLIFrameElement:W.j,HTMLImageElement:W.j,HTMLInputElement:W.j,HTMLLIElement:W.j,HTMLLabelElement:W.j,HTMLLegendElement:W.j,HTMLLinkElement:W.j,HTMLMapElement:W.j,HTMLMediaElement:W.j,HTMLMenuElement:W.j,HTMLMetaElement:W.j,HTMLMeterElement:W.j,HTMLModElement:W.j,HTMLOListElement:W.j,HTMLObjectElement:W.j,HTMLOptGroupElement:W.j,HTMLOptionElement:W.j,HTMLOutputElement:W.j,HTMLParagraphElement:W.j,HTMLParamElement:W.j,HTMLPictureElement:W.j,HTMLPreElement:W.j,HTMLProgressElement:W.j,HTMLQuoteElement:W.j,HTMLScriptElement:W.j,HTMLShadowElement:W.j,HTMLSlotElement:W.j,HTMLSourceElement:W.j,HTMLSpanElement:W.j,HTMLStyleElement:W.j,HTMLTableCaptionElement:W.j,HTMLTableCellElement:W.j,HTMLTableDataCellElement:W.j,HTMLTableHeaderCellElement:W.j,HTMLTableColElement:W.j,HTMLTextAreaElement:W.j,HTMLTimeElement:W.j,HTMLTitleElement:W.j,HTMLTrackElement:W.j,HTMLUListElement:W.j,HTMLUnknownElement:W.j,HTMLVideoElement:W.j,HTMLDirectoryElement:W.j,HTMLFontElement:W.j,HTMLFrameElement:W.j,HTMLFrameSetElement:W.j,HTMLMarqueeElement:W.j,HTMLElement:W.j,Accelerometer:W.c_,LinearAccelerationSensor:W.c_,AccessibleNodeList:W.dN,HTMLAnchorElement:W.dO,HTMLAreaElement:W.dP,HTMLBodyElement:W.at,HTMLCanvasElement:W.c1,CanvasRenderingContext2D:W.dV,CDATASection:W.av,CharacterData:W.av,Comment:W.av,ProcessingInstruction:W.av,Text:W.av,CSSPerspective:W.dZ,CSSPositionValue:W.e_,CSSRotation:W.e0,CSSScale:W.e1,CSSStyleDeclaration:W.aX,MSStyleCSSProperties:W.aX,CSS2Properties:W.aX,CSSImageValue:W.a_,CSSKeywordValue:W.a_,CSSNumericValue:W.a_,CSSResourceValue:W.a_,CSSUnitValue:W.a_,CSSURLImageValue:W.a_,CSSStyleValue:W.a_,CSSMatrixComponent:W.aY,CSSSkew:W.aY,CSSTransformComponent:W.aY,CSSTransformValue:W.e3,CSSTranslation:W.e4,CSSUnparsedValue:W.e5,DataTransferItemList:W.e7,DeviceAcceleration:W.e8,HTMLDivElement:W.c4,XMLDocument:W.ay,Document:W.ay,DOMException:W.e9,DOMImplementation:W.c5,DOMPoint:W.ea,DOMPointReadOnly:W.c6,ClientRectList:W.c7,DOMRectList:W.c7,DOMRectReadOnly:W.c8,DOMStringList:W.eb,DOMTokenList:W.ec,Element:W.a0,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,AccessibleNode:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RemotePlayback:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SourceBuffer:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,TextTrack:W.d,TextTrackCue:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,VTTCue:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,ServiceWorker:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,FileList:W.eD,FileWriter:W.eE,HTMLFormElement:W.eI,Gyroscope:W.eM,HTMLHeadElement:W.ch,History:W.eN,HTMLCollection:W.bp,HTMLFormControlsCollection:W.bp,HTMLOptionsCollection:W.bp,HTMLDocument:W.ci,XMLHttpRequest:W.cj,XMLHttpRequestUpload:W.bq,XMLHttpRequestEventTarget:W.bq,KeyboardEvent:W.aE,Location:W.f4,Magnetometer:W.f5,MediaList:W.fa,MIDIOutput:W.fc,MIDIInput:W.bv,MIDIPort:W.bv,MimeTypeArray:W.fd,PointerEvent:W.O,MouseEvent:W.O,DragEvent:W.O,DocumentFragment:W.q,ShadowRoot:W.q,Attr:W.q,DocumentType:W.q,Node:W.q,NodeIterator:W.cx,NodeList:W.bx,RadioNodeList:W.bx,Plugin:W.ae,PluginArray:W.fA,PresentationConnection:W.fD,Range:W.cA,RTCDataChannel:W.cD,DataChannel:W.cD,HTMLSelectElement:W.b6,AbsoluteOrientationSensor:W.ap,AmbientLightSensor:W.ap,OrientationSensor:W.ap,RelativeOrientationSensor:W.ap,Sensor:W.ap,SourceBufferList:W.fP,SpeechGrammarList:W.fR,SpeechRecognitionResult:W.af,Storage:W.fW,HTMLTableElement:W.cK,HTMLTableRowElement:W.h3,HTMLTableSectionElement:W.h4,HTMLTemplateElement:W.bB,TextTrackCueList:W.h6,TextTrackList:W.h7,TimeRanges:W.h9,TouchEvent:W.aK,TouchList:W.hd,TrackDefaultList:W.he,TreeWalker:W.cQ,CompositionEvent:W.aL,FocusEvent:W.aL,TextEvent:W.aL,UIEvent:W.aL,URL:W.hn,VRStageBoundsPoint:W.hp,VideoTrackList:W.hq,WebSocket:W.hr,WheelEvent:W.aN,Window:W.bF,DOMWindow:W.bF,CSSRuleList:W.hF,DOMRect:W.hG,GamepadList:W.i0,NamedNodeMap:W.d7,MozNamedAttrMap:W.d7,SpeechRecognitionResultList:W.ik,StyleSheetList:W.il,SVGFEBlendElement:P.ej,SVGFEColorMatrixElement:P.ek,SVGFEComponentTransferElement:P.el,SVGFECompositeElement:P.em,SVGFEConvolveMatrixElement:P.en,SVGFEDiffuseLightingElement:P.eo,SVGFEDisplacementMapElement:P.ep,SVGFEFloodElement:P.eq,SVGFEGaussianBlurElement:P.er,SVGFEImageElement:P.es,SVGFEMergeElement:P.et,SVGFEMorphologyElement:P.eu,SVGFEOffsetElement:P.ev,SVGFEPointLightElement:P.ew,SVGFESpecularLightingElement:P.ex,SVGFESpotLightElement:P.ey,SVGFETileElement:P.ez,SVGFETurbulenceElement:P.eA,SVGFilterElement:P.eF,SVGForeignObjectElement:P.eH,SVGCircleElement:P.a2,SVGEllipseElement:P.a2,SVGLineElement:P.a2,SVGPathElement:P.a2,SVGPolygonElement:P.a2,SVGPolylineElement:P.a2,SVGGeometryElement:P.a2,SVGAElement:P.ab,SVGClipPathElement:P.ab,SVGDefsElement:P.ab,SVGGElement:P.ab,SVGSwitchElement:P.ab,SVGGraphicsElement:P.ab,SVGImageElement:P.eO,SVGLengthList:P.eZ,SVGMaskElement:P.f8,SVGNumberList:P.fq,SVGPatternElement:P.fx,SVGPoint:P.fB,SVGPointList:P.fC,SVGRect:P.fF,SVGRectElement:P.fG,SVGScriptElement:P.bz,SVGStringList:P.h1,SVGAnimateElement:P.v,SVGAnimateMotionElement:P.v,SVGAnimateTransformElement:P.v,SVGAnimationElement:P.v,SVGDescElement:P.v,SVGDiscardElement:P.v,SVGFEDistantLightElement:P.v,SVGFEFuncAElement:P.v,SVGFEFuncBElement:P.v,SVGFEFuncGElement:P.v,SVGFEFuncRElement:P.v,SVGFEMergeNodeElement:P.v,SVGLinearGradientElement:P.v,SVGMarkerElement:P.v,SVGMetadataElement:P.v,SVGRadialGradientElement:P.v,SVGSetElement:P.v,SVGStopElement:P.v,SVGStyleElement:P.v,SVGSymbolElement:P.v,SVGTitleElement:P.v,SVGViewElement:P.v,SVGGradientElement:P.v,SVGComponentTransferFunctionElement:P.v,SVGFEDropShadowElement:P.v,SVGMPathElement:P.v,SVGElement:P.v,SVGSVGElement:P.h2,SVGTextPathElement:P.bC,SVGTextContentElement:P.bC,SVGTSpanElement:P.bD,SVGTextElement:P.bD,SVGTextPositioningElement:P.bD,SVGTransformList:P.hf,SVGUseElement:P.ho,AudioBuffer:P.dS,AudioTrackList:P.dT,AudioContext:P.aW,webkitAudioContext:P.aW,BaseAudioContext:P.aW,OfflineAudioContext:P.fr,WebGLRenderingContext:P.fJ,WebGL2RenderingContext:P.fK,SQLResultSetRowList:P.fS})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,Blob:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,File:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGMatrix:true,SVGNumber:true,SVGPreserveAspectRatio:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,Accelerometer:true,LinearAccelerationSensor:true,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSPositionValue:true,CSSRotation:true,CSSScale:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSSkew:true,CSSTransformComponent:false,CSSTransformValue:true,CSSTranslation:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AccessibleNode:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,Gyroscope:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,KeyboardEvent:true,Location:true,Magnetometer:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,AbsoluteOrientationSensor:true,AmbientLightSensor:true,OrientationSensor:true,RelativeOrientationSensor:true,Sensor:false,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VRStageBoundsPoint:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLengthList:true,SVGMaskElement:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMetadataElement:true,SVGRadialGradientElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransformList:true,SVGUseElement:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.ct.$nativeSuperclassTag="ArrayBufferView"
H.bJ.$nativeSuperclassTag="ArrayBufferView"
H.bK.$nativeSuperclassTag="ArrayBufferView"
H.cu.$nativeSuperclassTag="ArrayBufferView"
H.bL.$nativeSuperclassTag="ArrayBufferView"
H.bM.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
W.bO.$nativeSuperclassTag="EventTarget"
W.bP.$nativeSuperclassTag="EventTarget"
W.bQ.$nativeSuperclassTag="EventTarget"
W.bR.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.lU(U.lD(),b)},[])
else (function(b){H.lU(U.lD(),b)})([])})})()