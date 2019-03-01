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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bm=function(){}
var dart=[["","",,H,{"^":"",mz:{"^":"b;a"}}],["","",,J,{"^":"",
cX:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cb:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cW==null){H.lu()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.cK("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.d_()]
if(v!=null)return v
v=H.lz(a)
if(v!=null)return v
if(typeof a=="function")return C.T
y=Object.getPrototypeOf(a)
if(y==null)return C.C
if(y===Object.prototype)return C.C
if(typeof w=="function"){Object.defineProperty(w,$.d_(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
j:{"^":"b;",
E:function(a,b){return a===b},
gv:function(a){return H.bf(a)},
l:["cH",function(a){return"Instance of '"+H.bg(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hQ:{"^":"j;",
l:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isV:1},
hR:{"^":"j;",
E:function(a,b){return null==b},
l:function(a){return"null"},
gv:function(a){return 0},
$isB:1},
cy:{"^":"j;",
gv:function(a){return 0},
l:["cJ",function(a){return String(a)}]},
iv:{"^":"cy;"},
bj:{"^":"cy;"},
bz:{"^":"cy;",
l:function(a){var z=a[$.eS()]
if(z==null)return this.cJ(a)
return"JavaScript function for "+H.e(J.bq(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbu:1},
bw:{"^":"j;$ti",
k:function(a,b){H.z(b,H.o(a,0))
if(!!a.fixed$length)H.a6(P.C("add"))
a.push(b)},
G:function(a,b){var z,y
H.r(b,"$isl",[H.o(a,0)],"$asl")
if(!!a.fixed$length)H.a6(P.C("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.F)(b),++y)a.push(b[y])},
a5:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.e(a[y]))
return z.join(b)},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
ge5:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.c(H.cw())},
bz:function(a,b){var z,y
H.k(b,{func:1,ret:P.V,args:[H.o(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.ay(a))}return!1},
cB:function(a,b){if(!!a.immutable$list)H.a6(P.C("sort"))
H.iV(a,J.l2(),H.o(a,0))},
an:function(a){return this.cB(a,null)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aR(a[z],b))return!0
return!1},
l:function(a){return P.cv(a,"[","]")},
gw:function(a){return new J.dk(a,a.length,0,[H.o(a,0)])},
gv:function(a){return H.bf(a)},
gj:function(a){return a.length},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aN(a,b))
if(b>=a.length||b<0)throw H.c(H.aN(a,b))
return a[b]},
i:function(a,b,c){H.u(b)
H.z(c,H.o(a,0))
if(!!a.immutable$list)H.a6(P.C("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aN(a,b))
if(b>=a.length||b<0)throw H.c(H.aN(a,b))
a[b]=c},
$isx:1,
$asx:I.bm,
$isl:1,
$isa:1,
p:{
hP:function(a,b){return J.cx(H.h(a,[b]))},
cx:function(a){H.X(a)
a.fixed$length=Array
return a},
mx:[function(a,b){return J.fp(H.eK(a,"$isa3"),H.eK(b,"$isa3"))},"$2","l2",8,0,31]}},
my:{"^":"bw;$ti"},
dk:{"^":"b;a,b,c,0d,$ti",
sbc:function(a){this.d=H.z(a,H.o(this,0))},
gB:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.F(z))
x=this.c
if(x>=y){this.sbc(null)
return!1}this.sbc(z[x]);++this.c
return!0},
$isb8:1},
bx:{"^":"j;",
N:function(a,b){var z
H.cY(b)
if(typeof b!=="number")throw H.c(H.b0(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gaj(b)
if(this.gaj(a)===z)return 0
if(this.gaj(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaj:function(a){return a===0?1/a<0:a<0},
cc:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.C(""+a+".toInt()"))},
dI:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.c(P.C(""+a+".ceil()"))},
dJ:function(a,b,c){if(this.N(b,c)>0)throw H.c(H.b0(b))
if(this.N(a,b)<0)return b
if(this.N(a,c)>0)return c
return a},
ei:function(a){return a},
ek:function(a,b){var z
if(b>20)throw H.c(P.bh(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gaj(a))return"-"+z
return z},
l:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
aa:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bv(a,b)},
J:function(a,b){return(a|0)===a?a/b|0:this.bv(a,b)},
bv:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.C("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
bt:function(a,b){var z
if(a>0)z=this.du(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
du:function(a,b){return b>31?0:a>>>b},
U:function(a,b){if(typeof b!=="number")throw H.c(H.b0(b))
return a>b},
$isa3:1,
$asa3:function(){return[P.H]},
$isan:1,
$isH:1},
dJ:{"^":"bx;",$isE:1},
dI:{"^":"bx;"},
by:{"^":"j;",
at:function(a,b){if(b>=a.length)throw H.c(H.aN(a,b))
return a.charCodeAt(b)},
H:function(a,b){H.v(b)
if(typeof b!=="string")throw H.c(P.dj(b,null,null))
return a+b},
cD:function(a,b,c){var z
if(c>a.length)throw H.c(P.bh(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cC:function(a,b){return this.cD(a,b,0)},
cF:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.c0(b,null,null))
if(b>c)throw H.c(P.c0(b,null,null))
if(c>a.length)throw H.c(P.c0(c,null,null))
return a.substring(b,c)},
cE:function(a,b){return this.cF(a,b,null)},
ej:function(a){return a.toLowerCase()},
dM:function(a,b,c){if(c>a.length)throw H.c(P.bh(c,0,a.length,null,null))
return H.lH(a,b,c)},
N:function(a,b){var z
H.v(b)
if(typeof b!=="string")throw H.c(H.b0(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
l:function(a){return a},
gv:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.aN(a,b))
return a[b]},
$isx:1,
$asx:I.bm,
$isa3:1,
$asa3:function(){return[P.d]},
$isit:1,
$isd:1}}],["","",,H,{"^":"",
cw:function(){return new P.cH("No element")},
hO:function(){return new P.cH("Too many elements")},
iV:function(a,b,c){H.r(a,"$isa",[c],"$asa")
H.k(b,{func:1,ret:P.E,args:[c,c]})
H.bC(a,0,J.ao(a)-1,b,c)},
bC:function(a,b,c,d,e){H.r(a,"$isa",[e],"$asa")
H.k(d,{func:1,ret:P.E,args:[e,e]})
if(c-b<=32)H.iU(a,b,c,d,e)
else H.iT(a,b,c,d,e)},
iU:function(a,b,c,d,e){var z,y,x,w,v
H.r(a,"$isa",[e],"$asa")
H.k(d,{func:1,ret:P.E,args:[e,e]})
for(z=b+1,y=J.W(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.ag(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
iT:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.r(a,"$isa",[a2],"$asa")
H.k(a1,{func:1,ret:P.E,args:[a2,a2]})
z=C.b.J(a0-b+1,6)
y=b+z
x=a0-z
w=C.b.J(b+a0,2)
v=w-z
u=w+z
t=J.W(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.ag(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.ag(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.ag(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.ag(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.ag(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.ag(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.ag(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.ag(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.ag(a1.$2(p,o),0)){n=o
o=p
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,a0))
m=b+1
l=a0-1
if(J.aR(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a7()
if(i<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.U()
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
if(typeof e!=="number")return e.a7()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.U()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.U()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a7()
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
H.bC(a,b,m-2,a1,a2)
H.bC(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aR(a1.$2(t.h(a,m),r),0);)++m
for(;J.aR(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a7()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.bC(a,m,l,a1,a2)}else H.bC(a,m,l,a1,a2)},
dA:{"^":"l;"},
bb:{"^":"dA;$ti",
gw:function(a){return new H.dM(this,this.gj(this),0,[H.cV(this,"bb",0)])},
aO:function(a,b){return this.cI(0,H.k(b,{func:1,ret:P.V,args:[H.cV(this,"bb",0)]}))}},
dM:{"^":"b;a,b,c,0d,$ti",
sbd:function(a){this.d=H.z(a,H.o(this,0))},
gB:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.W(z)
x=y.gj(z)
if(this.b!==x)throw H.c(P.ay(z))
w=this.c
if(w>=x){this.sbd(null)
return!1}this.sbd(y.q(z,w));++this.c
return!0},
$isb8:1},
i7:{"^":"bb;a,b,$ti",
gj:function(a){return J.ao(this.a)},
q:function(a,b){return this.b.$1(J.fy(this.a,b))},
$asbb:function(a,b){return[b]},
$asl:function(a,b){return[b]}},
e5:{"^":"l;a,b,$ti",
gw:function(a){return new H.ji(J.bS(this.a),this.b,this.$ti)}},
ji:{"^":"b8;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gB(z)))return!0
return!1},
gB:function(a){var z=this.a
return z.gB(z)}},
bY:{"^":"b;$ti"}}],["","",,H,{"^":"",
aQ:function(a){var z,y
z=H.v(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
lm:function(a){return init.types[H.u(a)]},
lx:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.A(a).$isy},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bq(a)
if(typeof z!=="string")throw H.c(H.b0(a))
return z},
bf:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
bg:function(a){return H.iw(a)+H.c7(H.au(a),0,null)},
iw:function(a){var z,y,x,w,v,u,t,s,r
z=J.A(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.M||!!z.$isbj){u=C.B(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aQ(w.length>1&&C.i.at(w,0)===36?C.i.cE(w,1):w)},
a_:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iD:function(a){return a.b?H.a_(a).getUTCFullYear()+0:H.a_(a).getFullYear()+0},
iB:function(a){return a.b?H.a_(a).getUTCMonth()+1:H.a_(a).getMonth()+1},
ix:function(a){return a.b?H.a_(a).getUTCDate()+0:H.a_(a).getDate()+0},
iy:function(a){return a.b?H.a_(a).getUTCHours()+0:H.a_(a).getHours()+0},
iA:function(a){return a.b?H.a_(a).getUTCMinutes()+0:H.a_(a).getMinutes()+0},
iC:function(a){return a.b?H.a_(a).getUTCSeconds()+0:H.a_(a).getSeconds()+0},
iz:function(a){return a.b?H.a_(a).getUTCMilliseconds()+0:H.a_(a).getMilliseconds()+0},
bn:function(a){throw H.c(H.b0(a))},
f:function(a,b){if(a==null)J.ao(a)
throw H.c(H.aN(a,b))},
aN:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ax(!0,b,"index",null)
z=H.u(J.ao(a))
if(!(b<0)){if(typeof z!=="number")return H.bn(z)
y=b>=z}else y=!0
if(y)return P.I(b,a,"index",null,z)
return P.c0(b,"index",null)},
b0:function(a){return new P.ax(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.c_()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eN})
z.name=""}else z.toString=H.eN
return z},
eN:function(){return J.bq(this.dartException)},
a6:function(a){throw H.c(a)},
F:function(a){throw H.c(P.ay(a))},
a2:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lJ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.bt(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cA(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dR(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.eW()
u=$.eX()
t=$.eY()
s=$.eZ()
r=$.f1()
q=$.f2()
p=$.f0()
$.f_()
o=$.f4()
n=$.f3()
m=v.M(y)
if(m!=null)return z.$1(H.cA(H.v(y),m))
else{m=u.M(y)
if(m!=null){m.method="call"
return z.$1(H.cA(H.v(y),m))}else{m=t.M(y)
if(m==null){m=s.M(y)
if(m==null){m=r.M(y)
if(m==null){m=q.M(y)
if(m==null){m=p.M(y)
if(m==null){m=s.M(y)
if(m==null){m=o.M(y)
if(m==null){m=n.M(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dR(H.v(y),m))}}return z.$1(new H.jf(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dW()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ax(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dW()
return a},
aO:function(a){var z
if(a==null)return new H.em(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.em(a)},
lj:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
lw:function(a,b,c,d,e,f){H.i(a,"$isbu")
switch(H.u(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.dE("Unsupported number of arguments for wrapped closure"))},
at:function(a,b){var z
H.u(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lw)
a.$identity=z
return z},
h7:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.A(d).$isa){z.$reflectionInfo=d
x=H.iI(z).r}else x=d
w=e?Object.create(new H.iX().constructor.prototype):Object.create(new H.cm(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ah
if(typeof u!=="number")return u.H()
$.ah=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.dq(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.lm,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.dn:H.cn
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.c("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dq(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
h4:function(a,b,c,d){var z=H.cn
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dq:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.h6(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.h4(y,!w,z,b)
if(y===0){w=$.ah
if(typeof w!=="number")return w.H()
$.ah=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b5
if(v==null){v=H.bV("self")
$.b5=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ah
if(typeof w!=="number")return w.H()
$.ah=w+1
t+=w
w="return function("+t+"){return this."
v=$.b5
if(v==null){v=H.bV("self")
$.b5=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
h5:function(a,b,c,d){var z,y
z=H.cn
y=H.dn
switch(b?-1:a){case 0:throw H.c(H.iO("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
h6:function(a,b){var z,y,x,w,v,u,t,s
z=$.b5
if(z==null){z=H.bV("self")
$.b5=z}y=$.dm
if(y==null){y=H.bV("receiver")
$.dm=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.h5(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.ah
if(typeof y!=="number")return y.H()
$.ah=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.ah
if(typeof y!=="number")return y.H()
$.ah=y+1
return new Function(z+y+"}")()},
cS:function(a,b,c,d,e,f,g){return H.h7(a,b,H.u(c),d,!!e,!!f,g)},
v:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.ac(a,"String"))},
cT:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ac(a,"double"))},
cY:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ac(a,"num"))},
c9:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.ac(a,"bool"))},
u:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.ac(a,"int"))},
cZ:function(a,b){throw H.c(H.ac(a,H.aQ(H.v(b).substring(3))))},
lE:function(a,b){throw H.c(H.dp(a,H.aQ(H.v(b).substring(3))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.A(a)[b])return a
H.cZ(a,b)},
av:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.A(a)[b]
else z=!0
if(z)return a
H.lE(a,b)},
eK:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.A(a)[b])return a
H.cZ(a,b)},
X:function(a){if(a==null)return a
if(!!J.A(a).$isa)return a
throw H.c(H.ac(a,"List<dynamic>"))},
ly:function(a,b){var z
if(a==null)return a
z=J.A(a)
if(!!z.$isa)return a
if(z[b])return a
H.cZ(a,b)},
cU:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.u(z)]
else return a.$S()}return},
bI:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cU(J.A(a))
if(z==null)return!1
return H.es(z,null,b,null)},
k:function(a,b){var z,y
if(a==null)return a
if($.cO)return a
$.cO=!0
try{if(H.bI(a,b))return a
z=H.bN(b)
y=H.ac(a,z)
throw H.c(y)}finally{$.cO=!1}},
b1:function(a,b){if(a!=null&&!H.cR(a,b))H.a6(H.ac(a,H.bN(b)))
return a},
ew:function(a){var z,y
z=J.A(a)
if(!!z.$isn){y=H.cU(z)
if(y!=null)return H.bN(y)
return"Closure"}return H.bg(a)},
lI:function(a){throw H.c(new P.he(H.v(a)))},
eG:function(a){return init.getIsolateTag(a)},
h:function(a,b){a.$ti=b
return a},
au:function(a){if(a==null)return
return a.$ti},
nZ:function(a,b,c){return H.b3(a["$as"+H.e(c)],H.au(b))},
b2:function(a,b,c,d){var z
H.v(c)
H.u(d)
z=H.b3(a["$as"+H.e(c)],H.au(b))
return z==null?null:z[d]},
cV:function(a,b,c){var z
H.v(b)
H.u(c)
z=H.b3(a["$as"+H.e(b)],H.au(a))
return z==null?null:z[c]},
o:function(a,b){var z
H.u(b)
z=H.au(a)
return z==null?null:z[b]},
bN:function(a){return H.aM(a,null)},
aM:function(a,b){var z,y
H.r(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aQ(a[0].builtin$cls)+H.c7(a,1,b)
if(typeof a=="function")return H.aQ(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.u(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.e(b[y])}if('func' in a)return H.l1(a,b)
if('futureOr' in a)return"FutureOr<"+H.aM("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
l1:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
H.r(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.h([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.k(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.f(b,r)
t=C.i.H(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.aM(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aM(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aM(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aM(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.li(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.v(z[l])
n=n+m+H.aM(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
c7:function(a,b,c){var z,y,x,w,v,u
H.r(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.cI("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aM(u,c)}return"<"+z.l(0)+">"},
ll:function(a){var z,y,x,w
z=J.A(a)
if(!!z.$isn){y=H.cU(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.au(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
b3:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
as:function(a,b,c,d){var z,y
H.v(b)
H.X(c)
H.v(d)
if(a==null)return!1
z=H.au(a)
y=J.A(a)
if(y[b]==null)return!1
return H.ez(H.b3(y[d],z),null,c,null)},
bO:function(a,b,c,d){H.v(b)
H.X(c)
H.v(d)
if(a==null)return a
if(H.as(a,b,c,d))return a
throw H.c(H.dp(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aQ(b.substring(3))+H.c7(c,0,null),init.mangledGlobalNames)))},
r:function(a,b,c,d){H.v(b)
H.X(c)
H.v(d)
if(a==null)return a
if(H.as(a,b,c,d))return a
throw H.c(H.ac(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aQ(b.substring(3))+H.c7(c,0,null),init.mangledGlobalNames)))},
ez:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a8(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a8(a[y],b,c[y],d))return!1
return!0},
nW:function(a,b,c){return a.apply(b,H.b3(J.A(b)["$as"+H.e(c)],H.au(b)))},
eI:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="B"||a===-1||a===-2||H.eI(z)}return!1},
cR:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="B"||b===-1||b===-2||H.eI(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cR(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bI(a,b)}z=J.A(a).constructor
y=H.au(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a8(z,null,b,null)},
z:function(a,b){if(a!=null&&!H.cR(a,b))throw H.c(H.ac(a,H.bN(b)))
return a},
a8:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a8(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="B")return!0
if('func' in c)return H.es(a,b,c,d)
if('func' in a)return c.builtin$cls==="bu"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a8("type" in a?a.type:null,b,x,d)
else if(H.a8(a,b,x,d))return!0
else{if(!('$is'+"a4" in y.prototype))return!1
w=y.prototype["$as"+"a4"]
v=H.b3(w,z?a.slice(1):null)
return H.a8(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.ez(H.b3(r,z),b,u,d)},
es:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a8(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.a8(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a8(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a8(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.lD(m,b,l,d)},
lD:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a8(c[w],d,a[w],b))return!1}return!0},
nX:function(a,b,c){Object.defineProperty(a,H.v(b),{value:c,enumerable:false,writable:true,configurable:true})},
lz:function(a){var z,y,x,w,v,u
z=H.v($.eH.$1(a))
y=$.ca[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cc[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.v($.ey.$2(a,z))
if(z!=null){y=$.ca[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cc[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cd(x)
$.ca[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cc[z]=x
return x}if(v==="-"){u=H.cd(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eL(a,x)
if(v==="*")throw H.c(P.cK(z))
if(init.leafTags[z]===true){u=H.cd(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eL(a,x)},
eL:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cX(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cd:function(a){return J.cX(a,!1,null,!!a.$isy)},
lC:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cd(z)
else return J.cX(z,c,null,null)},
lu:function(){if(!0===$.cW)return
$.cW=!0
H.lv()},
lv:function(){var z,y,x,w,v,u,t,s
$.ca=Object.create(null)
$.cc=Object.create(null)
H.lq()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eM.$1(v)
if(u!=null){t=H.lC(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lq:function(){var z,y,x,w,v,u,t
z=C.Q()
z=H.b_(C.N,H.b_(C.S,H.b_(C.A,H.b_(C.A,H.b_(C.R,H.b_(C.O,H.b_(C.P(C.B),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eH=new H.lr(v)
$.ey=new H.ls(u)
$.eM=new H.lt(t)},
b_:function(a,b){return a(b)||b},
lH:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
iH:{"^":"b;a,b,c,d,e,f,r,0x",p:{
iI:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cx(z)
y=z[0]
x=z[1]
return new H.iH(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ja:{"^":"b;a,b,c,d,e,f",
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
ak:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.h([],[P.d])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ja(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c2:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
e1:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ir:{"^":"Q;a,b",
l:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dR:function(a,b){return new H.ir(a,b==null?null:b.method)}}},
hS:{"^":"Q;a,b,c",
l:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
cA:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hS(a,y,z?null:b.receiver)}}},
jf:{"^":"Q;a",
l:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lJ:{"^":"n:7;a",
$1:function(a){if(!!J.A(a).$isQ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
em:{"^":"b;a,0b",
l:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isR:1},
n:{"^":"b;",
l:function(a){return"Closure '"+H.bg(this).trim()+"'"},
gcs:function(){return this},
$isbu:1,
gcs:function(){return this}},
dY:{"^":"n;"},
iX:{"^":"dY;",
l:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aQ(z)+"'"}},
cm:{"^":"dY;a,b,c,d",
E:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cm))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.bf(this.a)
else y=typeof z!=="object"?J.aw(z):H.bf(z)
return(y^H.bf(this.b))>>>0},
l:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bg(z)+"'")},
p:{
cn:function(a){return a.a},
dn:function(a){return a.c},
bV:function(a){var z,y,x,w,v
z=new H.cm("self","target","receiver","name")
y=J.cx(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jb:{"^":"Q;a",
l:function(a){return this.a},
p:{
ac:function(a,b){return new H.jb("TypeError: "+P.bX(a)+": type '"+H.ew(a)+"' is not a subtype of type '"+b+"'")}}},
h2:{"^":"Q;a",
l:function(a){return this.a},
p:{
dp:function(a,b){return new H.h2("CastError: "+P.bX(a)+": type '"+H.ew(a)+"' is not a subtype of type '"+b+"'")}}},
iN:{"^":"Q;a",
l:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
iO:function(a){return new H.iN(a)}}},
e2:{"^":"b;a,0b,0c,0d",
gag:function(){var z=this.b
if(z==null){z=H.bN(this.a)
this.b=z}return z},
l:function(a){return this.gag()},
gv:function(a){var z=this.d
if(z==null){z=C.i.gv(this.gag())
this.d=z}return z},
E:function(a,b){if(b==null)return!1
return b instanceof H.e2&&this.gag()===b.gag()}},
cz:{"^":"cE;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gF:function(a){return new H.ar(this,[H.o(this,0)])},
ai:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.d8(z,b)}else{y=this.e3(b)
return y}},
e3:function(a){var z=this.d
if(z==null)return!1
return this.aJ(this.ay(z,J.aw(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ad(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ad(w,b)
x=y==null?null:y.b
return x}else return this.e4(b)},
e4:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.ay(z,J.aw(a)&0x3ffffff)
x=this.aJ(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.z(b,H.o(this,0))
H.z(c,H.o(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aA()
this.b=z}this.be(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aA()
this.c=y}this.be(y,b,c)}else{x=this.d
if(x==null){x=this.aA()
this.d=x}w=J.aw(b)&0x3ffffff
v=this.ay(x,w)
if(v==null)this.aC(x,w,[this.ar(b,c)])
else{u=this.aJ(v,b)
if(u>=0)v[u].b=c
else v.push(this.ar(b,c))}}},
T:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.bg()}},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.o(this,0),H.o(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.ay(this))
z=z.c}},
be:function(a,b,c){var z
H.z(b,H.o(this,0))
H.z(c,H.o(this,1))
z=this.ad(a,b)
if(z==null)this.aC(a,b,this.ar(b,c))
else z.b=c},
bg:function(){this.r=this.r+1&67108863},
ar:function(a,b){var z,y
z=new H.hZ(H.z(a,H.o(this,0)),H.z(b,H.o(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bg()
return z},
aJ:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aR(a[y].a,b))return y
return-1},
l:function(a){return P.dN(this)},
ad:function(a,b){return a[b]},
ay:function(a,b){return a[b]},
aC:function(a,b,c){a[b]=c},
d9:function(a,b){delete a[b]},
d8:function(a,b){return this.ad(a,b)!=null},
aA:function(){var z=Object.create(null)
this.aC(z,"<non-identifier-key>",z)
this.d9(z,"<non-identifier-key>")
return z},
$isdK:1},
hZ:{"^":"b;a,b,0c,0d"},
ar:{"^":"dA;a,$ti",
gj:function(a){return this.a.a},
gw:function(a){var z,y
z=this.a
y=new H.i_(z,z.r,this.$ti)
y.c=z.e
return y}},
i_:{"^":"b;a,b,0c,0d,$ti",
sbf:function(a){this.d=H.z(a,H.o(this,0))},
gB:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.ay(z))
else{z=this.c
if(z==null){this.sbf(null)
return!1}else{this.sbf(z.a)
this.c=this.c.c
return!0}}},
$isb8:1},
lr:{"^":"n:7;a",
$1:function(a){return this.a(a)}},
ls:{"^":"n:32;a",
$2:function(a,b){return this.a(a,b)}},
lt:{"^":"n:15;a",
$1:function(a){return this.a(H.v(a))}}}],["","",,H,{"^":"",
li:function(a){return J.hP(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
bM:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
c6:function(a){var z,y
if(!!J.A(a).$isx)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.i(z,y,a[y])
return z},
am:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.aN(b,a))},
il:{"^":"j;",$isjc:1,"%":"DataView;ArrayBufferView;cF|eg|eh|dP|ei|ej|aD"},
cF:{"^":"il;",
gj:function(a){return a.length},
$isx:1,
$asx:I.bm,
$isy:1,
$asy:I.bm},
dP:{"^":"eh;",
h:function(a,b){H.am(b,a,a.length)
return a[b]},
i:function(a,b,c){H.u(b)
H.cT(c)
H.am(b,a,a.length)
a[b]=c},
$asbY:function(){return[P.an]},
$asp:function(){return[P.an]},
$isl:1,
$asl:function(){return[P.an]},
$isa:1,
$asa:function(){return[P.an]},
"%":"Float64Array"},
aD:{"^":"ej;",
i:function(a,b,c){H.u(b)
H.u(c)
H.am(b,a,a.length)
a[b]=c},
$asbY:function(){return[P.E]},
$asp:function(){return[P.E]},
$isl:1,
$asl:function(){return[P.E]},
$isa:1,
$asa:function(){return[P.E]}},
ik:{"^":"dP;",$isaq:1,"%":"Float32Array"},
mI:{"^":"aD;",
h:function(a,b){H.am(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mJ:{"^":"aD;",
h:function(a,b){H.am(b,a,a.length)
return a[b]},
$ishM:1,
"%":"Int32Array"},
mK:{"^":"aD;",
h:function(a,b){H.am(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mL:{"^":"aD;",
h:function(a,b){H.am(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
im:{"^":"aD;",
h:function(a,b){H.am(b,a,a.length)
return a[b]},
$isnv:1,
"%":"Uint32Array"},
mM:{"^":"aD;",
gj:function(a){return a.length},
h:function(a,b){H.am(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
mN:{"^":"aD;",
gj:function(a){return a.length},
h:function(a,b){H.am(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
eg:{"^":"cF+p;"},
eh:{"^":"eg+bY;"},
ei:{"^":"cF+p;"},
ej:{"^":"ei+bY;"}}],["","",,P,{"^":"",
jp:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.la()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.at(new P.jr(z),1)).observe(y,{childList:true})
return new P.jq(z,y,x)}else if(self.setImmediate!=null)return P.lb()
return P.lc()},
nE:[function(a){self.scheduleImmediate(H.at(new P.js(H.k(a,{func:1,ret:-1})),0))},"$1","la",4,0,3],
nF:[function(a){self.setImmediate(H.at(new P.jt(H.k(a,{func:1,ret:-1})),0))},"$1","lb",4,0,3],
nG:[function(a){H.k(a,{func:1,ret:-1})
P.kI(0,a)},"$1","lc",4,0,3],
hx:function(a,b,c){var z
H.i(b,"$isR")
if(a==null)a=new P.c_()
z=$.D
if(z!==C.e)z.toString
z=new P.P(0,z,[c])
z.bk(a,b)
return z},
hy:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
H.r(a,"$isl",[[P.a4,d]],"$asl")
s=[P.a,d]
r=[s]
y=new P.P(0,$.D,r)
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.hA(z,b,!1,y)
try{for(q=a,p=q.length,o=0,n=0;o<q.length;q.length===p||(0,H.F)(q),++o){w=q[o]
v=n
w.aM(new P.hz(z,v,y,b,!1,d),x,null)
n=++z.b}if(n===0){r=new P.P(0,$.D,r)
r.bj(C.Z)
return r}r=new Array(n)
r.fixed$length=Array
z.a=H.h(r,[d])}catch(m){u=H.a2(m)
t=H.aO(m)
if(z.b===0||!1)return P.hx(u,t,s)
else{z.c=u
z.d=t}}return y},
l6:function(a,b){if(H.bI(a,{func:1,args:[P.b,P.R]}))return H.k(a,{func:1,ret:null,args:[P.b,P.R]})
if(H.bI(a,{func:1,args:[P.b]}))return H.k(a,{func:1,ret:null,args:[P.b]})
throw H.c(P.dj(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
l4:function(){var z,y
for(;z=$.aY,z!=null;){$.bl=null
y=z.b
$.aY=y
if(y==null)$.bk=null
z.a.$0()}},
nS:[function(){$.cP=!0
try{P.l4()}finally{$.bl=null
$.cP=!1
if($.aY!=null)$.d0().$1(P.eA())}},"$0","eA",0,0,1],
ev:function(a){var z=new P.e7(H.k(a,{func:1,ret:-1}))
if($.aY==null){$.bk=z
$.aY=z
if(!$.cP)$.d0().$1(P.eA())}else{$.bk.b=z
$.bk=z}},
l9:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
z=$.aY
if(z==null){P.ev(a)
$.bl=$.bk
return}y=new P.e7(a)
x=$.bl
if(x==null){y.b=z
$.bl=y
$.aY=y}else{y.b=x.b
x.b=y
$.bl=y
if(y.b==null)$.bk=y}},
lF:function(a){var z,y
z={func:1,ret:-1}
H.k(a,z)
y=$.D
if(C.e===y){P.aZ(null,null,C.e,a)
return}y.toString
P.aZ(null,null,y,H.k(y.bC(a),z))},
l_:function(a,b,c){a.dH(0)
b.ab(c)},
c8:function(a,b,c,d,e){var z={}
z.a=d
P.l9(new P.l7(z,e))},
et:function(a,b,c,d,e){var z,y
H.k(d,{func:1,ret:e})
y=$.D
if(y===c)return d.$0()
$.D=c
z=y
try{y=d.$0()
return y}finally{$.D=z}},
eu:function(a,b,c,d,e,f,g){var z,y
H.k(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.D
if(y===c)return d.$1(e)
$.D=c
z=y
try{y=d.$1(e)
return y}finally{$.D=z}},
l8:function(a,b,c,d,e,f,g,h,i){var z,y
H.k(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.D
if(y===c)return d.$2(e,f)
$.D=c
z=y
try{y=d.$2(e,f)
return y}finally{$.D=z}},
aZ:function(a,b,c,d){var z
H.k(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.bC(d):c.dE(d,-1)
P.ev(d)},
jr:{"^":"n:8;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jq:{"^":"n:26;a,b,c",
$1:function(a){var z,y
this.a.a=H.k(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
js:{"^":"n:0;a",
$0:function(){this.a.$0()}},
jt:{"^":"n:0;a",
$0:function(){this.a.$0()}},
kH:{"^":"b;a,0b,c",
d3:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.at(new P.kJ(this,b),0),a)
else throw H.c(P.C("`setTimeout()` not found."))},
p:{
kI:function(a,b){var z=new P.kH(!0,0)
z.d3(a,b)
return z}}},
kJ:{"^":"n:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
a4:{"^":"b;$ti"},
hA:{"^":"n:16;a,b,c,d",
$2:function(a,b){var z,y
H.i(b,"$isR")
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.I(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.I(z.c,z.d)}},
hz:{"^":"n;a,b,c,d,e,f",
$1:function(a){var z,y
H.z(a,this.f)
z=this.a;--z.b
y=z.a
if(y!=null){C.a.i(y,this.b,a)
if(z.b===0)this.c.bm(z.a)}else if(z.b===0&&!this.e)this.c.I(z.c,z.d)},
$S:function(){return{func:1,ret:P.B,args:[this.f]}}},
ea:{"^":"b;$ti",
dL:function(a,b){if(a==null)a=new P.c_()
if(this.a.a!==0)throw H.c(P.bD("Future already completed"))
$.D.toString
this.I(a,b)},
dK:function(a){return this.dL(a,null)}},
cM:{"^":"ea;a,$ti",
a4:function(a,b){var z
H.b1(b,{futureOr:1,type:H.o(this,0)})
z=this.a
if(z.a!==0)throw H.c(P.bD("Future already completed"))
z.bj(b)},
I:function(a,b){this.a.bk(a,b)}},
kC:{"^":"ea;a,$ti",
a4:function(a,b){var z
H.b1(b,{futureOr:1,type:H.o(this,0)})
z=this.a
if(z.a!==0)throw H.c(P.bD("Future already completed"))
z.ab(b)},
I:function(a,b){this.a.I(a,b)}},
aW:{"^":"b;0a,b,c,d,e,$ti",
e7:function(a){if(this.c!==6)return!0
return this.b.b.aK(H.k(this.d,{func:1,ret:P.V,args:[P.b]}),a.a,P.V,P.b)},
e2:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.o(this,1)}
w=this.b.b
if(H.bI(z,{func:1,args:[P.b,P.R]}))return H.b1(w.ee(z,a.a,a.b,null,y,P.R),x)
else return H.b1(w.aK(H.k(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
P:{"^":"b;bu:a<,b,0dr:c<,$ti",
aM:function(a,b,c){var z,y,x,w
z=H.o(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.D
if(y!==C.e){y.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.l6(b,y)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.P(0,$.D,[c])
w=b==null?1:3
this.bi(new P.aW(x,w,a,b,[z,c]))
return x},
ak:function(a,b){return this.aM(a,null,b)},
bi:function(a){var z,y
z=this.a
if(z<=1){a.a=H.i(this.c,"$isaW")
this.c=a}else{if(z===2){y=H.i(this.c,"$isP")
z=y.a
if(z<4){y.bi(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.aZ(null,null,z,H.k(new P.jM(this,a),{func:1,ret:-1}))}},
br:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.i(this.c,"$isaW")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.i(this.c,"$isP")
y=u.a
if(y<4){u.br(a)
return}this.a=y
this.c=u.c}z.a=this.af(a)
y=this.b
y.toString
P.aZ(null,null,y,H.k(new P.jT(z,this),{func:1,ret:-1}))}},
ae:function(){var z=H.i(this.c,"$isaW")
this.c=null
return this.af(z)},
af:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
ab:function(a){var z,y,x
z=H.o(this,0)
H.b1(a,{futureOr:1,type:z})
y=this.$ti
if(H.as(a,"$isa4",y,"$asa4"))if(H.as(a,"$isP",y,null))P.c3(a,this)
else P.eb(a,this)
else{x=this.ae()
H.z(a,z)
this.a=4
this.c=a
P.aX(this,x)}},
bm:function(a){var z
H.z(a,H.o(this,0))
z=this.ae()
this.a=4
this.c=a
P.aX(this,z)},
I:function(a,b){var z
H.i(b,"$isR")
z=this.ae()
this.a=8
this.c=new P.a7(a,b)
P.aX(this,z)},
bj:function(a){var z
H.b1(a,{futureOr:1,type:H.o(this,0)})
if(H.as(a,"$isa4",this.$ti,"$asa4")){this.d6(a)
return}this.a=1
z=this.b
z.toString
P.aZ(null,null,z,H.k(new P.jO(this,a),{func:1,ret:-1}))},
d6:function(a){var z=this.$ti
H.r(a,"$isa4",z,"$asa4")
if(H.as(a,"$isP",z,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.aZ(null,null,z,H.k(new P.jS(this,a),{func:1,ret:-1}))}else P.c3(a,this)
return}P.eb(a,this)},
bk:function(a,b){var z
H.i(b,"$isR")
this.a=1
z=this.b
z.toString
P.aZ(null,null,z,H.k(new P.jN(this,a,b),{func:1,ret:-1}))},
$isa4:1,
p:{
eb:function(a,b){var z,y,x
b.a=1
try{a.aM(new P.jP(b),new P.jQ(b),null)}catch(x){z=H.a2(x)
y=H.aO(x)
P.lF(new P.jR(b,z,y))}},
c3:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.i(a.c,"$isP")
if(z>=4){y=b.ae()
b.a=a.a
b.c=a.c
P.aX(b,y)}else{y=H.i(b.c,"$isaW")
b.a=2
b.c=a
a.br(y)}},
aX:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.i(y.c,"$isa7")
y=y.b
u=v.a
t=v.b
y.toString
P.c8(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.aX(z.a,b)}y=z.a
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
if(p){H.i(r,"$isa7")
y=y.b
u=r.a
t=r.b
y.toString
P.c8(null,null,y,u,t)
return}o=$.D
if(o!=q)$.D=q
else o=null
y=b.c
if(y===8)new P.jW(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jV(x,b,r).$0()}else if((y&2)!==0)new P.jU(z,x,b).$0()
if(o!=null)$.D=o
y=x.b
if(!!J.A(y).$isa4){if(y.a>=4){n=H.i(t.c,"$isaW")
t.c=null
b=t.af(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.c3(y,t)
return}}m=b.b
n=H.i(m.c,"$isaW")
m.c=null
b=m.af(n)
y=x.a
u=x.b
if(!y){H.z(u,H.o(m,0))
m.a=4
m.c=u}else{H.i(u,"$isa7")
m.a=8
m.c=u}z.a=m
y=m}}}},
jM:{"^":"n:0;a,b",
$0:function(){P.aX(this.a,this.b)}},
jT:{"^":"n:0;a,b",
$0:function(){P.aX(this.b,this.a.a)}},
jP:{"^":"n:8;a",
$1:function(a){var z=this.a
z.a=0
z.ab(a)}},
jQ:{"^":"n:17;a",
$2:function(a,b){H.i(b,"$isR")
this.a.I(a,b)},
$1:function(a){return this.$2(a,null)}},
jR:{"^":"n:0;a,b,c",
$0:function(){this.a.I(this.b,this.c)}},
jO:{"^":"n:0;a,b",
$0:function(){var z=this.a
z.bm(H.z(this.b,H.o(z,0)))}},
jS:{"^":"n:0;a,b",
$0:function(){P.c3(this.b,this.a)}},
jN:{"^":"n:0;a,b,c",
$0:function(){this.a.I(this.b,this.c)}},
jW:{"^":"n:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.c9(H.k(w.d,{func:1}),null)}catch(v){y=H.a2(v)
x=H.aO(v)
if(this.d){w=H.i(this.a.a.c,"$isa7").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.i(this.a.a.c,"$isa7")
else u.b=new P.a7(y,x)
u.a=!0
return}if(!!J.A(z).$isa4){if(z instanceof P.P&&z.gbu()>=4){if(z.gbu()===8){w=this.b
w.b=H.i(z.gdr(),"$isa7")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ak(new P.jX(t),null)
w.a=!1}}},
jX:{"^":"n:18;a",
$1:function(a){return this.a}},
jV:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.o(x,0)
v=H.z(this.c,w)
u=H.o(x,1)
this.a.b=x.b.b.aK(H.k(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a2(t)
y=H.aO(t)
x=this.a
x.b=new P.a7(z,y)
x.a=!0}}},
jU:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.i(this.a.a.c,"$isa7")
w=this.c
if(w.e7(z)&&w.e!=null){v=this.b
v.b=w.e2(z)
v.a=!1}}catch(u){y=H.a2(u)
x=H.aO(u)
w=H.i(this.a.a.c,"$isa7")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a7(y,x)
s.a=!0}}},
e7:{"^":"b;a,0b"},
j0:{"^":"b;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.P(0,$.D,[P.E])
z.a=0
x=H.o(this,0)
w=H.k(new P.j5(z,this),{func:1,ret:-1,args:[x]})
H.k(new P.j6(z,y),{func:1,ret:-1})
W.al(this.a,this.b,w,!1,x)
return y},
ge_:function(a){var z,y,x,w
z={}
y=new P.P(0,$.D,this.$ti)
z.a=null
x=H.o(this,0)
w=H.k(new P.j3(z,this,y),{func:1,ret:-1,args:[x]})
H.k(new P.j4(y),{func:1,ret:-1})
z.a=W.al(this.a,this.b,w,!1,x)
return y}},
j5:{"^":"n;a,b",
$1:function(a){H.z(a,H.o(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.B,args:[H.o(this.b,0)]}}},
j6:{"^":"n:0;a,b",
$0:function(){this.b.ab(this.a.a)}},
j3:{"^":"n;a,b,c",
$1:function(a){H.z(a,H.o(this.b,0))
P.l_(this.a.a,this.c,a)},
$S:function(){return{func:1,ret:P.B,args:[H.o(this.b,0)]}}},
j4:{"^":"n:0;a",
$0:function(){var z,y,x,w
try{x=H.cw()
throw H.c(x)}catch(w){z=H.a2(w)
y=H.aO(w)
$.D.toString
this.a.I(z,y)}}},
j1:{"^":"b;"},
j2:{"^":"b;"},
a7:{"^":"b;a,b",
l:function(a){return H.e(this.a)},
$isQ:1},
kP:{"^":"b;",$isnC:1},
l7:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.c_()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.l(0)
throw x}},
kl:{"^":"kP;",
ef:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
try{if(C.e===$.D){a.$0()
return}P.et(null,null,this,a,-1)}catch(x){z=H.a2(x)
y=H.aO(x)
P.c8(null,null,this,z,H.i(y,"$isR"))}},
eg:function(a,b,c){var z,y,x
H.k(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.e===$.D){a.$1(b)
return}P.eu(null,null,this,a,b,-1,c)}catch(x){z=H.a2(x)
y=H.aO(x)
P.c8(null,null,this,z,H.i(y,"$isR"))}},
dE:function(a,b){return new P.kn(this,H.k(a,{func:1,ret:b}),b)},
bC:function(a){return new P.km(this,H.k(a,{func:1,ret:-1}))},
dF:function(a,b){return new P.ko(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
c9:function(a,b){H.k(a,{func:1,ret:b})
if($.D===C.e)return a.$0()
return P.et(null,null,this,a,b)},
aK:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.D===C.e)return a.$1(b)
return P.eu(null,null,this,a,b,c,d)},
ee:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.D===C.e)return a.$2(b,c)
return P.l8(null,null,this,a,b,c,d,e,f)}},
kn:{"^":"n;a,b,c",
$0:function(){return this.a.c9(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
km:{"^":"n:1;a,b",
$0:function(){return this.a.ef(this.b)}},
ko:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.eg(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dL:function(a,b,c){H.X(a)
return H.r(H.lj(a,new H.cz(0,0,[b,c])),"$isdK",[b,c],"$asdK")},
a5:function(a,b){return new H.cz(0,0,[a,b])},
i0:function(){return new H.cz(0,0,[null,null])},
ab:function(a,b,c,d){return new P.k6(0,0,[d])},
hN:function(a,b,c){var z,y
if(P.cQ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.h([],[P.d])
y=$.bo()
C.a.k(y,a)
try{P.l3(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.dX(b,H.ly(z,"$isl"),", ")+c
return y.charCodeAt(0)==0?y:y},
cv:function(a,b,c){var z,y,x
if(P.cQ(a))return b+"..."+c
z=new P.cI(b)
y=$.bo()
C.a.k(y,a)
try{x=z
x.a=P.dX(x.gX(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gX()+c
y=z.gX()
return y.charCodeAt(0)==0?y:y},
cQ:function(a){var z,y
for(z=0;y=$.bo(),z<y.length;++z)if(a===y[z])return!0
return!1},
l3:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.r(b,"$isa",[P.d],"$asa")
z=a.gw(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.e(z.gB(z))
C.a.k(b,w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gB(z);++x
if(!z.t()){if(x<=4){C.a.k(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gB(z);++x
for(;z.t();t=s,s=r){r=z.gB(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2;--x}C.a.k(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.k(b,q)
C.a.k(b,u)
C.a.k(b,v)},
cC:function(a,b){var z,y,x
z=P.ab(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.F)(a),++x)z.k(0,H.z(a[x],b))
return z},
dN:function(a){var z,y,x
z={}
if(P.cQ(a))return"{...}"
y=new P.cI("")
try{C.a.k($.bo(),a)
x=y
x.a=x.gX()+"{"
z.a=!0
J.fB(a,new P.i6(z,y))
z=y
z.a=z.gX()+"}"}finally{z=$.bo()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gX()
return z.charCodeAt(0)==0?z:z},
k6:{"^":"jZ;a,0b,0c,0d,0e,0f,r,$ti",
gw:function(a){var z=new P.ef(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.i(z[b],"$isbH")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.i(y[b],"$isbH")!=null}else return this.d7(b)},
d7:function(a){var z=this.d
if(z==null)return!1
return this.ax(this.bp(z,a),a)>=0},
k:function(a,b){var z,y
H.z(b,H.o(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cN()
this.b=z}return this.bh(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cN()
this.c=y}return this.bh(y,b)}else return this.d4(0,b)},
d4:function(a,b){var z,y,x
H.z(b,H.o(this,0))
z=this.d
if(z==null){z=P.cN()
this.d=z}y=this.bn(b)
x=z[y]
if(x==null)z[y]=[this.aB(b)]
else{if(this.ax(x,b)>=0)return!1
x.push(this.aB(b))}return!0},
c8:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bs(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bs(this.c,b)
else return this.dj(0,b)},
dj:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bp(z,b)
x=this.ax(y,b)
if(x<0)return!1
this.bw(y.splice(x,1)[0])
return!0},
T:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.az()}},
bh:function(a,b){H.z(b,H.o(this,0))
if(H.i(a[b],"$isbH")!=null)return!1
a[b]=this.aB(b)
return!0},
bs:function(a,b){var z
if(a==null)return!1
z=H.i(a[b],"$isbH")
if(z==null)return!1
this.bw(z)
delete a[b]
return!0},
az:function(){this.r=this.r+1&67108863},
aB:function(a){var z,y
z=new P.bH(H.z(a,H.o(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.az()
return z},
bw:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.az()},
bn:function(a){return J.aw(a)&0x3ffffff},
bp:function(a,b){return a[this.bn(b)]},
ax:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aR(a[y].a,b))return y
return-1},
p:{
cN:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bH:{"^":"b;a,0b,0c"},
ef:{"^":"b;a,b,0c,0d,$ti",
sbl:function(a){this.d=H.z(a,H.o(this,0))},
gB:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.ay(z))
else{z=this.c
if(z==null){this.sbl(null)
return!1}else{this.sbl(H.z(z.a,H.o(this,0)))
this.c=this.c.b
return!0}}},
$isb8:1,
p:{
k7:function(a,b,c){var z=new P.ef(a,b,[c])
z.c=a.e
return z}}},
jZ:{"^":"iP;"},
i1:{"^":"k8;",$isl:1,$isa:1},
p:{"^":"b;$ti",
gw:function(a){return new H.dM(a,this.gj(a),0,[H.b2(this,a,"p",0)])},
q:function(a,b){return this.h(a,b)},
e0:function(a,b,c,d){var z,y,x
H.z(b,d)
H.k(c,{func:1,ret:d,args:[d,H.b2(this,a,"p",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.c(P.ay(a))}return y},
bX:function(a,b,c,d){var z
H.z(d,H.b2(this,a,"p",0))
P.iG(b,c,this.gj(a),null,null,null)
for(z=b;z<c;++z)this.i(a,z,d)},
l:function(a){return P.cv(a,"[","]")}},
cE:{"^":"S;"},
i6:{"^":"n:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
S:{"^":"b;$ti",
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.b2(this,a,"S",0),H.b2(this,a,"S",1)]})
for(z=J.bS(this.gF(a));z.t();){y=z.gB(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.ao(this.gF(a))},
l:function(a){return P.dN(a)},
$isJ:1},
iQ:{"^":"b;$ti",
G:function(a,b){var z
for(z=J.bS(H.r(b,"$isl",this.$ti,"$asl"));z.t();)this.k(0,z.gB(z))},
l:function(a){return P.cv(this,"{","}")},
$isl:1,
$isn4:1},
iP:{"^":"iQ;"},
k8:{"^":"b+p;"}}],["","",,P,{"^":"",
l5:function(a,b){var z,y,x,w
if(typeof a!=="string")throw H.c(H.b0(a))
z=null
try{z=JSON.parse(a)}catch(x){y=H.a2(x)
w=String(y)
throw H.c(new P.hu(w,null,null))}w=P.c5(z)
return w},
c5:function(a){var z
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.k2(a,Object.create(null))
for(z=0;z<a.length;++z)a[z]=P.c5(a[z])
return a},
k2:{"^":"cE;a,b,0c",
h:function(a,b){var z,y
z=this.b
if(z==null)return this.c.h(0,b)
else if(typeof b!=="string")return
else{y=z[b]
return typeof y=="undefined"?this.di(b):y}},
gj:function(a){return this.b==null?this.c.a:this.ac().length},
gF:function(a){var z
if(this.b==null){z=this.c
return new H.ar(z,[H.o(z,0)])}return new P.k3(this)},
D:function(a,b){var z,y,x,w
H.k(b,{func:1,ret:-1,args:[P.d,,]})
if(this.b==null)return this.c.D(0,b)
z=this.ac()
for(y=0;y<z.length;++y){x=z[y]
w=this.b[x]
if(typeof w=="undefined"){w=P.c5(this.a[x])
this.b[x]=w}b.$2(x,w)
if(z!==this.c)throw H.c(P.ay(this))}},
ac:function(){var z=H.X(this.c)
if(z==null){z=H.h(Object.keys(this.a),[P.d])
this.c=z}return z},
di:function(a){var z
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
z=P.c5(this.a[a])
return this.b[a]=z},
$asS:function(){return[P.d,null]},
$asJ:function(){return[P.d,null]}},
k3:{"^":"bb;a",
gj:function(a){var z=this.a
return z.gj(z)},
q:function(a,b){var z=this.a
if(z.b==null)z=z.gF(z).q(0,b)
else{z=z.ac()
if(b<0||b>=z.length)return H.f(z,b)
z=z[b]}return z},
gw:function(a){var z=this.a
if(z.b==null){z=z.gF(z)
z=z.gw(z)}else{z=z.ac()
z=new J.dk(z,z.length,0,[H.o(z,0)])}return z},
$asbb:function(){return[P.d]},
$asl:function(){return[P.d]}},
dr:{"^":"b;$ti"},
du:{"^":"j2;$ti"},
hT:{"^":"dr;a,b",
dU:function(a,b,c){var z=P.l5(b,this.gdV().a)
return z},
dT:function(a,b){return this.dU(a,b,null)},
gdV:function(){return C.V},
$asdr:function(){return[P.b,P.d]}},
hU:{"^":"du;a",
$asdu:function(){return[P.d,P.b]}}}],["","",,P,{"^":"",
hq:function(a){if(a instanceof H.n)return a.l(0)
return"Instance of '"+H.bg(a)+"'"},
bX:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bq(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hq(a)},
dE:function(a){return new P.jH(a)},
aa:function(a){H.bM(H.e(a))},
V:{"^":"b;"},
"+bool":0,
bs:{"^":"b;a,b",
E:function(a,b){if(b==null)return!1
return b instanceof P.bs&&this.a===b.a&&this.b===b.b},
N:function(a,b){return C.b.N(this.a,H.i(b,"$isbs").a)},
gv:function(a){var z=this.a
return(z^C.b.bt(z,30))&1073741823},
l:function(a){var z,y,x,w,v,u,t
z=P.hf(H.iD(this))
y=P.bt(H.iB(this))
x=P.bt(H.ix(this))
w=P.bt(H.iy(this))
v=P.bt(H.iA(this))
u=P.bt(H.iC(this))
t=P.hg(H.iz(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
$isa3:1,
$asa3:function(){return[P.bs]},
p:{
hf:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hg:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bt:function(a){if(a>=10)return""+a
return"0"+a}}},
an:{"^":"H;"},
"+double":0,
b6:{"^":"b;a",
U:function(a,b){return C.b.U(this.a,H.i(b,"$isb6").a)},
E:function(a,b){if(b==null)return!1
return b instanceof P.b6&&this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
N:function(a,b){return C.b.N(this.a,H.i(b,"$isb6").a)},
l:function(a){var z,y,x,w,v
z=new P.hn()
y=this.a
if(y<0)return"-"+new P.b6(0-y).l(0)
x=z.$1(C.b.J(y,6e7)%60)
w=z.$1(C.b.J(y,1e6)%60)
v=new P.hm().$1(y%1e6)
return""+C.b.J(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isa3:1,
$asa3:function(){return[P.b6]},
p:{
hl:function(a,b,c,d,e,f){return new P.b6(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hm:{"^":"n:5;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hn:{"^":"n:5;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Q:{"^":"b;"},
c_:{"^":"Q;",
l:function(a){return"Throw of null."}},
ax:{"^":"Q;a,b,c,d",
gav:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gau:function(){return""},
l:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gav()+y+x
if(!this.a)return w
v=this.gau()
u=P.bX(this.b)
return w+v+": "+u},
p:{
cl:function(a){return new P.ax(!1,null,null,a)},
dj:function(a,b,c){return new P.ax(!0,a,b,c)}}},
dS:{"^":"ax;e,f,a,b,c,d",
gav:function(){return"RangeError"},
gau:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
c0:function(a,b,c){return new P.dS(null,null,!0,a,b,"Value not in range")},
bh:function(a,b,c,d,e){return new P.dS(b,c,!0,a,d,"Invalid value")},
iG:function(a,b,c,d,e,f){if(0>a||a>c)throw H.c(P.bh(a,0,c,"start",f))
if(a>b||b>c)throw H.c(P.bh(b,a,c,"end",f))
return b}}},
hL:{"^":"ax;e,j:f>,a,b,c,d",
gav:function(){return"RangeError"},
gau:function(){var z,y
z=H.u(this.b)
if(typeof z!=="number")return z.a7()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
I:function(a,b,c,d,e){var z=H.u(e==null?J.ao(b):e)
return new P.hL(b,z,!0,a,c,"Index out of range")}}},
jg:{"^":"Q;a",
l:function(a){return"Unsupported operation: "+this.a},
p:{
C:function(a){return new P.jg(a)}}},
je:{"^":"Q;a",
l:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cK:function(a){return new P.je(a)}}},
cH:{"^":"Q;a",
l:function(a){return"Bad state: "+this.a},
p:{
bD:function(a){return new P.cH(a)}}},
h8:{"^":"Q;a",
l:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bX(z)+"."},
p:{
ay:function(a){return new P.h8(a)}}},
dW:{"^":"b;",
l:function(a){return"Stack Overflow"},
$isQ:1},
he:{"^":"Q;a",
l:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
jH:{"^":"b;a",
l:function(a){return"Exception: "+this.a}},
hu:{"^":"b;a,b,c",
l:function(a){var z,y
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
return y}},
bu:{"^":"b;"},
E:{"^":"H;"},
"+int":0,
l:{"^":"b;$ti",
aO:["cI",function(a,b){var z=H.cV(this,"l",0)
return new H.e5(this,H.k(b,{func:1,ret:P.V,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gw(this)
for(y=0;z.t();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.a6(P.bh(b,0,null,"index",null))
for(z=this.gw(this),y=0;z.t();){x=z.gB(z)
if(b===y)return x;++y}throw H.c(P.I(b,this,"index",null,y))},
l:function(a){return P.hN(this,"(",")")}},
b8:{"^":"b;$ti"},
a:{"^":"b;$ti",$isl:1},
"+List":0,
J:{"^":"b;$ti"},
B:{"^":"b;",
gv:function(a){return P.b.prototype.gv.call(this,this)},
l:function(a){return"null"}},
"+Null":0,
H:{"^":"b;",$isa3:1,
$asa3:function(){return[P.H]}},
"+num":0,
b:{"^":";",
E:function(a,b){return this===b},
gv:function(a){return H.bf(this)},
l:function(a){return"Instance of '"+H.bg(this)+"'"},
toString:function(){return this.l(this)}},
R:{"^":"b;"},
d:{"^":"b;",$isa3:1,
$asa3:function(){return[P.d]},
$isit:1},
"+String":0,
cI:{"^":"b;X:a<",
gj:function(a){return this.a.length},
l:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dX:function(a,b,c){var z=J.bS(b)
if(!z.t())return a
if(c.length===0){do a+=H.e(z.gB(z))
while(z.t())}else{a+=H.e(z.gB(z))
for(;z.t();)a=a+c+H.e(z.gB(z))}return a}}}}],["","",,W,{"^":"",
ho:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.p).O(z,a,b,c)
y.toString
z=W.w
z=new H.e5(new W.ae(y),H.k(new W.hp(),{func:1,ret:P.V,args:[z]}),[z])
x=z.gw(z)
if(!x.t())H.a6(H.cw())
w=x.gB(x)
if(x.t())H.a6(H.hO())
return H.i(w,"$isY")},
dD:function(a){H.i(a,"$isL")
return"wheel"},
b7:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fE(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a2(x)}return z},
jE:function(a,b){return document.createElement(a)},
c4:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ee:function(a,b,c,d){var z,y
z=W.c4(W.c4(W.c4(W.c4(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
er:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.jy(a)
if(!!J.A(z).$isL)return z
return}else return H.i(a,"$isL")},
l0:function(a){if(!!J.A(a).$iscp)return a
return new P.jm([],[],!1).dN(a,!0)},
ex:function(a,b){var z
H.k(a,{func:1,ret:-1,args:[b]})
z=$.D
if(z===C.e)return a
return z.dF(a,b)},
N:{"^":"Y;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
lK:{"^":"j;0j:length=","%":"AccessibleNodeList"},
fX:{"^":"N;",
l:function(a){return String(a)},
$isfX:1,
"%":"HTMLAnchorElement"},
lL:{"^":"N;",
l:function(a){return String(a)},
"%":"HTMLAreaElement"},
dl:{"^":"N;",$isdl:1,"%":"HTMLBaseElement"},
h0:{"^":"j;","%":";Blob"},
bU:{"^":"N;",$isbU:1,"%":"HTMLBodyElement"},
br:{"^":"N;0n:height=,0m:width=",
ct:function(a,b,c){var z=this.dd(a,b,P.ld(c,null))
return z},
dd:function(a,b,c){return a.getContext(b,c)},
$isbr:1,
"%":"HTMLCanvasElement"},
lQ:{"^":"j;",
am:function(a){return P.a9(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
lR:{"^":"w;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
ha:{"^":"co;",$isha:1,"%":"CSSNumericValue|CSSUnitValue"},
lU:{"^":"hd;0j:length=","%":"CSSPerspective"},
az:{"^":"j;",$isaz:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
hb:{"^":"jw;0j:length=",
aT:function(a,b){var z=this.de(a,this.as(a,b))
return z==null?"":z},
as:function(a,b){var z,y
z=$.eR()
y=z[b]
if(typeof y==="string")return y
y=this.dv(a,b)
z[b]=y
return y},
dv:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hh()+b
if(z in a)return z
return b},
de:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hc:{"^":"b;",
gn:function(a){return this.aT(a,"height")},
gm:function(a){return this.aT(a,"width")}},
co:{"^":"j;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
hd:{"^":"j;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
lW:{"^":"co;0j:length=","%":"CSSTransformValue"},
lX:{"^":"co;0j:length=","%":"CSSUnparsedValue"},
lZ:{"^":"j;0j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
hi:{"^":"N;","%":"HTMLDivElement"},
cp:{"^":"w;",
dz:function(a,b){return a.adoptNode(b)},
cu:function(a,b){return a.getElementById(b)},
ea:function(a,b){return a.querySelector(b)},
gc3:function(a){return new W.bF(a,"mousedown",!1,[W.Z])},
gc4:function(a){return new W.bF(a,"mousemove",!1,[W.Z])},
gc5:function(a){return new W.bF(a,"mouseup",!1,[W.Z])},
gc6:function(a){return new W.bF(a,H.v(W.dD(a)),!1,[W.aV])},
$iscp:1,
"%":"XMLDocument;Document"},
m_:{"^":"j;",
l:function(a){return String(a)},
"%":"DOMException"},
hj:{"^":"j;",
dR:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
m0:{"^":"jA;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.r(c,"$isa0",[P.H],"$asa0")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[[P.a0,P.H]]},
$isy:1,
$asy:function(){return[[P.a0,P.H]]},
$asp:function(){return[[P.a0,P.H]]},
$isl:1,
$asl:function(){return[[P.a0,P.H]]},
$isa:1,
$asa:function(){return[[P.a0,P.H]]},
$ast:function(){return[[P.a0,P.H]]},
"%":"ClientRectList|DOMRectList"},
hk:{"^":"j;",
l:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
E:function(a,b){var z
if(b==null)return!1
if(!H.as(b,"$isa0",[P.H],"$asa0"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.m(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.ee(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isa0:1,
$asa0:function(){return[P.H]},
"%":";DOMRectReadOnly"},
m1:{"^":"jC;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.v(c)
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[P.d]},
$isy:1,
$asy:function(){return[P.d]},
$asp:function(){return[P.d]},
$isl:1,
$asl:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$ast:function(){return[P.d]},
"%":"DOMStringList"},
m2:{"^":"j;0j:length=","%":"DOMTokenList"},
Y:{"^":"w;0eh:tagName=",
gdC:function(a){return new W.jD(a)},
l:function(a){return a.localName},
O:["ao",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dC
if(z==null){z=H.h([],[W.aj])
y=new W.dQ(z)
C.a.k(z,W.ec(null))
C.a.k(z,W.en())
$.dC=y
d=y}else d=z
z=$.dB
if(z==null){z=new W.eq(d)
$.dB=z
c=z}else{z.a=d
c=z}}if($.ap==null){z=document
y=z.implementation
y=(y&&C.K).dR(y,"")
$.ap=y
$.cq=y.createRange()
y=$.ap
y.toString
y=y.createElement("base")
H.i(y,"$isdl")
y.href=z.baseURI
z=$.ap.head;(z&&C.L).K(z,y)}z=$.ap
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.i(y,"$isbU")}z=$.ap
if(!!this.$isbU)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ap.body;(z&&C.p).K(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.u(C.X,a.tagName)){z=$.cq;(z&&C.D).cv(z,x)
z=$.cq
w=(z&&C.D).dP(z,b)}else{x.innerHTML=b
w=$.ap.createDocumentFragment()
for(z=J.m(w);y=x.firstChild,y!=null;)z.K(w,y)}z=$.ap.body
if(x==null?z!=null:x!==z)J.dc(x)
c.aY(w)
C.r.dz(document,w)
return w},function(a,b,c){return this.O(a,b,c,null)},"dQ",null,null,"ger",5,5,null],
cA:function(a,b,c,d){a.textContent=null
this.K(a,this.O(a,b,c,d))},
cz:function(a,b){return this.cA(a,b,null,null)},
Z:function(a,b){return a.getAttribute(b)},
dk:function(a,b){return a.removeAttribute(b)},
gc3:function(a){return new W.bE(a,"mousedown",!1,[W.Z])},
gc4:function(a){return new W.bE(a,"mousemove",!1,[W.Z])},
gc5:function(a){return new W.bE(a,"mouseup",!1,[W.Z])},
gc6:function(a){return new W.bE(a,H.v(W.dD(a)),!1,[W.aV])},
$isY:1,
"%":";Element"},
hp:{"^":"n:19;",
$1:function(a){return!!J.A(H.i(a,"$isw")).$isY}},
m4:{"^":"N;0n:height=,0m:width=","%":"HTMLEmbedElement"},
O:{"^":"j;",$isO:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
L:{"^":"j;",
by:["cG",function(a,b,c,d){H.k(c,{func:1,args:[W.O]})
if(c!=null)this.d5(a,b,c,!1)}],
d5:function(a,b,c,d){return a.addEventListener(b,H.at(H.k(c,{func:1,args:[W.O]}),1),!1)},
dm:function(a,b,c,d){return a.removeEventListener(b,H.at(H.k(c,{func:1,args:[W.O]}),1),!1)},
$isL:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;ek|el|eo|ep"},
aA:{"^":"h0;",$isaA:1,"%":"File"},
ml:{"^":"jJ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.i(c,"$isaA")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aA]},
$isy:1,
$asy:function(){return[W.aA]},
$asp:function(){return[W.aA]},
$isl:1,
$asl:function(){return[W.aA]},
$isa:1,
$asa:function(){return[W.aA]},
$ast:function(){return[W.aA]},
"%":"FileList"},
mm:{"^":"L;0j:length=","%":"FileWriter"},
mp:{"^":"N;0j:length=","%":"HTMLFormElement"},
aB:{"^":"j;",$isaB:1,"%":"Gamepad"},
hC:{"^":"N;","%":"HTMLHeadElement"},
mq:{"^":"j;0j:length=","%":"History"},
mr:{"^":"k0;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.i(c,"$isw")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.w]},
$isy:1,
$asy:function(){return[W.w]},
$asp:function(){return[W.w]},
$isl:1,
$asl:function(){return[W.w]},
$isa:1,
$asa:function(){return[W.w]},
$ast:function(){return[W.w]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hD:{"^":"cp;","%":"HTMLDocument"},
hE:{"^":"hF;",
es:function(a,b,c,d,e,f){return a.open(b,c)},
e8:function(a,b,c){return a.open(b,c)},
cw:function(a,b){return a.send(b)},
"%":"XMLHttpRequest"},
hF:{"^":"L;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
ms:{"^":"N;0n:height=,0m:width=","%":"HTMLIFrameElement"},
ct:{"^":"j;0n:height=,0m:width=",$isct:1,"%":"ImageBitmap"},
cu:{"^":"j;0n:height=,0m:width=",$iscu:1,"%":"ImageData"},
bZ:{"^":"N;0n:height=,0m:width=",$isbZ:1,"%":"HTMLImageElement"},
mw:{"^":"N;0n:height=,0m:width=","%":"HTMLInputElement"},
b9:{"^":"e3;",$isb9:1,"%":"KeyboardEvent"},
i5:{"^":"j;",
l:function(a){return String(a)},
$isi5:1,
"%":"Location"},
i9:{"^":"N;","%":"HTMLAudioElement;HTMLMediaElement"},
mD:{"^":"j;0j:length=","%":"MediaList"},
mE:{"^":"L;",
by:function(a,b,c,d){H.k(c,{func:1,args:[W.O]})
if(b==="message")a.start()
this.cG(a,b,c,!1)},
"%":"MessagePort"},
mF:{"^":"ka;",
h:function(a,b){return P.a9(a.get(H.v(b)))},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a9(y.value[1]))}},
gF:function(a){var z=H.h([],[P.d])
this.D(a,new W.ib(z))
return z},
gj:function(a){return a.size},
$asS:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"MIDIInputMap"},
ib:{"^":"n:2;a",
$2:function(a,b){return C.a.k(this.a,a)}},
mG:{"^":"kb;",
h:function(a,b){return P.a9(a.get(H.v(b)))},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a9(y.value[1]))}},
gF:function(a){var z=H.h([],[P.d])
this.D(a,new W.ic(z))
return z},
gj:function(a){return a.size},
$asS:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
ic:{"^":"n:2;a",
$2:function(a,b){return C.a.k(this.a,a)}},
aC:{"^":"j;",$isaC:1,"%":"MimeType"},
mH:{"^":"kd;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.i(c,"$isaC")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aC]},
$isy:1,
$asy:function(){return[W.aC]},
$asp:function(){return[W.aC]},
$isl:1,
$asl:function(){return[W.aC]},
$isa:1,
$asa:function(){return[W.aC]},
$ast:function(){return[W.aC]},
"%":"MimeTypeArray"},
Z:{"^":"e3;",
gc2:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.be(a.offsetX,a.offsetY,[P.H])
else{z=a.target
if(!J.A(W.er(z)).$isY)throw H.c(P.C("offsetX is only supported on elements"))
y=H.i(W.er(z),"$isY")
z=a.clientX
x=a.clientY
w=[P.H]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.r(new P.be(u,v,w),"$isbe",w,"$asbe")
if(typeof z!=="number")return z.b0()
if(typeof x!=="number")return x.b0()
return new P.be(C.m.cc(z-u),C.m.cc(x-v),w)}},
$isZ:1,
"%":";DragEvent|MouseEvent"},
ae:{"^":"i1;a",
ga9:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.bD("No elements"))
if(y>1)throw H.c(P.bD("More than one element"))
return z.firstChild},
G:function(a,b){var z,y,x,w,v
H.r(b,"$isl",[W.w],"$asl")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.m(y),v=0;v<x;++v)w.K(y,z.firstChild)
return},
i:function(a,b,c){var z
H.u(b)
z=this.a
J.fh(z,H.i(c,"$isw"),C.v.h(z.childNodes,b))},
gw:function(a){var z=this.a.childNodes
return new W.dF(z,z.length,-1,[H.b2(C.v,z,"t",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.v.h(this.a.childNodes,b)},
$asp:function(){return[W.w]},
$asl:function(){return[W.w]},
$asa:function(){return[W.w]}},
w:{"^":"L;0e9:previousSibling=",
eb:function(a){var z=a.parentNode
if(z!=null)J.bP(z,a)},
l:function(a){var z=a.nodeValue
return z==null?this.cH(a):z},
K:function(a,b){return a.appendChild(b)},
dl:function(a,b){return a.removeChild(b)},
dn:function(a,b,c){return a.replaceChild(b,c)},
$isw:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
io:{"^":"kf;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.i(c,"$isw")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.w]},
$isy:1,
$asy:function(){return[W.w]},
$asp:function(){return[W.w]},
$isl:1,
$asl:function(){return[W.w]},
$isa:1,
$asa:function(){return[W.w]},
$ast:function(){return[W.w]},
"%":"NodeList|RadioNodeList"},
mQ:{"^":"N;0n:height=,0m:width=","%":"HTMLObjectElement"},
mS:{"^":"L;0n:height=,0m:width=","%":"OffscreenCanvas"},
mT:{"^":"j;0n:height=,0m:width=","%":"PaintSize"},
aE:{"^":"j;0j:length=",$isaE:1,"%":"Plugin"},
mV:{"^":"kj;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.i(c,"$isaE")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aE]},
$isy:1,
$asy:function(){return[W.aE]},
$asp:function(){return[W.aE]},
$isl:1,
$asl:function(){return[W.aE]},
$isa:1,
$asa:function(){return[W.aE]},
$ast:function(){return[W.aE]},
"%":"PluginArray"},
mX:{"^":"Z;0n:height=,0m:width=","%":"PointerEvent"},
bB:{"^":"O;",$isbB:1,"%":"ProgressEvent|ResourceProgressEvent"},
iF:{"^":"j;",
dP:function(a,b){return a.createContextualFragment(b)},
cv:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
n1:{"^":"kp;",
h:function(a,b){return P.a9(a.get(H.v(b)))},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a9(y.value[1]))}},
gF:function(a){var z=H.h([],[P.d])
this.D(a,new W.iM(z))
return z},
gj:function(a){return a.size},
$asS:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"RTCStatsReport"},
iM:{"^":"n:2;a",
$2:function(a,b){return C.a.k(this.a,a)}},
n2:{"^":"j;0n:height=,0m:width=","%":"Screen"},
n3:{"^":"N;0j:length=","%":"HTMLSelectElement"},
aF:{"^":"L;",$isaF:1,"%":"SourceBuffer"},
n5:{"^":"el;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.i(c,"$isaF")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aF]},
$isy:1,
$asy:function(){return[W.aF]},
$asp:function(){return[W.aF]},
$isl:1,
$asl:function(){return[W.aF]},
$isa:1,
$asa:function(){return[W.aF]},
$ast:function(){return[W.aF]},
"%":"SourceBufferList"},
aG:{"^":"j;",$isaG:1,"%":"SpeechGrammar"},
n6:{"^":"kv;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.i(c,"$isaG")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aG]},
$isy:1,
$asy:function(){return[W.aG]},
$asp:function(){return[W.aG]},
$isl:1,
$asl:function(){return[W.aG]},
$isa:1,
$asa:function(){return[W.aG]},
$ast:function(){return[W.aG]},
"%":"SpeechGrammarList"},
aH:{"^":"j;0j:length=",$isaH:1,"%":"SpeechRecognitionResult"},
n9:{"^":"ky;",
h:function(a,b){return this.bq(a,H.v(b))},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.dg(a,z)
if(y==null)return
b.$2(y,this.bq(a,y))}},
gF:function(a){var z=H.h([],[P.d])
this.D(a,new W.j_(z))
return z},
gj:function(a){return a.length},
bq:function(a,b){return a.getItem(b)},
dg:function(a,b){return a.key(b)},
$asS:function(){return[P.d,P.d]},
$isJ:1,
$asJ:function(){return[P.d,P.d]},
"%":"Storage"},
j_:{"^":"n:20;a",
$2:function(a,b){return C.a.k(this.a,a)}},
aI:{"^":"j;",$isaI:1,"%":"CSSStyleSheet|StyleSheet"},
j7:{"^":"N;",
O:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ao(a,b,c,d)
z=W.ho("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ae(y).G(0,new W.ae(z))
return y},
"%":"HTMLTableElement"},
nc:{"^":"N;",
O:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ao(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.I.O(z.createElement("table"),b,c,d)
z.toString
z=new W.ae(z)
x=z.ga9(z)
x.toString
z=new W.ae(x)
w=z.ga9(z)
y.toString
w.toString
new W.ae(y).G(0,new W.ae(w))
return y},
"%":"HTMLTableRowElement"},
nd:{"^":"N;",
O:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ao(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.I.O(z.createElement("table"),b,c,d)
z.toString
z=new W.ae(z)
x=z.ga9(z)
y.toString
x.toString
new W.ae(y).G(0,new W.ae(x))
return y},
"%":"HTMLTableSectionElement"},
dZ:{"^":"N;",$isdZ:1,"%":"HTMLTemplateElement"},
ne:{"^":"j;0m:width=","%":"TextMetrics"},
aJ:{"^":"L;",$isaJ:1,"%":"TextTrack"},
aK:{"^":"L;",$isaK:1,"%":"TextTrackCue|VTTCue"},
nf:{"^":"kG;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.i(c,"$isaK")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aK]},
$isy:1,
$asy:function(){return[W.aK]},
$asp:function(){return[W.aK]},
$isl:1,
$asl:function(){return[W.aK]},
$isa:1,
$asa:function(){return[W.aK]},
$ast:function(){return[W.aK]},
"%":"TextTrackCueList"},
ng:{"^":"ep;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.i(c,"$isaJ")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aJ]},
$isy:1,
$asy:function(){return[W.aJ]},
$asp:function(){return[W.aJ]},
$isl:1,
$asl:function(){return[W.aJ]},
$isa:1,
$asa:function(){return[W.aJ]},
$ast:function(){return[W.aJ]},
"%":"TextTrackList"},
nh:{"^":"j;0j:length=","%":"TimeRanges"},
aL:{"^":"j;",$isaL:1,"%":"Touch"},
ni:{"^":"kL;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.i(c,"$isaL")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aL]},
$isy:1,
$asy:function(){return[W.aL]},
$asp:function(){return[W.aL]},
$isl:1,
$asl:function(){return[W.aL]},
$isa:1,
$asa:function(){return[W.aL]},
$ast:function(){return[W.aL]},
"%":"TouchList"},
nj:{"^":"j;0j:length=","%":"TrackDefaultList"},
e3:{"^":"O;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
nx:{"^":"j;",
l:function(a){return String(a)},
"%":"URL"},
cL:{"^":"i9;0n:height=,0m:width=",$iscL:1,"%":"HTMLVideoElement"},
nz:{"^":"L;0j:length=","%":"VideoTrackList"},
nA:{"^":"L;0n:height=,0m:width=","%":"VisualViewport"},
nB:{"^":"j;0m:width=","%":"VTTRegion"},
aV:{"^":"Z;",
gdW:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.C("deltaY is not supported"))},
$isaV:1,
"%":"WheelEvent"},
jj:{"^":"L;",
gdB:function(a){var z,y,x
z=P.H
y=new P.P(0,$.D,[z])
x=H.k(new W.jk(new P.kC(y,[z])),{func:1,ret:-1,args:[P.H]})
this.dc(a)
this.dq(a,W.ex(x,z))
return y},
dq:function(a,b){return a.requestAnimationFrame(H.at(H.k(b,{func:1,ret:-1,args:[P.H]}),1))},
dc:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ise6:1,
"%":"DOMWindow|Window"},
jk:{"^":"n:21;a",
$1:function(a){this.a.a4(0,H.cY(a))}},
e8:{"^":"w;",$ise8:1,"%":"Attr"},
nH:{"^":"kR;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.i(c,"$isaz")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.az]},
$isy:1,
$asy:function(){return[W.az]},
$asp:function(){return[W.az]},
$isl:1,
$asl:function(){return[W.az]},
$isa:1,
$asa:function(){return[W.az]},
$ast:function(){return[W.az]},
"%":"CSSRuleList"},
nI:{"^":"hk;",
l:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
E:function(a,b){var z
if(b==null)return!1
if(!H.as(b,"$isa0",[P.H],"$asa0"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.m(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.ee(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
nJ:{"^":"kT;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.i(c,"$isaB")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aB]},
$isy:1,
$asy:function(){return[W.aB]},
$asp:function(){return[W.aB]},
$isl:1,
$asl:function(){return[W.aB]},
$isa:1,
$asa:function(){return[W.aB]},
$ast:function(){return[W.aB]},
"%":"GamepadList"},
nO:{"^":"kV;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.i(c,"$isw")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.w]},
$isy:1,
$asy:function(){return[W.w]},
$asp:function(){return[W.w]},
$isl:1,
$asl:function(){return[W.w]},
$isa:1,
$asa:function(){return[W.w]},
$ast:function(){return[W.w]},
"%":"MozNamedAttrMap|NamedNodeMap"},
nP:{"^":"kX;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.i(c,"$isaH")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aH]},
$isy:1,
$asy:function(){return[W.aH]},
$asp:function(){return[W.aH]},
$isl:1,
$asl:function(){return[W.aH]},
$isa:1,
$asa:function(){return[W.aH]},
$ast:function(){return[W.aH]},
"%":"SpeechRecognitionResultList"},
nQ:{"^":"kZ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.i(c,"$isaI")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aI]},
$isy:1,
$asy:function(){return[W.aI]},
$asp:function(){return[W.aI]},
$isl:1,
$asl:function(){return[W.aI]},
$isa:1,
$asa:function(){return[W.aI]},
$ast:function(){return[W.aI]},
"%":"StyleSheetList"},
ju:{"^":"cE;da:a<",
D:function(a,b){var z,y,x,w,v,u
H.k(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gF(this),y=z.length,x=this.a,w=J.m(x),v=0;v<z.length;z.length===y||(0,H.F)(z),++v){u=z[v]
b.$2(u,w.Z(x,u))}},
gF:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.h([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.i(z[w],"$ise8")
if(v.namespaceURI==null)C.a.k(y,v.name)}return y},
$asS:function(){return[P.d,P.d]},
$asJ:function(){return[P.d,P.d]}},
jD:{"^":"ju;a",
h:function(a,b){return J.cj(this.a,H.v(b))},
gj:function(a){return this.gF(this).length}},
bF:{"^":"j0;a,b,c,$ti"},
bE:{"^":"bF;a,b,c,$ti"},
jF:{"^":"j1;a,b,c,d,e,$ti",
sdh:function(a){this.d=H.k(a,{func:1,args:[W.O]})},
dH:function(a){var z,y,x
z=this.b
if(z==null)return
y=this.d
x=y!=null
if(x){H.k(y,{func:1,args:[W.O]})
if(x)J.fg(z,this.c,y,!1)}this.b=null
this.sdh(null)
return},
p:{
al:function(a,b,c,d,e){var z=W.ex(new W.jG(c),W.O)
if(z!=null&&!0)J.fi(a,b,z,!1)
return new W.jF(0,a,b,z,!1,[e])}}},
jG:{"^":"n:22;a",
$1:function(a){return this.a.$1(H.i(a,"$isO"))}},
bG:{"^":"b;a",
d1:function(a){var z,y
z=$.d1()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.W[y],W.lo())
for(y=0;y<12;++y)z.i(0,C.u[y],W.lp())}},
Y:function(a){return $.f5().u(0,W.b7(a))},
S:function(a,b,c){var z,y,x
z=W.b7(a)
y=$.d1()
x=y.h(0,H.e(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.c9(x.$4(a,b,c,this))},
$isaj:1,
p:{
ec:function(a){var z,y
z=document.createElement("a")
y=new W.kq(z,window.location)
y=new W.bG(y)
y.d1(a)
return y},
nM:[function(a,b,c,d){H.i(a,"$isY")
H.v(b)
H.v(c)
H.i(d,"$isbG")
return!0},"$4","lo",16,0,11],
nN:[function(a,b,c,d){var z,y,x
H.i(a,"$isY")
H.v(b)
H.v(c)
z=H.i(d,"$isbG").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","lp",16,0,11]}},
t:{"^":"b;$ti",
gw:function(a){return new W.dF(a,this.gj(a),-1,[H.b2(this,a,"t",0)])}},
dQ:{"^":"b;a",
Y:function(a){return C.a.bz(this.a,new W.iq(a))},
S:function(a,b,c){return C.a.bz(this.a,new W.ip(a,b,c))},
$isaj:1},
iq:{"^":"n:9;a",
$1:function(a){return H.i(a,"$isaj").Y(this.a)}},
ip:{"^":"n:9;a,b,c",
$1:function(a){return H.i(a,"$isaj").S(this.a,this.b,this.c)}},
kr:{"^":"b;",
d2:function(a,b,c,d){var z,y,x
this.a.G(0,c)
z=b.aO(0,new W.ks())
y=b.aO(0,new W.kt())
this.b.G(0,z)
x=this.c
x.G(0,C.Y)
x.G(0,y)},
Y:function(a){return this.a.u(0,W.b7(a))},
S:["cK",function(a,b,c){var z,y
z=W.b7(a)
y=this.c
if(y.u(0,H.e(z)+"::"+b))return this.d.dA(c)
else if(y.u(0,"*::"+b))return this.d.dA(c)
else{y=this.b
if(y.u(0,H.e(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.e(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}],
$isaj:1},
ks:{"^":"n:10;",
$1:function(a){return!C.a.u(C.u,H.v(a))}},
kt:{"^":"n:10;",
$1:function(a){return C.a.u(C.u,H.v(a))}},
kD:{"^":"kr;e,a,b,c,d",
S:function(a,b,c){if(this.cK(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cj(a,"template")==="")return this.e.u(0,b)
return!1},
p:{
en:function(){var z,y,x,w,v
z=P.d
y=P.cC(C.t,z)
x=H.o(C.t,0)
w=H.k(new W.kE(),{func:1,ret:z,args:[x]})
v=H.h(["TEMPLATE"],[z])
y=new W.kD(y,P.ab(null,null,null,z),P.ab(null,null,null,z),P.ab(null,null,null,z),null)
y.d2(null,new H.i7(C.t,w,[x,z]),v,null)
return y}}},
kE:{"^":"n:23;",
$1:function(a){return"TEMPLATE::"+H.e(H.v(a))}},
kB:{"^":"b;",
Y:function(a){var z=J.A(a)
if(!!z.$isdU)return!1
z=!!z.$isK
if(z&&W.b7(a)==="foreignObject")return!1
if(z)return!0
return!1},
S:function(a,b,c){if(b==="is"||C.i.cC(b,"on"))return!1
return this.Y(a)},
$isaj:1},
dF:{"^":"b;a,b,c,0d,$ti",
sbo:function(a){this.d=H.z(a,H.o(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbo(J.b4(this.a,z))
this.c=z
return!0}this.sbo(null)
this.c=y
return!1},
gB:function(a){return this.d},
$isb8:1},
jx:{"^":"b;a",$isL:1,$ise6:1,p:{
jy:function(a){if(a===window)return H.i(a,"$ise6")
else return new W.jx(a)}}},
aj:{"^":"b;"},
kq:{"^":"b;a,b",$isnw:1},
eq:{"^":"b;a",
aY:function(a){new W.kO(this).$2(a,null)},
a1:function(a,b){if(b==null)J.dc(a)
else J.bP(b,a)},
dt:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fC(a)
x=J.cj(y.gda(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a2(t)}v="element unprintable"
try{v=J.bq(a)}catch(t){H.a2(t)}try{u=W.b7(a)
this.ds(H.i(a,"$isY"),b,z,v,u,H.i(y,"$isJ"),H.v(x))}catch(t){if(H.a2(t) instanceof P.ax)throw t
else{this.a1(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
ds:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a1(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.Y(a)){this.a1(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.S(a,"is",g)){this.a1(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gF(f)
y=H.h(z.slice(0),[H.o(z,0)])
for(x=f.gF(f).length-1,z=f.a,w=J.m(z);x>=0;--x){if(x>=y.length)return H.f(y,x)
v=y[x]
if(!this.a.S(a,J.fO(v),w.Z(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.Z(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.Z(z,v)
w.dk(z,v)}}if(!!J.A(a).$isdZ)this.aY(a.content)},
$ismO:1},
kO:{"^":"n:24;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dt(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a1(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fD(z)}catch(w){H.a2(w)
v=H.i(z,"$isw")
if(x){u=v.parentNode
if(u!=null)J.bP(u,v)}else J.bP(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.i(y,"$isw")}}},
jw:{"^":"j+hc;"},
jz:{"^":"j+p;"},
jA:{"^":"jz+t;"},
jB:{"^":"j+p;"},
jC:{"^":"jB+t;"},
jI:{"^":"j+p;"},
jJ:{"^":"jI+t;"},
k_:{"^":"j+p;"},
k0:{"^":"k_+t;"},
ka:{"^":"j+S;"},
kb:{"^":"j+S;"},
kc:{"^":"j+p;"},
kd:{"^":"kc+t;"},
ke:{"^":"j+p;"},
kf:{"^":"ke+t;"},
ki:{"^":"j+p;"},
kj:{"^":"ki+t;"},
kp:{"^":"j+S;"},
ek:{"^":"L+p;"},
el:{"^":"ek+t;"},
ku:{"^":"j+p;"},
kv:{"^":"ku+t;"},
ky:{"^":"j+S;"},
kF:{"^":"j+p;"},
kG:{"^":"kF+t;"},
eo:{"^":"L+p;"},
ep:{"^":"eo+t;"},
kK:{"^":"j+p;"},
kL:{"^":"kK+t;"},
kQ:{"^":"j+p;"},
kR:{"^":"kQ+t;"},
kS:{"^":"j+p;"},
kT:{"^":"kS+t;"},
kU:{"^":"j+p;"},
kV:{"^":"kU+t;"},
kW:{"^":"j+p;"},
kX:{"^":"kW+t;"},
kY:{"^":"j+p;"},
kZ:{"^":"kY+t;"}}],["","",,P,{"^":"",
eB:function(a){return a},
a9:function(a){var z,y,x,w,v
if(a==null)return
z=P.a5(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.F)(y),++w){v=H.v(y[w])
z.i(0,v,a[v])}return z},
ld:function(a,b){var z={}
a.D(0,new P.le(z))
return z},
lf:function(a){var z,y
z=new P.P(0,$.D,[null])
y=new P.cM(z,[null])
a.then(H.at(new P.lg(y),1))["catch"](H.at(new P.lh(y),1))
return z},
dz:function(){var z=$.dy
if(z==null){z=J.cf(window.navigator.userAgent,"Opera",0)
$.dy=z}return z},
hh:function(){var z,y
z=$.dv
if(z!=null)return z
y=$.dw
if(y==null){y=J.cf(window.navigator.userAgent,"Firefox",0)
$.dw=y}if(y)z="-moz-"
else{y=$.dx
if(y==null){y=!P.dz()&&J.cf(window.navigator.userAgent,"Trident/",0)
$.dx=y}if(y)z="-ms-"
else z=P.dz()?"-o-":"-webkit-"}$.dv=z
return z},
jl:{"^":"b;",
bY:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}C.a.k(z,a)
C.a.k(this.b,null)
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
if(x)H.a6(P.cl("DateTime is outside valid range: "+y))
return new P.bs(y,!0)}if(a instanceof RegExp)throw H.c(P.cK("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.lf(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.bY(a)
x=this.b
if(v>=x.length)return H.f(x,v)
u=x[v]
z.a=u
if(u!=null)return u
u=P.i0()
z.a=u
C.a.i(x,v,u)
this.e1(a,new P.jn(z,this))
return z.a}if(a instanceof Array){t=a
v=this.bY(t)
x=this.b
if(v>=x.length)return H.f(x,v)
u=x[v]
if(u!=null)return u
s=J.W(t)
r=s.gj(t)
u=this.c?new Array(r):t
C.a.i(x,v,u)
for(x=J.bJ(u),q=0;q<r;++q)x.i(u,q,this.aN(s.h(t,q)))
return u}return a},
dN:function(a,b){this.c=b
return this.aN(a)}},
jn:{"^":"n:33;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.aN(b)
J.ff(z,a,y)
return y}},
le:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
jm:{"^":"jl;a,b,c",
e1:function(a,b){var z,y,x,w
H.k(b,{func:1,args:[,,]})
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.F)(z),++x){w=z[x]
b.$2(w,a[w])}}},
lg:{"^":"n:12;a",
$1:function(a){return this.a.a4(0,a)}},
lh:{"^":"n:12;a",
$1:function(a){return this.a.dK(a)}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
lG:function(a){return Math.sqrt(a)},
ed:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
be:{"^":"b;al:a>,a6:b>,$ti",
l:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
E:function(a,b){if(b==null)return!1
return H.as(b,"$isbe",[P.H],null)&&this.a==J.bT(b)&&this.b==b.ga6(b)},
gv:function(a){var z,y,x
z=J.aw(this.a)
y=J.aw(this.b)
y=P.ed(P.ed(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
kk:{"^":"b;"},
a0:{"^":"kk;$ti"}}],["","",,P,{"^":"",fY:{"^":"j;",$isfY:1,"%":"SVGAnimatedLength"},m5:{"^":"K;0n:height=,0m:width=","%":"SVGFEBlendElement"},m6:{"^":"K;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},m7:{"^":"K;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},m8:{"^":"K;0n:height=,0m:width=","%":"SVGFECompositeElement"},m9:{"^":"K;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},ma:{"^":"K;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},mb:{"^":"K;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},mc:{"^":"K;0n:height=,0m:width=","%":"SVGFEFloodElement"},md:{"^":"K;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},me:{"^":"K;0n:height=,0m:width=","%":"SVGFEImageElement"},mf:{"^":"K;0n:height=,0m:width=","%":"SVGFEMergeElement"},mg:{"^":"K;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},mh:{"^":"K;0n:height=,0m:width=","%":"SVGFEOffsetElement"},mi:{"^":"K;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},mj:{"^":"K;0n:height=,0m:width=","%":"SVGFETileElement"},mk:{"^":"K;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},mn:{"^":"K;0n:height=,0m:width=","%":"SVGFilterElement"},mo:{"^":"bv;0n:height=,0m:width=","%":"SVGForeignObjectElement"},hB:{"^":"bv;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bv:{"^":"K;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},mv:{"^":"bv;0n:height=,0m:width=","%":"SVGImageElement"},ba:{"^":"j;",$isba:1,"%":"SVGLength"},mB:{"^":"k5;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){H.u(b)
H.i(c,"$isba")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$asp:function(){return[P.ba]},
$isl:1,
$asl:function(){return[P.ba]},
$isa:1,
$asa:function(){return[P.ba]},
$ast:function(){return[P.ba]},
"%":"SVGLengthList"},mC:{"^":"K;0n:height=,0m:width=","%":"SVGMaskElement"},bd:{"^":"j;",$isbd:1,"%":"SVGNumber"},mP:{"^":"kh;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){H.u(b)
H.i(c,"$isbd")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$asp:function(){return[P.bd]},
$isl:1,
$asl:function(){return[P.bd]},
$isa:1,
$asa:function(){return[P.bd]},
$ast:function(){return[P.bd]},
"%":"SVGNumberList"},mU:{"^":"K;0n:height=,0m:width=","%":"SVGPatternElement"},mW:{"^":"j;0j:length=","%":"SVGPointList"},mY:{"^":"j;0n:height=,0m:width=","%":"SVGRect"},mZ:{"^":"hB;0n:height=,0m:width=","%":"SVGRectElement"},dU:{"^":"K;",$isdU:1,"%":"SVGScriptElement"},na:{"^":"kA;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){H.u(b)
H.v(c)
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$asp:function(){return[P.d]},
$isl:1,
$asl:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$ast:function(){return[P.d]},
"%":"SVGStringList"},K:{"^":"Y;",
O:function(a,b,c,d){var z,y,x,w,v,u
z=H.h([],[W.aj])
C.a.k(z,W.ec(null))
C.a.k(z,W.en())
C.a.k(z,new W.kB())
c=new W.eq(new W.dQ(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).dQ(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ae(w)
u=z.ga9(z)
for(z=J.m(v);x=u.firstChild,x!=null;)z.K(v,x)
return v},
$isK:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},nb:{"^":"bv;0n:height=,0m:width=","%":"SVGSVGElement"},bi:{"^":"j;",$isbi:1,"%":"SVGTransform"},nk:{"^":"kN;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){H.u(b)
H.i(c,"$isbi")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$asp:function(){return[P.bi]},
$isl:1,
$asl:function(){return[P.bi]},
$isa:1,
$asa:function(){return[P.bi]},
$ast:function(){return[P.bi]},
"%":"SVGTransformList"},ny:{"^":"bv;0n:height=,0m:width=","%":"SVGUseElement"},k4:{"^":"j+p;"},k5:{"^":"k4+t;"},kg:{"^":"j+p;"},kh:{"^":"kg+t;"},kz:{"^":"j+p;"},kA:{"^":"kz+t;"},kM:{"^":"j+p;"},kN:{"^":"kM+t;"}}],["","",,P,{"^":"",aq:{"^":"b;",$isl:1,
$asl:function(){return[P.an]},
$isa:1,
$asa:function(){return[P.an]},
$isjc:1}}],["","",,P,{"^":"",lM:{"^":"j;0j:length=","%":"AudioBuffer"},lN:{"^":"jv;",
h:function(a,b){return P.a9(a.get(H.v(b)))},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a9(y.value[1]))}},
gF:function(a){var z=H.h([],[P.d])
this.D(a,new P.fZ(z))
return z},
gj:function(a){return a.size},
$asS:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"AudioParamMap"},fZ:{"^":"n:2;a",
$2:function(a,b){return C.a.k(this.a,a)}},lO:{"^":"L;0j:length=","%":"AudioTrackList"},h_:{"^":"L;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mR:{"^":"h_;0j:length=","%":"OfflineAudioContext"},jv:{"^":"j+S;"}}],["","",,P,{"^":"",h1:{"^":"j;",$ish1:1,"%":"WebGLBuffer"},hw:{"^":"j;",$ishw:1,"%":"WebGLFramebuffer"},iE:{"^":"j;",$isiE:1,"%":"WebGLProgram"},n_:{"^":"j;",
bx:function(a,b){return a.activeTexture(b)},
bA:function(a,b,c){return a.attachShader(b,c)},
bB:function(a,b,c){return a.bindBuffer(b,c)},
bD:function(a,b,c){return a.bindFramebuffer(b,c)},
bE:function(a,b,c){return a.bindTexture(b,c)},
bF:function(a,b){return a.blendEquation(b)},
bG:function(a,b,c){return a.blendFunc(b,c)},
bH:function(a,b,c,d){return a.bufferData(b,c,d)},
bI:function(a,b){return a.clear(b)},
bJ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
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
am:function(a){return P.a9(a.getContextAttributes())},
aP:function(a){return a.getError()},
aR:function(a,b){return a.getProgramInfoLog(b)},
aS:function(a,b,c){return a.getProgramParameter(b,c)},
aU:function(a,b){return a.getShaderInfoLog(b)},
aV:function(a,b,c){return a.getShaderParameter(b,c)},
aW:function(a,b,c){return a.getUniformLocation(b,c)},
c_:function(a,b){return a.linkProgram(b)},
c7:function(a,b,c){return a.pixelStorei(b,c)},
aZ:function(a,b,c){return a.shaderSource(b,c)},
b_:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aL:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.A(g)
if(!!z.$iscu)y=!0
else y=!1
if(y){this.aD(a,b,c,d,e,f,P.eB(g))
return}if(!!z.$isbZ)y=!0
else y=!1
if(y){this.aE(a,b,c,d,e,f,g)
return}if(!!z.$isbr)y=!0
else y=!1
if(y){this.aF(a,b,c,d,e,f,g)
return}if(!!z.$iscL)y=!0
else y=!1
if(y){this.aG(a,b,c,d,e,f,g)
return}if(!!z.$isct)z=!0
else z=!1
if(z){this.aH(a,b,c,d,e,f,g)
return}throw H.c(P.cl("Incorrect number or type of arguments"))},
ca:function(a,b,c,d,e,f,g){return this.aL(a,b,c,d,e,f,g,null,null,null)},
aD:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aE:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aF:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aG:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aH:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cb:function(a,b,c,d){return a.texParameteri(b,c,d)},
cd:function(a,b,c){return a.uniform1f(b,c)},
ce:function(a,b,c){return a.uniform1fv(b,c)},
cf:function(a,b,c){return a.uniform1i(b,c)},
cg:function(a,b,c){return a.uniform1iv(b,c)},
ci:function(a,b,c){return a.uniform2fv(b,c)},
cj:function(a,b,c){return a.uniform3fv(b,c)},
ck:function(a,b,c){return a.uniform4fv(b,c)},
cl:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cm:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cn:function(a,b){return a.useProgram(b)},
co:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cq:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},n0:{"^":"j;",
dD:function(a,b){return a.beginTransformFeedback(b)},
dG:function(a,b){return a.bindVertexArray(b)},
dS:function(a){return a.createVertexArray()},
dX:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dY:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dZ:function(a){return a.endTransformFeedback()},
el:function(a,b,c,d){this.dw(a,b,H.r(c,"$isa",[P.d],"$asa"),d)
return},
dw:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
em:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bx:function(a,b){return a.activeTexture(b)},
bA:function(a,b,c){return a.attachShader(b,c)},
bB:function(a,b,c){return a.bindBuffer(b,c)},
bD:function(a,b,c){return a.bindFramebuffer(b,c)},
bE:function(a,b,c){return a.bindTexture(b,c)},
bF:function(a,b){return a.blendEquation(b)},
bG:function(a,b,c){return a.blendFunc(b,c)},
bH:function(a,b,c,d){return a.bufferData(b,c,d)},
bI:function(a,b){return a.clear(b)},
bJ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
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
am:function(a){return P.a9(a.getContextAttributes())},
aP:function(a){return a.getError()},
aR:function(a,b){return a.getProgramInfoLog(b)},
aS:function(a,b,c){return a.getProgramParameter(b,c)},
aU:function(a,b){return a.getShaderInfoLog(b)},
aV:function(a,b,c){return a.getShaderParameter(b,c)},
aW:function(a,b,c){return a.getUniformLocation(b,c)},
c_:function(a,b){return a.linkProgram(b)},
c7:function(a,b,c){return a.pixelStorei(b,c)},
aZ:function(a,b,c){return a.shaderSource(b,c)},
b_:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aL:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.A(g)
if(!!z.$iscu)y=!0
else y=!1
if(y){this.aD(a,b,c,d,e,f,P.eB(g))
return}if(!!z.$isbZ)y=!0
else y=!1
if(y){this.aE(a,b,c,d,e,f,g)
return}if(!!z.$isbr)y=!0
else y=!1
if(y){this.aF(a,b,c,d,e,f,g)
return}if(!!z.$iscL)y=!0
else y=!1
if(y){this.aG(a,b,c,d,e,f,g)
return}if(!!z.$isct)z=!0
else z=!1
if(z){this.aH(a,b,c,d,e,f,g)
return}throw H.c(P.cl("Incorrect number or type of arguments"))},
ca:function(a,b,c,d,e,f,g){return this.aL(a,b,c,d,e,f,g,null,null,null)},
aD:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aE:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aF:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aG:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aH:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cb:function(a,b,c,d){return a.texParameteri(b,c,d)},
cd:function(a,b,c){return a.uniform1f(b,c)},
ce:function(a,b,c){return a.uniform1fv(b,c)},
cf:function(a,b,c){return a.uniform1i(b,c)},
cg:function(a,b,c){return a.uniform1iv(b,c)},
ci:function(a,b,c){return a.uniform2fv(b,c)},
cj:function(a,b,c){return a.uniform3fv(b,c)},
ck:function(a,b,c){return a.uniform4fv(b,c)},
cl:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cm:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cn:function(a,b){return a.useProgram(b)},
co:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cq:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},iR:{"^":"j;",$isiR:1,"%":"WebGLShader"},j8:{"^":"j;",$isj8:1,"%":"WebGLTexture"},jd:{"^":"j;",$isjd:1,"%":"WebGLUniformLocation"},jh:{"^":"j;",$isjh:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",n7:{"^":"kx;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return P.a9(this.df(a,b))},
i:function(a,b,c){H.u(b)
H.i(c,"$isJ")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
df:function(a,b){return a.item(b)},
$asp:function(){return[[P.J,,,]]},
$isl:1,
$asl:function(){return[[P.J,,,]]},
$isa:1,
$asa:function(){return[[P.J,,,]]},
$ast:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},kw:{"^":"j+p;"},kx:{"^":"kw+t;"}}],["","",,G,{"^":"",
jo:function(a){var z,y,x,w
z=H.h(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.f(z,y)
C.a.i(z,y,w+H.e(z[y]))}return C.a.a5(z,"\n")},
e9:function(a,b,c){var z,y,x,w
z=J.m(a)
y=z.bN(a,b)
z.aZ(a,y,c)
z.bK(a,y)
x=H.c9(z.aV(a,y,35713))
if(x!=null&&!x){w=z.aU(a,y)
P.aa("E:Compilation failed:")
P.aa("E:"+G.jo(c))
P.aa("E:Failure:")
P.aa(C.i.H("E:",w))
throw H.c(w)}return y},
dG:function(a,b){var z,y,x
H.r(a,"$isa",[T.q],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.f.i(b,z,J.bT(a[y]))
if(y>=a.length)return H.f(a,y)
C.f.i(b,z+1,J.ci(a[y]))
z+=2
if(y>=a.length)return H.f(a,y)
x=J.da(a[y])
if(z>=b.length)return H.f(b,z)
b[z]=x}return b},
hs:function(a,b){var z,y
H.r(a,"$isa",[T.a1],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.f.i(b,z,J.bT(a[y]))
if(y>=a.length)return H.f(a,y)
C.f.i(b,z+1,J.ci(a[y]))}return b},
ht:function(a,b){var z,y,x,w,v
H.r(a,"$isa",[T.ad],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.f.i(b,z,J.bT(a[y]))
if(y>=a.length)return H.f(a,y)
C.f.i(b,z+1,J.ci(a[y]))
x=z+2
if(y>=a.length)return H.f(a,y)
w=J.da(a[y])
v=b.length
if(x>=v)return H.f(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.f(a,y)
w=J.fF(a[y])
if(z>=v)return H.f(b,z)
b[z]=w}return b},
hr:function(a,b){var z,y
H.r(a,"$isa",[[P.a,P.E]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.n.i(b,z,J.b4(a[y],0))
if(y>=a.length)return H.f(a,y)
C.n.i(b,z+1,J.b4(a[y],1))
if(y>=a.length)return H.f(a,y)
C.n.i(b,z+2,J.b4(a[y],2))
if(y>=a.length)return H.f(a,y)
C.n.i(b,z+3,J.b4(a[y],3))}return b},
jY:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.ar(z,[H.o(z,0)]),y=y.gw(y),x=b.x,w=[[P.a,P.E]],v=[P.an],u=[T.ad],t=[T.q],s=[T.a1];y.t();){r=y.d
if(!x.ai(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.eD>0)H.bM("I: "+r)
continue}q=z.h(0,r)
switch($.af().h(0,r).a){case"vec2":b.a_(r,G.hs(H.bO(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.a_(r,G.dG(H.bO(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.a_(r,G.ht(H.bO(q,"$isa",u,"$asa"),null),4)
break
case"float":b.a_(r,new Float32Array(H.c6(H.bO(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.a_(r,G.hr(H.bO(q,"$isa",w,"$asa"),null),4)
break}}},
dH:function(a,b,c){var z,y,x,w,v,u,t,s
z=b.d
y=b.e.x
x=P.d
w=P.a5(x,P.b)
v=J.fs(z.a)
u=new G.ia(z,v,4,w,y,0,-1,P.a5(x,P.aq),C.i.H("meshdata:",a),!1,!0)
x=G.dG(c.d,null)
w.i(0,"aPosition",J.cg(z.a))
u.ch=x
u.b6("aPosition",x,3)
t=$.af().h(0,"aPosition")
if(t==null)H.a6("Unknown canonical aPosition")
s=y.h(0,"aPosition")
J.bQ(z.a,v)
z.bW(0,s,0)
z.cp(0,w.h(0,"aPosition"),s,t.b7(),5126,!1,0,0)
y=H.r(c.cP(),"$isa",[P.E],"$asa")
u.y=J.cg(z.a)
x=u.ch.length
if(x<768){u.saw(new Uint8Array(H.c6(y)))
u.Q=5121}else if(x<196608){u.saw(new Uint16Array(H.c6(y)))
u.Q=5123}else{u.saw(new Uint32Array(H.c6(y)))
u.Q=5125}J.bQ(z.a,v)
y=u.y
x=u.cx
J.ce(z.a,34963,y)
J.d8(z.a,34963,x,35048)
G.jY(c,u)
return u},
aT:{"^":"b;"},
aU:{"^":"aT;d,a,b,c",
aq:function(){return this.d},
l:function(a){var z,y,x,w
z=H.h(["{"+new H.e2(H.ll(this)).l(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.ar(y,[H.o(y,0)]),x=x.gw(x);x.t();){w=x.d
C.a.k(z,H.e(w)+": "+H.e(y.h(0,w)))}return C.a.a5(z,"\n")}},
h3:{"^":"b;0a,b",
bW:function(a,b,c){J.fz(this.a,b)
if(c>0)J.fU(this.a,b,c)},
cp:function(a,b,c,d,e,f,g,h){J.ce(this.a,34962,b)
J.fV(this.a,c,d,e,!1,g,h)}},
hv:{"^":"b;a,b,c,d,e"},
ai:{"^":"b;ah:a>,a2:b>,a3:c>",p:{
M:function(a,b,c){return new G.ai(a,b,c)}}},
cr:{"^":"b;ah:a>,a2:b>,a3:c>,d"},
cs:{"^":"b;a,b,c,d,e",
W:function(a){switch($.af().h(0,a).a){case"vec2":this.e.i(0,a,H.h([],[T.a1]))
break
case"vec3":this.e.i(0,a,H.h([],[T.q]))
break
case"vec4":this.e.i(0,a,H.h([],[T.ad]))
break
case"float":this.e.i(0,a,H.h([],[P.an]))
break
case"uvec4":this.e.i(0,a,H.h([],[[P.a,P.E]]))
break}},
ap:function(a){var z,y,x,w,v
H.r(a,"$isa",[T.q],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.F)(a),++x){w=a[x]
w.toString
v=new T.q(new Float32Array(3))
v.A(w)
C.a.k(y,v)}},
b2:function(a,b){var z,y,x,w,v,u,t
z=[T.a1]
H.r(b,"$isa",z,"$asa")
y=H.r(this.e.h(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.F)(b),++w){v=b[w]
v.toString
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.k(y,new T.a1(u))}},
b3:function(a,b){var z,y,x,w,v,u
z=[T.q]
H.r(b,"$isa",z,"$asa")
y=H.r(this.e.h(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.F)(b),++w){v=b[w]
v.toString
u=new T.q(new Float32Array(3))
u.A(v)
x.k(y,u)}},
b4:function(a,b){var z,y,x,w,v,u
z=[T.ad]
H.r(b,"$isa",z,"$asa")
y=H.r(this.e.h(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.F)(b),++w){v=b[w]
v.toString
u=new T.ad(new Float32Array(4))
u.A(v)
x.k(y,u)}},
cP:function(){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.h(x,[P.E])
for(x=z.length,v=0,u=0;u<z.length;z.length===x||(0,H.F)(z),++u){t=z[u]
C.a.i(w,v,t.a)
C.a.i(w,v+1,t.b)
C.a.i(w,v+2,t.c)
v+=3}for(z=y.length,u=0;u<y.length;y.length===z||(0,H.F)(y),++u){s=y[u]
x=s.a
C.a.i(w,v,x)
C.a.i(w,v+1,s.b)
r=s.c
C.a.i(w,v+2,r)
C.a.i(w,v+3,x)
C.a.i(w,v+4,r)
C.a.i(w,v+5,s.d)
v+=6}return w},
l:function(a){var z,y,x,w,v
z=H.h(["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"],[P.d])
for(y=this.e,x=new H.ar(y,[H.o(y,0)]),x=x.gw(x);x.t();){w=x.d
v=$.af().h(0,w).a
C.a.k(z,H.e(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.a5(z," ")}},
cB:{"^":"aT;"},
iW:{"^":"cB;z,Q,ch,cx,cy,db,dx,dy,fr,fx,d,e,f,a,b,c",
l:function(a){return"SL: p:"+H.e(this.z)+"  d:"+H.e(this.Q)+"  r:"+this.ch+"  a:"+H.e(this.cx)}},
hH:{"^":"aU;x,y,z,d,a,b,c",
aq:function(){var z,y,x
z=this.y
y=this.z
G.hI(z,y,this.x)
x=this.d
x.i(0,"uLightDescs",z)
x.i(0,"uLightTypes",y)
return x},
p:{
hI:function(a,b,c){var z,y,x,w,v,u,t,s,r
H.r(c,"$isa",[G.cB],"$asa")
z=a.length
C.f.bX(a,0,z,0)
C.f.bX(b,0,4,0)
for(y=c.length,x=0,w=0;w<c.length;c.length===y||(0,H.F)(c),++w){v=c[w]
u=x*16
t=v.z.a
s=t[0]
if(u>=z)return H.f(a,u)
a[u]=s
s=u+1
r=t[1]
if(s>=z)return H.f(a,s)
a[s]=r
r=u+2
t=t[2]
if(r>=z)return H.f(a,r)
a[r]=t
t=u+4
r=v.Q.a
s=r[0]
if(t>=z)return H.f(a,t)
a[t]=s
s=u+5
t=r[1]
if(s>=z)return H.f(a,s)
a[s]=t
t=u+6
r=r[2]
if(t>=z)return H.f(a,t)
a[t]=r
r=u+8
t=v.e.a
s=t[0]
if(r>=z)return H.f(a,r)
a[r]=s
s=u+9
r=t[1]
if(s>=z)return H.f(a,s)
a[s]=r
r=u+10
t=t[2]
if(r>=z)return H.f(a,r)
a[r]=t
t=u+12
r=v.f.a
s=r[0]
if(t>=z)return H.f(a,t)
a[t]=s
s=u+13
t=r[1]
if(s>=z)return H.f(a,s)
a[s]=t
t=u+14
r=r[2]
if(t>=z)return H.f(a,t)
a[t]=r
r=u+7
if(r>=z)return H.f(a,r)
a[r]=v.ch
r=u+11
t=Math.cos(v.cx)
if(r>=z)return H.f(a,r)
a[r]=t
u+=15
if(u>=z)return H.f(a,u)
a[u]=v.cy
if(x<0||x>=4)return H.f(b,x)
b[x]=v.d;++x}}}},
e0:{"^":"b;a,b,c"},
e_:{"^":"b;a,b,c"},
i8:{"^":"aU;d,a,b,c",p:{
dO:function(a){var z=P.a5(P.d,P.b)
z.i(0,"cDepthTest",!0)
z.i(0,"cDepthWrite",!0)
z.i(0,"cBlendEquation",$.eO())
z.i(0,"cStencilFunc",$.eV())
return new G.i8(z,a,!1,!0)}}},
ia:{"^":"aT;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
saw:function(a){this.cx=H.r(a,"$isa",[P.E],"$asa")},
b6:function(a,b,c){var z,y
C.i.at(a,0)
H.i(b,"$isaq")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.ce(z.a,34962,y)
J.d8(z.a,34962,b,35048)},
cQ:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a_:function(a,b,c){var z,y,x,w,v
z=J.d5(a,0)===105
if(z&&this.z===0)this.z=C.b.aa(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.cg(x.a))
this.b6(a,b,c)
w=$.af().h(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.h(0,a)
J.bQ(x.a,this.e)
x.bW(0,v,z?1:0)
x.cp(0,y.h(0,a),v,w.b7(),5126,!1,0,0)},
l:function(a){var z,y,x,w
z=this.cx
y=H.h(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=new H.ar(z,[H.o(z,0)]),x=x.gw(x);x.t();){w=x.d
C.a.k(y,H.e(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.a5(y,"  ")}},
iu:{"^":"aU;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cL:function(a,b){var z
if(typeof a!=="number")return a.ep()
if(typeof b!=="number")return H.bn(b)
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
aq:function(){var z,y,x
z=this.x
y=this.d
y.i(0,"uEyePosition",z.aQ())
x=this.cy
x.A(z.d)
z=this.cx
z.A(this.db)
z.c1(0,x)
y.i(0,"uPerspectiveViewMatrix",z)
return y}},
m3:{"^":"b;"},
iL:{"^":"aT;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cU:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
x.i(0,t,J.db(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
x.i(0,t,J.db(w.a,v,t))}},
cY:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.h([],[P.d])
x=H.h([],[P.d])
for(y=new H.ar(y,[H.o(y,0)]),y=y.gw(y);y.t();){w=y.d
if(!z.ai(0,w))C.a.k(x,w)}for(z=this.x,z=P.k7(z,z.r,H.o(z,0)),y=this.Q;z.t();){w=z.d
if(!y.u(0,w))C.a.k(x,w)}return x},
d0:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.r(b,"$isJ",[P.d,P.b],"$asJ")
z=Date.now()
for(y=new H.ar(b,[H.o(b,0)]),y=y.gw(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.t();){s=y.d
switch(J.d5(s,0)){case 117:if(w.ai(0,s)){r=b.h(0,s)
if(v.ai(0,s))H.bM("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.i(0,s,a)
q=$.af().h(0,s)
if(q==null)H.a6("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.u(r)
J.ck(x.a,p,r)}else if(!!J.A(r).$ishM)J.fS(x.a,p,r)
break
case"float":if(q.c===0){H.cT(r)
J.fQ(x.a,p,r)}else if(!!J.A(r).$isaq)J.fR(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.av(r,"$isT").a
J.di(x.a,p,!1,s)}else if(!!J.A(r).$isaq)J.di(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=H.av(r,"$isbc").a
J.dh(x.a,p,!1,s)}else if(!!J.A(r).$isaq)J.dh(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.dg(o,p,H.av(r,"$isad").a)
else J.dg(o,p,H.i(r,"$isaq"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.df(o,p,H.av(r,"$isq").a)
else J.df(o,p,H.i(r,"$isaq"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.de(o,p,H.av(r,"$isa1").a)
else J.de(o,p,H.i(r,"$isaq"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.bn(s)
J.d6(x.a,33984+s)
s=H.av(r,"$iscJ").b
J.bp(x.a,3553,s)
s=this.ch
J.ck(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.H()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.bn(s)
J.d6(x.a,33984+s)
s=H.av(r,"$iscJ").b
J.bp(x.a,34067,s)
s=this.ch
J.ck(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.H()
this.ch=s+1
break
default:H.bM("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":s=J.aR(r,!0)
o=x.a
if(s)J.bR(o,2929)
else J.ch(o,2929)
break
case"cStencilFunc":H.av(r,"$ise0")
s=r.a
o=x.a
if(s===1281)J.ch(o,2960)
else{J.bR(o,2960)
o=r.b
n=r.c
J.fM(x.a,s,o,n)}break
case"cDepthWrite":H.c9(r)
J.ft(x.a,r)
break
case"cBlendEquation":H.av(r,"$ise_")
s=r.a
o=x.a
if(s===1281)J.ch(o,3042)
else{J.bR(o,3042)
o=r.b
n=r.c
J.fm(x.a,o,n)
J.fl(x.a,s)}break}++t
break}}m=P.hl(0,0,0,Date.now()-new P.bs(z,!1).a,0,0)
""+t
m.l(0)},
cO:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.r(b,"$isa",[G.aU],"$asa")
Date.now()
z=this.d
J.fT(z.a,this.r)
this.ch=0
this.z.T(0)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.F)(b),++x){w=b[x]
this.d0(w.a,w.aq())}y=this.Q
y.T(0)
for(v=a.cy,v=new H.ar(v,[H.o(v,0)]),v=v.gw(v);v.t();)y.k(0,v.d)
u=this.cY()
if(u.length!==0)P.aa("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
y=a.d
v=a.e
J.bQ(y.a,v)
t=this.e.f.length>0
v=a.f
y=a.cQ()
s=a.Q
r=a.z
if(t)J.fj(z.a,v)
if(s!==-1){q=z.a
if(r>1)J.fx(q,v,y,s,0,r)
else J.fw(q,v,y,s,0)}else{s=z.a
if(r>1)J.fv(s,v,0,y,r)
else J.fu(s,v,0,y)}if(t)J.fA(z.a)},
p:{
dT:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
y=P.ab(null,null,null,z)
x=c.b
w=d.b
v=H.r(c.f,"$isa",[z],"$asa")
u=J.fq(b.a)
t=G.e9(b.a,35633,x)
J.d7(b.a,u,t)
s=G.e9(b.a,35632,w)
J.d7(b.a,u,s)
if(v.length>0)J.fP(b.a,u,v,35980)
J.fK(b.a,u)
if(!H.c9(J.fJ(b.a,u,35714)))H.a6(J.fI(b.a,u))
z=new G.iL(b,c,d,u,P.cC(c.c,z),P.a5(z,P.b),P.a5(z,z),y,a,!1,!0)
z.cU(a,b,c,d)
return z}}},
G:{"^":"b;a,b,c",
b7:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
iS:{"^":"b;a,0b,c,d,e,f,r,x",
b1:function(a){var z,y,x,w,v
H.r(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.F)(a),++w){v=a[w]
C.a.k(y,v)
x.i(0,v,this.r);++this.r}C.a.an(y)},
a0:function(a){var z,y,x
H.r(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.F)(a),++x)C.a.k(y,a[x])
C.a.an(y)},
b5:function(a){var z,y
H.r(a,"$isa",[P.d],"$asa")
for(z=this.e,y=0;y<3;++y)C.a.k(z,a[y])
C.a.an(z)},
cW:function(a,b){this.b=this.bb(!0,H.r(a,"$isa",[P.d],"$asa"),b)},
b9:function(a){return this.cW(a,null)},
b8:function(a,b){var z=[P.d]
this.b=this.bb(!1,H.r(a,"$isa",z,"$asa"),H.r(b,"$isa",z,"$asa"))},
cV:function(a){return this.b8(a,null)},
bb:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.r(b,"$isa",z,"$asa")
H.r(c,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.h(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.F)(y),++u){t=y[u]
s=$.af().h(0,t)
C.a.k(w,"layout (location="+H.e(v.h(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.k(w,"")
r=x?"in":"out"
if(x)C.a.k(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){q=z[u]
s=$.af().h(0,q)
C.a.k(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){q=z[u]
s=$.af().h(0,q)
C.a.k(w,r+" "+s.a+" "+H.e(q)+";")}C.a.k(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){q=z[u]
s=$.af().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.k(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.k(w,"")
if(c!=null)C.a.G(w,c)
if(a)C.a.k(w,"void main(void) {")
C.a.G(w,b)
if(a)C.a.k(w,"}")
return C.a.a5(w,"\n")},
p:{
c1:function(a){var z,y
z=P.d
y=[z]
return new G.iS(a,H.h([],y),H.h([],y),H.h([],y),H.h([],y),0,P.a5(z,P.E))}}},
dV:{"^":"aT;",
aQ:function(){var z,y,x
z=this.e
y=this.d.a
x=z.a
x[0]=y[12]
x[1]=y[13]
x[2]=y[14]
return z},
e6:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
b=new T.q(new Float32Array(3))
b.a8(0,1,0)
z=this.aQ()
y=new Float32Array(3)
x=new T.q(y)
x.A(z)
w=a.a
y[0]=y[0]-w[0]
y[1]=y[1]-w[1]
y[2]=y[2]-w[2]
x.C(0)
v=b.bP(x)
v.C(0)
u=x.bP(v)
u.C(0)
t=v.aI(z)
s=u.aI(z)
z=x.aI(z)
r=v.a
q=r[0]
p=u.a
o=p[0]
n=y[0]
m=r[1]
l=p[1]
k=y[1]
r=r[2]
p=p[2]
y=y[2]
j=this.d.a
j[15]=1
j[14]=-z
j[13]=-s
j[12]=-t
j[11]=0
j[10]=y
j[9]=p
j[8]=r
j[7]=0
j[6]=k
j[5]=l
j[4]=m
j[3]=0
j[2]=n
j[1]=o
j[0]=q},
c0:function(a){return this.e6(a,null)}},
j9:{"^":"b;a,b,c,d,e,f,r"},
cJ:{"^":"b;",
l:function(a){return"Texture["+H.e(this.a)+", "+this.c+"]"}},
hJ:{"^":"cJ;f,a,b,c,d,e"}}],["","",,Y,{"^":"",
jL:function(a){var z,y,x,w
z=J.W(a)
y=new Array(z.gj(a))
y.fixed$length=Array
x=H.h(y,[P.an])
for(w=0;w<z.gj(a);++w){y=z.h(a,w)
if(typeof y==="number"&&Math.floor(y)===y)C.a.i(x,w,J.aS(z.h(a,w)))
else{y=z.h(a,w)
if(typeof y==="number")C.a.i(x,w,H.cT(z.h(a,w)))}}return x},
k1:function(a){var z,y,x,w
z=J.W(a)
y=new Array(z.gj(a))
y.fixed$length=Array
x=H.h(y,[P.E])
for(w=0;w<z.gj(a);++w)C.a.i(x,w,H.u(z.h(a,w)))
return x},
jK:function(a){var z,y,x
z=J.W(a)
y=H.X(z.h(a,"skinIndices"))
H.X(z.h(a,"skinWeights"))
if(y==null||J.ao(y)===0)return 0
z=J.ao(z.h(a,"vertices"))
if(typeof z!=="number")return z.aa()
z=C.m.J(z,3)
x=C.b.aa(J.ao(y),z)
P.aa("Skin multiplier is "+x)
return x},
hK:function(b5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
z=H.h([],[G.cs])
y=Y.jK(b5)
x=J.W(b5)
w=Y.k1(H.X(x.h(b5,"faces")))
v=w.length
P.aa("faces: "+v)
u=Y.ds(H.X(x.h(b5,"vertices")))
t=Y.ds(H.X(x.h(b5,"normals")))
s=y===0
r=s?null:Y.dt(y,H.X(x.h(b5,"skinIndices")))
q=s?null:Y.dt(y,Y.jL(H.X(x.h(b5,"skinWeights"))))
if(q!=null)for(s=q.length,p=0;p<s;++p){o=q[p]
n=o.a
m=n[0]+n[1]+n[2]+n[3]
if(m<0.98||m>1.02)H.bM("bad vector: "+H.e(o))}l=Y.h9(H.X(J.b4(x.h(b5,"uvs"),0)))
for(x=y>0,s=[T.q],n=l.length>0,k=t.length>0,j=[G.ai],i=[G.cr],h=P.d,g=[P.a,,],f=[P.E],e=[T.a1],d=r&&C.a,c=q&&C.a,b=[T.ad],a=0;a<v;){a0=a+1
if(a<0)return H.f(w,a)
a1=w[a]
if(typeof a1!=="number")return a1.eo()
m=(a1&1)===0?3:4
a2=H.h([],f)
for(a=a0,a3=0;a3<m;++a3,a=a0){a0=a+1
if(a<0||a>=v)return H.f(w,a)
C.a.k(a2,w[a])}if((a1&2)!==0){a0=a+1
if(a<0||a>=v)return H.f(w,a)
a4=w[a]
a=a0}else a4=0
a5=H.h([],e)
if((a1&8)!==0)for(a3=0;a3<m;++a3,a=a0){a0=a+1
if(a<0||a>=v)return H.f(w,a)
C.a.k(a5,C.a.h(l,w[a]))}a6=H.h([],s)
if((a1&16)!==0){a0=a+1
if(a<0||a>=v)return H.f(w,a)
a7=C.a.h(t,w[a])
for(a3=0;a3<m;++a3)C.a.k(a6,a7)
a=a0}if((a1&32)!==0)for(a3=0;a3<m;++a3,a=a0){a0=a+1
if(a<0||a>=v)return H.f(w,a)
C.a.k(a6,C.a.h(t,w[a]))}a8=H.h([],f)
if((a1&64)!==0){a0=a+1
if(a<0||a>=v)return H.f(w,a)
a9=w[a]
for(a3=0;a3<m;++a3)C.a.k(a8,a9)
a=a0}if((a1&128)!==0)for(a3=0;a3<m;++a3,a=a0){a0=a+1
if(a<0||a>=v)return H.f(w,a)
C.a.k(a8,w[a])}if(typeof a4!=="number")return H.bn(a4)
for(;b0=z.length,b0<=a4;){b1=new G.cs(!1,H.h([],j),H.h([],i),H.h([],s),P.a5(h,g))
if(k)b1.W("aNormal")
if(n)b1.W("aTexUV")
if(x){b1.W("aBoneIndex")
b1.W("aBoneWeight")}C.a.k(z,b1)}if(a4<0)return H.f(z,a4)
b1=z[a4]
b2=H.h([],s)
for(b0=a2.length,p=0;p<a2.length;a2.length===b0||(0,H.F)(a2),++p)C.a.k(b2,C.a.h(u,a2[p]))
a0=b1.d.length
if(m===3){H.r(b2,"$isa",s,"$asa")
C.a.k(b1.b,new G.ai(a0,a0+1,a0+2))
b1.ap(b2)}else{H.r(b2,"$isa",s,"$asa")
C.a.k(b1.c,new G.cr(a0,a0+1,a0+2,a0+3))
b1.ap(b2)}if(a5.length>0)b1.b2("aTexUV",a5)
if(a6.length>0)b1.b3("aNormal",a6)
if(x){b3=H.h([],b)
b4=H.h([],b)
for(b0=a2.length,p=0;p<a2.length;a2.length===b0||(0,H.F)(a2),++p){a0=a2[p]
C.a.k(b3,d.h(r,a0))
C.a.k(b4,c.h(q,a0))}b1.b4("aBoneIndex",b3)
b1.b4("aBoneWeight",b4)}}x="out: "+z.length+" "
if(0>=z.length)return H.f(z,0)
P.aa(x+z[0].l(0))
return z},
ds:function(a){var z,y,x,w,v,u,t,s
z=J.W(a)
y=new Array(C.b.J(z.gj(a),3))
y.fixed$length=Array
x=H.h(y,[T.q])
for(w=0;w<z.gj(a);w+=3){y=C.b.J(w,3)
v=J.aS(z.h(a,w))
u=J.aS(z.h(a,w+1))
t=J.aS(z.h(a,w+2))
s=new Float32Array(3)
s[0]=v
s[1]=u
s[2]=t
C.a.i(x,y,new T.q(s))}return x},
h9:function(a){var z,y,x,w,v,u,t
z=J.W(a)
y=new Array(C.b.J(z.gj(a),2))
y.fixed$length=Array
x=H.h(y,[T.a1])
for(w=0;w<z.gj(a);w+=2){y=C.b.J(w,2)
v=J.aS(z.h(a,w))
u=J.aS(z.h(a,w+1))
t=new Float32Array(2)
t[0]=v
t[1]=u
C.a.i(x,y,new T.a1(t))}return x},
dt:function(a,b){var z,y,x,w,v,u,t
z=J.W(b)
y=new Array(C.b.aa(z.gj(b),a))
y.fixed$length=Array
x=H.h(y,[T.ad])
for(w=0,v=0;w<z.gj(b);w+=a,++v){y=new Float32Array(4)
for(u=0;u<a;++u){t=J.aS(z.h(b,w+u))
if(u>=4)return H.f(y,u)
y[u]=t}C.a.i(x,v,new T.ad(y))}return x}}],["","",,R,{"^":"",
k9:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.i(W.jE("span",null),"$isY")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.x).as(y,"float")
y.setProperty(x,"left","")
x=C.x.as(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.q.K(z,v)}return z},
iK:{"^":"iJ;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
ed:[function(a){var z,y,x
z=this.db
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.aa("size change "+H.e(y)+" "+H.e(x))
this.dx.cL(y,x)
this.z=y
this.Q=x},"$1","gec",4,0,13]},
iY:{"^":"b;",
cX:function(a,b,c){var z,y
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
y=J.m(z)
y.K(z,this.b)
y.K(z,this.d)
y.K(z,this.c)}},
iZ:{"^":"iY;e,f,a,b,c,d",
d_:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.z.ek(y,2)+" fps"
C.q.cz(this.c,b)
x=C.b.J(30*C.z.dI(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.i(z.firstChild,"$isY")
v=w.style
u=""+x+"px"
v.height=u
C.q.K(z,w)},
cZ:function(a){return this.d_(a,"")}}}],["","",,A,{"^":"",
eC:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.r(e,"$isa",[G.aU],"$asa")
z=b.dx
z.A(c)
y=b.d
z.c1(0,y)
x=b.ch
if(x!=null&&b.cx!=null){H.e(b)
w=C.a.ge5(e)
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
v.dO(new T.bc(u))
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
C.a.k(e,x)
a.cO(b.cx,e,d)
if(0>=e.length)return H.f(e,-1)
e.pop()}for(y=b.cy,x=y.length,r=0;r<y.length;y.length===x||(0,H.F)(y),++r)A.eC(a,y[r],z,d,e)},
bA:{"^":"dV;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
l:function(a){return"NODE["+this.a+"]"}},
cG:{"^":"aT;d,e,f,a,b,c"},
iJ:{"^":"aT;",
cT:function(a,b,c){if(this.d==null)this.d=new G.hv(this.e,null,null,null,null)},
cN:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.fk(v.a,36160,z)
J.fW(v.a,this.x,this.y,x,w)
if(y!==0)J.fn(v.a,y)
for(z=this.f,y=z.length,x=P.d,w=P.b,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
s=t.e
C.a.k(s,new G.aU(P.a5(x,w),"transforms",!1,!0))
r=new T.T(new Float32Array(16))
r.L()
for(v=t.f,q=v.length,p=t.d,o=0;o<v.length;v.length===q||(0,H.F)(v),++o)A.eC(p,v[o],r,a,s)
if(0>=s.length)return H.f(s,-1)
s.pop()}},
cM:function(){return this.cN(null)}}}],["","",,V,{}],["","",,B,{"^":"",
hG:function(a1,a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=[G.ai]
y=H.h([],z)
x=[T.q]
w=H.h([],x)
C.a.G(y,$.eT())
C.a.G(w,$.eU())
for(v=0;v<a3;++v,y=u){u=H.h([],z)
for(t=y.length,s=0;s<y.length;y.length===t||(0,H.F)(y),++s){r=y[s]
q=J.d9(r)
if(q>=w.length)return H.f(w,q)
q=w[q]
p=new T.q(new Float32Array(3))
p.A(q)
q=r.ga2(r)
if(q>=w.length)return H.f(w,q)
p.k(0,w[q])
p.V(0,0.5)
p.C(0)
q=r.ga2(r)
if(q>=w.length)return H.f(w,q)
q=w[q]
o=new T.q(new Float32Array(3))
o.A(q)
q=r.ga3(r)
if(q>=w.length)return H.f(w,q)
o.k(0,w[q])
o.V(0,0.5)
o.C(0)
q=r.ga3(r)
if(q>=w.length)return H.f(w,q)
q=w[q]
n=new T.q(new Float32Array(3))
n.A(q)
q=r.gah(r)
if(q>=w.length)return H.f(w,q)
n.k(0,w[q])
n.V(0,0.5)
n.C(0)
m=w.length
C.a.k(w,p)
l=w.length
C.a.k(w,o)
k=w.length
C.a.k(w,n)
C.a.k(u,new G.ai(r.gah(r),m,k))
C.a.k(u,new G.ai(r.ga2(r),l,m))
C.a.k(u,new G.ai(r.ga3(r),k,l))
C.a.k(u,new G.ai(m,l,k))}}z=H.h([],z)
t=H.h([],[G.cr])
q=H.h([],x)
j=new G.cs(!1,z,t,q,P.a5(P.d,[P.a,,]))
j.W("aTexUV")
j.W("aNormal")
for(t=y.length,i=[T.a1],s=0;s<y.length;y.length===t||(0,H.F)(y),++s){r=y[s]
h=J.d9(r)
if(h>=w.length)return H.f(w,h)
g=w[h]
h=r.ga2(r)
if(h>=w.length)return H.f(w,h)
f=w[h]
h=r.ga3(r)
if(h>=w.length)return H.f(w,h)
e=w[h]
h=g.a
d=Math.atan2(h[2],h[0])
h=Math.acos(h[1])
c=new Float32Array(2)
c[0]=0.5*(1+d*0.3183098861837907)
c[1]=h*0.3183098861837907
h=f.a
d=Math.atan2(h[2],h[0])
h=Math.acos(h[1])
b=new Float32Array(2)
b[0]=0.5*(1+d*0.3183098861837907)
b[1]=h*0.3183098861837907
h=e.a
d=Math.atan2(h[2],h[0])
h=Math.acos(h[1])
a=new Float32Array(2)
a[0]=0.5*(1+d*0.3183098861837907)
a[1]=h*0.3183098861837907
j.b3("aNormal",H.h([g,f,e],x))
h=new T.q(new Float32Array(3))
h.A(g)
h.V(0,a2)
d=new T.q(new Float32Array(3))
d.A(f)
d.V(0,a2)
a0=new T.q(new Float32Array(3))
a0.A(e)
a0.V(0,a2)
a0=H.r(H.h([h,d,a0],x),"$isa",x,"$asa")
v=q.length
C.a.k(z,new G.ai(v,v+1,v+2))
j.ap(a0)
j.b2("aTexUV",H.h([new T.a1(c),new T.a1(b),new T.a1(a)],i))}return j}}],["","",,D,{"^":"",
i3:function(a){var z,y,x,w
z=[P.J,,,]
y=new P.P(0,$.D,[z])
x=new XMLHttpRequest()
C.y.e8(x,"GET",a)
w=W.bB
W.al(x,"loadend",H.k(new D.i4(new P.cM(y,[z]),x),{func:1,ret:-1,args:[w]}),!1,w)
C.y.cw(x,"")
return y},
cD:function(a){var z,y,x,w
z=W.bZ
y=new P.P(0,$.D,[z])
x=document.createElement("img")
w=new W.bE(x,"load",!1,[W.O])
w.ge_(w).ak(new D.i2(new P.cM(y,[z]),x),-1)
x.src=a
return y},
i4:{"^":"n:25;a,b",
$1:function(a){H.i(a,"$isbB")
this.a.a4(0,H.b1(C.U.dT(0,H.v(W.l0(this.b.response))),{futureOr:1,type:[P.J,,,]}))}},
i2:{"^":"n:13;a,b",
$1:function(a){H.i(a,"$isO")
return this.a.a4(0,this.b)}},
hV:{"^":"b;a,b,c",
cR:function(a){var z,y
a=document
z=W.b9
y={func:1,ret:-1,args:[z]}
W.al(a,"keydown",H.k(new D.hX(this),y),!1,z)
W.al(a,"keyup",H.k(new D.hY(this),y),!1,z)},
p:{
hW:function(a){var z=P.E
z=new D.hV(P.ab(null,null,null,z),P.ab(null,null,null,z),P.ab(null,null,null,z))
z.cR(a)
return z}}},
hX:{"^":"n:14;a",
$1:function(a){var z
H.i(a,"$isb9")
z=this.a
z.a.k(0,a.which)
z.b.k(0,a.which)}},
hY:{"^":"n:14;a",
$1:function(a){var z
H.i(a,"$isb9")
z=this.a
z.a.c8(0,a.which)
z.c.k(0,a.which)}},
id:{"^":"b;a,b,c,d,e,f,r,x",
cS:function(a){var z,y,x
if(a==null)a=document
z=J.m(a)
y=z.gc4(a)
x=H.o(y,0)
W.al(y.a,y.b,H.k(new D.ig(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gc3(a)
y=H.o(x,0)
W.al(x.a,x.b,H.k(new D.ih(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gc5(a)
x=H.o(y,0)
W.al(y.a,y.b,H.k(new D.ii(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gc6(a)
x=H.o(z,0)
W.al(z.a,z.b,H.k(new D.ij(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
ie:function(a){var z=P.E
z=new D.id(P.ab(null,null,null,z),P.ab(null,null,null,z),P.ab(null,null,null,z),0,0,0,0,0)
z.cS(a)
return z}}},
ig:{"^":"n:4;a",
$1:function(a){var z,y
H.i(a,"$isZ")
a.preventDefault()
z=this.a
y=J.m(a)
z.r=H.u(y.gc2(a).a)
z.x=H.u(y.gc2(a).b)
z.d=a.movementX
z.e=a.movementY}},
ih:{"^":"n:4;a",
$1:function(a){var z
H.i(a,"$isZ")
a.preventDefault()
P.aa("BUTTON "+H.e(a.button))
z=this.a
z.a.k(0,a.button)
z.b.k(0,a.button)}},
ii:{"^":"n:4;a",
$1:function(a){var z
H.i(a,"$isZ")
a.preventDefault()
z=this.a
z.a.c8(0,a.button)
z.c.k(0,a.button)}},
ij:{"^":"n:27;a",
$1:function(a){H.i(a,"$isaV")
a.preventDefault()
this.a.f=H.u(C.af.gdW(a))}},
is:{"^":"dV;ch,cx,cy,db,dx,dy,fr,fx,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bL:function(a){var z,y
z=C.f.e0(H.r(a,"$isl",[P.b],"$asl"),0,new A.ln(),P.E)
if(typeof z!=="number")return H.bn(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
ln:{"^":"n:28;",
$2:function(a,b){var z,y
H.u(a)
z=J.aw(b)
if(typeof a!=="number")return a.H()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",bc:{"^":"b;a",
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
l:function(a){return"[0] "+this.P(0).l(0)+"\n[1] "+this.P(1).l(0)+"\n[2] "+this.P(2).l(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=9)return H.f(z,b)
return z[b]},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.bc){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gv:function(a){return A.bL(this.a)},
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
return new T.q(z)},
dO:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
return m}},T:{"^":"b;a",
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
l:function(a){return"[0] "+this.P(0).l(0)+"\n[1] "+this.P(1).l(0)+"\n[2] "+this.P(2).l(0)+"\n[3] "+this.P(3).l(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.f(z,b)
return z[b]},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.T){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gv:function(a){return A.bL(this.a)},
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
return new T.ad(z)},
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
c1:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},a1:{"^":"b;a",
l:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a1){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gv:function(a){return A.bL(this.a)},
h:function(a,b){var z=this.a
if(b>=2)return H.f(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gal:function(a){return this.a[0]},
ga6:function(a){return this.a[1]}},q:{"^":"b;a",
a8:function(a,b,c){var z=this.a
C.f.i(z,0,a)
C.f.i(z,1,b)
C.f.i(z,2,c)},
A:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
l:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.q){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.bL(this.a)},
h:function(a,b){var z=this.a
if(b>=3)return H.f(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gbZ:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
C:function(a){var z,y,x
z=Math.sqrt(this.gbZ())
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
z=new T.q(new Float32Array(3))
z.a8(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
k:function(a,b){var z,y
z=H.i(b,"$isq").a
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
V:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
gal:function(a){return this.a[0]},
ga6:function(a){return this.a[1]},
gcr:function(a){return this.a[2]},
p:{
U:function(a,b,c){var z=new T.q(new Float32Array(3))
z.a8(a,b,c)
return z},
e4:function(a){var z=new Float32Array(3)
z[2]=a
z[1]=a
z[0]=a
return new T.q(z)}}},ad:{"^":"b;a",
A:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
l:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ad){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gv:function(a){return A.bL(this.a)},
h:function(a,b){var z=this.a
if(b>=4)return H.f(z,b)
return z[b]},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gal:function(a){return this.a[0]},
ga6:function(a){return this.a[1]},
gcr:function(a){return this.a[2]},
gen:function(a){return this.a[3]}}}],["","",,Q,{"^":"",
eJ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
z={}
y=document
x=C.r.cu(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.iZ(0,0,x,w,y.createElement("div"),R.k9("blue","gray",90,30))
u.cX(x,"blue","gray")
t=H.i(C.r.ea(y,"#webgl-canvas"),"$isbr")
s=new G.h3(t)
y=P.d
x=P.b
v=(t&&C.J).ct(t,"webgl2",P.dL(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],y,x))
s.a=v
if(v==null)H.a6(P.dE('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
r="ChronosGL Config: "+H.e(J.fG(v))
if($.eD>0)P.aa("I: "+r)
J.fo(v,0,0,0,1)
J.bR(v,2929)
v=new Float32Array(3)
r=D.hW(null)
q=D.ie(t)
p=new T.T(new Float32Array(16))
p.L()
o=new Float32Array(3)
n=new Float32Array(3)
m=new Float32Array(3)
l=new D.is(0.5,0,0,0,new T.q(v),-0.02,r,q,p,new T.q(o),new T.q(n),new T.q(m),new T.q(new Float32Array(3)),"camera:orbit",!1,!0)
v=new T.T(new Float32Array(16))
v.L()
r=new T.T(new Float32Array(16))
r.L()
k=new G.iu(l,50,1,0.1,100,v,r,new T.T(new Float32Array(16)),P.a5(y,x),"perspective",!1,!0)
k.ba()
v=H.h([],[G.cB])
r=new Float32Array(64)
j=new G.hH(v,r,new Float32Array(4),P.a5(y,x),"illumination",!1,!0)
y=$.d3()
r=$.f6()
q=$.f7()
p=new Float32Array(16)
o=new Float32Array(16)
n=new T.q(new Float32Array(3))
m=new T.q(new Float32Array(3))
n.A(r)
m.A(q)
C.a.k(v,new G.iW(y,y,50,0.95,2,1,1,50,new T.T(p),new T.T(o),2,n,m,"spot",!1,!0))
m=H.h([],[A.cG])
i=new R.iK(t,k,null,s,m,17664,0,0,0,0,"main",!1,!0)
i.cT("main",s,null)
i.ed(null)
n=W.O
W.al(window,"resize",H.k(i.gec(),{func:1,ret:-1,args:[n]}),!1,n)
n=G.dT("Fixed",s,$.fb(),$.fa())
o=[G.aU]
p=H.h([k,j],o)
y=[A.bA]
v=H.h([],y)
C.a.k(m,new A.cG(n,p,v,"Fixed",!1,!0))
h=G.dO("light")
r=h.d
r.i(0,"uColor",$.eQ())
r.i(0,"uShininess",25)
n=G.dH("icosahedron-4",n,B.hG(!0,0.1,4))
r=H.h([],y)
q=new Float32Array(9)
p=new T.T(new Float32Array(16))
p.L()
g=new Float32Array(16)
f=new T.T(g)
f.L()
e=new Float32Array(3)
d=new Float32Array(3)
c=new Float32Array(3)
b=new Float32Array(3)
a=$.d3().a
g[12]=a[0]
g[13]=a[1]
g[14]=a[2]
C.a.k(v,new A.bA(h,n,r,new T.bc(q),p,f,new T.q(e),new T.q(d),new T.q(c),new T.q(b),"pointLight",!1,!0))
b=G.dT("main",s,$.fe(),$.f8())
o=H.h([k,j],o)
y=H.h([],y)
a0=new A.cG(b,o,y,"main",!1,!0)
C.a.k(m,a0)
z.a=0
a1=G.dO("mat")
y=a1.d
y.i(0,"uColor",$.eP())
y.i(0,"uShininess",25)
P.hy(H.h([D.i3($.d2()),D.cD($.d4()),D.cD($.fc()),D.cD($.f9())],[[P.a4,P.b]]),null,!1,x).ak(new Q.lB(s,a1,a0,new Q.lA(z,l,i,u)),null)},
lA:{"^":"n:29;a,b,c,d",
$1:function(a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
H.cY(a7)
if(typeof a7!=="number")return a7.b0()
z=this.a
z.a=a7+0
y=this.b
y.cx+=0.001
x=y.fx
w=x.a
if(w.u(0,0)||w.u(0,1)){w=y.cx
v=x.d
if(typeof v!=="number")return v.aX()
y.cx=w+v*0.01
v=y.cy
w=x.e
if(typeof w!=="number")return w.aX()
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
if(typeof v!=="number")return v.aX()
v=y.ch-v*y.dy
if(v>0)y.ch=v
v=C.m.dJ(y.cy,-1.4707963267948965,1.4707963267948965)
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
y.c0(t)
t=y.f
v=t.a
v[0]=q[2]
v[1]=q[6]
v[2]=q[10]
y=-y.db
p=Math.sqrt(t.gbZ())
o=v[0]/p
n=v[1]/p
m=v[2]/p
l=Math.cos(y)
k=Math.sin(y)
j=1-l
i=o*o*j+l
y=m*k
h=o*n*j-y
v=n*k
g=o*m*j+v
f=n*o*j+y
e=n*n*j+l
y=o*k
d=n*m*j-y
c=m*o*j-v
b=m*n*j+y
a=m*m*j+l
y=q[0]
v=q[4]
t=q[8]
u=q[1]
r=q[5]
a0=q[9]
a1=q[2]
a2=q[6]
a3=q[10]
a4=q[3]
a5=q[7]
a6=q[11]
q[0]=y*i+v*f+t*c
q[1]=u*i+r*f+a0*c
q[2]=a1*i+a2*f+a3*c
q[3]=a4*i+a5*f+a6*c
q[4]=y*h+v*e+t*b
q[5]=u*h+r*e+a0*b
q[6]=a1*h+a2*e+a3*b
q[7]=a4*h+a5*e+a6*b
q[8]=y*g+v*d+t*a
q[9]=u*g+r*d+a0*a
q[10]=a1*g+a2*d+a3*a
q[11]=a4*g+a5*d+a6*a
w.c.T(0)
w.b.T(0)
x.e=0
x.d=0
x.f=0
x.c.T(0)
x.b.T(0)
this.c.cM()
C.ag.gdB(window).ak(this,-1)
this.d.cZ(z.a)}},
lB:{"^":"n:30;a,b,c,d",
$1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
H.X(a)
z=this.a
y=$.d4()
x=J.W(a)
w=x.h(a,1)
v=J.fr(z.a)
J.bp(z.a,3553,v)
J.fL(z.a,37440,1)
J.bp(z.a,3553,v)
J.fN(z.a,3553,0,6408,6408,5121,w)
J.dd(z.a,3553,10240,9729)
J.dd(z.a,3553,10241,9729)
J.fH(z.a)
J.bp(z.a,3553,null)
u=this.b
t=u.d
t.i(0,"uTexture",new G.hJ(w,y,v,3553,z,new G.j9(!1,!1,!1,!0,1,9729,9729)))
t.i(0,"uNormalScale",0.8)
s=Y.hK(H.i(x.h(a,0),"$isJ"))
if(0>=s.length)return H.f(s,0)
P.aa(s[0])
x=$.d2()
t=this.c
if(0>=s.length)return H.f(s,0)
r=G.dH(x,t.d,s[0])
x=[A.bA]
z=H.h([],x)
y=new Float32Array(9)
w=new T.T(new Float32Array(16))
w.L()
v=new T.T(new Float32Array(16))
v.L()
q=new Float32Array(3)
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
x=H.h([],x)
m=new Float32Array(9)
l=new T.T(new Float32Array(16))
l.L()
k=new T.T(new Float32Array(16))
k.L()
j=new Float32Array(3)
i=new Float32Array(3)
h=new Float32Array(3)
g=new A.bA(null,null,x,new T.bc(m),l,k,new T.q(j),new T.q(i),new T.q(h),new T.q(new Float32Array(3)),"wrapper",!1,!0)
C.a.k(x,new A.bA(u,r,z,new T.bc(y),w,v,new T.q(q),new T.q(p),new T.q(o),new T.q(n),r.a,!1,!0))
z=new T.q(new Float32Array(3))
z.a8(100,0,0)
g.c0(z)
C.a.k(t.f,g)
this.d.$1(0)}}},1]]
setupProgram(dart,0,0)
J.A=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dJ.prototype
return J.dI.prototype}if(typeof a=="string")return J.by.prototype
if(a==null)return J.hR.prototype
if(typeof a=="boolean")return J.hQ.prototype
if(a.constructor==Array)return J.bw.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bz.prototype
return a}if(a instanceof P.b)return a
return J.cb(a)}
J.W=function(a){if(typeof a=="string")return J.by.prototype
if(a==null)return a
if(a.constructor==Array)return J.bw.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bz.prototype
return a}if(a instanceof P.b)return a
return J.cb(a)}
J.bJ=function(a){if(a==null)return a
if(a.constructor==Array)return J.bw.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bz.prototype
return a}if(a instanceof P.b)return a
return J.cb(a)}
J.eE=function(a){if(typeof a=="number")return J.bx.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.bj.prototype
return a}
J.lk=function(a){if(typeof a=="number")return J.bx.prototype
if(typeof a=="string")return J.by.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.bj.prototype
return a}
J.eF=function(a){if(typeof a=="string")return J.by.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.bj.prototype
return a}
J.m=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bz.prototype
return a}if(a instanceof P.b)return a
return J.cb(a)}
J.bK=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.bj.prototype
return a}
J.aR=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.A(a).E(a,b)}
J.ag=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.eE(a).U(a,b)}
J.b4=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lx(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.W(a).h(a,b)}
J.ff=function(a,b,c){return J.bJ(a).i(a,b,c)}
J.d5=function(a,b){return J.eF(a).at(a,b)}
J.bP=function(a,b){return J.m(a).dl(a,b)}
J.fg=function(a,b,c,d){return J.m(a).dm(a,b,c,d)}
J.fh=function(a,b,c){return J.m(a).dn(a,b,c)}
J.d6=function(a,b){return J.m(a).bx(a,b)}
J.fi=function(a,b,c,d){return J.m(a).by(a,b,c,d)}
J.d7=function(a,b,c){return J.m(a).bA(a,b,c)}
J.fj=function(a,b){return J.m(a).dD(a,b)}
J.ce=function(a,b,c){return J.m(a).bB(a,b,c)}
J.fk=function(a,b,c){return J.m(a).bD(a,b,c)}
J.bp=function(a,b,c){return J.m(a).bE(a,b,c)}
J.bQ=function(a,b){return J.m(a).dG(a,b)}
J.fl=function(a,b){return J.m(a).bF(a,b)}
J.fm=function(a,b,c){return J.m(a).bG(a,b,c)}
J.d8=function(a,b,c,d){return J.m(a).bH(a,b,c,d)}
J.fn=function(a,b){return J.bJ(a).bI(a,b)}
J.fo=function(a,b,c,d,e){return J.m(a).bJ(a,b,c,d,e)}
J.fp=function(a,b){return J.lk(a).N(a,b)}
J.cf=function(a,b,c){return J.W(a).dM(a,b,c)}
J.cg=function(a){return J.m(a).bL(a)}
J.fq=function(a){return J.m(a).bM(a)}
J.fr=function(a){return J.m(a).bO(a)}
J.fs=function(a){return J.m(a).dS(a)}
J.ft=function(a,b){return J.m(a).bQ(a,b)}
J.ch=function(a,b){return J.m(a).bR(a,b)}
J.fu=function(a,b,c,d){return J.m(a).bS(a,b,c,d)}
J.fv=function(a,b,c,d,e){return J.m(a).dX(a,b,c,d,e)}
J.fw=function(a,b,c,d,e){return J.m(a).bT(a,b,c,d,e)}
J.fx=function(a,b,c,d,e,f){return J.m(a).dY(a,b,c,d,e,f)}
J.fy=function(a,b){return J.bJ(a).q(a,b)}
J.bR=function(a,b){return J.m(a).bU(a,b)}
J.fz=function(a,b){return J.m(a).bV(a,b)}
J.fA=function(a){return J.m(a).dZ(a)}
J.fB=function(a,b){return J.m(a).D(a,b)}
J.d9=function(a){return J.bK(a).gah(a)}
J.fC=function(a){return J.m(a).gdC(a)}
J.aw=function(a){return J.A(a).gv(a)}
J.bS=function(a){return J.bJ(a).gw(a)}
J.ao=function(a){return J.W(a).gj(a)}
J.fD=function(a){return J.m(a).ge9(a)}
J.fE=function(a){return J.m(a).geh(a)}
J.fF=function(a){return J.bK(a).gen(a)}
J.bT=function(a){return J.bK(a).gal(a)}
J.ci=function(a){return J.bK(a).ga6(a)}
J.da=function(a){return J.bK(a).gcr(a)}
J.cj=function(a,b){return J.m(a).Z(a,b)}
J.fG=function(a){return J.m(a).am(a)}
J.fH=function(a){return J.m(a).aP(a)}
J.fI=function(a,b){return J.m(a).aR(a,b)}
J.fJ=function(a,b,c){return J.m(a).aS(a,b,c)}
J.db=function(a,b,c){return J.m(a).aW(a,b,c)}
J.fK=function(a,b){return J.m(a).c_(a,b)}
J.fL=function(a,b,c){return J.m(a).c7(a,b,c)}
J.dc=function(a){return J.m(a).eb(a)}
J.fM=function(a,b,c,d){return J.m(a).b_(a,b,c,d)}
J.fN=function(a,b,c,d,e,f,g){return J.m(a).ca(a,b,c,d,e,f,g)}
J.dd=function(a,b,c,d){return J.m(a).cb(a,b,c,d)}
J.aS=function(a){return J.eE(a).ei(a)}
J.fO=function(a){return J.eF(a).ej(a)}
J.bq=function(a){return J.A(a).l(a)}
J.fP=function(a,b,c,d){return J.m(a).el(a,b,c,d)}
J.fQ=function(a,b,c){return J.m(a).cd(a,b,c)}
J.fR=function(a,b,c){return J.m(a).ce(a,b,c)}
J.ck=function(a,b,c){return J.m(a).cf(a,b,c)}
J.fS=function(a,b,c){return J.m(a).cg(a,b,c)}
J.de=function(a,b,c){return J.m(a).ci(a,b,c)}
J.df=function(a,b,c){return J.m(a).cj(a,b,c)}
J.dg=function(a,b,c){return J.m(a).ck(a,b,c)}
J.dh=function(a,b,c,d){return J.m(a).cl(a,b,c,d)}
J.di=function(a,b,c,d){return J.m(a).cm(a,b,c,d)}
J.fT=function(a,b){return J.m(a).cn(a,b)}
J.fU=function(a,b,c){return J.m(a).em(a,b,c)}
J.fV=function(a,b,c,d,e,f,g){return J.m(a).co(a,b,c,d,e,f,g)}
J.fW=function(a,b,c,d,e){return J.m(a).cq(a,b,c,d,e)}
I.aP=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.bU.prototype
C.J=W.br.prototype
C.x=W.hb.prototype
C.q=W.hi.prototype
C.K=W.hj.prototype
C.L=W.hC.prototype
C.r=W.hD.prototype
C.y=W.hE.prototype
C.M=J.j.prototype
C.a=J.bw.prototype
C.z=J.dI.prototype
C.b=J.dJ.prototype
C.m=J.bx.prototype
C.i=J.by.prototype
C.T=J.bz.prototype
C.f=H.ik.prototype
C.n=H.im.prototype
C.v=W.io.prototype
C.C=J.iv.prototype
C.D=W.iF.prototype
C.I=W.j7.prototype
C.w=J.bj.prototype
C.af=W.aV.prototype
C.ag=W.jj.prototype
C.e=new P.kl()
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
C.U=new P.hT(null,null)
C.V=new P.hU(null)
C.W=H.h(I.aP(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.X=H.h(I.aP(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.Z=H.h(I.aP([]),[P.B])
C.Y=H.h(I.aP([]),[P.d])
C.t=H.h(I.aP(["bind","if","ref","repeat","syntax"]),[P.d])
C.u=H.h(I.aP(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
C.a_=new G.G("vec3","vertex btangents",0)
C.d=new G.G("vec3","",0)
C.a0=new G.G("vec4","delta from light",0)
C.o=new G.G("","",0)
C.E=new G.G("vec3","vertex coordinates",0)
C.a1=new G.G("vec3","vertex binormals",0)
C.F=new G.G("vec4","for wireframe",0)
C.a2=new G.G("vec4","per vertex color",0)
C.a3=new G.G("float","for normal maps",0)
C.j=new G.G("mat4","",0)
C.a5=new G.G("mat4","",4)
C.a4=new G.G("mat4","",128)
C.c=new G.G("float","",0)
C.a6=new G.G("float","",4)
C.a7=new G.G("float","depth for shadowmaps",0)
C.h=new G.G("sampler2D","",0)
C.a8=new G.G("float","for bump maps",0)
C.a9=new G.G("vec2","texture uvs",0)
C.aa=new G.G("float","time since program start in sec",0)
C.k=new G.G("vec2","",0)
C.ab=new G.G("samplerCube","",0)
C.l=new G.G("vec4","",0)
C.ac=new G.G("vec3","vertex normals",0)
C.ad=new G.G("sampler2DShadow","",0)
C.G=new G.G("vec3","per vertex color",0)
C.H=new G.G("mat3","",0)
C.ae=new G.G("vec3","vertex tangents",0)
$.ah=0
$.b5=null
$.dm=null
$.cO=!1
$.eH=null
$.ey=null
$.eM=null
$.ca=null
$.cc=null
$.cW=null
$.aY=null
$.bk=null
$.bl=null
$.cP=!1
$.D=C.e
$.ap=null
$.cq=null
$.dC=null
$.dB=null
$.dy=null
$.dx=null
$.dw=null
$.dv=null
$.eD=0
$.bW="../asset/leeperrysmith/"
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
I.$lazy(y,x,w)}})(["lY","eS",function(){return H.eG("_$dart_dartClosure")},"mA","d_",function(){return H.eG("_$dart_js")},"nl","eW",function(){return H.ak(H.c2({
toString:function(){return"$receiver$"}}))},"nm","eX",function(){return H.ak(H.c2({$method$:null,
toString:function(){return"$receiver$"}}))},"nn","eY",function(){return H.ak(H.c2(null))},"no","eZ",function(){return H.ak(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"nr","f1",function(){return H.ak(H.c2(void 0))},"ns","f2",function(){return H.ak(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"nq","f0",function(){return H.ak(H.e1(null))},"np","f_",function(){return H.ak(function(){try{null.$method$}catch(z){return z.message}}())},"nu","f4",function(){return H.ak(H.e1(void 0))},"nt","f3",function(){return H.ak(function(){try{(void 0).$method$}catch(z){return z.message}}())},"nD","d0",function(){return P.jp()},"nT","bo",function(){return[]},"lV","eR",function(){return{}},"nK","f5",function(){return P.cC(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"nL","d1",function(){return P.a5(P.d,P.bu)},"n8","eV",function(){return new G.e0(1281,0,4294967295)},"lP","eO",function(){return new G.e_(1281,1281,1281)},"nR","af",function(){return P.dL(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.G,"aColorAlpha",C.a2,"aPosition",C.E,"aTexUV",C.a9,"aNormal",C.ac,"aBinormal",C.a1,"aCenter",C.F,"aPointSize",C.c,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ae,"aBitangent",C.a_,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.c,"iaColor",C.d,"vColor",C.G,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.E,"vPositionFromLight",C.a0,"vCenter",C.F,"vDepth",C.a7,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.H,"uConvolutionMatrix",C.H,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ad,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.ab,"uAnimationTable",C.h,"uTime",C.aa,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a4,"uLightDescs",C.a5,"uLightCount",C.c,"uLightTypes",C.a6,"uBumpScale",C.a8,"uNormalScale",C.a3],P.d,G.G)},"lS","eP",function(){return T.U(0.4,0.4,0.4)},"lT","eQ",function(){return T.U(1,1,0)},"o3","fb",function(){var z,y
z=G.c1("SolidColor")
y=[P.d]
z.b1(H.h(["aPosition"],y))
z.a0(H.h(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.b9(H.h(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"],y))
return z},"o2","fa",function(){var z,y
z=G.c1("SolidColorF")
y=[P.d]
z.a0(H.h(["uColor"],y))
z.b9(H.h(["oFragColor = vec4( uColor, 1.0 );"],y))
return z},"mt","eT",function(){return H.h([G.M(0,11,5),G.M(0,5,1),G.M(0,1,7),G.M(0,7,10),G.M(0,10,11),G.M(1,5,9),G.M(5,11,4),G.M(11,10,2),G.M(10,7,6),G.M(7,1,8),G.M(3,9,4),G.M(3,4,2),G.M(3,2,6),G.M(3,6,8),G.M(3,8,9),G.M(4,9,5),G.M(2,4,11),G.M(6,2,10),G.M(8,6,7),G.M(9,8,1)],[G.ai])},"o5","fd",function(){return(1+P.lG(5))/2},"mu","eU",function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.fd()
y=T.U(-1,z,0)
y.C(0)
x=T.U(1,z,0)
x.C(0)
if(typeof z!=="number")return z.eq()
w=T.U(-1,-z,0)
w.C(0)
v=T.U(1,-z,0)
v.C(0)
u=T.U(0,-1,z)
u.C(0)
t=T.U(0,1,z)
t.C(0)
s=T.U(0,-1,-z)
s.C(0)
r=T.U(0,1,-z)
r.C(0)
q=T.U(z,0,-1)
q.C(0)
p=T.U(z,0,1)
p.C(0)
o=T.U(-z,0,-1)
o.C(0)
z=T.U(-z,0,1)
z.C(0)
return H.h([y,x,w,v,u,t,s,r,q,p,o,z],[T.q])},"o_","d2",function(){return $.bW+"LeePerrySmith.js"},"o0","f9",function(){return $.bW+"Infinite-Level_02_Tangent_SmoothUV.jpg"},"o6","d4",function(){return $.bW+"Map-COL.jpg"},"o4","fc",function(){return $.bW+"Map-SPEC.jpg"},"o7","fe",function(){var z,y
z=G.c1("LightBlinnPhongV")
y=[P.d]
z.b1(H.h(["aPosition","aNormal","aTexUV"],y))
z.b5(H.h(["vPosition","vNormal","vTexUV"],y))
z.a0(H.h(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"],y))
z.cV(H.h(["void main() {\n    vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n    gl_Position = uPerspectiveViewMatrix * pos;\n    vPosition = pos.xyz;\n    vNormal = uNormalMatrix * aNormal;\n    vTexUV = aTexUV;\n}\n"],y))
return z},"nY","f8",function(){var z,y
z=G.c1("LightBlinnPhongF")
y=[P.d]
z.b5(H.h(["vPosition","vNormal","vTexUV"],y))
z.a0(H.h(["uLightDescs","uLightTypes","uShininess"],y))
z.a0(H.h(["uEyePosition","uColor","uTexture"],y))
z.b8(H.h(["void main() {\n    ColorComponents acc = CombinedLight(vPosition - uEyePosition,\n                                        vNormal,\n                                        uEyePosition,\n                                        uLightDescs,\n                                        uLightTypes,\n                                        uShininess);\n    \n    vec4 diffuseMap = texture(uTexture, vTexUV );\n    \n    oFragColor.rgb = diffuseMap.rgb + acc.diffuse + acc.specular + uColor;\n    oFragColor.a = 1.0;\n}\n\n"],y),H.h(["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    // float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"],y))
return z},"o1","d3",function(){return T.U(0.5,1,0)},"nU","f6",function(){return T.e4(0.866)},"nV","f7",function(){return T.e4(0.133)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.B},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.B,args:[W.Z]},{func:1,ret:P.d,args:[P.E]},{func:1,ret:P.B,args:[,,]},{func:1,args:[,]},{func:1,ret:P.B,args:[,]},{func:1,ret:P.V,args:[W.aj]},{func:1,ret:P.V,args:[P.d]},{func:1,ret:P.V,args:[W.Y,P.d,P.d,W.bG]},{func:1,ret:-1,args:[,]},{func:1,ret:-1,args:[W.O]},{func:1,ret:P.B,args:[W.b9]},{func:1,args:[P.d]},{func:1,ret:P.B,args:[,P.R]},{func:1,ret:P.B,args:[,],opt:[P.R]},{func:1,ret:[P.P,,],args:[,]},{func:1,ret:P.V,args:[W.w]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.B,args:[P.H]},{func:1,args:[W.O]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.w,W.w]},{func:1,ret:P.B,args:[W.bB]},{func:1,ret:P.B,args:[{func:1,ret:-1}]},{func:1,ret:P.B,args:[W.aV]},{func:1,ret:P.E,args:[P.E,P.b]},{func:1,ret:-1,args:[P.H]},{func:1,ret:P.B,args:[[P.a,,]]},{func:1,ret:P.E,args:[,,]},{func:1,args:[,P.d]},{func:1,args:[,,]}]
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
if(x==y)H.lI(d||a)
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
Isolate.bm=a.bm
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
if(typeof dartMainRunner==="function")dartMainRunner(Q.eJ,[])
else Q.eJ([])})})()
//# sourceMappingURL=normalmap.dart.js.map
