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
a[c]=function(){a[c]=function(){H.kS(b)}
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
return d?function(e){if(t===null)t=H.hQ(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.hQ(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.hQ(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={hF:function hF(a){this.a=a},
hJ:function(a,b,c,d){if(!!a.$isc)return new H.dh(a,b,[c,d])
return new H.cq(a,b,[c,d])},
hD:function(){return new P.bi("No element")},
jU:function(){return new P.bi("Too few elements")},
cE:function(a,b,c,d){if(c-b<=32)H.k7(a,b,c,d)
else H.k6(a,b,c,d)},
k7:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.a3(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.a4(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
k6:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.M(t+1,6)
r=a3+s
q=a4-s
p=C.b.M(a3+a4,2)
o=p-s
n=p+s
t=J.a3(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.a4(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.a4(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.a4(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.a4(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.a4(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.a4(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.a4(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.a4(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.a4(a5.$2(j,i),0)){h=i
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
H.cE(a2,a3,g-2,a5)
H.cE(a2,f+2,a4,a5)
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
break}}H.cE(a2,g,f,a5)}else H.cE(a2,g,f,a5)},
c:function c(){},
aN:function aN(){},
cp:function cp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cq:function cq(a,b,c){this.a=a
this.b=b
this.$ti=c},
dh:function dh(a,b,c){this.a=a
this.b=b
this.$ti=c},
e2:function e2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cr:function cr(a,b,c){this.a=a
this.b=b
this.$ti=c},
bG:function bG(){},
cO:function(a,b){var t=a.a_(b)
if(!u.globalState.d.cy)u.globalState.f.a4()
return t},
ho:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
j3:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.v(s).$isb)throw H.e(P.i7("Arguments to main must be a List: "+H.i(s)))
u.globalState=new H.fM(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$ij()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.fs(P.hI(null,H.aG),0)
r=P.n
s.sd5(new H.a8(0,null,null,null,null,null,0,[r,H.aF]))
s.sd7(new H.a8(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.fL()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.jP,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.kj)}if(u.globalState.x)return
s=u.globalState.a++
q=P.ay(null,null,null,r)
p=new H.aP(0,null,!1)
o=new H.aF(s,new H.a8(0,null,null,null,null,null,0,[r,H.aP]),q,u.createNewIsolate(),p,new H.a6(H.hs()),new H.a6(H.hs()),!1,!1,[],P.ay(null,null,null,null),null,null,!1,!0,P.ay(null,null,null,null))
q.l(0,0)
o.aS(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.aV(a,{func:1,args:[,]}))o.a_(new H.ht(t,a))
else if(H.aV(a,{func:1,args:[,,]}))o.a_(new H.hu(t,a))
else o.a_(a)
u.globalState.f.a4()},
kj:function(a){var t=P.ax(["command","print","msg",a])
return new H.a2(!0,P.bq(null,P.n)).D(t)},
jR:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.jS()
return},
jS:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.p("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.p('Cannot extract URI from "'+t+'"'))},
jP:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.aD(!0,[]).I(b.data)
s=J.a3(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.kI(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aD(!0,[]).I(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aD(!0,[]).I(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.n
j=P.ay(null,null,null,k)
i=new H.aP(0,null,!1)
h=new H.aF(s,new H.a8(0,null,null,null,null,null,0,[k,H.aP]),j,u.createNewIsolate(),i,new H.a6(H.hs()),new H.a6(H.hs()),!1,!1,[],P.ay(null,null,null,null),null,null,!1,!0,P.ay(null,null,null,null))
j.l(0,0)
h.aS(0,i)
u.globalState.f.a.G(0,new H.aG(h,new H.dQ(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.a4()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.jt(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.a4()
break
case"close":u.globalState.ch.a3(0,$.$get$ik().h(0,a))
a.terminate()
u.globalState.f.a4()
break
case"log":H.jO(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.ax(["command","print","msg",t])
k=new H.a2(!0,P.bq(null,P.n)).D(k)
s.toString
self.postMessage(k)}else P.ao(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
jO:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.ax(["command","log","msg",a])
r=new H.a2(!0,P.bq(null,P.n)).D(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.aq(q)
t=H.am(q)
s=P.bF(t)
throw H.e(s)}},
jQ:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.ip=$.ip+("_"+s)
$.iq=$.iq+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.B(0,["spawned",new H.aR(s,r),q,t.r])
r=new H.dR(a,b,c,d,t)
if(e){t.ba(q,q)
u.globalState.f.a.G(0,new H.aG(t,r,"start isolate"))}else r.$0()},
k9:function(a,b){var t=new H.eX(!0,!1,null)
t.ci(a,b)
return t},
kk:function(a){return new H.aD(!0,[]).I(new H.a2(!1,P.bq(null,P.n)).D(a))},
ht:function ht(a,b){this.a=a
this.b=b},
hu:function hu(a,b){this.a=a
this.b=b},
fM:function fM(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
aF:function aF(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
fH:function fH(a,b){this.a=a
this.b=b},
fs:function fs(a,b){this.a=a
this.b=b},
ft:function ft(a){this.a=a},
aG:function aG(a,b,c){this.a=a
this.b=b
this.c=c},
fL:function fL(){},
dQ:function dQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dR:function dR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fm:function fm(){},
aR:function aR(a,b){this.b=a
this.a=b},
fN:function fN(a,b){this.a=a
this.b=b},
br:function br(a,b,c){this.b=a
this.c=b
this.a=c},
aP:function aP(a,b,c){this.a=a
this.b=b
this.c=c},
eX:function eX(a,b,c){this.a=a
this.b=b
this.c=c},
eY:function eY(a,b){this.a=a
this.b=b},
eZ:function eZ(a,b){this.a=a
this.b=b},
a6:function a6(a){this.a=a},
a2:function a2(a,b){this.a=a
this.b=b},
aD:function aD(a,b){this.a=a
this.b=b},
kE:function(a){return u.types[a]},
kK:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.v(a).$ism},
i:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aX(a)
if(typeof t!=="string")throw H.e(H.af(a))
return t},
k4:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.ey(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aA:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
cA:function(a){var t,s,r,q,p,o,n,m
t=J.v(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.n||!!J.v(a).$isaB){p=C.j(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.d.ag(q,0)===36)q=C.d.c1(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.cQ(H.hc(a),0,null),u.mangledGlobalNames)},
eu:function(a){return"Instance of '"+H.cA(a)+"'"},
I:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
k2:function(a){return a.b?H.I(a).getUTCFullYear()+0:H.I(a).getFullYear()+0},
k0:function(a){return a.b?H.I(a).getUTCMonth()+1:H.I(a).getMonth()+1},
jX:function(a){return a.b?H.I(a).getUTCDate()+0:H.I(a).getDate()+0},
jY:function(a){return a.b?H.I(a).getUTCHours()+0:H.I(a).getHours()+0},
k_:function(a){return a.b?H.I(a).getUTCMinutes()+0:H.I(a).getMinutes()+0},
k1:function(a){return a.b?H.I(a).getUTCSeconds()+0:H.I(a).getSeconds()+0},
jZ:function(a){return a.b?H.I(a).getUTCMilliseconds()+0:H.I(a).getMilliseconds()+0},
io:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.af(a))
return a[b]},
F:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ag(!0,b,"index",null)
t=J.cW(a)
if(b<0||C.b.bP(b,t))return P.x(b,a,"index",null,t)
return P.ev(b,"index",null)},
af:function(a){return new P.ag(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.cz()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.j4})
t.name=""}else t.toString=H.j4
return t},
j4:function(){return J.aX(this.dartException)},
z:function(a){throw H.e(a)},
aJ:function(a){throw H.e(new P.a_(a))},
ad:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.f3(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
f4:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
iz:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
hH:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.dW(a,s,t?null:b.receiver)},
aq:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.hv(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.ao(r,16)&8191)===10)switch(q){case 438:return t.$1(H.hH(H.i(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.i(s)+" (Error "+q+")"
return t.$1(new H.cy(p,null))}}if(a instanceof TypeError){o=$.$get$it()
n=$.$get$iu()
m=$.$get$iv()
l=$.$get$iw()
k=$.$get$iA()
j=$.$get$iB()
i=$.$get$iy()
$.$get$ix()
h=$.$get$iD()
g=$.$get$iC()
f=o.E(s)
if(f!=null)return t.$1(H.hH(s,f))
else{f=n.E(s)
if(f!=null){f.method="call"
return t.$1(H.hH(s,f))}else{f=m.E(s)
if(f==null){f=l.E(s)
if(f==null){f=k.E(s)
if(f==null){f=j.E(s)
if(f==null){f=i.E(s)
if(f==null){f=l.E(s)
if(f==null){f=h.E(s)
if(f==null){f=g.E(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.cy(s,f==null?null:f.method))}}return t.$1(new H.f7(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cF()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ag(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cF()
return a},
am:function(a){var t
if(a==null)return new H.cN(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.cN(a,null)},
kO:function(a){if(a==null||typeof a!='object')return J.a5(a)
else return H.aA(a)},
kB:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
kJ:function(a,b,c,d,e,f,g){switch(c){case 0:return H.cO(b,new H.hj(a))
case 1:return H.cO(b,new H.hk(a,d))
case 2:return H.cO(b,new H.hl(a,d,e))
case 3:return H.cO(b,new H.hm(a,d,e,f))
case 4:return H.cO(b,new H.hn(a,d,e,f,g))}throw H.e(P.bF("Unsupported number of arguments for wrapped closure"))},
cP:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.kJ)
a.$identity=t
return t},
jF:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.v(c).$isb){t.$reflectionInfo=c
r=H.k4(t).r}else r=c
q=d?Object.create(new H.eN().constructor.prototype):Object.create(new H.aY(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.ie(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.kE,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.ib:H.hA
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.ie(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
jC:function(a,b,c,d){var t=H.hA
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
ie:function(a,b,c){var t,s,r,q
if(c)return H.jE(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.jC(s,b==null?r!=null:b!==r,t,b)
return q},
jD:function(a,b,c,d){var t,s
t=H.hA
s=H.ib
switch(b?-1:a){case 0:throw H.e(new H.eD("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
jE:function(a,b){var t,s,r,q
H.jB()
t=$.ia
if(t==null){t=H.i9("receiver")
$.ia=t}s=b.$stubName
r=b.length
q=a[s]
t=H.jD(r,b==null?q!=null:b!==q,s,b)
return t},
hQ:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.v(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.jF(a,b,t,!!d,e,f)},
hA:function(a){return a.a},
ib:function(a){return a.c},
jB:function(){var t=$.ic
if(t==null){t=H.i9("self")
$.ic=t}return t},
i9:function(a){var t,s,r,q,p
t=new H.aY("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
lb:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aj(a,"String"))},
la:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aj(a,"num"))},
kx:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aj(a,"bool"))},
kI:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aj(a,"int"))},
kQ:function(a,b){throw H.e(H.aj(a,b.substring(3)))},
kP:function(a,b){var t=J.a3(b)
throw H.e(H.id(H.cA(a),t.aJ(b,3,t.gj(b))))},
j_:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.v(a)[b])return a
H.kQ(a,b)},
an:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.v(a)[b]
else t=!0
if(t)return a
H.kP(a,b)},
l9:function(a){if(a==null)return a
if(!!J.v(a).$isb)return a
throw H.e(H.aj(a,"List"))},
iR:function(a){var t=J.v(a)
return"$S" in t?t.$S():null},
aV:function(a,b){var t
if(a==null)return!1
t=H.iR(a)
return t==null?!1:H.j0(t,b)},
l7:function(a,b){var t,s
if(a==null)return a
if($.hN)return a
$.hN=!0
try{if(H.aV(a,b))return a
t=H.ap(b,null)
s=H.aj(a,t)
throw H.e(s)}finally{$.hN=!1}},
aj:function(a,b){return new H.f5("type '"+H.cA(a)+"' is not a subtype of type '"+b+"'")},
id:function(a,b){return new H.d4("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
aI:function(a){if(!0===a)return!1
if(!!J.v(a).$ishC)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.aj(a,"bool"))},
aU:function(a){throw H.e(new H.fh(a))},
d:function(a){if(H.aI(a))throw H.e(new P.bx(null))},
kS:function(a){throw H.e(new P.d8(a))},
hs:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
iU:function(a){return u.getIsolateTag(a)},
E:function(a){return new H.ak(a,null)},
H:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
hc:function(a){if(a==null)return
return a.$ti},
iV:function(a,b){return H.hW(a["$as"+H.i(b)],H.hc(a))},
al:function(a,b,c){var t,s
t=H.iV(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
bw:function(a,b){var t,s
t=H.hc(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
ap:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.cQ(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.i(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.ap(t,b)
return H.kl(a,b)}return"unknown-reified-type"},
kl:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.ap(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.ap(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.ap(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.kA(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.ap(l[j],b)+(" "+H.i(j))}q+="}"}return"("+q+") => "+t},
cQ:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bj("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.ap(o,c)}return p?"":"<"+s.k(0)+">"},
hd:function(a){var t,s
if(a instanceof H.aL){t=H.iR(a)
if(t!=null)return H.ap(t,null)}s=J.v(a).constructor.name
if(a==null)return s
return s+H.cQ(a.$ti,0,null)},
hW:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.hU(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.hU(a,null,b)
return b},
h7:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.hc(a)
s=J.v(a)
if(s[b]==null)return!1
return H.iP(H.hW(s[d],t),c)},
cR:function(a,b,c,d){if(a==null)return a
if(H.h7(a,b,c,d))return a
throw H.e(H.id(H.cA(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.cQ(c,0,null),u.mangledGlobalNames)))},
l4:function(a,b,c,d){if(a==null)return a
if(H.h7(a,b,c,d))return a
throw H.e(H.aj(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.cQ(c,0,null),u.mangledGlobalNames)))},
iP:function(a,b){var t,s,r,q,p
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
if(!H.P(r,b[p]))return!1}return!0},
l5:function(a,b,c){return H.hU(a,b,H.iV(b,c))},
P:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="az")return!0
if('func' in b)return H.j0(a,b)
if('func' in a)return b.name==="hC"||b.name==="o"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.d(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.d(!0)
q=b[0]}else q=b
if(q!==s){p=H.ap(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.iP(H.hW(o,t),r)},
iO:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.P(o,n)||H.P(n,o)))return!1}return!0},
kt:function(a,b){var t,s,r,q,p,o
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
if(!(H.P(p,o)||H.P(o,p)))return!1}return!0},
j0:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.d('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.P(t,s)||H.P(s,t)))return!1}r=a.args
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
if(n===m){if(!H.iO(r,q,!1))return!1
if(!H.iO(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
g=r[h]
H.d(i)
f=q[h]
if(!(H.P(g,f)||H.P(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=q[e]
if(!(H.P(g,f)||H.P(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=o[e]
if(!(H.P(g,f)||H.P(f,g)))return!1}}return H.kt(a.named,b.named)},
hU:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
lc:function(a){var t=$.hS
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
l8:function(a){return H.aA(a)},
l6:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
kL:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.o))
t=$.hS.$1(a)
s=$.ha[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.hi[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.iN.$2(a,t)
if(t!=null){s=$.ha[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.hi[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.hV(r)
$.ha[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.hi[t]=r
return r}if(p==="-"){o=H.hV(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.j1(a,r)
if(p==="*")throw H.e(new P.cH(t))
if(u.leafTags[t]===true){o=H.hV(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.j1(a,r)},
j1:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.hq(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
hV:function(a){return J.hq(a,!1,null,!!a.$ism)},
kN:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.hq(t,!1,null,!!t.$ism)
else return J.hq(t,c,null,null)},
kG:function(){if(!0===$.hT)return
$.hT=!0
H.kH()},
kH:function(){var t,s,r,q,p,o,n,m
$.ha=Object.create(null)
$.hi=Object.create(null)
H.kF()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.j2.$1(p)
if(o!=null){n=H.kN(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
kF:function(){var t,s,r,q,p,o,n
t=C.r()
t=H.aT(C.o,H.aT(C.u,H.aT(C.i,H.aT(C.i,H.aT(C.t,H.aT(C.p,H.aT(C.q(C.j),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.hS=new H.hf(p)
$.iN=new H.hg(o)
$.j2=new H.hh(n)},
aT:function(a,b){return a(b)||b},
ey:function ey(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
f3:function f3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cy:function cy(a,b){this.a=a
this.b=b},
dW:function dW(a,b,c){this.a=a
this.b=b
this.c=c},
f7:function f7(a){this.a=a},
hv:function hv(a){this.a=a},
cN:function cN(a,b){this.a=a
this.b=b},
hj:function hj(a){this.a=a},
hk:function hk(a,b){this.a=a
this.b=b},
hl:function hl(a,b,c){this.a=a
this.b=b
this.c=c},
hm:function hm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hn:function hn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
aL:function aL(){},
eS:function eS(){},
eN:function eN(){},
aY:function aY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f5:function f5(a){this.a=a},
d4:function d4(a){this.a=a},
eD:function eD(a){this.a=a},
fh:function fh(a){this.a=a},
ak:function ak(a,b){this.a=a
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
dV:function dV(a){this.a=a},
dY:function dY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dZ:function dZ(a,b){this.a=a
this.$ti=b},
e_:function e_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hf:function hf(a){this.a=a},
hg:function hg(a){this.a=a},
hh:function hh(a){this.a=a},
ae:function(a){return a},
h3:function(a){var t,s,r
if(!!J.v(a).$isk)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bc:function bc(){},
aO:function aO(){},
eb:function eb(){},
ct:function ct(){},
cu:function cu(){},
cv:function cv(){},
cs:function cs(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
cw:function cw(){},
ei:function ei(){},
bd:function bd(){},
be:function be(){},
bf:function bf(){},
bg:function bg(){},
kA:function(a){var t=H.H(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
hr:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
v:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cn.prototype
return J.dU.prototype}if(typeof a=="string")return J.av.prototype
if(a==null)return J.co.prototype
if(typeof a=="boolean")return J.dT.prototype
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aw.prototype
return a}if(a instanceof P.o)return a
return J.hb(a)},
hq:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hb:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.hT==null){H.kG()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.cH("Return interceptor for "+H.i(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$hG()]
if(p!=null)return p
p=H.kL(a)
if(p!=null)return p
if(typeof a=="function")return C.v
s=Object.getPrototypeOf(a)
if(s==null)return C.k
if(s===Object.prototype)return C.k
if(typeof q=="function"){Object.defineProperty(q,$.$get$hG(),{value:C.f,enumerable:false,writable:true,configurable:true})
return C.f}return C.f},
a3:function(a){if(typeof a=="string")return J.av.prototype
if(a==null)return a
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aw.prototype
return a}if(a instanceof P.o)return a
return J.hb(a)},
hR:function(a){if(a==null)return a
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aw.prototype
return a}if(a instanceof P.o)return a
return J.hb(a)},
iT:function(a){if(typeof a=="number")return J.b9.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.aB.prototype
return a},
kC:function(a){if(typeof a=="number")return J.b9.prototype
if(typeof a=="string")return J.av.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.aB.prototype
return a},
kD:function(a){if(typeof a=="string")return J.av.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.aB.prototype
return a},
l:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aw.prototype
return a}if(a instanceof P.o)return a
return J.hb(a)},
A:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.v(a).w(a,b)},
a4:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.iT(a).ad(a,b)},
j5:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.iT(a).ae(a,b)},
aW:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kK(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a3(a).h(a,b)},
hX:function(a,b){return J.kD(a).ag(a,b)},
hY:function(a,b){return J.l(a).b9(a,b)},
hZ:function(a,b,c){return J.l(a).bb(a,b,c)},
j6:function(a,b){return J.l(a).cF(a,b)},
cS:function(a,b,c){return J.l(a).bc(a,b,c)},
i_:function(a,b,c){return J.l(a).bd(a,b,c)},
cT:function(a,b){return J.l(a).cI(a,b)},
j7:function(a,b){return J.l(a).be(a,b)},
j8:function(a,b,c){return J.l(a).bf(a,b,c)},
i0:function(a,b,c,d){return J.l(a).bg(a,b,c,d)},
j9:function(a,b,c,d,e){return J.l(a).bh(a,b,c,d,e)},
ja:function(a,b){return J.kC(a).R(a,b)},
hw:function(a){return J.l(a).bj(a)},
jb:function(a){return J.l(a).bk(a)},
jc:function(a){return J.l(a).cL(a)},
jd:function(a,b){return J.l(a).bm(a,b)},
je:function(a,b){return J.l(a).bn(a,b)},
jf:function(a,b,c,d){return J.l(a).bo(a,b,c,d)},
jg:function(a,b,c,d,e){return J.l(a).cR(a,b,c,d,e)},
jh:function(a,b,c,d,e){return J.l(a).bp(a,b,c,d,e)},
ji:function(a,b,c,d,e,f){return J.l(a).cS(a,b,c,d,e,f)},
jj:function(a,b){return J.hR(a).p(a,b)},
cU:function(a,b){return J.l(a).bq(a,b)},
jk:function(a,b){return J.l(a).br(a,b)},
jl:function(a){return J.l(a).cT(a)},
a5:function(a){return J.v(a).gu(a)},
cV:function(a){return J.hR(a).gA(a)},
cW:function(a){return J.a3(a).gj(a)},
jm:function(a){return J.v(a).gv(a)},
jn:function(a){return J.l(a).gbN(a)},
hx:function(a){return J.l(a).gm(a)},
hy:function(a){return J.l(a).gn(a)},
i1:function(a){return J.l(a).gJ(a)},
jo:function(a){return J.l(a).ac(a)},
jp:function(a,b){return J.l(a).az(a,b)},
jq:function(a,b,c){return J.l(a).aA(a,b,c)},
i2:function(a,b,c){return J.l(a).aD(a,b,c)},
jr:function(a,b){return J.l(a).bu(a,b)},
js:function(a,b){return J.hR(a).bw(a,b)},
jt:function(a,b){return J.l(a).B(a,b)},
ju:function(a,b,c,d){return J.l(a).aI(a,b,c,d)},
aX:function(a){return J.v(a).k(a)},
jv:function(a,b,c,d){return J.l(a).dj(a,b,c,d)},
jw:function(a,b,c){return J.l(a).bC(a,b,c)},
hz:function(a,b,c){return J.l(a).bD(a,b,c)},
i3:function(a,b,c){return J.l(a).bE(a,b,c)},
i4:function(a,b,c){return J.l(a).bF(a,b,c)},
i5:function(a,b,c){return J.l(a).bG(a,b,c)},
jx:function(a,b,c,d){return J.l(a).bH(a,b,c,d)},
jy:function(a,b,c,d){return J.l(a).bI(a,b,c,d)},
jz:function(a,b){return J.l(a).bK(a,b)},
jA:function(a,b,c){return J.l(a).dk(a,b,c)},
i6:function(a,b,c,d,e,f,g){return J.l(a).bM(a,b,c,d,e,f,g)},
a:function a(){},
dT:function dT(){},
co:function co(){},
ba:function ba(){},
eo:function eo(){},
aB:function aB(){},
aw:function aw(){},
au:function au(a){this.$ti=a},
hE:function hE(a){this.$ti=a},
d_:function d_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b9:function b9(){},
cn:function cn(){},
dU:function dU(){},
av:function av(){}},P={
kc:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.ku()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.cP(new P.fj(t),1)).observe(s,{childList:true})
return new P.fi(t,s,r)}else if(self.setImmediate!=null)return P.kv()
return P.kw()},
kd:function(a){++u.globalState.f.b
self.scheduleImmediate(H.cP(new P.fk(a),0))},
ke:function(a){++u.globalState.f.b
self.setImmediate(H.cP(new P.fl(a),0))},
kf:function(a){P.hK(C.h,a)},
ko:function(a,b){if(H.aV(a,{func:1,args:[P.az,P.az]})){b.toString
return a}else{b.toString
return a}},
kg:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.aE))
H.d(b.a===0)
b.a=1
try{a.bB(new P.fw(b),new P.fx(b))}catch(r){t=H.aq(r)
s=H.am(r)
P.kR(new P.fy(b,t,s))}},
iI:function(a,b){var t,s,r,q
H.d(b.a<=1)
for(;t=a.a,s=t===2,s;){H.d(s)
a=a.c}s=b.a
if(t>=4){H.d(s<4)
r=b.c
b.c=null
q=b.X(r)
H.d(b.a<4)
H.d(a.a>=4)
b.a=a.a
b.c=a.c
P.bn(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.b2(q)}},
bn:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.h4(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bn(t.a,b)}s=t.a
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
P.h4(null,null,p,o,s)
return}s=$.y
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.y
H.d(l==null?s!=null:l!==s)
j=$.y
$.y=l
i=j}else i=null
s=b.c
if(s===8)new P.fC(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.fB(r,b,m).$0()}else if((s&2)!==0)new P.fA(t,r,b).$0()
if(i!=null){H.d(!0)
$.y=i}s=r.b
if(!!J.v(s).$isdJ){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.X(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.iI(s,o)
return}}g=b.b
H.d(g.a<4)
h=g.c
g.c=null
b=g.X(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.d(!o)
g.a=4
g.c=p}else{H.d(!o)
g.a=8
g.c=p}t.a=g
s=g}},
kn:function(){var t,s
for(;t=$.aS,t!=null;){$.bt=null
s=t.b
$.aS=s
if(s==null)$.bs=null
t.a.$0()}},
kr:function(){$.hO=!0
try{P.kn()}finally{$.bt=null
$.hO=!1
if($.aS!=null)$.$get$hM().$1(P.iQ())}},
iM:function(a){var t=new P.cI(a,null)
if($.aS==null){$.bs=t
$.aS=t
if(!$.hO)$.$get$hM().$1(P.iQ())}else{$.bs.b=t
$.bs=t}},
kq:function(a){var t,s,r
t=$.aS
if(t==null){P.iM(a)
$.bt=$.bs
return}s=new P.cI(a,null)
r=$.bt
if(r==null){s.b=t
$.bt=s
$.aS=s}else{s.b=r.b
r.b=s
$.bt=s
if(s.b==null)$.bs=s}},
kR:function(a){var t=$.y
if(C.c===t){P.h6(null,null,C.c,a)
return}t.toString
P.h6(null,null,t,t.ar(a))},
ka:function(a,b){var t=$.y
if(t===C.c){t.toString
return P.hK(a,b)}return P.hK(a,t.ar(b))},
hK:function(a,b){var t=C.b.M(a.a,1000)
return H.k9(t<0?0:t,b)},
hL:function(a){var t,s
H.d(a!=null)
t=$.y
H.d(a==null?t!=null:a!==t)
s=$.y
$.y=a
return s},
h4:function(a,b,c,d,e){var t={}
t.a=d
P.kq(new P.h5(t,e))},
iK:function(a,b,c,d){var t,s
if($.y===c)return d.$0()
t=P.hL(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.y=s}},
iL:function(a,b,c,d,e){var t,s
if($.y===c)return d.$1(e)
t=P.hL(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.y=s}},
kp:function(a,b,c,d,e,f){var t,s
if($.y===c)return d.$2(e,f)
t=P.hL(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.y=s}},
h6:function(a,b,c,d){var t=C.c!==c
if(t)d=!(!t||!1)?c.ar(d):c.cG(d)
P.iM(d)},
fj:function fj(a){this.a=a},
fi:function fi(a,b,c){this.a=a
this.b=b
this.c=c},
fk:function fk(a){this.a=a},
fl:function fl(a){this.a=a},
fo:function fo(){},
fZ:function fZ(a,b){this.a=a
this.$ti=b},
cK:function cK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
aE:function aE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fv:function fv(a,b){this.a=a
this.b=b},
fz:function fz(a,b){this.a=a
this.b=b},
fw:function fw(a){this.a=a},
fx:function fx(a){this.a=a},
fy:function fy(a,b,c){this.a=a
this.b=b
this.c=c},
fC:function fC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fD:function fD(a){this.a=a},
fB:function fB(a,b,c){this.a=a
this.b=b
this.c=c},
fA:function fA(a,b,c){this.a=a
this.b=b
this.c=c},
cI:function cI(a,b){this.a=a
this.b=b},
aK:function aK(a,b){this.a=a
this.b=b},
h2:function h2(){},
h5:function h5(a,b){this.a=a
this.b=b},
fP:function fP(){},
fR:function fR(a,b){this.a=a
this.b=b},
fQ:function fQ(a,b){this.a=a
this.b=b},
fS:function fS(a,b){this.a=a
this.b=b},
aa:function(){return new H.a8(0,null,null,null,null,null,0,[null,null])},
ax:function(a){return H.kB(a,new H.a8(0,null,null,null,null,null,0,[null,null]))},
bq:function(a,b){return new P.cL(0,null,null,null,null,null,0,[a,b])},
ki:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
jT:function(a,b,c){var t,s
if(P.hP(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bu()
C.a.l(s,a)
try{P.km(a,t)}finally{H.d(C.a.gav(s)===a)
s.pop()}s=P.is(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
dS:function(a,b,c){var t,s,r
if(P.hP(a))return b+"..."+c
t=new P.bj(b)
s=$.$get$bu()
C.a.l(s,a)
try{r=t
r.a=P.is(r.gP(),a,", ")}finally{H.d(C.a.gav(s)===a)
s.pop()}s=t
s.a=s.gP()+c
s=t.gP()
return s.charCodeAt(0)==0?s:s},
hP:function(a){var t,s
for(t=0;s=$.$get$bu(),t<s.length;++t)if(a===s[t])return!0
return!1},
km:function(a,b){var t,s,r,q,p,o,n,m,l,k
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
ay:function(a,b,c,d){return new P.fI(0,null,null,null,null,null,0,[d])},
jV:function(a,b){var t,s
t=P.ay(null,null,null,b)
for(s=J.cV(a);s.q();)t.l(0,s.gt())
return t},
jW:function(a){var t,s,r
t={}
if(P.hP(a))return"{...}"
s=new P.bj("")
try{C.a.l($.$get$bu(),a)
r=s
r.a=r.gP()+"{"
t.a=!0
a.bt(0,new P.e3(t,s))
t=s
t.a=t.gP()+"}"}finally{t=$.$get$bu()
H.d(C.a.gav(t)===a)
t.pop()}t=s.gP()
return t.charCodeAt(0)==0?t:t},
hI:function(a,b){var t=new P.e0(null,0,0,0,[b])
t.cf(a,b)
return t},
cL:function cL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
fI:function fI(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
fJ:function fJ(a,b,c){this.a=a
this.b=b
this.c=c},
bp:function bp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
fG:function fG(){},
q:function q(){},
e3:function e3(a,b){this.a=a
this.b=b},
e0:function e0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
fK:function fK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
eH:function eH(){},
eG:function eG(){},
is:function(a,b,c){var t=J.cV(b)
if(!t.q())return a
if(c.length===0){do a+=H.i(t.gt())
while(t.q())}else{a+=H.i(t.gt())
for(;t.q();)a=a+c+H.i(t.gt())}return a},
jG:function(a,b){return J.ja(a,b)},
jH:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.i(t)
if(t>=10)return s+"00"+H.i(t)
return s+"000"+H.i(t)},
jI:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bA:function(a){if(a>=10)return""+a
return"0"+a},
hB:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aX(a)
if(typeof a==="string")return JSON.stringify(a)
return P.jJ(a)},
jJ:function(a){var t=J.v(a)
if(!!t.$isaL)return t.k(a)
return H.eu(a)},
i7:function(a){return new P.ag(!1,null,null,a)},
i8:function(a,b,c){return new P.ag(!0,a,b,c)},
ev:function(a,b,c){return new P.cB(null,null,!0,a,b,"Value not in range")},
bh:function(a,b,c,d,e){return new P.cB(b,c,!0,a,d,"Invalid value")},
ir:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.bh(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.bh(b,a,c,"end",f))
return b},
x:function(a,b,c,d,e){var t=e!=null?e:J.cW(b)
return new P.dO(b,t,!0,a,c,"Index out of range")},
bF:function(a){return new P.fu(a)},
im:function(a,b,c){var t,s
t=H.H([],[c])
for(s=J.cV(a);s.q();)C.a.l(t,s.gt())
return t},
ao:function(a){H.hr(H.i(a))},
bv:function bv(){},
B:function B(){},
b_:function b_(a,b){this.a=a
this.b=b},
G:function G(){},
at:function at(a){this.a=a},
df:function df(){},
dg:function dg(){},
aM:function aM(){},
bx:function bx(a){this.a=a},
cz:function cz(){},
ag:function ag(a,b,c,d){var _=this
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
dO:function dO(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
p:function p(a){this.a=a},
cH:function cH(a){this.a=a},
bi:function bi(a){this.a=a},
a_:function a_(a){this.a=a},
cF:function cF(){},
d8:function d8(a){this.a=a},
fu:function fu(a){this.a=a},
di:function di(a,b,c){this.a=a
this.b=b
this.$ti=c},
n:function n(){},
a7:function a7(){},
cm:function cm(){},
b:function b(){},
ai:function ai(){},
az:function az(){},
K:function K(){},
o:function o(){},
eM:function eM(){},
u:function u(){},
bj:function bj(a){this.a=a},
h9:function(a){var t,s,r,q,p
if(a==null)return
t=P.aa()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.aJ)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
ky:function(a,b){var t={}
a.bt(0,new P.h8(t))
return t},
h8:function h8(a){this.a=a},
fO:function fO(){},
C:function C(){},
cX:function cX(){},
ar:function ar(){},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
dm:function dm(){},
dn:function dn(){},
dp:function dp(){},
dq:function dq(){},
dr:function dr(){},
ds:function ds(){},
dt:function dt(){},
du:function du(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){},
dB:function dB(){},
dF:function dF(){},
dH:function dH(){},
a0:function a0(){},
ah:function ah(){},
dN:function dN(){},
a9:function a9(){},
dX:function dX(){},
e4:function e4(){},
e5:function e5(){},
ab:function ab(){},
ek:function ek(){},
em:function em(){},
eq:function eq(){},
er:function er(){},
ew:function ew(){},
ex:function ex(){},
eE:function eE(){},
eP:function eP(){},
D:function D(){},
eQ:function eQ(){},
eR:function eR(){},
cG:function cG(){},
eT:function eT(){},
bk:function bk(){},
ac:function ac(){},
f1:function f1(){},
f9:function f9(){},
fb:function fb(){},
fc:function fc(){},
bo:function bo(){},
fT:function fT(){},
fU:function fU(){},
fV:function fV(){},
bV:function bV(){},
bN:function bN(){},
bK:function bK(){},
bT:function bT(){},
c7:function c7(){},
c9:function c9(){},
ca:function ca(){},
cb:function cb(){},
d0:function d0(){},
eA:function eA(){},
eB:function eB(){},
h_:function h_(){},
eL:function eL(){},
c0:function c0(){},
cc:function cc(){}},W={
aH:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
iJ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ks:function(a){var t=$.y
if(t===C.c)return a
return t.cH(a)},
j:function j(){},
cY:function cY(){},
cZ:function cZ(){},
Q:function Q(){},
d1:function d1(){},
by:function by(){},
d2:function d2(){},
bz:function bz(){},
d3:function d3(){},
as:function as(){},
d6:function d6(){},
t:function t(){},
aZ:function aZ(){},
d7:function d7(){},
d9:function d9(){},
da:function da(){},
b0:function b0(){},
bB:function bB(){},
db:function db(){},
dc:function dc(){},
bC:function bC(){},
bD:function bD(){},
dd:function dd(){},
de:function de(){},
bE:function bE(){},
f:function f(){},
R:function R(){},
dD:function dD(){},
dE:function dE(){},
dI:function dI(){},
S:function S(){},
dL:function dL(){},
b7:function b7(){},
bH:function bH(){},
dM:function dM(){},
b8:function b8(){},
dP:function dP(){},
e1:function e1(){},
e6:function e6(){},
e8:function e8(){},
bb:function bb(){},
T:function T(){},
e9:function e9(){},
ej:function ej(){},
r:function r(){},
cx:function cx(){},
el:function el(){},
en:function en(){},
U:function U(){},
ep:function ep(){},
es:function es(){},
et:function et(){},
eC:function eC(){},
cC:function cC(){},
eF:function eF(){},
eI:function eI(){},
V:function V(){},
eJ:function eJ(){},
W:function W(){},
eK:function eK(){},
X:function X(){},
eO:function eO(){},
L:function L(){},
a1:function a1(){},
Y:function Y(){},
M:function M(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
Z:function Z(){},
f_:function f_(){},
f0:function f0(){},
aQ:function aQ(){},
f2:function f2(){},
f8:function f8(){},
fa:function fa(){},
fd:function fd(){},
fe:function fe(){},
bm:function bm(){},
ff:function ff(a){this.a=a},
fg:function fg(){},
aC:function aC(){},
fn:function fn(){},
cJ:function cJ(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fE:function fE(){},
fF:function fF(){},
cM:function cM(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(){},
h0:function h0(){},
h1:function h1(){},
w:function w(){},
dG:function dG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b1:function b1(){},
b2:function b2(){},
b3:function b3(){},
b4:function b4(){},
b5:function b5(){},
b6:function b6(){},
bI:function bI(){},
c1:function c1(){},
bO:function bO(){},
bL:function bL(){},
bW:function bW(){},
bX:function bX(){},
bY:function bY(){},
bZ:function bZ(){},
c_:function c_(){},
bJ:function bJ(){},
bM:function bM(){},
bP:function bP(){},
bQ:function bQ(){},
bR:function bR(){},
bS:function bS(){},
bU:function bU(){},
c2:function c2(){},
c3:function c3(){},
c4:function c4(){},
ce:function ce(){},
cf:function cf(){},
cd:function cd(){},
ci:function ci(){},
cj:function cj(){},
ck:function ck(){},
cl:function cl(){},
c5:function c5(){},
c6:function c6(){},
c8:function c8(){},
cg:function cg(){},
ch:function ch(){}},G={
kb:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.i(t[s])}return C.a.a2(t,"\n")},
iH:function(a,b,c){var t,s,r,q
t=J.l(a)
s=t.bl(a,b)
t.aG(a,s,c)
t.bi(a,s)
r=t.aC(a,s,35713)
if(r!=null&&!r){q=t.aB(a,s)
P.ao("E:Compilation failed:")
P.ao("E:"+G.kb(c))
P.ao("E:Failure:")
P.ao(C.d.K("E:",q))
throw H.e(q)}return s},
ii:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.hx(a[s])
b[t+1]=J.hy(a[s])
b[t+2]=J.i1(a[s])}return b},
jL:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.hx(a[s])
b[t+1]=J.hy(a[s])}return b},
jM:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.hx(a[s])
b[t+1]=J.hy(a[s])
b[t+2]=J.i1(a[s])
b[t+3]=J.jn(a[s])}return b},
jK:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.aW(a[s],0)
b[t+1]=J.aW(a[s],1)
b[t+2]=J.aW(a[s],2)
b[t+3]=J.aW(a[s],3)}return b},
kh:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gF(t),s=s.gA(s),r=b.x,q=[[P.b,P.n]],p=[P.G],o=[T.bl],n=[T.J],m=[T.N];s.q();){l=s.gt()
if(!r.C(0,l)){k="Dropping unnecessary attribute: "+H.i(l)
if($.iS>0)H.hr("I: "+k)
continue}j=t.h(0,l)
switch($.$get$O().h(0,l).a){case"vec2":b.T(l,G.jL(H.cR(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.T(l,G.ii(H.cR(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.T(l,G.jM(H.cR(j,"$isb",o,"$asb"),null),4)
break
case"float":b.T(l,new Float32Array(H.h3(H.cR(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.T(l,G.jK(H.cR(j,"$isb",q,"$asb"),null),4)
break
default:if(H.aI(!1))H.aU("unknown type for "+H.i(l)+" ["+J.jm(j[0]).k(0)+"] ["+new H.ak(H.hd(j),null).k(0)+"] "+H.i(j))}}},
k5:function(a,b,c,d){var t=new G.ez(b,c,d,null,null,P.aa(),P.aa(),P.ay(null,null,null,P.u),null,a,!1,!0)
t.cg(a,b,c,d)
return t},
ea:function ea(){},
f6:function f6(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
d5:function d5(a,b){this.a=a
this.b=b},
dC:function dC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dK:function dK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
e7:function e7(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
ez:function ez(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
cD:function cD(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h}},A={
iZ:function(a){var t,s
t=C.w.cW(a,0,new A.he())
s=536870911&t+(C.b.bO(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
he:function he(){}},T={N:function N(a){this.a=a},J:function J(a){this.a=a},bl:function bl(){}},L={
kM:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t=C.m.da(document,"#webgl-canvas")
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
q=new G.d5(null,t)
p=(t&&C.l).bQ(t,"webgl2",P.ax(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
q.a=p
if(p==null)H.z(P.bF('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+J.aX(J.jo(p))
if($.iS>0)P.ao("I: "+o)
J.j9(p,0,0,0,1)
J.cU(p,2929)
n=G.k5("gyroid",q,$.$get$iX(),$.$get$iW())
p=new T.J(new Float32Array(H.ae(3)))
p.S(-1,-1,0)
o=new T.J(new Float32Array(H.ae(3)))
o.S(1,-1,0)
m=new T.J(new Float32Array(H.ae(3)))
m.S(1,1,0)
l=new T.J(new Float32Array(H.ae(3)))
l.S(-1,1,0)
k=new Float32Array(H.ae(2))
k[0]=0
k[1]=0
j=new Float32Array(H.ae(2))
j[0]=1
j[1]=0
i=new Float32Array(H.ae(2))
i[0]=1
i[1]=1
h=new Float32Array(H.ae(2))
h[0]=0
h[1]=1
g=new T.J(new Float32Array(H.ae(3)))
g.S(0,0,1)
f=[]
e=new G.dK(!1,[],[],f,P.aa())
e.aL("aTexUV")
e.c9([p,o,m,l])
e.c6("aTexUV",[new T.N(k),new T.N(j),new T.N(i),new T.N(h)])
e.aL("aNormal")
e.c7("aNormal",[g,g,g,g])
p=n.d
o=n.e.x
m=P.aa()
l=J.jc(p.a)
d=new G.e7(p,l,4,m,o,null,0,-1,null,null,P.aa(),"meshdata:quad",!1,!0)
f=G.ii(f,null)
m.i(0,"aPosition",J.hw(p.a))
d.ch=f
d.aK("aPosition",f,3)
c=$.$get$O().h(0,"aPosition")
if(c==null)H.z("Unknown canonical aPosition")
H.d(o.C(0,"aPosition"))
b=o.h(0,"aPosition")
J.cT(p.a,l)
p.bs(0,b,0)
o=m.h(0,"aPosition")
m=c.aM()
J.cS(p.a,34962,o)
J.i6(p.a,b,m,5126,!1,0,0)
o=e.cc()
d.y=J.hw(p.a)
H.d(d.ch!=null)
m=d.ch.length
if(m<768){d.sak(new Uint8Array(H.h3(o)))
d.Q=5121}else if(m<196608){d.sak(new Uint16Array(H.h3(o)))
d.Q=5123}else{d.sak(new Uint32Array(H.h3(o)))
d.Q=5125}J.cT(p.a,l)
o=d.y
m=d.cx
l=J.v(m)
H.d(!!l.$isiE||!!l.$isiF||!!l.$isiG)
J.cS(p.a,34963,o)
J.i0(p.a,34963,m,35048)
G.kh(e,d)
new L.hp(s,r,n,new G.f6(P.aa(),"plain",!1,!0),d).$1(0)},
hp:function hp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e}}
var v=[C,H,J,P,W,G,A,T,L]
setFunctionNamesIfNecessary(v)
var $={}
H.hF.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gu:function(a){return H.aA(a)},
k:function(a){return H.eu(a)},
gv:function(a){return new H.ak(H.hd(a),null)}}
J.dT.prototype={
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gv:function(a){return C.L},
$isbv:1}
J.co.prototype={
w:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
gv:function(a){return C.F}}
J.ba.prototype={
gu:function(a){return 0},
gv:function(a){return C.E},
k:function(a){return String(a)},
$isil:1}
J.eo.prototype={}
J.aB.prototype={}
J.aw.prototype={
k:function(a){var t=a[$.$get$ig()]
return t==null?this.c3(a):J.aX(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ishC:1}
J.au.prototype={
at:function(a,b){if(!!a.immutable$list)throw H.e(new P.p(b))},
as:function(a,b){if(!!a.fixed$length)throw H.e(new P.p(b))},
l:function(a,b){this.as(a,"add")
a.push(b)},
cC:function(a,b){var t,s,r,q
t=a.length
this.as(a,"addAll")
for(s=0;s<1;++s,t=q){r=b[s]
q=t+1
H.d(t===a.length||H.z(new P.a_(a)))
a.push(r)}},
bw:function(a,b){return new H.cr(a,b,[H.bw(a,0),null])},
a2:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.i(a[s])
return t.join(b)},
p:function(a,b){return a[b]},
gcV:function(a){if(a.length>0)return a[0]
throw H.e(H.hD())},
gav:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.hD())},
aF:function(a,b,c,d,e){var t,s
this.at(a,"setRange")
P.ir(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.z(P.bh(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.jU())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
bZ:function(a,b){this.at(a,"sort")
H.cE(a,0,a.length-1,P.kz())},
aH:function(a){return this.bZ(a,null)},
Y:function(a,b){var t
for(t=0;t<a.length;++t)if(J.A(a[t],b))return!0
return!1},
k:function(a){return P.dS(a,"[","]")},
gA:function(a){return new J.d_(a,a.length,0,null,[H.bw(a,0)])},
gu:function(a){return H.aA(a)},
gj:function(a){return a.length},
sj:function(a,b){this.as(a,"set length")
if(b<0)throw H.e(P.bh(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.F(a,b))
if(b>=a.length||b<0)throw H.e(H.F(a,b))
return a[b]},
i:function(a,b,c){this.at(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.F(a,b))
if(b>=a.length||b<0)throw H.e(H.F(a,b))
a[b]=c},
$isk:1,
$ask:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.hE.prototype={}
J.d_.prototype={
gt:function(){return this.d},
q:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.aJ(t))
r=this.c
if(r>=s){this.saO(null)
return!1}this.saO(t[r]);++this.c
return!0},
saO:function(a){this.d=a}}
J.b9.prototype={
R:function(a,b){var t
if(typeof b!=="number")throw H.e(H.af(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gau(b)
if(this.gau(a)===t)return 0
if(this.gau(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gau:function(a){return a===0?1/a<0:a<0},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
K:function(a,b){if(typeof b!=="number")throw H.e(H.af(b))
return a+b},
af:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.b7(a,b)},
M:function(a,b){return(a|0)===a?a/b|0:this.b7(a,b)},
b7:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.p("Result of truncating division is "+H.i(t)+": "+H.i(a)+" ~/ "+b))},
ao:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
bO:function(a,b){if(typeof b!=="number")throw H.e(H.af(b))
return(a&b)>>>0},
c4:function(a,b){if(typeof b!=="number")throw H.e(H.af(b))
return(a^b)>>>0},
ae:function(a,b){if(typeof b!=="number")throw H.e(H.af(b))
return a<b},
ad:function(a,b){if(typeof b!=="number")throw H.e(H.af(b))
return a>b},
bP:function(a,b){if(typeof b!=="number")throw H.e(H.af(b))
return a>=b},
gv:function(a){return C.O},
$isK:1}
J.cn.prototype={
gv:function(a){return C.N},
$isn:1,
$isK:1}
J.dU.prototype={
gv:function(a){return C.M},
$isK:1}
J.av.prototype={
ag:function(a,b){if(b>=a.length)throw H.e(H.F(a,b))
return a.charCodeAt(b)},
K:function(a,b){if(typeof b!=="string")throw H.e(P.i8(b,null,null))
return a+b},
c0:function(a,b,c){var t
if(c>a.length)throw H.e(P.bh(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
c_:function(a,b){return this.c0(a,b,0)},
aJ:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.ev(b,null,null))
if(b>c)throw H.e(P.ev(b,null,null))
if(c>a.length)throw H.e(P.ev(c,null,null))
return a.substring(b,c)},
c1:function(a,b){return this.aJ(a,b,null)},
R:function(a,b){var t
if(typeof b!=="string")throw H.e(H.af(b))
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
gv:function(a){return C.G},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.F(a,b))
return a[b]},
$isk:1,
$ask:function(){},
$isu:1}
H.c.prototype={$asc:null}
H.aN.prototype={
gA:function(a){return new H.cp(this,this.gj(this),0,null,[H.al(this,"aN",0)])},
di:function(a,b){var t,s
t=H.H([],[H.al(this,"aN",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.p(0,s)
return t},
dh:function(a){return this.di(a,!0)}}
H.cp.prototype={
gt:function(){return this.d},
q:function(){var t,s,r,q
t=this.a
s=J.a3(t)
r=s.gj(t)
if(this.b!==r)throw H.e(new P.a_(t))
q=this.c
if(q>=r){this.sV(null)
return!1}this.sV(s.p(t,q));++this.c
return!0},
sV:function(a){this.d=a}}
H.cq.prototype={
gA:function(a){return new H.e2(null,J.cV(this.a),this.b,this.$ti)},
gj:function(a){return J.cW(this.a)},
$asa7:function(a,b){return[b]}}
H.dh.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.e2.prototype={
q:function(){var t=this.b
if(t.q()){this.sV(this.c.$1(t.gt()))
return!0}this.sV(null)
return!1},
gt:function(){return this.a},
sV:function(a){this.a=a},
$ascm:function(a,b){return[b]}}
H.cr.prototype={
gj:function(a){return J.cW(this.a)},
p:function(a,b){return this.b.$1(J.jj(this.a,b))},
$asc:function(a,b){return[b]},
$asaN:function(a,b){return[b]},
$asa7:function(a,b){return[b]}}
H.bG.prototype={}
H.ht.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.hu.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.fM.prototype={
sd5:function(a){this.z=a},
sd7:function(a){this.ch=a}}
H.aF.prototype={
ba:function(a,b){if(!this.f.w(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aq()},
dd:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.a3(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.b0();++r.d}this.y=!1}this.aq()},
cD:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
dc:function(a){var t,s,r
if(this.ch==null)return
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.z(new P.p("removeRange"))
P.ir(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
bY:function(a,b){if(!this.r.w(0,a))return
this.db=b},
d_:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.B(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.hI(null,null)
this.cx=t}t.G(0,new H.fH(a,c))},
cZ:function(a,b){var t
if(!this.r.w(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.ab()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.hI(null,null)
this.cx=t}t.G(0,this.gd6())},
d0:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.ao(a)
if(b!=null)P.ao(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aX(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bp(t,t.r,null,null,[null]),r.c=t.e;r.q();)r.d.B(0,s)},
a_:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.aq(o)
p=H.am(o)
this.d0(q,p)
if(this.db){this.ab()
if(this===u.globalState.e)throw o}}finally{this.cy=H.kx(r)
u.globalState.d=H.j_(t,"$isaF")
if(t!=null)$=t.gd4()
if(this.cx!=null)for(;n=this.cx,!n.gaa(n);)this.cx.bx().$0()}return s},
bv:function(a){return this.b.h(0,a)},
aS:function(a,b){var t=this.b
if(t.C(0,a))throw H.e(P.bF("Registry: ports must be registered only once."))
t.i(0,a,b)},
aq:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.ab()},
ab:function(){var t,s,r
t=this.cx
if(t!=null)t.H(0)
for(t=this.b,s=t.gbL(t),s=s.gA(s);s.q();)s.gt().cn()
t.H(0)
this.c.H(0)
u.globalState.z.a3(0,this.a)
this.dx.H(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].B(0,t[r+1])
this.ch=null}},
gd4:function(){return this.d},
gcK:function(){return this.e}}
H.fH.prototype={
$0:function(){this.a.B(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.fs.prototype={
cM:function(){var t=this.a
if(t.b===t.c)return
return t.bx()},
bz:function(){var t,s,r
t=this.cM()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.C(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gaa(s)}else s=!1
else s=!1
else s=!1
if(s)H.z(P.bF("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gaa(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.ax(["command","close"])
r=new H.a2(!0,new P.cL(0,null,null,null,null,null,0,[null,P.n])).D(r)
s.toString
self.postMessage(r)}return!1}t.d9()
return!0},
b5:function(){if(self.window!=null)new H.ft(this).$0()
else for(;this.bz(););},
a4:function(){var t,s,r,q,p
if(!u.globalState.x)this.b5()
else try{this.b5()}catch(r){t=H.aq(r)
s=H.am(r)
q=u.globalState.Q
p=P.ax(["command","error","msg",H.i(t)+"\n"+H.i(s)])
p=new H.a2(!0,P.bq(null,P.n)).D(p)
q.toString
self.postMessage(p)}}}
H.ft.prototype={
$0:function(){if(!this.a.bz())return
P.ka(C.h,this)},
$S:function(){return{func:1,v:true}}}
H.aG.prototype={
d9:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.a_(this.b)}}
H.fL.prototype={}
H.dQ.prototype={
$0:function(){H.jQ(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.dR.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.aV(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.aV(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aq()},
$S:function(){return{func:1,v:true}}}
H.fm.prototype={}
H.aR.prototype={
B:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.kk(b)
if(t.gcK()===s){s=J.a3(r)
switch(s.h(r,0)){case"pause":t.ba(s.h(r,1),s.h(r,2))
break
case"resume":t.dd(s.h(r,1))
break
case"add-ondone":t.cD(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.dc(s.h(r,1))
break
case"set-errors-fatal":t.bY(s.h(r,1),s.h(r,2))
break
case"ping":t.d_(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.cZ(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.a3(0,s)
break}return}u.globalState.f.a.G(0,new H.aG(t,new H.fN(this,r),"receive"))},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aR){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.fN.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.cl(0,this.b)},
$S:function(){return{func:1}}}
H.br.prototype={
B:function(a,b){var t,s,r
t=P.ax(["command","message","port",this,"msg",b])
s=new H.a2(!0,P.bq(null,P.n)).D(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.br){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.c4((this.b<<16^this.a<<8)>>>0,this.c)}}
H.aP.prototype={
cn:function(){this.c=!0
this.b=null},
cl:function(a,b){if(this.c)return
this.b.$1(b)},
$isk3:1}
H.eX.prototype={
ci:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.G(0,new H.aG(s,new H.eY(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.cP(new H.eZ(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.p("Timer greater than 0."))}}}
H.eY.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.eZ.prototype={
$0:function(){this.a.c=null
H.ho()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.a6.prototype={
gu:function(a){var t=this.a
t=C.b.ao(t,0)^C.b.M(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
w:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.a6){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.a2.prototype={
D:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.v(a)
if(!!t.$isbc)return["buffer",a]
if(!!t.$isaO)return["typed",a]
if(!!t.$isk)return this.bU(a)
if(!!t.$isjN){r=this.gbR()
q=t.gF(a)
q=H.hJ(q,r,H.al(q,"a7",0),null)
q=P.im(q,!0,H.al(q,"a7",0))
t=t.gbL(a)
t=H.hJ(t,r,H.al(t,"a7",0),null)
return["map",q,P.im(t,!0,H.al(t,"a7",0))]}if(!!t.$isil)return this.bV(a)
if(!!t.$isa)this.bJ(a)
if(!!t.$isk3)this.a5(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isaR)return this.bW(a)
if(!!t.$isbr)return this.bX(a)
if(!!t.$isaL){p=a.$static_name
if(p==null)this.a5(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isa6)return["capability",a.a]
if(!(a instanceof P.o))this.bJ(a)
return["dart",u.classIdExtractor(a),this.bT(u.classFieldsExtractor(a))]},
a5:function(a,b){throw H.e(new P.p((b==null?"Can't transmit:":b)+" "+H.i(a)))},
bJ:function(a){return this.a5(a,null)},
bU:function(a){var t
H.d(typeof a!=="string")
t=this.bS(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.a5(a,"Can't serialize indexable: ")},
bS:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.D(a[s])
return t},
bT:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.D(a[t]))
return a},
bV:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.a5(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.D(a[t[r]])
return["js-object",t,s]},
bX:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
bW:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aD.prototype={
I:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.i7("Bad serialized message: "+H.i(a)))
switch(C.a.gcV(a)){case"ref":H.d(J.A(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.d(J.A(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.d(J.A(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.d(J.A(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
s=H.H(this.Z(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.A(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.H(this.Z(t),[null])
case"mutable":H.d(J.A(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.Z(t)
case"const":H.d(J.A(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.H(this.Z(t),[null])
s.fixed$length=Array
return s
case"map":return this.cP(a)
case"sendport":return this.cQ(a)
case"raw sendport":H.d(J.A(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.cO(a)
case"function":H.d(J.A(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.A(a[0],"capability"))
return new H.a6(a[1])
case"dart":H.d(J.A(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.l(this.b,p)
this.Z(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.i(a))}},
Z:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.I(a[t]))
return a},
cP:function(a){var t,s,r,q,p
H.d(J.A(a[0],"map"))
t=a[1]
s=a[2]
r=P.aa()
C.a.l(this.b,r)
t=J.js(t,this.gcN()).dh(0)
for(q=J.a3(s),p=0;p<t.length;++p)r.i(0,t[p],this.I(q.h(s,p)))
return r},
cQ:function(a){var t,s,r,q,p,o,n
H.d(J.A(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.bv(r)
if(o==null)return
n=new H.aR(o,s)}else n=new H.br(t,r,s)
C.a.l(this.b,n)
return n},
cO:function(a){var t,s,r,q,p,o
H.d(J.A(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.a3(t),p=J.a3(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.I(p.h(s,o))
return r}}
H.ey.prototype={}
H.f3.prototype={
E:function(a){var t,s,r
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
H.cy.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.i(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.dW.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.i(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.i(this.a)+")"}}
H.f7.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.hv.prototype={
$1:function(a){if(!!J.v(a).$isaM)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.cN.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.hj.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.hk.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.hl.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.hm.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.hn.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.aL.prototype={
k:function(a){return"Closure '"+H.cA(this).trim()+"'"},
$ishC:1,
gdl:function(){return this},
$D:null}
H.eS.prototype={}
H.eN.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.aY.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.aY))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.aA(this.a)
else s=typeof t!=="object"?J.a5(t):H.aA(t)
return(s^H.aA(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.i(this.d)+"' of "+H.eu(t)}}
H.f5.prototype={
k:function(a){return this.a}}
H.d4.prototype={
k:function(a){return this.a}}
H.eD.prototype={
k:function(a){return"RuntimeError: "+H.i(this.a)}}
H.fh.prototype={
k:function(a){return C.d.K("Assertion failed: ",P.hB(this.a))}}
H.ak.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.a5(this.a)},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.ak){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.a8.prototype={
gj:function(a){return this.a},
gaa:function(a){return this.a===0},
gF:function(a){return new H.dZ(this,[H.bw(this,0)])},
gbL:function(a){return H.hJ(this.gF(this),new H.dV(this),H.bw(this,0),H.bw(this,1))},
C:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.aZ(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.aZ(s,b)}else return this.d1(b)},
d1:function(a){var t=this.d
if(t==null)return!1
return this.a1(this.a9(t,this.a0(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.W(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.W(r,b)
return s==null?null:s.b}else return this.d2(b)},
d2:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.a9(t,this.a0(a))
r=this.a1(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.al()
this.b=t}this.aQ(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.al()
this.c=s}this.aQ(s,b,c)}else{r=this.d
if(r==null){r=this.al()
this.d=r}q=this.a0(b)
p=this.a9(r,q)
if(p==null)this.an(r,q,[this.am(b,c)])
else{o=this.a1(p,b)
if(o>=0)p[o].b=c
else p.push(this.am(b,c))}}},
a3:function(a,b){if(typeof b==="string")return this.b3(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.b3(this.c,b)
else return this.d3(b)},
d3:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.a9(t,this.a0(a))
r=this.a1(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.b8(q)
return q.b},
H:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bt:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a_(this))
t=t.c}},
aQ:function(a,b,c){var t=this.W(a,b)
if(t==null)this.an(a,b,this.am(b,c))
else t.b=c},
b3:function(a,b){var t
if(a==null)return
t=this.W(a,b)
if(t==null)return
this.b8(t)
this.b_(a,b)
return t.b},
am:function(a,b){var t,s
t=new H.dY(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
b8:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
a0:function(a){return J.a5(a)&0x3ffffff},
a1:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.A(a[s].a,b))return s
return-1},
k:function(a){return P.jW(this)},
W:function(a,b){return a[b]},
a9:function(a,b){return a[b]},
an:function(a,b,c){H.d(c!=null)
a[b]=c},
b_:function(a,b){delete a[b]},
aZ:function(a,b){return this.W(a,b)!=null},
al:function(){var t=Object.create(null)
this.an(t,"<non-identifier-key>",t)
this.b_(t,"<non-identifier-key>")
return t},
$isjN:1}
H.dV.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.dY.prototype={}
H.dZ.prototype={
gj:function(a){return this.a.a},
gA:function(a){var t,s
t=this.a
s=new H.e_(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.e_.prototype={
gt:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a_(t))
else{t=this.c
if(t==null){this.saP(null)
return!1}else{this.saP(t.a)
this.c=this.c.c
return!0}}},
saP:function(a){this.d=a}}
H.hf.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.hg.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.u]}}}
H.hh.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.u]}}}
H.bc.prototype={
gv:function(a){return C.x},
$isbc:1}
H.aO.prototype={$isaO:1}
H.eb.prototype={
gv:function(a){return C.y}}
H.ct.prototype={
gj:function(a){return a.length},
$isk:1,
$ask:function(){},
$ism:1,
$asm:function(){}}
H.cu.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.z(H.F(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.z(H.F(a,b))
a[b]=c}}
H.cv.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.z(H.F(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.cs.prototype={
gv:function(a){return C.z},
$isc:1,
$asc:function(){return[P.G]},
$isb:1,
$asb:function(){return[P.G]}}
H.ec.prototype={
gv:function(a){return C.A},
$isc:1,
$asc:function(){return[P.G]},
$isb:1,
$asb:function(){return[P.G]}}
H.ed.prototype={
gv:function(a){return C.B},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.z(H.F(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.ee.prototype={
gv:function(a){return C.C},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.z(H.F(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.ef.prototype={
gv:function(a){return C.D},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.z(H.F(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.eg.prototype={
gv:function(a){return C.H},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.z(H.F(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$isiE:1}
H.eh.prototype={
gv:function(a){return C.I},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.z(H.F(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$isiF:1}
H.cw.prototype={
gv:function(a){return C.J},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.z(H.F(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.ei.prototype={
gv:function(a){return C.K},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.z(H.F(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$isiG:1}
H.bd.prototype={
$ask:function(){},
$isc:1,
$asc:function(){return[P.n]},
$asm:function(){},
$isb:1,
$asb:function(){return[P.n]}}
H.be.prototype={
$ask:function(){},
$isc:1,
$asc:function(){return[P.G]},
$asm:function(){},
$isb:1,
$asb:function(){return[P.G]}}
H.bf.prototype={
$ask:function(){},
$asc:function(){return[P.G]},
$asm:function(){},
$asb:function(){return[P.G]}}
H.bg.prototype={
$ask:function(){},
$asc:function(){return[P.n]},
$asm:function(){},
$asb:function(){return[P.n]}}
P.fj.prototype={
$1:function(a){var t,s
H.ho()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.fi.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.fk.prototype={
$0:function(){H.ho()
this.a.$0()},
$S:function(){return{func:1}}}
P.fl.prototype={
$0:function(){H.ho()
this.a.$0()},
$S:function(){return{func:1}}}
P.fo.prototype={}
P.fZ.prototype={
cJ:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.bi("Future already completed"))
t.aX(b)}}
P.cK.prototype={
d8:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.ax(this.d,a.a)},
cY:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.aV(s,{func:1,args:[P.o,P.eM]}))return t.de(s,a.a,a.b)
else return t.ax(s,a.a)}}
P.aE.prototype={
bB:function(a,b){var t,s,r
t=$.y
if(t!==C.c){t.toString
if(b!=null)b=P.ko(b,t)}s=new P.aE(0,t,null,[null])
r=b==null?1:3
this.aR(new P.cK(null,s,r,a,b,[H.bw(this,0),null]))
return s},
bA:function(a){return this.bB(a,null)},
aT:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
aR:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.j_(this.c,"$iscK")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.aR(a)
return}this.aT(t)}H.d(this.a>=4)
t=this.b
t.toString
P.h6(null,null,t,new P.fv(this,a))}},
b2:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.b2(a)
return}this.aT(s)}H.d(this.a>=4)
t.a=this.X(a)
s=this.b
s.toString
P.h6(null,null,s,new P.fz(t,this))}},
b4:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.X(t)},
X:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aX:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.h7(a,"$isdJ",t,"$asdJ"))if(H.h7(a,"$isaE",t,null))P.iI(a,this)
else P.kg(a,this)
else{s=this.b4()
H.d(this.a<4)
this.a=4
this.c=a
P.bn(this,s)}},
aY:function(a,b){var t
H.d(this.a<4)
t=this.b4()
H.d(this.a<4)
this.a=8
this.c=new P.aK(a,b)
P.bn(this,t)},
$isdJ:1,
gap:function(){return this.a},
gcA:function(){return this.c}}
P.fv.prototype={
$0:function(){P.bn(this.a,this.b)},
$S:function(){return{func:1}}}
P.fz.prototype={
$0:function(){P.bn(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.fw.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.aX(a)},
$S:function(){return{func:1,args:[,]}}}
P.fx.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.aY(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.fy.prototype={
$0:function(){this.a.aY(this.b,this.c)},
$S:function(){return{func:1}}}
P.fC.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.by(q.d)}catch(n){s=H.aq(n)
r=H.am(n)
if(this.c){q=this.a.a
H.d(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.d(q.a===8)
p.b=q.c}else p.b=new P.aK(s,r)
p.a=!0
return}if(!!J.v(t).$isdJ){if(t instanceof P.aE&&t.gap()>=4){if(t.gap()===8){q=t
H.d(q.gap()===8)
p=this.b
p.b=q.gcA()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.bA(new P.fD(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.fD.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.fB.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.ax(r.d,this.c)}catch(q){t=H.aq(q)
s=H.am(q)
r=this.a
r.b=new P.aK(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.fA.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.d8(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.cY(t)
p.a=!1}}catch(o){s=H.aq(o)
r=H.am(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.aK(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.cI.prototype={}
P.aK.prototype={
k:function(a){return H.i(this.a)},
$isaM:1}
P.h2.prototype={}
P.h5.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.cz()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.fP.prototype={
df:function(a){var t,s,r
try{if(C.c===$.y){a.$0()
return}P.iK(null,null,this,a)}catch(r){t=H.aq(r)
s=H.am(r)
P.h4(null,null,this,t,s)}},
dg:function(a,b){var t,s,r
try{if(C.c===$.y){a.$1(b)
return}P.iL(null,null,this,a,b)}catch(r){t=H.aq(r)
s=H.am(r)
P.h4(null,null,this,t,s)}},
cG:function(a){return new P.fR(this,a)},
ar:function(a){return new P.fQ(this,a)},
cH:function(a){return new P.fS(this,a)},
h:function(a,b){return},
by:function(a){if($.y===C.c)return a.$0()
return P.iK(null,null,this,a)},
ax:function(a,b){if($.y===C.c)return a.$1(b)
return P.iL(null,null,this,a,b)},
de:function(a,b,c){if($.y===C.c)return a.$2(b,c)
return P.kp(null,null,this,a,b,c)}}
P.fR.prototype={
$0:function(){return this.a.by(this.b)},
$S:function(){return{func:1}}}
P.fQ.prototype={
$0:function(){return this.a.df(this.b)},
$S:function(){return{func:1}}}
P.fS.prototype={
$1:function(a){return this.a.dg(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.cL.prototype={
a0:function(a){return H.kO(a)&0x3ffffff},
a1:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.fI.prototype={
gA:function(a){var t=new P.bp(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
Y:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.co(b)},
co:function(a){var t=this.d
if(t==null)return!1
return this.a8(t[this.a7(a)],a)>=0},
bv:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.Y(0,a)?a:null
else return this.cv(a)},
cv:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.a7(a)]
r=this.a8(s,a)
if(r<0)return
return J.aW(s,r).gcq()},
l:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.aU(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.aU(r,b)}else return this.G(0,b)},
G:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.ki()
this.d=t}s=this.a7(b)
r=t[s]
if(r==null){q=[this.ah(b)]
H.d(q!=null)
t[s]=q}else{if(this.a8(r,b)>=0)return!1
r.push(this.ah(b))}return!0},
a3:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.aV(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.aV(this.c,b)
else return this.cw(0,b)},
cw:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.a7(b)]
r=this.a8(s,b)
if(r<0)return!1
this.aW(s.splice(r,1)[0])
return!0},
H:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
aU:function(a,b){var t
if(a[b]!=null)return!1
t=this.ah(b)
H.d(!0)
a[b]=t
return!0},
aV:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.aW(t)
delete a[b]
return!0},
ah:function(a){var t,s
t=new P.fJ(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
aW:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
a7:function(a){return J.a5(a)&0x3ffffff},
a8:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.A(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.fJ.prototype={
gcq:function(){return this.a}}
P.bp.prototype={
gt:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a_(t))
else{t=this.c
if(t==null){this.sU(null)
return!1}else{this.sU(t.a)
this.c=this.c.b
return!0}}},
sU:function(a){this.d=a}}
P.fG.prototype={}
P.q.prototype={
gA:function(a){return new H.cp(a,this.gj(a),0,null,[H.al(a,"q",0)])},
p:function(a,b){return this.h(a,b)},
bw:function(a,b){return new H.cr(a,b,[H.al(a,"q",0),null])},
cW:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.e(new P.a_(a))}return s},
k:function(a){return P.dS(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.e3.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.i(a)
t.a=s+": "
t.a+=H.i(b)},
$S:function(){return{func:1,args:[,,]}}}
P.e0.prototype={
gA:function(a){return new P.fK(this,this.c,this.d,this.b,null,this.$ti)},
gaa:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
p:function(a,b){var t,s
t=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=t)H.z(P.x(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
H:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.dS(this,"{","}")},
bx:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.hD());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
G:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.b0();++this.d},
b0:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.H(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.aF(s,0,q,t,r)
C.a.aF(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sb6(s)},
cf:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sb6(H.H(t,[b]))},
sb6:function(a){this.a=a},
$asc:null}
P.fK.prototype={
gt:function(){return this.e},
q:function(){var t,s
t=this.a
if(this.c!==t.d)H.z(new P.a_(t))
s=this.d
if(s===this.b){this.sU(null)
return!1}this.sU(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sU:function(a){this.e=a}}
P.eH.prototype={
k:function(a){return P.dS(this,"{","}")},
$isc:1,
$asc:null}
P.eG.prototype={}
P.bv.prototype={
gu:function(a){return P.o.prototype.gu.call(this,this)},
k:function(a){return this?"true":"false"}}
P.B.prototype={}
P.b_.prototype={
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.b_))return!1
return this.a===b.a&&this.b===b.b},
R:function(a,b){return C.b.R(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.ao(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.jH(H.k2(this))
s=P.bA(H.k0(this))
r=P.bA(H.jX(this))
q=P.bA(H.jY(this))
p=P.bA(H.k_(this))
o=P.bA(H.k1(this))
n=P.jI(H.jZ(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isB:1,
$asB:function(){return[P.b_]}}
P.G.prototype={$isB:1,
$asB:function(){return[P.K]}}
P.at.prototype={
ae:function(a,b){return C.b.ae(this.a,b.gcp())},
ad:function(a,b){return C.b.ad(this.a,b.gcp())},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.at))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
R:function(a,b){return C.b.R(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.dg()
s=this.a
if(s<0)return"-"+new P.at(0-s).k(0)
r=t.$1(C.b.M(s,6e7)%60)
q=t.$1(C.b.M(s,1e6)%60)
p=new P.df().$1(s%1e6)
return""+C.b.M(s,36e8)+":"+H.i(r)+":"+H.i(q)+"."+H.i(p)},
$isB:1,
$asB:function(){return[P.at]}}
P.df.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.u,args:[P.n]}}}
P.dg.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.u,args:[P.n]}}}
P.aM.prototype={}
P.bx.prototype={
k:function(a){return"Assertion failed"}}
P.cz.prototype={
k:function(a){return"Throw of null."}}
P.ag.prototype={
gaj:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gai:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+t
q=this.gaj()+s+r
if(!this.a)return q
p=this.gai()
o=P.hB(this.b)
return q+p+": "+H.i(o)}}
P.cB.prototype={
gaj:function(){return"RangeError"},
gai:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.i(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.i(t)
else if(r>t)s=": Not in range "+H.i(t)+".."+H.i(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.i(t)}return s}}
P.dO.prototype={
gaj:function(){return"RangeError"},
gai:function(){H.d(this.a)
if(J.j5(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.i(t)},
gj:function(a){return this.f}}
P.p.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.cH.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.bi.prototype={
k:function(a){return"Bad state: "+this.a}}
P.a_.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.hB(t))+"."}}
P.cF.prototype={
k:function(a){return"Stack Overflow"},
$isaM:1}
P.d8.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.fu.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.i(t)}}
P.di.prototype={
k:function(a){return"Expando:"+H.i(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.z(P.i8(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.io(b,"expando$values")
return s==null?null:H.io(s,t)}}
P.n.prototype={$isB:1,
$asB:function(){return[P.K]}}
P.a7.prototype={
gj:function(a){var t,s
H.d(!this.$isc)
t=this.gA(this)
for(s=0;t.q();)++s
return s},
p:function(a,b){var t,s,r
if(b<0)H.z(P.bh(b,0,null,"index",null))
for(t=this.gA(this),s=0;t.q();){r=t.gt()
if(b===s)return r;++s}throw H.e(P.x(b,this,"index",null,s))},
k:function(a){return P.jT(this,"(",")")}}
P.cm.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.ai.prototype={}
P.az.prototype={
gu:function(a){return P.o.prototype.gu.call(this,this)},
k:function(a){return"null"}}
P.K.prototype={$isB:1,
$asB:function(){return[P.K]}}
P.o.prototype={constructor:P.o,$iso:1,
w:function(a,b){return this===b},
gu:function(a){return H.aA(this)},
k:function(a){return H.eu(this)},
gv:function(a){return new H.ak(H.hd(this),null)},
toString:function(){return this.k(this)}}
P.eM.prototype={}
P.u.prototype={$isB:1,
$asB:function(){return[P.u]}}
P.bj.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gP:function(){return this.a}}
W.j.prototype={}
W.cY.prototype={
k:function(a){return String(a)},
$isa:1}
W.cZ.prototype={
k:function(a){return String(a)},
$isa:1}
W.Q.prototype={$iso:1}
W.d1.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isk:1,
$ask:function(){return[W.Q]},
$isc:1,
$asc:function(){return[W.Q]},
$ism:1,
$asm:function(){return[W.Q]},
$isb:1,
$asb:function(){return[W.Q]}}
W.by.prototype={}
W.d2.prototype={$isa:1}
W.bz.prototype={
bQ:function(a,b,c){var t=this.cs(a,b,P.ky(c,null))
return t},
cs:function(a,b,c){return a.getContext(b,c)}}
W.d3.prototype={
ac:function(a){return P.h9(a.getContextAttributes())}}
W.as.prototype={$isa:1,
gj:function(a){return a.length}}
W.d6.prototype={$isa:1}
W.t.prototype={$iso:1}
W.aZ.prototype={
gj:function(a){return a.length}}
W.d7.prototype={}
W.d9.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.da.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
W.b0.prototype={
da:function(a,b){return a.querySelector(b)}}
W.bB.prototype={$isa:1}
W.db.prototype={
k:function(a){return String(a)}}
W.dc.prototype={
gbN:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
W.bC.prototype={
gbN:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
W.bD.prototype={
k:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gO(a))+" x "+H.i(this.gN(a))},
w:function(a,b){var t
if(b==null)return!1
t=J.v(b)
if(!t.$isC)return!1
return a.left===t.gaw(b)&&a.top===t.gay(b)&&this.gO(a)===t.gO(b)&&this.gN(a)===t.gN(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gO(a)
q=this.gN(a)
return W.iJ(W.aH(W.aH(W.aH(W.aH(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gN:function(a){return a.height},
gaw:function(a){return a.left},
gay:function(a){return a.top},
gO:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isC:1,
$asC:function(){}}
W.dd.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isk:1,
$ask:function(){return[P.u]},
$isc:1,
$asc:function(){return[P.u]},
$ism:1,
$asm:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
W.de.prototype={
gj:function(a){return a.length}}
W.bE.prototype={
k:function(a){return a.localName},
$isa:1}
W.f.prototype={}
W.R.prototype={$iso:1}
W.dD.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isk:1,
$ask:function(){return[W.R]},
$isc:1,
$asc:function(){return[W.R]},
$ism:1,
$asm:function(){return[W.R]},
$isb:1,
$asb:function(){return[W.R]}}
W.dE.prototype={
gj:function(a){return a.length}}
W.dI.prototype={
gj:function(a){return a.length}}
W.S.prototype={$iso:1}
W.dL.prototype={
gj:function(a){return a.length}}
W.b7.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isk:1,
$ask:function(){return[W.r]},
$isc:1,
$asc:function(){return[W.r]},
$ism:1,
$asm:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.bH.prototype={}
W.dM.prototype={
B:function(a,b){return a.send(b)}}
W.b8.prototype={}
W.dP.prototype={$isa:1}
W.e1.prototype={
k:function(a){return String(a)}}
W.e6.prototype={
gj:function(a){return a.length}}
W.e8.prototype={
dm:function(a,b,c){return a.send(b,c)},
B:function(a,b){return a.send(b)}}
W.bb.prototype={}
W.T.prototype={$iso:1}
W.e9.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isk:1,
$ask:function(){return[W.T]},
$isc:1,
$asc:function(){return[W.T]},
$ism:1,
$asm:function(){return[W.T]},
$isb:1,
$asb:function(){return[W.T]}}
W.ej.prototype={$isa:1}
W.r.prototype={
k:function(a){var t=a.nodeValue
return t==null?this.c2(a):t},
$iso:1}
W.cx.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isk:1,
$ask:function(){return[W.r]},
$isc:1,
$asc:function(){return[W.r]},
$ism:1,
$asm:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.el.prototype={$isa:1}
W.en.prototype={
gj:function(a){return a.length}}
W.U.prototype={$iso:1,
gj:function(a){return a.length}}
W.ep.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isk:1,
$ask:function(){return[W.U]},
$isc:1,
$asc:function(){return[W.U]},
$ism:1,
$asm:function(){return[W.U]},
$isb:1,
$asb:function(){return[W.U]}}
W.es.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.et.prototype={
B:function(a,b){return a.send(b)}}
W.eC.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
W.cC.prototype={
B:function(a,b){return a.send(b)}}
W.eF.prototype={
gj:function(a){return a.length}}
W.eI.prototype={$isa:1}
W.V.prototype={$iso:1}
W.eJ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isk:1,
$ask:function(){return[W.V]},
$isc:1,
$asc:function(){return[W.V]},
$ism:1,
$asm:function(){return[W.V]},
$isb:1,
$asb:function(){return[W.V]}}
W.W.prototype={$iso:1}
W.eK.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isk:1,
$ask:function(){return[W.W]},
$isc:1,
$asc:function(){return[W.W]},
$ism:1,
$asm:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.X.prototype={$iso:1,
gj:function(a){return a.length}}
W.eO.prototype={
h:function(a,b){return this.ct(a,b)},
gj:function(a){return a.length},
ct:function(a,b){return a.getItem(b)}}
W.L.prototype={$iso:1}
W.a1.prototype={}
W.Y.prototype={$iso:1}
W.M.prototype={$iso:1}
W.eU.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isk:1,
$ask:function(){return[W.M]},
$isc:1,
$asc:function(){return[W.M]},
$ism:1,
$asm:function(){return[W.M]},
$isb:1,
$asb:function(){return[W.M]}}
W.eV.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isk:1,
$ask:function(){return[W.Y]},
$isc:1,
$asc:function(){return[W.Y]},
$ism:1,
$asm:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.eW.prototype={
gj:function(a){return a.length}}
W.Z.prototype={$iso:1}
W.f_.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isk:1,
$ask:function(){return[W.Z]},
$isc:1,
$asc:function(){return[W.Z]},
$ism:1,
$asm:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.f0.prototype={
gj:function(a){return a.length}}
W.aQ.prototype={}
W.f2.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
W.f8.prototype={
k:function(a){return String(a)},
$isa:1}
W.fa.prototype={
gj:function(a){return a.length}}
W.fd.prototype={
gj:function(a){return a.length}}
W.fe.prototype={
B:function(a,b){return a.send(b)}}
W.bm.prototype={
gcE:function(a){var t,s
t=P.K
s=new P.aE(0,$.y,null,[t])
this.cr(a)
this.cz(a,W.ks(new W.ff(new P.fZ(s,[t]))))
return s},
cz:function(a,b){return a.requestAnimationFrame(H.cP(b,1))},
cr:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.ff.prototype={
$1:function(a){this.a.cJ(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.fg.prototype={$isa:1}
W.aC.prototype={$isa:1}
W.fn.prototype={
k:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
w:function(a,b){var t,s,r
if(b==null)return!1
t=J.v(b)
if(!t.$isC)return!1
s=a.left
r=t.gaw(b)
if(s==null?r==null:s===r){s=a.top
r=t.gay(b)
if(s==null?r==null:s===r){s=a.width
r=t.gO(b)
if(s==null?r==null:s===r){s=a.height
t=t.gN(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){var t,s,r,q
t=J.a5(a.left)
s=J.a5(a.top)
r=J.a5(a.width)
q=J.a5(a.height)
return W.iJ(W.aH(W.aH(W.aH(W.aH(0,t),s),r),q))},
$isC:1,
$asC:function(){},
gN:function(a){return a.height},
gaw:function(a){return a.left},
gay:function(a){return a.top},
gO:function(a){return a.width}}
W.cJ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isk:1,
$ask:function(){return[P.C]},
$isc:1,
$asc:function(){return[P.C]},
$ism:1,
$asm:function(){return[P.C]},
$isb:1,
$asb:function(){return[P.C]}}
W.fp.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isk:1,
$ask:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]},
$ism:1,
$asm:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.fq.prototype={$isa:1}
W.fr.prototype={
gN:function(a){return a.height},
gO:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fE.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isk:1,
$ask:function(){return[W.S]},
$isc:1,
$asc:function(){return[W.S]},
$ism:1,
$asm:function(){return[W.S]},
$isb:1,
$asb:function(){return[W.S]}}
W.fF.prototype={$isa:1}
W.cM.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isk:1,
$ask:function(){return[W.r]},
$isc:1,
$asc:function(){return[W.r]},
$ism:1,
$asm:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.fW.prototype={$isa:1}
W.fX.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isk:1,
$ask:function(){return[W.X]},
$isc:1,
$asc:function(){return[W.X]},
$ism:1,
$asm:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.fY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isk:1,
$ask:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$ism:1,
$asm:function(){return[W.L]},
$isb:1,
$asb:function(){return[W.L]}}
W.h0.prototype={$isa:1}
W.h1.prototype={$isa:1}
W.w.prototype={
gA:function(a){return new W.dG(a,this.gj(a),-1,null,[H.al(a,"w",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.dG.prototype={
q:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sb1(J.aW(this.a,t))
this.c=t
return!0}this.sb1(null)
this.c=s
return!1},
gt:function(){return this.d},
sb1:function(a){this.d=a}}
W.b1.prototype={$isc:1,
$asc:function(){return[W.Q]},
$isb:1,
$asb:function(){return[W.Q]}}
W.b2.prototype={$isc:1,
$asc:function(){return[W.V]},
$isb:1,
$asb:function(){return[W.V]}}
W.b3.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.b4.prototype={$isc:1,
$asc:function(){return[W.V]},
$isb:1,
$asb:function(){return[W.V]}}
W.b5.prototype={$isc:1,
$asc:function(){return[W.Q]},
$isb:1,
$asb:function(){return[W.Q]}}
W.b6.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.bI.prototype={}
W.c1.prototype={$isc:1,
$asc:function(){return[W.T]},
$isb:1,
$asb:function(){return[W.T]}}
W.bO.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.bL.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.bW.prototype={$isc:1,
$asc:function(){return[W.S]},
$isb:1,
$asb:function(){return[W.S]}}
W.bX.prototype={$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
W.bY.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.bZ.prototype={$isc:1,
$asc:function(){return[W.R]},
$isb:1,
$asb:function(){return[W.R]}}
W.c_.prototype={$isc:1,
$asc:function(){return[P.C]},
$isb:1,
$asb:function(){return[P.C]}}
W.bJ.prototype={$isc:1,
$asc:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.bM.prototype={$isc:1,
$asc:function(){return[W.L]},
$isb:1,
$asb:function(){return[W.L]}}
W.bP.prototype={$isc:1,
$asc:function(){return[W.M]},
$isb:1,
$asb:function(){return[W.M]}}
W.bQ.prototype={$isc:1,
$asc:function(){return[W.U]},
$isb:1,
$asb:function(){return[W.U]}}
W.bR.prototype={$isc:1,
$asc:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.bS.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.bU.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.c2.prototype={$isc:1,
$asc:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.c3.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.c4.prototype={$isc:1,
$asc:function(){return[W.M]},
$isb:1,
$asb:function(){return[W.M]}}
W.ce.prototype={$isc:1,
$asc:function(){return[W.T]},
$isb:1,
$asb:function(){return[W.T]}}
W.cf.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.cd.prototype={$isc:1,
$asc:function(){return[W.U]},
$isb:1,
$asb:function(){return[W.U]}}
W.ci.prototype={$isc:1,
$asc:function(){return[P.C]},
$isb:1,
$asb:function(){return[P.C]}}
W.cj.prototype={$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
W.ck.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cl.prototype={$isc:1,
$asc:function(){return[W.S]},
$isb:1,
$asb:function(){return[W.S]}}
W.c5.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.c6.prototype={$isc:1,
$asc:function(){return[W.L]},
$isb:1,
$asb:function(){return[W.L]}}
W.c8.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.cg.prototype={$isc:1,
$asc:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.ch.prototype={$isc:1,
$asc:function(){return[W.R]},
$isb:1,
$asb:function(){return[W.R]}}
P.h8.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.u,,]}}}
P.fO.prototype={}
P.C.prototype={$asC:null}
P.cX.prototype={$isa:1}
P.ar.prototype={$isa:1}
P.dj.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dk.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dl.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dm.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dn.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dp.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dq.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dr.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ds.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dt.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.du.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dv.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dw.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dx.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
P.dy.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dz.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
P.dA.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dB.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dF.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dH.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.a0.prototype={}
P.ah.prototype={$isa:1}
P.dN.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.a9.prototype={$iso:1}
P.dX.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.x(b,a,null,null,null))
return this.L(a,b)},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
L:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.a9]},
$isb:1,
$asb:function(){return[P.a9]}}
P.e4.prototype={$isa:1}
P.e5.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ab.prototype={$iso:1}
P.ek.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.x(b,a,null,null,null))
return this.L(a,b)},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
L:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ab]},
$isb:1,
$asb:function(){return[P.ab]}}
P.em.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eq.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.er.prototype={
gj:function(a){return a.length}}
P.ew.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ex.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eE.prototype={$isa:1}
P.eP.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.x(b,a,null,null,null))
return this.L(a,b)},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
L:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
P.D.prototype={$isa:1}
P.eQ.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eR.prototype={$isa:1}
P.cG.prototype={}
P.eT.prototype={$isa:1}
P.bk.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ac.prototype={$iso:1}
P.f1.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.x(b,a,null,null,null))
return this.L(a,b)},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
L:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ac]},
$isb:1,
$asb:function(){return[P.ac]}}
P.f9.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fb.prototype={$isa:1}
P.fc.prototype={$isa:1}
P.bo.prototype={$isa:1}
P.fT.prototype={$isa:1}
P.fU.prototype={$isa:1}
P.fV.prototype={$isa:1}
P.bV.prototype={$isc:1,
$asc:function(){return[P.a9]},
$isb:1,
$asb:function(){return[P.a9]}}
P.bN.prototype={$isc:1,
$asc:function(){return[P.ab]},
$isb:1,
$asb:function(){return[P.ab]}}
P.bK.prototype={$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
P.bT.prototype={$isc:1,
$asc:function(){return[P.ac]},
$isb:1,
$asb:function(){return[P.ac]}}
P.c7.prototype={$isc:1,
$asc:function(){return[P.ac]},
$isb:1,
$asb:function(){return[P.ac]}}
P.c9.prototype={$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
P.ca.prototype={$isc:1,
$asc:function(){return[P.ab]},
$isb:1,
$asb:function(){return[P.ab]}}
P.cb.prototype={$isc:1,
$asc:function(){return[P.a9]},
$isb:1,
$asb:function(){return[P.a9]}}
P.d0.prototype={
gj:function(a){return a.length}}
P.eA.prototype={
b9:function(a,b){return a.activeTexture(b)},
bb:function(a,b,c){return a.attachShader(b,c)},
bc:function(a,b,c){return a.bindBuffer(b,c)},
bd:function(a,b,c){return a.bindTexture(b,c)},
be:function(a,b){return a.blendEquation(b)},
bf:function(a,b,c){return a.blendFunc(b,c)},
bg:function(a,b,c,d){return a.bufferData(b,c,d)},
bh:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bi:function(a,b){return a.compileShader(b)},
bj:function(a){return a.createBuffer()},
bk:function(a){return a.createProgram()},
bl:function(a,b){return a.createShader(b)},
bm:function(a,b){return a.depthMask(b)},
bn:function(a,b){return a.disable(b)},
bo:function(a,b,c,d){return a.drawArrays(b,c,d)},
bp:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bq:function(a,b){return a.enable(b)},
br:function(a,b){return a.enableVertexAttribArray(b)},
ac:function(a){return P.h9(a.getContextAttributes())},
az:function(a,b){return a.getProgramInfoLog(b)},
aA:function(a,b,c){return a.getProgramParameter(b,c)},
aB:function(a,b){return a.getShaderInfoLog(b)},
aC:function(a,b,c){return a.getShaderParameter(b,c)},
aD:function(a,b,c){return a.getUniformLocation(b,c)},
bu:function(a,b){return a.linkProgram(b)},
aG:function(a,b,c){return a.shaderSource(b,c)},
aI:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bC:function(a,b,c){return a.uniform1f(b,c)},
bD:function(a,b,c){return a.uniform1i(b,c)},
bE:function(a,b,c){return a.uniform2fv(b,c)},
bF:function(a,b,c){return a.uniform3fv(b,c)},
bG:function(a,b,c){return a.uniform4fv(b,c)},
bH:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bI:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bK:function(a,b){return a.useProgram(b)},
bM:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)}}
P.eB.prototype={
cF:function(a,b){return a.beginTransformFeedback(b)},
cI:function(a,b){return a.bindVertexArray(b)},
cL:function(a){return a.createVertexArray()},
cR:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
cS:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
cT:function(a){return a.endTransformFeedback()},
dj:function(a,b,c,d){this.cB(a,b,c,d)
return},
cB:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dk:function(a,b,c){return a.vertexAttribDivisor(b,c)},
b9:function(a,b){return a.activeTexture(b)},
bb:function(a,b,c){return a.attachShader(b,c)},
bc:function(a,b,c){return a.bindBuffer(b,c)},
bd:function(a,b,c){return a.bindTexture(b,c)},
be:function(a,b){return a.blendEquation(b)},
bf:function(a,b,c){return a.blendFunc(b,c)},
bg:function(a,b,c,d){return a.bufferData(b,c,d)},
bh:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bi:function(a,b){return a.compileShader(b)},
bj:function(a){return a.createBuffer()},
bk:function(a){return a.createProgram()},
bl:function(a,b){return a.createShader(b)},
bm:function(a,b){return a.depthMask(b)},
bn:function(a,b){return a.disable(b)},
bo:function(a,b,c,d){return a.drawArrays(b,c,d)},
bp:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bq:function(a,b){return a.enable(b)},
br:function(a,b){return a.enableVertexAttribArray(b)},
ac:function(a){return P.h9(a.getContextAttributes())},
az:function(a,b){return a.getProgramInfoLog(b)},
aA:function(a,b,c){return a.getProgramParameter(b,c)},
aB:function(a,b){return a.getShaderInfoLog(b)},
aC:function(a,b,c){return a.getShaderParameter(b,c)},
aD:function(a,b,c){return a.getUniformLocation(b,c)},
bu:function(a,b){return a.linkProgram(b)},
aG:function(a,b,c){return a.shaderSource(b,c)},
aI:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bC:function(a,b,c){return a.uniform1f(b,c)},
bD:function(a,b,c){return a.uniform1i(b,c)},
bE:function(a,b,c){return a.uniform2fv(b,c)},
bF:function(a,b,c){return a.uniform3fv(b,c)},
bG:function(a,b,c){return a.uniform4fv(b,c)},
bH:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bI:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bK:function(a,b){return a.useProgram(b)},
bM:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
$isa:1}
P.h_.prototype={$isa:1}
P.eL.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.x(b,a,null,null,null))
return P.h9(this.cu(a,b))},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
cu:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.ai]},
$isb:1,
$asb:function(){return[P.ai]}}
P.c0.prototype={$isc:1,
$asc:function(){return[P.ai]},
$isb:1,
$asb:function(){return[P.ai]}}
P.cc.prototype={$isc:1,
$asc:function(){return[P.ai]},
$isb:1,
$asb:function(){return[P.ai]}}
G.ea.prototype={}
G.f6.prototype={
k:function(a){var t,s,r,q
t=H.H(["{"+new H.ak(H.hd(this),null).k(0)+"}["+this.a+"]"],[P.u])
for(s=this.d,r=s.gF(s),r=r.gA(r);r.q();){q=r.gt()
C.a.l(t,H.i(q)+": "+H.i(s.h(0,q)))}return C.a.a2(t,"\n")}}
G.d5.prototype={
bs:function(a,b,c){J.jk(this.a,b)
if(c>0)J.jA(this.a,b,c)}}
G.dC.prototype={}
G.dK.prototype={
aL:function(a){var t=this.e
H.d(!t.C(0,a))
H.d(C.d.c_(a,"a"))
switch($.$get$O().h(0,a).a){case"vec2":t.i(0,a,H.H([],[T.N]))
break
case"vec3":t.i(0,a,H.H([],[T.J]))
break
case"vec4":t.i(0,a,H.H([],[T.bl]))
break
case"float":t.i(0,a,H.H([],[P.G]))
break
case"uvec4":t.i(0,a,H.H([],[[P.b,P.n]]))
break
default:if(H.aI(!1))H.aU("unknown type for "+a)}},
c6:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new Float32Array(2)
o=q.a
p[1]=o[1]
p[0]=o[0]
s.l(t,new T.N(p))}},
c7:function(a,b){var t,s,r,q,p
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new T.J(new Float32Array(3))
p.aE(q)
s.l(t,p)}},
c9:function(a){var t,s,r,q,p
H.d(!0)
t=this.d
s=t.length
C.a.l(this.c,new G.dC(s,s+1,s+2,s+3))
for(r=0;r<4;++r){q=a[r]
p=new T.J(new Float32Array(3))
p.aE(q)
C.a.l(t,p)}},
cc:function(){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=t.length
H.d(s>0)
s=new Array(t.length*6)
s.fixed$length=Array
r=H.H(s,[P.n])
for(s=this.b,q=0,p=0;!1;++p){o=s[p]
r[q]=o.gdq(o)
r[q+1]=o.gdr(o)
r[q+2]=o.gds(o)
q+=3}for(s=t.length,p=0;n=t.length,p<n;n===s||(0,H.aJ)(t),++p){m=t[p]
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
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gF(s),r=r.gA(r);r.q();){q=r.gt()
p=$.$get$O().h(0,q).a
C.a.l(t,H.i(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.a2(t," ")}}
G.e7.prototype={
aK:function(a,b,c){var t,s
if(C.d.ag(a,0)===105){if(H.aI(C.b.af(b.length,c)===this.z))H.aU("ChangeAttribute "+this.z)}else H.d(C.b.af(b.length,c)===(this.ch.length/3|0))
this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.cS(t.a,34962,s)
J.i0(t.a,34962,b,35048)},
cd:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
T:function(a,b,c){var t,s,r,q,p,o
t=J.hX(a,0)===105
if(t&&this.z===0)this.z=C.b.af(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.hw(r.a))
this.aK(a,b,c)
q=$.$get$O().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.aI(p.C(0,a)))H.aU("unexpected attribute "+a)
o=p.h(0,a)
J.cT(r.a,this.e)
r.bs(0,o,t?1:0)
s=s.h(0,a)
p=q.aM()
J.cS(r.a,34962,s)
J.i6(r.a,o,p,5126,!1,0,0)},
k:function(a){var t,s,r
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,t=t.gF(t),t=t.gA(t);t.q();){r=t.gt()
C.a.l(s,H.i(r)+":"+this.cy.h(0,r).length)}return"MESH["+this.a+"] "+C.a.a2(s,"  ")},
sak:function(a){this.cx=a}}
G.ez.prototype={
cj:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gF(s),s=s.gA(s);s.q();){q=s.gt()
if(!t.C(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bp(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.q();){q=s.d
if(!t.Y(0,q))C.a.l(r,q)}return r},
ck:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gF(b),s=s.gA(s),r=this.d,q=this.y,p=this.z,o=0;s.q();){n=s.gt()
switch(J.hX(n,0)){case 117:if(q.C(0,n)){m=b.h(0,n)
if(p.C(0,n))H.hr("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$O().h(0,n)
if(l==null)H.z("unknown "+n)
H.d(q.C(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.hz(r.a,k,m)
break
case"float":if(l.c===0)J.jw(r.a,k,m)
break
case"mat4":if(l.c===0){j=C.e.ga6(H.an(m,"$isl0"))
J.jy(r.a,k,!1,j)}else if(H.aI(!1))H.aU("bad unform: "+n)
break
case"mat3":if(l.c===0){j=C.e.ga6(H.an(m,"$isl_"))
J.jx(r.a,k,!1,j)}else if(H.aI(!1))H.aU("bad unform: "+n)
break
case"vec4":if(l.c===0){j=C.e.ga6(H.an(m,"$isbl"))
J.i5(r.a,k,j)}else J.i5(r.a,k,m)
break
case"vec3":if(l.c===0){j=C.e.ga6(H.an(m,"$isJ"))
J.i4(r.a,k,j)}else J.i4(r.a,k,m)
break
case"vec2":if(l.c===0){j=H.an(m,"$isN").a
J.i3(r.a,k,j)}else J.i3(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.K(33984,this.ch)
J.hY(r.a,j)
j=H.an(m,"$isk8").ce()
J.i_(r.a,3553,j)
j=this.ch
J.hz(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.K(33984,this.ch)
J.hY(r.a,j)
j=H.an(m,"$isk8").ce()
J.i_(r.a,34067,j)
j=this.ch
J.hz(r.a,k,j)
this.ch=this.ch+1
break
default:H.hr("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":if(J.A(m,!0))J.cU(r.a,2929)
else J.je(r.a,2929)
break
case"cStencilFunc":H.an(m,"$isl2")
m.gcX()
J.cU(r.a,2960)
j=m.gcX()
i=m.gdv(m)
h=m.gdu(m)
J.ju(r.a,j,i,h)
break
case"cDepthWrite":J.jd(r.a,m)
break
case"cBlendEquation":H.an(m,"$isl1")
m.gcU()
J.cU(r.a,3042)
j=m.gdn()
i=m.gdt()
J.j8(r.a,j,i)
i=m.gcU()
J.j7(r.a,i)
break}++o
break}}s=Date.now()
""+o
new P.at(1000*(s-new P.b_(t,!1).a)).k(0)},
cb:function(a,b,c){var t,s,r,q,p,o,n,m,l
Date.now()
t=this.d
s=this.r
J.jz(t.a,s)
this.ch=0
this.z.H(0)
for(r=0;r<1;++r){q=b[r]
this.ck(q.a,q.d)}s=this.Q
s.H(0)
for(p=a.cy,p=p.gF(p),p=p.gA(p);p.q();)s.l(0,p.gt())
o=this.cj()
if(o.length!==0)P.ao("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.i(o)))
J.cT(a.d.a,a.e)
n=this.e.f.length>0
s=a.f
p=a.cd()
m=a.Q
l=a.z
t.toString
if(n)J.j6(t.a,s)
if(m!==-1)if(l>1)J.ji(t.a,s,p,m,0,l)
else J.jh(t.a,s,p,m,0)
else if(l>1)J.jg(t.a,s,0,p,l)
else J.jf(t.a,s,0,p)
if(n)J.jl(t.a)},
ca:function(a,b){return this.cb(a,b,null)},
cg:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.e
r=s.b
q=this.f
p=q.b
o=s.f
n=J.jb(t.a)
m=G.iH(t.a,35633,r)
J.hZ(t.a,n,m)
l=G.iH(t.a,35632,p)
J.hZ(t.a,n,l)
if(o.length>0)J.jv(t.a,n,o,35980)
J.jr(t.a,n)
if(!J.jq(t.a,n,35714))H.z(J.jp(t.a,n))
this.r=n
this.scm(0,P.jV(s.c,null))
for(s=s.d,r=s.length,p=this.y,k=0;k<s.length;s.length===r||(0,H.aJ)(s),++k){j=s[k]
o=this.r
p.i(0,j,J.i2(t.a,o,j))}for(s=q.d,r=s.length,k=0;k<s.length;s.length===r||(0,H.aJ)(s),++k){j=s[k]
q=this.r
p.i(0,j,J.i2(t.a,q,j))}},
scm:function(a,b){this.x=b}}
G.h.prototype={
aM:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.cD.prototype={
c5:function(a){var t,s,r,q
H.d(this.b==null)
for(t=this.c,s=this.x,r=0;r<1;++r){q=a[r]
H.d($.$get$O().C(0,q))
H.d(!C.a.Y(t,q))
C.a.l(t,q)
s.i(0,q,this.r);++this.r}C.a.aH(t)},
c8:function(a){var t,s,r
H.d(this.b==null)
for(t=this.d,s=0;s<2;++s){r=a[s]
if(H.aI($.$get$O().C(0,r)))H.aU("missing uniform "+r)
H.d(!C.a.Y(t,r))
C.a.l(t,r)}C.a.aH(t)},
aN:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.aJ)(t),++o){n=t[o]
m=$.$get$O().h(0,n)
C.a.l(q,"layout (location="+H.i(p.h(0,n))+") in "+m.a+" "+H.i(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,o=0;!1;++o){k=t[o]
m=$.$get$O().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.i(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.aJ)(t),++o){k=t[o]
m=$.$get$O().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.i(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.aJ)(t),++o){k=t[o]
m=$.$get$O().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.i(k)+j+";")}C.a.l(q,"")
if(a)C.a.l(q,"void main(void) {")
C.a.cC(q,b)
if(a)C.a.l(q,"}")
return C.a.a2(q,"\n")}}
A.he.prototype={
$2:function(a,b){var t=536870911&a+J.a5(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.n,P.o]}}}
T.N.prototype={
k:function(a){var t=this.a
return"["+H.i(t[0])+","+H.i(t[1])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.N){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.iZ(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.J.prototype={
ga6:function(a){return this.a},
S:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
aE:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.i(t[0])+","+H.i(t[1])+","+H.i(t[2])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.J){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.iZ(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return Math.sqrt(s*s+r*r+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gJ:function(a){return this.a[2]}}
T.bl.prototype={}
L.hp.prototype={
$1:function(a){var t,s,r,q,p
t=this.d
s=t.d
s.i(0,"uTime",a/1000)
r=C.b.K(0,this.a)
q=C.b.K(0,this.b)
p=new Float32Array(H.ae(2))
p[0]=r
p[1]=q
s.i(0,"uCanvasSize",new T.N(p))
this.c.ca(this.e,[t])
C.P.gcE(window).bA(this)},
$S:function(){return{func:1,v:true,args:[P.K]}}}
J.a.prototype.c2=J.a.prototype.k
J.ba.prototype.c3=J.ba.prototype.k;(function installTearOffs(){installTearOff(H.aF.prototype,"gd6",0,0,0,null,["$0"],["ab"],0)
installTearOff(H.a2.prototype,"gbR",0,0,0,null,["$1"],["D"],2)
installTearOff(H.aD.prototype,"gcN",0,0,0,null,["$1"],["I"],2)
installTearOff(P,"ku",1,0,0,null,["$1"],["kd"],1)
installTearOff(P,"kv",1,0,0,null,["$1"],["ke"],1)
installTearOff(P,"kw",1,0,0,null,["$1"],["kf"],1)
installTearOff(P,"iQ",1,0,0,null,["$0"],["kr"],0)
installTearOff(P,"kz",1,0,0,null,["$2"],["jG"],3)
installTearOff(L,"iY",1,0,0,null,["$0"],["kM"],0)})();(function inheritance(){inherit(P.o,null)
var t=P.o
inherit(H.hF,t)
inherit(J.a,t)
inherit(J.d_,t)
inherit(P.a7,t)
inherit(H.cp,t)
inherit(P.cm,t)
inherit(H.bG,t)
inherit(H.aL,t)
inherit(H.fM,t)
inherit(H.aF,t)
inherit(H.fs,t)
inherit(H.aG,t)
inherit(H.fL,t)
inherit(H.fm,t)
inherit(H.aP,t)
inherit(H.eX,t)
inherit(H.a6,t)
inherit(H.a2,t)
inherit(H.aD,t)
inherit(H.ey,t)
inherit(H.f3,t)
inherit(P.aM,t)
inherit(H.cN,t)
inherit(H.ak,t)
inherit(H.a8,t)
inherit(H.dY,t)
inherit(H.e_,t)
inherit(P.fo,t)
inherit(P.cK,t)
inherit(P.aE,t)
inherit(P.cI,t)
inherit(P.aK,t)
inherit(P.h2,t)
inherit(P.eH,t)
inherit(P.fJ,t)
inherit(P.bp,t)
inherit(P.q,t)
inherit(P.fK,t)
inherit(P.bv,t)
inherit(P.B,t)
inherit(P.b_,t)
inherit(P.K,t)
inherit(P.at,t)
inherit(P.cF,t)
inherit(P.fu,t)
inherit(P.di,t)
inherit(P.b,t)
inherit(P.ai,t)
inherit(P.az,t)
inherit(P.eM,t)
inherit(P.u,t)
inherit(P.bj,t)
inherit(W.d7,t)
inherit(W.w,t)
inherit(W.dG,t)
inherit(P.fO,t)
inherit(G.ea,t)
inherit(G.d5,t)
inherit(G.dC,t)
inherit(G.dK,t)
inherit(G.h,t)
inherit(G.cD,t)
inherit(T.N,t)
inherit(T.J,t)
inherit(T.bl,t)
t=J.a
inherit(J.dT,t)
inherit(J.co,t)
inherit(J.ba,t)
inherit(J.au,t)
inherit(J.b9,t)
inherit(J.av,t)
inherit(H.bc,t)
inherit(H.aO,t)
inherit(W.f,t)
inherit(W.Q,t)
inherit(W.by,t)
inherit(W.d3,t)
inherit(W.t,t)
inherit(W.bI,t)
inherit(W.d9,t)
inherit(W.da,t)
inherit(W.db,t)
inherit(W.bC,t)
inherit(W.bD,t)
inherit(W.bX,t)
inherit(W.de,t)
inherit(W.bZ,t)
inherit(W.S,t)
inherit(W.dL,t)
inherit(W.bU,t)
inherit(W.e1,t)
inherit(W.e6,t)
inherit(W.T,t)
inherit(W.c1,t)
inherit(W.ej,t)
inherit(W.bO,t)
inherit(W.el,t)
inherit(W.aQ,t)
inherit(W.U,t)
inherit(W.bQ,t)
inherit(W.a1,t)
inherit(W.W,t)
inherit(W.bR,t)
inherit(W.X,t)
inherit(W.eO,t)
inherit(W.L,t)
inherit(W.bP,t)
inherit(W.eW,t)
inherit(W.Z,t)
inherit(W.bJ,t)
inherit(W.f0,t)
inherit(W.f8,t)
inherit(W.fd,t)
inherit(W.fn,t)
inherit(W.c_,t)
inherit(W.bY,t)
inherit(W.bW,t)
inherit(W.bL,t)
inherit(W.bS,t)
inherit(W.bM,t)
inherit(W.h0,t)
inherit(W.h1,t)
inherit(P.a9,t)
inherit(P.bV,t)
inherit(P.ab,t)
inherit(P.bN,t)
inherit(P.eq,t)
inherit(P.er,t)
inherit(P.ew,t)
inherit(P.bK,t)
inherit(P.ac,t)
inherit(P.bT,t)
inherit(P.fc,t)
inherit(P.d0,t)
inherit(P.eA,t)
inherit(P.eB,t)
inherit(P.h_,t)
inherit(P.c0,t)
t=J.ba
inherit(J.eo,t)
inherit(J.aB,t)
inherit(J.aw,t)
inherit(J.hE,J.au)
t=J.b9
inherit(J.cn,t)
inherit(J.dU,t)
t=P.a7
inherit(H.c,t)
inherit(H.cq,t)
t=H.c
inherit(H.aN,t)
inherit(H.dZ,t)
inherit(H.dh,H.cq)
inherit(H.e2,P.cm)
t=H.aN
inherit(H.cr,t)
inherit(P.e0,t)
t=H.aL
inherit(H.ht,t)
inherit(H.hu,t)
inherit(H.fH,t)
inherit(H.ft,t)
inherit(H.dQ,t)
inherit(H.dR,t)
inherit(H.fN,t)
inherit(H.eY,t)
inherit(H.eZ,t)
inherit(H.hv,t)
inherit(H.hj,t)
inherit(H.hk,t)
inherit(H.hl,t)
inherit(H.hm,t)
inherit(H.hn,t)
inherit(H.eS,t)
inherit(H.dV,t)
inherit(H.hf,t)
inherit(H.hg,t)
inherit(H.hh,t)
inherit(P.fj,t)
inherit(P.fi,t)
inherit(P.fk,t)
inherit(P.fl,t)
inherit(P.fv,t)
inherit(P.fz,t)
inherit(P.fw,t)
inherit(P.fx,t)
inherit(P.fy,t)
inherit(P.fC,t)
inherit(P.fD,t)
inherit(P.fB,t)
inherit(P.fA,t)
inherit(P.h5,t)
inherit(P.fR,t)
inherit(P.fQ,t)
inherit(P.fS,t)
inherit(P.e3,t)
inherit(P.df,t)
inherit(P.dg,t)
inherit(W.ff,t)
inherit(P.h8,t)
inherit(A.he,t)
inherit(L.hp,t)
t=H.fm
inherit(H.aR,t)
inherit(H.br,t)
t=P.aM
inherit(H.cy,t)
inherit(H.dW,t)
inherit(H.f7,t)
inherit(H.f5,t)
inherit(H.d4,t)
inherit(H.eD,t)
inherit(P.bx,t)
inherit(P.cz,t)
inherit(P.ag,t)
inherit(P.p,t)
inherit(P.cH,t)
inherit(P.bi,t)
inherit(P.a_,t)
inherit(P.d8,t)
t=H.eS
inherit(H.eN,t)
inherit(H.aY,t)
inherit(H.fh,P.bx)
t=H.aO
inherit(H.eb,t)
inherit(H.ct,t)
t=H.ct
inherit(H.be,t)
inherit(H.bd,t)
inherit(H.bf,H.be)
inherit(H.cu,H.bf)
inherit(H.bg,H.bd)
inherit(H.cv,H.bg)
t=H.cu
inherit(H.cs,t)
inherit(H.ec,t)
t=H.cv
inherit(H.ed,t)
inherit(H.ee,t)
inherit(H.ef,t)
inherit(H.eg,t)
inherit(H.eh,t)
inherit(H.cw,t)
inherit(H.ei,t)
inherit(P.fZ,P.fo)
inherit(P.fP,P.h2)
inherit(P.cL,H.a8)
inherit(P.eG,P.eH)
inherit(P.fG,P.eG)
inherit(P.fI,P.fG)
t=P.K
inherit(P.G,t)
inherit(P.n,t)
t=P.ag
inherit(P.cB,t)
inherit(P.dO,t)
t=W.f
inherit(W.r,t)
inherit(W.b1,t)
inherit(W.d6,t)
inherit(W.dE,t)
inherit(W.b8,t)
inherit(W.bb,t)
inherit(W.et,t)
inherit(W.cC,t)
inherit(W.eI,t)
inherit(W.V,t)
inherit(W.b2,t)
inherit(W.Y,t)
inherit(W.M,t)
inherit(W.b3,t)
inherit(W.fa,t)
inherit(W.fe,t)
inherit(W.bm,t)
inherit(W.fg,t)
inherit(W.aC,t)
inherit(W.fW,t)
t=W.r
inherit(W.bE,t)
inherit(W.as,t)
inherit(W.b0,t)
inherit(W.bB,t)
inherit(W.fq,t)
t=W.bE
inherit(W.j,t)
inherit(P.D,t)
t=W.j
inherit(W.cY,t)
inherit(W.cZ,t)
inherit(W.d2,t)
inherit(W.bz,t)
inherit(W.dI,t)
inherit(W.dP,t)
inherit(W.eF,t)
inherit(W.fF,t)
inherit(W.b5,W.b1)
inherit(W.d1,W.b5)
inherit(W.aZ,W.bI)
inherit(W.dc,W.bC)
inherit(W.cj,W.bX)
inherit(W.dd,W.cj)
inherit(W.R,W.by)
inherit(W.ch,W.bZ)
inherit(W.dD,W.ch)
inherit(W.cf,W.bU)
inherit(W.b7,W.cf)
inherit(W.bH,W.b0)
inherit(W.dM,W.b8)
inherit(W.e8,W.bb)
inherit(W.ce,W.c1)
inherit(W.e9,W.ce)
inherit(W.c3,W.bO)
inherit(W.cx,W.c3)
t=W.aQ
inherit(W.en,t)
inherit(W.eC,t)
inherit(W.f2,t)
inherit(W.cd,W.bQ)
inherit(W.ep,W.cd)
inherit(W.es,W.a1)
inherit(W.b4,W.b2)
inherit(W.eJ,W.b4)
inherit(W.c2,W.bR)
inherit(W.eK,W.c2)
inherit(W.c4,W.bP)
inherit(W.eU,W.c4)
inherit(W.b6,W.b3)
inherit(W.eV,W.b6)
inherit(W.cg,W.bJ)
inherit(W.f_,W.cg)
inherit(W.ci,W.c_)
inherit(W.cJ,W.ci)
inherit(W.ck,W.bY)
inherit(W.fp,W.ck)
inherit(W.fr,W.bD)
inherit(W.cl,W.bW)
inherit(W.fE,W.cl)
inherit(W.c8,W.bL)
inherit(W.cM,W.c8)
inherit(W.c5,W.bS)
inherit(W.fX,W.c5)
inherit(W.c6,W.bM)
inherit(W.fY,W.c6)
inherit(P.C,P.fO)
t=P.D
inherit(P.ah,t)
inherit(P.ar,t)
inherit(P.dj,t)
inherit(P.dk,t)
inherit(P.dl,t)
inherit(P.dm,t)
inherit(P.dn,t)
inherit(P.dp,t)
inherit(P.dq,t)
inherit(P.dr,t)
inherit(P.ds,t)
inherit(P.dt,t)
inherit(P.du,t)
inherit(P.dv,t)
inherit(P.dw,t)
inherit(P.dx,t)
inherit(P.dy,t)
inherit(P.dz,t)
inherit(P.dA,t)
inherit(P.dB,t)
inherit(P.dF,t)
inherit(P.e4,t)
inherit(P.e5,t)
inherit(P.em,t)
inherit(P.eE,t)
inherit(P.eR,t)
inherit(P.fb,t)
inherit(P.bo,t)
inherit(P.fT,t)
inherit(P.fU,t)
inherit(P.fV,t)
t=P.ah
inherit(P.cX,t)
inherit(P.dH,t)
inherit(P.a0,t)
inherit(P.dN,t)
inherit(P.eQ,t)
inherit(P.cG,t)
inherit(P.f9,t)
inherit(P.cb,P.bV)
inherit(P.dX,P.cb)
inherit(P.ca,P.bN)
inherit(P.ek,P.ca)
inherit(P.ex,P.a0)
inherit(P.c9,P.bK)
inherit(P.eP,P.c9)
t=P.cG
inherit(P.eT,t)
inherit(P.bk,t)
inherit(P.c7,P.bT)
inherit(P.f1,P.c7)
inherit(P.cc,P.c0)
inherit(P.eL,P.cc)
t=G.ea
inherit(G.f6,t)
inherit(G.e7,t)
inherit(G.ez,t)
mixin(H.bd,P.q)
mixin(H.be,P.q)
mixin(H.bf,H.bG)
mixin(H.bg,H.bG)
mixin(W.b1,P.q)
mixin(W.b2,P.q)
mixin(W.b3,P.q)
mixin(W.b4,W.w)
mixin(W.b5,W.w)
mixin(W.b6,W.w)
mixin(W.bI,W.d7)
mixin(W.c1,P.q)
mixin(W.bO,P.q)
mixin(W.bL,P.q)
mixin(W.bW,P.q)
mixin(W.bX,P.q)
mixin(W.bY,P.q)
mixin(W.bZ,P.q)
mixin(W.c_,P.q)
mixin(W.bJ,P.q)
mixin(W.bM,P.q)
mixin(W.bP,P.q)
mixin(W.bQ,P.q)
mixin(W.bR,P.q)
mixin(W.bS,P.q)
mixin(W.bU,P.q)
mixin(W.c2,W.w)
mixin(W.c3,W.w)
mixin(W.c4,W.w)
mixin(W.ce,W.w)
mixin(W.cf,W.w)
mixin(W.cd,W.w)
mixin(W.ci,W.w)
mixin(W.cj,W.w)
mixin(W.ck,W.w)
mixin(W.cl,W.w)
mixin(W.c5,W.w)
mixin(W.c6,W.w)
mixin(W.c8,W.w)
mixin(W.cg,W.w)
mixin(W.ch,W.w)
mixin(P.bV,P.q)
mixin(P.bN,P.q)
mixin(P.bK,P.q)
mixin(P.bT,P.q)
mixin(P.c7,W.w)
mixin(P.c9,W.w)
mixin(P.ca,W.w)
mixin(P.cb,W.w)
mixin(P.c0,P.q)
mixin(P.cc,W.w)})();(function constants(){C.l=W.bz.prototype
C.m=W.bH.prototype
C.n=J.a.prototype
C.a=J.au.prototype
C.b=J.cn.prototype
C.e=J.co.prototype
C.d=J.av.prototype
C.v=J.aw.prototype
C.w=H.cs.prototype
C.k=J.eo.prototype
C.f=J.aB.prototype
C.P=W.bm.prototype
C.c=new P.fP()
C.h=new P.at(0)
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
C.x=H.E("kT")
C.y=H.E("kU")
C.z=H.E("kV")
C.A=H.E("kW")
C.B=H.E("kX")
C.C=H.E("kY")
C.D=H.E("kZ")
C.E=H.E("il")
C.F=H.E("az")
C.G=H.E("u")
C.H=H.E("iE")
C.I=H.E("iF")
C.J=H.E("l3")
C.K=H.E("iG")
C.L=H.E("bv")
C.M=H.E("G")
C.N=H.E("n")
C.O=H.E("K")})();(function staticFields(){$.ip="$cachedFunction"
$.iq="$cachedInvocation"
$.ic=null
$.ia=null
$.hN=!1
$.hS=null
$.iN=null
$.j2=null
$.ha=null
$.hi=null
$.hT=null
$.aS=null
$.bs=null
$.bt=null
$.hO=!1
$.y=C.c
$.ih=0
$.iS=0})();(function lazyInitializers(){lazy($,"ig","$get$ig",function(){return H.iU("_$dart_dartClosure")})
lazy($,"hG","$get$hG",function(){return H.iU("_$dart_js")})
lazy($,"ij","$get$ij",function(){return H.jR()})
lazy($,"ik","$get$ik",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.ih
$.ih=t+1
t="expando$key$"+t}return new P.di(null,t,[P.n])})
lazy($,"it","$get$it",function(){return H.ad(H.f4({
toString:function(){return"$receiver$"}}))})
lazy($,"iu","$get$iu",function(){return H.ad(H.f4({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"iv","$get$iv",function(){return H.ad(H.f4(null))})
lazy($,"iw","$get$iw",function(){return H.ad(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"iA","$get$iA",function(){return H.ad(H.f4(void 0))})
lazy($,"iB","$get$iB",function(){return H.ad(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"iy","$get$iy",function(){return H.ad(H.iz(null))})
lazy($,"ix","$get$ix",function(){return H.ad(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"iD","$get$iD",function(){return H.ad(H.iz(void 0))})
lazy($,"iC","$get$iC",function(){return H.ad(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"hM","$get$hM",function(){return P.kc()})
lazy($,"bu","$get$bu",function(){return[]})
lazy($,"O","$get$O",function(){return P.ax(["cBlendEquation",new G.h("","",0),"cDepthWrite",new G.h("","",0),"cDepthTest",new G.h("","",0),"cStencilFunc",new G.h("","",0),"tPosition",new G.h("vec3","",0),"tSpeed",new G.h("vec3","",0),"tForce",new G.h("vec3","",0),"aColors",new G.h("vec3","per vertex color",0),"aColorAlpha",new G.h("vec4","per vertex color",0),"aPosition",new G.h("vec3","vertex coordinates",0),"aTexUV",new G.h("vec2","texture uvs",0),"aNormal",new G.h("vec3","vertex normals",0),"aBinormal",new G.h("vec3","vertex binormals",0),"aCenter",new G.h("vec4","for wireframe",0),"aPointSize",new G.h("float","",0),"aBoneIndex",new G.h("vec4","",0),"aBoneWeight",new G.h("vec4","",0),"aTangent",new G.h("vec3","vertex tangents",0),"aBitangent",new G.h("vec3","vertex btangents",0),"iaRotation",new G.h("vec4","",0),"iaTranslation",new G.h("vec3","",0),"iaScale",new G.h("vec3","",0),"vColor",new G.h("vec3","per vertex color",0),"vTexUV",new G.h("vec2","",0),"vLightWeighting",new G.h("vec3","",0),"vNormal",new G.h("vec3","",0),"vPosition",new G.h("vec3","vertex coordinates",0),"vPositionFromLight",new G.h("vec4","delta from light",0),"vCenter",new G.h("vec4","for wireframe",0),"vDepth",new G.h("float","depth for shadowmaps",0),"uTransformationMatrix",new G.h("mat4","",0),"uModelMatrix",new G.h("mat4","",0),"uNormalMatrix",new G.h("mat3","",0),"uConvolutionMatrix",new G.h("mat3","",0),"uPerspectiveViewMatrix",new G.h("mat4","",0),"uLightPerspectiveViewMatrix",new G.h("mat4","",0),"uShadowMap",new G.h("sampler2DShadow","",0),"uTexture",new G.h("sampler2D","",0),"uTexture2",new G.h("sampler2D","",0),"uTexture3",new G.h("sampler2D","",0),"uTexture4",new G.h("sampler2D","",0),"uSpecularMap",new G.h("sampler2D","",0),"uNormalMap",new G.h("sampler2D","",0),"uBumpMap",new G.h("sampler2D","",0),"uDepthMap",new G.h("sampler2D","",0),"uCubeTexture",new G.h("samplerCube","",0),"uAnimationTable",new G.h("sampler2D","",0),"uTime",new G.h("float","time since program start in sec",0),"uCameraNear",new G.h("float","",0),"uCameraFar",new G.h("float","",0),"uFogNear",new G.h("float","",0),"uFogFar",new G.h("float","",0),"uPointSize",new G.h("float","",0),"uScale",new G.h("float","",0),"uAngle",new G.h("float","",0),"uCanvasSize",new G.h("vec2","",0),"uCenter2",new G.h("vec2","",0),"uCutOff",new G.h("float","",0),"uShininess",new G.h("float","",0),"uShadowBias",new G.h("float","",0),"uOpacity",new G.h("float","",0),"uColor",new G.h("vec3","",0),"uAmbientDiffuse",new G.h("vec3","",0),"uColorEmissive",new G.h("vec3","",0),"uColorSpecular",new G.h("vec3","",0),"uColorDiffuse",new G.h("vec3","",0),"uColorAlpha",new G.h("vec4","",0),"uColorAlpha2",new G.h("vec4","",0),"uEyePosition",new G.h("vec3","",0),"uMaterial",new G.h("mat4","",0),"uRange",new G.h("vec2","",0),"uDirection",new G.h("vec2","",0),"uBoneMatrices",new G.h("mat4","",128),"uLightDescs",new G.h("mat4","",4),"uLightCount",new G.h("float","",0),"uLightTypes",new G.h("float","",4),"uBumpScale",new G.h("float","for bump maps",0),"uNormalScale",new G.h("float","for normal maps",0)])})
lazy($,"iX","$get$iX",function(){var t=new G.cD("SphericalGyroid",null,[],[],[],[],0,P.aa())
t.c5(["aPosition"])
H.d(t.b==null)
t.b=t.aN(!0,["gl_Position = vec4(aPosition, 1.0);"],null)
return t})
lazy($,"iW","$get$iW",function(){var t=new G.cD("SphericalGyroidF",null,[],[],[],[],0,P.aa())
t.c8(["uCanvasSize","uTime"])
H.d(t.b==null)
t.b=t.aN(!1,["#define MaxSteps 60\n#define MinimumDistance 0.01\n#define normalDistance     0.0002\n#define PI 3.141592\n#define FieldOfView 1.0\n#define FudgeFactor 0.8\n\n#define Ambient 0.35\n#define Diffuse 0.4\n#define Specular 0.08\n#define LightDir vec3(1.0,1.0,-0.65048)\n#define LightColor vec3(1.0,0.666667,0.6)\n#define LightDir2 vec3(1.0,-0.62886,1.0)\n#define LightColor2 vec3(0.9,0.8,1.0)\n\n#define time  (uTime + 38.0)\n\nvec2 rotate(vec2 v, float a) {\n  return vec2(cos(a)*v.x + sin(a)*v.y, -sin(a)*v.x + cos(a)*v.y);\n}\n\n// Two light source + env light\nvec3 getLight(in vec3 color, in vec3 normal, in vec3 dir, int mat) {\n  vec3 lightDir = normalize(LightDir);\n  float specular = pow(max(0.0,dot(lightDir,-reflect(lightDir, normal))),20.0); // Phong\n  float diffuse = max(0.0,dot(-normal, lightDir)); // Lambertian\n  \n  vec3 lightDir2 = normalize(LightDir2);\n  float specular2 = pow(max(0.0,dot(lightDir2,-reflect(lightDir2, normal))),20.0); // Phong\n  float diffuse2 = max(0.0,dot(-normal, lightDir2)); // Lambertian\n  \n  float a = pow(abs(dot(normal,dir)),2.0);\n  vec3 l = vec3(0.0);\n    \n  //if (mat < 2) { \n    //l+=(Specular*specular)*LightColor+(diffuse*Diffuse)*(LightColor*color) +\n    //(Specular*specular2)*LightColor2+(diffuse2*Diffuse)*(LightColor2*color);\n    //l+=textureCube(iChannel0, reflect(dir, normal)).xyz*Specular;\n  //} else {\n    l+= \n      //(diffuse*0.8)*(LightColor*color) \n      +(diffuse2*0.7)*(LightColor2*color);\n    \n  //}\n  return l*a*1.7;\n}\n\n\n\n// vec3 offset = vec3(1.0+0.2*(cos(time/5.7)),0.3+0.1*(cos(time/1.7)),1.).xzy;\n\n\nfloat DE2(vec3 z, out int mat, float scale) {\n float sphere = abs(length(z))-15.0;\n z*= scale;\n float base = (cos(z.x) * sin(z.y) + cos(z.y) * sin(z.z) + cos(z.z) * sin(z.x));\n float inverse = -base + (1.0+cos(time/4.0))*4.0;\n if (base>inverse) {\n    mat = (sphere>-0.1) ? 0 : 2;\n } else {\n   mat = (sphere>-0.1) ? 1 : 3;\n }\n return max(min(base,inverse),sphere);\n}\n\nfloat  DE(vec3 z, float scale) {\n  int i = 0;\n  return DE2(z, i, scale);\n}\n\n\n\n// Finite difference normal\nvec3 getNormal(in vec3 pos, float scale) {\n  vec3 e = vec3(0.0,normalDistance,0.0);\n\n  return normalize(vec3(\n      DE(pos+e.yxx, scale)-DE(pos-e.yxx, scale),\n      DE(pos+e.xyx, scale)-DE(pos-e.xyx, scale),\n      DE(pos+e.xxy, scale)-DE(pos-e.xxy, scale)));\n}\n\n// Solid color with a little bit of normal :-)\nvec3 getColor(vec3 normal, vec3 pos, int material) {\n  if (material == 0) {\n    return vec3(0.0,0.1,0.0); \n  } else if (material == 1) {\n    return vec3(1.0,0.0,0.0); \n  } else if (material == 2) {\n    return vec3(1.0)*length(pos)/10.0;\n  } \n  return vec3(1.0)*length(pos)/10.0;\n  \n}\n\n// Filmic tone mapping:\n// http://filmicgames.com/archives/75\nvec3 toneMap(in vec3 c) {\n  c = c*c; // <- So much for proper gamma correction :-)\n  vec3 x = max(vec3(0.),c-vec3(0.004));\n  c = (x*(6.2*x+.5))/(x*(6.2*x+1.7)+0.06);\n  return c;\n}\n\n// Pseudo-random number\n// From: lumina.sourceforge.net/Tutorials/Noise.html\nfloat rand(vec2 co){\n  return fract(cos(dot(co,vec2(4.898,7.23))) * 23421.631);\n}\n\nvec4 rayMarch(in vec3 from, in vec3 dir, float scale) {\n  // Add some noise to prevent banding\n  float totalDistance = rand(gl_FragCoord.xy+vec2(time));\n  \n  float distance;\n  int steps = 0;\n  vec3 pos;\n  for (int i=0; i < MaxSteps; i++) {\n    pos = from + totalDistance * dir;\n    distance = DE(pos, scale)*(0.7*scale);\n    totalDistance += distance;\n    if (distance < MinimumDistance) break;\n    steps = i;\n  }\n  if (steps == MaxSteps-1) {\n    return vec4(0.0);\n  }\n  \n  // 'AO' is based on number of steps.\n  // Try to smooth the count, to combat banding.\n  float smoothStep = float(steps) + distance/MinimumDistance;\n  float ao = 1.0-smoothStep/float(MaxSteps);\n\n  // Since our distance field is not signed,\n    // backstep when calc'ing normal\n  vec3 normal = getNormal(pos-dir*normalDistance*3.0, scale);\n\n  int material = 0;\n  DE2(pos, material, scale);\n  \n  vec3 color = getColor(normal, pos, material); \n  vec3 light = getLight(color, normal, dir, material);\n  return vec4(toneMap((color*Ambient+light)*ao),1.0);\n}\n\nfloat curve(float x) {\n  return cos(x);\n}\n\nvoid main(void)\n{ \n  float angle = time/5.0; \n  float scale = 0.8+(0.1*cos(time/3.0));\n\n  // Camera position (eye), and camera target\n  vec3 camPos =  19.0*vec3(1.0,0.5*curve(time*0.2),0.5*curve(7.0+0.3*time));\n  vec3 target = vec3(0.0);\n  vec3 camUp  = vec3(0.0,0.0,1.0);\n\n  // Calculate orthonormal camera reference system\n  vec3 camDir   = normalize(target-camPos); // direction for center ray\n  camUp = normalize(camUp-dot(camDir,camUp)*camDir); // orthogonalize\n  vec3 camRight = normalize(cross(camDir,camUp));\n  \n  vec2 coord =-1.0+2.0*gl_FragCoord.xy/uCanvasSize.xy;\n  coord.x *= uCanvasSize.x/uCanvasSize.y;\n   \n  // Get direction for this pixel\n  vec3 rayDir = normalize(camDir + (coord.x*camRight + coord.y*camUp)*FieldOfView);\n  \n  oFragColor = rayMarch(camPos, rayDir, scale);\n}\n\n"],null)
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
mangledGlobalNames:{n:"int",G:"double",K:"num",u:"String",bv:"bool",az:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:P.n,args:[P.B,P.B]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEvent:J.a,AnimationPlayerEvent:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,ApplicationCacheErrorEvent:J.a,AutocompleteErrorEvent:J.a,BarProp:J.a,BeforeInstallPromptEvent:J.a,BeforeUnloadEvent:J.a,BlobEvent:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,ClipboardEvent:J.a,CloseEvent:J.a,CompositionEvent:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CustomEvent:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceLightEvent:J.a,DeviceMotionEvent:J.a,DeviceOrientationEvent:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,ErrorEvent:J.a,Event:J.a,InputEvent:J.a,ExtendableEvent:J.a,ExtendableMessageEvent:J.a,FederatedCredential:J.a,FetchEvent:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FocusEvent:J.a,FontFace:J.a,FontFaceSetLoadEvent:J.a,FormData:J.a,GamepadButton:J.a,GamepadEvent:J.a,Geofencing:J.a,GeofencingEvent:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,HashChangeEvent:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,InstallEvent:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyboardEvent:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaEncryptedEvent:J.a,MediaError:J.a,MediaKeyMessageEvent:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaQueryListEvent:J.a,MediaSession:J.a,MediaStreamEvent:J.a,MediaStreamTrackEvent:J.a,MemoryInfo:J.a,MessageChannel:J.a,MessageEvent:J.a,Metadata:J.a,MIDIConnectionEvent:J.a,MIDIInputMap:J.a,MIDIMessageEvent:J.a,MIDIOutputMap:J.a,MouseEvent:J.a,DragEvent:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NotificationEvent:J.a,OffscreenCanvas:J.a,PageTransitionEvent:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PointerEvent:J.a,PopStateEvent:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PresentationConnectionAvailableEvent:J.a,PresentationConnectionCloseEvent:J.a,ProgressEvent:J.a,PromiseRejectionEvent:J.a,PushEvent:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,Range:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RelatedEvent:J.a,RTCCertificate:J.a,RTCDataChannelEvent:J.a,RTCDTMFToneChangeEvent:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCIceCandidateEvent:J.a,RTCPeerConnectionIceEvent:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,SecurityPolicyViolationEvent:J.a,Selection:J.a,ServicePort:J.a,ServicePortConnectEvent:J.a,ServiceWorkerMessageEvent:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechRecognitionError:J.a,SpeechRecognitionEvent:J.a,SpeechSynthesisEvent:J.a,SpeechSynthesisVoice:J.a,StorageEvent:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncEvent:J.a,SyncManager:J.a,TextEvent:J.a,TextMetrics:J.a,TouchEvent:J.a,TrackDefault:J.a,TrackEvent:J.a,TransitionEvent:J.a,WebKitTransitionEvent:J.a,TreeWalker:J.a,UIEvent:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WheelEvent:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,ResourceProgressEvent:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBConnectionEvent:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBVersionChangeEvent:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,SVGZoomEvent:J.a,AudioListener:J.a,AudioParam:J.a,AudioProcessingEvent:J.a,OfflineAudioCompletionEvent:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLContextEvent:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bc,ArrayBufferView:H.aO,DataView:H.eb,Float32Array:H.cs,Float64Array:H.ec,Int16Array:H.ed,Int32Array:H.ee,Int8Array:H.ef,Uint16Array:H.eg,Uint32Array:H.eh,Uint8ClampedArray:H.cw,CanvasPixelArray:H.cw,Uint8Array:H.ei,HTMLAudioElement:W.j,HTMLBRElement:W.j,HTMLBaseElement:W.j,HTMLButtonElement:W.j,HTMLContentElement:W.j,HTMLDListElement:W.j,HTMLDataListElement:W.j,HTMLDetailsElement:W.j,HTMLDialogElement:W.j,HTMLDivElement:W.j,HTMLEmbedElement:W.j,HTMLFieldSetElement:W.j,HTMLHRElement:W.j,HTMLHeadElement:W.j,HTMLHeadingElement:W.j,HTMLHtmlElement:W.j,HTMLIFrameElement:W.j,HTMLImageElement:W.j,HTMLKeygenElement:W.j,HTMLLIElement:W.j,HTMLLabelElement:W.j,HTMLLegendElement:W.j,HTMLLinkElement:W.j,HTMLMapElement:W.j,HTMLMediaElement:W.j,HTMLMenuElement:W.j,HTMLMenuItemElement:W.j,HTMLMetaElement:W.j,HTMLMeterElement:W.j,HTMLModElement:W.j,HTMLOListElement:W.j,HTMLObjectElement:W.j,HTMLOptGroupElement:W.j,HTMLOptionElement:W.j,HTMLOutputElement:W.j,HTMLParagraphElement:W.j,HTMLParamElement:W.j,HTMLPictureElement:W.j,HTMLPreElement:W.j,HTMLProgressElement:W.j,HTMLQuoteElement:W.j,HTMLScriptElement:W.j,HTMLShadowElement:W.j,HTMLSlotElement:W.j,HTMLSourceElement:W.j,HTMLSpanElement:W.j,HTMLStyleElement:W.j,HTMLTableCaptionElement:W.j,HTMLTableCellElement:W.j,HTMLTableDataCellElement:W.j,HTMLTableHeaderCellElement:W.j,HTMLTableColElement:W.j,HTMLTableElement:W.j,HTMLTableRowElement:W.j,HTMLTableSectionElement:W.j,HTMLTemplateElement:W.j,HTMLTextAreaElement:W.j,HTMLTitleElement:W.j,HTMLTrackElement:W.j,HTMLUListElement:W.j,HTMLUnknownElement:W.j,HTMLVideoElement:W.j,HTMLDirectoryElement:W.j,HTMLFontElement:W.j,HTMLFrameElement:W.j,HTMLMarqueeElement:W.j,HTMLElement:W.j,HTMLAnchorElement:W.cY,HTMLAreaElement:W.cZ,AudioTrack:W.Q,AudioTrackList:W.d1,Blob:W.by,HTMLBodyElement:W.d2,HTMLCanvasElement:W.bz,CanvasRenderingContext2D:W.d3,CDATASection:W.as,CharacterData:W.as,Comment:W.as,ProcessingInstruction:W.as,Text:W.as,CompositorWorker:W.d6,CSSCharsetRule:W.t,CSSFontFaceRule:W.t,CSSGroupingRule:W.t,CSSImportRule:W.t,CSSKeyframeRule:W.t,MozCSSKeyframeRule:W.t,WebKitCSSKeyframeRule:W.t,CSSKeyframesRule:W.t,MozCSSKeyframesRule:W.t,WebKitCSSKeyframesRule:W.t,CSSMediaRule:W.t,CSSNamespaceRule:W.t,CSSPageRule:W.t,CSSRule:W.t,CSSStyleRule:W.t,CSSSupportsRule:W.t,CSSViewportRule:W.t,CSSStyleDeclaration:W.aZ,MSStyleCSSProperties:W.aZ,CSS2Properties:W.aZ,DataTransferItemList:W.d9,DeviceAcceleration:W.da,XMLDocument:W.b0,Document:W.b0,DocumentFragment:W.bB,ShadowRoot:W.bB,DOMException:W.db,DOMPoint:W.dc,DOMPointReadOnly:W.bC,DOMRectReadOnly:W.bD,DOMStringList:W.dd,DOMTokenList:W.de,Element:W.bE,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BatteryManager:W.f,CanvasCaptureMediaStreamTrack:W.f,CrossOriginServiceWorkerClient:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MessagePort:W.f,MIDIAccess:W.f,NetworkInformation:W.f,Notification:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationReceiver:W.f,PresentationRequest:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,ServicePortCollection:W.f,ServiceWorkerContainer:W.f,ServiceWorkerRegistration:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioContext:W.f,webkitAudioContext:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioSourceNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OfflineAudioContext:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.R,FileList:W.dD,FileWriter:W.dE,HTMLFormElement:W.dI,Gamepad:W.S,History:W.dL,HTMLCollection:W.b7,HTMLFormControlsCollection:W.b7,HTMLOptionsCollection:W.b7,HTMLDocument:W.bH,XMLHttpRequest:W.dM,XMLHttpRequestUpload:W.b8,XMLHttpRequestEventTarget:W.b8,HTMLInputElement:W.dP,Location:W.e1,MediaList:W.e6,MIDIOutput:W.e8,MIDIInput:W.bb,MIDIPort:W.bb,MimeType:W.T,MimeTypeArray:W.e9,Navigator:W.ej,Attr:W.r,Node:W.r,NodeList:W.cx,RadioNodeList:W.cx,Path2D:W.el,Perspective:W.en,Plugin:W.U,PluginArray:W.ep,PositionValue:W.es,PresentationConnection:W.et,Rotation:W.eC,RTCDataChannel:W.cC,DataChannel:W.cC,HTMLSelectElement:W.eF,SharedWorker:W.eI,SourceBuffer:W.V,SourceBufferList:W.eJ,SpeechGrammar:W.W,SpeechGrammarList:W.eK,SpeechRecognitionResult:W.X,Storage:W.eO,CSSStyleSheet:W.L,StyleSheet:W.L,CalcLength:W.a1,KeywordValue:W.a1,LengthValue:W.a1,NumberValue:W.a1,SimpleLength:W.a1,TransformValue:W.a1,StyleValue:W.a1,TextTrack:W.Y,TextTrackCue:W.M,VTTCue:W.M,TextTrackCueList:W.eU,TextTrackList:W.eV,TimeRanges:W.eW,Touch:W.Z,TouchList:W.f_,TrackDefaultList:W.f0,Matrix:W.aQ,Skew:W.aQ,TransformComponent:W.aQ,Translation:W.f2,URL:W.f8,VideoTrackList:W.fa,VTTRegionList:W.fd,WebSocket:W.fe,Window:W.bm,DOMWindow:W.bm,Worker:W.fg,CompositorWorkerGlobalScope:W.aC,DedicatedWorkerGlobalScope:W.aC,ServiceWorkerGlobalScope:W.aC,SharedWorkerGlobalScope:W.aC,WorkerGlobalScope:W.aC,ClientRect:W.fn,ClientRectList:W.cJ,DOMRectList:W.cJ,CSSRuleList:W.fp,DocumentType:W.fq,DOMRect:W.fr,GamepadList:W.fE,HTMLFrameSetElement:W.fF,NamedNodeMap:W.cM,MozNamedAttrMap:W.cM,ServiceWorker:W.fW,SpeechRecognitionResultList:W.fX,StyleSheetList:W.fY,WorkerLocation:W.h0,WorkerNavigator:W.h1,SVGAElement:P.cX,SVGAnimateElement:P.ar,SVGAnimateMotionElement:P.ar,SVGAnimateTransformElement:P.ar,SVGAnimationElement:P.ar,SVGSetElement:P.ar,SVGFEBlendElement:P.dj,SVGFEColorMatrixElement:P.dk,SVGFEComponentTransferElement:P.dl,SVGFECompositeElement:P.dm,SVGFEConvolveMatrixElement:P.dn,SVGFEDiffuseLightingElement:P.dp,SVGFEDisplacementMapElement:P.dq,SVGFEFloodElement:P.dr,SVGFEGaussianBlurElement:P.ds,SVGFEImageElement:P.dt,SVGFEMergeElement:P.du,SVGFEMorphologyElement:P.dv,SVGFEOffsetElement:P.dw,SVGFEPointLightElement:P.dx,SVGFESpecularLightingElement:P.dy,SVGFESpotLightElement:P.dz,SVGFETileElement:P.dA,SVGFETurbulenceElement:P.dB,SVGFilterElement:P.dF,SVGForeignObjectElement:P.dH,SVGCircleElement:P.a0,SVGEllipseElement:P.a0,SVGLineElement:P.a0,SVGPathElement:P.a0,SVGPolygonElement:P.a0,SVGPolylineElement:P.a0,SVGGeometryElement:P.a0,SVGClipPathElement:P.ah,SVGDefsElement:P.ah,SVGGElement:P.ah,SVGSwitchElement:P.ah,SVGGraphicsElement:P.ah,SVGImageElement:P.dN,SVGLength:P.a9,SVGLengthList:P.dX,SVGMarkerElement:P.e4,SVGMaskElement:P.e5,SVGNumber:P.ab,SVGNumberList:P.ek,SVGPatternElement:P.em,SVGPoint:P.eq,SVGPointList:P.er,SVGRect:P.ew,SVGRectElement:P.ex,SVGScriptElement:P.eE,SVGStringList:P.eP,SVGDescElement:P.D,SVGDiscardElement:P.D,SVGFEDistantLightElement:P.D,SVGFEFuncAElement:P.D,SVGFEFuncBElement:P.D,SVGFEFuncGElement:P.D,SVGFEFuncRElement:P.D,SVGFEMergeNodeElement:P.D,SVGMetadataElement:P.D,SVGStopElement:P.D,SVGStyleElement:P.D,SVGTitleElement:P.D,SVGComponentTransferFunctionElement:P.D,SVGElement:P.D,SVGSVGElement:P.eQ,SVGSymbolElement:P.eR,SVGTextContentElement:P.cG,SVGTextPathElement:P.eT,SVGTSpanElement:P.bk,SVGTextElement:P.bk,SVGTextPositioningElement:P.bk,SVGTransform:P.ac,SVGTransformList:P.f1,SVGUseElement:P.f9,SVGViewElement:P.fb,SVGViewSpec:P.fc,SVGLinearGradientElement:P.bo,SVGRadialGradientElement:P.bo,SVGGradientElement:P.bo,SVGCursorElement:P.fT,SVGFEDropShadowElement:P.fU,SVGMPathElement:P.fV,AudioBuffer:P.d0,WebGLRenderingContext:P.eA,WebGL2RenderingContext:P.eB,WebGL2RenderingContextBase:P.h_,SQLResultSetRowList:P.eL})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEvent:true,AnimationPlayerEvent:true,AnimationTimeline:true,AppBannerPromptResult:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BarProp:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CustomEvent:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,ErrorEvent:true,Event:true,InputEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FederatedCredential:true,FetchEvent:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FocusEvent:true,FontFace:true,FontFaceSetLoadEvent:true,FormData:true,GamepadButton:true,GamepadEvent:true,Geofencing:true,GeofencingEvent:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,HashChangeEvent:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,InstallEvent:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyboardEvent:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaEncryptedEvent:true,MediaError:true,MediaKeyMessageEvent:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaQueryListEvent:true,MediaSession:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MemoryInfo:true,MessageChannel:true,MessageEvent:true,Metadata:true,MIDIConnectionEvent:true,MIDIInputMap:true,MIDIMessageEvent:true,MIDIOutputMap:true,MouseEvent:true,DragEvent:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NotificationEvent:true,OffscreenCanvas:true,PageTransitionEvent:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PointerEvent:true,PopStateEvent:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RelatedEvent:true,RTCCertificate:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,SecurityPolicyViolationEvent:true,Selection:true,ServicePort:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,SpeechSynthesisVoice:true,StorageEvent:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncEvent:true,SyncManager:true,TextEvent:true,TextMetrics:true,TouchEvent:true,TrackDefault:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,TreeWalker:true,UIEvent:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WheelEvent:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,ResourceProgressEvent:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBConnectionEvent:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBVersionChangeEvent:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,SVGZoomEvent:true,AudioListener:true,AudioParam:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLContextEvent:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,Navigator:true,Attr:true,Node:false,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.ct.$nativeSuperclassTag="ArrayBufferView"
H.be.$nativeSuperclassTag="ArrayBufferView"
H.bf.$nativeSuperclassTag="ArrayBufferView"
H.cu.$nativeSuperclassTag="ArrayBufferView"
H.bd.$nativeSuperclassTag="ArrayBufferView"
H.bg.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
W.b1.$nativeSuperclassTag="EventTarget"
W.b5.$nativeSuperclassTag="EventTarget"
W.b2.$nativeSuperclassTag="EventTarget"
W.b4.$nativeSuperclassTag="EventTarget"
W.b3.$nativeSuperclassTag="EventTarget"
W.b6.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.j3(L.iY(),b)},[])
else (function(b){H.j3(L.iY(),b)})([])})})()