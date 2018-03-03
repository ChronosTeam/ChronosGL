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
a[c]=function(){a[c]=function(){H.m5(b)}
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
iv:function(a,b,c,d){if(!!a.$isc)return new H.dG(a,b,[c,d])
return new H.cJ(a,b,[c,d])},
ip:function(){return new P.bA("No element")},
l2:function(){return new P.bA("Too few elements")},
cX:function(a,b,c,d){if(c-b<=32)H.lg(a,b,c,d)
else H.lf(a,b,c,d)},
lg:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.ae(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.af(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
lf:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.c.I(t+1,6)
r=a3+s
q=a4-s
p=C.c.I(a3+a4,2)
o=p-s
n=p+s
t=J.ae(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.af(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.af(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.af(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.af(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.af(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.af(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.af(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.af(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.af(a5.$2(j,i),0)){h=i
i=j
j=h}t.i(a2,r,m)
t.i(a2,p,k)
t.i(a2,q,i)
t.i(a2,o,t.h(a2,a3))
t.i(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.F(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.cX(a2,a3,g-2,a5)
H.cX(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.F(a5.$2(t.h(a2,g),l),0);)++g
for(;J.F(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.cX(a2,g,f,a5)}else H.cX(a2,g,f,a5)},
c:function c(){},
b3:function b3(){},
cI:function cI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
dG:function dG(a,b,c){this.a=a
this.b=b
this.$ti=c},
es:function es(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cK:function cK(a,b,c){this.a=a
this.b=b
this.$ti=c},
bZ:function bZ(){},
d9:function(a,b){var t=a.a9(b)
if(!u.globalState.d.cy)u.globalState.f.ae()
return t},
i2:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
k3:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.v(s).$isb)throw H.e(P.iX("Arguments to main must be a List: "+H.h(s)))
u.globalState=new H.hp(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$jc()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.h2(P.iu(null,H.aV),0)
r=P.p
s.sdL(new H.ab(0,null,null,null,null,null,0,[r,H.aU]))
s.sdO(new H.ab(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.ho()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.kY,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.ls)}if(u.globalState.x)return
s=u.globalState.a++
q=P.aL(null,null,null,r)
p=new H.b5(0,null,!1)
o=new H.aU(s,new H.ab(0,null,null,null,null,null,0,[r,H.b5]),q,u.createNewIsolate(),p,new H.ai(H.i6()),new H.ai(H.i6()),!1,!1,[],P.aL(null,null,null,null),null,null,!1,!0,P.aL(null,null,null,null))
q.l(0,0)
o.be(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bb(a,{func:1,args:[,]}))o.a9(new H.ic(t,a))
else if(H.bb(a,{func:1,args:[,,]}))o.a9(new H.id(t,a))
else o.a9(a)
u.globalState.f.ae()},
ls:function(a){var t=P.aK(["command","print","msg",a])
return new H.ad(!0,P.bH(null,P.p)).H(t)},
l_:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.l0()
return},
l0:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.t("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.t('Cannot extract URI from "'+t+'"'))},
kY:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.aT(!0,[]).U(b.data)
s=J.ae(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.lT(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aT(!0,[]).U(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aT(!0,[]).U(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.p
j=P.aL(null,null,null,k)
i=new H.b5(0,null,!1)
h=new H.aU(s,new H.ab(0,null,null,null,null,null,0,[k,H.b5]),j,u.createNewIsolate(),i,new H.ai(H.i6()),new H.ai(H.i6()),!1,!1,[],P.aL(null,null,null,null),null,null,!1,!0,P.aL(null,null,null,null))
j.l(0,0)
h.be(0,i)
u.globalState.f.a.S(0,new H.aV(h,new H.ee(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.ae()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.kx(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ae()
break
case"close":u.globalState.ch.ad(0,$.$get$jd().h(0,a))
a.terminate()
u.globalState.f.ae()
break
case"log":H.kX(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aK(["command","print","msg",t])
k=new H.ad(!0,P.bH(null,P.p)).H(k)
s.toString
self.postMessage(k)}else P.ar(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
kX:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aK(["command","log","msg",a])
r=new H.ad(!0,P.bH(null,P.p)).H(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.as(q)
t=H.aA(q)
s=P.bY(t)
throw H.e(s)}},
kZ:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.ji=$.ji+("_"+s)
$.jj=$.jj+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.G(0,["spawned",new H.b8(s,r),q,t.r])
r=new H.ef(a,b,c,d,t)
if(e){t.bw(q,q)
u.globalState.f.a.S(0,new H.aV(t,r,"start isolate"))}else r.$0()},
li:function(a,b){var t=new H.fy(!0,!1,null)
t.cP(a,b)
return t},
lt:function(a){return new H.aT(!0,[]).U(new H.ad(!1,P.bH(null,P.p)).H(a))},
ic:function ic(a,b){this.a=a
this.b=b},
id:function id(a,b){this.a=a
this.b=b},
hp:function hp(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
aU:function aU(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
hk:function hk(a,b){this.a=a
this.b=b},
h2:function h2(a,b){this.a=a
this.b=b},
h3:function h3(a){this.a=a},
aV:function aV(a,b,c){this.a=a
this.b=b
this.c=c},
ho:function ho(){},
ee:function ee(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ef:function ef(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fX:function fX(){},
b8:function b8(a,b){this.b=a
this.a=b},
hq:function hq(a,b){this.a=a
this.b=b},
bI:function bI(a,b,c){this.b=a
this.c=b
this.a=c},
b5:function b5(a,b,c){this.a=a
this.b=b
this.c=c},
fy:function fy(a,b,c){this.a=a
this.b=b
this.c=c},
fz:function fz(a,b){this.a=a
this.b=b},
fA:function fA(a,b){this.a=a
this.b=b},
ai:function ai(a){this.a=a},
ad:function ad(a,b){this.a=a
this.b=b},
aT:function aT(a,b){this.a=a
this.b=b},
lO:function(a){return u.types[a]},
lV:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.v(a).$isq},
h:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aZ(a)
if(typeof t!=="string")throw H.e(H.U(a))
return t},
le:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.f4(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aO:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
cU:function(a){var t,s,r,q,p,o,n,m
t=J.v(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.n||!!J.v(a).$isaQ){p=C.j(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.e.ay(q,0)===36)q=C.e.cw(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dc(H.hR(a),0,null),u.mangledGlobalNames)},
f0:function(a){return"Instance of '"+H.cU(a)+"'"},
S:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lc:function(a){return a.b?H.S(a).getUTCFullYear()+0:H.S(a).getFullYear()+0},
la:function(a){return a.b?H.S(a).getUTCMonth()+1:H.S(a).getMonth()+1},
l6:function(a){return a.b?H.S(a).getUTCDate()+0:H.S(a).getDate()+0},
l7:function(a){return a.b?H.S(a).getUTCHours()+0:H.S(a).getHours()+0},
l9:function(a){return a.b?H.S(a).getUTCMinutes()+0:H.S(a).getMinutes()+0},
lb:function(a){return a.b?H.S(a).getUTCSeconds()+0:H.S(a).getSeconds()+0},
l8:function(a){return a.b?H.S(a).getUTCMilliseconds()+0:H.S(a).getMilliseconds()+0},
jh:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.U(a))
return a[b]},
O:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ah(!0,b,"index",null)
t=J.di(a)
if(b<0||C.c.cg(b,t))return P.C(b,a,"index",null,t)
return P.f1(b,"index",null)},
U:function(a){return new P.ah(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.cT()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.k5})
t.name=""}else t.toString=H.k5
return t},
k5:function(){return J.aZ(this.dartException)},
E:function(a){throw H.e(a)},
G:function(a){throw H.e(new P.a9(a))},
an:function(a){var t,s,r,q,p,o
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
ju:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
it:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.el(a,s,t?null:b.receiver)},
as:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.ie(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aH(r,16)&8191)===10)switch(q){case 438:return t.$1(H.it(H.h(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.h(s)+" (Error "+q+")"
return t.$1(new H.cS(p,null))}}if(a instanceof TypeError){o=$.$get$jo()
n=$.$get$jp()
m=$.$get$jq()
l=$.$get$jr()
k=$.$get$jv()
j=$.$get$jw()
i=$.$get$jt()
$.$get$js()
h=$.$get$jy()
g=$.$get$jx()
f=o.K(s)
if(f!=null)return t.$1(H.it(s,f))
else{f=n.K(s)
if(f!=null){f.method="call"
return t.$1(H.it(s,f))}else{f=m.K(s)
if(f==null){f=l.K(s)
if(f==null){f=k.K(s)
if(f==null){f=j.K(s)
if(f==null){f=i.K(s)
if(f==null){f=l.K(s)
if(f==null){f=h.K(s)
if(f==null){f=g.K(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.cS(s,f==null?null:f.method))}}return t.$1(new H.fI(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cY()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ah(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cY()
return a},
aA:function(a){var t
if(a==null)return new H.d8(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.d8(a,null)},
lZ:function(a){if(a==null||typeof a!='object')return J.ag(a)
else return H.aO(a)},
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
lU:function(a,b,c,d,e,f,g){switch(c){case 0:return H.d9(b,new H.hY(a))
case 1:return H.d9(b,new H.hZ(a,d))
case 2:return H.d9(b,new H.i_(a,d,e))
case 3:return H.d9(b,new H.i0(a,d,e,f))
case 4:return H.d9(b,new H.i1(a,d,e,f,g))}throw H.e(P.bY("Unsupported number of arguments for wrapped closure"))},
bM:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.lU)
a.$identity=t
return t},
kL:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.v(c).$isb){t.$reflectionInfo=c
r=H.le(t).r}else r=c
q=d?Object.create(new H.fk().constructor.prototype):Object.create(new H.be(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.j4(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.lO,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.j1:H.il
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.j4(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
kI:function(a,b,c,d){var t=H.il
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
j4:function(a,b,c){var t,s,r,q
if(c)return H.kK(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.kI(s,b==null?r!=null:b!==r,t,b)
return q},
kJ:function(a,b,c,d){var t,s
t=H.il
s=H.j1
switch(b?-1:a){case 0:throw H.e(new H.fa("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
kK:function(a,b){var t,s,r,q
H.kH()
t=$.j0
if(t==null){t=H.j_("receiver")
$.j0=t}s=b.$stubName
r=b.length
q=a[s]
t=H.kJ(r,b==null?q!=null:b!==q,s,b)
return t},
iD:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.v(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.kL(a,b,t,!!d,e,f)},
il:function(a){return a.a},
j1:function(a){return a.c},
kH:function(){var t=$.j2
if(t==null){t=H.j_("self")
$.j2=t}return t},
j_:function(a){var t,s,r,q,p
t=new H.be("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
mj:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.ao(a,"String"))},
Y:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ao(a,"double"))},
mi:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ao(a,"num"))},
lF:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.ao(a,"bool"))},
lT:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.ao(a,"int"))},
m0:function(a,b){throw H.e(H.ao(a,b.substring(3)))},
m_:function(a,b){var t=J.ae(b)
throw H.e(H.j3(H.cU(a),t.b0(b,3,t.gk(b))))},
jW:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.v(a)[b])return a
H.m0(a,b)},
aB:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.v(a)[b]
else t=!0
if(t)return a
H.m_(a,b)},
mh:function(a){if(a==null)return a
if(!!J.v(a).$isb)return a
throw H.e(H.ao(a,"List"))},
jR:function(a){var t=J.v(a)
return"$S" in t?t.$S():null},
bb:function(a,b){var t
if(a==null)return!1
t=H.jR(a)
return t==null?!1:H.jX(t,b)},
mf:function(a,b){var t,s
if(a==null)return a
if($.iA)return a
$.iA=!0
try{if(H.bb(a,b))return a
t=H.aC(b,null)
s=H.ao(a,t)
throw H.e(s)}finally{$.iA=!1}},
ao:function(a,b){return new H.fH("type '"+H.cU(a)+"' is not a subtype of type '"+b+"'")},
j3:function(a,b){return new H.dt("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
ay:function(a){if(!0===a)return!1
if(!!J.v(a).$isio)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.ao(a,"bool"))},
aX:function(a){throw H.e(new H.fS(a))},
d:function(a){if(H.ay(a))throw H.e(new P.bQ(null))},
m5:function(a){throw H.e(new P.dx(a))},
i6:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
jU:function(a){return u.getIsolateTag(a)},
L:function(a){return new H.av(a,null)},
P:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
hR:function(a){if(a==null)return
return a.$ti},
jV:function(a,b){return H.iJ(a["$as"+H.h(b)],H.hR(a))},
az:function(a,b,c){var t,s
t=H.jV(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
bc:function(a,b){var t,s
t=H.hR(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aC:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dc(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.h(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aC(t,b)
return H.lu(a,b)}return"unknown-reified-type"},
lu:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aC(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aC(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aC(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.lK(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aC(l[j],b)+(" "+H.h(j))}q+="}"}return"("+q+") => "+t},
dc:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bB("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aC(o,c)}return p?"":"<"+s.j(0)+">"},
hS:function(a){var t,s
if(a instanceof H.b0){t=H.jR(a)
if(t!=null)return H.aC(t,null)}s=J.v(a).constructor.name
if(a==null)return s
return s+H.dc(a.$ti,0,null)},
iJ:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.iG(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.iG(a,null,b)
return b},
hL:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.hR(a)
s=J.v(a)
if(s[b]==null)return!1
return H.jM(H.iJ(s[d],t),c)},
dd:function(a,b,c,d){if(a==null)return a
if(H.hL(a,b,c,d))return a
throw H.e(H.j3(H.cU(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dc(c,0,null),u.mangledGlobalNames)))},
mc:function(a,b,c,d){if(a==null)return a
if(H.hL(a,b,c,d))return a
throw H.e(H.ao(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dc(c,0,null),u.mangledGlobalNames)))},
jM:function(a,b){var t,s,r,q,p
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
md:function(a,b,c){return H.iG(a,b,H.jV(b,c))},
Z:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aN")return!0
if('func' in b)return H.jX(a,b)
if('func' in a)return b.name==="io"||b.name==="r"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.d(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.d(!0)
q=b[0]}else q=b
if(q!==s){p=H.aC(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.jM(H.iJ(o,t),r)},
jL:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.Z(p,o)||H.Z(o,p)))return!1}return!0},
jX:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
if(n===m){if(!H.jL(r,q,!1))return!1
if(!H.jL(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
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
if(!(H.Z(g,f)||H.Z(f,g)))return!1}}return H.lB(a.named,b.named)},
iG:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
mk:function(a){var t=$.iE
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
mg:function(a){return H.aO(a)},
me:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lW:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.r))
t=$.iE.$1(a)
s=$.hP[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.hX[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.jK.$2(a,t)
if(t!=null){s=$.hP[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.hX[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.iH(r)
$.hP[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.hX[t]=r
return r}if(p==="-"){o=H.iH(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.jZ(a,r)
if(p==="*")throw H.e(new P.d2(t))
if(u.leafTags[t]===true){o=H.iH(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.jZ(a,r)},
jZ:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.i4(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
iH:function(a){return J.i4(a,!1,null,!!a.$isq)},
lY:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.i4(t,!1,null,!!t.$isq)
else return J.i4(t,c,null,null)},
lR:function(){if(!0===$.iF)return
$.iF=!0
H.lS()},
lS:function(){var t,s,r,q,p,o,n,m
$.hP=Object.create(null)
$.hX=Object.create(null)
H.lQ()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.k_.$1(p)
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
t=C.r()
t=H.ba(C.o,H.ba(C.u,H.ba(C.i,H.ba(C.i,H.ba(C.t,H.ba(C.p,H.ba(C.q(C.j),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.iE=new H.hU(p)
$.jK=new H.hV(o)
$.k_=new H.hW(n)},
ba:function(a,b){return a(b)||b},
f4:function f4(a,b,c,d,e,f,g,h){var _=this
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
cS:function cS(a,b){this.a=a
this.b=b},
el:function el(a,b,c){this.a=a
this.b=b
this.c=c},
fI:function fI(a){this.a=a},
ie:function ie(a){this.a=a},
d8:function d8(a,b){this.a=a
this.b=b},
hY:function hY(a){this.a=a},
hZ:function hZ(a,b){this.a=a
this.b=b},
i_:function i_(a,b,c){this.a=a
this.b=b
this.c=c},
i0:function i0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i1:function i1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
b0:function b0(){},
ft:function ft(){},
fk:function fk(){},
be:function be(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fH:function fH(a){this.a=a},
dt:function dt(a){this.a=a},
fa:function fa(a){this.a=a},
fS:function fS(a){this.a=a},
av:function av(a,b){this.a=a
this.b=b},
ab:function ab(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
ek:function ek(a){this.a=a},
en:function en(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
eo:function eo(a,b){this.a=a
this.$ti=b},
ep:function ep(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hU:function hU(a){this.a=a},
hV:function hV(a){this.a=a},
hW:function hW(a){this.a=a},
j:function(a){return a},
hH:function(a){var t,s,r
if(!!J.v(a).$iso)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bs:function bs(){},
b4:function b4(){},
eC:function eC(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
cL:function cL(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
cP:function cP(){},
eJ:function eJ(){},
bt:function bt(){},
bu:function bu(){},
bv:function bv(){},
bw:function bw(){},
lK:function(a){var t=H.P(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
i5:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
v:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cH.prototype
return J.ei.prototype}if(typeof a=="string")return J.aH.prototype
if(a==null)return J.ej.prototype
if(typeof a=="boolean")return J.eh.prototype
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.r)return a
return J.hQ(a)},
i4:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hQ:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.iF==null){H.lR()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.d2("Return interceptor for "+H.h(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$is()]
if(p!=null)return p
p=H.lW(a)
if(p!=null)return p
if(typeof a=="function")return C.v
s=Object.getPrototypeOf(a)
if(s==null)return C.k
if(s===Object.prototype)return C.k
if(typeof q=="function"){Object.defineProperty(q,$.$get$is(),{value:C.f,enumerable:false,writable:true,configurable:true})
return C.f}return C.f},
ae:function(a){if(typeof a=="string")return J.aH.prototype
if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.r)return a
return J.hQ(a)},
da:function(a){if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.r)return a
return J.hQ(a)},
jT:function(a){if(typeof a=="number")return J.b2.prototype
if(a==null)return a
if(!(a instanceof P.r))return J.aQ.prototype
return a},
lM:function(a){if(typeof a=="number")return J.b2.prototype
if(typeof a=="string")return J.aH.prototype
if(a==null)return a
if(!(a instanceof P.r))return J.aQ.prototype
return a},
lN:function(a){if(typeof a=="string")return J.aH.prototype
if(a==null)return a
if(!(a instanceof P.r))return J.aQ.prototype
return a},
n:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.r)return a
return J.hQ(a)},
F:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.v(a).A(a,b)},
af:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.jT(a).ag(a,b)},
k6:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.jT(a).au(a,b)},
bd:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lV(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ae(a).h(a,b)},
k7:function(a,b,c,d){return J.n(a).cV(a,b,c,d)},
iK:function(a,b){return J.lN(a).ay(a,b)},
iL:function(a,b){return J.n(a).bv(a,b)},
iM:function(a,b,c){return J.n(a).bx(a,b,c)},
k8:function(a,b){return J.n(a).df(a,b)},
de:function(a,b,c){return J.n(a).by(a,b,c)},
k9:function(a,b,c){return J.n(a).bz(a,b,c)},
iN:function(a,b,c){return J.n(a).bA(a,b,c)},
df:function(a,b){return J.n(a).di(a,b)},
ka:function(a,b){return J.n(a).bB(a,b)},
kb:function(a,b,c){return J.n(a).bC(a,b,c)},
iO:function(a,b,c,d){return J.n(a).bD(a,b,c,d)},
kc:function(a,b){return J.da(a).bE(a,b)},
kd:function(a,b,c,d,e){return J.n(a).bF(a,b,c,d,e)},
ke:function(a,b){return J.lM(a).L(a,b)},
ig:function(a){return J.n(a).bH(a)},
kf:function(a){return J.n(a).bI(a)},
kg:function(a){return J.n(a).dn(a)},
kh:function(a,b){return J.n(a).bL(a,b)},
ih:function(a,b){return J.n(a).bM(a,b)},
ki:function(a,b,c,d){return J.n(a).bN(a,b,c,d)},
kj:function(a,b,c,d,e){return J.n(a).dw(a,b,c,d,e)},
kk:function(a,b,c,d,e){return J.n(a).bO(a,b,c,d,e)},
kl:function(a,b,c,d,e,f){return J.n(a).dz(a,b,c,d,e,f)},
km:function(a,b){return J.da(a).p(a,b)},
dg:function(a,b){return J.n(a).bP(a,b)},
kn:function(a,b){return J.n(a).bQ(a,b)},
ko:function(a){return J.n(a).dA(a)},
kp:function(a,b){return J.da(a).aO(a,b)},
ag:function(a){return J.v(a).gw(a)},
dh:function(a){return J.da(a).gD(a)},
di:function(a){return J.ae(a).gk(a)},
kq:function(a){return J.v(a).gB(a)},
kr:function(a){return J.n(a).gas(a)},
ii:function(a){return J.n(a).gm(a)},
ij:function(a){return J.n(a).gn(a)},
iP:function(a){return J.n(a).gJ(a)},
ks:function(a){return J.n(a).at(a)},
kt:function(a,b){return J.n(a).aT(a,b)},
ku:function(a,b,c){return J.n(a).aU(a,b,c)},
iQ:function(a,b,c){return J.n(a).aX(a,b,c)},
kv:function(a,b){return J.n(a).bS(a,b)},
kw:function(a,b){return J.da(a).bU(a,b)},
kx:function(a,b){return J.n(a).G(a,b)},
ky:function(a,b,c,d){return J.n(a).b_(a,b,c,d)},
aZ:function(a){return J.v(a).j(a)},
kz:function(a,b,c,d){return J.n(a).dZ(a,b,c,d)},
kA:function(a,b,c){return J.n(a).c0(a,b,c)},
kB:function(a,b,c){return J.n(a).c1(a,b,c)},
ik:function(a,b,c){return J.n(a).c2(a,b,c)},
kC:function(a,b,c){return J.n(a).c3(a,b,c)},
iR:function(a,b,c){return J.n(a).c4(a,b,c)},
iS:function(a,b,c){return J.n(a).c5(a,b,c)},
iT:function(a,b,c){return J.n(a).c6(a,b,c)},
iU:function(a,b,c,d){return J.n(a).c7(a,b,c,d)},
iV:function(a,b,c,d){return J.n(a).c8(a,b,c,d)},
kD:function(a,b){return J.n(a).ca(a,b)},
kE:function(a,b,c){return J.n(a).e_(a,b,c)},
iW:function(a,b,c,d,e,f,g){return J.n(a).cc(a,b,c,d,e,f,g)},
kF:function(a,b,c,d,e){return J.n(a).cd(a,b,c,d,e)},
a:function a(){},
eh:function eh(){},
ej:function ej(){},
bq:function bq(){},
eV:function eV(){},
aQ:function aQ(){},
aI:function aI(){},
aG:function aG(a){this.$ti=a},
iq:function iq(a){this.$ti=a},
dm:function dm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b2:function b2(){},
cH:function cH(){},
ei:function ei(){},
aH:function aH(){}},P={
ll:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.lC()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bM(new P.fU(t),1)).observe(s,{childList:true})
return new P.fT(t,s,r)}else if(self.setImmediate!=null)return P.lD()
return P.lE()},
lm:function(a){++u.globalState.f.b
self.scheduleImmediate(H.bM(new P.fV(a),0))},
ln:function(a){++u.globalState.f.b
self.setImmediate(H.bM(new P.fW(a),0))},
lo:function(a){P.iw(C.h,a)},
lx:function(a,b){if(H.bb(a,{func:1,args:[P.aN,P.aN]})){b.toString
return a}else{b.toString
return a}},
lp:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.aq))
H.d(b.a===0)
b.a=1
try{a.c_(new P.h9(b),new P.ha(b))}catch(r){t=H.as(r)
s=H.aA(r)
P.m1(new P.hb(b,t,s))}},
jE:function(a,b){var t,s,r,q
H.d(b.a<=1)
for(;t=a.a,s=t===2,s;){H.d(s)
a=a.c}s=b.a
if(t>=4){H.d(s<4)
r=b.c
b.c=null
q=b.a7(r)
H.d(b.a<4)
H.d(a.a>=4)
b.a=a.a
b.c=a.c
P.bE(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bo(q)}},
bE:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.hI(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bE(t.a,b)}s=t.a
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
P.hI(null,null,p,o,s)
return}s=$.D
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.D
H.d(l==null?s!=null:l!==s)
j=$.D
$.D=l
i=j}else i=null
s=b.c
if(s===8)new P.hf(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.he(r,b,m).$0()}else if((s&2)!==0)new P.hd(t,r,b).$0()
if(i!=null){H.d(!0)
$.D=i}s=r.b
if(!!J.v(s).$ise8){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.a7(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.jE(s,o)
return}}g=b.b
H.d(g.a<4)
h=g.c
g.c=null
b=g.a7(h)
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
for(;t=$.b9,t!=null;){$.bK=null
s=t.b
$.b9=s
if(s==null)$.bJ=null
t.a.$0()}},
lA:function(){$.iB=!0
try{P.lw()}finally{$.bK=null
$.iB=!1
if($.b9!=null)$.$get$iy().$1(P.jN())}},
jI:function(a){var t=new P.d3(a,null)
if($.b9==null){$.bJ=t
$.b9=t
if(!$.iB)$.$get$iy().$1(P.jN())}else{$.bJ.b=t
$.bJ=t}},
lz:function(a){var t,s,r
t=$.b9
if(t==null){P.jI(a)
$.bK=$.bJ
return}s=new P.d3(a,null)
r=$.bK
if(r==null){s.b=t
$.bK=s
$.b9=s}else{s.b=r.b
r.b=s
$.bK=s
if(s.b==null)$.bJ=s}},
m1:function(a){var t=$.D
if(C.d===t){P.hK(null,null,C.d,a)
return}t.toString
P.hK(null,null,t,t.aK(a))},
lj:function(a,b){var t=$.D
if(t===C.d){t.toString
return P.iw(a,b)}return P.iw(a,t.aK(b))},
iw:function(a,b){var t=C.c.I(a.a,1000)
return H.li(t<0?0:t,b)},
ix:function(a){var t,s
H.d(a!=null)
t=$.D
H.d(a==null?t!=null:a!==t)
s=$.D
$.D=a
return s},
hI:function(a,b,c,d,e){var t={}
t.a=d
P.lz(new P.hJ(t,e))},
jG:function(a,b,c,d){var t,s
if($.D===c)return d.$0()
t=P.ix(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.D=s}},
jH:function(a,b,c,d,e){var t,s
if($.D===c)return d.$1(e)
t=P.ix(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.D=s}},
ly:function(a,b,c,d,e,f){var t,s
if($.D===c)return d.$2(e,f)
t=P.ix(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.D=s}},
hK:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.aK(d):c.dg(d)
P.jI(d)},
fU:function fU(a){this.a=a},
fT:function fT(a,b,c){this.a=a
this.b=b
this.c=c},
fV:function fV(a){this.a=a},
fW:function fW(a){this.a=a},
fZ:function fZ(){},
hC:function hC(a,b){this.a=a
this.$ti=b},
d5:function d5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
h8:function h8(a,b){this.a=a
this.b=b},
hc:function hc(a,b){this.a=a
this.b=b},
h9:function h9(a){this.a=a},
ha:function ha(a){this.a=a},
hb:function hb(a,b,c){this.a=a
this.b=b
this.c=c},
hf:function hf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hg:function hg(a){this.a=a},
he:function he(a,b,c){this.a=a
this.b=b
this.c=c},
hd:function hd(a,b,c){this.a=a
this.b=b
this.c=c},
d3:function d3(a,b){this.a=a
this.b=b},
fm:function fm(){},
fo:function fo(a){this.a=a},
fp:function fp(a,b){this.a=a
this.b=b},
fn:function fn(){},
b_:function b_(a,b){this.a=a
this.b=b},
hG:function hG(){},
hJ:function hJ(a,b){this.a=a
this.b=b},
hs:function hs(){},
hu:function hu(a,b){this.a=a
this.b=b},
ht:function ht(a,b){this.a=a
this.b=b},
hv:function hv(a,b){this.a=a
this.b=b},
jf:function(a,b){return new H.ab(0,null,null,null,null,null,0,[a,b])},
Q:function(){return new H.ab(0,null,null,null,null,null,0,[null,null])},
aK:function(a){return H.lL(a,new H.ab(0,null,null,null,null,null,0,[null,null]))},
bH:function(a,b){return new P.d6(0,null,null,null,null,null,0,[a,b])},
lr:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
l1:function(a,b,c){var t,s
if(P.iC(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bL()
C.a.l(s,a)
try{P.lv(a,t)}finally{H.d(C.a.gar(s)===a)
s.pop()}s=P.jn(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eg:function(a,b,c){var t,s,r
if(P.iC(a))return b+"..."+c
t=new P.bB(b)
s=$.$get$bL()
C.a.l(s,a)
try{r=t
r.a=P.jn(r.gZ(),a,", ")}finally{H.d(C.a.gar(s)===a)
s.pop()}s=t
s.a=s.gZ()+c
s=t.gZ()
return s.charCodeAt(0)==0?s:s},
iC:function(a){var t,s
for(t=0;s=$.$get$bL(),t<s.length;++t)if(a===s[t])return!0
return!1},
lv:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gD(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.t())return
q=H.h(t.gu())
C.a.l(b,q)
s+=q.length+2;++r}if(!t.t()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gu();++r
if(!t.t()){if(r<=4){C.a.l(b,H.h(n))
return}p=H.h(n)
o=b.pop()
s+=p.length+2}else{m=t.gu();++r
H.d(r<100)
for(;t.t();n=m,m=l){l=t.gu();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.l(b,"...")
return}}o=H.h(n)
p=H.h(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.l(b,k)
C.a.l(b,o)
C.a.l(b,p)},
aL:function(a,b,c,d){return new P.hl(0,null,null,null,null,null,0,[d])},
l3:function(a,b){var t,s
t=P.aL(null,null,null,b)
for(s=J.dh(a);s.t();)t.l(0,s.gu())
return t},
l4:function(a){var t,s,r
t={}
if(P.iC(a))return"{...}"
s=new P.bB("")
try{C.a.l($.$get$bL(),a)
r=s
r.a=r.gZ()+"{"
t.a=!0
a.aO(0,new P.et(t,s))
t=s
t.a=t.gZ()+"}"}finally{t=$.$get$bL()
H.d(C.a.gar(t)===a)
t.pop()}t=s.gZ()
return t.charCodeAt(0)==0?t:t},
iu:function(a,b){var t=new P.eq(null,0,0,0,[b])
t.cM(a,b)
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
hl:function hl(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hm:function hm(a,b,c){this.a=a
this.b=b
this.c=c},
bG:function bG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hj:function hj(){},
x:function x(){},
et:function et(a,b){this.a=a
this.b=b},
eq:function eq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hn:function hn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fe:function fe(){},
fd:function fd(){},
jn:function(a,b,c){var t=J.dh(b)
if(!t.t())return a
if(c.length===0){do a+=H.h(t.gu())
while(t.t())}else{a+=H.h(t.gu())
for(;t.t();)a=a+c+H.h(t.gu())}return a},
kM:function(a,b){return J.ke(a,b)},
kO:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.h(t)
if(t>=10)return s+"00"+H.h(t)
return s+"000"+H.h(t)},
kP:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bT:function(a){if(a>=10)return""+a
return"0"+a},
im:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aZ(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kR(a)},
kR:function(a){var t=J.v(a)
if(!!t.$isb0)return t.j(a)
return H.f0(a)},
iX:function(a){return new P.ah(!1,null,null,a)},
iY:function(a,b,c){return new P.ah(!0,a,b,c)},
kG:function(a){return new P.ah(!1,null,a,"Must not be null")},
f1:function(a,b,c){return new P.cV(null,null,!0,a,b,"Value not in range")},
bx:function(a,b,c,d,e){return new P.cV(b,c,!0,a,d,"Invalid value")},
jk:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.bx(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.bx(b,a,c,"end",f))
return b},
C:function(a,b,c,d,e){var t=e!=null?e:J.di(b)
return new P.ec(b,t,!0,a,c,"Index out of range")},
bY:function(a){return new P.h7(a)},
jg:function(a,b,c){var t,s
t=H.P([],[c])
for(s=J.dh(a);s.t();)C.a.l(t,s.gu())
if(b)return t
t.fixed$length=Array
return t},
ar:function(a){H.i5(H.h(a))},
aY:function aY(){},
H:function H(){},
bg:function bg(a,b){this.a=a
this.b=b},
M:function M(){},
aF:function aF(a){this.a=a},
dE:function dE(){},
dF:function dF(){},
b1:function b1(){},
bQ:function bQ(a){this.a=a},
cT:function cT(){},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cV:function cV(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ec:function ec(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
t:function t(a){this.a=a},
d2:function d2(a){this.a=a},
bA:function bA(a){this.a=a},
a9:function a9(a){this.a=a},
cY:function cY(){},
dx:function dx(a){this.a=a},
h7:function h7(a){this.a=a},
dH:function dH(a,b,c){this.a=a
this.b=b
this.$ti=c},
p:function p(){},
aj:function aj(){},
cG:function cG(){},
b:function b(){},
au:function au(){},
aN:function aN(){},
V:function V(){},
r:function r(){},
bz:function bz(){},
w:function w(){},
bB:function bB(a){this.a=a},
hN:function(a){var t,s,r,q,p
if(a==null)return
t=P.Q()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.G)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
lI:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.kp(a,new P.hM(t))
return t},
hM:function hM(a){this.a=a},
m4:function(a){return Math.sqrt(a)},
hr:function hr(){},
I:function I(){},
dj:function dj(){},
aD:function aD(){},
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
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e2:function e2(){},
e5:function e5(){},
aa:function aa(){},
at:function at(){},
eb:function eb(){},
ak:function ak(){},
em:function em(){},
eu:function eu(){},
ev:function ev(){},
al:function al(){},
eL:function eL(){},
eS:function eS(){},
eX:function eX(){},
eY:function eY(){},
f2:function f2(){},
f3:function f3(){},
fb:function fb(){},
fq:function fq(){},
J:function J(){},
fr:function fr(){},
fs:function fs(){},
cZ:function cZ(){},
fu:function fu(){},
bC:function bC(){},
am:function am(){},
fD:function fD(){},
fK:function fK(){},
fM:function fM(){},
fN:function fN(){},
bF:function bF(){},
hw:function hw(){},
hx:function hx(){},
hy:function hy(){},
c7:function c7(){},
ce:function ce(){},
c9:function c9(){},
cd:function cd(){},
cr:function cr(){},
ct:function ct(){},
cu:function cu(){},
cv:function cv(){},
dn:function dn(){},
f7:function f7(){},
f8:function f8(){},
hD:function hD(){},
fj:function fj(){},
ck:function ck(){},
cw:function cw(){}},W={
kQ:function(a){return"wheel"},
aW:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jF:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ap:function(a,b,c,d,e){var t=c==null?null:W.jJ(new W.h6(c))
t=new W.h5(0,a,b,t,!1,[e])
t.cT(a,b,c,!1,e)
return t},
jJ:function(a){var t=$.D
if(t===C.d)return a
return t.dh(a)},
k:function k(){},
dk:function dk(){},
dl:function dl(){},
a_:function a_(){},
dp:function dp(){},
bR:function bR(){},
dq:function dq(){},
bS:function bS(){},
ds:function ds(){},
aE:function aE(){},
dv:function dv(){},
z:function z(){},
bf:function bf(){},
dw:function dw(){},
dy:function dy(){},
dz:function dz(){},
bh:function bh(){},
bU:function bU(){},
dA:function dA(){},
dB:function dB(){},
bV:function bV(){},
bW:function bW(){},
dC:function dC(){},
dD:function dD(){},
bX:function bX(){},
l:function l(){},
f:function f(){},
a0:function a0(){},
e0:function e0(){},
e1:function e1(){},
e6:function e6(){},
a1:function a1(){},
e9:function e9(){},
bo:function bo(){},
c0:function c0(){},
ea:function ea(){},
bp:function bp(){},
ed:function ed(){},
aJ:function aJ(){},
er:function er(){},
ex:function ex(){},
ez:function ez(){},
br:function br(){},
a2:function a2(){},
eA:function eA(){},
N:function N(){},
eK:function eK(){},
y:function y(){},
cR:function cR(){},
eR:function eR(){},
eU:function eU(){},
a3:function a3(){},
eW:function eW(){},
eZ:function eZ(){},
f_:function f_(){},
f9:function f9(){},
cW:function cW(){},
fc:function fc(){},
ff:function ff(){},
a4:function a4(){},
fg:function fg(){},
a5:function a5(){},
fi:function fi(){},
a6:function a6(){},
fl:function fl(){},
W:function W(){},
ac:function ac(){},
a7:function a7(){},
X:function X(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
a8:function a8(){},
aP:function aP(){},
fB:function fB(){},
fC:function fC(){},
b7:function b7(){},
fE:function fE(){},
aw:function aw(){},
fJ:function fJ(){},
fL:function fL(){},
fO:function fO(){},
fP:function fP(){},
aR:function aR(){},
bD:function bD(){},
fQ:function fQ(a){this.a=a},
fR:function fR(){},
aS:function aS(){},
fY:function fY(){},
d4:function d4(){},
h_:function h_(){},
h0:function h0(){},
h1:function h1(){},
hh:function hh(){},
hi:function hi(){},
d7:function d7(){},
hz:function hz(){},
hA:function hA(){},
hB:function hB(){},
hE:function hE(){},
hF:function hF(){},
h4:function h4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iz:function iz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
h5:function h5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
h6:function h6(a){this.a=a},
B:function B(){},
e3:function e3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bi:function bi(){},
bj:function bj(){},
bk:function bk(){},
bl:function bl(){},
bm:function bm(){},
bn:function bn(){},
c1:function c1(){},
cl:function cl(){},
c4:function c4(){},
cf:function cf(){},
cg:function cg(){},
ch:function ch(){},
ci:function ci(){},
cj:function cj(){},
c2:function c2(){},
c5:function c5(){},
c6:function c6(){},
c3:function c3(){},
c8:function c8(){},
ca:function ca(){},
cb:function cb(){},
cc:function cc(){},
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
s=W.aJ
W.ap(t,"keydown",new B.i7(),!1,s)
W.ap(t,"keyup",new B.i8(),!1,s)
if(!$.m3)W.ap(t,"mousemove",new B.i9(),!1,W.N)
s=W.N
W.ap(t,"mousedown",new B.ia(),!1,s)
W.ap(t,"mouseup",new B.ib(),!1,s)},
l5:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.j(3))
s=$.$get$hO()
r=$.$get$bN()
q=new T.R(new Float32Array(H.j(16)))
q.R()
q=new B.eM(a,b,c,0,new T.m(t),-0.02,s,r,q,new T.m(new Float32Array(H.j(3))),new T.m(new Float32Array(H.j(3))),new T.m(new Float32Array(H.j(3))),new T.m(new Float32Array(H.j(3))),"camera:orbit",!1,!0)
q.cN(a,b,c,d)
return q},
i7:function i7(){},
i8:function i8(){},
i9:function i9(){},
ia:function ia(){},
ib:function ib(){},
eM:function eM(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
eN:function eN(a){this.a=a},
eO:function eO(a){this.a=a},
eP:function eP(){},
eQ:function eQ(a){this.a=a},
kN:function(d1,d2,d3,d4,d5,d6,d7,d8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
t=-d6
s=-d7
r=new T.m(new Float32Array(H.j(3)))
r.q(t,s,d8)
q=new T.m(new Float32Array(H.j(3)))
q.q(d6,s,d8)
p=new T.m(new Float32Array(H.j(3)))
p.q(d6,d7,d8)
o=new T.m(new Float32Array(H.j(3)))
o.q(t,d7,d8)
n=-d8
m=new T.m(new Float32Array(H.j(3)))
m.q(t,s,n)
l=new T.m(new Float32Array(H.j(3)))
l.q(t,d7,n)
k=new T.m(new Float32Array(H.j(3)))
k.q(d6,d7,n)
j=new T.m(new Float32Array(H.j(3)))
j.q(d6,s,n)
i=new T.m(new Float32Array(H.j(3)))
i.q(t,d7,n)
h=new T.m(new Float32Array(H.j(3)))
h.q(t,d7,d8)
g=new T.m(new Float32Array(H.j(3)))
g.q(d6,d7,d8)
f=new T.m(new Float32Array(H.j(3)))
f.q(d6,d7,n)
e=new T.m(new Float32Array(H.j(3)))
e.q(d6,s,d8)
d=new T.m(new Float32Array(H.j(3)))
d.q(t,s,d8)
c=new T.m(new Float32Array(H.j(3)))
c.q(t,s,n)
b=new T.m(new Float32Array(H.j(3)))
b.q(d6,s,n)
a=new T.m(new Float32Array(H.j(3)))
a.q(d6,s,n)
a0=new T.m(new Float32Array(H.j(3)))
a0.q(d6,d7,n)
a1=new T.m(new Float32Array(H.j(3)))
a1.q(d6,d7,d8)
a2=new T.m(new Float32Array(H.j(3)))
a2.q(d6,s,d8)
a3=new T.m(new Float32Array(H.j(3)))
a3.q(t,s,n)
a4=new T.m(new Float32Array(H.j(3)))
a4.q(t,s,d8)
s=new T.m(new Float32Array(H.j(3)))
s.q(t,d7,d8)
a5=new T.m(new Float32Array(H.j(3)))
a5.q(t,d7,n)
n=new Float32Array(H.j(2))
n[0]=d3
n[1]=d5
t=new Float32Array(H.j(2))
t[0]=d2
t[1]=d5
a6=new Float32Array(H.j(2))
a6[0]=d2
a6[1]=d4
a7=new Float32Array(H.j(2))
a7[0]=d3
a7[1]=d4
a8=new Float32Array(H.j(2))
a8[0]=d2
a8[1]=d5
a9=new Float32Array(H.j(2))
a9[0]=d2
a9[1]=d4
b0=new Float32Array(H.j(2))
b0[0]=d3
b0[1]=d4
b1=new Float32Array(H.j(2))
b1[0]=d3
b1[1]=d5
b2=new Float32Array(H.j(2))
b2[0]=d3
b2[1]=d4
b3=new Float32Array(H.j(2))
b3[0]=d3
b3[1]=d5
b4=new Float32Array(H.j(2))
b4[0]=d2
b4[1]=d5
b5=new Float32Array(H.j(2))
b5[0]=d2
b5[1]=d4
b6=new Float32Array(H.j(2))
b6[0]=d2
b6[1]=d4
b7=new Float32Array(H.j(2))
b7[0]=d3
b7[1]=d4
b8=new Float32Array(H.j(2))
b8[0]=d3
b8[1]=d5
b9=new Float32Array(H.j(2))
b9[0]=d2
b9[1]=d5
c0=new Float32Array(H.j(2))
c0[0]=d2
c0[1]=d5
c1=new Float32Array(H.j(2))
c1[0]=d2
c1[1]=d4
c2=new Float32Array(H.j(2))
c2[0]=d3
c2[1]=d4
c3=new Float32Array(H.j(2))
c3[0]=d3
c3[1]=d5
c4=new Float32Array(H.j(2))
c4[0]=d3
c4[1]=d5
c5=new Float32Array(H.j(2))
c5[0]=d2
c5[1]=d5
c6=new Float32Array(H.j(2))
c6[0]=d2
c6[1]=d4
c7=new Float32Array(H.j(2))
c7[0]=d3
c7[1]=d4
c8=new G.c_(!1,[],[],[],P.Q())
c8.ai("aTexUV")
c8.ai("aNormal")
c8.cC(6)
c8.cD([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.b2("aTexUV",[new T.u(n),new T.u(t),new T.u(a6),new T.u(a7),new T.u(a8),new T.u(a9),new T.u(b0),new T.u(b1),new T.u(b2),new T.u(b3),new T.u(b4),new T.u(b5),new T.u(b6),new T.u(b7),new T.u(b8),new T.u(b9),new T.u(c0),new T.u(c1),new T.u(c2),new T.u(c3),new T.u(c4),new T.u(c5),new T.u(c6),new T.u(c7)])
for(c9=0;t=$.$get$jD(),c9<6;++c9){d0=t[c9]
c8.b3("aNormal",[d0,d0,d0,d0])}return c8},
kV:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=[]
s=[]
C.a.ao(t,$.$get$j9())
C.a.ao(s,$.$get$ja())
for(r=0;r<a3;++r,t=q){q=[]
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.G)(t),++o){n=t[o]
m=n.a
l=s[m]
k=new T.m(new Float32Array(3))
k.C(l)
l=n.b
k.l(0,s[l])
k.P(0,0.5)
k.E(0)
j=s[l]
i=new T.m(new Float32Array(3))
i.C(j)
j=n.c
i.l(0,s[j])
i.P(0,0.5)
i.E(0)
h=s[j]
g=new T.m(new Float32Array(3))
g.C(h)
g.l(0,s[m])
g.P(0,0.5)
g.E(0)
f=s.length
C.a.l(s,k)
e=s.length
C.a.l(s,i)
d=s.length
C.a.l(s,g)
C.a.l(q,new G.A(m,f,d))
C.a.l(q,new G.A(l,e,f))
C.a.l(q,new G.A(j,d,e))
C.a.l(q,new G.A(f,e,d))}}c=new G.c_(!1,[],[],[],P.Q())
c.ai("aTexUV")
c.ai("aNormal")
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.G)(t),++o){n=t[o]
b=s[n.a]
H.d(Math.sqrt(b.gN())<1.01&&Math.sqrt(b.gN())>0.99)
a=s[n.b]
H.d(Math.sqrt(a.gN())<1.01&&Math.sqrt(a.gN())>0.99)
a0=s[n.c]
H.d(Math.sqrt(a0.gN())<1.01&&Math.sqrt(a0.gN())>0.99)
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
c.b3("aNormal",[b,a,a0])
m=new T.m(new Float32Array(3))
m.C(b)
m.P(0,a4)
l=new T.m(new Float32Array(3))
l.C(a)
l.P(0,a4)
a2=new T.m(new Float32Array(3))
a2.C(a0)
a2.P(0,a4)
c.cE([m,l,a2])
c.b2("aTexUV",[new T.u(j),new T.u(h),new T.u(a1)])}return c}},G={
lk:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.h(t[s])}return C.a.ac(t,"\n")},
jC:function(a,b,c){var t,s,r,q
t=J.n(a)
s=t.bJ(a,b)
t.aZ(a,s,c)
t.bG(a,s)
r=t.aW(a,s,35713)
if(r!=null&&!r){q=t.aV(a,s)
P.ar("E:Compilation failed:")
P.ar("E:"+G.lk(c))
P.ar("E:Failure:")
P.ar(C.e.Y("E:",q))
throw H.e(q)}return s},
j7:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.ii(a[s])
b[t+1]=J.ij(a[s])
b[t+2]=J.iP(a[s])}return b},
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
b[t+2]=J.iP(a[s])
b[t+3]=J.kr(a[s])}return b},
kS:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.bd(a[s],0)
b[t+1]=J.bd(a[s],1)
b[t+2]=J.bd(a[s],2)
b[t+3]=J.bd(a[s],3)}return b},
lq:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gM(t),s=s.gD(s),r=b.x,q=[[P.b,P.p]],p=[P.M],o=[T.ax],n=[T.m],m=[T.u];s.t();){l=s.gu()
if(!r.F(0,l)){k="Dropping unnecessary attribute: "+H.h(l)
if($.jS>0)H.i5("I: "+k)
continue}j=t.h(0,l)
switch($.$get$T().h(0,l).a){case"vec2":b.a3(l,G.kT(H.dd(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.a3(l,G.j7(H.dd(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.a3(l,G.kU(H.dd(j,"$isb",o,"$asb"),null),4)
break
case"float":b.a3(l,new Float32Array(H.hH(H.dd(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.a3(l,G.kS(H.dd(j,"$isb",q,"$asb"),null),4)
break
default:if(H.ay(!1))H.aX("unknown type for "+H.h(l)+" ["+J.kq(j[0]).j(0)+"] ["+new H.av(H.hS(j),null).j(0)+"] "+H.h(j))}}},
j8:function(a,b,c){var t,s,r,q,p,o,n,m
t=b.d
s=b.e.x
r=P.Q()
q=J.kg(t.a)
p=new G.ey(t,q,4,r,s,null,0,-1,null,null,P.Q(),"meshdata:"+a,!1,!0)
o=G.j7(c.d,null)
r.i(0,"aPosition",J.ig(t.a))
p.ch=o
p.b5("aPosition",o,3)
n=$.$get$T().h(0,"aPosition")
if(n==null)H.E("Unknown canonical aPosition")
H.d(s.F(0,"aPosition"))
m=s.h(0,"aPosition")
J.df(t.a,q)
t.bR(0,m,0)
s=r.h(0,"aPosition")
r=n.b6()
J.de(t.a,34962,s)
J.iW(t.a,m,r,5126,!1,0,0)
s=c.cJ()
p.y=J.ig(t.a)
H.d(p.ch!=null)
r=p.ch.length
if(r<768){p.saD(new Uint8Array(H.hH(s)))
p.Q=5121}else if(r<196608){p.saD(new Uint16Array(H.hH(s)))
p.Q=5123}else{p.saD(new Uint32Array(H.hH(s)))
p.Q=5125}J.df(t.a,q)
s=p.y
r=p.cx
q=J.v(r)
H.d(!!q.$isjz||!!q.$isjA||!!q.$isjB)
J.de(t.a,34963,s)
J.iO(t.a,34963,r,35048)
G.lq(c,p)
return p},
jl:function(a,b,c,d){var t=new G.f6(b,c,d,null,null,P.Q(),P.Q(),P.aL(null,null,null,P.w),null,a,!1,!0)
t.cO(a,b,c,d)
return t},
eB:function eB(){},
d1:function d1(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dr:function dr(){},
du:function du(a,b){this.a=a
this.b=b},
e7:function e7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
e_:function e_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c_:function c_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d0:function d0(a,b,c){this.a=a
this.b=b
this.c=c},
d_:function d_(a,b,c){this.a=a
this.b=b
this.c=c},
ew:function ew(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
ey:function ey(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
eT:function eT(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
f6:function f6(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
b6:function b6(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fh:function fh(){}},A={
jQ:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.C(c)
s=b.d
t.bV(0,s)
r=b.cx
J.aZ(b)
q=C.a.gar(e)
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
p.dm(new T.aM(o))
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
a.cI(r,e,d)
e.pop()
for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.G)(s),++l)A.jQ(a,s[l],t,d,e)},
cQ:function cQ(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
by:function by(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
f5:function f5(a,b,c,d,e,f,g,h,i,a0,a1){var _=this
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
db:function(a){var t,s
t=C.w.dC(a,0,new A.hT())
s=536870911&t+(C.c.ce(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
hT:function hT(){}},T={
K:function(a,b,c){var t=new T.m(new Float32Array(H.j(3)))
t.q(a,b,c)
return t},
aM:function aM(a){this.a=a},
R:function R(a){this.a=a},
u:function u(a){this.a=a},
m:function m(a){this.a=a},
ax:function ax(a){this.a=a}},Q={
lX:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
t={}
s=C.m.dR(document,"#webgl-canvas")
r=s.clientWidth
q=s.clientHeight
s.width=r
s.height=q
p=new G.du(null,s)
o=(s&&C.l).ci(s,"webgl2",P.aK(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=o
if(o==null)H.E(P.bY('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+J.aZ(J.ks(o))
if($.jS>0)P.ar("I: "+n)
J.kd(o,0,0,0,1)
J.dg(o,2929)
m=B.l5(25,0,0,s)
o=new T.R(new Float32Array(H.j(16)))
o.R()
n=new T.R(new Float32Array(H.j(16)))
n.R()
l=new G.eT(m,50,1,0.1,1000,o,n,new T.R(new Float32Array(H.j(16))),P.Q(),"perspective",!1,!0)
l.b9()
l.cF(r,q)
n=H.P([],[A.by])
k=new A.f5(null,p,n,17664,0,0,0,0,"main",!1,!0)
k.d=new G.e7(p,null,null,null,null)
k.z=r
k.Q=q
o=G.jl("building",p,$.$get$k1(),$.$get$k0())
j=new A.by(o,[l],[],"building",!1,!0)
H.d(!0)
C.a.l(n,j)
o=G.jl("sky",p,$.$get$jP(),$.$get$jO())
i=[]
H.d(!0)
C.a.l(n,new A.by(o,[l],i,"sky",!1,!0))
h=new G.ew(P.Q(),"mat",!1,!0)
h.aj("cDepthTest",!0)
h.aj("cDepthWrite",!0)
h.aj("cBlendEquation",$.$get$iZ())
h.aj("cStencilFunc",$.$get$jm())
g=G.j8("icosahedron-3",o,B.kV(3,1,!0))
o=new Float32Array(H.j(9))
n=new T.R(new Float32Array(H.j(16)))
n.R()
f=new T.R(new Float32Array(H.j(16)))
f.R()
e=new Float32Array(H.j(3))
d=new Float32Array(H.j(3))
c=new Float32Array(H.j(3))
b=new Float32Array(H.j(3))
f.P(0,100)
H.d(!0)
C.a.l(i,new A.cQ(h,g,[],new T.aM(o),n,f,new T.m(e),new T.m(d),new T.m(c),new T.m(b),g.a,!1,!0))
b=new Float32Array(H.j(2))
a=new T.u(b)
b[0]=0.01
b[1]=0.01
a0=B.kN(!0,0.99,0.01,0.99,0.01,1,2,1)
a1=a0.e.h(0,"aTexUV")
for(a2=8;a2<16;++a2)a1[a2].C(a)
a3=G.j8("house",j.d,a0)
for(o=j.f,n=a3.a,a4=-10;a4<10;a4+=4)for(a5=-10;a5<10;a5+=4){i=new Float32Array(9)
f=new T.R(new Float32Array(16))
f.R()
e=new Float32Array(16)
d=new T.R(e)
d.R()
c=new Float32Array(3)
b=new Float32Array(3)
a6=new Float32Array(3)
a7=new Float32Array(3)
e[12]=a4
e[13]=0
e[14]=a5
H.d(!0)
C.a.l(o,new A.cQ(h,a3,[],new T.aM(i),f,d,new T.m(c),new T.m(b),new T.m(a6),new T.m(a7),n,!1,!0))}t.a=0
new Q.i3(t,m,k).$1(0)},
i3:function i3(a,b,c){this.a=a
this.b=b
this.c=c}}
var v=[C,H,J,P,W,B,G,A,T,Q]
setFunctionNamesIfNecessary(v)
var $={}
H.ir.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gw:function(a){return H.aO(a)},
j:function(a){return H.f0(a)},
gB:function(a){return new H.av(H.hS(a),null)}}
J.eh.prototype={
j:function(a){return String(a)},
gw:function(a){return a?519018:218159},
gB:function(a){return C.L},
$isaY:1}
J.ej.prototype={
A:function(a,b){return null==b},
j:function(a){return"null"},
gw:function(a){return 0},
gB:function(a){return C.F}}
J.bq.prototype={
gw:function(a){return 0},
gB:function(a){return C.E},
j:function(a){return String(a)},
$isje:1}
J.eV.prototype={}
J.aQ.prototype={}
J.aI.prototype={
j:function(a){var t=a[$.$get$j5()]
return t==null?this.cA(a):J.aZ(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isio:1}
J.aG.prototype={
aM:function(a,b){if(!!a.immutable$list)throw H.e(new P.t(b))},
aL:function(a,b){if(!!a.fixed$length)throw H.e(new P.t(b))},
l:function(a,b){this.aL(a,"add")
a.push(b)},
ao:function(a,b){var t,s,r,q,p
t=a.length
this.aL(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.G)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.E(new P.a9(a)))
a.push(q)}},
bU:function(a,b){return new H.cK(a,b,[H.bc(a,0),null])},
ac:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.h(a[s])
return t.join(b)},
p:function(a,b){return this.h(a,b)},
gdB:function(a){if(a.length>0)return a[0]
throw H.e(H.ip())},
gar:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.ip())},
aY:function(a,b,c,d,e){var t,s
this.aM(a,"setRange")
P.jk(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.E(P.bx(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.l2())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
ct:function(a,b){this.aM(a,"sort")
H.cX(a,0,a.length-1,P.lJ())},
av:function(a){return this.ct(a,null)},
a_:function(a,b){var t
for(t=0;t<a.length;++t)if(J.F(a[t],b))return!0
return!1},
j:function(a){return P.eg(a,"[","]")},
gD:function(a){return new J.dm(a,a.length,0,null,[H.bc(a,0)])},
gw:function(a){return H.aO(a)},
gk:function(a){return a.length},
sk:function(a,b){this.aL(a,"set length")
if(b<0)throw H.e(P.bx(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.O(a,b))
if(b>=a.length||b<0)throw H.e(H.O(a,b))
return a[b]},
i:function(a,b,c){this.aM(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.O(a,b))
if(b>=a.length||b<0)throw H.e(H.O(a,b))
a[b]=c},
$iso:1,
$aso:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.iq.prototype={}
J.dm.prototype={
gu:function(){return this.d},
t:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.G(t))
r=this.c
if(r>=s){this.sba(null)
return!1}this.sba(t[r]);++this.c
return!0},
sba:function(a){this.d=a}}
J.b2.prototype={
L:function(a,b){var t
if(typeof b!=="number")throw H.e(H.U(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaP(b)
if(this.gaP(a)===t)return 0
if(this.gaP(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaP:function(a){return a===0?1/a<0:a<0},
a0:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.t(""+a+".round()"))},
dj:function(a,b,c){if(this.L(b,c)>0)throw H.e(H.U(b))
if(this.L(a,b)<0)return b
if(this.L(a,c)>0)return c
return a},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw:function(a){return a&0x1FFFFFFF},
Y:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a+b},
a2:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a-b},
cf:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a/b},
v:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a*b},
aw:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bt(a,b)},
I:function(a,b){return(a|0)===a?a/b|0:this.bt(a,b)},
bt:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.t("Result of truncating division is "+H.h(t)+": "+H.h(a)+" ~/ "+b))},
aH:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
ce:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return(a&b)>>>0},
cB:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return(a^b)>>>0},
au:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a<b},
ag:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a>b},
cg:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a>=b},
gB:function(a){return C.O},
$isV:1}
J.cH.prototype={
gB:function(a){return C.N},
$isM:1,
$isp:1,
$isV:1}
J.ei.prototype={
gB:function(a){return C.M},
$isM:1,
$isV:1}
J.aH.prototype={
ay:function(a,b){if(b>=a.length)throw H.e(H.O(a,b))
return a.charCodeAt(b)},
Y:function(a,b){if(typeof b!=="string")throw H.e(P.iY(b,null,null))
return a+b},
cv:function(a,b,c){var t
if(c>a.length)throw H.e(P.bx(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
cu:function(a,b){return this.cv(a,b,0)},
b0:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.f1(b,null,null))
if(b>c)throw H.e(P.f1(b,null,null))
if(c>a.length)throw H.e(P.f1(c,null,null))
return a.substring(b,c)},
cw:function(a,b){return this.b0(a,b,null)},
L:function(a,b){var t
if(typeof b!=="string")throw H.e(H.U(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
j:function(a){return a},
gw:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gB:function(a){return C.G},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.O(a,b))
return a[b]},
$iso:1,
$aso:function(){},
$isw:1}
H.c.prototype={$asc:null}
H.b3.prototype={
gD:function(a){return new H.cI(this,this.gk(this),0,null,[H.az(this,"b3",0)])},
dY:function(a,b){var t,s
t=H.P([],[H.az(this,"b3",0)])
C.a.sk(t,this.gk(this))
for(s=0;s<this.gk(this);++s)t[s]=this.p(0,s)
return t},
dX:function(a){return this.dY(a,!0)}}
H.cI.prototype={
gu:function(){return this.d},
t:function(){var t,s,r,q
t=this.a
s=J.ae(t)
r=s.gk(t)
if(this.b!==r)throw H.e(new P.a9(t))
q=this.c
if(q>=r){this.sa5(null)
return!1}this.sa5(s.p(t,q));++this.c
return!0},
sa5:function(a){this.d=a}}
H.cJ.prototype={
gD:function(a){return new H.es(null,J.dh(this.a),this.b,this.$ti)},
gk:function(a){return J.di(this.a)},
$asaj:function(a,b){return[b]}}
H.dG.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.es.prototype={
t:function(){var t=this.b
if(t.t()){this.sa5(this.c.$1(t.gu()))
return!0}this.sa5(null)
return!1},
gu:function(){return this.a},
sa5:function(a){this.a=a},
$ascG:function(a,b){return[b]}}
H.cK.prototype={
gk:function(a){return J.di(this.a)},
p:function(a,b){return this.b.$1(J.km(this.a,b))},
$asc:function(a,b){return[b]},
$asb3:function(a,b){return[b]},
$asaj:function(a,b){return[b]}}
H.bZ.prototype={}
H.ic.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.id.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hp.prototype={
sdL:function(a){this.z=a},
sdO:function(a){this.ch=a}}
H.aU.prototype={
bw:function(a,b){if(!this.f.A(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aJ()},
dT:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.ad(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bm();++r.d}this.y=!1}this.aJ()},
dd:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
dS:function(a){var t,s,r
if(this.ch==null)return
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.E(new P.t("removeRange"))
P.jk(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cr:function(a,b){if(!this.r.A(0,a))return
this.db=b},
dF:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.G(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.iu(null,null)
this.cx=t}t.S(0,new H.hk(a,c))},
dE:function(a,b){var t
if(!this.r.A(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aq()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.iu(null,null)
this.cx=t}t.S(0,this.gdM())},
dG:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.ar(a)
if(b!=null)P.ar(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aZ(a)
s[1]=b==null?null:b.j(0)
for(r=new P.bG(t,t.r,null,null,[null]),r.c=t.e;r.t();)r.d.G(0,s)},
a9:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.as(o)
p=H.aA(o)
this.dG(q,p)
if(this.db){this.aq()
if(this===u.globalState.e)throw o}}finally{this.cy=H.lF(r)
u.globalState.d=H.jW(t,"$isaU")
if(t!=null)$=t.gdK()
if(this.cx!=null)for(;n=this.cx,!n.gap(n);)this.cx.bW().$0()}return s},
bT:function(a){return this.b.h(0,a)},
be:function(a,b){var t=this.b
if(t.F(0,a))throw H.e(P.bY("Registry: ports must be registered only once."))
t.i(0,a,b)},
aJ:function(){var t=this.b
if(t.gk(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.aq()},
aq:function(){var t,s,r
t=this.cx
if(t!=null)t.T(0)
for(t=this.b,s=t.gcb(t),s=s.gD(s);s.t();)s.gu().cX()
t.T(0)
this.c.T(0)
u.globalState.z.ad(0,this.a)
this.dx.T(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].G(0,t[r+1])
this.ch=null}},
gdK:function(){return this.d},
gdl:function(){return this.e}}
H.hk.prototype={
$0:function(){this.a.G(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.h2.prototype={
dr:function(){var t=this.a
if(t.b===t.c)return
return t.bW()},
bY:function(){var t,s,r
t=this.dr()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.F(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gap(s)}else s=!1
else s=!1
else s=!1
if(s)H.E(P.bY("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gap(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aK(["command","close"])
r=new H.ad(!0,new P.d6(0,null,null,null,null,null,0,[null,P.p])).H(r)
s.toString
self.postMessage(r)}return!1}t.dQ()
return!0},
br:function(){if(self.window!=null)new H.h3(this).$0()
else for(;this.bY(););},
ae:function(){var t,s,r,q,p
if(!u.globalState.x)this.br()
else try{this.br()}catch(r){t=H.as(r)
s=H.aA(r)
q=u.globalState.Q
p=P.aK(["command","error","msg",H.h(t)+"\n"+H.h(s)])
p=new H.ad(!0,P.bH(null,P.p)).H(p)
q.toString
self.postMessage(p)}}}
H.h3.prototype={
$0:function(){if(!this.a.bY())return
P.lj(C.h,this)},
$S:function(){return{func:1,v:true}}}
H.aV.prototype={
dQ:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.a9(this.b)}}
H.ho.prototype={}
H.ee.prototype={
$0:function(){H.kZ(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.ef.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bb(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bb(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aJ()},
$S:function(){return{func:1,v:true}}}
H.fX.prototype={}
H.b8.prototype={
G:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.lt(b)
if(t.gdl()===s){s=J.ae(r)
switch(s.h(r,0)){case"pause":t.bw(s.h(r,1),s.h(r,2))
break
case"resume":t.dT(s.h(r,1))
break
case"add-ondone":t.dd(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.dS(s.h(r,1))
break
case"set-errors-fatal":t.cr(s.h(r,1),s.h(r,2))
break
case"ping":t.dF(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.dE(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ad(0,s)
break}return}u.globalState.f.a.S(0,new H.aV(t,new H.hq(this,r),"receive"))},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.b8){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gw:function(a){return this.b.a}}
H.hq.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.cU(0,this.b)},
$S:function(){return{func:1}}}
H.bI.prototype={
G:function(a,b){var t,s,r
t=P.aK(["command","message","port",this,"msg",b])
s=new H.ad(!0,P.bH(null,P.p)).H(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bI){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gw:function(a){return C.c.cB((this.b<<16^this.a<<8)>>>0,this.c)}}
H.b5.prototype={
cX:function(){this.c=!0
this.b=null},
cU:function(a,b){if(this.c)return
this.b.$1(b)},
$isld:1}
H.fy.prototype={
cP:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.S(0,new H.aV(s,new H.fz(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.bM(new H.fA(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.t("Timer greater than 0."))}}}
H.fz.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.fA.prototype={
$0:function(){this.a.c=null
H.i2()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ai.prototype={
gw:function(a){var t=this.a
t=C.c.aH(t,0)^C.c.I(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
A:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ai){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.ad.prototype={
H:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gk(t))
t=J.v(a)
if(!!t.$isbs)return["buffer",a]
if(!!t.$isb4)return["typed",a]
if(!!t.$iso)return this.cn(a)
if(!!t.$iskW){r=this.gck()
q=t.gM(a)
q=H.iv(q,r,H.az(q,"aj",0),null)
q=P.jg(q,!0,H.az(q,"aj",0))
t=t.gcb(a)
t=H.iv(t,r,H.az(t,"aj",0),null)
return["map",q,P.jg(t,!0,H.az(t,"aj",0))]}if(!!t.$isje)return this.co(a)
if(!!t.$isa)this.c9(a)
if(!!t.$isld)this.af(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isb8)return this.cp(a)
if(!!t.$isbI)return this.cq(a)
if(!!t.$isb0){p=a.$static_name
if(p==null)this.af(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isai)return["capability",a.a]
if(!(a instanceof P.r))this.c9(a)
return["dart",u.classIdExtractor(a),this.cm(u.classFieldsExtractor(a))]},
af:function(a,b){throw H.e(new P.t((b==null?"Can't transmit:":b)+" "+H.h(a)))},
c9:function(a){return this.af(a,null)},
cn:function(a){var t
H.d(typeof a!=="string")
t=this.cl(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.af(a,"Can't serialize indexable: ")},
cl:function(a){var t,s
t=[]
C.a.sk(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.H(a[s])
return t},
cm:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.H(a[t]))
return a},
co:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.af(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sk(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.H(a[t[r]])
return["js-object",t,s]},
cq:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cp:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aT.prototype={
U:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.iX("Bad serialized message: "+H.h(a)))
switch(C.a.gdB(a)){case"ref":H.d(J.F(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.d(J.F(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.d(J.F(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.d(J.F(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
s=H.P(this.a8(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.F(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.P(this.a8(t),[null])
case"mutable":H.d(J.F(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.a8(t)
case"const":H.d(J.F(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.P(this.a8(t),[null])
s.fixed$length=Array
return s
case"map":return this.du(a)
case"sendport":return this.dv(a)
case"raw sendport":H.d(J.F(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.dt(a)
case"function":H.d(J.F(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.F(a[0],"capability"))
return new H.ai(a[1])
case"dart":H.d(J.F(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.l(this.b,p)
this.a8(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.h(a))}},
a8:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.U(a[t]))
return a},
du:function(a){var t,s,r,q,p
H.d(J.F(a[0],"map"))
t=a[1]
s=a[2]
r=P.Q()
C.a.l(this.b,r)
t=J.kw(t,this.gds()).dX(0)
for(q=J.ae(s),p=0;p<t.length;++p)r.i(0,t[p],this.U(q.h(s,p)))
return r},
dv:function(a){var t,s,r,q,p,o,n
H.d(J.F(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.bT(r)
if(o==null)return
n=new H.b8(o,s)}else n=new H.bI(t,r,s)
C.a.l(this.b,n)
return n},
dt:function(a){var t,s,r,q,p,o
H.d(J.F(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.ae(t),p=J.ae(s),o=0;o<q.gk(t);++o)r[q.h(t,o)]=this.U(p.h(s,o))
return r}}
H.f4.prototype={}
H.fF.prototype={
K:function(a){var t,s,r
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
H.cS.prototype={
j:function(a){var t=this.b
if(t==null)return"NullError: "+H.h(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.el.prototype={
j:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.h(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.h(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.h(this.a)+")"}}
H.fI.prototype={
j:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.ie.prototype={
$1:function(a){if(!!J.v(a).$isb1)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.d8.prototype={
j:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.hY.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.hZ.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.i_.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.i0.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.i1.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.b0.prototype={
j:function(a){return"Closure '"+H.cU(this).trim()+"'"},
$isio:1,
ge0:function(){return this},
$D:null}
H.ft.prototype={}
H.fk.prototype={
j:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.be.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.be))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gw:function(a){var t,s
t=this.c
if(t==null)s=H.aO(this.a)
else s=typeof t!=="object"?J.ag(t):H.aO(t)
return(s^H.aO(this.b))>>>0},
j:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.h(this.d)+"' of "+H.f0(t)}}
H.fH.prototype={
j:function(a){return this.a}}
H.dt.prototype={
j:function(a){return this.a}}
H.fa.prototype={
j:function(a){return"RuntimeError: "+H.h(this.a)}}
H.fS.prototype={
j:function(a){return C.e.Y("Assertion failed: ",P.im(this.a))}}
H.av.prototype={
j:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gw:function(a){return J.ag(this.a)},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.av){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ab.prototype={
gk:function(a){return this.a},
gap:function(a){return this.a===0},
gM:function(a){return new H.eo(this,[H.bc(this,0)])},
gcb:function(a){return H.iv(this.gM(this),new H.ek(this),H.bc(this,0),H.bc(this,1))},
F:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bj(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bj(s,b)}else return this.dH(b)},
dH:function(a){var t=this.d
if(t==null)return!1
return this.ab(this.an(t,this.aa(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.a6(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.a6(r,b)
return s==null?null:s.b}else return this.dI(b)},
dI:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.an(t,this.aa(a))
r=this.ab(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aE()
this.b=t}this.bc(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aE()
this.c=s}this.bc(s,b,c)}else{r=this.d
if(r==null){r=this.aE()
this.d=r}q=this.aa(b)
p=this.an(r,q)
if(p==null)this.aG(r,q,[this.aF(b,c)])
else{o=this.ab(p,b)
if(o>=0)p[o].b=c
else p.push(this.aF(b,c))}}},
ad:function(a,b){if(typeof b==="string")return this.bp(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bp(this.c,b)
else return this.dJ(b)},
dJ:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.an(t,this.aa(a))
r=this.ab(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bu(q)
return q.b},
T:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
aO:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a9(this))
t=t.c}},
bc:function(a,b,c){var t=this.a6(a,b)
if(t==null)this.aG(a,b,this.aF(b,c))
else t.b=c},
bp:function(a,b){var t
if(a==null)return
t=this.a6(a,b)
if(t==null)return
this.bu(t)
this.bk(a,b)
return t.b},
aF:function(a,b){var t,s
t=new H.en(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bu:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
aa:function(a){return J.ag(a)&0x3ffffff},
ab:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.F(a[s].a,b))return s
return-1},
j:function(a){return P.l4(this)},
a6:function(a,b){return a[b]},
an:function(a,b){return a[b]},
aG:function(a,b,c){H.d(c!=null)
a[b]=c},
bk:function(a,b){delete a[b]},
bj:function(a,b){return this.a6(a,b)!=null},
aE:function(){var t=Object.create(null)
this.aG(t,"<non-identifier-key>",t)
this.bk(t,"<non-identifier-key>")
return t},
$iskW:1}
H.ek.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.en.prototype={}
H.eo.prototype={
gk:function(a){return this.a.a},
gD:function(a){var t,s
t=this.a
s=new H.ep(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.ep.prototype={
gu:function(){return this.d},
t:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a9(t))
else{t=this.c
if(t==null){this.sbb(null)
return!1}else{this.sbb(t.a)
this.c=this.c.c
return!0}}},
sbb:function(a){this.d=a}}
H.hU.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.hV.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.w]}}}
H.hW.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.w]}}}
H.bs.prototype={
gB:function(a){return C.x},
$isbs:1}
H.b4.prototype={$isb4:1}
H.eC.prototype={
gB:function(a){return C.y}}
H.cM.prototype={
gk:function(a){return a.length},
$iso:1,
$aso:function(){},
$isq:1,
$asq:function(){}}
H.cN.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.O(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.O(a,b))
a[b]=c}}
H.cO.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.O(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.cL.prototype={
gB:function(a){return C.z},
$isc:1,
$asc:function(){return[P.M]},
$isb:1,
$asb:function(){return[P.M]},
$ise4:1}
H.eD.prototype={
gB:function(a){return C.A},
$isc:1,
$asc:function(){return[P.M]},
$isb:1,
$asb:function(){return[P.M]}}
H.eE.prototype={
gB:function(a){return C.B},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.O(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.eF.prototype={
gB:function(a){return C.C},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.O(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$isjb:1}
H.eG.prototype={
gB:function(a){return C.D},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.O(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.eH.prototype={
gB:function(a){return C.H},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.O(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$isjz:1}
H.eI.prototype={
gB:function(a){return C.I},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.O(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$isjA:1}
H.cP.prototype={
gB:function(a){return C.J},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.O(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.eJ.prototype={
gB:function(a){return C.K},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.O(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$isjB:1}
H.bt.prototype={
$aso:function(){},
$isc:1,
$asc:function(){return[P.p]},
$asq:function(){},
$isb:1,
$asb:function(){return[P.p]}}
H.bu.prototype={
$aso:function(){},
$isc:1,
$asc:function(){return[P.M]},
$asq:function(){},
$isb:1,
$asb:function(){return[P.M]}}
H.bv.prototype={
$aso:function(){},
$asc:function(){return[P.M]},
$asq:function(){},
$asb:function(){return[P.M]}}
H.bw.prototype={
$aso:function(){},
$asc:function(){return[P.p]},
$asq:function(){},
$asb:function(){return[P.p]}}
P.fU.prototype={
$1:function(a){var t,s
H.i2()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.fT.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.fV.prototype={
$0:function(){H.i2()
this.a.$0()},
$S:function(){return{func:1}}}
P.fW.prototype={
$0:function(){H.i2()
this.a.$0()},
$S:function(){return{func:1}}}
P.fZ.prototype={}
P.hC.prototype={
dk:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.bA("Future already completed"))
t.aA(b)}}
P.d5.prototype={
dP:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.aR(this.d,a.a)},
dD:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bb(s,{func:1,args:[P.r,P.bz]}))return t.dU(s,a.a,a.b)
else return t.aR(s,a.a)}}
P.aq.prototype={
c_:function(a,b){var t,s,r
t=$.D
if(t!==C.d){t.toString
if(b!=null)b=P.lx(b,t)}s=new P.aq(0,t,null,[null])
r=b==null?1:3
this.bd(new P.d5(null,s,r,a,b,[H.bc(this,0),null]))
return s},
bZ:function(a){return this.c_(a,null)},
bf:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
bd:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.jW(this.c,"$isd5")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.bd(a)
return}this.bf(t)}H.d(this.a>=4)
t=this.b
t.toString
P.hK(null,null,t,new P.h8(this,a))}},
bo:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.bo(a)
return}this.bf(s)}H.d(this.a>=4)
t.a=this.a7(a)
s=this.b
s.toString
P.hK(null,null,s,new P.hc(t,this))}},
bq:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.a7(t)},
a7:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aA:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.hL(a,"$ise8",t,"$ase8"))if(H.hL(a,"$isaq",t,null))P.jE(a,this)
else P.lp(a,this)
else{s=this.bq()
H.d(this.a<4)
this.a=4
this.c=a
P.bE(this,s)}},
ak:function(a,b){var t
H.d(this.a<4)
t=this.bq()
H.d(this.a<4)
this.a=8
this.c=new P.b_(a,b)
P.bE(this,t)},
cZ:function(a){return this.ak(a,null)},
$ise8:1,
gaI:function(){return this.a},
gd9:function(){return this.c}}
P.h8.prototype={
$0:function(){P.bE(this.a,this.b)},
$S:function(){return{func:1}}}
P.hc.prototype={
$0:function(){P.bE(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.h9.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.aA(a)},
$S:function(){return{func:1,args:[,]}}}
P.ha.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.ak(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hb.prototype={
$0:function(){this.a.ak(this.b,this.c)},
$S:function(){return{func:1}}}
P.hf.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.bX(q.d)}catch(n){s=H.as(n)
r=H.aA(n)
if(this.c){q=this.a.a
H.d(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.d(q.a===8)
p.b=q.c}else p.b=new P.b_(s,r)
p.a=!0
return}if(!!J.v(t).$ise8){if(t instanceof P.aq&&t.gaI()>=4){if(t.gaI()===8){q=t
H.d(q.gaI()===8)
p=this.b
p.b=q.gd9()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.bZ(new P.hg(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hg.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.he.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.aR(r.d,this.c)}catch(q){t=H.as(q)
s=H.aA(q)
r=this.a
r.b=new P.b_(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hd.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.dP(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.dD(t)
p.a=!1}}catch(o){s=H.as(o)
r=H.aA(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.b_(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.d3.prototype={}
P.fm.prototype={
gk:function(a){var t,s
t={}
s=new P.aq(0,$.D,null,[P.p])
t.a=0
this.dN(new P.fo(t),!0,new P.fp(t,s),s.gcY())
return s}}
P.fo.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.fp.prototype={
$0:function(){this.b.aA(this.a.a)},
$S:function(){return{func:1}}}
P.fn.prototype={}
P.b_.prototype={
j:function(a){return H.h(this.a)},
$isb1:1}
P.hG.prototype={}
P.hJ.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.cT()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.j(0)
throw r},
$S:function(){return{func:1}}}
P.hs.prototype={
dV:function(a){var t,s,r
try{if(C.d===$.D){a.$0()
return}P.jG(null,null,this,a)}catch(r){t=H.as(r)
s=H.aA(r)
P.hI(null,null,this,t,s)}},
dW:function(a,b){var t,s,r
try{if(C.d===$.D){a.$1(b)
return}P.jH(null,null,this,a,b)}catch(r){t=H.as(r)
s=H.aA(r)
P.hI(null,null,this,t,s)}},
dg:function(a){return new P.hu(this,a)},
aK:function(a){return new P.ht(this,a)},
dh:function(a){return new P.hv(this,a)},
h:function(a,b){return},
bX:function(a){if($.D===C.d)return a.$0()
return P.jG(null,null,this,a)},
aR:function(a,b){if($.D===C.d)return a.$1(b)
return P.jH(null,null,this,a,b)},
dU:function(a,b,c){if($.D===C.d)return a.$2(b,c)
return P.ly(null,null,this,a,b,c)}}
P.hu.prototype={
$0:function(){return this.a.bX(this.b)},
$S:function(){return{func:1}}}
P.ht.prototype={
$0:function(){return this.a.dV(this.b)},
$S:function(){return{func:1}}}
P.hv.prototype={
$1:function(a){return this.a.dW(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.d6.prototype={
aa:function(a){return H.lZ(a)&0x3ffffff},
ab:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hl.prototype={
gD:function(a){var t=new P.bG(this,this.r,null,null,[null])
t.c=this.e
return t},
gk:function(a){return this.a},
a_:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.d_(b)},
d_:function(a){var t=this.d
if(t==null)return!1
return this.am(t[this.al(a)],a)>=0},
bT:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.a_(0,a)?a:null
else return this.d6(a)},
d6:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.al(a)]
r=this.am(s,a)
if(r<0)return
return J.bd(s,r).gd1()},
l:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bg(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bg(r,b)}else return this.S(0,b)},
S:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.lr()
this.d=t}s=this.al(b)
r=t[s]
if(r==null){q=[this.az(b)]
H.d(q!=null)
t[s]=q}else{if(this.am(r,b)>=0)return!1
r.push(this.az(b))}return!0},
ad:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bh(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bh(this.c,b)
else return this.d7(0,b)},
d7:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.al(b)]
r=this.am(s,b)
if(r<0)return!1
this.bi(s.splice(r,1)[0])
return!0},
T:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bg:function(a,b){var t
if(a[b]!=null)return!1
t=this.az(b)
H.d(!0)
a[b]=t
return!0},
bh:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bi(t)
delete a[b]
return!0},
az:function(a){var t,s
t=new P.hm(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bi:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
al:function(a){return J.ag(a)&0x3ffffff},
am:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.F(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.hm.prototype={
gd1:function(){return this.a}}
P.bG.prototype={
gu:function(){return this.d},
t:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a9(t))
else{t=this.c
if(t==null){this.sa4(null)
return!1}else{this.sa4(t.a)
this.c=this.c.b
return!0}}},
sa4:function(a){this.d=a}}
P.hj.prototype={}
P.x.prototype={
gD:function(a){return new H.cI(a,this.gk(a),0,null,[H.az(a,"x",0)])},
p:function(a,b){return this.h(a,b)},
bU:function(a,b){return new H.cK(a,b,[H.az(a,"x",0),null])},
dC:function(a,b,c){var t,s,r
t=this.gk(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gk(a))throw H.e(new P.a9(a))}return s},
j:function(a){return P.eg(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.et.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.h(a)
t.a=s+": "
t.a+=H.h(b)},
$S:function(){return{func:1,args:[,,]}}}
P.eq.prototype={
gD:function(a){return new P.hn(this,this.c,this.d,this.b,null,this.$ti)},
gap:function(a){return this.b===this.c},
gk:function(a){return(this.c-this.b&this.a.length-1)>>>0},
p:function(a,b){var t=(this.c-this.b&this.a.length-1)>>>0
if(C.c.ag(0,b)||b>=t)H.E(P.C(b,this,"index",null,t))
return this.a[(C.c.Y(this.b,b)&this.a.length-1)>>>0]},
T:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
j:function(a){return P.eg(this,"{","}")},
bW:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.ip());++this.d
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
if(this.b===t)this.bm();++this.d},
bm:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.P(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.aY(s,0,q,t,r)
C.a.aY(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbs(s)},
cM:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbs(H.P(t,[b]))},
sbs:function(a){this.a=a},
$asc:null}
P.hn.prototype={
gu:function(){return this.e},
t:function(){var t,s
t=this.a
if(this.c!==t.d)H.E(new P.a9(t))
s=this.d
if(s===this.b){this.sa4(null)
return!1}this.sa4(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sa4:function(a){this.e=a}}
P.fe.prototype={
j:function(a){return P.eg(this,"{","}")},
$isc:1,
$asc:null}
P.fd.prototype={}
P.aY.prototype={}
P.H.prototype={}
P.bg.prototype={
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.bg))return!1
return this.a===b.a&&this.b===b.b},
L:function(a,b){return C.c.L(this.a,b.a)},
gw:function(a){var t=this.a
return(t^C.c.aH(t,30))&1073741823},
j:function(a){var t,s,r,q,p,o,n
t=P.kO(H.lc(this))
s=P.bT(H.la(this))
r=P.bT(H.l6(this))
q=P.bT(H.l7(this))
p=P.bT(H.l9(this))
o=P.bT(H.lb(this))
n=P.kP(H.l8(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isH:1,
$asH:function(){return[P.bg]}}
P.M.prototype={$isH:1,
$asH:function(){return[P.V]}}
P.aF.prototype={
au:function(a,b){return C.c.au(this.a,b.gd0())},
ag:function(a,b){return C.c.ag(this.a,b.gd0())},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.aF))return!1
return this.a===b.a},
gw:function(a){return this.a&0x1FFFFFFF},
L:function(a,b){return C.c.L(this.a,b.a)},
j:function(a){var t,s,r,q,p
t=new P.dF()
s=this.a
if(s<0)return"-"+new P.aF(0-s).j(0)
r=t.$1(C.c.I(s,6e7)%60)
q=t.$1(C.c.I(s,1e6)%60)
p=new P.dE().$1(s%1e6)
return""+C.c.I(s,36e8)+":"+H.h(r)+":"+H.h(q)+"."+H.h(p)},
$isH:1,
$asH:function(){return[P.aF]}}
P.dE.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.w,args:[P.p]}}}
P.dF.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.w,args:[P.p]}}}
P.b1.prototype={}
P.bQ.prototype={
j:function(a){return"Assertion failed"}}
P.cT.prototype={
j:function(a){return"Throw of null."}}
P.ah.prototype={
gaC:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaB:function(){return""},
j:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.h(t)
q=this.gaC()+s+r
if(!this.a)return q
p=this.gaB()
o=P.im(this.b)
return q+p+": "+H.h(o)}}
P.cV.prototype={
gaC:function(){return"RangeError"},
gaB:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.h(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.h(t)
else if(r>t)s=": Not in range "+H.h(t)+".."+H.h(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.h(t)}return s}}
P.ec.prototype={
gaC:function(){return"RangeError"},
gaB:function(){H.d(this.a)
if(J.k6(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.h(t)},
gk:function(a){return this.f}}
P.t.prototype={
j:function(a){return"Unsupported operation: "+this.a}}
P.d2.prototype={
j:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.bA.prototype={
j:function(a){return"Bad state: "+this.a}}
P.a9.prototype={
j:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.h(P.im(t))+"."}}
P.cY.prototype={
j:function(a){return"Stack Overflow"},
$isb1:1}
P.dx.prototype={
j:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.h7.prototype={
j:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.h(t)}}
P.dH.prototype={
j:function(a){return"Expando:"+H.h(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.E(P.iY(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.jh(b,"expando$values")
return s==null?null:H.jh(s,t)}}
P.p.prototype={$isH:1,
$asH:function(){return[P.V]}}
P.aj.prototype={
gk:function(a){var t,s
H.d(!this.$isc)
t=this.gD(this)
for(s=0;t.t();)++s
return s},
p:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.kG("index"))
if(b<0)H.E(P.bx(b,0,null,"index",null))
for(t=this.gD(this),s=0;t.t();){r=t.gu()
if(b===s)return r;++s}throw H.e(P.C(b,this,"index",null,s))},
j:function(a){return P.l1(this,"(",")")}}
P.cG.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.au.prototype={}
P.aN.prototype={
gw:function(a){return P.r.prototype.gw.call(this,this)},
j:function(a){return"null"}}
P.V.prototype={$isH:1,
$asH:function(){return[P.V]}}
P.r.prototype={constructor:P.r,$isr:1,
A:function(a,b){return this===b},
gw:function(a){return H.aO(this)},
j:function(a){return H.f0(this)},
gB:function(a){return new H.av(H.hS(this),null)},
toString:function(){return this.j(this)}}
P.bz.prototype={}
P.w.prototype={$isH:1,
$asH:function(){return[P.w]}}
P.bB.prototype={
gk:function(a){return this.a.length},
j:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gZ:function(){return this.a}}
W.k.prototype={}
W.dk.prototype={
j:function(a){return String(a)},
$isa:1}
W.dl.prototype={
j:function(a){return String(a)},
$isa:1}
W.a_.prototype={$isr:1}
W.dp.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]},
$isq:1,
$asq:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.bR.prototype={}
W.dq.prototype={$isa:1}
W.bS.prototype={
ci:function(a,b,c){var t=this.d3(a,b,P.lI(c,null))
return t},
d3:function(a,b,c){return a.getContext(b,c)}}
W.ds.prototype={
at:function(a){return P.hN(a.getContextAttributes())}}
W.aE.prototype={$isa:1,
gk:function(a){return a.length}}
W.dv.prototype={$isa:1}
W.z.prototype={$isr:1}
W.bf.prototype={
gk:function(a){return a.length}}
W.dw.prototype={}
W.dy.prototype={
h:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.dz.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
W.bh.prototype={
dR:function(a,b){return a.querySelector(b)}}
W.bU.prototype={$isa:1}
W.dA.prototype={
j:function(a){return String(a)}}
W.dB.prototype={
gas:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
W.bV.prototype={
gas:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
W.bW.prototype={
j:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gX(a))+" x "+H.h(this.gW(a))},
A:function(a,b){var t
if(b==null)return!1
t=J.v(b)
if(!t.$isI)return!1
return a.left===t.gaQ(b)&&a.top===t.gaS(b)&&this.gX(a)===t.gX(b)&&this.gW(a)===t.gW(b)},
gw:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gX(a)
q=this.gW(a)
return W.jF(W.aW(W.aW(W.aW(W.aW(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gW:function(a){return a.height},
gaQ:function(a){return a.left},
gaS:function(a){return a.top},
gX:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isI:1,
$asI:function(){}}
W.dC.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[P.w]},
$isc:1,
$asc:function(){return[P.w]},
$isq:1,
$asq:function(){return[P.w]},
$isb:1,
$asb:function(){return[P.w]}}
W.dD.prototype={
gk:function(a){return a.length}}
W.bX.prototype={
j:function(a){return a.localName},
$isa:1}
W.l.prototype={}
W.f.prototype={
cV:function(a,b,c,d){return a.addEventListener(b,H.bM(c,1),!1)},
$isr:1,
$isf:1}
W.a0.prototype={$isr:1}
W.e0.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]},
$isq:1,
$asq:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.e1.prototype={
gk:function(a){return a.length}}
W.e6.prototype={
gk:function(a){return a.length}}
W.a1.prototype={$isr:1}
W.e9.prototype={
gk:function(a){return a.length}}
W.bo.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.y]},
$isc:1,
$asc:function(){return[W.y]},
$isq:1,
$asq:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.c0.prototype={}
W.ea.prototype={
G:function(a,b){return a.send(b)}}
W.bp.prototype={}
W.ed.prototype={$isa:1}
W.aJ.prototype={$isr:1,$isaJ:1}
W.er.prototype={
j:function(a){return String(a)}}
W.ex.prototype={
gk:function(a){return a.length}}
W.ez.prototype={
e1:function(a,b,c){return a.send(b,c)},
G:function(a,b){return a.send(b)}}
W.br.prototype={}
W.a2.prototype={$isr:1}
W.eA.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]},
$isq:1,
$asq:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.N.prototype={$isr:1,$isN:1}
W.eK.prototype={$isa:1}
W.y.prototype={
j:function(a){var t=a.nodeValue
return t==null?this.cz(a):t},
$isr:1,
$isf:1}
W.cR.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.y]},
$isc:1,
$asc:function(){return[W.y]},
$isq:1,
$asq:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.eR.prototype={$isa:1}
W.eU.prototype={
gk:function(a){return a.length}}
W.a3.prototype={$isr:1,
gk:function(a){return a.length}}
W.eW.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]},
$isq:1,
$asq:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.eZ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.f_.prototype={
G:function(a,b){return a.send(b)}}
W.f9.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
W.cW.prototype={
G:function(a,b){return a.send(b)}}
W.fc.prototype={
gk:function(a){return a.length}}
W.ff.prototype={$isa:1}
W.a4.prototype={$isr:1,$isf:1}
W.fg.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]},
$isq:1,
$asq:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.a5.prototype={$isr:1}
W.fi.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]},
$isq:1,
$asq:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.a6.prototype={$isr:1,
gk:function(a){return a.length}}
W.fl.prototype={
h:function(a,b){return this.bl(a,b)},
aO:function(a,b){var t,s
for(t=0;!0;++t){s=this.d5(a,t)
if(s==null)return
b.$2(s,this.bl(a,s))}},
gk:function(a){return a.length},
bl:function(a,b){return a.getItem(b)},
d5:function(a,b){return a.key(b)}}
W.W.prototype={$isr:1}
W.ac.prototype={}
W.a7.prototype={$isr:1,$isf:1}
W.X.prototype={$isr:1,$isf:1}
W.fv.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.X]},
$isc:1,
$asc:function(){return[W.X]},
$isq:1,
$asq:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.fw.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]},
$isq:1,
$asq:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.fx.prototype={
gk:function(a){return a.length}}
W.a8.prototype={$isr:1}
W.aP.prototype={$isr:1,$isaP:1}
W.fB.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]},
$isq:1,
$asq:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.fC.prototype={
gk:function(a){return a.length}}
W.b7.prototype={}
W.fE.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
W.aw.prototype={}
W.fJ.prototype={
j:function(a){return String(a)},
$isa:1}
W.fL.prototype={
gk:function(a){return a.length}}
W.fO.prototype={
gk:function(a){return a.length}}
W.fP.prototype={
G:function(a,b){return a.send(b)}}
W.aR.prototype={
gdq:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.t("deltaY is not supported"))},
$isr:1,
$isN:1,
$isaR:1}
W.bD.prototype={
gde:function(a){var t,s
t=P.V
s=new P.aq(0,$.D,null,[t])
this.d2(a)
this.d8(a,W.jJ(new W.fQ(new P.hC(s,[t]))))
return s},
d8:function(a,b){return a.requestAnimationFrame(H.bM(b,1))},
d2:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.fQ.prototype={
$1:function(a){this.a.dk(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.fR.prototype={$isa:1}
W.aS.prototype={$isa:1}
W.fY.prototype={
j:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
A:function(a,b){var t,s,r
if(b==null)return!1
t=J.v(b)
if(!t.$isI)return!1
s=a.left
r=t.gaQ(b)
if(s==null?r==null:s===r){s=a.top
r=t.gaS(b)
if(s==null?r==null:s===r){s=a.width
r=t.gX(b)
if(s==null?r==null:s===r){s=a.height
t=t.gW(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gw:function(a){var t,s,r,q
t=J.ag(a.left)
s=J.ag(a.top)
r=J.ag(a.width)
q=J.ag(a.height)
return W.jF(W.aW(W.aW(W.aW(W.aW(0,t),s),r),q))},
$isI:1,
$asI:function(){},
gW:function(a){return a.height},
gaQ:function(a){return a.left},
gaS:function(a){return a.top},
gX:function(a){return a.width}}
W.d4.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[P.I]},
$isc:1,
$asc:function(){return[P.I]},
$isq:1,
$asq:function(){return[P.I]},
$isb:1,
$asb:function(){return[P.I]}}
W.h_.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.z]},
$isc:1,
$asc:function(){return[W.z]},
$isq:1,
$asq:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]}}
W.h0.prototype={$isa:1}
W.h1.prototype={
gW:function(a){return a.height},
gX:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hh.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a1]},
$isc:1,
$asc:function(){return[W.a1]},
$isq:1,
$asq:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.hi.prototype={$isa:1}
W.d7.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.y]},
$isc:1,
$asc:function(){return[W.y]},
$isq:1,
$asq:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.hz.prototype={$isa:1}
W.hA.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]},
$isq:1,
$asq:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.hB.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.W]},
$isc:1,
$asc:function(){return[W.W]},
$isq:1,
$asq:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.hE.prototype={$isa:1}
W.hF.prototype={$isa:1}
W.h4.prototype={
dN:function(a,b,c,d){return W.ap(this.a,this.b,a,!1,H.bc(this,0))}}
W.iz.prototype={}
W.h5.prototype={
dc:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.k7(r,this.c,t,!1)}},
cT:function(a,b,c,d,e){this.dc()}}
W.h6.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.B.prototype={
gD:function(a){return new W.e3(a,this.gk(a),-1,null,[H.az(a,"B",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.e3.prototype={
t:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbn(J.bd(this.a,t))
this.c=t
return!0}this.sbn(null)
this.c=s
return!1},
gu:function(){return this.d},
sbn:function(a){this.d=a}}
W.bi.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.bj.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.bk.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.bl.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.bm.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.bn.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.c1.prototype={}
W.cl.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.c4.prototype={$isc:1,
$asc:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.cf.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cg.prototype={$isc:1,
$asc:function(){return[P.w]},
$isb:1,
$asb:function(){return[P.w]}}
W.ch.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.ci.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.cj.prototype={$isc:1,
$asc:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.c2.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.c5.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.c6.prototype={$isc:1,
$asc:function(){return[P.I]},
$isb:1,
$asb:function(){return[P.I]}}
W.c3.prototype={$isc:1,
$asc:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]}}
W.c8.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.ca.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.cb.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cc.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cm.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.cn.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.co.prototype={$isc:1,
$asc:function(){return[P.I]},
$isb:1,
$asb:function(){return[P.I]}}
W.cy.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.cz.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cx.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cC.prototype={$isc:1,
$asc:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.cD.prototype={$isc:1,
$asc:function(){return[P.w]},
$isb:1,
$asb:function(){return[P.w]}}
W.cE.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cF.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cp.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cq.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.cs.prototype={$isc:1,
$asc:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.cA.prototype={$isc:1,
$asc:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]}}
W.cB.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
P.hM.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.w,,]}}}
P.hr.prototype={}
P.I.prototype={$asI:null}
P.dj.prototype={$isa:1}
P.aD.prototype={$isa:1}
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
P.dS.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dT.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dU.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dV.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
P.dW.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dX.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
P.dY.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dZ.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e2.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e5.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.aa.prototype={}
P.at.prototype={$isa:1}
P.eb.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ak.prototype={$isr:1}
P.em.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.V(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ak]},
$isb:1,
$asb:function(){return[P.ak]}}
P.eu.prototype={$isa:1}
P.ev.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.al.prototype={$isr:1}
P.eL.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.V(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.al]},
$isb:1,
$asb:function(){return[P.al]}}
P.eS.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eX.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eY.prototype={
gk:function(a){return a.length}}
P.f2.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f3.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fb.prototype={$isa:1}
P.fq.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.V(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.w]},
$isb:1,
$asb:function(){return[P.w]}}
P.J.prototype={$isa:1}
P.fr.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fs.prototype={$isa:1}
P.cZ.prototype={}
P.fu.prototype={$isa:1}
P.bC.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.am.prototype={$isr:1}
P.fD.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.V(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.am]},
$isb:1,
$asb:function(){return[P.am]}}
P.fK.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fM.prototype={$isa:1}
P.fN.prototype={$isa:1}
P.bF.prototype={$isa:1}
P.hw.prototype={$isa:1}
P.hx.prototype={$isa:1}
P.hy.prototype={$isa:1}
P.c7.prototype={$isc:1,
$asc:function(){return[P.ak]},
$isb:1,
$asb:function(){return[P.ak]}}
P.ce.prototype={$isc:1,
$asc:function(){return[P.w]},
$isb:1,
$asb:function(){return[P.w]}}
P.c9.prototype={$isc:1,
$asc:function(){return[P.al]},
$isb:1,
$asb:function(){return[P.al]}}
P.cd.prototype={$isc:1,
$asc:function(){return[P.am]},
$isb:1,
$asb:function(){return[P.am]}}
P.cr.prototype={$isc:1,
$asc:function(){return[P.am]},
$isb:1,
$asb:function(){return[P.am]}}
P.ct.prototype={$isc:1,
$asc:function(){return[P.w]},
$isb:1,
$asb:function(){return[P.w]}}
P.cu.prototype={$isc:1,
$asc:function(){return[P.al]},
$isb:1,
$asb:function(){return[P.al]}}
P.cv.prototype={$isc:1,
$asc:function(){return[P.ak]},
$isb:1,
$asb:function(){return[P.ak]}}
P.dn.prototype={
gk:function(a){return a.length}}
P.f7.prototype={
bv:function(a,b){return a.activeTexture(b)},
bx:function(a,b,c){return a.attachShader(b,c)},
by:function(a,b,c){return a.bindBuffer(b,c)},
bz:function(a,b,c){return a.bindFramebuffer(b,c)},
bA:function(a,b,c){return a.bindTexture(b,c)},
bB:function(a,b){return a.blendEquation(b)},
bC:function(a,b,c){return a.blendFunc(b,c)},
bD:function(a,b,c,d){return a.bufferData(b,c,d)},
bE:function(a,b){return a.clear(b)},
bF:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bG:function(a,b){return a.compileShader(b)},
bH:function(a){return a.createBuffer()},
bI:function(a){return a.createProgram()},
bJ:function(a,b){return a.createShader(b)},
bL:function(a,b){return a.depthMask(b)},
bM:function(a,b){return a.disable(b)},
bN:function(a,b,c,d){return a.drawArrays(b,c,d)},
bO:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bP:function(a,b){return a.enable(b)},
bQ:function(a,b){return a.enableVertexAttribArray(b)},
at:function(a){return P.hN(a.getContextAttributes())},
aT:function(a,b){return a.getProgramInfoLog(b)},
aU:function(a,b,c){return a.getProgramParameter(b,c)},
aV:function(a,b){return a.getShaderInfoLog(b)},
aW:function(a,b,c){return a.getShaderParameter(b,c)},
aX:function(a,b,c){return a.getUniformLocation(b,c)},
bS:function(a,b){return a.linkProgram(b)},
aZ:function(a,b,c){return a.shaderSource(b,c)},
b_:function(a,b,c,d){return a.stencilFunc(b,c,d)},
c0:function(a,b,c){return a.uniform1f(b,c)},
c1:function(a,b,c){return a.uniform1fv(b,c)},
c2:function(a,b,c){return a.uniform1i(b,c)},
c3:function(a,b,c){return a.uniform1iv(b,c)},
c4:function(a,b,c){return a.uniform2fv(b,c)},
c5:function(a,b,c){return a.uniform3fv(b,c)},
c6:function(a,b,c){return a.uniform4fv(b,c)},
c7:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c8:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ca:function(a,b){return a.useProgram(b)},
cc:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cd:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.f8.prototype={
df:function(a,b){return a.beginTransformFeedback(b)},
di:function(a,b){return a.bindVertexArray(b)},
dn:function(a){return a.createVertexArray()},
dw:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dz:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dA:function(a){return a.endTransformFeedback()},
dZ:function(a,b,c,d){this.da(a,b,c,d)
return},
da:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
e_:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bv:function(a,b){return a.activeTexture(b)},
bx:function(a,b,c){return a.attachShader(b,c)},
by:function(a,b,c){return a.bindBuffer(b,c)},
bz:function(a,b,c){return a.bindFramebuffer(b,c)},
bA:function(a,b,c){return a.bindTexture(b,c)},
bB:function(a,b){return a.blendEquation(b)},
bC:function(a,b,c){return a.blendFunc(b,c)},
bD:function(a,b,c,d){return a.bufferData(b,c,d)},
bE:function(a,b){return a.clear(b)},
bF:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bG:function(a,b){return a.compileShader(b)},
bH:function(a){return a.createBuffer()},
bI:function(a){return a.createProgram()},
bJ:function(a,b){return a.createShader(b)},
bL:function(a,b){return a.depthMask(b)},
bM:function(a,b){return a.disable(b)},
bN:function(a,b,c,d){return a.drawArrays(b,c,d)},
bO:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bP:function(a,b){return a.enable(b)},
bQ:function(a,b){return a.enableVertexAttribArray(b)},
at:function(a){return P.hN(a.getContextAttributes())},
aT:function(a,b){return a.getProgramInfoLog(b)},
aU:function(a,b,c){return a.getProgramParameter(b,c)},
aV:function(a,b){return a.getShaderInfoLog(b)},
aW:function(a,b,c){return a.getShaderParameter(b,c)},
aX:function(a,b,c){return a.getUniformLocation(b,c)},
bS:function(a,b){return a.linkProgram(b)},
aZ:function(a,b,c){return a.shaderSource(b,c)},
b_:function(a,b,c,d){return a.stencilFunc(b,c,d)},
c0:function(a,b,c){return a.uniform1f(b,c)},
c1:function(a,b,c){return a.uniform1fv(b,c)},
c2:function(a,b,c){return a.uniform1i(b,c)},
c3:function(a,b,c){return a.uniform1iv(b,c)},
c4:function(a,b,c){return a.uniform2fv(b,c)},
c5:function(a,b,c){return a.uniform3fv(b,c)},
c6:function(a,b,c){return a.uniform4fv(b,c)},
c7:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c8:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ca:function(a,b){return a.useProgram(b)},
cc:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cd:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.hD.prototype={$isa:1}
P.fj.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return P.hN(this.d4(a,b))},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
d4:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.ck.prototype={$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.cw.prototype={$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
B.i7.prototype={
$1:function(a){$.$get$hO().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aJ]}}}
B.i8.prototype={
$1:function(a){$.$get$hO().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aJ]}}}
B.i9.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.lG=t
$.lH=C.c.a2(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.iI=s-C.c.I(window.innerWidth,2)
$.jY=-(t-C.c.I(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.N]}}}
B.ia.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bO=t-C.c.I(window.innerWidth,2)
$.bP=-(s-C.c.I(window.innerHeight,2))
if(a.button===2)$.$get$bN().i(0,"right",!0)
else $.$get$bN().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.N]}}}
B.ib.prototype={
$1:function(a){if(a.button===2)$.$get$bN().i(0,"right",null)
else $.$get$bN().i(0,"left",null)},
$S:function(){return{func:1,args:[W.N]}}}
B.eM.prototype={
cN:function(a,b,c,d){var t
W.ap(d,W.lP().$1(d),new B.eN(this),!1,W.aR)
W.ap(d,"mousemove",new B.eO(this),!1,W.N)
t=W.aP
W.ap(d,"touchstart",new B.eP(),!1,t)
W.ap(d,"touchmove",new B.eQ(this),!1,t)
B.m2(null)}}
B.eN.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.P.gdq(a)*r.k3
if(C.b.a2(r.fy,t)>0)r.fy=H.Y(C.b.a2(r.fy,t))}catch(q){s=H.as(q)
P.ar(s)}},
$S:function(){return{func:1,args:[W.aR]}}}
B.eO.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.Y(t.go+C.c.a2($.iI,$.bO)*0.01)
s=t.id
r=$.bP
q=$.jY
t.id=H.Y(s+(r-q)*0.01)
$.bO=$.iI
$.bP=q}},
$S:function(){return{func:1,args:[W.N]}}}
B.eP.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.b.a0(t.clientX)
C.b.a0(t.clientY)
$.bO=s
C.b.a0(t.clientX)
$.bP=C.b.a0(t.clientY)},
$S:function(){return{func:1,args:[W.aP]}}}
B.eQ.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.b.a0(t.clientX)
t=C.b.a0(t.clientY)
r=this.a
r.go=H.Y(r.go+C.c.a2(s,$.bO)*0.01)
r.id=H.Y(r.id+($.bP-t)*0.01)
$.bO=s
$.bP=t},
$S:function(){return{func:1,args:[W.aP]}}}
G.eB.prototype={}
G.d1.prototype={
aj:function(a,b){var t=this.d
if(H.ay(!t.F(0,a)))H.aX("uniform "+a+" already set")
t.i(0,a,b)},
b7:function(){return this.d},
j:function(a){var t,s,r,q
t=H.P(["{"+new H.av(H.hS(this),null).j(0)+"}["+this.a+"]"],[P.w])
for(s=this.d,r=s.gM(s),r=r.gD(r);r.t();){q=r.gu()
C.a.l(t,H.h(q)+": "+H.h(s.h(0,q)))}return C.a.ac(t,"\n")}}
G.dr.prototype={}
G.du.prototype={
bR:function(a,b,c){J.kn(this.a,b)
if(c>0)J.kE(this.a,b,c)}}
G.e7.prototype={}
G.A.prototype={}
G.e_.prototype={}
G.c_.prototype={
ai:function(a){var t=this.e
H.d(!t.F(0,a))
H.d(C.e.cu(a,"a"))
switch($.$get$T().h(0,a).a){case"vec2":t.i(0,a,H.P([],[T.u]))
break
case"vec3":t.i(0,a,H.P([],[T.m]))
break
case"vec4":t.i(0,a,H.P([],[T.ax]))
break
case"float":t.i(0,a,H.P([],[P.M]))
break
case"uvec4":t.i(0,a,H.P([],[[P.b,P.p]]))
break
default:if(H.ay(!1))H.aX("unknown type for "+a)}},
cC:function(a){var t,s,r
H.d(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.l(s,new G.e_(t,t+1,t+2,t+3))},
cD:function(a){var t,s,r,q
for(t=this.d,s=0;s<24;++s){r=a[s]
q=new T.m(new Float32Array(3))
q.C(r)
C.a.l(t,q)}},
cE:function(a){var t,s,r,q,p
H.d(!0)
t=this.d
s=t.length
C.a.l(this.b,new G.A(s,s+1,s+2))
for(r=0;r<3;++r){q=a[r]
p=new T.m(new Float32Array(3))
p.C(q)
C.a.l(t,p)}},
b2:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.G)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.l(t,new T.u(o))}},
b3:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.G)(b),++q){p=b[q]
o=new T.m(new Float32Array(3))
o.C(p)
r.l(t,o)}},
cJ:function(){var t,s,r,q,p,o,n,m,l,k
t=this.b
H.d(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.P(r,[P.p])
for(r=t.length,p=0,o=0;n=t.length,o<n;n===r||(0,H.G)(t),++o){m=t[o]
q[p]=m.a
q[p+1]=m.b
q[p+2]=m.c
p+=3}for(t=s.length,o=0;r=s.length,o<r;r===t||(0,H.G)(s),++o){l=s[o]
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
j:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gM(s),r=r.gD(r);r.t();){q=r.gu()
p=$.$get$T().h(0,q).a
C.a.l(t,H.h(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.ac(t," ")}}
G.d0.prototype={}
G.d_.prototype={}
G.ew.prototype={}
G.ey.prototype={
b5:function(a,b,c){var t,s
if(C.e.ay(a,0)===105){if(H.ay(C.c.aw(b.length,c)===this.z))H.aX("ChangeAttribute "+this.z)}else H.d(C.c.aw(b.length,c)===(this.ch.length/3|0))
this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.de(t.a,34962,s)
J.iO(t.a,34962,b,35048)},
cK:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a3:function(a,b,c){var t,s,r,q,p,o
t=J.iK(a,0)===105
if(t&&this.z===0)this.z=C.c.aw(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.ig(r.a))
this.b5(a,b,c)
q=$.$get$T().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.ay(p.F(0,a)))H.aX("unexpected attribute "+a)
o=p.h(0,a)
J.df(r.a,this.e)
r.bR(0,o,t?1:0)
s=s.h(0,a)
p=q.b6()
J.de(r.a,34962,s)
J.iW(r.a,o,p,5126,!1,0,0)},
j:function(a){var t,s,r
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,t=t.gM(t),t=t.gD(t);t.t();){r=t.gu()
C.a.l(s,H.h(r)+":"+this.cy.h(0,r).length)}return"MESH["+this.a+"] "+C.a.ac(s,"  ")},
saD:function(a){this.cx=a}}
G.eT.prototype={
cF:function(a,b){var t=C.c.cf(a,b)
if(this.z===t)return
this.z=t
this.b9()},
b9:function(){var t,s,r,q,p,o,n
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
t.a1(0,0,1/(p*s))
t.a1(1,1,1/p)
t.a1(2,2,(q+r)/o)
t.a1(3,2,-1)
t.a1(2,3,2*r*q/o)},
b7:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.m(new Float32Array(H.j(3)))
o.q(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
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
s=J.v(n)
r=!!s.$isax
k=r?s.gas(n):1
if(!!s.$ism){j=s.gm(n)
m=s.gn(n)
l=s.gJ(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gJ(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.b.v(t[0],n)
r=C.b.v(t[4],m)
q=C.b.v(t[8],l)
i=t[12]
h=C.b.v(t[1],n)
g=C.b.v(t[5],m)
f=C.b.v(t[9],l)
e=t[13]
d=C.b.v(t[2],n)
c=C.b.v(t[6],m)
b=C.b.v(t[10],l)
a=t[14]
a0=C.b.v(t[3],n)
a1=C.b.v(t[7],m)
a2=C.b.v(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.C(this.db)
a3.bV(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.f6.prototype={
cQ:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gk(t)===s.gk(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gM(s),s=s.gD(s);s.t();){q=s.gu()
if(!t.F(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bG(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.t();){q=s.d
if(!t.a_(0,q))C.a.l(r,q)}return r},
cR:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gM(b),s=s.gD(s),r=this.d,q=this.y,p=this.z,o=0;s.t();){n=s.gu()
switch(J.iK(n,0)){case 117:if(q.F(0,n)){m=b.h(0,n)
if(p.F(0,n))H.i5("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$T().h(0,n)
if(l==null)H.E("unknown "+n)
H.d(q.F(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.ik(r.a,k,m)
else if(!!J.v(m).$isjb)J.kC(r.a,k,m)
break
case"float":if(l.c===0)J.kA(r.a,k,m)
else if(!!J.v(m).$ise4)J.kB(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aB(m,"$isR").a
J.iV(r.a,k,!1,j)}else if(!!J.v(m).$ise4)J.iV(r.a,k,!1,m)
else if(H.ay(!1))H.aX("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.aB(m,"$isaM").a
J.iU(r.a,k,!1,j)}else if(!!J.v(m).$ise4)J.iU(r.a,k,!1,m)
else if(H.ay(!1))H.aX("bad unform: "+n)
break
case"vec4":if(l.c===0){j=H.aB(m,"$isax").a
J.iT(r.a,k,j)}else J.iT(r.a,k,m)
break
case"vec3":if(l.c===0){j=H.aB(m,"$ism").a
J.iS(r.a,k,j)}else J.iS(r.a,k,m)
break
case"vec2":if(l.c===0){j=H.aB(m,"$isu").a
J.iR(r.a,k,j)}else J.iR(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.c.Y(33984,this.ch)
J.iL(r.a,j)
j=H.aB(m,"$islh").cL()
J.iN(r.a,3553,j)
j=this.ch
J.ik(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.c.Y(33984,this.ch)
J.iL(r.a,j)
j=H.aB(m,"$islh").cL()
J.iN(r.a,34067,j)
j=this.ch
J.ik(r.a,k,j)
this.ch=this.ch+1
break
default:H.i5("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":if(J.F(m,!0))J.dg(r.a,2929)
else J.ih(r.a,2929)
break
case"cStencilFunc":H.aB(m,"$isd0")
j=m.a
if(j===1281)J.ih(r.a,2960)
else{J.dg(r.a,2960)
i=m.b
h=m.c
J.ky(r.a,j,i,h)}break
case"cDepthWrite":J.kh(r.a,m)
break
case"cBlendEquation":H.aB(m,"$isd_")
j=m.a
if(j===1281)J.ih(r.a,3042)
else{J.dg(r.a,3042)
i=m.b
h=m.c
J.kb(r.a,i,h)
J.ka(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aF(1000*(s-new P.bg(t,!1).a)).j(0)},
cI:function(a,b,c){var t,s,r,q,p,o,n,m,l
Date.now()
t=this.d
s=this.r
J.kD(t.a,s)
this.ch=0
this.z.T(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.G)(b),++r){q=b[r]
this.cR(q.a,q.b7())}s=this.Q
s.T(0)
for(p=a.cy,p=p.gM(p),p=p.gD(p);p.t();)s.l(0,p.gu())
o=this.cQ()
if(o.length!==0)P.ar("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.h(o)))
J.df(a.d.a,a.e)
n=this.e.f.length>0
s=a.f
p=a.cK()
m=a.Q
l=a.z
t.toString
if(n)J.k8(t.a,s)
if(m!==-1)if(l>1)J.kl(t.a,s,p,m,0,l)
else J.kk(t.a,s,p,m,0)
else if(l>1)J.kj(t.a,s,0,p,l)
else J.ki(t.a,s,0,p)
if(n)J.ko(t.a)},
cO:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.e
r=s.b
q=this.f
p=q.b
o=s.f
n=J.kf(t.a)
m=G.jC(t.a,35633,r)
J.iM(t.a,n,m)
l=G.jC(t.a,35632,p)
J.iM(t.a,n,l)
if(o.length>0)J.kz(t.a,n,o,35980)
J.kv(t.a,n)
if(!J.ku(t.a,n,35714))H.E(J.kt(t.a,n))
this.r=n
this.scW(0,P.l3(s.c,null))
for(s=s.d,r=s.length,p=this.y,k=0;k<s.length;s.length===r||(0,H.G)(s),++k){j=s[k]
o=this.r
p.i(0,j,J.iQ(t.a,o,j))}for(s=q.d,r=s.length,k=0;k<s.length;s.length===r||(0,H.G)(s),++k){j=s[k]
q=this.r
p.i(0,j,J.iQ(t.a,q,j))}},
scW:function(a,b){this.x=b}}
G.i.prototype={
b6:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.b6.prototype={
b1:function(a){var t,s,r,q,p
H.d(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.G)(a),++q){p=a[q]
H.d($.$get$T().F(0,p))
H.d(!C.a.a_(s,p))
C.a.l(s,p)
r.i(0,p,this.r);++this.r}C.a.av(s)},
b4:function(a){var t,s,r
H.d(this.b==null)
for(t=this.d,s=0;s<2;++s){r=a[s]
if(H.ay($.$get$T().F(0,r)))H.aX("missing uniform "+r)
H.d(!C.a.a_(t,r))
C.a.l(t,r)}C.a.av(t)},
ah:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.e,r=0;r<a.length;a.length===t||(0,H.G)(a),++r){q=a[r]
H.d($.$get$T().F(0,q))
H.d(!C.a.a_(s,q))
C.a.l(s,q)}C.a.av(s)},
b8:function(a,b){H.d(this.b==null)
this.b=this.cS(!0,a,b)},
ax:function(a){return this.b8(a,null)},
cS:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){n=t[o]
m=$.$get$T().h(0,n)
C.a.l(q,"layout (location="+H.h(p.h(0,n))+") in "+m.a+" "+H.h(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){k=t[o]
m=$.$get$T().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.h(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){k=t[o]
m=$.$get$T().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.h(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){k=t[o]
m=$.$get$T().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.h(k)+j+";")}C.a.l(q,"")
if(c!=null)C.a.ao(q,c)
C.a.l(q,"void main(void) {")
C.a.ao(q,b)
C.a.l(q,"}")
return C.a.ac(q,"\n")}}
G.fh.prototype={
cs:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
A.cQ.prototype={
j:function(a){return"NODE["+this.a+"]"}}
A.by.prototype={}
A.f5.prototype={
cH:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.k9(p.a,36160,t)
H.d(r>0&&q>0)
J.kF(p.a,this.x,this.y,r,q)
if(s!==0)J.kc(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){n=t[o]
m=n.e
C.a.l(m,new G.d1(P.Q(),"transforms",!1,!0))
l=new T.R(new Float32Array(16))
l.R()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.G)(r),++k)A.jQ(p,r[k],l,a,m)
m.pop()}},
cG:function(){return this.cH(null)}}
A.hT.prototype={
$2:function(a,b){var t=536870911&a+J.ag(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.p,P.r]}}}
T.aM.prototype={
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
j:function(a){return"[0] "+this.O(0).j(0)+"\n[1] "+this.O(1).j(0)+"\n[2] "+this.O(2).j(0)+"\n"},
h:function(a,b){return this.a[b]},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aM){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gw:function(a){return A.db(this.a)},
O:function(a){var t,s
t=new Float32Array(H.j(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.m(t)},
dm:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
T.R.prototype={
a1:function(a,b,c){H.d(a<4)
H.d(b<4)
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
j:function(a){return"[0] "+this.O(0).j(0)+"\n[1] "+this.O(1).j(0)+"\n[2] "+this.O(2).j(0)+"\n[3] "+this.O(3).j(0)+"\n"},
h:function(a,b){return this.a[b]},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.R){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gw:function(a){return A.db(this.a)},
O:function(a){var t,s
t=new Float32Array(H.j(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.ax(t)},
cj:function(a,b,c,d){var t,s,r,q
if(typeof b==="number"){t=b
s=t
r=s}else{r=null
s=null
t=null}q=this.a
q[0]=C.b.v(q[0],r)
q[1]=C.b.v(q[1],r)
q[2]=C.b.v(q[2],r)
q[3]=C.b.v(q[3],r)
q[4]=C.b.v(q[4],s)
q[5]=C.b.v(q[5],s)
q[6]=C.b.v(q[6],s)
q[7]=C.b.v(q[7],s)
q[8]=C.b.v(q[8],t)
q[9]=C.b.v(q[9],t)
q[10]=C.b.v(q[10],t)
q[11]=C.b.v(q[11],t)
q[12]=q[12]
q[13]=q[13]
q[14]=q[14]
q[15]=q[15]},
P:function(a,b){return this.cj(a,b,null,null)},
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
bV:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
C:function(a){var t,s
t=a.a
s=this.a
s[1]=t[1]
s[0]=t[0]},
j:function(a){var t=this.a
return"["+H.h(t[0])+","+H.h(t[1])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.u){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gw:function(a){return A.db(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.m.prototype={
q:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
C:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
j:function(a){var t=this.a
return"["+H.h(t[0])+","+H.h(t[1])+","+H.h(t[2])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.m){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gw:function(a){return A.db(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){return Math.sqrt(this.gN())},
gN:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
E:function(a){var t,s,r
t=Math.sqrt(this.gN())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
aN:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
bK:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.m(new Float32Array(H.j(3)))
t.q(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
l:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]
s[2]=s[2]+t[2]},
P:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gJ:function(a){return this.a[2]}}
T.ax.prototype={
C:function(a){var t,s
t=a.a
s=this.a
s[3]=t[3]
s[2]=t[2]
s[1]=t[1]
s[0]=t[0]},
j:function(a){var t=this.a
return H.h(t[0])+","+H.h(t[1])+","+H.h(t[2])+","+H.h(t[3])},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ax){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gw:function(a){return A.db(this.a)},
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
gJ:function(a){return this.a[2]},
gas:function(a){return this.a[3]}}
Q.i3.prototype={
$1:function(b2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
this.a.a=b2+0
t=this.b
t.go=H.Y(t.go+0.001)
s=t.k4
if(s.h(0,37)!=null)t.go=H.Y(t.go+0.03)
else if(s.h(0,39)!=null)t.go=H.Y(t.go-0.03)
if(s.h(0,38)!=null)t.id=H.Y(t.id+0.03)
else if(s.h(0,40)!=null)t.id=H.Y(t.id-0.03)
if(s.h(0,33)!=null)t.fy=H.Y(t.fy*0.99)
else if(s.h(0,34)!=null)t.fy=H.Y(t.fy*1.01)
if(s.h(0,32)!=null){t.go=0
t.id=0}s=H.Y(C.b.dj(t.id,-1.4707963267948965,1.4707963267948965))
t.id=s
r=t.fy
q=t.go
p=r*Math.cos(s)
t.cs(p*Math.cos(q),r*Math.sin(s),p*Math.sin(q))
q=t.d.a
s=t.k2.a
q[12]=q[12]+s[0]
q[13]=q[13]+s[1]
q[14]=q[14]+s[2]
r=q[12]
o=q[13]
n=q[14]
m=new T.m(new Float32Array(H.j(3)))
m.q(0,1,0)
l=t.e
k=l.a
k[0]=q[12]
k[1]=q[13]
k[2]=q[14]
k=new Float32Array(H.j(3))
j=new T.m(k)
j.C(l)
k[0]=k[0]-s[0]
k[1]=k[1]-s[1]
k[2]=k[2]-s[2]
j.E(0)
i=m.bK(j)
i.E(0)
h=j.bK(i)
h.E(0)
s=i.aN(l)
g=h.aN(l)
l=j.aN(l)
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
q[14]=-l
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
q[12]=r
q[13]=o
q[14]=n
n=t.f
o=n.a
o[0]=q[2]
o[1]=q[6]
o[2]=q[10]
t=-t.k1
n=Math.sqrt(n.gN())
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
n=q[0]
t=q[4]
r=q[8]
o=q[1]
e=q[5]
c=q[9]
b=q[2]
a=q[6]
a0=q[10]
a1=q[3]
f=q[7]
d=q[11]
q[0]=n*a3+t*a6+r*a9
q[1]=o*a3+e*a6+c*a9
q[2]=b*a3+a*a6+a0*a9
q[3]=a1*a3+f*a6+d*a9
q[4]=n*a4+t*a7+r*b0
q[5]=o*a4+e*a7+c*b0
q[6]=b*a4+a*a7+a0*b0
q[7]=a1*a4+f*a7+d*b0
q[8]=n*a5+t*a8+r*b1
q[9]=o*a5+e*a8+c*b1
q[10]=b*a5+a*a8+a0*b1
q[11]=a1*a5+f*a8+d*b1
this.c.cG()
C.Q.gde(window).bZ(this)},
$S:function(){return{func:1,v:true,args:[P.V]}}}
J.a.prototype.cz=J.a.prototype.j
J.bq.prototype.cA=J.bq.prototype.j;(function installTearOffs(){installTearOff(H.aU.prototype,"gdM",0,0,0,null,["$0"],["aq"],0)
installTearOff(H.ad.prototype,"gck",0,0,0,null,["$1"],["H"],2)
installTearOff(H.aT.prototype,"gds",0,0,0,null,["$1"],["U"],2)
installTearOff(P,"lC",1,0,0,null,["$1"],["lm"],1)
installTearOff(P,"lD",1,0,0,null,["$1"],["ln"],1)
installTearOff(P,"lE",1,0,0,null,["$1"],["lo"],1)
installTearOff(P,"jN",1,0,0,null,["$0"],["lA"],0)
installTearOff(P.aq.prototype,"gcY",0,0,0,null,["$2","$1"],["ak","cZ"],3)
installTearOff(P,"lJ",1,0,0,null,["$2"],["kM"],4)
installTearOff(W,"lP",1,0,0,null,["$1"],["kQ"],5)
installTearOff(Q,"k2",1,0,0,null,["$0"],["lX"],0)})();(function inheritance(){inherit(P.r,null)
var t=P.r
inherit(H.ir,t)
inherit(J.a,t)
inherit(J.dm,t)
inherit(P.aj,t)
inherit(H.cI,t)
inherit(P.cG,t)
inherit(H.bZ,t)
inherit(H.b0,t)
inherit(H.hp,t)
inherit(H.aU,t)
inherit(H.h2,t)
inherit(H.aV,t)
inherit(H.ho,t)
inherit(H.fX,t)
inherit(H.b5,t)
inherit(H.fy,t)
inherit(H.ai,t)
inherit(H.ad,t)
inherit(H.aT,t)
inherit(H.f4,t)
inherit(H.fF,t)
inherit(P.b1,t)
inherit(H.d8,t)
inherit(H.av,t)
inherit(H.ab,t)
inherit(H.en,t)
inherit(H.ep,t)
inherit(P.fZ,t)
inherit(P.d5,t)
inherit(P.aq,t)
inherit(P.d3,t)
inherit(P.fm,t)
inherit(P.fn,t)
inherit(P.b_,t)
inherit(P.hG,t)
inherit(P.fe,t)
inherit(P.hm,t)
inherit(P.bG,t)
inherit(P.x,t)
inherit(P.hn,t)
inherit(P.aY,t)
inherit(P.H,t)
inherit(P.bg,t)
inherit(P.V,t)
inherit(P.aF,t)
inherit(P.cY,t)
inherit(P.h7,t)
inherit(P.dH,t)
inherit(P.b,t)
inherit(P.au,t)
inherit(P.aN,t)
inherit(P.bz,t)
inherit(P.w,t)
inherit(P.bB,t)
inherit(W.dw,t)
inherit(W.B,t)
inherit(W.e3,t)
inherit(P.hr,t)
inherit(G.eB,t)
inherit(G.du,t)
inherit(G.e7,t)
inherit(G.A,t)
inherit(G.e_,t)
inherit(G.c_,t)
inherit(G.d0,t)
inherit(G.d_,t)
inherit(G.i,t)
inherit(G.b6,t)
inherit(T.aM,t)
inherit(T.R,t)
inherit(T.u,t)
inherit(T.m,t)
inherit(T.ax,t)
t=J.a
inherit(J.eh,t)
inherit(J.ej,t)
inherit(J.bq,t)
inherit(J.aG,t)
inherit(J.b2,t)
inherit(J.aH,t)
inherit(H.bs,t)
inherit(H.b4,t)
inherit(W.f,t)
inherit(W.a_,t)
inherit(W.bR,t)
inherit(W.ds,t)
inherit(W.z,t)
inherit(W.c1,t)
inherit(W.dy,t)
inherit(W.dz,t)
inherit(W.dA,t)
inherit(W.bV,t)
inherit(W.bW,t)
inherit(W.cg,t)
inherit(W.dD,t)
inherit(W.l,t)
inherit(W.ci,t)
inherit(W.a1,t)
inherit(W.e9,t)
inherit(W.cc,t)
inherit(W.er,t)
inherit(W.ex,t)
inherit(W.a2,t)
inherit(W.cl,t)
inherit(W.eK,t)
inherit(W.cb,t)
inherit(W.eR,t)
inherit(W.b7,t)
inherit(W.a3,t)
inherit(W.c5,t)
inherit(W.ac,t)
inherit(W.a5,t)
inherit(W.c2,t)
inherit(W.a6,t)
inherit(W.fl,t)
inherit(W.W,t)
inherit(W.ca,t)
inherit(W.fx,t)
inherit(W.a8,t)
inherit(W.c8,t)
inherit(W.fC,t)
inherit(W.fJ,t)
inherit(W.fO,t)
inherit(W.fY,t)
inherit(W.c6,t)
inherit(W.c3,t)
inherit(W.cj,t)
inherit(W.ch,t)
inherit(W.cf,t)
inherit(W.c4,t)
inherit(W.hE,t)
inherit(W.hF,t)
inherit(P.ak,t)
inherit(P.c7,t)
inherit(P.al,t)
inherit(P.c9,t)
inherit(P.eX,t)
inherit(P.eY,t)
inherit(P.f2,t)
inherit(P.ce,t)
inherit(P.am,t)
inherit(P.cd,t)
inherit(P.fN,t)
inherit(P.dn,t)
inherit(P.f7,t)
inherit(P.f8,t)
inherit(P.hD,t)
inherit(P.ck,t)
t=J.bq
inherit(J.eV,t)
inherit(J.aQ,t)
inherit(J.aI,t)
inherit(J.iq,J.aG)
t=J.b2
inherit(J.cH,t)
inherit(J.ei,t)
t=P.aj
inherit(H.c,t)
inherit(H.cJ,t)
t=H.c
inherit(H.b3,t)
inherit(H.eo,t)
inherit(H.dG,H.cJ)
inherit(H.es,P.cG)
t=H.b3
inherit(H.cK,t)
inherit(P.eq,t)
t=H.b0
inherit(H.ic,t)
inherit(H.id,t)
inherit(H.hk,t)
inherit(H.h3,t)
inherit(H.ee,t)
inherit(H.ef,t)
inherit(H.hq,t)
inherit(H.fz,t)
inherit(H.fA,t)
inherit(H.ie,t)
inherit(H.hY,t)
inherit(H.hZ,t)
inherit(H.i_,t)
inherit(H.i0,t)
inherit(H.i1,t)
inherit(H.ft,t)
inherit(H.ek,t)
inherit(H.hU,t)
inherit(H.hV,t)
inherit(H.hW,t)
inherit(P.fU,t)
inherit(P.fT,t)
inherit(P.fV,t)
inherit(P.fW,t)
inherit(P.h8,t)
inherit(P.hc,t)
inherit(P.h9,t)
inherit(P.ha,t)
inherit(P.hb,t)
inherit(P.hf,t)
inherit(P.hg,t)
inherit(P.he,t)
inherit(P.hd,t)
inherit(P.fo,t)
inherit(P.fp,t)
inherit(P.hJ,t)
inherit(P.hu,t)
inherit(P.ht,t)
inherit(P.hv,t)
inherit(P.et,t)
inherit(P.dE,t)
inherit(P.dF,t)
inherit(W.fQ,t)
inherit(W.h6,t)
inherit(P.hM,t)
inherit(B.i7,t)
inherit(B.i8,t)
inherit(B.i9,t)
inherit(B.ia,t)
inherit(B.ib,t)
inherit(B.eN,t)
inherit(B.eO,t)
inherit(B.eP,t)
inherit(B.eQ,t)
inherit(A.hT,t)
inherit(Q.i3,t)
t=H.fX
inherit(H.b8,t)
inherit(H.bI,t)
t=P.b1
inherit(H.cS,t)
inherit(H.el,t)
inherit(H.fI,t)
inherit(H.fH,t)
inherit(H.dt,t)
inherit(H.fa,t)
inherit(P.bQ,t)
inherit(P.cT,t)
inherit(P.ah,t)
inherit(P.t,t)
inherit(P.d2,t)
inherit(P.bA,t)
inherit(P.a9,t)
inherit(P.dx,t)
t=H.ft
inherit(H.fk,t)
inherit(H.be,t)
inherit(H.fS,P.bQ)
t=H.b4
inherit(H.eC,t)
inherit(H.cM,t)
t=H.cM
inherit(H.bu,t)
inherit(H.bt,t)
inherit(H.bv,H.bu)
inherit(H.cN,H.bv)
inherit(H.bw,H.bt)
inherit(H.cO,H.bw)
t=H.cN
inherit(H.cL,t)
inherit(H.eD,t)
t=H.cO
inherit(H.eE,t)
inherit(H.eF,t)
inherit(H.eG,t)
inherit(H.eH,t)
inherit(H.eI,t)
inherit(H.cP,t)
inherit(H.eJ,t)
inherit(P.hC,P.fZ)
inherit(P.hs,P.hG)
inherit(P.d6,H.ab)
inherit(P.fd,P.fe)
inherit(P.hj,P.fd)
inherit(P.hl,P.hj)
t=P.V
inherit(P.M,t)
inherit(P.p,t)
t=P.ah
inherit(P.cV,t)
inherit(P.ec,t)
t=W.f
inherit(W.y,t)
inherit(W.bi,t)
inherit(W.dv,t)
inherit(W.e1,t)
inherit(W.bp,t)
inherit(W.br,t)
inherit(W.f_,t)
inherit(W.cW,t)
inherit(W.ff,t)
inherit(W.a4,t)
inherit(W.bk,t)
inherit(W.a7,t)
inherit(W.X,t)
inherit(W.bj,t)
inherit(W.fL,t)
inherit(W.fP,t)
inherit(W.bD,t)
inherit(W.fR,t)
inherit(W.aS,t)
inherit(W.hz,t)
t=W.y
inherit(W.bX,t)
inherit(W.aE,t)
inherit(W.bh,t)
inherit(W.bU,t)
inherit(W.h0,t)
t=W.bX
inherit(W.k,t)
inherit(P.J,t)
t=W.k
inherit(W.dk,t)
inherit(W.dl,t)
inherit(W.dq,t)
inherit(W.bS,t)
inherit(W.e6,t)
inherit(W.ed,t)
inherit(W.fc,t)
inherit(W.hi,t)
inherit(W.bm,W.bi)
inherit(W.dp,W.bm)
inherit(W.bf,W.c1)
inherit(W.dB,W.bV)
inherit(W.cD,W.cg)
inherit(W.dC,W.cD)
inherit(W.a0,W.bR)
inherit(W.cB,W.ci)
inherit(W.e0,W.cB)
inherit(W.cz,W.cc)
inherit(W.bo,W.cz)
inherit(W.c0,W.bh)
inherit(W.ea,W.bp)
inherit(W.aw,W.l)
t=W.aw
inherit(W.aJ,t)
inherit(W.N,t)
inherit(W.aP,t)
inherit(W.ez,W.br)
inherit(W.cy,W.cl)
inherit(W.eA,W.cy)
inherit(W.cp,W.cb)
inherit(W.cR,W.cp)
t=W.b7
inherit(W.eU,t)
inherit(W.f9,t)
inherit(W.fE,t)
inherit(W.cn,W.c5)
inherit(W.eW,W.cn)
inherit(W.eZ,W.ac)
inherit(W.bl,W.bk)
inherit(W.fg,W.bl)
inherit(W.cx,W.c2)
inherit(W.fi,W.cx)
inherit(W.cm,W.ca)
inherit(W.fv,W.cm)
inherit(W.bn,W.bj)
inherit(W.fw,W.bn)
inherit(W.cq,W.c8)
inherit(W.fB,W.cq)
inherit(W.aR,W.N)
inherit(W.co,W.c6)
inherit(W.d4,W.co)
inherit(W.cA,W.c3)
inherit(W.h_,W.cA)
inherit(W.h1,W.bW)
inherit(W.cC,W.cj)
inherit(W.hh,W.cC)
inherit(W.cE,W.ch)
inherit(W.d7,W.cE)
inherit(W.cF,W.cf)
inherit(W.hA,W.cF)
inherit(W.cs,W.c4)
inherit(W.hB,W.cs)
inherit(W.h4,P.fm)
inherit(W.iz,W.h4)
inherit(W.h5,P.fn)
inherit(P.I,P.hr)
t=P.J
inherit(P.at,t)
inherit(P.aD,t)
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
inherit(P.dX,t)
inherit(P.dY,t)
inherit(P.dZ,t)
inherit(P.e2,t)
inherit(P.eu,t)
inherit(P.ev,t)
inherit(P.eS,t)
inherit(P.fb,t)
inherit(P.fs,t)
inherit(P.fM,t)
inherit(P.bF,t)
inherit(P.hw,t)
inherit(P.hx,t)
inherit(P.hy,t)
t=P.at
inherit(P.dj,t)
inherit(P.e5,t)
inherit(P.aa,t)
inherit(P.eb,t)
inherit(P.fr,t)
inherit(P.cZ,t)
inherit(P.fK,t)
inherit(P.cv,P.c7)
inherit(P.em,P.cv)
inherit(P.cu,P.c9)
inherit(P.eL,P.cu)
inherit(P.f3,P.aa)
inherit(P.ct,P.ce)
inherit(P.fq,P.ct)
t=P.cZ
inherit(P.fu,t)
inherit(P.bC,t)
inherit(P.cr,P.cd)
inherit(P.fD,P.cr)
inherit(P.cw,P.ck)
inherit(P.fj,P.cw)
t=G.eB
inherit(G.fh,t)
inherit(G.d1,t)
inherit(G.ey,t)
inherit(G.f6,t)
inherit(A.by,t)
inherit(A.f5,t)
t=G.fh
inherit(G.dr,t)
inherit(A.cQ,t)
inherit(B.eM,G.dr)
t=G.d1
inherit(G.ew,t)
inherit(G.eT,t)
mixin(H.bt,P.x)
mixin(H.bu,P.x)
mixin(H.bv,H.bZ)
mixin(H.bw,H.bZ)
mixin(W.bi,P.x)
mixin(W.bj,P.x)
mixin(W.bk,P.x)
mixin(W.bl,W.B)
mixin(W.bm,W.B)
mixin(W.bn,W.B)
mixin(W.c1,W.dw)
mixin(W.cl,P.x)
mixin(W.c4,P.x)
mixin(W.cf,P.x)
mixin(W.cg,P.x)
mixin(W.ch,P.x)
mixin(W.ci,P.x)
mixin(W.cj,P.x)
mixin(W.c2,P.x)
mixin(W.c5,P.x)
mixin(W.c6,P.x)
mixin(W.c3,P.x)
mixin(W.c8,P.x)
mixin(W.ca,P.x)
mixin(W.cb,P.x)
mixin(W.cc,P.x)
mixin(W.cm,W.B)
mixin(W.cn,W.B)
mixin(W.co,W.B)
mixin(W.cy,W.B)
mixin(W.cz,W.B)
mixin(W.cx,W.B)
mixin(W.cC,W.B)
mixin(W.cD,W.B)
mixin(W.cE,W.B)
mixin(W.cF,W.B)
mixin(W.cp,W.B)
mixin(W.cq,W.B)
mixin(W.cs,W.B)
mixin(W.cA,W.B)
mixin(W.cB,W.B)
mixin(P.c7,P.x)
mixin(P.ce,P.x)
mixin(P.c9,P.x)
mixin(P.cd,P.x)
mixin(P.cr,W.B)
mixin(P.ct,W.B)
mixin(P.cu,W.B)
mixin(P.cv,W.B)
mixin(P.ck,P.x)
mixin(P.cw,W.B)})();(function constants(){C.l=W.bS.prototype
C.m=W.c0.prototype
C.n=J.a.prototype
C.a=J.aG.prototype
C.c=J.cH.prototype
C.b=J.b2.prototype
C.e=J.aH.prototype
C.v=J.aI.prototype
C.w=H.cL.prototype
C.k=J.eV.prototype
C.f=J.aQ.prototype
C.P=W.aR.prototype
C.Q=W.bD.prototype
C.d=new P.hs()
C.h=new P.aF(0)
C.o=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.p=function(hooks) {
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
C.i=function(hooks) { return hooks; }

C.q=function(getTagFallback) {
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
C.r=function() {
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
C.t=function(hooks) {
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
C.u=function(hooks) {
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
C.j=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.x=H.L("m6")
C.y=H.L("m7")
C.z=H.L("e4")
C.A=H.L("m8")
C.B=H.L("m9")
C.C=H.L("jb")
C.D=H.L("ma")
C.E=H.L("je")
C.F=H.L("aN")
C.G=H.L("w")
C.H=H.L("jz")
C.I=H.L("jA")
C.J=H.L("mb")
C.K=H.L("jB")
C.L=H.L("aY")
C.M=H.L("M")
C.N=H.L("p")
C.O=H.L("V")})();(function staticFields(){$.ji="$cachedFunction"
$.jj="$cachedInvocation"
$.j2=null
$.j0=null
$.iA=!1
$.iE=null
$.jK=null
$.k_=null
$.hP=null
$.hX=null
$.iF=null
$.b9=null
$.bJ=null
$.bK=null
$.iB=!1
$.D=C.d
$.j6=0
$.lG=0
$.lH=0
$.iI=0
$.jY=0
$.bO=0
$.bP=0
$.m3=!1
$.jS=0})();(function lazyInitializers(){lazy($,"j5","$get$j5",function(){return H.jU("_$dart_dartClosure")})
lazy($,"is","$get$is",function(){return H.jU("_$dart_js")})
lazy($,"jc","$get$jc",function(){return H.l_()})
lazy($,"jd","$get$jd",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.j6
$.j6=t+1
t="expando$key$"+t}return new P.dH(null,t,[P.p])})
lazy($,"jo","$get$jo",function(){return H.an(H.fG({
toString:function(){return"$receiver$"}}))})
lazy($,"jp","$get$jp",function(){return H.an(H.fG({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"jq","$get$jq",function(){return H.an(H.fG(null))})
lazy($,"jr","$get$jr",function(){return H.an(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jv","$get$jv",function(){return H.an(H.fG(void 0))})
lazy($,"jw","$get$jw",function(){return H.an(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jt","$get$jt",function(){return H.an(H.ju(null))})
lazy($,"js","$get$js",function(){return H.an(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"jy","$get$jy",function(){return H.an(H.ju(void 0))})
lazy($,"jx","$get$jx",function(){return H.an(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"iy","$get$iy",function(){return P.ll()})
lazy($,"bL","$get$bL",function(){return[]})
lazy($,"hO","$get$hO",function(){return P.jf(P.p,P.aY)})
lazy($,"bN","$get$bN",function(){return P.jf(P.w,P.aY)})
lazy($,"jm","$get$jm",function(){return new G.d0(1281,0,4294967295)})
lazy($,"iZ","$get$iZ",function(){return new G.d_(1281,1281,1281)})
lazy($,"T","$get$T",function(){return P.aK(["cBlendEquation",new G.i("","",0),"cDepthWrite",new G.i("","",0),"cDepthTest",new G.i("","",0),"cStencilFunc",new G.i("","",0),"tPosition",new G.i("vec3","",0),"tSpeed",new G.i("vec3","",0),"tForce",new G.i("vec3","",0),"aColors",new G.i("vec3","per vertex color",0),"aColorAlpha",new G.i("vec4","per vertex color",0),"aPosition",new G.i("vec3","vertex coordinates",0),"aTexUV",new G.i("vec2","texture uvs",0),"aNormal",new G.i("vec3","vertex normals",0),"aBinormal",new G.i("vec3","vertex binormals",0),"aCenter",new G.i("vec4","for wireframe",0),"aPointSize",new G.i("float","",0),"aBoneIndex",new G.i("vec4","",0),"aBoneWeight",new G.i("vec4","",0),"aTangent",new G.i("vec3","vertex tangents",0),"aBitangent",new G.i("vec3","vertex btangents",0),"iaRotation",new G.i("vec4","",0),"iaTranslation",new G.i("vec3","",0),"iaScale",new G.i("vec3","",0),"vColor",new G.i("vec3","per vertex color",0),"vTexUV",new G.i("vec2","",0),"vLightWeighting",new G.i("vec3","",0),"vNormal",new G.i("vec3","",0),"vPosition",new G.i("vec3","vertex coordinates",0),"vPositionFromLight",new G.i("vec4","delta from light",0),"vCenter",new G.i("vec4","for wireframe",0),"vDepth",new G.i("float","depth for shadowmaps",0),"uTransformationMatrix",new G.i("mat4","",0),"uModelMatrix",new G.i("mat4","",0),"uNormalMatrix",new G.i("mat3","",0),"uConvolutionMatrix",new G.i("mat3","",0),"uPerspectiveViewMatrix",new G.i("mat4","",0),"uLightPerspectiveViewMatrix",new G.i("mat4","",0),"uShadowMap",new G.i("sampler2DShadow","",0),"uTexture",new G.i("sampler2D","",0),"uTexture2",new G.i("sampler2D","",0),"uTexture3",new G.i("sampler2D","",0),"uTexture4",new G.i("sampler2D","",0),"uSpecularMap",new G.i("sampler2D","",0),"uNormalMap",new G.i("sampler2D","",0),"uBumpMap",new G.i("sampler2D","",0),"uDepthMap",new G.i("sampler2D","",0),"uCubeTexture",new G.i("samplerCube","",0),"uAnimationTable",new G.i("sampler2D","",0),"uTime",new G.i("float","time since program start in sec",0),"uCameraNear",new G.i("float","",0),"uCameraFar",new G.i("float","",0),"uFogNear",new G.i("float","",0),"uFogFar",new G.i("float","",0),"uPointSize",new G.i("float","",0),"uScale",new G.i("float","",0),"uAngle",new G.i("float","",0),"uCanvasSize",new G.i("vec2","",0),"uCenter2",new G.i("vec2","",0),"uCutOff",new G.i("float","",0),"uShininess",new G.i("float","",0),"uShadowBias",new G.i("float","",0),"uOpacity",new G.i("float","",0),"uColor",new G.i("vec3","",0),"uAmbientDiffuse",new G.i("vec3","",0),"uColorEmissive",new G.i("vec3","",0),"uColorSpecular",new G.i("vec3","",0),"uColorDiffuse",new G.i("vec3","",0),"uColorAlpha",new G.i("vec4","",0),"uColorAlpha2",new G.i("vec4","",0),"uEyePosition",new G.i("vec3","",0),"uMaterial",new G.i("mat4","",0),"uRange",new G.i("vec2","",0),"uDirection",new G.i("vec2","",0),"uBoneMatrices",new G.i("mat4","",128),"uLightDescs",new G.i("mat4","",4),"uLightCount",new G.i("float","",0),"uLightTypes",new G.i("float","",4),"uBumpScale",new G.i("float","for bump maps",0),"uNormalScale",new G.i("float","for normal maps",0)])})
lazy($,"jP","$get$jP",function(){var t=new G.b6("FixedVertexColorV",null,[],[],[],[],0,P.Q())
t.b1(["aPosition"])
t.b4(["uPerspectiveViewMatrix","uModelMatrix"])
t.ah(["vColor"])
t.b8(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vColor = ColorFromPosition(aPosition);"],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return t})
lazy($,"jO","$get$jO",function(){var t=new G.b6("FixedVertexColorF",null,[],[],[],[],0,P.Q())
t.ah(["vColor"])
t.ax(["oFragColor = vec4( vColor, 1.0 );"])
return t})
lazy($,"jD","$get$jD",function(){return[T.K(0,0,1),T.K(0,0,-1),T.K(0,1,0),T.K(0,-1,0),T.K(1,0,0),T.K(-1,0,0)]})
lazy($,"j9","$get$j9",function(){return[new G.A(0,11,5),new G.A(0,5,1),new G.A(0,1,7),new G.A(0,7,10),new G.A(0,10,11),new G.A(1,5,9),new G.A(5,11,4),new G.A(11,10,2),new G.A(10,7,6),new G.A(7,1,8),new G.A(3,9,4),new G.A(3,4,2),new G.A(3,2,6),new G.A(3,6,8),new G.A(3,8,9),new G.A(4,9,5),new G.A(2,4,11),new G.A(6,2,10),new G.A(8,6,7),new G.A(9,8,1)]})
lazy($,"k4","$get$k4",function(){return(1+P.m4(5))/2})
lazy($,"ja","$get$ja",function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=$.$get$k4()
s=T.K(-1,t,0)
s.E(0)
r=T.K(1,t,0)
r.E(0)
q=T.K(-1,-t,0)
q.E(0)
p=T.K(1,-t,0)
p.E(0)
o=T.K(0,-1,t)
o.E(0)
n=T.K(0,1,t)
n.E(0)
m=T.K(0,-1,-t)
m.E(0)
l=T.K(0,1,-t)
l.E(0)
k=T.K(t,0,-1)
k.E(0)
j=T.K(t,0,1)
j.E(0)
i=T.K(-t,0,-1)
i.E(0)
t=T.K(-t,0,1)
t.E(0)
return[s,r,q,p,o,n,m,l,k,j,i,t]})
lazy($,"k1","$get$k1",function(){var t=new G.b6("SkyScraperV",null,[],[],[],[],0,P.Q())
t.b1(["aPosition","aTexUV"])
t.ah(["vPosition","vTexUV"])
t.b4(["uPerspectiveViewMatrix","uModelMatrix"])
t.ax(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vPosition = aPosition;","vTexUV = aTexUV;"])
return t})
lazy($,"k0","$get$k0",function(){var t=new G.b6("SkyScraperF",null,[],[],[],[],0,P.Q())
t.ah(["vPosition","vTexUV"])
t.ax(["      // the step finds the windows\n      // multiplying the tex coord with 11 gives it a black column on the right side but with artifacts\n      // multiplying the tex coord with 10.9 gives it a black column on the right side WITHOUT the\n      // artifacts on the right side\n      float s1 = step(mod(vTexUV.x*11.+1., 2.), 1.);\n      float s2 = step(mod(vTexUV.y*21.+1., 2.), 1.);\n      float s3 = step( s1+s2, 1.1);\n\n      oFragColor = vec4( 1.-s3, 1.-s3, 1.-s3, 1. );\n\n      //gl_FragColor = vec4( mod(vPosition.x*10.0,2.0) ,\n      //                       mod(vPosition.y*20.0,2.0),\n      //                       mod(vPosition.z*10.0,2.0), 1. );\n"])
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
mangledGlobalNames:{p:"int",M:"double",V:"num",w:"String",aY:"bool",aN:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,v:true,args:[P.r],opt:[P.bz]},{func:1,ret:P.p,args:[P.H,P.H]},{func:1,ret:P.w,args:[W.f]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,Range:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bs,ArrayBufferView:H.b4,DataView:H.eC,Float32Array:H.cL,Float64Array:H.eD,Int16Array:H.eE,Int32Array:H.eF,Int8Array:H.eG,Uint16Array:H.eH,Uint32Array:H.eI,Uint8ClampedArray:H.cP,CanvasPixelArray:H.cP,Uint8Array:H.eJ,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLDivElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLImageElement:W.k,HTMLKeygenElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMenuItemElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTableElement:W.k,HTMLTableRowElement:W.k,HTMLTableSectionElement:W.k,HTMLTemplateElement:W.k,HTMLTextAreaElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,HTMLAnchorElement:W.dk,HTMLAreaElement:W.dl,AudioTrack:W.a_,AudioTrackList:W.dp,Blob:W.bR,HTMLBodyElement:W.dq,HTMLCanvasElement:W.bS,CanvasRenderingContext2D:W.ds,CDATASection:W.aE,CharacterData:W.aE,Comment:W.aE,ProcessingInstruction:W.aE,Text:W.aE,CompositorWorker:W.dv,CSSCharsetRule:W.z,CSSFontFaceRule:W.z,CSSGroupingRule:W.z,CSSImportRule:W.z,CSSKeyframeRule:W.z,MozCSSKeyframeRule:W.z,WebKitCSSKeyframeRule:W.z,CSSKeyframesRule:W.z,MozCSSKeyframesRule:W.z,WebKitCSSKeyframesRule:W.z,CSSMediaRule:W.z,CSSNamespaceRule:W.z,CSSPageRule:W.z,CSSRule:W.z,CSSStyleRule:W.z,CSSSupportsRule:W.z,CSSViewportRule:W.z,CSSStyleDeclaration:W.bf,MSStyleCSSProperties:W.bf,CSS2Properties:W.bf,DataTransferItemList:W.dy,DeviceAcceleration:W.dz,XMLDocument:W.bh,Document:W.bh,DocumentFragment:W.bU,ShadowRoot:W.bU,DOMException:W.dA,DOMPoint:W.dB,DOMPointReadOnly:W.bV,DOMRectReadOnly:W.bW,DOMStringList:W.dC,DOMTokenList:W.dD,Element:W.bX,AnimationEvent:W.l,AnimationPlayerEvent:W.l,ApplicationCacheErrorEvent:W.l,AutocompleteErrorEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceLightEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,GamepadEvent:W.l,GeofencingEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RelatedEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCIceCandidateEvent:W.l,RTCPeerConnectionIceEvent:W.l,SecurityPolicyViolationEvent:W.l,ServicePortConnectEvent:W.l,ServiceWorkerMessageEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BatteryManager:W.f,CanvasCaptureMediaStreamTrack:W.f,CrossOriginServiceWorkerClient:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MessagePort:W.f,MIDIAccess:W.f,NetworkInformation:W.f,Notification:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationReceiver:W.f,PresentationRequest:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,ServicePortCollection:W.f,ServiceWorkerContainer:W.f,ServiceWorkerRegistration:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioContext:W.f,webkitAudioContext:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioSourceNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OfflineAudioContext:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.a0,FileList:W.e0,FileWriter:W.e1,HTMLFormElement:W.e6,Gamepad:W.a1,History:W.e9,HTMLCollection:W.bo,HTMLFormControlsCollection:W.bo,HTMLOptionsCollection:W.bo,HTMLDocument:W.c0,XMLHttpRequest:W.ea,XMLHttpRequestUpload:W.bp,XMLHttpRequestEventTarget:W.bp,HTMLInputElement:W.ed,KeyboardEvent:W.aJ,Location:W.er,MediaList:W.ex,MIDIOutput:W.ez,MIDIInput:W.br,MIDIPort:W.br,MimeType:W.a2,MimeTypeArray:W.eA,PointerEvent:W.N,MouseEvent:W.N,DragEvent:W.N,Navigator:W.eK,Attr:W.y,Node:W.y,NodeList:W.cR,RadioNodeList:W.cR,Path2D:W.eR,Perspective:W.eU,Plugin:W.a3,PluginArray:W.eW,PositionValue:W.eZ,PresentationConnection:W.f_,Rotation:W.f9,RTCDataChannel:W.cW,DataChannel:W.cW,HTMLSelectElement:W.fc,SharedWorker:W.ff,SourceBuffer:W.a4,SourceBufferList:W.fg,SpeechGrammar:W.a5,SpeechGrammarList:W.fi,SpeechRecognitionResult:W.a6,Storage:W.fl,CSSStyleSheet:W.W,StyleSheet:W.W,CalcLength:W.ac,KeywordValue:W.ac,LengthValue:W.ac,NumberValue:W.ac,SimpleLength:W.ac,TransformValue:W.ac,StyleValue:W.ac,TextTrack:W.a7,TextTrackCue:W.X,VTTCue:W.X,TextTrackCueList:W.fv,TextTrackList:W.fw,TimeRanges:W.fx,Touch:W.a8,TouchEvent:W.aP,TouchList:W.fB,TrackDefaultList:W.fC,Matrix:W.b7,Skew:W.b7,TransformComponent:W.b7,Translation:W.fE,CompositionEvent:W.aw,FocusEvent:W.aw,TextEvent:W.aw,SVGZoomEvent:W.aw,UIEvent:W.aw,URL:W.fJ,VideoTrackList:W.fL,VTTRegionList:W.fO,WebSocket:W.fP,WheelEvent:W.aR,Window:W.bD,DOMWindow:W.bD,Worker:W.fR,CompositorWorkerGlobalScope:W.aS,DedicatedWorkerGlobalScope:W.aS,ServiceWorkerGlobalScope:W.aS,SharedWorkerGlobalScope:W.aS,WorkerGlobalScope:W.aS,ClientRect:W.fY,ClientRectList:W.d4,DOMRectList:W.d4,CSSRuleList:W.h_,DocumentType:W.h0,DOMRect:W.h1,GamepadList:W.hh,HTMLFrameSetElement:W.hi,NamedNodeMap:W.d7,MozNamedAttrMap:W.d7,ServiceWorker:W.hz,SpeechRecognitionResultList:W.hA,StyleSheetList:W.hB,WorkerLocation:W.hE,WorkerNavigator:W.hF,SVGAElement:P.dj,SVGAnimateElement:P.aD,SVGAnimateMotionElement:P.aD,SVGAnimateTransformElement:P.aD,SVGAnimationElement:P.aD,SVGSetElement:P.aD,SVGFEBlendElement:P.dI,SVGFEColorMatrixElement:P.dJ,SVGFEComponentTransferElement:P.dK,SVGFECompositeElement:P.dL,SVGFEConvolveMatrixElement:P.dM,SVGFEDiffuseLightingElement:P.dN,SVGFEDisplacementMapElement:P.dO,SVGFEFloodElement:P.dP,SVGFEGaussianBlurElement:P.dQ,SVGFEImageElement:P.dR,SVGFEMergeElement:P.dS,SVGFEMorphologyElement:P.dT,SVGFEOffsetElement:P.dU,SVGFEPointLightElement:P.dV,SVGFESpecularLightingElement:P.dW,SVGFESpotLightElement:P.dX,SVGFETileElement:P.dY,SVGFETurbulenceElement:P.dZ,SVGFilterElement:P.e2,SVGForeignObjectElement:P.e5,SVGCircleElement:P.aa,SVGEllipseElement:P.aa,SVGLineElement:P.aa,SVGPathElement:P.aa,SVGPolygonElement:P.aa,SVGPolylineElement:P.aa,SVGGeometryElement:P.aa,SVGClipPathElement:P.at,SVGDefsElement:P.at,SVGGElement:P.at,SVGSwitchElement:P.at,SVGGraphicsElement:P.at,SVGImageElement:P.eb,SVGLength:P.ak,SVGLengthList:P.em,SVGMarkerElement:P.eu,SVGMaskElement:P.ev,SVGNumber:P.al,SVGNumberList:P.eL,SVGPatternElement:P.eS,SVGPoint:P.eX,SVGPointList:P.eY,SVGRect:P.f2,SVGRectElement:P.f3,SVGScriptElement:P.fb,SVGStringList:P.fq,SVGDescElement:P.J,SVGDiscardElement:P.J,SVGFEDistantLightElement:P.J,SVGFEFuncAElement:P.J,SVGFEFuncBElement:P.J,SVGFEFuncGElement:P.J,SVGFEFuncRElement:P.J,SVGFEMergeNodeElement:P.J,SVGMetadataElement:P.J,SVGStopElement:P.J,SVGStyleElement:P.J,SVGTitleElement:P.J,SVGComponentTransferFunctionElement:P.J,SVGElement:P.J,SVGSVGElement:P.fr,SVGSymbolElement:P.fs,SVGTextContentElement:P.cZ,SVGTextPathElement:P.fu,SVGTSpanElement:P.bC,SVGTextElement:P.bC,SVGTextPositioningElement:P.bC,SVGTransform:P.am,SVGTransformList:P.fD,SVGUseElement:P.fK,SVGViewElement:P.fM,SVGViewSpec:P.fN,SVGLinearGradientElement:P.bF,SVGRadialGradientElement:P.bF,SVGGradientElement:P.bF,SVGCursorElement:P.hw,SVGFEDropShadowElement:P.hx,SVGMPathElement:P.hy,AudioBuffer:P.dn,WebGLRenderingContext:P.f7,WebGL2RenderingContext:P.f8,WebGL2RenderingContextBase:P.hD,SQLResultSetRowList:P.fj})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.bu.$nativeSuperclassTag="ArrayBufferView"
H.bv.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.bt.$nativeSuperclassTag="ArrayBufferView"
H.bw.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
W.bi.$nativeSuperclassTag="EventTarget"
W.bm.$nativeSuperclassTag="EventTarget"
W.bk.$nativeSuperclassTag="EventTarget"
W.bl.$nativeSuperclassTag="EventTarget"
W.bj.$nativeSuperclassTag="EventTarget"
W.bn.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.k3(Q.k2(),b)},[])
else (function(b){H.k3(Q.k2(),b)})([])})})()