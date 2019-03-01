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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bb=function(){}
var dart=[["","",,H,{"^":"",lD:{"^":"b;a"}}],["","",,J,{"^":"",
cB:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c0:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cA==null){H.kz()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.dG("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cE()]
if(v!=null)return v
v=H.kE(a)
if(v!=null)return v
if(typeof a=="function")return C.V
y=Object.getPrototypeOf(a)
if(y==null)return C.E
if(y===Object.prototype)return C.E
if(typeof w=="function"){Object.defineProperty(w,$.cE(),{value:C.x,enumerable:false,writable:true,configurable:true})
return C.x}return C.x},
f:{"^":"b;",
D:function(a,b){return a===b},
gA:function(a){return H.b_(a)},
k:["ct",function(a){return"Instance of '"+H.b0(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hi:{"^":"f;",
k:function(a){return String(a)},
gA:function(a){return a?519018:218159},
$isP:1},
hj:{"^":"f;",
D:function(a,b){return null==b},
k:function(a){return"null"},
gA:function(a){return 0},
$isF:1},
cj:{"^":"f;",
gA:function(a){return 0},
k:["cv",function(a){return String(a)}]},
hP:{"^":"cj;"},
b3:{"^":"cj;"},
bq:{"^":"cj;",
k:function(a){var z=a[$.eq()]
if(z==null)return this.cv(a)
return"JavaScript function for "+H.e(J.bj(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbl:1},
bn:{"^":"f;$ti",
l:function(a,b){H.B(b,H.r(a,0))
if(!!a.fixed$length)H.W(P.y("add"))
a.push(b)},
a3:function(a,b){var z
if(!!a.fixed$length)H.W(P.y("remove"))
for(z=0;z<a.length;++z)if(J.aj(a[z],b)){a.splice(z,1)
return!0}return!1},
I:function(a,b){var z,y
H.z(b,"$isl",[H.r(a,0)],"$asl")
if(!!a.fixed$length)H.W(P.y("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.N)(b),++y)a.push(b[y])},
a2:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.e(a[y]))
return z.join(b)},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
gdP:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.c(H.dc())},
bo:function(a,b){var z,y
H.m(b,{func:1,ret:P.P,args:[H.r(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.aF(a))}return!1},
co:function(a,b){if(!!a.immutable$list)H.W(P.y("sort"))
H.id(a,J.ka(),H.r(a,0))},
aj:function(a){return this.co(a,null)},
w:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aj(a[z],b))return!0
return!1},
k:function(a){return P.ch(a,"[","]")},
gC:function(a){return new J.fx(a,a.length,0,[H.r(a,0)])},
gA:function(a){return H.b_(a)},
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aA(a,b))
if(b>=a.length||b<0)throw H.c(H.aA(a,b))
return a[b]},
i:function(a,b,c){H.i(b)
H.B(c,H.r(a,0))
if(!!a.immutable$list)H.W(P.y("indexed set"))
if(b>=a.length||b<0)throw H.c(H.aA(a,b))
a[b]=c},
$isw:1,
$asw:I.bb,
$isl:1,
$isa:1,
p:{
hh:function(a,b){return J.ci(H.j(a,[b]))},
ci:function(a){H.bA(a)
a.fixed$length=Array
return a},
lB:[function(a,b){return J.eW(H.ej(a,"$isV"),H.ej(b,"$isV"))},"$2","ka",8,0,29]}},
lC:{"^":"bn;$ti"},
fx:{"^":"b;a,b,c,0d,$ti",
sbc:function(a){this.d=H.B(a,H.r(this,0))},
gB:function(a){return this.d},
u:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.N(z))
x=this.c
if(x>=y){this.sbc(null)
return!1}this.sbc(z[x]);++this.c
return!0},
$isaT:1},
bo:{"^":"f;",
L:function(a,b){var z
H.cC(b)
if(typeof b!=="number")throw H.c(H.b9(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gag(b)
if(this.gag(a)===z)return 0
if(this.gag(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gag:function(a){return a===0?1/a<0:a<0},
c1:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.y(""+a+".toInt()"))},
dw:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.c(P.y(""+a+".ceil()"))},
dz:function(a,b,c){if(this.L(b,c)>0)throw H.c(H.b9(b))
if(this.L(a,b)<0)return b
if(this.L(a,c)>0)return c
return a},
e0:function(a,b){var z
if(b>20)throw H.c(P.bM(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gag(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA:function(a){return a&0x1FFFFFFF},
a7:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
cz:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bk(a,b)},
X:function(a,b){return(a|0)===a?a/b|0:this.bk(a,b)},
bk:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.y("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
bi:function(a,b){var z
if(a>0)z=this.di(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
di:function(a,b){return b>31?0:a>>>b},
T:function(a,b){if(typeof b!=="number")throw H.c(H.b9(b))
return a>b},
$isV:1,
$asV:function(){return[P.G]},
$isah:1,
$isG:1},
de:{"^":"bo;",$isE:1},
dd:{"^":"bo;"},
bp:{"^":"f;",
an:function(a,b){if(b>=a.length)throw H.c(H.aA(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.u(b)
if(typeof b!=="string")throw H.c(P.cU(b,null,null))
return a+b},
cq:function(a,b,c){var z
if(c>a.length)throw H.c(P.bM(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cp:function(a,b){return this.cq(a,b,0)},
cs:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bN(b,null,null))
if(b>c)throw H.c(P.bN(b,null,null))
if(c>a.length)throw H.c(P.bN(c,null,null))
return a.substring(b,c)},
cr:function(a,b){return this.cs(a,b,null)},
e_:function(a){return a.toLowerCase()},
dA:function(a,b,c){if(c>a.length)throw H.c(P.bM(c,0,a.length,null,null))
return H.kM(a,b,c)},
L:function(a,b){var z
H.u(b)
if(typeof b!=="string")throw H.c(H.b9(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
k:function(a){return a},
gA:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aA(a,b))
if(b>=a.length||!1)throw H.c(H.aA(a,b))
return a[b]},
$isw:1,
$asw:I.bb,
$isV:1,
$asV:function(){return[P.d]},
$ishN:1,
$isd:1}}],["","",,H,{"^":"",
dc:function(){return new P.co("No element")},
hg:function(){return new P.co("Too many elements")},
id:function(a,b,c){H.z(a,"$isa",[c],"$asa")
H.m(b,{func:1,ret:P.E,args:[c,c]})
H.bt(a,0,J.aD(a)-1,b,c)},
bt:function(a,b,c,d,e){H.z(a,"$isa",[e],"$asa")
H.m(d,{func:1,ret:P.E,args:[e,e]})
if(c-b<=32)H.ic(a,b,c,d,e)
else H.ib(a,b,c,d,e)},
ic:function(a,b,c,d,e){var z,y,x,w,v
H.z(a,"$isa",[e],"$asa")
H.m(d,{func:1,ret:P.E,args:[e,e]})
for(z=b+1,y=J.bc(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.a7(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
ib:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.z(a,"$isa",[a2],"$asa")
H.m(a1,{func:1,ret:P.E,args:[a2,a2]})
z=C.b.X(a0-b+1,6)
y=b+z
x=a0-z
w=C.b.X(b+a0,2)
v=w-z
u=w+z
t=J.bc(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.a7(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.a7(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.a7(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.a7(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a7(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.a7(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.a7(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.a7(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a7(a1.$2(p,o),0)){n=o
o=p
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,a0))
m=b+1
l=a0-1
if(J.aj(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a6()
if(i<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.T()
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
if(typeof e!=="number")return e.a6()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.T()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.T()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a6()
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
H.bt(a,b,m-2,a1,a2)
H.bt(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aj(a1.$2(t.h(a,m),r),0);)++m
for(;J.aj(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a6()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.bt(a,m,l,a1,a2)}else H.bt(a,m,l,a1,a2)},
d4:{"^":"l;"},
bL:{"^":"d4;$ti",
gC:function(a){return new H.di(this,this.gj(this),0,[H.cz(this,"bL",0)])},
aF:function(a,b){return this.cu(0,H.m(b,{func:1,ret:P.P,args:[H.cz(this,"bL",0)]}))}},
di:{"^":"b;a,b,c,0d,$ti",
sb3:function(a){this.d=H.B(a,H.r(this,0))},
gB:function(a){return this.d},
u:function(){var z,y,x,w
z=this.a
y=J.bc(z)
x=y.gj(z)
if(this.b!==x)throw H.c(P.aF(z))
w=this.c
if(w>=x){this.sb3(null)
return!1}this.sb3(y.t(z,w));++this.c
return!0},
$isaT:1},
hu:{"^":"bL;a,b,$ti",
gj:function(a){return J.aD(this.a)},
t:function(a,b){return this.b.$1(J.f4(this.a,b))},
$asbL:function(a,b){return[b]},
$asl:function(a,b){return[b]}},
dH:{"^":"l;a,b,$ti",
gC:function(a){return new H.iA(J.aO(this.a),this.b,this.$ti)}},
iA:{"^":"aT;a,b,$ti",
u:function(){var z,y
for(z=this.a,y=this.b;z.u();)if(y.$1(z.gB(z)))return!0
return!1},
gB:function(a){var z=this.a
return z.gB(z)}},
bK:{"^":"b;$ti"}}],["","",,H,{"^":"",
aC:function(a){var z,y
z=H.u(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kr:function(a){return init.types[H.i(a)]},
kC:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.C(a).$isx},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bj(a)
if(typeof z!=="string")throw H.c(H.b9(a))
return z},
b_:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b0:function(a){return H.hQ(a)+H.bT(H.ai(a),0,null)},
hQ:function(a){var z,y,x,w,v,u,t,s,r
z=J.C(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.O||!!z.$isb3){u=C.C(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aC(w.length>1&&C.i.an(w,0)===36?C.i.cr(w,1):w)},
aG:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hX:function(a){var z=H.aG(a).getFullYear()+0
return z},
hV:function(a){var z=H.aG(a).getMonth()+1
return z},
hR:function(a){var z=H.aG(a).getDate()+0
return z},
hS:function(a){var z=H.aG(a).getHours()+0
return z},
hU:function(a){var z=H.aG(a).getMinutes()+0
return z},
hW:function(a){var z=H.aG(a).getSeconds()+0
return z},
hT:function(a){var z=H.aG(a).getMilliseconds()+0
return z},
bz:function(a){throw H.c(H.b9(a))},
n:function(a,b){if(a==null)J.aD(a)
throw H.c(H.aA(a,b))},
aA:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aE(!0,b,"index",null)
z=H.i(J.aD(a))
if(!(b<0)){if(typeof z!=="number")return H.bz(z)
y=b>=z}else y=!0
if(y)return P.H(b,a,"index",null,z)
return P.bN(b,"index",null)},
b9:function(a){return new P.aE(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.dr()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.em})
z.name=""}else z.toString=H.em
return z},
em:function(){return J.bj(this.dartException)},
W:function(a){throw H.c(a)},
N:function(a){throw H.c(P.aF(a))},
a5:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kO(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.bi(x,16)&8191)===10)switch(w){case 438:return z.$1(H.ck(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dq(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.es()
u=$.et()
t=$.eu()
s=$.ev()
r=$.ey()
q=$.ez()
p=$.ex()
$.ew()
o=$.eB()
n=$.eA()
m=v.J(y)
if(m!=null)return z.$1(H.ck(H.u(y),m))
else{m=u.J(y)
if(m!=null){m.method="call"
return z.$1(H.ck(H.u(y),m))}else{m=t.J(y)
if(m==null){m=s.J(y)
if(m==null){m=r.J(y)
if(m==null){m=q.J(y)
if(m==null){m=p.J(y)
if(m==null){m=s.J(y)
if(m==null){m=o.J(y)
if(m==null){m=n.J(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dq(H.u(y),m))}}return z.$1(new H.iw(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dw()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aE(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dw()
return a},
be:function(a){var z
if(a==null)return new H.dX(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dX(a)},
kn:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
kB:function(a,b,c,d,e,f){H.h(a,"$isbl")
switch(H.i(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.d8("Unsupported number of arguments for wrapped closure"))},
ba:function(a,b){var z
H.i(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kB)
a.$identity=z
return z},
fI:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.C(d).$isa){z.$reflectionInfo=d
x=H.i0(z).r}else x=d
w=e?Object.create(new H.ie().constructor.prototype):Object.create(new H.cb(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a8
if(typeof u!=="number")return u.G()
$.a8=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.cZ(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kr,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cX:H.cc
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
fF:function(a,b,c,d){var z=H.cc
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cZ:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fH(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fF(y,!w,z,b)
if(y===0){w=$.a8
if(typeof w!=="number")return w.G()
$.a8=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aP
if(v==null){v=H.bH("self")
$.aP=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a8
if(typeof w!=="number")return w.G()
$.a8=w+1
t+=w
w="return function("+t+"){return this."
v=$.aP
if(v==null){v=H.bH("self")
$.aP=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fG:function(a,b,c,d){var z,y
z=H.cc
y=H.cX
switch(b?-1:a){case 0:throw H.c(H.i6("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fH:function(a,b){var z,y,x,w,v,u,t,s
z=$.aP
if(z==null){z=H.bH("self")
$.aP=z}y=$.cW
if(y==null){y=H.bH("receiver")
$.cW=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fG(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.a8
if(typeof y!=="number")return y.G()
$.a8=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.a8
if(typeof y!=="number")return y.G()
$.a8=y+1
return new Function(z+y+"}")()},
cx:function(a,b,c,d,e,f,g){return H.fI(a,b,H.i(c),d,!!e,!!f,g)},
u:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a3(a,"String"))},
eb:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a3(a,"double"))},
cC:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a3(a,"num"))},
bW:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a3(a,"bool"))},
i:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a3(a,"int"))},
cD:function(a,b){throw H.c(H.a3(a,H.aC(H.u(b).substring(3))))},
kK:function(a,b){throw H.c(H.cY(a,H.aC(H.u(b).substring(3))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.C(a)[b])return a
H.cD(a,b)},
ad:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.C(a)[b]
else z=!0
if(z)return a
H.kK(a,b)},
ej:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.C(a)[b])return a
H.cD(a,b)},
bA:function(a){if(a==null)return a
if(!!J.C(a).$isa)return a
throw H.c(H.a3(a,"List<dynamic>"))},
kD:function(a,b){var z
if(a==null)return a
z=J.C(a)
if(!!z.$isa)return a
if(z[b])return a
H.cD(a,b)},
cy:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.i(z)]
else return a.$S()}return},
bx:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cy(J.C(a))
if(z==null)return!1
return H.e2(z,null,b,null)},
m:function(a,b){var z,y
if(a==null)return a
if($.ct)return a
$.ct=!0
try{if(H.bx(a,b))return a
z=H.bB(b)
y=H.a3(a,z)
throw H.c(y)}finally{$.ct=!1}},
bY:function(a,b){if(a!=null&&!H.cw(a,b))H.W(H.a3(a,H.bB(b)))
return a},
e6:function(a){var z,y
z=J.C(a)
if(!!z.$iso){y=H.cy(z)
if(y!=null)return H.bB(y)
return"Closure"}return H.b0(a)},
kN:function(a){throw H.c(new P.fP(H.u(a)))},
ef:function(a){return init.getIsolateTag(a)},
j:function(a,b){a.$ti=b
return a},
ai:function(a){if(a==null)return
return a.$ti},
n0:function(a,b,c){return H.aN(a["$as"+H.e(c)],H.ai(b))},
bd:function(a,b,c,d){var z
H.u(c)
H.i(d)
z=H.aN(a["$as"+H.e(c)],H.ai(b))
return z==null?null:z[d]},
cz:function(a,b,c){var z
H.u(b)
H.i(c)
z=H.aN(a["$as"+H.e(b)],H.ai(a))
return z==null?null:z[c]},
r:function(a,b){var z
H.i(b)
z=H.ai(a)
return z==null?null:z[b]},
bB:function(a){return H.az(a,null)},
az:function(a,b){var z,y
H.z(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aC(a[0].builtin$cls)+H.bT(a,1,b)
if(typeof a=="function")return H.aC(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.i(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.n(b,y)
return H.e(b[y])}if('func' in a)return H.k9(a,b)
if('futureOr' in a)return"FutureOr<"+H.az("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
k9:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
H.z(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.j([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.n(b,r)
t=C.i.G(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.az(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.az(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.az(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.az(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.km(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.u(z[l])
n=n+m+H.az(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bT:function(a,b,c){var z,y,x,w,v,u
H.z(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.cq("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.az(u,c)}return"<"+z.k(0)+">"},
kq:function(a){var z,y,x,w
z=J.C(a)
if(!!z.$iso){y=H.cy(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ai(a)
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
H.u(b)
H.bA(c)
H.u(d)
if(a==null)return!1
z=H.ai(a)
y=J.C(a)
if(y[b]==null)return!1
return H.e9(H.aN(y[d],z),null,c,null)},
bC:function(a,b,c,d){H.u(b)
H.bA(c)
H.u(d)
if(a==null)return a
if(H.aL(a,b,c,d))return a
throw H.c(H.cY(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aC(b.substring(3))+H.bT(c,0,null),init.mangledGlobalNames)))},
z:function(a,b,c,d){H.u(b)
H.bA(c)
H.u(d)
if(a==null)return a
if(H.aL(a,b,c,d))return a
throw H.c(H.a3(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aC(b.substring(3))+H.bT(c,0,null),init.mangledGlobalNames)))},
e9:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.Z(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.Z(a[y],b,c[y],d))return!1
return!0},
mZ:function(a,b,c){return a.apply(b,H.aN(J.C(b)["$as"+H.e(c)],H.ai(b)))},
eh:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="F"||a===-1||a===-2||H.eh(z)}return!1},
cw:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="F"||b===-1||b===-2||H.eh(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cw(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bx(a,b)}z=J.C(a).constructor
y=H.ai(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.Z(z,null,b,null)},
B:function(a,b){if(a!=null&&!H.cw(a,b))throw H.c(H.a3(a,H.bB(b)))
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
if('func' in c)return H.e2(a,b,c,d)
if('func' in a)return c.builtin$cls==="bl"
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
return H.e9(H.aN(r,z),b,u,d)},
e2:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.kJ(m,b,l,d)},
kJ:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.Z(c[w],d,a[w],b))return!1}return!0},
n_:function(a,b,c){Object.defineProperty(a,H.u(b),{value:c,enumerable:false,writable:true,configurable:true})},
kE:function(a){var z,y,x,w,v,u
z=H.u($.eg.$1(a))
y=$.bX[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c1[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.u($.e8.$2(a,z))
if(z!=null){y=$.bX[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c1[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c2(x)
$.bX[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c1[z]=x
return x}if(v==="-"){u=H.c2(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.ek(a,x)
if(v==="*")throw H.c(P.dG(z))
if(init.leafTags[z]===true){u=H.c2(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ek(a,x)},
ek:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cB(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c2:function(a){return J.cB(a,!1,null,!!a.$isx)},
kI:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c2(z)
else return J.cB(z,c,null,null)},
kz:function(){if(!0===$.cA)return
$.cA=!0
H.kA()},
kA:function(){var z,y,x,w,v,u,t,s
$.bX=Object.create(null)
$.c1=Object.create(null)
H.kv()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.el.$1(v)
if(u!=null){t=H.kI(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kv:function(){var z,y,x,w,v,u,t
z=C.S()
z=H.aK(C.P,H.aK(C.U,H.aK(C.B,H.aK(C.B,H.aK(C.T,H.aK(C.Q,H.aK(C.R(C.C),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eg=new H.kw(v)
$.e8=new H.kx(u)
$.el=new H.ky(t)},
aK:function(a,b){return a(b)||b},
kM:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
i_:{"^":"b;a,b,c,d,e,f,r,0x",p:{
i0:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.ci(z)
y=z[0]
x=z[1]
return new H.i_(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ir:{"^":"b;a,b,c,d,e,f",
J:function(a){var z,y,x
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
aa:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.j([],[P.d])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ir(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bP:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dD:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hL:{"^":"O;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dq:function(a,b){return new H.hL(a,b==null?null:b.method)}}},
hk:{"^":"O;a,b,c",
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
return new H.hk(a,y,z?null:b.receiver)}}},
iw:{"^":"O;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kO:{"^":"o:5;a",
$1:function(a){if(!!J.C(a).$isO)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dX:{"^":"b;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa2:1},
o:{"^":"b;",
k:function(a){return"Closure '"+H.b0(this).trim()+"'"},
gcg:function(){return this},
$isbl:1,
gcg:function(){return this}},
dy:{"^":"o;"},
ie:{"^":"dy;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aC(z)+"'"}},
cb:{"^":"dy;a,b,c,d",
D:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cb))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gA:function(a){var z,y
z=this.c
if(z==null)y=H.b_(this.a)
else y=typeof z!=="object"?J.ak(z):H.b_(z)
return(y^H.b_(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.b0(z)+"'")},
p:{
cc:function(a){return a.a},
cX:function(a){return a.c},
bH:function(a){var z,y,x,w,v
z=new H.cb("self","target","receiver","name")
y=J.ci(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
is:{"^":"O;a",
k:function(a){return this.a},
p:{
a3:function(a,b){return new H.is("TypeError: "+P.bJ(a)+": type '"+H.e6(a)+"' is not a subtype of type '"+b+"'")}}},
fD:{"^":"O;a",
k:function(a){return this.a},
p:{
cY:function(a,b){return new H.fD("CastError: "+P.bJ(a)+": type '"+H.e6(a)+"' is not a subtype of type '"+b+"'")}}},
i5:{"^":"O;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
i6:function(a){return new H.i5(a)}}},
dE:{"^":"b;a,0b,0c,0d",
gad:function(){var z=this.b
if(z==null){z=H.bB(this.a)
this.b=z}return z},
k:function(a){return this.gad()},
gA:function(a){var z=this.d
if(z==null){z=C.i.gA(this.gad())
this.d=z}return z},
D:function(a,b){if(b==null)return!1
return b instanceof H.dE&&this.gad()===b.gad()}},
df:{"^":"dj;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gF:function(a){return new H.aW(this,[H.r(this,0)])},
af:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.d_(z,b)}else{y=this.dN(b)
return y}},
dN:function(a){var z=this.d
if(z==null)return!1
return this.aB(this.at(z,J.ak(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ab(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ab(w,b)
x=y==null?null:y.b
return x}else return this.dO(b)},
dO:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.at(z,J.ak(a)&0x3ffffff)
x=this.aB(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.B(b,H.r(this,0))
H.B(c,H.r(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.av()
this.b=z}this.b4(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.av()
this.c=y}this.b4(y,b,c)}else{x=this.d
if(x==null){x=this.av()
this.d=x}w=J.ak(b)&0x3ffffff
v=this.at(x,w)
if(v==null)this.ay(x,w,[this.al(b,c)])
else{u=this.aB(v,b)
if(u>=0)v[u].b=c
else v.push(this.al(b,c))}}},
E:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aF(this))
z=z.c}},
b4:function(a,b,c){var z
H.B(b,H.r(this,0))
H.B(c,H.r(this,1))
z=this.ab(a,b)
if(z==null)this.ay(a,b,this.al(b,c))
else z.b=c},
b6:function(){this.r=this.r+1&67108863},
al:function(a,b){var z,y
z=new H.hp(H.B(a,H.r(this,0)),H.B(b,H.r(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b6()
return z},
aB:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aj(a[y].a,b))return y
return-1},
k:function(a){return P.dk(this)},
ab:function(a,b){return a[b]},
at:function(a,b){return a[b]},
ay:function(a,b,c){a[b]=c},
d0:function(a,b){delete a[b]},
d_:function(a,b){return this.ab(a,b)!=null},
av:function(){var z=Object.create(null)
this.ay(z,"<non-identifier-key>",z)
this.d0(z,"<non-identifier-key>")
return z},
$isdg:1},
hp:{"^":"b;a,b,0c,0d"},
aW:{"^":"d4;a,$ti",
gj:function(a){return this.a.a},
gC:function(a){var z,y
z=this.a
y=new H.hq(z,z.r,this.$ti)
y.c=z.e
return y}},
hq:{"^":"b;a,b,0c,0d,$ti",
sb5:function(a){this.d=H.B(a,H.r(this,0))},
gB:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aF(z))
else{z=this.c
if(z==null){this.sb5(null)
return!1}else{this.sb5(z.a)
this.c=this.c.c
return!0}}},
$isaT:1},
kw:{"^":"o:5;a",
$1:function(a){return this.a(a)}},
kx:{"^":"o:14;a",
$2:function(a,b){return this.a(a,b)}},
ky:{"^":"o:15;a",
$1:function(a){return this.a(H.u(a))}}}],["","",,H,{"^":"",
km:function(a){return J.hh(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
c3:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bS:function(a){var z,y
if(!!J.C(a).$isw)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.i(z,y,a[y])
return z},
ac:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.aA(b,a))},
hG:{"^":"f;",$isit:1,"%":"DataView;ArrayBufferView;cm|dR|dS|dn|dT|dU|ap"},
cm:{"^":"hG;",
gj:function(a){return a.length},
$isw:1,
$asw:I.bb,
$isx:1,
$asx:I.bb},
dn:{"^":"dS;",
h:function(a,b){H.i(b)
H.ac(b,a,a.length)
return a[b]},
i:function(a,b,c){H.i(b)
H.eb(c)
H.ac(b,a,a.length)
a[b]=c},
$asbK:function(){return[P.ah]},
$asq:function(){return[P.ah]},
$isl:1,
$asl:function(){return[P.ah]},
$isa:1,
$asa:function(){return[P.ah]},
"%":"Float64Array"},
ap:{"^":"dU;",
i:function(a,b,c){H.i(b)
H.i(c)
H.ac(b,a,a.length)
a[b]=c},
$asbK:function(){return[P.E]},
$asq:function(){return[P.E]},
$isl:1,
$asl:function(){return[P.E]},
$isa:1,
$asa:function(){return[P.E]}},
hF:{"^":"dn;",$isaf:1,"%":"Float32Array"},
lL:{"^":"ap;",
h:function(a,b){H.i(b)
H.ac(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lM:{"^":"ap;",
h:function(a,b){H.i(b)
H.ac(b,a,a.length)
return a[b]},
$ishe:1,
"%":"Int32Array"},
lN:{"^":"ap;",
h:function(a,b){H.i(b)
H.ac(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lO:{"^":"ap;",
h:function(a,b){H.i(b)
H.ac(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hH:{"^":"ap;",
h:function(a,b){H.i(b)
H.ac(b,a,a.length)
return a[b]},
$ismx:1,
"%":"Uint32Array"},
lP:{"^":"ap;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
H.ac(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lQ:{"^":"ap;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
H.ac(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dR:{"^":"cm+q;"},
dS:{"^":"dR+bK;"},
dT:{"^":"cm+q;"},
dU:{"^":"dT+bK;"}}],["","",,P,{"^":"",
iE:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kh()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.ba(new P.iG(z),1)).observe(y,{childList:true})
return new P.iF(z,y,x)}else if(self.setImmediate!=null)return P.ki()
return P.kj()},
mI:[function(a){self.scheduleImmediate(H.ba(new P.iH(H.m(a,{func:1,ret:-1})),0))},"$1","kh",4,0,4],
mJ:[function(a){self.setImmediate(H.ba(new P.iI(H.m(a,{func:1,ret:-1})),0))},"$1","ki",4,0,4],
mK:[function(a){H.m(a,{func:1,ret:-1})
P.jS(0,a)},"$1","kj",4,0,4],
kd:function(a,b){if(H.bx(a,{func:1,args:[P.b,P.a2]}))return H.m(a,{func:1,ret:null,args:[P.b,P.a2]})
if(H.bx(a,{func:1,args:[P.b]}))return H.m(a,{func:1,ret:null,args:[P.b]})
throw H.c(P.cU(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kc:function(){var z,y
for(;z=$.aJ,z!=null;){$.b8=null
y=z.b
$.aJ=y
if(y==null)$.b7=null
z.a.$0()}},
mX:[function(){$.cu=!0
try{P.kc()}finally{$.b8=null
$.cu=!1
if($.aJ!=null)$.cF().$1(P.ea())}},"$0","ea",0,0,1],
e5:function(a){var z=new P.dJ(H.m(a,{func:1,ret:-1}))
if($.aJ==null){$.b7=z
$.aJ=z
if(!$.cu)$.cF().$1(P.ea())}else{$.b7.b=z
$.b7=z}},
kg:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
z=$.aJ
if(z==null){P.e5(a)
$.b8=$.b7
return}y=new P.dJ(a)
x=$.b8
if(x==null){y.b=z
$.b8=y
$.aJ=y}else{y.b=x.b
x.b=y
$.b8=y
if(y.b==null)$.b7=y}},
kL:function(a){var z,y
z={func:1,ret:-1}
H.m(a,z)
y=$.J
if(C.f===y){P.bV(null,null,C.f,a)
return}y.toString
P.bV(null,null,y,H.m(y.br(a),z))},
bU:function(a,b,c,d,e){var z={}
z.a=d
P.kg(new P.ke(z,e))},
e3:function(a,b,c,d,e){var z,y
H.m(d,{func:1,ret:e})
y=$.J
if(y===c)return d.$0()
$.J=c
z=y
try{y=d.$0()
return y}finally{$.J=z}},
e4:function(a,b,c,d,e,f,g){var z,y
H.m(d,{func:1,ret:f,args:[g]})
H.B(e,g)
y=$.J
if(y===c)return d.$1(e)
$.J=c
z=y
try{y=d.$1(e)
return y}finally{$.J=z}},
kf:function(a,b,c,d,e,f,g,h,i){var z,y
H.m(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
y=$.J
if(y===c)return d.$2(e,f)
$.J=c
z=y
try{y=d.$2(e,f)
return y}finally{$.J=z}},
bV:function(a,b,c,d){var z
H.m(d,{func:1,ret:-1})
z=C.f!==c
if(z)d=!(!z||!1)?c.br(d):c.dt(d,-1)
P.e5(d)},
iG:{"^":"o:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iF:{"^":"o:16;a,b,c",
$1:function(a){var z,y
this.a.a=H.m(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iH:{"^":"o:0;a",
$0:function(){this.a.$0()}},
iI:{"^":"o:0;a",
$0:function(){this.a.$0()}},
jR:{"^":"b;a,0b,c",
cW:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.ba(new P.jT(this,b),0),a)
else throw H.c(P.y("`setTimeout()` not found."))},
p:{
jS:function(a,b){var z=new P.jR(!0,0)
z.cW(a,b)
return z}}},
jT:{"^":"o:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
iL:{"^":"b;$ti"},
jM:{"^":"iL;a,$ti"},
aI:{"^":"b;0a,b,c,d,e,$ti",
dQ:function(a){if(this.c!==6)return!0
return this.b.b.aD(H.m(this.d,{func:1,ret:P.P,args:[P.b]}),a.a,P.P,P.b)},
dM:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.r(this,1)}
w=this.b.b
if(H.bx(z,{func:1,args:[P.b,P.a2]}))return H.bY(w.dW(z,a.a,a.b,null,y,P.a2),x)
else return H.bY(w.aD(H.m(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
ab:{"^":"b;bj:a<,b,0de:c<,$ti",
c0:function(a,b,c){var z,y,x,w
z=H.r(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.J
if(y!==C.f){y.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kd(b,y)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.ab(0,$.J,[c])
w=b==null?1:3
this.b8(new P.aI(x,w,a,b,[z,c]))
return x},
c_:function(a,b){return this.c0(a,null,b)},
b8:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isaI")
this.c=a}else{if(z===2){y=H.h(this.c,"$isab")
z=y.a
if(z<4){y.b8(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bV(null,null,z,H.m(new P.j_(this,a),{func:1,ret:-1}))}},
bg:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isaI")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isab")
y=u.a
if(y<4){u.bg(a)
return}this.a=y
this.c=u.c}z.a=this.ac(a)
y=this.b
y.toString
P.bV(null,null,y,H.m(new P.j4(z,this),{func:1,ret:-1}))}},
ax:function(){var z=H.h(this.c,"$isaI")
this.c=null
return this.ac(z)},
ac:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
ao:function(a){var z,y,x
z=H.r(this,0)
H.bY(a,{futureOr:1,type:z})
y=this.$ti
if(H.aL(a,"$isaS",y,"$asaS"))if(H.aL(a,"$isab",y,null))P.dM(a,this)
else P.j0(a,this)
else{x=this.ax()
H.B(a,z)
this.a=4
this.c=a
P.b6(this,x)}},
ba:function(a,b){var z
H.h(b,"$isa2")
z=this.ax()
this.a=8
this.c=new P.X(a,b)
P.b6(this,z)},
$isaS:1,
p:{
j0:function(a,b){var z,y,x
b.a=1
try{a.c0(new P.j1(b),new P.j2(b),null)}catch(x){z=H.a5(x)
y=H.be(x)
P.kL(new P.j3(b,z,y))}},
dM:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isab")
if(z>=4){y=b.ax()
b.a=a.a
b.c=a.c
P.b6(b,y)}else{y=H.h(b.c,"$isaI")
b.a=2
b.c=a
a.bg(y)}},
b6:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isX")
y=y.b
u=v.a
t=v.b
y.toString
P.bU(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.b6(z.a,b)}y=z.a
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
if(p){H.h(r,"$isX")
y=y.b
u=r.a
t=r.b
y.toString
P.bU(null,null,y,u,t)
return}o=$.J
if(o!=q)$.J=q
else o=null
y=b.c
if(y===8)new P.j7(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.j6(x,b,r).$0()}else if((y&2)!==0)new P.j5(z,x,b).$0()
if(o!=null)$.J=o
y=x.b
if(!!J.C(y).$isaS){if(y.a>=4){n=H.h(t.c,"$isaI")
t.c=null
b=t.ac(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dM(y,t)
return}}m=b.b
n=H.h(m.c,"$isaI")
m.c=null
b=m.ac(n)
y=x.a
u=x.b
if(!y){H.B(u,H.r(m,0))
m.a=4
m.c=u}else{H.h(u,"$isX")
m.a=8
m.c=u}z.a=m
y=m}}}},
j_:{"^":"o:0;a,b",
$0:function(){P.b6(this.a,this.b)}},
j4:{"^":"o:0;a,b",
$0:function(){P.b6(this.b,this.a.a)}},
j1:{"^":"o:6;a",
$1:function(a){var z=this.a
z.a=0
z.ao(a)}},
j2:{"^":"o:17;a",
$2:function(a,b){H.h(b,"$isa2")
this.a.ba(a,b)},
$1:function(a){return this.$2(a,null)}},
j3:{"^":"o:0;a,b,c",
$0:function(){this.a.ba(this.b,this.c)}},
j7:{"^":"o:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bX(H.m(w.d,{func:1}),null)}catch(v){y=H.a5(v)
x=H.be(v)
if(this.d){w=H.h(this.a.a.c,"$isX").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isX")
else u.b=new P.X(y,x)
u.a=!0
return}if(!!J.C(z).$isaS){if(z instanceof P.ab&&z.gbj()>=4){if(z.gbj()===8){w=this.b
w.b=H.h(z.gde(),"$isX")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.c_(new P.j8(t),null)
w.a=!1}}},
j8:{"^":"o:18;a",
$1:function(a){return this.a}},
j6:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.r(x,0)
v=H.B(this.c,w)
u=H.r(x,1)
this.a.b=x.b.b.aD(H.m(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a5(t)
y=H.be(t)
x=this.a
x.b=new P.X(z,y)
x.a=!0}}},
j5:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isX")
w=this.c
if(w.dQ(z)&&w.e!=null){v=this.b
v.b=w.dM(z)
v.a=!1}}catch(u){y=H.a5(u)
x=H.be(u)
w=H.h(this.a.a.c,"$isX")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.X(y,x)
s.a=!0}}},
dJ:{"^":"b;a,0b"},
ij:{"^":"b;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.ab(0,$.J,[P.E])
z.a=0
x=H.r(this,0)
w=H.m(new P.il(z,this),{func:1,ret:-1,args:[x]})
H.m(new P.im(z,y),{func:1,ret:-1})
W.ag(this.a,this.b,w,!1,x)
return y}},
il:{"^":"o;a,b",
$1:function(a){H.B(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.r(this.b,0)]}}},
im:{"^":"o:0;a,b",
$0:function(){this.b.ao(this.a.a)}},
ik:{"^":"b;"},
X:{"^":"b;a,b",
k:function(a){return H.e(this.a)},
$isO:1},
jZ:{"^":"b;",$ismG:1},
ke:{"^":"o:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dr()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.k(0)
throw x}},
jv:{"^":"jZ;",
dX:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
try{if(C.f===$.J){a.$0()
return}P.e3(null,null,this,a,-1)}catch(x){z=H.a5(x)
y=H.be(x)
P.bU(null,null,this,z,H.h(y,"$isa2"))}},
dY:function(a,b,c){var z,y,x
H.m(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.f===$.J){a.$1(b)
return}P.e4(null,null,this,a,b,-1,c)}catch(x){z=H.a5(x)
y=H.be(x)
P.bU(null,null,this,z,H.h(y,"$isa2"))}},
dt:function(a,b){return new P.jx(this,H.m(a,{func:1,ret:b}),b)},
br:function(a){return new P.jw(this,H.m(a,{func:1,ret:-1}))},
du:function(a,b){return new P.jy(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
bX:function(a,b){H.m(a,{func:1,ret:b})
if($.J===C.f)return a.$0()
return P.e3(null,null,this,a,b)},
aD:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.J===C.f)return a.$1(b)
return P.e4(null,null,this,a,b,c,d)},
dW:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.J===C.f)return a.$2(b,c)
return P.kf(null,null,this,a,b,c,d,e,f)}},
jx:{"^":"o;a,b,c",
$0:function(){return this.a.bX(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jw:{"^":"o:1;a,b",
$0:function(){return this.a.dX(this.b)}},
jy:{"^":"o;a,b,c",
$1:function(a){var z=this.c
return this.a.dY(this.b,H.B(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dh:function(a,b,c){H.bA(a)
return H.z(H.kn(a,new H.df(0,0,[b,c])),"$isdg",[b,c],"$asdg")},
Y:function(a,b){return new H.df(0,0,[a,b])},
a0:function(a,b,c,d){return new P.jg(0,0,[d])},
hf:function(a,b,c){var z,y
if(P.cv(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.j([],[P.d])
y=$.bf()
C.a.l(y,a)
try{P.kb(a,z)}finally{if(0>=y.length)return H.n(y,-1)
y.pop()}y=P.dx(b,H.kD(z,"$isl"),", ")+c
return y.charCodeAt(0)==0?y:y},
ch:function(a,b,c){var z,y,x
if(P.cv(a))return b+"..."+c
z=new P.cq(b)
y=$.bf()
C.a.l(y,a)
try{x=z
x.a=P.dx(x.gW(),a,", ")}finally{if(0>=y.length)return H.n(y,-1)
y.pop()}y=z
y.a=y.gW()+c
y=z.gW()
return y.charCodeAt(0)==0?y:y},
cv:function(a){var z,y
for(z=0;y=$.bf(),z<y.length;++z)if(a===y[z])return!0
return!1},
kb:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.z(b,"$isa",[P.d],"$asa")
z=a.gC(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.u())return
w=H.e(z.gB(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.u()){if(x<=5)return
if(0>=b.length)return H.n(b,-1)
v=b.pop()
if(0>=b.length)return H.n(b,-1)
u=b.pop()}else{t=z.gB(z);++x
if(!z.u()){if(x<=4){C.a.l(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.n(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gB(z);++x
for(;z.u();t=s,s=r){r=z.gB(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.n(b,-1)
y-=b.pop().length+2;--x}C.a.l(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.n(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.l(b,q)
C.a.l(b,u)
C.a.l(b,v)},
cl:function(a,b){var z,y,x
z=P.a0(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.N)(a),++x)z.l(0,H.B(a[x],b))
return z},
dk:function(a){var z,y,x
z={}
if(P.cv(a))return"{...}"
y=new P.cq("")
try{C.a.l($.bf(),a)
x=y
x.a=x.gW()+"{"
z.a=!0
J.f7(a,new P.ht(z,y))
z=y
z.a=z.gW()+"}"}finally{z=$.bf()
if(0>=z.length)return H.n(z,-1)
z.pop()}z=y.gW()
return z.charCodeAt(0)==0?z:z},
jg:{"^":"ja;a,0b,0c,0d,0e,0f,r,$ti",
gC:function(a){var z=new P.dQ(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
w:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.h(z[b],"$isbw")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.h(y[b],"$isbw")!=null}else return this.cZ(b)},
cZ:function(a){var z=this.d
if(z==null)return!1
return this.as(this.bd(z,a),a)>=0},
l:function(a,b){var z,y
H.B(b,H.r(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cs()
this.b=z}return this.b7(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cs()
this.c=y}return this.b7(y,b)}else return this.cX(0,b)},
cX:function(a,b){var z,y,x
H.B(b,H.r(this,0))
z=this.d
if(z==null){z=P.cs()
this.d=z}y=this.bb(b)
x=z[y]
if(x==null)z[y]=[this.aw(b)]
else{if(this.as(x,b)>=0)return!1
x.push(this.aw(b))}return!0},
a3:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bh(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bh(this.c,b)
else return this.d8(0,b)},
d8:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bd(z,b)
x=this.as(y,b)
if(x<0)return!1
this.bl(y.splice(x,1)[0])
return!0},
a1:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.au()}},
b7:function(a,b){H.B(b,H.r(this,0))
if(H.h(a[b],"$isbw")!=null)return!1
a[b]=this.aw(b)
return!0},
bh:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isbw")
if(z==null)return!1
this.bl(z)
delete a[b]
return!0},
au:function(){this.r=this.r+1&67108863},
aw:function(a){var z,y
z=new P.bw(H.B(a,H.r(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.au()
return z},
bl:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.au()},
bb:function(a){return J.ak(a)&0x3ffffff},
bd:function(a,b){return a[this.bb(b)]},
as:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aj(a[y].a,b))return y
return-1},
p:{
cs:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bw:{"^":"b;a,0b,0c"},
dQ:{"^":"b;a,b,0c,0d,$ti",
sb9:function(a){this.d=H.B(a,H.r(this,0))},
gB:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aF(z))
else{z=this.c
if(z==null){this.sb9(null)
return!1}else{this.sb9(H.B(z.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
$isaT:1,
p:{
jh:function(a,b,c){var z=new P.dQ(a,b,[c])
z.c=a.e
return z}}},
ja:{"^":"i7;"},
hr:{"^":"ji;",$isl:1,$isa:1},
q:{"^":"b;$ti",
gC:function(a){return new H.di(a,this.gj(a),0,[H.bd(this,a,"q",0)])},
t:function(a,b){return this.h(a,b)},
dL:function(a,b,c,d){var z,y,x
H.B(b,d)
H.m(c,{func:1,ret:d,args:[d,H.bd(this,a,"q",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.c(P.aF(a))}return y},
k:function(a){return P.ch(a,"[","]")}},
dj:{"^":"S;"},
ht:{"^":"o:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
S:{"^":"b;$ti",
E:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.bd(this,a,"S",0),H.bd(this,a,"S",1)]})
for(z=J.aO(this.gF(a));z.u();){y=z.gB(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.aD(this.gF(a))},
k:function(a){return P.dk(a)},
$isK:1},
i8:{"^":"b;$ti",
I:function(a,b){var z
for(z=J.aO(H.z(b,"$isl",this.$ti,"$asl"));z.u();)this.l(0,z.gB(z))},
k:function(a){return P.ch(this,"{","}")},
$isl:1,
$ism6:1},
i7:{"^":"i8;"},
ji:{"^":"b+q;"}}],["","",,P,{"^":"",
h1:function(a){if(a instanceof H.o)return a.k(0)
return"Instance of '"+H.b0(a)+"'"},
bJ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bj(a)
if(typeof a==="string")return JSON.stringify(a)
return P.h1(a)},
d8:function(a){return new P.iX(a)},
aB:function(a){H.c3(H.e(a))},
P:{"^":"b;"},
"+bool":0,
bI:{"^":"b;a,b",
D:function(a,b){if(b==null)return!1
return b instanceof P.bI&&this.a===b.a&&!0},
L:function(a,b){return C.b.L(this.a,H.h(b,"$isbI").a)},
gA:function(a){var z=this.a
return(z^C.b.bi(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.fQ(H.hX(this))
y=P.bk(H.hV(this))
x=P.bk(H.hR(this))
w=P.bk(H.hS(this))
v=P.bk(H.hU(this))
u=P.bk(H.hW(this))
t=P.fR(H.hT(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isV:1,
$asV:function(){return[P.bI]},
p:{
fQ:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fR:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bk:function(a){if(a>=10)return""+a
return"0"+a}}},
ah:{"^":"G;"},
"+double":0,
aQ:{"^":"b;a",
T:function(a,b){return C.b.T(this.a,H.h(b,"$isaQ").a)},
D:function(a,b){if(b==null)return!1
return b instanceof P.aQ&&this.a===b.a},
gA:function(a){return this.a&0x1FFFFFFF},
L:function(a,b){return C.b.L(this.a,H.h(b,"$isaQ").a)},
k:function(a){var z,y,x,w,v
z=new P.fZ()
y=this.a
if(y<0)return"-"+new P.aQ(0-y).k(0)
x=z.$1(C.b.X(y,6e7)%60)
w=z.$1(C.b.X(y,1e6)%60)
v=new P.fY().$1(y%1e6)
return""+C.b.X(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isV:1,
$asV:function(){return[P.aQ]},
p:{
fX:function(a,b,c,d,e,f){return new P.aQ(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fY:{"^":"o:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fZ:{"^":"o:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
O:{"^":"b;"},
dr:{"^":"O;",
k:function(a){return"Throw of null."}},
aE:{"^":"O;a,b,c,d",
gaq:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gap:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gaq()+y+x
if(!this.a)return w
v=this.gap()
u=P.bJ(this.b)
return w+v+": "+u},
p:{
cU:function(a,b,c){return new P.aE(!0,a,b,c)}}},
ds:{"^":"aE;e,f,a,b,c,d",
gaq:function(){return"RangeError"},
gap:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bN:function(a,b,c){return new P.ds(null,null,!0,a,b,"Value not in range")},
bM:function(a,b,c,d,e){return new P.ds(b,c,!0,a,d,"Invalid value")}}},
hd:{"^":"aE;e,j:f>,a,b,c,d",
gaq:function(){return"RangeError"},
gap:function(){var z,y
z=H.i(this.b)
if(typeof z!=="number")return z.a6()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
H:function(a,b,c,d,e){var z=H.i(e==null?J.aD(b):e)
return new P.hd(b,z,!0,a,c,"Index out of range")}}},
ix:{"^":"O;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
y:function(a){return new P.ix(a)}}},
iv:{"^":"O;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
dG:function(a){return new P.iv(a)}}},
co:{"^":"O;a",
k:function(a){return"Bad state: "+this.a},
p:{
cp:function(a){return new P.co(a)}}},
fJ:{"^":"O;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bJ(z)+"."},
p:{
aF:function(a){return new P.fJ(a)}}},
dw:{"^":"b;",
k:function(a){return"Stack Overflow"},
$isO:1},
fP:{"^":"O;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iX:{"^":"b;a",
k:function(a){return"Exception: "+this.a}},
bl:{"^":"b;"},
E:{"^":"G;"},
"+int":0,
l:{"^":"b;$ti",
aF:["cu",function(a,b){var z=H.cz(this,"l",0)
return new H.dH(this,H.m(b,{func:1,ret:P.P,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gC(this)
for(y=0;z.u();)++y
return y},
t:function(a,b){var z,y,x
if(b<0)H.W(P.bM(b,0,null,"index",null))
for(z=this.gC(this),y=0;z.u();){x=z.gB(z)
if(b===y)return x;++y}throw H.c(P.H(b,this,"index",null,y))},
k:function(a){return P.hf(this,"(",")")}},
aT:{"^":"b;$ti"},
a:{"^":"b;$ti",$isl:1},
"+List":0,
K:{"^":"b;$ti"},
F:{"^":"b;",
gA:function(a){return P.b.prototype.gA.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
G:{"^":"b;",$isV:1,
$asV:function(){return[P.G]}},
"+num":0,
b:{"^":";",
D:function(a,b){return this===b},
gA:function(a){return H.b_(this)},
k:function(a){return"Instance of '"+H.b0(this)+"'"},
toString:function(){return this.k(this)}},
a2:{"^":"b;"},
d:{"^":"b;",$isV:1,
$asV:function(){return[P.d]},
$ishN:1},
"+String":0,
cq:{"^":"b;W:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dx:function(a,b,c){var z=J.aO(b)
if(!z.u())return a
if(c.length===0){do a+=H.e(z.gB(z))
while(z.u())}else{a+=H.e(z.gB(z))
for(;z.u();)a=a+c+H.e(z.gB(z))}return a}}}}],["","",,W,{"^":"",
h_:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.q).M(z,a,b,c)
y.toString
z=W.v
z=new H.dH(new W.a4(y),H.m(new W.h0(),{func:1,ret:P.P,args:[z]}),[z])
x=z.gC(z)
if(!x.u())H.W(H.dc())
w=x.gB(x)
if(x.u())H.W(H.hg())
return H.h(w,"$isQ")},
d7:function(a){H.h(a,"$isM")
return"wheel"},
aR:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fb(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a5(x)}return z},
iU:function(a,b){return document.createElement(a)},
bR:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dP:function(a,b,c,d){var z,y
z=W.bR(W.bR(W.bR(W.bR(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
e1:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.iO(a)
if(!!J.C(z).$isM)return z
return}else return H.h(a,"$isM")},
e7:function(a,b){var z
H.m(a,{func:1,ret:-1,args:[b]})
z=$.J
if(z===C.f)return a
return z.du(a,b)},
L:{"^":"Q;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kP:{"^":"f;0j:length=","%":"AccessibleNodeList"},
fv:{"^":"L;",
k:function(a){return String(a)},
$isfv:1,
"%":"HTMLAnchorElement"},
kQ:{"^":"L;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
cV:{"^":"L;",$iscV:1,"%":"HTMLBaseElement"},
fA:{"^":"f;","%":";Blob"},
bG:{"^":"L;",$isbG:1,"%":"HTMLBodyElement"},
cd:{"^":"L;0n:height=,0m:width=",
aH:function(a,b,c){if(c!=null)return this.d3(a,b,P.kk(c,null))
return this.d4(a,b)},
ci:function(a,b){return this.aH(a,b,null)},
d3:function(a,b,c){return a.getContext(b,c)},
d4:function(a,b){return a.getContext(b)},
$iscd:1,
"%":"HTMLCanvasElement"},
fC:{"^":"f;",
ae:function(a,b,c){return a.addColorStop(b,c)},
"%":"CanvasGradient"},
ce:{"^":"f;",
bC:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
dK:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
ai:function(a){return P.a_(a.getContextAttributes())},
$isce:1,
"%":"CanvasRenderingContext2D"},
kW:{"^":"v;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fK:{"^":"cf;",$isfK:1,"%":"CSSNumericValue|CSSUnitValue"},
kX:{"^":"fN;0j:length=","%":"CSSPerspective"},
al:{"^":"f;",$isal:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fL:{"^":"iM;0j:length=",
aM:function(a,b){var z=this.d5(a,this.am(a,b))
return z==null?"":z},
am:function(a,b){var z,y
z=$.ep()
y=z[b]
if(typeof y==="string")return y
y=this.dj(a,b)
z[b]=y
return y},
dj:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fS()+b
if(z in a)return z
return b},
d5:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fM:{"^":"b;",
gn:function(a){return this.aM(a,"height")},
gm:function(a){return this.aM(a,"width")}},
cf:{"^":"f;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fN:{"^":"f;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
kZ:{"^":"cf;0j:length=","%":"CSSTransformValue"},
l_:{"^":"cf;0j:length=","%":"CSSUnparsedValue"},
l1:{"^":"f;0j:length=",
h:function(a,b){return a[H.i(b)]},
"%":"DataTransferItemList"},
fT:{"^":"L;","%":"HTMLDivElement"},
fU:{"^":"v;",
dm:function(a,b){return a.adoptNode(b)},
cj:function(a,b){return a.getElementById(b)},
bW:function(a,b){return a.querySelector(b)},
gbR:function(a){return new W.bu(a,"mousedown",!1,[W.T])},
gbS:function(a){return new W.bu(a,"mousemove",!1,[W.T])},
gbT:function(a){return new W.bu(a,"mouseup",!1,[W.T])},
gbU:function(a){return new W.bu(a,H.u(W.d7(a)),!1,[W.aH])},
"%":"XMLDocument;Document"},
l2:{"^":"f;",
k:function(a){return String(a)},
"%":"DOMException"},
fV:{"^":"f;",
dE:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
l3:{"^":"iQ;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.z(c,"$isU",[P.G],"$asU")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[[P.U,P.G]]},
$isx:1,
$asx:function(){return[[P.U,P.G]]},
$asq:function(){return[[P.U,P.G]]},
$isl:1,
$asl:function(){return[[P.U,P.G]]},
$isa:1,
$asa:function(){return[[P.U,P.G]]},
$ast:function(){return[[P.U,P.G]]},
"%":"ClientRectList|DOMRectList"},
fW:{"^":"f;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
D:function(a,b){var z
if(b==null)return!1
if(!H.aL(b,"$isU",[P.G],"$asU"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.k(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gA:function(a){return W.dP(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isU:1,
$asU:function(){return[P.G]},
"%":";DOMRectReadOnly"},
l4:{"^":"iS;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.u(c)
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[P.d]},
$isx:1,
$asx:function(){return[P.d]},
$asq:function(){return[P.d]},
$isl:1,
$asl:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$ast:function(){return[P.d]},
"%":"DOMStringList"},
l5:{"^":"f;0j:length=","%":"DOMTokenList"},
Q:{"^":"v;0dZ:tagName=",
gdr:function(a){return new W.iT(a)},
k:function(a){return a.localName},
M:["ak",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.d6
if(z==null){z=H.j([],[W.a9])
y=new W.dp(z)
C.a.l(z,W.dN(null))
C.a.l(z,W.dY())
$.d6=y
d=y}else d=z
z=$.d5
if(z==null){z=new W.e0(d)
$.d5=z
c=z}else{z.a=d
c=z}}if($.ae==null){z=document
y=z.implementation
y=(y&&C.M).dE(y,"")
$.ae=y
$.cg=y.createRange()
y=$.ae
y.toString
y=y.createElement("base")
H.h(y,"$iscV")
y.href=z.baseURI
z=$.ae.head;(z&&C.N).H(z,y)}z=$.ae
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.h(y,"$isbG")}z=$.ae
if(!!this.$isbG)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ae.body;(z&&C.q).H(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.w(C.X,a.tagName)){z=$.cg;(z&&C.F).ck(z,x)
z=$.cg
w=(z&&C.F).dC(z,b)}else{x.innerHTML=b
w=$.ae.createDocumentFragment()
for(z=J.k(w);y=x.firstChild,y!=null;)z.H(w,y)}z=$.ae.body
if(x==null?z!=null:x!==z)J.cN(x)
c.aS(w)
C.j.dm(document,w)
return w},function(a,b,c){return this.M(a,b,c,null)},"dD",null,null,"ge8",5,5,null],
cn:function(a,b,c,d){a.textContent=null
this.H(a,this.M(a,b,c,d))},
cm:function(a,b){return this.cn(a,b,null,null)},
Z:function(a,b){return a.getAttribute(b)},
d9:function(a,b){return a.removeAttribute(b)},
cl:function(a,b,c){return a.setAttribute(b,c)},
gbR:function(a){return new W.bQ(a,"mousedown",!1,[W.T])},
gbS:function(a){return new W.bQ(a,"mousemove",!1,[W.T])},
gbT:function(a){return new W.bQ(a,"mouseup",!1,[W.T])},
gbU:function(a){return new W.bQ(a,H.u(W.d7(a)),!1,[W.aH])},
$isQ:1,
"%":";Element"},
h0:{"^":"o:19;",
$1:function(a){return!!J.C(H.h(a,"$isv")).$isQ}},
l7:{"^":"L;0n:height=,0m:width=","%":"HTMLEmbedElement"},
R:{"^":"f;",$isR:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
M:{"^":"f;",
bn:function(a,b,c,d){H.m(c,{func:1,args:[W.R]})
if(c!=null)this.cY(a,b,c,d)},
dl:function(a,b,c){return this.bn(a,b,c,null)},
cY:function(a,b,c,d){return a.addEventListener(b,H.ba(H.m(c,{func:1,args:[W.R]}),1),d)},
$isM:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dV|dW|dZ|e_"},
am:{"^":"fA;",$isam:1,"%":"File"},
lo:{"^":"iZ;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.h(c,"$isam")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.am]},
$isx:1,
$asx:function(){return[W.am]},
$asq:function(){return[W.am]},
$isl:1,
$asl:function(){return[W.am]},
$isa:1,
$asa:function(){return[W.am]},
$ast:function(){return[W.am]},
"%":"FileList"},
lp:{"^":"M;0j:length=","%":"FileWriter"},
ls:{"^":"L;0j:length=","%":"HTMLFormElement"},
an:{"^":"f;",$isan:1,"%":"Gamepad"},
ha:{"^":"L;","%":"HTMLHeadElement"},
lt:{"^":"f;0j:length=","%":"History"},
lu:{"^":"jc;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.h(c,"$isv")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.v]},
$isx:1,
$asx:function(){return[W.v]},
$asq:function(){return[W.v]},
$isl:1,
$asl:function(){return[W.v]},
$isa:1,
$asa:function(){return[W.v]},
$ast:function(){return[W.v]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hb:{"^":"fU;","%":"HTMLDocument"},
lv:{"^":"L;0n:height=,0m:width=","%":"HTMLIFrameElement"},
lw:{"^":"f;0n:height=,0m:width=","%":"ImageBitmap"},
lx:{"^":"f;0n:height=,0m:width=","%":"ImageData"},
ly:{"^":"L;0n:height=,0m:width=","%":"HTMLImageElement"},
lA:{"^":"L;0n:height=,0m:width=","%":"HTMLInputElement"},
aU:{"^":"dF;",$isaU:1,"%":"KeyboardEvent"},
hs:{"^":"f;",
k:function(a){return String(a)},
$ishs:1,
"%":"Location"},
hv:{"^":"L;","%":"HTMLAudioElement;HTMLMediaElement"},
lH:{"^":"f;0j:length=","%":"MediaList"},
lI:{"^":"jk;",
h:function(a,b){return P.a_(a.get(H.u(b)))},
E:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gF:function(a){var z=H.j([],[P.d])
this.E(a,new W.hx(z))
return z},
gj:function(a){return a.size},
i:function(a,b,c){throw H.c(P.y("Not supported"))},
$asS:function(){return[P.d,null]},
$isK:1,
$asK:function(){return[P.d,null]},
"%":"MIDIInputMap"},
hx:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lJ:{"^":"jl;",
h:function(a,b){return P.a_(a.get(H.u(b)))},
E:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gF:function(a){var z=H.j([],[P.d])
this.E(a,new W.hy(z))
return z},
gj:function(a){return a.size},
i:function(a,b,c){throw H.c(P.y("Not supported"))},
$asS:function(){return[P.d,null]},
$isK:1,
$asK:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
hy:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
ao:{"^":"f;",$isao:1,"%":"MimeType"},
lK:{"^":"jn;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.h(c,"$isao")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ao]},
$isx:1,
$asx:function(){return[W.ao]},
$asq:function(){return[W.ao]},
$isl:1,
$asl:function(){return[W.ao]},
$isa:1,
$asa:function(){return[W.ao]},
$ast:function(){return[W.ao]},
"%":"MimeTypeArray"},
T:{"^":"dF;",
gbQ:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.aZ(a.offsetX,a.offsetY,[P.G])
else{z=a.target
if(!J.C(W.e1(z)).$isQ)throw H.c(P.y("offsetX is only supported on elements"))
y=H.h(W.e1(z),"$isQ")
z=a.clientX
x=a.clientY
w=[P.G]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.z(new P.aZ(u,v,w),"$isaZ",w,"$asaZ")
if(typeof z!=="number")return z.aW()
if(typeof x!=="number")return x.aW()
return new P.aZ(C.u.c1(z-u),C.u.c1(x-v),w)}},
$isT:1,
"%":";DragEvent|MouseEvent"},
a4:{"^":"hr;a",
ga8:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.cp("No elements"))
if(y>1)throw H.c(P.cp("More than one element"))
return z.firstChild},
I:function(a,b){var z,y,x,w,v
H.z(b,"$isl",[W.v],"$asl")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.k(y),v=0;v<x;++v)w.H(y,z.firstChild)
return},
i:function(a,b,c){var z,y
H.i(b)
H.h(c,"$isv")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.n(y,b)
J.eO(z,c,y[b])},
gC:function(a){var z=this.a.childNodes
return new W.da(z,z.length,-1,[H.bd(C.D,z,"t",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){H.i(b)
return C.D.h(this.a.childNodes,b)},
$asq:function(){return[W.v]},
$asl:function(){return[W.v]},
$asa:function(){return[W.v]}},
v:{"^":"M;0dS:previousSibling=",
dT:function(a){var z=a.parentNode
if(z!=null)J.bD(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.ct(a):z},
H:function(a,b){return a.appendChild(b)},
da:function(a,b){return a.removeChild(b)},
dc:function(a,b,c){return a.replaceChild(b,c)},
$isv:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hI:{"^":"jp;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.h(c,"$isv")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.v]},
$isx:1,
$asx:function(){return[W.v]},
$asq:function(){return[W.v]},
$isl:1,
$asl:function(){return[W.v]},
$isa:1,
$asa:function(){return[W.v]},
$ast:function(){return[W.v]},
"%":"NodeList|RadioNodeList"},
lT:{"^":"L;0n:height=,0m:width=","%":"HTMLObjectElement"},
lV:{"^":"M;0n:height=,0m:width=","%":"OffscreenCanvas"},
lW:{"^":"f;0n:height=,0m:width=","%":"PaintSize"},
aq:{"^":"f;0j:length=",$isaq:1,"%":"Plugin"},
lY:{"^":"jt;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.h(c,"$isaq")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aq]},
$isx:1,
$asx:function(){return[W.aq]},
$asq:function(){return[W.aq]},
$isl:1,
$asl:function(){return[W.aq]},
$isa:1,
$asa:function(){return[W.aq]},
$ast:function(){return[W.aq]},
"%":"PluginArray"},
m_:{"^":"T;0n:height=,0m:width=","%":"PointerEvent"},
hZ:{"^":"f;",
dC:function(a,b){return a.createContextualFragment(b)},
ck:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
m4:{"^":"jz;",
h:function(a,b){return P.a_(a.get(H.u(b)))},
E:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gF:function(a){var z=H.j([],[P.d])
this.E(a,new W.i4(z))
return z},
gj:function(a){return a.size},
i:function(a,b,c){throw H.c(P.y("Not supported"))},
$asS:function(){return[P.d,null]},
$isK:1,
$asK:function(){return[P.d,null]},
"%":"RTCStatsReport"},
i4:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
m5:{"^":"f;0n:height=,0m:width=","%":"Screen"},
du:{"^":"L;0j:length=",$isdu:1,"%":"HTMLSelectElement"},
as:{"^":"M;",$isas:1,"%":"SourceBuffer"},
m7:{"^":"dW;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.h(c,"$isas")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.as]},
$isx:1,
$asx:function(){return[W.as]},
$asq:function(){return[W.as]},
$isl:1,
$asl:function(){return[W.as]},
$isa:1,
$asa:function(){return[W.as]},
$ast:function(){return[W.as]},
"%":"SourceBufferList"},
at:{"^":"f;",$isat:1,"%":"SpeechGrammar"},
m8:{"^":"jF;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.h(c,"$isat")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.at]},
$isx:1,
$asx:function(){return[W.at]},
$asq:function(){return[W.at]},
$isl:1,
$asl:function(){return[W.at]},
$isa:1,
$asa:function(){return[W.at]},
$ast:function(){return[W.at]},
"%":"SpeechGrammarList"},
au:{"^":"f;0j:length=",$isau:1,"%":"SpeechRecognitionResult"},
mb:{"^":"jI;",
h:function(a,b){return this.be(a,H.u(b))},
i:function(a,b,c){this.dh(a,b,H.u(c))},
E:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.d7(a,z)
if(y==null)return
b.$2(y,this.be(a,y))}},
gF:function(a){var z=H.j([],[P.d])
this.E(a,new W.ii(z))
return z},
gj:function(a){return a.length},
be:function(a,b){return a.getItem(b)},
d7:function(a,b){return a.key(b)},
dh:function(a,b,c){return a.setItem(b,c)},
$asS:function(){return[P.d,P.d]},
$isK:1,
$asK:function(){return[P.d,P.d]},
"%":"Storage"},
ii:{"^":"o:20;a",
$2:function(a,b){return C.a.l(this.a,a)}},
av:{"^":"f;",$isav:1,"%":"CSSStyleSheet|StyleSheet"},
io:{"^":"L;",
M:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ak(a,b,c,d)
z=W.h_("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a4(y).I(0,new W.a4(z))
return y},
"%":"HTMLTableElement"},
me:{"^":"L;",
M:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ak(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.K.M(z.createElement("table"),b,c,d)
z.toString
z=new W.a4(z)
x=z.ga8(z)
x.toString
z=new W.a4(x)
w=z.ga8(z)
y.toString
w.toString
new W.a4(y).I(0,new W.a4(w))
return y},
"%":"HTMLTableRowElement"},
mf:{"^":"L;",
M:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ak(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.K.M(z.createElement("table"),b,c,d)
z.toString
z=new W.a4(z)
x=z.ga8(z)
y.toString
x.toString
new W.a4(y).I(0,new W.a4(x))
return y},
"%":"HTMLTableSectionElement"},
dz:{"^":"L;",$isdz:1,"%":"HTMLTemplateElement"},
mg:{"^":"f;0m:width=","%":"TextMetrics"},
aw:{"^":"M;",$isaw:1,"%":"TextTrack"},
ax:{"^":"M;",$isax:1,"%":"TextTrackCue|VTTCue"},
mh:{"^":"jQ;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.h(c,"$isax")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ax]},
$isx:1,
$asx:function(){return[W.ax]},
$asq:function(){return[W.ax]},
$isl:1,
$asl:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$ast:function(){return[W.ax]},
"%":"TextTrackCueList"},
mi:{"^":"e_;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.h(c,"$isaw")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aw]},
$isx:1,
$asx:function(){return[W.aw]},
$asq:function(){return[W.aw]},
$isl:1,
$asl:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$ast:function(){return[W.aw]},
"%":"TextTrackList"},
mj:{"^":"f;0j:length=","%":"TimeRanges"},
ay:{"^":"f;",$isay:1,"%":"Touch"},
mk:{"^":"jV;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.h(c,"$isay")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ay]},
$isx:1,
$asx:function(){return[W.ay]},
$asq:function(){return[W.ay]},
$isl:1,
$asl:function(){return[W.ay]},
$isa:1,
$asa:function(){return[W.ay]},
$ast:function(){return[W.ay]},
"%":"TouchList"},
ml:{"^":"f;0j:length=","%":"TrackDefaultList"},
dF:{"^":"R;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mz:{"^":"f;",
k:function(a){return String(a)},
"%":"URL"},
mC:{"^":"hv;0n:height=,0m:width=","%":"HTMLVideoElement"},
mD:{"^":"M;0j:length=","%":"VideoTrackList"},
mE:{"^":"M;0n:height=,0m:width=","%":"VisualViewport"},
mF:{"^":"f;0m:width=","%":"VTTRegion"},
aH:{"^":"T;",
gdG:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.y("deltaY is not supported"))},
$isaH:1,
"%":"WheelEvent"},
iB:{"^":"M;",
gdq:function(a){var z,y,x
z=P.G
y=new P.ab(0,$.J,[z])
x=H.m(new W.iC(new P.jM(y,[z])),{func:1,ret:-1,args:[P.G]})
this.d2(a)
this.dd(a,W.e7(x,z))
return y},
dd:function(a,b){return a.requestAnimationFrame(H.ba(H.m(b,{func:1,ret:-1,args:[P.G]}),1))},
d2:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdI:1,
"%":"DOMWindow|Window"},
iC:{"^":"o:21;a",
$1:function(a){var z=this.a
a=H.bY(H.cC(a),{futureOr:1,type:H.r(z,0)})
z=z.a
if(z.a!==0)H.W(P.cp("Future already completed"))
z.ao(a)}},
dK:{"^":"v;",$isdK:1,"%":"Attr"},
mL:{"^":"k0;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.h(c,"$isal")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.al]},
$isx:1,
$asx:function(){return[W.al]},
$asq:function(){return[W.al]},
$isl:1,
$asl:function(){return[W.al]},
$isa:1,
$asa:function(){return[W.al]},
$ast:function(){return[W.al]},
"%":"CSSRuleList"},
mN:{"^":"fW;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
D:function(a,b){var z
if(b==null)return!1
if(!H.aL(b,"$isU",[P.G],"$asU"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.k(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gA:function(a){return W.dP(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mO:{"^":"k2;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.h(c,"$isan")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.an]},
$isx:1,
$asx:function(){return[W.an]},
$asq:function(){return[W.an]},
$isl:1,
$asl:function(){return[W.an]},
$isa:1,
$asa:function(){return[W.an]},
$ast:function(){return[W.an]},
"%":"GamepadList"},
mT:{"^":"k4;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.h(c,"$isv")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.v]},
$isx:1,
$asx:function(){return[W.v]},
$asq:function(){return[W.v]},
$isl:1,
$asl:function(){return[W.v]},
$isa:1,
$asa:function(){return[W.v]},
$ast:function(){return[W.v]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mU:{"^":"k6;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.h(c,"$isau")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.au]},
$isx:1,
$asx:function(){return[W.au]},
$asq:function(){return[W.au]},
$isl:1,
$asl:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$ast:function(){return[W.au]},
"%":"SpeechRecognitionResultList"},
mV:{"^":"k8;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.h(c,"$isav")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.av]},
$isx:1,
$asx:function(){return[W.av]},
$asq:function(){return[W.av]},
$isl:1,
$asl:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$ast:function(){return[W.av]},
"%":"StyleSheetList"},
iJ:{"^":"dj;d1:a<",
E:function(a,b){var z,y,x,w,v,u
H.m(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gF(this),y=z.length,x=this.a,w=J.k(x),v=0;v<z.length;z.length===y||(0,H.N)(z),++v){u=z[v]
b.$2(u,w.Z(x,u))}},
gF:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.j([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.n(z,w)
v=H.h(z[w],"$isdK")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asS:function(){return[P.d,P.d]},
$asK:function(){return[P.d,P.d]}},
iT:{"^":"iJ;a",
h:function(a,b){return J.c9(this.a,H.u(b))},
i:function(a,b,c){J.fj(this.a,b,H.u(c))},
gj:function(a){return this.gF(this).length}},
bu:{"^":"ij;a,b,c,$ti"},
bQ:{"^":"bu;a,b,c,$ti"},
iV:{"^":"ik;a,b,c,d,e,$ti",p:{
ag:function(a,b,c,d,e){var z=W.e7(new W.iW(c),W.R)
if(z!=null&&!0)J.eP(a,b,z,!1)
return new W.iV(0,a,b,z,!1,[e])}}},
iW:{"^":"o:22;a",
$1:function(a){return this.a.$1(H.h(a,"$isR"))}},
bv:{"^":"b;a",
cU:function(a){var z,y
z=$.cG()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.W[y],W.kt())
for(y=0;y<12;++y)z.i(0,C.w[y],W.ku())}},
Y:function(a){return $.eE().w(0,W.aR(a))},
S:function(a,b,c){var z,y,x
z=W.aR(a)
y=$.cG()
x=y.h(0,H.e(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.bW(x.$4(a,b,c,this))},
$isa9:1,
p:{
dN:function(a){var z,y
z=document.createElement("a")
y=new W.jA(z,window.location)
y=new W.bv(y)
y.cU(a)
return y},
mR:[function(a,b,c,d){H.h(a,"$isQ")
H.u(b)
H.u(c)
H.h(d,"$isbv")
return!0},"$4","kt",16,0,13],
mS:[function(a,b,c,d){var z,y,x
H.h(a,"$isQ")
H.u(b)
H.u(c)
z=H.h(d,"$isbv").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","ku",16,0,13]}},
t:{"^":"b;$ti",
gC:function(a){return new W.da(a,this.gj(a),-1,[H.bd(this,a,"t",0)])}},
dp:{"^":"b;a",
Y:function(a){return C.a.bo(this.a,new W.hK(a))},
S:function(a,b,c){return C.a.bo(this.a,new W.hJ(a,b,c))},
$isa9:1},
hK:{"^":"o:9;a",
$1:function(a){return H.h(a,"$isa9").Y(this.a)}},
hJ:{"^":"o:9;a,b,c",
$1:function(a){return H.h(a,"$isa9").S(this.a,this.b,this.c)}},
jB:{"^":"b;",
cV:function(a,b,c,d){var z,y,x
this.a.I(0,c)
z=b.aF(0,new W.jC())
y=b.aF(0,new W.jD())
this.b.I(0,z)
x=this.c
x.I(0,C.Y)
x.I(0,y)},
Y:function(a){return this.a.w(0,W.aR(a))},
S:["cw",function(a,b,c){var z,y
z=W.aR(a)
y=this.c
if(y.w(0,H.e(z)+"::"+b))return this.d.dn(c)
else if(y.w(0,"*::"+b))return this.d.dn(c)
else{y=this.b
if(y.w(0,H.e(z)+"::"+b))return!0
else if(y.w(0,"*::"+b))return!0
else if(y.w(0,H.e(z)+"::*"))return!0
else if(y.w(0,"*::*"))return!0}return!1}],
$isa9:1},
jC:{"^":"o:10;",
$1:function(a){return!C.a.w(C.w,H.u(a))}},
jD:{"^":"o:10;",
$1:function(a){return C.a.w(C.w,H.u(a))}},
jN:{"^":"jB;e,a,b,c,d",
S:function(a,b,c){if(this.cw(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.c9(a,"template")==="")return this.e.w(0,b)
return!1},
p:{
dY:function(){var z,y,x,w,v
z=P.d
y=P.cl(C.v,z)
x=H.r(C.v,0)
w=H.m(new W.jO(),{func:1,ret:z,args:[x]})
v=H.j(["TEMPLATE"],[z])
y=new W.jN(y,P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z),null)
y.cV(null,new H.hu(C.v,w,[x,z]),v,null)
return y}}},
jO:{"^":"o:23;",
$1:function(a){return"TEMPLATE::"+H.e(H.u(a))}},
jL:{"^":"b;",
Y:function(a){var z=J.C(a)
if(!!z.$isdt)return!1
z=!!z.$isI
if(z&&W.aR(a)==="foreignObject")return!1
if(z)return!0
return!1},
S:function(a,b,c){if(b==="is"||C.i.cp(b,"on"))return!1
return this.Y(a)},
$isa9:1},
da:{"^":"b;a,b,c,0d,$ti",
sbf:function(a){this.d=H.B(a,H.r(this,0))},
u:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbf(J.bg(this.a,z))
this.c=z
return!0}this.sbf(null)
this.c=y
return!1},
gB:function(a){return this.d},
$isaT:1},
iN:{"^":"b;a",$isM:1,$isdI:1,p:{
iO:function(a){if(a===window)return H.h(a,"$isdI")
else return new W.iN(a)}}},
a9:{"^":"b;"},
jA:{"^":"b;a,b",$ismy:1},
e0:{"^":"b;a",
aS:function(a){new W.jY(this).$2(a,null)},
a0:function(a,b){if(b==null)J.cN(a)
else J.bD(b,a)},
dg:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.f8(a)
x=J.c9(y.gd1(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a5(t)}v="element unprintable"
try{v=J.bj(a)}catch(t){H.a5(t)}try{u=W.aR(a)
this.df(H.h(a,"$isQ"),b,z,v,u,H.h(y,"$isK"),H.u(x))}catch(t){if(H.a5(t) instanceof P.aE)throw t
else{this.a0(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
df:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a0(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.Y(a)){this.a0(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.S(a,"is",g)){this.a0(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gF(f)
y=H.j(z.slice(0),[H.r(z,0)])
for(x=f.gF(f).length-1,z=f.a,w=J.k(z);x>=0;--x){if(x>=y.length)return H.n(y,x)
v=y[x]
if(!this.a.S(a,J.fm(v),w.Z(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.Z(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.Z(z,v)
w.d9(z,v)}}if(!!J.C(a).$isdz)this.aS(a.content)},
$islR:1},
jY:{"^":"o:24;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dg(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a0(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fa(z)}catch(w){H.a5(w)
v=H.h(z,"$isv")
if(x){u=v.parentNode
if(u!=null)J.bD(u,v)}else J.bD(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.h(y,"$isv")}}},
iM:{"^":"f+fM;"},
iP:{"^":"f+q;"},
iQ:{"^":"iP+t;"},
iR:{"^":"f+q;"},
iS:{"^":"iR+t;"},
iY:{"^":"f+q;"},
iZ:{"^":"iY+t;"},
jb:{"^":"f+q;"},
jc:{"^":"jb+t;"},
jk:{"^":"f+S;"},
jl:{"^":"f+S;"},
jm:{"^":"f+q;"},
jn:{"^":"jm+t;"},
jo:{"^":"f+q;"},
jp:{"^":"jo+t;"},
js:{"^":"f+q;"},
jt:{"^":"js+t;"},
jz:{"^":"f+S;"},
dV:{"^":"M+q;"},
dW:{"^":"dV+t;"},
jE:{"^":"f+q;"},
jF:{"^":"jE+t;"},
jI:{"^":"f+S;"},
jP:{"^":"f+q;"},
jQ:{"^":"jP+t;"},
dZ:{"^":"M+q;"},
e_:{"^":"dZ+t;"},
jU:{"^":"f+q;"},
jV:{"^":"jU+t;"},
k_:{"^":"f+q;"},
k0:{"^":"k_+t;"},
k1:{"^":"f+q;"},
k2:{"^":"k1+t;"},
k3:{"^":"f+q;"},
k4:{"^":"k3+t;"},
k5:{"^":"f+q;"},
k6:{"^":"k5+t;"},
k7:{"^":"f+q;"},
k8:{"^":"k7+t;"}}],["","",,P,{"^":"",
a_:function(a){var z,y,x,w,v
if(a==null)return
z=P.Y(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.N)(y),++w){v=H.u(y[w])
z.i(0,v,a[v])}return z},
kk:function(a,b){var z={}
a.E(0,new P.kl(z))
return z},
d3:function(){var z=$.d2
if(z==null){z=J.c5(window.navigator.userAgent,"Opera",0)
$.d2=z}return z},
fS:function(){var z,y
z=$.d_
if(z!=null)return z
y=$.d0
if(y==null){y=J.c5(window.navigator.userAgent,"Firefox",0)
$.d0=y}if(y)z="-moz-"
else{y=$.d1
if(y==null){y=!P.d3()&&J.c5(window.navigator.userAgent,"Trident/",0)
$.d1=y}if(y)z="-ms-"
else z=P.d3()?"-o-":"-webkit-"}$.d_=z
return z},
kl:{"^":"o:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
dO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jd:{"^":"b;",
dR:function(){return Math.random()}},
aZ:{"^":"b;ah:a>,a5:b>,$ti",
k:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
D:function(a,b){if(b==null)return!1
return H.aL(b,"$isaZ",[P.G],null)&&this.a==J.bF(b)&&this.b==b.ga5(b)},
gA:function(a){var z,y,x
z=J.ak(this.a)
y=J.ak(this.b)
y=P.dO(P.dO(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
ju:{"^":"b;"},
U:{"^":"ju;$ti"}}],["","",,P,{"^":"",fw:{"^":"f;",$isfw:1,"%":"SVGAnimatedLength"},l8:{"^":"I;0n:height=,0m:width=","%":"SVGFEBlendElement"},l9:{"^":"I;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},la:{"^":"I;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},lb:{"^":"I;0n:height=,0m:width=","%":"SVGFECompositeElement"},lc:{"^":"I;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},ld:{"^":"I;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},le:{"^":"I;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},lf:{"^":"I;0n:height=,0m:width=","%":"SVGFEFloodElement"},lg:{"^":"I;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},lh:{"^":"I;0n:height=,0m:width=","%":"SVGFEImageElement"},li:{"^":"I;0n:height=,0m:width=","%":"SVGFEMergeElement"},lj:{"^":"I;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},lk:{"^":"I;0n:height=,0m:width=","%":"SVGFEOffsetElement"},ll:{"^":"I;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},lm:{"^":"I;0n:height=,0m:width=","%":"SVGFETileElement"},ln:{"^":"I;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},lq:{"^":"I;0n:height=,0m:width=","%":"SVGFilterElement"},lr:{"^":"bm;0n:height=,0m:width=","%":"SVGForeignObjectElement"},h9:{"^":"bm;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bm:{"^":"I;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},lz:{"^":"bm;0n:height=,0m:width=","%":"SVGImageElement"},aV:{"^":"f;",$isaV:1,"%":"SVGLength"},lF:{"^":"jf;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){H.i(b)
H.h(c,"$isaV")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$asq:function(){return[P.aV]},
$isl:1,
$asl:function(){return[P.aV]},
$isa:1,
$asa:function(){return[P.aV]},
$ast:function(){return[P.aV]},
"%":"SVGLengthList"},lG:{"^":"I;0n:height=,0m:width=","%":"SVGMaskElement"},aY:{"^":"f;",$isaY:1,"%":"SVGNumber"},lS:{"^":"jr;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){H.i(b)
H.h(c,"$isaY")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$asq:function(){return[P.aY]},
$isl:1,
$asl:function(){return[P.aY]},
$isa:1,
$asa:function(){return[P.aY]},
$ast:function(){return[P.aY]},
"%":"SVGNumberList"},lX:{"^":"I;0n:height=,0m:width=","%":"SVGPatternElement"},lZ:{"^":"f;0j:length=","%":"SVGPointList"},m0:{"^":"f;0n:height=,0m:width=","%":"SVGRect"},m1:{"^":"h9;0n:height=,0m:width=","%":"SVGRectElement"},dt:{"^":"I;",$isdt:1,"%":"SVGScriptElement"},mc:{"^":"jK;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){H.i(b)
H.u(c)
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$asq:function(){return[P.d]},
$isl:1,
$asl:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$ast:function(){return[P.d]},
"%":"SVGStringList"},I:{"^":"Q;",
M:function(a,b,c,d){var z,y,x,w,v,u
z=H.j([],[W.a9])
C.a.l(z,W.dN(null))
C.a.l(z,W.dY())
C.a.l(z,new W.jL())
c=new W.e0(new W.dp(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.q).dD(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a4(w)
u=z.ga8(z)
for(z=J.k(v);x=u.firstChild,x!=null;)z.H(v,x)
return v},
$isI:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},md:{"^":"bm;0n:height=,0m:width=","%":"SVGSVGElement"},b1:{"^":"f;",$isb1:1,"%":"SVGTransform"},mm:{"^":"jX;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){H.i(b)
H.h(c,"$isb1")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$asq:function(){return[P.b1]},
$isl:1,
$asl:function(){return[P.b1]},
$isa:1,
$asa:function(){return[P.b1]},
$ast:function(){return[P.b1]},
"%":"SVGTransformList"},mA:{"^":"bm;0n:height=,0m:width=","%":"SVGUseElement"},je:{"^":"f+q;"},jf:{"^":"je+t;"},jq:{"^":"f+q;"},jr:{"^":"jq+t;"},jJ:{"^":"f+q;"},jK:{"^":"jJ+t;"},jW:{"^":"f+q;"},jX:{"^":"jW+t;"}}],["","",,P,{"^":"",af:{"^":"b;",$isl:1,
$asl:function(){return[P.ah]},
$isa:1,
$asa:function(){return[P.ah]},
$isit:1}}],["","",,P,{"^":"",kR:{"^":"f;0j:length=","%":"AudioBuffer"},kS:{"^":"iK;",
h:function(a,b){return P.a_(a.get(H.u(b)))},
E:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gF:function(a){var z=H.j([],[P.d])
this.E(a,new P.fy(z))
return z},
gj:function(a){return a.size},
i:function(a,b,c){throw H.c(P.y("Not supported"))},
$asS:function(){return[P.d,null]},
$isK:1,
$asK:function(){return[P.d,null]},
"%":"AudioParamMap"},fy:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},kT:{"^":"M;0j:length=","%":"AudioTrackList"},fz:{"^":"M;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lU:{"^":"fz;0j:length=","%":"OfflineAudioContext"},iK:{"^":"f+S;"}}],["","",,P,{"^":"",fB:{"^":"f;",$isfB:1,"%":"WebGLBuffer"},h7:{"^":"f;",$ish7:1,"%":"WebGLFramebuffer"},hY:{"^":"f;",$ishY:1,"%":"WebGLProgram"},m2:{"^":"f;",
bm:function(a,b){return a.activeTexture(b)},
bp:function(a,b,c){return a.attachShader(b,c)},
bq:function(a,b,c){return a.bindBuffer(b,c)},
bs:function(a,b,c){return a.bindFramebuffer(b,c)},
bt:function(a,b,c){return a.bindTexture(b,c)},
bu:function(a,b){return a.blendEquation(b)},
bv:function(a,b,c){return a.blendFunc(b,c)},
bw:function(a,b,c,d){return a.bufferData(b,c,d)},
bx:function(a,b){return a.clear(b)},
by:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bz:function(a,b){return a.compileShader(b)},
bA:function(a){return a.createBuffer()},
bB:function(a){return a.createProgram()},
bD:function(a,b){return a.createShader(b)},
bE:function(a){return a.createTexture()},
bG:function(a,b){return a.depthMask(b)},
bH:function(a,b){return a.disable(b)},
bI:function(a,b,c,d){return a.drawArrays(b,c,d)},
bJ:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bK:function(a,b){return a.enable(b)},
bL:function(a,b){return a.enableVertexAttribArray(b)},
ai:function(a){return P.a_(a.getContextAttributes())},
aI:function(a){return a.getError()},
aK:function(a,b){return a.getProgramInfoLog(b)},
aL:function(a,b,c){return a.getProgramParameter(b,c)},
aN:function(a,b){return a.getShaderInfoLog(b)},
aO:function(a,b,c){return a.getShaderParameter(b,c)},
aP:function(a,b,c){return a.getUniformLocation(b,c)},
bO:function(a,b){return a.linkProgram(b)},
bV:function(a,b,c){return a.pixelStorei(b,c)},
aU:function(a,b,c){return a.shaderSource(b,c)},
aV:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aE:function(a,b,c,d,e,f,g,h,i,j){this.az(a,b,c,d,e,f,g)
return},
bY:function(a,b,c,d,e,f,g){return this.aE(a,b,c,d,e,f,g,null,null,null)},
az:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bZ:function(a,b,c,d){return a.texParameteri(b,c,d)},
c2:function(a,b,c){return a.uniform1f(b,c)},
c3:function(a,b,c){return a.uniform1fv(b,c)},
c4:function(a,b,c){return a.uniform1i(b,c)},
c5:function(a,b,c){return a.uniform1iv(b,c)},
c6:function(a,b,c){return a.uniform2fv(b,c)},
c7:function(a,b,c){return a.uniform3fv(b,c)},
c8:function(a,b,c){return a.uniform4fv(b,c)},
c9:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ca:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cb:function(a,b){return a.useProgram(b)},
cc:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ce:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},m3:{"^":"f;",
ds:function(a,b){return a.beginTransformFeedback(b)},
dv:function(a,b){return a.bindVertexArray(b)},
dF:function(a){return a.createVertexArray()},
dH:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dI:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dJ:function(a){return a.endTransformFeedback()},
e1:function(a,b,c,d){this.dk(a,b,H.z(c,"$isa",[P.d],"$asa"),d)
return},
dk:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
e2:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bm:function(a,b){return a.activeTexture(b)},
bp:function(a,b,c){return a.attachShader(b,c)},
bq:function(a,b,c){return a.bindBuffer(b,c)},
bs:function(a,b,c){return a.bindFramebuffer(b,c)},
bt:function(a,b,c){return a.bindTexture(b,c)},
bu:function(a,b){return a.blendEquation(b)},
bv:function(a,b,c){return a.blendFunc(b,c)},
bw:function(a,b,c,d){return a.bufferData(b,c,d)},
bx:function(a,b){return a.clear(b)},
by:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bz:function(a,b){return a.compileShader(b)},
bA:function(a){return a.createBuffer()},
bB:function(a){return a.createProgram()},
bD:function(a,b){return a.createShader(b)},
bE:function(a){return a.createTexture()},
bG:function(a,b){return a.depthMask(b)},
bH:function(a,b){return a.disable(b)},
bI:function(a,b,c,d){return a.drawArrays(b,c,d)},
bJ:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bK:function(a,b){return a.enable(b)},
bL:function(a,b){return a.enableVertexAttribArray(b)},
ai:function(a){return P.a_(a.getContextAttributes())},
aI:function(a){return a.getError()},
aK:function(a,b){return a.getProgramInfoLog(b)},
aL:function(a,b,c){return a.getProgramParameter(b,c)},
aN:function(a,b){return a.getShaderInfoLog(b)},
aO:function(a,b,c){return a.getShaderParameter(b,c)},
aP:function(a,b,c){return a.getUniformLocation(b,c)},
bO:function(a,b){return a.linkProgram(b)},
bV:function(a,b,c){return a.pixelStorei(b,c)},
aU:function(a,b,c){return a.shaderSource(b,c)},
aV:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aE:function(a,b,c,d,e,f,g,h,i,j){this.az(a,b,c,d,e,f,g)
return},
bY:function(a,b,c,d,e,f,g){return this.aE(a,b,c,d,e,f,g,null,null,null)},
az:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bZ:function(a,b,c,d){return a.texParameteri(b,c,d)},
c2:function(a,b,c){return a.uniform1f(b,c)},
c3:function(a,b,c){return a.uniform1fv(b,c)},
c4:function(a,b,c){return a.uniform1i(b,c)},
c5:function(a,b,c){return a.uniform1iv(b,c)},
c6:function(a,b,c){return a.uniform2fv(b,c)},
c7:function(a,b,c){return a.uniform3fv(b,c)},
c8:function(a,b,c){return a.uniform4fv(b,c)},
c9:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ca:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cb:function(a,b){return a.useProgram(b)},
cc:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ce:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},i9:{"^":"f;",$isi9:1,"%":"WebGLShader"},ip:{"^":"f;",$isip:1,"%":"WebGLTexture"},iu:{"^":"f;",$isiu:1,"%":"WebGLUniformLocation"},iz:{"^":"f;",$isiz:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",m9:{"^":"jH;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return P.a_(this.d6(a,b))},
i:function(a,b,c){H.i(b)
H.h(c,"$isK")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
d6:function(a,b){return a.item(b)},
$asq:function(){return[[P.K,,,]]},
$isl:1,
$asl:function(){return[[P.K,,,]]},
$isa:1,
$asa:function(){return[[P.K,,,]]},
$ast:function(){return[[P.K,,,]]},
"%":"SQLResultSetRowList"},jG:{"^":"f+q;"},jH:{"^":"jG+t;"}}],["","",,G,{"^":"",
iD:function(a){var z,y,x,w
z=H.j(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.n(z,y)
C.a.i(z,y,w+H.e(z[y]))}return C.a.a2(z,"\n")},
dL:function(a,b,c){var z,y,x,w
z=J.k(a)
y=z.bD(a,b)
z.aU(a,y,c)
z.bz(a,y)
x=H.bW(z.aO(a,y,35713))
if(x!=null&&!x){w=z.aN(a,y)
P.aB("E:Compilation failed:")
P.aB("E:"+G.iD(c))
P.aB("E:Failure:")
P.aB(C.i.G("E:",w))
throw H.c(w)}return y},
db:function(a,b){var z,y,x
H.z(a,"$isa",[T.p],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.e.i(b,z,J.bF(a[y]))
if(y>=a.length)return H.n(a,y)
C.e.i(b,z+1,J.c8(a[y]))
z+=2
if(y>=a.length)return H.n(a,y)
x=J.cL(a[y])
if(z>=b.length)return H.n(b,z)
b[z]=x}return b},
h4:function(a,b){var z,y
H.z(a,"$isa",[T.A],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.e.i(b,z,J.bF(a[y]))
if(y>=a.length)return H.n(a,y)
C.e.i(b,z+1,J.c8(a[y]))}return b},
h5:function(a,b){var z,y,x,w,v
H.z(a,"$isa",[T.b5],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.e.i(b,z,J.bF(a[y]))
if(y>=a.length)return H.n(a,y)
C.e.i(b,z+1,J.c8(a[y]))
x=z+2
if(y>=a.length)return H.n(a,y)
w=J.cL(a[y])
v=b.length
if(x>=v)return H.n(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.n(a,y)
w=J.fc(a[y])
if(z>=v)return H.n(b,z)
b[z]=w}return b},
h3:function(a,b){var z,y
H.z(a,"$isa",[[P.a,P.E]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.o.i(b,z,J.bg(a[y],0))
if(y>=a.length)return H.n(a,y)
C.o.i(b,z+1,J.bg(a[y],1))
if(y>=a.length)return H.n(a,y)
C.o.i(b,z+2,J.bg(a[y],2))
if(y>=a.length)return H.n(a,y)
C.o.i(b,z+3,J.bg(a[y],3))}return b},
j9:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.aW(z,[H.r(z,0)]),y=y.gC(y),x=b.x,w=[[P.a,P.E]],v=[P.ah],u=[T.b5],t=[T.p],s=[T.A];y.u();){r=y.d
if(!x.af(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.ed>0)H.c3("I: "+r)
continue}q=z.h(0,r)
switch($.a6().h(0,r).a){case"vec2":b.a_(r,G.h4(H.bC(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.a_(r,G.db(H.bC(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.a_(r,G.h5(H.bC(q,"$isa",u,"$asa"),null),4)
break
case"float":b.a_(r,new Float32Array(H.bS(H.bC(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.a_(r,G.h3(H.bC(q,"$isa",w,"$asa"),null),4)
break}}},
aX:{"^":"b;"},
b2:{"^":"aX;d,a,b,c",
b_:function(){return this.d},
k:function(a){var z,y,x,w
z=H.j(["{"+new H.dE(H.kq(this)).k(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.aW(y,[H.r(y,0)]),x=x.gC(x);x.u();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.h(0,w)))}return C.a.a2(z,"\n")}},
fE:{"^":"b;0a,b",
bM:function(a,b,c){J.f5(this.a,b)
if(c>0)J.fs(this.a,b,c)},
cd:function(a,b,c,d,e,f,g,h){J.c4(this.a,34962,b)
J.ft(this.a,c,d,e,!1,g,h)}},
h6:{"^":"b;a,b,c,d,e"},
h2:{"^":"b;"},
d9:{"^":"b;a,b,c,d"},
h8:{"^":"b;a,b,c,d,e",
aY:function(a){switch($.a6().h(0,a).a){case"vec2":this.e.i(0,a,H.j([],[T.A]))
break
case"vec3":this.e.i(0,a,H.j([],[T.p]))
break
case"vec4":this.e.i(0,a,H.j([],[T.b5]))
break
case"float":this.e.i(0,a,H.j([],[P.ah]))
break
case"uvec4":this.e.i(0,a,H.j([],[[P.a,P.E]]))
break}},
cC:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)C.a.l(y,new G.d9(z,z+1,z+2,z+3))},
aa:function(a){var z,y,x,w
H.z(a,"$isa",[T.p],"$asa")
for(z=this.d,y=0;y<24;++y){x=a[y]
w=new T.p(new Float32Array(3))
w.K(x)
C.a.l(z,w)}},
cA:function(a,b){var z,y,x,w,v,u
z=[T.A]
H.z(b,"$isa",z,"$asa")
y=H.z(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<24;++x){w=b[x]
v=new Float32Array(2)
u=w.a
v[1]=u[1]
v[0]=u[0]
z.l(y,new T.A(v))}},
cB:function(a,b){var z,y,x,w,v
z=[T.p]
H.z(b,"$isa",z,"$asa")
y=H.z(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<4;++x){w=b[x]
v=new T.p(new Float32Array(3))
v.K(w)
z.l(y,v)}},
cH:function(){var z,y,x,w,v,u,t,s,r
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.j(y,[P.E])
for(y=this.b,w=0,v=0;!1;++v){if(v>=0)return H.n(y,v)
u=y[v]
C.a.i(x,w,u.ge5(u))
C.a.i(x,w+1,u.ge6(u))
C.a.i(x,w+2,u.ge7(u))
w+=3}for(y=z.length,v=0;v<z.length;z.length===y||(0,H.N)(z),++v){t=z[v]
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
z=H.j(["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"],[P.d])
for(y=this.e,x=new H.aW(y,[H.r(y,0)]),x=x.gC(x);x.u();){w=x.d
v=$.a6().h(0,w).a
C.a.l(z,H.e(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.a2(z," ")}},
dC:{"^":"b;a,b,c"},
dA:{"^":"b;a,b,c",p:{
dB:function(a,b,c){return new G.dA(a,b,c)}}},
dl:{"^":"b2;d,a,b,c"},
hw:{"^":"aX;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sar:function(a){this.cx=H.z(a,"$isa",[P.E],"$asa")},
aX:function(a,b,c){var z,y
C.i.an(a,0)
H.h(b,"$isaf")
J.eN(this.cy,a,b)
z=this.d
y=this.r.h(0,a)
J.c4(z.a,34962,y)
J.cK(z.a,34962,b,35048)},
cI:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a_:function(a,b,c){var z,y,x,w,v
z=J.cH(a,0)===105
if(z&&this.z===0)this.z=C.b.cz(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.c6(x.a))
this.aX(a,b,c)
w=$.a6().h(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.h(0,a)
J.bE(x.a,this.e)
x.bM(0,v,z?1:0)
x.cd(0,y.h(0,a),v,w.aZ(),5126,!1,0,0)},
aa:function(a){var z,y,x,w
z=this.r
y=this.d
z.i(0,"aPosition",J.c6(y.a))
this.ch=a
this.aX("aPosition",a,3)
x=$.a6().h(0,"aPosition")
if(x==null)throw H.c("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.bE(y.a,this.e)
y.bM(0,w,0)
y.cd(0,z.h(0,"aPosition"),w,x.aZ(),5126,!1,0,0)},
k:function(a){var z,y,x,w,v
z=this.cx
y=H.j(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=J.k(z),w=J.aO(x.gF(z));w.u();){v=w.gB(w)
C.a.l(y,H.e(v)+":"+H.e(J.aD(x.h(z,v))))}return"MESH["+this.a+"] "+C.a.a2(y,"  ")},
p:{
dm:function(a,b,c,d){var z=P.d
return new G.hw(b,J.eZ(b.a),c,P.Y(z,P.b),d,0,-1,P.Y(z,P.af),"meshdata:"+a,!1,!0)}}},
hO:{"^":"b2;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cD:function(a,b){var z
if(typeof a!=="number")return a.e4()
if(typeof b!=="number")return H.bz(b)
z=a/b
if(this.z===z)return
this.z=z
this.b1()},
b1:function(){var z,y,x,w,v,u
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
b_:function(){var z,y,x
z=this.x
y=this.d
y.i(0,"uEyePosition",z.aJ())
x=this.cy
x.K(z.d)
z=this.cx
z.K(this.db)
z.bP(0,x)
y.i(0,"uPerspectiveViewMatrix",z)
return y}},
l6:{"^":"b;"},
i3:{"^":"aX;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cM:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){t=z[u]
x.i(0,t,J.cM(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){t=z[u]
x.i(0,t,J.cM(w.a,v,t))}},
cQ:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.j([],[P.d])
x=H.j([],[P.d])
for(y=new H.aW(y,[H.r(y,0)]),y=y.gC(y);y.u();){w=y.d
if(!z.af(0,w))C.a.l(x,w)}for(z=this.x,z=P.jh(z,z.r,H.r(z,0)),y=this.Q;z.u();){w=z.d
if(!y.w(0,w))C.a.l(x,w)}return x},
cT:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.z(b,"$isK",[P.d,P.b],"$asK")
z=Date.now()
for(y=new H.aW(b,[H.r(b,0)]),y=y.gC(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.u();){s=y.d
switch(J.cH(s,0)){case 117:if(w.af(0,s)){r=b.h(0,s)
if(v.af(0,s))H.c3("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.i(0,s,a)
q=$.a6().h(0,s)
if(q==null)H.W("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.i(r)
J.ca(x.a,p,r)}else if(!!J.C(r).$ishe)J.fq(x.a,p,r)
break
case"float":if(q.c===0){H.eb(r)
J.fo(x.a,p,r)}else if(!!J.C(r).$isaf)J.fp(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.ad(r,"$isa1").a
J.cT(x.a,p,!1,s)}else if(!!J.C(r).$isaf)J.cT(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=H.ad(r,"$isbr").a
J.cS(x.a,p,!1,s)}else if(!!J.C(r).$isaf)J.cS(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.cR(o,p,H.ad(r,"$isb5").a)
else J.cR(o,p,H.h(r,"$isaf"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cQ(o,p,H.ad(r,"$isp").a)
else J.cQ(o,p,H.h(r,"$isaf"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cP(o,p,H.ad(r,"$isA").a)
else J.cP(o,p,H.h(r,"$isaf"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.bz(s)
J.cI(x.a,33984+s)
s=H.ad(r,"$iscr").b
J.bh(x.a,3553,s)
s=this.ch
J.ca(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.G()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.bz(s)
J.cI(x.a,33984+s)
s=H.ad(r,"$iscr").b
J.bh(x.a,34067,s)
s=this.ch
J.ca(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.G()
this.ch=s+1
break
default:H.c3("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":s=J.aj(r,!0)
o=x.a
if(s)J.bi(o,2929)
else J.c7(o,2929)
break
case"cStencilFunc":H.ad(r,"$isdC")
s=r.a
o=x.a
if(s===1281)J.c7(o,2960)
else{J.bi(o,2960)
o=r.b
n=r.c
J.fk(x.a,s,o,n)}break
case"cDepthWrite":H.bW(r)
J.f_(x.a,r)
break
case"cBlendEquation":H.ad(r,"$isdA")
s=r.a
o=x.a
if(s===1281)J.c7(o,3042)
else{J.bi(o,3042)
o=r.b
n=r.c
J.eT(x.a,o,n)
J.eS(x.a,s)}break}++t
break}}m=P.fX(0,0,0,Date.now()-new P.bI(z,!1).a,0,0)
""+t
m.k(0)},
cG:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.z(b,"$isa",[G.b2],"$asa")
Date.now()
z=this.d
J.fr(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b6()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.N)(b),++x){w=b[x]
this.cT(w.a,w.b_())}y=this.Q
y.a1(0)
for(v=J.aO(J.f9(a.cy));v.u();)y.l(0,v.gB(v))
u=this.cQ()
if(u.length!==0)P.aB("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
J.bE(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.cI()
s=a.Q
r=a.z
if(t)J.eQ(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.f3(q,y,v,s,0,r)
else J.f2(q,y,v,s,0)}else{s=z.a
if(r>1)J.f1(s,y,0,v,r)
else J.f0(s,y,0,v)}if(t)J.f6(z.a)},
p:{
bO:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
y=P.a0(null,null,null,z)
x=c.b
w=d.b
v=H.z(c.f,"$isa",[z],"$asa")
u=J.eX(b.a)
t=G.dL(b.a,35633,x)
J.cJ(b.a,u,t)
s=G.dL(b.a,35632,w)
J.cJ(b.a,u,s)
if(v.length>0)J.fn(b.a,u,v,35980)
J.fh(b.a,u)
if(!H.bW(J.fg(b.a,u,35714)))H.W(J.ff(b.a,u))
z=new G.i3(b,c,d,u,P.cl(c.c,z),P.Y(z,P.b),P.Y(z,z),y,a,!1,!0)
z.cM(a,b,c,d)
return z}}},
D:{"^":"b;a,b,c",
aZ:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
ia:{"^":"b;a,0b,c,d,e,f,r,x",
a9:function(a){var z,y,x,w,v
H.z(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.N)(a),++w){v=a[w]
C.a.l(y,v)
x.i(0,v,this.r);++this.r}C.a.aj(y)},
P:function(a){var z,y,x
H.z(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.N)(a),++x)C.a.l(y,a[x])
C.a.aj(y)},
U:function(a){var z,y
H.z(a,"$isa",[P.d],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.l(z,a[y])
C.a.aj(z)},
cO:function(a,b){this.b=this.b2(!0,H.z(a,"$isa",[P.d],"$asa"),b)},
b0:function(a){return this.cO(a,null)},
cN:function(a,b){this.b=this.b2(!1,H.z(a,"$isa",[P.d],"$asa"),b)},
V:function(a){return this.cN(a,null)},
b2:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.z(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.j(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.N)(y),++u){t=y[u]
s=$.a6().h(0,t)
C.a.l(w,"layout (location="+H.e(v.h(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){q=z[u]
s=$.a6().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){q=z[u]
s=$.a6().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){q=z[u]
s=$.a6().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.l(w,"")
if(a)C.a.l(w,"void main(void) {")
C.a.I(w,b)
if(a)C.a.l(w,"}")
return C.a.a2(w,"\n")},
p:{
ar:function(a){var z,y
z=P.d
y=[z]
return new G.ia(a,H.j([],y),H.j([],y),H.j([],y),H.j([],y),0,P.Y(z,P.E))}}},
dv:{"^":"aX;",
aJ:function(){var z,y,x
z=this.e
y=this.d.a
x=z.a
x[0]=y[12]
x[1]=y[13]
x[2]=y[14]
return z},
aG:function(){var z,y,x
z=this.f
y=this.d.a
x=z.a
x[0]=y[2]
x[1]=y[6]
x[2]=y[10]
return z},
aQ:function(){var z,y,x
z=this.r
y=this.d.a
x=z.a
x[0]=y[1]
x[1]=y[5]
x[2]=y[9]
return z},
aT:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}},
iq:{"^":"b;a,b,c,d,e,f,r"},
cr:{"^":"b;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
hc:{"^":"cr;f,a,b,c,d,e"}}],["","",,R,{"^":"",
iy:function(a,b,c){var z,y,x,w,v,u
z="stars_"+b
y=b*3
x=new Float32Array(y)
for(w=x.length,v=0;v<y;++v){u=$.eC().dR()
if(v>=w)return H.n(x,v)
x[v]=(u-0.5)*c}y=G.dm(z,a.d,0,a.e.x)
y.aa(x)
return y},
jj:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.h(W.iU("span",null),"$isQ")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.z).am(y,"float")
y.setProperty(x,"left","")
x=C.z.am(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.t.H(z,v)}return z},
i2:{"^":"i1;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
dV:[function(a){var z,y,x
z=this.db
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.aB("size change "+H.e(y)+" "+H.e(x))
this.dx.cD(y,x)
this.z=y
this.Q=x},"$1","gdU",4,0,25]},
ig:{"^":"b;",
cP:function(a,b,c){var z,y
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
y.H(z,this.b)
y.H(z,this.d)
y.H(z,this.c)}},
ih:{"^":"ig;e,f,a,b,c,d",
cS:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.A.e0(y,2)+" fps"
C.t.cm(this.c,b)
x=C.b.X(30*C.A.dw(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.h(z.firstChild,"$isQ")
v=w.style
u=""+x+"px"
v.height=u
C.t.H(z,w)},
cR:function(a){return this.cS(a,"")}}}],["","",,A,{"^":"",
ec:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.z(e,"$isa",[G.b2],"$asa")
z=b.dx
z.K(c)
y=b.d
z.bP(0,y)
x=b.cx
H.e(b)
w=C.a.gdP(e)
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
v.dB(new T.br(u))
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
a.cG(x,e,d)
if(0>=e.length)return H.n(e,-1)
e.pop()
for(y=b.cy,r=0;!1;++r){if(r>=0)return H.n(y,r)
A.ec(a,y[r],z,d,e)}},
cn:{"^":"dv;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
k:function(a){return"NODE["+this.a+"]"}},
bs:{"^":"aX;d,e,f,a,b,c"},
i1:{"^":"aX;",
cL:function(a,b,c){if(this.d==null)this.d=new G.h6(this.e,null,null,null,null)},
cF:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.eR(v.a,36160,z)
J.fu(v.a,this.x,this.y,x,w)
if(y!==0)J.eU(v.a,y)
for(z=this.f,y=z.length,x=P.d,w=P.b,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){t=z[u]
s=t.e
C.a.l(s,new G.b2(P.Y(x,w),"transforms",!1,!0))
r=new T.a1(new Float32Array(16))
r.O()
for(v=t.f,q=v.length,p=0;p<v.length;v.length===q||(0,H.N)(v),++p){o=v[p]
A.ec(t.d,o,r,a,s)}if(0>=s.length)return H.n(s,-1)
s.pop()}},
cE:function(){return this.cF(null)}}}],["","",,V,{}],["","",,B,{"^":"",
fO:function(a5,a6,a7,a8,a9,b0,b1,b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
z=-b0
y=-b1
x=new T.p(new Float32Array(3))
x.q(z,y,b2)
w=new T.p(new Float32Array(3))
w.q(b0,y,b2)
v=new T.p(new Float32Array(3))
v.q(b0,b1,b2)
u=new T.p(new Float32Array(3))
u.q(z,b1,b2)
t=-b2
s=new T.p(new Float32Array(3))
s.q(z,y,t)
r=new T.p(new Float32Array(3))
r.q(z,b1,t)
q=new T.p(new Float32Array(3))
q.q(b0,b1,t)
p=new T.p(new Float32Array(3))
p.q(b0,y,t)
o=new T.p(new Float32Array(3))
o.q(z,b1,t)
n=new T.p(new Float32Array(3))
n.q(z,b1,b2)
m=new T.p(new Float32Array(3))
m.q(b0,b1,b2)
l=new T.p(new Float32Array(3))
l.q(b0,b1,t)
k=new T.p(new Float32Array(3))
k.q(b0,y,b2)
j=new T.p(new Float32Array(3))
j.q(z,y,b2)
i=new T.p(new Float32Array(3))
i.q(z,y,t)
h=new T.p(new Float32Array(3))
h.q(b0,y,t)
g=new T.p(new Float32Array(3))
g.q(b0,y,t)
f=new T.p(new Float32Array(3))
f.q(b0,b1,t)
e=new T.p(new Float32Array(3))
e.q(b0,b1,b2)
d=new T.p(new Float32Array(3))
d.q(b0,y,b2)
c=new T.p(new Float32Array(3))
c.q(z,y,t)
b=new T.p(new Float32Array(3))
b.q(z,y,b2)
y=new T.p(new Float32Array(3))
y.q(z,b1,b2)
a=new T.p(new Float32Array(3))
a.q(z,b1,t)
t=[T.p]
a0=H.j([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a],t)
z=new T.A(new Float32Array(2))
z.v(a7,a9)
y=new T.A(new Float32Array(2))
y.v(a6,a9)
x=new T.A(new Float32Array(2))
x.v(a6,a8)
w=new T.A(new Float32Array(2))
w.v(a7,a8)
v=new T.A(new Float32Array(2))
v.v(a6,a9)
u=new T.A(new Float32Array(2))
u.v(a6,a8)
s=new T.A(new Float32Array(2))
s.v(a7,a8)
r=new T.A(new Float32Array(2))
r.v(a7,a9)
q=new T.A(new Float32Array(2))
q.v(a7,a8)
p=new T.A(new Float32Array(2))
p.v(a7,a9)
o=new T.A(new Float32Array(2))
o.v(a6,a9)
n=new T.A(new Float32Array(2))
n.v(a6,a8)
m=new T.A(new Float32Array(2))
m.v(a6,a8)
l=new T.A(new Float32Array(2))
l.v(a7,a8)
k=new T.A(new Float32Array(2))
k.v(a7,a9)
j=new T.A(new Float32Array(2))
j.v(a6,a9)
i=new T.A(new Float32Array(2))
i.v(a6,a9)
h=new T.A(new Float32Array(2))
h.v(a6,a8)
g=new T.A(new Float32Array(2))
g.v(a7,a8)
f=new T.A(new Float32Array(2))
f.v(a7,a9)
e=new T.A(new Float32Array(2))
e.v(a7,a9)
d=new T.A(new Float32Array(2))
d.v(a6,a9)
c=new T.A(new Float32Array(2))
c.v(a6,a8)
b=new T.A(new Float32Array(2))
b.v(a7,a8)
a1=H.j([z,y,x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b],[T.A])
a2=new G.h8(!1,H.j([],[G.h2]),H.j([],[G.d9]),H.j([],t),P.Y(P.d,[P.a,,]))
a2.aY("aTexUV")
a2.aY("aNormal")
a2.cC(6)
a2.aa(a0)
a2.cA("aTexUV",a1)
for(a3=0;z=$.eD(),a3<6;++a3){a4=z[a3]
a2.cB("aNormal",H.j([a4,a4,a4,a4],t))}return a2}}],["","",,D,{"^":"",hl:{"^":"b;a,b,c",
cJ:function(a){var z,y
a=document
z=W.aU
y={func:1,ret:-1,args:[z]}
W.ag(a,"keydown",H.m(new D.hn(this),y),!1,z)
W.ag(a,"keyup",H.m(new D.ho(this),y),!1,z)},
p:{
hm:function(a){var z=P.E
z=new D.hl(P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z))
z.cJ(a)
return z}}},hn:{"^":"o:11;a",
$1:function(a){var z
H.h(a,"$isaU")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},ho:{"^":"o:11;a",
$1:function(a){var z
H.h(a,"$isaU")
z=this.a
z.a.a3(0,a.which)
z.c.l(0,a.which)}},hz:{"^":"b;a,b,c,d,e,f,r,x",
cK:function(a){var z,y,x
if(a==null)a=document
z=J.k(a)
y=z.gbS(a)
x=H.r(y,0)
W.ag(y.a,y.b,H.m(new D.hB(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbR(a)
y=H.r(x,0)
W.ag(x.a,x.b,H.m(new D.hC(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbT(a)
x=H.r(y,0)
W.ag(y.a,y.b,H.m(new D.hD(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbU(a)
x=H.r(z,0)
W.ag(z.a,z.b,H.m(new D.hE(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
hA:function(a){var z=P.E
z=new D.hz(P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z),0,0,0,0,0)
z.cK(a)
return z}}},hB:{"^":"o:3;a",
$1:function(a){var z,y
H.h(a,"$isT")
a.preventDefault()
z=this.a
y=J.k(a)
z.r=H.i(y.gbQ(a).a)
z.x=H.i(y.gbQ(a).b)
z.d=a.movementX
z.e=a.movementY}},hC:{"^":"o:3;a",
$1:function(a){var z
H.h(a,"$isT")
a.preventDefault()
P.aB("BUTTON "+H.e(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},hD:{"^":"o:3;a",
$1:function(a){var z
H.h(a,"$isT")
a.preventDefault()
z=this.a
z.a.a3(0,a.button)
z.c.l(0,a.button)}},hE:{"^":"o:26;a",
$1:function(a){H.h(a,"$isaH")
a.preventDefault()
this.a.f=H.i(C.ae.gdG(a))}},hM:{"^":"dv;ch,cx,cy,db,dx,dy,fr,fx,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
by:function(a){var z,y
z=C.e.dL(H.z(a,"$isl",[P.b],"$asl"),0,new A.ks(),P.E)
if(typeof z!=="number")return H.bz(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
ks:{"^":"o:27;",
$2:function(a,b){var z,y
H.i(a)
z=J.ak(b)
if(typeof a!=="number")return a.G()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",br:{"^":"b;a",
K:function(a){var z,y
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
k:function(a){return"[0] "+this.N(0).k(0)+"\n[1] "+this.N(1).k(0)+"\n[2] "+this.N(2).k(0)+"\n"},
h:function(a,b){return C.e.h(this.a,H.i(b))},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.br){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gA:function(a){return A.by(this.a)},
N:function(a){var z,y,x
z=new Float32Array(3)
y=this.a
if(a>=9)return H.n(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.n(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.n(y,x)
z[2]=y[x]
return new T.p(z)},
dB:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if(m===0){this.K(a)
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
return m}},a1:{"^":"b;a",
K:function(a){var z,y
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
k:function(a){return"[0] "+this.N(0).k(0)+"\n[1] "+this.N(1).k(0)+"\n[2] "+this.N(2).k(0)+"\n[3] "+this.N(3).k(0)+"\n"},
h:function(a,b){return C.e.h(this.a,H.i(b))},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a1){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gA:function(a){return A.by(this.a)},
N:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.n(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.n(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.n(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.n(y,x)
z[3]=y[x]
return new T.b5(z)},
a4:function(a4,a5,a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
z=Math.sqrt(a5.gbN())
y=a5.a
x=y[0]/z
w=y[1]/z
v=y[2]/z
u=Math.cos(a6)
t=Math.sin(a6)
s=1-u
r=x*x*s+u
q=v*t
p=x*w*s-q
o=w*t
n=x*v*s+o
m=w*x*s+q
l=w*w*s+u
q=x*t
k=w*v*s-q
j=v*x*s-o
i=v*w*s+q
h=v*v*s+u
q=this.a
o=q[0]
g=q[4]
f=q[8]
e=q[1]
d=q[5]
c=q[9]
b=q[2]
a=q[6]
a0=q[10]
a1=q[3]
a2=q[7]
a3=q[11]
q[0]=o*r+g*m+f*j
q[1]=e*r+d*m+c*j
q[2]=b*r+a*m+a0*j
q[3]=a1*r+a2*m+a3*j
q[4]=o*p+g*l+f*i
q[5]=e*p+d*l+c*i
q[6]=b*p+a*l+a0*i
q[7]=a1*p+a2*l+a3*i
q[8]=o*n+g*k+f*h
q[9]=e*n+d*k+c*h
q[10]=b*n+a*k+a0*h
q[11]=a1*n+a2*k+a3*h},
O:function(){var z=this.a
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
bP:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},A:{"^":"b;a",
v:function(a,b){var z=this.a
z[0]=a
z[1]=b},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.A){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gA:function(a){return A.by(this.a)},
h:function(a,b){return C.e.h(this.a,H.i(b))},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gah:function(a){return this.a[0]},
ga5:function(a){return this.a[1]}},p:{"^":"b;a",
q:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
K:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.p){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gA:function(a){return A.by(this.a)},
h:function(a,b){return C.e.h(this.a,H.i(b))},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gbN:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
aC:function(a){var z,y,x
z=Math.sqrt(this.gbN())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aA:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bF:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.p(new Float32Array(3))
z.q(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
gah:function(a){return this.a[0]},
ga5:function(a){return this.a[1]},
gcf:function(a){return this.a[2]},
p:{
b4:function(a,b,c){var z=new T.p(new Float32Array(3))
z.q(a,b,c)
return z}}},b5:{"^":"b;a",
k:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.b5){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gA:function(a){return A.by(this.a)},
h:function(a,b){return C.e.h(this.a,H.i(b))},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gah:function(a){return this.a[0]},
ga5:function(a){return this.a[1]},
gcf:function(a){return this.a[2]},
ge3:function(a){return this.a[3]}}}],["","",,Q,{"^":"",
ei:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
z={}
y=document
x=C.j.cj(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.ih(0,0,x,w,y.createElement("div"),R.jj("blue","gray",90,30))
u.cP(x,"blue","gray")
t=H.h(C.j.bW(y,"#webgl-canvas"),"$iscd")
s=new G.fE(t)
x=P.d
v=P.b
r=(t&&C.y).aH(t,"webgl2",P.dh(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],x,v))
s.a=r
if(r==null)H.W(P.d8('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
q="ChronosGL Config: "+H.e(J.fd(r))
if($.ed>0)P.aB("I: "+q)
J.eV(r,0,0,0,1)
J.bi(r,2929)
J.bi(r,2884)
r=new Float32Array(3)
q=D.hm(null)
p=D.hA(t)
o=new T.a1(new Float32Array(16))
o.O()
n=new Float32Array(3)
m=new Float32Array(3)
l=new Float32Array(3)
k=new D.hM(65,0,0,0,new T.p(r),-0.02,q,p,o,new T.p(n),new T.p(m),new T.p(l),new T.p(new Float32Array(3)),"camera:orbit",!1,!0)
r=new T.a1(new Float32Array(16))
r.O()
q=new T.a1(new Float32Array(16))
q.O()
j=new G.hO(k,50,1,0.1,1000,r,q,new T.a1(new Float32Array(16)),P.Y(x,v),"perspective",!1,!0)
j.b1()
r=[A.bs]
q=H.j([],r)
i=new R.i2(t,j,null,s,q,17664,0,0,0,0,"main",!1,!0)
i.cL("main",s,null)
i.dV(null)
p=W.R
o={func:1,ret:-1,args:[p]}
W.ag(window,"resize",H.m(i.gdU(),o),!1,p)
n=G.bO("plasma1",s,$.eI(),$.eF())
m=[G.b2]
l=H.j([j],m)
h=[A.cn]
g=H.j([],h)
f=G.bO("plasma2",s,$.eJ(),$.eG())
e=H.j([j],m)
d=H.j([],h)
c=G.bO("plasma3",s,$.eK(),$.eH())
b=H.j([j],m)
a=H.j([],h)
a0=H.j([new A.bs(n,l,g,"plasma1",!1,!0),new A.bs(f,e,d,"plasma2",!1,!0),new A.bs(c,b,a,"plasma3",!1,!0)],r)
for(a1=0;a1<3;++a1)C.a.l(q,a0[a1])
r=P.Y(x,v)
a2=new G.dl(r,"mat",!1,!0)
r.i(0,"cDepthTest",!0)
r.i(0,"cDepthWrite",!0)
r.i(0,"cBlendEquation",$.eo())
n=$.er()
r.i(0,"cStencilFunc",n)
r=a0[0].d
a3=B.fO(!0,1,0,1,0,10,10,10)
a4=G.dm("cube",r.d,4,r.e.x)
a4.aa(G.db(a3.d,null))
r=H.z(a3.cH(),"$isa",[P.E],"$asa")
l=a4.d
a4.y=J.c6(l.a)
g=a4.ch.length
if(g<768){a4.sar(new Uint8Array(H.bS(r)))
a4.Q=5121}else if(g<196608){a4.sar(new Uint16Array(H.bS(r)))
a4.Q=5123}else{a4.sar(new Uint32Array(H.bS(r)))
a4.Q=5125}J.bE(l.a,a4.e)
r=a4.y
g=a4.cx
J.c4(l.a,34963,r)
J.cK(l.a,34963,g,35048)
G.j9(a3,a4)
r=H.j([],h)
l=new Float32Array(9)
g=new T.a1(new Float32Array(16))
g.O()
f=new Float32Array(16)
e=new T.a1(f)
e.O()
d=new Float32Array(3)
c=new Float32Array(3)
b=new Float32Array(3)
a=new Float32Array(3)
a5=new T.p(a)
a6=new A.cn(a2,a4,r,new T.br(l),g,e,new T.p(d),new T.p(c),new T.p(b),a5,a4.a,!1,!0)
a6.aT(0,0,0)
a[0]=f[0]
a[1]=f[4]
a[2]=f[8]
e.a4(0,a5,-1)
e.a4(0,a6.aQ(),-0.7)
z.a=0
if(0>=3)return H.n(a0,0)
C.a.l(a0[0].f,a6)
C.j.dl(y,"keypress",new Q.kG(z,a0,a6))
a7=H.ad(C.j.bW(y,"#myselect"),"$isdu")
a7.toString
W.ag(a7,"change",H.m(new Q.kH(z,a0,a6,a7),o),!1,p)
p=G.bO("stars",s,$.eM(),$.eL())
m=H.j([j],m)
o=H.j([],h)
r=p.d
l=$.en()
v=P.Y(x,v)
v.i(0,"cDepthTest",!0)
v.i(0,"cDepthWrite",!1)
v.i(0,"cBlendEquation",l)
v.i(0,"cStencilFunc",n)
a8=y.createElement("canvas")
a8.width=64
a8.height=64
a9=H.h(C.y.ci(a8,"2d"),"$isce")
b0=(a9&&C.r).bC(a9,32,32,1,32,32,22);(b0&&C.n).ae(b0,0,"gray")
C.n.ae(b0,1,"black")
a9.fillStyle=b0
C.r.dK(a9,0,0,64,64)
b0=C.r.bC(a9,32,32,1,32,32,6);(b0&&C.n).ae(b0,0,"white")
C.n.ae(b0,1,"gray")
a9.globalAlpha=0.9
a9.fillStyle=b0
a9.arc(32,32,4,0,6.283185307179586,!1)
a9.fill()
y=J.eY(r.a)
J.bh(r.a,3553,y)
J.fi(r.a,37440,1)
J.bh(r.a,3553,y)
J.fl(r.a,3553,0,6408,6408,5121,a8)
J.cO(r.a,3553,10240,9729)
J.cO(r.a,3553,10241,9729)
J.fe(r.a)
J.bh(r.a,3553,null)
v.i(0,"uTexture",new G.hc(a8,"Utils::Particles",y,3553,r,new G.iq(!1,!1,!1,!0,1,9729,9729)))
v.i(0,"uPointSize",1000)
a4=R.iy(p,2000,100)
y=H.j([],h)
x=new Float32Array(9)
r=new T.a1(new Float32Array(16))
r.O()
n=new T.a1(new Float32Array(16))
n.O()
l=new Float32Array(3)
h=new Float32Array(3)
g=new Float32Array(3)
C.a.l(o,new A.cn(new G.dl(v,"stars",!1,!0),a4,y,new T.br(x),r,n,new T.p(l),new T.p(h),new T.p(g),new T.p(new Float32Array(3)),a4.a,!1,!0))
C.a.l(q,new A.bs(p,m,o,"stars",!1,!0))
z.b=0
new Q.kF(z,k,a6,a2,i,u).$1(0)},
kG:{"^":"o:12;a,b,c",
$1:function(a){var z,y,x,w
H.h(a,"$isR")
z=this.b
y=this.a
x=y.a
if(typeof x!=="number")return x.a7()
w=this.c
C.a.a3(z[C.b.a7(x,3)].f,w)
x=y.a
if(typeof x!=="number")return x.G()
C.a.l(z[C.b.a7(x+1,3)].f,w)
w=y.a
if(typeof w!=="number")return w.G()
y.a=C.b.a7(w+1,3)}},
kH:{"^":"o:12;a,b,c,d",
$1:function(a){var z,y,x,w
z=this.b
y=this.a
x=this.c
C.a.a3(C.a.h(z,y.a).f,x)
w=this.d.selectedIndex
y.a=w
C.a.l(C.a.h(z,w).f,x)}},
kF:{"^":"o:28;a,b,c,d,e,f",
$1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.cC(a)
z=this.a
y=z.b
if(typeof a!=="number")return a.aW()
z.b=a+0
x=this.b
x.cx+=0.001
w=x.fx
v=w.a
if(v.w(0,0)||v.w(0,1)){v=x.cx
u=w.d
if(typeof u!=="number")return u.aR()
x.cx=v+u*0.01
u=x.cy
v=w.e
if(typeof v!=="number")return v.aR()
x.cy=u+v*0.01}v=x.fr
u=v.a
if(u.w(0,37))x.cx+=0.03
else if(u.w(0,39))x.cx-=0.03
if(u.w(0,38))x.cy+=0.03
else if(u.w(0,40))x.cy-=0.03
if(u.w(0,33))x.ch*=0.99
else if(u.w(0,34))x.ch*=1.01
if(u.w(0,32)){x.cx=0
x.cy=0}u=w.f
if(typeof u!=="number")return u.aR()
u=x.ch-u*x.dy
if(u>0)x.ch=u
u=C.u.dz(x.cy,-1.4707963267948965,1.4707963267948965)
x.cy=u
t=x.ch
s=x.cx
r=t*Math.cos(u)
x.aT(r*Math.cos(s),t*Math.sin(u),r*Math.sin(s))
s=x.d
u=s.a
t=x.dx.a
u[12]=u[12]+t[0]
u[13]=u[13]+t[1]
u[14]=u[14]+t[2]
q=new T.p(new Float32Array(3))
q.q(0,1,0)
p=x.aJ()
o=new Float32Array(3)
n=new T.p(o)
n.K(p)
o[0]=o[0]-t[0]
o[1]=o[1]-t[1]
o[2]=o[2]-t[2]
n.aC(0)
m=q.bF(n)
m.aC(0)
l=n.bF(m)
l.aC(0)
t=m.aA(p)
k=l.aA(p)
p=n.aA(p)
j=m.a
i=j[0]
h=l.a
g=h[0]
f=o[0]
e=j[1]
d=h[1]
c=o[1]
j=j[2]
h=h[2]
o=o[2]
u[15]=1
u[14]=-p
u[13]=-k
u[12]=-t
u[11]=0
u[10]=o
u[9]=h
u[8]=j
u[7]=0
u[6]=c
u[5]=d
u[4]=e
u[3]=0
u[2]=f
u[1]=g
u[0]=i
s.a4(0,x.aG(),-x.db)
v.c.a1(0)
v.b.a1(0)
w.e=0
w.d=0
w.f=0
w.c.a1(0)
w.b.a1(0)
w=this.c
v=w.d
y=-((a-y)*0.0005)
v.a4(0,w.aG(),y)
v.a4(0,w.aQ(),y)
this.d.d.i(0,"uTime",a/1000)
this.e.cE()
C.af.gdq(window).c_(this,-1)
this.f.cR(z.b)}}},1]]
setupProgram(dart,0,0)
J.C=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.de.prototype
return J.dd.prototype}if(typeof a=="string")return J.bp.prototype
if(a==null)return J.hj.prototype
if(typeof a=="boolean")return J.hi.prototype
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.c0(a)}
J.bc=function(a){if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.c0(a)}
J.bZ=function(a){if(a==null)return a
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.c0(a)}
J.ko=function(a){if(typeof a=="number")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b3.prototype
return a}
J.kp=function(a){if(typeof a=="number")return J.bo.prototype
if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b3.prototype
return a}
J.ee=function(a){if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b3.prototype
return a}
J.k=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.c0(a)}
J.c_=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.b3.prototype
return a}
J.aj=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.C(a).D(a,b)}
J.a7=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.ko(a).T(a,b)}
J.bg=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kC(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bc(a).h(a,b)}
J.eN=function(a,b,c){return J.bZ(a).i(a,b,c)}
J.cH=function(a,b){return J.ee(a).an(a,b)}
J.bD=function(a,b){return J.k(a).da(a,b)}
J.eO=function(a,b,c){return J.k(a).dc(a,b,c)}
J.cI=function(a,b){return J.k(a).bm(a,b)}
J.eP=function(a,b,c,d){return J.k(a).bn(a,b,c,d)}
J.cJ=function(a,b,c){return J.k(a).bp(a,b,c)}
J.eQ=function(a,b){return J.k(a).ds(a,b)}
J.c4=function(a,b,c){return J.k(a).bq(a,b,c)}
J.eR=function(a,b,c){return J.k(a).bs(a,b,c)}
J.bh=function(a,b,c){return J.k(a).bt(a,b,c)}
J.bE=function(a,b){return J.k(a).dv(a,b)}
J.eS=function(a,b){return J.k(a).bu(a,b)}
J.eT=function(a,b,c){return J.k(a).bv(a,b,c)}
J.cK=function(a,b,c,d){return J.k(a).bw(a,b,c,d)}
J.eU=function(a,b){return J.k(a).bx(a,b)}
J.eV=function(a,b,c,d,e){return J.k(a).by(a,b,c,d,e)}
J.eW=function(a,b){return J.kp(a).L(a,b)}
J.c5=function(a,b,c){return J.bc(a).dA(a,b,c)}
J.c6=function(a){return J.k(a).bA(a)}
J.eX=function(a){return J.k(a).bB(a)}
J.eY=function(a){return J.k(a).bE(a)}
J.eZ=function(a){return J.k(a).dF(a)}
J.f_=function(a,b){return J.k(a).bG(a,b)}
J.c7=function(a,b){return J.k(a).bH(a,b)}
J.f0=function(a,b,c,d){return J.k(a).bI(a,b,c,d)}
J.f1=function(a,b,c,d,e){return J.k(a).dH(a,b,c,d,e)}
J.f2=function(a,b,c,d,e){return J.k(a).bJ(a,b,c,d,e)}
J.f3=function(a,b,c,d,e,f){return J.k(a).dI(a,b,c,d,e,f)}
J.f4=function(a,b){return J.bZ(a).t(a,b)}
J.bi=function(a,b){return J.k(a).bK(a,b)}
J.f5=function(a,b){return J.k(a).bL(a,b)}
J.f6=function(a){return J.k(a).dJ(a)}
J.f7=function(a,b){return J.k(a).E(a,b)}
J.f8=function(a){return J.k(a).gdr(a)}
J.ak=function(a){return J.C(a).gA(a)}
J.aO=function(a){return J.bZ(a).gC(a)}
J.f9=function(a){return J.k(a).gF(a)}
J.aD=function(a){return J.bc(a).gj(a)}
J.fa=function(a){return J.k(a).gdS(a)}
J.fb=function(a){return J.k(a).gdZ(a)}
J.fc=function(a){return J.c_(a).ge3(a)}
J.bF=function(a){return J.c_(a).gah(a)}
J.c8=function(a){return J.c_(a).ga5(a)}
J.cL=function(a){return J.c_(a).gcf(a)}
J.c9=function(a,b){return J.k(a).Z(a,b)}
J.fd=function(a){return J.k(a).ai(a)}
J.fe=function(a){return J.k(a).aI(a)}
J.ff=function(a,b){return J.k(a).aK(a,b)}
J.fg=function(a,b,c){return J.k(a).aL(a,b,c)}
J.cM=function(a,b,c){return J.k(a).aP(a,b,c)}
J.fh=function(a,b){return J.k(a).bO(a,b)}
J.fi=function(a,b,c){return J.k(a).bV(a,b,c)}
J.cN=function(a){return J.bZ(a).dT(a)}
J.fj=function(a,b,c){return J.k(a).cl(a,b,c)}
J.fk=function(a,b,c,d){return J.k(a).aV(a,b,c,d)}
J.fl=function(a,b,c,d,e,f,g){return J.k(a).bY(a,b,c,d,e,f,g)}
J.cO=function(a,b,c,d){return J.k(a).bZ(a,b,c,d)}
J.fm=function(a){return J.ee(a).e_(a)}
J.bj=function(a){return J.C(a).k(a)}
J.fn=function(a,b,c,d){return J.k(a).e1(a,b,c,d)}
J.fo=function(a,b,c){return J.k(a).c2(a,b,c)}
J.fp=function(a,b,c){return J.k(a).c3(a,b,c)}
J.ca=function(a,b,c){return J.k(a).c4(a,b,c)}
J.fq=function(a,b,c){return J.k(a).c5(a,b,c)}
J.cP=function(a,b,c){return J.k(a).c6(a,b,c)}
J.cQ=function(a,b,c){return J.k(a).c7(a,b,c)}
J.cR=function(a,b,c){return J.k(a).c8(a,b,c)}
J.cS=function(a,b,c,d){return J.k(a).c9(a,b,c,d)}
J.cT=function(a,b,c,d){return J.k(a).ca(a,b,c,d)}
J.fr=function(a,b){return J.k(a).cb(a,b)}
J.fs=function(a,b,c){return J.k(a).e2(a,b,c)}
J.ft=function(a,b,c,d,e,f,g){return J.k(a).cc(a,b,c,d,e,f,g)}
J.fu=function(a,b,c,d,e){return J.k(a).ce(a,b,c,d,e)}
I.aM=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.q=W.bG.prototype
C.y=W.cd.prototype
C.n=W.fC.prototype
C.r=W.ce.prototype
C.z=W.fL.prototype
C.t=W.fT.prototype
C.M=W.fV.prototype
C.N=W.ha.prototype
C.j=W.hb.prototype
C.O=J.f.prototype
C.a=J.bn.prototype
C.A=J.dd.prototype
C.b=J.de.prototype
C.u=J.bo.prototype
C.i=J.bp.prototype
C.V=J.bq.prototype
C.e=H.hF.prototype
C.o=H.hH.prototype
C.D=W.hI.prototype
C.E=J.hP.prototype
C.F=W.hZ.prototype
C.K=W.io.prototype
C.x=J.b3.prototype
C.ae=W.aH.prototype
C.af=W.iB.prototype
C.L=new P.jd()
C.f=new P.jv()
C.P=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.Q=function(hooks) {
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
C.B=function(hooks) { return hooks; }

C.R=function(getTagFallback) {
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
C.S=function() {
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
C.T=function(hooks) {
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
C.U=function(hooks) {
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
C.C=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.W=H.j(I.aM(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.X=H.j(I.aM(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.Y=H.j(I.aM([]),[P.d])
C.v=H.j(I.aM(["bind","if","ref","repeat","syntax"]),[P.d])
C.w=H.j(I.aM(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
C.Z=new G.D("vec3","vertex btangents",0)
C.d=new G.D("vec3","",0)
C.a_=new G.D("vec4","delta from light",0)
C.p=new G.D("","",0)
C.G=new G.D("vec3","vertex coordinates",0)
C.a0=new G.D("vec3","vertex binormals",0)
C.H=new G.D("vec4","for wireframe",0)
C.a1=new G.D("vec4","per vertex color",0)
C.a2=new G.D("float","for normal maps",0)
C.k=new G.D("mat4","",0)
C.a4=new G.D("mat4","",4)
C.a3=new G.D("mat4","",128)
C.c=new G.D("float","",0)
C.a5=new G.D("float","",4)
C.a6=new G.D("float","depth for shadowmaps",0)
C.h=new G.D("sampler2D","",0)
C.a7=new G.D("float","for bump maps",0)
C.a8=new G.D("vec2","texture uvs",0)
C.a9=new G.D("float","time since program start in sec",0)
C.l=new G.D("vec2","",0)
C.aa=new G.D("samplerCube","",0)
C.m=new G.D("vec4","",0)
C.ab=new G.D("vec3","vertex normals",0)
C.ac=new G.D("sampler2DShadow","",0)
C.I=new G.D("vec3","per vertex color",0)
C.J=new G.D("mat3","",0)
C.ad=new G.D("vec3","vertex tangents",0)
$.a8=0
$.aP=null
$.cW=null
$.ct=!1
$.eg=null
$.e8=null
$.el=null
$.bX=null
$.c1=null
$.cA=null
$.aJ=null
$.b7=null
$.b8=null
$.cu=!1
$.J=C.f
$.ae=null
$.cg=null
$.d6=null
$.d5=null
$.d2=null
$.d1=null
$.d0=null
$.d_=null
$.ed=0
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
I.$lazy(y,x,w)}})(["l0","eq",function(){return H.ef("_$dart_dartClosure")},"lE","cE",function(){return H.ef("_$dart_js")},"mn","es",function(){return H.aa(H.bP({
toString:function(){return"$receiver$"}}))},"mo","et",function(){return H.aa(H.bP({$method$:null,
toString:function(){return"$receiver$"}}))},"mp","eu",function(){return H.aa(H.bP(null))},"mq","ev",function(){return H.aa(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"mt","ey",function(){return H.aa(H.bP(void 0))},"mu","ez",function(){return H.aa(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ms","ex",function(){return H.aa(H.dD(null))},"mr","ew",function(){return H.aa(function(){try{null.$method$}catch(z){return z.message}}())},"mw","eB",function(){return H.aa(H.dD(void 0))},"mv","eA",function(){return H.aa(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mH","cF",function(){return P.iE()},"mY","bf",function(){return[]},"kY","ep",function(){return{}},"mP","eE",function(){return P.cl(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"mQ","cG",function(){return P.Y(P.d,P.bl)},"ma","er",function(){return new G.dC(1281,0,4294967295)},"kV","eo",function(){return G.dB(1281,1281,1281)},"kU","en",function(){return G.dB(32774,770,769)},"mW","a6",function(){return P.dh(["cBlendEquation",C.p,"cDepthWrite",C.p,"cDepthTest",C.p,"cStencilFunc",C.p,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.I,"aColorAlpha",C.a1,"aPosition",C.G,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.H,"aPointSize",C.c,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.m,"iaTranslation",C.d,"iaScale",C.c,"iaColor",C.d,"vColor",C.I,"vTexUV",C.l,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.G,"vPositionFromLight",C.a_,"vCenter",C.H,"vDepth",C.a6,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.J,"uConvolutionMatrix",C.J,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.ac,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.aa,"uAnimationTable",C.h,"uTime",C.a9,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.d,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.c,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2],P.d,G.D)},"mB","eC",function(){return C.L},"n8","eM",function(){var z,y
z=G.ar("PointSpritesV")
y=[P.d]
z.a9(H.j(["aPosition"],y))
z.P(H.j(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"],y))
z.b0(H.j(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"],y))
return z},"n7","eL",function(){var z,y
z=G.ar("PointSpritesF")
y=[P.d]
z.P(H.j(["uTexture"],y))
z.b0(H.j(["oFragColor = texture( uTexture,  gl_PointCoord);"],y))
return z},"mM","eD",function(){return H.j([T.b4(0,0,1),T.b4(0,0,-1),T.b4(0,1,0),T.b4(0,-1,0),T.b4(1,0,0),T.b4(-1,0,0)],[T.p])},"n4","eI",function(){var z,y
z=G.ar("Plasma1V")
y=[P.d]
z.a9(H.j(["aPosition","aTexUV"],y))
z.P(H.j(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.U(H.j(["vTexUV"],y))
z.V(H.j(["void main() {\n  gl_Position = uPerspectiveViewMatrix * \n                uModelMatrix * \n                vec4(aPosition, 1.0);\n  vTexUV = aTexUV;\n}\n"],y))
return z},"n1","eF",function(){var z,y
z=G.ar("Plasma1F")
y=[P.d]
z.U(H.j(["vTexUV"],y))
z.P(H.j(["uTime"],y))
z.V(H.j(["void main() {  \n    #define PI 3.1415926535897932384626433832795\n    float u_time = uTime * 5.0;\n    vec2 u_k = vec2(10.0,10.0);\n\n    float v = 0.0;\n    vec2 c = vTexUV * u_k - u_k/2.0;\n    v += sin((c.x+u_time));\n    v += sin((c.y+u_time)/2.0);\n    v += sin((c.x+c.y+u_time)/2.0);\n    c += u_k/2.0 * vec2(sin(u_time/3.0), cos(u_time/2.0));\n    v += sin(sqrt(c.x*c.x+c.y*c.y+1.0)+u_time);\n    v = v / 2.0;\n    vec3 col1 = vec3(1.0, sin(PI*v), cos(PI*v));\n    vec3 col2 = vec3(sin(PI*v), cos(PI*v), -1.0);\n    vec3 col = mix(col1, col2, sin(u_time)*.5+.5);\n    oFragColor = vec4(col*.5 + .5, 1.0);\n}\n"],y))
return z},"n5","eJ",function(){var z,y
z=G.ar("Plasma2V")
y=[P.d]
z.a9(H.j(["aPosition","aTexUV"],y))
z.P(H.j(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.U(H.j(["vTexUV"],y))
z.V(H.j(["void main() {\n  gl_Position = uPerspectiveViewMatrix * \n                uModelMatrix * \n                vec4(aPosition, 1.0);\n  vTexUV = aTexUV;\n}\n"],y))
return z},"n2","eG",function(){var z,y
z=G.ar("Plasma2F")
y=[P.d]
z.U(H.j(["vTexUV"],y))
z.P(H.j(["uTime"],y))
z.V(H.j(["void main() {  \n    float x = vTexUV.x;\n    float y = vTexUV.y;\n    float v = sin(x * cos(uTime/15.0) * 120.0) +\n              cos(y * sin(uTime/10.0) * 120.0) +\n              sin(sqrt(y * y + x * x) * 40.0);\n    oFragColor = vec4(1, v,1,1);\n}\n  "],y))
return z},"n6","eK",function(){var z,y
z=G.ar("Plasma3V")
y=[P.d]
z.a9(H.j(["aPosition","aTexUV"],y))
z.P(H.j(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.U(H.j(["vTexUV"],y))
z.V(H.j(["void main() {\n  gl_Position = uPerspectiveViewMatrix * \n                uModelMatrix * \n                vec4(aPosition, 1.0);\n  vTexUV = aTexUV;\n}\n"],y))
return z},"n3","eH",function(){var z,y
z=G.ar("Plasma3F")
y=[P.d]
z.U(H.j(["vTexUV"],y))
z.P(H.j(["uTime"],y))
z.V(H.j(["void main() {  \n    float x = vTexUV.x*1000.0; // gl_FragCoord.x;\n    float y = vTexUV.y*1000.0; // gl_FragCoord.y;\n    float time = uTime;\n    float mov0 = x+y+cos(sin(time)*2.)*100.+sin(x/100.)*1000.;\n    float mov1 = y / 720.0 / 0.2 + time;\n    float mov2 = x / 1280.0 / 0.2;\n    float c1 = abs(sin(mov1+time)/2.+mov2/2.-mov1-mov2+time);\n    float c2 = abs(sin(c1+sin(mov0/1000.+time)+sin(y/40.+time)+sin((x+y)/100.)*3.));\n    float c3 = abs(sin(c2+cos(mov1+mov2+c2)+cos(mov2)+sin(x/1000.)));\n    oFragColor = vec4( c1,c2,c3,1.0);\n}\n  "],y))
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:P.F,args:[W.T]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.F,args:[,]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.d,args:[P.E]},{func:1,ret:P.P,args:[W.a9]},{func:1,ret:P.P,args:[P.d]},{func:1,ret:P.F,args:[W.aU]},{func:1,ret:P.F,args:[W.R]},{func:1,ret:P.P,args:[W.Q,P.d,P.d,W.bv]},{func:1,args:[,P.d]},{func:1,args:[P.d]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[,],opt:[P.a2]},{func:1,ret:[P.ab,,],args:[,]},{func:1,ret:P.P,args:[W.v]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.F,args:[P.G]},{func:1,args:[W.R]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.v,W.v]},{func:1,ret:-1,args:[W.R]},{func:1,ret:P.F,args:[W.aH]},{func:1,ret:P.E,args:[P.E,P.b]},{func:1,ret:-1,args:[P.G]},{func:1,ret:P.E,args:[,,]}]
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
if(x==y)H.kN(d||a)
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
Isolate.bb=a.bb
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
//# sourceMappingURL=plasma.dart.js.map
