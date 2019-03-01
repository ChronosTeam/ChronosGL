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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cH"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cH"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cH(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bf=function(){}
var dart=[["","",,H,{"^":"",lR:{"^":"b;a"}}],["","",,J,{"^":"",
cL:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c5:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cK==null){H.kQ()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.cB("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cO()]
if(v!=null)return v
v=H.kV(a)
if(v!=null)return v
if(typeof a=="function")return C.S
y=Object.getPrototypeOf(a)
if(y==null)return C.B
if(y===Object.prototype)return C.B
if(typeof w=="function"){Object.defineProperty(w,$.cO(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
h:{"^":"b;",
D:function(a,b){return a===b},
gA:function(a){return H.b5(a)},
k:["cu",function(a){return"Instance of '"+H.b6(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|NavigatorAutomationInformation|NavigatorCookies|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hm:{"^":"h;",
k:function(a){return String(a)},
gA:function(a){return a?519018:218159},
$isS:1},
hn:{"^":"h;",
D:function(a,b){return null==b},
k:function(a){return"null"},
gA:function(a){return 0},
$isA:1},
cp:{"^":"h;",
gA:function(a){return 0},
k:["cw",function(a){return String(a)}]},
i0:{"^":"cp;"},
b9:{"^":"cp;"},
bs:{"^":"cp;",
k:function(a){var z=a[$.eE()]
if(z==null)return this.cw(a)
return"JavaScript function for "+H.e(J.bk(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbn:1},
bp:{"^":"h;$ti",
l:function(a,b){H.z(b,H.p(a,0))
if(!!a.fixed$length)H.Y(P.B("add"))
a.push(b)},
I:function(a,b){var z
H.t(b,"$isl",[H.p(a,0)],"$asl")
if(!!a.fixed$length)H.Y(P.B("addAll"))
for(z=0;z<1;++z)a.push(b[z])},
X:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.e(a[y]))
return z.join(b)},
u:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
gdT:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.c(H.cn())},
bo:function(a,b){var z,y
H.i(b,{func:1,ret:P.S,args:[H.p(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.aH(a))}return!1},
cp:function(a,b){if(!!a.immutable$list)H.Y(P.B("sort"))
H.ir(a,J.kr(),H.p(a,0))},
af:function(a){return this.cp(a,null)},
w:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aF(a[z],b))return!0
return!1},
k:function(a){return P.cm(a,"[","]")},
gB:function(a){return new J.fG(a,a.length,0,[H.p(a,0)])},
gA:function(a){return H.b5(a)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.be(a,b))
return a[b]},
i:function(a,b,c){H.z(c,H.p(a,0))
if(!!a.immutable$list)H.Y(P.B("indexed set"))
if(b>=a.length||b<0)throw H.c(H.be(a,b))
a[b]=c},
$isw:1,
$asw:I.bf,
$isl:1,
$isa:1,
p:{
hl:function(a,b){return J.co(H.k(a,[b]))},
co:function(a){H.bF(a)
a.fixed$length=Array
return a},
lP:[function(a,b){return J.f5(H.ex(a,"$isX"),H.ex(b,"$isX"))},"$2","kr",8,0,30]}},
lQ:{"^":"bp;$ti"},
fG:{"^":"b;a,b,c,0d,$ti",
sbb:function(a){this.d=H.z(a,H.p(this,0))},
gC:function(a){return this.d},
v:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.M(z))
x=this.c
if(x>=y){this.sbb(null)
return!1}this.sbb(z[x]);++this.c
return!0},
$isb_:1},
bq:{"^":"h;",
L:function(a,b){var z
H.cM(b)
if(typeof b!=="number")throw H.c(H.bd(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gac(b)
if(this.gac(a)===z)return 0
if(this.gac(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gac:function(a){return a===0?1/a<0:a<0},
c1:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.B(""+a+".toInt()"))},
dz:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.c(P.B(""+a+".ceil()"))},
dA:function(a,b,c){if(this.L(b,c)>0)throw H.c(H.bd(b))
if(this.L(a,b)<0)return b
if(this.L(a,c)>0)return c
return a},
e4:function(a,b){var z
if(b>20)throw H.c(P.bU(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gac(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA:function(a){return a&0x1FFFFFFF},
cA:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bk(a,b)},
V:function(a,b){return(a|0)===a?a/b|0:this.bk(a,b)},
bk:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.B("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
bi:function(a,b){var z
if(a>0)z=this.dh(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dh:function(a,b){return b>31?0:a>>>b},
T:function(a,b){if(typeof b!=="number")throw H.c(H.bd(b))
return a>b},
$isX:1,
$asX:function(){return[P.G]},
$isal:1,
$isG:1},
ds:{"^":"bq;",$isF:1},
dr:{"^":"bq;"},
br:{"^":"h;",
al:function(a,b){if(b>=a.length)throw H.c(H.be(a,b))
return a.charCodeAt(b)},
H:function(a,b){H.v(b)
if(typeof b!=="string")throw H.c(P.d2(b,null,null))
return a+b},
cr:function(a,b,c){var z
if(c>a.length)throw H.c(P.bU(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cq:function(a,b){return this.cr(a,b,0)},
ct:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bV(b,null,null))
if(b>c)throw H.c(P.bV(b,null,null))
if(c>a.length)throw H.c(P.bV(c,null,null))
return a.substring(b,c)},
cs:function(a,b){return this.ct(a,b,null)},
e3:function(a){return a.toLowerCase()},
dD:function(a,b,c){if(c>a.length)throw H.c(P.bU(c,0,a.length,null,null))
return H.l1(a,b,c)},
L:function(a,b){var z
H.v(b)
if(typeof b!=="string")throw H.c(H.bd(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.c(H.be(a,b))
return a[b]},
$isw:1,
$asw:I.bf,
$isX:1,
$asX:function(){return[P.d]},
$ishZ:1,
$isd:1}}],["","",,H,{"^":"",
cn:function(){return new P.cy("No element")},
hk:function(){return new P.cy("Too many elements")},
ir:function(a,b,c){H.t(a,"$isa",[c],"$asa")
H.i(b,{func:1,ret:P.F,args:[c,c]})
H.bv(a,0,J.aV(a)-1,b,c)},
bv:function(a,b,c,d,e){H.t(a,"$isa",[e],"$asa")
H.i(d,{func:1,ret:P.F,args:[e,e]})
if(c-b<=32)H.iq(a,b,c,d,e)
else H.ip(a,b,c,d,e)},
iq:function(a,b,c,d,e){var z,y,x,w,v
H.t(a,"$isa",[e],"$asa")
H.i(d,{func:1,ret:P.F,args:[e,e]})
for(z=b+1,y=J.aQ(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.a8(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
ip:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.t(a,"$isa",[a2],"$asa")
H.i(a1,{func:1,ret:P.F,args:[a2,a2]})
z=C.e.V(a0-b+1,6)
y=b+z
x=a0-z
w=C.e.V(b+a0,2)
v=w-z
u=w+z
t=J.aQ(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.a8(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.a8(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.a8(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.a8(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a8(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.a8(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.a8(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.a8(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a8(a1.$2(p,o),0)){n=o
o=p
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,a0))
m=b+1
l=a0-1
if(J.aF(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a3()
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
if(typeof e!=="number")return e.a3()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.T()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.T()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a3()
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
H.bv(a,b,m-2,a1,a2)
H.bv(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aF(a1.$2(t.h(a,m),r),0);)++m
for(;J.aF(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a3()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.bv(a,m,l,a1,a2)}else H.bv(a,m,l,a1,a2)},
de:{"^":"l;"},
bT:{"^":"de;$ti",
gB:function(a){return new H.dv(this,this.gj(this),0,[H.cJ(this,"bT",0)])},
aF:function(a,b){return this.cv(0,H.i(b,{func:1,ret:P.S,args:[H.cJ(this,"bT",0)]}))}},
dv:{"^":"b;a,b,c,0d,$ti",
sb5:function(a){this.d=H.z(a,H.p(this,0))},
gC:function(a){return this.d},
v:function(){var z,y,x,w
z=this.a
y=J.aQ(z)
x=y.gj(z)
if(this.b!==x)throw H.c(P.aH(z))
w=this.c
if(w>=x){this.sb5(null)
return!1}this.sb5(y.u(z,w));++this.c
return!0},
$isb_:1},
hC:{"^":"bT;a,b,$ti",
gj:function(a){return J.aV(this.a)},
u:function(a,b){return this.b.$1(J.fe(this.a,b))},
$asbT:function(a,b){return[b]},
$asl:function(a,b){return[b]}},
dR:{"^":"l;a,b,$ti",
gB:function(a){return new H.iN(J.bL(this.a),this.b,this.$ti)}},
iN:{"^":"b_;a,b,$ti",
v:function(){var z,y
for(z=this.a,y=this.b;z.v();)if(y.$1(z.gC(z)))return!0
return!1},
gC:function(a){var z=this.a
return z.gC(z)}},
bS:{"^":"b;$ti"}}],["","",,H,{"^":"",
aE:function(a){var z,y
z=H.v(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kI:function(a){return init.types[H.N(a)]},
kT:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.C(a).$isx},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bk(a)
if(typeof z!=="string")throw H.c(H.bd(a))
return z},
b5:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b6:function(a){return H.i1(a)+H.c0(H.am(a),0,null)},
i1:function(a){var z,y,x,w,v,u,t,s,r
z=J.C(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.L||!!z.$isb9){u=C.A(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aE(w.length>1&&C.h.al(w,0)===36?C.h.cs(w,1):w)},
aJ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
i8:function(a){var z=H.aJ(a).getFullYear()+0
return z},
i6:function(a){var z=H.aJ(a).getMonth()+1
return z},
i2:function(a){var z=H.aJ(a).getDate()+0
return z},
i3:function(a){var z=H.aJ(a).getHours()+0
return z},
i5:function(a){var z=H.aJ(a).getMinutes()+0
return z},
i7:function(a){var z=H.aJ(a).getSeconds()+0
return z},
i4:function(a){var z=H.aJ(a).getMilliseconds()+0
return z},
bE:function(a){throw H.c(H.bd(a))},
n:function(a,b){if(a==null)J.aV(a)
throw H.c(H.be(a,b))},
be:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aG(!0,b,"index",null)
z=H.N(J.aV(a))
if(!(b<0)){if(typeof z!=="number")return H.bE(z)
y=b>=z}else y=!0
if(y)return P.H(b,a,"index",null,z)
return P.bV(b,"index",null)},
bd:function(a){return new P.aG(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.cw()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eA})
z.name=""}else z.toString=H.eA
return z},
eA:function(){return J.bk(this.dartException)},
Y:function(a){throw H.c(a)},
M:function(a){throw H.c(P.aH(a))},
Z:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.l3(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.bi(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cq(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dC(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.eH()
u=$.eI()
t=$.eJ()
s=$.eK()
r=$.eN()
q=$.eO()
p=$.eM()
$.eL()
o=$.eQ()
n=$.eP()
m=v.J(y)
if(m!=null)return z.$1(H.cq(H.v(y),m))
else{m=u.J(y)
if(m!=null){m.method="call"
return z.$1(H.cq(H.v(y),m))}else{m=t.J(y)
if(m==null){m=s.J(y)
if(m==null){m=r.J(y)
if(m==null){m=q.J(y)
if(m==null){m=p.J(y)
if(m==null){m=s.J(y)
if(m==null){m=o.J(y)
if(m==null){m=n.J(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dC(H.v(y),m))}}return z.$1(new H.iK(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dH()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aG(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dH()
return a},
aR:function(a){var z
if(a==null)return new H.e8(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.e8(a)},
kE:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
kS:function(a,b,c,d,e,f){H.f(a,"$isbn")
switch(H.N(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.di("Unsupported number of arguments for wrapped closure"))},
ak:function(a,b){var z
H.N(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kS)
a.$identity=z
return z},
fP:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.C(d).$isa){z.$reflectionInfo=d
x=H.ic(z).r}else x=d
w=e?Object.create(new H.is().constructor.prototype):Object.create(new H.ch(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a9
if(typeof u!=="number")return u.H()
$.a9=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.d7(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kI,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.d5:H.ci
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.c("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.d7(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
fM:function(a,b,c,d){var z=H.ci
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
d7:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fO(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fM(y,!w,z,b)
if(y===0){w=$.a9
if(typeof w!=="number")return w.H()
$.a9=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aW
if(v==null){v=H.bP("self")
$.aW=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a9
if(typeof w!=="number")return w.H()
$.a9=w+1
t+=w
w="return function("+t+"){return this."
v=$.aW
if(v==null){v=H.bP("self")
$.aW=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fN:function(a,b,c,d){var z,y
z=H.ci
y=H.d5
switch(b?-1:a){case 0:throw H.c(H.ij("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fO:function(a,b){var z,y,x,w,v,u,t,s
z=$.aW
if(z==null){z=H.bP("self")
$.aW=z}y=$.d4
if(y==null){y=H.bP("receiver")
$.d4=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fN(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.a9
if(typeof y!=="number")return y.H()
$.a9=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.a9
if(typeof y!=="number")return y.H()
$.a9=y+1
return new Function(z+y+"}")()},
cH:function(a,b,c,d,e,f,g){return H.fP(a,b,H.N(c),d,!!e,!!f,g)},
v:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a5(a,"String"))},
eo:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a5(a,"double"))},
cM:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a5(a,"num"))},
c2:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a5(a,"bool"))},
N:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a5(a,"int"))},
cN:function(a,b){throw H.c(H.a5(a,H.aE(H.v(b).substring(3))))},
l_:function(a,b){throw H.c(H.d6(a,H.aE(H.v(b).substring(3))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.C(a)[b])return a
H.cN(a,b)},
an:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.C(a)[b]
else z=!0
if(z)return a
H.l_(a,b)},
ex:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.C(a)[b])return a
H.cN(a,b)},
bF:function(a){if(a==null)return a
if(!!J.C(a).$isa)return a
throw H.c(H.a5(a,"List<dynamic>"))},
kU:function(a,b){var z
if(a==null)return a
z=J.C(a)
if(!!z.$isa)return a
if(z[b])return a
H.cN(a,b)},
cI:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.N(z)]
else return a.$S()}return},
bC:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cI(J.C(a))
if(z==null)return!1
return H.ee(z,null,b,null)},
i:function(a,b){var z,y
if(a==null)return a
if($.cD)return a
$.cD=!0
try{if(H.bC(a,b))return a
z=H.bG(b)
y=H.a5(a,z)
throw H.c(y)}finally{$.cD=!1}},
bg:function(a,b){if(a!=null&&!H.cG(a,b))H.Y(H.a5(a,H.bG(b)))
return a},
ej:function(a){var z,y
z=J.C(a)
if(!!z.$ism){y=H.cI(z)
if(y!=null)return H.bG(y)
return"Closure"}return H.b6(a)},
l2:function(a){throw H.c(new P.fW(H.v(a)))},
et:function(a){return init.getIsolateTag(a)},
k:function(a,b){a.$ti=b
return a},
am:function(a){if(a==null)return
return a.$ti},
ne:function(a,b,c){return H.aT(a["$as"+H.e(c)],H.am(b))},
bh:function(a,b,c,d){var z
H.v(c)
H.N(d)
z=H.aT(a["$as"+H.e(c)],H.am(b))
return z==null?null:z[d]},
cJ:function(a,b,c){var z
H.v(b)
H.N(c)
z=H.aT(a["$as"+H.e(b)],H.am(a))
return z==null?null:z[c]},
p:function(a,b){var z
H.N(b)
z=H.am(a)
return z==null?null:z[b]},
bG:function(a){return H.aD(a,null)},
aD:function(a,b){var z,y
H.t(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aE(a[0].builtin$cls)+H.c0(a,1,b)
if(typeof a=="function")return H.aE(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.N(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.n(b,y)
return H.e(b[y])}if('func' in a)return H.kq(a,b)
if('futureOr' in a)return"FutureOr<"+H.aD("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kq:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
H.t(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.k([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.n(b,r)
t=C.h.H(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.aD(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aD(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aD(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aD(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kD(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.v(z[l])
n=n+m+H.aD(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
c0:function(a,b,c){var z,y,x,w,v,u
H.t(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.cz("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aD(u,c)}return"<"+z.k(0)+">"},
kH:function(a){var z,y,x,w
z=J.C(a)
if(!!z.$ism){y=H.cI(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.am(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aT:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aj:function(a,b,c,d){var z,y
H.v(b)
H.bF(c)
H.v(d)
if(a==null)return!1
z=H.am(a)
y=J.C(a)
if(y[b]==null)return!1
return H.em(H.aT(y[d],z),null,c,null)},
bH:function(a,b,c,d){H.v(b)
H.bF(c)
H.v(d)
if(a==null)return a
if(H.aj(a,b,c,d))return a
throw H.c(H.d6(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aE(b.substring(3))+H.c0(c,0,null),init.mangledGlobalNames)))},
t:function(a,b,c,d){H.v(b)
H.bF(c)
H.v(d)
if(a==null)return a
if(H.aj(a,b,c,d))return a
throw H.c(H.a5(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aE(b.substring(3))+H.c0(c,0,null),init.mangledGlobalNames)))},
em:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a0(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a0(a[y],b,c[y],d))return!1
return!0},
nc:function(a,b,c){return a.apply(b,H.aT(J.C(b)["$as"+H.e(c)],H.am(b)))},
ev:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="A"||a===-1||a===-2||H.ev(z)}return!1},
cG:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="A"||b===-1||b===-2||H.ev(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cG(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bC(a,b)}z=J.C(a).constructor
y=H.am(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a0(z,null,b,null)},
z:function(a,b){if(a!=null&&!H.cG(a,b))throw H.c(H.a5(a,H.bG(b)))
return a},
a0:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a0(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="A")return!0
if('func' in c)return H.ee(a,b,c,d)
if('func' in a)return c.builtin$cls==="bn"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a0("type" in a?a.type:null,b,x,d)
else if(H.a0(a,b,x,d))return!0
else{if(!('$is'+"aa" in y.prototype))return!1
w=y.prototype["$as"+"aa"]
v=H.aT(w,z?a.slice(1):null)
return H.a0(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.em(H.aT(r,z),b,u,d)},
ee:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a0(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.a0(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a0(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a0(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kZ(m,b,l,d)},
kZ:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a0(c[w],d,a[w],b))return!1}return!0},
nd:function(a,b,c){Object.defineProperty(a,H.v(b),{value:c,enumerable:false,writable:true,configurable:true})},
kV:function(a){var z,y,x,w,v,u
z=H.v($.eu.$1(a))
y=$.c3[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c6[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.v($.el.$2(a,z))
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
return u.i}if(v==="+")return H.ey(a,x)
if(v==="*")throw H.c(P.cB(z))
if(init.leafTags[z]===true){u=H.c7(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ey(a,x)},
ey:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cL(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c7:function(a){return J.cL(a,!1,null,!!a.$isx)},
kY:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c7(z)
else return J.cL(z,c,null,null)},
kQ:function(){if(!0===$.cK)return
$.cK=!0
H.kR()},
kR:function(){var z,y,x,w,v,u,t,s
$.c3=Object.create(null)
$.c6=Object.create(null)
H.kM()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.ez.$1(v)
if(u!=null){t=H.kY(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kM:function(){var z,y,x,w,v,u,t
z=C.P()
z=H.aP(C.M,H.aP(C.R,H.aP(C.z,H.aP(C.z,H.aP(C.Q,H.aP(C.N,H.aP(C.O(C.A),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eu=new H.kN(v)
$.el=new H.kO(u)
$.ez=new H.kP(t)},
aP:function(a,b){return a(b)||b},
l1:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
ib:{"^":"b;a,b,c,d,e,f,r,0x",p:{
ic:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.co(z)
y=z[0]
x=z[1]
return new H.ib(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iF:{"^":"b;a,b,c,d,e,f",
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
ac:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.k([],[P.d])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iF(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bX:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dO:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hX:{"^":"O;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dC:function(a,b){return new H.hX(a,b==null?null:b.method)}}},
ho:{"^":"O;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
cq:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.ho(a,y,z?null:b.receiver)}}},
iK:{"^":"O;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
l3:{"^":"m:9;a",
$1:function(a){if(!!J.C(a).$isO)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
e8:{"^":"b;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa4:1},
m:{"^":"b;",
k:function(a){return"Closure '"+H.b6(this).trim()+"'"},
gcg:function(){return this},
$isbn:1,
gcg:function(){return this}},
dJ:{"^":"m;"},
is:{"^":"dJ;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aE(z)+"'"}},
ch:{"^":"dJ;a,b,c,d",
D:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ch))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gA:function(a){var z,y
z=this.c
if(z==null)y=H.b5(this.a)
else y=typeof z!=="object"?J.ao(z):H.b5(z)
return(y^H.b5(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.b6(z)+"'")},
p:{
ci:function(a){return a.a},
d5:function(a){return a.c},
bP:function(a){var z,y,x,w,v
z=new H.ch("self","target","receiver","name")
y=J.co(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iG:{"^":"O;a",
k:function(a){return this.a},
p:{
a5:function(a,b){return new H.iG("TypeError: "+P.bQ(a)+": type '"+H.ej(a)+"' is not a subtype of type '"+b+"'")}}},
fK:{"^":"O;a",
k:function(a){return this.a},
p:{
d6:function(a,b){return new H.fK("CastError: "+P.bQ(a)+": type '"+H.ej(a)+"' is not a subtype of type '"+b+"'")}}},
ii:{"^":"O;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
ij:function(a){return new H.ii(a)}}},
dP:{"^":"b;a,0b,0c,0d",
gaa:function(){var z=this.b
if(z==null){z=H.bG(this.a)
this.b=z}return z},
k:function(a){return this.gaa()},
gA:function(a){var z=this.d
if(z==null){z=C.h.gA(this.gaa())
this.d=z}return z},
D:function(a,b){if(b==null)return!1
return b instanceof H.dP&&this.gaa()===b.gaa()}},
dt:{"^":"dw;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gF:function(a){return new H.ar(this,[H.p(this,0)])},
ab:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cY(z,b)}else{y=this.dR(b)
return y}},
dR:function(a){var z=this.d
if(z==null)return!1
return this.az(this.as(z,J.ao(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a7(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a7(w,b)
x=y==null?null:y.b
return x}else return this.dS(b)},
dS:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.as(z,J.ao(a)&0x3ffffff)
x=this.az(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.z(b,H.p(this,0))
H.z(c,H.p(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.at()
this.b=z}this.b7(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.at()
this.c=y}this.b7(y,b,c)}else{x=this.d
if(x==null){x=this.at()
this.d=x}w=J.ao(b)&0x3ffffff
v=this.as(x,w)
if(v==null)this.av(x,w,[this.au(b,c)])
else{u=this.az(v,b)
if(u>=0)v[u].b=c
else v.push(this.au(b,c))}}},
E:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[H.p(this,0),H.p(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aH(this))
z=z.c}},
b7:function(a,b,c){var z
H.z(b,H.p(this,0))
H.z(c,H.p(this,1))
z=this.a7(a,b)
if(z==null)this.av(a,b,this.au(b,c))
else z.b=c},
bf:function(){this.r=this.r+1&67108863},
au:function(a,b){var z,y
z=new H.ht(H.z(a,H.p(this,0)),H.z(b,H.p(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bf()
return z},
az:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aF(a[y].a,b))return y
return-1},
k:function(a){return P.dx(this)},
a7:function(a,b){return a[b]},
as:function(a,b){return a[b]},
av:function(a,b,c){a[b]=c},
cZ:function(a,b){delete a[b]},
cY:function(a,b){return this.a7(a,b)!=null},
at:function(){var z=Object.create(null)
this.av(z,"<non-identifier-key>",z)
this.cZ(z,"<non-identifier-key>")
return z},
$isdu:1},
ht:{"^":"b;a,b,0c,0d"},
ar:{"^":"de;a,$ti",
gj:function(a){return this.a.a},
gB:function(a){var z,y
z=this.a
y=new H.hu(z,z.r,this.$ti)
y.c=z.e
return y}},
hu:{"^":"b;a,b,0c,0d,$ti",
sb6:function(a){this.d=H.z(a,H.p(this,0))},
gC:function(a){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aH(z))
else{z=this.c
if(z==null){this.sb6(null)
return!1}else{this.sb6(z.a)
this.c=this.c.c
return!0}}},
$isb_:1},
kN:{"^":"m:9;a",
$1:function(a){return this.a(a)}},
kO:{"^":"m:22;a",
$2:function(a,b){return this.a(a,b)}},
kP:{"^":"m:19;a",
$1:function(a){return this.a(H.v(a))}}}],["","",,H,{"^":"",
kD:function(a){return J.hl(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
c8:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
c_:function(a){var z,y
if(!!J.C(a).$isw)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.i(z,y,a[y])
return z},
ad:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.be(b,a))},
dz:{"^":"h;",$isdz:1,"%":"ArrayBuffer"},
cu:{"^":"h;",$iscu:1,$isiH:1,"%":"DataView;ArrayBufferView;ct|e2|e3|dA|e4|e5|at"},
ct:{"^":"cu;",
gj:function(a){return a.length},
$isw:1,
$asw:I.bf,
$isx:1,
$asx:I.bf},
dA:{"^":"e3;",
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
i:function(a,b,c){H.eo(c)
H.ad(b,a,a.length)
a[b]=c},
$asbS:function(){return[P.al]},
$asq:function(){return[P.al]},
$isl:1,
$asl:function(){return[P.al]},
$isa:1,
$asa:function(){return[P.al]},
"%":"Float64Array"},
at:{"^":"e5;",
i:function(a,b,c){H.N(c)
H.ad(b,a,a.length)
a[b]=c},
$asbS:function(){return[P.F]},
$asq:function(){return[P.F]},
$isl:1,
$asl:function(){return[P.F]},
$isa:1,
$asa:function(){return[P.F]}},
hO:{"^":"dA;",$isah:1,"%":"Float32Array"},
lZ:{"^":"at;",
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":"Int16Array"},
m_:{"^":"at;",
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
$ishi:1,
"%":"Int32Array"},
m0:{"^":"at;",
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":"Int8Array"},
m1:{"^":"at;",
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hP:{"^":"at;",
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
$ismN:1,
"%":"Uint32Array"},
m2:{"^":"at;",
gj:function(a){return a.length},
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
m3:{"^":"at;",
gj:function(a){return a.length},
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
e2:{"^":"ct+q;"},
e3:{"^":"e2+bS;"},
e4:{"^":"ct+q;"},
e5:{"^":"e4+bS;"}}],["","",,P,{"^":"",
iR:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kx()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.ak(new P.iT(z),1)).observe(y,{childList:true})
return new P.iS(z,y,x)}else if(self.setImmediate!=null)return P.ky()
return P.kz()},
mW:[function(a){self.scheduleImmediate(H.ak(new P.iU(H.i(a,{func:1,ret:-1})),0))},"$1","kx",4,0,5],
mX:[function(a){self.setImmediate(H.ak(new P.iV(H.i(a,{func:1,ret:-1})),0))},"$1","ky",4,0,5],
mY:[function(a){H.i(a,{func:1,ret:-1})
P.k7(0,a)},"$1","kz",4,0,5],
ef:function(a,b){if(H.bC(a,{func:1,args:[P.b,P.a4]})){b.toString
return H.i(a,{func:1,ret:null,args:[P.b,P.a4]})}if(H.bC(a,{func:1,args:[P.b]})){b.toString
return H.i(a,{func:1,ret:null,args:[P.b]})}throw H.c(P.d2(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kt:function(){var z,y
for(;z=$.aN,z!=null;){$.bc=null
y=z.b
$.aN=y
if(y==null)$.bb=null
z.a.$0()}},
na:[function(){$.cE=!0
try{P.kt()}finally{$.bc=null
$.cE=!1
if($.aN!=null)$.cP().$1(P.en())}},"$0","en",0,0,1],
ei:function(a){var z=new P.dT(H.i(a,{func:1,ret:-1}))
if($.aN==null){$.bb=z
$.aN=z
if(!$.cE)$.cP().$1(P.en())}else{$.bb.b=z
$.bb=z}},
kw:function(a){var z,y,x
H.i(a,{func:1,ret:-1})
z=$.aN
if(z==null){P.ei(a)
$.bc=$.bb
return}y=new P.dT(a)
x=$.bc
if(x==null){y.b=z
$.bc=y
$.aN=y}else{y.b=x.b
x.b=y
$.bc=y
if(y.b==null)$.bb=y}},
l0:function(a){var z,y
z={func:1,ret:-1}
H.i(a,z)
y=$.D
if(C.d===y){P.aO(null,null,C.d,a)
return}y.toString
P.aO(null,null,y,H.i(y.br(a),z))},
kp:function(a,b,c){a.dv(0)
b.a6(c)},
c1:function(a,b,c,d,e){var z={}
z.a=d
P.kw(new P.ku(z,e))},
eg:function(a,b,c,d,e){var z,y
H.i(d,{func:1,ret:e})
y=$.D
if(y===c)return d.$0()
$.D=c
z=y
try{y=d.$0()
return y}finally{$.D=z}},
eh:function(a,b,c,d,e,f,g){var z,y
H.i(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.D
if(y===c)return d.$1(e)
$.D=c
z=y
try{y=d.$1(e)
return y}finally{$.D=z}},
kv:function(a,b,c,d,e,f,g,h,i){var z,y
H.i(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.D
if(y===c)return d.$2(e,f)
$.D=c
z=y
try{y=d.$2(e,f)
return y}finally{$.D=z}},
aO:function(a,b,c,d){var z
H.i(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.br(d):c.ds(d,-1)
P.ei(d)},
iT:{"^":"m:7;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iS:{"^":"m:18;a,b,c",
$1:function(a){var z,y
this.a.a=H.i(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iU:{"^":"m:0;a",
$0:function(){this.a.$0()}},
iV:{"^":"m:0;a",
$0:function(){this.a.$0()}},
k6:{"^":"b;a,0b,c",
cR:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.ak(new P.k8(this,b),0),a)
else throw H.c(P.B("`setTimeout()` not found."))},
p:{
k7:function(a,b){var z=new P.k6(!0,0)
z.cR(a,b)
return z}}},
k8:{"^":"m:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
dX:{"^":"b;$ti",
dC:function(a,b){if(a==null)a=new P.cw()
if(this.a.a!==0)throw H.c(P.bw("Future already completed"))
$.D.toString
this.P(a,b)},
dB:function(a){return this.dC(a,null)}},
dU:{"^":"dX;a,$ti",
ax:function(a,b){var z
H.bg(b,{futureOr:1,type:H.p(this,0)})
z=this.a
if(z.a!==0)throw H.c(P.bw("Future already completed"))
z.cU(b)},
P:function(a,b){this.a.cV(a,b)}},
k1:{"^":"dX;a,$ti",
P:function(a,b){this.a.P(a,b)}},
aC:{"^":"b;0a,b,c,d,e,$ti",
dU:function(a){if(this.c!==6)return!0
return this.b.b.aC(H.i(this.d,{func:1,ret:P.S,args:[P.b]}),a.a,P.S,P.b)},
dQ:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.p(this,1)}
w=this.b.b
if(H.bC(z,{func:1,args:[P.b,P.a4]}))return H.bg(w.e_(z,a.a,a.b,null,y,P.a4),x)
else return H.bg(w.aC(H.i(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
R:{"^":"b;bj:a<,b,0de:c<,$ti",
c0:function(a,b,c){var z,y,x,w
z=H.p(this,0)
H.i(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.D
if(y!==C.d){y.toString
H.i(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ef(b,y)}H.i(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.R(0,$.D,[c])
w=b==null?1:3
this.aj(new P.aC(x,w,a,b,[z,c]))
return x},
a1:function(a,b){return this.c0(a,null,b)},
dw:function(a,b){var z,y
z=$.D
y=new P.R(0,z,this.$ti)
if(z!==C.d)a=P.ef(a,z)
z=H.p(this,0)
this.aj(new P.aC(y,2,b,a,[z,z]))
return y},
bx:function(a){return this.dw(a,null)},
aj:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isaC")
this.c=a}else{if(z===2){y=H.f(this.c,"$isR")
z=y.a
if(z<4){y.aj(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.aO(null,null,z,H.i(new P.jb(this,a),{func:1,ret:-1}))}},
bg:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isaC")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isR")
y=u.a
if(y<4){u.bg(a)
return}this.a=y
this.c=u.c}z.a=this.a9(a)
y=this.b
y.toString
P.aO(null,null,y,H.i(new P.ji(z,this),{func:1,ret:-1}))}},
a8:function(){var z=H.f(this.c,"$isaC")
this.c=null
return this.a9(z)},
a9:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
a6:function(a){var z,y,x
z=H.p(this,0)
H.bg(a,{futureOr:1,type:z})
y=this.$ti
if(H.aj(a,"$isaa",y,"$asaa"))if(H.aj(a,"$isR",y,null))P.bY(a,this)
else P.dY(a,this)
else{x=this.a8()
H.z(a,z)
this.a=4
this.c=a
P.aM(this,x)}},
P:function(a,b){var z
H.f(b,"$isa4")
z=this.a8()
this.a=8
this.c=new P.Q(a,b)
P.aM(this,z)},
cU:function(a){var z
H.bg(a,{futureOr:1,type:H.p(this,0)})
if(H.aj(a,"$isaa",this.$ti,"$asaa")){this.cW(a)
return}this.a=1
z=this.b
z.toString
P.aO(null,null,z,H.i(new P.jd(this,a),{func:1,ret:-1}))},
cW:function(a){var z=this.$ti
H.t(a,"$isaa",z,"$asaa")
if(H.aj(a,"$isR",z,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.aO(null,null,z,H.i(new P.jh(this,a),{func:1,ret:-1}))}else P.bY(a,this)
return}P.dY(a,this)},
cV:function(a,b){var z
this.a=1
z=this.b
z.toString
P.aO(null,null,z,H.i(new P.jc(this,a,b),{func:1,ret:-1}))},
$isaa:1,
p:{
dY:function(a,b){var z,y,x
b.a=1
try{a.c0(new P.je(b),new P.jf(b),null)}catch(x){z=H.Z(x)
y=H.aR(x)
P.l0(new P.jg(b,z,y))}},
bY:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isR")
if(z>=4){y=b.a8()
b.a=a.a
b.c=a.c
P.aM(b,y)}else{y=H.f(b.c,"$isaC")
b.a=2
b.c=a
a.bg(y)}},
aM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isQ")
y=y.b
u=v.a
t=v.b
y.toString
P.c1(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.f(r,"$isQ")
y=y.b
u=r.a
t=r.b
y.toString
P.c1(null,null,y,u,t)
return}o=$.D
if(o!=q)$.D=q
else o=null
y=b.c
if(y===8)new P.jl(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jk(x,b,r).$0()}else if((y&2)!==0)new P.jj(z,x,b).$0()
if(o!=null)$.D=o
y=x.b
if(!!J.C(y).$isaa){if(y.a>=4){n=H.f(t.c,"$isaC")
t.c=null
b=t.a9(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.bY(y,t)
return}}m=b.b
n=H.f(m.c,"$isaC")
m.c=null
b=m.a9(n)
y=x.a
u=x.b
if(!y){H.z(u,H.p(m,0))
m.a=4
m.c=u}else{H.f(u,"$isQ")
m.a=8
m.c=u}z.a=m
y=m}}}},
jb:{"^":"m:0;a,b",
$0:function(){P.aM(this.a,this.b)}},
ji:{"^":"m:0;a,b",
$0:function(){P.aM(this.b,this.a.a)}},
je:{"^":"m:7;a",
$1:function(a){var z=this.a
z.a=0
z.a6(a)}},
jf:{"^":"m:23;a",
$2:function(a,b){H.f(b,"$isa4")
this.a.P(a,b)},
$1:function(a){return this.$2(a,null)}},
jg:{"^":"m:0;a,b,c",
$0:function(){this.a.P(this.b,this.c)}},
jd:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=H.z(this.b,H.p(z,0))
x=z.a8()
z.a=4
z.c=y
P.aM(z,x)}},
jh:{"^":"m:0;a,b",
$0:function(){P.bY(this.b,this.a)}},
jc:{"^":"m:0;a,b,c",
$0:function(){this.a.P(this.b,this.c)}},
jl:{"^":"m:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bX(H.i(w.d,{func:1}),null)}catch(v){y=H.Z(v)
x=H.aR(v)
if(this.d){w=H.f(this.a.a.c,"$isQ").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isQ")
else u.b=new P.Q(y,x)
u.a=!0
return}if(!!J.C(z).$isaa){if(z instanceof P.R&&z.gbj()>=4){if(z.gbj()===8){w=this.b
w.b=H.f(z.gde(),"$isQ")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.a1(new P.jm(t),null)
w.a=!1}}},
jm:{"^":"m:24;a",
$1:function(a){return this.a}},
jk:{"^":"m:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.p(x,0)
v=H.z(this.c,w)
u=H.p(x,1)
this.a.b=x.b.b.aC(H.i(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.Z(t)
y=H.aR(t)
x=this.a
x.b=new P.Q(z,y)
x.a=!0}}},
jj:{"^":"m:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isQ")
w=this.c
if(w.dU(z)&&w.e!=null){v=this.b
v.b=w.dQ(z)
v.a=!1}}catch(u){y=H.Z(u)
x=H.aR(u)
w=H.f(this.a.a.c,"$isQ")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.Q(y,x)
s.a=!0}}},
dT:{"^":"b;a,0b"},
iw:{"^":"b;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.R(0,$.D,[P.F])
z.a=0
x=H.p(this,0)
w=H.i(new P.iA(z,this),{func:1,ret:-1,args:[x]})
H.i(new P.iB(z,y),{func:1,ret:-1})
W.ai(this.a,this.b,w,!1,x)
return y},
gdO:function(a){var z,y,x,w
z={}
y=new P.R(0,$.D,this.$ti)
z.a=null
x=H.p(this,0)
w=H.i(new P.iy(z,this,y),{func:1,ret:-1,args:[x]})
H.i(new P.iz(y),{func:1,ret:-1})
z.a=W.ai(this.a,this.b,w,!1,x)
return y}},
iA:{"^":"m;a,b",
$1:function(a){H.z(a,H.p(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.A,args:[H.p(this.b,0)]}}},
iB:{"^":"m:0;a,b",
$0:function(){this.b.a6(this.a.a)}},
iy:{"^":"m;a,b,c",
$1:function(a){H.z(a,H.p(this.b,0))
P.kp(this.a.a,this.c,a)},
$S:function(){return{func:1,ret:P.A,args:[H.p(this.b,0)]}}},
iz:{"^":"m:0;a",
$0:function(){var z,y,x,w
try{x=H.cn()
throw H.c(x)}catch(w){z=H.Z(w)
y=H.aR(w)
$.D.toString
this.a.P(z,y)}}},
ix:{"^":"b;"},
Q:{"^":"b;a,b",
k:function(a){return H.e(this.a)},
$isO:1},
ke:{"^":"b;",$ismU:1},
ku:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.cw()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.k(0)
throw x}},
jI:{"^":"ke;",
e0:function(a){var z,y,x
H.i(a,{func:1,ret:-1})
try{if(C.d===$.D){a.$0()
return}P.eg(null,null,this,a,-1)}catch(x){z=H.Z(x)
y=H.aR(x)
P.c1(null,null,this,z,H.f(y,"$isa4"))}},
e1:function(a,b,c){var z,y,x
H.i(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.d===$.D){a.$1(b)
return}P.eh(null,null,this,a,b,-1,c)}catch(x){z=H.Z(x)
y=H.aR(x)
P.c1(null,null,this,z,H.f(y,"$isa4"))}},
ds:function(a,b){return new P.jK(this,H.i(a,{func:1,ret:b}),b)},
br:function(a){return new P.jJ(this,H.i(a,{func:1,ret:-1}))},
dt:function(a,b){return new P.jL(this,H.i(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
bX:function(a,b){H.i(a,{func:1,ret:b})
if($.D===C.d)return a.$0()
return P.eg(null,null,this,a,b)},
aC:function(a,b,c,d){H.i(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.D===C.d)return a.$1(b)
return P.eh(null,null,this,a,b,c,d)},
e_:function(a,b,c,d,e,f){H.i(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.D===C.d)return a.$2(b,c)
return P.kv(null,null,this,a,b,c,d,e,f)}},
jK:{"^":"m;a,b,c",
$0:function(){return this.a.bX(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jJ:{"^":"m:1;a,b",
$0:function(){return this.a.e0(this.b)}},
jL:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.e1(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
cr:function(a,b,c){H.bF(a)
return H.t(H.kE(a,new H.dt(0,0,[b,c])),"$isdu",[b,c],"$asdu")},
a_:function(a,b){return new H.dt(0,0,[a,b])},
a2:function(a,b,c,d){return new P.jt(0,0,[d])},
hj:function(a,b,c){var z,y
if(P.cF(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.k([],[P.d])
y=$.bi()
C.a.l(y,a)
try{P.ks(a,z)}finally{if(0>=y.length)return H.n(y,-1)
y.pop()}y=P.dI(b,H.kU(z,"$isl"),", ")+c
return y.charCodeAt(0)==0?y:y},
cm:function(a,b,c){var z,y,x
if(P.cF(a))return b+"..."+c
z=new P.cz(b)
y=$.bi()
C.a.l(y,a)
try{x=z
x.a=P.dI(x.gU(),a,", ")}finally{if(0>=y.length)return H.n(y,-1)
y.pop()}y=z
y.a=y.gU()+c
y=z.gU()
return y.charCodeAt(0)==0?y:y},
cF:function(a){var z,y
for(z=0;y=$.bi(),z<y.length;++z)if(a===y[z])return!0
return!1},
ks:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.t(b,"$isa",[P.d],"$asa")
z=a.gB(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.v())return
w=H.e(z.gC(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.v()){if(x<=5)return
if(0>=b.length)return H.n(b,-1)
v=b.pop()
if(0>=b.length)return H.n(b,-1)
u=b.pop()}else{t=z.gC(z);++x
if(!z.v()){if(x<=4){C.a.l(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.n(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gC(z);++x
for(;z.v();t=s,s=r){r=z.gC(z);++x
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
cs:function(a,b){var z,y,x
z=P.a2(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.M)(a),++x)z.l(0,H.z(a[x],b))
return z},
dx:function(a){var z,y,x
z={}
if(P.cF(a))return"{...}"
y=new P.cz("")
try{C.a.l($.bi(),a)
x=y
x.a=x.gU()+"{"
z.a=!0
J.fh(a,new P.hB(z,y))
z=y
z.a=z.gU()+"}"}finally{z=$.bi()
if(0>=z.length)return H.n(z,-1)
z.pop()}z=y.gU()
return z.charCodeAt(0)==0?z:z},
jt:{"^":"jo;a,0b,0c,0d,0e,0f,r,$ti",
gB:function(a){var z=new P.e1(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
w:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.f(z[b],"$isbB")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.f(y[b],"$isbB")!=null}else return this.cX(b)},
cX:function(a){var z=this.d
if(z==null)return!1
return this.ar(this.bc(z,a),a)>=0},
l:function(a,b){var z,y
H.z(b,H.p(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cC()
this.b=z}return this.b8(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cC()
this.c=y}return this.b8(y,b)}else return this.cS(0,b)},
cS:function(a,b){var z,y,x
H.z(b,H.p(this,0))
z=this.d
if(z==null){z=P.cC()
this.d=z}y=this.ba(b)
x=z[y]
if(x==null)z[y]=[this.an(b)]
else{if(this.ar(x,b)>=0)return!1
x.push(this.an(b))}return!0},
bW:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bh(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bh(this.c,b)
else return this.d7(0,b)},
d7:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bc(z,b)
x=this.ar(y,b)
if(x<0)return!1
this.bl(y.splice(x,1)[0])
return!0},
a0:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.am()}},
b8:function(a,b){H.z(b,H.p(this,0))
if(H.f(a[b],"$isbB")!=null)return!1
a[b]=this.an(b)
return!0},
bh:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isbB")
if(z==null)return!1
this.bl(z)
delete a[b]
return!0},
am:function(){this.r=this.r+1&67108863},
an:function(a){var z,y
z=new P.bB(H.z(a,H.p(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.am()
return z},
bl:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.am()},
ba:function(a){return J.ao(a)&0x3ffffff},
bc:function(a,b){return a[this.ba(b)]},
ar:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aF(a[y].a,b))return y
return-1},
p:{
cC:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bB:{"^":"b;a,0b,0c"},
e1:{"^":"b;a,b,0c,0d,$ti",
sb9:function(a){this.d=H.z(a,H.p(this,0))},
gC:function(a){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aH(z))
else{z=this.c
if(z==null){this.sb9(null)
return!1}else{this.sb9(H.z(z.a,H.p(this,0)))
this.c=this.c.b
return!0}}},
$isb_:1,
p:{
ju:function(a,b,c){var z=new P.e1(a,b,[c])
z.c=a.e
return z}}},
jo:{"^":"ik;"},
hv:{"^":"jv;",$isl:1,$isa:1},
q:{"^":"b;$ti",
gB:function(a){return new H.dv(a,this.gj(a),0,[H.bh(this,a,"q",0)])},
u:function(a,b){return this.h(a,b)},
dP:function(a,b,c,d){var z,y,x
H.z(b,d)
H.i(c,{func:1,ret:d,args:[d,H.bh(this,a,"q",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.c(P.aH(a))}return y},
k:function(a){return P.cm(a,"[","]")}},
dw:{"^":"U;"},
hB:{"^":"m:3;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
U:{"^":"b;$ti",
E:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[H.bh(this,a,"U",0),H.bh(this,a,"U",1)]})
for(z=J.bL(this.gF(a));z.v();){y=z.gC(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.aV(this.gF(a))},
k:function(a){return P.dx(a)},
$isJ:1},
il:{"^":"b;$ti",
I:function(a,b){var z
for(z=J.bL(H.t(b,"$isl",this.$ti,"$asl"));z.v();)this.l(0,z.gC(z))},
k:function(a){return P.cm(this,"{","}")},
$isl:1,
$isml:1},
ik:{"^":"il;"},
jv:{"^":"b+q;"}}],["","",,P,{"^":"",
h7:function(a){if(a instanceof H.m)return a.k(0)
return"Instance of '"+H.b6(a)+"'"},
bQ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bk(a)
if(typeof a==="string")return JSON.stringify(a)
return P.h7(a)},
di:function(a){return new P.j8(a)},
ae:function(a){H.c8(H.e(a))},
S:{"^":"b;"},
"+bool":0,
aX:{"^":"b;a,b",
D:function(a,b){if(b==null)return!1
return b instanceof P.aX&&this.a===b.a&&!0},
L:function(a,b){return C.e.L(this.a,H.f(b,"$isaX").a)},
gA:function(a){var z=this.a
return(z^C.e.bi(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.fX(H.i8(this))
y=P.bl(H.i6(this))
x=P.bl(H.i2(this))
w=P.bl(H.i3(this))
v=P.bl(H.i5(this))
u=P.bl(H.i7(this))
t=P.fY(H.i4(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isX:1,
$asX:function(){return[P.aX]},
p:{
fX:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fY:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bl:function(a){if(a>=10)return""+a
return"0"+a}}},
al:{"^":"G;"},
"+double":0,
aY:{"^":"b;a",
T:function(a,b){return C.e.T(this.a,H.f(b,"$isaY").a)},
D:function(a,b){if(b==null)return!1
return b instanceof P.aY&&this.a===b.a},
gA:function(a){return this.a&0x1FFFFFFF},
L:function(a,b){return C.e.L(this.a,H.f(b,"$isaY").a)},
k:function(a){var z,y,x,w,v
z=new P.h4()
y=this.a
if(y<0)return"-"+new P.aY(0-y).k(0)
x=z.$1(C.e.V(y,6e7)%60)
w=z.$1(C.e.V(y,1e6)%60)
v=new P.h3().$1(y%1e6)
return""+C.e.V(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isX:1,
$asX:function(){return[P.aY]},
p:{
dd:function(a,b,c,d,e,f){return new P.aY(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
h3:{"^":"m:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
h4:{"^":"m:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
O:{"^":"b;"},
cw:{"^":"O;",
k:function(a){return"Throw of null."}},
aG:{"^":"O;a,b,c,d",
gap:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gao:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gap()+y+x
if(!this.a)return w
v=this.gao()
u=P.bQ(this.b)
return w+v+": "+u},
p:{
d2:function(a,b,c){return new P.aG(!0,a,b,c)}}},
dD:{"^":"aG;e,f,a,b,c,d",
gap:function(){return"RangeError"},
gao:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bV:function(a,b,c){return new P.dD(null,null,!0,a,b,"Value not in range")},
bU:function(a,b,c,d,e){return new P.dD(b,c,!0,a,d,"Invalid value")}}},
hh:{"^":"aG;e,j:f>,a,b,c,d",
gap:function(){return"RangeError"},
gao:function(){var z,y
z=H.N(this.b)
if(typeof z!=="number")return z.a3()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
H:function(a,b,c,d,e){var z=H.N(e==null?J.aV(b):e)
return new P.hh(b,z,!0,a,c,"Index out of range")}}},
iL:{"^":"O;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
B:function(a){return new P.iL(a)}}},
iJ:{"^":"O;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cB:function(a){return new P.iJ(a)}}},
cy:{"^":"O;a",
k:function(a){return"Bad state: "+this.a},
p:{
bw:function(a){return new P.cy(a)}}},
fQ:{"^":"O;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bQ(z)+"."},
p:{
aH:function(a){return new P.fQ(a)}}},
dH:{"^":"b;",
k:function(a){return"Stack Overflow"},
$isO:1},
fW:{"^":"O;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
j8:{"^":"b;a",
k:function(a){return"Exception: "+this.a}},
bn:{"^":"b;"},
F:{"^":"G;"},
"+int":0,
l:{"^":"b;$ti",
aF:["cv",function(a,b){var z=H.cJ(this,"l",0)
return new H.dR(this,H.i(b,{func:1,ret:P.S,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gB(this)
for(y=0;z.v();)++y
return y},
u:function(a,b){var z,y,x
if(b<0)H.Y(P.bU(b,0,null,"index",null))
for(z=this.gB(this),y=0;z.v();){x=z.gC(z)
if(b===y)return x;++y}throw H.c(P.H(b,this,"index",null,y))},
k:function(a){return P.hj(this,"(",")")}},
b_:{"^":"b;$ti"},
a:{"^":"b;$ti",$isl:1},
"+List":0,
J:{"^":"b;$ti"},
A:{"^":"b;",
gA:function(a){return P.b.prototype.gA.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
G:{"^":"b;",$isX:1,
$asX:function(){return[P.G]}},
"+num":0,
b:{"^":";",
D:function(a,b){return this===b},
gA:function(a){return H.b5(this)},
k:function(a){return"Instance of '"+H.b6(this)+"'"},
toString:function(){return this.k(this)}},
a4:{"^":"b;"},
d:{"^":"b;",$isX:1,
$asX:function(){return[P.d]},
$ishZ:1},
"+String":0,
cz:{"^":"b;U:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dI:function(a,b,c){var z=J.bL(b)
if(!z.v())return a
if(c.length===0){do a+=H.e(z.gC(z))
while(z.v())}else{a+=H.e(z.gC(z))
for(;z.v();)a=a+c+H.e(z.gC(z))}return a}}}}],["","",,W,{"^":"",
h5:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.o).M(z,a,b,c)
y.toString
z=W.u
z=new H.dR(new W.a6(y),H.i(new W.h6(),{func:1,ret:P.S,args:[z]}),[z])
x=z.gB(z)
if(!x.v())H.Y(H.cn())
w=x.gC(x)
if(x.v())H.Y(H.hk())
return H.f(w,"$isT")},
dh:function(a){H.f(a,"$isK")
return"wheel"},
aZ:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fk(a)
if(typeof y==="string")z=a.tagName}catch(x){H.Z(x)}return z},
j5:function(a,b){return document.createElement(a)},
bZ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
e0:function(a,b,c,d){var z,y
z=W.bZ(W.bZ(W.bZ(W.bZ(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
ed:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.j_(a)
if(!!J.C(z).$isK)return z
return}else return H.f(a,"$isK")},
ek:function(a,b){var z
H.i(a,{func:1,ret:-1,args:[b]})
z=$.D
if(z===C.d)return a
return z.dt(a,b)},
L:{"^":"T;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
l4:{"^":"h;0j:length=","%":"AccessibleNodeList"},
fE:{"^":"L;",
k:function(a){return String(a)},
$isfE:1,
"%":"HTMLAnchorElement"},
l5:{"^":"L;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
d3:{"^":"L;",$isd3:1,"%":"HTMLBaseElement"},
cg:{"^":"h;",$iscg:1,"%":";Blob"},
bO:{"^":"L;",$isbO:1,"%":"HTMLBodyElement"},
cj:{"^":"L;0n:height=,0m:width=",
ci:function(a,b,c){var z=this.d1(a,b,P.kB(c,null))
return z},
d1:function(a,b,c){return a.getContext(b,c)},
$iscj:1,
"%":"HTMLCanvasElement"},
la:{"^":"h;",
ae:function(a){return P.a1(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
lb:{"^":"u;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fR:{"^":"ck;",$isfR:1,"%":"CSSNumericValue|CSSUnitValue"},
ld:{"^":"fU;0j:length=","%":"CSSPerspective"},
ap:{"^":"h;",$isap:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fS:{"^":"iY;0j:length=",
aK:function(a,b){var z=this.d2(a,this.ak(a,b))
return z==null?"":z},
ak:function(a,b){var z,y
z=$.eD()
y=z[b]
if(typeof y==="string")return y
y=this.di(a,b)
z[b]=y
return y},
di:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fZ()+b
if(z in a)return z
return b},
d2:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fT:{"^":"b;",
gn:function(a){return this.aK(a,"height")},
gm:function(a){return this.aK(a,"width")}},
ck:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fU:{"^":"h;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
lf:{"^":"ck;0j:length=","%":"CSSTransformValue"},
lg:{"^":"ck;0j:length=","%":"CSSUnparsedValue"},
li:{"^":"h;0j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
h_:{"^":"L;","%":"HTMLDivElement"},
h0:{"^":"u;",
dl:function(a,b){return a.adoptNode(b)},
cj:function(a,b){return a.getElementById(b)},
dW:function(a,b){return a.querySelector(b)},
gbR:function(a){return new W.bz(a,"mousedown",!1,[W.V])},
gbS:function(a){return new W.bz(a,"mousemove",!1,[W.V])},
gbT:function(a){return new W.bz(a,"mouseup",!1,[W.V])},
gbU:function(a){return new W.bz(a,H.v(W.dh(a)),!1,[W.aL])},
"%":"XMLDocument;Document"},
lj:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
h1:{"^":"h;",
dI:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
lk:{"^":"j1;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.t(c,"$isW",[P.G],"$asW")
throw H.c(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[[P.W,P.G]]},
$isx:1,
$asx:function(){return[[P.W,P.G]]},
$asq:function(){return[[P.W,P.G]]},
$isl:1,
$asl:function(){return[[P.W,P.G]]},
$isa:1,
$asa:function(){return[[P.W,P.G]]},
$asr:function(){return[[P.W,P.G]]},
"%":"ClientRectList|DOMRectList"},
h2:{"^":"h;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
D:function(a,b){var z
if(b==null)return!1
if(!H.aj(b,"$isW",[P.G],"$asW"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.j(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gA:function(a){return W.e0(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isW:1,
$asW:function(){return[P.G]},
"%":";DOMRectReadOnly"},
ll:{"^":"j3;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.v(c)
throw H.c(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
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
$asr:function(){return[P.d]},
"%":"DOMStringList"},
lm:{"^":"h;0j:length=","%":"DOMTokenList"},
T:{"^":"u;0e2:tagName=",
gdq:function(a){return new W.j4(a)},
k:function(a){return a.localName},
M:["ag",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dg
if(z==null){z=H.k([],[W.ab])
y=new W.dB(z)
C.a.l(z,W.dZ(null))
C.a.l(z,W.e9())
$.dg=y
d=y}else d=z
z=$.df
if(z==null){z=new W.ec(d)
$.df=z
c=z}else{z.a=d
c=z}}if($.af==null){z=document
y=z.implementation
y=(y&&C.J).dI(y,"")
$.af=y
$.cl=y.createRange()
y=$.af
y.toString
y=y.createElement("base")
H.f(y,"$isd3")
y.href=z.baseURI
z=$.af.head;(z&&C.K).G(z,y)}z=$.af
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.f(y,"$isbO")}z=$.af
if(!!this.$isbO)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.af.body;(z&&C.o).G(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.w(C.U,a.tagName)){z=$.cl;(z&&C.C).cm(z,x)
z=$.cl
w=(z&&C.C).dG(z,b)}else{x.innerHTML=b
w=$.af.createDocumentFragment()
for(z=J.j(w);y=x.firstChild,y!=null;)z.G(w,y)}z=$.af.body
if(x==null?z!=null:x!==z)J.cX(x)
c.aP(w)
C.q.dl(document,w)
return w},function(a,b,c){return this.M(a,b,c,null)},"dH",null,null,"gec",5,5,null],
co:function(a,b,c,d){a.textContent=null
this.G(a,this.M(a,b,c,d))},
cn:function(a,b){return this.co(a,b,null,null)},
Y:function(a,b){return a.getAttribute(b)},
d8:function(a,b){return a.removeAttribute(b)},
gbR:function(a){return new W.by(a,"mousedown",!1,[W.V])},
gbS:function(a){return new W.by(a,"mousemove",!1,[W.V])},
gbT:function(a){return new W.by(a,"mouseup",!1,[W.V])},
gbU:function(a){return new W.by(a,H.v(W.dh(a)),!1,[W.aL])},
$isT:1,
"%":";Element"},
h6:{"^":"m:15;",
$1:function(a){return!!J.C(H.f(a,"$isu")).$isT}},
ln:{"^":"L;0n:height=,0m:width=","%":"HTMLEmbedElement"},
P:{"^":"h;",$isP:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
K:{"^":"h;",
dk:function(a,b,c,d){H.i(c,{func:1,args:[W.P]})
if(c!=null)this.cT(a,b,c,!1)},
cT:function(a,b,c,d){return a.addEventListener(b,H.ak(H.i(c,{func:1,args:[W.P]}),1),!1)},
da:function(a,b,c,d){return a.removeEventListener(b,H.ak(H.i(c,{func:1,args:[W.P]}),1),!1)},
$isK:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;e6|e7|ea|eb"},
ag:{"^":"cg;",$isag:1,"%":"File"},
dk:{"^":"ja;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isag")
throw H.c(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ag]},
$isx:1,
$asx:function(){return[W.ag]},
$asq:function(){return[W.ag]},
$isl:1,
$asl:function(){return[W.ag]},
$isa:1,
$asa:function(){return[W.ag]},
$isdk:1,
$asr:function(){return[W.ag]},
"%":"FileList"},
lE:{"^":"K;0j:length=","%":"FileWriter"},
lH:{"^":"L;0j:length=","%":"HTMLFormElement"},
aq:{"^":"h;",$isaq:1,"%":"Gamepad"},
he:{"^":"L;","%":"HTMLHeadElement"},
lI:{"^":"h;0j:length=","%":"History"},
lJ:{"^":"jq;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isu")
throw H.c(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.u]},
$isx:1,
$asx:function(){return[W.u]},
$asq:function(){return[W.u]},
$isl:1,
$asl:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$asr:function(){return[W.u]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hf:{"^":"h0;","%":"HTMLDocument"},
lK:{"^":"L;0n:height=,0m:width=","%":"HTMLIFrameElement"},
lL:{"^":"h;0n:height=,0m:width=","%":"ImageBitmap"},
dq:{"^":"h;0n:height=,0m:width=",$isdq:1,"%":"ImageData"},
lM:{"^":"L;0n:height=,0m:width=","%":"HTMLImageElement"},
lO:{"^":"L;0n:height=,0m:width=","%":"HTMLInputElement"},
b0:{"^":"dQ;",$isb0:1,"%":"KeyboardEvent"},
hw:{"^":"h;",
k:function(a){return String(a)},
$ishw:1,
"%":"Location"},
hE:{"^":"L;","%":"HTMLAudioElement;HTMLMediaElement"},
lV:{"^":"h;0j:length=","%":"MediaList"},
aI:{"^":"K;",$isaI:1,"%":"MediaStream"},
lW:{"^":"jx;",
h:function(a,b){return P.a1(a.get(H.v(b)))},
E:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a1(y.value[1]))}},
gF:function(a){var z=H.k([],[P.d])
this.E(a,new W.hG(z))
return z},
gj:function(a){return a.size},
$asU:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"MIDIInputMap"},
hG:{"^":"m:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lX:{"^":"jy;",
h:function(a,b){return P.a1(a.get(H.v(b)))},
E:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a1(y.value[1]))}},
gF:function(a){var z=H.k([],[P.d])
this.E(a,new W.hH(z))
return z},
gj:function(a){return a.size},
$asU:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
hH:{"^":"m:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
as:{"^":"h;",$isas:1,"%":"MimeType"},
lY:{"^":"jA;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isas")
throw H.c(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
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
$asr:function(){return[W.as]},
"%":"MimeTypeArray"},
V:{"^":"dQ;",
gbQ:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.b4(a.offsetX,a.offsetY,[P.G])
else{z=a.target
if(!J.C(W.ed(z)).$isT)throw H.c(P.B("offsetX is only supported on elements"))
y=H.f(W.ed(z),"$isT")
z=a.clientX
x=a.clientY
w=[P.G]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.t(new P.b4(u,v,w),"$isb4",w,"$asb4")
if(typeof z!=="number")return z.aT()
if(typeof x!=="number")return x.aT()
return new P.b4(C.r.c1(z-u),C.r.c1(x-v),w)}},
$isV:1,
"%":";DragEvent|MouseEvent"},
hQ:{"^":"hR;",
cl:function(a,b,c){var z,y,x,w
z=W.aI
y=new P.R(0,$.D,[z])
x=new P.dU(y,[z])
w=P.cr(["audio",!1,"video",!0],P.d,null)
if(!a.getUserMedia)a.getUserMedia=a.getUserMedia||a.webkitGetUserMedia||a.mozGetUserMedia||a.msGetUserMedia
this.d3(a,new P.jZ([],[]).aE(w),new W.hS(x),new W.hT(x))
return y},
ck:function(a,b){return this.cl(a,!1,b)},
d3:function(a,b,c,d){H.i(c,{func:1,ret:-1,args:[W.aI]})
H.i(d,{func:1,ret:-1,args:[W.bu]})
return a.getUserMedia(b,H.ak(c,1),H.ak(d,1))},
"%":"Navigator"},
hS:{"^":"m:10;a",
$1:function(a){this.a.ax(0,H.f(a,"$isaI"))}},
hT:{"^":"m:31;a",
$1:function(a){this.a.dB(H.f(a,"$isbu"))}},
hR:{"^":"h;","%":"WorkerNavigator;NavigatorConcurrentHardware"},
bu:{"^":"h;",$isbu:1,"%":"NavigatorUserMediaError"},
a6:{"^":"hv;a",
ga4:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.bw("No elements"))
if(y>1)throw H.c(P.bw("More than one element"))
return z.firstChild},
I:function(a,b){var z,y,x,w,v
H.t(b,"$isl",[W.u],"$asl")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.j(y),v=0;v<x;++v)w.G(y,z.firstChild)
return},
i:function(a,b,c){var z,y
H.f(c,"$isu")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.n(y,b)
J.eY(z,c,y[b])},
gB:function(a){var z=this.a.childNodes
return new W.dl(z,z.length,-1,[H.bh(C.X,z,"r",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.n(z,b)
return z[b]},
$asq:function(){return[W.u]},
$asl:function(){return[W.u]},
$asa:function(){return[W.u]}},
u:{"^":"K;0dV:previousSibling=",
dX:function(a){var z=a.parentNode
if(z!=null)J.bI(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.cu(a):z},
G:function(a,b){return a.appendChild(b)},
d9:function(a,b){return a.removeChild(b)},
dc:function(a,b,c){return a.replaceChild(b,c)},
$isu:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hU:{"^":"jC;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isu")
throw H.c(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.u]},
$isx:1,
$asx:function(){return[W.u]},
$asq:function(){return[W.u]},
$isl:1,
$asl:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$asr:function(){return[W.u]},
"%":"NodeList|RadioNodeList"},
m6:{"^":"L;0n:height=,0m:width=","%":"HTMLObjectElement"},
m8:{"^":"K;0n:height=,0m:width=","%":"OffscreenCanvas"},
m9:{"^":"h;0n:height=,0m:width=","%":"PaintSize"},
au:{"^":"h;0j:length=",$isau:1,"%":"Plugin"},
mb:{"^":"jG;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isau")
throw H.c(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
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
$asr:function(){return[W.au]},
"%":"PluginArray"},
md:{"^":"V;0n:height=,0m:width=","%":"PointerEvent"},
ia:{"^":"h;",
dG:function(a,b){return a.createContextualFragment(b)},
cm:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
mi:{"^":"jM;",
h:function(a,b){return P.a1(a.get(H.v(b)))},
E:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a1(y.value[1]))}},
gF:function(a){var z=H.k([],[P.d])
this.E(a,new W.ih(z))
return z},
gj:function(a){return a.size},
$asU:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"RTCStatsReport"},
ih:{"^":"m:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
mj:{"^":"h;0n:height=,0m:width=","%":"Screen"},
mk:{"^":"L;0j:length=","%":"HTMLSelectElement"},
av:{"^":"K;",$isav:1,"%":"SourceBuffer"},
mm:{"^":"e7;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isav")
throw H.c(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
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
$asr:function(){return[W.av]},
"%":"SourceBufferList"},
aw:{"^":"h;",$isaw:1,"%":"SpeechGrammar"},
mn:{"^":"jS;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaw")
throw H.c(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
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
$asr:function(){return[W.aw]},
"%":"SpeechGrammarList"},
ax:{"^":"h;0j:length=",$isax:1,"%":"SpeechRecognitionResult"},
mq:{"^":"jV;",
h:function(a,b){return this.bd(a,H.v(b))},
E:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.d5(a,z)
if(y==null)return
b.$2(y,this.bd(a,y))}},
gF:function(a){var z=H.k([],[P.d])
this.E(a,new W.iv(z))
return z},
gj:function(a){return a.length},
bd:function(a,b){return a.getItem(b)},
d5:function(a,b){return a.key(b)},
$asU:function(){return[P.d,P.d]},
$isJ:1,
$asJ:function(){return[P.d,P.d]},
"%":"Storage"},
iv:{"^":"m:32;a",
$2:function(a,b){return C.a.l(this.a,a)}},
ay:{"^":"h;",$isay:1,"%":"CSSStyleSheet|StyleSheet"},
iC:{"^":"L;",
M:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ag(a,b,c,d)
z=W.h5("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a6(y).I(0,new W.a6(z))
return y},
"%":"HTMLTableElement"},
mt:{"^":"L;",
M:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ag(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.H.M(z.createElement("table"),b,c,d)
z.toString
z=new W.a6(z)
x=z.ga4(z)
x.toString
z=new W.a6(x)
w=z.ga4(z)
y.toString
w.toString
new W.a6(y).I(0,new W.a6(w))
return y},
"%":"HTMLTableRowElement"},
mu:{"^":"L;",
M:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ag(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.H.M(z.createElement("table"),b,c,d)
z.toString
z=new W.a6(z)
x=z.ga4(z)
y.toString
x.toString
new W.a6(y).I(0,new W.a6(x))
return y},
"%":"HTMLTableSectionElement"},
dK:{"^":"L;",$isdK:1,"%":"HTMLTemplateElement"},
mv:{"^":"h;0m:width=","%":"TextMetrics"},
az:{"^":"K;",$isaz:1,"%":"TextTrack"},
aA:{"^":"K;",$isaA:1,"%":"TextTrackCue|VTTCue"},
mw:{"^":"k5;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaA")
throw H.c(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aA]},
$isx:1,
$asx:function(){return[W.aA]},
$asq:function(){return[W.aA]},
$isl:1,
$asl:function(){return[W.aA]},
$isa:1,
$asa:function(){return[W.aA]},
$asr:function(){return[W.aA]},
"%":"TextTrackCueList"},
mx:{"^":"eb;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaz")
throw H.c(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.az]},
$isx:1,
$asx:function(){return[W.az]},
$asq:function(){return[W.az]},
$isl:1,
$asl:function(){return[W.az]},
$isa:1,
$asa:function(){return[W.az]},
$asr:function(){return[W.az]},
"%":"TextTrackList"},
mz:{"^":"h;0j:length=","%":"TimeRanges"},
aB:{"^":"h;",$isaB:1,"%":"Touch"},
mA:{"^":"ka;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaB")
throw H.c(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aB]},
$isx:1,
$asx:function(){return[W.aB]},
$asq:function(){return[W.aB]},
$isl:1,
$asl:function(){return[W.aB]},
$isa:1,
$asa:function(){return[W.aB]},
$asr:function(){return[W.aB]},
"%":"TouchList"},
mB:{"^":"h;0j:length=","%":"TrackDefaultList"},
dQ:{"^":"P;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mP:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
bx:{"^":"hE;0n:height=,0m:width=",$isbx:1,"%":"HTMLVideoElement"},
mR:{"^":"K;0j:length=","%":"VideoTrackList"},
mS:{"^":"K;0n:height=,0m:width=","%":"VisualViewport"},
mT:{"^":"h;0m:width=","%":"VTTRegion"},
aL:{"^":"V;",
gdK:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.B("deltaY is not supported"))},
$isaL:1,
"%":"WheelEvent"},
iO:{"^":"K;",
gdn:function(a){var z,y,x
z=P.G
y=new P.R(0,$.D,[z])
x=H.i(new W.iP(new P.k1(y,[z])),{func:1,ret:-1,args:[P.G]})
this.d0(a)
this.dd(a,W.ek(x,z))
return y},
dd:function(a,b){return a.requestAnimationFrame(H.ak(H.i(b,{func:1,ret:-1,args:[P.G]}),1))},
d0:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
bn:function(a,b){return a.alert(b)},
$isdS:1,
"%":"DOMWindow|Window"},
iP:{"^":"m:16;a",
$1:function(a){var z=this.a
a=H.bg(H.cM(a),{futureOr:1,type:H.p(z,0)})
z=z.a
if(z.a!==0)H.Y(P.bw("Future already completed"))
z.a6(a)}},
dV:{"^":"u;",$isdV:1,"%":"Attr"},
mZ:{"^":"kg;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isap")
throw H.c(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ap]},
$isx:1,
$asx:function(){return[W.ap]},
$asq:function(){return[W.ap]},
$isl:1,
$asl:function(){return[W.ap]},
$isa:1,
$asa:function(){return[W.ap]},
$asr:function(){return[W.ap]},
"%":"CSSRuleList"},
n0:{"^":"h2;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
D:function(a,b){var z
if(b==null)return!1
if(!H.aj(b,"$isW",[P.G],"$asW"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.j(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gA:function(a){return W.e0(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
n1:{"^":"ki;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaq")
throw H.c(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
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
$asr:function(){return[W.aq]},
"%":"GamepadList"},
n6:{"^":"kk;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isu")
throw H.c(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.u]},
$isx:1,
$asx:function(){return[W.u]},
$asq:function(){return[W.u]},
$isl:1,
$asl:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$asr:function(){return[W.u]},
"%":"MozNamedAttrMap|NamedNodeMap"},
n7:{"^":"km;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isax")
throw H.c(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
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
$asr:function(){return[W.ax]},
"%":"SpeechRecognitionResultList"},
n8:{"^":"ko;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isay")
throw H.c(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
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
$asr:function(){return[W.ay]},
"%":"StyleSheetList"},
iW:{"^":"dw;d_:a<",
E:function(a,b){var z,y,x,w,v,u
H.i(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gF(this),y=z.length,x=this.a,w=J.j(x),v=0;v<z.length;z.length===y||(0,H.M)(z),++v){u=z[v]
b.$2(u,w.Y(x,u))}},
gF:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.k([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.n(z,w)
v=H.f(z[w],"$isdV")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asU:function(){return[P.d,P.d]},
$asJ:function(){return[P.d,P.d]}},
j4:{"^":"iW;a",
h:function(a,b){return J.ce(this.a,H.v(b))},
gj:function(a){return this.gF(this).length}},
bz:{"^":"iw;a,b,c,$ti"},
by:{"^":"bz;a,b,c,$ti"},
j6:{"^":"ix;a,b,c,d,e,$ti",
sd6:function(a){this.d=H.i(a,{func:1,args:[W.P]})},
dv:function(a){var z,y,x
z=this.b
if(z==null)return
y=this.d
x=y!=null
if(x){H.i(y,{func:1,args:[W.P]})
if(x)J.eX(z,this.c,y,!1)}this.b=null
this.sd6(null)
return},
p:{
ai:function(a,b,c,d,e){var z=W.ek(new W.j7(c),W.P)
if(z!=null&&!0)J.eZ(a,b,z,!1)
return new W.j6(0,a,b,z,!1,[e])}}},
j7:{"^":"m:17;a",
$1:function(a){return this.a.$1(H.f(a,"$isP"))}},
bA:{"^":"b;a",
cP:function(a){var z,y
z=$.cQ()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.T[y],W.kK())
for(y=0;y<12;++y)z.i(0,C.u[y],W.kL())}},
W:function(a){return $.eS().w(0,W.aZ(a))},
S:function(a,b,c){var z,y,x
z=W.aZ(a)
y=$.cQ()
x=y.h(0,H.e(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.c2(x.$4(a,b,c,this))},
$isab:1,
p:{
dZ:function(a){var z,y
z=document.createElement("a")
y=new W.jN(z,window.location)
y=new W.bA(y)
y.cP(a)
return y},
n4:[function(a,b,c,d){H.f(a,"$isT")
H.v(b)
H.v(c)
H.f(d,"$isbA")
return!0},"$4","kK",16,0,6],
n5:[function(a,b,c,d){var z,y,x
H.f(a,"$isT")
H.v(b)
H.v(c)
z=H.f(d,"$isbA").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kL",16,0,6]}},
r:{"^":"b;$ti",
gB:function(a){return new W.dl(a,this.gj(a),-1,[H.bh(this,a,"r",0)])}},
dB:{"^":"b;a",
W:function(a){return C.a.bo(this.a,new W.hW(a))},
S:function(a,b,c){return C.a.bo(this.a,new W.hV(a,b,c))},
$isab:1},
hW:{"^":"m:11;a",
$1:function(a){return H.f(a,"$isab").W(this.a)}},
hV:{"^":"m:11;a,b,c",
$1:function(a){return H.f(a,"$isab").S(this.a,this.b,this.c)}},
jO:{"^":"b;",
cQ:function(a,b,c,d){var z,y,x
this.a.I(0,c)
z=b.aF(0,new W.jP())
y=b.aF(0,new W.jQ())
this.b.I(0,z)
x=this.c
x.I(0,C.V)
x.I(0,y)},
W:function(a){return this.a.w(0,W.aZ(a))},
S:["cz",function(a,b,c){var z,y
z=W.aZ(a)
y=this.c
if(y.w(0,H.e(z)+"::"+b))return this.d.dm(c)
else if(y.w(0,"*::"+b))return this.d.dm(c)
else{y=this.b
if(y.w(0,H.e(z)+"::"+b))return!0
else if(y.w(0,"*::"+b))return!0
else if(y.w(0,H.e(z)+"::*"))return!0
else if(y.w(0,"*::*"))return!0}return!1}],
$isab:1},
jP:{"^":"m:12;",
$1:function(a){return!C.a.w(C.u,H.v(a))}},
jQ:{"^":"m:12;",
$1:function(a){return C.a.w(C.u,H.v(a))}},
k2:{"^":"jO;e,a,b,c,d",
S:function(a,b,c){if(this.cz(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ce(a,"template")==="")return this.e.w(0,b)
return!1},
p:{
e9:function(){var z,y,x,w,v
z=P.d
y=P.cs(C.t,z)
x=H.p(C.t,0)
w=H.i(new W.k3(),{func:1,ret:z,args:[x]})
v=H.k(["TEMPLATE"],[z])
y=new W.k2(y,P.a2(null,null,null,z),P.a2(null,null,null,z),P.a2(null,null,null,z),null)
y.cQ(null,new H.hC(C.t,w,[x,z]),v,null)
return y}}},
k3:{"^":"m:20;",
$1:function(a){return"TEMPLATE::"+H.e(H.v(a))}},
k0:{"^":"b;",
W:function(a){var z=J.C(a)
if(!!z.$isdF)return!1
z=!!z.$isI
if(z&&W.aZ(a)==="foreignObject")return!1
if(z)return!0
return!1},
S:function(a,b,c){if(b==="is"||C.h.cq(b,"on"))return!1
return this.W(a)},
$isab:1},
dl:{"^":"b;a,b,c,0d,$ti",
sbe:function(a){this.d=H.z(a,H.p(this,0))},
v:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbe(J.bj(this.a,z))
this.c=z
return!0}this.sbe(null)
this.c=y
return!1},
gC:function(a){return this.d},
$isb_:1},
iZ:{"^":"b;a",$isK:1,$isdS:1,p:{
j_:function(a){if(a===window)return H.f(a,"$isdS")
else return new W.iZ(a)}}},
ab:{"^":"b;"},
jN:{"^":"b;a,b",$ismO:1},
ec:{"^":"b;a",
aP:function(a){new W.kd(this).$2(a,null)},
a_:function(a,b){if(b==null)J.cX(a)
else J.bI(b,a)},
dg:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fi(a)
x=J.ce(y.gd_(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.Z(t)}v="element unprintable"
try{v=J.bk(a)}catch(t){H.Z(t)}try{u=W.aZ(a)
this.df(H.f(a,"$isT"),b,z,v,u,H.f(y,"$isJ"),H.v(x))}catch(t){if(H.Z(t) instanceof P.aG)throw t
else{this.a_(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
df:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a_(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.W(a)){this.a_(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.S(a,"is",g)){this.a_(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gF(f)
y=H.k(z.slice(0),[H.p(z,0)])
for(x=f.gF(f).length-1,z=f.a,w=J.j(z);x>=0;--x){if(x>=y.length)return H.n(y,x)
v=y[x]
if(!this.a.S(a,J.fv(v),w.Y(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.Y(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.Y(z,v)
w.d8(z,v)}}if(!!J.C(a).$isdK)this.aP(a.content)},
$ism4:1},
kd:{"^":"m:33;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dg(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a_(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fj(z)}catch(w){H.Z(w)
v=H.f(z,"$isu")
if(x){u=v.parentNode
if(u!=null)J.bI(u,v)}else J.bI(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.f(y,"$isu")}}},
iY:{"^":"h+fT;"},
j0:{"^":"h+q;"},
j1:{"^":"j0+r;"},
j2:{"^":"h+q;"},
j3:{"^":"j2+r;"},
j9:{"^":"h+q;"},
ja:{"^":"j9+r;"},
jp:{"^":"h+q;"},
jq:{"^":"jp+r;"},
jx:{"^":"h+U;"},
jy:{"^":"h+U;"},
jz:{"^":"h+q;"},
jA:{"^":"jz+r;"},
jB:{"^":"h+q;"},
jC:{"^":"jB+r;"},
jF:{"^":"h+q;"},
jG:{"^":"jF+r;"},
jM:{"^":"h+U;"},
e6:{"^":"K+q;"},
e7:{"^":"e6+r;"},
jR:{"^":"h+q;"},
jS:{"^":"jR+r;"},
jV:{"^":"h+U;"},
k4:{"^":"h+q;"},
k5:{"^":"k4+r;"},
ea:{"^":"K+q;"},
eb:{"^":"ea+r;"},
k9:{"^":"h+q;"},
ka:{"^":"k9+r;"},
kf:{"^":"h+q;"},
kg:{"^":"kf+r;"},
kh:{"^":"h+q;"},
ki:{"^":"kh+r;"},
kj:{"^":"h+q;"},
kk:{"^":"kj+r;"},
kl:{"^":"h+q;"},
km:{"^":"kl+r;"},
kn:{"^":"h+q;"},
ko:{"^":"kn+r;"}}],["","",,P,{"^":"",
a1:function(a){var z,y,x,w,v
if(a==null)return
z=P.a_(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.M)(y),++w){v=H.v(y[w])
z.i(0,v,a[v])}return z},
kB:function(a,b){var z={}
a.E(0,new P.kC(z))
return z},
dc:function(){var z=$.db
if(z==null){z=J.ca(window.navigator.userAgent,"Opera",0)
$.db=z}return z},
fZ:function(){var z,y
z=$.d8
if(z!=null)return z
y=$.d9
if(y==null){y=J.ca(window.navigator.userAgent,"Firefox",0)
$.d9=y}if(y)z="-moz-"
else{y=$.da
if(y==null){y=!P.dc()&&J.ca(window.navigator.userAgent,"Trident/",0)
$.da=y}if(y)z="-ms-"
else z=P.dc()?"-o-":"-webkit-"}$.d8=z
return z},
jY:{"^":"b;",
bN:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.l(z,a)
C.a.l(this.b,null)
return y},
aE:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.C(a)
if(!!y.$isaX)return new Date(a.a)
if(!!y.$isag)return a
if(!!y.$iscg)return a
if(!!y.$isdk)return a
if(!!y.$isdq)return a
if(!!y.$isdz||!!y.$iscu)return a
if(!!y.$isJ){x=this.bN(a)
w=this.b
if(x>=w.length)return H.n(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.i(w,x,v)
y.E(a,new P.k_(z,this))
return z.a}if(!!y.$isa){x=this.bN(a)
z=this.b
if(x>=z.length)return H.n(z,x)
v=z[x]
if(v!=null)return v
return this.dF(a,x)}throw H.c(P.cB("structured clone of other type"))},
dF:function(a,b){var z,y,x,w
z=J.aQ(a)
y=z.gj(a)
x=new Array(y)
C.a.i(this.b,b,x)
for(w=0;w<y;++w)C.a.i(x,w,this.aE(z.h(a,w)))
return x}},
k_:{"^":"m:3;a,b",
$2:function(a,b){this.a.a[a]=this.b.aE(b)}},
kC:{"^":"m:3;a",
$2:function(a,b){this.a[a]=b}},
jZ:{"^":"jY;a,b"}}],["","",,P,{"^":""}],["","",,P,{"^":"",
e_:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
b4:{"^":"b;ad:a>,a2:b>,$ti",
k:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
D:function(a,b){if(b==null)return!1
return H.aj(b,"$isb4",[P.G],null)&&this.a==J.bM(b)&&this.b==b.ga2(b)},
gA:function(a){var z,y,x
z=J.ao(this.a)
y=J.ao(this.b)
y=P.e_(P.e_(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
jH:{"^":"b;"},
W:{"^":"jH;$ti"}}],["","",,P,{"^":"",fF:{"^":"h;",$isfF:1,"%":"SVGAnimatedLength"},lo:{"^":"I;0n:height=,0m:width=","%":"SVGFEBlendElement"},lp:{"^":"I;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},lq:{"^":"I;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},lr:{"^":"I;0n:height=,0m:width=","%":"SVGFECompositeElement"},ls:{"^":"I;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},lt:{"^":"I;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},lu:{"^":"I;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},lv:{"^":"I;0n:height=,0m:width=","%":"SVGFEFloodElement"},lw:{"^":"I;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},lx:{"^":"I;0n:height=,0m:width=","%":"SVGFEImageElement"},ly:{"^":"I;0n:height=,0m:width=","%":"SVGFEMergeElement"},lz:{"^":"I;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},lA:{"^":"I;0n:height=,0m:width=","%":"SVGFEOffsetElement"},lB:{"^":"I;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},lC:{"^":"I;0n:height=,0m:width=","%":"SVGFETileElement"},lD:{"^":"I;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},lF:{"^":"I;0n:height=,0m:width=","%":"SVGFilterElement"},lG:{"^":"bo;0n:height=,0m:width=","%":"SVGForeignObjectElement"},hd:{"^":"bo;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bo:{"^":"I;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},lN:{"^":"bo;0n:height=,0m:width=","%":"SVGImageElement"},b1:{"^":"h;",$isb1:1,"%":"SVGLength"},lT:{"^":"js;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){H.f(c,"$isb1")
throw H.c(P.B("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$asq:function(){return[P.b1]},
$isl:1,
$asl:function(){return[P.b1]},
$isa:1,
$asa:function(){return[P.b1]},
$asr:function(){return[P.b1]},
"%":"SVGLengthList"},lU:{"^":"I;0n:height=,0m:width=","%":"SVGMaskElement"},b3:{"^":"h;",$isb3:1,"%":"SVGNumber"},m5:{"^":"jE;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){H.f(c,"$isb3")
throw H.c(P.B("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$asq:function(){return[P.b3]},
$isl:1,
$asl:function(){return[P.b3]},
$isa:1,
$asa:function(){return[P.b3]},
$asr:function(){return[P.b3]},
"%":"SVGNumberList"},ma:{"^":"I;0n:height=,0m:width=","%":"SVGPatternElement"},mc:{"^":"h;0j:length=","%":"SVGPointList"},me:{"^":"h;0n:height=,0m:width=","%":"SVGRect"},mf:{"^":"hd;0n:height=,0m:width=","%":"SVGRectElement"},dF:{"^":"I;",$isdF:1,"%":"SVGScriptElement"},mr:{"^":"jX;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){H.v(c)
throw H.c(P.B("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$asq:function(){return[P.d]},
$isl:1,
$asl:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asr:function(){return[P.d]},
"%":"SVGStringList"},I:{"^":"T;",
M:function(a,b,c,d){var z,y,x,w,v,u
z=H.k([],[W.ab])
C.a.l(z,W.dZ(null))
C.a.l(z,W.e9())
C.a.l(z,new W.k0())
c=new W.ec(new W.dB(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.o).dH(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a6(w)
u=z.ga4(z)
for(z=J.j(v);x=u.firstChild,x!=null;)z.G(v,x)
return v},
$isI:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},ms:{"^":"bo;0n:height=,0m:width=","%":"SVGSVGElement"},b7:{"^":"h;",$isb7:1,"%":"SVGTransform"},mC:{"^":"kc;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){H.f(c,"$isb7")
throw H.c(P.B("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$asq:function(){return[P.b7]},
$isl:1,
$asl:function(){return[P.b7]},
$isa:1,
$asa:function(){return[P.b7]},
$asr:function(){return[P.b7]},
"%":"SVGTransformList"},mQ:{"^":"bo;0n:height=,0m:width=","%":"SVGUseElement"},jr:{"^":"h+q;"},js:{"^":"jr+r;"},jD:{"^":"h+q;"},jE:{"^":"jD+r;"},jW:{"^":"h+q;"},jX:{"^":"jW+r;"},kb:{"^":"h+q;"},kc:{"^":"kb+r;"}}],["","",,P,{"^":"",ah:{"^":"b;",$isl:1,
$asl:function(){return[P.al]},
$isa:1,
$asa:function(){return[P.al]},
$isiH:1}}],["","",,P,{"^":"",l6:{"^":"h;0j:length=","%":"AudioBuffer"},l7:{"^":"iX;",
h:function(a,b){return P.a1(a.get(H.v(b)))},
E:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a1(y.value[1]))}},
gF:function(a){var z=H.k([],[P.d])
this.E(a,new P.fH(z))
return z},
gj:function(a){return a.size},
$asU:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"AudioParamMap"},fH:{"^":"m:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},l8:{"^":"K;0j:length=","%":"AudioTrackList"},fI:{"^":"K;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},m7:{"^":"fI;0j:length=","%":"OfflineAudioContext"},iX:{"^":"h+U;"}}],["","",,P,{"^":"",fJ:{"^":"h;",$isfJ:1,"%":"WebGLBuffer"},hc:{"^":"h;",$ishc:1,"%":"WebGLFramebuffer"},i9:{"^":"h;",$isi9:1,"%":"WebGLProgram"},mg:{"^":"h;",
bm:function(a,b){return a.activeTexture(b)},
bp:function(a,b,c){return a.attachShader(b,c)},
bq:function(a,b,c){return a.bindBuffer(b,c)},
bs:function(a,b,c){return a.bindFramebuffer(b,c)},
bt:function(a,b,c){return a.bindTexture(b,c)},
bu:function(a,b){return a.blendEquation(b)},
bv:function(a,b,c){return a.blendFunc(b,c)},
bw:function(a,b,c,d){return a.bufferData(b,c,d)},
by:function(a,b){return a.clear(b)},
bz:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bA:function(a,b){return a.compileShader(b)},
bB:function(a){return a.createBuffer()},
bC:function(a){return a.createProgram()},
bD:function(a,b){return a.createShader(b)},
bE:function(a){return a.createTexture()},
bG:function(a,b){return a.depthMask(b)},
bH:function(a,b){return a.disable(b)},
bI:function(a,b,c,d){return a.drawArrays(b,c,d)},
bJ:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bK:function(a,b){return a.enable(b)},
bL:function(a,b){return a.enableVertexAttribArray(b)},
ae:function(a){return P.a1(a.getContextAttributes())},
aG:function(a){return a.getError()},
aI:function(a,b){return a.getProgramInfoLog(b)},
aJ:function(a,b,c){return a.getProgramParameter(b,c)},
aL:function(a,b){return a.getShaderInfoLog(b)},
aM:function(a,b,c){return a.getShaderParameter(b,c)},
aN:function(a,b,c){return a.getUniformLocation(b,c)},
bO:function(a,b){return a.linkProgram(b)},
bV:function(a,b,c){return a.pixelStorei(b,c)},
aR:function(a,b,c){return a.shaderSource(b,c)},
aS:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aD:function(a,b,c,d,e,f,g,h,i,j){this.aw(a,b,c,d,e,f,g)
return},
bY:function(a,b,c,d,e,f,g){return this.aD(a,b,c,d,e,f,g,null,null,null)},
aw:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bZ:function(a,b,c,d){return a.texParameterf(b,c,d)},
c_:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
"%":"WebGLRenderingContext"},mh:{"^":"h;",
dr:function(a,b){return a.beginTransformFeedback(b)},
du:function(a,b){return a.bindVertexArray(b)},
dJ:function(a){return a.createVertexArray()},
dL:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dM:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dN:function(a){return a.endTransformFeedback()},
e5:function(a,b,c,d){this.dj(a,b,H.t(c,"$isa",[P.d],"$asa"),d)
return},
dj:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
e6:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bm:function(a,b){return a.activeTexture(b)},
bp:function(a,b,c){return a.attachShader(b,c)},
bq:function(a,b,c){return a.bindBuffer(b,c)},
bs:function(a,b,c){return a.bindFramebuffer(b,c)},
bt:function(a,b,c){return a.bindTexture(b,c)},
bu:function(a,b){return a.blendEquation(b)},
bv:function(a,b,c){return a.blendFunc(b,c)},
bw:function(a,b,c,d){return a.bufferData(b,c,d)},
by:function(a,b){return a.clear(b)},
bz:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bA:function(a,b){return a.compileShader(b)},
bB:function(a){return a.createBuffer()},
bC:function(a){return a.createProgram()},
bD:function(a,b){return a.createShader(b)},
bE:function(a){return a.createTexture()},
bG:function(a,b){return a.depthMask(b)},
bH:function(a,b){return a.disable(b)},
bI:function(a,b,c,d){return a.drawArrays(b,c,d)},
bJ:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bK:function(a,b){return a.enable(b)},
bL:function(a,b){return a.enableVertexAttribArray(b)},
ae:function(a){return P.a1(a.getContextAttributes())},
aG:function(a){return a.getError()},
aI:function(a,b){return a.getProgramInfoLog(b)},
aJ:function(a,b,c){return a.getProgramParameter(b,c)},
aL:function(a,b){return a.getShaderInfoLog(b)},
aM:function(a,b,c){return a.getShaderParameter(b,c)},
aN:function(a,b,c){return a.getUniformLocation(b,c)},
bO:function(a,b){return a.linkProgram(b)},
bV:function(a,b,c){return a.pixelStorei(b,c)},
aR:function(a,b,c){return a.shaderSource(b,c)},
aS:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aD:function(a,b,c,d,e,f,g,h,i,j){this.aw(a,b,c,d,e,f,g)
return},
bY:function(a,b,c,d,e,f,g){return this.aD(a,b,c,d,e,f,g,null,null,null)},
aw:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bZ:function(a,b,c,d){return a.texParameterf(b,c,d)},
c_:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
"%":"WebGL2RenderingContext"},im:{"^":"h;",$isim:1,"%":"WebGLShader"},iD:{"^":"h;",$isiD:1,"%":"WebGLTexture"},iI:{"^":"h;",$isiI:1,"%":"WebGLUniformLocation"},iM:{"^":"h;",$isiM:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",mo:{"^":"jU;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return P.a1(this.d4(a,b))},
i:function(a,b,c){H.f(c,"$isJ")
throw H.c(P.B("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
d4:function(a,b){return a.item(b)},
$asq:function(){return[[P.J,,,]]},
$isl:1,
$asl:function(){return[[P.J,,,]]},
$isa:1,
$asa:function(){return[[P.J,,,]]},
$asr:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},jT:{"^":"h+q;"},jU:{"^":"jT+r;"}}],["","",,G,{"^":"",
iQ:function(a){var z,y,x,w
z=H.k(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.n(z,y)
C.a.i(z,y,w+H.e(z[y]))}return C.a.X(z,"\n")},
dW:function(a,b,c){var z,y,x,w
z=J.j(a)
y=z.bD(a,b)
z.aR(a,y,c)
z.bA(a,y)
x=H.c2(z.aM(a,y,35713))
if(x!=null&&!x){w=z.aL(a,y)
P.ae("E:Compilation failed:")
P.ae("E:"+G.iQ(c))
P.ae("E:Failure:")
P.ae(C.h.H("E:",w))
throw H.c(w)}return y},
dm:function(a,b){var z,y,x
H.t(a,"$isa",[T.o],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.i.i(b,z,J.bM(a[y]))
if(y>=a.length)return H.n(a,y)
C.i.i(b,z+1,J.cd(a[y]))
z+=2
if(y>=a.length)return H.n(a,y)
x=J.cV(a[y])
if(z>=b.length)return H.n(b,z)
b[z]=x}return b},
h9:function(a,b){var z,y
H.t(a,"$isa",[T.y],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.i.i(b,z,J.bM(a[y]))
if(y>=a.length)return H.n(a,y)
C.i.i(b,z+1,J.cd(a[y]))}return b},
ha:function(a,b){var z,y,x,w,v
H.t(a,"$isa",[T.ba],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.i.i(b,z,J.bM(a[y]))
if(y>=a.length)return H.n(a,y)
C.i.i(b,z+1,J.cd(a[y]))
x=z+2
if(y>=a.length)return H.n(a,y)
w=J.cV(a[y])
v=b.length
if(x>=v)return H.n(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.n(a,y)
w=J.fl(a[y])
if(z>=v)return H.n(b,z)
b[z]=w}return b},
h8:function(a,b){var z,y
H.t(a,"$isa",[[P.a,P.F]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.m.i(b,z,J.bj(a[y],0))
if(y>=a.length)return H.n(a,y)
C.m.i(b,z+1,J.bj(a[y],1))
if(y>=a.length)return H.n(a,y)
C.m.i(b,z+2,J.bj(a[y],2))
if(y>=a.length)return H.n(a,y)
C.m.i(b,z+3,J.bj(a[y],3))}return b},
jn:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.ar(z,[H.p(z,0)]),y=y.gB(y),x=b.x,w=[[P.a,P.F]],v=[P.al],u=[T.ba],t=[T.o],s=[T.y];y.v();){r=y.d
if(!x.ab(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.eq>0)H.c8("I: "+r)
continue}q=z.h(0,r)
switch($.a7().h(0,r).a){case"vec2":b.Z(r,G.h9(H.bH(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.Z(r,G.dm(H.bH(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.Z(r,G.ha(H.bH(q,"$isa",u,"$asa"),null),4)
break
case"float":b.Z(r,new Float32Array(H.c_(H.bH(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.Z(r,G.h8(H.bH(q,"$isa",w,"$asa"),null),4)
break}}},
dp:function(a,b,c){var z,y,x,w,v,u,t,s
z=b.d
y=b.e.x
x=P.d
w=P.a_(x,P.b)
v=J.f8(z.a)
u=new G.hF(z,v,4,w,y,0,-1,P.a_(x,P.ah),"meshdata:"+a,!1,!0)
x=G.dm(c.d,null)
w.i(0,"aPosition",J.cb(z.a))
u.ch=x
u.aZ("aPosition",x,3)
t=$.a7().h(0,"aPosition")
if(t==null)H.Y("Unknown canonical aPosition")
s=y.h(0,"aPosition")
J.bJ(z.a,v)
z.bM(0,s,0)
z.cd(0,w.h(0,"aPosition"),s,t.b0(),5126,!1,0,0)
y=H.t(c.cF(),"$isa",[P.F],"$asa")
u.y=J.cb(z.a)
x=u.ch.length
if(x<768){u.saq(new Uint8Array(H.c_(y)))
u.Q=5121}else if(x<196608){u.saq(new Uint16Array(H.c_(y)))
u.Q=5123}else{u.saq(new Uint32Array(H.c_(y)))
u.Q=5125}J.bJ(z.a,v)
y=u.y
x=u.cx
J.c9(z.a,34963,y)
J.cU(z.a,34963,x,35048)
G.jn(c,u)
return u},
b2:{"^":"b;"},
b8:{"^":"b2;d,a,b,c",
b1:function(){return this.d},
k:function(a){var z,y,x,w
z=H.k(["{"+new H.dP(H.kH(this)).k(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.ar(y,[H.p(y,0)]),x=x.gB(x);x.v();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.h(0,w)))}return C.a.X(z,"\n")}},
fL:{"^":"b;0a,b",
bM:function(a,b,c){J.ff(this.a,b)
if(c>0)J.fB(this.a,b,c)},
cd:function(a,b,c,d,e,f,g,h){J.c9(this.a,34962,b)
J.fC(this.a,c,d,e,!1,g,h)}},
hb:{"^":"b;a,b,c,d,e"},
dj:{"^":"b;"},
bR:{"^":"b;a,b,c,d"},
dn:{"^":"b;a,b,c,d,e",
a5:function(a){switch($.a7().h(0,a).a){case"vec2":this.e.i(0,a,H.k([],[T.y]))
break
case"vec3":this.e.i(0,a,H.k([],[T.o]))
break
case"vec4":this.e.i(0,a,H.k([],[T.ba]))
break
case"float":this.e.i(0,a,H.k([],[P.al]))
break
case"uvec4":this.e.i(0,a,H.k([],[[P.a,P.F]]))
break}},
cB:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)C.a.l(y,new G.bR(z,z+1,z+2,z+3))},
aY:function(a){var z,y,x,w,v
H.t(a,"$isa",[T.o],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.M)(a),++x){w=a[x]
v=new T.o(new Float32Array(3))
v.K(w)
C.a.l(y,v)}},
aV:function(a,b){var z,y,x,w,v,u,t
z=[T.y]
H.t(b,"$isa",z,"$asa")
y=H.t(this.e.h(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.M)(b),++w){v=b[w]
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.l(y,new T.y(u))}},
aW:function(a,b){var z,y,x,w,v
z=[T.o]
H.t(b,"$isa",z,"$asa")
y=H.t(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<4;++x){w=b[x]
v=new T.o(new Float32Array(3))
v.K(w)
z.l(y,v)}},
cF:function(){var z,y,x,w,v,u,t,s,r
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.k(y,[P.F])
for(y=this.b,w=0,v=0;!1;++v){if(v>=0)return H.n(y,v)
u=y[v]
C.a.i(x,w,u.ge9(u))
C.a.i(x,w+1,u.gea(u))
C.a.i(x,w+2,u.geb(u))
w+=3}for(y=z.length,v=0;v<z.length;z.length===y||(0,H.M)(z),++v){t=z[v]
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
z=H.k(["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"],[P.d])
for(y=this.e,x=new H.ar(y,[H.p(y,0)]),x=x.gB(x);x.v();){w=x.d
v=$.a7().h(0,w).a
C.a.l(z,H.e(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.X(z," ")}},
dN:{"^":"b;a,b,c"},
dM:{"^":"b;a,b,c"},
hD:{"^":"b8;d,a,b,c",p:{
dy:function(a){var z=P.a_(P.d,P.b)
z.i(0,"cDepthTest",!0)
z.i(0,"cDepthWrite",!0)
z.i(0,"cBlendEquation",$.eB())
z.i(0,"cStencilFunc",$.eF())
return new G.hD(z,a,!1,!0)}}},
hF:{"^":"b2;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
saq:function(a){this.cx=H.t(a,"$isa",[P.F],"$asa")},
aZ:function(a,b,c){var z,y
C.h.al(a,0)
H.f(b,"$isah")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.c9(z.a,34962,y)
J.cU(z.a,34962,b,35048)},
b_:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
Z:function(a,b,c){var z,y,x,w,v
z=J.cR(a,0)===105
if(z&&this.z===0)this.z=C.e.cA(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.cb(x.a))
this.aZ(a,b,c)
w=$.a7().h(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.h(0,a)
J.bJ(x.a,this.e)
x.bM(0,v,z?1:0)
x.cd(0,y.h(0,a),v,w.b0(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.k(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=new H.ar(z,[H.p(z,0)]),x=x.gB(x);x.v();){w=x.d
C.a.l(y,H.e(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.X(y,"  ")}},
i_:{"^":"b8;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cC:function(a,b){var z
if(typeof a!=="number")return a.e8()
if(typeof b!=="number")return H.bE(b)
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
b1:function(){var z,y,x
z=this.x
y=this.d
y.i(0,"uEyePosition",z.aH())
x=this.cy
x.K(z.d)
z=this.cx
z.K(this.db)
z.bP(0,x)
y.i(0,"uPerspectiveViewMatrix",z)
return y}},
bm:{"^":"b;a,b,c,d,e",
k:function(a){return"["+this.a+"] "+this.b+" "+this.c+" mode:"+this.d+" ["+this.e.a+"usec]"}},
ig:{"^":"b2;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cJ:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.M)(z),++u){t=z[u]
x.i(0,t,J.cW(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.M)(z),++u){t=z[u]
x.i(0,t,J.cW(w.a,v,t))}},
cM:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.k([],[P.d])
x=H.k([],[P.d])
for(y=new H.ar(y,[H.p(y,0)]),y=y.gB(y);y.v();){w=y.d
if(!z.ab(0,w))C.a.l(x,w)}for(z=this.x,z=P.ju(z,z.r,H.p(z,0)),y=this.Q;z.v();){w=z.d
if(!y.w(0,w))C.a.l(x,w)}return x},
cO:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.t(b,"$isJ",[P.d,P.b],"$asJ")
z=Date.now()
for(y=new H.ar(b,[H.p(b,0)]),y=y.gB(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.v();){s=y.d
switch(J.cR(s,0)){case 117:if(w.ab(0,s)){r=b.h(0,s)
if(v.ab(0,s))H.c8("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.i(0,s,a)
q=$.a7().h(0,s)
if(q==null)H.Y("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.N(r)
J.cf(x.a,p,r)}else if(!!J.C(r).$ishi)J.fz(x.a,p,r)
break
case"float":if(q.c===0){H.eo(r)
J.fx(x.a,p,r)}else if(!!J.C(r).$isah)J.fy(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.an(r,"$isa3").a
J.d1(x.a,p,!1,s)}else if(!!J.C(r).$isah)J.d1(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=H.an(r,"$isbt").a
J.d0(x.a,p,!1,s)}else if(!!J.C(r).$isah)J.d0(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.d_(o,p,H.an(r,"$isba").a)
else J.d_(o,p,H.f(r,"$isah"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cZ(o,p,H.an(r,"$iso").a)
else J.cZ(o,p,H.f(r,"$isah"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cY(o,p,H.an(r,"$isy").a)
else J.cY(o,p,H.f(r,"$isah"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.bE(s)
J.cS(x.a,33984+s)
s=H.an(r,"$iscA").b
J.aU(x.a,3553,s)
s=this.ch
J.cf(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.H()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.bE(s)
J.cS(x.a,33984+s)
s=H.an(r,"$iscA").b
J.aU(x.a,34067,s)
s=this.ch
J.cf(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.H()
this.ch=s+1
break
default:H.c8("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":s=J.aF(r,!0)
o=x.a
if(s)J.bK(o,2929)
else J.cc(o,2929)
break
case"cStencilFunc":H.an(r,"$isdN")
s=r.a
o=x.a
if(s===1281)J.cc(o,2960)
else{J.bK(o,2960)
o=r.b
n=r.c
J.fs(x.a,s,o,n)}break
case"cDepthWrite":H.c2(r)
J.f9(x.a,r)
break
case"cBlendEquation":H.an(r,"$isdM")
s=r.a
o=x.a
if(s===1281)J.cc(o,3042)
else{J.bK(o,3042)
o=r.b
n=r.c
J.f2(x.a,o,n)
J.f1(x.a,s)}break}++t
break}}m=P.dd(0,0,0,Date.now()-new P.aX(z,!1).a,0,0)
""+t
m.k(0)},
cE:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
H.t(b,"$isa",[G.b8],"$asa")
H.t(c,"$isa",[G.bm],"$asa")
z=Date.now()
y=this.d
J.fA(y.a,this.r)
this.ch=0
x=this.z
if(x.a>0){x.f=null
x.e=null
x.d=null
x.c=null
x.b=null
x.a=0
x.bf()}for(x=b.length,w=0;w<b.length;b.length===x||(0,H.M)(b),++w){v=b[w]
this.cO(v.a,v.b1())}x=this.Q
x.a0(0)
for(u=a.cy,u=new H.ar(u,[H.p(u,0)]),u=u.gB(u);u.v();)x.l(0,u.d)
t=this.cM()
if(t.length!==0)P.ae("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(t)))
J.bJ(a.d.a,a.e)
s=this.e.f.length>0
x=a.f
u=a.b_()
r=a.Q
q=a.z
if(s)J.f_(y.a,x)
if(r!==-1){p=y.a
if(q>1)J.fd(p,x,u,r,0,q)
else J.fc(p,x,u,r,0)}else{r=y.a
if(q>1)J.fb(r,x,0,u,q)
else J.fa(r,x,0,u)}if(s)J.fg(y.a)
C.a.l(c,new G.bm(this.a,a.z,a.b_(),x,P.dd(0,0,0,Date.now()-new P.aX(z,!1).a,0,0)))},
p:{
dE:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
y=P.a2(null,null,null,z)
x=c.b
w=d.b
v=H.t(c.f,"$isa",[z],"$asa")
u=J.f6(b.a)
t=G.dW(b.a,35633,x)
J.cT(b.a,u,t)
s=G.dW(b.a,35632,w)
J.cT(b.a,u,s)
if(v.length>0)J.fw(b.a,u,v,35980)
J.fq(b.a,u)
if(!H.c2(J.fp(b.a,u,35714)))H.Y(J.fo(b.a,u))
z=new G.ig(b,c,d,u,P.cs(c.c,z),P.a_(z,P.b),P.a_(z,z),y,a,!1,!0)
z.cJ(a,b,c,d)
return z}}},
E:{"^":"b;a,b,c",
b0:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
io:{"^":"b;a,0b,c,d,e,f,r,x",
aU:function(a){var z,y,x,w,v
H.t(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.M)(a),++w){v=a[w]
C.a.l(y,v)
x.i(0,v,this.r);++this.r}C.a.af(y)},
ah:function(a){var z,y,x
H.t(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.M)(a),++x)C.a.l(y,a[x])
C.a.af(y)},
aX:function(a){var z,y
H.t(a,"$isa",[P.d],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.l(z,a[y])
C.a.af(z)},
cK:function(a,b){this.b=this.b4(!0,H.t(a,"$isa",[P.d],"$asa"),b)},
ai:function(a){return this.cK(a,null)},
b4:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.t(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.k(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.M)(y),++u){t=y[u]
s=$.a7().h(0,t)
C.a.l(w,"layout (location="+H.e(v.h(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.M)(z),++u){q=z[u]
s=$.a7().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.M)(z),++u){q=z[u]
s=$.a7().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.M)(z),++u){q=z[u]
s=$.a7().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.l(w,"")
if(a)C.a.l(w,"void main(void) {")
C.a.I(w,b)
if(a)C.a.l(w,"}")
return C.a.X(w,"\n")},
p:{
bW:function(a){var z,y
z=P.d
y=[z]
return new G.io(a,H.k([],y),H.k([],y),H.k([],y),H.k([],y),0,P.a_(z,P.F))}}},
dG:{"^":"b2;",
aH:function(){var z,y,x
z=this.e
y=this.d.a
x=z.a
x[0]=y[12]
x[1]=y[13]
x[2]=y[14]
return z},
aQ:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}},
dL:{"^":"b;a,b,c,d,e,f,r",p:{
iE:function(){return new G.dL(!1,!1,!1,!0,1,9729,9729)}}},
cA:{"^":"b;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
hg:{"^":"cA;f,a,b,c,d,e",
b2:function(a){var z,y
z=this.d
y=this.c
J.aU(z.a,y,this.b)
J.ft(z.a,y,0,6408,6408,5121,a)}}}],["","",,R,{"^":"",
jw:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.f(W.j5("span",null),"$isT")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.x).ak(y,"float")
y.setProperty(x,"left","")
x=C.x.ak(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.p.G(z,v)}return z},
ie:{"^":"id;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
dZ:[function(a){var z,y,x
z=this.db
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.ae("size change "+H.e(y)+" "+H.e(x))
this.dx.cC(y,x)
this.z=y
this.Q=x},"$1","gdY",4,0,13]},
it:{"^":"b;",
cL:function(a,b,c){var z,y
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
y=J.j(z)
y.G(z,this.b)
y.G(z,this.d)
y.G(z,this.c)}},
iu:{"^":"it;e,f,a,b,c,d",
cN:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.y.e4(y,2)+" fps"
C.p.cn(this.c,b)
x=C.e.V(30*C.y.dz(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.f(z.firstChild,"$isT")
v=w.style
u=""+x+"px"
v.height=u
C.p.G(z,w)}}}],["","",,A,{"^":"",
ep:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.t(d,"$isa",[G.bm],"$asa")
H.t(e,"$isa",[G.b8],"$asa")
z=b.dx
z.K(c)
y=b.d
z.bP(0,y)
x=b.cx
H.e(b)
w=C.a.gdT(e)
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
v.dE(new T.bt(u))
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
a.cE(x,e,d)
if(0>=e.length)return H.n(e,-1)
e.pop()
for(y=b.cy,r=0;!1;++r){if(r>=0)return H.n(y,r)
A.ep(a,y[r],z,d,e)}},
cv:{"^":"dG;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
k:function(a){return"NODE["+this.a+"]"}},
cx:{"^":"b2;d,e,f,a,b,c"},
id:{"^":"b2;",
cI:function(a,b,c){if(this.d==null)this.d=new G.hb(this.e,null,null,null,null)},
cD:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
H.t(a,"$isa",[G.bm],"$asa")
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.f0(v.a,36160,z)
J.fD(v.a,this.x,this.y,x,w)
if(y!==0)J.f3(v.a,y)
for(z=this.f,y=z.length,x=P.d,w=P.b,u=0;u<z.length;z.length===y||(0,H.M)(z),++u){t=z[u]
s=t.e
C.a.l(s,new G.b8(P.a_(x,w),"transforms",!1,!0))
r=new T.a3(new Float32Array(16))
r.O()
for(v=t.f,q=v.length,p=t.d,o=0;o<v.length;v.length===q||(0,H.M)(v),++o)A.ep(p,v[o],r,a,s)
if(0>=s.length)return H.n(s,-1)
s.pop()}}}}],["","",,V,{}],["","",,B,{"^":"",
fV:function(a5,a6,a7,a8,a9,b0,b1,b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
z=-b0
y=-b1
x=new T.o(new Float32Array(3))
x.q(z,y,b2)
w=new T.o(new Float32Array(3))
w.q(b0,y,b2)
v=new T.o(new Float32Array(3))
v.q(b0,b1,b2)
u=new T.o(new Float32Array(3))
u.q(z,b1,b2)
t=-b2
s=new T.o(new Float32Array(3))
s.q(z,y,t)
r=new T.o(new Float32Array(3))
r.q(z,b1,t)
q=new T.o(new Float32Array(3))
q.q(b0,b1,t)
p=new T.o(new Float32Array(3))
p.q(b0,y,t)
o=new T.o(new Float32Array(3))
o.q(z,b1,t)
n=new T.o(new Float32Array(3))
n.q(z,b1,b2)
m=new T.o(new Float32Array(3))
m.q(b0,b1,b2)
l=new T.o(new Float32Array(3))
l.q(b0,b1,t)
k=new T.o(new Float32Array(3))
k.q(b0,y,b2)
j=new T.o(new Float32Array(3))
j.q(z,y,b2)
i=new T.o(new Float32Array(3))
i.q(z,y,t)
h=new T.o(new Float32Array(3))
h.q(b0,y,t)
g=new T.o(new Float32Array(3))
g.q(b0,y,t)
f=new T.o(new Float32Array(3))
f.q(b0,b1,t)
e=new T.o(new Float32Array(3))
e.q(b0,b1,b2)
d=new T.o(new Float32Array(3))
d.q(b0,y,b2)
c=new T.o(new Float32Array(3))
c.q(z,y,t)
b=new T.o(new Float32Array(3))
b.q(z,y,b2)
y=new T.o(new Float32Array(3))
y.q(z,b1,b2)
a=new T.o(new Float32Array(3))
a.q(z,b1,t)
t=[T.o]
a0=H.k([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a],t)
z=new T.y(new Float32Array(2))
z.t(a7,a9)
y=new T.y(new Float32Array(2))
y.t(a6,a9)
x=new T.y(new Float32Array(2))
x.t(a6,a8)
w=new T.y(new Float32Array(2))
w.t(a7,a8)
v=new T.y(new Float32Array(2))
v.t(a6,a9)
u=new T.y(new Float32Array(2))
u.t(a6,a8)
s=new T.y(new Float32Array(2))
s.t(a7,a8)
r=new T.y(new Float32Array(2))
r.t(a7,a9)
q=new T.y(new Float32Array(2))
q.t(a7,a8)
p=new T.y(new Float32Array(2))
p.t(a7,a9)
o=new T.y(new Float32Array(2))
o.t(a6,a9)
n=new T.y(new Float32Array(2))
n.t(a6,a8)
m=new T.y(new Float32Array(2))
m.t(a6,a8)
l=new T.y(new Float32Array(2))
l.t(a7,a8)
k=new T.y(new Float32Array(2))
k.t(a7,a9)
j=new T.y(new Float32Array(2))
j.t(a6,a9)
i=new T.y(new Float32Array(2))
i.t(a6,a9)
h=new T.y(new Float32Array(2))
h.t(a6,a8)
g=new T.y(new Float32Array(2))
g.t(a7,a8)
f=new T.y(new Float32Array(2))
f.t(a7,a9)
e=new T.y(new Float32Array(2))
e.t(a7,a9)
d=new T.y(new Float32Array(2))
d.t(a6,a9)
c=new T.y(new Float32Array(2))
c.t(a6,a8)
b=new T.y(new Float32Array(2))
b.t(a7,a8)
a1=H.k([z,y,x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b],[T.y])
a2=new G.dn(!1,H.k([],[G.dj]),H.k([],[G.bR]),H.k([],t),P.a_(P.d,[P.a,,]))
a2.a5("aTexUV")
a2.a5("aNormal")
a2.cB(6)
a2.aY(a0)
a2.aV("aTexUV",a1)
for(a3=0;z=$.eR(),a3<6;++a3){a4=z[a3]
a2.aW("aNormal",H.k([a4,a4,a4,a4],t))}return a2}}],["","",,D,{"^":"",
hx:function(){var z,y,x
z=W.bx
y=new P.R(0,$.D,[z])
x=new P.dU(y,[z])
z=window.navigator;(z&&C.W).ck(z,!0).a1(new D.hz(x),null).bx(new D.hA(x))
return y},
hp:{"^":"b;a,b,c",
cG:function(a){var z,y
a=document
z=W.b0
y={func:1,ret:-1,args:[z]}
W.ai(a,"keydown",H.i(new D.hr(this),y),!1,z)
W.ai(a,"keyup",H.i(new D.hs(this),y),!1,z)},
p:{
hq:function(a){var z=P.F
z=new D.hp(P.a2(null,null,null,z),P.a2(null,null,null,z),P.a2(null,null,null,z))
z.cG(a)
return z}}},
hr:{"^":"m:14;a",
$1:function(a){var z
H.f(a,"$isb0")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},
hs:{"^":"m:14;a",
$1:function(a){var z
H.f(a,"$isb0")
z=this.a
z.a.bW(0,a.which)
z.c.l(0,a.which)}},
hI:{"^":"b;a,b,c,d,e,f,r,x",
cH:function(a){var z,y,x
if(a==null)a=document
z=J.j(a)
y=z.gbS(a)
x=H.p(y,0)
W.ai(y.a,y.b,H.i(new D.hK(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbR(a)
y=H.p(x,0)
W.ai(x.a,x.b,H.i(new D.hL(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbT(a)
x=H.p(y,0)
W.ai(y.a,y.b,H.i(new D.hM(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbU(a)
x=H.p(z,0)
W.ai(z.a,z.b,H.i(new D.hN(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
hJ:function(a){var z=P.F
z=new D.hI(P.a2(null,null,null,z),P.a2(null,null,null,z),P.a2(null,null,null,z),0,0,0,0,0)
z.cH(a)
return z}}},
hK:{"^":"m:4;a",
$1:function(a){var z,y
H.f(a,"$isV")
a.preventDefault()
z=this.a
y=J.j(a)
z.r=H.N(y.gbQ(a).a)
z.x=H.N(y.gbQ(a).b)
z.d=a.movementX
z.e=a.movementY}},
hL:{"^":"m:4;a",
$1:function(a){var z
H.f(a,"$isV")
a.preventDefault()
P.ae("BUTTON "+H.e(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},
hM:{"^":"m:4;a",
$1:function(a){var z
H.f(a,"$isV")
a.preventDefault()
z=this.a
z.a.bW(0,a.button)
z.c.l(0,a.button)}},
hN:{"^":"m:25;a",
$1:function(a){H.f(a,"$isaL")
a.preventDefault()
this.a.f=H.N(C.ad.gdK(a))}},
hY:{"^":"dG;ch,cx,cy,db,dx,dy,fr,fx,d,e,f,r,x,a,b,c"},
hz:{"^":"m:10;a",
$1:function(a){var z,y
H.f(a,"$isaI")
z=document.createElement("video")
z.autoplay=!0
y=new W.by(z,"playing",!1,[W.P])
y.gdO(y).a1(new D.hy(this.a,z),-1)
z.srcObject=a}},
hy:{"^":"m:13;a,b",
$1:function(a){H.f(a,"$isP")
return this.a.ax(0,this.b)}},
hA:{"^":"m:26;a",
$1:function(a){P.ae("E:"+("Camera open error "+H.e(a)))
this.a.ax(0,null)}}}],["","",,A,{"^":"",
bD:function(a){var z,y
z=C.i.dP(H.t(a,"$isl",[P.b],"$asl"),0,new A.kJ(),P.F)
if(typeof z!=="number")return H.bE(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kJ:{"^":"m:27;",
$2:function(a,b){var z,y
H.N(a)
z=J.ao(b)
if(typeof a!=="number")return a.H()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",bt:{"^":"b;a",
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
h:function(a,b){var z=this.a
if(b>=9)return H.n(z,b)
return z[b]},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.bt){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gA:function(a){return A.bD(this.a)},
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
return new T.o(z)},
dE:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
return m}},a3:{"^":"b;a",
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
h:function(a,b){var z=this.a
if(b>=16)return H.n(z,b)
return z[b]},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a3){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gA:function(a){return A.bD(this.a)},
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
return new T.ba(z)},
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
z[15]=m*e+l*a+k*a3+j*a7}},y:{"^":"b;a",
t:function(a,b){var z=this.a
z[0]=a
z[1]=b},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.y){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gA:function(a){return A.bD(this.a)},
h:function(a,b){var z=this.a
if(b>=2)return H.n(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gad:function(a){return this.a[0]},
ga2:function(a){return this.a[1]}},o:{"^":"b;a",
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
if(b instanceof T.o){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gA:function(a){return A.bD(this.a)},
h:function(a,b){var z=this.a
if(b>=3)return H.n(z,b)
return z[b]},
gj:function(a){return Math.sqrt(this.gaA())},
gaA:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
aB:function(a){var z,y,x
z=Math.sqrt(this.gaA())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
ay:function(a){var z,y
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
z=new T.o(new Float32Array(3))
z.q(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
gad:function(a){return this.a[0]},
ga2:function(a){return this.a[1]},
gcf:function(a){return this.a[2]},
p:{
aK:function(a,b,c){var z=new T.o(new Float32Array(3))
z.q(a,b,c)
return z}}},ba:{"^":"b;a",
k:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ba){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gA:function(a){return A.bD(this.a)},
h:function(a,b){var z=this.a
if(b>=4)return H.n(z,b)
return z[b]},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gad:function(a){return this.a[0]},
ga2:function(a){return this.a[1]},
gcf:function(a){return this.a[2]},
ge7:function(a){return this.a[3]}}}],["","",,U,{"^":"",
nf:[function(a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z={}
H.f(a7,"$isbx")
if(a7==null){C.w.bn(window,"Could not access camera - do you have a camera installed?")
return}y=document
x=C.q.cj(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.iu(0,0,x,w,y.createElement("div"),R.jw("blue","gray",90,30))
u.cL(x,"blue","gray")
t=H.f(C.q.dW(y,"#webgl-canvas"),"$iscj")
s=new G.fL(t)
y=P.d
x=P.b
v=(t&&C.I).ci(t,"webgl2",P.cr(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],y,x))
s.a=v
if(v==null)H.Y(P.di('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
r="ChronosGL Config: "+H.e(J.fm(v))
if($.eq>0)P.ae("I: "+r)
J.f4(v,0,0,0,1)
J.bK(v,2929)
r=new Float32Array(3)
q=D.hq(null)
p=D.hJ(t)
o=new T.a3(new Float32Array(16))
o.O()
n=new Float32Array(3)
m=new Float32Array(3)
l=new Float32Array(3)
k=new D.hY(15,10,0,0,new T.o(r),-0.02,q,p,o,new T.o(n),new T.o(m),new T.o(l),new T.o(new Float32Array(3)),"camera:orbit",!1,!0)
r=new T.a3(new Float32Array(16))
r.O()
q=new T.a3(new Float32Array(16))
q.O()
j=new G.i_(k,50,1,0.1,1000,r,q,new T.a3(new Float32Array(16)),P.a_(y,x),"perspective",!1,!0)
j.b3()
x=$.eG()
if(x==null)x=new G.dL(!1,!1,!1,!0,1,9729,9729)
r=J.f7(v)
i=new G.hg(a7,"video",r,3553,s,x)
J.aU(v,3553,r)
J.fr(s.a,37440,1)
i.b2(a7)
v=x.e
if(v!==1)J.fu(s.a,3553,34046,v)
J.bN(s.a,3553,10240,x.r)
J.bN(s.a,3553,10241,x.f)
if(x.b){J.bN(s.a,3553,10242,33071)
J.bN(s.a,3553,10243,33071)}J.fn(s.a)
J.aU(s.a,3553,null)
x=H.k([],[A.cx])
h=new R.ie(t,j,null,s,x,17664,0,0,0,0,"main",!1,!0)
h.cI("main",s,null)
h.dZ(null)
v=W.P
W.ai(window,"resize",H.i(h.gdY(),{func:1,ret:-1,args:[v]}),!1,v)
v=G.dE("bg",s,$.eU(),$.eT())
r=[G.b8]
q=H.k([],r)
p=[A.cv]
o=H.k([],p)
g=G.dy("bg")
n=g.d
n.i(0,"cDepthWrite",!1)
n.i(0,"uTexture",i)
n=new T.o(new Float32Array(3))
n.q(-1,-1,0)
m=new T.o(new Float32Array(3))
m.q(1,-1,0)
l=new T.o(new Float32Array(3))
l.q(1,1,0)
f=new T.o(new Float32Array(3))
f.q(-1,1,0)
e=[T.o]
d=H.k([n,m,l,f],e)
n=new T.y(new Float32Array(2))
n.t(0,0)
m=new T.y(new Float32Array(2))
m.t(1,0)
l=new T.y(new Float32Array(2))
l.t(1,1)
f=new T.y(new Float32Array(2))
f.t(0,1)
c=H.k([n,m,l,f],[T.y])
b=new T.o(new Float32Array(3))
b.q(0,0,1)
a=H.k([b,b,b,b],e)
n=H.k([],[G.dj])
m=H.k([],[G.bR])
l=H.k([],e)
a0=new G.dn(!1,n,m,l,P.a_(y,[P.a,,]))
a0.a5("aTexUV")
H.t(d,"$isa",e,"$asa")
a1=l.length
C.a.l(m,new G.bR(a1,a1+1,a1+2,a1+3))
a0.aY(d)
a0.aV("aTexUV",c)
a0.a5("aNormal")
a0.aW("aNormal",a)
m=G.dp("quad",v,a0)
l=H.k([],p)
y=new Float32Array(9)
n=new T.a3(new Float32Array(16))
n.O()
f=new T.a3(new Float32Array(16))
f.O()
e=new Float32Array(3)
a2=new Float32Array(3)
a3=new Float32Array(3)
C.a.l(o,new A.cv(g,m,l,new T.bt(y),n,f,new T.o(e),new T.o(a2),new T.o(a3),new T.o(new Float32Array(3)),"bg",!1,!0))
C.a.l(x,new A.cx(v,q,o,"bg",!1,!0))
y=H.k([j],r)
v=G.dE("solid",s,$.eW(),$.eV())
r=H.k([],p)
a4=G.dy("cube")
a4.d.i(0,"uColor",$.eC())
q=G.dp("cube",v,B.fV(!0,1,0,1,0,0.2,0.2,0.2))
p=H.k([],p)
o=new Float32Array(9)
n=new T.a3(new Float32Array(16))
n.O()
m=new T.a3(new Float32Array(16))
m.O()
l=new Float32Array(3)
f=new Float32Array(3)
e=new Float32Array(3)
a5=new A.cv(a4,q,p,new T.bt(o),n,m,new T.o(l),new T.o(f),new T.o(e),new T.o(new Float32Array(3)),"cube",!1,!0)
a5.aQ(-5,0,-5)
C.a.l(r,a5)
if(0>=r.length)return H.n(r,0)
a6=r[0]
C.a.l(x,new A.cx(v,y,r,"objects",!1,!0))
z.a=0
new U.kW(z,k,a6,i,h,u).$1(0)},"$1","kA",4,0,21],
ew:function(){D.hx().a1(U.kA(),-1).bx(new U.kX())},
kW:{"^":"m:28;a,b,c,d,e,f",
$1:function(b6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
H.cM(b6)
if(typeof b6!=="number")return b6.aT()
y=this.a
y.a=b6+0
x=this.b
w=x.fx
v=w.a
if(v.w(0,0)||v.w(0,1)){v=x.cx
u=w.d
if(typeof u!=="number")return u.aO()
x.cx=v+u*0.01
u=x.cy
v=w.e
if(typeof v!=="number")return v.aO()
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
if(typeof u!=="number")return u.aO()
u=x.ch-u*x.dy
if(u>0)x.ch=u
u=C.r.dA(x.cy,-1.4707963267948965,1.4707963267948965)
x.cy=u
t=x.ch
s=x.cx
r=t*Math.cos(u)
x.aQ(r*Math.cos(s),t*Math.sin(u),r*Math.sin(s))
s=x.d.a
u=x.dx.a
s[12]=s[12]+u[0]
s[13]=s[13]+u[1]
s[14]=s[14]+u[2]
q=new T.o(new Float32Array(3))
q.q(0,1,0)
t=x.aH()
p=new Float32Array(3)
o=new T.o(p)
o.K(t)
p[0]=p[0]-u[0]
p[1]=p[1]-u[1]
p[2]=p[2]-u[2]
o.aB(0)
n=q.bF(o)
n.aB(0)
m=o.bF(n)
m.aB(0)
u=n.ay(t)
l=m.ay(t)
t=o.ay(t)
k=n.a
j=k[0]
i=m.a
h=i[0]
g=p[0]
f=k[1]
e=i[1]
d=p[1]
k=k[2]
i=i[2]
p=p[2]
s[15]=1
s[14]=-t
s[13]=-l
s[12]=-u
s[11]=0
s[10]=p
s[9]=i
s[8]=k
s[7]=0
s[6]=d
s[5]=e
s[4]=f
s[3]=0
s[2]=g
s[1]=h
s[0]=j
j=x.f
h=j.a
h[0]=s[2]
h[1]=s[6]
h[2]=s[10]
x=-x.db
c=Math.sqrt(j.gaA())
n=h[0]/c
m=h[1]/c
o=h[2]/c
b=Math.cos(x)
a=Math.sin(x)
a0=1-b
a1=n*n*a0+b
x=o*a
a2=n*m*a0-x
h=m*a
a3=n*o*a0+h
a4=m*n*a0+x
a5=m*m*a0+b
x=n*a
a6=m*o*a0-x
a7=o*n*a0-h
a8=o*m*a0+x
a9=o*o*a0+b
x=s[0]
h=s[4]
j=s[8]
g=s[1]
f=s[5]
e=s[9]
d=s[2]
k=s[6]
i=s[10]
p=s[3]
u=s[7]
l=s[11]
s[0]=x*a1+h*a4+j*a7
s[1]=g*a1+f*a4+e*a7
s[2]=d*a1+k*a4+i*a7
s[3]=p*a1+u*a4+l*a7
s[4]=x*a2+h*a5+j*a8
s[5]=g*a2+f*a5+e*a8
s[6]=d*a2+k*a5+i*a8
s[7]=p*a2+u*a5+l*a8
s[8]=x*a3+h*a6+j*a9
s[9]=g*a3+f*a6+e*a9
s[10]=d*a3+k*a6+i*a9
s[11]=p*a3+u*a6+l*a9
v.c.a0(0)
v.b.a0(0)
w.e=0
w.d=0
w.f=0
w.c.a0(0)
w.b.a0(0)
b0=Math.cos(0.01)
b1=Math.sin(0.01)
w=this.c.d.a
v=w[4]
l=w[8]
u=w[5]
p=w[9]
s=w[6]
i=w[10]
k=w[7]
d=w[11]
e=-b1
w[4]=v*b0+l*b1
w[5]=u*b0+p*b1
w[6]=s*b0+i*b1
w[7]=k*b0+d*b1
w[8]=v*e+l*b0
w[9]=u*e+p*b0
w[10]=s*e+i*b0
w[11]=k*e+d*b0
b0=Math.cos(0.01)
b1=Math.sin(0.01)
d=w[0]
e=w[8]
k=-b1
i=w[1]
s=w[9]
p=w[2]
u=w[10]
l=w[3]
v=w[11]
w[0]=d*b0+e*k
w[1]=i*b0+s*k
w[2]=p*b0+u*k
w[3]=l*b0+v*k
w[8]=d*b1+e*b0
w[9]=i*b1+s*b0
w[10]=p*b1+u*b0
w[11]=l*b1+v*b0
try{x=this.d
x.b2(x.f)
J.aU(x.d.a,x.c,null)}catch(b2){z=H.Z(b2)
P.ae(z)}b3=H.k([],[G.bm])
this.e.cD(b3)
b4=H.k([],[P.d])
for(x=b3.length,b5=0;b5<b3.length;b3.length===x||(0,H.M)(b3),++b5)C.a.l(b4,b3[b5].k(0))
this.f.cN(y.a,C.a.X(b4,"<br>"))
C.w.gdn(window).a1(this,-1)}},
kX:{"^":"m:29;",
$1:function(a){H.f(a,"$isQ")
C.w.bn(window,"Camera error "+H.e(a)+": - do you have a camera installed?")}}},1]]
setupProgram(dart,0,0)
J.C=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ds.prototype
return J.dr.prototype}if(typeof a=="string")return J.br.prototype
if(a==null)return J.hn.prototype
if(typeof a=="boolean")return J.hm.prototype
if(a.constructor==Array)return J.bp.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.b)return a
return J.c5(a)}
J.aQ=function(a){if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(a.constructor==Array)return J.bp.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.b)return a
return J.c5(a)}
J.er=function(a){if(a==null)return a
if(a.constructor==Array)return J.bp.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.b)return a
return J.c5(a)}
J.kF=function(a){if(typeof a=="number")return J.bq.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b9.prototype
return a}
J.kG=function(a){if(typeof a=="number")return J.bq.prototype
if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b9.prototype
return a}
J.es=function(a){if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b9.prototype
return a}
J.j=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.b)return a
return J.c5(a)}
J.c4=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.b9.prototype
return a}
J.aF=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.C(a).D(a,b)}
J.a8=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kF(a).T(a,b)}
J.bj=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kT(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aQ(a).h(a,b)}
J.cR=function(a,b){return J.es(a).al(a,b)}
J.bI=function(a,b){return J.j(a).d9(a,b)}
J.eX=function(a,b,c,d){return J.j(a).da(a,b,c,d)}
J.eY=function(a,b,c){return J.j(a).dc(a,b,c)}
J.cS=function(a,b){return J.j(a).bm(a,b)}
J.eZ=function(a,b,c,d){return J.j(a).dk(a,b,c,d)}
J.cT=function(a,b,c){return J.j(a).bp(a,b,c)}
J.f_=function(a,b){return J.j(a).dr(a,b)}
J.c9=function(a,b,c){return J.j(a).bq(a,b,c)}
J.f0=function(a,b,c){return J.j(a).bs(a,b,c)}
J.aU=function(a,b,c){return J.j(a).bt(a,b,c)}
J.bJ=function(a,b){return J.j(a).du(a,b)}
J.f1=function(a,b){return J.j(a).bu(a,b)}
J.f2=function(a,b,c){return J.j(a).bv(a,b,c)}
J.cU=function(a,b,c,d){return J.j(a).bw(a,b,c,d)}
J.f3=function(a,b){return J.j(a).by(a,b)}
J.f4=function(a,b,c,d,e){return J.j(a).bz(a,b,c,d,e)}
J.f5=function(a,b){return J.kG(a).L(a,b)}
J.ca=function(a,b,c){return J.aQ(a).dD(a,b,c)}
J.cb=function(a){return J.j(a).bB(a)}
J.f6=function(a){return J.j(a).bC(a)}
J.f7=function(a){return J.j(a).bE(a)}
J.f8=function(a){return J.j(a).dJ(a)}
J.f9=function(a,b){return J.j(a).bG(a,b)}
J.cc=function(a,b){return J.j(a).bH(a,b)}
J.fa=function(a,b,c,d){return J.j(a).bI(a,b,c,d)}
J.fb=function(a,b,c,d,e){return J.j(a).dL(a,b,c,d,e)}
J.fc=function(a,b,c,d,e){return J.j(a).bJ(a,b,c,d,e)}
J.fd=function(a,b,c,d,e,f){return J.j(a).dM(a,b,c,d,e,f)}
J.fe=function(a,b){return J.er(a).u(a,b)}
J.bK=function(a,b){return J.j(a).bK(a,b)}
J.ff=function(a,b){return J.j(a).bL(a,b)}
J.fg=function(a){return J.j(a).dN(a)}
J.fh=function(a,b){return J.j(a).E(a,b)}
J.fi=function(a){return J.j(a).gdq(a)}
J.ao=function(a){return J.C(a).gA(a)}
J.bL=function(a){return J.er(a).gB(a)}
J.aV=function(a){return J.aQ(a).gj(a)}
J.fj=function(a){return J.j(a).gdV(a)}
J.fk=function(a){return J.j(a).ge2(a)}
J.fl=function(a){return J.c4(a).ge7(a)}
J.bM=function(a){return J.c4(a).gad(a)}
J.cd=function(a){return J.c4(a).ga2(a)}
J.cV=function(a){return J.c4(a).gcf(a)}
J.ce=function(a,b){return J.j(a).Y(a,b)}
J.fm=function(a){return J.j(a).ae(a)}
J.fn=function(a){return J.j(a).aG(a)}
J.fo=function(a,b){return J.j(a).aI(a,b)}
J.fp=function(a,b,c){return J.j(a).aJ(a,b,c)}
J.cW=function(a,b,c){return J.j(a).aN(a,b,c)}
J.fq=function(a,b){return J.j(a).bO(a,b)}
J.fr=function(a,b,c){return J.j(a).bV(a,b,c)}
J.cX=function(a){return J.j(a).dX(a)}
J.fs=function(a,b,c,d){return J.j(a).aS(a,b,c,d)}
J.ft=function(a,b,c,d,e,f,g){return J.j(a).bY(a,b,c,d,e,f,g)}
J.fu=function(a,b,c,d){return J.j(a).bZ(a,b,c,d)}
J.bN=function(a,b,c,d){return J.j(a).c_(a,b,c,d)}
J.fv=function(a){return J.es(a).e3(a)}
J.bk=function(a){return J.C(a).k(a)}
J.fw=function(a,b,c,d){return J.j(a).e5(a,b,c,d)}
J.fx=function(a,b,c){return J.j(a).c2(a,b,c)}
J.fy=function(a,b,c){return J.j(a).c3(a,b,c)}
J.cf=function(a,b,c){return J.j(a).c4(a,b,c)}
J.fz=function(a,b,c){return J.j(a).c5(a,b,c)}
J.cY=function(a,b,c){return J.j(a).c6(a,b,c)}
J.cZ=function(a,b,c){return J.j(a).c7(a,b,c)}
J.d_=function(a,b,c){return J.j(a).c8(a,b,c)}
J.d0=function(a,b,c,d){return J.j(a).c9(a,b,c,d)}
J.d1=function(a,b,c,d){return J.j(a).ca(a,b,c,d)}
J.fA=function(a,b){return J.j(a).cb(a,b)}
J.fB=function(a,b,c){return J.j(a).e6(a,b,c)}
J.fC=function(a,b,c,d,e,f,g){return J.j(a).cc(a,b,c,d,e,f,g)}
J.fD=function(a,b,c,d,e){return J.j(a).ce(a,b,c,d,e)}
I.aS=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.o=W.bO.prototype
C.I=W.cj.prototype
C.x=W.fS.prototype
C.p=W.h_.prototype
C.J=W.h1.prototype
C.K=W.he.prototype
C.q=W.hf.prototype
C.L=J.h.prototype
C.a=J.bp.prototype
C.y=J.dr.prototype
C.e=J.ds.prototype
C.r=J.bq.prototype
C.h=J.br.prototype
C.S=J.bs.prototype
C.i=H.hO.prototype
C.m=H.hP.prototype
C.W=W.hQ.prototype
C.X=W.hU.prototype
C.B=J.i0.prototype
C.C=W.ia.prototype
C.H=W.iC.prototype
C.v=J.b9.prototype
C.ad=W.aL.prototype
C.w=W.iO.prototype
C.d=new P.jI()
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
C.z=function(hooks) { return hooks; }

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
C.A=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.T=H.k(I.aS(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.U=H.k(I.aS(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.V=H.k(I.aS([]),[P.d])
C.t=H.k(I.aS(["bind","if","ref","repeat","syntax"]),[P.d])
C.u=H.k(I.aS(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
C.Y=new G.E("vec3","vertex btangents",0)
C.c=new G.E("vec3","",0)
C.Z=new G.E("vec4","delta from light",0)
C.n=new G.E("","",0)
C.D=new G.E("vec3","vertex coordinates",0)
C.a_=new G.E("vec3","vertex binormals",0)
C.E=new G.E("vec4","for wireframe",0)
C.a0=new G.E("vec4","per vertex color",0)
C.a1=new G.E("float","for normal maps",0)
C.j=new G.E("mat4","",0)
C.a3=new G.E("mat4","",4)
C.a2=new G.E("mat4","",128)
C.b=new G.E("float","",0)
C.a4=new G.E("float","",4)
C.a5=new G.E("float","depth for shadowmaps",0)
C.f=new G.E("sampler2D","",0)
C.a6=new G.E("float","for bump maps",0)
C.a7=new G.E("vec2","texture uvs",0)
C.a8=new G.E("float","time since program start in sec",0)
C.k=new G.E("vec2","",0)
C.a9=new G.E("samplerCube","",0)
C.l=new G.E("vec4","",0)
C.aa=new G.E("vec3","vertex normals",0)
C.ab=new G.E("sampler2DShadow","",0)
C.F=new G.E("vec3","per vertex color",0)
C.G=new G.E("mat3","",0)
C.ac=new G.E("vec3","vertex tangents",0)
$.a9=0
$.aW=null
$.d4=null
$.cD=!1
$.eu=null
$.el=null
$.ez=null
$.c3=null
$.c6=null
$.cK=null
$.aN=null
$.bb=null
$.bc=null
$.cE=!1
$.D=C.d
$.af=null
$.cl=null
$.dg=null
$.df=null
$.db=null
$.da=null
$.d9=null
$.d8=null
$.eq=0
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
I.$lazy(y,x,w)}})(["lh","eE",function(){return H.et("_$dart_dartClosure")},"lS","cO",function(){return H.et("_$dart_js")},"mD","eH",function(){return H.ac(H.bX({
toString:function(){return"$receiver$"}}))},"mE","eI",function(){return H.ac(H.bX({$method$:null,
toString:function(){return"$receiver$"}}))},"mF","eJ",function(){return H.ac(H.bX(null))},"mG","eK",function(){return H.ac(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"mJ","eN",function(){return H.ac(H.bX(void 0))},"mK","eO",function(){return H.ac(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"mI","eM",function(){return H.ac(H.dO(null))},"mH","eL",function(){return H.ac(function(){try{null.$method$}catch(z){return z.message}}())},"mM","eQ",function(){return H.ac(H.dO(void 0))},"mL","eP",function(){return H.ac(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mV","cP",function(){return P.iR()},"nb","bi",function(){return[]},"le","eD",function(){return{}},"n2","eS",function(){return P.cs(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"n3","cQ",function(){return P.a_(P.d,P.bn)},"mp","eF",function(){return new G.dN(1281,0,4294967295)},"l9","eB",function(){return new G.dM(1281,1281,1281)},"n9","a7",function(){return P.cr(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.F,"aColorAlpha",C.a0,"aPosition",C.D,"aTexUV",C.a7,"aNormal",C.aa,"aBinormal",C.a_,"aCenter",C.E,"aPointSize",C.b,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ac,"aBitangent",C.Y,"iaRotation",C.l,"iaTranslation",C.c,"iaScale",C.b,"iaColor",C.c,"vColor",C.F,"vTexUV",C.k,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.D,"vPositionFromLight",C.Z,"vCenter",C.E,"vDepth",C.a5,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.G,"uConvolutionMatrix",C.G,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ab,"uTexture",C.f,"uTexture2",C.f,"uTexture3",C.f,"uTexture4",C.f,"uSpecularMap",C.f,"uNormalMap",C.f,"uBumpMap",C.f,"uDepthMap",C.f,"uCubeTexture",C.a9,"uAnimationTable",C.f,"uTime",C.a8,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.c,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a2,"uLightDescs",C.a3,"uLightCount",C.b,"uLightTypes",C.a4,"uBumpScale",C.a6,"uNormalScale",C.a1],P.d,G.E)},"my","eG",function(){var z=G.iE()
z.b=!0
return z},"lc","eC",function(){return T.aK(1,0,0)},"nh","eU",function(){var z,y
z=G.bW("nullUV")
y=[P.d]
z.aU(H.k(["aPosition","aTexUV"],y))
z.aX(H.k(["vTexUV"],y))
z.b=z.b4(!1,H.t(H.k(["void main() {\n  gl_Position = vec4(aPosition, 1.0);\n  vTexUV = aTexUV;\n}\n"],y),"$isa",y,"$asa"),null)
return z},"ng","eT",function(){var z,y
z=G.bW("copyF")
y=[P.d]
z.ah(H.k(["uTexture"],y))
z.aX(H.k(["vTexUV"],y))
z.ai(H.k(["oFragColor = texture(uTexture, vTexUV);"],y))
return z},"nj","eW",function(){var z,y
z=G.bW("SolidColor")
y=[P.d]
z.aU(H.k(["aPosition"],y))
z.ah(H.k(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.ai(H.k(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"],y))
return z},"ni","eV",function(){var z,y
z=G.bW("SolidColorF")
y=[P.d]
z.ah(H.k(["uColor"],y))
z.ai(H.k(["oFragColor = vec4( uColor, 1.0 );"],y))
return z},"n_","eR",function(){return H.k([T.aK(0,0,1),T.aK(0,0,-1),T.aK(0,1,0),T.aK(0,-1,0),T.aK(1,0,0),T.aK(-1,0,0)],[T.o])}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.A},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:P.A,args:[,,]},{func:1,ret:P.A,args:[W.V]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.S,args:[W.T,P.d,P.d,W.bA]},{func:1,ret:P.A,args:[,]},{func:1,ret:P.d,args:[P.F]},{func:1,args:[,]},{func:1,ret:P.A,args:[W.aI]},{func:1,ret:P.S,args:[W.ab]},{func:1,ret:P.S,args:[P.d]},{func:1,ret:-1,args:[W.P]},{func:1,ret:P.A,args:[W.b0]},{func:1,ret:P.S,args:[W.u]},{func:1,ret:P.A,args:[P.G]},{func:1,args:[W.P]},{func:1,ret:P.A,args:[{func:1,ret:-1}]},{func:1,args:[P.d]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.bx]},{func:1,args:[,P.d]},{func:1,ret:P.A,args:[,],opt:[P.a4]},{func:1,ret:[P.R,,],args:[,]},{func:1,ret:P.A,args:[W.aL]},{func:1,ret:P.A,args:[P.b]},{func:1,ret:P.F,args:[P.F,P.b]},{func:1,ret:-1,args:[P.G]},{func:1,ret:P.A,args:[P.Q]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.A,args:[W.bu]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:-1,args:[W.u,W.u]}]
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
if(x==y)H.l2(d||a)
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
Isolate.bf=a.bf
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
if(typeof dartMainRunner==="function")dartMainRunner(U.ew,[])
else U.ew([])})})()
//# sourceMappingURL=camera_overlay.dart.js.map
