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
if(a1==="q"){processStatics(init.statics[b2]=b3.q,b4)
delete b3.q}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cA"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cA"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cA(this,d,e,f,true,false,a1).prototype
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
var dart=[["","",,H,{"^":"",lI:{"^":"c;a"}}],["","",,J,{"^":"",
cE:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c5:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cD==null){H.kw()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.e(P.dG("Return interceptor for "+H.f(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cH()]
if(v!=null)return v
v=H.kB(a)
if(v!=null)return v
if(typeof a=="function")return C.R
y=Object.getPrototypeOf(a)
if(y==null)return C.A
if(y===Object.prototype)return C.A
if(typeof w=="function"){Object.defineProperty(w,$.cH(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
j:{"^":"c;",
F:function(a,b){return a===b},
gB:function(a){return H.b5(a)},
l:["ck",function(a){return"Instance of '"+H.b6(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hb:{"^":"j;",
l:function(a){return String(a)},
gB:function(a){return a?519018:218159},
$isT:1},
hc:{"^":"j;",
F:function(a,b){return null==b},
l:function(a){return"null"},
gB:function(a){return 0},
$isG:1},
cn:{"^":"j;",
gB:function(a){return 0},
l:["cm",function(a){return String(a)}]},
hL:{"^":"cn;"},
b9:{"^":"cn;"},
by:{"^":"cn;",
l:function(a){var z=a[$.ev()]
if(z==null)return this.cm(a)
return"JavaScript function for "+H.f(J.bo(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbr:1},
bv:{"^":"j;$ti",
j:function(a,b){H.A(b,H.q(a,0))
if(!!a.fixed$length)H.a_(P.z("add"))
a.push(b)},
I:function(a,b){var z,y
H.x(b,"$isl",[H.q(a,0)],"$asl")
if(!!a.fixed$length)H.a_(P.z("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.K)(b),++y)a.push(b[y])},
a8:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.f(a[y]))
return z.join(b)},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
gdG:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.e(H.df())},
bl:function(a,b){var z,y
H.n(b,{func:1,ret:P.T,args:[H.q(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.e(P.aK(a))}return!1},
ce:function(a,b){if(!!a.immutable$list)H.a_(P.z("sort"))
H.ib(a,J.k7(),H.q(a,0))},
aT:function(a){return this.ce(a,null)},
A:function(a,b){var z
for(z=0;z<a.length;++z)if(J.ap(a[z],b))return!0
return!1},
l:function(a){return P.cl(a,"[","]")},
gD:function(a){return new J.ft(a,a.length,0,[H.q(a,0)])},
gB:function(a){return H.b5(a)},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.e(H.bf(a,b))
return a[b]},
i:function(a,b,c){H.A(c,H.q(a,0))
if(!!a.immutable$list)H.a_(P.z("indexed set"))
if(b>=a.length||b<0)throw H.e(H.bf(a,b))
a[b]=c},
$isw:1,
$asw:I.bg,
$isl:1,
$isa:1,
q:{
ha:function(a,b){return J.cm(H.i(a,[b]))},
cm:function(a){H.bH(a)
a.fixed$length=Array
return a},
lG:[function(a,b){return J.eW(H.ek(a,"$isZ"),H.ek(b,"$isZ"))},"$2","k7",8,0,30]}},
lH:{"^":"bv;$ti"},
ft:{"^":"c;a,b,c,0d,$ti",
sb1:function(a){this.d=H.A(a,H.q(this,0))},
gE:function(a){return this.d},
u:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.e(H.K(z))
x=this.c
if(x>=y){this.sb1(null)
return!1}this.sb1(z[x]);++this.c
return!0},
$isaZ:1},
bw:{"^":"j;",
O:function(a,b){var z
H.cF(b)
if(typeof b!=="number")throw H.e(H.bd(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gak(b)
if(this.gak(a)===z)return 0
if(this.gak(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gak:function(a){return a===0?1/a<0:a<0},
bV:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.e(P.z(""+a+".toInt()"))},
dm:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.e(P.z(""+a+".ceil()"))},
dn:function(a,b,c){if(this.O(b,c)>0)throw H.e(H.bd(b))
if(this.O(a,b)<0)return b
if(this.O(a,c)>0)return c
return a},
dP:function(a,b){var z
if(b>20)throw H.e(P.bU(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gak(a))return"-"+z
return z},
l:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gB:function(a){return a&0x1FFFFFFF},
co:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bi(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.bi(a,b)},
bi:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.e(P.z("Result of truncating division is "+H.f(z)+": "+H.f(a)+" ~/ "+b))},
bg:function(a,b){var z
if(a>0)z=this.d9(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
d9:function(a,b){return b>31?0:a>>>b},
X:function(a,b){if(typeof b!=="number")throw H.e(H.bd(b))
return a>b},
$isZ:1,
$asZ:function(){return[P.E]},
$isa3:1,
$isE:1},
dh:{"^":"bw;",$isD:1},
dg:{"^":"bw;"},
bx:{"^":"j;",
ar:function(a,b){if(b>=a.length)throw H.e(H.bf(a,b))
return a.charCodeAt(b)},
L:function(a,b){H.u(b)
if(typeof b!=="string")throw H.e(P.cX(b,null,null))
return a+b},
cg:function(a,b,c){var z
if(c>a.length)throw H.e(P.bU(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cf:function(a,b){return this.cg(a,b,0)},
cj:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.bV(b,null,null))
if(b>c)throw H.e(P.bV(b,null,null))
if(c>a.length)throw H.e(P.bV(c,null,null))
return a.substring(b,c)},
ci:function(a,b){return this.cj(a,b,null)},
dO:function(a){return a.toLowerCase()},
dq:function(a,b,c){if(c>a.length)throw H.e(P.bU(c,0,a.length,null,null))
return H.kK(a,b,c)},
O:function(a,b){var z
H.u(b)
if(typeof b!=="string")throw H.e(H.bd(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.e(H.bf(a,b))
return a[b]},
$isw:1,
$asw:I.bg,
$isZ:1,
$asZ:function(){return[P.d]},
$ishJ:1,
$isd:1}}],["","",,H,{"^":"",
df:function(){return new P.cs("No element")},
h9:function(){return new P.cs("Too many elements")},
ib:function(a,b,c){H.x(a,"$isa",[c],"$asa")
H.n(b,{func:1,ret:P.D,args:[c,c]})
H.bA(a,0,J.aU(a)-1,b,c)},
bA:function(a,b,c,d,e){H.x(a,"$isa",[e],"$asa")
H.n(d,{func:1,ret:P.D,args:[e,e]})
if(c-b<=32)H.ia(a,b,c,d,e)
else H.i9(a,b,c,d,e)},
ia:function(a,b,c,d,e){var z,y,x,w,v
H.x(a,"$isa",[e],"$asa")
H.n(d,{func:1,ret:P.D,args:[e,e]})
for(z=b+1,y=J.bh(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.ab(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
i9:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.x(a,"$isa",[a2],"$asa")
H.n(a1,{func:1,ret:P.D,args:[a2,a2]})
z=C.d.a_(a0-b+1,6)
y=b+z
x=a0-z
w=C.d.a_(b+a0,2)
v=w-z
u=w+z
t=J.bh(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.ab(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.ab(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.ab(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.ab(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.ab(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.ab(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.ab(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.ab(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.ab(a1.$2(p,o),0)){n=o
o=p
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,a0))
m=b+1
l=a0-1
if(J.ap(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a9()
if(i<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.X()
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
if(typeof e!=="number")return e.a9()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.X()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.X()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a9()
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
H.bA(a,b,m-2,a1,a2)
H.bA(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.ap(a1.$2(t.h(a,m),r),0);)++m
for(;J.ap(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a9()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.bA(a,m,l,a1,a2)}else H.bA(a,m,l,a1,a2)},
d8:{"^":"l;"},
bT:{"^":"d8;$ti",
gD:function(a){return new H.dk(this,this.gk(this),0,[H.cC(this,"bT",0)])},
aH:function(a,b){return this.cl(0,H.n(b,{func:1,ret:P.T,args:[H.cC(this,"bT",0)]}))}},
dk:{"^":"c;a,b,c,0d,$ti",
sb2:function(a){this.d=H.A(a,H.q(this,0))},
gE:function(a){return this.d},
u:function(){var z,y,x,w
z=this.a
y=J.bh(z)
x=y.gk(z)
if(this.b!==x)throw H.e(P.aK(z))
w=this.c
if(w>=x){this.sb2(null)
return!1}this.sb2(y.v(z,w));++this.c
return!0},
$isaZ:1},
hn:{"^":"bT;a,b,$ti",
gk:function(a){return J.aU(this.a)},
v:function(a,b){return this.b.$1(J.f3(this.a,b))},
$asbT:function(a,b){return[b]},
$asl:function(a,b){return[b]}},
dH:{"^":"l;a,b,$ti",
gD:function(a){return new H.iy(J.bN(this.a),this.b,this.$ti)}},
iy:{"^":"aZ;a,b,$ti",
u:function(){var z,y
for(z=this.a,y=this.b;z.u();)if(y.$1(z.gE(z)))return!0
return!1},
gE:function(a){var z=this.a
return z.gE(z)}},
bS:{"^":"c;$ti"}}],["","",,H,{"^":"",
aH:function(a){var z,y
z=H.u(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
ko:function(a){return init.types[H.P(a)]},
kz:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.B(a).$isy},
f:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bo(a)
if(typeof z!=="string")throw H.e(H.bd(a))
return z},
b5:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b6:function(a){return H.hM(a)+H.c_(H.al(a),0,null)},
hM:function(a){var z,y,x,w,v,u,t,s,r
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
return H.aH(w.length>1&&C.i.ar(w,0)===36?C.i.ci(w,1):w)},
aL:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hT:function(a){var z=H.aL(a).getFullYear()+0
return z},
hR:function(a){var z=H.aL(a).getMonth()+1
return z},
hN:function(a){var z=H.aL(a).getDate()+0
return z},
hO:function(a){var z=H.aL(a).getHours()+0
return z},
hQ:function(a){var z=H.aL(a).getMinutes()+0
return z},
hS:function(a){var z=H.aL(a).getSeconds()+0
return z},
hP:function(a){var z=H.aL(a).getMilliseconds()+0
return z},
am:function(a){throw H.e(H.bd(a))},
k:function(a,b){if(a==null)J.aU(a)
throw H.e(H.bf(a,b))},
bf:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aJ(!0,b,"index",null)
z=H.P(J.aU(a))
if(!(b<0)){if(typeof z!=="number")return H.am(z)
y=b>=z}else y=!0
if(y)return P.F(b,a,"index",null,z)
return P.bV(b,"index",null)},
bd:function(a){return new P.aJ(!0,a,null,null)},
e:function(a){var z
if(a==null)a=new P.dr()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.en})
z.name=""}else z.toString=H.en
return z},
en:function(){return J.bo(this.dartException)},
a_:function(a){throw H.e(a)},
K:function(a){throw H.e(P.aK(a))},
a9:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kM(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.bg(x,16)&8191)===10)switch(w){case 438:return z.$1(H.co(H.f(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dq(H.f(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.ez()
u=$.eA()
t=$.eB()
s=$.eC()
r=$.eF()
q=$.eG()
p=$.eE()
$.eD()
o=$.eI()
n=$.eH()
m=v.M(y)
if(m!=null)return z.$1(H.co(H.u(y),m))
else{m=u.M(y)
if(m!=null){m.method="call"
return z.$1(H.co(H.u(y),m))}else{m=t.M(y)
if(m==null){m=s.M(y)
if(m==null){m=r.M(y)
if(m==null){m=q.M(y)
if(m==null){m=p.M(y)
if(m==null){m=s.M(y)
if(m==null){m=o.M(y)
if(m==null){m=n.M(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dq(H.u(y),m))}}return z.$1(new H.iv(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dx()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aJ(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dx()
return a},
bj:function(a){var z
if(a==null)return new H.dX(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dX(a)},
kk:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
ky:function(a,b,c,d,e,f){H.h(a,"$isbr")
switch(H.P(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.dc("Unsupported number of arguments for wrapped closure"))},
be:function(a,b){var z
H.P(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ky)
a.$identity=z
return z},
fE:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.B(d).$isa){z.$reflectionInfo=d
x=H.hX(z).r}else x=d
w=e?Object.create(new H.ic().constructor.prototype):Object.create(new H.cf(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ac
if(typeof u!=="number")return u.L()
$.ac=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.d1(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.ko,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.d_:H.cg
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.e("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.d1(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
fB:function(a,b,c,d){var z=H.cg
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
d1:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fD(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fB(y,!w,z,b)
if(y===0){w=$.ac
if(typeof w!=="number")return w.L()
$.ac=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aV
if(v==null){v=H.bQ("self")
$.aV=v}return new Function(w+H.f(v)+";return "+u+"."+H.f(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ac
if(typeof w!=="number")return w.L()
$.ac=w+1
t+=w
w="return function("+t+"){return this."
v=$.aV
if(v==null){v=H.bQ("self")
$.aV=v}return new Function(w+H.f(v)+"."+H.f(z)+"("+t+");}")()},
fC:function(a,b,c,d){var z,y
z=H.cg
y=H.d_
switch(b?-1:a){case 0:throw H.e(H.i2("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fD:function(a,b){var z,y,x,w,v,u,t,s
z=$.aV
if(z==null){z=H.bQ("self")
$.aV=z}y=$.cZ
if(y==null){y=H.bQ("receiver")
$.cZ=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fC(w,!u,x,b)
if(w===1){z="return function(){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+");"
y=$.ac
if(typeof y!=="number")return y.L()
$.ac=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+", "+s+");"
y=$.ac
if(typeof y!=="number")return y.L()
$.ac=y+1
return new Function(z+y+"}")()},
cA:function(a,b,c,d,e,f,g){return H.fE(a,b,H.P(c),d,!!e,!!f,g)},
u:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.a7(a,"String"))},
eb:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.a7(a,"double"))},
cF:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.a7(a,"num"))},
c2:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.a7(a,"bool"))},
P:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.a7(a,"int"))},
cG:function(a,b){throw H.e(H.a7(a,H.aH(H.u(b).substring(3))))},
kH:function(a,b){throw H.e(H.d0(a,H.aH(H.u(b).substring(3))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.B(a)[b])return a
H.cG(a,b)},
an:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.B(a)[b]
else z=!0
if(z)return a
H.kH(a,b)},
ek:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.B(a)[b])return a
H.cG(a,b)},
bH:function(a){if(a==null)return a
if(!!J.B(a).$isa)return a
throw H.e(H.a7(a,"List<dynamic>"))},
kA:function(a,b){var z
if(a==null)return a
z=J.B(a)
if(!!z.$isa)return a
if(z[b])return a
H.cG(a,b)},
cB:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.P(z)]
else return a.$S()}return},
bE:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cB(J.B(a))
if(z==null)return!1
return H.e2(z,null,b,null)},
n:function(a,b){var z,y
if(a==null)return a
if($.cw)return a
$.cw=!0
try{if(H.bE(a,b))return a
z=H.bI(b)
y=H.a7(a,z)
throw H.e(y)}finally{$.cw=!1}},
c4:function(a,b){if(a!=null&&!H.cz(a,b))H.a_(H.a7(a,H.bI(b)))
return a},
e6:function(a){var z,y
z=J.B(a)
if(!!z.$iso){y=H.cB(z)
if(y!=null)return H.bI(y)
return"Closure"}return H.b6(a)},
kL:function(a){throw H.e(new P.fL(H.u(a)))},
eg:function(a){return init.getIsolateTag(a)},
i:function(a,b){a.$ti=b
return a},
al:function(a){if(a==null)return
return a.$ti},
n6:function(a,b,c){return H.aT(a["$as"+H.f(c)],H.al(b))},
bi:function(a,b,c,d){var z
H.u(c)
H.P(d)
z=H.aT(a["$as"+H.f(c)],H.al(b))
return z==null?null:z[d]},
cC:function(a,b,c){var z
H.u(b)
H.P(c)
z=H.aT(a["$as"+H.f(b)],H.al(a))
return z==null?null:z[c]},
q:function(a,b){var z
H.P(b)
z=H.al(a)
return z==null?null:z[b]},
bI:function(a){return H.aG(a,null)},
aG:function(a,b){var z,y
H.x(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aH(a[0].builtin$cls)+H.c_(a,1,b)
if(typeof a=="function")return H.aH(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.P(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.k(b,y)
return H.f(b[y])}if('func' in a)return H.k6(a,b)
if('futureOr' in a)return"FutureOr<"+H.aG("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
k6:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
H.x(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.i([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.j(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.k(b,r)
t=C.i.L(t,b[r])
q=y[u]
if(q!=null&&q!==P.c)t+=" extends "+H.aG(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aG(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aG(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aG(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kj(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.u(z[l])
n=n+m+H.aG(i[h],b)+(" "+H.f(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
c_:function(a,b,c){var z,y,x,w,v,u
H.x(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.cu("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aG(u,c)}return"<"+z.l(0)+">"},
kn:function(a){var z,y,x,w
z=J.B(a)
if(!!z.$iso){y=H.cB(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.al(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aT:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aR:function(a,b,c,d){var z,y
H.u(b)
H.bH(c)
H.u(d)
if(a==null)return!1
z=H.al(a)
y=J.B(a)
if(y[b]==null)return!1
return H.e9(H.aT(y[d],z),null,c,null)},
bJ:function(a,b,c,d){H.u(b)
H.bH(c)
H.u(d)
if(a==null)return a
if(H.aR(a,b,c,d))return a
throw H.e(H.d0(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aH(b.substring(3))+H.c_(c,0,null),init.mangledGlobalNames)))},
x:function(a,b,c,d){H.u(b)
H.bH(c)
H.u(d)
if(a==null)return a
if(H.aR(a,b,c,d))return a
throw H.e(H.a7(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aH(b.substring(3))+H.c_(c,0,null),init.mangledGlobalNames)))},
e9:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a1(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a1(a[y],b,c[y],d))return!1
return!0},
n4:function(a,b,c){return a.apply(b,H.aT(J.B(b)["$as"+H.f(c)],H.al(b)))},
ei:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="c"||a.builtin$cls==="G"||a===-1||a===-2||H.ei(z)}return!1},
cz:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="c"||b.builtin$cls==="G"||b===-1||b===-2||H.ei(b)
if(b==null||b===-1||b.builtin$cls==="c"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cz(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bE(a,b)}z=J.B(a).constructor
y=H.al(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a1(z,null,b,null)},
A:function(a,b){if(a!=null&&!H.cz(a,b))throw H.e(H.a7(a,H.bI(b)))
return a},
a1:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="c"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="c"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a1(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.e2(a,b,c,d)
if('func' in a)return c.builtin$cls==="br"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a1("type" in a?a.type:null,b,x,d)
else if(H.a1(a,b,x,d))return!0
else{if(!('$is'+"aY" in y.prototype))return!1
w=y.prototype["$as"+"aY"]
v=H.aT(w,z?a.slice(1):null)
return H.a1(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.e9(H.aT(r,z),b,u,d)},
e2:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a1(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.a1(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a1(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a1(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kG(m,b,l,d)},
kG:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a1(c[w],d,a[w],b))return!1}return!0},
n5:function(a,b,c){Object.defineProperty(a,H.u(b),{value:c,enumerable:false,writable:true,configurable:true})},
kB:function(a){var z,y,x,w,v,u
z=H.u($.eh.$1(a))
y=$.c3[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c6[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.u($.e8.$2(a,z))
if(z!=null){y=$.c3[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c6[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c7(x)
$.c3[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c6[z]=x
return x}if(v==="-"){u=H.c7(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.el(a,x)
if(v==="*")throw H.e(P.dG(z))
if(init.leafTags[z]===true){u=H.c7(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.el(a,x)},
el:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cE(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c7:function(a){return J.cE(a,!1,null,!!a.$isy)},
kF:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c7(z)
else return J.cE(z,c,null,null)},
kw:function(){if(!0===$.cD)return
$.cD=!0
H.kx()},
kx:function(){var z,y,x,w,v,u,t,s
$.c3=Object.create(null)
$.c6=Object.create(null)
H.ks()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.em.$1(v)
if(u!=null){t=H.kF(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
ks:function(){var z,y,x,w,v,u,t
z=C.O()
z=H.aQ(C.L,H.aQ(C.Q,H.aQ(C.y,H.aQ(C.y,H.aQ(C.P,H.aQ(C.M,H.aQ(C.N(C.z),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eh=new H.kt(v)
$.e8=new H.ku(u)
$.em=new H.kv(t)},
aQ:function(a,b){return a(b)||b},
kK:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hW:{"^":"c;a,b,c,d,e,f,r,0x",q:{
hX:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cm(z)
y=z[0]
x=z[1]
return new H.hW(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iq:{"^":"c;a,b,c,d,e,f",
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
q:{
ae:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.i([],[P.d])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iq(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bW:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dD:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hG:{"^":"R;a,b",
l:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
q:{
dq:function(a,b){return new H.hG(a,b==null?null:b.method)}}},
hd:{"^":"R;a,b,c",
l:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.f(this.a)+")"},
q:{
co:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hd(a,y,z?null:b.receiver)}}},
iv:{"^":"R;a",
l:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kM:{"^":"o:5;a",
$1:function(a){if(!!J.B(a).$isR)if(a.$thrownJsError==null)a.$thrownJsError=this.a
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
$isa6:1},
o:{"^":"c;",
l:function(a){return"Closure '"+H.b6(this).trim()+"'"},
gc9:function(){return this},
$isbr:1,
gc9:function(){return this}},
dz:{"^":"o;"},
ic:{"^":"dz;",
l:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aH(z)+"'"}},
cf:{"^":"dz;a,b,c,d",
F:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cf))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gB:function(a){var z,y
z=this.c
if(z==null)y=H.b5(this.a)
else y=typeof z!=="object"?J.aq(z):H.b5(z)
return(y^H.b5(this.b))>>>0},
l:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.b6(z)+"'")},
q:{
cg:function(a){return a.a},
d_:function(a){return a.c},
bQ:function(a){var z,y,x,w,v
z=new H.cf("self","target","receiver","name")
y=J.cm(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ir:{"^":"R;a",
l:function(a){return this.a},
q:{
a7:function(a,b){return new H.ir("TypeError: "+P.bR(a)+": type '"+H.e6(a)+"' is not a subtype of type '"+b+"'")}}},
fz:{"^":"R;a",
l:function(a){return this.a},
q:{
d0:function(a,b){return new H.fz("CastError: "+P.bR(a)+": type '"+H.e6(a)+"' is not a subtype of type '"+b+"'")}}},
i1:{"^":"R;a",
l:function(a){return"RuntimeError: "+H.f(this.a)},
q:{
i2:function(a){return new H.i1(a)}}},
dE:{"^":"c;a,0b,0c,0d",
gag:function(){var z=this.b
if(z==null){z=H.bI(this.a)
this.b=z}return z},
l:function(a){return this.gag()},
gB:function(a){var z=this.d
if(z==null){z=C.i.gB(this.gag())
this.d=z}return z},
F:function(a,b){if(b==null)return!1
return b instanceof H.dE&&this.gag()===b.gag()}},
di:{"^":"dl;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gJ:function(a){return new H.ak(this,[H.q(this,0)])},
aj:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cU(z,b)}else{y=this.dE(b)
return y}},
dE:function(a){var z=this.d
if(z==null)return!1
return this.aF(this.ax(z,J.aq(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ae(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ae(w,b)
x=y==null?null:y.b
return x}else return this.dF(b)},
dF:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.ax(z,J.aq(a)&0x3ffffff)
x=this.aF(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.A(b,H.q(this,0))
H.A(c,H.q(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.az()
this.b=z}this.b3(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.az()
this.c=y}this.b3(y,b,c)}else{x=this.d
if(x==null){x=this.az()
this.d=x}w=J.aq(b)&0x3ffffff
v=this.ax(x,w)
if(v==null)this.aD(x,w,[this.ap(b,c)])
else{u=this.aF(v,b)
if(u>=0)v[u].b=c
else v.push(this.ap(b,c))}}},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.e(P.aK(this))
z=z.c}},
b3:function(a,b,c){var z
H.A(b,H.q(this,0))
H.A(c,H.q(this,1))
z=this.ae(a,b)
if(z==null)this.aD(a,b,this.ap(b,c))
else z.b=c},
b5:function(){this.r=this.r+1&67108863},
ap:function(a,b){var z,y
z=new H.hi(H.A(a,H.q(this,0)),H.A(b,H.q(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b5()
return z},
aF:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.ap(a[y].a,b))return y
return-1},
l:function(a){return P.dm(this)},
ae:function(a,b){return a[b]},
ax:function(a,b){return a[b]},
aD:function(a,b,c){a[b]=c},
cV:function(a,b){delete a[b]},
cU:function(a,b){return this.ae(a,b)!=null},
az:function(){var z=Object.create(null)
this.aD(z,"<non-identifier-key>",z)
this.cV(z,"<non-identifier-key>")
return z},
$isdj:1},
hi:{"^":"c;a,b,0c,0d"},
ak:{"^":"d8;a,$ti",
gk:function(a){return this.a.a},
gD:function(a){var z,y
z=this.a
y=new H.hj(z,z.r,this.$ti)
y.c=z.e
return y}},
hj:{"^":"c;a,b,0c,0d,$ti",
sb4:function(a){this.d=H.A(a,H.q(this,0))},
gE:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aK(z))
else{z=this.c
if(z==null){this.sb4(null)
return!1}else{this.sb4(z.a)
this.c=this.c.c
return!0}}},
$isaZ:1},
kt:{"^":"o:5;a",
$1:function(a){return this.a(a)}},
ku:{"^":"o:13;a",
$2:function(a,b){return this.a(a,b)}},
kv:{"^":"o:14;a",
$1:function(a){return this.a(H.u(a))}}}],["","",,H,{"^":"",
kj:function(a){return J.ha(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
c8:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bZ:function(a){var z,y
if(!!J.B(a).$isw)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.i(z,y,a[y])
return z},
ag:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.bf(b,a))},
hA:{"^":"j;",$isis:1,"%":"DataView;ArrayBufferView;cr|dR|dS|dn|dT|dU|aw"},
cr:{"^":"hA;",
gk:function(a){return a.length},
$isw:1,
$asw:I.bg,
$isy:1,
$asy:I.bg},
dn:{"^":"dS;",
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
i:function(a,b,c){H.eb(c)
H.ag(b,a,a.length)
a[b]=c},
$asbS:function(){return[P.a3]},
$asp:function(){return[P.a3]},
$isl:1,
$asl:function(){return[P.a3]},
$isa:1,
$asa:function(){return[P.a3]},
"%":"Float64Array"},
aw:{"^":"dU;",
i:function(a,b,c){H.P(c)
H.ag(b,a,a.length)
a[b]=c},
$asbS:function(){return[P.D]},
$asp:function(){return[P.D]},
$isl:1,
$asl:function(){return[P.D]},
$isa:1,
$asa:function(){return[P.D]}},
hz:{"^":"dn;",$isaj:1,"%":"Float32Array"},
lQ:{"^":"aw;",
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lR:{"^":"aw;",
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
$ish7:1,
"%":"Int32Array"},
lS:{"^":"aw;",
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lT:{"^":"aw;",
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hB:{"^":"aw;",
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
$ismE:1,
"%":"Uint32Array"},
lU:{"^":"aw;",
gk:function(a){return a.length},
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lV:{"^":"aw;",
gk:function(a){return a.length},
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dR:{"^":"cr+p;"},
dS:{"^":"dR+bS;"},
dT:{"^":"cr+p;"},
dU:{"^":"dT+bS;"}}],["","",,P,{"^":"",
iC:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.ke()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.be(new P.iE(z),1)).observe(y,{childList:true})
return new P.iD(z,y,x)}else if(self.setImmediate!=null)return P.kf()
return P.kg()},
mO:[function(a){self.scheduleImmediate(H.be(new P.iF(H.n(a,{func:1,ret:-1})),0))},"$1","ke",4,0,4],
mP:[function(a){self.setImmediate(H.be(new P.iG(H.n(a,{func:1,ret:-1})),0))},"$1","kf",4,0,4],
mQ:[function(a){H.n(a,{func:1,ret:-1})
P.jP(0,a)},"$1","kg",4,0,4],
ka:function(a,b){if(H.bE(a,{func:1,args:[P.c,P.a6]}))return H.n(a,{func:1,ret:null,args:[P.c,P.a6]})
if(H.bE(a,{func:1,args:[P.c]}))return H.n(a,{func:1,ret:null,args:[P.c]})
throw H.e(P.cX(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
k9:function(){var z,y
for(;z=$.aP,z!=null;){$.bc=null
y=z.b
$.aP=y
if(y==null)$.bb=null
z.a.$0()}},
n2:[function(){$.cx=!0
try{P.k9()}finally{$.bc=null
$.cx=!1
if($.aP!=null)$.cI().$1(P.ea())}},"$0","ea",0,0,1],
e5:function(a){var z=new P.dJ(H.n(a,{func:1,ret:-1}))
if($.aP==null){$.bb=z
$.aP=z
if(!$.cx)$.cI().$1(P.ea())}else{$.bb.b=z
$.bb=z}},
kd:function(a){var z,y,x
H.n(a,{func:1,ret:-1})
z=$.aP
if(z==null){P.e5(a)
$.bc=$.bb
return}y=new P.dJ(a)
x=$.bc
if(x==null){y.b=z
$.bc=y
$.aP=y}else{y.b=x.b
x.b=y
$.bc=y
if(y.b==null)$.bb=y}},
kI:function(a){var z,y
z={func:1,ret:-1}
H.n(a,z)
y=$.J
if(C.e===y){P.c1(null,null,C.e,a)
return}y.toString
P.c1(null,null,y,H.n(y.bo(a),z))},
c0:function(a,b,c,d,e){var z={}
z.a=d
P.kd(new P.kb(z,e))},
e3:function(a,b,c,d,e){var z,y
H.n(d,{func:1,ret:e})
y=$.J
if(y===c)return d.$0()
$.J=c
z=y
try{y=d.$0()
return y}finally{$.J=z}},
e4:function(a,b,c,d,e,f,g){var z,y
H.n(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.J
if(y===c)return d.$1(e)
$.J=c
z=y
try{y=d.$1(e)
return y}finally{$.J=z}},
kc:function(a,b,c,d,e,f,g,h,i){var z,y
H.n(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.J
if(y===c)return d.$2(e,f)
$.J=c
z=y
try{y=d.$2(e,f)
return y}finally{$.J=z}},
c1:function(a,b,c,d){var z
H.n(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.bo(d):c.dj(d,-1)
P.e5(d)},
iE:{"^":"o:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iD:{"^":"o:15;a,b,c",
$1:function(a){var z,y
this.a.a=H.n(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iF:{"^":"o:0;a",
$0:function(){this.a.$0()}},
iG:{"^":"o:0;a",
$0:function(){this.a.$0()}},
jO:{"^":"c;a,0b,c",
cQ:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.be(new P.jQ(this,b),0),a)
else throw H.e(P.z("`setTimeout()` not found."))},
q:{
jP:function(a,b){var z=new P.jO(!0,0)
z.cQ(a,b)
return z}}},
jQ:{"^":"o:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
iJ:{"^":"c;$ti"},
jJ:{"^":"iJ;a,$ti"},
aO:{"^":"c;0a,b,c,d,e,$ti",
dH:function(a){if(this.c!==6)return!0
return this.b.b.aG(H.n(this.d,{func:1,ret:P.T,args:[P.c]}),a.a,P.T,P.c)},
dD:function(a){var z,y,x,w
z=this.e
y=P.c
x={futureOr:1,type:H.q(this,1)}
w=this.b.b
if(H.bE(z,{func:1,args:[P.c,P.a6]}))return H.c4(w.dK(z,a.a,a.b,null,y,P.a6),x)
else return H.c4(w.aG(H.n(z,{func:1,args:[P.c]}),a.a,null,y),x)}},
af:{"^":"c;bh:a<,b,0d6:c<,$ti",
bU:function(a,b,c){var z,y,x,w
z=H.q(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.J
if(y!==C.e){y.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ka(b,y)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.af(0,$.J,[c])
w=b==null?1:3
this.b7(new P.aO(x,w,a,b,[z,c]))
return x},
bT:function(a,b){return this.bU(a,null,b)},
b7:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isaO")
this.c=a}else{if(z===2){y=H.h(this.c,"$isaf")
z=y.a
if(z<4){y.b7(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.c1(null,null,z,H.n(new P.iY(this,a),{func:1,ret:-1}))}},
be:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isaO")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isaf")
y=u.a
if(y<4){u.be(a)
return}this.a=y
this.c=u.c}z.a=this.af(a)
y=this.b
y.toString
P.c1(null,null,y,H.n(new P.j2(z,this),{func:1,ret:-1}))}},
aC:function(){var z=H.h(this.c,"$isaO")
this.c=null
return this.af(z)},
af:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
as:function(a){var z,y,x
z=H.q(this,0)
H.c4(a,{futureOr:1,type:z})
y=this.$ti
if(H.aR(a,"$isaY",y,"$asaY"))if(H.aR(a,"$isaf",y,null))P.dM(a,this)
else P.iZ(a,this)
else{x=this.aC()
H.A(a,z)
this.a=4
this.c=a
P.ba(this,x)}},
b9:function(a,b){var z
H.h(b,"$isa6")
z=this.aC()
this.a=8
this.c=new P.a0(a,b)
P.ba(this,z)},
$isaY:1,
q:{
iZ:function(a,b){var z,y,x
b.a=1
try{a.bU(new P.j_(b),new P.j0(b),null)}catch(x){z=H.a9(x)
y=H.bj(x)
P.kI(new P.j1(b,z,y))}},
dM:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isaf")
if(z>=4){y=b.aC()
b.a=a.a
b.c=a.c
P.ba(b,y)}else{y=H.h(b.c,"$isaO")
b.a=2
b.c=a
a.be(y)}},
ba:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isa0")
y=y.b
u=v.a
t=v.b
y.toString
P.c0(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.h(r,"$isa0")
y=y.b
u=r.a
t=r.b
y.toString
P.c0(null,null,y,u,t)
return}o=$.J
if(o!=q)$.J=q
else o=null
y=b.c
if(y===8)new P.j5(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.j4(x,b,r).$0()}else if((y&2)!==0)new P.j3(z,x,b).$0()
if(o!=null)$.J=o
y=x.b
if(!!J.B(y).$isaY){if(y.a>=4){n=H.h(t.c,"$isaO")
t.c=null
b=t.af(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dM(y,t)
return}}m=b.b
n=H.h(m.c,"$isaO")
m.c=null
b=m.af(n)
y=x.a
u=x.b
if(!y){H.A(u,H.q(m,0))
m.a=4
m.c=u}else{H.h(u,"$isa0")
m.a=8
m.c=u}z.a=m
y=m}}}},
iY:{"^":"o:0;a,b",
$0:function(){P.ba(this.a,this.b)}},
j2:{"^":"o:0;a,b",
$0:function(){P.ba(this.b,this.a.a)}},
j_:{"^":"o:6;a",
$1:function(a){var z=this.a
z.a=0
z.as(a)}},
j0:{"^":"o:16;a",
$2:function(a,b){H.h(b,"$isa6")
this.a.b9(a,b)},
$1:function(a){return this.$2(a,null)}},
j1:{"^":"o:0;a,b,c",
$0:function(){this.a.b9(this.b,this.c)}},
j5:{"^":"o:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bS(H.n(w.d,{func:1}),null)}catch(v){y=H.a9(v)
x=H.bj(v)
if(this.d){w=H.h(this.a.a.c,"$isa0").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isa0")
else u.b=new P.a0(y,x)
u.a=!0
return}if(!!J.B(z).$isaY){if(z instanceof P.af&&z.gbh()>=4){if(z.gbh()===8){w=this.b
w.b=H.h(z.gd6(),"$isa0")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.bT(new P.j6(t),null)
w.a=!1}}},
j6:{"^":"o:17;a",
$1:function(a){return this.a}},
j4:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.q(x,0)
v=H.A(this.c,w)
u=H.q(x,1)
this.a.b=x.b.b.aG(H.n(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a9(t)
y=H.bj(t)
x=this.a
x.b=new P.a0(z,y)
x.a=!0}}},
j3:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isa0")
w=this.c
if(w.dH(z)&&w.e!=null){v=this.b
v.b=w.dD(z)
v.a=!1}}catch(u){y=H.a9(u)
x=H.bj(u)
w=H.h(this.a.a.c,"$isa0")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a0(y,x)
s.a=!0}}},
dJ:{"^":"c;a,0b"},
ih:{"^":"c;$ti",
gk:function(a){var z,y,x,w
z={}
y=new P.af(0,$.J,[P.D])
z.a=0
x=H.q(this,0)
w=H.n(new P.ij(z,this),{func:1,ret:-1,args:[x]})
H.n(new P.ik(z,y),{func:1,ret:-1})
W.aF(this.a,this.b,w,!1,x)
return y}},
ij:{"^":"o;a,b",
$1:function(a){H.A(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.q(this.b,0)]}}},
ik:{"^":"o:0;a,b",
$0:function(){this.b.as(this.a.a)}},
ii:{"^":"c;"},
a0:{"^":"c;a,b",
l:function(a){return H.f(this.a)},
$isR:1},
jW:{"^":"c;",$ismM:1},
kb:{"^":"o:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dr()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.e(z)
x=H.e(z)
x.stack=y.l(0)
throw x}},
js:{"^":"jW;",
dL:function(a){var z,y,x
H.n(a,{func:1,ret:-1})
try{if(C.e===$.J){a.$0()
return}P.e3(null,null,this,a,-1)}catch(x){z=H.a9(x)
y=H.bj(x)
P.c0(null,null,this,z,H.h(y,"$isa6"))}},
dM:function(a,b,c){var z,y,x
H.n(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.e===$.J){a.$1(b)
return}P.e4(null,null,this,a,b,-1,c)}catch(x){z=H.a9(x)
y=H.bj(x)
P.c0(null,null,this,z,H.h(y,"$isa6"))}},
dj:function(a,b){return new P.ju(this,H.n(a,{func:1,ret:b}),b)},
bo:function(a){return new P.jt(this,H.n(a,{func:1,ret:-1}))},
dk:function(a,b){return new P.jv(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
bS:function(a,b){H.n(a,{func:1,ret:b})
if($.J===C.e)return a.$0()
return P.e3(null,null,this,a,b)},
aG:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.J===C.e)return a.$1(b)
return P.e4(null,null,this,a,b,c,d)},
dK:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.J===C.e)return a.$2(b,c)
return P.kc(null,null,this,a,b,c,d,e,f)}},
ju:{"^":"o;a,b,c",
$0:function(){return this.a.bS(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jt:{"^":"o:1;a,b",
$0:function(){return this.a.dL(this.b)}},
jv:{"^":"o;a,b,c",
$1:function(a){var z=this.c
return this.a.dM(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
cp:function(a,b,c){H.bH(a)
return H.x(H.kk(a,new H.di(0,0,[b,c])),"$isdj",[b,c],"$asdj")},
S:function(a,b){return new H.di(0,0,[a,b])},
a5:function(a,b,c,d){return new P.jd(0,0,[d])},
h8:function(a,b,c){var z,y
if(P.cy(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.i([],[P.d])
y=$.bk()
C.a.j(y,a)
try{P.k8(a,z)}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=P.dy(b,H.kA(z,"$isl"),", ")+c
return y.charCodeAt(0)==0?y:y},
cl:function(a,b,c){var z,y,x
if(P.cy(a))return b+"..."+c
z=new P.cu(b)
y=$.bk()
C.a.j(y,a)
try{x=z
x.a=P.dy(x.gZ(),a,", ")}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=z
y.a=y.gZ()+c
y=z.gZ()
return y.charCodeAt(0)==0?y:y},
cy:function(a){var z,y
for(z=0;y=$.bk(),z<y.length;++z)if(a===y[z])return!0
return!1},
k8:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.x(b,"$isa",[P.d],"$asa")
z=a.gD(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.u())return
w=H.f(z.gE(z))
C.a.j(b,w)
y+=w.length+2;++x}if(!z.u()){if(x<=5)return
if(0>=b.length)return H.k(b,-1)
v=b.pop()
if(0>=b.length)return H.k(b,-1)
u=b.pop()}else{t=z.gE(z);++x
if(!z.u()){if(x<=4){C.a.j(b,H.f(t))
return}v=H.f(t)
if(0>=b.length)return H.k(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gE(z);++x
for(;z.u();t=s,s=r){r=z.gE(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2;--x}C.a.j(b,"...")
return}}u=H.f(t)
v=H.f(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.j(b,q)
C.a.j(b,u)
C.a.j(b,v)},
cq:function(a,b){var z,y,x
z=P.a5(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.K)(a),++x)z.j(0,H.A(a[x],b))
return z},
dm:function(a){var z,y,x
z={}
if(P.cy(a))return"{...}"
y=new P.cu("")
try{C.a.j($.bk(),a)
x=y
x.a=x.gZ()+"{"
z.a=!0
J.f6(a,new P.hm(z,y))
z=y
z.a=z.gZ()+"}"}finally{z=$.bk()
if(0>=z.length)return H.k(z,-1)
z.pop()}z=y.gZ()
return z.charCodeAt(0)==0?z:z},
jd:{"^":"j8;a,0b,0c,0d,0e,0f,r,$ti",
gD:function(a){var z=new P.dQ(this,this.r,this.$ti)
z.c=this.e
return z},
gk:function(a){return this.a},
A:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.h(z[b],"$isbD")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.h(y[b],"$isbD")!=null}else return this.cT(b)},
cT:function(a){var z=this.d
if(z==null)return!1
return this.aw(this.bc(z,a),a)>=0},
j:function(a,b){var z,y
H.A(b,H.q(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cv()
this.b=z}return this.b6(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cv()
this.c=y}return this.b6(y,b)}else return this.cR(0,b)},
cR:function(a,b){var z,y,x
H.A(b,H.q(this,0))
z=this.d
if(z==null){z=P.cv()
this.d=z}y=this.ba(b)
x=z[y]
if(x==null)z[y]=[this.aA(b)]
else{if(this.aw(x,b)>=0)return!1
x.push(this.aA(b))}return!0},
bR:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bf(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bf(this.c,b)
else return this.d1(0,b)},
d1:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bc(z,b)
x=this.aw(y,b)
if(x<0)return!1
this.bj(y.splice(x,1)[0])
return!0},
a7:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.ay()}},
b6:function(a,b){H.A(b,H.q(this,0))
if(H.h(a[b],"$isbD")!=null)return!1
a[b]=this.aA(b)
return!0},
bf:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isbD")
if(z==null)return!1
this.bj(z)
delete a[b]
return!0},
ay:function(){this.r=this.r+1&67108863},
aA:function(a){var z,y
z=new P.bD(H.A(a,H.q(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.ay()
return z},
bj:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.ay()},
ba:function(a){return J.aq(a)&0x3ffffff},
bc:function(a,b){return a[this.ba(b)]},
aw:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.ap(a[y].a,b))return y
return-1},
q:{
cv:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bD:{"^":"c;a,0b,0c"},
dQ:{"^":"c;a,b,0c,0d,$ti",
sb8:function(a){this.d=H.A(a,H.q(this,0))},
gE:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aK(z))
else{z=this.c
if(z==null){this.sb8(null)
return!1}else{this.sb8(H.A(z.a,H.q(this,0)))
this.c=this.c.b
return!0}}},
$isaZ:1,
q:{
je:function(a,b,c){var z=new P.dQ(a,b,[c])
z.c=a.e
return z}}},
j8:{"^":"i3;"},
hk:{"^":"jf;",$isl:1,$isa:1},
p:{"^":"c;$ti",
gD:function(a){return new H.dk(a,this.gk(a),0,[H.bi(this,a,"p",0)])},
v:function(a,b){return this.h(a,b)},
dC:function(a,b,c,d){var z,y,x
H.A(b,d)
H.n(c,{func:1,ret:d,args:[d,H.bi(this,a,"p",0)]})
z=this.gk(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gk(a))throw H.e(P.aK(a))}return y},
l:function(a){return P.cl(a,"[","]")}},
dl:{"^":"W;"},
hm:{"^":"o:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.f(a)
z.a=y+": "
z.a+=H.f(b)}},
W:{"^":"c;$ti",
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[H.bi(this,a,"W",0),H.bi(this,a,"W",1)]})
for(z=J.bN(this.gJ(a));z.u();){y=z.gE(z)
b.$2(y,this.h(a,y))}},
gk:function(a){return J.aU(this.gJ(a))},
l:function(a){return P.dm(a)},
$isM:1},
i4:{"^":"c;$ti",
I:function(a,b){var z
for(z=J.bN(H.x(b,"$isl",this.$ti,"$asl"));z.u();)this.j(0,z.gE(z))},
l:function(a){return P.cl(this,"{","}")},
$isl:1,
$ismc:1},
i3:{"^":"i4;"},
jf:{"^":"c+p;"}}],["","",,P,{"^":"",
fX:function(a){if(a instanceof H.o)return a.l(0)
return"Instance of '"+H.b6(a)+"'"},
bR:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bo(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fX(a)},
dc:function(a){return new P.iV(a)},
ao:function(a){H.c8(H.f(a))},
T:{"^":"c;"},
"+bool":0,
bp:{"^":"c;a,b",
F:function(a,b){if(b==null)return!1
return b instanceof P.bp&&this.a===b.a&&!0},
O:function(a,b){return C.d.O(this.a,H.h(b,"$isbp").a)},
gB:function(a){var z=this.a
return(z^C.d.bg(z,30))&1073741823},
l:function(a){var z,y,x,w,v,u,t,s
z=P.fN(H.hT(this))
y=P.bq(H.hR(this))
x=P.bq(H.hN(this))
w=P.bq(H.hO(this))
v=P.bq(H.hQ(this))
u=P.bq(H.hS(this))
t=P.fO(H.hP(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isZ:1,
$asZ:function(){return[P.bp]},
q:{
fN:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fO:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bq:function(a){if(a>=10)return""+a
return"0"+a}}},
a3:{"^":"E;"},
"+double":0,
aW:{"^":"c;a",
X:function(a,b){return C.d.X(this.a,H.h(b,"$isaW").a)},
F:function(a,b){if(b==null)return!1
return b instanceof P.aW&&this.a===b.a},
gB:function(a){return this.a&0x1FFFFFFF},
O:function(a,b){return C.d.O(this.a,H.h(b,"$isaW").a)},
l:function(a){var z,y,x,w,v
z=new P.fU()
y=this.a
if(y<0)return"-"+new P.aW(0-y).l(0)
x=z.$1(C.d.a_(y,6e7)%60)
w=z.$1(C.d.a_(y,1e6)%60)
v=new P.fT().$1(y%1e6)
return""+C.d.a_(y,36e8)+":"+H.f(x)+":"+H.f(w)+"."+H.f(v)},
$isZ:1,
$asZ:function(){return[P.aW]},
q:{
d7:function(a,b,c,d,e,f){return new P.aW(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fT:{"^":"o:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fU:{"^":"o:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
R:{"^":"c;"},
dr:{"^":"R;",
l:function(a){return"Throw of null."}},
aJ:{"^":"R;a,b,c,d",
gau:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gat:function(){return""},
l:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gau()+y+x
if(!this.a)return w
v=this.gat()
u=P.bR(this.b)
return w+v+": "+u},
q:{
cX:function(a,b,c){return new P.aJ(!0,a,b,c)}}},
ds:{"^":"aJ;e,f,a,b,c,d",
gau:function(){return"RangeError"},
gat:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.f(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.f(z)
else if(x>z)y=": Not in range "+H.f(z)+".."+H.f(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.f(z)}return y},
q:{
bV:function(a,b,c){return new P.ds(null,null,!0,a,b,"Value not in range")},
bU:function(a,b,c,d,e){return new P.ds(b,c,!0,a,d,"Invalid value")}}},
h6:{"^":"aJ;e,k:f>,a,b,c,d",
gau:function(){return"RangeError"},
gat:function(){var z,y
z=H.P(this.b)
if(typeof z!=="number")return z.a9()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.f(y)},
q:{
F:function(a,b,c,d,e){var z=H.P(e==null?J.aU(b):e)
return new P.h6(b,z,!0,a,c,"Index out of range")}}},
iw:{"^":"R;a",
l:function(a){return"Unsupported operation: "+this.a},
q:{
z:function(a){return new P.iw(a)}}},
iu:{"^":"R;a",
l:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
dG:function(a){return new P.iu(a)}}},
cs:{"^":"R;a",
l:function(a){return"Bad state: "+this.a},
q:{
ct:function(a){return new P.cs(a)}}},
fF:{"^":"R;a",
l:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bR(z)+"."},
q:{
aK:function(a){return new P.fF(a)}}},
dx:{"^":"c;",
l:function(a){return"Stack Overflow"},
$isR:1},
fL:{"^":"R;a",
l:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iV:{"^":"c;a",
l:function(a){return"Exception: "+this.a}},
br:{"^":"c;"},
D:{"^":"E;"},
"+int":0,
l:{"^":"c;$ti",
aH:["cl",function(a,b){var z=H.cC(this,"l",0)
return new H.dH(this,H.n(b,{func:1,ret:P.T,args:[z]}),[z])}],
gk:function(a){var z,y
z=this.gD(this)
for(y=0;z.u();)++y
return y},
v:function(a,b){var z,y,x
if(b<0)H.a_(P.bU(b,0,null,"index",null))
for(z=this.gD(this),y=0;z.u();){x=z.gE(z)
if(b===y)return x;++y}throw H.e(P.F(b,this,"index",null,y))},
l:function(a){return P.h8(this,"(",")")}},
aZ:{"^":"c;$ti"},
a:{"^":"c;$ti",$isl:1},
"+List":0,
M:{"^":"c;$ti"},
G:{"^":"c;",
gB:function(a){return P.c.prototype.gB.call(this,this)},
l:function(a){return"null"}},
"+Null":0,
E:{"^":"c;",$isZ:1,
$asZ:function(){return[P.E]}},
"+num":0,
c:{"^":";",
F:function(a,b){return this===b},
gB:function(a){return H.b5(this)},
l:function(a){return"Instance of '"+H.b6(this)+"'"},
toString:function(){return this.l(this)}},
a6:{"^":"c;"},
d:{"^":"c;",$isZ:1,
$asZ:function(){return[P.d]},
$ishJ:1},
"+String":0,
cu:{"^":"c;Z:a<",
gk:function(a){return this.a.length},
l:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
q:{
dy:function(a,b,c){var z=J.bN(b)
if(!z.u())return a
if(c.length===0){do a+=H.f(z.gE(z))
while(z.u())}else{a+=H.f(z.gE(z))
for(;z.u();)a=a+c+H.f(z.gE(z))}return a}}}}],["","",,W,{"^":"",
fV:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.q).P(z,a,b,c)
y.toString
z=W.v
z=new H.dH(new W.a8(y),H.n(new W.fW(),{func:1,ret:P.T,args:[z]}),[z])
x=z.gD(z)
if(!x.u())H.a_(H.df())
w=x.gE(x)
if(x.u())H.a_(H.h9())
return H.h(w,"$isU")},
db:function(a){H.h(a,"$isO")
return"wheel"},
aX:function(a){var z,y,x
z="element tag unavailable"
try{y=J.f9(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a9(x)}return z},
iS:function(a,b){return document.createElement(a)},
bY:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dP:function(a,b,c,d){var z,y
z=W.bY(W.bY(W.bY(W.bY(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
e1:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.iM(a)
if(!!J.B(z).$isO)return z
return}else return H.h(a,"$isO")},
e7:function(a,b){var z
H.n(a,{func:1,ret:-1,args:[b]})
z=$.J
if(z===C.e)return a
return z.dk(a,b)},
N:{"^":"U;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kN:{"^":"j;0k:length=","%":"AccessibleNodeList"},
fr:{"^":"N;",
l:function(a){return String(a)},
$isfr:1,
"%":"HTMLAnchorElement"},
kO:{"^":"N;",
l:function(a){return String(a)},
"%":"HTMLAreaElement"},
cY:{"^":"N;",$iscY:1,"%":"HTMLBaseElement"},
fw:{"^":"j;","%":";Blob"},
bP:{"^":"N;",$isbP:1,"%":"HTMLBodyElement"},
ch:{"^":"N;0n:height=,0m:width=",
ca:function(a,b,c){var z=this.cY(a,b,P.kh(c,null))
return z},
cY:function(a,b,c){return a.getContext(b,c)},
$isch:1,
"%":"HTMLCanvasElement"},
kT:{"^":"j;",
am:function(a){return P.a2(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kU:{"^":"v;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fG:{"^":"ci;",$isfG:1,"%":"CSSNumericValue|CSSUnitValue"},
l_:{"^":"fJ;0k:length=","%":"CSSPerspective"},
ar:{"^":"j;",$isar:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fH:{"^":"iK;0k:length=",
aL:function(a,b){var z=this.cZ(a,this.aq(a,b))
return z==null?"":z},
aq:function(a,b){var z,y
z=$.eu()
y=z[b]
if(typeof y==="string")return y
y=this.da(a,b)
z[b]=y
return y},
da:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fP()+b
if(z in a)return z
return b},
cZ:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fI:{"^":"c;",
gn:function(a){return this.aL(a,"height")},
gm:function(a){return this.aL(a,"width")}},
ci:{"^":"j;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fJ:{"^":"j;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
l1:{"^":"ci;0k:length=","%":"CSSTransformValue"},
l2:{"^":"ci;0k:length=","%":"CSSUnparsedValue"},
l4:{"^":"j;0k:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
cj:{"^":"N;",$iscj:1,"%":"HTMLDivElement"},
fQ:{"^":"v;",
de:function(a,b){return a.adoptNode(b)},
cb:function(a,b){return a.getElementById(b)},
bP:function(a,b){return a.querySelector(b)},
gbL:function(a){return new W.bB(a,"mousedown",!1,[W.X])},
gbM:function(a){return new W.bB(a,"mousemove",!1,[W.X])},
gbN:function(a){return new W.bB(a,"mouseup",!1,[W.X])},
gbO:function(a){return new W.bB(a,H.u(W.db(a)),!1,[W.aN])},
"%":"XMLDocument;Document"},
l5:{"^":"j;",
l:function(a){return String(a)},
"%":"DOMException"},
fR:{"^":"j;",
du:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
l6:{"^":"iO;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.x(c,"$isY",[P.E],"$asY")
throw H.e(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[[P.Y,P.E]]},
$isy:1,
$asy:function(){return[[P.Y,P.E]]},
$asp:function(){return[[P.Y,P.E]]},
$isl:1,
$asl:function(){return[[P.Y,P.E]]},
$isa:1,
$asa:function(){return[[P.Y,P.E]]},
$ast:function(){return[[P.Y,P.E]]},
"%":"ClientRectList|DOMRectList"},
fS:{"^":"j;",
l:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gm(a))+" x "+H.f(this.gn(a))},
F:function(a,b){var z
if(b==null)return!1
if(!H.aR(b,"$isY",[P.E],"$asY"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.m(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gB:function(a){return W.dP(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isY:1,
$asY:function(){return[P.E]},
"%":";DOMRectReadOnly"},
l7:{"^":"iQ;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(c)
throw H.e(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[P.d]},
$isy:1,
$asy:function(){return[P.d]},
$asp:function(){return[P.d]},
$isl:1,
$asl:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$ast:function(){return[P.d]},
"%":"DOMStringList"},
l8:{"^":"j;0k:length=","%":"DOMTokenList"},
U:{"^":"v;0dN:tagName=",
gdh:function(a){return new W.iR(a)},
l:function(a){return a.localName},
P:["ao",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.da
if(z==null){z=H.i([],[W.ad])
y=new W.dp(z)
C.a.j(z,W.dN(null))
C.a.j(z,W.dY())
$.da=y
d=y}else d=z
z=$.d9
if(z==null){z=new W.e0(d)
$.d9=z
c=z}else{z.a=d
c=z}}if($.ah==null){z=document
y=z.implementation
y=(y&&C.I).du(y,"")
$.ah=y
$.ck=y.createRange()
y=$.ah
y.toString
y=y.createElement("base")
H.h(y,"$iscY")
y.href=z.baseURI
z=$.ah.head;(z&&C.J).K(z,y)}z=$.ah
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.h(y,"$isbP")}z=$.ah
if(!!this.$isbP)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ah.body;(z&&C.q).K(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.A(C.T,a.tagName)){z=$.ck;(z&&C.B).cc(z,x)
z=$.ck
w=(z&&C.B).ds(z,b)}else{x.innerHTML=b
w=$.ah.createDocumentFragment()
for(z=J.m(w);y=x.firstChild,y!=null;)z.K(w,y)}z=$.ah.body
if(x==null?z!=null:x!==z)J.cR(x)
c.aQ(w)
C.n.de(document,w)
return w},function(a,b,c){return this.P(a,b,c,null)},"dt",null,null,"gdU",5,5,null],
cd:function(a,b,c,d){a.textContent=null
this.K(a,this.P(a,b,c,d))},
aR:function(a,b){return this.cd(a,b,null,null)},
a2:function(a,b){return a.getAttribute(b)},
d2:function(a,b){return a.removeAttribute(b)},
gbL:function(a){return new W.bX(a,"mousedown",!1,[W.X])},
gbM:function(a){return new W.bX(a,"mousemove",!1,[W.X])},
gbN:function(a){return new W.bX(a,"mouseup",!1,[W.X])},
gbO:function(a){return new W.bX(a,H.u(W.db(a)),!1,[W.aN])},
$isU:1,
"%":";Element"},
fW:{"^":"o:18;",
$1:function(a){return!!J.B(H.h(a,"$isv")).$isU}},
la:{"^":"N;0n:height=,0m:width=","%":"HTMLEmbedElement"},
a4:{"^":"j;",$isa4:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
O:{"^":"j;",
dd:function(a,b,c,d){H.n(c,{func:1,args:[W.a4]})
if(c!=null)this.cS(a,b,c,!1)},
cS:function(a,b,c,d){return a.addEventListener(b,H.be(H.n(c,{func:1,args:[W.a4]}),1),!1)},
$isO:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dV|dW|dZ|e_"},
as:{"^":"fw;",$isas:1,"%":"File"},
lr:{"^":"iX;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isas")
throw H.e(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.as]},
$isy:1,
$asy:function(){return[W.as]},
$asp:function(){return[W.as]},
$isl:1,
$asl:function(){return[W.as]},
$isa:1,
$asa:function(){return[W.as]},
$ast:function(){return[W.as]},
"%":"FileList"},
ls:{"^":"O;0k:length=","%":"FileWriter"},
lv:{"^":"N;0k:length=","%":"HTMLFormElement"},
at:{"^":"j;",$isat:1,"%":"Gamepad"},
h3:{"^":"N;","%":"HTMLHeadElement"},
lw:{"^":"j;0k:length=","%":"History"},
lx:{"^":"ja;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isv")
throw H.e(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.v]},
$isy:1,
$asy:function(){return[W.v]},
$asp:function(){return[W.v]},
$isl:1,
$asl:function(){return[W.v]},
$isa:1,
$asa:function(){return[W.v]},
$ast:function(){return[W.v]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
h4:{"^":"fQ;","%":"HTMLDocument"},
ly:{"^":"N;0n:height=,0m:width=","%":"HTMLIFrameElement"},
lB:{"^":"j;0n:height=,0m:width=","%":"ImageBitmap"},
lC:{"^":"j;0n:height=,0m:width=","%":"ImageData"},
lD:{"^":"N;0n:height=,0m:width=","%":"HTMLImageElement"},
lF:{"^":"N;0n:height=,0m:width=","%":"HTMLInputElement"},
b_:{"^":"dF;",$isb_:1,"%":"KeyboardEvent"},
hl:{"^":"j;",
l:function(a){return String(a)},
$ishl:1,
"%":"Location"},
hp:{"^":"N;","%":"HTMLAudioElement;HTMLMediaElement"},
lM:{"^":"j;0k:length=","%":"MediaList"},
lN:{"^":"jh;",
h:function(a,b){return P.a2(a.get(H.u(b)))},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gJ:function(a){var z=H.i([],[P.d])
this.H(a,new W.hr(z))
return z},
gk:function(a){return a.size},
$asW:function(){return[P.d,null]},
$isM:1,
$asM:function(){return[P.d,null]},
"%":"MIDIInputMap"},
hr:{"^":"o:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
lO:{"^":"ji;",
h:function(a,b){return P.a2(a.get(H.u(b)))},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gJ:function(a){var z=H.i([],[P.d])
this.H(a,new W.hs(z))
return z},
gk:function(a){return a.size},
$asW:function(){return[P.d,null]},
$isM:1,
$asM:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
hs:{"^":"o:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
av:{"^":"j;",$isav:1,"%":"MimeType"},
lP:{"^":"jk;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isav")
throw H.e(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.av]},
$isy:1,
$asy:function(){return[W.av]},
$asp:function(){return[W.av]},
$isl:1,
$asl:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$ast:function(){return[W.av]},
"%":"MimeTypeArray"},
X:{"^":"dF;",
gbK:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.b4(a.offsetX,a.offsetY,[P.E])
else{z=a.target
if(!J.B(W.e1(z)).$isU)throw H.e(P.z("offsetX is only supported on elements"))
y=H.h(W.e1(z),"$isU")
z=a.clientX
x=a.clientY
w=[P.E]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.x(new P.b4(u,v,w),"$isb4",w,"$asb4")
if(typeof z!=="number")return z.an()
if(typeof x!=="number")return x.an()
return new P.b4(C.r.bV(z-u),C.r.bV(x-v),w)}},
$isX:1,
"%":";DragEvent|MouseEvent"},
a8:{"^":"hk;a",
gaa:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.e(P.ct("No elements"))
if(y>1)throw H.e(P.ct("More than one element"))
return z.firstChild},
I:function(a,b){var z,y,x,w,v
H.x(b,"$isl",[W.v],"$asl")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.m(y),v=0;v<x;++v)w.K(y,z.firstChild)
return},
i:function(a,b,c){var z,y
H.h(c,"$isv")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.k(y,b)
J.eO(z,c,y[b])},
gD:function(a){var z=this.a.childNodes
return new W.dd(z,z.length,-1,[H.bi(C.V,z,"t",0)])},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.k(z,b)
return z[b]},
$asp:function(){return[W.v]},
$asl:function(){return[W.v]},
$asa:function(){return[W.v]}},
v:{"^":"O;0dI:previousSibling=",
dJ:function(a){var z=a.parentNode
if(z!=null)J.bK(z,a)},
l:function(a){var z=a.nodeValue
return z==null?this.ck(a):z},
K:function(a,b){return a.appendChild(b)},
d3:function(a,b){return a.removeChild(b)},
d4:function(a,b,c){return a.replaceChild(b,c)},
$isv:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hC:{"^":"jm;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isv")
throw H.e(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.v]},
$isy:1,
$asy:function(){return[W.v]},
$asp:function(){return[W.v]},
$isl:1,
$asl:function(){return[W.v]},
$isa:1,
$asa:function(){return[W.v]},
$ast:function(){return[W.v]},
"%":"NodeList|RadioNodeList"},
lY:{"^":"N;0n:height=,0m:width=","%":"HTMLObjectElement"},
m_:{"^":"O;0n:height=,0m:width=","%":"OffscreenCanvas"},
m0:{"^":"j;0n:height=,0m:width=","%":"PaintSize"},
ax:{"^":"j;0k:length=",$isax:1,"%":"Plugin"},
m2:{"^":"jq;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isax")
throw H.e(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ax]},
$isy:1,
$asy:function(){return[W.ax]},
$asp:function(){return[W.ax]},
$isl:1,
$asl:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$ast:function(){return[W.ax]},
"%":"PluginArray"},
m4:{"^":"X;0n:height=,0m:width=","%":"PointerEvent"},
hV:{"^":"j;",
ds:function(a,b){return a.createContextualFragment(b)},
cc:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
m9:{"^":"jw;",
h:function(a,b){return P.a2(a.get(H.u(b)))},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gJ:function(a){var z=H.i([],[P.d])
this.H(a,new W.i0(z))
return z},
gk:function(a){return a.size},
$asW:function(){return[P.d,null]},
$isM:1,
$asM:function(){return[P.d,null]},
"%":"RTCStatsReport"},
i0:{"^":"o:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
ma:{"^":"j;0n:height=,0m:width=","%":"Screen"},
mb:{"^":"N;0k:length=","%":"HTMLSelectElement"},
ay:{"^":"O;",$isay:1,"%":"SourceBuffer"},
me:{"^":"dW;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isay")
throw H.e(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ay]},
$isy:1,
$asy:function(){return[W.ay]},
$asp:function(){return[W.ay]},
$isl:1,
$asl:function(){return[W.ay]},
$isa:1,
$asa:function(){return[W.ay]},
$ast:function(){return[W.ay]},
"%":"SourceBufferList"},
az:{"^":"j;",$isaz:1,"%":"SpeechGrammar"},
mf:{"^":"jC;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaz")
throw H.e(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.az]},
$isy:1,
$asy:function(){return[W.az]},
$asp:function(){return[W.az]},
$isl:1,
$asl:function(){return[W.az]},
$isa:1,
$asa:function(){return[W.az]},
$ast:function(){return[W.az]},
"%":"SpeechGrammarList"},
aA:{"^":"j;0k:length=",$isaA:1,"%":"SpeechRecognitionResult"},
mi:{"^":"jF;",
h:function(a,b){return this.bd(a,H.u(b))},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.d0(a,z)
if(y==null)return
b.$2(y,this.bd(a,y))}},
gJ:function(a){var z=H.i([],[P.d])
this.H(a,new W.ig(z))
return z},
gk:function(a){return a.length},
bd:function(a,b){return a.getItem(b)},
d0:function(a,b){return a.key(b)},
$asW:function(){return[P.d,P.d]},
$isM:1,
$asM:function(){return[P.d,P.d]},
"%":"Storage"},
ig:{"^":"o:19;a",
$2:function(a,b){return C.a.j(this.a,a)}},
aB:{"^":"j;",$isaB:1,"%":"CSSStyleSheet|StyleSheet"},
il:{"^":"N;",
P:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ao(a,b,c,d)
z=W.fV("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a8(y).I(0,new W.a8(z))
return y},
"%":"HTMLTableElement"},
ml:{"^":"N;",
P:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ao(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.P(z.createElement("table"),b,c,d)
z.toString
z=new W.a8(z)
x=z.gaa(z)
x.toString
z=new W.a8(x)
w=z.gaa(z)
y.toString
w.toString
new W.a8(y).I(0,new W.a8(w))
return y},
"%":"HTMLTableRowElement"},
mm:{"^":"N;",
P:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ao(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.P(z.createElement("table"),b,c,d)
z.toString
z=new W.a8(z)
x=z.gaa(z)
y.toString
x.toString
new W.a8(y).I(0,new W.a8(x))
return y},
"%":"HTMLTableSectionElement"},
dA:{"^":"N;",$isdA:1,"%":"HTMLTemplateElement"},
mn:{"^":"j;0m:width=","%":"TextMetrics"},
aC:{"^":"O;",$isaC:1,"%":"TextTrack"},
aD:{"^":"O;",$isaD:1,"%":"TextTrackCue|VTTCue"},
mo:{"^":"jN;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaD")
throw H.e(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aD]},
$isy:1,
$asy:function(){return[W.aD]},
$asp:function(){return[W.aD]},
$isl:1,
$asl:function(){return[W.aD]},
$isa:1,
$asa:function(){return[W.aD]},
$ast:function(){return[W.aD]},
"%":"TextTrackCueList"},
mp:{"^":"e_;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaC")
throw H.e(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aC]},
$isy:1,
$asy:function(){return[W.aC]},
$asp:function(){return[W.aC]},
$isl:1,
$asl:function(){return[W.aC]},
$isa:1,
$asa:function(){return[W.aC]},
$ast:function(){return[W.aC]},
"%":"TextTrackList"},
mq:{"^":"j;0k:length=","%":"TimeRanges"},
aE:{"^":"j;",$isaE:1,"%":"Touch"},
mr:{"^":"jS;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaE")
throw H.e(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aE]},
$isy:1,
$asy:function(){return[W.aE]},
$asp:function(){return[W.aE]},
$isl:1,
$asl:function(){return[W.aE]},
$isa:1,
$asa:function(){return[W.aE]},
$ast:function(){return[W.aE]},
"%":"TouchList"},
ms:{"^":"j;0k:length=","%":"TrackDefaultList"},
dF:{"^":"a4;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mG:{"^":"j;",
l:function(a){return String(a)},
"%":"URL"},
mI:{"^":"hp;0n:height=,0m:width=","%":"HTMLVideoElement"},
mJ:{"^":"O;0k:length=","%":"VideoTrackList"},
mK:{"^":"O;0n:height=,0m:width=","%":"VisualViewport"},
mL:{"^":"j;0m:width=","%":"VTTRegion"},
aN:{"^":"X;",
gdw:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.z("deltaY is not supported"))},
$isaN:1,
"%":"WheelEvent"},
iz:{"^":"O;",
gdg:function(a){var z,y,x
z=P.E
y=new P.af(0,$.J,[z])
x=H.n(new W.iA(new P.jJ(y,[z])),{func:1,ret:-1,args:[P.E]})
this.cX(a)
this.d5(a,W.e7(x,z))
return y},
d5:function(a,b){return a.requestAnimationFrame(H.be(H.n(b,{func:1,ret:-1,args:[P.E]}),1))},
cX:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdI:1,
"%":"DOMWindow|Window"},
iA:{"^":"o:20;a",
$1:function(a){var z=this.a
a=H.c4(H.cF(a),{futureOr:1,type:H.q(z,0)})
z=z.a
if(z.a!==0)H.a_(P.ct("Future already completed"))
z.as(a)}},
dK:{"^":"v;",$isdK:1,"%":"Attr"},
mR:{"^":"jY;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isar")
throw H.e(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ar]},
$isy:1,
$asy:function(){return[W.ar]},
$asp:function(){return[W.ar]},
$isl:1,
$asl:function(){return[W.ar]},
$isa:1,
$asa:function(){return[W.ar]},
$ast:function(){return[W.ar]},
"%":"CSSRuleList"},
mT:{"^":"fS;",
l:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
F:function(a,b){var z
if(b==null)return!1
if(!H.aR(b,"$isY",[P.E],"$asY"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.m(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gB:function(a){return W.dP(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mU:{"^":"k_;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isat")
throw H.e(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.at]},
$isy:1,
$asy:function(){return[W.at]},
$asp:function(){return[W.at]},
$isl:1,
$asl:function(){return[W.at]},
$isa:1,
$asa:function(){return[W.at]},
$ast:function(){return[W.at]},
"%":"GamepadList"},
mZ:{"^":"k1;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isv")
throw H.e(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.v]},
$isy:1,
$asy:function(){return[W.v]},
$asp:function(){return[W.v]},
$isl:1,
$asl:function(){return[W.v]},
$isa:1,
$asa:function(){return[W.v]},
$ast:function(){return[W.v]},
"%":"MozNamedAttrMap|NamedNodeMap"},
n_:{"^":"k3;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaA")
throw H.e(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aA]},
$isy:1,
$asy:function(){return[W.aA]},
$asp:function(){return[W.aA]},
$isl:1,
$asl:function(){return[W.aA]},
$isa:1,
$asa:function(){return[W.aA]},
$ast:function(){return[W.aA]},
"%":"SpeechRecognitionResultList"},
n0:{"^":"k5;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaB")
throw H.e(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aB]},
$isy:1,
$asy:function(){return[W.aB]},
$asp:function(){return[W.aB]},
$isl:1,
$asl:function(){return[W.aB]},
$isa:1,
$asa:function(){return[W.aB]},
$ast:function(){return[W.aB]},
"%":"StyleSheetList"},
iH:{"^":"dl;cW:a<",
H:function(a,b){var z,y,x,w,v,u
H.n(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gJ(this),y=z.length,x=this.a,w=J.m(x),v=0;v<z.length;z.length===y||(0,H.K)(z),++v){u=z[v]
b.$2(u,w.a2(x,u))}},
gJ:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.i([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.k(z,w)
v=H.h(z[w],"$isdK")
if(v.namespaceURI==null)C.a.j(y,v.name)}return y},
$asW:function(){return[P.d,P.d]},
$asM:function(){return[P.d,P.d]}},
iR:{"^":"iH;a",
h:function(a,b){return J.cd(this.a,H.u(b))},
gk:function(a){return this.gJ(this).length}},
bB:{"^":"ih;a,b,c,$ti"},
bX:{"^":"bB;a,b,c,$ti"},
iT:{"^":"ii;a,b,c,d,e,$ti",q:{
aF:function(a,b,c,d,e){var z=W.e7(new W.iU(c),W.a4)
if(z!=null&&!0)J.eP(a,b,z,!1)
return new W.iT(0,a,b,z,!1,[e])}}},
iU:{"^":"o:21;a",
$1:function(a){return this.a.$1(H.h(a,"$isa4"))}},
bC:{"^":"c;a",
cO:function(a){var z,y
z=$.cJ()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.S[y],W.kq())
for(y=0;y<12;++y)z.i(0,C.u[y],W.kr())}},
a0:function(a){return $.eK().A(0,W.aX(a))},
W:function(a,b,c){var z,y,x
z=W.aX(a)
y=$.cJ()
x=y.h(0,H.f(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.c2(x.$4(a,b,c,this))},
$isad:1,
q:{
dN:function(a){var z,y
z=document.createElement("a")
y=new W.jx(z,window.location)
y=new W.bC(y)
y.cO(a)
return y},
mX:[function(a,b,c,d){H.h(a,"$isU")
H.u(b)
H.u(c)
H.h(d,"$isbC")
return!0},"$4","kq",16,0,12],
mY:[function(a,b,c,d){var z,y,x
H.h(a,"$isU")
H.u(b)
H.u(c)
z=H.h(d,"$isbC").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kr",16,0,12]}},
t:{"^":"c;$ti",
gD:function(a){return new W.dd(a,this.gk(a),-1,[H.bi(this,a,"t",0)])}},
dp:{"^":"c;a",
a0:function(a){return C.a.bl(this.a,new W.hE(a))},
W:function(a,b,c){return C.a.bl(this.a,new W.hD(a,b,c))},
$isad:1},
hE:{"^":"o:9;a",
$1:function(a){return H.h(a,"$isad").a0(this.a)}},
hD:{"^":"o:9;a,b,c",
$1:function(a){return H.h(a,"$isad").W(this.a,this.b,this.c)}},
jy:{"^":"c;",
cP:function(a,b,c,d){var z,y,x
this.a.I(0,c)
z=b.aH(0,new W.jz())
y=b.aH(0,new W.jA())
this.b.I(0,z)
x=this.c
x.I(0,C.U)
x.I(0,y)},
a0:function(a){return this.a.A(0,W.aX(a))},
W:["cn",function(a,b,c){var z,y
z=W.aX(a)
y=this.c
if(y.A(0,H.f(z)+"::"+b))return this.d.df(c)
else if(y.A(0,"*::"+b))return this.d.df(c)
else{y=this.b
if(y.A(0,H.f(z)+"::"+b))return!0
else if(y.A(0,"*::"+b))return!0
else if(y.A(0,H.f(z)+"::*"))return!0
else if(y.A(0,"*::*"))return!0}return!1}],
$isad:1},
jz:{"^":"o:10;",
$1:function(a){return!C.a.A(C.u,H.u(a))}},
jA:{"^":"o:10;",
$1:function(a){return C.a.A(C.u,H.u(a))}},
jK:{"^":"jy;e,a,b,c,d",
W:function(a,b,c){if(this.cn(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cd(a,"template")==="")return this.e.A(0,b)
return!1},
q:{
dY:function(){var z,y,x,w,v
z=P.d
y=P.cq(C.t,z)
x=H.q(C.t,0)
w=H.n(new W.jL(),{func:1,ret:z,args:[x]})
v=H.i(["TEMPLATE"],[z])
y=new W.jK(y,P.a5(null,null,null,z),P.a5(null,null,null,z),P.a5(null,null,null,z),null)
y.cP(null,new H.hn(C.t,w,[x,z]),v,null)
return y}}},
jL:{"^":"o:22;",
$1:function(a){return"TEMPLATE::"+H.f(H.u(a))}},
jI:{"^":"c;",
a0:function(a){var z=J.B(a)
if(!!z.$isdu)return!1
z=!!z.$isH
if(z&&W.aX(a)==="foreignObject")return!1
if(z)return!0
return!1},
W:function(a,b,c){if(b==="is"||C.i.cf(b,"on"))return!1
return this.a0(a)},
$isad:1},
dd:{"^":"c;a,b,c,0d,$ti",
sbb:function(a){this.d=H.A(a,H.q(this,0))},
u:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbb(J.bl(this.a,z))
this.c=z
return!0}this.sbb(null)
this.c=y
return!1},
gE:function(a){return this.d},
$isaZ:1},
iL:{"^":"c;a",$isO:1,$isdI:1,q:{
iM:function(a){if(a===window)return H.h(a,"$isdI")
else return new W.iL(a)}}},
ad:{"^":"c;"},
jx:{"^":"c;a,b",$ismF:1},
e0:{"^":"c;a",
aQ:function(a){new W.jV(this).$2(a,null)},
a4:function(a,b){if(b==null)J.cR(a)
else J.bK(b,a)},
d8:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.f7(a)
x=J.cd(y.gcW(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a9(t)}v="element unprintable"
try{v=J.bo(a)}catch(t){H.a9(t)}try{u=W.aX(a)
this.d7(H.h(a,"$isU"),b,z,v,u,H.h(y,"$isM"),H.u(x))}catch(t){if(H.a9(t) instanceof P.aJ)throw t
else{this.a4(a,b)
window
s="Removing corrupted element "+H.f(v)
if(typeof console!="undefined")window.console.warn(s)}}},
d7:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a4(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a0(a)){this.a4(a,b)
window
z="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.W(a,"is",g)){this.a4(a,b)
window
z="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gJ(f)
y=H.i(z.slice(0),[H.q(z,0)])
for(x=f.gJ(f).length-1,z=f.a,w=J.m(z);x>=0;--x){if(x>=y.length)return H.k(y,x)
v=y[x]
if(!this.a.W(a,J.fi(v),w.a2(z,v))){window
u="Removing disallowed attribute <"+H.f(e)+" "+v+'="'+H.f(w.a2(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.a2(z,v)
w.d2(z,v)}}if(!!J.B(a).$isdA)this.aQ(a.content)},
$islW:1},
jV:{"^":"o:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.d8(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a4(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.f8(z)}catch(w){H.a9(w)
v=H.h(z,"$isv")
if(x){u=v.parentNode
if(u!=null)J.bK(u,v)}else J.bK(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.h(y,"$isv")}}},
iK:{"^":"j+fI;"},
iN:{"^":"j+p;"},
iO:{"^":"iN+t;"},
iP:{"^":"j+p;"},
iQ:{"^":"iP+t;"},
iW:{"^":"j+p;"},
iX:{"^":"iW+t;"},
j9:{"^":"j+p;"},
ja:{"^":"j9+t;"},
jh:{"^":"j+W;"},
ji:{"^":"j+W;"},
jj:{"^":"j+p;"},
jk:{"^":"jj+t;"},
jl:{"^":"j+p;"},
jm:{"^":"jl+t;"},
jp:{"^":"j+p;"},
jq:{"^":"jp+t;"},
jw:{"^":"j+W;"},
dV:{"^":"O+p;"},
dW:{"^":"dV+t;"},
jB:{"^":"j+p;"},
jC:{"^":"jB+t;"},
jF:{"^":"j+W;"},
jM:{"^":"j+p;"},
jN:{"^":"jM+t;"},
dZ:{"^":"O+p;"},
e_:{"^":"dZ+t;"},
jR:{"^":"j+p;"},
jS:{"^":"jR+t;"},
jX:{"^":"j+p;"},
jY:{"^":"jX+t;"},
jZ:{"^":"j+p;"},
k_:{"^":"jZ+t;"},
k0:{"^":"j+p;"},
k1:{"^":"k0+t;"},
k2:{"^":"j+p;"},
k3:{"^":"k2+t;"},
k4:{"^":"j+p;"},
k5:{"^":"k4+t;"}}],["","",,P,{"^":"",
a2:function(a){var z,y,x,w,v
if(a==null)return
z=P.S(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.K)(y),++w){v=H.u(y[w])
z.i(0,v,a[v])}return z},
kh:function(a,b){var z={}
a.H(0,new P.ki(z))
return z},
d6:function(){var z=$.d5
if(z==null){z=J.ca(window.navigator.userAgent,"Opera",0)
$.d5=z}return z},
fP:function(){var z,y
z=$.d2
if(z!=null)return z
y=$.d3
if(y==null){y=J.ca(window.navigator.userAgent,"Firefox",0)
$.d3=y}if(y)z="-moz-"
else{y=$.d4
if(y==null){y=!P.d6()&&J.ca(window.navigator.userAgent,"Trident/",0)
$.d4=y}if(y)z="-ms-"
else z=P.d6()?"-o-":"-webkit-"}$.d2=z
return z},
ki:{"^":"o:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
kJ:function(a){return Math.sqrt(a)},
dO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
b4:{"^":"c;U:a>,R:b>,$ti",
l:function(a){return"Point("+H.f(this.a)+", "+H.f(this.b)+")"},
F:function(a,b){if(b==null)return!1
return H.aR(b,"$isb4",[P.E],null)&&this.a==J.bO(b)&&this.b==b.gR(b)},
gB:function(a){var z,y,x
z=J.aq(this.a)
y=J.aq(this.b)
y=P.dO(P.dO(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
jr:{"^":"c;"},
Y:{"^":"jr;$ti"}}],["","",,P,{"^":"",fs:{"^":"j;",$isfs:1,"%":"SVGAnimatedLength"},lb:{"^":"H;0n:height=,0m:width=","%":"SVGFEBlendElement"},lc:{"^":"H;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},ld:{"^":"H;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},le:{"^":"H;0n:height=,0m:width=","%":"SVGFECompositeElement"},lf:{"^":"H;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},lg:{"^":"H;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},lh:{"^":"H;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},li:{"^":"H;0n:height=,0m:width=","%":"SVGFEFloodElement"},lj:{"^":"H;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},lk:{"^":"H;0n:height=,0m:width=","%":"SVGFEImageElement"},ll:{"^":"H;0n:height=,0m:width=","%":"SVGFEMergeElement"},lm:{"^":"H;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},ln:{"^":"H;0n:height=,0m:width=","%":"SVGFEOffsetElement"},lo:{"^":"H;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},lp:{"^":"H;0n:height=,0m:width=","%":"SVGFETileElement"},lq:{"^":"H;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},lt:{"^":"H;0n:height=,0m:width=","%":"SVGFilterElement"},lu:{"^":"bu;0n:height=,0m:width=","%":"SVGForeignObjectElement"},h2:{"^":"bu;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bu:{"^":"H;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},lE:{"^":"bu;0n:height=,0m:width=","%":"SVGImageElement"},b0:{"^":"j;",$isb0:1,"%":"SVGLength"},lK:{"^":"jc;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return this.V(a,b)},
i:function(a,b,c){H.h(c,"$isb0")
throw H.e(P.z("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b0]},
$isl:1,
$asl:function(){return[P.b0]},
$isa:1,
$asa:function(){return[P.b0]},
$ast:function(){return[P.b0]},
"%":"SVGLengthList"},lL:{"^":"H;0n:height=,0m:width=","%":"SVGMaskElement"},b3:{"^":"j;",$isb3:1,"%":"SVGNumber"},lX:{"^":"jo;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return this.V(a,b)},
i:function(a,b,c){H.h(c,"$isb3")
throw H.e(P.z("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b3]},
$isl:1,
$asl:function(){return[P.b3]},
$isa:1,
$asa:function(){return[P.b3]},
$ast:function(){return[P.b3]},
"%":"SVGNumberList"},m1:{"^":"H;0n:height=,0m:width=","%":"SVGPatternElement"},m3:{"^":"j;0k:length=","%":"SVGPointList"},m5:{"^":"j;0n:height=,0m:width=","%":"SVGRect"},m6:{"^":"h2;0n:height=,0m:width=","%":"SVGRectElement"},du:{"^":"H;",$isdu:1,"%":"SVGScriptElement"},mj:{"^":"jH;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return this.V(a,b)},
i:function(a,b,c){H.u(c)
throw H.e(P.z("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$asp:function(){return[P.d]},
$isl:1,
$asl:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$ast:function(){return[P.d]},
"%":"SVGStringList"},H:{"^":"U;",
P:function(a,b,c,d){var z,y,x,w,v,u
z=H.i([],[W.ad])
C.a.j(z,W.dN(null))
C.a.j(z,W.dY())
C.a.j(z,new W.jI())
c=new W.e0(new W.dp(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.q).dt(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a8(w)
u=z.gaa(z)
for(z=J.m(v);x=u.firstChild,x!=null;)z.K(v,x)
return v},
$isH:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mk:{"^":"bu;0n:height=,0m:width=","%":"SVGSVGElement"},b7:{"^":"j;",$isb7:1,"%":"SVGTransform"},mt:{"^":"jU;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return this.V(a,b)},
i:function(a,b,c){H.h(c,"$isb7")
throw H.e(P.z("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b7]},
$isl:1,
$asl:function(){return[P.b7]},
$isa:1,
$asa:function(){return[P.b7]},
$ast:function(){return[P.b7]},
"%":"SVGTransformList"},mH:{"^":"bu;0n:height=,0m:width=","%":"SVGUseElement"},jb:{"^":"j+p;"},jc:{"^":"jb+t;"},jn:{"^":"j+p;"},jo:{"^":"jn+t;"},jG:{"^":"j+p;"},jH:{"^":"jG+t;"},jT:{"^":"j+p;"},jU:{"^":"jT+t;"}}],["","",,P,{"^":"",aj:{"^":"c;",$isl:1,
$asl:function(){return[P.a3]},
$isa:1,
$asa:function(){return[P.a3]},
$isis:1}}],["","",,P,{"^":"",kP:{"^":"j;0k:length=","%":"AudioBuffer"},kQ:{"^":"iI;",
h:function(a,b){return P.a2(a.get(H.u(b)))},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gJ:function(a){var z=H.i([],[P.d])
this.H(a,new P.fu(z))
return z},
gk:function(a){return a.size},
$asW:function(){return[P.d,null]},
$isM:1,
$asM:function(){return[P.d,null]},
"%":"AudioParamMap"},fu:{"^":"o:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},kR:{"^":"O;0k:length=","%":"AudioTrackList"},fv:{"^":"O;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lZ:{"^":"fv;0k:length=","%":"OfflineAudioContext"},iI:{"^":"j+W;"}}],["","",,P,{"^":"",fx:{"^":"j;",$isfx:1,"%":"WebGLBuffer"},h1:{"^":"j;",$ish1:1,"%":"WebGLFramebuffer"},hU:{"^":"j;",$ishU:1,"%":"WebGLProgram"},m7:{"^":"j;",
bk:function(a,b){return a.activeTexture(b)},
bm:function(a,b,c){return a.attachShader(b,c)},
bn:function(a,b,c){return a.bindBuffer(b,c)},
bp:function(a,b,c){return a.bindFramebuffer(b,c)},
bq:function(a,b,c){return a.bindTexture(b,c)},
br:function(a,b){return a.blendEquation(b)},
bs:function(a,b,c){return a.blendFunc(b,c)},
bt:function(a,b,c,d){return a.bufferData(b,c,d)},
bu:function(a,b){return a.clear(b)},
bv:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bw:function(a,b){return a.compileShader(b)},
bx:function(a){return a.createBuffer()},
by:function(a){return a.createProgram()},
bz:function(a,b){return a.createShader(b)},
bB:function(a,b){return a.depthMask(b)},
bC:function(a,b){return a.disable(b)},
bD:function(a,b,c,d){return a.drawArrays(b,c,d)},
bE:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bF:function(a,b){return a.enable(b)},
bG:function(a,b){return a.enableVertexAttribArray(b)},
am:function(a){return P.a2(a.getContextAttributes())},
aI:function(a,b){return a.getExtension(b)},
aJ:function(a,b){return a.getProgramInfoLog(b)},
aK:function(a,b,c){return a.getProgramParameter(b,c)},
aM:function(a,b){return a.getShaderInfoLog(b)},
aN:function(a,b,c){return a.getShaderParameter(b,c)},
aO:function(a,b,c){return a.getUniformLocation(b,c)},
bI:function(a,b){return a.linkProgram(b)},
aB:function(a,b,c,d,e,f,g,h){return a.readPixels(b,c,d,e,f,g,h)},
aS:function(a,b,c){return a.shaderSource(b,c)},
aU:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bW:function(a,b,c){return a.uniform1f(b,c)},
bX:function(a,b,c){return a.uniform1fv(b,c)},
bY:function(a,b,c){return a.uniform1i(b,c)},
bZ:function(a,b,c){return a.uniform1iv(b,c)},
c_:function(a,b,c){return a.uniform2fv(b,c)},
c0:function(a,b,c){return a.uniform3fv(b,c)},
c1:function(a,b,c){return a.uniform4fv(b,c)},
c2:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c3:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c4:function(a,b){return a.useProgram(b)},
c5:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
c7:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
bQ:function(a,b,c,d,e,f,g,h){this.aB(a,b,c,d,e,f,g,h)},
"%":"WebGLRenderingContext"},m8:{"^":"j;",
di:function(a,b){return a.beginTransformFeedback(b)},
dl:function(a,b){return a.bindVertexArray(b)},
dv:function(a){return a.createVertexArray()},
dz:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dA:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dB:function(a){return a.endTransformFeedback()},
dQ:function(a,b,c,d){this.dc(a,b,H.x(c,"$isa",[P.d],"$asa"),d)
return},
dc:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dR:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bk:function(a,b){return a.activeTexture(b)},
bm:function(a,b,c){return a.attachShader(b,c)},
bn:function(a,b,c){return a.bindBuffer(b,c)},
bp:function(a,b,c){return a.bindFramebuffer(b,c)},
bq:function(a,b,c){return a.bindTexture(b,c)},
br:function(a,b){return a.blendEquation(b)},
bs:function(a,b,c){return a.blendFunc(b,c)},
bt:function(a,b,c,d){return a.bufferData(b,c,d)},
bu:function(a,b){return a.clear(b)},
bv:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bw:function(a,b){return a.compileShader(b)},
bx:function(a){return a.createBuffer()},
by:function(a){return a.createProgram()},
bz:function(a,b){return a.createShader(b)},
bB:function(a,b){return a.depthMask(b)},
bC:function(a,b){return a.disable(b)},
bD:function(a,b,c,d){return a.drawArrays(b,c,d)},
bE:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bF:function(a,b){return a.enable(b)},
bG:function(a,b){return a.enableVertexAttribArray(b)},
am:function(a){return P.a2(a.getContextAttributes())},
aI:function(a,b){return a.getExtension(b)},
aJ:function(a,b){return a.getProgramInfoLog(b)},
aK:function(a,b,c){return a.getProgramParameter(b,c)},
aM:function(a,b){return a.getShaderInfoLog(b)},
aN:function(a,b,c){return a.getShaderParameter(b,c)},
aO:function(a,b,c){return a.getUniformLocation(b,c)},
bI:function(a,b){return a.linkProgram(b)},
aB:function(a,b,c,d,e,f,g,h){return a.readPixels(b,c,d,e,f,g,h)},
aS:function(a,b,c){return a.shaderSource(b,c)},
aU:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bW:function(a,b,c){return a.uniform1f(b,c)},
bX:function(a,b,c){return a.uniform1fv(b,c)},
bY:function(a,b,c){return a.uniform1i(b,c)},
bZ:function(a,b,c){return a.uniform1iv(b,c)},
c_:function(a,b,c){return a.uniform2fv(b,c)},
c0:function(a,b,c){return a.uniform3fv(b,c)},
c1:function(a,b,c){return a.uniform4fv(b,c)},
c2:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c3:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c4:function(a,b){return a.useProgram(b)},
c5:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
c7:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
bQ:function(a,b,c,d,e,f,g,h){this.aB(a,b,c,d,e,f,g,h)},
"%":"WebGL2RenderingContext"},i5:{"^":"j;",$isi5:1,"%":"WebGLShader"},io:{"^":"j;",$isio:1,"%":"WebGLTexture"},it:{"^":"j;",$isit:1,"%":"WebGLUniformLocation"},ix:{"^":"j;",$isix:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",mg:{"^":"jE;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return P.a2(this.d_(a,b))},
i:function(a,b,c){H.h(c,"$isM")
throw H.e(P.z("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
d_:function(a,b){return a.item(b)},
$asp:function(){return[[P.M,,,]]},
$isl:1,
$asl:function(){return[[P.M,,,]]},
$isa:1,
$asa:function(){return[[P.M,,,]]},
$ast:function(){return[[P.M,,,]]},
"%":"SQLResultSetRowList"},jD:{"^":"j+p;"},jE:{"^":"jD+t;"}}],["","",,G,{"^":"",
iB:function(a){var z,y,x,w
z=H.i(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.k(z,y)
C.a.i(z,y,w+H.f(z[y]))}return C.a.a8(z,"\n")},
dL:function(a,b,c){var z,y,x,w
z=J.m(a)
y=z.bz(a,b)
z.aS(a,y,c)
z.bw(a,y)
x=H.c2(z.aN(a,y,35713))
if(x!=null&&!x){w=z.aM(a,y)
P.ao("E:Compilation failed:")
P.ao("E:"+G.iB(c))
P.ao("E:Failure:")
P.ao(C.i.L("E:",w))
throw H.e(w)}return y},
hF:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
d.w(b)
d.ab(0,a)
e.w(c)
e.ab(0,a)
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
r=Math.sqrt(e.gal())
if(r===0)return!1
e.T(0,-1/r)
return!0},
de:function(a,b){var z,y,x
H.x(a,"$isa",[T.b],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.f.i(b,z,J.bO(a[y]))
if(y>=a.length)return H.k(a,y)
C.f.i(b,z+1,J.cc(a[y]))
z+=2
if(y>=a.length)return H.k(a,y)
x=J.cP(a[y])
if(z>=b.length)return H.k(b,z)
b[z]=x}return b},
fZ:function(a,b){var z,y
H.x(a,"$isa",[T.r],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.f.i(b,z,J.bO(a[y]))
if(y>=a.length)return H.k(a,y)
C.f.i(b,z+1,J.cc(a[y]))}return b},
h_:function(a,b){var z,y,x,w,v
H.x(a,"$isa",[T.aM],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.f.i(b,z,J.bO(a[y]))
if(y>=a.length)return H.k(a,y)
C.f.i(b,z+1,J.cc(a[y]))
x=z+2
if(y>=a.length)return H.k(a,y)
w=J.cP(a[y])
v=b.length
if(x>=v)return H.k(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.k(a,y)
w=J.fa(a[y])
if(z>=v)return H.k(b,z)
b[z]=w}return b},
fY:function(a,b){var z,y
H.x(a,"$isa",[[P.a,P.D]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.o.i(b,z,J.bl(a[y],0))
if(y>=a.length)return H.k(a,y)
C.o.i(b,z+1,J.bl(a[y],1))
if(y>=a.length)return H.k(a,y)
C.o.i(b,z+2,J.bl(a[y],2))
if(y>=a.length)return H.k(a,y)
C.o.i(b,z+3,J.bl(a[y],3))}return b},
j7:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.ak(z,[H.q(z,0)]),y=y.gD(y),x=b.x,w=[[P.a,P.D]],v=[P.a3],u=[T.aM],t=[T.b],s=[T.r];y.u();){r=y.d
if(!x.aj(0,r)){r="Dropping unnecessary attribute: "+H.f(r)
if($.ed>0)H.c8("I: "+r)
continue}q=z.h(0,r)
switch($.aa().h(0,r).a){case"vec2":b.a3(r,G.fZ(H.bJ(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.a3(r,G.de(H.bJ(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.a3(r,G.h_(H.bJ(q,"$isa",u,"$asa"),null),4)
break
case"float":b.a3(r,new Float32Array(H.bZ(H.bJ(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.a3(r,G.fY(H.bJ(q,"$isa",w,"$asa"),null),4)
break}}},
bt:function(a,b,c){var z,y,x,w,v,u,t,s
z=b.d
y=b.e.x
x=P.d
w=P.S(x,P.c)
v=J.eY(z.a)
u=new G.hq(z,v,4,w,y,0,-1,P.S(x,P.aj),"meshdata:"+a,!1,!0)
x=G.de(c.d,null)
w.i(0,"aPosition",J.bM(z.a))
u.ch=x
u.aX("aPosition",x,3)
t=$.aa().h(0,"aPosition")
if(t==null)H.a_("Unknown canonical aPosition")
s=y.h(0,"aPosition")
J.bL(z.a,v)
z.bH(0,s,0)
z.c6(0,w.h(0,"aPosition"),s,t.aY(),5126,!1,0,0)
y=H.x(c.cz(),"$isa",[P.D],"$asa")
u.y=J.bM(z.a)
x=u.ch.length
if(x<768){u.sav(new Uint8Array(H.bZ(y)))
u.Q=5121}else if(x<196608){u.sav(new Uint16Array(H.bZ(y)))
u.Q=5123}else{u.sav(new Uint32Array(H.bZ(y)))
u.Q=5125}J.bL(z.a,v)
y=u.y
x=u.cx
J.bm(z.a,34963,y)
J.c9(z.a,34963,x,35048)
G.j7(c,u)
return u},
b1:{"^":"c;"},
b8:{"^":"b1;d,a,b,c",
aZ:function(){return this.d},
l:function(a){var z,y,x,w
z=H.i(["{"+new H.dE(H.kn(this)).l(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.ak(y,[H.q(y,0)]),x=x.gD(x);x.u();){w=x.d
C.a.j(z,H.f(w)+": "+H.f(y.h(0,w)))}return C.a.a8(z,"\n")}},
fy:{"^":"dw;"},
fA:{"^":"c;0a,b",
bH:function(a,b,c){J.f4(this.a,b)
if(c>0)J.fo(this.a,b,c)},
c6:function(a,b,c,d,e,f,g,h){J.bm(this.a,34962,b)
J.fp(this.a,c,d,e,!1,g,h)}},
h0:{"^":"c;a,b,c,d,e"},
V:{"^":"c;ah:a>,a5:b>,a6:c>",q:{
L:function(a,b,c){return new G.V(a,b,c)}}},
ai:{"^":"c;ah:a>,a5:b>,a6:c>,d"},
bs:{"^":"c;a,b,c,d,e",
N:function(a){switch($.aa().h(0,a).a){case"vec2":this.e.i(0,a,H.i([],[T.r]))
break
case"vec3":this.e.i(0,a,H.i([],[T.b]))
break
case"vec4":this.e.i(0,a,H.i([],[T.aM]))
break
case"float":this.e.i(0,a,H.i([],[P.a3]))
break
case"uvec4":this.e.i(0,a,H.i([],[[P.a,P.D]]))
break}},
cq:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)C.a.j(y,new G.ai(z,z+1,z+2,z+3))},
aW:function(a){var z,y,x,w,v
H.x(a,"$isa",[T.b],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.K)(a),++x){w=a[x]
v=new T.b(new Float32Array(3))
v.w(w)
C.a.j(y,v)}},
cr:function(a){var z,y,x,w,v
H.x(a,"$isa",[T.b],"$asa")
z=this.d
y=z.length
C.a.j(this.b,new G.V(y,y+1,y+2))
for(x=0;x<3;++x){w=a[x]
v=new T.b(new Float32Array(3))
v.w(w)
C.a.j(z,v)}},
ac:function(a,b){var z,y,x,w,v,u,t
z=[T.r]
H.x(b,"$isa",z,"$asa")
y=H.x(this.e.h(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.K)(b),++w){v=b[w]
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.j(y,new T.r(u))}},
ad:function(a,b){var z,y,x,w,v,u
z=[T.b]
H.x(b,"$isa",z,"$asa")
y=H.x(this.e.h(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.K)(b),++w){v=b[w]
u=new T.b(new Float32Array(3))
u.w(v)
x.j(y,u)}},
cs:function(a){var z,y,x,w,v
H.x(a,"$isa",[T.b],"$asa")
z=this.d
y=z.length
C.a.j(this.c,new G.ai(y,y+1,y+2,y+3))
for(x=0;x<4;++x){w=a[x]
v=new T.b(new Float32Array(3))
v.w(w)
C.a.j(z,v)}},
cz:function(){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.i(x,[P.D])
for(x=z.length,v=0,u=0;u<z.length;z.length===x||(0,H.K)(z),++u){t=z[u]
C.a.i(w,v,t.a)
C.a.i(w,v+1,t.b)
C.a.i(w,v+2,t.c)
v+=3}for(z=y.length,u=0;u<y.length;y.length===z||(0,H.K)(y),++u){s=y[u]
x=s.a
C.a.i(w,v,x)
C.a.i(w,v+1,s.b)
r=s.c
C.a.i(w,v+2,r)
C.a.i(w,v+3,x)
C.a.i(w,v+4,r)
C.a.i(w,v+5,s.d)
v+=6}return w},
cB:function(a,b){var z,y,x,w,v,u,t
z=H.i([],[T.r])
this.e.i(0,"aTexUV",z)
for(y=b-1,x=a-1,w=0;w<b;++w)for(v=w/y,u=0;u<a;++u){t=new Float32Array(2)
t[0]=v
t[1]=u/x
C.a.j(z,new T.r(t))}},
cA:function(a,b,c){var z,y,x,w,v,u,t,s,r
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
C.a.j(z,new G.ai(v+s,r+s,r+t,v+t))
t=s}w=u}},
l:function(a){var z,y,x,w,v
z=H.i(["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"],[P.d])
for(y=this.e,x=new H.ak(y,[H.q(y,0)]),x=x.gD(x);x.u();){w=x.d
v=$.aa().h(0,w).a
C.a.j(z,H.f(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.a8(z," ")}},
dC:{"^":"c;a,b,c"},
dB:{"^":"c;a,b,c"},
ho:{"^":"b8;d,a,b,c",q:{
bz:function(a){var z=P.S(P.d,P.c)
z.i(0,"cDepthTest",!0)
z.i(0,"cDepthWrite",!0)
z.i(0,"cBlendEquation",$.eo())
z.i(0,"cStencilFunc",$.ey())
return new G.ho(z,a,!1,!0)}}},
hq:{"^":"b1;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sav:function(a){this.cx=H.x(a,"$isa",[P.D],"$asa")},
aX:function(a,b,c){var z,y
C.i.ar(a,0)
H.h(b,"$isaj")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bm(z.a,34962,y)
J.c9(z.a,34962,b,35048)},
cC:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a3:function(a,b,c){var z,y,x,w,v
z=J.cK(a,0)===105
if(z&&this.z===0)this.z=C.d.co(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.bM(x.a))
this.aX(a,b,c)
w=$.aa().h(0,a)
if(w==null)throw H.e("Unknown canonical "+a)
v=this.x.h(0,a)
J.bL(x.a,this.e)
x.bH(0,v,z?1:0)
x.c6(0,y.h(0,a),v,w.aY(),5126,!1,0,0)},
l:function(a){var z,y,x,w
z=this.cx
y=H.i(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=new H.ak(z,[H.q(z,0)]),x=x.gD(x);x.u();){w=x.d
C.a.j(y,H.f(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.a8(y,"  ")}},
hK:{"^":"b8;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
ct:function(a,b){var z
if(typeof a!=="number")return a.dS()
if(typeof b!=="number")return H.am(b)
z=a/b
if(this.z===z)return
this.z=z
this.b0()},
b0:function(){var z,y,x,w,v,u
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
aZ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.b(new Float32Array(3))
u.p(x,w,v)
v=this.d
v.i(0,"uEyePosition",u)
u=this.cy
u.w(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.B(t)
x=!!y.$isaM
q=x?t.gc8(t):1
if(!!y.$isb){p=t.gU(t)
s=t.gR(t)
r=t.ga1(t)
t=p}else if(x){p=t.gU(t)
s=t.gR(t)
r=t.ga1(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.am(t)
x=z[4]
if(typeof s!=="number")return H.am(s)
w=z[8]
if(typeof r!=="number")return H.am(r)
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
c.w(this.db)
c.bJ(0,u)
v.i(0,"uPerspectiveViewMatrix",c)
return v}},
l9:{"^":"c;"},
hZ:{"^":"b1;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cG:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.K)(z),++u){t=z[u]
x.i(0,t,J.cQ(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.K)(z),++u){t=z[u]
x.i(0,t,J.cQ(w.a,v,t))}},
cJ:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.i([],[P.d])
x=H.i([],[P.d])
for(y=new H.ak(y,[H.q(y,0)]),y=y.gD(y);y.u();){w=y.d
if(!z.aj(0,w))C.a.j(x,w)}for(z=this.x,z=P.je(z,z.r,H.q(z,0)),y=this.Q;z.u();){w=z.d
if(!y.A(0,w))C.a.j(x,w)}return x},
cM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.x(b,"$isM",[P.d,P.c],"$asM")
z=Date.now()
for(y=new H.ak(b,[H.q(b,0)]),y=y.gD(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.u();){s=y.d
switch(J.cK(s,0)){case 117:if(w.aj(0,s)){r=b.h(0,s)
if(v.aj(0,s))H.c8("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.i(0,s,a)
q=$.aa().h(0,s)
if(q==null)H.a_("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.P(r)
J.ce(x.a,p,r)}else if(!!J.B(r).$ish7)J.fm(x.a,p,r)
break
case"float":if(q.c===0){H.eb(r)
J.fk(x.a,p,r)}else if(!!J.B(r).$isaj)J.fl(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.an(r,"$isQ").a
J.cW(x.a,p,!1,s)}else if(!!J.B(r).$isaj)J.cW(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=H.an(r,"$isau").a
J.cV(x.a,p,!1,s)}else if(!!J.B(r).$isaj)J.cV(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.cU(o,p,H.an(r,"$isaM").a)
else J.cU(o,p,H.h(r,"$isaj"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cT(o,p,H.an(r,"$isb").a)
else J.cT(o,p,H.h(r,"$isaj"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cS(o,p,H.an(r,"$isr").a)
else J.cS(o,p,H.h(r,"$isaj"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.am(s)
J.cL(x.a,33984+s)
s=H.an(r,"$isim").cD()
J.cN(x.a,3553,s)
s=this.ch
J.ce(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.L()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.am(s)
J.cL(x.a,33984+s)
s=H.an(r,"$isim").cD()
J.cN(x.a,34067,s)
s=this.ch
J.ce(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.L()
this.ch=s+1
break
default:H.c8("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":s=J.ap(r,!0)
o=x.a
if(s)J.bn(o,2929)
else J.cb(o,2929)
break
case"cStencilFunc":H.an(r,"$isdC")
s=r.a
o=x.a
if(s===1281)J.cb(o,2960)
else{J.bn(o,2960)
o=r.b
n=r.c
J.fh(x.a,s,o,n)}break
case"cDepthWrite":H.c2(r)
J.eZ(x.a,r)
break
case"cBlendEquation":H.an(r,"$isdB")
s=r.a
o=x.a
if(s===1281)J.cb(o,3042)
else{J.bn(o,3042)
o=r.b
n=r.c
J.eT(x.a,o,n)
J.eS(x.a,s)}break}++t
break}}m=P.d7(0,0,0,Date.now()-new P.bp(z,!1).a,0,0)
""+t
m.l(0)},
cw:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.x(b,"$isa",[G.b8],"$asa")
Date.now()
z=this.d
J.fn(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b5()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.K)(b),++x){w=b[x]
this.cM(w.a,w.aZ())}y=this.Q
y.a7(0)
for(v=a.cy,v=new H.ak(v,[H.q(v,0)]),v=v.gD(v);v.u();)y.j(0,v.d)
u=this.cJ()
if(u.length!==0)P.ao("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(u)))
J.bL(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.cC()
s=a.Q
r=a.z
if(t)J.eQ(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.f2(q,y,v,s,0,r)
else J.f1(q,y,v,s,0)}else{s=z.a
if(r>1)J.f0(s,y,0,v,r)
else J.f_(s,y,0,v)}if(t)J.f5(z.a)},
q:{
i_:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
y=P.a5(null,null,null,z)
x=c.b
w=d.b
v=H.x(c.f,"$isa",[z],"$asa")
u=J.eX(b.a)
t=G.dL(b.a,35633,x)
J.cM(b.a,u,t)
s=G.dL(b.a,35632,w)
J.cM(b.a,u,s)
if(v.length>0)J.fj(b.a,u,v,35980)
J.ff(b.a,u)
if(!H.c2(J.fe(b.a,u,35714)))H.a_(J.fd(b.a,u))
z=new G.hZ(b,c,d,u,P.cq(c.c,z),P.S(z,P.c),P.S(z,z),y,a,!1,!0)
z.cG(a,b,c,d)
return z}}},
C:{"^":"c;a,b,c",
aY:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
i6:{"^":"c;a,0b,c,d,e,f,r,x",
cp:function(a){var z,y,x,w
H.x(a,"$isa",[P.d],"$asa")
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
C.a.j(z,w)
y.i(0,w,this.r);++this.r}C.a.aT(z)},
aV:function(a){var z,y,x
H.x(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.K)(a),++x)C.a.j(y,a[x])
C.a.aT(y)},
cH:function(a,b){this.b=this.cN(!0,H.x(a,"$isa",[P.d],"$asa"),b)},
b_:function(a){return this.cH(a,null)},
cN:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.x(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.i(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.K)(y),++u){t=y[u]
s=$.aa().h(0,t)
C.a.j(w,"layout (location="+H.f(v.h(0,t))+") in "+s.a+" "+H.f(t)+";")}C.a.j(w,"")
r=x?"in":"out"
if(x)C.a.j(w,"out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.k(z,u)
q=z[u]
s=$.aa().h(0,q)
C.a.j(w,r+" "+s.a+" "+H.f(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.K)(z),++u){q=z[u]
s=$.aa().h(0,q)
C.a.j(w,r+" "+s.a+" "+H.f(q)+";")}C.a.j(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.K)(z),++u){q=z[u]
s=$.aa().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.j(w,"uniform "+s.a+" "+H.f(q)+p+";")}C.a.j(w,"")
C.a.j(w,"void main(void) {")
C.a.I(w,b)
C.a.j(w,"}")
return C.a.a8(w,"\n")},
q:{
dv:function(a){var z,y
z=P.d
y=[z]
return new G.i6(a,H.i([],y),H.i([],y),H.i([],y),H.i([],y),0,P.S(z,P.D))}}},
dw:{"^":"b1;",
Y:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}}}],["","",,R,{"^":"",
jg:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.h(W.iS("span",null),"$isU")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.w).aq(y,"float")
y.setProperty(x,"left","")
x=C.w.aq(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.m.K(z,v)}return z},
id:{"^":"c;",
cI:function(a,b,c){var z,y
z=this.a
if(z==null)throw H.e("no element provided")
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
ie:{"^":"id;e,f,a,b,c,d",
cL:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.x.dP(y,2)+" fps"
C.m.aR(this.c,b)
x=C.d.a_(30*C.x.dm(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.h(z.firstChild,"$isU")
v=w.style
u=""+x+"px"
v.height=u
C.m.K(z,w)},
cK:function(a){return this.cL(a,"")}}}],["","",,A,{"^":"",
ec:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.x(e,"$isa",[G.b8],"$asa")
z=b.dx
z.w(c)
y=b.d
z.bJ(0,y)
x=b.cx
H.f(b)
w=C.a.gdG(e)
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
v.dr(new T.au(u))
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
C.a.j(e,b.ch)
a.cw(x,e,d)
if(0>=e.length)return H.k(e,-1)
e.pop()
for(y=b.cy,r=0;!1;++r){if(r>=0)return H.k(y,r)
A.ec(a,y[r],z,d,e)}},
b2:{"^":"dw;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
l:function(a){return"NODE["+this.a+"]"}},
dt:{"^":"b1;d,e,f,a,b,c"},
hY:{"^":"b1;d,e,f,r,x,y,z,Q,a,b,c",
cv:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.eR(v.a,36160,z)
J.fq(v.a,this.x,this.y,x,w)
if(y!==0)J.eU(v.a,y)
for(z=this.f,y=z.length,x=P.d,w=P.c,u=0;u<z.length;z.length===y||(0,H.K)(z),++u){t=z[u]
s=t.e
C.a.j(s,new G.b8(P.S(x,w),"transforms",!1,!0))
r=new T.Q(new Float32Array(16))
r.G()
for(v=t.f,q=v.length,p=t.d,o=0;o<v.length;v.length===q||(0,H.K)(v),++o)A.ec(p,v[o],r,a,s)
if(0>=s.length)return H.k(s,-1)
s.pop()}},
cu:function(){return this.cv(null)}}}],["","",,V,{}],["","",,B,{"^":"",
fK:function(a5,a6,a7,a8,a9,b0,b1,b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
z=-b0
y=-b1
x=new T.b(new Float32Array(3))
x.p(z,y,b2)
w=new T.b(new Float32Array(3))
w.p(b0,y,b2)
v=new T.b(new Float32Array(3))
v.p(b0,b1,b2)
u=new T.b(new Float32Array(3))
u.p(z,b1,b2)
t=-b2
s=new T.b(new Float32Array(3))
s.p(z,y,t)
r=new T.b(new Float32Array(3))
r.p(z,b1,t)
q=new T.b(new Float32Array(3))
q.p(b0,b1,t)
p=new T.b(new Float32Array(3))
p.p(b0,y,t)
o=new T.b(new Float32Array(3))
o.p(z,b1,t)
n=new T.b(new Float32Array(3))
n.p(z,b1,b2)
m=new T.b(new Float32Array(3))
m.p(b0,b1,b2)
l=new T.b(new Float32Array(3))
l.p(b0,b1,t)
k=new T.b(new Float32Array(3))
k.p(b0,y,b2)
j=new T.b(new Float32Array(3))
j.p(z,y,b2)
i=new T.b(new Float32Array(3))
i.p(z,y,t)
h=new T.b(new Float32Array(3))
h.p(b0,y,t)
g=new T.b(new Float32Array(3))
g.p(b0,y,t)
f=new T.b(new Float32Array(3))
f.p(b0,b1,t)
e=new T.b(new Float32Array(3))
e.p(b0,b1,b2)
d=new T.b(new Float32Array(3))
d.p(b0,y,b2)
c=new T.b(new Float32Array(3))
c.p(z,y,t)
b=new T.b(new Float32Array(3))
b.p(z,y,b2)
y=new T.b(new Float32Array(3))
y.p(z,b1,b2)
a=new T.b(new Float32Array(3))
a.p(z,b1,t)
t=[T.b]
a0=H.i([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a],t)
z=new T.r(new Float32Array(2))
z.t(a7,a9)
y=new T.r(new Float32Array(2))
y.t(a6,a9)
x=new T.r(new Float32Array(2))
x.t(a6,a8)
w=new T.r(new Float32Array(2))
w.t(a7,a8)
v=new T.r(new Float32Array(2))
v.t(a6,a9)
u=new T.r(new Float32Array(2))
u.t(a6,a8)
s=new T.r(new Float32Array(2))
s.t(a7,a8)
r=new T.r(new Float32Array(2))
r.t(a7,a9)
q=new T.r(new Float32Array(2))
q.t(a7,a8)
p=new T.r(new Float32Array(2))
p.t(a7,a9)
o=new T.r(new Float32Array(2))
o.t(a6,a9)
n=new T.r(new Float32Array(2))
n.t(a6,a8)
m=new T.r(new Float32Array(2))
m.t(a6,a8)
l=new T.r(new Float32Array(2))
l.t(a7,a8)
k=new T.r(new Float32Array(2))
k.t(a7,a9)
j=new T.r(new Float32Array(2))
j.t(a6,a9)
i=new T.r(new Float32Array(2))
i.t(a6,a9)
h=new T.r(new Float32Array(2))
h.t(a6,a8)
g=new T.r(new Float32Array(2))
g.t(a7,a8)
f=new T.r(new Float32Array(2))
f.t(a7,a9)
e=new T.r(new Float32Array(2))
e.t(a7,a9)
d=new T.r(new Float32Array(2))
d.t(a6,a9)
c=new T.r(new Float32Array(2))
c.t(a6,a8)
b=new T.r(new Float32Array(2))
b.t(a7,a8)
a1=H.i([z,y,x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b],[T.r])
a2=new G.bs(!1,H.i([],[G.V]),H.i([],[G.ai]),H.i([],t),P.S(P.d,[P.a,,]))
a2.N("aTexUV")
a2.N("aNormal")
a2.cq(6)
a2.aW(a0)
a2.ac("aTexUV",a1)
for(a3=0;z=$.eJ(),a3<6;++a3){a4=z[a3]
a2.ad("aNormal",H.i([a4,a4,a4,a4],t))}return a2},
fM:function(a,b,c,a0,a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=c/2
y=[T.b]
x=H.i([],y)
w=H.i([],[T.r])
v=H.i([],y)
u=new T.b(new Float32Array(3))
u.p(0,z,0)
C.a.j(x,u)
u=new T.r(new Float32Array(2))
u.t(0,0)
C.a.j(w,u)
u=new T.b(new Float32Array(3))
u.p(0,1,0)
C.a.j(v,u)
u=-z
t=new T.b(new Float32Array(3))
t.p(0,u,0)
C.a.j(x,t)
t=new T.r(new Float32Array(2))
t.t(1,1)
C.a.j(w,t)
t=new T.b(new Float32Array(3))
t.p(0,-1,0)
C.a.j(v,t)
for(s=0;s<a0;++s){r=s/a0
t=r*3.141592653589793*2
q=Math.sin(t)
p=Math.cos(t)
t=new Float32Array(3)
t[0]=q*a
t[1]=z
t[2]=p*a
C.a.j(x,new T.b(t))
t=new Float32Array(2)
t[0]=r
t[1]=1
C.a.j(w,new T.r(t))
t=new Float32Array(3)
t[0]=0
t[1]=1
t[2]=0
C.a.j(v,new T.b(t))
t=new Float32Array(3)
t[0]=q*b
t[1]=u
t[2]=p*b
C.a.j(x,new T.b(t))
t=new Float32Array(2)
t[0]=r
t[1]=0
C.a.j(w,new T.r(t))
t=new Float32Array(3)
t[0]=0
t[1]=-1
t[2]=0
C.a.j(v,new T.b(t))}for(u=2*a0,s=0;s<u;s=o){o=s+2
if(o>=x.length)return H.k(x,o)
C.a.j(x,x[o])
t=s+3
if(t>=x.length)return H.k(x,t)
C.a.j(x,x[t])
if(o>=w.length)return H.k(w,o)
C.a.j(w,w[o])
if(t>=w.length)return H.k(w,t)
C.a.j(w,w[t])
n=x.length
if(o>=n)return H.k(x,o)
m=x[o]
if(t>=n)return H.k(x,t)
l=x[t]
t=s+4
if(t>=n)return H.k(x,t)
k=x[t]
t=new Float32Array(3)
j=new T.b(new Float32Array(3))
G.hF(m,l,k,new T.b(t),j)
C.a.j(v,j)
C.a.j(v,j)}u=H.i([],[G.V])
t=H.i([],[G.ai])
i=new G.bs(!1,u,t,H.i([],y),P.S(P.d,[P.a,,]))
i.N("aTexUV")
i.aW(x)
i.ac("aTexUV",w)
i.N("aNormal")
i.ad("aNormal",v)
for(h=a0*2,s=0;s<a0;s=f){g=s*2+2
l=g+1
f=s+1
e=(f===a0?0:f)*2+2
d=e+1
C.a.j(u,new G.V(0,g,e))
C.a.j(u,new G.V(1,d,l))
C.a.j(t,new G.ai(h+e,h+g,h+l,h+d))}return i},
h5:function(a,a0,a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=[G.V]
y=H.i([],z)
x=[T.b]
w=H.i([],x)
C.a.I(y,$.ew())
C.a.I(w,$.ex())
for(v=0;v<a;++v,y=u){u=H.i([],z)
for(t=y.length,s=0;s<y.length;y.length===t||(0,H.K)(y),++s){r=y[s]
q=J.cO(r)
if(q>=w.length)return H.k(w,q)
q=w[q]
p=new T.b(new Float32Array(3))
p.w(q)
q=r.ga5(r)
if(q>=w.length)return H.k(w,q)
p.j(0,w[q])
p.T(0,0.5)
p.C(0)
q=r.ga5(r)
if(q>=w.length)return H.k(w,q)
q=w[q]
o=new T.b(new Float32Array(3))
o.w(q)
q=r.ga6(r)
if(q>=w.length)return H.k(w,q)
o.j(0,w[q])
o.T(0,0.5)
o.C(0)
q=r.ga6(r)
if(q>=w.length)return H.k(w,q)
q=w[q]
n=new T.b(new Float32Array(3))
n.w(q)
q=r.gah(r)
if(q>=w.length)return H.k(w,q)
n.j(0,w[q])
n.T(0,0.5)
n.C(0)
m=w.length
C.a.j(w,p)
l=w.length
C.a.j(w,o)
k=w.length
C.a.j(w,n)
C.a.j(u,new G.V(r.gah(r),m,k))
C.a.j(u,new G.V(r.ga5(r),l,m))
C.a.j(u,new G.V(r.ga6(r),k,l))
C.a.j(u,new G.V(m,l,k))}}j=new G.bs(!1,H.i([],z),H.i([],[G.ai]),H.i([],x),P.S(P.d,[P.a,,]))
j.N("aTexUV")
j.N("aNormal")
for(z=y.length,t=[T.r],s=0;s<y.length;y.length===z||(0,H.K)(y),++s){r=y[s]
q=J.cO(r)
if(q>=w.length)return H.k(w,q)
i=w[q]
q=r.ga5(r)
if(q>=w.length)return H.k(w,q)
h=w[q]
q=r.ga6(r)
if(q>=w.length)return H.k(w,q)
g=w[q]
q=i.a
f=Math.atan2(q[2],q[0])
q=Math.acos(q[1])
e=new Float32Array(2)
e[0]=0.5*(1+f*0.3183098861837907)
e[1]=q*0.3183098861837907
q=h.a
f=Math.atan2(q[2],q[0])
q=Math.acos(q[1])
d=new Float32Array(2)
d[0]=0.5*(1+f*0.3183098861837907)
d[1]=q*0.3183098861837907
q=g.a
f=Math.atan2(q[2],q[0])
q=Math.acos(q[1])
c=new Float32Array(2)
c[0]=0.5*(1+f*0.3183098861837907)
c[1]=q*0.3183098861837907
j.ad("aNormal",H.i([i,h,g],x))
q=new T.b(new Float32Array(3))
q.w(i)
q.T(0,a0)
f=new T.b(new Float32Array(3))
f.w(h)
f.T(0,a0)
b=new T.b(new Float32Array(3))
b.w(g)
b.T(0,a0)
j.cr(H.i([q,f,b],x))
j.ac("aTexUV",H.i([new T.r(e),new T.r(d),new T.r(c)],t))}return j},
i7:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=h+1
y=g+1
x=B.ip(B.hI(new B.i8(e,d,f,c),0,6.283185307179586,y,!1,0.001),h,i,!1)
w=H.i([],[G.V])
v=H.i([],[G.ai])
u=[T.b]
t=H.i([],u)
s=new G.bs(!1,w,v,t,P.S(P.d,[P.a,,]))
for(w=x.length,r=0;r<x.length;x.length===w||(0,H.K)(x),++r){q=x[r]
for(p=0;p<q.length;p+=2){v=H.h(q[p],"$isb")
v.toString
o=new T.b(new Float32Array(3))
o.w(v)
C.a.j(t,o)}}s.cA(z,y,!1)
s.cB(z,y)
s.N("aNormal")
for(w=x.length,v=s.e,r=0;r<x.length;x.length===w||(0,H.K)(x),++r){q=x[r]
for(p=0;t=q.length,p<t;p+=2){o=p+1
if(o>=t)return H.k(q,o)
o=H.h(q[o],"$isb")
n=H.x(v.h(0,"aNormal"),"$isa",u,"$asa")
o.toString
t=new T.b(new Float32Array(3))
t.w(o);(n&&C.a).j(n,t)}}return s},
ip:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=[T.b]
H.x(a,"$isa",z,"$asa")
y=H.i([],[[P.a,T.b]])
x=new Float32Array(3)
w=new T.b(x)
v=new Float32Array(3)
u=new T.b(v)
t=new Float32Array(3)
s=new T.b(t)
for(r=b+1,q=0;p=a.length,q<p;q+=2){o=a[q]
n=q+1
if(n>=p)return H.k(a,n)
m=a[n]
l=H.i([],z)
C.a.j(y,l)
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
t[2]=j*i}u.C(0)
s.C(0)
for(h=0;h<r;++h){g=h/b*2*3.141592653589793
f=c*Math.cos(g)
e=c*Math.sin(g)
w.w(o)
w.ai(u,f)
w.ai(s,e)
p=new T.b(new Float32Array(3))
p.w(w)
C.a.j(l,p)
x[2]=0
x[1]=0
x[0]=0
w.ai(u,f)
w.ai(s,e)
w.C(0)
p=new T.b(new Float32Array(3))
p.w(w)
C.a.j(l,p)}}return y},
hI:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
H.n(a,{func:1,ret:-1,args:[P.a3,T.b]})
z=H.i([],[T.b])
y=new T.b(new Float32Array(3))
x=new T.b(new Float32Array(3))
for(w=(c-b)/(d-1),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+f,x)
x.ab(0,y)
t=new T.b(new Float32Array(3))
t.w(y)
C.a.j(z,t)
t=new T.b(new Float32Array(3))
t.w(x)
C.a.j(z,t)}return z},
i8:{"^":"o:24;a,b,c,d",
$2:function(a,b){var z,y,x,w,v,u
z=this.c
y=this.a*a
x=Math.cos(y)
w=Math.sin(y)
y=this.b*a
v=Math.cos(y)
u=Math.sin(y)
y=z*(2+x)*0.5
b.sU(0,y*v)
b.sR(0,y*u)
b.sa1(0,this.d*z*0.5*w)}}}],["","",,D,{"^":"",he:{"^":"c;a,b,c",
cE:function(a){var z,y
a=document
z=W.b_
y={func:1,ret:-1,args:[z]}
W.aF(a,"keydown",H.n(new D.hg(this),y),!1,z)
W.aF(a,"keyup",H.n(new D.hh(this),y),!1,z)},
q:{
hf:function(a){var z=P.D
z=new D.he(P.a5(null,null,null,z),P.a5(null,null,null,z),P.a5(null,null,null,z))
z.cE(a)
return z}}},hg:{"^":"o:11;a",
$1:function(a){var z
H.h(a,"$isb_")
z=this.a
z.a.j(0,a.which)
z.b.j(0,a.which)}},hh:{"^":"o:11;a",
$1:function(a){var z
H.h(a,"$isb_")
z=this.a
z.a.bR(0,a.which)
z.c.j(0,a.which)}},ht:{"^":"c;a,b,c,d,e,f,r,x",
cF:function(a){var z,y,x
if(a==null)a=document
z=J.m(a)
y=z.gbM(a)
x=H.q(y,0)
W.aF(y.a,y.b,H.n(new D.hv(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbL(a)
y=H.q(x,0)
W.aF(x.a,x.b,H.n(new D.hw(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbN(a)
x=H.q(y,0)
W.aF(y.a,y.b,H.n(new D.hx(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbO(a)
x=H.q(z,0)
W.aF(z.a,z.b,H.n(new D.hy(this),{func:1,ret:-1,args:[x]}),!1,x)},
q:{
hu:function(a){var z=P.D
z=new D.ht(P.a5(null,null,null,z),P.a5(null,null,null,z),P.a5(null,null,null,z),0,0,0,0,0)
z.cF(a)
return z}}},hv:{"^":"o:3;a",
$1:function(a){var z,y
H.h(a,"$isX")
a.preventDefault()
z=this.a
y=J.m(a)
z.r=H.P(y.gbK(a).a)
z.x=H.P(y.gbK(a).b)
z.d=a.movementX
z.e=a.movementY}},hw:{"^":"o:3;a",
$1:function(a){var z
H.h(a,"$isX")
a.preventDefault()
P.ao("BUTTON "+H.f(a.button))
z=this.a
z.a.j(0,a.button)
z.b.j(0,a.button)}},hx:{"^":"o:3;a",
$1:function(a){var z
H.h(a,"$isX")
a.preventDefault()
z=this.a
z.a.bR(0,a.button)
z.c.j(0,a.button)}},hy:{"^":"o:25;a",
$1:function(a){H.h(a,"$isaN")
a.preventDefault()
this.a.f=H.P(C.ab.gdw(a))}},hH:{"^":"fy;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bG:function(a){var z,y
z=C.f.dC(H.x(a,"$isl",[P.c],"$asl"),0,new A.kp(),P.D)
if(typeof z!=="number")return H.am(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kp:{"^":"o:26;",
$2:function(a,b){var z,y
H.P(a)
z=J.aq(b)
if(typeof a!=="number")return a.L()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",au:{"^":"c;a",
w:function(a){var z,y
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
l:function(a){return"[0] "+this.S(0).l(0)+"\n[1] "+this.S(1).l(0)+"\n[2] "+this.S(2).l(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=9)return H.k(z,b)
return z[b]},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.au){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gB:function(a){return A.bG(this.a)},
S:function(a){var z,y,x
z=new Float32Array(3)
y=this.a
if(a>=9)return H.k(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.k(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.k(y,x)
z[2]=y[x]
return new T.b(z)},
dr:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if(m===0){this.w(a)
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
return m}},Q:{"^":"c;a",
w:function(a){var z,y
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
l:function(a){return"[0] "+this.S(0).l(0)+"\n[1] "+this.S(1).l(0)+"\n[2] "+this.S(2).l(0)+"\n[3] "+this.S(3).l(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.k(z,b)
return z[b]},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.Q){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gB:function(a){return A.bG(this.a)},
S:function(a){var z,y,x
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
return new T.aM(z)},
G:function(){var z=this.a
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
bJ:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},r:{"^":"c;a",
t:function(a,b){var z=this.a
z[0]=a
z[1]=b},
l:function(a){var z=this.a
return"["+H.f(z[0])+","+H.f(z[1])+"]"},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.r){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gB:function(a){return A.bG(this.a)},
h:function(a,b){var z=this.a
if(b>=2)return H.k(z,b)
return z[b]},
gk:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gU:function(a){return this.a[0]},
gR:function(a){return this.a[1]}},b:{"^":"c;a",
p:function(a,b,c){var z=this.a
C.f.i(z,0,a)
C.f.i(z,1,b)
C.f.i(z,2,c)},
w:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
l:function(a){var z=this.a
return"["+H.f(z[0])+","+H.f(z[1])+","+H.f(z[2])+"]"},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.b){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gB:function(a){return A.bG(this.a)},
h:function(a,b){var z=this.a
if(b>=3)return H.k(z,b)
return z[b]},
gk:function(a){return Math.sqrt(this.gal())},
gal:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
C:function(a){var z,y,x
z=Math.sqrt(this.gal())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aE:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bA:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.b(new Float32Array(3))
z.p(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
j:function(a,b){var z,y
z=H.h(b,"$isb").a
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
ai:function(a,b){var z,y
z=a.a
y=this.a
y[0]=y[0]+z[0]*b
y[1]=y[1]+z[1]*b
y[2]=y[2]+z[2]*b},
ab:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
T:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
sU:function(a,b){this.a[0]=b
return b},
sR:function(a,b){this.a[1]=b
return b},
sa1:function(a,b){this.a[2]=b
return b},
gU:function(a){return this.a[0]},
gR:function(a){return this.a[1]},
ga1:function(a){return this.a[2]},
q:{
I:function(a,b,c){var z=new T.b(new Float32Array(3))
z.p(a,b,c)
return z}}},aM:{"^":"c;a",
l:function(a){var z=this.a
return H.f(z[0])+","+H.f(z[1])+","+H.f(z[2])+","+H.f(z[3])},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aM){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gB:function(a){return A.bG(this.a)},
h:function(a,b){var z=this.a
if(b>=4)return H.k(z,b)
return z[b]},
gk:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gU:function(a){return this.a[0]},
gR:function(a){return this.a[1]},
ga1:function(a){return this.a[2]},
gc8:function(a){return this.a[3]}}}],["","",,U,{"^":"",
ej:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
z={}
y=document
x=H.h(C.n.bP(y,"#info"),"$iscj")
w=C.n.cb(y,"stats")
v=y.createElement("div")
u=v.style
u.fontWeight="bold"
v.textContent="@@@@"
t=new R.ie(0,0,w,v,y.createElement("div"),R.jg("blue","gray",90,30))
t.cI(w,"blue","gray")
s=H.h(C.n.bP(y,"#webgl-canvas"),"$isch")
r=new G.fA(s)
y=P.d
w=P.c
u=(s&&C.H).ca(s,"webgl2",P.cp(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],y,w))
r.a=u
if(u==null)H.a_(P.dc('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
q="ChronosGL Config: "+H.f(J.fb(u))
if($.ed>0)P.ao("I: "+q)
J.eV(u,0,0,0,1)
J.bn(u,2929)
J.bn(u,2884)
p=J.fc(u,"WEBGL_get_buffer_sub_data_async")
P.ao("Ext "+H.f(p))
u=new Float32Array(3)
q=D.hf(null)
o=D.hu(s)
n=new T.Q(new Float32Array(16))
n.G()
m=new Float32Array(3)
l=new Float32Array(3)
k=new Float32Array(3)
j=new D.hH(25,10,0,0,new T.b(u),-0.02,q,o,n,new T.b(m),new T.b(l),new T.b(k),new T.b(new Float32Array(3)),"camera:orbit",!1,!0)
u=new T.Q(new Float32Array(16))
u.G()
q=new T.Q(new Float32Array(16))
q.G()
i=new G.hK(j,50,1,0.1,1000,u,q,new T.Q(new Float32Array(16)),P.S(y,w),"perspective",!1,!0)
i.b0()
w=H.i([],[A.dt])
h=new A.hY(null,r,w,17664,0,0,0,0,"main",!1,!0)
h.d=new G.h0(r,null,null,null,null)
u=G.i_("prog",r,$.eM(),$.eL())
q=H.i([i],[G.b8])
o=[A.b2]
n=H.i([],o)
C.a.j(w,new A.dt(u,q,n,"objects",!1,!0))
g=G.bz("sphere")
g.d.i(0,"uColor",$.aI().h(0,"sphere"))
w=G.bt("icosahedron-3",u,B.h5(3,1,!0))
q=H.i([],o)
m=new Float32Array(9)
l=new T.Q(new Float32Array(16))
l.G()
k=new T.Q(new Float32Array(16))
k.G()
f=new Float32Array(3)
e=new Float32Array(3)
d=new Float32Array(3)
c=new A.b2(g,w,q,new T.au(m),l,k,new T.b(f),new T.b(e),new T.b(d),new T.b(new Float32Array(3)),"sphere",!1,!0)
c.Y(0,0,0)
C.a.j(n,c)
g=G.bz("cube")
g.d.i(0,"uColor",$.aI().h(0,"cube"))
w=G.bt("cube",u,B.fK(!0,1,0,1,0,1,1,1))
q=H.i([],o)
m=new Float32Array(9)
l=new T.Q(new Float32Array(16))
l.G()
k=new T.Q(new Float32Array(16))
k.G()
f=new Float32Array(3)
e=new Float32Array(3)
d=new Float32Array(3)
c=new A.b2(g,w,q,new T.au(m),l,k,new T.b(f),new T.b(e),new T.b(d),new T.b(new Float32Array(3)),"cube",!1,!0)
c.Y(-5,0,-5)
C.a.j(n,c)
g=G.bz("cylinder")
g.d.i(0,"uColor",$.aI().h(0,"cylinder"))
w=G.bt("cylinder-32",u,B.fM(3,6,2,32,!0))
q=H.i([],o)
m=new Float32Array(9)
l=new T.Q(new Float32Array(16))
l.G()
k=new T.Q(new Float32Array(16))
k.G()
f=new Float32Array(3)
e=new Float32Array(3)
d=new Float32Array(3)
c=new A.b2(g,w,q,new T.au(m),l,k,new T.b(f),new T.b(e),new T.b(d),new T.b(new Float32Array(3)),"cylinder",!1,!0)
c.Y(5,0,-5)
C.a.j(n,c)
g=G.bz("quad")
g.d.i(0,"uColor",$.aI().h(0,"quad"))
w=new T.b(new Float32Array(3))
w.p(-2,-2,0)
q=new T.b(new Float32Array(3))
q.p(2,-2,0)
m=new T.b(new Float32Array(3))
m.p(2,2,0)
l=new T.b(new Float32Array(3))
l.p(-2,2,0)
k=[T.b]
b=H.i([w,q,m,l],k)
w=new T.r(new Float32Array(2))
w.t(0,0)
q=new T.r(new Float32Array(2))
q.t(1,0)
m=new T.r(new Float32Array(2))
m.t(1,1)
l=new T.r(new Float32Array(2))
l.t(0,1)
a=H.i([w,q,m,l],[T.r])
a0=new T.b(new Float32Array(3))
a0.p(0,0,1)
a1=H.i([a0,a0,a0,a0],k)
a2=new G.bs(!1,H.i([],[G.V]),H.i([],[G.ai]),H.i([],k),P.S(y,[P.a,,]))
a2.N("aTexUV")
a2.cs(b)
a2.ac("aTexUV",a)
a2.N("aNormal")
a2.ad("aNormal",a1)
y=G.bt("quad",u,a2)
w=H.i([],o)
q=new Float32Array(9)
m=new T.Q(new Float32Array(16))
m.G()
l=new T.Q(new Float32Array(16))
l.G()
k=new Float32Array(3)
f=new Float32Array(3)
e=new Float32Array(3)
c=new A.b2(g,y,w,new T.au(q),m,l,new T.b(k),new T.b(f),new T.b(e),new T.b(new Float32Array(3)),"quad",!1,!0)
c.Y(-5,0,5)
C.a.j(n,c)
g=G.bz("torus")
g.d.i(0,"uColor",$.aI().h(0,"torus"))
y=G.bt("torusknot",u,B.i7(!0,!0,1,2,3,1,128,16,0.4,!1))
o=H.i([],o)
w=new Float32Array(9)
u=new T.Q(new Float32Array(16))
u.G()
q=new T.Q(new Float32Array(16))
q.G()
m=new Float32Array(3)
l=new Float32Array(3)
k=new Float32Array(3)
c=new A.b2(g,y,o,new T.au(w),u,q,new T.b(m),new T.b(l),new T.b(k),new T.b(new Float32Array(3)),"torus",!1,!0)
c.Y(5,0,5)
C.a.j(n,c)
y=new U.kE(s,i,h)
y.$1(null)
w=W.a4
W.aF(window,"resize",H.n(y,{func:1,ret:-1,args:[w]}),!1,w)
a3=new Uint8Array(4)
a4=J.bM(r.a)
J.bm(r.a,35051,a4)
J.c9(r.a,35051,4,35049)
J.bm(r.a,35051,null)
z.a=0
new U.kC(z,j,h,x,new U.kD(j,s,p,r,a4,a3),t).$1(0)},
kE:{"^":"o:27;a,b,c",
$1:function(a){var z,y,x
z=this.a
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.ao("size change "+H.f(y)+" "+H.f(x))
this.b.ct(y,x)
z=this.c
z.z=y
z.Q=x}},
kD:{"^":"o:28;a,b,c,d,e,f",
$0:function(){var z,y,x,w,v,u,t,s,r,q
z=Date.now()
y=this.a.r1
x=y.r
w=this.b.clientHeight
y=y.x
if(typeof w!=="number")return w.an()
if(typeof y!=="number")return H.am(y)
v=w-y
y=this.f
J.fg(this.d.a,x,v,1,1,6408,5121,y)
w=y.length
if(0>=w)return H.k(y,0)
u=y[0]
if(1>=w)return H.k(y,1)
t=y[1]
if(2>=w)return H.k(y,2)
w=y[2]
s=new T.b(new Float32Array(3))
s.p(u,t,w)
s.T(0,0.00392156862745098)
w=$.aI()
w=new H.ak(w,[H.q(w,0)])
w=w.gD(w)
while(!0){if(!w.u()){r="NONE"
break}r=w.d
if(J.ap($.aI().h(0,r),s))break}q=P.d7(0,0,0,Date.now()-new P.bp(z,!1).a,0,0)
return H.f(r)+"<br>"+H.f(x)+"."+v+"<br>"+H.f(y)+"<br>"+q.a+"us"}},
kC:{"^":"o:29;a,b,c,d,e,f",
$1:function(b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
H.cF(b2)
if(typeof b2!=="number")return b2.an()
z=this.a
z.a=b2+0
y=this.b
y.go+=0.001
this.c.cu()
x=this.d
w=this.e.$0()
x.toString;(x&&C.m).aR(x,H.u(w))
x=y.r1
w=x.a
if(w.A(0,0)||w.A(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.aP()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.aP()
y.id=v+w*0.01}w=y.k4
v=w.a
if(v.A(0,37))y.go+=0.03
else if(v.A(0,39))y.go-=0.03
if(v.A(0,38))y.id+=0.03
else if(v.A(0,40))y.id-=0.03
if(v.A(0,33))y.fy*=0.99
else if(v.A(0,34))y.fy*=1.01
if(v.A(0,32)){y.go=0
y.id=0}v=x.f
if(typeof v!=="number")return v.aP()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.r.dn(y.id,-1.4707963267948965,1.4707963267948965)
y.id=v
u=y.fy
t=y.go
s=u*Math.cos(v)
y.Y(s*Math.cos(t),u*Math.sin(v),s*Math.sin(t))
t=y.k2
v=y.d.a
u=t.a
v[12]=v[12]+u[0]
v[13]=v[13]+u[1]
v[14]=v[14]+u[2]
r=v[12]
q=v[13]
p=v[14]
o=new T.b(new Float32Array(3))
o.p(0,1,0)
u=y.e
n=u.a
n[0]=v[12]
n[1]=v[13]
n[2]=v[14]
n=new Float32Array(3)
m=new T.b(n)
m.w(u)
m.ab(0,t)
m.C(0)
l=o.bA(m)
l.C(0)
k=m.bA(l)
k.C(0)
t=l.aE(u)
j=k.aE(u)
u=m.aE(u)
i=l.a
h=i[0]
g=k.a
f=g[0]
e=n[0]
d=i[1]
c=g[1]
b=n[1]
i=i[2]
g=g[2]
n=n[2]
v[15]=1
v[14]=-u
v[13]=-j
v[12]=-t
v[11]=0
v[10]=n
v[9]=g
v[8]=i
v[7]=0
v[6]=b
v[5]=c
v[4]=d
v[3]=0
v[2]=e
v[1]=f
v[0]=h
v[12]=r
v[13]=q
v[14]=p
h=y.f
f=h.a
f[0]=v[2]
f[1]=v[6]
f[2]=v[10]
y=-y.k1
a=Math.sqrt(h.gal())
r=f[0]/a
q=f[1]/a
p=f[2]/a
a0=Math.cos(y)
a1=Math.sin(y)
a2=1-a0
a3=r*r*a2+a0
y=p*a1
a4=r*q*a2-y
f=q*a1
a5=r*p*a2+f
a6=q*r*a2+y
a7=q*q*a2+a0
y=r*a1
a8=q*p*a2-y
a9=p*r*a2-f
b0=p*q*a2+y
b1=p*p*a2+a0
y=v[0]
f=v[4]
h=v[8]
e=v[1]
d=v[5]
c=v[9]
b=v[2]
i=v[6]
g=v[10]
n=v[3]
t=v[7]
j=v[11]
v[0]=y*a3+f*a6+h*a9
v[1]=e*a3+d*a6+c*a9
v[2]=b*a3+i*a6+g*a9
v[3]=n*a3+t*a6+j*a9
v[4]=y*a4+f*a7+h*b0
v[5]=e*a4+d*a7+c*b0
v[6]=b*a4+i*a7+g*b0
v[7]=n*a4+t*a7+j*b0
v[8]=y*a5+f*a8+h*b1
v[9]=e*a5+d*a8+c*b1
v[10]=b*a5+i*a8+g*b1
v[11]=n*a5+t*a8+j*b1
w.c.a7(0)
w.b.a7(0)
x.e=0
x.d=0
x.f=0
x.c.a7(0)
x.b.a7(0)
C.ac.gdg(window).bT(this,-1)
this.f.cK(z.a)}}},1]]
setupProgram(dart,0,0)
J.B=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dh.prototype
return J.dg.prototype}if(typeof a=="string")return J.bx.prototype
if(a==null)return J.hc.prototype
if(typeof a=="boolean")return J.hb.prototype
if(a.constructor==Array)return J.bv.prototype
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
return a}if(a instanceof P.c)return a
return J.c5(a)}
J.bh=function(a){if(typeof a=="string")return J.bx.prototype
if(a==null)return a
if(a.constructor==Array)return J.bv.prototype
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
return a}if(a instanceof P.c)return a
return J.c5(a)}
J.ee=function(a){if(a==null)return a
if(a.constructor==Array)return J.bv.prototype
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
return a}if(a instanceof P.c)return a
return J.c5(a)}
J.kl=function(a){if(typeof a=="number")return J.bw.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b9.prototype
return a}
J.km=function(a){if(typeof a=="number")return J.bw.prototype
if(typeof a=="string")return J.bx.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b9.prototype
return a}
J.ef=function(a){if(typeof a=="string")return J.bx.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b9.prototype
return a}
J.m=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
return a}if(a instanceof P.c)return a
return J.c5(a)}
J.bF=function(a){if(a==null)return a
if(!(a instanceof P.c))return J.b9.prototype
return a}
J.ap=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.B(a).F(a,b)}
J.ab=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kl(a).X(a,b)}
J.bl=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kz(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bh(a).h(a,b)}
J.cK=function(a,b){return J.ef(a).ar(a,b)}
J.bK=function(a,b){return J.m(a).d3(a,b)}
J.eO=function(a,b,c){return J.m(a).d4(a,b,c)}
J.cL=function(a,b){return J.m(a).bk(a,b)}
J.eP=function(a,b,c,d){return J.m(a).dd(a,b,c,d)}
J.cM=function(a,b,c){return J.m(a).bm(a,b,c)}
J.eQ=function(a,b){return J.m(a).di(a,b)}
J.bm=function(a,b,c){return J.m(a).bn(a,b,c)}
J.eR=function(a,b,c){return J.m(a).bp(a,b,c)}
J.cN=function(a,b,c){return J.m(a).bq(a,b,c)}
J.bL=function(a,b){return J.m(a).dl(a,b)}
J.eS=function(a,b){return J.m(a).br(a,b)}
J.eT=function(a,b,c){return J.m(a).bs(a,b,c)}
J.c9=function(a,b,c,d){return J.m(a).bt(a,b,c,d)}
J.eU=function(a,b){return J.m(a).bu(a,b)}
J.eV=function(a,b,c,d,e){return J.m(a).bv(a,b,c,d,e)}
J.eW=function(a,b){return J.km(a).O(a,b)}
J.ca=function(a,b,c){return J.bh(a).dq(a,b,c)}
J.bM=function(a){return J.m(a).bx(a)}
J.eX=function(a){return J.m(a).by(a)}
J.eY=function(a){return J.m(a).dv(a)}
J.eZ=function(a,b){return J.m(a).bB(a,b)}
J.cb=function(a,b){return J.m(a).bC(a,b)}
J.f_=function(a,b,c,d){return J.m(a).bD(a,b,c,d)}
J.f0=function(a,b,c,d,e){return J.m(a).dz(a,b,c,d,e)}
J.f1=function(a,b,c,d,e){return J.m(a).bE(a,b,c,d,e)}
J.f2=function(a,b,c,d,e,f){return J.m(a).dA(a,b,c,d,e,f)}
J.f3=function(a,b){return J.ee(a).v(a,b)}
J.bn=function(a,b){return J.m(a).bF(a,b)}
J.f4=function(a,b){return J.m(a).bG(a,b)}
J.f5=function(a){return J.m(a).dB(a)}
J.f6=function(a,b){return J.m(a).H(a,b)}
J.cO=function(a){return J.bF(a).gah(a)}
J.f7=function(a){return J.m(a).gdh(a)}
J.aq=function(a){return J.B(a).gB(a)}
J.bN=function(a){return J.ee(a).gD(a)}
J.aU=function(a){return J.bh(a).gk(a)}
J.f8=function(a){return J.m(a).gdI(a)}
J.f9=function(a){return J.m(a).gdN(a)}
J.fa=function(a){return J.bF(a).gc8(a)}
J.bO=function(a){return J.bF(a).gU(a)}
J.cc=function(a){return J.bF(a).gR(a)}
J.cP=function(a){return J.bF(a).ga1(a)}
J.cd=function(a,b){return J.m(a).a2(a,b)}
J.fb=function(a){return J.m(a).am(a)}
J.fc=function(a,b){return J.m(a).aI(a,b)}
J.fd=function(a,b){return J.m(a).aJ(a,b)}
J.fe=function(a,b,c){return J.m(a).aK(a,b,c)}
J.cQ=function(a,b,c){return J.m(a).aO(a,b,c)}
J.ff=function(a,b){return J.m(a).bI(a,b)}
J.fg=function(a,b,c,d,e,f,g,h){return J.m(a).bQ(a,b,c,d,e,f,g,h)}
J.cR=function(a){return J.m(a).dJ(a)}
J.fh=function(a,b,c,d){return J.m(a).aU(a,b,c,d)}
J.fi=function(a){return J.ef(a).dO(a)}
J.bo=function(a){return J.B(a).l(a)}
J.fj=function(a,b,c,d){return J.m(a).dQ(a,b,c,d)}
J.fk=function(a,b,c){return J.m(a).bW(a,b,c)}
J.fl=function(a,b,c){return J.m(a).bX(a,b,c)}
J.ce=function(a,b,c){return J.m(a).bY(a,b,c)}
J.fm=function(a,b,c){return J.m(a).bZ(a,b,c)}
J.cS=function(a,b,c){return J.m(a).c_(a,b,c)}
J.cT=function(a,b,c){return J.m(a).c0(a,b,c)}
J.cU=function(a,b,c){return J.m(a).c1(a,b,c)}
J.cV=function(a,b,c,d){return J.m(a).c2(a,b,c,d)}
J.cW=function(a,b,c,d){return J.m(a).c3(a,b,c,d)}
J.fn=function(a,b){return J.m(a).c4(a,b)}
J.fo=function(a,b,c){return J.m(a).dR(a,b,c)}
J.fp=function(a,b,c,d,e,f,g){return J.m(a).c5(a,b,c,d,e,f,g)}
J.fq=function(a,b,c,d,e){return J.m(a).c7(a,b,c,d,e)}
I.aS=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.q=W.bP.prototype
C.H=W.ch.prototype
C.w=W.fH.prototype
C.m=W.cj.prototype
C.I=W.fR.prototype
C.J=W.h3.prototype
C.n=W.h4.prototype
C.K=J.j.prototype
C.a=J.bv.prototype
C.x=J.dg.prototype
C.d=J.dh.prototype
C.r=J.bw.prototype
C.i=J.bx.prototype
C.R=J.by.prototype
C.f=H.hz.prototype
C.o=H.hB.prototype
C.V=W.hC.prototype
C.A=J.hL.prototype
C.B=W.hV.prototype
C.G=W.il.prototype
C.v=J.b9.prototype
C.ab=W.aN.prototype
C.ac=W.iz.prototype
C.e=new P.js()
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
C.S=H.i(I.aS(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.T=H.i(I.aS(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.U=H.i(I.aS([]),[P.d])
C.t=H.i(I.aS(["bind","if","ref","repeat","syntax"]),[P.d])
C.u=H.i(I.aS(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
C.W=new G.C("vec3","vertex btangents",0)
C.c=new G.C("vec3","",0)
C.X=new G.C("vec4","delta from light",0)
C.p=new G.C("","",0)
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
$.ac=0
$.aV=null
$.cZ=null
$.cw=!1
$.eh=null
$.e8=null
$.em=null
$.c3=null
$.c6=null
$.cD=null
$.aP=null
$.bb=null
$.bc=null
$.cx=!1
$.J=C.e
$.ah=null
$.ck=null
$.da=null
$.d9=null
$.d5=null
$.d4=null
$.d3=null
$.d2=null
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
I.$lazy(y,x,w)}})(["l3","ev",function(){return H.eg("_$dart_dartClosure")},"lJ","cH",function(){return H.eg("_$dart_js")},"mu","ez",function(){return H.ae(H.bW({
toString:function(){return"$receiver$"}}))},"mv","eA",function(){return H.ae(H.bW({$method$:null,
toString:function(){return"$receiver$"}}))},"mw","eB",function(){return H.ae(H.bW(null))},"mx","eC",function(){return H.ae(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"mA","eF",function(){return H.ae(H.bW(void 0))},"mB","eG",function(){return H.ae(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"mz","eE",function(){return H.ae(H.dD(null))},"my","eD",function(){return H.ae(function(){try{null.$method$}catch(z){return z.message}}())},"mD","eI",function(){return H.ae(H.dD(void 0))},"mC","eH",function(){return H.ae(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mN","cI",function(){return P.iC()},"n3","bk",function(){return[]},"l0","eu",function(){return{}},"mV","eK",function(){return P.cq(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"mW","cJ",function(){return P.S(P.d,P.br)},"mh","ey",function(){return new G.dC(1281,0,4294967295)},"kS","eo",function(){return new G.dB(1281,1281,1281)},"n1","aa",function(){return P.cp(["cBlendEquation",C.p,"cDepthWrite",C.p,"cDepthTest",C.p,"cStencilFunc",C.p,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.E,"aColorAlpha",C.Z,"aPosition",C.C,"aTexUV",C.a5,"aNormal",C.a8,"aBinormal",C.Y,"aCenter",C.D,"aPointSize",C.b,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.aa,"aBitangent",C.W,"iaRotation",C.l,"iaTranslation",C.c,"iaScale",C.b,"iaColor",C.c,"vColor",C.E,"vTexUV",C.k,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.C,"vPositionFromLight",C.X,"vCenter",C.D,"vDepth",C.a3,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.F,"uConvolutionMatrix",C.F,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a9,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a7,"uAnimationTable",C.h,"uTime",C.a6,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.c,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a0,"uLightDescs",C.a1,"uLightCount",C.b,"uLightTypes",C.a2,"uBumpScale",C.a4,"uNormalScale",C.a_],P.d,G.C)},"kV","ep",function(){return T.I(0,0,1)},"kZ","et",function(){return T.I(1,0,0)},"kX","er",function(){return T.I(0,1,0)},"kY","es",function(){return T.I(1,0,1)},"kW","eq",function(){return T.I(0,1,1)},"n8","eM",function(){var z,y
z=G.dv("SolidColor")
y=[P.d]
z.cp(H.i(["aPosition"],y))
z.aV(H.i(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.b_(H.i(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"],y))
return z},"n7","eL",function(){var z,y
z=G.dv("SolidColorF")
y=[P.d]
z.aV(H.i(["uColor"],y))
z.b_(H.i(["oFragColor = vec4( uColor, 1.0 );"],y))
return z},"mS","eJ",function(){return H.i([T.I(0,0,1),T.I(0,0,-1),T.I(0,1,0),T.I(0,-1,0),T.I(1,0,0),T.I(-1,0,0)],[T.b])},"lz","ew",function(){return H.i([G.L(0,11,5),G.L(0,5,1),G.L(0,1,7),G.L(0,7,10),G.L(0,10,11),G.L(1,5,9),G.L(5,11,4),G.L(11,10,2),G.L(10,7,6),G.L(7,1,8),G.L(3,9,4),G.L(3,4,2),G.L(3,2,6),G.L(3,6,8),G.L(3,8,9),G.L(4,9,5),G.L(2,4,11),G.L(6,2,10),G.L(8,6,7),G.L(9,8,1)],[G.V])},"n9","eN",function(){return(1+P.kJ(5))/2},"lA","ex",function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.eN()
y=T.I(-1,z,0)
y.C(0)
x=T.I(1,z,0)
x.C(0)
if(typeof z!=="number")return z.dT()
w=T.I(-1,-z,0)
w.C(0)
v=T.I(1,-z,0)
v.C(0)
u=T.I(0,-1,z)
u.C(0)
t=T.I(0,1,z)
t.C(0)
s=T.I(0,-1,-z)
s.C(0)
r=T.I(0,1,-z)
r.C(0)
q=T.I(z,0,-1)
q.C(0)
p=T.I(z,0,1)
p.C(0)
o=T.I(-z,0,-1)
o.C(0)
z=T.I(-z,0,1)
z.C(0)
return H.i([y,x,w,v,u,t,s,r,q,p,o,z],[T.b])},"md","aI",function(){return P.cp(["sphere",$.eq(),"cube",$.et(),"cylinder",$.er(),"quad",$.es(),"torus",$.ep()],P.d,T.b)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.G},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:P.G,args:[W.X]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.G,args:[,]},{func:1,ret:P.G,args:[,,]},{func:1,ret:P.d,args:[P.D]},{func:1,ret:P.T,args:[W.ad]},{func:1,ret:P.T,args:[P.d]},{func:1,ret:P.G,args:[W.b_]},{func:1,ret:P.T,args:[W.U,P.d,P.d,W.bC]},{func:1,args:[,P.d]},{func:1,args:[P.d]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.G,args:[,],opt:[P.a6]},{func:1,ret:[P.af,,],args:[,]},{func:1,ret:P.T,args:[W.v]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.G,args:[P.E]},{func:1,args:[W.a4]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.v,W.v]},{func:1,ret:-1,args:[P.a3,T.b]},{func:1,ret:P.G,args:[W.aN]},{func:1,ret:P.D,args:[P.D,P.c]},{func:1,ret:-1,args:[W.a4]},{func:1,ret:P.d},{func:1,ret:-1,args:[P.E]},{func:1,ret:P.D,args:[,,]}]
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
if(x==y)H.kL(d||a)
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
Isolate.aS=a.aS
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
if(typeof dartMainRunner==="function")dartMainRunner(U.ej,[])
else U.ej([])})})()
//# sourceMappingURL=picking.dart.js.map
