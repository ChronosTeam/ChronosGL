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
if(a1==="u"){processStatics(init.statics[b2]=b3.u,b4)
delete b3.u}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cv(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bg=function(){}
var dart=[["","",,H,{"^":"",lx:{"^":"c;a"}}],["","",,J,{"^":"",
cz:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c1:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cy==null){H.ks()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.dG("Return interceptor for "+H.h(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cD()]
if(v!=null)return v
v=H.kx(a)
if(v!=null)return v
if(typeof a=="function")return C.R
y=Object.getPrototypeOf(a)
if(y==null)return C.A
if(y===Object.prototype)return C.A
if(typeof w=="function"){Object.defineProperty(w,$.cD(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
j:{"^":"c;",
G:function(a,b){return a===b},
gB:function(a){return H.b5(a)},
l:["cn",function(a){return"Instance of '"+H.b6(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h6:{"^":"j;",
l:function(a){return String(a)},
gB:function(a){return a?519018:218159},
$isU:1},
h7:{"^":"j;",
G:function(a,b){return null==b},
l:function(a){return"null"},
gB:function(a){return 0},
$isH:1},
cj:{"^":"j;",
gB:function(a){return 0},
l:["cp",function(a){return String(a)}]},
hF:{"^":"cj;"},
b9:{"^":"cj;"},
bu:{"^":"cj;",
l:function(a){var z=a[$.eq()]
if(z==null)return this.cp(a)
return"JavaScript function for "+H.h(J.bn(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbp:1},
br:{"^":"j;$ti",
j:function(a,b){H.A(b,H.r(a,0))
if(!!a.fixed$length)H.a0(P.z("add"))
a.push(b)},
I:function(a,b){var z,y
H.x(b,"$isl",[H.r(a,0)],"$asl")
if(!!a.fixed$length)H.a0(P.z("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.E)(b),++y)a.push(b[y])},
ab:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.h(z,y,H.h(a[y]))
return z.join(b)},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
gdD:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.dc())},
bp:function(a,b){var z,y
H.n(b,{func:1,ret:P.U,args:[H.r(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.d(P.aI(a))}return!1},
ci:function(a,b){if(!!a.immutable$list)H.a0(P.z("sort"))
H.i4(a,J.k2(),H.r(a,0))},
aq:function(a){return this.ci(a,null)},
A:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aG(a[z],b))return!0
return!1},
l:function(a){return P.ch(a,"[","]")},
gD:function(a){return new J.fn(a,a.length,0,[H.r(a,0)])},
gB:function(a){return H.b5(a)},
gk:function(a){return a.length},
i:function(a,b){if(b>=a.length||b<0)throw H.d(H.bf(a,b))
return a[b]},
h:function(a,b,c){H.A(c,H.r(a,0))
if(!!a.immutable$list)H.a0(P.z("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bf(a,b))
a[b]=c},
$isw:1,
$asw:I.bg,
$isl:1,
$isa:1,
u:{
h5:function(a,b){return J.ci(H.f(a,[b]))},
ci:function(a){H.bD(a)
a.fixed$length=Array
return a},
lv:[function(a,b){return J.eS(H.ek(a,"$isZ"),H.ek(b,"$isZ"))},"$2","k2",8,0,29]}},
lw:{"^":"br;$ti"},
fn:{"^":"c;a,b,c,0d,$ti",
sb5:function(a){this.d=H.A(a,H.r(this,0))},
gE:function(a){return this.d},
w:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.E(z))
x=this.c
if(x>=y){this.sb5(null)
return!1}this.sb5(z[x]);++this.c
return!0},
$isb_:1},
bs:{"^":"j;",
S:function(a,b){var z
H.cA(b)
if(typeof b!=="number")throw H.d(H.bd(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gam(b)
if(this.gam(a)===z)return 0
if(this.gam(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gam:function(a){return a===0?1/a<0:a<0},
bY:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.d(P.z(""+a+".toInt()"))},
dj:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.d(P.z(""+a+".ceil()"))},
dk:function(a,b,c){if(this.S(b,c)>0)throw H.d(H.bd(b))
if(this.S(a,b)<0)return b
if(this.S(a,c)>0)return c
return a},
dO:function(a,b){var z
if(b>20)throw H.d(P.bQ(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gam(a))return"-"+z
return z},
l:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gB:function(a){return a&0x1FFFFFFF},
cr:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bm(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.bm(a,b)},
bm:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.z("Result of truncating division is "+H.h(z)+": "+H.h(a)+" ~/ "+b))},
bk:function(a,b){var z
if(a>0)z=this.d6(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
d6:function(a,b){return b>31?0:a>>>b},
a_:function(a,b){if(typeof b!=="number")throw H.d(H.bd(b))
return a>b},
$isZ:1,
$asZ:function(){return[P.F]},
$isa4:1,
$isF:1},
de:{"^":"bs;",$isD:1},
dd:{"^":"bs;"},
bt:{"^":"j;",
av:function(a,b){if(b>=a.length)throw H.d(H.bf(a,b))
return a.charCodeAt(b)},
L:function(a,b){H.v(b)
if(typeof b!=="string")throw H.d(P.cU(b,null,null))
return a+b},
ck:function(a,b,c){var z
if(c>a.length)throw H.d(P.bQ(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cj:function(a,b){return this.ck(a,b,0)},
cm:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.d(P.bR(b,null,null))
if(b>c)throw H.d(P.bR(b,null,null))
if(c>a.length)throw H.d(P.bR(c,null,null))
return a.substring(b,c)},
cl:function(a,b){return this.cm(a,b,null)},
dN:function(a){return a.toLowerCase()},
dl:function(a,b,c){if(c>a.length)throw H.d(P.bQ(c,0,a.length,null,null))
return H.kE(a,b,c)},
S:function(a,b){var z
H.v(b)
if(typeof b!=="string")throw H.d(H.bd(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
l:function(a){return a},
gB:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
i:function(a,b){if(b>=a.length||!1)throw H.d(H.bf(a,b))
return a[b]},
$isw:1,
$asw:I.bg,
$isZ:1,
$asZ:function(){return[P.e]},
$ishD:1,
$ise:1}}],["","",,H,{"^":"",
dc:function(){return new P.cn("No element")},
h4:function(){return new P.cn("Too many elements")},
i4:function(a,b,c){H.x(a,"$isa",[c],"$asa")
H.n(b,{func:1,ret:P.D,args:[c,c]})
H.bv(a,0,J.aT(a)-1,b,c)},
bv:function(a,b,c,d,e){H.x(a,"$isa",[e],"$asa")
H.n(d,{func:1,ret:P.D,args:[e,e]})
if(c-b<=32)H.i3(a,b,c,d,e)
else H.i2(a,b,c,d,e)},
i3:function(a,b,c,d,e){var z,y,x,w,v
H.x(a,"$isa",[e],"$asa")
H.n(d,{func:1,ret:P.D,args:[e,e]})
for(z=b+1,y=J.bh(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.ac(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.h(a,w,y.i(a,v))
w=v}y.h(a,w,x)}},
i2:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.x(a,"$isa",[a2],"$asa")
H.n(a1,{func:1,ret:P.D,args:[a2,a2]})
z=C.d.a2(a0-b+1,6)
y=b+z
x=a0-z
w=C.d.a2(b+a0,2)
v=w-z
u=w+z
t=J.bh(a)
s=t.i(a,y)
r=t.i(a,v)
q=t.i(a,w)
p=t.i(a,u)
o=t.i(a,x)
if(J.ac(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.ac(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.ac(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.ac(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.ac(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.ac(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.ac(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.ac(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.ac(a1.$2(p,o),0)){n=o
o=p
p=n}t.h(a,y,s)
t.h(a,w,q)
t.h(a,x,o)
t.h(a,v,t.i(a,b))
t.h(a,u,t.i(a,a0))
m=b+1
l=a0-1
if(J.aG(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.i(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.ac()
if(i<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.a_()
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
if(typeof e!=="number")return e.ac()
if(e<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.a_()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.a_()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.ac()
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
H.bv(a,b,m-2,a1,a2)
H.bv(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aG(a1.$2(t.i(a,m),r),0);)++m
for(;J.aG(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.ac()
h=l-1
if(i<0){t.h(a,k,t.i(a,m))
g=m+1
t.h(a,m,t.i(a,l))
t.h(a,l,j)
m=g}else{t.h(a,k,t.i(a,l))
t.h(a,l,j)}l=h
break}}H.bv(a,m,l,a1,a2)}else H.bv(a,m,l,a1,a2)},
d4:{"^":"l;"},
bP:{"^":"d4;$ti",
gD:function(a){return new H.di(this,this.gk(this),0,[H.cx(this,"bP",0)])},
aK:function(a,b){return this.co(0,H.n(b,{func:1,ret:P.U,args:[H.cx(this,"bP",0)]}))}},
di:{"^":"c;a,b,c,0d,$ti",
sb6:function(a){this.d=H.A(a,H.r(this,0))},
gE:function(a){return this.d},
w:function(){var z,y,x,w
z=this.a
y=J.bh(z)
x=y.gk(z)
if(this.b!==x)throw H.d(P.aI(z))
w=this.c
if(w>=x){this.sb6(null)
return!1}this.sb6(y.v(z,w));++this.c
return!0},
$isb_:1},
hi:{"^":"bP;a,b,$ti",
gk:function(a){return J.aT(this.a)},
v:function(a,b){return this.b.$1(J.f_(this.a,b))},
$asbP:function(a,b){return[b]},
$asl:function(a,b){return[b]}},
dH:{"^":"l;a,b,$ti",
gD:function(a){return new H.it(J.bI(this.a),this.b,this.$ti)}},
it:{"^":"b_;a,b,$ti",
w:function(){var z,y
for(z=this.a,y=this.b;z.w();)if(y.$1(z.gE(z)))return!0
return!1},
gE:function(a){var z=this.a
return z.gE(z)}},
bO:{"^":"c;$ti"}}],["","",,H,{"^":"",
aF:function(a){var z,y
z=H.v(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kk:function(a){return init.types[H.R(a)]},
kv:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.B(a).$isy},
h:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bn(a)
if(typeof z!=="string")throw H.d(H.bd(a))
return z},
b5:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b6:function(a){return H.hG(a)+H.bW(H.am(a),0,null)},
hG:function(a){var z,y,x,w,v,u,t,s,r
z=J.B(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.K||!!z.$isb9){u=C.z(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aF(w.length>1&&C.i.av(w,0)===36?C.i.cl(w,1):w)},
aL:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hN:function(a){var z=H.aL(a).getFullYear()+0
return z},
hL:function(a){var z=H.aL(a).getMonth()+1
return z},
hH:function(a){var z=H.aL(a).getDate()+0
return z},
hI:function(a){var z=H.aL(a).getHours()+0
return z},
hK:function(a){var z=H.aL(a).getMinutes()+0
return z},
hM:function(a){var z=H.aL(a).getSeconds()+0
return z},
hJ:function(a){var z=H.aL(a).getMilliseconds()+0
return z},
bC:function(a){throw H.d(H.bd(a))},
i:function(a,b){if(a==null)J.aT(a)
throw H.d(H.bf(a,b))},
bf:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aH(!0,b,"index",null)
z=H.R(J.aT(a))
if(!(b<0)){if(typeof z!=="number")return H.bC(z)
y=b>=z}else y=!0
if(y)return P.G(b,a,"index",null,z)
return P.bR(b,"index",null)},
bd:function(a){return new P.aH(!0,a,null,null)},
d:function(a){var z
if(a==null)a=new P.dq()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.en})
z.name=""}else z.toString=H.en
return z},
en:function(){return J.bn(this.dartException)},
a0:function(a){throw H.d(a)},
E:function(a){throw H.d(P.aI(a))},
aa:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kG(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.bk(x,16)&8191)===10)switch(w){case 438:return z.$1(H.ck(H.h(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dp(H.h(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.eu()
u=$.ev()
t=$.ew()
s=$.ex()
r=$.eA()
q=$.eB()
p=$.ez()
$.ey()
o=$.eD()
n=$.eC()
m=v.N(y)
if(m!=null)return z.$1(H.ck(H.v(y),m))
else{m=u.N(y)
if(m!=null){m.method="call"
return z.$1(H.ck(H.v(y),m))}else{m=t.N(y)
if(m==null){m=s.N(y)
if(m==null){m=r.N(y)
if(m==null){m=q.N(y)
if(m==null){m=p.N(y)
if(m==null){m=s.N(y)
if(m==null){m=o.N(y)
if(m==null){m=n.N(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dp(H.v(y),m))}}return z.$1(new H.iq(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dw()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aH(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dw()
return a},
bj:function(a){var z
if(a==null)return new H.dX(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dX(a)},
kg:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.h(0,a[y],a[x])}return b},
ku:function(a,b,c,d,e,f){H.k(a,"$isbp")
switch(H.R(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.d8("Unsupported number of arguments for wrapped closure"))},
be:function(a,b){var z
H.R(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ku)
a.$identity=z
return z},
fx:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.B(d).$isa){z.$reflectionInfo=d
x=H.hR(z).r}else x=d
w=e?Object.create(new H.i5().constructor.prototype):Object.create(new H.cc(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ad
if(typeof u!=="number")return u.L()
$.ad=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.cZ(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kk,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cX:H.cd
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.d("Error in reflectionInfo.")
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
fu:function(a,b,c,d){var z=H.cd
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cZ:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fw(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fu(y,!w,z,b)
if(y===0){w=$.ad
if(typeof w!=="number")return w.L()
$.ad=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aU
if(v==null){v=H.bL("self")
$.aU=v}return new Function(w+H.h(v)+";return "+u+"."+H.h(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ad
if(typeof w!=="number")return w.L()
$.ad=w+1
t+=w
w="return function("+t+"){return this."
v=$.aU
if(v==null){v=H.bL("self")
$.aU=v}return new Function(w+H.h(v)+"."+H.h(z)+"("+t+");}")()},
fv:function(a,b,c,d){var z,y
z=H.cd
y=H.cX
switch(b?-1:a){case 0:throw H.d(H.hY("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fw:function(a,b){var z,y,x,w,v,u,t,s
z=$.aU
if(z==null){z=H.bL("self")
$.aU=z}y=$.cW
if(y==null){y=H.bL("receiver")
$.cW=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fv(w,!u,x,b)
if(w===1){z="return function(){return this."+H.h(z)+"."+H.h(x)+"(this."+H.h(y)+");"
y=$.ad
if(typeof y!=="number")return y.L()
$.ad=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.h(z)+"."+H.h(x)+"(this."+H.h(y)+", "+s+");"
y=$.ad
if(typeof y!=="number")return y.L()
$.ad=y+1
return new Function(z+y+"}")()},
cv:function(a,b,c,d,e,f,g){return H.fx(a,b,H.R(c),d,!!e,!!f,g)},
v:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.a8(a,"String"))},
eb:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.a8(a,"double"))},
cA:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.a8(a,"num"))},
bZ:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.a8(a,"bool"))},
R:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.a8(a,"int"))},
cB:function(a,b){throw H.d(H.a8(a,H.aF(H.v(b).substring(3))))},
kB:function(a,b){throw H.d(H.cY(a,H.aF(H.v(b).substring(3))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.B(a)[b])return a
H.cB(a,b)},
ai:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.B(a)[b]
else z=!0
if(z)return a
H.kB(a,b)},
ek:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.B(a)[b])return a
H.cB(a,b)},
bD:function(a){if(a==null)return a
if(!!J.B(a).$isa)return a
throw H.d(H.a8(a,"List<dynamic>"))},
kw:function(a,b){var z
if(a==null)return a
z=J.B(a)
if(!!z.$isa)return a
if(z[b])return a
H.cB(a,b)},
cw:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.R(z)]
else return a.$S()}return},
bz:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cw(J.B(a))
if(z==null)return!1
return H.e2(z,null,b,null)},
n:function(a,b){var z,y
if(a==null)return a
if($.cr)return a
$.cr=!0
try{if(H.bz(a,b))return a
z=H.bE(b)
y=H.a8(a,z)
throw H.d(y)}finally{$.cr=!1}},
c0:function(a,b){if(a!=null&&!H.cu(a,b))H.a0(H.a8(a,H.bE(b)))
return a},
e6:function(a){var z,y
z=J.B(a)
if(!!z.$isp){y=H.cw(z)
if(y!=null)return H.bE(y)
return"Closure"}return H.b6(a)},
kF:function(a){throw H.d(new P.fE(H.v(a)))},
eg:function(a){return init.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
am:function(a){if(a==null)return
return a.$ti},
mW:function(a,b,c){return H.aS(a["$as"+H.h(c)],H.am(b))},
bi:function(a,b,c,d){var z
H.v(c)
H.R(d)
z=H.aS(a["$as"+H.h(c)],H.am(b))
return z==null?null:z[d]},
cx:function(a,b,c){var z
H.v(b)
H.R(c)
z=H.aS(a["$as"+H.h(b)],H.am(a))
return z==null?null:z[c]},
r:function(a,b){var z
H.R(b)
z=H.am(a)
return z==null?null:z[b]},
bE:function(a){return H.aD(a,null)},
aD:function(a,b){var z,y
H.x(b,"$isa",[P.e],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aF(a[0].builtin$cls)+H.bW(a,1,b)
if(typeof a=="function")return H.aF(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.R(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.h(b[y])}if('func' in a)return H.k1(a,b)
if('futureOr' in a)return"FutureOr<"+H.aD("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
k1:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.e]
H.x(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.f([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.j(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.i.L(t,b[r])
q=y[u]
if(q!=null&&q!==P.c)t+=" extends "+H.aD(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aD(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aD(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aD(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kf(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.v(z[l])
n=n+m+H.aD(i[h],b)+(" "+H.h(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bW:function(a,b,c){var z,y,x,w,v,u
H.x(c,"$isa",[P.e],"$asa")
if(a==null)return""
z=new P.cp("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aD(u,c)}return"<"+z.l(0)+">"},
kj:function(a){var z,y,x,w
z=J.B(a)
if(!!z.$isp){y=H.cw(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.am(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aS:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aQ:function(a,b,c,d){var z,y
H.v(b)
H.bD(c)
H.v(d)
if(a==null)return!1
z=H.am(a)
y=J.B(a)
if(y[b]==null)return!1
return H.e9(H.aS(y[d],z),null,c,null)},
bF:function(a,b,c,d){H.v(b)
H.bD(c)
H.v(d)
if(a==null)return a
if(H.aQ(a,b,c,d))return a
throw H.d(H.cY(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aF(b.substring(3))+H.bW(c,0,null),init.mangledGlobalNames)))},
x:function(a,b,c,d){H.v(b)
H.bD(c)
H.v(d)
if(a==null)return a
if(H.aQ(a,b,c,d))return a
throw H.d(H.a8(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aF(b.substring(3))+H.bW(c,0,null),init.mangledGlobalNames)))},
e9:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a2(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a2(a[y],b,c[y],d))return!1
return!0},
mT:function(a,b,c){return a.apply(b,H.aS(J.B(b)["$as"+H.h(c)],H.am(b)))},
ei:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="c"||a.builtin$cls==="H"||a===-1||a===-2||H.ei(z)}return!1},
cu:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="c"||b.builtin$cls==="H"||b===-1||b===-2||H.ei(b)
if(b==null||b===-1||b.builtin$cls==="c"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cu(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bz(a,b)}z=J.B(a).constructor
y=H.am(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a2(z,null,b,null)},
A:function(a,b){if(a!=null&&!H.cu(a,b))throw H.d(H.a8(a,H.bE(b)))
return a},
a2:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="c"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="c"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a2(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="H")return!0
if('func' in c)return H.e2(a,b,c,d)
if('func' in a)return c.builtin$cls==="bp"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a2("type" in a?a.type:null,b,x,d)
else if(H.a2(a,b,x,d))return!0
else{if(!('$is'+"aX" in y.prototype))return!1
w=y.prototype["$as"+"aX"]
v=H.aS(w,z?a.slice(1):null)
return H.a2(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.e9(H.aS(r,z),b,u,d)},
e2:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a2(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.a2(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a2(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a2(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kA(m,b,l,d)},
kA:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a2(c[w],d,a[w],b))return!1}return!0},
mU:function(a,b,c){Object.defineProperty(a,H.v(b),{value:c,enumerable:false,writable:true,configurable:true})},
kx:function(a){var z,y,x,w,v,u
z=H.v($.eh.$1(a))
y=$.c_[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c2[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.v($.e8.$2(a,z))
if(z!=null){y=$.c_[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c2[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c3(x)
$.c_[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c2[z]=x
return x}if(v==="-"){u=H.c3(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.el(a,x)
if(v==="*")throw H.d(P.dG(z))
if(init.leafTags[z]===true){u=H.c3(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.el(a,x)},
el:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cz(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c3:function(a){return J.cz(a,!1,null,!!a.$isy)},
kz:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c3(z)
else return J.cz(z,c,null,null)},
ks:function(){if(!0===$.cy)return
$.cy=!0
H.kt()},
kt:function(){var z,y,x,w,v,u,t,s
$.c_=Object.create(null)
$.c2=Object.create(null)
H.ko()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.em.$1(v)
if(u!=null){t=H.kz(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
ko:function(){var z,y,x,w,v,u,t
z=C.O()
z=H.aP(C.L,H.aP(C.Q,H.aP(C.y,H.aP(C.y,H.aP(C.P,H.aP(C.M,H.aP(C.N(C.z),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eh=new H.kp(v)
$.e8=new H.kq(u)
$.em=new H.kr(t)},
aP:function(a,b){return a(b)||b},
kE:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hQ:{"^":"c;a,b,c,d,e,f,r,0x",u:{
hR:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.ci(z)
y=z[0]
x=z[1]
return new H.hQ(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ik:{"^":"c;a,b,c,d,e,f",
N:function(a){var z,y,x
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
u:{
af:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.f([],[P.e])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ik(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bS:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dD:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hA:{"^":"S;a,b",
l:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
u:{
dp:function(a,b){return new H.hA(a,b==null?null:b.method)}}},
h8:{"^":"S;a,b,c",
l:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.h(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.h(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.h(this.a)+")"},
u:{
ck:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.h8(a,y,z?null:b.receiver)}}},
iq:{"^":"S;a",
l:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kG:{"^":"p:5;a",
$1:function(a){if(!!J.B(a).$isS)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dX:{"^":"c;a,0b",
l:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa7:1},
p:{"^":"c;",
l:function(a){return"Closure '"+H.b6(this).trim()+"'"},
gcb:function(){return this},
$isbp:1,
gcb:function(){return this}},
dy:{"^":"p;"},
i5:{"^":"dy;",
l:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aF(z)+"'"}},
cc:{"^":"dy;a,b,c,d",
G:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cc))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gB:function(a){var z,y
z=this.c
if(z==null)y=H.b5(this.a)
else y=typeof z!=="object"?J.an(z):H.b5(z)
return(y^H.b5(this.b))>>>0},
l:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.b6(z)+"'")},
u:{
cd:function(a){return a.a},
cX:function(a){return a.c},
bL:function(a){var z,y,x,w,v
z=new H.cc("self","target","receiver","name")
y=J.ci(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
il:{"^":"S;a",
l:function(a){return this.a},
u:{
a8:function(a,b){return new H.il("TypeError: "+P.bN(a)+": type '"+H.e6(a)+"' is not a subtype of type '"+b+"'")}}},
fs:{"^":"S;a",
l:function(a){return this.a},
u:{
cY:function(a,b){return new H.fs("CastError: "+P.bN(a)+": type '"+H.e6(a)+"' is not a subtype of type '"+b+"'")}}},
hX:{"^":"S;a",
l:function(a){return"RuntimeError: "+H.h(this.a)},
u:{
hY:function(a){return new H.hX(a)}}},
dE:{"^":"c;a,0b,0c,0d",
gai:function(){var z=this.b
if(z==null){z=H.bE(this.a)
this.b=z}return z},
l:function(a){return this.gai()},
gB:function(a){var z=this.d
if(z==null){z=C.i.gB(this.gai())
this.d=z}return z},
G:function(a,b){if(b==null)return!1
return b instanceof H.dE&&this.gai()===b.gai()}},
df:{"^":"dj;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gJ:function(a){return new H.ar(this,[H.r(this,0)])},
al:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cR(z,b)}else{y=this.dB(b)
return y}},
dB:function(a){var z=this.d
if(z==null)return!1
return this.aI(this.aB(z,J.an(a)&0x3ffffff),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ag(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ag(w,b)
x=y==null?null:y.b
return x}else return this.dC(b)},
dC:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aB(z,J.an(a)&0x3ffffff)
x=this.aI(y,a)
if(x<0)return
return y[x].b},
h:function(a,b,c){var z,y,x,w,v,u
H.A(b,H.r(this,0))
H.A(c,H.r(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aD()
this.b=z}this.b7(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aD()
this.c=y}this.b7(y,b,c)}else{x=this.d
if(x==null){x=this.aD()
this.d=x}w=J.an(b)&0x3ffffff
v=this.aB(x,w)
if(v==null)this.aG(x,w,[this.at(b,c)])
else{u=this.aI(v,b)
if(u>=0)v[u].b=c
else v.push(this.at(b,c))}}},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.aI(this))
z=z.c}},
b7:function(a,b,c){var z
H.A(b,H.r(this,0))
H.A(c,H.r(this,1))
z=this.ag(a,b)
if(z==null)this.aG(a,b,this.at(b,c))
else z.b=c},
b9:function(){this.r=this.r+1&67108863},
at:function(a,b){var z,y
z=new H.hd(H.A(a,H.r(this,0)),H.A(b,H.r(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b9()
return z},
aI:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aG(a[y].a,b))return y
return-1},
l:function(a){return P.dk(this)},
ag:function(a,b){return a[b]},
aB:function(a,b){return a[b]},
aG:function(a,b,c){a[b]=c},
cS:function(a,b){delete a[b]},
cR:function(a,b){return this.ag(a,b)!=null},
aD:function(){var z=Object.create(null)
this.aG(z,"<non-identifier-key>",z)
this.cS(z,"<non-identifier-key>")
return z},
$isdg:1},
hd:{"^":"c;a,b,0c,0d"},
ar:{"^":"d4;a,$ti",
gk:function(a){return this.a.a},
gD:function(a){var z,y
z=this.a
y=new H.he(z,z.r,this.$ti)
y.c=z.e
return y}},
he:{"^":"c;a,b,0c,0d,$ti",
sb8:function(a){this.d=H.A(a,H.r(this,0))},
gE:function(a){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aI(z))
else{z=this.c
if(z==null){this.sb8(null)
return!1}else{this.sb8(z.a)
this.c=this.c.c
return!0}}},
$isb_:1},
kp:{"^":"p:5;a",
$1:function(a){return this.a(a)}},
kq:{"^":"p:13;a",
$2:function(a,b){return this.a(a,b)}},
kr:{"^":"p:14;a",
$1:function(a){return this.a(H.v(a))}}}],["","",,H,{"^":"",
kf:function(a){return J.h5(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
c4:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bV:function(a){var z,y
if(!!J.B(a).$isw)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.h(z,y,a[y])
return z},
ah:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bf(b,a))},
hv:{"^":"j;",$isim:1,"%":"DataView;ArrayBufferView;cm|dR|dS|dl|dT|dU|at"},
cm:{"^":"hv;",
gk:function(a){return a.length},
$isw:1,
$asw:I.bg,
$isy:1,
$asy:I.bg},
dl:{"^":"dS;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
h:function(a,b,c){H.eb(c)
H.ah(b,a,a.length)
a[b]=c},
$asbO:function(){return[P.a4]},
$asq:function(){return[P.a4]},
$isl:1,
$asl:function(){return[P.a4]},
$isa:1,
$asa:function(){return[P.a4]},
"%":"Float64Array"},
at:{"^":"dU;",
h:function(a,b,c){H.R(c)
H.ah(b,a,a.length)
a[b]=c},
$asbO:function(){return[P.D]},
$asq:function(){return[P.D]},
$isl:1,
$asl:function(){return[P.D]},
$isa:1,
$asa:function(){return[P.D]}},
hu:{"^":"dl;",$isak:1,"%":"Float32Array"},
lF:{"^":"at;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lG:{"^":"at;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
$ish2:1,
"%":"Int32Array"},
lH:{"^":"at;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lI:{"^":"at;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hw:{"^":"at;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
$isms:1,
"%":"Uint32Array"},
lJ:{"^":"at;",
gk:function(a){return a.length},
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lK:{"^":"at;",
gk:function(a){return a.length},
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dR:{"^":"cm+q;"},
dS:{"^":"dR+bO;"},
dT:{"^":"cm+q;"},
dU:{"^":"dT+bO;"}}],["","",,P,{"^":"",
ix:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.k9()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.be(new P.iz(z),1)).observe(y,{childList:true})
return new P.iy(z,y,x)}else if(self.setImmediate!=null)return P.ka()
return P.kb()},
mC:[function(a){self.scheduleImmediate(H.be(new P.iA(H.n(a,{func:1,ret:-1})),0))},"$1","k9",4,0,4],
mD:[function(a){self.setImmediate(H.be(new P.iB(H.n(a,{func:1,ret:-1})),0))},"$1","ka",4,0,4],
mE:[function(a){H.n(a,{func:1,ret:-1})
P.jK(0,a)},"$1","kb",4,0,4],
k5:function(a,b){if(H.bz(a,{func:1,args:[P.c,P.a7]}))return H.n(a,{func:1,ret:null,args:[P.c,P.a7]})
if(H.bz(a,{func:1,args:[P.c]}))return H.n(a,{func:1,ret:null,args:[P.c]})
throw H.d(P.cU(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
k4:function(){var z,y
for(;z=$.aO,z!=null;){$.bc=null
y=z.b
$.aO=y
if(y==null)$.bb=null
z.a.$0()}},
mR:[function(){$.cs=!0
try{P.k4()}finally{$.bc=null
$.cs=!1
if($.aO!=null)$.cE().$1(P.ea())}},"$0","ea",0,0,1],
e5:function(a){var z=new P.dJ(H.n(a,{func:1,ret:-1}))
if($.aO==null){$.bb=z
$.aO=z
if(!$.cs)$.cE().$1(P.ea())}else{$.bb.b=z
$.bb=z}},
k8:function(a){var z,y,x
H.n(a,{func:1,ret:-1})
z=$.aO
if(z==null){P.e5(a)
$.bc=$.bb
return}y=new P.dJ(a)
x=$.bc
if(x==null){y.b=z
$.bc=y
$.aO=y}else{y.b=x.b
x.b=y
$.bc=y
if(y.b==null)$.bb=y}},
kC:function(a){var z,y
z={func:1,ret:-1}
H.n(a,z)
y=$.K
if(C.e===y){P.bY(null,null,C.e,a)
return}y.toString
P.bY(null,null,y,H.n(y.bs(a),z))},
bX:function(a,b,c,d,e){var z={}
z.a=d
P.k8(new P.k6(z,e))},
e3:function(a,b,c,d,e){var z,y
H.n(d,{func:1,ret:e})
y=$.K
if(y===c)return d.$0()
$.K=c
z=y
try{y=d.$0()
return y}finally{$.K=z}},
e4:function(a,b,c,d,e,f,g){var z,y
H.n(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.K
if(y===c)return d.$1(e)
$.K=c
z=y
try{y=d.$1(e)
return y}finally{$.K=z}},
k7:function(a,b,c,d,e,f,g,h,i){var z,y
H.n(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.K
if(y===c)return d.$2(e,f)
$.K=c
z=y
try{y=d.$2(e,f)
return y}finally{$.K=z}},
bY:function(a,b,c,d){var z
H.n(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.bs(d):c.dg(d,-1)
P.e5(d)},
iz:{"^":"p:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iy:{"^":"p:15;a,b,c",
$1:function(a){var z,y
this.a.a=H.n(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iA:{"^":"p:0;a",
$0:function(){this.a.$0()}},
iB:{"^":"p:0;a",
$0:function(){this.a.$0()}},
jJ:{"^":"c;a,0b,c",
cN:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.be(new P.jL(this,b),0),a)
else throw H.d(P.z("`setTimeout()` not found."))},
u:{
jK:function(a,b){var z=new P.jJ(!0,0)
z.cN(a,b)
return z}}},
jL:{"^":"p:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
iE:{"^":"c;$ti"},
jE:{"^":"iE;a,$ti"},
aN:{"^":"c;0a,b,c,d,e,$ti",
dE:function(a){if(this.c!==6)return!0
return this.b.b.aJ(H.n(this.d,{func:1,ret:P.U,args:[P.c]}),a.a,P.U,P.c)},
dA:function(a){var z,y,x,w
z=this.e
y=P.c
x={futureOr:1,type:H.r(this,1)}
w=this.b.b
if(H.bz(z,{func:1,args:[P.c,P.a7]}))return H.c0(w.dJ(z,a.a,a.b,null,y,P.a7),x)
else return H.c0(w.aJ(H.n(z,{func:1,args:[P.c]}),a.a,null,y),x)}},
ag:{"^":"c;bl:a<,b,0d3:c<,$ti",
bX:function(a,b,c){var z,y,x,w
z=H.r(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.K
if(y!==C.e){y.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.k5(b,y)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.ag(0,$.K,[c])
w=b==null?1:3
this.bb(new P.aN(x,w,a,b,[z,c]))
return x},
bW:function(a,b){return this.bX(a,null,b)},
bb:function(a){var z,y
z=this.a
if(z<=1){a.a=H.k(this.c,"$isaN")
this.c=a}else{if(z===2){y=H.k(this.c,"$isag")
z=y.a
if(z<4){y.bb(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bY(null,null,z,H.n(new P.iT(this,a),{func:1,ret:-1}))}},
bi:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.k(this.c,"$isaN")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.k(this.c,"$isag")
y=u.a
if(y<4){u.bi(a)
return}this.a=y
this.c=u.c}z.a=this.ah(a)
y=this.b
y.toString
P.bY(null,null,y,H.n(new P.iY(z,this),{func:1,ret:-1}))}},
aF:function(){var z=H.k(this.c,"$isaN")
this.c=null
return this.ah(z)},
ah:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
aw:function(a){var z,y,x
z=H.r(this,0)
H.c0(a,{futureOr:1,type:z})
y=this.$ti
if(H.aQ(a,"$isaX",y,"$asaX"))if(H.aQ(a,"$isag",y,null))P.dM(a,this)
else P.iU(a,this)
else{x=this.aF()
H.A(a,z)
this.a=4
this.c=a
P.ba(this,x)}},
bd:function(a,b){var z
H.k(b,"$isa7")
z=this.aF()
this.a=8
this.c=new P.a1(a,b)
P.ba(this,z)},
$isaX:1,
u:{
iU:function(a,b){var z,y,x
b.a=1
try{a.bX(new P.iV(b),new P.iW(b),null)}catch(x){z=H.aa(x)
y=H.bj(x)
P.kC(new P.iX(b,z,y))}},
dM:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.k(a.c,"$isag")
if(z>=4){y=b.aF()
b.a=a.a
b.c=a.c
P.ba(b,y)}else{y=H.k(b.c,"$isaN")
b.a=2
b.c=a
a.bi(y)}},
ba:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.k(y.c,"$isa1")
y=y.b
u=v.a
t=v.b
y.toString
P.bX(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.ba(z.a,b)}y=z.a
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
if(p){H.k(r,"$isa1")
y=y.b
u=r.a
t=r.b
y.toString
P.bX(null,null,y,u,t)
return}o=$.K
if(o!=q)$.K=q
else o=null
y=b.c
if(y===8)new P.j0(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.j_(x,b,r).$0()}else if((y&2)!==0)new P.iZ(z,x,b).$0()
if(o!=null)$.K=o
y=x.b
if(!!J.B(y).$isaX){if(y.a>=4){n=H.k(t.c,"$isaN")
t.c=null
b=t.ah(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dM(y,t)
return}}m=b.b
n=H.k(m.c,"$isaN")
m.c=null
b=m.ah(n)
y=x.a
u=x.b
if(!y){H.A(u,H.r(m,0))
m.a=4
m.c=u}else{H.k(u,"$isa1")
m.a=8
m.c=u}z.a=m
y=m}}}},
iT:{"^":"p:0;a,b",
$0:function(){P.ba(this.a,this.b)}},
iY:{"^":"p:0;a,b",
$0:function(){P.ba(this.b,this.a.a)}},
iV:{"^":"p:6;a",
$1:function(a){var z=this.a
z.a=0
z.aw(a)}},
iW:{"^":"p:16;a",
$2:function(a,b){H.k(b,"$isa7")
this.a.bd(a,b)},
$1:function(a){return this.$2(a,null)}},
iX:{"^":"p:0;a,b,c",
$0:function(){this.a.bd(this.b,this.c)}},
j0:{"^":"p:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bV(H.n(w.d,{func:1}),null)}catch(v){y=H.aa(v)
x=H.bj(v)
if(this.d){w=H.k(this.a.a.c,"$isa1").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.k(this.a.a.c,"$isa1")
else u.b=new P.a1(y,x)
u.a=!0
return}if(!!J.B(z).$isaX){if(z instanceof P.ag&&z.gbl()>=4){if(z.gbl()===8){w=this.b
w.b=H.k(z.gd3(),"$isa1")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.bW(new P.j1(t),null)
w.a=!1}}},
j1:{"^":"p:17;a",
$1:function(a){return this.a}},
j_:{"^":"p:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.r(x,0)
v=H.A(this.c,w)
u=H.r(x,1)
this.a.b=x.b.b.aJ(H.n(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aa(t)
y=H.bj(t)
x=this.a
x.b=new P.a1(z,y)
x.a=!0}}},
iZ:{"^":"p:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.k(this.a.a.c,"$isa1")
w=this.c
if(w.dE(z)&&w.e!=null){v=this.b
v.b=w.dA(z)
v.a=!1}}catch(u){y=H.aa(u)
x=H.bj(u)
w=H.k(this.a.a.c,"$isa1")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a1(y,x)
s.a=!0}}},
dJ:{"^":"c;a,0b"},
i9:{"^":"c;$ti",
gk:function(a){var z,y,x,w
z={}
y=new P.ag(0,$.K,[P.D])
z.a=0
x=H.r(this,0)
w=H.n(new P.ib(z,this),{func:1,ret:-1,args:[x]})
H.n(new P.ic(z,y),{func:1,ret:-1})
W.aC(this.a,this.b,w,!1,x)
return y}},
ib:{"^":"p;a,b",
$1:function(a){H.A(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.H,args:[H.r(this.b,0)]}}},
ic:{"^":"p:0;a,b",
$0:function(){this.b.aw(this.a.a)}},
ia:{"^":"c;"},
a1:{"^":"c;a,b",
l:function(a){return H.h(this.a)},
$isS:1},
jR:{"^":"c;",$ismA:1},
k6:{"^":"p:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dq()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.l(0)
throw x}},
jn:{"^":"jR;",
dK:function(a){var z,y,x
H.n(a,{func:1,ret:-1})
try{if(C.e===$.K){a.$0()
return}P.e3(null,null,this,a,-1)}catch(x){z=H.aa(x)
y=H.bj(x)
P.bX(null,null,this,z,H.k(y,"$isa7"))}},
dL:function(a,b,c){var z,y,x
H.n(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.e===$.K){a.$1(b)
return}P.e4(null,null,this,a,b,-1,c)}catch(x){z=H.aa(x)
y=H.bj(x)
P.bX(null,null,this,z,H.k(y,"$isa7"))}},
dg:function(a,b){return new P.jp(this,H.n(a,{func:1,ret:b}),b)},
bs:function(a){return new P.jo(this,H.n(a,{func:1,ret:-1}))},
dh:function(a,b){return new P.jq(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
bV:function(a,b){H.n(a,{func:1,ret:b})
if($.K===C.e)return a.$0()
return P.e3(null,null,this,a,b)},
aJ:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.K===C.e)return a.$1(b)
return P.e4(null,null,this,a,b,c,d)},
dJ:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.K===C.e)return a.$2(b,c)
return P.k7(null,null,this,a,b,c,d,e,f)}},
jp:{"^":"p;a,b,c",
$0:function(){return this.a.bV(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jo:{"^":"p:1;a,b",
$0:function(){return this.a.dK(this.b)}},
jq:{"^":"p;a,b,c",
$1:function(a){var z=this.c
return this.a.dL(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dh:function(a,b,c){H.bD(a)
return H.x(H.kg(a,new H.df(0,0,[b,c])),"$isdg",[b,c],"$asdg")},
T:function(a,b){return new H.df(0,0,[a,b])},
a6:function(a,b,c,d){return new P.j8(0,0,[d])},
h3:function(a,b,c){var z,y
if(P.ct(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.f([],[P.e])
y=$.bk()
C.a.j(y,a)
try{P.k3(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.dx(b,H.kw(z,"$isl"),", ")+c
return y.charCodeAt(0)==0?y:y},
ch:function(a,b,c){var z,y,x
if(P.ct(a))return b+"..."+c
z=new P.cp(b)
y=$.bk()
C.a.j(y,a)
try{x=z
x.a=P.dx(x.ga1(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.ga1()+c
y=z.ga1()
return y.charCodeAt(0)==0?y:y},
ct:function(a){var z,y
for(z=0;y=$.bk(),z<y.length;++z)if(a===y[z])return!0
return!1},
k3:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.x(b,"$isa",[P.e],"$asa")
z=a.gD(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.w())return
w=H.h(z.gE(z))
C.a.j(b,w)
y+=w.length+2;++x}if(!z.w()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gE(z);++x
if(!z.w()){if(x<=4){C.a.j(b,H.h(t))
return}v=H.h(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gE(z);++x
for(;z.w();t=s,s=r){r=z.gE(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2;--x}C.a.j(b,"...")
return}}u=H.h(t)
v=H.h(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.j(b,q)
C.a.j(b,u)
C.a.j(b,v)},
cl:function(a,b){var z,y,x
z=P.a6(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.E)(a),++x)z.j(0,H.A(a[x],b))
return z},
dk:function(a){var z,y,x
z={}
if(P.ct(a))return"{...}"
y=new P.cp("")
try{C.a.j($.bk(),a)
x=y
x.a=x.ga1()+"{"
z.a=!0
J.f2(a,new P.hh(z,y))
z=y
z.a=z.ga1()+"}"}finally{z=$.bk()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.ga1()
return z.charCodeAt(0)==0?z:z},
j8:{"^":"j3;a,0b,0c,0d,0e,0f,r,$ti",
gD:function(a){var z=new P.dQ(this,this.r,this.$ti)
z.c=this.e
return z},
gk:function(a){return this.a},
A:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.k(z[b],"$isby")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.k(y[b],"$isby")!=null}else return this.cQ(b)},
cQ:function(a){var z=this.d
if(z==null)return!1
return this.aA(this.bg(z,a),a)>=0},
j:function(a,b){var z,y
H.A(b,H.r(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cq()
this.b=z}return this.ba(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cq()
this.c=y}return this.ba(y,b)}else return this.cO(0,b)},
cO:function(a,b){var z,y,x
H.A(b,H.r(this,0))
z=this.d
if(z==null){z=P.cq()
this.d=z}y=this.be(b)
x=z[y]
if(x==null)z[y]=[this.aE(b)]
else{if(this.aA(x,b)>=0)return!1
x.push(this.aE(b))}return!0},
bU:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bj(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bj(this.c,b)
else return this.cZ(0,b)},
cZ:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bg(z,b)
x=this.aA(y,b)
if(x<0)return!1
this.bn(y.splice(x,1)[0])
return!0},
aa:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aC()}},
ba:function(a,b){H.A(b,H.r(this,0))
if(H.k(a[b],"$isby")!=null)return!1
a[b]=this.aE(b)
return!0},
bj:function(a,b){var z
if(a==null)return!1
z=H.k(a[b],"$isby")
if(z==null)return!1
this.bn(z)
delete a[b]
return!0},
aC:function(){this.r=this.r+1&67108863},
aE:function(a){var z,y
z=new P.by(H.A(a,H.r(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aC()
return z},
bn:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aC()},
be:function(a){return J.an(a)&0x3ffffff},
bg:function(a,b){return a[this.be(b)]},
aA:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aG(a[y].a,b))return y
return-1},
u:{
cq:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
by:{"^":"c;a,0b,0c"},
dQ:{"^":"c;a,b,0c,0d,$ti",
sbc:function(a){this.d=H.A(a,H.r(this,0))},
gE:function(a){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aI(z))
else{z=this.c
if(z==null){this.sbc(null)
return!1}else{this.sbc(H.A(z.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
$isb_:1,
u:{
j9:function(a,b,c){var z=new P.dQ(a,b,[c])
z.c=a.e
return z}}},
j3:{"^":"hZ;"},
hf:{"^":"ja;",$isl:1,$isa:1},
q:{"^":"c;$ti",
gD:function(a){return new H.di(a,this.gk(a),0,[H.bi(this,a,"q",0)])},
v:function(a,b){return this.i(a,b)},
dz:function(a,b,c,d){var z,y,x
H.A(b,d)
H.n(c,{func:1,ret:d,args:[d,H.bi(this,a,"q",0)]})
z=this.gk(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.i(a,x))
if(z!==this.gk(a))throw H.d(P.aI(a))}return y},
l:function(a){return P.ch(a,"[","]")}},
dj:{"^":"W;"},
hh:{"^":"p:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.h(a)
z.a=y+": "
z.a+=H.h(b)}},
W:{"^":"c;$ti",
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[H.bi(this,a,"W",0),H.bi(this,a,"W",1)]})
for(z=J.bI(this.gJ(a));z.w();){y=z.gE(z)
b.$2(y,this.i(a,y))}},
gk:function(a){return J.aT(this.gJ(a))},
l:function(a){return P.dk(a)},
$isM:1},
i_:{"^":"c;$ti",
I:function(a,b){var z
for(z=J.bI(H.x(b,"$isl",this.$ti,"$asl"));z.w();)this.j(0,z.gE(z))},
l:function(a){return P.ch(this,"{","}")},
$isl:1,
$ism1:1},
hZ:{"^":"i_;"},
ja:{"^":"c+q;"}}],["","",,P,{"^":"",
fS:function(a){if(a instanceof H.p)return a.l(0)
return"Instance of '"+H.b6(a)+"'"},
bN:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bn(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fS(a)},
d8:function(a){return new P.iQ(a)},
aE:function(a){H.c4(H.h(a))},
U:{"^":"c;"},
"+bool":0,
bM:{"^":"c;a,b",
G:function(a,b){if(b==null)return!1
return b instanceof P.bM&&this.a===b.a&&!0},
S:function(a,b){return C.d.S(this.a,H.k(b,"$isbM").a)},
gB:function(a){var z=this.a
return(z^C.d.bk(z,30))&1073741823},
l:function(a){var z,y,x,w,v,u,t,s
z=P.fG(H.hN(this))
y=P.bo(H.hL(this))
x=P.bo(H.hH(this))
w=P.bo(H.hI(this))
v=P.bo(H.hK(this))
u=P.bo(H.hM(this))
t=P.fH(H.hJ(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isZ:1,
$asZ:function(){return[P.bM]},
u:{
fG:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fH:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bo:function(a){if(a>=10)return""+a
return"0"+a}}},
a4:{"^":"F;"},
"+double":0,
aV:{"^":"c;a",
a_:function(a,b){return C.d.a_(this.a,H.k(b,"$isaV").a)},
G:function(a,b){if(b==null)return!1
return b instanceof P.aV&&this.a===b.a},
gB:function(a){return this.a&0x1FFFFFFF},
S:function(a,b){return C.d.S(this.a,H.k(b,"$isaV").a)},
l:function(a){var z,y,x,w,v
z=new P.fP()
y=this.a
if(y<0)return"-"+new P.aV(0-y).l(0)
x=z.$1(C.d.a2(y,6e7)%60)
w=z.$1(C.d.a2(y,1e6)%60)
v=new P.fO().$1(y%1e6)
return""+C.d.a2(y,36e8)+":"+H.h(x)+":"+H.h(w)+"."+H.h(v)},
$isZ:1,
$asZ:function(){return[P.aV]},
u:{
fN:function(a,b,c,d,e,f){return new P.aV(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fO:{"^":"p:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fP:{"^":"p:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
S:{"^":"c;"},
dq:{"^":"S;",
l:function(a){return"Throw of null."}},
aH:{"^":"S;a,b,c,d",
gay:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gax:function(){return""},
l:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gay()+y+x
if(!this.a)return w
v=this.gax()
u=P.bN(this.b)
return w+v+": "+u},
u:{
cU:function(a,b,c){return new P.aH(!0,a,b,c)}}},
dr:{"^":"aH;e,f,a,b,c,d",
gay:function(){return"RangeError"},
gax:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.h(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.h(z)
else if(x>z)y=": Not in range "+H.h(z)+".."+H.h(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.h(z)}return y},
u:{
bR:function(a,b,c){return new P.dr(null,null,!0,a,b,"Value not in range")},
bQ:function(a,b,c,d,e){return new P.dr(b,c,!0,a,d,"Invalid value")}}},
h1:{"^":"aH;e,k:f>,a,b,c,d",
gay:function(){return"RangeError"},
gax:function(){var z,y
z=H.R(this.b)
if(typeof z!=="number")return z.ac()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.h(y)},
u:{
G:function(a,b,c,d,e){var z=H.R(e==null?J.aT(b):e)
return new P.h1(b,z,!0,a,c,"Index out of range")}}},
ir:{"^":"S;a",
l:function(a){return"Unsupported operation: "+this.a},
u:{
z:function(a){return new P.ir(a)}}},
ip:{"^":"S;a",
l:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
u:{
dG:function(a){return new P.ip(a)}}},
cn:{"^":"S;a",
l:function(a){return"Bad state: "+this.a},
u:{
co:function(a){return new P.cn(a)}}},
fy:{"^":"S;a",
l:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bN(z)+"."},
u:{
aI:function(a){return new P.fy(a)}}},
dw:{"^":"c;",
l:function(a){return"Stack Overflow"},
$isS:1},
fE:{"^":"S;a",
l:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iQ:{"^":"c;a",
l:function(a){return"Exception: "+this.a}},
bp:{"^":"c;"},
D:{"^":"F;"},
"+int":0,
l:{"^":"c;$ti",
aK:["co",function(a,b){var z=H.cx(this,"l",0)
return new H.dH(this,H.n(b,{func:1,ret:P.U,args:[z]}),[z])}],
gk:function(a){var z,y
z=this.gD(this)
for(y=0;z.w();)++y
return y},
v:function(a,b){var z,y,x
if(b<0)H.a0(P.bQ(b,0,null,"index",null))
for(z=this.gD(this),y=0;z.w();){x=z.gE(z)
if(b===y)return x;++y}throw H.d(P.G(b,this,"index",null,y))},
l:function(a){return P.h3(this,"(",")")}},
b_:{"^":"c;$ti"},
a:{"^":"c;$ti",$isl:1},
"+List":0,
M:{"^":"c;$ti"},
H:{"^":"c;",
gB:function(a){return P.c.prototype.gB.call(this,this)},
l:function(a){return"null"}},
"+Null":0,
F:{"^":"c;",$isZ:1,
$asZ:function(){return[P.F]}},
"+num":0,
c:{"^":";",
G:function(a,b){return this===b},
gB:function(a){return H.b5(this)},
l:function(a){return"Instance of '"+H.b6(this)+"'"},
toString:function(){return this.l(this)}},
a7:{"^":"c;"},
e:{"^":"c;",$isZ:1,
$asZ:function(){return[P.e]},
$ishD:1},
"+String":0,
cp:{"^":"c;a1:a<",
gk:function(a){return this.a.length},
l:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
u:{
dx:function(a,b,c){var z=J.bI(b)
if(!z.w())return a
if(c.length===0){do a+=H.h(z.gE(z))
while(z.w())}else{a+=H.h(z.gE(z))
for(;z.w();)a=a+c+H.h(z.gE(z))}return a}}}}],["","",,W,{"^":"",
ke:function(){return document},
fQ:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.p).T(z,a,b,c)
y.toString
z=W.u
z=new H.dH(new W.a9(y),H.n(new W.fR(),{func:1,ret:P.U,args:[z]}),[z])
x=z.gD(z)
if(!x.w())H.a0(H.dc())
w=x.gE(x)
if(x.w())H.a0(H.h4())
return H.k(w,"$isV")},
d7:function(a){H.k(a,"$isP")
return"wheel"},
aW:function(a){var z,y,x
z="element tag unavailable"
try{y=J.f5(a)
if(typeof y==="string")z=a.tagName}catch(x){H.aa(x)}return z},
iN:function(a,b){return document.createElement(a)},
bU:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dP:function(a,b,c,d){var z,y
z=W.bU(W.bU(W.bU(W.bU(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
e1:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.iH(a)
if(!!J.B(z).$isP)return z
return}else return H.k(a,"$isP")},
e7:function(a,b){var z
H.n(a,{func:1,ret:-1,args:[b]})
z=$.K
if(z===C.e)return a
return z.dh(a,b)},
N:{"^":"V;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kH:{"^":"j;0k:length=","%":"AccessibleNodeList"},
fl:{"^":"N;",
l:function(a){return String(a)},
$isfl:1,
"%":"HTMLAnchorElement"},
kI:{"^":"N;",
l:function(a){return String(a)},
"%":"HTMLAreaElement"},
cV:{"^":"N;",$iscV:1,"%":"HTMLBaseElement"},
fq:{"^":"j;","%":";Blob"},
bK:{"^":"N;",$isbK:1,"%":"HTMLBodyElement"},
ce:{"^":"N;0q:height=,0n:width=",
cc:function(a,b,c){var z=this.cV(a,b,P.kc(c,null))
return z},
cV:function(a,b,c){return a.getContext(b,c)},
$isce:1,
"%":"HTMLCanvasElement"},
kO:{"^":"j;",
ap:function(a){return P.a3(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kP:{"^":"u;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fz:{"^":"cf;",$isfz:1,"%":"CSSNumericValue|CSSUnitValue"},
kQ:{"^":"fC;0k:length=","%":"CSSPerspective"},
ao:{"^":"j;",$isao:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fA:{"^":"iF;0k:length=",
aO:function(a,b){var z=this.cW(a,this.au(a,b))
return z==null?"":z},
au:function(a,b){var z,y
z=$.ep()
y=z[b]
if(typeof y==="string")return y
y=this.d7(a,b)
z[b]=y
return y},
d7:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fI()+b
if(z in a)return z
return b},
cW:function(a,b){return a.getPropertyValue(b)},
gq:function(a){return a.height},
gn:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fB:{"^":"c;",
gq:function(a){return this.aO(a,"height")},
gn:function(a){return this.aO(a,"width")}},
cf:{"^":"j;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fC:{"^":"j;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
kS:{"^":"cf;0k:length=","%":"CSSTransformValue"},
kT:{"^":"cf;0k:length=","%":"CSSUnparsedValue"},
kV:{"^":"j;0k:length=",
i:function(a,b){return a[b]},
"%":"DataTransferItemList"},
fJ:{"^":"N;","%":"HTMLDivElement"},
fK:{"^":"u;",
da:function(a,b){return a.adoptNode(b)},
cd:function(a,b){return a.getElementById(b)},
bT:function(a,b){return a.querySelector(b)},
gbP:function(a){return new W.bw(a,"mousedown",!1,[W.X])},
gbQ:function(a){return new W.bw(a,"mousemove",!1,[W.X])},
gbR:function(a){return new W.bw(a,"mouseup",!1,[W.X])},
gbS:function(a){return new W.bw(a,H.v(W.d7(a)),!1,[W.aM])},
"%":"XMLDocument;Document"},
kW:{"^":"j;",
l:function(a){return String(a)},
"%":"DOMException"},
fL:{"^":"j;",
dr:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
kX:{"^":"iJ;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.x(c,"$isY",[P.F],"$asY")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[[P.Y,P.F]]},
$isy:1,
$asy:function(){return[[P.Y,P.F]]},
$asq:function(){return[[P.Y,P.F]]},
$isl:1,
$asl:function(){return[[P.Y,P.F]]},
$isa:1,
$asa:function(){return[[P.Y,P.F]]},
$ast:function(){return[[P.Y,P.F]]},
"%":"ClientRectList|DOMRectList"},
fM:{"^":"j;",
l:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gn(a))+" x "+H.h(this.gq(a))},
G:function(a,b){var z
if(b==null)return!1
if(!H.aQ(b,"$isY",[P.F],"$asY"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.o(b)
z=this.gn(a)===z.gn(b)&&this.gq(a)===z.gq(b)}else z=!1
else z=!1
return z},
gB:function(a){return W.dP(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF,this.gq(a)&0x1FFFFFFF)},
gq:function(a){return a.height},
gn:function(a){return a.width},
$isY:1,
$asY:function(){return[P.F]},
"%":";DOMRectReadOnly"},
kY:{"^":"iL;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.v(c)
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[P.e]},
$isy:1,
$asy:function(){return[P.e]},
$asq:function(){return[P.e]},
$isl:1,
$asl:function(){return[P.e]},
$isa:1,
$asa:function(){return[P.e]},
$ast:function(){return[P.e]},
"%":"DOMStringList"},
kZ:{"^":"j;0k:length=","%":"DOMTokenList"},
V:{"^":"u;0dM:tagName=",
gde:function(a){return new W.iM(a)},
l:function(a){return a.localName},
T:["ar",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.d6
if(z==null){z=H.f([],[W.ae])
y=new W.dm(z)
C.a.j(z,W.dN(null))
C.a.j(z,W.dY())
$.d6=y
d=y}else d=z
z=$.d5
if(z==null){z=new W.e0(d)
$.d5=z
c=z}else{z.a=d
c=z}}if($.aj==null){z=document
y=z.implementation
y=(y&&C.I).dr(y,"")
$.aj=y
$.cg=y.createRange()
y=$.aj
y.toString
y=y.createElement("base")
H.k(y,"$iscV")
y.href=z.baseURI
z=$.aj.head;(z&&C.J).K(z,y)}z=$.aj
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.k(y,"$isbK")}z=$.aj
if(!!this.$isbK)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.aj.body;(z&&C.p).K(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.A(C.T,a.tagName)){z=$.cg;(z&&C.B).ce(z,x)
z=$.cg
w=(z&&C.B).dn(z,b)}else{x.innerHTML=b
w=$.aj.createDocumentFragment()
for(z=J.o(w);y=x.firstChild,y!=null;)z.K(w,y)}z=$.aj.body
if(x==null?z!=null:x!==z)J.cO(x)
c.aT(w)
C.m.da(document,w)
return w},function(a,b,c){return this.T(a,b,c,null)},"dq",null,null,"gdU",5,5,null],
cg:function(a,b,c,d){a.textContent=null
this.K(a,this.T(a,b,c,d))},
cf:function(a,b){return this.cg(a,b,null,null)},
a5:function(a,b){return a.getAttribute(b)},
d_:function(a,b){return a.removeAttribute(b)},
gbP:function(a){return new W.bT(a,"mousedown",!1,[W.X])},
gbQ:function(a){return new W.bT(a,"mousemove",!1,[W.X])},
gbR:function(a){return new W.bT(a,"mouseup",!1,[W.X])},
gbS:function(a){return new W.bT(a,H.v(W.d7(a)),!1,[W.aM])},
$isV:1,
"%":";Element"},
fR:{"^":"p:18;",
$1:function(a){return!!J.B(H.k(a,"$isu")).$isV}},
l0:{"^":"N;0q:height=,0n:width=","%":"HTMLEmbedElement"},
a5:{"^":"j;",$isa5:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
P:{"^":"j;",
d9:function(a,b,c,d){H.n(c,{func:1,args:[W.a5]})
if(c!=null)this.cP(a,b,c,!1)},
cP:function(a,b,c,d){return a.addEventListener(b,H.be(H.n(c,{func:1,args:[W.a5]}),1),!1)},
$isP:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dV|dW|dZ|e_"},
ap:{"^":"fq;",$isap:1,"%":"File"},
lh:{"^":"iS;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$isap")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ap]},
$isy:1,
$asy:function(){return[W.ap]},
$asq:function(){return[W.ap]},
$isl:1,
$asl:function(){return[W.ap]},
$isa:1,
$asa:function(){return[W.ap]},
$ast:function(){return[W.ap]},
"%":"FileList"},
li:{"^":"P;0k:length=","%":"FileWriter"},
ll:{"^":"N;0k:length=","%":"HTMLFormElement"},
aq:{"^":"j;",$isaq:1,"%":"Gamepad"},
fZ:{"^":"N;","%":"HTMLHeadElement"},
lm:{"^":"j;0k:length=","%":"History"},
ln:{"^":"j5;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$isu")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.u]},
$isy:1,
$asy:function(){return[W.u]},
$asq:function(){return[W.u]},
$isl:1,
$asl:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$ast:function(){return[W.u]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
h_:{"^":"fK;","%":"HTMLDocument"},
lo:{"^":"N;0q:height=,0n:width=","%":"HTMLIFrameElement"},
lr:{"^":"j;0q:height=,0n:width=","%":"ImageBitmap"},
ls:{"^":"j;0q:height=,0n:width=","%":"ImageData"},
lt:{"^":"N;0q:height=,0n:width=","%":"HTMLImageElement"},
db:{"^":"N;0q:height=,0n:width=",$isdb:1,"%":"HTMLInputElement"},
b0:{"^":"dF;",$isb0:1,"%":"KeyboardEvent"},
hg:{"^":"j;",
l:function(a){return String(a)},
$ishg:1,
"%":"Location"},
hk:{"^":"N;","%":"HTMLAudioElement;HTMLMediaElement"},
lB:{"^":"j;0k:length=","%":"MediaList"},
lC:{"^":"jc;",
i:function(a,b){return P.a3(a.get(H.v(b)))},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a3(y.value[1]))}},
gJ:function(a){var z=H.f([],[P.e])
this.H(a,new W.hm(z))
return z},
gk:function(a){return a.size},
$asW:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"MIDIInputMap"},
hm:{"^":"p:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
lD:{"^":"jd;",
i:function(a,b){return P.a3(a.get(H.v(b)))},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a3(y.value[1]))}},
gJ:function(a){var z=H.f([],[P.e])
this.H(a,new W.hn(z))
return z},
gk:function(a){return a.size},
$asW:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"MIDIOutputMap"},
hn:{"^":"p:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
as:{"^":"j;",$isas:1,"%":"MimeType"},
lE:{"^":"jf;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$isas")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.as]},
$isy:1,
$asy:function(){return[W.as]},
$asq:function(){return[W.as]},
$isl:1,
$asl:function(){return[W.as]},
$isa:1,
$asa:function(){return[W.as]},
$ast:function(){return[W.as]},
"%":"MimeTypeArray"},
X:{"^":"dF;",
gbO:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.b4(a.offsetX,a.offsetY,[P.F])
else{z=a.target
if(!J.B(W.e1(z)).$isV)throw H.d(P.z("offsetX is only supported on elements"))
y=H.k(W.e1(z),"$isV")
z=a.clientX
x=a.clientY
w=[P.F]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.x(new P.b4(u,v,w),"$isb4",w,"$asb4")
if(typeof z!=="number")return z.aW()
if(typeof x!=="number")return x.aW()
return new P.b4(C.r.bY(z-u),C.r.bY(x-v),w)}},
$isX:1,
"%":";DragEvent|MouseEvent"},
a9:{"^":"hf;a",
gad:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.d(P.co("No elements"))
if(y>1)throw H.d(P.co("More than one element"))
return z.firstChild},
I:function(a,b){var z,y,x,w,v
H.x(b,"$isl",[W.u],"$asl")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.o(y),v=0;v<x;++v)w.K(y,z.firstChild)
return},
h:function(a,b,c){var z,y
H.k(c,"$isu")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.i(y,b)
J.eK(z,c,y[b])},
gD:function(a){var z=this.a.childNodes
return new W.d9(z,z.length,-1,[H.bi(C.V,z,"t",0)])},
gk:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.i(z,b)
return z[b]},
$asq:function(){return[W.u]},
$asl:function(){return[W.u]},
$asa:function(){return[W.u]}},
u:{"^":"P;0dF:previousSibling=",
dG:function(a){var z=a.parentNode
if(z!=null)J.bG(z,a)},
l:function(a){var z=a.nodeValue
return z==null?this.cn(a):z},
K:function(a,b){return a.appendChild(b)},
d0:function(a,b){return a.removeChild(b)},
d1:function(a,b,c){return a.replaceChild(b,c)},
$isu:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hx:{"^":"jh;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$isu")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.u]},
$isy:1,
$asy:function(){return[W.u]},
$asq:function(){return[W.u]},
$isl:1,
$asl:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$ast:function(){return[W.u]},
"%":"NodeList|RadioNodeList"},
lN:{"^":"N;0q:height=,0n:width=","%":"HTMLObjectElement"},
lP:{"^":"P;0q:height=,0n:width=","%":"OffscreenCanvas"},
lQ:{"^":"j;0q:height=,0n:width=","%":"PaintSize"},
au:{"^":"j;0k:length=",$isau:1,"%":"Plugin"},
lS:{"^":"jl;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$isau")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.au]},
$isy:1,
$asy:function(){return[W.au]},
$asq:function(){return[W.au]},
$isl:1,
$asl:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$ast:function(){return[W.au]},
"%":"PluginArray"},
lU:{"^":"X;0q:height=,0n:width=","%":"PointerEvent"},
hP:{"^":"j;",
dn:function(a,b){return a.createContextualFragment(b)},
ce:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
lZ:{"^":"jr;",
i:function(a,b){return P.a3(a.get(H.v(b)))},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a3(y.value[1]))}},
gJ:function(a){var z=H.f([],[P.e])
this.H(a,new W.hW(z))
return z},
gk:function(a){return a.size},
$asW:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"RTCStatsReport"},
hW:{"^":"p:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
m_:{"^":"j;0q:height=,0n:width=","%":"Screen"},
m0:{"^":"N;0k:length=","%":"HTMLSelectElement"},
av:{"^":"P;",$isav:1,"%":"SourceBuffer"},
m2:{"^":"dW;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$isav")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.av]},
$isy:1,
$asy:function(){return[W.av]},
$asq:function(){return[W.av]},
$isl:1,
$asl:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$ast:function(){return[W.av]},
"%":"SourceBufferList"},
aw:{"^":"j;",$isaw:1,"%":"SpeechGrammar"},
m3:{"^":"jx;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$isaw")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aw]},
$isy:1,
$asy:function(){return[W.aw]},
$asq:function(){return[W.aw]},
$isl:1,
$asl:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$ast:function(){return[W.aw]},
"%":"SpeechGrammarList"},
ax:{"^":"j;0k:length=",$isax:1,"%":"SpeechRecognitionResult"},
m6:{"^":"jA;",
i:function(a,b){return this.bh(a,H.v(b))},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=0;!0;++z){y=this.cY(a,z)
if(y==null)return
b.$2(y,this.bh(a,y))}},
gJ:function(a){var z=H.f([],[P.e])
this.H(a,new W.i8(z))
return z},
gk:function(a){return a.length},
bh:function(a,b){return a.getItem(b)},
cY:function(a,b){return a.key(b)},
$asW:function(){return[P.e,P.e]},
$isM:1,
$asM:function(){return[P.e,P.e]},
"%":"Storage"},
i8:{"^":"p:19;a",
$2:function(a,b){return C.a.j(this.a,a)}},
ay:{"^":"j;",$isay:1,"%":"CSSStyleSheet|StyleSheet"},
id:{"^":"N;",
T:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ar(a,b,c,d)
z=W.fQ("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a9(y).I(0,new W.a9(z))
return y},
"%":"HTMLTableElement"},
m9:{"^":"N;",
T:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ar(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.T(z.createElement("table"),b,c,d)
z.toString
z=new W.a9(z)
x=z.gad(z)
x.toString
z=new W.a9(x)
w=z.gad(z)
y.toString
w.toString
new W.a9(y).I(0,new W.a9(w))
return y},
"%":"HTMLTableRowElement"},
ma:{"^":"N;",
T:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ar(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.T(z.createElement("table"),b,c,d)
z.toString
z=new W.a9(z)
x=z.gad(z)
y.toString
x.toString
new W.a9(y).I(0,new W.a9(x))
return y},
"%":"HTMLTableSectionElement"},
dz:{"^":"N;",$isdz:1,"%":"HTMLTemplateElement"},
mb:{"^":"j;0n:width=","%":"TextMetrics"},
az:{"^":"P;",$isaz:1,"%":"TextTrack"},
aA:{"^":"P;",$isaA:1,"%":"TextTrackCue|VTTCue"},
mc:{"^":"jI;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$isaA")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aA]},
$isy:1,
$asy:function(){return[W.aA]},
$asq:function(){return[W.aA]},
$isl:1,
$asl:function(){return[W.aA]},
$isa:1,
$asa:function(){return[W.aA]},
$ast:function(){return[W.aA]},
"%":"TextTrackCueList"},
md:{"^":"e_;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$isaz")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.az]},
$isy:1,
$asy:function(){return[W.az]},
$asq:function(){return[W.az]},
$isl:1,
$asl:function(){return[W.az]},
$isa:1,
$asa:function(){return[W.az]},
$ast:function(){return[W.az]},
"%":"TextTrackList"},
me:{"^":"j;0k:length=","%":"TimeRanges"},
aB:{"^":"j;",$isaB:1,"%":"Touch"},
mf:{"^":"jN;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$isaB")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aB]},
$isy:1,
$asy:function(){return[W.aB]},
$asq:function(){return[W.aB]},
$isl:1,
$asl:function(){return[W.aB]},
$isa:1,
$asa:function(){return[W.aB]},
$ast:function(){return[W.aB]},
"%":"TouchList"},
mg:{"^":"j;0k:length=","%":"TrackDefaultList"},
dF:{"^":"a5;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mu:{"^":"j;",
l:function(a){return String(a)},
"%":"URL"},
mw:{"^":"hk;0q:height=,0n:width=","%":"HTMLVideoElement"},
mx:{"^":"P;0k:length=","%":"VideoTrackList"},
my:{"^":"P;0q:height=,0n:width=","%":"VisualViewport"},
mz:{"^":"j;0n:width=","%":"VTTRegion"},
aM:{"^":"X;",
gdt:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.z("deltaY is not supported"))},
$isaM:1,
"%":"WheelEvent"},
iu:{"^":"P;",
gdd:function(a){var z,y,x
z=P.F
y=new P.ag(0,$.K,[z])
x=H.n(new W.iv(new P.jE(y,[z])),{func:1,ret:-1,args:[P.F]})
this.cU(a)
this.d2(a,W.e7(x,z))
return y},
d2:function(a,b){return a.requestAnimationFrame(H.be(H.n(b,{func:1,ret:-1,args:[P.F]}),1))},
cU:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdI:1,
"%":"DOMWindow|Window"},
iv:{"^":"p:20;a",
$1:function(a){var z=this.a
a=H.c0(H.cA(a),{futureOr:1,type:H.r(z,0)})
z=z.a
if(z.a!==0)H.a0(P.co("Future already completed"))
z.aw(a)}},
dK:{"^":"u;",$isdK:1,"%":"Attr"},
mF:{"^":"jT;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$isao")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ao]},
$isy:1,
$asy:function(){return[W.ao]},
$asq:function(){return[W.ao]},
$isl:1,
$asl:function(){return[W.ao]},
$isa:1,
$asa:function(){return[W.ao]},
$ast:function(){return[W.ao]},
"%":"CSSRuleList"},
mH:{"^":"fM;",
l:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
G:function(a,b){var z
if(b==null)return!1
if(!H.aQ(b,"$isY",[P.F],"$asY"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.o(b)
z=a.width===z.gn(b)&&a.height===z.gq(b)}else z=!1
else z=!1
return z},
gB:function(a){return W.dP(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gq:function(a){return a.height},
gn:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mI:{"^":"jV;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$isaq")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aq]},
$isy:1,
$asy:function(){return[W.aq]},
$asq:function(){return[W.aq]},
$isl:1,
$asl:function(){return[W.aq]},
$isa:1,
$asa:function(){return[W.aq]},
$ast:function(){return[W.aq]},
"%":"GamepadList"},
mN:{"^":"jX;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$isu")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.u]},
$isy:1,
$asy:function(){return[W.u]},
$asq:function(){return[W.u]},
$isl:1,
$asl:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$ast:function(){return[W.u]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mO:{"^":"jZ;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$isax")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ax]},
$isy:1,
$asy:function(){return[W.ax]},
$asq:function(){return[W.ax]},
$isl:1,
$asl:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$ast:function(){return[W.ax]},
"%":"SpeechRecognitionResultList"},
mP:{"^":"k0;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$isay")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ay]},
$isy:1,
$asy:function(){return[W.ay]},
$asq:function(){return[W.ay]},
$isl:1,
$asl:function(){return[W.ay]},
$isa:1,
$asa:function(){return[W.ay]},
$ast:function(){return[W.ay]},
"%":"StyleSheetList"},
iC:{"^":"dj;cT:a<",
H:function(a,b){var z,y,x,w,v,u
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=this.gJ(this),y=z.length,x=this.a,w=J.o(x),v=0;v<z.length;z.length===y||(0,H.E)(z),++v){u=z[v]
b.$2(u,w.a5(x,u))}},
gJ:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.f([],[P.e])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.i(z,w)
v=H.k(z[w],"$isdK")
if(v.namespaceURI==null)C.a.j(y,v.name)}return y},
$asW:function(){return[P.e,P.e]},
$asM:function(){return[P.e,P.e]}},
iM:{"^":"iC;a",
i:function(a,b){return J.ca(this.a,H.v(b))},
gk:function(a){return this.gJ(this).length}},
bw:{"^":"i9;a,b,c,$ti"},
bT:{"^":"bw;a,b,c,$ti"},
iO:{"^":"ia;a,b,c,d,e,$ti",u:{
aC:function(a,b,c,d,e){var z=W.e7(new W.iP(c),W.a5)
if(z!=null&&!0)J.eL(a,b,z,!1)
return new W.iO(0,a,b,z,!1,[e])}}},
iP:{"^":"p:21;a",
$1:function(a){return this.a.$1(H.k(a,"$isa5"))}},
bx:{"^":"c;a",
cL:function(a){var z,y
z=$.cF()
if(z.a===0){for(y=0;y<262;++y)z.h(0,C.S[y],W.km())
for(y=0;y<12;++y)z.h(0,C.u[y],W.kn())}},
a3:function(a){return $.eF().A(0,W.aW(a))},
Y:function(a,b,c){var z,y,x
z=W.aW(a)
y=$.cF()
x=y.i(0,H.h(z)+"::"+b)
if(x==null)x=y.i(0,"*::"+b)
if(x==null)return!1
return H.bZ(x.$4(a,b,c,this))},
$isae:1,
u:{
dN:function(a){var z,y
z=document.createElement("a")
y=new W.js(z,window.location)
y=new W.bx(y)
y.cL(a)
return y},
mL:[function(a,b,c,d){H.k(a,"$isV")
H.v(b)
H.v(c)
H.k(d,"$isbx")
return!0},"$4","km",16,0,12],
mM:[function(a,b,c,d){var z,y,x
H.k(a,"$isV")
H.v(b)
H.v(c)
z=H.k(d,"$isbx").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kn",16,0,12]}},
t:{"^":"c;$ti",
gD:function(a){return new W.d9(a,this.gk(a),-1,[H.bi(this,a,"t",0)])}},
dm:{"^":"c;a",
a3:function(a){return C.a.bp(this.a,new W.hz(a))},
Y:function(a,b,c){return C.a.bp(this.a,new W.hy(a,b,c))},
$isae:1},
hz:{"^":"p:9;a",
$1:function(a){return H.k(a,"$isae").a3(this.a)}},
hy:{"^":"p:9;a,b,c",
$1:function(a){return H.k(a,"$isae").Y(this.a,this.b,this.c)}},
jt:{"^":"c;",
cM:function(a,b,c,d){var z,y,x
this.a.I(0,c)
z=b.aK(0,new W.ju())
y=b.aK(0,new W.jv())
this.b.I(0,z)
x=this.c
x.I(0,C.U)
x.I(0,y)},
a3:function(a){return this.a.A(0,W.aW(a))},
Y:["cq",function(a,b,c){var z,y
z=W.aW(a)
y=this.c
if(y.A(0,H.h(z)+"::"+b))return this.d.dc(c)
else if(y.A(0,"*::"+b))return this.d.dc(c)
else{y=this.b
if(y.A(0,H.h(z)+"::"+b))return!0
else if(y.A(0,"*::"+b))return!0
else if(y.A(0,H.h(z)+"::*"))return!0
else if(y.A(0,"*::*"))return!0}return!1}],
$isae:1},
ju:{"^":"p:10;",
$1:function(a){return!C.a.A(C.u,H.v(a))}},
jv:{"^":"p:10;",
$1:function(a){return C.a.A(C.u,H.v(a))}},
jF:{"^":"jt;e,a,b,c,d",
Y:function(a,b,c){if(this.cq(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ca(a,"template")==="")return this.e.A(0,b)
return!1},
u:{
dY:function(){var z,y,x,w,v
z=P.e
y=P.cl(C.t,z)
x=H.r(C.t,0)
w=H.n(new W.jG(),{func:1,ret:z,args:[x]})
v=H.f(["TEMPLATE"],[z])
y=new W.jF(y,P.a6(null,null,null,z),P.a6(null,null,null,z),P.a6(null,null,null,z),null)
y.cM(null,new H.hi(C.t,w,[x,z]),v,null)
return y}}},
jG:{"^":"p:22;",
$1:function(a){return"TEMPLATE::"+H.h(H.v(a))}},
jD:{"^":"c;",
a3:function(a){var z=J.B(a)
if(!!z.$isdt)return!1
z=!!z.$isI
if(z&&W.aW(a)==="foreignObject")return!1
if(z)return!0
return!1},
Y:function(a,b,c){if(b==="is"||C.i.cj(b,"on"))return!1
return this.a3(a)},
$isae:1},
d9:{"^":"c;a,b,c,0d,$ti",
sbf:function(a){this.d=H.A(a,H.r(this,0))},
w:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbf(J.bl(this.a,z))
this.c=z
return!0}this.sbf(null)
this.c=y
return!1},
gE:function(a){return this.d},
$isb_:1},
iG:{"^":"c;a",$isP:1,$isdI:1,u:{
iH:function(a){if(a===window)return H.k(a,"$isdI")
else return new W.iG(a)}}},
ae:{"^":"c;"},
js:{"^":"c;a,b",$ismt:1},
e0:{"^":"c;a",
aT:function(a){new W.jQ(this).$2(a,null)},
a7:function(a,b){if(b==null)J.cO(a)
else J.bG(b,a)},
d5:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.f3(a)
x=J.ca(y.gcT(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.aa(t)}v="element unprintable"
try{v=J.bn(a)}catch(t){H.aa(t)}try{u=W.aW(a)
this.d4(H.k(a,"$isV"),b,z,v,u,H.k(y,"$isM"),H.v(x))}catch(t){if(H.aa(t) instanceof P.aH)throw t
else{this.a7(a,b)
window
s="Removing corrupted element "+H.h(v)
if(typeof console!="undefined")window.console.warn(s)}}},
d4:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a7(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a3(a)){this.a7(a,b)
window
z="Removing disallowed element <"+H.h(e)+"> from "+H.h(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.Y(a,"is",g)){this.a7(a,b)
window
z="Removing disallowed type extension <"+H.h(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gJ(f)
y=H.f(z.slice(0),[H.r(z,0)])
for(x=f.gJ(f).length-1,z=f.a,w=J.o(z);x>=0;--x){if(x>=y.length)return H.i(y,x)
v=y[x]
if(!this.a.Y(a,J.fc(v),w.a5(z,v))){window
u="Removing disallowed attribute <"+H.h(e)+" "+v+'="'+H.h(w.a5(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.a5(z,v)
w.d_(z,v)}}if(!!J.B(a).$isdz)this.aT(a.content)},
$islL:1},
jQ:{"^":"p:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.d5(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a7(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.f4(z)}catch(w){H.aa(w)
v=H.k(z,"$isu")
if(x){u=v.parentNode
if(u!=null)J.bG(u,v)}else J.bG(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.k(y,"$isu")}}},
iF:{"^":"j+fB;"},
iI:{"^":"j+q;"},
iJ:{"^":"iI+t;"},
iK:{"^":"j+q;"},
iL:{"^":"iK+t;"},
iR:{"^":"j+q;"},
iS:{"^":"iR+t;"},
j4:{"^":"j+q;"},
j5:{"^":"j4+t;"},
jc:{"^":"j+W;"},
jd:{"^":"j+W;"},
je:{"^":"j+q;"},
jf:{"^":"je+t;"},
jg:{"^":"j+q;"},
jh:{"^":"jg+t;"},
jk:{"^":"j+q;"},
jl:{"^":"jk+t;"},
jr:{"^":"j+W;"},
dV:{"^":"P+q;"},
dW:{"^":"dV+t;"},
jw:{"^":"j+q;"},
jx:{"^":"jw+t;"},
jA:{"^":"j+W;"},
jH:{"^":"j+q;"},
jI:{"^":"jH+t;"},
dZ:{"^":"P+q;"},
e_:{"^":"dZ+t;"},
jM:{"^":"j+q;"},
jN:{"^":"jM+t;"},
jS:{"^":"j+q;"},
jT:{"^":"jS+t;"},
jU:{"^":"j+q;"},
jV:{"^":"jU+t;"},
jW:{"^":"j+q;"},
jX:{"^":"jW+t;"},
jY:{"^":"j+q;"},
jZ:{"^":"jY+t;"},
k_:{"^":"j+q;"},
k0:{"^":"k_+t;"}}],["","",,P,{"^":"",
a3:function(a){var z,y,x,w,v
if(a==null)return
z=P.T(P.e,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w){v=H.v(y[w])
z.h(0,v,a[v])}return z},
kc:function(a,b){var z={}
a.H(0,new P.kd(z))
return z},
d3:function(){var z=$.d2
if(z==null){z=J.c6(window.navigator.userAgent,"Opera",0)
$.d2=z}return z},
fI:function(){var z,y
z=$.d_
if(z!=null)return z
y=$.d0
if(y==null){y=J.c6(window.navigator.userAgent,"Firefox",0)
$.d0=y}if(y)z="-moz-"
else{y=$.d1
if(y==null){y=!P.d3()&&J.c6(window.navigator.userAgent,"Trident/",0)
$.d1=y}if(y)z="-ms-"
else z=P.d3()?"-o-":"-webkit-"}$.d_=z
return z},
kd:{"^":"p:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
kD:function(a){return Math.sqrt(a)},
dO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
b4:{"^":"c;a4:a>,Z:b>,$ti",
l:function(a){return"Point("+H.h(this.a)+", "+H.h(this.b)+")"},
G:function(a,b){if(b==null)return!1
return H.aQ(b,"$isb4",[P.F],null)&&this.a==J.bJ(b)&&this.b==b.gZ(b)},
gB:function(a){var z,y,x
z=J.an(this.a)
y=J.an(this.b)
y=P.dO(P.dO(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
jm:{"^":"c;"},
Y:{"^":"jm;$ti"}}],["","",,P,{"^":"",fm:{"^":"j;",$isfm:1,"%":"SVGAnimatedLength"},l1:{"^":"I;0q:height=,0n:width=","%":"SVGFEBlendElement"},l2:{"^":"I;0q:height=,0n:width=","%":"SVGFEColorMatrixElement"},l3:{"^":"I;0q:height=,0n:width=","%":"SVGFEComponentTransferElement"},l4:{"^":"I;0q:height=,0n:width=","%":"SVGFECompositeElement"},l5:{"^":"I;0q:height=,0n:width=","%":"SVGFEConvolveMatrixElement"},l6:{"^":"I;0q:height=,0n:width=","%":"SVGFEDiffuseLightingElement"},l7:{"^":"I;0q:height=,0n:width=","%":"SVGFEDisplacementMapElement"},l8:{"^":"I;0q:height=,0n:width=","%":"SVGFEFloodElement"},l9:{"^":"I;0q:height=,0n:width=","%":"SVGFEGaussianBlurElement"},la:{"^":"I;0q:height=,0n:width=","%":"SVGFEImageElement"},lb:{"^":"I;0q:height=,0n:width=","%":"SVGFEMergeElement"},lc:{"^":"I;0q:height=,0n:width=","%":"SVGFEMorphologyElement"},ld:{"^":"I;0q:height=,0n:width=","%":"SVGFEOffsetElement"},le:{"^":"I;0q:height=,0n:width=","%":"SVGFESpecularLightingElement"},lf:{"^":"I;0q:height=,0n:width=","%":"SVGFETileElement"},lg:{"^":"I;0q:height=,0n:width=","%":"SVGFETurbulenceElement"},lj:{"^":"I;0q:height=,0n:width=","%":"SVGFilterElement"},lk:{"^":"bq;0q:height=,0n:width=","%":"SVGForeignObjectElement"},fY:{"^":"bq;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bq:{"^":"I;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},lu:{"^":"bq;0q:height=,0n:width=","%":"SVGImageElement"},b1:{"^":"j;",$isb1:1,"%":"SVGLength"},lz:{"^":"j7;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return this.V(a,b)},
h:function(a,b,c){H.k(c,"$isb1")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){return this.i(a,b)},
V:function(a,b){return a.getItem(b)},
$asq:function(){return[P.b1]},
$isl:1,
$asl:function(){return[P.b1]},
$isa:1,
$asa:function(){return[P.b1]},
$ast:function(){return[P.b1]},
"%":"SVGLengthList"},lA:{"^":"I;0q:height=,0n:width=","%":"SVGMaskElement"},b3:{"^":"j;",$isb3:1,"%":"SVGNumber"},lM:{"^":"jj;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return this.V(a,b)},
h:function(a,b,c){H.k(c,"$isb3")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){return this.i(a,b)},
V:function(a,b){return a.getItem(b)},
$asq:function(){return[P.b3]},
$isl:1,
$asl:function(){return[P.b3]},
$isa:1,
$asa:function(){return[P.b3]},
$ast:function(){return[P.b3]},
"%":"SVGNumberList"},lR:{"^":"I;0q:height=,0n:width=","%":"SVGPatternElement"},lT:{"^":"j;0k:length=","%":"SVGPointList"},lV:{"^":"j;0q:height=,0n:width=","%":"SVGRect"},lW:{"^":"fY;0q:height=,0n:width=","%":"SVGRectElement"},dt:{"^":"I;",$isdt:1,"%":"SVGScriptElement"},m7:{"^":"jC;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return this.V(a,b)},
h:function(a,b,c){H.v(c)
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){return this.i(a,b)},
V:function(a,b){return a.getItem(b)},
$asq:function(){return[P.e]},
$isl:1,
$asl:function(){return[P.e]},
$isa:1,
$asa:function(){return[P.e]},
$ast:function(){return[P.e]},
"%":"SVGStringList"},I:{"^":"V;",
T:function(a,b,c,d){var z,y,x,w,v,u
z=H.f([],[W.ae])
C.a.j(z,W.dN(null))
C.a.j(z,W.dY())
C.a.j(z,new W.jD())
c=new W.e0(new W.dm(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).dq(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a9(w)
u=z.gad(z)
for(z=J.o(v);x=u.firstChild,x!=null;)z.K(v,x)
return v},
$isI:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},m8:{"^":"bq;0q:height=,0n:width=","%":"SVGSVGElement"},b7:{"^":"j;",$isb7:1,"%":"SVGTransform"},mh:{"^":"jP;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return this.V(a,b)},
h:function(a,b,c){H.k(c,"$isb7")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){return this.i(a,b)},
V:function(a,b){return a.getItem(b)},
$asq:function(){return[P.b7]},
$isl:1,
$asl:function(){return[P.b7]},
$isa:1,
$asa:function(){return[P.b7]},
$ast:function(){return[P.b7]},
"%":"SVGTransformList"},mv:{"^":"bq;0q:height=,0n:width=","%":"SVGUseElement"},j6:{"^":"j+q;"},j7:{"^":"j6+t;"},ji:{"^":"j+q;"},jj:{"^":"ji+t;"},jB:{"^":"j+q;"},jC:{"^":"jB+t;"},jO:{"^":"j+q;"},jP:{"^":"jO+t;"}}],["","",,P,{"^":"",ak:{"^":"c;",$isl:1,
$asl:function(){return[P.a4]},
$isa:1,
$asa:function(){return[P.a4]},
$isim:1}}],["","",,P,{"^":"",kJ:{"^":"j;0k:length=","%":"AudioBuffer"},kK:{"^":"iD;",
i:function(a,b){return P.a3(a.get(H.v(b)))},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a3(y.value[1]))}},
gJ:function(a){var z=H.f([],[P.e])
this.H(a,new P.fo(z))
return z},
gk:function(a){return a.size},
$asW:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"AudioParamMap"},fo:{"^":"p:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},kL:{"^":"P;0k:length=","%":"AudioTrackList"},fp:{"^":"P;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lO:{"^":"fp;0k:length=","%":"OfflineAudioContext"},iD:{"^":"j+W;"}}],["","",,P,{"^":"",fr:{"^":"j;",$isfr:1,"%":"WebGLBuffer"},fX:{"^":"j;",$isfX:1,"%":"WebGLFramebuffer"},hO:{"^":"j;",$ishO:1,"%":"WebGLProgram"},lX:{"^":"j;",
bo:function(a,b){return a.activeTexture(b)},
bq:function(a,b,c){return a.attachShader(b,c)},
br:function(a,b,c){return a.bindBuffer(b,c)},
bt:function(a,b,c){return a.bindFramebuffer(b,c)},
bu:function(a,b,c){return a.bindTexture(b,c)},
bv:function(a,b){return a.blendEquation(b)},
bw:function(a,b,c){return a.blendFunc(b,c)},
bx:function(a,b,c,d){return a.bufferData(b,c,d)},
by:function(a,b){return a.clear(b)},
bz:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bA:function(a,b){return a.compileShader(b)},
bB:function(a){return a.createBuffer()},
bC:function(a){return a.createProgram()},
bD:function(a,b){return a.createShader(b)},
bF:function(a,b){return a.depthMask(b)},
bG:function(a,b){return a.disable(b)},
bH:function(a,b,c,d){return a.drawArrays(b,c,d)},
bI:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bJ:function(a,b){return a.enable(b)},
bK:function(a,b){return a.enableVertexAttribArray(b)},
ap:function(a){return P.a3(a.getContextAttributes())},
aM:function(a,b){return a.getProgramInfoLog(b)},
aN:function(a,b,c){return a.getProgramParameter(b,c)},
aP:function(a,b){return a.getShaderInfoLog(b)},
aQ:function(a,b,c){return a.getShaderParameter(b,c)},
aR:function(a,b,c){return a.getUniformLocation(b,c)},
bM:function(a,b){return a.linkProgram(b)},
aU:function(a,b,c){return a.shaderSource(b,c)},
aV:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bZ:function(a,b,c){return a.uniform1f(b,c)},
c_:function(a,b,c){return a.uniform1fv(b,c)},
c0:function(a,b,c){return a.uniform1i(b,c)},
c1:function(a,b,c){return a.uniform1iv(b,c)},
c2:function(a,b,c){return a.uniform2fv(b,c)},
c3:function(a,b,c){return a.uniform3fv(b,c)},
c4:function(a,b,c){return a.uniform4fv(b,c)},
c5:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c6:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c7:function(a,b){return a.useProgram(b)},
c8:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ca:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},lY:{"^":"j;",
df:function(a,b){return a.beginTransformFeedback(b)},
di:function(a,b){return a.bindVertexArray(b)},
ds:function(a){return a.createVertexArray()},
du:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dv:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dw:function(a){return a.endTransformFeedback()},
dP:function(a,b,c,d){this.d8(a,b,H.x(c,"$isa",[P.e],"$asa"),d)
return},
d8:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dQ:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bo:function(a,b){return a.activeTexture(b)},
bq:function(a,b,c){return a.attachShader(b,c)},
br:function(a,b,c){return a.bindBuffer(b,c)},
bt:function(a,b,c){return a.bindFramebuffer(b,c)},
bu:function(a,b,c){return a.bindTexture(b,c)},
bv:function(a,b){return a.blendEquation(b)},
bw:function(a,b,c){return a.blendFunc(b,c)},
bx:function(a,b,c,d){return a.bufferData(b,c,d)},
by:function(a,b){return a.clear(b)},
bz:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bA:function(a,b){return a.compileShader(b)},
bB:function(a){return a.createBuffer()},
bC:function(a){return a.createProgram()},
bD:function(a,b){return a.createShader(b)},
bF:function(a,b){return a.depthMask(b)},
bG:function(a,b){return a.disable(b)},
bH:function(a,b,c,d){return a.drawArrays(b,c,d)},
bI:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bJ:function(a,b){return a.enable(b)},
bK:function(a,b){return a.enableVertexAttribArray(b)},
ap:function(a){return P.a3(a.getContextAttributes())},
aM:function(a,b){return a.getProgramInfoLog(b)},
aN:function(a,b,c){return a.getProgramParameter(b,c)},
aP:function(a,b){return a.getShaderInfoLog(b)},
aQ:function(a,b,c){return a.getShaderParameter(b,c)},
aR:function(a,b,c){return a.getUniformLocation(b,c)},
bM:function(a,b){return a.linkProgram(b)},
aU:function(a,b,c){return a.shaderSource(b,c)},
aV:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bZ:function(a,b,c){return a.uniform1f(b,c)},
c_:function(a,b,c){return a.uniform1fv(b,c)},
c0:function(a,b,c){return a.uniform1i(b,c)},
c1:function(a,b,c){return a.uniform1iv(b,c)},
c2:function(a,b,c){return a.uniform2fv(b,c)},
c3:function(a,b,c){return a.uniform3fv(b,c)},
c4:function(a,b,c){return a.uniform4fv(b,c)},
c5:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c6:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c7:function(a,b){return a.useProgram(b)},
c8:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ca:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},i0:{"^":"j;",$isi0:1,"%":"WebGLShader"},ig:{"^":"j;",$isig:1,"%":"WebGLTexture"},io:{"^":"j;",$isio:1,"%":"WebGLUniformLocation"},is:{"^":"j;",$isis:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",m4:{"^":"jz;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return P.a3(this.cX(a,b))},
h:function(a,b,c){H.k(c,"$isM")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){return this.i(a,b)},
cX:function(a,b){return a.item(b)},
$asq:function(){return[[P.M,,,]]},
$isl:1,
$asl:function(){return[[P.M,,,]]},
$isa:1,
$asa:function(){return[[P.M,,,]]},
$ast:function(){return[[P.M,,,]]},
"%":"SQLResultSetRowList"},jy:{"^":"j+q;"},jz:{"^":"jy+t;"}}],["","",,G,{"^":"",
iw:function(a){var z,y,x,w
z=H.f(a.split("\n"),[P.e])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.i(z,y)
C.a.h(z,y,w+H.h(z[y]))}return C.a.ab(z,"\n")},
dL:function(a,b,c){var z,y,x,w
z=J.o(a)
y=z.bD(a,b)
z.aU(a,y,c)
z.bA(a,y)
x=H.bZ(z.aQ(a,y,35713))
if(x!=null&&!x){w=z.aP(a,y)
P.aE("E:Compilation failed:")
P.aE("E:"+G.iw(c))
P.aE("E:Failure:")
P.aE(C.i.L("E:",w))
throw H.d(w)}return y},
dn:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
d.t(b)
d.ae(0,a)
e.t(c)
e.ae(0,a)
z=e.a
y=z[0]
x=z[1]
w=z[2]
v=d.a
u=v[0]
t=v[1]
s=v[2]
z[0]=x*s-w*t
z[1]=w*u-y*s
z[2]=y*t-x*u
r=Math.sqrt(e.gan())
if(r===0)return!1
e.W(0,-1/r)
return!0},
da:function(a,b){var z,y,x
H.x(a,"$isa",[T.b],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.f.h(b,z,J.bJ(a[y]))
if(y>=a.length)return H.i(a,y)
C.f.h(b,z+1,J.c9(a[y]))
z+=2
if(y>=a.length)return H.i(a,y)
x=J.cM(a[y])
if(z>=b.length)return H.i(b,z)
b[z]=x}return b},
fU:function(a,b){var z,y
H.x(a,"$isa",[T.m],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.f.h(b,z,J.bJ(a[y]))
if(y>=a.length)return H.i(a,y)
C.f.h(b,z+1,J.c9(a[y]))}return b},
fV:function(a,b){var z,y,x,w,v
H.x(a,"$isa",[T.J],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.f.h(b,z,J.bJ(a[y]))
if(y>=a.length)return H.i(a,y)
C.f.h(b,z+1,J.c9(a[y]))
x=z+2
if(y>=a.length)return H.i(a,y)
w=J.cM(a[y])
v=b.length
if(x>=v)return H.i(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.i(a,y)
w=J.f6(a[y])
if(z>=v)return H.i(b,z)
b[z]=w}return b},
fT:function(a,b){var z,y
H.x(a,"$isa",[[P.a,P.D]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.n.h(b,z,J.bl(a[y],0))
if(y>=a.length)return H.i(a,y)
C.n.h(b,z+1,J.bl(a[y],1))
if(y>=a.length)return H.i(a,y)
C.n.h(b,z+2,J.bl(a[y],2))
if(y>=a.length)return H.i(a,y)
C.n.h(b,z+3,J.bl(a[y],3))}return b},
j2:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.ar(z,[H.r(z,0)]),y=y.gD(y),x=b.x,w=[[P.a,P.D]],v=[P.a4],u=[T.J],t=[T.b],s=[T.m];y.w();){r=y.d
if(!x.al(0,r)){r="Dropping unnecessary attribute: "+H.h(r)
if($.ed>0)H.c4("I: "+r)
continue}q=z.i(0,r)
switch($.ab().i(0,r).a){case"vec2":b.a6(r,G.fU(H.bF(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.a6(r,G.da(H.bF(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.a6(r,G.fV(H.bF(q,"$isa",u,"$asa"),null),4)
break
case"float":b.a6(r,new Float32Array(H.bV(H.bF(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.a6(r,G.fT(H.bF(q,"$isa",w,"$asa"),null),4)
break}}},
aZ:function(a,b,c){var z,y,x,w,v,u,t,s
z=b.d
y=b.e.x
x=P.e
w=P.T(x,P.c)
v=J.eU(z.a)
u=new G.hl(z,v,4,w,y,0,-1,P.T(x,P.ak),"meshdata:"+a,!1,!0)
x=G.da(c.d,null)
w.h(0,"aPosition",J.c7(z.a))
u.ch=x
u.b_("aPosition",x,3)
t=$.ab().i(0,"aPosition")
if(t==null)H.a0("Unknown canonical aPosition")
s=y.i(0,"aPosition")
J.bH(z.a,v)
z.bL(0,s,0)
z.c9(0,w.i(0,"aPosition"),s,t.b1(),5126,!1,0,0)
y=H.x(c.cz(),"$isa",[P.D],"$asa")
u.y=J.c7(z.a)
x=u.ch.length
if(x<768){u.saz(new Uint8Array(H.bV(y)))
u.Q=5121}else if(x<196608){u.saz(new Uint16Array(H.bV(y)))
u.Q=5123}else{u.saz(new Uint32Array(H.bV(y)))
u.Q=5125}J.bH(z.a,v)
y=u.y
x=u.cx
J.c5(z.a,34963,y)
J.cK(z.a,34963,x,35048)
G.j2(c,u)
return u},
b2:{"^":"c;"},
b8:{"^":"b2;d,a,b,c",
b2:function(){return this.d},
l:function(a){var z,y,x,w
z=H.f(["{"+new H.dE(H.kj(this)).l(0)+"}["+this.a+"]"],[P.e])
for(y=this.d,x=new H.ar(y,[H.r(y,0)]),x=x.gD(x);x.w();){w=x.d
C.a.j(z,H.h(w)+": "+H.h(y.i(0,w)))}return C.a.ab(z,"\n")}},
ft:{"^":"c;0a,b",
bL:function(a,b,c){J.f0(this.a,b)
if(c>0)J.fi(this.a,b,c)},
c9:function(a,b,c,d,e,f,g,h){J.c5(this.a,34962,b)
J.fj(this.a,c,d,e,!1,g,h)}},
fW:{"^":"c;a,b,c,d,e"},
a_:{"^":"c;aj:a>,a8:b>,a9:c>",u:{
L:function(a,b,c){return new G.a_(a,b,c)}}},
aJ:{"^":"c;aj:a>,a8:b>,a9:c>,d"},
aY:{"^":"c;a,b,c,d,e",
M:function(a){switch($.ab().i(0,a).a){case"vec2":this.e.h(0,a,H.f([],[T.m]))
break
case"vec3":this.e.h(0,a,H.f([],[T.b]))
break
case"vec4":this.e.h(0,a,H.f([],[T.J]))
break
case"float":this.e.h(0,a,H.f([],[P.a4]))
break
case"uvec4":this.e.h(0,a,H.f([],[[P.a,P.D]]))
break}},
aX:function(a){var z,y,x
z=this.d.length
for(y=this.b,x=0;x<a;++x,z+=3)C.a.j(y,new G.a_(z,z+1,z+2))},
af:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)C.a.j(y,new G.aJ(z,z+1,z+2,z+3))},
R:function(a){var z,y,x,w,v
H.x(a,"$isa",[T.b],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.E)(a),++x){w=a[x]
w.toString
v=new T.b(new Float32Array(3))
v.t(w)
C.a.j(y,v)}},
P:function(a,b){var z,y,x,w,v,u,t
z=[T.m]
H.x(b,"$isa",z,"$asa")
y=H.x(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.E)(b),++w){v=b[w]
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.j(y,new T.m(u))}},
as:function(a,b){var z,y,x,w,v,u
z=[T.b]
H.x(b,"$isa",z,"$asa")
y=H.x(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.E)(b),++w){v=b[w]
u=new T.b(new Float32Array(3))
u.t(v)
x.j(y,u)}},
cz:function(){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.f(x,[P.D])
for(x=z.length,v=0,u=0;u<z.length;z.length===x||(0,H.E)(z),++u){t=z[u]
C.a.h(w,v,t.a)
C.a.h(w,v+1,t.b)
C.a.h(w,v+2,t.c)
v+=3}for(z=y.length,u=0;u<y.length;y.length===z||(0,H.E)(y),++u){s=y[u]
x=s.a
C.a.h(w,v,x)
C.a.h(w,v+1,s.b)
r=s.c
C.a.h(w,v+2,r)
C.a.h(w,v+3,x)
C.a.h(w,v+4,r)
C.a.h(w,v+5,s.d)
v+=6}return w},
b0:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.d
y=new Array(z.length)
y.fixed$length=Array
x=H.f(y,[T.b])
w=new T.b(new Float32Array(3))
v=new T.b(new Float32Array(3))
for(y=this.b,u=y.length,t=0;t<y.length;y.length===u||(0,H.E)(y),++t){s=y[t]
r=s.a
q=z.length
if(r>=q)return H.i(z,r)
p=z[r]
o=s.b
if(o>=q)return H.i(z,o)
n=z[o]
m=s.c
if(m>=q)return H.i(z,m)
G.dn(p,n,z[m],w,v)
q=new T.b(new Float32Array(3))
q.t(v)
C.a.h(x,r,q)
r=new T.b(new Float32Array(3))
r.t(v)
C.a.h(x,o,r)
r=new T.b(new Float32Array(3))
r.t(v)
C.a.h(x,m,r)}for(y=this.c,u=y.length,t=0;t<y.length;y.length===u||(0,H.E)(y),++t){l=y[t]
r=l.a
q=z.length
if(r>=q)return H.i(z,r)
p=z[r]
o=l.b
if(o>=q)return H.i(z,o)
n=z[o]
m=l.c
if(m>=q)return H.i(z,m)
G.dn(p,n,z[m],w,v)
q=new T.b(new Float32Array(3))
q.t(v)
C.a.h(x,r,q)
r=new T.b(new Float32Array(3))
r.t(v)
C.a.h(x,o,r)
r=new T.b(new Float32Array(3))
r.t(v)
C.a.h(x,m,r)
r=new T.b(new Float32Array(3))
r.t(v)
C.a.h(x,l.d,r)}this.e.h(0,"aNormal",x)},
a0:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=new Array(this.d.length)
z.fixed$length=Array
y=H.f(z,[T.J])
x=new T.J(new Float32Array(4))
x.O(1,0,0,0)
w=new T.J(new Float32Array(4))
w.O(0,1,0,0)
v=new T.J(new Float32Array(4))
v.O(0,0,1,0)
for(z=this.b,u=z.length,t=0;t<z.length;z.length===u||(0,H.E)(z),++t){s=z[t]
r=new T.J(new Float32Array(4))
r.t(x)
C.a.h(y,s.a,r)
r=new T.J(new Float32Array(4))
r.t(w)
C.a.h(y,s.b,r)
r=new T.J(new Float32Array(4))
r.t(v)
C.a.h(y,s.c,r)}q=new T.J(new Float32Array(4))
q.O(1,0,0,1)
p=new T.J(new Float32Array(4))
p.O(1,1,0,1)
o=new T.J(new Float32Array(4))
o.O(0,1,0,1)
n=new T.J(new Float32Array(4))
n.O(0,0,0,1)
for(z=this.c,u=z.length,t=0;t<z.length;z.length===u||(0,H.E)(z),++t){s=z[t]
r=new T.J(new Float32Array(4))
r.t(q)
C.a.h(y,s.a,r)
r=new T.J(new Float32Array(4))
r.t(p)
C.a.h(y,s.b,r)
r=new T.J(new Float32Array(4))
r.t(o)
C.a.h(y,s.c,r)
r=new T.J(new Float32Array(4))
r.t(n)
C.a.h(y,s.d,r)}this.e.h(0,"aCenter",y)},
l:function(a){var z,y,x,w,v
z=H.f(["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"],[P.e])
for(y=this.e,x=new H.ar(y,[H.r(y,0)]),x=x.gD(x);x.w();){w=x.d
v=$.ab().i(0,w).a
C.a.j(z,H.h(w)+"["+v+","+y.i(0,w).length+"]")}return C.a.ab(z," ")}},
dC:{"^":"c;a,b,c"},
dA:{"^":"c;a,b,c",u:{
dB:function(a,b,c){return new G.dA(a,b,c)}}},
hj:{"^":"b8;d,a,b,c"},
hl:{"^":"b2;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
saz:function(a){this.cx=H.x(a,"$isa",[P.D],"$asa")},
b_:function(a,b,c){var z,y
C.i.av(a,0)
H.k(b,"$isak")
this.cy.h(0,a,b)
z=this.d
y=this.r.i(0,a)
J.c5(z.a,34962,y)
J.cK(z.a,34962,b,35048)},
cA:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a6:function(a,b,c){var z,y,x,w,v
z=J.cG(a,0)===105
if(z&&this.z===0)this.z=C.d.cr(b.length,c)
y=this.r
x=this.d
y.h(0,a,J.c7(x.a))
this.b_(a,b,c)
w=$.ab().i(0,a)
if(w==null)throw H.d("Unknown canonical "+a)
v=this.x.i(0,a)
J.bH(x.a,this.e)
x.bL(0,v,z?1:0)
x.c9(0,y.i(0,a),v,w.b1(),5126,!1,0,0)},
l:function(a){var z,y,x,w
z=this.cx
y=H.f(["Faces:"+(z==null?0:z.length)],[P.e])
for(z=this.cy,x=new H.ar(z,[H.r(z,0)]),x=x.gD(x);x.w();){w=x.d
C.a.j(y,H.h(w)+":"+z.i(0,w).length)}return"MESH["+this.a+"] "+C.a.ab(y,"  ")}},
hE:{"^":"b8;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
ct:function(a,b){var z
if(typeof a!=="number")return a.dS()
if(typeof b!=="number")return H.bC(b)
z=a/b
if(this.z===z)return
this.z=z
this.b3()},
b3:function(){var z,y,x,w,v,u
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
b2:function(){var z,y,x
z=this.x
y=this.d
y.h(0,"uEyePosition",z.aL())
x=this.cy
x.t(z.d)
z=this.cx
z.t(this.db)
z.bN(0,x)
y.h(0,"uPerspectiveViewMatrix",z)
return y}},
l_:{"^":"c;"},
hU:{"^":"b2;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cF:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){t=z[u]
x.h(0,t,J.cN(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){t=z[u]
x.h(0,t,J.cN(w.a,v,t))}},
cH:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.f([],[P.e])
x=H.f([],[P.e])
for(y=new H.ar(y,[H.r(y,0)]),y=y.gD(y);y.w();){w=y.d
if(!z.al(0,w))C.a.j(x,w)}for(z=this.x,z=P.j9(z,z.r,H.r(z,0)),y=this.Q;z.w();){w=z.d
if(!y.A(0,w))C.a.j(x,w)}return x},
cK:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.x(b,"$isM",[P.e,P.c],"$asM")
z=Date.now()
for(y=new H.ar(b,[H.r(b,0)]),y=y.gD(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.w();){s=y.d
switch(J.cG(s,0)){case 117:if(w.al(0,s)){r=b.i(0,s)
if(v.al(0,s))H.c4("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.h(0,s,a)
q=$.ab().i(0,s)
if(q==null)H.a0("unknown "+s)
p=w.i(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.R(r)
J.cb(x.a,p,r)}else if(!!J.B(r).$ish2)J.fg(x.a,p,r)
break
case"float":if(q.c===0){H.eb(r)
J.fe(x.a,p,r)}else if(!!J.B(r).$isak)J.ff(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.ai(r,"$isO").a
J.cT(x.a,p,!1,s)}else if(!!J.B(r).$isak)J.cT(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=H.ai(r,"$isal").a
J.cS(x.a,p,!1,s)}else if(!!J.B(r).$isak)J.cS(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.cR(o,p,H.ai(r,"$isJ").a)
else J.cR(o,p,H.k(r,"$isak"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cQ(o,p,H.ai(r,"$isb").a)
else J.cQ(o,p,H.k(r,"$isak"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cP(o,p,H.ai(r,"$ism").a)
else J.cP(o,p,H.k(r,"$isak"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.bC(s)
J.cH(x.a,33984+s)
s=H.ai(r,"$isie").cB()
J.cJ(x.a,3553,s)
s=this.ch
J.cb(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.L()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.bC(s)
J.cH(x.a,33984+s)
s=H.ai(r,"$isie").cB()
J.cJ(x.a,34067,s)
s=this.ch
J.cb(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.L()
this.ch=s+1
break
default:H.c4("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.i(0,s)
switch(s){case"cDepthTest":s=J.aG(r,!0)
o=x.a
if(s)J.bm(o,2929)
else J.c8(o,2929)
break
case"cStencilFunc":H.ai(r,"$isdC")
s=r.a
o=x.a
if(s===1281)J.c8(o,2960)
else{J.bm(o,2960)
o=r.b
n=r.c
J.fb(x.a,s,o,n)}break
case"cDepthWrite":H.bZ(r)
J.eV(x.a,r)
break
case"cBlendEquation":H.ai(r,"$isdA")
s=r.a
o=x.a
if(s===1281)J.c8(o,3042)
else{J.bm(o,3042)
o=r.b
n=r.c
J.eP(x.a,o,n)
J.eO(x.a,s)}break}++t
break}}m=P.fN(0,0,0,Date.now()-new P.bM(z,!1).a,0,0)
""+t
m.l(0)},
cw:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.x(b,"$isa",[G.b8],"$asa")
Date.now()
z=this.d
J.fh(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b9()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.E)(b),++x){w=b[x]
this.cK(w.a,w.b2())}y=this.Q
y.aa(0)
for(v=a.cy,v=new H.ar(v,[H.r(v,0)]),v=v.gD(v);v.w();)y.j(0,v.d)
u=this.cH()
if(u.length!==0)P.aE("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.h(u)))
J.bH(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.cA()
s=a.Q
r=a.z
if(t)J.eM(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.eZ(q,y,v,s,0,r)
else J.eY(q,y,v,s,0)}else{s=z.a
if(r>1)J.eX(s,y,0,v,r)
else J.eW(s,y,0,v)}if(t)J.f1(z.a)},
u:{
hV:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.e
y=P.a6(null,null,null,z)
x=c.b
w=d.b
v=H.x(c.f,"$isa",[z],"$asa")
u=J.eT(b.a)
t=G.dL(b.a,35633,x)
J.cI(b.a,u,t)
s=G.dL(b.a,35632,w)
J.cI(b.a,u,s)
if(v.length>0)J.fd(b.a,u,v,35980)
J.fa(b.a,u)
if(!H.bZ(J.f9(b.a,u,35714)))H.a0(J.f8(b.a,u))
z=new G.hU(b,c,d,u,P.cl(c.c,z),P.T(z,P.c),P.T(z,z),y,a,!1,!0)
z.cF(a,b,c,d)
return z}}},
C:{"^":"c;a,b,c",
b1:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
i1:{"^":"c;a,0b,c,d,e,f,r,x",
cs:function(a){var z,y,x,w
H.x(a,"$isa",[P.e],"$asa")
for(z=this.c,y=this.x,x=0;x<2;++x){w=a[x]
C.a.j(z,w)
y.h(0,w,this.r);++this.r}C.a.aq(z)},
aY:function(a){var z,y
H.x(a,"$isa",[P.e],"$asa")
for(z=this.d,y=0;y<2;++y)C.a.j(z,a[y])
C.a.aq(z)},
aZ:function(a){var z,y
H.x(a,"$isa",[P.e],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.j(z,a[y])
C.a.aq(z)},
b4:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.e]
H.x(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.f(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.E)(y),++u){t=y[u]
s=$.ab().i(0,t)
C.a.j(w,"layout (location="+H.h(v.i(0,t))+") in "+s.a+" "+H.h(t)+";")}C.a.j(w,"")
r=x?"in":"out"
if(x)C.a.j(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){q=z[u]
s=$.ab().i(0,q)
C.a.j(w,r+" "+s.a+" "+H.h(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){q=z[u]
s=$.ab().i(0,q)
C.a.j(w,r+" "+s.a+" "+H.h(q)+";")}C.a.j(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){q=z[u]
s=$.ab().i(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.j(w,"uniform "+s.a+" "+H.h(q)+p+";")}C.a.j(w,"")
if(a)C.a.j(w,"void main(void) {")
C.a.I(w,b)
if(a)C.a.j(w,"}")
return C.a.ab(w,"\n")},
u:{
du:function(a){var z,y
z=P.e
y=[z]
return new G.i1(a,H.f([],y),H.f([],y),H.f([],y),H.f([],y),0,P.T(z,P.D))}}},
dv:{"^":"b2;",
aL:function(){var z,y,x
z=this.e
y=this.d.a
x=z.a
x[0]=y[12]
x[1]=y[13]
x[2]=y[14]
return z},
X:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}}}],["","",,R,{"^":"",
jb:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.k(W.iN("span",null),"$isV")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.w).au(y,"float")
y.setProperty(x,"left","")
x=C.w.au(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.q.K(z,v)}return z},
hT:{"^":"hS;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
dI:[function(a){var z,y,x
z=this.db
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.aE("size change "+H.h(y)+" "+H.h(x))
this.dx.ct(y,x)
this.z=y
this.Q=x},"$1","gdH",4,0,24]},
i6:{"^":"c;",
cG:function(a,b,c){var z,y
z=this.a
if(z==null)throw H.d("no element provided")
y=z.style
y.color=b
y.fontFamily="Helvetica,Arial,sans-serif"
y.fontSize="9px"
y.lineHeight="15px"
y.padding="0 0 3px 3px"
y.textAlign="left"
y.background=c
y=J.o(z)
y.K(z,this.b)
y.K(z,this.d)
y.K(z,this.c)}},
i7:{"^":"i6;e,f,a,b,c,d",
cJ:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.x.dO(y,2)+" fps"
C.q.cf(this.c,b)
x=C.d.a2(30*C.x.dj(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.k(z.firstChild,"$isV")
v=w.style
u=""+x+"px"
v.height=u
C.q.K(z,w)},
cI:function(a){return this.cJ(a,"")}}}],["","",,A,{"^":"",
ec:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.x(e,"$isa",[G.b8],"$asa")
z=b.dx
z.t(c)
y=b.d
z.bN(0,y)
x=b.cx
H.h(b)
w=C.a.gdD(e)
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
v.dm(new T.al(u))
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
C.a.j(e,b.ch)
a.cw(x,e,d)
if(0>=e.length)return H.i(e,-1)
e.pop()
for(y=b.cy,r=0;!1;++r){if(r>=0)return H.i(y,r)
A.ec(a,y[r],z,d,e)}},
aK:{"^":"dv;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
l:function(a){return"NODE["+this.a+"]"}},
ds:{"^":"b2;d,e,f,a,b,c"},
hS:{"^":"b2;",
cE:function(a,b,c){if(this.d==null)this.d=new G.fW(this.e,null,null,null,null)},
cv:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.eN(v.a,36160,z)
J.fk(v.a,this.x,this.y,x,w)
if(y!==0)J.eQ(v.a,y)
for(z=this.f,y=z.length,x=P.e,w=P.c,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){t=z[u]
s=t.e
C.a.j(s,new G.b8(P.T(x,w),"transforms",!1,!0))
r=new T.O(new Float32Array(16))
r.F()
for(v=t.f,q=v.length,p=t.d,o=0;o<v.length;v.length===q||(0,H.E)(v),++o)A.ec(p,v[o],r,a,s)
if(0>=s.length)return H.i(s,-1)
s.pop()}},
cu:function(){return this.cv(null)}}}],["","",,V,{}],["","",,B,{"^":"",
fD:function(a5,a6,a7,a8,a9,b0,b1,b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
z=-b0
y=-b1
x=new T.b(new Float32Array(3))
x.m(z,y,b2)
w=new T.b(new Float32Array(3))
w.m(b0,y,b2)
v=new T.b(new Float32Array(3))
v.m(b0,b1,b2)
u=new T.b(new Float32Array(3))
u.m(z,b1,b2)
t=-b2
s=new T.b(new Float32Array(3))
s.m(z,y,t)
r=new T.b(new Float32Array(3))
r.m(z,b1,t)
q=new T.b(new Float32Array(3))
q.m(b0,b1,t)
p=new T.b(new Float32Array(3))
p.m(b0,y,t)
o=new T.b(new Float32Array(3))
o.m(z,b1,t)
n=new T.b(new Float32Array(3))
n.m(z,b1,b2)
m=new T.b(new Float32Array(3))
m.m(b0,b1,b2)
l=new T.b(new Float32Array(3))
l.m(b0,b1,t)
k=new T.b(new Float32Array(3))
k.m(b0,y,b2)
j=new T.b(new Float32Array(3))
j.m(z,y,b2)
i=new T.b(new Float32Array(3))
i.m(z,y,t)
h=new T.b(new Float32Array(3))
h.m(b0,y,t)
g=new T.b(new Float32Array(3))
g.m(b0,y,t)
f=new T.b(new Float32Array(3))
f.m(b0,b1,t)
e=new T.b(new Float32Array(3))
e.m(b0,b1,b2)
d=new T.b(new Float32Array(3))
d.m(b0,y,b2)
c=new T.b(new Float32Array(3))
c.m(z,y,t)
b=new T.b(new Float32Array(3))
b.m(z,y,b2)
y=new T.b(new Float32Array(3))
y.m(z,b1,b2)
a=new T.b(new Float32Array(3))
a.m(z,b1,t)
t=[T.b]
a0=H.f([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a],t)
z=new T.m(new Float32Array(2))
z.p(a7,a9)
y=new T.m(new Float32Array(2))
y.p(a6,a9)
x=new T.m(new Float32Array(2))
x.p(a6,a8)
w=new T.m(new Float32Array(2))
w.p(a7,a8)
v=new T.m(new Float32Array(2))
v.p(a6,a9)
u=new T.m(new Float32Array(2))
u.p(a6,a8)
s=new T.m(new Float32Array(2))
s.p(a7,a8)
r=new T.m(new Float32Array(2))
r.p(a7,a9)
q=new T.m(new Float32Array(2))
q.p(a7,a8)
p=new T.m(new Float32Array(2))
p.p(a7,a9)
o=new T.m(new Float32Array(2))
o.p(a6,a9)
n=new T.m(new Float32Array(2))
n.p(a6,a8)
m=new T.m(new Float32Array(2))
m.p(a6,a8)
l=new T.m(new Float32Array(2))
l.p(a7,a8)
k=new T.m(new Float32Array(2))
k.p(a7,a9)
j=new T.m(new Float32Array(2))
j.p(a6,a9)
i=new T.m(new Float32Array(2))
i.p(a6,a9)
h=new T.m(new Float32Array(2))
h.p(a6,a8)
g=new T.m(new Float32Array(2))
g.p(a7,a8)
f=new T.m(new Float32Array(2))
f.p(a7,a9)
e=new T.m(new Float32Array(2))
e.p(a7,a9)
d=new T.m(new Float32Array(2))
d.p(a6,a9)
c=new T.m(new Float32Array(2))
c.p(a6,a8)
b=new T.m(new Float32Array(2))
b.p(a7,a8)
a1=H.f([z,y,x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b],[T.m])
a2=new G.aY(!1,H.f([],[G.a_]),H.f([],[G.aJ]),H.f([],t),P.T(P.e,[P.a,,]))
a2.M("aTexUV")
a2.M("aNormal")
a2.af(6)
a2.R(a0)
a2.P("aTexUV",a1)
for(a3=0;z=$.eE(),a3<6;++a3){a4=z[a3]
a2.as("aNormal",H.f([a4,a4,a4,a4],t))}return a2},
fF:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=c/2
y=[T.b]
x=H.f([],y)
w=H.f([],y)
for(v=-z,u=0;u<d;++u){t=u/d*3.141592653589793*2
s=Math.sin(t)
r=Math.cos(t)
q=new Float32Array(3)
q[0]=a*s
q[1]=z
q[2]=a*r
C.a.j(x,new T.b(q))
q=new Float32Array(3)
q[0]=b*s
q[1]=v
q[2]=b*r
C.a.j(w,new T.b(q))}if(0>=x.length)return H.i(x,0)
C.a.j(x,x[0])
if(0>=w.length)return H.i(w,0)
C.a.j(w,w[0])
p=new T.m(new Float32Array(2))
p.p(0,0)
o=new T.b(new Float32Array(3))
o.m(0,z,0)
n=new T.b(new Float32Array(3))
n.m(0,v,0)
m=new G.aY(!1,H.f([],[G.a_]),H.f([],[G.aJ]),H.f([],y),P.T(P.e,[P.a,,]))
m.M("aTexUV")
m.aX(2*d)
for(v=[T.m],u=0;u<d;u=k){q=x.length
if(u>=q)return H.i(x,u)
l=x[u]
k=u+1
if(k>=q)return H.i(x,k)
m.R(H.f([o,l,x[k]],y))
l=w.length
if(k>=l)return H.i(w,k)
q=w[k]
if(u>=l)return H.i(w,u)
m.R(H.f([n,q,w[u]],y))
m.P("aTexUV",H.f([p,p,p],v))
m.P("aTexUV",H.f([p,p,p],v))}m.af(d)
for(u=0;u<d;u=k){k=u+1
q=x.length
if(k>=q)return H.i(x,k)
l=x[k]
if(u>=q)return H.i(x,u)
q=x[u]
j=w.length
if(u>=j)return H.i(w,u)
i=w[u]
if(k>=j)return H.i(w,k)
m.R(H.f([l,q,i,w[k]],y))
m.P("aTexUV",H.f([p,p,p,p],v))}return m},
h0:function(a1,a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=[G.a_]
y=H.f([],z)
x=[T.b]
w=H.f([],x)
C.a.I(y,$.er())
C.a.I(w,$.es())
for(v=0;v<a3;++v,y=u){u=H.f([],z)
for(t=y.length,s=0;s<y.length;y.length===t||(0,H.E)(y),++s){r=y[s]
q=J.cL(r)
if(q>=w.length)return H.i(w,q)
q=w[q]
p=new T.b(new Float32Array(3))
p.t(q)
q=r.ga8(r)
if(q>=w.length)return H.i(w,q)
p.j(0,w[q])
p.W(0,0.5)
p.C(0)
q=r.ga8(r)
if(q>=w.length)return H.i(w,q)
q=w[q]
o=new T.b(new Float32Array(3))
o.t(q)
q=r.ga9(r)
if(q>=w.length)return H.i(w,q)
o.j(0,w[q])
o.W(0,0.5)
o.C(0)
q=r.ga9(r)
if(q>=w.length)return H.i(w,q)
q=w[q]
n=new T.b(new Float32Array(3))
n.t(q)
q=r.gaj(r)
if(q>=w.length)return H.i(w,q)
n.j(0,w[q])
n.W(0,0.5)
n.C(0)
m=w.length
C.a.j(w,p)
l=w.length
C.a.j(w,o)
k=w.length
C.a.j(w,n)
C.a.j(u,new G.a_(r.gaj(r),m,k))
C.a.j(u,new G.a_(r.ga8(r),l,m))
C.a.j(u,new G.a_(r.ga9(r),k,l))
C.a.j(u,new G.a_(m,l,k))}}z=H.f([],z)
t=H.f([],[G.aJ])
q=H.f([],x)
j=new G.aY(!1,z,t,q,P.T(P.e,[P.a,,]))
j.M("aTexUV")
j.M("aNormal")
for(t=y.length,i=[T.m],s=0;s<y.length;y.length===t||(0,H.E)(y),++s){r=y[s]
h=J.cL(r)
if(h>=w.length)return H.i(w,h)
g=w[h]
h=r.ga8(r)
if(h>=w.length)return H.i(w,h)
f=w[h]
h=r.ga9(r)
if(h>=w.length)return H.i(w,h)
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
j.as("aNormal",H.f([g,f,e],x))
h=new T.b(new Float32Array(3))
h.t(g)
h.W(0,a2)
d=new T.b(new Float32Array(3))
d.t(f)
d.W(0,a2)
a0=new T.b(new Float32Array(3))
a0.t(e)
a0.W(0,a2)
a0=H.x(H.f([h,d,a0],x),"$isa",x,"$asa")
v=q.length
C.a.j(z,new G.a_(v,v+1,v+2))
j.R(a0)
j.P("aTexUV",H.f([new T.m(c),new T.m(b),new T.m(a)],i))}return j},
ih:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=B.hC(new B.ii(e,d,f,c),0,6.283185307179586,g,0.001,!0)
if(0>=z.length)return H.i(z,0)
C.a.j(z,z[0])
if(1>=z.length)return H.i(z,1)
C.a.j(z,z[1])
y=B.ij(z,h,i)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w){v=y[w]
if(0>=v.length)return H.i(v,0)
C.a.j(v,v[0])
if(1>=v.length)return H.i(v,1)
C.a.j(v,v[1])}x=[T.b]
u=new G.aY(!1,H.f([],[G.a_]),H.f([],[G.aJ]),H.f([],x),P.T(P.e,[P.a,,]))
for(t=0;t<g;t=s)for(s=t+1,r=0;r<h;r=q){q=r+1
u.af(1)
p=y.length
if(t>=p)return H.i(y,t)
o=y[t]
n=q*2
m=o.length
if(n>=m)return H.i(o,n)
l=o[n]
if(s>=p)return H.i(y,s)
p=y[s]
k=p.length
if(n>=k)return H.i(p,n)
n=p[n]
j=r*2
if(j>=k)return H.i(p,j)
p=p[j]
if(j>=m)return H.i(o,j)
u.R(H.f([l,n,p,o[j]],x))}u.M("aTexUV")
for(x=[T.m],t=0;t<g;t=s)for(p=t/g,s=t+1,r=0;r<h;r=q){q=r+1
o=q/h
n=new Float32Array(2)
n[0]=p
n[1]=o
m=s/g
l=new Float32Array(2)
l[0]=m
l[1]=o
o=r/h
k=new Float32Array(2)
k[0]=m
k[1]=o
m=new Float32Array(2)
m[0]=p
m[1]=o
u.P("aTexUV",H.f([new T.m(n),new T.m(l),new T.m(k),new T.m(m)],x))}u.b0()
return u},
ij:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=[T.b]
H.x(a,"$isa",z,"$asa")
y=H.f([],[[P.a,T.b]])
x=new Float32Array(3)
w=new T.b(x)
v=new Float32Array(3)
u=new T.b(v)
t=new Float32Array(3)
s=new T.b(t)
for(r=0;q=a.length,r<q;r+=2){p=a[r]
o=r+1
if(o>=q)return H.i(a,o)
n=a[o]
m=H.f([],z)
C.a.j(y,m)
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
t[2]=k*j}u.C(0)
s.C(0)
for(i=0;i<b;++i){h=i/b*2*3.141592653589793
g=c*Math.cos(h)
f=c*Math.sin(h)
w.t(p)
w.ak(u,g)
w.ak(s,f)
q=new T.b(new Float32Array(3))
q.t(w)
C.a.j(m,q)
x[2]=0
x[1]=0
x[0]=0
w.ak(u,g)
w.ak(s,f)
w.C(0)
q=new T.b(new Float32Array(3))
q.t(w)
C.a.j(m,q)}}return y},
hC:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
H.n(a,{func:1,ret:-1,args:[P.a4,T.b]})
z=H.f([],[T.b])
y=new T.b(new Float32Array(3))
x=new T.b(new Float32Array(3))
for(w=(c-b)/(d-0),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+e,x)
x.ae(0,y)
t=new T.b(new Float32Array(3))
t.t(y)
C.a.j(z,t)
t=new T.b(new Float32Array(3))
t.t(x)
C.a.j(z,t)}return z},
ii:{"^":"p:25;a,b,c,d",
$2:function(a,b){var z,y,x,w,v,u
z=this.c
y=this.a*a
x=Math.cos(y)
w=Math.sin(y)
y=this.b*a
v=Math.cos(y)
u=Math.sin(y)
y=z*(2+x)*0.5
b.sa4(0,y*v)
b.sZ(0,y*u)
b.sao(0,this.d*z*0.5*w)}}}],["","",,D,{"^":"",h9:{"^":"c;a,b,c",
cC:function(a){var z,y
a=document
z=W.b0
y={func:1,ret:-1,args:[z]}
W.aC(a,"keydown",H.n(new D.hb(this),y),!1,z)
W.aC(a,"keyup",H.n(new D.hc(this),y),!1,z)},
u:{
ha:function(a){var z=P.D
z=new D.h9(P.a6(null,null,null,z),P.a6(null,null,null,z),P.a6(null,null,null,z))
z.cC(a)
return z}}},hb:{"^":"p:11;a",
$1:function(a){var z
H.k(a,"$isb0")
z=this.a
z.a.j(0,a.which)
z.b.j(0,a.which)}},hc:{"^":"p:11;a",
$1:function(a){var z
H.k(a,"$isb0")
z=this.a
z.a.bU(0,a.which)
z.c.j(0,a.which)}},ho:{"^":"c;a,b,c,d,e,f,r,x",
cD:function(a){var z,y,x
if(a==null)a=document
z=J.o(a)
y=z.gbQ(a)
x=H.r(y,0)
W.aC(y.a,y.b,H.n(new D.hq(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbP(a)
y=H.r(x,0)
W.aC(x.a,x.b,H.n(new D.hr(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbR(a)
x=H.r(y,0)
W.aC(y.a,y.b,H.n(new D.hs(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbS(a)
x=H.r(z,0)
W.aC(z.a,z.b,H.n(new D.ht(this),{func:1,ret:-1,args:[x]}),!1,x)},
u:{
hp:function(a){var z=P.D
z=new D.ho(P.a6(null,null,null,z),P.a6(null,null,null,z),P.a6(null,null,null,z),0,0,0,0,0)
z.cD(a)
return z}}},hq:{"^":"p:3;a",
$1:function(a){var z,y
H.k(a,"$isX")
a.preventDefault()
z=this.a
y=J.o(a)
z.r=H.R(y.gbO(a).a)
z.x=H.R(y.gbO(a).b)
z.d=a.movementX
z.e=a.movementY}},hr:{"^":"p:3;a",
$1:function(a){var z
H.k(a,"$isX")
a.preventDefault()
P.aE("BUTTON "+H.h(a.button))
z=this.a
z.a.j(0,a.button)
z.b.j(0,a.button)}},hs:{"^":"p:3;a",
$1:function(a){var z
H.k(a,"$isX")
a.preventDefault()
z=this.a
z.a.bU(0,a.button)
z.c.j(0,a.button)}},ht:{"^":"p:26;a",
$1:function(a){H.k(a,"$isaM")
a.preventDefault()
this.a.f=H.R(C.ab.gdt(a))}},hB:{"^":"dv;ch,cx,cy,db,dx,dy,fr,fx,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bB:function(a){var z,y
z=C.f.dz(H.x(a,"$isl",[P.c],"$asl"),0,new A.kl(),P.D)
if(typeof z!=="number")return H.bC(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kl:{"^":"p:27;",
$2:function(a,b){var z,y
H.R(a)
z=J.an(b)
if(typeof a!=="number")return a.L()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",al:{"^":"c;a",
t:function(a){var z,y
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
l:function(a){return"[0] "+this.U(0).l(0)+"\n[1] "+this.U(1).l(0)+"\n[2] "+this.U(2).l(0)+"\n"},
i:function(a,b){var z=this.a
if(b>=9)return H.i(z,b)
return z[b]},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.al){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gB:function(a){return A.bB(this.a)},
U:function(a){var z,y,x
z=new Float32Array(3)
y=this.a
if(a>=9)return H.i(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.i(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.i(y,x)
z[2]=y[x]
return new T.b(z)},
dm:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if(m===0){this.t(a)
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
return m}},O:{"^":"c;a",
t:function(a){var z,y
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
l:function(a){return"[0] "+this.U(0).l(0)+"\n[1] "+this.U(1).l(0)+"\n[2] "+this.U(2).l(0)+"\n[3] "+this.U(3).l(0)+"\n"},
i:function(a,b){var z=this.a
if(b>=16)return H.i(z,b)
return z[b]},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.O){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gB:function(a){return A.bB(this.a)},
U:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.i(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.i(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.i(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.i(y,x)
z[3]=y[x]
return new T.J(z)},
F:function(){var z=this.a
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
bN:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},m:{"^":"c;a",
p:function(a,b){var z=this.a
z[0]=a
z[1]=b},
l:function(a){var z=this.a
return"["+H.h(z[0])+","+H.h(z[1])+"]"},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.m){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gB:function(a){return A.bB(this.a)},
i:function(a,b){var z=this.a
if(b>=2)return H.i(z,b)
return z[b]},
gk:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
ga4:function(a){return this.a[0]},
gZ:function(a){return this.a[1]}},b:{"^":"c;a",
m:function(a,b,c){var z=this.a
C.f.h(z,0,a)
C.f.h(z,1,b)
C.f.h(z,2,c)},
t:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
l:function(a){var z=this.a
return"["+H.h(z[0])+","+H.h(z[1])+","+H.h(z[2])+"]"},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.b){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gB:function(a){return A.bB(this.a)},
i:function(a,b){var z=this.a
if(b>=3)return H.i(z,b)
return z[b]},
gk:function(a){return Math.sqrt(this.gan())},
gan:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
C:function(a){var z,y,x
z=Math.sqrt(this.gan())
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
bE:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.b(new Float32Array(3))
z.m(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
j:function(a,b){var z,y
z=H.k(b,"$isb").a
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
ak:function(a,b){var z,y
z=a.a
y=this.a
y[0]=y[0]+z[0]*b
y[1]=y[1]+z[1]*b
y[2]=y[2]+z[2]*b},
ae:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
W:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
sa4:function(a,b){this.a[0]=b
return b},
sZ:function(a,b){this.a[1]=b
return b},
sao:function(a,b){this.a[2]=b
return b},
ga4:function(a){return this.a[0]},
gZ:function(a){return this.a[1]},
gao:function(a){return this.a[2]},
u:{
Q:function(a,b,c){var z=new T.b(new Float32Array(3))
z.m(a,b,c)
return z}}},J:{"^":"c;a",
O:function(a,b,c,d){var z=this.a
z[3]=d
z[2]=c
z[1]=b
z[0]=a},
t:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
l:function(a){var z=this.a
return H.h(z[0])+","+H.h(z[1])+","+H.h(z[2])+","+H.h(z[3])},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.J){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gB:function(a){return A.bB(this.a)},
i:function(a,b){var z=this.a
if(b>=4)return H.i(z,b)
return z[b]},
gk:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
ga4:function(a){return this.a[0]},
gZ:function(a){return this.a[1]},
gao:function(a){return this.a[2]},
gdR:function(a){return this.a[3]}}}],["","",,O,{"^":"",
ej:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
z={}
y=document
x=C.m.cd(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.i7(0,0,x,w,y.createElement("div"),R.jb("blue","gray",90,30))
u.cG(x,"blue","gray")
t=H.k(C.m.bT(y,"#webgl-canvas"),"$isce")
s=new G.ft(t)
y=P.e
x=P.c
v=(t&&C.H).cc(t,"webgl2",P.dh(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],y,x))
s.a=v
if(v==null)H.a0(P.d8('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
r="ChronosGL Config: "+H.h(J.f7(v))
if($.ed>0)P.aE("I: "+r)
J.eR(v,0,0,0,1)
J.bm(v,2929)
J.bm(v,2884)
v=new Float32Array(3)
r=D.ha(null)
q=D.hp(t)
p=new T.O(new Float32Array(16))
p.F()
o=new Float32Array(3)
n=new Float32Array(3)
m=new Float32Array(3)
l=new D.hB(25,10,0,0,new T.b(v),-0.02,r,q,p,new T.b(o),new T.b(n),new T.b(m),new T.b(new Float32Array(3)),"camera:orbit",!1,!0)
v=new T.O(new Float32Array(16))
v.F()
r=new T.O(new Float32Array(16))
r.F()
k=new G.hE(l,50,1,0.1,1000,v,r,new T.O(new Float32Array(16)),P.T(y,x),"perspective",!1,!0)
k.b3()
v=H.f([],[A.ds])
j=new R.hT(t,k,null,s,v,17664,0,0,0,0,"main",!1,!0)
j.cE("main",s,null)
j.dI(null)
r=W.a5
W.aC(window,"resize",H.n(j.gdH(),{func:1,ret:-1,args:[r]}),!1,r)
r=G.hV("main",s,$.eJ(),$.eI())
q=H.f([k],[G.b8])
p=[A.aK]
o=H.f([],p)
C.a.j(v,new A.ds(r,q,o,"wireframe",!1,!0))
x=P.T(y,x)
i=new G.hj(x,"wire",!1,!0)
x.h(0,"cDepthTest",!0)
x.h(0,"cDepthWrite",!0)
x.h(0,"cBlendEquation",$.cC())
x.h(0,"cStencilFunc",$.et())
v=new T.J(new Float32Array(4))
v.O(1,1,0,1)
x.h(0,"uColorAlpha",v)
v=new T.J(new Float32Array(4))
v.O(0,0,0,0.5)
x.h(0,"uColorAlpha2",v)
h=B.h0(!0,1,2)
h.a0()
v=G.aZ("icosahedron",r,h)
x=H.f([],p)
q=new Float32Array(9)
n=new T.O(new Float32Array(16))
n.F()
m=new T.O(new Float32Array(16))
m.F()
g=new Float32Array(3)
f=new Float32Array(3)
e=new Float32Array(3)
d=new A.aK(i,v,x,new T.al(q),n,m,new T.b(g),new T.b(f),new T.b(e),new T.b(new Float32Array(3)),"sphere",!1,!0)
d.X(0,0,0)
C.a.j(o,d)
h=B.fD(!0,1,0,1,0,1,1,1)
h.a0()
x=G.aZ("cube",r,h)
v=H.f([],p)
q=new Float32Array(9)
n=new T.O(new Float32Array(16))
n.F()
m=new T.O(new Float32Array(16))
m.F()
g=new Float32Array(3)
f=new Float32Array(3)
e=new Float32Array(3)
c=new A.aK(i,x,v,new T.al(q),n,m,new T.b(g),new T.b(f),new T.b(e),new T.b(new Float32Array(3)),"cube",!1,!0)
c.X(-5,0,-5)
C.a.j(o,c)
x=new T.b(new Float32Array(3))
x.m(-1,-1,1)
v=new T.b(new Float32Array(3))
v.m(1,-1,1)
q=new T.b(new Float32Array(3))
q.m(-1,1,1)
n=new T.b(new Float32Array(3))
n.m(-1,-1,-1)
m=new T.b(new Float32Array(3))
m.m(-1,1,-1)
g=new T.b(new Float32Array(3))
g.m(1,-1,-1)
f=[T.b]
b=H.f([x,v,q,n,m,g],f)
x=new T.b(new Float32Array(3))
x.m(-1,1,-1)
v=new T.b(new Float32Array(3))
v.m(-1,1,1)
q=new T.b(new Float32Array(3))
q.m(1,-1,1)
n=new T.b(new Float32Array(3))
n.m(1,-1,-1)
m=new T.b(new Float32Array(3))
m.m(1,-1,1)
g=new T.b(new Float32Array(3))
g.m(-1,-1,1)
e=new T.b(new Float32Array(3))
e.m(-1,-1,-1)
a=new T.b(new Float32Array(3))
a.m(1,-1,-1)
a0=new T.b(new Float32Array(3))
a0.m(-1,-1,-1)
a1=new T.b(new Float32Array(3))
a1.m(-1,-1,1)
a2=new T.b(new Float32Array(3))
a2.m(-1,1,1)
a3=new T.b(new Float32Array(3))
a3.m(-1,1,-1)
a4=H.f([x,v,q,n,m,g,e,a,a0,a1,a2,a3],f)
x=new T.m(new Float32Array(2))
x.p(0,0)
v=new T.m(new Float32Array(2))
v.p(1,0)
q=new T.m(new Float32Array(2))
q.p(1,1)
n=new T.m(new Float32Array(2))
n.p(1,0)
m=new T.m(new Float32Array(2))
m.p(1,1)
g=new T.m(new Float32Array(2))
g.p(0,1)
e=[T.m]
a5=H.f([x,v,q,n,m,g],e)
x=new T.m(new Float32Array(2))
x.p(0,1)
v=new T.m(new Float32Array(2))
v.p(0,0)
q=new T.m(new Float32Array(2))
q.p(1,0)
n=new T.m(new Float32Array(2))
n.p(1,1)
m=new T.m(new Float32Array(2))
m.p(1,1)
g=new T.m(new Float32Array(2))
g.p(0,1)
a=new T.m(new Float32Array(2))
a.p(0,0)
a0=new T.m(new Float32Array(2))
a0.p(1,0)
a1=new T.m(new Float32Array(2))
a1.p(0,0)
a2=new T.m(new Float32Array(2))
a2.p(1,0)
a3=new T.m(new Float32Array(2))
a3.p(1,1)
a6=new T.m(new Float32Array(2))
a6.p(0,1)
a7=H.f([x,v,q,n,m,g,a,a0,a1,a2,a3,a6],e)
a6=[G.a_]
a3=[G.aJ]
a2=[P.a,,]
h=new G.aY(!1,H.f([],a6),H.f([],a3),H.f([],f),P.T(y,a2))
h.M("aTexUV")
h.M("aNormal")
h.aX(2)
h.R(b)
h.P("aTexUV",a5)
h.af(3)
h.R(a4)
h.P("aTexUV",a7)
h.b0()
h.a0()
x=G.aZ("wedge",r,h)
v=H.f([],p)
q=new Float32Array(9)
n=new T.O(new Float32Array(16))
n.F()
m=new T.O(new Float32Array(16))
m.F()
g=new Float32Array(3)
a=new Float32Array(3)
a0=new Float32Array(3)
a8=new A.aK(i,x,v,new T.al(q),n,m,new T.b(g),new T.b(a),new T.b(a0),new T.b(new Float32Array(3)),"wedge",!1,!0)
a8.X(0,-5,0)
C.a.j(o,a8)
h=B.fF(3,4,2,16)
h.a0()
x=G.aZ("cylinder",r,h)
v=H.f([],p)
q=new Float32Array(9)
n=new T.O(new Float32Array(16))
n.F()
m=new T.O(new Float32Array(16))
m.F()
g=new Float32Array(3)
a=new Float32Array(3)
a0=new Float32Array(3)
a9=new A.aK(i,x,v,new T.al(q),n,m,new T.b(g),new T.b(a),new T.b(a0),new T.b(new Float32Array(3)),"cylinder",!1,!0)
a9.X(5,0,-5)
C.a.j(o,a9)
x=new T.b(new Float32Array(3))
x.m(-2,-2,0)
v=new T.b(new Float32Array(3))
v.m(2,-2,0)
q=new T.b(new Float32Array(3))
q.m(2,2,0)
n=new T.b(new Float32Array(3))
n.m(-2,2,0)
b0=H.f([x,v,q,n],f)
x=new T.m(new Float32Array(2))
x.p(0,0)
v=new T.m(new Float32Array(2))
v.p(1,0)
q=new T.m(new Float32Array(2))
q.p(1,1)
n=new T.m(new Float32Array(2))
n.p(0,1)
b1=H.f([x,v,q,n],e)
b2=new T.b(new Float32Array(3))
b2.m(0,0,1)
b3=H.f([b2,b2,b2,b2],f)
x=H.f([],a6)
a3=H.f([],a3)
v=H.f([],f)
h=new G.aY(!1,x,a3,v,P.T(y,a2))
h.M("aTexUV")
H.x(b0,"$isa",f,"$asa")
b4=v.length
C.a.j(a3,new G.aJ(b4,b4+1,b4+2,b4+3))
h.R(b0)
h.P("aTexUV",b1)
h.M("aNormal")
h.as("aNormal",b3)
h.a0()
a3=G.aZ("quad",r,h)
v=H.f([],p)
y=new Float32Array(9)
x=new T.O(new Float32Array(16))
x.F()
q=new T.O(new Float32Array(16))
q.F()
n=new Float32Array(3)
m=new Float32Array(3)
g=new Float32Array(3)
b5=new A.aK(i,a3,v,new T.al(y),x,q,new T.b(n),new T.b(m),new T.b(g),new T.b(new Float32Array(3)),"quad",!1,!0)
b5.X(-5,0,5)
C.a.j(o,b5)
h=B.ih(!0,!0,1,2,3,1,128,16,0.4)
h.a0()
y=G.aZ("torus",r,h)
p=H.f([],p)
x=new Float32Array(9)
v=new T.O(new Float32Array(16))
v.F()
r=new T.O(new Float32Array(16))
r.F()
q=new Float32Array(3)
n=new Float32Array(3)
m=new Float32Array(3)
b6=new A.aK(i,y,p,new T.al(x),v,r,new T.b(q),new T.b(n),new T.b(m),new T.b(new Float32Array(3)),"torus",!1,!0)
b6.X(5,0,5)
C.a.j(o,b6)
z.a=0
new O.ky(z,l,i,j,u).$1(0)},
ky:{"^":"p:28;a,b,c,d,e",
$1:function(a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
H.cA(a9)
if(typeof a9!=="number")return a9.aW()
z=this.a
z.a=a9+0
y=this.b
y.cx+=0.001
x=y.fx
w=x.a
if(w.A(0,0)||w.A(0,1)){w=y.cx
v=x.d
if(typeof v!=="number")return v.aS()
y.cx=w+v*0.01
v=y.cy
w=x.e
if(typeof w!=="number")return w.aS()
y.cy=v+w*0.01}w=y.fr
v=w.a
if(v.A(0,37))y.cx+=0.03
else if(v.A(0,39))y.cx-=0.03
if(v.A(0,38))y.cy+=0.03
else if(v.A(0,40))y.cy-=0.03
if(v.A(0,33))y.ch*=0.99
else if(v.A(0,34))y.ch*=1.01
if(v.A(0,32)){y.cx=0
y.cy=0}v=x.f
if(typeof v!=="number")return v.aS()
v=y.ch-v*y.dy
if(v>0)y.ch=v
v=C.r.dk(y.cy,-1.4707963267948965,1.4707963267948965)
y.cy=v
u=y.ch
t=y.cx
s=u*Math.cos(v)
y.X(s*Math.cos(t),u*Math.sin(v),s*Math.sin(t))
t=y.dx
v=y.d.a
u=t.a
v[12]=v[12]+u[0]
v[13]=v[13]+u[1]
v[14]=v[14]+u[2]
r=new T.b(new Float32Array(3))
r.m(0,1,0)
u=y.aL()
q=new Float32Array(3)
p=new T.b(q)
p.t(u)
p.ae(0,t)
p.C(0)
o=r.bE(p)
o.C(0)
n=p.bE(o)
n.C(0)
t=o.aH(u)
m=n.aH(u)
u=p.aH(u)
l=o.a
k=l[0]
j=n.a
i=j[0]
h=q[0]
g=l[1]
f=j[1]
e=q[1]
l=l[2]
j=j[2]
q=q[2]
v[15]=1
v[14]=-u
v[13]=-m
v[12]=-t
v[11]=0
v[10]=q
v[9]=j
v[8]=l
v[7]=0
v[6]=e
v[5]=f
v[4]=g
v[3]=0
v[2]=h
v[1]=i
v[0]=k
k=y.f
i=k.a
i[0]=v[2]
i[1]=v[6]
i[2]=v[10]
y=-y.db
d=Math.sqrt(k.gan())
o=i[0]/d
n=i[1]/d
p=i[2]/d
c=Math.cos(y)
b=Math.sin(y)
a=1-c
a0=o*o*a+c
y=p*b
a1=o*n*a-y
i=n*b
a2=o*p*a+i
a3=n*o*a+y
a4=n*n*a+c
y=o*b
a5=n*p*a-y
a6=p*o*a-i
a7=p*n*a+y
a8=p*p*a+c
y=v[0]
i=v[4]
k=v[8]
h=v[1]
g=v[5]
f=v[9]
e=v[2]
l=v[6]
j=v[10]
q=v[3]
t=v[7]
m=v[11]
v[0]=y*a0+i*a3+k*a6
v[1]=h*a0+g*a3+f*a6
v[2]=e*a0+l*a3+j*a6
v[3]=q*a0+t*a3+m*a6
v[4]=y*a1+i*a4+k*a7
v[5]=h*a1+g*a4+f*a7
v[6]=e*a1+l*a4+j*a7
v[7]=q*a1+t*a4+m*a7
v[8]=y*a2+i*a5+k*a8
v[9]=h*a2+g*a5+f*a8
v[10]=e*a2+l*a5+j*a8
v[11]=q*a2+t*a5+m*a8
w.c.aa(0)
w.b.aa(0)
x.e=0
x.d=0
x.f=0
x.c.aa(0)
x.b.aa(0)
y=$.eG().checked?$.cC():$.eo()
this.c.d.h(0,"cBlendEquation",y)
this.d.cu()
C.ac.gdd(window).bW(this,-1)
this.e.cI(z.a)}}},1]]
setupProgram(dart,0,0)
J.B=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.de.prototype
return J.dd.prototype}if(typeof a=="string")return J.bt.prototype
if(a==null)return J.h7.prototype
if(typeof a=="boolean")return J.h6.prototype
if(a.constructor==Array)return J.br.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.c)return a
return J.c1(a)}
J.bh=function(a){if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(a.constructor==Array)return J.br.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.c)return a
return J.c1(a)}
J.ee=function(a){if(a==null)return a
if(a.constructor==Array)return J.br.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.c)return a
return J.c1(a)}
J.kh=function(a){if(typeof a=="number")return J.bs.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b9.prototype
return a}
J.ki=function(a){if(typeof a=="number")return J.bs.prototype
if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b9.prototype
return a}
J.ef=function(a){if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b9.prototype
return a}
J.o=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.c)return a
return J.c1(a)}
J.bA=function(a){if(a==null)return a
if(!(a instanceof P.c))return J.b9.prototype
return a}
J.aG=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.B(a).G(a,b)}
J.ac=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kh(a).a_(a,b)}
J.bl=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kv(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bh(a).i(a,b)}
J.cG=function(a,b){return J.ef(a).av(a,b)}
J.bG=function(a,b){return J.o(a).d0(a,b)}
J.eK=function(a,b,c){return J.o(a).d1(a,b,c)}
J.cH=function(a,b){return J.o(a).bo(a,b)}
J.eL=function(a,b,c,d){return J.o(a).d9(a,b,c,d)}
J.cI=function(a,b,c){return J.o(a).bq(a,b,c)}
J.eM=function(a,b){return J.o(a).df(a,b)}
J.c5=function(a,b,c){return J.o(a).br(a,b,c)}
J.eN=function(a,b,c){return J.o(a).bt(a,b,c)}
J.cJ=function(a,b,c){return J.o(a).bu(a,b,c)}
J.bH=function(a,b){return J.o(a).di(a,b)}
J.eO=function(a,b){return J.o(a).bv(a,b)}
J.eP=function(a,b,c){return J.o(a).bw(a,b,c)}
J.cK=function(a,b,c,d){return J.o(a).bx(a,b,c,d)}
J.eQ=function(a,b){return J.o(a).by(a,b)}
J.eR=function(a,b,c,d,e){return J.o(a).bz(a,b,c,d,e)}
J.eS=function(a,b){return J.ki(a).S(a,b)}
J.c6=function(a,b,c){return J.bh(a).dl(a,b,c)}
J.c7=function(a){return J.o(a).bB(a)}
J.eT=function(a){return J.o(a).bC(a)}
J.eU=function(a){return J.o(a).ds(a)}
J.eV=function(a,b){return J.o(a).bF(a,b)}
J.c8=function(a,b){return J.o(a).bG(a,b)}
J.eW=function(a,b,c,d){return J.o(a).bH(a,b,c,d)}
J.eX=function(a,b,c,d,e){return J.o(a).du(a,b,c,d,e)}
J.eY=function(a,b,c,d,e){return J.o(a).bI(a,b,c,d,e)}
J.eZ=function(a,b,c,d,e,f){return J.o(a).dv(a,b,c,d,e,f)}
J.f_=function(a,b){return J.ee(a).v(a,b)}
J.bm=function(a,b){return J.o(a).bJ(a,b)}
J.f0=function(a,b){return J.o(a).bK(a,b)}
J.f1=function(a){return J.o(a).dw(a)}
J.f2=function(a,b){return J.o(a).H(a,b)}
J.cL=function(a){return J.bA(a).gaj(a)}
J.f3=function(a){return J.o(a).gde(a)}
J.an=function(a){return J.B(a).gB(a)}
J.bI=function(a){return J.ee(a).gD(a)}
J.aT=function(a){return J.bh(a).gk(a)}
J.f4=function(a){return J.o(a).gdF(a)}
J.f5=function(a){return J.o(a).gdM(a)}
J.f6=function(a){return J.bA(a).gdR(a)}
J.bJ=function(a){return J.bA(a).ga4(a)}
J.c9=function(a){return J.bA(a).gZ(a)}
J.cM=function(a){return J.bA(a).gao(a)}
J.ca=function(a,b){return J.o(a).a5(a,b)}
J.f7=function(a){return J.o(a).ap(a)}
J.f8=function(a,b){return J.o(a).aM(a,b)}
J.f9=function(a,b,c){return J.o(a).aN(a,b,c)}
J.cN=function(a,b,c){return J.o(a).aR(a,b,c)}
J.fa=function(a,b){return J.o(a).bM(a,b)}
J.cO=function(a){return J.o(a).dG(a)}
J.fb=function(a,b,c,d){return J.o(a).aV(a,b,c,d)}
J.fc=function(a){return J.ef(a).dN(a)}
J.bn=function(a){return J.B(a).l(a)}
J.fd=function(a,b,c,d){return J.o(a).dP(a,b,c,d)}
J.fe=function(a,b,c){return J.o(a).bZ(a,b,c)}
J.ff=function(a,b,c){return J.o(a).c_(a,b,c)}
J.cb=function(a,b,c){return J.o(a).c0(a,b,c)}
J.fg=function(a,b,c){return J.o(a).c1(a,b,c)}
J.cP=function(a,b,c){return J.o(a).c2(a,b,c)}
J.cQ=function(a,b,c){return J.o(a).c3(a,b,c)}
J.cR=function(a,b,c){return J.o(a).c4(a,b,c)}
J.cS=function(a,b,c,d){return J.o(a).c5(a,b,c,d)}
J.cT=function(a,b,c,d){return J.o(a).c6(a,b,c,d)}
J.fh=function(a,b){return J.o(a).c7(a,b)}
J.fi=function(a,b,c){return J.o(a).dQ(a,b,c)}
J.fj=function(a,b,c,d,e,f,g){return J.o(a).c8(a,b,c,d,e,f,g)}
J.fk=function(a,b,c,d,e){return J.o(a).ca(a,b,c,d,e)}
I.aR=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.bK.prototype
C.H=W.ce.prototype
C.w=W.fA.prototype
C.q=W.fJ.prototype
C.I=W.fL.prototype
C.J=W.fZ.prototype
C.m=W.h_.prototype
C.K=J.j.prototype
C.a=J.br.prototype
C.x=J.dd.prototype
C.d=J.de.prototype
C.r=J.bs.prototype
C.i=J.bt.prototype
C.R=J.bu.prototype
C.f=H.hu.prototype
C.n=H.hw.prototype
C.V=W.hx.prototype
C.A=J.hF.prototype
C.B=W.hP.prototype
C.G=W.id.prototype
C.v=J.b9.prototype
C.ab=W.aM.prototype
C.ac=W.iu.prototype
C.e=new P.jn()
C.L=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.M=function(hooks) {
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

C.N=function(getTagFallback) {
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
C.O=function() {
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
C.P=function(hooks) {
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
C.Q=function(hooks) {
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
C.S=H.f(I.aR(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.T=H.f(I.aR(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.U=H.f(I.aR([]),[P.e])
C.t=H.f(I.aR(["bind","if","ref","repeat","syntax"]),[P.e])
C.u=H.f(I.aR(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.W=new G.C("vec3","vertex btangents",0)
C.c=new G.C("vec3","",0)
C.X=new G.C("vec4","delta from light",0)
C.o=new G.C("","",0)
C.C=new G.C("vec3","vertex coordinates",0)
C.Y=new G.C("vec3","vertex binormals",0)
C.D=new G.C("vec4","for wireframe",0)
C.Z=new G.C("vec4","per vertex color",0)
C.a_=new G.C("float","for normal maps",0)
C.j=new G.C("mat4","",0)
C.a1=new G.C("mat4","",4)
C.a0=new G.C("mat4","",128)
C.b=new G.C("float","",0)
C.a2=new G.C("float","",4)
C.a3=new G.C("float","depth for shadowmaps",0)
C.h=new G.C("sampler2D","",0)
C.a4=new G.C("float","for bump maps",0)
C.a5=new G.C("vec2","texture uvs",0)
C.a6=new G.C("float","time since program start in sec",0)
C.k=new G.C("vec2","",0)
C.a7=new G.C("samplerCube","",0)
C.l=new G.C("vec4","",0)
C.a8=new G.C("vec3","vertex normals",0)
C.a9=new G.C("sampler2DShadow","",0)
C.E=new G.C("vec3","per vertex color",0)
C.F=new G.C("mat3","",0)
C.aa=new G.C("vec3","vertex tangents",0)
$.ad=0
$.aU=null
$.cW=null
$.cr=!1
$.eh=null
$.e8=null
$.em=null
$.c_=null
$.c2=null
$.cy=null
$.aO=null
$.bb=null
$.bc=null
$.cs=!1
$.K=C.e
$.aj=null
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
I.$lazy(y,x,w)}})(["kU","eq",function(){return H.eg("_$dart_dartClosure")},"ly","cD",function(){return H.eg("_$dart_js")},"mi","eu",function(){return H.af(H.bS({
toString:function(){return"$receiver$"}}))},"mj","ev",function(){return H.af(H.bS({$method$:null,
toString:function(){return"$receiver$"}}))},"mk","ew",function(){return H.af(H.bS(null))},"ml","ex",function(){return H.af(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"mo","eA",function(){return H.af(H.bS(void 0))},"mp","eB",function(){return H.af(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"mn","ez",function(){return H.af(H.dD(null))},"mm","ey",function(){return H.af(function(){try{null.$method$}catch(z){return z.message}}())},"mr","eD",function(){return H.af(H.dD(void 0))},"mq","eC",function(){return H.af(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mB","cE",function(){return P.ix()},"mS","bk",function(){return[]},"kR","ep",function(){return{}},"mJ","eF",function(){return P.cl(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)},"mK","cF",function(){return P.T(P.e,P.bp)},"m5","et",function(){return new G.dC(1281,0,4294967295)},"kM","cC",function(){return G.dB(1281,1281,1281)},"kN","eo",function(){return G.dB(32774,770,771)},"mQ","ab",function(){return P.dh(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.E,"aColorAlpha",C.Z,"aPosition",C.C,"aTexUV",C.a5,"aNormal",C.a8,"aBinormal",C.Y,"aCenter",C.D,"aPointSize",C.b,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.aa,"aBitangent",C.W,"iaRotation",C.l,"iaTranslation",C.c,"iaScale",C.b,"iaColor",C.c,"vColor",C.E,"vTexUV",C.k,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.C,"vPositionFromLight",C.X,"vCenter",C.D,"vDepth",C.a3,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.F,"uConvolutionMatrix",C.F,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a9,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a7,"uAnimationTable",C.h,"uTime",C.a6,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.c,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a0,"uLightDescs",C.a1,"uLightCount",C.b,"uLightTypes",C.a2,"uBumpScale",C.a4,"uNormalScale",C.a_],P.e,G.C)},"mZ","eJ",function(){var z,y
z=G.du("WireframeV")
y=[P.e]
z.cs(H.f(["aPosition","aCenter"],y))
z.aZ(H.f(["vCenter"],y))
z.aY(H.f(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.b=z.b4(!0,H.x(H.f(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vCenter = aCenter;"],y),"$isa",y,"$asa"),null)
return z},"mY","eI",function(){var z,y
z=G.du("WireframeF")
y=[P.e]
z.aZ(H.f(["vCenter"],y))
z.aY(H.f(["uColorAlpha","uColorAlpha2"],y))
z.b=z.b4(!1,H.x(H.f(["// the 3 vertices of a Face3 (w == 0) have the centers:\n// (1, 0, 0, 0)) \n// (0, 1, 0, 0)\n// (0, 0, 1, 0)\nfloat edgeFactorFace3(vec3 center) {\n    vec3 d = fwidth(center);\n    vec3 a3 = smoothstep(vec3(0.0), d * 1.5, center);\n    return min(min(a3.x, a3.y), a3.z);\n}\n\n// the 4 vertices of a Face4 (w == 1) have the centers:\n// (1, 0, 0, 1) \n// (1, 1, 0, 1)\n// (0, 1, 0, 1)\n// (0, 0, 0, 1)\nfloat edgeFactorFace4(vec2 center) {\n    vec2 d = fwidth(center);\n    vec2 a2 = smoothstep(vec2(0.0), d * 1.5, center);\n    return min(a2.x, a2.y);\n}\n\nvoid main() {\n    float q;\n    if (vCenter.w == 0.0) {\n        q = edgeFactorFace3(vCenter.xyz);\n    } else {\n        q = min(edgeFactorFace4(vCenter.xy),\n                edgeFactorFace4(1.0 - vCenter.xy));\n    }\n    oFragColor = mix(uColorAlpha, uColorAlpha2, q);\n}\n"],y),"$isa",y,"$asa"),null)
return z},"mG","eE",function(){return H.f([T.Q(0,0,1),T.Q(0,0,-1),T.Q(0,1,0),T.Q(0,-1,0),T.Q(1,0,0),T.Q(-1,0,0)],[T.b])},"lp","er",function(){return H.f([G.L(0,11,5),G.L(0,5,1),G.L(0,1,7),G.L(0,7,10),G.L(0,10,11),G.L(1,5,9),G.L(5,11,4),G.L(11,10,2),G.L(10,7,6),G.L(7,1,8),G.L(3,9,4),G.L(3,4,2),G.L(3,2,6),G.L(3,6,8),G.L(3,8,9),G.L(4,9,5),G.L(2,4,11),G.L(6,2,10),G.L(8,6,7),G.L(9,8,1)],[G.a_])},"mX","eH",function(){return(1+P.kD(5))/2},"lq","es",function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.eH()
y=T.Q(-1,z,0)
y.C(0)
x=T.Q(1,z,0)
x.C(0)
if(typeof z!=="number")return z.dT()
w=T.Q(-1,-z,0)
w.C(0)
v=T.Q(1,-z,0)
v.C(0)
u=T.Q(0,-1,z)
u.C(0)
t=T.Q(0,1,z)
t.C(0)
s=T.Q(0,-1,-z)
s.C(0)
r=T.Q(0,1,-z)
r.C(0)
q=T.Q(z,0,-1)
q.C(0)
p=T.Q(z,0,1)
p.C(0)
o=T.Q(-z,0,-1)
o.C(0)
z=T.Q(-z,0,1)
z.C(0)
return H.f([y,x,w,v,u,t,s,r,q,p,o,z],[T.b])},"mV","eG",function(){return H.ai(C.m.bT(W.ke(),"#opaque"),"$isdb")}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.H},{func:1,ret:-1},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:P.H,args:[W.X]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.H,args:[,]},{func:1,ret:P.H,args:[,,]},{func:1,ret:P.e,args:[P.D]},{func:1,ret:P.U,args:[W.ae]},{func:1,ret:P.U,args:[P.e]},{func:1,ret:P.H,args:[W.b0]},{func:1,ret:P.U,args:[W.V,P.e,P.e,W.bx]},{func:1,args:[,P.e]},{func:1,args:[P.e]},{func:1,ret:P.H,args:[{func:1,ret:-1}]},{func:1,ret:P.H,args:[,],opt:[P.a7]},{func:1,ret:[P.ag,,],args:[,]},{func:1,ret:P.U,args:[W.u]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.H,args:[P.F]},{func:1,args:[W.a5]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[W.u,W.u]},{func:1,ret:-1,args:[W.a5]},{func:1,ret:-1,args:[P.a4,T.b]},{func:1,ret:P.H,args:[W.aM]},{func:1,ret:P.D,args:[P.D,P.c]},{func:1,ret:-1,args:[P.F]},{func:1,ret:P.D,args:[,,]}]
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
if(x==y)H.kF(d||a)
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
Isolate.aR=a.aR
Isolate.bg=a.bg
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
if(typeof dartMainRunner==="function")dartMainRunner(O.ej,[])
else O.ej([])})})()
//# sourceMappingURL=wireframe.dart.js.map
