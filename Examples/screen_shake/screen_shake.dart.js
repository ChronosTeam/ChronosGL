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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$ise)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.ca"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.ca"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.ca(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.aW=function(){}
var dart=[["","",,H,{"^":"",ko:{"^":"b;a"}}],["","",,J,{"^":"",
ce:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bG:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cd==null){H.jk()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.d5("Return interceptor for "+H.d(y(a,z))))}w=a.constructor
v=w==null?null:w[$.ch()]
if(v!=null)return v
v=H.jp(a)
if(v!=null)return v
if(typeof a=="function")return C.L
y=Object.getPrototypeOf(a)
if(y==null)return C.w
if(y===Object.prototype)return C.w
if(typeof w=="function"){Object.defineProperty(w,$.ch(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
e:{"^":"b;",
v:function(a,b){return a===b},
gt:function(a){return H.aL(a)},
k:["c5",function(a){return"Instance of '"+H.aM(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fd:{"^":"e;",
k:function(a){return String(a)},
gt:function(a){return a?519018:218159},
$isc7:1},
cL:{"^":"e;",
v:function(a,b){return null==b},
k:function(a){return"null"},
gt:function(a){return 0},
$isF:1},
bZ:{"^":"e;",
gt:function(a){return 0},
k:["c6",function(a){return String(a)}]},
fJ:{"^":"bZ;"},
aO:{"^":"bZ;"},
ba:{"^":"bZ;",
k:function(a){var z=a[$.dK()]
if(z==null)return this.c6(a)
return"JavaScript function for "+H.d(J.bn(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbW:1},
b7:{"^":"e;$ti",
l:function(a,b){H.v(b,H.o(a,0))
if(!!a.fixed$length)H.a7(P.w("add"))
a.push(b)},
cI:function(a,b){var z,y
H.x(b,"$isi",[H.o(a,0)],"$asi")
if(!!a.fixed$length)H.a7(P.w("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.M)(b),++y)a.push(b[y])},
U:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.d(a[y]))
return z.join(b)},
c2:function(a,b){if(!!a.immutable$list)H.a7(P.w("sort"))
H.h8(a,J.iW(),H.o(a,0))},
a5:function(a){return this.c2(a,null)},
k:function(a){return P.bX(a,"[","]")},
gw:function(a){return new J.ez(a,a.length,0,[H.o(a,0)])},
gt:function(a){return H.aL(a)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.aV(a,b))
return a[b]},
i:function(a,b,c){H.v(c,H.o(a,0))
if(!!a.immutable$list)H.a7(P.w("indexed set"))
if(b>=a.length||b<0)throw H.c(H.aV(a,b))
a[b]=c},
$isr:1,
$asr:I.aW,
$isi:1,
$isa:1,
p:{
fc:function(a,b){return J.bY(H.p(a,[b]))},
bY:function(a){H.bh(a)
a.fixed$length=Array
return a},
km:[function(a,b){return J.e5(H.dD(a,"$isP"),H.dD(b,"$isP"))},"$2","iW",8,0,23]}},
kn:{"^":"b7;$ti"},
ez:{"^":"b;a,b,c,0d,$ti",
saU:function(a){this.d=H.v(a,H.o(this,0))},
gC:function(a){return this.d},
u:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.M(z))
x=this.c
if(x>=y){this.saU(null)
return!1}this.saU(z[x]);++this.c
return!0}},
b8:{"^":"e;",
H:function(a,b){var z
H.cf(b)
if(typeof b!=="number")throw H.c(H.aT(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gan(b)
if(this.gan(a)===z)return 0
if(this.gan(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gan:function(a){return a===0?1/a<0:a<0},
bM:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.w(""+a+".toInt()"))},
cP:function(a,b,c){if(this.H(b,c)>0)throw H.c(H.aT(b))
if(this.H(a,b)<0)return b
if(this.H(a,c)>0)return c
return a},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gt:function(a){return a&0x1FFFFFFF},
c7:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.ba(a,b)},
A:function(a,b){return(a|0)===a?a/b|0:this.ba(a,b)},
ba:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.w("Result of truncating division is "+H.d(z)+": "+H.d(a)+" ~/ "+b))},
b8:function(a,b){var z
if(a>0)z=this.cF(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
cF:function(a,b){return b>31?0:a>>>b},
L:function(a,b){if(typeof b!=="number")throw H.c(H.aT(b))
return a>b},
$isP:1,
$asP:function(){return[P.D]},
$isU:1,
$isD:1},
cK:{"^":"b8;",$isA:1},
fe:{"^":"b8;"},
b9:{"^":"e;",
a7:function(a,b){if(b>=a.length)throw H.c(H.aV(a,b))
return a.charCodeAt(b)},
E:function(a,b){H.y(b)
if(typeof b!=="string")throw H.c(P.cw(b,null,null))
return a+b},
c4:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bt(b,null,null))
if(b>c)throw H.c(P.bt(b,null,null))
if(c>a.length)throw H.c(P.bt(c,null,null))
return a.substring(b,c)},
c3:function(a,b){return this.c4(a,b,null)},
cQ:function(a,b,c){if(c>a.length)throw H.c(P.fW(c,0,a.length,null,null))
return H.jv(a,b,c)},
H:function(a,b){var z
H.y(b)
if(typeof b!=="string")throw H.c(H.aT(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.c(H.aV(a,b))
return a[b]},
$isr:1,
$asr:I.aW,
$isP:1,
$asP:function(){return[P.f]},
$isfG:1,
$isf:1}}],["","",,H,{"^":"",
h8:function(a,b,c){H.x(a,"$isa",[c],"$asa")
H.j(b,{func:1,ret:P.A,args:[c,c]})
H.bb(a,0,J.b3(a)-1,b,c)},
bb:function(a,b,c,d,e){H.x(a,"$isa",[e],"$asa")
H.j(d,{func:1,ret:P.A,args:[e,e]})
if(c-b<=32)H.h7(a,b,c,d,e)
else H.h6(a,b,c,d,e)},
h7:function(a,b,c,d,e){var z,y,x,w,v
H.x(a,"$isa",[e],"$asa")
H.j(d,{func:1,ret:P.A,args:[e,e]})
for(z=b+1,y=J.aX(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.a_(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
h6:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.x(a,"$isa",[a2],"$asa")
H.j(a1,{func:1,ret:P.A,args:[a2,a2]})
z=C.b.A(a0-b+1,6)
y=b+z
x=a0-z
w=C.b.A(b+a0,2)
v=w-z
u=w+z
t=J.aX(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.a_(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.a_(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.a_(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.a_(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a_(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.a_(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.a_(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.a_(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a_(a1.$2(p,o),0)){n=o
o=p
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,a0))
m=b+1
l=a0-1
if(J.aB(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.W()
if(i<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.L()
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
if(typeof e!=="number")return e.W()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.L()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.L()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.W()
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
H.bb(a,b,m-2,a1,a2)
H.bb(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aB(a1.$2(t.h(a,m),r),0);)++m
for(;J.aB(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.W()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.bb(a,m,l,a1,a2)}else H.bb(a,m,l,a1,a2)},
eZ:{"^":"i;"},
fn:{"^":"b;a,b,c,0d,$ti",
saV:function(a){this.d=H.v(a,H.o(this,0))},
gC:function(a){return this.d},
u:function(){var z,y,x,w
z=this.a
y=J.aX(z)
x=y.gj(z)
if(this.b!==x)throw H.c(P.aE(z))
w=this.c
if(w>=x){this.saV(null)
return!1}this.saV(y.q(z,w));++this.c
return!0}},
br:{"^":"b;$ti"}}],["","",,H,{"^":"",
at:function(a){var z,y
z=H.y(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
je:function(a){return init.types[H.K(a)]},
jn:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.B(a).$ist},
d:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bn(a)
if(typeof z!=="string")throw H.c(H.aT(a))
return z},
aL:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aM:function(a){return H.fK(a)+H.bA(H.ar(a),0,null)},
fK:function(a){var z,y,x,w,v,u,t,s,r
z=J.B(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.D||!!z.$isaO){u=C.v(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.at(w.length>1&&C.i.a7(w,0)===36?C.i.c3(w,1):w)},
au:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
fR:function(a){var z=H.au(a).getFullYear()+0
return z},
fP:function(a){var z=H.au(a).getMonth()+1
return z},
fL:function(a){var z=H.au(a).getDate()+0
return z},
fM:function(a){var z=H.au(a).getHours()+0
return z},
fO:function(a){var z=H.au(a).getMinutes()+0
return z},
fQ:function(a){var z=H.au(a).getSeconds()+0
return z},
fN:function(a){var z=H.au(a).getMilliseconds()+0
return z},
bg:function(a){throw H.c(H.aT(a))},
k:function(a,b){if(a==null)J.b3(a)
throw H.c(H.aV(a,b))},
aV:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aC(!0,b,"index",null)
z=H.K(J.b3(a))
if(!(b<0)){if(typeof z!=="number")return H.bg(z)
y=b>=z}else y=!0
if(y)return P.E(b,a,"index",null,z)
return P.bt(b,"index",null)},
aT:function(a){return new P.aC(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.cU()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.dG})
z.name=""}else z.toString=H.dG
return z},
dG:function(){return J.bn(this.dartException)},
a7:function(a){throw H.c(a)},
M:function(a){throw H.c(P.aE(a))},
b_:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.jx(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.b8(x,16)&8191)===10)switch(w){case 438:return z.$1(H.c_(H.d(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.cT(H.d(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.dM()
u=$.dN()
t=$.dO()
s=$.dP()
r=$.dS()
q=$.dT()
p=$.dR()
$.dQ()
o=$.dV()
n=$.dU()
m=v.G(y)
if(m!=null)return z.$1(H.c_(H.y(y),m))
else{m=u.G(y)
if(m!=null){m.method="call"
return z.$1(H.c_(H.y(y),m))}else{m=t.G(y)
if(m==null){m=s.G(y)
if(m==null){m=r.G(y)
if(m==null){m=q.G(y)
if(m==null){m=p.G(y)
if(m==null){m=s.G(y)
if(m==null){m=o.G(y)
if(m==null){m=n.G(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.cT(H.y(y),m))}}return z.$1(new H.hs(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.cX()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aC(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.cX()
return a},
aY:function(a){var z
if(a==null)return new H.dk(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dk(a)},
j8:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
jm:function(a,b,c,d,e,f){H.h(a,"$isbW")
switch(H.K(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.cH("Unsupported number of arguments for wrapped closure"))},
aU:function(a,b){var z
H.K(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.jm)
a.$identity=z
return z},
eL:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.B(d).$isa){z.$reflectionInfo=d
x=H.fY(z).r}else x=d
w=e?Object.create(new H.hc().constructor.prototype):Object.create(new H.bR(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a0
if(typeof u!=="number")return u.E()
$.a0=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.cA(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.je,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cy:H.bS
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.c("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cA(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
eI:function(a,b,c,d){var z=H.bS
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cA:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.eK(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.eI(y,!w,z,b)
if(y===0){w=$.a0
if(typeof w!=="number")return w.E()
$.a0=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aD
if(v==null){v=H.bo("self")
$.aD=v}return new Function(w+H.d(v)+";return "+u+"."+H.d(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a0
if(typeof w!=="number")return w.E()
$.a0=w+1
t+=w
w="return function("+t+"){return this."
v=$.aD
if(v==null){v=H.bo("self")
$.aD=v}return new Function(w+H.d(v)+"."+H.d(z)+"("+t+");}")()},
eJ:function(a,b,c,d){var z,y
z=H.bS
y=H.cy
switch(b?-1:a){case 0:throw H.c(H.h1("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
eK:function(a,b){var z,y,x,w,v,u,t,s
z=$.aD
if(z==null){z=H.bo("self")
$.aD=z}y=$.cx
if(y==null){y=H.bo("receiver")
$.cx=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.eJ(w,!u,x,b)
if(w===1){z="return function(){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+");"
y=$.a0
if(typeof y!=="number")return y.E()
$.a0=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+", "+s+");"
y=$.a0
if(typeof y!=="number")return y.E()
$.a0=y+1
return new Function(z+y+"}")()},
ca:function(a,b,c,d,e,f,g){return H.eL(a,b,H.K(c),d,!!e,!!f,g)},
y:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.Y(a,"String"))},
dy:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.Y(a,"double"))},
cf:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.Y(a,"num"))},
c8:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.Y(a,"bool"))},
K:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.Y(a,"int"))},
cg:function(a,b){throw H.c(H.Y(a,H.at(H.y(b).substring(3))))},
jt:function(a,b){throw H.c(H.cz(a,H.at(H.y(b).substring(3))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.B(a)[b])return a
H.cg(a,b)},
a6:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.B(a)[b]
else z=!0
if(z)return a
H.jt(a,b)},
dD:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.B(a)[b])return a
H.cg(a,b)},
bh:function(a){if(a==null)return a
if(!!J.B(a).$isa)return a
throw H.c(H.Y(a,"List<dynamic>"))},
jo:function(a,b){var z
if(a==null)return a
z=J.B(a)
if(!!z.$isa)return a
if(z[b])return a
H.cg(a,b)},
cb:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.K(z)]
else return a.$S()}return},
be:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cb(J.B(a))
if(z==null)return!1
return H.dp(z,null,b,null)},
j:function(a,b){var z,y
if(a==null)return a
if($.c4)return a
$.c4=!0
try{if(H.be(a,b))return a
z=H.bi(b)
y=H.Y(a,z)
throw H.c(y)}finally{$.c4=!1}},
bE:function(a,b){if(a!=null&&!H.c9(a,b))H.a7(H.Y(a,H.bi(b)))
return a},
dt:function(a){var z,y
z=J.B(a)
if(!!z.$isn){y=H.cb(z)
if(y!=null)return H.bi(y)
return"Closure"}return H.aM(a)},
jw:function(a){throw H.c(new P.eQ(H.y(a)))},
dz:function(a){return init.getIsolateTag(a)},
p:function(a,b){a.$ti=b
return a},
ar:function(a){if(a==null)return
return a.$ti},
lJ:function(a,b,c){return H.aZ(a["$as"+H.d(c)],H.ar(b))},
bf:function(a,b,c,d){var z
H.y(c)
H.K(d)
z=H.aZ(a["$as"+H.d(c)],H.ar(b))
return z==null?null:z[d]},
o:function(a,b){var z
H.K(b)
z=H.ar(a)
return z==null?null:z[b]},
bi:function(a){return H.aq(a,null)},
aq:function(a,b){var z,y
H.x(b,"$isa",[P.f],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.at(a[0].builtin$cls)+H.bA(a,1,b)
if(typeof a=="function")return H.at(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.K(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.k(b,y)
return H.d(b[y])}if('func' in a)return H.iV(a,b)
if('futureOr' in a)return"FutureOr<"+H.aq("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
iV:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.f]
H.x(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.p([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.k(b,r)
t=C.i.E(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.aq(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aq(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aq(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aq(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.j7(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.y(z[l])
n=n+m+H.aq(i[h],b)+(" "+H.d(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bA:function(a,b,c){var z,y,x,w,v,u
H.x(c,"$isa",[P.f],"$asa")
if(a==null)return""
z=new P.c1("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aq(u,c)}return"<"+z.k(0)+">"},
jd:function(a){var z,y,x,w
z=J.B(a)
if(!!z.$isn){y=H.cb(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ar(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aZ:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aA:function(a,b,c,d){var z,y
H.y(b)
H.bh(c)
H.y(d)
if(a==null)return!1
z=H.ar(a)
y=J.B(a)
if(y[b]==null)return!1
return H.dw(H.aZ(y[d],z),null,c,null)},
bj:function(a,b,c,d){H.y(b)
H.bh(c)
H.y(d)
if(a==null)return a
if(H.aA(a,b,c,d))return a
throw H.c(H.cz(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.at(b.substring(3))+H.bA(c,0,null),init.mangledGlobalNames)))},
x:function(a,b,c,d){H.y(b)
H.bh(c)
H.y(d)
if(a==null)return a
if(H.aA(a,b,c,d))return a
throw H.c(H.Y(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.at(b.substring(3))+H.bA(c,0,null),init.mangledGlobalNames)))},
dw:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.S(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.S(a[y],b,c[y],d))return!1
return!0},
lF:function(a,b,c){return a.apply(b,H.aZ(J.B(b)["$as"+H.d(c)],H.ar(b)))},
dB:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="F"||a===-1||a===-2||H.dB(z)}return!1},
c9:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="F"||b===-1||b===-2||H.dB(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.c9(a,"type" in b?b.type:null))return!0
if('func' in b)return H.be(a,b)}z=J.B(a).constructor
y=H.ar(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.S(z,null,b,null)},
v:function(a,b){if(a!=null&&!H.c9(a,b))throw H.c(H.Y(a,H.bi(b)))
return a},
S:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.S(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.dp(a,b,c,d)
if('func' in a)return c.builtin$cls==="bW"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.S("type" in a?a.type:null,b,x,d)
else if(H.S(a,b,x,d))return!0
else{if(!('$is'+"aG" in y.prototype))return!1
w=y.prototype["$as"+"aG"]
v=H.aZ(w,z?a.slice(1):null)
return H.S(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.dw(H.aZ(r,z),b,u,d)},
dp:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.S(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.S(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.S(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.S(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.js(m,b,l,d)},
js:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.S(c[w],d,a[w],b))return!1}return!0},
lG:function(a,b,c){Object.defineProperty(a,H.y(b),{value:c,enumerable:false,writable:true,configurable:true})},
jp:function(a){var z,y,x,w,v,u
z=H.y($.dA.$1(a))
y=$.bD[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bI[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.y($.dv.$2(a,z))
if(z!=null){y=$.bD[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bI[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bJ(x)
$.bD[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bI[z]=x
return x}if(v==="-"){u=H.bJ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.dE(a,x)
if(v==="*")throw H.c(P.d5(z))
if(init.leafTags[z]===true){u=H.bJ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.dE(a,x)},
dE:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.ce(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bJ:function(a){return J.ce(a,!1,null,!!a.$ist)},
jr:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bJ(z)
else return J.ce(z,c,null,null)},
jk:function(){if(!0===$.cd)return
$.cd=!0
H.jl()},
jl:function(){var z,y,x,w,v,u,t,s
$.bD=Object.create(null)
$.bI=Object.create(null)
H.jg()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.dF.$1(v)
if(u!=null){t=H.jr(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
jg:function(){var z,y,x,w,v,u,t
z=C.I()
z=H.az(C.F,H.az(C.K,H.az(C.u,H.az(C.u,H.az(C.J,H.az(C.G,H.az(C.H(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.dA=new H.jh(v)
$.dv=new H.ji(u)
$.dF=new H.jj(t)},
az:function(a,b){return a(b)||b},
jv:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fX:{"^":"b;a,b,c,d,e,f,r,0x",p:{
fY:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bY(z)
y=z[0]
x=z[1]
return new H.fX(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
hn:{"^":"b;a,b,c,d,e,f",
G:function(a){var z,y,x
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
a2:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.p([],[P.f])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.hn(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bv:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
d2:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
fD:{"^":"L;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
cT:function(a,b){return new H.fD(a,b==null?null:b.method)}}},
ff:{"^":"L;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.d(this.a)+")"},
p:{
c_:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.ff(a,y,z?null:b.receiver)}}},
hs:{"^":"L;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
jx:{"^":"n:5;a",
$1:function(a){if(!!J.B(a).$isL)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dk:{"^":"b;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isX:1},
n:{"^":"b;",
k:function(a){return"Closure '"+H.aM(this).trim()+"'"},
gc_:function(){return this},
$isbW:1,
gc_:function(){return this}},
cZ:{"^":"n;"},
hc:{"^":"cZ;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.at(z)+"'"}},
bR:{"^":"cZ;a,b,c,d",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bR))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gt:function(a){var z,y
z=this.c
if(z==null)y=H.aL(this.a)
else y=typeof z!=="object"?J.a8(z):H.aL(z)
return(y^H.aL(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.aM(z)+"'")},
p:{
bS:function(a){return a.a},
cy:function(a){return a.c},
bo:function(a){var z,y,x,w,v
z=new H.bR("self","target","receiver","name")
y=J.bY(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ho:{"^":"L;a",
k:function(a){return this.a},
p:{
Y:function(a,b){return new H.ho("TypeError: "+P.bq(a)+": type '"+H.dt(a)+"' is not a subtype of type '"+b+"'")}}},
eG:{"^":"L;a",
k:function(a){return this.a},
p:{
cz:function(a,b){return new H.eG("CastError: "+P.bq(a)+": type '"+H.dt(a)+"' is not a subtype of type '"+b+"'")}}},
h0:{"^":"L;a",
k:function(a){return"RuntimeError: "+H.d(this.a)},
p:{
h1:function(a){return new H.h0(a)}}},
d3:{"^":"b;a,0b,0c,0d",
gZ:function(){var z=this.b
if(z==null){z=H.bi(this.a)
this.b=z}return z},
k:function(a){return this.gZ()},
gt:function(a){var z=this.d
if(z==null){z=C.i.gt(this.gZ())
this.d=z}return z},
v:function(a,b){if(b==null)return!1
return b instanceof H.d3&&this.gZ()===b.gZ()}},
cM:{"^":"fo;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gJ:function(a){return new H.ac(this,[H.o(this,0)])},
a1:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cs(z,b)}else{y=this.cZ(b)
return y}},
cZ:function(a){var z=this.d
if(z==null)return!1
return this.am(this.af(z,J.a8(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.X(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.X(w,b)
x=y==null?null:y.b
return x}else return this.d_(b)},
d_:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.af(z,J.a8(a)&0x3ffffff)
x=this.am(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.v(b,H.o(this,0))
H.v(c,H.o(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.ag()
this.b=z}this.aX(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ag()
this.c=y}this.aX(y,b,c)}else{x=this.d
if(x==null){x=this.ag()
this.d=x}w=J.a8(b)&0x3ffffff
v=this.af(x,w)
if(v==null)this.aj(x,w,[this.ah(b,c)])
else{u=this.am(v,b)
if(u>=0)v[u].b=c
else v.push(this.ah(b,c))}}},
B:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.o(this,0),H.o(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aE(this))
z=z.c}},
aX:function(a,b,c){var z
H.v(b,H.o(this,0))
H.v(c,H.o(this,1))
z=this.X(a,b)
if(z==null)this.aj(a,b,this.ah(b,c))
else z.b=c},
b5:function(){this.r=this.r+1&67108863},
ah:function(a,b){var z,y
z=new H.fk(H.v(a,H.o(this,0)),H.v(b,H.o(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b5()
return z},
am:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aB(a[y].a,b))return y
return-1},
k:function(a){return P.cP(this)},
X:function(a,b){return a[b]},
af:function(a,b){return a[b]},
aj:function(a,b,c){a[b]=c},
ct:function(a,b){delete a[b]},
cs:function(a,b){return this.X(a,b)!=null},
ag:function(){var z=Object.create(null)
this.aj(z,"<non-identifier-key>",z)
this.ct(z,"<non-identifier-key>")
return z},
$iscN:1},
fk:{"^":"b;a,b,0c,0d"},
ac:{"^":"eZ;a,$ti",
gj:function(a){return this.a.a},
gw:function(a){var z,y
z=this.a
y=new H.fl(z,z.r,this.$ti)
y.c=z.e
return y}},
fl:{"^":"b;a,b,0c,0d,$ti",
saW:function(a){this.d=H.v(a,H.o(this,0))},
gC:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aE(z))
else{z=this.c
if(z==null){this.saW(null)
return!1}else{this.saW(z.a)
this.c=this.c.c
return!0}}}},
jh:{"^":"n:5;a",
$1:function(a){return this.a(a)}},
ji:{"^":"n:10;a",
$2:function(a,b){return this.a(a,b)}},
jj:{"^":"n:11;a",
$1:function(a){return this.a(H.y(a))}}}],["","",,H,{"^":"",
j7:function(a){return J.fc(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
bK:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bz:function(a){var z,y
if(!!J.B(a).$isr)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.i(z,y,a[y])
return z},
a4:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.aV(b,a))},
fB:{"^":"e;",$ishp:1,"%":"DataView;ArrayBufferView;c0|dd|de|cS|df|dg|ag"},
c0:{"^":"fB;",
gj:function(a){return a.length},
$isr:1,
$asr:I.aW,
$ist:1,
$ast:I.aW},
cS:{"^":"de;",
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
i:function(a,b,c){H.dy(c)
H.a4(b,a,a.length)
a[b]=c},
$asbr:function(){return[P.U]},
$asm:function(){return[P.U]},
$isi:1,
$asi:function(){return[P.U]},
$isa:1,
$asa:function(){return[P.U]},
"%":"Float64Array"},
ag:{"^":"dg;",
i:function(a,b,c){H.K(c)
H.a4(b,a,a.length)
a[b]=c},
$asbr:function(){return[P.A]},
$asm:function(){return[P.A]},
$isi:1,
$asi:function(){return[P.A]},
$isa:1,
$asa:function(){return[P.A]}},
fA:{"^":"cS;",$isa5:1,"%":"Float32Array"},
ky:{"^":"ag;",
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
"%":"Int16Array"},
kz:{"^":"ag;",
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
$isfa:1,
"%":"Int32Array"},
kA:{"^":"ag;",
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
"%":"Int8Array"},
kB:{"^":"ag;",
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
fC:{"^":"ag;",
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
$islj:1,
"%":"Uint32Array"},
kC:{"^":"ag;",
gj:function(a){return a.length},
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
kD:{"^":"ag;",
gj:function(a){return a.length},
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dd:{"^":"c0+m;"},
de:{"^":"dd+br;"},
df:{"^":"c0+m;"},
dg:{"^":"df+br;"}}],["","",,P,{"^":"",
hz:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.j2()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aU(new P.hB(z),1)).observe(y,{childList:true})
return new P.hA(z,y,x)}else if(self.setImmediate!=null)return P.j3()
return P.j4()},
lt:[function(a){self.scheduleImmediate(H.aU(new P.hC(H.j(a,{func:1,ret:-1})),0))},"$1","j2",4,0,4],
lu:[function(a){self.setImmediate(H.aU(new P.hD(H.j(a,{func:1,ret:-1})),0))},"$1","j3",4,0,4],
lv:[function(a){H.j(a,{func:1,ret:-1})
P.iE(0,a)},"$1","j4",4,0,4],
iZ:function(a,b){if(H.be(a,{func:1,args:[P.b,P.X]}))return H.j(a,{func:1,ret:null,args:[P.b,P.X]})
if(H.be(a,{func:1,args:[P.b]}))return H.j(a,{func:1,ret:null,args:[P.b]})
throw H.c(P.cw(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
iY:function(){var z,y
for(;z=$.ay,z!=null;){$.aS=null
y=z.b
$.ay=y
if(y==null)$.aR=null
z.a.$0()}},
lD:[function(){$.c5=!0
try{P.iY()}finally{$.aS=null
$.c5=!1
if($.ay!=null)$.ci().$1(P.dx())}},"$0","dx",0,0,1],
ds:function(a){var z=new P.d7(H.j(a,{func:1,ret:-1}))
if($.ay==null){$.aR=z
$.ay=z
if(!$.c5)$.ci().$1(P.dx())}else{$.aR.b=z
$.aR=z}},
j1:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
z=$.ay
if(z==null){P.ds(a)
$.aS=$.aR
return}y=new P.d7(a)
x=$.aS
if(x==null){y.b=z
$.aS=y
$.ay=y}else{y.b=x.b
x.b=y
$.aS=y
if(y.b==null)$.aR=y}},
ju:function(a){var z,y
z={func:1,ret:-1}
H.j(a,z)
y=$.G
if(C.e===y){P.bC(null,null,C.e,a)
return}y.toString
P.bC(null,null,y,H.j(y.bf(a),z))},
bB:function(a,b,c,d,e){var z={}
z.a=d
P.j1(new P.j_(z,e))},
dq:function(a,b,c,d,e){var z,y
H.j(d,{func:1,ret:e})
y=$.G
if(y===c)return d.$0()
$.G=c
z=y
try{y=d.$0()
return y}finally{$.G=z}},
dr:function(a,b,c,d,e,f,g){var z,y
H.j(d,{func:1,ret:f,args:[g]})
H.v(e,g)
y=$.G
if(y===c)return d.$1(e)
$.G=c
z=y
try{y=d.$1(e)
return y}finally{$.G=z}},
j0:function(a,b,c,d,e,f,g,h,i){var z,y
H.j(d,{func:1,ret:g,args:[h,i]})
H.v(e,h)
H.v(f,i)
y=$.G
if(y===c)return d.$2(e,f)
$.G=c
z=y
try{y=d.$2(e,f)
return y}finally{$.G=z}},
bC:function(a,b,c,d){var z
H.j(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.bf(d):c.cM(d,-1)
P.ds(d)},
hB:{"^":"n:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
hA:{"^":"n:12;a,b,c",
$1:function(a){var z,y
this.a.a=H.j(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
hC:{"^":"n:0;a",
$0:function(){this.a.$0()}},
hD:{"^":"n:0;a",
$0:function(){this.a.$0()}},
iD:{"^":"b;a,0b,c",
cn:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aU(new P.iF(this,b),0),a)
else throw H.c(P.w("`setTimeout()` not found."))},
p:{
iE:function(a,b){var z=new P.iD(!0,0)
z.cn(a,b)
return z}}},
iF:{"^":"n:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
hF:{"^":"b;$ti"},
iA:{"^":"hF;a,$ti"},
ax:{"^":"b;0a,b,c,d,e,$ti",
d0:function(a){if(this.c!==6)return!0
return this.b.b.ap(H.j(this.d,{func:1,ret:P.c7,args:[P.b]}),a.a,P.c7,P.b)},
cY:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.o(this,1)}
w=this.b.b
if(H.be(z,{func:1,args:[P.b,P.X]}))return H.bE(w.d4(z,a.a,a.b,null,y,P.X),x)
else return H.bE(w.ap(H.j(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
a3:{"^":"b;b9:a<,b,0cE:c<,$ti",
bL:function(a,b,c){var z,y,x,w
z=H.o(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.G
if(y!==C.e){y.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.iZ(b,y)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.a3(0,$.G,[c])
w=b==null?1:3
this.aY(new P.ax(x,w,a,b,[z,c]))
return x},
bK:function(a,b){return this.bL(a,null,b)},
aY:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isax")
this.c=a}else{if(z===2){y=H.h(this.c,"$isa3")
z=y.a
if(z<4){y.aY(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bC(null,null,z,H.j(new P.hS(this,a),{func:1,ret:-1}))}},
b6:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isax")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isa3")
y=u.a
if(y<4){u.b6(a)
return}this.a=y
this.c=u.c}z.a=this.Y(a)
y=this.b
y.toString
P.bC(null,null,y,H.j(new P.hX(z,this),{func:1,ret:-1}))}},
ai:function(){var z=H.h(this.c,"$isax")
this.c=null
return this.Y(z)},
Y:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
aa:function(a){var z,y,x
z=H.o(this,0)
H.bE(a,{futureOr:1,type:z})
y=this.$ti
if(H.aA(a,"$isaG",y,"$asaG"))if(H.aA(a,"$isa3",y,null))P.d9(a,this)
else P.hT(a,this)
else{x=this.ai()
H.v(a,z)
this.a=4
this.c=a
P.aQ(this,x)}},
b0:function(a,b){var z
H.h(b,"$isX")
z=this.ai()
this.a=8
this.c=new P.R(a,b)
P.aQ(this,z)},
$isaG:1,
p:{
hT:function(a,b){var z,y,x
b.a=1
try{a.bL(new P.hU(b),new P.hV(b),null)}catch(x){z=H.b_(x)
y=H.aY(x)
P.ju(new P.hW(b,z,y))}},
d9:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isa3")
if(z>=4){y=b.ai()
b.a=a.a
b.c=a.c
P.aQ(b,y)}else{y=H.h(b.c,"$isax")
b.a=2
b.c=a
a.b6(y)}},
aQ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isR")
y=y.b
u=v.a
t=v.b
y.toString
P.bB(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.aQ(z.a,b)}y=z.a
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
if(p){H.h(r,"$isR")
y=y.b
u=r.a
t=r.b
y.toString
P.bB(null,null,y,u,t)
return}o=$.G
if(o!=q)$.G=q
else o=null
y=b.c
if(y===8)new P.i_(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.hZ(x,b,r).$0()}else if((y&2)!==0)new P.hY(z,x,b).$0()
if(o!=null)$.G=o
y=x.b
if(!!J.B(y).$isaG){if(y.a>=4){n=H.h(t.c,"$isax")
t.c=null
b=t.Y(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.d9(y,t)
return}}m=b.b
n=H.h(m.c,"$isax")
m.c=null
b=m.Y(n)
y=x.a
u=x.b
if(!y){H.v(u,H.o(m,0))
m.a=4
m.c=u}else{H.h(u,"$isR")
m.a=8
m.c=u}z.a=m
y=m}}}},
hS:{"^":"n:0;a,b",
$0:function(){P.aQ(this.a,this.b)}},
hX:{"^":"n:0;a,b",
$0:function(){P.aQ(this.b,this.a.a)}},
hU:{"^":"n:6;a",
$1:function(a){var z=this.a
z.a=0
z.aa(a)}},
hV:{"^":"n:13;a",
$2:function(a,b){H.h(b,"$isX")
this.a.b0(a,b)},
$1:function(a){return this.$2(a,null)}},
hW:{"^":"n:0;a,b,c",
$0:function(){this.a.b0(this.b,this.c)}},
i_:{"^":"n:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bH(H.j(w.d,{func:1}),null)}catch(v){y=H.b_(v)
x=H.aY(v)
if(this.d){w=H.h(this.a.a.c,"$isR").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isR")
else u.b=new P.R(y,x)
u.a=!0
return}if(!!J.B(z).$isaG){if(z instanceof P.a3&&z.gb9()>=4){if(z.gb9()===8){w=this.b
w.b=H.h(z.gcE(),"$isR")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.bK(new P.i0(t),null)
w.a=!1}}},
i0:{"^":"n:14;a",
$1:function(a){return this.a}},
hZ:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.o(x,0)
v=H.v(this.c,w)
u=H.o(x,1)
this.a.b=x.b.b.ap(H.j(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.b_(t)
y=H.aY(t)
x=this.a
x.b=new P.R(z,y)
x.a=!0}}},
hY:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isR")
w=this.c
if(w.d0(z)&&w.e!=null){v=this.b
v.b=w.cY(z)
v.a=!1}}catch(u){y=H.b_(u)
x=H.aY(u)
w=H.h(this.a.a.c,"$isR")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.R(y,x)
s.a=!0}}},
d7:{"^":"b;a,0b"},
he:{"^":"b;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.a3(0,$.G,[P.A])
z.a=0
x=H.o(this,0)
w=H.j(new P.hg(z,this),{func:1,ret:-1,args:[x]})
H.j(new P.hh(z,y),{func:1,ret:-1})
W.ap(this.a,this.b,w,!1,x)
return y}},
hg:{"^":"n;a,b",
$1:function(a){H.v(a,H.o(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.o(this.b,0)]}}},
hh:{"^":"n:0;a,b",
$0:function(){this.b.aa(this.a.a)}},
hf:{"^":"b;"},
R:{"^":"b;a,b",
k:function(a){return H.d(this.a)},
$isL:1},
iK:{"^":"b;",$islr:1},
j_:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.cU()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.k(0)
throw x}},
io:{"^":"iK;",
d5:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
try{if(C.e===$.G){a.$0()
return}P.dq(null,null,this,a,-1)}catch(x){z=H.b_(x)
y=H.aY(x)
P.bB(null,null,this,z,H.h(y,"$isX"))}},
d6:function(a,b,c){var z,y,x
H.j(a,{func:1,ret:-1,args:[c]})
H.v(b,c)
try{if(C.e===$.G){a.$1(b)
return}P.dr(null,null,this,a,b,-1,c)}catch(x){z=H.b_(x)
y=H.aY(x)
P.bB(null,null,this,z,H.h(y,"$isX"))}},
cM:function(a,b){return new P.iq(this,H.j(a,{func:1,ret:b}),b)},
bf:function(a){return new P.ip(this,H.j(a,{func:1,ret:-1}))},
cN:function(a,b){return new P.ir(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
bH:function(a,b){H.j(a,{func:1,ret:b})
if($.G===C.e)return a.$0()
return P.dq(null,null,this,a,b)},
ap:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.v(b,d)
if($.G===C.e)return a.$1(b)
return P.dr(null,null,this,a,b,c,d)},
d4:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.v(b,e)
H.v(c,f)
if($.G===C.e)return a.$2(b,c)
return P.j0(null,null,this,a,b,c,d,e,f)}},
iq:{"^":"n;a,b,c",
$0:function(){return this.a.bH(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
ip:{"^":"n:1;a,b",
$0:function(){return this.a.d5(this.b)}},
ir:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.d6(this.b,H.v(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
cO:function(a,b,c){H.bh(a)
return H.x(H.j8(a,new H.cM(0,0,[b,c])),"$iscN",[b,c],"$ascN")},
a1:function(a,b){return new H.cM(0,0,[a,b])},
ad:function(a,b,c,d){return new P.i8(0,0,[d])},
fb:function(a,b,c){var z,y
if(P.c6(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.p([],[P.f])
y=$.b0()
C.a.l(y,a)
try{P.iX(a,z)}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=P.cY(b,H.jo(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
bX:function(a,b,c){var z,y,x
if(P.c6(a))return b+"..."+c
z=new P.c1(b)
y=$.b0()
C.a.l(y,a)
try{x=z
x.a=P.cY(x.gM(),a,", ")}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=z
y.a=y.gM()+c
y=z.gM()
return y.charCodeAt(0)==0?y:y},
c6:function(a){var z,y
for(z=0;y=$.b0(),z<y.length;++z)if(a===y[z])return!0
return!1},
iX:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.x(b,"$isa",[P.f],"$asa")
z=a.gw(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.u())return
w=H.d(z.gC(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.u()){if(x<=5)return
if(0>=b.length)return H.k(b,-1)
v=b.pop()
if(0>=b.length)return H.k(b,-1)
u=b.pop()}else{t=z.gC(z);++x
if(!z.u()){if(x<=4){C.a.l(b,H.d(t))
return}v=H.d(t)
if(0>=b.length)return H.k(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gC(z);++x
for(;z.u();t=s,s=r){r=z.gC(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2;--x}C.a.l(b,"...")
return}}u=H.d(t)
v=H.d(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.l(b,q)
C.a.l(b,u)
C.a.l(b,v)},
fm:function(a,b){var z,y,x
z=P.ad(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.M)(a),++x)z.l(0,H.v(a[x],b))
return z},
cP:function(a){var z,y,x
z={}
if(P.c6(a))return"{...}"
y=new P.c1("")
try{C.a.l($.b0(),a)
x=y
x.a=x.gM()+"{"
z.a=!0
J.eg(a,new P.fp(z,y))
z=y
z.a=z.gM()+"}"}finally{z=$.b0()
if(0>=z.length)return H.k(z,-1)
z.pop()}z=y.gM()
return z.charCodeAt(0)==0?z:z},
i8:{"^":"i2;a,0b,0c,0d,0e,0f,r,$ti",
gw:function(a){return P.dc(this,this.r,H.o(this,0))},
gj:function(a){return this.a},
F:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.h(z[b],"$isbd")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.h(y[b],"$isbd")!=null}else return this.cr(b)},
cr:function(a){var z=this.d
if(z==null)return!1
return this.ae(this.b3(z,a),a)>=0},
l:function(a,b){var z,y
H.v(b,H.o(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.c3()
this.b=z}return this.aZ(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.c3()
this.c=y}return this.aZ(y,b)}else return this.co(0,b)},
co:function(a,b){var z,y,x
H.v(b,H.o(this,0))
z=this.d
if(z==null){z=P.c3()
this.d=z}y=this.b1(b)
x=z[y]
if(x==null)z[y]=[this.a9(b)]
else{if(this.ae(x,b)>=0)return!1
x.push(this.a9(b))}return!0},
bG:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.b7(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.b7(this.c,b)
else return this.cC(0,b)},
cC:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.b3(z,b)
x=this.ae(y,b)
if(x<0)return!1
this.bb(y.splice(x,1)[0])
return!0},
T:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.a8()}},
aZ:function(a,b){H.v(b,H.o(this,0))
if(H.h(a[b],"$isbd")!=null)return!1
a[b]=this.a9(b)
return!0},
b7:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isbd")
if(z==null)return!1
this.bb(z)
delete a[b]
return!0},
a8:function(){this.r=this.r+1&67108863},
a9:function(a){var z,y
z=new P.bd(H.v(a,H.o(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.a8()
return z},
bb:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.a8()},
b1:function(a){return J.a8(a)&0x3ffffff},
b3:function(a,b){return a[this.b1(b)]},
ae:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aB(a[y].a,b))return y
return-1},
p:{
c3:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bd:{"^":"b;a,0b,0c"},
i9:{"^":"b;a,b,0c,0d,$ti",
sb_:function(a){this.d=H.v(a,H.o(this,0))},
gC:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aE(z))
else{z=this.c
if(z==null){this.sb_(null)
return!1}else{this.sb_(H.v(z.a,H.o(this,0)))
this.c=this.c.b
return!0}}},
p:{
dc:function(a,b,c){var z=new P.i9(a,b,[c])
z.c=a.e
return z}}},
i2:{"^":"h2;"},
m:{"^":"b;$ti",
gw:function(a){return new H.fn(a,this.gj(a),0,[H.bf(this,a,"m",0)])},
q:function(a,b){return this.h(a,b)},
cX:function(a,b,c,d){var z,y,x
H.v(b,d)
H.j(c,{func:1,ret:d,args:[d,H.bf(this,a,"m",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.c(P.aE(a))}return y},
k:function(a){return P.bX(a,"[","]")}},
fo:{"^":"Q;"},
fp:{"^":"n:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.d(a)
z.a=y+": "
z.a+=H.d(b)}},
Q:{"^":"b;$ti",
B:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.bf(this,a,"Q",0),H.bf(this,a,"Q",1)]})
for(z=J.cn(this.gJ(a));z.u();){y=z.gC(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.b3(this.gJ(a))},
k:function(a){return P.cP(a)},
$isJ:1},
h3:{"^":"b;$ti",
k:function(a){return P.bX(this,"{","}")},
$isi:1,
$iskV:1},
h2:{"^":"h3;"}}],["","",,P,{"^":"",
f_:function(a){if(a instanceof H.n)return a.k(0)
return"Instance of '"+H.aM(a)+"'"},
bq:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bn(a)
if(typeof a==="string")return JSON.stringify(a)
return P.f_(a)},
cH:function(a){return new P.hP(a)},
as:function(a){H.bK(H.d(a))},
c7:{"^":"b;"},
"+bool":0,
bp:{"^":"b;a,b",
v:function(a,b){if(b==null)return!1
return b instanceof P.bp&&this.a===b.a&&!0},
H:function(a,b){return C.b.H(this.a,H.h(b,"$isbp").a)},
gt:function(a){var z=this.a
return(z^C.b.b8(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.eR(H.fR(this))
y=P.b4(H.fP(this))
x=P.b4(H.fL(this))
w=P.b4(H.fM(this))
v=P.b4(H.fO(this))
u=P.b4(H.fQ(this))
t=P.eS(H.fN(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isP:1,
$asP:function(){return[P.bp]},
p:{
eR:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
eS:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
b4:function(a){if(a>=10)return""+a
return"0"+a}}},
U:{"^":"D;"},
"+double":0,
aF:{"^":"b;a",
L:function(a,b){return C.b.L(this.a,H.h(b,"$isaF").a)},
v:function(a,b){if(b==null)return!1
return b instanceof P.aF&&this.a===b.a},
gt:function(a){return this.a&0x1FFFFFFF},
H:function(a,b){return C.b.H(this.a,H.h(b,"$isaF").a)},
k:function(a){var z,y,x,w,v
z=new P.eY()
y=this.a
if(y<0)return"-"+new P.aF(0-y).k(0)
x=z.$1(C.b.A(y,6e7)%60)
w=z.$1(C.b.A(y,1e6)%60)
v=new P.eX().$1(y%1e6)
return""+C.b.A(y,36e8)+":"+H.d(x)+":"+H.d(w)+"."+H.d(v)},
$isP:1,
$asP:function(){return[P.aF]},
p:{
eW:function(a,b,c,d,e,f){return new P.aF(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
eX:{"^":"n:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
eY:{"^":"n:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
L:{"^":"b;"},
cU:{"^":"L;",
k:function(a){return"Throw of null."}},
aC:{"^":"L;a,b,c,d",
gac:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gab:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gac()+y+x
if(!this.a)return w
v=this.gab()
u=P.bq(this.b)
return w+v+": "+u},
p:{
cw:function(a,b,c){return new P.aC(!0,a,b,c)}}},
cV:{"^":"aC;e,f,a,b,c,d",
gac:function(){return"RangeError"},
gab:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.d(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.d(z)
else if(x>z)y=": Not in range "+H.d(z)+".."+H.d(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.d(z)}return y},
p:{
bt:function(a,b,c){return new P.cV(null,null,!0,a,b,"Value not in range")},
fW:function(a,b,c,d,e){return new P.cV(b,c,!0,a,d,"Invalid value")}}},
f9:{"^":"aC;e,j:f>,a,b,c,d",
gac:function(){return"RangeError"},
gab:function(){var z,y
z=H.K(this.b)
if(typeof z!=="number")return z.W()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.d(y)},
p:{
E:function(a,b,c,d,e){var z=H.K(e==null?J.b3(b):e)
return new P.f9(b,z,!0,a,c,"Index out of range")}}},
ht:{"^":"L;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
w:function(a){return new P.ht(a)}}},
hr:{"^":"L;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
d5:function(a){return new P.hr(a)}}},
ha:{"^":"L;a",
k:function(a){return"Bad state: "+this.a},
p:{
hb:function(a){return new P.ha(a)}}},
eM:{"^":"L;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bq(z)+"."},
p:{
aE:function(a){return new P.eM(a)}}},
cX:{"^":"b;",
k:function(a){return"Stack Overflow"},
$isL:1},
eQ:{"^":"L;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
hP:{"^":"b;a",
k:function(a){return"Exception: "+this.a}},
A:{"^":"D;"},
"+int":0,
i:{"^":"b;$ti",
gj:function(a){var z,y
z=this.gw(this)
for(y=0;z.u();)++y
return y},
k:function(a){return P.fb(this,"(",")")}},
a:{"^":"b;$ti",$isi:1},
"+List":0,
J:{"^":"b;$ti"},
F:{"^":"b;",
gt:function(a){return P.b.prototype.gt.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
D:{"^":"b;",$isP:1,
$asP:function(){return[P.D]}},
"+num":0,
b:{"^":";",
v:function(a,b){return this===b},
gt:function(a){return H.aL(this)},
k:function(a){return"Instance of '"+H.aM(this)+"'"},
toString:function(){return this.k(this)}},
X:{"^":"b;"},
f:{"^":"b;",$isP:1,
$asP:function(){return[P.f]},
$isfG:1},
"+String":0,
c1:{"^":"b;M:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
cY:function(a,b,c){var z=J.cn(b)
if(!z.u())return a
if(c.length===0){do a+=H.d(z.gC(z))
while(z.u())}else{a+=H.d(z.gC(z))
for(;z.u();)a=a+c+H.d(z.gC(z))}return a}}}}],["","",,W,{"^":"",
cG:function(a){H.h(a,"$isI")
return"wheel"},
by:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
db:function(a,b,c,d){var z,y
z=W.by(W.by(W.by(W.by(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
dn:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.hI(a)
if(!!J.B(z).$isI)return z
return}else return H.h(a,"$isI")},
du:function(a,b){var z
H.j(a,{func:1,ret:-1,args:[b]})
z=$.G
if(z===C.e)return a
return z.cN(a,b)},
W:{"^":"b5;","%":"HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
jy:{"^":"e;0j:length=","%":"AccessibleNodeList"},
jz:{"^":"W;",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
jA:{"^":"W;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
eC:{"^":"e;","%":";Blob"},
bT:{"^":"W;0n:height=,0m:width=",
as:function(a,b,c){if(c!=null)return this.cv(a,b,P.j5(c,null))
return this.cw(a,b)},
c0:function(a,b){return this.as(a,b,null)},
cv:function(a,b,c){return a.getContext(b,c)},
cw:function(a,b){return a.getContext(b)},
$isbT:1,
"%":"HTMLCanvasElement"},
eF:{"^":"e;",
a_:function(a,b,c){return a.addColorStop(b,c)},
"%":"CanvasGradient"},
bU:{"^":"e;",
bo:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
cW:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
a4:function(a){return P.T(a.getContextAttributes())},
$isbU:1,
"%":"CanvasRenderingContext2D"},
jG:{"^":"C;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
eN:{"^":"bV;",$iseN:1,"%":"CSSNumericValue|CSSUnitValue"},
jH:{"^":"eP;0j:length=","%":"CSSPerspective"},
a9:{"^":"e;",$isa9:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
jI:{"^":"hG;0j:length=",
ax:function(a,b){var z=this.cz(a,this.cq(a,b))
return z==null?"":z},
cq:function(a,b){var z,y
z=$.dJ()
y=z[b]
if(typeof y==="string")return y
y=this.cG(a,b)
z[b]=y
return y},
cG:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.eT()+b
if(z in a)return z
return b},
cz:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
eO:{"^":"b;",
gn:function(a){return this.ax(a,"height")},
gm:function(a){return this.ax(a,"width")}},
bV:{"^":"e;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
eP:{"^":"e;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
jK:{"^":"bV;0j:length=","%":"CSSTransformValue"},
jL:{"^":"bV;0j:length=","%":"CSSUnparsedValue"},
jN:{"^":"e;0j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
eU:{"^":"C;",
d1:function(a,b){return a.querySelector(b)},
gbB:function(a){return new W.bc(a,"mousedown",!1,[W.N])},
gbC:function(a){return new W.bc(a,"mousemove",!1,[W.N])},
gbD:function(a){return new W.bc(a,"mouseup",!1,[W.N])},
gbE:function(a){return new W.bc(a,H.y(W.cG(a)),!1,[W.aw])},
"%":"XMLDocument;Document"},
jO:{"^":"e;",
k:function(a){return String(a)},
"%":"DOMException"},
jP:{"^":"hK;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.x(c,"$isO",[P.D],"$asO")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isr:1,
$asr:function(){return[[P.O,P.D]]},
$ist:1,
$ast:function(){return[[P.O,P.D]]},
$asm:function(){return[[P.O,P.D]]},
$isi:1,
$asi:function(){return[[P.O,P.D]]},
$isa:1,
$asa:function(){return[[P.O,P.D]]},
$asq:function(){return[[P.O,P.D]]},
"%":"ClientRectList|DOMRectList"},
eV:{"^":"e;",
k:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gm(a))+" x "+H.d(this.gn(a))},
v:function(a,b){var z
if(b==null)return!1
if(!H.aA(b,"$isO",[P.D],"$asO"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.l(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gt:function(a){return W.db(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isO:1,
$asO:function(){return[P.D]},
"%":";DOMRectReadOnly"},
jQ:{"^":"hM;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.y(c)
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isr:1,
$asr:function(){return[P.f]},
$ist:1,
$ast:function(){return[P.f]},
$asm:function(){return[P.f]},
$isi:1,
$asi:function(){return[P.f]},
$isa:1,
$asa:function(){return[P.f]},
$asq:function(){return[P.f]},
"%":"DOMStringList"},
jR:{"^":"e;0j:length=","%":"DOMTokenList"},
b5:{"^":"C;",
k:function(a){return a.localName},
gbB:function(a){return new W.bx(a,"mousedown",!1,[W.N])},
gbC:function(a){return new W.bx(a,"mousemove",!1,[W.N])},
gbD:function(a){return new W.bx(a,"mouseup",!1,[W.N])},
gbE:function(a){return new W.bx(a,H.y(W.cG(a)),!1,[W.aw])},
$isb5:1,
"%":";Element"},
jT:{"^":"W;0n:height=,0m:width=","%":"HTMLEmbedElement"},
V:{"^":"e;",$isV:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
I:{"^":"e;",
cJ:function(a,b,c,d){H.j(c,{func:1,args:[W.V]})
if(c!=null)this.cp(a,b,c,!1)},
cp:function(a,b,c,d){return a.addEventListener(b,H.aU(H.j(c,{func:1,args:[W.V]}),1),!1)},
$isI:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;di|dj|dl|dm"},
aa:{"^":"eC;",$isaa:1,"%":"File"},
k9:{"^":"hR;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaa")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.aa]},
$ist:1,
$ast:function(){return[W.aa]},
$asm:function(){return[W.aa]},
$isi:1,
$asi:function(){return[W.aa]},
$isa:1,
$asa:function(){return[W.aa]},
$asq:function(){return[W.aa]},
"%":"FileList"},
ka:{"^":"I;0j:length=","%":"FileWriter"},
kd:{"^":"W;0j:length=","%":"HTMLFormElement"},
ab:{"^":"e;",$isab:1,"%":"Gamepad"},
ke:{"^":"e;0j:length=","%":"History"},
kf:{"^":"i4;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isC")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.C]},
$ist:1,
$ast:function(){return[W.C]},
$asm:function(){return[W.C]},
$isi:1,
$asi:function(){return[W.C]},
$isa:1,
$asa:function(){return[W.C]},
$asq:function(){return[W.C]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
f7:{"^":"eU;","%":"HTMLDocument"},
kg:{"^":"W;0n:height=,0m:width=","%":"HTMLIFrameElement"},
kh:{"^":"e;0n:height=,0m:width=","%":"ImageBitmap"},
ki:{"^":"e;0n:height=,0m:width=","%":"ImageData"},
kj:{"^":"W;0n:height=,0m:width=","%":"HTMLImageElement"},
kl:{"^":"W;0n:height=,0m:width=","%":"HTMLInputElement"},
aH:{"^":"d4;",$isaH:1,"%":"KeyboardEvent"},
kr:{"^":"e;",
k:function(a){return String(a)},
"%":"Location"},
fq:{"^":"W;","%":"HTMLAudioElement;HTMLMediaElement"},
ku:{"^":"e;0j:length=","%":"MediaList"},
kv:{"^":"ia;",
h:function(a,b){return P.T(a.get(H.y(b)))},
B:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.T(y.value[1]))}},
gJ:function(a){var z=H.p([],[P.f])
this.B(a,new W.fs(z))
return z},
gj:function(a){return a.size},
$asQ:function(){return[P.f,null]},
$isJ:1,
$asJ:function(){return[P.f,null]},
"%":"MIDIInputMap"},
fs:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
kw:{"^":"ib;",
h:function(a,b){return P.T(a.get(H.y(b)))},
B:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.T(y.value[1]))}},
gJ:function(a){var z=H.p([],[P.f])
this.B(a,new W.ft(z))
return z},
gj:function(a){return a.size},
$asQ:function(){return[P.f,null]},
$isJ:1,
$asJ:function(){return[P.f,null]},
"%":"MIDIOutputMap"},
ft:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
af:{"^":"e;",$isaf:1,"%":"MimeType"},
kx:{"^":"id;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaf")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.af]},
$ist:1,
$ast:function(){return[W.af]},
$asm:function(){return[W.af]},
$isi:1,
$asi:function(){return[W.af]},
$isa:1,
$asa:function(){return[W.af]},
$asq:function(){return[W.af]},
"%":"MimeTypeArray"},
N:{"^":"d4;",
gbA:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.aK(a.offsetX,a.offsetY,[P.D])
else{z=a.target
if(!J.B(W.dn(z)).$isb5)throw H.c(P.w("offsetX is only supported on elements"))
y=H.h(W.dn(z),"$isb5")
z=a.clientX
x=a.clientY
w=[P.D]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.x(new P.aK(u,v,w),"$isaK",w,"$asaK")
if(typeof z!=="number")return z.aG()
if(typeof x!=="number")return x.aG()
return new P.aK(C.q.bM(z-u),C.q.bM(x-v),w)}},
$isN:1,
"%":";DragEvent|MouseEvent"},
C:{"^":"I;",
k:function(a){var z=a.nodeValue
return z==null?this.c5(a):z},
$isC:1,
"%":"Attr|DocumentFragment|DocumentType|ShadowRoot;Node"},
kE:{"^":"ig;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isC")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.C]},
$ist:1,
$ast:function(){return[W.C]},
$asm:function(){return[W.C]},
$isi:1,
$asi:function(){return[W.C]},
$isa:1,
$asa:function(){return[W.C]},
$asq:function(){return[W.C]},
"%":"NodeList|RadioNodeList"},
kG:{"^":"W;0n:height=,0m:width=","%":"HTMLObjectElement"},
kI:{"^":"I;0n:height=,0m:width=","%":"OffscreenCanvas"},
kJ:{"^":"e;0n:height=,0m:width=","%":"PaintSize"},
ah:{"^":"e;0j:length=",$isah:1,"%":"Plugin"},
kL:{"^":"ik;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isah")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.ah]},
$ist:1,
$ast:function(){return[W.ah]},
$asm:function(){return[W.ah]},
$isi:1,
$asi:function(){return[W.ah]},
$isa:1,
$asa:function(){return[W.ah]},
$asq:function(){return[W.ah]},
"%":"PluginArray"},
kN:{"^":"N;0n:height=,0m:width=","%":"PointerEvent"},
kS:{"^":"is;",
h:function(a,b){return P.T(a.get(H.y(b)))},
B:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.T(y.value[1]))}},
gJ:function(a){var z=H.p([],[P.f])
this.B(a,new W.h_(z))
return z},
gj:function(a){return a.size},
$asQ:function(){return[P.f,null]},
$isJ:1,
$asJ:function(){return[P.f,null]},
"%":"RTCStatsReport"},
h_:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
kT:{"^":"e;0n:height=,0m:width=","%":"Screen"},
kU:{"^":"W;0j:length=","%":"HTMLSelectElement"},
ai:{"^":"I;",$isai:1,"%":"SourceBuffer"},
kW:{"^":"dj;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isai")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.ai]},
$ist:1,
$ast:function(){return[W.ai]},
$asm:function(){return[W.ai]},
$isi:1,
$asi:function(){return[W.ai]},
$isa:1,
$asa:function(){return[W.ai]},
$asq:function(){return[W.ai]},
"%":"SourceBufferList"},
aj:{"^":"e;",$isaj:1,"%":"SpeechGrammar"},
kX:{"^":"iu;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaj")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.aj]},
$ist:1,
$ast:function(){return[W.aj]},
$asm:function(){return[W.aj]},
$isi:1,
$asi:function(){return[W.aj]},
$isa:1,
$asa:function(){return[W.aj]},
$asq:function(){return[W.aj]},
"%":"SpeechGrammarList"},
ak:{"^":"e;0j:length=",$isak:1,"%":"SpeechRecognitionResult"},
l_:{"^":"ix;",
h:function(a,b){return this.b4(a,H.y(b))},
B:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.f,P.f]})
for(z=0;!0;++z){y=this.cB(a,z)
if(y==null)return
b.$2(y,this.b4(a,y))}},
gJ:function(a){var z=H.p([],[P.f])
this.B(a,new W.hd(z))
return z},
gj:function(a){return a.length},
b4:function(a,b){return a.getItem(b)},
cB:function(a,b){return a.key(b)},
$asQ:function(){return[P.f,P.f]},
$isJ:1,
$asJ:function(){return[P.f,P.f]},
"%":"Storage"},
hd:{"^":"n:15;a",
$2:function(a,b){return C.a.l(this.a,a)}},
al:{"^":"e;",$isal:1,"%":"CSSStyleSheet|StyleSheet"},
l2:{"^":"e;0m:width=","%":"TextMetrics"},
am:{"^":"I;",$isam:1,"%":"TextTrack"},
an:{"^":"I;",$isan:1,"%":"TextTrackCue|VTTCue"},
l3:{"^":"iC;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isan")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.an]},
$ist:1,
$ast:function(){return[W.an]},
$asm:function(){return[W.an]},
$isi:1,
$asi:function(){return[W.an]},
$isa:1,
$asa:function(){return[W.an]},
$asq:function(){return[W.an]},
"%":"TextTrackCueList"},
l4:{"^":"dm;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isam")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.am]},
$ist:1,
$ast:function(){return[W.am]},
$asm:function(){return[W.am]},
$isi:1,
$asi:function(){return[W.am]},
$isa:1,
$asa:function(){return[W.am]},
$asq:function(){return[W.am]},
"%":"TextTrackList"},
l5:{"^":"e;0j:length=","%":"TimeRanges"},
ao:{"^":"e;",$isao:1,"%":"Touch"},
l6:{"^":"iH;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isao")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.ao]},
$ist:1,
$ast:function(){return[W.ao]},
$asm:function(){return[W.ao]},
$isi:1,
$asi:function(){return[W.ao]},
$isa:1,
$asa:function(){return[W.ao]},
$asq:function(){return[W.ao]},
"%":"TouchList"},
l7:{"^":"e;0j:length=","%":"TrackDefaultList"},
d4:{"^":"V;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
lk:{"^":"e;",
k:function(a){return String(a)},
"%":"URL"},
ln:{"^":"fq;0n:height=,0m:width=","%":"HTMLVideoElement"},
lo:{"^":"I;0j:length=","%":"VideoTrackList"},
lp:{"^":"I;0n:height=,0m:width=","%":"VisualViewport"},
lq:{"^":"e;0m:width=","%":"VTTRegion"},
aw:{"^":"N;",
gcS:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.w("deltaY is not supported"))},
$isaw:1,
"%":"WheelEvent"},
hw:{"^":"I;",
gcK:function(a){var z,y,x
z=P.D
y=new P.a3(0,$.G,[z])
x=H.j(new W.hx(new P.iA(y,[z])),{func:1,ret:-1,args:[P.D]})
this.cu(a)
this.cD(a,W.du(x,z))
return y},
cD:function(a,b){return a.requestAnimationFrame(H.aU(H.j(b,{func:1,ret:-1,args:[P.D]}),1))},
cu:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isd6:1,
"%":"DOMWindow|Window"},
hx:{"^":"n:16;a",
$1:function(a){var z=this.a
a=H.bE(H.cf(a),{futureOr:1,type:H.o(z,0)})
z=z.a
if(z.a!==0)H.a7(P.hb("Future already completed"))
z.aa(a)}},
lw:{"^":"iM;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isa9")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.a9]},
$ist:1,
$ast:function(){return[W.a9]},
$asm:function(){return[W.a9]},
$isi:1,
$asi:function(){return[W.a9]},
$isa:1,
$asa:function(){return[W.a9]},
$asq:function(){return[W.a9]},
"%":"CSSRuleList"},
lx:{"^":"eV;",
k:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
v:function(a,b){var z
if(b==null)return!1
if(!H.aA(b,"$isO",[P.D],"$asO"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.l(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gt:function(a){return W.db(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
ly:{"^":"iO;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isab")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.ab]},
$ist:1,
$ast:function(){return[W.ab]},
$asm:function(){return[W.ab]},
$isi:1,
$asi:function(){return[W.ab]},
$isa:1,
$asa:function(){return[W.ab]},
$asq:function(){return[W.ab]},
"%":"GamepadList"},
lz:{"^":"iQ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isC")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.C]},
$ist:1,
$ast:function(){return[W.C]},
$asm:function(){return[W.C]},
$isi:1,
$asi:function(){return[W.C]},
$isa:1,
$asa:function(){return[W.C]},
$asq:function(){return[W.C]},
"%":"MozNamedAttrMap|NamedNodeMap"},
lA:{"^":"iS;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isak")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.ak]},
$ist:1,
$ast:function(){return[W.ak]},
$asm:function(){return[W.ak]},
$isi:1,
$asi:function(){return[W.ak]},
$isa:1,
$asa:function(){return[W.ak]},
$asq:function(){return[W.ak]},
"%":"SpeechRecognitionResultList"},
lB:{"^":"iU;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isal")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.al]},
$ist:1,
$ast:function(){return[W.al]},
$asm:function(){return[W.al]},
$isi:1,
$asi:function(){return[W.al]},
$isa:1,
$asa:function(){return[W.al]},
$asq:function(){return[W.al]},
"%":"StyleSheetList"},
bc:{"^":"he;a,b,c,$ti"},
bx:{"^":"bc;a,b,c,$ti"},
hN:{"^":"hf;a,b,c,d,e,$ti",p:{
ap:function(a,b,c,d,e){var z=W.du(new W.hO(c),W.V)
if(z!=null&&!0)J.e0(a,b,z,!1)
return new W.hN(0,a,b,z,!1,[e])}}},
hO:{"^":"n:17;a",
$1:function(a){return this.a.$1(H.h(a,"$isV"))}},
q:{"^":"b;$ti",
gw:function(a){return new W.f1(a,this.gj(a),-1,[H.bf(this,a,"q",0)])}},
f1:{"^":"b;a,b,c,0d,$ti",
sb2:function(a){this.d=H.v(a,H.o(this,0))},
u:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sb2(J.b1(this.a,z))
this.c=z
return!0}this.sb2(null)
this.c=y
return!1},
gC:function(a){return this.d}},
hH:{"^":"b;a",$isI:1,$isd6:1,p:{
hI:function(a){if(a===window)return H.h(a,"$isd6")
else return new W.hH(a)}}},
hG:{"^":"e+eO;"},
hJ:{"^":"e+m;"},
hK:{"^":"hJ+q;"},
hL:{"^":"e+m;"},
hM:{"^":"hL+q;"},
hQ:{"^":"e+m;"},
hR:{"^":"hQ+q;"},
i3:{"^":"e+m;"},
i4:{"^":"i3+q;"},
ia:{"^":"e+Q;"},
ib:{"^":"e+Q;"},
ic:{"^":"e+m;"},
id:{"^":"ic+q;"},
ie:{"^":"e+m;"},
ig:{"^":"ie+q;"},
ij:{"^":"e+m;"},
ik:{"^":"ij+q;"},
is:{"^":"e+Q;"},
di:{"^":"I+m;"},
dj:{"^":"di+q;"},
it:{"^":"e+m;"},
iu:{"^":"it+q;"},
ix:{"^":"e+Q;"},
iB:{"^":"e+m;"},
iC:{"^":"iB+q;"},
dl:{"^":"I+m;"},
dm:{"^":"dl+q;"},
iG:{"^":"e+m;"},
iH:{"^":"iG+q;"},
iL:{"^":"e+m;"},
iM:{"^":"iL+q;"},
iN:{"^":"e+m;"},
iO:{"^":"iN+q;"},
iP:{"^":"e+m;"},
iQ:{"^":"iP+q;"},
iR:{"^":"e+m;"},
iS:{"^":"iR+q;"},
iT:{"^":"e+m;"},
iU:{"^":"iT+q;"}}],["","",,P,{"^":"",
T:function(a){var z,y,x,w,v
if(a==null)return
z=P.a1(P.f,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.M)(y),++w){v=H.y(y[w])
z.i(0,v,a[v])}return z},
j5:function(a,b){var z={}
a.B(0,new P.j6(z))
return z},
cF:function(){var z=$.cE
if(z==null){z=J.bM(window.navigator.userAgent,"Opera",0)
$.cE=z}return z},
eT:function(){var z,y
z=$.cB
if(z!=null)return z
y=$.cC
if(y==null){y=J.bM(window.navigator.userAgent,"Firefox",0)
$.cC=y}if(y)z="-moz-"
else{y=$.cD
if(y==null){y=!P.cF()&&J.bM(window.navigator.userAgent,"Trident/",0)
$.cD=y}if(y)z="-ms-"
else z=P.cF()?"-o-":"-webkit-"}$.cB=z
return z},
j6:{"^":"n:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
fV:function(a){return a==null?C.B:P.dh(a)},
da:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
i5:{"^":"b;",
a2:function(){return Math.random()},
$isfT:1},
il:{"^":"b;a,b",
cm:function(a){var z,y,x,w,v,u,t
do{z=(a&4294967295)>>>0
a=C.b.A(a-z,4294967296)
y=(a&4294967295)>>>0
a=C.b.A(a-y,4294967296)
x=((~z&4294967295)>>>0)+(z<<21>>>0)
w=(x&4294967295)>>>0
y=(~y>>>0)+((y<<21|z>>>11)>>>0)+C.b.A(x-w,4294967296)&4294967295
x=((w^(w>>>24|y<<8))>>>0)*265
z=(x&4294967295)>>>0
y=((y^y>>>24)>>>0)*265+C.b.A(x-z,4294967296)&4294967295
x=((z^(z>>>14|y<<18))>>>0)*21
z=(x&4294967295)>>>0
y=((y^y>>>14)>>>0)*21+C.b.A(x-z,4294967296)&4294967295
z=(z^(z>>>28|y<<4))>>>0
y=(y^y>>>28)>>>0
x=(z<<31>>>0)+z
w=(x&4294967295)>>>0
v=C.b.A(x-w,4294967296)
x=this.a*1037
u=(x&4294967295)>>>0
this.a=u
t=(this.b*1037+C.b.A(x-u,4294967296)&4294967295)>>>0
this.b=t
u=(u^w)>>>0
this.a=u
v=(t^y+((y<<31|z>>>1)>>>0)+v&4294967295)>>>0
this.b=v}while(a!==0)
if(v===0&&u===0)this.a=23063
this.N()
this.N()
this.N()
this.N()},
N:function(){var z,y,x,w,v,u
z=this.a
y=4294901760*z
x=(y&4294967295)>>>0
w=55905*z
v=(w&4294967295)>>>0
u=v+x+this.b
z=(u&4294967295)>>>0
this.a=z
this.b=(C.b.A(w-v+(y-x)+(u-z),4294967296)&4294967295)>>>0},
a2:function(){this.N()
var z=this.a
this.N()
return((z&67108863)*134217728+(this.a&134217727))/9007199254740992},
$isfT:1,
p:{
dh:function(a){var z=new P.il(0,0)
z.cm(a)
return z}}},
aK:{"^":"b;P:a>,K:b>,$ti",
k:function(a){return"Point("+H.d(this.a)+", "+H.d(this.b)+")"},
v:function(a,b){if(b==null)return!1
return H.aA(b,"$isaK",[P.D],null)&&this.a==J.bm(b)&&this.b==b.gK(b)},
gt:function(a){var z,y,x
z=J.a8(this.a)
y=J.a8(this.b)
y=P.da(P.da(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
im:{"^":"b;"},
O:{"^":"im;$ti"}}],["","",,P,{"^":"",ey:{"^":"e;",$isey:1,"%":"SVGAnimatedLength"},jU:{"^":"H;0n:height=,0m:width=","%":"SVGFEBlendElement"},jV:{"^":"H;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},jW:{"^":"H;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},jX:{"^":"H;0n:height=,0m:width=","%":"SVGFECompositeElement"},jY:{"^":"H;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},jZ:{"^":"H;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},k_:{"^":"H;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},k0:{"^":"H;0n:height=,0m:width=","%":"SVGFEFloodElement"},k1:{"^":"H;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},k2:{"^":"H;0n:height=,0m:width=","%":"SVGFEImageElement"},k3:{"^":"H;0n:height=,0m:width=","%":"SVGFEMergeElement"},k4:{"^":"H;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},k5:{"^":"H;0n:height=,0m:width=","%":"SVGFEOffsetElement"},k6:{"^":"H;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},k7:{"^":"H;0n:height=,0m:width=","%":"SVGFETileElement"},k8:{"^":"H;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},kb:{"^":"H;0n:height=,0m:width=","%":"SVGFilterElement"},kc:{"^":"b6;0n:height=,0m:width=","%":"SVGForeignObjectElement"},f6:{"^":"b6;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},b6:{"^":"H;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},kk:{"^":"b6;0n:height=,0m:width=","%":"SVGImageElement"},aI:{"^":"e;",$isaI:1,"%":"SVGLength"},kq:{"^":"i7;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.I(a,b)},
i:function(a,b,c){H.h(c,"$isaI")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
I:function(a,b){return a.getItem(b)},
$asm:function(){return[P.aI]},
$isi:1,
$asi:function(){return[P.aI]},
$isa:1,
$asa:function(){return[P.aI]},
$asq:function(){return[P.aI]},
"%":"SVGLengthList"},ks:{"^":"H;0n:height=,0m:width=","%":"SVGMaskElement"},aJ:{"^":"e;",$isaJ:1,"%":"SVGNumber"},kF:{"^":"ii;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.I(a,b)},
i:function(a,b,c){H.h(c,"$isaJ")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
I:function(a,b){return a.getItem(b)},
$asm:function(){return[P.aJ]},
$isi:1,
$asi:function(){return[P.aJ]},
$isa:1,
$asa:function(){return[P.aJ]},
$asq:function(){return[P.aJ]},
"%":"SVGNumberList"},kK:{"^":"H;0n:height=,0m:width=","%":"SVGPatternElement"},kM:{"^":"e;0j:length=","%":"SVGPointList"},kO:{"^":"e;0n:height=,0m:width=","%":"SVGRect"},kP:{"^":"f6;0n:height=,0m:width=","%":"SVGRectElement"},l0:{"^":"iz;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.I(a,b)},
i:function(a,b,c){H.y(c)
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
I:function(a,b){return a.getItem(b)},
$asm:function(){return[P.f]},
$isi:1,
$asi:function(){return[P.f]},
$isa:1,
$asa:function(){return[P.f]},
$asq:function(){return[P.f]},
"%":"SVGStringList"},H:{"^":"b5;","%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},l1:{"^":"b6;0n:height=,0m:width=","%":"SVGSVGElement"},aN:{"^":"e;",$isaN:1,"%":"SVGTransform"},l8:{"^":"iJ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.I(a,b)},
i:function(a,b,c){H.h(c,"$isaN")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
I:function(a,b){return a.getItem(b)},
$asm:function(){return[P.aN]},
$isi:1,
$asi:function(){return[P.aN]},
$isa:1,
$asa:function(){return[P.aN]},
$asq:function(){return[P.aN]},
"%":"SVGTransformList"},ll:{"^":"b6;0n:height=,0m:width=","%":"SVGUseElement"},i6:{"^":"e+m;"},i7:{"^":"i6+q;"},ih:{"^":"e+m;"},ii:{"^":"ih+q;"},iy:{"^":"e+m;"},iz:{"^":"iy+q;"},iI:{"^":"e+m;"},iJ:{"^":"iI+q;"}}],["","",,P,{"^":"",a5:{"^":"b;",$isi:1,
$asi:function(){return[P.U]},
$isa:1,
$asa:function(){return[P.U]},
$ishp:1}}],["","",,P,{"^":"",jB:{"^":"e;0j:length=","%":"AudioBuffer"},jC:{"^":"hE;",
h:function(a,b){return P.T(a.get(H.y(b)))},
B:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.T(y.value[1]))}},
gJ:function(a){var z=H.p([],[P.f])
this.B(a,new P.eA(z))
return z},
gj:function(a){return a.size},
$asQ:function(){return[P.f,null]},
$isJ:1,
$asJ:function(){return[P.f,null]},
"%":"AudioParamMap"},eA:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},jD:{"^":"I;0j:length=","%":"AudioTrackList"},eB:{"^":"I;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},kH:{"^":"eB;0j:length=","%":"OfflineAudioContext"},hE:{"^":"e+Q;"}}],["","",,P,{"^":"",eD:{"^":"e;",$iseD:1,"%":"WebGLBuffer"},fS:{"^":"e;",$isfS:1,"%":"WebGLProgram"},kQ:{"^":"e;",
bc:function(a,b){return a.activeTexture(b)},
bd:function(a,b,c){return a.attachShader(b,c)},
be:function(a,b,c){return a.bindBuffer(b,c)},
bg:function(a,b,c){return a.bindTexture(b,c)},
bh:function(a,b){return a.blendEquation(b)},
bi:function(a,b,c){return a.blendFunc(b,c)},
bj:function(a,b,c,d){return a.bufferData(b,c,d)},
bk:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bl:function(a,b){return a.compileShader(b)},
bm:function(a){return a.createBuffer()},
bn:function(a){return a.createProgram()},
bp:function(a,b){return a.createShader(b)},
bq:function(a){return a.createTexture()},
bs:function(a,b){return a.depthMask(b)},
bt:function(a,b){return a.disable(b)},
bu:function(a,b,c,d){return a.drawArrays(b,c,d)},
bv:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bw:function(a,b){return a.enable(b)},
bx:function(a,b){return a.enableVertexAttribArray(b)},
a4:function(a){return P.T(a.getContextAttributes())},
at:function(a){return a.getError()},
av:function(a,b){return a.getProgramInfoLog(b)},
aw:function(a,b,c){return a.getProgramParameter(b,c)},
ay:function(a,b){return a.getShaderInfoLog(b)},
az:function(a,b,c){return a.getShaderParameter(b,c)},
aA:function(a,b,c){return a.getUniformLocation(b,c)},
bz:function(a,b){return a.linkProgram(b)},
bF:function(a,b,c){return a.pixelStorei(b,c)},
aE:function(a,b,c){return a.shaderSource(b,c)},
aF:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aq:function(a,b,c,d,e,f,g,h,i,j){this.ak(a,b,c,d,e,f,g)
return},
bI:function(a,b,c,d,e,f,g){return this.aq(a,b,c,d,e,f,g,null,null,null)},
ak:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bJ:function(a,b,c,d){return a.texParameteri(b,c,d)},
bN:function(a,b,c){return a.uniform1f(b,c)},
bO:function(a,b,c){return a.uniform1fv(b,c)},
bP:function(a,b,c){return a.uniform1i(b,c)},
bQ:function(a,b,c){return a.uniform1iv(b,c)},
bR:function(a,b,c){return a.uniform2fv(b,c)},
bS:function(a,b,c){return a.uniform3fv(b,c)},
bT:function(a,b,c){return a.uniform4fv(b,c)},
bU:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bV:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bW:function(a,b){return a.useProgram(b)},
bX:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bZ:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},kR:{"^":"e;",
cL:function(a,b){return a.beginTransformFeedback(b)},
cO:function(a,b){return a.bindVertexArray(b)},
cR:function(a){return a.createVertexArray()},
cT:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
cU:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
cV:function(a){return a.endTransformFeedback()},
d7:function(a,b,c,d){this.cH(a,b,H.x(c,"$isa",[P.f],"$asa"),d)
return},
cH:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
d9:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bc:function(a,b){return a.activeTexture(b)},
bd:function(a,b,c){return a.attachShader(b,c)},
be:function(a,b,c){return a.bindBuffer(b,c)},
bg:function(a,b,c){return a.bindTexture(b,c)},
bh:function(a,b){return a.blendEquation(b)},
bi:function(a,b,c){return a.blendFunc(b,c)},
bj:function(a,b,c,d){return a.bufferData(b,c,d)},
bk:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bl:function(a,b){return a.compileShader(b)},
bm:function(a){return a.createBuffer()},
bn:function(a){return a.createProgram()},
bp:function(a,b){return a.createShader(b)},
bq:function(a){return a.createTexture()},
bs:function(a,b){return a.depthMask(b)},
bt:function(a,b){return a.disable(b)},
bu:function(a,b,c,d){return a.drawArrays(b,c,d)},
bv:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bw:function(a,b){return a.enable(b)},
bx:function(a,b){return a.enableVertexAttribArray(b)},
a4:function(a){return P.T(a.getContextAttributes())},
at:function(a){return a.getError()},
av:function(a,b){return a.getProgramInfoLog(b)},
aw:function(a,b,c){return a.getProgramParameter(b,c)},
ay:function(a,b){return a.getShaderInfoLog(b)},
az:function(a,b,c){return a.getShaderParameter(b,c)},
aA:function(a,b,c){return a.getUniformLocation(b,c)},
bz:function(a,b){return a.linkProgram(b)},
bF:function(a,b,c){return a.pixelStorei(b,c)},
aE:function(a,b,c){return a.shaderSource(b,c)},
aF:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aq:function(a,b,c,d,e,f,g,h,i,j){this.ak(a,b,c,d,e,f,g)
return},
bI:function(a,b,c,d,e,f,g){return this.aq(a,b,c,d,e,f,g,null,null,null)},
ak:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bJ:function(a,b,c,d){return a.texParameteri(b,c,d)},
bN:function(a,b,c){return a.uniform1f(b,c)},
bO:function(a,b,c){return a.uniform1fv(b,c)},
bP:function(a,b,c){return a.uniform1i(b,c)},
bQ:function(a,b,c){return a.uniform1iv(b,c)},
bR:function(a,b,c){return a.uniform2fv(b,c)},
bS:function(a,b,c){return a.uniform3fv(b,c)},
bT:function(a,b,c){return a.uniform4fv(b,c)},
bU:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bV:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bW:function(a,b){return a.useProgram(b)},
bX:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bZ:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},h4:{"^":"e;",$ish4:1,"%":"WebGLShader"},hi:{"^":"e;",$ishi:1,"%":"WebGLTexture"},hq:{"^":"e;",$ishq:1,"%":"WebGLUniformLocation"},hv:{"^":"e;",$ishv:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",kY:{"^":"iw;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return P.T(this.cA(a,b))},
i:function(a,b,c){H.h(c,"$isJ")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
cA:function(a,b){return a.item(b)},
$asm:function(){return[[P.J,,,]]},
$isi:1,
$asi:function(){return[[P.J,,,]]},
$isa:1,
$asa:function(){return[[P.J,,,]]},
$asq:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},iv:{"^":"e+m;"},iw:{"^":"iv+q;"}}],["","",,G,{"^":"",
hy:function(a){var z,y,x,w
z=H.p(a.split("\n"),[P.f])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.k(z,y)
C.a.i(z,y,w+H.d(z[y]))}return C.a.U(z,"\n")},
d8:function(a,b,c){var z,y,x,w
z=J.l(a)
y=z.bp(a,b)
z.aE(a,y,c)
z.bl(a,y)
x=H.c8(z.az(a,y,35713))
if(x!=null&&!x){w=z.ay(a,y)
P.as("E:Compilation failed:")
P.as("E:"+G.hy(c))
P.as("E:Failure:")
P.as(C.i.E("E:",w))
throw H.c(w)}return y},
cJ:function(a,b){var z,y,x
H.x(a,"$isa",[T.u],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.h.i(b,z,J.bm(a[y]))
if(y>=a.length)return H.k(a,y)
C.h.i(b,z+1,J.bP(a[y]))
z+=2
if(y>=a.length)return H.k(a,y)
x=J.co(a[y])
if(z>=b.length)return H.k(b,z)
b[z]=x}return b},
f3:function(a,b){var z,y
H.x(a,"$isa",[T.av],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.h.i(b,z,J.bm(a[y]))
if(y>=a.length)return H.k(a,y)
C.h.i(b,z+1,J.bP(a[y]))}return b},
f4:function(a,b){var z,y,x,w,v
H.x(a,"$isa",[T.aP],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.h.i(b,z,J.bm(a[y]))
if(y>=a.length)return H.k(a,y)
C.h.i(b,z+1,J.bP(a[y]))
x=z+2
if(y>=a.length)return H.k(a,y)
w=J.co(a[y])
v=b.length
if(x>=v)return H.k(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.k(a,y)
w=J.eh(a[y])
if(z>=v)return H.k(b,z)
b[z]=w}return b},
f2:function(a,b){var z,y
H.x(a,"$isa",[[P.a,P.A]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.n.i(b,z,J.b1(a[y],0))
if(y>=a.length)return H.k(a,y)
C.n.i(b,z+1,J.b1(a[y],1))
if(y>=a.length)return H.k(a,y)
C.n.i(b,z+2,J.b1(a[y],2))
if(y>=a.length)return H.k(a,y)
C.n.i(b,z+3,J.b1(a[y],3))}return b},
i1:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.ac(z,[H.o(z,0)]),y=y.gw(y),x=b.x,w=[[P.a,P.A]],v=[P.U],u=[T.aP],t=[T.u],s=[T.av];y.u();){r=y.d
if(!x.a1(0,r)){r="Dropping unnecessary attribute: "+H.d(r)
if($.cc>0)H.bK("I: "+r)
continue}q=z.h(0,r)
switch($.Z().h(0,r).a){case"vec2":b.S(r,G.f3(H.bj(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.S(r,G.cJ(H.bj(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.S(r,G.f4(H.bj(q,"$isa",u,"$asa"),null),4)
break
case"float":b.S(r,new Float32Array(H.bz(H.bj(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.S(r,G.f2(H.bj(q,"$isa",w,"$asa"),null),4)
break}}},
bs:{"^":"b;"},
bw:{"^":"bs;",
aO:function(){return this.d},
k:function(a){var z,y,x,w
z=H.p(["{"+new H.d3(H.jd(this)).k(0)+"}["+this.a+"]"],[P.f])
for(y=this.d,x=new H.ac(y,[H.o(y,0)]),x=x.gw(x);x.u();){w=x.d
C.a.l(z,H.d(w)+": "+H.d(y.h(0,w)))}return C.a.U(z,"\n")}},
eH:{"^":"b;0a,b",
by:function(a,b,c){J.ee(this.a,b)
if(c>0)J.ev(this.a,b,c)},
bY:function(a,b,c,d,e,f,g,h){J.bL(this.a,34962,b)
J.ew(this.a,c,d,e,!1,g,h)}},
f0:{"^":"b;"},
cI:{"^":"b;a,b,c,d"},
f5:{"^":"b;a,b,c,d,e",
ca:function(){var z,y,x,w,v,u,t,s,r
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.p(y,[P.A])
for(y=this.b,w=0,v=0;!1;++v){if(v>=0)return H.k(y,v)
u=y[v]
C.a.i(x,w,u.gde(u))
C.a.i(x,w+1,u.gdf(u))
C.a.i(x,w+2,u.gdg(u))
w+=3}for(y=z.length,v=0;v<z.length;z.length===y||(0,H.M)(z),++v){t=z[v]
s=t.a
C.a.i(x,w,s)
C.a.i(x,w+1,t.b)
r=t.c
C.a.i(x,w+2,r)
C.a.i(x,w+3,s)
C.a.i(x,w+4,r)
C.a.i(x,w+5,t.d)
w+=6}return x},
cc:function(a,b){var z,y,x,w,v,u,t
z=H.p([],[T.av])
this.e.i(0,"aTexUV",z)
for(y=b-1,x=a-1,w=0;w<b;++w)for(v=w/y,u=0;u<a;++u){t=new Float32Array(2)
t[0]=v
t[1]=u/x
C.a.l(z,new T.av(t))}},
cb:function(a,b,c){var z,y,x,w,v,u,t,s,r
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
C.a.l(z,new G.cI(v+s,r+s,r+t,v+t))
t=s}w=u}},
k:function(a){var z,y,x,w,v
z=H.p(["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"],[P.f])
for(y=this.e,x=new H.ac(y,[H.o(y,0)]),x=x.gw(x);x.u();){w=x.d
v=$.Z().h(0,w).a
C.a.l(z,H.d(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.U(z," ")}},
d1:{"^":"b;a,b,c"},
d_:{"^":"b;a,b,c",p:{
d0:function(a,b,c){return new G.d_(a,b,c)}}},
cQ:{"^":"bw;d,a,b,c"},
fr:{"^":"bs;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sad:function(a){this.cx=H.x(a,"$isa",[P.A],"$asa")},
aL:function(a,b,c){var z,y
C.i.a7(a,0)
H.h(b,"$isa5")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bL(z.a,34962,y)
J.cm(z.a,34962,b,35048)},
cd:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
S:function(a,b,c){var z,y,x,w,v
z=J.cj(a,0)===105
if(z&&this.z===0)this.z=C.b.c7(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.bN(x.a))
this.aL(a,b,c)
w=$.Z().h(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.h(0,a)
J.bk(x.a,this.e)
x.by(0,v,z?1:0)
x.bY(0,y.h(0,a),v,w.aN(),5126,!1,0,0)},
aK:function(a){var z,y,x,w
z=this.r
y=this.d
z.i(0,"aPosition",J.bN(y.a))
this.ch=a
this.aL("aPosition",a,3)
x=$.Z().h(0,"aPosition")
if(x==null)throw H.c("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.bk(y.a,this.e)
y.by(0,w,0)
y.bY(0,z.h(0,"aPosition"),w,x.aN(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.p(["Faces:"+(z==null?0:z.length)],[P.f])
for(z=this.cy,x=new H.ac(z,[H.o(z,0)]),x=x.gw(x);x.u();){w=x.d
C.a.l(y,H.d(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.U(y,"  ")},
p:{
cR:function(a,b,c,d){var z=P.f
return new G.fr(b,J.e8(b.a),c,P.a1(z,P.b),d,0,-1,P.a1(z,P.a5),"meshdata:"+a,!1,!0)}}},
fH:{"^":"bw;",
c8:function(a,b){var z
if(typeof a!=="number")return a.dc()
if(typeof b!=="number")return H.bg(b)
z=a/b
if(this.z===z)return
this.z=z
this.aS()},
aS:function(){var z,y,x,w,v,u
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
aO:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
z=this.x
y=this.d
y.i(0,"uEyePosition",z.au())
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
y.i(0,"uPerspectiveViewMatrix",z)
return y}},
jS:{"^":"b;"},
fZ:{"^":"bs;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cg:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.M)(z),++u){t=z[u]
x.i(0,t,J.cp(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.M)(z),++u){t=z[u]
x.i(0,t,J.cp(w.a,v,t))}},
ck:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.p([],[P.f])
x=H.p([],[P.f])
for(y=new H.ac(y,[H.o(y,0)]),y=y.gw(y);y.u();){w=y.d
if(!z.a1(0,w))C.a.l(x,w)}for(z=this.x,z=P.dc(z,z.r,H.o(z,0)),y=this.Q;z.u();){w=z.d
if(!y.F(0,w))C.a.l(x,w)}return x},
cl:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.x(b,"$isJ",[P.f,P.b],"$asJ")
z=Date.now()
for(y=new H.ac(b,[H.o(b,0)]),y=y.gw(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.u();){s=y.d
switch(J.cj(s,0)){case 117:if(w.a1(0,s)){r=b.h(0,s)
if(v.a1(0,s))H.bK("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.i(0,s,a)
q=$.Z().h(0,s)
if(q==null)H.a7("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.K(r)
J.bQ(x.a,p,r)}else if(!!J.B(r).$isfa)J.et(x.a,p,r)
break
case"float":if(q.c===0){H.dy(r)
J.er(x.a,p,r)}else if(!!J.B(r).$isa5)J.es(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.a6(r,"$isae").a
J.cv(x.a,p,!1,s)}else if(!!J.B(r).$isa5)J.cv(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=C.E.gdd(H.a6(r,"$iskt"))
J.cu(x.a,p,!1,s)}else if(!!J.B(r).$isa5)J.cu(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.ct(o,p,H.a6(r,"$isaP").a)
else J.ct(o,p,H.h(r,"$isa5"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cs(o,p,H.a6(r,"$isu").a)
else J.cs(o,p,H.h(r,"$isa5"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cr(o,p,H.a6(r,"$isav").a)
else J.cr(o,p,H.h(r,"$isa5"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.bg(s)
J.ck(x.a,33984+s)
s=H.a6(r,"$isc2").b
J.b2(x.a,3553,s)
s=this.ch
J.bQ(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.E()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.bg(s)
J.ck(x.a,33984+s)
s=H.a6(r,"$isc2").b
J.b2(x.a,34067,s)
s=this.ch
J.bQ(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.E()
this.ch=s+1
break
default:H.bK("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":s=J.aB(r,!0)
o=x.a
if(s)J.bl(o,2929)
else J.bO(o,2929)
break
case"cStencilFunc":H.a6(r,"$isd1")
s=r.a
o=x.a
if(s===1281)J.bO(o,2960)
else{J.bl(o,2960)
o=r.b
n=r.c
J.eo(x.a,s,o,n)}break
case"cDepthWrite":H.c8(r)
J.e9(x.a,r)
break
case"cBlendEquation":H.a6(r,"$isd_")
s=r.a
o=x.a
if(s===1281)J.bO(o,3042)
else{J.bl(o,3042)
o=r.b
n=r.c
J.e3(x.a,o,n)
J.e2(x.a,s)}break}++t
break}}m=P.eW(0,0,0,Date.now()-new P.bp(z,!1).a,0,0)
""+t
m.k(0)},
c9:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.x(b,"$isa",[G.bw],"$asa")
Date.now()
z=this.d
J.eu(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b5()}for(x=0;x<2;++x){w=b[x]
this.cl(w.a,w.aO())}y=this.Q
y.T(0)
for(v=a.cy,v=new H.ac(v,[H.o(v,0)]),v=v.gw(v);v.u();)y.l(0,v.d)
u=this.ck()
if(u.length!==0)P.as("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.d(u)))
J.bk(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.cd()
s=a.Q
r=a.z
if(t)J.e1(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.ed(q,y,v,s,0,r)
else J.ec(q,y,v,s,0)}else{s=z.a
if(r>1)J.eb(s,y,0,v,r)
else J.ea(s,y,0,v)}if(t)J.ef(z.a)},
aM:function(a,b){return this.c9(a,b,null)},
p:{
cW:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.f
y=P.ad(null,null,null,z)
x=c.b
w=d.b
v=H.x(c.f,"$isa",[z],"$asa")
u=J.e6(b.a)
t=G.d8(b.a,35633,x)
J.cl(b.a,u,t)
s=G.d8(b.a,35632,w)
J.cl(b.a,u,s)
if(v.length>0)J.eq(b.a,u,v,35980)
J.em(b.a,u)
if(!H.c8(J.el(b.a,u,35714)))H.a7(J.ek(b.a,u))
z=new G.fZ(b,c,d,u,P.fm(c.c,z),P.a1(z,P.b),P.a1(z,z),y,a,!1,!0)
z.cg(a,b,c,d)
return z}}},
z:{"^":"b;a,b,c",
aN:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
h5:{"^":"b;a,0b,c,d,e,f,r,x",
aI:function(a){var z,y,x,w
H.x(a,"$isa",[P.f],"$asa")
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
C.a.l(z,w)
y.i(0,w,this.r);++this.r}C.a.a5(z)},
a6:function(a){var z,y,x
H.x(a,"$isa",[P.f],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.M)(a),++x)C.a.l(y,a[x])
C.a.a5(y)},
aJ:function(a){var z,y
H.x(a,"$isa",[P.f],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.l(z,a[y])
C.a.a5(z)},
cj:function(a,b){this.b=this.aT(!0,H.x(a,"$isa",[P.f],"$asa"),b)},
aQ:function(a){return this.cj(a,null)},
ci:function(a,b){this.b=this.aT(!1,H.x(a,"$isa",[P.f],"$asa"),b)},
aP:function(a){return this.ci(a,null)},
aT:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.f]
H.x(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.p(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.M)(y),++u){t=y[u]
s=$.Z().h(0,t)
C.a.l(w,"layout (location="+H.d(v.h(0,t))+") in "+s.a+" "+H.d(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.M)(z),++u){q=z[u]
s=$.Z().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.d(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.M)(z),++u){q=z[u]
s=$.Z().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.d(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.M)(z),++u){q=z[u]
s=$.Z().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.d(q)+p+";")}C.a.l(w,"")
if(a)C.a.l(w,"void main(void) {")
C.a.cI(w,b)
if(a)C.a.l(w,"}")
return C.a.U(w,"\n")},
p:{
bu:function(a){var z,y
z=P.f
y=[z]
return new G.h5(a,H.p([],y),H.p([],y),H.p([],y),H.p([],y),0,P.a1(z,P.A))}}},
h9:{"^":"bs;",
au:function(){var z,y,x
z=this.e
y=this.d.a
x=z.a
x[0]=y[12]
x[1]=y[13]
x[2]=y[14]
return z},
d8:function(a,b){var z,y
z=this.d.a
y=a.a
z[12]=z[12]+y[0]*b
z[13]=z[13]+y[1]*b
z[14]=z[14]+y[2]*b},
ar:function(a){return this.d8(a,1)}},
hj:{"^":"b;a,b,c,d,e,f,r"},
c2:{"^":"b;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
f8:{"^":"c2;f,a,b,c,d,e"}}],["","",,R,{"^":"",
hu:function(a,b,c){var z,y,x,w,v,u
z="stars_"+b
y=b*3
x=new Float32Array(y)
for(w=x.length,v=0;v<y;++v){u=$.dW().a2()
if(v>=w)return H.k(x,v)
x[v]=(u-0.5)*c}y=G.cR(z,a.d,0,a.e.x)
y.aK(x)
return y},
fI:{"^":"fH;fy,go,x,y,z,Q,ch,cx,cy,db,d,a,b,c",
d3:[function(a){var z,y,x
z=this.fy
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.as("size change "+H.d(y)+" "+H.d(x))
this.c8(y,x)
J.ex(this.go.a,0,0,y,x)},"$1","gd2",4,0,18]}}],["","",,V,{}],["","",,B,{"^":"",
hk:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=B.fF(new B.hl(e,d,f,c),0,6.283185307179586,g,0.001,!0)
y=z.length
if(0>=y)return H.k(z,0)
C.a.l(z,z[0])
if(1>=z.length)return H.k(z,1)
C.a.l(z,z[1])
x=g+1
w=B.hm(z,h,i)
for(y=w.length,v=0;v<w.length;w.length===y||(0,H.M)(w),++v){u=w[v]
if(0>=u.length)return H.k(u,0)
C.a.l(u,u[0])
if(1>=u.length)return H.k(u,1)
C.a.l(u,u[1])}t=h+1
y=H.p([],[G.f0])
s=H.p([],[G.cI])
r=[T.u]
q=H.p([],r)
p=new G.f5(!1,y,s,q,P.a1(P.f,[P.a,,]))
for(y=w.length,v=0;v<w.length;w.length===y||(0,H.M)(w),++v){o=w[v]
for(n=0;n<o.length;n+=2){s=H.h(o[n],"$isu")
s.toString
m=new T.u(new Float32Array(3))
m.D(s)
C.a.l(q,m)}}p.cb(t,x,!1)
p.cc(t,x)
l=$.Z().h(0,"aNormal")
switch(l.a){case"vec2":p.e.i(0,"aNormal",H.p([],[T.av]))
break
case"vec3":p.e.i(0,"aNormal",H.p([],r))
break
case"vec4":p.e.i(0,"aNormal",H.p([],[T.aP]))
break
case"float":p.e.i(0,"aNormal",H.p([],[P.U]))
break
case"uvec4":p.e.i(0,"aNormal",H.p([],[[P.a,P.A]]))
break}for(y=w.length,s=p.e,v=0;v<w.length;w.length===y||(0,H.M)(w),++v){o=w[v]
for(n=0;q=o.length,n<q;n+=2){m=n+1
if(m>=q)return H.k(o,m)
m=H.h(o[m],"$isu")
k=H.x(s.h(0,"aNormal"),"$isa",r,"$asa")
m.toString
q=new T.u(new Float32Array(3))
q.D(m);(k&&C.a).l(k,q)}}return p},
hm:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=[T.u]
H.x(a,"$isa",z,"$asa")
y=H.p([],[[P.a,T.u]])
x=new Float32Array(3)
w=new T.u(x)
v=new Float32Array(3)
u=new T.u(v)
t=new Float32Array(3)
s=new T.u(t)
for(r=0;q=a.length,r<q;r+=2){p=a[r]
o=r+1
if(o>=q)return H.k(a,o)
n=a[o]
m=H.p([],z)
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
t[2]=k*j}u.O(0)
s.O(0)
for(i=0;i<b;++i){h=i/b*2*3.141592653589793
g=c*Math.cos(h)
f=c*Math.sin(h)
w.D(p)
w.a0(u,g)
w.a0(s,f)
q=new T.u(new Float32Array(3))
q.D(w)
C.a.l(m,q)
x[2]=0
x[1]=0
x[0]=0
w.a0(u,g)
w.a0(s,f)
w.O(0)
q=new T.u(new Float32Array(3))
q.D(w)
C.a.l(m,q)}}return y},
fF:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
H.j(a,{func:1,ret:-1,args:[P.U,T.u]})
z=H.p([],[T.u])
y=new T.u(new Float32Array(3))
x=new T.u(new Float32Array(3))
for(w=(c-b)/(d-0),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+e,x)
x.aH(0,y)
t=new T.u(new Float32Array(3))
t.D(y)
C.a.l(z,t)
t=new T.u(new Float32Array(3))
t.D(x)
C.a.l(z,t)}return z},
hl:{"^":"n:19;a,b,c,d",
$2:function(a,b){var z,y,x,w,v,u
z=this.c
y=this.a*a
x=Math.cos(y)
w=Math.sin(y)
y=this.b*a
v=Math.cos(y)
u=Math.sin(y)
y=z*(2+x)*0.5
b.sP(0,y*v)
b.sK(0,y*u)
b.sa3(0,this.d*z*0.5*w)}}}],["","",,D,{"^":"",fg:{"^":"b;a,b,c",
ce:function(a){var z,y
a=document
z=W.aH
y={func:1,ret:-1,args:[z]}
W.ap(a,"keydown",H.j(new D.fi(this),y),!1,z)
W.ap(a,"keyup",H.j(new D.fj(this),y),!1,z)},
p:{
fh:function(a){var z=P.A
z=new D.fg(P.ad(null,null,null,z),P.ad(null,null,null,z),P.ad(null,null,null,z))
z.ce(a)
return z}}},fi:{"^":"n:9;a",
$1:function(a){var z
H.h(a,"$isaH")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},fj:{"^":"n:9;a",
$1:function(a){var z
H.h(a,"$isaH")
z=this.a
z.a.bG(0,a.which)
z.c.l(0,a.which)}},fu:{"^":"b;a,b,c,d,e,f,r,x",
cf:function(a){var z,y,x
if(a==null)a=document
z=J.l(a)
y=z.gbC(a)
x=H.o(y,0)
W.ap(y.a,y.b,H.j(new D.fw(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbB(a)
y=H.o(x,0)
W.ap(x.a,x.b,H.j(new D.fx(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbD(a)
x=H.o(y,0)
W.ap(y.a,y.b,H.j(new D.fy(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbE(a)
x=H.o(z,0)
W.ap(z.a,z.b,H.j(new D.fz(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
fv:function(a){var z=P.A
z=new D.fu(P.ad(null,null,null,z),P.ad(null,null,null,z),P.ad(null,null,null,z),0,0,0,0,0)
z.cf(a)
return z}}},fw:{"^":"n:3;a",
$1:function(a){var z,y
H.h(a,"$isN")
a.preventDefault()
z=this.a
y=J.l(a)
z.r=H.K(y.gbA(a).a)
z.x=H.K(y.gbA(a).b)
z.d=a.movementX
z.e=a.movementY}},fx:{"^":"n:3;a",
$1:function(a){var z
H.h(a,"$isN")
a.preventDefault()
P.as("BUTTON "+H.d(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},fy:{"^":"n:3;a",
$1:function(a){var z
H.h(a,"$isN")
a.preventDefault()
z=this.a
z.a.bG(0,a.button)
z.c.l(0,a.button)}},fz:{"^":"n:20;a",
$1:function(a){H.h(a,"$isaw")
a.preventDefault()
this.a.f=H.K(C.a1.gcS(a))}},fE:{"^":"h9;ch,cx,cy,db,dx,dy,fr,fx,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bH:function(a){var z,y
z=C.h.cX(H.x(a,"$isi",[P.b],"$asi"),0,new A.jf(),P.A)
if(typeof z!=="number")return H.bg(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
jf:{"^":"n:21;",
$2:function(a,b){var z,y
H.K(a)
z=J.a8(b)
if(typeof a!=="number")return a.E()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",ae:{"^":"b;a",
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
k:function(a){return"[0] "+this.V(0).k(0)+"\n[1] "+this.V(1).k(0)+"\n[2] "+this.V(2).k(0)+"\n[3] "+this.V(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.k(z,b)
return z[b]},
v:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ae){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gt:function(a){return A.bH(this.a)},
V:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.k(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.k(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.k(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.k(y,x)
z[3]=y[x]
return new T.aP(z)},
R:function(){var z=this.a
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
z[15]=1}},av:{"^":"b;a",
k:function(a){var z=this.a
return"["+H.d(z[0])+","+H.d(z[1])+"]"},
v:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.av){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gt:function(a){return A.bH(this.a)},
h:function(a,b){var z=this.a
if(b>=2)return H.k(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gP:function(a){return this.a[0]},
gK:function(a){return this.a[1]}},u:{"^":"b;a",
aD:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
c1:function(){var z=this.a
z[2]=0
z[1]=0
z[0]=0},
D:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+"]"},
v:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.u){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gt:function(a){return A.bH(this.a)},
h:function(a,b){var z=this.a
if(b>=3)return H.k(z,b)
return z[b]},
gj:function(a){return Math.sqrt(this.gao())},
gao:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
O:function(a){var z,y,x
z=Math.sqrt(this.gao())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
al:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
br:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.u(new Float32Array(3))
z.aD(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
a0:function(a,b){var z,y
z=a.a
y=this.a
y[0]=y[0]+z[0]*b
y[1]=y[1]+z[1]*b
y[2]=y[2]+z[2]*b},
aH:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
aC:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
sP:function(a,b){this.a[0]=b
return b},
sK:function(a,b){this.a[1]=b
return b},
sa3:function(a,b){this.a[2]=b
return b},
gP:function(a){return this.a[0]},
gK:function(a){return this.a[1]},
ga3:function(a){return this.a[2]}},aP:{"^":"b;a",
k:function(a){var z=this.a
return H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+","+H.d(z[3])},
v:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aP){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gt:function(a){return A.bH(this.a)},
h:function(a,b){var z=this.a
if(b>=4)return H.k(z,b)
return z[b]},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gP:function(a){return this.a[0]},
gK:function(a){return this.a[1]},
ga3:function(a){return this.a[2]},
gda:function(a){return this.a[3]}}}],["","",,M,{"^":"",
fU:function(a,b){var z,y,x,w,v
for(;!0;){z=b.a2()*2-1
y=b.a2()*2-1
x=z*z+y*y
if(x>=1)continue
w=Math.sqrt(1-x)
v=a.a
v[0]=2*z*w
v[1]=2*y*w
v[2]=1-2*x
return}},
dC:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z={}
y=document
x=H.h(C.C.d1(y,"#webgl-canvas"),"$isbT")
$.cc=1
w=new G.eH(x)
v=P.f
u=P.b
t=(x&&C.t).as(x,"webgl2",P.cO(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],v,u))
w.a=t
if(t==null)H.a7(P.cH('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
s="ChronosGL Config: "+H.d(J.ei(t))
if($.cc>0)P.as("I: "+s)
J.e4(t,0,0,0,1)
J.bl(t,2929)
t=y.body
s=new Float32Array(3)
r=D.fh(null)
t=D.fv(t)
q=new T.ae(new Float32Array(16))
q.R()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
m=new D.fE(5,0,0,0,new T.u(s),-0.02,r,t,q,new T.u(p),new T.u(o),new T.u(n),new T.u(new Float32Array(3)),"camera:orbit",!1,!0)
t=new T.ae(new Float32Array(16))
t.R()
s=new T.ae(new Float32Array(16))
s.R()
l=new R.fI(x,w,m,50,1,0.1,1000,t,s,new T.ae(new Float32Array(16)),P.a1(v,u),"perspective",!1,!0)
l.aS()
l.d3(null)
t=W.V
W.ap(window,"resize",H.j(l.gd2(),{func:1,ret:-1,args:[t]}),!1,t)
k=G.cW("basic",w,$.dY(),$.dX())
t=P.a1(v,u)
t.i(0,"cDepthTest",!0)
t.i(0,"cDepthWrite",!0)
t.i(0,"cBlendEquation",$.dI())
s=$.dL()
t.i(0,"cStencilFunc",s)
r=new T.ae(new Float32Array(16))
r.R()
t.i(0,"uModelMatrix",r)
j=B.hk(!0,!0,1,2,3,1,128,16,0.4,!1)
i=G.cR("torusknot",k.d,4,k.e.x)
i.aK(G.cJ(j.d,null))
r=H.x(j.ca(),"$isa",[P.A],"$asa")
q=i.d
i.y=J.bN(q.a)
p=i.ch.length
if(p<768){i.sad(new Uint8Array(H.bz(r)))
i.Q=5121}else if(p<196608){i.sad(new Uint16Array(H.bz(r)))
i.Q=5123}else{i.sad(new Uint32Array(H.bz(r)))
i.Q=5125}J.bk(q.a,i.e)
r=i.y
p=i.cx
J.bL(q.a,34963,r)
J.cm(q.a,34963,p,35048)
G.i1(j,i)
h=G.cW("basic",w,$.e_(),$.dZ())
r=$.dH()
u=P.a1(v,u)
u.i(0,"cDepthTest",!0)
u.i(0,"cDepthWrite",!1)
u.i(0,"cBlendEquation",r)
u.i(0,"cStencilFunc",s)
g=y.createElement("canvas")
g.width=64
g.height=64
f=H.h(C.t.c0(g,"2d"),"$isbU")
e=(f&&C.p).bo(f,32,32,1,32,32,22);(e&&C.m).a_(e,0,"gray")
C.m.a_(e,1,"black")
f.fillStyle=e
C.p.cW(f,0,0,64,64)
e=C.p.bo(f,32,32,1,32,32,6);(e&&C.m).a_(e,0,"white")
C.m.a_(e,1,"gray")
f.globalAlpha=0.9
f.fillStyle=e
f.arc(32,32,4,0,6.283185307179586,!1)
f.fill()
y=J.e7(w.a)
J.b2(w.a,3553,y)
J.en(w.a,37440,1)
J.b2(w.a,3553,y)
J.ep(w.a,3553,0,6408,6408,5121,g)
J.cq(w.a,3553,10240,9729)
J.cq(w.a,3553,10241,9729)
J.ej(w.a)
J.b2(w.a,3553,null)
u.i(0,"uTexture",new G.f8(g,"Utils::Particles",y,3553,w,new G.hj(!1,!1,!1,!0,1,9729,9729)))
u.i(0,"uPointSize",1000)
y=new T.ae(new Float32Array(16))
y.R()
u.i(0,"uModelMatrix",y)
d=R.hu(h,2000,100)
c=P.dh(0)
y=new Float32Array(3)
z.a=0
z.b=0
new M.jq(z,m,2000,500,new M.eE(new T.u(y),c,m),k,i,l,new G.cQ(t,"torus-mat",!1,!0),h,d,new G.cQ(u,"stars",!1,!0)).$1(0)},
eE:{"^":"b;a,b,c",
aR:function(){var z=this.a
z.aC(0,-1)
this.c.ar(z)
z.c1()}},
jq:{"^":"n:22;a,b,c,d,e,f,r,x,y,z,Q,ch",
$1:function(b0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
H.cf(b0)
if(typeof b0!=="number")return b0.aG()
z=this.a
z.b=b0+0
y=this.b
y.cx+=0.003
x=y.fx
w=x.a
if(w.F(0,0)||w.F(0,1)){w=y.cx
v=x.d
if(typeof v!=="number")return v.aB()
y.cx=w+v*0.01
v=y.cy
w=x.e
if(typeof w!=="number")return w.aB()
y.cy=v+w*0.01}w=y.fr
v=w.a
if(v.F(0,37))y.cx+=0.03
else if(v.F(0,39))y.cx-=0.03
if(v.F(0,38))y.cy+=0.03
else if(v.F(0,40))y.cy-=0.03
if(v.F(0,33))y.ch*=0.99
else if(v.F(0,34))y.ch*=1.01
if(v.F(0,32)){y.cx=0
y.cy=0}v=x.f
if(typeof v!=="number")return v.aB()
v=y.ch-v*y.dy
if(v>0)y.ch=v
v=C.q.cP(y.cy,-1.4707963267948965,1.4707963267948965)
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
y.ar(t)
p=new T.u(new Float32Array(3))
p.aD(0,1,0)
v=y.au()
u=new Float32Array(3)
o=new T.u(u)
o.D(v)
o.aH(0,t)
o.O(0)
n=p.br(o)
n.O(0)
m=o.br(n)
m.O(0)
t=n.al(v)
r=m.al(v)
v=o.al(v)
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
d=Math.sqrt(k.gao())
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
w.c.T(0)
w.b.T(0)
x.e=0
x.d=0
x.f=0
x.c.T(0)
x.b.T(0)
a9=z.b-(z.a+this.c)
if(a9>=0){if(a9>=this.d){this.e.aR()
z.a=z.b}z=this.e
z.aR()
y=z.a
M.fU(y,z.b)
y.aC(0,(500-a9)*0.0001)
z.c.ar(y)}z=this.x
y=[G.bw]
this.f.aM(this.r,H.p([z,this.y],y))
this.z.aM(this.Q,H.p([z,this.ch],y))
C.a2.gcK(window).bK(this,-1)}}},1]]
setupProgram(dart,0,0)
J.B=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cK.prototype
return J.fe.prototype}if(typeof a=="string")return J.b9.prototype
if(a==null)return J.cL.prototype
if(typeof a=="boolean")return J.fd.prototype
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ba.prototype
return a}if(a instanceof P.b)return a
return J.bG(a)}
J.aX=function(a){if(typeof a=="string")return J.b9.prototype
if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ba.prototype
return a}if(a instanceof P.b)return a
return J.bG(a)}
J.j9=function(a){if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ba.prototype
return a}if(a instanceof P.b)return a
return J.bG(a)}
J.ja=function(a){if(typeof a=="number")return J.b8.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.aO.prototype
return a}
J.jb=function(a){if(typeof a=="number")return J.b8.prototype
if(typeof a=="string")return J.b9.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.aO.prototype
return a}
J.jc=function(a){if(typeof a=="string")return J.b9.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.aO.prototype
return a}
J.l=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ba.prototype
return a}if(a instanceof P.b)return a
return J.bG(a)}
J.bF=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.aO.prototype
return a}
J.aB=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.B(a).v(a,b)}
J.a_=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.ja(a).L(a,b)}
J.b1=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.jn(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aX(a).h(a,b)}
J.cj=function(a,b){return J.jc(a).a7(a,b)}
J.ck=function(a,b){return J.l(a).bc(a,b)}
J.e0=function(a,b,c,d){return J.l(a).cJ(a,b,c,d)}
J.cl=function(a,b,c){return J.l(a).bd(a,b,c)}
J.e1=function(a,b){return J.l(a).cL(a,b)}
J.bL=function(a,b,c){return J.l(a).be(a,b,c)}
J.b2=function(a,b,c){return J.l(a).bg(a,b,c)}
J.bk=function(a,b){return J.l(a).cO(a,b)}
J.e2=function(a,b){return J.l(a).bh(a,b)}
J.e3=function(a,b,c){return J.l(a).bi(a,b,c)}
J.cm=function(a,b,c,d){return J.l(a).bj(a,b,c,d)}
J.e4=function(a,b,c,d,e){return J.l(a).bk(a,b,c,d,e)}
J.e5=function(a,b){return J.jb(a).H(a,b)}
J.bM=function(a,b,c){return J.aX(a).cQ(a,b,c)}
J.bN=function(a){return J.l(a).bm(a)}
J.e6=function(a){return J.l(a).bn(a)}
J.e7=function(a){return J.l(a).bq(a)}
J.e8=function(a){return J.l(a).cR(a)}
J.e9=function(a,b){return J.l(a).bs(a,b)}
J.bO=function(a,b){return J.l(a).bt(a,b)}
J.ea=function(a,b,c,d){return J.l(a).bu(a,b,c,d)}
J.eb=function(a,b,c,d,e){return J.l(a).cT(a,b,c,d,e)}
J.ec=function(a,b,c,d,e){return J.l(a).bv(a,b,c,d,e)}
J.ed=function(a,b,c,d,e,f){return J.l(a).cU(a,b,c,d,e,f)}
J.bl=function(a,b){return J.l(a).bw(a,b)}
J.ee=function(a,b){return J.l(a).bx(a,b)}
J.ef=function(a){return J.l(a).cV(a)}
J.eg=function(a,b){return J.l(a).B(a,b)}
J.a8=function(a){return J.B(a).gt(a)}
J.cn=function(a){return J.j9(a).gw(a)}
J.b3=function(a){return J.aX(a).gj(a)}
J.eh=function(a){return J.bF(a).gda(a)}
J.bm=function(a){return J.bF(a).gP(a)}
J.bP=function(a){return J.bF(a).gK(a)}
J.co=function(a){return J.bF(a).ga3(a)}
J.ei=function(a){return J.l(a).a4(a)}
J.ej=function(a){return J.l(a).at(a)}
J.ek=function(a,b){return J.l(a).av(a,b)}
J.el=function(a,b,c){return J.l(a).aw(a,b,c)}
J.cp=function(a,b,c){return J.l(a).aA(a,b,c)}
J.em=function(a,b){return J.l(a).bz(a,b)}
J.en=function(a,b,c){return J.l(a).bF(a,b,c)}
J.eo=function(a,b,c,d){return J.l(a).aF(a,b,c,d)}
J.ep=function(a,b,c,d,e,f,g){return J.l(a).bI(a,b,c,d,e,f,g)}
J.cq=function(a,b,c,d){return J.l(a).bJ(a,b,c,d)}
J.bn=function(a){return J.B(a).k(a)}
J.eq=function(a,b,c,d){return J.l(a).d7(a,b,c,d)}
J.er=function(a,b,c){return J.l(a).bN(a,b,c)}
J.es=function(a,b,c){return J.l(a).bO(a,b,c)}
J.bQ=function(a,b,c){return J.l(a).bP(a,b,c)}
J.et=function(a,b,c){return J.l(a).bQ(a,b,c)}
J.cr=function(a,b,c){return J.l(a).bR(a,b,c)}
J.cs=function(a,b,c){return J.l(a).bS(a,b,c)}
J.ct=function(a,b,c){return J.l(a).bT(a,b,c)}
J.cu=function(a,b,c,d){return J.l(a).bU(a,b,c,d)}
J.cv=function(a,b,c,d){return J.l(a).bV(a,b,c,d)}
J.eu=function(a,b){return J.l(a).bW(a,b)}
J.ev=function(a,b,c){return J.l(a).d9(a,b,c)}
J.ew=function(a,b,c,d,e,f,g){return J.l(a).bX(a,b,c,d,e,f,g)}
J.ex=function(a,b,c,d,e){return J.l(a).bZ(a,b,c,d,e)}
var $=I.p
C.t=W.bT.prototype
C.m=W.eF.prototype
C.p=W.bU.prototype
C.C=W.f7.prototype
C.D=J.e.prototype
C.a=J.b7.prototype
C.b=J.cK.prototype
C.E=J.cL.prototype
C.q=J.b8.prototype
C.i=J.b9.prototype
C.L=J.ba.prototype
C.h=H.fA.prototype
C.n=H.fC.prototype
C.w=J.fJ.prototype
C.r=J.aO.prototype
C.a1=W.aw.prototype
C.a2=W.hw.prototype
C.B=new P.i5()
C.e=new P.io()
C.F=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.G=function(hooks) {
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

C.H=function(getTagFallback) {
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
C.I=function() {
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
C.J=function(hooks) {
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
C.K=function(hooks) {
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
C.M=new G.z("vec3","vertex btangents",0)
C.d=new G.z("vec3","",0)
C.N=new G.z("vec4","delta from light",0)
C.o=new G.z("","",0)
C.x=new G.z("vec3","vertex coordinates",0)
C.O=new G.z("vec3","vertex binormals",0)
C.y=new G.z("vec4","for wireframe",0)
C.P=new G.z("vec4","per vertex color",0)
C.Q=new G.z("float","for normal maps",0)
C.j=new G.z("mat4","",0)
C.S=new G.z("mat4","",4)
C.R=new G.z("mat4","",128)
C.c=new G.z("float","",0)
C.T=new G.z("float","",4)
C.U=new G.z("float","depth for shadowmaps",0)
C.f=new G.z("sampler2D","",0)
C.V=new G.z("float","for bump maps",0)
C.W=new G.z("vec2","texture uvs",0)
C.X=new G.z("float","time since program start in sec",0)
C.k=new G.z("vec2","",0)
C.Y=new G.z("samplerCube","",0)
C.l=new G.z("vec4","",0)
C.Z=new G.z("vec3","vertex normals",0)
C.a_=new G.z("sampler2DShadow","",0)
C.z=new G.z("vec3","per vertex color",0)
C.A=new G.z("mat3","",0)
C.a0=new G.z("vec3","vertex tangents",0)
$.a0=0
$.aD=null
$.cx=null
$.c4=!1
$.dA=null
$.dv=null
$.dF=null
$.bD=null
$.bI=null
$.cd=null
$.ay=null
$.aR=null
$.aS=null
$.c5=!1
$.G=C.e
$.cE=null
$.cD=null
$.cC=null
$.cB=null
$.cc=0
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
I.$lazy(y,x,w)}})(["jM","dK",function(){return H.dz("_$dart_dartClosure")},"kp","ch",function(){return H.dz("_$dart_js")},"l9","dM",function(){return H.a2(H.bv({
toString:function(){return"$receiver$"}}))},"la","dN",function(){return H.a2(H.bv({$method$:null,
toString:function(){return"$receiver$"}}))},"lb","dO",function(){return H.a2(H.bv(null))},"lc","dP",function(){return H.a2(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"lf","dS",function(){return H.a2(H.bv(void 0))},"lg","dT",function(){return H.a2(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"le","dR",function(){return H.a2(H.d2(null))},"ld","dQ",function(){return H.a2(function(){try{null.$method$}catch(z){return z.message}}())},"li","dV",function(){return H.a2(H.d2(void 0))},"lh","dU",function(){return H.a2(function(){try{(void 0).$method$}catch(z){return z.message}}())},"ls","ci",function(){return P.hz()},"lE","b0",function(){return[]},"jJ","dJ",function(){return{}},"kZ","dL",function(){return new G.d1(1281,0,4294967295)},"jF","dI",function(){return G.d0(1281,1281,1281)},"jE","dH",function(){return G.d0(32774,770,769)},"lC","Z",function(){return P.cO(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.z,"aColorAlpha",C.P,"aPosition",C.x,"aTexUV",C.W,"aNormal",C.Z,"aBinormal",C.O,"aCenter",C.y,"aPointSize",C.c,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a0,"aBitangent",C.M,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.c,"iaColor",C.d,"vColor",C.z,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.x,"vPositionFromLight",C.N,"vCenter",C.y,"vDepth",C.U,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.A,"uConvolutionMatrix",C.A,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a_,"uTexture",C.f,"uTexture2",C.f,"uTexture3",C.f,"uTexture4",C.f,"uSpecularMap",C.f,"uNormalMap",C.f,"uBumpMap",C.f,"uDepthMap",C.f,"uCubeTexture",C.Y,"uAnimationTable",C.f,"uTime",C.X,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.R,"uLightDescs",C.S,"uLightCount",C.c,"uLightTypes",C.T,"uBumpScale",C.V,"uNormalScale",C.Q],P.f,G.z)},"lm","dW",function(){return P.fV(null)},"lL","e_",function(){var z,y
z=G.bu("PointSpritesV")
y=[P.f]
z.aI(H.p(["aPosition"],y))
z.a6(H.p(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"],y))
z.aQ(H.p(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"],y))
return z},"lK","dZ",function(){var z,y
z=G.bu("PointSpritesF")
y=[P.f]
z.a6(H.p(["uTexture"],y))
z.aQ(H.p(["oFragColor = texture( uTexture,  gl_PointCoord);"],y))
return z},"lI","dY",function(){var z,y
z=G.bu("demoVertexShader")
y=[P.f]
z.aI(H.p(["aPosition"],y))
z.aJ(H.p(["vColor"],y))
z.a6(H.p(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.aP(H.p(["void main() {\n    gl_Position = uPerspectiveViewMatrix *\n                  uModelMatrix *\n                  vec4(aPosition, 1.0);\n    vColor.r = sin(aPosition.x)/2.0+0.5;\n    vColor.g = cos(aPosition.y)/2.0+0.5;\n    vColor.b = sin(aPosition.z)/2.0+0.5;\n}\n"],y))
return z},"lH","dX",function(){var z,y
z=G.bu("demoFragmentShader")
y=[P.f]
z.aJ(H.p(["vColor"],y))
z.aP(H.p(["void main() {\n    oFragColor.rgb = vColor;\n}\n    "],y))
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:P.F,args:[W.N]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.F,args:[,]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.f,args:[P.A]},{func:1,ret:P.F,args:[W.aH]},{func:1,args:[,P.f]},{func:1,args:[P.f]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[,],opt:[P.X]},{func:1,ret:[P.a3,,],args:[,]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.F,args:[P.D]},{func:1,args:[W.V]},{func:1,ret:-1,args:[W.V]},{func:1,ret:-1,args:[P.U,T.u]},{func:1,ret:P.F,args:[W.aw]},{func:1,ret:P.A,args:[P.A,P.b]},{func:1,ret:-1,args:[P.D]},{func:1,ret:P.A,args:[,,]}]
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
if(x==y)H.jw(d||a)
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
Isolate.aW=a.aW
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
if(typeof dartMainRunner==="function")dartMainRunner(M.dC,[])
else M.dC([])})})()
//# sourceMappingURL=screen_shake.dart.js.map
