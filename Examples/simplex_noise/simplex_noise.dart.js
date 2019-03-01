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
b6.$isc=b5
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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isf)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
var d=supportsDirectProtoAccess&&b2!="c"
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.ce"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.ce"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.ce(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.aY=function(){}
var dart=[["","",,H,{"^":"",kO:{"^":"c;a"}}],["","",,J,{"^":"",
cj:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bH:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.ci==null){H.jL()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(P.df("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cm()]
if(v!=null)return v
v=H.jQ(a)
if(v!=null)return v
if(typeof a=="function")return C.S
y=Object.getPrototypeOf(a)
if(y==null)return C.A
if(y===Object.prototype)return C.A
if(typeof w=="function"){Object.defineProperty(w,$.cm(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
f:{"^":"c;",
E:function(a,b){return a===b},
gu:function(a){return H.aO(a)},
k:["bH",function(a){return"Instance of '"+H.aP(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fB:{"^":"f;",
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
$isM:1},
cU:{"^":"f;",
E:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
$isI:1},
c_:{"^":"f;",
gu:function(a){return 0},
k:["bJ",function(a){return String(a)}]},
fZ:{"^":"c_;"},
aR:{"^":"c_;"},
bb:{"^":"c_;",
k:function(a){var z=a[$.e_()]
if(z==null)return this.bJ(a)
return"JavaScript function for "+H.e(J.b5(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isb7:1},
b9:{"^":"f;$ti",
n:function(a,b){H.x(b,H.q(a,0))
if(!!a.fixed$length)H.O(P.y("add"))
a.push(b)},
G:function(a,b){var z,y
H.w(b,"$isi",[H.q(a,0)],"$asi")
if(!!a.fixed$length)H.O(P.y("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.V)(b),++y)a.push(b[y])},
X:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.e(a[y]))
return z.join(b)},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
aW:function(a,b){var z,y
H.k(b,{func:1,ret:P.M,args:[H.q(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.b(P.ax(a))}return!1},
bD:function(a,b){if(!!a.immutable$list)H.O(P.y("sort"))
H.ho(a,J.jm(),H.q(a,0))},
aw:function(a){return this.bD(a,null)},
A:function(a,b){var z
for(z=0;z<a.length;++z)if(J.av(a[z],b))return!0
return!1},
k:function(a){return P.bY(a,"[","]")},
gv:function(a){return new J.eT(a,a.length,0,[H.q(a,0)])},
gu:function(a){return H.aO(a)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.b(H.at(a,b))
return a[b]},
i:function(a,b,c){H.x(c,H.q(a,0))
if(!!a.immutable$list)H.O(P.y("indexed set"))
if(b>=a.length||b<0)throw H.b(H.at(a,b))
a[b]=c},
$ist:1,
$ast:I.aY,
$isi:1,
$isa:1,
p:{
fA:function(a,b){return J.bZ(H.o(a,[b]))},
bZ:function(a){H.bg(a)
a.fixed$length=Array
return a},
kM:[function(a,b){return J.ek(H.dV(a,"$isR"),H.dV(b,"$isR"))},"$2","jm",8,0,25]}},
kN:{"^":"b9;$ti"},
eT:{"^":"c;a,b,c,0d,$ti",
saM:function(a){this.d=H.x(a,H.q(this,0))},
gw:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.V(z))
x=this.c
if(x>=y){this.saM(null)
return!1}this.saM(z[x]);++this.c
return!0},
$isaL:1},
bs:{"^":"f;",
P:function(a,b){var z
H.ck(b)
if(typeof b!=="number")throw H.b(H.aV(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.ga4(b)
if(this.ga4(a)===z)return 0
if(this.ga4(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
ga4:function(a){return a===0?1/a<0:a<0},
cG:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.b(P.y(""+a+".ceil()"))},
d4:function(a,b){var z
if(b>20)throw H.b(P.bu(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ga4(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
bL:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.aU(a,b)},
N:function(a,b){return(a|0)===a?a/b|0:this.aU(a,b)},
aU:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.b(P.y("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
aS:function(a,b){var z
if(a>0)z=this.cs(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
cs:function(a,b){return b>31?0:a>>>b},
L:function(a,b){if(typeof b!=="number")throw H.b(H.aV(b))
return a>b},
$isR:1,
$asR:function(){return[P.F]},
$isac:1,
$isF:1},
cT:{"^":"bs;",$isA:1},
cS:{"^":"bs;"},
ba:{"^":"f;",
b4:function(a,b){if(b<0)throw H.b(H.at(a,b))
if(b>=a.length)H.O(H.at(a,b))
return a.charCodeAt(b)},
V:function(a,b){if(b>=a.length)throw H.b(H.at(a,b))
return a.charCodeAt(b)},
C:function(a,b){H.u(b)
if(typeof b!=="string")throw H.b(P.cA(b,null,null))
return a+b},
bF:function(a,b,c){var z
if(c>a.length)throw H.b(P.bu(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
bE:function(a,b){return this.bF(a,b,0)},
ay:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.bv(b,null,null))
if(b>c)throw H.b(P.bv(b,null,null))
if(c>a.length)throw H.b(P.bv(c,null,null))
return a.substring(b,c)},
bG:function(a,b){return this.ay(a,b,null)},
d3:function(a){return a.toLowerCase()},
d6:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.V(z,0)===133){x=J.fC(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.b4(z,w)===133?J.fD(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
cH:function(a,b,c){if(c>a.length)throw H.b(P.bu(c,0,a.length,null,null))
return H.jY(a,b,c)},
P:function(a,b){var z
H.u(b)
if(typeof b!=="string")throw H.b(H.aV(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
k:function(a){return a},
gu:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.b(H.at(a,b))
return a[b]},
$ist:1,
$ast:I.aY,
$isR:1,
$asR:function(){return[P.d]},
$isfY:1,
$isd:1,
p:{
cV:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fC:function(a,b){var z,y
for(z=a.length;b<z;){y=C.f.V(a,b)
if(y!==32&&y!==13&&!J.cV(y))break;++b}return b},
fD:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.f.b4(a,z)
if(y!==32&&y!==13&&!J.cV(y))break}return b}}}}],["","",,H,{"^":"",
fy:function(){return new P.c4("No element")},
fz:function(){return new P.c4("Too many elements")},
ho:function(a,b,c){H.w(a,"$isa",[c],"$asa")
H.k(b,{func:1,ret:P.A,args:[c,c]})
H.bd(a,0,J.aF(a)-1,b,c)},
bd:function(a,b,c,d,e){H.w(a,"$isa",[e],"$asa")
H.k(d,{func:1,ret:P.A,args:[e,e]})
if(c-b<=32)H.hn(a,b,c,d,e)
else H.hm(a,b,c,d,e)},
hn:function(a,b,c,d,e){var z,y,x,w,v
H.w(a,"$isa",[e],"$asa")
H.k(d,{func:1,ret:P.A,args:[e,e]})
for(z=b+1,y=J.aZ(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.a3(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
hm:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.w(a,"$isa",[a2],"$asa")
H.k(a1,{func:1,ret:P.A,args:[a2,a2]})
z=C.d.N(a0-b+1,6)
y=b+z
x=a0-z
w=C.d.N(b+a0,2)
v=w-z
u=w+z
t=J.aZ(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.a3(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.a3(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.a3(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.a3(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a3(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.a3(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.a3(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.a3(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a3(a1.$2(p,o),0)){n=o
o=p
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,a0))
m=b+1
l=a0-1
if(J.av(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.Y()
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
if(typeof e!=="number")return e.Y()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.L()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.L()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.Y()
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
H.bd(a,b,m-2,a1,a2)
H.bd(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.av(a1.$2(t.h(a,m),r),0);)++m
for(;J.av(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.Y()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.bd(a,m,l,a1,a2)}else H.bd(a,m,l,a1,a2)},
cL:{"^":"i;"},
bt:{"^":"cL;$ti",
gv:function(a){return new H.cZ(this,this.gj(this),0,[H.ch(this,"bt",0)])},
ak:function(a,b){return this.bI(0,H.k(b,{func:1,ret:P.M,args:[H.ch(this,"bt",0)]}))}},
cZ:{"^":"c;a,b,c,0d,$ti",
saD:function(a){this.d=H.x(a,H.q(this,0))},
gw:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.aZ(z)
x=y.gj(z)
if(this.b!==x)throw H.b(P.ax(z))
w=this.c
if(w>=x){this.saD(null)
return!1}this.saD(y.q(z,w));++this.c
return!0},
$isaL:1},
fK:{"^":"bt;a,b,$ti",
gj:function(a){return J.aF(this.a)},
q:function(a,b){return this.b.$1(J.et(this.a,b))},
$asbt:function(a,b){return[b]},
$asi:function(a,b){return[b]}},
dg:{"^":"i;a,b,$ti",
gv:function(a){return new H.hJ(J.bl(this.a),this.b,this.$ti)}},
hJ:{"^":"aL;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gw(z)))return!0
return!1},
gw:function(a){var z=this.a
return z.gw(z)}},
bq:{"^":"c;$ti"}}],["","",,H,{"^":"",
au:function(a){var z,y
z=H.u(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
jD:function(a){return init.types[H.N(a)]},
jO:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.B(a).$isv},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.b5(a)
if(typeof z!=="string")throw H.b(H.aV(a))
return z},
aO:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
h7:function(a){var z,y
if(typeof a!=="string")H.O(H.aV(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.eK(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
aP:function(a){return H.h_(a)+H.bA(H.ad(a),0,null)},
h_:function(a){var z,y,x,w,v,u,t,s,r
z=J.B(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.L||!!z.$isaR){u=C.y(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.au(w.length>1&&C.f.V(w,0)===36?C.f.bG(w,1):w)},
ay:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
h6:function(a){var z=H.ay(a).getFullYear()+0
return z},
h4:function(a){var z=H.ay(a).getMonth()+1
return z},
h0:function(a){var z=H.ay(a).getDate()+0
return z},
h1:function(a){var z=H.ay(a).getHours()+0
return z},
h3:function(a){var z=H.ay(a).getMinutes()+0
return z},
h5:function(a){var z=H.ay(a).getSeconds()+0
return z},
h2:function(a){var z=H.ay(a).getMilliseconds()+0
return z},
bI:function(a){throw H.b(H.aV(a))},
l:function(a,b){if(a==null)J.aF(a)
throw H.b(H.at(a,b))},
at:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aw(!0,b,"index",null)
z=H.N(J.aF(a))
if(!(b<0)){if(typeof z!=="number")return H.bI(z)
y=b>=z}else y=!0
if(y)return P.C(b,a,"index",null,z)
return P.bv(b,"index",null)},
aV:function(a){return new P.aw(!0,a,null,null)},
b:function(a){var z
if(a==null)a=new P.d4()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.dY})
z.name=""}else z.toString=H.dY
return z},
dY:function(){return J.b5(this.dartException)},
O:function(a){throw H.b(a)},
V:function(a){throw H.b(P.ax(a))},
a1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.k_(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.aS(x,16)&8191)===10)switch(w){case 438:return z.$1(H.c0(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.d3(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.e0()
u=$.e1()
t=$.e2()
s=$.e3()
r=$.e6()
q=$.e7()
p=$.e5()
$.e4()
o=$.e9()
n=$.e8()
m=v.H(y)
if(m!=null)return z.$1(H.c0(H.u(y),m))
else{m=u.H(y)
if(m!=null){m.method="call"
return z.$1(H.c0(H.u(y),m))}else{m=t.H(y)
if(m==null){m=s.H(y)
if(m==null){m=r.H(y)
if(m==null){m=q.H(y)
if(m==null){m=p.H(y)
if(m==null){m=s.H(y)
if(m==null){m=o.H(y)
if(m==null){m=n.H(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.d3(H.u(y),m))}}return z.$1(new H.hG(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.d9()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aw(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.d9()
return a},
b0:function(a){var z
if(a==null)return new H.dy(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dy(a)},
jz:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
jN:function(a,b,c,d,e,f){H.h(a,"$isb7")
switch(H.N(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.cO("Unsupported number of arguments for wrapped closure"))},
aX:function(a,b){var z
H.N(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.jN)
a.$identity=z
return z},
f2:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.B(d).$isa){z.$reflectionInfo=d
x=H.hb(z).r}else x=d
w=e?Object.create(new H.hp().constructor.prototype):Object.create(new H.bT(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a4
if(typeof u!=="number")return u.C()
$.a4=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.cF(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.jD,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cD:H.bU
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.b("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cF(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
f_:function(a,b,c,d){var z=H.bU
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cF:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.f1(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.f_(y,!w,z,b)
if(y===0){w=$.a4
if(typeof w!=="number")return w.C()
$.a4=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aG
if(v==null){v=H.bn("self")
$.aG=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a4
if(typeof w!=="number")return w.C()
$.a4=w+1
t+=w
w="return function("+t+"){return this."
v=$.aG
if(v==null){v=H.bn("self")
$.aG=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
f0:function(a,b,c,d){var z,y
z=H.bU
y=H.cD
switch(b?-1:a){case 0:throw H.b(H.hh("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
f1:function(a,b){var z,y,x,w,v,u,t,s
z=$.aG
if(z==null){z=H.bn("self")
$.aG=z}y=$.cC
if(y==null){y=H.bn("receiver")
$.cC=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.f0(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.a4
if(typeof y!=="number")return y.C()
$.a4=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.a4
if(typeof y!=="number")return y.C()
$.a4=y+1
return new Function(z+y+"}")()},
ce:function(a,b,c,d,e,f,g){return H.f2(a,b,H.N(c),d,!!e,!!f,g)},
u:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.b(H.a_(a,"String"))},
dM:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.a_(a,"double"))},
ck:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.a_(a,"num"))},
bD:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.b(H.a_(a,"bool"))},
N:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.b(H.a_(a,"int"))},
cl:function(a,b){throw H.b(H.a_(a,H.au(H.u(b).substring(3))))},
jV:function(a,b){throw H.b(H.cE(a,H.au(H.u(b).substring(3))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.B(a)[b])return a
H.cl(a,b)},
a9:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.B(a)[b]
else z=!0
if(z)return a
H.jV(a,b)},
dV:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.B(a)[b])return a
H.cl(a,b)},
bg:function(a){if(a==null)return a
if(!!J.B(a).$isa)return a
throw H.b(H.a_(a,"List<dynamic>"))},
jP:function(a,b){var z
if(a==null)return a
z=J.B(a)
if(!!z.$isa)return a
if(z[b])return a
H.cl(a,b)},
cf:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.N(z)]
else return a.$S()}return},
bf:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cf(J.B(a))
if(z==null)return!1
return H.dD(z,null,b,null)},
k:function(a,b){var z,y
if(a==null)return a
if($.ca)return a
$.ca=!0
try{if(H.bf(a,b))return a
z=H.bh(b)
y=H.a_(a,z)
throw H.b(y)}finally{$.ca=!1}},
bF:function(a,b){if(a!=null&&!H.cd(a,b))H.O(H.a_(a,H.bh(b)))
return a},
dH:function(a){var z,y
z=J.B(a)
if(!!z.$isn){y=H.cf(z)
if(y!=null)return H.bh(y)
return"Closure"}return H.aP(a)},
jZ:function(a){throw H.b(new P.f9(H.u(a)))},
dQ:function(a){return init.getIsolateTag(a)},
o:function(a,b){a.$ti=b
return a},
ad:function(a){if(a==null)return
return a.$ti},
me:function(a,b,c){return H.aD(a["$as"+H.e(c)],H.ad(b))},
b_:function(a,b,c,d){var z
H.u(c)
H.N(d)
z=H.aD(a["$as"+H.e(c)],H.ad(b))
return z==null?null:z[d]},
ch:function(a,b,c){var z
H.u(b)
H.N(c)
z=H.aD(a["$as"+H.e(b)],H.ad(a))
return z==null?null:z[c]},
q:function(a,b){var z
H.N(b)
z=H.ad(a)
return z==null?null:z[b]},
bh:function(a){return H.as(a,null)},
as:function(a,b){var z,y
H.w(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.au(a[0].builtin$cls)+H.bA(a,1,b)
if(typeof a=="function")return H.au(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.N(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.l(b,y)
return H.e(b[y])}if('func' in a)return H.jl(a,b)
if('futureOr' in a)return"FutureOr<"+H.as("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jl:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
H.w(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.o([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.n(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.l(b,r)
t=C.f.C(t,b[r])
q=y[u]
if(q!=null&&q!==P.c)t+=" extends "+H.as(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.as(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.as(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.as(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.jy(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.u(z[l])
n=n+m+H.as(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bA:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.c6("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.as(u,c)}return"<"+z.k(0)+">"},
jC:function(a){var z,y,x,w
z=J.B(a)
if(!!z.$isn){y=H.cf(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ad(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aD:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aW:function(a,b,c,d){var z,y
H.u(b)
H.bg(c)
H.u(d)
if(a==null)return!1
z=H.ad(a)
y=J.B(a)
if(y[b]==null)return!1
return H.dK(H.aD(y[d],z),null,c,null)},
bi:function(a,b,c,d){H.u(b)
H.bg(c)
H.u(d)
if(a==null)return a
if(H.aW(a,b,c,d))return a
throw H.b(H.cE(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.au(b.substring(3))+H.bA(c,0,null),init.mangledGlobalNames)))},
w:function(a,b,c,d){H.u(b)
H.bg(c)
H.u(d)
if(a==null)return a
if(H.aW(a,b,c,d))return a
throw H.b(H.a_(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.au(b.substring(3))+H.bA(c,0,null),init.mangledGlobalNames)))},
dK:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.X(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.X(a[y],b,c[y],d))return!1
return!0},
mc:function(a,b,c){return a.apply(b,H.aD(J.B(b)["$as"+H.e(c)],H.ad(b)))},
dT:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="c"||a.builtin$cls==="I"||a===-1||a===-2||H.dT(z)}return!1},
cd:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="c"||b.builtin$cls==="I"||b===-1||b===-2||H.dT(b)
if(b==null||b===-1||b.builtin$cls==="c"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cd(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bf(a,b)}z=J.B(a).constructor
y=H.ad(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.X(z,null,b,null)},
x:function(a,b){if(a!=null&&!H.cd(a,b))throw H.b(H.a_(a,H.bh(b)))
return a},
X:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="c"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="c"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.X(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="I")return!0
if('func' in c)return H.dD(a,b,c,d)
if('func' in a)return c.builtin$cls==="b7"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.X("type" in a?a.type:null,b,x,d)
else if(H.X(a,b,x,d))return!0
else{if(!('$is'+"aK" in y.prototype))return!1
w=y.prototype["$as"+"aK"]
v=H.aD(w,z?a.slice(1):null)
return H.X(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.dK(H.aD(r,z),b,u,d)},
dD:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.X(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.X(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.X(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.X(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.jU(m,b,l,d)},
jU:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.X(c[w],d,a[w],b))return!1}return!0},
md:function(a,b,c){Object.defineProperty(a,H.u(b),{value:c,enumerable:false,writable:true,configurable:true})},
jQ:function(a){var z,y,x,w,v,u
z=H.u($.dR.$1(a))
y=$.bE[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bJ[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.u($.dJ.$2(a,z))
if(z!=null){y=$.bE[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bJ[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bK(x)
$.bE[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bJ[z]=x
return x}if(v==="-"){u=H.bK(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.dW(a,x)
if(v==="*")throw H.b(P.df(z))
if(init.leafTags[z]===true){u=H.bK(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.dW(a,x)},
dW:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cj(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bK:function(a){return J.cj(a,!1,null,!!a.$isv)},
jT:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bK(z)
else return J.cj(z,c,null,null)},
jL:function(){if(!0===$.ci)return
$.ci=!0
H.jM()},
jM:function(){var z,y,x,w,v,u,t,s
$.bE=Object.create(null)
$.bJ=Object.create(null)
H.jH()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.dX.$1(v)
if(u!=null){t=H.jT(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
jH:function(){var z,y,x,w,v,u,t
z=C.P()
z=H.aB(C.M,H.aB(C.R,H.aB(C.x,H.aB(C.x,H.aB(C.Q,H.aB(C.N,H.aB(C.O(C.y),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.dR=new H.jI(v)
$.dJ=new H.jJ(u)
$.dX=new H.jK(t)},
aB:function(a,b){return a(b)||b},
jY:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
ha:{"^":"c;a,b,c,d,e,f,r,0x",p:{
hb:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bZ(z)
y=z[0]
x=z[1]
return new H.ha(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
hA:{"^":"c;a,b,c,d,e,f",
H:function(a){var z,y,x
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
a6:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.o([],[P.d])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.hA(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bw:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dd:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
fW:{"^":"K;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
d3:function(a,b){return new H.fW(a,b==null?null:b.method)}}},
fE:{"^":"K;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
c0:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fE(a,y,z?null:b.receiver)}}},
hG:{"^":"K;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
k_:{"^":"n:4;a",
$1:function(a){if(!!J.B(a).$isK)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dy:{"^":"c;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isZ:1},
n:{"^":"c;",
k:function(a){return"Closure '"+H.aP(this).trim()+"'"},
gby:function(){return this},
$isb7:1,
gby:function(){return this}},
db:{"^":"n;"},
hp:{"^":"db;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.au(z)+"'"}},
bT:{"^":"db;a,b,c,d",
E:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bT))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var z,y
z=this.c
if(z==null)y=H.aO(this.a)
else y=typeof z!=="object"?J.aE(z):H.aO(z)
return(y^H.aO(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.aP(z)+"'")},
p:{
bU:function(a){return a.a},
cD:function(a){return a.c},
bn:function(a){var z,y,x,w,v
z=new H.bT("self","target","receiver","name")
y=J.bZ(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
hB:{"^":"K;a",
k:function(a){return this.a},
p:{
a_:function(a,b){return new H.hB("TypeError: "+P.bp(a)+": type '"+H.dH(a)+"' is not a subtype of type '"+b+"'")}}},
eY:{"^":"K;a",
k:function(a){return this.a},
p:{
cE:function(a,b){return new H.eY("CastError: "+P.bp(a)+": type '"+H.dH(a)+"' is not a subtype of type '"+b+"'")}}},
hg:{"^":"K;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
hh:function(a){return new H.hg(a)}}},
de:{"^":"c;a,0b,0c,0d",
ga2:function(){var z=this.b
if(z==null){z=H.bh(this.a)
this.b=z}return z},
k:function(a){return this.ga2()},
gu:function(a){var z=this.d
if(z==null){z=C.f.gu(this.ga2())
this.d=z}return z},
E:function(a,b){if(b==null)return!1
return b instanceof H.de&&this.ga2()===b.ga2()}},
cW:{"^":"d_;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gD:function(a){return new H.ah(this,[H.q(this,0)])},
a3:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.c9(z,b)}else{y=this.cU(b)
return y}},
cU:function(a){var z=this.d
if(z==null)return!1
return this.ai(this.ad(z,J.aE(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a0(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a0(w,b)
x=y==null?null:y.b
return x}else return this.cV(b)},
cV:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.ad(z,J.aE(a)&0x3ffffff)
x=this.ai(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.x(b,H.q(this,0))
H.x(c,H.q(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.ae()
this.b=z}this.aE(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ae()
this.c=y}this.aE(y,b,c)}else{x=this.d
if(x==null){x=this.ae()
this.d=x}w=J.aE(b)&0x3ffffff
v=this.ad(x,w)
if(v==null)this.ah(x,w,[this.a7(b,c)])
else{u=this.ai(v,b)
if(u>=0)v[u].b=c
else v.push(this.a7(b,c))}}},
B:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.b(P.ax(this))
z=z.c}},
aE:function(a,b,c){var z
H.x(b,H.q(this,0))
H.x(c,H.q(this,1))
z=this.a0(a,b)
if(z==null)this.ah(a,b,this.a7(b,c))
else z.b=c},
aG:function(){this.r=this.r+1&67108863},
a7:function(a,b){var z,y
z=new H.fF(H.x(a,H.q(this,0)),H.x(b,H.q(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.aG()
return z},
ai:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.av(a[y].a,b))return y
return-1},
k:function(a){return P.d0(this)},
a0:function(a,b){return a[b]},
ad:function(a,b){return a[b]},
ah:function(a,b,c){a[b]=c},
cb:function(a,b){delete a[b]},
c9:function(a,b){return this.a0(a,b)!=null},
ae:function(){var z=Object.create(null)
this.ah(z,"<non-identifier-key>",z)
this.cb(z,"<non-identifier-key>")
return z},
$iscX:1},
fF:{"^":"c;a,b,0c,0d"},
ah:{"^":"cL;a,$ti",
gj:function(a){return this.a.a},
gv:function(a){var z,y
z=this.a
y=new H.fG(z,z.r,this.$ti)
y.c=z.e
return y}},
fG:{"^":"c;a,b,0c,0d,$ti",
saF:function(a){this.d=H.x(a,H.q(this,0))},
gw:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.ax(z))
else{z=this.c
if(z==null){this.saF(null)
return!1}else{this.saF(z.a)
this.c=this.c.c
return!0}}},
$isaL:1},
jI:{"^":"n:4;a",
$1:function(a){return this.a(a)}},
jJ:{"^":"n:11;a",
$2:function(a,b){return this.a(a,b)}},
jK:{"^":"n:12;a",
$1:function(a){return this.a(H.u(a))}}}],["","",,H,{"^":"",
jy:function(a){return J.fA(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
bL:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bz:function(a){var z,y
if(!!J.B(a).$ist)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.i(z,y,a[y])
return z},
a8:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.at(b,a))},
fR:{"^":"f;",$ishC:1,"%":"DataView;ArrayBufferView;c3|ds|dt|d1|du|dv|aj"},
c3:{"^":"fR;",
gj:function(a){return a.length},
$ist:1,
$ast:I.aY,
$isv:1,
$asv:I.aY},
d1:{"^":"dt;",
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
i:function(a,b,c){H.dM(c)
H.a8(b,a,a.length)
a[b]=c},
$asbq:function(){return[P.ac]},
$asm:function(){return[P.ac]},
$isi:1,
$asi:function(){return[P.ac]},
$isa:1,
$asa:function(){return[P.ac]},
"%":"Float64Array"},
aj:{"^":"dv;",
i:function(a,b,c){H.N(c)
H.a8(b,a,a.length)
a[b]=c},
$asbq:function(){return[P.A]},
$asm:function(){return[P.A]},
$isi:1,
$asi:function(){return[P.A]},
$isa:1,
$asa:function(){return[P.A]}},
fQ:{"^":"d1;",$isaJ:1,"%":"Float32Array"},
kY:{"^":"aj;",
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"Int16Array"},
kZ:{"^":"aj;",
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
$iskL:1,
"%":"Int32Array"},
l_:{"^":"aj;",
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"Int8Array"},
l0:{"^":"aj;",
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
fS:{"^":"aj;",
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
$islM:1,
"%":"Uint32Array"},
l1:{"^":"aj;",
gj:function(a){return a.length},
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
l2:{"^":"aj;",
gj:function(a){return a.length},
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
ds:{"^":"c3+m;"},
dt:{"^":"ds+bq;"},
du:{"^":"c3+m;"},
dv:{"^":"du+bq;"}}],["","",,P,{"^":"",
hN:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jt()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aX(new P.hP(z),1)).observe(y,{childList:true})
return new P.hO(z,y,x)}else if(self.setImmediate!=null)return P.ju()
return P.jv()},
lX:[function(a){self.scheduleImmediate(H.aX(new P.hQ(H.k(a,{func:1,ret:-1})),0))},"$1","jt",4,0,3],
lY:[function(a){self.setImmediate(H.aX(new P.hR(H.k(a,{func:1,ret:-1})),0))},"$1","ju",4,0,3],
lZ:[function(a){H.k(a,{func:1,ret:-1})
P.j2(0,a)},"$1","jv",4,0,3],
jp:function(a,b){if(H.bf(a,{func:1,args:[P.c,P.Z]}))return H.k(a,{func:1,ret:null,args:[P.c,P.Z]})
if(H.bf(a,{func:1,args:[P.c]}))return H.k(a,{func:1,ret:null,args:[P.c]})
throw H.b(P.cA(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jo:function(){var z,y
for(;z=$.aA,z!=null;){$.aU=null
y=z.b
$.aA=y
if(y==null)$.aT=null
z.a.$0()}},
ma:[function(){$.cb=!0
try{P.jo()}finally{$.aU=null
$.cb=!1
if($.aA!=null)$.cn().$1(P.dL())}},"$0","dL",0,0,1],
dG:function(a){var z=new P.di(H.k(a,{func:1,ret:-1}))
if($.aA==null){$.aT=z
$.aA=z
if(!$.cb)$.cn().$1(P.dL())}else{$.aT.b=z
$.aT=z}},
js:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
z=$.aA
if(z==null){P.dG(a)
$.aU=$.aT
return}y=new P.di(a)
x=$.aU
if(x==null){y.b=z
$.aU=y
$.aA=y}else{y.b=x.b
x.b=y
$.aU=y
if(y.b==null)$.aT=y}},
jW:function(a){var z,y
z={func:1,ret:-1}
H.k(a,z)
y=$.E
if(C.e===y){P.bC(null,null,C.e,a)
return}y.toString
P.bC(null,null,y,H.k(y.aZ(a),z))},
bB:function(a,b,c,d,e){var z={}
z.a=d
P.js(new P.jq(z,e))},
dE:function(a,b,c,d,e){var z,y
H.k(d,{func:1,ret:e})
y=$.E
if(y===c)return d.$0()
$.E=c
z=y
try{y=d.$0()
return y}finally{$.E=z}},
dF:function(a,b,c,d,e,f,g){var z,y
H.k(d,{func:1,ret:f,args:[g]})
H.x(e,g)
y=$.E
if(y===c)return d.$1(e)
$.E=c
z=y
try{y=d.$1(e)
return y}finally{$.E=z}},
jr:function(a,b,c,d,e,f,g,h,i){var z,y
H.k(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
y=$.E
if(y===c)return d.$2(e,f)
$.E=c
z=y
try{y=d.$2(e,f)
return y}finally{$.E=z}},
bC:function(a,b,c,d){var z
H.k(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.aZ(d):c.cD(d,-1)
P.dG(d)},
hP:{"^":"n:5;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
hO:{"^":"n:13;a,b,c",
$1:function(a){var z,y
this.a.a=H.k(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
hQ:{"^":"n:0;a",
$0:function(){this.a.$0()}},
hR:{"^":"n:0;a",
$0:function(){this.a.$0()}},
j1:{"^":"c;a,0b,c",
c5:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aX(new P.j3(this,b),0),a)
else throw H.b(P.y("`setTimeout()` not found."))},
p:{
j2:function(a,b){var z=new P.j1(!0,0)
z.c5(a,b)
return z}}},
j3:{"^":"n:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
hU:{"^":"c;$ti"},
iX:{"^":"hU;a,$ti"},
az:{"^":"c;0a,b,c,d,e,$ti",
cW:function(a){if(this.c!==6)return!0
return this.b.b.aj(H.k(this.d,{func:1,ret:P.M,args:[P.c]}),a.a,P.M,P.c)},
cT:function(a){var z,y,x,w
z=this.e
y=P.c
x={futureOr:1,type:H.q(this,1)}
w=this.b.b
if(H.bf(z,{func:1,args:[P.c,P.Z]}))return H.bF(w.d_(z,a.a,a.b,null,y,P.Z),x)
else return H.bF(w.aj(H.k(z,{func:1,args:[P.c]}),a.a,null,y),x)}},
a7:{"^":"c;aT:a<,b,0cp:c<,$ti",
bl:function(a,b,c){var z,y,x,w
z=H.q(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.E
if(y!==C.e){y.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jp(b,y)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.a7(0,$.E,[c])
w=b==null?1:3
this.aI(new P.az(x,w,a,b,[z,c]))
return x},
bk:function(a,b){return this.bl(a,null,b)},
aI:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isaz")
this.c=a}else{if(z===2){y=H.h(this.c,"$isa7")
z=y.a
if(z<4){y.aI(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bC(null,null,z,H.k(new P.i9(this,a),{func:1,ret:-1}))}},
aR:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isaz")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isa7")
y=u.a
if(y<4){u.aR(a)
return}this.a=y
this.c=u.c}z.a=this.a1(a)
y=this.b
y.toString
P.bC(null,null,y,H.k(new P.ie(z,this),{func:1,ret:-1}))}},
ag:function(){var z=H.h(this.c,"$isaz")
this.c=null
return this.a1(z)},
a1:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
a9:function(a){var z,y,x
z=H.q(this,0)
H.bF(a,{futureOr:1,type:z})
y=this.$ti
if(H.aW(a,"$isaK",y,"$asaK"))if(H.aW(a,"$isa7",y,null))P.dn(a,this)
else P.ia(a,this)
else{x=this.ag()
H.x(a,z)
this.a=4
this.c=a
P.aS(this,x)}},
aK:function(a,b){var z
H.h(b,"$isZ")
z=this.ag()
this.a=8
this.c=new P.W(a,b)
P.aS(this,z)},
$isaK:1,
p:{
ia:function(a,b){var z,y,x
b.a=1
try{a.bl(new P.ib(b),new P.ic(b),null)}catch(x){z=H.a1(x)
y=H.b0(x)
P.jW(new P.id(b,z,y))}},
dn:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isa7")
if(z>=4){y=b.ag()
b.a=a.a
b.c=a.c
P.aS(b,y)}else{y=H.h(b.c,"$isaz")
b.a=2
b.c=a
a.aR(y)}},
aS:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isW")
y=y.b
u=v.a
t=v.b
y.toString
P.bB(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.aS(z.a,b)}y=z.a
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
if(p){H.h(r,"$isW")
y=y.b
u=r.a
t=r.b
y.toString
P.bB(null,null,y,u,t)
return}o=$.E
if(o!=q)$.E=q
else o=null
y=b.c
if(y===8)new P.ii(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.ih(x,b,r).$0()}else if((y&2)!==0)new P.ig(z,x,b).$0()
if(o!=null)$.E=o
y=x.b
if(!!J.B(y).$isaK){if(y.a>=4){n=H.h(t.c,"$isaz")
t.c=null
b=t.a1(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dn(y,t)
return}}m=b.b
n=H.h(m.c,"$isaz")
m.c=null
b=m.a1(n)
y=x.a
u=x.b
if(!y){H.x(u,H.q(m,0))
m.a=4
m.c=u}else{H.h(u,"$isW")
m.a=8
m.c=u}z.a=m
y=m}}}},
i9:{"^":"n:0;a,b",
$0:function(){P.aS(this.a,this.b)}},
ie:{"^":"n:0;a,b",
$0:function(){P.aS(this.b,this.a.a)}},
ib:{"^":"n:5;a",
$1:function(a){var z=this.a
z.a=0
z.a9(a)}},
ic:{"^":"n:14;a",
$2:function(a,b){H.h(b,"$isZ")
this.a.aK(a,b)},
$1:function(a){return this.$2(a,null)}},
id:{"^":"n:0;a,b,c",
$0:function(){this.a.aK(this.b,this.c)}},
ii:{"^":"n:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bi(H.k(w.d,{func:1}),null)}catch(v){y=H.a1(v)
x=H.b0(v)
if(this.d){w=H.h(this.a.a.c,"$isW").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isW")
else u.b=new P.W(y,x)
u.a=!0
return}if(!!J.B(z).$isaK){if(z instanceof P.a7&&z.gaT()>=4){if(z.gaT()===8){w=this.b
w.b=H.h(z.gcp(),"$isW")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.bk(new P.ij(t),null)
w.a=!1}}},
ij:{"^":"n:15;a",
$1:function(a){return this.a}},
ih:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.q(x,0)
v=H.x(this.c,w)
u=H.q(x,1)
this.a.b=x.b.b.aj(H.k(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a1(t)
y=H.b0(t)
x=this.a
x.b=new P.W(z,y)
x.a=!0}}},
ig:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isW")
w=this.c
if(w.cW(z)&&w.e!=null){v=this.b
v.b=w.cT(z)
v.a=!1}}catch(u){y=H.a1(u)
x=H.b0(u)
w=H.h(this.a.a.c,"$isW")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.W(y,x)
s.a=!0}}},
di:{"^":"c;a,0b"},
ht:{"^":"c;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.a7(0,$.E,[P.A])
z.a=0
x=H.q(this,0)
w=H.k(new P.hv(z,this),{func:1,ret:-1,args:[x]})
H.k(new P.hw(z,y),{func:1,ret:-1})
W.dm(this.a,this.b,w,!1,x)
return y}},
hv:{"^":"n;a,b",
$1:function(a){H.x(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.q(this.b,0)]}}},
hw:{"^":"n:0;a,b",
$0:function(){this.b.a9(this.a.a)}},
hu:{"^":"c;"},
W:{"^":"c;a,b",
k:function(a){return H.e(this.a)},
$isK:1},
j9:{"^":"c;",$islV:1},
jq:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.d4()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.b(z)
x=H.b(z)
x.stack=y.k(0)
throw x}},
iG:{"^":"j9;",
d0:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
try{if(C.e===$.E){a.$0()
return}P.dE(null,null,this,a,-1)}catch(x){z=H.a1(x)
y=H.b0(x)
P.bB(null,null,this,z,H.h(y,"$isZ"))}},
d1:function(a,b,c){var z,y,x
H.k(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.e===$.E){a.$1(b)
return}P.dF(null,null,this,a,b,-1,c)}catch(x){z=H.a1(x)
y=H.b0(x)
P.bB(null,null,this,z,H.h(y,"$isZ"))}},
cD:function(a,b){return new P.iI(this,H.k(a,{func:1,ret:b}),b)},
aZ:function(a){return new P.iH(this,H.k(a,{func:1,ret:-1}))},
cE:function(a,b){return new P.iJ(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
bi:function(a,b){H.k(a,{func:1,ret:b})
if($.E===C.e)return a.$0()
return P.dE(null,null,this,a,b)},
aj:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.E===C.e)return a.$1(b)
return P.dF(null,null,this,a,b,c,d)},
d_:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.E===C.e)return a.$2(b,c)
return P.jr(null,null,this,a,b,c,d,e,f)}},
iI:{"^":"n;a,b,c",
$0:function(){return this.a.bi(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
iH:{"^":"n:1;a,b",
$0:function(){return this.a.d0(this.b)}},
iJ:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.d1(this.b,H.x(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
cY:function(a,b,c){H.bg(a)
return H.w(H.jz(a,new H.cW(0,0,[b,c])),"$iscX",[b,c],"$ascX")},
ab:function(a,b){return new H.cW(0,0,[a,b])},
bc:function(a,b,c,d){return new P.ir(0,0,[d])},
fx:function(a,b,c){var z,y
if(P.cc(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.o([],[P.d])
y=$.b2()
C.a.n(y,a)
try{P.jn(a,z)}finally{if(0>=y.length)return H.l(y,-1)
y.pop()}y=P.da(b,H.jP(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
bY:function(a,b,c){var z,y,x
if(P.cc(a))return b+"..."+c
z=new P.c6(b)
y=$.b2()
C.a.n(y,a)
try{x=z
x.a=P.da(x.gM(),a,", ")}finally{if(0>=y.length)return H.l(y,-1)
y.pop()}y=z
y.a=y.gM()+c
y=z.gM()
return y.charCodeAt(0)==0?y:y},
cc:function(a){var z,y
for(z=0;y=$.b2(),z<y.length;++z)if(a===y[z])return!0
return!1},
jn:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[P.d],"$asa")
z=a.gv(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.e(z.gw(z))
C.a.n(b,w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.l(b,-1)
v=b.pop()
if(0>=b.length)return H.l(b,-1)
u=b.pop()}else{t=z.gw(z);++x
if(!z.t()){if(x<=4){C.a.n(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.l(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gw(z);++x
for(;z.t();t=s,s=r){r=z.gw(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.l(b,-1)
y-=b.pop().length+2;--x}C.a.n(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.l(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.n(b,q)
C.a.n(b,u)
C.a.n(b,v)},
c1:function(a,b){var z,y,x
z=P.bc(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.V)(a),++x)z.n(0,H.x(a[x],b))
return z},
d0:function(a){var z,y,x
z={}
if(P.cc(a))return"{...}"
y=new P.c6("")
try{C.a.n($.b2(),a)
x=y
x.a=x.gM()+"{"
z.a=!0
J.ew(a,new P.fJ(z,y))
z=y
z.a=z.gM()+"}"}finally{z=$.b2()
if(0>=z.length)return H.l(z,-1)
z.pop()}z=y.gM()
return z.charCodeAt(0)==0?z:z},
ir:{"^":"il;a,0b,0c,0d,0e,0f,r,$ti",
gv:function(a){var z=new P.dr(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
A:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.h(z[b],"$isc8")!=null}else{y=this.c8(b)
return y}},
c8:function(a){var z=this.d
if(z==null)return!1
return this.aN(this.ce(z,a),a)>=0},
n:function(a,b){var z,y
H.x(b,H.q(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.c9()
this.b=z}return this.aH(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.c9()
this.c=y}return this.aH(y,b)}else return this.c6(0,b)},
c6:function(a,b){var z,y,x
H.x(b,H.q(this,0))
z=this.d
if(z==null){z=P.c9()
this.d=z}y=this.aL(b)
x=z[y]
if(x==null)z[y]=[this.af(b)]
else{if(this.aN(x,b)>=0)return!1
x.push(this.af(b))}return!0},
aH:function(a,b){H.x(b,H.q(this,0))
if(H.h(a[b],"$isc8")!=null)return!1
a[b]=this.af(b)
return!0},
aQ:function(){this.r=this.r+1&67108863},
af:function(a){var z,y
z=new P.c8(H.x(a,H.q(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aQ()
return z},
aL:function(a){return J.aE(a)&0x3ffffff},
ce:function(a,b){return a[this.aL(b)]},
aN:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.av(a[y].a,b))return y
return-1},
p:{
c9:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
c8:{"^":"c;a,0b,0c"},
dr:{"^":"c;a,b,0c,0d,$ti",
saJ:function(a){this.d=H.x(a,H.q(this,0))},
gw:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.ax(z))
else{z=this.c
if(z==null){this.saJ(null)
return!1}else{this.saJ(H.x(z.a,H.q(this,0)))
this.c=this.c.b
return!0}}},
$isaL:1,
p:{
is:function(a,b,c){var z=new P.dr(a,b,[c])
z.c=a.e
return z}}},
il:{"^":"hi;"},
fH:{"^":"it;",$isi:1,$isa:1},
m:{"^":"c;$ti",
gv:function(a){return new H.cZ(a,this.gj(a),0,[H.b_(this,a,"m",0)])},
q:function(a,b){return this.h(a,b)},
cR:function(a,b,c,d){var z,y,x
H.x(b,d)
H.k(c,{func:1,ret:d,args:[d,H.b_(this,a,"m",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.b(P.ax(a))}return y},
k:function(a){return P.bY(a,"[","]")}},
d_:{"^":"P;"},
fJ:{"^":"n:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
P:{"^":"c;$ti",
B:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.b_(this,a,"P",0),H.b_(this,a,"P",1)]})
for(z=J.bl(this.gD(a));z.t();){y=z.gw(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.aF(this.gD(a))},
k:function(a){return P.d0(a)},
$isH:1},
hj:{"^":"c;$ti",
G:function(a,b){var z
for(z=J.bl(H.w(b,"$isi",this.$ti,"$asi"));z.t();)this.n(0,z.gw(z))},
k:function(a){return P.bY(this,"{","}")},
$isi:1,
$islk:1},
hi:{"^":"hj;"},
it:{"^":"c+m;"}}],["","",,P,{"^":"",
dN:function(a,b){var z=H.h7(a)
if(z!=null)return z
throw H.b(new P.fr("Invalid double",a,null))},
fm:function(a){if(a instanceof H.n)return a.k(0)
return"Instance of '"+H.aP(a)+"'"},
bp:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.b5(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fm(a)},
cO:function(a){return new P.i6(a)},
b1:function(a){H.bL(H.e(a))},
M:{"^":"c;"},
"+bool":0,
bo:{"^":"c;a,b",
E:function(a,b){if(b==null)return!1
return b instanceof P.bo&&this.a===b.a&&!0},
P:function(a,b){return C.d.P(this.a,H.h(b,"$isbo").a)},
gu:function(a){var z=this.a
return(z^C.d.aS(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.fa(H.h6(this))
y=P.b6(H.h4(this))
x=P.b6(H.h0(this))
w=P.b6(H.h1(this))
v=P.b6(H.h3(this))
u=P.b6(H.h5(this))
t=P.fb(H.h2(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isR:1,
$asR:function(){return[P.bo]},
p:{
fa:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fb:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
b6:function(a){if(a>=10)return""+a
return"0"+a}}},
ac:{"^":"F;"},
"+double":0,
aH:{"^":"c;a",
L:function(a,b){return C.d.L(this.a,H.h(b,"$isaH").a)},
E:function(a,b){if(b==null)return!1
return b instanceof P.aH&&this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
P:function(a,b){return C.d.P(this.a,H.h(b,"$isaH").a)},
k:function(a){var z,y,x,w,v
z=new P.fj()
y=this.a
if(y<0)return"-"+new P.aH(0-y).k(0)
x=z.$1(C.d.N(y,6e7)%60)
w=z.$1(C.d.N(y,1e6)%60)
v=new P.fi().$1(y%1e6)
return""+C.d.N(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isR:1,
$asR:function(){return[P.aH]},
p:{
fh:function(a,b,c,d,e,f){return new P.aH(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fi:{"^":"n:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fj:{"^":"n:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
K:{"^":"c;"},
d4:{"^":"K;",
k:function(a){return"Throw of null."}},
aw:{"^":"K;a,b,c,d",
gab:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaa:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gab()+y+x
if(!this.a)return w
v=this.gaa()
u=P.bp(this.b)
return w+v+": "+u},
p:{
cA:function(a,b,c){return new P.aw(!0,a,b,c)}}},
d6:{"^":"aw;e,f,a,b,c,d",
gab:function(){return"RangeError"},
gaa:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bv:function(a,b,c){return new P.d6(null,null,!0,a,b,"Value not in range")},
bu:function(a,b,c,d,e){return new P.d6(b,c,!0,a,d,"Invalid value")}}},
fw:{"^":"aw;e,j:f>,a,b,c,d",
gab:function(){return"RangeError"},
gaa:function(){var z,y
z=H.N(this.b)
if(typeof z!=="number")return z.Y()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
C:function(a,b,c,d,e){var z=H.N(e==null?J.aF(b):e)
return new P.fw(b,z,!0,a,c,"Index out of range")}}},
hH:{"^":"K;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
y:function(a){return new P.hH(a)}}},
hF:{"^":"K;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
df:function(a){return new P.hF(a)}}},
c4:{"^":"K;a",
k:function(a){return"Bad state: "+this.a},
p:{
c5:function(a){return new P.c4(a)}}},
f4:{"^":"K;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bp(z)+"."},
p:{
ax:function(a){return new P.f4(a)}}},
d9:{"^":"c;",
k:function(a){return"Stack Overflow"},
$isK:1},
f9:{"^":"K;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
i6:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
fr:{"^":"c;a,b,c",
k:function(a){var z,y,x,w
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(typeof x==="string"){w=x.length>78?C.f.ay(x,0,75)+"...":x
return y+"\n"+w}else return y}},
b7:{"^":"c;"},
A:{"^":"F;"},
"+int":0,
i:{"^":"c;$ti",
ak:["bI",function(a,b){var z=H.ch(this,"i",0)
return new H.dg(this,H.k(b,{func:1,ret:P.M,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gv(this)
for(y=0;z.t();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.O(P.bu(b,0,null,"index",null))
for(z=this.gv(this),y=0;z.t();){x=z.gw(z)
if(b===y)return x;++y}throw H.b(P.C(b,this,"index",null,y))},
k:function(a){return P.fx(this,"(",")")}},
aL:{"^":"c;$ti"},
a:{"^":"c;$ti",$isi:1},
"+List":0,
H:{"^":"c;$ti"},
I:{"^":"c;",
gu:function(a){return P.c.prototype.gu.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
F:{"^":"c;",$isR:1,
$asR:function(){return[P.F]}},
"+num":0,
c:{"^":";",
E:function(a,b){return this===b},
gu:function(a){return H.aO(this)},
k:function(a){return"Instance of '"+H.aP(this)+"'"},
toString:function(){return this.k(this)}},
Z:{"^":"c;"},
d:{"^":"c;",$isR:1,
$asR:function(){return[P.d]},
$isfY:1},
"+String":0,
c6:{"^":"c;M:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
da:function(a,b,c){var z=J.bl(b)
if(!z.t())return a
if(c.length===0){do a+=H.e(z.gw(z))
while(z.t())}else{a+=H.e(z.gw(z))
for(;z.t();)a=a+c+H.e(z.gw(z))}return a}}}}],["","",,W,{"^":"",
fk:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.p).I(z,a,b,c)
y.toString
z=W.r
z=new H.dg(new W.a0(y),H.k(new W.fl(),{func:1,ret:P.M,args:[z]}),[z])
x=z.gv(z)
if(!x.t())H.O(H.fy())
w=x.gw(x)
if(x.t())H.O(H.fz())
return H.h(w,"$isS")},
aI:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eA(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a1(x)}return z},
i2:function(a,b){return document.createElement(a)},
by:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dq:function(a,b,c,d){var z,y
z=W.by(W.by(W.by(W.by(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
jk:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.hX(a)
if(!!J.B(z).$isJ)return z
return}else return H.h(a,"$isJ")},
dI:function(a,b){var z
H.k(a,{func:1,ret:-1,args:[b]})
z=$.E
if(z===C.e)return a
return z.cE(a,b)},
G:{"^":"S;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
k0:{"^":"f;0j:length=","%":"AccessibleNodeList"},
eR:{"^":"G;",
k:function(a){return String(a)},
$iseR:1,
"%":"HTMLAnchorElement"},
k1:{"^":"G;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
cB:{"^":"G;",$iscB:1,"%":"HTMLBaseElement"},
eW:{"^":"f;","%":";Blob"},
bm:{"^":"G;",$isbm:1,"%":"HTMLBodyElement"},
bV:{"^":"G;0m:height=,0l:width=",
bz:function(a,b,c){var z=this.cf(a,b,P.jw(c,null))
return z},
cf:function(a,b,c){return a.getContext(b,c)},
$isbV:1,
"%":"HTMLCanvasElement"},
k5:{"^":"f;",
a5:function(a){return P.Y(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
k6:{"^":"r;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
f5:{"^":"bW;",$isf5:1,"%":"CSSNumericValue|CSSUnitValue"},
k7:{"^":"f8;0j:length=","%":"CSSPerspective"},
ae:{"^":"f;",$isae:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
f6:{"^":"hV;0j:length=",
ap:function(a,b){var z=this.cg(a,this.a8(a,b))
return z==null?"":z},
a8:function(a,b){var z,y
z=$.dZ()
y=z[b]
if(typeof y==="string")return y
y=this.ct(a,b)
z[b]=y
return y},
ct:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fc()+b
if(z in a)return z
return b},
cg:function(a,b){return a.getPropertyValue(b)},
gm:function(a){return a.height},
gl:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
f7:{"^":"c;",
gm:function(a){return this.ap(a,"height")},
gl:function(a){return this.ap(a,"width")}},
bW:{"^":"f;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
f8:{"^":"f;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
k9:{"^":"bW;0j:length=","%":"CSSTransformValue"},
ka:{"^":"bW;0j:length=","%":"CSSUnparsedValue"},
kc:{"^":"f;0j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
fd:{"^":"G;","%":"HTMLDivElement"},
fe:{"^":"r;",
cw:function(a,b){return a.adoptNode(b)},
ca:function(a,b){return a.createEvent(b)},
am:function(a,b){return a.getElementsByTagName(b)},
al:function(a,b){return a.getElementById(b)},
cY:function(a,b){return a.querySelector(b)},
"%":"XMLDocument;Document"},
kd:{"^":"f;",
k:function(a){return String(a)},
"%":"DOMException"},
ff:{"^":"f;",
cK:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
ke:{"^":"hZ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.w(c,"$isQ",[P.F],"$asQ")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[[P.Q,P.F]]},
$isv:1,
$asv:function(){return[[P.Q,P.F]]},
$asm:function(){return[[P.Q,P.F]]},
$isi:1,
$asi:function(){return[[P.Q,P.F]]},
$isa:1,
$asa:function(){return[[P.Q,P.F]]},
$asp:function(){return[[P.Q,P.F]]},
"%":"ClientRectList|DOMRectList"},
fg:{"^":"f;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gl(a))+" x "+H.e(this.gm(a))},
E:function(a,b){var z
if(b==null)return!1
if(!H.aW(b,"$isQ",[P.F],"$asQ"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.j(b)
z=this.gl(a)===z.gl(b)&&this.gm(a)===z.gm(b)}else z=!1
else z=!1
return z},
gu:function(a){return W.dq(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gl(a)&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF)},
gm:function(a){return a.height},
gl:function(a){return a.width},
$isQ:1,
$asQ:function(){return[P.F]},
"%":";DOMRectReadOnly"},
kf:{"^":"i0;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(c)
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[P.d]},
$isv:1,
$asv:function(){return[P.d]},
$asm:function(){return[P.d]},
$isi:1,
$asi:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asp:function(){return[P.d]},
"%":"DOMStringList"},
kg:{"^":"f;0j:length=","%":"DOMTokenList"},
S:{"^":"r;0d2:tagName=",
gcB:function(a){return new W.i1(a)},
k:function(a){return a.localName},
I:["a6",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.cN
if(z==null){z=H.o([],[W.a5])
y=new W.d2(z)
C.a.n(z,W.dp(null))
C.a.n(z,W.dz())
$.cN=y
d=y}else d=z
z=$.cM
if(z==null){z=new W.dC(d)
$.cM=z
c=z}else{z.a=d
c=z}}if($.aa==null){z=document
y=z.implementation
y=(y&&C.I).cK(y,"")
$.aa=y
$.bX=y.createRange()
y=$.aa
y.toString
y=y.createElement("base")
H.h(y,"$iscB")
y.href=z.baseURI
z=$.aa.head;(z&&C.J).F(z,y)}z=$.aa
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.h(y,"$isbm")}z=$.aa
if(!!this.$isbm)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.aa.body;(z&&C.p).F(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.A(C.U,a.tagName)){z=$.bX;(z&&C.B).bA(z,x)
z=$.bX
w=(z&&C.B).cI(z,b)}else{x.innerHTML=b
w=$.aa.createDocumentFragment()
for(z=J.j(w);y=x.firstChild,y!=null;)z.F(w,y)}z=$.aa.body
if(x==null?z!=null:x!==z)J.cw(x)
c.at(w)
C.i.cw(document,w)
return w},function(a,b,c){return this.I(a,b,c,null)},"cJ",null,null,"gde",5,5,null],
bC:function(a,b,c,d){a.textContent=null
this.F(a,this.I(a,b,c,d))},
bB:function(a,b){return this.bC(a,b,null,null)},
R:function(a,b){return a.getAttribute(b)},
cl:function(a,b){return a.removeAttribute(b)},
gbh:function(a){return new W.dl(a,"change",!1,[W.T])},
$isS:1,
"%":";Element"},
fl:{"^":"n:16;",
$1:function(a){return!!J.B(H.h(a,"$isr")).$isS}},
ki:{"^":"G;0m:height=,0l:width=","%":"HTMLEmbedElement"},
T:{"^":"f;",
gbj:function(a){return W.jk(a.target)},
ci:function(a,b,c,d){return a.initEvent(b,!0,!0)},
$isT:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
J:{"^":"f;",
cv:function(a,b,c,d){H.k(c,{func:1,args:[W.T]})
if(c!=null)this.c7(a,b,c,!1)},
c7:function(a,b,c,d){return a.addEventListener(b,H.aX(H.k(c,{func:1,args:[W.T]}),1),!1)},
cM:function(a,b){return a.dispatchEvent(b)},
$isJ:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBTransaction|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dw|dx|dA|dB"},
af:{"^":"eW;",$isaf:1,"%":"File"},
kz:{"^":"i8;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaf")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.af]},
$isv:1,
$asv:function(){return[W.af]},
$asm:function(){return[W.af]},
$isi:1,
$asi:function(){return[W.af]},
$isa:1,
$asa:function(){return[W.af]},
$asp:function(){return[W.af]},
"%":"FileList"},
kA:{"^":"J;0j:length=","%":"FileWriter"},
kD:{"^":"G;0j:length=","%":"HTMLFormElement"},
ag:{"^":"f;",$isag:1,"%":"Gamepad"},
fu:{"^":"G;","%":"HTMLHeadElement"},
kE:{"^":"f;0j:length=","%":"History"},
kF:{"^":"io;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isr")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.r]},
$isv:1,
$asv:function(){return[W.r]},
$asm:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asp:function(){return[W.r]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
fv:{"^":"fe;","%":"HTMLDocument"},
kG:{"^":"G;0m:height=,0l:width=","%":"HTMLIFrameElement"},
kH:{"^":"f;0m:height=,0l:width=","%":"ImageBitmap"},
kI:{"^":"f;0m:height=,0l:width=","%":"ImageData"},
kJ:{"^":"G;0m:height=,0l:width=","%":"HTMLImageElement"},
br:{"^":"G;0m:height=,0l:width=",$isbr:1,"%":"HTMLInputElement"},
fI:{"^":"f;",
k:function(a){return String(a)},
$isfI:1,
"%":"Location"},
fL:{"^":"G;","%":"HTMLAudioElement;HTMLMediaElement"},
kU:{"^":"f;0j:length=","%":"MediaList"},
kV:{"^":"iv;",
h:function(a,b){return P.Y(a.get(H.u(b)))},
B:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gD:function(a){var z=H.o([],[P.d])
this.B(a,new W.fN(z))
return z},
gj:function(a){return a.size},
$asP:function(){return[P.d,null]},
$isH:1,
$asH:function(){return[P.d,null]},
"%":"MIDIInputMap"},
fN:{"^":"n:2;a",
$2:function(a,b){return C.a.n(this.a,a)}},
kW:{"^":"iw;",
h:function(a,b){return P.Y(a.get(H.u(b)))},
B:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gD:function(a){var z=H.o([],[P.d])
this.B(a,new W.fO(z))
return z},
gj:function(a){return a.size},
$asP:function(){return[P.d,null]},
$isH:1,
$asH:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
fO:{"^":"n:2;a",
$2:function(a,b){return C.a.n(this.a,a)}},
ai:{"^":"f;",$isai:1,"%":"MimeType"},
kX:{"^":"iy;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isai")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ai]},
$isv:1,
$asv:function(){return[W.ai]},
$asm:function(){return[W.ai]},
$isi:1,
$asi:function(){return[W.ai]},
$isa:1,
$asa:function(){return[W.ai]},
$asp:function(){return[W.ai]},
"%":"MimeTypeArray"},
fP:{"^":"hD;","%":"WheelEvent;DragEvent|MouseEvent"},
a0:{"^":"fH;a",
gZ:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.b(P.c5("No elements"))
if(y>1)throw H.b(P.c5("More than one element"))
return z.firstChild},
G:function(a,b){var z,y,x,w,v
H.w(b,"$isi",[W.r],"$asi")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.j(y),v=0;v<x;++v)w.F(y,z.firstChild)
return},
i:function(a,b,c){var z,y
H.h(c,"$isr")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.l(y,b)
J.ee(z,c,y[b])},
gv:function(a){var z=this.a.childNodes
return new W.cQ(z,z.length,-1,[H.b_(C.W,z,"p",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.l(z,b)
return z[b]},
$asm:function(){return[W.r]},
$asi:function(){return[W.r]},
$asa:function(){return[W.r]}},
r:{"^":"J;0cX:previousSibling=",
cZ:function(a){var z=a.parentNode
if(z!=null)J.bj(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.bH(a):z},
F:function(a,b){return a.appendChild(b)},
cm:function(a,b){return a.removeChild(b)},
cn:function(a,b,c){return a.replaceChild(b,c)},
$isr:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
fT:{"^":"iA;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isr")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.r]},
$isv:1,
$asv:function(){return[W.r]},
$asm:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asp:function(){return[W.r]},
"%":"NodeList|RadioNodeList"},
l5:{"^":"G;0m:height=,0l:width=","%":"HTMLObjectElement"},
l7:{"^":"J;0m:height=,0l:width=","%":"OffscreenCanvas"},
d5:{"^":"G;",$isd5:1,"%":"HTMLOutputElement"},
l8:{"^":"f;0m:height=,0l:width=","%":"PaintSize"},
ak:{"^":"f;0j:length=",$isak:1,"%":"Plugin"},
la:{"^":"iE;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isak")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ak]},
$isv:1,
$asv:function(){return[W.ak]},
$asm:function(){return[W.ak]},
$isi:1,
$asi:function(){return[W.ak]},
$isa:1,
$asa:function(){return[W.ak]},
$asp:function(){return[W.ak]},
"%":"PluginArray"},
lc:{"^":"fP;0m:height=,0l:width=","%":"PointerEvent"},
h9:{"^":"f;",
cI:function(a,b){return a.createContextualFragment(b)},
bA:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
lh:{"^":"iK;",
h:function(a,b){return P.Y(a.get(H.u(b)))},
B:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gD:function(a){var z=H.o([],[P.d])
this.B(a,new W.hf(z))
return z},
gj:function(a){return a.size},
$asP:function(){return[P.d,null]},
$isH:1,
$asH:function(){return[P.d,null]},
"%":"RTCStatsReport"},
hf:{"^":"n:2;a",
$2:function(a,b){return C.a.n(this.a,a)}},
li:{"^":"f;0m:height=,0l:width=","%":"Screen"},
lj:{"^":"G;0j:length=","%":"HTMLSelectElement"},
al:{"^":"J;",$isal:1,"%":"SourceBuffer"},
ll:{"^":"dx;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isal")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.al]},
$isv:1,
$asv:function(){return[W.al]},
$asm:function(){return[W.al]},
$isi:1,
$asi:function(){return[W.al]},
$isa:1,
$asa:function(){return[W.al]},
$asp:function(){return[W.al]},
"%":"SourceBufferList"},
am:{"^":"f;",$isam:1,"%":"SpeechGrammar"},
lm:{"^":"iQ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isam")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.am]},
$isv:1,
$asv:function(){return[W.am]},
$asm:function(){return[W.am]},
$isi:1,
$asi:function(){return[W.am]},
$isa:1,
$asa:function(){return[W.am]},
$asp:function(){return[W.am]},
"%":"SpeechGrammarList"},
an:{"^":"f;0j:length=",$isan:1,"%":"SpeechRecognitionResult"},
lo:{"^":"iT;",
h:function(a,b){return this.aO(a,H.u(b))},
B:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.ck(a,z)
if(y==null)return
b.$2(y,this.aO(a,y))}},
gD:function(a){var z=H.o([],[P.d])
this.B(a,new W.hs(z))
return z},
gj:function(a){return a.length},
aO:function(a,b){return a.getItem(b)},
ck:function(a,b){return a.key(b)},
$asP:function(){return[P.d,P.d]},
$isH:1,
$asH:function(){return[P.d,P.d]},
"%":"Storage"},
hs:{"^":"n:17;a",
$2:function(a,b){return C.a.n(this.a,a)}},
ao:{"^":"f;",$isao:1,"%":"CSSStyleSheet|StyleSheet"},
hx:{"^":"G;",
I:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.a6(a,b,c,d)
z=W.fk("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a0(y).G(0,new W.a0(z))
return y},
"%":"HTMLTableElement"},
lr:{"^":"G;",
I:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.a6(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.I(z.createElement("table"),b,c,d)
z.toString
z=new W.a0(z)
x=z.gZ(z)
x.toString
z=new W.a0(x)
w=z.gZ(z)
y.toString
w.toString
new W.a0(y).G(0,new W.a0(w))
return y},
"%":"HTMLTableRowElement"},
ls:{"^":"G;",
I:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.a6(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.I(z.createElement("table"),b,c,d)
z.toString
z=new W.a0(z)
x=z.gZ(z)
y.toString
x.toString
new W.a0(y).G(0,new W.a0(x))
return y},
"%":"HTMLTableSectionElement"},
dc:{"^":"G;",$isdc:1,"%":"HTMLTemplateElement"},
lt:{"^":"f;0l:width=","%":"TextMetrics"},
ap:{"^":"J;",$isap:1,"%":"TextTrack"},
aq:{"^":"J;",$isaq:1,"%":"TextTrackCue|VTTCue"},
lu:{"^":"j0;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaq")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.aq]},
$isv:1,
$asv:function(){return[W.aq]},
$asm:function(){return[W.aq]},
$isi:1,
$asi:function(){return[W.aq]},
$isa:1,
$asa:function(){return[W.aq]},
$asp:function(){return[W.aq]},
"%":"TextTrackCueList"},
lv:{"^":"dB;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isap")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ap]},
$isv:1,
$asv:function(){return[W.ap]},
$asm:function(){return[W.ap]},
$isi:1,
$asi:function(){return[W.ap]},
$isa:1,
$asa:function(){return[W.ap]},
$asp:function(){return[W.ap]},
"%":"TextTrackList"},
ly:{"^":"f;0j:length=","%":"TimeRanges"},
ar:{"^":"f;",$isar:1,"%":"Touch"},
lz:{"^":"j5;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isar")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ar]},
$isv:1,
$asv:function(){return[W.ar]},
$asm:function(){return[W.ar]},
$isi:1,
$asi:function(){return[W.ar]},
$isa:1,
$asa:function(){return[W.ar]},
$asp:function(){return[W.ar]},
"%":"TouchList"},
lA:{"^":"f;0j:length=","%":"TrackDefaultList"},
hD:{"^":"T;","%":"CompositionEvent|FocusEvent|KeyboardEvent|TextEvent|TouchEvent;UIEvent"},
lO:{"^":"f;",
k:function(a){return String(a)},
"%":"URL"},
lR:{"^":"fL;0m:height=,0l:width=","%":"HTMLVideoElement"},
lS:{"^":"J;0j:length=","%":"VideoTrackList"},
lT:{"^":"J;0m:height=,0l:width=","%":"VisualViewport"},
lU:{"^":"f;0l:width=","%":"VTTRegion"},
hK:{"^":"J;",
gcA:function(a){var z,y,x
z=P.F
y=new P.a7(0,$.E,[z])
x=H.k(new W.hL(new P.iX(y,[z])),{func:1,ret:-1,args:[P.F]})
this.cd(a)
this.co(a,W.dI(x,z))
return y},
co:function(a,b){return a.requestAnimationFrame(H.aX(H.k(b,{func:1,ret:-1,args:[P.F]}),1))},
cd:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdh:1,
"%":"DOMWindow|Window"},
hL:{"^":"n:18;a",
$1:function(a){var z=this.a
a=H.bF(H.ck(a),{futureOr:1,type:H.q(z,0)})
z=z.a
if(z.a!==0)H.O(P.c5("Future already completed"))
z.a9(a)}},
dj:{"^":"r;",$isdj:1,"%":"Attr"},
m_:{"^":"jb;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isae")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ae]},
$isv:1,
$asv:function(){return[W.ae]},
$asm:function(){return[W.ae]},
$isi:1,
$asi:function(){return[W.ae]},
$isa:1,
$asa:function(){return[W.ae]},
$asp:function(){return[W.ae]},
"%":"CSSRuleList"},
m0:{"^":"fg;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
E:function(a,b){var z
if(b==null)return!1
if(!H.aW(b,"$isQ",[P.F],"$asQ"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.j(b)
z=a.width===z.gl(b)&&a.height===z.gm(b)}else z=!1
else z=!1
return z},
gu:function(a){return W.dq(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gm:function(a){return a.height},
gl:function(a){return a.width},
"%":"ClientRect|DOMRect"},
m1:{"^":"jd;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isag")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ag]},
$isv:1,
$asv:function(){return[W.ag]},
$asm:function(){return[W.ag]},
$isi:1,
$asi:function(){return[W.ag]},
$isa:1,
$asa:function(){return[W.ag]},
$asp:function(){return[W.ag]},
"%":"GamepadList"},
m6:{"^":"jf;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isr")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.r]},
$isv:1,
$asv:function(){return[W.r]},
$asm:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asp:function(){return[W.r]},
"%":"MozNamedAttrMap|NamedNodeMap"},
m7:{"^":"jh;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isan")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.an]},
$isv:1,
$asv:function(){return[W.an]},
$asm:function(){return[W.an]},
$isi:1,
$asi:function(){return[W.an]},
$isa:1,
$asa:function(){return[W.an]},
$asp:function(){return[W.an]},
"%":"SpeechRecognitionResultList"},
m8:{"^":"jj;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isao")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ao]},
$isv:1,
$asv:function(){return[W.ao]},
$asm:function(){return[W.ao]},
$isi:1,
$asi:function(){return[W.ao]},
$isa:1,
$asa:function(){return[W.ao]},
$asp:function(){return[W.ao]},
"%":"StyleSheetList"},
hS:{"^":"d_;cc:a<",
B:function(a,b){var z,y,x,w,v,u
H.k(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gD(this),y=z.length,x=this.a,w=J.j(x),v=0;v<z.length;z.length===y||(0,H.V)(z),++v){u=z[v]
b.$2(u,w.R(x,u))}},
gD:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.o([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.l(z,w)
v=H.h(z[w],"$isdj")
if(v.namespaceURI==null)C.a.n(y,v.name)}return y},
$asP:function(){return[P.d,P.d]},
$asH:function(){return[P.d,P.d]}},
i1:{"^":"hS;a",
h:function(a,b){return J.bR(this.a,H.u(b))},
gj:function(a){return this.gD(this).length}},
i3:{"^":"ht;$ti"},
dl:{"^":"i3;a,b,c,$ti"},
i4:{"^":"hu;a,b,c,d,e,$ti",p:{
dm:function(a,b,c,d,e){var z=W.dI(new W.i5(c),W.T)
if(z!=null&&!0)J.ef(a,b,z,!1)
return new W.i4(0,a,b,z,!1,[e])}}},
i5:{"^":"n:19;a",
$1:function(a){return this.a.$1(H.h(a,"$isT"))}},
be:{"^":"c;a",
c3:function(a){var z,y
z=$.co()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.T[y],W.jF())
for(y=0;y<12;++y)z.i(0,C.t[y],W.jG())}},
O:function(a){return $.ea().A(0,W.aI(a))},
K:function(a,b,c){var z,y,x
z=W.aI(a)
y=$.co()
x=y.h(0,H.e(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.bD(x.$4(a,b,c,this))},
$isa5:1,
p:{
dp:function(a){var z,y
z=document.createElement("a")
y=new W.iL(z,window.location)
y=new W.be(y)
y.c3(a)
return y},
m4:[function(a,b,c,d){H.h(a,"$isS")
H.u(b)
H.u(c)
H.h(d,"$isbe")
return!0},"$4","jF",16,0,10],
m5:[function(a,b,c,d){var z,y,x
H.h(a,"$isS")
H.u(b)
H.u(c)
z=H.h(d,"$isbe").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","jG",16,0,10]}},
p:{"^":"c;$ti",
gv:function(a){return new W.cQ(a,this.gj(a),-1,[H.b_(this,a,"p",0)])}},
d2:{"^":"c;a",
O:function(a){return C.a.aW(this.a,new W.fV(a))},
K:function(a,b,c){return C.a.aW(this.a,new W.fU(a,b,c))},
$isa5:1},
fV:{"^":"n:8;a",
$1:function(a){return H.h(a,"$isa5").O(this.a)}},
fU:{"^":"n:8;a,b,c",
$1:function(a){return H.h(a,"$isa5").K(this.a,this.b,this.c)}},
iM:{"^":"c;",
c4:function(a,b,c,d){var z,y,x
this.a.G(0,c)
z=b.ak(0,new W.iN())
y=b.ak(0,new W.iO())
this.b.G(0,z)
x=this.c
x.G(0,C.V)
x.G(0,y)},
O:function(a){return this.a.A(0,W.aI(a))},
K:["bK",function(a,b,c){var z,y
z=W.aI(a)
y=this.c
if(y.A(0,H.e(z)+"::"+b))return this.d.cz(c)
else if(y.A(0,"*::"+b))return this.d.cz(c)
else{y=this.b
if(y.A(0,H.e(z)+"::"+b))return!0
else if(y.A(0,"*::"+b))return!0
else if(y.A(0,H.e(z)+"::*"))return!0
else if(y.A(0,"*::*"))return!0}return!1}],
$isa5:1},
iN:{"^":"n:9;",
$1:function(a){return!C.a.A(C.t,H.u(a))}},
iO:{"^":"n:9;",
$1:function(a){return C.a.A(C.t,H.u(a))}},
iY:{"^":"iM;e,a,b,c,d",
K:function(a,b,c){if(this.bK(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.bR(a,"template")==="")return this.e.A(0,b)
return!1},
p:{
dz:function(){var z,y,x,w,v
z=P.d
y=P.c1(C.r,z)
x=H.q(C.r,0)
w=H.k(new W.iZ(),{func:1,ret:z,args:[x]})
v=H.o(["TEMPLATE"],[z])
y=new W.iY(y,P.bc(null,null,null,z),P.bc(null,null,null,z),P.bc(null,null,null,z),null)
y.c4(null,new H.fK(C.r,w,[x,z]),v,null)
return y}}},
iZ:{"^":"n:20;",
$1:function(a){return"TEMPLATE::"+H.e(H.u(a))}},
iW:{"^":"c;",
O:function(a){var z=J.B(a)
if(!!z.$isd7)return!1
z=!!z.$isD
if(z&&W.aI(a)==="foreignObject")return!1
if(z)return!0
return!1},
K:function(a,b,c){if(b==="is"||C.f.bE(b,"on"))return!1
return this.O(a)},
$isa5:1},
cQ:{"^":"c;a,b,c,0d,$ti",
saP:function(a){this.d=H.x(a,H.q(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.saP(J.b3(this.a,z))
this.c=z
return!0}this.saP(null)
this.c=y
return!1},
gw:function(a){return this.d},
$isaL:1},
hW:{"^":"c;a",$isJ:1,$isdh:1,p:{
hX:function(a){if(a===window)return H.h(a,"$isdh")
else return new W.hW(a)}}},
a5:{"^":"c;"},
iL:{"^":"c;a,b",$islN:1},
dC:{"^":"c;a",
at:function(a){new W.j8(this).$2(a,null)},
W:function(a,b){if(b==null)J.cw(a)
else J.bj(b,a)},
cr:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.ex(a)
x=J.bR(y.gcc(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a1(t)}v="element unprintable"
try{v=J.b5(a)}catch(t){H.a1(t)}try{u=W.aI(a)
this.cq(H.h(a,"$isS"),b,z,v,u,H.h(y,"$isH"),H.u(x))}catch(t){if(H.a1(t) instanceof P.aw)throw t
else{this.W(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
cq:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.W(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.O(a)){this.W(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.K(a,"is",g)){this.W(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gD(f)
y=H.o(z.slice(0),[H.q(z,0)])
for(x=f.gD(f).length-1,z=f.a,w=J.j(z);x>=0;--x){if(x>=y.length)return H.l(y,x)
v=y[x]
if(!this.a.K(a,J.eI(v),w.R(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.R(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.R(z,v)
w.cl(z,v)}}if(!!J.B(a).$isdc)this.at(a.content)},
$isl3:1},
j8:{"^":"n:21;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.cr(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.W(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.ez(z)}catch(w){H.a1(w)
v=H.h(z,"$isr")
if(x){u=v.parentNode
if(u!=null)J.bj(u,v)}else J.bj(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.h(y,"$isr")}}},
hV:{"^":"f+f7;"},
hY:{"^":"f+m;"},
hZ:{"^":"hY+p;"},
i_:{"^":"f+m;"},
i0:{"^":"i_+p;"},
i7:{"^":"f+m;"},
i8:{"^":"i7+p;"},
im:{"^":"f+m;"},
io:{"^":"im+p;"},
iv:{"^":"f+P;"},
iw:{"^":"f+P;"},
ix:{"^":"f+m;"},
iy:{"^":"ix+p;"},
iz:{"^":"f+m;"},
iA:{"^":"iz+p;"},
iD:{"^":"f+m;"},
iE:{"^":"iD+p;"},
iK:{"^":"f+P;"},
dw:{"^":"J+m;"},
dx:{"^":"dw+p;"},
iP:{"^":"f+m;"},
iQ:{"^":"iP+p;"},
iT:{"^":"f+P;"},
j_:{"^":"f+m;"},
j0:{"^":"j_+p;"},
dA:{"^":"J+m;"},
dB:{"^":"dA+p;"},
j4:{"^":"f+m;"},
j5:{"^":"j4+p;"},
ja:{"^":"f+m;"},
jb:{"^":"ja+p;"},
jc:{"^":"f+m;"},
jd:{"^":"jc+p;"},
je:{"^":"f+m;"},
jf:{"^":"je+p;"},
jg:{"^":"f+m;"},
jh:{"^":"jg+p;"},
ji:{"^":"f+m;"},
jj:{"^":"ji+p;"}}],["","",,P,{"^":"",
Y:function(a){var z,y,x,w,v
if(a==null)return
z=P.ab(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.V)(y),++w){v=H.u(y[w])
z.i(0,v,a[v])}return z},
jw:function(a,b){var z={}
a.B(0,new P.jx(z))
return z},
cK:function(){var z=$.cJ
if(z==null){z=J.bN(window.navigator.userAgent,"Opera",0)
$.cJ=z}return z},
fc:function(){var z,y
z=$.cG
if(z!=null)return z
y=$.cH
if(y==null){y=J.bN(window.navigator.userAgent,"Firefox",0)
$.cH=y}if(y)z="-moz-"
else{y=$.cI
if(y==null){y=!P.cK()&&J.bN(window.navigator.userAgent,"Trident/",0)
$.cI=y}if(y)z="-ms-"
else z=P.cK()?"-o-":"-webkit-"}$.cG=z
return z},
jx:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",fX:{"^":"he;",$isfX:1,"%":"IDBOpenDBRequest|IDBVersionChangeRequest"},he:{"^":"J;","%":";IDBRequest"},lQ:{"^":"T;0bj:target=","%":"IDBVersionChangeEvent"}}],["","",,P,{"^":"",iF:{"^":"c;"},Q:{"^":"iF;$ti"}}],["","",,P,{"^":"",eS:{"^":"f;",$iseS:1,"%":"SVGAnimatedLength"},kj:{"^":"D;0m:height=,0l:width=","%":"SVGFEBlendElement"},kk:{"^":"D;0m:height=,0l:width=","%":"SVGFEColorMatrixElement"},kl:{"^":"D;0m:height=,0l:width=","%":"SVGFEComponentTransferElement"},km:{"^":"D;0m:height=,0l:width=","%":"SVGFECompositeElement"},kn:{"^":"D;0m:height=,0l:width=","%":"SVGFEConvolveMatrixElement"},ko:{"^":"D;0m:height=,0l:width=","%":"SVGFEDiffuseLightingElement"},kp:{"^":"D;0m:height=,0l:width=","%":"SVGFEDisplacementMapElement"},kq:{"^":"D;0m:height=,0l:width=","%":"SVGFEFloodElement"},kr:{"^":"D;0m:height=,0l:width=","%":"SVGFEGaussianBlurElement"},ks:{"^":"D;0m:height=,0l:width=","%":"SVGFEImageElement"},kt:{"^":"D;0m:height=,0l:width=","%":"SVGFEMergeElement"},ku:{"^":"D;0m:height=,0l:width=","%":"SVGFEMorphologyElement"},kv:{"^":"D;0m:height=,0l:width=","%":"SVGFEOffsetElement"},kw:{"^":"D;0m:height=,0l:width=","%":"SVGFESpecularLightingElement"},kx:{"^":"D;0m:height=,0l:width=","%":"SVGFETileElement"},ky:{"^":"D;0m:height=,0l:width=","%":"SVGFETurbulenceElement"},kB:{"^":"D;0m:height=,0l:width=","%":"SVGFilterElement"},kC:{"^":"b8;0m:height=,0l:width=","%":"SVGForeignObjectElement"},ft:{"^":"b8;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},b8:{"^":"D;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},kK:{"^":"b8;0m:height=,0l:width=","%":"SVGImageElement"},aM:{"^":"f;",$isaM:1,"%":"SVGLength"},kQ:{"^":"iq;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return this.J(a,b)},
i:function(a,b,c){H.h(c,"$isaM")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
J:function(a,b){return a.getItem(b)},
$asm:function(){return[P.aM]},
$isi:1,
$asi:function(){return[P.aM]},
$isa:1,
$asa:function(){return[P.aM]},
$asp:function(){return[P.aM]},
"%":"SVGLengthList"},kR:{"^":"D;0m:height=,0l:width=","%":"SVGMaskElement"},aN:{"^":"f;",$isaN:1,"%":"SVGNumber"},l4:{"^":"iC;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return this.J(a,b)},
i:function(a,b,c){H.h(c,"$isaN")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
J:function(a,b){return a.getItem(b)},
$asm:function(){return[P.aN]},
$isi:1,
$asi:function(){return[P.aN]},
$isa:1,
$asa:function(){return[P.aN]},
$asp:function(){return[P.aN]},
"%":"SVGNumberList"},l9:{"^":"D;0m:height=,0l:width=","%":"SVGPatternElement"},lb:{"^":"f;0j:length=","%":"SVGPointList"},ld:{"^":"f;0m:height=,0l:width=","%":"SVGRect"},le:{"^":"ft;0m:height=,0l:width=","%":"SVGRectElement"},d7:{"^":"D;",$isd7:1,"%":"SVGScriptElement"},lp:{"^":"iV;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return this.J(a,b)},
i:function(a,b,c){H.u(c)
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
J:function(a,b){return a.getItem(b)},
$asm:function(){return[P.d]},
$isi:1,
$asi:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asp:function(){return[P.d]},
"%":"SVGStringList"},D:{"^":"S;",
I:function(a,b,c,d){var z,y,x,w,v,u
z=H.o([],[W.a5])
C.a.n(z,W.dp(null))
C.a.n(z,W.dz())
C.a.n(z,new W.iW())
c=new W.dC(new W.d2(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).cJ(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a0(w)
u=z.gZ(z)
for(z=J.j(v);x=u.firstChild,x!=null;)z.F(v,x)
return v},
gbh:function(a){return new W.dl(a,"change",!1,[W.T])},
$isD:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},lq:{"^":"b8;0m:height=,0l:width=","%":"SVGSVGElement"},aQ:{"^":"f;",$isaQ:1,"%":"SVGTransform"},lB:{"^":"j7;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return this.J(a,b)},
i:function(a,b,c){H.h(c,"$isaQ")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
J:function(a,b){return a.getItem(b)},
$asm:function(){return[P.aQ]},
$isi:1,
$asi:function(){return[P.aQ]},
$isa:1,
$asa:function(){return[P.aQ]},
$asp:function(){return[P.aQ]},
"%":"SVGTransformList"},lP:{"^":"b8;0m:height=,0l:width=","%":"SVGUseElement"},ip:{"^":"f+m;"},iq:{"^":"ip+p;"},iB:{"^":"f+m;"},iC:{"^":"iB+p;"},iU:{"^":"f+m;"},iV:{"^":"iU+p;"},j6:{"^":"f+m;"},j7:{"^":"j6+p;"}}],["","",,P,{"^":"",aJ:{"^":"c;",$isi:1,
$asi:function(){return[P.ac]},
$isa:1,
$asa:function(){return[P.ac]},
$ishC:1}}],["","",,P,{"^":"",k2:{"^":"f;0j:length=","%":"AudioBuffer"},k3:{"^":"hT;",
h:function(a,b){return P.Y(a.get(H.u(b)))},
B:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gD:function(a){var z=H.o([],[P.d])
this.B(a,new P.eU(z))
return z},
gj:function(a){return a.size},
$asP:function(){return[P.d,null]},
$isH:1,
$asH:function(){return[P.d,null]},
"%":"AudioParamMap"},eU:{"^":"n:2;a",
$2:function(a,b){return C.a.n(this.a,a)}},k4:{"^":"J;0j:length=","%":"AudioTrackList"},eV:{"^":"J;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},l6:{"^":"eV;0j:length=","%":"OfflineAudioContext"},hT:{"^":"f+P;"}}],["","",,P,{"^":"",eX:{"^":"f;",$iseX:1,"%":"WebGLBuffer"},h8:{"^":"f;",$ish8:1,"%":"WebGLProgram"},lf:{"^":"f;",
aV:function(a,b){return a.activeTexture(b)},
aX:function(a,b,c){return a.attachShader(b,c)},
aY:function(a,b,c){return a.bindBuffer(b,c)},
b_:function(a,b,c){return a.bindTexture(b,c)},
b0:function(a,b){return a.blendEquation(b)},
b1:function(a,b,c){return a.blendFunc(b,c)},
b2:function(a,b,c,d){return a.bufferData(b,c,d)},
b3:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
b5:function(a,b){return a.compileShader(b)},
b6:function(a){return a.createBuffer()},
b7:function(a){return a.createProgram()},
b8:function(a,b){return a.createShader(b)},
b9:function(a,b){return a.depthMask(b)},
ba:function(a,b){return a.disable(b)},
bb:function(a,b,c,d){return a.drawArrays(b,c,d)},
bc:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bd:function(a,b){return a.enable(b)},
be:function(a,b){return a.enableVertexAttribArray(b)},
a5:function(a){return P.Y(a.getContextAttributes())},
an:function(a,b){return a.getProgramInfoLog(b)},
ao:function(a,b,c){return a.getProgramParameter(b,c)},
aq:function(a,b){return a.getShaderInfoLog(b)},
ar:function(a,b,c){return a.getShaderParameter(b,c)},
as:function(a,b,c){return a.getUniformLocation(b,c)},
bg:function(a,b){return a.linkProgram(b)},
av:function(a,b,c){return a.shaderSource(b,c)},
ax:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bm:function(a,b,c){return a.uniform1f(b,c)},
bn:function(a,b,c){return a.uniform1i(b,c)},
bo:function(a,b,c){return a.uniform2fv(b,c)},
bp:function(a,b,c){return a.uniform3fv(b,c)},
bq:function(a,b,c){return a.uniform4fv(b,c)},
br:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bs:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bt:function(a,b){return a.useProgram(b)},
bu:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
"%":"WebGLRenderingContext"},lg:{"^":"f;",
cC:function(a,b){return a.beginTransformFeedback(b)},
cF:function(a,b){return a.bindVertexArray(b)},
cL:function(a){return a.createVertexArray()},
cN:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
cO:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
cP:function(a){return a.endTransformFeedback()},
d5:function(a,b,c,d){this.cu(a,b,H.w(c,"$isa",[P.d],"$asa"),d)
return},
cu:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
d7:function(a,b,c){return a.vertexAttribDivisor(b,c)},
aV:function(a,b){return a.activeTexture(b)},
aX:function(a,b,c){return a.attachShader(b,c)},
aY:function(a,b,c){return a.bindBuffer(b,c)},
b_:function(a,b,c){return a.bindTexture(b,c)},
b0:function(a,b){return a.blendEquation(b)},
b1:function(a,b,c){return a.blendFunc(b,c)},
b2:function(a,b,c,d){return a.bufferData(b,c,d)},
b3:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
b5:function(a,b){return a.compileShader(b)},
b6:function(a){return a.createBuffer()},
b7:function(a){return a.createProgram()},
b8:function(a,b){return a.createShader(b)},
b9:function(a,b){return a.depthMask(b)},
ba:function(a,b){return a.disable(b)},
bb:function(a,b,c,d){return a.drawArrays(b,c,d)},
bc:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bd:function(a,b){return a.enable(b)},
be:function(a,b){return a.enableVertexAttribArray(b)},
a5:function(a){return P.Y(a.getContextAttributes())},
an:function(a,b){return a.getProgramInfoLog(b)},
ao:function(a,b,c){return a.getProgramParameter(b,c)},
aq:function(a,b){return a.getShaderInfoLog(b)},
ar:function(a,b,c){return a.getShaderParameter(b,c)},
as:function(a,b,c){return a.getUniformLocation(b,c)},
bg:function(a,b){return a.linkProgram(b)},
av:function(a,b,c){return a.shaderSource(b,c)},
ax:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bm:function(a,b,c){return a.uniform1f(b,c)},
bn:function(a,b,c){return a.uniform1i(b,c)},
bo:function(a,b,c){return a.uniform2fv(b,c)},
bp:function(a,b,c){return a.uniform3fv(b,c)},
bq:function(a,b,c){return a.uniform4fv(b,c)},
br:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bs:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bt:function(a,b){return a.useProgram(b)},
bu:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
"%":"WebGL2RenderingContext"},hk:{"^":"f;",$ishk:1,"%":"WebGLShader"},hz:{"^":"f;",$ishz:1,"%":"WebGLTexture"},hE:{"^":"f;",$ishE:1,"%":"WebGLUniformLocation"},hI:{"^":"f;",$ishI:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",ln:{"^":"iS;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return P.Y(this.cj(a,b))},
i:function(a,b,c){H.h(c,"$isH")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
cj:function(a,b){return a.item(b)},
$asm:function(){return[[P.H,,,]]},
$isi:1,
$asi:function(){return[[P.H,,,]]},
$isa:1,
$asa:function(){return[[P.H,,,]]},
$asp:function(){return[[P.H,,,]]},
"%":"SQLResultSetRowList"},iR:{"^":"f+m;"},iS:{"^":"iR+p;"}}],["","",,G,{"^":"",
hM:function(a){var z,y,x,w
z=H.o(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.l(z,y)
C.a.i(z,y,w+H.e(z[y]))}return C.a.X(z,"\n")},
dk:function(a,b,c){var z,y,x,w
z=J.j(a)
y=z.b8(a,b)
z.av(a,y,c)
z.b5(a,y)
x=H.bD(z.ar(a,y,35713))
if(x!=null&&!x){w=z.aq(a,y)
P.b1("E:Compilation failed:")
P.b1("E:"+G.hM(c))
P.b1("E:Failure:")
P.b1(C.f.C("E:",w))
throw H.b(w)}return y},
cR:function(a,b){var z,y,x,w,v
H.w(a,"$isa",[T.L],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bP(a[y])
w=b.length
if(z>=w)return H.l(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.l(a,y)
v=J.bQ(a[y])
if(x>=w)return H.l(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.l(a,y)
v=J.cu(a[y])
if(z>=w)return H.l(b,z)
b[z]=v}return b},
fp:function(a,b){var z,y,x,w
H.w(a,"$isa",[T.U],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bP(a[y])
w=b.length
if(z>=w)return H.l(b,z)
b[z]=x;++z
if(y>=a.length)return H.l(a,y)
x=J.bQ(a[y])
if(z>=w)return H.l(b,z)
b[z]=x}return b},
fq:function(a,b){var z,y,x,w,v
H.w(a,"$isa",[T.bx],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bP(a[y])
w=b.length
if(z>=w)return H.l(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.l(a,y)
v=J.bQ(a[y])
if(x>=w)return H.l(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.l(a,y)
x=J.cu(a[y])
if(v>=w)return H.l(b,v)
b[v]=x
if(y>=a.length)return H.l(a,y)
C.z.i(b,z+3,J.eC(a[y]))}return b},
fo:function(a,b){var z,y
H.w(a,"$isa",[[P.a,P.A]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.n.i(b,z,J.b3(a[y],0))
if(y>=a.length)return H.l(a,y)
C.n.i(b,z+1,J.b3(a[y],1))
if(y>=a.length)return H.l(a,y)
C.n.i(b,z+2,J.b3(a[y],2))
if(y>=a.length)return H.l(a,y)
C.n.i(b,z+3,J.b3(a[y],3))}return b},
ik:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.ah(z,[H.q(z,0)]),y=y.gv(y),x=b.x,w=[[P.a,P.A]],v=[P.ac],u=[T.bx],t=[T.L],s=[T.U];y.t();){r=y.d
if(!x.a3(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.dO>0)H.bL("I: "+r)
continue}q=z.h(0,r)
switch($.a2().h(0,r).a){case"vec2":b.U(r,G.fp(H.bi(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.U(r,G.cR(H.bi(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.U(r,G.fq(H.bi(q,"$isa",u,"$asa"),null),4)
break
case"float":b.U(r,new Float32Array(H.bz(H.bi(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.U(r,G.fo(H.bi(q,"$isa",w,"$asa"),null),4)
break}}},
c2:{"^":"c;"},
c7:{"^":"c2;d,a,b,c",
k:function(a){var z,y,x,w
z=H.o(["{"+new H.de(H.jC(this)).k(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.ah(y,[H.q(y,0)]),x=x.gv(x);x.t();){w=x.d
C.a.n(z,H.e(w)+": "+H.e(y.h(0,w)))}return C.a.X(z,"\n")}},
eZ:{"^":"c;0a,b",
bf:function(a,b,c){J.eu(this.a,b)
if(c>0)J.eP(this.a,b,c)},
bv:function(a,b,c,d,e,f,g,h){J.bM(this.a,34962,b)
J.eQ(this.a,c,d,e,!1,g,h)}},
fn:{"^":"c;"},
cP:{"^":"c;a,b,c,d"},
fs:{"^":"c;a,b,c,d,e",
aA:function(a){switch($.a2().h(0,a).a){case"vec2":this.e.i(0,a,H.o([],[T.U]))
break
case"vec3":this.e.i(0,a,H.o([],[T.L]))
break
case"vec4":this.e.i(0,a,H.o([],[T.bx]))
break
case"float":this.e.i(0,a,H.o([],[P.ac]))
break
case"uvec4":this.e.i(0,a,H.o([],[[P.a,P.A]]))
break}},
bQ:function(a){var z,y,x,w
H.w(a,"$isa",[T.L],"$asa")
for(z=this.d,y=0;y<4;++y){x=a[y]
w=new T.L(new Float32Array(3))
w.au(x)
C.a.n(z,w)}},
bN:function(a,b){var z,y,x,w,v,u
z=[T.U]
H.w(b,"$isa",z,"$asa")
y=H.w(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<4;++x){w=b[x]
v=new Float32Array(2)
u=w.a
v[1]=u[1]
v[0]=u[0]
z.n(y,new T.U(v))}},
bO:function(a,b){var z,y,x,w,v
z=[T.L]
H.w(b,"$isa",z,"$asa")
y=H.w(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<4;++x){w=b[x]
v=new T.L(new Float32Array(3))
v.au(w)
z.n(y,v)}},
bT:function(){var z,y,x,w,v,u,t,s,r
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.o(y,[P.A])
for(y=this.b,w=0,v=0;!1;++v){if(v>=0)return H.l(y,v)
u=y[v]
C.a.i(x,w,u.gda(u))
C.a.i(x,w+1,u.gdc(u))
C.a.i(x,w+2,u.gdd(u))
w+=3}for(y=z.length,v=0;v<z.length;z.length===y||(0,H.V)(z),++v){t=z[v]
s=t.a
C.a.i(x,w,s)
C.a.i(x,w+1,t.b)
r=t.c
C.a.i(x,w+2,r)
C.a.i(x,w+3,s)
C.a.i(x,w+4,r)
C.a.i(x,w+5,t.d)
w+=6}return x},
k:function(a){var z,y,x,w,v
z=H.o(["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"],[P.d])
for(y=this.e,x=new H.ah(y,[H.q(y,0)]),x=x.gv(x);x.t();){w=x.d
v=$.a2().h(0,w).a
C.a.n(z,H.e(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.X(z," ")}},
fM:{"^":"c2;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sac:function(a){this.cx=H.w(a,"$isa",[P.A],"$asa")},
az:function(a,b,c){var z,y
C.f.V(a,0)
H.h(b,"$isaJ")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bM(z.a,34962,y)
J.ct(z.a,34962,b,35048)},
bU:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
U:function(a,b,c){var z,y,x,w,v
z=J.cp(a,0)===105
if(z&&this.z===0)this.z=C.d.bL(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.bO(x.a))
this.az(a,b,c)
w=$.a2().h(0,a)
if(w==null)throw H.b("Unknown canonical "+a)
v=this.x.h(0,a)
J.bk(x.a,this.e)
x.bf(0,v,z?1:0)
x.bv(0,y.h(0,a),v,w.aB(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.o(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=new H.ah(z,[H.q(z,0)]),x=x.gv(x);x.t();){w=x.d
C.a.n(y,H.e(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.X(y,"  ")}},
kh:{"^":"c;"},
hc:{"^":"c2;d,e,f,r,x,y,z,Q,0ch,a,b,c",
bW:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.V)(z),++u){t=z[u]
x.i(0,t,J.cv(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.V)(z),++u){t=z[u]
x.i(0,t,J.cv(w.a,v,t))}},
bZ:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.o([],[P.d])
x=H.o([],[P.d])
for(y=new H.ah(y,[H.q(y,0)]),y=y.gv(y);y.t();){w=y.d
if(!z.a3(0,w))C.a.n(x,w)}for(z=this.x,z=P.is(z,z.r,H.q(z,0)),y=this.Q;z.t();){w=z.d
if(!y.A(0,w))C.a.n(x,w)}return x},
c1:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(b,"$isH",[P.d,P.c],"$asH")
z=Date.now()
for(y=new H.ah(b,[H.q(b,0)]),y=y.gv(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.t();){s=y.d
switch(J.cp(s,0)){case 117:if(w.a3(0,s)){r=b.h(0,s)
if(v.a3(0,s))H.bL("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.i(0,s,a)
q=$.a2().h(0,s)
if(q==null)H.O("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.N(r)
J.bS(x.a,p,r)}break
case"float":if(q.c===0){H.dM(r)
J.eL(x.a,p,r)}break
case"mat4":if(q.c===0){s=C.m.ga_(H.a9(r,"$iskT"))
J.eN(x.a,p,!1,s)}break
case"mat3":if(q.c===0){s=C.m.ga_(H.a9(r,"$iskS"))
J.eM(x.a,p,!1,s)}break
case"vec4":if(q.c===0){s=C.m.ga_(H.a9(r,"$isbx"))
J.cz(x.a,p,s)}else{H.h(r,"$isaJ")
J.cz(x.a,p,r)}break
case"vec3":if(q.c===0){s=C.m.ga_(H.a9(r,"$isL"))
J.cy(x.a,p,s)}else{H.h(r,"$isaJ")
J.cy(x.a,p,r)}break
case"vec2":s=q.c
o=x.a
if(s===0)J.cx(o,p,H.a9(r,"$isU").a)
else J.cx(o,p,H.h(r,"$isaJ"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.bI(s)
J.cq(x.a,33984+s)
s=H.a9(r,"$ishy").bV()
J.cs(x.a,3553,s)
s=this.ch
J.bS(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.C()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.bI(s)
J.cq(x.a,33984+s)
s=H.a9(r,"$ishy").bV()
J.cs(x.a,34067,s)
s=this.ch
J.bS(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.C()
this.ch=s+1
break
default:H.bL("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":s=J.av(r,!0)
o=x.a
if(s)J.b4(o,2929)
else J.eo(o,2929)
break
case"cStencilFunc":H.a9(r,"$islx")
r.gcS()
J.b4(x.a,2960)
s=r.gcS()
o=r.gdh(r)
n=r.gdg(r)
J.eH(x.a,s,o,n)
break
case"cDepthWrite":H.bD(r)
J.en(x.a,r)
break
case"cBlendEquation":H.a9(r,"$islw")
r.gcQ()
J.b4(x.a,3042)
s=r.gd9()
o=r.gdf()
J.ei(x.a,s,o)
o=r.gcQ()
J.eh(x.a,o)
break}++t
break}}m=P.fh(0,0,0,Date.now()-new P.bo(z,!1).a,0,0)
""+t
m.k(0)},
bS:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[G.c7],"$asa")
Date.now()
z=this.d
J.eO(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.aG()}for(x=0;x<1;++x){w=b[x]
this.c1(w.a,w.d)}y=this.Q
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.aQ()}for(v=a.cy,v=new H.ah(v,[H.q(v,0)]),v=v.gv(v);v.t();)y.n(0,v.d)
u=this.bZ()
if(u.length!==0)P.b1("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
J.bk(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.bU()
s=a.Q
r=a.z
if(t)J.eg(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.es(q,y,v,s,0,r)
else J.er(q,y,v,s,0)}else{s=z.a
if(r>1)J.eq(s,y,0,v,r)
else J.ep(s,y,0,v)}if(t)J.ev(z.a)},
bR:function(a,b){return this.bS(a,b,null)},
p:{
hd:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
y=P.bc(null,null,null,z)
x=c.b
w=d.b
v=H.w(c.f,"$isa",[z],"$asa")
u=J.el(b.a)
t=G.dk(b.a,35633,x)
J.cr(b.a,u,t)
s=G.dk(b.a,35632,w)
J.cr(b.a,u,s)
if(v.length>0)J.eJ(b.a,u,v,35980)
J.eG(b.a,u)
if(!H.bD(J.eF(b.a,u,35714)))H.O(J.eE(b.a,u))
z=new G.hc(b,c,d,u,P.c1(c.c,z),P.ab(z,P.c),P.ab(z,z),y,a,!1,!0)
z.bW(a,b,c,d)
return z}}},
z:{"^":"c;a,b,c",
aB:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hl:{"^":"c;a,0b,c,d,e,f,r,x",
bM:function(a){var z,y,x,w
H.w(a,"$isa",[P.d],"$asa")
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
C.a.n(z,w)
y.i(0,w,this.r);++this.r}C.a.aw(z)},
bP:function(a){var z,y
H.w(a,"$isa",[P.d],"$asa")
for(z=this.d,y=0;y<9;++y)C.a.n(z,a[y])
C.a.aw(z)},
bX:function(a,b){this.b=this.c2(!1,H.w(a,"$isa",[P.d],"$asa"),b)},
aC:function(a){return this.bX(a,null)},
c2:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.w(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.o(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.V)(y),++u){t=y[u]
s=$.a2().h(0,t)
C.a.n(w,"layout (location="+H.e(v.h(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.n(w,"")
r=x?"in":"out"
if(x)C.a.n(w,"out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.l(z,u)
q=z[u]
s=$.a2().h(0,q)
C.a.n(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.V)(z),++u){q=z[u]
s=$.a2().h(0,q)
C.a.n(w,r+" "+s.a+" "+H.e(q)+";")}C.a.n(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.V)(z),++u){q=z[u]
s=$.a2().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.n(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.n(w,"")
C.a.G(w,b)
return C.a.X(w,"\n")},
p:{
d8:function(a){var z,y
z=P.d
y=[z]
return new G.hl(a,H.o([],y),H.o([],y),H.o([],y),H.o([],y),0,P.ab(z,P.A))}}}}],["","",,R,{"^":"",
iu:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.h(W.i2("span",null),"$isS")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.v).a8(y,"float")
y.setProperty(x,"left","")
x=C.v.a8(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.q.F(z,v)}return z},
hq:{"^":"c;",
bY:function(a,b,c){var z,y
z=this.a
if(z==null)throw H.b("no element provided")
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
hr:{"^":"hq;e,f,a,b,c,d",
c0:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.w.d4(y,2)+" fps"
C.q.bB(this.c,b)
x=C.d.N(30*C.w.cG(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.h(z.firstChild,"$isS")
v=w.style
u=""+x+"px"
v.height=u
C.q.F(z,w)},
c_:function(a){return this.c0(a,"")}}}],["","",,A,{"^":"",
dS:function(a){var z,y
z=C.z.cR(H.w(a,"$isi",[P.c],"$asi"),0,new A.jE(),P.A)
if(typeof z!=="number")return H.bI(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
jE:{"^":"n:22;",
$2:function(a,b){var z,y
H.N(a)
z=J.aE(b)
if(typeof a!=="number")return a.C()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",U:{"^":"c;a",
S:function(a,b){var z=this.a
z[0]=a
z[1]=b},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.U){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gu:function(a){return A.dS(this.a)},
h:function(a,b){var z=this.a
if(b>=2)return H.l(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gbw:function(a){return this.a[0]},
gbx:function(a){return this.a[1]}},L:{"^":"c;a",
ga_:function(a){return this.a},
T:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
au:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.L){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gu:function(a){return A.dS(this.a)},
h:function(a,b){var z=this.a
if(b>=3)return H.l(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gbw:function(a){return this.a[0]},
gbx:function(a){return this.a[1]},
gd8:function(a){return this.a[2]}},bx:{"^":"c;"}}],["","",,R,{"^":"",
dU:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z={}
y=$.a2()
y.i(0,"uFreqMul",C.b)
y.i(0,"uAmplMul",C.b)
y.i(0,"uAmpl1",C.b)
y.i(0,"uAmpl2",C.b)
y.i(0,"uAmpl3",C.b)
y.i(0,"uMode",C.b)
y.i(0,"uSpeed",C.b)
x=document
w=C.i.al(x,"stats")
v=x.createElement("div")
u=v.style
u.fontWeight="bold"
v.textContent="@@@@"
t=new R.hr(0,0,w,v,x.createElement("div"),R.iu("blue","gray",90,30))
t.bY(w,"blue","gray")
s=H.h(C.i.cY(x,"#webgl-canvas"),"$isbV")
r=s.clientWidth
q=s.clientHeight
s.width=r
s.height=q
p=new G.eZ(s)
w=P.d
u=P.c
o=(s&&C.H).bz(s,"webgl2",P.cY(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],w,u))
p.a=o
if(o==null)H.O(P.cO('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+H.e(J.eD(o))
if($.dO>0)P.b1("I: "+n)
J.ej(o,0,0,0,1)
J.b4(o,2929)
J.b4(o,2884)
m=G.hd("perlin",p,$.ec(),$.eb())
o=new T.L(new Float32Array(3))
o.T(-1,-1,0)
n=new T.L(new Float32Array(3))
n.T(1,-1,0)
l=new T.L(new Float32Array(3))
l.T(1,1,0)
k=new T.L(new Float32Array(3))
k.T(-1,1,0)
j=[T.L]
i=H.o([o,n,l,k],j)
o=new T.U(new Float32Array(2))
o.S(0,0)
n=new T.U(new Float32Array(2))
n.S(1,0)
l=new T.U(new Float32Array(2))
l.S(1,1)
k=new T.U(new Float32Array(2))
k.S(0,1)
h=H.o([o,n,l,k],[T.U])
g=new T.L(new Float32Array(3))
g.T(0,0,1)
f=H.o([g,g,g,g],j)
o=H.o([],[G.fn])
n=H.o([],[G.cP])
l=H.o([],j)
e=new G.fs(!1,o,n,l,P.ab(w,[P.a,,]))
e.aA("aTexUV")
H.w(i,"$isa",j,"$asa")
d=l.length
C.a.n(n,new G.cP(d,d+1,d+2,d+3))
e.bQ(i)
e.bN("aTexUV",h)
e.aA("aNormal")
e.bO("aNormal",f)
o=m.d
n=m.e.x
k=P.ab(w,u)
j=J.em(o.a)
c=new G.fM(o,j,4,k,n,0,-1,P.ab(w,P.aJ),"meshdata:quad",!1,!0)
l=G.cR(l,null)
k.i(0,"aPosition",J.bO(o.a))
c.ch=l
c.az("aPosition",l,3)
b=y.h(0,"aPosition")
if(b==null)H.O("Unknown canonical aPosition")
a=n.h(0,"aPosition")
J.bk(o.a,j)
o.bf(0,a,0)
o.bv(0,k.h(0,"aPosition"),a,b.aB(),5126,!1,0,0)
y=H.w(e.bT(),"$isa",[P.A],"$asa")
c.y=J.bO(o.a)
n=c.ch.length
if(n<768){c.sac(new Uint8Array(H.bz(y)))
c.Q=5121}else if(n<196608){c.sac(new Uint16Array(H.bz(y)))
c.Q=5123}else{c.sac(new Uint32Array(H.bz(y)))
c.Q=5125}J.bk(o.a,j)
y=c.y
n=c.cx
J.bM(o.a,34963,y)
J.ct(o.a,34963,n,35048)
G.ik(e,c)
y=P.ab(w,u)
a0=new G.c7(y,"simplex",!1,!0)
y.i(0,"uTime",0)
if(typeof r!=="number")return r.C()
if(typeof q!=="number")return q.C()
w=new T.U(new Float32Array(2))
w.S(r,q)
y.i(0,"uCanvasSize",w)
for(y=C.i.am(x,"input"),w=y.length,a1=0;a1<y.length;y.length===w||(0,H.V)(y),++a1){u=J.ey(H.h(y[a1],"$isS"))
o=H.q(u,0)
W.dm(u.a,u.b,H.k(new R.jS(a0),{func:1,ret:-1,args:[o]}),!1,o)}for(y=C.i.am(x,"input"),w=y.length,a1=0;a1<y.length;y.length===w||(0,H.V)(y),++a1){u=H.h(y[a1],"$isbr")
if(u.type==="radio"&&!u.checked)continue
a2=C.i.ca(x,"Event")
J.ed(a2,"change",!0,!0)
C.K.cM(u,a2)}z.a=0
new R.jR(z,a0,m,c,t).$1(0)},
jS:{"^":"n:23;a",
$1:function(a){var z,y
z=H.a9(J.eB(a),"$isbr")
if(z.type==="range"){y=H.h(C.i.al(document,z.name),"$isd5")
this.a.d.i(0,z.name,P.dN(z.value,null))
y.value=z.value}if(z.type==="radio")this.a.d.i(0,z.name,P.dN(z.value,null))}},
jR:{"^":"n:24;a,b,c,d,e",
$1:function(a){var z,y
H.ck(a)
if(typeof a!=="number")return a.C()
z=this.a
z.a=a+0
y=this.b
y.d.i(0,"uTime",a/1000)
this.c.bR(this.d,H.o([y],[G.c7]))
C.ac.gcA(window).bk(this,-1)
this.e.c_(z.a)}}},1],["","",,V,{"^":""}]]
setupProgram(dart,0,0)
J.B=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cT.prototype
return J.cS.prototype}if(typeof a=="string")return J.ba.prototype
if(a==null)return J.cU.prototype
if(typeof a=="boolean")return J.fB.prototype
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bb.prototype
return a}if(a instanceof P.c)return a
return J.bH(a)}
J.aZ=function(a){if(typeof a=="string")return J.ba.prototype
if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bb.prototype
return a}if(a instanceof P.c)return a
return J.bH(a)}
J.dP=function(a){if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bb.prototype
return a}if(a instanceof P.c)return a
return J.bH(a)}
J.jA=function(a){if(typeof a=="number")return J.bs.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aR.prototype
return a}
J.jB=function(a){if(typeof a=="number")return J.bs.prototype
if(typeof a=="string")return J.ba.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aR.prototype
return a}
J.cg=function(a){if(typeof a=="string")return J.ba.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aR.prototype
return a}
J.j=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bb.prototype
return a}if(a instanceof P.c)return a
return J.bH(a)}
J.bG=function(a){if(a==null)return a
if(!(a instanceof P.c))return J.aR.prototype
return a}
J.av=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.B(a).E(a,b)}
J.a3=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.jA(a).L(a,b)}
J.b3=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.jO(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aZ(a).h(a,b)}
J.cp=function(a,b){return J.cg(a).V(a,b)}
J.ed=function(a,b,c,d){return J.j(a).ci(a,b,c,d)}
J.bj=function(a,b){return J.j(a).cm(a,b)}
J.ee=function(a,b,c){return J.j(a).cn(a,b,c)}
J.cq=function(a,b){return J.j(a).aV(a,b)}
J.ef=function(a,b,c,d){return J.j(a).cv(a,b,c,d)}
J.cr=function(a,b,c){return J.j(a).aX(a,b,c)}
J.eg=function(a,b){return J.j(a).cC(a,b)}
J.bM=function(a,b,c){return J.j(a).aY(a,b,c)}
J.cs=function(a,b,c){return J.j(a).b_(a,b,c)}
J.bk=function(a,b){return J.j(a).cF(a,b)}
J.eh=function(a,b){return J.j(a).b0(a,b)}
J.ei=function(a,b,c){return J.j(a).b1(a,b,c)}
J.ct=function(a,b,c,d){return J.j(a).b2(a,b,c,d)}
J.ej=function(a,b,c,d,e){return J.j(a).b3(a,b,c,d,e)}
J.ek=function(a,b){return J.jB(a).P(a,b)}
J.bN=function(a,b,c){return J.aZ(a).cH(a,b,c)}
J.bO=function(a){return J.j(a).b6(a)}
J.el=function(a){return J.j(a).b7(a)}
J.em=function(a){return J.j(a).cL(a)}
J.en=function(a,b){return J.j(a).b9(a,b)}
J.eo=function(a,b){return J.j(a).ba(a,b)}
J.ep=function(a,b,c,d){return J.j(a).bb(a,b,c,d)}
J.eq=function(a,b,c,d,e){return J.j(a).cN(a,b,c,d,e)}
J.er=function(a,b,c,d,e){return J.j(a).bc(a,b,c,d,e)}
J.es=function(a,b,c,d,e,f){return J.j(a).cO(a,b,c,d,e,f)}
J.et=function(a,b){return J.dP(a).q(a,b)}
J.b4=function(a,b){return J.j(a).bd(a,b)}
J.eu=function(a,b){return J.j(a).be(a,b)}
J.ev=function(a){return J.j(a).cP(a)}
J.ew=function(a,b){return J.j(a).B(a,b)}
J.ex=function(a){return J.j(a).gcB(a)}
J.aE=function(a){return J.B(a).gu(a)}
J.bl=function(a){return J.dP(a).gv(a)}
J.aF=function(a){return J.aZ(a).gj(a)}
J.ey=function(a){return J.j(a).gbh(a)}
J.ez=function(a){return J.j(a).gcX(a)}
J.eA=function(a){return J.j(a).gd2(a)}
J.eB=function(a){return J.j(a).gbj(a)}
J.eC=function(a){return J.bG(a).gdi(a)}
J.bP=function(a){return J.bG(a).gbw(a)}
J.bQ=function(a){return J.bG(a).gbx(a)}
J.cu=function(a){return J.bG(a).gd8(a)}
J.bR=function(a,b){return J.j(a).R(a,b)}
J.eD=function(a){return J.j(a).a5(a)}
J.eE=function(a,b){return J.j(a).an(a,b)}
J.eF=function(a,b,c){return J.j(a).ao(a,b,c)}
J.cv=function(a,b,c){return J.j(a).as(a,b,c)}
J.eG=function(a,b){return J.j(a).bg(a,b)}
J.cw=function(a){return J.j(a).cZ(a)}
J.eH=function(a,b,c,d){return J.j(a).ax(a,b,c,d)}
J.eI=function(a){return J.cg(a).d3(a)}
J.b5=function(a){return J.B(a).k(a)}
J.eJ=function(a,b,c,d){return J.j(a).d5(a,b,c,d)}
J.eK=function(a){return J.cg(a).d6(a)}
J.eL=function(a,b,c){return J.j(a).bm(a,b,c)}
J.bS=function(a,b,c){return J.j(a).bn(a,b,c)}
J.cx=function(a,b,c){return J.j(a).bo(a,b,c)}
J.cy=function(a,b,c){return J.j(a).bp(a,b,c)}
J.cz=function(a,b,c){return J.j(a).bq(a,b,c)}
J.eM=function(a,b,c,d){return J.j(a).br(a,b,c,d)}
J.eN=function(a,b,c,d){return J.j(a).bs(a,b,c,d)}
J.eO=function(a,b){return J.j(a).bt(a,b)}
J.eP=function(a,b,c){return J.j(a).d7(a,b,c)}
J.eQ=function(a,b,c,d,e,f,g){return J.j(a).bu(a,b,c,d,e,f,g)}
I.aC=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.bm.prototype
C.H=W.bV.prototype
C.v=W.f6.prototype
C.q=W.fd.prototype
C.I=W.ff.prototype
C.J=W.fu.prototype
C.i=W.fv.prototype
C.K=W.br.prototype
C.L=J.f.prototype
C.a=J.b9.prototype
C.w=J.cS.prototype
C.d=J.cT.prototype
C.m=J.cU.prototype
C.f=J.ba.prototype
C.S=J.bb.prototype
C.z=H.fQ.prototype
C.n=H.fS.prototype
C.W=W.fT.prototype
C.A=J.fZ.prototype
C.B=W.h9.prototype
C.G=W.hx.prototype
C.u=J.aR.prototype
C.ac=W.hK.prototype
C.e=new P.iG()
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
C.x=function(hooks) { return hooks; }

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
C.y=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.T=H.o(I.aC(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.U=H.o(I.aC(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.V=H.o(I.aC([]),[P.d])
C.r=H.o(I.aC(["bind","if","ref","repeat","syntax"]),[P.d])
C.t=H.o(I.aC(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
C.X=new G.z("vec3","vertex btangents",0)
C.c=new G.z("vec3","",0)
C.Y=new G.z("vec4","delta from light",0)
C.o=new G.z("","",0)
C.C=new G.z("vec3","vertex coordinates",0)
C.Z=new G.z("vec3","vertex binormals",0)
C.D=new G.z("vec4","for wireframe",0)
C.a_=new G.z("vec4","per vertex color",0)
C.a0=new G.z("float","for normal maps",0)
C.j=new G.z("mat4","",0)
C.a2=new G.z("mat4","",4)
C.a1=new G.z("mat4","",128)
C.b=new G.z("float","",0)
C.a3=new G.z("float","",4)
C.a4=new G.z("float","depth for shadowmaps",0)
C.h=new G.z("sampler2D","",0)
C.a5=new G.z("float","for bump maps",0)
C.a6=new G.z("vec2","texture uvs",0)
C.a7=new G.z("float","time since program start in sec",0)
C.k=new G.z("vec2","",0)
C.a8=new G.z("samplerCube","",0)
C.l=new G.z("vec4","",0)
C.a9=new G.z("vec3","vertex normals",0)
C.aa=new G.z("sampler2DShadow","",0)
C.E=new G.z("vec3","per vertex color",0)
C.F=new G.z("mat3","",0)
C.ab=new G.z("vec3","vertex tangents",0)
$.a4=0
$.aG=null
$.cC=null
$.ca=!1
$.dR=null
$.dJ=null
$.dX=null
$.bE=null
$.bJ=null
$.ci=null
$.aA=null
$.aT=null
$.aU=null
$.cb=!1
$.E=C.e
$.aa=null
$.bX=null
$.cN=null
$.cM=null
$.cJ=null
$.cI=null
$.cH=null
$.cG=null
$.dO=0
$.f3=" // range is [0, 1] \n vec3 HUEtoRGB(float hue) {\n    float r = clamp(abs(hue * 6.0 - 3.0) - 1.0, 0.0, 1.0);\n    float g = clamp(2.0 - abs(hue * 6.0 - 2.0), 0.0, 1.0);\n    float b = clamp(2.0 - abs(hue * 6.0 - 4.0), 0.0, 1.0);\n    return vec3(r, g, b);\n }\n \n vec3 HSLtoRGB(vec3 HSL) {\n     vec3 RGB = HUEtoRGB(HSL.x);\n     float C = (1.0 - abs(2.0 * HSL.z - 1.0)) * HSL.y;\n     return (RGB - 0.5) * C + HSL.z;\n  }\n"
$.jX="   #define D 3\n   // default:\n   // const float ampls[D] = float[](1.0, 0.5, 0.25);\n\n   const float freqs[D] = float[](1.0, 2.0, 4.0);\n  \n   float ComplexNoise(vec2 xy, \n                      float baseFreq, float freqs[D], \n                      float baseAmpl, float ampls[D]) {\n       float total = 0.0;\n       for(int i = 0; i < D; i++) {\n           total += baseAmpl * ampls[i] * snoise3(vec3(xy * baseFreq * freqs[i], uTime * uSpeed));\n       }             \n       return total;\n   }\n   \n   float Standard(vec2 xy) {\n       float ampls[D] = float[](uAmpl1, uAmpl2, uAmpl3);\n       return ComplexNoise(xy, uFreqMul, freqs, uAmplMul, ampls);\n   }\n \n   float Marble(vec2 xy) {\n       float ampls[D] = float[](uAmpl1, uAmpl2, uAmpl3);\n       float n = ComplexNoise(xy, uFreqMul, freqs, uAmplMul, ampls);\n       return abs(cos(xy.x * 0.008 + xy.y * 0.008 + 4.0 * n)); \n   }\n   \n   float Wood(vec2 xy) {\n       float ampls[D] = float[](uAmpl1, uAmpl2, uAmpl3);\n       vec2 p = xy / 40.0;\n       float n = ComplexNoise(xy, uFreqMul, freqs, uAmplMul, ampls);\n       return cos((length(p) + n) * 4.0); \n   \n       //float n = 0.4 * snoise2(xy * 0.005);   \n       //float n = ComplexNoise(xy, 0.01, freqs, 0.2, ampls);\n   }  \n\n   vec3 Cloud(vec2 xy) {\n       float ampls[D] = float[](uAmpl1, uAmpl2, uAmpl3);\n       float n = ComplexNoise(xy, uFreqMul, freqs, uAmplMul, ampls);\n       return HSLtoRGB(vec3(0.66, 1.0, 0.75 + n / 4.0));\n   }  \n   \n   void main() {\n       // This are pixel coordinates  0, 0 being lowel left\n       vec2 xy = gl_FragCoord.xy - 0.5 * uCanvasSize;\n       \n       // see simple_noise.html for mode coding \n       if (uMode == 4.0) {\n           oFragColor.g = Marble(xy);\n       } else if (uMode == 3.0) {\n           oFragColor.rgb = Cloud(xy);\n       } else if (uMode == 2.0) {\n           oFragColor.g = Wood(xy);\n       } else {\n           oFragColor.g =  Standard(xy);\n       }\n   }\n "
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
I.$lazy(y,x,w)}})(["kb","e_",function(){return H.dQ("_$dart_dartClosure")},"kP","cm",function(){return H.dQ("_$dart_js")},"lC","e0",function(){return H.a6(H.bw({
toString:function(){return"$receiver$"}}))},"lD","e1",function(){return H.a6(H.bw({$method$:null,
toString:function(){return"$receiver$"}}))},"lE","e2",function(){return H.a6(H.bw(null))},"lF","e3",function(){return H.a6(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"lI","e6",function(){return H.a6(H.bw(void 0))},"lJ","e7",function(){return H.a6(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"lH","e5",function(){return H.a6(H.dd(null))},"lG","e4",function(){return H.a6(function(){try{null.$method$}catch(z){return z.message}}())},"lL","e9",function(){return H.a6(H.dd(void 0))},"lK","e8",function(){return H.a6(function(){try{(void 0).$method$}catch(z){return z.message}}())},"lW","cn",function(){return P.hN()},"mb","b2",function(){return[]},"k8","dZ",function(){return{}},"m2","ea",function(){return P.c1(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"m3","co",function(){return P.ab(P.d,P.b7)},"m9","a2",function(){return P.cY(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.E,"aColorAlpha",C.a_,"aPosition",C.C,"aTexUV",C.a6,"aNormal",C.a9,"aBinormal",C.Z,"aCenter",C.D,"aPointSize",C.b,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ab,"aBitangent",C.X,"iaRotation",C.l,"iaTranslation",C.c,"iaScale",C.b,"iaColor",C.c,"vColor",C.E,"vTexUV",C.k,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.C,"vPositionFromLight",C.Y,"vCenter",C.D,"vDepth",C.a4,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.F,"uConvolutionMatrix",C.F,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.aa,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a8,"uAnimationTable",C.h,"uTime",C.a7,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.c,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a1,"uLightDescs",C.a2,"uLightCount",C.b,"uLightTypes",C.a3,"uBumpScale",C.a5,"uNormalScale",C.a0],P.d,G.z)},"mg","ec",function(){var z,y
z=G.d8("nullShaderV")
y=[P.d]
z.bM(H.o(["aPosition"],y))
z.aC(H.o(["void main() {\n  gl_Position = vec4(aPosition, 1.0);\n}\n"],y))
return z},"mf","eb",function(){var z,y
z=G.d8("noiseShaderF")
y=[P.d]
z.bP(H.o(["uTime","uCanvasSize","uAmpl1","uAmpl2","uAmpl3","uAmplMul","uFreqMul","uMode","uSpeed"],y))
z.aC(H.o([$.f3,"vec2 mod289(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute(vec3 x) {\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n","float snoise3(vec3 v) { \n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i); \n  vec4 p = permute( permute( permute( \n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) \n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), \n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n",$.jX],y))
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.I},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.I,args:[,]},{func:1,ret:P.I,args:[,,]},{func:1,ret:P.d,args:[P.A]},{func:1,ret:P.M,args:[W.a5]},{func:1,ret:P.M,args:[P.d]},{func:1,ret:P.M,args:[W.S,P.d,P.d,W.be]},{func:1,args:[,P.d]},{func:1,args:[P.d]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:P.I,args:[,],opt:[P.Z]},{func:1,ret:[P.a7,,],args:[,]},{func:1,ret:P.M,args:[W.r]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.I,args:[P.F]},{func:1,args:[W.T]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.r,W.r]},{func:1,ret:P.A,args:[P.A,P.c]},{func:1,ret:P.I,args:[W.T]},{func:1,ret:-1,args:[P.F]},{func:1,ret:P.A,args:[,,]}]
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
if(x==y)H.jZ(d||a)
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
Isolate.aC=a.aC
Isolate.aY=a.aY
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
if(typeof dartMainRunner==="function")dartMainRunner(R.dU,[])
else R.dU([])})})()
//# sourceMappingURL=simplex_noise.dart.js.map
