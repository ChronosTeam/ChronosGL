(function(){var supportsDirectProtoAccess=function(){var z=function(){}
z.prototype={p:{}}
var y=new z()
if(!(y.__proto__&&y.__proto__.p===z.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var x=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(x))return true}}catch(w){}return false}()
function map(a){a=Object.create(null)
a.x=0
delete a.x
return a}var A=map()
var B=map()
var C=map()
var D=map()
var E=map()
var F=map()
var G=map()
var H=map()
var J=map()
var K=map()
var L=map()
var M=map()
var N=map()
var O=map()
var P=map()
var Q=map()
var R=map()
var S=map()
var T=map()
var U=map()
var V=map()
var W=map()
var X=map()
var Y=map()
var Z=map()
function I(){}init()
function setupProgram(a,b,c){"use strict"
function generateAccessor(b0,b1,b2){var g=b0.split("-")
var f=g[0]
var e=f.length
var d=f.charCodeAt(e-1)
var a0
if(g.length>1)a0=true
else a0=false
d=d>=60&&d<=64?d-59:d>=123&&d<=126?d-117:d>=37&&d<=43?d-27:0
if(d){var a1=d&3
var a2=d>>2
var a3=f=f.substring(0,e-1)
var a4=f.indexOf(":")
if(a4>0){a3=f.substring(0,a4)
f=f.substring(a4+1)}if(a1){var a5=a1&2?"r":""
var a6=a1&1?"this":"r"
var a7="return "+a6+"."+f
var a8=b2+".prototype.g"+a3+"="
var a9="function("+a5+"){"+a7+"}"
if(a0)b1.push(a8+"$reflectable("+a9+");\n")
else b1.push(a8+a9+";\n")}if(a2){var a5=a2&2?"r,v":"v"
var a6=a2&1?"this":"r"
var a7=a6+"."+f+"=v"
var a8=b2+".prototype.s"+a3+"="
var a9="function("+a5+"){"+a7+"}"
if(a0)b1.push(a8+"$reflectable("+a9+");\n")
else b1.push(a8+a9+";\n")}}return f}function defineClass(a4,a5){var g=[]
var f="function "+a4+"("
var e="",d=""
for(var a0=0;a0<a5.length;a0++){var a1=a5[a0]
if(a1.charCodeAt(0)==48){a1=a1.substring(1)
var a2=generateAccessor(a1,g,a4)
d+="this."+a2+" = null;\n"}else{var a2=generateAccessor(a1,g,a4)
var a3="p_"+a2
f+=e
e=", "
f+=a3
d+="this."+a2+" = "+a3+";\n"}}if(supportsDirectProtoAccess)d+="this."+"$deferredAction"+"();"
f+=") {\n"+d+"}\n"
f+=a4+".builtin$cls=\""+a4+"\";\n"
f+="$desc=$collectedClasses."+a4+"[1];\n"
f+=a4+".prototype = $desc;\n"
if(typeof defineClass.name!="string")f+=a4+".name=\""+a4+"\";\n"
f+=g.join("")
return f}var z=supportsDirectProtoAccess?function(d,e){var g=d.prototype
g.__proto__=e.prototype
g.constructor=d
g["$is"+d.name]=d
return convertToFastObject(g)}:function(){function tmp(){}return function(a1,a2){tmp.prototype=a2.prototype
var g=new tmp()
convertToSlowObject(g)
var f=a1.prototype
var e=Object.keys(f)
for(var d=0;d<e.length;d++){var a0=e[d]
g[a0]=f[a0]}g["$is"+a1.name]=a1
g.constructor=a1
a1.prototype=g
return g}}()
function finishClasses(a5){var g=init.allClasses
a5.combinedConstructorFunction+="return [\n"+a5.constructorsList.join(",\n  ")+"\n]"
var f=new Function("$collectedClasses",a5.combinedConstructorFunction)(a5.collected)
a5.combinedConstructorFunction=null
for(var e=0;e<f.length;e++){var d=f[e]
var a0=d.name
var a1=a5.collected[a0]
var a2=a1[0]
a1=a1[1]
g[a0]=d
a2[a0]=d}f=null
var a3=init.finishedClasses
function finishClass(c2){if(a3[c2])return
a3[c2]=true
var a6=a5.pending[c2]
if(a6&&a6.indexOf("+")>0){var a7=a6.split("+")
a6=a7[0]
var a8=a7[1]
finishClass(a8)
var a9=g[a8]
var b0=a9.prototype
var b1=g[c2].prototype
var b2=Object.keys(b0)
for(var b3=0;b3<b2.length;b3++){var b4=b2[b3]
if(!u.call(b1,b4))b1[b4]=b0[b4]}}if(!a6||typeof a6!="string"){var b5=g[c2]
var b6=b5.prototype
b6.constructor=b5
b6.$isb=b5
b6.$deferredAction=function(){}
return}finishClass(a6)
var b7=g[a6]
if(!b7)b7=existingIsolateProperties[a6]
var b5=g[c2]
var b6=z(b5,b7)
if(b0)b6.$deferredAction=mixinDeferredActionHelper(b0,b6)
if(Object.prototype.hasOwnProperty.call(b6,"%")){var b8=b6["%"].split(";")
if(b8[0]){var b9=b8[0].split("|")
for(var b3=0;b3<b9.length;b3++){init.interceptorsByTag[b9[b3]]=b5
init.leafTags[b9[b3]]=true}}if(b8[1]){b9=b8[1].split("|")
if(b8[2]){var c0=b8[2].split("|")
for(var b3=0;b3<c0.length;b3++){var c1=g[c0[b3]]
c1.$nativeSuperclassTag=b9[0]}}for(b3=0;b3<b9.length;b3++){init.interceptorsByTag[b9[b3]]=b5
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$ish)b6.$deferredAction()}var a4=Object.keys(a5.pending)
for(var e=0;e<a4.length;e++)finishClass(a4[e])}function finishAddStubsHelper(){var g=this
while(!g.hasOwnProperty("$deferredAction"))g=g.__proto__
delete g.$deferredAction
var f=Object.keys(g)
for(var e=0;e<f.length;e++){var d=f[e]
var a0=d.charCodeAt(0)
var a1
if(d!=="^"&&d!=="$reflectable"&&a0!==43&&a0!==42&&(a1=g[d])!=null&&a1.constructor===Array&&d!=="<>")addStubs(g,a1,d,false,[])}convertToFastObject(g)
g=g.__proto__
g.$deferredAction()}function mixinDeferredActionHelper(d,e){var g
if(e.hasOwnProperty("$deferredAction"))g=e.$deferredAction
return function foo(){if(!supportsDirectProtoAccess)return
var f=this
while(!f.hasOwnProperty("$deferredAction"))f=f.__proto__
if(g)f.$deferredAction=g
else{delete f.$deferredAction
convertToFastObject(f)}d.$deferredAction()
f.$deferredAction()}}function processClassData(b2,b3,b4){b3=convertToSlowObject(b3)
var g
var f=Object.keys(b3)
var e=false
var d=supportsDirectProtoAccess&&b2!="b"
for(var a0=0;a0<f.length;a0++){var a1=f[a0]
var a2=a1.charCodeAt(0)
if(a1==="p"){processStatics(init.statics[b2]=b3.p,b4)
delete b3.p}else if(a2===43){w[g]=a1.substring(1)
var a3=b3[a1]
if(a3>0)b3[g].$reflectable=a3}else if(a2===42){b3[g].$D=b3[a1]
var a4=b3.$methodsWithOptionalArguments
if(!a4)b3.$methodsWithOptionalArguments=a4={}
a4[a1]=g}else{var a5=b3[a1]
if(a1!=="^"&&a5!=null&&a5.constructor===Array&&a1!=="<>")if(d)e=true
else addStubs(b3,a5,a1,false,[])
else g=a1}}if(e)b3.$deferredAction=finishAddStubsHelper
var a6=b3["^"],a7,a8,a9=a6
var b0=a9.split(";")
a9=b0[1]?b0[1].split(","):[]
a8=b0[0]
a7=a8.split(":")
if(a7.length==2){a8=a7[0]
var b1=a7[1]
if(b1)b3.$S=function(b5){return function(){return init.types[b5]}}(b1)}if(a8)b4.pending[b2]=a8
b4.combinedConstructorFunction+=defineClass(b2,a9)
b4.constructorsList.push(b2)
b4.collected[b2]=[m,b3]
i.push(b2)}function processStatics(a4,a5){var g=Object.keys(a4)
for(var f=0;f<g.length;f++){var e=g[f]
if(e==="^")continue
var d=a4[e]
var a0=e.charCodeAt(0)
var a1
if(a0===43){v[a1]=e.substring(1)
var a2=a4[e]
if(a2>0)a4[a1].$reflectable=a2
if(d&&d.length)init.typeInformation[a1]=d}else if(a0===42){m[a1].$D=d
var a3=a4.$methodsWithOptionalArguments
if(!a3)a4.$methodsWithOptionalArguments=a3={}
a3[e]=a1}else if(typeof d==="function"){m[a1=e]=d
h.push(e)}else if(d.constructor===Array)addStubs(m,d,e,true,h)
else{a1=e
processClassData(e,d,a5)}}}function addStubs(b6,b7,b8,b9,c0){var g=0,f=g,e=b7[g],d
if(typeof e=="string")d=b7[++g]
else{d=e
e=b8}if(typeof d=="number"){f=d
d=b7[++g]}b6[b8]=b6[e]=d
var a0=[d]
d.$stubName=b8
c0.push(b8)
for(g++;g<b7.length;g++){d=b7[g]
if(typeof d!="function")break
if(!b9)d.$stubName=b7[++g]
a0.push(d)
if(d.$stubName){b6[d.$stubName]=d
c0.push(d.$stubName)}}for(var a1=0;a1<a0.length;g++,a1++)a0[a1].$callName=b7[g]
var a2=b7[g]
b7=b7.slice(++g)
var a3=b7[0]
var a4=(a3&1)===1
a3=a3>>1
var a5=a3>>1
var a6=(a3&1)===1
var a7=a3===3
var a8=a3===1
var a9=b7[1]
var b0=a9>>1
var b1=(a9&1)===1
var b2=a5+b0
var b3=b7[2]
if(typeof b3=="number")b7[2]=b3+c
if(b>0){var b4=3
for(var a1=0;a1<b0;a1++){if(typeof b7[b4]=="number")b7[b4]=b7[b4]+b
b4++}for(var a1=0;a1<b2;a1++){b7[b4]=b7[b4]+b
b4++}}var b5=2*b0+a5+3
if(a2){d=tearOff(a0,f,b7,b9,b8,a4)
b6[b8].$getter=d
d.$getterStub=true
if(b9)c0.push(a2)
b6[a2]=d
a0.push(d)
d.$stubName=a2
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cx(this,d,e,f,true,false,a1).prototype
return g}:tearOffGetter(d,e,f,a1,a2)}var y=0
if(!init.libraries)init.libraries=[]
if(!init.mangledNames)init.mangledNames=map()
if(!init.mangledGlobalNames)init.mangledGlobalNames=map()
if(!init.statics)init.statics=map()
if(!init.typeInformation)init.typeInformation=map()
var x=init.libraries
var w=init.mangledNames
var v=init.mangledGlobalNames
var u=Object.prototype.hasOwnProperty
var t=a.length
var s=map()
s.collected=map()
s.pending=map()
s.constructorsList=[]
s.combinedConstructorFunction="function $reflectable(fn){fn.$reflectable=1;return fn};\n"+"var $desc;\n"
for(var r=0;r<t;r++){var q=a[r]
var p=q[0]
var o=q[1]
var n=q[2]
var m=q[3]
var l=q[4]
var k=!!q[5]
var j=l&&l["^"]
if(j instanceof Array)j=j[0]
var i=[]
var h=[]
processStatics(l,s)
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.b7=function(){}
var dart=[["","",,H,{"^":"",lv:{"^":"b;a"}}],["","",,J,{"^":"",
cB:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bY:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cA==null){H.ks()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.dF("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cE()]
if(v!=null)return v
v=H.kx(a)
if(v!=null)return v
if(typeof a=="function")return C.S
y=Object.getPrototypeOf(a)
if(y==null)return C.A
if(y===Object.prototype)return C.A
if(typeof w=="function"){Object.defineProperty(w,$.cE(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
h:{"^":"b;",
B:function(a,b){return a===b},
gv:function(a){return H.aY(a)},
k:["cm",function(a){return"Instance of '"+H.aZ(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h9:{"^":"h;",
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isQ:1},
dh:{"^":"h;",
B:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
$isF:1},
cj:{"^":"h;",
gv:function(a){return 0},
k:["co",function(a){return String(a)}]},
hH:{"^":"cj;"},
b0:{"^":"cj;"},
bl:{"^":"cj;",
k:function(a){var z=a[$.eq()]
if(z==null)return this.co(a)
return"JavaScript function for "+H.e(J.be(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbg:1},
bi:{"^":"h;$ti",
l:function(a,b){H.z(b,H.p(a,0))
if(!!a.fixed$length)H.V(P.y("add"))
a.push(b)},
H:function(a,b){var z,y
H.w(b,"$isk",[H.p(a,0)],"$ask")
if(!!a.fixed$length)H.V(P.y("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.N)(b),++y)a.push(b[y])},
a5:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.h(z,y,H.e(a[y]))
return z.join(b)},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
bi:function(a,b){var z,y
H.l(b,{func:1,ret:P.Q,args:[H.p(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.aC(a))}return!1},
cg:function(a,b){if(!!a.immutable$list)H.V(P.y("sort"))
H.i2(a,J.k3(),H.p(a,0))},
aj:function(a){return this.cg(a,null)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aA(a[z],b))return!0
return!1},
k:function(a){return P.ch(a,"[","]")},
gw:function(a){return new J.fs(a,a.length,0,[H.p(a,0)])},
gv:function(a){return H.aY(a)},
gj:function(a){return a.length},
i:function(a,b){if(b>=a.length||b<0)throw H.c(H.b6(a,b))
return a[b]},
h:function(a,b,c){H.z(c,H.p(a,0))
if(!!a.immutable$list)H.V(P.y("indexed set"))
if(b>=a.length||b<0)throw H.c(H.b6(a,b))
a[b]=c},
$isv:1,
$asv:I.b7,
$isk:1,
$isa:1,
p:{
h8:function(a,b){return J.ci(H.i(a,[b]))},
ci:function(a){H.bs(a)
a.fixed$length=Array
return a},
lt:[function(a,b){return J.eS(H.ej(a,"$isW"),H.ej(b,"$isW"))},"$2","k3",8,0,28]}},
lu:{"^":"bi;$ti"},
fs:{"^":"b;a,b,c,0d,$ti",
saZ:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.N(z))
x=this.c
if(x>=y){this.saZ(null)
return!1}this.saZ(z[x]);++this.c
return!0},
$isaT:1},
bj:{"^":"h;",
J:function(a,b){var z
H.cC(b)
if(typeof b!=="number")throw H.c(H.b4(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gag(b)
if(this.gag(a)===z)return 0
if(this.gag(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gag:function(a){return a===0?1/a<0:a<0},
bW:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.y(""+a+".toInt()"))},
di:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.c(P.y(""+a+".ceil()"))},
dj:function(a,b,c){if(this.J(b,c)>0)throw H.c(H.b4(b))
if(this.J(a,b)<0)return b
if(this.J(a,c)>0)return c
return a},
dK:function(a,b){var z
if(b>20)throw H.c(P.bJ(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gag(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
al:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bf(a,b)},
N:function(a,b){return(a|0)===a?a/b|0:this.bf(a,b)},
bf:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.y("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
bd:function(a,b){var z
if(a>0)z=this.d5(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
d5:function(a,b){return b>31?0:a>>>b},
S:function(a,b){if(typeof b!=="number")throw H.c(H.b4(b))
return a>b},
$isW:1,
$asW:function(){return[P.D]},
$isX:1,
$isD:1},
dg:{"^":"bj;",$isB:1},
df:{"^":"bj;"},
bk:{"^":"h;",
aq:function(a,b){if(b>=a.length)throw H.c(H.b6(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.u(b)
if(typeof b!=="string")throw H.c(P.cU(b,null,null))
return a+b},
cj:function(a,b,c){var z
if(c>a.length)throw H.c(P.bJ(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
ci:function(a,b){return this.cj(a,b,0)},
cl:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bK(b,null,null))
if(b>c)throw H.c(P.bK(b,null,null))
if(c>a.length)throw H.c(P.bK(c,null,null))
return a.substring(b,c)},
ck:function(a,b){return this.cl(a,b,null)},
dJ:function(a){return a.toLowerCase()},
dk:function(a,b,c){if(c>a.length)throw H.c(P.bJ(c,0,a.length,null,null))
return H.kE(a,b,c)},
J:function(a,b){var z
H.u(b)
if(typeof b!=="string")throw H.c(H.b4(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
k:function(a){return a},
gv:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
i:function(a,b){if(b>=a.length||!1)throw H.c(H.b6(a,b))
return a[b]},
$isv:1,
$asv:I.b7,
$isW:1,
$asW:function(){return[P.d]},
$ishF:1,
$isd:1}}],["","",,H,{"^":"",
h6:function(){return new P.co("No element")},
h7:function(){return new P.co("Too many elements")},
i2:function(a,b,c){H.w(a,"$isa",[c],"$asa")
H.l(b,{func:1,ret:P.B,args:[c,c]})
H.bm(a,0,J.aO(a)-1,b,c)},
bm:function(a,b,c,d,e){H.w(a,"$isa",[e],"$asa")
H.l(d,{func:1,ret:P.B,args:[e,e]})
if(c-b<=32)H.i1(a,b,c,d,e)
else H.i0(a,b,c,d,e)},
i1:function(a,b,c,d,e){var z,y,x,w,v
H.w(a,"$isa",[e],"$asa")
H.l(d,{func:1,ret:P.B,args:[e,e]})
for(z=b+1,y=J.b8(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.a6(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.h(a,w,y.i(a,v))
w=v}y.h(a,w,x)}},
i0:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.w(a,"$isa",[a2],"$asa")
H.l(a1,{func:1,ret:P.B,args:[a2,a2]})
z=C.b.N(a0-b+1,6)
y=b+z
x=a0-z
w=C.b.N(b+a0,2)
v=w-z
u=w+z
t=J.b8(a)
s=t.i(a,y)
r=t.i(a,v)
q=t.i(a,w)
p=t.i(a,u)
o=t.i(a,x)
if(J.a6(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.a6(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.a6(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.a6(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a6(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.a6(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.a6(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.a6(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a6(a1.$2(p,o),0)){n=o
o=p
p=n}t.h(a,y,s)
t.h(a,w,q)
t.h(a,x,o)
t.h(a,v,t.i(a,b))
t.h(a,u,t.i(a,a0))
m=b+1
l=a0-1
if(J.aA(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.i(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a7()
if(i<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.S()
if(i>0){--l
continue}else{h=l-1
if(i<0){t.h(a,k,t.i(a,m))
g=m+1
t.h(a,m,t.i(a,l))
t.h(a,l,j)
l=h
m=g
break}else{t.h(a,k,t.i(a,l))
t.h(a,l,j)
l=h
break}}}}f=!0}else{for(k=m;k<=l;++k){j=t.i(a,k)
e=a1.$2(j,r)
if(typeof e!=="number")return e.a7()
if(e<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.S()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.S()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.a7()
h=l-1
if(i<0){t.h(a,k,t.i(a,m))
g=m+1
t.h(a,m,t.i(a,l))
t.h(a,l,j)
m=g}else{t.h(a,k,t.i(a,l))
t.h(a,l,j)}l=h
break}}}}f=!1}c=m-1
t.h(a,b,t.i(a,c))
t.h(a,c,r)
c=l+1
t.h(a,a0,t.i(a,c))
t.h(a,c,p)
H.bm(a,b,m-2,a1,a2)
H.bm(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aA(a1.$2(t.i(a,m),r),0);)++m
for(;J.aA(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.a7()
h=l-1
if(i<0){t.h(a,k,t.i(a,m))
g=m+1
t.h(a,m,t.i(a,l))
t.h(a,l,j)
m=g}else{t.h(a,k,t.i(a,l))
t.h(a,l,j)}l=h
break}}H.bm(a,m,l,a1,a2)}else H.bm(a,m,l,a1,a2)},
d4:{"^":"k;"},
bH:{"^":"d4;$ti",
gw:function(a){return new H.dl(this,this.gj(this),0,[H.cz(this,"bH",0)])},
aG:function(a,b){return this.cn(0,H.l(b,{func:1,ret:P.Q,args:[H.cz(this,"bH",0)]}))}},
dl:{"^":"b;a,b,c,0d,$ti",
sb_:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.b8(z)
x=y.gj(z)
if(this.b!==x)throw H.c(P.aC(z))
w=this.c
if(w>=x){this.sb_(null)
return!1}this.sb_(y.q(z,w));++this.c
return!0},
$isaT:1},
hk:{"^":"bH;a,b,$ti",
gj:function(a){return J.aO(this.a)},
q:function(a,b){return this.b.$1(J.f1(this.a,b))},
$asbH:function(a,b){return[b]},
$ask:function(a,b){return[b]}},
dG:{"^":"k;a,b,$ti",
gw:function(a){return new H.iu(J.by(this.a),this.b,this.$ti)}},
iu:{"^":"aT;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA(z)))return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
bG:{"^":"b;$ti"}}],["","",,H,{"^":"",
az:function(a){var z,y
z=H.u(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kk:function(a){return init.types[H.M(a)]},
kv:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.A(a).$isx},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.be(a)
if(typeof z!=="string")throw H.c(H.b4(a))
return z},
aY:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aZ:function(a){return H.hI(a)+H.bR(H.ae(a),0,null)},
hI:function(a){var z,y,x,w,v,u,t,s,r
z=J.A(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.K||!!z.$isb0){u=C.z(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.az(w.length>1&&C.i.aq(w,0)===36?C.i.ck(w,1):w)},
aD:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hP:function(a){var z=H.aD(a).getFullYear()+0
return z},
hN:function(a){var z=H.aD(a).getMonth()+1
return z},
hJ:function(a){var z=H.aD(a).getDate()+0
return z},
hK:function(a){var z=H.aD(a).getHours()+0
return z},
hM:function(a){var z=H.aD(a).getMinutes()+0
return z},
hO:function(a){var z=H.aD(a).getSeconds()+0
return z},
hL:function(a){var z=H.aD(a).getMilliseconds()+0
return z},
br:function(a){throw H.c(H.b4(a))},
m:function(a,b){if(a==null)J.aO(a)
throw H.c(H.b6(a,b))},
b6:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aB(!0,b,"index",null)
z=H.M(J.aO(a))
if(!(b<0)){if(typeof z!=="number")return H.br(z)
y=b>=z}else y=!0
if(y)return P.E(b,a,"index",null,z)
return P.bK(b,"index",null)},
b4:function(a){return new P.aB(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.ds()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.em})
z.name=""}else z.toString=H.em
return z},
em:function(){return J.be(this.dartException)},
V:function(a){throw H.c(a)},
N:function(a){throw H.c(P.aC(a))},
a4:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kG(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.bd(x,16)&8191)===10)switch(w){case 438:return z.$1(H.ck(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dr(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.et()
u=$.eu()
t=$.ev()
s=$.ew()
r=$.ez()
q=$.eA()
p=$.ey()
$.ex()
o=$.eC()
n=$.eB()
m=v.I(y)
if(m!=null)return z.$1(H.ck(H.u(y),m))
else{m=u.I(y)
if(m!=null){m.method="call"
return z.$1(H.ck(H.u(y),m))}else{m=t.I(y)
if(m==null){m=s.I(y)
if(m==null){m=r.I(y)
if(m==null){m=q.I(y)
if(m==null){m=p.I(y)
if(m==null){m=s.I(y)
if(m==null){m=o.I(y)
if(m==null){m=n.I(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dr(H.u(y),m))}}return z.$1(new H.iq(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dv()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aB(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dv()
return a},
ba:function(a){var z
if(a==null)return new H.dW(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dW(a)},
kg:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.h(0,a[y],a[x])}return b},
ku:function(a,b,c,d,e,f){H.f(a,"$isbg")
switch(H.M(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.d8("Unsupported number of arguments for wrapped closure"))},
b5:function(a,b){var z
H.M(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ku)
a.$identity=z
return z},
fD:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.A(d).$isa){z.$reflectionInfo=d
x=H.hT(z).r}else x=d
w=e?Object.create(new H.i4().constructor.prototype):Object.create(new H.ca(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a7
if(typeof u!=="number")return u.G()
$.a7=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.cZ(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kk,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cX:H.cb
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.c("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cZ(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
fA:function(a,b,c,d){var z=H.cb
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cZ:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fC(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fA(y,!w,z,b)
if(y===0){w=$.a7
if(typeof w!=="number")return w.G()
$.a7=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aP
if(v==null){v=H.bC("self")
$.aP=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a7
if(typeof w!=="number")return w.G()
$.a7=w+1
t+=w
w="return function("+t+"){return this."
v=$.aP
if(v==null){v=H.bC("self")
$.aP=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fB:function(a,b,c,d){var z,y
z=H.cb
y=H.cX
switch(b?-1:a){case 0:throw H.c(H.hX("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fC:function(a,b){var z,y,x,w,v,u,t,s
z=$.aP
if(z==null){z=H.bC("self")
$.aP=z}y=$.cW
if(y==null){y=H.bC("receiver")
$.cW=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fB(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.a7
if(typeof y!=="number")return y.G()
$.a7=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.a7
if(typeof y!=="number")return y.G()
$.a7=y+1
return new Function(z+y+"}")()},
cx:function(a,b,c,d,e,f,g){return H.fD(a,b,H.M(c),d,!!e,!!f,g)},
u:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a2(a,"String"))},
eb:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a2(a,"double"))},
cC:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a2(a,"num"))},
bU:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a2(a,"bool"))},
M:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a2(a,"int"))},
cD:function(a,b){throw H.c(H.a2(a,H.az(H.u(b).substring(3))))},
kC:function(a,b){throw H.c(H.cY(a,H.az(H.u(b).substring(3))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.A(a)[b])return a
H.cD(a,b)},
af:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.A(a)[b]
else z=!0
if(z)return a
H.kC(a,b)},
ej:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.A(a)[b])return a
H.cD(a,b)},
bs:function(a){if(a==null)return a
if(!!J.A(a).$isa)return a
throw H.c(H.a2(a,"List<dynamic>"))},
kw:function(a,b){var z
if(a==null)return a
z=J.A(a)
if(!!z.$isa)return a
if(z[b])return a
H.cD(a,b)},
cy:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.M(z)]
else return a.$S()}return},
bq:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cy(J.A(a))
if(z==null)return!1
return H.e1(z,null,b,null)},
l:function(a,b){var z,y
if(a==null)return a
if($.ct)return a
$.ct=!0
try{if(H.bq(a,b))return a
z=H.bt(b)
y=H.a2(a,z)
throw H.c(y)}finally{$.ct=!1}},
bW:function(a,b){if(a!=null&&!H.cw(a,b))H.V(H.a2(a,H.bt(b)))
return a},
e5:function(a){var z,y
z=J.A(a)
if(!!z.$isn){y=H.cy(z)
if(y!=null)return H.bt(y)
return"Closure"}return H.aZ(a)},
kF:function(a){throw H.c(new P.fJ(H.u(a)))},
ef:function(a){return init.getIsolateTag(a)},
i:function(a,b){a.$ti=b
return a},
ae:function(a){if(a==null)return
return a.$ti},
mX:function(a,b,c){return H.aN(a["$as"+H.e(c)],H.ae(b))},
b9:function(a,b,c,d){var z
H.u(c)
H.M(d)
z=H.aN(a["$as"+H.e(c)],H.ae(b))
return z==null?null:z[d]},
cz:function(a,b,c){var z
H.u(b)
H.M(c)
z=H.aN(a["$as"+H.e(b)],H.ae(a))
return z==null?null:z[c]},
p:function(a,b){var z
H.M(b)
z=H.ae(a)
return z==null?null:z[b]},
bt:function(a){return H.ay(a,null)},
ay:function(a,b){var z,y
H.w(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.az(a[0].builtin$cls)+H.bR(a,1,b)
if(typeof a=="function")return H.az(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.M(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.m(b,y)
return H.e(b[y])}if('func' in a)return H.k2(a,b)
if('futureOr' in a)return"FutureOr<"+H.ay("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
k2:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
H.w(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.i([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.m(b,r)
t=C.i.G(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.ay(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.ay(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.ay(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.ay(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kf(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.u(z[l])
n=n+m+H.ay(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bR:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.cq("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ay(u,c)}return"<"+z.k(0)+">"},
kj:function(a){var z,y,x,w
z=J.A(a)
if(!!z.$isn){y=H.cy(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ae(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aN:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aK:function(a,b,c,d){var z,y
H.u(b)
H.bs(c)
H.u(d)
if(a==null)return!1
z=H.ae(a)
y=J.A(a)
if(y[b]==null)return!1
return H.e8(H.aN(y[d],z),null,c,null)},
bu:function(a,b,c,d){H.u(b)
H.bs(c)
H.u(d)
if(a==null)return a
if(H.aK(a,b,c,d))return a
throw H.c(H.cY(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.az(b.substring(3))+H.bR(c,0,null),init.mangledGlobalNames)))},
w:function(a,b,c,d){H.u(b)
H.bs(c)
H.u(d)
if(a==null)return a
if(H.aK(a,b,c,d))return a
throw H.c(H.a2(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.az(b.substring(3))+H.bR(c,0,null),init.mangledGlobalNames)))},
e8:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.Z(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.Z(a[y],b,c[y],d))return!1
return!0},
mT:function(a,b,c){return a.apply(b,H.aN(J.A(b)["$as"+H.e(c)],H.ae(b)))},
eh:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="F"||a===-1||a===-2||H.eh(z)}return!1},
cw:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="F"||b===-1||b===-2||H.eh(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cw(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bq(a,b)}z=J.A(a).constructor
y=H.ae(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.Z(z,null,b,null)},
z:function(a,b){if(a!=null&&!H.cw(a,b))throw H.c(H.a2(a,H.bt(b)))
return a},
Z:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.Z(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.e1(a,b,c,d)
if('func' in a)return c.builtin$cls==="bg"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.Z("type" in a?a.type:null,b,x,d)
else if(H.Z(a,b,x,d))return!0
else{if(!('$is'+"aS" in y.prototype))return!1
w=y.prototype["$as"+"aS"]
v=H.aN(w,z?a.slice(1):null)
return H.Z(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.e8(H.aN(r,z),b,u,d)},
e1:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.Z(a.ret,b,c.ret,d))return!1
x=a.args
w=c.args
v=a.opt
u=c.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
for(p=0;p<t;++p)if(!H.Z(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.Z(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.Z(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kB(m,b,l,d)},
kB:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.Z(c[w],d,a[w],b))return!1}return!0},
mU:function(a,b,c){Object.defineProperty(a,H.u(b),{value:c,enumerable:false,writable:true,configurable:true})},
kx:function(a){var z,y,x,w,v,u
z=H.u($.eg.$1(a))
y=$.bV[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c_[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.u($.e7.$2(a,z))
if(z!=null){y=$.bV[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c_[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c0(x)
$.bV[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c_[z]=x
return x}if(v==="-"){u=H.c0(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.ek(a,x)
if(v==="*")throw H.c(P.dF(z))
if(init.leafTags[z]===true){u=H.c0(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ek(a,x)},
ek:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cB(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c0:function(a){return J.cB(a,!1,null,!!a.$isx)},
kz:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c0(z)
else return J.cB(z,c,null,null)},
ks:function(){if(!0===$.cA)return
$.cA=!0
H.kt()},
kt:function(){var z,y,x,w,v,u,t,s
$.bV=Object.create(null)
$.c_=Object.create(null)
H.ko()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.el.$1(v)
if(u!=null){t=H.kz(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
ko:function(){var z,y,x,w,v,u,t
z=C.P()
z=H.aJ(C.M,H.aJ(C.R,H.aJ(C.y,H.aJ(C.y,H.aJ(C.Q,H.aJ(C.N,H.aJ(C.O(C.z),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eg=new H.kp(v)
$.e7=new H.kq(u)
$.el=new H.kr(t)},
aJ:function(a,b){return a(b)||b},
kE:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hS:{"^":"b;a,b,c,d,e,f,r,0x",p:{
hT:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.ci(z)
y=z[0]
x=z[1]
return new H.hS(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ij:{"^":"b;a,b,c,d,e,f",
I:function(a){var z,y,x
z=new RegExp(this.a).exec(a)
if(z==null)return
y=Object.create(null)
x=this.b
if(x!==-1)y.arguments=z[x+1]
x=this.c
if(x!==-1)y.argumentsExpr=z[x+1]
x=this.d
if(x!==-1)y.expr=z[x+1]
x=this.e
if(x!==-1)y.method=z[x+1]
x=this.f
if(x!==-1)y.receiver=z[x+1]
return y},
p:{
a9:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.i([],[P.d])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ij(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bN:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dB:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hC:{"^":"P;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dr:function(a,b){return new H.hC(a,b==null?null:b.method)}}},
ha:{"^":"P;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
ck:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.ha(a,y,z?null:b.receiver)}}},
iq:{"^":"P;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kG:{"^":"n:5;a",
$1:function(a){if(!!J.A(a).$isP)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dW:{"^":"b;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa1:1},
n:{"^":"b;",
k:function(a){return"Closure '"+H.aZ(this).trim()+"'"},
gca:function(){return this},
$isbg:1,
gca:function(){return this}},
dx:{"^":"n;"},
i4:{"^":"dx;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.az(z)+"'"}},
ca:{"^":"dx;a,b,c,d",
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ca))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.aY(this.a)
else y=typeof z!=="object"?J.ag(z):H.aY(z)
return(y^H.aY(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.aZ(z)+"'")},
p:{
cb:function(a){return a.a},
cX:function(a){return a.c},
bC:function(a){var z,y,x,w,v
z=new H.ca("self","target","receiver","name")
y=J.ci(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ik:{"^":"P;a",
k:function(a){return this.a},
p:{
a2:function(a,b){return new H.ik("TypeError: "+P.bE(a)+": type '"+H.e5(a)+"' is not a subtype of type '"+b+"'")}}},
fy:{"^":"P;a",
k:function(a){return this.a},
p:{
cY:function(a,b){return new H.fy("CastError: "+P.bE(a)+": type '"+H.e5(a)+"' is not a subtype of type '"+b+"'")}}},
hW:{"^":"P;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
hX:function(a){return new H.hW(a)}}},
dC:{"^":"b;a,0b,0c,0d",
gad:function(){var z=this.b
if(z==null){z=H.bt(this.a)
this.b=z}return z},
k:function(a){return this.gad()},
gv:function(a){var z=this.d
if(z==null){z=C.i.gv(this.gad())
this.d=z}return z},
B:function(a,b){if(b==null)return!1
return b instanceof H.dC&&this.gad()===b.gad()}},
di:{"^":"dm;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gE:function(a){return new H.al(this,[H.p(this,0)])},
af:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cQ(z,b)}else{y=this.dz(b)
return y}},
dz:function(a){var z=this.d
if(z==null)return!1
return this.aD(this.aw(z,J.ag(a)&0x3ffffff),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ab(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ab(w,b)
x=y==null?null:y.b
return x}else return this.dA(b)},
dA:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aw(z,J.ag(a)&0x3ffffff)
x=this.aD(y,a)
if(x<0)return
return y[x].b},
h:function(a,b,c){var z,y,x,w,v,u
H.z(b,H.p(this,0))
H.z(c,H.p(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.ay()
this.b=z}this.b0(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ay()
this.c=y}this.b0(y,b,c)}else{x=this.d
if(x==null){x=this.ay()
this.d=x}w=J.ag(b)&0x3ffffff
v=this.aw(x,w)
if(v==null)this.aB(x,w,[this.ao(b,c)])
else{u=this.aD(v,b)
if(u>=0)v[u].b=c
else v.push(this.ao(b,c))}}},
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.p(this,0),H.p(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aC(this))
z=z.c}},
b0:function(a,b,c){var z
H.z(b,H.p(this,0))
H.z(c,H.p(this,1))
z=this.ab(a,b)
if(z==null)this.aB(a,b,this.ao(b,c))
else z.b=c},
b2:function(){this.r=this.r+1&67108863},
ao:function(a,b){var z,y
z=new H.hf(H.z(a,H.p(this,0)),H.z(b,H.p(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b2()
return z},
aD:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aA(a[y].a,b))return y
return-1},
k:function(a){return P.dn(this)},
ab:function(a,b){return a[b]},
aw:function(a,b){return a[b]},
aB:function(a,b,c){a[b]=c},
cR:function(a,b){delete a[b]},
cQ:function(a,b){return this.ab(a,b)!=null},
ay:function(){var z=Object.create(null)
this.aB(z,"<non-identifier-key>",z)
this.cR(z,"<non-identifier-key>")
return z},
$isdj:1},
hf:{"^":"b;a,b,0c,0d"},
al:{"^":"d4;a,$ti",
gj:function(a){return this.a.a},
gw:function(a){var z,y
z=this.a
y=new H.hg(z,z.r,this.$ti)
y.c=z.e
return y}},
hg:{"^":"b;a,b,0c,0d,$ti",
sb1:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aC(z))
else{z=this.c
if(z==null){this.sb1(null)
return!1}else{this.sb1(z.a)
this.c=this.c.c
return!0}}},
$isaT:1},
kp:{"^":"n:5;a",
$1:function(a){return this.a(a)}},
kq:{"^":"n:13;a",
$2:function(a,b){return this.a(a,b)}},
kr:{"^":"n:14;a",
$1:function(a){return this.a(H.u(a))}}}],["","",,H,{"^":"",
kf:function(a){return J.h8(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
c1:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bQ:function(a){var z,y
if(!!J.A(a).$isv)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.h(z,y,a[y])
return z},
ab:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.b6(b,a))},
hx:{"^":"h;",$isil:1,"%":"DataView;ArrayBufferView;cm|dQ|dR|dp|dS|dT|ao"},
cm:{"^":"hx;",
gj:function(a){return a.length},
$isv:1,
$asv:I.b7,
$isx:1,
$asx:I.b7},
dp:{"^":"dR;",
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
h:function(a,b,c){H.eb(c)
H.ab(b,a,a.length)
a[b]=c},
$asbG:function(){return[P.X]},
$aso:function(){return[P.X]},
$isk:1,
$ask:function(){return[P.X]},
$isa:1,
$asa:function(){return[P.X]},
"%":"Float64Array"},
ao:{"^":"dT;",
h:function(a,b,c){H.M(c)
H.ab(b,a,a.length)
a[b]=c},
$asbG:function(){return[P.B]},
$aso:function(){return[P.B]},
$isk:1,
$ask:function(){return[P.B]},
$isa:1,
$asa:function(){return[P.B]}},
hw:{"^":"dp;",$isad:1,"%":"Float32Array"},
lE:{"^":"ao;",
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lF:{"^":"ao;",
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
$ish4:1,
"%":"Int32Array"},
lG:{"^":"ao;",
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lH:{"^":"ao;",
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hy:{"^":"ao;",
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
$isms:1,
"%":"Uint32Array"},
lI:{"^":"ao;",
gj:function(a){return a.length},
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lJ:{"^":"ao;",
gj:function(a){return a.length},
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dQ:{"^":"cm+o;"},
dR:{"^":"dQ+bG;"},
dS:{"^":"cm+o;"},
dT:{"^":"dS+bG;"}}],["","",,P,{"^":"",
iy:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.ka()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b5(new P.iA(z),1)).observe(y,{childList:true})
return new P.iz(z,y,x)}else if(self.setImmediate!=null)return P.kb()
return P.kc()},
mC:[function(a){self.scheduleImmediate(H.b5(new P.iB(H.l(a,{func:1,ret:-1})),0))},"$1","ka",4,0,4],
mD:[function(a){self.setImmediate(H.b5(new P.iC(H.l(a,{func:1,ret:-1})),0))},"$1","kb",4,0,4],
mE:[function(a){H.l(a,{func:1,ret:-1})
P.jL(0,a)},"$1","kc",4,0,4],
k6:function(a,b){if(H.bq(a,{func:1,args:[P.b,P.a1]}))return H.l(a,{func:1,ret:null,args:[P.b,P.a1]})
if(H.bq(a,{func:1,args:[P.b]}))return H.l(a,{func:1,ret:null,args:[P.b]})
throw H.c(P.cU(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
k5:function(){var z,y
for(;z=$.aI,z!=null;){$.b3=null
y=z.b
$.aI=y
if(y==null)$.b2=null
z.a.$0()}},
mQ:[function(){$.cu=!0
try{P.k5()}finally{$.b3=null
$.cu=!1
if($.aI!=null)$.cF().$1(P.e9())}},"$0","e9",0,0,1],
e4:function(a){var z=new P.dI(H.l(a,{func:1,ret:-1}))
if($.aI==null){$.b2=z
$.aI=z
if(!$.cu)$.cF().$1(P.e9())}else{$.b2.b=z
$.b2=z}},
k9:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.aI
if(z==null){P.e4(a)
$.b3=$.b2
return}y=new P.dI(a)
x=$.b3
if(x==null){y.b=z
$.b3=y
$.aI=y}else{y.b=x.b
x.b=y
$.b3=y
if(y.b==null)$.b2=y}},
kD:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.H
if(C.e===y){P.bT(null,null,C.e,a)
return}y.toString
P.bT(null,null,y,H.l(y.bl(a),z))},
bS:function(a,b,c,d,e){var z={}
z.a=d
P.k9(new P.k7(z,e))},
e2:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.H
if(y===c)return d.$0()
$.H=c
z=y
try{y=d.$0()
return y}finally{$.H=z}},
e3:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.H
if(y===c)return d.$1(e)
$.H=c
z=y
try{y=d.$1(e)
return y}finally{$.H=z}},
k8:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.H
if(y===c)return d.$2(e,f)
$.H=c
z=y
try{y=d.$2(e,f)
return y}finally{$.H=z}},
bT:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.bl(d):c.df(d,-1)
P.e4(d)},
iA:{"^":"n:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iz:{"^":"n:15;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iB:{"^":"n:0;a",
$0:function(){this.a.$0()}},
iC:{"^":"n:0;a",
$0:function(){this.a.$0()}},
jK:{"^":"b;a,0b,c",
cM:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b5(new P.jM(this,b),0),a)
else throw H.c(P.y("`setTimeout()` not found."))},
p:{
jL:function(a,b){var z=new P.jK(!0,0)
z.cM(a,b)
return z}}},
jM:{"^":"n:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
iF:{"^":"b;$ti"},
jF:{"^":"iF;a,$ti"},
aH:{"^":"b;0a,b,c,d,e,$ti",
dB:function(a){if(this.c!==6)return!0
return this.b.b.aF(H.l(this.d,{func:1,ret:P.Q,args:[P.b]}),a.a,P.Q,P.b)},
dw:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.p(this,1)}
w=this.b.b
if(H.bq(z,{func:1,args:[P.b,P.a1]}))return H.bW(w.dE(z,a.a,a.b,null,y,P.a1),x)
else return H.bW(w.aF(H.l(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aa:{"^":"b;be:a<,b,0d2:c<,$ti",
bV:function(a,b,c){var z,y,x,w
z=H.p(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.H
if(y!==C.e){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.k6(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aa(0,$.H,[c])
w=b==null?1:3
this.b4(new P.aH(x,w,a,b,[z,c]))
return x},
bU:function(a,b){return this.bV(a,null,b)},
b4:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isaH")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaa")
z=y.a
if(z<4){y.b4(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bT(null,null,z,H.l(new P.iU(this,a),{func:1,ret:-1}))}},
bb:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isaH")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaa")
y=u.a
if(y<4){u.bb(a)
return}this.a=y
this.c=u.c}z.a=this.ac(a)
y=this.b
y.toString
P.bT(null,null,y,H.l(new P.iZ(z,this),{func:1,ret:-1}))}},
aA:function(){var z=H.f(this.c,"$isaH")
this.c=null
return this.ac(z)},
ac:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
ar:function(a){var z,y,x
z=H.p(this,0)
H.bW(a,{futureOr:1,type:z})
y=this.$ti
if(H.aK(a,"$isaS",y,"$asaS"))if(H.aK(a,"$isaa",y,null))P.dL(a,this)
else P.iV(a,this)
else{x=this.aA()
H.z(a,z)
this.a=4
this.c=a
P.b1(this,x)}},
b6:function(a,b){var z
H.f(b,"$isa1")
z=this.aA()
this.a=8
this.c=new P.Y(a,b)
P.b1(this,z)},
$isaS:1,
p:{
iV:function(a,b){var z,y,x
b.a=1
try{a.bV(new P.iW(b),new P.iX(b),null)}catch(x){z=H.a4(x)
y=H.ba(x)
P.kD(new P.iY(b,z,y))}},
dL:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaa")
if(z>=4){y=b.aA()
b.a=a.a
b.c=a.c
P.b1(b,y)}else{y=H.f(b.c,"$isaH")
b.a=2
b.c=a
a.bb(y)}},
b1:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isY")
y=y.b
u=v.a
t=v.b
y.toString
P.bS(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.b1(z.a,b)}y=z.a
r=y.c
x.a=w
x.b=r
u=!w
if(u){t=b.c
t=(t&1)!==0||t===8}else t=!0
if(t){t=b.b
q=t.b
if(w){p=y.b
p.toString
p=p==q
if(!p)q.toString
else p=!0
p=!p}else p=!1
if(p){H.f(r,"$isY")
y=y.b
u=r.a
t=r.b
y.toString
P.bS(null,null,y,u,t)
return}o=$.H
if(o!=q)$.H=q
else o=null
y=b.c
if(y===8)new P.j1(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.j0(x,b,r).$0()}else if((y&2)!==0)new P.j_(z,x,b).$0()
if(o!=null)$.H=o
y=x.b
if(!!J.A(y).$isaS){if(y.a>=4){n=H.f(t.c,"$isaH")
t.c=null
b=t.ac(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dL(y,t)
return}}m=b.b
n=H.f(m.c,"$isaH")
m.c=null
b=m.ac(n)
y=x.a
u=x.b
if(!y){H.z(u,H.p(m,0))
m.a=4
m.c=u}else{H.f(u,"$isY")
m.a=8
m.c=u}z.a=m
y=m}}}},
iU:{"^":"n:0;a,b",
$0:function(){P.b1(this.a,this.b)}},
iZ:{"^":"n:0;a,b",
$0:function(){P.b1(this.b,this.a.a)}},
iW:{"^":"n:6;a",
$1:function(a){var z=this.a
z.a=0
z.ar(a)}},
iX:{"^":"n:16;a",
$2:function(a,b){H.f(b,"$isa1")
this.a.b6(a,b)},
$1:function(a){return this.$2(a,null)}},
iY:{"^":"n:0;a,b,c",
$0:function(){this.a.b6(this.b,this.c)}},
j1:{"^":"n:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bR(H.l(w.d,{func:1}),null)}catch(v){y=H.a4(v)
x=H.ba(v)
if(this.d){w=H.f(this.a.a.c,"$isY").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isY")
else u.b=new P.Y(y,x)
u.a=!0
return}if(!!J.A(z).$isaS){if(z instanceof P.aa&&z.gbe()>=4){if(z.gbe()===8){w=this.b
w.b=H.f(z.gd2(),"$isY")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.bU(new P.j2(t),null)
w.a=!1}}},
j2:{"^":"n:17;a",
$1:function(a){return this.a}},
j0:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.p(x,0)
v=H.z(this.c,w)
u=H.p(x,1)
this.a.b=x.b.b.aF(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a4(t)
y=H.ba(t)
x=this.a
x.b=new P.Y(z,y)
x.a=!0}}},
j_:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isY")
w=this.c
if(w.dB(z)&&w.e!=null){v=this.b
v.b=w.dw(z)
v.a=!1}}catch(u){y=H.a4(u)
x=H.ba(u)
w=H.f(this.a.a.c,"$isY")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.Y(y,x)
s.a=!0}}},
dI:{"^":"b;a,0b"},
i8:{"^":"b;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.aa(0,$.H,[P.B])
z.a=0
x=H.p(this,0)
w=H.l(new P.ia(z,this),{func:1,ret:-1,args:[x]})
H.l(new P.ib(z,y),{func:1,ret:-1})
W.aG(this.a,this.b,w,!1,x)
return y}},
ia:{"^":"n;a,b",
$1:function(a){H.z(a,H.p(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.p(this.b,0)]}}},
ib:{"^":"n:0;a,b",
$0:function(){this.b.ar(this.a.a)}},
i9:{"^":"b;"},
Y:{"^":"b;a,b",
k:function(a){return H.e(this.a)},
$isP:1},
jS:{"^":"b;",$ismA:1},
k7:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.ds()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.k(0)
throw x}},
jo:{"^":"jS;",
dF:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.e===$.H){a.$0()
return}P.e2(null,null,this,a,-1)}catch(x){z=H.a4(x)
y=H.ba(x)
P.bS(null,null,this,z,H.f(y,"$isa1"))}},
dG:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.e===$.H){a.$1(b)
return}P.e3(null,null,this,a,b,-1,c)}catch(x){z=H.a4(x)
y=H.ba(x)
P.bS(null,null,this,z,H.f(y,"$isa1"))}},
df:function(a,b){return new P.jq(this,H.l(a,{func:1,ret:b}),b)},
bl:function(a){return new P.jp(this,H.l(a,{func:1,ret:-1}))},
dg:function(a,b){return new P.jr(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
bR:function(a,b){H.l(a,{func:1,ret:b})
if($.H===C.e)return a.$0()
return P.e2(null,null,this,a,b)},
aF:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.H===C.e)return a.$1(b)
return P.e3(null,null,this,a,b,c,d)},
dE:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.H===C.e)return a.$2(b,c)
return P.k8(null,null,this,a,b,c,d,e,f)}},
jq:{"^":"n;a,b,c",
$0:function(){return this.a.bR(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jp:{"^":"n:1;a,b",
$0:function(){return this.a.dF(this.b)}},
jr:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.dG(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dk:function(a,b,c){H.bs(a)
return H.w(H.kg(a,new H.di(0,0,[b,c])),"$isdj",[b,c],"$asdj")},
O:function(a,b){return new H.di(0,0,[a,b])},
a0:function(a,b,c,d){return new P.j9(0,0,[d])},
h5:function(a,b,c){var z,y
if(P.cv(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.i([],[P.d])
y=$.bb()
C.a.l(y,a)
try{P.k4(a,z)}finally{if(0>=y.length)return H.m(y,-1)
y.pop()}y=P.dw(b,H.kw(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
ch:function(a,b,c){var z,y,x
if(P.cv(a))return b+"..."+c
z=new P.cq(b)
y=$.bb()
C.a.l(y,a)
try{x=z
x.a=P.dw(x.gU(),a,", ")}finally{if(0>=y.length)return H.m(y,-1)
y.pop()}y=z
y.a=y.gU()+c
y=z.gU()
return y.charCodeAt(0)==0?y:y},
cv:function(a){var z,y
for(z=0;y=$.bb(),z<y.length;++z)if(a===y[z])return!0
return!1},
k4:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[P.d],"$asa")
z=a.gw(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.e(z.gA(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.m(b,-1)
v=b.pop()
if(0>=b.length)return H.m(b,-1)
u=b.pop()}else{t=z.gA(z);++x
if(!z.t()){if(x<=4){C.a.l(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.m(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA(z);++x
for(;z.t();t=s,s=r){r=z.gA(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.m(b,-1)
y-=b.pop().length+2;--x}C.a.l(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.m(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.l(b,q)
C.a.l(b,u)
C.a.l(b,v)},
cl:function(a,b){var z,y,x
z=P.a0(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.N)(a),++x)z.l(0,H.z(a[x],b))
return z},
dn:function(a){var z,y,x
z={}
if(P.cv(a))return"{...}"
y=new P.cq("")
try{C.a.l($.bb(),a)
x=y
x.a=x.gU()+"{"
z.a=!0
J.f4(a,new P.hj(z,y))
z=y
z.a=z.gU()+"}"}finally{z=$.bb()
if(0>=z.length)return H.m(z,-1)
z.pop()}z=y.gU()
return z.charCodeAt(0)==0?z:z},
j9:{"^":"j4;a,0b,0c,0d,0e,0f,r,$ti",
gw:function(a){var z=new P.dP(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.f(z[b],"$isbp")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.f(y[b],"$isbp")!=null}else return this.cP(b)},
cP:function(a){var z=this.d
if(z==null)return!1
return this.av(this.b9(z,a),a)>=0},
l:function(a,b){var z,y
H.z(b,H.p(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cs()
this.b=z}return this.b3(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cs()
this.c=y}return this.b3(y,b)}else return this.cN(0,b)},
cN:function(a,b){var z,y,x
H.z(b,H.p(this,0))
z=this.d
if(z==null){z=P.cs()
this.d=z}y=this.b7(b)
x=z[y]
if(x==null)z[y]=[this.az(b)]
else{if(this.av(x,b)>=0)return!1
x.push(this.az(b))}return!0},
bQ:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bc(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bc(this.c,b)
else return this.cY(0,b)},
cY:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.b9(z,b)
x=this.av(y,b)
if(x<0)return!1
this.bg(y.splice(x,1)[0])
return!0},
a4:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.ax()}},
b3:function(a,b){H.z(b,H.p(this,0))
if(H.f(a[b],"$isbp")!=null)return!1
a[b]=this.az(b)
return!0},
bc:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isbp")
if(z==null)return!1
this.bg(z)
delete a[b]
return!0},
ax:function(){this.r=this.r+1&67108863},
az:function(a){var z,y
z=new P.bp(H.z(a,H.p(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.ax()
return z},
bg:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.ax()},
b7:function(a){return J.ag(a)&0x3ffffff},
b9:function(a,b){return a[this.b7(b)]},
av:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aA(a[y].a,b))return y
return-1},
p:{
cs:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bp:{"^":"b;a,0b,0c"},
dP:{"^":"b;a,b,0c,0d,$ti",
sb5:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aC(z))
else{z=this.c
if(z==null){this.sb5(null)
return!1}else{this.sb5(H.z(z.a,H.p(this,0)))
this.c=this.c.b
return!0}}},
$isaT:1,
p:{
ja:function(a,b,c){var z=new P.dP(a,b,[c])
z.c=a.e
return z}}},
j4:{"^":"hY;"},
hh:{"^":"jb;",$isk:1,$isa:1},
o:{"^":"b;$ti",
gw:function(a){return new H.dl(a,this.gj(a),0,[H.b9(this,a,"o",0)])},
q:function(a,b){return this.i(a,b)},
dv:function(a,b,c,d){var z,y,x
H.z(b,d)
H.l(c,{func:1,ret:d,args:[d,H.b9(this,a,"o",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.i(a,x))
if(z!==this.gj(a))throw H.c(P.aC(a))}return y},
k:function(a){return P.ch(a,"[","]")}},
dm:{"^":"S;"},
hj:{"^":"n:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
S:{"^":"b;$ti",
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.b9(this,a,"S",0),H.b9(this,a,"S",1)]})
for(z=J.by(this.gE(a));z.t();){y=z.gA(z)
b.$2(y,this.i(a,y))}},
gj:function(a){return J.aO(this.gE(a))},
k:function(a){return P.dn(a)},
$isI:1},
hZ:{"^":"b;$ti",
H:function(a,b){var z
for(z=J.by(H.w(b,"$isk",this.$ti,"$ask"));z.t();)this.l(0,z.gA(z))},
k:function(a){return P.ch(this,"{","}")},
$isk:1,
$ism0:1},
hY:{"^":"hZ;"},
jb:{"^":"b+o;"}}],["","",,P,{"^":"",
fW:function(a){if(a instanceof H.n)return a.k(0)
return"Instance of '"+H.aZ(a)+"'"},
bE:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.be(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fW(a)},
d8:function(a){return new P.iR(a)},
aM:function(a){H.c1(H.e(a))},
Q:{"^":"b;"},
"+bool":0,
bD:{"^":"b;a,b",
B:function(a,b){if(b==null)return!1
return b instanceof P.bD&&this.a===b.a&&!0},
J:function(a,b){return C.b.J(this.a,H.f(b,"$isbD").a)},
gv:function(a){var z=this.a
return(z^C.b.bd(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.fK(H.hP(this))
y=P.bf(H.hN(this))
x=P.bf(H.hJ(this))
w=P.bf(H.hK(this))
v=P.bf(H.hM(this))
u=P.bf(H.hO(this))
t=P.fL(H.hL(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isW:1,
$asW:function(){return[P.bD]},
p:{
fK:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fL:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bf:function(a){if(a>=10)return""+a
return"0"+a}}},
X:{"^":"D;"},
"+double":0,
aQ:{"^":"b;a",
S:function(a,b){return C.b.S(this.a,H.f(b,"$isaQ").a)},
B:function(a,b){if(b==null)return!1
return b instanceof P.aQ&&this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
J:function(a,b){return C.b.J(this.a,H.f(b,"$isaQ").a)},
k:function(a){var z,y,x,w,v
z=new P.fT()
y=this.a
if(y<0)return"-"+new P.aQ(0-y).k(0)
x=z.$1(C.b.N(y,6e7)%60)
w=z.$1(C.b.N(y,1e6)%60)
v=new P.fS().$1(y%1e6)
return""+C.b.N(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isW:1,
$asW:function(){return[P.aQ]},
p:{
fR:function(a,b,c,d,e,f){return new P.aQ(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fS:{"^":"n:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fT:{"^":"n:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
P:{"^":"b;"},
ds:{"^":"P;",
k:function(a){return"Throw of null."}},
aB:{"^":"P;a,b,c,d",
gat:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gas:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gat()+y+x
if(!this.a)return w
v=this.gas()
u=P.bE(this.b)
return w+v+": "+u},
p:{
cU:function(a,b,c){return new P.aB(!0,a,b,c)}}},
dt:{"^":"aB;e,f,a,b,c,d",
gat:function(){return"RangeError"},
gas:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bK:function(a,b,c){return new P.dt(null,null,!0,a,b,"Value not in range")},
bJ:function(a,b,c,d,e){return new P.dt(b,c,!0,a,d,"Invalid value")}}},
h3:{"^":"aB;e,j:f>,a,b,c,d",
gat:function(){return"RangeError"},
gas:function(){var z,y
z=H.M(this.b)
if(typeof z!=="number")return z.a7()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
E:function(a,b,c,d,e){var z=H.M(e==null?J.aO(b):e)
return new P.h3(b,z,!0,a,c,"Index out of range")}}},
ir:{"^":"P;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
y:function(a){return new P.ir(a)}}},
ip:{"^":"P;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
dF:function(a){return new P.ip(a)}}},
co:{"^":"P;a",
k:function(a){return"Bad state: "+this.a},
p:{
cp:function(a){return new P.co(a)}}},
fE:{"^":"P;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bE(z)+"."},
p:{
aC:function(a){return new P.fE(a)}}},
dv:{"^":"b;",
k:function(a){return"Stack Overflow"},
$isP:1},
fJ:{"^":"P;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iR:{"^":"b;a",
k:function(a){return"Exception: "+this.a}},
bg:{"^":"b;"},
B:{"^":"D;"},
"+int":0,
k:{"^":"b;$ti",
aG:["cn",function(a,b){var z=H.cz(this,"k",0)
return new H.dG(this,H.l(b,{func:1,ret:P.Q,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gw(this)
for(y=0;z.t();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.V(P.bJ(b,0,null,"index",null))
for(z=this.gw(this),y=0;z.t();){x=z.gA(z)
if(b===y)return x;++y}throw H.c(P.E(b,this,"index",null,y))},
k:function(a){return P.h5(this,"(",")")}},
aT:{"^":"b;$ti"},
a:{"^":"b;$ti",$isk:1},
"+List":0,
I:{"^":"b;$ti"},
F:{"^":"b;",
gv:function(a){return P.b.prototype.gv.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
D:{"^":"b;",$isW:1,
$asW:function(){return[P.D]}},
"+num":0,
b:{"^":";",
B:function(a,b){return this===b},
gv:function(a){return H.aY(this)},
k:function(a){return"Instance of '"+H.aZ(this)+"'"},
toString:function(){return this.k(this)}},
a1:{"^":"b;"},
d:{"^":"b;",$isW:1,
$asW:function(){return[P.d]},
$ishF:1},
"+String":0,
cq:{"^":"b;U:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dw:function(a,b,c){var z=J.by(b)
if(!z.t())return a
if(c.length===0){do a+=H.e(z.gA(z))
while(z.t())}else{a+=H.e(z.gA(z))
for(;z.t();)a=a+c+H.e(z.gA(z))}return a}}}}],["","",,W,{"^":"",
ea:function(){return document},
fU:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.p).K(z,a,b,c)
y.toString
z=W.t
z=new H.dG(new W.a3(y),H.l(new W.fV(),{func:1,ret:P.Q,args:[z]}),[z])
x=z.gw(z)
if(!x.t())H.V(H.h6())
w=x.gA(x)
if(x.t())H.V(H.h7())
return H.f(w,"$isR")},
d7:function(a){H.f(a,"$isK")
return"wheel"},
aR:function(a){var z,y,x
z="element tag unavailable"
try{y=J.f7(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a4(x)}return z},
iO:function(a,b){return document.createElement(a)},
bP:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dO:function(a,b,c,d){var z,y
z=W.bP(W.bP(W.bP(W.bP(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
e0:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.iI(a)
if(!!J.A(z).$isK)return z
return}else return H.f(a,"$isK")},
e6:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.H
if(z===C.e)return a
return z.dg(a,b)},
J:{"^":"R;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kH:{"^":"h;0j:length=","%":"AccessibleNodeList"},
fq:{"^":"J;",
k:function(a){return String(a)},
$isfq:1,
"%":"HTMLAnchorElement"},
kI:{"^":"J;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
cV:{"^":"J;",$iscV:1,"%":"HTMLBaseElement"},
fv:{"^":"h;","%":";Blob"},
bB:{"^":"J;",$isbB:1,"%":"HTMLBodyElement"},
cc:{"^":"J;0n:height=,0m:width=",
cb:function(a,b,c){var z=this.cU(a,b,P.kd(c,null))
return z},
cU:function(a,b,c){return a.getContext(b,c)},
$iscc:1,
"%":"HTMLCanvasElement"},
kN:{"^":"h;",
ai:function(a){return P.a_(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kO:{"^":"t;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fF:{"^":"cd;",$isfF:1,"%":"CSSNumericValue|CSSUnitValue"},
kQ:{"^":"fI;0j:length=","%":"CSSPerspective"},
ah:{"^":"h;",$isah:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fG:{"^":"iG;0j:length=",
aL:function(a,b){var z=this.cV(a,this.ap(a,b))
return z==null?"":z},
ap:function(a,b){var z,y
z=$.ep()
y=z[b]
if(typeof y==="string")return y
y=this.d6(a,b)
z[b]=y
return y},
d6:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fM()+b
if(z in a)return z
return b},
cV:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fH:{"^":"b;",
gn:function(a){return this.aL(a,"height")},
gm:function(a){return this.aL(a,"width")}},
cd:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fI:{"^":"h;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
kS:{"^":"cd;0j:length=","%":"CSSTransformValue"},
kT:{"^":"cd;0j:length=","%":"CSSUnparsedValue"},
kV:{"^":"h;0j:length=",
i:function(a,b){return a[b]},
"%":"DataTransferItemList"},
fN:{"^":"J;","%":"HTMLDivElement"},
fO:{"^":"t;",
d9:function(a,b){return a.adoptNode(b)},
cc:function(a,b){return a.getElementById(b)},
aE:function(a,b){return a.querySelector(b)},
gbM:function(a){return new W.bn(a,"mousedown",!1,[W.T])},
gbN:function(a){return new W.bn(a,"mousemove",!1,[W.T])},
gbO:function(a){return new W.bn(a,"mouseup",!1,[W.T])},
gbP:function(a){return new W.bn(a,H.u(W.d7(a)),!1,[W.aF])},
"%":"XMLDocument;Document"},
kW:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
fP:{"^":"h;",
dn:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
kX:{"^":"iK;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.w(c,"$isU",[P.D],"$asU")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[[P.U,P.D]]},
$isx:1,
$asx:function(){return[[P.U,P.D]]},
$aso:function(){return[[P.U,P.D]]},
$isk:1,
$ask:function(){return[[P.U,P.D]]},
$isa:1,
$asa:function(){return[[P.U,P.D]]},
$asq:function(){return[[P.U,P.D]]},
"%":"ClientRectList|DOMRectList"},
fQ:{"^":"h;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
B:function(a,b){var z
if(b==null)return!1
if(!H.aK(b,"$isU",[P.D],"$asU"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.j(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dO(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isU:1,
$asU:function(){return[P.D]},
"%":";DOMRectReadOnly"},
kY:{"^":"iM;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.u(c)
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[P.d]},
$isx:1,
$asx:function(){return[P.d]},
$aso:function(){return[P.d]},
$isk:1,
$ask:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"DOMStringList"},
kZ:{"^":"h;0j:length=","%":"DOMTokenList"},
R:{"^":"t;0dH:tagName=",
gdd:function(a){return new W.iN(a)},
k:function(a){return a.localName},
K:["ak",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.d6
if(z==null){z=H.i([],[W.a8])
y=new W.dq(z)
C.a.l(z,W.dM(null))
C.a.l(z,W.dX())
$.d6=y
d=y}else d=z
z=$.d5
if(z==null){z=new W.e_(d)
$.d5=z
c=z}else{z.a=d
c=z}}if($.ac==null){z=document
y=z.implementation
y=(y&&C.I).dn(y,"")
$.ac=y
$.ce=y.createRange()
y=$.ac
y.toString
y=y.createElement("base")
H.f(y,"$iscV")
y.href=z.baseURI
z=$.ac.head;(z&&C.J).F(z,y)}z=$.ac
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.f(y,"$isbB")}z=$.ac
if(!!this.$isbB)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ac.body;(z&&C.p).F(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.u(C.U,a.tagName)){z=$.ce;(z&&C.B).cd(z,x)
z=$.ce
w=(z&&C.B).dl(z,b)}else{x.innerHTML=b
w=$.ac.createDocumentFragment()
for(z=J.j(w);y=x.firstChild,y!=null;)z.F(w,y)}z=$.ac.body
if(x==null?z!=null:x!==z)J.cO(x)
c.aP(w)
C.j.d9(document,w)
return w},function(a,b,c){return this.K(a,b,c,null)},"dm",null,null,"gdS",5,5,null],
cf:function(a,b,c,d){a.textContent=null
this.F(a,this.K(a,b,c,d))},
ce:function(a,b){return this.cf(a,b,null,null)},
Y:function(a,b){return a.getAttribute(b)},
cZ:function(a,b){return a.removeAttribute(b)},
gbM:function(a){return new W.bO(a,"mousedown",!1,[W.T])},
gbN:function(a){return new W.bO(a,"mousemove",!1,[W.T])},
gbO:function(a){return new W.bO(a,"mouseup",!1,[W.T])},
gbP:function(a){return new W.bO(a,H.u(W.d7(a)),!1,[W.aF])},
$isR:1,
"%":";Element"},
fV:{"^":"n:18;",
$1:function(a){return!!J.A(H.f(a,"$ist")).$isR}},
l0:{"^":"J;0n:height=,0m:width=","%":"HTMLEmbedElement"},
ai:{"^":"h;",$isai:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
K:{"^":"h;",
d8:function(a,b,c,d){H.l(c,{func:1,args:[W.ai]})
if(c!=null)this.cO(a,b,c,!1)},
cO:function(a,b,c,d){return a.addEventListener(b,H.b5(H.l(c,{func:1,args:[W.ai]}),1),!1)},
$isK:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dU|dV|dY|dZ"},
aj:{"^":"fv;",$isaj:1,"%":"File"},
lh:{"^":"iT;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isaj")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aj]},
$isx:1,
$asx:function(){return[W.aj]},
$aso:function(){return[W.aj]},
$isk:1,
$ask:function(){return[W.aj]},
$isa:1,
$asa:function(){return[W.aj]},
$asq:function(){return[W.aj]},
"%":"FileList"},
li:{"^":"K;0j:length=","%":"FileWriter"},
ll:{"^":"J;0j:length=","%":"HTMLFormElement"},
ak:{"^":"h;",$isak:1,"%":"Gamepad"},
h1:{"^":"J;","%":"HTMLHeadElement"},
lm:{"^":"h;0j:length=","%":"History"},
ln:{"^":"j6;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$ist")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.t]},
$isx:1,
$asx:function(){return[W.t]},
$aso:function(){return[W.t]},
$isk:1,
$ask:function(){return[W.t]},
$isa:1,
$asa:function(){return[W.t]},
$asq:function(){return[W.t]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
h2:{"^":"fO;","%":"HTMLDocument"},
lo:{"^":"J;0n:height=,0m:width=","%":"HTMLIFrameElement"},
lp:{"^":"h;0n:height=,0m:width=","%":"ImageBitmap"},
lq:{"^":"h;0n:height=,0m:width=","%":"ImageData"},
lr:{"^":"J;0n:height=,0m:width=","%":"HTMLImageElement"},
cg:{"^":"J;0n:height=,0m:width=",$iscg:1,"%":"HTMLInputElement"},
aU:{"^":"dE;",$isaU:1,"%":"KeyboardEvent"},
hi:{"^":"h;",
k:function(a){return String(a)},
$ishi:1,
"%":"Location"},
hm:{"^":"J;","%":"HTMLAudioElement;HTMLMediaElement"},
lA:{"^":"h;0j:length=","%":"MediaList"},
lB:{"^":"jd;",
i:function(a,b){return P.a_(a.get(H.u(b)))},
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gE:function(a){var z=H.i([],[P.d])
this.C(a,new W.ho(z))
return z},
gj:function(a){return a.size},
$asS:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"MIDIInputMap"},
ho:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lC:{"^":"je;",
i:function(a,b){return P.a_(a.get(H.u(b)))},
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gE:function(a){var z=H.i([],[P.d])
this.C(a,new W.hp(z))
return z},
gj:function(a){return a.size},
$asS:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
hp:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
an:{"^":"h;",$isan:1,"%":"MimeType"},
lD:{"^":"jg;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isan")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.an]},
$isx:1,
$asx:function(){return[W.an]},
$aso:function(){return[W.an]},
$isk:1,
$ask:function(){return[W.an]},
$isa:1,
$asa:function(){return[W.an]},
$asq:function(){return[W.an]},
"%":"MimeTypeArray"},
T:{"^":"dE;",
gbL:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.aX(a.offsetX,a.offsetY,[P.D])
else{z=a.target
if(!J.A(W.e0(z)).$isR)throw H.c(P.y("offsetX is only supported on elements"))
y=H.f(W.e0(z),"$isR")
z=a.clientX
x=a.clientY
w=[P.D]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.w(new P.aX(u,v,w),"$isaX",w,"$asaX")
if(typeof z!=="number")return z.aS()
if(typeof x!=="number")return x.aS()
return new P.aX(C.r.bW(z-u),C.r.bW(x-v),w)}},
$isT:1,
"%":";DragEvent|MouseEvent"},
a3:{"^":"hh;a",
ga9:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.cp("No elements"))
if(y>1)throw H.c(P.cp("More than one element"))
return z.firstChild},
H:function(a,b){var z,y,x,w,v
H.w(b,"$isk",[W.t],"$ask")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.j(y),v=0;v<x;++v)w.F(y,z.firstChild)
return},
h:function(a,b,c){var z,y
H.f(c,"$ist")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.m(y,b)
J.eK(z,c,y[b])},
gw:function(a){var z=this.a.childNodes
return new W.da(z,z.length,-1,[H.b9(C.W,z,"q",0)])},
gj:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.m(z,b)
return z[b]},
$aso:function(){return[W.t]},
$ask:function(){return[W.t]},
$asa:function(){return[W.t]}},
t:{"^":"K;0dC:previousSibling=",
dD:function(a){var z=a.parentNode
if(z!=null)J.bv(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.cm(a):z},
F:function(a,b){return a.appendChild(b)},
d_:function(a,b){return a.removeChild(b)},
d0:function(a,b,c){return a.replaceChild(b,c)},
$ist:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hz:{"^":"ji;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$ist")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.t]},
$isx:1,
$asx:function(){return[W.t]},
$aso:function(){return[W.t]},
$isk:1,
$ask:function(){return[W.t]},
$isa:1,
$asa:function(){return[W.t]},
$asq:function(){return[W.t]},
"%":"NodeList|RadioNodeList"},
lM:{"^":"J;0n:height=,0m:width=","%":"HTMLObjectElement"},
lO:{"^":"K;0n:height=,0m:width=","%":"OffscreenCanvas"},
lP:{"^":"h;0n:height=,0m:width=","%":"PaintSize"},
ap:{"^":"h;0j:length=",$isap:1,"%":"Plugin"},
lR:{"^":"jm;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isap")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ap]},
$isx:1,
$asx:function(){return[W.ap]},
$aso:function(){return[W.ap]},
$isk:1,
$ask:function(){return[W.ap]},
$isa:1,
$asa:function(){return[W.ap]},
$asq:function(){return[W.ap]},
"%":"PluginArray"},
lT:{"^":"T;0n:height=,0m:width=","%":"PointerEvent"},
hR:{"^":"h;",
dl:function(a,b){return a.createContextualFragment(b)},
cd:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
lY:{"^":"js;",
i:function(a,b){return P.a_(a.get(H.u(b)))},
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gE:function(a){var z=H.i([],[P.d])
this.C(a,new W.hV(z))
return z},
gj:function(a){return a.size},
$asS:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"RTCStatsReport"},
hV:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lZ:{"^":"h;0n:height=,0m:width=","%":"Screen"},
m_:{"^":"J;0j:length=","%":"HTMLSelectElement"},
aq:{"^":"K;",$isaq:1,"%":"SourceBuffer"},
m1:{"^":"dV;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isaq")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aq]},
$isx:1,
$asx:function(){return[W.aq]},
$aso:function(){return[W.aq]},
$isk:1,
$ask:function(){return[W.aq]},
$isa:1,
$asa:function(){return[W.aq]},
$asq:function(){return[W.aq]},
"%":"SourceBufferList"},
ar:{"^":"h;",$isar:1,"%":"SpeechGrammar"},
m2:{"^":"jy;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isar")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ar]},
$isx:1,
$asx:function(){return[W.ar]},
$aso:function(){return[W.ar]},
$isk:1,
$ask:function(){return[W.ar]},
$isa:1,
$asa:function(){return[W.ar]},
$asq:function(){return[W.ar]},
"%":"SpeechGrammarList"},
as:{"^":"h;0j:length=",$isas:1,"%":"SpeechRecognitionResult"},
m5:{"^":"jB;",
i:function(a,b){return this.ba(a,H.u(b))},
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.cX(a,z)
if(y==null)return
b.$2(y,this.ba(a,y))}},
gE:function(a){var z=H.i([],[P.d])
this.C(a,new W.i7(z))
return z},
gj:function(a){return a.length},
ba:function(a,b){return a.getItem(b)},
cX:function(a,b){return a.key(b)},
$asS:function(){return[P.d,P.d]},
$isI:1,
$asI:function(){return[P.d,P.d]},
"%":"Storage"},
i7:{"^":"n:19;a",
$2:function(a,b){return C.a.l(this.a,a)}},
at:{"^":"h;",$isat:1,"%":"CSSStyleSheet|StyleSheet"},
ic:{"^":"J;",
K:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ak(a,b,c,d)
z=W.fU("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a3(y).H(0,new W.a3(z))
return y},
"%":"HTMLTableElement"},
m8:{"^":"J;",
K:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ak(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.K(z.createElement("table"),b,c,d)
z.toString
z=new W.a3(z)
x=z.ga9(z)
x.toString
z=new W.a3(x)
w=z.ga9(z)
y.toString
w.toString
new W.a3(y).H(0,new W.a3(w))
return y},
"%":"HTMLTableRowElement"},
m9:{"^":"J;",
K:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ak(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.K(z.createElement("table"),b,c,d)
z.toString
z=new W.a3(z)
x=z.ga9(z)
y.toString
x.toString
new W.a3(y).H(0,new W.a3(x))
return y},
"%":"HTMLTableSectionElement"},
dy:{"^":"J;",$isdy:1,"%":"HTMLTemplateElement"},
ma:{"^":"h;0m:width=","%":"TextMetrics"},
au:{"^":"K;",$isau:1,"%":"TextTrack"},
av:{"^":"K;",$isav:1,"%":"TextTrackCue|VTTCue"},
mb:{"^":"jJ;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isav")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.av]},
$isx:1,
$asx:function(){return[W.av]},
$aso:function(){return[W.av]},
$isk:1,
$ask:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$asq:function(){return[W.av]},
"%":"TextTrackCueList"},
mc:{"^":"dZ;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isau")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.au]},
$isx:1,
$asx:function(){return[W.au]},
$aso:function(){return[W.au]},
$isk:1,
$ask:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$asq:function(){return[W.au]},
"%":"TextTrackList"},
me:{"^":"h;0j:length=","%":"TimeRanges"},
aw:{"^":"h;",$isaw:1,"%":"Touch"},
mf:{"^":"jO;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isaw")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aw]},
$isx:1,
$asx:function(){return[W.aw]},
$aso:function(){return[W.aw]},
$isk:1,
$ask:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$asq:function(){return[W.aw]},
"%":"TouchList"},
mg:{"^":"h;0j:length=","%":"TrackDefaultList"},
dE:{"^":"ai;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mu:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
mw:{"^":"hm;0n:height=,0m:width=","%":"HTMLVideoElement"},
mx:{"^":"K;0j:length=","%":"VideoTrackList"},
my:{"^":"K;0n:height=,0m:width=","%":"VisualViewport"},
mz:{"^":"h;0m:width=","%":"VTTRegion"},
aF:{"^":"T;",
gdr:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.y("deltaY is not supported"))},
$isaF:1,
"%":"WheelEvent"},
iv:{"^":"K;",
gdc:function(a){var z,y,x
z=P.D
y=new P.aa(0,$.H,[z])
x=H.l(new W.iw(new P.jF(y,[z])),{func:1,ret:-1,args:[P.D]})
this.cT(a)
this.d1(a,W.e6(x,z))
return y},
d1:function(a,b){return a.requestAnimationFrame(H.b5(H.l(b,{func:1,ret:-1,args:[P.D]}),1))},
cT:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdH:1,
"%":"DOMWindow|Window"},
iw:{"^":"n:20;a",
$1:function(a){var z=this.a
a=H.bW(H.cC(a),{futureOr:1,type:H.p(z,0)})
z=z.a
if(z.a!==0)H.V(P.cp("Future already completed"))
z.ar(a)}},
dJ:{"^":"t;",$isdJ:1,"%":"Attr"},
mF:{"^":"jU;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isah")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ah]},
$isx:1,
$asx:function(){return[W.ah]},
$aso:function(){return[W.ah]},
$isk:1,
$ask:function(){return[W.ah]},
$isa:1,
$asa:function(){return[W.ah]},
$asq:function(){return[W.ah]},
"%":"CSSRuleList"},
mG:{"^":"fQ;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
B:function(a,b){var z
if(b==null)return!1
if(!H.aK(b,"$isU",[P.D],"$asU"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.j(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dO(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mH:{"^":"jW;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isak")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ak]},
$isx:1,
$asx:function(){return[W.ak]},
$aso:function(){return[W.ak]},
$isk:1,
$ask:function(){return[W.ak]},
$isa:1,
$asa:function(){return[W.ak]},
$asq:function(){return[W.ak]},
"%":"GamepadList"},
mM:{"^":"jY;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$ist")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.t]},
$isx:1,
$asx:function(){return[W.t]},
$aso:function(){return[W.t]},
$isk:1,
$ask:function(){return[W.t]},
$isa:1,
$asa:function(){return[W.t]},
$asq:function(){return[W.t]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mN:{"^":"k_;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isas")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.as]},
$isx:1,
$asx:function(){return[W.as]},
$aso:function(){return[W.as]},
$isk:1,
$ask:function(){return[W.as]},
$isa:1,
$asa:function(){return[W.as]},
$asq:function(){return[W.as]},
"%":"SpeechRecognitionResultList"},
mO:{"^":"k1;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isat")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.at]},
$isx:1,
$asx:function(){return[W.at]},
$aso:function(){return[W.at]},
$isk:1,
$ask:function(){return[W.at]},
$isa:1,
$asa:function(){return[W.at]},
$asq:function(){return[W.at]},
"%":"StyleSheetList"},
iD:{"^":"dm;cS:a<",
C:function(a,b){var z,y,x,w,v,u
H.l(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gE(this),y=z.length,x=this.a,w=J.j(x),v=0;v<z.length;z.length===y||(0,H.N)(z),++v){u=z[v]
b.$2(u,w.Y(x,u))}},
gE:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.i([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.m(z,w)
v=H.f(z[w],"$isdJ")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asS:function(){return[P.d,P.d]},
$asI:function(){return[P.d,P.d]}},
iN:{"^":"iD;a",
i:function(a,b){return J.c8(this.a,H.u(b))},
gj:function(a){return this.gE(this).length}},
bn:{"^":"i8;a,b,c,$ti"},
bO:{"^":"bn;a,b,c,$ti"},
iP:{"^":"i9;a,b,c,d,e,$ti",p:{
aG:function(a,b,c,d,e){var z=W.e6(new W.iQ(c),W.ai)
if(z!=null&&!0)J.eL(a,b,z,!1)
return new W.iP(0,a,b,z,!1,[e])}}},
iQ:{"^":"n:21;a",
$1:function(a){return this.a.$1(H.f(a,"$isai"))}},
bo:{"^":"b;a",
cK:function(a){var z,y
z=$.cG()
if(z.a===0){for(y=0;y<262;++y)z.h(0,C.T[y],W.km())
for(y=0;y<12;++y)z.h(0,C.u[y],W.kn())}},
V:function(a){return $.eD().u(0,W.aR(a))},
P:function(a,b,c){var z,y,x
z=W.aR(a)
y=$.cG()
x=y.i(0,H.e(z)+"::"+b)
if(x==null)x=y.i(0,"*::"+b)
if(x==null)return!1
return H.bU(x.$4(a,b,c,this))},
$isa8:1,
p:{
dM:function(a){var z,y
z=document.createElement("a")
y=new W.jt(z,window.location)
y=new W.bo(y)
y.cK(a)
return y},
mK:[function(a,b,c,d){H.f(a,"$isR")
H.u(b)
H.u(c)
H.f(d,"$isbo")
return!0},"$4","km",16,0,12],
mL:[function(a,b,c,d){var z,y,x
H.f(a,"$isR")
H.u(b)
H.u(c)
z=H.f(d,"$isbo").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kn",16,0,12]}},
q:{"^":"b;$ti",
gw:function(a){return new W.da(a,this.gj(a),-1,[H.b9(this,a,"q",0)])}},
dq:{"^":"b;a",
V:function(a){return C.a.bi(this.a,new W.hB(a))},
P:function(a,b,c){return C.a.bi(this.a,new W.hA(a,b,c))},
$isa8:1},
hB:{"^":"n:9;a",
$1:function(a){return H.f(a,"$isa8").V(this.a)}},
hA:{"^":"n:9;a,b,c",
$1:function(a){return H.f(a,"$isa8").P(this.a,this.b,this.c)}},
ju:{"^":"b;",
cL:function(a,b,c,d){var z,y,x
this.a.H(0,c)
z=b.aG(0,new W.jv())
y=b.aG(0,new W.jw())
this.b.H(0,z)
x=this.c
x.H(0,C.V)
x.H(0,y)},
V:function(a){return this.a.u(0,W.aR(a))},
P:["cp",function(a,b,c){var z,y
z=W.aR(a)
y=this.c
if(y.u(0,H.e(z)+"::"+b))return this.d.da(c)
else if(y.u(0,"*::"+b))return this.d.da(c)
else{y=this.b
if(y.u(0,H.e(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.e(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}],
$isa8:1},
jv:{"^":"n:10;",
$1:function(a){return!C.a.u(C.u,H.u(a))}},
jw:{"^":"n:10;",
$1:function(a){return C.a.u(C.u,H.u(a))}},
jG:{"^":"ju;e,a,b,c,d",
P:function(a,b,c){if(this.cp(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.c8(a,"template")==="")return this.e.u(0,b)
return!1},
p:{
dX:function(){var z,y,x,w,v
z=P.d
y=P.cl(C.t,z)
x=H.p(C.t,0)
w=H.l(new W.jH(),{func:1,ret:z,args:[x]})
v=H.i(["TEMPLATE"],[z])
y=new W.jG(y,P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z),null)
y.cL(null,new H.hk(C.t,w,[x,z]),v,null)
return y}}},
jH:{"^":"n:22;",
$1:function(a){return"TEMPLATE::"+H.e(H.u(a))}},
jE:{"^":"b;",
V:function(a){var z=J.A(a)
if(!!z.$isdu)return!1
z=!!z.$isG
if(z&&W.aR(a)==="foreignObject")return!1
if(z)return!0
return!1},
P:function(a,b,c){if(b==="is"||C.i.ci(b,"on"))return!1
return this.V(a)},
$isa8:1},
da:{"^":"b;a,b,c,0d,$ti",
sb8:function(a){this.d=H.z(a,H.p(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sb8(J.bc(this.a,z))
this.c=z
return!0}this.sb8(null)
this.c=y
return!1},
gA:function(a){return this.d},
$isaT:1},
iH:{"^":"b;a",$isK:1,$isdH:1,p:{
iI:function(a){if(a===window)return H.f(a,"$isdH")
else return new W.iH(a)}}},
a8:{"^":"b;"},
jt:{"^":"b;a,b",$ismt:1},
e_:{"^":"b;a",
aP:function(a){new W.jR(this).$2(a,null)},
a3:function(a,b){if(b==null)J.cO(a)
else J.bv(b,a)},
d4:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.f5(a)
x=J.c8(y.gcS(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a4(t)}v="element unprintable"
try{v=J.be(a)}catch(t){H.a4(t)}try{u=W.aR(a)
this.d3(H.f(a,"$isR"),b,z,v,u,H.f(y,"$isI"),H.u(x))}catch(t){if(H.a4(t) instanceof P.aB)throw t
else{this.a3(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
d3:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a3(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.V(a)){this.a3(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.P(a,"is",g)){this.a3(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gE(f)
y=H.i(z.slice(0),[H.p(z,0)])
for(x=f.gE(f).length-1,z=f.a,w=J.j(z);x>=0;--x){if(x>=y.length)return H.m(y,x)
v=y[x]
if(!this.a.P(a,J.fh(v),w.Y(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.Y(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.Y(z,v)
w.cZ(z,v)}}if(!!J.A(a).$isdy)this.aP(a.content)},
$islK:1},
jR:{"^":"n:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.d4(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a3(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.f6(z)}catch(w){H.a4(w)
v=H.f(z,"$ist")
if(x){u=v.parentNode
if(u!=null)J.bv(u,v)}else J.bv(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.f(y,"$ist")}}},
iG:{"^":"h+fH;"},
iJ:{"^":"h+o;"},
iK:{"^":"iJ+q;"},
iL:{"^":"h+o;"},
iM:{"^":"iL+q;"},
iS:{"^":"h+o;"},
iT:{"^":"iS+q;"},
j5:{"^":"h+o;"},
j6:{"^":"j5+q;"},
jd:{"^":"h+S;"},
je:{"^":"h+S;"},
jf:{"^":"h+o;"},
jg:{"^":"jf+q;"},
jh:{"^":"h+o;"},
ji:{"^":"jh+q;"},
jl:{"^":"h+o;"},
jm:{"^":"jl+q;"},
js:{"^":"h+S;"},
dU:{"^":"K+o;"},
dV:{"^":"dU+q;"},
jx:{"^":"h+o;"},
jy:{"^":"jx+q;"},
jB:{"^":"h+S;"},
jI:{"^":"h+o;"},
jJ:{"^":"jI+q;"},
dY:{"^":"K+o;"},
dZ:{"^":"dY+q;"},
jN:{"^":"h+o;"},
jO:{"^":"jN+q;"},
jT:{"^":"h+o;"},
jU:{"^":"jT+q;"},
jV:{"^":"h+o;"},
jW:{"^":"jV+q;"},
jX:{"^":"h+o;"},
jY:{"^":"jX+q;"},
jZ:{"^":"h+o;"},
k_:{"^":"jZ+q;"},
k0:{"^":"h+o;"},
k1:{"^":"k0+q;"}}],["","",,P,{"^":"",
a_:function(a){var z,y,x,w,v
if(a==null)return
z=P.O(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.N)(y),++w){v=H.u(y[w])
z.h(0,v,a[v])}return z},
kd:function(a,b){var z={}
a.C(0,new P.ke(z))
return z},
d3:function(){var z=$.d2
if(z==null){z=J.c4(window.navigator.userAgent,"Opera",0)
$.d2=z}return z},
fM:function(){var z,y
z=$.d_
if(z!=null)return z
y=$.d0
if(y==null){y=J.c4(window.navigator.userAgent,"Firefox",0)
$.d0=y}if(y)z="-moz-"
else{y=$.d1
if(y==null){y=!P.d3()&&J.c4(window.navigator.userAgent,"Trident/",0)
$.d1=y}if(y)z="-ms-"
else z=P.d3()?"-o-":"-webkit-"}$.d_=z
return z},
ke:{"^":"n:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
dN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
aX:{"^":"b;X:a>,R:b>,$ti",
k:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
B:function(a,b){if(b==null)return!1
return H.aK(b,"$isaX",[P.D],null)&&this.a==J.bz(b)&&this.b==b.gR(b)},
gv:function(a){var z,y,x
z=J.ag(this.a)
y=J.ag(this.b)
y=P.dN(P.dN(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
jn:{"^":"b;"},
U:{"^":"jn;$ti"}}],["","",,P,{"^":"",fr:{"^":"h;",$isfr:1,"%":"SVGAnimatedLength"},l1:{"^":"G;0n:height=,0m:width=","%":"SVGFEBlendElement"},l2:{"^":"G;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},l3:{"^":"G;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},l4:{"^":"G;0n:height=,0m:width=","%":"SVGFECompositeElement"},l5:{"^":"G;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},l6:{"^":"G;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},l7:{"^":"G;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},l8:{"^":"G;0n:height=,0m:width=","%":"SVGFEFloodElement"},l9:{"^":"G;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},la:{"^":"G;0n:height=,0m:width=","%":"SVGFEImageElement"},lb:{"^":"G;0n:height=,0m:width=","%":"SVGFEMergeElement"},lc:{"^":"G;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},ld:{"^":"G;0n:height=,0m:width=","%":"SVGFEOffsetElement"},le:{"^":"G;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},lf:{"^":"G;0n:height=,0m:width=","%":"SVGFETileElement"},lg:{"^":"G;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},lj:{"^":"G;0n:height=,0m:width=","%":"SVGFilterElement"},lk:{"^":"bh;0n:height=,0m:width=","%":"SVGForeignObjectElement"},h0:{"^":"bh;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bh:{"^":"G;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},ls:{"^":"bh;0n:height=,0m:width=","%":"SVGImageElement"},aV:{"^":"h;",$isaV:1,"%":"SVGLength"},lx:{"^":"j8;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.O(a,b)},
h:function(a,b,c){H.f(c,"$isaV")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
O:function(a,b){return a.getItem(b)},
$aso:function(){return[P.aV]},
$isk:1,
$ask:function(){return[P.aV]},
$isa:1,
$asa:function(){return[P.aV]},
$asq:function(){return[P.aV]},
"%":"SVGLengthList"},ly:{"^":"G;0n:height=,0m:width=","%":"SVGMaskElement"},aW:{"^":"h;",$isaW:1,"%":"SVGNumber"},lL:{"^":"jk;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.O(a,b)},
h:function(a,b,c){H.f(c,"$isaW")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
O:function(a,b){return a.getItem(b)},
$aso:function(){return[P.aW]},
$isk:1,
$ask:function(){return[P.aW]},
$isa:1,
$asa:function(){return[P.aW]},
$asq:function(){return[P.aW]},
"%":"SVGNumberList"},lQ:{"^":"G;0n:height=,0m:width=","%":"SVGPatternElement"},lS:{"^":"h;0j:length=","%":"SVGPointList"},lU:{"^":"h;0n:height=,0m:width=","%":"SVGRect"},lV:{"^":"h0;0n:height=,0m:width=","%":"SVGRectElement"},du:{"^":"G;",$isdu:1,"%":"SVGScriptElement"},m6:{"^":"jD;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.O(a,b)},
h:function(a,b,c){H.u(c)
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
O:function(a,b){return a.getItem(b)},
$aso:function(){return[P.d]},
$isk:1,
$ask:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"SVGStringList"},G:{"^":"R;",
K:function(a,b,c,d){var z,y,x,w,v,u
z=H.i([],[W.a8])
C.a.l(z,W.dM(null))
C.a.l(z,W.dX())
C.a.l(z,new W.jE())
c=new W.e_(new W.dq(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).dm(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a3(w)
u=z.ga9(z)
for(z=J.j(v);x=u.firstChild,x!=null;)z.F(v,x)
return v},
$isG:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},m7:{"^":"bh;0n:height=,0m:width=","%":"SVGSVGElement"},b_:{"^":"h;",$isb_:1,"%":"SVGTransform"},mh:{"^":"jQ;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.O(a,b)},
h:function(a,b,c){H.f(c,"$isb_")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
O:function(a,b){return a.getItem(b)},
$aso:function(){return[P.b_]},
$isk:1,
$ask:function(){return[P.b_]},
$isa:1,
$asa:function(){return[P.b_]},
$asq:function(){return[P.b_]},
"%":"SVGTransformList"},mv:{"^":"bh;0n:height=,0m:width=","%":"SVGUseElement"},j7:{"^":"h+o;"},j8:{"^":"j7+q;"},jj:{"^":"h+o;"},jk:{"^":"jj+q;"},jC:{"^":"h+o;"},jD:{"^":"jC+q;"},jP:{"^":"h+o;"},jQ:{"^":"jP+q;"}}],["","",,P,{"^":"",ad:{"^":"b;",$isk:1,
$ask:function(){return[P.X]},
$isa:1,
$asa:function(){return[P.X]},
$isil:1}}],["","",,P,{"^":"",kJ:{"^":"h;0j:length=","%":"AudioBuffer"},kK:{"^":"iE;",
i:function(a,b){return P.a_(a.get(H.u(b)))},
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gE:function(a){var z=H.i([],[P.d])
this.C(a,new P.ft(z))
return z},
gj:function(a){return a.size},
$asS:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"AudioParamMap"},ft:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},kL:{"^":"K;0j:length=","%":"AudioTrackList"},fu:{"^":"K;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lN:{"^":"fu;0j:length=","%":"OfflineAudioContext"},iE:{"^":"h+S;"}}],["","",,P,{"^":"",fx:{"^":"h;",$isfx:1,"%":"WebGLBuffer"},h_:{"^":"h;",$ish_:1,"%":"WebGLFramebuffer"},hQ:{"^":"h;",$ishQ:1,"%":"WebGLProgram"},lW:{"^":"h;",
bh:function(a,b){return a.activeTexture(b)},
bj:function(a,b,c){return a.attachShader(b,c)},
bk:function(a,b,c){return a.bindBuffer(b,c)},
bm:function(a,b,c){return a.bindFramebuffer(b,c)},
bn:function(a,b,c){return a.bindTexture(b,c)},
bo:function(a,b){return a.blendEquation(b)},
bp:function(a,b,c){return a.blendFunc(b,c)},
bq:function(a,b,c,d){return a.bufferData(b,c,d)},
br:function(a,b){return a.checkFramebufferStatus(b)},
bs:function(a,b){return a.clear(b)},
bt:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bu:function(a,b){return a.compileShader(b)},
bv:function(a){return a.createBuffer()},
bw:function(a){return a.createFramebuffer()},
bx:function(a){return a.createProgram()},
by:function(a,b){return a.createShader(b)},
bz:function(a){return a.createTexture()},
bB:function(a,b){return a.depthMask(b)},
bC:function(a,b){return a.disable(b)},
bD:function(a,b,c,d){return a.drawArrays(b,c,d)},
bE:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bF:function(a,b){return a.enable(b)},
bG:function(a,b){return a.enableVertexAttribArray(b)},
bI:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
ai:function(a){return P.a_(a.getContextAttributes())},
aH:function(a){return a.getError()},
aJ:function(a,b){return a.getProgramInfoLog(b)},
aK:function(a,b,c){return a.getProgramParameter(b,c)},
aM:function(a,b){return a.getShaderInfoLog(b)},
aN:function(a,b,c){return a.getShaderParameter(b,c)},
aO:function(a,b,c){return a.getUniformLocation(b,c)},
bK:function(a,b){return a.linkProgram(b)},
aQ:function(a,b,c){return a.shaderSource(b,c)},
aR:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bS:function(a,b,c,d){return a.texParameterf(b,c,d)},
bT:function(a,b,c,d){return a.texParameteri(b,c,d)},
bX:function(a,b,c){return a.uniform1f(b,c)},
bY:function(a,b,c){return a.uniform1fv(b,c)},
bZ:function(a,b,c){return a.uniform1i(b,c)},
c_:function(a,b,c){return a.uniform1iv(b,c)},
c0:function(a,b,c){return a.uniform2fv(b,c)},
c1:function(a,b,c){return a.uniform3fv(b,c)},
c2:function(a,b,c){return a.uniform4fv(b,c)},
c3:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c4:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c5:function(a,b){return a.useProgram(b)},
c6:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
c8:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},lX:{"^":"h;",
de:function(a,b){return a.beginTransformFeedback(b)},
dh:function(a,b){return a.bindVertexArray(b)},
dq:function(a){return a.createVertexArray()},
ds:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dt:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
du:function(a){return a.endTransformFeedback()},
dI:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
dL:function(a,b,c,d){this.d7(a,b,H.w(c,"$isa",[P.d],"$asa"),d)
return},
d7:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dM:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bh:function(a,b){return a.activeTexture(b)},
bj:function(a,b,c){return a.attachShader(b,c)},
bk:function(a,b,c){return a.bindBuffer(b,c)},
bm:function(a,b,c){return a.bindFramebuffer(b,c)},
bn:function(a,b,c){return a.bindTexture(b,c)},
bo:function(a,b){return a.blendEquation(b)},
bp:function(a,b,c){return a.blendFunc(b,c)},
bq:function(a,b,c,d){return a.bufferData(b,c,d)},
br:function(a,b){return a.checkFramebufferStatus(b)},
bs:function(a,b){return a.clear(b)},
bt:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bu:function(a,b){return a.compileShader(b)},
bv:function(a){return a.createBuffer()},
bw:function(a){return a.createFramebuffer()},
bx:function(a){return a.createProgram()},
by:function(a,b){return a.createShader(b)},
bz:function(a){return a.createTexture()},
bB:function(a,b){return a.depthMask(b)},
bC:function(a,b){return a.disable(b)},
bD:function(a,b,c,d){return a.drawArrays(b,c,d)},
bE:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bF:function(a,b){return a.enable(b)},
bG:function(a,b){return a.enableVertexAttribArray(b)},
bI:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
ai:function(a){return P.a_(a.getContextAttributes())},
aH:function(a){return a.getError()},
aJ:function(a,b){return a.getProgramInfoLog(b)},
aK:function(a,b,c){return a.getProgramParameter(b,c)},
aM:function(a,b){return a.getShaderInfoLog(b)},
aN:function(a,b,c){return a.getShaderParameter(b,c)},
aO:function(a,b,c){return a.getUniformLocation(b,c)},
bK:function(a,b){return a.linkProgram(b)},
aQ:function(a,b,c){return a.shaderSource(b,c)},
aR:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bS:function(a,b,c,d){return a.texParameterf(b,c,d)},
bT:function(a,b,c,d){return a.texParameteri(b,c,d)},
bX:function(a,b,c){return a.uniform1f(b,c)},
bY:function(a,b,c){return a.uniform1fv(b,c)},
bZ:function(a,b,c){return a.uniform1i(b,c)},
c_:function(a,b,c){return a.uniform1iv(b,c)},
c0:function(a,b,c){return a.uniform2fv(b,c)},
c1:function(a,b,c){return a.uniform3fv(b,c)},
c2:function(a,b,c){return a.uniform4fv(b,c)},
c3:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c4:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c5:function(a,b){return a.useProgram(b)},
c6:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
c8:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},i_:{"^":"h;",$isi_:1,"%":"WebGLShader"},id:{"^":"h;",$isid:1,"%":"WebGLTexture"},io:{"^":"h;",$isio:1,"%":"WebGLUniformLocation"},it:{"^":"h;",$isit:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",m3:{"^":"jA;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return P.a_(this.cW(a,b))},
h:function(a,b,c){H.f(c,"$isI")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
cW:function(a,b){return a.item(b)},
$aso:function(){return[[P.I,,,]]},
$isk:1,
$ask:function(){return[[P.I,,,]]},
$isa:1,
$asa:function(){return[[P.I,,,]]},
$asq:function(){return[[P.I,,,]]},
"%":"SQLResultSetRowList"},jz:{"^":"h+o;"},jA:{"^":"jz+q;"}}],["","",,G,{"^":"",
ix:function(a){var z,y,x,w
z=H.i(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.m(z,y)
C.a.h(z,y,w+H.e(z[y]))}return C.a.a5(z,"\n")},
dK:function(a,b,c){var z,y,x,w
z=J.j(a)
y=z.by(a,b)
z.aQ(a,y,c)
z.bu(a,y)
x=H.bU(z.aN(a,y,35713))
if(x!=null&&!x){w=z.aM(a,y)
P.aM("E:Compilation failed:")
P.aM("E:"+G.ix(c))
P.aM("E:Failure:")
P.aM(C.i.G("E:",w))
throw H.c(w)}return y},
db:function(a,b){var z,y,x
H.w(a,"$isa",[T.r],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.h.h(b,z,J.bz(a[y]))
if(y>=a.length)return H.m(a,y)
C.h.h(b,z+1,J.c7(a[y]))
z+=2
if(y>=a.length)return H.m(a,y)
x=J.cM(a[y])
if(z>=b.length)return H.m(b,z)
b[z]=x}return b},
fY:function(a,b){var z,y
H.w(a,"$isa",[T.L],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.h.h(b,z,J.bz(a[y]))
if(y>=a.length)return H.m(a,y)
C.h.h(b,z+1,J.c7(a[y]))}return b},
fZ:function(a,b){var z,y,x,w
H.w(a,"$isa",[T.aE],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.h.h(b,z,J.bz(a[y]))
if(y>=a.length)return H.m(a,y)
C.h.h(b,z+1,J.c7(a[y]))
x=z+2
if(y>=a.length)return H.m(a,y)
w=J.cM(a[y])
if(x>=b.length)return H.m(b,x)
b[x]=w
if(y>=a.length)return H.m(a,y)
C.h.h(b,z+3,J.f8(a[y]))}return b},
fX:function(a,b){var z,y
H.w(a,"$isa",[[P.a,P.B]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.n.h(b,z,J.bc(a[y],0))
if(y>=a.length)return H.m(a,y)
C.n.h(b,z+1,J.bc(a[y],1))
if(y>=a.length)return H.m(a,y)
C.n.h(b,z+2,J.bc(a[y],2))
if(y>=a.length)return H.m(a,y)
C.n.h(b,z+3,J.bc(a[y],3))}return b},
j3:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.al(z,[H.p(z,0)]),y=y.gw(y),x=b.x,w=[[P.a,P.B]],v=[P.X],u=[T.aE],t=[T.r],s=[T.L];y.t();){r=y.d
if(!x.af(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.ec>0)H.c1("I: "+r)
continue}q=z.i(0,r)
switch($.a5().i(0,r).a){case"vec2":b.a0(r,G.fY(H.bu(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.a0(r,G.db(H.bu(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.a0(r,G.fZ(H.bu(q,"$isa",u,"$asa"),null),4)
break
case"float":b.a0(r,new Float32Array(H.bQ(H.bu(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.a0(r,G.fX(H.bu(q,"$isa",w,"$asa"),null),4)
break}}},
de:function(a,b,c){var z,y,x,w,v,u,t,s
z=b.d
y=b.e.x
x=P.d
w=P.O(x,P.b)
v=J.eW(z.a)
u=new G.hn(z,v,4,w,y,0,-1,P.O(x,P.ad),"meshdata:"+a,!1,!0)
x=G.db(c.d,null)
w.h(0,"aPosition",J.c5(z.a))
u.ch=x
u.aV("aPosition",x,3)
t=$.a5().i(0,"aPosition")
if(t==null)H.V("Unknown canonical aPosition")
s=y.i(0,"aPosition")
J.bx(z.a,v)
z.bH(0,s,0)
z.c7(0,w.i(0,"aPosition"),s,t.aW(),5126,!1,0,0)
y=H.w(c.cv(),"$isa",[P.B],"$asa")
u.y=J.c5(z.a)
x=u.ch.length
if(x<768){u.sau(new Uint8Array(H.bQ(y)))
u.Q=5121}else if(x<196608){u.sau(new Uint16Array(H.bQ(y)))
u.Q=5123}else{u.sau(new Uint32Array(H.bQ(y)))
u.Q=5125}J.bx(z.a,v)
y=u.y
x=u.cx
J.c2(z.a,34963,y)
J.cK(z.a,34963,x,35048)
G.j3(c,u)
return u},
bI:{"^":"b;"},
ax:{"^":"bI;d,a,b,c",
aX:function(){return this.d},
k:function(a){var z,y,x,w
z=H.i(["{"+new H.dC(H.kj(this)).k(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.al(y,[H.p(y,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.i(0,w)))}return C.a.a5(z,"\n")}},
fz:{"^":"b;0a,b",
bH:function(a,b,c){J.f2(this.a,b)
if(c>0)J.fn(this.a,b,c)},
c7:function(a,b,c,d,e,f,g,h){J.c2(this.a,34962,b)
J.fo(this.a,c,d,e,!1,g,h)}},
dc:{"^":"b;a,b,c,d,e",
a_:function(a,b,c,d,e){var z,y
z=this.a
y=this.b
J.c3(z.a,36160,y)
J.fp(z.a,b,c,d,e)
if(a!==0)J.eQ(z.a,a)},
p:{
cf:function(a,b,c){var z,y,x,w,v
z=$.es()
y=G.dD(a,"frame::color",b,c,32856,z)
z=G.dD(a,"frame::depth",b,c,33190,z)
x=new G.dc(a,null,y,z,null)
w=J.eT(a.a)
x.b=w
J.c3(a.a,36160,w)
J.cL(a.a,36160,36064,3553,y.b,0)
J.cL(a.a,36160,36096,3553,z.b,0)
v=J.eP(a.a,36160)
if(v!==36053)H.V("Error Incomplete Framebuffer: "+H.e(v))
J.c3(a.a,36160,null)
return x}}},
d9:{"^":"b;"},
bF:{"^":"b;a,b,c,d"},
dd:{"^":"b;a,b,c,d,e",
am:function(a){switch($.a5().i(0,a).a){case"vec2":this.e.h(0,a,H.i([],[T.L]))
break
case"vec3":this.e.h(0,a,H.i([],[T.r]))
break
case"vec4":this.e.h(0,a,H.i([],[T.aE]))
break
case"float":this.e.h(0,a,H.i([],[P.X]))
break
case"uvec4":this.e.h(0,a,H.i([],[[P.a,P.B]]))
break}},
cs:function(a){var z,y,x,w
H.w(a,"$isa",[T.r],"$asa")
for(z=this.d,y=0;y<4;++y){x=a[y]
w=new T.r(new Float32Array(3))
w.D(x)
C.a.l(z,w)}},
cq:function(a,b){var z,y,x,w,v,u
z=[T.L]
H.w(b,"$isa",z,"$asa")
y=H.w(this.e.i(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<4;++x){w=b[x]
v=new Float32Array(2)
u=w.a
v[1]=u[1]
v[0]=u[0]
z.l(y,new T.L(v))}},
cr:function(a,b){var z,y,x,w,v
z=[T.r]
H.w(b,"$isa",z,"$asa")
y=H.w(this.e.i(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<4;++x){w=b[x]
v=new T.r(new Float32Array(3))
v.D(w)
z.l(y,v)}},
cv:function(){var z,y,x,w,v,u,t,s,r
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.i(y,[P.B])
for(y=this.b,w=0,v=0;!1;++v){if(v>=0)return H.m(y,v)
u=y[v]
C.a.h(x,w,u.gdP(u))
C.a.h(x,w+1,u.gdQ(u))
C.a.h(x,w+2,u.gdR(u))
w+=3}for(y=z.length,v=0;v<z.length;z.length===y||(0,H.N)(z),++v){t=z[v]
s=t.a
C.a.h(x,w,s)
C.a.h(x,w+1,t.b)
r=t.c
C.a.h(x,w+2,r)
C.a.h(x,w+3,s)
C.a.h(x,w+4,r)
C.a.h(x,w+5,t.d)
w+=6}return x},
cz:function(a,b){var z,y,x,w,v,u,t
z=H.i([],[T.L])
this.e.h(0,"aTexUV",z)
for(y=b-1,x=a-1,w=0;w<b;++w)for(v=w/y,u=0;u<a;++u){t=new Float32Array(2)
t[0]=v
t[1]=u/x
C.a.l(z,new T.L(t))}},
cw:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=this.c
y=a-1
x=b-1
w=0
while(!0){if(!(w<x))break
v=w*a
u=w+1
t=0
while(!0){if(!(t<y))break
s=t+1
r=u*a
C.a.l(z,new G.bF(v+s,r+s,r+t,v+t))
t=s}w=u}},
k:function(a){var z,y,x,w,v
z=H.i(["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"],[P.d])
for(y=this.e,x=new H.al(y,[H.p(y,0)]),x=x.gw(x);x.t();){w=x.d
v=$.a5().i(0,w).a
C.a.l(z,H.e(w)+"["+v+","+y.i(0,w).length+"]")}return C.a.a5(z," ")}},
dA:{"^":"b;a,b,c"},
dz:{"^":"b;a,b,c"},
hl:{"^":"ax;d,a,b,c"},
hn:{"^":"bI;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sau:function(a){this.cx=H.w(a,"$isa",[P.B],"$asa")},
aV:function(a,b,c){var z,y
C.i.aq(a,0)
H.f(b,"$isad")
this.cy.h(0,a,b)
z=this.d
y=this.r.i(0,a)
J.c2(z.a,34962,y)
J.cK(z.a,34962,b,35048)},
cA:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a0:function(a,b,c){var z,y,x,w,v
z=J.cH(a,0)===105
if(z&&this.z===0)this.z=C.b.al(b.length,c)
y=this.r
x=this.d
y.h(0,a,J.c5(x.a))
this.aV(a,b,c)
w=$.a5().i(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.i(0,a)
J.bx(x.a,this.e)
x.bH(0,v,z?1:0)
x.c7(0,y.i(0,a),v,w.aW(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.i(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=new H.al(z,[H.p(z,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(y,H.e(w)+":"+z.i(0,w).length)}return"MESH["+this.a+"] "+C.a.a5(y,"  ")}},
hG:{"^":"ax;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
ct:function(a,b){var z
if(typeof a!=="number")return a.dN()
if(typeof b!=="number")return H.br(b)
z=a/b
if(this.z===z)return
this.z=z
this.aY()},
aY:function(){var z,y,x,w,v,u
z=this.z
y=this.Q
x=this.ch
w=Math.tan(this.y*3.141592653589793/180*0.5)
v=y-x
u=this.db.a
u[0]=0
u[1]=0
u[2]=0
u[3]=0
u[4]=0
u[5]=0
u[6]=0
u[7]=0
u[8]=0
u[9]=0
u[10]=0
u[11]=0
u[12]=0
u[13]=0
u[14]=0
u[15]=0
u[0]=1/(w*z)
u[5]=1/w
u[10]=(x+y)/v
u[11]=-1
u[14]=2*y*x/v},
aX:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
z=this.x
y=this.d
y.h(0,"uEyePosition",z.aI())
x=this.cy
x.D(z.d)
z=this.cx
z.D(this.db)
w=z.a
v=w[0]
u=w[4]
t=w[8]
s=w[12]
r=w[1]
q=w[5]
p=w[9]
o=w[13]
n=w[2]
m=w[6]
l=w[10]
k=w[14]
j=w[3]
i=w[7]
h=w[11]
g=w[15]
f=x.a
e=f[0]
d=f[4]
c=f[8]
b=f[12]
a=f[1]
a0=f[5]
a1=f[9]
a2=f[13]
a3=f[2]
a4=f[6]
a5=f[10]
a6=f[14]
a7=f[3]
a8=f[7]
a9=f[11]
b0=f[15]
w[0]=v*e+u*a+t*a3+s*a7
w[4]=v*d+u*a0+t*a4+s*a8
w[8]=v*c+u*a1+t*a5+s*a9
w[12]=v*b+u*a2+t*a6+s*b0
w[1]=r*e+q*a+p*a3+o*a7
w[5]=r*d+q*a0+p*a4+o*a8
w[9]=r*c+q*a1+p*a5+o*a9
w[13]=r*b+q*a2+p*a6+o*b0
w[2]=n*e+m*a+l*a3+k*a7
w[6]=n*d+m*a0+l*a4+k*a8
w[10]=n*c+m*a1+l*a5+k*a9
w[14]=n*b+m*a2+l*a6+k*b0
w[3]=j*e+i*a+h*a3+g*a7
w[7]=j*d+i*a0+h*a4+g*a8
w[11]=j*c+i*a1+h*a5+g*a9
w[15]=j*b+i*a2+h*a6+g*b0
y.h(0,"uPerspectiveViewMatrix",z)
return y}},
l_:{"^":"b;"},
hU:{"^":"bI;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cD:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){t=z[u]
x.h(0,t,J.cN(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){t=z[u]
x.h(0,t,J.cN(w.a,v,t))}},
cG:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.i([],[P.d])
x=H.i([],[P.d])
for(y=new H.al(y,[H.p(y,0)]),y=y.gw(y);y.t();){w=y.d
if(!z.af(0,w))C.a.l(x,w)}for(z=this.x,z=P.ja(z,z.r,H.p(z,0)),y=this.Q;z.t();){w=z.d
if(!y.u(0,w))C.a.l(x,w)}return x},
cJ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(b,"$isI",[P.d,P.b],"$asI")
z=Date.now()
for(y=new H.al(b,[H.p(b,0)]),y=y.gw(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.t();){s=y.d
switch(J.cH(s,0)){case 117:if(w.af(0,s)){r=b.i(0,s)
if(v.af(0,s))H.c1("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.h(0,s,a)
q=$.a5().i(0,s)
if(q==null)H.V("unknown "+s)
p=w.i(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.M(r)
J.c9(x.a,p,r)}else if(!!J.A(r).$ish4)J.fl(x.a,p,r)
break
case"float":if(q.c===0){H.eb(r)
J.fj(x.a,p,r)}else if(!!J.A(r).$isad)J.fk(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.af(r,"$isam").a
J.cT(x.a,p,!1,s)}else if(!!J.A(r).$isad)J.cT(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=C.L.gdO(H.af(r,"$islz"))
J.cS(x.a,p,!1,s)}else if(!!J.A(r).$isad)J.cS(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.cR(o,p,H.af(r,"$isaE").a)
else J.cR(o,p,H.f(r,"$isad"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cQ(o,p,H.af(r,"$isr").a)
else J.cQ(o,p,H.f(r,"$isad"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cP(o,p,H.af(r,"$isL").a)
else J.cP(o,p,H.f(r,"$isad"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.br(s)
J.cI(x.a,33984+s)
s=H.af(r,"$iscr").b
J.bw(x.a,3553,s)
s=this.ch
J.c9(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.G()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.br(s)
J.cI(x.a,33984+s)
s=H.af(r,"$iscr").b
J.bw(x.a,34067,s)
s=this.ch
J.c9(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.G()
this.ch=s+1
break
default:H.c1("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.i(0,s)
switch(s){case"cDepthTest":s=J.aA(r,!0)
o=x.a
if(s)J.bd(o,2929)
else J.c6(o,2929)
break
case"cStencilFunc":H.af(r,"$isdA")
s=r.a
o=x.a
if(s===1281)J.c6(o,2960)
else{J.bd(o,2960)
o=r.b
n=r.c
J.fe(x.a,s,o,n)}break
case"cDepthWrite":H.bU(r)
J.eX(x.a,r)
break
case"cBlendEquation":H.af(r,"$isdz")
s=r.a
o=x.a
if(s===1281)J.c6(o,3042)
else{J.bd(o,3042)
o=r.b
n=r.c
J.eO(x.a,o,n)
J.eN(x.a,s)}break}++t
break}}m=P.fR(0,0,0,Date.now()-new P.bD(z,!1).a,0,0)
""+t
m.k(0)},
cu:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[G.ax],"$asa")
Date.now()
z=this.d
J.fm(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b2()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.N)(b),++x){w=b[x]
this.cJ(w.a,w.aX())}y=this.Q
y.a4(0)
for(v=a.cy,v=new H.al(v,[H.p(v,0)]),v=v.gw(v);v.t();)y.l(0,v.d)
u=this.cG()
if(u.length!==0)P.aM("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
J.bx(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.cA()
s=a.Q
r=a.z
if(t)J.eM(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.f0(q,y,v,s,0,r)
else J.f_(q,y,v,s,0)}else{s=z.a
if(r>1)J.eZ(s,y,0,v,r)
else J.eY(s,y,0,v)}if(t)J.f3(z.a)},
a2:function(a,b){return this.cu(a,b,null)},
p:{
bL:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
y=P.a0(null,null,null,z)
x=c.b
w=d.b
v=H.w(c.f,"$isa",[z],"$asa")
u=J.eU(b.a)
t=G.dK(b.a,35633,x)
J.cJ(b.a,u,t)
s=G.dK(b.a,35632,w)
J.cJ(b.a,u,s)
if(v.length>0)J.fi(b.a,u,v,35980)
J.fd(b.a,u)
if(!H.bU(J.fc(b.a,u,35714)))H.V(J.fb(b.a,u))
z=new G.hU(b,c,d,u,P.cl(c.c,z),P.O(z,P.b),P.O(z,z),y,a,!1,!0)
z.cD(a,b,c,d)
return z}}},
C:{"^":"b;a,b,c",
aW:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
cn:{"^":"b;a,0b,c,d,e,f,r,x",
aU:function(a){var z,y,x,w,v
H.w(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.N)(a),++w){v=a[w]
C.a.l(y,v)
x.h(0,v,this.r);++this.r}C.a.aj(y)},
a1:function(a){var z,y,x
H.w(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.N)(a),++x)C.a.l(y,a[x])
C.a.aj(y)},
T:function(a){var z,y
H.w(a,"$isa",[P.d],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.l(z,a[y])
C.a.aj(z)},
cE:function(a,b){this.b=this.an(!1,H.w(a,"$isa",[P.d],"$asa"),b)},
aa:function(a){return this.cE(a,null)},
an:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.w(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.i(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.N)(y),++u){t=y[u]
s=$.a5().i(0,t)
C.a.l(w,"layout (location="+H.e(v.i(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){q=z[u]
s=$.a5().i(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){q=z[u]
s=$.a5().i(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){q=z[u]
s=$.a5().i(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.l(w,"")
C.a.H(w,b)
return C.a.a5(w,"\n")},
p:{
bM:function(a){var z,y
z=P.d
y=[z]
return new G.cn(a,H.i([],y),H.i([],y),H.i([],y),H.i([],y),0,P.O(z,P.B))}}},
i3:{"^":"bI;",
aI:function(){var z,y,x
z=this.e
y=this.d.a
x=z.a
x[0]=y[12]
x[1]=y[13]
x[2]=y[14]
return z}},
ie:{"^":"b;a,b,c,d,e,f,r"},
cr:{"^":"b;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
im:{"^":"cr;f,r,x,a,b,c,d,e",
k:function(a){return"TypedTexture["+this.a+", "+this.x+", "+H.e(this.f)+" X "+H.e(this.r)+"]"},
p:{
dD:function(a,b,c,d,e,f){var z,y
z=J.eV(a.a)
J.bw(a.a,3553,z)
J.fg(a.a,3553,1,e,c,d)
y=f.e
if(y!==1)J.ff(a.a,3553,34046,y)
y=f.r
J.bA(a.a,3553,10240,y)
y=f.f
J.bA(a.a,3553,10241,y)
if(f.b){J.bA(a.a,3553,10242,33071)
J.bA(a.a,3553,10243,33071)}f.c
J.fa(a.a)
J.bw(a.a,3553,null)
return new G.im(c,d,e,b,z,3553,a,f)}}}}],["","",,R,{"^":"",
jc:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.f(W.iO("span",null),"$isR")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.w).ap(y,"float")
y.setProperty(x,"left","")
x=C.w.ap(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.q.F(z,v)}return z},
i5:{"^":"b;",
cF:function(a,b,c){var z,y
z=this.a
if(z==null)throw H.c("no element provided")
y=z.style
y.color=b
y.fontFamily="Helvetica,Arial,sans-serif"
y.fontSize="9px"
y.lineHeight="15px"
y.padding="0 0 3px 3px"
y.textAlign="left"
y.background=c
y=J.j(z)
y.F(z,this.b)
y.F(z,this.d)
y.F(z,this.c)}},
i6:{"^":"i5;e,f,a,b,c,d",
cI:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.x.dK(y,2)+" fps"
C.q.ce(this.c,b)
x=C.b.N(30*C.x.di(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.f(z.firstChild,"$isR")
v=w.style
u=""+x+"px"
v.height=u
C.q.F(z,w)},
cH:function(a){return this.cI(a,"")}}}],["","",,V,{"^":"",
kA:function(a,b){var z,y,x,w,v,u
z=H.i([],[P.X])
for(y=b*b,x=0,w=0;w<a;++w){v=0.39894*Math.exp(-0.5*w*w/y)/b
C.a.l(z,v)
x+=v
if(w>0)x+=v}for(u="",w=0,y="";w<a;++w,u=", "){y+=u
if(w>=z.length)return H.m(z,w)
y+=H.e(z[w]/x)}return"float kernel["+a+"] = float["+a+"]("+(y.charCodeAt(0)==0?y:y)+");"}}],["","",,B,{"^":"",
ig:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=B.hE(new B.ih(e,d,f,c),0,6.283185307179586,g,0.001,!0)
y=z.length
if(0>=y)return H.m(z,0)
C.a.l(z,z[0])
if(1>=z.length)return H.m(z,1)
C.a.l(z,z[1])
x=g+1
w=B.ii(z,h,i)
for(y=w.length,v=0;v<w.length;w.length===y||(0,H.N)(w),++v){u=w[v]
if(0>=u.length)return H.m(u,0)
C.a.l(u,u[0])
if(1>=u.length)return H.m(u,1)
C.a.l(u,u[1])}t=h+1
y=H.i([],[G.d9])
s=H.i([],[G.bF])
r=[T.r]
q=H.i([],r)
p=new G.dd(!1,y,s,q,P.O(P.d,[P.a,,]))
for(y=w.length,v=0;v<w.length;w.length===y||(0,H.N)(w),++v){o=w[v]
for(n=0;n<o.length;n+=2){s=H.f(o[n],"$isr")
s.toString
m=new T.r(new Float32Array(3))
m.D(s)
C.a.l(q,m)}}p.cw(t,x,!1)
p.cz(t,x)
p.am("aNormal")
for(y=w.length,s=p.e,v=0;v<w.length;w.length===y||(0,H.N)(w),++v){o=w[v]
for(n=0;q=o.length,n<q;n+=2){m=n+1
if(m>=q)return H.m(o,m)
m=H.f(o[m],"$isr")
l=H.w(s.i(0,"aNormal"),"$isa",r,"$asa")
m.toString
q=new T.r(new Float32Array(3))
q.D(m);(l&&C.a).l(l,q)}}return p},
ii:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=[T.r]
H.w(a,"$isa",z,"$asa")
y=H.i([],[[P.a,T.r]])
x=new Float32Array(3)
w=new T.r(x)
v=new Float32Array(3)
u=new T.r(v)
t=new Float32Array(3)
s=new T.r(t)
for(r=0;q=a.length,r<q;r+=2){p=a[r]
o=r+1
if(o>=q)return H.m(a,o)
n=a[o]
m=H.i([],z)
C.a.l(y,m)
q=n.a
o=q[2]
if(Math.abs(o)>0.7071067811865476){l=q[1]
k=l*l+o*o
j=1/Math.sqrt(k)
v[0]=0
v[1]=-q[2]*j
v[2]=q[1]*j
t[0]=k*j
t[1]=-q[0]*(q[1]*j)
t[2]=q[0]*(-q[2]*j)}else{o=q[0]
l=q[1]
k=o*o+l*l
j=1/Math.sqrt(k)
v[0]=-q[1]*j
v[1]=q[0]*j
v[2]=0
t[0]=-q[2]*(q[0]*j)
t[1]=q[2]*(-q[1]*j)
t[2]=k*j}u.W(0)
s.W(0)
for(i=0;i<b;++i){h=i/b*2*3.141592653589793
g=c*Math.cos(h)
f=c*Math.sin(h)
w.D(p)
w.ae(u,g)
w.ae(s,f)
q=new T.r(new Float32Array(3))
q.D(w)
C.a.l(m,q)
x[2]=0
x[1]=0
x[0]=0
w.ae(u,g)
w.ae(s,f)
w.W(0)
q=new T.r(new Float32Array(3))
q.D(w)
C.a.l(m,q)}}return y},
hE:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
H.l(a,{func:1,ret:-1,args:[P.X,T.r]})
z=H.i([],[T.r])
y=new T.r(new Float32Array(3))
x=new T.r(new Float32Array(3))
for(w=(c-b)/(d-0),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+e,x)
x.aT(0,y)
t=new T.r(new Float32Array(3))
t.D(y)
C.a.l(z,t)
t=new T.r(new Float32Array(3))
t.D(x)
C.a.l(z,t)}return z},
ih:{"^":"n:24;a,b,c,d",
$2:function(a,b){var z,y,x,w,v,u
z=this.c
y=this.a*a
x=Math.cos(y)
w=Math.sin(y)
y=this.b*a
v=Math.cos(y)
u=Math.sin(y)
y=z*(2+x)*0.5
b.sX(0,y*v)
b.sR(0,y*u)
b.sah(0,this.d*z*0.5*w)}}}],["","",,D,{"^":"",hb:{"^":"b;a,b,c",
cB:function(a){var z,y
a=document
z=W.aU
y={func:1,ret:-1,args:[z]}
W.aG(a,"keydown",H.l(new D.hd(this),y),!1,z)
W.aG(a,"keyup",H.l(new D.he(this),y),!1,z)},
p:{
hc:function(a){var z=P.B
z=new D.hb(P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z))
z.cB(a)
return z}}},hd:{"^":"n:11;a",
$1:function(a){var z
H.f(a,"$isaU")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},he:{"^":"n:11;a",
$1:function(a){var z
H.f(a,"$isaU")
z=this.a
z.a.bQ(0,a.which)
z.c.l(0,a.which)}},hq:{"^":"b;a,b,c,d,e,f,r,x",
cC:function(a){var z,y,x
if(a==null)a=document
z=J.j(a)
y=z.gbN(a)
x=H.p(y,0)
W.aG(y.a,y.b,H.l(new D.hs(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbM(a)
y=H.p(x,0)
W.aG(x.a,x.b,H.l(new D.ht(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbO(a)
x=H.p(y,0)
W.aG(y.a,y.b,H.l(new D.hu(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbP(a)
x=H.p(z,0)
W.aG(z.a,z.b,H.l(new D.hv(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
hr:function(a){var z=P.B
z=new D.hq(P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z),0,0,0,0,0)
z.cC(a)
return z}}},hs:{"^":"n:3;a",
$1:function(a){var z,y
H.f(a,"$isT")
a.preventDefault()
z=this.a
y=J.j(a)
z.r=H.M(y.gbL(a).a)
z.x=H.M(y.gbL(a).b)
z.d=a.movementX
z.e=a.movementY}},ht:{"^":"n:3;a",
$1:function(a){var z
H.f(a,"$isT")
a.preventDefault()
P.aM("BUTTON "+H.e(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},hu:{"^":"n:3;a",
$1:function(a){var z
H.f(a,"$isT")
a.preventDefault()
z=this.a
z.a.bQ(0,a.button)
z.c.l(0,a.button)}},hv:{"^":"n:25;a",
$1:function(a){H.f(a,"$isaF")
a.preventDefault()
this.a.f=H.M(C.ac.gdr(a))}},hD:{"^":"i3;ch,cx,cy,db,dx,dy,fr,fx,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bZ:function(a){var z,y
z=C.h.dv(H.w(a,"$isk",[P.b],"$ask"),0,new A.kl(),P.B)
if(typeof z!=="number")return H.br(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kl:{"^":"n:26;",
$2:function(a,b){var z,y
H.M(a)
z=J.ag(b)
if(typeof a!=="number")return a.G()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",am:{"^":"b;a",
D:function(a){var z,y
z=a.a
y=this.a
y[15]=z[15]
y[14]=z[14]
y[13]=z[13]
y[12]=z[12]
y[11]=z[11]
y[10]=z[10]
y[9]=z[9]
y[8]=z[8]
y[7]=z[7]
y[6]=z[6]
y[5]=z[5]
y[4]=z[4]
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){return"[0] "+this.a6(0).k(0)+"\n[1] "+this.a6(1).k(0)+"\n[2] "+this.a6(2).k(0)+"\n[3] "+this.a6(3).k(0)+"\n"},
i:function(a,b){var z=this.a
if(b>=16)return H.m(z,b)
return z[b]},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.am){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gv:function(a){return A.bZ(this.a)},
a6:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.m(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.m(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.m(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.m(y,x)
z[3]=y[x]
return new T.aE(z)},
Z:function(){var z=this.a
z[0]=1
z[1]=0
z[2]=0
z[3]=0
z[4]=0
z[5]=1
z[6]=0
z[7]=0
z[8]=0
z[9]=0
z[10]=1
z[11]=0
z[12]=0
z[13]=0
z[14]=0
z[15]=1}},L:{"^":"b;a",
L:function(a,b){var z=this.a
z[0]=a
z[1]=b},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.L){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gv:function(a){return A.bZ(this.a)},
i:function(a,b){var z=this.a
if(b>=2)return H.m(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gX:function(a){return this.a[0]},
gR:function(a){return this.a[1]}},r:{"^":"b;a",
M:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
D:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.r){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.bZ(this.a)},
i:function(a,b){var z=this.a
if(b>=3)return H.m(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gbJ:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
W:function(a){var z,y,x
z=Math.sqrt(this.gbJ())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aC:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bA:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.r(new Float32Array(3))
z.M(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
ae:function(a,b){var z,y
z=a.a
y=this.a
y[0]=y[0]+z[0]*b
y[1]=y[1]+z[1]*b
y[2]=y[2]+z[2]*b},
aT:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
sX:function(a,b){this.a[0]=b
return b},
sR:function(a,b){this.a[1]=b
return b},
sah:function(a,b){this.a[2]=b
return b},
gX:function(a){return this.a[0]},
gR:function(a){return this.a[1]},
gah:function(a){return this.a[2]},
p:{
is:function(a,b,c){var z=new T.r(new Float32Array(3))
z.M(a,b,c)
return z}}},aE:{"^":"b;a",
k:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aE){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gv:function(a){return A.bZ(this.a)},
i:function(a,b){var z=this.a
if(b>=4)return H.m(z,b)
return z[b]},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gX:function(a){return this.a[0]},
gR:function(a){return this.a[1]},
gah:function(a){return this.a[2]},
gc9:function(a){return this.a[3]}}}],["","",,Q,{"^":"",
ei:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
z={}
y=document
x=C.j.cc(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.i6(0,0,x,w,y.createElement("div"),R.jc("blue","gray",90,30))
u.cF(x,"blue","gray")
t=H.f(C.j.aE(y,"#webgl-canvas"),"$iscc")
s=new G.fz(t)
y=P.d
x=P.b
v=(t&&C.H).cb(t,"webgl2",P.dk(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],y,x))
s.a=v
if(v==null)H.V(P.d8('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
r="ChronosGL Config: "+H.e(J.f9(v))
if($.ec>0)P.aM("I: "+r)
J.eR(v,0,0,0,1)
J.bd(v,2929)
J.bd(v,2884)
v=new Float32Array(3)
r=D.hc(null)
q=D.hr(t)
p=new T.am(new Float32Array(16))
p.Z()
o=new Float32Array(3)
n=new Float32Array(3)
m=new Float32Array(3)
l=new D.hD(165,0,0,0,new T.r(v),-0.02,r,q,p,new T.r(o),new T.r(n),new T.r(m),new T.r(new Float32Array(3)),"camera:orbit",!1,!0)
v=new T.am(new Float32Array(16))
v.Z()
r=new T.am(new Float32Array(16))
r.Z()
k=new G.hG(l,50,1,0.1,1000,v,r,new T.am(new Float32Array(16)),P.O(y,x),"perspective",!1,!0)
k.aY()
j=t.clientWidth
i=t.clientHeight
t.width=j
t.height=i
k.ct(j,i)
h=G.cf(s,j,i)
v=$.eH()
r=[y]
q=P.B
p=new G.cn("BlackPerlinNoiseColor F",H.i([],r),H.i([],r),H.i([],r),H.i([],r),0,P.O(y,q))
p.T(H.i(["vNormal"],r))
p.a1(H.i(["uTime","uTransformationMatrix"],r))
p.b=p.an(!1,H.w(H.i(["#define BLACK 1","vec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n","#define VARIANT 1\n\nvoid main() {\n#if VARIANT == 1\n  float mytime = uTime/2.0;\n#ifdef BLACK\n  mytime = uTime/10.0;\n#endif\n  float period = 10.0;\n  float factor = 1.0; // sin( uTime)/4.0+2.0;\n  vec3 translation = uTransformationMatrix[3].xyz;\n  float r = pnoise( .75 * ( vNormal *factor + mytime ), vec3( period ) );\n  float g = pnoise( 0.8 * ( vNormal *factor + mytime ), vec3( period ) );\n  float b = pnoise( 0.9 * ( vNormal *factor + mytime ), vec3( period ) );\n  float n = pnoise( 1.5 * ( vNormal *factor + mytime ), vec3( period ) );\n#else\n  float mytime = 0.0 ; //uTime/50.0;\n  float period = 5.0;\n  float factor = 1.0; // sin( uTime)/4.0+2.0;\n  vec3 translation = uTransformationMatrix[3].xyz;\n  float r = pnoise( .75 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float g = pnoise( 0.8 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float b = pnoise( 0.9 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float n = pnoise( 1.5 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n#endif\n\n  n = pow( .001, n );\n//float n = 10.0 * pnoise( 5.0 * ( vNormal + uTime ), vec3( 10.0 ) ) * pnoise( .5 * ( vNormal + uTime ), vec3( 10.0 ) );\n//n += .5 * pnoise( 4.0 * vNormal, vec3( 10.0 ) );\n#ifdef BLACK\n  vec3 color = vec3( 1.0-(r + n), 1.0-(g + n), 1.0-(b + n) );\n#else\n  vec3 color = vec3( (r + n), (g + n), (b + n) );\n#endif\n  oFragColor = vec4( color, 1.0 );\n}\n"],r),"$isa",r,"$asa"),null)
g=G.bL("perlin",s,v,p)
p=P.O(y,x)
p.h(0,"cDepthTest",!0)
p.h(0,"cDepthWrite",!0)
p.h(0,"cBlendEquation",$.en())
p.h(0,"cStencilFunc",$.er())
v=new T.am(new Float32Array(16))
v.Z()
p.h(0,"uTransformationMatrix",v)
v=new T.am(new Float32Array(16))
v.Z()
p.h(0,"uModelMatrix",v)
f=G.de("torusknot",g,B.ig(!0,!0,1,2,3,20,128,16,4,!1))
if(typeof j!=="number")return j.al()
v=C.b.N(j,4)
if(typeof i!=="number")return i.al()
o=C.b.N(i,4)
n=G.cf(s,v,o)
m=G.cf(s,v,o)
e=new Q.fw(6,j,i,v,o,h,n,m,new G.dc(s,null,null,null,null))
o=$.eJ()
e.z=G.bL("highpass",s,o,$.eI())
d=V.kA(6,6)
q=new G.cn("BloomPassF",H.i([],r),H.i([],r),H.i([],r),H.i([],r),0,P.O(y,q))
q.T(H.i(["vTexUV"],r))
q.a1(H.i(["uDirection","uTexture"],r))
q.b=q.an(!1,H.w(H.i([d,"void main() {\n    vec2 invSize = 1.0 / vec2(textureSize(uTexture, 0));\n    vec3 sum = texture(uTexture, vTexUV).rgb * kernel[0];\n    for (int i = 1; i < kernel.length(); i++) {\n        vec2 offset = uDirection * invSize * float(i);\n        sum += texture(uTexture, vTexUV + offset).rgb * kernel[i];\n        sum += texture(uTexture, vTexUV - offset).rgb * kernel[i];\n    }\n    oFragColor = vec4(sum, 1.0);\n}\n"],r),"$isa",r,"$asa"),null)
e.Q=G.bL("bloom",s,o,q)
o=G.bL("bloom",s,o,$.eE())
e.ch=o
v=new T.r(new Float32Array(3))
v.M(-1,-1,0)
r=new T.r(new Float32Array(3))
r.M(1,-1,0)
q=new T.r(new Float32Array(3))
q.M(1,1,0)
c=new T.r(new Float32Array(3))
c.M(-1,1,0)
b=[T.r]
a=H.i([v,r,q,c],b)
v=new T.L(new Float32Array(2))
v.L(0,0)
r=new T.L(new Float32Array(2))
r.L(1,0)
q=new T.L(new Float32Array(2))
q.L(1,1)
c=new T.L(new Float32Array(2))
c.L(0,1)
a0=H.i([v,r,q,c],[T.L])
a1=new T.r(new Float32Array(3))
a1.M(0,0,1)
a2=H.i([a1,a1,a1,a1],b)
v=H.i([],[G.d9])
r=H.i([],[G.bF])
q=H.i([],b)
a3=new G.dd(!1,v,r,q,P.O(y,[P.a,,]))
a3.am("aTexUV")
H.w(a,"$isa",b,"$asa")
a4=q.length
C.a.l(r,new G.bF(a4,a4+1,a4+2,a4+3))
a3.cs(a)
a3.cq("aTexUV",a0)
a3.am("aNormal")
a3.cr("aNormal",a2)
e.dy=G.de("quad",o,a3)
o=P.O(y,x)
v=new T.L(new Float32Array(2))
v.L(0.65,0.66)
o.h(0,"uRange",v)
o.h(0,"uColorAlpha",new T.aE(new Float32Array(4)))
v=h.c
o.h(0,"uTexture",v)
e.cx=new G.ax(o,"uniformsHighPass",!1,!0)
o=P.O(y,x)
r=new T.L(new Float32Array(2))
r.L(1.5,0)
o.h(0,"uDirection",r)
m=m.c
o.h(0,"uTexture",m)
e.cy=new G.ax(o,"Bloom Horizontal",!1,!0)
o=P.O(y,x)
r=new T.L(new Float32Array(2))
r.L(0,1.5)
o.h(0,"uDirection",r)
o.h(0,"uTexture",n.c)
e.db=new G.ax(o,"Bloom Vertical",!1,!0)
x=P.O(y,x)
x.h(0,"uTexture",v)
x.h(0,"uScale",0.6)
x.h(0,"uColor",$.eo())
x.h(0,"uTexture2",m)
e.dx=new G.ax(x,"uniformApply",!1,!0)
z.a=0
new Q.ky(z,l,new G.hl(p,"mat",!1,!0),h,j,i,g,f,k,e,u).$1(0)},
fw:{"^":"b;a,c9:b>,c,d,e,f,r,x,y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy"},
ky:{"^":"n:27;a,b,c,d,e,f,r,x,y,z,Q",
$1:function(a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
H.cC(a9)
if(typeof a9!=="number")return a9.aS()
z=this.a
z.a=a9+0
y=this.b
y.cx+=0.01
x=y.fx
w=x.a
if(w.u(0,0)||w.u(0,1)){w=y.cx
v=x.d
if(typeof v!=="number")return v.a8()
y.cx=w+v*0.01
v=y.cy
w=x.e
if(typeof w!=="number")return w.a8()
y.cy=v+w*0.01}w=y.fr
v=w.a
if(v.u(0,37))y.cx+=0.03
else if(v.u(0,39))y.cx-=0.03
if(v.u(0,38))y.cy+=0.03
else if(v.u(0,40))y.cy-=0.03
if(v.u(0,33))y.ch*=0.99
else if(v.u(0,34))y.ch*=1.01
if(v.u(0,32)){y.cx=0
y.cy=0}v=x.f
if(typeof v!=="number")return v.a8()
v=y.ch-v*y.dy
if(v>0)y.ch=v
v=C.r.dj(y.cy,-1.4707963267948965,1.4707963267948965)
y.cy=v
u=y.ch
t=y.cx
s=u*Math.cos(v)
r=Math.cos(t)
v=Math.sin(v)
t=Math.sin(t)
q=y.d.a
q[12]=s*r
q[13]=u*v
q[14]=s*t
t=y.dx
v=t.a
q[12]=q[12]+v[0]
q[13]=q[13]+v[1]
q[14]=q[14]+v[2]
p=new T.r(new Float32Array(3))
p.M(0,1,0)
v=y.aI()
u=new Float32Array(3)
o=new T.r(u)
o.D(v)
o.aT(0,t)
o.W(0)
n=p.bA(o)
n.W(0)
m=o.bA(n)
m.W(0)
t=n.aC(v)
r=m.aC(v)
v=o.aC(v)
l=n.a
k=l[0]
j=m.a
i=j[0]
h=u[0]
g=l[1]
f=j[1]
e=u[1]
l=l[2]
j=j[2]
u=u[2]
q[15]=1
q[14]=-v
q[13]=-r
q[12]=-t
q[11]=0
q[10]=u
q[9]=j
q[8]=l
q[7]=0
q[6]=e
q[5]=f
q[4]=g
q[3]=0
q[2]=h
q[1]=i
q[0]=k
k=y.f
i=k.a
i[0]=q[2]
i[1]=q[6]
i[2]=q[10]
y=-y.db
d=Math.sqrt(k.gbJ())
n=i[0]/d
m=i[1]/d
o=i[2]/d
c=Math.cos(y)
b=Math.sin(y)
a=1-c
a0=n*n*a+c
y=o*b
a1=n*m*a-y
i=m*b
a2=n*o*a+i
a3=m*n*a+y
a4=m*m*a+c
y=n*b
a5=m*o*a-y
a6=o*n*a-i
a7=o*m*a+y
a8=o*o*a+c
y=q[0]
i=q[4]
k=q[8]
h=q[1]
g=q[5]
f=q[9]
e=q[2]
l=q[6]
j=q[10]
u=q[3]
t=q[7]
r=q[11]
q[0]=y*a0+i*a3+k*a6
q[1]=h*a0+g*a3+f*a6
q[2]=e*a0+l*a3+j*a6
q[3]=u*a0+t*a3+r*a6
q[4]=y*a1+i*a4+k*a7
q[5]=h*a1+g*a4+f*a7
q[6]=e*a1+l*a4+j*a7
q[7]=u*a1+t*a4+r*a7
q[8]=y*a2+i*a5+k*a8
q[9]=h*a2+g*a5+f*a8
q[10]=e*a2+l*a5+j*a8
q[11]=u*a2+t*a5+r*a8
w.c.a4(0)
w.b.a4(0)
x.e=0
x.d=0
x.f=0
x.c.a4(0)
x.b.a4(0)
x=this.c
x.d.h(0,"uTime",a9/1000)
this.d.a_(17664,0,0,this.e,this.f)
w=[G.ax]
this.r.a2(this.x,H.i([this.y,x],w))
x=this.z
r=$.eG().valueAsNumber
if(typeof r!=="number")return r.a8()
t=$.eF().valueAsNumber
if(typeof t!=="number")return t.a8()
u=x.x
q=x.d
j=x.e
u.a_(17664,0,0,q,j)
l=x.cx
y=new T.L(new Float32Array(2))
y.L(r,r+0.01)
l.d.h(0,"uRange",y)
x.z.a2(x.dy,H.i([x.cx],w))
x.r.a_(17664,0,0,q,j)
x.Q.a2(x.dy,H.i([x.cy],w))
u.a_(17664,0,0,q,j)
x.Q.a2(x.dy,H.i([x.db],w))
x.y.a_(17664,0,0,x.b,x.c)
x.dx.d.h(0,"uScale",t)
x.ch.a2(x.dy,H.i([x.dx],w))
C.ad.gdc(window).bU(this,-1)
this.Q.cH(z.a)}}},1]]
setupProgram(dart,0,0)
J.A=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dg.prototype
return J.df.prototype}if(typeof a=="string")return J.bk.prototype
if(a==null)return J.dh.prototype
if(typeof a=="boolean")return J.h9.prototype
if(a.constructor==Array)return J.bi.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.b)return a
return J.bY(a)}
J.b8=function(a){if(typeof a=="string")return J.bk.prototype
if(a==null)return a
if(a.constructor==Array)return J.bi.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.b)return a
return J.bY(a)}
J.ed=function(a){if(a==null)return a
if(a.constructor==Array)return J.bi.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.b)return a
return J.bY(a)}
J.kh=function(a){if(typeof a=="number")return J.bj.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b0.prototype
return a}
J.ki=function(a){if(typeof a=="number")return J.bj.prototype
if(typeof a=="string")return J.bk.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b0.prototype
return a}
J.ee=function(a){if(typeof a=="string")return J.bk.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b0.prototype
return a}
J.j=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.b)return a
return J.bY(a)}
J.bX=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.b0.prototype
return a}
J.aA=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.A(a).B(a,b)}
J.a6=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kh(a).S(a,b)}
J.bc=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kv(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b8(a).i(a,b)}
J.cH=function(a,b){return J.ee(a).aq(a,b)}
J.bv=function(a,b){return J.j(a).d_(a,b)}
J.eK=function(a,b,c){return J.j(a).d0(a,b,c)}
J.cI=function(a,b){return J.j(a).bh(a,b)}
J.eL=function(a,b,c,d){return J.j(a).d8(a,b,c,d)}
J.cJ=function(a,b,c){return J.j(a).bj(a,b,c)}
J.eM=function(a,b){return J.j(a).de(a,b)}
J.c2=function(a,b,c){return J.j(a).bk(a,b,c)}
J.c3=function(a,b,c){return J.j(a).bm(a,b,c)}
J.bw=function(a,b,c){return J.j(a).bn(a,b,c)}
J.bx=function(a,b){return J.j(a).dh(a,b)}
J.eN=function(a,b){return J.j(a).bo(a,b)}
J.eO=function(a,b,c){return J.j(a).bp(a,b,c)}
J.cK=function(a,b,c,d){return J.j(a).bq(a,b,c,d)}
J.eP=function(a,b){return J.j(a).br(a,b)}
J.eQ=function(a,b){return J.j(a).bs(a,b)}
J.eR=function(a,b,c,d,e){return J.j(a).bt(a,b,c,d,e)}
J.eS=function(a,b){return J.ki(a).J(a,b)}
J.c4=function(a,b,c){return J.b8(a).dk(a,b,c)}
J.c5=function(a){return J.j(a).bv(a)}
J.eT=function(a){return J.j(a).bw(a)}
J.eU=function(a){return J.j(a).bx(a)}
J.eV=function(a){return J.j(a).bz(a)}
J.eW=function(a){return J.j(a).dq(a)}
J.eX=function(a,b){return J.j(a).bB(a,b)}
J.c6=function(a,b){return J.j(a).bC(a,b)}
J.eY=function(a,b,c,d){return J.j(a).bD(a,b,c,d)}
J.eZ=function(a,b,c,d,e){return J.j(a).ds(a,b,c,d,e)}
J.f_=function(a,b,c,d,e){return J.j(a).bE(a,b,c,d,e)}
J.f0=function(a,b,c,d,e,f){return J.j(a).dt(a,b,c,d,e,f)}
J.f1=function(a,b){return J.ed(a).q(a,b)}
J.bd=function(a,b){return J.j(a).bF(a,b)}
J.f2=function(a,b){return J.j(a).bG(a,b)}
J.f3=function(a){return J.j(a).du(a)}
J.f4=function(a,b){return J.j(a).C(a,b)}
J.cL=function(a,b,c,d,e,f){return J.j(a).bI(a,b,c,d,e,f)}
J.f5=function(a){return J.j(a).gdd(a)}
J.ag=function(a){return J.A(a).gv(a)}
J.by=function(a){return J.ed(a).gw(a)}
J.aO=function(a){return J.b8(a).gj(a)}
J.f6=function(a){return J.j(a).gdC(a)}
J.f7=function(a){return J.j(a).gdH(a)}
J.f8=function(a){return J.bX(a).gc9(a)}
J.bz=function(a){return J.bX(a).gX(a)}
J.c7=function(a){return J.bX(a).gR(a)}
J.cM=function(a){return J.bX(a).gah(a)}
J.c8=function(a,b){return J.j(a).Y(a,b)}
J.f9=function(a){return J.j(a).ai(a)}
J.fa=function(a){return J.j(a).aH(a)}
J.fb=function(a,b){return J.j(a).aJ(a,b)}
J.fc=function(a,b,c){return J.j(a).aK(a,b,c)}
J.cN=function(a,b,c){return J.j(a).aO(a,b,c)}
J.fd=function(a,b){return J.j(a).bK(a,b)}
J.cO=function(a){return J.j(a).dD(a)}
J.fe=function(a,b,c,d){return J.j(a).aR(a,b,c,d)}
J.ff=function(a,b,c,d){return J.j(a).bS(a,b,c,d)}
J.bA=function(a,b,c,d){return J.j(a).bT(a,b,c,d)}
J.fg=function(a,b,c,d,e,f){return J.j(a).dI(a,b,c,d,e,f)}
J.fh=function(a){return J.ee(a).dJ(a)}
J.be=function(a){return J.A(a).k(a)}
J.fi=function(a,b,c,d){return J.j(a).dL(a,b,c,d)}
J.fj=function(a,b,c){return J.j(a).bX(a,b,c)}
J.fk=function(a,b,c){return J.j(a).bY(a,b,c)}
J.c9=function(a,b,c){return J.j(a).bZ(a,b,c)}
J.fl=function(a,b,c){return J.j(a).c_(a,b,c)}
J.cP=function(a,b,c){return J.j(a).c0(a,b,c)}
J.cQ=function(a,b,c){return J.j(a).c1(a,b,c)}
J.cR=function(a,b,c){return J.j(a).c2(a,b,c)}
J.cS=function(a,b,c,d){return J.j(a).c3(a,b,c,d)}
J.cT=function(a,b,c,d){return J.j(a).c4(a,b,c,d)}
J.fm=function(a,b){return J.j(a).c5(a,b)}
J.fn=function(a,b,c){return J.j(a).dM(a,b,c)}
J.fo=function(a,b,c,d,e,f,g){return J.j(a).c6(a,b,c,d,e,f,g)}
J.fp=function(a,b,c,d,e){return J.j(a).c8(a,b,c,d,e)}
I.aL=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.bB.prototype
C.H=W.cc.prototype
C.w=W.fG.prototype
C.q=W.fN.prototype
C.I=W.fP.prototype
C.J=W.h1.prototype
C.j=W.h2.prototype
C.K=J.h.prototype
C.a=J.bi.prototype
C.x=J.df.prototype
C.b=J.dg.prototype
C.L=J.dh.prototype
C.r=J.bj.prototype
C.i=J.bk.prototype
C.S=J.bl.prototype
C.h=H.hw.prototype
C.n=H.hy.prototype
C.W=W.hz.prototype
C.A=J.hH.prototype
C.B=W.hR.prototype
C.G=W.ic.prototype
C.v=J.b0.prototype
C.ac=W.aF.prototype
C.ad=W.iv.prototype
C.e=new P.jo()
C.M=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.N=function(hooks) {
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

C.O=function(getTagFallback) {
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
C.P=function() {
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
C.Q=function(hooks) {
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
C.R=function(hooks) {
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
C.T=H.i(I.aL(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.U=H.i(I.aL(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.V=H.i(I.aL([]),[P.d])
C.t=H.i(I.aL(["bind","if","ref","repeat","syntax"]),[P.d])
C.u=H.i(I.aL(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
C.X=new G.C("vec3","vertex btangents",0)
C.d=new G.C("vec3","",0)
C.Y=new G.C("vec4","delta from light",0)
C.o=new G.C("","",0)
C.C=new G.C("vec3","vertex coordinates",0)
C.Z=new G.C("vec3","vertex binormals",0)
C.D=new G.C("vec4","for wireframe",0)
C.a_=new G.C("vec4","per vertex color",0)
C.a0=new G.C("float","for normal maps",0)
C.k=new G.C("mat4","",0)
C.a2=new G.C("mat4","",4)
C.a1=new G.C("mat4","",128)
C.c=new G.C("float","",0)
C.a3=new G.C("float","",4)
C.a4=new G.C("float","depth for shadowmaps",0)
C.f=new G.C("sampler2D","",0)
C.a5=new G.C("float","for bump maps",0)
C.a6=new G.C("vec2","texture uvs",0)
C.a7=new G.C("float","time since program start in sec",0)
C.l=new G.C("vec2","",0)
C.a8=new G.C("samplerCube","",0)
C.m=new G.C("vec4","",0)
C.a9=new G.C("vec3","vertex normals",0)
C.aa=new G.C("sampler2DShadow","",0)
C.E=new G.C("vec3","per vertex color",0)
C.F=new G.C("mat3","",0)
C.ab=new G.C("vec3","vertex tangents",0)
$.a7=0
$.aP=null
$.cW=null
$.ct=!1
$.eg=null
$.e7=null
$.el=null
$.bV=null
$.c_=null
$.cA=null
$.aI=null
$.b2=null
$.b3=null
$.cu=!1
$.H=C.e
$.ac=null
$.ce=null
$.d6=null
$.d5=null
$.d2=null
$.d1=null
$.d0=null
$.d_=null
$.ec=0
$=null
init.isHunkLoaded=function(a){return!!$dart_deferred_initializers$[a]}
init.deferredInitialized=new Object(null)
init.isHunkInitialized=function(a){return init.deferredInitialized[a]}
init.initializeLoadedHunk=function(a){var z=$dart_deferred_initializers$[a]
if(z==null)throw"DeferredLoading state error: code with hash '"+a+"' was not loaded"
z($globals$,$)
init.deferredInitialized[a]=true}
init.deferredLibraryParts={}
init.deferredPartUris=[]
init.deferredPartHashes=[];(function(a){for(var z=0;z<a.length;){var y=a[z++]
var x=a[z++]
var w=a[z++]
I.$lazy(y,x,w)}})(["kU","eq",function(){return H.ef("_$dart_dartClosure")},"lw","cE",function(){return H.ef("_$dart_js")},"mi","et",function(){return H.a9(H.bN({
toString:function(){return"$receiver$"}}))},"mj","eu",function(){return H.a9(H.bN({$method$:null,
toString:function(){return"$receiver$"}}))},"mk","ev",function(){return H.a9(H.bN(null))},"ml","ew",function(){return H.a9(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"mo","ez",function(){return H.a9(H.bN(void 0))},"mp","eA",function(){return H.a9(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"mn","ey",function(){return H.a9(H.dB(null))},"mm","ex",function(){return H.a9(function(){try{null.$method$}catch(z){return z.message}}())},"mr","eC",function(){return H.a9(H.dB(void 0))},"mq","eB",function(){return H.a9(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mB","cF",function(){return P.iy()},"mR","bb",function(){return[]},"kR","ep",function(){return{}},"mI","eD",function(){return P.cl(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"mJ","cG",function(){return P.O(P.d,P.bg)},"m4","er",function(){return new G.dA(1281,0,4294967295)},"kM","en",function(){return new G.dz(1281,1281,1281)},"mP","a5",function(){return P.dk(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.E,"aColorAlpha",C.a_,"aPosition",C.C,"aTexUV",C.a6,"aNormal",C.a9,"aBinormal",C.Z,"aCenter",C.D,"aPointSize",C.c,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.ab,"aBitangent",C.X,"iaRotation",C.m,"iaTranslation",C.d,"iaScale",C.c,"iaColor",C.d,"vColor",C.E,"vTexUV",C.l,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.C,"vPositionFromLight",C.Y,"vCenter",C.D,"vDepth",C.a4,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.F,"uConvolutionMatrix",C.F,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.aa,"uTexture",C.f,"uTexture2",C.f,"uTexture3",C.f,"uTexture4",C.f,"uSpecularMap",C.f,"uNormalMap",C.f,"uBumpMap",C.f,"uDepthMap",C.f,"uCubeTexture",C.a8,"uAnimationTable",C.f,"uTime",C.a7,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.d,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a1,"uLightDescs",C.a2,"uLightCount",C.c,"uLightTypes",C.a3,"uBumpScale",C.a5,"uNormalScale",C.a0],P.d,G.C)},"md","es",function(){var z=new G.ie(!1,!1,!1,!0,1,9729,9729)
z.d=!1
z.b=!0
z.f=9728
z.r=9728
return z},"kP","eo",function(){return T.is(1,1,1)},"n_","eJ",function(){var z,y
z=G.bM("uv-passthru")
y=[P.d]
z.aU(H.i(["aPosition","aTexUV"],y))
z.T(H.i(["vTexUV"],y))
z.aa(H.i(["void main() {\n  gl_Position = vec4(aPosition, 1.0);\n  vTexUV = aTexUV;\n}\n"],y))
return z},"mS","eE",function(){var z,y
z=G.bM("BloomPassF")
y=[P.d]
z.T(H.i(["vTexUV"],y))
z.a1(H.i(["uTexture","uTexture2","uScale","uColor"],y))
z.aa(H.i(["void main() {\n\toFragColor = texture(uTexture, vTexUV) +\n\t                uScale *\n\t                vec4(uColor, 1.0) *\n\t                texture(uTexture2, vTexUV);\n}\n"],y))
return z},"mZ","eI",function(){var z,y
z=G.bM("ScaledLuminosityHighPassF")
y=[P.d]
z.T(H.i(["vTexUV"],y))
z.a1(H.i(["uRange","uColorAlpha","uTexture"],y))
z.aa(H.i(["// http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color\nfloat RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.212, 0.715, 0.072)); }\n// float RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.299, 0.587, 0.114)); }\n\nvoid main() {\n    vec4 color = texture(uTexture, vTexUV);\n    float luma = RGB2Luma(color.rgb);\n    float alpha = smoothstep(uRange.x, uRange.y, luma);\n    oFragColor = mix(uColorAlpha, color, alpha );\n}\n "],y))
return z},"mY","eH",function(){var z,y
z=G.bM("PerlinNoiseV")
y=[P.d]
z.aU(H.i(["aPosition"],y))
z.T(H.i(["vNormal"],y))
z.a1(H.i(["uPerspectiveViewMatrix","uModelMatrix","uTime"],y))
z.aa(H.i(["vec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n","void main() {\n    vec3 normal = normalize( aPosition);\n    float f = 0.5 * pnoise( normal + uTime/3.0, vec3( 10.0 ) );\n    //vNormal = aPosition + f * normal;\n    //vNormal = f*normal;\n    vNormal = normal;\n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);\n}\n"],y))
return z},"mW","eG",function(){return H.f(C.j.aE(W.ea(),"#luminance"),"$iscg")},"mV","eF",function(){return H.f(C.j.aE(W.ea(),"#intensity"),"$iscg")}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:P.F,args:[W.T]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.F,args:[,]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.d,args:[P.B]},{func:1,ret:P.Q,args:[W.a8]},{func:1,ret:P.Q,args:[P.d]},{func:1,ret:P.F,args:[W.aU]},{func:1,ret:P.Q,args:[W.R,P.d,P.d,W.bo]},{func:1,args:[,P.d]},{func:1,args:[P.d]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[,],opt:[P.a1]},{func:1,ret:[P.aa,,],args:[,]},{func:1,ret:P.Q,args:[W.t]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.F,args:[P.D]},{func:1,args:[W.ai]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.t,W.t]},{func:1,ret:-1,args:[P.X,T.r]},{func:1,ret:P.F,args:[W.aF]},{func:1,ret:P.B,args:[P.B,P.b]},{func:1,ret:-1,args:[P.D]},{func:1,ret:P.B,args:[,,]}]
function convertToFastObject(a){function MyClass(){}MyClass.prototype=a
new MyClass()
return a}function convertToSlowObject(a){a.__MAGIC_SLOW_PROPERTY=1
delete a.__MAGIC_SLOW_PROPERTY
return a}A=convertToFastObject(A)
B=convertToFastObject(B)
C=convertToFastObject(C)
D=convertToFastObject(D)
E=convertToFastObject(E)
F=convertToFastObject(F)
G=convertToFastObject(G)
H=convertToFastObject(H)
J=convertToFastObject(J)
K=convertToFastObject(K)
L=convertToFastObject(L)
M=convertToFastObject(M)
N=convertToFastObject(N)
O=convertToFastObject(O)
P=convertToFastObject(P)
Q=convertToFastObject(Q)
R=convertToFastObject(R)
S=convertToFastObject(S)
T=convertToFastObject(T)
U=convertToFastObject(U)
V=convertToFastObject(V)
W=convertToFastObject(W)
X=convertToFastObject(X)
Y=convertToFastObject(Y)
Z=convertToFastObject(Z)
function init(){I.p=Object.create(null)
init.allClasses=map()
init.getTypeFromName=function(a){return init.allClasses[a]}
init.interceptorsByTag=map()
init.leafTags=map()
init.finishedClasses=map()
I.$lazy=function(a,b,c,d,e){if(!init.lazies)init.lazies=Object.create(null)
init.lazies[a]=b
e=e||I.p
var z={}
var y={}
e[a]=z
e[b]=function(){var x=this[a]
if(x==y)H.kF(d||a)
try{if(x===z){this[a]=y
try{x=this[a]=c()}finally{if(x===z)this[a]=null}}return x}finally{this[b]=function(){return this[a]}}}}
I.$finishIsolateConstructor=function(a){var z=a.p
function Isolate(){var y=Object.keys(z)
for(var x=0;x<y.length;x++){var w=y[x]
this[w]=z[w]}var v=init.lazies
var u=v?Object.keys(v):[]
for(var x=0;x<u.length;x++)this[v[u[x]]]=null
function ForceEfficientMap(){}ForceEfficientMap.prototype=this
new ForceEfficientMap()
for(var x=0;x<u.length;x++){var t=v[u[x]]
this[t]=z[t]}}Isolate.prototype=a.prototype
Isolate.prototype.constructor=Isolate
Isolate.p=z
Isolate.aL=a.aL
Isolate.b7=a.b7
return Isolate}}!function(){var z=function(a){var t={}
t[a]=1
return Object.keys(convertToFastObject(t))[0]}
init.getIsolateTag=function(a){return z("___dart_"+a+init.isolateTag)}
var y="___dart_isolate_tags_"
var x=Object[y]||(Object[y]=Object.create(null))
var w="_ZxYxX"
for(var v=0;;v++){var u=z(w+"_"+v+"_")
if(!(u in x)){x[u]=1
init.isolateTag=u
break}}init.dispatchPropertyName=init.getIsolateTag("dispatch_record")}();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var z=document.scripts
function onLoad(b){for(var x=0;x<z.length;++x)z[x].removeEventListener("load",onLoad,false)
a(b.target)}for(var y=0;y<z.length;++y)z[y].addEventListener("load",onLoad,false)})(function(a){init.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(Q.ei,[])
else Q.ei([])})})()
//# sourceMappingURL=bloom.dart.js.map
