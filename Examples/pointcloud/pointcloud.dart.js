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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.co"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.co"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.co(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.b8=function(){}
var dart=[["","",,H,{"^":"",l8:{"^":"b;a"}}],["","",,J,{"^":"",
cs:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bU:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cr==null){H.k6()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.du("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cv()]
if(v!=null)return v
v=H.kb(a)
if(v!=null)return v
if(typeof a=="function")return C.S
y=Object.getPrototypeOf(a)
if(y==null)return C.A
if(y===Object.prototype)return C.A
if(typeof w=="function"){Object.defineProperty(w,$.cv(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
h:{"^":"b;",
B:function(a,b){return a===b},
gv:function(a){return H.aZ(a)},
k:["c4",function(a){return"Instance of '"+H.b_(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fN:{"^":"h;",
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isN:1},
d6:{"^":"h;",
B:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
$isF:1},
cb:{"^":"h;",
gv:function(a){return 0},
k:["c6",function(a){return String(a)}]},
hl:{"^":"cb;"},
b1:{"^":"cb;"},
bl:{"^":"cb;",
k:function(a){var z=a[$.ed()]
if(z==null)return this.c6(a)
return"JavaScript function for "+H.e(J.be(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbg:1},
bi:{"^":"h;$ti",
l:function(a,b){H.z(b,H.p(a,0))
if(!!a.fixed$length)H.Y(P.y("add"))
a.push(b)},
H:function(a,b){var z
H.x(b,"$isi",[H.p(a,0)],"$asi")
if(!!a.fixed$length)H.Y(P.y("addAll"))
for(z=0;z<1;++z)a.push(b[z])},
a_:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.e(a[y]))
return z.join(b)},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
b9:function(a,b){var z,y
H.j(b,{func:1,ret:P.N,args:[H.p(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.aC(a))}return!1},
c_:function(a,b){if(!!a.immutable$list)H.Y(P.y("sort"))
H.hL(a,J.jI(),H.p(a,0))},
a4:function(a){return this.c_(a,null)},
di:function(a,b,c){var z
if(c>=a.length)return-1
for(z=c;z<a.length;++z)if(J.ag(a[z],b))return z
return-1},
dh:function(a,b){return this.di(a,b,0)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.ag(a[z],b))return!0
return!1},
k:function(a){return P.c9(a,"[","]")},
gw:function(a){return new J.f4(a,a.length,0,[H.p(a,0)])},
gv:function(a){return H.aZ(a)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.b7(a,b))
return a[b]},
i:function(a,b,c){H.z(c,H.p(a,0))
if(!!a.immutable$list)H.Y(P.y("indexed set"))
if(b>=a.length||b<0)throw H.c(H.b7(a,b))
a[b]=c},
$isu:1,
$asu:I.b8,
$isi:1,
$isa:1,
p:{
fM:function(a,b){return J.ca(H.o(a,[b]))},
ca:function(a){H.br(a)
a.fixed$length=Array
return a},
l6:[function(a,b){return J.ey(H.e7(a,"$isS"),H.e7(b,"$isS"))},"$2","jI",8,0,29]}},
l7:{"^":"bi;$ti"},
f4:{"^":"b;a,b,c,0d,$ti",
saQ:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.T(z))
x=this.c
if(x>=y){this.saQ(null)
return!1}this.saQ(z[x]);++this.c
return!0},
$isaU:1},
bj:{"^":"h;",
J:function(a,b){var z
H.ct(b)
if(typeof b!=="number")throw H.c(H.b5(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gaa(b)
if(this.gaa(a)===z)return 0
if(this.gaa(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaa:function(a){return a===0?1/a<0:a<0},
bF:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.y(""+a+".toInt()"))},
d2:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.c(P.y(""+a+".ceil()"))},
d3:function(a,b,c){if(this.J(b,c)>0)throw H.c(H.b5(b))
if(this.J(a,b)<0)return b
if(this.J(a,c)>0)return c
return a},
dA:function(a,b){var z
if(b>20)throw H.c(P.bG(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gaa(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
c8:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.b6(a,b)},
T:function(a,b){return(a|0)===a?a/b|0:this.b6(a,b)},
b6:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.y("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
b4:function(a,b){var z
if(a>0)z=this.cQ(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
cQ:function(a,b){return b>31?0:a>>>b},
R:function(a,b){if(typeof b!=="number")throw H.c(H.b5(b))
return a>b},
$isS:1,
$asS:function(){return[P.D]},
$isX:1,
$isD:1},
d5:{"^":"bj;",$isC:1},
d4:{"^":"bj;"},
bk:{"^":"h;",
ah:function(a,b){if(b>=a.length)throw H.c(H.b7(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.t(b)
if(typeof b!=="string")throw H.c(P.cM(b,null,null))
return a+b},
c1:function(a,b,c){var z
if(c>a.length)throw H.c(P.bG(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
c0:function(a,b){return this.c1(a,b,0)},
c3:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bH(b,null,null))
if(b>c)throw H.c(P.bH(b,null,null))
if(c>a.length)throw H.c(P.bH(c,null,null))
return a.substring(b,c)},
c2:function(a,b){return this.c3(a,b,null)},
dz:function(a){return a.toLowerCase()},
d4:function(a,b,c){if(c>a.length)throw H.c(P.bG(c,0,a.length,null,null))
return H.kh(a,b,c)},
J:function(a,b){var z
H.t(b)
if(typeof b!=="string")throw H.c(H.b5(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.c(H.b7(a,b))
return a[b]},
$isu:1,
$asu:I.b8,
$isS:1,
$asS:function(){return[P.d]},
$ishi:1,
$isd:1}}],["","",,H,{"^":"",
fK:function(){return new P.cg("No element")},
fL:function(){return new P.cg("Too many elements")},
hL:function(a,b,c){H.x(a,"$isa",[c],"$asa")
H.j(b,{func:1,ret:P.C,args:[c,c]})
H.bm(a,0,J.aP(a)-1,b,c)},
bm:function(a,b,c,d,e){H.x(a,"$isa",[e],"$asa")
H.j(d,{func:1,ret:P.C,args:[e,e]})
if(c-b<=32)H.hK(a,b,c,d,e)
else H.hJ(a,b,c,d,e)},
hK:function(a,b,c,d,e){var z,y,x,w,v
H.x(a,"$isa",[e],"$asa")
H.j(d,{func:1,ret:P.C,args:[e,e]})
for(z=b+1,y=J.b9(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.a5(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
hJ:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.x(a,"$isa",[a2],"$asa")
H.j(a1,{func:1,ret:P.C,args:[a2,a2]})
z=C.d.T(a0-b+1,6)
y=b+z
x=a0-z
w=C.d.T(b+a0,2)
v=w-z
u=w+z
t=J.b9(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.a5(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.a5(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.a5(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.a5(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a5(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.a5(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.a5(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.a5(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a5(a1.$2(p,o),0)){n=o
o=p
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,a0))
m=b+1
l=a0-1
if(J.ag(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a1()
if(i<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.R()
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
if(typeof e!=="number")return e.a1()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.R()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.R()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a1()
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
H.bm(a,b,m-2,a1,a2)
H.bm(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.ag(a1.$2(t.h(a,m),r),0);)++m
for(;J.ag(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a1()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.bm(a,m,l,a1,a2)}else H.bm(a,m,l,a1,a2)},
cX:{"^":"i;"},
bE:{"^":"cX;$ti",
gw:function(a){return new H.da(this,this.gj(this),0,[H.cq(this,"bE",0)])},
aw:function(a,b){return this.c5(0,H.j(b,{func:1,ret:P.N,args:[H.cq(this,"bE",0)]}))}},
da:{"^":"b;a,b,c,0d,$ti",
saR:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.b9(z)
x=y.gj(z)
if(this.b!==x)throw H.c(P.aC(z))
w=this.c
if(w>=x){this.saR(null)
return!1}this.saR(y.q(z,w));++this.c
return!0},
$isaU:1},
fY:{"^":"bE;a,b,$ti",
gj:function(a){return J.aP(this.a)},
q:function(a,b){return this.b.$1(J.eH(this.a,b))},
$asbE:function(a,b){return[b]},
$asi:function(a,b){return[b]}},
dv:{"^":"i;a,b,$ti",
gw:function(a){return new H.i6(J.bx(this.a),this.b,this.$ti)}},
i6:{"^":"aU;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA(z)))return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
bD:{"^":"b;$ti"}}],["","",,H,{"^":"",
aA:function(a){var z,y
z=H.t(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
jZ:function(a){return init.types[H.L(a)]},
k9:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.A(a).$isv},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.be(a)
if(typeof z!=="string")throw H.c(H.b5(a))
return z},
aZ:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b_:function(a){return H.hm(a)+H.bN(H.ae(a),0,null)},
hm:function(a){var z,y,x,w,v,u,t,s,r
z=J.A(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.K||!!z.$isb1){u=C.z(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aA(w.length>1&&C.h.ah(w,0)===36?C.h.c2(w,1):w)},
aE:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ht:function(a){var z=H.aE(a).getFullYear()+0
return z},
hr:function(a){var z=H.aE(a).getMonth()+1
return z},
hn:function(a){var z=H.aE(a).getDate()+0
return z},
ho:function(a){var z=H.aE(a).getHours()+0
return z},
hq:function(a){var z=H.aE(a).getMinutes()+0
return z},
hs:function(a){var z=H.aE(a).getSeconds()+0
return z},
hp:function(a){var z=H.aE(a).getMilliseconds()+0
return z},
ay:function(a){throw H.c(H.b5(a))},
l:function(a,b){if(a==null)J.aP(a)
throw H.c(H.b7(a,b))},
b7:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aB(!0,b,"index",null)
z=H.L(J.aP(a))
if(!(b<0)){if(typeof z!=="number")return H.ay(z)
y=b>=z}else y=!0
if(y)return P.E(b,a,"index",null,z)
return P.bH(b,"index",null)},
b5:function(a){return new P.aB(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.dg()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ea})
z.name=""}else z.toString=H.ea
return z},
ea:function(){return J.be(this.dartException)},
Y:function(a){throw H.c(a)},
T:function(a){throw H.c(P.aC(a))},
a4:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kj(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.b4(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cc(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.df(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.ef()
u=$.eg()
t=$.eh()
s=$.ei()
r=$.el()
q=$.em()
p=$.ek()
$.ej()
o=$.eo()
n=$.en()
m=v.I(y)
if(m!=null)return z.$1(H.cc(H.t(y),m))
else{m=u.I(y)
if(m!=null){m.method="call"
return z.$1(H.cc(H.t(y),m))}else{m=t.I(y)
if(m==null){m=s.I(y)
if(m==null){m=r.I(y)
if(m==null){m=q.I(y)
if(m==null){m=p.I(y)
if(m==null){m=s.I(y)
if(m==null){m=o.I(y)
if(m==null){m=n.I(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.df(H.t(y),m))}}return z.$1(new H.i3(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dk()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aB(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dk()
return a},
bb:function(a){var z
if(a==null)return new H.dL(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dL(a)},
jV:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
k8:function(a,b,c,d,e,f){H.f(a,"$isbg")
switch(H.L(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.d0("Unsupported number of arguments for wrapped closure"))},
b6:function(a,b){var z
H.L(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.k8)
a.$identity=z
return z},
ff:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.A(d).$isa){z.$reflectionInfo=d
x=H.hx(z).r}else x=d
w=e?Object.create(new H.hN().constructor.prototype):Object.create(new H.c4(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a6
if(typeof u!=="number")return u.G()
$.a6=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.cR(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.jZ,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cP:H.c5
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.c("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cR(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
fc:function(a,b,c,d){var z=H.c5
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cR:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fe(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fc(y,!w,z,b)
if(y===0){w=$.a6
if(typeof w!=="number")return w.G()
$.a6=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aQ
if(v==null){v=H.bA("self")
$.aQ=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a6
if(typeof w!=="number")return w.G()
$.a6=w+1
t+=w
w="return function("+t+"){return this."
v=$.aQ
if(v==null){v=H.bA("self")
$.aQ=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fd:function(a,b,c,d){var z,y
z=H.c5
y=H.cP
switch(b?-1:a){case 0:throw H.c(H.hC("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fe:function(a,b){var z,y,x,w,v,u,t,s
z=$.aQ
if(z==null){z=H.bA("self")
$.aQ=z}y=$.cO
if(y==null){y=H.bA("receiver")
$.cO=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fd(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.a6
if(typeof y!=="number")return y.G()
$.a6=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.a6
if(typeof y!=="number")return y.G()
$.a6=y+1
return new Function(z+y+"}")()},
co:function(a,b,c,d,e,f,g){return H.ff(a,b,H.L(c),d,!!e,!!f,g)},
t:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a2(a,"String"))},
e_:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a2(a,"double"))},
ct:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a2(a,"num"))},
bQ:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a2(a,"bool"))},
L:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a2(a,"int"))},
cu:function(a,b){throw H.c(H.a2(a,H.aA(H.t(b).substring(3))))},
kf:function(a,b){throw H.c(H.cQ(a,H.aA(H.t(b).substring(3))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.A(a)[b])return a
H.cu(a,b)},
af:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.A(a)[b]
else z=!0
if(z)return a
H.kf(a,b)},
e7:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.A(a)[b])return a
H.cu(a,b)},
br:function(a){if(a==null)return a
if(!!J.A(a).$isa)return a
throw H.c(H.a2(a,"List<dynamic>"))},
ka:function(a,b){var z
if(a==null)return a
z=J.A(a)
if(!!z.$isa)return a
if(z[b])return a
H.cu(a,b)},
cp:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.L(z)]
else return a.$S()}return},
bq:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cp(J.A(a))
if(z==null)return!1
return H.dR(z,null,b,null)},
j:function(a,b){var z,y
if(a==null)return a
if($.ck)return a
$.ck=!0
try{if(H.bq(a,b))return a
z=H.bs(b)
y=H.a2(a,z)
throw H.c(y)}finally{$.ck=!1}},
bS:function(a,b){if(a!=null&&!H.cn(a,b))H.Y(H.a2(a,H.bs(b)))
return a},
dV:function(a){var z,y
z=J.A(a)
if(!!z.$ism){y=H.cp(z)
if(y!=null)return H.bs(y)
return"Closure"}return H.b_(a)},
ki:function(a){throw H.c(new P.fl(H.t(a)))},
e3:function(a){return init.getIsolateTag(a)},
o:function(a,b){a.$ti=b
return a},
ae:function(a){if(a==null)return
return a.$ti},
my:function(a,b,c){return H.aN(a["$as"+H.e(c)],H.ae(b))},
ba:function(a,b,c,d){var z
H.t(c)
H.L(d)
z=H.aN(a["$as"+H.e(c)],H.ae(b))
return z==null?null:z[d]},
cq:function(a,b,c){var z
H.t(b)
H.L(c)
z=H.aN(a["$as"+H.e(b)],H.ae(a))
return z==null?null:z[c]},
p:function(a,b){var z
H.L(b)
z=H.ae(a)
return z==null?null:z[b]},
bs:function(a){return H.ax(a,null)},
ax:function(a,b){var z,y
H.x(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aA(a[0].builtin$cls)+H.bN(a,1,b)
if(typeof a=="function")return H.aA(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.L(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.l(b,y)
return H.e(b[y])}if('func' in a)return H.jH(a,b)
if('futureOr' in a)return"FutureOr<"+H.ax("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jH:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
H.x(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.o([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.l(b,r)
t=C.h.G(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.ax(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.ax(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.ax(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.ax(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.jU(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.t(z[l])
n=n+m+H.ax(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bN:function(a,b,c){var z,y,x,w,v,u
H.x(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.ci("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ax(u,c)}return"<"+z.k(0)+">"},
jY:function(a){var z,y,x,w
z=J.A(a)
if(!!z.$ism){y=H.cp(z)
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
aL:function(a,b,c,d){var z,y
H.t(b)
H.br(c)
H.t(d)
if(a==null)return!1
z=H.ae(a)
y=J.A(a)
if(y[b]==null)return!1
return H.dY(H.aN(y[d],z),null,c,null)},
bt:function(a,b,c,d){H.t(b)
H.br(c)
H.t(d)
if(a==null)return a
if(H.aL(a,b,c,d))return a
throw H.c(H.cQ(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aA(b.substring(3))+H.bN(c,0,null),init.mangledGlobalNames)))},
x:function(a,b,c,d){H.t(b)
H.br(c)
H.t(d)
if(a==null)return a
if(H.aL(a,b,c,d))return a
throw H.c(H.a2(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aA(b.substring(3))+H.bN(c,0,null),init.mangledGlobalNames)))},
dY:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.V(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.V(a[y],b,c[y],d))return!1
return!0},
mu:function(a,b,c){return a.apply(b,H.aN(J.A(b)["$as"+H.e(c)],H.ae(b)))},
e5:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="F"||a===-1||a===-2||H.e5(z)}return!1},
cn:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="F"||b===-1||b===-2||H.e5(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cn(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bq(a,b)}z=J.A(a).constructor
y=H.ae(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.V(z,null,b,null)},
z:function(a,b){if(a!=null&&!H.cn(a,b))throw H.c(H.a2(a,H.bs(b)))
return a},
V:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.V(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.dR(a,b,c,d)
if('func' in a)return c.builtin$cls==="bg"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.V("type" in a?a.type:null,b,x,d)
else if(H.V(a,b,x,d))return!0
else{if(!('$is'+"aT" in y.prototype))return!1
w=y.prototype["$as"+"aT"]
v=H.aN(w,z?a.slice(1):null)
return H.V(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.dY(H.aN(r,z),b,u,d)},
dR:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.V(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.V(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.V(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.V(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.ke(m,b,l,d)},
ke:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.V(c[w],d,a[w],b))return!1}return!0},
mv:function(a,b,c){Object.defineProperty(a,H.t(b),{value:c,enumerable:false,writable:true,configurable:true})},
kb:function(a){var z,y,x,w,v,u
z=H.t($.e4.$1(a))
y=$.bR[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bW[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.t($.dX.$2(a,z))
if(z!=null){y=$.bR[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bW[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bX(x)
$.bR[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bW[z]=x
return x}if(v==="-"){u=H.bX(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.e8(a,x)
if(v==="*")throw H.c(P.du(z))
if(init.leafTags[z]===true){u=H.bX(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.e8(a,x)},
e8:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cs(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bX:function(a){return J.cs(a,!1,null,!!a.$isv)},
kd:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bX(z)
else return J.cs(z,c,null,null)},
k6:function(){if(!0===$.cr)return
$.cr=!0
H.k7()},
k7:function(){var z,y,x,w,v,u,t,s
$.bR=Object.create(null)
$.bW=Object.create(null)
H.k2()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.e9.$1(v)
if(u!=null){t=H.kd(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
k2:function(){var z,y,x,w,v,u,t
z=C.P()
z=H.aK(C.M,H.aK(C.R,H.aK(C.y,H.aK(C.y,H.aK(C.Q,H.aK(C.N,H.aK(C.O(C.z),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.e4=new H.k3(v)
$.dX=new H.k4(u)
$.e9=new H.k5(t)},
aK:function(a,b){return a(b)||b},
kh:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hw:{"^":"b;a,b,c,d,e,f,r,0x",p:{
hx:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.ca(z)
y=z[0]
x=z[1]
return new H.hw(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
hZ:{"^":"b;a,b,c,d,e,f",
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
if(z==null)z=H.o([],[P.d])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.hZ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bI:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dr:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hf:{"^":"M;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
df:function(a,b){return new H.hf(a,b==null?null:b.method)}}},
fO:{"^":"M;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
cc:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fO(a,y,z?null:b.receiver)}}},
i3:{"^":"M;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kj:{"^":"m:5;a",
$1:function(a){if(!!J.A(a).$isM)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dL:{"^":"b;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa1:1},
m:{"^":"b;",
k:function(a){return"Closure '"+H.b_(this).trim()+"'"},
gbU:function(){return this},
$isbg:1,
gbU:function(){return this}},
dm:{"^":"m;"},
hN:{"^":"dm;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aA(z)+"'"}},
c4:{"^":"dm;a,b,c,d",
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c4))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.aZ(this.a)
else y=typeof z!=="object"?J.ah(z):H.aZ(z)
return(y^H.aZ(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.b_(z)+"'")},
p:{
c5:function(a){return a.a},
cP:function(a){return a.c},
bA:function(a){var z,y,x,w,v
z=new H.c4("self","target","receiver","name")
y=J.ca(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
i_:{"^":"M;a",
k:function(a){return this.a},
p:{
a2:function(a,b){return new H.i_("TypeError: "+P.bC(a)+": type '"+H.dV(a)+"' is not a subtype of type '"+b+"'")}}},
fa:{"^":"M;a",
k:function(a){return this.a},
p:{
cQ:function(a,b){return new H.fa("CastError: "+P.bC(a)+": type '"+H.dV(a)+"' is not a subtype of type '"+b+"'")}}},
hB:{"^":"M;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
hC:function(a){return new H.hB(a)}}},
ds:{"^":"b;a,0b,0c,0d",
ga7:function(){var z=this.b
if(z==null){z=H.bs(this.a)
this.b=z}return z},
k:function(a){return this.ga7()},
gv:function(a){var z=this.d
if(z==null){z=C.h.gv(this.ga7())
this.d=z}return z},
B:function(a,b){if(b==null)return!1
return b instanceof H.ds&&this.ga7()===b.ga7()}},
d7:{"^":"db;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gD:function(a){return new H.al(this,[H.p(this,0)])},
a9:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cA(z,b)}else{y=this.dj(b)
return y}},
dj:function(a){var z=this.d
if(z==null)return!1
return this.au(this.an(z,J.ah(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a5(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a5(w,b)
x=y==null?null:y.b
return x}else return this.dk(b)},
dk:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.an(z,J.ah(a)&0x3ffffff)
x=this.au(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.z(b,H.p(this,0))
H.z(c,H.p(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.ap()
this.b=z}this.aS(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ap()
this.c=y}this.aS(y,b,c)}else{x=this.d
if(x==null){x=this.ap()
this.d=x}w=J.ah(b)&0x3ffffff
v=this.an(x,w)
if(v==null)this.as(x,w,[this.af(b,c)])
else{u=this.au(v,b)
if(u>=0)v[u].b=c
else v.push(this.af(b,c))}}},
C:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.p(this,0),H.p(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aC(this))
z=z.c}},
aS:function(a,b,c){var z
H.z(b,H.p(this,0))
H.z(c,H.p(this,1))
z=this.a5(a,b)
if(z==null)this.as(a,b,this.af(b,c))
else z.b=c},
aU:function(){this.r=this.r+1&67108863},
af:function(a,b){var z,y
z=new H.fT(H.z(a,H.p(this,0)),H.z(b,H.p(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.aU()
return z},
au:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.ag(a[y].a,b))return y
return-1},
k:function(a){return P.dc(this)},
a5:function(a,b){return a[b]},
an:function(a,b){return a[b]},
as:function(a,b,c){a[b]=c},
cB:function(a,b){delete a[b]},
cA:function(a,b){return this.a5(a,b)!=null},
ap:function(){var z=Object.create(null)
this.as(z,"<non-identifier-key>",z)
this.cB(z,"<non-identifier-key>")
return z},
$isd8:1},
fT:{"^":"b;a,b,0c,0d"},
al:{"^":"cX;a,$ti",
gj:function(a){return this.a.a},
gw:function(a){var z,y
z=this.a
y=new H.fU(z,z.r,this.$ti)
y.c=z.e
return y}},
fU:{"^":"b;a,b,0c,0d,$ti",
saT:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aC(z))
else{z=this.c
if(z==null){this.saT(null)
return!1}else{this.saT(z.a)
this.c=this.c.c
return!0}}},
$isaU:1},
k3:{"^":"m:5;a",
$1:function(a){return this.a(a)}},
k4:{"^":"m:13;a",
$2:function(a,b){return this.a(a,b)}},
k5:{"^":"m:14;a",
$1:function(a){return this.a(H.t(a))}}}],["","",,H,{"^":"",
jU:function(a){return J.fM(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
bY:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bM:function(a){var z,y
if(!!J.A(a).$isu)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.i(z,y,a[y])
return z},
ab:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.b7(b,a))},
ha:{"^":"h;",$isi0:1,"%":"DataView;ArrayBufferView;cf|dF|dG|dd|dH|dI|an"},
cf:{"^":"ha;",
gj:function(a){return a.length},
$isu:1,
$asu:I.b8,
$isv:1,
$asv:I.b8},
dd:{"^":"dG;",
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
i:function(a,b,c){H.e_(c)
H.ab(b,a,a.length)
a[b]=c},
$asbD:function(){return[P.X]},
$asn:function(){return[P.X]},
$isi:1,
$asi:function(){return[P.X]},
$isa:1,
$asa:function(){return[P.X]},
"%":"Float64Array"},
an:{"^":"dI;",
i:function(a,b,c){H.L(c)
H.ab(b,a,a.length)
a[b]=c},
$asbD:function(){return[P.C]},
$asn:function(){return[P.C]},
$isi:1,
$asi:function(){return[P.C]},
$isa:1,
$asa:function(){return[P.C]}},
h9:{"^":"dd;",$isad:1,"%":"Float32Array"},
lh:{"^":"an;",
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"Int16Array"},
li:{"^":"an;",
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
$isfI:1,
"%":"Int32Array"},
lj:{"^":"an;",
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lk:{"^":"an;",
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hb:{"^":"an;",
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
$ism4:1,
"%":"Uint32Array"},
ll:{"^":"an;",
gj:function(a){return a.length},
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lm:{"^":"an;",
gj:function(a){return a.length},
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dF:{"^":"cf+n;"},
dG:{"^":"dF+bD;"},
dH:{"^":"cf+n;"},
dI:{"^":"dH+bD;"}}],["","",,P,{"^":"",
ia:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jP()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b6(new P.ic(z),1)).observe(y,{childList:true})
return new P.ib(z,y,x)}else if(self.setImmediate!=null)return P.jQ()
return P.jR()},
me:[function(a){self.scheduleImmediate(H.b6(new P.id(H.j(a,{func:1,ret:-1})),0))},"$1","jP",4,0,4],
mf:[function(a){self.setImmediate(H.b6(new P.ie(H.j(a,{func:1,ret:-1})),0))},"$1","jQ",4,0,4],
mg:[function(a){H.j(a,{func:1,ret:-1})
P.jp(0,a)},"$1","jR",4,0,4],
jL:function(a,b){if(H.bq(a,{func:1,args:[P.b,P.a1]}))return H.j(a,{func:1,ret:null,args:[P.b,P.a1]})
if(H.bq(a,{func:1,args:[P.b]}))return H.j(a,{func:1,ret:null,args:[P.b]})
throw H.c(P.cM(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jK:function(){var z,y
for(;z=$.aJ,z!=null;){$.b4=null
y=z.b
$.aJ=y
if(y==null)$.b3=null
z.a.$0()}},
ms:[function(){$.cl=!0
try{P.jK()}finally{$.b4=null
$.cl=!1
if($.aJ!=null)$.cw().$1(P.dZ())}},"$0","dZ",0,0,1],
dU:function(a){var z=new P.dx(H.j(a,{func:1,ret:-1}))
if($.aJ==null){$.b3=z
$.aJ=z
if(!$.cl)$.cw().$1(P.dZ())}else{$.b3.b=z
$.b3=z}},
jO:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
z=$.aJ
if(z==null){P.dU(a)
$.b4=$.b3
return}y=new P.dx(a)
x=$.b4
if(x==null){y.b=z
$.b4=y
$.aJ=y}else{y.b=x.b
x.b=y
$.b4=y
if(y.b==null)$.b3=y}},
kg:function(a){var z,y
z={func:1,ret:-1}
H.j(a,z)
y=$.H
if(C.e===y){P.bP(null,null,C.e,a)
return}y.toString
P.bP(null,null,y,H.j(y.bc(a),z))},
bO:function(a,b,c,d,e){var z={}
z.a=d
P.jO(new P.jM(z,e))},
dS:function(a,b,c,d,e){var z,y
H.j(d,{func:1,ret:e})
y=$.H
if(y===c)return d.$0()
$.H=c
z=y
try{y=d.$0()
return y}finally{$.H=z}},
dT:function(a,b,c,d,e,f,g){var z,y
H.j(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.H
if(y===c)return d.$1(e)
$.H=c
z=y
try{y=d.$1(e)
return y}finally{$.H=z}},
jN:function(a,b,c,d,e,f,g,h,i){var z,y
H.j(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.H
if(y===c)return d.$2(e,f)
$.H=c
z=y
try{y=d.$2(e,f)
return y}finally{$.H=z}},
bP:function(a,b,c,d){var z
H.j(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.bc(d):c.d_(d,-1)
P.dU(d)},
ic:{"^":"m:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ib:{"^":"m:15;a,b,c",
$1:function(a){var z,y
this.a.a=H.j(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
id:{"^":"m:0;a",
$0:function(){this.a.$0()}},
ie:{"^":"m:0;a",
$0:function(){this.a.$0()}},
jo:{"^":"b;a,0b,c",
cu:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b6(new P.jq(this,b),0),a)
else throw H.c(P.y("`setTimeout()` not found."))},
p:{
jp:function(a,b){var z=new P.jo(!0,0)
z.cu(a,b)
return z}}},
jq:{"^":"m:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
ii:{"^":"b;$ti"},
jj:{"^":"ii;a,$ti"},
aI:{"^":"b;0a,b,c,d,e,$ti",
dl:function(a){if(this.c!==6)return!0
return this.b.b.av(H.j(this.d,{func:1,ret:P.N,args:[P.b]}),a.a,P.N,P.b)},
dg:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.p(this,1)}
w=this.b.b
if(H.bq(z,{func:1,args:[P.b,P.a1]}))return H.bS(w.dt(z,a.a,a.b,null,y,P.a1),x)
else return H.bS(w.av(H.j(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aa:{"^":"b;b5:a<,b,0cN:c<,$ti",
bE:function(a,b,c){var z,y,x,w
z=H.p(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.H
if(y!==C.e){y.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jL(b,y)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aa(0,$.H,[c])
w=b==null?1:3
this.aW(new P.aI(x,w,a,b,[z,c]))
return x},
bD:function(a,b){return this.bE(a,null,b)},
aW:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isaI")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaa")
z=y.a
if(z<4){y.aW(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bP(null,null,z,H.j(new P.iy(this,a),{func:1,ret:-1}))}},
b2:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isaI")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaa")
y=u.a
if(y<4){u.b2(a)
return}this.a=y
this.c=u.c}z.a=this.a6(a)
y=this.b
y.toString
P.bP(null,null,y,H.j(new P.iD(z,this),{func:1,ret:-1}))}},
ar:function(){var z=H.f(this.c,"$isaI")
this.c=null
return this.a6(z)},
a6:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
ai:function(a){var z,y,x
z=H.p(this,0)
H.bS(a,{futureOr:1,type:z})
y=this.$ti
if(H.aL(a,"$isaT",y,"$asaT"))if(H.aL(a,"$isaa",y,null))P.dA(a,this)
else P.iz(a,this)
else{x=this.ar()
H.z(a,z)
this.a=4
this.c=a
P.b2(this,x)}},
aY:function(a,b){var z
H.f(b,"$isa1")
z=this.ar()
this.a=8
this.c=new P.U(a,b)
P.b2(this,z)},
$isaT:1,
p:{
iz:function(a,b){var z,y,x
b.a=1
try{a.bE(new P.iA(b),new P.iB(b),null)}catch(x){z=H.a4(x)
y=H.bb(x)
P.kg(new P.iC(b,z,y))}},
dA:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaa")
if(z>=4){y=b.ar()
b.a=a.a
b.c=a.c
P.b2(b,y)}else{y=H.f(b.c,"$isaI")
b.a=2
b.c=a
a.b2(y)}},
b2:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isU")
y=y.b
u=v.a
t=v.b
y.toString
P.bO(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.b2(z.a,b)}y=z.a
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
if(p){H.f(r,"$isU")
y=y.b
u=r.a
t=r.b
y.toString
P.bO(null,null,y,u,t)
return}o=$.H
if(o!=q)$.H=q
else o=null
y=b.c
if(y===8)new P.iG(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.iF(x,b,r).$0()}else if((y&2)!==0)new P.iE(z,x,b).$0()
if(o!=null)$.H=o
y=x.b
if(!!J.A(y).$isaT){if(y.a>=4){n=H.f(t.c,"$isaI")
t.c=null
b=t.a6(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dA(y,t)
return}}m=b.b
n=H.f(m.c,"$isaI")
m.c=null
b=m.a6(n)
y=x.a
u=x.b
if(!y){H.z(u,H.p(m,0))
m.a=4
m.c=u}else{H.f(u,"$isU")
m.a=8
m.c=u}z.a=m
y=m}}}},
iy:{"^":"m:0;a,b",
$0:function(){P.b2(this.a,this.b)}},
iD:{"^":"m:0;a,b",
$0:function(){P.b2(this.b,this.a.a)}},
iA:{"^":"m:6;a",
$1:function(a){var z=this.a
z.a=0
z.ai(a)}},
iB:{"^":"m:16;a",
$2:function(a,b){H.f(b,"$isa1")
this.a.aY(a,b)},
$1:function(a){return this.$2(a,null)}},
iC:{"^":"m:0;a,b,c",
$0:function(){this.a.aY(this.b,this.c)}},
iG:{"^":"m:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bC(H.j(w.d,{func:1}),null)}catch(v){y=H.a4(v)
x=H.bb(v)
if(this.d){w=H.f(this.a.a.c,"$isU").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isU")
else u.b=new P.U(y,x)
u.a=!0
return}if(!!J.A(z).$isaT){if(z instanceof P.aa&&z.gb5()>=4){if(z.gb5()===8){w=this.b
w.b=H.f(z.gcN(),"$isU")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.bD(new P.iH(t),null)
w.a=!1}}},
iH:{"^":"m:17;a",
$1:function(a){return this.a}},
iF:{"^":"m:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.p(x,0)
v=H.z(this.c,w)
u=H.p(x,1)
this.a.b=x.b.b.av(H.j(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a4(t)
y=H.bb(t)
x=this.a
x.b=new P.U(z,y)
x.a=!0}}},
iE:{"^":"m:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isU")
w=this.c
if(w.dl(z)&&w.e!=null){v=this.b
v.b=w.dg(z)
v.a=!1}}catch(u){y=H.a4(u)
x=H.bb(u)
w=H.f(this.a.a.c,"$isU")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.U(y,x)
s.a=!0}}},
dx:{"^":"b;a,0b"},
hR:{"^":"b;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.aa(0,$.H,[P.C])
z.a=0
x=H.p(this,0)
w=H.j(new P.hT(z,this),{func:1,ret:-1,args:[x]})
H.j(new P.hU(z,y),{func:1,ret:-1})
W.aw(this.a,this.b,w,!1,x)
return y}},
hT:{"^":"m;a,b",
$1:function(a){H.z(a,H.p(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.p(this.b,0)]}}},
hU:{"^":"m:0;a,b",
$0:function(){this.b.ai(this.a.a)}},
hS:{"^":"b;"},
U:{"^":"b;a,b",
k:function(a){return H.e(this.a)},
$isM:1},
jw:{"^":"b;",$ismc:1},
jM:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dg()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.k(0)
throw x}},
j2:{"^":"jw;",
du:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
try{if(C.e===$.H){a.$0()
return}P.dS(null,null,this,a,-1)}catch(x){z=H.a4(x)
y=H.bb(x)
P.bO(null,null,this,z,H.f(y,"$isa1"))}},
dv:function(a,b,c){var z,y,x
H.j(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.e===$.H){a.$1(b)
return}P.dT(null,null,this,a,b,-1,c)}catch(x){z=H.a4(x)
y=H.bb(x)
P.bO(null,null,this,z,H.f(y,"$isa1"))}},
d_:function(a,b){return new P.j4(this,H.j(a,{func:1,ret:b}),b)},
bc:function(a){return new P.j3(this,H.j(a,{func:1,ret:-1}))},
d0:function(a,b){return new P.j5(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
bC:function(a,b){H.j(a,{func:1,ret:b})
if($.H===C.e)return a.$0()
return P.dS(null,null,this,a,b)},
av:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.H===C.e)return a.$1(b)
return P.dT(null,null,this,a,b,c,d)},
dt:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.H===C.e)return a.$2(b,c)
return P.jN(null,null,this,a,b,c,d,e,f)}},
j4:{"^":"m;a,b,c",
$0:function(){return this.a.bC(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
j3:{"^":"m:1;a,b",
$0:function(){return this.a.du(this.b)}},
j5:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.dv(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
d9:function(a,b,c){H.br(a)
return H.x(H.jV(a,new H.d7(0,0,[b,c])),"$isd8",[b,c],"$asd8")},
a7:function(a,b){return new H.d7(0,0,[a,b])},
a0:function(a,b,c,d){return new P.iO(0,0,[d])},
fJ:function(a,b,c){var z,y
if(P.cm(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.o([],[P.d])
y=$.bc()
C.a.l(y,a)
try{P.jJ(a,z)}finally{if(0>=y.length)return H.l(y,-1)
y.pop()}y=P.dl(b,H.ka(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
c9:function(a,b,c){var z,y,x
if(P.cm(a))return b+"..."+c
z=new P.ci(b)
y=$.bc()
C.a.l(y,a)
try{x=z
x.a=P.dl(x.gS(),a,", ")}finally{if(0>=y.length)return H.l(y,-1)
y.pop()}y=z
y.a=y.gS()+c
y=z.gS()
return y.charCodeAt(0)==0?y:y},
cm:function(a){var z,y
for(z=0;y=$.bc(),z<y.length;++z)if(a===y[z])return!0
return!1},
jJ:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.x(b,"$isa",[P.d],"$asa")
z=a.gw(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.e(z.gA(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.l(b,-1)
v=b.pop()
if(0>=b.length)return H.l(b,-1)
u=b.pop()}else{t=z.gA(z);++x
if(!z.t()){if(x<=4){C.a.l(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.l(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA(z);++x
for(;z.t();t=s,s=r){r=z.gA(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.l(b,-1)
y-=b.pop().length+2;--x}C.a.l(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.l(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.l(b,q)
C.a.l(b,u)
C.a.l(b,v)},
cd:function(a,b){var z,y,x
z=P.a0(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.T)(a),++x)z.l(0,H.z(a[x],b))
return z},
dc:function(a){var z,y,x
z={}
if(P.cm(a))return"{...}"
y=new P.ci("")
try{C.a.l($.bc(),a)
x=y
x.a=x.gS()+"{"
z.a=!0
J.eK(a,new P.fX(z,y))
z=y
z.a=z.gS()+"}"}finally{z=$.bc()
if(0>=z.length)return H.l(z,-1)
z.pop()}z=y.gS()
return z.charCodeAt(0)==0?z:z},
iO:{"^":"iJ;a,0b,0c,0d,0e,0f,r,$ti",
gw:function(a){var z=new P.dE(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.f(z[b],"$isbp")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.f(y[b],"$isbp")!=null}else return this.cz(b)},
cz:function(a){var z=this.d
if(z==null)return!1
return this.am(this.b0(z,a),a)>=0},
l:function(a,b){var z,y
H.z(b,H.p(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cj()
this.b=z}return this.aV(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cj()
this.c=y}return this.aV(y,b)}else return this.cv(0,b)},
cv:function(a,b){var z,y,x
H.z(b,H.p(this,0))
z=this.d
if(z==null){z=P.cj()
this.d=z}y=this.aZ(b)
x=z[y]
if(x==null)z[y]=[this.aq(b)]
else{if(this.am(x,b)>=0)return!1
x.push(this.aq(b))}return!0},
bB:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.b3(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.b3(this.c,b)
else return this.cI(0,b)},
cI:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.b0(z,b)
x=this.am(y,b)
if(x<0)return!1
this.b7(y.splice(x,1)[0])
return!0},
Z:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.ao()}},
aV:function(a,b){H.z(b,H.p(this,0))
if(H.f(a[b],"$isbp")!=null)return!1
a[b]=this.aq(b)
return!0},
b3:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isbp")
if(z==null)return!1
this.b7(z)
delete a[b]
return!0},
ao:function(){this.r=this.r+1&67108863},
aq:function(a){var z,y
z=new P.bp(H.z(a,H.p(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.ao()
return z},
b7:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.ao()},
aZ:function(a){return J.ah(a)&0x3ffffff},
b0:function(a,b){return a[this.aZ(b)]},
am:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.ag(a[y].a,b))return y
return-1},
p:{
cj:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bp:{"^":"b;a,0b,0c"},
dE:{"^":"b;a,b,0c,0d,$ti",
saX:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aC(z))
else{z=this.c
if(z==null){this.saX(null)
return!1}else{this.saX(H.z(z.a,H.p(this,0)))
this.c=this.c.b
return!0}}},
$isaU:1,
p:{
iP:function(a,b,c){var z=new P.dE(a,b,[c])
z.c=a.e
return z}}},
iJ:{"^":"hD;"},
fV:{"^":"iQ;",$isi:1,$isa:1},
n:{"^":"b;$ti",
gw:function(a){return new H.da(a,this.gj(a),0,[H.ba(this,a,"n",0)])},
q:function(a,b){return this.h(a,b)},
df:function(a,b,c,d){var z,y,x
H.z(b,d)
H.j(c,{func:1,ret:d,args:[d,H.ba(this,a,"n",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.c(P.aC(a))}return y},
k:function(a){return P.c9(a,"[","]")}},
db:{"^":"P;"},
fX:{"^":"m:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
P:{"^":"b;$ti",
C:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.ba(this,a,"P",0),H.ba(this,a,"P",1)]})
for(z=J.bx(this.gD(a));z.t();){y=z.gA(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.aP(this.gD(a))},
k:function(a){return P.dc(a)},
$isI:1},
hE:{"^":"b;$ti",
H:function(a,b){var z
for(z=J.bx(H.x(b,"$isi",this.$ti,"$asi"));z.t();)this.l(0,z.gA(z))},
k:function(a){return P.c9(this,"{","}")},
$isi:1,
$islE:1},
hD:{"^":"hE;"},
iQ:{"^":"b+n;"}}],["","",,P,{"^":"",
fy:function(a){if(a instanceof H.m)return a.k(0)
return"Instance of '"+H.b_(a)+"'"},
bC:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.be(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fy(a)},
d0:function(a){return new P.iv(a)},
az:function(a){H.bY(H.e(a))},
N:{"^":"b;"},
"+bool":0,
bB:{"^":"b;a,b",
B:function(a,b){if(b==null)return!1
return b instanceof P.bB&&this.a===b.a&&!0},
J:function(a,b){return C.d.J(this.a,H.f(b,"$isbB").a)},
gv:function(a){var z=this.a
return(z^C.d.b4(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.fm(H.ht(this))
y=P.bf(H.hr(this))
x=P.bf(H.hn(this))
w=P.bf(H.ho(this))
v=P.bf(H.hq(this))
u=P.bf(H.hs(this))
t=P.fn(H.hp(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isS:1,
$asS:function(){return[P.bB]},
p:{
fm:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fn:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bf:function(a){if(a>=10)return""+a
return"0"+a}}},
X:{"^":"D;"},
"+double":0,
aR:{"^":"b;a",
R:function(a,b){return C.d.R(this.a,H.f(b,"$isaR").a)},
B:function(a,b){if(b==null)return!1
return b instanceof P.aR&&this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
J:function(a,b){return C.d.J(this.a,H.f(b,"$isaR").a)},
k:function(a){var z,y,x,w,v
z=new P.fv()
y=this.a
if(y<0)return"-"+new P.aR(0-y).k(0)
x=z.$1(C.d.T(y,6e7)%60)
w=z.$1(C.d.T(y,1e6)%60)
v=new P.fu().$1(y%1e6)
return""+C.d.T(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isS:1,
$asS:function(){return[P.aR]},
p:{
ft:function(a,b,c,d,e,f){return new P.aR(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fu:{"^":"m:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fv:{"^":"m:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
M:{"^":"b;"},
dg:{"^":"M;",
k:function(a){return"Throw of null."}},
aB:{"^":"M;a,b,c,d",
gak:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaj:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gak()+y+x
if(!this.a)return w
v=this.gaj()
u=P.bC(this.b)
return w+v+": "+u},
p:{
cM:function(a,b,c){return new P.aB(!0,a,b,c)}}},
dh:{"^":"aB;e,f,a,b,c,d",
gak:function(){return"RangeError"},
gaj:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bH:function(a,b,c){return new P.dh(null,null,!0,a,b,"Value not in range")},
bG:function(a,b,c,d,e){return new P.dh(b,c,!0,a,d,"Invalid value")}}},
fH:{"^":"aB;e,j:f>,a,b,c,d",
gak:function(){return"RangeError"},
gaj:function(){var z,y
z=H.L(this.b)
if(typeof z!=="number")return z.a1()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
E:function(a,b,c,d,e){var z=H.L(e==null?J.aP(b):e)
return new P.fH(b,z,!0,a,c,"Index out of range")}}},
i4:{"^":"M;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
y:function(a){return new P.i4(a)}}},
i2:{"^":"M;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
du:function(a){return new P.i2(a)}}},
cg:{"^":"M;a",
k:function(a){return"Bad state: "+this.a},
p:{
ch:function(a){return new P.cg(a)}}},
fg:{"^":"M;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bC(z)+"."},
p:{
aC:function(a){return new P.fg(a)}}},
dk:{"^":"b;",
k:function(a){return"Stack Overflow"},
$isM:1},
fl:{"^":"M;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iv:{"^":"b;a",
k:function(a){return"Exception: "+this.a}},
bg:{"^":"b;"},
C:{"^":"D;"},
"+int":0,
i:{"^":"b;$ti",
aw:["c5",function(a,b){var z=H.cq(this,"i",0)
return new H.dv(this,H.j(b,{func:1,ret:P.N,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gw(this)
for(y=0;z.t();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.Y(P.bG(b,0,null,"index",null))
for(z=this.gw(this),y=0;z.t();){x=z.gA(z)
if(b===y)return x;++y}throw H.c(P.E(b,this,"index",null,y))},
k:function(a){return P.fJ(this,"(",")")}},
aU:{"^":"b;$ti"},
a:{"^":"b;$ti",$isi:1},
"+List":0,
I:{"^":"b;$ti"},
F:{"^":"b;",
gv:function(a){return P.b.prototype.gv.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
D:{"^":"b;",$isS:1,
$asS:function(){return[P.D]}},
"+num":0,
b:{"^":";",
B:function(a,b){return this===b},
gv:function(a){return H.aZ(this)},
k:function(a){return"Instance of '"+H.b_(this)+"'"},
toString:function(){return this.k(this)}},
a1:{"^":"b;"},
d:{"^":"b;",$isS:1,
$asS:function(){return[P.d]},
$ishi:1},
"+String":0,
ci:{"^":"b;S:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dl:function(a,b,c){var z=J.bx(b)
if(!z.t())return a
if(c.length===0){do a+=H.e(z.gA(z))
while(z.t())}else{a+=H.e(z.gA(z))
for(;z.t();)a=a+c+H.e(z.gA(z))}return a}}}}],["","",,W,{"^":"",
fw:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.o).K(z,a,b,c)
y.toString
z=W.r
z=new H.dv(new W.a3(y),H.j(new W.fx(),{func:1,ret:P.N,args:[z]}),[z])
x=z.gw(z)
if(!x.t())H.Y(H.fK())
w=x.gA(x)
if(x.t())H.Y(H.fL())
return H.f(w,"$isO")},
d_:function(a){H.f(a,"$isK")
return"wheel"},
aS:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eN(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a4(x)}return z},
is:function(a,b){return document.createElement(a)},
bL:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dD:function(a,b,c,d){var z,y
z=W.bL(W.bL(W.bL(W.bL(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
dQ:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.il(a)
if(!!J.A(z).$isK)return z
return}else return H.f(a,"$isK")},
dW:function(a,b){var z
H.j(a,{func:1,ret:-1,args:[b]})
z=$.H
if(z===C.e)return a
return z.d0(a,b)},
J:{"^":"O;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kk:{"^":"h;0j:length=","%":"AccessibleNodeList"},
f2:{"^":"J;",
k:function(a){return String(a)},
$isf2:1,
"%":"HTMLAnchorElement"},
kl:{"^":"J;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
cN:{"^":"J;",$iscN:1,"%":"HTMLBaseElement"},
f7:{"^":"h;","%":";Blob"},
bz:{"^":"J;",$isbz:1,"%":"HTMLBodyElement"},
c6:{"^":"J;0n:height=,0m:width=",
bV:function(a,b,c){var z=this.cE(a,b,P.jS(c,null))
return z},
cE:function(a,b,c){return a.getContext(b,c)},
$isc6:1,
"%":"HTMLCanvasElement"},
kq:{"^":"h;",
ab:function(a){return P.W(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kr:{"^":"r;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fh:{"^":"c7;",$isfh:1,"%":"CSSNumericValue|CSSUnitValue"},
ks:{"^":"fk;0j:length=","%":"CSSPerspective"},
ai:{"^":"h;",$isai:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fi:{"^":"ij;0j:length=",
az:function(a,b){var z=this.cF(a,this.ag(a,b))
return z==null?"":z},
ag:function(a,b){var z,y
z=$.ec()
y=z[b]
if(typeof y==="string")return y
y=this.cR(a,b)
z[b]=y
return y},
cR:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fo()+b
if(z in a)return z
return b},
cF:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fj:{"^":"b;",
gn:function(a){return this.az(a,"height")},
gm:function(a){return this.az(a,"width")}},
c7:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fk:{"^":"h;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
ku:{"^":"c7;0j:length=","%":"CSSTransformValue"},
kv:{"^":"c7;0j:length=","%":"CSSUnparsedValue"},
kx:{"^":"h;0j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
fp:{"^":"J;","%":"HTMLDivElement"},
fq:{"^":"r;",
cU:function(a,b){return a.adoptNode(b)},
bW:function(a,b){return a.getElementById(b)},
dn:function(a,b){return a.querySelector(b)},
gbx:function(a){return new W.bn(a,"mousedown",!1,[W.Q])},
gby:function(a){return new W.bn(a,"mousemove",!1,[W.Q])},
gbz:function(a){return new W.bn(a,"mouseup",!1,[W.Q])},
gbA:function(a){return new W.bn(a,H.t(W.d_(a)),!1,[W.aH])},
"%":"XMLDocument;Document"},
ky:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
fr:{"^":"h;",
d8:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
kz:{"^":"io;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.x(c,"$isR",[P.D],"$asR")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[[P.R,P.D]]},
$isv:1,
$asv:function(){return[[P.R,P.D]]},
$asn:function(){return[[P.R,P.D]]},
$isi:1,
$asi:function(){return[[P.R,P.D]]},
$isa:1,
$asa:function(){return[[P.R,P.D]]},
$asq:function(){return[[P.R,P.D]]},
"%":"ClientRectList|DOMRectList"},
fs:{"^":"h;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
B:function(a,b){var z
if(b==null)return!1
if(!H.aL(b,"$isR",[P.D],"$asR"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.k(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dD(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isR:1,
$asR:function(){return[P.D]},
"%":";DOMRectReadOnly"},
kA:{"^":"iq;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.t(c)
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[P.d]},
$isv:1,
$asv:function(){return[P.d]},
$asn:function(){return[P.d]},
$isi:1,
$asi:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"DOMStringList"},
kB:{"^":"h;0j:length=","%":"DOMTokenList"},
O:{"^":"r;0dw:tagName=",
gcX:function(a){return new W.ir(a)},
k:function(a){return a.localName},
K:["ad",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.cZ
if(z==null){z=H.o([],[W.a8])
y=new W.de(z)
C.a.l(z,W.dB(null))
C.a.l(z,W.dM())
$.cZ=y
d=y}else d=z
z=$.cY
if(z==null){z=new W.dP(d)
$.cY=z
c=z}else{z.a=d
c=z}}if($.ac==null){z=document
y=z.implementation
y=(y&&C.I).d8(y,"")
$.ac=y
$.c8=y.createRange()
y=$.ac
y.toString
y=y.createElement("base")
H.f(y,"$iscN")
y.href=z.baseURI
z=$.ac.head;(z&&C.J).F(z,y)}z=$.ac
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.f(y,"$isbz")}z=$.ac
if(!!this.$isbz)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ac.body;(z&&C.o).F(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.u(C.U,a.tagName)){z=$.c8;(z&&C.B).bX(z,x)
z=$.c8
w=(z&&C.B).d6(z,b)}else{x.innerHTML=b
w=$.ac.createDocumentFragment()
for(z=J.k(w);y=x.firstChild,y!=null;)z.F(w,y)}z=$.ac.body
if(x==null?z!=null:x!==z)J.cG(x)
c.aE(w)
C.q.cU(document,w)
return w},function(a,b,c){return this.K(a,b,c,null)},"d7",null,null,"gdI",5,5,null],
bZ:function(a,b,c,d){a.textContent=null
this.F(a,this.K(a,b,c,d))},
bY:function(a,b){return this.bZ(a,b,null,null)},
X:function(a,b){return a.getAttribute(b)},
cJ:function(a,b){return a.removeAttribute(b)},
gbx:function(a){return new W.bK(a,"mousedown",!1,[W.Q])},
gby:function(a){return new W.bK(a,"mousemove",!1,[W.Q])},
gbz:function(a){return new W.bK(a,"mouseup",!1,[W.Q])},
gbA:function(a){return new W.bK(a,H.t(W.d_(a)),!1,[W.aH])},
$isO:1,
"%":";Element"},
fx:{"^":"m:18;",
$1:function(a){return!!J.A(H.f(a,"$isr")).$isO}},
kD:{"^":"J;0n:height=,0m:width=","%":"HTMLEmbedElement"},
a_:{"^":"h;",$isa_:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
K:{"^":"h;",
cT:function(a,b,c,d){H.j(c,{func:1,args:[W.a_]})
if(c!=null)this.cw(a,b,c,!1)},
cw:function(a,b,c,d){return a.addEventListener(b,H.b6(H.j(c,{func:1,args:[W.a_]}),1),!1)},
$isK:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dJ|dK|dN|dO"},
aj:{"^":"f7;",$isaj:1,"%":"File"},
kU:{"^":"ix;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaj")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aj]},
$isv:1,
$asv:function(){return[W.aj]},
$asn:function(){return[W.aj]},
$isi:1,
$asi:function(){return[W.aj]},
$isa:1,
$asa:function(){return[W.aj]},
$asq:function(){return[W.aj]},
"%":"FileList"},
kV:{"^":"K;0j:length=","%":"FileWriter"},
kY:{"^":"J;0j:length=","%":"HTMLFormElement"},
ak:{"^":"h;",$isak:1,"%":"Gamepad"},
fF:{"^":"J;","%":"HTMLHeadElement"},
kZ:{"^":"h;0j:length=","%":"History"},
l_:{"^":"iL;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isr")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.r]},
$isv:1,
$asv:function(){return[W.r]},
$asn:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
fG:{"^":"fq;","%":"HTMLDocument"},
l0:{"^":"J;0n:height=,0m:width=","%":"HTMLIFrameElement"},
l1:{"^":"h;0n:height=,0m:width=","%":"ImageBitmap"},
l2:{"^":"h;0n:height=,0m:width=","%":"ImageData"},
l3:{"^":"J;0n:height=,0m:width=","%":"HTMLImageElement"},
l5:{"^":"J;0n:height=,0m:width=","%":"HTMLInputElement"},
aV:{"^":"dt;",$isaV:1,"%":"KeyboardEvent"},
fW:{"^":"h;",
k:function(a){return String(a)},
$isfW:1,
"%":"Location"},
h_:{"^":"J;","%":"HTMLAudioElement;HTMLMediaElement"},
ld:{"^":"h;0j:length=","%":"MediaList"},
le:{"^":"iS;",
h:function(a,b){return P.W(a.get(H.t(b)))},
C:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.W(y.value[1]))}},
gD:function(a){var z=H.o([],[P.d])
this.C(a,new W.h1(z))
return z},
gj:function(a){return a.size},
$asP:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"MIDIInputMap"},
h1:{"^":"m:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lf:{"^":"iT;",
h:function(a,b){return P.W(a.get(H.t(b)))},
C:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.W(y.value[1]))}},
gD:function(a){var z=H.o([],[P.d])
this.C(a,new W.h2(z))
return z},
gj:function(a){return a.size},
$asP:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
h2:{"^":"m:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
am:{"^":"h;",$isam:1,"%":"MimeType"},
lg:{"^":"iV;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isam")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.am]},
$isv:1,
$asv:function(){return[W.am]},
$asn:function(){return[W.am]},
$isi:1,
$asi:function(){return[W.am]},
$isa:1,
$asa:function(){return[W.am]},
$asq:function(){return[W.am]},
"%":"MimeTypeArray"},
Q:{"^":"dt;",
gbw:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.aY(a.offsetX,a.offsetY,[P.D])
else{z=a.target
if(!J.A(W.dQ(z)).$isO)throw H.c(P.y("offsetX is only supported on elements"))
y=H.f(W.dQ(z),"$isO")
z=a.clientX
x=a.clientY
w=[P.D]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.x(new P.aY(u,v,w),"$isaY",w,"$asaY")
if(typeof z!=="number")return z.aH()
if(typeof x!=="number")return x.aH()
return new P.aY(C.r.bF(z-u),C.r.bF(x-v),w)}},
$isQ:1,
"%":";DragEvent|MouseEvent"},
a3:{"^":"fV;a",
ga3:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.ch("No elements"))
if(y>1)throw H.c(P.ch("More than one element"))
return z.firstChild},
H:function(a,b){var z,y,x,w,v
H.x(b,"$isi",[W.r],"$asi")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.k(y),v=0;v<x;++v)w.F(y,z.firstChild)
return},
i:function(a,b,c){var z,y
H.f(c,"$isr")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.l(y,b)
J.es(z,c,y[b])},
gw:function(a){var z=this.a.childNodes
return new W.d2(z,z.length,-1,[H.ba(C.W,z,"q",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.l(z,b)
return z[b]},
$asn:function(){return[W.r]},
$asi:function(){return[W.r]},
$asa:function(){return[W.r]}},
r:{"^":"K;0dm:previousSibling=",
dq:function(a){var z=a.parentNode
if(z!=null)J.bu(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.c4(a):z},
F:function(a,b){return a.appendChild(b)},
cK:function(a,b){return a.removeChild(b)},
cL:function(a,b,c){return a.replaceChild(b,c)},
$isr:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hc:{"^":"iX;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isr")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.r]},
$isv:1,
$asv:function(){return[W.r]},
$asn:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"NodeList|RadioNodeList"},
lp:{"^":"J;0n:height=,0m:width=","%":"HTMLObjectElement"},
lr:{"^":"K;0n:height=,0m:width=","%":"OffscreenCanvas"},
ls:{"^":"h;0n:height=,0m:width=","%":"PaintSize"},
ao:{"^":"h;0j:length=",$isao:1,"%":"Plugin"},
lu:{"^":"j0;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isao")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ao]},
$isv:1,
$asv:function(){return[W.ao]},
$asn:function(){return[W.ao]},
$isi:1,
$asi:function(){return[W.ao]},
$isa:1,
$asa:function(){return[W.ao]},
$asq:function(){return[W.ao]},
"%":"PluginArray"},
lw:{"^":"Q;0n:height=,0m:width=","%":"PointerEvent"},
hv:{"^":"h;",
d6:function(a,b){return a.createContextualFragment(b)},
bX:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
lB:{"^":"j6;",
h:function(a,b){return P.W(a.get(H.t(b)))},
C:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.W(y.value[1]))}},
gD:function(a){var z=H.o([],[P.d])
this.C(a,new W.hA(z))
return z},
gj:function(a){return a.size},
$asP:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"RTCStatsReport"},
hA:{"^":"m:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lC:{"^":"h;0n:height=,0m:width=","%":"Screen"},
lD:{"^":"J;0j:length=","%":"HTMLSelectElement"},
ap:{"^":"K;",$isap:1,"%":"SourceBuffer"},
lF:{"^":"dK;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isap")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ap]},
$isv:1,
$asv:function(){return[W.ap]},
$asn:function(){return[W.ap]},
$isi:1,
$asi:function(){return[W.ap]},
$isa:1,
$asa:function(){return[W.ap]},
$asq:function(){return[W.ap]},
"%":"SourceBufferList"},
aq:{"^":"h;",$isaq:1,"%":"SpeechGrammar"},
lG:{"^":"jc;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaq")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aq]},
$isv:1,
$asv:function(){return[W.aq]},
$asn:function(){return[W.aq]},
$isi:1,
$asi:function(){return[W.aq]},
$isa:1,
$asa:function(){return[W.aq]},
$asq:function(){return[W.aq]},
"%":"SpeechGrammarList"},
ar:{"^":"h;0j:length=",$isar:1,"%":"SpeechRecognitionResult"},
lJ:{"^":"jf;",
h:function(a,b){return this.b1(a,H.t(b))},
C:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.cH(a,z)
if(y==null)return
b.$2(y,this.b1(a,y))}},
gD:function(a){var z=H.o([],[P.d])
this.C(a,new W.hQ(z))
return z},
gj:function(a){return a.length},
b1:function(a,b){return a.getItem(b)},
cH:function(a,b){return a.key(b)},
$asP:function(){return[P.d,P.d]},
$isI:1,
$asI:function(){return[P.d,P.d]},
"%":"Storage"},
hQ:{"^":"m:19;a",
$2:function(a,b){return C.a.l(this.a,a)}},
as:{"^":"h;",$isas:1,"%":"CSSStyleSheet|StyleSheet"},
hV:{"^":"J;",
K:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ad(a,b,c,d)
z=W.fw("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a3(y).H(0,new W.a3(z))
return y},
"%":"HTMLTableElement"},
lM:{"^":"J;",
K:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ad(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.K(z.createElement("table"),b,c,d)
z.toString
z=new W.a3(z)
x=z.ga3(z)
x.toString
z=new W.a3(x)
w=z.ga3(z)
y.toString
w.toString
new W.a3(y).H(0,new W.a3(w))
return y},
"%":"HTMLTableRowElement"},
lN:{"^":"J;",
K:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ad(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.K(z.createElement("table"),b,c,d)
z.toString
z=new W.a3(z)
x=z.ga3(z)
y.toString
x.toString
new W.a3(y).H(0,new W.a3(x))
return y},
"%":"HTMLTableSectionElement"},
dn:{"^":"J;",$isdn:1,"%":"HTMLTemplateElement"},
lO:{"^":"h;0m:width=","%":"TextMetrics"},
at:{"^":"K;",$isat:1,"%":"TextTrack"},
au:{"^":"K;",$isau:1,"%":"TextTrackCue|VTTCue"},
lP:{"^":"jn;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isau")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.au]},
$isv:1,
$asv:function(){return[W.au]},
$asn:function(){return[W.au]},
$isi:1,
$asi:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$asq:function(){return[W.au]},
"%":"TextTrackCueList"},
lQ:{"^":"dO;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isat")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.at]},
$isv:1,
$asv:function(){return[W.at]},
$asn:function(){return[W.at]},
$isi:1,
$asi:function(){return[W.at]},
$isa:1,
$asa:function(){return[W.at]},
$asq:function(){return[W.at]},
"%":"TextTrackList"},
lR:{"^":"h;0j:length=","%":"TimeRanges"},
av:{"^":"h;",$isav:1,"%":"Touch"},
lS:{"^":"js;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isav")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.av]},
$isv:1,
$asv:function(){return[W.av]},
$asn:function(){return[W.av]},
$isi:1,
$asi:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$asq:function(){return[W.av]},
"%":"TouchList"},
lT:{"^":"h;0j:length=","%":"TrackDefaultList"},
dt:{"^":"a_;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
m6:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
m8:{"^":"h_;0n:height=,0m:width=","%":"HTMLVideoElement"},
m9:{"^":"K;0j:length=","%":"VideoTrackList"},
ma:{"^":"K;0n:height=,0m:width=","%":"VisualViewport"},
mb:{"^":"h;0m:width=","%":"VTTRegion"},
aH:{"^":"Q;",
gda:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.y("deltaY is not supported"))},
$isaH:1,
"%":"WheelEvent"},
i7:{"^":"K;",
gcW:function(a){var z,y,x
z=P.D
y=new P.aa(0,$.H,[z])
x=H.j(new W.i8(new P.jj(y,[z])),{func:1,ret:-1,args:[P.D]})
this.cD(a)
this.cM(a,W.dW(x,z))
return y},
cM:function(a,b){return a.requestAnimationFrame(H.b6(H.j(b,{func:1,ret:-1,args:[P.D]}),1))},
cD:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdw:1,
"%":"DOMWindow|Window"},
i8:{"^":"m:20;a",
$1:function(a){var z=this.a
a=H.bS(H.ct(a),{futureOr:1,type:H.p(z,0)})
z=z.a
if(z.a!==0)H.Y(P.ch("Future already completed"))
z.ai(a)}},
dy:{"^":"r;",$isdy:1,"%":"Attr"},
mh:{"^":"jy;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isai")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ai]},
$isv:1,
$asv:function(){return[W.ai]},
$asn:function(){return[W.ai]},
$isi:1,
$asi:function(){return[W.ai]},
$isa:1,
$asa:function(){return[W.ai]},
$asq:function(){return[W.ai]},
"%":"CSSRuleList"},
mi:{"^":"fs;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
B:function(a,b){var z
if(b==null)return!1
if(!H.aL(b,"$isR",[P.D],"$asR"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.k(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dD(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mj:{"^":"jA;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isak")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ak]},
$isv:1,
$asv:function(){return[W.ak]},
$asn:function(){return[W.ak]},
$isi:1,
$asi:function(){return[W.ak]},
$isa:1,
$asa:function(){return[W.ak]},
$asq:function(){return[W.ak]},
"%":"GamepadList"},
mo:{"^":"jC;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isr")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.r]},
$isv:1,
$asv:function(){return[W.r]},
$asn:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mp:{"^":"jE;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isar")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ar]},
$isv:1,
$asv:function(){return[W.ar]},
$asn:function(){return[W.ar]},
$isi:1,
$asi:function(){return[W.ar]},
$isa:1,
$asa:function(){return[W.ar]},
$asq:function(){return[W.ar]},
"%":"SpeechRecognitionResultList"},
mq:{"^":"jG;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isas")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.as]},
$isv:1,
$asv:function(){return[W.as]},
$asn:function(){return[W.as]},
$isi:1,
$asi:function(){return[W.as]},
$isa:1,
$asa:function(){return[W.as]},
$asq:function(){return[W.as]},
"%":"StyleSheetList"},
ig:{"^":"db;cC:a<",
C:function(a,b){var z,y,x,w,v,u
H.j(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gD(this),y=z.length,x=this.a,w=J.k(x),v=0;v<z.length;z.length===y||(0,H.T)(z),++v){u=z[v]
b.$2(u,w.X(x,u))}},
gD:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.o([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.l(z,w)
v=H.f(z[w],"$isdy")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asP:function(){return[P.d,P.d]},
$asI:function(){return[P.d,P.d]}},
ir:{"^":"ig;a",
h:function(a,b){return J.c2(this.a,H.t(b))},
gj:function(a){return this.gD(this).length}},
bn:{"^":"hR;a,b,c,$ti"},
bK:{"^":"bn;a,b,c,$ti"},
it:{"^":"hS;a,b,c,d,e,$ti",p:{
aw:function(a,b,c,d,e){var z=W.dW(new W.iu(c),W.a_)
if(z!=null&&!0)J.et(a,b,z,!1)
return new W.it(0,a,b,z,!1,[e])}}},
iu:{"^":"m:21;a",
$1:function(a){return this.a.$1(H.f(a,"$isa_"))}},
bo:{"^":"b;a",
cs:function(a){var z,y
z=$.cx()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.T[y],W.k0())
for(y=0;y<12;++y)z.i(0,C.u[y],W.k1())}},
U:function(a){return $.ep().u(0,W.aS(a))},
P:function(a,b,c){var z,y,x
z=W.aS(a)
y=$.cx()
x=y.h(0,H.e(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.bQ(x.$4(a,b,c,this))},
$isa8:1,
p:{
dB:function(a){var z,y
z=document.createElement("a")
y=new W.j7(z,window.location)
y=new W.bo(y)
y.cs(a)
return y},
mm:[function(a,b,c,d){H.f(a,"$isO")
H.t(b)
H.t(c)
H.f(d,"$isbo")
return!0},"$4","k0",16,0,12],
mn:[function(a,b,c,d){var z,y,x
H.f(a,"$isO")
H.t(b)
H.t(c)
z=H.f(d,"$isbo").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","k1",16,0,12]}},
q:{"^":"b;$ti",
gw:function(a){return new W.d2(a,this.gj(a),-1,[H.ba(this,a,"q",0)])}},
de:{"^":"b;a",
U:function(a){return C.a.b9(this.a,new W.he(a))},
P:function(a,b,c){return C.a.b9(this.a,new W.hd(a,b,c))},
$isa8:1},
he:{"^":"m:9;a",
$1:function(a){return H.f(a,"$isa8").U(this.a)}},
hd:{"^":"m:9;a,b,c",
$1:function(a){return H.f(a,"$isa8").P(this.a,this.b,this.c)}},
j8:{"^":"b;",
ct:function(a,b,c,d){var z,y,x
this.a.H(0,c)
z=b.aw(0,new W.j9())
y=b.aw(0,new W.ja())
this.b.H(0,z)
x=this.c
x.H(0,C.V)
x.H(0,y)},
U:function(a){return this.a.u(0,W.aS(a))},
P:["c7",function(a,b,c){var z,y
z=W.aS(a)
y=this.c
if(y.u(0,H.e(z)+"::"+b))return this.d.cV(c)
else if(y.u(0,"*::"+b))return this.d.cV(c)
else{y=this.b
if(y.u(0,H.e(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.e(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}],
$isa8:1},
j9:{"^":"m:10;",
$1:function(a){return!C.a.u(C.u,H.t(a))}},
ja:{"^":"m:10;",
$1:function(a){return C.a.u(C.u,H.t(a))}},
jk:{"^":"j8;e,a,b,c,d",
P:function(a,b,c){if(this.c7(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.c2(a,"template")==="")return this.e.u(0,b)
return!1},
p:{
dM:function(){var z,y,x,w,v
z=P.d
y=P.cd(C.t,z)
x=H.p(C.t,0)
w=H.j(new W.jl(),{func:1,ret:z,args:[x]})
v=H.o(["TEMPLATE"],[z])
y=new W.jk(y,P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z),null)
y.ct(null,new H.fY(C.t,w,[x,z]),v,null)
return y}}},
jl:{"^":"m:22;",
$1:function(a){return"TEMPLATE::"+H.e(H.t(a))}},
ji:{"^":"b;",
U:function(a){var z=J.A(a)
if(!!z.$isdi)return!1
z=!!z.$isG
if(z&&W.aS(a)==="foreignObject")return!1
if(z)return!0
return!1},
P:function(a,b,c){if(b==="is"||C.h.c0(b,"on"))return!1
return this.U(a)},
$isa8:1},
d2:{"^":"b;a,b,c,0d,$ti",
sb_:function(a){this.d=H.z(a,H.p(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sb_(J.bd(this.a,z))
this.c=z
return!0}this.sb_(null)
this.c=y
return!1},
gA:function(a){return this.d},
$isaU:1},
ik:{"^":"b;a",$isK:1,$isdw:1,p:{
il:function(a){if(a===window)return H.f(a,"$isdw")
else return new W.ik(a)}}},
a8:{"^":"b;"},
j7:{"^":"b;a,b",$ism5:1},
dP:{"^":"b;a",
aE:function(a){new W.jv(this).$2(a,null)},
Y:function(a,b){if(b==null)J.cG(a)
else J.bu(b,a)},
cP:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.eL(a)
x=J.c2(y.gcC(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a4(t)}v="element unprintable"
try{v=J.be(a)}catch(t){H.a4(t)}try{u=W.aS(a)
this.cO(H.f(a,"$isO"),b,z,v,u,H.f(y,"$isI"),H.t(x))}catch(t){if(H.a4(t) instanceof P.aB)throw t
else{this.Y(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
cO:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.Y(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.U(a)){this.Y(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.P(a,"is",g)){this.Y(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gD(f)
y=H.o(z.slice(0),[H.p(z,0)])
for(x=f.gD(f).length-1,z=f.a,w=J.k(z);x>=0;--x){if(x>=y.length)return H.l(y,x)
v=y[x]
if(!this.a.P(a,J.eU(v),w.X(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.X(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.X(z,v)
w.cJ(z,v)}}if(!!J.A(a).$isdn)this.aE(a.content)},
$isln:1},
jv:{"^":"m:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.cP(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.Y(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.eM(z)}catch(w){H.a4(w)
v=H.f(z,"$isr")
if(x){u=v.parentNode
if(u!=null)J.bu(u,v)}else J.bu(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.f(y,"$isr")}}},
ij:{"^":"h+fj;"},
im:{"^":"h+n;"},
io:{"^":"im+q;"},
ip:{"^":"h+n;"},
iq:{"^":"ip+q;"},
iw:{"^":"h+n;"},
ix:{"^":"iw+q;"},
iK:{"^":"h+n;"},
iL:{"^":"iK+q;"},
iS:{"^":"h+P;"},
iT:{"^":"h+P;"},
iU:{"^":"h+n;"},
iV:{"^":"iU+q;"},
iW:{"^":"h+n;"},
iX:{"^":"iW+q;"},
j_:{"^":"h+n;"},
j0:{"^":"j_+q;"},
j6:{"^":"h+P;"},
dJ:{"^":"K+n;"},
dK:{"^":"dJ+q;"},
jb:{"^":"h+n;"},
jc:{"^":"jb+q;"},
jf:{"^":"h+P;"},
jm:{"^":"h+n;"},
jn:{"^":"jm+q;"},
dN:{"^":"K+n;"},
dO:{"^":"dN+q;"},
jr:{"^":"h+n;"},
js:{"^":"jr+q;"},
jx:{"^":"h+n;"},
jy:{"^":"jx+q;"},
jz:{"^":"h+n;"},
jA:{"^":"jz+q;"},
jB:{"^":"h+n;"},
jC:{"^":"jB+q;"},
jD:{"^":"h+n;"},
jE:{"^":"jD+q;"},
jF:{"^":"h+n;"},
jG:{"^":"jF+q;"}}],["","",,P,{"^":"",
W:function(a){var z,y,x,w,v
if(a==null)return
z=P.a7(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.T)(y),++w){v=H.t(y[w])
z.i(0,v,a[v])}return z},
jS:function(a,b){var z={}
a.C(0,new P.jT(z))
return z},
cW:function(){var z=$.cV
if(z==null){z=J.bZ(window.navigator.userAgent,"Opera",0)
$.cV=z}return z},
fo:function(){var z,y
z=$.cS
if(z!=null)return z
y=$.cT
if(y==null){y=J.bZ(window.navigator.userAgent,"Firefox",0)
$.cT=y}if(y)z="-moz-"
else{y=$.cU
if(y==null){y=!P.cW()&&J.bZ(window.navigator.userAgent,"Trident/",0)
$.cU=y}if(y)z="-ms-"
else z=P.cW()?"-o-":"-webkit-"}$.cS=z
return z},
jT:{"^":"m:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
dC:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
aY:{"^":"b;M:a>,L:b>,$ti",
k:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
B:function(a,b){if(b==null)return!1
return H.aL(b,"$isaY",[P.D],null)&&this.a==J.by(b)&&this.b==b.gL(b)},
gv:function(a){var z,y,x
z=J.ah(this.a)
y=J.ah(this.b)
y=P.dC(P.dC(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
j1:{"^":"b;"},
R:{"^":"j1;$ti"}}],["","",,P,{"^":"",f3:{"^":"h;",$isf3:1,"%":"SVGAnimatedLength"},kE:{"^":"G;0n:height=,0m:width=","%":"SVGFEBlendElement"},kF:{"^":"G;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},kG:{"^":"G;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},kH:{"^":"G;0n:height=,0m:width=","%":"SVGFECompositeElement"},kI:{"^":"G;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},kJ:{"^":"G;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},kK:{"^":"G;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},kL:{"^":"G;0n:height=,0m:width=","%":"SVGFEFloodElement"},kM:{"^":"G;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},kN:{"^":"G;0n:height=,0m:width=","%":"SVGFEImageElement"},kO:{"^":"G;0n:height=,0m:width=","%":"SVGFEMergeElement"},kP:{"^":"G;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},kQ:{"^":"G;0n:height=,0m:width=","%":"SVGFEOffsetElement"},kR:{"^":"G;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},kS:{"^":"G;0n:height=,0m:width=","%":"SVGFETileElement"},kT:{"^":"G;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},kW:{"^":"G;0n:height=,0m:width=","%":"SVGFilterElement"},kX:{"^":"bh;0n:height=,0m:width=","%":"SVGForeignObjectElement"},fE:{"^":"bh;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bh:{"^":"G;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},l4:{"^":"bh;0n:height=,0m:width=","%":"SVGImageElement"},aW:{"^":"h;",$isaW:1,"%":"SVGLength"},la:{"^":"iN;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.N(a,b)},
i:function(a,b,c){H.f(c,"$isaW")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
N:function(a,b){return a.getItem(b)},
$asn:function(){return[P.aW]},
$isi:1,
$asi:function(){return[P.aW]},
$isa:1,
$asa:function(){return[P.aW]},
$asq:function(){return[P.aW]},
"%":"SVGLengthList"},lb:{"^":"G;0n:height=,0m:width=","%":"SVGMaskElement"},aX:{"^":"h;",$isaX:1,"%":"SVGNumber"},lo:{"^":"iZ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.N(a,b)},
i:function(a,b,c){H.f(c,"$isaX")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
N:function(a,b){return a.getItem(b)},
$asn:function(){return[P.aX]},
$isi:1,
$asi:function(){return[P.aX]},
$isa:1,
$asa:function(){return[P.aX]},
$asq:function(){return[P.aX]},
"%":"SVGNumberList"},lt:{"^":"G;0n:height=,0m:width=","%":"SVGPatternElement"},lv:{"^":"h;0j:length=","%":"SVGPointList"},lx:{"^":"h;0n:height=,0m:width=","%":"SVGRect"},ly:{"^":"fE;0n:height=,0m:width=","%":"SVGRectElement"},di:{"^":"G;",$isdi:1,"%":"SVGScriptElement"},lK:{"^":"jh;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.N(a,b)},
i:function(a,b,c){H.t(c)
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
N:function(a,b){return a.getItem(b)},
$asn:function(){return[P.d]},
$isi:1,
$asi:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"SVGStringList"},G:{"^":"O;",
K:function(a,b,c,d){var z,y,x,w,v,u
z=H.o([],[W.a8])
C.a.l(z,W.dB(null))
C.a.l(z,W.dM())
C.a.l(z,new W.ji())
c=new W.dP(new W.de(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.o).d7(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a3(w)
u=z.ga3(z)
for(z=J.k(v);x=u.firstChild,x!=null;)z.F(v,x)
return v},
$isG:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},lL:{"^":"bh;0n:height=,0m:width=","%":"SVGSVGElement"},b0:{"^":"h;",$isb0:1,"%":"SVGTransform"},lU:{"^":"ju;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.N(a,b)},
i:function(a,b,c){H.f(c,"$isb0")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
N:function(a,b){return a.getItem(b)},
$asn:function(){return[P.b0]},
$isi:1,
$asi:function(){return[P.b0]},
$isa:1,
$asa:function(){return[P.b0]},
$asq:function(){return[P.b0]},
"%":"SVGTransformList"},m7:{"^":"bh;0n:height=,0m:width=","%":"SVGUseElement"},iM:{"^":"h+n;"},iN:{"^":"iM+q;"},iY:{"^":"h+n;"},iZ:{"^":"iY+q;"},jg:{"^":"h+n;"},jh:{"^":"jg+q;"},jt:{"^":"h+n;"},ju:{"^":"jt+q;"}}],["","",,P,{"^":"",ad:{"^":"b;",$isi:1,
$asi:function(){return[P.X]},
$isa:1,
$asa:function(){return[P.X]},
$isi0:1}}],["","",,P,{"^":"",km:{"^":"h;0j:length=","%":"AudioBuffer"},kn:{"^":"ih;",
h:function(a,b){return P.W(a.get(H.t(b)))},
C:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.W(y.value[1]))}},
gD:function(a){var z=H.o([],[P.d])
this.C(a,new P.f5(z))
return z},
gj:function(a){return a.size},
$asP:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"AudioParamMap"},f5:{"^":"m:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},ko:{"^":"K;0j:length=","%":"AudioTrackList"},f6:{"^":"K;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lq:{"^":"f6;0j:length=","%":"OfflineAudioContext"},ih:{"^":"h+P;"}}],["","",,P,{"^":"",f8:{"^":"h;",$isf8:1,"%":"WebGLBuffer"},hu:{"^":"h;",$ishu:1,"%":"WebGLProgram"},lz:{"^":"h;",
b8:function(a,b){return a.activeTexture(b)},
ba:function(a,b,c){return a.attachShader(b,c)},
bb:function(a,b,c){return a.bindBuffer(b,c)},
bd:function(a,b,c){return a.bindTexture(b,c)},
be:function(a,b){return a.blendEquation(b)},
bf:function(a,b,c){return a.blendFunc(b,c)},
bg:function(a,b,c,d){return a.bufferData(b,c,d)},
bh:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bi:function(a,b){return a.compileShader(b)},
bj:function(a){return a.createBuffer()},
bk:function(a){return a.createProgram()},
bl:function(a,b){return a.createShader(b)},
bn:function(a,b){return a.depthMask(b)},
bo:function(a,b){return a.disable(b)},
bp:function(a,b,c,d){return a.drawArrays(b,c,d)},
bq:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
br:function(a,b){return a.enable(b)},
bs:function(a,b){return a.enableVertexAttribArray(b)},
ab:function(a){return P.W(a.getContextAttributes())},
ax:function(a,b){return a.getProgramInfoLog(b)},
ay:function(a,b,c){return a.getProgramParameter(b,c)},
aA:function(a,b){return a.getShaderInfoLog(b)},
aB:function(a,b,c){return a.getShaderParameter(b,c)},
aC:function(a,b,c){return a.getUniformLocation(b,c)},
bv:function(a,b){return a.linkProgram(b)},
aF:function(a,b,c){return a.shaderSource(b,c)},
aG:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bG:function(a,b,c){return a.uniform1f(b,c)},
bH:function(a,b,c){return a.uniform1fv(b,c)},
bI:function(a,b,c){return a.uniform1i(b,c)},
bJ:function(a,b,c){return a.uniform1iv(b,c)},
bK:function(a,b,c){return a.uniform2fv(b,c)},
bL:function(a,b,c){return a.uniform3fv(b,c)},
bM:function(a,b,c){return a.uniform4fv(b,c)},
bN:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bO:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bP:function(a,b){return a.useProgram(b)},
bQ:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bS:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},lA:{"^":"h;",
cY:function(a,b){return a.beginTransformFeedback(b)},
cZ:function(a,b,c,d){return a.bindBufferBase(b,c,d)},
d1:function(a,b){return a.bindVertexArray(b)},
d5:function(a,b,c,d,e,f){return a.copyBufferSubData(b,c,d,e,f)},
d9:function(a){return a.createVertexArray()},
dc:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dd:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
de:function(a){return a.endTransformFeedback()},
dB:function(a,b,c,d){this.cS(a,b,H.x(c,"$isa",[P.d],"$asa"),d)
return},
cS:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dC:function(a,b,c){return a.vertexAttribDivisor(b,c)},
b8:function(a,b){return a.activeTexture(b)},
ba:function(a,b,c){return a.attachShader(b,c)},
bb:function(a,b,c){return a.bindBuffer(b,c)},
bd:function(a,b,c){return a.bindTexture(b,c)},
be:function(a,b){return a.blendEquation(b)},
bf:function(a,b,c){return a.blendFunc(b,c)},
bg:function(a,b,c,d){return a.bufferData(b,c,d)},
bh:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bi:function(a,b){return a.compileShader(b)},
bj:function(a){return a.createBuffer()},
bk:function(a){return a.createProgram()},
bl:function(a,b){return a.createShader(b)},
bn:function(a,b){return a.depthMask(b)},
bo:function(a,b){return a.disable(b)},
bp:function(a,b,c,d){return a.drawArrays(b,c,d)},
bq:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
br:function(a,b){return a.enable(b)},
bs:function(a,b){return a.enableVertexAttribArray(b)},
ab:function(a){return P.W(a.getContextAttributes())},
ax:function(a,b){return a.getProgramInfoLog(b)},
ay:function(a,b,c){return a.getProgramParameter(b,c)},
aA:function(a,b){return a.getShaderInfoLog(b)},
aB:function(a,b,c){return a.getShaderParameter(b,c)},
aC:function(a,b,c){return a.getUniformLocation(b,c)},
bv:function(a,b){return a.linkProgram(b)},
aF:function(a,b,c){return a.shaderSource(b,c)},
aG:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bG:function(a,b,c){return a.uniform1f(b,c)},
bH:function(a,b,c){return a.uniform1fv(b,c)},
bI:function(a,b,c){return a.uniform1i(b,c)},
bJ:function(a,b,c){return a.uniform1iv(b,c)},
bK:function(a,b,c){return a.uniform2fv(b,c)},
bL:function(a,b,c){return a.uniform3fv(b,c)},
bM:function(a,b,c){return a.uniform4fv(b,c)},
bN:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bO:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bP:function(a,b){return a.useProgram(b)},
bQ:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bS:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},hF:{"^":"h;",$ishF:1,"%":"WebGLShader"},hX:{"^":"h;",$ishX:1,"%":"WebGLTexture"},i1:{"^":"h;",$isi1:1,"%":"WebGLUniformLocation"},i5:{"^":"h;",$isi5:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",lH:{"^":"je;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return P.W(this.cG(a,b))},
i:function(a,b,c){H.f(c,"$isI")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
cG:function(a,b){return a.item(b)},
$asn:function(){return[[P.I,,,]]},
$isi:1,
$asi:function(){return[[P.I,,,]]},
$isa:1,
$asa:function(){return[[P.I,,,]]},
$asq:function(){return[[P.I,,,]]},
"%":"SQLResultSetRowList"},jd:{"^":"h+n;"},je:{"^":"jd+q;"}}],["","",,G,{"^":"",
i9:function(a){var z,y,x,w
z=H.o(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.l(z,y)
C.a.i(z,y,w+H.e(z[y]))}return C.a.a_(z,"\n")},
dz:function(a,b,c){var z,y,x,w
z=J.k(a)
y=z.bl(a,b)
z.aF(a,y,c)
z.bi(a,y)
x=H.bQ(z.aB(a,y,35713))
if(x!=null&&!x){w=z.aA(a,y)
P.az("E:Compilation failed:")
P.az("E:"+G.i9(c))
P.az("E:Failure:")
P.az(C.h.G("E:",w))
throw H.c(w)}return y},
d3:function(a,b){var z,y,x
H.x(a,"$isa",[T.w],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.i.i(b,z,J.by(a[y]))
if(y>=a.length)return H.l(a,y)
C.i.i(b,z+1,J.c1(a[y]))
z+=2
if(y>=a.length)return H.l(a,y)
x=J.cE(a[y])
if(z>=b.length)return H.l(b,z)
b[z]=x}return b},
fB:function(a,b){var z,y
H.x(a,"$isa",[T.aF],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.i.i(b,z,J.by(a[y]))
if(y>=a.length)return H.l(a,y)
C.i.i(b,z+1,J.c1(a[y]))}return b},
fC:function(a,b){var z,y,x,w,v
H.x(a,"$isa",[T.aG],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.i.i(b,z,J.by(a[y]))
if(y>=a.length)return H.l(a,y)
C.i.i(b,z+1,J.c1(a[y]))
x=z+2
if(y>=a.length)return H.l(a,y)
w=J.cE(a[y])
v=b.length
if(x>=v)return H.l(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.l(a,y)
w=J.eO(a[y])
if(z>=v)return H.l(b,z)
b[z]=w}return b},
fA:function(a,b){var z,y
H.x(a,"$isa",[[P.a,P.C]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.m.i(b,z,J.bd(a[y],0))
if(y>=a.length)return H.l(a,y)
C.m.i(b,z+1,J.bd(a[y],1))
if(y>=a.length)return H.l(a,y)
C.m.i(b,z+2,J.bd(a[y],2))
if(y>=a.length)return H.l(a,y)
C.m.i(b,z+3,J.bd(a[y],3))}return b},
iI:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.al(z,[H.p(z,0)]),y=y.gw(y),x=b.x,w=[[P.a,P.C]],v=[P.X],u=[T.aG],t=[T.w],s=[T.aF];y.t();){r=y.d
if(!x.a9(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.e0>0)H.bY("I: "+r)
continue}q=z.h(0,r)
switch($.Z().h(0,r).a){case"vec2":b.O(r,G.fB(H.bt(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.O(r,G.d3(H.bt(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.O(r,G.fC(H.bt(q,"$isa",u,"$asa"),null),4)
break
case"float":b.O(r,new Float32Array(H.bM(H.bt(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.O(r,G.fA(H.bt(q,"$isa",w,"$asa"),null),4)
break}}},
bF:{"^":"b;"},
bJ:{"^":"bF;",
aN:function(){return this.d},
k:function(a){var z,y,x,w
z=H.o(["{"+new H.ds(H.jY(this)).k(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.al(y,[H.p(y,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.h(0,w)))}return C.a.a_(z,"\n")}},
f9:{"^":"hM;"},
fb:{"^":"b;0a,b",
bt:function(a,b,c){J.eI(this.a,b)
if(c>0)J.f_(this.a,b,c)},
bR:function(a,b,c,d,e,f,g,h){J.aO(this.a,34962,b)
J.f0(this.a,c,d,e,!1,g,h)}},
fz:{"^":"b;"},
d1:{"^":"b;a,b,c,d"},
fD:{"^":"b;a,b,c,d,e",
cf:function(){var z,y,x,w,v,u,t,s,r
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.o(y,[P.C])
for(y=this.b,w=0,v=0;!1;++v){if(v>=0)return H.l(y,v)
u=y[v]
C.a.i(x,w,u.gdF(u))
C.a.i(x,w+1,u.gdG(u))
C.a.i(x,w+2,u.gdH(u))
w+=3}for(y=z.length,v=0;v<z.length;z.length===y||(0,H.T)(z),++v){t=z[v]
s=t.a
C.a.i(x,w,s)
C.a.i(x,w+1,t.b)
r=t.c
C.a.i(x,w+2,r)
C.a.i(x,w+3,s)
C.a.i(x,w+4,r)
C.a.i(x,w+5,t.d)
w+=6}return x},
ci:function(a,b){var z,y,x,w,v,u,t
z=H.o([],[T.aF])
this.e.i(0,"aTexUV",z)
for(y=b-1,x=a-1,w=0;w<b;++w)for(v=w/y,u=0;u<a;++u){t=new Float32Array(2)
t[0]=v
t[1]=u/x
C.a.l(z,new T.aF(t))}},
cg:function(a,b,c){var z,y,x,w,v,u,t,s,r
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
C.a.l(z,new G.d1(v+s,r+s,r+t,v+t))
t=s}w=u}},
k:function(a){var z,y,x,w,v
z=H.o(["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"],[P.d])
for(y=this.e,x=new H.al(y,[H.p(y,0)]),x=x.gw(x);x.t();){w=x.d
v=$.Z().h(0,w).a
C.a.l(z,H.e(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.a_(z," ")}},
dq:{"^":"b;a,b,c"},
dp:{"^":"b;a,b,c"},
fZ:{"^":"bJ;d,a,b,c"},
h0:{"^":"bF;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sal:function(a){this.cx=H.x(a,"$isa",[P.C],"$asa")},
aK:function(a,b,c){var z,y
C.h.ah(a,0)
H.f(b,"$isad")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.aO(z.a,34962,y)
J.cD(z.a,34962,b,35048)},
aL:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
O:function(a,b,c){var z,y,x,w,v
z=J.cy(a,0)===105
if(z&&this.z===0)this.z=C.d.c8(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.c_(x.a))
this.aK(a,b,c)
w=$.Z().h(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.h(0,a)
J.bv(x.a,this.e)
x.bt(0,v,z?1:0)
x.bR(0,y.h(0,a),v,w.aM(),5126,!1,0,0)},
ae:function(a){var z,y,x,w
z=this.r
y=this.d
z.i(0,"aPosition",J.c_(y.a))
this.ch=a
this.aK("aPosition",a,3)
x=$.Z().h(0,"aPosition")
if(x==null)throw H.c("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.bv(y.a,this.e)
y.bt(0,w,0)
y.bR(0,z.h(0,"aPosition"),w,x.aM(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.o(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=new H.al(z,[H.p(z,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(y,H.e(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.a_(y,"  ")},
p:{
ce:function(a,b,c,d){var z=P.d
return new G.h0(b,J.eB(b.a),c,P.a7(z,P.b),d,0,-1,P.a7(z,P.ad),"meshdata:"+a,!1,!0)}}},
hj:{"^":"bJ;",
cc:function(a,b){var z
if(typeof a!=="number")return a.dD()
if(typeof b!=="number")return H.ay(b)
z=a/b
if(this.z===z)return
this.z=z
this.aO()},
aO:function(){var z,y,x,w,v,u
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
aN:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.w(new Float32Array(3))
u.ac(x,w,v)
v=this.d
v.i(0,"uEyePosition",u)
u=this.cy
u.E(z)
u=u.a
u[12]=0
u[13]=0
u[14]=0
u[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
z=J.A(t)
y=!!z.$isaG
q=y?t.gbT(t):1
if(!!z.$isw){p=t.gM(t)
s=t.gL(t)
r=t.gW(t)
t=p}else if(y){p=t.gM(t)
s=t.gL(t)
r=t.gW(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}z=u[0]
if(typeof t!=="number")return H.ay(t)
y=u[4]
if(typeof s!=="number")return H.ay(s)
x=u[8]
if(typeof r!=="number")return H.ay(r)
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
d.E(this.db)
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
kC:{"^":"b;"},
hy:{"^":"bF;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cm:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.T)(z),++u){t=z[u]
x.i(0,t,J.cF(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.T)(z),++u){t=z[u]
x.i(0,t,J.cF(w.a,v,t))}},
co:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.o([],[P.d])
x=H.o([],[P.d])
for(y=new H.al(y,[H.p(y,0)]),y=y.gw(y);y.t();){w=y.d
if(!z.a9(0,w))C.a.l(x,w)}for(z=this.x,z=P.iP(z,z.r,H.p(z,0)),y=this.Q;z.t();){w=z.d
if(!y.u(0,w))C.a.l(x,w)}return x},
cr:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.x(b,"$isI",[P.d,P.b],"$asI")
z=Date.now()
for(y=new H.al(b,[H.p(b,0)]),y=y.gw(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.t();){s=y.d
switch(J.cy(s,0)){case 117:if(w.a9(0,s)){r=b.h(0,s)
if(v.a9(0,s))H.bY("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.i(0,s,a)
q=$.Z().h(0,s)
if(q==null)H.Y("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.L(r)
J.c3(x.a,p,r)}else if(!!J.A(r).$isfI)J.eY(x.a,p,r)
break
case"float":if(q.c===0){H.e_(r)
J.eW(x.a,p,r)}else if(!!J.A(r).$isad)J.eX(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.af(r,"$isaD").a
J.cL(x.a,p,!1,s)}else if(!!J.A(r).$isad)J.cL(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=C.L.gdE(H.af(r,"$islc"))
J.cK(x.a,p,!1,s)}else if(!!J.A(r).$isad)J.cK(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.cJ(o,p,H.af(r,"$isaG").a)
else J.cJ(o,p,H.f(r,"$isad"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cI(o,p,H.af(r,"$isw").a)
else J.cI(o,p,H.f(r,"$isad"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cH(o,p,H.af(r,"$isaF").a)
else J.cH(o,p,H.f(r,"$isad"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.ay(s)
J.cz(x.a,33984+s)
s=H.af(r,"$ishW").cj()
J.cC(x.a,3553,s)
s=this.ch
J.c3(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.G()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.ay(s)
J.cz(x.a,33984+s)
s=H.af(r,"$ishW").cj()
J.cC(x.a,34067,s)
s=this.ch
J.c3(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.G()
this.ch=s+1
break
default:H.bY("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":s=J.ag(r,!0)
o=x.a
if(s)J.bw(o,2929)
else J.c0(o,2929)
break
case"cStencilFunc":H.af(r,"$isdq")
s=r.a
o=x.a
if(s===1281)J.c0(o,2960)
else{J.bw(o,2960)
o=r.b
n=r.c
J.eT(x.a,s,o,n)}break
case"cDepthWrite":H.bQ(r)
J.eC(x.a,r)
break
case"cBlendEquation":H.af(r,"$isdp")
s=r.a
o=x.a
if(s===1281)J.c0(o,3042)
else{J.bw(o,3042)
o=r.b
n=r.c
J.ew(x.a,o,n)
J.ev(x.a,s)}break}++t
break}}m=P.ft(0,0,0,Date.now()-new P.bB(z,!1).a,0,0)
""+t
m.k(0)},
ce:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.x(b,"$isa",[G.bJ],"$asa")
Date.now()
z=this.d
J.eZ(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.aU()}for(x=0;x<2;++x){w=b[x]
this.cr(w.a,w.aN())}y=this.Q
y.Z(0)
for(v=a.cy,v=new H.al(v,[H.p(v,0)]),v=v.gw(v);v.t();)y.l(0,v.d)
u=this.co()
if(u.length!==0)P.az("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
J.bv(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.aL()
s=a.Q
r=a.z
if(t)J.eu(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.eG(q,y,v,s,0,r)
else J.eF(q,y,v,s,0)}else{s=z.a
if(r>1)J.eE(s,y,0,v,r)
else J.eD(s,y,0,v)}if(t)J.eJ(z.a)},
cd:function(a,b){return this.ce(a,b,null)},
p:{
hz:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
y=P.a0(null,null,null,z)
x=c.b
w=d.b
v=H.x(c.f,"$isa",[z],"$asa")
u=J.eA(b.a)
t=G.dz(b.a,35633,x)
J.cA(b.a,u,t)
s=G.dz(b.a,35632,w)
J.cA(b.a,u,s)
if(v.length>0)J.eV(b.a,u,v,35980)
J.eS(b.a,u)
if(!H.bQ(J.eR(b.a,u,35714)))H.Y(J.eQ(b.a,u))
z=new G.hy(b,c,d,u,P.cd(c.c,z),P.a7(z,P.b),P.a7(z,z),y,a,!1,!0)
z.cm(a,b,c,d)
return z}}},
B:{"^":"b;a,b,c",
aM:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hG:{"^":"b;a,0b,c,d,e,f,r,x",
c9:function(a){var z,y,x,w
H.x(a,"$isa",[P.d],"$asa")
for(z=this.c,y=this.x,x=0;x<3;++x){w=a[x]
C.a.l(z,w)
y.i(0,w,this.r);++this.r}C.a.a4(z)},
cb:function(a){var z,y
H.x(a,"$isa",[P.d],"$asa")
for(z=this.d,y=0;y<4;++y)C.a.l(z,a[y])
C.a.a4(z)},
aJ:function(a){var z,y
H.x(a,"$isa",[P.d],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.l(z,a[y])
C.a.a4(z)},
ca:function(a){var z,y
H.x(a,"$isa",[P.d],"$asa")
for(z=this.f,y=0;y<1;++y)C.a.l(z,a[y])
C.a.a4(z)},
aP:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.x(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.o(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.T)(y),++u){t=y[u]
s=$.Z().h(0,t)
C.a.l(w,"layout (location="+H.e(v.h(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.T)(z),++u){q=z[u]
s=$.Z().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.T)(z),++u){q=z[u]
s=$.Z().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.T)(z),++u){q=z[u]
s=$.Z().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.l(w,"")
if(a)C.a.l(w,"void main(void) {")
C.a.H(w,b)
if(a)C.a.l(w,"}")
return C.a.a_(w,"\n")},
p:{
dj:function(a){var z,y
z=P.d
y=[z]
return new G.hG(a,H.o([],y),H.o([],y),H.o([],y),H.o([],y),0,P.a7(z,P.C))}}},
hM:{"^":"bF;"}}],["","",,R,{"^":"",
iR:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.f(W.is("span",null),"$isO")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.w).ag(y,"float")
y.setProperty(x,"left","")
x=C.w.ag(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.p.F(z,v)}return z},
hk:{"^":"hj;fy,go,x,y,z,Q,ch,cx,cy,db,d,a,b,c",
ds:[function(a){var z,y,x
z=this.fy
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.az("size change "+H.e(y)+" "+H.e(x))
this.cc(y,x)
J.f1(this.go.a,0,0,y,x)},"$1","gdr",4,0,24]},
hO:{"^":"b;",
cn:function(a,b,c){var z,y
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
y=J.k(z)
y.F(z,this.b)
y.F(z,this.d)
y.F(z,this.c)}},
hP:{"^":"hO;e,f,a,b,c,d",
cq:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.x.dA(y,2)+" fps"
C.p.bY(this.c,b)
x=C.d.T(30*C.x.d2(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.f(z.firstChild,"$isO")
v=w.style
u=""+x+"px"
v.height=u
C.p.F(z,w)},
cp:function(a){return this.cq(a,"")}}}],["","",,B,{"^":"",
hH:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=h+1
y=g+1
x=B.hY(B.hh(new B.hI(e,d,f,c),0,6.283185307179586,y,!1,0.001),h,i,!1)
w=H.o([],[G.fz])
v=H.o([],[G.d1])
u=[T.w]
t=H.o([],u)
s=new G.fD(!1,w,v,t,P.a7(P.d,[P.a,,]))
for(w=x.length,r=0;r<x.length;x.length===w||(0,H.T)(x),++r){q=x[r]
for(p=0;p<q.length;p+=2){v=H.f(q[p],"$isw")
v.toString
o=new T.w(new Float32Array(3))
o.E(v)
C.a.l(t,o)}}s.cg(z,y,!1)
s.ci(z,y)
n=$.Z().h(0,"aNormal")
switch(n.a){case"vec2":s.e.i(0,"aNormal",H.o([],[T.aF]))
break
case"vec3":s.e.i(0,"aNormal",H.o([],u))
break
case"vec4":s.e.i(0,"aNormal",H.o([],[T.aG]))
break
case"float":s.e.i(0,"aNormal",H.o([],[P.X]))
break
case"uvec4":s.e.i(0,"aNormal",H.o([],[[P.a,P.C]]))
break}for(w=x.length,v=s.e,r=0;r<x.length;x.length===w||(0,H.T)(x),++r){q=x[r]
for(p=0;t=q.length,p<t;p+=2){o=p+1
if(o>=t)return H.l(q,o)
o=H.f(q[o],"$isw")
m=H.x(v.h(0,"aNormal"),"$isa",u,"$asa")
o.toString
t=new T.w(new Float32Array(3))
t.E(o);(m&&C.a).l(m,t)}}return s},
hY:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=[T.w]
H.x(a,"$isa",z,"$asa")
y=H.o([],[[P.a,T.w]])
x=new Float32Array(3)
w=new T.w(x)
v=new Float32Array(3)
u=new T.w(v)
t=new Float32Array(3)
s=new T.w(t)
for(r=b+1,q=0;p=a.length,q<p;q+=2){o=a[q]
n=q+1
if(n>=p)return H.l(a,n)
m=a[n]
l=H.o([],z)
C.a.l(y,l)
p=m.a
n=p[2]
if(Math.abs(n)>0.7071067811865476){k=p[1]
j=k*k+n*n
i=1/Math.sqrt(j)
v[0]=0
v[1]=-p[2]*i
v[2]=p[1]*i
t[0]=j*i
t[1]=-p[0]*(p[1]*i)
t[2]=p[0]*(-p[2]*i)}else{n=p[0]
k=p[1]
j=n*n+k*k
i=1/Math.sqrt(j)
v[0]=-p[1]*i
v[1]=p[0]*i
v[2]=0
t[0]=-p[2]*(p[0]*i)
t[1]=p[2]*(-p[1]*i)
t[2]=j*i}u.V(0)
s.V(0)
for(h=0;h<r;++h){g=h/b*2*3.141592653589793
f=c*Math.cos(g)
e=c*Math.sin(g)
w.E(o)
w.a8(u,f)
w.a8(s,e)
p=new T.w(new Float32Array(3))
p.E(w)
C.a.l(l,p)
x[2]=0
x[1]=0
x[0]=0
w.a8(u,f)
w.a8(s,e)
w.V(0)
p=new T.w(new Float32Array(3))
p.E(w)
C.a.l(l,p)}}return y},
hh:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
H.j(a,{func:1,ret:-1,args:[P.X,T.w]})
z=H.o([],[T.w])
y=new T.w(new Float32Array(3))
x=new T.w(new Float32Array(3))
for(w=(c-b)/(d-1),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+f,x)
x.aI(0,y)
t=new T.w(new Float32Array(3))
t.E(y)
C.a.l(z,t)
t=new T.w(new Float32Array(3))
t.E(x)
C.a.l(z,t)}return z},
hI:{"^":"m:25;a,b,c,d",
$2:function(a,b){var z,y,x,w,v,u
z=this.c
y=this.a*a
x=Math.cos(y)
w=Math.sin(y)
y=this.b*a
v=Math.cos(y)
u=Math.sin(y)
y=z*(2+x)*0.5
b.sM(0,y*v)
b.sL(0,y*u)
b.sW(0,this.d*z*0.5*w)}}}],["","",,D,{"^":"",fP:{"^":"b;a,b,c",
ck:function(a){var z,y
a=document
z=W.aV
y={func:1,ret:-1,args:[z]}
W.aw(a,"keydown",H.j(new D.fR(this),y),!1,z)
W.aw(a,"keyup",H.j(new D.fS(this),y),!1,z)},
p:{
fQ:function(a){var z=P.C
z=new D.fP(P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z))
z.ck(a)
return z}}},fR:{"^":"m:11;a",
$1:function(a){var z
H.f(a,"$isaV")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},fS:{"^":"m:11;a",
$1:function(a){var z
H.f(a,"$isaV")
z=this.a
z.a.bB(0,a.which)
z.c.l(0,a.which)}},h3:{"^":"b;a,b,c,d,e,f,r,x",
cl:function(a){var z,y,x
if(a==null)a=document
z=J.k(a)
y=z.gby(a)
x=H.p(y,0)
W.aw(y.a,y.b,H.j(new D.h5(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbx(a)
y=H.p(x,0)
W.aw(x.a,x.b,H.j(new D.h6(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbz(a)
x=H.p(y,0)
W.aw(y.a,y.b,H.j(new D.h7(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbA(a)
x=H.p(z,0)
W.aw(z.a,z.b,H.j(new D.h8(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
h4:function(a){var z=P.C
z=new D.h3(P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z),0,0,0,0,0)
z.cl(a)
return z}}},h5:{"^":"m:3;a",
$1:function(a){var z,y
H.f(a,"$isQ")
a.preventDefault()
z=this.a
y=J.k(a)
z.r=H.L(y.gbw(a).a)
z.x=H.L(y.gbw(a).b)
z.d=a.movementX
z.e=a.movementY}},h6:{"^":"m:3;a",
$1:function(a){var z
H.f(a,"$isQ")
a.preventDefault()
P.az("BUTTON "+H.e(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},h7:{"^":"m:3;a",
$1:function(a){var z
H.f(a,"$isQ")
a.preventDefault()
z=this.a
z.a.bB(0,a.button)
z.c.l(0,a.button)}},h8:{"^":"m:26;a",
$1:function(a){H.f(a,"$isaH")
a.preventDefault()
this.a.f=H.L(C.ac.gda(a))}},hg:{"^":"f9;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bV:function(a){var z,y
z=C.i.df(H.x(a,"$isi",[P.b],"$asi"),0,new A.k_(),P.C)
if(typeof z!=="number")return H.ay(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
k_:{"^":"m:27;",
$2:function(a,b){var z,y
H.L(a)
z=J.ah(b)
if(typeof a!=="number")return a.G()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",aD:{"^":"b;a",
E:function(a){var z,y
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
k:function(a){return"[0] "+this.a0(0).k(0)+"\n[1] "+this.a0(1).k(0)+"\n[2] "+this.a0(2).k(0)+"\n[3] "+this.a0(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.l(z,b)
return z[b]},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aD){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gv:function(a){return A.bV(this.a)},
a0:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.l(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.l(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.l(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.l(y,x)
z[3]=y[x]
return new T.aG(z)},
a2:function(){var z=this.a
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
z[15]=1}},aF:{"^":"b;a",
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aF){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gv:function(a){return A.bV(this.a)},
h:function(a,b){var z=this.a
if(b>=2)return H.l(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gM:function(a){return this.a[0]},
gL:function(a){return this.a[1]}},w:{"^":"b;a",
ac:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
E:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.w){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.bV(this.a)},
h:function(a,b){var z=this.a
if(b>=3)return H.l(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gbu:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
V:function(a){var z,y,x
z=Math.sqrt(this.gbu())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
at:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bm:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.w(new Float32Array(3))
z.ac(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
a8:function(a,b){var z,y
z=a.a
y=this.a
y[0]=y[0]+z[0]*b
y[1]=y[1]+z[1]*b
y[2]=y[2]+z[2]*b},
aI:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
sM:function(a,b){this.a[0]=b
return b},
sL:function(a,b){this.a[1]=b
return b},
sW:function(a,b){this.a[2]=b
return b},
gM:function(a){return this.a[0]},
gL:function(a){return this.a[1]},
gW:function(a){return this.a[2]}},aG:{"^":"b;a",
k:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aG){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gv:function(a){return A.bV(this.a)},
h:function(a,b){var z=this.a
if(b>=4)return H.l(z,b)
return z[b]},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gM:function(a){return this.a[0]},
gL:function(a){return this.a[1]},
gW:function(a){return this.a[2]},
gbT:function(a){return this.a[3]}}}],["","",,R,{"^":"",
e6:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z={}
$.Z().i(0,"aCurrentPosition",C.b)
y=document
x=C.q.bW(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.hP(0,0,x,w,y.createElement("div"),R.iR("blue","gray",90,30))
u.cn(x,"blue","gray")
t=H.f(C.q.dn(y,"#webgl-canvas"),"$isc6")
s=new G.fb(t)
x=P.d
v=P.b
r=(t&&C.H).bV(t,"webgl2",P.d9(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],x,v))
s.a=r
if(r==null)H.Y(P.d0('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
q="ChronosGL Config: "+H.e(J.eP(r))
if($.e0>0)P.az("I: "+q)
J.ex(r,0,0,0,1)
J.bw(r,2929)
y=y.body
r=new Float32Array(3)
q=D.fQ(null)
y=D.h4(y)
p=new T.aD(new Float32Array(16))
p.a2()
o=new Float32Array(3)
n=new Float32Array(3)
m=new Float32Array(3)
l=new D.hg(7,0,0,0,new T.w(r),-0.02,q,y,p,new T.w(o),new T.w(n),new T.w(m),new T.w(new Float32Array(3)),"camera:orbit",!1,!0)
y=new T.aD(new Float32Array(16))
y.a2()
r=new T.aD(new Float32Array(16))
r.a2()
k=new R.hk(t,s,l,50,1,0.1,1000,y,r,new T.aD(new Float32Array(16)),P.a7(x,v),"perspective",!1,!0)
k.aO()
k.ds(null)
y=W.a_
W.aw(window,"resize",H.j(k.gdr(),{func:1,ret:-1,args:[y]}),!1,y)
j=G.hz("fireworks",s,$.er(),$.eq())
y=j.e
i=C.a.dh(y.f,"tPosition")
v=P.a7(x,v)
v.i(0,"cDepthTest",!0)
v.i(0,"cDepthWrite",!0)
v.i(0,"cBlendEquation",$.eb())
v.i(0,"cStencilFunc",$.ee())
v.i(0,"uPointSize",10)
x=new T.aD(new Float32Array(16))
x.a2()
v.i(0,"uModelMatrix",x)
h=B.hH(!0,!0,1,2,3,1,2048,128,0.2,!1)
x=j.d
y=y.x
g=G.ce("torusknot",x,4,y)
g.ae(G.d3(h.d,null))
r=H.x(h.cf(),"$isa",[P.C],"$asa")
q=g.d
g.y=J.c_(q.a)
p=g.ch.length
if(p<768){g.sal(new Uint8Array(H.bM(r)))
g.Q=5121}else if(p<196608){g.sal(new Uint16Array(H.bM(r)))
g.Q=5123}else{g.sal(new Uint32Array(H.bM(r)))
g.Q=5125}J.bv(q.a,g.e)
r=g.y
p=g.cx
J.aO(q.a,34963,r)
J.cD(q.a,34963,p,35048)
G.iI(h,g)
f=G.ce(g.a,x,0,y)
f.ae(g.ch)
f.O("aNormal",g.cy.h(0,"aNormal"),3)
r=f.cy
f.O("aCurrentPosition",r.h(0,"aPosition"),3)
e=G.ce("out",x,0,y)
e.ae(r.h(0,"aPosition"))
J.aO(s.a,34962,null)
J.cB(s.a,35982,i,null)
r=e.r.h(0,"aPosition")
J.cB(s.a,35982,i,r)
z.a=0
new R.kc(z,l,new G.fZ(v,"torus-mat",!1,!0),j,f,k,s,e,u).$1(0)},
kc:{"^":"m:28;a,b,c,d,e,f,r,x,y",
$1:function(b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
H.ct(b2)
if(typeof b2!=="number")return b2.aH()
z=b2+0
this.a.a=z
y=this.b
y.go+=0.003
x=y.r1
w=x.a
if(w.u(0,0)||w.u(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.aD()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.aD()
y.id=v+w*0.01}w=y.k4
v=w.a
if(v.u(0,37))y.go+=0.03
else if(v.u(0,39))y.go-=0.03
if(v.u(0,38))y.id+=0.03
else if(v.u(0,40))y.id-=0.03
if(v.u(0,33))y.fy*=0.99
else if(v.u(0,34))y.fy*=1.01
if(v.u(0,32)){y.go=0
y.id=0}v=x.f
if(typeof v!=="number")return v.aD()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.r.d3(y.id,-1.4707963267948965,1.4707963267948965)
y.id=v
u=y.fy
t=y.go
s=u*Math.cos(v)
r=Math.cos(t)
v=Math.sin(v)
t=Math.sin(t)
q=y.d.a
q[12]=s*r
q[13]=u*v
q[14]=s*t
t=y.k2
v=t.a
q[12]=q[12]+v[0]
q[13]=q[13]+v[1]
q[14]=q[14]+v[2]
p=q[12]
o=q[13]
n=q[14]
m=new T.w(new Float32Array(3))
m.ac(0,1,0)
v=y.e
u=v.a
u[0]=q[12]
u[1]=q[13]
u[2]=q[14]
u=new Float32Array(3)
l=new T.w(u)
l.E(v)
l.aI(0,t)
l.V(0)
k=m.bm(l)
k.V(0)
j=l.bm(k)
j.V(0)
t=k.at(v)
r=j.at(v)
v=l.at(v)
i=k.a
h=i[0]
g=j.a
f=g[0]
e=u[0]
d=i[1]
c=g[1]
b=u[1]
i=i[2]
g=g[2]
u=u[2]
q[15]=1
q[14]=-v
q[13]=-r
q[12]=-t
q[11]=0
q[10]=u
q[9]=g
q[8]=i
q[7]=0
q[6]=b
q[5]=c
q[4]=d
q[3]=0
q[2]=e
q[1]=f
q[0]=h
q[12]=p
q[13]=o
q[14]=n
h=y.f
f=h.a
f[0]=q[2]
f[1]=q[6]
f[2]=q[10]
y=-y.k1
a=Math.sqrt(h.gbu())
p=f[0]/a
o=f[1]/a
n=f[2]/a
a0=Math.cos(y)
a1=Math.sin(y)
a2=1-a0
a3=p*p*a2+a0
y=n*a1
a4=p*o*a2-y
f=o*a1
a5=p*n*a2+f
a6=o*p*a2+y
a7=o*o*a2+a0
y=p*a1
a8=o*n*a2-y
a9=n*p*a2-f
b0=n*o*a2+y
b1=n*n*a2+a0
y=q[0]
f=q[4]
h=q[8]
e=q[1]
d=q[5]
c=q[9]
b=q[2]
i=q[6]
g=q[10]
u=q[3]
t=q[7]
r=q[11]
q[0]=y*a3+f*a6+h*a9
q[1]=e*a3+d*a6+c*a9
q[2]=b*a3+i*a6+g*a9
q[3]=u*a3+t*a6+r*a9
q[4]=y*a4+f*a7+h*b0
q[5]=e*a4+d*a7+c*b0
q[6]=b*a4+i*a7+g*b0
q[7]=u*a4+t*a7+r*b0
q[8]=y*a5+f*a8+h*b1
q[9]=e*a5+d*a8+c*b1
q[10]=b*a5+i*a8+g*b1
q[11]=u*a5+t*a8+r*b1
w.c.Z(0)
w.b.Z(0)
x.e=0
x.d=0
x.f=0
x.c.Z(0)
x.b.Z(0)
x=this.c
x.d.i(0,"uTime",b2/1000)
w=this.e
this.d.cd(w,H.o([this.f,x],[G.bJ]))
x=this.r
r=w.r.h(0,"aCurrentPosition")
J.aO(x.a,34962,r)
r=this.x.r.h(0,"aPosition")
J.aO(x.a,35982,r)
w=w.aL()
J.ez(x.a,35982,34962,0,0,w*3*4)
C.ad.gcW(window).bD(this,-1)
this.y.cp(z)}}},1]]
setupProgram(dart,0,0)
J.A=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d5.prototype
return J.d4.prototype}if(typeof a=="string")return J.bk.prototype
if(a==null)return J.d6.prototype
if(typeof a=="boolean")return J.fN.prototype
if(a.constructor==Array)return J.bi.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.b)return a
return J.bU(a)}
J.b9=function(a){if(typeof a=="string")return J.bk.prototype
if(a==null)return a
if(a.constructor==Array)return J.bi.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.b)return a
return J.bU(a)}
J.e1=function(a){if(a==null)return a
if(a.constructor==Array)return J.bi.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.b)return a
return J.bU(a)}
J.jW=function(a){if(typeof a=="number")return J.bj.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b1.prototype
return a}
J.jX=function(a){if(typeof a=="number")return J.bj.prototype
if(typeof a=="string")return J.bk.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b1.prototype
return a}
J.e2=function(a){if(typeof a=="string")return J.bk.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b1.prototype
return a}
J.k=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.b)return a
return J.bU(a)}
J.bT=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.b1.prototype
return a}
J.ag=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.A(a).B(a,b)}
J.a5=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.jW(a).R(a,b)}
J.bd=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.k9(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b9(a).h(a,b)}
J.cy=function(a,b){return J.e2(a).ah(a,b)}
J.bu=function(a,b){return J.k(a).cK(a,b)}
J.es=function(a,b,c){return J.k(a).cL(a,b,c)}
J.cz=function(a,b){return J.k(a).b8(a,b)}
J.et=function(a,b,c,d){return J.k(a).cT(a,b,c,d)}
J.cA=function(a,b,c){return J.k(a).ba(a,b,c)}
J.eu=function(a,b){return J.k(a).cY(a,b)}
J.aO=function(a,b,c){return J.k(a).bb(a,b,c)}
J.cB=function(a,b,c,d){return J.k(a).cZ(a,b,c,d)}
J.cC=function(a,b,c){return J.k(a).bd(a,b,c)}
J.bv=function(a,b){return J.k(a).d1(a,b)}
J.ev=function(a,b){return J.k(a).be(a,b)}
J.ew=function(a,b,c){return J.k(a).bf(a,b,c)}
J.cD=function(a,b,c,d){return J.k(a).bg(a,b,c,d)}
J.ex=function(a,b,c,d,e){return J.k(a).bh(a,b,c,d,e)}
J.ey=function(a,b){return J.jX(a).J(a,b)}
J.bZ=function(a,b,c){return J.b9(a).d4(a,b,c)}
J.ez=function(a,b,c,d,e,f){return J.k(a).d5(a,b,c,d,e,f)}
J.c_=function(a){return J.k(a).bj(a)}
J.eA=function(a){return J.k(a).bk(a)}
J.eB=function(a){return J.k(a).d9(a)}
J.eC=function(a,b){return J.k(a).bn(a,b)}
J.c0=function(a,b){return J.k(a).bo(a,b)}
J.eD=function(a,b,c,d){return J.k(a).bp(a,b,c,d)}
J.eE=function(a,b,c,d,e){return J.k(a).dc(a,b,c,d,e)}
J.eF=function(a,b,c,d,e){return J.k(a).bq(a,b,c,d,e)}
J.eG=function(a,b,c,d,e,f){return J.k(a).dd(a,b,c,d,e,f)}
J.eH=function(a,b){return J.e1(a).q(a,b)}
J.bw=function(a,b){return J.k(a).br(a,b)}
J.eI=function(a,b){return J.k(a).bs(a,b)}
J.eJ=function(a){return J.k(a).de(a)}
J.eK=function(a,b){return J.k(a).C(a,b)}
J.eL=function(a){return J.k(a).gcX(a)}
J.ah=function(a){return J.A(a).gv(a)}
J.bx=function(a){return J.e1(a).gw(a)}
J.aP=function(a){return J.b9(a).gj(a)}
J.eM=function(a){return J.k(a).gdm(a)}
J.eN=function(a){return J.k(a).gdw(a)}
J.eO=function(a){return J.bT(a).gbT(a)}
J.by=function(a){return J.bT(a).gM(a)}
J.c1=function(a){return J.bT(a).gL(a)}
J.cE=function(a){return J.bT(a).gW(a)}
J.c2=function(a,b){return J.k(a).X(a,b)}
J.eP=function(a){return J.k(a).ab(a)}
J.eQ=function(a,b){return J.k(a).ax(a,b)}
J.eR=function(a,b,c){return J.k(a).ay(a,b,c)}
J.cF=function(a,b,c){return J.k(a).aC(a,b,c)}
J.eS=function(a,b){return J.k(a).bv(a,b)}
J.cG=function(a){return J.k(a).dq(a)}
J.eT=function(a,b,c,d){return J.k(a).aG(a,b,c,d)}
J.eU=function(a){return J.e2(a).dz(a)}
J.be=function(a){return J.A(a).k(a)}
J.eV=function(a,b,c,d){return J.k(a).dB(a,b,c,d)}
J.eW=function(a,b,c){return J.k(a).bG(a,b,c)}
J.eX=function(a,b,c){return J.k(a).bH(a,b,c)}
J.c3=function(a,b,c){return J.k(a).bI(a,b,c)}
J.eY=function(a,b,c){return J.k(a).bJ(a,b,c)}
J.cH=function(a,b,c){return J.k(a).bK(a,b,c)}
J.cI=function(a,b,c){return J.k(a).bL(a,b,c)}
J.cJ=function(a,b,c){return J.k(a).bM(a,b,c)}
J.cK=function(a,b,c,d){return J.k(a).bN(a,b,c,d)}
J.cL=function(a,b,c,d){return J.k(a).bO(a,b,c,d)}
J.eZ=function(a,b){return J.k(a).bP(a,b)}
J.f_=function(a,b,c){return J.k(a).dC(a,b,c)}
J.f0=function(a,b,c,d,e,f,g){return J.k(a).bQ(a,b,c,d,e,f,g)}
J.f1=function(a,b,c,d,e){return J.k(a).bS(a,b,c,d,e)}
I.aM=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.o=W.bz.prototype
C.H=W.c6.prototype
C.w=W.fi.prototype
C.p=W.fp.prototype
C.I=W.fr.prototype
C.J=W.fF.prototype
C.q=W.fG.prototype
C.K=J.h.prototype
C.a=J.bi.prototype
C.x=J.d4.prototype
C.d=J.d5.prototype
C.L=J.d6.prototype
C.r=J.bj.prototype
C.h=J.bk.prototype
C.S=J.bl.prototype
C.i=H.h9.prototype
C.m=H.hb.prototype
C.W=W.hc.prototype
C.A=J.hl.prototype
C.B=W.hv.prototype
C.G=W.hV.prototype
C.v=J.b1.prototype
C.ac=W.aH.prototype
C.ad=W.i7.prototype
C.e=new P.j2()
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
C.T=H.o(I.aM(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.U=H.o(I.aM(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.V=H.o(I.aM([]),[P.d])
C.t=H.o(I.aM(["bind","if","ref","repeat","syntax"]),[P.d])
C.u=H.o(I.aM(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
C.X=new G.B("vec3","vertex btangents",0)
C.b=new G.B("vec3","",0)
C.Y=new G.B("vec4","delta from light",0)
C.n=new G.B("","",0)
C.C=new G.B("vec3","vertex coordinates",0)
C.Z=new G.B("vec3","vertex binormals",0)
C.D=new G.B("vec4","for wireframe",0)
C.a_=new G.B("vec4","per vertex color",0)
C.a0=new G.B("float","for normal maps",0)
C.j=new G.B("mat4","",0)
C.a2=new G.B("mat4","",4)
C.a1=new G.B("mat4","",128)
C.c=new G.B("float","",0)
C.a3=new G.B("float","",4)
C.a4=new G.B("float","depth for shadowmaps",0)
C.f=new G.B("sampler2D","",0)
C.a5=new G.B("float","for bump maps",0)
C.a6=new G.B("vec2","texture uvs",0)
C.a7=new G.B("float","time since program start in sec",0)
C.k=new G.B("vec2","",0)
C.a8=new G.B("samplerCube","",0)
C.l=new G.B("vec4","",0)
C.a9=new G.B("vec3","vertex normals",0)
C.aa=new G.B("sampler2DShadow","",0)
C.E=new G.B("vec3","per vertex color",0)
C.F=new G.B("mat3","",0)
C.ab=new G.B("vec3","vertex tangents",0)
$.a6=0
$.aQ=null
$.cO=null
$.ck=!1
$.e4=null
$.dX=null
$.e9=null
$.bR=null
$.bW=null
$.cr=null
$.aJ=null
$.b3=null
$.b4=null
$.cl=!1
$.H=C.e
$.ac=null
$.c8=null
$.cZ=null
$.cY=null
$.cV=null
$.cU=null
$.cT=null
$.cS=null
$.e0=0
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
I.$lazy(y,x,w)}})(["kw","ed",function(){return H.e3("_$dart_dartClosure")},"l9","cv",function(){return H.e3("_$dart_js")},"lV","ef",function(){return H.a9(H.bI({
toString:function(){return"$receiver$"}}))},"lW","eg",function(){return H.a9(H.bI({$method$:null,
toString:function(){return"$receiver$"}}))},"lX","eh",function(){return H.a9(H.bI(null))},"lY","ei",function(){return H.a9(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"m0","el",function(){return H.a9(H.bI(void 0))},"m1","em",function(){return H.a9(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"m_","ek",function(){return H.a9(H.dr(null))},"lZ","ej",function(){return H.a9(function(){try{null.$method$}catch(z){return z.message}}())},"m3","eo",function(){return H.a9(H.dr(void 0))},"m2","en",function(){return H.a9(function(){try{(void 0).$method$}catch(z){return z.message}}())},"md","cw",function(){return P.ia()},"mt","bc",function(){return[]},"kt","ec",function(){return{}},"mk","ep",function(){return P.cd(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"ml","cx",function(){return P.a7(P.d,P.bg)},"lI","ee",function(){return new G.dq(1281,0,4294967295)},"kp","eb",function(){return new G.dp(1281,1281,1281)},"mr","Z",function(){return P.d9(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.b,"tSpeed",C.b,"tForce",C.b,"aColor",C.E,"aColorAlpha",C.a_,"aPosition",C.C,"aTexUV",C.a6,"aNormal",C.a9,"aBinormal",C.Z,"aCenter",C.D,"aPointSize",C.c,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ab,"aBitangent",C.X,"iaRotation",C.l,"iaTranslation",C.b,"iaScale",C.c,"iaColor",C.b,"vColor",C.E,"vTexUV",C.k,"vLightWeighting",C.b,"vNormal",C.b,"vPosition",C.C,"vPositionFromLight",C.Y,"vCenter",C.D,"vDepth",C.a4,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.F,"uConvolutionMatrix",C.F,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.aa,"uTexture",C.f,"uTexture2",C.f,"uTexture3",C.f,"uTexture4",C.f,"uSpecularMap",C.f,"uNormalMap",C.f,"uBumpMap",C.f,"uDepthMap",C.f,"uCubeTexture",C.a8,"uAnimationTable",C.f,"uTime",C.a7,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.b,"uAmbientDiffuse",C.b,"uColorEmissive",C.b,"uColorSpecular",C.b,"uColorDiffuse",C.b,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.b,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a1,"uLightDescs",C.a2,"uLightCount",C.c,"uLightTypes",C.a3,"uBumpScale",C.a5,"uNormalScale",C.a0],P.d,G.B)},"mx","er",function(){var z,y
z=G.dj("FireWorksV")
y=[P.d]
z.c9(H.o(["aPosition","aCurrentPosition","aNormal"],y))
z.aJ(H.o(["vColor"],y))
z.ca(H.o(["tPosition"],y))
z.cb(H.o(["uPerspectiveViewMatrix","uModelMatrix","uTime","uPointSize"],y))
z.b=z.aP(!1,H.x(H.o(["float rand(vec2 xy){\n     return fract(sin(dot(xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n     \nvec3 NewPos(vec3 orig, vec3 last, float t) {\n    float bottom = - 2.0;\n   \n    t = mod(t, 14.0);\n    if (t < 2.0) {            // normal\n        return last;\n    } else if ( t < 6.0) {    // shrinking\n        float speed = 0.1;\n        t = t - 2.0;\n        // statistically \n        // * x just floats around orig.x\n        // * y moves down by -0.25 (middle of  [0.25, -0.75])\n        // * z just floats around orig.z\n        vec3 delta = vec3(0.5 - rand(vec2(t, last.x)),\n                          0.25 - rand(vec2(t, last.y)),\n                          0.5 - rand(vec2(t, last.z)));\n                          \n        if (last.y < bottom + 0.3) {\n           speed *= (last.y - bottom);\n        }\n        vec3 next = last + delta * speed;\n        if (next.y < bottom) next.y = bottom;\n        return next;  \n    } else if ( t < 8.0) {    // flat \n        return last;      \n    } else {\n       t = t - 8.0;\n       vec3 speed = clamp(orig - last, vec3(-1.0), vec3(1.0));\n       \n       vec3 delta = vec3(0.85 - rand(vec2(t, last.x)),\n                         1.0 + rand(vec2(t, last.y)),\n                         0.85 - rand(vec2(t, last.z)));\n    \n      \n       return last + delta * 0.05 * speed;\n    }\n}\n\nvoid main() {\n    vec3 pos = NewPos(aPosition, aCurrentPosition, uTime);\n    // new current pos for next run\n    tPosition = pos;\n\n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(pos, 1.0);\n                  \n    gl_PointSize = uPointSize / gl_Position.z;\n    vColor.r = sin(aPosition.x)/2.0+0.5;\n    vColor.g = cos(aPosition.y)/2.0+0.5;\n    vColor.b = sin(aPosition.z)/2.0+0.5;\n}\n"],y),"$isa",y,"$asa"),null)
return z},"mw","eq",function(){var z,y
z=G.dj("FireWorksF")
y=[P.d]
z.aJ(H.o(["vColor"],y))
z.b=z.aP(!0,H.x(H.o(["oFragColor.rgb = vColor;"],y),"$isa",y,"$asa"),null)
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:P.F,args:[W.Q]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.F,args:[,]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.d,args:[P.C]},{func:1,ret:P.N,args:[W.a8]},{func:1,ret:P.N,args:[P.d]},{func:1,ret:P.F,args:[W.aV]},{func:1,ret:P.N,args:[W.O,P.d,P.d,W.bo]},{func:1,args:[,P.d]},{func:1,args:[P.d]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[,],opt:[P.a1]},{func:1,ret:[P.aa,,],args:[,]},{func:1,ret:P.N,args:[W.r]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.F,args:[P.D]},{func:1,args:[W.a_]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.r,W.r]},{func:1,ret:-1,args:[W.a_]},{func:1,ret:-1,args:[P.X,T.w]},{func:1,ret:P.F,args:[W.aH]},{func:1,ret:P.C,args:[P.C,P.b]},{func:1,ret:-1,args:[P.D]},{func:1,ret:P.C,args:[,,]}]
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
if(x==y)H.ki(d||a)
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
Isolate.aM=a.aM
Isolate.b8=a.b8
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
if(typeof dartMainRunner==="function")dartMainRunner(R.e6,[])
else R.e6([])})})()
//# sourceMappingURL=pointcloud.dart.js.map
