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
a[c]=function(){a[c]=function(){H.mE(b)}
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
return d?function(e){if(t===null)t=H.iY(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.iY(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.iY(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={iK:function iK(a){this.a=a},
iO:function(a,b,c,d){if(!!a.$isc)return new H.dN(a,b,[c,d])
return new H.cR(a,b,[c,d])},
iI:function(){return new P.aP("No element")},
lt:function(){return new P.aP("Too few elements")},
d4:function(a,b,c,d){if(c-b<=32)H.lL(a,b,c,d)
else H.lK(a,b,c,d)},
lL:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.a9(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.ah(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
lK:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.I(t+1,6)
r=a3+s
q=a4-s
p=C.b.I(a3+a4,2)
o=p-s
n=p+s
t=J.a9(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.ah(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.ah(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.ah(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.ah(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ah(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.ah(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.ah(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.ah(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ah(a5.$2(j,i),0)){h=i
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
H.d4(a2,a3,g-2,a5)
H.d4(a2,f+2,a4,a5)
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
break}}H.d4(a2,g,f,a5)}else H.d4(a2,g,f,a5)},
c:function c(){},
b7:function b7(){},
cQ:function cQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cR:function cR(a,b,c){this.a=a
this.b=b
this.$ti=c},
dN:function dN(a,b,c){this.a=a
this.b=b
this.$ti=c},
eA:function eA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cS:function cS(a,b,c){this.a=a
this.b=b
this.$ti=c},
c6:function c6(){},
dh:function(a,b){var t=a.a8(b)
if(!u.globalState.d.cy)u.globalState.f.ad()
return t},
ik:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
kp:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.v(s).$isb)throw H.e(P.iE("Arguments to main must be a List: "+H.h(s)))
u.globalState=new H.hF(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$jv()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.he(P.iN(null,H.aW),0)
r=P.p
s.se1(new H.ad(0,null,null,null,null,null,0,[r,H.aV]))
s.se4(new H.ad(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.hE()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.lo,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.lW)}if(u.globalState.x)return
s=u.globalState.a++
q=P.aL(null,null,null,r)
p=new H.bb(0,null,!1)
o=new H.aV(s,new H.ad(0,null,null,null,null,null,0,[r,H.bb]),q,u.createNewIsolate(),p,new H.ak(H.iq()),new H.ak(H.iq()),!1,!1,[],P.aL(null,null,null,null),null,null,!1,!0,P.aL(null,null,null,null))
q.j(0,0)
o.be(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bi(a,{func:1,args:[,]}))o.a8(new H.iw(t,a))
else if(H.bi(a,{func:1,args:[,,]}))o.a8(new H.ix(t,a))
else o.a8(a)
u.globalState.f.ad()},
lW:function(a){var t=P.aK(["command","print","msg",a])
return new H.af(!0,P.bP(null,P.p)).H(t)},
lq:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.lr()
return},
lr:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.u("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.u('Cannot extract URI from "'+t+'"'))},
lo:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.aU(!0,[]).R(b.data)
s=J.a9(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.mo(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aU(!0,[]).R(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aU(!0,[]).R(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.p
j=P.aL(null,null,null,k)
i=new H.bb(0,null,!1)
h=new H.aV(s,new H.ad(0,null,null,null,null,null,0,[k,H.bb]),j,u.createNewIsolate(),i,new H.ak(H.iq()),new H.ak(H.iq()),!1,!1,[],P.aL(null,null,null,null),null,null,!1,!0,P.aL(null,null,null,null))
j.j(0,0)
h.be(0,i)
u.globalState.f.a.O(0,new H.aW(h,new H.ek(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.ad()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.kS(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ad()
break
case"close":u.globalState.ch.ac(0,$.$get$jw().h(0,a))
a.terminate()
u.globalState.f.ad()
break
case"log":H.ln(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aK(["command","print","msg",t])
k=new H.af(!0,P.bP(null,P.p)).H(k)
s.toString
self.postMessage(k)}else P.aa(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
ln:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aK(["command","log","msg",a])
r=new H.af(!0,P.bP(null,P.p)).H(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.ag(q)
t=H.ar(q)
s=P.c5(t)
throw H.e(s)}},
lp:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.jF=$.jF+("_"+s)
$.jG=$.jG+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.E(0,["spawned",new H.be(s,r),q,t.r])
r=new H.el(a,b,c,d,t)
if(e){t.bz(q,q)
u.globalState.f.a.O(0,new H.aW(t,r,"start isolate"))}else r.$0()},
lN:function(a,b){var t=new H.fH(!0,!1,null)
t.cY(a,b)
return t},
lY:function(a){return new H.aU(!0,[]).R(new H.af(!1,P.bP(null,P.p)).H(a))},
iw:function iw(a,b){this.a=a
this.b=b},
ix:function ix(a,b){this.a=a
this.b=b},
hF:function hF(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
aV:function aV(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
hA:function hA(a,b){this.a=a
this.b=b},
he:function he(a,b){this.a=a
this.b=b},
hf:function hf(a){this.a=a},
aW:function aW(a,b,c){this.a=a
this.b=b
this.c=c},
hE:function hE(){},
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
h8:function h8(){},
be:function be(a,b){this.b=a
this.a=b},
hH:function hH(a,b){this.a=a
this.b=b},
bQ:function bQ(a,b,c){this.b=a
this.c=b
this.a=c},
bb:function bb(a,b,c){this.a=a
this.b=b
this.c=c},
fH:function fH(a,b,c){this.a=a
this.b=b
this.c=c},
fI:function fI(a,b){this.a=a
this.b=b},
fJ:function fJ(a,b){this.a=a
this.b=b},
ak:function ak(a){this.a=a},
af:function af(a,b){this.a=a
this.b=b},
aU:function aU(a,b){this.a=a
this.b=b},
mj:function(a){return u.types[a]},
mq:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.v(a).$isr},
h:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.b1(a)
if(typeof t!=="string")throw H.e(H.Q(a))
return t},
lI:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fd(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aN:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
jE:function(a,b){throw H.e(new P.bw(a,null,null))},
iQ:function(a,b,c){var t,s
H.ka(a)
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.jE(a,c)
s=t[3]
if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.jE(a,c)},
jD:function(a,b){throw H.e(new P.bw("Invalid double",a,null))},
aO:function(a,b){var t,s
H.ka(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.jD(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.kW(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.jD(a,b)}return t},
d_:function(a){var t,s,r,q,p,o,n,m
t=J.v(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.p||!!J.v(a).$isaR){p=C.l(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.e.a2(q,0)===36)q=C.e.cB(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dj(H.i7(a),0,null),u.mangledGlobalNames)},
f9:function(a){return"Instance of '"+H.d_(a)+"'"},
R:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lG:function(a){return a.b?H.R(a).getUTCFullYear()+0:H.R(a).getFullYear()+0},
lE:function(a){return a.b?H.R(a).getUTCMonth()+1:H.R(a).getMonth()+1},
lA:function(a){return a.b?H.R(a).getUTCDate()+0:H.R(a).getDate()+0},
lB:function(a){return a.b?H.R(a).getUTCHours()+0:H.R(a).getHours()+0},
lD:function(a){return a.b?H.R(a).getUTCMinutes()+0:H.R(a).getMinutes()+0},
lF:function(a){return a.b?H.R(a).getUTCSeconds()+0:H.R(a).getSeconds()+0},
lC:function(a){return a.b?H.R(a).getUTCMilliseconds()+0:H.R(a).getMilliseconds()+0},
iP:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.Q(a))
return a[b]},
jH:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.Q(a))
a[b]=c},
K:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aj(!0,b,"index",null)
t=J.dq(a)
if(b<0||C.b.cj(b,t))return P.D(b,a,"index",null,t)
return P.fa(b,"index",null)},
Q:function(a){return new P.aj(!0,a,null,null)},
ka:function(a){if(typeof a!=="string")throw H.e(H.Q(a))
return a},
e:function(a){var t
if(a==null)a=new P.ba()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.kq})
t.name=""}else t.toString=H.kq
return t},
kq:function(){return J.b1(this.dartException)},
F:function(a){throw H.e(a)},
E:function(a){throw H.e(new P.ab(a))},
ap:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.fO(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
fP:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
jS:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
iM:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.es(a,s,t?null:b.receiver)},
ag:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.iy(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aG(r,16)&8191)===10)switch(q){case 438:return t.$1(H.iM(H.h(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.h(s)+" (Error "+q+")"
return t.$1(new H.cZ(p,null))}}if(a instanceof TypeError){o=$.$get$jM()
n=$.$get$jN()
m=$.$get$jO()
l=$.$get$jP()
k=$.$get$jT()
j=$.$get$jU()
i=$.$get$jR()
$.$get$jQ()
h=$.$get$jW()
g=$.$get$jV()
f=o.K(s)
if(f!=null)return t.$1(H.iM(s,f))
else{f=n.K(s)
if(f!=null){f.method="call"
return t.$1(H.iM(s,f))}else{f=m.K(s)
if(f==null){f=l.K(s)
if(f==null){f=k.K(s)
if(f==null){f=j.K(s)
if(f==null){f=i.K(s)
if(f==null){f=l.K(s)
if(f==null){f=h.K(s)
if(f==null){f=g.K(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.cZ(s,f==null?null:f.method))}}return t.$1(new H.fR(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.d5()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.aj(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.d5()
return a},
ar:function(a){var t
if(a==null)return new H.dg(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dg(a,null)},
mu:function(a){if(a==null||typeof a!='object')return J.ai(a)
else return H.aN(a)},
mh:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
mp:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dh(b,new H.ie(a))
case 1:return H.dh(b,new H.ig(a,d))
case 2:return H.dh(b,new H.ih(a,d,e))
case 3:return H.dh(b,new H.ii(a,d,e,f))
case 4:return H.dh(b,new H.ij(a,d,e,f,g))}throw H.e(P.c5("Unsupported number of arguments for wrapped closure"))},
b_:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.mp)
a.$identity=t
return t},
l7:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.v(c).$isb){t.$reflectionInfo=c
r=H.lI(t).r}else r=c
q=d?Object.create(new H.ft().constructor.prototype):Object.create(new H.bm(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.jq(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.mj,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jn:H.iF
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.jq(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
l4:function(a,b,c,d){var t=H.iF
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
jq:function(a,b,c){var t,s,r,q
if(c)return H.l6(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.l4(s,b==null?r!=null:b!==r,t,b)
return q},
l5:function(a,b,c,d){var t,s
t=H.iF
s=H.jn
switch(b?-1:a){case 0:throw H.e(new H.fj("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
l6:function(a,b){var t,s,r,q
H.l3()
t=$.jm
if(t==null){t=H.jl("receiver")
$.jm=t}s=b.$stubName
r=b.length
q=a[s]
t=H.l5(r,b==null?q!=null:b!==q,s,b)
return t},
iY:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.v(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.l7(a,b,t,!!d,e,f)},
iF:function(a){return a.a},
jn:function(a){return a.c},
l3:function(){var t=$.jo
if(t==null){t=H.jl("self")
$.jo=t}return t},
jl:function(a){var t,s,r,q,p
t=new H.bm("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
mT:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aq(a,"String"))},
W:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aq(a,"double"))},
mS:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aq(a,"num"))},
ma:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aq(a,"bool"))},
mo:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aq(a,"int"))},
mw:function(a,b){throw H.e(H.aq(a,b.substring(3)))},
mv:function(a,b){var t=J.a9(b)
throw H.e(H.jp(H.d_(a),t.au(b,3,t.gl(b))))},
ki:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.v(a)[b])return a
H.mw(a,b)},
aA:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.v(a)[b]
else t=!0
if(t)return a
H.mv(a,b)},
mR:function(a){if(a==null)return a
if(!!J.v(a).$isb)return a
throw H.e(H.aq(a,"List"))},
kc:function(a){var t=J.v(a)
return"$S" in t?t.$S():null},
bi:function(a,b){var t
if(a==null)return!1
t=H.kc(a)
return t==null?!1:H.kj(t,b)},
mP:function(a,b){var t,s
if(a==null)return a
if($.iV)return a
$.iV=!0
try{if(H.bi(a,b))return a
t=H.aB(b,null)
s=H.aq(a,t)
throw H.e(s)}finally{$.iV=!1}},
aq:function(a,b){return new H.fQ("type '"+H.d_(a)+"' is not a subtype of type '"+b+"'")},
jp:function(a,b){return new H.dA("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
ay:function(a){if(!0===a)return!1
if(!!J.v(a).$isiH)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.aq(a,"bool"))},
aY:function(a){throw H.e(new H.h3(a))},
d:function(a){if(H.ay(a))throw H.e(new P.bY(null))},
mE:function(a){throw H.e(new P.dE(a))},
iq:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
kg:function(a){return u.getIsolateTag(a)},
J:function(a){return new H.av(a,null)},
M:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
i7:function(a){if(a==null)return
return a.$ti},
kh:function(a,b){return H.j4(a["$as"+H.h(b)],H.i7(a))},
az:function(a,b,c){var t,s
t=H.kh(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
bk:function(a,b){var t,s
t=H.i7(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aB:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dj(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.h(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aB(t,b)
return H.m_(a,b)}return"unknown-reified-type"},
m_:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aB(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aB(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aB(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.mg(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aB(l[j],b)+(" "+H.h(j))}q+="}"}return"("+q+") => "+t},
dj:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bJ("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aB(o,c)}return p?"":"<"+s.k(0)+">"},
i8:function(a){var t,s
if(a instanceof H.b3){t=H.kc(a)
if(t!=null)return H.aB(t,null)}s=J.v(a).constructor.name
if(a==null)return s
return s+H.dj(a.$ti,0,null)},
j4:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.j1(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.j1(a,null,b)
return b},
bU:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.i7(a)
s=J.v(a)
if(s[b]==null)return!1
return H.k8(H.j4(s[d],t),c)},
dk:function(a,b,c,d){if(a==null)return a
if(H.bU(a,b,c,d))return a
throw H.e(H.jp(H.d_(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dj(c,0,null),u.mangledGlobalNames)))},
mM:function(a,b,c,d){if(a==null)return a
if(H.bU(a,b,c,d))return a
throw H.e(H.aq(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dj(c,0,null),u.mangledGlobalNames)))},
k8:function(a,b){var t,s,r,q,p
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
mN:function(a,b,c){return H.j1(a,b,H.kh(b,c))},
X:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aM")return!0
if('func' in b)return H.kj(a,b)
if('func' in a)return b.name==="iH"||b.name==="q"
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
return H.k8(H.j4(o,t),r)},
k7:function(a,b,c){var t,s,r,q,p,o,n
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
m6:function(a,b){var t,s,r,q,p,o
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
kj:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
if(n===m){if(!H.k7(r,q,!1))return!1
if(!H.k7(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
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
if(!(H.X(g,f)||H.X(f,g)))return!1}}return H.m6(a.named,b.named)},
j1:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
mU:function(a){var t=$.j_
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
mQ:function(a){return H.aN(a)},
mO:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mr:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.q))
t=$.j_.$1(a)
s=$.i5[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.id[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.k6.$2(a,t)
if(t!=null){s=$.i5[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.id[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.j2(r)
$.i5[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.id[t]=r
return r}if(p==="-"){o=H.j2(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.kn(a,r)
if(p==="*")throw H.e(new P.bL(t))
if(u.leafTags[t]===true){o=H.j2(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.kn(a,r)},
kn:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.ip(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
j2:function(a){return J.ip(a,!1,null,!!a.$isr)},
mt:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.ip(t,!1,null,!!t.$isr)
else return J.ip(t,c,null,null)},
mm:function(){if(!0===$.j0)return
$.j0=!0
H.mn()},
mn:function(){var t,s,r,q,p,o,n,m
$.i5=Object.create(null)
$.id=Object.create(null)
H.ml()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.ko.$1(p)
if(o!=null){n=H.mt(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
ml:function(){var t,s,r,q,p,o,n
t=C.u()
t=H.bh(C.q,H.bh(C.w,H.bh(C.k,H.bh(C.k,H.bh(C.v,H.bh(C.r,H.bh(C.t(C.l),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.j_=new H.ia(p)
$.k6=new H.ib(o)
$.ko=new H.ic(n)},
bh:function(a,b){return a(b)||b},
jz:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.e(new P.bw("Illegal RegExp pattern ("+String(q)+")",a,null))},
lX:function(a,b){var t=new H.hG(a,b)
t.d2(a,b)
return t},
mB:function(a,b,c,d){var t,s,r
t=b.df(a,d)
if(t==null)return a
s=t.b
r=s.index
return H.mD(a,r,r+s[0].length,c)},
mA:function(a,b,c){var t,s
t=b.gbr()
t.lastIndex=0
s=a.replace(t,c.replace(/\$/g,"$$$$"))
return s},
mC:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.mB(a,b,c,d)},
mD:function(a,b,c,d){var t,s
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fd:function fd(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fO:function fO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cZ:function cZ(a,b){this.a=a
this.b=b},
es:function es(a,b,c){this.a=a
this.b=b
this.c=c},
fR:function fR(a){this.a=a},
iy:function iy(a){this.a=a},
dg:function dg(a,b){this.a=a
this.b=b},
ie:function ie(a){this.a=a},
ig:function ig(a,b){this.a=a
this.b=b},
ih:function ih(a,b,c){this.a=a
this.b=b
this.c=c},
ii:function ii(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ij:function ij(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
b3:function b3(){},
fC:function fC(){},
ft:function ft(){},
bm:function bm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fQ:function fQ(a){this.a=a},
dA:function dA(a){this.a=a},
fj:function fj(a){this.a=a},
h3:function h3(a){this.a=a},
av:function av(a,b){this.a=a
this.b=b},
ad:function ad(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
er:function er(a){this.a=a},
eu:function eu(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ev:function ev(a,b){this.a=a
this.$ti=b},
ew:function ew(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ia:function ia(a){this.a=a},
ib:function ib(a){this.a=a},
ic:function ic(a){this.a=a},
eq:function eq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hG:function hG(a,b){this.a=a
this.b=b},
l:function(a){return a},
hY:function(a){var t,s,r
if(!!J.v(a).$iso)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bC:function bC(){},
b9:function b9(){},
eK:function eK(){},
cU:function cU(){},
cV:function cV(){},
cW:function cW(){},
cT:function cT(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
cX:function cX(){},
eR:function eR(){},
bD:function bD(){},
bE:function bE(){},
bF:function bF(){},
bG:function bG(){},
mg:function(a){var t=H.M(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
bl:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
v:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cP.prototype
return J.eo.prototype}if(typeof a=="string")return J.aH.prototype
if(a==null)return J.ep.prototype
if(typeof a=="boolean")return J.en.prototype
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.q)return a
return J.i6(a)},
ip:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
i6:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.j0==null){H.mm()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.bL("Return interceptor for "+H.h(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$iL()]
if(p!=null)return p
p=H.mr(a)
if(p!=null)return p
if(typeof a=="function")return C.x
s=Object.getPrototypeOf(a)
if(s==null)return C.m
if(s===Object.prototype)return C.m
if(typeof q=="function"){Object.defineProperty(q,$.$get$iL(),{value:C.h,enumerable:false,writable:true,configurable:true})
return C.h}return C.h},
jy:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
lu:function(a,b){var t,s
for(t=a.length;b<t;){s=C.e.a2(a,b)
if(s!==32&&s!==13&&!J.jy(s))break;++b}return b},
lv:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.e.bJ(a,t)
if(s!==32&&s!==13&&!J.jy(s))break}return b},
a9:function(a){if(typeof a=="string")return J.aH.prototype
if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.q)return a
return J.i6(a)},
bj:function(a){if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.q)return a
return J.i6(a)},
kf:function(a){if(typeof a=="number")return J.b6.prototype
if(a==null)return a
if(!(a instanceof P.q))return J.aR.prototype
return a},
mi:function(a){if(typeof a=="number")return J.b6.prototype
if(typeof a=="string")return J.aH.prototype
if(a==null)return a
if(!(a instanceof P.q))return J.aR.prototype
return a},
iZ:function(a){if(typeof a=="string")return J.aH.prototype
if(a==null)return a
if(!(a instanceof P.q))return J.aR.prototype
return a},
n:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.q)return a
return J.i6(a)},
A:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.v(a).w(a,b)},
ah:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kf(a).af(a,b)},
kr:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kf(a).ag(a,b)},
b0:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mq(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a9(a).h(a,b)},
ks:function(a,b,c){return J.bj(a).i(a,b,c)},
kt:function(a,b,c,d){return J.n(a).d4(a,b,c,d)},
j5:function(a,b){return J.iZ(a).a2(a,b)},
j6:function(a,b){return J.n(a).by(a,b)},
j7:function(a,b,c){return J.n(a).bA(a,b,c)},
ku:function(a,b){return J.n(a).dv(a,b)},
dl:function(a,b,c){return J.n(a).bB(a,b,c)},
kv:function(a,b,c){return J.n(a).bC(a,b,c)},
j8:function(a,b,c){return J.n(a).bD(a,b,c)},
dm:function(a,b){return J.n(a).dA(a,b)},
kw:function(a,b){return J.n(a).bE(a,b)},
kx:function(a,b,c){return J.n(a).bF(a,b,c)},
j9:function(a,b,c,d){return J.n(a).bG(a,b,c,d)},
ky:function(a,b){return J.bj(a).bH(a,b)},
kz:function(a,b,c,d,e){return J.n(a).bI(a,b,c,d,e)},
kA:function(a,b){return J.mi(a).L(a,b)},
iz:function(a){return J.n(a).bL(a)},
kB:function(a){return J.n(a).bM(a)},
kC:function(a){return J.n(a).dG(a)},
kD:function(a,b){return J.n(a).bP(a,b)},
iA:function(a,b){return J.n(a).bQ(a,b)},
kE:function(a,b,c,d){return J.n(a).bR(a,b,c,d)},
kF:function(a,b,c,d,e){return J.n(a).dN(a,b,c,d,e)},
kG:function(a,b,c,d,e){return J.n(a).bS(a,b,c,d,e)},
kH:function(a,b,c,d,e,f){return J.n(a).dO(a,b,c,d,e,f)},
kI:function(a,b){return J.bj(a).p(a,b)},
dn:function(a,b){return J.n(a).bT(a,b)},
ja:function(a,b){return J.n(a).bU(a,b)},
kJ:function(a){return J.n(a).dQ(a)},
kK:function(a,b){return J.bj(a).aN(a,b)},
ai:function(a){return J.v(a).gv(a)},
dp:function(a){return J.bj(a).gC(a)},
dq:function(a){return J.a9(a).gl(a)},
kL:function(a){return J.v(a).gB(a)},
kM:function(a){return J.n(a).gaq(a)},
iB:function(a){return J.n(a).gm(a)},
iC:function(a){return J.n(a).gn(a)},
jb:function(a){return J.n(a).gJ(a)},
kN:function(a){return J.n(a).ar(a)},
kO:function(a,b){return J.n(a).aW(a,b)},
kP:function(a,b,c){return J.n(a).aX(a,b,c)},
jc:function(a,b,c){return J.n(a).b_(a,b,c)},
kQ:function(a,b){return J.n(a).bW(a,b)},
kR:function(a,b){return J.bj(a).bY(a,b)},
kS:function(a,b){return J.n(a).E(a,b)},
kT:function(a,b){return J.iZ(a).cw(a,b)},
kU:function(a,b,c,d){return J.n(a).b2(a,b,c,d)},
b1:function(a){return J.v(a).k(a)},
kV:function(a,b,c,d){return J.n(a).eh(a,b,c,d)},
kW:function(a){return J.iZ(a).ei(a)},
kX:function(a,b,c){return J.n(a).c2(a,b,c)},
kY:function(a,b,c){return J.n(a).c3(a,b,c)},
iD:function(a,b,c){return J.n(a).c4(a,b,c)},
kZ:function(a,b,c){return J.n(a).c5(a,b,c)},
jd:function(a,b,c){return J.n(a).c6(a,b,c)},
je:function(a,b,c){return J.n(a).c7(a,b,c)},
jf:function(a,b,c){return J.n(a).c8(a,b,c)},
jg:function(a,b,c,d){return J.n(a).c9(a,b,c,d)},
jh:function(a,b,c,d){return J.n(a).ca(a,b,c,d)},
l_:function(a,b){return J.n(a).cc(a,b)},
l0:function(a,b,c){return J.n(a).ej(a,b,c)},
ji:function(a,b,c,d,e,f,g){return J.n(a).ce(a,b,c,d,e,f,g)},
l1:function(a,b,c,d,e){return J.n(a).cf(a,b,c,d,e)},
a:function a(){},
en:function en(){},
ep:function ep(){},
bA:function bA(){},
f3:function f3(){},
aR:function aR(){},
aI:function aI(){},
aG:function aG(a){this.$ti=a},
iJ:function iJ(a){this.$ti=a},
du:function du(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b6:function b6(){},
cP:function cP(){},
eo:function eo(){},
aH:function aH(){}},P={
lQ:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.m7()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.b_(new P.h5(t),1)).observe(s,{childList:true})
return new P.h4(t,s,r)}else if(self.setImmediate!=null)return P.m8()
return P.m9()},
lR:function(a){++u.globalState.f.b
self.scheduleImmediate(H.b_(new P.h6(a),0))},
lS:function(a){++u.globalState.f.b
self.setImmediate(H.b_(new P.h7(a),0))},
lT:function(a){P.iR(C.i,a)},
m2:function(a,b){if(H.bi(a,{func:1,args:[P.aM,P.aM]})){b.toString
return a}else{b.toString
return a}},
lj:function(a,b,c){var t
if(a==null)a=new P.ba()
t=$.x
if(t!==C.d)t.toString
t=new P.P(0,t,null,[c])
t.bg(a,b)
return t},
lk:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.P(0,$.x,null,[P.b])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.ef(t,!1,b,s)
try{for(m=0,l=0;m<1;++m){q=a[m]
p=l
q.aT(new P.ee(t,!1,b,s,p),r)
l=++t.b}if(l===0){l=new P.P(0,$.x,null,[null])
l.bf(C.y)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.ag(j)
n=H.ar(j)
if(t.b===0||!1)return P.lj(o,n,null)
else{t.c=o
t.d=n}}return s},
k0:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.P))
H.d(b.a===0)
b.a=1
try{a.aT(new P.ho(b),new P.hp(b))}catch(r){t=H.ag(r)
s=H.ar(r)
P.mx(new P.hq(b,t,s))}},
hn:function(a,b){var t,s,r,q
H.d(b.a<=1)
for(;t=a.a,s=t===2,s;){H.d(s)
a=a.c}s=b.a
if(t>=4){H.d(s<4)
r=b.c
b.c=null
q=b.a6(r)
H.d(b.a<4)
H.d(a.a>=4)
b.a=a.a
b.c=a.c
P.bd(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bs(q)}},
bd:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.hZ(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
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
if(k){H.d(s.a===8)
s=s.c
p=t.a.b
o=s.a
s=s.b
p.toString
P.hZ(null,null,p,o,s)
return}s=$.x
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.x
H.d(l==null?s!=null:l!==s)
j=$.x
$.x=l
i=j}else i=null
s=b.c
if(s===8)new P.hv(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.hu(r,b,m).$0()}else if((s&2)!==0)new P.ht(t,r,b).$0()
if(i!=null){H.d(!0)
$.x=i}s=r.b
if(!!J.v(s).$isb5){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.a6(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.hn(s,o)
return}}g=b.b
H.d(g.a<4)
h=g.c
g.c=null
b=g.a6(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.d(!o)
g.a=4
g.c=p}else{H.d(!o)
g.a=8
g.c=p}t.a=g
s=g}},
m1:function(){var t,s
for(;t=$.bf,t!=null;){$.bS=null
s=t.b
$.bf=s
if(s==null)$.bR=null
t.a.$0()}},
m5:function(){$.iW=!0
try{P.m1()}finally{$.bS=null
$.iW=!1
if($.bf!=null)$.$get$iT().$1(P.k9())}},
k4:function(a){var t=new P.da(a,null)
if($.bf==null){$.bR=t
$.bf=t
if(!$.iW)$.$get$iT().$1(P.k9())}else{$.bR.b=t
$.bR=t}},
m4:function(a){var t,s,r
t=$.bf
if(t==null){P.k4(a)
$.bS=$.bR
return}s=new P.da(a,null)
r=$.bS
if(r==null){s.b=t
$.bS=s
$.bf=s}else{s.b=r.b
r.b=s
$.bS=s
if(s.b==null)$.bR=s}},
mx:function(a){var t=$.x
if(C.d===t){P.bg(null,null,C.d,a)
return}t.toString
P.bg(null,null,t,t.aJ(a))},
lO:function(a,b){var t=$.x
if(t===C.d){t.toString
return P.iR(a,b)}return P.iR(a,t.aJ(b))},
iR:function(a,b){var t=C.b.I(a.a,1000)
return H.lN(t<0?0:t,b)},
iS:function(a){var t,s
H.d(a!=null)
t=$.x
H.d(a==null?t!=null:a!==t)
s=$.x
$.x=a
return s},
hZ:function(a,b,c,d,e){var t={}
t.a=d
P.m4(new P.i_(t,e))},
k2:function(a,b,c,d){var t,s
if($.x===c)return d.$0()
t=P.iS(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.x=s}},
k3:function(a,b,c,d,e){var t,s
if($.x===c)return d.$1(e)
t=P.iS(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.x=s}},
m3:function(a,b,c,d,e,f){var t,s
if($.x===c)return d.$2(e,f)
t=P.iS(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.x=s}},
bg:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.aJ(d):c.dw(d)
P.k4(d)},
h5:function h5(a){this.a=a},
h4:function h4(a,b,c){this.a=a
this.b=b
this.c=c},
h6:function h6(a){this.a=a},
h7:function h7(a){this.a=a},
ef:function ef(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ee:function ee(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ha:function ha(){},
db:function db(a,b){this.a=a
this.$ti=b},
hT:function hT(a,b){this.a=a
this.$ti=b},
dd:function dd(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
P:function P(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hk:function hk(a,b){this.a=a
this.b=b},
hs:function hs(a,b){this.a=a
this.b=b},
ho:function ho(a){this.a=a},
hp:function hp(a){this.a=a},
hq:function hq(a,b,c){this.a=a
this.b=b
this.c=c},
hm:function hm(a,b){this.a=a
this.b=b},
hr:function hr(a,b){this.a=a
this.b=b},
hl:function hl(a,b,c){this.a=a
this.b=b
this.c=c},
hv:function hv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hw:function hw(a){this.a=a},
hu:function hu(a,b,c){this.a=a
this.b=b
this.c=c},
ht:function ht(a,b,c){this.a=a
this.b=b
this.c=c},
da:function da(a,b){this.a=a
this.b=b},
fv:function fv(){},
fx:function fx(a){this.a=a},
fy:function fy(a,b){this.a=a
this.b=b},
fw:function fw(){},
b2:function b2(a,b){this.a=a
this.b=b},
hX:function hX(){},
i_:function i_(a,b){this.a=a
this.b=b},
hJ:function hJ(){},
hL:function hL(a,b){this.a=a
this.b=b},
hK:function hK(a,b){this.a=a
this.b=b},
hM:function hM(a,b){this.a=a
this.b=b},
jA:function(a,b){return new H.ad(0,null,null,null,null,null,0,[a,b])},
N:function(){return new H.ad(0,null,null,null,null,null,0,[null,null])},
aK:function(a){return H.mh(a,new H.ad(0,null,null,null,null,null,0,[null,null]))},
bP:function(a,b){return new P.de(0,null,null,null,null,null,0,[a,b])},
lV:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
ls:function(a,b,c){var t,s
if(P.iX(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bT()
C.a.j(s,a)
try{P.m0(a,t)}finally{H.d(C.a.gap(s)===a)
s.pop()}s=P.jL(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
em:function(a,b,c){var t,s,r
if(P.iX(a))return b+"..."+c
t=new P.bJ(b)
s=$.$get$bT()
C.a.j(s,a)
try{r=t
r.a=P.jL(r.gX(),a,", ")}finally{H.d(C.a.gap(s)===a)
s.pop()}s=t
s.a=s.gX()+c
s=t.gX()
return s.charCodeAt(0)==0?s:s},
iX:function(a){var t,s
for(t=0;s=$.$get$bT(),t<s.length;++t)if(a===s[t])return!0
return!1},
m0:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gC(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.t())return
q=H.h(t.gu())
C.a.j(b,q)
s+=q.length+2;++r}if(!t.t()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gu();++r
if(!t.t()){if(r<=4){C.a.j(b,H.h(n))
return}p=H.h(n)
o=b.pop()
s+=p.length+2}else{m=t.gu();++r
H.d(r<100)
for(;t.t();n=m,m=l){l=t.gu();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.j(b,"...")
return}}o=H.h(n)
p=H.h(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.j(b,k)
C.a.j(b,o)
C.a.j(b,p)},
aL:function(a,b,c,d){return new P.hB(0,null,null,null,null,null,0,[d])},
lw:function(a,b){var t,s
t=P.aL(null,null,null,b)
for(s=J.dp(a);s.t();)t.j(0,s.gu())
return t},
ly:function(a){var t,s,r
t={}
if(P.iX(a))return"{...}"
s=new P.bJ("")
try{C.a.j($.$get$bT(),a)
r=s
r.a=r.gX()+"{"
t.a=!0
a.aN(0,new P.eB(t,s))
t=s
t.a=t.gX()+"}"}finally{t=$.$get$bT()
H.d(C.a.gap(t)===a)
t.pop()}t=s.gX()
return t.charCodeAt(0)==0?t:t},
iN:function(a,b){var t=new P.ex(null,0,0,0,[b])
t.cU(a,b)
return t},
de:function de(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hB:function hB(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hC:function hC(a,b,c){this.a=a
this.b=b
this.c=c},
bO:function bO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hz:function hz(){},
y:function y(){},
eB:function eB(a,b){this.a=a
this.b=b},
ex:function ex(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hD:function hD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fn:function fn(){},
fm:function fm(){},
jL:function(a,b,c){var t=J.dp(b)
if(!t.t())return a
if(c.length===0){do a+=H.h(t.gu())
while(t.t())}else{a+=H.h(t.gu())
for(;t.t();)a=a+c+H.h(t.gu())}return a},
l8:function(a,b){return J.kA(a,b)},
lb:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.h(t)
if(t>=10)return s+"00"+H.h(t)
return s+"000"+H.h(t)},
lc:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c0:function(a){if(a>=10)return""+a
return"0"+a},
ld:function(a,b,c,d,e,f){return new P.as(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
iG:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.b1(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lf(a)},
lf:function(a){var t=J.v(a)
if(!!t.$isb3)return t.k(a)
return H.f9(a)},
iE:function(a){return new P.aj(!1,null,null,a)},
jj:function(a,b,c){return new P.aj(!0,a,b,c)},
l2:function(a){return new P.aj(!1,null,a,"Must not be null")},
fa:function(a,b,c){return new P.d0(null,null,!0,a,b,"Value not in range")},
bH:function(a,b,c,d,e){return new P.d0(b,c,!0,a,d,"Invalid value")},
jI:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.bH(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.bH(b,a,c,"end",f))
return b},
D:function(a,b,c,d,e){var t=e!=null?e:J.dq(b)
return new P.ei(b,t,!0,a,c,"Index out of range")},
c5:function(a){return new P.hj(a)},
jB:function(a,b,c){var t,s
t=H.M([],[c])
for(s=J.dp(a);s.t();)C.a.j(t,s.gu())
if(b)return t
t.fixed$length=Array
return t},
aa:function(a){H.bl(H.h(a))},
jJ:function(a,b,c){return new H.eq(a,H.jz(a,!1,!0,!1),null,null)},
aZ:function aZ(){},
G:function G(){},
aE:function aE(a,b){this.a=a
this.b=b},
L:function L(){},
as:function as(a){this.a=a},
dL:function dL(){},
dM:function dM(){},
b4:function b4(){},
bY:function bY(a){this.a=a},
ba:function ba(){},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d0:function d0(a,b,c,d,e,f){var _=this
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
u:function u(a){this.a=a},
bL:function bL(a){this.a=a},
aP:function aP(a){this.a=a},
ab:function ab(a){this.a=a},
d5:function d5(){},
dE:function dE(a){this.a=a},
hj:function hj(a){this.a=a},
bw:function bw(a,b,c){this.a=a
this.b=b
this.c=c},
dO:function dO(a,b,c){this.a=a
this.b=b
this.$ti=c},
p:function p(){},
al:function al(){},
cO:function cO(){},
b:function b(){},
au:function au(){},
aM:function aM(){},
T:function T(){},
q:function q(){},
bI:function bI(){},
w:function w(){},
bJ:function bJ(a){this.a=a},
i3:function(a){var t,s,r,q,p
if(a==null)return
t=P.N()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.E)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
md:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.kK(a,new P.i0(t))
return t},
me:function(a){var t,s
t=new P.P(0,$.x,null,[null])
s=new P.db(t,[null])
a.then(H.b_(new P.i1(s),1))["catch"](H.b_(new P.i2(s),1))
return t},
h0:function h0(){},
h2:function h2(a,b){this.a=a
this.b=b},
i0:function i0(a){this.a=a},
h1:function h1(a,b,c){this.a=a
this.b=b
this.c=c},
i1:function i1(a){this.a=a},
i2:function i2(a){this.a=a},
hI:function hI(){},
H:function H(){},
dr:function dr(){},
aC:function aC(){},
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
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e8:function e8(){},
eb:function eb(){},
ac:function ac(){},
at:function at(){},
eh:function eh(){},
am:function am(){},
et:function et(){},
eC:function eC(){},
eD:function eD(){},
an:function an(){},
eU:function eU(){},
f0:function f0(){},
f5:function f5(){},
f6:function f6(){},
fb:function fb(){},
fc:function fc(){},
fk:function fk(){},
fz:function fz(){},
I:function I(){},
fA:function fA(){},
fB:function fB(){},
d6:function d6(){},
fD:function fD(){},
bK:function bK(){},
ao:function ao(){},
fM:function fM(){},
fT:function fT(){},
fV:function fV(){},
fW:function fW(){},
bN:function bN(){},
hN:function hN(){},
hO:function hO(){},
hP:function hP(){},
cm:function cm(){},
cd:function cd(){},
ch:function ch(){},
ck:function ck(){},
cz:function cz(){},
cB:function cB(){},
cC:function cC(){},
cD:function cD(){},
dv:function dv(){},
fg:function fg(){},
fh:function fh(){},
hU:function hU(){},
fs:function fs(){},
cs:function cs(){},
cE:function cE(){}},W={
le:function(a){return"wheel"},
aX:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
k1:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
a8:function(a,b,c,d,e){var t=c==null?null:W.k5(new W.hi(c))
t=new W.hh(0,a,b,t,!1,[e])
t.d1(a,b,c,!1,e)
return t},
lZ:function(a){var t
if(!!J.v(a).$isaF)return a
t=new P.h1([],[],!1)
t.c=!0
return t.aV(a)},
k5:function(a){var t=$.x
if(t===C.d)return a
return t.dz(a)},
k:function k(){},
ds:function ds(){},
dt:function dt(){},
Y:function Y(){},
dw:function dw(){},
bZ:function bZ(){},
dx:function dx(){},
c_:function c_(){},
dz:function dz(){},
aD:function aD(){},
dC:function dC(){},
B:function B(){},
bn:function bn(){},
dD:function dD(){},
dF:function dF(){},
dG:function dG(){},
aF:function aF(){},
c1:function c1(){},
dH:function dH(){},
dI:function dI(){},
c2:function c2(){},
c3:function c3(){},
dJ:function dJ(){},
dK:function dK(){},
c4:function c4(){},
j:function j(){},
f:function f(){},
Z:function Z(){},
e6:function e6(){},
e7:function e7(){},
ec:function ec(){},
a_:function a_(){},
eg:function eg(){},
by:function by(){},
c7:function c7(){},
c8:function c8(){},
bz:function bz(){},
ej:function ej(){},
aJ:function aJ(){},
ez:function ez(){},
eF:function eF(){},
eH:function eH(){},
bB:function bB(){},
a1:function a1(){},
eI:function eI(){},
O:function O(){},
eS:function eS(){},
z:function z(){},
cY:function cY(){},
f_:function f_(){},
f2:function f2(){},
a2:function a2(){},
f4:function f4(){},
f7:function f7(){},
f8:function f8(){},
fi:function fi(){},
d1:function d1(){},
fl:function fl(){},
fo:function fo(){},
a3:function a3(){},
fp:function fp(){},
a4:function a4(){},
fr:function fr(){},
a5:function a5(){},
fu:function fu(){},
U:function U(){},
ae:function ae(){},
a6:function a6(){},
V:function V(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(){},
a7:function a7(){},
aQ:function aQ(){},
fK:function fK(){},
fL:function fL(){},
bc:function bc(){},
fN:function fN(){},
aw:function aw(){},
fS:function fS(){},
fU:function fU(){},
fX:function fX(){},
fY:function fY(){},
aS:function aS(){},
bM:function bM(){},
fZ:function fZ(a){this.a=a},
h_:function h_(){},
aT:function aT(){},
h9:function h9(){},
dc:function dc(){},
hb:function hb(){},
hc:function hc(){},
hd:function hd(){},
hx:function hx(){},
hy:function hy(){},
df:function df(){},
hQ:function hQ(){},
hR:function hR(){},
hS:function hS(){},
hV:function hV(){},
hW:function hW(){},
hg:function hg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iU:function iU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hh:function hh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hi:function hi(a){this.a=a},
C:function C(){},
e9:function e9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bo:function bo(){},
bp:function bp(){},
bq:function bq(){},
br:function br(){},
bs:function bs(){},
bt:function bt(){},
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
my:function(a){var t,s
t=document
s=W.aJ
W.a8(t,"keydown",new B.ir(),!1,s)
W.a8(t,"keyup",new B.is(),!1,s)
if(!$.mz)W.a8(t,"mousemove",new B.it(),!1,W.O)
s=W.O
W.a8(t,"mousedown",new B.iu(),!1,s)
W.a8(t,"mouseup",new B.iv(),!1,s)},
lz:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.l(3))
s=$.$get$i4()
r=$.$get$bV()
q=new T.a0(new Float32Array(H.l(16)))
q.W()
q=new B.eV(a,b,c,0,new T.m(t),-0.02,s,r,q,new T.m(new Float32Array(H.l(3))),new T.m(new Float32Array(H.l(3))),new T.m(new Float32Array(H.l(3))),new T.m(new Float32Array(H.l(3))),"camera:orbit",!1,!0)
q.cV(a,b,c,d)
return q},
ir:function ir(){},
is:function is(){},
it:function it(){},
iu:function iu(){},
iv:function iv(){},
eV:function eV(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
eW:function eW(a){this.a=a},
eX:function eX(a){this.a=a},
eY:function eY(){},
eZ:function eZ(a){this.a=a},
l9:function(c9,d0,d1,d2,d3,d4,d5,d6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8
t=-d4
s=-d5
r=new T.m(new Float32Array(H.l(3)))
r.q(t,s,d6)
q=new T.m(new Float32Array(H.l(3)))
q.q(d4,s,d6)
p=new T.m(new Float32Array(H.l(3)))
p.q(d4,d5,d6)
o=new T.m(new Float32Array(H.l(3)))
o.q(t,d5,d6)
n=-d6
m=new T.m(new Float32Array(H.l(3)))
m.q(t,s,n)
l=new T.m(new Float32Array(H.l(3)))
l.q(t,d5,n)
k=new T.m(new Float32Array(H.l(3)))
k.q(d4,d5,n)
j=new T.m(new Float32Array(H.l(3)))
j.q(d4,s,n)
i=new T.m(new Float32Array(H.l(3)))
i.q(t,d5,n)
h=new T.m(new Float32Array(H.l(3)))
h.q(t,d5,d6)
g=new T.m(new Float32Array(H.l(3)))
g.q(d4,d5,d6)
f=new T.m(new Float32Array(H.l(3)))
f.q(d4,d5,n)
e=new T.m(new Float32Array(H.l(3)))
e.q(d4,s,d6)
d=new T.m(new Float32Array(H.l(3)))
d.q(t,s,d6)
c=new T.m(new Float32Array(H.l(3)))
c.q(t,s,n)
b=new T.m(new Float32Array(H.l(3)))
b.q(d4,s,n)
a=new T.m(new Float32Array(H.l(3)))
a.q(d4,s,n)
a0=new T.m(new Float32Array(H.l(3)))
a0.q(d4,d5,n)
a1=new T.m(new Float32Array(H.l(3)))
a1.q(d4,d5,d6)
a2=new T.m(new Float32Array(H.l(3)))
a2.q(d4,s,d6)
a3=new T.m(new Float32Array(H.l(3)))
a3.q(t,s,n)
a4=new T.m(new Float32Array(H.l(3)))
a4.q(t,s,d6)
s=new T.m(new Float32Array(H.l(3)))
s.q(t,d5,d6)
a5=new T.m(new Float32Array(H.l(3)))
a5.q(t,d5,n)
n=new Float32Array(H.l(2))
n[0]=d1
n[1]=d3
t=new Float32Array(H.l(2))
t[0]=d0
t[1]=d3
a6=new Float32Array(H.l(2))
a6[0]=d0
a6[1]=d2
a7=new Float32Array(H.l(2))
a7[0]=d1
a7[1]=d2
a8=new Float32Array(H.l(2))
a8[0]=d0
a8[1]=d3
a9=new Float32Array(H.l(2))
a9[0]=d0
a9[1]=d2
b0=new Float32Array(H.l(2))
b0[0]=d1
b0[1]=d2
b1=new Float32Array(H.l(2))
b1[0]=d1
b1[1]=d3
b2=new Float32Array(H.l(2))
b2[0]=d1
b2[1]=d2
b3=new Float32Array(H.l(2))
b3[0]=d1
b3[1]=d3
b4=new Float32Array(H.l(2))
b4[0]=d0
b4[1]=d3
b5=new Float32Array(H.l(2))
b5[0]=d0
b5[1]=d2
b6=new Float32Array(H.l(2))
b6[0]=d0
b6[1]=d2
b7=new Float32Array(H.l(2))
b7[0]=d1
b7[1]=d2
b8=new Float32Array(H.l(2))
b8[0]=d1
b8[1]=d3
b9=new Float32Array(H.l(2))
b9[0]=d0
b9[1]=d3
c0=new Float32Array(H.l(2))
c0[0]=d0
c0[1]=d3
c1=new Float32Array(H.l(2))
c1[0]=d0
c1[1]=d2
c2=new Float32Array(H.l(2))
c2[0]=d1
c2[1]=d2
c3=new Float32Array(H.l(2))
c3[0]=d1
c3[1]=d3
c4=new Float32Array(H.l(2))
c4[0]=d1
c4[1]=d3
c5=new Float32Array(H.l(2))
c5[0]=d0
c5[1]=d3
c6=new Float32Array(H.l(2))
c6[0]=d0
c6[1]=d2
c7=new Float32Array(H.l(2))
c7[0]=d1
c7[1]=d2
c8=new G.bx(!1,[],[],[],P.N())
c8.ah("aTexUV")
c8.cH(6)
c8.b4([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.aw("aTexUV",[new T.t(n),new T.t(t),new T.t(a6),new T.t(a7),new T.t(a8),new T.t(a9),new T.t(b0),new T.t(b1),new T.t(b2),new T.t(b3),new T.t(b4),new T.t(b5),new T.t(b6),new T.t(b7),new T.t(b8),new T.t(b9),new T.t(c0),new T.t(c1),new T.t(c2),new T.t(c3),new T.t(c4),new T.t(c5),new T.t(c6),new T.t(c7)])
return c8},
la:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=c/2
s=[]
r=[]
q=new T.m(new Float32Array(H.l(3)))
q.q(0,t,0)
C.a.j(s,q)
q=new Float32Array(H.l(2))
q[0]=0
q[1]=0
C.a.j(r,new T.t(q))
q=-t
p=new T.m(new Float32Array(H.l(3)))
p.q(0,q,0)
C.a.j(s,p)
p=new Float32Array(H.l(2))
p[0]=1
p[1]=1
C.a.j(r,new T.t(p))
for(o=0;o<d;++o){n=o/d
p=n*3.141592653589793*2
m=Math.sin(p)
p=Math.cos(p)
l=new Float32Array(3)
l[0]=m*a
l[1]=t
l[2]=p*a
C.a.j(s,new T.m(l))
l=new Float32Array(2)
l[0]=n
l[1]=1
C.a.j(r,new T.t(l))
l=new Float32Array(3)
l[0]=m*b
l[1]=q
l[2]=p*b
C.a.j(s,new T.m(l))
p=new Float32Array(2)
p[0]=n
p[1]=0
C.a.j(r,new T.t(p))}H.d(s.length===2+2*d)
q=[]
p=[]
k=new G.bx(!1,q,p,[],P.N())
k.ah("aTexUV")
k.b4(s)
k.aw("aTexUV",r)
for(o=0;o<d;o=h){j=o*2+2
i=j+1
h=o+1
g=(h===d?0:h)*2+2
f=g+1
H.d(!0)
C.a.j(q,new G.bu(0,j,g))
H.d(!0)
C.a.j(q,new G.bu(1,f,i))
H.d(!0)
C.a.j(p,new G.bv(g,j,i,f))}return k}},G={
lP:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.h(t[s])}return C.a.ab(t,"\n")},
k_:function(a,b,c){var t,s,r,q
t=J.n(a)
s=t.bN(a,b)
t.b1(a,s,c)
t.bK(a,s)
r=t.aZ(a,s,35713)
if(r!=null&&!r){q=t.aY(a,s)
P.aa("E:Compilation failed:")
P.aa("E:"+G.lP(c))
P.aa("E:Failure:")
P.aa(C.e.V("E:",q))
throw H.e(q)}return s},
jC:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
d.A(b)
d.at(a)
e.A(c)
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
l=t[0]
k=t[1]
t=t[2]
t=Math.sqrt(l*l+k*k+t*t)
if(t===0)return!1
e.cl(0,-1/t)
return!0},
jt:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.iB(a[s])
b[t+1]=J.iC(a[s])
b[t+2]=J.jb(a[s])}return b},
lh:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.iB(a[s])
b[t+1]=J.iC(a[s])}return b},
li:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.iB(a[s])
b[t+1]=J.iC(a[s])
b[t+2]=J.jb(a[s])
b[t+3]=J.kM(a[s])}return b},
lg:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.b0(a[s],0)
b[t+1]=J.b0(a[s],1)
b[t+2]=J.b0(a[s],2)
b[t+3]=J.b0(a[s],3)}return b},
lU:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gM(t),s=s.gC(s),r=b.x,q=[[P.b,P.p]],p=[P.L],o=[T.ax],n=[T.m],m=[T.t];s.t();){l=s.gu()
if(!r.D(0,l)){k="Dropping unnecessary attribute: "+H.h(l)
if($.kd>0)H.bl("I: "+k)
continue}j=t.h(0,l)
switch($.$get$S().h(0,l).a){case"vec2":b.a1(l,G.lh(H.dk(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.a1(l,G.jt(H.dk(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.a1(l,G.li(H.dk(j,"$isb",o,"$asb"),null),4)
break
case"float":b.a1(l,new Float32Array(H.hY(H.dk(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.a1(l,G.lg(H.dk(j,"$isb",q,"$asb"),null),4)
break
default:if(H.ay(!1))H.aY("unknown type for "+H.h(l)+" ["+J.kL(j[0]).k(0)+"] ["+new H.av(H.i8(j),null).k(0)+"] "+H.h(j))}}},
lJ:function(a,b,c,d){var t=new G.ff(b,c,d,null,null,P.N(),P.N(),P.aL(null,null,null,P.w),null,a,!1,!0)
t.cW(a,b,c,d)
return t},
eJ:function eJ(){},
d9:function d9(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dy:function dy(){},
dB:function dB(a,b){this.a=a
this.b=b},
ed:function ed(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bu:function bu(a,b,c){this.a=a
this.b=b
this.c=c},
bv:function bv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bx:function bx(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d8:function d8(a,b,c){this.a=a
this.b=b
this.c=c},
d7:function d7(a,b,c){this.a=a
this.b=b
this.c=c},
eE:function eE(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eG:function eG(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
f1:function f1(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
ff:function ff(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
d3:function d3(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fq:function fq(){}},A={
kb:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.A(c)
s=b.d
t.bZ(0,s)
r=b.cx
J.b1(b)
q=C.a.gap(e)
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
p.dF(new T.b8(o))
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
C.a.j(e,b.ch)
a.cP(r,e,d)
e.pop()
for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.E)(s),++l)A.kb(a,s[l],t,d,e)},
eT:function eT(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
d2:function d2(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fe:function fe(a,b,c,d,e,f,g,h,i,a0,a1){var _=this
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
di:function(a){var t,s
t=C.f.dS(a,0,new A.i9())
s=536870911&t+(C.b.cg(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
i9:function i9(){}},D={
lx:function(a){var t,s
t=new P.P(0,$.x,null,[null])
s=new XMLHttpRequest()
C.j.e7(s,"GET",a)
W.a8(s,"loadend",new D.ey(new P.db(t,[null]),s),!1,W.mK)
C.j.E(s,"")
return t},
ey:function ey(a,b){this.a=a
this.b=b}},T={b8:function b8(a){this.a=a},a0:function a0(a){this.a=a},t:function t(a){this.a=a},m:function m(a){this.a=a},ax:function ax(a){this.a=a}},N={
ms:function(){var t,s,r,q,p,o,n,m,l,k
t={}
s=C.o.e9(document,"#webgl-canvas")
r=new G.dB(null,s)
q=(s&&C.n).ck(s,"webgl2",P.aK(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
r.a=q
if(q==null)H.F(P.c5('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
p="ChronosGL Config: "+J.b1(J.kN(q))
if($.kd>0)P.aa("I: "+p)
J.kz(q,0,0,0,1)
J.dn(q,2929)
o=B.lz(25,-45,0.3,s)
q=new T.a0(new Float32Array(H.l(16)))
q.W()
p=new T.a0(new Float32Array(H.l(16)))
p.W()
n=new G.f1(o,50,1,0.1,2520,q,p,new T.a0(new Float32Array(H.l(16))),P.N(),"perspective",!1,!0)
n.b9()
p=H.M([],[A.d2])
m=new A.fe(null,r,p,17664,0,0,0,0,"main",!1,!0)
m.d=new G.ed(r,null,null,null,null)
q=G.lJ("test",r,$.$get$km(),$.$get$kl())
l=new A.d2(q,[n],[],"objects",!1,!0)
H.d(!0)
C.a.j(p,l)
q=new N.io(s,n,m)
q.$1(null)
W.a8(window,"resize",q,!1,W.j)
t.a=0
k=new G.eE(P.N(),"mat",!1,!0)
k.ai("cDepthTest",!0)
k.ai("cDepthWrite",!0)
k.ai("cBlendEquation",$.$get$jk())
k.ai("cStencilFunc",$.$get$jK())
P.lk([D.lx("../ct_logo.obj")],null,!1).aS(new N.im(l,new N.il(t,o,m),k))},
io:function io(a,b,c){this.a=a
this.b=b
this.c=c},
il:function il(a,b,c){this.a=a
this.b=b
this.c=c},
im:function im(a,b,c){this.a=a
this.b=b
this.c=c}},Y={
ll:function(a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
t=new G.bx(!1,[],[],[],P.N())
t.ah("aTexUV")
t.ah("aNormal")
s=P.N()
r=a6.split("\n")
q=[]
p=[]
o=[]
n=Date.now()
m=P.jJ("\\s+",!0,!1)
l=P.jJ("\\s\\s*\\$",!0,!1)
for(k=r.length,j=0;j<r.length;r.length===k||(0,H.E)(r),++j){i=r[j]
i.toString
h=H.mA(i,m," ")
g=H.mC(h,l,"",0)
if(g.length===0||g[0]==="#")continue
f=g.split(" ")
if(J.A(f[0],"g"))s.i(0,f[1],q.length)
else if(J.A(f[0],"v")){h=H.aO(f[1],null)
e=H.aO(f[2],null)
d=H.aO(f[3],null)
c=new Float32Array(3)
c[0]=h
c[1]=e
c[2]=d
C.a.j(q,new T.m(c))}else if(J.A(f[0],"vt")){h=H.aO(f[1],null)
e=H.aO(f[2],null)
d=new Float32Array(2)
d[0]=h
d[1]=e
C.a.j(o,new T.t(d))}else if(J.A(f[0],"vn")){h=H.aO(f[1],null)
e=H.aO(f[2],null)
d=H.aO(f[3],null)
c=new Float32Array(3)
c[0]=h
c[1]=e
c[2]=d
C.a.j(p,new T.m(c))}else if(J.A(f[0],"f")){h=f.length
if(h!==4&&h!==5){H.bl("*** Error: face '"+g+"' not handled")
continue}b=[]
a=[]
a0=[]
for(a1=1;h=f.length,a1<h;++a1){a2=J.kT(f[a1],"/")
H.d(a2.length>0)
for(;a2.length<3;)C.a.j(a2,"")
a3=H.iQ(a2[0],null,null)-1
a4=J.A(a2[1],"")?-1:H.iQ(a2[1],null,null)-1
a5=J.A(a2[2],"")?-1:H.iQ(a2[2],null,null)-1
if(a3<q.length)C.a.j(b,q[a3])
else C.a.j(b,new T.m(new Float32Array(3)))
if(a4!==-1&&a4<o.length)C.a.j(a0,o[a4])
else{H.bl("problem uv "+a1+" "+a4)
C.a.j(a0,new T.t(new Float32Array(2)))}if(a5!==-1&&a5<p.length)C.a.j(a,p[a5])
else{H.bl("problem normals "+a1+" "+a5)
C.a.j(a,new T.m(new Float32Array(3)))}}if(h===4)t.cJ(b)
else t.cK(b)
t.cG("aNormal",a)
t.aw("aTexUV",a0)}}P.aa("loaded ("+P.ld(0,0,0,Date.now()-new P.aE(n,!1).a,0,0).k(0)+") "+t.k(0))
return t}}
var v=[C,H,J,P,W,B,G,A,D,T,N,Y]
setFunctionNamesIfNecessary(v)
var $={}
H.iK.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gv:function(a){return H.aN(a)},
k:function(a){return H.f9(a)},
gB:function(a){return new H.av(H.i8(a),null)}}
J.en.prototype={
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
gB:function(a){return C.N},
$isaZ:1}
J.ep.prototype={
w:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
gB:function(a){return C.H}}
J.bA.prototype={
gv:function(a){return 0},
gB:function(a){return C.G},
k:function(a){return String(a)},
$isjx:1}
J.f3.prototype={}
J.aR.prototype={}
J.aI.prototype={
k:function(a){var t=a[$.$get$jr()]
return t==null?this.cD(a):J.b1(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isiH:1}
J.aG.prototype={
aL:function(a,b){if(!!a.immutable$list)throw H.e(new P.u(b))},
aK:function(a,b){if(!!a.fixed$length)throw H.e(new P.u(b))},
j:function(a,b){this.aK(a,"add")
a.push(b)},
ds:function(a,b){var t,s,r,q,p
t=a.length
this.aK(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.E)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.F(new P.ab(a)))
a.push(q)}},
bY:function(a,b){return new H.cS(a,b,[H.bk(a,0),null])},
ab:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.h(a[s])
return t.join(b)},
p:function(a,b){return this.h(a,b)},
gdR:function(a){if(a.length>0)return a[0]
throw H.e(H.iI())},
gap:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.iI())},
b0:function(a,b,c,d,e){var t,s
this.aL(a,"setRange")
P.jI(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.F(P.bH(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.lt())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
cv:function(a,b){this.aL(a,"sort")
H.d4(a,0,a.length-1,P.mf())},
as:function(a){return this.cv(a,null)},
Y:function(a,b){var t
for(t=0;t<a.length;++t)if(J.A(a[t],b))return!0
return!1},
k:function(a){return P.em(a,"[","]")},
gC:function(a){return new J.du(a,a.length,0,null,[H.bk(a,0)])},
gv:function(a){return H.aN(a)},
gl:function(a){return a.length},
sl:function(a,b){this.aK(a,"set length")
if(b<0)throw H.e(P.bH(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.K(a,b))
if(b>=a.length||b<0)throw H.e(H.K(a,b))
return a[b]},
i:function(a,b,c){this.aL(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.K(a,b))
if(b>=a.length||b<0)throw H.e(H.K(a,b))
a[b]=c},
$iso:1,
$aso:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.iJ.prototype={}
J.du.prototype={
gu:function(){return this.d},
t:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.E(t))
r=this.c
if(r>=s){this.sba(null)
return!1}this.sba(t[r]);++this.c
return!0},
sba:function(a){this.d=a}}
J.b6.prototype={
L:function(a,b){var t
if(typeof b!=="number")throw H.e(H.Q(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaO(b)
if(this.gaO(a)===t)return 0
if(this.gaO(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaO:function(a){return a===0?1/a<0:a<0},
Z:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.u(""+a+".round()"))},
dB:function(a,b,c){if(this.L(b,c)>0)throw H.e(H.Q(b))
if(this.L(a,b)<0)return b
if(this.L(a,c)>0)return c
return a},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
V:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return a+b},
a0:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return a-b},
ci:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return a/b},
F:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return a*b},
av:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bw(a,b)},
I:function(a,b){return(a|0)===a?a/b|0:this.bw(a,b)},
bw:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.u("Result of truncating division is "+H.h(t)+": "+H.h(a)+" ~/ "+b))},
aG:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cg:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return(a&b)>>>0},
cE:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return(a^b)>>>0},
ag:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return a<b},
af:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return a>b},
cj:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return a>=b},
gB:function(a){return C.Q},
$isT:1}
J.cP.prototype={
gB:function(a){return C.P},
$isL:1,
$isp:1,
$isT:1}
J.eo.prototype={
gB:function(a){return C.O},
$isL:1,
$isT:1}
J.aH.prototype={
bJ:function(a,b){if(b<0)throw H.e(H.K(a,b))
if(b>=a.length)H.F(H.K(a,b))
return a.charCodeAt(b)},
a2:function(a,b){if(b>=a.length)throw H.e(H.K(a,b))
return a.charCodeAt(b)},
V:function(a,b){if(typeof b!=="string")throw H.e(P.jj(b,null,null))
return a+b},
cw:function(a,b){var t=a.split(b)
return t},
cA:function(a,b,c){var t
if(c>a.length)throw H.e(P.bH(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
cz:function(a,b){return this.cA(a,b,0)},
au:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fa(b,null,null))
if(b>c)throw H.e(P.fa(b,null,null))
if(c>a.length)throw H.e(P.fa(c,null,null))
return a.substring(b,c)},
cB:function(a,b){return this.au(a,b,null)},
ei:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.a2(t,0)===133){r=J.lu(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.bJ(t,q)===133?J.lv(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
L:function(a,b){var t
if(typeof b!=="string")throw H.e(H.Q(b))
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
gB:function(a){return C.I},
gl:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.K(a,b))
return a[b]},
$iso:1,
$aso:function(){},
$isw:1}
H.c.prototype={$asc:null}
H.b7.prototype={
gC:function(a){return new H.cQ(this,this.gl(this),0,null,[H.az(this,"b7",0)])},
eg:function(a,b){var t,s
t=H.M([],[H.az(this,"b7",0)])
C.a.sl(t,this.gl(this))
for(s=0;s<this.gl(this);++s)t[s]=this.p(0,s)
return t},
ef:function(a){return this.eg(a,!0)}}
H.cQ.prototype={
gu:function(){return this.d},
t:function(){var t,s,r,q
t=this.a
s=J.a9(t)
r=s.gl(t)
if(this.b!==r)throw H.e(new P.ab(t))
q=this.c
if(q>=r){this.sa4(null)
return!1}this.sa4(s.p(t,q));++this.c
return!0},
sa4:function(a){this.d=a}}
H.cR.prototype={
gC:function(a){return new H.eA(null,J.dp(this.a),this.b,this.$ti)},
gl:function(a){return J.dq(this.a)},
$asal:function(a,b){return[b]}}
H.dN.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.eA.prototype={
t:function(){var t=this.b
if(t.t()){this.sa4(this.c.$1(t.gu()))
return!0}this.sa4(null)
return!1},
gu:function(){return this.a},
sa4:function(a){this.a=a},
$ascO:function(a,b){return[b]}}
H.cS.prototype={
gl:function(a){return J.dq(this.a)},
p:function(a,b){return this.b.$1(J.kI(this.a,b))},
$asc:function(a,b){return[b]},
$asb7:function(a,b){return[b]},
$asal:function(a,b){return[b]}}
H.c6.prototype={}
H.iw.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.ix.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hF.prototype={
se1:function(a){this.z=a},
se4:function(a){this.ch=a}}
H.aV.prototype={
bz:function(a,b){if(!this.f.w(0,a))return
if(this.Q.j(0,b)&&!this.y)this.y=!0
this.aI()},
eb:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.ac(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bp();++r.d}this.y=!1}this.aI()},
dt:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).j(r,a)
t=this.ch;(t&&C.a).j(t,b)},
ea:function(a){var t,s,r
if(this.ch==null)return
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.F(new P.u("removeRange"))
P.jI(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
ct:function(a,b){if(!this.r.w(0,a))return
this.db=b},
dW:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.E(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.iN(null,null)
this.cx=t}t.O(0,new H.hA(a,c))},
dV:function(a,b){var t
if(!this.r.w(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.ao()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.iN(null,null)
this.cx=t}t.O(0,this.ge2())},
dX:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.aa(a)
if(b!=null)P.aa(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.b1(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bO(t,t.r,null,null,[null]),r.c=t.e;r.t();)r.d.E(0,s)},
a8:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.ag(o)
p=H.ar(o)
this.dX(q,p)
if(this.db){this.ao()
if(this===u.globalState.e)throw o}}finally{this.cy=H.ma(r)
u.globalState.d=H.ki(t,"$isaV")
if(t!=null)$=t.ge0()
if(this.cx!=null)for(;n=this.cx,!n.gan(n);)this.cx.c_().$0()}return s},
bX:function(a){return this.b.h(0,a)},
be:function(a,b){var t=this.b
if(t.D(0,a))throw H.e(P.c5("Registry: ports must be registered only once."))
t.i(0,a,b)},
aI:function(){var t=this.b
if(t.gl(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.ao()},
ao:function(){var t,s,r
t=this.cx
if(t!=null)t.P(0)
for(t=this.b,s=t.gcd(t),s=s.gC(s);s.t();)s.gu().d7()
t.P(0)
this.c.P(0)
u.globalState.z.ac(0,this.a)
this.dx.P(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].E(0,t[r+1])
this.ch=null}},
ge0:function(){return this.d},
gdE:function(){return this.e}}
H.hA.prototype={
$0:function(){this.a.E(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.he.prototype={
dI:function(){var t=this.a
if(t.b===t.c)return
return t.c_()},
c1:function(){var t,s,r
t=this.dI()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.D(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gan(s)}else s=!1
else s=!1
else s=!1
if(s)H.F(P.c5("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gan(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aK(["command","close"])
r=new H.af(!0,new P.de(0,null,null,null,null,null,0,[null,P.p])).H(r)
s.toString
self.postMessage(r)}return!1}t.e8()
return!0},
bu:function(){if(self.window!=null)new H.hf(this).$0()
else for(;this.c1(););},
ad:function(){var t,s,r,q,p
if(!u.globalState.x)this.bu()
else try{this.bu()}catch(r){t=H.ag(r)
s=H.ar(r)
q=u.globalState.Q
p=P.aK(["command","error","msg",H.h(t)+"\n"+H.h(s)])
p=new H.af(!0,P.bP(null,P.p)).H(p)
q.toString
self.postMessage(p)}}}
H.hf.prototype={
$0:function(){if(!this.a.c1())return
P.lO(C.i,this)},
$S:function(){return{func:1,v:true}}}
H.aW.prototype={
e8:function(){var t=this.a
if(t.y){C.a.j(t.z,this)
return}t.a8(this.b)}}
H.hE.prototype={}
H.ek.prototype={
$0:function(){H.lp(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.el.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bi(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bi(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aI()},
$S:function(){return{func:1,v:true}}}
H.h8.prototype={}
H.be.prototype={
E:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.lY(b)
if(t.gdE()===s){s=J.a9(r)
switch(s.h(r,0)){case"pause":t.bz(s.h(r,1),s.h(r,2))
break
case"resume":t.eb(s.h(r,1))
break
case"add-ondone":t.dt(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.ea(s.h(r,1))
break
case"set-errors-fatal":t.ct(s.h(r,1),s.h(r,2))
break
case"ping":t.dW(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.dV(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.j(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ac(0,s)
break}return}u.globalState.f.a.O(0,new H.aW(t,new H.hH(this,r),"receive"))},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.be){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gv:function(a){return this.b.a}}
H.hH.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.d3(0,this.b)},
$S:function(){return{func:1}}}
H.bQ.prototype={
E:function(a,b){var t,s,r
t=P.aK(["command","message","port",this,"msg",b])
s=new H.af(!0,P.bP(null,P.p)).H(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bQ){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gv:function(a){return C.b.cE((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bb.prototype={
d7:function(){this.c=!0
this.b=null},
d3:function(a,b){if(this.c)return
this.b.$1(b)},
$islH:1}
H.fH.prototype={
cY:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.O(0,new H.aW(s,new H.fI(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.b_(new H.fJ(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.u("Timer greater than 0."))}}}
H.fI.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.fJ.prototype={
$0:function(){this.a.c=null
H.ik()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ak.prototype={
gv:function(a){var t=this.a
t=C.b.aG(t,0)^C.b.I(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
w:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ak){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.af.prototype={
H:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gl(t))
t=J.v(a)
if(!!t.$isbC)return["buffer",a]
if(!!t.$isb9)return["typed",a]
if(!!t.$iso)return this.cp(a)
if(!!t.$islm){r=this.gcm()
q=t.gM(a)
q=H.iO(q,r,H.az(q,"al",0),null)
q=P.jB(q,!0,H.az(q,"al",0))
t=t.gcd(a)
t=H.iO(t,r,H.az(t,"al",0),null)
return["map",q,P.jB(t,!0,H.az(t,"al",0))]}if(!!t.$isjx)return this.cq(a)
if(!!t.$isa)this.cb(a)
if(!!t.$islH)this.ae(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbe)return this.cr(a)
if(!!t.$isbQ)return this.cs(a)
if(!!t.$isb3){p=a.$static_name
if(p==null)this.ae(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isak)return["capability",a.a]
if(!(a instanceof P.q))this.cb(a)
return["dart",u.classIdExtractor(a),this.co(u.classFieldsExtractor(a))]},
ae:function(a,b){throw H.e(new P.u((b==null?"Can't transmit:":b)+" "+H.h(a)))},
cb:function(a){return this.ae(a,null)},
cp:function(a){var t
H.d(typeof a!=="string")
t=this.cn(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ae(a,"Can't serialize indexable: ")},
cn:function(a){var t,s
t=[]
C.a.sl(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.H(a[s])
return t},
co:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.H(a[t]))
return a},
cq:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ae(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sl(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.H(a[t[r]])
return["js-object",t,s]},
cs:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cr:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aU.prototype={
R:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.iE("Bad serialized message: "+H.h(a)))
switch(C.a.gdR(a)){case"ref":H.d(J.A(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.d(J.A(a[0],"buffer"))
t=a[1]
C.a.j(this.b,t)
return t
case"typed":H.d(J.A(a[0],"typed"))
t=a[1]
C.a.j(this.b,t)
return t
case"fixed":H.d(J.A(a[0],"fixed"))
t=a[1]
C.a.j(this.b,t)
s=H.M(this.a7(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.A(a[0],"extendable"))
t=a[1]
C.a.j(this.b,t)
return H.M(this.a7(t),[null])
case"mutable":H.d(J.A(a[0],"mutable"))
t=a[1]
C.a.j(this.b,t)
return this.a7(t)
case"const":H.d(J.A(a[0],"const"))
t=a[1]
C.a.j(this.b,t)
s=H.M(this.a7(t),[null])
s.fixed$length=Array
return s
case"map":return this.dL(a)
case"sendport":return this.dM(a)
case"raw sendport":H.d(J.A(a[0],"raw sendport"))
t=a[1]
C.a.j(this.b,t)
return t
case"js-object":return this.dK(a)
case"function":H.d(J.A(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.j(this.b,t)
return t
case"capability":H.d(J.A(a[0],"capability"))
return new H.ak(a[1])
case"dart":H.d(J.A(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.j(this.b,p)
this.a7(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.h(a))}},
a7:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.R(a[t]))
return a},
dL:function(a){var t,s,r,q,p
H.d(J.A(a[0],"map"))
t=a[1]
s=a[2]
r=P.N()
C.a.j(this.b,r)
t=J.kR(t,this.gdJ()).ef(0)
for(q=J.a9(s),p=0;p<t.length;++p)r.i(0,t[p],this.R(q.h(s,p)))
return r},
dM:function(a){var t,s,r,q,p,o,n
H.d(J.A(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.bX(r)
if(o==null)return
n=new H.be(o,s)}else n=new H.bQ(t,r,s)
C.a.j(this.b,n)
return n},
dK:function(a){var t,s,r,q,p,o
H.d(J.A(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.j(this.b,r)
for(q=J.a9(t),p=J.a9(s),o=0;o<q.gl(t);++o)r[q.h(t,o)]=this.R(p.h(s,o))
return r}}
H.fd.prototype={}
H.fO.prototype={
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
H.cZ.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.h(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.es.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.h(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.h(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.h(this.a)+")"}}
H.fR.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.iy.prototype={
$1:function(a){if(!!J.v(a).$isb4)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dg.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.ie.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.ig.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.ih.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.ii.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.ij.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.b3.prototype={
k:function(a){return"Closure '"+H.d_(this).trim()+"'"},
$isiH:1,
gek:function(){return this},
$D:null}
H.fC.prototype={}
H.ft.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bm.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bm))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var t,s
t=this.c
if(t==null)s=H.aN(this.a)
else s=typeof t!=="object"?J.ai(t):H.aN(t)
return(s^H.aN(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.h(this.d)+"' of "+H.f9(t)}}
H.fQ.prototype={
k:function(a){return this.a}}
H.dA.prototype={
k:function(a){return this.a}}
H.fj.prototype={
k:function(a){return"RuntimeError: "+H.h(this.a)}}
H.h3.prototype={
k:function(a){return C.e.V("Assertion failed: ",P.iG(this.a))}}
H.av.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gv:function(a){return J.ai(this.a)},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.av){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ad.prototype={
gl:function(a){return this.a},
gan:function(a){return this.a===0},
gM:function(a){return new H.ev(this,[H.bk(this,0)])},
gcd:function(a){return H.iO(this.gM(this),new H.er(this),H.bk(this,0),H.bk(this,1))},
D:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bm(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bm(s,b)}else return this.dY(b)},
dY:function(a){var t=this.d
if(t==null)return!1
return this.aa(this.al(t,this.a9(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.a5(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.a5(r,b)
return s==null?null:s.b}else return this.dZ(b)},
dZ:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.al(t,this.a9(a))
r=this.aa(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aC()
this.b=t}this.bc(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aC()
this.c=s}this.bc(s,b,c)}else{r=this.d
if(r==null){r=this.aC()
this.d=r}q=this.a9(b)
p=this.al(r,q)
if(p==null)this.aF(r,q,[this.aD(b,c)])
else{o=this.aa(p,b)
if(o>=0)p[o].b=c
else p.push(this.aD(b,c))}}},
ac:function(a,b){if(typeof b==="string")return this.bt(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bt(this.c,b)
else return this.e_(b)},
e_:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.al(t,this.a9(a))
r=this.aa(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bx(q)
return q.b},
P:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
aN:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.ab(this))
t=t.c}},
bc:function(a,b,c){var t=this.a5(a,b)
if(t==null)this.aF(a,b,this.aD(b,c))
else t.b=c},
bt:function(a,b){var t
if(a==null)return
t=this.a5(a,b)
if(t==null)return
this.bx(t)
this.bn(a,b)
return t.b},
aD:function(a,b){var t,s
t=new H.eu(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bx:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
a9:function(a){return J.ai(a)&0x3ffffff},
aa:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.A(a[s].a,b))return s
return-1},
k:function(a){return P.ly(this)},
a5:function(a,b){return a[b]},
al:function(a,b){return a[b]},
aF:function(a,b,c){H.d(c!=null)
a[b]=c},
bn:function(a,b){delete a[b]},
bm:function(a,b){return this.a5(a,b)!=null},
aC:function(){var t=Object.create(null)
this.aF(t,"<non-identifier-key>",t)
this.bn(t,"<non-identifier-key>")
return t},
$islm:1}
H.er.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.eu.prototype={}
H.ev.prototype={
gl:function(a){return this.a.a},
gC:function(a){var t,s
t=this.a
s=new H.ew(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.ew.prototype={
gu:function(){return this.d},
t:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.ab(t))
else{t=this.c
if(t==null){this.sbb(null)
return!1}else{this.sbb(t.a)
this.c=this.c.c
return!0}}},
sbb:function(a){this.d=a}}
H.ia.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.ib.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.w]}}}
H.ic.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.w]}}}
H.eq.prototype={
k:function(a){return"RegExp/"+this.a+"/"},
gbr:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.jz(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
df:function(a,b){var t,s
t=this.gbr()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return H.lX(this,s)}}
H.hG.prototype={
h:function(a,b){return this.b[b]},
d2:function(a,b){var t,s
t=this.b
s=t.input
H.d(typeof s==="string")
t=t.index
H.d(typeof t==="number"&&Math.floor(t)===t)}}
H.bC.prototype={
gB:function(a){return C.z},
$isbC:1}
H.b9.prototype={$isb9:1}
H.eK.prototype={
gB:function(a){return C.A}}
H.cU.prototype={
gl:function(a){return a.length},
$iso:1,
$aso:function(){},
$isr:1,
$asr:function(){}}
H.cV.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.K(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.F(H.K(a,b))
a[b]=c}}
H.cW.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.F(H.K(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.cT.prototype={
gB:function(a){return C.B},
$isc:1,
$asc:function(){return[P.L]},
$isb:1,
$asb:function(){return[P.L]},
$isea:1}
H.eL.prototype={
gB:function(a){return C.C},
$isc:1,
$asc:function(){return[P.L]},
$isb:1,
$asb:function(){return[P.L]}}
H.eM.prototype={
gB:function(a){return C.D},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.K(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.eN.prototype={
gB:function(a){return C.E},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.K(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$isju:1}
H.eO.prototype={
gB:function(a){return C.F},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.K(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.eP.prototype={
gB:function(a){return C.J},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.K(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$isjX:1}
H.eQ.prototype={
gB:function(a){return C.K},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.K(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$isjY:1}
H.cX.prototype={
gB:function(a){return C.L},
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.K(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.eR.prototype={
gB:function(a){return C.M},
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.K(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$isjZ:1}
H.bD.prototype={
$aso:function(){},
$isc:1,
$asc:function(){return[P.p]},
$asr:function(){},
$isb:1,
$asb:function(){return[P.p]}}
H.bE.prototype={
$aso:function(){},
$isc:1,
$asc:function(){return[P.L]},
$asr:function(){},
$isb:1,
$asb:function(){return[P.L]}}
H.bF.prototype={
$aso:function(){},
$asc:function(){return[P.L]},
$asr:function(){},
$asb:function(){return[P.L]}}
H.bG.prototype={
$aso:function(){},
$asc:function(){return[P.p]},
$asr:function(){},
$asb:function(){return[P.p]}}
P.h5.prototype={
$1:function(a){var t,s
H.ik()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.h4.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.h6.prototype={
$0:function(){H.ik()
this.a.$0()},
$S:function(){return{func:1}}}
P.h7.prototype={
$0:function(){H.ik()
this.a.$0()},
$S:function(){return{func:1}}}
P.ef.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.G(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.G(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.ee.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.e]=a
if(s===0)this.d.bl(r)}else if(t.b===0&&!this.b)this.d.G(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.ha.prototype={
dD:function(a,b){if(a==null)a=new P.ba()
if(this.a.a!==0)throw H.e(new P.aP("Future already completed"))
$.x.toString
this.G(a,b)},
dC:function(a){return this.dD(a,null)}}
P.db.prototype={
am:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.aP("Future already completed"))
t.bf(b)},
G:function(a,b){this.a.bg(a,b)}}
P.hT.prototype={
am:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.aP("Future already completed"))
t.ay(b)},
G:function(a,b){this.a.G(a,b)}}
P.dd.prototype={
e5:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.aR(this.d,a.a)},
dU:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bi(s,{func:1,args:[P.q,P.bI]}))return t.ec(s,a.a,a.b)
else return t.aR(s,a.a)}}
P.P.prototype={
aT:function(a,b){var t,s,r
t=$.x
if(t!==C.d){t.toString
if(b!=null)b=P.m2(b,t)}s=new P.P(0,t,null,[null])
r=b==null?1:3
this.bd(new P.dd(null,s,r,a,b,[H.bk(this,0),null]))
return s},
aS:function(a){return this.aT(a,null)},
bh:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
bd:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.ki(this.c,"$isdd")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.bd(a)
return}this.bh(t)}H.d(this.a>=4)
t=this.b
t.toString
P.bg(null,null,t,new P.hk(this,a))}},
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
return}this.bh(s)}H.d(this.a>=4)
t.a=this.a6(a)
s=this.b
s.toString
P.bg(null,null,s,new P.hs(t,this))}},
aE:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.a6(t)},
a6:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
ay:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.bU(a,"$isb5",t,"$asb5"))if(H.bU(a,"$isP",t,null))P.hn(a,this)
else P.k0(a,this)
else{s=this.aE()
H.d(this.a<4)
this.a=4
this.c=a
P.bd(this,s)}},
bl:function(a){var t
H.d(this.a<4)
H.d(!J.v(a).$isb5)
t=this.aE()
H.d(this.a<4)
this.a=4
this.c=a
P.bd(this,t)},
G:function(a,b){var t
H.d(this.a<4)
t=this.aE()
H.d(this.a<4)
this.a=8
this.c=new P.b2(a,b)
P.bd(this,t)},
d9:function(a){return this.G(a,null)},
bf:function(a){var t
H.d(this.a<4)
if(H.bU(a,"$isb5",this.$ti,"$asb5")){this.d6(a)
return}H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bg(null,null,t,new P.hm(this,a))},
d6:function(a){var t
if(H.bU(a,"$isP",this.$ti,null)){if(a.a===8){H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bg(null,null,t,new P.hr(this,a))}else P.hn(a,this)
return}P.k0(a,this)},
bg:function(a,b){var t
H.d(this.a<4)
H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bg(null,null,t,new P.hl(this,a,b))},
$isb5:1,
gaH:function(){return this.a},
gdm:function(){return this.c}}
P.hk.prototype={
$0:function(){P.bd(this.a,this.b)},
$S:function(){return{func:1}}}
P.hs.prototype={
$0:function(){P.bd(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.ho.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.ay(a)},
$S:function(){return{func:1,args:[,]}}}
P.hp.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.G(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hq.prototype={
$0:function(){this.a.G(this.b,this.c)},
$S:function(){return{func:1}}}
P.hm.prototype={
$0:function(){this.a.bl(this.b)},
$S:function(){return{func:1}}}
P.hr.prototype={
$0:function(){P.hn(this.b,this.a)},
$S:function(){return{func:1}}}
P.hl.prototype={
$0:function(){this.a.G(this.b,this.c)},
$S:function(){return{func:1}}}
P.hv.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.c0(q.d)}catch(n){s=H.ag(n)
r=H.ar(n)
if(this.c){q=this.a.a
H.d(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.d(q.a===8)
p.b=q.c}else p.b=new P.b2(s,r)
p.a=!0
return}if(!!J.v(t).$isb5){if(t instanceof P.P&&t.gaH()>=4){if(t.gaH()===8){q=t
H.d(q.gaH()===8)
p=this.b
p.b=q.gdm()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.aS(new P.hw(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hw.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.hu.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.aR(r.d,this.c)}catch(q){t=H.ag(q)
s=H.ar(q)
r=this.a
r.b=new P.b2(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.ht.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.e5(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.dU(t)
p.a=!1}}catch(o){s=H.ag(o)
r=H.ar(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.b2(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.da.prototype={}
P.fv.prototype={
gl:function(a){var t,s
t={}
s=new P.P(0,$.x,null,[P.p])
t.a=0
this.e3(new P.fx(t),!0,new P.fy(t,s),s.gd8())
return s}}
P.fx.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.fy.prototype={
$0:function(){this.b.ay(this.a.a)},
$S:function(){return{func:1}}}
P.fw.prototype={}
P.b2.prototype={
k:function(a){return H.h(this.a)},
$isb4:1}
P.hX.prototype={}
P.i_.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.ba()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.hJ.prototype={
ed:function(a){var t,s,r
try{if(C.d===$.x){a.$0()
return}P.k2(null,null,this,a)}catch(r){t=H.ag(r)
s=H.ar(r)
P.hZ(null,null,this,t,s)}},
ee:function(a,b){var t,s,r
try{if(C.d===$.x){a.$1(b)
return}P.k3(null,null,this,a,b)}catch(r){t=H.ag(r)
s=H.ar(r)
P.hZ(null,null,this,t,s)}},
dw:function(a){return new P.hL(this,a)},
aJ:function(a){return new P.hK(this,a)},
dz:function(a){return new P.hM(this,a)},
h:function(a,b){return},
c0:function(a){if($.x===C.d)return a.$0()
return P.k2(null,null,this,a)},
aR:function(a,b){if($.x===C.d)return a.$1(b)
return P.k3(null,null,this,a,b)},
ec:function(a,b,c){if($.x===C.d)return a.$2(b,c)
return P.m3(null,null,this,a,b,c)}}
P.hL.prototype={
$0:function(){return this.a.c0(this.b)},
$S:function(){return{func:1}}}
P.hK.prototype={
$0:function(){return this.a.ed(this.b)},
$S:function(){return{func:1}}}
P.hM.prototype={
$1:function(a){return this.a.ee(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.de.prototype={
a9:function(a){return H.mu(a)&0x3ffffff},
aa:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hB.prototype={
gC:function(a){var t=new P.bO(this,this.r,null,null,[null])
t.c=this.e
return t},
gl:function(a){return this.a},
Y:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.da(b)},
da:function(a){var t=this.d
if(t==null)return!1
return this.ak(t[this.aj(a)],a)>=0},
bX:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.Y(0,a)?a:null
else return this.dj(a)},
dj:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aj(a)]
r=this.ak(s,a)
if(r<0)return
return J.b0(s,r).gdd()},
j:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bi(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bi(r,b)}else return this.O(0,b)},
O:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.lV()
this.d=t}s=this.aj(b)
r=t[s]
if(r==null){q=[this.ax(b)]
H.d(q!=null)
t[s]=q}else{if(this.ak(r,b)>=0)return!1
r.push(this.ax(b))}return!0},
ac:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bj(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bj(this.c,b)
else return this.dk(0,b)},
dk:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aj(b)]
r=this.ak(s,b)
if(r<0)return!1
this.bk(s.splice(r,1)[0])
return!0},
P:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bi:function(a,b){var t
if(a[b]!=null)return!1
t=this.ax(b)
H.d(!0)
a[b]=t
return!0},
bj:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bk(t)
delete a[b]
return!0},
ax:function(a){var t,s
t=new P.hC(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bk:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
aj:function(a){return J.ai(a)&0x3ffffff},
ak:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.A(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.hC.prototype={
gdd:function(){return this.a}}
P.bO.prototype={
gu:function(){return this.d},
t:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.ab(t))
else{t=this.c
if(t==null){this.sa3(null)
return!1}else{this.sa3(t.a)
this.c=this.c.b
return!0}}},
sa3:function(a){this.d=a}}
P.hz.prototype={}
P.y.prototype={
gC:function(a){return new H.cQ(a,this.gl(a),0,null,[H.az(a,"y",0)])},
p:function(a,b){return this.h(a,b)},
bY:function(a,b){return new H.cS(a,b,[H.az(a,"y",0),null])},
dS:function(a,b,c){var t,s,r
t=this.gl(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gl(a))throw H.e(new P.ab(a))}return s},
k:function(a){return P.em(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.eB.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.h(a)
t.a=s+": "
t.a+=H.h(b)},
$S:function(){return{func:1,args:[,,]}}}
P.ex.prototype={
gC:function(a){return new P.hD(this,this.c,this.d,this.b,null,this.$ti)},
gan:function(a){return this.b===this.c},
gl:function(a){return(this.c-this.b&this.a.length-1)>>>0},
p:function(a,b){var t=(this.c-this.b&this.a.length-1)>>>0
if(C.b.af(0,b)||b>=t)H.F(P.D(b,this,"index",null,t))
return this.a[(C.b.V(this.b,b)&this.a.length-1)>>>0]},
P:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.em(this,"{","}")},
c_:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.iI());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
O:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bp();++this.d},
bp:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.M(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.b0(s,0,q,t,r)
C.a.b0(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbv(s)},
cU:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbv(H.M(t,[b]))},
sbv:function(a){this.a=a},
$asc:null}
P.hD.prototype={
gu:function(){return this.e},
t:function(){var t,s
t=this.a
if(this.c!==t.d)H.F(new P.ab(t))
s=this.d
if(s===this.b){this.sa3(null)
return!1}this.sa3(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sa3:function(a){this.e=a}}
P.fn.prototype={
k:function(a){return P.em(this,"{","}")},
$isc:1,
$asc:null}
P.fm.prototype={}
P.aZ.prototype={}
P.G.prototype={}
P.aE.prototype={
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.aE))return!1
return this.a===b.a&&this.b===b.b},
L:function(a,b){return C.b.L(this.a,b.a)},
gv:function(a){var t=this.a
return(t^C.b.aG(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.lb(H.lG(this))
s=P.c0(H.lE(this))
r=P.c0(H.lA(this))
q=P.c0(H.lB(this))
p=P.c0(H.lD(this))
o=P.c0(H.lF(this))
n=P.lc(H.lC(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
ge6:function(){return this.a},
cM:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.e(P.iE("DateTime is outside valid range: "+this.ge6()))},
$isG:1,
$asG:function(){return[P.aE]}}
P.L.prototype={$isG:1,
$asG:function(){return[P.T]}}
P.as.prototype={
ag:function(a,b){return C.b.ag(this.a,b.gdc())},
af:function(a,b){return C.b.af(this.a,b.gdc())},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.as))return!1
return this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
L:function(a,b){return C.b.L(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.dM()
s=this.a
if(s<0)return"-"+new P.as(0-s).k(0)
r=t.$1(C.b.I(s,6e7)%60)
q=t.$1(C.b.I(s,1e6)%60)
p=new P.dL().$1(s%1e6)
return""+C.b.I(s,36e8)+":"+H.h(r)+":"+H.h(q)+"."+H.h(p)},
$isG:1,
$asG:function(){return[P.as]}}
P.dL.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.w,args:[P.p]}}}
P.dM.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.w,args:[P.p]}}}
P.b4.prototype={}
P.bY.prototype={
k:function(a){return"Assertion failed"}}
P.ba.prototype={
k:function(a){return"Throw of null."}}
P.aj.prototype={
gaA:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaz:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.h(t)
q=this.gaA()+s+r
if(!this.a)return q
p=this.gaz()
o=P.iG(this.b)
return q+p+": "+H.h(o)}}
P.d0.prototype={
gaA:function(){return"RangeError"},
gaz:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.h(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.h(t)
else if(r>t)s=": Not in range "+H.h(t)+".."+H.h(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.h(t)}return s}}
P.ei.prototype={
gaA:function(){return"RangeError"},
gaz:function(){H.d(this.a)
if(J.kr(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.h(t)},
gl:function(a){return this.f}}
P.u.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.bL.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aP.prototype={
k:function(a){return"Bad state: "+this.a}}
P.ab.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.h(P.iG(t))+"."}}
P.d5.prototype={
k:function(a){return"Stack Overflow"},
$isb4:1}
P.dE.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hj.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.h(t)}}
P.bw.prototype={
k:function(a){var t,s,r
t=this.a
s=t!=null&&""!==t?"FormatException: "+H.h(t):"FormatException"
r=this.b
if(typeof r!=="string")return s
if(r.length>78)r=C.e.au(r,0,75)+"..."
return s+"\n"+r}}
P.dO.prototype={
k:function(a){return"Expando:"+H.h(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.F(P.jj(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.iP(b,"expando$values")
return s==null?null:H.iP(s,t)},
i:function(a,b,c){var t,s
t=this.b
if(typeof t!=="string")t.set(b,c)
else{s=H.iP(b,"expando$values")
if(s==null){s=new P.q()
H.jH(b,"expando$values",s)}H.jH(s,t,c)}}}
P.p.prototype={$isG:1,
$asG:function(){return[P.T]}}
P.al.prototype={
gl:function(a){var t,s
H.d(!this.$isc)
t=this.gC(this)
for(s=0;t.t();)++s
return s},
p:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.l2("index"))
if(b<0)H.F(P.bH(b,0,null,"index",null))
for(t=this.gC(this),s=0;t.t();){r=t.gu()
if(b===s)return r;++s}throw H.e(P.D(b,this,"index",null,s))},
k:function(a){return P.ls(this,"(",")")}}
P.cO.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.au.prototype={}
P.aM.prototype={
gv:function(a){return P.q.prototype.gv.call(this,this)},
k:function(a){return"null"}}
P.T.prototype={$isG:1,
$asG:function(){return[P.T]}}
P.q.prototype={constructor:P.q,$isq:1,
w:function(a,b){return this===b},
gv:function(a){return H.aN(this)},
k:function(a){return H.f9(this)},
gB:function(a){return new H.av(H.i8(this),null)},
toString:function(){return this.k(this)}}
P.bI.prototype={}
P.w.prototype={$isG:1,
$asG:function(){return[P.w]}}
P.bJ.prototype={
gl:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gX:function(){return this.a}}
W.k.prototype={}
W.ds.prototype={
k:function(a){return String(a)},
$isa:1}
W.dt.prototype={
k:function(a){return String(a)},
$isa:1}
W.Y.prototype={$isq:1}
W.dw.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.Y]},
$isc:1,
$asc:function(){return[W.Y]},
$isr:1,
$asr:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.bZ.prototype={}
W.dx.prototype={$isa:1}
W.c_.prototype={
ck:function(a,b,c){var t=this.dg(a,b,P.md(c,null))
return t},
dg:function(a,b,c){return a.getContext(b,c)}}
W.dz.prototype={
ar:function(a){return P.i3(a.getContextAttributes())}}
W.aD.prototype={$isa:1,
gl:function(a){return a.length}}
W.dC.prototype={$isa:1}
W.B.prototype={$isq:1}
W.bn.prototype={
gl:function(a){return a.length}}
W.dD.prototype={}
W.dF.prototype={
h:function(a,b){return a[b]},
gl:function(a){return a.length}}
W.dG.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
W.aF.prototype={
e9:function(a,b){return a.querySelector(b)},
$isaF:1}
W.c1.prototype={$isa:1}
W.dH.prototype={
k:function(a){return String(a)}}
W.dI.prototype={
gaq:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
W.c2.prototype={
gaq:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
W.c3.prototype={
k:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gU(a))+" x "+H.h(this.gT(a))},
w:function(a,b){var t
if(b==null)return!1
t=J.v(b)
if(!t.$isH)return!1
return a.left===t.gaP(b)&&a.top===t.gaU(b)&&this.gU(a)===t.gU(b)&&this.gT(a)===t.gT(b)},
gv:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gU(a)
q=this.gT(a)
return W.k1(W.aX(W.aX(W.aX(W.aX(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gT:function(a){return a.height},
gaP:function(a){return a.left},
gaU:function(a){return a.top},
gU:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isH:1,
$asH:function(){}}
W.dJ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[P.w]},
$isc:1,
$asc:function(){return[P.w]},
$isr:1,
$asr:function(){return[P.w]},
$isb:1,
$asb:function(){return[P.w]}}
W.dK.prototype={
gl:function(a){return a.length}}
W.c4.prototype={
k:function(a){return a.localName},
$isa:1}
W.j.prototype={$isq:1,$isj:1}
W.f.prototype={
d4:function(a,b,c,d){return a.addEventListener(b,H.b_(c,1),!1)},
$isq:1,
$isf:1}
W.Z.prototype={$isq:1}
W.e6.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.Z]},
$isc:1,
$asc:function(){return[W.Z]},
$isr:1,
$asr:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.e7.prototype={
gl:function(a){return a.length}}
W.ec.prototype={
gl:function(a){return a.length}}
W.a_.prototype={$isq:1}
W.eg.prototype={
gl:function(a){return a.length}}
W.by.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.z]},
$isc:1,
$asc:function(){return[W.z]},
$isr:1,
$asr:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]}}
W.c7.prototype={}
W.c8.prototype={
em:function(a,b,c,d,e,f){return a.open(b,c,d,f,e)},
e7:function(a,b,c){return a.open(b,c)},
E:function(a,b){return a.send(b)}}
W.bz.prototype={}
W.ej.prototype={$isa:1}
W.aJ.prototype={$isq:1,$isj:1,$isaJ:1}
W.ez.prototype={
k:function(a){return String(a)}}
W.eF.prototype={
gl:function(a){return a.length}}
W.eH.prototype={
el:function(a,b,c){return a.send(b,c)},
E:function(a,b){return a.send(b)}}
W.bB.prototype={}
W.a1.prototype={$isq:1}
W.eI.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a1]},
$isc:1,
$asc:function(){return[W.a1]},
$isr:1,
$asr:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.O.prototype={$isq:1,$isj:1,$isO:1}
W.eS.prototype={$isa:1}
W.z.prototype={
k:function(a){var t=a.nodeValue
return t==null?this.cC(a):t},
$isq:1,
$isf:1}
W.cY.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.z]},
$isc:1,
$asc:function(){return[W.z]},
$isr:1,
$asr:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]}}
W.f_.prototype={$isa:1}
W.f2.prototype={
gl:function(a){return a.length}}
W.a2.prototype={$isq:1,
gl:function(a){return a.length}}
W.f4.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]},
$isr:1,
$asr:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.f7.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.f8.prototype={
E:function(a,b){return a.send(b)}}
W.fi.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
W.d1.prototype={
E:function(a,b){return a.send(b)}}
W.fl.prototype={
gl:function(a){return a.length}}
W.fo.prototype={$isa:1}
W.a3.prototype={$isq:1,$isf:1}
W.fp.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]},
$isr:1,
$asr:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.a4.prototype={$isq:1}
W.fr.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]},
$isr:1,
$asr:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.a5.prototype={$isq:1,
gl:function(a){return a.length}}
W.fu.prototype={
h:function(a,b){return this.bo(a,b)},
i:function(a,b,c){this.dn(a,b,c)},
aN:function(a,b){var t,s
for(t=0;!0;++t){s=this.di(a,t)
if(s==null)return
b.$2(s,this.bo(a,s))}},
gl:function(a){return a.length},
bo:function(a,b){return a.getItem(b)},
di:function(a,b){return a.key(b)},
dn:function(a,b,c){return a.setItem(b,c)}}
W.U.prototype={$isq:1}
W.ae.prototype={}
W.a6.prototype={$isq:1,$isf:1}
W.V.prototype={$isq:1,$isf:1}
W.fE.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.V]},
$isc:1,
$asc:function(){return[W.V]},
$isr:1,
$asr:function(){return[W.V]},
$isb:1,
$asb:function(){return[W.V]}}
W.fF.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]},
$isr:1,
$asr:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.fG.prototype={
gl:function(a){return a.length}}
W.a7.prototype={$isq:1}
W.aQ.prototype={$isq:1,$isj:1,$isaQ:1}
W.fK.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]},
$isr:1,
$asr:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.fL.prototype={
gl:function(a){return a.length}}
W.bc.prototype={}
W.fN.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
W.aw.prototype={}
W.fS.prototype={
k:function(a){return String(a)},
$isa:1}
W.fU.prototype={
gl:function(a){return a.length}}
W.fX.prototype={
gl:function(a){return a.length}}
W.fY.prototype={
E:function(a,b){return a.send(b)}}
W.aS.prototype={
gdH:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.u("deltaY is not supported"))},
$isq:1,
$isj:1,
$isO:1,
$isaS:1}
W.bM.prototype={
gdu:function(a){var t,s
t=P.T
s=new P.P(0,$.x,null,[t])
this.de(a)
this.dl(a,W.k5(new W.fZ(new P.hT(s,[t]))))
return s},
dl:function(a,b){return a.requestAnimationFrame(H.b_(b,1))},
de:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.fZ.prototype={
$1:function(a){this.a.am(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.h_.prototype={$isa:1}
W.aT.prototype={$isa:1}
W.h9.prototype={
k:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
w:function(a,b){var t,s,r
if(b==null)return!1
t=J.v(b)
if(!t.$isH)return!1
s=a.left
r=t.gaP(b)
if(s==null?r==null:s===r){s=a.top
r=t.gaU(b)
if(s==null?r==null:s===r){s=a.width
r=t.gU(b)
if(s==null?r==null:s===r){s=a.height
t=t.gT(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gv:function(a){var t,s,r,q
t=J.ai(a.left)
s=J.ai(a.top)
r=J.ai(a.width)
q=J.ai(a.height)
return W.k1(W.aX(W.aX(W.aX(W.aX(0,t),s),r),q))},
$isH:1,
$asH:function(){},
gT:function(a){return a.height},
gaP:function(a){return a.left},
gaU:function(a){return a.top},
gU:function(a){return a.width}}
W.dc.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[P.H]},
$isc:1,
$asc:function(){return[P.H]},
$isr:1,
$asr:function(){return[P.H]},
$isb:1,
$asb:function(){return[P.H]}}
W.hb.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.B]},
$isc:1,
$asc:function(){return[W.B]},
$isr:1,
$asr:function(){return[W.B]},
$isb:1,
$asb:function(){return[W.B]}}
W.hc.prototype={$isa:1}
W.hd.prototype={
gT:function(a){return a.height},
gU:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hx.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]},
$isr:1,
$asr:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.hy.prototype={$isa:1}
W.df.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.z]},
$isc:1,
$asc:function(){return[W.z]},
$isr:1,
$asr:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]}}
W.hQ.prototype={$isa:1}
W.hR.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]},
$isr:1,
$asr:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.hS.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.U]},
$isc:1,
$asc:function(){return[W.U]},
$isr:1,
$asr:function(){return[W.U]},
$isb:1,
$asb:function(){return[W.U]}}
W.hV.prototype={$isa:1}
W.hW.prototype={$isa:1}
W.hg.prototype={
e3:function(a,b,c,d){return W.a8(this.a,this.b,a,!1,H.bk(this,0))}}
W.iU.prototype={}
W.hh.prototype={
dr:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.kt(r,this.c,t,!1)}},
d1:function(a,b,c,d,e){this.dr()}}
W.hi.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.C.prototype={
gC:function(a){return new W.e9(a,this.gl(a),-1,null,[H.az(a,"C",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.e9.prototype={
t:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbq(J.b0(this.a,t))
this.c=t
return!0}this.sbq(null)
this.c=s
return!1},
gu:function(){return this.d},
sbq:function(a){this.d=a}}
W.bo.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.bp.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.bq.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.br.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.bs.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.bt.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.c9.prototype={}
W.ct.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.cf.prototype={$isc:1,
$asc:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]}}
W.cc.prototype={$isc:1,
$asc:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]}}
W.cn.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.co.prototype={$isc:1,
$asc:function(){return[P.w]},
$isb:1,
$asb:function(){return[P.w]}}
W.cp.prototype={$isc:1,
$asc:function(){return[W.U]},
$isb:1,
$asb:function(){return[W.U]}}
W.cq.prototype={$isc:1,
$asc:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.cr.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.ca.prototype={$isc:1,
$asc:function(){return[W.V]},
$isb:1,
$asb:function(){return[W.V]}}
W.ce.prototype={$isc:1,
$asc:function(){return[W.B]},
$isb:1,
$asb:function(){return[W.B]}}
W.cb.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.cg.prototype={$isc:1,
$asc:function(){return[P.H]},
$isb:1,
$asb:function(){return[P.H]}}
W.ci.prototype={$isc:1,
$asc:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]}}
W.cj.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cl.prototype={$isc:1,
$asc:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.cu.prototype={$isc:1,
$asc:function(){return[W.V]},
$isb:1,
$asb:function(){return[W.V]}}
W.cv.prototype={$isc:1,
$asc:function(){return[P.H]},
$isb:1,
$asb:function(){return[P.H]}}
W.cw.prototype={$isc:1,
$asc:function(){return[W.B]},
$isb:1,
$asb:function(){return[W.B]}}
W.cG.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.cH.prototype={$isc:1,
$asc:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.cF.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cK.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cL.prototype={$isc:1,
$asc:function(){return[P.w]},
$isb:1,
$asb:function(){return[P.w]}}
W.cM.prototype={$isc:1,
$asc:function(){return[W.U]},
$isb:1,
$asb:function(){return[W.U]}}
W.cN.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cx.prototype={$isc:1,
$asc:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]}}
W.cy.prototype={$isc:1,
$asc:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]}}
W.cA.prototype={$isc:1,
$asc:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]}}
W.cI.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.cJ.prototype={$isc:1,
$asc:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
P.h0.prototype={
bV:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}C.a.j(t,a)
C.a.j(this.b,null)
return s},
aV:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.aE(s,!0)
r.cM(s,!0)
return r}if(a instanceof RegExp)throw H.e(new P.bL("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.me(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.bV(a)
r=this.b
o=r[p]
t.a=o
if(o!=null)return o
o=P.N()
t.a=o
r[p]=o
this.dT(a,new P.h2(t,this))
return t.a}if(a instanceof Array){p=this.bV(a)
r=this.b
o=r[p]
if(o!=null)return o
n=J.a9(a)
m=n.gl(a)
o=this.c?new Array(m):a
r[p]=o
for(r=J.bj(o),l=0;C.b.ag(l,m);++l)r.i(o,l,this.aV(n.h(a,l)))
return o}return a}}
P.h2.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.aV(b)
J.ks(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.i0.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.w,,]}}}
P.h1.prototype={
dT:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.i1.prototype={
$1:function(a){return this.a.am(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.i2.prototype={
$1:function(a){return this.a.dC(a)},
$S:function(){return{func:1,args:[,]}}}
P.hI.prototype={}
P.H.prototype={$asH:null}
P.dr.prototype={$isa:1}
P.aC.prototype={$isa:1}
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
P.dZ.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e_.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e0.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e1.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
P.e2.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e3.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
P.e4.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e5.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e8.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eb.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ac.prototype={}
P.at.prototype={$isa:1}
P.eh.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.am.prototype={$isq:1}
P.et.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return this.S(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
S:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.am]},
$isb:1,
$asb:function(){return[P.am]}}
P.eC.prototype={$isa:1}
P.eD.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.an.prototype={$isq:1}
P.eU.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return this.S(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
S:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.an]},
$isb:1,
$asb:function(){return[P.an]}}
P.f0.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f5.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f6.prototype={
gl:function(a){return a.length}}
P.fb.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fc.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fk.prototype={$isa:1}
P.fz.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return this.S(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
S:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.w]},
$isb:1,
$asb:function(){return[P.w]}}
P.I.prototype={$isa:1}
P.fA.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fB.prototype={$isa:1}
P.d6.prototype={}
P.fD.prototype={$isa:1}
P.bK.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ao.prototype={$isq:1}
P.fM.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return this.S(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
S:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ao]},
$isb:1,
$asb:function(){return[P.ao]}}
P.fT.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fV.prototype={$isa:1}
P.fW.prototype={$isa:1}
P.bN.prototype={$isa:1}
P.hN.prototype={$isa:1}
P.hO.prototype={$isa:1}
P.hP.prototype={$isa:1}
P.cm.prototype={$isc:1,
$asc:function(){return[P.w]},
$isb:1,
$asb:function(){return[P.w]}}
P.cd.prototype={$isc:1,
$asc:function(){return[P.am]},
$isb:1,
$asb:function(){return[P.am]}}
P.ch.prototype={$isc:1,
$asc:function(){return[P.an]},
$isb:1,
$asb:function(){return[P.an]}}
P.ck.prototype={$isc:1,
$asc:function(){return[P.ao]},
$isb:1,
$asb:function(){return[P.ao]}}
P.cz.prototype={$isc:1,
$asc:function(){return[P.ao]},
$isb:1,
$asb:function(){return[P.ao]}}
P.cB.prototype={$isc:1,
$asc:function(){return[P.w]},
$isb:1,
$asb:function(){return[P.w]}}
P.cC.prototype={$isc:1,
$asc:function(){return[P.an]},
$isb:1,
$asb:function(){return[P.an]}}
P.cD.prototype={$isc:1,
$asc:function(){return[P.am]},
$isb:1,
$asb:function(){return[P.am]}}
P.dv.prototype={
gl:function(a){return a.length}}
P.fg.prototype={
by:function(a,b){return a.activeTexture(b)},
bA:function(a,b,c){return a.attachShader(b,c)},
bB:function(a,b,c){return a.bindBuffer(b,c)},
bC:function(a,b,c){return a.bindFramebuffer(b,c)},
bD:function(a,b,c){return a.bindTexture(b,c)},
bE:function(a,b){return a.blendEquation(b)},
bF:function(a,b,c){return a.blendFunc(b,c)},
bG:function(a,b,c,d){return a.bufferData(b,c,d)},
bH:function(a,b){return a.clear(b)},
bI:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bK:function(a,b){return a.compileShader(b)},
bL:function(a){return a.createBuffer()},
bM:function(a){return a.createProgram()},
bN:function(a,b){return a.createShader(b)},
bP:function(a,b){return a.depthMask(b)},
bQ:function(a,b){return a.disable(b)},
bR:function(a,b,c,d){return a.drawArrays(b,c,d)},
bS:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bT:function(a,b){return a.enable(b)},
bU:function(a,b){return a.enableVertexAttribArray(b)},
ar:function(a){return P.i3(a.getContextAttributes())},
aW:function(a,b){return a.getProgramInfoLog(b)},
aX:function(a,b,c){return a.getProgramParameter(b,c)},
aY:function(a,b){return a.getShaderInfoLog(b)},
aZ:function(a,b,c){return a.getShaderParameter(b,c)},
b_:function(a,b,c){return a.getUniformLocation(b,c)},
bW:function(a,b){return a.linkProgram(b)},
b1:function(a,b,c){return a.shaderSource(b,c)},
b2:function(a,b,c,d){return a.stencilFunc(b,c,d)},
c2:function(a,b,c){return a.uniform1f(b,c)},
c3:function(a,b,c){return a.uniform1fv(b,c)},
c4:function(a,b,c){return a.uniform1i(b,c)},
c5:function(a,b,c){return a.uniform1iv(b,c)},
c6:function(a,b,c){return a.uniform2fv(b,c)},
c7:function(a,b,c){return a.uniform3fv(b,c)},
c8:function(a,b,c){return a.uniform4fv(b,c)},
c9:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ca:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cc:function(a,b){return a.useProgram(b)},
ce:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cf:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fh.prototype={
dv:function(a,b){return a.beginTransformFeedback(b)},
dA:function(a,b){return a.bindVertexArray(b)},
dG:function(a){return a.createVertexArray()},
dN:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dO:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dQ:function(a){return a.endTransformFeedback()},
eh:function(a,b,c,d){this.dq(a,b,c,d)
return},
dq:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
ej:function(a,b,c){return a.vertexAttribDivisor(b,c)},
by:function(a,b){return a.activeTexture(b)},
bA:function(a,b,c){return a.attachShader(b,c)},
bB:function(a,b,c){return a.bindBuffer(b,c)},
bC:function(a,b,c){return a.bindFramebuffer(b,c)},
bD:function(a,b,c){return a.bindTexture(b,c)},
bE:function(a,b){return a.blendEquation(b)},
bF:function(a,b,c){return a.blendFunc(b,c)},
bG:function(a,b,c,d){return a.bufferData(b,c,d)},
bH:function(a,b){return a.clear(b)},
bI:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bK:function(a,b){return a.compileShader(b)},
bL:function(a){return a.createBuffer()},
bM:function(a){return a.createProgram()},
bN:function(a,b){return a.createShader(b)},
bP:function(a,b){return a.depthMask(b)},
bQ:function(a,b){return a.disable(b)},
bR:function(a,b,c,d){return a.drawArrays(b,c,d)},
bS:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bT:function(a,b){return a.enable(b)},
bU:function(a,b){return a.enableVertexAttribArray(b)},
ar:function(a){return P.i3(a.getContextAttributes())},
aW:function(a,b){return a.getProgramInfoLog(b)},
aX:function(a,b,c){return a.getProgramParameter(b,c)},
aY:function(a,b){return a.getShaderInfoLog(b)},
aZ:function(a,b,c){return a.getShaderParameter(b,c)},
b_:function(a,b,c){return a.getUniformLocation(b,c)},
bW:function(a,b){return a.linkProgram(b)},
b1:function(a,b,c){return a.shaderSource(b,c)},
b2:function(a,b,c,d){return a.stencilFunc(b,c,d)},
c2:function(a,b,c){return a.uniform1f(b,c)},
c3:function(a,b,c){return a.uniform1fv(b,c)},
c4:function(a,b,c){return a.uniform1i(b,c)},
c5:function(a,b,c){return a.uniform1iv(b,c)},
c6:function(a,b,c){return a.uniform2fv(b,c)},
c7:function(a,b,c){return a.uniform3fv(b,c)},
c8:function(a,b,c){return a.uniform4fv(b,c)},
c9:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ca:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cc:function(a,b){return a.useProgram(b)},
ce:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cf:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.hU.prototype={$isa:1}
P.fs.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return P.i3(this.dh(a,b))},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
dh:function(a,b){return a.item(b)},
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
B.ir.prototype={
$1:function(a){$.$get$i4().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aJ]}}}
B.is.prototype={
$1:function(a){$.$get$i4().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aJ]}}}
B.it.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.mb=t
$.mc=C.b.a0(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.j3=s-C.b.I(window.innerWidth,2)
$.kk=-(t-C.b.I(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.O]}}}
B.iu.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bW=t-C.b.I(window.innerWidth,2)
$.bX=-(s-C.b.I(window.innerHeight,2))
if(a.button===2)$.$get$bV().i(0,"right",!0)
else $.$get$bV().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.O]}}}
B.iv.prototype={
$1:function(a){if(a.button===2)$.$get$bV().i(0,"right",null)
else $.$get$bV().i(0,"left",null)},
$S:function(){return{func:1,args:[W.O]}}}
B.eV.prototype={
cV:function(a,b,c,d){var t
d.toString
W.a8(d,W.mk().$1(d),new B.eW(this),!1,W.aS)
W.a8(d,"mousemove",new B.eX(this),!1,W.O)
t=W.aQ
W.a8(d,"touchstart",new B.eY(),!1,t)
W.a8(d,"touchmove",new B.eZ(this),!1,t)
B.my(null)}}
B.eW.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.R.gdH(a)*r.k3
if(C.c.a0(r.fy,t)>0)r.fy=H.W(C.c.a0(r.fy,t))}catch(q){s=H.ag(q)
P.aa(s)}},
$S:function(){return{func:1,args:[W.aS]}}}
B.eX.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.W(t.go+C.b.a0($.j3,$.bW)*0.01)
s=t.id
r=$.bX
q=$.kk
t.id=H.W(s+(r-q)*0.01)
$.bW=$.j3
$.bX=q}},
$S:function(){return{func:1,args:[W.O]}}}
B.eY.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.Z(t.clientX)
C.c.Z(t.clientY)
$.bW=s
C.c.Z(t.clientX)
$.bX=C.c.Z(t.clientY)},
$S:function(){return{func:1,args:[W.aQ]}}}
B.eZ.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.Z(t.clientX)
t=C.c.Z(t.clientY)
r=this.a
r.go=H.W(r.go+C.b.a0(s,$.bW)*0.01)
r.id=H.W(r.id+($.bX-t)*0.01)
$.bW=s
$.bX=t},
$S:function(){return{func:1,args:[W.aQ]}}}
G.eJ.prototype={}
G.d9.prototype={
ai:function(a,b){var t=this.d
if(H.ay(!t.D(0,a)))H.aY("uniform "+a+" already set")
t.i(0,a,b)},
b7:function(){return this.d},
k:function(a){var t,s,r,q
t=H.M(["{"+new H.av(H.i8(this),null).k(0)+"}["+this.a+"]"],[P.w])
for(s=this.d,r=s.gM(s),r=r.gC(r);r.t();){q=r.gu()
C.a.j(t,H.h(q)+": "+H.h(s.h(0,q)))}return C.a.ab(t,"\n")}}
G.dy.prototype={}
G.dB.prototype={
dP:function(a,b,c){J.ja(this.a,b)
if(c>0)J.l0(this.a,b,c)}}
G.ed.prototype={}
G.bu.prototype={}
G.bv.prototype={}
G.bx.prototype={
ah:function(a){var t=this.e
H.d(!t.D(0,a))
H.d(C.e.cz(a,"a"))
switch($.$get$S().h(0,a).a){case"vec2":t.i(0,a,H.M([],[T.t]))
break
case"vec3":t.i(0,a,H.M([],[T.m]))
break
case"vec4":t.i(0,a,H.M([],[T.ax]))
break
case"float":t.i(0,a,H.M([],[P.L]))
break
case"uvec4":t.i(0,a,H.M([],[[P.b,P.p]]))
break
default:if(H.ay(!1))H.aY("unknown type for "+a)}},
cH:function(a){var t,s,r
H.d(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.j(s,new G.bv(t,t+1,t+2,t+3))},
b4:function(a){var t,s,r,q,p
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.E)(a),++r){q=a[r]
p=new T.m(new Float32Array(3))
p.A(q)
C.a.j(s,p)}},
cJ:function(a){var t,s,r,q,p,o
H.d(a.length===3)
t=this.d
s=t.length
C.a.j(this.b,new G.bu(s,s+1,s+2))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.E)(a),++q){p=a[q]
o=new T.m(new Float32Array(3))
o.A(p)
C.a.j(t,o)}},
aw:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.E)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.j(t,new T.t(o))}},
cG:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.E)(b),++q){p=b[q]
o=new T.m(new Float32Array(3))
o.A(p)
r.j(t,o)}},
cK:function(a){var t,s,r,q,p,o
H.d(a.length===4)
t=this.d
s=t.length
C.a.j(this.c,new G.bv(s,s+1,s+2,s+3))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.E)(a),++q){p=a[q]
o=new T.m(new Float32Array(3))
o.A(p)
C.a.j(t,o)}},
cQ:function(){var t,s,r,q,p,o,n,m,l,k
t=this.b
H.d(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.M(r,[P.p])
for(r=t.length,p=0,o=0;n=t.length,o<n;n===r||(0,H.E)(t),++o){m=t[o]
q[p]=m.a
q[p+1]=m.b
q[p+2]=m.c
p+=3}for(t=s.length,o=0;r=s.length,o<r;r===t||(0,H.E)(s),++o){l=s[o]
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
cR:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.d
s=new Array(t.length)
s.fixed$length=Array
r=H.M(s,[T.m])
q=new T.m(new Float32Array(H.l(3)))
p=new T.m(new Float32Array(H.l(3)))
for(s=this.b,o=s.length,n=0;n<s.length;s.length===o||(0,H.E)(s),++n){m=s[n]
l=m.a
k=m.b
j=m.c
G.jC(t[l],t[k],t[j],q,p)
i=new T.m(new Float32Array(3))
i.A(p)
r[l]=i
l=new T.m(new Float32Array(3))
l.A(p)
r[k]=l
l=new T.m(new Float32Array(3))
l.A(p)
r[j]=l}for(s=this.c,o=s.length,n=0;n<s.length;s.length===o||(0,H.E)(s),++n){h=s[n]
l=h.a
k=h.b
j=h.c
G.jC(t[l],t[k],t[j],q,p)
i=new T.m(new Float32Array(3))
i.A(p)
r[l]=i
l=new T.m(new Float32Array(3))
l.A(p)
r[k]=l
l=new T.m(new Float32Array(3))
l.A(p)
r[j]=l
l=new T.m(new Float32Array(3))
l.A(p)
r[h.d]=l}this.e.i(0,"aNormal",r)},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gM(s),r=r.gC(r);r.t();){q=r.gu()
p=$.$get$S().h(0,q).a
C.a.j(t,H.h(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.ab(t," ")}}
G.d8.prototype={}
G.d7.prototype={}
G.eE.prototype={}
G.eG.prototype={
b5:function(a,b,c){var t,s
if(C.e.a2(a,0)===105){if(H.ay(C.b.av(b.length,c)===this.z))H.aY("ChangeAttribute "+this.z)}else H.d(C.b.av(b.length,c)===(this.ch.length/3|0))
this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dl(t.a,34962,s)
J.j9(t.a,34962,b,35048)},
cS:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a1:function(a,b,c){var t,s,r,q,p,o
t=J.j5(a,0)===105
if(t&&this.z===0)this.z=C.b.av(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.iz(r.a))
this.b5(a,b,c)
q=$.$get$S().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.ay(p.D(0,a)))H.aY("unexpected attribute "+a)
o=p.h(0,a)
J.dm(r.a,this.e)
r.dP(0,o,t?1:0)
s=s.h(0,a)
p=q.b6()
J.dl(r.a,34962,s)
J.ji(r.a,o,p,5126,!1,0,0)},
k:function(a){var t,s,r
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,t=t.gM(t),t=t.gC(t);t.t();){r=t.gu()
C.a.j(s,H.h(r)+":"+this.cy.h(0,r).length)}return"MESH["+this.a+"] "+C.a.ab(s,"  ")},
saB:function(a){this.cx=a}}
G.f1.prototype={
cL:function(a,b){var t=C.b.ci(a,b)
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
t.a_(0,0,1/(p*s))
t.a_(1,1,1/p)
t.a_(2,2,(q+r)/o)
t.a_(3,2,-1)
t.a_(2,3,2*r*q/o)},
b7:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.m(new Float32Array(H.l(3)))
o.q(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.A(t)
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
k=r?s.gaq(n):1
if(!!s.$ism){j=s.gm(n)
m=s.gn(n)
l=s.gJ(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gJ(n)
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
a3.A(this.db)
a3.bZ(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.ff.prototype={
cZ:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gl(t)===s.gl(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gM(s),s=s.gC(s);s.t();){q=s.gu()
if(!t.D(0,q))C.a.j(r,q)}for(t=this.x,s=new P.bO(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.t();){q=s.d
if(!t.Y(0,q))C.a.j(r,q)}return r},
d_:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gM(b),s=s.gC(s),r=this.d,q=this.y,p=this.z,o=0;s.t();){n=s.gu()
switch(J.j5(n,0)){case 117:if(q.D(0,n)){m=b.h(0,n)
if(p.D(0,n))H.bl("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$S().h(0,n)
if(l==null)H.F("unknown "+n)
H.d(q.D(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.iD(r.a,k,m)
else if(!!J.v(m).$isju)J.kZ(r.a,k,m)
break
case"float":if(l.c===0)J.kX(r.a,k,m)
else if(!!J.v(m).$isea)J.kY(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aA(m,"$isa0").a
J.jh(r.a,k,!1,j)}else if(!!J.v(m).$isea)J.jh(r.a,k,!1,m)
else if(H.ay(!1))H.aY("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.aA(m,"$isb8").a
J.jg(r.a,k,!1,j)}else if(!!J.v(m).$isea)J.jg(r.a,k,!1,m)
else if(H.ay(!1))H.aY("bad unform: "+n)
break
case"vec4":if(l.c===0){j=H.aA(m,"$isax").a
J.jf(r.a,k,j)}else J.jf(r.a,k,m)
break
case"vec3":if(l.c===0){j=H.aA(m,"$ism").a
J.je(r.a,k,j)}else J.je(r.a,k,m)
break
case"vec2":if(l.c===0){j=H.aA(m,"$ist").a
J.jd(r.a,k,j)}else J.jd(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.V(33984,this.ch)
J.j6(r.a,j)
j=H.aA(m,"$islM").cT()
J.j8(r.a,3553,j)
j=this.ch
J.iD(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.V(33984,this.ch)
J.j6(r.a,j)
j=H.aA(m,"$islM").cT()
J.j8(r.a,34067,j)
j=this.ch
J.iD(r.a,k,j)
this.ch=this.ch+1
break
default:H.bl("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":if(J.A(m,!0))J.dn(r.a,2929)
else J.iA(r.a,2929)
break
case"cStencilFunc":H.aA(m,"$isd8")
j=m.a
if(j===1281)J.iA(r.a,2960)
else{J.dn(r.a,2960)
i=m.b
h=m.c
J.kU(r.a,j,i,h)}break
case"cDepthWrite":J.kD(r.a,m)
break
case"cBlendEquation":H.aA(m,"$isd7")
j=m.a
if(j===1281)J.iA(r.a,3042)
else{J.dn(r.a,3042)
i=m.b
h=m.c
J.kx(r.a,i,h)
J.kw(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.as(1000*(s-new P.aE(t,!1).a)).k(0)},
cP:function(a,b,c){var t,s,r,q,p,o,n,m,l
Date.now()
t=this.d
s=this.r
J.l_(t.a,s)
this.ch=0
this.z.P(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.E)(b),++r){q=b[r]
this.d_(q.a,q.b7())}s=this.Q
s.P(0)
for(p=a.cy,p=p.gM(p),p=p.gC(p);p.t();)s.j(0,p.gu())
o=this.cZ()
if(o.length!==0)P.aa("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.h(o)))
J.dm(a.d.a,a.e)
n=this.e.f.length>0
s=a.f
p=a.cS()
m=a.Q
l=a.z
t.toString
if(n)J.ku(t.a,s)
if(m!==-1)if(l>1)J.kH(t.a,s,p,m,0,l)
else J.kG(t.a,s,p,m,0)
else if(l>1)J.kF(t.a,s,0,p,l)
else J.kE(t.a,s,0,p)
if(n)J.kJ(t.a)},
cW:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.e
r=s.b
q=this.f
p=q.b
o=s.f
n=J.kB(t.a)
m=G.k_(t.a,35633,r)
J.j7(t.a,n,m)
l=G.k_(t.a,35632,p)
J.j7(t.a,n,l)
if(o.length>0)J.kV(t.a,n,o,35980)
J.kQ(t.a,n)
if(!J.kP(t.a,n,35714))H.F(J.kO(t.a,n))
this.r=n
this.sd5(0,P.lw(s.c,null))
for(s=s.d,r=s.length,p=this.y,k=0;k<s.length;s.length===r||(0,H.E)(s),++k){j=s[k]
o=this.r
p.i(0,j,J.jc(t.a,o,j))}for(s=q.d,r=s.length,k=0;k<s.length;s.length===r||(0,H.E)(s),++k){j=s[k]
q=this.r
p.i(0,j,J.jc(t.a,q,j))}},
sd5:function(a,b){this.x=b}}
G.i.prototype={
b6:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.d3.prototype={
cF:function(a){var t,s,r,q
H.d(this.b==null)
for(t=this.c,s=this.x,r=0;r<2;++r){q=a[r]
H.d($.$get$S().D(0,q))
H.d(!C.a.Y(t,q))
C.a.j(t,q)
s.i(0,q,this.r);++this.r}C.a.as(t)},
cI:function(a){var t,s,r
H.d(this.b==null)
for(t=this.d,s=0;s<2;++s){r=a[s]
if(H.ay($.$get$S().D(0,r)))H.aY("missing uniform "+r)
H.d(!C.a.Y(t,r))
C.a.j(t,r)}C.a.as(t)},
b3:function(a){var t,s,r
H.d(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.d($.$get$S().D(0,r))
H.d(!C.a.Y(t,r))
C.a.j(t,r)}C.a.as(t)},
cX:function(a,b){H.d(this.b==null)
this.b=this.d0(!0,a,b)},
b8:function(a){return this.cX(a,null)},
d0:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.E)(t),++o){n=t[o]
m=$.$get$S().h(0,n)
C.a.j(q,"layout (location="+H.h(p.h(0,n))+") in "+m.a+" "+H.h(n)+";")}C.a.j(q,"")
l=r?"in":"out"
if(r)C.a.j(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.E)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
C.a.j(q,l+" "+m.a+" "+H.h(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.E)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
C.a.j(q,l+" "+m.a+" "+H.h(k)+";")}C.a.j(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.E)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.j(q,"uniform "+m.a+" "+H.h(k)+j+";")}C.a.j(q,"")
C.a.j(q,"void main(void) {")
C.a.ds(q,b)
C.a.j(q,"}")
return C.a.ab(q,"\n")}}
G.fq.prototype={
cu:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
A.eT.prototype={
k:function(a){return"NODE["+this.a+"]"}}
A.d2.prototype={}
A.fe.prototype={
cO:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.kv(p.a,36160,t)
H.d(r>0&&q>0)
J.l1(p.a,this.x,this.y,r,q)
if(s!==0)J.ky(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.E)(t),++o){n=t[o]
m=n.e
C.a.j(m,new G.d9(P.N(),"transforms",!1,!0))
l=new T.a0(new Float32Array(16))
l.W()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.E)(r),++k)A.kb(p,r[k],l,a,m)
m.pop()}},
cN:function(){return this.cO(null)}}
D.ey.prototype={
$1:function(a){this.a.am(0,W.lZ(this.b.response))},
$S:function(){return{func:1,args:[,]}}}
A.i9.prototype={
$2:function(a,b){var t=536870911&a+J.ai(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.p,P.q]}}}
T.b8.prototype={
A:function(a){var t,s
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
k:function(a){return"[0] "+this.N(0).k(0)+"\n[1] "+this.N(1).k(0)+"\n[2] "+this.N(2).k(0)+"\n"},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.b8){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gv:function(a){return A.di(this.a)},
N:function(a){var t,s
t=new Float32Array(H.l(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.m(t)},
dF:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g===0){this.A(a)
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
T.a0.prototype={
a_:function(a,b,c){H.d(a<4)
H.d(b<4)
this.a[b*4+a]=c},
A:function(a){var t,s
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
k:function(a){return"[0] "+this.N(0).k(0)+"\n[1] "+this.N(1).k(0)+"\n[2] "+this.N(2).k(0)+"\n[3] "+this.N(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.a0){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gv:function(a){return A.di(this.a)},
N:function(a){var t,s
t=new Float32Array(H.l(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.ax(t)},
W:function(){var t=this.a
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
bZ:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
k:function(a){var t=this.a
return"["+H.h(t[0])+","+H.h(t[1])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.t){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gv:function(a){return A.di(this.a)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
gl:function(a){var t,s
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
A:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.h(t[0])+","+H.h(t[1])+","+H.h(t[2])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.m){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gv:function(a){return A.di(this.a)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
gl:function(a){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return Math.sqrt(s*s+r*r+t*t)},
aQ:function(a){var t,s,r,q,p
t=this.a
s=t[0]
r=t[1]
q=t[2]
q=Math.sqrt(s*s+r*r+q*q)
if(q===0)return 0
p=1/q
t[0]=t[0]*p
t[1]=t[1]*p
t[2]=t[2]*p
return q},
aM:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
bO:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.m(new Float32Array(H.l(3)))
t.q(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
at:function(a){var t,s
t=a.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
cl:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gJ:function(a){return this.a[2]}}
T.ax.prototype={
k:function(a){var t=this.a
return H.h(t[0])+","+H.h(t[1])+","+H.h(t[2])+","+H.h(t[3])},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ax){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gv:function(a){return A.di(this.a)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
gl:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gJ:function(a){return this.a[2]},
gaq:function(a){return this.a[3]}}
N.io.prototype={
$1:function(a){var t,s,r
t=this.a
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.aa("size change "+H.h(s)+" "+H.h(r))
this.b.cL(s,r)
t=this.c
t.z=s
t.Q=r},
$S:function(){return{func:1,v:true,args:[W.j]}}}
N.il.prototype={
$1:function(b2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
this.a.a=b2+0
t=this.b
t.go=H.W(t.go+0.001)
s=t.k4
if(s.h(0,37)!=null)t.go=H.W(t.go+0.03)
else if(s.h(0,39)!=null)t.go=H.W(t.go-0.03)
if(s.h(0,38)!=null)t.id=H.W(t.id+0.03)
else if(s.h(0,40)!=null)t.id=H.W(t.id-0.03)
if(s.h(0,33)!=null)t.fy=H.W(t.fy*0.99)
else if(s.h(0,34)!=null)t.fy=H.W(t.fy*1.01)
if(s.h(0,32)!=null){t.go=0
t.id=0}s=H.W(C.c.dB(t.id,-1.4707963267948965,1.4707963267948965))
t.id=s
r=t.fy
q=t.go
p=r*Math.cos(s)
t.cu(p*Math.cos(q),r*Math.sin(s),p*Math.sin(q))
q=t.k2
s=t.d.a
r=q.a
s[12]=s[12]+r[0]
s[13]=s[13]+r[1]
s[14]=s[14]+r[2]
r=s[12]
o=s[13]
n=s[14]
m=new T.m(new Float32Array(H.l(3)))
m.q(0,1,0)
l=t.e
k=l.a
k[0]=s[12]
k[1]=s[13]
k[2]=s[14]
k=new Float32Array(H.l(3))
j=new T.m(k)
j.A(l)
j.at(q)
j.aQ(0)
i=m.bO(j)
i.aQ(0)
h=j.bO(i)
h.aQ(0)
q=i.aM(l)
g=h.aM(l)
l=j.aM(l)
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
n=t.f.a
n[0]=s[2]
n[1]=s[6]
n[2]=s[10]
t=-t.k1
o=n[0]
r=n[1]
e=n[2]
e=Math.sqrt(o*o+r*r+e*e)
i=n[0]/e
h=n[1]/e
j=n[2]/e
e=Math.cos(t)
t=Math.sin(t)
a2=1-e
a3=i*i*a2+e
n=j*t
a4=i*h*a2-n
r=h*t
a5=i*j*a2+r
a6=h*i*a2+n
a7=h*h*a2+e
t=i*t
a8=h*j*a2-t
a9=j*i*a2-r
b0=j*h*a2+t
b1=j*j*a2+e
e=s[0]
t=s[4]
r=s[8]
n=s[1]
o=s[5]
c=s[9]
b=s[2]
a=s[6]
a0=s[10]
a1=s[3]
f=s[7]
d=s[11]
s[0]=e*a3+t*a6+r*a9
s[1]=n*a3+o*a6+c*a9
s[2]=b*a3+a*a6+a0*a9
s[3]=a1*a3+f*a6+d*a9
s[4]=e*a4+t*a7+r*b0
s[5]=n*a4+o*a7+c*b0
s[6]=b*a4+a*a7+a0*b0
s[7]=a1*a4+f*a7+d*b0
s[8]=e*a5+t*a8+r*b1
s[9]=n*a5+o*a8+c*b1
s[10]=b*a5+a*a8+a0*b1
s[11]=a1*a5+f*a8+d*b1
this.c.cN()
C.S.gdu(window).aS(this)},
$S:function(){return{func:1,v:true,args:[P.T]}}}
N.im.prototype={
$1:function(a9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
t=Y.ll(J.b0(a9,0))
s=[t,B.la(1,1,2,16,!1),B.l9(!1,1,0,1,0,1,1,1)]
for(r=this.a,q=r.f,p=this.c,r=r.d,o=r.d,r=r.e.x,n=0;n<3;++n){s[n].cR()
m=s[n]
l=P.N()
k=J.kC(o.a)
j=new G.eG(o,k,4,l,r,null,0,-1,null,null,P.N(),"meshdata:",!1,!0)
i=G.jt(m.d,null)
l.i(0,"aPosition",J.iz(o.a))
j.ch=i
j.b5("aPosition",i,3)
h=$.$get$S().h(0,"aPosition")
if(h==null)H.F("Unknown canonical aPosition")
H.d(r.D(0,"aPosition"))
g=r.h(0,"aPosition")
J.dm(o.a,k)
J.ja(o.a,g)
l=l.h(0,"aPosition")
i=h.b6()
J.dl(o.a,34962,l)
J.ji(o.a,g,i,5126,!1,0,0)
l=m.cQ()
j.y=J.iz(o.a)
H.d(j.ch!=null)
i=j.ch.length
if(i<768){j.saB(new Uint8Array(H.hY(l)))
j.Q=5121}else if(i<196608){j.saB(new Uint16Array(H.hY(l)))
j.Q=5123}else{j.saB(new Uint32Array(H.hY(l)))
j.Q=5125}J.dm(o.a,k)
l=j.y
k=j.cx
o.toString
i=J.v(k)
H.d(!!i.$isjX||!!i.$isjY||!!i.$isjZ)
J.dl(o.a,34963,l)
J.j9(o.a,34963,k,35048)
G.lU(m,j)
m=new Float32Array(9)
l=new T.a0(new Float32Array(16))
l.W()
k=new Float32Array(16)
i=new T.a0(k)
i.W()
f=new Float32Array(3)
e=new Float32Array(3)
d=new Float32Array(3)
c=new Float32Array(3)
k[12]=-5+n*7
k[13]=4
k[14]=0
if(s[n]===t){b=Math.cos(1.57)
a=Math.sin(1.57)
a0=k[4]
a1=k[8]
a2=k[5]
a3=k[9]
a4=k[6]
a5=k[10]
a6=k[7]
a7=k[11]
a8=-a
k[4]=a0*b+a1*a
k[5]=a2*b+a3*a
k[6]=a4*b+a5*a
k[7]=a6*b+a7*a
k[8]=a0*a8+a1*b
k[9]=a2*a8+a3*b
k[10]=a4*a8+a5*b
k[11]=a6*a8+a7*b
b=Math.cos(3.14)
a7=Math.sin(3.14)
a8=k[0]
a6=k[4]
a5=k[1]
a4=k[5]
a3=k[2]
a2=k[6]
a1=k[3]
a0=k[7]
a=-a7
k[0]=a8*b+a6*a7
k[1]=a5*b+a4*a7
k[2]=a3*b+a2*a7
k[3]=a1*b+a0*a7
k[4]=a8*a+a6*b
k[5]=a5*a+a4*b
k[6]=a3*a+a2*b
k[7]=a1*a+a0*b}H.d(!0)
C.a.j(q,new A.eT(p,j,[],new T.b8(m),l,i,new T.m(f),new T.m(e),new T.m(d),new T.m(c),"meshdata:",!1,!0))}this.b.$1(0)},
$S:function(){return{func:1,args:[P.b]}}}
J.a.prototype.cC=J.a.prototype.k
J.bA.prototype.cD=J.bA.prototype.k;(function installTearOffs(){installTearOff(H.aV.prototype,"ge2",0,0,0,null,["$0"],["ao"],0)
installTearOff(H.af.prototype,"gcm",0,0,0,null,["$1"],["H"],2)
installTearOff(H.aU.prototype,"gdJ",0,0,0,null,["$1"],["R"],2)
installTearOff(P,"m7",1,0,0,null,["$1"],["lR"],1)
installTearOff(P,"m8",1,0,0,null,["$1"],["lS"],1)
installTearOff(P,"m9",1,0,0,null,["$1"],["lT"],1)
installTearOff(P,"k9",1,0,0,null,["$0"],["m5"],0)
installTearOff(P.P.prototype,"gd8",0,0,0,null,["$2","$1"],["G","d9"],3)
installTearOff(P,"mf",1,0,0,null,["$2"],["l8"],4)
installTearOff(W,"mk",1,0,0,null,["$1"],["le"],5)
installTearOff(N,"ke",1,0,0,null,["$0"],["ms"],0)})();(function inheritance(){inherit(P.q,null)
var t=P.q
inherit(H.iK,t)
inherit(J.a,t)
inherit(J.du,t)
inherit(P.al,t)
inherit(H.cQ,t)
inherit(P.cO,t)
inherit(H.c6,t)
inherit(H.b3,t)
inherit(H.hF,t)
inherit(H.aV,t)
inherit(H.he,t)
inherit(H.aW,t)
inherit(H.hE,t)
inherit(H.h8,t)
inherit(H.bb,t)
inherit(H.fH,t)
inherit(H.ak,t)
inherit(H.af,t)
inherit(H.aU,t)
inherit(H.fd,t)
inherit(H.fO,t)
inherit(P.b4,t)
inherit(H.dg,t)
inherit(H.av,t)
inherit(H.ad,t)
inherit(H.eu,t)
inherit(H.ew,t)
inherit(H.eq,t)
inherit(H.hG,t)
inherit(P.ha,t)
inherit(P.dd,t)
inherit(P.P,t)
inherit(P.da,t)
inherit(P.fv,t)
inherit(P.fw,t)
inherit(P.b2,t)
inherit(P.hX,t)
inherit(P.fn,t)
inherit(P.hC,t)
inherit(P.bO,t)
inherit(P.y,t)
inherit(P.hD,t)
inherit(P.aZ,t)
inherit(P.G,t)
inherit(P.aE,t)
inherit(P.T,t)
inherit(P.as,t)
inherit(P.d5,t)
inherit(P.hj,t)
inherit(P.bw,t)
inherit(P.dO,t)
inherit(P.b,t)
inherit(P.au,t)
inherit(P.aM,t)
inherit(P.bI,t)
inherit(P.w,t)
inherit(P.bJ,t)
inherit(W.dD,t)
inherit(W.C,t)
inherit(W.e9,t)
inherit(P.h0,t)
inherit(P.hI,t)
inherit(G.eJ,t)
inherit(G.dB,t)
inherit(G.ed,t)
inherit(G.bu,t)
inherit(G.bv,t)
inherit(G.bx,t)
inherit(G.d8,t)
inherit(G.d7,t)
inherit(G.i,t)
inherit(G.d3,t)
inherit(T.b8,t)
inherit(T.a0,t)
inherit(T.t,t)
inherit(T.m,t)
inherit(T.ax,t)
t=J.a
inherit(J.en,t)
inherit(J.ep,t)
inherit(J.bA,t)
inherit(J.aG,t)
inherit(J.b6,t)
inherit(J.aH,t)
inherit(H.bC,t)
inherit(H.b9,t)
inherit(W.f,t)
inherit(W.Y,t)
inherit(W.bZ,t)
inherit(W.dz,t)
inherit(W.B,t)
inherit(W.c9,t)
inherit(W.dF,t)
inherit(W.dG,t)
inherit(W.dH,t)
inherit(W.c2,t)
inherit(W.c3,t)
inherit(W.co,t)
inherit(W.dK,t)
inherit(W.j,t)
inherit(W.cq,t)
inherit(W.a_,t)
inherit(W.eg,t)
inherit(W.cf,t)
inherit(W.ez,t)
inherit(W.eF,t)
inherit(W.a1,t)
inherit(W.cl,t)
inherit(W.eS,t)
inherit(W.cc,t)
inherit(W.f_,t)
inherit(W.bc,t)
inherit(W.a2,t)
inherit(W.ct,t)
inherit(W.ae,t)
inherit(W.a4,t)
inherit(W.cj,t)
inherit(W.a5,t)
inherit(W.fu,t)
inherit(W.U,t)
inherit(W.ca,t)
inherit(W.fG,t)
inherit(W.a7,t)
inherit(W.cn,t)
inherit(W.fL,t)
inherit(W.fS,t)
inherit(W.fX,t)
inherit(W.h9,t)
inherit(W.cg,t)
inherit(W.ce,t)
inherit(W.cb,t)
inherit(W.ci,t)
inherit(W.cr,t)
inherit(W.cp,t)
inherit(W.hV,t)
inherit(W.hW,t)
inherit(P.am,t)
inherit(P.cd,t)
inherit(P.an,t)
inherit(P.ch,t)
inherit(P.f5,t)
inherit(P.f6,t)
inherit(P.fb,t)
inherit(P.cm,t)
inherit(P.ao,t)
inherit(P.ck,t)
inherit(P.fW,t)
inherit(P.dv,t)
inherit(P.fg,t)
inherit(P.fh,t)
inherit(P.hU,t)
inherit(P.cs,t)
t=J.bA
inherit(J.f3,t)
inherit(J.aR,t)
inherit(J.aI,t)
inherit(J.iJ,J.aG)
t=J.b6
inherit(J.cP,t)
inherit(J.eo,t)
t=P.al
inherit(H.c,t)
inherit(H.cR,t)
t=H.c
inherit(H.b7,t)
inherit(H.ev,t)
inherit(H.dN,H.cR)
inherit(H.eA,P.cO)
t=H.b7
inherit(H.cS,t)
inherit(P.ex,t)
t=H.b3
inherit(H.iw,t)
inherit(H.ix,t)
inherit(H.hA,t)
inherit(H.hf,t)
inherit(H.ek,t)
inherit(H.el,t)
inherit(H.hH,t)
inherit(H.fI,t)
inherit(H.fJ,t)
inherit(H.iy,t)
inherit(H.ie,t)
inherit(H.ig,t)
inherit(H.ih,t)
inherit(H.ii,t)
inherit(H.ij,t)
inherit(H.fC,t)
inherit(H.er,t)
inherit(H.ia,t)
inherit(H.ib,t)
inherit(H.ic,t)
inherit(P.h5,t)
inherit(P.h4,t)
inherit(P.h6,t)
inherit(P.h7,t)
inherit(P.ef,t)
inherit(P.ee,t)
inherit(P.hk,t)
inherit(P.hs,t)
inherit(P.ho,t)
inherit(P.hp,t)
inherit(P.hq,t)
inherit(P.hm,t)
inherit(P.hr,t)
inherit(P.hl,t)
inherit(P.hv,t)
inherit(P.hw,t)
inherit(P.hu,t)
inherit(P.ht,t)
inherit(P.fx,t)
inherit(P.fy,t)
inherit(P.i_,t)
inherit(P.hL,t)
inherit(P.hK,t)
inherit(P.hM,t)
inherit(P.eB,t)
inherit(P.dL,t)
inherit(P.dM,t)
inherit(W.fZ,t)
inherit(W.hi,t)
inherit(P.h2,t)
inherit(P.i0,t)
inherit(P.i1,t)
inherit(P.i2,t)
inherit(B.ir,t)
inherit(B.is,t)
inherit(B.it,t)
inherit(B.iu,t)
inherit(B.iv,t)
inherit(B.eW,t)
inherit(B.eX,t)
inherit(B.eY,t)
inherit(B.eZ,t)
inherit(D.ey,t)
inherit(A.i9,t)
inherit(N.io,t)
inherit(N.il,t)
inherit(N.im,t)
t=H.h8
inherit(H.be,t)
inherit(H.bQ,t)
t=P.b4
inherit(H.cZ,t)
inherit(H.es,t)
inherit(H.fR,t)
inherit(H.fQ,t)
inherit(H.dA,t)
inherit(H.fj,t)
inherit(P.bY,t)
inherit(P.ba,t)
inherit(P.aj,t)
inherit(P.u,t)
inherit(P.bL,t)
inherit(P.aP,t)
inherit(P.ab,t)
inherit(P.dE,t)
t=H.fC
inherit(H.ft,t)
inherit(H.bm,t)
inherit(H.h3,P.bY)
t=H.b9
inherit(H.eK,t)
inherit(H.cU,t)
t=H.cU
inherit(H.bE,t)
inherit(H.bD,t)
inherit(H.bF,H.bE)
inherit(H.cV,H.bF)
inherit(H.bG,H.bD)
inherit(H.cW,H.bG)
t=H.cV
inherit(H.cT,t)
inherit(H.eL,t)
t=H.cW
inherit(H.eM,t)
inherit(H.eN,t)
inherit(H.eO,t)
inherit(H.eP,t)
inherit(H.eQ,t)
inherit(H.cX,t)
inherit(H.eR,t)
t=P.ha
inherit(P.db,t)
inherit(P.hT,t)
inherit(P.hJ,P.hX)
inherit(P.de,H.ad)
inherit(P.fm,P.fn)
inherit(P.hz,P.fm)
inherit(P.hB,P.hz)
t=P.T
inherit(P.L,t)
inherit(P.p,t)
t=P.aj
inherit(P.d0,t)
inherit(P.ei,t)
t=W.f
inherit(W.z,t)
inherit(W.bp,t)
inherit(W.dC,t)
inherit(W.e7,t)
inherit(W.bz,t)
inherit(W.bB,t)
inherit(W.f8,t)
inherit(W.d1,t)
inherit(W.fo,t)
inherit(W.a3,t)
inherit(W.bq,t)
inherit(W.a6,t)
inherit(W.V,t)
inherit(W.bo,t)
inherit(W.fU,t)
inherit(W.fY,t)
inherit(W.bM,t)
inherit(W.h_,t)
inherit(W.aT,t)
inherit(W.hQ,t)
t=W.z
inherit(W.c4,t)
inherit(W.aD,t)
inherit(W.aF,t)
inherit(W.c1,t)
inherit(W.hc,t)
t=W.c4
inherit(W.k,t)
inherit(P.I,t)
t=W.k
inherit(W.ds,t)
inherit(W.dt,t)
inherit(W.dx,t)
inherit(W.c_,t)
inherit(W.ec,t)
inherit(W.ej,t)
inherit(W.fl,t)
inherit(W.hy,t)
inherit(W.br,W.bp)
inherit(W.dw,W.br)
inherit(W.bn,W.c9)
inherit(W.dI,W.c2)
inherit(W.cL,W.co)
inherit(W.dJ,W.cL)
inherit(W.Z,W.bZ)
inherit(W.cJ,W.cq)
inherit(W.e6,W.cJ)
inherit(W.cy,W.cf)
inherit(W.by,W.cy)
inherit(W.c7,W.aF)
inherit(W.c8,W.bz)
inherit(W.aw,W.j)
t=W.aw
inherit(W.aJ,t)
inherit(W.O,t)
inherit(W.aQ,t)
inherit(W.eH,W.bB)
inherit(W.cH,W.cl)
inherit(W.eI,W.cH)
inherit(W.cA,W.cc)
inherit(W.cY,W.cA)
t=W.bc
inherit(W.f2,t)
inherit(W.fi,t)
inherit(W.fN,t)
inherit(W.cG,W.ct)
inherit(W.f4,W.cG)
inherit(W.f7,W.ae)
inherit(W.bs,W.bq)
inherit(W.fp,W.bs)
inherit(W.cF,W.cj)
inherit(W.fr,W.cF)
inherit(W.cu,W.ca)
inherit(W.fE,W.cu)
inherit(W.bt,W.bo)
inherit(W.fF,W.bt)
inherit(W.cN,W.cn)
inherit(W.fK,W.cN)
inherit(W.aS,W.O)
inherit(W.cv,W.cg)
inherit(W.dc,W.cv)
inherit(W.cw,W.ce)
inherit(W.hb,W.cw)
inherit(W.hd,W.c3)
inherit(W.cI,W.cb)
inherit(W.hx,W.cI)
inherit(W.cx,W.ci)
inherit(W.df,W.cx)
inherit(W.cK,W.cr)
inherit(W.hR,W.cK)
inherit(W.cM,W.cp)
inherit(W.hS,W.cM)
inherit(W.hg,P.fv)
inherit(W.iU,W.hg)
inherit(W.hh,P.fw)
inherit(P.h1,P.h0)
inherit(P.H,P.hI)
t=P.I
inherit(P.at,t)
inherit(P.aC,t)
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
inherit(P.e3,t)
inherit(P.e4,t)
inherit(P.e5,t)
inherit(P.e8,t)
inherit(P.eC,t)
inherit(P.eD,t)
inherit(P.f0,t)
inherit(P.fk,t)
inherit(P.fB,t)
inherit(P.fV,t)
inherit(P.bN,t)
inherit(P.hN,t)
inherit(P.hO,t)
inherit(P.hP,t)
t=P.at
inherit(P.dr,t)
inherit(P.eb,t)
inherit(P.ac,t)
inherit(P.eh,t)
inherit(P.fA,t)
inherit(P.d6,t)
inherit(P.fT,t)
inherit(P.cD,P.cd)
inherit(P.et,P.cD)
inherit(P.cC,P.ch)
inherit(P.eU,P.cC)
inherit(P.fc,P.ac)
inherit(P.cB,P.cm)
inherit(P.fz,P.cB)
t=P.d6
inherit(P.fD,t)
inherit(P.bK,t)
inherit(P.cz,P.ck)
inherit(P.fM,P.cz)
inherit(P.cE,P.cs)
inherit(P.fs,P.cE)
t=G.eJ
inherit(G.fq,t)
inherit(G.d9,t)
inherit(G.eG,t)
inherit(G.ff,t)
inherit(A.d2,t)
inherit(A.fe,t)
t=G.fq
inherit(G.dy,t)
inherit(A.eT,t)
inherit(B.eV,G.dy)
t=G.d9
inherit(G.eE,t)
inherit(G.f1,t)
mixin(H.bD,P.y)
mixin(H.bE,P.y)
mixin(H.bF,H.c6)
mixin(H.bG,H.c6)
mixin(W.bo,P.y)
mixin(W.bp,P.y)
mixin(W.bq,P.y)
mixin(W.br,W.C)
mixin(W.bs,W.C)
mixin(W.bt,W.C)
mixin(W.c9,W.dD)
mixin(W.ct,P.y)
mixin(W.cf,P.y)
mixin(W.cc,P.y)
mixin(W.cn,P.y)
mixin(W.co,P.y)
mixin(W.cp,P.y)
mixin(W.cq,P.y)
mixin(W.cr,P.y)
mixin(W.ca,P.y)
mixin(W.ce,P.y)
mixin(W.cb,P.y)
mixin(W.cg,P.y)
mixin(W.ci,P.y)
mixin(W.cj,P.y)
mixin(W.cl,P.y)
mixin(W.cu,W.C)
mixin(W.cv,W.C)
mixin(W.cw,W.C)
mixin(W.cG,W.C)
mixin(W.cH,W.C)
mixin(W.cF,W.C)
mixin(W.cK,W.C)
mixin(W.cL,W.C)
mixin(W.cM,W.C)
mixin(W.cN,W.C)
mixin(W.cx,W.C)
mixin(W.cy,W.C)
mixin(W.cA,W.C)
mixin(W.cI,W.C)
mixin(W.cJ,W.C)
mixin(P.cm,P.y)
mixin(P.cd,P.y)
mixin(P.ch,P.y)
mixin(P.ck,P.y)
mixin(P.cz,W.C)
mixin(P.cB,W.C)
mixin(P.cC,W.C)
mixin(P.cD,W.C)
mixin(P.cs,P.y)
mixin(P.cE,W.C)})();(function constants(){C.n=W.c_.prototype
C.o=W.c7.prototype
C.j=W.c8.prototype
C.p=J.a.prototype
C.a=J.aG.prototype
C.b=J.cP.prototype
C.c=J.b6.prototype
C.e=J.aH.prototype
C.x=J.aI.prototype
C.f=H.cT.prototype
C.m=J.f3.prototype
C.h=J.aR.prototype
C.R=W.aS.prototype
C.S=W.bM.prototype
C.d=new P.hJ()
C.i=new P.as(0)
C.q=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.r=function(hooks) {
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
C.k=function(hooks) { return hooks; }

C.t=function(getTagFallback) {
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
C.u=function() {
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
C.v=function(hooks) {
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
C.w=function(hooks) {
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
C.l=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.y=makeConstList([])
C.z=H.J("mF")
C.A=H.J("mG")
C.B=H.J("ea")
C.C=H.J("mH")
C.D=H.J("mI")
C.E=H.J("ju")
C.F=H.J("mJ")
C.G=H.J("jx")
C.H=H.J("aM")
C.I=H.J("w")
C.J=H.J("jX")
C.K=H.J("jY")
C.L=H.J("mL")
C.M=H.J("jZ")
C.N=H.J("aZ")
C.O=H.J("L")
C.P=H.J("p")
C.Q=H.J("T")})();(function staticFields(){$.jF="$cachedFunction"
$.jG="$cachedInvocation"
$.jo=null
$.jm=null
$.iV=!1
$.j_=null
$.k6=null
$.ko=null
$.i5=null
$.id=null
$.j0=null
$.bf=null
$.bR=null
$.bS=null
$.iW=!1
$.x=C.d
$.js=0
$.mb=0
$.mc=0
$.j3=0
$.kk=0
$.bW=0
$.bX=0
$.mz=!1
$.kd=0})();(function lazyInitializers(){lazy($,"jr","$get$jr",function(){return H.kg("_$dart_dartClosure")})
lazy($,"iL","$get$iL",function(){return H.kg("_$dart_js")})
lazy($,"jv","$get$jv",function(){return H.lq()})
lazy($,"jw","$get$jw",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.js
$.js=t+1
t="expando$key$"+t}return new P.dO(null,t,[P.p])})
lazy($,"jM","$get$jM",function(){return H.ap(H.fP({
toString:function(){return"$receiver$"}}))})
lazy($,"jN","$get$jN",function(){return H.ap(H.fP({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"jO","$get$jO",function(){return H.ap(H.fP(null))})
lazy($,"jP","$get$jP",function(){return H.ap(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jT","$get$jT",function(){return H.ap(H.fP(void 0))})
lazy($,"jU","$get$jU",function(){return H.ap(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jR","$get$jR",function(){return H.ap(H.jS(null))})
lazy($,"jQ","$get$jQ",function(){return H.ap(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"jW","$get$jW",function(){return H.ap(H.jS(void 0))})
lazy($,"jV","$get$jV",function(){return H.ap(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"iT","$get$iT",function(){return P.lQ()})
lazy($,"bT","$get$bT",function(){return[]})
lazy($,"i4","$get$i4",function(){return P.jA(P.p,P.aZ)})
lazy($,"bV","$get$bV",function(){return P.jA(P.w,P.aZ)})
lazy($,"jK","$get$jK",function(){return new G.d8(1281,0,4294967295)})
lazy($,"jk","$get$jk",function(){return new G.d7(1281,1281,1281)})
lazy($,"S","$get$S",function(){return P.aK(["cBlendEquation",new G.i("","",0),"cDepthWrite",new G.i("","",0),"cDepthTest",new G.i("","",0),"cStencilFunc",new G.i("","",0),"tPosition",new G.i("vec3","",0),"tSpeed",new G.i("vec3","",0),"tForce",new G.i("vec3","",0),"aColors",new G.i("vec3","per vertex color",0),"aColorAlpha",new G.i("vec4","per vertex color",0),"aPosition",new G.i("vec3","vertex coordinates",0),"aTexUV",new G.i("vec2","texture uvs",0),"aNormal",new G.i("vec3","vertex normals",0),"aBinormal",new G.i("vec3","vertex binormals",0),"aCenter",new G.i("vec4","for wireframe",0),"aPointSize",new G.i("float","",0),"aBoneIndex",new G.i("vec4","",0),"aBoneWeight",new G.i("vec4","",0),"aTangent",new G.i("vec3","vertex tangents",0),"aBitangent",new G.i("vec3","vertex btangents",0),"iaRotation",new G.i("vec4","",0),"iaTranslation",new G.i("vec3","",0),"iaScale",new G.i("vec3","",0),"vColor",new G.i("vec3","per vertex color",0),"vTexUV",new G.i("vec2","",0),"vLightWeighting",new G.i("vec3","",0),"vNormal",new G.i("vec3","",0),"vPosition",new G.i("vec3","vertex coordinates",0),"vPositionFromLight",new G.i("vec4","delta from light",0),"vCenter",new G.i("vec4","for wireframe",0),"vDepth",new G.i("float","depth for shadowmaps",0),"uTransformationMatrix",new G.i("mat4","",0),"uModelMatrix",new G.i("mat4","",0),"uNormalMatrix",new G.i("mat3","",0),"uConvolutionMatrix",new G.i("mat3","",0),"uPerspectiveViewMatrix",new G.i("mat4","",0),"uLightPerspectiveViewMatrix",new G.i("mat4","",0),"uShadowMap",new G.i("sampler2DShadow","",0),"uTexture",new G.i("sampler2D","",0),"uTexture2",new G.i("sampler2D","",0),"uTexture3",new G.i("sampler2D","",0),"uTexture4",new G.i("sampler2D","",0),"uSpecularMap",new G.i("sampler2D","",0),"uNormalMap",new G.i("sampler2D","",0),"uBumpMap",new G.i("sampler2D","",0),"uDepthMap",new G.i("sampler2D","",0),"uCubeTexture",new G.i("samplerCube","",0),"uAnimationTable",new G.i("sampler2D","",0),"uTime",new G.i("float","time since program start in sec",0),"uCameraNear",new G.i("float","",0),"uCameraFar",new G.i("float","",0),"uFogNear",new G.i("float","",0),"uFogFar",new G.i("float","",0),"uPointSize",new G.i("float","",0),"uScale",new G.i("float","",0),"uAngle",new G.i("float","",0),"uCanvasSize",new G.i("vec2","",0),"uCenter2",new G.i("vec2","",0),"uCutOff",new G.i("float","",0),"uShininess",new G.i("float","",0),"uShadowBias",new G.i("float","",0),"uOpacity",new G.i("float","",0),"uColor",new G.i("vec3","",0),"uAmbientDiffuse",new G.i("vec3","",0),"uColorEmissive",new G.i("vec3","",0),"uColorSpecular",new G.i("vec3","",0),"uColorDiffuse",new G.i("vec3","",0),"uColorAlpha",new G.i("vec4","",0),"uColorAlpha2",new G.i("vec4","",0),"uEyePosition",new G.i("vec3","",0),"uMaterial",new G.i("mat4","",0),"uRange",new G.i("vec2","",0),"uDirection",new G.i("vec2","",0),"uBoneMatrices",new G.i("mat4","",128),"uLightDescs",new G.i("mat4","",4),"uLightCount",new G.i("float","",0),"uLightTypes",new G.i("float","",4),"uBumpScale",new G.i("float","for bump maps",0),"uNormalScale",new G.i("float","for normal maps",0)])})
lazy($,"km","$get$km",function(){var t=new G.d3("Normal2Color",null,[],[],[],[],0,P.N())
t.cF(["aPosition","aNormal"])
t.b3(["vColor"])
t.cI(["uPerspectiveViewMatrix","uModelMatrix"])
t.b8(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vColor = normalize(aNormal / 2.0 + vec3(0.5) );"])
return t})
lazy($,"kl","$get$kl",function(){var t=new G.d3("Normal2ColorF",null,[],[],[],[],0,P.N())
t.b3(["vColor"])
t.b8(["oFragColor = vec4( vColor, 1.0 );"])
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
mangledGlobalNames:{p:"int",L:"double",T:"num",w:"String",aZ:"bool",aM:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,v:true,args:[P.q],opt:[P.bI]},{func:1,ret:P.p,args:[P.G,P.G]},{func:1,ret:P.w,args:[W.f]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,Range:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bC,ArrayBufferView:H.b9,DataView:H.eK,Float32Array:H.cT,Float64Array:H.eL,Int16Array:H.eM,Int32Array:H.eN,Int8Array:H.eO,Uint16Array:H.eP,Uint32Array:H.eQ,Uint8ClampedArray:H.cX,CanvasPixelArray:H.cX,Uint8Array:H.eR,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLDivElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLImageElement:W.k,HTMLKeygenElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMenuItemElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTableElement:W.k,HTMLTableRowElement:W.k,HTMLTableSectionElement:W.k,HTMLTemplateElement:W.k,HTMLTextAreaElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,HTMLAnchorElement:W.ds,HTMLAreaElement:W.dt,AudioTrack:W.Y,AudioTrackList:W.dw,Blob:W.bZ,HTMLBodyElement:W.dx,HTMLCanvasElement:W.c_,CanvasRenderingContext2D:W.dz,CDATASection:W.aD,CharacterData:W.aD,Comment:W.aD,ProcessingInstruction:W.aD,Text:W.aD,CompositorWorker:W.dC,CSSCharsetRule:W.B,CSSFontFaceRule:W.B,CSSGroupingRule:W.B,CSSImportRule:W.B,CSSKeyframeRule:W.B,MozCSSKeyframeRule:W.B,WebKitCSSKeyframeRule:W.B,CSSKeyframesRule:W.B,MozCSSKeyframesRule:W.B,WebKitCSSKeyframesRule:W.B,CSSMediaRule:W.B,CSSNamespaceRule:W.B,CSSPageRule:W.B,CSSRule:W.B,CSSStyleRule:W.B,CSSSupportsRule:W.B,CSSViewportRule:W.B,CSSStyleDeclaration:W.bn,MSStyleCSSProperties:W.bn,CSS2Properties:W.bn,DataTransferItemList:W.dF,DeviceAcceleration:W.dG,XMLDocument:W.aF,Document:W.aF,DocumentFragment:W.c1,ShadowRoot:W.c1,DOMException:W.dH,DOMPoint:W.dI,DOMPointReadOnly:W.c2,DOMRectReadOnly:W.c3,DOMStringList:W.dJ,DOMTokenList:W.dK,Element:W.c4,AnimationEvent:W.j,AnimationPlayerEvent:W.j,ApplicationCacheErrorEvent:W.j,AutocompleteErrorEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceLightEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,GamepadEvent:W.j,GeofencingEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RelatedEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCIceCandidateEvent:W.j,RTCPeerConnectionIceEvent:W.j,SecurityPolicyViolationEvent:W.j,ServicePortConnectEvent:W.j,ServiceWorkerMessageEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BatteryManager:W.f,CanvasCaptureMediaStreamTrack:W.f,CrossOriginServiceWorkerClient:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MessagePort:W.f,MIDIAccess:W.f,NetworkInformation:W.f,Notification:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationReceiver:W.f,PresentationRequest:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,ServicePortCollection:W.f,ServiceWorkerContainer:W.f,ServiceWorkerRegistration:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioContext:W.f,webkitAudioContext:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioSourceNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OfflineAudioContext:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.Z,FileList:W.e6,FileWriter:W.e7,HTMLFormElement:W.ec,Gamepad:W.a_,History:W.eg,HTMLCollection:W.by,HTMLFormControlsCollection:W.by,HTMLOptionsCollection:W.by,HTMLDocument:W.c7,XMLHttpRequest:W.c8,XMLHttpRequestUpload:W.bz,XMLHttpRequestEventTarget:W.bz,HTMLInputElement:W.ej,KeyboardEvent:W.aJ,Location:W.ez,MediaList:W.eF,MIDIOutput:W.eH,MIDIInput:W.bB,MIDIPort:W.bB,MimeType:W.a1,MimeTypeArray:W.eI,PointerEvent:W.O,MouseEvent:W.O,DragEvent:W.O,Navigator:W.eS,Attr:W.z,Node:W.z,NodeList:W.cY,RadioNodeList:W.cY,Path2D:W.f_,Perspective:W.f2,Plugin:W.a2,PluginArray:W.f4,PositionValue:W.f7,PresentationConnection:W.f8,Rotation:W.fi,RTCDataChannel:W.d1,DataChannel:W.d1,HTMLSelectElement:W.fl,SharedWorker:W.fo,SourceBuffer:W.a3,SourceBufferList:W.fp,SpeechGrammar:W.a4,SpeechGrammarList:W.fr,SpeechRecognitionResult:W.a5,Storage:W.fu,CSSStyleSheet:W.U,StyleSheet:W.U,CalcLength:W.ae,KeywordValue:W.ae,LengthValue:W.ae,NumberValue:W.ae,SimpleLength:W.ae,TransformValue:W.ae,StyleValue:W.ae,TextTrack:W.a6,TextTrackCue:W.V,VTTCue:W.V,TextTrackCueList:W.fE,TextTrackList:W.fF,TimeRanges:W.fG,Touch:W.a7,TouchEvent:W.aQ,TouchList:W.fK,TrackDefaultList:W.fL,Matrix:W.bc,Skew:W.bc,TransformComponent:W.bc,Translation:W.fN,CompositionEvent:W.aw,FocusEvent:W.aw,TextEvent:W.aw,SVGZoomEvent:W.aw,UIEvent:W.aw,URL:W.fS,VideoTrackList:W.fU,VTTRegionList:W.fX,WebSocket:W.fY,WheelEvent:W.aS,Window:W.bM,DOMWindow:W.bM,Worker:W.h_,CompositorWorkerGlobalScope:W.aT,DedicatedWorkerGlobalScope:W.aT,ServiceWorkerGlobalScope:W.aT,SharedWorkerGlobalScope:W.aT,WorkerGlobalScope:W.aT,ClientRect:W.h9,ClientRectList:W.dc,DOMRectList:W.dc,CSSRuleList:W.hb,DocumentType:W.hc,DOMRect:W.hd,GamepadList:W.hx,HTMLFrameSetElement:W.hy,NamedNodeMap:W.df,MozNamedAttrMap:W.df,ServiceWorker:W.hQ,SpeechRecognitionResultList:W.hR,StyleSheetList:W.hS,WorkerLocation:W.hV,WorkerNavigator:W.hW,SVGAElement:P.dr,SVGAnimateElement:P.aC,SVGAnimateMotionElement:P.aC,SVGAnimateTransformElement:P.aC,SVGAnimationElement:P.aC,SVGSetElement:P.aC,SVGFEBlendElement:P.dP,SVGFEColorMatrixElement:P.dQ,SVGFEComponentTransferElement:P.dR,SVGFECompositeElement:P.dS,SVGFEConvolveMatrixElement:P.dT,SVGFEDiffuseLightingElement:P.dU,SVGFEDisplacementMapElement:P.dV,SVGFEFloodElement:P.dW,SVGFEGaussianBlurElement:P.dX,SVGFEImageElement:P.dY,SVGFEMergeElement:P.dZ,SVGFEMorphologyElement:P.e_,SVGFEOffsetElement:P.e0,SVGFEPointLightElement:P.e1,SVGFESpecularLightingElement:P.e2,SVGFESpotLightElement:P.e3,SVGFETileElement:P.e4,SVGFETurbulenceElement:P.e5,SVGFilterElement:P.e8,SVGForeignObjectElement:P.eb,SVGCircleElement:P.ac,SVGEllipseElement:P.ac,SVGLineElement:P.ac,SVGPathElement:P.ac,SVGPolygonElement:P.ac,SVGPolylineElement:P.ac,SVGGeometryElement:P.ac,SVGClipPathElement:P.at,SVGDefsElement:P.at,SVGGElement:P.at,SVGSwitchElement:P.at,SVGGraphicsElement:P.at,SVGImageElement:P.eh,SVGLength:P.am,SVGLengthList:P.et,SVGMarkerElement:P.eC,SVGMaskElement:P.eD,SVGNumber:P.an,SVGNumberList:P.eU,SVGPatternElement:P.f0,SVGPoint:P.f5,SVGPointList:P.f6,SVGRect:P.fb,SVGRectElement:P.fc,SVGScriptElement:P.fk,SVGStringList:P.fz,SVGDescElement:P.I,SVGDiscardElement:P.I,SVGFEDistantLightElement:P.I,SVGFEFuncAElement:P.I,SVGFEFuncBElement:P.I,SVGFEFuncGElement:P.I,SVGFEFuncRElement:P.I,SVGFEMergeNodeElement:P.I,SVGMetadataElement:P.I,SVGStopElement:P.I,SVGStyleElement:P.I,SVGTitleElement:P.I,SVGComponentTransferFunctionElement:P.I,SVGElement:P.I,SVGSVGElement:P.fA,SVGSymbolElement:P.fB,SVGTextContentElement:P.d6,SVGTextPathElement:P.fD,SVGTSpanElement:P.bK,SVGTextElement:P.bK,SVGTextPositioningElement:P.bK,SVGTransform:P.ao,SVGTransformList:P.fM,SVGUseElement:P.fT,SVGViewElement:P.fV,SVGViewSpec:P.fW,SVGLinearGradientElement:P.bN,SVGRadialGradientElement:P.bN,SVGGradientElement:P.bN,SVGCursorElement:P.hN,SVGFEDropShadowElement:P.hO,SVGMPathElement:P.hP,AudioBuffer:P.dv,WebGLRenderingContext:P.fg,WebGL2RenderingContext:P.fh,WebGL2RenderingContextBase:P.hU,SQLResultSetRowList:P.fs})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.cU.$nativeSuperclassTag="ArrayBufferView"
H.bE.$nativeSuperclassTag="ArrayBufferView"
H.bF.$nativeSuperclassTag="ArrayBufferView"
H.cV.$nativeSuperclassTag="ArrayBufferView"
H.bD.$nativeSuperclassTag="ArrayBufferView"
H.bG.$nativeSuperclassTag="ArrayBufferView"
H.cW.$nativeSuperclassTag="ArrayBufferView"
W.bp.$nativeSuperclassTag="EventTarget"
W.br.$nativeSuperclassTag="EventTarget"
W.bq.$nativeSuperclassTag="EventTarget"
W.bs.$nativeSuperclassTag="EventTarget"
W.bo.$nativeSuperclassTag="EventTarget"
W.bt.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.kp(N.ke(),b)},[])
else (function(b){H.kp(N.ke(),b)})([])})})()