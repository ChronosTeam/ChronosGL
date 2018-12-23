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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.c6"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.c6"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.c6(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.aT=function(){}
var dart=[["","",,H,{"^":"",kc:{"^":"b;a"}}],["","",,J,{"^":"",
c9:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bz:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.c8==null){H.j9()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.d2("Return interceptor for "+H.d(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cc()]
if(v!=null)return v
v=H.je(a)
if(v!=null)return v
if(typeof a=="function")return C.J
y=Object.getPrototypeOf(a)
if(y==null)return C.v
if(y===Object.prototype)return C.v
if(typeof w=="function"){Object.defineProperty(w,$.cc(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
e:{"^":"b;",
v:function(a,b){return a===b},
gt:function(a){return H.aI(a)},
j:["bN",function(a){return"Instance of '"+H.aJ(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fe:{"^":"e;",
j:function(a){return String(a)},
gt:function(a){return a?519018:218159},
$isc3:1},
fg:{"^":"e;",
v:function(a,b){return null==b},
j:function(a){return"null"},
gt:function(a){return 0},
$isJ:1},
bQ:{"^":"e;",
gt:function(a){return 0},
j:["bO",function(a){return String(a)}]},
fB:{"^":"bQ;"},
aM:{"^":"bQ;"},
b5:{"^":"bQ;",
j:function(a){var z=a[$.dG()]
if(z==null)return this.bO(a)
return"JavaScript function for "+H.d(J.bh(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbN:1},
b3:{"^":"e;$ti",
l:function(a,b){H.v(b,H.q(a,0))
if(!!a.fixed$length)H.a8(P.z("add"))
a.push(b)},
co:function(a,b){var z,y
H.w(b,"$isi",[H.q(a,0)],"$asi")
if(!!a.fixed$length)H.a8(P.z("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.I)(b),++y)a.push(b[y])},
U:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.d(a[y]))
return z.join(b)},
gcK:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.c(H.fc())},
bK:function(a,b){if(!!a.immutable$list)H.a8(P.z("sort"))
H.h1(a,J.iL(),H.q(a,0))},
a3:function(a){return this.bK(a,null)},
j:function(a){return P.bO(a,"[","]")},
gw:function(a){return new J.ex(a,a.length,0,[H.q(a,0)])},
gt:function(a){return H.aI(a)},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.aS(a,b))
return a[b]},
i:function(a,b,c){H.v(c,H.q(a,0))
if(!!a.immutable$list)H.a8(P.z("indexed set"))
if(b>=a.length||b<0)throw H.c(H.aS(a,b))
a[b]=c},
$ist:1,
$ast:I.aT,
$isi:1,
$isa:1,
p:{
fd:function(a,b){return J.bP(H.l(a,[b]))},
bP:function(a){H.bc(a)
a.fixed$length=Array
return a},
ka:[function(a,b){return J.e3(H.dz(a,"$isO"),H.dz(b,"$isO"))},"$2","iL",8,0,20]}},
kb:{"^":"b3;$ti"},
ex:{"^":"b;a,b,c,0d,$ti",
saG:function(a){this.d=H.v(a,H.q(this,0))},
gC:function(a){return this.d},
u:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.I(z))
x=this.c
if(x>=y){this.saG(null)
return!1}this.saG(z[x]);++this.c
return!0}},
bn:{"^":"e;",
O:function(a,b){var z
H.ca(b)
if(typeof b!=="number")throw H.c(H.b8(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gai(b)
if(this.gai(a)===z)return 0
if(this.gai(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gai:function(a){return a===0?1/a<0:a<0},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gt:function(a){return a&0x1FFFFFFF},
bP:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.aX(a,b)},
T:function(a,b){return(a|0)===a?a/b|0:this.aX(a,b)},
aX:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.z("Result of truncating division is "+H.d(z)+": "+H.d(a)+" ~/ "+b))},
aV:function(a,b){var z
if(a>0)z=this.cl(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
cl:function(a,b){return b>31?0:a>>>b},
M:function(a,b){if(typeof b!=="number")throw H.c(H.b8(b))
return a>b},
$isO:1,
$asO:function(){return[P.F]},
$isT:1,
$isF:1},
cH:{"^":"bn;",$isB:1},
ff:{"^":"bn;"},
b4:{"^":"e;",
a4:function(a,b){if(b>=a.length)throw H.c(H.aS(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.x(b)
if(typeof b!=="string")throw H.c(P.cs(b,null,null))
return a+b},
bM:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bo(b,null,null))
if(b>c)throw H.c(P.bo(b,null,null))
if(c>a.length)throw H.c(P.bo(c,null,null))
return a.substring(b,c)},
bL:function(a,b){return this.bM(a,b,null)},
cw:function(a,b,c){if(c>a.length)throw H.c(P.fL(c,0,a.length,null,null))
return H.jk(a,b,c)},
O:function(a,b){var z
H.x(b)
if(typeof b!=="string")throw H.c(H.b8(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
j:function(a){return a},
gt:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.aS(a,b))
return a[b]},
$ist:1,
$ast:I.aT,
$isO:1,
$asO:function(){return[P.f]},
$isfz:1,
$isf:1}}],["","",,H,{"^":"",
fc:function(){return new P.cW("No element")},
h1:function(a,b,c){H.w(a,"$isa",[c],"$asa")
H.m(b,{func:1,ret:P.B,args:[c,c]})
H.b7(a,0,J.b0(a)-1,b,c)},
b7:function(a,b,c,d,e){H.w(a,"$isa",[e],"$asa")
H.m(d,{func:1,ret:P.B,args:[e,e]})
if(c-b<=32)H.h0(a,b,c,d,e)
else H.h_(a,b,c,d,e)},
h0:function(a,b,c,d,e){var z,y,x,w,v
H.w(a,"$isa",[e],"$asa")
H.m(d,{func:1,ret:P.B,args:[e,e]})
for(z=b+1,y=J.aU(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.a_(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
h_:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.w(a,"$isa",[a2],"$asa")
H.m(a1,{func:1,ret:P.B,args:[a2,a2]})
z=C.f.T(a0-b+1,6)
y=b+z
x=a0-z
w=C.f.T(b+a0,2)
v=w-z
u=w+z
t=J.aU(a)
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
if(J.ay(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.V()
if(i<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.M()
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
if(typeof e!=="number")return e.V()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.M()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.M()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.V()
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
H.b7(a,b,m-2,a1,a2)
H.b7(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.ay(a1.$2(t.h(a,m),r),0);)++m
for(;J.ay(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.V()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.b7(a,m,l,a1,a2)}else H.b7(a,m,l,a1,a2)},
eX:{"^":"i;"},
fl:{"^":"b;a,b,c,0d,$ti",
saH:function(a){this.d=H.v(a,H.q(this,0))},
gC:function(a){return this.d},
u:function(){var z,y,x,w
z=this.a
y=J.aU(z)
x=y.gk(z)
if(this.b!==x)throw H.c(P.aC(z))
w=this.c
if(w>=x){this.saH(null)
return!1}this.saH(y.q(z,w));++this.c
return!0}},
bm:{"^":"b;$ti"}}],["","",,H,{"^":"",
aq:function(a){var z,y
z=H.x(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
j3:function(a){return init.types[H.N(a)]},
jc:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.A(a).$isu},
d:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bh(a)
if(typeof z!=="string")throw H.c(H.b8(a))
return z},
aI:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aJ:function(a){return H.fC(a)+H.bt(H.ao(a),0,null)},
fC:function(a){var z,y,x,w,v,u,t,s,r
z=J.A(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.C||!!z.$isaM){u=C.u(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aq(w.length>1&&C.i.a4(w,0)===36?C.i.bL(w,1):w)},
as:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
fJ:function(a){var z=H.as(a).getFullYear()+0
return z},
fH:function(a){var z=H.as(a).getMonth()+1
return z},
fD:function(a){var z=H.as(a).getDate()+0
return z},
fE:function(a){var z=H.as(a).getHours()+0
return z},
fG:function(a){var z=H.as(a).getMinutes()+0
return z},
fI:function(a){var z=H.as(a).getSeconds()+0
return z},
fF:function(a){var z=H.as(a).getMilliseconds()+0
return z},
ap:function(a){throw H.c(H.b8(a))},
h:function(a,b){if(a==null)J.b0(a)
throw H.c(H.aS(a,b))},
aS:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ar(!0,b,"index",null)
z=H.N(J.b0(a))
if(!(b<0)){if(typeof z!=="number")return H.ap(z)
y=b>=z}else y=!0
if(y)return P.D(b,a,"index",null,z)
return P.bo(b,"index",null)},
b8:function(a){return new P.ar(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.cR()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.dC})
z.name=""}else z.toString=H.dC
return z},
dC:function(){return J.bh(this.dartException)},
a8:function(a){throw H.c(a)},
I:function(a){throw H.c(P.aC(a))},
aX:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.jm(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.aV(x,16)&8191)===10)switch(w){case 438:return z.$1(H.bR(H.d(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.cQ(H.d(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.dJ()
u=$.dK()
t=$.dL()
s=$.dM()
r=$.dP()
q=$.dQ()
p=$.dO()
$.dN()
o=$.dS()
n=$.dR()
m=v.F(y)
if(m!=null)return z.$1(H.bR(H.x(y),m))
else{m=u.F(y)
if(m!=null){m.method="call"
return z.$1(H.bR(H.x(y),m))}else{m=t.F(y)
if(m==null){m=s.F(y)
if(m==null){m=r.F(y)
if(m==null){m=q.F(y)
if(m==null){m=p.F(y)
if(m==null){m=s.F(y)
if(m==null){m=o.F(y)
if(m==null){m=n.F(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.cQ(H.x(y),m))}}return z.$1(new H.hk(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.cV()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ar(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.cV()
return a},
aV:function(a){var z
if(a==null)return new H.df(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.df(a)},
iY:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
jb:function(a,b,c,d,e,f){H.j(a,"$isbN")
switch(H.N(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.cD("Unsupported number of arguments for wrapped closure"))},
aR:function(a,b){var z
H.N(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.jb)
a.$identity=z
return z},
eJ:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.A(d).$isa){z.$reflectionInfo=d
x=H.fN(z).r}else x=d
w=e?Object.create(new H.h3().constructor.prototype):Object.create(new H.bK(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a0
if(typeof u!=="number")return u.D()
$.a0=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.cw(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.j3,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cu:H.bL
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.c("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cw(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
eG:function(a,b,c,d){var z=H.bL
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cw:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.eI(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.eG(y,!w,z,b)
if(y===0){w=$.a0
if(typeof w!=="number")return w.D()
$.a0=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aA
if(v==null){v=H.bi("self")
$.aA=v}return new Function(w+H.d(v)+";return "+u+"."+H.d(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a0
if(typeof w!=="number")return w.D()
$.a0=w+1
t+=w
w="return function("+t+"){return this."
v=$.aA
if(v==null){v=H.bi("self")
$.aA=v}return new Function(w+H.d(v)+"."+H.d(z)+"("+t+");}")()},
eH:function(a,b,c,d){var z,y
z=H.bL
y=H.cu
switch(b?-1:a){case 0:throw H.c(H.fT("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
eI:function(a,b){var z,y,x,w,v,u,t,s
z=$.aA
if(z==null){z=H.bi("self")
$.aA=z}y=$.ct
if(y==null){y=H.bi("receiver")
$.ct=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.eH(w,!u,x,b)
if(w===1){z="return function(){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+");"
y=$.a0
if(typeof y!=="number")return y.D()
$.a0=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+", "+s+");"
y=$.a0
if(typeof y!=="number")return y.D()
$.a0=y+1
return new Function(z+y+"}")()},
c6:function(a,b,c,d,e,f,g){return H.eJ(a,b,H.N(c),d,!!e,!!f,g)},
x:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.Y(a,"String"))},
ds:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.Y(a,"double"))},
ca:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.Y(a,"num"))},
c4:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.Y(a,"bool"))},
N:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.Y(a,"int"))},
cb:function(a,b){throw H.c(H.Y(a,H.aq(H.x(b).substring(3))))},
ji:function(a,b){throw H.c(H.cv(a,H.aq(H.x(b).substring(3))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.A(a)[b])return a
H.cb(a,b)},
a7:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.A(a)[b]
else z=!0
if(z)return a
H.ji(a,b)},
dz:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.A(a)[b])return a
H.cb(a,b)},
bc:function(a){if(a==null)return a
if(!!J.A(a).$isa)return a
throw H.c(H.Y(a,"List<dynamic>"))},
jd:function(a,b){var z
if(a==null)return a
z=J.A(a)
if(!!z.$isa)return a
if(z[b])return a
H.cb(a,b)},
c7:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.N(z)]
else return a.$S()}return},
b9:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.c7(J.A(a))
if(z==null)return!1
return H.di(z,null,b,null)},
m:function(a,b){var z,y
if(a==null)return a
if($.c0)return a
$.c0=!0
try{if(H.b9(a,b))return a
z=H.bd(b)
y=H.Y(a,z)
throw H.c(y)}finally{$.c0=!1}},
bx:function(a,b){if(a!=null&&!H.c5(a,b))H.a8(H.Y(a,H.bd(b)))
return a},
dm:function(a){var z,y
z=J.A(a)
if(!!z.$isr){y=H.c7(z)
if(y!=null)return H.bd(y)
return"Closure"}return H.aJ(a)},
jl:function(a){throw H.c(new P.eO(H.x(a)))},
dv:function(a){return init.getIsolateTag(a)},
l:function(a,b){a.$ti=b
return a},
ao:function(a){if(a==null)return
return a.$ti},
lw:function(a,b,c){return H.aW(a["$as"+H.d(c)],H.ao(b))},
ba:function(a,b,c,d){var z
H.x(c)
H.N(d)
z=H.aW(a["$as"+H.d(c)],H.ao(b))
return z==null?null:z[d]},
q:function(a,b){var z
H.N(b)
z=H.ao(a)
return z==null?null:z[b]},
bd:function(a){return H.an(a,null)},
an:function(a,b){var z,y
H.w(b,"$isa",[P.f],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aq(a[0].builtin$cls)+H.bt(a,1,b)
if(typeof a=="function")return H.aq(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.N(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.d(b[y])}if('func' in a)return H.iK(a,b)
if('futureOr' in a)return"FutureOr<"+H.an("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
iK:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.f]
H.w(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.l([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.h(b,r)
t=C.i.D(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.an(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.an(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.an(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.an(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.iX(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.x(z[l])
n=n+m+H.an(i[h],b)+(" "+H.d(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bt:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isa",[P.f],"$asa")
if(a==null)return""
z=new P.bV("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.an(u,c)}return"<"+z.j(0)+">"},
j2:function(a){var z,y,x,w
z=J.A(a)
if(!!z.$isr){y=H.c7(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ao(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aW:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aQ:function(a,b,c,d){var z,y
H.x(b)
H.bc(c)
H.x(d)
if(a==null)return!1
z=H.ao(a)
y=J.A(a)
if(y[b]==null)return!1
return H.dq(H.aW(y[d],z),null,c,null)},
be:function(a,b,c,d){H.x(b)
H.bc(c)
H.x(d)
if(a==null)return a
if(H.aQ(a,b,c,d))return a
throw H.c(H.cv(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aq(b.substring(3))+H.bt(c,0,null),init.mangledGlobalNames)))},
w:function(a,b,c,d){H.x(b)
H.bc(c)
H.x(d)
if(a==null)return a
if(H.aQ(a,b,c,d))return a
throw H.c(H.Y(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aq(b.substring(3))+H.bt(c,0,null),init.mangledGlobalNames)))},
dq:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.R(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.R(a[y],b,c[y],d))return!1
return!0},
lu:function(a,b,c){return a.apply(b,H.aW(J.A(b)["$as"+H.d(c)],H.ao(b)))},
dx:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="J"||a===-1||a===-2||H.dx(z)}return!1},
c5:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="J"||b===-1||b===-2||H.dx(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.c5(a,"type" in b?b.type:null))return!0
if('func' in b)return H.b9(a,b)}z=J.A(a).constructor
y=H.ao(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.R(z,null,b,null)},
v:function(a,b){if(a!=null&&!H.c5(a,b))throw H.c(H.Y(a,H.bd(b)))
return a},
R:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.R(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="J")return!0
if('func' in c)return H.di(a,b,c,d)
if('func' in a)return c.builtin$cls==="bN"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.R("type" in a?a.type:null,b,x,d)
else if(H.R(a,b,x,d))return!0
else{if(!('$is'+"aE" in y.prototype))return!1
w=y.prototype["$as"+"aE"]
v=H.aW(w,z?a.slice(1):null)
return H.R(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.dq(H.aW(r,z),b,u,d)},
di:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.R(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.R(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.R(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.R(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.jh(m,b,l,d)},
jh:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.R(c[w],d,a[w],b))return!1}return!0},
lv:function(a,b,c){Object.defineProperty(a,H.x(b),{value:c,enumerable:false,writable:true,configurable:true})},
je:function(a){var z,y,x,w,v,u
z=H.x($.dw.$1(a))
y=$.bw[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bA[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.x($.dp.$2(a,z))
if(z!=null){y=$.bw[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bA[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bB(x)
$.bw[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bA[z]=x
return x}if(v==="-"){u=H.bB(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.dA(a,x)
if(v==="*")throw H.c(P.d2(z))
if(init.leafTags[z]===true){u=H.bB(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.dA(a,x)},
dA:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.c9(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bB:function(a){return J.c9(a,!1,null,!!a.$isu)},
jg:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bB(z)
else return J.c9(z,c,null,null)},
j9:function(){if(!0===$.c8)return
$.c8=!0
H.ja()},
ja:function(){var z,y,x,w,v,u,t,s
$.bw=Object.create(null)
$.bA=Object.create(null)
H.j5()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.dB.$1(v)
if(u!=null){t=H.jg(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
j5:function(){var z,y,x,w,v,u,t
z=C.G()
z=H.aw(C.D,H.aw(C.I,H.aw(C.t,H.aw(C.t,H.aw(C.H,H.aw(C.E,H.aw(C.F(C.u),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.dw=new H.j6(v)
$.dp=new H.j7(u)
$.dB=new H.j8(t)},
aw:function(a,b){return a(b)||b},
jk:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fM:{"^":"b;a,b,c,d,e,f,r,0x",p:{
fN:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bP(z)
y=z[0]
x=z[1]
return new H.fM(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
he:{"^":"b;a,b,c,d,e,f",
F:function(a){var z,y,x
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
if(z==null)z=H.l([],[P.f])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.he(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bq:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
d0:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
fx:{"^":"K;a,b",
j:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
cQ:function(a,b){return new H.fx(a,b==null?null:b.method)}}},
fh:{"^":"K;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.d(this.a)+")"},
p:{
bR:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fh(a,y,z?null:b.receiver)}}},
hk:{"^":"K;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
jm:{"^":"r:4;a",
$1:function(a){if(!!J.A(a).$isK)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
df:{"^":"b;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isX:1},
r:{"^":"b;",
j:function(a){return"Closure '"+H.aJ(this).trim()+"'"},
gbJ:function(){return this},
$isbN:1,
gbJ:function(){return this}},
cY:{"^":"r;"},
h3:{"^":"cY;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aq(z)+"'"}},
bK:{"^":"cY;a,b,c,d",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bK))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gt:function(a){var z,y
z=this.c
if(z==null)y=H.aI(this.a)
else y=typeof z!=="object"?J.az(z):H.aI(z)
return(y^H.aI(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.aJ(z)+"'")},
p:{
bL:function(a){return a.a},
cu:function(a){return a.c},
bi:function(a){var z,y,x,w,v
z=new H.bK("self","target","receiver","name")
y=J.bP(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
hf:{"^":"K;a",
j:function(a){return this.a},
p:{
Y:function(a,b){return new H.hf("TypeError: "+P.bl(a)+": type '"+H.dm(a)+"' is not a subtype of type '"+b+"'")}}},
eE:{"^":"K;a",
j:function(a){return this.a},
p:{
cv:function(a,b){return new H.eE("CastError: "+P.bl(a)+": type '"+H.dm(a)+"' is not a subtype of type '"+b+"'")}}},
fS:{"^":"K;a",
j:function(a){return"RuntimeError: "+H.d(this.a)},
p:{
fT:function(a){return new H.fS(a)}}},
d1:{"^":"b;a,0b,0c,0d",
ga_:function(){var z=this.b
if(z==null){z=H.bd(this.a)
this.b=z}return z},
j:function(a){return this.ga_()},
gt:function(a){var z=this.d
if(z==null){z=C.i.gt(this.ga_())
this.d=z}return z},
v:function(a,b){if(b==null)return!1
return b instanceof H.d1&&this.ga_()===b.ga_()}},
cI:{"^":"fm;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gJ:function(a){return new H.ac(this,[H.q(this,0)])},
a1:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.c9(z,b)}else{y=this.cI(b)
return y}},
cI:function(a){var z=this.d
if(z==null)return!1
return this.ah(this.aa(z,J.az(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.Y(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.Y(w,b)
x=y==null?null:y.b
return x}else return this.cJ(b)},
cJ:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aa(z,J.az(a)&0x3ffffff)
x=this.ah(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.v(b,H.q(this,0))
H.v(c,H.q(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.ab()
this.b=z}this.aJ(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ab()
this.c=y}this.aJ(y,b,c)}else{x=this.d
if(x==null){x=this.ab()
this.d=x}w=J.az(b)&0x3ffffff
v=this.aa(x,w)
if(v==null)this.ae(x,w,[this.ac(b,c)])
else{u=this.ah(v,b)
if(u>=0)v[u].b=c
else v.push(this.ac(b,c))}}},
B:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aC(this))
z=z.c}},
aJ:function(a,b,c){var z
H.v(b,H.q(this,0))
H.v(c,H.q(this,1))
z=this.Y(a,b)
if(z==null)this.ae(a,b,this.ac(b,c))
else z.b=c},
aT:function(){this.r=this.r+1&67108863},
ac:function(a,b){var z,y
z=new H.fi(H.v(a,H.q(this,0)),H.v(b,H.q(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.aT()
return z},
ah:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.ay(a[y].a,b))return y
return-1},
j:function(a){return P.cM(this)},
Y:function(a,b){return a[b]},
aa:function(a,b){return a[b]},
ae:function(a,b,c){a[b]=c},
ca:function(a,b){delete a[b]},
c9:function(a,b){return this.Y(a,b)!=null},
ab:function(){var z=Object.create(null)
this.ae(z,"<non-identifier-key>",z)
this.ca(z,"<non-identifier-key>")
return z},
$iscJ:1},
fi:{"^":"b;a,b,0c,0d"},
ac:{"^":"eX;a,$ti",
gk:function(a){return this.a.a},
gw:function(a){var z,y
z=this.a
y=new H.fj(z,z.r,this.$ti)
y.c=z.e
return y}},
fj:{"^":"b;a,b,0c,0d,$ti",
saI:function(a){this.d=H.v(a,H.q(this,0))},
gC:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aC(z))
else{z=this.c
if(z==null){this.saI(null)
return!1}else{this.saI(z.a)
this.c=this.c.c
return!0}}}},
j6:{"^":"r:4;a",
$1:function(a){return this.a(a)}},
j7:{"^":"r:8;a",
$2:function(a,b){return this.a(a,b)}},
j8:{"^":"r:9;a",
$1:function(a){return this.a(H.x(a))}}}],["","",,H,{"^":"",
iX:function(a){return J.fd(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
bC:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bs:function(a){var z,y
if(!!J.A(a).$ist)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.i(z,y,a[y])
return z},
a5:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.aS(b,a))},
fv:{"^":"e;",$ishg:1,"%":"DataView;ArrayBufferView;bS|d9|da|cP|db|dc|ae"},
bS:{"^":"fv;",
gk:function(a){return a.length},
$ist:1,
$ast:I.aT,
$isu:1,
$asu:I.aT},
cP:{"^":"da;",
h:function(a,b){H.a5(b,a,a.length)
return a[b]},
i:function(a,b,c){H.ds(c)
H.a5(b,a,a.length)
a[b]=c},
$asbm:function(){return[P.T]},
$asn:function(){return[P.T]},
$isi:1,
$asi:function(){return[P.T]},
$isa:1,
$asa:function(){return[P.T]},
"%":"Float64Array"},
ae:{"^":"dc;",
i:function(a,b,c){H.N(c)
H.a5(b,a,a.length)
a[b]=c},
$asbm:function(){return[P.B]},
$asn:function(){return[P.B]},
$isi:1,
$asi:function(){return[P.B]},
$isa:1,
$asa:function(){return[P.B]}},
fu:{"^":"cP;",$isa6:1,"%":"Float32Array"},
kl:{"^":"ae;",
h:function(a,b){H.a5(b,a,a.length)
return a[b]},
"%":"Int16Array"},
km:{"^":"ae;",
h:function(a,b){H.a5(b,a,a.length)
return a[b]},
$isfa:1,
"%":"Int32Array"},
kn:{"^":"ae;",
h:function(a,b){H.a5(b,a,a.length)
return a[b]},
"%":"Int8Array"},
ko:{"^":"ae;",
h:function(a,b){H.a5(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
fw:{"^":"ae;",
h:function(a,b){H.a5(b,a,a.length)
return a[b]},
$isl7:1,
"%":"Uint32Array"},
kp:{"^":"ae;",
gk:function(a){return a.length},
h:function(a,b){H.a5(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
kq:{"^":"ae;",
gk:function(a){return a.length},
h:function(a,b){H.a5(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
d9:{"^":"bS+n;"},
da:{"^":"d9+bm;"},
db:{"^":"bS+n;"},
dc:{"^":"db+bm;"}}],["","",,P,{"^":"",
hr:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.iS()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aR(new P.ht(z),1)).observe(y,{childList:true})
return new P.hs(z,y,x)}else if(self.setImmediate!=null)return P.iT()
return P.iU()},
lh:[function(a){self.scheduleImmediate(H.aR(new P.hu(H.m(a,{func:1,ret:-1})),0))},"$1","iS",4,0,3],
li:[function(a){self.setImmediate(H.aR(new P.hv(H.m(a,{func:1,ret:-1})),0))},"$1","iT",4,0,3],
lj:[function(a){H.m(a,{func:1,ret:-1})
P.it(0,a)},"$1","iU",4,0,3],
iO:function(a,b){if(H.b9(a,{func:1,args:[P.b,P.X]}))return H.m(a,{func:1,ret:null,args:[P.b,P.X]})
if(H.b9(a,{func:1,args:[P.b]}))return H.m(a,{func:1,ret:null,args:[P.b]})
throw H.c(P.cs(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
iN:function(){var z,y
for(;z=$.av,z!=null;){$.aP=null
y=z.b
$.av=y
if(y==null)$.aO=null
z.a.$0()}},
ls:[function(){$.c1=!0
try{P.iN()}finally{$.aP=null
$.c1=!1
if($.av!=null)$.cd().$1(P.dr())}},"$0","dr",0,0,1],
dl:function(a){var z=new P.d3(H.m(a,{func:1,ret:-1}))
if($.av==null){$.aO=z
$.av=z
if(!$.c1)$.cd().$1(P.dr())}else{$.aO.b=z
$.aO=z}},
iR:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
z=$.av
if(z==null){P.dl(a)
$.aP=$.aO
return}y=new P.d3(a)
x=$.aP
if(x==null){y.b=z
$.aP=y
$.av=y}else{y.b=x.b
x.b=y
$.aP=y
if(y.b==null)$.aO=y}},
jj:function(a){var z,y
z={func:1,ret:-1}
H.m(a,z)
y=$.E
if(C.d===y){P.bv(null,null,C.d,a)
return}y.toString
P.bv(null,null,y,H.m(y.b0(a),z))},
bu:function(a,b,c,d,e){var z={}
z.a=d
P.iR(new P.iP(z,e))},
dj:function(a,b,c,d,e){var z,y
H.m(d,{func:1,ret:e})
y=$.E
if(y===c)return d.$0()
$.E=c
z=y
try{y=d.$0()
return y}finally{$.E=z}},
dk:function(a,b,c,d,e,f,g){var z,y
H.m(d,{func:1,ret:f,args:[g]})
H.v(e,g)
y=$.E
if(y===c)return d.$1(e)
$.E=c
z=y
try{y=d.$1(e)
return y}finally{$.E=z}},
iQ:function(a,b,c,d,e,f,g,h,i){var z,y
H.m(d,{func:1,ret:g,args:[h,i]})
H.v(e,h)
H.v(f,i)
y=$.E
if(y===c)return d.$2(e,f)
$.E=c
z=y
try{y=d.$2(e,f)
return y}finally{$.E=z}},
bv:function(a,b,c,d){var z
H.m(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.b0(d):c.cs(d,-1)
P.dl(d)},
ht:{"^":"r:5;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
hs:{"^":"r:10;a,b,c",
$1:function(a){var z,y
this.a.a=H.m(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
hu:{"^":"r:0;a",
$0:function(){this.a.$0()}},
hv:{"^":"r:0;a",
$0:function(){this.a.$0()}},
is:{"^":"b;a,0b,c",
c4:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aR(new P.iu(this,b),0),a)
else throw H.c(P.z("`setTimeout()` not found."))},
p:{
it:function(a,b){var z=new P.is(!0,0)
z.c4(a,b)
return z}}},
iu:{"^":"r:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
hx:{"^":"b;$ti"},
ip:{"^":"hx;a,$ti"},
au:{"^":"b;0a,b,c,d,e,$ti",
cM:function(a){if(this.c!==6)return!0
return this.b.b.aj(H.m(this.d,{func:1,ret:P.c3,args:[P.b]}),a.a,P.c3,P.b)},
cH:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.q(this,1)}
w=this.b.b
if(H.b9(z,{func:1,args:[P.b,P.X]}))return H.bx(w.cR(z,a.a,a.b,null,y,P.X),x)
else return H.bx(w.aj(H.m(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
a4:{"^":"b;aW:a<,b,0ck:c<,$ti",
bu:function(a,b,c){var z,y,x,w
z=H.q(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.E
if(y!==C.d){y.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.iO(b,y)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.a4(0,$.E,[c])
w=b==null?1:3
this.aK(new P.au(x,w,a,b,[z,c]))
return x},
bt:function(a,b){return this.bu(a,null,b)},
aK:function(a){var z,y
z=this.a
if(z<=1){a.a=H.j(this.c,"$isau")
this.c=a}else{if(z===2){y=H.j(this.c,"$isa4")
z=y.a
if(z<4){y.aK(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bv(null,null,z,H.m(new P.hI(this,a),{func:1,ret:-1}))}},
aU:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.j(this.c,"$isau")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.j(this.c,"$isa4")
y=u.a
if(y<4){u.aU(a)
return}this.a=y
this.c=u.c}z.a=this.Z(a)
y=this.b
y.toString
P.bv(null,null,y,H.m(new P.hN(z,this),{func:1,ret:-1}))}},
ad:function(){var z=H.j(this.c,"$isau")
this.c=null
return this.Z(z)},
Z:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
a6:function(a){var z,y,x
z=H.q(this,0)
H.bx(a,{futureOr:1,type:z})
y=this.$ti
if(H.aQ(a,"$isaE",y,"$asaE"))if(H.aQ(a,"$isa4",y,null))P.d6(a,this)
else P.hJ(a,this)
else{x=this.ad()
H.v(a,z)
this.a=4
this.c=a
P.aN(this,x)}},
aO:function(a,b){var z
H.j(b,"$isX")
z=this.ad()
this.a=8
this.c=new P.Q(a,b)
P.aN(this,z)},
$isaE:1,
p:{
hJ:function(a,b){var z,y,x
b.a=1
try{a.bu(new P.hK(b),new P.hL(b),null)}catch(x){z=H.aX(x)
y=H.aV(x)
P.jj(new P.hM(b,z,y))}},
d6:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.j(a.c,"$isa4")
if(z>=4){y=b.ad()
b.a=a.a
b.c=a.c
P.aN(b,y)}else{y=H.j(b.c,"$isau")
b.a=2
b.c=a
a.aU(y)}},
aN:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.j(y.c,"$isQ")
y=y.b
u=v.a
t=v.b
y.toString
P.bu(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.j(r,"$isQ")
y=y.b
u=r.a
t=r.b
y.toString
P.bu(null,null,y,u,t)
return}o=$.E
if(o!=q)$.E=q
else o=null
y=b.c
if(y===8)new P.hQ(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.hP(x,b,r).$0()}else if((y&2)!==0)new P.hO(z,x,b).$0()
if(o!=null)$.E=o
y=x.b
if(!!J.A(y).$isaE){if(y.a>=4){n=H.j(t.c,"$isau")
t.c=null
b=t.Z(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.d6(y,t)
return}}m=b.b
n=H.j(m.c,"$isau")
m.c=null
b=m.Z(n)
y=x.a
u=x.b
if(!y){H.v(u,H.q(m,0))
m.a=4
m.c=u}else{H.j(u,"$isQ")
m.a=8
m.c=u}z.a=m
y=m}}}},
hI:{"^":"r:0;a,b",
$0:function(){P.aN(this.a,this.b)}},
hN:{"^":"r:0;a,b",
$0:function(){P.aN(this.b,this.a.a)}},
hK:{"^":"r:5;a",
$1:function(a){var z=this.a
z.a=0
z.a6(a)}},
hL:{"^":"r:11;a",
$2:function(a,b){H.j(b,"$isX")
this.a.aO(a,b)},
$1:function(a){return this.$2(a,null)}},
hM:{"^":"r:0;a,b,c",
$0:function(){this.a.aO(this.b,this.c)}},
hQ:{"^":"r:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bq(H.m(w.d,{func:1}),null)}catch(v){y=H.aX(v)
x=H.aV(v)
if(this.d){w=H.j(this.a.a.c,"$isQ").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.j(this.a.a.c,"$isQ")
else u.b=new P.Q(y,x)
u.a=!0
return}if(!!J.A(z).$isaE){if(z instanceof P.a4&&z.gaW()>=4){if(z.gaW()===8){w=this.b
w.b=H.j(z.gck(),"$isQ")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.bt(new P.hR(t),null)
w.a=!1}}},
hR:{"^":"r:12;a",
$1:function(a){return this.a}},
hP:{"^":"r:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.q(x,0)
v=H.v(this.c,w)
u=H.q(x,1)
this.a.b=x.b.b.aj(H.m(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aX(t)
y=H.aV(t)
x=this.a
x.b=new P.Q(z,y)
x.a=!0}}},
hO:{"^":"r:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.j(this.a.a.c,"$isQ")
w=this.c
if(w.cM(z)&&w.e!=null){v=this.b
v.b=w.cH(z)
v.a=!1}}catch(u){y=H.aX(u)
x=H.aV(u)
w=H.j(this.a.a.c,"$isQ")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.Q(y,x)
s.a=!0}}},
d3:{"^":"b;a,0b"},
h5:{"^":"b;$ti",
gk:function(a){var z,y,x,w
z={}
y=new P.a4(0,$.E,[P.B])
z.a=0
x=H.q(this,0)
w=H.m(new P.h7(z,this),{func:1,ret:-1,args:[x]})
H.m(new P.h8(z,y),{func:1,ret:-1})
W.d5(this.a,this.b,w,!1,x)
return y}},
h7:{"^":"r;a,b",
$1:function(a){H.v(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.q(this.b,0)]}}},
h8:{"^":"r:0;a,b",
$0:function(){this.b.a6(this.a.a)}},
h6:{"^":"b;"},
Q:{"^":"b;a,b",
j:function(a){return H.d(this.a)},
$isK:1},
iz:{"^":"b;",$islf:1},
iP:{"^":"r:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.cR()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.j(0)
throw x}},
ib:{"^":"iz;",
cS:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
try{if(C.d===$.E){a.$0()
return}P.dj(null,null,this,a,-1)}catch(x){z=H.aX(x)
y=H.aV(x)
P.bu(null,null,this,z,H.j(y,"$isX"))}},
cT:function(a,b,c){var z,y,x
H.m(a,{func:1,ret:-1,args:[c]})
H.v(b,c)
try{if(C.d===$.E){a.$1(b)
return}P.dk(null,null,this,a,b,-1,c)}catch(x){z=H.aX(x)
y=H.aV(x)
P.bu(null,null,this,z,H.j(y,"$isX"))}},
cs:function(a,b){return new P.id(this,H.m(a,{func:1,ret:b}),b)},
b0:function(a){return new P.ic(this,H.m(a,{func:1,ret:-1}))},
ct:function(a,b){return new P.ie(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
bq:function(a,b){H.m(a,{func:1,ret:b})
if($.E===C.d)return a.$0()
return P.dj(null,null,this,a,b)},
aj:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.v(b,d)
if($.E===C.d)return a.$1(b)
return P.dk(null,null,this,a,b,c,d)},
cR:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.v(b,e)
H.v(c,f)
if($.E===C.d)return a.$2(b,c)
return P.iQ(null,null,this,a,b,c,d,e,f)}},
id:{"^":"r;a,b,c",
$0:function(){return this.a.bq(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
ic:{"^":"r:1;a,b",
$0:function(){return this.a.cS(this.b)}},
ie:{"^":"r;a,b,c",
$1:function(a){var z=this.c
return this.a.cT(this.b,H.v(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
cK:function(a,b,c){H.bc(a)
return H.w(H.iY(a,new H.cI(0,0,[b,c])),"$iscJ",[b,c],"$ascJ")},
a1:function(a,b){return new H.cI(0,0,[a,b])},
cL:function(a,b,c,d){return new P.hZ(0,0,[d])},
fb:function(a,b,c){var z,y
if(P.c2(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.l([],[P.f])
y=$.aY()
C.a.l(y,a)
try{P.iM(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.cX(b,H.jd(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
bO:function(a,b,c){var z,y,x
if(P.c2(a))return b+"..."+c
z=new P.bV(b)
y=$.aY()
C.a.l(y,a)
try{x=z
x.a=P.cX(x.gN(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gN()+c
y=z.gN()
return y.charCodeAt(0)==0?y:y},
c2:function(a){var z,y
for(z=0;y=$.aY(),z<y.length;++z)if(a===y[z])return!0
return!1},
iM:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[P.f],"$asa")
z=a.gw(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.u())return
w=H.d(z.gC(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.u()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gC(z);++x
if(!z.u()){if(x<=4){C.a.l(b,H.d(t))
return}v=H.d(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gC(z);++x
for(;z.u();t=s,s=r){r=z.gC(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2;--x}C.a.l(b,"...")
return}}u=H.d(t)
v=H.d(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.l(b,q)
C.a.l(b,u)
C.a.l(b,v)},
fk:function(a,b){var z,y,x
z=P.cL(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.I)(a),++x)z.l(0,H.v(a[x],b))
return z},
cM:function(a){var z,y,x
z={}
if(P.c2(a))return"{...}"
y=new P.bV("")
try{C.a.l($.aY(),a)
x=y
x.a=x.gN()+"{"
z.a=!0
J.ee(a,new P.fn(z,y))
z=y
z.a=z.gN()+"}"}finally{z=$.aY()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gN()
return z.charCodeAt(0)==0?z:z},
hZ:{"^":"hT;a,0b,0c,0d,0e,0f,r,$ti",
gw:function(a){return P.d8(this,this.r,H.q(this,0))},
gk:function(a){return this.a},
cv:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.j(z[b],"$isbZ")!=null}else{y=this.c8(b)
return y}},
c8:function(a){var z=this.d
if(z==null)return!1
return this.aR(this.cc(z,a),a)>=0},
l:function(a,b){var z,y
H.v(b,H.q(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.c_()
this.b=z}return this.aL(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.c_()
this.c=y}return this.aL(y,b)}else return this.c5(0,b)},
c5:function(a,b){var z,y,x
H.v(b,H.q(this,0))
z=this.d
if(z==null){z=P.c_()
this.d=z}y=this.aP(b)
x=z[y]
if(x==null)z[y]=[this.a5(b)]
else{if(this.aR(x,b)>=0)return!1
x.push(this.a5(b))}return!0},
aL:function(a,b){H.v(b,H.q(this,0))
if(H.j(a[b],"$isbZ")!=null)return!1
a[b]=this.a5(b)
return!0},
aN:function(){this.r=this.r+1&67108863},
a5:function(a){var z,y
z=new P.bZ(H.v(a,H.q(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aN()
return z},
aP:function(a){return J.az(a)&0x3ffffff},
cc:function(a,b){return a[this.aP(b)]},
aR:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.ay(a[y].a,b))return y
return-1},
p:{
c_:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bZ:{"^":"b;a,0b,0c"},
i_:{"^":"b;a,b,0c,0d,$ti",
saM:function(a){this.d=H.v(a,H.q(this,0))},
gC:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aC(z))
else{z=this.c
if(z==null){this.saM(null)
return!1}else{this.saM(H.v(z.a,H.q(this,0)))
this.c=this.c.b
return!0}}},
p:{
d8:function(a,b,c){var z=new P.i_(a,b,[c])
z.c=a.e
return z}}},
hT:{"^":"fU;"},
n:{"^":"b;$ti",
gw:function(a){return new H.fl(a,this.gk(a),0,[H.ba(this,a,"n",0)])},
q:function(a,b){return this.h(a,b)},
cG:function(a,b,c,d){var z,y,x
H.v(b,d)
H.m(c,{func:1,ret:d,args:[d,H.ba(this,a,"n",0)]})
z=this.gk(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gk(a))throw H.c(P.aC(a))}return y},
j:function(a){return P.bO(a,"[","]")}},
fm:{"^":"P;"},
fn:{"^":"r:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.d(a)
z.a=y+": "
z.a+=H.d(b)}},
P:{"^":"b;$ti",
B:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.ba(this,a,"P",0),H.ba(this,a,"P",1)]})
for(z=J.ci(this.gJ(a));z.u();){y=z.gC(z)
b.$2(y,this.h(a,y))}},
gk:function(a){return J.b0(this.gJ(a))},
j:function(a){return P.cM(a)},
$isH:1},
fV:{"^":"b;$ti",
j:function(a){return P.bO(this,"{","}")},
$isi:1,
$iskI:1},
fU:{"^":"fV;"}}],["","",,P,{"^":"",
eY:function(a){if(a instanceof H.r)return a.j(0)
return"Instance of '"+H.aJ(a)+"'"},
bl:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bh(a)
if(typeof a==="string")return JSON.stringify(a)
return P.eY(a)},
cD:function(a){return new P.hF(a)},
ax:function(a){H.bC(H.d(a))},
c3:{"^":"b;"},
"+bool":0,
bk:{"^":"b;a,b",
v:function(a,b){if(b==null)return!1
return b instanceof P.bk&&this.a===b.a&&!0},
O:function(a,b){return C.f.O(this.a,H.j(b,"$isbk").a)},
gt:function(a){var z=this.a
return(z^C.f.aV(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t,s
z=P.eP(H.fJ(this))
y=P.b1(H.fH(this))
x=P.b1(H.fD(this))
w=P.b1(H.fE(this))
v=P.b1(H.fG(this))
u=P.b1(H.fI(this))
t=P.eQ(H.fF(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isO:1,
$asO:function(){return[P.bk]},
p:{
eP:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
eQ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
b1:function(a){if(a>=10)return""+a
return"0"+a}}},
T:{"^":"F;"},
"+double":0,
aD:{"^":"b;a",
M:function(a,b){return C.f.M(this.a,H.j(b,"$isaD").a)},
v:function(a,b){if(b==null)return!1
return b instanceof P.aD&&this.a===b.a},
gt:function(a){return this.a&0x1FFFFFFF},
O:function(a,b){return C.f.O(this.a,H.j(b,"$isaD").a)},
j:function(a){var z,y,x,w,v
z=new P.eW()
y=this.a
if(y<0)return"-"+new P.aD(0-y).j(0)
x=z.$1(C.f.T(y,6e7)%60)
w=z.$1(C.f.T(y,1e6)%60)
v=new P.eV().$1(y%1e6)
return""+C.f.T(y,36e8)+":"+H.d(x)+":"+H.d(w)+"."+H.d(v)},
$isO:1,
$asO:function(){return[P.aD]},
p:{
eU:function(a,b,c,d,e,f){return new P.aD(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
eV:{"^":"r:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
eW:{"^":"r:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
K:{"^":"b;"},
cR:{"^":"K;",
j:function(a){return"Throw of null."}},
ar:{"^":"K;a,b,c,d",
ga8:function(){return"Invalid argument"+(!this.a?"(s)":"")},
ga7:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.ga8()+y+x
if(!this.a)return w
v=this.ga7()
u=P.bl(this.b)
return w+v+": "+u},
p:{
cr:function(a){return new P.ar(!1,null,null,a)},
cs:function(a,b,c){return new P.ar(!0,a,b,c)}}},
cS:{"^":"ar;e,f,a,b,c,d",
ga8:function(){return"RangeError"},
ga7:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.d(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.d(z)
else if(x>z)y=": Not in range "+H.d(z)+".."+H.d(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.d(z)}return y},
p:{
bo:function(a,b,c){return new P.cS(null,null,!0,a,b,"Value not in range")},
fL:function(a,b,c,d,e){return new P.cS(b,c,!0,a,d,"Invalid value")}}},
f9:{"^":"ar;e,k:f>,a,b,c,d",
ga8:function(){return"RangeError"},
ga7:function(){var z,y
z=H.N(this.b)
if(typeof z!=="number")return z.V()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.d(y)},
p:{
D:function(a,b,c,d,e){var z=H.N(e==null?J.b0(b):e)
return new P.f9(b,z,!0,a,c,"Index out of range")}}},
hl:{"^":"K;a",
j:function(a){return"Unsupported operation: "+this.a},
p:{
z:function(a){return new P.hl(a)}}},
hj:{"^":"K;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
d2:function(a){return new P.hj(a)}}},
cW:{"^":"K;a",
j:function(a){return"Bad state: "+this.a},
p:{
h2:function(a){return new P.cW(a)}}},
eK:{"^":"K;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bl(z)+"."},
p:{
aC:function(a){return new P.eK(a)}}},
cV:{"^":"b;",
j:function(a){return"Stack Overflow"},
$isK:1},
eO:{"^":"K;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
hF:{"^":"b;a",
j:function(a){return"Exception: "+this.a}},
B:{"^":"F;"},
"+int":0,
i:{"^":"b;$ti",
gk:function(a){var z,y
z=this.gw(this)
for(y=0;z.u();)++y
return y},
j:function(a){return P.fb(this,"(",")")}},
a:{"^":"b;$ti",$isi:1},
"+List":0,
H:{"^":"b;$ti"},
J:{"^":"b;",
gt:function(a){return P.b.prototype.gt.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
F:{"^":"b;",$isO:1,
$asO:function(){return[P.F]}},
"+num":0,
b:{"^":";",
v:function(a,b){return this===b},
gt:function(a){return H.aI(this)},
j:function(a){return"Instance of '"+H.aJ(this)+"'"},
toString:function(){return this.j(this)}},
X:{"^":"b;"},
f:{"^":"b;",$isO:1,
$asO:function(){return[P.f]},
$isfz:1},
"+String":0,
bV:{"^":"b;N:a<",
gk:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
cX:function(a,b,c){var z=J.ci(b)
if(!z.u())return a
if(c.length===0){do a+=H.d(z.gC(z))
while(z.u())}else{a+=H.d(z.gC(z))
for(;z.u();)a=a+c+H.d(z.gC(z))}return a}}}}],["","",,W,{"^":"",
br:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
d7:function(a,b,c,d){var z,y
z=W.br(W.br(W.br(W.br(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
dn:function(a,b){var z
H.m(a,{func:1,ret:-1,args:[b]})
z=$.E
if(z===C.d)return a
return z.ct(a,b)},
V:{"^":"cC;","%":"HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
jn:{"^":"e;0k:length=","%":"AccessibleNodeList"},
jo:{"^":"V;",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
jp:{"^":"V;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
eA:{"^":"e;","%":";Blob"},
aB:{"^":"V;0n:height=,0m:width=",
am:function(a,b,c){if(c!=null)return this.cd(a,b,P.iV(c,null))
return this.ce(a,b)},
al:function(a,b){return this.am(a,b,null)},
cd:function(a,b,c){return a.getContext(b,c)},
ce:function(a,b){return a.getContext(b)},
$isaB:1,
"%":"HTMLCanvasElement"},
eD:{"^":"e;",
E:function(a,b,c){return a.addColorStop(b,c)},
"%":"CanvasGradient"},
bj:{"^":"e;",
cA:function(a,b,c,d,e){return a.createLinearGradient(b,c,d,e)},
bb:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
cF:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
a2:function(a){return P.S(a.getContextAttributes())},
cO:function(a,b,c,d,e){return a.rect(b,c,d,e)},
$isbj:1,
"%":"CanvasRenderingContext2D"},
ju:{"^":"C;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
eL:{"^":"bM;",$iseL:1,"%":"CSSNumericValue|CSSUnitValue"},
jv:{"^":"eN;0k:length=","%":"CSSPerspective"},
a9:{"^":"e;",$isa9:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
jw:{"^":"hy;0k:length=",
aq:function(a,b){var z=this.cf(a,this.c7(a,b))
return z==null?"":z},
c7:function(a,b){var z,y
z=$.dF()
y=z[b]
if(typeof y==="string")return y
y=this.cm(a,b)
z[b]=y
return y},
cm:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.eR()+b
if(z in a)return z
return b},
cf:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
eM:{"^":"b;",
gn:function(a){return this.aq(a,"height")},
gm:function(a){return this.aq(a,"width")}},
bM:{"^":"e;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
eN:{"^":"e;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
jy:{"^":"bM;0k:length=","%":"CSSTransformValue"},
jz:{"^":"bM;0k:length=","%":"CSSUnparsedValue"},
jB:{"^":"e;0k:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
eS:{"^":"C;",
bp:function(a,b){return a.querySelector(b)},
"%":"XMLDocument;Document"},
jC:{"^":"e;",
j:function(a){return String(a)},
"%":"DOMException"},
jD:{"^":"hA;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.w(c,"$isM",[P.F],"$asM")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ist:1,
$ast:function(){return[[P.M,P.F]]},
$isu:1,
$asu:function(){return[[P.M,P.F]]},
$asn:function(){return[[P.M,P.F]]},
$isi:1,
$asi:function(){return[[P.M,P.F]]},
$isa:1,
$asa:function(){return[[P.M,P.F]]},
$aso:function(){return[[P.M,P.F]]},
"%":"ClientRectList|DOMRectList"},
eT:{"^":"e;",
j:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gm(a))+" x "+H.d(this.gn(a))},
v:function(a,b){var z
if(b==null)return!1
if(!H.aQ(b,"$isM",[P.F],"$asM"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.k(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gt:function(a){return W.d7(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isM:1,
$asM:function(){return[P.F]},
"%":";DOMRectReadOnly"},
jE:{"^":"hC;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.x(c)
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ist:1,
$ast:function(){return[P.f]},
$isu:1,
$asu:function(){return[P.f]},
$asn:function(){return[P.f]},
$isi:1,
$asi:function(){return[P.f]},
$isa:1,
$asa:function(){return[P.f]},
$aso:function(){return[P.f]},
"%":"DOMStringList"},
jF:{"^":"e;0k:length=","%":"DOMTokenList"},
cC:{"^":"C;",
j:function(a){return a.localName},
"%":";Element"},
jH:{"^":"V;0n:height=,0m:width=","%":"HTMLEmbedElement"},
U:{"^":"e;",$isU:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
L:{"^":"e;",
cp:function(a,b,c,d){H.m(c,{func:1,args:[W.U]})
if(c!=null)this.c6(a,b,c,!1)},
c6:function(a,b,c,d){return a.addEventListener(b,H.aR(H.m(c,{func:1,args:[W.U]}),1),!1)},
$isL:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dd|de|dg|dh"},
aa:{"^":"eA;",$isaa:1,"%":"File"},
jY:{"^":"hH;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(c,"$isaa")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.aa]},
$isu:1,
$asu:function(){return[W.aa]},
$asn:function(){return[W.aa]},
$isi:1,
$asi:function(){return[W.aa]},
$isa:1,
$asa:function(){return[W.aa]},
$aso:function(){return[W.aa]},
"%":"FileList"},
jZ:{"^":"L;0k:length=","%":"FileWriter"},
k1:{"^":"V;0k:length=","%":"HTMLFormElement"},
ab:{"^":"e;",$isab:1,"%":"Gamepad"},
k2:{"^":"e;0k:length=","%":"History"},
k3:{"^":"hV;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(c,"$isC")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.C]},
$isu:1,
$asu:function(){return[W.C]},
$asn:function(){return[W.C]},
$isi:1,
$asi:function(){return[W.C]},
$isa:1,
$asa:function(){return[W.C]},
$aso:function(){return[W.C]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
f7:{"^":"eS;","%":"HTMLDocument"},
k4:{"^":"V;0n:height=,0m:width=","%":"HTMLIFrameElement"},
k5:{"^":"e;0n:height=,0m:width=","%":"ImageBitmap"},
k6:{"^":"e;0n:height=,0m:width=","%":"ImageData"},
k7:{"^":"V;0n:height=,0m:width=","%":"HTMLImageElement"},
k9:{"^":"V;0n:height=,0m:width=","%":"HTMLInputElement"},
kf:{"^":"e;",
j:function(a){return String(a)},
"%":"Location"},
fp:{"^":"V;","%":"HTMLAudioElement;HTMLMediaElement"},
kh:{"^":"e;0k:length=","%":"MediaList"},
ki:{"^":"i0;",
h:function(a,b){return P.S(a.get(H.x(b)))},
B:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.S(y.value[1]))}},
gJ:function(a){var z=H.l([],[P.f])
this.B(a,new W.fr(z))
return z},
gk:function(a){return a.size},
$asP:function(){return[P.f,null]},
$isH:1,
$asH:function(){return[P.f,null]},
"%":"MIDIInputMap"},
fr:{"^":"r:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
kj:{"^":"i1;",
h:function(a,b){return P.S(a.get(H.x(b)))},
B:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.S(y.value[1]))}},
gJ:function(a){var z=H.l([],[P.f])
this.B(a,new W.fs(z))
return z},
gk:function(a){return a.size},
$asP:function(){return[P.f,null]},
$isH:1,
$asH:function(){return[P.f,null]},
"%":"MIDIOutputMap"},
fs:{"^":"r:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
ad:{"^":"e;",$isad:1,"%":"MimeType"},
kk:{"^":"i3;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(c,"$isad")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ad]},
$isu:1,
$asu:function(){return[W.ad]},
$asn:function(){return[W.ad]},
$isi:1,
$asi:function(){return[W.ad]},
$isa:1,
$asa:function(){return[W.ad]},
$aso:function(){return[W.ad]},
"%":"MimeTypeArray"},
ft:{"^":"hh;","%":"WheelEvent;DragEvent|MouseEvent"},
C:{"^":"L;",
j:function(a){var z=a.nodeValue
return z==null?this.bN(a):z},
$isC:1,
"%":"Attr|DocumentFragment|DocumentType|ShadowRoot;Node"},
kr:{"^":"i5;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(c,"$isC")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.C]},
$isu:1,
$asu:function(){return[W.C]},
$asn:function(){return[W.C]},
$isi:1,
$asi:function(){return[W.C]},
$isa:1,
$asa:function(){return[W.C]},
$aso:function(){return[W.C]},
"%":"NodeList|RadioNodeList"},
kt:{"^":"V;0n:height=,0m:width=","%":"HTMLObjectElement"},
kv:{"^":"L;0n:height=,0m:width=","%":"OffscreenCanvas"},
kw:{"^":"e;0n:height=,0m:width=","%":"PaintSize"},
af:{"^":"e;0k:length=",$isaf:1,"%":"Plugin"},
ky:{"^":"i9;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(c,"$isaf")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.af]},
$isu:1,
$asu:function(){return[W.af]},
$asn:function(){return[W.af]},
$isi:1,
$asi:function(){return[W.af]},
$isa:1,
$asa:function(){return[W.af]},
$aso:function(){return[W.af]},
"%":"PluginArray"},
kA:{"^":"ft;0n:height=,0m:width=","%":"PointerEvent"},
kF:{"^":"ig;",
h:function(a,b){return P.S(a.get(H.x(b)))},
B:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.S(y.value[1]))}},
gJ:function(a){var z=H.l([],[P.f])
this.B(a,new W.fR(z))
return z},
gk:function(a){return a.size},
$asP:function(){return[P.f,null]},
$isH:1,
$asH:function(){return[P.f,null]},
"%":"RTCStatsReport"},
fR:{"^":"r:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
kG:{"^":"e;0n:height=,0m:width=","%":"Screen"},
kH:{"^":"V;0k:length=","%":"HTMLSelectElement"},
ag:{"^":"L;",$isag:1,"%":"SourceBuffer"},
kJ:{"^":"de;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(c,"$isag")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ag]},
$isu:1,
$asu:function(){return[W.ag]},
$asn:function(){return[W.ag]},
$isi:1,
$asi:function(){return[W.ag]},
$isa:1,
$asa:function(){return[W.ag]},
$aso:function(){return[W.ag]},
"%":"SourceBufferList"},
ah:{"^":"e;",$isah:1,"%":"SpeechGrammar"},
kK:{"^":"ii;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(c,"$isah")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ah]},
$isu:1,
$asu:function(){return[W.ah]},
$asn:function(){return[W.ah]},
$isi:1,
$asi:function(){return[W.ah]},
$isa:1,
$asa:function(){return[W.ah]},
$aso:function(){return[W.ah]},
"%":"SpeechGrammarList"},
ai:{"^":"e;0k:length=",$isai:1,"%":"SpeechRecognitionResult"},
kN:{"^":"il;",
h:function(a,b){return this.aS(a,H.x(b))},
B:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.f,P.f]})
for(z=0;!0;++z){y=this.ci(a,z)
if(y==null)return
b.$2(y,this.aS(a,y))}},
gJ:function(a){var z=H.l([],[P.f])
this.B(a,new W.h4(z))
return z},
gk:function(a){return a.length},
aS:function(a,b){return a.getItem(b)},
ci:function(a,b){return a.key(b)},
$asP:function(){return[P.f,P.f]},
$isH:1,
$asH:function(){return[P.f,P.f]},
"%":"Storage"},
h4:{"^":"r:13;a",
$2:function(a,b){return C.a.l(this.a,a)}},
aj:{"^":"e;",$isaj:1,"%":"CSSStyleSheet|StyleSheet"},
kR:{"^":"e;0m:width=","%":"TextMetrics"},
ak:{"^":"L;",$isak:1,"%":"TextTrack"},
al:{"^":"L;",$isal:1,"%":"TextTrackCue|VTTCue"},
kS:{"^":"ir;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(c,"$isal")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.al]},
$isu:1,
$asu:function(){return[W.al]},
$asn:function(){return[W.al]},
$isi:1,
$asi:function(){return[W.al]},
$isa:1,
$asa:function(){return[W.al]},
$aso:function(){return[W.al]},
"%":"TextTrackCueList"},
kT:{"^":"dh;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(c,"$isak")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ak]},
$isu:1,
$asu:function(){return[W.ak]},
$asn:function(){return[W.ak]},
$isi:1,
$asi:function(){return[W.ak]},
$isa:1,
$asa:function(){return[W.ak]},
$aso:function(){return[W.ak]},
"%":"TextTrackList"},
kU:{"^":"e;0k:length=","%":"TimeRanges"},
am:{"^":"e;",$isam:1,"%":"Touch"},
kV:{"^":"iw;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(c,"$isam")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.am]},
$isu:1,
$asu:function(){return[W.am]},
$asn:function(){return[W.am]},
$isi:1,
$asi:function(){return[W.am]},
$isa:1,
$asa:function(){return[W.am]},
$aso:function(){return[W.am]},
"%":"TouchList"},
kW:{"^":"e;0k:length=","%":"TrackDefaultList"},
hh:{"^":"U;","%":"CompositionEvent|FocusEvent|KeyboardEvent|TextEvent|TouchEvent;UIEvent"},
l8:{"^":"e;",
j:function(a){return String(a)},
"%":"URL"},
lb:{"^":"fp;0n:height=,0m:width=","%":"HTMLVideoElement"},
lc:{"^":"L;0k:length=","%":"VideoTrackList"},
ld:{"^":"L;0n:height=,0m:width=","%":"VisualViewport"},
le:{"^":"e;0m:width=","%":"VTTRegion"},
ho:{"^":"L;",
gcq:function(a){var z,y,x
z=P.F
y=new P.a4(0,$.E,[z])
x=H.m(new W.hp(new P.ip(y,[z])),{func:1,ret:-1,args:[P.F]})
this.cb(a)
this.cj(a,W.dn(x,z))
return y},
cj:function(a,b){return a.requestAnimationFrame(H.aR(H.m(b,{func:1,ret:-1,args:[P.F]}),1))},
cb:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
hp:{"^":"r:14;a",
$1:function(a){var z=this.a
a=H.bx(H.ca(a),{futureOr:1,type:H.q(z,0)})
z=z.a
if(z.a!==0)H.a8(P.h2("Future already completed"))
z.a6(a)}},
lk:{"^":"iB;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(c,"$isa9")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.a9]},
$isu:1,
$asu:function(){return[W.a9]},
$asn:function(){return[W.a9]},
$isi:1,
$asi:function(){return[W.a9]},
$isa:1,
$asa:function(){return[W.a9]},
$aso:function(){return[W.a9]},
"%":"CSSRuleList"},
ll:{"^":"eT;",
j:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
v:function(a,b){var z
if(b==null)return!1
if(!H.aQ(b,"$isM",[P.F],"$asM"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.k(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gt:function(a){return W.d7(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
ln:{"^":"iD;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(c,"$isab")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ab]},
$isu:1,
$asu:function(){return[W.ab]},
$asn:function(){return[W.ab]},
$isi:1,
$asi:function(){return[W.ab]},
$isa:1,
$asa:function(){return[W.ab]},
$aso:function(){return[W.ab]},
"%":"GamepadList"},
lo:{"^":"iF;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(c,"$isC")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.C]},
$isu:1,
$asu:function(){return[W.C]},
$asn:function(){return[W.C]},
$isi:1,
$asi:function(){return[W.C]},
$isa:1,
$asa:function(){return[W.C]},
$aso:function(){return[W.C]},
"%":"MozNamedAttrMap|NamedNodeMap"},
lp:{"^":"iH;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(c,"$isai")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ai]},
$isu:1,
$asu:function(){return[W.ai]},
$asn:function(){return[W.ai]},
$isi:1,
$asi:function(){return[W.ai]},
$isa:1,
$asa:function(){return[W.ai]},
$aso:function(){return[W.ai]},
"%":"SpeechRecognitionResultList"},
lq:{"^":"iJ;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(c,"$isaj")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.aj]},
$isu:1,
$asu:function(){return[W.aj]},
$asn:function(){return[W.aj]},
$isi:1,
$asi:function(){return[W.aj]},
$isa:1,
$asa:function(){return[W.aj]},
$aso:function(){return[W.aj]},
"%":"StyleSheetList"},
lm:{"^":"h5;a,b,c,$ti"},
hD:{"^":"h6;a,b,c,d,e,$ti",p:{
d5:function(a,b,c,d,e){var z=W.dn(new W.hE(c),W.U)
if(z!=null&&!0)C.A.cp(a,b,z,!1)
return new W.hD(0,a,b,z,!1,[e])}}},
hE:{"^":"r:15;a",
$1:function(a){return this.a.$1(H.j(a,"$isU"))}},
o:{"^":"b;$ti",
gw:function(a){return new W.f_(a,this.gk(a),-1,[H.ba(this,a,"o",0)])}},
f_:{"^":"b;a,b,c,0d,$ti",
saQ:function(a){this.d=H.v(a,H.q(this,0))},
u:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.saQ(J.aZ(this.a,z))
this.c=z
return!0}this.saQ(null)
this.c=y
return!1},
gC:function(a){return this.d}},
hy:{"^":"e+eM;"},
hz:{"^":"e+n;"},
hA:{"^":"hz+o;"},
hB:{"^":"e+n;"},
hC:{"^":"hB+o;"},
hG:{"^":"e+n;"},
hH:{"^":"hG+o;"},
hU:{"^":"e+n;"},
hV:{"^":"hU+o;"},
i0:{"^":"e+P;"},
i1:{"^":"e+P;"},
i2:{"^":"e+n;"},
i3:{"^":"i2+o;"},
i4:{"^":"e+n;"},
i5:{"^":"i4+o;"},
i8:{"^":"e+n;"},
i9:{"^":"i8+o;"},
ig:{"^":"e+P;"},
dd:{"^":"L+n;"},
de:{"^":"dd+o;"},
ih:{"^":"e+n;"},
ii:{"^":"ih+o;"},
il:{"^":"e+P;"},
iq:{"^":"e+n;"},
ir:{"^":"iq+o;"},
dg:{"^":"L+n;"},
dh:{"^":"dg+o;"},
iv:{"^":"e+n;"},
iw:{"^":"iv+o;"},
iA:{"^":"e+n;"},
iB:{"^":"iA+o;"},
iC:{"^":"e+n;"},
iD:{"^":"iC+o;"},
iE:{"^":"e+n;"},
iF:{"^":"iE+o;"},
iG:{"^":"e+n;"},
iH:{"^":"iG+o;"},
iI:{"^":"e+n;"},
iJ:{"^":"iI+o;"}}],["","",,P,{"^":"",
S:function(a){var z,y,x,w,v
if(a==null)return
z=P.a1(P.f,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w){v=H.x(y[w])
z.i(0,v,a[v])}return z},
iV:function(a,b){var z={}
a.B(0,new P.iW(z))
return z},
cB:function(){var z=$.cA
if(z==null){z=J.bE(window.navigator.userAgent,"Opera",0)
$.cA=z}return z},
eR:function(){var z,y
z=$.cx
if(z!=null)return z
y=$.cy
if(y==null){y=J.bE(window.navigator.userAgent,"Firefox",0)
$.cy=y}if(y)z="-moz-"
else{y=$.cz
if(y==null){y=!P.cB()&&J.bE(window.navigator.userAgent,"Trident/",0)
$.cz=y}if(y)z="-ms-"
else z=P.cB()?"-o-":"-webkit-"}$.cx=z
return z},
iW:{"^":"r:6;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",hW:{"^":"b;",
cN:function(){return Math.random()}},ia:{"^":"b;"},M:{"^":"ia;$ti"}}],["","",,P,{"^":"",ew:{"^":"e;",$isew:1,"%":"SVGAnimatedLength"},jI:{"^":"G;0n:height=,0m:width=","%":"SVGFEBlendElement"},jJ:{"^":"G;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},jK:{"^":"G;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},jL:{"^":"G;0n:height=,0m:width=","%":"SVGFECompositeElement"},jM:{"^":"G;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},jN:{"^":"G;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},jO:{"^":"G;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},jP:{"^":"G;0n:height=,0m:width=","%":"SVGFEFloodElement"},jQ:{"^":"G;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},jR:{"^":"G;0n:height=,0m:width=","%":"SVGFEImageElement"},jS:{"^":"G;0n:height=,0m:width=","%":"SVGFEMergeElement"},jT:{"^":"G;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},jU:{"^":"G;0n:height=,0m:width=","%":"SVGFEOffsetElement"},jV:{"^":"G;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},jW:{"^":"G;0n:height=,0m:width=","%":"SVGFETileElement"},jX:{"^":"G;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},k_:{"^":"G;0n:height=,0m:width=","%":"SVGFilterElement"},k0:{"^":"b2;0n:height=,0m:width=","%":"SVGForeignObjectElement"},f6:{"^":"b2;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},b2:{"^":"G;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},k8:{"^":"b2;0n:height=,0m:width=","%":"SVGImageElement"},aF:{"^":"e;",$isaF:1,"%":"SVGLength"},ke:{"^":"hY;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return this.I(a,b)},
i:function(a,b,c){H.j(c,"$isaF")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
I:function(a,b){return a.getItem(b)},
$asn:function(){return[P.aF]},
$isi:1,
$asi:function(){return[P.aF]},
$isa:1,
$asa:function(){return[P.aF]},
$aso:function(){return[P.aF]},
"%":"SVGLengthList"},kg:{"^":"G;0n:height=,0m:width=","%":"SVGMaskElement"},aH:{"^":"e;",$isaH:1,"%":"SVGNumber"},ks:{"^":"i7;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return this.I(a,b)},
i:function(a,b,c){H.j(c,"$isaH")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
I:function(a,b){return a.getItem(b)},
$asn:function(){return[P.aH]},
$isi:1,
$asi:function(){return[P.aH]},
$isa:1,
$asa:function(){return[P.aH]},
$aso:function(){return[P.aH]},
"%":"SVGNumberList"},kx:{"^":"G;0n:height=,0m:width=","%":"SVGPatternElement"},kz:{"^":"e;0k:length=","%":"SVGPointList"},kB:{"^":"e;0n:height=,0m:width=","%":"SVGRect"},kC:{"^":"f6;0n:height=,0m:width=","%":"SVGRectElement"},kO:{"^":"io;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return this.I(a,b)},
i:function(a,b,c){H.x(c)
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
I:function(a,b){return a.getItem(b)},
$asn:function(){return[P.f]},
$isi:1,
$asi:function(){return[P.f]},
$isa:1,
$asa:function(){return[P.f]},
$aso:function(){return[P.f]},
"%":"SVGStringList"},G:{"^":"cC;","%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},kP:{"^":"b2;0n:height=,0m:width=","%":"SVGSVGElement"},aK:{"^":"e;",$isaK:1,"%":"SVGTransform"},kX:{"^":"iy;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return this.I(a,b)},
i:function(a,b,c){H.j(c,"$isaK")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
I:function(a,b){return a.getItem(b)},
$asn:function(){return[P.aK]},
$isi:1,
$asi:function(){return[P.aK]},
$isa:1,
$asa:function(){return[P.aK]},
$aso:function(){return[P.aK]},
"%":"SVGTransformList"},l9:{"^":"b2;0n:height=,0m:width=","%":"SVGUseElement"},hX:{"^":"e+n;"},hY:{"^":"hX+o;"},i6:{"^":"e+n;"},i7:{"^":"i6+o;"},im:{"^":"e+n;"},io:{"^":"im+o;"},ix:{"^":"e+n;"},iy:{"^":"ix+o;"}}],["","",,P,{"^":"",a6:{"^":"b;",$isi:1,
$asi:function(){return[P.T]},
$isa:1,
$asa:function(){return[P.T]},
$ishg:1}}],["","",,P,{"^":"",jq:{"^":"e;0k:length=","%":"AudioBuffer"},jr:{"^":"hw;",
h:function(a,b){return P.S(a.get(H.x(b)))},
B:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.S(y.value[1]))}},
gJ:function(a){var z=H.l([],[P.f])
this.B(a,new P.ey(z))
return z},
gk:function(a){return a.size},
$asP:function(){return[P.f,null]},
$isH:1,
$asH:function(){return[P.f,null]},
"%":"AudioParamMap"},ey:{"^":"r:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},js:{"^":"L;0k:length=","%":"AudioTrackList"},ez:{"^":"L;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},ku:{"^":"ez;0k:length=","%":"OfflineAudioContext"},hw:{"^":"e+P;"}}],["","",,P,{"^":"",eB:{"^":"e;",$iseB:1,"%":"WebGLBuffer"},f4:{"^":"e;",$isf4:1,"%":"WebGLFramebuffer"},fK:{"^":"e;",$isfK:1,"%":"WebGLProgram"},kD:{"^":"e;",
aY:function(a,b){return a.activeTexture(b)},
aZ:function(a,b,c){return a.attachShader(b,c)},
b_:function(a,b,c){return a.bindBuffer(b,c)},
b1:function(a,b,c){return a.bindFramebuffer(b,c)},
b2:function(a,b,c){return a.bindTexture(b,c)},
b3:function(a,b){return a.blendEquation(b)},
b4:function(a,b,c){return a.blendFunc(b,c)},
b5:function(a,b,c,d){return a.bufferData(b,c,d)},
b6:function(a,b){return a.clear(b)},
b7:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
b8:function(a,b){return a.compileShader(b)},
b9:function(a){return a.createBuffer()},
ba:function(a){return a.createProgram()},
bc:function(a,b){return a.createShader(b)},
bd:function(a){return a.createTexture()},
bf:function(a,b){return a.depthMask(b)},
bg:function(a,b){return a.disable(b)},
bh:function(a,b,c,d){return a.drawArrays(b,c,d)},
bi:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bj:function(a,b){return a.enable(b)},
bk:function(a,b){return a.enableVertexAttribArray(b)},
a2:function(a){return P.S(a.getContextAttributes())},
an:function(a){return a.getError()},
ao:function(a,b){return a.getProgramInfoLog(b)},
ap:function(a,b,c){return a.getProgramParameter(b,c)},
ar:function(a,b){return a.getShaderInfoLog(b)},
as:function(a,b,c){return a.getShaderParameter(b,c)},
at:function(a,b,c){return a.getUniformLocation(b,c)},
bm:function(a,b){return a.linkProgram(b)},
bo:function(a,b,c){return a.pixelStorei(b,c)},
av:function(a,b,c){return a.shaderSource(b,c)},
aw:function(a,b,c,d){return a.stencilFunc(b,c,d)},
ak:function(a,b,c,d,e,f,g,h,i,j){var z
if(!!J.A(g).$isaB)z=!0
else z=!1
if(z){this.af(a,b,c,d,e,f,g)
return}throw H.c(P.cr("Incorrect number or type of arguments"))},
br:function(a,b,c,d,e,f,g){return this.ak(a,b,c,d,e,f,g,null,null,null)},
af:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bs:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
bH:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},kE:{"^":"e;",
cr:function(a,b){return a.beginTransformFeedback(b)},
cu:function(a,b){return a.bindVertexArray(b)},
cB:function(a){return a.createVertexArray()},
cC:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
cD:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
cE:function(a){return a.endTransformFeedback()},
cU:function(a,b,c,d){this.cn(a,b,H.w(c,"$isa",[P.f],"$asa"),d)
return},
cn:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
cV:function(a,b,c){return a.vertexAttribDivisor(b,c)},
aY:function(a,b){return a.activeTexture(b)},
aZ:function(a,b,c){return a.attachShader(b,c)},
b_:function(a,b,c){return a.bindBuffer(b,c)},
b1:function(a,b,c){return a.bindFramebuffer(b,c)},
b2:function(a,b,c){return a.bindTexture(b,c)},
b3:function(a,b){return a.blendEquation(b)},
b4:function(a,b,c){return a.blendFunc(b,c)},
b5:function(a,b,c,d){return a.bufferData(b,c,d)},
b6:function(a,b){return a.clear(b)},
b7:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
b8:function(a,b){return a.compileShader(b)},
b9:function(a){return a.createBuffer()},
ba:function(a){return a.createProgram()},
bc:function(a,b){return a.createShader(b)},
bd:function(a){return a.createTexture()},
bf:function(a,b){return a.depthMask(b)},
bg:function(a,b){return a.disable(b)},
bh:function(a,b,c,d){return a.drawArrays(b,c,d)},
bi:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bj:function(a,b){return a.enable(b)},
bk:function(a,b){return a.enableVertexAttribArray(b)},
a2:function(a){return P.S(a.getContextAttributes())},
an:function(a){return a.getError()},
ao:function(a,b){return a.getProgramInfoLog(b)},
ap:function(a,b,c){return a.getProgramParameter(b,c)},
ar:function(a,b){return a.getShaderInfoLog(b)},
as:function(a,b,c){return a.getShaderParameter(b,c)},
at:function(a,b,c){return a.getUniformLocation(b,c)},
bm:function(a,b){return a.linkProgram(b)},
bo:function(a,b,c){return a.pixelStorei(b,c)},
av:function(a,b,c){return a.shaderSource(b,c)},
aw:function(a,b,c,d){return a.stencilFunc(b,c,d)},
ak:function(a,b,c,d,e,f,g,h,i,j){var z
if(!!J.A(g).$isaB)z=!0
else z=!1
if(z){this.af(a,b,c,d,e,f,g)
return}throw H.c(P.cr("Incorrect number or type of arguments"))},
br:function(a,b,c,d,e,f,g){return this.ak(a,b,c,d,e,f,g,null,null,null)},
af:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bs:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
bH:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},fW:{"^":"e;",$isfW:1,"%":"WebGLShader"},h9:{"^":"e;",$ish9:1,"%":"WebGLTexture"},hi:{"^":"e;",$ishi:1,"%":"WebGLUniformLocation"},hn:{"^":"e;",$ishn:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",kL:{"^":"ik;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return P.S(this.cg(a,b))},
i:function(a,b,c){H.j(c,"$isH")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
cg:function(a,b){return a.item(b)},
$asn:function(){return[[P.H,,,]]},
$isi:1,
$asi:function(){return[[P.H,,,]]},
$isa:1,
$asa:function(){return[[P.H,,,]]},
$aso:function(){return[[P.H,,,]]},
"%":"SQLResultSetRowList"},ij:{"^":"e+n;"},ik:{"^":"ij+o;"}}],["","",,G,{"^":"",
hq:function(a){var z,y,x,w
z=H.l(a.split("\n"),[P.f])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.h(z,y)
C.a.i(z,y,w+H.d(z[y]))}return C.a.U(z,"\n")},
d4:function(a,b,c){var z,y,x,w
z=J.k(a)
y=z.bc(a,b)
z.av(a,y,c)
z.b8(a,y)
x=H.c4(z.as(a,y,35713))
if(x!=null&&!x){w=z.ar(a,y)
P.ax("E:Compilation failed:")
P.ax("E:"+G.hq(c))
P.ax("E:Failure:")
P.ax(C.i.D("E:",w))
throw H.c(w)}return y},
cF:function(a,b){var z,y,x,w,v
H.w(a,"$isa",[T.p],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bH(a[y])
w=b.length
if(z>=w)return H.h(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.h(a,y)
v=J.bI(a[y])
if(x>=w)return H.h(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.h(a,y)
v=J.cj(a[y])
if(z>=w)return H.h(b,z)
b[z]=v}return b},
f1:function(a,b){var z,y,x,w
H.w(a,"$isa",[T.a3],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bH(a[y])
w=b.length
if(z>=w)return H.h(b,z)
b[z]=x;++z
if(y>=a.length)return H.h(a,y)
x=J.bI(a[y])
if(z>=w)return H.h(b,z)
b[z]=x}return b},
f2:function(a,b){var z,y,x,w,v
H.w(a,"$isa",[T.at],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bH(a[y])
w=b.length
if(z>=w)return H.h(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.h(a,y)
v=J.bI(a[y])
if(x>=w)return H.h(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.h(a,y)
x=J.cj(a[y])
if(v>=w)return H.h(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.h(a,y)
x=J.ef(a[y])
if(z>=w)return H.h(b,z)
b[z]=x}return b},
f0:function(a,b){var z,y
H.w(a,"$isa",[[P.a,P.B]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.n.i(b,z,J.aZ(a[y],0))
if(y>=a.length)return H.h(a,y)
C.n.i(b,z+1,J.aZ(a[y],1))
if(y>=a.length)return H.h(a,y)
C.n.i(b,z+2,J.aZ(a[y],2))
if(y>=a.length)return H.h(a,y)
C.n.i(b,z+3,J.aZ(a[y],3))}return b},
hS:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.ac(z,[H.q(z,0)]),y=y.gw(y),x=b.x,w=[[P.a,P.B]],v=[P.T],u=[T.at],t=[T.p],s=[T.a3];y.u();){r=y.d
if(!x.a1(0,r)){r="Dropping unnecessary attribute: "+H.d(r)
if($.du>0)H.bC("I: "+r)
continue}q=z.h(0,r)
switch($.Z().h(0,r).a){case"vec2":b.S(r,G.f1(H.be(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.S(r,G.cF(H.be(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.S(r,G.f2(H.be(q,"$isa",u,"$asa"),null),4)
break
case"float":b.S(r,new Float32Array(H.bs(H.be(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.S(r,G.f0(H.be(q,"$isa",w,"$asa"),null),4)
break}}},
aG:{"^":"b;"},
aL:{"^":"aG;d,a,b,c",
aD:function(){return this.d},
j:function(a){var z,y,x,w
z=H.l(["{"+new H.d1(H.j2(this)).j(0)+"}["+this.a+"]"],[P.f])
for(y=this.d,x=new H.ac(y,[H.q(y,0)]),x=x.gw(x);x.u();){w=x.d
C.a.l(z,H.d(w)+": "+H.d(y.h(0,w)))}return C.a.U(z,"\n")}},
eC:{"^":"cU;"},
eF:{"^":"b;0a,b",
bl:function(a,b,c){J.ec(this.a,b)
if(c>0)J.et(this.a,b,c)},
bG:function(a,b,c,d,e,f,g,h){J.bD(this.a,34962,b)
J.eu(this.a,c,d,e,!1,g,h)}},
f3:{"^":"b;a,b,c,d,e"},
eZ:{"^":"b;"},
cE:{"^":"b;a,b,c,d"},
f5:{"^":"b;a,b,c,d,e",
bV:function(a){switch($.Z().h(0,a).a){case"vec2":this.e.i(0,a,H.l([],[T.a3]))
break
case"vec3":this.e.i(0,a,H.l([],[T.p]))
break
case"vec4":this.e.i(0,a,H.l([],[T.at]))
break
case"float":this.e.i(0,a,H.l([],[P.T]))
break
case"uvec4":this.e.i(0,a,H.l([],[[P.a,P.B]]))
break}},
bQ:function(a,b){var z,y,x,w,v,u,t
z=[T.a3]
H.w(b,"$isa",z,"$asa")
y=H.w(this.e.h(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.I)(b),++w){v=b[w]
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.l(y,new T.a3(u))}},
bW:function(){var z,y,x,w,v,u,t,s,r
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.l(y,[P.B])
for(y=this.b,w=0,v=0;!1;++v){if(v>=0)return H.h(y,v)
u=y[v]
C.a.i(x,w,u.gcY(u))
C.a.i(x,w+1,u.gcZ(u))
C.a.i(x,w+2,u.gd_(u))
w+=3}for(y=z.length,v=0;v<z.length;z.length===y||(0,H.I)(z),++v){t=z[v]
s=t.a
C.a.i(x,w,s)
C.a.i(x,w+1,t.b)
r=t.c
C.a.i(x,w+2,r)
C.a.i(x,w+3,s)
C.a.i(x,w+4,r)
C.a.i(x,w+5,t.d)
w+=6}return x},
bX:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=this.c
y=a-0
x=b-0
w=0
while(!0){if(!(w<x))break
v=w*a
u=w+1
t=0
while(!0){if(!(t<y))break
s=t+1
r=s%a
q=u%b*a
C.a.l(z,new G.cE(v+r,q+r,q+t,v+t))
t=s}w=u}},
j:function(a){var z,y,x,w,v
z=H.l(["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"],[P.f])
for(y=this.e,x=new H.ac(y,[H.q(y,0)]),x=x.gw(x);x.u();){w=x.d
v=$.Z().h(0,w).a
C.a.l(z,H.d(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.U(z," ")}},
d_:{"^":"b;a,b,c"},
cZ:{"^":"b;a,b,c"},
fo:{"^":"aL;d,a,b,c",p:{
cN:function(a,b){var z=P.a1(P.f,P.b)
z.i(0,"cDepthTest",!0)
z.i(0,"cDepthWrite",!1)
z.i(0,"cBlendEquation",b)
z.i(0,"cStencilFunc",$.dH())
return new G.fo(z,a,!1,!0)}}},
fq:{"^":"aG;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sa9:function(a){this.cx=H.w(a,"$isa",[P.B],"$asa")},
aB:function(a,b,c){var z,y
C.i.a4(a,0)
H.j(b,"$isa6")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bD(z.a,34962,y)
J.ch(z.a,34962,b,35048)},
bY:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
S:function(a,b,c){var z,y,x,w,v
z=J.ce(a,0)===105
if(z&&this.z===0)this.z=C.f.bP(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.bF(x.a))
this.aB(a,b,c)
w=$.Z().h(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.h(0,a)
J.bf(x.a,this.e)
x.bl(0,v,z?1:0)
x.bG(0,y.h(0,a),v,w.aC(),5126,!1,0,0)},
aA:function(a){var z,y,x,w
z=this.r
y=this.d
z.i(0,"aPosition",J.bF(y.a))
this.ch=a
this.aB("aPosition",a,3)
x=$.Z().h(0,"aPosition")
if(x==null)throw H.c("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.bf(y.a,this.e)
y.bl(0,w,0)
y.bG(0,z.h(0,"aPosition"),w,x.aC(),5126,!1,0,0)},
j:function(a){var z,y,x,w
z=this.cx
y=H.l(["Faces:"+(z==null?0:z.length)],[P.f])
for(z=this.cy,x=new H.ac(z,[H.q(z,0)]),x=x.gw(x);x.u();){w=x.d
C.a.l(y,H.d(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.U(y,"  ")},
p:{
cO:function(a,b,c,d){var z=P.f
return new G.fq(b,J.e6(b.a),c,P.a1(z,P.b),d,0,-1,P.a1(z,P.a6),"meshdata:"+a,!1,!0)}}},
fA:{"^":"aL;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
bR:function(a,b){var z
if(typeof a!=="number")return a.cW()
if(typeof b!=="number")return H.ap(b)
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
aD:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.p(new Float32Array(3))
u.au(x,w,v)
v=this.d
v.i(0,"uEyePosition",u)
u=this.cy
u.A(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.A(t)
x=!!y.$isat
q=x?t.gbI(t):1
if(!!y.$isp){p=t.gK(t)
s=t.gL(t)
r=t.gR(t)
t=p}else if(x){p=t.gK(t)
s=t.gL(t)
r=t.gR(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.ap(t)
x=z[4]
if(typeof s!=="number")return H.ap(s)
w=z[8]
if(typeof r!=="number")return H.ap(r)
o=z[12]
n=z[1]
m=z[5]
l=z[9]
k=z[13]
j=z[2]
i=z[6]
h=z[10]
g=z[14]
f=z[3]
e=z[7]
d=z[11]
c=z[15]
z[12]=y*t+x*s+w*r+o*q
z[13]=n*t+m*s+l*r+k*q
z[14]=j*t+i*s+h*r+g*q
z[15]=f*t+e*s+d*r+c*q
c=this.cx
c.A(this.db)
c.bn(0,u)
v.i(0,"uPerspectiveViewMatrix",c)
return v}},
jG:{"^":"b;"},
fQ:{"^":"aG;d,e,f,r,x,y,z,Q,0ch,a,b,c",
c_:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.I)(z),++u){t=z[u]
x.i(0,t,J.ck(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.I)(z),++u){t=z[u]
x.i(0,t,J.ck(w.a,v,t))}},
c1:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.l([],[P.f])
x=H.l([],[P.f])
for(y=new H.ac(y,[H.q(y,0)]),y=y.gw(y);y.u();){w=y.d
if(!z.a1(0,w))C.a.l(x,w)}for(z=this.x,z=P.d8(z,z.r,H.q(z,0)),y=this.Q;z.u();){w=z.d
if(!y.cv(0,w))C.a.l(x,w)}return x},
c2:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(b,"$isH",[P.f,P.b],"$asH")
z=Date.now()
for(y=new H.ac(b,[H.q(b,0)]),y=y.gw(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.u();){s=y.d
switch(J.ce(s,0)){case 117:if(w.a1(0,s)){r=b.h(0,s)
if(v.a1(0,s))H.bC("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.i(0,s,a)
q=$.Z().h(0,s)
if(q==null)H.a8("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.N(r)
J.bJ(x.a,p,r)}else if(!!J.A(r).$isfa)J.er(x.a,p,r)
break
case"float":if(q.c===0){H.ds(r)
J.ep(x.a,p,r)}else if(!!J.A(r).$isa6)J.eq(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.a7(r,"$isW").a
J.cq(x.a,p,!1,s)}else if(!!J.A(r).$isa6)J.cq(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=H.a7(r,"$isb6").a
J.cp(x.a,p,!1,s)}else if(!!J.A(r).$isa6)J.cp(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.co(o,p,H.a7(r,"$isat").a)
else J.co(o,p,H.j(r,"$isa6"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cn(o,p,H.a7(r,"$isp").a)
else J.cn(o,p,H.j(r,"$isa6"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cm(o,p,H.a7(r,"$isa3").a)
else J.cm(o,p,H.j(r,"$isa6"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.ap(s)
J.cf(x.a,33984+s)
s=H.a7(r,"$isbW").b
J.b_(x.a,3553,s)
s=this.ch
J.bJ(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.D()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.ap(s)
J.cf(x.a,33984+s)
s=H.a7(r,"$isbW").b
J.b_(x.a,34067,s)
s=this.ch
J.bJ(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.D()
this.ch=s+1
break
default:H.bC("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":s=J.ay(r,!0)
o=x.a
if(s)J.bg(o,2929)
else J.bG(o,2929)
break
case"cStencilFunc":H.a7(r,"$isd_")
s=r.a
o=x.a
if(s===1281)J.bG(o,2960)
else{J.bg(o,2960)
o=r.b
n=r.c
J.em(x.a,s,o,n)}break
case"cDepthWrite":H.c4(r)
J.e7(x.a,r)
break
case"cBlendEquation":H.a7(r,"$iscZ")
s=r.a
o=x.a
if(s===1281)J.bG(o,3042)
else{J.bg(o,3042)
o=r.b
n=r.c
J.e0(x.a,o,n)
J.e_(x.a,s)}break}++t
break}}m=P.eU(0,0,0,Date.now()-new P.bk(z,!1).a,0,0)
""+t
m.j(0)},
bU:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[G.aL],"$asa")
Date.now()
z=this.d
J.es(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.aT()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.I)(b),++x){w=b[x]
this.c2(w.a,w.aD())}y=this.Q
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.aN()}for(v=a.cy,v=new H.ac(v,[H.q(v,0)]),v=v.gw(v);v.u();)y.l(0,v.d)
u=this.c1()
if(u.length!==0)P.ax("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.d(u)))
J.bf(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.bY()
s=a.Q
r=a.z
if(t)J.dY(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.eb(q,y,v,s,0,r)
else J.ea(q,y,v,s,0)}else{s=z.a
if(r>1)J.e9(s,y,0,v,r)
else J.e8(s,y,0,v)}if(t)J.ed(z.a)},
p:{
cT:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.f
y=P.cL(null,null,null,z)
x=c.b
w=d.b
v=H.w(c.f,"$isa",[z],"$asa")
u=J.e4(b.a)
t=G.d4(b.a,35633,x)
J.cg(b.a,u,t)
s=G.d4(b.a,35632,w)
J.cg(b.a,u,s)
if(v.length>0)J.eo(b.a,u,v,35980)
J.ek(b.a,u)
if(!H.c4(J.ej(b.a,u,35714)))H.a8(J.ei(b.a,u))
z=new G.fQ(b,c,d,u,P.fk(c.c,z),P.a1(z,P.b),P.a1(z,z),y,a,!1,!0)
z.c_(a,b,c,d)
return z}}},
y:{"^":"b;a,b,c",
aC:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
fX:{"^":"b;a,0b,c,d,e,f,r,x",
ay:function(a){var z,y,x,w,v
H.w(a,"$isa",[P.f],"$asa")
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.I)(a),++w){v=a[w]
C.a.l(y,v)
x.i(0,v,this.r);++this.r}C.a.a3(y)},
W:function(a){var z,y,x
H.w(a,"$isa",[P.f],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.I)(a),++x)C.a.l(y,a[x])
C.a.a3(y)},
az:function(a){var z,y
H.w(a,"$isa",[P.f],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.l(z,a[y])
C.a.a3(z)},
c0:function(a,b){this.b=this.c3(!0,H.w(a,"$isa",[P.f],"$asa"),b)},
X:function(a){return this.c0(a,null)},
c3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.f]
H.w(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.l(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.I)(y),++u){t=y[u]
s=$.Z().h(0,t)
C.a.l(w,"layout (location="+H.d(v.h(0,t))+") in "+s.a+" "+H.d(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.I)(z),++u){q=z[u]
s=$.Z().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.d(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.I)(z),++u){q=z[u]
s=$.Z().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.d(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.I)(z),++u){q=z[u]
s=$.Z().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.d(q)+p+";")}C.a.l(w,"")
C.a.l(w,"void main(void) {")
C.a.co(w,b)
C.a.l(w,"}")
return C.a.U(w,"\n")},
p:{
bp:function(a){var z,y
z=P.f
y=[z]
return new G.fX(a,H.l([],y),H.l([],y),H.l([],y),H.l([],y),0,P.a1(z,P.B))}}},
cU:{"^":"aG;"},
ha:{"^":"b;a,b,c,d,e,f,r"},
bW:{"^":"b;",
j:function(a){return"Texture["+this.a+", "+this.c+"]"}},
f8:{"^":"bW;f,a,b,c,d,e",
aE:function(a){var z,y
z=this.d
y=this.c
J.b_(z.a,y,this.b)
J.en(z.a,y,0,6408,6408,5121,a)},
p:{
cG:function(a,b,c,d,e){var z,y
z=J.e5(a.a)
y=new G.f8(c,b,z,e,a,new G.ha(!1,!1,!1,!0,1,9729,9729))
J.b_(a.a,e,z)
J.el(a.a,37440,1)
y.aE(c)
J.cl(a.a,e,10240,9729)
J.cl(a.a,e,10241,9729)
J.eh(a.a)
J.b_(a.a,e,null)
return y}}}}],["","",,R,{"^":"",
hm:function(a,b,c){var z,y,x,w,v,u
z="stars_"+b
y=b*3
x=new Float32Array(y)
for(w=x.length,v=0;v<y;++v){u=$.dT().cN()
if(v>=w)return H.h(x,v)
x[v]=(u-0.5)*c}y=G.cO(z,a.d,0,a.e.x)
y.aA(x)
return y},
fP:{"^":"fO;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
cQ:[function(a){var z,y,x
z=this.db
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.ax("size change "+H.d(y)+" "+H.d(x))
this.dx.bR(y,x)
this.z=y
this.Q=x},"$1","gcP",4,0,16]}}],["","",,A,{"^":"",
dt:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(e,"$isa",[G.aL],"$asa")
z=b.dx
z.A(c)
y=b.d
z.bn(0,y)
x=b.cx
H.d(b)
w=C.a.gcK(e)
v=b.db
u=new Float32Array(9)
t=z.a
u[0]=t[0]
u[1]=t[1]
u[2]=t[2]
u[3]=t[4]
u[4]=t[5]
u[5]=t[6]
u[6]=t[8]
u[7]=t[9]
u[8]=t[10]
v.cz(new T.b6(u))
u=v.a
s=u[3]
u[3]=u[1]
u[1]=s
s=u[6]
u[6]=u[2]
u[2]=s
s=u[7]
u[7]=u[5]
u[5]=s
w=w.d
w.i(0,"uTransformationMatrix",y)
w.i(0,"uModelMatrix",z)
w.i(0,"uNormalMatrix",v)
C.a.l(e,b.ch)
a.bU(x,e,d)
if(0>=e.length)return H.h(e,-1)
e.pop()
for(y=b.cy,r=0;!1;++r){if(r>=0)return H.h(y,r)
A.dt(a,y[r],z,d,e)}},
bT:{"^":"cU;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
j:function(a){return"NODE["+this.a+"]"}},
bU:{"^":"aG;d,e,f,a,b,c"},
fO:{"^":"aG;",
bZ:function(a,b,c){if(this.d==null)this.d=new G.f3(this.e,null,null,null,null)},
bT:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.dZ(v.a,36160,z)
J.ev(v.a,this.x,this.y,x,w)
if(y!==0)J.e1(v.a,y)
for(z=this.f,y=z.length,x=P.f,w=P.b,u=0;u<z.length;z.length===y||(0,H.I)(z),++u){t=z[u]
s=t.e
C.a.l(s,new G.aL(P.a1(x,w),"transforms",!1,!0))
r=new T.W(new Float32Array(16))
r.H()
for(v=t.f,q=v.length,p=t.d,o=0;o<v.length;v.length===q||(0,H.I)(v),++o)A.dt(p,v[o],r,a,s)
if(0>=s.length)return H.h(s,-1)
s.pop()}},
bS:function(){return this.bT(null)}}}],["","",,V,{}],["","",,B,{"^":"",
bX:function(a,b,c,d,e,f){var z,y,x,w,v
z=b*a
y=Math.cos(z)
x=Math.sin(z)
z=c*a
w=Math.cos(z)
v=Math.sin(z)
z=d*(2+y)*0.5
f.sK(0,z*w)
f.sL(0,z*v)
f.sR(0,e*d*0.5*x)},
fY:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t,s,r
z=B.hd(B.fy(new B.fZ(e,d,f,c),0,6.283185307179586,g,!0,0.001),h,i,!0)
y=H.l([],[G.eZ])
x=H.l([],[G.cE])
w=H.l([],[T.p])
v=new G.f5(!1,y,x,w,P.a1(P.f,[P.a,,]))
for(y=z.length,u=0;u<z.length;z.length===y||(0,H.I)(z),++u){t=z[u]
for(s=0;s<t.length;s+=2){x=H.j(t[s],"$isp")
x.toString
r=new T.p(new Float32Array(3))
r.A(x)
C.a.l(w,r)}}v.bX(h,g,!0)
return v},
hd:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=[T.p]
H.w(a,"$isa",z,"$asa")
y=H.l([],[[P.a,T.p]])
x=new Float32Array(3)
w=new T.p(x)
v=new Float32Array(3)
u=new T.p(v)
t=new Float32Array(3)
s=new T.p(t)
for(r=0;q=a.length,r<q;r+=2){p=a[r]
o=r+1
if(o>=q)return H.h(a,o)
n=a[o]
m=H.l([],z)
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
t[2]=k*j}u.P(0)
s.P(0)
for(i=0;i<b;++i){h=i/b*2*3.141592653589793
g=c*Math.cos(h)
f=c*Math.sin(h)
w.A(p)
w.a0(u,g)
w.a0(s,f)
q=new T.p(new Float32Array(3))
q.A(w)
C.a.l(m,q)
x[2]=0
x[1]=0
x[0]=0
w.a0(u,g)
w.a0(s,f)
w.P(0)
q=new T.p(new Float32Array(3))
q.A(w)
C.a.l(m,q)}}return y},
fy:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
H.m(a,{func:1,ret:-1,args:[P.T,T.p]})
z=H.l([],[T.p])
y=new T.p(new Float32Array(3))
x=new T.p(new Float32Array(3))
for(w=(c-b)/(d-0),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+f,x)
x.ax(0,y)
t=new T.p(new Float32Array(3))
t.A(y)
C.a.l(z,t)
t=new T.p(new Float32Array(3))
t.A(x)
C.a.l(z,t)}return z},
fZ:{"^":"r:17;a,b,c,d",
$2:function(a,b){B.bX(a,this.a,this.b,this.c,this.d,b)}},
hb:{"^":"eC;fy,go,id,k1,k2,k3,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bb:function(a){var z,y
z=C.K.cG(H.w(a,"$isi",[P.b],"$asi"),0,new A.j4(),P.B)
if(typeof z!=="number")return H.ap(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
j4:{"^":"r:18;",
$2:function(a,b){var z,y
H.N(a)
z=J.az(b)
if(typeof a!=="number")return a.D()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",b6:{"^":"b;a",
A:function(a){var z,y
z=a.a
y=this.a
y[8]=z[8]
y[7]=z[7]
y[6]=z[6]
y[5]=z[5]
y[4]=z[4]
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
j:function(a){return"[0] "+this.G(0).j(0)+"\n[1] "+this.G(1).j(0)+"\n[2] "+this.G(2).j(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=9)return H.h(z,b)
return z[b]},
v:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.b6){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gt:function(a){return A.bb(this.a)},
G:function(a){var z,y,x
z=new Float32Array(3)
y=this.a
if(a>=9)return H.h(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.h(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.h(y,x)
z[2]=y[x]
return new T.p(z)},
cz:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=a.a
y=z[0]
x=z[4]
w=z[8]
v=z[5]
u=z[7]
t=x*w-v*u
s=z[1]
r=z[3]
q=r*w
p=z[6]
o=v*p
z=z[2]
n=r*u-x*p
m=y*t-s*(q-o)+z*n
if(m===0){this.A(a)
return 0}l=1/m
k=this.a
k[0]=l*t
k[1]=l*(z*u-s*w)
k[2]=l*(s*v-z*x)
k[3]=l*(o-q)
k[4]=l*(y*w-z*p)
k[5]=l*(z*r-y*v)
k[6]=l*n
k[7]=l*(s*p-y*u)
k[8]=l*(y*x-s*r)
return m}},W:{"^":"b;a",
A:function(a){var z,y
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
j:function(a){return"[0] "+this.G(0).j(0)+"\n[1] "+this.G(1).j(0)+"\n[2] "+this.G(2).j(0)+"\n[3] "+this.G(3).j(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.h(z,b)
return z[b]},
v:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.W){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gt:function(a){return A.bb(this.a)},
G:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.h(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.h(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.h(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.h(y,x)
z[3]=y[x]
return new T.at(z)},
H:function(){var z=this.a
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
z[15]=1},
bn:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
z=this.a
y=z[0]
x=z[4]
w=z[8]
v=z[12]
u=z[1]
t=z[5]
s=z[9]
r=z[13]
q=z[2]
p=z[6]
o=z[10]
n=z[14]
m=z[3]
l=z[7]
k=z[11]
j=z[15]
i=a9.a
h=i[0]
g=i[4]
f=i[8]
e=i[12]
d=i[1]
c=i[5]
b=i[9]
a=i[13]
a0=i[2]
a1=i[6]
a2=i[10]
a3=i[14]
a4=i[3]
a5=i[7]
a6=i[11]
a7=i[15]
z[0]=y*h+x*d+w*a0+v*a4
z[4]=y*g+x*c+w*a1+v*a5
z[8]=y*f+x*b+w*a2+v*a6
z[12]=y*e+x*a+w*a3+v*a7
z[1]=u*h+t*d+s*a0+r*a4
z[5]=u*g+t*c+s*a1+r*a5
z[9]=u*f+t*b+s*a2+r*a6
z[13]=u*e+t*a+s*a3+r*a7
z[2]=q*h+p*d+o*a0+n*a4
z[6]=q*g+p*c+o*a1+n*a5
z[10]=q*f+p*b+o*a2+n*a6
z[14]=q*e+p*a+o*a3+n*a7
z[3]=m*h+l*d+k*a0+j*a4
z[7]=m*g+l*c+k*a1+j*a5
z[11]=m*f+l*b+k*a2+j*a6
z[15]=m*e+l*a+k*a3+j*a7}},a3:{"^":"b;a",
j:function(a){var z=this.a
return"["+H.d(z[0])+","+H.d(z[1])+"]"},
v:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a3){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gt:function(a){return A.bb(this.a)},
h:function(a,b){var z=this.a
if(b>=2)return H.h(z,b)
return z[b]},
gk:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gK:function(a){return this.a[0]},
gL:function(a){return this.a[1]},
p:{
bY:function(a,b){var z=new Float32Array(2)
z[0]=a
z[1]=b
return new T.a3(z)}}},p:{"^":"b;a",
au:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
A:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
j:function(a){var z=this.a
return"["+H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+"]"},
v:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.p){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gt:function(a){return A.bb(this.a)},
h:function(a,b){var z=this.a
if(b>=3)return H.h(z,b)
return z[b]},
gk:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gcL:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
P:function(a){var z,y,x
z=Math.sqrt(this.gcL())
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
be:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.p(new Float32Array(3))
z.au(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
a0:function(a,b){var z,y
z=a.a
y=this.a
y[0]=y[0]+z[0]*b
y[1]=y[1]+z[1]*b
y[2]=y[2]+z[2]*b},
ax:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
sK:function(a,b){this.a[0]=b
return b},
sL:function(a,b){this.a[1]=b
return b},
sR:function(a,b){this.a[2]=b
return b},
gK:function(a){return this.a[0]},
gL:function(a){return this.a[1]},
gR:function(a){return this.a[2]}},at:{"^":"b;a",
j:function(a){var z=this.a
return H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+","+H.d(z[3])},
v:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.at){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gt:function(a){return A.bb(this.a)},
h:function(a,b){var z=this.a
if(b>=4)return H.h(z,b)
return z[b]},
gk:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gK:function(a){return this.a[0]},
gL:function(a){return this.a[1]},
gR:function(a){return this.a[2]},
gbI:function(a){return this.a[3]}}}],["","",,M,{"^":"",
dD:function(a,b){var z,y,x,w,v,u
z=H.j((b&&C.p).al(b,"2d"),"$isbj")
y=(Math.sin(a)+1)/2;(z&&C.j).cO(z,0,0,b.width,b.height)
x=b.width
if(typeof x!=="number")return x.cX()
w=C.j.cA(z,0,0,x*y,b.height)
v=Math.floor(360*y)
u=Math.floor(90*y);(w&&C.e).E(w,0,"hsla("+H.d(v)+", 100%, 40%, 1)")
C.e.E(w,0.2,"black")
C.e.E(w,0.3,"black")
C.e.E(w,0.5,"hsla("+H.d(u)+", 100%, 40%, 1)")
C.e.E(w,0.7,"black")
C.e.E(w,0.9,"black")
C.e.E(w,1,"hsla("+H.d(v)+", 100%, 40%, 1)")
z.fillStyle=w
z.fill()},
hc:function(a){var z,y,x,w,v,u,t
z=B.fY(!1,!1,1,2,3,20,128,17,4,!0)
z.bV("aTexUV")
y=H.l([],[T.a3])
for(x=z.d,w=0;w<x.length;++w)C.a.l(y,$.dI()[w%3])
z.bQ("aTexUV",y)
v=G.cO("torusknot",a.d,4,a.e.x)
v.aA(G.cF(x,null))
x=H.w(z.bW(),"$isa",[P.B],"$asa")
u=v.d
v.y=J.bF(u.a)
t=v.ch.length
if(t<768){v.sa9(new Uint8Array(H.bs(x)))
v.Q=5121}else if(t<196608){v.sa9(new Uint16Array(H.bs(x)))
v.Q=5123}else{v.sa9(new Uint32Array(H.bs(x)))
v.Q=5125}J.bf(u.a,v.e)
x=v.y
t=v.cx
J.bD(u.a,34963,x)
J.ch(u.a,34963,t,35048)
G.hS(z,v)
return v},
dy:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
z={}
y=document
x=H.j(C.r.bp(y,"#webgl-canvas"),"$isaB")
w=new G.eF(x)
v=P.f
u=P.b
t=(x&&C.p).am(x,"webgl2",P.cK(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],v,u))
w.a=t
if(t==null)H.a8(P.cD('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
s="ChronosGL Config: "+H.d(J.eg(t))
if($.du>0)P.ax("I: "+s)
J.e2(t,0,0,0,1)
J.bg(t,2929)
t=new Float32Array(3)
s=new Float32Array(3)
r=new T.W(new Float32Array(16))
r.H()
q=new Float32Array(3)
p=new Float32Array(3)
o=new Float32Array(3)
n=new B.hb(20,2,3,1,new T.p(t),new T.p(s),r,new T.p(q),new T.p(p),new T.p(o),new T.p(new Float32Array(3)),"camera:torusknot",!1,!0)
t=new T.W(new Float32Array(16))
t.H()
s=new T.W(new Float32Array(16))
s.H()
m=new G.fA(n,50,1,0.1,1000,t,s,new T.W(new Float32Array(16)),P.a1(v,u),"perspective",!1,!0)
m.aF()
v=G.cT("textured",w,$.dX(),$.dW())
u=[G.aL]
t=H.l([m],u)
s=[A.bT]
r=H.l([],s)
q=H.l([],[A.bU])
l=new R.fP(x,m,null,w,q,17664,0,0,0,0,"main",!1,!0)
l.bZ("main",w,null)
l.cQ(null)
p=W.U
W.d5(window,"resize",H.m(l.gcP(),{func:1,ret:-1,args:[p]}),!1,p)
p=G.cT("stars",w,$.dV(),$.dU())
u=H.l([m],u)
o=H.l([],s)
k=$.dE()
j=G.cN("stars",k)
i=y.createElement("canvas")
i.width=64
i.height=64
h=H.j(C.p.al(i,"2d"),"$isbj")
g=(h&&C.j).bb(h,32,32,1,32,32,22);(g&&C.e).E(g,0,"gray")
C.e.E(g,1,"black")
h.fillStyle=g
C.j.cF(h,0,0,64,64)
g=C.j.bb(h,32,32,1,32,32,6);(g&&C.e).E(g,0,"white")
C.e.E(g,1,"gray")
h.globalAlpha=0.9
h.fillStyle=g
h.arc(32,32,4,0,6.283185307179586,!1)
h.fill()
f=j.d
f.i(0,"uTexture",G.cG(p.d,"Utils::Particles",i,null,3553))
f.i(0,"uPointSize",1000)
e=R.hm(p,2000,100)
f=H.l([],s)
d=new Float32Array(9)
c=new T.W(new Float32Array(16))
c.H()
b=new T.W(new Float32Array(16))
b.H()
a=new Float32Array(3)
a0=new Float32Array(3)
a1=new Float32Array(3)
C.a.l(o,new A.bT(j,e,f,new T.b6(d),c,b,new T.p(a),new T.p(a0),new T.p(a1),new T.p(new Float32Array(3)),e.a,!1,!0))
C.a.l(q,new A.bU(p,u,o,"stars",!1,!0))
C.a.l(q,new A.bU(v,t,r,"objects",!1,!0))
a2=H.j(C.r.bp(y,"#texture"),"$isaB")
M.dD(0,a2)
a3=G.cG(w,"gen",a2,null,3553)
j=G.cN("torus",k)
y=j.d
y.i(0,"uTexture",a3)
y.i(0,"uColor",new T.p(new Float32Array(3)))
y=M.hc(v)
s=H.l([],s)
v=new Float32Array(9)
u=new T.W(new Float32Array(16))
u.H()
t=new T.W(new Float32Array(16))
t.H()
q=new Float32Array(3)
p=new Float32Array(3)
o=new Float32Array(3)
C.a.l(r,new A.bT(j,y,s,new T.b6(v),u,t,new T.p(q),new T.p(p),new T.p(o),new T.p(new Float32Array(3)),"torus",!1,!0))
z.a=0
new M.jf(z,n,a2,a3,l).$1(0)},
jf:{"^":"r:19;a,b,c,d,e",
$1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.ca(a)
if(typeof a!=="number")return a.D()
z=a+0
this.a.a=z
y=this.b
x=z/3000
w=y.id
v=y.go
u=y.fy
t=y.k1
s=y.k2
B.bX(x,w,v,u,t,s)
r=y.k3
B.bX(x+0.01,w,v,u,t,r)
t=s.a
u=y.d.a
u[12]=t[0]
u[13]=t[1]
u[14]=t[2]
q=u[12]
p=u[13]
o=u[14]
y=y.e
w=y.a
w[0]=q
w[1]=u[13]
w[2]=u[14]
w=new Float32Array(3)
n=new T.p(w)
n.A(y)
n.ax(0,r)
n.P(0)
m=s.be(n)
m.P(0)
l=n.be(m)
l.P(0)
s=m.ag(y)
r=l.ag(y)
y=n.ag(y)
v=m.a
t=v[0]
k=l.a
j=k[0]
i=w[0]
h=v[1]
g=k[1]
f=w[1]
v=v[2]
k=k[2]
w=w[2]
u[15]=1
u[14]=-y
u[13]=-r
u[12]=-s
u[11]=0
u[10]=w
u[9]=k
u[8]=v
u[7]=0
u[6]=f
u[5]=g
u[4]=h
u[3]=0
u[2]=i
u[1]=j
u[0]=t
u[12]=q
u[13]=p
u[14]=o
u=this.c
M.dD(a/1000,u)
this.d.aE(u)
this.e.bS()
C.A.gcq(window).bt(this,-1)}}},1]]
setupProgram(dart,0,0)
J.A=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cH.prototype
return J.ff.prototype}if(typeof a=="string")return J.b4.prototype
if(a==null)return J.fg.prototype
if(typeof a=="boolean")return J.fe.prototype
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.b)return a
return J.bz(a)}
J.aU=function(a){if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.b)return a
return J.bz(a)}
J.iZ=function(a){if(a==null)return a
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.b)return a
return J.bz(a)}
J.j_=function(a){if(typeof a=="number")return J.bn.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.aM.prototype
return a}
J.j0=function(a){if(typeof a=="number")return J.bn.prototype
if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.aM.prototype
return a}
J.j1=function(a){if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.aM.prototype
return a}
J.k=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.b)return a
return J.bz(a)}
J.by=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.aM.prototype
return a}
J.ay=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.A(a).v(a,b)}
J.a_=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.j_(a).M(a,b)}
J.aZ=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.jc(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aU(a).h(a,b)}
J.ce=function(a,b){return J.j1(a).a4(a,b)}
J.cf=function(a,b){return J.k(a).aY(a,b)}
J.cg=function(a,b,c){return J.k(a).aZ(a,b,c)}
J.dY=function(a,b){return J.k(a).cr(a,b)}
J.bD=function(a,b,c){return J.k(a).b_(a,b,c)}
J.dZ=function(a,b,c){return J.k(a).b1(a,b,c)}
J.b_=function(a,b,c){return J.k(a).b2(a,b,c)}
J.bf=function(a,b){return J.k(a).cu(a,b)}
J.e_=function(a,b){return J.k(a).b3(a,b)}
J.e0=function(a,b,c){return J.k(a).b4(a,b,c)}
J.ch=function(a,b,c,d){return J.k(a).b5(a,b,c,d)}
J.e1=function(a,b){return J.k(a).b6(a,b)}
J.e2=function(a,b,c,d,e){return J.k(a).b7(a,b,c,d,e)}
J.e3=function(a,b){return J.j0(a).O(a,b)}
J.bE=function(a,b,c){return J.aU(a).cw(a,b,c)}
J.bF=function(a){return J.k(a).b9(a)}
J.e4=function(a){return J.k(a).ba(a)}
J.e5=function(a){return J.k(a).bd(a)}
J.e6=function(a){return J.k(a).cB(a)}
J.e7=function(a,b){return J.k(a).bf(a,b)}
J.bG=function(a,b){return J.k(a).bg(a,b)}
J.e8=function(a,b,c,d){return J.k(a).bh(a,b,c,d)}
J.e9=function(a,b,c,d,e){return J.k(a).cC(a,b,c,d,e)}
J.ea=function(a,b,c,d,e){return J.k(a).bi(a,b,c,d,e)}
J.eb=function(a,b,c,d,e,f){return J.k(a).cD(a,b,c,d,e,f)}
J.bg=function(a,b){return J.k(a).bj(a,b)}
J.ec=function(a,b){return J.k(a).bk(a,b)}
J.ed=function(a){return J.k(a).cE(a)}
J.ee=function(a,b){return J.k(a).B(a,b)}
J.az=function(a){return J.A(a).gt(a)}
J.ci=function(a){return J.iZ(a).gw(a)}
J.b0=function(a){return J.aU(a).gk(a)}
J.ef=function(a){return J.by(a).gbI(a)}
J.bH=function(a){return J.by(a).gK(a)}
J.bI=function(a){return J.by(a).gL(a)}
J.cj=function(a){return J.by(a).gR(a)}
J.eg=function(a){return J.k(a).a2(a)}
J.eh=function(a){return J.k(a).an(a)}
J.ei=function(a,b){return J.k(a).ao(a,b)}
J.ej=function(a,b,c){return J.k(a).ap(a,b,c)}
J.ck=function(a,b,c){return J.k(a).at(a,b,c)}
J.ek=function(a,b){return J.k(a).bm(a,b)}
J.el=function(a,b,c){return J.k(a).bo(a,b,c)}
J.em=function(a,b,c,d){return J.k(a).aw(a,b,c,d)}
J.en=function(a,b,c,d,e,f,g){return J.k(a).br(a,b,c,d,e,f,g)}
J.cl=function(a,b,c,d){return J.k(a).bs(a,b,c,d)}
J.bh=function(a){return J.A(a).j(a)}
J.eo=function(a,b,c,d){return J.k(a).cU(a,b,c,d)}
J.ep=function(a,b,c){return J.k(a).bv(a,b,c)}
J.eq=function(a,b,c){return J.k(a).bw(a,b,c)}
J.bJ=function(a,b,c){return J.k(a).bx(a,b,c)}
J.er=function(a,b,c){return J.k(a).by(a,b,c)}
J.cm=function(a,b,c){return J.k(a).bz(a,b,c)}
J.cn=function(a,b,c){return J.k(a).bA(a,b,c)}
J.co=function(a,b,c){return J.k(a).bB(a,b,c)}
J.cp=function(a,b,c,d){return J.k(a).bC(a,b,c,d)}
J.cq=function(a,b,c,d){return J.k(a).bD(a,b,c,d)}
J.es=function(a,b){return J.k(a).bE(a,b)}
J.et=function(a,b,c){return J.k(a).cV(a,b,c)}
J.eu=function(a,b,c,d,e,f,g){return J.k(a).bF(a,b,c,d,e,f,g)}
J.ev=function(a,b,c,d,e){return J.k(a).bH(a,b,c,d,e)}
var $=I.p
C.p=W.aB.prototype
C.e=W.eD.prototype
C.j=W.bj.prototype
C.r=W.f7.prototype
C.C=J.e.prototype
C.a=J.b3.prototype
C.f=J.cH.prototype
C.i=J.b4.prototype
C.J=J.b5.prototype
C.K=H.fu.prototype
C.n=H.fw.prototype
C.v=J.fB.prototype
C.q=J.aM.prototype
C.A=W.ho.prototype
C.B=new P.hW()
C.d=new P.ib()
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
C.t=function(hooks) { return hooks; }

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
C.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.L=new G.y("vec3","vertex btangents",0)
C.c=new G.y("vec3","",0)
C.M=new G.y("vec4","delta from light",0)
C.o=new G.y("","",0)
C.w=new G.y("vec3","vertex coordinates",0)
C.N=new G.y("vec3","vertex binormals",0)
C.x=new G.y("vec4","for wireframe",0)
C.O=new G.y("vec4","per vertex color",0)
C.P=new G.y("float","for normal maps",0)
C.k=new G.y("mat4","",0)
C.R=new G.y("mat4","",4)
C.Q=new G.y("mat4","",128)
C.b=new G.y("float","",0)
C.S=new G.y("float","",4)
C.T=new G.y("float","depth for shadowmaps",0)
C.h=new G.y("sampler2D","",0)
C.U=new G.y("float","for bump maps",0)
C.V=new G.y("vec2","texture uvs",0)
C.W=new G.y("float","time since program start in sec",0)
C.l=new G.y("vec2","",0)
C.X=new G.y("samplerCube","",0)
C.m=new G.y("vec4","",0)
C.Y=new G.y("vec3","vertex normals",0)
C.Z=new G.y("sampler2DShadow","",0)
C.y=new G.y("vec3","per vertex color",0)
C.z=new G.y("mat3","",0)
C.a_=new G.y("vec3","vertex tangents",0)
$.a0=0
$.aA=null
$.ct=null
$.c0=!1
$.dw=null
$.dp=null
$.dB=null
$.bw=null
$.bA=null
$.c8=null
$.av=null
$.aO=null
$.aP=null
$.c1=!1
$.E=C.d
$.cA=null
$.cz=null
$.cy=null
$.cx=null
$.du=0
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
I.$lazy(y,x,w)}})(["jA","dG",function(){return H.dv("_$dart_dartClosure")},"kd","cc",function(){return H.dv("_$dart_js")},"kY","dJ",function(){return H.a2(H.bq({
toString:function(){return"$receiver$"}}))},"kZ","dK",function(){return H.a2(H.bq({$method$:null,
toString:function(){return"$receiver$"}}))},"l_","dL",function(){return H.a2(H.bq(null))},"l0","dM",function(){return H.a2(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"l3","dP",function(){return H.a2(H.bq(void 0))},"l4","dQ",function(){return H.a2(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"l2","dO",function(){return H.a2(H.d0(null))},"l1","dN",function(){return H.a2(function(){try{null.$method$}catch(z){return z.message}}())},"l6","dS",function(){return H.a2(H.d0(void 0))},"l5","dR",function(){return H.a2(function(){try{(void 0).$method$}catch(z){return z.message}}())},"lg","cd",function(){return P.hr()},"lt","aY",function(){return[]},"jx","dF",function(){return{}},"kM","dH",function(){return new G.d_(1281,0,4294967295)},"jt","dE",function(){return new G.cZ(32774,770,769)},"lr","Z",function(){return P.cK(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.y,"aColorAlpha",C.O,"aPosition",C.w,"aTexUV",C.V,"aNormal",C.Y,"aBinormal",C.N,"aCenter",C.x,"aPointSize",C.b,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.a_,"aBitangent",C.L,"iaRotation",C.m,"iaTranslation",C.c,"iaScale",C.b,"iaColor",C.c,"vColor",C.y,"vTexUV",C.l,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.w,"vPositionFromLight",C.M,"vCenter",C.x,"vDepth",C.T,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.z,"uConvolutionMatrix",C.z,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.Z,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.X,"uAnimationTable",C.h,"uTime",C.W,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.c,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.Q,"uLightDescs",C.R,"uLightCount",C.b,"uLightTypes",C.S,"uBumpScale",C.U,"uNormalScale",C.P],P.f,G.y)},"la","dT",function(){return C.B},"lA","dX",function(){var z,y
z=G.bp("Textured")
y=[P.f]
z.ay(H.l(["aPosition","aTexUV"],y))
z.W(H.l(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.az(H.l(["vTexUV"],y))
z.X(H.l(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"],y))
return z},"lz","dW",function(){var z,y
z=G.bp("TexturedF")
y=[P.f]
z.az(H.l(["vTexUV"],y))
z.W(H.l(["uColor","uTexture"],y))
z.X(H.l(["oFragColor = texture(uTexture, vTexUV) + vec4( uColor, 0.0 );"],y))
return z},"ly","dV",function(){var z,y
z=G.bp("PointSpritesV")
y=[P.f]
z.ay(H.l(["aPosition"],y))
z.W(H.l(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"],y))
z.X(H.l(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"],y))
return z},"lx","dU",function(){var z,y
z=G.bp("PointSpritesF")
y=[P.f]
z.W(H.l(["uTexture"],y))
z.X(H.l(["oFragColor = texture( uTexture,  gl_PointCoord);"],y))
return z},"kQ","dI",function(){return H.l([T.bY(1,0.2),T.bY(0,0.7),T.bY(0,0.7)],[T.a3])}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.J},{func:1,ret:-1},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.J,args:[,]},{func:1,ret:P.J,args:[,,]},{func:1,ret:P.f,args:[P.B]},{func:1,args:[,P.f]},{func:1,args:[P.f]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,ret:P.J,args:[,],opt:[P.X]},{func:1,ret:[P.a4,,],args:[,]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.J,args:[P.F]},{func:1,args:[W.U]},{func:1,ret:-1,args:[W.U]},{func:1,ret:-1,args:[P.T,T.p]},{func:1,ret:P.B,args:[P.B,P.b]},{func:1,ret:-1,args:[P.F]},{func:1,ret:P.B,args:[,,]}]
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
if(x==y)H.jl(d||a)
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
Isolate.aT=a.aT
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
if(typeof dartMainRunner==="function")dartMainRunner(M.dy,[])
else M.dy([])})})()
//# sourceMappingURL=torusknot_camera.dart.js.map
