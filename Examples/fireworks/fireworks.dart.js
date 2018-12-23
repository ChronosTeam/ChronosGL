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
b6.$isa=b5
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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isd)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
var d=supportsDirectProtoAccess&&b2!="a"
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.bX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.bX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.bX(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bZ=function(){}
var dart=[["","",,H,{"^":"",k0:{"^":"a;a"}}],["","",,J,{"^":"",
c1:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bv:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.c0==null){H.iX()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(P.cO("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.c5()]
if(v!=null)return v
v=H.j1(a)
if(v!=null)return v
if(typeof a=="function")return C.J
y=Object.getPrototypeOf(a)
if(y==null)return C.w
if(y===Object.prototype)return C.w
if(typeof w=="function"){Object.defineProperty(w,$.c5(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
d:{"^":"a;",
v:function(a,b){return a===b},
gt:function(a){return H.aI(a)},
k:["bN",function(a){return"Instance of '"+H.aJ(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
eU:{"^":"d;",
k:function(a){return String(a)},
gt:function(a){return a?519018:218159},
$isbU:1},
cv:{"^":"d;",
v:function(a,b){return null==b},
k:function(a){return"null"},
gt:function(a){return 0},
$isA:1},
bK:{"^":"d;",
gt:function(a){return 0},
k:["bO",function(a){return String(a)}]},
fn:{"^":"bK;"},
aL:{"^":"bK;"},
b5:{"^":"bK;",
k:function(a){var z=a[$.dr()]
if(z==null)return this.bO(a)
return"JavaScript function for "+H.e(J.be(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbH:1},
b2:{"^":"d;$ti",
n:function(a,b){H.t(b,H.o(a,0))
if(!!a.fixed$length)H.a0(P.u("add"))
a.push(b)},
cj:function(a,b){var z,y
H.D(b,"$isi",[H.o(a,0)],"$asi")
if(!!a.fixed$length)H.a0(P.u("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.V)(b),++y)a.push(b[y])},
a_:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.e(a[y]))
return z.join(b)},
bJ:function(a,b){if(!!a.immutable$list)H.a0(P.u("sort"))
H.fL(a,J.iv(),H.o(a,0))},
aw:function(a){return this.bJ(a,null)},
k:function(a){return P.bI(a,"[","]")},
gB:function(a){return new J.ei(a,a.length,0,[H.o(a,0)])},
gt:function(a){return H.aI(a)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.b(H.b8(a,b))
return a[b]},
i:function(a,b,c){H.t(c,H.o(a,0))
if(!!a.immutable$list)H.a0(P.u("indexed set"))
if(b>=a.length||b<0)throw H.b(H.b8(a,b))
a[b]=c},
$isi:1,
$isc:1,
p:{
eT:function(a,b){return J.bJ(H.r(a,[b]))},
bJ:function(a){H.bb(a)
a.fixed$length=Array
return a},
jZ:[function(a,b){return J.dQ(H.dj(a,"$isL"),H.dj(b,"$isL"))},"$2","iv",8,0,21]}},
k_:{"^":"b2;$ti"},
ei:{"^":"a;a,b,c,0d,$ti",
saG:function(a){this.d=H.t(a,H.o(this,0))},
gA:function(a){return this.d},
u:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.V(z))
x=this.c
if(x>=y){this.saG(null)
return!1}this.saG(z[x]);++this.c
return!0}},
b3:{"^":"d;",
F:function(a,b){var z
H.c2(b)
if(typeof b!=="number")throw H.b(H.aQ(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gai(b)
if(this.gai(a)===z)return 0
if(this.gai(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gai:function(a){return a===0?1/a<0:a<0},
bu:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.b(P.u(""+a+".toInt()"))},
cq:function(a,b,c){if(this.F(b,c)>0)throw H.b(H.aQ(b))
if(this.F(a,b)<0)return b
if(this.F(a,c)>0)return c
return a},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gt:function(a){return a&0x1FFFFFFF},
K:function(a,b){return(a|0)===a?a/b|0:this.cg(a,b)},
cg:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.b(P.u("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
aV:function(a,b){var z
if(a>0)z=this.ce(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
ce:function(a,b){return b>31?0:a>>>b},
I:function(a,b){if(typeof b!=="number")throw H.b(H.aQ(b))
return a>b},
$isL:1,
$asL:function(){return[P.y]},
$isau:1,
$isy:1},
cu:{"^":"b3;",$isE:1},
eV:{"^":"b3;"},
b4:{"^":"d;",
a2:function(a,b){if(b>=a.length)throw H.b(H.b8(a,b))
return a.charCodeAt(b)},
C:function(a,b){H.w(b)
if(typeof b!=="string")throw H.b(P.cj(b,null,null))
return a+b},
bM:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.bk(b,null,null))
if(b>c)throw H.b(P.bk(b,null,null))
if(c>a.length)throw H.b(P.bk(c,null,null))
return a.substring(b,c)},
bL:function(a,b){return this.bM(a,b,null)},
cr:function(a,b,c){if(c>a.length)throw H.b(P.fy(c,0,a.length,null,null))
return H.j7(a,b,c)},
F:function(a,b){var z
H.w(b)
if(typeof b!=="string")throw H.b(H.aQ(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
k:function(a){return a},
gt:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
$isL:1,
$asL:function(){return[P.f]},
$isfl:1,
$isf:1}}],["","",,H,{"^":"",
fL:function(a,b,c){H.D(a,"$isc",[c],"$asc")
H.j(b,{func:1,ret:P.E,args:[c,c]})
H.b6(a,0,J.aZ(a)-1,b,c)},
b6:function(a,b,c,d,e){H.D(a,"$isc",[e],"$asc")
H.j(d,{func:1,ret:P.E,args:[e,e]})
if(c-b<=32)H.fK(a,b,c,d,e)
else H.fJ(a,b,c,d,e)},
fK:function(a,b,c,d,e){var z,y,x,w,v
H.D(a,"$isc",[e],"$asc")
H.j(d,{func:1,ret:P.E,args:[e,e]})
for(z=b+1,y=J.aT(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.W(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
fJ:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.D(a,"$isc",[a2],"$asc")
H.j(a1,{func:1,ret:P.E,args:[a2,a2]})
z=C.e.K(a0-b+1,6)
y=b+z
x=a0-z
w=C.e.K(b+a0,2)
v=w-z
u=w+z
t=J.aT(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.W(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.W(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.W(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.W(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.W(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.W(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.W(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.W(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.W(a1.$2(p,o),0)){n=o
o=p
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,a0))
m=b+1
l=a0-1
if(J.ax(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.P()
if(i<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.I()
if(i>0){--l
continue}else{h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
l=h
m=g
break}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)
l=h
break}}}}f=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
e=a1.$2(j,r)
if(typeof e!=="number")return e.P()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.I()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.I()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.P()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}}}f=!1}c=m-1
t.i(a,b,t.h(a,c))
t.i(a,c,r)
c=l+1
t.i(a,a0,t.h(a,c))
t.i(a,c,p)
H.b6(a,b,m-2,a1,a2)
H.b6(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.ax(a1.$2(t.h(a,m),r),0);)++m
for(;J.ax(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.P()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.b6(a,m,l,a1,a2)}else H.b6(a,m,l,a1,a2)},
eJ:{"^":"i;"},
f3:{"^":"a;a,b,c,0d,$ti",
saH:function(a){this.d=H.t(a,H.o(this,0))},
gA:function(a){return this.d},
u:function(){var z,y,x,w
z=this.a
y=J.aT(z)
x=y.gj(z)
if(this.b!==x)throw H.b(P.aA(z))
w=this.c
if(w>=x){this.saH(null)
return!1}this.saH(y.q(z,w));++this.c
return!0}},
bi:{"^":"a;$ti"}}],["","",,H,{"^":"",
aw:function(a){var z,y
z=H.w(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
iR:function(a){return init.types[H.J(a)]},
j_:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.x(a).$isp},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.be(a)
if(typeof z!=="string")throw H.b(H.aQ(a))
return z},
aI:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aJ:function(a){return H.fo(a)+H.bT(H.a9(a),0,null)},
fo:function(a){var z,y,x,w,v,u,t,s,r
z=J.x(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.C||!!z.$isaL){u=C.v(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aw(w.length>1&&C.i.a2(w,0)===36?C.i.bL(w,1):w)},
ai:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
fv:function(a){var z=H.ai(a).getFullYear()+0
return z},
ft:function(a){var z=H.ai(a).getMonth()+1
return z},
fp:function(a){var z=H.ai(a).getDate()+0
return z},
fq:function(a){var z=H.ai(a).getHours()+0
return z},
fs:function(a){var z=H.ai(a).getMinutes()+0
return z},
fu:function(a){var z=H.ai(a).getSeconds()+0
return z},
fr:function(a){var z=H.ai(a).getMilliseconds()+0
return z},
aa:function(a){throw H.b(H.aQ(a))},
q:function(a,b){if(a==null)J.aZ(a)
throw H.b(H.b8(a,b))},
b8:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ay(!0,b,"index",null)
z=H.J(J.aZ(a))
if(!(b<0)){if(typeof z!=="number")return H.aa(z)
y=b>=z}else y=!0
if(y)return P.z(b,a,"index",null,z)
return P.bk(b,"index",null)},
aQ:function(a){return new P.ay(!0,a,null,null)},
b:function(a){var z
if(a==null)a=new P.cD()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.dm})
z.name=""}else z.toString=H.dm
return z},
dm:function(){return J.be(this.dartException)},
a0:function(a){throw H.b(a)},
V:function(a){throw H.b(P.aA(a))},
aW:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.j9(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.aV(x,16)&8191)===10)switch(w){case 438:return z.$1(H.bL(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.cC(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.dt()
u=$.du()
t=$.dv()
s=$.dw()
r=$.dz()
q=$.dA()
p=$.dy()
$.dx()
o=$.dC()
n=$.dB()
m=v.E(y)
if(m!=null)return z.$1(H.bL(H.w(y),m))
else{m=u.E(y)
if(m!=null){m.method="call"
return z.$1(H.bL(H.w(y),m))}else{m=t.E(y)
if(m==null){m=s.E(y)
if(m==null){m=r.E(y)
if(m==null){m=q.E(y)
if(m==null){m=p.E(y)
if(m==null){m=s.E(y)
if(m==null){m=o.E(y)
if(m==null){m=n.E(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.cC(H.w(y),m))}}return z.$1(new H.h1(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.cG()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ay(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.cG()
return a},
aU:function(a){var z
if(a==null)return new H.d1(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.d1(a)},
iI:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
iZ:function(a,b,c,d,e,f){H.h(a,"$isbH")
switch(H.J(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.cs("Unsupported number of arguments for wrapped closure"))},
aS:function(a,b){var z
H.J(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.iZ)
a.$identity=z
return z},
ev:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.x(d).$isc){z.$reflectionInfo=d
x=H.fA(z).r}else x=d
w=e?Object.create(new H.fP().constructor.prototype):Object.create(new H.bC(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.X
if(typeof u!=="number")return u.C()
$.X=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.cm(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.iR,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cl:H.bD
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.b("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cm(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
es:function(a,b,c,d){var z=H.bD
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cm:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.eu(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.es(y,!w,z,b)
if(y===0){w=$.X
if(typeof w!=="number")return w.C()
$.X=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.az
if(v==null){v=H.bf("self")
$.az=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.X
if(typeof w!=="number")return w.C()
$.X=w+1
t+=w
w="return function("+t+"){return this."
v=$.az
if(v==null){v=H.bf("self")
$.az=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
et:function(a,b,c,d){var z,y
z=H.bD
y=H.cl
switch(b?-1:a){case 0:throw H.b(H.fE("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
eu:function(a,b){var z,y,x,w,v,u,t,s
z=$.az
if(z==null){z=H.bf("self")
$.az=z}y=$.ck
if(y==null){y=H.bf("receiver")
$.ck=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.et(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.X
if(typeof y!=="number")return y.C()
$.X=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.X
if(typeof y!=="number")return y.C()
$.X=y+1
return new Function(z+y+"}")()},
bX:function(a,b,c,d,e,f,g){return H.ev(a,b,H.J(c),d,!!e,!!f,g)},
w:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.b(H.U(a,"String"))},
de:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.U(a,"double"))},
c2:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.U(a,"num"))},
bV:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.b(H.U(a,"bool"))},
J:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.b(H.U(a,"int"))},
c4:function(a,b){throw H.b(H.U(a,H.aw(H.w(b).substring(3))))},
j5:function(a,b){throw H.b(H.eq(a,H.aw(H.w(b).substring(3))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.x(a)[b])return a
H.c4(a,b)},
a1:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.x(a)[b]
else z=!0
if(z)return a
H.j5(a,b)},
dj:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.x(a)[b])return a
H.c4(a,b)},
bb:function(a){if(a==null)return a
if(!!J.x(a).$isc)return a
throw H.b(H.U(a,"List<dynamic>"))},
j0:function(a,b){var z
if(a==null)return a
z=J.x(a)
if(!!z.$isc)return a
if(z[b])return a
H.c4(a,b)},
bY:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.J(z)]
else return a.$S()}return},
b9:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.bY(J.x(a))
if(z==null)return!1
return H.d5(z,null,b,null)},
j:function(a,b){var z,y
if(a==null)return a
if($.bQ)return a
$.bQ=!0
try{if(H.b9(a,b))return a
z=H.bc(b)
y=H.U(a,z)
throw H.b(y)}finally{$.bQ=!1}},
bu:function(a,b){if(a!=null&&!H.bW(a,b))H.a0(H.U(a,H.bc(b)))
return a},
d9:function(a){var z,y
z=J.x(a)
if(!!z.$ism){y=H.bY(z)
if(y!=null)return H.bc(y)
return"Closure"}return H.aJ(a)},
j8:function(a){throw H.b(new P.eA(H.w(a)))},
df:function(a){return init.getIsolateTag(a)},
r:function(a,b){a.$ti=b
return a},
a9:function(a){if(a==null)return
return a.$ti},
lm:function(a,b,c){return H.aV(a["$as"+H.e(c)],H.a9(b))},
ba:function(a,b,c,d){var z
H.w(c)
H.J(d)
z=H.aV(a["$as"+H.e(c)],H.a9(b))
return z==null?null:z[d]},
o:function(a,b){var z
H.J(b)
z=H.a9(a)
return z==null?null:z[b]},
bc:function(a){return H.a8(a,null)},
a8:function(a,b){var z,y
H.D(b,"$isc",[P.f],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aw(a[0].builtin$cls)+H.bT(a,1,b)
if(typeof a=="function")return H.aw(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.J(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.q(b,y)
return H.e(b[y])}if('func' in a)return H.iu(a,b)
if('futureOr' in a)return"FutureOr<"+H.a8("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
iu:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.f]
H.D(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.r([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.n(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.q(b,r)
t=C.i.C(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.a8(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.a8(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.a8(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.a8(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.iH(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.w(z[l])
n=n+m+H.a8(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bT:function(a,b,c){var z,y,x,w,v,u
H.D(c,"$isc",[P.f],"$asc")
if(a==null)return""
z=new P.bN("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.a8(u,c)}return"<"+z.k(0)+">"},
iQ:function(a){var z,y,x,w
z=J.x(a)
if(!!z.$ism){y=H.bY(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.a9(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aV:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aR:function(a,b,c,d){var z,y
H.w(b)
H.bb(c)
H.w(d)
if(a==null)return!1
z=H.a9(a)
y=J.x(a)
if(y[b]==null)return!1
return H.dc(H.aV(y[d],z),null,c,null)},
D:function(a,b,c,d){H.w(b)
H.bb(c)
H.w(d)
if(a==null)return a
if(H.aR(a,b,c,d))return a
throw H.b(H.U(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aw(b.substring(3))+H.bT(c,0,null),init.mangledGlobalNames)))},
dc:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.P(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.P(a[y],b,c[y],d))return!1
return!0},
li:function(a,b,c){return a.apply(b,H.aV(J.x(b)["$as"+H.e(c)],H.a9(b)))},
dh:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="A"||a===-1||a===-2||H.dh(z)}return!1},
bW:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="A"||b===-1||b===-2||H.dh(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.bW(a,"type" in b?b.type:null))return!0
if('func' in b)return H.b9(a,b)}z=J.x(a).constructor
y=H.a9(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.P(z,null,b,null)},
t:function(a,b){if(a!=null&&!H.bW(a,b))throw H.b(H.U(a,H.bc(b)))
return a},
P:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.P(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="A")return!0
if('func' in c)return H.d5(a,b,c,d)
if('func' in a)return c.builtin$cls==="bH"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.P("type" in a?a.type:null,b,x,d)
else if(H.P(a,b,x,d))return!0
else{if(!('$is'+"aC" in y.prototype))return!1
w=y.prototype["$as"+"aC"]
v=H.aV(w,z?a.slice(1):null)
return H.P(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.dc(H.aV(r,z),b,u,d)},
d5:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.P(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.P(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.P(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.P(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.j4(m,b,l,d)},
j4:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.P(c[w],d,a[w],b))return!1}return!0},
lj:function(a,b,c){Object.defineProperty(a,H.w(b),{value:c,enumerable:false,writable:true,configurable:true})},
j1:function(a){var z,y,x,w,v,u
z=H.w($.dg.$1(a))
y=$.bt[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bw[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.w($.db.$2(a,z))
if(z!=null){y=$.bt[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bw[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bx(x)
$.bt[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bw[z]=x
return x}if(v==="-"){u=H.bx(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.dk(a,x)
if(v==="*")throw H.b(P.cO(z))
if(init.leafTags[z]===true){u=H.bx(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.dk(a,x)},
dk:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.c1(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bx:function(a){return J.c1(a,!1,null,!!a.$isp)},
j3:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bx(z)
else return J.c1(z,c,null,null)},
iX:function(){if(!0===$.c0)return
$.c0=!0
H.iY()},
iY:function(){var z,y,x,w,v,u,t,s
$.bt=Object.create(null)
$.bw=Object.create(null)
H.iT()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.dl.$1(v)
if(u!=null){t=H.j3(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
iT:function(){var z,y,x,w,v,u,t
z=C.G()
z=H.at(C.D,H.at(C.I,H.at(C.u,H.at(C.u,H.at(C.H,H.at(C.E,H.at(C.F(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.dg=new H.iU(v)
$.db=new H.iV(u)
$.dl=new H.iW(t)},
at:function(a,b){return a(b)||b},
j7:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fz:{"^":"a;a,b,c,d,e,f,r,0x",p:{
fA:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bJ(z)
y=z[0]
x=z[1]
return new H.fz(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
fX:{"^":"a;a,b,c,d,e,f",
E:function(a){var z,y,x
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
Y:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.r([],[P.f])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.fX(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bm:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
cL:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
fj:{"^":"K;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
cC:function(a,b){return new H.fj(a,b==null?null:b.method)}}},
eW:{"^":"K;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
bL:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.eW(a,y,z?null:b.receiver)}}},
h1:{"^":"K;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
j9:{"^":"m:5;a",
$1:function(a){if(!!J.x(a).$isK)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
d1:{"^":"a;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isT:1},
m:{"^":"a;",
k:function(a){return"Closure '"+H.aJ(this).trim()+"'"},
gbH:function(){return this},
$isbH:1,
gbH:function(){return this}},
cI:{"^":"m;"},
fP:{"^":"cI;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aw(z)+"'"}},
bC:{"^":"cI;a,b,c,d",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bC))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gt:function(a){var z,y
z=this.c
if(z==null)y=H.aI(this.a)
else y=typeof z!=="object"?J.a2(z):H.aI(z)
return(y^H.aI(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.aJ(z)+"'")},
p:{
bD:function(a){return a.a},
cl:function(a){return a.c},
bf:function(a){var z,y,x,w,v
z=new H.bC("self","target","receiver","name")
y=J.bJ(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
fY:{"^":"K;a",
k:function(a){return this.a},
p:{
U:function(a,b){return new H.fY("TypeError: "+P.bh(a)+": type '"+H.d9(a)+"' is not a subtype of type '"+b+"'")}}},
ep:{"^":"K;a",
k:function(a){return this.a},
p:{
eq:function(a,b){return new H.ep("CastError: "+P.bh(a)+": type '"+H.d9(a)+"' is not a subtype of type '"+b+"'")}}},
fD:{"^":"K;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
fE:function(a){return new H.fD(a)}}},
cM:{"^":"a;a,0b,0c,0d",
gY:function(){var z=this.b
if(z==null){z=H.bc(this.a)
this.b=z}return z},
k:function(a){return this.gY()},
gt:function(a){var z=this.d
if(z==null){z=C.i.gt(this.gY())
this.d=z}return z},
v:function(a,b){if(b==null)return!1
return b instanceof H.cM&&this.gY()===b.gY()}},
cw:{"^":"f4;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gH:function(a){return new H.aF(this,[H.o(this,0)])},
af:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.c3(z,b)}else{y=this.cC(b)
return y}},
cC:function(a){var z=this.d
if(z==null)return!1
return this.ah(this.a9(z,J.a2(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.W(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.W(w,b)
x=y==null?null:y.b
return x}else return this.cD(b)},
cD:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.a9(z,J.a2(a)&0x3ffffff)
x=this.ah(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.t(b,H.o(this,0))
H.t(c,H.o(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aa()
this.b=z}this.aJ(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aa()
this.c=y}this.aJ(y,b,c)}else{x=this.d
if(x==null){x=this.aa()
this.d=x}w=J.a2(b)&0x3ffffff
v=this.a9(x,w)
if(v==null)this.ad(x,w,[this.ab(b,c)])
else{u=this.ah(v,b)
if(u>=0)v[u].b=c
else v.push(this.ab(b,c))}}},
w:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.o(this,0),H.o(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.b(P.aA(this))
z=z.c}},
aJ:function(a,b,c){var z
H.t(b,H.o(this,0))
H.t(c,H.o(this,1))
z=this.W(a,b)
if(z==null)this.ad(a,b,this.ab(b,c))
else z.b=c},
aS:function(){this.r=this.r+1&67108863},
ab:function(a,b){var z,y
z=new H.f0(H.t(a,H.o(this,0)),H.t(b,H.o(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.aS()
return z},
ah:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.ax(a[y].a,b))return y
return-1},
k:function(a){return P.cz(this)},
W:function(a,b){return a[b]},
a9:function(a,b){return a[b]},
ad:function(a,b,c){a[b]=c},
c4:function(a,b){delete a[b]},
c3:function(a,b){return this.W(a,b)!=null},
aa:function(){var z=Object.create(null)
this.ad(z,"<non-identifier-key>",z)
this.c4(z,"<non-identifier-key>")
return z},
$iscx:1},
f0:{"^":"a;a,b,0c,0d"},
aF:{"^":"eJ;a,$ti",
gj:function(a){return this.a.a},
gB:function(a){var z,y
z=this.a
y=new H.f1(z,z.r,this.$ti)
y.c=z.e
return y}},
f1:{"^":"a;a,b,0c,0d,$ti",
saI:function(a){this.d=H.t(a,H.o(this,0))},
gA:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.aA(z))
else{z=this.c
if(z==null){this.saI(null)
return!1}else{this.saI(z.a)
this.c=this.c.c
return!0}}}},
iU:{"^":"m:5;a",
$1:function(a){return this.a(a)}},
iV:{"^":"m:10;a",
$2:function(a,b){return this.a(a,b)}},
iW:{"^":"m:11;a",
$1:function(a){return this.a(H.w(a))}}}],["","",,H,{"^":"",
iH:function(a){return J.eT(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
c3:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
a_:function(a,b,c){H.bb(b)
if(a>>>0!==a||a>=c)throw H.b(H.b8(b,a))},
fi:{"^":"d;",$isfZ:1,"%":"DataView;ArrayBufferView;bM|cW|cX|cB|cY|cZ|a7"},
bM:{"^":"fi;",
gj:function(a){return a.length},
$isp:1,
$asp:I.bZ},
cB:{"^":"cX;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
i:function(a,b,c){H.de(c)
H.a_(b,a,a.length)
a[b]=c},
$asbi:function(){return[P.au]},
$asl:function(){return[P.au]},
$isi:1,
$asi:function(){return[P.au]},
$isc:1,
$asc:function(){return[P.au]},
"%":"Float64Array"},
a7:{"^":"cZ;",
i:function(a,b,c){H.J(c)
H.a_(b,a,a.length)
a[b]=c},
$asbi:function(){return[P.E]},
$asl:function(){return[P.E]},
$isi:1,
$asi:function(){return[P.E]},
$isc:1,
$asc:function(){return[P.E]}},
fh:{"^":"cB;",$isa4:1,"%":"Float32Array"},
ka:{"^":"a7;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"Int16Array"},
kb:{"^":"a7;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
$iseR:1,
"%":"Int32Array"},
kc:{"^":"a7;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"Int8Array"},
kd:{"^":"a7;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
ke:{"^":"a7;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
kf:{"^":"a7;",
gj:function(a){return a.length},
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
kg:{"^":"a7;",
gj:function(a){return a.length},
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
cW:{"^":"bM+l;"},
cX:{"^":"cW+bi;"},
cY:{"^":"bM+l;"},
cZ:{"^":"cY+bi;"}}],["","",,P,{"^":"",
h9:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.iC()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aS(new P.hb(z),1)).observe(y,{childList:true})
return new P.ha(z,y,x)}else if(self.setImmediate!=null)return P.iD()
return P.iE()},
l6:[function(a){self.scheduleImmediate(H.aS(new P.hc(H.j(a,{func:1,ret:-1})),0))},"$1","iC",4,0,4],
l7:[function(a){self.setImmediate(H.aS(new P.hd(H.j(a,{func:1,ret:-1})),0))},"$1","iD",4,0,4],
l8:[function(a){H.j(a,{func:1,ret:-1})
P.ib(0,a)},"$1","iE",4,0,4],
iy:function(a,b){if(H.b9(a,{func:1,args:[P.a,P.T]}))return H.j(a,{func:1,ret:null,args:[P.a,P.T]})
if(H.b9(a,{func:1,args:[P.a]}))return H.j(a,{func:1,ret:null,args:[P.a]})
throw H.b(P.cj(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ix:function(){var z,y
for(;z=$.as,z!=null;){$.aP=null
y=z.b
$.as=y
if(y==null)$.aO=null
z.a.$0()}},
lg:[function(){$.bR=!0
try{P.ix()}finally{$.aP=null
$.bR=!1
if($.as!=null)$.c6().$1(P.dd())}},"$0","dd",0,0,1],
d8:function(a){var z=new P.cQ(H.j(a,{func:1,ret:-1}))
if($.as==null){$.aO=z
$.as=z
if(!$.bR)$.c6().$1(P.dd())}else{$.aO.b=z
$.aO=z}},
iB:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
z=$.as
if(z==null){P.d8(a)
$.aP=$.aO
return}y=new P.cQ(a)
x=$.aP
if(x==null){y.b=z
$.aP=y
$.as=y}else{y.b=x.b
x.b=y
$.aP=y
if(y.b==null)$.aO=y}},
j6:function(a){var z,y
z={func:1,ret:-1}
H.j(a,z)
y=$.B
if(C.d===y){P.bs(null,null,C.d,a)
return}y.toString
P.bs(null,null,y,H.j(y.b0(a),z))},
br:function(a,b,c,d,e){var z={}
z.a=d
P.iB(new P.iz(z,e))},
d6:function(a,b,c,d,e){var z,y
H.j(d,{func:1,ret:e})
y=$.B
if(y===c)return d.$0()
$.B=c
z=y
try{y=d.$0()
return y}finally{$.B=z}},
d7:function(a,b,c,d,e,f,g){var z,y
H.j(d,{func:1,ret:f,args:[g]})
H.t(e,g)
y=$.B
if(y===c)return d.$1(e)
$.B=c
z=y
try{y=d.$1(e)
return y}finally{$.B=z}},
iA:function(a,b,c,d,e,f,g,h,i){var z,y
H.j(d,{func:1,ret:g,args:[h,i]})
H.t(e,h)
H.t(f,i)
y=$.B
if(y===c)return d.$2(e,f)
$.B=c
z=y
try{y=d.$2(e,f)
return y}finally{$.B=z}},
bs:function(a,b,c,d){var z
H.j(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.b0(d):c.cn(d,-1)
P.d8(d)},
hb:{"^":"m:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ha:{"^":"m:12;a,b,c",
$1:function(a){var z,y
this.a.a=H.j(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
hc:{"^":"m:0;a",
$0:function(){this.a.$0()}},
hd:{"^":"m:0;a",
$0:function(){this.a.$0()}},
ia:{"^":"a;a,0b,c",
bZ:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aS(new P.ic(this,b),0),a)
else throw H.b(P.u("`setTimeout()` not found."))},
p:{
ib:function(a,b){var z=new P.ia(!0,0)
z.bZ(a,b)
return z}}},
ic:{"^":"m:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
hf:{"^":"a;$ti"},
i7:{"^":"hf;a,$ti"},
ar:{"^":"a;0a,b,c,d,e,$ti",
cE:function(a){if(this.c!==6)return!0
return this.b.b.ak(H.j(this.d,{func:1,ret:P.bU,args:[P.a]}),a.a,P.bU,P.a)},
cB:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.o(this,1)}
w=this.b.b
if(H.b9(z,{func:1,args:[P.a,P.T]}))return H.bu(w.cK(z,a.a,a.b,null,y,P.T),x)
else return H.bu(w.ak(H.j(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
Z:{"^":"a;aW:a<,b,0cd:c<,$ti",
bt:function(a,b,c){var z,y,x,w
z=H.o(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.B
if(y!==C.d){y.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.iy(b,y)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.Z(0,$.B,[c])
w=b==null?1:3
this.aK(new P.ar(x,w,a,b,[z,c]))
return x},
bs:function(a,b){return this.bt(a,null,b)},
aK:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isar")
this.c=a}else{if(z===2){y=H.h(this.c,"$isZ")
z=y.a
if(z<4){y.aK(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bs(null,null,z,H.j(new P.ht(this,a),{func:1,ret:-1}))}},
aT:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isar")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isZ")
y=u.a
if(y<4){u.aT(a)
return}this.a=y
this.c=u.c}z.a=this.X(a)
y=this.b
y.toString
P.bs(null,null,y,H.j(new P.hy(z,this),{func:1,ret:-1}))}},
ac:function(){var z=H.h(this.c,"$isar")
this.c=null
return this.X(z)},
X:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
a5:function(a){var z,y,x
z=H.o(this,0)
H.bu(a,{futureOr:1,type:z})
y=this.$ti
if(H.aR(a,"$isaC",y,"$asaC"))if(H.aR(a,"$isZ",y,null))P.cS(a,this)
else P.hu(a,this)
else{x=this.ac()
H.t(a,z)
this.a=4
this.c=a
P.aN(this,x)}},
aN:function(a,b){var z
H.h(b,"$isT")
z=this.ac()
this.a=8
this.c=new P.O(a,b)
P.aN(this,z)},
$isaC:1,
p:{
hu:function(a,b){var z,y,x
b.a=1
try{a.bt(new P.hv(b),new P.hw(b),null)}catch(x){z=H.aW(x)
y=H.aU(x)
P.j6(new P.hx(b,z,y))}},
cS:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isZ")
if(z>=4){y=b.ac()
b.a=a.a
b.c=a.c
P.aN(b,y)}else{y=H.h(b.c,"$isar")
b.a=2
b.c=a
a.aT(y)}},
aN:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isO")
y=y.b
u=v.a
t=v.b
y.toString
P.br(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.aN(z.a,b)}y=z.a
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
if(p){H.h(r,"$isO")
y=y.b
u=r.a
t=r.b
y.toString
P.br(null,null,y,u,t)
return}o=$.B
if(o!=q)$.B=q
else o=null
y=b.c
if(y===8)new P.hB(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.hA(x,b,r).$0()}else if((y&2)!==0)new P.hz(z,x,b).$0()
if(o!=null)$.B=o
y=x.b
if(!!J.x(y).$isaC){if(y.a>=4){n=H.h(t.c,"$isar")
t.c=null
b=t.X(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.cS(y,t)
return}}m=b.b
n=H.h(m.c,"$isar")
m.c=null
b=m.X(n)
y=x.a
u=x.b
if(!y){H.t(u,H.o(m,0))
m.a=4
m.c=u}else{H.h(u,"$isO")
m.a=8
m.c=u}z.a=m
y=m}}}},
ht:{"^":"m:0;a,b",
$0:function(){P.aN(this.a,this.b)}},
hy:{"^":"m:0;a,b",
$0:function(){P.aN(this.b,this.a.a)}},
hv:{"^":"m:6;a",
$1:function(a){var z=this.a
z.a=0
z.a5(a)}},
hw:{"^":"m:13;a",
$2:function(a,b){H.h(b,"$isT")
this.a.aN(a,b)},
$1:function(a){return this.$2(a,null)}},
hx:{"^":"m:0;a,b,c",
$0:function(){this.a.aN(this.b,this.c)}},
hB:{"^":"m:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bp(H.j(w.d,{func:1}),null)}catch(v){y=H.aW(v)
x=H.aU(v)
if(this.d){w=H.h(this.a.a.c,"$isO").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isO")
else u.b=new P.O(y,x)
u.a=!0
return}if(!!J.x(z).$isaC){if(z instanceof P.Z&&z.gaW()>=4){if(z.gaW()===8){w=this.b
w.b=H.h(z.gcd(),"$isO")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.bs(new P.hC(t),null)
w.a=!1}}},
hC:{"^":"m:14;a",
$1:function(a){return this.a}},
hA:{"^":"m:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.o(x,0)
v=H.t(this.c,w)
u=H.o(x,1)
this.a.b=x.b.b.ak(H.j(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aW(t)
y=H.aU(t)
x=this.a
x.b=new P.O(z,y)
x.a=!0}}},
hz:{"^":"m:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isO")
w=this.c
if(w.cE(z)&&w.e!=null){v=this.b
v.b=w.cB(z)
v.a=!1}}catch(u){y=H.aW(u)
x=H.aU(u)
w=H.h(this.a.a.c,"$isO")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.O(y,x)
s.a=!0}}},
cQ:{"^":"a;a,0b"},
fR:{"^":"a;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.Z(0,$.B,[P.E])
z.a=0
x=H.o(this,0)
w=H.j(new P.fT(z,this),{func:1,ret:-1,args:[x]})
H.j(new P.fU(z,y),{func:1,ret:-1})
W.aq(this.a,this.b,w,!1,x)
return y}},
fT:{"^":"m;a,b",
$1:function(a){H.t(a,H.o(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.A,args:[H.o(this.b,0)]}}},
fU:{"^":"m:0;a,b",
$0:function(){this.b.a5(this.a.a)}},
fS:{"^":"a;"},
O:{"^":"a;a,b",
k:function(a){return H.e(this.a)},
$isK:1},
ii:{"^":"a;",$isl4:1},
iz:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.cD()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.b(z)
x=H.b(z)
x.stack=y.k(0)
throw x}},
hW:{"^":"ii;",
cL:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
try{if(C.d===$.B){a.$0()
return}P.d6(null,null,this,a,-1)}catch(x){z=H.aW(x)
y=H.aU(x)
P.br(null,null,this,z,H.h(y,"$isT"))}},
cM:function(a,b,c){var z,y,x
H.j(a,{func:1,ret:-1,args:[c]})
H.t(b,c)
try{if(C.d===$.B){a.$1(b)
return}P.d7(null,null,this,a,b,-1,c)}catch(x){z=H.aW(x)
y=H.aU(x)
P.br(null,null,this,z,H.h(y,"$isT"))}},
cn:function(a,b){return new P.hY(this,H.j(a,{func:1,ret:b}),b)},
b0:function(a){return new P.hX(this,H.j(a,{func:1,ret:-1}))},
co:function(a,b){return new P.hZ(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
bp:function(a,b){H.j(a,{func:1,ret:b})
if($.B===C.d)return a.$0()
return P.d6(null,null,this,a,b)},
ak:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.t(b,d)
if($.B===C.d)return a.$1(b)
return P.d7(null,null,this,a,b,c,d)},
cK:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.t(b,e)
H.t(c,f)
if($.B===C.d)return a.$2(b,c)
return P.iA(null,null,this,a,b,c,d,e,f)}},
hY:{"^":"m;a,b,c",
$0:function(){return this.a.bp(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
hX:{"^":"m:1;a,b",
$0:function(){return this.a.cL(this.b)}},
hZ:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.cM(this.b,H.t(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
cy:function(a,b,c){H.bb(a)
return H.D(H.iI(a,new H.cw(0,0,[b,c])),"$iscx",[b,c],"$ascx")},
a5:function(a,b){return new H.cw(0,0,[a,b])},
a6:function(a,b,c,d){return new P.hJ(0,0,[d])},
eS:function(a,b,c){var z,y
if(P.bS(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.r([],[P.f])
y=$.aX()
C.a.n(y,a)
try{P.iw(a,z)}finally{if(0>=y.length)return H.q(y,-1)
y.pop()}y=P.cH(b,H.j0(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
bI:function(a,b,c){var z,y,x
if(P.bS(a))return b+"..."+c
z=new P.bN(b)
y=$.aX()
C.a.n(y,a)
try{x=z
x.a=P.cH(x.gJ(),a,", ")}finally{if(0>=y.length)return H.q(y,-1)
y.pop()}y=z
y.a=y.gJ()+c
y=z.gJ()
return y.charCodeAt(0)==0?y:y},
bS:function(a){var z,y
for(z=0;y=$.aX(),z<y.length;++z)if(a===y[z])return!0
return!1},
iw:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.D(b,"$isc",[P.f],"$asc")
z=a.gB(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.u())return
w=H.e(z.gA(z))
C.a.n(b,w)
y+=w.length+2;++x}if(!z.u()){if(x<=5)return
if(0>=b.length)return H.q(b,-1)
v=b.pop()
if(0>=b.length)return H.q(b,-1)
u=b.pop()}else{t=z.gA(z);++x
if(!z.u()){if(x<=4){C.a.n(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.q(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA(z);++x
for(;z.u();t=s,s=r){r=z.gA(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.q(b,-1)
y-=b.pop().length+2;--x}C.a.n(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.q(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.n(b,q)
C.a.n(b,u)
C.a.n(b,v)},
f2:function(a,b){var z,y,x
z=P.a6(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.V)(a),++x)z.n(0,H.t(a[x],b))
return z},
cz:function(a){var z,y,x
z={}
if(P.bS(a))return"{...}"
y=new P.bN("")
try{C.a.n($.aX(),a)
x=y
x.a=x.gJ()+"{"
z.a=!0
J.e0(a,new P.f5(z,y))
z=y
z.a=z.gJ()+"}"}finally{z=$.aX()
if(0>=z.length)return H.q(z,-1)
z.pop()}z=y.gJ()
return z.charCodeAt(0)==0?z:z},
hJ:{"^":"hD;a,0b,0c,0d,0e,0f,r,$ti",
gB:function(a){return P.cV(this,this.r,H.o(this,0))},
gj:function(a){return this.a},
D:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.h(z[b],"$isb7")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.h(y[b],"$isb7")!=null}else return this.c2(b)},
c2:function(a){var z=this.d
if(z==null)return!1
return this.a8(this.aQ(z,a),a)>=0},
n:function(a,b){var z,y
H.t(b,H.o(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.bP()
this.b=z}return this.aL(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.bP()
this.c=y}return this.aL(y,b)}else return this.c_(0,b)},
c_:function(a,b){var z,y,x
H.t(b,H.o(this,0))
z=this.d
if(z==null){z=P.bP()
this.d=z}y=this.aO(b)
x=z[y]
if(x==null)z[y]=[this.a4(b)]
else{if(this.a8(x,b)>=0)return!1
x.push(this.a4(b))}return!0},
bo:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.aU(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.aU(this.c,b)
else return this.cb(0,b)},
cb:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.aQ(z,b)
x=this.a8(y,b)
if(x<0)return!1
this.aX(y.splice(x,1)[0])
return!0},
L:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.a3()}},
aL:function(a,b){H.t(b,H.o(this,0))
if(H.h(a[b],"$isb7")!=null)return!1
a[b]=this.a4(b)
return!0},
aU:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isb7")
if(z==null)return!1
this.aX(z)
delete a[b]
return!0},
a3:function(){this.r=this.r+1&67108863},
a4:function(a){var z,y
z=new P.b7(H.t(a,H.o(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.a3()
return z},
aX:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.a3()},
aO:function(a){return J.a2(a)&0x3ffffff},
aQ:function(a,b){return a[this.aO(b)]},
a8:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.ax(a[y].a,b))return y
return-1},
p:{
bP:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
b7:{"^":"a;a,0b,0c"},
hK:{"^":"a;a,b,0c,0d,$ti",
saM:function(a){this.d=H.t(a,H.o(this,0))},
gA:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.aA(z))
else{z=this.c
if(z==null){this.saM(null)
return!1}else{this.saM(H.t(z.a,H.o(this,0)))
this.c=this.c.b
return!0}}},
p:{
cV:function(a,b,c){var z=new P.hK(a,b,[c])
z.c=a.e
return z}}},
hD:{"^":"fF;"},
l:{"^":"a;$ti",
gB:function(a){return new H.f3(a,this.gj(a),0,[H.ba(this,a,"l",0)])},
q:function(a,b){return this.h(a,b)},
cA:function(a,b,c,d){var z,y,x
H.t(b,d)
H.j(c,{func:1,ret:d,args:[d,H.ba(this,a,"l",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.b(P.aA(a))}return y},
k:function(a){return P.bI(a,"[","]")}},
f4:{"^":"M;"},
f5:{"^":"m:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
M:{"^":"a;$ti",
w:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.ba(this,a,"M",0),H.ba(this,a,"M",1)]})
for(z=J.cb(this.gH(a));z.u();){y=z.gA(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.aZ(this.gH(a))},
k:function(a){return P.cz(a)},
$isH:1},
fG:{"^":"a;$ti",
k:function(a){return P.bI(this,"{","}")},
$isi:1,
$isky:1},
fF:{"^":"fG;"}}],["","",,P,{"^":"",
eL:function(a){if(a instanceof H.m)return a.k(0)
return"Instance of '"+H.aJ(a)+"'"},
bh:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.be(a)
if(typeof a==="string")return JSON.stringify(a)
return P.eL(a)},
cs:function(a){return new P.hq(a)},
av:function(a){H.c3(H.e(a))},
bU:{"^":"a;"},
"+bool":0,
bg:{"^":"a;a,b",
v:function(a,b){if(b==null)return!1
return b instanceof P.bg&&this.a===b.a&&!0},
F:function(a,b){return C.e.F(this.a,H.h(b,"$isbg").a)},
gt:function(a){var z=this.a
return(z^C.e.aV(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.eB(H.fv(this))
y=P.b_(H.ft(this))
x=P.b_(H.fp(this))
w=P.b_(H.fq(this))
v=P.b_(H.fs(this))
u=P.b_(H.fu(this))
t=P.eC(H.fr(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isL:1,
$asL:function(){return[P.bg]},
p:{
eB:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
eC:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
b_:function(a){if(a>=10)return""+a
return"0"+a}}},
au:{"^":"y;"},
"+double":0,
aB:{"^":"a;a",
I:function(a,b){return C.e.I(this.a,H.h(b,"$isaB").a)},
v:function(a,b){if(b==null)return!1
return b instanceof P.aB&&this.a===b.a},
gt:function(a){return this.a&0x1FFFFFFF},
F:function(a,b){return C.e.F(this.a,H.h(b,"$isaB").a)},
k:function(a){var z,y,x,w,v
z=new P.eI()
y=this.a
if(y<0)return"-"+new P.aB(0-y).k(0)
x=z.$1(C.e.K(y,6e7)%60)
w=z.$1(C.e.K(y,1e6)%60)
v=new P.eH().$1(y%1e6)
return""+C.e.K(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isL:1,
$asL:function(){return[P.aB]},
p:{
eG:function(a,b,c,d,e,f){return new P.aB(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
eH:{"^":"m:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
eI:{"^":"m:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
K:{"^":"a;"},
cD:{"^":"K;",
k:function(a){return"Throw of null."}},
ay:{"^":"K;a,b,c,d",
ga7:function(){return"Invalid argument"+(!this.a?"(s)":"")},
ga6:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.ga7()+y+x
if(!this.a)return w
v=this.ga6()
u=P.bh(this.b)
return w+v+": "+u},
p:{
cj:function(a,b,c){return new P.ay(!0,a,b,c)}}},
cE:{"^":"ay;e,f,a,b,c,d",
ga7:function(){return"RangeError"},
ga6:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bk:function(a,b,c){return new P.cE(null,null,!0,a,b,"Value not in range")},
fy:function(a,b,c,d,e){return new P.cE(b,c,!0,a,d,"Invalid value")}}},
eQ:{"^":"ay;e,j:f>,a,b,c,d",
ga7:function(){return"RangeError"},
ga6:function(){var z,y
z=H.J(this.b)
if(typeof z!=="number")return z.P()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
z:function(a,b,c,d,e){var z=H.J(e==null?J.aZ(b):e)
return new P.eQ(b,z,!0,a,c,"Index out of range")}}},
h2:{"^":"K;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
u:function(a){return new P.h2(a)}}},
h0:{"^":"K;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cO:function(a){return new P.h0(a)}}},
fN:{"^":"K;a",
k:function(a){return"Bad state: "+this.a},
p:{
fO:function(a){return new P.fN(a)}}},
ew:{"^":"K;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bh(z)+"."},
p:{
aA:function(a){return new P.ew(a)}}},
cG:{"^":"a;",
k:function(a){return"Stack Overflow"},
$isK:1},
eA:{"^":"K;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
hq:{"^":"a;a",
k:function(a){return"Exception: "+this.a}},
E:{"^":"y;"},
"+int":0,
i:{"^":"a;$ti",
gj:function(a){var z,y
z=this.gB(this)
for(y=0;z.u();)++y
return y},
k:function(a){return P.eS(this,"(",")")}},
c:{"^":"a;$ti",$isi:1},
"+List":0,
H:{"^":"a;$ti"},
A:{"^":"a;",
gt:function(a){return P.a.prototype.gt.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
y:{"^":"a;",$isL:1,
$asL:function(){return[P.y]}},
"+num":0,
a:{"^":";",
v:function(a,b){return this===b},
gt:function(a){return H.aI(this)},
k:function(a){return"Instance of '"+H.aJ(this)+"'"},
toString:function(){return this.k(this)}},
T:{"^":"a;"},
f:{"^":"a;",$isL:1,
$asL:function(){return[P.f]},
$isfl:1},
"+String":0,
bN:{"^":"a;J:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
cH:function(a,b,c){var z=J.cb(b)
if(!z.u())return a
if(c.length===0){do a+=H.e(z.gA(z))
while(z.u())}else{a+=H.e(z.gA(z))
for(;z.u();)a=a+c+H.e(z.gA(z))}return a}}}}],["","",,W,{"^":"",
eK:function(a){H.h(a,"$isG")
return"wheel"},
bq:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
cU:function(a,b,c,d){var z,y
z=W.bq(W.bq(W.bq(W.bq(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
d4:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.hi(a)
if(!!J.x(z).$isG)return z
return}else return H.h(a,"$isG")},
da:function(a,b){var z
H.j(a,{func:1,ret:-1,args:[b]})
z=$.B
if(z===C.d)return a
return z.co(a,b)},
R:{"^":"b0;","%":"HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
ja:{"^":"d;0j:length=","%":"AccessibleNodeList"},
jb:{"^":"R;",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
jc:{"^":"R;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
el:{"^":"d;","%":";Blob"},
bE:{"^":"R;0m:height=,0l:width=",
am:function(a,b,c){if(c!=null)return this.c6(a,b,P.iF(c,null))
return this.c7(a,b)},
bI:function(a,b){return this.am(a,b,null)},
c6:function(a,b,c){return a.getContext(b,c)},
c7:function(a,b){return a.getContext(b)},
$isbE:1,
"%":"HTMLCanvasElement"},
eo:{"^":"d;",
Z:function(a,b,c){return a.addColorStop(b,c)},
"%":"CanvasGradient"},
bF:{"^":"d;",
b9:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
cz:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
a1:function(a){return P.Q(a.getContextAttributes())},
$isbF:1,
"%":"CanvasRenderingContext2D"},
jh:{"^":"C;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
ex:{"^":"bG;",$isex:1,"%":"CSSNumericValue|CSSUnitValue"},
jj:{"^":"ez;0j:length=","%":"CSSPerspective"},
ac:{"^":"d;",$isac:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
jk:{"^":"hg;0j:length=",
aq:function(a,b){var z=this.c8(a,this.c1(a,b))
return z==null?"":z},
c1:function(a,b){var z,y
z=$.dq()
y=z[b]
if(typeof y==="string")return y
y=this.cf(a,b)
z[b]=y
return y},
cf:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.eD()+b
if(z in a)return z
return b},
c8:function(a,b){return a.getPropertyValue(b)},
gm:function(a){return a.height},
gl:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
ey:{"^":"a;",
gm:function(a){return this.aq(a,"height")},
gl:function(a){return this.aq(a,"width")}},
bG:{"^":"d;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
ez:{"^":"d;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
jm:{"^":"bG;0j:length=","%":"CSSTransformValue"},
jn:{"^":"bG;0j:length=","%":"CSSUnparsedValue"},
jp:{"^":"d;0j:length=","%":"DataTransferItemList"},
eE:{"^":"C;",
cJ:function(a,b){return a.querySelector(b)},
"%":"XMLDocument;Document"},
jq:{"^":"d;",
k:function(a){return String(a)},
"%":"DOMException"},
jr:{"^":"hk;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.D(c,"$isN",[P.y],"$asN")
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.q(a,b)
return a[b]},
$isp:1,
$asp:function(){return[[P.N,P.y]]},
$asl:function(){return[[P.N,P.y]]},
$isi:1,
$asi:function(){return[[P.N,P.y]]},
$isc:1,
$asc:function(){return[[P.N,P.y]]},
$asn:function(){return[[P.N,P.y]]},
"%":"ClientRectList|DOMRectList"},
eF:{"^":"d;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gl(a))+" x "+H.e(this.gm(a))},
v:function(a,b){var z
if(b==null)return!1
if(!H.aR(b,"$isN",[P.y],"$asN"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.k(b)
z=this.gl(a)===z.gl(b)&&this.gm(a)===z.gm(b)}else z=!1
else z=!1
return z},
gt:function(a){return W.cU(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gl(a)&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF)},
gm:function(a){return a.height},
gl:function(a){return a.width},
$isN:1,
$asN:function(){return[P.y]},
"%":";DOMRectReadOnly"},
js:{"^":"hm;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.w(c)
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.q(a,b)
return a[b]},
$isp:1,
$asp:function(){return[P.f]},
$asl:function(){return[P.f]},
$isi:1,
$asi:function(){return[P.f]},
$isc:1,
$asc:function(){return[P.f]},
$asn:function(){return[P.f]},
"%":"DOMStringList"},
jt:{"^":"d;0j:length=","%":"DOMTokenList"},
b0:{"^":"C;",
k:function(a){return a.localName},
gcF:function(a){return new W.bp(a,"mousedown",!1,[W.S])},
gcG:function(a){return new W.bp(a,"mousemove",!1,[W.S])},
gcH:function(a){return new W.bp(a,"mouseup",!1,[W.S])},
gcI:function(a){return new W.bp(a,H.w(W.eK(a)),!1,[W.aM])},
$isb0:1,
"%":";Element"},
jv:{"^":"R;0m:height=,0l:width=","%":"HTMLEmbedElement"},
a3:{"^":"d;",$isa3:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
G:{"^":"d;",
ck:function(a,b,c,d){H.j(c,{func:1,args:[W.a3]})
if(c!=null)this.c0(a,b,c,!1)},
c0:function(a,b,c,d){return a.addEventListener(b,H.aS(H.j(c,{func:1,args:[W.a3]}),1),!1)},
$isG:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;d_|d0|d2|d3"},
ad:{"^":"el;",$isad:1,"%":"File"},
jM:{"^":"hs;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isad")
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.q(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.ad]},
$asl:function(){return[W.ad]},
$isi:1,
$asi:function(){return[W.ad]},
$isc:1,
$asc:function(){return[W.ad]},
$asn:function(){return[W.ad]},
"%":"FileList"},
jN:{"^":"G;0j:length=","%":"FileWriter"},
jQ:{"^":"R;0j:length=","%":"HTMLFormElement"},
ae:{"^":"d;",$isae:1,"%":"Gamepad"},
jR:{"^":"d;0j:length=","%":"History"},
jS:{"^":"hF;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isC")
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.q(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.C]},
$asl:function(){return[W.C]},
$isi:1,
$asi:function(){return[W.C]},
$isc:1,
$asc:function(){return[W.C]},
$asn:function(){return[W.C]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
eO:{"^":"eE;","%":"HTMLDocument"},
jT:{"^":"R;0m:height=,0l:width=","%":"HTMLIFrameElement"},
jU:{"^":"d;0m:height=,0l:width=","%":"ImageBitmap"},
jV:{"^":"d;0m:height=,0l:width=","%":"ImageData"},
jW:{"^":"R;0m:height=,0l:width=","%":"HTMLImageElement"},
jY:{"^":"R;0m:height=,0l:width=","%":"HTMLInputElement"},
aD:{"^":"cN;",$isaD:1,"%":"KeyboardEvent"},
k3:{"^":"d;",
k:function(a){return String(a)},
"%":"Location"},
f7:{"^":"R;","%":"HTMLAudioElement;HTMLMediaElement"},
k6:{"^":"d;0j:length=","%":"MediaList"},
k7:{"^":"hL;",
h:function(a,b){return P.Q(a.get(H.w(b)))},
w:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Q(y.value[1]))}},
gH:function(a){var z=H.r([],[P.f])
this.w(a,new W.f9(z))
return z},
gj:function(a){return a.size},
$asM:function(){return[P.f,null]},
$isH:1,
$asH:function(){return[P.f,null]},
"%":"MIDIInputMap"},
f9:{"^":"m:2;a",
$2:function(a,b){return C.a.n(this.a,a)}},
k8:{"^":"hM;",
h:function(a,b){return P.Q(a.get(H.w(b)))},
w:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Q(y.value[1]))}},
gH:function(a){var z=H.r([],[P.f])
this.w(a,new W.fa(z))
return z},
gj:function(a){return a.size},
$asM:function(){return[P.f,null]},
$isH:1,
$asH:function(){return[P.f,null]},
"%":"MIDIOutputMap"},
fa:{"^":"m:2;a",
$2:function(a,b){return C.a.n(this.a,a)}},
ag:{"^":"d;",$isag:1,"%":"MimeType"},
k9:{"^":"hO;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isag")
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.q(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.ag]},
$asl:function(){return[W.ag]},
$isi:1,
$asi:function(){return[W.ag]},
$isc:1,
$asc:function(){return[W.ag]},
$asn:function(){return[W.ag]},
"%":"MimeTypeArray"},
S:{"^":"cN;",
gbm:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.aH(a.offsetX,a.offsetY,[P.y])
else{z=a.target
if(!J.x(W.d4(z)).$isb0)throw H.b(P.u("offsetX is only supported on elements"))
y=H.h(W.d4(z),"$isb0")
z=a.clientX
x=a.clientY
w=[P.y]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.D(new P.aH(u,v,w),"$isaH",w,"$asaH")
if(typeof z!=="number")return z.ay()
if(typeof x!=="number")return x.ay()
return new P.aH(C.q.bu(z-u),C.q.bu(x-v),w)}},
$isS:1,
"%":";DragEvent|MouseEvent"},
C:{"^":"G;",
k:function(a){var z=a.nodeValue
return z==null?this.bN(a):z},
$isC:1,
"%":"Attr|DocumentFragment|DocumentType|ShadowRoot;Node"},
kh:{"^":"hQ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isC")
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.q(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.C]},
$asl:function(){return[W.C]},
$isi:1,
$asi:function(){return[W.C]},
$isc:1,
$asc:function(){return[W.C]},
$asn:function(){return[W.C]},
"%":"NodeList|RadioNodeList"},
kj:{"^":"R;0m:height=,0l:width=","%":"HTMLObjectElement"},
kl:{"^":"G;0m:height=,0l:width=","%":"OffscreenCanvas"},
km:{"^":"d;0m:height=,0l:width=","%":"PaintSize"},
ah:{"^":"d;0j:length=",$isah:1,"%":"Plugin"},
ko:{"^":"hU;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isah")
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.q(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.ah]},
$asl:function(){return[W.ah]},
$isi:1,
$asi:function(){return[W.ah]},
$isc:1,
$asc:function(){return[W.ah]},
$asn:function(){return[W.ah]},
"%":"PluginArray"},
kq:{"^":"S;0m:height=,0l:width=","%":"PointerEvent"},
kv:{"^":"i_;",
h:function(a,b){return P.Q(a.get(H.w(b)))},
w:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Q(y.value[1]))}},
gH:function(a){var z=H.r([],[P.f])
this.w(a,new W.fC(z))
return z},
gj:function(a){return a.size},
$asM:function(){return[P.f,null]},
$isH:1,
$asH:function(){return[P.f,null]},
"%":"RTCStatsReport"},
fC:{"^":"m:2;a",
$2:function(a,b){return C.a.n(this.a,a)}},
kw:{"^":"d;0m:height=,0l:width=","%":"Screen"},
kx:{"^":"R;0j:length=","%":"HTMLSelectElement"},
aj:{"^":"G;",$isaj:1,"%":"SourceBuffer"},
kz:{"^":"d0;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaj")
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.q(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.aj]},
$asl:function(){return[W.aj]},
$isi:1,
$asi:function(){return[W.aj]},
$isc:1,
$asc:function(){return[W.aj]},
$asn:function(){return[W.aj]},
"%":"SourceBufferList"},
ak:{"^":"d;",$isak:1,"%":"SpeechGrammar"},
kA:{"^":"i1;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isak")
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.q(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.ak]},
$asl:function(){return[W.ak]},
$isi:1,
$asi:function(){return[W.ak]},
$isc:1,
$asc:function(){return[W.ak]},
$asn:function(){return[W.ak]},
"%":"SpeechGrammarList"},
al:{"^":"d;0j:length=",$isal:1,"%":"SpeechRecognitionResult"},
kD:{"^":"i4;",
h:function(a,b){return this.aR(a,H.w(b))},
w:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.f,P.f]})
for(z=0;!0;++z){y=this.ca(a,z)
if(y==null)return
b.$2(y,this.aR(a,y))}},
gH:function(a){var z=H.r([],[P.f])
this.w(a,new W.fQ(z))
return z},
gj:function(a){return a.length},
aR:function(a,b){return a.getItem(b)},
ca:function(a,b){return a.key(b)},
$asM:function(){return[P.f,P.f]},
$isH:1,
$asH:function(){return[P.f,P.f]},
"%":"Storage"},
fQ:{"^":"m:15;a",
$2:function(a,b){return C.a.n(this.a,a)}},
am:{"^":"d;",$isam:1,"%":"CSSStyleSheet|StyleSheet"},
kG:{"^":"d;0l:width=","%":"TextMetrics"},
an:{"^":"G;",$isan:1,"%":"TextTrack"},
ao:{"^":"G;",$isao:1,"%":"TextTrackCue|VTTCue"},
kH:{"^":"i9;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isao")
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.q(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.ao]},
$asl:function(){return[W.ao]},
$isi:1,
$asi:function(){return[W.ao]},
$isc:1,
$asc:function(){return[W.ao]},
$asn:function(){return[W.ao]},
"%":"TextTrackCueList"},
kI:{"^":"d3;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isan")
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.q(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.an]},
$asl:function(){return[W.an]},
$isi:1,
$asi:function(){return[W.an]},
$isc:1,
$asc:function(){return[W.an]},
$asn:function(){return[W.an]},
"%":"TextTrackList"},
kJ:{"^":"d;0j:length=","%":"TimeRanges"},
ap:{"^":"d;",$isap:1,"%":"Touch"},
kK:{"^":"ie;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isap")
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.q(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.ap]},
$asl:function(){return[W.ap]},
$isi:1,
$asi:function(){return[W.ap]},
$isc:1,
$asc:function(){return[W.ap]},
$asn:function(){return[W.ap]},
"%":"TouchList"},
kL:{"^":"d;0j:length=","%":"TrackDefaultList"},
cN:{"^":"a3;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
kX:{"^":"d;",
k:function(a){return String(a)},
"%":"URL"},
l0:{"^":"f7;0m:height=,0l:width=","%":"HTMLVideoElement"},
l1:{"^":"G;0j:length=","%":"VideoTrackList"},
l2:{"^":"G;0m:height=,0l:width=","%":"VisualViewport"},
l3:{"^":"d;0l:width=","%":"VTTRegion"},
aM:{"^":"S;",
gct:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.u("deltaY is not supported"))},
$isaM:1,
"%":"WheelEvent"},
h6:{"^":"G;",
gcl:function(a){var z,y,x
z=P.y
y=new P.Z(0,$.B,[z])
x=H.j(new W.h7(new P.i7(y,[z])),{func:1,ret:-1,args:[P.y]})
this.c5(a)
this.cc(a,W.da(x,z))
return y},
cc:function(a,b){return a.requestAnimationFrame(H.aS(H.j(b,{func:1,ret:-1,args:[P.y]}),1))},
c5:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$iscP:1,
"%":"DOMWindow|Window"},
h7:{"^":"m:16;a",
$1:function(a){var z=this.a
a=H.bu(H.c2(a),{futureOr:1,type:H.o(z,0)})
z=z.a
if(z.a!==0)H.a0(P.fO("Future already completed"))
z.a5(a)}},
l9:{"^":"ik;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isac")
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.q(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.ac]},
$asl:function(){return[W.ac]},
$isi:1,
$asi:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]},
$asn:function(){return[W.ac]},
"%":"CSSRuleList"},
la:{"^":"eF;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
v:function(a,b){var z
if(b==null)return!1
if(!H.aR(b,"$isN",[P.y],"$asN"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.k(b)
z=a.width===z.gl(b)&&a.height===z.gm(b)}else z=!1
else z=!1
return z},
gt:function(a){return W.cU(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gm:function(a){return a.height},
gl:function(a){return a.width},
"%":"ClientRect|DOMRect"},
lb:{"^":"im;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isae")
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.q(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.ae]},
$asl:function(){return[W.ae]},
$isi:1,
$asi:function(){return[W.ae]},
$isc:1,
$asc:function(){return[W.ae]},
$asn:function(){return[W.ae]},
"%":"GamepadList"},
lc:{"^":"ip;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isC")
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.q(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.C]},
$asl:function(){return[W.C]},
$isi:1,
$asi:function(){return[W.C]},
$isc:1,
$asc:function(){return[W.C]},
$asn:function(){return[W.C]},
"%":"MozNamedAttrMap|NamedNodeMap"},
ld:{"^":"ir;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isal")
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.q(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.al]},
$asl:function(){return[W.al]},
$isi:1,
$asi:function(){return[W.al]},
$isc:1,
$asc:function(){return[W.al]},
$asn:function(){return[W.al]},
"%":"SpeechRecognitionResultList"},
le:{"^":"it;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isam")
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.q(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.am]},
$asl:function(){return[W.am]},
$isi:1,
$asi:function(){return[W.am]},
$isc:1,
$asc:function(){return[W.am]},
$asn:function(){return[W.am]},
"%":"StyleSheetList"},
hn:{"^":"fR;a,b,c,$ti"},
bp:{"^":"hn;a,b,c,$ti"},
ho:{"^":"fS;a,b,c,d,e,$ti",p:{
aq:function(a,b,c,d,e){var z=W.da(new W.hp(c),W.a3)
if(z!=null&&!0)J.dK(a,b,z,!1)
return new W.ho(0,a,b,z,!1,[e])}}},
hp:{"^":"m:17;a",
$1:function(a){return this.a.$1(H.h(a,"$isa3"))}},
n:{"^":"a;$ti",
gB:function(a){return new W.eM(a,this.gj(a),-1,[H.ba(this,a,"n",0)])}},
eM:{"^":"a;a,b,c,0d,$ti",
saP:function(a){this.d=H.t(a,H.o(this,0))},
u:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.saP(J.dI(this.a,z))
this.c=z
return!0}this.saP(null)
this.c=y
return!1},
gA:function(a){return this.d}},
hh:{"^":"a;a",$isG:1,$iscP:1,p:{
hi:function(a){if(a===window)return H.h(a,"$iscP")
else return new W.hh(a)}}},
hg:{"^":"d+ey;"},
hj:{"^":"d+l;"},
hk:{"^":"hj+n;"},
hl:{"^":"d+l;"},
hm:{"^":"hl+n;"},
hr:{"^":"d+l;"},
hs:{"^":"hr+n;"},
hE:{"^":"d+l;"},
hF:{"^":"hE+n;"},
hL:{"^":"d+M;"},
hM:{"^":"d+M;"},
hN:{"^":"d+l;"},
hO:{"^":"hN+n;"},
hP:{"^":"d+l;"},
hQ:{"^":"hP+n;"},
hT:{"^":"d+l;"},
hU:{"^":"hT+n;"},
i_:{"^":"d+M;"},
d_:{"^":"G+l;"},
d0:{"^":"d_+n;"},
i0:{"^":"d+l;"},
i1:{"^":"i0+n;"},
i4:{"^":"d+M;"},
i8:{"^":"d+l;"},
i9:{"^":"i8+n;"},
d2:{"^":"G+l;"},
d3:{"^":"d2+n;"},
id:{"^":"d+l;"},
ie:{"^":"id+n;"},
ij:{"^":"d+l;"},
ik:{"^":"ij+n;"},
il:{"^":"d+l;"},
im:{"^":"il+n;"},
io:{"^":"d+l;"},
ip:{"^":"io+n;"},
iq:{"^":"d+l;"},
ir:{"^":"iq+n;"},
is:{"^":"d+l;"},
it:{"^":"is+n;"}}],["","",,P,{"^":"",
Q:function(a){var z,y,x,w,v
if(a==null)return
z=P.a5(P.f,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.V)(y),++w){v=H.w(y[w])
z.i(0,v,a[v])}return z},
iF:function(a,b){var z={}
a.w(0,new P.iG(z))
return z},
cr:function(){var z=$.cq
if(z==null){z=J.bz(window.navigator.userAgent,"Opera",0)
$.cq=z}return z},
eD:function(){var z,y
z=$.cn
if(z!=null)return z
y=$.co
if(y==null){y=J.bz(window.navigator.userAgent,"Firefox",0)
$.co=y}if(y)z="-moz-"
else{y=$.cp
if(y==null){y=!P.cr()&&J.bz(window.navigator.userAgent,"Trident/",0)
$.cp=y}if(y)z="-ms-"
else z=P.cr()?"-o-":"-webkit-"}$.cn=z
return z},
iG:{"^":"m:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
fx:function(a){return C.m},
cT:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
hG:{"^":"a;",
a0:function(){return Math.random()}},
aH:{"^":"a;M:a>,N:b>,$ti",
k:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
v:function(a,b){if(b==null)return!1
return H.aR(b,"$isaH",[P.y],null)&&this.a==J.e1(b)&&this.b==b.gN(b)},
gt:function(a){var z,y,x
z=J.a2(this.a)
y=J.a2(this.b)
y=P.cT(P.cT(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
hV:{"^":"a;"},
N:{"^":"hV;$ti"}}],["","",,P,{"^":"",eh:{"^":"d;",$iseh:1,"%":"SVGAnimatedLength"},jw:{"^":"F;0m:height=,0l:width=","%":"SVGFEBlendElement"},jx:{"^":"F;0m:height=,0l:width=","%":"SVGFEColorMatrixElement"},jy:{"^":"F;0m:height=,0l:width=","%":"SVGFEComponentTransferElement"},jz:{"^":"F;0m:height=,0l:width=","%":"SVGFECompositeElement"},jA:{"^":"F;0m:height=,0l:width=","%":"SVGFEConvolveMatrixElement"},jB:{"^":"F;0m:height=,0l:width=","%":"SVGFEDiffuseLightingElement"},jC:{"^":"F;0m:height=,0l:width=","%":"SVGFEDisplacementMapElement"},jD:{"^":"F;0m:height=,0l:width=","%":"SVGFEFloodElement"},jE:{"^":"F;0m:height=,0l:width=","%":"SVGFEGaussianBlurElement"},jF:{"^":"F;0m:height=,0l:width=","%":"SVGFEImageElement"},jG:{"^":"F;0m:height=,0l:width=","%":"SVGFEMergeElement"},jH:{"^":"F;0m:height=,0l:width=","%":"SVGFEMorphologyElement"},jI:{"^":"F;0m:height=,0l:width=","%":"SVGFEOffsetElement"},jJ:{"^":"F;0m:height=,0l:width=","%":"SVGFESpecularLightingElement"},jK:{"^":"F;0m:height=,0l:width=","%":"SVGFETileElement"},jL:{"^":"F;0m:height=,0l:width=","%":"SVGFETurbulenceElement"},jO:{"^":"F;0m:height=,0l:width=","%":"SVGFilterElement"},jP:{"^":"b1;0m:height=,0l:width=","%":"SVGForeignObjectElement"},eN:{"^":"b1;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},b1:{"^":"F;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},jX:{"^":"b1;0m:height=,0l:width=","%":"SVGImageElement"},aE:{"^":"d;",$isaE:1,"%":"SVGLength"},k2:{"^":"hI;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return this.G(a,b)},
i:function(a,b,c){H.h(c,"$isaE")
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
G:function(a,b){return a.getItem(b)},
$asl:function(){return[P.aE]},
$isi:1,
$asi:function(){return[P.aE]},
$isc:1,
$asc:function(){return[P.aE]},
$asn:function(){return[P.aE]},
"%":"SVGLengthList"},k4:{"^":"F;0m:height=,0l:width=","%":"SVGMaskElement"},aG:{"^":"d;",$isaG:1,"%":"SVGNumber"},ki:{"^":"hS;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return this.G(a,b)},
i:function(a,b,c){H.h(c,"$isaG")
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
G:function(a,b){return a.getItem(b)},
$asl:function(){return[P.aG]},
$isi:1,
$asi:function(){return[P.aG]},
$isc:1,
$asc:function(){return[P.aG]},
$asn:function(){return[P.aG]},
"%":"SVGNumberList"},kn:{"^":"F;0m:height=,0l:width=","%":"SVGPatternElement"},kp:{"^":"d;0j:length=","%":"SVGPointList"},kr:{"^":"d;0m:height=,0l:width=","%":"SVGRect"},ks:{"^":"eN;0m:height=,0l:width=","%":"SVGRectElement"},kE:{"^":"i6;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return this.G(a,b)},
i:function(a,b,c){H.w(c)
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
G:function(a,b){return a.getItem(b)},
$asl:function(){return[P.f]},
$isi:1,
$asi:function(){return[P.f]},
$isc:1,
$asc:function(){return[P.f]},
$asn:function(){return[P.f]},
"%":"SVGStringList"},F:{"^":"b0;","%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},kF:{"^":"b1;0m:height=,0l:width=","%":"SVGSVGElement"},aK:{"^":"d;",$isaK:1,"%":"SVGTransform"},kM:{"^":"ih;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return this.G(a,b)},
i:function(a,b,c){H.h(c,"$isaK")
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
G:function(a,b){return a.getItem(b)},
$asl:function(){return[P.aK]},
$isi:1,
$asi:function(){return[P.aK]},
$isc:1,
$asc:function(){return[P.aK]},
$asn:function(){return[P.aK]},
"%":"SVGTransformList"},kY:{"^":"b1;0m:height=,0l:width=","%":"SVGUseElement"},hH:{"^":"d+l;"},hI:{"^":"hH+n;"},hR:{"^":"d+l;"},hS:{"^":"hR+n;"},i5:{"^":"d+l;"},i6:{"^":"i5+n;"},ig:{"^":"d+l;"},ih:{"^":"ig+n;"}}],["","",,P,{"^":"",a4:{"^":"a;",$isi:1,
$asi:function(){return[P.au]},
$isc:1,
$asc:function(){return[P.au]},
$isfZ:1}}],["","",,P,{"^":"",jd:{"^":"d;0j:length=","%":"AudioBuffer"},je:{"^":"he;",
h:function(a,b){return P.Q(a.get(H.w(b)))},
w:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Q(y.value[1]))}},
gH:function(a){var z=H.r([],[P.f])
this.w(a,new P.ej(z))
return z},
gj:function(a){return a.size},
$asM:function(){return[P.f,null]},
$isH:1,
$asH:function(){return[P.f,null]},
"%":"AudioParamMap"},ej:{"^":"m:2;a",
$2:function(a,b){return C.a.n(this.a,a)}},jf:{"^":"G;0j:length=","%":"AudioTrackList"},ek:{"^":"G;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},kk:{"^":"ek;0j:length=","%":"OfflineAudioContext"},he:{"^":"d+M;"}}],["","",,P,{"^":"",em:{"^":"d;",$isem:1,"%":"WebGLBuffer"},fw:{"^":"d;",$isfw:1,"%":"WebGLProgram"},kt:{"^":"d;",
aY:function(a,b){return a.activeTexture(b)},
aZ:function(a,b,c){return a.attachShader(b,c)},
b_:function(a,b,c){return a.bindBuffer(b,c)},
b1:function(a,b,c){return a.bindTexture(b,c)},
b2:function(a,b){return a.blendEquation(b)},
b3:function(a,b,c){return a.blendFunc(b,c)},
b4:function(a,b,c,d){return a.bufferData(b,c,d)},
b5:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
b6:function(a,b){return a.compileShader(b)},
b7:function(a){return a.createBuffer()},
b8:function(a){return a.createProgram()},
ba:function(a,b){return a.createShader(b)},
bb:function(a){return a.createTexture()},
bd:function(a,b){return a.depthMask(b)},
be:function(a,b){return a.disable(b)},
bf:function(a,b,c,d){return a.drawArrays(b,c,d)},
bg:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bh:function(a,b){return a.enable(b)},
bi:function(a,b){return a.enableVertexAttribArray(b)},
a1:function(a){return P.Q(a.getContextAttributes())},
an:function(a){return a.getError()},
ao:function(a,b){return a.getProgramInfoLog(b)},
ap:function(a,b,c){return a.getProgramParameter(b,c)},
ar:function(a,b){return a.getShaderInfoLog(b)},
as:function(a,b,c){return a.getShaderParameter(b,c)},
at:function(a,b,c){return a.getUniformLocation(b,c)},
bl:function(a,b){return a.linkProgram(b)},
bn:function(a,b,c){return a.pixelStorei(b,c)},
av:function(a,b,c){return a.shaderSource(b,c)},
ax:function(a,b,c,d){return a.stencilFunc(b,c,d)},
al:function(a,b,c,d,e,f,g,h,i,j){this.ae(a,b,c,d,e,f,g)
return},
bq:function(a,b,c,d,e,f,g){return this.al(a,b,c,d,e,f,g,null,null,null)},
ae:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
br:function(a,b,c,d){return a.texParameteri(b,c,d)},
bv:function(a,b,c){return a.uniform1f(b,c)},
bw:function(a,b,c){return a.uniform1fv(b,c)},
bx:function(a,b,c){return a.uniform1i(b,c)},
by:function(a,b,c){return a.uniform1iv(b,c)},
bz:function(a,b,c){return a.uniform2fv(b,c)},
bA:function(a,b,c){return a.uniform3fv(b,c)},
bB:function(a,b,c){return a.uniform4fv(b,c)},
bC:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bD:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bE:function(a,b){return a.useProgram(b)},
bF:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
"%":"WebGLRenderingContext"},ku:{"^":"d;",
cm:function(a,b){return a.beginTransformFeedback(b)},
cp:function(a,b){return a.bindVertexArray(b)},
cs:function(a){return a.createVertexArray()},
cu:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
cv:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
cw:function(a){return a.endTransformFeedback()},
cN:function(a,b,c,d){this.ci(a,b,H.D(c,"$isc",[P.f],"$asc"),d)
return},
ci:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
cO:function(a,b,c){return a.vertexAttribDivisor(b,c)},
aY:function(a,b){return a.activeTexture(b)},
aZ:function(a,b,c){return a.attachShader(b,c)},
b_:function(a,b,c){return a.bindBuffer(b,c)},
b1:function(a,b,c){return a.bindTexture(b,c)},
b2:function(a,b){return a.blendEquation(b)},
b3:function(a,b,c){return a.blendFunc(b,c)},
b4:function(a,b,c,d){return a.bufferData(b,c,d)},
b5:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
b6:function(a,b){return a.compileShader(b)},
b7:function(a){return a.createBuffer()},
b8:function(a){return a.createProgram()},
ba:function(a,b){return a.createShader(b)},
bb:function(a){return a.createTexture()},
bd:function(a,b){return a.depthMask(b)},
be:function(a,b){return a.disable(b)},
bf:function(a,b,c,d){return a.drawArrays(b,c,d)},
bg:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bh:function(a,b){return a.enable(b)},
bi:function(a,b){return a.enableVertexAttribArray(b)},
a1:function(a){return P.Q(a.getContextAttributes())},
an:function(a){return a.getError()},
ao:function(a,b){return a.getProgramInfoLog(b)},
ap:function(a,b,c){return a.getProgramParameter(b,c)},
ar:function(a,b){return a.getShaderInfoLog(b)},
as:function(a,b,c){return a.getShaderParameter(b,c)},
at:function(a,b,c){return a.getUniformLocation(b,c)},
bl:function(a,b){return a.linkProgram(b)},
bn:function(a,b,c){return a.pixelStorei(b,c)},
av:function(a,b,c){return a.shaderSource(b,c)},
ax:function(a,b,c,d){return a.stencilFunc(b,c,d)},
al:function(a,b,c,d,e,f,g,h,i,j){this.ae(a,b,c,d,e,f,g)
return},
bq:function(a,b,c,d,e,f,g){return this.al(a,b,c,d,e,f,g,null,null,null)},
ae:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
br:function(a,b,c,d){return a.texParameteri(b,c,d)},
bv:function(a,b,c){return a.uniform1f(b,c)},
bw:function(a,b,c){return a.uniform1fv(b,c)},
bx:function(a,b,c){return a.uniform1i(b,c)},
by:function(a,b,c){return a.uniform1iv(b,c)},
bz:function(a,b,c){return a.uniform2fv(b,c)},
bA:function(a,b,c){return a.uniform3fv(b,c)},
bB:function(a,b,c){return a.uniform4fv(b,c)},
bC:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bD:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bE:function(a,b){return a.useProgram(b)},
bF:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
"%":"WebGL2RenderingContext"},fH:{"^":"d;",$isfH:1,"%":"WebGLShader"},fV:{"^":"d;",$isfV:1,"%":"WebGLTexture"},h_:{"^":"d;",$ish_:1,"%":"WebGLUniformLocation"},h5:{"^":"d;",$ish5:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",kB:{"^":"i3;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return P.Q(this.c9(a,b))},
i:function(a,b,c){H.h(c,"$isH")
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
c9:function(a,b){return a.item(b)},
$asl:function(){return[[P.H,,,]]},
$isi:1,
$asi:function(){return[[P.H,,,]]},
$isc:1,
$asc:function(){return[[P.H,,,]]},
$asn:function(){return[[P.H,,,]]},
"%":"SQLResultSetRowList"},i2:{"^":"d+l;"},i3:{"^":"i2+n;"}}],["","",,G,{"^":"",
h8:function(a){var z,y,x,w
z=H.r(a.split("\n"),[P.f])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.q(z,y)
C.a.i(z,y,w+H.e(z[y]))}return C.a.a_(z,"\n")},
cR:function(a,b,c){var z,y,x,w
z=J.k(a)
y=z.ba(a,b)
z.av(a,y,c)
z.b6(a,y)
x=H.bV(z.as(a,y,35713))
if(x!=null&&!x){w=z.ar(a,y)
P.av("E:Compilation failed:")
P.av("E:"+G.h8(c))
P.av("E:Failure:")
P.av(C.i.C("E:",w))
throw H.b(w)}return y},
ct:function(a,b){var z,y,x,w,v,u,t
H.D(a,"$isc",[T.I],"$asc")
z=a.length
b=new Float32Array(z*3)
for(z=a.length,y=b.length,x=0;x<z;++x){w=x*3
v=a[x].a
u=v[0]
if(w>=y)return H.q(b,w)
b[w]=u
u=w+1
t=v[1]
if(u>=y)return H.q(b,u)
b[u]=t
w+=2
v=v[2]
if(w>=y)return H.q(b,w)
b[w]=v}return b},
bj:{"^":"a;"},
bn:{"^":"bj;",
aE:function(){return this.d},
k:function(a){var z,y,x,w
z=H.r(["{"+new H.cM(H.iQ(this)).k(0)+"}["+this.a+"]"],[P.f])
for(y=this.d,x=new H.aF(y,[H.o(y,0)]),x=x.gB(x);x.u();){w=x.d
C.a.n(z,H.e(w)+": "+H.e(y.h(0,w)))}return C.a.a_(z,"\n")}},
en:{"^":"fM;"},
er:{"^":"a;0a,b",
bj:function(a,b,c){J.dZ(this.a,b)
if(c>0)J.ef(this.a,b,c)},
bG:function(a,b,c,d,e,f,g,h){J.c9(this.a,34962,b)
J.eg(this.a,c,d,e,!1,g,h)}},
cK:{"^":"a;a,b,c"},
cJ:{"^":"a;a,b,c"},
f6:{"^":"bn;d,a,b,c"},
f8:{"^":"bj;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
aB:function(a,b,c){var z,y
C.i.a2(a,0)
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.c9(z.a,34962,y)
J.dO(z.a,34962,b,35048)},
bR:function(){return this.ch.length/3|0},
aA:function(a){var z,y,x,w
z=this.r
y=this.d
z.i(0,"aPosition",J.ca(y.a))
this.ch=a
this.aB("aPosition",a,3)
x=$.ab().h(0,"aPosition")
if(x==null)throw H.b("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.by(y.a,this.e)
y.bj(0,w,0)
y.bG(0,z.h(0,"aPosition"),w,x.aD(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=H.r(["Faces:0"],[P.f])
for(y=this.cy,x=new H.aF(y,[H.o(y,0)]),x=x.gB(x);x.u();){w=x.d
C.a.n(z,H.e(w)+":"+y.h(0,w).length)}return"MESH["+this.a+"] "+C.a.a_(z,"  ")},
p:{
cA:function(a,b,c,d){var z=P.f
return new G.f8(b,J.dT(b.a),c,P.a5(z,P.a),d,0,-1,P.a5(z,P.a4),"meshdata:"+a,!1,!0)}}},
fm:{"^":"bn;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
bP:function(a,b){var z
if(typeof a!=="number")return a.cQ()
if(typeof b!=="number")return H.aa(b)
z=a/b
if(this.z===z)return
this.z=z
this.aF()},
aF:function(){var z,y,x,w,v,u
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
aE:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.I(new Float32Array(3))
u.T(x,w,v)
v=this.d
v.i(0,"uEyePosition",u)
u=this.cy
u.R(z)
u=u.a
u[12]=0
u[13]=0
u[14]=0
u[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
z=J.x(t)
y=!!z.$isbo
q=y?t.gcR(t):1
if(!!z.$isI){p=t.gM(t)
s=t.gN(t)
r=t.gcP(t)
t=p}else if(y){p=t.gM(t)
s=t.gN(t)
r=t.gcP(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}z=u[0]
if(typeof t!=="number")return H.aa(t)
y=u[4]
if(typeof s!=="number")return H.aa(s)
x=u[8]
if(typeof r!=="number")return H.aa(r)
w=u[12]
o=u[1]
n=u[5]
m=u[9]
l=u[13]
k=u[2]
j=u[6]
i=u[10]
h=u[14]
g=u[3]
f=u[7]
e=u[11]
d=u[15]
u[12]=z*t+y*s+x*r+w*q
u[13]=o*t+n*s+m*r+l*q
u[14]=k*t+j*s+i*r+h*q
u[15]=g*t+f*s+e*r+d*q
d=this.cx
d.R(this.db)
e=d.a
c=e[0]
b=e[4]
a=e[8]
a0=e[12]
a1=e[1]
a2=e[5]
a3=e[9]
a4=e[13]
a5=e[2]
a6=e[6]
a7=e[10]
a8=e[14]
a9=e[3]
b0=e[7]
b1=e[11]
b2=e[15]
b3=u[0]
b4=u[4]
b5=u[8]
b6=u[12]
b7=u[1]
b8=u[5]
b9=u[9]
c0=u[13]
c1=u[2]
c2=u[6]
c3=u[10]
c4=u[14]
c5=u[3]
c6=u[7]
c7=u[11]
c8=u[15]
e[0]=c*b3+b*b7+a*c1+a0*c5
e[4]=c*b4+b*b8+a*c2+a0*c6
e[8]=c*b5+b*b9+a*c3+a0*c7
e[12]=c*b6+b*c0+a*c4+a0*c8
e[1]=a1*b3+a2*b7+a3*c1+a4*c5
e[5]=a1*b4+a2*b8+a3*c2+a4*c6
e[9]=a1*b5+a2*b9+a3*c3+a4*c7
e[13]=a1*b6+a2*c0+a3*c4+a4*c8
e[2]=a5*b3+a6*b7+a7*c1+a8*c5
e[6]=a5*b4+a6*b8+a7*c2+a8*c6
e[10]=a5*b5+a6*b9+a7*c3+a8*c7
e[14]=a5*b6+a6*c0+a7*c4+a8*c8
e[3]=a9*b3+b0*b7+b1*c1+b2*c5
e[7]=a9*b4+b0*b8+b1*c2+b2*c6
e[11]=a9*b5+b0*b9+b1*c3+b2*c7
e[15]=a9*b6+b0*c0+b1*c4+b2*c8
v.i(0,"uPerspectiveViewMatrix",d)
return v}},
ju:{"^":"a;"},
fB:{"^":"bj;d,e,f,r,x,y,z,Q,0ch,a,b,c",
bU:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.V)(z),++u){t=z[u]
x.i(0,t,J.cc(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.V)(z),++u){t=z[u]
x.i(0,t,J.cc(w.a,v,t))}},
bW:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.r([],[P.f])
x=H.r([],[P.f])
for(y=new H.aF(y,[H.o(y,0)]),y=y.gB(y);y.u();){w=y.d
if(!z.af(0,w))C.a.n(x,w)}for(z=this.x,z=P.cV(z,z.r,H.o(z,0)),y=this.Q;z.u();){w=z.d
if(!y.D(0,w))C.a.n(x,w)}return x},
bX:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.D(b,"$isH",[P.f,P.a],"$asH")
z=Date.now()
for(y=new H.aF(b,[H.o(b,0)]),y=y.gB(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.u();){s=y.d
switch(J.dJ(s,0)){case 117:if(w.af(0,s)){r=b.h(0,s)
if(v.af(0,s))H.c3("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.i(0,s,a)
q=$.ab().h(0,s)
if(q==null)H.a0("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.J(r)
J.bB(x.a,p,r)}else if(!!J.x(r).$iseR)J.ed(x.a,p,r)
break
case"float":if(q.c===0){H.de(r)
J.eb(x.a,p,r)}else if(!!J.x(r).$isa4)J.ec(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.a1(r,"$isaf").a
J.ci(x.a,p,!1,s)}else if(!!J.x(r).$isa4)J.ci(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=C.t.gbK(H.a1(r,"$isk5"))
J.ch(x.a,p,!1,s)}else if(!!J.x(r).$isa4)J.ch(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.cg(o,p,H.a1(r,"$isbo").a)
else J.cg(o,p,H.h(r,"$isa4"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cf(o,p,H.a1(r,"$isI").a)
else J.cf(o,p,H.h(r,"$isa4"))
break
case"vec2":if(q.c===0){s=C.t.gbK(H.a1(r,"$isl_"))
J.ce(x.a,p,s)}else{H.h(r,"$isa4")
J.ce(x.a,p,r)}break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.aa(s)
J.c7(x.a,33984+s)
s=H.a1(r,"$isbO").b
J.aY(x.a,3553,s)
s=this.ch
J.bB(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.C()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.aa(s)
J.c7(x.a,33984+s)
s=H.a1(r,"$isbO").b
J.aY(x.a,34067,s)
s=this.ch
J.bB(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.C()
this.ch=s+1
break
default:H.c3("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":s=J.ax(r,!0)
o=x.a
if(s)J.bd(o,2929)
else J.bA(o,2929)
break
case"cStencilFunc":H.a1(r,"$iscK")
s=r.a
o=x.a
if(s===1281)J.bA(o,2960)
else{J.bd(o,2960)
o=r.b
n=r.c
J.e8(x.a,s,o,n)}break
case"cDepthWrite":H.bV(r)
J.dU(x.a,r)
break
case"cBlendEquation":H.a1(r,"$iscJ")
s=r.a
o=x.a
if(s===1281)J.bA(o,3042)
else{J.bd(o,3042)
o=r.b
n=r.c
J.dN(x.a,o,n)
J.dM(x.a,s)}break}++t
break}}m=P.eG(0,0,0,Date.now()-new P.bg(z,!1).a,0,0)
""+t
m.k(0)},
bQ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.D(b,"$isc",[G.bn],"$asc")
Date.now()
z=this.d
J.ee(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.aS()}for(x=0;x<2;++x){w=b[x]
this.bX(w.a,w.aE())}y=this.Q
y.L(0)
for(v=a.cy,v=new H.aF(v,[H.o(v,0)]),v=v.gB(v);v.u();)y.n(0,v.d)
u=this.bW()
if(u.length!==0)P.av("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
J.by(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.bR()
s=a.Q
r=a.z
if(t)J.dL(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.dY(q,y,v,s,0,r)
else J.dX(q,y,v,s,0)}else{s=z.a
if(r>1)J.dW(s,y,0,v,r)
else J.dV(s,y,0,v)}if(t)J.e_(z.a)},
aC:function(a,b){return this.bQ(a,b,null)},
p:{
cF:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.f
y=P.a6(null,null,null,z)
x=c.b
w=d.b
v=H.D(c.f,"$isc",[z],"$asc")
u=J.dR(b.a)
t=G.cR(b.a,35633,x)
J.c8(b.a,u,t)
s=G.cR(b.a,35632,w)
J.c8(b.a,u,s)
if(v.length>0)J.ea(b.a,u,v,35980)
J.e6(b.a,u)
if(!H.bV(J.e5(b.a,u,35714)))H.a0(J.e4(b.a,u))
z=new G.fB(b,c,d,u,P.f2(c.c,z),P.a5(z,P.a),P.a5(z,z),y,a,!1,!0)
z.bU(a,b,c,d)
return z}}},
v:{"^":"a;a,b,c",
aD:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
fI:{"^":"a;a,0b,c,d,e,f,r,x",
az:function(a){var z,y,x,w,v
H.D(a,"$isc",[P.f],"$asc")
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.V)(a),++w){v=a[w]
C.a.n(y,v)
x.i(0,v,this.r);++this.r}C.a.aw(y)},
U:function(a){var z,y,x
H.D(a,"$isc",[P.f],"$asc")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.V)(a),++x)C.a.n(y,a[x])
C.a.aw(y)},
bV:function(a,b){this.b=this.bY(!0,H.D(a,"$isc",[P.f],"$asc"),b)},
V:function(a){return this.bV(a,null)},
bY:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.f]
H.D(b,"$isc",z,"$asc")
y=this.c
x=y.length===0
w=H.r(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.V)(y),++u){t=y[u]
s=$.ab().h(0,t)
C.a.n(w,"layout (location="+H.e(v.h(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.n(w,"")
r=x?"in":"out"
if(x)C.a.n(w,"out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.q(z,u)
q=z[u]
s=$.ab().h(0,q)
C.a.n(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.V)(z),++u){q=z[u]
s=$.ab().h(0,q)
C.a.n(w,r+" "+s.a+" "+H.e(q)+";")}C.a.n(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.V)(z),++u){q=z[u]
s=$.ab().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.n(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.n(w,"")
C.a.n(w,"void main(void) {")
C.a.cj(w,b)
C.a.n(w,"}")
return C.a.a_(w,"\n")},
p:{
bl:function(a){var z,y
z=P.f
y=[z]
return new G.fI(a,H.r([],y),H.r([],y),H.r([],y),H.r([],y),0,P.a5(z,P.E))}}},
fM:{"^":"bj;"},
fW:{"^":"a;a,b,c,d,e,f,r"},
bO:{"^":"a;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
eP:{"^":"bO;f,a,b,c,d,e"}}],["","",,R,{"^":"",
h3:function(a,b,c){var z,y,x,w,v,u
z="stars_"+b
y=b*3
x=new Float32Array(y)
for(w=x.length,v=0;v<y;++v){u=$.dD().a0()
if(v>=w)return H.q(x,v)
x[v]=(u-0.5)*c}y=G.cA(z,a.d,0,a.e.x)
y.aA(x)
return y}}],["","",,V,{}],["","",,D,{"^":"",eX:{"^":"a;a,b,c",
bS:function(a){var z,y
a=document
z=W.aD
y={func:1,ret:-1,args:[z]}
W.aq(a,"keydown",H.j(new D.eZ(this),y),!1,z)
W.aq(a,"keyup",H.j(new D.f_(this),y),!1,z)},
p:{
eY:function(a){var z=P.E
z=new D.eX(P.a6(null,null,null,z),P.a6(null,null,null,z),P.a6(null,null,null,z))
z.bS(a)
return z}}},eZ:{"^":"m:9;a",
$1:function(a){var z
H.h(a,"$isaD")
z=this.a
z.a.n(0,a.which)
z.b.n(0,a.which)}},f_:{"^":"m:9;a",
$1:function(a){var z
H.h(a,"$isaD")
z=this.a
z.a.bo(0,a.which)
z.c.n(0,a.which)}},fb:{"^":"a;a,b,c,d,e,f,r,x",
bT:function(a){var z,y
z=C.h.gcG(a)
y=H.o(z,0)
W.aq(z.a,z.b,H.j(new D.fd(this),{func:1,ret:-1,args:[y]}),!1,y)
y=C.h.gcF(a)
z=H.o(y,0)
W.aq(y.a,y.b,H.j(new D.fe(this),{func:1,ret:-1,args:[z]}),!1,z)
z=C.h.gcH(a)
y=H.o(z,0)
W.aq(z.a,z.b,H.j(new D.ff(this),{func:1,ret:-1,args:[y]}),!1,y)
y=C.h.gcI(a)
z=H.o(y,0)
W.aq(y.a,y.b,H.j(new D.fg(this),{func:1,ret:-1,args:[z]}),!1,z)},
p:{
fc:function(a){var z=P.E
z=new D.fb(P.a6(null,null,null,z),P.a6(null,null,null,z),P.a6(null,null,null,z),0,0,0,0,0)
z.bT(a)
return z}}},fd:{"^":"m:3;a",
$1:function(a){var z,y
H.h(a,"$isS")
a.preventDefault()
z=this.a
y=J.k(a)
z.r=H.J(y.gbm(a).a)
z.x=H.J(y.gbm(a).b)
z.d=a.movementX
z.e=a.movementY}},fe:{"^":"m:3;a",
$1:function(a){var z
H.h(a,"$isS")
a.preventDefault()
P.av("BUTTON "+H.e(a.button))
z=this.a
z.a.n(0,a.button)
z.b.n(0,a.button)}},ff:{"^":"m:3;a",
$1:function(a){var z
H.h(a,"$isS")
a.preventDefault()
z=this.a
z.a.bo(0,a.button)
z.c.n(0,a.button)}},fg:{"^":"m:18;a",
$1:function(a){H.h(a,"$isaM")
a.preventDefault()
this.a.f=H.J(C.a0.gct(a))}},fk:{"^":"en;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
c_:function(a){var z,y
z=C.K.cA(H.D(a,"$isi",[P.a],"$asi"),0,new A.iS(),P.E)
if(typeof z!=="number")return H.aa(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
iS:{"^":"m:19;",
$2:function(a,b){var z,y
H.J(a)
z=J.a2(b)
if(typeof a!=="number")return a.C()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",af:{"^":"a;a",
R:function(a){var z,y
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
k:function(a){return"[0] "+this.O(0).k(0)+"\n[1] "+this.O(1).k(0)+"\n[2] "+this.O(2).k(0)+"\n[3] "+this.O(3).k(0)+"\n"},
v:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.af){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gt:function(a){return A.c_(this.a)},
O:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.q(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.q(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.q(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.q(y,x)
z[3]=y[x]
return new T.bo(z)},
S:function(){var z=this.a
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
z[15]=1}},I:{"^":"a;a",
T:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
R:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
v:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.I){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gt:function(a){return A.c_(this.a)},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gbk:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
aj:function(a){var z,y,x
z=Math.sqrt(this.gbk())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
ag:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bc:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.I(new Float32Array(3))
z.T(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
gM:function(a){return this.a[0]},
gN:function(a){return this.a[1]},
p:{
h4:function(a,b,c){var z=new T.I(new Float32Array(3))
z.T(a,b,c)
return z}}},bo:{"^":"a;a",
k:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
v:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.bo){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gt:function(a){return A.c_(this.a)},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gM:function(a){return this.a[0]},
gN:function(a){return this.a[1]}}}],["","",,R,{"^":"",
iP:function(a){var z,y,x,w,v,u,t,s,r
z=[T.I]
y=H.r([],z)
x=H.r([],z)
for(w=0;w<200;++w){z=new Float32Array(3)
z[0]=0
z[1]=0
z[2]=0
C.a.n(y,new T.I(z))
z=C.m.a0()
v=C.m.a0()
u=C.m.a0()
t=new Float32Array(3)
t[0]=z-0.5
t[1]=v-0.5
t[2]=u-0.5
C.a.n(x,new T.I(t))}z=G.cA("firefwork-particles",a.d,0,a.e.x)
z.aA(G.ct(y,null))
v=G.ct(x,null)
u=z.r
t=z.d
u.i(0,"aNormal",J.ca(t.a))
z.aB("aNormal",v,3)
s=$.ab().h(0,"aNormal")
if(s==null)H.a0("Unknown canonical aNormal")
r=z.x.h(0,"aNormal")
J.by(t.a,z.e)
t.bj(0,r,0)
t.bG(0,u.h(0,"aNormal"),r,s.aD(),5126,!1,0,0)
return z},
di:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z={}
y=document
x=H.h(C.B.cJ(y,"#webgl-canvas"),"$isbE")
w=x.clientWidth
v=x.clientHeight
x.width=w
x.height=v
u=new G.er(x)
t=P.f
s=P.a
r=(x&&C.h).am(x,"webgl2",P.cy(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],t,s))
u.a=r
if(r==null)H.a0(P.cs('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
q="ChronosGL Config: "+H.e(J.e2(r))
if($.iJ>0)P.av("I: "+q)
J.dP(r,0,0,0,1)
J.bd(r,2929)
r=new Float32Array(3)
q=D.eY(null)
p=D.fc(x)
o=new T.af(new Float32Array(16))
o.S()
n=new Float32Array(3)
m=new Float32Array(3)
l=new Float32Array(3)
k=new D.fk(15,0,0,0,new T.I(r),-0.02,q,p,o,new T.I(n),new T.I(m),new T.I(l),new T.I(new Float32Array(3)),"camera:orbit",!1,!0)
r=new T.af(new Float32Array(16))
r.S()
q=new T.af(new Float32Array(16))
q.S()
j=new G.fm(k,50,1,0.1,1000,r,q,new T.af(new Float32Array(16)),P.a5(t,s),"perspective",!1,!0)
j.aF()
j.bP(w,v)
i=G.cF("basic",u,$.dH(),$.dG())
h=G.cF("fireworks",u,$.dF(),$.dE())
r=$.dn()
s=P.a5(t,s)
s.i(0,"cDepthTest",!0)
s.i(0,"cDepthWrite",!1)
s.i(0,"cBlendEquation",r)
s.i(0,"cStencilFunc",$.ds())
g=y.createElement("canvas")
g.width=64
g.height=64
f=H.h(C.h.bI(g,"2d"),"$isbF")
e=(f&&C.p).b9(f,32,32,1,32,32,22);(e&&C.n).Z(e,0,"gray")
C.n.Z(e,1,"black")
f.fillStyle=e
C.p.cz(f,0,0,64,64)
e=C.p.b9(f,32,32,1,32,32,6);(e&&C.n).Z(e,0,"white")
C.n.Z(e,1,"gray")
f.globalAlpha=0.9
f.fillStyle=e
f.arc(32,32,4,0,6.283185307179586,!1)
f.fill()
y=J.dS(u.a)
J.aY(u.a,3553,y)
J.e7(u.a,37440,1)
J.aY(u.a,3553,y)
J.e9(u.a,3553,0,6408,6408,5121,g)
J.cd(u.a,3553,10240,9729)
J.cd(u.a,3553,10241,9729)
J.e3(u.a)
J.aY(u.a,3553,null)
s.i(0,"uTexture",new G.eP(g,"Utils::Particles",y,3553,u,new G.fW(!1,!1,!1,!0,1,9729,9729)))
s.i(0,"uPointSize",1000)
y=new T.af(new Float32Array(16))
y.S()
s.i(0,"uModelMatrix",y)
s.i(0,"uColor",$.dp())
d=R.h3(i,2000,100)
c=R.iP(h)
z.a=0
new R.j2(z,k,new G.f6(s,"stars",!1,!0),i,d,j,h,c).$1(0)},
j2:{"^":"m:20;a,b,c,d,e,f,r,x",
$1:function(b1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
H.c2(b1)
if(typeof b1!=="number")return b1.ay()
this.a.a=b1+0
z=this.b
z.go+=0.001
y=z.r1
x=y.a
if(x.D(0,0)||x.D(0,1)){x=z.go
w=y.d
if(typeof w!=="number")return w.au()
z.go=x+w*0.01
w=z.id
x=y.e
if(typeof x!=="number")return x.au()
z.id=w+x*0.01}x=z.k4
w=x.a
if(w.D(0,37))z.go+=0.03
else if(w.D(0,39))z.go-=0.03
if(w.D(0,38))z.id+=0.03
else if(w.D(0,40))z.id-=0.03
if(w.D(0,33))z.fy*=0.99
else if(w.D(0,34))z.fy*=1.01
if(w.D(0,32)){z.go=0
z.id=0}w=y.f
if(typeof w!=="number")return w.au()
w=z.fy-w*z.k3
if(w>0)z.fy=w
w=C.q.cq(z.id,-1.4707963267948965,1.4707963267948965)
z.id=w
v=z.fy
u=z.go
t=v*Math.cos(w)
s=Math.cos(u)
w=Math.sin(w)
u=Math.sin(u)
r=z.d.a
r[12]=t*s
r[13]=v*w
r[14]=t*u
u=z.k2.a
r[12]=r[12]+u[0]
r[13]=r[13]+u[1]
r[14]=r[14]+u[2]
q=r[12]
p=r[13]
o=r[14]
n=new T.I(new Float32Array(3))
n.T(0,1,0)
w=z.e
v=w.a
v[0]=r[12]
v[1]=r[13]
v[2]=r[14]
v=new Float32Array(3)
m=new T.I(v)
m.R(w)
v[0]=v[0]-u[0]
v[1]=v[1]-u[1]
v[2]=v[2]-u[2]
m.aj(0)
l=n.bc(m)
l.aj(0)
k=m.bc(l)
k.aj(0)
u=l.ag(w)
s=k.ag(w)
w=m.ag(w)
j=l.a
i=j[0]
h=k.a
g=h[0]
f=v[0]
e=j[1]
d=h[1]
c=v[1]
j=j[2]
h=h[2]
v=v[2]
r[15]=1
r[14]=-w
r[13]=-s
r[12]=-u
r[11]=0
r[10]=v
r[9]=h
r[8]=j
r[7]=0
r[6]=c
r[5]=d
r[4]=e
r[3]=0
r[2]=f
r[1]=g
r[0]=i
r[12]=q
r[13]=p
r[14]=o
i=z.f
g=i.a
g[0]=r[2]
g[1]=r[6]
g[2]=r[10]
z=-z.k1
b=Math.sqrt(i.gbk())
q=g[0]/b
p=g[1]/b
o=g[2]/b
a=Math.cos(z)
a0=Math.sin(z)
a1=1-a
a2=q*q*a1+a
z=o*a0
a3=q*p*a1-z
g=p*a0
a4=q*o*a1+g
a5=p*q*a1+z
a6=p*p*a1+a
z=q*a0
a7=p*o*a1-z
a8=o*q*a1-g
a9=o*p*a1+z
b0=o*o*a1+a
z=r[0]
g=r[4]
i=r[8]
f=r[1]
e=r[5]
d=r[9]
c=r[2]
j=r[6]
h=r[10]
v=r[3]
u=r[7]
s=r[11]
r[0]=z*a2+g*a5+i*a8
r[1]=f*a2+e*a5+d*a8
r[2]=c*a2+j*a5+h*a8
r[3]=v*a2+u*a5+s*a8
r[4]=z*a3+g*a6+i*a9
r[5]=f*a3+e*a6+d*a9
r[6]=c*a3+j*a6+h*a9
r[7]=v*a3+u*a6+s*a9
r[8]=z*a4+g*a7+i*b0
r[9]=f*a4+e*a7+d*b0
r[10]=c*a4+j*a7+h*b0
r[11]=v*a4+u*a7+s*b0
x.c.L(0)
x.b.L(0)
y.e=0
y.d=0
y.f=0
y.c.L(0)
y.b.L(0)
y=this.c
y.d.i(0,"uTime",b1/1000)
x=this.f
s=[G.bn]
this.d.aC(this.e,H.r([x,y],s))
this.r.aC(this.x,H.r([x,y],s))
C.a1.gcl(window).bs(this,-1)}}},1]]
setupProgram(dart,0,0)
J.x=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cu.prototype
return J.eV.prototype}if(typeof a=="string")return J.b4.prototype
if(a==null)return J.cv.prototype
if(typeof a=="boolean")return J.eU.prototype
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.a)return a
return J.bv(a)}
J.aT=function(a){if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.a)return a
return J.bv(a)}
J.iK=function(a){if(a==null)return a
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.a)return a
return J.bv(a)}
J.iL=function(a){if(typeof a=="number")return J.b3.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.aL.prototype
return a}
J.iM=function(a){if(typeof a=="number")return J.b3.prototype
if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.aL.prototype
return a}
J.iN=function(a){if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.aL.prototype
return a}
J.k=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.a)return a
return J.bv(a)}
J.iO=function(a){if(a==null)return a
if(!(a instanceof P.a))return J.aL.prototype
return a}
J.ax=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.x(a).v(a,b)}
J.W=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.iL(a).I(a,b)}
J.dI=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.j_(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aT(a).h(a,b)}
J.dJ=function(a,b){return J.iN(a).a2(a,b)}
J.c7=function(a,b){return J.k(a).aY(a,b)}
J.dK=function(a,b,c,d){return J.k(a).ck(a,b,c,d)}
J.c8=function(a,b,c){return J.k(a).aZ(a,b,c)}
J.dL=function(a,b){return J.k(a).cm(a,b)}
J.c9=function(a,b,c){return J.k(a).b_(a,b,c)}
J.aY=function(a,b,c){return J.k(a).b1(a,b,c)}
J.by=function(a,b){return J.k(a).cp(a,b)}
J.dM=function(a,b){return J.k(a).b2(a,b)}
J.dN=function(a,b,c){return J.k(a).b3(a,b,c)}
J.dO=function(a,b,c,d){return J.k(a).b4(a,b,c,d)}
J.dP=function(a,b,c,d,e){return J.k(a).b5(a,b,c,d,e)}
J.dQ=function(a,b){return J.iM(a).F(a,b)}
J.bz=function(a,b,c){return J.aT(a).cr(a,b,c)}
J.ca=function(a){return J.k(a).b7(a)}
J.dR=function(a){return J.k(a).b8(a)}
J.dS=function(a){return J.k(a).bb(a)}
J.dT=function(a){return J.k(a).cs(a)}
J.dU=function(a,b){return J.k(a).bd(a,b)}
J.bA=function(a,b){return J.k(a).be(a,b)}
J.dV=function(a,b,c,d){return J.k(a).bf(a,b,c,d)}
J.dW=function(a,b,c,d,e){return J.k(a).cu(a,b,c,d,e)}
J.dX=function(a,b,c,d,e){return J.k(a).bg(a,b,c,d,e)}
J.dY=function(a,b,c,d,e,f){return J.k(a).cv(a,b,c,d,e,f)}
J.bd=function(a,b){return J.k(a).bh(a,b)}
J.dZ=function(a,b){return J.k(a).bi(a,b)}
J.e_=function(a){return J.k(a).cw(a)}
J.e0=function(a,b){return J.k(a).w(a,b)}
J.a2=function(a){return J.x(a).gt(a)}
J.cb=function(a){return J.iK(a).gB(a)}
J.aZ=function(a){return J.aT(a).gj(a)}
J.e1=function(a){return J.iO(a).gM(a)}
J.e2=function(a){return J.k(a).a1(a)}
J.e3=function(a){return J.k(a).an(a)}
J.e4=function(a,b){return J.k(a).ao(a,b)}
J.e5=function(a,b,c){return J.k(a).ap(a,b,c)}
J.cc=function(a,b,c){return J.k(a).at(a,b,c)}
J.e6=function(a,b){return J.k(a).bl(a,b)}
J.e7=function(a,b,c){return J.k(a).bn(a,b,c)}
J.e8=function(a,b,c,d){return J.k(a).ax(a,b,c,d)}
J.e9=function(a,b,c,d,e,f,g){return J.k(a).bq(a,b,c,d,e,f,g)}
J.cd=function(a,b,c,d){return J.k(a).br(a,b,c,d)}
J.be=function(a){return J.x(a).k(a)}
J.ea=function(a,b,c,d){return J.k(a).cN(a,b,c,d)}
J.eb=function(a,b,c){return J.k(a).bv(a,b,c)}
J.ec=function(a,b,c){return J.k(a).bw(a,b,c)}
J.bB=function(a,b,c){return J.k(a).bx(a,b,c)}
J.ed=function(a,b,c){return J.k(a).by(a,b,c)}
J.ce=function(a,b,c){return J.k(a).bz(a,b,c)}
J.cf=function(a,b,c){return J.k(a).bA(a,b,c)}
J.cg=function(a,b,c){return J.k(a).bB(a,b,c)}
J.ch=function(a,b,c,d){return J.k(a).bC(a,b,c,d)}
J.ci=function(a,b,c,d){return J.k(a).bD(a,b,c,d)}
J.ee=function(a,b){return J.k(a).bE(a,b)}
J.ef=function(a,b,c){return J.k(a).cO(a,b,c)}
J.eg=function(a,b,c,d,e,f,g){return J.k(a).bF(a,b,c,d,e,f,g)}
var $=I.p
C.h=W.bE.prototype
C.n=W.eo.prototype
C.p=W.bF.prototype
C.B=W.eO.prototype
C.C=J.d.prototype
C.a=J.b2.prototype
C.e=J.cu.prototype
C.t=J.cv.prototype
C.q=J.b3.prototype
C.i=J.b4.prototype
C.J=J.b5.prototype
C.K=H.fh.prototype
C.w=J.fn.prototype
C.r=J.aL.prototype
C.a0=W.aM.prototype
C.a1=W.h6.prototype
C.m=new P.hG()
C.d=new P.hW()
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
C.u=function(hooks) { return hooks; }

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
C.v=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.L=new G.v("vec3","vertex btangents",0)
C.c=new G.v("vec3","",0)
C.M=new G.v("vec4","delta from light",0)
C.o=new G.v("","",0)
C.x=new G.v("vec3","vertex coordinates",0)
C.N=new G.v("vec3","vertex binormals",0)
C.y=new G.v("vec4","for wireframe",0)
C.O=new G.v("vec4","per vertex color",0)
C.P=new G.v("float","for normal maps",0)
C.j=new G.v("mat4","",0)
C.R=new G.v("mat4","",4)
C.Q=new G.v("mat4","",128)
C.b=new G.v("float","",0)
C.S=new G.v("float","",4)
C.T=new G.v("float","depth for shadowmaps",0)
C.f=new G.v("sampler2D","",0)
C.U=new G.v("float","for bump maps",0)
C.V=new G.v("vec2","texture uvs",0)
C.W=new G.v("float","time since program start in sec",0)
C.k=new G.v("vec2","",0)
C.X=new G.v("samplerCube","",0)
C.l=new G.v("vec4","",0)
C.Y=new G.v("vec3","vertex normals",0)
C.Z=new G.v("sampler2DShadow","",0)
C.z=new G.v("vec3","per vertex color",0)
C.A=new G.v("mat3","",0)
C.a_=new G.v("vec3","vertex tangents",0)
$.X=0
$.az=null
$.ck=null
$.bQ=!1
$.dg=null
$.db=null
$.dl=null
$.bt=null
$.bw=null
$.c0=null
$.as=null
$.aO=null
$.aP=null
$.bR=!1
$.B=C.d
$.cq=null
$.cp=null
$.co=null
$.cn=null
$.iJ=0
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
I.$lazy(y,x,w)}})(["jo","dr",function(){return H.df("_$dart_dartClosure")},"k1","c5",function(){return H.df("_$dart_js")},"kN","dt",function(){return H.Y(H.bm({
toString:function(){return"$receiver$"}}))},"kO","du",function(){return H.Y(H.bm({$method$:null,
toString:function(){return"$receiver$"}}))},"kP","dv",function(){return H.Y(H.bm(null))},"kQ","dw",function(){return H.Y(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"kT","dz",function(){return H.Y(H.bm(void 0))},"kU","dA",function(){return H.Y(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"kS","dy",function(){return H.Y(H.cL(null))},"kR","dx",function(){return H.Y(function(){try{null.$method$}catch(z){return z.message}}())},"kW","dC",function(){return H.Y(H.cL(void 0))},"kV","dB",function(){return H.Y(function(){try{(void 0).$method$}catch(z){return z.message}}())},"l5","c6",function(){return P.h9()},"lh","aX",function(){return[]},"jl","dq",function(){return{}},"kC","ds",function(){return new G.cK(1281,0,4294967295)},"jg","dn",function(){return new G.cJ(32774,770,769)},"lf","ab",function(){return P.cy(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.z,"aColorAlpha",C.O,"aPosition",C.x,"aTexUV",C.V,"aNormal",C.Y,"aBinormal",C.N,"aCenter",C.y,"aPointSize",C.b,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a_,"aBitangent",C.L,"iaRotation",C.l,"iaTranslation",C.c,"iaScale",C.b,"iaColor",C.c,"vColor",C.z,"vTexUV",C.k,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.x,"vPositionFromLight",C.M,"vCenter",C.y,"vDepth",C.T,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.A,"uConvolutionMatrix",C.A,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.Z,"uTexture",C.f,"uTexture2",C.f,"uTexture3",C.f,"uTexture4",C.f,"uSpecularMap",C.f,"uNormalMap",C.f,"uBumpMap",C.f,"uDepthMap",C.f,"uCubeTexture",C.X,"uAnimationTable",C.f,"uTime",C.W,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.c,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.Q,"uLightDescs",C.R,"uLightCount",C.b,"uLightTypes",C.S,"uBumpScale",C.U,"uNormalScale",C.P],P.f,G.v)},"kZ","dD",function(){return P.fx(null)},"ji","dp",function(){return T.h4(1,0,0)},"lo","dH",function(){var z,y
z=G.bl("PointSpritesV")
y=[P.f]
z.az(H.r(["aPosition"],y))
z.U(H.r(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"],y))
z.V(H.r(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"],y))
return z},"ln","dG",function(){var z,y
z=G.bl("PointSpritesF")
y=[P.f]
z.U(H.r(["uTexture"],y))
z.V(H.r(["oFragColor = texture( uTexture,  gl_PointCoord);"],y))
return z},"ll","dF",function(){var z,y
z=G.bl("FireWorksV")
y=[P.f]
z.az(H.r(["aPosition","aNormal"],y))
z.U(H.r(["uPerspectiveViewMatrix","uModelMatrix","uTime"],y))
z.V(H.r(["      float t = mod(uTime, 5.0);\n      vec3 vp = aPosition;\n      if( t < 3.0) {\n       vp.y = t;\n      } else {\n       vp.y = 3.0;\n       vp += normalize(aNormal)*(t-3.0);\n      }\n      gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(vp, 1.0);\n      gl_PointSize = 100.0/gl_Position.z;\n"],y))
return z},"lk","dE",function(){var z,y
z=G.bl("FireWorksF")
y=[P.f]
z.U(H.r(["uTime","uColor","uTexture"],y))
z.V(H.r(["      oFragColor = texture(uTexture, gl_PointCoord);\n      float t = mod(uTime, 5.0);\n      if( t < 3.0) {\n         //gl_FragColor.x = 1.0;\n      } else {\n         //gl_FragColor.rgb = uColor;\n         oFragColor.a -= (t-3.0);\n      }\n"],y))
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.A},{func:1,ret:-1},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:P.A,args:[W.S]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.A,args:[,]},{func:1,ret:P.A,args:[,,]},{func:1,ret:P.f,args:[P.E]},{func:1,ret:P.A,args:[W.aD]},{func:1,args:[,P.f]},{func:1,args:[P.f]},{func:1,ret:P.A,args:[{func:1,ret:-1}]},{func:1,ret:P.A,args:[,],opt:[P.T]},{func:1,ret:[P.Z,,],args:[,]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.A,args:[P.y]},{func:1,args:[W.a3]},{func:1,ret:P.A,args:[W.aM]},{func:1,ret:P.E,args:[P.E,P.a]},{func:1,ret:-1,args:[P.y]},{func:1,ret:P.E,args:[,,]}]
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
if(x==y)H.j8(d||a)
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
Isolate.bZ=a.bZ
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
if(typeof dartMainRunner==="function")dartMainRunner(R.di,[])
else R.di([])})})()
//# sourceMappingURL=fireworks.dart.js.map
