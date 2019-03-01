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
var dart=[["","",,H,{"^":"",k_:{"^":"a;a"}}],["","",,J,{"^":"",
c1:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bu:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.c0==null){H.iW()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(P.cO("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.c5()]
if(v!=null)return v
v=H.j0(a)
if(v!=null)return v
if(typeof a=="function")return C.J
y=Object.getPrototypeOf(a)
if(y==null)return C.w
if(y===Object.prototype)return C.w
if(typeof w=="function"){Object.defineProperty(w,$.c5(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
d:{"^":"a;",
v:function(a,b){return a===b},
gt:function(a){return H.aH(a)},
k:["bQ",function(a){return"Instance of '"+H.aI(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
eT:{"^":"d;",
k:function(a){return String(a)},
gt:function(a){return a?519018:218159},
$isbU:1},
cv:{"^":"d;",
v:function(a,b){return null==b},
k:function(a){return"null"},
gt:function(a){return 0},
$isA:1},
bJ:{"^":"d;",
gt:function(a){return 0},
k:["bR",function(a){return String(a)}]},
fm:{"^":"bJ;"},
aK:{"^":"bJ;"},
b4:{"^":"bJ;",
k:function(a){var z=a[$.dr()]
if(z==null)return this.bR(a)
return"JavaScript function for "+H.e(J.be(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbG:1},
b1:{"^":"d;$ti",
n:function(a,b){H.t(b,H.o(a,0))
if(!!a.fixed$length)H.a0(P.u("add"))
a.push(b)},
cm:function(a,b){var z,y
H.C(b,"$isi",[H.o(a,0)],"$asi")
if(!!a.fixed$length)H.a0(P.u("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.V)(b),++y)a.push(b[y])},
W:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.e(a[y]))
return z.join(b)},
bM:function(a,b){if(!!a.immutable$list)H.a0(P.u("sort"))
H.fK(a,J.iu(),H.o(a,0))},
au:function(a){return this.bM(a,null)},
k:function(a){return P.bH(a,"[","]")},
gB:function(a){return new J.ei(a,a.length,0,[H.o(a,0)])},
gt:function(a){return H.aH(a)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.b(H.b7(a,b))
return a[b]},
i:function(a,b,c){H.t(c,H.o(a,0))
if(!!a.immutable$list)H.a0(P.u("indexed set"))
if(b>=a.length||b<0)throw H.b(H.b7(a,b))
a[b]=c},
$isi:1,
$isc:1,
p:{
eS:function(a,b){return J.bI(H.r(a,[b]))},
bI:function(a){H.bb(a)
a.fixed$length=Array
return a},
jY:[function(a,b){return J.dQ(H.dj(a,"$isL"),H.dj(b,"$isL"))},"$2","iu",8,0,21]}},
jZ:{"^":"b1;$ti"},
ei:{"^":"a;a,b,c,0d,$ti",
saH:function(a){this.d=H.t(a,H.o(this,0))},
gA:function(a){return this.d},
u:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.V(z))
x=this.c
if(x>=y){this.saH(null)
return!1}this.saH(z[x]);++this.c
return!0}},
b2:{"^":"d;",
F:function(a,b){var z
H.c2(b)
if(typeof b!=="number")throw H.b(H.aP(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gaf(b)
if(this.gaf(a)===z)return 0
if(this.gaf(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaf:function(a){return a===0?1/a<0:a<0},
bv:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.b(P.u(""+a+".toInt()"))},
ct:function(a,b,c){if(this.F(b,c)>0)throw H.b(H.aP(b))
if(this.F(a,b)<0)return b
if(this.F(a,c)>0)return c
return a},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gt:function(a){return a&0x1FFFFFFF},
K:function(a,b){return(a|0)===a?a/b|0:this.ck(a,b)},
ck:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.b(P.u("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
aW:function(a,b){var z
if(a>0)z=this.ci(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
ci:function(a,b){return b>31?0:a>>>b},
I:function(a,b){if(typeof b!=="number")throw H.b(H.aP(b))
return a>b},
$isL:1,
$asL:function(){return[P.y]},
$isat:1,
$isy:1},
cu:{"^":"b2;",$isE:1},
eU:{"^":"b2;"},
b3:{"^":"d;",
a_:function(a,b){if(b>=a.length)throw H.b(H.b7(a,b))
return a.charCodeAt(b)},
C:function(a,b){H.w(b)
if(typeof b!=="string")throw H.b(P.cj(b,null,null))
return a+b},
bP:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.bk(b,null,null))
if(b>c)throw H.b(P.bk(b,null,null))
if(c>a.length)throw H.b(P.bk(c,null,null))
return a.substring(b,c)},
bO:function(a,b){return this.bP(a,b,null)},
cu:function(a,b,c){if(c>a.length)throw H.b(P.fx(c,0,a.length,null,null))
return H.j6(a,b,c)},
F:function(a,b){var z
H.w(b)
if(typeof b!=="string")throw H.b(H.aP(b))
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
$isfk:1,
$isf:1}}],["","",,H,{"^":"",
fK:function(a,b,c){H.C(a,"$isc",[c],"$asc")
H.j(b,{func:1,ret:P.E,args:[c,c]})
H.b5(a,0,J.aY(a)-1,b,c)},
b5:function(a,b,c,d,e){H.C(a,"$isc",[e],"$asc")
H.j(d,{func:1,ret:P.E,args:[e,e]})
if(c-b<=32)H.fJ(a,b,c,d,e)
else H.fI(a,b,c,d,e)},
fJ:function(a,b,c,d,e){var z,y,x,w,v
H.C(a,"$isc",[e],"$asc")
H.j(d,{func:1,ret:P.E,args:[e,e]})
for(z=b+1,y=J.aS(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.W(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
fI:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.C(a,"$isc",[a2],"$asc")
H.j(a1,{func:1,ret:P.E,args:[a2,a2]})
z=C.e.K(a0-b+1,6)
y=b+z
x=a0-z
w=C.e.K(b+a0,2)
v=w-z
u=w+z
t=J.aS(a)
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
if(J.aw(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.N()
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
if(typeof e!=="number")return e.N()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.I()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.I()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.N()
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
H.b5(a,b,m-2,a1,a2)
H.b5(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aw(a1.$2(t.h(a,m),r),0);)++m
for(;J.aw(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.N()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.b5(a,m,l,a1,a2)}else H.b5(a,m,l,a1,a2)},
eI:{"^":"i;"},
f2:{"^":"a;a,b,c,0d,$ti",
saI:function(a){this.d=H.t(a,H.o(this,0))},
gA:function(a){return this.d},
u:function(){var z,y,x,w
z=this.a
y=J.aS(z)
x=y.gj(z)
if(this.b!==x)throw H.b(P.az(z))
w=this.c
if(w>=x){this.saI(null)
return!1}this.saI(y.q(z,w));++this.c
return!0}},
bi:{"^":"a;$ti"}}],["","",,H,{"^":"",
av:function(a){var z,y
z=H.w(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
iQ:function(a){return init.types[H.I(a)]},
iZ:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.x(a).$isp},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.be(a)
if(typeof z!=="string")throw H.b(H.aP(a))
return z},
aH:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aI:function(a){return H.fn(a)+H.bT(H.a9(a),0,null)},
fn:function(a){var z,y,x,w,v,u,t,s,r
z=J.x(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.C||!!z.$isaK){u=C.v(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.av(w.length>1&&C.i.a_(w,0)===36?C.i.bO(w,1):w)},
ah:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
fu:function(a){var z=H.ah(a).getFullYear()+0
return z},
fs:function(a){var z=H.ah(a).getMonth()+1
return z},
fo:function(a){var z=H.ah(a).getDate()+0
return z},
fp:function(a){var z=H.ah(a).getHours()+0
return z},
fr:function(a){var z=H.ah(a).getMinutes()+0
return z},
ft:function(a){var z=H.ah(a).getSeconds()+0
return z},
fq:function(a){var z=H.ah(a).getMilliseconds()+0
return z},
ba:function(a){throw H.b(H.aP(a))},
q:function(a,b){if(a==null)J.aY(a)
throw H.b(H.b7(a,b))},
b7:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ax(!0,b,"index",null)
z=H.I(J.aY(a))
if(!(b<0)){if(typeof z!=="number")return H.ba(z)
y=b>=z}else y=!0
if(y)return P.z(b,a,"index",null,z)
return P.bk(b,"index",null)},
aP:function(a){return new P.ax(!0,a,null,null)},
b:function(a){var z
if(a==null)a=new P.cD()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.dm})
z.name=""}else z.toString=H.dm
return z},
dm:function(){return J.be(this.dartException)},
a0:function(a){throw H.b(a)},
V:function(a){throw H.b(P.az(a))},
aV:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.j8(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.aW(x,16)&8191)===10)switch(w){case 438:return z.$1(H.bK(H.e(y)+" (Error "+w+")",null))
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
if(m!=null)return z.$1(H.bK(H.w(y),m))
else{m=u.E(y)
if(m!=null){m.method="call"
return z.$1(H.bK(H.w(y),m))}else{m=t.E(y)
if(m==null){m=s.E(y)
if(m==null){m=r.E(y)
if(m==null){m=q.E(y)
if(m==null){m=p.E(y)
if(m==null){m=s.E(y)
if(m==null){m=o.E(y)
if(m==null){m=n.E(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.cC(H.w(y),m))}}return z.$1(new H.h0(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.cG()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ax(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.cG()
return a},
aT:function(a){var z
if(a==null)return new H.d1(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.d1(a)},
iH:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
iY:function(a,b,c,d,e,f){H.h(a,"$isbG")
switch(H.I(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.cs("Unsupported number of arguments for wrapped closure"))},
aR:function(a,b){var z
H.I(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.iY)
a.$identity=z
return z},
eu:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.x(d).$isc){z.$reflectionInfo=d
x=H.fz(z).r}else x=d
w=e?Object.create(new H.fO().constructor.prototype):Object.create(new H.bB(null,null,null,null).constructor.prototype)
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
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.iQ,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cl:H.bC
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
er:function(a,b,c,d){var z=H.bC
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cm:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.et(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.er(y,!w,z,b)
if(y===0){w=$.X
if(typeof w!=="number")return w.C()
$.X=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.ay
if(v==null){v=H.bf("self")
$.ay=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.X
if(typeof w!=="number")return w.C()
$.X=w+1
t+=w
w="return function("+t+"){return this."
v=$.ay
if(v==null){v=H.bf("self")
$.ay=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
es:function(a,b,c,d){var z,y
z=H.bC
y=H.cl
switch(b?-1:a){case 0:throw H.b(H.fD("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
et:function(a,b){var z,y,x,w,v,u,t,s
z=$.ay
if(z==null){z=H.bf("self")
$.ay=z}y=$.ck
if(y==null){y=H.bf("receiver")
$.ck=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.es(w,!u,x,b)
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
bX:function(a,b,c,d,e,f,g){return H.eu(a,b,H.I(c),d,!!e,!!f,g)},
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
I:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.b(H.U(a,"int"))},
c4:function(a,b){throw H.b(H.U(a,H.av(H.w(b).substring(3))))},
j4:function(a,b){throw H.b(H.ep(a,H.av(H.w(b).substring(3))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.x(a)[b])return a
H.c4(a,b)},
a1:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.x(a)[b]
else z=!0
if(z)return a
H.j4(a,b)},
dj:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.x(a)[b])return a
H.c4(a,b)},
bb:function(a){if(a==null)return a
if(!!J.x(a).$isc)return a
throw H.b(H.U(a,"List<dynamic>"))},
j_:function(a,b){var z
if(a==null)return a
z=J.x(a)
if(!!z.$isc)return a
if(z[b])return a
H.c4(a,b)},
bY:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.I(z)]
else return a.$S()}return},
b8:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.bY(J.x(a))
if(z==null)return!1
return H.d5(z,null,b,null)},
j:function(a,b){var z,y
if(a==null)return a
if($.bQ)return a
$.bQ=!0
try{if(H.b8(a,b))return a
z=H.bc(b)
y=H.U(a,z)
throw H.b(y)}finally{$.bQ=!1}},
bt:function(a,b){if(a!=null&&!H.bW(a,b))H.a0(H.U(a,H.bc(b)))
return a},
d9:function(a){var z,y
z=J.x(a)
if(!!z.$ism){y=H.bY(z)
if(y!=null)return H.bc(y)
return"Closure"}return H.aI(a)},
j7:function(a){throw H.b(new P.ez(H.w(a)))},
df:function(a){return init.getIsolateTag(a)},
r:function(a,b){a.$ti=b
return a},
a9:function(a){if(a==null)return
return a.$ti},
ll:function(a,b,c){return H.aU(a["$as"+H.e(c)],H.a9(b))},
b9:function(a,b,c,d){var z
H.w(c)
H.I(d)
z=H.aU(a["$as"+H.e(c)],H.a9(b))
return z==null?null:z[d]},
o:function(a,b){var z
H.I(b)
z=H.a9(a)
return z==null?null:z[b]},
bc:function(a){return H.a8(a,null)},
a8:function(a,b){var z,y
H.C(b,"$isc",[P.f],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.av(a[0].builtin$cls)+H.bT(a,1,b)
if(typeof a=="function")return H.av(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.I(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.q(b,y)
return H.e(b[y])}if('func' in a)return H.it(a,b)
if('futureOr' in a)return"FutureOr<"+H.a8("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
it:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.f]
H.C(b,"$isc",z,"$asc")
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
for(z=H.iG(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.w(z[l])
n=n+m+H.a8(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bT:function(a,b,c){var z,y,x,w,v,u
H.C(c,"$isc",[P.f],"$asc")
if(a==null)return""
z=new P.bM("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.a8(u,c)}return"<"+z.k(0)+">"},
iP:function(a){var z,y,x,w
z=J.x(a)
if(!!z.$ism){y=H.bY(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.a9(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aU:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aQ:function(a,b,c,d){var z,y
H.w(b)
H.bb(c)
H.w(d)
if(a==null)return!1
z=H.a9(a)
y=J.x(a)
if(y[b]==null)return!1
return H.dc(H.aU(y[d],z),null,c,null)},
C:function(a,b,c,d){H.w(b)
H.bb(c)
H.w(d)
if(a==null)return a
if(H.aQ(a,b,c,d))return a
throw H.b(H.U(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.av(b.substring(3))+H.bT(c,0,null),init.mangledGlobalNames)))},
dc:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.P(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.P(a[y],b,c[y],d))return!1
return!0},
lh:function(a,b,c){return a.apply(b,H.aU(J.x(b)["$as"+H.e(c)],H.a9(b)))},
dh:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="A"||a===-1||a===-2||H.dh(z)}return!1},
bW:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="A"||b===-1||b===-2||H.dh(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.bW(a,"type" in b?b.type:null))return!0
if('func' in b)return H.b8(a,b)}z=J.x(a).constructor
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
if('func' in a)return c.builtin$cls==="bG"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.P("type" in a?a.type:null,b,x,d)
else if(H.P(a,b,x,d))return!0
else{if(!('$is'+"aB" in y.prototype))return!1
w=y.prototype["$as"+"aB"]
v=H.aU(w,z?a.slice(1):null)
return H.P(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.dc(H.aU(r,z),b,u,d)},
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
return H.j3(m,b,l,d)},
j3:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.P(c[w],d,a[w],b))return!1}return!0},
li:function(a,b,c){Object.defineProperty(a,H.w(b),{value:c,enumerable:false,writable:true,configurable:true})},
j0:function(a){var z,y,x,w,v,u
z=H.w($.dg.$1(a))
y=$.bs[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bv[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.w($.db.$2(a,z))
if(z!=null){y=$.bs[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bv[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bw(x)
$.bs[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bv[z]=x
return x}if(v==="-"){u=H.bw(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.dk(a,x)
if(v==="*")throw H.b(P.cO(z))
if(init.leafTags[z]===true){u=H.bw(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.dk(a,x)},
dk:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.c1(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bw:function(a){return J.c1(a,!1,null,!!a.$isp)},
j2:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bw(z)
else return J.c1(z,c,null,null)},
iW:function(){if(!0===$.c0)return
$.c0=!0
H.iX()},
iX:function(){var z,y,x,w,v,u,t,s
$.bs=Object.create(null)
$.bv=Object.create(null)
H.iS()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.dl.$1(v)
if(u!=null){t=H.j2(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
iS:function(){var z,y,x,w,v,u,t
z=C.G()
z=H.as(C.D,H.as(C.I,H.as(C.u,H.as(C.u,H.as(C.H,H.as(C.E,H.as(C.F(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.dg=new H.iT(v)
$.db=new H.iU(u)
$.dl=new H.iV(t)},
as:function(a,b){return a(b)||b},
j6:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fy:{"^":"a;a,b,c,d,e,f,r,0x",p:{
fz:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bI(z)
y=z[0]
x=z[1]
return new H.fy(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
fW:{"^":"a;a,b,c,d,e,f",
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
return new H.fW(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bm:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
cL:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
fi:{"^":"J;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
cC:function(a,b){return new H.fi(a,b==null?null:b.method)}}},
eV:{"^":"J;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
bK:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.eV(a,y,z?null:b.receiver)}}},
h0:{"^":"J;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
j8:{"^":"m:5;a",
$1:function(a){if(!!J.x(a).$isJ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
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
k:function(a){return"Closure '"+H.aI(this).trim()+"'"},
gbK:function(){return this},
$isbG:1,
gbK:function(){return this}},
cI:{"^":"m;"},
fO:{"^":"cI;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.av(z)+"'"}},
bB:{"^":"cI;a,b,c,d",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bB))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gt:function(a){var z,y
z=this.c
if(z==null)y=H.aH(this.a)
else y=typeof z!=="object"?J.a2(z):H.aH(z)
return(y^H.aH(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.aI(z)+"'")},
p:{
bC:function(a){return a.a},
cl:function(a){return a.c},
bf:function(a){var z,y,x,w,v
z=new H.bB("self","target","receiver","name")
y=J.bI(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
fX:{"^":"J;a",
k:function(a){return this.a},
p:{
U:function(a,b){return new H.fX("TypeError: "+P.bh(a)+": type '"+H.d9(a)+"' is not a subtype of type '"+b+"'")}}},
eo:{"^":"J;a",
k:function(a){return this.a},
p:{
ep:function(a,b){return new H.eo("CastError: "+P.bh(a)+": type '"+H.d9(a)+"' is not a subtype of type '"+b+"'")}}},
fC:{"^":"J;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
fD:function(a){return new H.fC(a)}}},
cM:{"^":"a;a,0b,0c,0d",
gU:function(){var z=this.b
if(z==null){z=H.bc(this.a)
this.b=z}return z},
k:function(a){return this.gU()},
gt:function(a){var z=this.d
if(z==null){z=C.i.gt(this.gU())
this.d=z}return z},
v:function(a,b){if(b==null)return!1
return b instanceof H.cM&&this.gU()===b.gU()}},
cw:{"^":"f3;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gH:function(a){return new H.aE(this,[H.o(this,0)])},
ac:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.c6(z,b)}else{y=this.cF(b)
return y}},
cF:function(a){var z=this.d
if(z==null)return!1
return this.ae(this.a6(z,J.a2(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.S(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.S(w,b)
x=y==null?null:y.b
return x}else return this.cG(b)},
cG:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.a6(z,J.a2(a)&0x3ffffff)
x=this.ae(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.t(b,H.o(this,0))
H.t(c,H.o(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.a7()
this.b=z}this.aK(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.a7()
this.c=y}this.aK(y,b,c)}else{x=this.d
if(x==null){x=this.a7()
this.d=x}w=J.a2(b)&0x3ffffff
v=this.a6(x,w)
if(v==null)this.aa(x,w,[this.a8(b,c)])
else{u=this.ae(v,b)
if(u>=0)v[u].b=c
else v.push(this.a8(b,c))}}},
w:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.o(this,0),H.o(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.b(P.az(this))
z=z.c}},
aK:function(a,b,c){var z
H.t(b,H.o(this,0))
H.t(c,H.o(this,1))
z=this.S(a,b)
if(z==null)this.aa(a,b,this.a8(b,c))
else z.b=c},
aT:function(){this.r=this.r+1&67108863},
a8:function(a,b){var z,y
z=new H.f_(H.t(a,H.o(this,0)),H.t(b,H.o(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.aT()
return z},
ae:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aw(a[y].a,b))return y
return-1},
k:function(a){return P.cz(this)},
S:function(a,b){return a[b]},
a6:function(a,b){return a[b]},
aa:function(a,b,c){a[b]=c},
c7:function(a,b){delete a[b]},
c6:function(a,b){return this.S(a,b)!=null},
a7:function(){var z=Object.create(null)
this.aa(z,"<non-identifier-key>",z)
this.c7(z,"<non-identifier-key>")
return z},
$iscx:1},
f_:{"^":"a;a,b,0c,0d"},
aE:{"^":"eI;a,$ti",
gj:function(a){return this.a.a},
gB:function(a){var z,y
z=this.a
y=new H.f0(z,z.r,this.$ti)
y.c=z.e
return y}},
f0:{"^":"a;a,b,0c,0d,$ti",
saJ:function(a){this.d=H.t(a,H.o(this,0))},
gA:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.az(z))
else{z=this.c
if(z==null){this.saJ(null)
return!1}else{this.saJ(z.a)
this.c=this.c.c
return!0}}}},
iT:{"^":"m:5;a",
$1:function(a){return this.a(a)}},
iU:{"^":"m:10;a",
$2:function(a,b){return this.a(a,b)}},
iV:{"^":"m:11;a",
$1:function(a){return this.a(H.w(a))}}}],["","",,H,{"^":"",
iG:function(a){return J.eS(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
c3:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
a_:function(a,b,c){H.bb(b)
if(a>>>0!==a||a>=c)throw H.b(H.b7(b,a))},
fh:{"^":"d;",$isfY:1,"%":"DataView;ArrayBufferView;bL|cW|cX|cB|cY|cZ|a7"},
bL:{"^":"fh;",
gj:function(a){return a.length},
$isp:1,
$asp:I.bZ},
cB:{"^":"cX;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
i:function(a,b,c){H.de(c)
H.a_(b,a,a.length)
a[b]=c},
$asbi:function(){return[P.at]},
$asl:function(){return[P.at]},
$isi:1,
$asi:function(){return[P.at]},
$isc:1,
$asc:function(){return[P.at]},
"%":"Float64Array"},
a7:{"^":"cZ;",
i:function(a,b,c){H.I(c)
H.a_(b,a,a.length)
a[b]=c},
$asbi:function(){return[P.E]},
$asl:function(){return[P.E]},
$isi:1,
$asi:function(){return[P.E]},
$isc:1,
$asc:function(){return[P.E]}},
fg:{"^":"cB;",$isa4:1,"%":"Float32Array"},
k9:{"^":"a7;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"Int16Array"},
ka:{"^":"a7;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
$iseQ:1,
"%":"Int32Array"},
kb:{"^":"a7;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"Int8Array"},
kc:{"^":"a7;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
kd:{"^":"a7;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
ke:{"^":"a7;",
gj:function(a){return a.length},
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
kf:{"^":"a7;",
gj:function(a){return a.length},
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
cW:{"^":"bL+l;"},
cX:{"^":"cW+bi;"},
cY:{"^":"bL+l;"},
cZ:{"^":"cY+bi;"}}],["","",,P,{"^":"",
h8:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.iB()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aR(new P.ha(z),1)).observe(y,{childList:true})
return new P.h9(z,y,x)}else if(self.setImmediate!=null)return P.iC()
return P.iD()},
l5:[function(a){self.scheduleImmediate(H.aR(new P.hb(H.j(a,{func:1,ret:-1})),0))},"$1","iB",4,0,4],
l6:[function(a){self.setImmediate(H.aR(new P.hc(H.j(a,{func:1,ret:-1})),0))},"$1","iC",4,0,4],
l7:[function(a){H.j(a,{func:1,ret:-1})
P.ia(0,a)},"$1","iD",4,0,4],
ix:function(a,b){if(H.b8(a,{func:1,args:[P.a,P.T]}))return H.j(a,{func:1,ret:null,args:[P.a,P.T]})
if(H.b8(a,{func:1,args:[P.a]}))return H.j(a,{func:1,ret:null,args:[P.a]})
throw H.b(P.cj(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
iw:function(){var z,y
for(;z=$.ar,z!=null;){$.aO=null
y=z.b
$.ar=y
if(y==null)$.aN=null
z.a.$0()}},
lf:[function(){$.bR=!0
try{P.iw()}finally{$.aO=null
$.bR=!1
if($.ar!=null)$.c6().$1(P.dd())}},"$0","dd",0,0,1],
d8:function(a){var z=new P.cQ(H.j(a,{func:1,ret:-1}))
if($.ar==null){$.aN=z
$.ar=z
if(!$.bR)$.c6().$1(P.dd())}else{$.aN.b=z
$.aN=z}},
iA:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
z=$.ar
if(z==null){P.d8(a)
$.aO=$.aN
return}y=new P.cQ(a)
x=$.aO
if(x==null){y.b=z
$.aO=y
$.ar=y}else{y.b=x.b
x.b=y
$.aO=y
if(y.b==null)$.aN=y}},
j5:function(a){var z,y
z={func:1,ret:-1}
H.j(a,z)
y=$.B
if(C.d===y){P.br(null,null,C.d,a)
return}y.toString
P.br(null,null,y,H.j(y.b1(a),z))},
bq:function(a,b,c,d,e){var z={}
z.a=d
P.iA(new P.iy(z,e))},
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
iz:function(a,b,c,d,e,f,g,h,i){var z,y
H.j(d,{func:1,ret:g,args:[h,i]})
H.t(e,h)
H.t(f,i)
y=$.B
if(y===c)return d.$2(e,f)
$.B=c
z=y
try{y=d.$2(e,f)
return y}finally{$.B=z}},
br:function(a,b,c,d){var z
H.j(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.b1(d):c.cq(d,-1)
P.d8(d)},
ha:{"^":"m:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
h9:{"^":"m:12;a,b,c",
$1:function(a){var z,y
this.a.a=H.j(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
hb:{"^":"m:0;a",
$0:function(){this.a.$0()}},
hc:{"^":"m:0;a",
$0:function(){this.a.$0()}},
i9:{"^":"a;a,0b,c",
c1:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aR(new P.ib(this,b),0),a)
else throw H.b(P.u("`setTimeout()` not found."))},
p:{
ia:function(a,b){var z=new P.i9(!0,0)
z.c1(a,b)
return z}}},
ib:{"^":"m:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
he:{"^":"a;$ti"},
i6:{"^":"he;a,$ti"},
aq:{"^":"a;0a,b,c,d,e,$ti",
cH:function(a){if(this.c!==6)return!0
return this.b.b.ah(H.j(this.d,{func:1,ret:P.bU,args:[P.a]}),a.a,P.bU,P.a)},
cE:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.o(this,1)}
w=this.b.b
if(H.b8(z,{func:1,args:[P.a,P.T]}))return H.bt(w.cN(z,a.a,a.b,null,y,P.T),x)
else return H.bt(w.ah(H.j(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
Z:{"^":"a;aX:a<,b,0cg:c<,$ti",
bu:function(a,b,c){var z,y,x,w
z=H.o(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.B
if(y!==C.d){y.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ix(b,y)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.Z(0,$.B,[c])
w=b==null?1:3
this.aL(new P.aq(x,w,a,b,[z,c]))
return x},
bt:function(a,b){return this.bu(a,null,b)},
aL:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isaq")
this.c=a}else{if(z===2){y=H.h(this.c,"$isZ")
z=y.a
if(z<4){y.aL(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.br(null,null,z,H.j(new P.hs(this,a),{func:1,ret:-1}))}},
aU:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isaq")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isZ")
y=u.a
if(y<4){u.aU(a)
return}this.a=y
this.c=u.c}z.a=this.T(a)
y=this.b
y.toString
P.br(null,null,y,H.j(new P.hx(z,this),{func:1,ret:-1}))}},
a9:function(){var z=H.h(this.c,"$isaq")
this.c=null
return this.T(z)},
T:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
a2:function(a){var z,y,x
z=H.o(this,0)
H.bt(a,{futureOr:1,type:z})
y=this.$ti
if(H.aQ(a,"$isaB",y,"$asaB"))if(H.aQ(a,"$isZ",y,null))P.cS(a,this)
else P.ht(a,this)
else{x=this.a9()
H.t(a,z)
this.a=4
this.c=a
P.aM(this,x)}},
aO:function(a,b){var z
H.h(b,"$isT")
z=this.a9()
this.a=8
this.c=new P.O(a,b)
P.aM(this,z)},
$isaB:1,
p:{
ht:function(a,b){var z,y,x
b.a=1
try{a.bu(new P.hu(b),new P.hv(b),null)}catch(x){z=H.aV(x)
y=H.aT(x)
P.j5(new P.hw(b,z,y))}},
cS:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isZ")
if(z>=4){y=b.a9()
b.a=a.a
b.c=a.c
P.aM(b,y)}else{y=H.h(b.c,"$isaq")
b.a=2
b.c=a
a.aU(y)}},
aM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isO")
y=y.b
u=v.a
t=v.b
y.toString
P.bq(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.aM(z.a,b)}y=z.a
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
P.bq(null,null,y,u,t)
return}o=$.B
if(o!=q)$.B=q
else o=null
y=b.c
if(y===8)new P.hA(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.hz(x,b,r).$0()}else if((y&2)!==0)new P.hy(z,x,b).$0()
if(o!=null)$.B=o
y=x.b
if(!!J.x(y).$isaB){if(y.a>=4){n=H.h(t.c,"$isaq")
t.c=null
b=t.T(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.cS(y,t)
return}}m=b.b
n=H.h(m.c,"$isaq")
m.c=null
b=m.T(n)
y=x.a
u=x.b
if(!y){H.t(u,H.o(m,0))
m.a=4
m.c=u}else{H.h(u,"$isO")
m.a=8
m.c=u}z.a=m
y=m}}}},
hs:{"^":"m:0;a,b",
$0:function(){P.aM(this.a,this.b)}},
hx:{"^":"m:0;a,b",
$0:function(){P.aM(this.b,this.a.a)}},
hu:{"^":"m:6;a",
$1:function(a){var z=this.a
z.a=0
z.a2(a)}},
hv:{"^":"m:13;a",
$2:function(a,b){H.h(b,"$isT")
this.a.aO(a,b)},
$1:function(a){return this.$2(a,null)}},
hw:{"^":"m:0;a,b,c",
$0:function(){this.a.aO(this.b,this.c)}},
hA:{"^":"m:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bq(H.j(w.d,{func:1}),null)}catch(v){y=H.aV(v)
x=H.aT(v)
if(this.d){w=H.h(this.a.a.c,"$isO").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isO")
else u.b=new P.O(y,x)
u.a=!0
return}if(!!J.x(z).$isaB){if(z instanceof P.Z&&z.gaX()>=4){if(z.gaX()===8){w=this.b
w.b=H.h(z.gcg(),"$isO")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.bt(new P.hB(t),null)
w.a=!1}}},
hB:{"^":"m:14;a",
$1:function(a){return this.a}},
hz:{"^":"m:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.o(x,0)
v=H.t(this.c,w)
u=H.o(x,1)
this.a.b=x.b.b.ah(H.j(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aV(t)
y=H.aT(t)
x=this.a
x.b=new P.O(z,y)
x.a=!0}}},
hy:{"^":"m:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isO")
w=this.c
if(w.cH(z)&&w.e!=null){v=this.b
v.b=w.cE(z)
v.a=!1}}catch(u){y=H.aV(u)
x=H.aT(u)
w=H.h(this.a.a.c,"$isO")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.O(y,x)
s.a=!0}}},
cQ:{"^":"a;a,0b"},
fQ:{"^":"a;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.Z(0,$.B,[P.E])
z.a=0
x=H.o(this,0)
w=H.j(new P.fS(z,this),{func:1,ret:-1,args:[x]})
H.j(new P.fT(z,y),{func:1,ret:-1})
W.ap(this.a,this.b,w,!1,x)
return y}},
fS:{"^":"m;a,b",
$1:function(a){H.t(a,H.o(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.A,args:[H.o(this.b,0)]}}},
fT:{"^":"m:0;a,b",
$0:function(){this.b.a2(this.a.a)}},
fR:{"^":"a;"},
O:{"^":"a;a,b",
k:function(a){return H.e(this.a)},
$isJ:1},
ih:{"^":"a;",$isl3:1},
iy:{"^":"m:0;a,b",
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
hV:{"^":"ih;",
cO:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
try{if(C.d===$.B){a.$0()
return}P.d6(null,null,this,a,-1)}catch(x){z=H.aV(x)
y=H.aT(x)
P.bq(null,null,this,z,H.h(y,"$isT"))}},
cP:function(a,b,c){var z,y,x
H.j(a,{func:1,ret:-1,args:[c]})
H.t(b,c)
try{if(C.d===$.B){a.$1(b)
return}P.d7(null,null,this,a,b,-1,c)}catch(x){z=H.aV(x)
y=H.aT(x)
P.bq(null,null,this,z,H.h(y,"$isT"))}},
cq:function(a,b){return new P.hX(this,H.j(a,{func:1,ret:b}),b)},
b1:function(a){return new P.hW(this,H.j(a,{func:1,ret:-1}))},
cr:function(a,b){return new P.hY(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
bq:function(a,b){H.j(a,{func:1,ret:b})
if($.B===C.d)return a.$0()
return P.d6(null,null,this,a,b)},
ah:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.t(b,d)
if($.B===C.d)return a.$1(b)
return P.d7(null,null,this,a,b,c,d)},
cN:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.t(b,e)
H.t(c,f)
if($.B===C.d)return a.$2(b,c)
return P.iz(null,null,this,a,b,c,d,e,f)}},
hX:{"^":"m;a,b,c",
$0:function(){return this.a.bq(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
hW:{"^":"m:1;a,b",
$0:function(){return this.a.cO(this.b)}},
hY:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.cP(this.b,H.t(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
cy:function(a,b,c){H.bb(a)
return H.C(H.iH(a,new H.cw(0,0,[b,c])),"$iscx",[b,c],"$ascx")},
a5:function(a,b){return new H.cw(0,0,[a,b])},
a6:function(a,b,c,d){return new P.hI(0,0,[d])},
eR:function(a,b,c){var z,y
if(P.bS(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.r([],[P.f])
y=$.aW()
C.a.n(y,a)
try{P.iv(a,z)}finally{if(0>=y.length)return H.q(y,-1)
y.pop()}y=P.cH(b,H.j_(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
bH:function(a,b,c){var z,y,x
if(P.bS(a))return b+"..."+c
z=new P.bM(b)
y=$.aW()
C.a.n(y,a)
try{x=z
x.a=P.cH(x.gJ(),a,", ")}finally{if(0>=y.length)return H.q(y,-1)
y.pop()}y=z
y.a=y.gJ()+c
y=z.gJ()
return y.charCodeAt(0)==0?y:y},
bS:function(a){var z,y
for(z=0;y=$.aW(),z<y.length;++z)if(a===y[z])return!0
return!1},
iv:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.C(b,"$isc",[P.f],"$asc")
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
f1:function(a,b){var z,y,x
z=P.a6(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.V)(a),++x)z.n(0,H.t(a[x],b))
return z},
cz:function(a){var z,y,x
z={}
if(P.bS(a))return"{...}"
y=new P.bM("")
try{C.a.n($.aW(),a)
x=y
x.a=x.gJ()+"{"
z.a=!0
J.e0(a,new P.f4(z,y))
z=y
z.a=z.gJ()+"}"}finally{z=$.aW()
if(0>=z.length)return H.q(z,-1)
z.pop()}z=y.gJ()
return z.charCodeAt(0)==0?z:z},
hI:{"^":"hC;a,0b,0c,0d,0e,0f,r,$ti",
gB:function(a){return P.cV(this,this.r,H.o(this,0))},
gj:function(a){return this.a},
D:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.h(z[b],"$isb6")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.h(y[b],"$isb6")!=null}else return this.c5(b)},
c5:function(a){var z=this.d
if(z==null)return!1
return this.a5(this.aR(z,a),a)>=0},
n:function(a,b){var z,y
H.t(b,H.o(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.bP()
this.b=z}return this.aM(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.bP()
this.c=y}return this.aM(y,b)}else return this.c2(0,b)},
c2:function(a,b){var z,y,x
H.t(b,H.o(this,0))
z=this.d
if(z==null){z=P.bP()
this.d=z}y=this.aP(b)
x=z[y]
if(x==null)z[y]=[this.a1(b)]
else{if(this.a5(x,b)>=0)return!1
x.push(this.a1(b))}return!0},
bp:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.aV(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.aV(this.c,b)
else return this.ce(0,b)},
ce:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.aR(z,b)
x=this.a5(y,b)
if(x<0)return!1
this.aY(y.splice(x,1)[0])
return!0},
L:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.a0()}},
aM:function(a,b){H.t(b,H.o(this,0))
if(H.h(a[b],"$isb6")!=null)return!1
a[b]=this.a1(b)
return!0},
aV:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isb6")
if(z==null)return!1
this.aY(z)
delete a[b]
return!0},
a0:function(){this.r=this.r+1&67108863},
a1:function(a){var z,y
z=new P.b6(H.t(a,H.o(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.a0()
return z},
aY:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.a0()},
aP:function(a){return J.a2(a)&0x3ffffff},
aR:function(a,b){return a[this.aP(b)]},
a5:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aw(a[y].a,b))return y
return-1},
p:{
bP:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
b6:{"^":"a;a,0b,0c"},
hJ:{"^":"a;a,b,0c,0d,$ti",
saN:function(a){this.d=H.t(a,H.o(this,0))},
gA:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.az(z))
else{z=this.c
if(z==null){this.saN(null)
return!1}else{this.saN(H.t(z.a,H.o(this,0)))
this.c=this.c.b
return!0}}},
p:{
cV:function(a,b,c){var z=new P.hJ(a,b,[c])
z.c=a.e
return z}}},
hC:{"^":"fE;"},
l:{"^":"a;$ti",
gB:function(a){return new H.f2(a,this.gj(a),0,[H.b9(this,a,"l",0)])},
q:function(a,b){return this.h(a,b)},
cD:function(a,b,c,d){var z,y,x
H.t(b,d)
H.j(c,{func:1,ret:d,args:[d,H.b9(this,a,"l",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.b(P.az(a))}return y},
k:function(a){return P.bH(a,"[","]")}},
f3:{"^":"M;"},
f4:{"^":"m:7;a,b",
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
H.j(b,{func:1,ret:-1,args:[H.b9(this,a,"M",0),H.b9(this,a,"M",1)]})
for(z=J.cb(this.gH(a));z.u();){y=z.gA(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.aY(this.gH(a))},
k:function(a){return P.cz(a)},
$isH:1},
fF:{"^":"a;$ti",
k:function(a){return P.bH(this,"{","}")},
$isi:1,
$iskx:1},
fE:{"^":"fF;"}}],["","",,P,{"^":"",
eK:function(a){if(a instanceof H.m)return a.k(0)
return"Instance of '"+H.aI(a)+"'"},
bh:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.be(a)
if(typeof a==="string")return JSON.stringify(a)
return P.eK(a)},
cs:function(a){return new P.hp(a)},
au:function(a){H.c3(H.e(a))},
bU:{"^":"a;"},
"+bool":0,
bg:{"^":"a;a,b",
v:function(a,b){if(b==null)return!1
return b instanceof P.bg&&this.a===b.a&&!0},
F:function(a,b){return C.e.F(this.a,H.h(b,"$isbg").a)},
gt:function(a){var z=this.a
return(z^C.e.aW(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.eA(H.fu(this))
y=P.aZ(H.fs(this))
x=P.aZ(H.fo(this))
w=P.aZ(H.fp(this))
v=P.aZ(H.fr(this))
u=P.aZ(H.ft(this))
t=P.eB(H.fq(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isL:1,
$asL:function(){return[P.bg]},
p:{
eA:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
eB:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aZ:function(a){if(a>=10)return""+a
return"0"+a}}},
at:{"^":"y;"},
"+double":0,
aA:{"^":"a;a",
I:function(a,b){return C.e.I(this.a,H.h(b,"$isaA").a)},
v:function(a,b){if(b==null)return!1
return b instanceof P.aA&&this.a===b.a},
gt:function(a){return this.a&0x1FFFFFFF},
F:function(a,b){return C.e.F(this.a,H.h(b,"$isaA").a)},
k:function(a){var z,y,x,w,v
z=new P.eH()
y=this.a
if(y<0)return"-"+new P.aA(0-y).k(0)
x=z.$1(C.e.K(y,6e7)%60)
w=z.$1(C.e.K(y,1e6)%60)
v=new P.eG().$1(y%1e6)
return""+C.e.K(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isL:1,
$asL:function(){return[P.aA]},
p:{
eF:function(a,b,c,d,e,f){return new P.aA(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
eG:{"^":"m:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
eH:{"^":"m:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
J:{"^":"a;"},
cD:{"^":"J;",
k:function(a){return"Throw of null."}},
ax:{"^":"J;a,b,c,d",
ga4:function(){return"Invalid argument"+(!this.a?"(s)":"")},
ga3:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.ga4()+y+x
if(!this.a)return w
v=this.ga3()
u=P.bh(this.b)
return w+v+": "+u},
p:{
cj:function(a,b,c){return new P.ax(!0,a,b,c)}}},
cE:{"^":"ax;e,f,a,b,c,d",
ga4:function(){return"RangeError"},
ga3:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bk:function(a,b,c){return new P.cE(null,null,!0,a,b,"Value not in range")},
fx:function(a,b,c,d,e){return new P.cE(b,c,!0,a,d,"Invalid value")}}},
eP:{"^":"ax;e,j:f>,a,b,c,d",
ga4:function(){return"RangeError"},
ga3:function(){var z,y
z=H.I(this.b)
if(typeof z!=="number")return z.N()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
z:function(a,b,c,d,e){var z=H.I(e==null?J.aY(b):e)
return new P.eP(b,z,!0,a,c,"Index out of range")}}},
h1:{"^":"J;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
u:function(a){return new P.h1(a)}}},
h_:{"^":"J;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cO:function(a){return new P.h_(a)}}},
fM:{"^":"J;a",
k:function(a){return"Bad state: "+this.a},
p:{
fN:function(a){return new P.fM(a)}}},
ev:{"^":"J;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bh(z)+"."},
p:{
az:function(a){return new P.ev(a)}}},
cG:{"^":"a;",
k:function(a){return"Stack Overflow"},
$isJ:1},
ez:{"^":"J;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
hp:{"^":"a;a",
k:function(a){return"Exception: "+this.a}},
E:{"^":"y;"},
"+int":0,
i:{"^":"a;$ti",
gj:function(a){var z,y
z=this.gB(this)
for(y=0;z.u();)++y
return y},
k:function(a){return P.eR(this,"(",")")}},
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
gt:function(a){return H.aH(this)},
k:function(a){return"Instance of '"+H.aI(this)+"'"},
toString:function(){return this.k(this)}},
T:{"^":"a;"},
f:{"^":"a;",$isL:1,
$asL:function(){return[P.f]},
$isfk:1},
"+String":0,
bM:{"^":"a;J:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
cH:function(a,b,c){var z=J.cb(b)
if(!z.u())return a
if(c.length===0){do a+=H.e(z.gA(z))
while(z.u())}else{a+=H.e(z.gA(z))
for(;z.u();)a=a+c+H.e(z.gA(z))}return a}}}}],["","",,W,{"^":"",
eJ:function(a){H.h(a,"$isG")
return"wheel"},
bp:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
cU:function(a,b,c,d){var z,y
z=W.bp(W.bp(W.bp(W.bp(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
d4:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.hh(a)
if(!!J.x(z).$isG)return z
return}else return H.h(a,"$isG")},
da:function(a,b){var z
H.j(a,{func:1,ret:-1,args:[b]})
z=$.B
if(z===C.d)return a
return z.cr(a,b)},
R:{"^":"b_;","%":"HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
j9:{"^":"d;0j:length=","%":"AccessibleNodeList"},
ja:{"^":"R;",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
jb:{"^":"R;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
el:{"^":"d;","%":";Blob"},
bD:{"^":"R;0m:height=,0l:width=",
aj:function(a,b,c){if(c!=null)return this.c9(a,b,P.iE(c,null))
return this.ca(a,b)},
bL:function(a,b){return this.aj(a,b,null)},
c9:function(a,b,c){return a.getContext(b,c)},
ca:function(a,b){return a.getContext(b)},
$isbD:1,
"%":"HTMLCanvasElement"},
en:{"^":"d;",
V:function(a,b,c){return a.addColorStop(b,c)},
"%":"CanvasGradient"},
bE:{"^":"d;",
ba:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
cC:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
Y:function(a){return P.Q(a.getContextAttributes())},
$isbE:1,
"%":"CanvasRenderingContext2D"},
jg:{"^":"D;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
ew:{"^":"bF;",$isew:1,"%":"CSSNumericValue|CSSUnitValue"},
ji:{"^":"ey;0j:length=","%":"CSSPerspective"},
ab:{"^":"d;",$isab:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
jj:{"^":"hf;0j:length=",
ao:function(a,b){var z=this.cb(a,this.c4(a,b))
return z==null?"":z},
c4:function(a,b){var z,y
z=$.dq()
y=z[b]
if(typeof y==="string")return y
y=this.cj(a,b)
z[b]=y
return y},
cj:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.eC()+b
if(z in a)return z
return b},
cb:function(a,b){return a.getPropertyValue(b)},
gm:function(a){return a.height},
gl:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
ex:{"^":"a;",
gm:function(a){return this.ao(a,"height")},
gl:function(a){return this.ao(a,"width")}},
bF:{"^":"d;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
ey:{"^":"d;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
jl:{"^":"bF;0j:length=","%":"CSSTransformValue"},
jm:{"^":"bF;0j:length=","%":"CSSUnparsedValue"},
jo:{"^":"d;0j:length=","%":"DataTransferItemList"},
eD:{"^":"D;",
cM:function(a,b){return a.querySelector(b)},
"%":"XMLDocument;Document"},
jp:{"^":"d;",
k:function(a){return String(a)},
"%":"DOMException"},
jq:{"^":"hj;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.C(c,"$isN",[P.y],"$asN")
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
eE:{"^":"d;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gl(a))+" x "+H.e(this.gm(a))},
v:function(a,b){var z
if(b==null)return!1
if(!H.aQ(b,"$isN",[P.y],"$asN"))return!1
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
jr:{"^":"hl;",
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
js:{"^":"d;0j:length=","%":"DOMTokenList"},
b_:{"^":"D;",
k:function(a){return a.localName},
gcI:function(a){return new W.bo(a,"mousedown",!1,[W.S])},
gcJ:function(a){return new W.bo(a,"mousemove",!1,[W.S])},
gcK:function(a){return new W.bo(a,"mouseup",!1,[W.S])},
gcL:function(a){return new W.bo(a,H.w(W.eJ(a)),!1,[W.aL])},
$isb_:1,
"%":";Element"},
ju:{"^":"R;0m:height=,0l:width=","%":"HTMLEmbedElement"},
a3:{"^":"d;",$isa3:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
G:{"^":"d;",
cn:function(a,b,c,d){H.j(c,{func:1,args:[W.a3]})
if(c!=null)this.c3(a,b,c,!1)},
c3:function(a,b,c,d){return a.addEventListener(b,H.aR(H.j(c,{func:1,args:[W.a3]}),1),!1)},
$isG:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;d_|d0|d2|d3"},
ac:{"^":"el;",$isac:1,"%":"File"},
jL:{"^":"hr;",
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
"%":"FileList"},
jM:{"^":"G;0j:length=","%":"FileWriter"},
jP:{"^":"R;0j:length=","%":"HTMLFormElement"},
ad:{"^":"d;",$isad:1,"%":"Gamepad"},
jQ:{"^":"d;0j:length=","%":"History"},
jR:{"^":"hE;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isD")
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.q(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.D]},
$asl:function(){return[W.D]},
$isi:1,
$asi:function(){return[W.D]},
$isc:1,
$asc:function(){return[W.D]},
$asn:function(){return[W.D]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
eN:{"^":"eD;","%":"HTMLDocument"},
jS:{"^":"R;0m:height=,0l:width=","%":"HTMLIFrameElement"},
jT:{"^":"d;0m:height=,0l:width=","%":"ImageBitmap"},
jU:{"^":"d;0m:height=,0l:width=","%":"ImageData"},
jV:{"^":"R;0m:height=,0l:width=","%":"HTMLImageElement"},
jX:{"^":"R;0m:height=,0l:width=","%":"HTMLInputElement"},
aC:{"^":"cN;",$isaC:1,"%":"KeyboardEvent"},
k2:{"^":"d;",
k:function(a){return String(a)},
"%":"Location"},
f6:{"^":"R;","%":"HTMLAudioElement;HTMLMediaElement"},
k5:{"^":"d;0j:length=","%":"MediaList"},
k6:{"^":"hK;",
h:function(a,b){return P.Q(a.get(H.w(b)))},
w:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Q(y.value[1]))}},
gH:function(a){var z=H.r([],[P.f])
this.w(a,new W.f8(z))
return z},
gj:function(a){return a.size},
$asM:function(){return[P.f,null]},
$isH:1,
$asH:function(){return[P.f,null]},
"%":"MIDIInputMap"},
f8:{"^":"m:2;a",
$2:function(a,b){return C.a.n(this.a,a)}},
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
"%":"MIDIOutputMap"},
f9:{"^":"m:2;a",
$2:function(a,b){return C.a.n(this.a,a)}},
af:{"^":"d;",$isaf:1,"%":"MimeType"},
k8:{"^":"hN;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaf")
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.q(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.af]},
$asl:function(){return[W.af]},
$isi:1,
$asi:function(){return[W.af]},
$isc:1,
$asc:function(){return[W.af]},
$asn:function(){return[W.af]},
"%":"MimeTypeArray"},
S:{"^":"cN;",
gbn:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.aG(a.offsetX,a.offsetY,[P.y])
else{z=a.target
if(!J.x(W.d4(z)).$isb_)throw H.b(P.u("offsetX is only supported on elements"))
y=H.h(W.d4(z),"$isb_")
z=a.clientX
x=a.clientY
w=[P.y]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.C(new P.aG(u,v,w),"$isaG",w,"$asaG")
if(typeof z!=="number")return z.aw()
if(typeof x!=="number")return x.aw()
return new P.aG(C.q.bv(z-u),C.q.bv(x-v),w)}},
$isS:1,
"%":";DragEvent|MouseEvent"},
D:{"^":"G;",
k:function(a){var z=a.nodeValue
return z==null?this.bQ(a):z},
$isD:1,
"%":"Attr|DocumentFragment|DocumentType|ShadowRoot;Node"},
kg:{"^":"hP;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isD")
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.q(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.D]},
$asl:function(){return[W.D]},
$isi:1,
$asi:function(){return[W.D]},
$isc:1,
$asc:function(){return[W.D]},
$asn:function(){return[W.D]},
"%":"NodeList|RadioNodeList"},
ki:{"^":"R;0m:height=,0l:width=","%":"HTMLObjectElement"},
kk:{"^":"G;0m:height=,0l:width=","%":"OffscreenCanvas"},
kl:{"^":"d;0m:height=,0l:width=","%":"PaintSize"},
ag:{"^":"d;0j:length=",$isag:1,"%":"Plugin"},
kn:{"^":"hT;",
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
"%":"PluginArray"},
kp:{"^":"S;0m:height=,0l:width=","%":"PointerEvent"},
ku:{"^":"hZ;",
h:function(a,b){return P.Q(a.get(H.w(b)))},
w:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Q(y.value[1]))}},
gH:function(a){var z=H.r([],[P.f])
this.w(a,new W.fB(z))
return z},
gj:function(a){return a.size},
$asM:function(){return[P.f,null]},
$isH:1,
$asH:function(){return[P.f,null]},
"%":"RTCStatsReport"},
fB:{"^":"m:2;a",
$2:function(a,b){return C.a.n(this.a,a)}},
kv:{"^":"d;0m:height=,0l:width=","%":"Screen"},
kw:{"^":"R;0j:length=","%":"HTMLSelectElement"},
ai:{"^":"G;",$isai:1,"%":"SourceBuffer"},
ky:{"^":"d0;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isai")
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.q(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.ai]},
$asl:function(){return[W.ai]},
$isi:1,
$asi:function(){return[W.ai]},
$isc:1,
$asc:function(){return[W.ai]},
$asn:function(){return[W.ai]},
"%":"SourceBufferList"},
aj:{"^":"d;",$isaj:1,"%":"SpeechGrammar"},
kz:{"^":"i0;",
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
"%":"SpeechGrammarList"},
ak:{"^":"d;0j:length=",$isak:1,"%":"SpeechRecognitionResult"},
kC:{"^":"i3;",
h:function(a,b){return this.aS(a,H.w(b))},
w:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.f,P.f]})
for(z=0;!0;++z){y=this.cd(a,z)
if(y==null)return
b.$2(y,this.aS(a,y))}},
gH:function(a){var z=H.r([],[P.f])
this.w(a,new W.fP(z))
return z},
gj:function(a){return a.length},
aS:function(a,b){return a.getItem(b)},
cd:function(a,b){return a.key(b)},
$asM:function(){return[P.f,P.f]},
$isH:1,
$asH:function(){return[P.f,P.f]},
"%":"Storage"},
fP:{"^":"m:15;a",
$2:function(a,b){return C.a.n(this.a,a)}},
al:{"^":"d;",$isal:1,"%":"CSSStyleSheet|StyleSheet"},
kF:{"^":"d;0l:width=","%":"TextMetrics"},
am:{"^":"G;",$isam:1,"%":"TextTrack"},
an:{"^":"G;",$isan:1,"%":"TextTrackCue|VTTCue"},
kG:{"^":"i8;",
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
"%":"TextTrackCueList"},
kH:{"^":"d3;",
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
"%":"TextTrackList"},
kI:{"^":"d;0j:length=","%":"TimeRanges"},
ao:{"^":"d;",$isao:1,"%":"Touch"},
kJ:{"^":"id;",
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
"%":"TouchList"},
kK:{"^":"d;0j:length=","%":"TrackDefaultList"},
cN:{"^":"a3;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
kW:{"^":"d;",
k:function(a){return String(a)},
"%":"URL"},
l_:{"^":"f6;0m:height=,0l:width=","%":"HTMLVideoElement"},
l0:{"^":"G;0j:length=","%":"VideoTrackList"},
l1:{"^":"G;0m:height=,0l:width=","%":"VisualViewport"},
l2:{"^":"d;0l:width=","%":"VTTRegion"},
aL:{"^":"S;",
gcw:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.u("deltaY is not supported"))},
$isaL:1,
"%":"WheelEvent"},
h5:{"^":"G;",
gco:function(a){var z,y,x
z=P.y
y=new P.Z(0,$.B,[z])
x=H.j(new W.h6(new P.i6(y,[z])),{func:1,ret:-1,args:[P.y]})
this.c8(a)
this.cf(a,W.da(x,z))
return y},
cf:function(a,b){return a.requestAnimationFrame(H.aR(H.j(b,{func:1,ret:-1,args:[P.y]}),1))},
c8:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$iscP:1,
"%":"DOMWindow|Window"},
h6:{"^":"m:16;a",
$1:function(a){var z=this.a
a=H.bt(H.c2(a),{futureOr:1,type:H.o(z,0)})
z=z.a
if(z.a!==0)H.a0(P.fN("Future already completed"))
z.a2(a)}},
l8:{"^":"ij;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isab")
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.q(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.ab]},
$asl:function(){return[W.ab]},
$isi:1,
$asi:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]},
$asn:function(){return[W.ab]},
"%":"CSSRuleList"},
l9:{"^":"eE;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
v:function(a,b){var z
if(b==null)return!1
if(!H.aQ(b,"$isN",[P.y],"$asN"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.k(b)
z=a.width===z.gl(b)&&a.height===z.gm(b)}else z=!1
else z=!1
return z},
gt:function(a){return W.cU(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gm:function(a){return a.height},
gl:function(a){return a.width},
"%":"ClientRect|DOMRect"},
la:{"^":"il;",
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
"%":"GamepadList"},
lb:{"^":"io;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isD")
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.q(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.D]},
$asl:function(){return[W.D]},
$isi:1,
$asi:function(){return[W.D]},
$isc:1,
$asc:function(){return[W.D]},
$asn:function(){return[W.D]},
"%":"MozNamedAttrMap|NamedNodeMap"},
lc:{"^":"iq;",
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
"%":"SpeechRecognitionResultList"},
ld:{"^":"is;",
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
"%":"StyleSheetList"},
hm:{"^":"fQ;a,b,c,$ti"},
bo:{"^":"hm;a,b,c,$ti"},
hn:{"^":"fR;a,b,c,d,e,$ti",p:{
ap:function(a,b,c,d,e){var z=W.da(new W.ho(c),W.a3)
if(z!=null&&!0)J.dK(a,b,z,!1)
return new W.hn(0,a,b,z,!1,[e])}}},
ho:{"^":"m:17;a",
$1:function(a){return this.a.$1(H.h(a,"$isa3"))}},
n:{"^":"a;$ti",
gB:function(a){return new W.eL(a,this.gj(a),-1,[H.b9(this,a,"n",0)])}},
eL:{"^":"a;a,b,c,0d,$ti",
saQ:function(a){this.d=H.t(a,H.o(this,0))},
u:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.saQ(J.dI(this.a,z))
this.c=z
return!0}this.saQ(null)
this.c=y
return!1},
gA:function(a){return this.d}},
hg:{"^":"a;a",$isG:1,$iscP:1,p:{
hh:function(a){if(a===window)return H.h(a,"$iscP")
else return new W.hg(a)}}},
hf:{"^":"d+ex;"},
hi:{"^":"d+l;"},
hj:{"^":"hi+n;"},
hk:{"^":"d+l;"},
hl:{"^":"hk+n;"},
hq:{"^":"d+l;"},
hr:{"^":"hq+n;"},
hD:{"^":"d+l;"},
hE:{"^":"hD+n;"},
hK:{"^":"d+M;"},
hL:{"^":"d+M;"},
hM:{"^":"d+l;"},
hN:{"^":"hM+n;"},
hO:{"^":"d+l;"},
hP:{"^":"hO+n;"},
hS:{"^":"d+l;"},
hT:{"^":"hS+n;"},
hZ:{"^":"d+M;"},
d_:{"^":"G+l;"},
d0:{"^":"d_+n;"},
i_:{"^":"d+l;"},
i0:{"^":"i_+n;"},
i3:{"^":"d+M;"},
i7:{"^":"d+l;"},
i8:{"^":"i7+n;"},
d2:{"^":"G+l;"},
d3:{"^":"d2+n;"},
ic:{"^":"d+l;"},
id:{"^":"ic+n;"},
ii:{"^":"d+l;"},
ij:{"^":"ii+n;"},
ik:{"^":"d+l;"},
il:{"^":"ik+n;"},
im:{"^":"d+l;"},
io:{"^":"im+n;"},
ip:{"^":"d+l;"},
iq:{"^":"ip+n;"},
ir:{"^":"d+l;"},
is:{"^":"ir+n;"}}],["","",,P,{"^":"",
Q:function(a){var z,y,x,w,v
if(a==null)return
z=P.a5(P.f,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.V)(y),++w){v=H.w(y[w])
z.i(0,v,a[v])}return z},
iE:function(a,b){var z={}
a.w(0,new P.iF(z))
return z},
cr:function(){var z=$.cq
if(z==null){z=J.by(window.navigator.userAgent,"Opera",0)
$.cq=z}return z},
eC:function(){var z,y
z=$.cn
if(z!=null)return z
y=$.co
if(y==null){y=J.by(window.navigator.userAgent,"Firefox",0)
$.co=y}if(y)z="-moz-"
else{y=$.cp
if(y==null){y=!P.cr()&&J.by(window.navigator.userAgent,"Trident/",0)
$.cp=y}if(y)z="-ms-"
else z=P.cr()?"-o-":"-webkit-"}$.cn=z
return z},
iF:{"^":"m:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
fw:function(a){return C.m},
cT:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
hF:{"^":"a;",
X:function(){return Math.random()}},
aG:{"^":"a;bI:a>,bJ:b>,$ti",
k:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
v:function(a,b){if(b==null)return!1
return H.aQ(b,"$isaG",[P.y],null)&&this.a==J.e1(b)&&this.b==b.gbJ(b)},
gt:function(a){var z,y,x
z=J.a2(this.a)
y=J.a2(this.b)
y=P.cT(P.cT(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
hU:{"^":"a;"},
N:{"^":"hU;$ti"}}],["","",,P,{"^":"",eh:{"^":"d;",$iseh:1,"%":"SVGAnimatedLength"},jv:{"^":"F;0m:height=,0l:width=","%":"SVGFEBlendElement"},jw:{"^":"F;0m:height=,0l:width=","%":"SVGFEColorMatrixElement"},jx:{"^":"F;0m:height=,0l:width=","%":"SVGFEComponentTransferElement"},jy:{"^":"F;0m:height=,0l:width=","%":"SVGFECompositeElement"},jz:{"^":"F;0m:height=,0l:width=","%":"SVGFEConvolveMatrixElement"},jA:{"^":"F;0m:height=,0l:width=","%":"SVGFEDiffuseLightingElement"},jB:{"^":"F;0m:height=,0l:width=","%":"SVGFEDisplacementMapElement"},jC:{"^":"F;0m:height=,0l:width=","%":"SVGFEFloodElement"},jD:{"^":"F;0m:height=,0l:width=","%":"SVGFEGaussianBlurElement"},jE:{"^":"F;0m:height=,0l:width=","%":"SVGFEImageElement"},jF:{"^":"F;0m:height=,0l:width=","%":"SVGFEMergeElement"},jG:{"^":"F;0m:height=,0l:width=","%":"SVGFEMorphologyElement"},jH:{"^":"F;0m:height=,0l:width=","%":"SVGFEOffsetElement"},jI:{"^":"F;0m:height=,0l:width=","%":"SVGFESpecularLightingElement"},jJ:{"^":"F;0m:height=,0l:width=","%":"SVGFETileElement"},jK:{"^":"F;0m:height=,0l:width=","%":"SVGFETurbulenceElement"},jN:{"^":"F;0m:height=,0l:width=","%":"SVGFilterElement"},jO:{"^":"b0;0m:height=,0l:width=","%":"SVGForeignObjectElement"},eM:{"^":"b0;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},b0:{"^":"F;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},jW:{"^":"b0;0m:height=,0l:width=","%":"SVGImageElement"},aD:{"^":"d;",$isaD:1,"%":"SVGLength"},k1:{"^":"hH;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return this.G(a,b)},
i:function(a,b,c){H.h(c,"$isaD")
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
G:function(a,b){return a.getItem(b)},
$asl:function(){return[P.aD]},
$isi:1,
$asi:function(){return[P.aD]},
$isc:1,
$asc:function(){return[P.aD]},
$asn:function(){return[P.aD]},
"%":"SVGLengthList"},k3:{"^":"F;0m:height=,0l:width=","%":"SVGMaskElement"},aF:{"^":"d;",$isaF:1,"%":"SVGNumber"},kh:{"^":"hR;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return this.G(a,b)},
i:function(a,b,c){H.h(c,"$isaF")
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
G:function(a,b){return a.getItem(b)},
$asl:function(){return[P.aF]},
$isi:1,
$asi:function(){return[P.aF]},
$isc:1,
$asc:function(){return[P.aF]},
$asn:function(){return[P.aF]},
"%":"SVGNumberList"},km:{"^":"F;0m:height=,0l:width=","%":"SVGPatternElement"},ko:{"^":"d;0j:length=","%":"SVGPointList"},kq:{"^":"d;0m:height=,0l:width=","%":"SVGRect"},kr:{"^":"eM;0m:height=,0l:width=","%":"SVGRectElement"},kD:{"^":"i5;",
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
"%":"SVGStringList"},F:{"^":"b_;","%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},kE:{"^":"b0;0m:height=,0l:width=","%":"SVGSVGElement"},aJ:{"^":"d;",$isaJ:1,"%":"SVGTransform"},kL:{"^":"ig;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return this.G(a,b)},
i:function(a,b,c){H.h(c,"$isaJ")
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
G:function(a,b){return a.getItem(b)},
$asl:function(){return[P.aJ]},
$isi:1,
$asi:function(){return[P.aJ]},
$isc:1,
$asc:function(){return[P.aJ]},
$asn:function(){return[P.aJ]},
"%":"SVGTransformList"},kX:{"^":"b0;0m:height=,0l:width=","%":"SVGUseElement"},hG:{"^":"d+l;"},hH:{"^":"hG+n;"},hQ:{"^":"d+l;"},hR:{"^":"hQ+n;"},i4:{"^":"d+l;"},i5:{"^":"i4+n;"},ie:{"^":"d+l;"},ig:{"^":"ie+n;"}}],["","",,P,{"^":"",a4:{"^":"a;",$isi:1,
$asi:function(){return[P.at]},
$isc:1,
$asc:function(){return[P.at]},
$isfY:1}}],["","",,P,{"^":"",jc:{"^":"d;0j:length=","%":"AudioBuffer"},jd:{"^":"hd;",
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
$2:function(a,b){return C.a.n(this.a,a)}},je:{"^":"G;0j:length=","%":"AudioTrackList"},ek:{"^":"G;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},kj:{"^":"ek;0j:length=","%":"OfflineAudioContext"},hd:{"^":"d+M;"}}],["","",,P,{"^":"",em:{"^":"d;",$isem:1,"%":"WebGLBuffer"},fv:{"^":"d;",$isfv:1,"%":"WebGLProgram"},ks:{"^":"d;",
aZ:function(a,b){return a.activeTexture(b)},
b_:function(a,b,c){return a.attachShader(b,c)},
b0:function(a,b,c){return a.bindBuffer(b,c)},
b2:function(a,b,c){return a.bindTexture(b,c)},
b3:function(a,b){return a.blendEquation(b)},
b4:function(a,b,c){return a.blendFunc(b,c)},
b5:function(a,b,c,d){return a.bufferData(b,c,d)},
b6:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
b7:function(a,b){return a.compileShader(b)},
b8:function(a){return a.createBuffer()},
b9:function(a){return a.createProgram()},
bb:function(a,b){return a.createShader(b)},
bc:function(a){return a.createTexture()},
be:function(a,b){return a.depthMask(b)},
bf:function(a,b){return a.disable(b)},
bg:function(a,b,c,d){return a.drawArrays(b,c,d)},
bh:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bi:function(a,b){return a.enable(b)},
bj:function(a,b){return a.enableVertexAttribArray(b)},
Y:function(a){return P.Q(a.getContextAttributes())},
ak:function(a){return a.getError()},
am:function(a,b){return a.getProgramInfoLog(b)},
an:function(a,b,c){return a.getProgramParameter(b,c)},
ap:function(a,b){return a.getShaderInfoLog(b)},
aq:function(a,b,c){return a.getShaderParameter(b,c)},
ar:function(a,b,c){return a.getUniformLocation(b,c)},
bm:function(a,b){return a.linkProgram(b)},
bo:function(a,b,c){return a.pixelStorei(b,c)},
at:function(a,b,c){return a.shaderSource(b,c)},
av:function(a,b,c,d){return a.stencilFunc(b,c,d)},
ai:function(a,b,c,d,e,f,g,h,i,j){this.ab(a,b,c,d,e,f,g)
return},
br:function(a,b,c,d,e,f,g){return this.ai(a,b,c,d,e,f,g,null,null,null)},
ab:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bs:function(a,b,c,d){return a.texParameteri(b,c,d)},
bw:function(a,b,c){return a.uniform1f(b,c)},
bx:function(a,b,c){return a.uniform1fv(b,c)},
by:function(a,b,c){return a.uniform1i(b,c)},
bz:function(a,b,c){return a.uniform1iv(b,c)},
bA:function(a,b,c){return a.uniform2fv(b,c)},
bB:function(a,b,c){return a.uniform3fv(b,c)},
bC:function(a,b,c){return a.uniform4fv(b,c)},
bD:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bE:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bF:function(a,b){return a.useProgram(b)},
bG:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
"%":"WebGLRenderingContext"},kt:{"^":"d;",
cp:function(a,b){return a.beginTransformFeedback(b)},
cs:function(a,b){return a.bindVertexArray(b)},
cv:function(a){return a.createVertexArray()},
cz:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
cA:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
cB:function(a){return a.endTransformFeedback()},
cQ:function(a,b,c,d){this.cl(a,b,H.C(c,"$isc",[P.f],"$asc"),d)
return},
cl:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
cR:function(a,b,c){return a.vertexAttribDivisor(b,c)},
aZ:function(a,b){return a.activeTexture(b)},
b_:function(a,b,c){return a.attachShader(b,c)},
b0:function(a,b,c){return a.bindBuffer(b,c)},
b2:function(a,b,c){return a.bindTexture(b,c)},
b3:function(a,b){return a.blendEquation(b)},
b4:function(a,b,c){return a.blendFunc(b,c)},
b5:function(a,b,c,d){return a.bufferData(b,c,d)},
b6:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
b7:function(a,b){return a.compileShader(b)},
b8:function(a){return a.createBuffer()},
b9:function(a){return a.createProgram()},
bb:function(a,b){return a.createShader(b)},
bc:function(a){return a.createTexture()},
be:function(a,b){return a.depthMask(b)},
bf:function(a,b){return a.disable(b)},
bg:function(a,b,c,d){return a.drawArrays(b,c,d)},
bh:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bi:function(a,b){return a.enable(b)},
bj:function(a,b){return a.enableVertexAttribArray(b)},
Y:function(a){return P.Q(a.getContextAttributes())},
ak:function(a){return a.getError()},
am:function(a,b){return a.getProgramInfoLog(b)},
an:function(a,b,c){return a.getProgramParameter(b,c)},
ap:function(a,b){return a.getShaderInfoLog(b)},
aq:function(a,b,c){return a.getShaderParameter(b,c)},
ar:function(a,b,c){return a.getUniformLocation(b,c)},
bm:function(a,b){return a.linkProgram(b)},
bo:function(a,b,c){return a.pixelStorei(b,c)},
at:function(a,b,c){return a.shaderSource(b,c)},
av:function(a,b,c,d){return a.stencilFunc(b,c,d)},
ai:function(a,b,c,d,e,f,g,h,i,j){this.ab(a,b,c,d,e,f,g)
return},
br:function(a,b,c,d,e,f,g){return this.ai(a,b,c,d,e,f,g,null,null,null)},
ab:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bs:function(a,b,c,d){return a.texParameteri(b,c,d)},
bw:function(a,b,c){return a.uniform1f(b,c)},
bx:function(a,b,c){return a.uniform1fv(b,c)},
by:function(a,b,c){return a.uniform1i(b,c)},
bz:function(a,b,c){return a.uniform1iv(b,c)},
bA:function(a,b,c){return a.uniform2fv(b,c)},
bB:function(a,b,c){return a.uniform3fv(b,c)},
bC:function(a,b,c){return a.uniform4fv(b,c)},
bD:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bE:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bF:function(a,b){return a.useProgram(b)},
bG:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
"%":"WebGL2RenderingContext"},fG:{"^":"d;",$isfG:1,"%":"WebGLShader"},fU:{"^":"d;",$isfU:1,"%":"WebGLTexture"},fZ:{"^":"d;",$isfZ:1,"%":"WebGLUniformLocation"},h4:{"^":"d;",$ish4:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",kA:{"^":"i2;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return P.Q(this.cc(a,b))},
i:function(a,b,c){H.h(c,"$isH")
throw H.b(P.u("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
cc:function(a,b){return a.item(b)},
$asl:function(){return[[P.H,,,]]},
$isi:1,
$asi:function(){return[[P.H,,,]]},
$isc:1,
$asc:function(){return[[P.H,,,]]},
$asn:function(){return[[P.H,,,]]},
"%":"SQLResultSetRowList"},i1:{"^":"d+l;"},i2:{"^":"i1+n;"}}],["","",,G,{"^":"",
h7:function(a){var z,y,x,w
z=H.r(a.split("\n"),[P.f])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.q(z,y)
C.a.i(z,y,w+H.e(z[y]))}return C.a.W(z,"\n")},
cR:function(a,b,c){var z,y,x,w
z=J.k(a)
y=z.bb(a,b)
z.at(a,y,c)
z.b7(a,y)
x=H.bV(z.aq(a,y,35713))
if(x!=null&&!x){w=z.ap(a,y)
P.au("E:Compilation failed:")
P.au("E:"+G.h7(c))
P.au("E:Failure:")
P.au(C.i.C("E:",w))
throw H.b(w)}return y},
ct:function(a,b){var z,y,x,w,v,u,t
H.C(a,"$isc",[T.K],"$asc")
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
aC:function(){return this.d},
k:function(a){var z,y,x,w
z=H.r(["{"+new H.cM(H.iP(this)).k(0)+"}["+this.a+"]"],[P.f])
for(y=this.d,x=new H.aE(y,[H.o(y,0)]),x=x.gB(x);x.u();){w=x.d
C.a.n(z,H.e(w)+": "+H.e(y.h(0,w)))}return C.a.W(z,"\n")}},
eq:{"^":"a;0a,b",
bk:function(a,b,c){J.dZ(this.a,b)
if(c>0)J.ef(this.a,b,c)},
bH:function(a,b,c,d,e,f,g,h){J.c9(this.a,34962,b)
J.eg(this.a,c,d,e,!1,g,h)}},
cK:{"^":"a;a,b,c"},
cJ:{"^":"a;a,b,c"},
f5:{"^":"bn;d,a,b,c"},
f7:{"^":"bj;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
az:function(a,b,c){var z,y
C.i.a_(a,0)
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.c9(z.a,34962,y)
J.dO(z.a,34962,b,35048)},
bU:function(){return this.ch.length/3|0},
ay:function(a){var z,y,x,w
z=this.r
y=this.d
z.i(0,"aPosition",J.ca(y.a))
this.ch=a
this.az("aPosition",a,3)
x=$.aa().h(0,"aPosition")
if(x==null)throw H.b("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.bx(y.a,this.e)
y.bk(0,w,0)
y.bH(0,z.h(0,"aPosition"),w,x.aB(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=H.r(["Faces:0"],[P.f])
for(y=this.cy,x=new H.aE(y,[H.o(y,0)]),x=x.gB(x);x.u();){w=x.d
C.a.n(z,H.e(w)+":"+y.h(0,w).length)}return"MESH["+this.a+"] "+C.a.W(z,"  ")},
p:{
cA:function(a,b,c,d){var z=P.f
return new G.f7(b,J.dT(b.a),c,P.a5(z,P.a),d,0,-1,P.a5(z,P.a4),"meshdata:"+a,!1,!0)}}},
fl:{"^":"bn;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
bS:function(a,b){var z
if(typeof a!=="number")return a.cS()
if(typeof b!=="number")return H.ba(b)
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
aC:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
z=this.x
y=this.d
y.i(0,"uEyePosition",z.al())
x=this.cy
x.O(z.d)
z=this.cx
z.O(this.db)
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
jt:{"^":"a;"},
fA:{"^":"bj;d,e,f,r,x,y,z,Q,0ch,a,b,c",
bX:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.V)(z),++u){t=z[u]
x.i(0,t,J.cc(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.V)(z),++u){t=z[u]
x.i(0,t,J.cc(w.a,v,t))}},
c_:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.r([],[P.f])
x=H.r([],[P.f])
for(y=new H.aE(y,[H.o(y,0)]),y=y.gB(y);y.u();){w=y.d
if(!z.ac(0,w))C.a.n(x,w)}for(z=this.x,z=P.cV(z,z.r,H.o(z,0)),y=this.Q;z.u();){w=z.d
if(!y.D(0,w))C.a.n(x,w)}return x},
c0:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.C(b,"$isH",[P.f,P.a],"$asH")
z=Date.now()
for(y=new H.aE(b,[H.o(b,0)]),y=y.gB(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.u();){s=y.d
switch(J.dJ(s,0)){case 117:if(w.ac(0,s)){r=b.h(0,s)
if(v.ac(0,s))H.c3("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.i(0,s,a)
q=$.aa().h(0,s)
if(q==null)H.a0("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.I(r)
J.bA(x.a,p,r)}else if(!!J.x(r).$iseQ)J.ed(x.a,p,r)
break
case"float":if(q.c===0){H.de(r)
J.eb(x.a,p,r)}else if(!!J.x(r).$isa4)J.ec(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.a1(r,"$isae").a
J.ci(x.a,p,!1,s)}else if(!!J.x(r).$isa4)J.ci(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=C.t.gbN(H.a1(r,"$isk4"))
J.ch(x.a,p,!1,s)}else if(!!J.x(r).$isa4)J.ch(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.cg(o,p,H.a1(r,"$isbO").a)
else J.cg(o,p,H.h(r,"$isa4"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cf(o,p,H.a1(r,"$isK").a)
else J.cf(o,p,H.h(r,"$isa4"))
break
case"vec2":if(q.c===0){s=C.t.gbN(H.a1(r,"$iskZ"))
J.ce(x.a,p,s)}else{H.h(r,"$isa4")
J.ce(x.a,p,r)}break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.ba(s)
J.c7(x.a,33984+s)
s=H.a1(r,"$isbN").b
J.aX(x.a,3553,s)
s=this.ch
J.bA(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.C()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.ba(s)
J.c7(x.a,33984+s)
s=H.a1(r,"$isbN").b
J.aX(x.a,34067,s)
s=this.ch
J.bA(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.C()
this.ch=s+1
break
default:H.c3("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":s=J.aw(r,!0)
o=x.a
if(s)J.bd(o,2929)
else J.bz(o,2929)
break
case"cStencilFunc":H.a1(r,"$iscK")
s=r.a
o=x.a
if(s===1281)J.bz(o,2960)
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
if(s===1281)J.bz(o,3042)
else{J.bd(o,3042)
o=r.b
n=r.c
J.dN(x.a,o,n)
J.dM(x.a,s)}break}++t
break}}m=P.eF(0,0,0,Date.now()-new P.bg(z,!1).a,0,0)
""+t
m.k(0)},
bT:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.C(b,"$isc",[G.bn],"$asc")
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
y.aT()}for(x=0;x<2;++x){w=b[x]
this.c0(w.a,w.aC())}y=this.Q
y.L(0)
for(v=a.cy,v=new H.aE(v,[H.o(v,0)]),v=v.gB(v);v.u();)y.n(0,v.d)
u=this.c_()
if(u.length!==0)P.au("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
J.bx(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.bU()
s=a.Q
r=a.z
if(t)J.dL(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.dY(q,y,v,s,0,r)
else J.dX(q,y,v,s,0)}else{s=z.a
if(r>1)J.dW(s,y,0,v,r)
else J.dV(s,y,0,v)}if(t)J.e_(z.a)},
aA:function(a,b){return this.bT(a,b,null)},
p:{
cF:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.f
y=P.a6(null,null,null,z)
x=c.b
w=d.b
v=H.C(c.f,"$isc",[z],"$asc")
u=J.dR(b.a)
t=G.cR(b.a,35633,x)
J.c8(b.a,u,t)
s=G.cR(b.a,35632,w)
J.c8(b.a,u,s)
if(v.length>0)J.ea(b.a,u,v,35980)
J.e6(b.a,u)
if(!H.bV(J.e5(b.a,u,35714)))H.a0(J.e4(b.a,u))
z=new G.fA(b,c,d,u,P.f1(c.c,z),P.a5(z,P.a),P.a5(z,z),y,a,!1,!0)
z.bX(a,b,c,d)
return z}}},
v:{"^":"a;a,b,c",
aB:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
fH:{"^":"a;a,0b,c,d,e,f,r,x",
ax:function(a){var z,y,x,w,v
H.C(a,"$isc",[P.f],"$asc")
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.V)(a),++w){v=a[w]
C.a.n(y,v)
x.i(0,v,this.r);++this.r}C.a.au(y)},
R:function(a){var z,y,x
H.C(a,"$isc",[P.f],"$asc")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.V)(a),++x)C.a.n(y,a[x])
C.a.au(y)},
bZ:function(a,b){this.b=this.aG(!0,H.C(a,"$isc",[P.f],"$asc"),b)},
aE:function(a){return this.bZ(a,null)},
bY:function(a,b){this.b=this.aG(!1,H.C(a,"$isc",[P.f],"$asc"),b)},
aD:function(a){return this.bY(a,null)},
aG:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.f]
H.C(b,"$isc",z,"$asc")
y=this.c
x=y.length===0
w=H.r(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.V)(y),++u){t=y[u]
s=$.aa().h(0,t)
C.a.n(w,"layout (location="+H.e(v.h(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.n(w,"")
r=x?"in":"out"
if(x)C.a.n(w,"out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.q(z,u)
q=z[u]
s=$.aa().h(0,q)
C.a.n(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.V)(z),++u){q=z[u]
s=$.aa().h(0,q)
C.a.n(w,r+" "+s.a+" "+H.e(q)+";")}C.a.n(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.V)(z),++u){q=z[u]
s=$.aa().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.n(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.n(w,"")
if(a)C.a.n(w,"void main(void) {")
C.a.cm(w,b)
if(a)C.a.n(w,"}")
return C.a.W(w,"\n")},
p:{
bl:function(a){var z,y
z=P.f
y=[z]
return new G.fH(a,H.r([],y),H.r([],y),H.r([],y),H.r([],y),0,P.a5(z,P.E))}}},
fL:{"^":"bj;",
al:function(){var z,y,x
z=this.e
y=this.d.a
x=z.a
x[0]=y[12]
x[1]=y[13]
x[2]=y[14]
return z}},
fV:{"^":"a;a,b,c,d,e,f,r"},
bN:{"^":"a;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
eO:{"^":"bN;f,a,b,c,d,e"}}],["","",,R,{"^":"",
h2:function(a,b,c){var z,y,x,w,v,u
z="stars_"+b
y=b*3
x=new Float32Array(y)
for(w=x.length,v=0;v<y;++v){u=$.dD().X()
if(v>=w)return H.q(x,v)
x[v]=(u-0.5)*c}y=G.cA(z,a.d,0,a.e.x)
y.ay(x)
return y}}],["","",,V,{}],["","",,D,{"^":"",eW:{"^":"a;a,b,c",
bV:function(a){var z,y
a=document
z=W.aC
y={func:1,ret:-1,args:[z]}
W.ap(a,"keydown",H.j(new D.eY(this),y),!1,z)
W.ap(a,"keyup",H.j(new D.eZ(this),y),!1,z)},
p:{
eX:function(a){var z=P.E
z=new D.eW(P.a6(null,null,null,z),P.a6(null,null,null,z),P.a6(null,null,null,z))
z.bV(a)
return z}}},eY:{"^":"m:9;a",
$1:function(a){var z
H.h(a,"$isaC")
z=this.a
z.a.n(0,a.which)
z.b.n(0,a.which)}},eZ:{"^":"m:9;a",
$1:function(a){var z
H.h(a,"$isaC")
z=this.a
z.a.bp(0,a.which)
z.c.n(0,a.which)}},fa:{"^":"a;a,b,c,d,e,f,r,x",
bW:function(a){var z,y
z=C.h.gcJ(a)
y=H.o(z,0)
W.ap(z.a,z.b,H.j(new D.fc(this),{func:1,ret:-1,args:[y]}),!1,y)
y=C.h.gcI(a)
z=H.o(y,0)
W.ap(y.a,y.b,H.j(new D.fd(this),{func:1,ret:-1,args:[z]}),!1,z)
z=C.h.gcK(a)
y=H.o(z,0)
W.ap(z.a,z.b,H.j(new D.fe(this),{func:1,ret:-1,args:[y]}),!1,y)
y=C.h.gcL(a)
z=H.o(y,0)
W.ap(y.a,y.b,H.j(new D.ff(this),{func:1,ret:-1,args:[z]}),!1,z)},
p:{
fb:function(a){var z=P.E
z=new D.fa(P.a6(null,null,null,z),P.a6(null,null,null,z),P.a6(null,null,null,z),0,0,0,0,0)
z.bW(a)
return z}}},fc:{"^":"m:3;a",
$1:function(a){var z,y
H.h(a,"$isS")
a.preventDefault()
z=this.a
y=J.k(a)
z.r=H.I(y.gbn(a).a)
z.x=H.I(y.gbn(a).b)
z.d=a.movementX
z.e=a.movementY}},fd:{"^":"m:3;a",
$1:function(a){var z
H.h(a,"$isS")
a.preventDefault()
P.au("BUTTON "+H.e(a.button))
z=this.a
z.a.n(0,a.button)
z.b.n(0,a.button)}},fe:{"^":"m:3;a",
$1:function(a){var z
H.h(a,"$isS")
a.preventDefault()
z=this.a
z.a.bp(0,a.button)
z.c.n(0,a.button)}},ff:{"^":"m:18;a",
$1:function(a){H.h(a,"$isaL")
a.preventDefault()
this.a.f=H.I(C.a0.gcw(a))}},fj:{"^":"fL;ch,cx,cy,db,dx,dy,fr,fx,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
c_:function(a){var z,y
z=C.K.cD(H.C(a,"$isi",[P.a],"$asi"),0,new A.iR(),P.E)
if(typeof z!=="number")return H.ba(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
iR:{"^":"m:19;",
$2:function(a,b){var z,y
H.I(a)
z=J.a2(b)
if(typeof a!=="number")return a.C()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",ae:{"^":"a;a",
O:function(a){var z,y
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
k:function(a){return"[0] "+this.M(0).k(0)+"\n[1] "+this.M(1).k(0)+"\n[2] "+this.M(2).k(0)+"\n[3] "+this.M(3).k(0)+"\n"},
v:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ae){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gt:function(a){return A.c_(this.a)},
M:function(a){var z,y,x
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
return new T.bO(z)},
P:function(){var z=this.a
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
z[15]=1}},K:{"^":"a;a",
Z:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
O:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
v:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.K){z=this.a
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
gbl:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
ag:function(a){var z,y,x
z=Math.sqrt(this.gbl())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
ad:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bd:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.K(new Float32Array(3))
z.Z(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
gbI:function(a){return this.a[0]},
gbJ:function(a){return this.a[1]},
p:{
h3:function(a,b,c){var z=new T.K(new Float32Array(3))
z.Z(a,b,c)
return z}}},bO:{"^":"a;a",
k:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
v:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.bO){z=this.a
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
return Math.sqrt(y*y+x*x+w*w+z*z)}}}],["","",,R,{"^":"",
iO:function(a){var z,y,x,w,v,u,t,s,r
z=[T.K]
y=H.r([],z)
x=H.r([],z)
for(w=0;w<200;++w){z=new Float32Array(3)
z[0]=0
z[1]=0
z[2]=0
C.a.n(y,new T.K(z))
z=C.m.X()
v=C.m.X()
u=C.m.X()
t=new Float32Array(3)
t[0]=z-0.5
t[1]=v-0.5
t[2]=u-0.5
C.a.n(x,new T.K(t))}z=G.cA("firefwork-particles",a.d,0,a.e.x)
z.ay(G.ct(y,null))
v=G.ct(x,null)
u=z.r
t=z.d
u.i(0,"aNormal",J.ca(t.a))
z.az("aNormal",v,3)
s=$.aa().h(0,"aNormal")
if(s==null)H.a0("Unknown canonical aNormal")
r=z.x.h(0,"aNormal")
J.bx(t.a,z.e)
t.bk(0,r,0)
t.bH(0,u.h(0,"aNormal"),r,s.aB(),5126,!1,0,0)
return z},
di:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z={}
y=document
x=H.h(C.B.cM(y,"#webgl-canvas"),"$isbD")
w=x.clientWidth
v=x.clientHeight
x.width=w
x.height=v
u=new G.eq(x)
t=P.f
s=P.a
r=(x&&C.h).aj(x,"webgl2",P.cy(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],t,s))
u.a=r
if(r==null)H.a0(P.cs('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
q="ChronosGL Config: "+H.e(J.e2(r))
if($.iI>0)P.au("I: "+q)
J.dP(r,0,0,0,1)
J.bd(r,2929)
r=new Float32Array(3)
q=D.eX(null)
p=D.fb(x)
o=new T.ae(new Float32Array(16))
o.P()
n=new Float32Array(3)
m=new Float32Array(3)
l=new Float32Array(3)
k=new D.fj(15,0,0,0,new T.K(r),-0.02,q,p,o,new T.K(n),new T.K(m),new T.K(l),new T.K(new Float32Array(3)),"camera:orbit",!1,!0)
r=new T.ae(new Float32Array(16))
r.P()
q=new T.ae(new Float32Array(16))
q.P()
j=new G.fl(k,50,1,0.1,1000,r,q,new T.ae(new Float32Array(16)),P.a5(t,s),"perspective",!1,!0)
j.aF()
j.bS(w,v)
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
f=H.h(C.h.bL(g,"2d"),"$isbE")
e=(f&&C.p).ba(f,32,32,1,32,32,22);(e&&C.n).V(e,0,"gray")
C.n.V(e,1,"black")
f.fillStyle=e
C.p.cC(f,0,0,64,64)
e=C.p.ba(f,32,32,1,32,32,6);(e&&C.n).V(e,0,"white")
C.n.V(e,1,"gray")
f.globalAlpha=0.9
f.fillStyle=e
f.arc(32,32,4,0,6.283185307179586,!1)
f.fill()
y=J.dS(u.a)
J.aX(u.a,3553,y)
J.e7(u.a,37440,1)
J.aX(u.a,3553,y)
J.e9(u.a,3553,0,6408,6408,5121,g)
J.cd(u.a,3553,10240,9729)
J.cd(u.a,3553,10241,9729)
J.e3(u.a)
J.aX(u.a,3553,null)
s.i(0,"uTexture",new G.eO(g,"Utils::Particles",y,3553,u,new G.fV(!1,!1,!1,!0,1,9729,9729)))
s.i(0,"uPointSize",1000)
y=new T.ae(new Float32Array(16))
y.P()
s.i(0,"uModelMatrix",y)
s.i(0,"uColor",$.dp())
d=R.h2(i,2000,100)
c=R.iO(h)
z.a=0
new R.j1(z,k,new G.f5(s,"stars",!1,!0),i,d,j,h,c).$1(0)},
j1:{"^":"m:20;a,b,c,d,e,f,r,x",
$1:function(a8){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
H.c2(a8)
if(typeof a8!=="number")return a8.aw()
this.a.a=a8+0
z=this.b
z.cx+=0.001
y=z.fx
x=y.a
if(x.D(0,0)||x.D(0,1)){x=z.cx
w=y.d
if(typeof w!=="number")return w.as()
z.cx=x+w*0.01
w=z.cy
x=y.e
if(typeof x!=="number")return x.as()
z.cy=w+x*0.01}x=z.fr
w=x.a
if(w.D(0,37))z.cx+=0.03
else if(w.D(0,39))z.cx-=0.03
if(w.D(0,38))z.cy+=0.03
else if(w.D(0,40))z.cy-=0.03
if(w.D(0,33))z.ch*=0.99
else if(w.D(0,34))z.ch*=1.01
if(w.D(0,32)){z.cx=0
z.cy=0}w=y.f
if(typeof w!=="number")return w.as()
w=z.ch-w*z.dy
if(w>0)z.ch=w
w=C.q.ct(z.cy,-1.4707963267948965,1.4707963267948965)
z.cy=w
v=z.ch
u=z.cx
t=v*Math.cos(w)
s=Math.cos(u)
w=Math.sin(w)
u=Math.sin(u)
r=z.d.a
r[12]=t*s
r[13]=v*w
r[14]=t*u
u=z.dx.a
r[12]=r[12]+u[0]
r[13]=r[13]+u[1]
r[14]=r[14]+u[2]
q=new T.K(new Float32Array(3))
q.Z(0,1,0)
w=z.al()
v=new Float32Array(3)
p=new T.K(v)
p.O(w)
v[0]=v[0]-u[0]
v[1]=v[1]-u[1]
v[2]=v[2]-u[2]
p.ag(0)
o=q.bd(p)
o.ag(0)
n=p.bd(o)
n.ag(0)
u=o.ad(w)
s=n.ad(w)
w=p.ad(w)
m=o.a
l=m[0]
k=n.a
j=k[0]
i=v[0]
h=m[1]
g=k[1]
f=v[1]
m=m[2]
k=k[2]
v=v[2]
r[15]=1
r[14]=-w
r[13]=-s
r[12]=-u
r[11]=0
r[10]=v
r[9]=k
r[8]=m
r[7]=0
r[6]=f
r[5]=g
r[4]=h
r[3]=0
r[2]=i
r[1]=j
r[0]=l
l=z.f
j=l.a
j[0]=r[2]
j[1]=r[6]
j[2]=r[10]
z=-z.db
e=Math.sqrt(l.gbl())
o=j[0]/e
n=j[1]/e
p=j[2]/e
d=Math.cos(z)
c=Math.sin(z)
b=1-d
a=o*o*b+d
z=p*c
a0=o*n*b-z
j=n*c
a1=o*p*b+j
a2=n*o*b+z
a3=n*n*b+d
z=o*c
a4=n*p*b-z
a5=p*o*b-j
a6=p*n*b+z
a7=p*p*b+d
z=r[0]
j=r[4]
l=r[8]
i=r[1]
h=r[5]
g=r[9]
f=r[2]
m=r[6]
k=r[10]
v=r[3]
u=r[7]
s=r[11]
r[0]=z*a+j*a2+l*a5
r[1]=i*a+h*a2+g*a5
r[2]=f*a+m*a2+k*a5
r[3]=v*a+u*a2+s*a5
r[4]=z*a0+j*a3+l*a6
r[5]=i*a0+h*a3+g*a6
r[6]=f*a0+m*a3+k*a6
r[7]=v*a0+u*a3+s*a6
r[8]=z*a1+j*a4+l*a7
r[9]=i*a1+h*a4+g*a7
r[10]=f*a1+m*a4+k*a7
r[11]=v*a1+u*a4+s*a7
x.c.L(0)
x.b.L(0)
y.e=0
y.d=0
y.f=0
y.c.L(0)
y.b.L(0)
y=this.c
y.d.i(0,"uTime",a8/1000)
x=this.f
s=[G.bn]
this.d.aA(this.e,H.r([x,y],s))
this.r.aA(this.x,H.r([x,y],s))
C.a1.gco(window).bt(this,-1)}}},1]]
setupProgram(dart,0,0)
J.x=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cu.prototype
return J.eU.prototype}if(typeof a=="string")return J.b3.prototype
if(a==null)return J.cv.prototype
if(typeof a=="boolean")return J.eT.prototype
if(a.constructor==Array)return J.b1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.a)return a
return J.bu(a)}
J.aS=function(a){if(typeof a=="string")return J.b3.prototype
if(a==null)return a
if(a.constructor==Array)return J.b1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.a)return a
return J.bu(a)}
J.iJ=function(a){if(a==null)return a
if(a.constructor==Array)return J.b1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.a)return a
return J.bu(a)}
J.iK=function(a){if(typeof a=="number")return J.b2.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.aK.prototype
return a}
J.iL=function(a){if(typeof a=="number")return J.b2.prototype
if(typeof a=="string")return J.b3.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.aK.prototype
return a}
J.iM=function(a){if(typeof a=="string")return J.b3.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.aK.prototype
return a}
J.k=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.a)return a
return J.bu(a)}
J.iN=function(a){if(a==null)return a
if(!(a instanceof P.a))return J.aK.prototype
return a}
J.aw=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.x(a).v(a,b)}
J.W=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.iK(a).I(a,b)}
J.dI=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.iZ(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aS(a).h(a,b)}
J.dJ=function(a,b){return J.iM(a).a_(a,b)}
J.c7=function(a,b){return J.k(a).aZ(a,b)}
J.dK=function(a,b,c,d){return J.k(a).cn(a,b,c,d)}
J.c8=function(a,b,c){return J.k(a).b_(a,b,c)}
J.dL=function(a,b){return J.k(a).cp(a,b)}
J.c9=function(a,b,c){return J.k(a).b0(a,b,c)}
J.aX=function(a,b,c){return J.k(a).b2(a,b,c)}
J.bx=function(a,b){return J.k(a).cs(a,b)}
J.dM=function(a,b){return J.k(a).b3(a,b)}
J.dN=function(a,b,c){return J.k(a).b4(a,b,c)}
J.dO=function(a,b,c,d){return J.k(a).b5(a,b,c,d)}
J.dP=function(a,b,c,d,e){return J.k(a).b6(a,b,c,d,e)}
J.dQ=function(a,b){return J.iL(a).F(a,b)}
J.by=function(a,b,c){return J.aS(a).cu(a,b,c)}
J.ca=function(a){return J.k(a).b8(a)}
J.dR=function(a){return J.k(a).b9(a)}
J.dS=function(a){return J.k(a).bc(a)}
J.dT=function(a){return J.k(a).cv(a)}
J.dU=function(a,b){return J.k(a).be(a,b)}
J.bz=function(a,b){return J.k(a).bf(a,b)}
J.dV=function(a,b,c,d){return J.k(a).bg(a,b,c,d)}
J.dW=function(a,b,c,d,e){return J.k(a).cz(a,b,c,d,e)}
J.dX=function(a,b,c,d,e){return J.k(a).bh(a,b,c,d,e)}
J.dY=function(a,b,c,d,e,f){return J.k(a).cA(a,b,c,d,e,f)}
J.bd=function(a,b){return J.k(a).bi(a,b)}
J.dZ=function(a,b){return J.k(a).bj(a,b)}
J.e_=function(a){return J.k(a).cB(a)}
J.e0=function(a,b){return J.k(a).w(a,b)}
J.a2=function(a){return J.x(a).gt(a)}
J.cb=function(a){return J.iJ(a).gB(a)}
J.aY=function(a){return J.aS(a).gj(a)}
J.e1=function(a){return J.iN(a).gbI(a)}
J.e2=function(a){return J.k(a).Y(a)}
J.e3=function(a){return J.k(a).ak(a)}
J.e4=function(a,b){return J.k(a).am(a,b)}
J.e5=function(a,b,c){return J.k(a).an(a,b,c)}
J.cc=function(a,b,c){return J.k(a).ar(a,b,c)}
J.e6=function(a,b){return J.k(a).bm(a,b)}
J.e7=function(a,b,c){return J.k(a).bo(a,b,c)}
J.e8=function(a,b,c,d){return J.k(a).av(a,b,c,d)}
J.e9=function(a,b,c,d,e,f,g){return J.k(a).br(a,b,c,d,e,f,g)}
J.cd=function(a,b,c,d){return J.k(a).bs(a,b,c,d)}
J.be=function(a){return J.x(a).k(a)}
J.ea=function(a,b,c,d){return J.k(a).cQ(a,b,c,d)}
J.eb=function(a,b,c){return J.k(a).bw(a,b,c)}
J.ec=function(a,b,c){return J.k(a).bx(a,b,c)}
J.bA=function(a,b,c){return J.k(a).by(a,b,c)}
J.ed=function(a,b,c){return J.k(a).bz(a,b,c)}
J.ce=function(a,b,c){return J.k(a).bA(a,b,c)}
J.cf=function(a,b,c){return J.k(a).bB(a,b,c)}
J.cg=function(a,b,c){return J.k(a).bC(a,b,c)}
J.ch=function(a,b,c,d){return J.k(a).bD(a,b,c,d)}
J.ci=function(a,b,c,d){return J.k(a).bE(a,b,c,d)}
J.ee=function(a,b){return J.k(a).bF(a,b)}
J.ef=function(a,b,c){return J.k(a).cR(a,b,c)}
J.eg=function(a,b,c,d,e,f,g){return J.k(a).bG(a,b,c,d,e,f,g)}
var $=I.p
C.h=W.bD.prototype
C.n=W.en.prototype
C.p=W.bE.prototype
C.B=W.eN.prototype
C.C=J.d.prototype
C.a=J.b1.prototype
C.e=J.cu.prototype
C.t=J.cv.prototype
C.q=J.b2.prototype
C.i=J.b3.prototype
C.J=J.b4.prototype
C.K=H.fg.prototype
C.w=J.fm.prototype
C.r=J.aK.prototype
C.a0=W.aL.prototype
C.a1=W.h5.prototype
C.m=new P.hF()
C.d=new P.hV()
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
$.ay=null
$.ck=null
$.bQ=!1
$.dg=null
$.db=null
$.dl=null
$.bs=null
$.bv=null
$.c0=null
$.ar=null
$.aN=null
$.aO=null
$.bR=!1
$.B=C.d
$.cq=null
$.cp=null
$.co=null
$.cn=null
$.iI=0
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
I.$lazy(y,x,w)}})(["jn","dr",function(){return H.df("_$dart_dartClosure")},"k0","c5",function(){return H.df("_$dart_js")},"kM","dt",function(){return H.Y(H.bm({
toString:function(){return"$receiver$"}}))},"kN","du",function(){return H.Y(H.bm({$method$:null,
toString:function(){return"$receiver$"}}))},"kO","dv",function(){return H.Y(H.bm(null))},"kP","dw",function(){return H.Y(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"kS","dz",function(){return H.Y(H.bm(void 0))},"kT","dA",function(){return H.Y(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"kR","dy",function(){return H.Y(H.cL(null))},"kQ","dx",function(){return H.Y(function(){try{null.$method$}catch(z){return z.message}}())},"kV","dC",function(){return H.Y(H.cL(void 0))},"kU","dB",function(){return H.Y(function(){try{(void 0).$method$}catch(z){return z.message}}())},"l4","c6",function(){return P.h8()},"lg","aW",function(){return[]},"jk","dq",function(){return{}},"kB","ds",function(){return new G.cK(1281,0,4294967295)},"jf","dn",function(){return new G.cJ(32774,770,769)},"le","aa",function(){return P.cy(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.z,"aColorAlpha",C.O,"aPosition",C.x,"aTexUV",C.V,"aNormal",C.Y,"aBinormal",C.N,"aCenter",C.y,"aPointSize",C.b,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a_,"aBitangent",C.L,"iaRotation",C.l,"iaTranslation",C.c,"iaScale",C.b,"iaColor",C.c,"vColor",C.z,"vTexUV",C.k,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.x,"vPositionFromLight",C.M,"vCenter",C.y,"vDepth",C.T,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.A,"uConvolutionMatrix",C.A,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.Z,"uTexture",C.f,"uTexture2",C.f,"uTexture3",C.f,"uTexture4",C.f,"uSpecularMap",C.f,"uNormalMap",C.f,"uBumpMap",C.f,"uDepthMap",C.f,"uCubeTexture",C.X,"uAnimationTable",C.f,"uTime",C.W,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.c,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.Q,"uLightDescs",C.R,"uLightCount",C.b,"uLightTypes",C.S,"uBumpScale",C.U,"uNormalScale",C.P],P.f,G.v)},"kY","dD",function(){return P.fw(null)},"jh","dp",function(){return T.h3(1,0,0)},"ln","dH",function(){var z,y
z=G.bl("PointSpritesV")
y=[P.f]
z.ax(H.r(["aPosition"],y))
z.R(H.r(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"],y))
z.aE(H.r(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"],y))
return z},"lm","dG",function(){var z,y
z=G.bl("PointSpritesF")
y=[P.f]
z.R(H.r(["uTexture"],y))
z.aE(H.r(["oFragColor = texture( uTexture,  gl_PointCoord);"],y))
return z},"lk","dF",function(){var z,y
z=G.bl("FireWorksV")
y=[P.f]
z.ax(H.r(["aPosition","aNormal"],y))
z.R(H.r(["uPerspectiveViewMatrix","uModelMatrix","uTime"],y))
z.aD(H.r(["void main() {\n    float t = mod(uTime, 5.0);\n    vec3 vp = aPosition;\n    if( t < 3.0) {\n     vp.y = t;\n    } else {\n     vp.y = 3.0;\n     vp += normalize(aNormal)*(t-3.0);\n    }\n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(vp, 1.0);\n    gl_PointSize = 100.0/gl_Position.z;\n}\n"],y))
return z},"lj","dE",function(){var z,y
z=G.bl("FireWorksF")
y=[P.f]
z.R(H.r(["uTime","uColor","uTexture"],y))
z.aD(H.r(["void main() {\n    oFragColor = texture(uTexture, gl_PointCoord);\n    float t = mod(uTime, 5.0);\n    if( t < 3.0) {\n       //gl_FragColor.x = 1.0;\n    } else {\n       //gl_FragColor.rgb = uColor;\n       oFragColor.a -= (t-3.0);\n    }\n}\n"],y))
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.A},{func:1,ret:-1},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:P.A,args:[W.S]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.A,args:[,]},{func:1,ret:P.A,args:[,,]},{func:1,ret:P.f,args:[P.E]},{func:1,ret:P.A,args:[W.aC]},{func:1,args:[,P.f]},{func:1,args:[P.f]},{func:1,ret:P.A,args:[{func:1,ret:-1}]},{func:1,ret:P.A,args:[,],opt:[P.T]},{func:1,ret:[P.Z,,],args:[,]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.A,args:[P.y]},{func:1,args:[W.a3]},{func:1,ret:P.A,args:[W.aL]},{func:1,ret:P.E,args:[P.E,P.a]},{func:1,ret:-1,args:[P.y]},{func:1,ret:P.E,args:[,,]}]
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
if(x==y)H.j7(d||a)
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
