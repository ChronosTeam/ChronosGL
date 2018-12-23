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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isj)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cT"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cT"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cT(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bq=function(){}
var dart=[["","",,H,{"^":"",n1:{"^":"c;a"}}],["","",,J,{"^":"",
cY:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cd:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cW==null){H.lO()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(P.cL("Return interceptor for "+H.d(y(a,z))))}w=a.constructor
v=w==null?null:w[$.d_()]
if(v!=null)return v
v=H.lT(a)
if(v!=null)return v
if(typeof a=="function")return C.T
y=Object.getPrototypeOf(a)
if(y==null)return C.C
if(y===Object.prototype)return C.C
if(typeof w=="function"){Object.defineProperty(w,$.d_(),{value:C.x,enumerable:false,writable:true,configurable:true})
return C.x}return C.x},
j:{"^":"c;",
D:function(a,b){return a===b},
gw:function(a){return H.bh(a)},
k:["cK",function(a){return"Instance of '"+H.bi(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
i3:{"^":"j;",
k:function(a){return String(a)},
gw:function(a){return a?519018:218159},
$isU:1},
i4:{"^":"j;",
D:function(a,b){return null==b},
k:function(a){return"null"},
gw:function(a){return 0},
$isz:1},
cA:{"^":"j;",
gw:function(a){return 0},
k:["cM",function(a){return String(a)}]},
iP:{"^":"cA;"},
bm:{"^":"cA;"},
bE:{"^":"cA;",
k:function(a){var z=a[$.eX()]
if(z==null)return this.cM(a)
return"JavaScript function for "+H.d(J.bw(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbz:1},
bB:{"^":"j;$ti",
j:function(a,b){H.y(b,H.o(a,0))
if(!!a.fixed$length)H.a0(P.D("add"))
a.push(b)},
J:function(a,b){var z
H.r(b,"$isl",[H.o(a,0)],"$asl")
if(!!a.fixed$length)H.a0(P.D("addAll"))
for(z=0;z<1;++z)a.push(b[z])},
a9:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.h(z,y,H.d(a[y]))
return z.join(b)},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
gee:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.b(H.cy())},
by:function(a,b){var z,y
H.k(b,{func:1,ret:P.U,args:[H.o(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.b(P.aS(a))}return!1},
cF:function(a,b){if(!!a.immutable$list)H.a0(P.D("sort"))
H.jh(a,J.lm(),H.o(a,0))},
ao:function(a){return this.cF(a,null)},
v:function(a,b){var z
for(z=0;z<a.length;++z)if(J.V(a[z],b))return!0
return!1},
k:function(a){return P.cx(a,"[","]")},
gu:function(a){return new J.h8(a,a.length,0,[H.o(a,0)])},
gw:function(a){return H.bh(a)},
gl:function(a){return a.length},
i:function(a,b){if(b>=a.length||b<0)throw H.b(H.aq(a,b))
return a[b]},
h:function(a,b,c){H.v(b)
H.y(c,H.o(a,0))
if(!!a.immutable$list)H.a0(P.D("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.aq(a,b))
if(b>=a.length||b<0)throw H.b(H.aq(a,b))
a[b]=c},
$isx:1,
$asx:I.bq,
$isl:1,
$isa:1,
p:{
i2:function(a,b){return J.cz(H.h(a,[b]))},
cz:function(a){H.br(a)
a.fixed$length=Array
return a},
n_:[function(a,b){return J.fv(H.eM(a,"$isa1"),H.eM(b,"$isa1"))},"$2","lm",8,0,34]}},
n0:{"^":"bB;$ti"},
h8:{"^":"c;a,b,c,0d,$ti",
sbc:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
q:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.F(z))
x=this.c
if(x>=y){this.sbc(null)
return!1}this.sbc(z[x]);++this.c
return!0},
$isay:1},
bC:{"^":"j;",
N:function(a,b){var z
H.cZ(b)
if(typeof b!=="number")throw H.b(H.an(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gaj(b)
if(this.gaj(a)===z)return 0
if(this.gaj(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaj:function(a){return a===0?1/a<0:a<0},
ce:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.b(P.D(""+a+".toInt()"))},
dS:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.b(P.D(""+a+".ceil()"))},
e8:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.b(P.D(""+a+".floor()"))},
dT:function(a,b,c){if(this.N(b,c)>0)throw H.b(H.an(b))
if(this.N(a,b)<0)return b
if(this.N(a,c)>0)return c
return a},
ep:function(a,b){var z
if(b>20)throw H.b(P.bj(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gaj(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw:function(a){return a&0x1FFFFFFF},
cO:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bv(a,b)},
Y:function(a,b){return(a|0)===a?a/b|0:this.bv(a,b)},
bv:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.b(P.D("Result of truncating division is "+H.d(z)+": "+H.d(a)+" ~/ "+b))},
bt:function(a,b){var z
if(a>0)z=this.dF(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dF:function(a,b){return b>31?0:a>>>b},
V:function(a,b){if(typeof b!=="number")throw H.b(H.an(b))
return a>b},
$isa1:1,
$asa1:function(){return[P.H]},
$isar:1,
$isH:1},
dF:{"^":"bC;",$isC:1},
dE:{"^":"bC;"},
bD:{"^":"j;",
bJ:function(a,b){if(b<0)throw H.b(H.aq(a,b))
if(b>=a.length)H.a0(H.aq(a,b))
return a.charCodeAt(b)},
a6:function(a,b){if(b>=a.length)throw H.b(H.aq(a,b))
return a.charCodeAt(b)},
F:function(a,b){H.u(b)
if(typeof b!=="string")throw H.b(P.dh(b,null,null))
return a+b},
cG:function(a,b){var z=H.h(a.split(b),[P.e])
return z},
cI:function(a,b,c){var z
if(c>a.length)throw H.b(P.bj(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cH:function(a,b){return this.cI(a,b,0)},
b3:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.c0(b,null,null))
if(b>c)throw H.b(P.c0(b,null,null))
if(c>a.length)throw H.b(P.c0(c,null,null))
return a.substring(b,c)},
cJ:function(a,b){return this.b3(a,b,null)},
eo:function(a){return a.toLowerCase()},
er:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.a6(z,0)===133){x=J.i5(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.bJ(z,w)===133?J.i6(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
dW:function(a,b,c){if(c>a.length)throw H.b(P.bj(c,0,a.length,null,null))
return H.m2(a,b,c)},
N:function(a,b){var z
H.u(b)
if(typeof b!=="string")throw H.b(H.an(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
k:function(a){return a},
gw:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
i:function(a,b){if(b>=a.length||!1)throw H.b(H.aq(a,b))
return a[b]},
$isx:1,
$asx:I.bq,
$isa1:1,
$asa1:function(){return[P.e]},
$isdS:1,
$ise:1,
p:{
dG:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
i5:function(a,b){var z,y
for(z=a.length;b<z;){y=C.h.a6(a,b)
if(y!==32&&y!==13&&!J.dG(y))break;++b}return b},
i6:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.h.bJ(a,z)
if(y!==32&&y!==13&&!J.dG(y))break}return b}}}}],["","",,H,{"^":"",
cy:function(){return new P.cI("No element")},
i1:function(){return new P.cI("Too many elements")},
jh:function(a,b,c){H.r(a,"$isa",[c],"$asa")
H.k(b,{func:1,ret:P.C,args:[c,c]})
H.bG(a,0,J.b6(a)-1,b,c)},
bG:function(a,b,c,d,e){H.r(a,"$isa",[e],"$asa")
H.k(d,{func:1,ret:P.C,args:[e,e]})
if(c-b<=32)H.jg(a,b,c,d,e)
else H.jf(a,b,c,d,e)},
jg:function(a,b,c,d,e){var z,y,x,w,v
H.r(a,"$isa",[e],"$asa")
H.k(d,{func:1,ret:P.C,args:[e,e]})
for(z=b+1,y=J.b3(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.ad(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.h(a,w,y.i(a,v))
w=v}y.h(a,w,x)}},
jf:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.r(a,"$isa",[a2],"$asa")
H.k(a1,{func:1,ret:P.C,args:[a2,a2]})
z=C.f.Y(a0-b+1,6)
y=b+z
x=a0-z
w=C.f.Y(b+a0,2)
v=w-z
u=w+z
t=J.b3(a)
s=t.i(a,y)
r=t.i(a,v)
q=t.i(a,w)
p=t.i(a,u)
o=t.i(a,x)
if(J.ad(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.ad(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.ad(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.ad(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.ad(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.ad(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.ad(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.ad(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.ad(a1.$2(p,o),0)){n=o
o=p
p=n}t.h(a,y,s)
t.h(a,w,q)
t.h(a,x,o)
t.h(a,v,t.i(a,b))
t.h(a,u,t.i(a,a0))
m=b+1
l=a0-1
if(J.V(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.i(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.aa()
if(i<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.V()
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
if(typeof e!=="number")return e.aa()
if(e<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.V()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.V()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.aa()
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
H.bG(a,b,m-2,a1,a2)
H.bG(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.V(a1.$2(t.i(a,m),r),0);)++m
for(;J.V(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.aa()
h=l-1
if(i<0){t.h(a,k,t.i(a,m))
g=m+1
t.h(a,m,t.i(a,l))
t.h(a,l,j)
m=g}else{t.h(a,k,t.i(a,l))
t.h(a,l,j)}l=h
break}}H.bG(a,m,l,a1,a2)}else H.bG(a,m,l,a1,a2)},
dv:{"^":"l;"},
bY:{"^":"dv;$ti",
gu:function(a){return new H.dJ(this,this.gl(this),0,[H.cV(this,"bY",0)])},
aP:function(a,b){return this.cL(0,H.k(b,{func:1,ret:P.U,args:[H.cV(this,"bY",0)]}))}},
dJ:{"^":"c;a,b,c,0d,$ti",
sa5:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
q:function(){var z,y,x,w
z=this.a
y=J.b3(z)
x=y.gl(z)
if(this.b!==x)throw H.b(P.aS(z))
w=this.c
if(w>=x){this.sa5(null)
return!1}this.sa5(y.t(z,w));++this.c
return!0},
$isay:1},
ir:{"^":"l;a,b,$ti",
gu:function(a){var z=this.a
return new H.cF(z.gu(z),this.b,this.$ti)},
gl:function(a){return this.a.a.a},
$asl:function(a,b){return[b]},
p:{
is:function(a,b,c,d){H.r(a,"$isl",[c],"$asl")
H.k(b,{func:1,ret:d,args:[c]})
return new H.hB(a,b,[c,d])}}},
hB:{"^":"ir;a,b,$ti"},
cF:{"^":"ay;0a,b,c,$ti",
sa5:function(a){this.a=H.y(a,H.o(this,1))},
q:function(){var z=this.b
if(z.q()){this.sa5(this.c.$1(z.d))
return!0}this.sa5(null)
return!1},
gA:function(a){return this.a},
$asay:function(a,b){return[b]}},
it:{"^":"bY;a,b,$ti",
gl:function(a){return J.b6(this.a)},
t:function(a,b){return this.b.$1(J.fE(this.a,b))},
$asbY:function(a,b){return[b]},
$asl:function(a,b){return[b]}},
e9:{"^":"l;a,b,$ti",
gu:function(a){return new H.jG(J.bS(this.a),this.b,this.$ti)}},
jG:{"^":"ay;a,b,$ti",
q:function(){var z,y
for(z=this.a,y=this.b;z.q();)if(y.$1(z.gA(z)))return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
bX:{"^":"c;$ti"}}],["","",,H,{"^":"",
aR:function(a){var z,y
z=H.u(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
lG:function(a){return init.types[H.v(a)]},
lR:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.B(a).$isA},
d:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bw(a)
if(typeof z!=="string")throw H.b(H.an(a))
return z},
bh:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iZ:function(a,b){var z,y
if(typeof a!=="string")H.a0(H.an(a))
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.f(z,3)
y=H.u(z[3])
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
iY:function(a){var z,y
if(typeof a!=="string")H.a0(H.an(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.fZ(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
bi:function(a){return H.iQ(a)+H.c6(H.as(a),0,null)},
iQ:function(a){var z,y,x,w,v,u,t,s,r
z=J.B(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.M||!!z.$isbm){u=C.B(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aR(w.length>1&&C.h.a6(w,0)===36?C.h.cJ(w,1):w)},
Z:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iX:function(a){return a.b?H.Z(a).getUTCFullYear()+0:H.Z(a).getFullYear()+0},
iV:function(a){return a.b?H.Z(a).getUTCMonth()+1:H.Z(a).getMonth()+1},
iR:function(a){return a.b?H.Z(a).getUTCDate()+0:H.Z(a).getDate()+0},
iS:function(a){return a.b?H.Z(a).getUTCHours()+0:H.Z(a).getHours()+0},
iU:function(a){return a.b?H.Z(a).getUTCMinutes()+0:H.Z(a).getMinutes()+0},
iW:function(a){return a.b?H.Z(a).getUTCSeconds()+0:H.Z(a).getSeconds()+0},
iT:function(a){return a.b?H.Z(a).getUTCMilliseconds()+0:H.Z(a).getMilliseconds()+0},
aO:function(a){throw H.b(H.an(a))},
f:function(a,b){if(a==null)J.b6(a)
throw H.b(H.aq(a,b))},
aq:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.au(!0,b,"index",null)
z=H.v(J.b6(a))
if(!(b<0)){if(typeof z!=="number")return H.aO(z)
y=b>=z}else y=!0
if(y)return P.I(b,a,"index",null,z)
return P.c0(b,"index",null)},
an:function(a){return new P.au(!0,a,null,null)},
eE:function(a){if(typeof a!=="number")throw H.b(H.an(a))
return a},
b:function(a){var z
if(a==null)a=new P.c_()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eP})
z.name=""}else z.toString=H.eP
return z},
eP:function(){return J.bw(this.dartException)},
a0:function(a){throw H.b(a)},
F:function(a){throw H.b(P.aS(a))},
a3:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.m8(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.bt(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cC(H.d(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dR(H.d(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.f_()
u=$.f0()
t=$.f1()
s=$.f2()
r=$.f5()
q=$.f6()
p=$.f4()
$.f3()
o=$.f8()
n=$.f7()
m=v.M(y)
if(m!=null)return z.$1(H.cC(H.u(y),m))
else{m=u.M(y)
if(m!=null){m.method="call"
return z.$1(H.cC(H.u(y),m))}else{m=t.M(y)
if(m==null){m=s.M(y)
if(m==null){m=r.M(y)
if(m==null){m=q.M(y)
if(m==null){m=p.M(y)
if(m==null){m=s.M(y)
if(m==null){m=o.M(y)
if(m==null){m=n.M(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dR(H.u(y),m))}}return z.$1(new H.jA(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e0()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.au(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e0()
return a},
aN:function(a){var z
if(a==null)return new H.eq(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eq(a)},
lC:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.h(0,a[y],a[x])}return b},
lQ:function(a,b,c,d,e,f){H.i(a,"$isbz")
switch(H.v(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.dz("Unsupported number of arguments for wrapped closure"))},
ap:function(a,b){var z
H.v(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lQ)
a.$identity=z
return z},
hj:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.B(d).$isa){z.$reflectionInfo=d
x=H.j4(z).r}else x=d
w=e?Object.create(new H.ji().constructor.prototype):Object.create(new H.cq(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ae
if(typeof u!=="number")return u.F()
$.ae=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.dm(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.lG,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.dk:H.cr
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.b("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dm(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
hg:function(a,b,c,d){var z=H.cr
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dm:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hi(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hg(y,!w,z,b)
if(y===0){w=$.ae
if(typeof w!=="number")return w.F()
$.ae=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b7
if(v==null){v=H.bV("self")
$.b7=v}return new Function(w+H.d(v)+";return "+u+"."+H.d(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ae
if(typeof w!=="number")return w.F()
$.ae=w+1
t+=w
w="return function("+t+"){return this."
v=$.b7
if(v==null){v=H.bV("self")
$.b7=v}return new Function(w+H.d(v)+"."+H.d(z)+"("+t+");}")()},
hh:function(a,b,c,d){var z,y
z=H.cr
y=H.dk
switch(b?-1:a){case 0:throw H.b(H.ja("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hi:function(a,b){var z,y,x,w,v,u,t,s
z=$.b7
if(z==null){z=H.bV("self")
$.b7=z}y=$.dj
if(y==null){y=H.bV("receiver")
$.dj=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hh(w,!u,x,b)
if(w===1){z="return function(){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+");"
y=$.ae
if(typeof y!=="number")return y.F()
$.ae=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+", "+s+");"
y=$.ae
if(typeof y!=="number")return y.F()
$.ae=y+1
return new Function(z+y+"}")()},
cT:function(a,b,c,d,e,f,g){return H.hj(a,b,H.v(c),d,!!e,!!f,g)},
u:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.b(H.a8(a,"String"))},
eF:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.a8(a,"double"))},
cZ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.a8(a,"num"))},
c8:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.b(H.a8(a,"bool"))},
v:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.b(H.a8(a,"int"))},
cg:function(a,b){throw H.b(H.a8(a,H.aR(H.u(b).substring(3))))},
m_:function(a,b){throw H.b(H.dl(a,H.aR(H.u(b).substring(3))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.B(a)[b])return a
H.cg(a,b)},
ab:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.B(a)[b]
else z=!0
if(z)return a
H.m_(a,b)},
eM:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.B(a)[b])return a
H.cg(a,b)},
oB:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.B(a)[b])return a
H.cg(a,b)},
br:function(a){if(a==null)return a
if(!!J.B(a).$isa)return a
throw H.b(H.a8(a,"List<dynamic>"))},
lS:function(a,b){var z
if(a==null)return a
z=J.B(a)
if(!!z.$isa)return a
if(z[b])return a
H.cg(a,b)},
cU:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.v(z)]
else return a.$S()}return},
bL:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cU(J.B(a))
if(z==null)return!1
return H.ev(z,null,b,null)},
k:function(a,b){var z,y
if(a==null)return a
if($.cP)return a
$.cP=!0
try{if(H.bL(a,b))return a
z=H.bN(b)
y=H.a8(a,z)
throw H.b(y)}finally{$.cP=!1}},
b2:function(a,b){if(a!=null&&!H.cS(a,b))H.a0(H.a8(a,H.bN(b)))
return a},
ez:function(a){var z,y
z=J.B(a)
if(!!z.$isn){y=H.cU(z)
if(y!=null)return H.bN(y)
return"Closure"}return H.bi(a)},
m7:function(a){throw H.b(new P.hp(H.u(a)))},
eI:function(a){return init.getIsolateTag(a)},
h:function(a,b){a.$ti=b
return a},
as:function(a){if(a==null)return
return a.$ti},
os:function(a,b,c){return H.b5(a["$as"+H.d(c)],H.as(b))},
b4:function(a,b,c,d){var z
H.u(c)
H.v(d)
z=H.b5(a["$as"+H.d(c)],H.as(b))
return z==null?null:z[d]},
cV:function(a,b,c){var z
H.u(b)
H.v(c)
z=H.b5(a["$as"+H.d(b)],H.as(a))
return z==null?null:z[c]},
o:function(a,b){var z
H.v(b)
z=H.as(a)
return z==null?null:z[b]},
bN:function(a){return H.aL(a,null)},
aL:function(a,b){var z,y
H.r(b,"$isa",[P.e],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aR(a[0].builtin$cls)+H.c6(a,1,b)
if(typeof a=="function")return H.aR(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.v(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.d(b[y])}if('func' in a)return H.ll(a,b)
if('futureOr' in a)return"FutureOr<"+H.aL("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ll:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.e]
H.r(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.h([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.j(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.f(b,r)
t=C.h.F(t,b[r])
q=y[u]
if(q!=null&&q!==P.c)t+=" extends "+H.aL(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aL(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aL(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aL(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.lB(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.u(z[l])
n=n+m+H.aL(i[h],b)+(" "+H.d(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
c6:function(a,b,c){var z,y,x,w,v,u
H.r(c,"$isa",[P.e],"$asa")
if(a==null)return""
z=new P.cJ("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aL(u,c)}return"<"+z.k(0)+">"},
lF:function(a){var z,y,x,w
z=J.B(a)
if(!!z.$isn){y=H.cU(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.as(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
b5:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ao:function(a,b,c,d){var z,y
H.u(b)
H.br(c)
H.u(d)
if(a==null)return!1
z=H.as(a)
y=J.B(a)
if(y[b]==null)return!1
return H.eC(H.b5(y[d],z),null,c,null)},
bO:function(a,b,c,d){H.u(b)
H.br(c)
H.u(d)
if(a==null)return a
if(H.ao(a,b,c,d))return a
throw H.b(H.dl(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aR(b.substring(3))+H.c6(c,0,null),init.mangledGlobalNames)))},
r:function(a,b,c,d){H.u(b)
H.br(c)
H.u(d)
if(a==null)return a
if(H.ao(a,b,c,d))return a
throw H.b(H.a8(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aR(b.substring(3))+H.c6(c,0,null),init.mangledGlobalNames)))},
eC:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a5(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a5(a[y],b,c[y],d))return!1
return!0},
om:function(a,b,c){return a.apply(b,H.b5(J.B(b)["$as"+H.d(c)],H.as(b)))},
eK:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="c"||a.builtin$cls==="z"||a===-1||a===-2||H.eK(z)}return!1},
cS:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="c"||b.builtin$cls==="z"||b===-1||b===-2||H.eK(b)
if(b==null||b===-1||b.builtin$cls==="c"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cS(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bL(a,b)}z=J.B(a).constructor
y=H.as(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a5(z,null,b,null)},
y:function(a,b){if(a!=null&&!H.cS(a,b))throw H.b(H.a8(a,H.bN(b)))
return a},
a5:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="c"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="c"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a5(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="z")return!0
if('func' in c)return H.ev(a,b,c,d)
if('func' in a)return c.builtin$cls==="bz"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a5("type" in a?a.type:null,b,x,d)
else if(H.a5(a,b,x,d))return!0
else{if(!('$is'+"a2" in y.prototype))return!1
w=y.prototype["$as"+"a2"]
v=H.b5(w,z?a.slice(1):null)
return H.a5(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eC(H.b5(r,z),b,u,d)},
ev:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a5(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.a5(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a5(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a5(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.lZ(m,b,l,d)},
lZ:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a5(c[w],d,a[w],b))return!1}return!0},
on:function(a,b,c){Object.defineProperty(a,H.u(b),{value:c,enumerable:false,writable:true,configurable:true})},
lT:function(a){var z,y,x,w,v,u
z=H.u($.eJ.$1(a))
y=$.c9[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ce[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.u($.eB.$2(a,z))
if(z!=null){y=$.c9[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ce[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cf(x)
$.c9[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.ce[z]=x
return x}if(v==="-"){u=H.cf(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eN(a,x)
if(v==="*")throw H.b(P.cL(z))
if(init.leafTags[z]===true){u=H.cf(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eN(a,x)},
eN:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cY(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cf:function(a){return J.cY(a,!1,null,!!a.$isA)},
lY:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cf(z)
else return J.cY(z,c,null,null)},
lO:function(){if(!0===$.cW)return
$.cW=!0
H.lP()},
lP:function(){var z,y,x,w,v,u,t,s
$.c9=Object.create(null)
$.ce=Object.create(null)
H.lK()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eO.$1(v)
if(u!=null){t=H.lY(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lK:function(){var z,y,x,w,v,u,t
z=C.Q()
z=H.b1(C.N,H.b1(C.S,H.b1(C.A,H.b1(C.A,H.b1(C.R,H.b1(C.O,H.b1(C.P(C.B),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eJ=new H.lL(v)
$.eB=new H.lM(u)
$.eO=new H.lN(t)},
b1:function(a,b){return a(b)||b},
m2:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
m4:function(a,b,c,d){var z=b.dl(a,d)
if(z==null)return a
return H.m6(a,z.b.index,z.ge5(z),c)},
m3:function(a,b,c){var z,y
z=b.gbq()
z.lastIndex=0
y=a.replace(z,c.replace(/\$/g,"$$$$"))
return y},
m5:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.m4(a,b,c,d)},
m6:function(a,b,c,d){var z,y
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
j3:{"^":"c;a,b,c,d,e,f,r,0x",p:{
j4:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cz(z)
y=z[0]
x=z[1]
return new H.j3(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jv:{"^":"c;a,b,c,d,e,f",
M:function(a){var z,y,x
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
ai:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.h([],[P.e])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jv(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c2:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
e6:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iL:{"^":"R;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dR:function(a,b){return new H.iL(a,b==null?null:b.method)}}},
i9:{"^":"R;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.d(this.a)+")"},
p:{
cC:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.i9(a,y,z?null:b.receiver)}}},
jA:{"^":"R;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
m8:{"^":"n:8;a",
$1:function(a){if(!!J.B(a).$isR)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eq:{"^":"c;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isT:1},
n:{"^":"c;",
k:function(a){return"Closure '"+H.bi(this).trim()+"'"},
gcv:function(){return this},
$isbz:1,
gcv:function(){return this}},
e2:{"^":"n;"},
ji:{"^":"e2;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aR(z)+"'"}},
cq:{"^":"e2;a,b,c,d",
D:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cq))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gw:function(a){var z,y
z=this.c
if(z==null)y=H.bh(this.a)
else y=typeof z!=="object"?J.at(z):H.bh(z)
return(y^H.bh(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.bi(z)+"'")},
p:{
cr:function(a){return a.a},
dk:function(a){return a.c},
bV:function(a){var z,y,x,w,v
z=new H.cq("self","target","receiver","name")
y=J.cz(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jw:{"^":"R;a",
k:function(a){return this.a},
p:{
a8:function(a,b){return new H.jw("TypeError: "+P.bW(a)+": type '"+H.ez(a)+"' is not a subtype of type '"+b+"'")}}},
he:{"^":"R;a",
k:function(a){return this.a},
p:{
dl:function(a,b){return new H.he("CastError: "+P.bW(a)+": type '"+H.ez(a)+"' is not a subtype of type '"+b+"'")}}},
j9:{"^":"R;a",
k:function(a){return"RuntimeError: "+H.d(this.a)},
p:{
ja:function(a){return new H.j9(a)}}},
e7:{"^":"c;a,0b,0c,0d",
gah:function(){var z=this.b
if(z==null){z=H.bN(this.a)
this.b=z}return z},
k:function(a){return this.gah()},
gw:function(a){var z=this.d
if(z==null){z=C.h.gw(this.gah())
this.d=z}return z},
D:function(a,b){if(b==null)return!1
return b instanceof H.e7&&this.gah()===b.gah()}},
cB:{"^":"dK;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gG:function(a){return new H.ag(this,[H.o(this,0)])},
gcq:function(a){var z=H.o(this,0)
return H.is(new H.ag(this,[z]),new H.i8(this),z,H.o(this,1))},
ai:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.dg(z,b)}else{y=this.ec(b)
return y}},
ec:function(a){var z=this.d
if(z==null)return!1
return this.aJ(this.aC(z,J.at(a)&0x3ffffff),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ae(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ae(w,b)
x=y==null?null:y.b
return x}else return this.ed(b)},
ed:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aC(z,J.at(a)&0x3ffffff)
x=this.aJ(y,a)
if(x<0)return
return y[x].b},
h:function(a,b,c){var z,y,x,w,v,u
H.y(b,H.o(this,0))
H.y(c,H.o(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aD()
this.b=z}this.be(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aD()
this.c=y}this.be(y,b,c)}else{x=this.d
if(x==null){x=this.aD()
this.d=x}w=J.at(b)&0x3ffffff
v=this.aC(x,w)
if(v==null)this.aF(x,w,[this.aE(b,c)])
else{u=this.aJ(v,b)
if(u>=0)v[u].b=c
else v.push(this.aE(b,c))}}},
E:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.o(this,0),H.o(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.b(P.aS(this))
z=z.c}},
be:function(a,b,c){var z
H.y(b,H.o(this,0))
H.y(c,H.o(this,1))
z=this.ae(a,b)
if(z==null)this.aF(a,b,this.aE(b,c))
else z.b=c},
bp:function(){this.r=this.r+1&67108863},
aE:function(a,b){var z,y
z=new H.ig(H.y(a,H.o(this,0)),H.y(b,H.o(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bp()
return z},
aJ:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.V(a[y].a,b))return y
return-1},
k:function(a){return P.dL(this)},
ae:function(a,b){return a[b]},
aC:function(a,b){return a[b]},
aF:function(a,b,c){a[b]=c},
di:function(a,b){delete a[b]},
dg:function(a,b){return this.ae(a,b)!=null},
aD:function(){var z=Object.create(null)
this.aF(z,"<non-identifier-key>",z)
this.di(z,"<non-identifier-key>")
return z},
$isdI:1},
i8:{"^":"n;a",
$1:function(a){var z=this.a
return z.i(0,H.y(a,H.o(z,0)))},
$S:function(){var z=this.a
return{func:1,ret:H.o(z,1),args:[H.o(z,0)]}}},
ig:{"^":"c;a,b,0c,0d"},
ag:{"^":"dv;a,$ti",
gl:function(a){return this.a.a},
gu:function(a){var z,y
z=this.a
y=new H.ih(z,z.r,this.$ti)
y.c=z.e
return y}},
ih:{"^":"c;a,b,0c,0d,$ti",
sbd:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
q:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.aS(z))
else{z=this.c
if(z==null){this.sbd(null)
return!1}else{this.sbd(z.a)
this.c=this.c.c
return!0}}},
$isay:1},
lL:{"^":"n:8;a",
$1:function(a){return this.a(a)}},
lM:{"^":"n:35;a",
$2:function(a,b){return this.a(a,b)}},
lN:{"^":"n:15;a",
$1:function(a){return this.a(H.u(a))}},
i7:{"^":"c;a,b,0c,0d",
k:function(a){return"RegExp/"+this.a+"/"},
gbq:function(){var z=this.c
if(z!=null)return z
z=this.b
z=H.dH(this.a,z.multiline,!z.ignoreCase,!0)
this.c=z
return z},
dl:function(a,b){var z,y
z=this.gbq()
z.lastIndex=b
y=z.exec(a)
if(y==null)return
return new H.kt(this,y)},
$isdS:1,
p:{
dH:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.b(P.cw("Illegal RegExp pattern ("+String(w)+")",a,null))}}},
kt:{"^":"c;a,b",
ge5:function(a){var z=this.b
return z.index+z[0].length},
i:function(a,b){var z=this.b
if(b>=z.length)return H.f(z,b)
return z[b]}}}],["","",,H,{"^":"",
lB:function(a){return J.i2(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
aQ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
c5:function(a){var z,y
if(!!J.B(a).$isx)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.h(z,y,a[y])
return z},
ak:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.aq(b,a))},
iG:{"^":"j;",$isjx:1,"%":"DataView;ArrayBufferView;cG|ek|el|dO|em|en|aA"},
cG:{"^":"iG;",
gl:function(a){return a.length},
$isx:1,
$asx:I.bq,
$isA:1,
$asA:I.bq},
dO:{"^":"el;",
i:function(a,b){H.ak(b,a,a.length)
return a[b]},
h:function(a,b,c){H.v(b)
H.eF(c)
H.ak(b,a,a.length)
a[b]=c},
$asbX:function(){return[P.ar]},
$asq:function(){return[P.ar]},
$isl:1,
$asl:function(){return[P.ar]},
$isa:1,
$asa:function(){return[P.ar]},
"%":"Float64Array"},
aA:{"^":"en;",
h:function(a,b,c){H.v(b)
H.v(c)
H.ak(b,a,a.length)
a[b]=c},
$asbX:function(){return[P.C]},
$asq:function(){return[P.C]},
$isl:1,
$asl:function(){return[P.C]},
$isa:1,
$asa:function(){return[P.C]}},
iF:{"^":"dO;",$isaf:1,"%":"Float32Array"},
n9:{"^":"aA;",
i:function(a,b){H.ak(b,a,a.length)
return a[b]},
"%":"Int16Array"},
na:{"^":"aA;",
i:function(a,b){H.ak(b,a,a.length)
return a[b]},
$isi_:1,
"%":"Int32Array"},
nb:{"^":"aA;",
i:function(a,b){H.ak(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nc:{"^":"aA;",
i:function(a,b){H.ak(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
iH:{"^":"aA;",
i:function(a,b){H.ak(b,a,a.length)
return a[b]},
$isnW:1,
"%":"Uint32Array"},
nd:{"^":"aA;",
gl:function(a){return a.length},
i:function(a,b){H.ak(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
ne:{"^":"aA;",
gl:function(a){return a.length},
i:function(a,b){H.ak(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
ek:{"^":"cG+q;"},
el:{"^":"ek+bX;"},
em:{"^":"cG+q;"},
en:{"^":"em+bX;"}}],["","",,P,{"^":"",
jN:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.lt()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.ap(new P.jP(z),1)).observe(y,{childList:true})
return new P.jO(z,y,x)}else if(self.setImmediate!=null)return P.lu()
return P.lv()},
o6:[function(a){self.scheduleImmediate(H.ap(new P.jQ(H.k(a,{func:1,ret:-1})),0))},"$1","lt",4,0,3],
o7:[function(a){self.setImmediate(H.ap(new P.jR(H.k(a,{func:1,ret:-1})),0))},"$1","lu",4,0,3],
o8:[function(a){H.k(a,{func:1,ret:-1})
P.l1(0,a)},"$1","lv",4,0,3],
hL:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
H.r(a,"$isl",[[P.a2,d]],"$asl")
s=[[P.a,d]]
y=new P.P(0,$.E,s)
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.hN(z,b,!1,y)
try{for(r=a,q=r.length,p=0,o=0;p<r.length;r.length===q||(0,H.F)(r),++p){w=r[p]
v=o
w.aN(new P.hM(z,v,y,b,!1,d),x,null)
o=++z.b}if(o===0){r=new P.P(0,$.E,s)
r.bg(C.X)
return r}r=new Array(o)
r.fixed$length=Array
z.a=H.h(r,[d])}catch(n){u=H.a3(n)
t=H.aN(n)
if(z.b===0||!1){m=u
if(m==null)m=new P.c_()
r=$.E
if(r!==C.e)r.toString
s=new P.P(0,r,s)
s.bh(m,t)
return s}else{z.c=u
z.d=t}}return y},
lp:function(a,b){if(H.bL(a,{func:1,args:[P.c,P.T]}))return H.k(a,{func:1,ret:null,args:[P.c,P.T]})
if(H.bL(a,{func:1,args:[P.c]}))return H.k(a,{func:1,ret:null,args:[P.c]})
throw H.b(P.dh(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lo:function(){var z,y
for(;z=$.b_,z!=null;){$.bp=null
y=z.b
$.b_=y
if(y==null)$.bo=null
z.a.$0()}},
ok:[function(){$.cQ=!0
try{P.lo()}finally{$.bp=null
$.cQ=!1
if($.b_!=null)$.d0().$1(P.eD())}},"$0","eD",0,0,1],
ey:function(a){var z=new P.eb(H.k(a,{func:1,ret:-1}))
if($.b_==null){$.bo=z
$.b_=z
if(!$.cQ)$.d0().$1(P.eD())}else{$.bo.b=z
$.bo=z}},
ls:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
z=$.b_
if(z==null){P.ey(a)
$.bp=$.bo
return}y=new P.eb(a)
x=$.bp
if(x==null){y.b=z
$.bp=y
$.b_=y}else{y.b=x.b
x.b=y
$.bp=y
if(y.b==null)$.bo=y}},
m0:function(a){var z,y
z={func:1,ret:-1}
H.k(a,z)
y=$.E
if(C.e===y){P.b0(null,null,C.e,a)
return}y.toString
P.b0(null,null,y,H.k(y.bB(a),z))},
lj:function(a,b,c){a.dR(0)
b.ad(c)},
c7:function(a,b,c,d,e){var z={}
z.a=d
P.ls(new P.lq(z,e))},
ew:function(a,b,c,d,e){var z,y
H.k(d,{func:1,ret:e})
y=$.E
if(y===c)return d.$0()
$.E=c
z=y
try{y=d.$0()
return y}finally{$.E=z}},
ex:function(a,b,c,d,e,f,g){var z,y
H.k(d,{func:1,ret:f,args:[g]})
H.y(e,g)
y=$.E
if(y===c)return d.$1(e)
$.E=c
z=y
try{y=d.$1(e)
return y}finally{$.E=z}},
lr:function(a,b,c,d,e,f,g,h,i){var z,y
H.k(d,{func:1,ret:g,args:[h,i]})
H.y(e,h)
H.y(f,i)
y=$.E
if(y===c)return d.$2(e,f)
$.E=c
z=y
try{y=d.$2(e,f)
return y}finally{$.E=z}},
b0:function(a,b,c,d){var z
H.k(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.bB(d):c.dO(d,-1)
P.ey(d)},
jP:{"^":"n:9;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jO:{"^":"n:26;a,b,c",
$1:function(a){var z,y
this.a.a=H.k(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jQ:{"^":"n:0;a",
$0:function(){this.a.$0()}},
jR:{"^":"n:0;a",
$0:function(){this.a.$0()}},
l0:{"^":"c;a,0b,c",
da:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.ap(new P.l2(this,b),0),a)
else throw H.b(P.D("`setTimeout()` not found."))},
p:{
l1:function(a,b){var z=new P.l0(!0,0)
z.da(a,b)
return z}}},
l2:{"^":"n:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
a2:{"^":"c;$ti"},
hN:{"^":"n:16;a,b,c,d",
$2:function(a,b){var z,y
H.i(b,"$isT")
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.I(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.I(z.c,z.d)}},
hM:{"^":"n;a,b,c,d,e,f",
$1:function(a){var z,y
H.y(a,this.f)
z=this.a;--z.b
y=z.a
if(y!=null){C.a.h(y,this.b,a)
if(z.b===0)this.c.bk(z.a)}else if(z.b===0&&!this.e)this.c.I(z.c,z.d)},
$S:function(){return{func:1,ret:P.z,args:[this.f]}}},
ee:{"^":"c;$ti",
dV:function(a,b){if(a==null)a=new P.c_()
if(this.a.a!==0)throw H.b(P.bH("Future already completed"))
$.E.toString
this.I(a,b)},
dU:function(a){return this.dV(a,null)}},
cM:{"^":"ee;a,$ti",
aH:function(a,b){var z
H.b2(b,{futureOr:1,type:H.o(this,0)})
z=this.a
if(z.a!==0)throw H.b(P.bH("Future already completed"))
z.bg(b)},
I:function(a,b){this.a.bh(a,b)}},
kW:{"^":"ee;a,$ti",
I:function(a,b){this.a.I(a,b)}},
aY:{"^":"c;0a,b,c,d,e,$ti",
eg:function(a){if(this.c!==6)return!0
return this.b.b.aL(H.k(this.d,{func:1,ret:P.U,args:[P.c]}),a.a,P.U,P.c)},
eb:function(a){var z,y,x,w
z=this.e
y=P.c
x={futureOr:1,type:H.o(this,1)}
w=this.b.b
if(H.bL(z,{func:1,args:[P.c,P.T]}))return H.b2(w.ek(z,a.a,a.b,null,y,P.T),x)
else return H.b2(w.aL(H.k(z,{func:1,args:[P.c]}),a.a,null,y),x)}},
P:{"^":"c;bu:a<,b,0dC:c<,$ti",
aN:function(a,b,c){var z,y,x,w
z=H.o(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.E
if(y!==C.e){y.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.lp(b,y)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.P(0,$.E,[c])
w=b==null?1:3
this.bf(new P.aY(x,w,a,b,[z,c]))
return x},
a_:function(a,b){return this.aN(a,null,b)},
bf:function(a){var z,y
z=this.a
if(z<=1){a.a=H.i(this.c,"$isaY")
this.c=a}else{if(z===2){y=H.i(this.c,"$isP")
z=y.a
if(z<4){y.bf(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.b0(null,null,z,H.k(new P.k7(this,a),{func:1,ret:-1}))}},
br:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.i(this.c,"$isaY")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.i(this.c,"$isP")
y=u.a
if(y<4){u.br(a)
return}this.a=y
this.c=u.c}z.a=this.ag(a)
y=this.b
y.toString
P.b0(null,null,y,H.k(new P.ke(z,this),{func:1,ret:-1}))}},
af:function(){var z=H.i(this.c,"$isaY")
this.c=null
return this.ag(z)},
ag:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
ad:function(a){var z,y,x
z=H.o(this,0)
H.b2(a,{futureOr:1,type:z})
y=this.$ti
if(H.ao(a,"$isa2",y,"$asa2"))if(H.ao(a,"$isP",y,null))P.c3(a,this)
else P.ef(a,this)
else{x=this.af()
H.y(a,z)
this.a=4
this.c=a
P.aZ(this,x)}},
bk:function(a){var z
H.y(a,H.o(this,0))
z=this.af()
this.a=4
this.c=a
P.aZ(this,z)},
I:function(a,b){var z
H.i(b,"$isT")
z=this.af()
this.a=8
this.c=new P.a4(a,b)
P.aZ(this,z)},
bg:function(a){var z
H.b2(a,{futureOr:1,type:H.o(this,0)})
if(H.ao(a,"$isa2",this.$ti,"$asa2")){this.de(a)
return}this.a=1
z=this.b
z.toString
P.b0(null,null,z,H.k(new P.k9(this,a),{func:1,ret:-1}))},
de:function(a){var z=this.$ti
H.r(a,"$isa2",z,"$asa2")
if(H.ao(a,"$isP",z,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.b0(null,null,z,H.k(new P.kd(this,a),{func:1,ret:-1}))}else P.c3(a,this)
return}P.ef(a,this)},
bh:function(a,b){var z
H.i(b,"$isT")
this.a=1
z=this.b
z.toString
P.b0(null,null,z,H.k(new P.k8(this,a,b),{func:1,ret:-1}))},
$isa2:1,
p:{
ef:function(a,b){var z,y,x
b.a=1
try{a.aN(new P.ka(b),new P.kb(b),null)}catch(x){z=H.a3(x)
y=H.aN(x)
P.m0(new P.kc(b,z,y))}},
c3:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.i(a.c,"$isP")
if(z>=4){y=b.af()
b.a=a.a
b.c=a.c
P.aZ(b,y)}else{y=H.i(b.c,"$isaY")
b.a=2
b.c=a
a.br(y)}},
aZ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.i(y.c,"$isa4")
y=y.b
u=v.a
t=v.b
y.toString
P.c7(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.aZ(z.a,b)}y=z.a
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
if(p){H.i(r,"$isa4")
y=y.b
u=r.a
t=r.b
y.toString
P.c7(null,null,y,u,t)
return}o=$.E
if(o!=q)$.E=q
else o=null
y=b.c
if(y===8)new P.kh(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kg(x,b,r).$0()}else if((y&2)!==0)new P.kf(z,x,b).$0()
if(o!=null)$.E=o
y=x.b
if(!!J.B(y).$isa2){if(y.a>=4){n=H.i(t.c,"$isaY")
t.c=null
b=t.ag(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.c3(y,t)
return}}m=b.b
n=H.i(m.c,"$isaY")
m.c=null
b=m.ag(n)
y=x.a
u=x.b
if(!y){H.y(u,H.o(m,0))
m.a=4
m.c=u}else{H.i(u,"$isa4")
m.a=8
m.c=u}z.a=m
y=m}}}},
k7:{"^":"n:0;a,b",
$0:function(){P.aZ(this.a,this.b)}},
ke:{"^":"n:0;a,b",
$0:function(){P.aZ(this.b,this.a.a)}},
ka:{"^":"n:9;a",
$1:function(a){var z=this.a
z.a=0
z.ad(a)}},
kb:{"^":"n:17;a",
$2:function(a,b){H.i(b,"$isT")
this.a.I(a,b)},
$1:function(a){return this.$2(a,null)}},
kc:{"^":"n:0;a,b,c",
$0:function(){this.a.I(this.b,this.c)}},
k9:{"^":"n:0;a,b",
$0:function(){var z=this.a
z.bk(H.y(this.b,H.o(z,0)))}},
kd:{"^":"n:0;a,b",
$0:function(){P.c3(this.b,this.a)}},
k8:{"^":"n:0;a,b,c",
$0:function(){this.a.I(this.b,this.c)}},
kh:{"^":"n:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.ca(H.k(w.d,{func:1}),null)}catch(v){y=H.a3(v)
x=H.aN(v)
if(this.d){w=H.i(this.a.a.c,"$isa4").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.i(this.a.a.c,"$isa4")
else u.b=new P.a4(y,x)
u.a=!0
return}if(!!J.B(z).$isa2){if(z instanceof P.P&&z.gbu()>=4){if(z.gbu()===8){w=this.b
w.b=H.i(z.gdC(),"$isa4")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.a_(new P.ki(t),null)
w.a=!1}}},
ki:{"^":"n:18;a",
$1:function(a){return this.a}},
kg:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.o(x,0)
v=H.y(this.c,w)
u=H.o(x,1)
this.a.b=x.b.b.aL(H.k(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a3(t)
y=H.aN(t)
x=this.a
x.b=new P.a4(z,y)
x.a=!0}}},
kf:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.i(this.a.a.c,"$isa4")
w=this.c
if(w.eg(z)&&w.e!=null){v=this.b
v.b=w.eb(z)
v.a=!1}}catch(u){y=H.a3(u)
x=H.aN(u)
w=H.i(this.a.a.c,"$isa4")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a4(y,x)
s.a=!0}}},
eb:{"^":"c;a,0b"},
jm:{"^":"c;$ti",
gl:function(a){var z,y,x,w
z={}
y=new P.P(0,$.E,[P.C])
z.a=0
x=H.o(this,0)
w=H.k(new P.jq(z,this),{func:1,ret:-1,args:[x]})
H.k(new P.jr(z,y),{func:1,ret:-1})
W.aa(this.a,this.b,w,!1,x)
return y},
ge7:function(a){var z,y,x,w
z={}
y=new P.P(0,$.E,this.$ti)
z.a=null
x=H.o(this,0)
w=H.k(new P.jo(z,this,y),{func:1,ret:-1,args:[x]})
H.k(new P.jp(y),{func:1,ret:-1})
z.a=W.aa(this.a,this.b,w,!1,x)
return y}},
jq:{"^":"n;a,b",
$1:function(a){H.y(a,H.o(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.z,args:[H.o(this.b,0)]}}},
jr:{"^":"n:0;a,b",
$0:function(){this.b.ad(this.a.a)}},
jo:{"^":"n;a,b,c",
$1:function(a){H.y(a,H.o(this.b,0))
P.lj(this.a.a,this.c,a)},
$S:function(){return{func:1,ret:P.z,args:[H.o(this.b,0)]}}},
jp:{"^":"n:0;a",
$0:function(){var z,y,x,w
try{x=H.cy()
throw H.b(x)}catch(w){z=H.a3(w)
y=H.aN(w)
$.E.toString
this.a.I(z,y)}}},
jn:{"^":"c;"},
a4:{"^":"c;a,b",
k:function(a){return H.d(this.a)},
$isR:1},
l8:{"^":"c;",$iso4:1},
lq:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.c_()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.b(z)
x=H.b(z)
x.stack=y.k(0)
throw x}},
kF:{"^":"l8;",
el:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
try{if(C.e===$.E){a.$0()
return}P.ew(null,null,this,a,-1)}catch(x){z=H.a3(x)
y=H.aN(x)
P.c7(null,null,this,z,H.i(y,"$isT"))}},
em:function(a,b,c){var z,y,x
H.k(a,{func:1,ret:-1,args:[c]})
H.y(b,c)
try{if(C.e===$.E){a.$1(b)
return}P.ex(null,null,this,a,b,-1,c)}catch(x){z=H.a3(x)
y=H.aN(x)
P.c7(null,null,this,z,H.i(y,"$isT"))}},
dO:function(a,b){return new P.kH(this,H.k(a,{func:1,ret:b}),b)},
bB:function(a){return new P.kG(this,H.k(a,{func:1,ret:-1}))},
dP:function(a,b){return new P.kI(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
ca:function(a,b){H.k(a,{func:1,ret:b})
if($.E===C.e)return a.$0()
return P.ew(null,null,this,a,b)},
aL:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.y(b,d)
if($.E===C.e)return a.$1(b)
return P.ex(null,null,this,a,b,c,d)},
ek:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.y(b,e)
H.y(c,f)
if($.E===C.e)return a.$2(b,c)
return P.lr(null,null,this,a,b,c,d,e,f)}},
kH:{"^":"n;a,b,c",
$0:function(){return this.a.ca(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
kG:{"^":"n:1;a,b",
$0:function(){return this.a.el(this.b)}},
kI:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.em(this.b,H.y(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
cD:function(a,b,c){H.br(a)
return H.r(H.lC(a,new H.cB(0,0,[b,c])),"$isdI",[b,c],"$asdI")},
S:function(a,b){return new H.cB(0,0,[a,b])},
ii:function(){return new H.cB(0,0,[null,null])},
a7:function(a,b,c,d){return new P.kp(0,0,[d])},
i0:function(a,b,c){var z,y
if(P.cR(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.h([],[P.e])
y=$.bs()
C.a.j(y,a)
try{P.ln(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.e1(b,H.lS(z,"$isl"),", ")+c
return y.charCodeAt(0)==0?y:y},
cx:function(a,b,c){var z,y,x
if(P.cR(a))return b+"..."+c
z=new P.cJ(b)
y=$.bs()
C.a.j(y,a)
try{x=z
x.a=P.e1(x.gX(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gX()+c
y=z.gX()
return y.charCodeAt(0)==0?y:y},
cR:function(a){var z,y
for(z=0;y=$.bs(),z<y.length;++z)if(a===y[z])return!0
return!1},
ln:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.r(b,"$isa",[P.e],"$asa")
z=a.gu(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.q())return
w=H.d(z.gA(z))
C.a.j(b,w)
y+=w.length+2;++x}if(!z.q()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gA(z);++x
if(!z.q()){if(x<=4){C.a.j(b,H.d(t))
return}v=H.d(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA(z);++x
for(;z.q();t=s,s=r){r=z.gA(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2;--x}C.a.j(b,"...")
return}}u=H.d(t)
v=H.d(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.j(b,q)
C.a.j(b,u)
C.a.j(b,v)},
cE:function(a,b){var z,y,x
z=P.a7(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.F)(a),++x)z.j(0,H.y(a[x],b))
return z},
dL:function(a){var z,y,x
z={}
if(P.cR(a))return"{...}"
y=new P.cJ("")
try{C.a.j($.bs(),a)
x=y
x.a=x.gX()+"{"
z.a=!0
J.fH(a,new P.iq(z,y))
z=y
z.a=z.gX()+"}"}finally{z=$.bs()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gX()
return z.charCodeAt(0)==0?z:z},
kp:{"^":"kk;a,0b,0c,0d,0e,0f,r,$ti",
gu:function(a){var z=new P.ej(this,this.r,this.$ti)
z.c=this.e
return z},
gl:function(a){return this.a},
v:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.i(z[b],"$isbK")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.i(y[b],"$isbK")!=null}else return this.df(b)},
df:function(a){var z=this.d
if(z==null)return!1
return this.aB(this.bn(z,a),a)>=0},
j:function(a,b){var z,y
H.y(b,H.o(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cN()
this.b=z}return this.bi(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cN()
this.c=y}return this.bi(y,b)}else return this.dc(0,b)},
dc:function(a,b){var z,y,x
H.y(b,H.o(this,0))
z=this.d
if(z==null){z=P.cN()
this.d=z}y=this.bl(b)
x=z[y]
if(x==null)z[y]=[this.ax(b)]
else{if(this.aB(x,b)>=0)return!1
x.push(this.ax(b))}return!0},
c9:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bs(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bs(this.c,b)
else return this.du(0,b)},
du:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bn(z,b)
x=this.aB(y,b)
if(x<0)return!1
this.bw(y.splice(x,1)[0])
return!0},
a8:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aw()}},
bi:function(a,b){H.y(b,H.o(this,0))
if(H.i(a[b],"$isbK")!=null)return!1
a[b]=this.ax(b)
return!0},
bs:function(a,b){var z
if(a==null)return!1
z=H.i(a[b],"$isbK")
if(z==null)return!1
this.bw(z)
delete a[b]
return!0},
aw:function(){this.r=this.r+1&67108863},
ax:function(a){var z,y
z=new P.bK(H.y(a,H.o(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aw()
return z},
bw:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aw()},
bl:function(a){return J.at(a)&0x3ffffff},
bn:function(a,b){return a[this.bl(b)]},
aB:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.V(a[y].a,b))return y
return-1},
p:{
cN:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bK:{"^":"c;a,0b,0c"},
ej:{"^":"c;a,b,0c,0d,$ti",
sbj:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
q:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.aS(z))
else{z=this.c
if(z==null){this.sbj(null)
return!1}else{this.sbj(H.y(z.a,H.o(this,0)))
this.c=this.c.b
return!0}}},
$isay:1,
p:{
kq:function(a,b,c){var z=new P.ej(a,b,[c])
z.c=a.e
return z}}},
kk:{"^":"jb;"},
ij:{"^":"kr;",$isl:1,$isa:1},
q:{"^":"c;$ti",
gu:function(a){return new H.dJ(a,this.gl(a),0,[H.b4(this,a,"q",0)])},
t:function(a,b){return this.i(a,b)},
e9:function(a,b,c,d){var z,y,x
H.y(b,d)
H.k(c,{func:1,ret:d,args:[d,H.b4(this,a,"q",0)]})
z=this.gl(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.i(a,x))
if(z!==this.gl(a))throw H.b(P.aS(a))}return y},
bX:function(a,b,c,d){var z
H.y(d,H.b4(this,a,"q",0))
P.j2(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.h(a,z,d)},
k:function(a){return P.cx(a,"[","]")}},
dK:{"^":"W;"},
iq:{"^":"n:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.d(a)
z.a=y+": "
z.a+=H.d(b)}},
W:{"^":"c;$ti",
E:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.b4(this,a,"W",0),H.b4(this,a,"W",1)]})
for(z=J.bS(this.gG(a));z.q();){y=z.gA(z)
b.$2(y,this.i(a,y))}},
gl:function(a){return J.b6(this.gG(a))},
k:function(a){return P.dL(a)},
$isM:1},
jc:{"^":"c;$ti",
J:function(a,b){var z
for(z=J.bS(H.r(b,"$isl",this.$ti,"$asl"));z.q();)this.j(0,z.gA(z))},
k:function(a){return P.cx(this,"{","}")},
$isl:1,
$isnv:1},
jb:{"^":"jc;"},
kr:{"^":"c+q;"}}],["","",,P,{"^":"",
cX:function(a,b,c){var z
H.u(a)
z=H.iZ(a,c)
if(z!=null)return z
throw H.b(P.cw(a,null,null))},
aM:function(a,b){var z
H.u(a)
z=H.iY(a)
if(z!=null)return z
throw H.b(P.cw("Invalid double",a,null))},
hE:function(a){if(a instanceof H.n)return a.k(0)
return"Instance of '"+H.bi(a)+"'"},
dV:function(a,b,c){return new H.i7(a,H.dH(a,!1,!0,!1))},
bW:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bw(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hE(a)},
dz:function(a){return new P.k4(a)},
al:function(a){H.aQ(H.d(a))},
U:{"^":"c;"},
"+bool":0,
b8:{"^":"c;a,b",
D:function(a,b){if(b==null)return!1
return b instanceof P.b8&&this.a===b.a&&this.b===b.b},
N:function(a,b){return C.f.N(this.a,H.i(b,"$isb8").a)},
gw:function(a){var z=this.a
return(z^C.f.bt(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.hq(H.iX(this))
y=P.bx(H.iV(this))
x=P.bx(H.iR(this))
w=P.bx(H.iS(this))
v=P.bx(H.iU(this))
u=P.bx(H.iW(this))
t=P.hr(H.iT(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
$isa1:1,
$asa1:function(){return[P.b8]},
p:{
hq:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hr:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bx:function(a){if(a>=10)return""+a
return"0"+a}}},
ar:{"^":"H;"},
"+double":0,
b9:{"^":"c;a",
V:function(a,b){return C.f.V(this.a,H.i(b,"$isb9").a)},
D:function(a,b){if(b==null)return!1
return b instanceof P.b9&&this.a===b.a},
gw:function(a){return this.a&0x1FFFFFFF},
N:function(a,b){return C.f.N(this.a,H.i(b,"$isb9").a)},
k:function(a){var z,y,x,w,v
z=new P.hA()
y=this.a
if(y<0)return"-"+new P.b9(0-y).k(0)
x=z.$1(C.f.Y(y,6e7)%60)
w=z.$1(C.f.Y(y,1e6)%60)
v=new P.hz().$1(y%1e6)
return""+C.f.Y(y,36e8)+":"+H.d(x)+":"+H.d(w)+"."+H.d(v)},
$isa1:1,
$asa1:function(){return[P.b9]},
p:{
du:function(a,b,c,d,e,f){return new P.b9(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hz:{"^":"n:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hA:{"^":"n:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
R:{"^":"c;"},
c_:{"^":"R;",
k:function(a){return"Throw of null."}},
au:{"^":"R;a,b,c,d",
gaz:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gay:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.d(z)
w=this.gaz()+y+x
if(!this.a)return w
v=this.gay()
u=P.bW(this.b)
return w+v+": "+u},
p:{
cp:function(a){return new P.au(!1,null,null,a)},
dh:function(a,b,c){return new P.au(!0,a,b,c)}}},
dU:{"^":"au;e,f,a,b,c,d",
gaz:function(){return"RangeError"},
gay:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.d(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.d(z)
else if(x>z)y=": Not in range "+H.d(z)+".."+H.d(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.d(z)}return y},
p:{
c0:function(a,b,c){return new P.dU(null,null,!0,a,b,"Value not in range")},
bj:function(a,b,c,d,e){return new P.dU(b,c,!0,a,d,"Invalid value")},
j2:function(a,b,c,d,e,f){if(0>a||a>c)throw H.b(P.bj(a,0,c,"start",f))
if(a>b||b>c)throw H.b(P.bj(b,a,c,"end",f))
return b}}},
hZ:{"^":"au;e,l:f>,a,b,c,d",
gaz:function(){return"RangeError"},
gay:function(){var z,y
z=H.v(this.b)
if(typeof z!=="number")return z.aa()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.d(y)},
p:{
I:function(a,b,c,d,e){var z=H.v(e==null?J.b6(b):e)
return new P.hZ(b,z,!0,a,c,"Index out of range")}}},
jB:{"^":"R;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
D:function(a){return new P.jB(a)}}},
jz:{"^":"R;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cL:function(a){return new P.jz(a)}}},
cI:{"^":"R;a",
k:function(a){return"Bad state: "+this.a},
p:{
bH:function(a){return new P.cI(a)}}},
hk:{"^":"R;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bW(z)+"."},
p:{
aS:function(a){return new P.hk(a)}}},
e0:{"^":"c;",
k:function(a){return"Stack Overflow"},
$isR:1},
hp:{"^":"R;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
k4:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
hI:{"^":"c;a,b,c",
k:function(a){var z,y,x,w
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.d(z):"FormatException"
x=this.b
if(typeof x==="string"){w=x.length>78?C.h.b3(x,0,75)+"...":x
return y+"\n"+w}else return y},
p:{
cw:function(a,b,c){return new P.hI(a,b,c)}}},
bz:{"^":"c;"},
C:{"^":"H;"},
"+int":0,
l:{"^":"c;$ti",
aP:["cL",function(a,b){var z=H.cV(this,"l",0)
return new H.e9(this,H.k(b,{func:1,ret:P.U,args:[z]}),[z])}],
gl:function(a){var z,y
z=this.gu(this)
for(y=0;z.q();)++y
return y},
gW:function(a){var z,y
z=this.gu(this)
if(!z.q())throw H.b(H.cy())
y=z.gA(z)
if(z.q())throw H.b(H.i1())
return y},
t:function(a,b){var z,y,x
if(b<0)H.a0(P.bj(b,0,null,"index",null))
for(z=this.gu(this),y=0;z.q();){x=z.gA(z)
if(b===y)return x;++y}throw H.b(P.I(b,this,"index",null,y))},
k:function(a){return P.i0(this,"(",")")}},
ay:{"^":"c;$ti"},
a:{"^":"c;$ti",$isl:1},
"+List":0,
M:{"^":"c;$ti"},
z:{"^":"c;",
gw:function(a){return P.c.prototype.gw.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
H:{"^":"c;",$isa1:1,
$asa1:function(){return[P.H]}},
"+num":0,
c:{"^":";",
D:function(a,b){return this===b},
gw:function(a){return H.bh(this)},
k:function(a){return"Instance of '"+H.bi(this)+"'"},
toString:function(){return this.k(this)}},
T:{"^":"c;"},
e:{"^":"c;",$isa1:1,
$asa1:function(){return[P.e]},
$isdS:1},
"+String":0,
cJ:{"^":"c;X:a<",
gl:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
e1:function(a,b,c){var z=J.bS(b)
if(!z.q())return a
if(c.length===0){do a+=H.d(z.gA(z))
while(z.q())}else{a+=H.d(z.gA(z))
for(;z.q();)a=a+c+H.d(z.gA(z))}return a}}}}],["","",,W,{"^":"",
hC:function(a,b,c){var z,y
z=document.body
y=(z&&C.p).O(z,a,b,c)
y.toString
z=W.w
z=new H.e9(new W.a9(y),H.k(new W.hD(),{func:1,ret:P.U,args:[z]}),[z])
return H.i(z.gW(z),"$isQ")},
dy:function(a){H.i(a,"$isL")
return"wheel"},
ba:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fL(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a3(x)}return z},
k1:function(a,b){return document.createElement(a)},
c4:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ei:function(a,b,c,d){var z,y
z=W.c4(W.c4(W.c4(W.c4(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
cO:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.jW(a)
if(!!J.B(z).$isL)return z
return}else return H.i(a,"$isL")},
lk:function(a){var z
if(!!J.B(a).$iscu)return a
z=new P.jK([],[],!1)
z.c=!0
return z.aO(a)},
eA:function(a,b){var z
H.k(a,{func:1,ret:-1,args:[b]})
z=$.E
if(z===C.e)return a
return z.dP(a,b)},
O:{"^":"Q;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
m9:{"^":"j;0l:length=","%":"AccessibleNodeList"},
h6:{"^":"O;",
k:function(a){return String(a)},
$ish6:1,
"%":"HTMLAnchorElement"},
ma:{"^":"O;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
di:{"^":"O;",$isdi:1,"%":"HTMLBaseElement"},
hb:{"^":"j;","%":";Blob"},
bU:{"^":"O;",$isbU:1,"%":"HTMLBodyElement"},
cs:{"^":"O;0n:height=,0m:width=",
cw:function(a,b,c){var z=this.dm(a,b,P.lw(c,null))
return z},
dm:function(a,b,c){return a.getContext(b,c)},
$iscs:1,
"%":"HTMLCanvasElement"},
mf:{"^":"j;",
al:function(a){return P.a6(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
mg:{"^":"w;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
hl:{"^":"ct;",$ishl:1,"%":"CSSNumericValue|CSSUnitValue"},
mm:{"^":"ho;0l:length=","%":"CSSPerspective"},
av:{"^":"j;",$isav:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
hm:{"^":"jU;0l:length=",
aU:function(a,b){var z=this.dn(a,this.av(a,b))
return z==null?"":z},
av:function(a,b){var z,y
z=$.eW()
y=z[b]
if(typeof y==="string")return y
y=this.dG(a,b)
z[b]=y
return y},
dG:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hs()+b
if(z in a)return z
return b},
dn:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hn:{"^":"c;",
gn:function(a){return this.aU(a,"height")},
gm:function(a){return this.aU(a,"width")}},
ct:{"^":"j;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
ho:{"^":"j;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
mo:{"^":"ct;0l:length=","%":"CSSTransformValue"},
mp:{"^":"ct;0l:length=","%":"CSSUnparsedValue"},
mr:{"^":"j;0l:length=",
i:function(a,b){return a[b]},
"%":"DataTransferItemList"},
ht:{"^":"O;","%":"HTMLDivElement"},
cu:{"^":"w;",
dJ:function(a,b){return a.adoptNode(b)},
dh:function(a,b){return a.createEvent(b)},
aQ:function(a,b){return a.getElementsByTagName(b)},
cz:function(a,b){return a.getElementById(b)},
c8:function(a,b){return a.querySelector(b)},
gc3:function(a){return new W.bI(a,"mousedown",!1,[W.Y])},
gc4:function(a){return new W.bI(a,"mousemove",!1,[W.Y])},
gc5:function(a){return new W.bI(a,"mouseup",!1,[W.Y])},
gc6:function(a){return new W.bI(a,H.u(W.dy(a)),!1,[W.aW])},
$iscu:1,
"%":"XMLDocument;Document"},
ms:{"^":"j;",
k:function(a){return String(a)},
"%":"DOMException"},
hu:{"^":"j;",
e_:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
mt:{"^":"jY;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.v(b)
H.r(c,"$isa_",[P.H],"$asa_")
throw H.b(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[[P.a_,P.H]]},
$isA:1,
$asA:function(){return[[P.a_,P.H]]},
$asq:function(){return[[P.a_,P.H]]},
$isl:1,
$asl:function(){return[[P.a_,P.H]]},
$isa:1,
$asa:function(){return[[P.a_,P.H]]},
$ast:function(){return[[P.a_,P.H]]},
"%":"ClientRectList|DOMRectList"},
hv:{"^":"j;",
k:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gm(a))+" x "+H.d(this.gn(a))},
D:function(a,b){var z
if(b==null)return!1
if(!H.ao(b,"$isa_",[P.H],"$asa_"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.m(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gw:function(a){return W.ei(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isa_:1,
$asa_:function(){return[P.H]},
"%":";DOMRectReadOnly"},
mu:{"^":"k_;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.v(b)
H.u(c)
throw H.b(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[P.e]},
$isA:1,
$asA:function(){return[P.e]},
$asq:function(){return[P.e]},
$isl:1,
$asl:function(){return[P.e]},
$isa:1,
$asa:function(){return[P.e]},
$ast:function(){return[P.e]},
"%":"DOMStringList"},
mv:{"^":"j;0l:length=","%":"DOMTokenList"},
Q:{"^":"w;0en:tagName=",
gdM:function(a){return new W.k0(a)},
k:function(a){return a.localName},
O:["ap",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dx
if(z==null){z=H.h([],[W.ah])
y=new W.dQ(z)
C.a.j(z,W.eg(null))
C.a.j(z,W.er())
$.dx=y
d=y}else d=z
z=$.dw
if(z==null){z=new W.eu(d)
$.dw=z
c=z}else{z.a=d
c=z}}if($.am==null){z=document
y=z.implementation
y=(y&&C.K).e_(y,"")
$.am=y
$.cv=y.createRange()
y=$.am
y.toString
y=y.createElement("base")
H.i(y,"$isdi")
y.href=z.baseURI
z=$.am.head;(z&&C.L).K(z,y)}z=$.am
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.i(y,"$isbU")}z=$.am
if(!!this.$isbU)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.am.body;(z&&C.p).K(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.v(C.V,a.tagName)){z=$.cv;(z&&C.D).cA(z,x)
z=$.cv
w=(z&&C.D).dY(z,b)}else{x.innerHTML=b
w=$.am.createDocumentFragment()
for(z=J.m(w);y=x.firstChild,y!=null;)z.K(w,y)}z=$.am.body
if(x==null?z!=null:x!==z)J.da(x)
c.aZ(w)
C.j.dJ(document,w)
return w},function(a,b,c){return this.O(a,b,c,null)},"dZ",null,null,"gew",5,5,null],
cE:function(a,b,c,d){a.textContent=null
this.K(a,this.O(a,b,c,d))},
cD:function(a,b){return this.cE(a,b,null,null)},
a1:function(a,b){return a.getAttribute(b)},
dv:function(a,b){return a.removeAttribute(b)},
gc2:function(a){return new W.aX(a,"change",!1,[W.K])},
gc3:function(a){return new W.aX(a,"mousedown",!1,[W.Y])},
gc4:function(a){return new W.aX(a,"mousemove",!1,[W.Y])},
gc5:function(a){return new W.aX(a,"mouseup",!1,[W.Y])},
gc6:function(a){return new W.aX(a,H.u(W.dy(a)),!1,[W.aW])},
$isQ:1,
"%":";Element"},
hD:{"^":"n:36;",
$1:function(a){return!!J.B(H.i(a,"$isw")).$isQ}},
mx:{"^":"O;0n:height=,0m:width=","%":"HTMLEmbedElement"},
K:{"^":"j;",
gcb:function(a){return W.cO(a.target)},
dq:function(a,b,c,d){return a.initEvent(b,!0,!0)},
$isK:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
L:{"^":"j;",
dI:function(a,b,c,d){H.k(c,{func:1,args:[W.K]})
if(c!=null)this.dd(a,b,c,!1)},
dd:function(a,b,c,d){return a.addEventListener(b,H.ap(H.k(c,{func:1,args:[W.K]}),1),!1)},
e2:function(a,b){return a.dispatchEvent(b)},
dz:function(a,b,c,d){return a.removeEventListener(b,H.ap(H.k(c,{func:1,args:[W.K]}),1),!1)},
$isL:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBTransaction|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eo|ep|es|et"},
aw:{"^":"hb;",$isaw:1,"%":"File"},
mO:{"^":"k6;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.v(b)
H.i(c,"$isaw")
throw H.b(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aw]},
$isA:1,
$asA:function(){return[W.aw]},
$asq:function(){return[W.aw]},
$isl:1,
$asl:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$ast:function(){return[W.aw]},
"%":"FileList"},
mP:{"^":"L;0l:length=","%":"FileWriter"},
mS:{"^":"O;0l:length=","%":"HTMLFormElement"},
ax:{"^":"j;",$isax:1,"%":"Gamepad"},
hR:{"^":"O;","%":"HTMLHeadElement"},
mT:{"^":"j;0l:length=","%":"History"},
mU:{"^":"km;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.v(b)
H.i(c,"$isw")
throw H.b(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.w]},
$isA:1,
$asA:function(){return[W.w]},
$asq:function(){return[W.w]},
$isl:1,
$asl:function(){return[W.w]},
$isa:1,
$asa:function(){return[W.w]},
$ast:function(){return[W.w]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hS:{"^":"cu;","%":"HTMLDocument"},
hT:{"^":"hU;",
ex:function(a,b,c,d,e,f){return a.open(b,c)},
eh:function(a,b,c){return a.open(b,c)},
cB:function(a,b){return a.send(b)},
"%":"XMLHttpRequest"},
hU:{"^":"L;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
mV:{"^":"O;0n:height=,0m:width=","%":"HTMLIFrameElement"},
mX:{"^":"j;0n:height=,0m:width=","%":"ImageBitmap"},
mY:{"^":"j;0n:height=,0m:width=","%":"ImageData"},
aT:{"^":"O;0n:height=,0m:width=",$isaT:1,"%":"HTMLImageElement"},
dD:{"^":"O;0n:height=,0m:width=",$isdD:1,"%":"HTMLInputElement"},
bb:{"^":"e8;",$isbb:1,"%":"KeyboardEvent"},
ip:{"^":"j;",
k:function(a){return String(a)},
$isip:1,
"%":"Location"},
iv:{"^":"O;","%":"HTMLAudioElement;HTMLMediaElement"},
n5:{"^":"j;0l:length=","%":"MediaList"},
n6:{"^":"ku;",
i:function(a,b){return P.a6(a.get(H.u(b)))},
E:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a6(y.value[1]))}},
gG:function(a){var z=H.h([],[P.e])
this.E(a,new W.ix(z))
return z},
gl:function(a){return a.size},
$asW:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"MIDIInputMap"},
ix:{"^":"n:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
n7:{"^":"kv;",
i:function(a,b){return P.a6(a.get(H.u(b)))},
E:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a6(y.value[1]))}},
gG:function(a){var z=H.h([],[P.e])
this.E(a,new W.iy(z))
return z},
gl:function(a){return a.size},
$asW:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"MIDIOutputMap"},
iy:{"^":"n:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
az:{"^":"j;",$isaz:1,"%":"MimeType"},
n8:{"^":"kx;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.v(b)
H.i(c,"$isaz")
throw H.b(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.az]},
$isA:1,
$asA:function(){return[W.az]},
$asq:function(){return[W.az]},
$isl:1,
$asl:function(){return[W.az]},
$isa:1,
$asa:function(){return[W.az]},
$ast:function(){return[W.az]},
"%":"MimeTypeArray"},
Y:{"^":"e8;",
gc1:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.bg(a.offsetX,a.offsetY,[P.H])
else{z=a.target
if(!J.B(W.cO(z)).$isQ)throw H.b(P.D("offsetX is only supported on elements"))
y=H.i(W.cO(z),"$isQ")
z=a.clientX
x=a.clientY
w=[P.H]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.r(new P.bg(u,v,w),"$isbg",w,"$asbg")
if(typeof z!=="number")return z.a2()
if(typeof x!=="number")return x.a2()
return new P.bg(C.t.ce(z-u),C.t.ce(x-v),w)}},
$isY:1,
"%":";DragEvent|MouseEvent"},
a9:{"^":"ij;a",
gW:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.b(P.bH("No elements"))
if(y>1)throw H.b(P.bH("More than one element"))
return z.firstChild},
J:function(a,b){var z,y,x,w,v
H.r(b,"$isl",[W.w],"$asl")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.m(y),v=0;v<x;++v)w.K(y,z.firstChild)
return},
h:function(a,b,c){var z
H.v(b)
z=this.a
J.fn(z,H.i(c,"$isw"),C.w.i(z.childNodes,b))},
gu:function(a){var z=this.a.childNodes
return new W.dC(z,z.length,-1,[H.b4(C.w,z,"t",0)])},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){return C.w.i(this.a.childNodes,b)},
$asq:function(){return[W.w]},
$asl:function(){return[W.w]},
$asa:function(){return[W.w]}},
w:{"^":"L;0ei:previousSibling=",
ej:function(a){var z=a.parentNode
if(z!=null)J.bP(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.cK(a):z},
K:function(a,b){return a.appendChild(b)},
dw:function(a,b){return a.removeChild(b)},
dA:function(a,b,c){return a.replaceChild(b,c)},
$isw:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
iI:{"^":"kz;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.v(b)
H.i(c,"$isw")
throw H.b(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.w]},
$isA:1,
$asA:function(){return[W.w]},
$asq:function(){return[W.w]},
$isl:1,
$asl:function(){return[W.w]},
$isa:1,
$asa:function(){return[W.w]},
$ast:function(){return[W.w]},
"%":"NodeList|RadioNodeList"},
nh:{"^":"O;0n:height=,0m:width=","%":"HTMLObjectElement"},
nj:{"^":"L;0n:height=,0m:width=","%":"OffscreenCanvas"},
nk:{"^":"j;0n:height=,0m:width=","%":"PaintSize"},
aC:{"^":"j;0l:length=",$isaC:1,"%":"Plugin"},
nm:{"^":"kD;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.v(b)
H.i(c,"$isaC")
throw H.b(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aC]},
$isA:1,
$asA:function(){return[W.aC]},
$asq:function(){return[W.aC]},
$isl:1,
$asl:function(){return[W.aC]},
$isa:1,
$asa:function(){return[W.aC]},
$ast:function(){return[W.aC]},
"%":"PluginArray"},
no:{"^":"Y;0n:height=,0m:width=","%":"PointerEvent"},
bF:{"^":"K;",$isbF:1,"%":"ProgressEvent|ResourceProgressEvent"},
j1:{"^":"j;",
dY:function(a,b){return a.createContextualFragment(b)},
cA:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
nt:{"^":"kJ;",
i:function(a,b){return P.a6(a.get(H.u(b)))},
E:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a6(y.value[1]))}},
gG:function(a){var z=H.h([],[P.e])
this.E(a,new W.j8(z))
return z},
gl:function(a){return a.size},
$asW:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"RTCStatsReport"},
j8:{"^":"n:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
nu:{"^":"j;0n:height=,0m:width=","%":"Screen"},
dY:{"^":"O;0l:length=",$isdY:1,"%":"HTMLSelectElement"},
aD:{"^":"L;",$isaD:1,"%":"SourceBuffer"},
nw:{"^":"ep;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.v(b)
H.i(c,"$isaD")
throw H.b(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aD]},
$isA:1,
$asA:function(){return[W.aD]},
$asq:function(){return[W.aD]},
$isl:1,
$asl:function(){return[W.aD]},
$isa:1,
$asa:function(){return[W.aD]},
$ast:function(){return[W.aD]},
"%":"SourceBufferList"},
aE:{"^":"j;",$isaE:1,"%":"SpeechGrammar"},
nx:{"^":"kP;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.v(b)
H.i(c,"$isaE")
throw H.b(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aE]},
$isA:1,
$asA:function(){return[W.aE]},
$asq:function(){return[W.aE]},
$isl:1,
$asl:function(){return[W.aE]},
$isa:1,
$asa:function(){return[W.aE]},
$ast:function(){return[W.aE]},
"%":"SpeechGrammarList"},
aF:{"^":"j;0l:length=",$isaF:1,"%":"SpeechRecognitionResult"},
nA:{"^":"kS;",
i:function(a,b){return this.bo(a,H.u(b))},
E:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=0;!0;++z){y=this.ds(a,z)
if(y==null)return
b.$2(y,this.bo(a,y))}},
gG:function(a){var z=H.h([],[P.e])
this.E(a,new W.jl(z))
return z},
gl:function(a){return a.length},
bo:function(a,b){return a.getItem(b)},
ds:function(a,b){return a.key(b)},
$asW:function(){return[P.e,P.e]},
$isM:1,
$asM:function(){return[P.e,P.e]},
"%":"Storage"},
jl:{"^":"n:19;a",
$2:function(a,b){return C.a.j(this.a,a)}},
aG:{"^":"j;",$isaG:1,"%":"CSSStyleSheet|StyleSheet"},
js:{"^":"O;",
O:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ap(a,b,c,d)
z=W.hC("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a9(y).J(0,new W.a9(z))
return y},
"%":"HTMLTableElement"},
nD:{"^":"O;",
O:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ap(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.I.O(z.createElement("table"),b,c,d)
z.toString
z=new W.a9(z)
x=z.gW(z)
x.toString
z=new W.a9(x)
w=z.gW(z)
y.toString
w.toString
new W.a9(y).J(0,new W.a9(w))
return y},
"%":"HTMLTableRowElement"},
nE:{"^":"O;",
O:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ap(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.I.O(z.createElement("table"),b,c,d)
z.toString
z=new W.a9(z)
x=z.gW(z)
y.toString
x.toString
new W.a9(y).J(0,new W.a9(x))
return y},
"%":"HTMLTableSectionElement"},
e3:{"^":"O;",$ise3:1,"%":"HTMLTemplateElement"},
nF:{"^":"j;0m:width=","%":"TextMetrics"},
aH:{"^":"L;",$isaH:1,"%":"TextTrack"},
aI:{"^":"L;",$isaI:1,"%":"TextTrackCue|VTTCue"},
nG:{"^":"l_;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.v(b)
H.i(c,"$isaI")
throw H.b(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aI]},
$isA:1,
$asA:function(){return[W.aI]},
$asq:function(){return[W.aI]},
$isl:1,
$asl:function(){return[W.aI]},
$isa:1,
$asa:function(){return[W.aI]},
$ast:function(){return[W.aI]},
"%":"TextTrackCueList"},
nH:{"^":"et;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.v(b)
H.i(c,"$isaH")
throw H.b(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aH]},
$isA:1,
$asA:function(){return[W.aH]},
$asq:function(){return[W.aH]},
$isl:1,
$asl:function(){return[W.aH]},
$isa:1,
$asa:function(){return[W.aH]},
$ast:function(){return[W.aH]},
"%":"TextTrackList"},
nI:{"^":"j;0l:length=","%":"TimeRanges"},
aJ:{"^":"j;",$isaJ:1,"%":"Touch"},
nJ:{"^":"l4;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.v(b)
H.i(c,"$isaJ")
throw H.b(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aJ]},
$isA:1,
$asA:function(){return[W.aJ]},
$asq:function(){return[W.aJ]},
$isl:1,
$asl:function(){return[W.aJ]},
$isa:1,
$asa:function(){return[W.aJ]},
$ast:function(){return[W.aJ]},
"%":"TouchList"},
nK:{"^":"j;0l:length=","%":"TrackDefaultList"},
e8:{"^":"K;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
nY:{"^":"j;",
k:function(a){return String(a)},
"%":"URL"},
o0:{"^":"iv;0n:height=,0m:width=","%":"HTMLVideoElement"},
o1:{"^":"L;0l:length=","%":"VideoTrackList"},
o2:{"^":"L;0n:height=,0m:width=","%":"VisualViewport"},
o3:{"^":"j;0m:width=","%":"VTTRegion"},
aW:{"^":"Y;",
ge1:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.D("deltaY is not supported"))},
$isaW:1,
"%":"WheelEvent"},
jH:{"^":"L;",
gdL:function(a){var z,y,x
z=P.H
y=new P.P(0,$.E,[z])
x=H.k(new W.jI(new P.kW(y,[z])),{func:1,ret:-1,args:[P.H]})
this.dk(a)
this.dB(a,W.eA(x,z))
return y},
dB:function(a,b){return a.requestAnimationFrame(H.ap(H.k(b,{func:1,ret:-1,args:[P.H]}),1))},
dk:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isea:1,
"%":"DOMWindow|Window"},
jI:{"^":"n:20;a",
$1:function(a){var z=this.a
a=H.b2(H.cZ(a),{futureOr:1,type:H.o(z,0)})
z=z.a
if(z.a!==0)H.a0(P.bH("Future already completed"))
z.ad(a)}},
ec:{"^":"w;",$isec:1,"%":"Attr"},
o9:{"^":"la;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.v(b)
H.i(c,"$isav")
throw H.b(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.av]},
$isA:1,
$asA:function(){return[W.av]},
$asq:function(){return[W.av]},
$isl:1,
$asl:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$ast:function(){return[W.av]},
"%":"CSSRuleList"},
oa:{"^":"hv;",
k:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
D:function(a,b){var z
if(b==null)return!1
if(!H.ao(b,"$isa_",[P.H],"$asa_"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.m(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gw:function(a){return W.ei(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
ob:{"^":"lc;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.v(b)
H.i(c,"$isax")
throw H.b(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.ax]},
$isA:1,
$asA:function(){return[W.ax]},
$asq:function(){return[W.ax]},
$isl:1,
$asl:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$ast:function(){return[W.ax]},
"%":"GamepadList"},
og:{"^":"le;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.v(b)
H.i(c,"$isw")
throw H.b(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.w]},
$isA:1,
$asA:function(){return[W.w]},
$asq:function(){return[W.w]},
$isl:1,
$asl:function(){return[W.w]},
$isa:1,
$asa:function(){return[W.w]},
$ast:function(){return[W.w]},
"%":"MozNamedAttrMap|NamedNodeMap"},
oh:{"^":"lg;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.v(b)
H.i(c,"$isaF")
throw H.b(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aF]},
$isA:1,
$asA:function(){return[W.aF]},
$asq:function(){return[W.aF]},
$isl:1,
$asl:function(){return[W.aF]},
$isa:1,
$asa:function(){return[W.aF]},
$ast:function(){return[W.aF]},
"%":"SpeechRecognitionResultList"},
oi:{"^":"li;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.v(b)
H.i(c,"$isaG")
throw H.b(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aG]},
$isA:1,
$asA:function(){return[W.aG]},
$asq:function(){return[W.aG]},
$isl:1,
$asl:function(){return[W.aG]},
$isa:1,
$asa:function(){return[W.aG]},
$ast:function(){return[W.aG]},
"%":"StyleSheetList"},
jS:{"^":"dK;dj:a<",
E:function(a,b){var z,y,x,w,v,u
H.k(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=this.gG(this),y=z.length,x=this.a,w=J.m(x),v=0;v<z.length;z.length===y||(0,H.F)(z),++v){u=z[v]
b.$2(u,w.a1(x,u))}},
gG:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.h([],[P.e])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.i(z[w],"$isec")
if(v.namespaceURI==null)C.a.j(y,v.name)}return y},
$asW:function(){return[P.e,P.e]},
$asM:function(){return[P.e,P.e]}},
k0:{"^":"jS;a",
i:function(a,b){return J.cn(this.a,H.u(b))},
gl:function(a){return this.gG(this).length}},
bI:{"^":"jm;a,b,c,$ti"},
aX:{"^":"bI;a,b,c,$ti"},
k2:{"^":"jn;a,b,c,d,e,$ti",
sdt:function(a){this.d=H.k(a,{func:1,args:[W.K]})},
dR:function(a){var z,y,x
z=this.b
if(z==null)return
y=this.d
x=y!=null
if(x){H.k(y,{func:1,args:[W.K]})
if(x)J.fm(z,this.c,y,!1)}this.b=null
this.sdt(null)
return},
p:{
aa:function(a,b,c,d,e){var z=W.eA(new W.k3(c),W.K)
if(z!=null&&!0)J.fo(a,b,z,!1)
return new W.k2(0,a,b,z,!1,[e])}}},
k3:{"^":"n:21;a",
$1:function(a){return this.a.$1(H.i(a,"$isK"))}},
bJ:{"^":"c;a",
d8:function(a){var z,y
z=$.d1()
if(z.a===0){for(y=0;y<262;++y)z.h(0,C.U[y],W.lI())
for(y=0;y<12;++y)z.h(0,C.v[y],W.lJ())}},
Z:function(a){return $.f9().v(0,W.ba(a))},
T:function(a,b,c){var z,y,x
z=W.ba(a)
y=$.d1()
x=y.i(0,H.d(z)+"::"+b)
if(x==null)x=y.i(0,"*::"+b)
if(x==null)return!1
return H.c8(x.$4(a,b,c,this))},
$isah:1,
p:{
eg:function(a){var z,y
z=document.createElement("a")
y=new W.kK(z,window.location)
y=new W.bJ(y)
y.d8(a)
return y},
oe:[function(a,b,c,d){H.i(a,"$isQ")
H.u(b)
H.u(c)
H.i(d,"$isbJ")
return!0},"$4","lI",16,0,13],
of:[function(a,b,c,d){var z,y,x
H.i(a,"$isQ")
H.u(b)
H.u(c)
z=H.i(d,"$isbJ").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","lJ",16,0,13]}},
t:{"^":"c;$ti",
gu:function(a){return new W.dC(a,this.gl(a),-1,[H.b4(this,a,"t",0)])}},
dQ:{"^":"c;a",
Z:function(a){return C.a.by(this.a,new W.iK(a))},
T:function(a,b,c){return C.a.by(this.a,new W.iJ(a,b,c))},
$isah:1},
iK:{"^":"n:10;a",
$1:function(a){return H.i(a,"$isah").Z(this.a)}},
iJ:{"^":"n:10;a,b,c",
$1:function(a){return H.i(a,"$isah").T(this.a,this.b,this.c)}},
kL:{"^":"c;",
d9:function(a,b,c,d){var z,y,x
this.a.J(0,c)
z=b.aP(0,new W.kM())
y=b.aP(0,new W.kN())
this.b.J(0,z)
x=this.c
x.J(0,C.W)
x.J(0,y)},
Z:function(a){return this.a.v(0,W.ba(a))},
T:["cN",function(a,b,c){var z,y
z=W.ba(a)
y=this.c
if(y.v(0,H.d(z)+"::"+b))return this.d.dK(c)
else if(y.v(0,"*::"+b))return this.d.dK(c)
else{y=this.b
if(y.v(0,H.d(z)+"::"+b))return!0
else if(y.v(0,"*::"+b))return!0
else if(y.v(0,H.d(z)+"::*"))return!0
else if(y.v(0,"*::*"))return!0}return!1}],
$isah:1},
kM:{"^":"n:5;",
$1:function(a){return!C.a.v(C.v,H.u(a))}},
kN:{"^":"n:5;",
$1:function(a){return C.a.v(C.v,H.u(a))}},
kX:{"^":"kL;e,a,b,c,d",
T:function(a,b,c){if(this.cN(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cn(a,"template")==="")return this.e.v(0,b)
return!1},
p:{
er:function(){var z,y,x,w,v
z=P.e
y=P.cE(C.u,z)
x=H.o(C.u,0)
w=H.k(new W.kY(),{func:1,ret:z,args:[x]})
v=H.h(["TEMPLATE"],[z])
y=new W.kX(y,P.a7(null,null,null,z),P.a7(null,null,null,z),P.a7(null,null,null,z),null)
y.d9(null,new H.it(C.u,w,[x,z]),v,null)
return y}}},
kY:{"^":"n:22;",
$1:function(a){return"TEMPLATE::"+H.d(H.u(a))}},
kV:{"^":"c;",
Z:function(a){var z=J.B(a)
if(!!z.$isdX)return!1
z=!!z.$isJ
if(z&&W.ba(a)==="foreignObject")return!1
if(z)return!0
return!1},
T:function(a,b,c){if(b==="is"||C.h.cH(b,"on"))return!1
return this.Z(a)},
$isah:1},
dC:{"^":"c;a,b,c,0d,$ti",
sbm:function(a){this.d=H.y(a,H.o(this,0))},
q:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbm(J.bt(this.a,z))
this.c=z
return!0}this.sbm(null)
this.c=y
return!1},
gA:function(a){return this.d},
$isay:1},
jV:{"^":"c;a",$isL:1,$isea:1,p:{
jW:function(a){if(a===window)return H.i(a,"$isea")
else return new W.jV(a)}}},
ah:{"^":"c;"},
kK:{"^":"c;a,b",$isnX:1},
eu:{"^":"c;a",
aZ:function(a){new W.l7(this).$2(a,null)},
a7:function(a,b){if(b==null)J.da(a)
else J.bP(b,a)},
dE:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fI(a)
x=J.cn(y.gdj(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a3(t)}v="element unprintable"
try{v=J.bw(a)}catch(t){H.a3(t)}try{u=W.ba(a)
this.dD(H.i(a,"$isQ"),b,z,v,u,H.i(y,"$isM"),H.u(x))}catch(t){if(H.a3(t) instanceof P.au)throw t
else{this.a7(a,b)
window
s="Removing corrupted element "+H.d(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dD:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a7(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.Z(a)){this.a7(a,b)
window
z="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.T(a,"is",g)){this.a7(a,b)
window
z="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gG(f)
y=H.h(z.slice(0),[H.o(z,0)])
for(x=f.gG(f).length-1,z=f.a,w=J.m(z);x>=0;--x){if(x>=y.length)return H.f(y,x)
v=y[x]
if(!this.a.T(a,J.fX(v),w.a1(z,v))){window
u="Removing disallowed attribute <"+H.d(e)+" "+v+'="'+H.d(w.a1(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.a1(z,v)
w.dv(z,v)}}if(!!J.B(a).$ise3)this.aZ(a.content)},
$isnf:1},
l7:{"^":"n:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dE(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a7(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fK(z)}catch(w){H.a3(w)
v=H.i(z,"$isw")
if(x){u=v.parentNode
if(u!=null)J.bP(u,v)}else J.bP(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.i(y,"$isw")}}},
jU:{"^":"j+hn;"},
jX:{"^":"j+q;"},
jY:{"^":"jX+t;"},
jZ:{"^":"j+q;"},
k_:{"^":"jZ+t;"},
k5:{"^":"j+q;"},
k6:{"^":"k5+t;"},
kl:{"^":"j+q;"},
km:{"^":"kl+t;"},
ku:{"^":"j+W;"},
kv:{"^":"j+W;"},
kw:{"^":"j+q;"},
kx:{"^":"kw+t;"},
ky:{"^":"j+q;"},
kz:{"^":"ky+t;"},
kC:{"^":"j+q;"},
kD:{"^":"kC+t;"},
kJ:{"^":"j+W;"},
eo:{"^":"L+q;"},
ep:{"^":"eo+t;"},
kO:{"^":"j+q;"},
kP:{"^":"kO+t;"},
kS:{"^":"j+W;"},
kZ:{"^":"j+q;"},
l_:{"^":"kZ+t;"},
es:{"^":"L+q;"},
et:{"^":"es+t;"},
l3:{"^":"j+q;"},
l4:{"^":"l3+t;"},
l9:{"^":"j+q;"},
la:{"^":"l9+t;"},
lb:{"^":"j+q;"},
lc:{"^":"lb+t;"},
ld:{"^":"j+q;"},
le:{"^":"ld+t;"},
lf:{"^":"j+q;"},
lg:{"^":"lf+t;"},
lh:{"^":"j+q;"},
li:{"^":"lh+t;"}}],["","",,P,{"^":"",
a6:function(a){var z,y,x,w,v
if(a==null)return
z=P.S(P.e,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.F)(y),++w){v=H.u(y[w])
z.h(0,v,a[v])}return z},
lw:function(a,b){var z={}
a.E(0,new P.lx(z))
return z},
ly:function(a){var z,y
z=new P.P(0,$.E,[null])
y=new P.cM(z,[null])
a.then(H.ap(new P.lz(y),1))["catch"](H.ap(new P.lA(y),1))
return z},
ds:function(){var z=$.dr
if(z==null){z=J.ck(window.navigator.userAgent,"Opera",0)
$.dr=z}return z},
hs:function(){var z,y
z=$.dn
if(z!=null)return z
y=$.dp
if(y==null){y=J.ck(window.navigator.userAgent,"Firefox",0)
$.dp=y}if(y)z="-moz-"
else{y=$.dq
if(y==null){y=!P.ds()&&J.ck(window.navigator.userAgent,"Trident/",0)
$.dq=y}if(y)z="-ms-"
else z=P.ds()?"-o-":"-webkit-"}$.dn=z
return z},
jJ:{"^":"c;",
bY:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}C.a.j(z,a)
C.a.j(this.b,null)
return y},
aO:function(a){var z,y,x,w,v,u,t,s,r,q
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){y=a.getTime()
if(Math.abs(y)<=864e13)x=!1
else x=!0
if(x)H.a0(P.cp("DateTime is outside valid range: "+y))
return new P.b8(y,!0)}if(a instanceof RegExp)throw H.b(P.cL("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.ly(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.bY(a)
x=this.b
if(v>=x.length)return H.f(x,v)
u=x[v]
z.a=u
if(u!=null)return u
u=P.ii()
z.a=u
C.a.h(x,v,u)
this.ea(a,new P.jL(z,this))
return z.a}if(a instanceof Array){t=a
v=this.bY(t)
x=this.b
if(v>=x.length)return H.f(x,v)
u=x[v]
if(u!=null)return u
s=J.b3(t)
r=s.gl(t)
u=this.c?new Array(r):t
C.a.h(x,v,u)
for(x=J.ca(u),q=0;q<r;++q)x.h(u,q,this.aO(s.i(t,q)))
return u}return a}},
jL:{"^":"n:24;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.aO(b)
J.fk(z,a,y)
return y}},
lx:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
jK:{"^":"jJ;a,b,c",
ea:function(a,b){var z,y,x,w
H.k(b,{func:1,args:[,,]})
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.F)(z),++x){w=z[x]
b.$2(w,a[w])}}},
lz:{"^":"n:12;a",
$1:function(a){return this.a.aH(0,a)}},
lA:{"^":"n:12;a",
$1:function(a){return this.a.dU(a)}}}],["","",,P,{"^":"",iM:{"^":"j7;",$isiM:1,"%":"IDBOpenDBRequest|IDBVersionChangeRequest"},j7:{"^":"L;","%":";IDBRequest"},o_:{"^":"K;0cb:target=","%":"IDBVersionChangeEvent"}}],["","",,P,{"^":"",
m1:function(a){return Math.sqrt(a)},
eh:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
bg:{"^":"c;a0:a>,U:b>,$ti",
k:function(a){return"Point("+H.d(this.a)+", "+H.d(this.b)+")"},
D:function(a,b){if(b==null)return!1
return H.ao(b,"$isbg",[P.H],null)&&this.a==J.bT(b)&&this.b==b.gU(b)},
gw:function(a){var z,y,x
z=J.at(this.a)
y=J.at(this.b)
y=P.eh(P.eh(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
kE:{"^":"c;"},
a_:{"^":"kE;$ti"}}],["","",,P,{"^":"",h7:{"^":"j;",$ish7:1,"%":"SVGAnimatedLength"},my:{"^":"J;0n:height=,0m:width=","%":"SVGFEBlendElement"},mz:{"^":"J;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},mA:{"^":"J;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},mB:{"^":"J;0n:height=,0m:width=","%":"SVGFECompositeElement"},mC:{"^":"J;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},mD:{"^":"J;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},mE:{"^":"J;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},mF:{"^":"J;0n:height=,0m:width=","%":"SVGFEFloodElement"},mG:{"^":"J;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},mH:{"^":"J;0n:height=,0m:width=","%":"SVGFEImageElement"},mI:{"^":"J;0n:height=,0m:width=","%":"SVGFEMergeElement"},mJ:{"^":"J;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},mK:{"^":"J;0n:height=,0m:width=","%":"SVGFEOffsetElement"},mL:{"^":"J;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},mM:{"^":"J;0n:height=,0m:width=","%":"SVGFETileElement"},mN:{"^":"J;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},mQ:{"^":"J;0n:height=,0m:width=","%":"SVGFilterElement"},mR:{"^":"bA;0n:height=,0m:width=","%":"SVGForeignObjectElement"},hP:{"^":"bA;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bA:{"^":"J;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},mZ:{"^":"bA;0n:height=,0m:width=","%":"SVGImageElement"},bc:{"^":"j;",$isbc:1,"%":"SVGLength"},n3:{"^":"ko;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return this.S(a,b)},
h:function(a,b,c){H.v(b)
H.i(c,"$isbc")
throw H.b(P.D("Cannot assign element of immutable List."))},
t:function(a,b){return this.i(a,b)},
S:function(a,b){return a.getItem(b)},
$asq:function(){return[P.bc]},
$isl:1,
$asl:function(){return[P.bc]},
$isa:1,
$asa:function(){return[P.bc]},
$ast:function(){return[P.bc]},
"%":"SVGLengthList"},n4:{"^":"J;0n:height=,0m:width=","%":"SVGMaskElement"},bf:{"^":"j;",$isbf:1,"%":"SVGNumber"},ng:{"^":"kB;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return this.S(a,b)},
h:function(a,b,c){H.v(b)
H.i(c,"$isbf")
throw H.b(P.D("Cannot assign element of immutable List."))},
t:function(a,b){return this.i(a,b)},
S:function(a,b){return a.getItem(b)},
$asq:function(){return[P.bf]},
$isl:1,
$asl:function(){return[P.bf]},
$isa:1,
$asa:function(){return[P.bf]},
$ast:function(){return[P.bf]},
"%":"SVGNumberList"},nl:{"^":"J;0n:height=,0m:width=","%":"SVGPatternElement"},nn:{"^":"j;0l:length=","%":"SVGPointList"},np:{"^":"j;0n:height=,0m:width=","%":"SVGRect"},nq:{"^":"hP;0n:height=,0m:width=","%":"SVGRectElement"},dX:{"^":"J;",$isdX:1,"%":"SVGScriptElement"},nB:{"^":"kU;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return this.S(a,b)},
h:function(a,b,c){H.v(b)
H.u(c)
throw H.b(P.D("Cannot assign element of immutable List."))},
t:function(a,b){return this.i(a,b)},
S:function(a,b){return a.getItem(b)},
$asq:function(){return[P.e]},
$isl:1,
$asl:function(){return[P.e]},
$isa:1,
$asa:function(){return[P.e]},
$ast:function(){return[P.e]},
"%":"SVGStringList"},J:{"^":"Q;",
O:function(a,b,c,d){var z,y,x,w,v,u
z=H.h([],[W.ah])
C.a.j(z,W.eg(null))
C.a.j(z,W.er())
C.a.j(z,new W.kV())
c=new W.eu(new W.dQ(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).dZ(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a9(w)
u=z.gW(z)
for(z=J.m(v);x=u.firstChild,x!=null;)z.K(v,x)
return v},
gc2:function(a){return new W.aX(a,"change",!1,[W.K])},
$isJ:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},nC:{"^":"bA;0n:height=,0m:width=","%":"SVGSVGElement"},bl:{"^":"j;",$isbl:1,"%":"SVGTransform"},nL:{"^":"l6;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return this.S(a,b)},
h:function(a,b,c){H.v(b)
H.i(c,"$isbl")
throw H.b(P.D("Cannot assign element of immutable List."))},
t:function(a,b){return this.i(a,b)},
S:function(a,b){return a.getItem(b)},
$asq:function(){return[P.bl]},
$isl:1,
$asl:function(){return[P.bl]},
$isa:1,
$asa:function(){return[P.bl]},
$ast:function(){return[P.bl]},
"%":"SVGTransformList"},nZ:{"^":"bA;0n:height=,0m:width=","%":"SVGUseElement"},kn:{"^":"j+q;"},ko:{"^":"kn+t;"},kA:{"^":"j+q;"},kB:{"^":"kA+t;"},kT:{"^":"j+q;"},kU:{"^":"kT+t;"},l5:{"^":"j+q;"},l6:{"^":"l5+t;"}}],["","",,P,{"^":"",af:{"^":"c;",$isl:1,
$asl:function(){return[P.ar]},
$isa:1,
$asa:function(){return[P.ar]},
$isjx:1}}],["","",,P,{"^":"",mb:{"^":"j;0l:length=","%":"AudioBuffer"},mc:{"^":"jT;",
i:function(a,b){return P.a6(a.get(H.u(b)))},
E:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a6(y.value[1]))}},
gG:function(a){var z=H.h([],[P.e])
this.E(a,new P.h9(z))
return z},
gl:function(a){return a.size},
$asW:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"AudioParamMap"},h9:{"^":"n:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},md:{"^":"L;0l:length=","%":"AudioTrackList"},ha:{"^":"L;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},ni:{"^":"ha;0l:length=","%":"OfflineAudioContext"},jT:{"^":"j+W;"}}],["","",,P,{"^":"",hc:{"^":"j;",$ishc:1,"%":"WebGLBuffer"},hK:{"^":"j;",$ishK:1,"%":"WebGLFramebuffer"},j_:{"^":"j;",$isj_:1,"%":"WebGLProgram"},nr:{"^":"j;",
bx:function(a,b){return a.activeTexture(b)},
bz:function(a,b,c){return a.attachShader(b,c)},
bA:function(a,b,c){return a.bindBuffer(b,c)},
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
bO:function(a){return a.createTexture()},
bQ:function(a,b){return a.depthMask(b)},
bR:function(a,b){return a.disable(b)},
bS:function(a,b,c,d){return a.drawArrays(b,c,d)},
bT:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bU:function(a,b){return a.enable(b)},
bV:function(a,b){return a.enableVertexAttribArray(b)},
al:function(a){return P.a6(a.getContextAttributes())},
aR:function(a){return a.getError()},
aS:function(a,b){return a.getProgramInfoLog(b)},
aT:function(a,b,c){return a.getProgramParameter(b,c)},
aV:function(a,b){return a.getShaderInfoLog(b)},
aW:function(a,b,c){return a.getShaderParameter(b,c)},
aX:function(a,b,c){return a.getUniformLocation(b,c)},
bZ:function(a,b){return a.linkProgram(b)},
c7:function(a,b,c){return a.pixelStorei(b,c)},
b0:function(a,b,c){return a.shaderSource(b,c)},
b1:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aM:function(a,b,c,d,e,f,g,h,i,j){var z
if(!!J.B(g).$isaT)z=!0
else z=!1
if(z){this.aG(a,b,c,d,e,f,g)
return}throw H.b(P.cp("Incorrect number or type of arguments"))},
cc:function(a,b,c,d,e,f,g){return this.aM(a,b,c,d,e,f,g,null,null,null)},
aG:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cd:function(a,b,c,d){return a.texParameteri(b,c,d)},
cf:function(a,b,c){return a.uniform1f(b,c)},
cg:function(a,b,c){return a.uniform1fv(b,c)},
ci:function(a,b,c){return a.uniform1i(b,c)},
cj:function(a,b,c){return a.uniform1iv(b,c)},
ck:function(a,b,c){return a.uniform2fv(b,c)},
cl:function(a,b,c){return a.uniform3fv(b,c)},
cm:function(a,b,c){return a.uniform4fv(b,c)},
cn:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
co:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cp:function(a,b){return a.useProgram(b)},
cr:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ct:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},ns:{"^":"j;",
dN:function(a,b){return a.beginTransformFeedback(b)},
dQ:function(a,b){return a.bindVertexArray(b)},
e0:function(a){return a.createVertexArray()},
e3:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
e4:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
e6:function(a){return a.endTransformFeedback()},
eq:function(a,b,c,d){this.dH(a,b,H.r(c,"$isa",[P.e],"$asa"),d)
return},
dH:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
es:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bx:function(a,b){return a.activeTexture(b)},
bz:function(a,b,c){return a.attachShader(b,c)},
bA:function(a,b,c){return a.bindBuffer(b,c)},
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
bO:function(a){return a.createTexture()},
bQ:function(a,b){return a.depthMask(b)},
bR:function(a,b){return a.disable(b)},
bS:function(a,b,c,d){return a.drawArrays(b,c,d)},
bT:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bU:function(a,b){return a.enable(b)},
bV:function(a,b){return a.enableVertexAttribArray(b)},
al:function(a){return P.a6(a.getContextAttributes())},
aR:function(a){return a.getError()},
aS:function(a,b){return a.getProgramInfoLog(b)},
aT:function(a,b,c){return a.getProgramParameter(b,c)},
aV:function(a,b){return a.getShaderInfoLog(b)},
aW:function(a,b,c){return a.getShaderParameter(b,c)},
aX:function(a,b,c){return a.getUniformLocation(b,c)},
bZ:function(a,b){return a.linkProgram(b)},
c7:function(a,b,c){return a.pixelStorei(b,c)},
b0:function(a,b,c){return a.shaderSource(b,c)},
b1:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aM:function(a,b,c,d,e,f,g,h,i,j){var z
if(!!J.B(g).$isaT)z=!0
else z=!1
if(z){this.aG(a,b,c,d,e,f,g)
return}throw H.b(P.cp("Incorrect number or type of arguments"))},
cc:function(a,b,c,d,e,f,g){return this.aM(a,b,c,d,e,f,g,null,null,null)},
aG:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cd:function(a,b,c,d){return a.texParameteri(b,c,d)},
cf:function(a,b,c){return a.uniform1f(b,c)},
cg:function(a,b,c){return a.uniform1fv(b,c)},
ci:function(a,b,c){return a.uniform1i(b,c)},
cj:function(a,b,c){return a.uniform1iv(b,c)},
ck:function(a,b,c){return a.uniform2fv(b,c)},
cl:function(a,b,c){return a.uniform3fv(b,c)},
cm:function(a,b,c){return a.uniform4fv(b,c)},
cn:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
co:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cp:function(a,b){return a.useProgram(b)},
cr:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ct:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},jd:{"^":"j;",$isjd:1,"%":"WebGLShader"},jt:{"^":"j;",$isjt:1,"%":"WebGLTexture"},jy:{"^":"j;",$isjy:1,"%":"WebGLUniformLocation"},jF:{"^":"j;",$isjF:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",ny:{"^":"kR;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return P.a6(this.dr(a,b))},
h:function(a,b,c){H.v(b)
H.i(c,"$isM")
throw H.b(P.D("Cannot assign element of immutable List."))},
t:function(a,b){return this.i(a,b)},
dr:function(a,b){return a.item(b)},
$asq:function(){return[[P.M,,,]]},
$isl:1,
$asl:function(){return[[P.M,,,]]},
$isa:1,
$asa:function(){return[[P.M,,,]]},
$ast:function(){return[[P.M,,,]]},
"%":"SQLResultSetRowList"},kQ:{"^":"j+q;"},kR:{"^":"kQ+t;"}}],["","",,G,{"^":"",
jM:function(a){var z,y,x,w
z=H.h(a.split("\n"),[P.e])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.f(z,y)
C.a.h(z,y,w+H.d(z[y]))}return C.a.a9(z,"\n")},
ed:function(a,b,c){var z,y,x,w
z=J.m(a)
y=z.bN(a,b)
z.b0(a,y,c)
z.bK(a,y)
x=H.c8(z.aW(a,y,35713))
if(x!=null&&!x){w=z.aV(a,y)
P.al("E:Compilation failed:")
P.al("E:"+G.jM(c))
P.al("E:Failure:")
P.al(C.h.F("E:",w))
throw H.b(w)}return y},
by:function(a,b){var z,y,x
H.r(a,"$isa",[T.p],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.b.h(b,z,J.bT(a[y]))
if(y>=a.length)return H.f(a,y)
C.b.h(b,z+1,J.cm(a[y]))
z+=2
if(y>=a.length)return H.f(a,y)
x=J.d8(a[y])
if(z>=b.length)return H.f(b,z)
b[z]=x}return b},
hG:function(a,b){var z,y
H.r(a,"$isa",[T.aj],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.b.h(b,z,J.bT(a[y]))
if(y>=a.length)return H.f(a,y)
C.b.h(b,z+1,J.cm(a[y]))}return b},
hH:function(a,b){var z,y,x,w,v
H.r(a,"$isa",[T.aV],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.b.h(b,z,J.bT(a[y]))
if(y>=a.length)return H.f(a,y)
C.b.h(b,z+1,J.cm(a[y]))
x=z+2
if(y>=a.length)return H.f(a,y)
w=J.d8(a[y])
v=b.length
if(x>=v)return H.f(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.f(a,y)
w=J.fN(a[y])
if(z>=v)return H.f(b,z)
b[z]=w}return b},
hF:function(a,b){var z,y
H.r(a,"$isa",[[P.a,P.C]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.n.h(b,z,J.bt(a[y],0))
if(y>=a.length)return H.f(a,y)
C.n.h(b,z+1,J.bt(a[y],1))
if(y>=a.length)return H.f(a,y)
C.n.h(b,z+2,J.bt(a[y],2))
if(y>=a.length)return H.f(a,y)
C.n.h(b,z+3,J.bt(a[y],3))}return b},
kj:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.ag(z,[H.o(z,0)]),y=y.gu(y),x=b.x,w=[[P.a,P.C]],v=[P.ar],u=[T.aV],t=[T.p],s=[T.aj];y.q();){r=y.d
if(!x.ai(0,r)){r="Dropping unnecessary attribute: "+H.d(r)
if($.eH>0)H.aQ("I: "+r)
continue}q=z.i(0,r)
switch($.ac().i(0,r).a){case"vec2":b.a3(r,G.hG(H.bO(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.a3(r,G.by(H.bO(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.a3(r,G.hH(H.bO(q,"$isa",u,"$asa"),null),4)
break
case"float":b.a3(r,new Float32Array(H.c5(H.bO(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.a3(r,G.hF(H.bO(q,"$isa",w,"$asa"),null),4)
break}}},
aU:{"^":"c;"},
aK:{"^":"aU;d,a,b,c",
as:function(){return this.d},
k:function(a){var z,y,x,w
z=H.h(["{"+new H.e7(H.lF(this)).k(0)+"}["+H.d(this.a)+"]"],[P.e])
for(y=this.d,x=new H.ag(y,[H.o(y,0)]),x=x.gu(x);x.q();){w=x.d
C.a.j(z,H.d(w)+": "+H.d(y.i(0,w)))}return C.a.a9(z,"\n")}},
hd:{"^":"dZ;"},
hf:{"^":"c;0a,b",
bW:function(a,b,c){J.fF(this.a,b)
if(c>0)J.h3(this.a,b,c)},
cs:function(a,b,c,d,e,f,g,h){J.cj(this.a,34962,b)
J.h4(this.a,c,d,e,!1,g,h)}},
hJ:{"^":"c;a,b,c,d,e"},
dA:{"^":"c;a,b,c"},
dB:{"^":"c;a,b,c,d"},
hO:{"^":"c;a,b,c,d,e",
b6:function(a){switch($.ac().i(0,a).a){case"vec2":this.e.h(0,a,H.h([],[T.aj]))
break
case"vec3":this.e.h(0,a,H.h([],[T.p]))
break
case"vec4":this.e.h(0,a,H.h([],[T.aV]))
break
case"float":this.e.h(0,a,H.h([],[P.ar]))
break
case"uvec4":this.e.h(0,a,H.h([],[[P.a,P.C]]))
break}},
cS:function(a){var z,y,x,w,v,u
H.r(a,"$isa",[T.p],"$asa")
z=this.d
y=z.length
C.a.j(this.b,new G.dA(y,y+1,y+2))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.F)(a),++w){v=a[w]
u=new T.p(new Float32Array(3))
u.B(v)
C.a.j(z,u)}},
cP:function(a,b){var z,y,x,w,v,u,t
z=[T.aj]
H.r(b,"$isa",z,"$asa")
y=H.r(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.F)(b),++w){v=b[w]
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.j(y,new T.aj(u))}},
cQ:function(a,b){var z,y,x,w,v,u
z=[T.p]
H.r(b,"$isa",z,"$asa")
y=H.r(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.F)(b),++w){v=b[w]
u=new T.p(new Float32Array(3))
u.B(v)
x.j(y,u)}},
cT:function(a){var z,y,x,w,v,u
H.r(a,"$isa",[T.p],"$asa")
z=this.d
y=z.length
C.a.j(this.c,new G.dB(y,y+1,y+2,y+3))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.F)(a),++w){v=a[w]
u=new T.p(new Float32Array(3))
u.B(v)
C.a.j(z,u)}},
cY:function(){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.h(x,[P.C])
for(x=z.length,v=0,u=0;u<z.length;z.length===x||(0,H.F)(z),++u){t=z[u]
C.a.h(w,v,t.a)
C.a.h(w,v+1,t.b)
C.a.h(w,v+2,t.c)
v+=3}for(z=y.length,u=0;u<y.length;y.length===z||(0,H.F)(y),++u){s=y[u]
x=s.a
C.a.h(w,v,x)
C.a.h(w,v+1,s.b)
r=s.c
C.a.h(w,v+2,r)
C.a.h(w,v+3,x)
C.a.h(w,v+4,r)
C.a.h(w,v+5,s.d)
v+=6}return w},
k:function(a){var z,y,x,w,v
z=H.h(["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"],[P.e])
for(y=this.e,x=new H.ag(y,[H.o(y,0)]),x=x.gu(x);x.q();){w=x.d
v=$.ac().i(0,w).a
C.a.j(z,H.d(w)+"["+v+","+y.i(0,w).length+"]")}return C.a.a9(z," ")}},
bd:{"^":"aU;",
at:function(a,b,c,d){this.e.B(c)
this.f.B(d)}},
dT:{"^":"bd;z,Q,d,e,f,a,b,c",
ar:function(a,b){var z,y,x,w
z=this.z.a
y=z[0]
x=a.length
if(b>=x)return H.f(a,b)
a[b]=y
y=b+1
w=z[1]
if(y>=x)return H.f(a,y)
a[y]=w
w=b+2
z=z[2]
if(w>=x)return H.f(a,w)
a[w]=z
z=b+8
w=this.e.a
y=w[0]
if(z>=x)return H.f(a,z)
a[z]=y
y=b+9
z=w[1]
if(y>=x)return H.f(a,y)
a[y]=z
z=b+10
w=w[2]
if(z>=x)return H.f(a,z)
a[z]=w
w=b+12
z=this.f.a
y=z[0]
if(w>=x)return H.f(a,w)
a[w]=y
y=b+13
w=z[1]
if(y>=x)return H.f(a,y)
a[y]=w
w=b+14
z=z[2]
if(w>=x)return H.f(a,w)
a[w]=z
z=b+7
if(z>=x)return H.f(a,z)
a[z]=this.Q},
k:function(a){return"PL: p:"+H.d(this.z)+"  r:"+this.Q}},
dt:{"^":"bd;z,Q,ch,cx,d,e,f,a,b,c",
ar:function(a,b){var z,y,x,w
z=b+4
y=this.z.a
x=y[0]
w=a.length
if(z>=w)return H.f(a,z)
a[z]=x
x=b+5
z=y[1]
if(x>=w)return H.f(a,x)
a[x]=z
z=b+6
y=y[2]
if(z>=w)return H.f(a,z)
a[z]=y
y=b+8
z=this.e.a
x=z[0]
if(y>=w)return H.f(a,y)
a[y]=x
x=b+9
y=z[1]
if(x>=w)return H.f(a,x)
a[x]=y
y=b+10
z=z[2]
if(y>=w)return H.f(a,y)
a[y]=z
z=b+12
y=this.f.a
x=y[0]
if(z>=w)return H.f(a,z)
a[z]=x
x=b+13
z=y[1]
if(x>=w)return H.f(a,x)
a[x]=z
z=b+14
y=y[2]
if(z>=w)return H.f(a,z)
a[z]=y},
k:function(a){return"DL: p:"+H.d(this.z)}},
e_:{"^":"bd;z,Q,ch,cx,cy,db,dx,dy,fr,fx,d,e,f,a,b,c",
ar:function(a,b){var z,y,x,w
z=this.z.a
y=z[0]
x=a.length
if(b>=x)return H.f(a,b)
a[b]=y
y=b+1
w=z[1]
if(y>=x)return H.f(a,y)
a[y]=w
w=b+2
z=z[2]
if(w>=x)return H.f(a,w)
a[w]=z
z=b+4
w=this.Q.a
y=w[0]
if(z>=x)return H.f(a,z)
a[z]=y
y=b+5
z=w[1]
if(y>=x)return H.f(a,y)
a[y]=z
z=b+6
w=w[2]
if(z>=x)return H.f(a,z)
a[z]=w
w=b+8
z=this.e.a
y=z[0]
if(w>=x)return H.f(a,w)
a[w]=y
y=b+9
w=z[1]
if(y>=x)return H.f(a,y)
a[y]=w
w=b+10
z=z[2]
if(w>=x)return H.f(a,w)
a[w]=z
z=b+12
w=this.f.a
y=w[0]
if(z>=x)return H.f(a,z)
a[z]=y
y=b+13
z=w[1]
if(y>=x)return H.f(a,y)
a[y]=z
z=b+14
w=w[2]
if(z>=x)return H.f(a,z)
a[z]=w
w=b+7
if(w>=x)return H.f(a,w)
a[w]=this.ch
w=b+11
z=Math.cos(H.eE(this.cx))
if(w>=x)return H.f(a,w)
a[w]=z
z=b+15
if(z>=x)return H.f(a,z)
a[z]=this.cy},
k:function(a){return"SL: p:"+H.d(this.z)+"  d:"+H.d(this.Q)+"  r:"+this.ch+"  a:"+H.d(this.cx)}},
hV:{"^":"aK;x,y,z,d,a,b,c",
as:function(){var z,y,x
z=this.y
y=this.z
G.hW(z,y,this.x)
x=this.d
x.h(0,"uLightDescs",z)
x.h(0,"uLightTypes",y)
return x},
p:{
hW:function(a,b,c){var z,y,x,w,v
H.r(c,"$isa",[G.bd],"$asa")
C.b.bX(a,0,a.length,0)
C.b.bX(b,0,4,0)
for(z=c.length,y=0,x=0;x<c.length;c.length===z||(0,H.F)(c),++x){w=c[x]
if(w.c){w.ar(a,y*16)
v=w.d
if(y>=4)return H.f(b,y)
b[y]=v;++y}}}}},
e5:{"^":"c;a,b,c"},
e4:{"^":"c;a,b,c"},
iu:{"^":"aK;d,a,b,c",p:{
dM:function(a){var z=P.S(P.e,P.c)
z.h(0,"cDepthTest",!0)
z.h(0,"cDepthWrite",!0)
z.h(0,"cBlendEquation",$.eQ())
z.h(0,"cStencilFunc",$.eZ())
return new G.iu(z,a,!1,!0)}}},
dN:{"^":"aU;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
saA:function(a){this.cx=H.r(a,"$isa",[P.C],"$asa")},
b5:function(a,b,c){var z,y
C.h.a6(a,0)
H.i(b,"$isaf")
this.cy.h(0,a,b)
z=this.d
y=this.r.i(0,a)
J.cj(z.a,34962,y)
J.d6(z.a,34962,b,35048)},
ac:function(a){this.ch=a
this.b5("aPosition",a,3)},
cZ:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a3:function(a,b,c){var z,y,x,w,v
z=J.d3(a,0)===105
if(z&&this.z===0)this.z=C.f.cO(b.length,c)
y=this.r
x=this.d
y.h(0,a,J.bR(x.a))
this.b5(a,b,c)
w=$.ac().i(0,a)
if(w==null)throw H.b("Unknown canonical "+a)
v=this.x.i(0,a)
J.bQ(x.a,this.e)
x.bW(0,v,z?1:0)
x.cs(0,y.i(0,a),v,w.b7(),5126,!1,0,0)},
b4:function(a){var z,y,x,w
z=this.r
y=this.d
z.h(0,"aPosition",J.bR(y.a))
this.ac(a)
x=$.ac().i(0,"aPosition")
if(x==null)throw H.b("Unknown canonical aPosition")
w=this.x.i(0,"aPosition")
J.bQ(y.a,this.e)
y.bW(0,w,0)
y.cs(0,z.i(0,"aPosition"),w,x.b7(),5126,!1,0,0)},
a4:function(a){var z,y,x
H.r(a,"$isa",[P.C],"$asa")
z=this.ch.length
if(z<768){this.saA(new Uint8Array(H.c5(a)))
this.Q=5121}else if(z<196608){this.saA(new Uint16Array(H.c5(a)))
this.Q=5123}else{this.saA(new Uint32Array(H.c5(a)))
this.Q=5125}z=this.d
J.bQ(z.a,this.e)
y=this.y
x=this.cx
J.cj(z.a,34963,y)
J.d6(z.a,34963,x,35048)},
cR:function(a){H.r(a,"$isa",[P.C],"$asa")
this.y=J.bR(this.d.a)
this.a4(a)},
k:function(a){var z,y,x,w
z=this.cx
y=H.h(["Faces:"+(z==null?0:z.length)],[P.e])
for(z=this.cy,x=new H.ag(z,[H.o(z,0)]),x=x.gu(x);x.q();){w=x.d
C.a.j(y,H.d(w)+":"+z.i(0,w).length)}return"MESH["+H.d(this.a)+"] "+C.a.a9(y,"  ")},
p:{
iw:function(a,b,c,d){var z=P.e
return new G.dN(b,J.d7(b.a),c,P.S(z,P.c),d,0,-1,P.S(z,P.af),"meshdata:"+a,!1,!0)}}},
iO:{"^":"aK;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cU:function(a,b){var z
if(typeof a!=="number")return a.eu()
if(typeof b!=="number")return H.aO(b)
z=a/b
if(this.z===z)return
this.z=z
this.ba()},
ba:function(){var z,y,x,w,v,u
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
as:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.p(new Float32Array(3))
u.H(x,w,v)
v=this.d
v.h(0,"uEyePosition",u)
u=this.cy
u.B(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.B(t)
x=!!y.$isaV
q=x?t.gcu(t):1
if(!!y.$isp){p=t.ga0(t)
s=t.gU(t)
r=t.gak(t)
t=p}else if(x){p=t.ga0(t)
s=t.gU(t)
r=t.gak(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.aO(t)
x=z[4]
if(typeof s!=="number")return H.aO(s)
w=z[8]
if(typeof r!=="number")return H.aO(r)
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
c.B(this.db)
c.c0(0,u)
v.h(0,"uPerspectiveViewMatrix",c)
return v}},
mw:{"^":"c;"},
j6:{"^":"aU;d,e,f,r,x,y,z,Q,0ch,a,b,c",
d1:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
x.h(0,t,J.d9(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
x.h(0,t,J.d9(w.a,v,t))}},
d4:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.h([],[P.e])
x=H.h([],[P.e])
for(y=new H.ag(y,[H.o(y,0)]),y=y.gu(y);y.q();){w=y.d
if(!z.ai(0,w))C.a.j(x,w)}for(z=this.x,z=P.kq(z,z.r,H.o(z,0)),y=this.Q;z.q();){w=z.d
if(!y.v(0,w))C.a.j(x,w)}return x},
d7:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.r(b,"$isM",[P.e,P.c],"$asM")
z=Date.now()
for(y=new H.ag(b,[H.o(b,0)]),y=y.gu(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.q();){s=y.d
switch(J.d3(s,0)){case 117:if(w.ai(0,s)){r=b.i(0,s)
if(v.ai(0,s))H.aQ("E:"+(H.d(u)+":  "+s+" : group ["+H.d(a)+"] overwrites ["+s+"]"))
v.h(0,s,a)
q=$.ac().i(0,s)
if(q==null)H.a0("unknown "+s)
p=w.i(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.v(r)
J.co(x.a,p,r)}else if(!!J.B(r).$isi_)J.h1(x.a,p,r)
break
case"float":if(q.c===0){H.eF(r)
J.h_(x.a,p,r)}else if(!!J.B(r).$isaf)J.h0(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.ab(r,"$isX").a
J.dg(x.a,p,!1,s)}else if(!!J.B(r).$isaf)J.dg(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=H.ab(r,"$isbe").a
J.df(x.a,p,!1,s)}else if(!!J.B(r).$isaf)J.df(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.de(o,p,H.ab(r,"$isaV").a)
else J.de(o,p,H.i(r,"$isaf"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.dd(o,p,H.ab(r,"$isp").a)
else J.dd(o,p,H.i(r,"$isaf"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.dc(o,p,H.ab(r,"$isaj").a)
else J.dc(o,p,H.i(r,"$isaf"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.aO(s)
J.d4(x.a,33984+s)
s=H.ab(r,"$iscK").b
J.bu(x.a,3553,s)
s=this.ch
J.co(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.F()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.aO(s)
J.d4(x.a,33984+s)
s=H.ab(r,"$iscK").b
J.bu(x.a,34067,s)
s=this.ch
J.co(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.F()
this.ch=s+1
break
default:H.aQ("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.i(0,s)
switch(s){case"cDepthTest":s=J.V(r,!0)
o=x.a
if(s)J.bv(o,2929)
else J.cl(o,2929)
break
case"cStencilFunc":H.ab(r,"$ise5")
s=r.a
o=x.a
if(s===1281)J.cl(o,2960)
else{J.bv(o,2960)
o=r.b
n=r.c
J.fV(x.a,s,o,n)}break
case"cDepthWrite":H.c8(r)
J.fy(x.a,r)
break
case"cBlendEquation":H.ab(r,"$ise4")
s=r.a
o=x.a
if(s===1281)J.cl(o,3042)
else{J.bv(o,3042)
o=r.b
n=r.c
J.fs(x.a,o,n)
J.fr(x.a,s)}break}++t
break}}m=P.du(0,0,0,Date.now()-new P.b8(z,!1).a,0,0)
""+t
m.k(0)},
cX:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.r(b,"$isa",[G.aK],"$asa")
Date.now()
z=this.d
J.h2(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.bp()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.F)(b),++x){w=b[x]
this.d7(w.a,w.as())}y=this.Q
y.a8(0)
for(v=a.cy,v=new H.ag(v,[H.o(v,0)]),v=v.gu(v);v.q();)y.j(0,v.d)
u=this.d4()
if(u.length!==0)P.al("E:"+(H.d(this.a)+" "+a.f+": uninitialized inputs: "+H.d(u)))
y=a.d
v=a.e
J.bQ(y.a,v)
t=this.e.f.length>0
v=a.f
y=a.cZ()
s=a.Q
r=a.z
if(t)J.fp(z.a,v)
if(s!==-1){q=z.a
if(r>1)J.fD(q,v,y,s,0,r)
else J.fC(q,v,y,s,0)}else{s=z.a
if(r>1)J.fB(s,v,0,y,r)
else J.fA(s,v,0,y)}if(t)J.fG(z.a)},
p:{
cH:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.e
y=P.a7(null,null,null,z)
x=c.b
w=d.b
v=H.r(c.f,"$isa",[z],"$asa")
u=J.fw(b.a)
t=G.ed(b.a,35633,x)
J.d5(b.a,u,t)
s=G.ed(b.a,35632,w)
J.d5(b.a,u,s)
if(v.length>0)J.fY(b.a,u,v,35980)
J.fS(b.a,u)
if(!H.c8(J.fR(b.a,u,35714)))H.a0(J.fQ(b.a,u))
z=new G.j6(b,c,d,u,P.cE(c.c,z),P.S(z,P.c),P.S(z,z),y,a,!1,!0)
z.d1(a,b,c,d)
return z}}},
G:{"^":"c;a,b,c",
b7:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
je:{"^":"c;a,0b,c,d,e,f,r,x",
aq:function(a){var z,y,x,w,v
H.r(a,"$isa",[P.e],"$asa")
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.F)(a),++w){v=a[w]
C.a.j(y,v)
x.h(0,v,this.r);++this.r}C.a.ao(y)},
R:function(a){var z,y,x
H.r(a,"$isa",[P.e],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.F)(a),++x)C.a.j(y,a[x])
C.a.ao(y)},
ab:function(a){var z,y,x
H.r(a,"$isa",[P.e],"$asa")
for(z=a.length,y=this.e,x=0;x<a.length;a.length===z||(0,H.F)(a),++x)C.a.j(y,a[x])
C.a.ao(y)},
b9:function(a,b){var z=[P.e]
this.b=this.bb(!0,H.r(a,"$isa",z,"$asa"),H.r(b,"$isa",z,"$asa"))},
au:function(a){return this.b9(a,null)},
b8:function(a,b){var z=[P.e]
this.b=this.bb(!1,H.r(a,"$isa",z,"$asa"),H.r(b,"$isa",z,"$asa"))},
d2:function(a){return this.b8(a,null)},
bb:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.e]
H.r(b,"$isa",z,"$asa")
H.r(c,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.h(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.F)(y),++u){t=y[u]
s=$.ac().i(0,t)
C.a.j(w,"layout (location="+H.d(v.i(0,t))+") in "+s.a+" "+H.d(t)+";")}C.a.j(w,"")
r=x?"in":"out"
if(x)C.a.j(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){q=z[u]
s=$.ac().i(0,q)
C.a.j(w,r+" "+s.a+" "+H.d(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){q=z[u]
s=$.ac().i(0,q)
C.a.j(w,r+" "+s.a+" "+H.d(q)+";")}C.a.j(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){q=z[u]
s=$.ac().i(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.j(w,"uniform "+s.a+" "+H.d(q)+p+";")}C.a.j(w,"")
if(c!=null)C.a.J(w,c)
if(a)C.a.j(w,"void main(void) {")
C.a.J(w,b)
if(a)C.a.j(w,"}")
return C.a.a9(w,"\n")},
p:{
bk:function(a){var z,y
z=P.e
y=[z]
return new G.je(a,H.h([],y),H.h([],y),H.h([],y),H.h([],y),0,P.S(z,P.C))}}},
dZ:{"^":"aU;",
b_:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c},
ef:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=this.d.a
y=z[12]
x=z[13]
w=z[14]
b=new T.p(new Float32Array(3))
b.H(0,1,0)
v=this.e
u=v.a
u[0]=z[12]
u[1]=z[13]
u[2]=z[14]
u=new Float32Array(3)
t=new T.p(u)
t.B(v)
t.b2(0,a)
t.C(0)
s=b.bP(t)
s.C(0)
r=t.bP(s)
r.C(0)
q=s.aI(v)
p=r.aI(v)
v=t.aI(v)
o=s.a
n=o[0]
m=r.a
l=m[0]
k=u[0]
j=o[1]
i=m[1]
h=u[1]
o=o[2]
m=m[2]
u=u[2]
z[15]=1
z[14]=-v
z[13]=-p
z[12]=-q
z[11]=0
z[10]=u
z[9]=m
z[8]=o
z[7]=0
z[6]=h
z[5]=i
z[4]=j
z[3]=0
z[2]=k
z[1]=l
z[0]=n
z[12]=y
z[13]=x
z[14]=w},
c_:function(a){return this.ef(a,null)}},
ju:{"^":"c;a,b,c,d,e,f,r"},
cK:{"^":"c;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
hX:{"^":"cK;f,a,b,c,d,e"}}],["","",,Y,{"^":"",
hY:function(a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
z=[T.p]
y=P.e
x=new G.hO(!1,H.h([],[G.dA]),H.h([],[G.dB]),H.h([],z),P.S(y,[P.a,,]))
x.b6("aTexUV")
x.b6("aNormal")
w=P.S(y,P.C)
v=a2.split("\n")
u=H.h([],z)
t=H.h([],z)
y=[T.aj]
s=H.h([],y)
r=Date.now()
q=P.dV("\\s+",!0,!1)
p=P.dV("\\s\\s*\\$",!0,!1)
for(o=v.length,n=0;n<v.length;v.length===o||(0,H.F)(v),++n){m=v[n]
m.toString
l=H.m3(m,q," ")
k=H.m5(l,p,"",0)
l=k.length
if(l!==0){if(0>=l)return H.f(k,0)
l=k[0]==="#"}else l=!0
if(l)continue
j=k.split(" ")
l=j.length
if(0>=l)return H.f(j,0)
i=j[0]
if(J.V(i,"g")){if(1>=l)return H.f(j,1)
w.h(0,j[1],u.length)}else if(J.V(i,"v")){if(1>=l)return H.f(j,1)
i=P.aM(j[1],null)
if(2>=l)return H.f(j,2)
h=P.aM(j[2],null)
if(3>=l)return H.f(j,3)
l=P.aM(j[3],null)
g=new Float32Array(3)
C.b.h(g,0,i)
C.b.h(g,1,h)
C.b.h(g,2,l)
C.a.j(u,new T.p(g))}else if(J.V(i,"vt")){if(1>=l)return H.f(j,1)
i=P.aM(j[1],null)
if(2>=l)return H.f(j,2)
l=P.aM(j[2],null)
h=new Float32Array(2)
C.b.h(h,0,i)
C.b.h(h,1,l)
C.a.j(s,new T.aj(h))}else if(J.V(i,"vn")){if(1>=l)return H.f(j,1)
i=P.aM(j[1],null)
if(2>=l)return H.f(j,2)
h=P.aM(j[2],null)
if(3>=l)return H.f(j,3)
l=P.aM(j[3],null)
g=new Float32Array(3)
C.b.h(g,0,i)
C.b.h(g,1,h)
C.b.h(g,2,l)
C.a.j(t,new T.p(g))}else if(J.V(i,"f")){if(l!==4&&l!==5){H.aQ("*** Error: face '"+k+"' not handled")
continue}f=H.h([],z)
e=H.h([],z)
d=H.h([],y)
for(c=1;l=j.length,c<l;++c){b=J.fU(j[c],"/")
for(;b.length<3;)C.a.j(b,"")
l=P.cX(b[0],null,null)
if(typeof l!=="number")return l.a2()
a=l-1
if(1>=b.length)return H.f(b,1)
if(J.V(b[1],""))a0=-1
else{if(1>=b.length)return H.f(b,1)
l=P.cX(b[1],null,null)
if(typeof l!=="number")return l.a2()
a0=l-1}if(2>=b.length)return H.f(b,2)
if(J.V(b[2],""))a1=-1
else{if(2>=b.length)return H.f(b,2)
l=P.cX(b[2],null,null)
if(typeof l!=="number")return l.a2()
a1=l-1}l=u.length
if(a<l){if(a<0)return H.f(u,a)
C.a.j(f,u[a])}else C.a.j(f,new T.p(new Float32Array(3)))
if(a0!==-1&&a0<s.length){if(a0<0||a0>=s.length)return H.f(s,a0)
C.a.j(d,s[a0])}else{H.aQ("problem uv "+c+" "+a0)
C.a.j(d,new T.aj(new Float32Array(2)))}if(a1!==-1&&a1<t.length){if(a1<0||a1>=t.length)return H.f(t,a1)
C.a.j(e,t[a1])}else{H.aQ("problem normals "+c+" "+a1)
C.a.j(e,new T.p(new Float32Array(3)))}}if(l===4)x.cS(f)
else x.cT(f)
x.cQ("aNormal",e)
x.cP("aTexUV",d)}}P.al("loaded ("+P.du(0,0,0,Date.now()-new P.b8(r,!1).a,0,0).k(0)+") "+x.k(0))
return x}}],["","",,R,{"^":"",
ks:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.i(W.k1("span",null),"$isQ")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.y).av(y,"float")
y.setProperty(x,"left","")
x=C.y.av(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.q.K(z,v)}return z},
jC:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=d.a
if(z[1]===0)return
y=b*0.5
x=c*C.r.e8(y/c)
w=-x
v=d.an(y).an(1/z[1])
u=H.h([],[T.p])
for(t=w;t<=x;t+=c)for(s=w;s<=x;s+=c){z=new Float32Array(3)
r=new T.p(z)
z[0]=t
z[1]=0
z[2]=s
r.j(0,v)
C.a.j(u,r)
z=new Float32Array(3)
r=new T.p(z)
z[0]=t
z[1]=0
z[2]=s
r.b2(0,v)
C.a.j(u,r)}for(q=0;q<8;++q){t=(q&1)===1?1:-1
p=(q&2)===2?1:-1
s=(q&4)===4?1:-1
if(t>0){z=p*y
r=s*y
o=new Float32Array(3)
o[0]=t*y
o[1]=z
o[2]=r
C.a.j(u,new T.p(o))
o=new Float32Array(3)
o[0]=-t*y
o[1]=z
o[2]=r
C.a.j(u,new T.p(o))}if(p>0){z=t*y
r=s*y
o=new Float32Array(3)
o[0]=z
o[1]=p*y
o[2]=r
C.a.j(u,new T.p(o))
o=new Float32Array(3)
o[0]=z
o[1]=-p*y
o[2]=r
C.a.j(u,new T.p(o))}if(s>0){z=t*y
r=p*y
o=new Float32Array(3)
o[0]=z
o[1]=r
o[2]=s*y
C.a.j(u,new T.p(o))
o=new Float32Array(3)
o[0]=z
o[1]=r
o[2]=-s*y
C.a.j(u,new T.p(o))}}a.ac(G.by(u,null))
z=new Array(u.length)
z.fixed$length=Array
n=H.h(z,[P.C])
for(q=0;q<u.length;++q)C.a.h(n,q,q)
a.a4(n)},
hQ:function(a){var z,y,x
z=a.a
y=z[0]
if(y!==0){x=z[1]
if(x!==0){z=new T.p(new Float32Array(3))
z.H(-x,y,0)
return z}z=z[2]
if(z!==0){x=new T.p(new Float32Array(3))
x.H(-z,0,y)
return x}z=new T.p(new Float32Array(3))
z.H(0,1,1)
return z}else{y=z[1]
if(y===0){z=new T.p(new Float32Array(3))
z.H(1,1,0)
return z}z=z[2]
if(z===0){z=new T.p(new Float32Array(3))
z.H(1,0,1)
return z}x=new T.p(new Float32Array(3))
x.H(0,-z,y)
return x}},
jE:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
c.toString
z=new T.p(new Float32Array(3))
z.B(c)
z.C(0)
y=b.F(0,z.an(d))
x=H.h([b,y],[T.p])
w=R.hQ(c)
w.C(0)
w.am(0,Math.tan(H.eE(e))*d)
for(v=0;v<8;++v){z=new Float32Array(3)
u=new T.p(z)
u.B(w)
t=new Float32Array(4)
new T.j0(t).cC(c,v*2*3.141592653589793/8)
s=z[0]
r=z[1]
q=z[2]
p=t[0]
o=t[1]
n=t[2]
m=t[3]
l=m*s+o*q-n*r
k=m*r+n*s-p*q
j=m*q+p*r-o*s
t=-p
i=t*s-o*r-n*q
h=-n
g=-o
z[0]=l*m+i*t+k*h-j*g
z[1]=k*m+i*g+j*t-l*h
z[2]=j*m+i*h+l*g-k*t
u.j(0,y)
C.a.j(x,u)}f=H.h([],[P.C])
for(v=1;v<x.length;++v){C.a.j(f,0)
C.a.j(f,v)}for(v=3;z=x.length,v<z;++v){C.a.j(f,v-1)
C.a.j(f,v)}C.a.j(f,z-1)
C.a.j(f,2)
for(v=2;v<x.length;++v)if(v%2===0){C.a.j(f,1)
C.a.j(f,v)}a.ac(G.by(x,null))
a.a4(f)},
jD:function(a,b,c){var z,y,x,w,v,u,t
z=H.h([],[T.p])
y=H.h([],[P.C])
for(x=$.eY(),w=0;w<12;++w){v=x[w]
C.a.j(y,z.length)
C.a.j(y,12)
u=new T.p(new Float32Array(3))
u.B(v)
u.am(0,c)
b.toString
t=new T.p(new Float32Array(3))
t.B(b)
t.j(0,u)
C.a.j(z,t)}C.a.j(z,b)
a.ac(G.by(z,null))
a.a4(y)},
jj:{"^":"c;",
d3:function(a,b,c){var z,y
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
y=J.m(z)
y.K(z,this.b)
y.K(z,this.d)
y.K(z,this.c)}},
jk:{"^":"jj;e,f,a,b,c,d",
d6:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.r.ep(y,2)+" fps"
C.q.cD(this.c,b)
x=C.f.Y(30*C.r.dS(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.i(z.firstChild,"$isQ")
v=w.style
u=""+x+"px"
v.height=u
C.q.K(z,w)},
d5:function(a){return this.d6(a,"")}}}],["","",,A,{"^":"",
eG:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.r(e,"$isa",[G.aK],"$asa")
if(!b.c)return
z=b.dx
z.B(c)
y=b.d
z.c0(0,y)
x=b.ch
if(x!=null&&b.cx!=null){H.d(b)
w=C.a.gee(e)
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
v.dX(new T.be(u))
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
w.h(0,"uTransformationMatrix",y)
w.h(0,"uModelMatrix",z)
w.h(0,"uNormalMatrix",v)
C.a.j(e,x)
a.cX(b.cx,e,d)
if(0>=e.length)return H.f(e,-1)
e.pop()}for(y=b.cy,x=y.length,r=0;r<y.length;y.length===x||(0,H.F)(y),++r)A.eG(a,y[r],z,d,e)},
aB:{"^":"dZ;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
k:function(a){return"NODE["+H.d(this.a)+"]"},
p:{
dP:function(a,b){var z,y,x,w,v,u,t,s
z=H.h([],[A.aB])
y=new Float32Array(9)
x=new T.X(new Float32Array(16))
x.L()
w=new T.X(new Float32Array(16))
w.L()
v=new Float32Array(3)
u=new Float32Array(3)
t=new Float32Array(3)
s=new Float32Array(3)
if(b!=null)C.a.j(z,b)
return new A.aB(null,null,z,new T.be(y),x,w,new T.p(v),new T.p(u),new T.p(t),new T.p(s),a,!1,!0)}}},
c1:{"^":"aU;d,e,f,a,b,c"},
j5:{"^":"aU;d,e,f,r,x,y,z,Q,a,b,c",
cW:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.fq(v.a,36160,z)
J.h5(v.a,this.x,this.y,x,w)
if(y!==0)J.ft(v.a,y)
for(z=this.f,y=z.length,x=P.e,w=P.c,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
if(!t.c)continue
v=t.d
if(!v.c)continue
s=t.e
C.a.j(s,new G.aK(P.S(x,w),"transforms",!1,!0))
r=new T.X(new Float32Array(16))
r.L()
for(q=t.f,p=q.length,o=0;o<q.length;q.length===p||(0,H.F)(q),++o)A.eG(v,q[o],r,a,s)
if(0>=s.length)return H.f(s,-1)
s.pop()}},
cV:function(){return this.cW(null)},
p:{
dW:function(a,b,c){var z=new A.j5(c,b,H.h([],[A.c1]),17664,0,0,0,0,a,!1,!0)
z.d=new G.hJ(b,null,null,null,null)
return z}}}}],["","",,V,{}],["","",,B,{}],["","",,D,{"^":"",
im:function(a){var z,y,x,w
z=P.e
y=new P.P(0,$.E,[z])
x=new XMLHttpRequest()
C.z.eh(x,"GET",a)
w=W.bF
W.aa(x,"loadend",H.k(new D.io(new P.cM(y,[z]),x),{func:1,ret:-1,args:[w]}),!1,w)
C.z.cB(x,"")
return y},
ik:function(a){var z,y,x,w
z=W.aT
y=new P.P(0,$.E,[z])
x=document.createElement("img")
w=new W.aX(x,"load",!1,[W.K])
w.ge7(w).a_(new D.il(new P.cM(y,[z]),x),-1)
x.src=a
return y},
io:{"^":"n:25;a,b",
$1:function(a){H.i(a,"$isbF")
this.a.aH(0,H.b2(W.lk(this.b.response),{futureOr:1,type:P.e}))}},
il:{"^":"n:11;a,b",
$1:function(a){H.i(a,"$isK")
return this.a.aH(0,this.b)}},
ia:{"^":"c;a,b,c",
d_:function(a){var z,y
a=document
z=W.bb
y={func:1,ret:-1,args:[z]}
W.aa(a,"keydown",H.k(new D.ic(this),y),!1,z)
W.aa(a,"keyup",H.k(new D.id(this),y),!1,z)},
p:{
ib:function(a){var z=P.C
z=new D.ia(P.a7(null,null,null,z),P.a7(null,null,null,z),P.a7(null,null,null,z))
z.d_(a)
return z}}},
ic:{"^":"n:14;a",
$1:function(a){var z
H.i(a,"$isbb")
z=this.a
z.a.j(0,a.which)
z.b.j(0,a.which)}},
id:{"^":"n:14;a",
$1:function(a){var z
H.i(a,"$isbb")
z=this.a
z.a.c9(0,a.which)
z.c.j(0,a.which)}},
iz:{"^":"c;a,b,c,d,e,f,r,x",
d0:function(a){var z,y,x
if(a==null)a=document
z=J.m(a)
y=z.gc4(a)
x=H.o(y,0)
W.aa(y.a,y.b,H.k(new D.iB(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gc3(a)
y=H.o(x,0)
W.aa(x.a,x.b,H.k(new D.iC(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gc5(a)
x=H.o(y,0)
W.aa(y.a,y.b,H.k(new D.iD(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gc6(a)
x=H.o(z,0)
W.aa(z.a,z.b,H.k(new D.iE(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
iA:function(a){var z=P.C
z=new D.iz(P.a7(null,null,null,z),P.a7(null,null,null,z),P.a7(null,null,null,z),0,0,0,0,0)
z.d0(a)
return z}}},
iB:{"^":"n:4;a",
$1:function(a){var z,y
H.i(a,"$isY")
a.preventDefault()
z=this.a
y=J.m(a)
z.r=H.v(y.gc1(a).a)
z.x=H.v(y.gc1(a).b)
z.d=a.movementX
z.e=a.movementY}},
iC:{"^":"n:4;a",
$1:function(a){var z
H.i(a,"$isY")
a.preventDefault()
P.al("BUTTON "+H.d(a.button))
z=this.a
z.a.j(0,a.button)
z.b.j(0,a.button)}},
iD:{"^":"n:4;a",
$1:function(a){var z
H.i(a,"$isY")
a.preventDefault()
z=this.a
z.a.c9(0,a.button)
z.c.j(0,a.button)}},
iE:{"^":"n:27;a",
$1:function(a){H.i(a,"$isaW")
a.preventDefault()
this.a.f=H.v(C.ad.ge1(a))}},
iN:{"^":"hd;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bM:function(a){var z,y
z=C.b.e9(H.r(a,"$isl",[P.c],"$asl"),0,new A.lH(),P.C)
if(typeof z!=="number")return H.aO(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
lH:{"^":"n:28;",
$2:function(a,b){var z,y
H.v(a)
z=J.at(b)
if(typeof a!=="number")return a.F()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",be:{"^":"c;a",
B:function(a){var z,y
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
k:function(a){return"[0] "+this.P(0).k(0)+"\n[1] "+this.P(1).k(0)+"\n[2] "+this.P(2).k(0)+"\n"},
i:function(a,b){var z=this.a
if(b>=9)return H.f(z,b)
return z[b]},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.be){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gw:function(a){return A.bM(this.a)},
P:function(a){var z,y,x
z=new Float32Array(3)
y=this.a
if(a>=9)return H.f(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.f(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.f(y,x)
z[2]=y[x]
return new T.p(z)},
dX:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if(m===0){this.B(a)
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
return m}},X:{"^":"c;a",
B:function(a){var z,y
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
k:function(a){return"[0] "+this.P(0).k(0)+"\n[1] "+this.P(1).k(0)+"\n[2] "+this.P(2).k(0)+"\n[3] "+this.P(3).k(0)+"\n"},
i:function(a,b){var z=this.a
if(b>=16)return H.f(z,b)
return z[b]},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.X){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gw:function(a){return A.bM(this.a)},
P:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.f(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.f(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.f(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.f(y,x)
z[3]=y[x]
return new T.aV(z)},
L:function(){var z=this.a
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
c0:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7},
p:{
bZ:function(){return new T.X(new Float32Array(16))}}},j0:{"^":"c;a",
cC:function(a,b){var z,y,x,w,v
z=Math.sqrt(a.gaK())
if(z===0)return
y=b*0.5
x=Math.sin(y)/z
w=a.a
v=this.a
v[0]=w[0]*x
v[1]=w[1]*x
v[2]=w[2]*x
v[3]=Math.cos(y)},
gl:function(a){var z,y,x,w,v
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=z[3]
return Math.sqrt(y*y+x*x+w*w+v*v)},
i:function(a,b){var z=this.a
if(b>=4)return H.f(z,b)
return z[b]},
k:function(a){var z=this.a
return H.d(z[0])+", "+H.d(z[1])+", "+H.d(z[2])+" @ "+H.d(z[3])}},aj:{"^":"c;a",
k:function(a){var z=this.a
return"["+H.d(z[0])+","+H.d(z[1])+"]"},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aj){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gw:function(a){return A.bM(this.a)},
i:function(a,b){var z=this.a
if(b>=2)return H.f(z,b)
return z[b]},
gl:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
ga0:function(a){return this.a[0]},
gU:function(a){return this.a[1]}},p:{"^":"c;a",
H:function(a,b,c){var z=this.a
C.b.h(z,0,a)
C.b.h(z,1,b)
C.b.h(z,2,c)},
B:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+"]"},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.p){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gw:function(a){return A.bM(this.a)},
F:function(a,b){var z=new T.p(new Float32Array(3))
z.B(this)
z.j(0,b)
return z},
i:function(a,b){var z=this.a
if(b>=3)return H.f(z,b)
return z[b]},
gl:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gaK:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
C:function(a){var z,y,x
z=Math.sqrt(this.gaK())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aI:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bP:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.p(new Float32Array(3))
z.H(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
j:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
b2:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
am:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
an:function(a){var z=new T.p(new Float32Array(3))
z.B(this)
z.am(0,a)
return z},
ga0:function(a){return this.a[0]},
gU:function(a){return this.a[1]},
gak:function(a){return this.a[2]},
p:{
N:function(a,b,c){var z=new T.p(new Float32Array(3))
z.H(a,b,c)
return z},
bn:function(){return new T.p(new Float32Array(3))}}},aV:{"^":"c;a",
k:function(a){var z=this.a
return H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+","+H.d(z[3])},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aV){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gw:function(a){return A.bM(this.a)},
i:function(a,b){var z=this.a
if(b>=4)return H.f(z,b)
return z[b]},
gl:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
ga0:function(a){return this.a[0]},
gU:function(a){return this.a[1]},
gak:function(a){return this.a[2]},
gcu:function(a){return this.a[3]}}}],["","",,T,{"^":"",
ie:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
H.r(b,"$isa",[G.aK],"$asa")
z=G.cH("Fixed",a,$.fh(),$.fg())
y=[A.aB]
x=H.h([],y)
w=new A.c1(z,b,x,"Fixed",!1,!0)
v=G.dM("light")
v.d.h(0,"uColor",$.eV())
for(x=$.ch(),u=new H.ag(x,[H.o(x,0)]),u=u.gu(u),t=[P.C],s=z.d,z=z.e,r=P.e,q=P.c,p=P.af;u.q();){o=u.d
n=$.ci()
m=x.i(0,o)
l=z.x
k=new G.dN(s,J.d7(s.a),1,P.S(r,q),l,0,-1,P.S(r,p),"meshdata:dirLightViz",!1,!0)
k.b4(new Float32Array(3))
l=H.r(H.h([0,0],t),"$isa",t,"$asa")
k.y=J.bR(s.a)
k.a4(l)
l=J.B(m)
if(!!l.$isdt){l=m.Q
R.jC(k,l,l/4,m.z)}else if(!!l.$ise_)R.jE(k,m.z,m.Q,m.ch,m.cx)
else if(!!l.$isdT)R.jD(k,m.z,m.Q)
l=H.h([],y)
j=new Float32Array(9)
i=new T.X(new Float32Array(16))
i.L()
h=new T.X(new Float32Array(16))
h.L()
g=new Float32Array(3)
f=new Float32Array(3)
e=new Float32Array(3)
n.h(0,o,new A.aB(v,k,l,new T.be(j),i,h,new T.p(g),new T.p(f),new T.p(e),new T.p(new Float32Array(3)),o,!1,!0))}for(z=$.ci(),z=z.gcq(z),y=z.a,z=new H.cF(y.gu(y),z.b,[H.o(z,0),H.o(z,1)]),y=w.f;z.q();)C.a.j(y,z.a)
return w},
hw:function(a,b){var z,y,x,w
z=G.dM("matDragon")
z.d.h(0,"uShininess",10)
y=A.dP("dragon",null)
x=D.ik("../asset/dragon/dragon.png").a_(new T.hx(z,a),null)
w=$.d2()
C.a.j(w,x)
C.a.j(w,D.im("../asset/dragon/dragon.obj").a_(new T.hy(b,z,y),null))
return y},
eL:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z={}
y=document
x=C.j.cz(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.jk(0,0,x,w,y.createElement("div"),R.ks("blue","gray",90,30))
u.d3(x,"blue","gray")
t=H.i(C.j.c8(y,"#webgl-canvas"),"$iscs")
s=new G.hf(t)
x=P.e
v=P.c
r=(t&&C.J).cw(t,"webgl2",P.cD(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],x,v))
s.a=r
if(r==null)H.a0(P.dz('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
q="ChronosGL Config: "+H.d(J.fO(r))
if($.eH>0)P.al("I: "+q)
J.fu(r,0,0,0,1)
J.bv(r,2929)
J.bv(r,2884)
r=new Float32Array(3)
q=D.ib(null)
p=D.iA(t)
o=new T.X(new Float32Array(16))
o.L()
n=new Float32Array(3)
m=new Float32Array(3)
l=new Float32Array(3)
k=new D.iN(50,10,0,0,new T.p(r),-0.02,q,p,o,new T.p(n),new T.p(m),new T.p(l),new T.p(new Float32Array(3)),"camera:orbit",!1,!0)
k.b_(0,0,56)
r=new T.X(new Float32Array(16))
r.L()
q=new T.X(new Float32Array(16))
q.L()
j=new G.iO(k,50,1,0.1,1e4,r,q,new T.X(new Float32Array(16)),P.S(x,v),"perspective",!1,!0)
j.ba()
r=H.h([],[G.bd])
q=new Float32Array(64)
i=new G.hV(r,q,new Float32Array(4),P.S(x,v),"illumination",!1,!0)
for(x=$.ch(),x=x.gcq(x),q=x.a,x=new H.cF(q.gu(q),x.b,[H.o(x,0),H.o(x,1)]);x.q();)C.a.j(r,x.a)
x=G.cH("BlinnPhong",s,$.fd(),$.fb())
r=[G.aK]
q=H.h([j,i],r)
p=[A.aB]
o=H.h([],p)
n=G.cH("Gourad",s,$.fe(),$.fc())
m=H.h([j,i],r)
p=H.h([],p)
h=T.ie(s,H.h([j],r))
g=A.dW("BlinnPhong",s,null)
r=g.f
C.a.j(r,new A.c1(x,q,o,"BlinnPhong",!1,!0))
C.a.j(r,h)
f=A.dW("Gourad",s,null)
r=f.f
C.a.j(r,new A.c1(n,m,p,"Gourad",!1,!0))
C.a.j(r,h)
e=T.hw(s,x)
C.a.j(p,e)
C.a.j(o,e)
d=H.ab(C.j.c8(y,"#phase"),"$isdY")
d.selectedIndex=0
for(x=C.j.aQ(y,"input"),r=x.length,c=0;c<x.length;x.length===r||(0,H.F)(x),++c){q=J.fJ(H.i(x[c],"$isQ"))
p=H.o(q,0)
W.aa(q.a,q.b,H.k(new T.lV(),{func:1,ret:-1,args:[p]}),!1,p)}for(x=C.j.aQ(y,"input"),r=x.length,c=0;c<x.length;x.length===r||(0,H.F)(x),++c){q=H.i(x[c],"$isQ")
H.aQ("initialize inputs "+H.d(q.id))
b=C.j.dh(y,"Event")
J.fl(b,"change",!0,!0)
J.fz(q,b)}y=new T.lX(t,j,f,g)
y.$1(null)
x=W.K
W.aa(window,"resize",H.k(y,{func:1,ret:-1,args:[x]}),!1,x)
z.a=0
P.hL($.d2(),null,!1,v).a_(new T.lW(new T.lU(z,k,d,g,f,u)),null)},
hx:{"^":"n:29;a,b",
$1:function(a){var z,y
H.i(a,"$isaT")
z=this.b
y=J.fx(z.a)
J.bu(z.a,3553,y)
J.fT(z.a,37440,1)
J.bu(z.a,3553,y)
J.fW(z.a,3553,0,6408,6408,5121,a)
J.db(z.a,3553,10240,9729)
J.db(z.a,3553,10241,9729)
J.fP(z.a)
J.bu(z.a,3553,null)
this.a.d.h(0,"uTexture",new G.hX(a,"../asset/dragon/dragon.png",y,3553,z,new G.ju(!1,!1,!1,!0,1,9729,9729)))}},
hy:{"^":"n:30;a,b,c",
$1:function(a){var z,y,x,w,v,u,t,s,r,q
z=Y.hY(H.u(a))
y=this.a
x=G.iw("../asset/dragon/dragon.obj",y.d,4,y.e.x)
x.b4(G.by(z.d,null))
x.cR(z.cY())
G.kj(z,x)
y=H.h([],[A.aB])
w=new Float32Array(9)
v=new T.X(new Float32Array(16))
v.L()
u=new T.X(new Float32Array(16))
u.L()
t=new Float32Array(3)
s=new Float32Array(3)
r=new Float32Array(3)
q=A.dP("wrapper",new A.aB(this.b,x,y,new T.be(w),v,u,new T.p(t),new T.p(s),new T.p(r),new T.p(new Float32Array(3)),x.a,!1,!0))
y=new T.p(new Float32Array(3))
y.H(100,0,0)
q.c_(y)
C.a.j(this.c.cy,q)}},
lV:{"^":"n:31;",
$1:function(a){var z=H.ab(J.fM(a),"$isdD")
P.al(H.d(z.id)+" toggle "+H.d(z.checked))
$.ch().i(0,z.id).c=z.checked
$.ci().i(0,z.id).c=z.checked}},
lX:{"^":"n:11;a,b,c,d",
$1:function(a){var z,y,x
z=this.a
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.al("size change "+H.d(y)+" "+H.d(x))
this.b.cU(y,x)
z=this.c
z.z=y
z.Q=x
z=this.d
z.z=y
z.Q=x}},
lU:{"^":"n:32;a,b,c,d,e,f",
$1:function(a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
H.cZ(a7)
if(typeof a7!=="number")return a7.a2()
z=this.a
z.a=a7+0
y=this.b
y.go+=0.001
x=y.r1
w=x.a
if(w.v(0,0)||w.v(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.aY()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.aY()
y.id=v+w*0.01}w=y.k4
v=w.a
if(v.v(0,37))y.go+=0.03
else if(v.v(0,39))y.go-=0.03
if(v.v(0,38))y.id+=0.03
else if(v.v(0,40))y.id-=0.03
if(v.v(0,33))y.fy*=0.99
else if(v.v(0,34))y.fy*=1.01
if(v.v(0,32)){y.go=0
y.id=0}v=x.f
if(typeof v!=="number")return v.aY()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.t.dT(y.id,-1.4707963267948965,1.4707963267948965)
y.id=v
u=y.fy
t=y.go
s=u*Math.cos(v)
y.b_(s*Math.cos(t),u*Math.sin(v),s*Math.sin(t))
t=y.k2
v=y.d.a
u=t.a
v[12]=v[12]+u[0]
v[13]=v[13]+u[1]
v[14]=v[14]+u[2]
y.c_(t)
t=y.f
u=t.a
u[0]=v[2]
u[1]=v[6]
u[2]=v[10]
y=-y.k1
r=Math.sqrt(t.gaK())
q=u[0]/r
p=u[1]/r
o=u[2]/r
n=Math.cos(y)
m=Math.sin(y)
l=1-n
k=q*q*l+n
y=o*m
j=q*p*l-y
u=p*m
i=q*o*l+u
h=p*q*l+y
g=p*p*l+n
y=q*m
f=p*o*l-y
e=o*q*l-u
d=o*p*l+y
c=o*o*l+n
y=v[0]
u=v[4]
t=v[8]
b=v[1]
a=v[5]
a0=v[9]
a1=v[2]
a2=v[6]
a3=v[10]
a4=v[3]
a5=v[7]
a6=v[11]
v[0]=y*k+u*h+t*e
v[1]=b*k+a*h+a0*e
v[2]=a1*k+a2*h+a3*e
v[3]=a4*k+a5*h+a6*e
v[4]=y*j+u*g+t*d
v[5]=b*j+a*g+a0*d
v[6]=a1*j+a2*g+a3*d
v[7]=a4*j+a5*g+a6*d
v[8]=y*i+u*f+t*c
v[9]=b*i+a*f+a0*c
v[10]=a1*i+a2*f+a3*c
v[11]=a4*i+a5*f+a6*c
w.c.a8(0)
w.b.a8(0)
x.e=0
x.d=0
x.f=0
x.c.a8(0)
x.b.a8(0);(this.c.selectedIndex===0?this.d:this.e).cV()
C.ae.gdL(window).a_(this,-1)
this.f.d5(z.a)}},
lW:{"^":"n:33;a",
$1:function(a){H.br(a)
this.a.$1(0)}}},1]]
setupProgram(dart,0,0)
J.B=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dF.prototype
return J.dE.prototype}if(typeof a=="string")return J.bD.prototype
if(a==null)return J.i4.prototype
if(typeof a=="boolean")return J.i3.prototype
if(a.constructor==Array)return J.bB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
return a}if(a instanceof P.c)return a
return J.cd(a)}
J.b3=function(a){if(typeof a=="string")return J.bD.prototype
if(a==null)return a
if(a.constructor==Array)return J.bB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
return a}if(a instanceof P.c)return a
return J.cd(a)}
J.ca=function(a){if(a==null)return a
if(a.constructor==Array)return J.bB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
return a}if(a instanceof P.c)return a
return J.cd(a)}
J.lD=function(a){if(typeof a=="number")return J.bC.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.bm.prototype
return a}
J.lE=function(a){if(typeof a=="number")return J.bC.prototype
if(typeof a=="string")return J.bD.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.bm.prototype
return a}
J.cb=function(a){if(typeof a=="string")return J.bD.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.bm.prototype
return a}
J.m=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
return a}if(a instanceof P.c)return a
return J.cd(a)}
J.cc=function(a){if(a==null)return a
if(!(a instanceof P.c))return J.bm.prototype
return a}
J.V=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.B(a).D(a,b)}
J.ad=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.lD(a).V(a,b)}
J.bt=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lR(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b3(a).i(a,b)}
J.fk=function(a,b,c){return J.ca(a).h(a,b,c)}
J.d3=function(a,b){return J.cb(a).a6(a,b)}
J.fl=function(a,b,c,d){return J.m(a).dq(a,b,c,d)}
J.bP=function(a,b){return J.m(a).dw(a,b)}
J.fm=function(a,b,c,d){return J.m(a).dz(a,b,c,d)}
J.fn=function(a,b,c){return J.m(a).dA(a,b,c)}
J.d4=function(a,b){return J.m(a).bx(a,b)}
J.fo=function(a,b,c,d){return J.m(a).dI(a,b,c,d)}
J.d5=function(a,b,c){return J.m(a).bz(a,b,c)}
J.fp=function(a,b){return J.m(a).dN(a,b)}
J.cj=function(a,b,c){return J.m(a).bA(a,b,c)}
J.fq=function(a,b,c){return J.m(a).bC(a,b,c)}
J.bu=function(a,b,c){return J.m(a).bD(a,b,c)}
J.bQ=function(a,b){return J.m(a).dQ(a,b)}
J.fr=function(a,b){return J.m(a).bE(a,b)}
J.fs=function(a,b,c){return J.m(a).bF(a,b,c)}
J.d6=function(a,b,c,d){return J.m(a).bG(a,b,c,d)}
J.ft=function(a,b){return J.m(a).bH(a,b)}
J.fu=function(a,b,c,d,e){return J.m(a).bI(a,b,c,d,e)}
J.fv=function(a,b){return J.lE(a).N(a,b)}
J.ck=function(a,b,c){return J.b3(a).dW(a,b,c)}
J.bR=function(a){return J.m(a).bL(a)}
J.fw=function(a){return J.m(a).bM(a)}
J.fx=function(a){return J.m(a).bO(a)}
J.d7=function(a){return J.m(a).e0(a)}
J.fy=function(a,b){return J.m(a).bQ(a,b)}
J.cl=function(a,b){return J.m(a).bR(a,b)}
J.fz=function(a,b){return J.m(a).e2(a,b)}
J.fA=function(a,b,c,d){return J.m(a).bS(a,b,c,d)}
J.fB=function(a,b,c,d,e){return J.m(a).e3(a,b,c,d,e)}
J.fC=function(a,b,c,d,e){return J.m(a).bT(a,b,c,d,e)}
J.fD=function(a,b,c,d,e,f){return J.m(a).e4(a,b,c,d,e,f)}
J.fE=function(a,b){return J.ca(a).t(a,b)}
J.bv=function(a,b){return J.m(a).bU(a,b)}
J.fF=function(a,b){return J.m(a).bV(a,b)}
J.fG=function(a){return J.m(a).e6(a)}
J.fH=function(a,b){return J.m(a).E(a,b)}
J.fI=function(a){return J.m(a).gdM(a)}
J.at=function(a){return J.B(a).gw(a)}
J.bS=function(a){return J.ca(a).gu(a)}
J.b6=function(a){return J.b3(a).gl(a)}
J.fJ=function(a){return J.m(a).gc2(a)}
J.fK=function(a){return J.m(a).gei(a)}
J.fL=function(a){return J.m(a).gen(a)}
J.fM=function(a){return J.m(a).gcb(a)}
J.fN=function(a){return J.cc(a).gcu(a)}
J.bT=function(a){return J.cc(a).ga0(a)}
J.cm=function(a){return J.cc(a).gU(a)}
J.d8=function(a){return J.cc(a).gak(a)}
J.cn=function(a,b){return J.m(a).a1(a,b)}
J.fO=function(a){return J.m(a).al(a)}
J.fP=function(a){return J.m(a).aR(a)}
J.fQ=function(a,b){return J.m(a).aS(a,b)}
J.fR=function(a,b,c){return J.m(a).aT(a,b,c)}
J.d9=function(a,b,c){return J.m(a).aX(a,b,c)}
J.fS=function(a,b){return J.m(a).bZ(a,b)}
J.fT=function(a,b,c){return J.m(a).c7(a,b,c)}
J.da=function(a){return J.m(a).ej(a)}
J.fU=function(a,b){return J.cb(a).cG(a,b)}
J.fV=function(a,b,c,d){return J.m(a).b1(a,b,c,d)}
J.fW=function(a,b,c,d,e,f,g){return J.m(a).cc(a,b,c,d,e,f,g)}
J.db=function(a,b,c,d){return J.m(a).cd(a,b,c,d)}
J.fX=function(a){return J.cb(a).eo(a)}
J.bw=function(a){return J.B(a).k(a)}
J.fY=function(a,b,c,d){return J.m(a).eq(a,b,c,d)}
J.fZ=function(a){return J.cb(a).er(a)}
J.h_=function(a,b,c){return J.m(a).cf(a,b,c)}
J.h0=function(a,b,c){return J.m(a).cg(a,b,c)}
J.co=function(a,b,c){return J.m(a).ci(a,b,c)}
J.h1=function(a,b,c){return J.m(a).cj(a,b,c)}
J.dc=function(a,b,c){return J.m(a).ck(a,b,c)}
J.dd=function(a,b,c){return J.m(a).cl(a,b,c)}
J.de=function(a,b,c){return J.m(a).cm(a,b,c)}
J.df=function(a,b,c,d){return J.m(a).cn(a,b,c,d)}
J.dg=function(a,b,c,d){return J.m(a).co(a,b,c,d)}
J.h2=function(a,b){return J.m(a).cp(a,b)}
J.h3=function(a,b,c){return J.m(a).es(a,b,c)}
J.h4=function(a,b,c,d,e,f,g){return J.m(a).cr(a,b,c,d,e,f,g)}
J.h5=function(a,b,c,d,e){return J.m(a).ct(a,b,c,d,e)}
I.aP=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.bU.prototype
C.J=W.cs.prototype
C.y=W.hm.prototype
C.q=W.ht.prototype
C.K=W.hu.prototype
C.L=W.hR.prototype
C.j=W.hS.prototype
C.z=W.hT.prototype
C.M=J.j.prototype
C.a=J.bB.prototype
C.r=J.dE.prototype
C.f=J.dF.prototype
C.t=J.bC.prototype
C.h=J.bD.prototype
C.T=J.bE.prototype
C.b=H.iF.prototype
C.n=H.iH.prototype
C.w=W.iI.prototype
C.C=J.iP.prototype
C.D=W.j1.prototype
C.I=W.js.prototype
C.x=J.bm.prototype
C.ad=W.aW.prototype
C.ae=W.jH.prototype
C.e=new P.kF()
C.N=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.O=function(hooks) {
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
C.A=function(hooks) { return hooks; }

C.P=function(getTagFallback) {
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
C.Q=function() {
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
C.R=function(hooks) {
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
C.S=function(hooks) {
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
C.B=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.U=H.h(I.aP(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.V=H.h(I.aP(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.X=H.h(I.aP([]),[P.z])
C.W=H.h(I.aP([]),[P.e])
C.u=H.h(I.aP(["bind","if","ref","repeat","syntax"]),[P.e])
C.v=H.h(I.aP(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.Y=new G.G("vec3","vertex btangents",0)
C.d=new G.G("vec3","",0)
C.Z=new G.G("vec4","delta from light",0)
C.o=new G.G("","",0)
C.E=new G.G("vec3","vertex coordinates",0)
C.a_=new G.G("vec3","vertex binormals",0)
C.F=new G.G("vec4","for wireframe",0)
C.a0=new G.G("vec4","per vertex color",0)
C.a1=new G.G("float","for normal maps",0)
C.k=new G.G("mat4","",0)
C.a3=new G.G("mat4","",4)
C.a2=new G.G("mat4","",128)
C.c=new G.G("float","",0)
C.a4=new G.G("float","",4)
C.a5=new G.G("float","depth for shadowmaps",0)
C.i=new G.G("sampler2D","",0)
C.a6=new G.G("float","for bump maps",0)
C.a7=new G.G("vec2","texture uvs",0)
C.a8=new G.G("float","time since program start in sec",0)
C.l=new G.G("vec2","",0)
C.a9=new G.G("samplerCube","",0)
C.m=new G.G("vec4","",0)
C.aa=new G.G("vec3","vertex normals",0)
C.ab=new G.G("sampler2DShadow","",0)
C.G=new G.G("vec3","per vertex color",0)
C.H=new G.G("mat3","",0)
C.ac=new G.G("vec3","vertex tangents",0)
$.ae=0
$.b7=null
$.dj=null
$.cP=!1
$.eJ=null
$.eB=null
$.eO=null
$.c9=null
$.ce=null
$.cW=null
$.b_=null
$.bo=null
$.bp=null
$.cQ=!1
$.E=C.e
$.am=null
$.cv=null
$.dx=null
$.dw=null
$.dr=null
$.dq=null
$.dp=null
$.dn=null
$.eH=0
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
I.$lazy(y,x,w)}})(["mq","eX",function(){return H.eI("_$dart_dartClosure")},"n2","d_",function(){return H.eI("_$dart_js")},"nM","f_",function(){return H.ai(H.c2({
toString:function(){return"$receiver$"}}))},"nN","f0",function(){return H.ai(H.c2({$method$:null,
toString:function(){return"$receiver$"}}))},"nO","f1",function(){return H.ai(H.c2(null))},"nP","f2",function(){return H.ai(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"nS","f5",function(){return H.ai(H.c2(void 0))},"nT","f6",function(){return H.ai(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"nR","f4",function(){return H.ai(H.e6(null))},"nQ","f3",function(){return H.ai(function(){try{null.$method$}catch(z){return z.message}}())},"nV","f8",function(){return H.ai(H.e6(void 0))},"nU","f7",function(){return H.ai(function(){try{(void 0).$method$}catch(z){return z.message}}())},"o5","d0",function(){return P.jN()},"ol","bs",function(){return[]},"mn","eW",function(){return{}},"oc","f9",function(){return P.cE(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)},"od","d1",function(){return P.S(P.e,P.bz)},"nz","eZ",function(){return new G.e5(1281,0,4294967295)},"me","eQ",function(){return new G.e4(1281,1281,1281)},"oj","ac",function(){return P.cD(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.G,"aColorAlpha",C.a0,"aPosition",C.E,"aTexUV",C.a7,"aNormal",C.aa,"aBinormal",C.a_,"aCenter",C.F,"aPointSize",C.c,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.ac,"aBitangent",C.Y,"iaRotation",C.m,"iaTranslation",C.d,"iaScale",C.c,"iaColor",C.d,"vColor",C.G,"vTexUV",C.l,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.E,"vPositionFromLight",C.Z,"vCenter",C.F,"vDepth",C.a5,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.H,"uConvolutionMatrix",C.H,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.ab,"uTexture",C.i,"uTexture2",C.i,"uTexture3",C.i,"uTexture4",C.i,"uSpecularMap",C.i,"uNormalMap",C.i,"uBumpMap",C.i,"uDepthMap",C.i,"uCubeTexture",C.a9,"uAnimationTable",C.i,"uTime",C.a8,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.d,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a2,"uLightDescs",C.a3,"uLightCount",C.c,"uLightTypes",C.a4,"uBumpScale",C.a6,"uNormalScale",C.a1],P.e,G.G)},"mk","eU",function(){return T.N(1,1,1)},"mh","eR",function(){return T.N(0,0,0)},"mi","eS",function(){return T.N(0,0,0.5)},"mj","eT",function(){return T.N(0,0.5,0)},"ml","eV",function(){return T.N(1,1,0)},"ow","fe",function(){var z,y
z=G.bk("LightGouradV")
y=[P.e]
z.aq(H.h(["aPosition","aNormal","aTexUV"],y))
z.ab(H.h(["vColor"],y))
z.R(H.h(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"],y))
z.R(H.h(["uLightDescs","uLightTypes","uShininess"],y))
z.R(H.h(["uEyePosition","uTexture"],y))
z.b8(H.h(["void main() {\n    vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n    gl_Position = uPerspectiveViewMatrix * pos;\n    vec3 normal = uNormalMatrix * aNormal;\n\n    ColorComponents acc = CombinedLight(pos.xyz, normal, uEyePosition,\n                  uLightDescs,\n                  uLightTypes,\n                  uShininess);\n\n     vColor = acc.diffuse +\n                 acc.specular +\n                 texture(uTexture, aTexUV).rgb;\n}\n        "],y),H.h(["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    // float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"],y))
return z},"ou","fc",function(){var z,y
z=G.bk("LightGrouradV")
y=[P.e]
z.ab(H.h(["vColor"],y))
z.au(H.h(["oFragColor = vec4(vColor, 1.0 );"],y))
return z},"ov","fd",function(){var z,y
z=G.bk("LightBlinnPhongV")
y=[P.e]
z.aq(H.h(["aPosition","aNormal","aTexUV"],y))
z.ab(H.h(["vPosition","vNormal","vTexUV"],y))
z.R(H.h(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"],y))
z.d2(H.h(["void main() {\n    vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n    gl_Position = uPerspectiveViewMatrix * pos;\n    vPosition = pos.xyz;\n    vTexUV = aTexUV;\n    vNormal = uNormalMatrix * aNormal;\n}\n"],y))
return z},"ot","fb",function(){var z,y
z=G.bk("LightBlinnPhongF")
y=[P.e]
z.ab(H.h(["vPosition","vNormal","vTexUV"],y))
z.R(H.h(["uLightDescs","uLightTypes","uShininess"],y))
z.R(H.h(["uEyePosition","uTexture"],y))
z.b9(H.h(["ColorComponents acc = CombinedLight(vPosition,\n                                    vNormal,\n                                    uEyePosition,\n                                    uLightDescs,\n                                    uLightTypes,\n                                    uShininess);\n\noFragColor.rgb = acc.diffuse +\n                    acc.specular +\n                    texture(uTexture, vTexUV).rgb;\noFragColor.a = 1.0;\n"],y),H.h(["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    // float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"],y))
return z},"oz","fh",function(){var z,y
z=G.bk("SolidColor")
y=[P.e]
z.aq(H.h(["aPosition"],y))
z.R(H.h(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.au(H.h(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"],y))
return z},"oy","fg",function(){var z,y
z=G.bk("SolidColorF")
y=[P.e]
z.R(H.h(["uColor"],y))
z.au(H.h(["oFragColor = vec4( uColor, 1.0 );"],y))
return z},"oC","fj",function(){return(1+P.m1(5))/2},"mW","eY",function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.fj()
y=T.N(-1,z,0)
y.C(0)
x=T.N(1,z,0)
x.C(0)
if(typeof z!=="number")return z.ev()
w=T.N(-1,-z,0)
w.C(0)
v=T.N(1,-z,0)
v.C(0)
u=T.N(0,-1,z)
u.C(0)
t=T.N(0,1,z)
t.C(0)
s=T.N(0,-1,-z)
s.C(0)
r=T.N(0,1,-z)
r.C(0)
q=T.N(z,0,-1)
q.C(0)
p=T.N(z,0,1)
p.C(0)
o=T.N(-z,0,-1)
o.C(0)
z=T.N(-z,0,1)
z.C(0)
return H.h([y,x,w,v,u,t,s,r,q,p,o,z],[T.p])},"ox","ff",function(){return T.N(11,20,0)},"oo","fa",function(){return T.N(0,-50,0)},"oA","fi",function(){return T.N(-11,-30,0)},"op","ch",function(){var z,y,x,w,v,u
z=$.fa()
y=$.eR()
x=$.eU()
z=new G.dt(z,40,T.bZ(),T.bZ(),1,T.bn(),T.bn(),"dir",!1,!0)
z.at("dir",1,y,x)
y=$.ff()
w=$.eS()
v=new G.dT(y,50,3,T.bn(),T.bn(),"point",!1,!0)
v.at("point",3,w,x)
w=$.fi()
u=$.eT()
w=new G.e_(y,w,50,0.4487989505128276,2,1,1,40,T.bZ(),T.bZ(),2,T.bn(),T.bn(),"spot",!1,!0)
w.at("spot",2,u,x)
return P.cD(["idDirectional",z,"idPoint",v,"idSpot",w],P.e,G.bd)},"oq","ci",function(){return P.S(P.e,A.aB)},"or","d2",function(){return H.h([],[[P.a2,P.c]])}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.z},{func:1,ret:-1},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.z,args:[W.Y]},{func:1,ret:P.U,args:[P.e]},{func:1,ret:P.z,args:[,,]},{func:1,ret:P.e,args:[P.C]},{func:1,args:[,]},{func:1,ret:P.z,args:[,]},{func:1,ret:P.U,args:[W.ah]},{func:1,ret:-1,args:[W.K]},{func:1,ret:-1,args:[,]},{func:1,ret:P.U,args:[W.Q,P.e,P.e,W.bJ]},{func:1,ret:P.z,args:[W.bb]},{func:1,args:[P.e]},{func:1,ret:P.z,args:[,P.T]},{func:1,ret:P.z,args:[,],opt:[P.T]},{func:1,ret:[P.P,,],args:[,]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.z,args:[P.H]},{func:1,args:[W.K]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[W.w,W.w]},{func:1,args:[,,]},{func:1,ret:P.z,args:[W.bF]},{func:1,ret:P.z,args:[{func:1,ret:-1}]},{func:1,ret:P.z,args:[W.aW]},{func:1,ret:P.C,args:[P.C,P.c]},{func:1,ret:P.z,args:[W.aT]},{func:1,ret:P.z,args:[P.e]},{func:1,ret:P.z,args:[W.K]},{func:1,ret:-1,args:[P.H]},{func:1,ret:P.z,args:[[P.a,,]]},{func:1,ret:P.C,args:[,,]},{func:1,args:[,P.e]},{func:1,ret:P.U,args:[W.w]}]
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
if(x==y)H.m7(d||a)
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
Isolate.aP=a.aP
Isolate.bq=a.bq
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
if(typeof dartMainRunner==="function")dartMainRunner(T.eL,[])
else T.eL([])})})()
//# sourceMappingURL=light2.dart.js.map
