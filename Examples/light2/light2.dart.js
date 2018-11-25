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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cS"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cS"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cS(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bp=function(){}
var dart=[["","",,H,{"^":"",n0:{"^":"c;a"}}],["","",,J,{"^":"",
cX:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cc:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cV==null){H.lN()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(P.cK("Return interceptor for "+H.d(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cZ()]
if(v!=null)return v
v=H.lS(a)
if(v!=null)return v
if(typeof a=="function")return C.T
y=Object.getPrototypeOf(a)
if(y==null)return C.C
if(y===Object.prototype)return C.C
if(typeof w=="function"){Object.defineProperty(w,$.cZ(),{value:C.x,enumerable:false,writable:true,configurable:true})
return C.x}return C.x},
j:{"^":"c;",
D:function(a,b){return a===b},
gw:function(a){return H.bh(a)},
k:["cJ",function(a){return"Instance of '"+H.bi(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
i2:{"^":"j;",
k:function(a){return String(a)},
gw:function(a){return a?519018:218159},
$isU:1},
i3:{"^":"j;",
D:function(a,b){return null==b},
k:function(a){return"null"},
gw:function(a){return 0},
$isz:1},
cz:{"^":"j;",
gw:function(a){return 0},
k:["cL",function(a){return String(a)}]},
iO:{"^":"cz;"},
bm:{"^":"cz;"},
bD:{"^":"cz;",
k:function(a){var z=a[$.eW()]
if(z==null)return this.cL(a)
return"JavaScript function for "+H.d(J.bv(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isby:1},
bA:{"^":"j;$ti",
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
ged:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.b(H.cx())},
bx:function(a,b){var z,y
H.k(b,{func:1,ret:P.U,args:[H.o(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.b(P.aS(a))}return!1},
cE:function(a,b){if(!!a.immutable$list)H.a0(P.D("sort"))
H.jg(a,J.ll(),H.o(a,0))},
ao:function(a){return this.cE(a,null)},
v:function(a,b){var z
for(z=0;z<a.length;++z)if(J.V(a[z],b))return!0
return!1},
k:function(a){return P.cw(a,"[","]")},
gu:function(a){return new J.h7(a,a.length,0,[H.o(a,0)])},
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
$asx:I.bp,
$isl:1,
$isa:1,
p:{
i1:function(a,b){return J.cy(H.h(a,[b]))},
cy:function(a){H.bq(a)
a.fixed$length=Array
return a},
mZ:[function(a,b){return J.fu(H.eL(a,"$isa1"),H.eL(b,"$isa1"))},"$2","ll",8,0,34]}},
n_:{"^":"bA;$ti"},
h7:{"^":"c;a,b,c,0d,$ti",
sbb:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
q:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.F(z))
x=this.c
if(x>=y){this.sbb(null)
return!1}this.sbb(z[x]);++this.c
return!0},
$isay:1},
bB:{"^":"j;",
N:function(a,b){var z
H.cY(b)
if(typeof b!=="number")throw H.b(H.an(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gaj(b)
if(this.gaj(a)===z)return 0
if(this.gaj(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaj:function(a){return a===0?1/a<0:a<0},
cd:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.b(P.D(""+a+".toInt()"))},
dR:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.b(P.D(""+a+".ceil()"))},
e7:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.b(P.D(""+a+".floor()"))},
dS:function(a,b,c){if(this.N(b,c)>0)throw H.b(H.an(b))
if(this.N(a,b)<0)return b
if(this.N(a,c)>0)return c
return a},
eo:function(a,b){var z
if(b>20)throw H.b(P.bj(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gaj(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw:function(a){return a&0x1FFFFFFF},
cN:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bu(a,b)},
Y:function(a,b){return(a|0)===a?a/b|0:this.bu(a,b)},
bu:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.b(P.D("Result of truncating division is "+H.d(z)+": "+H.d(a)+" ~/ "+b))},
bs:function(a,b){var z
if(a>0)z=this.dE(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dE:function(a,b){return b>31?0:a>>>b},
V:function(a,b){if(typeof b!=="number")throw H.b(H.an(b))
return a>b},
$isa1:1,
$asa1:function(){return[P.H]},
$isar:1,
$isH:1},
dE:{"^":"bB;",$isC:1},
dD:{"^":"bB;"},
bC:{"^":"j;",
bI:function(a,b){if(b<0)throw H.b(H.aq(a,b))
if(b>=a.length)H.a0(H.aq(a,b))
return a.charCodeAt(b)},
a6:function(a,b){if(b>=a.length)throw H.b(H.aq(a,b))
return a.charCodeAt(b)},
F:function(a,b){H.u(b)
if(typeof b!=="string")throw H.b(P.dg(b,null,null))
return a+b},
cF:function(a,b){var z=H.h(a.split(b),[P.e])
return z},
cH:function(a,b,c){var z
if(c>a.length)throw H.b(P.bj(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cG:function(a,b){return this.cH(a,b,0)},
b2:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.c_(b,null,null))
if(b>c)throw H.b(P.c_(b,null,null))
if(c>a.length)throw H.b(P.c_(c,null,null))
return a.substring(b,c)},
cI:function(a,b){return this.b2(a,b,null)},
en:function(a){return a.toLowerCase()},
eq:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.a6(z,0)===133){x=J.i4(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.bI(z,w)===133?J.i5(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
dV:function(a,b,c){if(c>a.length)throw H.b(P.bj(c,0,a.length,null,null))
return H.m1(a,b,c)},
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
$asx:I.bp,
$isa1:1,
$asa1:function(){return[P.e]},
$isdR:1,
$ise:1,
p:{
dF:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
i4:function(a,b){var z,y
for(z=a.length;b<z;){y=C.h.a6(a,b)
if(y!==32&&y!==13&&!J.dF(y))break;++b}return b},
i5:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.h.bI(a,z)
if(y!==32&&y!==13&&!J.dF(y))break}return b}}}}],["","",,H,{"^":"",
cx:function(){return new P.cH("No element")},
i0:function(){return new P.cH("Too many elements")},
jg:function(a,b,c){H.r(a,"$isa",[c],"$asa")
H.k(b,{func:1,ret:P.C,args:[c,c]})
H.bF(a,0,J.b6(a)-1,b,c)},
bF:function(a,b,c,d,e){H.r(a,"$isa",[e],"$asa")
H.k(d,{func:1,ret:P.C,args:[e,e]})
if(c-b<=32)H.jf(a,b,c,d,e)
else H.je(a,b,c,d,e)},
jf:function(a,b,c,d,e){var z,y,x,w,v
H.r(a,"$isa",[e],"$asa")
H.k(d,{func:1,ret:P.C,args:[e,e]})
for(z=b+1,y=J.b3(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.ad(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.h(a,w,y.i(a,v))
w=v}y.h(a,w,x)}},
je:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
H.bF(a,b,m-2,a1,a2)
H.bF(a,l+2,a0,a1,a2)
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
break}}H.bF(a,m,l,a1,a2)}else H.bF(a,m,l,a1,a2)},
du:{"^":"l;"},
bX:{"^":"du;$ti",
gu:function(a){return new H.dI(this,this.gl(this),0,[H.cU(this,"bX",0)])},
aO:function(a,b){return this.cK(0,H.k(b,{func:1,ret:P.U,args:[H.cU(this,"bX",0)]}))}},
dI:{"^":"c;a,b,c,0d,$ti",
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
iq:{"^":"l;a,b,$ti",
gu:function(a){var z=this.a
return new H.cE(z.gu(z),this.b,this.$ti)},
gl:function(a){return this.a.a.a},
$asl:function(a,b){return[b]},
p:{
ir:function(a,b,c,d){H.r(a,"$isl",[c],"$asl")
H.k(b,{func:1,ret:d,args:[c]})
return new H.hA(a,b,[c,d])}}},
hA:{"^":"iq;a,b,$ti"},
cE:{"^":"ay;0a,b,c,$ti",
sa5:function(a){this.a=H.y(a,H.o(this,1))},
q:function(){var z=this.b
if(z.q()){this.sa5(this.c.$1(z.d))
return!0}this.sa5(null)
return!1},
gA:function(a){return this.a},
$asay:function(a,b){return[b]}},
is:{"^":"bX;a,b,$ti",
gl:function(a){return J.b6(this.a)},
t:function(a,b){return this.b.$1(J.fD(this.a,b))},
$asbX:function(a,b){return[b]},
$asl:function(a,b){return[b]}},
e8:{"^":"l;a,b,$ti",
gu:function(a){return new H.jF(J.bR(this.a),this.b,this.$ti)}},
jF:{"^":"ay;a,b,$ti",
q:function(){var z,y
for(z=this.a,y=this.b;z.q();)if(y.$1(z.gA(z)))return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
bW:{"^":"c;$ti"}}],["","",,H,{"^":"",
aR:function(a){var z,y
z=H.u(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
lF:function(a){return init.types[H.v(a)]},
lQ:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.B(a).$isA},
d:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bv(a)
if(typeof z!=="string")throw H.b(H.an(a))
return z},
bh:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iY:function(a,b){var z,y
if(typeof a!=="string")H.a0(H.an(a))
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.f(z,3)
y=H.u(z[3])
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
iX:function(a){var z,y
if(typeof a!=="string")H.a0(H.an(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.fY(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
bi:function(a){return H.iP(a)+H.c5(H.as(a),0,null)},
iP:function(a){var z,y,x,w,v,u,t,s,r
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
return H.aR(w.length>1&&C.h.a6(w,0)===36?C.h.cI(w,1):w)},
Z:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iW:function(a){return a.b?H.Z(a).getUTCFullYear()+0:H.Z(a).getFullYear()+0},
iU:function(a){return a.b?H.Z(a).getUTCMonth()+1:H.Z(a).getMonth()+1},
iQ:function(a){return a.b?H.Z(a).getUTCDate()+0:H.Z(a).getDate()+0},
iR:function(a){return a.b?H.Z(a).getUTCHours()+0:H.Z(a).getHours()+0},
iT:function(a){return a.b?H.Z(a).getUTCMinutes()+0:H.Z(a).getMinutes()+0},
iV:function(a){return a.b?H.Z(a).getUTCSeconds()+0:H.Z(a).getSeconds()+0},
iS:function(a){return a.b?H.Z(a).getUTCMilliseconds()+0:H.Z(a).getMilliseconds()+0},
aO:function(a){throw H.b(H.an(a))},
f:function(a,b){if(a==null)J.b6(a)
throw H.b(H.aq(a,b))},
aq:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.au(!0,b,"index",null)
z=H.v(J.b6(a))
if(!(b<0)){if(typeof z!=="number")return H.aO(z)
y=b>=z}else y=!0
if(y)return P.I(b,a,"index",null,z)
return P.c_(b,"index",null)},
an:function(a){return new P.au(!0,a,null,null)},
eD:function(a){if(typeof a!=="number")throw H.b(H.an(a))
return a},
b:function(a){var z
if(a==null)a=new P.bZ()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eO})
z.name=""}else z.toString=H.eO
return z},
eO:function(){return J.bv(this.dartException)},
a0:function(a){throw H.b(a)},
F:function(a){throw H.b(P.aS(a))},
a3:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.m7(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.bs(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cB(H.d(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dQ(H.d(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.eZ()
u=$.f_()
t=$.f0()
s=$.f1()
r=$.f4()
q=$.f5()
p=$.f3()
$.f2()
o=$.f7()
n=$.f6()
m=v.M(y)
if(m!=null)return z.$1(H.cB(H.u(y),m))
else{m=u.M(y)
if(m!=null){m.method="call"
return z.$1(H.cB(H.u(y),m))}else{m=t.M(y)
if(m==null){m=s.M(y)
if(m==null){m=r.M(y)
if(m==null){m=q.M(y)
if(m==null){m=p.M(y)
if(m==null){m=s.M(y)
if(m==null){m=o.M(y)
if(m==null){m=n.M(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dQ(H.u(y),m))}}return z.$1(new H.jz(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e_()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.au(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e_()
return a},
aN:function(a){var z
if(a==null)return new H.ep(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ep(a)},
lB:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.h(0,a[y],a[x])}return b},
lP:function(a,b,c,d,e,f){H.i(a,"$isby")
switch(H.v(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.dy("Unsupported number of arguments for wrapped closure"))},
ap:function(a,b){var z
H.v(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lP)
a.$identity=z
return z},
hi:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.B(d).$isa){z.$reflectionInfo=d
x=H.j3(z).r}else x=d
w=e?Object.create(new H.jh().constructor.prototype):Object.create(new H.cp(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ae
if(typeof u!=="number")return u.F()
$.ae=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.dl(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.lF,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.dj:H.cq
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.b("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dl(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
hf:function(a,b,c,d){var z=H.cq
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dl:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hh(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hf(y,!w,z,b)
if(y===0){w=$.ae
if(typeof w!=="number")return w.F()
$.ae=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b7
if(v==null){v=H.bU("self")
$.b7=v}return new Function(w+H.d(v)+";return "+u+"."+H.d(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ae
if(typeof w!=="number")return w.F()
$.ae=w+1
t+=w
w="return function("+t+"){return this."
v=$.b7
if(v==null){v=H.bU("self")
$.b7=v}return new Function(w+H.d(v)+"."+H.d(z)+"("+t+");}")()},
hg:function(a,b,c,d){var z,y
z=H.cq
y=H.dj
switch(b?-1:a){case 0:throw H.b(H.j9("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hh:function(a,b){var z,y,x,w,v,u,t,s
z=$.b7
if(z==null){z=H.bU("self")
$.b7=z}y=$.di
if(y==null){y=H.bU("receiver")
$.di=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hg(w,!u,x,b)
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
cS:function(a,b,c,d,e,f,g){return H.hi(a,b,H.v(c),d,!!e,!!f,g)},
u:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.b(H.a8(a,"String"))},
eE:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.a8(a,"double"))},
cY:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.a8(a,"num"))},
c7:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.b(H.a8(a,"bool"))},
v:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.b(H.a8(a,"int"))},
cf:function(a,b){throw H.b(H.a8(a,H.aR(H.u(b).substring(3))))},
lZ:function(a,b){throw H.b(H.dk(a,H.aR(H.u(b).substring(3))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.B(a)[b])return a
H.cf(a,b)},
ab:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.B(a)[b]
else z=!0
if(z)return a
H.lZ(a,b)},
eL:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.B(a)[b])return a
H.cf(a,b)},
oA:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.B(a)[b])return a
H.cf(a,b)},
bq:function(a){if(a==null)return a
if(!!J.B(a).$isa)return a
throw H.b(H.a8(a,"List<dynamic>"))},
lR:function(a,b){var z
if(a==null)return a
z=J.B(a)
if(!!z.$isa)return a
if(z[b])return a
H.cf(a,b)},
cT:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.v(z)]
else return a.$S()}return},
bK:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cT(J.B(a))
if(z==null)return!1
return H.eu(z,null,b,null)},
k:function(a,b){var z,y
if(a==null)return a
if($.cO)return a
$.cO=!0
try{if(H.bK(a,b))return a
z=H.bM(b)
y=H.a8(a,z)
throw H.b(y)}finally{$.cO=!1}},
b2:function(a,b){if(a!=null&&!H.cR(a,b))H.a0(H.a8(a,H.bM(b)))
return a},
ey:function(a){var z,y
z=J.B(a)
if(!!z.$isn){y=H.cT(z)
if(y!=null)return H.bM(y)
return"Closure"}return H.bi(a)},
m6:function(a){throw H.b(new P.ho(H.u(a)))},
eH:function(a){return init.getIsolateTag(a)},
h:function(a,b){a.$ti=b
return a},
as:function(a){if(a==null)return
return a.$ti},
or:function(a,b,c){return H.b5(a["$as"+H.d(c)],H.as(b))},
b4:function(a,b,c,d){var z
H.u(c)
H.v(d)
z=H.b5(a["$as"+H.d(c)],H.as(b))
return z==null?null:z[d]},
cU:function(a,b,c){var z
H.u(b)
H.v(c)
z=H.b5(a["$as"+H.d(b)],H.as(a))
return z==null?null:z[c]},
o:function(a,b){var z
H.v(b)
z=H.as(a)
return z==null?null:z[b]},
bM:function(a){return H.aL(a,null)},
aL:function(a,b){var z,y
H.r(b,"$isa",[P.e],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aR(a[0].builtin$cls)+H.c5(a,1,b)
if(typeof a=="function")return H.aR(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.v(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.d(b[y])}if('func' in a)return H.lk(a,b)
if('futureOr' in a)return"FutureOr<"+H.aL("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lk:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
for(z=H.lA(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.u(z[l])
n=n+m+H.aL(i[h],b)+(" "+H.d(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
c5:function(a,b,c){var z,y,x,w,v,u
H.r(c,"$isa",[P.e],"$asa")
if(a==null)return""
z=new P.cI("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aL(u,c)}return"<"+z.k(0)+">"},
lE:function(a){var z,y,x,w
z=J.B(a)
if(!!z.$isn){y=H.cT(z)
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
H.bq(c)
H.u(d)
if(a==null)return!1
z=H.as(a)
y=J.B(a)
if(y[b]==null)return!1
return H.eB(H.b5(y[d],z),null,c,null)},
bN:function(a,b,c,d){H.u(b)
H.bq(c)
H.u(d)
if(a==null)return a
if(H.ao(a,b,c,d))return a
throw H.b(H.dk(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aR(b.substring(3))+H.c5(c,0,null),init.mangledGlobalNames)))},
r:function(a,b,c,d){H.u(b)
H.bq(c)
H.u(d)
if(a==null)return a
if(H.ao(a,b,c,d))return a
throw H.b(H.a8(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aR(b.substring(3))+H.c5(c,0,null),init.mangledGlobalNames)))},
eB:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a5(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a5(a[y],b,c[y],d))return!1
return!0},
ol:function(a,b,c){return a.apply(b,H.b5(J.B(b)["$as"+H.d(c)],H.as(b)))},
eJ:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="c"||a.builtin$cls==="z"||a===-1||a===-2||H.eJ(z)}return!1},
cR:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="c"||b.builtin$cls==="z"||b===-1||b===-2||H.eJ(b)
if(b==null||b===-1||b.builtin$cls==="c"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cR(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bK(a,b)}z=J.B(a).constructor
y=H.as(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a5(z,null,b,null)},
y:function(a,b){if(a!=null&&!H.cR(a,b))throw H.b(H.a8(a,H.bM(b)))
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
if('func' in c)return H.eu(a,b,c,d)
if('func' in a)return c.builtin$cls==="by"
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
return H.eB(H.b5(r,z),b,u,d)},
eu:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.lY(m,b,l,d)},
lY:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a5(c[w],d,a[w],b))return!1}return!0},
om:function(a,b,c){Object.defineProperty(a,H.u(b),{value:c,enumerable:false,writable:true,configurable:true})},
lS:function(a){var z,y,x,w,v,u
z=H.u($.eI.$1(a))
y=$.c8[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cd[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.u($.eA.$2(a,z))
if(z!=null){y=$.c8[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cd[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.ce(x)
$.c8[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cd[z]=x
return x}if(v==="-"){u=H.ce(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eM(a,x)
if(v==="*")throw H.b(P.cK(z))
if(init.leafTags[z]===true){u=H.ce(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eM(a,x)},
eM:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cX(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
ce:function(a){return J.cX(a,!1,null,!!a.$isA)},
lX:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.ce(z)
else return J.cX(z,c,null,null)},
lN:function(){if(!0===$.cV)return
$.cV=!0
H.lO()},
lO:function(){var z,y,x,w,v,u,t,s
$.c8=Object.create(null)
$.cd=Object.create(null)
H.lJ()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eN.$1(v)
if(u!=null){t=H.lX(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lJ:function(){var z,y,x,w,v,u,t
z=C.Q()
z=H.b1(C.N,H.b1(C.S,H.b1(C.A,H.b1(C.A,H.b1(C.R,H.b1(C.O,H.b1(C.P(C.B),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eI=new H.lK(v)
$.eA=new H.lL(u)
$.eN=new H.lM(t)},
b1:function(a,b){return a(b)||b},
m1:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
m3:function(a,b,c,d){var z=b.dk(a,d)
if(z==null)return a
return H.m5(a,z.b.index,z.ge4(z),c)},
m2:function(a,b,c){var z,y
z=b.gbp()
z.lastIndex=0
y=a.replace(z,c.replace(/\$/g,"$$$$"))
return y},
m4:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.m3(a,b,c,d)},
m5:function(a,b,c,d){var z,y
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
j2:{"^":"c;a,b,c,d,e,f,r,0x",p:{
j3:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cy(z)
y=z[0]
x=z[1]
return new H.j2(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ju:{"^":"c;a,b,c,d,e,f",
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
return new H.ju(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c1:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
e5:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iK:{"^":"R;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dQ:function(a,b){return new H.iK(a,b==null?null:b.method)}}},
i8:{"^":"R;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.d(this.a)+")"},
p:{
cB:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.i8(a,y,z?null:b.receiver)}}},
jz:{"^":"R;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
m7:{"^":"n:8;a",
$1:function(a){if(!!J.B(a).$isR)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
ep:{"^":"c;a,0b",
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
gcu:function(){return this},
$isby:1,
gcu:function(){return this}},
e1:{"^":"n;"},
jh:{"^":"e1;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aR(z)+"'"}},
cp:{"^":"e1;a,b,c,d",
D:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cp))return!1
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
cq:function(a){return a.a},
dj:function(a){return a.c},
bU:function(a){var z,y,x,w,v
z=new H.cp("self","target","receiver","name")
y=J.cy(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jv:{"^":"R;a",
k:function(a){return this.a},
p:{
a8:function(a,b){return new H.jv("TypeError: "+H.d(P.bV(a))+": type '"+H.ey(a)+"' is not a subtype of type '"+b+"'")}}},
hd:{"^":"R;a",
k:function(a){return this.a},
p:{
dk:function(a,b){return new H.hd("CastError: "+H.d(P.bV(a))+": type '"+H.ey(a)+"' is not a subtype of type '"+b+"'")}}},
j8:{"^":"R;a",
k:function(a){return"RuntimeError: "+H.d(this.a)},
p:{
j9:function(a){return new H.j8(a)}}},
e6:{"^":"c;a,0b,0c,0d",
gah:function(){var z=this.b
if(z==null){z=H.bM(this.a)
this.b=z}return z},
k:function(a){return this.gah()},
gw:function(a){var z=this.d
if(z==null){z=C.h.gw(this.gah())
this.d=z}return z},
D:function(a,b){if(b==null)return!1
return b instanceof H.e6&&this.gah()===b.gah()}},
cA:{"^":"dJ;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gG:function(a){return new H.ag(this,[H.o(this,0)])},
gcp:function(a){var z=H.o(this,0)
return H.ir(new H.ag(this,[z]),new H.i7(this),z,H.o(this,1))},
ai:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.df(z,b)}else{y=this.eb(b)
return y}},
eb:function(a){var z=this.d
if(z==null)return!1
return this.aI(this.aB(z,J.at(a)&0x3ffffff),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ae(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ae(w,b)
x=y==null?null:y.b
return x}else return this.ec(b)},
ec:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aB(z,J.at(a)&0x3ffffff)
x=this.aI(y,a)
if(x<0)return
return y[x].b},
h:function(a,b,c){var z,y,x,w,v,u
H.y(b,H.o(this,0))
H.y(c,H.o(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aC()
this.b=z}this.bd(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aC()
this.c=y}this.bd(y,b,c)}else{x=this.d
if(x==null){x=this.aC()
this.d=x}w=J.at(b)&0x3ffffff
v=this.aB(x,w)
if(v==null)this.aE(x,w,[this.aD(b,c)])
else{u=this.aI(v,b)
if(u>=0)v[u].b=c
else v.push(this.aD(b,c))}}},
E:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.o(this,0),H.o(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.b(P.aS(this))
z=z.c}},
bd:function(a,b,c){var z
H.y(b,H.o(this,0))
H.y(c,H.o(this,1))
z=this.ae(a,b)
if(z==null)this.aE(a,b,this.aD(b,c))
else z.b=c},
bo:function(){this.r=this.r+1&67108863},
aD:function(a,b){var z,y
z=new H.ie(H.y(a,H.o(this,0)),H.y(b,H.o(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bo()
return z},
aI:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.V(a[y].a,b))return y
return-1},
k:function(a){return P.dK(this)},
ae:function(a,b){return a[b]},
aB:function(a,b){return a[b]},
aE:function(a,b,c){a[b]=c},
dh:function(a,b){delete a[b]},
df:function(a,b){return this.ae(a,b)!=null},
aC:function(){var z=Object.create(null)
this.aE(z,"<non-identifier-key>",z)
this.dh(z,"<non-identifier-key>")
return z},
$isdH:1},
i7:{"^":"n;a",
$1:function(a){var z=this.a
return z.i(0,H.y(a,H.o(z,0)))},
$S:function(){var z=this.a
return{func:1,ret:H.o(z,1),args:[H.o(z,0)]}}},
ie:{"^":"c;a,b,0c,0d"},
ag:{"^":"du;a,$ti",
gl:function(a){return this.a.a},
gu:function(a){var z,y
z=this.a
y=new H.ig(z,z.r,this.$ti)
y.c=z.e
return y}},
ig:{"^":"c;a,b,0c,0d,$ti",
sbc:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
q:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.aS(z))
else{z=this.c
if(z==null){this.sbc(null)
return!1}else{this.sbc(z.a)
this.c=this.c.c
return!0}}},
$isay:1},
lK:{"^":"n:8;a",
$1:function(a){return this.a(a)}},
lL:{"^":"n:35;a",
$2:function(a,b){return this.a(a,b)}},
lM:{"^":"n:15;a",
$1:function(a){return this.a(H.u(a))}},
i6:{"^":"c;a,b,0c,0d",
k:function(a){return"RegExp/"+this.a+"/"},
gbp:function(){var z=this.c
if(z!=null)return z
z=this.b
z=H.dG(this.a,z.multiline,!z.ignoreCase,!0)
this.c=z
return z},
dk:function(a,b){var z,y
z=this.gbp()
z.lastIndex=b
y=z.exec(a)
if(y==null)return
return new H.ks(this,y)},
$isdR:1,
p:{
dG:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.b(P.cv("Illegal RegExp pattern ("+String(w)+")",a,null))}}},
ks:{"^":"c;a,b",
ge4:function(a){var z=this.b
return z.index+z[0].length},
i:function(a,b){var z=this.b
if(b>=z.length)return H.f(z,b)
return z[b]}}}],["","",,H,{"^":"",
lA:function(a){return J.i1(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
aQ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
c4:function(a){var z,y
if(!!J.B(a).$isx)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.h(z,y,a[y])
return z},
ak:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.aq(b,a))},
iF:{"^":"j;",$isjw:1,"%":"DataView;ArrayBufferView;cF|ej|ek|dN|el|em|aA"},
cF:{"^":"iF;",
gl:function(a){return a.length},
$isx:1,
$asx:I.bp,
$isA:1,
$asA:I.bp},
dN:{"^":"ek;",
i:function(a,b){H.ak(b,a,a.length)
return a[b]},
h:function(a,b,c){H.v(b)
H.eE(c)
H.ak(b,a,a.length)
a[b]=c},
$asbW:function(){return[P.ar]},
$asq:function(){return[P.ar]},
$isl:1,
$asl:function(){return[P.ar]},
$isa:1,
$asa:function(){return[P.ar]},
"%":"Float64Array"},
aA:{"^":"em;",
h:function(a,b,c){H.v(b)
H.v(c)
H.ak(b,a,a.length)
a[b]=c},
$asbW:function(){return[P.C]},
$asq:function(){return[P.C]},
$isl:1,
$asl:function(){return[P.C]},
$isa:1,
$asa:function(){return[P.C]}},
iE:{"^":"dN;",$isaf:1,"%":"Float32Array"},
n8:{"^":"aA;",
i:function(a,b){H.ak(b,a,a.length)
return a[b]},
"%":"Int16Array"},
n9:{"^":"aA;",
i:function(a,b){H.ak(b,a,a.length)
return a[b]},
$ishZ:1,
"%":"Int32Array"},
na:{"^":"aA;",
i:function(a,b){H.ak(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nb:{"^":"aA;",
i:function(a,b){H.ak(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
iG:{"^":"aA;",
i:function(a,b){H.ak(b,a,a.length)
return a[b]},
$isnV:1,
"%":"Uint32Array"},
nc:{"^":"aA;",
gl:function(a){return a.length},
i:function(a,b){H.ak(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
nd:{"^":"aA;",
gl:function(a){return a.length},
i:function(a,b){H.ak(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
ej:{"^":"cF+q;"},
ek:{"^":"ej+bW;"},
el:{"^":"cF+q;"},
em:{"^":"el+bW;"}}],["","",,P,{"^":"",
jM:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.ls()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.ap(new P.jO(z),1)).observe(y,{childList:true})
return new P.jN(z,y,x)}else if(self.setImmediate!=null)return P.lt()
return P.lu()},
o5:[function(a){self.scheduleImmediate(H.ap(new P.jP(H.k(a,{func:1,ret:-1})),0))},"$1","ls",4,0,3],
o6:[function(a){self.setImmediate(H.ap(new P.jQ(H.k(a,{func:1,ret:-1})),0))},"$1","lt",4,0,3],
o7:[function(a){H.k(a,{func:1,ret:-1})
P.l0(0,a)},"$1","lu",4,0,3],
hK:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
H.r(a,"$isl",[[P.a2,d]],"$asl")
s=[[P.a,d]]
y=new P.P(0,$.E,s)
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.hM(z,b,!1,y)
try{for(r=a,q=r.length,p=0,o=0;p<r.length;r.length===q||(0,H.F)(r),++p){w=r[p]
v=o
w.aM(new P.hL(z,v,y,b,!1,d),x,null)
o=++z.b}if(o===0){r=new P.P(0,$.E,s)
r.bf(C.X)
return r}r=new Array(o)
r.fixed$length=Array
z.a=H.h(r,[d])}catch(n){u=H.a3(n)
t=H.aN(n)
if(z.b===0||!1){m=u
if(m==null)m=new P.bZ()
r=$.E
if(r!==C.e)r.toString
s=new P.P(0,r,s)
s.bg(m,t)
return s}else{z.c=u
z.d=t}}return y},
lo:function(a,b){if(H.bK(a,{func:1,args:[P.c,P.T]}))return H.k(a,{func:1,ret:null,args:[P.c,P.T]})
if(H.bK(a,{func:1,args:[P.c]}))return H.k(a,{func:1,ret:null,args:[P.c]})
throw H.b(P.dg(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ln:function(){var z,y
for(;z=$.b_,z!=null;){$.bo=null
y=z.b
$.b_=y
if(y==null)$.bn=null
z.a.$0()}},
oj:[function(){$.cP=!0
try{P.ln()}finally{$.bo=null
$.cP=!1
if($.b_!=null)$.d_().$1(P.eC())}},"$0","eC",0,0,1],
ex:function(a){var z=new P.ea(H.k(a,{func:1,ret:-1}))
if($.b_==null){$.bn=z
$.b_=z
if(!$.cP)$.d_().$1(P.eC())}else{$.bn.b=z
$.bn=z}},
lr:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
z=$.b_
if(z==null){P.ex(a)
$.bo=$.bn
return}y=new P.ea(a)
x=$.bo
if(x==null){y.b=z
$.bo=y
$.b_=y}else{y.b=x.b
x.b=y
$.bo=y
if(y.b==null)$.bn=y}},
m_:function(a){var z,y
z={func:1,ret:-1}
H.k(a,z)
y=$.E
if(C.e===y){P.b0(null,null,C.e,a)
return}y.toString
P.b0(null,null,y,H.k(y.bA(a),z))},
li:function(a,b,c){a.dQ(0)
b.ad(c)},
c6:function(a,b,c,d,e){var z={}
z.a=d
P.lr(new P.lp(z,e))},
ev:function(a,b,c,d,e){var z,y
H.k(d,{func:1,ret:e})
y=$.E
if(y===c)return d.$0()
$.E=c
z=y
try{y=d.$0()
return y}finally{$.E=z}},
ew:function(a,b,c,d,e,f,g){var z,y
H.k(d,{func:1,ret:f,args:[g]})
H.y(e,g)
y=$.E
if(y===c)return d.$1(e)
$.E=c
z=y
try{y=d.$1(e)
return y}finally{$.E=z}},
lq:function(a,b,c,d,e,f,g,h,i){var z,y
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
if(z)d=!(!z||!1)?c.bA(d):c.dN(d,-1)
P.ex(d)},
jO:{"^":"n:9;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jN:{"^":"n:26;a,b,c",
$1:function(a){var z,y
this.a.a=H.k(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jP:{"^":"n:0;a",
$0:function(){this.a.$0()}},
jQ:{"^":"n:0;a",
$0:function(){this.a.$0()}},
l_:{"^":"c;a,0b,c",
d9:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.ap(new P.l1(this,b),0),a)
else throw H.b(P.D("`setTimeout()` not found."))},
p:{
l0:function(a,b){var z=new P.l_(!0,0)
z.d9(a,b)
return z}}},
l1:{"^":"n:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
a2:{"^":"c;$ti"},
hM:{"^":"n:16;a,b,c,d",
$2:function(a,b){var z,y
H.i(b,"$isT")
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.I(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.I(z.c,z.d)}},
hL:{"^":"n;a,b,c,d,e,f",
$1:function(a){var z,y
H.y(a,this.f)
z=this.a;--z.b
y=z.a
if(y!=null){C.a.h(y,this.b,a)
if(z.b===0)this.c.bj(z.a)}else if(z.b===0&&!this.e)this.c.I(z.c,z.d)},
$S:function(){return{func:1,ret:P.z,args:[this.f]}}},
ed:{"^":"c;$ti",
dU:function(a,b){if(a==null)a=new P.bZ()
if(this.a.a!==0)throw H.b(P.bG("Future already completed"))
$.E.toString
this.I(a,b)},
dT:function(a){return this.dU(a,null)}},
cL:{"^":"ed;a,$ti",
aG:function(a,b){var z
H.b2(b,{futureOr:1,type:H.o(this,0)})
z=this.a
if(z.a!==0)throw H.b(P.bG("Future already completed"))
z.bf(b)},
I:function(a,b){this.a.bg(a,b)}},
kV:{"^":"ed;a,$ti",
I:function(a,b){this.a.I(a,b)}},
aY:{"^":"c;0a,b,c,d,e,$ti",
ef:function(a){if(this.c!==6)return!0
return this.b.b.aK(H.k(this.d,{func:1,ret:P.U,args:[P.c]}),a.a,P.U,P.c)},
ea:function(a){var z,y,x,w
z=this.e
y=P.c
x={futureOr:1,type:H.o(this,1)}
w=this.b.b
if(H.bK(z,{func:1,args:[P.c,P.T]}))return H.b2(w.ej(z,a.a,a.b,null,y,P.T),x)
else return H.b2(w.aK(H.k(z,{func:1,args:[P.c]}),a.a,null,y),x)}},
P:{"^":"c;bt:a<,b,0dB:c<,$ti",
aM:function(a,b,c){var z,y,x,w
z=H.o(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.E
if(y!==C.e){y.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.lo(b,y)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.P(0,$.E,[c])
w=b==null?1:3
this.be(new P.aY(x,w,a,b,[z,c]))
return x},
a_:function(a,b){return this.aM(a,null,b)},
be:function(a){var z,y
z=this.a
if(z<=1){a.a=H.i(this.c,"$isaY")
this.c=a}else{if(z===2){y=H.i(this.c,"$isP")
z=y.a
if(z<4){y.be(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.b0(null,null,z,H.k(new P.k6(this,a),{func:1,ret:-1}))}},
bq:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.i(this.c,"$isaY")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.i(this.c,"$isP")
y=u.a
if(y<4){u.bq(a)
return}this.a=y
this.c=u.c}z.a=this.ag(a)
y=this.b
y.toString
P.b0(null,null,y,H.k(new P.kd(z,this),{func:1,ret:-1}))}},
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
if(H.ao(a,"$isa2",y,"$asa2"))if(H.ao(a,"$isP",y,null))P.c2(a,this)
else P.ee(a,this)
else{x=this.af()
H.y(a,z)
this.a=4
this.c=a
P.aZ(this,x)}},
bj:function(a){var z
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
bf:function(a){var z
H.b2(a,{futureOr:1,type:H.o(this,0)})
if(H.ao(a,"$isa2",this.$ti,"$asa2")){this.dd(a)
return}this.a=1
z=this.b
z.toString
P.b0(null,null,z,H.k(new P.k8(this,a),{func:1,ret:-1}))},
dd:function(a){var z=this.$ti
H.r(a,"$isa2",z,"$asa2")
if(H.ao(a,"$isP",z,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.b0(null,null,z,H.k(new P.kc(this,a),{func:1,ret:-1}))}else P.c2(a,this)
return}P.ee(a,this)},
bg:function(a,b){var z
H.i(b,"$isT")
this.a=1
z=this.b
z.toString
P.b0(null,null,z,H.k(new P.k7(this,a,b),{func:1,ret:-1}))},
$isa2:1,
p:{
ee:function(a,b){var z,y,x
b.a=1
try{a.aM(new P.k9(b),new P.ka(b),null)}catch(x){z=H.a3(x)
y=H.aN(x)
P.m_(new P.kb(b,z,y))}},
c2:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.i(a.c,"$isP")
if(z>=4){y=b.af()
b.a=a.a
b.c=a.c
P.aZ(b,y)}else{y=H.i(b.c,"$isaY")
b.a=2
b.c=a
a.bq(y)}},
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
P.c6(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
P.c6(null,null,y,u,t)
return}o=$.E
if(o!=q)$.E=q
else o=null
y=b.c
if(y===8)new P.kg(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kf(x,b,r).$0()}else if((y&2)!==0)new P.ke(z,x,b).$0()
if(o!=null)$.E=o
y=x.b
if(!!J.B(y).$isa2){if(y.a>=4){n=H.i(t.c,"$isaY")
t.c=null
b=t.ag(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.c2(y,t)
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
k6:{"^":"n:0;a,b",
$0:function(){P.aZ(this.a,this.b)}},
kd:{"^":"n:0;a,b",
$0:function(){P.aZ(this.b,this.a.a)}},
k9:{"^":"n:9;a",
$1:function(a){var z=this.a
z.a=0
z.ad(a)}},
ka:{"^":"n:17;a",
$2:function(a,b){H.i(b,"$isT")
this.a.I(a,b)},
$1:function(a){return this.$2(a,null)}},
kb:{"^":"n:0;a,b,c",
$0:function(){this.a.I(this.b,this.c)}},
k8:{"^":"n:0;a,b",
$0:function(){var z=this.a
z.bj(H.y(this.b,H.o(z,0)))}},
kc:{"^":"n:0;a,b",
$0:function(){P.c2(this.b,this.a)}},
k7:{"^":"n:0;a,b,c",
$0:function(){this.a.I(this.b,this.c)}},
kg:{"^":"n:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.c9(H.k(w.d,{func:1}),null)}catch(v){y=H.a3(v)
x=H.aN(v)
if(this.d){w=H.i(this.a.a.c,"$isa4").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.i(this.a.a.c,"$isa4")
else u.b=new P.a4(y,x)
u.a=!0
return}if(!!J.B(z).$isa2){if(z instanceof P.P&&z.gbt()>=4){if(z.gbt()===8){w=this.b
w.b=H.i(z.gdB(),"$isa4")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.a_(new P.kh(t),null)
w.a=!1}}},
kh:{"^":"n:18;a",
$1:function(a){return this.a}},
kf:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.o(x,0)
v=H.y(this.c,w)
u=H.o(x,1)
this.a.b=x.b.b.aK(H.k(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a3(t)
y=H.aN(t)
x=this.a
x.b=new P.a4(z,y)
x.a=!0}}},
ke:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.i(this.a.a.c,"$isa4")
w=this.c
if(w.ef(z)&&w.e!=null){v=this.b
v.b=w.ea(z)
v.a=!1}}catch(u){y=H.a3(u)
x=H.aN(u)
w=H.i(this.a.a.c,"$isa4")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a4(y,x)
s.a=!0}}},
ea:{"^":"c;a,0b"},
jl:{"^":"c;$ti",
gl:function(a){var z,y,x,w
z={}
y=new P.P(0,$.E,[P.C])
z.a=0
x=H.o(this,0)
w=H.k(new P.jp(z,this),{func:1,ret:-1,args:[x]})
H.k(new P.jq(z,y),{func:1,ret:-1})
W.aa(this.a,this.b,w,!1,x)
return y},
ge6:function(a){var z,y,x,w
z={}
y=new P.P(0,$.E,this.$ti)
z.a=null
x=H.o(this,0)
w=H.k(new P.jn(z,this,y),{func:1,ret:-1,args:[x]})
H.k(new P.jo(y),{func:1,ret:-1})
z.a=W.aa(this.a,this.b,w,!1,x)
return y}},
jp:{"^":"n;a,b",
$1:function(a){H.y(a,H.o(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.z,args:[H.o(this.b,0)]}}},
jq:{"^":"n:0;a,b",
$0:function(){this.b.ad(this.a.a)}},
jn:{"^":"n;a,b,c",
$1:function(a){H.y(a,H.o(this.b,0))
P.li(this.a.a,this.c,a)},
$S:function(){return{func:1,ret:P.z,args:[H.o(this.b,0)]}}},
jo:{"^":"n:0;a",
$0:function(){var z,y,x,w
try{x=H.cx()
throw H.b(x)}catch(w){z=H.a3(w)
y=H.aN(w)
$.E.toString
this.a.I(z,y)}}},
jm:{"^":"c;"},
a4:{"^":"c;a,b",
k:function(a){return H.d(this.a)},
$isR:1},
l7:{"^":"c;",$iso3:1},
lp:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bZ()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.b(z)
x=H.b(z)
x.stack=y.k(0)
throw x}},
kE:{"^":"l7;",
ek:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
try{if(C.e===$.E){a.$0()
return}P.ev(null,null,this,a,-1)}catch(x){z=H.a3(x)
y=H.aN(x)
P.c6(null,null,this,z,H.i(y,"$isT"))}},
el:function(a,b,c){var z,y,x
H.k(a,{func:1,ret:-1,args:[c]})
H.y(b,c)
try{if(C.e===$.E){a.$1(b)
return}P.ew(null,null,this,a,b,-1,c)}catch(x){z=H.a3(x)
y=H.aN(x)
P.c6(null,null,this,z,H.i(y,"$isT"))}},
dN:function(a,b){return new P.kG(this,H.k(a,{func:1,ret:b}),b)},
bA:function(a){return new P.kF(this,H.k(a,{func:1,ret:-1}))},
dO:function(a,b){return new P.kH(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
c9:function(a,b){H.k(a,{func:1,ret:b})
if($.E===C.e)return a.$0()
return P.ev(null,null,this,a,b)},
aK:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.y(b,d)
if($.E===C.e)return a.$1(b)
return P.ew(null,null,this,a,b,c,d)},
ej:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.y(b,e)
H.y(c,f)
if($.E===C.e)return a.$2(b,c)
return P.lq(null,null,this,a,b,c,d,e,f)}},
kG:{"^":"n;a,b,c",
$0:function(){return this.a.c9(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
kF:{"^":"n:1;a,b",
$0:function(){return this.a.ek(this.b)}},
kH:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.el(this.b,H.y(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
cC:function(a,b,c){H.bq(a)
return H.r(H.lB(a,new H.cA(0,0,[b,c])),"$isdH",[b,c],"$asdH")},
S:function(a,b){return new H.cA(0,0,[a,b])},
ih:function(){return new H.cA(0,0,[null,null])},
a7:function(a,b,c,d){return new P.ko(0,0,[d])},
i_:function(a,b,c){var z,y
if(P.cQ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.h([],[P.e])
y=$.br()
C.a.j(y,a)
try{P.lm(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.e0(b,H.lR(z,"$isl"),", ")+c
return y.charCodeAt(0)==0?y:y},
cw:function(a,b,c){var z,y,x
if(P.cQ(a))return b+"..."+c
z=new P.cI(b)
y=$.br()
C.a.j(y,a)
try{x=z
x.a=P.e0(x.gX(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gX()+c
y=z.gX()
return y.charCodeAt(0)==0?y:y},
cQ:function(a){var z,y
for(z=0;y=$.br(),z<y.length;++z)if(a===y[z])return!0
return!1},
lm:function(a,b){var z,y,x,w,v,u,t,s,r,q
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
cD:function(a,b){var z,y,x
z=P.a7(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.F)(a),++x)z.j(0,H.y(a[x],b))
return z},
dK:function(a){var z,y,x
z={}
if(P.cQ(a))return"{...}"
y=new P.cI("")
try{C.a.j($.br(),a)
x=y
x.a=x.gX()+"{"
z.a=!0
J.fG(a,new P.ip(z,y))
z=y
z.a=z.gX()+"}"}finally{z=$.br()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gX()
return z.charCodeAt(0)==0?z:z},
ko:{"^":"kj;a,0b,0c,0d,0e,0f,r,$ti",
gu:function(a){var z=new P.ei(this,this.r,this.$ti)
z.c=this.e
return z},
gl:function(a){return this.a},
v:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.i(z[b],"$isbJ")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.i(y[b],"$isbJ")!=null}else return this.de(b)},
de:function(a){var z=this.d
if(z==null)return!1
return this.aA(this.bm(z,a),a)>=0},
j:function(a,b){var z,y
H.y(b,H.o(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cM()
this.b=z}return this.bh(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cM()
this.c=y}return this.bh(y,b)}else return this.da(0,b)},
da:function(a,b){var z,y,x
H.y(b,H.o(this,0))
z=this.d
if(z==null){z=P.cM()
this.d=z}y=this.bk(b)
x=z[y]
if(x==null)z[y]=[this.aw(b)]
else{if(this.aA(x,b)>=0)return!1
x.push(this.aw(b))}return!0},
c8:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.br(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.br(this.c,b)
else return this.dt(0,b)},
dt:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bm(z,b)
x=this.aA(y,b)
if(x<0)return!1
this.bv(y.splice(x,1)[0])
return!0},
a8:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.av()}},
bh:function(a,b){H.y(b,H.o(this,0))
if(H.i(a[b],"$isbJ")!=null)return!1
a[b]=this.aw(b)
return!0},
br:function(a,b){var z
if(a==null)return!1
z=H.i(a[b],"$isbJ")
if(z==null)return!1
this.bv(z)
delete a[b]
return!0},
av:function(){this.r=this.r+1&67108863},
aw:function(a){var z,y
z=new P.bJ(H.y(a,H.o(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.av()
return z},
bv:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.av()},
bk:function(a){return J.at(a)&0x3ffffff},
bm:function(a,b){return a[this.bk(b)]},
aA:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.V(a[y].a,b))return y
return-1},
p:{
cM:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bJ:{"^":"c;a,0b,0c"},
ei:{"^":"c;a,b,0c,0d,$ti",
sbi:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
q:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.aS(z))
else{z=this.c
if(z==null){this.sbi(null)
return!1}else{this.sbi(H.y(z.a,H.o(this,0)))
this.c=this.c.b
return!0}}},
$isay:1,
p:{
kp:function(a,b,c){var z=new P.ei(a,b,[c])
z.c=a.e
return z}}},
kj:{"^":"ja;"},
ii:{"^":"kq;",$isl:1,$isa:1},
q:{"^":"c;$ti",
gu:function(a){return new H.dI(a,this.gl(a),0,[H.b4(this,a,"q",0)])},
t:function(a,b){return this.i(a,b)},
e8:function(a,b,c,d){var z,y,x
H.y(b,d)
H.k(c,{func:1,ret:d,args:[d,H.b4(this,a,"q",0)]})
z=this.gl(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.i(a,x))
if(z!==this.gl(a))throw H.b(P.aS(a))}return y},
bW:function(a,b,c,d){var z
H.y(d,H.b4(this,a,"q",0))
P.j1(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.h(a,z,d)},
k:function(a){return P.cw(a,"[","]")}},
dJ:{"^":"W;"},
ip:{"^":"n:6;a,b",
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
for(z=J.bR(this.gG(a));z.q();){y=z.gA(z)
b.$2(y,this.i(a,y))}},
gl:function(a){return J.b6(this.gG(a))},
k:function(a){return P.dK(a)},
$isM:1},
jb:{"^":"c;$ti",
J:function(a,b){var z
for(z=J.bR(H.r(b,"$isl",this.$ti,"$asl"));z.q();)this.j(0,z.gA(z))},
k:function(a){return P.cw(this,"{","}")},
$isl:1,
$isnu:1},
ja:{"^":"jb;"},
kq:{"^":"c+q;"}}],["","",,P,{"^":"",
cW:function(a,b,c){var z
H.u(a)
z=H.iY(a,c)
if(z!=null)return z
throw H.b(P.cv(a,null,null))},
aM:function(a,b){var z
H.u(a)
z=H.iX(a)
if(z!=null)return z
throw H.b(P.cv("Invalid double",a,null))},
hD:function(a){if(a instanceof H.n)return a.k(0)
return"Instance of '"+H.bi(a)+"'"},
dU:function(a,b,c){return new H.i6(a,H.dG(a,!1,!0,!1))},
bV:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bv(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hD(a)},
dy:function(a){return new P.k3(a)},
al:function(a){H.aQ(H.d(a))},
U:{"^":"c;"},
"+bool":0,
b8:{"^":"c;a,b",
D:function(a,b){if(b==null)return!1
return b instanceof P.b8&&this.a===b.a&&this.b===b.b},
N:function(a,b){return C.f.N(this.a,H.i(b,"$isb8").a)},
gw:function(a){var z=this.a
return(z^C.f.bs(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.hp(H.iW(this))
y=P.bw(H.iU(this))
x=P.bw(H.iQ(this))
w=P.bw(H.iR(this))
v=P.bw(H.iT(this))
u=P.bw(H.iV(this))
t=P.hq(H.iS(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
$isa1:1,
$asa1:function(){return[P.b8]},
p:{
hp:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hq:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bw:function(a){if(a>=10)return""+a
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
z=new P.hz()
y=this.a
if(y<0)return"-"+new P.b9(0-y).k(0)
x=z.$1(C.f.Y(y,6e7)%60)
w=z.$1(C.f.Y(y,1e6)%60)
v=new P.hy().$1(y%1e6)
return""+C.f.Y(y,36e8)+":"+H.d(x)+":"+H.d(w)+"."+H.d(v)},
$isa1:1,
$asa1:function(){return[P.b9]},
p:{
dt:function(a,b,c,d,e,f){return new P.b9(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hy:{"^":"n:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hz:{"^":"n:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
R:{"^":"c;"},
bZ:{"^":"R;",
k:function(a){return"Throw of null."}},
au:{"^":"R;a,b,c,d",
gay:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gax:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.d(z)
w=this.gay()+y+x
if(!this.a)return w
v=this.gax()
u=P.bV(this.b)
return w+v+": "+H.d(u)},
p:{
co:function(a){return new P.au(!1,null,null,a)},
dg:function(a,b,c){return new P.au(!0,a,b,c)}}},
dT:{"^":"au;e,f,a,b,c,d",
gay:function(){return"RangeError"},
gax:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.d(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.d(z)
else if(x>z)y=": Not in range "+H.d(z)+".."+H.d(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.d(z)}return y},
p:{
c_:function(a,b,c){return new P.dT(null,null,!0,a,b,"Value not in range")},
bj:function(a,b,c,d,e){return new P.dT(b,c,!0,a,d,"Invalid value")},
j1:function(a,b,c,d,e,f){if(0>a||a>c)throw H.b(P.bj(a,0,c,"start",f))
if(a>b||b>c)throw H.b(P.bj(b,a,c,"end",f))
return b}}},
hY:{"^":"au;e,l:f>,a,b,c,d",
gay:function(){return"RangeError"},
gax:function(){var z,y
z=H.v(this.b)
if(typeof z!=="number")return z.aa()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.d(y)},
p:{
I:function(a,b,c,d,e){var z=H.v(e==null?J.b6(b):e)
return new P.hY(b,z,!0,a,c,"Index out of range")}}},
jA:{"^":"R;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
D:function(a){return new P.jA(a)}}},
jy:{"^":"R;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cK:function(a){return new P.jy(a)}}},
cH:{"^":"R;a",
k:function(a){return"Bad state: "+this.a},
p:{
bG:function(a){return new P.cH(a)}}},
hj:{"^":"R;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.d(P.bV(z))+"."},
p:{
aS:function(a){return new P.hj(a)}}},
e_:{"^":"c;",
k:function(a){return"Stack Overflow"},
$isR:1},
ho:{"^":"R;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
k3:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
hH:{"^":"c;a,b,c",
k:function(a){var z,y,x,w
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.d(z):"FormatException"
x=this.b
if(typeof x==="string"){w=x.length>78?C.h.b2(x,0,75)+"...":x
return y+"\n"+w}else return y},
p:{
cv:function(a,b,c){return new P.hH(a,b,c)}}},
by:{"^":"c;"},
C:{"^":"H;"},
"+int":0,
l:{"^":"c;$ti",
aO:["cK",function(a,b){var z=H.cU(this,"l",0)
return new H.e8(this,H.k(b,{func:1,ret:P.U,args:[z]}),[z])}],
gl:function(a){var z,y
z=this.gu(this)
for(y=0;z.q();)++y
return y},
gW:function(a){var z,y
z=this.gu(this)
if(!z.q())throw H.b(H.cx())
y=z.gA(z)
if(z.q())throw H.b(H.i0())
return y},
t:function(a,b){var z,y,x
if(b<0)H.a0(P.bj(b,0,null,"index",null))
for(z=this.gu(this),y=0;z.q();){x=z.gA(z)
if(b===y)return x;++y}throw H.b(P.I(b,this,"index",null,y))},
k:function(a){return P.i_(this,"(",")")}},
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
$isdR:1},
"+String":0,
cI:{"^":"c;X:a<",
gl:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
e0:function(a,b,c){var z=J.bR(b)
if(!z.q())return a
if(c.length===0){do a+=H.d(z.gA(z))
while(z.q())}else{a+=H.d(z.gA(z))
for(;z.q();)a=a+c+H.d(z.gA(z))}return a}}}}],["","",,W,{"^":"",
hB:function(a,b,c){var z,y
z=document.body
y=(z&&C.p).O(z,a,b,c)
y.toString
z=W.w
z=new H.e8(new W.a9(y),H.k(new W.hC(),{func:1,ret:P.U,args:[z]}),[z])
return H.i(z.gW(z),"$isQ")},
dx:function(a){H.i(a,"$isL")
return"wheel"},
ba:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fK(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a3(x)}return z},
k0:function(a,b){return document.createElement(a)},
c3:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eh:function(a,b,c,d){var z,y
z=W.c3(W.c3(W.c3(W.c3(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
cN:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.jV(a)
if(!!J.B(z).$isL)return z
return}else return H.i(a,"$isL")},
lj:function(a){var z
if(!!J.B(a).$isct)return a
z=new P.jJ([],[],!1)
z.c=!0
return z.aN(a)},
ez:function(a,b){var z
H.k(a,{func:1,ret:-1,args:[b]})
z=$.E
if(z===C.e)return a
return z.dO(a,b)},
O:{"^":"Q;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
m8:{"^":"j;0l:length=","%":"AccessibleNodeList"},
h5:{"^":"O;",
k:function(a){return String(a)},
$ish5:1,
"%":"HTMLAnchorElement"},
m9:{"^":"O;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
dh:{"^":"O;",$isdh:1,"%":"HTMLBaseElement"},
ha:{"^":"j;","%":";Blob"},
bT:{"^":"O;",$isbT:1,"%":"HTMLBodyElement"},
cr:{"^":"O;0n:height=,0m:width=",
cv:function(a,b,c){var z=this.dl(a,b,P.lv(c,null))
return z},
dl:function(a,b,c){return a.getContext(b,c)},
$iscr:1,
"%":"HTMLCanvasElement"},
me:{"^":"j;",
al:function(a){return P.a6(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
mf:{"^":"w;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
hk:{"^":"cs;",$ishk:1,"%":"CSSNumericValue|CSSUnitValue"},
ml:{"^":"hn;0l:length=","%":"CSSPerspective"},
av:{"^":"j;",$isav:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
hl:{"^":"jT;0l:length=",
aT:function(a,b){var z=this.dm(a,this.au(a,b))
return z==null?"":z},
au:function(a,b){var z,y
z=$.eV()
y=z[b]
if(typeof y==="string")return y
y=this.dF(a,b)
z[b]=y
return y},
dF:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hr()+b
if(z in a)return z
return b},
dm:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hm:{"^":"c;",
gn:function(a){return this.aT(a,"height")},
gm:function(a){return this.aT(a,"width")}},
cs:{"^":"j;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
hn:{"^":"j;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
mn:{"^":"cs;0l:length=","%":"CSSTransformValue"},
mo:{"^":"cs;0l:length=","%":"CSSUnparsedValue"},
mq:{"^":"j;0l:length=",
i:function(a,b){return a[b]},
"%":"DataTransferItemList"},
hs:{"^":"O;","%":"HTMLDivElement"},
ct:{"^":"w;",
dI:function(a,b){return a.adoptNode(b)},
dg:function(a,b){return a.createEvent(b)},
aP:function(a,b){return a.getElementsByTagName(b)},
cw:function(a,b){return a.getElementById(b)},
c7:function(a,b){return a.querySelector(b)},
gc2:function(a){return new W.bH(a,"mousedown",!1,[W.Y])},
gc3:function(a){return new W.bH(a,"mousemove",!1,[W.Y])},
gc4:function(a){return new W.bH(a,"mouseup",!1,[W.Y])},
gc5:function(a){return new W.bH(a,H.u(W.dx(a)),!1,[W.aW])},
$isct:1,
"%":"XMLDocument;Document"},
mr:{"^":"j;",
k:function(a){return String(a)},
"%":"DOMException"},
ht:{"^":"j;",
dZ:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
ms:{"^":"jX;",
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
hu:{"^":"j;",
k:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gm(a))+" x "+H.d(this.gn(a))},
D:function(a,b){var z
if(b==null)return!1
if(!H.ao(b,"$isa_",[P.H],"$asa_"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.m(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gw:function(a){return W.eh(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isa_:1,
$asa_:function(){return[P.H]},
"%":";DOMRectReadOnly"},
mt:{"^":"jZ;",
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
mu:{"^":"j;0l:length=","%":"DOMTokenList"},
Q:{"^":"w;0em:tagName=",
gdL:function(a){return new W.k_(a)},
k:function(a){return a.localName},
O:["ap",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dw
if(z==null){z=H.h([],[W.ah])
y=new W.dP(z)
C.a.j(z,W.ef(null))
C.a.j(z,W.eq())
$.dw=y
d=y}else d=z
z=$.dv
if(z==null){z=new W.et(d)
$.dv=z
c=z}else{z.a=d
c=z}}if($.am==null){z=document
y=z.implementation
y=(y&&C.K).dZ(y,"")
$.am=y
$.cu=y.createRange()
y=$.am
y.toString
y=y.createElement("base")
H.i(y,"$isdh")
y.href=z.baseURI
z=$.am.head;(z&&C.L).K(z,y)}z=$.am
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.i(y,"$isbT")}z=$.am
if(!!this.$isbT)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.am.body;(z&&C.p).K(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.v(C.V,a.tagName)){z=$.cu;(z&&C.D).cz(z,x)
z=$.cu
w=(z&&C.D).dX(z,b)}else{x.innerHTML=b
w=$.am.createDocumentFragment()
for(z=J.m(w);y=x.firstChild,y!=null;)z.K(w,y)}z=$.am.body
if(x==null?z!=null:x!==z)J.d9(x)
c.aY(w)
C.j.dI(document,w)
return w},function(a,b,c){return this.O(a,b,c,null)},"dY",null,null,"gev",5,5,null],
cD:function(a,b,c,d){a.textContent=null
this.K(a,this.O(a,b,c,d))},
cC:function(a,b){return this.cD(a,b,null,null)},
a1:function(a,b){return a.getAttribute(b)},
du:function(a,b){return a.removeAttribute(b)},
gc1:function(a){return new W.aX(a,"change",!1,[W.K])},
gc2:function(a){return new W.aX(a,"mousedown",!1,[W.Y])},
gc3:function(a){return new W.aX(a,"mousemove",!1,[W.Y])},
gc4:function(a){return new W.aX(a,"mouseup",!1,[W.Y])},
gc5:function(a){return new W.aX(a,H.u(W.dx(a)),!1,[W.aW])},
$isQ:1,
"%":";Element"},
hC:{"^":"n:36;",
$1:function(a){return!!J.B(H.i(a,"$isw")).$isQ}},
mw:{"^":"O;0n:height=,0m:width=","%":"HTMLEmbedElement"},
K:{"^":"j;",
gca:function(a){return W.cN(a.target)},
dn:function(a,b,c,d){return a.initEvent(b,!0,!0)},
$isK:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
L:{"^":"j;",
dH:function(a,b,c,d){H.k(c,{func:1,args:[W.K]})
if(c!=null)this.dc(a,b,c,!1)},
dc:function(a,b,c,d){return a.addEventListener(b,H.ap(H.k(c,{func:1,args:[W.K]}),1),!1)},
e1:function(a,b){return a.dispatchEvent(b)},
dw:function(a,b,c,d){return a.removeEventListener(b,H.ap(H.k(c,{func:1,args:[W.K]}),1),!1)},
$isL:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBTransaction|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;en|eo|er|es"},
aw:{"^":"ha;",$isaw:1,"%":"File"},
mN:{"^":"k5;",
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
mO:{"^":"L;0l:length=","%":"FileWriter"},
mR:{"^":"O;0l:length=","%":"HTMLFormElement"},
ax:{"^":"j;",$isax:1,"%":"Gamepad"},
hQ:{"^":"O;","%":"HTMLHeadElement"},
mS:{"^":"j;0l:length=","%":"History"},
mT:{"^":"kl;",
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
hR:{"^":"ct;","%":"HTMLDocument"},
hS:{"^":"hT;",
ew:function(a,b,c,d,e,f){return a.open(b,c)},
eg:function(a,b,c){return a.open(b,c)},
cA:function(a,b){return a.send(b)},
"%":"XMLHttpRequest"},
hT:{"^":"L;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
mU:{"^":"O;0n:height=,0m:width=","%":"HTMLIFrameElement"},
mW:{"^":"j;0n:height=,0m:width=","%":"ImageBitmap"},
mX:{"^":"j;0n:height=,0m:width=","%":"ImageData"},
aT:{"^":"O;0n:height=,0m:width=",$isaT:1,"%":"HTMLImageElement"},
dC:{"^":"O;0n:height=,0m:width=",$isdC:1,"%":"HTMLInputElement"},
bb:{"^":"e7;",$isbb:1,"%":"KeyboardEvent"},
io:{"^":"j;",
k:function(a){return String(a)},
$isio:1,
"%":"Location"},
iu:{"^":"O;","%":"HTMLAudioElement;HTMLMediaElement"},
n4:{"^":"j;0l:length=","%":"MediaList"},
n5:{"^":"kt;",
i:function(a,b){return P.a6(a.get(H.u(b)))},
E:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a6(y.value[1]))}},
gG:function(a){var z=H.h([],[P.e])
this.E(a,new W.iw(z))
return z},
gl:function(a){return a.size},
$asW:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"MIDIInputMap"},
iw:{"^":"n:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
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
"%":"MIDIOutputMap"},
ix:{"^":"n:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
az:{"^":"j;",$isaz:1,"%":"MimeType"},
n7:{"^":"kw;",
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
Y:{"^":"e7;",
gc0:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.bg(a.offsetX,a.offsetY,[P.H])
else{z=a.target
if(!J.B(W.cN(z)).$isQ)throw H.b(P.D("offsetX is only supported on elements"))
y=H.i(W.cN(z),"$isQ")
z=a.clientX
x=a.clientY
w=[P.H]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.r(new P.bg(u,v,w),"$isbg",w,"$asbg")
if(typeof z!=="number")return z.a2()
if(typeof x!=="number")return x.a2()
return new P.bg(C.t.cd(z-u),C.t.cd(x-v),w)}},
$isY:1,
"%":";DragEvent|MouseEvent"},
a9:{"^":"ii;a",
gW:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.b(P.bG("No elements"))
if(y>1)throw H.b(P.bG("More than one element"))
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
J.fm(z,H.i(c,"$isw"),C.w.i(z.childNodes,b))},
gu:function(a){var z=this.a.childNodes
return new W.dB(z,z.length,-1,[H.b4(C.w,z,"t",0)])},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){return C.w.i(this.a.childNodes,b)},
$asq:function(){return[W.w]},
$asl:function(){return[W.w]},
$asa:function(){return[W.w]}},
w:{"^":"L;0eh:previousSibling=",
ei:function(a){var z=a.parentNode
if(z!=null)J.bO(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.cJ(a):z},
K:function(a,b){return a.appendChild(b)},
dv:function(a,b){return a.removeChild(b)},
dz:function(a,b,c){return a.replaceChild(b,c)},
$isw:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
iH:{"^":"ky;",
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
ng:{"^":"O;0n:height=,0m:width=","%":"HTMLObjectElement"},
ni:{"^":"L;0n:height=,0m:width=","%":"OffscreenCanvas"},
nj:{"^":"j;0n:height=,0m:width=","%":"PaintSize"},
aC:{"^":"j;0l:length=",$isaC:1,"%":"Plugin"},
nl:{"^":"kC;",
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
nn:{"^":"Y;0n:height=,0m:width=","%":"PointerEvent"},
bE:{"^":"K;",$isbE:1,"%":"ProgressEvent|ResourceProgressEvent"},
j0:{"^":"j;",
dX:function(a,b){return a.createContextualFragment(b)},
cz:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
ns:{"^":"kI;",
i:function(a,b){return P.a6(a.get(H.u(b)))},
E:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a6(y.value[1]))}},
gG:function(a){var z=H.h([],[P.e])
this.E(a,new W.j7(z))
return z},
gl:function(a){return a.size},
$asW:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"RTCStatsReport"},
j7:{"^":"n:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
nt:{"^":"j;0n:height=,0m:width=","%":"Screen"},
dX:{"^":"O;0l:length=",$isdX:1,"%":"HTMLSelectElement"},
aD:{"^":"L;",$isaD:1,"%":"SourceBuffer"},
nv:{"^":"eo;",
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
nw:{"^":"kO;",
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
nz:{"^":"kR;",
i:function(a,b){return this.bn(a,H.u(b))},
E:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=0;!0;++z){y=this.dr(a,z)
if(y==null)return
b.$2(y,this.bn(a,y))}},
gG:function(a){var z=H.h([],[P.e])
this.E(a,new W.jk(z))
return z},
gl:function(a){return a.length},
bn:function(a,b){return a.getItem(b)},
dr:function(a,b){return a.key(b)},
$asW:function(){return[P.e,P.e]},
$isM:1,
$asM:function(){return[P.e,P.e]},
"%":"Storage"},
jk:{"^":"n:19;a",
$2:function(a,b){return C.a.j(this.a,a)}},
aG:{"^":"j;",$isaG:1,"%":"CSSStyleSheet|StyleSheet"},
jr:{"^":"O;",
O:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ap(a,b,c,d)
z=W.hB("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a9(y).J(0,new W.a9(z))
return y},
"%":"HTMLTableElement"},
nC:{"^":"O;",
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
nD:{"^":"O;",
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
e2:{"^":"O;",$ise2:1,"%":"HTMLTemplateElement"},
nE:{"^":"j;0m:width=","%":"TextMetrics"},
aH:{"^":"L;",$isaH:1,"%":"TextTrack"},
aI:{"^":"L;",$isaI:1,"%":"TextTrackCue|VTTCue"},
nF:{"^":"kZ;",
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
nG:{"^":"es;",
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
nH:{"^":"j;0l:length=","%":"TimeRanges"},
aJ:{"^":"j;",$isaJ:1,"%":"Touch"},
nI:{"^":"l3;",
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
nJ:{"^":"j;0l:length=","%":"TrackDefaultList"},
e7:{"^":"K;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
nX:{"^":"j;",
k:function(a){return String(a)},
"%":"URL"},
o_:{"^":"iu;0n:height=,0m:width=","%":"HTMLVideoElement"},
o0:{"^":"L;0l:length=","%":"VideoTrackList"},
o1:{"^":"L;0n:height=,0m:width=","%":"VisualViewport"},
o2:{"^":"j;0m:width=","%":"VTTRegion"},
aW:{"^":"Y;",
ge0:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.D("deltaY is not supported"))},
$isaW:1,
"%":"WheelEvent"},
jG:{"^":"L;",
gdK:function(a){var z,y,x
z=P.H
y=new P.P(0,$.E,[z])
x=H.k(new W.jH(new P.kV(y,[z])),{func:1,ret:-1,args:[P.H]})
this.dj(a)
this.dA(a,W.ez(x,z))
return y},
dA:function(a,b){return a.requestAnimationFrame(H.ap(H.k(b,{func:1,ret:-1,args:[P.H]}),1))},
dj:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ise9:1,
"%":"DOMWindow|Window"},
jH:{"^":"n:20;a",
$1:function(a){var z=this.a
a=H.b2(H.cY(a),{futureOr:1,type:H.o(z,0)})
z=z.a
if(z.a!==0)H.a0(P.bG("Future already completed"))
z.ad(a)}},
eb:{"^":"w;",$iseb:1,"%":"Attr"},
o8:{"^":"l9;",
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
o9:{"^":"hu;",
k:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
D:function(a,b){var z
if(b==null)return!1
if(!H.ao(b,"$isa_",[P.H],"$asa_"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.m(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gw:function(a){return W.eh(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
oa:{"^":"lb;",
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
of:{"^":"ld;",
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
og:{"^":"lf;",
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
oh:{"^":"lh;",
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
jR:{"^":"dJ;di:a<",
E:function(a,b){var z,y,x,w,v,u
H.k(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=this.gG(this),y=z.length,x=this.a,w=J.m(x),v=0;v<z.length;z.length===y||(0,H.F)(z),++v){u=z[v]
b.$2(u,w.a1(x,u))}},
gG:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.h([],[P.e])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.i(z[w],"$iseb")
if(v.namespaceURI==null)C.a.j(y,v.name)}return y},
$asW:function(){return[P.e,P.e]},
$asM:function(){return[P.e,P.e]}},
k_:{"^":"jR;a",
i:function(a,b){return J.cm(this.a,H.u(b))},
gl:function(a){return this.gG(this).length}},
bH:{"^":"jl;a,b,c,$ti"},
aX:{"^":"bH;a,b,c,$ti"},
k1:{"^":"jm;a,b,c,d,e,$ti",
sds:function(a){this.d=H.k(a,{func:1,args:[W.K]})},
dQ:function(a){var z,y,x
z=this.b
if(z==null)return
y=this.d
x=y!=null
if(x){H.k(y,{func:1,args:[W.K]})
if(x)J.fl(z,this.c,y,!1)}this.b=null
this.sds(null)
return},
p:{
aa:function(a,b,c,d,e){var z=W.ez(new W.k2(c),W.K)
if(z!=null&&!0)J.fn(a,b,z,!1)
return new W.k1(0,a,b,z,!1,[e])}}},
k2:{"^":"n:21;a",
$1:function(a){return this.a.$1(H.i(a,"$isK"))}},
bI:{"^":"c;a",
d7:function(a){var z,y
z=$.d0()
if(z.a===0){for(y=0;y<262;++y)z.h(0,C.U[y],W.lH())
for(y=0;y<12;++y)z.h(0,C.v[y],W.lI())}},
Z:function(a){return $.f8().v(0,W.ba(a))},
T:function(a,b,c){var z,y,x
z=W.ba(a)
y=$.d0()
x=y.i(0,H.d(z)+"::"+b)
if(x==null)x=y.i(0,"*::"+b)
if(x==null)return!1
return H.c7(x.$4(a,b,c,this))},
$isah:1,
p:{
ef:function(a){var z,y
z=document.createElement("a")
y=new W.kJ(z,window.location)
y=new W.bI(y)
y.d7(a)
return y},
od:[function(a,b,c,d){H.i(a,"$isQ")
H.u(b)
H.u(c)
H.i(d,"$isbI")
return!0},"$4","lH",16,0,13],
oe:[function(a,b,c,d){var z,y,x
H.i(a,"$isQ")
H.u(b)
H.u(c)
z=H.i(d,"$isbI").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","lI",16,0,13]}},
t:{"^":"c;$ti",
gu:function(a){return new W.dB(a,this.gl(a),-1,[H.b4(this,a,"t",0)])}},
dP:{"^":"c;a",
Z:function(a){return C.a.bx(this.a,new W.iJ(a))},
T:function(a,b,c){return C.a.bx(this.a,new W.iI(a,b,c))},
$isah:1},
iJ:{"^":"n:10;a",
$1:function(a){return H.i(a,"$isah").Z(this.a)}},
iI:{"^":"n:10;a,b,c",
$1:function(a){return H.i(a,"$isah").T(this.a,this.b,this.c)}},
kK:{"^":"c;",
d8:function(a,b,c,d){var z,y,x
this.a.J(0,c)
z=b.aO(0,new W.kL())
y=b.aO(0,new W.kM())
this.b.J(0,z)
x=this.c
x.J(0,C.W)
x.J(0,y)},
Z:function(a){return this.a.v(0,W.ba(a))},
T:["cM",function(a,b,c){var z,y
z=W.ba(a)
y=this.c
if(y.v(0,H.d(z)+"::"+b))return this.d.dJ(c)
else if(y.v(0,"*::"+b))return this.d.dJ(c)
else{y=this.b
if(y.v(0,H.d(z)+"::"+b))return!0
else if(y.v(0,"*::"+b))return!0
else if(y.v(0,H.d(z)+"::*"))return!0
else if(y.v(0,"*::*"))return!0}return!1}],
$isah:1},
kL:{"^":"n:5;",
$1:function(a){return!C.a.v(C.v,H.u(a))}},
kM:{"^":"n:5;",
$1:function(a){return C.a.v(C.v,H.u(a))}},
kW:{"^":"kK;e,a,b,c,d",
T:function(a,b,c){if(this.cM(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cm(a,"template")==="")return this.e.v(0,b)
return!1},
p:{
eq:function(){var z,y,x,w,v
z=P.e
y=P.cD(C.u,z)
x=H.o(C.u,0)
w=H.k(new W.kX(),{func:1,ret:z,args:[x]})
v=H.h(["TEMPLATE"],[z])
y=new W.kW(y,P.a7(null,null,null,z),P.a7(null,null,null,z),P.a7(null,null,null,z),null)
y.d8(null,new H.is(C.u,w,[x,z]),v,null)
return y}}},
kX:{"^":"n:22;",
$1:function(a){return"TEMPLATE::"+H.d(H.u(a))}},
kU:{"^":"c;",
Z:function(a){var z=J.B(a)
if(!!z.$isdW)return!1
z=!!z.$isJ
if(z&&W.ba(a)==="foreignObject")return!1
if(z)return!0
return!1},
T:function(a,b,c){if(b==="is"||C.h.cG(b,"on"))return!1
return this.Z(a)},
$isah:1},
dB:{"^":"c;a,b,c,0d,$ti",
sbl:function(a){this.d=H.y(a,H.o(this,0))},
q:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbl(J.bs(this.a,z))
this.c=z
return!0}this.sbl(null)
this.c=y
return!1},
gA:function(a){return this.d},
$isay:1},
jU:{"^":"c;a",$isL:1,$ise9:1,p:{
jV:function(a){if(a===window)return H.i(a,"$ise9")
else return new W.jU(a)}}},
ah:{"^":"c;"},
kJ:{"^":"c;a,b",$isnW:1},
et:{"^":"c;a",
aY:function(a){new W.l6(this).$2(a,null)},
a7:function(a,b){if(b==null)J.d9(a)
else J.bO(b,a)},
dD:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fH(a)
x=J.cm(y.gdi(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a3(t)}v="element unprintable"
try{v=J.bv(a)}catch(t){H.a3(t)}try{u=W.ba(a)
this.dC(H.i(a,"$isQ"),b,z,v,u,H.i(y,"$isM"),H.u(x))}catch(t){if(H.a3(t) instanceof P.au)throw t
else{this.a7(a,b)
window
s="Removing corrupted element "+H.d(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dC:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
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
if(!this.a.T(a,J.fW(v),w.a1(z,v))){window
u="Removing disallowed attribute <"+H.d(e)+" "+v+'="'+H.d(w.a1(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.a1(z,v)
w.du(z,v)}}if(!!J.B(a).$ise2)this.aY(a.content)},
$isne:1},
l6:{"^":"n:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dD(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a7(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fJ(z)}catch(w){H.a3(w)
v=H.i(z,"$isw")
if(x){u=v.parentNode
if(u!=null)J.bO(u,v)}else J.bO(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.i(y,"$isw")}}},
jT:{"^":"j+hm;"},
jW:{"^":"j+q;"},
jX:{"^":"jW+t;"},
jY:{"^":"j+q;"},
jZ:{"^":"jY+t;"},
k4:{"^":"j+q;"},
k5:{"^":"k4+t;"},
kk:{"^":"j+q;"},
kl:{"^":"kk+t;"},
kt:{"^":"j+W;"},
ku:{"^":"j+W;"},
kv:{"^":"j+q;"},
kw:{"^":"kv+t;"},
kx:{"^":"j+q;"},
ky:{"^":"kx+t;"},
kB:{"^":"j+q;"},
kC:{"^":"kB+t;"},
kI:{"^":"j+W;"},
en:{"^":"L+q;"},
eo:{"^":"en+t;"},
kN:{"^":"j+q;"},
kO:{"^":"kN+t;"},
kR:{"^":"j+W;"},
kY:{"^":"j+q;"},
kZ:{"^":"kY+t;"},
er:{"^":"L+q;"},
es:{"^":"er+t;"},
l2:{"^":"j+q;"},
l3:{"^":"l2+t;"},
l8:{"^":"j+q;"},
l9:{"^":"l8+t;"},
la:{"^":"j+q;"},
lb:{"^":"la+t;"},
lc:{"^":"j+q;"},
ld:{"^":"lc+t;"},
le:{"^":"j+q;"},
lf:{"^":"le+t;"},
lg:{"^":"j+q;"},
lh:{"^":"lg+t;"}}],["","",,P,{"^":"",
a6:function(a){var z,y,x,w,v
if(a==null)return
z=P.S(P.e,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.F)(y),++w){v=H.u(y[w])
z.h(0,v,a[v])}return z},
lv:function(a,b){var z={}
a.E(0,new P.lw(z))
return z},
lx:function(a){var z,y
z=new P.P(0,$.E,[null])
y=new P.cL(z,[null])
a.then(H.ap(new P.ly(y),1))["catch"](H.ap(new P.lz(y),1))
return z},
dr:function(){var z=$.dq
if(z==null){z=J.cj(window.navigator.userAgent,"Opera",0)
$.dq=z}return z},
hr:function(){var z,y
z=$.dm
if(z!=null)return z
y=$.dn
if(y==null){y=J.cj(window.navigator.userAgent,"Firefox",0)
$.dn=y}if(y)z="-moz-"
else{y=$.dp
if(y==null){y=!P.dr()&&J.cj(window.navigator.userAgent,"Trident/",0)
$.dp=y}if(y)z="-ms-"
else z=P.dr()?"-o-":"-webkit-"}$.dm=z
return z},
jI:{"^":"c;",
bX:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}C.a.j(z,a)
C.a.j(this.b,null)
return y},
aN:function(a){var z,y,x,w,v,u,t,s,r,q
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){y=a.getTime()
if(Math.abs(y)<=864e13)x=!1
else x=!0
if(x)H.a0(P.co("DateTime is outside valid range: "+y))
return new P.b8(y,!0)}if(a instanceof RegExp)throw H.b(P.cK("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.lx(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.bX(a)
x=this.b
if(v>=x.length)return H.f(x,v)
u=x[v]
z.a=u
if(u!=null)return u
u=P.ih()
z.a=u
C.a.h(x,v,u)
this.e9(a,new P.jK(z,this))
return z.a}if(a instanceof Array){t=a
v=this.bX(t)
x=this.b
if(v>=x.length)return H.f(x,v)
u=x[v]
if(u!=null)return u
s=J.b3(t)
r=s.gl(t)
u=this.c?new Array(r):t
C.a.h(x,v,u)
for(x=J.c9(u),q=0;q<r;++q)x.h(u,q,this.aN(s.i(t,q)))
return u}return a}},
jK:{"^":"n:24;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.aN(b)
J.fj(z,a,y)
return y}},
lw:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
jJ:{"^":"jI;a,b,c",
e9:function(a,b){var z,y,x,w
H.k(b,{func:1,args:[,,]})
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.F)(z),++x){w=z[x]
b.$2(w,a[w])}}},
ly:{"^":"n:12;a",
$1:function(a){return this.a.aG(0,a)}},
lz:{"^":"n:12;a",
$1:function(a){return this.a.dT(a)}}}],["","",,P,{"^":"",iL:{"^":"j6;",$isiL:1,"%":"IDBOpenDBRequest|IDBVersionChangeRequest"},j6:{"^":"L;","%":";IDBRequest"},nZ:{"^":"K;0ca:target=","%":"IDBVersionChangeEvent"}}],["","",,P,{"^":"",
m0:function(a){return Math.sqrt(a)},
eg:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
bg:{"^":"c;a0:a>,U:b>,$ti",
k:function(a){return"Point("+H.d(this.a)+", "+H.d(this.b)+")"},
D:function(a,b){if(b==null)return!1
return H.ao(b,"$isbg",[P.H],null)&&this.a==J.bS(b)&&this.b==b.gU(b)},
gw:function(a){var z,y,x
z=J.at(this.a)
y=J.at(this.b)
y=P.eg(P.eg(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
kD:{"^":"c;"},
a_:{"^":"kD;$ti"}}],["","",,P,{"^":"",h6:{"^":"j;",$ish6:1,"%":"SVGAnimatedLength"},mx:{"^":"J;0n:height=,0m:width=","%":"SVGFEBlendElement"},my:{"^":"J;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},mz:{"^":"J;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},mA:{"^":"J;0n:height=,0m:width=","%":"SVGFECompositeElement"},mB:{"^":"J;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},mC:{"^":"J;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},mD:{"^":"J;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},mE:{"^":"J;0n:height=,0m:width=","%":"SVGFEFloodElement"},mF:{"^":"J;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},mG:{"^":"J;0n:height=,0m:width=","%":"SVGFEImageElement"},mH:{"^":"J;0n:height=,0m:width=","%":"SVGFEMergeElement"},mI:{"^":"J;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},mJ:{"^":"J;0n:height=,0m:width=","%":"SVGFEOffsetElement"},mK:{"^":"J;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},mL:{"^":"J;0n:height=,0m:width=","%":"SVGFETileElement"},mM:{"^":"J;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},mP:{"^":"J;0n:height=,0m:width=","%":"SVGFilterElement"},mQ:{"^":"bz;0n:height=,0m:width=","%":"SVGForeignObjectElement"},hO:{"^":"bz;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bz:{"^":"J;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},mY:{"^":"bz;0n:height=,0m:width=","%":"SVGImageElement"},bc:{"^":"j;",$isbc:1,"%":"SVGLength"},n2:{"^":"kn;",
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
"%":"SVGLengthList"},n3:{"^":"J;0n:height=,0m:width=","%":"SVGMaskElement"},bf:{"^":"j;",$isbf:1,"%":"SVGNumber"},nf:{"^":"kA;",
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
"%":"SVGNumberList"},nk:{"^":"J;0n:height=,0m:width=","%":"SVGPatternElement"},nm:{"^":"j;0l:length=","%":"SVGPointList"},no:{"^":"j;0n:height=,0m:width=","%":"SVGRect"},np:{"^":"hO;0n:height=,0m:width=","%":"SVGRectElement"},dW:{"^":"J;",$isdW:1,"%":"SVGScriptElement"},nA:{"^":"kT;",
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
C.a.j(z,W.ef(null))
C.a.j(z,W.eq())
C.a.j(z,new W.kU())
c=new W.et(new W.dP(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).dY(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a9(w)
u=z.gW(z)
for(z=J.m(v);x=u.firstChild,x!=null;)z.K(v,x)
return v},
gc1:function(a){return new W.aX(a,"change",!1,[W.K])},
$isJ:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},nB:{"^":"bz;0n:height=,0m:width=","%":"SVGSVGElement"},bl:{"^":"j;",$isbl:1,"%":"SVGTransform"},nK:{"^":"l5;",
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
"%":"SVGTransformList"},nY:{"^":"bz;0n:height=,0m:width=","%":"SVGUseElement"},km:{"^":"j+q;"},kn:{"^":"km+t;"},kz:{"^":"j+q;"},kA:{"^":"kz+t;"},kS:{"^":"j+q;"},kT:{"^":"kS+t;"},l4:{"^":"j+q;"},l5:{"^":"l4+t;"}}],["","",,P,{"^":"",af:{"^":"c;",$isl:1,
$asl:function(){return[P.ar]},
$isa:1,
$asa:function(){return[P.ar]},
$isjw:1}}],["","",,P,{"^":"",ma:{"^":"j;0l:length=","%":"AudioBuffer"},mb:{"^":"jS;",
i:function(a,b){return P.a6(a.get(H.u(b)))},
E:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a6(y.value[1]))}},
gG:function(a){var z=H.h([],[P.e])
this.E(a,new P.h8(z))
return z},
gl:function(a){return a.size},
$asW:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"AudioParamMap"},h8:{"^":"n:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},mc:{"^":"L;0l:length=","%":"AudioTrackList"},h9:{"^":"L;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},nh:{"^":"h9;0l:length=","%":"OfflineAudioContext"},jS:{"^":"j+W;"}}],["","",,P,{"^":"",hb:{"^":"j;",$ishb:1,"%":"WebGLBuffer"},hJ:{"^":"j;",$ishJ:1,"%":"WebGLFramebuffer"},iZ:{"^":"j;",$isiZ:1,"%":"WebGLProgram"},nq:{"^":"j;",
bw:function(a,b){return a.activeTexture(b)},
by:function(a,b,c){return a.attachShader(b,c)},
bz:function(a,b,c){return a.bindBuffer(b,c)},
bB:function(a,b,c){return a.bindFramebuffer(b,c)},
bC:function(a,b,c){return a.bindTexture(b,c)},
bD:function(a,b){return a.blendEquation(b)},
bE:function(a,b,c){return a.blendFunc(b,c)},
bF:function(a,b,c,d){return a.bufferData(b,c,d)},
bG:function(a,b){return a.clear(b)},
bH:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bJ:function(a,b){return a.compileShader(b)},
bK:function(a){return a.createBuffer()},
bL:function(a){return a.createProgram()},
bM:function(a,b){return a.createShader(b)},
bN:function(a){return a.createTexture()},
bP:function(a,b){return a.depthMask(b)},
bQ:function(a,b){return a.disable(b)},
bR:function(a,b,c,d){return a.drawArrays(b,c,d)},
bS:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bT:function(a,b){return a.enable(b)},
bU:function(a,b){return a.enableVertexAttribArray(b)},
al:function(a){return P.a6(a.getContextAttributes())},
aQ:function(a){return a.getError()},
aR:function(a,b){return a.getProgramInfoLog(b)},
aS:function(a,b,c){return a.getProgramParameter(b,c)},
aU:function(a,b){return a.getShaderInfoLog(b)},
aV:function(a,b,c){return a.getShaderParameter(b,c)},
aW:function(a,b,c){return a.getUniformLocation(b,c)},
bY:function(a,b){return a.linkProgram(b)},
c6:function(a,b,c){return a.pixelStorei(b,c)},
b_:function(a,b,c){return a.shaderSource(b,c)},
b0:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aL:function(a,b,c,d,e,f,g,h,i,j){var z
if(!!J.B(g).$isaT)z=!0
else z=!1
if(z){this.aF(a,b,c,d,e,f,g)
return}throw H.b(P.co("Incorrect number or type of arguments"))},
cb:function(a,b,c,d,e,f,g){return this.aL(a,b,c,d,e,f,g,null,null,null)},
aF:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cc:function(a,b,c,d){return a.texParameteri(b,c,d)},
ce:function(a,b,c){return a.uniform1f(b,c)},
cf:function(a,b,c){return a.uniform1fv(b,c)},
cg:function(a,b,c){return a.uniform1i(b,c)},
ci:function(a,b,c){return a.uniform1iv(b,c)},
cj:function(a,b,c){return a.uniform2fv(b,c)},
ck:function(a,b,c){return a.uniform3fv(b,c)},
cl:function(a,b,c){return a.uniform4fv(b,c)},
cm:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cn:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
co:function(a,b){return a.useProgram(b)},
cq:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cs:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},nr:{"^":"j;",
dM:function(a,b){return a.beginTransformFeedback(b)},
dP:function(a,b){return a.bindVertexArray(b)},
e_:function(a){return a.createVertexArray()},
e2:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
e3:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
e5:function(a){return a.endTransformFeedback()},
ep:function(a,b,c,d){this.dG(a,b,H.r(c,"$isa",[P.e],"$asa"),d)
return},
dG:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
er:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bw:function(a,b){return a.activeTexture(b)},
by:function(a,b,c){return a.attachShader(b,c)},
bz:function(a,b,c){return a.bindBuffer(b,c)},
bB:function(a,b,c){return a.bindFramebuffer(b,c)},
bC:function(a,b,c){return a.bindTexture(b,c)},
bD:function(a,b){return a.blendEquation(b)},
bE:function(a,b,c){return a.blendFunc(b,c)},
bF:function(a,b,c,d){return a.bufferData(b,c,d)},
bG:function(a,b){return a.clear(b)},
bH:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bJ:function(a,b){return a.compileShader(b)},
bK:function(a){return a.createBuffer()},
bL:function(a){return a.createProgram()},
bM:function(a,b){return a.createShader(b)},
bN:function(a){return a.createTexture()},
bP:function(a,b){return a.depthMask(b)},
bQ:function(a,b){return a.disable(b)},
bR:function(a,b,c,d){return a.drawArrays(b,c,d)},
bS:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bT:function(a,b){return a.enable(b)},
bU:function(a,b){return a.enableVertexAttribArray(b)},
al:function(a){return P.a6(a.getContextAttributes())},
aQ:function(a){return a.getError()},
aR:function(a,b){return a.getProgramInfoLog(b)},
aS:function(a,b,c){return a.getProgramParameter(b,c)},
aU:function(a,b){return a.getShaderInfoLog(b)},
aV:function(a,b,c){return a.getShaderParameter(b,c)},
aW:function(a,b,c){return a.getUniformLocation(b,c)},
bY:function(a,b){return a.linkProgram(b)},
c6:function(a,b,c){return a.pixelStorei(b,c)},
b_:function(a,b,c){return a.shaderSource(b,c)},
b0:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aL:function(a,b,c,d,e,f,g,h,i,j){var z
if(!!J.B(g).$isaT)z=!0
else z=!1
if(z){this.aF(a,b,c,d,e,f,g)
return}throw H.b(P.co("Incorrect number or type of arguments"))},
cb:function(a,b,c,d,e,f,g){return this.aL(a,b,c,d,e,f,g,null,null,null)},
aF:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cc:function(a,b,c,d){return a.texParameteri(b,c,d)},
ce:function(a,b,c){return a.uniform1f(b,c)},
cf:function(a,b,c){return a.uniform1fv(b,c)},
cg:function(a,b,c){return a.uniform1i(b,c)},
ci:function(a,b,c){return a.uniform1iv(b,c)},
cj:function(a,b,c){return a.uniform2fv(b,c)},
ck:function(a,b,c){return a.uniform3fv(b,c)},
cl:function(a,b,c){return a.uniform4fv(b,c)},
cm:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cn:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
co:function(a,b){return a.useProgram(b)},
cq:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cs:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},jc:{"^":"j;",$isjc:1,"%":"WebGLShader"},js:{"^":"j;",$isjs:1,"%":"WebGLTexture"},jx:{"^":"j;",$isjx:1,"%":"WebGLUniformLocation"},jE:{"^":"j;",$isjE:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",nx:{"^":"kQ;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return P.a6(this.dq(a,b))},
h:function(a,b,c){H.v(b)
H.i(c,"$isM")
throw H.b(P.D("Cannot assign element of immutable List."))},
t:function(a,b){return this.i(a,b)},
dq:function(a,b){return a.item(b)},
$asq:function(){return[[P.M,,,]]},
$isl:1,
$asl:function(){return[[P.M,,,]]},
$isa:1,
$asa:function(){return[[P.M,,,]]},
$ast:function(){return[[P.M,,,]]},
"%":"SQLResultSetRowList"},kP:{"^":"j+q;"},kQ:{"^":"kP+t;"}}],["","",,G,{"^":"",
jL:function(a){var z,y,x,w
z=H.h(a.split("\n"),[P.e])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.f(z,y)
C.a.h(z,y,w+H.d(z[y]))}return C.a.a9(z,"\n")},
ec:function(a,b,c){var z,y,x,w
z=J.m(a)
y=z.bM(a,b)
z.b_(a,y,c)
z.bJ(a,y)
x=H.c7(z.aV(a,y,35713))
if(x!=null&&!x){w=z.aU(a,y)
P.al("E:Compilation failed:")
P.al("E:"+G.jL(c))
P.al("E:Failure:")
P.al(C.h.F("E:",w))
throw H.b(w)}return y},
bx:function(a,b){var z,y,x
H.r(a,"$isa",[T.p],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.b.h(b,z,J.bS(a[y]))
if(y>=a.length)return H.f(a,y)
C.b.h(b,z+1,J.cl(a[y]))
z+=2
if(y>=a.length)return H.f(a,y)
x=J.d7(a[y])
if(z>=b.length)return H.f(b,z)
b[z]=x}return b},
hF:function(a,b){var z,y
H.r(a,"$isa",[T.aj],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.b.h(b,z,J.bS(a[y]))
if(y>=a.length)return H.f(a,y)
C.b.h(b,z+1,J.cl(a[y]))}return b},
hG:function(a,b){var z,y,x,w,v
H.r(a,"$isa",[T.aV],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.b.h(b,z,J.bS(a[y]))
if(y>=a.length)return H.f(a,y)
C.b.h(b,z+1,J.cl(a[y]))
x=z+2
if(y>=a.length)return H.f(a,y)
w=J.d7(a[y])
v=b.length
if(x>=v)return H.f(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.f(a,y)
w=J.fM(a[y])
if(z>=v)return H.f(b,z)
b[z]=w}return b},
hE:function(a,b){var z,y
H.r(a,"$isa",[[P.a,P.C]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.n.h(b,z,J.bs(a[y],0))
if(y>=a.length)return H.f(a,y)
C.n.h(b,z+1,J.bs(a[y],1))
if(y>=a.length)return H.f(a,y)
C.n.h(b,z+2,J.bs(a[y],2))
if(y>=a.length)return H.f(a,y)
C.n.h(b,z+3,J.bs(a[y],3))}return b},
ki:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.ag(z,[H.o(z,0)]),y=y.gu(y),x=b.x,w=[[P.a,P.C]],v=[P.ar],u=[T.aV],t=[T.p],s=[T.aj];y.q();){r=y.d
if(!x.ai(0,r)){r="Dropping unnecessary attribute: "+H.d(r)
if($.eG>0)H.aQ("I: "+r)
continue}q=z.i(0,r)
switch($.ac().i(0,r).a){case"vec2":b.a3(r,G.hF(H.bN(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.a3(r,G.bx(H.bN(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.a3(r,G.hG(H.bN(q,"$isa",u,"$asa"),null),4)
break
case"float":b.a3(r,new Float32Array(H.c4(H.bN(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.a3(r,G.hE(H.bN(q,"$isa",w,"$asa"),null),4)
break}}},
aU:{"^":"c;"},
aK:{"^":"aU;d,a,b,c",
as:function(){return this.d},
k:function(a){var z,y,x,w
z=H.h(["{"+new H.e6(H.lE(this)).k(0)+"}["+H.d(this.a)+"]"],[P.e])
for(y=this.d,x=new H.ag(y,[H.o(y,0)]),x=x.gu(x);x.q();){w=x.d
C.a.j(z,H.d(w)+": "+H.d(y.i(0,w)))}return C.a.a9(z,"\n")}},
hc:{"^":"dY;"},
he:{"^":"c;0a,b",
bV:function(a,b,c){J.fE(this.a,b)
if(c>0)J.h2(this.a,b,c)},
cr:function(a,b,c,d,e,f,g,h){J.ci(this.a,34962,b)
J.h3(this.a,c,d,e,!1,g,h)}},
hI:{"^":"c;a,b,c,d,e"},
dz:{"^":"c;a,b,c"},
dA:{"^":"c;a,b,c,d"},
hN:{"^":"c;a,b,c,d,e",
b5:function(a){switch($.ac().i(0,a).a){case"vec2":this.e.h(0,a,H.h([],[T.aj]))
break
case"vec3":this.e.h(0,a,H.h([],[T.p]))
break
case"vec4":this.e.h(0,a,H.h([],[T.aV]))
break
case"float":this.e.h(0,a,H.h([],[P.ar]))
break
case"uvec4":this.e.h(0,a,H.h([],[[P.a,P.C]]))
break}},
cR:function(a){var z,y,x,w,v,u
H.r(a,"$isa",[T.p],"$asa")
z=this.d
y=z.length
C.a.j(this.b,new G.dz(y,y+1,y+2))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.F)(a),++w){v=a[w]
u=new T.p(new Float32Array(3))
u.C(v)
C.a.j(z,u)}},
cO:function(a,b){var z,y,x,w,v,u,t
z=[T.aj]
H.r(b,"$isa",z,"$asa")
y=H.r(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.F)(b),++w){v=b[w]
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.j(y,new T.aj(u))}},
cP:function(a,b){var z,y,x,w,v,u
z=[T.p]
H.r(b,"$isa",z,"$asa")
y=H.r(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.F)(b),++w){v=b[w]
u=new T.p(new Float32Array(3))
u.C(v)
x.j(y,u)}},
cS:function(a){var z,y,x,w,v,u
H.r(a,"$isa",[T.p],"$asa")
z=this.d
y=z.length
C.a.j(this.c,new G.dA(y,y+1,y+2,y+3))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.F)(a),++w){v=a[w]
u=new T.p(new Float32Array(3))
u.C(v)
C.a.j(z,u)}},
cX:function(){var z,y,x,w,v,u,t,s,r
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
bd:{"^":"aU;"},
dS:{"^":"bd;x,y,z,Q,d,a,b,c",
ar:function(a,b){var z,y,x,w
z=this.x.a
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
w=this.y.a
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
z=this.z.a
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
k:function(a){return"PL: p:"+H.d(this.x)+"  r:"+this.Q}},
ds:{"^":"bd;x,y,z,Q,ch,cx,d,a,b,c",
ar:function(a,b){var z,y,x,w
z=b+4
y=this.x.a
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
z=this.y.a
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
y=this.z.a
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
k:function(a){return"DL: p:"+H.d(this.x)}},
dZ:{"^":"bd;x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,d,a,b,c",
ar:function(a,b){var z,y,x,w
z=this.x.a
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
w=this.y.a
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
z=this.z.a
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
w=this.Q.a
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
z=Math.cos(H.eD(this.cx))
if(w>=x)return H.f(a,w)
a[w]=z
z=b+15
if(z>=x)return H.f(a,z)
a[z]=this.cy},
k:function(a){return"SL: p:"+H.d(this.x)+"  d:"+H.d(this.y)+"  r:"+this.ch+"  a:"+H.d(this.cx)}},
hU:{"^":"aK;x,y,z,d,a,b,c",
as:function(){var z,y,x
z=this.y
y=this.z
G.hV(z,y,this.x)
x=this.d
x.h(0,"uLightDescs",z)
x.h(0,"uLightTypes",y)
return x},
p:{
hV:function(a,b,c){var z,y,x,w,v
H.r(c,"$isa",[G.bd],"$asa")
C.b.bW(a,0,a.length,0)
C.b.bW(b,0,4,0)
for(z=c.length,y=0,x=0;x<c.length;c.length===z||(0,H.F)(c),++x){w=c[x]
if(w.c){w.ar(a,y*16)
v=w.d
if(y>=4)return H.f(b,y)
b[y]=v;++y}}}}},
e4:{"^":"c;a,b,c"},
e3:{"^":"c;a,b,c"},
it:{"^":"aK;d,a,b,c",p:{
dL:function(a){var z=P.S(P.e,P.c)
z.h(0,"cDepthTest",!0)
z.h(0,"cDepthWrite",!0)
z.h(0,"cBlendEquation",$.eP())
z.h(0,"cStencilFunc",$.eY())
return new G.it(z,a,!1,!0)}}},
dM:{"^":"aU;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
saz:function(a){this.cx=H.r(a,"$isa",[P.C],"$asa")},
b4:function(a,b,c){var z,y
C.h.a6(a,0)
H.i(b,"$isaf")
this.cy.h(0,a,b)
z=this.d
y=this.r.i(0,a)
J.ci(z.a,34962,y)
J.d5(z.a,34962,b,35048)},
ac:function(a){this.ch=a
this.b4("aPosition",a,3)},
cY:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a3:function(a,b,c){var z,y,x,w,v
z=J.d2(a,0)===105
if(z&&this.z===0)this.z=C.f.cN(b.length,c)
y=this.r
x=this.d
y.h(0,a,J.bQ(x.a))
this.b4(a,b,c)
w=$.ac().i(0,a)
if(w==null)throw H.b("Unknown canonical "+a)
v=this.x.i(0,a)
J.bP(x.a,this.e)
x.bV(0,v,z?1:0)
x.cr(0,y.i(0,a),v,w.b6(),5126,!1,0,0)},
b3:function(a){var z,y,x,w
z=this.r
y=this.d
z.h(0,"aPosition",J.bQ(y.a))
this.ac(a)
x=$.ac().i(0,"aPosition")
if(x==null)throw H.b("Unknown canonical aPosition")
w=this.x.i(0,"aPosition")
J.bP(y.a,this.e)
y.bV(0,w,0)
y.cr(0,z.i(0,"aPosition"),w,x.b6(),5126,!1,0,0)},
a4:function(a){var z,y,x
H.r(a,"$isa",[P.C],"$asa")
z=this.ch.length
if(z<768){this.saz(new Uint8Array(H.c4(a)))
this.Q=5121}else if(z<196608){this.saz(new Uint16Array(H.c4(a)))
this.Q=5123}else{this.saz(new Uint32Array(H.c4(a)))
this.Q=5125}z=this.d
J.bP(z.a,this.e)
y=this.y
x=this.cx
J.ci(z.a,34963,y)
J.d5(z.a,34963,x,35048)},
cQ:function(a){H.r(a,"$isa",[P.C],"$asa")
this.y=J.bQ(this.d.a)
this.a4(a)},
k:function(a){var z,y,x,w
z=this.cx
y=H.h(["Faces:"+(z==null?0:z.length)],[P.e])
for(z=this.cy,x=new H.ag(z,[H.o(z,0)]),x=x.gu(x);x.q();){w=x.d
C.a.j(y,H.d(w)+":"+z.i(0,w).length)}return"MESH["+H.d(this.a)+"] "+C.a.a9(y,"  ")},
p:{
iv:function(a,b,c,d){var z=P.e
return new G.dM(b,J.d6(b.a),c,P.S(z,P.c),d,0,-1,P.S(z,P.af),"meshdata:"+a,!1,!0)}}},
iN:{"^":"aK;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cT:function(a,b){var z
if(typeof a!=="number")return a.es()
if(typeof b!=="number")return H.aO(b)
z=a/b
if(this.z===z)return
this.z=z
this.b9()},
b9:function(){var z,y,x,w,v,u
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
u.C(z)
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
q=x?t.gct(t):1
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
c.C(this.db)
c.c_(0,u)
v.h(0,"uPerspectiveViewMatrix",c)
return v}},
mv:{"^":"c;"},
j5:{"^":"aU;d,e,f,r,x,y,z,Q,0ch,a,b,c",
d0:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
x.h(0,t,J.d8(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
x.h(0,t,J.d8(w.a,v,t))}},
d3:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.h([],[P.e])
x=H.h([],[P.e])
for(y=new H.ag(y,[H.o(y,0)]),y=y.gu(y);y.q();){w=y.d
if(!z.ai(0,w))C.a.j(x,w)}for(z=this.x,z=P.kp(z,z.r,H.o(z,0)),y=this.Q;z.q();){w=z.d
if(!y.v(0,w))C.a.j(x,w)}return x},
d6:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.r(b,"$isM",[P.e,P.c],"$asM")
z=Date.now()
for(y=new H.ag(b,[H.o(b,0)]),y=y.gu(y),x=this.d,w=this.y,v=this.z,u=0;y.q();){t=y.d
switch(J.d2(t,0)){case 117:if(w.ai(0,t)){s=b.i(0,t)
if(v.ai(0,t))H.aQ("E:"+(t+" : group ["+H.d(a)+"] overwrites ["+t+"]"))
v.h(0,t,a)
r=$.ac().i(0,t)
if(r==null)H.a0("unknown "+t)
q=w.i(0,t)
t=r.a
switch(t){case"int":if(r.c===0){H.v(s)
J.cn(x.a,q,s)}else if(!!J.B(s).$ishZ)J.h0(x.a,q,s)
break
case"float":if(r.c===0){H.eE(s)
J.fZ(x.a,q,s)}else if(!!J.B(s).$isaf)J.h_(x.a,q,s)
break
case"mat4":if(r.c===0){t=H.ab(s,"$isX").a
J.df(x.a,q,!1,t)}else if(!!J.B(s).$isaf)J.df(x.a,q,!1,s)
break
case"mat3":if(r.c===0){t=H.ab(s,"$isbe").a
J.de(x.a,q,!1,t)}else if(!!J.B(s).$isaf)J.de(x.a,q,!1,s)
break
case"vec4":t=r.c
p=x.a
if(t===0)J.dd(p,q,H.ab(s,"$isaV").a)
else J.dd(p,q,H.i(s,"$isaf"))
break
case"vec3":t=r.c
p=x.a
if(t===0)J.dc(p,q,H.ab(s,"$isp").a)
else J.dc(p,q,H.i(s,"$isaf"))
break
case"vec2":t=r.c
p=x.a
if(t===0)J.db(p,q,H.ab(s,"$isaj").a)
else J.db(p,q,H.i(s,"$isaf"))
break
case"sampler2D":case"sampler2DShadow":t=this.ch
if(typeof t!=="number")return H.aO(t)
J.d3(x.a,33984+t)
t=H.ab(s,"$iscJ").b
J.bt(x.a,3553,t)
t=this.ch
J.cn(x.a,q,t)
t=this.ch
if(typeof t!=="number")return t.F()
this.ch=t+1
break
case"samplerCube":t=this.ch
if(typeof t!=="number")return H.aO(t)
J.d3(x.a,33984+t)
t=H.ab(s,"$iscJ").b
J.bt(x.a,34067,t)
t=this.ch
J.cn(x.a,q,t)
t=this.ch
if(typeof t!=="number")return t.F()
this.ch=t+1
break
default:H.aQ("Error: unknow uniform type: "+t)}++u}break
case 99:s=b.i(0,t)
switch(t){case"cDepthTest":t=J.V(s,!0)
p=x.a
if(t)J.bu(p,2929)
else J.ck(p,2929)
break
case"cStencilFunc":H.ab(s,"$ise4")
t=s.a
p=x.a
if(t===1281)J.ck(p,2960)
else{J.bu(p,2960)
p=s.b
o=s.c
J.fU(x.a,t,p,o)}break
case"cDepthWrite":H.c7(s)
J.fx(x.a,s)
break
case"cBlendEquation":H.ab(s,"$ise3")
t=s.a
p=x.a
if(t===1281)J.ck(p,3042)
else{J.bu(p,3042)
p=s.b
o=s.c
J.fr(x.a,p,o)
J.fq(x.a,t)}break}++u
break}}n=P.dt(0,0,0,Date.now()-new P.b8(z,!1).a,0,0)
""+u
n.k(0)},
cW:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.r(b,"$isa",[G.aK],"$asa")
Date.now()
z=this.d
J.h1(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.bo()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.F)(b),++x){w=b[x]
this.d6(w.a,w.as())}y=this.Q
y.a8(0)
for(v=a.cy,v=new H.ag(v,[H.o(v,0)]),v=v.gu(v);v.q();)y.j(0,v.d)
u=this.d3()
if(u.length!==0)P.al("E:"+(H.d(this.a)+" "+a.f+": uninitialized inputs: "+H.d(u)))
y=a.d
v=a.e
J.bP(y.a,v)
t=this.e.f.length>0
v=a.f
y=a.cY()
s=a.Q
r=a.z
if(t)J.fo(z.a,v)
if(s!==-1){q=z.a
if(r>1)J.fC(q,v,y,s,0,r)
else J.fB(q,v,y,s,0)}else{s=z.a
if(r>1)J.fA(s,v,0,y,r)
else J.fz(s,v,0,y)}if(t)J.fF(z.a)},
p:{
cG:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.e
y=P.a7(null,null,null,z)
x=c.b
w=d.b
v=H.r(c.f,"$isa",[z],"$asa")
u=J.fv(b.a)
t=G.ec(b.a,35633,x)
J.d4(b.a,u,t)
s=G.ec(b.a,35632,w)
J.d4(b.a,u,s)
if(v.length>0)J.fX(b.a,u,v,35980)
J.fR(b.a,u)
if(!H.c7(J.fQ(b.a,u,35714)))H.a0(J.fP(b.a,u))
z=new G.j5(b,c,d,u,P.cD(c.c,z),P.S(z,P.c),P.S(z,z),y,a,!1,!0)
z.d0(a,b,c,d)
return z}}},
G:{"^":"c;a,b,c",
b6:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
jd:{"^":"c;a,0b,c,d,e,f,r,x",
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
b8:function(a,b){var z=[P.e]
this.b=this.ba(!0,H.r(a,"$isa",z,"$asa"),H.r(b,"$isa",z,"$asa"))},
at:function(a){return this.b8(a,null)},
b7:function(a,b){var z=[P.e]
this.b=this.ba(!1,H.r(a,"$isa",z,"$asa"),H.r(b,"$isa",z,"$asa"))},
d1:function(a){return this.b7(a,null)},
ba:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
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
return new G.jd(a,H.h([],y),H.h([],y),H.h([],y),H.h([],y),0,P.S(z,P.C))}}},
dY:{"^":"aU;",
aZ:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c},
ee:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
t.C(v)
t.b1(0,a)
t.B(0)
s=b.bO(t)
s.B(0)
r=t.bO(s)
r.B(0)
q=s.aH(v)
p=r.aH(v)
v=t.aH(v)
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
bZ:function(a){return this.ee(a,null)}},
jt:{"^":"c;a,b,c,d,e,f,r"},
cJ:{"^":"c;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
hW:{"^":"cJ;f,a,b,c,d,e"}}],["","",,Y,{"^":"",
hX:function(a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
z=[T.p]
y=P.e
x=new G.hN(!1,H.h([],[G.dz]),H.h([],[G.dA]),H.h([],z),P.S(y,[P.a,,]))
x.b5("aTexUV")
x.b5("aNormal")
w=P.S(y,P.C)
v=a2.split("\n")
u=H.h([],z)
t=H.h([],z)
y=[T.aj]
s=H.h([],y)
r=Date.now()
q=P.dU("\\s+",!0,!1)
p=P.dU("\\s\\s*\\$",!0,!1)
for(o=v.length,n=0;n<v.length;v.length===o||(0,H.F)(v),++n){m=v[n]
m.toString
l=H.m2(m,q," ")
k=H.m4(l,p,"",0)
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
for(c=1;l=j.length,c<l;++c){b=J.fT(j[c],"/")
for(;b.length<3;)C.a.j(b,"")
l=P.cW(b[0],null,null)
if(typeof l!=="number")return l.a2()
a=l-1
if(1>=b.length)return H.f(b,1)
if(J.V(b[1],""))a0=-1
else{if(1>=b.length)return H.f(b,1)
l=P.cW(b[1],null,null)
if(typeof l!=="number")return l.a2()
a0=l-1}if(2>=b.length)return H.f(b,2)
if(J.V(b[2],""))a1=-1
else{if(2>=b.length)return H.f(b,2)
l=P.cW(b[2],null,null)
if(typeof l!=="number")return l.a2()
a1=l-1}l=u.length
if(a<l){if(a<0)return H.f(u,a)
C.a.j(f,u[a])}else C.a.j(f,new T.p(new Float32Array(3)))
if(a0!==-1&&a0<s.length){if(a0<0||a0>=s.length)return H.f(s,a0)
C.a.j(d,s[a0])}else{H.aQ("problem uv "+c+" "+a0)
C.a.j(d,new T.aj(new Float32Array(2)))}if(a1!==-1&&a1<t.length){if(a1<0||a1>=t.length)return H.f(t,a1)
C.a.j(e,t[a1])}else{H.aQ("problem normals "+c+" "+a1)
C.a.j(e,new T.p(new Float32Array(3)))}}if(l===4)x.cR(f)
else x.cS(f)
x.cP("aNormal",e)
x.cO("aTexUV",d)}}P.al("loaded ("+P.dt(0,0,0,Date.now()-new P.b8(r,!1).a,0,0).k(0)+") "+x.k(0))
return x}}],["","",,R,{"^":"",
kr:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.i(W.k0("span",null),"$isQ")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.y).au(y,"float")
y.setProperty(x,"left","")
x=C.y.au(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.q.K(z,v)}return z},
jB:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=d.a
if(z[1]===0)return
y=b*0.5
x=c*C.r.e7(y/c)
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
r.b1(0,v)
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
C.a.j(u,new T.p(o))}}a.ac(G.bx(u,null))
z=new Array(u.length)
z.fixed$length=Array
n=H.h(z,[P.C])
for(q=0;q<u.length;++q)C.a.h(n,q,q)
a.a4(n)},
hP:function(a){var z,y,x
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
jD:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
c.toString
z=new T.p(new Float32Array(3))
z.C(c)
z.B(0)
y=b.F(0,z.an(d))
x=H.h([b,y],[T.p])
w=R.hP(c)
w.B(0)
w.am(0,Math.tan(H.eD(e))*d)
for(v=0;v<8;++v){z=new Float32Array(3)
u=new T.p(z)
u.C(w)
t=new Float32Array(4)
new T.j_(t).cB(c,v*2*3.141592653589793/8)
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
C.a.j(f,v)}a.ac(G.bx(x,null))
a.a4(f)},
jC:function(a,b,c){var z,y,x,w,v,u,t
z=H.h([],[T.p])
y=H.h([],[P.C])
for(x=$.eX(),w=0;w<12;++w){v=x[w]
C.a.j(y,z.length)
C.a.j(y,12)
u=new T.p(new Float32Array(3))
u.C(v)
u.am(0,c)
b.toString
t=new T.p(new Float32Array(3))
t.C(b)
t.j(0,u)
C.a.j(z,t)}C.a.j(z,b)
a.ac(G.bx(z,null))
a.a4(y)},
ji:{"^":"c;",
d2:function(a,b,c){var z,y
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
jj:{"^":"ji;e,f,a,b,c,d",
d5:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.r.eo(y,2)+" fps"
C.q.cC(this.c,b)
x=C.f.Y(30*C.r.dR(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.i(z.firstChild,"$isQ")
v=w.style
u=""+x+"px"
v.height=u
C.q.K(z,w)},
d4:function(a){return this.d5(a,"")}}}],["","",,A,{"^":"",
eF:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.r(e,"$isa",[G.aK],"$asa")
if(!b.c)return
z=b.dx
z.C(c)
y=b.d
z.c_(0,y)
x=b.ch
if(x!=null&&b.cx!=null){H.d(b)
w=C.a.ged(e)
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
v.dW(new T.be(u))
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
a.cW(b.cx,e,d)
if(0>=e.length)return H.f(e,-1)
e.pop()}for(y=b.cy,x=y.length,r=0;r<y.length;y.length===x||(0,H.F)(y),++r)A.eF(a,y[r],z,d,e)},
aB:{"^":"dY;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
k:function(a){return"NODE["+H.d(this.a)+"]"},
p:{
dO:function(a,b){var z,y,x,w,v,u,t,s
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
c0:{"^":"aU;d,e,f,a,b,c"},
j4:{"^":"aU;d,e,f,r,x,y,z,Q,a,b,c",
cV:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.fp(v.a,36160,z)
J.h4(v.a,this.x,this.y,x,w)
if(y!==0)J.fs(v.a,y)
for(z=this.f,y=z.length,x=P.e,w=P.c,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
if(!t.c)continue
v=t.d
if(!v.c)continue
s=t.e
C.a.j(s,new G.aK(P.S(x,w),"transforms",!1,!0))
r=new T.X(new Float32Array(16))
r.L()
for(q=t.f,p=q.length,o=0;o<q.length;q.length===p||(0,H.F)(q),++o)A.eF(v,q[o],r,a,s)
if(0>=s.length)return H.f(s,-1)
s.pop()}},
cU:function(){return this.cV(null)},
p:{
dV:function(a,b,c){var z=new A.j4(c,b,H.h([],[A.c0]),17664,0,0,0,0,a,!1,!0)
z.d=new G.hI(b,null,null,null,null)
return z}}}}],["","",,V,{}],["","",,B,{}],["","",,D,{"^":"",
il:function(a){var z,y,x,w
z=P.e
y=new P.P(0,$.E,[z])
x=new XMLHttpRequest()
C.z.eg(x,"GET",a)
w=W.bE
W.aa(x,"loadend",H.k(new D.im(new P.cL(y,[z]),x),{func:1,ret:-1,args:[w]}),!1,w)
C.z.cA(x,"")
return y},
ij:function(a){var z,y,x,w
z=W.aT
y=new P.P(0,$.E,[z])
x=document.createElement("img")
w=new W.aX(x,"load",!1,[W.K])
w.ge6(w).a_(new D.ik(new P.cL(y,[z]),x),-1)
x.src=a
return y},
im:{"^":"n:25;a,b",
$1:function(a){H.i(a,"$isbE")
this.a.aG(0,H.b2(W.lj(this.b.response),{futureOr:1,type:P.e}))}},
ik:{"^":"n:11;a,b",
$1:function(a){H.i(a,"$isK")
return this.a.aG(0,this.b)}},
i9:{"^":"c;a,b,c",
cZ:function(a){var z,y
a=document
z=W.bb
y={func:1,ret:-1,args:[z]}
W.aa(a,"keydown",H.k(new D.ib(this),y),!1,z)
W.aa(a,"keyup",H.k(new D.ic(this),y),!1,z)},
p:{
ia:function(a){var z=P.C
z=new D.i9(P.a7(null,null,null,z),P.a7(null,null,null,z),P.a7(null,null,null,z))
z.cZ(a)
return z}}},
ib:{"^":"n:14;a",
$1:function(a){var z
H.i(a,"$isbb")
z=this.a
z.a.j(0,a.which)
z.b.j(0,a.which)}},
ic:{"^":"n:14;a",
$1:function(a){var z
H.i(a,"$isbb")
z=this.a
z.a.c8(0,a.which)
z.c.j(0,a.which)}},
iy:{"^":"c;a,b,c,d,e,f,r,x",
d_:function(a){var z,y,x
if(a==null)a=document
z=J.m(a)
y=z.gc3(a)
x=H.o(y,0)
W.aa(y.a,y.b,H.k(new D.iA(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gc2(a)
y=H.o(x,0)
W.aa(x.a,x.b,H.k(new D.iB(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gc4(a)
x=H.o(y,0)
W.aa(y.a,y.b,H.k(new D.iC(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gc5(a)
x=H.o(z,0)
W.aa(z.a,z.b,H.k(new D.iD(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
iz:function(a){var z=P.C
z=new D.iy(P.a7(null,null,null,z),P.a7(null,null,null,z),P.a7(null,null,null,z),0,0,0,0,0)
z.d_(a)
return z}}},
iA:{"^":"n:4;a",
$1:function(a){var z,y
H.i(a,"$isY")
a.preventDefault()
z=this.a
y=J.m(a)
z.r=H.v(y.gc0(a).a)
z.x=H.v(y.gc0(a).b)
z.d=a.movementX
z.e=a.movementY}},
iB:{"^":"n:4;a",
$1:function(a){var z
H.i(a,"$isY")
a.preventDefault()
P.al("BUTTON "+H.d(a.button))
z=this.a
z.a.j(0,a.button)
z.b.j(0,a.button)}},
iC:{"^":"n:4;a",
$1:function(a){var z
H.i(a,"$isY")
a.preventDefault()
z=this.a
z.a.c8(0,a.button)
z.c.j(0,a.button)}},
iD:{"^":"n:27;a",
$1:function(a){H.i(a,"$isaW")
a.preventDefault()
this.a.f=H.v(C.ad.ge0(a))}},
iM:{"^":"hc;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bL:function(a){var z,y
z=C.b.e8(H.r(a,"$isl",[P.c],"$asl"),0,new A.lG(),P.C)
if(typeof z!=="number")return H.aO(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
lG:{"^":"n:28;",
$2:function(a,b){var z,y
H.v(a)
z=J.at(b)
if(typeof a!=="number")return a.F()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",be:{"^":"c;a",
C:function(a){var z,y
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
gw:function(a){return A.bL(this.a)},
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
dW:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if(m===0){this.C(a)
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
C:function(a){var z,y
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
gw:function(a){return A.bL(this.a)},
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
c_:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
bY:function(){return new T.X(new Float32Array(16))}}},j_:{"^":"c;a",
cB:function(a,b){var z,y,x,w,v
z=Math.sqrt(a.gaJ())
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
gw:function(a){return A.bL(this.a)},
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
C:function(a){var z,y
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
gw:function(a){return A.bL(this.a)},
F:function(a,b){var z=new T.p(new Float32Array(3))
z.C(this)
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
gaJ:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
B:function(a){var z,y,x
z=Math.sqrt(this.gaJ())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aH:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bO:function(a){var z,y,x,w,v,u,t,s
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
b1:function(a,b){var z,y
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
z.C(this)
z.am(0,a)
return z},
ga0:function(a){return this.a[0]},
gU:function(a){return this.a[1]},
gak:function(a){return this.a[2]},
p:{
N:function(a,b,c){var z=new T.p(new Float32Array(3))
z.H(a,b,c)
return z}}},aV:{"^":"c;a",
k:function(a){var z=this.a
return H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+","+H.d(z[3])},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aV){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gw:function(a){return A.bL(this.a)},
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
gct:function(a){return this.a[3]}}}],["","",,T,{"^":"",
id:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
H.r(b,"$isa",[G.aK],"$asa")
z=G.cG("Fixed",a,$.fg(),$.ff())
y=[A.aB]
x=H.h([],y)
w=new A.c0(z,b,x,"Fixed",!1,!0)
v=G.dL("light")
v.d.h(0,"uColor",$.eU())
for(x=$.cg(),u=new H.ag(x,[H.o(x,0)]),u=u.gu(u),t=[P.C],s=z.d,z=z.e,r=P.e,q=P.c,p=P.af;u.q();){o=u.d
n=$.ch()
m=x.i(0,o)
l=z.x
k=new G.dM(s,J.d6(s.a),1,P.S(r,q),l,0,-1,P.S(r,p),"meshdata:dirLightViz",!1,!0)
k.b3(new Float32Array(3))
l=H.r(H.h([0,0],t),"$isa",t,"$asa")
k.y=J.bQ(s.a)
k.a4(l)
l=J.B(m)
if(!!l.$isds){l=m.Q
R.jB(k,l,l/4,m.x)}else if(!!l.$isdZ)R.jD(k,m.x,m.y,m.ch,m.cx)
else if(!!l.$isdS)R.jC(k,m.x,m.Q)
l=H.h([],y)
j=new Float32Array(9)
i=new T.X(new Float32Array(16))
i.L()
h=new T.X(new Float32Array(16))
h.L()
g=new Float32Array(3)
f=new Float32Array(3)
e=new Float32Array(3)
n.h(0,o,new A.aB(v,k,l,new T.be(j),i,h,new T.p(g),new T.p(f),new T.p(e),new T.p(new Float32Array(3)),o,!1,!0))}for(z=$.ch(),z=z.gcp(z),y=z.a,z=new H.cE(y.gu(y),z.b,[H.o(z,0),H.o(z,1)]),y=w.f;z.q();)C.a.j(y,z.a)
return w},
hv:function(a,b){var z,y,x,w
z=G.dL("matDragon")
z.d.h(0,"uShininess",10)
y=A.dO("dragon",null)
x=D.ij("../asset/dragon/dragon.png").a_(new T.hw(z,a),null)
w=$.d1()
C.a.j(w,x)
C.a.j(w,D.il("../asset/dragon/dragon.obj").a_(new T.hx(b,z,y),null))
return y},
eK:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z={}
y=document
x=C.j.cw(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.jj(0,0,x,w,y.createElement("div"),R.kr("blue","gray",90,30))
u.d2(x,"blue","gray")
t=H.i(C.j.c7(y,"#webgl-canvas"),"$iscr")
s=new G.he(t)
x=P.e
v=P.c
r=(t&&C.J).cv(t,"webgl2",P.cC(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],x,v))
s.a=r
if(r==null)H.a0(P.dy('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
q="ChronosGL Config: "+H.d(J.fN(r))
if($.eG>0)P.al("I: "+q)
J.ft(r,0,0,0,1)
J.bu(r,2929)
J.bu(r,2884)
r=new Float32Array(3)
q=D.ia(null)
p=D.iz(t)
o=new T.X(new Float32Array(16))
o.L()
n=new Float32Array(3)
m=new Float32Array(3)
l=new Float32Array(3)
k=new D.iM(50,10,0,0,new T.p(r),-0.02,q,p,o,new T.p(n),new T.p(m),new T.p(l),new T.p(new Float32Array(3)),"camera:orbit",!1,!0)
k.aZ(0,0,56)
r=new T.X(new Float32Array(16))
r.L()
q=new T.X(new Float32Array(16))
q.L()
j=new G.iN(k,50,1,0.1,1e4,r,q,new T.X(new Float32Array(16)),P.S(x,v),"perspective",!1,!0)
j.b9()
r=H.h([],[G.bd])
q=new Float32Array(64)
i=new G.hU(r,q,new Float32Array(4),P.S(x,v),"illumination",!1,!0)
for(x=$.cg(),x=x.gcp(x),q=x.a,x=new H.cE(q.gu(q),x.b,[H.o(x,0),H.o(x,1)]);x.q();)C.a.j(r,x.a)
x=G.cG("BlinnPhong",s,$.fc(),$.fa())
r=[G.aK]
q=H.h([j,i],r)
p=[A.aB]
o=H.h([],p)
n=G.cG("Gourad",s,$.fd(),$.fb())
m=H.h([j,i],r)
p=H.h([],p)
h=T.id(s,H.h([j],r))
g=A.dV("BlinnPhong",s,null)
r=g.f
C.a.j(r,new A.c0(x,q,o,"BlinnPhong",!1,!0))
C.a.j(r,h)
f=A.dV("Gourad",s,null)
r=f.f
C.a.j(r,new A.c0(n,m,p,"Gourad",!1,!0))
C.a.j(r,h)
e=T.hv(s,x)
C.a.j(p,e)
C.a.j(o,e)
d=H.ab(C.j.c7(y,"#phase"),"$isdX")
d.selectedIndex=0
for(x=C.j.aP(y,"input"),r=x.length,c=0;c<x.length;x.length===r||(0,H.F)(x),++c){q=J.fI(H.i(x[c],"$isQ"))
p=H.o(q,0)
W.aa(q.a,q.b,H.k(new T.lU(),{func:1,ret:-1,args:[p]}),!1,p)}for(x=C.j.aP(y,"input"),r=x.length,c=0;c<x.length;x.length===r||(0,H.F)(x),++c){q=H.i(x[c],"$isQ")
H.aQ("initialize inputs "+H.d(q.id))
b=C.j.dg(y,"Event")
J.fk(b,"change",!0,!0)
J.fy(q,b)}y=new T.lW(t,j,f,g)
y.$1(null)
x=W.K
W.aa(window,"resize",H.k(y,{func:1,ret:-1,args:[x]}),!1,x)
z.a=0
P.hK($.d1(),null,!1,v).a_(new T.lV(new T.lT(z,k,d,g,f,u)),null)},
hw:{"^":"n:29;a,b",
$1:function(a){var z,y
H.i(a,"$isaT")
z=this.b
y=J.fw(z.a)
J.bt(z.a,3553,y)
J.fS(z.a,37440,1)
J.bt(z.a,3553,y)
J.fV(z.a,3553,0,6408,6408,5121,a)
J.da(z.a,3553,10240,9729)
J.da(z.a,3553,10241,9729)
J.fO(z.a)
J.bt(z.a,3553,null)
this.a.d.h(0,"uTexture",new G.hW(a,"../asset/dragon/dragon.png",y,3553,z,new G.jt(!1,!1,!1,!0,1,9729,9729)))}},
hx:{"^":"n:30;a,b,c",
$1:function(a){var z,y,x,w,v,u,t,s,r,q
z=Y.hX(H.u(a))
y=this.a
x=G.iv("../asset/dragon/dragon.obj",y.d,4,y.e.x)
x.b3(G.bx(z.d,null))
x.cQ(z.cX())
G.ki(z,x)
y=H.h([],[A.aB])
w=new Float32Array(9)
v=new T.X(new Float32Array(16))
v.L()
u=new T.X(new Float32Array(16))
u.L()
t=new Float32Array(3)
s=new Float32Array(3)
r=new Float32Array(3)
q=A.dO("wrapper",new A.aB(this.b,x,y,new T.be(w),v,u,new T.p(t),new T.p(s),new T.p(r),new T.p(new Float32Array(3)),x.a,!1,!0))
y=new T.p(new Float32Array(3))
y.H(100,0,0)
q.bZ(y)
C.a.j(this.c.cy,q)}},
lU:{"^":"n:31;",
$1:function(a){var z=H.ab(J.fL(a),"$isdC")
P.al(H.d(z.id)+" toggle "+H.d(z.checked))
$.cg().i(0,z.id).c=z.checked
$.ch().i(0,z.id).c=z.checked}},
lW:{"^":"n:11;a,b,c,d",
$1:function(a){var z,y,x
z=this.a
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.al("size change "+H.d(y)+" "+H.d(x))
this.b.cT(y,x)
z=this.c
z.z=y
z.Q=x
z=this.d
z.z=y
z.Q=x}},
lT:{"^":"n:32;a,b,c,d,e,f",
$1:function(a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
H.cY(a7)
if(typeof a7!=="number")return a7.a2()
z=this.a
z.a=a7+0
y=this.b
y.go+=0.001
x=y.r1
w=x.a
if(w.v(0,0)||w.v(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.aX()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.aX()
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
if(typeof v!=="number")return v.aX()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.t.dS(y.id,-1.4707963267948965,1.4707963267948965)
y.id=v
u=y.fy
t=y.go
s=u*Math.cos(v)
y.aZ(s*Math.cos(t),u*Math.sin(v),s*Math.sin(t))
t=y.k2
v=y.d.a
u=t.a
v[12]=v[12]+u[0]
v[13]=v[13]+u[1]
v[14]=v[14]+u[2]
y.bZ(t)
t=y.f
u=t.a
u[0]=v[2]
u[1]=v[6]
u[2]=v[10]
y=-y.k1
r=Math.sqrt(t.gaJ())
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
x.b.a8(0);(this.c.selectedIndex===0?this.d:this.e).cU()
C.ae.gdK(window).a_(this,-1)
this.f.d4(z.a)}},
lV:{"^":"n:33;a",
$1:function(a){H.bq(a)
this.a.$1(0)}}},1]]
setupProgram(dart,0,0)
J.B=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dE.prototype
return J.dD.prototype}if(typeof a=="string")return J.bC.prototype
if(a==null)return J.i3.prototype
if(typeof a=="boolean")return J.i2.prototype
if(a.constructor==Array)return J.bA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bD.prototype
return a}if(a instanceof P.c)return a
return J.cc(a)}
J.b3=function(a){if(typeof a=="string")return J.bC.prototype
if(a==null)return a
if(a.constructor==Array)return J.bA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bD.prototype
return a}if(a instanceof P.c)return a
return J.cc(a)}
J.c9=function(a){if(a==null)return a
if(a.constructor==Array)return J.bA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bD.prototype
return a}if(a instanceof P.c)return a
return J.cc(a)}
J.lC=function(a){if(typeof a=="number")return J.bB.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.bm.prototype
return a}
J.lD=function(a){if(typeof a=="number")return J.bB.prototype
if(typeof a=="string")return J.bC.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.bm.prototype
return a}
J.ca=function(a){if(typeof a=="string")return J.bC.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.bm.prototype
return a}
J.m=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bD.prototype
return a}if(a instanceof P.c)return a
return J.cc(a)}
J.cb=function(a){if(a==null)return a
if(!(a instanceof P.c))return J.bm.prototype
return a}
J.V=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.B(a).D(a,b)}
J.ad=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.lC(a).V(a,b)}
J.bs=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lQ(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b3(a).i(a,b)}
J.fj=function(a,b,c){return J.c9(a).h(a,b,c)}
J.d2=function(a,b){return J.ca(a).a6(a,b)}
J.fk=function(a,b,c,d){return J.m(a).dn(a,b,c,d)}
J.bO=function(a,b){return J.m(a).dv(a,b)}
J.fl=function(a,b,c,d){return J.m(a).dw(a,b,c,d)}
J.fm=function(a,b,c){return J.m(a).dz(a,b,c)}
J.d3=function(a,b){return J.m(a).bw(a,b)}
J.fn=function(a,b,c,d){return J.m(a).dH(a,b,c,d)}
J.d4=function(a,b,c){return J.m(a).by(a,b,c)}
J.fo=function(a,b){return J.m(a).dM(a,b)}
J.ci=function(a,b,c){return J.m(a).bz(a,b,c)}
J.fp=function(a,b,c){return J.m(a).bB(a,b,c)}
J.bt=function(a,b,c){return J.m(a).bC(a,b,c)}
J.bP=function(a,b){return J.m(a).dP(a,b)}
J.fq=function(a,b){return J.m(a).bD(a,b)}
J.fr=function(a,b,c){return J.m(a).bE(a,b,c)}
J.d5=function(a,b,c,d){return J.m(a).bF(a,b,c,d)}
J.fs=function(a,b){return J.m(a).bG(a,b)}
J.ft=function(a,b,c,d,e){return J.m(a).bH(a,b,c,d,e)}
J.fu=function(a,b){return J.lD(a).N(a,b)}
J.cj=function(a,b,c){return J.b3(a).dV(a,b,c)}
J.bQ=function(a){return J.m(a).bK(a)}
J.fv=function(a){return J.m(a).bL(a)}
J.fw=function(a){return J.m(a).bN(a)}
J.d6=function(a){return J.m(a).e_(a)}
J.fx=function(a,b){return J.m(a).bP(a,b)}
J.ck=function(a,b){return J.m(a).bQ(a,b)}
J.fy=function(a,b){return J.m(a).e1(a,b)}
J.fz=function(a,b,c,d){return J.m(a).bR(a,b,c,d)}
J.fA=function(a,b,c,d,e){return J.m(a).e2(a,b,c,d,e)}
J.fB=function(a,b,c,d,e){return J.m(a).bS(a,b,c,d,e)}
J.fC=function(a,b,c,d,e,f){return J.m(a).e3(a,b,c,d,e,f)}
J.fD=function(a,b){return J.c9(a).t(a,b)}
J.bu=function(a,b){return J.m(a).bT(a,b)}
J.fE=function(a,b){return J.m(a).bU(a,b)}
J.fF=function(a){return J.m(a).e5(a)}
J.fG=function(a,b){return J.m(a).E(a,b)}
J.fH=function(a){return J.m(a).gdL(a)}
J.at=function(a){return J.B(a).gw(a)}
J.bR=function(a){return J.c9(a).gu(a)}
J.b6=function(a){return J.b3(a).gl(a)}
J.fI=function(a){return J.m(a).gc1(a)}
J.fJ=function(a){return J.m(a).geh(a)}
J.fK=function(a){return J.m(a).gem(a)}
J.fL=function(a){return J.m(a).gca(a)}
J.fM=function(a){return J.cb(a).gct(a)}
J.bS=function(a){return J.cb(a).ga0(a)}
J.cl=function(a){return J.cb(a).gU(a)}
J.d7=function(a){return J.cb(a).gak(a)}
J.cm=function(a,b){return J.m(a).a1(a,b)}
J.fN=function(a){return J.m(a).al(a)}
J.fO=function(a){return J.m(a).aQ(a)}
J.fP=function(a,b){return J.m(a).aR(a,b)}
J.fQ=function(a,b,c){return J.m(a).aS(a,b,c)}
J.d8=function(a,b,c){return J.m(a).aW(a,b,c)}
J.fR=function(a,b){return J.m(a).bY(a,b)}
J.fS=function(a,b,c){return J.m(a).c6(a,b,c)}
J.d9=function(a){return J.m(a).ei(a)}
J.fT=function(a,b){return J.ca(a).cF(a,b)}
J.fU=function(a,b,c,d){return J.m(a).b0(a,b,c,d)}
J.fV=function(a,b,c,d,e,f,g){return J.m(a).cb(a,b,c,d,e,f,g)}
J.da=function(a,b,c,d){return J.m(a).cc(a,b,c,d)}
J.fW=function(a){return J.ca(a).en(a)}
J.bv=function(a){return J.B(a).k(a)}
J.fX=function(a,b,c,d){return J.m(a).ep(a,b,c,d)}
J.fY=function(a){return J.ca(a).eq(a)}
J.fZ=function(a,b,c){return J.m(a).ce(a,b,c)}
J.h_=function(a,b,c){return J.m(a).cf(a,b,c)}
J.cn=function(a,b,c){return J.m(a).cg(a,b,c)}
J.h0=function(a,b,c){return J.m(a).ci(a,b,c)}
J.db=function(a,b,c){return J.m(a).cj(a,b,c)}
J.dc=function(a,b,c){return J.m(a).ck(a,b,c)}
J.dd=function(a,b,c){return J.m(a).cl(a,b,c)}
J.de=function(a,b,c,d){return J.m(a).cm(a,b,c,d)}
J.df=function(a,b,c,d){return J.m(a).cn(a,b,c,d)}
J.h1=function(a,b){return J.m(a).co(a,b)}
J.h2=function(a,b,c){return J.m(a).er(a,b,c)}
J.h3=function(a,b,c,d,e,f,g){return J.m(a).cq(a,b,c,d,e,f,g)}
J.h4=function(a,b,c,d,e){return J.m(a).cs(a,b,c,d,e)}
I.aP=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.bT.prototype
C.J=W.cr.prototype
C.y=W.hl.prototype
C.q=W.hs.prototype
C.K=W.ht.prototype
C.L=W.hQ.prototype
C.j=W.hR.prototype
C.z=W.hS.prototype
C.M=J.j.prototype
C.a=J.bA.prototype
C.r=J.dD.prototype
C.f=J.dE.prototype
C.t=J.bB.prototype
C.h=J.bC.prototype
C.T=J.bD.prototype
C.b=H.iE.prototype
C.n=H.iG.prototype
C.w=W.iH.prototype
C.C=J.iO.prototype
C.D=W.j0.prototype
C.I=W.jr.prototype
C.x=J.bm.prototype
C.ad=W.aW.prototype
C.ae=W.jG.prototype
C.e=new P.kE()
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
$.di=null
$.cO=!1
$.eI=null
$.eA=null
$.eN=null
$.c8=null
$.cd=null
$.cV=null
$.b_=null
$.bn=null
$.bo=null
$.cP=!1
$.E=C.e
$.am=null
$.cu=null
$.dw=null
$.dv=null
$.dq=null
$.dp=null
$.dn=null
$.dm=null
$.eG=0
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
I.$lazy(y,x,w)}})(["mp","eW",function(){return H.eH("_$dart_dartClosure")},"n1","cZ",function(){return H.eH("_$dart_js")},"nL","eZ",function(){return H.ai(H.c1({
toString:function(){return"$receiver$"}}))},"nM","f_",function(){return H.ai(H.c1({$method$:null,
toString:function(){return"$receiver$"}}))},"nN","f0",function(){return H.ai(H.c1(null))},"nO","f1",function(){return H.ai(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"nR","f4",function(){return H.ai(H.c1(void 0))},"nS","f5",function(){return H.ai(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"nQ","f3",function(){return H.ai(H.e5(null))},"nP","f2",function(){return H.ai(function(){try{null.$method$}catch(z){return z.message}}())},"nU","f7",function(){return H.ai(H.e5(void 0))},"nT","f6",function(){return H.ai(function(){try{(void 0).$method$}catch(z){return z.message}}())},"o4","d_",function(){return P.jM()},"ok","br",function(){return[]},"mm","eV",function(){return{}},"ob","f8",function(){return P.cD(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)},"oc","d0",function(){return P.S(P.e,P.by)},"ny","eY",function(){return new G.e4(1281,0,4294967295)},"md","eP",function(){return new G.e3(1281,1281,1281)},"oi","ac",function(){return P.cC(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.G,"aColorAlpha",C.a0,"aPosition",C.E,"aTexUV",C.a7,"aNormal",C.aa,"aBinormal",C.a_,"aCenter",C.F,"aPointSize",C.c,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.ac,"aBitangent",C.Y,"iaRotation",C.m,"iaTranslation",C.d,"iaScale",C.c,"iaColor",C.d,"vColor",C.G,"vTexUV",C.l,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.E,"vPositionFromLight",C.Z,"vCenter",C.F,"vDepth",C.a5,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.H,"uConvolutionMatrix",C.H,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.ab,"uTexture",C.i,"uTexture2",C.i,"uTexture3",C.i,"uTexture4",C.i,"uSpecularMap",C.i,"uNormalMap",C.i,"uBumpMap",C.i,"uDepthMap",C.i,"uCubeTexture",C.a9,"uAnimationTable",C.i,"uTime",C.a8,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.d,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a2,"uLightDescs",C.a3,"uLightCount",C.c,"uLightTypes",C.a4,"uBumpScale",C.a6,"uNormalScale",C.a1],P.e,G.G)},"mj","eT",function(){return T.N(1,1,1)},"mg","eQ",function(){return T.N(0,0,0)},"mh","eR",function(){return T.N(0,0,0.5)},"mi","eS",function(){return T.N(0,0.5,0)},"mk","eU",function(){return T.N(1,1,0)},"ov","fd",function(){var z,y
z=G.bk("LightGouradV")
y=[P.e]
z.aq(H.h(["aPosition","aNormal","aTexUV"],y))
z.ab(H.h(["vColor"],y))
z.R(H.h(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"],y))
z.R(H.h(["uLightDescs","uLightTypes","uShininess"],y))
z.R(H.h(["uEyePosition","uTexture"],y))
z.b7(H.h(["void main() {\n    vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n    gl_Position = uPerspectiveViewMatrix * pos;\n    vec3 normal = uNormalMatrix * aNormal;\n\n    ColorComponents acc = CombinedLight(pos.xyz, normal, uEyePosition,\n                  uLightDescs,\n                  uLightTypes,\n                  uShininess);\n\n     vColor = acc.diffuse +\n                 acc.specular +\n                 texture(uTexture, aTexUV).rgb;\n}\n        "],y),H.h(["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    // float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"],y))
return z},"ot","fb",function(){var z,y
z=G.bk("LightGrouradV")
y=[P.e]
z.ab(H.h(["vColor"],y))
z.at(H.h(["oFragColor = vec4(vColor, 1.0 );"],y))
return z},"ou","fc",function(){var z,y
z=G.bk("LightBlinnPhongV")
y=[P.e]
z.aq(H.h(["aPosition","aNormal","aTexUV"],y))
z.ab(H.h(["vPosition","vNormal","vTexUV"],y))
z.R(H.h(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"],y))
z.d1(H.h(["void main() {\n    vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n    gl_Position = uPerspectiveViewMatrix * pos;\n    vPosition = pos.xyz;\n    vTexUV = aTexUV;\n    vNormal = uNormalMatrix * aNormal;\n}\n"],y))
return z},"os","fa",function(){var z,y
z=G.bk("LightBlinnPhongF")
y=[P.e]
z.ab(H.h(["vPosition","vNormal","vTexUV"],y))
z.R(H.h(["uLightDescs","uLightTypes","uShininess"],y))
z.R(H.h(["uEyePosition","uTexture"],y))
z.b8(H.h(["ColorComponents acc = CombinedLight(vPosition,\n                                    vNormal,\n                                    uEyePosition,\n                                    uLightDescs,\n                                    uLightTypes,\n                                    uShininess);\n\noFragColor.rgb = acc.diffuse +\n                    acc.specular +\n                    texture(uTexture, vTexUV).rgb;\noFragColor.a = 1.0;\n"],y),H.h(["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    // float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"],y))
return z},"oy","fg",function(){var z,y
z=G.bk("SolidColor")
y=[P.e]
z.aq(H.h(["aPosition"],y))
z.R(H.h(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.at(H.h(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"],y))
return z},"ox","ff",function(){var z,y
z=G.bk("SolidColorF")
y=[P.e]
z.R(H.h(["uColor"],y))
z.at(H.h(["oFragColor = vec4( uColor, 1.0 );"],y))
return z},"oB","fi",function(){return(1+P.m0(5))/2},"mV","eX",function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.fi()
y=T.N(-1,z,0)
y.B(0)
x=T.N(1,z,0)
x.B(0)
if(typeof z!=="number")return z.eu()
w=T.N(-1,-z,0)
w.B(0)
v=T.N(1,-z,0)
v.B(0)
u=T.N(0,-1,z)
u.B(0)
t=T.N(0,1,z)
t.B(0)
s=T.N(0,-1,-z)
s.B(0)
r=T.N(0,1,-z)
r.B(0)
q=T.N(z,0,-1)
q.B(0)
p=T.N(z,0,1)
p.B(0)
o=T.N(-z,0,-1)
o.B(0)
z=T.N(-z,0,1)
z.B(0)
return H.h([y,x,w,v,u,t,s,r,q,p,o,z],[T.p])},"ow","fe",function(){return T.N(11,20,0)},"on","f9",function(){return T.N(0,-50,0)},"oz","fh",function(){return T.N(-11,-30,0)},"oo","cg",function(){var z,y,x,w,v,u
z=$.f9()
y=$.eQ()
x=$.eT()
w=T.bY()
v=T.bY()
u=$.fe()
return P.cC(["idDirectional",new G.ds(z,y,x,40,w,v,1,"dir",!1,!0),"idPoint",new G.dS(u,$.eR(),x,50,3,"point",!1,!0),"idSpot",new G.dZ(u,$.fh(),$.eS(),x,50,0.4487989505128276,2,1,1,40,T.bY(),T.bY(),2,"spot",!1,!0)],P.e,G.bd)},"op","ch",function(){return P.S(P.e,A.aB)},"oq","d1",function(){return H.h([],[[P.a2,P.c]])}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.z},{func:1,ret:-1},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.z,args:[W.Y]},{func:1,ret:P.U,args:[P.e]},{func:1,ret:P.z,args:[,,]},{func:1,ret:P.e,args:[P.C]},{func:1,args:[,]},{func:1,ret:P.z,args:[,]},{func:1,ret:P.U,args:[W.ah]},{func:1,ret:-1,args:[W.K]},{func:1,ret:-1,args:[,]},{func:1,ret:P.U,args:[W.Q,P.e,P.e,W.bI]},{func:1,ret:P.z,args:[W.bb]},{func:1,args:[P.e]},{func:1,ret:P.z,args:[,P.T]},{func:1,ret:P.z,args:[,],opt:[P.T]},{func:1,ret:[P.P,,],args:[,]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.z,args:[P.H]},{func:1,args:[W.K]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[W.w,W.w]},{func:1,args:[,,]},{func:1,ret:P.z,args:[W.bE]},{func:1,ret:P.z,args:[{func:1,ret:-1}]},{func:1,ret:P.z,args:[W.aW]},{func:1,ret:P.C,args:[P.C,P.c]},{func:1,ret:P.z,args:[W.aT]},{func:1,ret:P.z,args:[P.e]},{func:1,ret:P.z,args:[W.K]},{func:1,ret:-1,args:[P.H]},{func:1,ret:P.z,args:[[P.a,,]]},{func:1,ret:P.C,args:[,,]},{func:1,args:[,P.e]},{func:1,ret:P.U,args:[W.w]}]
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
if(x==y)H.m6(d||a)
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
Isolate.bp=a.bp
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
if(typeof dartMainRunner==="function")dartMainRunner(T.eK,[])
else T.eK([])})})()
//# sourceMappingURL=light2.dart.js.map
