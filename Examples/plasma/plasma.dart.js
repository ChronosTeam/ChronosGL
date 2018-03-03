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
a[c]=function(){a[c]=function(){H.ml(b)}
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
return d?function(e){if(t===null)t=H.iN(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.iN(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.iN(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={iB:function iB(a){this.a=a},
iF:function(a,b,c,d){if(!!a.$isc)return new H.dK(a,b,[c,d])
return new H.cR(a,b,[c,d])},
iz:function(){return new P.bA("No element")},
lj:function(){return new P.bA("Too few elements")},
d6:function(a,b,c,d){if(c-b<=32)H.lx(a,b,c,d)
else H.lw(a,b,c,d)},
lx:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.ae(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.ag(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
lw:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.G(t+1,6)
r=a3+s
q=a4-s
p=C.b.G(a3+a4,2)
o=p-s
n=p+s
t=J.ae(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.ag(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.ag(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.ag(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.ag(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ag(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.ag(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.ag(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.ag(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ag(a5.$2(j,i),0)){h=i
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
H.d6(a2,a3,g-2,a5)
H.d6(a2,f+2,a4,a5)
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
break}}H.d6(a2,g,f,a5)}else H.d6(a2,g,f,a5)},
c:function c(){},
b4:function b4(){},
cQ:function cQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cR:function cR(a,b,c){this.a=a
this.b=b
this.$ti=c},
dK:function dK(a,b,c){this.a=a
this.b=b
this.$ti=c},
ey:function ey(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cS:function cS(a,b,c){this.a=a
this.b=b
this.$ti=c},
c7:function c7(){},
di:function(a,b){var t=a.ab(b)
if(!u.globalState.d.cy)u.globalState.f.ag()
return t},
i9:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
kh:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.u(s).$isb)throw H.e(P.j8("Arguments to main must be a List: "+H.h(s)))
u.globalState=new H.hw(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$jm()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.h8(P.iE(null,H.aV),0)
r=P.p
s.se1(new H.aa(0,null,null,null,null,null,0,[r,H.aU]))
s.se4(new H.aa(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.hv()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.le,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.lJ)}if(u.globalState.x)return
s=u.globalState.a++
q=P.aK(null,null,null,r)
p=new H.b6(0,null,!1)
o=new H.aU(s,new H.aa(0,null,null,null,null,null,0,[r,H.b6]),q,u.createNewIsolate(),p,new H.aj(H.ih()),new H.aj(H.ih()),!1,!1,[],P.aK(null,null,null,null),null,null,!1,!0,P.aK(null,null,null,null))
q.l(0,0)
o.bl(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bb(a,{func:1,args:[,]}))o.ab(new H.io(t,a))
else if(H.bb(a,{func:1,args:[,,]}))o.ab(new H.ip(t,a))
else o.ab(a)
u.globalState.f.ag()},
lJ:function(a){var t=P.aJ(["command","print","msg",a])
return new H.ad(!0,P.bK(null,P.p)).F(t)},
lg:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.lh()
return},
lh:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.t("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.t('Cannot extract URI from "'+t+'"'))},
le:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.aT(!0,[]).U(b.data)
s=J.ae(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.m9(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aT(!0,[]).U(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aT(!0,[]).U(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.p
j=P.aK(null,null,null,k)
i=new H.b6(0,null,!1)
h=new H.aU(s,new H.aa(0,null,null,null,null,null,0,[k,H.b6]),j,u.createNewIsolate(),i,new H.aj(H.ih()),new H.aj(H.ih()),!1,!1,[],P.aK(null,null,null,null),null,null,!1,!0,P.aK(null,null,null,null))
j.l(0,0)
h.bl(0,i)
u.globalState.f.a.S(0,new H.aV(h,new H.ek(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.ag()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.kN(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ag()
break
case"close":u.globalState.ch.V(0,$.$get$jn().h(0,a))
a.terminate()
u.globalState.f.ag()
break
case"log":H.ld(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aJ(["command","print","msg",t])
k=new H.ad(!0,P.bK(null,P.p)).F(k)
s.toString
self.postMessage(k)}else P.af(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
ld:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aJ(["command","log","msg",a])
r=new H.ad(!0,P.bK(null,P.p)).F(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.as(q)
t=H.aA(q)
s=P.c6(t)
throw H.e(s)}},
lf:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.js=$.js+("_"+s)
$.jt=$.jt+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.E(0,["spawned",new H.b8(s,r),q,t.r])
r=new H.el(a,b,c,d,t)
if(e){t.bD(q,q)
u.globalState.f.a.S(0,new H.aV(t,r,"start isolate"))}else r.$0()},
ly:function(a,b){var t=new H.fE(!0,!1,null)
t.d2(a,b)
return t},
lK:function(a){return new H.aT(!0,[]).U(new H.ad(!1,P.bK(null,P.p)).F(a))},
io:function io(a,b){this.a=a
this.b=b},
ip:function ip(a,b){this.a=a
this.b=b},
hw:function hw(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
hq:function hq(a,b){this.a=a
this.b=b},
h8:function h8(a,b){this.a=a
this.b=b},
h9:function h9(a){this.a=a},
aV:function aV(a,b,c){this.a=a
this.b=b
this.c=c},
hv:function hv(){},
ek:function ek(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
el:function el(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h2:function h2(){},
b8:function b8(a,b){this.b=a
this.a=b},
hx:function hx(a,b){this.a=a
this.b=b},
bL:function bL(a,b,c){this.b=a
this.c=b
this.a=c},
b6:function b6(a,b,c){this.a=a
this.b=b
this.c=c},
fE:function fE(a,b,c){this.a=a
this.b=b
this.c=c},
fF:function fF(a,b){this.a=a
this.b=b},
fG:function fG(a,b){this.a=a
this.b=b},
aj:function aj(a){this.a=a},
ad:function ad(a,b){this.a=a
this.b=b},
aT:function aT(a,b){this.a=a
this.b=b},
m4:function(a){return u.types[a]},
mb:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.u(a).$isq},
h:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.b_(a)
if(typeof t!=="string")throw H.e(H.S(a))
return t},
lv:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.f8(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aN:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
d3:function(a){var t,s,r,q,p,o,n,m
t=J.u(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.r||!!J.u(a).$isaQ){p=C.o(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.e.aB(q,0)===36)q=C.e.cK(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dk(H.hY(a),0,null),u.mangledGlobalNames)},
f4:function(a){return"Instance of '"+H.d3(a)+"'"},
Q:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lt:function(a){return a.b?H.Q(a).getUTCFullYear()+0:H.Q(a).getFullYear()+0},
lr:function(a){return a.b?H.Q(a).getUTCMonth()+1:H.Q(a).getMonth()+1},
ln:function(a){return a.b?H.Q(a).getUTCDate()+0:H.Q(a).getDate()+0},
lo:function(a){return a.b?H.Q(a).getUTCHours()+0:H.Q(a).getHours()+0},
lq:function(a){return a.b?H.Q(a).getUTCMinutes()+0:H.Q(a).getMinutes()+0},
ls:function(a){return a.b?H.Q(a).getUTCSeconds()+0:H.Q(a).getSeconds()+0},
lp:function(a){return a.b?H.Q(a).getUTCMilliseconds()+0:H.Q(a).getMilliseconds()+0},
jr:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.S(a))
return a[b]},
K:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ai(!0,b,"index",null)
t=J.bW(a)
if(b<0||C.b.cv(b,t))return P.B(b,a,"index",null,t)
return P.f5(b,"index",null)},
S:function(a){return new P.ai(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.d2()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.ki})
t.name=""}else t.toString=H.ki
return t},
ki:function(){return J.b_(this.dartException)},
F:function(a){throw H.e(a)},
O:function(a){throw H.e(new P.a8(a))},
ao:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.fL(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
fM:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
jD:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
iD:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.er(a,s,t?null:b.receiver)},
as:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.iq(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aK(r,16)&8191)===10)switch(q){case 438:return t.$1(H.iD(H.h(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.h(s)+" (Error "+q+")"
return t.$1(new H.d1(p,null))}}if(a instanceof TypeError){o=$.$get$jx()
n=$.$get$jy()
m=$.$get$jz()
l=$.$get$jA()
k=$.$get$jE()
j=$.$get$jF()
i=$.$get$jC()
$.$get$jB()
h=$.$get$jH()
g=$.$get$jG()
f=o.J(s)
if(f!=null)return t.$1(H.iD(s,f))
else{f=n.J(s)
if(f!=null){f.method="call"
return t.$1(H.iD(s,f))}else{f=m.J(s)
if(f==null){f=l.J(s)
if(f==null){f=k.J(s)
if(f==null){f=j.J(s)
if(f==null){f=i.J(s)
if(f==null){f=l.J(s)
if(f==null){f=h.J(s)
if(f==null){f=g.J(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.d1(s,f==null?null:f.method))}}return t.$1(new H.fO(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.d7()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ai(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.d7()
return a},
aA:function(a){var t
if(a==null)return new H.dh(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dh(a,null)},
mf:function(a){if(a==null||typeof a!='object')return J.ah(a)
else return H.aN(a)},
m1:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
ma:function(a,b,c,d,e,f,g){switch(c){case 0:return H.di(b,new H.i4(a))
case 1:return H.di(b,new H.i5(a,d))
case 2:return H.di(b,new H.i6(a,d,e))
case 3:return H.di(b,new H.i7(a,d,e,f))
case 4:return H.di(b,new H.i8(a,d,e,f,g))}throw H.e(P.c6("Unsupported number of arguments for wrapped closure"))},
bP:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.ma)
a.$identity=t
return t},
l2:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.u(c).$isb){t.$reflectionInfo=c
r=H.lv(t).r}else r=c
q=d?Object.create(new H.fo().constructor.prototype):Object.create(new H.be(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.jh(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.m4,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.je:H.iw
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.jh(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
l_:function(a,b,c,d){var t=H.iw
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
jh:function(a,b,c){var t,s,r,q
if(c)return H.l1(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.l_(s,b==null?r!=null:b!==r,t,b)
return q},
l0:function(a,b,c,d){var t,s
t=H.iw
s=H.je
switch(b?-1:a){case 0:throw H.e(new H.ff("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
l1:function(a,b){var t,s,r,q
H.kZ()
t=$.jd
if(t==null){t=H.jc("receiver")
$.jd=t}s=b.$stubName
r=b.length
q=a[s]
t=H.l0(r,b==null?q!=null:b!==q,s,b)
return t},
iN:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.u(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.l2(a,b,t,!!d,e,f)},
iw:function(a){return a.a},
je:function(a){return a.c},
kZ:function(){var t=$.jf
if(t==null){t=H.jc("self")
$.jf=t}return t},
jc:function(a){var t,s,r,q,p
t=new H.be("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
mz:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.ap(a,"String"))},
W:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ap(a,"double"))},
my:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ap(a,"num"))},
lW:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.ap(a,"bool"))},
m9:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.ap(a,"int"))},
mh:function(a,b){throw H.e(H.ap(a,b.substring(3)))},
mg:function(a,b){var t=J.ae(b)
throw H.e(H.jg(H.d3(a),t.ba(b,3,t.gk(b))))},
k3:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.u(a)[b])return a
H.mh(a,b)},
ar:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.u(a)[b]
else t=!0
if(t)return a
H.mg(a,b)},
mx:function(a){if(a==null)return a
if(!!J.u(a).$isb)return a
throw H.e(H.ap(a,"List"))},
jZ:function(a){var t=J.u(a)
return"$S" in t?t.$S():null},
bb:function(a,b){var t
if(a==null)return!1
t=H.jZ(a)
return t==null?!1:H.k4(t,b)},
mv:function(a,b){var t,s
if(a==null)return a
if($.iK)return a
$.iK=!0
try{if(H.bb(a,b))return a
t=H.aB(b,null)
s=H.ap(a,t)
throw H.e(s)}finally{$.iK=!1}},
ap:function(a,b){return new H.fN("type '"+H.d3(a)+"' is not a subtype of type '"+b+"'")},
jg:function(a,b){return new H.dx("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
ay:function(a){if(!0===a)return!1
if(!!J.u(a).$isiy)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.ap(a,"bool"))},
aX:function(a){throw H.e(new H.fY(a))},
d:function(a){if(H.ay(a))throw H.e(new P.bX(null))},
ml:function(a){throw H.e(new P.dB(a))},
ih:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
k1:function(a){return u.getIsolateTag(a)},
J:function(a){return new H.av(a,null)},
M:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
hY:function(a){if(a==null)return
return a.$ti},
k2:function(a,b){return H.iT(a["$as"+H.h(b)],H.hY(a))},
az:function(a,b,c){var t,s
t=H.k2(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
bc:function(a,b){var t,s
t=H.hY(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aB:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dk(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.h(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aB(t,b)
return H.lL(a,b)}return"unknown-reified-type"},
lL:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aB(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aB(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aB(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.m0(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aB(l[j],b)+(" "+H.h(j))}q+="}"}return"("+q+") => "+t},
dk:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bB("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aB(o,c)}return p?"":"<"+s.j(0)+">"},
hZ:function(a){var t,s
if(a instanceof H.b1){t=H.jZ(a)
if(t!=null)return H.aB(t,null)}s=J.u(a).constructor.name
if(a==null)return s
return s+H.dk(a.$ti,0,null)},
iT:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.iQ(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.iQ(a,null,b)
return b},
hS:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.hY(a)
s=J.u(a)
if(s[b]==null)return!1
return H.jW(H.iT(s[d],t),c)},
dl:function(a,b,c,d){if(a==null)return a
if(H.hS(a,b,c,d))return a
throw H.e(H.jg(H.d3(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dk(c,0,null),u.mangledGlobalNames)))},
ms:function(a,b,c,d){if(a==null)return a
if(H.hS(a,b,c,d))return a
throw H.e(H.ap(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dk(c,0,null),u.mangledGlobalNames)))},
jW:function(a,b){var t,s,r,q,p
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
if(!H.X(r,b[p]))return!1}return!0},
mt:function(a,b,c){return H.iQ(a,b,H.k2(b,c))},
X:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aM")return!0
if('func' in b)return H.k4(a,b)
if('func' in a)return b.name==="iy"||b.name==="r"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.d(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.d(!0)
q=b[0]}else q=b
if(q!==s){p=H.aB(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.jW(H.iT(o,t),r)},
jV:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.X(o,n)||H.X(n,o)))return!1}return!0},
lS:function(a,b){var t,s,r,q,p,o
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
if(!(H.X(p,o)||H.X(o,p)))return!1}return!0},
k4:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.d('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.X(t,s)||H.X(s,t)))return!1}r=a.args
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
if(n===m){if(!H.jV(r,q,!1))return!1
if(!H.jV(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
g=r[h]
H.d(i)
f=q[h]
if(!(H.X(g,f)||H.X(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=q[e]
if(!(H.X(g,f)||H.X(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=o[e]
if(!(H.X(g,f)||H.X(f,g)))return!1}}return H.lS(a.named,b.named)},
iQ:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
mA:function(a){var t=$.iO
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
mw:function(a){return H.aN(a)},
mu:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mc:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.r))
t=$.iO.$1(a)
s=$.hW[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.i3[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.jU.$2(a,t)
if(t!=null){s=$.hW[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.i3[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.iR(r)
$.hW[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.i3[t]=r
return r}if(p==="-"){o=H.iR(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.k6(a,r)
if(p==="*")throw H.e(new P.db(t))
if(u.leafTags[t]===true){o=H.iR(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.k6(a,r)},
k6:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.ie(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
iR:function(a){return J.ie(a,!1,null,!!a.$isq)},
me:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.ie(t,!1,null,!!t.$isq)
else return J.ie(t,c,null,null)},
m7:function(){if(!0===$.iP)return
$.iP=!0
H.m8()},
m8:function(){var t,s,r,q,p,o,n,m
$.hW=Object.create(null)
$.i3=Object.create(null)
H.m6()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.kg.$1(p)
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
t=C.w()
t=H.ba(C.t,H.ba(C.y,H.ba(C.n,H.ba(C.n,H.ba(C.x,H.ba(C.u,H.ba(C.v(C.o),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.iO=new H.i0(p)
$.jU=new H.i1(o)
$.kg=new H.i2(n)},
ba:function(a,b){return a(b)||b},
f8:function f8(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fL:function fL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
d1:function d1(a,b){this.a=a
this.b=b},
er:function er(a,b,c){this.a=a
this.b=b
this.c=c},
fO:function fO(a){this.a=a},
iq:function iq(a){this.a=a},
dh:function dh(a,b){this.a=a
this.b=b},
i4:function i4(a){this.a=a},
i5:function i5(a,b){this.a=a
this.b=b},
i6:function i6(a,b,c){this.a=a
this.b=b
this.c=c},
i7:function i7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i8:function i8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
b1:function b1(){},
fy:function fy(){},
fo:function fo(){},
be:function be(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fN:function fN(a){this.a=a},
dx:function dx(a){this.a=a},
ff:function ff(a){this.a=a},
fY:function fY(a){this.a=a},
av:function av(a,b){this.a=a
this.b=b},
aa:function aa(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eq:function eq(a){this.a=a},
et:function et(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
eu:function eu(a,b){this.a=a
this.$ti=b},
ev:function ev(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i0:function i0(a){this.a=a},
i1:function i1(a){this.a=a},
i2:function i2(a){this.a=a},
j:function(a){return a},
hO:function(a){var t,s,r
if(!!J.u(a).$iso)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bs:function bs(){},
b5:function b5(){},
eG:function eG(){},
cW:function cW(){},
cX:function cX(){},
cY:function cY(){},
cV:function cV(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
cZ:function cZ(){},
eN:function eN(){},
bt:function bt(){},
bu:function bu(){},
bv:function bv(){},
bw:function bw(){},
m0:function(a){var t=H.M(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
ig:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
u:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cP.prototype
return J.eo.prototype}if(typeof a=="string")return J.aG.prototype
if(a==null)return J.ep.prototype
if(typeof a=="boolean")return J.en.prototype
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.r)return a
return J.hX(a)},
ie:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hX:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.iP==null){H.m7()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.db("Return interceptor for "+H.h(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$iC()]
if(p!=null)return p
p=H.mc(a)
if(p!=null)return p
if(typeof a=="function")return C.z
s=Object.getPrototypeOf(a)
if(s==null)return C.p
if(s===Object.prototype)return C.p
if(typeof q=="function"){Object.defineProperty(q,$.$get$iC(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
ae:function(a){if(typeof a=="string")return J.aG.prototype
if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.r)return a
return J.hX(a)},
bR:function(a){if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.r)return a
return J.hX(a)},
k0:function(a){if(typeof a=="number")return J.b3.prototype
if(a==null)return a
if(!(a instanceof P.r))return J.aQ.prototype
return a},
m2:function(a){if(typeof a=="number")return J.b3.prototype
if(typeof a=="string")return J.aG.prototype
if(a==null)return a
if(!(a instanceof P.r))return J.aQ.prototype
return a},
m3:function(a){if(typeof a=="string")return J.aG.prototype
if(a==null)return a
if(!(a instanceof P.r))return J.aQ.prototype
return a},
m:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.r)return a
return J.hX(a)},
D:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.u(a).w(a,b)},
ag:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.k0(a).ai(a,b)},
kj:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.k0(a).ax(a,b)},
aZ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mb(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ae(a).h(a,b)},
kk:function(a,b,c){return J.bR(a).i(a,b,c)},
kl:function(a,b,c,d){return J.m(a).bi(a,b,c,d)},
iU:function(a,b){return J.m3(a).aB(a,b)},
iV:function(a,b){return J.m(a).bC(a,b)},
iW:function(a,b,c){return J.m(a).bE(a,b,c)},
km:function(a,b){return J.m(a).dz(a,b)},
dm:function(a,b,c){return J.m(a).bF(a,b,c)},
kn:function(a,b,c){return J.m(a).bG(a,b,c)},
bU:function(a,b,c){return J.m(a).bH(a,b,c)},
dn:function(a,b){return J.m(a).dC(a,b)},
ko:function(a,b){return J.m(a).bI(a,b)},
kp:function(a,b,c){return J.m(a).bJ(a,b,c)},
iX:function(a,b,c,d){return J.m(a).bK(a,b,c,d)},
kq:function(a,b){return J.bR(a).bL(a,b)},
kr:function(a,b,c,d,e){return J.m(a).bM(a,b,c,d,e)},
ks:function(a,b){return J.m2(a).L(a,b)},
ir:function(a){return J.m(a).bO(a)},
kt:function(a){return J.m(a).bP(a)},
ku:function(a){return J.m(a).bS(a)},
iY:function(a){return J.m(a).dH(a)},
kv:function(a,b){return J.m(a).bU(a,b)},
is:function(a,b){return J.m(a).bV(a,b)},
kw:function(a,b,c,d){return J.m(a).bW(a,b,c,d)},
kx:function(a,b,c,d,e){return J.m(a).dO(a,b,c,d,e)},
ky:function(a,b,c,d,e){return J.m(a).bX(a,b,c,d,e)},
kz:function(a,b,c,d,e,f){return J.m(a).dP(a,b,c,d,e,f)},
kA:function(a,b){return J.bR(a).p(a,b)},
bV:function(a,b){return J.m(a).bY(a,b)},
kB:function(a,b){return J.m(a).bZ(a,b)},
kC:function(a){return J.m(a).dQ(a)},
kD:function(a,b){return J.bR(a).ar(a,b)},
ah:function(a){return J.u(a).gv(a)},
bd:function(a){return J.bR(a).gB(a)},
iZ:function(a){return J.m(a).gM(a)},
bW:function(a){return J.ae(a).gk(a)},
kE:function(a){return J.u(a).gA(a)},
kF:function(a){return J.m(a).gav(a)},
it:function(a){return J.m(a).gm(a)},
iu:function(a){return J.m(a).gn(a)},
j_:function(a){return J.m(a).gH(a)},
kG:function(a){return J.m(a).aw(a)},
kH:function(a){return J.m(a).b_(a)},
kI:function(a,b){return J.m(a).b0(a,b)},
kJ:function(a,b,c){return J.m(a).b1(a,b,c)},
j0:function(a,b,c){return J.m(a).b4(a,b,c)},
kK:function(a,b){return J.m(a).c0(a,b)},
kL:function(a,b){return J.bR(a).c2(a,b)},
kM:function(a,b,c){return J.m(a).c4(a,b,c)},
kN:function(a,b){return J.m(a).E(a,b)},
kO:function(a,b,c,d){return J.m(a).b9(a,b,c,d)},
kP:function(a,b,c,d,e,f,g){return J.m(a).c9(a,b,c,d,e,f,g)},
kQ:function(a,b,c,d){return J.m(a).ca(a,b,c,d)},
j1:function(a,b,c,d){return J.m(a).cb(a,b,c,d)},
b_:function(a){return J.u(a).j(a)},
kR:function(a,b,c,d){return J.m(a).ef(a,b,c,d)},
kS:function(a,b,c){return J.m(a).ce(a,b,c)},
kT:function(a,b,c){return J.m(a).cf(a,b,c)},
iv:function(a,b,c){return J.m(a).cg(a,b,c)},
kU:function(a,b,c){return J.m(a).ci(a,b,c)},
j2:function(a,b,c){return J.m(a).cj(a,b,c)},
j3:function(a,b,c){return J.m(a).ck(a,b,c)},
j4:function(a,b,c){return J.m(a).cl(a,b,c)},
j5:function(a,b,c,d){return J.m(a).cm(a,b,c,d)},
j6:function(a,b,c,d){return J.m(a).cn(a,b,c,d)},
kV:function(a,b){return J.m(a).cp(a,b)},
kW:function(a,b,c){return J.m(a).eg(a,b,c)},
j7:function(a,b,c,d,e,f,g){return J.m(a).cr(a,b,c,d,e,f,g)},
kX:function(a,b,c,d,e){return J.m(a).cs(a,b,c,d,e)},
a:function a(){},
en:function en(){},
ep:function ep(){},
bq:function bq(){},
eZ:function eZ(){},
aQ:function aQ(){},
aH:function aH(){},
aF:function aF(a){this.$ti=a},
iA:function iA(a){this.$ti=a},
ds:function ds(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b3:function b3(){},
cP:function cP(){},
eo:function eo(){},
aG:function aG(){}},P={
lC:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.lT()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bP(new P.h_(t),1)).observe(s,{childList:true})
return new P.fZ(t,s,r)}else if(self.setImmediate!=null)return P.lU()
return P.lV()},
lD:function(a){++u.globalState.f.b
self.scheduleImmediate(H.bP(new P.h0(a),0))},
lE:function(a){++u.globalState.f.b
self.setImmediate(H.bP(new P.h1(a),0))},
lF:function(a){P.iG(C.m,a)},
lO:function(a,b){if(H.bb(a,{func:1,args:[P.aM,P.aM]})){b.toString
return a}else{b.toString
return a}},
lG:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.aq))
H.d(b.a===0)
b.a=1
try{a.cd(new P.hf(b),new P.hg(b))}catch(r){t=H.as(r)
s=H.aA(r)
P.mi(new P.hh(b,t,s))}},
jO:function(a,b){var t,s,r,q
H.d(b.a<=1)
for(;t=a.a,s=t===2,s;){H.d(s)
a=a.c}s=b.a
if(t>=4){H.d(s<4)
r=b.c
b.c=null
q=b.a9(r)
H.d(b.a<4)
H.d(a.a>=4)
b.a=a.a
b.c=a.c
P.bH(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bv(q)}},
bH:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.hP(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bH(t.a,b)}s=t.a
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
P.hP(null,null,p,o,s)
return}s=$.C
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.C
H.d(l==null?s!=null:l!==s)
j=$.C
$.C=l
i=j}else i=null
s=b.c
if(s===8)new P.hl(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.hk(r,b,m).$0()}else if((s&2)!==0)new P.hj(t,r,b).$0()
if(i!=null){H.d(!0)
$.C=i}s=r.b
if(!!J.u(s).$isec){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.a9(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.jO(s,o)
return}}g=b.b
H.d(g.a<4)
h=g.c
g.c=null
b=g.a9(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.d(!o)
g.a=4
g.c=p}else{H.d(!o)
g.a=8
g.c=p}t.a=g
s=g}},
lN:function(){var t,s
for(;t=$.b9,t!=null;){$.bN=null
s=t.b
$.b9=s
if(s==null)$.bM=null
t.a.$0()}},
lR:function(){$.iL=!0
try{P.lN()}finally{$.bN=null
$.iL=!1
if($.b9!=null)$.$get$iI().$1(P.jX())}},
jS:function(a){var t=new P.dc(a,null)
if($.b9==null){$.bM=t
$.b9=t
if(!$.iL)$.$get$iI().$1(P.jX())}else{$.bM.b=t
$.bM=t}},
lQ:function(a){var t,s,r
t=$.b9
if(t==null){P.jS(a)
$.bN=$.bM
return}s=new P.dc(a,null)
r=$.bN
if(r==null){s.b=t
$.bN=s
$.b9=s}else{s.b=r.b
r.b=s
$.bN=s
if(s.b==null)$.bM=s}},
mi:function(a){var t=$.C
if(C.d===t){P.hR(null,null,C.d,a)
return}t.toString
P.hR(null,null,t,t.aO(a))},
lz:function(a,b){var t=$.C
if(t===C.d){t.toString
return P.iG(a,b)}return P.iG(a,t.aO(b))},
iG:function(a,b){var t=C.b.G(a.a,1000)
return H.ly(t<0?0:t,b)},
iH:function(a){var t,s
H.d(a!=null)
t=$.C
H.d(a==null?t!=null:a!==t)
s=$.C
$.C=a
return s},
hP:function(a,b,c,d,e){var t={}
t.a=d
P.lQ(new P.hQ(t,e))},
jQ:function(a,b,c,d){var t,s
if($.C===c)return d.$0()
t=P.iH(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.C=s}},
jR:function(a,b,c,d,e){var t,s
if($.C===c)return d.$1(e)
t=P.iH(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.C=s}},
lP:function(a,b,c,d,e,f){var t,s
if($.C===c)return d.$2(e,f)
t=P.iH(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.C=s}},
hR:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.aO(d):c.dA(d)
P.jS(d)},
h_:function h_(a){this.a=a},
fZ:function fZ(a,b,c){this.a=a
this.b=b
this.c=c},
h0:function h0(a){this.a=a},
h1:function h1(a){this.a=a},
h4:function h4(){},
hJ:function hJ(a,b){this.a=a
this.$ti=b},
de:function de(a,b,c,d,e,f){var _=this
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
he:function he(a,b){this.a=a
this.b=b},
hi:function hi(a,b){this.a=a
this.b=b},
hf:function hf(a){this.a=a},
hg:function hg(a){this.a=a},
hh:function hh(a,b,c){this.a=a
this.b=b
this.c=c},
hl:function hl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hm:function hm(a){this.a=a},
hk:function hk(a,b,c){this.a=a
this.b=b
this.c=c},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
dc:function dc(a,b){this.a=a
this.b=b},
fr:function fr(){},
ft:function ft(a){this.a=a},
fu:function fu(a,b){this.a=a
this.b=b},
fs:function fs(){},
b0:function b0(a,b){this.a=a
this.b=b},
hN:function hN(){},
hQ:function hQ(a,b){this.a=a
this.b=b},
hz:function hz(){},
hB:function hB(a,b){this.a=a
this.b=b},
hA:function hA(a,b){this.a=a
this.b=b},
hC:function hC(a,b){this.a=a
this.b=b},
jp:function(a,b){return new H.aa(0,null,null,null,null,null,0,[a,b])},
E:function(){return new H.aa(0,null,null,null,null,null,0,[null,null])},
aJ:function(a){return H.m1(a,new H.aa(0,null,null,null,null,null,0,[null,null]))},
bK:function(a,b){return new P.df(0,null,null,null,null,null,0,[a,b])},
lI:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
li:function(a,b,c){var t,s
if(P.iM(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bO()
C.a.l(s,a)
try{P.lM(a,t)}finally{H.d(C.a.gau(s)===a)
s.pop()}s=P.jw(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
em:function(a,b,c){var t,s,r
if(P.iM(a))return b+"..."+c
t=new P.bB(b)
s=$.$get$bO()
C.a.l(s,a)
try{r=t
r.a=P.jw(r.ga0(),a,", ")}finally{H.d(C.a.gau(s)===a)
s.pop()}s=t
s.a=s.ga0()+c
s=t.ga0()
return s.charCodeAt(0)==0?s:s},
iM:function(a){var t,s
for(t=0;s=$.$get$bO(),t<s.length;++t)if(a===s[t])return!0
return!1},
lM:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gB(a)
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
aK:function(a,b,c,d){return new P.hs(0,null,null,null,null,null,0,[d])},
lk:function(a,b){var t,s
t=P.aK(null,null,null,b)
for(s=J.bd(a);s.t();)t.l(0,s.gu())
return t},
ll:function(a){var t,s,r
t={}
if(P.iM(a))return"{...}"
s=new P.bB("")
try{C.a.l($.$get$bO(),a)
r=s
r.a=r.ga0()+"{"
t.a=!0
a.ar(0,new P.ez(t,s))
t=s
t.a=t.ga0()+"}"}finally{t=$.$get$bO()
H.d(C.a.gau(t)===a)
t.pop()}t=s.ga0()
return t.charCodeAt(0)==0?t:t},
iE:function(a,b){var t=new P.ew(null,0,0,0,[b])
t.cY(a,b)
return t},
df:function df(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hs:function hs(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
ht:function ht(a,b,c){this.a=a
this.b=b
this.c=c},
bJ:function bJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hp:function hp(){},
x:function x(){},
ez:function ez(a,b){this.a=a
this.b=b},
ew:function ew(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hu:function hu(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fi:function fi(){},
fh:function fh(){},
jw:function(a,b,c){var t=J.bd(b)
if(!t.t())return a
if(c.length===0){do a+=H.h(t.gu())
while(t.t())}else{a+=H.h(t.gu())
for(;t.t();)a=a+c+H.h(t.gu())}return a},
l3:function(a,b){return J.ks(a,b)},
l5:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.h(t)
if(t>=10)return s+"00"+H.h(t)
return s+"000"+H.h(t)},
l6:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c1:function(a){if(a>=10)return""+a
return"0"+a},
ix:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.b_(a)
if(typeof a==="string")return JSON.stringify(a)
return P.l8(a)},
l8:function(a){var t=J.u(a)
if(!!t.$isb1)return t.j(a)
return H.f4(a)},
j8:function(a){return new P.ai(!1,null,null,a)},
j9:function(a,b,c){return new P.ai(!0,a,b,c)},
kY:function(a){return new P.ai(!1,null,a,"Must not be null")},
f5:function(a,b,c){return new P.d4(null,null,!0,a,b,"Value not in range")},
bx:function(a,b,c,d,e){return new P.d4(b,c,!0,a,d,"Invalid value")},
ju:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.bx(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.bx(b,a,c,"end",f))
return b},
B:function(a,b,c,d,e){var t=e!=null?e:J.bW(b)
return new P.ei(b,t,!0,a,c,"Index out of range")},
c6:function(a){return new P.hd(a)},
jq:function(a,b,c){var t,s
t=H.M([],[c])
for(s=J.bd(a);s.t();)C.a.l(t,s.gu())
if(b)return t
t.fixed$length=Array
return t},
af:function(a){H.ig(H.h(a))},
aY:function aY(){},
G:function G(){},
bg:function bg(a,b){this.a=a
this.b=b},
L:function L(){},
aE:function aE(a){this.a=a},
dI:function dI(){},
dJ:function dJ(){},
b2:function b2(){},
bX:function bX(a){this.a=a},
d2:function d2(){},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d4:function d4(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ei:function ei(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
t:function t(a){this.a=a},
db:function db(a){this.a=a},
bA:function bA(a){this.a=a},
a8:function a8(a){this.a=a},
d7:function d7(){},
dB:function dB(a){this.a=a},
hd:function hd(a){this.a=a},
dL:function dL(a,b,c){this.a=a
this.b=b
this.$ti=c},
p:function p(){},
ak:function ak(){},
cO:function cO(){},
b:function b(){},
au:function au(){},
aM:function aM(){},
T:function T(){},
r:function r(){},
bz:function bz(){},
v:function v(){},
bB:function bB(a){this.a=a},
hU:function(a){var t,s,r,q,p
if(a==null)return
t=P.E()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.O)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
lZ:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.kD(a,new P.hT(t))
return t},
hT:function hT(a){this.a=a},
hr:function hr(){},
hy:function hy(){},
H:function H(){},
dp:function dp(){},
aC:function aC(){},
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
e2:function e2(){},
e6:function e6(){},
e9:function e9(){},
a9:function a9(){},
at:function at(){},
eg:function eg(){},
al:function al(){},
es:function es(){},
eA:function eA(){},
eB:function eB(){},
am:function am(){},
eP:function eP(){},
eW:function eW(){},
f0:function f0(){},
f1:function f1(){},
f6:function f6(){},
f7:function f7(){},
fg:function fg(){},
fv:function fv(){},
I:function I(){},
fw:function fw(){},
fx:function fx(){},
d8:function d8(){},
fz:function fz(){},
bC:function bC(){},
an:function an(){},
fJ:function fJ(){},
fQ:function fQ(){},
fS:function fS(){},
fT:function fT(){},
bI:function bI(){},
hD:function hD(){},
hE:function hE(){},
hF:function hF(){},
cm:function cm(){},
cd:function cd(){},
ch:function ch(){},
ck:function ck(){},
cz:function cz(){},
cB:function cB(){},
cC:function cC(){},
cD:function cD(){},
dt:function dt(){},
fc:function fc(){},
fd:function fd(){},
hK:function hK(){},
fn:function fn(){},
cs:function cs(){},
cE:function cE(){}},W={
l7:function(a){return"wheel"},
aW:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jP:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
a7:function(a,b,c,d,e){var t=c==null?null:W.jT(new W.hc(c))
t=new W.hb(0,a,b,t,!1,[e])
t.d6(a,b,c,!1,e)
return t},
jT:function(a){var t=$.C
if(t===C.d)return a
return t.dB(a)},
l:function l(){},
dq:function dq(){},
dr:function dr(){},
Y:function Y(){},
du:function du(){},
bY:function bY(){},
dv:function dv(){},
bZ:function bZ(){},
c_:function c_(){},
c0:function c0(){},
aD:function aD(){},
dz:function dz(){},
z:function z(){},
bf:function bf(){},
dA:function dA(){},
dC:function dC(){},
dD:function dD(){},
bh:function bh(){},
c2:function c2(){},
dE:function dE(){},
dF:function dF(){},
c3:function c3(){},
c4:function c4(){},
dG:function dG(){},
dH:function dH(){},
c5:function c5(){},
k:function k(){},
f:function f(){},
Z:function Z(){},
e4:function e4(){},
e5:function e5(){},
ea:function ea(){},
a_:function a_(){},
ee:function ee(){},
bo:function bo(){},
c8:function c8(){},
ef:function ef(){},
bp:function bp(){},
ej:function ej(){},
aI:function aI(){},
ex:function ex(){},
eC:function eC(){},
eD:function eD(){},
br:function br(){},
a0:function a0(){},
eE:function eE(){},
N:function N(){},
eO:function eO(){},
y:function y(){},
d0:function d0(){},
eV:function eV(){},
eY:function eY(){},
a1:function a1(){},
f_:function f_(){},
f2:function f2(){},
f3:function f3(){},
fe:function fe(){},
d5:function d5(){},
by:function by(){},
fj:function fj(){},
a2:function a2(){},
fk:function fk(){},
a3:function a3(){},
fm:function fm(){},
a4:function a4(){},
fp:function fp(){},
fq:function fq(a){this.a=a},
U:function U(){},
ac:function ac(){},
a5:function a5(){},
V:function V(){},
fA:function fA(){},
fB:function fB(){},
fD:function fD(){},
a6:function a6(){},
aP:function aP(){},
fH:function fH(){},
fI:function fI(){},
b7:function b7(){},
fK:function fK(){},
aw:function aw(){},
fP:function fP(){},
fR:function fR(){},
fU:function fU(){},
fV:function fV(){},
aR:function aR(){},
bG:function bG(){},
fW:function fW(a){this.a=a},
fX:function fX(){},
aS:function aS(){},
h3:function h3(){},
dd:function dd(){},
h5:function h5(){},
h6:function h6(){},
h7:function h7(){},
hn:function hn(){},
ho:function ho(){},
dg:function dg(){},
hG:function hG(){},
hH:function hH(){},
hI:function hI(){},
hL:function hL(){},
hM:function hM(){},
ha:function ha(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iJ:function iJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hb:function hb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hc:function hc(a){this.a=a},
A:function A(){},
e7:function e7(a,b,c,d,e){var _=this
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
c9:function c9(){},
ct:function ct(){},
cf:function cf(){},
cc:function cc(){},
cn:function cn(){},
co:function co(){},
cp:function cp(){},
cq:function cq(){},
cr:function cr(){},
ca:function ca(){},
ce:function ce(){},
cb:function cb(){},
cg:function cg(){},
ci:function ci(){},
cj:function cj(){},
cl:function cl(){},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
cG:function cG(){},
cH:function cH(){},
cF:function cF(){},
cK:function cK(){},
cL:function cL(){},
cM:function cM(){},
cN:function cN(){},
cx:function cx(){},
cy:function cy(){},
cA:function cA(){},
cI:function cI(){},
cJ:function cJ(){}},B={
mj:function(a){var t,s
t=document
s=W.aI
W.a7(t,"keydown",new B.ii(),!1,s)
W.a7(t,"keyup",new B.ij(),!1,s)
if(!$.mk)W.a7(t,"mousemove",new B.ik(),!1,W.N)
s=W.N
W.a7(t,"mousedown",new B.il(),!1,s)
W.a7(t,"mouseup",new B.im(),!1,s)},
lm:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.j(3))
s=$.$get$hV()
r=$.$get$bQ()
q=new T.P(new Float32Array(H.j(16)))
q.O()
q=new B.eQ(a,b,c,0,new T.n(t),-0.02,s,r,q,new T.n(new Float32Array(H.j(3))),new T.n(new Float32Array(H.j(3))),new T.n(new Float32Array(H.j(3))),new T.n(new Float32Array(H.j(3))),"camera:orbit",!1,!0)
q.cZ(a,b,c,d)
return q},
ii:function ii(){},
ij:function ij(){},
ik:function ik(){},
il:function il(){},
im:function im(){},
eQ:function eQ(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
eR:function eR(a){this.a=a},
eS:function eS(a){this.a=a},
eT:function eT(){},
eU:function eU(a){this.a=a},
l4:function(d1,d2,d3,d4,d5,d6,d7,d8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
t=-d6
s=-d7
r=new T.n(new Float32Array(H.j(3)))
r.q(t,s,d8)
q=new T.n(new Float32Array(H.j(3)))
q.q(d6,s,d8)
p=new T.n(new Float32Array(H.j(3)))
p.q(d6,d7,d8)
o=new T.n(new Float32Array(H.j(3)))
o.q(t,d7,d8)
n=-d8
m=new T.n(new Float32Array(H.j(3)))
m.q(t,s,n)
l=new T.n(new Float32Array(H.j(3)))
l.q(t,d7,n)
k=new T.n(new Float32Array(H.j(3)))
k.q(d6,d7,n)
j=new T.n(new Float32Array(H.j(3)))
j.q(d6,s,n)
i=new T.n(new Float32Array(H.j(3)))
i.q(t,d7,n)
h=new T.n(new Float32Array(H.j(3)))
h.q(t,d7,d8)
g=new T.n(new Float32Array(H.j(3)))
g.q(d6,d7,d8)
f=new T.n(new Float32Array(H.j(3)))
f.q(d6,d7,n)
e=new T.n(new Float32Array(H.j(3)))
e.q(d6,s,d8)
d=new T.n(new Float32Array(H.j(3)))
d.q(t,s,d8)
c=new T.n(new Float32Array(H.j(3)))
c.q(t,s,n)
b=new T.n(new Float32Array(H.j(3)))
b.q(d6,s,n)
a=new T.n(new Float32Array(H.j(3)))
a.q(d6,s,n)
a0=new T.n(new Float32Array(H.j(3)))
a0.q(d6,d7,n)
a1=new T.n(new Float32Array(H.j(3)))
a1.q(d6,d7,d8)
a2=new T.n(new Float32Array(H.j(3)))
a2.q(d6,s,d8)
a3=new T.n(new Float32Array(H.j(3)))
a3.q(t,s,n)
a4=new T.n(new Float32Array(H.j(3)))
a4.q(t,s,d8)
s=new T.n(new Float32Array(H.j(3)))
s.q(t,d7,d8)
a5=new T.n(new Float32Array(H.j(3)))
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
c8=new G.ed(!1,[],[],[],P.E())
c8.bc("aTexUV")
c8.bc("aNormal")
c8.cQ(6)
c8.ak([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.cO("aTexUV",[new T.w(n),new T.w(t),new T.w(a6),new T.w(a7),new T.w(a8),new T.w(a9),new T.w(b0),new T.w(b1),new T.w(b2),new T.w(b3),new T.w(b4),new T.w(b5),new T.w(b6),new T.w(b7),new T.w(b8),new T.w(b9),new T.w(c0),new T.w(c1),new T.w(c2),new T.w(c3),new T.w(c4),new T.w(c5),new T.w(c6),new T.w(c7)])
for(c9=0;t=$.$get$jN(),c9<6;++c9){d0=t[c9]
c8.cP("aNormal",[d0,d0,d0,d0])}return c8}},G={
lB:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.h(t[s])}return C.a.ae(t,"\n")},
jM:function(a,b,c){var t,s,r,q
t=J.m(a)
s=t.bR(a,b)
t.b8(a,s,c)
t.bN(a,s)
r=t.b3(a,s,35713)
if(r!=null&&!r){q=t.b2(a,s)
P.af("E:Compilation failed:")
P.af("E:"+G.lB(c))
P.af("E:Failure:")
P.af(C.e.Z("E:",q))
throw H.e(q)}return s},
jk:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.it(a[s])
b[t+1]=J.iu(a[s])
b[t+2]=J.j_(a[s])}return b},
la:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.it(a[s])
b[t+1]=J.iu(a[s])}return b},
lb:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.it(a[s])
b[t+1]=J.iu(a[s])
b[t+2]=J.j_(a[s])
b[t+3]=J.kF(a[s])}return b},
l9:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.aZ(a[s],0)
b[t+1]=J.aZ(a[s],1)
b[t+2]=J.aZ(a[s],2)
b[t+3]=J.aZ(a[s],3)}return b},
lH:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gM(t),s=s.gB(s),r=b.x,q=[[P.b,P.p]],p=[P.L],o=[T.ax],n=[T.n],m=[T.w];s.t();){l=s.gu()
if(!r.C(0,l)){k="Dropping unnecessary attribute: "+H.h(l)
if($.k_>0)H.ig("I: "+k)
continue}j=t.h(0,l)
switch($.$get$R().h(0,l).a){case"vec2":b.a5(l,G.la(H.dl(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.a5(l,G.jk(H.dl(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.a5(l,G.lb(H.dl(j,"$isb",o,"$asb"),null),4)
break
case"float":b.a5(l,new Float32Array(H.hO(H.dl(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.a5(l,G.l9(H.dl(j,"$isb",q,"$asb"),null),4)
break
default:if(H.ay(!1))H.aX("unknown type for "+H.h(l)+" ["+J.kE(j[0]).j(0)+"] ["+new H.av(H.hZ(j),null).j(0)+"] "+H.h(j))}}},
fb:function(a,b,c,d){var t=new G.fa(b,c,d,null,null,P.E(),P.E(),P.aK(null,null,null,P.v),null,a,!1,!0)
t.d_(a,b,c,d)
return t},
eF:function eF(){},
da:function da(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dw:function dw(){},
dy:function dy(a,b){this.a=a
this.b=b},
eb:function eb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
e3:function e3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ed:function ed(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d9:function d9(a,b,c){this.a=a
this.b=b
this.c=c},
bE:function bE(a,b,c){this.a=a
this.b=b
this.c=c},
cT:function cT(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
cU:function cU(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
eX:function eX(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
fa:function fa(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
ab:function ab(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fl:function fl(){},
fC:function fC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bD:function bD(){},
eh:function eh(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},A={
jY:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.K(c)
s=b.d
t.c3(0,s)
r=b.cx
J.b_(b)
q=C.a.gau(e)
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
p.dG(new T.aL(o))
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
for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.O)(s),++l)A.jY(a,s[l],t,d,e)},
d_:function d_(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
aO:function aO(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
f9:function f9(a,b,c,d,e,f,g,h,i,a0,a1){var _=this
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
dj:function(a){var t,s
t=C.f.dT(a,0,new A.i_())
s=536870911&t+(C.b.ct(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
i_:function i_(){}},T={
bF:function(a,b,c){var t=new T.n(new Float32Array(H.j(3)))
t.q(a,b,c)
return t},
aL:function aL(a){this.a=a},
P:function P(a){this.a=a},
w:function w(a){this.a=a},
n:function n(a){this.a=a},
ax:function ax(a){this.a=a}},Q={
md:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
t={}
s=document
r=C.j.c5(s,"#webgl-canvas")
q=new G.dy(null,r)
p=(r&&C.l).aZ(r,"webgl2",P.aJ(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
q.a=p
if(p==null)H.F(P.c6('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+J.b_(J.kG(p))
if($.k_>0)P.af("I: "+o)
J.kr(p,0,0,0,1)
J.bV(p,2929)
J.bV(p,2884)
n=B.lm(65,0,0,r)
p=new T.P(new Float32Array(H.j(16)))
p.O()
o=new T.P(new Float32Array(H.j(16)))
o.O()
m=new G.eX(n,50,1,0.1,1000,p,o,new T.P(new Float32Array(H.j(16))),P.E(),"perspective",!1,!0)
m.bf()
o=H.M([],[A.aO])
l=new A.f9(null,q,o,17664,0,0,0,0,"main",!1,!0)
l.d=new G.eb(q,null,null,null,null)
p=G.fb("plasma1",q,$.$get$ka(),$.$get$k7())
k=G.fb("plasma2",q,$.$get$kb(),$.$get$k8())
j=G.fb("plasma3",q,$.$get$kc(),$.$get$k9())
i=[new A.aO(p,[m],[],"plasma1",!1,!0),new A.aO(k,[m],[],"plasma2",!1,!0),new A.aO(j,[m],[],"plasma3",!1,!0)]
for(h=0;h<3;++h){g=i[h]
H.d(!0)
C.a.l(o,g)}f=new G.cT(P.E(),"mat",!1,!0)
f.I("cDepthTest",!0)
f.I("cDepthWrite",!0)
f.I("cBlendEquation",$.$get$jb())
p=$.$get$jv()
f.I("cStencilFunc",p)
k=i[0].d
e=B.l4(!0,1,0,1,0,10,10,10)
j=k.d
d=J.iY(j.a)
c=new G.cU(j,d,4,P.E(),k.e.x,null,0,-1,null,null,P.E(),"meshdata:cube",!1,!0)
c.ak(G.jk(e.d,null))
k=e.cV()
c.y=J.ir(j.a)
H.d(c.ch!=null)
b=c.ch.length
if(b<768){c.saG(new Uint8Array(H.hO(k)))
c.Q=5121}else if(b<196608){c.saG(new Uint16Array(H.hO(k)))
c.Q=5123}else{c.saG(new Uint32Array(H.hO(k)))
c.Q=5125}J.dn(j.a,d)
k=c.y
d=c.cx
j.toString
b=J.u(d)
H.d(!!b.$isjI||!!b.$isjJ||!!b.$isjK)
J.dm(j.a,34963,k)
J.iX(j.a,34963,d,35048)
G.lH(e,c)
k=new Float32Array(H.j(9))
j=new T.P(new Float32Array(H.j(16)))
j.O()
d=new Float32Array(H.j(16))
b=new T.P(d)
b.O()
a=new Float32Array(H.j(3))
a0=new Float32Array(H.j(3))
a1=new Float32Array(H.j(3))
a2=new Float32Array(H.j(3))
a3=new T.n(a2)
a4=new A.d_(f,c,[],new T.aL(k),j,b,new T.n(a),new T.n(a0),new T.n(a1),a3,"meshdata:cube",!1,!0)
a4.b6(0,0,0)
a2[0]=d[0]
a2[1]=d[4]
a2[2]=d[8]
b.af(0,a3,-1)
b.af(0,a4.b5(),-0.7)
t.a=0
b=i[0]
H.d(!0)
C.a.l(b.f,a4)
C.j.bi(s,"keypress",new Q.ib(t,i,a4),null)
a5=H.ar(C.j.c5(s,"#myselect"),"$isby")
a5.toString
k=W.k
W.a7(a5,"change",new Q.ic(t,i,a4,a5),!1,k)
j=G.fb("stars",q,$.$get$kf(),$.$get$ke())
d=[]
b=j.d
a=$.$get$ja()
a6=new G.cT(P.E(),"stars",!1,!0)
a6.I("cDepthTest",!0)
a6.I("cDepthWrite",!1)
a6.I("cBlendEquation",a)
a6.I("cStencilFunc",p)
a7=s.createElement("canvas")
a7.width=64
a7.height=64
a8=C.l.cw(a7,"2d")
a9=(a8&&C.i).bQ(a8,32,32,1,32,32,22);(a9&&C.h).ap(a9,0,"gray")
C.h.ap(a9,1,"black")
a8.fillStyle=a9
C.i.dR(a8,0,0,64,64)
a9=C.i.bQ(a8,32,32,1,32,32,6);(a9&&C.h).ap(a9,0,"white")
C.h.ap(a9,1,"gray")
a8.globalAlpha=0.9
a8.fillStyle=a9
a8.arc(32,32,4,0,6.283185307179586,!1)
a8.fill("nonzero")
s=new G.fC(!1,!1,!1,!0,1,9729,9729)
p=J.ku(b.a)
a=new G.eh(a7,"Utils::Particles",p,3553,b,s)
J.bU(b.a,3553,p)
J.kM(b.a,37440,1)
a.d1(a7)
s.cX(b,3553)
H.d(J.kH(b.a)===0)
J.bU(b.a,3553,null)
a6.I("uTexture",a)
a6.I("uPointSize",1000)
c=R.lA(j,2000,100)
s=new Float32Array(H.j(9))
p=new T.P(new Float32Array(H.j(16)))
p.O()
b=new T.P(new Float32Array(H.j(16)))
b.O()
a=new Float32Array(H.j(3))
a0=new Float32Array(H.j(3))
a1=new Float32Array(H.j(3))
a2=new Float32Array(H.j(3))
H.d(!0)
C.a.l(d,new A.d_(a6,c,[],new T.aL(s),p,b,new T.n(a),new T.n(a0),new T.n(a1),new T.n(a2),c.a,!1,!0))
H.d(!0)
C.a.l(o,new A.aO(j,[m],d,"stars",!1,!0))
d=new Q.id(r,m,l)
d.$1(null)
W.a7(window,"resize",d,!1,k)
t.b=0
new Q.ia(t,n,l,f,a4).$1(0)},
ib:function ib(a,b,c){this.a=a
this.b=b
this.c=c},
ic:function ic(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
id:function id(a,b,c){this.a=a
this.b=b
this.c=c},
ia:function ia(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e}},R={
lA:function(a,b,c){var t,s,r,q
t="stars_"+b
s=b*3
r=new Float32Array(H.j(s))
for(q=0;q<s;++q)r[q]=($.$get$jL().e6()-0.5)*c
s=a.d
s=new G.cU(s,J.iY(s.a),0,P.E(),a.e.x,null,0,-1,null,null,P.E(),"meshdata:"+t,!1,!0)
s.ak(r)
return s}}
var v=[C,H,J,P,W,B,G,A,T,Q,R]
setFunctionNamesIfNecessary(v)
var $={}
H.iB.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gv:function(a){return H.aN(a)},
j:function(a){return H.f4(a)},
gA:function(a){return new H.av(H.hZ(a),null)}}
J.en.prototype={
j:function(a){return String(a)},
gv:function(a){return a?519018:218159},
gA:function(a){return C.O},
$isaY:1}
J.ep.prototype={
w:function(a,b){return null==b},
j:function(a){return"null"},
gv:function(a){return 0},
gA:function(a){return C.I}}
J.bq.prototype={
gv:function(a){return 0},
gA:function(a){return C.H},
j:function(a){return String(a)},
$isjo:1}
J.eZ.prototype={}
J.aQ.prototype={}
J.aH.prototype={
j:function(a){var t=a[$.$get$ji()]
return t==null?this.cM(a):J.b_(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isiy:1}
J.aF.prototype={
aP:function(a,b){if(!!a.immutable$list)throw H.e(new P.t(b))},
aq:function(a,b){if(!!a.fixed$length)throw H.e(new P.t(b))},
l:function(a,b){this.aq(a,"add")
a.push(b)},
V:function(a,b){var t
this.aq(a,"remove")
for(t=0;t<a.length;++t)if(J.D(a[t],b)){a.splice(t,1)
return!0}return!1},
du:function(a,b){var t,s,r,q,p
t=a.length
this.aq(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.O)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.F(new P.a8(a)))
a.push(q)}},
c2:function(a,b){return new H.cS(a,b,[H.bc(a,0),null])},
ae:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.h(a[s])
return t.join(b)},
p:function(a,b){return this.h(a,b)},
gdS:function(a){if(a.length>0)return a[0]
throw H.e(H.iz())},
gau:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.iz())},
b7:function(a,b,c,d,e){var t,s
this.aP(a,"setRange")
P.ju(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.F(P.bx(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.lj())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
cH:function(a,b){this.aP(a,"sort")
H.d6(a,0,a.length-1,P.m_())},
az:function(a){return this.cH(a,null)},
a1:function(a,b){var t
for(t=0;t<a.length;++t)if(J.D(a[t],b))return!0
return!1},
j:function(a){return P.em(a,"[","]")},
gB:function(a){return new J.ds(a,a.length,0,null,[H.bc(a,0)])},
gv:function(a){return H.aN(a)},
gk:function(a){return a.length},
sk:function(a,b){this.aq(a,"set length")
if(b<0)throw H.e(P.bx(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.K(a,b))
if(b>=a.length||b<0)throw H.e(H.K(a,b))
return a[b]},
i:function(a,b,c){this.aP(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.K(a,b))
if(b>=a.length||b<0)throw H.e(H.K(a,b))
a[b]=c},
$iso:1,
$aso:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.iA.prototype={}
J.ds.prototype={
gu:function(){return this.d},
t:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.O(t))
r=this.c
if(r>=s){this.sbg(null)
return!1}this.sbg(t[r]);++this.c
return!0},
sbg:function(a){this.d=a}}
J.b3.prototype={
L:function(a,b){var t
if(typeof b!=="number")throw H.e(H.S(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaR(b)
if(this.gaR(a)===t)return 0
if(this.gaR(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaR:function(a){return a===0?1/a<0:a<0},
a2:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.t(""+a+".round()"))},
dD:function(a,b,c){if(this.L(b,c)>0)throw H.e(H.S(b))
if(this.L(a,b)<0)return b
if(this.L(a,c)>0)return c
return a},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
Z:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a+b},
a4:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a-b},
cu:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a/b},
D:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a*b},
ay:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
aA:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bA(a,b)},
G:function(a,b){return(a|0)===a?a/b|0:this.bA(a,b)},
bA:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.t("Result of truncating division is "+H.h(t)+": "+H.h(a)+" ~/ "+b))},
aK:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
ct:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return(a&b)>>>0},
cN:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return(a^b)>>>0},
ax:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a<b},
ai:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a>b},
cv:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a>=b},
gA:function(a){return C.R},
$isT:1}
J.cP.prototype={
gA:function(a){return C.Q},
$isL:1,
$isp:1,
$isT:1}
J.eo.prototype={
gA:function(a){return C.P},
$isL:1,
$isT:1}
J.aG.prototype={
aB:function(a,b){if(b>=a.length)throw H.e(H.K(a,b))
return a.charCodeAt(b)},
Z:function(a,b){if(typeof b!=="string")throw H.e(P.j9(b,null,null))
return a+b},
cJ:function(a,b,c){var t
if(c>a.length)throw H.e(P.bx(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
cI:function(a,b){return this.cJ(a,b,0)},
ba:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.f5(b,null,null))
if(b>c)throw H.e(P.f5(b,null,null))
if(c>a.length)throw H.e(P.f5(c,null,null))
return a.substring(b,c)},
cK:function(a,b){return this.ba(a,b,null)},
L:function(a,b){var t
if(typeof b!=="string")throw H.e(H.S(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
j:function(a){return a},
gv:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gA:function(a){return C.J},
gk:function(a){return a.length},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.K(a,b))
if(b>=a.length||!1)throw H.e(H.K(a,b))
return a[b]},
$iso:1,
$aso:function(){},
$isv:1}
H.c.prototype={$asc:null}
H.b4.prototype={
gB:function(a){return new H.cQ(this,this.gk(this),0,null,[H.az(this,"b4",0)])},
ee:function(a,b){var t,s
t=H.M([],[H.az(this,"b4",0)])
C.a.sk(t,this.gk(this))
for(s=0;s<this.gk(this);++s)t[s]=this.p(0,s)
return t},
ed:function(a){return this.ee(a,!0)}}
H.cQ.prototype={
gu:function(){return this.d},
t:function(){var t,s,r,q
t=this.a
s=J.ae(t)
r=s.gk(t)
if(this.b!==r)throw H.e(new P.a8(t))
q=this.c
if(q>=r){this.sa7(null)
return!1}this.sa7(s.p(t,q));++this.c
return!0},
sa7:function(a){this.d=a}}
H.cR.prototype={
gB:function(a){return new H.ey(null,J.bd(this.a),this.b,this.$ti)},
gk:function(a){return J.bW(this.a)},
$asak:function(a,b){return[b]}}
H.dK.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.ey.prototype={
t:function(){var t=this.b
if(t.t()){this.sa7(this.c.$1(t.gu()))
return!0}this.sa7(null)
return!1},
gu:function(){return this.a},
sa7:function(a){this.a=a},
$ascO:function(a,b){return[b]}}
H.cS.prototype={
gk:function(a){return J.bW(this.a)},
p:function(a,b){return this.b.$1(J.kA(this.a,b))},
$asc:function(a,b){return[b]},
$asb4:function(a,b){return[b]},
$asak:function(a,b){return[b]}}
H.c7.prototype={}
H.io.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.ip.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hw.prototype={
se1:function(a){this.z=a},
se4:function(a){this.ch=a}}
H.aU.prototype={
bD:function(a,b){if(!this.f.w(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aN()},
e9:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.V(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bt();++r.d}this.y=!1}this.aN()},
dv:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
e8:function(a){var t,s,r
if(this.ch==null)return
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.F(new P.t("removeRange"))
P.ju(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cG:function(a,b){if(!this.r.w(0,a))return
this.db=b},
dW:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.E(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.iE(null,null)
this.cx=t}t.S(0,new H.hq(a,c))},
dV:function(a,b){var t
if(!this.r.w(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.at()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.iE(null,null)
this.cx=t}t.S(0,this.ge2())},
dX:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.af(a)
if(b!=null)P.af(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.b_(a)
s[1]=b==null?null:b.j(0)
for(r=new P.bJ(t,t.r,null,null,[null]),r.c=t.e;r.t();)r.d.E(0,s)},
ab:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.as(o)
p=H.aA(o)
this.dX(q,p)
if(this.db){this.at()
if(this===u.globalState.e)throw o}}finally{this.cy=H.lW(r)
u.globalState.d=H.k3(t,"$isaU")
if(t!=null)$=t.ge0()
if(this.cx!=null)for(;n=this.cx,!n.gas(n);)this.cx.c6().$0()}return s},
c1:function(a){return this.b.h(0,a)},
bl:function(a,b){var t=this.b
if(t.C(0,a))throw H.e(P.c6("Registry: ports must be registered only once."))
t.i(0,a,b)},
aN:function(){var t=this.b
if(t.gk(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.at()},
at:function(){var t,s,r
t=this.cx
if(t!=null)t.T(0)
for(t=this.b,s=t.gcq(t),s=s.gB(s);s.t();)s.gu().d9()
t.T(0)
this.c.T(0)
u.globalState.z.V(0,this.a)
this.dx.T(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].E(0,t[r+1])
this.ch=null}},
ge0:function(){return this.d},
gdF:function(){return this.e}}
H.hq.prototype={
$0:function(){this.a.E(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.h8.prototype={
dJ:function(){var t=this.a
if(t.b===t.c)return
return t.c6()},
c8:function(){var t,s,r
t=this.dJ()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.C(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gas(s)}else s=!1
else s=!1
else s=!1
if(s)H.F(P.c6("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gas(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aJ(["command","close"])
r=new H.ad(!0,new P.df(0,null,null,null,null,null,0,[null,P.p])).F(r)
s.toString
self.postMessage(r)}return!1}t.e7()
return!0},
by:function(){if(self.window!=null)new H.h9(this).$0()
else for(;this.c8(););},
ag:function(){var t,s,r,q,p
if(!u.globalState.x)this.by()
else try{this.by()}catch(r){t=H.as(r)
s=H.aA(r)
q=u.globalState.Q
p=P.aJ(["command","error","msg",H.h(t)+"\n"+H.h(s)])
p=new H.ad(!0,P.bK(null,P.p)).F(p)
q.toString
self.postMessage(p)}}}
H.h9.prototype={
$0:function(){if(!this.a.c8())return
P.lz(C.m,this)},
$S:function(){return{func:1,v:true}}}
H.aV.prototype={
e7:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.ab(this.b)}}
H.hv.prototype={}
H.ek.prototype={
$0:function(){H.lf(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.el.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bb(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bb(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aN()},
$S:function(){return{func:1,v:true}}}
H.h2.prototype={}
H.b8.prototype={
E:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.lK(b)
if(t.gdF()===s){s=J.ae(r)
switch(s.h(r,0)){case"pause":t.bD(s.h(r,1),s.h(r,2))
break
case"resume":t.e9(s.h(r,1))
break
case"add-ondone":t.dv(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.e8(s.h(r,1))
break
case"set-errors-fatal":t.cG(s.h(r,1),s.h(r,2))
break
case"ping":t.dW(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.dV(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.V(0,s)
break}return}u.globalState.f.a.S(0,new H.aV(t,new H.hx(this,r),"receive"))},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.b8){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gv:function(a){return this.b.a}}
H.hx.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.d7(0,this.b)},
$S:function(){return{func:1}}}
H.bL.prototype={
E:function(a,b){var t,s,r
t=P.aJ(["command","message","port",this,"msg",b])
s=new H.ad(!0,P.bK(null,P.p)).F(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bL){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gv:function(a){return C.b.cN((this.b<<16^this.a<<8)>>>0,this.c)}}
H.b6.prototype={
d9:function(){this.c=!0
this.b=null},
d7:function(a,b){if(this.c)return
this.b.$1(b)},
$islu:1}
H.fE.prototype={
d2:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.S(0,new H.aV(s,new H.fF(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.bP(new H.fG(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.t("Timer greater than 0."))}}}
H.fF.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.fG.prototype={
$0:function(){this.a.c=null
H.i9()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.aj.prototype={
gv:function(a){var t=this.a
t=C.b.aK(t,0)^C.b.G(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
w:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.aj){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.ad.prototype={
F:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gk(t))
t=J.u(a)
if(!!t.$isbs)return["buffer",a]
if(!!t.$isb5)return["typed",a]
if(!!t.$iso)return this.cC(a)
if(!!t.$islc){r=this.gcz()
q=t.gM(a)
q=H.iF(q,r,H.az(q,"ak",0),null)
q=P.jq(q,!0,H.az(q,"ak",0))
t=t.gcq(a)
t=H.iF(t,r,H.az(t,"ak",0),null)
return["map",q,P.jq(t,!0,H.az(t,"ak",0))]}if(!!t.$isjo)return this.cD(a)
if(!!t.$isa)this.co(a)
if(!!t.$islu)this.ah(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isb8)return this.cE(a)
if(!!t.$isbL)return this.cF(a)
if(!!t.$isb1){p=a.$static_name
if(p==null)this.ah(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isaj)return["capability",a.a]
if(!(a instanceof P.r))this.co(a)
return["dart",u.classIdExtractor(a),this.cB(u.classFieldsExtractor(a))]},
ah:function(a,b){throw H.e(new P.t((b==null?"Can't transmit:":b)+" "+H.h(a)))},
co:function(a){return this.ah(a,null)},
cC:function(a){var t
H.d(typeof a!=="string")
t=this.cA(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ah(a,"Can't serialize indexable: ")},
cA:function(a){var t,s
t=[]
C.a.sk(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.F(a[s])
return t},
cB:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.F(a[t]))
return a},
cD:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ah(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sk(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.F(a[t[r]])
return["js-object",t,s]},
cF:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cE:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aT.prototype={
U:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.j8("Bad serialized message: "+H.h(a)))
switch(C.a.gdS(a)){case"ref":H.d(J.D(a[0],"ref"))
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
s=H.M(this.aa(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.D(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.M(this.aa(t),[null])
case"mutable":H.d(J.D(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.aa(t)
case"const":H.d(J.D(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.M(this.aa(t),[null])
s.fixed$length=Array
return s
case"map":return this.dM(a)
case"sendport":return this.dN(a)
case"raw sendport":H.d(J.D(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.dL(a)
case"function":H.d(J.D(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.D(a[0],"capability"))
return new H.aj(a[1])
case"dart":H.d(J.D(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.l(this.b,p)
this.aa(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.h(a))}},
aa:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.U(a[t]))
return a},
dM:function(a){var t,s,r,q,p
H.d(J.D(a[0],"map"))
t=a[1]
s=a[2]
r=P.E()
C.a.l(this.b,r)
t=J.kL(t,this.gdK()).ed(0)
for(q=J.ae(s),p=0;p<t.length;++p)r.i(0,t[p],this.U(q.h(s,p)))
return r},
dN:function(a){var t,s,r,q,p,o,n
H.d(J.D(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.c1(r)
if(o==null)return
n=new H.b8(o,s)}else n=new H.bL(t,r,s)
C.a.l(this.b,n)
return n},
dL:function(a){var t,s,r,q,p,o
H.d(J.D(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.ae(t),p=J.ae(s),o=0;o<q.gk(t);++o)r[q.h(t,o)]=this.U(p.h(s,o))
return r}}
H.f8.prototype={}
H.fL.prototype={
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
H.d1.prototype={
j:function(a){var t=this.b
if(t==null)return"NullError: "+H.h(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.er.prototype={
j:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.h(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.h(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.h(this.a)+")"}}
H.fO.prototype={
j:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.iq.prototype={
$1:function(a){if(!!J.u(a).$isb2)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dh.prototype={
j:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.i4.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.i5.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.i6.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.i7.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.i8.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.b1.prototype={
j:function(a){return"Closure '"+H.d3(this).trim()+"'"},
$isiy:1,
geh:function(){return this},
$D:null}
H.fy.prototype={}
H.fo.prototype={
j:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.be.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.be))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var t,s
t=this.c
if(t==null)s=H.aN(this.a)
else s=typeof t!=="object"?J.ah(t):H.aN(t)
return(s^H.aN(this.b))>>>0},
j:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.h(this.d)+"' of "+H.f4(t)}}
H.fN.prototype={
j:function(a){return this.a}}
H.dx.prototype={
j:function(a){return this.a}}
H.ff.prototype={
j:function(a){return"RuntimeError: "+H.h(this.a)}}
H.fY.prototype={
j:function(a){return C.e.Z("Assertion failed: ",P.ix(this.a))}}
H.av.prototype={
j:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gv:function(a){return J.ah(this.a)},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.av){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.aa.prototype={
gk:function(a){return this.a},
gas:function(a){return this.a===0},
gM:function(a){return new H.eu(this,[H.bc(this,0)])},
gcq:function(a){return H.iF(this.gM(this),new H.eq(this),H.bc(this,0),H.bc(this,1))},
C:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bq(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bq(s,b)}else return this.dY(b)},
dY:function(a){var t=this.d
if(t==null)return!1
return this.ad(this.ao(t,this.ac(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.a8(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.a8(r,b)
return s==null?null:s.b}else return this.dZ(b)},
dZ:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.ao(t,this.ac(a))
r=this.ad(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aH()
this.b=t}this.bj(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aH()
this.c=s}this.bj(s,b,c)}else{r=this.d
if(r==null){r=this.aH()
this.d=r}q=this.ac(b)
p=this.ao(r,q)
if(p==null)this.aJ(r,q,[this.aI(b,c)])
else{o=this.ad(p,b)
if(o>=0)p[o].b=c
else p.push(this.aI(b,c))}}},
V:function(a,b){if(typeof b==="string")return this.bw(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bw(this.c,b)
else return this.e_(b)},
e_:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.ao(t,this.ac(a))
r=this.ad(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bB(q)
return q.b},
T:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
ar:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a8(this))
t=t.c}},
bj:function(a,b,c){var t=this.a8(a,b)
if(t==null)this.aJ(a,b,this.aI(b,c))
else t.b=c},
bw:function(a,b){var t
if(a==null)return
t=this.a8(a,b)
if(t==null)return
this.bB(t)
this.br(a,b)
return t.b},
aI:function(a,b){var t,s
t=new H.et(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bB:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
ac:function(a){return J.ah(a)&0x3ffffff},
ad:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.D(a[s].a,b))return s
return-1},
j:function(a){return P.ll(this)},
a8:function(a,b){return a[b]},
ao:function(a,b){return a[b]},
aJ:function(a,b,c){H.d(c!=null)
a[b]=c},
br:function(a,b){delete a[b]},
bq:function(a,b){return this.a8(a,b)!=null},
aH:function(){var t=Object.create(null)
this.aJ(t,"<non-identifier-key>",t)
this.br(t,"<non-identifier-key>")
return t},
$islc:1}
H.eq.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.et.prototype={}
H.eu.prototype={
gk:function(a){return this.a.a},
gB:function(a){var t,s
t=this.a
s=new H.ev(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.ev.prototype={
gu:function(){return this.d},
t:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a8(t))
else{t=this.c
if(t==null){this.sbh(null)
return!1}else{this.sbh(t.a)
this.c=this.c.c
return!0}}},
sbh:function(a){this.d=a}}
H.i0.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.i1.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.v]}}}
H.i2.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.v]}}}
H.bs.prototype={
gA:function(a){return C.A},
$isbs:1}
H.b5.prototype={$isb5:1}
H.eG.prototype={
gA:function(a){return C.B}}
H.cW.prototype={
gk:function(a){return a.length},
$iso:1,
$aso:function(){},
$isq:1,
$asq:function(){}}
H.cX.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.K(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.F(H.K(a,b))
a[b]=c}}
H.cY.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.F(H.K(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.cV.prototype={
gA:function(a){return C.C},
$isc:1,
$asc:function(){return[P.L]},
$isb:1,
$asb:function(){return[P.L]},
$ise8:1}
H.eH.prototype={
gA:function(a){return C.D},
$isc:1,
$asc:function(){return[P.L]},
$isb:1,
$asb:function(){return[P.L]}}
H.eI.prototype={
gA:function(a){return C.E},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.K(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.eJ.prototype={
gA:function(a){return C.F},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.K(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$isjl:1}
H.eK.prototype={
gA:function(a){return C.G},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.K(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.eL.prototype={
gA:function(a){return C.K},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.K(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$isjI:1}
H.eM.prototype={
gA:function(a){return C.L},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.K(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$isjJ:1}
H.cZ.prototype={
gA:function(a){return C.M},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.K(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.eN.prototype={
gA:function(a){return C.N},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.K(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$isjK:1}
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
$asc:function(){return[P.L]},
$asq:function(){},
$isb:1,
$asb:function(){return[P.L]}}
H.bv.prototype={
$aso:function(){},
$asc:function(){return[P.L]},
$asq:function(){},
$asb:function(){return[P.L]}}
H.bw.prototype={
$aso:function(){},
$asc:function(){return[P.p]},
$asq:function(){},
$asb:function(){return[P.p]}}
P.h_.prototype={
$1:function(a){var t,s
H.i9()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.fZ.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.h0.prototype={
$0:function(){H.i9()
this.a.$0()},
$S:function(){return{func:1}}}
P.h1.prototype={
$0:function(){H.i9()
this.a.$0()},
$S:function(){return{func:1}}}
P.h4.prototype={}
P.hJ.prototype={
dE:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.bA("Future already completed"))
t.aD(b)}}
P.de.prototype={
e5:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.aV(this.d,a.a)},
dU:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bb(s,{func:1,args:[P.r,P.bz]}))return t.ea(s,a.a,a.b)
else return t.aV(s,a.a)}}
P.aq.prototype={
cd:function(a,b){var t,s,r
t=$.C
if(t!==C.d){t.toString
if(b!=null)b=P.lO(b,t)}s=new P.aq(0,t,null,[null])
r=b==null?1:3
this.bk(new P.de(null,s,r,a,b,[H.bc(this,0),null]))
return s},
cc:function(a){return this.cd(a,null)},
bm:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
bk:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.k3(this.c,"$isde")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.bk(a)
return}this.bm(t)}H.d(this.a>=4)
t=this.b
t.toString
P.hR(null,null,t,new P.he(this,a))}},
bv:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.bv(a)
return}this.bm(s)}H.d(this.a>=4)
t.a=this.a9(a)
s=this.b
s.toString
P.hR(null,null,s,new P.hi(t,this))}},
bx:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.a9(t)},
a9:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aD:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.hS(a,"$isec",t,"$asec"))if(H.hS(a,"$isaq",t,null))P.jO(a,this)
else P.lG(a,this)
else{s=this.bx()
H.d(this.a<4)
this.a=4
this.c=a
P.bH(this,s)}},
al:function(a,b){var t
H.d(this.a<4)
t=this.bx()
H.d(this.a<4)
this.a=8
this.c=new P.b0(a,b)
P.bH(this,t)},
dc:function(a){return this.al(a,null)},
$isec:1,
gaL:function(){return this.a},
gdq:function(){return this.c}}
P.he.prototype={
$0:function(){P.bH(this.a,this.b)},
$S:function(){return{func:1}}}
P.hi.prototype={
$0:function(){P.bH(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hf.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.aD(a)},
$S:function(){return{func:1,args:[,]}}}
P.hg.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.al(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hh.prototype={
$0:function(){this.a.al(this.b,this.c)},
$S:function(){return{func:1}}}
P.hl.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.c7(q.d)}catch(n){s=H.as(n)
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
p.b=q.c}else p.b=new P.b0(s,r)
p.a=!0
return}if(!!J.u(t).$isec){if(t instanceof P.aq&&t.gaL()>=4){if(t.gaL()===8){q=t
H.d(q.gaL()===8)
p=this.b
p.b=q.gdq()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.cc(new P.hm(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hm.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.hk.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.aV(r.d,this.c)}catch(q){t=H.as(q)
s=H.aA(q)
r=this.a
r.b=new P.b0(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hj.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.e5(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.dU(t)
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
m.b=q.c}else m.b=new P.b0(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.dc.prototype={}
P.fr.prototype={
gk:function(a){var t,s
t={}
s=new P.aq(0,$.C,null,[P.p])
t.a=0
this.e3(new P.ft(t),!0,new P.fu(t,s),s.gda())
return s}}
P.ft.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.fu.prototype={
$0:function(){this.b.aD(this.a.a)},
$S:function(){return{func:1}}}
P.fs.prototype={}
P.b0.prototype={
j:function(a){return H.h(this.a)},
$isb2:1}
P.hN.prototype={}
P.hQ.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.d2()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.j(0)
throw r},
$S:function(){return{func:1}}}
P.hz.prototype={
eb:function(a){var t,s,r
try{if(C.d===$.C){a.$0()
return}P.jQ(null,null,this,a)}catch(r){t=H.as(r)
s=H.aA(r)
P.hP(null,null,this,t,s)}},
ec:function(a,b){var t,s,r
try{if(C.d===$.C){a.$1(b)
return}P.jR(null,null,this,a,b)}catch(r){t=H.as(r)
s=H.aA(r)
P.hP(null,null,this,t,s)}},
dA:function(a){return new P.hB(this,a)},
aO:function(a){return new P.hA(this,a)},
dB:function(a){return new P.hC(this,a)},
h:function(a,b){return},
c7:function(a){if($.C===C.d)return a.$0()
return P.jQ(null,null,this,a)},
aV:function(a,b){if($.C===C.d)return a.$1(b)
return P.jR(null,null,this,a,b)},
ea:function(a,b,c){if($.C===C.d)return a.$2(b,c)
return P.lP(null,null,this,a,b,c)}}
P.hB.prototype={
$0:function(){return this.a.c7(this.b)},
$S:function(){return{func:1}}}
P.hA.prototype={
$0:function(){return this.a.eb(this.b)},
$S:function(){return{func:1}}}
P.hC.prototype={
$1:function(a){return this.a.ec(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.df.prototype={
ac:function(a){return H.mf(a)&0x3ffffff},
ad:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hs.prototype={
gB:function(a){var t=new P.bJ(this,this.r,null,null,[null])
t.c=this.e
return t},
gk:function(a){return this.a},
a1:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dd(b)},
dd:function(a){var t=this.d
if(t==null)return!1
return this.an(t[this.am(a)],a)>=0},
c1:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.a1(0,a)?a:null
else return this.dl(a)},
dl:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.am(a)]
r=this.an(s,a)
if(r<0)return
return J.aZ(s,r).gdf()},
l:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bn(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bn(r,b)}else return this.S(0,b)},
S:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.lI()
this.d=t}s=this.am(b)
r=t[s]
if(r==null){q=[this.aC(b)]
H.d(q!=null)
t[s]=q}else{if(this.an(r,b)>=0)return!1
r.push(this.aC(b))}return!0},
V:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bo(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bo(this.c,b)
else return this.dm(0,b)},
dm:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.am(b)]
r=this.an(s,b)
if(r<0)return!1
this.bp(s.splice(r,1)[0])
return!0},
T:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bn:function(a,b){var t
if(a[b]!=null)return!1
t=this.aC(b)
H.d(!0)
a[b]=t
return!0},
bo:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bp(t)
delete a[b]
return!0},
aC:function(a){var t,s
t=new P.ht(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bp:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
am:function(a){return J.ah(a)&0x3ffffff},
an:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.D(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.ht.prototype={
gdf:function(){return this.a}}
P.bJ.prototype={
gu:function(){return this.d},
t:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a8(t))
else{t=this.c
if(t==null){this.sa6(null)
return!1}else{this.sa6(t.a)
this.c=this.c.b
return!0}}},
sa6:function(a){this.d=a}}
P.hp.prototype={}
P.x.prototype={
gB:function(a){return new H.cQ(a,this.gk(a),0,null,[H.az(a,"x",0)])},
p:function(a,b){return this.h(a,b)},
c2:function(a,b){return new H.cS(a,b,[H.az(a,"x",0),null])},
dT:function(a,b,c){var t,s,r
t=this.gk(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gk(a))throw H.e(new P.a8(a))}return s},
j:function(a){return P.em(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.ez.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.h(a)
t.a=s+": "
t.a+=H.h(b)},
$S:function(){return{func:1,args:[,,]}}}
P.ew.prototype={
gB:function(a){return new P.hu(this,this.c,this.d,this.b,null,this.$ti)},
gas:function(a){return this.b===this.c},
gk:function(a){return(this.c-this.b&this.a.length-1)>>>0},
p:function(a,b){var t=(this.c-this.b&this.a.length-1)>>>0
if(C.b.ai(0,b)||b>=t)H.F(P.B(b,this,"index",null,t))
return this.a[(C.b.Z(this.b,b)&this.a.length-1)>>>0]},
T:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
j:function(a){return P.em(this,"{","}")},
c6:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.iz());++this.d
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
if(this.b===t)this.bt();++this.d},
bt:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.M(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.b7(s,0,q,t,r)
C.a.b7(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbz(s)},
cY:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbz(H.M(t,[b]))},
sbz:function(a){this.a=a},
$asc:null}
P.hu.prototype={
gu:function(){return this.e},
t:function(){var t,s
t=this.a
if(this.c!==t.d)H.F(new P.a8(t))
s=this.d
if(s===this.b){this.sa6(null)
return!1}this.sa6(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sa6:function(a){this.e=a}}
P.fi.prototype={
j:function(a){return P.em(this,"{","}")},
$isc:1,
$asc:null}
P.fh.prototype={}
P.aY.prototype={}
P.G.prototype={}
P.bg.prototype={
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.bg))return!1
return this.a===b.a&&this.b===b.b},
L:function(a,b){return C.b.L(this.a,b.a)},
gv:function(a){var t=this.a
return(t^C.b.aK(t,30))&1073741823},
j:function(a){var t,s,r,q,p,o,n
t=P.l5(H.lt(this))
s=P.c1(H.lr(this))
r=P.c1(H.ln(this))
q=P.c1(H.lo(this))
p=P.c1(H.lq(this))
o=P.c1(H.ls(this))
n=P.l6(H.lp(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isG:1,
$asG:function(){return[P.bg]}}
P.L.prototype={$isG:1,
$asG:function(){return[P.T]}}
P.aE.prototype={
ax:function(a,b){return C.b.ax(this.a,b.gde())},
ai:function(a,b){return C.b.ai(this.a,b.gde())},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.aE))return!1
return this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
L:function(a,b){return C.b.L(this.a,b.a)},
j:function(a){var t,s,r,q,p
t=new P.dJ()
s=this.a
if(s<0)return"-"+new P.aE(0-s).j(0)
r=t.$1(C.b.G(s,6e7)%60)
q=t.$1(C.b.G(s,1e6)%60)
p=new P.dI().$1(s%1e6)
return""+C.b.G(s,36e8)+":"+H.h(r)+":"+H.h(q)+"."+H.h(p)},
$isG:1,
$asG:function(){return[P.aE]}}
P.dI.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.v,args:[P.p]}}}
P.dJ.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.v,args:[P.p]}}}
P.b2.prototype={}
P.bX.prototype={
j:function(a){return"Assertion failed"}}
P.d2.prototype={
j:function(a){return"Throw of null."}}
P.ai.prototype={
gaF:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaE:function(){return""},
j:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.h(t)
q=this.gaF()+s+r
if(!this.a)return q
p=this.gaE()
o=P.ix(this.b)
return q+p+": "+H.h(o)}}
P.d4.prototype={
gaF:function(){return"RangeError"},
gaE:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.h(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.h(t)
else if(r>t)s=": Not in range "+H.h(t)+".."+H.h(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.h(t)}return s}}
P.ei.prototype={
gaF:function(){return"RangeError"},
gaE:function(){H.d(this.a)
if(J.kj(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.h(t)},
gk:function(a){return this.f}}
P.t.prototype={
j:function(a){return"Unsupported operation: "+this.a}}
P.db.prototype={
j:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.bA.prototype={
j:function(a){return"Bad state: "+this.a}}
P.a8.prototype={
j:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.h(P.ix(t))+"."}}
P.d7.prototype={
j:function(a){return"Stack Overflow"},
$isb2:1}
P.dB.prototype={
j:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hd.prototype={
j:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.h(t)}}
P.dL.prototype={
j:function(a){return"Expando:"+H.h(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.F(P.j9(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.jr(b,"expando$values")
return s==null?null:H.jr(s,t)}}
P.p.prototype={$isG:1,
$asG:function(){return[P.T]}}
P.ak.prototype={
gk:function(a){var t,s
H.d(!this.$isc)
t=this.gB(this)
for(s=0;t.t();)++s
return s},
p:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.kY("index"))
if(b<0)H.F(P.bx(b,0,null,"index",null))
for(t=this.gB(this),s=0;t.t();){r=t.gu()
if(b===s)return r;++s}throw H.e(P.B(b,this,"index",null,s))},
j:function(a){return P.li(this,"(",")")}}
P.cO.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.au.prototype={}
P.aM.prototype={
gv:function(a){return P.r.prototype.gv.call(this,this)},
j:function(a){return"null"}}
P.T.prototype={$isG:1,
$asG:function(){return[P.T]}}
P.r.prototype={constructor:P.r,$isr:1,
w:function(a,b){return this===b},
gv:function(a){return H.aN(this)},
j:function(a){return H.f4(this)},
gA:function(a){return new H.av(H.hZ(this),null)},
toString:function(){return this.j(this)}}
P.bz.prototype={}
P.v.prototype={$isG:1,
$asG:function(){return[P.v]}}
P.bB.prototype={
gk:function(a){return this.a.length},
j:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga0:function(){return this.a}}
W.l.prototype={}
W.dq.prototype={
j:function(a){return String(a)},
$isa:1}
W.dr.prototype={
j:function(a){return String(a)},
$isa:1}
W.Y.prototype={$isr:1}
W.du.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.Y]},
$isc:1,
$asc:function(){return[W.Y]},
$isq:1,
$asq:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.bY.prototype={}
W.dv.prototype={$isa:1}
W.bZ.prototype={
aZ:function(a,b,c){if(c!=null)return this.dh(a,b,P.lZ(c,null))
return this.di(a,b)},
cw:function(a,b){return this.aZ(a,b,null)},
dh:function(a,b,c){return a.getContext(b,c)},
di:function(a,b){return a.getContext(b)}}
W.c_.prototype={
ap:function(a,b,c){return a.addColorStop(b,c)}}
W.c0.prototype={
bQ:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
dR:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
aw:function(a){return P.hU(a.getContextAttributes())}}
W.aD.prototype={$isa:1,
gk:function(a){return a.length}}
W.dz.prototype={$isa:1}
W.z.prototype={$isr:1}
W.bf.prototype={
gk:function(a){return a.length}}
W.dA.prototype={}
W.dC.prototype={
h:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.dD.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.bh.prototype={
c5:function(a,b){return a.querySelector(b)}}
W.c2.prototype={$isa:1}
W.dE.prototype={
j:function(a){return String(a)}}
W.dF.prototype={
gav:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.c3.prototype={
gav:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.c4.prototype={
j:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gY(a))+" x "+H.h(this.gX(a))},
w:function(a,b){var t
if(b==null)return!1
t=J.u(b)
if(!t.$isH)return!1
return a.left===t.gaS(b)&&a.top===t.gaX(b)&&this.gY(a)===t.gY(b)&&this.gX(a)===t.gX(b)},
gv:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gY(a)
q=this.gX(a)
return W.jP(W.aW(W.aW(W.aW(W.aW(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gX:function(a){return a.height},
gaS:function(a){return a.left},
gaX:function(a){return a.top},
gY:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isH:1,
$asH:function(){}}
W.dG.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[P.v]},
$isc:1,
$asc:function(){return[P.v]},
$isq:1,
$asq:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
W.dH.prototype={
gk:function(a){return a.length}}
W.c5.prototype={
j:function(a){return a.localName},
$isa:1}
W.k.prototype={$isr:1,$isk:1}
W.f.prototype={
bi:function(a,b,c,d){return a.addEventListener(b,H.bP(c,1),d)},
$isr:1,
$isf:1}
W.Z.prototype={$isr:1}
W.e4.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.Z]},
$isc:1,
$asc:function(){return[W.Z]},
$isq:1,
$asq:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.e5.prototype={
gk:function(a){return a.length}}
W.ea.prototype={
gk:function(a){return a.length}}
W.a_.prototype={$isr:1}
W.ee.prototype={
gk:function(a){return a.length}}
W.bo.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
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
W.c8.prototype={}
W.ef.prototype={
E:function(a,b){return a.send(b)}}
W.bp.prototype={}
W.ej.prototype={$isa:1}
W.aI.prototype={$isr:1,$isk:1,$isaI:1}
W.ex.prototype={
j:function(a){return String(a)}}
W.eC.prototype={
gk:function(a){return a.length}}
W.eD.prototype={
ei:function(a,b,c){return a.send(b,c)},
E:function(a,b){return a.send(b)}}
W.br.prototype={}
W.a0.prototype={$isr:1}
W.eE.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
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
W.N.prototype={$isr:1,$isk:1,$isN:1}
W.eO.prototype={$isa:1}
W.y.prototype={
j:function(a){var t=a.nodeValue
return t==null?this.cL(a):t},
$isr:1,
$isf:1}
W.d0.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
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
W.eV.prototype={$isa:1}
W.eY.prototype={
gk:function(a){return a.length}}
W.a1.prototype={$isr:1,
gk:function(a){return a.length}}
W.f_.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
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
W.f2.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.f3.prototype={
E:function(a,b){return a.send(b)}}
W.fe.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.d5.prototype={
E:function(a,b){return a.send(b)}}
W.by.prototype={$isby:1,
gk:function(a){return a.length}}
W.fj.prototype={$isa:1}
W.a2.prototype={$isr:1,$isf:1}
W.fk.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
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
W.a3.prototype={$isr:1}
W.fm.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
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
W.a4.prototype={$isr:1,
gk:function(a){return a.length}}
W.fp.prototype={
h:function(a,b){return this.bs(a,b)},
i:function(a,b,c){this.dr(a,b,c)},
ar:function(a,b){var t,s
for(t=0;!0;++t){s=this.dk(a,t)
if(s==null)return
b.$2(s,this.bs(a,s))}},
gM:function(a){var t=H.M([],[P.v])
this.ar(a,new W.fq(t))
return t},
gk:function(a){return a.length},
bs:function(a,b){return a.getItem(b)},
dk:function(a,b){return a.key(b)},
dr:function(a,b,c){return a.setItem(b,c)}}
W.fq.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:function(){return{func:1,args:[,,]}}}
W.U.prototype={$isr:1}
W.ac.prototype={}
W.a5.prototype={$isr:1,$isf:1}
W.V.prototype={$isr:1,$isf:1}
W.fA.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.V]},
$isc:1,
$asc:function(){return[W.V]},
$isq:1,
$asq:function(){return[W.V]},
$isb:1,
$asb:function(){return[W.V]}}
W.fB.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
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
W.fD.prototype={
gk:function(a){return a.length}}
W.a6.prototype={$isr:1}
W.aP.prototype={$isr:1,$isk:1,$isaP:1}
W.fH.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
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
W.fI.prototype={
gk:function(a){return a.length}}
W.b7.prototype={}
W.fK.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.aw.prototype={}
W.fP.prototype={
j:function(a){return String(a)},
$isa:1}
W.fR.prototype={
gk:function(a){return a.length}}
W.fU.prototype={
gk:function(a){return a.length}}
W.fV.prototype={
E:function(a,b){return a.send(b)}}
W.aR.prototype={
gdI:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.t("deltaY is not supported"))},
$isr:1,
$isk:1,
$isN:1,
$isaR:1}
W.bG.prototype={
gdw:function(a){var t,s
t=P.T
s=new P.aq(0,$.C,null,[t])
this.dg(a)
this.dn(a,W.jT(new W.fW(new P.hJ(s,[t]))))
return s},
dn:function(a,b){return a.requestAnimationFrame(H.bP(b,1))},
dg:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.fW.prototype={
$1:function(a){this.a.dE(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.fX.prototype={$isa:1}
W.aS.prototype={$isa:1}
W.h3.prototype={
j:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
w:function(a,b){var t,s,r
if(b==null)return!1
t=J.u(b)
if(!t.$isH)return!1
s=a.left
r=t.gaS(b)
if(s==null?r==null:s===r){s=a.top
r=t.gaX(b)
if(s==null?r==null:s===r){s=a.width
r=t.gY(b)
if(s==null?r==null:s===r){s=a.height
t=t.gX(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gv:function(a){var t,s,r,q
t=J.ah(a.left)
s=J.ah(a.top)
r=J.ah(a.width)
q=J.ah(a.height)
return W.jP(W.aW(W.aW(W.aW(W.aW(0,t),s),r),q))},
$isH:1,
$asH:function(){},
gX:function(a){return a.height},
gaS:function(a){return a.left},
gaX:function(a){return a.top},
gY:function(a){return a.width}}
W.dd.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[P.H]},
$isc:1,
$asc:function(){return[P.H]},
$isq:1,
$asq:function(){return[P.H]},
$isb:1,
$asb:function(){return[P.H]}}
W.h5.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
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
W.h6.prototype={$isa:1}
W.h7.prototype={
gX:function(a){return a.height},
gY:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hn.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
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
W.ho.prototype={$isa:1}
W.dg.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
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
W.hG.prototype={$isa:1}
W.hH.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
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
W.hI.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.U]},
$isc:1,
$asc:function(){return[W.U]},
$isq:1,
$asq:function(){return[W.U]},
$isb:1,
$asb:function(){return[W.U]}}
W.hL.prototype={$isa:1}
W.hM.prototype={$isa:1}
W.ha.prototype={
e3:function(a,b,c,d){return W.a7(this.a,this.b,a,!1,H.bc(this,0))}}
W.iJ.prototype={}
W.hb.prototype={
dt:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.kl(r,this.c,t,!1)}},
d6:function(a,b,c,d,e){this.dt()}}
W.hc.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.A.prototype={
gB:function(a){return new W.e7(a,this.gk(a),-1,null,[H.az(a,"A",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.e7.prototype={
t:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbu(J.aZ(this.a,t))
this.c=t
return!0}this.sbu(null)
this.c=s
return!1},
gu:function(){return this.d},
sbu:function(a){this.d=a}}
W.bi.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.bj.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.bk.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.bl.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.bm.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.bn.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.c9.prototype={}
W.ct.prototype={$isc:1,
$asc:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.cf.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cc.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cn.prototype={$isc:1,
$asc:function(){return[W.U]},
$isb:1,
$asb:function(){return[W.U]}}
W.co.prototype={$isc:1,
$asc:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
W.cp.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cq.prototype={$isc:1,
$asc:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.cr.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.ca.prototype={$isc:1,
$asc:function(){return[W.V]},
$isb:1,
$asb:function(){return[W.V]}}
W.ce.prototype={$isc:1,
$asc:function(){return[P.H]},
$isb:1,
$asb:function(){return[P.H]}}
W.cb.prototype={$isc:1,
$asc:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]}}
W.cg.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.ci.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cj.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.cl.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.cu.prototype={$isc:1,
$asc:function(){return[W.V]},
$isb:1,
$asb:function(){return[W.V]}}
W.cv.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cw.prototype={$isc:1,
$asc:function(){return[P.H]},
$isb:1,
$asb:function(){return[P.H]}}
W.cG.prototype={$isc:1,
$asc:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.cH.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.cF.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.cK.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.cL.prototype={$isc:1,
$asc:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
W.cM.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cN.prototype={$isc:1,
$asc:function(){return[W.U]},
$isb:1,
$asb:function(){return[W.U]}}
W.cx.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cy.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cA.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cI.prototype={$isc:1,
$asc:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]}}
W.cJ.prototype={$isc:1,
$asc:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
P.hT.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.v,,]}}}
P.hr.prototype={
e6:function(){return Math.random()}}
P.hy.prototype={}
P.H.prototype={$asH:null}
P.dp.prototype={$isa:1}
P.aC.prototype={$isa:1}
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
P.dV.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dW.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dX.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dY.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dZ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
P.e_.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e0.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
P.e1.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e2.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e6.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e9.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.a9.prototype={}
P.at.prototype={$isa:1}
P.eg.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.al.prototype={$isr:1}
P.es.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return this.W(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
W:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.al]},
$isb:1,
$asb:function(){return[P.al]}}
P.eA.prototype={$isa:1}
P.eB.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.am.prototype={$isr:1}
P.eP.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return this.W(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
W:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.am]},
$isb:1,
$asb:function(){return[P.am]}}
P.eW.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f0.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f1.prototype={
gk:function(a){return a.length}}
P.f6.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f7.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fg.prototype={$isa:1}
P.fv.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return this.W(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
W:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
P.I.prototype={$isa:1}
P.fw.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fx.prototype={$isa:1}
P.d8.prototype={}
P.fz.prototype={$isa:1}
P.bC.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.an.prototype={$isr:1}
P.fJ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return this.W(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
W:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.an]},
$isb:1,
$asb:function(){return[P.an]}}
P.fQ.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fS.prototype={$isa:1}
P.fT.prototype={$isa:1}
P.bI.prototype={$isa:1}
P.hD.prototype={$isa:1}
P.hE.prototype={$isa:1}
P.hF.prototype={$isa:1}
P.cm.prototype={$isc:1,
$asc:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
P.cd.prototype={$isc:1,
$asc:function(){return[P.al]},
$isb:1,
$asb:function(){return[P.al]}}
P.ch.prototype={$isc:1,
$asc:function(){return[P.am]},
$isb:1,
$asb:function(){return[P.am]}}
P.ck.prototype={$isc:1,
$asc:function(){return[P.an]},
$isb:1,
$asb:function(){return[P.an]}}
P.cz.prototype={$isc:1,
$asc:function(){return[P.an]},
$isb:1,
$asb:function(){return[P.an]}}
P.cB.prototype={$isc:1,
$asc:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
P.cC.prototype={$isc:1,
$asc:function(){return[P.am]},
$isb:1,
$asb:function(){return[P.am]}}
P.cD.prototype={$isc:1,
$asc:function(){return[P.al]},
$isb:1,
$asb:function(){return[P.al]}}
P.dt.prototype={
gk:function(a){return a.length}}
P.fc.prototype={
bC:function(a,b){return a.activeTexture(b)},
bE:function(a,b,c){return a.attachShader(b,c)},
bF:function(a,b,c){return a.bindBuffer(b,c)},
bG:function(a,b,c){return a.bindFramebuffer(b,c)},
bH:function(a,b,c){return a.bindTexture(b,c)},
bI:function(a,b){return a.blendEquation(b)},
bJ:function(a,b,c){return a.blendFunc(b,c)},
bK:function(a,b,c,d){return a.bufferData(b,c,d)},
bL:function(a,b){return a.clear(b)},
bM:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bN:function(a,b){return a.compileShader(b)},
bO:function(a){return a.createBuffer()},
bP:function(a){return a.createProgram()},
bR:function(a,b){return a.createShader(b)},
bS:function(a){return a.createTexture()},
bU:function(a,b){return a.depthMask(b)},
bV:function(a,b){return a.disable(b)},
bW:function(a,b,c,d){return a.drawArrays(b,c,d)},
bX:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bY:function(a,b){return a.enable(b)},
bZ:function(a,b){return a.enableVertexAttribArray(b)},
aw:function(a){return P.hU(a.getContextAttributes())},
b_:function(a){return a.getError()},
b0:function(a,b){return a.getProgramInfoLog(b)},
b1:function(a,b,c){return a.getProgramParameter(b,c)},
b2:function(a,b){return a.getShaderInfoLog(b)},
b3:function(a,b,c){return a.getShaderParameter(b,c)},
b4:function(a,b,c){return a.getUniformLocation(b,c)},
c0:function(a,b){return a.linkProgram(b)},
c4:function(a,b,c){return a.pixelStorei(b,c)},
b8:function(a,b,c){return a.shaderSource(b,c)},
b9:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aW:function(a,b,c,d,e,f,g,h,i,j){this.aM(a,b,c,d,e,f,g)
return},
c9:function(a,b,c,d,e,f,g){return this.aW(a,b,c,d,e,f,g,null,null,null)},
aM:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ca:function(a,b,c,d){return a.texParameterf(b,c,d)},
cb:function(a,b,c,d){return a.texParameteri(b,c,d)},
ce:function(a,b,c){return a.uniform1f(b,c)},
cf:function(a,b,c){return a.uniform1fv(b,c)},
cg:function(a,b,c){return a.uniform1i(b,c)},
ci:function(a,b,c){return a.uniform1iv(b,c)},
cj:function(a,b,c){return a.uniform2fv(b,c)},
ck:function(a,b,c){return a.uniform3fv(b,c)},
cl:function(a,b,c){return a.uniform4fv(b,c)},
cm:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cn:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cp:function(a,b){return a.useProgram(b)},
cr:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cs:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fd.prototype={
dz:function(a,b){return a.beginTransformFeedback(b)},
dC:function(a,b){return a.bindVertexArray(b)},
dH:function(a){return a.createVertexArray()},
dO:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dP:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dQ:function(a){return a.endTransformFeedback()},
ef:function(a,b,c,d){this.ds(a,b,c,d)
return},
ds:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eg:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bC:function(a,b){return a.activeTexture(b)},
bE:function(a,b,c){return a.attachShader(b,c)},
bF:function(a,b,c){return a.bindBuffer(b,c)},
bG:function(a,b,c){return a.bindFramebuffer(b,c)},
bH:function(a,b,c){return a.bindTexture(b,c)},
bI:function(a,b){return a.blendEquation(b)},
bJ:function(a,b,c){return a.blendFunc(b,c)},
bK:function(a,b,c,d){return a.bufferData(b,c,d)},
bL:function(a,b){return a.clear(b)},
bM:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bN:function(a,b){return a.compileShader(b)},
bO:function(a){return a.createBuffer()},
bP:function(a){return a.createProgram()},
bR:function(a,b){return a.createShader(b)},
bS:function(a){return a.createTexture()},
bU:function(a,b){return a.depthMask(b)},
bV:function(a,b){return a.disable(b)},
bW:function(a,b,c,d){return a.drawArrays(b,c,d)},
bX:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bY:function(a,b){return a.enable(b)},
bZ:function(a,b){return a.enableVertexAttribArray(b)},
aw:function(a){return P.hU(a.getContextAttributes())},
b_:function(a){return a.getError()},
b0:function(a,b){return a.getProgramInfoLog(b)},
b1:function(a,b,c){return a.getProgramParameter(b,c)},
b2:function(a,b){return a.getShaderInfoLog(b)},
b3:function(a,b,c){return a.getShaderParameter(b,c)},
b4:function(a,b,c){return a.getUniformLocation(b,c)},
c0:function(a,b){return a.linkProgram(b)},
c4:function(a,b,c){return a.pixelStorei(b,c)},
b8:function(a,b,c){return a.shaderSource(b,c)},
b9:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aW:function(a,b,c,d,e,f,g,h,i,j){this.aM(a,b,c,d,e,f,g)
return},
c9:function(a,b,c,d,e,f,g){return this.aW(a,b,c,d,e,f,g,null,null,null)},
aM:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ca:function(a,b,c,d){return a.texParameterf(b,c,d)},
cb:function(a,b,c,d){return a.texParameteri(b,c,d)},
ce:function(a,b,c){return a.uniform1f(b,c)},
cf:function(a,b,c){return a.uniform1fv(b,c)},
cg:function(a,b,c){return a.uniform1i(b,c)},
ci:function(a,b,c){return a.uniform1iv(b,c)},
cj:function(a,b,c){return a.uniform2fv(b,c)},
ck:function(a,b,c){return a.uniform3fv(b,c)},
cl:function(a,b,c){return a.uniform4fv(b,c)},
cm:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cn:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cp:function(a,b){return a.useProgram(b)},
cr:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cs:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.hK.prototype={$isa:1}
P.fn.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return P.hU(this.dj(a,b))},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
dj:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.cs.prototype={$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.cE.prototype={$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
B.ii.prototype={
$1:function(a){$.$get$hV().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aI]}}}
B.ij.prototype={
$1:function(a){$.$get$hV().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aI]}}}
B.ik.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.lX=t
$.lY=C.b.a4(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.iS=s-C.b.G(window.innerWidth,2)
$.k5=-(t-C.b.G(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.N]}}}
B.il.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bS=t-C.b.G(window.innerWidth,2)
$.bT=-(s-C.b.G(window.innerHeight,2))
if(a.button===2)$.$get$bQ().i(0,"right",!0)
else $.$get$bQ().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.N]}}}
B.im.prototype={
$1:function(a){if(a.button===2)$.$get$bQ().i(0,"right",null)
else $.$get$bQ().i(0,"left",null)},
$S:function(){return{func:1,args:[W.N]}}}
B.eQ.prototype={
cZ:function(a,b,c,d){var t
d.toString
W.a7(d,W.m5().$1(d),new B.eR(this),!1,W.aR)
W.a7(d,"mousemove",new B.eS(this),!1,W.N)
t=W.aP
W.a7(d,"touchstart",new B.eT(),!1,t)
W.a7(d,"touchmove",new B.eU(this),!1,t)
B.mj(null)}}
B.eR.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.S.gdI(a)*r.k3
if(C.c.a4(r.fy,t)>0)r.fy=H.W(C.c.a4(r.fy,t))}catch(q){s=H.as(q)
P.af(s)}},
$S:function(){return{func:1,args:[W.aR]}}}
B.eS.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.W(t.go+C.b.a4($.iS,$.bS)*0.01)
s=t.id
r=$.bT
q=$.k5
t.id=H.W(s+(r-q)*0.01)
$.bS=$.iS
$.bT=q}},
$S:function(){return{func:1,args:[W.N]}}}
B.eT.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a2(t.clientX)
C.c.a2(t.clientY)
$.bS=s
C.c.a2(t.clientX)
$.bT=C.c.a2(t.clientY)},
$S:function(){return{func:1,args:[W.aP]}}}
B.eU.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a2(t.clientX)
t=C.c.a2(t.clientY)
r=this.a
r.go=H.W(r.go+C.b.a4(s,$.bS)*0.01)
r.id=H.W(r.id+($.bT-t)*0.01)
$.bS=s
$.bT=t},
$S:function(){return{func:1,args:[W.aP]}}}
G.eF.prototype={}
G.da.prototype={
I:function(a,b){var t=this.d
if(H.ay(!t.C(0,a)))H.aX("uniform "+a+" already set")
t.i(0,a,b)},
be:function(){return this.d},
j:function(a){var t,s,r,q
t=H.M(["{"+new H.av(H.hZ(this),null).j(0)+"}["+this.a+"]"],[P.v])
for(s=this.d,r=s.gM(s),r=r.gB(r);r.t();){q=r.gu()
C.a.l(t,H.h(q)+": "+H.h(s.h(0,q)))}return C.a.ae(t,"\n")}}
G.dw.prototype={}
G.dy.prototype={
c_:function(a,b,c){J.kB(this.a,b)
if(c>0)J.kW(this.a,b,c)}}
G.eb.prototype={}
G.e3.prototype={}
G.ed.prototype={
bc:function(a){var t=this.e
H.d(!t.C(0,a))
H.d(C.e.cI(a,"a"))
switch($.$get$R().h(0,a).a){case"vec2":t.i(0,a,H.M([],[T.w]))
break
case"vec3":t.i(0,a,H.M([],[T.n]))
break
case"vec4":t.i(0,a,H.M([],[T.ax]))
break
case"float":t.i(0,a,H.M([],[P.L]))
break
case"uvec4":t.i(0,a,H.M([],[[P.b,P.p]]))
break
default:if(H.ay(!1))H.aX("unknown type for "+a)}},
cQ:function(a){var t,s,r
H.d(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.l(s,new G.e3(t,t+1,t+2,t+3))},
ak:function(a){var t,s,r,q
for(t=this.d,s=0;s<24;++s){r=a[s]
q=new T.n(new Float32Array(3))
q.K(r)
C.a.l(t,q)}},
cO:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<24;++r){q=b[r]
p=new Float32Array(2)
o=q.a
p[1]=o[1]
p[0]=o[0]
s.l(t,new T.w(p))}},
cP:function(a,b){var t,s,r,q,p
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new T.n(new Float32Array(3))
p.K(q)
s.l(t,p)}},
cV:function(){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=t.length
H.d(s>0)
s=new Array(t.length*6)
s.fixed$length=Array
r=H.M(s,[P.p])
for(s=this.b,q=0,p=0;!1;++p){o=s[p]
r[q]=o.gej(o)
r[q+1]=o.gek(o)
r[q+2]=o.gel(o)
q+=3}for(s=t.length,p=0;n=t.length,p<n;n===s||(0,H.O)(t),++p){m=t[p]
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
for(s=this.e,r=s.gM(s),r=r.gB(r);r.t();){q=r.gu()
p=$.$get$R().h(0,q).a
C.a.l(t,H.h(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.ae(t," ")}}
G.d9.prototype={}
G.bE.prototype={}
G.cT.prototype={}
G.cU.prototype={
bb:function(a,b,c){var t,s
if(C.e.aB(a,0)===105){if(H.ay(C.b.aA(b.length,c)===this.z))H.aX("ChangeAttribute "+this.z)}else H.d(C.b.aA(b.length,c)===(this.ch.length/3|0))
J.kk(this.cy,a,b)
t=this.d
s=this.r.h(0,a)
J.dm(t.a,34962,s)
J.iX(t.a,34962,b,35048)},
cW:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a5:function(a,b,c){var t,s,r,q,p,o
t=J.iU(a,0)===105
if(t&&this.z===0)this.z=C.b.aA(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.ir(r.a))
this.bb(a,b,c)
q=$.$get$R().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.ay(p.C(0,a)))H.aX("unexpected attribute "+a)
o=p.h(0,a)
J.dn(r.a,this.e)
r.c_(0,o,t?1:0)
s=s.h(0,a)
p=q.bd()
J.dm(r.a,34962,s)
J.j7(r.a,o,p,5126,!1,0,0)},
ak:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.ir(s.a))
this.ch=a
this.bb("aPosition",a,3)
r=$.$get$R().h(0,"aPosition")
if(r==null)throw H.e("Unknown canonical aPosition")
q=this.x
H.d(q.C(0,"aPosition"))
p=q.h(0,"aPosition")
J.dn(s.a,this.e)
s.c_(0,p,0)
t=t.h(0,"aPosition")
q=r.bd()
J.dm(s.a,34962,t)
J.j7(s.a,p,q,5126,!1,0,0)},
j:function(a){var t,s,r
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=J.bd(J.iZ(this.cy));t.t();){r=t.gu()
C.a.l(s,H.h(r)+":"+H.h(J.bW(J.aZ(this.cy,r))))}return"MESH["+this.a+"] "+C.a.ae(s,"  ")},
saG:function(a){this.cx=a}}
G.eX.prototype={
cR:function(a,b){var t=C.b.cu(a,b)
if(this.z===t)return
this.z=t
this.bf()},
bf:function(){var t,s,r,q,p,o,n
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
t.a3(0,0,1/(p*s))
t.a3(1,1,1/p)
t.a3(2,2,(q+r)/o)
t.a3(3,2,-1)
t.a3(2,3,2*r*q/o)},
be:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.n(new Float32Array(H.j(3)))
o.q(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.K(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.u(n)
r=!!s.$isax
k=r?s.gav(n):1
if(!!s.$isn){j=s.gm(n)
m=s.gn(n)
l=s.gH(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gH(n)
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
a3.K(this.db)
a3.c3(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fa.prototype={
d3:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gk(t)===s.gk(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gM(s),s=s.gB(s);s.t();){q=s.gu()
if(!t.C(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bJ(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.t();){q=s.d
if(!t.a1(0,q))C.a.l(r,q)}return r},
d4:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gM(b),s=s.gB(s),r=this.d,q=this.y,p=this.z,o=0;s.t();){n=s.gu()
switch(J.iU(n,0)){case 117:if(q.C(0,n)){m=b.h(0,n)
if(p.C(0,n))H.ig("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$R().h(0,n)
if(l==null)H.F("unknown "+n)
H.d(q.C(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.iv(r.a,k,m)
else if(!!J.u(m).$isjl)J.kU(r.a,k,m)
break
case"float":if(l.c===0)J.kS(r.a,k,m)
else if(!!J.u(m).$ise8)J.kT(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.ar(m,"$isP").a
J.j6(r.a,k,!1,j)}else if(!!J.u(m).$ise8)J.j6(r.a,k,!1,m)
else if(H.ay(!1))H.aX("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.ar(m,"$isaL").a
J.j5(r.a,k,!1,j)}else if(!!J.u(m).$ise8)J.j5(r.a,k,!1,m)
else if(H.ay(!1))H.aX("bad unform: "+n)
break
case"vec4":if(l.c===0){j=H.ar(m,"$isax").a
J.j4(r.a,k,j)}else J.j4(r.a,k,m)
break
case"vec3":if(l.c===0){j=H.ar(m,"$isn").a
J.j3(r.a,k,j)}else J.j3(r.a,k,m)
break
case"vec2":if(l.c===0){j=H.ar(m,"$isw").a
J.j2(r.a,k,j)}else J.j2(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.Z(33984,this.ch)
J.iV(r.a,j)
j=H.ar(m,"$isbD").b
J.bU(r.a,3553,j)
j=this.ch
J.iv(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.Z(33984,this.ch)
J.iV(r.a,j)
j=H.ar(m,"$isbD").b
J.bU(r.a,34067,j)
j=this.ch
J.iv(r.a,k,j)
this.ch=this.ch+1
break
default:H.ig("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":if(J.D(m,!0))J.bV(r.a,2929)
else J.is(r.a,2929)
break
case"cStencilFunc":H.ar(m,"$isd9")
j=m.a
if(j===1281)J.is(r.a,2960)
else{J.bV(r.a,2960)
i=m.b
h=m.c
J.kO(r.a,j,i,h)}break
case"cDepthWrite":J.kv(r.a,m)
break
case"cBlendEquation":H.ar(m,"$isbE")
j=m.a
if(j===1281)J.is(r.a,3042)
else{J.bV(r.a,3042)
i=m.b
h=m.c
J.kp(r.a,i,h)
J.ko(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aE(1000*(s-new P.bg(t,!1).a)).j(0)},
cU:function(a,b,c){var t,s,r,q,p,o,n,m,l
Date.now()
t=this.d
s=this.r
J.kV(t.a,s)
this.ch=0
this.z.T(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.O)(b),++r){q=b[r]
this.d4(q.a,q.be())}s=this.Q
s.T(0)
for(p=J.bd(J.iZ(a.cy));p.t();)s.l(0,p.gu())
o=this.d3()
if(o.length!==0)P.af("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.h(o)))
J.dn(a.d.a,a.e)
n=this.e.f.length>0
s=a.f
p=a.cW()
m=a.Q
l=a.z
t.toString
if(n)J.km(t.a,s)
if(m!==-1)if(l>1)J.kz(t.a,s,p,m,0,l)
else J.ky(t.a,s,p,m,0)
else if(l>1)J.kx(t.a,s,0,p,l)
else J.kw(t.a,s,0,p)
if(n)J.kC(t.a)},
d_:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.e
r=s.b
q=this.f
p=q.b
o=s.f
n=J.kt(t.a)
m=G.jM(t.a,35633,r)
J.iW(t.a,n,m)
l=G.jM(t.a,35632,p)
J.iW(t.a,n,l)
if(o.length>0)J.kR(t.a,n,o,35980)
J.kK(t.a,n)
if(!J.kJ(t.a,n,35714))H.F(J.kI(t.a,n))
this.r=n
this.sd8(0,P.lk(s.c,null))
for(s=s.d,r=s.length,p=this.y,k=0;k<s.length;s.length===r||(0,H.O)(s),++k){j=s[k]
o=this.r
p.i(0,j,J.j0(t.a,o,j))}for(s=q.d,r=s.length,k=0;k<s.length;s.length===r||(0,H.O)(s),++k){j=s[k]
q=this.r
p.i(0,j,J.j0(t.a,q,j))}},
sd8:function(a,b){this.x=b}}
G.i.prototype={
bd:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.ab.prototype={
aj:function(a){var t,s,r,q,p
H.d(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.O)(a),++q){p=a[q]
H.d($.$get$R().C(0,p))
H.d(!C.a.a1(s,p))
C.a.l(s,p)
r.i(0,p,this.r);++this.r}C.a.az(s)},
P:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.O)(a),++r){q=a[r]
if(H.ay($.$get$R().C(0,q)))H.aX("missing uniform "+q)
H.d(!C.a.a1(s,q))
C.a.l(s,q)}C.a.az(s)},
a_:function(a){var t,s,r
H.d(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.d($.$get$R().C(0,r))
H.d(!C.a.a1(t,r))
C.a.l(t,r)}C.a.az(t)},
d0:function(a,b){H.d(this.b==null)
this.b=this.d5(!0,a,b)},
R:function(a){return this.d0(a,null)},
d5:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.O)(t),++o){n=t[o]
m=$.$get$R().h(0,n)
C.a.l(q,"layout (location="+H.h(p.h(0,n))+") in "+m.a+" "+H.h(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.O)(t),++o){k=t[o]
m=$.$get$R().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.h(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.O)(t),++o){k=t[o]
m=$.$get$R().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.h(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.O)(t),++o){k=t[o]
m=$.$get$R().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.h(k)+j+";")}C.a.l(q,"")
C.a.l(q,"void main(void) {")
C.a.du(q,b)
C.a.l(q,"}")
return C.a.ae(q,"\n")}}
G.fl.prototype={
aY:function(){var t,s,r
t=this.f
s=this.d.a
r=t.a
r[0]=s[2]
r[1]=s[6]
r[2]=s[10]
return t},
b5:function(){var t,s,r
t=this.r
s=this.d.a
r=t.a
r[0]=s[1]
r[1]=s[5]
r[2]=s[9]
return t},
b6:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
G.fC.prototype={
cX:function(a,b){var t=this.e
if(t!==1)J.kQ(a.a,b,34046,t)
J.j1(a.a,b,10240,this.r)
J.j1(a.a,b,10241,this.f)}}
G.bD.prototype={
j:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.eh.prototype={
d1:function(a){var t,s
t=this.d
s=this.c
J.bU(t.a,s,this.b)
J.kP(t.a,s,0,6408,6408,5121,a)}}
A.d_.prototype={
j:function(a){return"NODE["+this.a+"]"}}
A.aO.prototype={}
A.f9.prototype={
cT:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.kn(p.a,36160,t)
H.d(r>0&&q>0)
J.kX(p.a,this.x,this.y,r,q)
if(s!==0)J.kq(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.O)(t),++o){n=t[o]
m=n.e
C.a.l(m,new G.da(P.E(),"transforms",!1,!0))
l=new T.P(new Float32Array(16))
l.O()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.O)(r),++k)A.jY(p,r[k],l,a,m)
m.pop()}},
cS:function(){return this.cT(null)}}
A.i_.prototype={
$2:function(a,b){var t=536870911&a+J.ah(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.p,P.r]}}}
T.aL.prototype={
K:function(a){var t,s
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
j:function(a){return"[0] "+this.N(0).j(0)+"\n[1] "+this.N(1).j(0)+"\n[2] "+this.N(2).j(0)+"\n"},
h:function(a,b){return C.f.h(this.a,b)},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aL){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gv:function(a){return A.dj(this.a)},
N:function(a){var t,s
t=new Float32Array(H.j(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.n(t)},
dG:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g===0){this.K(a)
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
a3:function(a,b,c){H.d(a<4)
H.d(b<4)
this.a[b*4+a]=c},
K:function(a){var t,s
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
j:function(a){return"[0] "+this.N(0).j(0)+"\n[1] "+this.N(1).j(0)+"\n[2] "+this.N(2).j(0)+"\n[3] "+this.N(3).j(0)+"\n"},
h:function(a,b){return C.f.h(this.a,b)},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.P){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gv:function(a){return A.dj(this.a)},
N:function(a){var t,s
t=new Float32Array(H.j(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.ax(t)},
af:function(a7,a8,a9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
t=Math.sqrt(a8.gaT())
s=a8.a
r=s[0]/t
q=s[1]/t
p=s[2]/t
t=Math.cos(a9)
o=Math.sin(a9)
n=1-t
m=r*r*n+t
l=p*o
k=r*q*n-l
j=q*o
i=r*p*n+j
h=q*r*n+l
g=q*q*n+t
o=r*o
f=q*p*n-o
e=p*r*n-j
d=p*q*n+o
c=p*p*n+t
t=this.a
o=t[0]
j=t[4]
l=t[8]
b=t[1]
a=t[5]
a0=t[9]
a1=t[2]
a2=t[6]
a3=t[10]
a4=t[3]
a5=t[7]
a6=t[11]
t[0]=o*m+j*h+l*e
t[1]=b*m+a*h+a0*e
t[2]=a1*m+a2*h+a3*e
t[3]=a4*m+a5*h+a6*e
t[4]=o*k+j*g+l*d
t[5]=b*k+a*g+a0*d
t[6]=a1*k+a2*g+a3*d
t[7]=a4*k+a5*g+a6*d
t[8]=o*i+j*f+l*c
t[9]=b*i+a*f+a0*c
t[10]=a1*i+a2*f+a3*c
t[11]=a4*i+a5*f+a6*c},
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
c3:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.w.prototype={
j:function(a){var t=this.a
return"["+H.h(t[0])+","+H.h(t[1])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.w){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gv:function(a){return A.dj(this.a)},
h:function(a,b){return C.f.h(this.a,b)},
gk:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.n.prototype={
q:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
K:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
j:function(a){var t=this.a
return"["+H.h(t[0])+","+H.h(t[1])+","+H.h(t[2])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.n){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gv:function(a){return A.dj(this.a)},
h:function(a,b){return C.f.h(this.a,b)},
gk:function(a){return Math.sqrt(this.gaT())},
gaT:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
aU:function(a){var t,s,r
t=Math.sqrt(this.gaT())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
aQ:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
bT:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.n(new Float32Array(H.j(3)))
t.q(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gH:function(a){return this.a[2]}}
T.ax.prototype={
j:function(a){var t=this.a
return H.h(t[0])+","+H.h(t[1])+","+H.h(t[2])+","+H.h(t[3])},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ax){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gv:function(a){return A.dj(this.a)},
h:function(a,b){return C.f.h(this.a,b)},
gk:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gH:function(a){return this.a[2]},
gav:function(a){return this.a[3]}}
Q.ib.prototype={
$1:function(a){var t,s,r
t=this.b
s=this.a
r=this.c
C.a.V(t[C.b.ay(s.a,3)].f,r)
t=t[C.b.ay(s.a+1,3)]
H.d(!0)
C.a.l(t.f,r)
s.a=C.b.ay(s.a+1,3)},
$S:function(){return{func:1,args:[,]}}}
Q.ic.prototype={
$1:function(a){var t,s,r,q
t=this.b
s=this.a
r=this.c
C.a.V(C.a.h(t,s.a).f,r)
q=this.d.selectedIndex
s.a=q
t=C.a.h(t,q)
H.d(!0)
C.a.l(t.f,r)},
$S:function(){return{func:1,args:[W.k]}}}
Q.id.prototype={
$1:function(a){var t,s,r
t=this.a
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.af("size change "+H.h(s)+" "+H.h(r))
this.b.cR(s,r)
t=this.c
t.z=s
t.Q=r},
$S:function(){return{func:1,v:true,args:[W.k]}}}
Q.ia.prototype={
$1:function(a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.a
s=t.b
t.b=a4+0
t=this.b
t.go=H.W(t.go+0.001)
r=t.k4
if(r.h(0,37)!=null)t.go=H.W(t.go+0.03)
else if(r.h(0,39)!=null)t.go=H.W(t.go-0.03)
if(r.h(0,38)!=null)t.id=H.W(t.id+0.03)
else if(r.h(0,40)!=null)t.id=H.W(t.id-0.03)
if(r.h(0,33)!=null)t.fy=H.W(t.fy*0.99)
else if(r.h(0,34)!=null)t.fy=H.W(t.fy*1.01)
if(r.h(0,32)!=null){t.go=0
t.id=0}r=H.W(C.c.dD(t.id,-1.4707963267948965,1.4707963267948965))
t.id=r
q=t.fy
p=t.go
o=q*Math.cos(r)
t.b6(o*Math.cos(p),q*Math.sin(r),o*Math.sin(p))
p=t.d
r=p.a
q=t.k2.a
r[12]=r[12]+q[0]
r[13]=r[13]+q[1]
r[14]=r[14]+q[2]
n=r[12]
m=r[13]
l=r[14]
k=new T.n(new Float32Array(H.j(3)))
k.q(0,1,0)
j=t.e
i=j.a
i[0]=r[12]
i[1]=r[13]
i[2]=r[14]
i=new Float32Array(H.j(3))
h=new T.n(i)
h.K(j)
i[0]=i[0]-q[0]
i[1]=i[1]-q[1]
i[2]=i[2]-q[2]
h.aU(0)
g=k.bT(h)
g.aU(0)
f=h.bT(g)
f.aU(0)
q=g.aQ(j)
e=f.aQ(j)
j=h.aQ(j)
d=g.a
c=d[0]
b=f.a
a=b[0]
a0=i[0]
a1=d[1]
a2=b[1]
a3=i[1]
d=d[2]
b=b[2]
i=i[2]
r[15]=1
r[14]=-j
r[13]=-e
r[12]=-q
r[11]=0
r[10]=i
r[9]=b
r[8]=d
r[7]=0
r[6]=a3
r[5]=a2
r[4]=a1
r[3]=0
r[2]=a0
r[1]=a
r[0]=c
r[12]=n
r[13]=m
r[14]=l
p.af(0,t.aY(),-t.k1)
t=this.e
p=t.d
s=-((a4-s)*0.0005)
p.af(0,t.aY(),s)
p.af(0,t.b5(),s)
this.d.d.i(0,"uTime",a4/1000)
this.c.cS()
C.T.gdw(window).cc(this)},
$S:function(){return{func:1,v:true,args:[P.T]}}}
J.a.prototype.cL=J.a.prototype.j
J.bq.prototype.cM=J.bq.prototype.j;(function installTearOffs(){installTearOff(H.aU.prototype,"ge2",0,0,0,null,["$0"],["at"],0)
installTearOff(H.ad.prototype,"gcz",0,0,0,null,["$1"],["F"],2)
installTearOff(H.aT.prototype,"gdK",0,0,0,null,["$1"],["U"],2)
installTearOff(P,"lT",1,0,0,null,["$1"],["lD"],1)
installTearOff(P,"lU",1,0,0,null,["$1"],["lE"],1)
installTearOff(P,"lV",1,0,0,null,["$1"],["lF"],1)
installTearOff(P,"jX",1,0,0,null,["$0"],["lR"],0)
installTearOff(P.aq.prototype,"gda",0,0,0,null,["$2","$1"],["al","dc"],3)
installTearOff(P,"m_",1,0,0,null,["$2"],["l3"],4)
installTearOff(W,"m5",1,0,0,null,["$1"],["l7"],5)
installTearOff(Q,"kd",1,0,0,null,["$0"],["md"],0)})();(function inheritance(){inherit(P.r,null)
var t=P.r
inherit(H.iB,t)
inherit(J.a,t)
inherit(J.ds,t)
inherit(P.ak,t)
inherit(H.cQ,t)
inherit(P.cO,t)
inherit(H.c7,t)
inherit(H.b1,t)
inherit(H.hw,t)
inherit(H.aU,t)
inherit(H.h8,t)
inherit(H.aV,t)
inherit(H.hv,t)
inherit(H.h2,t)
inherit(H.b6,t)
inherit(H.fE,t)
inherit(H.aj,t)
inherit(H.ad,t)
inherit(H.aT,t)
inherit(H.f8,t)
inherit(H.fL,t)
inherit(P.b2,t)
inherit(H.dh,t)
inherit(H.av,t)
inherit(H.aa,t)
inherit(H.et,t)
inherit(H.ev,t)
inherit(P.h4,t)
inherit(P.de,t)
inherit(P.aq,t)
inherit(P.dc,t)
inherit(P.fr,t)
inherit(P.fs,t)
inherit(P.b0,t)
inherit(P.hN,t)
inherit(P.fi,t)
inherit(P.ht,t)
inherit(P.bJ,t)
inherit(P.x,t)
inherit(P.hu,t)
inherit(P.aY,t)
inherit(P.G,t)
inherit(P.bg,t)
inherit(P.T,t)
inherit(P.aE,t)
inherit(P.d7,t)
inherit(P.hd,t)
inherit(P.dL,t)
inherit(P.b,t)
inherit(P.au,t)
inherit(P.aM,t)
inherit(P.bz,t)
inherit(P.v,t)
inherit(P.bB,t)
inherit(W.dA,t)
inherit(W.A,t)
inherit(W.e7,t)
inherit(P.hr,t)
inherit(P.hy,t)
inherit(G.eF,t)
inherit(G.dy,t)
inherit(G.eb,t)
inherit(G.e3,t)
inherit(G.ed,t)
inherit(G.d9,t)
inherit(G.bE,t)
inherit(G.i,t)
inherit(G.ab,t)
inherit(G.fC,t)
inherit(G.bD,t)
inherit(T.aL,t)
inherit(T.P,t)
inherit(T.w,t)
inherit(T.n,t)
inherit(T.ax,t)
t=J.a
inherit(J.en,t)
inherit(J.ep,t)
inherit(J.bq,t)
inherit(J.aF,t)
inherit(J.b3,t)
inherit(J.aG,t)
inherit(H.bs,t)
inherit(H.b5,t)
inherit(W.f,t)
inherit(W.Y,t)
inherit(W.bY,t)
inherit(W.c_,t)
inherit(W.c0,t)
inherit(W.z,t)
inherit(W.c9,t)
inherit(W.dC,t)
inherit(W.dD,t)
inherit(W.dE,t)
inherit(W.c3,t)
inherit(W.c4,t)
inherit(W.co,t)
inherit(W.dH,t)
inherit(W.k,t)
inherit(W.cq,t)
inherit(W.a_,t)
inherit(W.ee,t)
inherit(W.ci,t)
inherit(W.ex,t)
inherit(W.eC,t)
inherit(W.a0,t)
inherit(W.cl,t)
inherit(W.eO,t)
inherit(W.cf,t)
inherit(W.eV,t)
inherit(W.b7,t)
inherit(W.a1,t)
inherit(W.ct,t)
inherit(W.ac,t)
inherit(W.a3,t)
inherit(W.cj,t)
inherit(W.a4,t)
inherit(W.fp,t)
inherit(W.U,t)
inherit(W.ca,t)
inherit(W.fD,t)
inherit(W.a6,t)
inherit(W.cg,t)
inherit(W.fI,t)
inherit(W.fP,t)
inherit(W.fU,t)
inherit(W.h3,t)
inherit(W.ce,t)
inherit(W.cb,t)
inherit(W.cr,t)
inherit(W.cc,t)
inherit(W.cp,t)
inherit(W.cn,t)
inherit(W.hL,t)
inherit(W.hM,t)
inherit(P.al,t)
inherit(P.cd,t)
inherit(P.am,t)
inherit(P.ch,t)
inherit(P.f0,t)
inherit(P.f1,t)
inherit(P.f6,t)
inherit(P.cm,t)
inherit(P.an,t)
inherit(P.ck,t)
inherit(P.fT,t)
inherit(P.dt,t)
inherit(P.fc,t)
inherit(P.fd,t)
inherit(P.hK,t)
inherit(P.cs,t)
t=J.bq
inherit(J.eZ,t)
inherit(J.aQ,t)
inherit(J.aH,t)
inherit(J.iA,J.aF)
t=J.b3
inherit(J.cP,t)
inherit(J.eo,t)
t=P.ak
inherit(H.c,t)
inherit(H.cR,t)
t=H.c
inherit(H.b4,t)
inherit(H.eu,t)
inherit(H.dK,H.cR)
inherit(H.ey,P.cO)
t=H.b4
inherit(H.cS,t)
inherit(P.ew,t)
t=H.b1
inherit(H.io,t)
inherit(H.ip,t)
inherit(H.hq,t)
inherit(H.h9,t)
inherit(H.ek,t)
inherit(H.el,t)
inherit(H.hx,t)
inherit(H.fF,t)
inherit(H.fG,t)
inherit(H.iq,t)
inherit(H.i4,t)
inherit(H.i5,t)
inherit(H.i6,t)
inherit(H.i7,t)
inherit(H.i8,t)
inherit(H.fy,t)
inherit(H.eq,t)
inherit(H.i0,t)
inherit(H.i1,t)
inherit(H.i2,t)
inherit(P.h_,t)
inherit(P.fZ,t)
inherit(P.h0,t)
inherit(P.h1,t)
inherit(P.he,t)
inherit(P.hi,t)
inherit(P.hf,t)
inherit(P.hg,t)
inherit(P.hh,t)
inherit(P.hl,t)
inherit(P.hm,t)
inherit(P.hk,t)
inherit(P.hj,t)
inherit(P.ft,t)
inherit(P.fu,t)
inherit(P.hQ,t)
inherit(P.hB,t)
inherit(P.hA,t)
inherit(P.hC,t)
inherit(P.ez,t)
inherit(P.dI,t)
inherit(P.dJ,t)
inherit(W.fq,t)
inherit(W.fW,t)
inherit(W.hc,t)
inherit(P.hT,t)
inherit(B.ii,t)
inherit(B.ij,t)
inherit(B.ik,t)
inherit(B.il,t)
inherit(B.im,t)
inherit(B.eR,t)
inherit(B.eS,t)
inherit(B.eT,t)
inherit(B.eU,t)
inherit(A.i_,t)
inherit(Q.ib,t)
inherit(Q.ic,t)
inherit(Q.id,t)
inherit(Q.ia,t)
t=H.h2
inherit(H.b8,t)
inherit(H.bL,t)
t=P.b2
inherit(H.d1,t)
inherit(H.er,t)
inherit(H.fO,t)
inherit(H.fN,t)
inherit(H.dx,t)
inherit(H.ff,t)
inherit(P.bX,t)
inherit(P.d2,t)
inherit(P.ai,t)
inherit(P.t,t)
inherit(P.db,t)
inherit(P.bA,t)
inherit(P.a8,t)
inherit(P.dB,t)
t=H.fy
inherit(H.fo,t)
inherit(H.be,t)
inherit(H.fY,P.bX)
t=H.b5
inherit(H.eG,t)
inherit(H.cW,t)
t=H.cW
inherit(H.bu,t)
inherit(H.bt,t)
inherit(H.bv,H.bu)
inherit(H.cX,H.bv)
inherit(H.bw,H.bt)
inherit(H.cY,H.bw)
t=H.cX
inherit(H.cV,t)
inherit(H.eH,t)
t=H.cY
inherit(H.eI,t)
inherit(H.eJ,t)
inherit(H.eK,t)
inherit(H.eL,t)
inherit(H.eM,t)
inherit(H.cZ,t)
inherit(H.eN,t)
inherit(P.hJ,P.h4)
inherit(P.hz,P.hN)
inherit(P.df,H.aa)
inherit(P.fh,P.fi)
inherit(P.hp,P.fh)
inherit(P.hs,P.hp)
t=P.T
inherit(P.L,t)
inherit(P.p,t)
t=P.ai
inherit(P.d4,t)
inherit(P.ei,t)
t=W.f
inherit(W.y,t)
inherit(W.bj,t)
inherit(W.dz,t)
inherit(W.e5,t)
inherit(W.bp,t)
inherit(W.br,t)
inherit(W.f3,t)
inherit(W.d5,t)
inherit(W.fj,t)
inherit(W.a2,t)
inherit(W.bk,t)
inherit(W.a5,t)
inherit(W.V,t)
inherit(W.bi,t)
inherit(W.fR,t)
inherit(W.fV,t)
inherit(W.bG,t)
inherit(W.fX,t)
inherit(W.aS,t)
inherit(W.hG,t)
t=W.y
inherit(W.c5,t)
inherit(W.aD,t)
inherit(W.bh,t)
inherit(W.c2,t)
inherit(W.h6,t)
t=W.c5
inherit(W.l,t)
inherit(P.I,t)
t=W.l
inherit(W.dq,t)
inherit(W.dr,t)
inherit(W.dv,t)
inherit(W.bZ,t)
inherit(W.ea,t)
inherit(W.ej,t)
inherit(W.by,t)
inherit(W.ho,t)
inherit(W.bl,W.bj)
inherit(W.du,W.bl)
inherit(W.bf,W.c9)
inherit(W.dF,W.c3)
inherit(W.cL,W.co)
inherit(W.dG,W.cL)
inherit(W.Z,W.bY)
inherit(W.cJ,W.cq)
inherit(W.e4,W.cJ)
inherit(W.cx,W.ci)
inherit(W.bo,W.cx)
inherit(W.c8,W.bh)
inherit(W.ef,W.bp)
inherit(W.aw,W.k)
t=W.aw
inherit(W.aI,t)
inherit(W.N,t)
inherit(W.aP,t)
inherit(W.eD,W.br)
inherit(W.cH,W.cl)
inherit(W.eE,W.cH)
inherit(W.cy,W.cf)
inherit(W.d0,W.cy)
t=W.b7
inherit(W.eY,t)
inherit(W.fe,t)
inherit(W.fK,t)
inherit(W.cG,W.ct)
inherit(W.f_,W.cG)
inherit(W.f2,W.ac)
inherit(W.bm,W.bk)
inherit(W.fk,W.bm)
inherit(W.cF,W.cj)
inherit(W.fm,W.cF)
inherit(W.cu,W.ca)
inherit(W.fA,W.cu)
inherit(W.bn,W.bi)
inherit(W.fB,W.bn)
inherit(W.cv,W.cg)
inherit(W.fH,W.cv)
inherit(W.aR,W.N)
inherit(W.cw,W.ce)
inherit(W.dd,W.cw)
inherit(W.cI,W.cb)
inherit(W.h5,W.cI)
inherit(W.h7,W.c4)
inherit(W.cK,W.cr)
inherit(W.hn,W.cK)
inherit(W.cA,W.cc)
inherit(W.dg,W.cA)
inherit(W.cM,W.cp)
inherit(W.hH,W.cM)
inherit(W.cN,W.cn)
inherit(W.hI,W.cN)
inherit(W.ha,P.fr)
inherit(W.iJ,W.ha)
inherit(W.hb,P.fs)
inherit(P.H,P.hy)
t=P.I
inherit(P.at,t)
inherit(P.aC,t)
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
inherit(P.e2,t)
inherit(P.e6,t)
inherit(P.eA,t)
inherit(P.eB,t)
inherit(P.eW,t)
inherit(P.fg,t)
inherit(P.fx,t)
inherit(P.fS,t)
inherit(P.bI,t)
inherit(P.hD,t)
inherit(P.hE,t)
inherit(P.hF,t)
t=P.at
inherit(P.dp,t)
inherit(P.e9,t)
inherit(P.a9,t)
inherit(P.eg,t)
inherit(P.fw,t)
inherit(P.d8,t)
inherit(P.fQ,t)
inherit(P.cD,P.cd)
inherit(P.es,P.cD)
inherit(P.cC,P.ch)
inherit(P.eP,P.cC)
inherit(P.f7,P.a9)
inherit(P.cB,P.cm)
inherit(P.fv,P.cB)
t=P.d8
inherit(P.fz,t)
inherit(P.bC,t)
inherit(P.cz,P.ck)
inherit(P.fJ,P.cz)
inherit(P.cE,P.cs)
inherit(P.fn,P.cE)
t=G.eF
inherit(G.fl,t)
inherit(G.da,t)
inherit(G.cU,t)
inherit(G.fa,t)
inherit(A.aO,t)
inherit(A.f9,t)
t=G.fl
inherit(G.dw,t)
inherit(A.d_,t)
inherit(B.eQ,G.dw)
t=G.da
inherit(G.cT,t)
inherit(G.eX,t)
inherit(G.eh,G.bD)
mixin(H.bt,P.x)
mixin(H.bu,P.x)
mixin(H.bv,H.c7)
mixin(H.bw,H.c7)
mixin(W.bi,P.x)
mixin(W.bj,P.x)
mixin(W.bk,P.x)
mixin(W.bl,W.A)
mixin(W.bm,W.A)
mixin(W.bn,W.A)
mixin(W.c9,W.dA)
mixin(W.ct,P.x)
mixin(W.cf,P.x)
mixin(W.cc,P.x)
mixin(W.cn,P.x)
mixin(W.co,P.x)
mixin(W.cp,P.x)
mixin(W.cq,P.x)
mixin(W.cr,P.x)
mixin(W.ca,P.x)
mixin(W.ce,P.x)
mixin(W.cb,P.x)
mixin(W.cg,P.x)
mixin(W.ci,P.x)
mixin(W.cj,P.x)
mixin(W.cl,P.x)
mixin(W.cu,W.A)
mixin(W.cv,W.A)
mixin(W.cw,W.A)
mixin(W.cG,W.A)
mixin(W.cH,W.A)
mixin(W.cF,W.A)
mixin(W.cK,W.A)
mixin(W.cL,W.A)
mixin(W.cM,W.A)
mixin(W.cN,W.A)
mixin(W.cx,W.A)
mixin(W.cy,W.A)
mixin(W.cA,W.A)
mixin(W.cI,W.A)
mixin(W.cJ,W.A)
mixin(P.cm,P.x)
mixin(P.cd,P.x)
mixin(P.ch,P.x)
mixin(P.ck,P.x)
mixin(P.cz,W.A)
mixin(P.cB,W.A)
mixin(P.cC,W.A)
mixin(P.cD,W.A)
mixin(P.cs,P.x)
mixin(P.cE,W.A)})();(function constants(){C.l=W.bZ.prototype
C.h=W.c_.prototype
C.i=W.c0.prototype
C.j=W.c8.prototype
C.r=J.a.prototype
C.a=J.aF.prototype
C.b=J.cP.prototype
C.c=J.b3.prototype
C.e=J.aG.prototype
C.z=J.aH.prototype
C.f=H.cV.prototype
C.p=J.eZ.prototype
C.k=J.aQ.prototype
C.S=W.aR.prototype
C.T=W.bG.prototype
C.q=new P.hr()
C.d=new P.hz()
C.m=new P.aE(0)
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
C.n=function(hooks) { return hooks; }

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
C.o=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.A=H.J("mm")
C.B=H.J("mn")
C.C=H.J("e8")
C.D=H.J("mo")
C.E=H.J("mp")
C.F=H.J("jl")
C.G=H.J("mq")
C.H=H.J("jo")
C.I=H.J("aM")
C.J=H.J("v")
C.K=H.J("jI")
C.L=H.J("jJ")
C.M=H.J("mr")
C.N=H.J("jK")
C.O=H.J("aY")
C.P=H.J("L")
C.Q=H.J("p")
C.R=H.J("T")})();(function staticFields(){$.js="$cachedFunction"
$.jt="$cachedInvocation"
$.jf=null
$.jd=null
$.iK=!1
$.iO=null
$.jU=null
$.kg=null
$.hW=null
$.i3=null
$.iP=null
$.b9=null
$.bM=null
$.bN=null
$.iL=!1
$.C=C.d
$.jj=0
$.lX=0
$.lY=0
$.iS=0
$.k5=0
$.bS=0
$.bT=0
$.mk=!1
$.k_=0})();(function lazyInitializers(){lazy($,"ji","$get$ji",function(){return H.k1("_$dart_dartClosure")})
lazy($,"iC","$get$iC",function(){return H.k1("_$dart_js")})
lazy($,"jm","$get$jm",function(){return H.lg()})
lazy($,"jn","$get$jn",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.jj
$.jj=t+1
t="expando$key$"+t}return new P.dL(null,t,[P.p])})
lazy($,"jx","$get$jx",function(){return H.ao(H.fM({
toString:function(){return"$receiver$"}}))})
lazy($,"jy","$get$jy",function(){return H.ao(H.fM({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"jz","$get$jz",function(){return H.ao(H.fM(null))})
lazy($,"jA","$get$jA",function(){return H.ao(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jE","$get$jE",function(){return H.ao(H.fM(void 0))})
lazy($,"jF","$get$jF",function(){return H.ao(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jC","$get$jC",function(){return H.ao(H.jD(null))})
lazy($,"jB","$get$jB",function(){return H.ao(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"jH","$get$jH",function(){return H.ao(H.jD(void 0))})
lazy($,"jG","$get$jG",function(){return H.ao(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"iI","$get$iI",function(){return P.lC()})
lazy($,"bO","$get$bO",function(){return[]})
lazy($,"hV","$get$hV",function(){return P.jp(P.p,P.aY)})
lazy($,"bQ","$get$bQ",function(){return P.jp(P.v,P.aY)})
lazy($,"jv","$get$jv",function(){return new G.d9(1281,0,4294967295)})
lazy($,"jb","$get$jb",function(){return new G.bE(1281,1281,1281)})
lazy($,"ja","$get$ja",function(){return new G.bE(32774,770,769)})
lazy($,"R","$get$R",function(){return P.aJ(["cBlendEquation",new G.i("","",0),"cDepthWrite",new G.i("","",0),"cDepthTest",new G.i("","",0),"cStencilFunc",new G.i("","",0),"tPosition",new G.i("vec3","",0),"tSpeed",new G.i("vec3","",0),"tForce",new G.i("vec3","",0),"aColors",new G.i("vec3","per vertex color",0),"aColorAlpha",new G.i("vec4","per vertex color",0),"aPosition",new G.i("vec3","vertex coordinates",0),"aTexUV",new G.i("vec2","texture uvs",0),"aNormal",new G.i("vec3","vertex normals",0),"aBinormal",new G.i("vec3","vertex binormals",0),"aCenter",new G.i("vec4","for wireframe",0),"aPointSize",new G.i("float","",0),"aBoneIndex",new G.i("vec4","",0),"aBoneWeight",new G.i("vec4","",0),"aTangent",new G.i("vec3","vertex tangents",0),"aBitangent",new G.i("vec3","vertex btangents",0),"iaRotation",new G.i("vec4","",0),"iaTranslation",new G.i("vec3","",0),"iaScale",new G.i("vec3","",0),"vColor",new G.i("vec3","per vertex color",0),"vTexUV",new G.i("vec2","",0),"vLightWeighting",new G.i("vec3","",0),"vNormal",new G.i("vec3","",0),"vPosition",new G.i("vec3","vertex coordinates",0),"vPositionFromLight",new G.i("vec4","delta from light",0),"vCenter",new G.i("vec4","for wireframe",0),"vDepth",new G.i("float","depth for shadowmaps",0),"uTransformationMatrix",new G.i("mat4","",0),"uModelMatrix",new G.i("mat4","",0),"uNormalMatrix",new G.i("mat3","",0),"uConvolutionMatrix",new G.i("mat3","",0),"uPerspectiveViewMatrix",new G.i("mat4","",0),"uLightPerspectiveViewMatrix",new G.i("mat4","",0),"uShadowMap",new G.i("sampler2DShadow","",0),"uTexture",new G.i("sampler2D","",0),"uTexture2",new G.i("sampler2D","",0),"uTexture3",new G.i("sampler2D","",0),"uTexture4",new G.i("sampler2D","",0),"uSpecularMap",new G.i("sampler2D","",0),"uNormalMap",new G.i("sampler2D","",0),"uBumpMap",new G.i("sampler2D","",0),"uDepthMap",new G.i("sampler2D","",0),"uCubeTexture",new G.i("samplerCube","",0),"uAnimationTable",new G.i("sampler2D","",0),"uTime",new G.i("float","time since program start in sec",0),"uCameraNear",new G.i("float","",0),"uCameraFar",new G.i("float","",0),"uFogNear",new G.i("float","",0),"uFogFar",new G.i("float","",0),"uPointSize",new G.i("float","",0),"uScale",new G.i("float","",0),"uAngle",new G.i("float","",0),"uCanvasSize",new G.i("vec2","",0),"uCenter2",new G.i("vec2","",0),"uCutOff",new G.i("float","",0),"uShininess",new G.i("float","",0),"uShadowBias",new G.i("float","",0),"uOpacity",new G.i("float","",0),"uColor",new G.i("vec3","",0),"uAmbientDiffuse",new G.i("vec3","",0),"uColorEmissive",new G.i("vec3","",0),"uColorSpecular",new G.i("vec3","",0),"uColorDiffuse",new G.i("vec3","",0),"uColorAlpha",new G.i("vec4","",0),"uColorAlpha2",new G.i("vec4","",0),"uEyePosition",new G.i("vec3","",0),"uMaterial",new G.i("mat4","",0),"uRange",new G.i("vec2","",0),"uDirection",new G.i("vec2","",0),"uBoneMatrices",new G.i("mat4","",128),"uLightDescs",new G.i("mat4","",4),"uLightCount",new G.i("float","",0),"uLightTypes",new G.i("float","",4),"uBumpScale",new G.i("float","for bump maps",0),"uNormalScale",new G.i("float","for normal maps",0)])})
lazy($,"jL","$get$jL",function(){return C.q})
lazy($,"kf","$get$kf",function(){var t=new G.ab("PointSpritesV",null,[],[],[],[],0,P.E())
t.aj(["aPosition"])
t.P(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.R(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"ke","$get$ke",function(){var t=new G.ab("PointSpritesF",null,[],[],[],[],0,P.E())
t.P(["uTexture"])
t.R(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return t})
lazy($,"jN","$get$jN",function(){return[T.bF(0,0,1),T.bF(0,0,-1),T.bF(0,1,0),T.bF(0,-1,0),T.bF(1,0,0),T.bF(-1,0,0)]})
lazy($,"ka","$get$ka",function(){var t=new G.ab("Plasma1V",null,[],[],[],[],0,P.E())
t.aj(["aPosition","aTexUV"])
t.P(["uPerspectiveViewMatrix","uModelMatrix"])
t.a_(["vTexUV"])
t.R(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"k7","$get$k7",function(){var t=new G.ab("Plasma1F",null,[],[],[],[],0,P.E())
t.a_(["vTexUV"])
t.P(["uTime"])
t.R(["    #define PI 3.1415926535897932384626433832795\n    float u_time = uTime * 5.0;\n    vec2 u_k = vec2(10.0,10.0);\n\n    float v = 0.0;\n    vec2 c = vTexUV * u_k - u_k/2.0;\n    v += sin((c.x+u_time));\n    v += sin((c.y+u_time)/2.0);\n    v += sin((c.x+c.y+u_time)/2.0);\n    c += u_k/2.0 * vec2(sin(u_time/3.0), cos(u_time/2.0));\n    v += sin(sqrt(c.x*c.x+c.y*c.y+1.0)+u_time);\n    v = v / 2.0;\n    vec3 col1 = vec3(1.0, sin(PI*v), cos(PI*v));\n    vec3 col2 = vec3(sin(PI*v), cos(PI*v), -1.0);\n    vec3 col = mix(col1, col2, sin(u_time)*.5+.5);\n    oFragColor = vec4(col*.5 + .5, 1.0);\n"])
return t})
lazy($,"kb","$get$kb",function(){var t=new G.ab("Plasma2V",null,[],[],[],[],0,P.E())
t.aj(["aPosition","aTexUV"])
t.P(["uPerspectiveViewMatrix","uModelMatrix"])
t.a_(["vTexUV"])
t.R(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"k8","$get$k8",function(){var t=new G.ab("Plasma2F",null,[],[],[],[],0,P.E())
t.a_(["vTexUV"])
t.P(["uTime"])
t.R(["    float x = vTexUV.x;\n    float y = vTexUV.y;\n    float v = sin(x * cos(uTime/15.0) * 120.0) +\n              cos(y * sin(uTime/10.0) * 120.0) +\n              sin(sqrt(y * y + x * x) * 40.0);\n    oFragColor = vec4(1, v,1,1);\n  "])
return t})
lazy($,"kc","$get$kc",function(){var t=new G.ab("Plasma3V",null,[],[],[],[],0,P.E())
t.aj(["aPosition","aTexUV"])
t.P(["uPerspectiveViewMatrix","uModelMatrix"])
t.a_(["vTexUV"])
t.R(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"k9","$get$k9",function(){var t=new G.ab("Plasma3F",null,[],[],[],[],0,P.E())
t.a_(["vTexUV"])
t.P(["uTime"])
t.R(["    float x = vTexUV.x*1000.0; // gl_FragCoord.x;\n    float y = vTexUV.y*1000.0; // gl_FragCoord.y;\n    float time = uTime;\n    float mov0 = x+y+cos(sin(time)*2.)*100.+sin(x/100.)*1000.;\n    float mov1 = y / 720.0 / 0.2 + time;\n    float mov2 = x / 1280.0 / 0.2;\n    float c1 = abs(sin(mov1+time)/2.+mov2/2.-mov1-mov2+time);\n    float c2 = abs(sin(c1+sin(mov0/1000.+time)+sin(y/40.+time)+sin((x+y)/100.)*3.));\n    float c3 = abs(sin(c2+cos(mov1+mov2+c2)+cos(mov2)+sin(x/1000.)));\n    oFragColor = vec4( c1,c2,c3,1.0);\n  "])
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
mangledGlobalNames:{p:"int",L:"double",T:"num",v:"String",aY:"bool",aM:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,v:true,args:[P.r],opt:[P.bz]},{func:1,ret:P.p,args:[P.G,P.G]},{func:1,ret:P.v,args:[W.f]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,Range:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bs,ArrayBufferView:H.b5,DataView:H.eG,Float32Array:H.cV,Float64Array:H.eH,Int16Array:H.eI,Int32Array:H.eJ,Int8Array:H.eK,Uint16Array:H.eL,Uint32Array:H.eM,Uint8ClampedArray:H.cZ,CanvasPixelArray:H.cZ,Uint8Array:H.eN,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLDivElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLImageElement:W.l,HTMLKeygenElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMenuItemElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTableElement:W.l,HTMLTableRowElement:W.l,HTMLTableSectionElement:W.l,HTMLTemplateElement:W.l,HTMLTextAreaElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,HTMLAnchorElement:W.dq,HTMLAreaElement:W.dr,AudioTrack:W.Y,AudioTrackList:W.du,Blob:W.bY,HTMLBodyElement:W.dv,HTMLCanvasElement:W.bZ,CanvasGradient:W.c_,CanvasRenderingContext2D:W.c0,CDATASection:W.aD,CharacterData:W.aD,Comment:W.aD,ProcessingInstruction:W.aD,Text:W.aD,CompositorWorker:W.dz,CSSCharsetRule:W.z,CSSFontFaceRule:W.z,CSSGroupingRule:W.z,CSSImportRule:W.z,CSSKeyframeRule:W.z,MozCSSKeyframeRule:W.z,WebKitCSSKeyframeRule:W.z,CSSKeyframesRule:W.z,MozCSSKeyframesRule:W.z,WebKitCSSKeyframesRule:W.z,CSSMediaRule:W.z,CSSNamespaceRule:W.z,CSSPageRule:W.z,CSSRule:W.z,CSSStyleRule:W.z,CSSSupportsRule:W.z,CSSViewportRule:W.z,CSSStyleDeclaration:W.bf,MSStyleCSSProperties:W.bf,CSS2Properties:W.bf,DataTransferItemList:W.dC,DeviceAcceleration:W.dD,XMLDocument:W.bh,Document:W.bh,DocumentFragment:W.c2,ShadowRoot:W.c2,DOMException:W.dE,DOMPoint:W.dF,DOMPointReadOnly:W.c3,DOMRectReadOnly:W.c4,DOMStringList:W.dG,DOMTokenList:W.dH,Element:W.c5,AnimationEvent:W.k,AnimationPlayerEvent:W.k,ApplicationCacheErrorEvent:W.k,AutocompleteErrorEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceLightEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,GamepadEvent:W.k,GeofencingEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RelatedEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCIceCandidateEvent:W.k,RTCPeerConnectionIceEvent:W.k,SecurityPolicyViolationEvent:W.k,ServicePortConnectEvent:W.k,ServiceWorkerMessageEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BatteryManager:W.f,CanvasCaptureMediaStreamTrack:W.f,CrossOriginServiceWorkerClient:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MessagePort:W.f,MIDIAccess:W.f,NetworkInformation:W.f,Notification:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationReceiver:W.f,PresentationRequest:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,ServicePortCollection:W.f,ServiceWorkerContainer:W.f,ServiceWorkerRegistration:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioContext:W.f,webkitAudioContext:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioSourceNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OfflineAudioContext:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.Z,FileList:W.e4,FileWriter:W.e5,HTMLFormElement:W.ea,Gamepad:W.a_,History:W.ee,HTMLCollection:W.bo,HTMLFormControlsCollection:W.bo,HTMLOptionsCollection:W.bo,HTMLDocument:W.c8,XMLHttpRequest:W.ef,XMLHttpRequestUpload:W.bp,XMLHttpRequestEventTarget:W.bp,HTMLInputElement:W.ej,KeyboardEvent:W.aI,Location:W.ex,MediaList:W.eC,MIDIOutput:W.eD,MIDIInput:W.br,MIDIPort:W.br,MimeType:W.a0,MimeTypeArray:W.eE,PointerEvent:W.N,MouseEvent:W.N,DragEvent:W.N,Navigator:W.eO,Attr:W.y,Node:W.y,NodeList:W.d0,RadioNodeList:W.d0,Path2D:W.eV,Perspective:W.eY,Plugin:W.a1,PluginArray:W.f_,PositionValue:W.f2,PresentationConnection:W.f3,Rotation:W.fe,RTCDataChannel:W.d5,DataChannel:W.d5,HTMLSelectElement:W.by,SharedWorker:W.fj,SourceBuffer:W.a2,SourceBufferList:W.fk,SpeechGrammar:W.a3,SpeechGrammarList:W.fm,SpeechRecognitionResult:W.a4,Storage:W.fp,CSSStyleSheet:W.U,StyleSheet:W.U,CalcLength:W.ac,KeywordValue:W.ac,LengthValue:W.ac,NumberValue:W.ac,SimpleLength:W.ac,TransformValue:W.ac,StyleValue:W.ac,TextTrack:W.a5,TextTrackCue:W.V,VTTCue:W.V,TextTrackCueList:W.fA,TextTrackList:W.fB,TimeRanges:W.fD,Touch:W.a6,TouchEvent:W.aP,TouchList:W.fH,TrackDefaultList:W.fI,Matrix:W.b7,Skew:W.b7,TransformComponent:W.b7,Translation:W.fK,CompositionEvent:W.aw,FocusEvent:W.aw,TextEvent:W.aw,SVGZoomEvent:W.aw,UIEvent:W.aw,URL:W.fP,VideoTrackList:W.fR,VTTRegionList:W.fU,WebSocket:W.fV,WheelEvent:W.aR,Window:W.bG,DOMWindow:W.bG,Worker:W.fX,CompositorWorkerGlobalScope:W.aS,DedicatedWorkerGlobalScope:W.aS,ServiceWorkerGlobalScope:W.aS,SharedWorkerGlobalScope:W.aS,WorkerGlobalScope:W.aS,ClientRect:W.h3,ClientRectList:W.dd,DOMRectList:W.dd,CSSRuleList:W.h5,DocumentType:W.h6,DOMRect:W.h7,GamepadList:W.hn,HTMLFrameSetElement:W.ho,NamedNodeMap:W.dg,MozNamedAttrMap:W.dg,ServiceWorker:W.hG,SpeechRecognitionResultList:W.hH,StyleSheetList:W.hI,WorkerLocation:W.hL,WorkerNavigator:W.hM,SVGAElement:P.dp,SVGAnimateElement:P.aC,SVGAnimateMotionElement:P.aC,SVGAnimateTransformElement:P.aC,SVGAnimationElement:P.aC,SVGSetElement:P.aC,SVGFEBlendElement:P.dM,SVGFEColorMatrixElement:P.dN,SVGFEComponentTransferElement:P.dO,SVGFECompositeElement:P.dP,SVGFEConvolveMatrixElement:P.dQ,SVGFEDiffuseLightingElement:P.dR,SVGFEDisplacementMapElement:P.dS,SVGFEFloodElement:P.dT,SVGFEGaussianBlurElement:P.dU,SVGFEImageElement:P.dV,SVGFEMergeElement:P.dW,SVGFEMorphologyElement:P.dX,SVGFEOffsetElement:P.dY,SVGFEPointLightElement:P.dZ,SVGFESpecularLightingElement:P.e_,SVGFESpotLightElement:P.e0,SVGFETileElement:P.e1,SVGFETurbulenceElement:P.e2,SVGFilterElement:P.e6,SVGForeignObjectElement:P.e9,SVGCircleElement:P.a9,SVGEllipseElement:P.a9,SVGLineElement:P.a9,SVGPathElement:P.a9,SVGPolygonElement:P.a9,SVGPolylineElement:P.a9,SVGGeometryElement:P.a9,SVGClipPathElement:P.at,SVGDefsElement:P.at,SVGGElement:P.at,SVGSwitchElement:P.at,SVGGraphicsElement:P.at,SVGImageElement:P.eg,SVGLength:P.al,SVGLengthList:P.es,SVGMarkerElement:P.eA,SVGMaskElement:P.eB,SVGNumber:P.am,SVGNumberList:P.eP,SVGPatternElement:P.eW,SVGPoint:P.f0,SVGPointList:P.f1,SVGRect:P.f6,SVGRectElement:P.f7,SVGScriptElement:P.fg,SVGStringList:P.fv,SVGDescElement:P.I,SVGDiscardElement:P.I,SVGFEDistantLightElement:P.I,SVGFEFuncAElement:P.I,SVGFEFuncBElement:P.I,SVGFEFuncGElement:P.I,SVGFEFuncRElement:P.I,SVGFEMergeNodeElement:P.I,SVGMetadataElement:P.I,SVGStopElement:P.I,SVGStyleElement:P.I,SVGTitleElement:P.I,SVGComponentTransferFunctionElement:P.I,SVGElement:P.I,SVGSVGElement:P.fw,SVGSymbolElement:P.fx,SVGTextContentElement:P.d8,SVGTextPathElement:P.fz,SVGTSpanElement:P.bC,SVGTextElement:P.bC,SVGTextPositioningElement:P.bC,SVGTransform:P.an,SVGTransformList:P.fJ,SVGUseElement:P.fQ,SVGViewElement:P.fS,SVGViewSpec:P.fT,SVGLinearGradientElement:P.bI,SVGRadialGradientElement:P.bI,SVGGradientElement:P.bI,SVGCursorElement:P.hD,SVGFEDropShadowElement:P.hE,SVGMPathElement:P.hF,AudioBuffer:P.dt,WebGLRenderingContext:P.fc,WebGL2RenderingContext:P.fd,WebGL2RenderingContextBase:P.hK,SQLResultSetRowList:P.fn})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.cW.$nativeSuperclassTag="ArrayBufferView"
H.bu.$nativeSuperclassTag="ArrayBufferView"
H.bv.$nativeSuperclassTag="ArrayBufferView"
H.cX.$nativeSuperclassTag="ArrayBufferView"
H.bt.$nativeSuperclassTag="ArrayBufferView"
H.bw.$nativeSuperclassTag="ArrayBufferView"
H.cY.$nativeSuperclassTag="ArrayBufferView"
W.bj.$nativeSuperclassTag="EventTarget"
W.bl.$nativeSuperclassTag="EventTarget"
W.bk.$nativeSuperclassTag="EventTarget"
W.bm.$nativeSuperclassTag="EventTarget"
W.bi.$nativeSuperclassTag="EventTarget"
W.bn.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.kh(Q.kd(),b)},[])
else (function(b){H.kh(Q.kd(),b)})([])})})()