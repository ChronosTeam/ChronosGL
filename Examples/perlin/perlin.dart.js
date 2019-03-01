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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.b9=function(){}
var dart=[["","",,H,{"^":"",lF:{"^":"b;a"}}],["","",,J,{"^":"",
cz:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bZ:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cy==null){H.kC()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.dH("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cC()]
if(v!=null)return v
v=H.kH(a)
if(v!=null)return v
if(typeof a=="function")return C.V
y=Object.getPrototypeOf(a)
if(y==null)return C.D
if(y===Object.prototype)return C.D
if(typeof w=="function"){Object.defineProperty(w,$.cC(),{value:C.x,enumerable:false,writable:true,configurable:true})
return C.x}return C.x},
h:{"^":"b;",
B:function(a,b){return a===b},
gv:function(a){return H.b0(a)},
k:["cn",function(a){return"Instance of '"+H.b1(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hc:{"^":"h;",
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isR:1},
dg:{"^":"h;",
B:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
$isz:1},
ch:{"^":"h;",
gv:function(a){return 0},
k:["cp",function(a){return String(a)}]},
hM:{"^":"ch;"},
b3:{"^":"ch;"},
bq:{"^":"ch;",
k:function(a){var z=a[$.es()]
if(z==null)return this.cp(a)
return"JavaScript function for "+H.e(J.bi(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbl:1},
bn:{"^":"h;$ti",
l:function(a,b){H.x(b,H.o(a,0))
if(!!a.fixed$length)H.a3(P.A("add"))
a.push(b)},
H:function(a,b){var z,y
H.w(b,"$isk",[H.o(a,0)],"$ask")
if(!!a.fixed$length)H.a3(P.A("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.M)(b),++y)a.push(b[y])},
a1:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.h(z,y,H.e(a[y]))
return z.join(b)},
q:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
bp:function(a,b){var z,y
H.i(b,{func:1,ret:P.R,args:[H.o(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.aG(a))}return!1},
ci:function(a,b){if(!!a.immutable$list)H.a3(P.A("sort"))
H.i7(a,J.kd(),H.o(a,0))},
ai:function(a){return this.ci(a,null)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aF(a[z],b))return!0
return!1},
k:function(a){return P.cf(a,"[","]")},
gw:function(a){return new J.fr(a,a.length,0,[H.o(a,0)])},
gv:function(a){return H.b0(a)},
gj:function(a){return a.length},
i:function(a,b){if(b>=a.length||b<0)throw H.c(H.b8(a,b))
return a[b]},
h:function(a,b,c){H.x(c,H.o(a,0))
if(!!a.immutable$list)H.a3(P.A("indexed set"))
if(b>=a.length||b<0)throw H.c(H.b8(a,b))
a[b]=c},
$isu:1,
$asu:I.b9,
$isk:1,
$isa:1,
p:{
hb:function(a,b){return J.cg(H.j(a,[b]))},
cg:function(a){H.bd(a)
a.fixed$length=Array
return a},
lD:[function(a,b){return J.eS(H.el(a,"$isW"),H.el(b,"$isW"))},"$2","kd",8,0,32]}},
lE:{"^":"bn;$ti"},
fr:{"^":"b;a,b,c,0d,$ti",
sb4:function(a){this.d=H.x(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.M(z))
x=this.c
if(x>=y){this.sb4(null)
return!1}this.sb4(z[x]);++this.c
return!0},
$isaW:1},
bo:{"^":"h;",
J:function(a,b){var z
H.cA(b)
if(typeof b!=="number")throw H.c(H.b7(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gaf(b)
if(this.gaf(a)===z)return 0
if(this.gaf(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaf:function(a){return a===0?1/a<0:a<0},
bY:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.A(""+a+".toInt()"))},
dq:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.c(P.A(""+a+".ceil()"))},
dr:function(a,b,c){if(this.J(b,c)>0)throw H.c(H.b7(b))
if(this.J(a,b)<0)return b
if(this.J(a,c)>0)return c
return a},
dW:function(a,b){var z
if(b>20)throw H.c(P.bM(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gaf(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
cr:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bm(a,b)},
U:function(a,b){return(a|0)===a?a/b|0:this.bm(a,b)},
bm:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.A("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
bk:function(a,b){var z
if(a>0)z=this.da(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
da:function(a,b){return b>31?0:a>>>b},
P:function(a,b){if(typeof b!=="number")throw H.c(H.b7(b))
return a>b},
$isW:1,
$asW:function(){return[P.F]},
$isa2:1,
$isF:1},
df:{"^":"bo;",$isE:1},
de:{"^":"bo;"},
bp:{"^":"h;",
aq:function(a,b){if(b>=a.length)throw H.c(H.b8(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.t(b)
if(typeof b!=="string")throw H.c(P.cU(b,null,null))
return a+b},
ck:function(a,b,c){var z
if(c>a.length)throw H.c(P.bM(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cj:function(a,b){return this.ck(a,b,0)},
cm:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bN(b,null,null))
if(b>c)throw H.c(P.bN(b,null,null))
if(c>a.length)throw H.c(P.bN(c,null,null))
return a.substring(b,c)},
cl:function(a,b){return this.cm(a,b,null)},
dV:function(a){return a.toLowerCase()},
dt:function(a,b,c){if(c>a.length)throw H.c(P.bM(c,0,a.length,null,null))
return H.kP(a,b,c)},
J:function(a,b){var z
H.t(b)
if(typeof b!=="string")throw H.c(H.b7(b))
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
i:function(a,b){if(b>=a.length||!1)throw H.c(H.b8(a,b))
return a[b]},
$isu:1,
$asu:I.b9,
$isW:1,
$asW:function(){return[P.d]},
$ishJ:1,
$isd:1}}],["","",,H,{"^":"",
dd:function(){return new P.cn("No element")},
ha:function(){return new P.cn("Too many elements")},
i7:function(a,b,c){H.w(a,"$isa",[c],"$asa")
H.i(b,{func:1,ret:P.E,args:[c,c]})
H.bs(a,0,J.aS(a)-1,b,c)},
bs:function(a,b,c,d,e){H.w(a,"$isa",[e],"$asa")
H.i(d,{func:1,ret:P.E,args:[e,e]})
if(c-b<=32)H.i6(a,b,c,d,e)
else H.i5(a,b,c,d,e)},
i6:function(a,b,c,d,e){var z,y,x,w,v
H.w(a,"$isa",[e],"$asa")
H.i(d,{func:1,ret:P.E,args:[e,e]})
for(z=b+1,y=J.bb(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.a8(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.h(a,w,y.i(a,v))
w=v}y.h(a,w,x)}},
i5:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.w(a,"$isa",[a2],"$asa")
H.i(a1,{func:1,ret:P.E,args:[a2,a2]})
z=C.e.U(a0-b+1,6)
y=b+z
x=a0-z
w=C.e.U(b+a0,2)
v=w-z
u=w+z
t=J.bb(a)
s=t.i(a,y)
r=t.i(a,v)
q=t.i(a,w)
p=t.i(a,u)
o=t.i(a,x)
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
p=n}t.h(a,y,s)
t.h(a,w,q)
t.h(a,x,o)
t.h(a,v,t.i(a,b))
t.h(a,u,t.i(a,a0))
m=b+1
l=a0-1
if(J.aF(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.i(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a4()
if(i<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.P()
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
if(typeof e!=="number")return e.a4()
if(e<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.P()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.P()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.a4()
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
H.bs(a,b,m-2,a1,a2)
H.bs(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aF(a1.$2(t.i(a,m),r),0);)++m
for(;J.aF(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.a4()
h=l-1
if(i<0){t.h(a,k,t.i(a,m))
g=m+1
t.h(a,m,t.i(a,l))
t.h(a,l,j)
m=g}else{t.h(a,k,t.i(a,l))
t.h(a,l,j)}l=h
break}}H.bs(a,m,l,a1,a2)}else H.bs(a,m,l,a1,a2)},
d4:{"^":"k;"},
bK:{"^":"d4;$ti",
gw:function(a){return new H.dk(this,this.gj(this),0,[H.cx(this,"bK",0)])},
aH:function(a,b){return this.co(0,H.i(b,{func:1,ret:P.R,args:[H.cx(this,"bK",0)]}))}},
dk:{"^":"b;a,b,c,0d,$ti",
sb5:function(a){this.d=H.x(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.bb(z)
x=y.gj(z)
if(this.b!==x)throw H.c(P.aG(z))
w=this.c
if(w>=x){this.sb5(null)
return!1}this.sb5(y.q(z,w));++this.c
return!0},
$isaW:1},
hp:{"^":"bK;a,b,$ti",
gj:function(a){return J.aS(this.a)},
q:function(a,b){return this.b.$1(J.f0(this.a,b))},
$asbK:function(a,b){return[b]},
$ask:function(a,b){return[b]}},
dI:{"^":"k;a,b,$ti",
gw:function(a){return new H.iA(J.bD(this.a),this.b,this.$ti)}},
iA:{"^":"aW;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA(z)))return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
bJ:{"^":"b;$ti"}}],["","",,H,{"^":"",
aE:function(a){var z,y
z=H.t(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
ku:function(a){return init.types[H.L(a)]},
kF:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.B(a).$isv},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bi(a)
if(typeof z!=="string")throw H.c(H.b7(a))
return z},
b0:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b1:function(a){return H.hN(a)+H.bU(H.ai(a),0,null)},
hN:function(a){var z,y,x,w,v,u,t,s,r
z=J.B(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.N||!!z.$isb3){u=C.C(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aE(w.length>1&&C.h.aq(w,0)===36?C.h.cl(w,1):w)},
aI:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hU:function(a){var z=H.aI(a).getFullYear()+0
return z},
hS:function(a){var z=H.aI(a).getMonth()+1
return z},
hO:function(a){var z=H.aI(a).getDate()+0
return z},
hP:function(a){var z=H.aI(a).getHours()+0
return z},
hR:function(a){var z=H.aI(a).getMinutes()+0
return z},
hT:function(a){var z=H.aI(a).getSeconds()+0
return z},
hQ:function(a){var z=H.aI(a).getMilliseconds()+0
return z},
by:function(a){throw H.c(H.b7(a))},
n:function(a,b){if(a==null)J.aS(a)
throw H.c(H.b8(a,b))},
b8:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.al(!0,b,"index",null)
z=H.L(J.aS(a))
if(!(b<0)){if(typeof z!=="number")return H.by(z)
y=b>=z}else y=!0
if(y)return P.G(b,a,"index",null,z)
return P.bN(b,"index",null)},
b7:function(a){return new P.al(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.cl()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eo})
z.name=""}else z.toString=H.eo
return z},
eo:function(){return J.bi(this.dartException)},
a3:function(a){throw H.c(a)},
M:function(a){throw H.c(P.aG(a))},
Y:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kR(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.bk(x,16)&8191)===10)switch(w){case 438:return z.$1(H.ci(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dt(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.et()
u=$.eu()
t=$.ev()
s=$.ew()
r=$.ez()
q=$.eA()
p=$.ey()
$.ex()
o=$.eC()
n=$.eB()
m=v.I(y)
if(m!=null)return z.$1(H.ci(H.t(y),m))
else{m=u.I(y)
if(m!=null){m.method="call"
return z.$1(H.ci(H.t(y),m))}else{m=t.I(y)
if(m==null){m=s.I(y)
if(m==null){m=r.I(y)
if(m==null){m=q.I(y)
if(m==null){m=p.I(y)
if(m==null){m=s.I(y)
if(m==null){m=o.I(y)
if(m==null){m=n.I(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dt(H.t(y),m))}}return z.$1(new H.iw(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dx()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.al(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dx()
return a},
aB:function(a){var z
if(a==null)return new H.dZ(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dZ(a)},
kq:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.h(0,a[y],a[x])}return b},
kE:function(a,b,c,d,e,f){H.f(a,"$isbl")
switch(H.L(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.d8("Unsupported number of arguments for wrapped closure"))},
aQ:function(a,b){var z
H.L(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kE)
a.$identity=z
return z},
fC:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.B(d).$isa){z.$reflectionInfo=d
x=H.hY(z).r}else x=d
w=e?Object.create(new H.i9().constructor.prototype):Object.create(new H.ca(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a9
if(typeof u!=="number")return u.G()
$.a9=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.cZ(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.ku,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cX:H.cb
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
fz:function(a,b,c,d){var z=H.cb
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cZ:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fB(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fz(y,!w,z,b)
if(y===0){w=$.a9
if(typeof w!=="number")return w.G()
$.a9=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aT
if(v==null){v=H.bG("self")
$.aT=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a9
if(typeof w!=="number")return w.G()
$.a9=w+1
t+=w
w="return function("+t+"){return this."
v=$.aT
if(v==null){v=H.bG("self")
$.aT=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fA:function(a,b,c,d){var z,y
z=H.cb
y=H.cX
switch(b?-1:a){case 0:throw H.c(H.i1("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fB:function(a,b){var z,y,x,w,v,u,t,s
z=$.aT
if(z==null){z=H.bG("self")
$.aT=z}y=$.cW
if(y==null){y=H.bG("receiver")
$.cW=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fA(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.a9
if(typeof y!=="number")return y.G()
$.a9=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.a9
if(typeof y!=="number")return y.G()
$.a9=y+1
return new Function(z+y+"}")()},
cv:function(a,b,c,d,e,f,g){return H.fC(a,b,H.L(c),d,!!e,!!f,g)},
t:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a5(a,"String"))},
ed:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a5(a,"double"))},
cA:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a5(a,"num"))},
bW:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a5(a,"bool"))},
L:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a5(a,"int"))},
cB:function(a,b){throw H.c(H.a5(a,H.aE(H.t(b).substring(3))))},
kN:function(a,b){throw H.c(H.cY(a,H.aE(H.t(b).substring(3))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.B(a)[b])return a
H.cB(a,b)},
aj:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.B(a)[b]
else z=!0
if(z)return a
H.kN(a,b)},
el:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.B(a)[b])return a
H.cB(a,b)},
bd:function(a){if(a==null)return a
if(!!J.B(a).$isa)return a
throw H.c(H.a5(a,"List<dynamic>"))},
kG:function(a,b){var z
if(a==null)return a
z=J.B(a)
if(!!z.$isa)return a
if(z[b])return a
H.cB(a,b)},
cw:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.L(z)]
else return a.$S()}return},
bx:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cw(J.B(a))
if(z==null)return!1
return H.e4(z,null,b,null)},
i:function(a,b){var z,y
if(a==null)return a
if($.cr)return a
$.cr=!0
try{if(H.bx(a,b))return a
z=H.bz(b)
y=H.a5(a,z)
throw H.c(y)}finally{$.cr=!1}},
ba:function(a,b){if(a!=null&&!H.cu(a,b))H.a3(H.a5(a,H.bz(b)))
return a},
e8:function(a){var z,y
z=J.B(a)
if(!!z.$ism){y=H.cw(z)
if(y!=null)return H.bz(y)
return"Closure"}return H.b1(a)},
kQ:function(a){throw H.c(new P.fI(H.t(a)))},
eh:function(a){return init.getIsolateTag(a)},
j:function(a,b){a.$ti=b
return a},
ai:function(a){if(a==null)return
return a.$ti},
n4:function(a,b,c){return H.aR(a["$as"+H.e(c)],H.ai(b))},
bc:function(a,b,c,d){var z
H.t(c)
H.L(d)
z=H.aR(a["$as"+H.e(c)],H.ai(b))
return z==null?null:z[d]},
cx:function(a,b,c){var z
H.t(b)
H.L(c)
z=H.aR(a["$as"+H.e(b)],H.ai(a))
return z==null?null:z[c]},
o:function(a,b){var z
H.L(b)
z=H.ai(a)
return z==null?null:z[b]},
bz:function(a){return H.aA(a,null)},
aA:function(a,b){var z,y
H.w(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aE(a[0].builtin$cls)+H.bU(a,1,b)
if(typeof a=="function")return H.aE(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.L(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.n(b,y)
return H.e(b[y])}if('func' in a)return H.kc(a,b)
if('futureOr' in a)return"FutureOr<"+H.aA("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kc:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
H.w(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.j([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.n(b,r)
t=C.h.G(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.aA(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aA(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aA(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aA(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kp(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.t(z[l])
n=n+m+H.aA(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bU:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.co("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aA(u,c)}return"<"+z.k(0)+">"},
kt:function(a){var z,y,x,w
z=J.B(a)
if(!!z.$ism){y=H.cw(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ai(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aR:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ah:function(a,b,c,d){var z,y
H.t(b)
H.bd(c)
H.t(d)
if(a==null)return!1
z=H.ai(a)
y=J.B(a)
if(y[b]==null)return!1
return H.eb(H.aR(y[d],z),null,c,null)},
bA:function(a,b,c,d){H.t(b)
H.bd(c)
H.t(d)
if(a==null)return a
if(H.ah(a,b,c,d))return a
throw H.c(H.cY(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aE(b.substring(3))+H.bU(c,0,null),init.mangledGlobalNames)))},
w:function(a,b,c,d){H.t(b)
H.bd(c)
H.t(d)
if(a==null)return a
if(H.ah(a,b,c,d))return a
throw H.c(H.a5(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aE(b.substring(3))+H.bU(c,0,null),init.mangledGlobalNames)))},
eb:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a0(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a0(a[y],b,c[y],d))return!1
return!0},
n1:function(a,b,c){return a.apply(b,H.aR(J.B(b)["$as"+H.e(c)],H.ai(b)))},
ej:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="z"||a===-1||a===-2||H.ej(z)}return!1},
cu:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="z"||b===-1||b===-2||H.ej(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cu(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bx(a,b)}z=J.B(a).constructor
y=H.ai(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a0(z,null,b,null)},
x:function(a,b){if(a!=null&&!H.cu(a,b))throw H.c(H.a5(a,H.bz(b)))
return a},
a0:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a0(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="z")return!0
if('func' in c)return H.e4(a,b,c,d)
if('func' in a)return c.builtin$cls==="bl"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a0("type" in a?a.type:null,b,x,d)
else if(H.a0(a,b,x,d))return!0
else{if(!('$is'+"X" in y.prototype))return!1
w=y.prototype["$as"+"X"]
v=H.aR(w,z?a.slice(1):null)
return H.a0(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eb(H.aR(r,z),b,u,d)},
e4:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.kM(m,b,l,d)},
kM:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a0(c[w],d,a[w],b))return!1}return!0},
n2:function(a,b,c){Object.defineProperty(a,H.t(b),{value:c,enumerable:false,writable:true,configurable:true})},
kH:function(a){var z,y,x,w,v,u
z=H.t($.ei.$1(a))
y=$.bX[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c0[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.t($.ea.$2(a,z))
if(z!=null){y=$.bX[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c0[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c1(x)
$.bX[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c0[z]=x
return x}if(v==="-"){u=H.c1(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.em(a,x)
if(v==="*")throw H.c(P.dH(z))
if(init.leafTags[z]===true){u=H.c1(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.em(a,x)},
em:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cz(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c1:function(a){return J.cz(a,!1,null,!!a.$isv)},
kL:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c1(z)
else return J.cz(z,c,null,null)},
kC:function(){if(!0===$.cy)return
$.cy=!0
H.kD()},
kD:function(){var z,y,x,w,v,u,t,s
$.bX=Object.create(null)
$.c0=Object.create(null)
H.ky()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.en.$1(v)
if(u!=null){t=H.kL(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
ky:function(){var z,y,x,w,v,u,t
z=C.S()
z=H.aP(C.P,H.aP(C.U,H.aP(C.B,H.aP(C.B,H.aP(C.T,H.aP(C.Q,H.aP(C.R(C.C),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ei=new H.kz(v)
$.ea=new H.kA(u)
$.en=new H.kB(t)},
aP:function(a,b){return a(b)||b},
kP:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hX:{"^":"b;a,b,c,d,e,f,r,0x",p:{
hY:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cg(z)
y=z[0]
x=z[1]
return new H.hX(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ir:{"^":"b;a,b,c,d,e,f",
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
ac:function(a){var z,y,x,w,v,u
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
dE:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hG:{"^":"N;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dt:function(a,b){return new H.hG(a,b==null?null:b.method)}}},
hd:{"^":"N;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
ci:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hd(a,y,z?null:b.receiver)}}},
iw:{"^":"N;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kR:{"^":"m:5;a",
$1:function(a){if(!!J.B(a).$isN)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dZ:{"^":"b;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isQ:1},
m:{"^":"b;",
k:function(a){return"Closure '"+H.b1(this).trim()+"'"},
gcb:function(){return this},
$isbl:1,
gcb:function(){return this}},
dz:{"^":"m;"},
i9:{"^":"dz;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aE(z)+"'"}},
ca:{"^":"dz;a,b,c,d",
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ca))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.b0(this.a)
else y=typeof z!=="object"?J.ak(z):H.b0(z)
return(y^H.b0(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.b1(z)+"'")},
p:{
cb:function(a){return a.a},
cX:function(a){return a.c},
bG:function(a){var z,y,x,w,v
z=new H.ca("self","target","receiver","name")
y=J.cg(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
is:{"^":"N;a",
k:function(a){return this.a},
p:{
a5:function(a,b){return new H.is("TypeError: "+P.bI(a)+": type '"+H.e8(a)+"' is not a subtype of type '"+b+"'")}}},
fx:{"^":"N;a",
k:function(a){return this.a},
p:{
cY:function(a,b){return new H.fx("CastError: "+P.bI(a)+": type '"+H.e8(a)+"' is not a subtype of type '"+b+"'")}}},
i0:{"^":"N;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
i1:function(a){return new H.i0(a)}}},
dF:{"^":"b;a,0b,0c,0d",
gab:function(){var z=this.b
if(z==null){z=H.bz(this.a)
this.b=z}return z},
k:function(a){return this.gab()},
gv:function(a){var z=this.d
if(z==null){z=C.h.gv(this.gab())
this.d=z}return z},
B:function(a,b){if(b==null)return!1
return b instanceof H.dF&&this.gab()===b.gab()}},
dh:{"^":"dl;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gD:function(a){return new H.ap(this,[H.o(this,0)])},
ae:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cS(z,b)}else{y=this.dI(b)
return y}},
dI:function(a){var z=this.d
if(z==null)return!1
return this.aD(this.av(z,J.ak(a)&0x3ffffff),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a8(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a8(w,b)
x=y==null?null:y.b
return x}else return this.dJ(b)},
dJ:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.av(z,J.ak(a)&0x3ffffff)
x=this.aD(y,a)
if(x<0)return
return y[x].b},
h:function(a,b,c){var z,y,x,w,v,u
H.x(b,H.o(this,0))
H.x(c,H.o(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.ax()
this.b=z}this.b6(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ax()
this.c=y}this.b6(y,b,c)}else{x=this.d
if(x==null){x=this.ax()
this.d=x}w=J.ak(b)&0x3ffffff
v=this.av(x,w)
if(v==null)this.az(x,w,[this.ao(b,c)])
else{u=this.aD(v,b)
if(u>=0)v[u].b=c
else v.push(this.ao(b,c))}}},
C:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[H.o(this,0),H.o(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aG(this))
z=z.c}},
b6:function(a,b,c){var z
H.x(b,H.o(this,0))
H.x(c,H.o(this,1))
z=this.a8(a,b)
if(z==null)this.az(a,b,this.ao(b,c))
else z.b=c},
b8:function(){this.r=this.r+1&67108863},
ao:function(a,b){var z,y
z=new H.hi(H.x(a,H.o(this,0)),H.x(b,H.o(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b8()
return z},
aD:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aF(a[y].a,b))return y
return-1},
k:function(a){return P.dm(this)},
a8:function(a,b){return a[b]},
av:function(a,b){return a[b]},
az:function(a,b,c){a[b]=c},
cT:function(a,b){delete a[b]},
cS:function(a,b){return this.a8(a,b)!=null},
ax:function(){var z=Object.create(null)
this.az(z,"<non-identifier-key>",z)
this.cT(z,"<non-identifier-key>")
return z},
$isdi:1},
hi:{"^":"b;a,b,0c,0d"},
ap:{"^":"d4;a,$ti",
gj:function(a){return this.a.a},
gw:function(a){var z,y
z=this.a
y=new H.hj(z,z.r,this.$ti)
y.c=z.e
return y}},
hj:{"^":"b;a,b,0c,0d,$ti",
sb7:function(a){this.d=H.x(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aG(z))
else{z=this.c
if(z==null){this.sb7(null)
return!1}else{this.sb7(z.a)
this.c=this.c.c
return!0}}},
$isaW:1},
kz:{"^":"m:5;a",
$1:function(a){return this.a(a)}},
kA:{"^":"m:14;a",
$2:function(a,b){return this.a(a,b)}},
kB:{"^":"m:15;a",
$1:function(a){return this.a(H.t(a))}}}],["","",,H,{"^":"",
kp:function(a){return J.hb(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
c2:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bT:function(a){var z,y
if(!!J.B(a).$isu)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.h(z,y,a[y])
return z},
ad:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.b8(b,a))},
hB:{"^":"h;",$isit:1,"%":"DataView;ArrayBufferView;ck|dT|dU|dr|dV|dW|ar"},
ck:{"^":"hB;",
gj:function(a){return a.length},
$isu:1,
$asu:I.b9,
$isv:1,
$asv:I.b9},
dr:{"^":"dU;",
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
h:function(a,b,c){H.ed(c)
H.ad(b,a,a.length)
a[b]=c},
$asbJ:function(){return[P.a2]},
$asp:function(){return[P.a2]},
$isk:1,
$ask:function(){return[P.a2]},
$isa:1,
$asa:function(){return[P.a2]},
"%":"Float64Array"},
ar:{"^":"dW;",
h:function(a,b,c){H.L(c)
H.ad(b,a,a.length)
a[b]=c},
$asbJ:function(){return[P.E]},
$asp:function(){return[P.E]},
$isk:1,
$ask:function(){return[P.E]},
$isa:1,
$asa:function(){return[P.E]}},
hA:{"^":"dr;",$isaf:1,"%":"Float32Array"},
lO:{"^":"ar;",
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lP:{"^":"ar;",
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
$ish8:1,
"%":"Int32Array"},
lQ:{"^":"ar;",
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lR:{"^":"ar;",
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hC:{"^":"ar;",
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
$ismB:1,
"%":"Uint32Array"},
lS:{"^":"ar;",
gj:function(a){return a.length},
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lT:{"^":"ar;",
gj:function(a){return a.length},
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dT:{"^":"ck+p;"},
dU:{"^":"dT+bJ;"},
dV:{"^":"ck+p;"},
dW:{"^":"dV+bJ;"}}],["","",,P,{"^":"",
iF:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kk()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aQ(new P.iH(z),1)).observe(y,{childList:true})
return new P.iG(z,y,x)}else if(self.setImmediate!=null)return P.kl()
return P.km()},
mM:[function(a){self.scheduleImmediate(H.aQ(new P.iI(H.i(a,{func:1,ret:-1})),0))},"$1","kk",4,0,4],
mN:[function(a){self.setImmediate(H.aQ(new P.iJ(H.i(a,{func:1,ret:-1})),0))},"$1","kl",4,0,4],
mO:[function(a){H.i(a,{func:1,ret:-1})
P.jU(0,a)},"$1","km",4,0,4],
h_:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
H.w(a,"$isk",[[P.X,d]],"$ask")
s=[[P.a,d]]
y=new P.P(0,$.C,s)
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.h1(z,b,!1,y)
try{for(r=a,q=r.length,p=0,o=0;p<r.length;r.length===q||(0,H.M)(r),++p){w=r[p]
v=o
w.aG(new P.h0(z,v,y,b,!1,d),x,null)
o=++z.b}if(o===0){r=new P.P(0,$.C,s)
r.bb(C.Z)
return r}r=new Array(o)
r.fixed$length=Array
z.a=H.j(r,[d])}catch(n){u=H.Y(n)
t=H.aB(n)
if(z.b===0||!1){m=u
if(m==null)m=new P.cl()
r=$.C
if(r!==C.d)r.toString
s=new P.P(0,r,s)
s.cP(m,t)
return s}else{z.c=u
z.d=t}}return y},
kg:function(a,b){if(H.bx(a,{func:1,args:[P.b,P.Q]}))return H.i(a,{func:1,ret:null,args:[P.b,P.Q]})
if(H.bx(a,{func:1,args:[P.b]}))return H.i(a,{func:1,ret:null,args:[P.b]})
throw H.c(P.cU(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kf:function(){var z,y
for(;z=$.aN,z!=null;){$.b6=null
y=z.b
$.aN=y
if(y==null)$.b5=null
z.a.$0()}},
n_:[function(){$.cs=!0
try{P.kf()}finally{$.b6=null
$.cs=!1
if($.aN!=null)$.cE().$1(P.ec())}},"$0","ec",0,0,1],
e7:function(a){var z=new P.dK(H.i(a,{func:1,ret:-1}))
if($.aN==null){$.b5=z
$.aN=z
if(!$.cs)$.cE().$1(P.ec())}else{$.b5.b=z
$.b5=z}},
kj:function(a){var z,y,x
H.i(a,{func:1,ret:-1})
z=$.aN
if(z==null){P.e7(a)
$.b6=$.b5
return}y=new P.dK(a)
x=$.b6
if(x==null){y.b=z
$.b6=y
$.aN=y}else{y.b=x.b
x.b=y
$.b6=y
if(y.b==null)$.b5=y}},
kO:function(a){var z,y
z={func:1,ret:-1}
H.i(a,z)
y=$.C
if(C.d===y){P.aO(null,null,C.d,a)
return}y.toString
P.aO(null,null,y,H.i(y.bs(a),z))},
kb:function(a,b,c){a.dn(0)
b.a7(c)},
bV:function(a,b,c,d,e){var z={}
z.a=d
P.kj(new P.kh(z,e))},
e5:function(a,b,c,d,e){var z,y
H.i(d,{func:1,ret:e})
y=$.C
if(y===c)return d.$0()
$.C=c
z=y
try{y=d.$0()
return y}finally{$.C=z}},
e6:function(a,b,c,d,e,f,g){var z,y
H.i(d,{func:1,ret:f,args:[g]})
H.x(e,g)
y=$.C
if(y===c)return d.$1(e)
$.C=c
z=y
try{y=d.$1(e)
return y}finally{$.C=z}},
ki:function(a,b,c,d,e,f,g,h,i){var z,y
H.i(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
y=$.C
if(y===c)return d.$2(e,f)
$.C=c
z=y
try{y=d.$2(e,f)
return y}finally{$.C=z}},
aO:function(a,b,c,d){var z
H.i(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.bs(d):c.dk(d,-1)
P.e7(d)},
iH:{"^":"m:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iG:{"^":"m:16;a,b,c",
$1:function(a){var z,y
this.a.a=H.i(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iI:{"^":"m:0;a",
$0:function(){this.a.$0()}},
iJ:{"^":"m:0;a",
$0:function(){this.a.$0()}},
jT:{"^":"b;a,0b,c",
cM:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aQ(new P.jV(this,b),0),a)
else throw H.c(P.A("`setTimeout()` not found."))},
p:{
jU:function(a,b){var z=new P.jT(!0,0)
z.cM(a,b)
return z}}},
jV:{"^":"m:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
X:{"^":"b;$ti"},
h1:{"^":"m:17;a,b,c,d",
$2:function(a,b){var z,y
H.f(b,"$isQ")
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.M(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.M(z.c,z.d)}},
h0:{"^":"m;a,b,c,d,e,f",
$1:function(a){var z,y
H.x(a,this.f)
z=this.a;--z.b
y=z.a
if(y!=null){C.a.h(y,this.b,a)
if(z.b===0)this.c.bd(z.a)}else if(z.b===0&&!this.e)this.c.M(z.c,z.d)},
$S:function(){return{func:1,ret:P.z,args:[this.f]}}},
dN:{"^":"b;$ti"},
iE:{"^":"dN;a,$ti",
ds:function(a,b){var z
H.ba(b,{futureOr:1,type:H.o(this,0)})
z=this.a
if(z.a!==0)throw H.c(P.bO("Future already completed"))
z.bb(b)}},
jO:{"^":"dN;a,$ti"},
aL:{"^":"b;0a,b,c,d,e,$ti",
dK:function(a){if(this.c!==6)return!0
return this.b.b.aE(H.i(this.d,{func:1,ret:P.R,args:[P.b]}),a.a,P.R,P.b)},
dH:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.o(this,1)}
w=this.b.b
if(H.bx(z,{func:1,args:[P.b,P.Q]}))return H.ba(w.dR(z,a.a,a.b,null,y,P.Q),x)
else return H.ba(w.aE(H.i(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
P:{"^":"b;bl:a<,b,0d7:c<,$ti",
aG:function(a,b,c){var z,y,x,w
z=H.o(this,0)
H.i(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.C
if(y!==C.d){y.toString
H.i(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kg(b,y)}H.i(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.P(0,$.C,[c])
w=b==null?1:3
this.ba(new P.aL(x,w,a,b,[z,c]))
return x},
a2:function(a,b){return this.aG(a,null,b)},
ba:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isaL")
this.c=a}else{if(z===2){y=H.f(this.c,"$isP")
z=y.a
if(z<4){y.ba(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.aO(null,null,z,H.i(new P.j_(this,a),{func:1,ret:-1}))}},
bi:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isaL")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isP")
y=u.a
if(y<4){u.bi(a)
return}this.a=y
this.c=u.c}z.a=this.aa(a)
y=this.b
y.toString
P.aO(null,null,y,H.i(new P.j6(z,this),{func:1,ret:-1}))}},
a9:function(){var z=H.f(this.c,"$isaL")
this.c=null
return this.aa(z)},
aa:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
a7:function(a){var z,y,x
z=H.o(this,0)
H.ba(a,{futureOr:1,type:z})
y=this.$ti
if(H.ah(a,"$isX",y,"$asX"))if(H.ah(a,"$isP",y,null))P.bR(a,this)
else P.dO(a,this)
else{x=this.a9()
H.x(a,z)
this.a=4
this.c=a
P.aM(this,x)}},
bd:function(a){var z
H.x(a,H.o(this,0))
z=this.a9()
this.a=4
this.c=a
P.aM(this,z)},
M:function(a,b){var z
H.f(b,"$isQ")
z=this.a9()
this.a=8
this.c=new P.Z(a,b)
P.aM(this,z)},
bb:function(a){var z
H.ba(a,{futureOr:1,type:H.o(this,0)})
if(H.ah(a,"$isX",this.$ti,"$asX")){this.cQ(a)
return}this.a=1
z=this.b
z.toString
P.aO(null,null,z,H.i(new P.j1(this,a),{func:1,ret:-1}))},
cQ:function(a){var z=this.$ti
H.w(a,"$isX",z,"$asX")
if(H.ah(a,"$isP",z,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.aO(null,null,z,H.i(new P.j5(this,a),{func:1,ret:-1}))}else P.bR(a,this)
return}P.dO(a,this)},
cP:function(a,b){var z
H.f(b,"$isQ")
this.a=1
z=this.b
z.toString
P.aO(null,null,z,H.i(new P.j0(this,a,b),{func:1,ret:-1}))},
$isX:1,
p:{
dO:function(a,b){var z,y,x
b.a=1
try{a.aG(new P.j2(b),new P.j3(b),null)}catch(x){z=H.Y(x)
y=H.aB(x)
P.kO(new P.j4(b,z,y))}},
bR:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isP")
if(z>=4){y=b.a9()
b.a=a.a
b.c=a.c
P.aM(b,y)}else{y=H.f(b.c,"$isaL")
b.a=2
b.c=a
a.bi(y)}},
aM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isZ")
y=y.b
u=v.a
t=v.b
y.toString
P.bV(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.f(r,"$isZ")
y=y.b
u=r.a
t=r.b
y.toString
P.bV(null,null,y,u,t)
return}o=$.C
if(o!=q)$.C=q
else o=null
y=b.c
if(y===8)new P.j9(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.j8(x,b,r).$0()}else if((y&2)!==0)new P.j7(z,x,b).$0()
if(o!=null)$.C=o
y=x.b
if(!!J.B(y).$isX){if(y.a>=4){n=H.f(t.c,"$isaL")
t.c=null
b=t.aa(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.bR(y,t)
return}}m=b.b
n=H.f(m.c,"$isaL")
m.c=null
b=m.aa(n)
y=x.a
u=x.b
if(!y){H.x(u,H.o(m,0))
m.a=4
m.c=u}else{H.f(u,"$isZ")
m.a=8
m.c=u}z.a=m
y=m}}}},
j_:{"^":"m:0;a,b",
$0:function(){P.aM(this.a,this.b)}},
j6:{"^":"m:0;a,b",
$0:function(){P.aM(this.b,this.a.a)}},
j2:{"^":"m:6;a",
$1:function(a){var z=this.a
z.a=0
z.a7(a)}},
j3:{"^":"m:18;a",
$2:function(a,b){H.f(b,"$isQ")
this.a.M(a,b)},
$1:function(a){return this.$2(a,null)}},
j4:{"^":"m:0;a,b,c",
$0:function(){this.a.M(this.b,this.c)}},
j1:{"^":"m:0;a,b",
$0:function(){var z=this.a
z.bd(H.x(this.b,H.o(z,0)))}},
j5:{"^":"m:0;a,b",
$0:function(){P.bR(this.b,this.a)}},
j0:{"^":"m:0;a,b,c",
$0:function(){this.a.M(this.b,this.c)}},
j9:{"^":"m:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bV(H.i(w.d,{func:1}),null)}catch(v){y=H.Y(v)
x=H.aB(v)
if(this.d){w=H.f(this.a.a.c,"$isZ").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isZ")
else u.b=new P.Z(y,x)
u.a=!0
return}if(!!J.B(z).$isX){if(z instanceof P.P&&z.gbl()>=4){if(z.gbl()===8){w=this.b
w.b=H.f(z.gd7(),"$isZ")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.a2(new P.ja(t),null)
w.a=!1}}},
ja:{"^":"m:19;a",
$1:function(a){return this.a}},
j8:{"^":"m:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.o(x,0)
v=H.x(this.c,w)
u=H.o(x,1)
this.a.b=x.b.b.aE(H.i(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.Y(t)
y=H.aB(t)
x=this.a
x.b=new P.Z(z,y)
x.a=!0}}},
j7:{"^":"m:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isZ")
w=this.c
if(w.dK(z)&&w.e!=null){v=this.b
v.b=w.dH(z)
v.a=!1}}catch(u){y=H.Y(u)
x=H.aB(u)
w=H.f(this.a.a.c,"$isZ")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.Z(y,x)
s.a=!0}}},
dK:{"^":"b;a,0b"},
id:{"^":"b;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.P(0,$.C,[P.E])
z.a=0
x=H.o(this,0)
w=H.i(new P.ii(z,this),{func:1,ret:-1,args:[x]})
H.i(new P.ij(z,y),{func:1,ret:-1})
W.ag(this.a,this.b,w,!1,x)
return y},
gdF:function(a){var z,y,x,w
z={}
y=new P.P(0,$.C,this.$ti)
z.a=null
x=H.o(this,0)
w=H.i(new P.ig(z,this,y),{func:1,ret:-1,args:[x]})
H.i(new P.ih(y),{func:1,ret:-1})
z.a=W.ag(this.a,this.b,w,!1,x)
return y}},
ii:{"^":"m;a,b",
$1:function(a){H.x(a,H.o(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.z,args:[H.o(this.b,0)]}}},
ij:{"^":"m:0;a,b",
$0:function(){this.b.a7(this.a.a)}},
ig:{"^":"m;a,b,c",
$1:function(a){H.x(a,H.o(this.b,0))
P.kb(this.a.a,this.c,a)},
$S:function(){return{func:1,ret:P.z,args:[H.o(this.b,0)]}}},
ih:{"^":"m:0;a",
$0:function(){var z,y,x,w
try{x=H.dd()
throw H.c(x)}catch(w){z=H.Y(w)
y=H.aB(w)
$.C.toString
this.a.M(z,y)}}},
ie:{"^":"b;"},
Z:{"^":"b;a,b",
k:function(a){return H.e(this.a)},
$isN:1},
k0:{"^":"b;",$ismK:1},
kh:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.cl()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.k(0)
throw x}},
jx:{"^":"k0;",
dS:function(a){var z,y,x
H.i(a,{func:1,ret:-1})
try{if(C.d===$.C){a.$0()
return}P.e5(null,null,this,a,-1)}catch(x){z=H.Y(x)
y=H.aB(x)
P.bV(null,null,this,z,H.f(y,"$isQ"))}},
dT:function(a,b,c){var z,y,x
H.i(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.d===$.C){a.$1(b)
return}P.e6(null,null,this,a,b,-1,c)}catch(x){z=H.Y(x)
y=H.aB(x)
P.bV(null,null,this,z,H.f(y,"$isQ"))}},
dk:function(a,b){return new P.jz(this,H.i(a,{func:1,ret:b}),b)},
bs:function(a){return new P.jy(this,H.i(a,{func:1,ret:-1}))},
dl:function(a,b){return new P.jA(this,H.i(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
bV:function(a,b){H.i(a,{func:1,ret:b})
if($.C===C.d)return a.$0()
return P.e5(null,null,this,a,b)},
aE:function(a,b,c,d){H.i(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.C===C.d)return a.$1(b)
return P.e6(null,null,this,a,b,c,d)},
dR:function(a,b,c,d,e,f){H.i(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.C===C.d)return a.$2(b,c)
return P.ki(null,null,this,a,b,c,d,e,f)}},
jz:{"^":"m;a,b,c",
$0:function(){return this.a.bV(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jy:{"^":"m:1;a,b",
$0:function(){return this.a.dS(this.b)}},
jA:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.dT(this.b,H.x(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dj:function(a,b,c){H.bd(a)
return H.w(H.kq(a,new H.dh(0,0,[b,c])),"$isdi",[b,c],"$asdi")},
a_:function(a,b){return new H.dh(0,0,[a,b])},
a4:function(a,b,c,d){return new P.ji(0,0,[d])},
h9:function(a,b,c){var z,y
if(P.ct(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.j([],[P.d])
y=$.be()
C.a.l(y,a)
try{P.ke(a,z)}finally{if(0>=y.length)return H.n(y,-1)
y.pop()}y=P.dy(b,H.kG(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
cf:function(a,b,c){var z,y,x
if(P.ct(a))return b+"..."+c
z=new P.co(b)
y=$.be()
C.a.l(y,a)
try{x=z
x.a=P.dy(x.gT(),a,", ")}finally{if(0>=y.length)return H.n(y,-1)
y.pop()}y=z
y.a=y.gT()+c
y=z.gT()
return y.charCodeAt(0)==0?y:y},
ct:function(a){var z,y
for(z=0;y=$.be(),z<y.length;++z)if(a===y[z])return!0
return!1},
ke:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[P.d],"$asa")
z=a.gw(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.e(z.gA(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.n(b,-1)
v=b.pop()
if(0>=b.length)return H.n(b,-1)
u=b.pop()}else{t=z.gA(z);++x
if(!z.t()){if(x<=4){C.a.l(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.n(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA(z);++x
for(;z.t();t=s,s=r){r=z.gA(z);++x
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
cj:function(a,b){var z,y,x
z=P.a4(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.M)(a),++x)z.l(0,H.x(a[x],b))
return z},
dm:function(a){var z,y,x
z={}
if(P.ct(a))return"{...}"
y=new P.co("")
try{C.a.l($.be(),a)
x=y
x.a=x.gT()+"{"
z.a=!0
J.f3(a,new P.ho(z,y))
z=y
z.a=z.gT()+"}"}finally{z=$.be()
if(0>=z.length)return H.n(z,-1)
z.pop()}z=y.gT()
return z.charCodeAt(0)==0?z:z},
ji:{"^":"jc;a,0b,0c,0d,0e,0f,r,$ti",
gw:function(a){var z=new P.dS(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.f(z[b],"$isbw")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.f(y[b],"$isbw")!=null}else return this.cR(b)},
cR:function(a){var z=this.d
if(z==null)return!1
return this.au(this.bg(z,a),a)>=0},
l:function(a,b){var z,y
H.x(b,H.o(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cq()
this.b=z}return this.b9(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cq()
this.c=y}return this.b9(y,b)}else return this.cN(0,b)},
cN:function(a,b){var z,y,x
H.x(b,H.o(this,0))
z=this.d
if(z==null){z=P.cq()
this.d=z}y=this.be(b)
x=z[y]
if(x==null)z[y]=[this.ay(b)]
else{if(this.au(x,b)>=0)return!1
x.push(this.ay(b))}return!0},
bU:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bj(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bj(this.c,b)
else return this.d1(0,b)},
d1:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bg(z,b)
x=this.au(y,b)
if(x<0)return!1
this.bn(y.splice(x,1)[0])
return!0},
a0:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aw()}},
b9:function(a,b){H.x(b,H.o(this,0))
if(H.f(a[b],"$isbw")!=null)return!1
a[b]=this.ay(b)
return!0},
bj:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isbw")
if(z==null)return!1
this.bn(z)
delete a[b]
return!0},
aw:function(){this.r=this.r+1&67108863},
ay:function(a){var z,y
z=new P.bw(H.x(a,H.o(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aw()
return z},
bn:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aw()},
be:function(a){return J.ak(a)&0x3ffffff},
bg:function(a,b){return a[this.be(b)]},
au:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aF(a[y].a,b))return y
return-1},
p:{
cq:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bw:{"^":"b;a,0b,0c"},
dS:{"^":"b;a,b,0c,0d,$ti",
sbc:function(a){this.d=H.x(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aG(z))
else{z=this.c
if(z==null){this.sbc(null)
return!1}else{this.sbc(H.x(z.a,H.o(this,0)))
this.c=this.c.b
return!0}}},
$isaW:1,
p:{
jj:function(a,b,c){var z=new P.dS(a,b,[c])
z.c=a.e
return z}}},
jc:{"^":"i2;"},
hk:{"^":"jk;",$isk:1,$isa:1},
p:{"^":"b;$ti",
gw:function(a){return new H.dk(a,this.gj(a),0,[H.bc(this,a,"p",0)])},
q:function(a,b){return this.i(a,b)},
dG:function(a,b,c,d){var z,y,x
H.x(b,d)
H.i(c,{func:1,ret:d,args:[d,H.bc(this,a,"p",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.i(a,x))
if(z!==this.gj(a))throw H.c(P.aG(a))}return y},
k:function(a){return P.cf(a,"[","]")}},
dl:{"^":"T;"},
ho:{"^":"m:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
T:{"^":"b;$ti",
C:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[H.bc(this,a,"T",0),H.bc(this,a,"T",1)]})
for(z=J.bD(this.gD(a));z.t();){y=z.gA(z)
b.$2(y,this.i(a,y))}},
gj:function(a){return J.aS(this.gD(a))},
k:function(a){return P.dm(a)},
$isI:1},
i3:{"^":"b;$ti",
H:function(a,b){var z
for(z=J.bD(H.w(b,"$isk",this.$ti,"$ask"));z.t();)this.l(0,z.gA(z))},
k:function(a){return P.cf(this,"{","}")},
$isk:1,
$isma:1},
i2:{"^":"i3;"},
jk:{"^":"b+p;"}}],["","",,P,{"^":"",
fV:function(a){if(a instanceof H.m)return a.k(0)
return"Instance of '"+H.b1(a)+"'"},
bI:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bi(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fV(a)},
d8:function(a){return new P.iX(a)},
aD:function(a){H.c2(H.e(a))},
R:{"^":"b;"},
"+bool":0,
bH:{"^":"b;a,b",
B:function(a,b){if(b==null)return!1
return b instanceof P.bH&&this.a===b.a&&!0},
J:function(a,b){return C.e.J(this.a,H.f(b,"$isbH").a)},
gv:function(a){var z=this.a
return(z^C.e.bk(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.fJ(H.hU(this))
y=P.bk(H.hS(this))
x=P.bk(H.hO(this))
w=P.bk(H.hP(this))
v=P.bk(H.hR(this))
u=P.bk(H.hT(this))
t=P.fK(H.hQ(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isW:1,
$asW:function(){return[P.bH]},
p:{
fJ:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fK:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bk:function(a){if(a>=10)return""+a
return"0"+a}}},
a2:{"^":"F;"},
"+double":0,
aU:{"^":"b;a",
P:function(a,b){return C.e.P(this.a,H.f(b,"$isaU").a)},
B:function(a,b){if(b==null)return!1
return b instanceof P.aU&&this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
J:function(a,b){return C.e.J(this.a,H.f(b,"$isaU").a)},
k:function(a){var z,y,x,w,v
z=new P.fS()
y=this.a
if(y<0)return"-"+new P.aU(0-y).k(0)
x=z.$1(C.e.U(y,6e7)%60)
w=z.$1(C.e.U(y,1e6)%60)
v=new P.fR().$1(y%1e6)
return""+C.e.U(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isW:1,
$asW:function(){return[P.aU]},
p:{
fQ:function(a,b,c,d,e,f){return new P.aU(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fR:{"^":"m:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fS:{"^":"m:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
N:{"^":"b;"},
cl:{"^":"N;",
k:function(a){return"Throw of null."}},
al:{"^":"N;a,b,c,d",
gas:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gar:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gas()+y+x
if(!this.a)return w
v=this.gar()
u=P.bI(this.b)
return w+v+": "+u},
p:{
cT:function(a){return new P.al(!1,null,null,a)},
cU:function(a,b,c){return new P.al(!0,a,b,c)}}},
du:{"^":"al;e,f,a,b,c,d",
gas:function(){return"RangeError"},
gar:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bN:function(a,b,c){return new P.du(null,null,!0,a,b,"Value not in range")},
bM:function(a,b,c,d,e){return new P.du(b,c,!0,a,d,"Invalid value")}}},
h7:{"^":"al;e,j:f>,a,b,c,d",
gas:function(){return"RangeError"},
gar:function(){var z,y
z=H.L(this.b)
if(typeof z!=="number")return z.a4()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
G:function(a,b,c,d,e){var z=H.L(e==null?J.aS(b):e)
return new P.h7(b,z,!0,a,c,"Index out of range")}}},
ix:{"^":"N;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
A:function(a){return new P.ix(a)}}},
iv:{"^":"N;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
dH:function(a){return new P.iv(a)}}},
cn:{"^":"N;a",
k:function(a){return"Bad state: "+this.a},
p:{
bO:function(a){return new P.cn(a)}}},
fD:{"^":"N;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bI(z)+"."},
p:{
aG:function(a){return new P.fD(a)}}},
dx:{"^":"b;",
k:function(a){return"Stack Overflow"},
$isN:1},
fI:{"^":"N;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iX:{"^":"b;a",
k:function(a){return"Exception: "+this.a}},
bl:{"^":"b;"},
E:{"^":"F;"},
"+int":0,
k:{"^":"b;$ti",
aH:["co",function(a,b){var z=H.cx(this,"k",0)
return new H.dI(this,H.i(b,{func:1,ret:P.R,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gw(this)
for(y=0;z.t();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.a3(P.bM(b,0,null,"index",null))
for(z=this.gw(this),y=0;z.t();){x=z.gA(z)
if(b===y)return x;++y}throw H.c(P.G(b,this,"index",null,y))},
k:function(a){return P.h9(this,"(",")")}},
aW:{"^":"b;$ti"},
a:{"^":"b;$ti",$isk:1},
"+List":0,
I:{"^":"b;$ti"},
z:{"^":"b;",
gv:function(a){return P.b.prototype.gv.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
F:{"^":"b;",$isW:1,
$asW:function(){return[P.F]}},
"+num":0,
b:{"^":";",
B:function(a,b){return this===b},
gv:function(a){return H.b0(this)},
k:function(a){return"Instance of '"+H.b1(this)+"'"},
toString:function(){return this.k(this)}},
Q:{"^":"b;"},
d:{"^":"b;",$isW:1,
$asW:function(){return[P.d]},
$ishJ:1},
"+String":0,
co:{"^":"b;T:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dy:function(a,b,c){var z=J.bD(b)
if(!z.t())return a
if(c.length===0){do a+=H.e(z.gA(z))
while(z.t())}else{a+=H.e(z.gA(z))
for(;z.t();)a=a+c+H.e(z.gA(z))}return a}}}}],["","",,W,{"^":"",
fT:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.p).K(z,a,b,c)
y.toString
z=W.r
z=new H.dI(new W.a6(y),H.i(new W.fU(),{func:1,ret:P.R,args:[z]}),[z])
x=z.gw(z)
if(!x.t())H.a3(H.dd())
w=x.gA(x)
if(x.t())H.a3(H.ha())
return H.f(w,"$isS")},
d7:function(a){H.f(a,"$isK")
return"wheel"},
aV:function(a){var z,y,x
z="element tag unavailable"
try{y=J.f6(a)
if(typeof y==="string")z=a.tagName}catch(x){H.Y(x)}return z},
iU:function(a,b){return document.createElement(a)},
bS:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dR:function(a,b,c,d){var z,y
z=W.bS(W.bS(W.bS(W.bS(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
e3:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.iO(a)
if(!!J.B(z).$isK)return z
return}else return H.f(a,"$isK")},
e9:function(a,b){var z
H.i(a,{func:1,ret:-1,args:[b]})
z=$.C
if(z===C.d)return a
return z.dl(a,b)},
J:{"^":"S;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kS:{"^":"h;0j:length=","%":"AccessibleNodeList"},
fp:{"^":"J;",
k:function(a){return String(a)},
$isfp:1,
"%":"HTMLAnchorElement"},
kT:{"^":"J;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
cV:{"^":"J;",$iscV:1,"%":"HTMLBaseElement"},
fu:{"^":"h;","%":";Blob"},
bF:{"^":"J;",$isbF:1,"%":"HTMLBodyElement"},
bj:{"^":"J;0n:height=,0m:width=",
aI:function(a,b,c){if(c!=null)return this.cW(a,b,P.kn(c,null))
return this.cX(a,b)},
cc:function(a,b){return this.aI(a,b,null)},
cW:function(a,b,c){return a.getContext(b,c)},
cX:function(a,b){return a.getContext(b)},
$isbj:1,
"%":"HTMLCanvasElement"},
fw:{"^":"h;",
ac:function(a,b,c){return a.addColorStop(b,c)},
"%":"CanvasGradient"},
cc:{"^":"h;",
bB:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
dE:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
ah:function(a){return P.a1(a.getContextAttributes())},
$iscc:1,
"%":"CanvasRenderingContext2D"},
kZ:{"^":"r;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fE:{"^":"cd;",$isfE:1,"%":"CSSNumericValue|CSSUnitValue"},
l_:{"^":"fH;0j:length=","%":"CSSPerspective"},
am:{"^":"h;",$isam:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fF:{"^":"iM;0j:length=",
aN:function(a,b){var z=this.cY(a,this.ap(a,b))
return z==null?"":z},
ap:function(a,b){var z,y
z=$.er()
y=z[b]
if(typeof y==="string")return y
y=this.dc(a,b)
z[b]=y
return y},
dc:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fL()+b
if(z in a)return z
return b},
cY:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fG:{"^":"b;",
gn:function(a){return this.aN(a,"height")},
gm:function(a){return this.aN(a,"width")}},
cd:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fH:{"^":"h;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
l1:{"^":"cd;0j:length=","%":"CSSTransformValue"},
l2:{"^":"cd;0j:length=","%":"CSSUnparsedValue"},
l4:{"^":"h;0j:length=",
i:function(a,b){return a[b]},
"%":"DataTransferItemList"},
fM:{"^":"J;","%":"HTMLDivElement"},
fN:{"^":"r;",
df:function(a,b){return a.adoptNode(b)},
cd:function(a,b){return a.getElementById(b)},
dN:function(a,b){return a.querySelector(b)},
gbP:function(a){return new W.bu(a,"mousedown",!1,[W.U])},
gbQ:function(a){return new W.bu(a,"mousemove",!1,[W.U])},
gbR:function(a){return new W.bu(a,"mouseup",!1,[W.U])},
gbS:function(a){return new W.bu(a,H.t(W.d7(a)),!1,[W.aK])},
"%":"XMLDocument;Document"},
l5:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
fO:{"^":"h;",
dw:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
l6:{"^":"iQ;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.w(c,"$isV",[P.F],"$asV")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isu:1,
$asu:function(){return[[P.V,P.F]]},
$isv:1,
$asv:function(){return[[P.V,P.F]]},
$asp:function(){return[[P.V,P.F]]},
$isk:1,
$ask:function(){return[[P.V,P.F]]},
$isa:1,
$asa:function(){return[[P.V,P.F]]},
$asq:function(){return[[P.V,P.F]]},
"%":"ClientRectList|DOMRectList"},
fP:{"^":"h;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
B:function(a,b){var z
if(b==null)return!1
if(!H.ah(b,"$isV",[P.F],"$asV"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.l(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dR(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isV:1,
$asV:function(){return[P.F]},
"%":";DOMRectReadOnly"},
l7:{"^":"iS;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(c)
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isu:1,
$asu:function(){return[P.d]},
$isv:1,
$asv:function(){return[P.d]},
$asp:function(){return[P.d]},
$isk:1,
$ask:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"DOMStringList"},
l8:{"^":"h;0j:length=","%":"DOMTokenList"},
S:{"^":"r;0dU:tagName=",
gdi:function(a){return new W.iT(a)},
k:function(a){return a.localName},
K:["aj",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.d6
if(z==null){z=H.j([],[W.ab])
y=new W.ds(z)
C.a.l(z,W.dP(null))
C.a.l(z,W.e_())
$.d6=y
d=y}else d=z
z=$.d5
if(z==null){z=new W.e2(d)
$.d5=z
c=z}else{z.a=d
c=z}}if($.ae==null){z=document
y=z.implementation
y=(y&&C.L).dw(y,"")
$.ae=y
$.ce=y.createRange()
y=$.ae
y.toString
y=y.createElement("base")
H.f(y,"$iscV")
y.href=z.baseURI
z=$.ae.head;(z&&C.M).F(z,y)}z=$.ae
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.f(y,"$isbF")}z=$.ae
if(!!this.$isbF)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ae.body;(z&&C.p).F(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.u(C.X,a.tagName)){z=$.ce;(z&&C.E).ce(z,x)
z=$.ce
w=(z&&C.E).du(z,b)}else{x.innerHTML=b
w=$.ae.createDocumentFragment()
for(z=J.l(w);y=x.firstChild,y!=null;)z.F(w,y)}z=$.ae.body
if(x==null?z!=null:x!==z)J.cM(x)
c.aS(w)
C.t.df(document,w)
return w},function(a,b,c){return this.K(a,b,c,null)},"dv",null,null,"ge4",5,5,null],
cg:function(a,b,c,d){a.textContent=null
this.F(a,this.K(a,b,c,d))},
cf:function(a,b){return this.cg(a,b,null,null)},
Y:function(a,b){return a.getAttribute(b)},
d2:function(a,b){return a.removeAttribute(b)},
gbP:function(a){return new W.bt(a,"mousedown",!1,[W.U])},
gbQ:function(a){return new W.bt(a,"mousemove",!1,[W.U])},
gbR:function(a){return new W.bt(a,"mouseup",!1,[W.U])},
gbS:function(a){return new W.bt(a,H.t(W.d7(a)),!1,[W.aK])},
$isS:1,
"%":";Element"},
fU:{"^":"m:20;",
$1:function(a){return!!J.B(H.f(a,"$isr")).$isS}},
la:{"^":"J;0n:height=,0m:width=","%":"HTMLEmbedElement"},
O:{"^":"h;",$isO:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
K:{"^":"h;",
de:function(a,b,c,d){H.i(c,{func:1,args:[W.O]})
if(c!=null)this.cO(a,b,c,!1)},
cO:function(a,b,c,d){return a.addEventListener(b,H.aQ(H.i(c,{func:1,args:[W.O]}),1),!1)},
d4:function(a,b,c,d){return a.removeEventListener(b,H.aQ(H.i(c,{func:1,args:[W.O]}),1),!1)},
$isK:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dX|dY|e0|e1"},
an:{"^":"fu;",$isan:1,"%":"File"},
lr:{"^":"iZ;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isan")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.an]},
$isv:1,
$asv:function(){return[W.an]},
$asp:function(){return[W.an]},
$isk:1,
$ask:function(){return[W.an]},
$isa:1,
$asa:function(){return[W.an]},
$asq:function(){return[W.an]},
"%":"FileList"},
ls:{"^":"K;0j:length=","%":"FileWriter"},
lv:{"^":"J;0j:length=","%":"HTMLFormElement"},
ao:{"^":"h;",$isao:1,"%":"Gamepad"},
h4:{"^":"J;","%":"HTMLHeadElement"},
lw:{"^":"h;0j:length=","%":"History"},
lx:{"^":"je;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isr")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.r]},
$isv:1,
$asv:function(){return[W.r]},
$asp:function(){return[W.r]},
$isk:1,
$ask:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
h5:{"^":"fN;","%":"HTMLDocument"},
ly:{"^":"J;0n:height=,0m:width=","%":"HTMLIFrameElement"},
lz:{"^":"h;0n:height=,0m:width=","%":"ImageBitmap"},
lA:{"^":"h;0n:height=,0m:width=","%":"ImageData"},
aH:{"^":"J;0n:height=,0m:width=",$isaH:1,"%":"HTMLImageElement"},
lC:{"^":"J;0n:height=,0m:width=","%":"HTMLInputElement"},
aX:{"^":"dG;",$isaX:1,"%":"KeyboardEvent"},
hn:{"^":"h;",
k:function(a){return String(a)},
$ishn:1,
"%":"Location"},
hq:{"^":"J;","%":"HTMLAudioElement;HTMLMediaElement"},
lK:{"^":"h;0j:length=","%":"MediaList"},
lL:{"^":"jm;",
i:function(a,b){return P.a1(a.get(H.t(b)))},
C:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a1(y.value[1]))}},
gD:function(a){var z=H.j([],[P.d])
this.C(a,new W.hs(z))
return z},
gj:function(a){return a.size},
$asT:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"MIDIInputMap"},
hs:{"^":"m:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lM:{"^":"jn;",
i:function(a,b){return P.a1(a.get(H.t(b)))},
C:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a1(y.value[1]))}},
gD:function(a){var z=H.j([],[P.d])
this.C(a,new W.ht(z))
return z},
gj:function(a){return a.size},
$asT:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
ht:{"^":"m:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
aq:{"^":"h;",$isaq:1,"%":"MimeType"},
lN:{"^":"jp;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isaq")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aq]},
$isv:1,
$asv:function(){return[W.aq]},
$asp:function(){return[W.aq]},
$isk:1,
$ask:function(){return[W.aq]},
$isa:1,
$asa:function(){return[W.aq]},
$asq:function(){return[W.aq]},
"%":"MimeTypeArray"},
U:{"^":"dG;",
gbO:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.b_(a.offsetX,a.offsetY,[P.F])
else{z=a.target
if(!J.B(W.e3(z)).$isS)throw H.c(P.A("offsetX is only supported on elements"))
y=H.f(W.e3(z),"$isS")
z=a.clientX
x=a.clientY
w=[P.F]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.w(new P.b_(u,v,w),"$isb_",w,"$asb_")
if(typeof z!=="number")return z.aX()
if(typeof x!=="number")return x.aX()
return new P.b_(C.u.bY(z-u),C.u.bY(x-v),w)}},
$isU:1,
"%":";DragEvent|MouseEvent"},
a6:{"^":"hk;a",
ga5:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.bO("No elements"))
if(y>1)throw H.c(P.bO("More than one element"))
return z.firstChild},
H:function(a,b){var z,y,x,w,v
H.w(b,"$isk",[W.r],"$ask")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.l(y),v=0;v<x;++v)w.F(y,z.firstChild)
return},
h:function(a,b,c){var z,y
H.f(c,"$isr")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.n(y,b)
J.eM(z,c,y[b])},
gw:function(a){var z=this.a.childNodes
return new W.da(z,z.length,-1,[H.bc(C.a_,z,"q",0)])},
gj:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.n(z,b)
return z[b]},
$asp:function(){return[W.r]},
$ask:function(){return[W.r]},
$asa:function(){return[W.r]}},
r:{"^":"K;0dM:previousSibling=",
dO:function(a){var z=a.parentNode
if(z!=null)J.bB(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.cn(a):z},
F:function(a,b){return a.appendChild(b)},
d3:function(a,b){return a.removeChild(b)},
d5:function(a,b,c){return a.replaceChild(b,c)},
$isr:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hD:{"^":"jr;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isr")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.r]},
$isv:1,
$asv:function(){return[W.r]},
$asp:function(){return[W.r]},
$isk:1,
$ask:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"NodeList|RadioNodeList"},
lW:{"^":"J;0n:height=,0m:width=","%":"HTMLObjectElement"},
lY:{"^":"K;0n:height=,0m:width=","%":"OffscreenCanvas"},
lZ:{"^":"h;0n:height=,0m:width=","%":"PaintSize"},
as:{"^":"h;0j:length=",$isas:1,"%":"Plugin"},
m0:{"^":"jv;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isas")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.as]},
$isv:1,
$asv:function(){return[W.as]},
$asp:function(){return[W.as]},
$isk:1,
$ask:function(){return[W.as]},
$isa:1,
$asa:function(){return[W.as]},
$asq:function(){return[W.as]},
"%":"PluginArray"},
m2:{"^":"U;0n:height=,0m:width=","%":"PointerEvent"},
hW:{"^":"h;",
du:function(a,b){return a.createContextualFragment(b)},
ce:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
m7:{"^":"jB;",
i:function(a,b){return P.a1(a.get(H.t(b)))},
C:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a1(y.value[1]))}},
gD:function(a){var z=H.j([],[P.d])
this.C(a,new W.i_(z))
return z},
gj:function(a){return a.size},
$asT:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"RTCStatsReport"},
i_:{"^":"m:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
m8:{"^":"h;0n:height=,0m:width=","%":"Screen"},
m9:{"^":"J;0j:length=","%":"HTMLSelectElement"},
at:{"^":"K;",$isat:1,"%":"SourceBuffer"},
mb:{"^":"dY;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isat")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.at]},
$isv:1,
$asv:function(){return[W.at]},
$asp:function(){return[W.at]},
$isk:1,
$ask:function(){return[W.at]},
$isa:1,
$asa:function(){return[W.at]},
$asq:function(){return[W.at]},
"%":"SourceBufferList"},
au:{"^":"h;",$isau:1,"%":"SpeechGrammar"},
mc:{"^":"jH;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isau")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.au]},
$isv:1,
$asv:function(){return[W.au]},
$asp:function(){return[W.au]},
$isk:1,
$ask:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$asq:function(){return[W.au]},
"%":"SpeechGrammarList"},
av:{"^":"h;0j:length=",$isav:1,"%":"SpeechRecognitionResult"},
mf:{"^":"jK;",
i:function(a,b){return this.bh(a,H.t(b))},
C:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.d_(a,z)
if(y==null)return
b.$2(y,this.bh(a,y))}},
gD:function(a){var z=H.j([],[P.d])
this.C(a,new W.ic(z))
return z},
gj:function(a){return a.length},
bh:function(a,b){return a.getItem(b)},
d_:function(a,b){return a.key(b)},
$asT:function(){return[P.d,P.d]},
$isI:1,
$asI:function(){return[P.d,P.d]},
"%":"Storage"},
ic:{"^":"m:21;a",
$2:function(a,b){return C.a.l(this.a,a)}},
aw:{"^":"h;",$isaw:1,"%":"CSSStyleSheet|StyleSheet"},
ik:{"^":"J;",
K:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.aj(a,b,c,d)
z=W.fT("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a6(y).H(0,new W.a6(z))
return y},
"%":"HTMLTableElement"},
mi:{"^":"J;",
K:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.aj(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.J.K(z.createElement("table"),b,c,d)
z.toString
z=new W.a6(z)
x=z.ga5(z)
x.toString
z=new W.a6(x)
w=z.ga5(z)
y.toString
w.toString
new W.a6(y).H(0,new W.a6(w))
return y},
"%":"HTMLTableRowElement"},
mj:{"^":"J;",
K:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.aj(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.J.K(z.createElement("table"),b,c,d)
z.toString
z=new W.a6(z)
x=z.ga5(z)
y.toString
x.toString
new W.a6(y).H(0,new W.a6(x))
return y},
"%":"HTMLTableSectionElement"},
dA:{"^":"J;",$isdA:1,"%":"HTMLTemplateElement"},
mk:{"^":"h;0m:width=","%":"TextMetrics"},
ax:{"^":"K;",$isax:1,"%":"TextTrack"},
ay:{"^":"K;",$isay:1,"%":"TextTrackCue|VTTCue"},
ml:{"^":"jS;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isay")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ay]},
$isv:1,
$asv:function(){return[W.ay]},
$asp:function(){return[W.ay]},
$isk:1,
$ask:function(){return[W.ay]},
$isa:1,
$asa:function(){return[W.ay]},
$asq:function(){return[W.ay]},
"%":"TextTrackCueList"},
mm:{"^":"e1;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isax")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ax]},
$isv:1,
$asv:function(){return[W.ax]},
$asp:function(){return[W.ax]},
$isk:1,
$ask:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$asq:function(){return[W.ax]},
"%":"TextTrackList"},
mn:{"^":"h;0j:length=","%":"TimeRanges"},
az:{"^":"h;",$isaz:1,"%":"Touch"},
mo:{"^":"jX;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isaz")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.az]},
$isv:1,
$asv:function(){return[W.az]},
$asp:function(){return[W.az]},
$isk:1,
$ask:function(){return[W.az]},
$isa:1,
$asa:function(){return[W.az]},
$asq:function(){return[W.az]},
"%":"TouchList"},
mp:{"^":"h;0j:length=","%":"TrackDefaultList"},
dG:{"^":"O;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mD:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
mG:{"^":"hq;0n:height=,0m:width=","%":"HTMLVideoElement"},
mH:{"^":"K;0j:length=","%":"VideoTrackList"},
mI:{"^":"K;0n:height=,0m:width=","%":"VisualViewport"},
mJ:{"^":"h;0m:width=","%":"VTTRegion"},
aK:{"^":"U;",
gdA:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.A("deltaY is not supported"))},
$isaK:1,
"%":"WheelEvent"},
iB:{"^":"K;",
gdh:function(a){var z,y,x
z=P.F
y=new P.P(0,$.C,[z])
x=H.i(new W.iC(new P.jO(y,[z])),{func:1,ret:-1,args:[P.F]})
this.cV(a)
this.d6(a,W.e9(x,z))
return y},
d6:function(a,b){return a.requestAnimationFrame(H.aQ(H.i(b,{func:1,ret:-1,args:[P.F]}),1))},
cV:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdJ:1,
"%":"DOMWindow|Window"},
iC:{"^":"m:22;a",
$1:function(a){var z=this.a
a=H.ba(H.cA(a),{futureOr:1,type:H.o(z,0)})
z=z.a
if(z.a!==0)H.a3(P.bO("Future already completed"))
z.a7(a)}},
dL:{"^":"r;",$isdL:1,"%":"Attr"},
mP:{"^":"k2;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isam")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.am]},
$isv:1,
$asv:function(){return[W.am]},
$asp:function(){return[W.am]},
$isk:1,
$ask:function(){return[W.am]},
$isa:1,
$asa:function(){return[W.am]},
$asq:function(){return[W.am]},
"%":"CSSRuleList"},
mQ:{"^":"fP;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
B:function(a,b){var z
if(b==null)return!1
if(!H.ah(b,"$isV",[P.F],"$asV"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.l(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dR(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mR:{"^":"k4;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isao")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ao]},
$isv:1,
$asv:function(){return[W.ao]},
$asp:function(){return[W.ao]},
$isk:1,
$ask:function(){return[W.ao]},
$isa:1,
$asa:function(){return[W.ao]},
$asq:function(){return[W.ao]},
"%":"GamepadList"},
mW:{"^":"k6;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isr")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.r]},
$isv:1,
$asv:function(){return[W.r]},
$asp:function(){return[W.r]},
$isk:1,
$ask:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mX:{"^":"k8;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isav")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.av]},
$isv:1,
$asv:function(){return[W.av]},
$asp:function(){return[W.av]},
$isk:1,
$ask:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$asq:function(){return[W.av]},
"%":"SpeechRecognitionResultList"},
mY:{"^":"ka;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isaw")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aw]},
$isv:1,
$asv:function(){return[W.aw]},
$asp:function(){return[W.aw]},
$isk:1,
$ask:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$asq:function(){return[W.aw]},
"%":"StyleSheetList"},
iK:{"^":"dl;cU:a<",
C:function(a,b){var z,y,x,w,v,u
H.i(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gD(this),y=z.length,x=this.a,w=J.l(x),v=0;v<z.length;z.length===y||(0,H.M)(z),++v){u=z[v]
b.$2(u,w.Y(x,u))}},
gD:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.j([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.n(z,w)
v=H.f(z[w],"$isdL")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asT:function(){return[P.d,P.d]},
$asI:function(){return[P.d,P.d]}},
iT:{"^":"iK;a",
i:function(a,b){return J.c8(this.a,H.t(b))},
gj:function(a){return this.gD(this).length}},
bu:{"^":"id;a,b,c,$ti"},
bt:{"^":"bu;a,b,c,$ti"},
iV:{"^":"ie;a,b,c,d,e,$ti",
sd0:function(a){this.d=H.i(a,{func:1,args:[W.O]})},
dn:function(a){var z,y,x
z=this.b
if(z==null)return
y=this.d
x=y!=null
if(x){H.i(y,{func:1,args:[W.O]})
if(x)J.eL(z,this.c,y,!1)}this.b=null
this.sd0(null)
return},
p:{
ag:function(a,b,c,d,e){var z=W.e9(new W.iW(c),W.O)
if(z!=null&&!0)J.eN(a,b,z,!1)
return new W.iV(0,a,b,z,!1,[e])}}},
iW:{"^":"m:23;a",
$1:function(a){return this.a.$1(H.f(a,"$isO"))}},
bv:{"^":"b;a",
cK:function(a){var z,y
z=$.cF()
if(z.a===0){for(y=0;y<262;++y)z.h(0,C.W[y],W.kw())
for(y=0;y<12;++y)z.h(0,C.w[y],W.kx())}},
V:function(a){return $.eE().u(0,W.aV(a))},
N:function(a,b,c){var z,y,x
z=W.aV(a)
y=$.cF()
x=y.i(0,H.e(z)+"::"+b)
if(x==null)x=y.i(0,"*::"+b)
if(x==null)return!1
return H.bW(x.$4(a,b,c,this))},
$isab:1,
p:{
dP:function(a){var z,y
z=document.createElement("a")
y=new W.jC(z,window.location)
y=new W.bv(y)
y.cK(a)
return y},
mU:[function(a,b,c,d){H.f(a,"$isS")
H.t(b)
H.t(c)
H.f(d,"$isbv")
return!0},"$4","kw",16,0,13],
mV:[function(a,b,c,d){var z,y,x
H.f(a,"$isS")
H.t(b)
H.t(c)
z=H.f(d,"$isbv").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kx",16,0,13]}},
q:{"^":"b;$ti",
gw:function(a){return new W.da(a,this.gj(a),-1,[H.bc(this,a,"q",0)])}},
ds:{"^":"b;a",
V:function(a){return C.a.bp(this.a,new W.hF(a))},
N:function(a,b,c){return C.a.bp(this.a,new W.hE(a,b,c))},
$isab:1},
hF:{"^":"m:9;a",
$1:function(a){return H.f(a,"$isab").V(this.a)}},
hE:{"^":"m:9;a,b,c",
$1:function(a){return H.f(a,"$isab").N(this.a,this.b,this.c)}},
jD:{"^":"b;",
cL:function(a,b,c,d){var z,y,x
this.a.H(0,c)
z=b.aH(0,new W.jE())
y=b.aH(0,new W.jF())
this.b.H(0,z)
x=this.c
x.H(0,C.Y)
x.H(0,y)},
V:function(a){return this.a.u(0,W.aV(a))},
N:["cq",function(a,b,c){var z,y
z=W.aV(a)
y=this.c
if(y.u(0,H.e(z)+"::"+b))return this.d.dg(c)
else if(y.u(0,"*::"+b))return this.d.dg(c)
else{y=this.b
if(y.u(0,H.e(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.e(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}],
$isab:1},
jE:{"^":"m:10;",
$1:function(a){return!C.a.u(C.w,H.t(a))}},
jF:{"^":"m:10;",
$1:function(a){return C.a.u(C.w,H.t(a))}},
jP:{"^":"jD;e,a,b,c,d",
N:function(a,b,c){if(this.cq(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.c8(a,"template")==="")return this.e.u(0,b)
return!1},
p:{
e_:function(){var z,y,x,w,v
z=P.d
y=P.cj(C.v,z)
x=H.o(C.v,0)
w=H.i(new W.jQ(),{func:1,ret:z,args:[x]})
v=H.j(["TEMPLATE"],[z])
y=new W.jP(y,P.a4(null,null,null,z),P.a4(null,null,null,z),P.a4(null,null,null,z),null)
y.cL(null,new H.hp(C.v,w,[x,z]),v,null)
return y}}},
jQ:{"^":"m:24;",
$1:function(a){return"TEMPLATE::"+H.e(H.t(a))}},
jN:{"^":"b;",
V:function(a){var z=J.B(a)
if(!!z.$isdv)return!1
z=!!z.$isH
if(z&&W.aV(a)==="foreignObject")return!1
if(z)return!0
return!1},
N:function(a,b,c){if(b==="is"||C.h.cj(b,"on"))return!1
return this.V(a)},
$isab:1},
da:{"^":"b;a,b,c,0d,$ti",
sbf:function(a){this.d=H.x(a,H.o(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbf(J.bf(this.a,z))
this.c=z
return!0}this.sbf(null)
this.c=y
return!1},
gA:function(a){return this.d},
$isaW:1},
iN:{"^":"b;a",$isK:1,$isdJ:1,p:{
iO:function(a){if(a===window)return H.f(a,"$isdJ")
else return new W.iN(a)}}},
ab:{"^":"b;"},
jC:{"^":"b;a,b",$ismC:1},
e2:{"^":"b;a",
aS:function(a){new W.k_(this).$2(a,null)},
a_:function(a,b){if(b==null)J.cM(a)
else J.bB(b,a)},
d9:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.f4(a)
x=J.c8(y.gcU(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.Y(t)}v="element unprintable"
try{v=J.bi(a)}catch(t){H.Y(t)}try{u=W.aV(a)
this.d8(H.f(a,"$isS"),b,z,v,u,H.f(y,"$isI"),H.t(x))}catch(t){if(H.Y(t) instanceof P.al)throw t
else{this.a_(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
d8:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a_(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.V(a)){this.a_(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.N(a,"is",g)){this.a_(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gD(f)
y=H.j(z.slice(0),[H.o(z,0)])
for(x=f.gD(f).length-1,z=f.a,w=J.l(z);x>=0;--x){if(x>=y.length)return H.n(y,x)
v=y[x]
if(!this.a.N(a,J.fg(v),w.Y(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.Y(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.Y(z,v)
w.d2(z,v)}}if(!!J.B(a).$isdA)this.aS(a.content)},
$islU:1},
k_:{"^":"m:25;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.d9(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a_(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.f5(z)}catch(w){H.Y(w)
v=H.f(z,"$isr")
if(x){u=v.parentNode
if(u!=null)J.bB(u,v)}else J.bB(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.f(y,"$isr")}}},
iM:{"^":"h+fG;"},
iP:{"^":"h+p;"},
iQ:{"^":"iP+q;"},
iR:{"^":"h+p;"},
iS:{"^":"iR+q;"},
iY:{"^":"h+p;"},
iZ:{"^":"iY+q;"},
jd:{"^":"h+p;"},
je:{"^":"jd+q;"},
jm:{"^":"h+T;"},
jn:{"^":"h+T;"},
jo:{"^":"h+p;"},
jp:{"^":"jo+q;"},
jq:{"^":"h+p;"},
jr:{"^":"jq+q;"},
ju:{"^":"h+p;"},
jv:{"^":"ju+q;"},
jB:{"^":"h+T;"},
dX:{"^":"K+p;"},
dY:{"^":"dX+q;"},
jG:{"^":"h+p;"},
jH:{"^":"jG+q;"},
jK:{"^":"h+T;"},
jR:{"^":"h+p;"},
jS:{"^":"jR+q;"},
e0:{"^":"K+p;"},
e1:{"^":"e0+q;"},
jW:{"^":"h+p;"},
jX:{"^":"jW+q;"},
k1:{"^":"h+p;"},
k2:{"^":"k1+q;"},
k3:{"^":"h+p;"},
k4:{"^":"k3+q;"},
k5:{"^":"h+p;"},
k6:{"^":"k5+q;"},
k7:{"^":"h+p;"},
k8:{"^":"k7+q;"},
k9:{"^":"h+p;"},
ka:{"^":"k9+q;"}}],["","",,P,{"^":"",
a1:function(a){var z,y,x,w,v
if(a==null)return
z=P.a_(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.M)(y),++w){v=H.t(y[w])
z.h(0,v,a[v])}return z},
kn:function(a,b){var z={}
a.C(0,new P.ko(z))
return z},
d3:function(){var z=$.d2
if(z==null){z=J.c4(window.navigator.userAgent,"Opera",0)
$.d2=z}return z},
fL:function(){var z,y
z=$.d_
if(z!=null)return z
y=$.d0
if(y==null){y=J.c4(window.navigator.userAgent,"Firefox",0)
$.d0=y}if(y)z="-moz-"
else{y=$.d1
if(y==null){y=!P.d3()&&J.c4(window.navigator.userAgent,"Trident/",0)
$.d1=y}if(y)z="-ms-"
else z=P.d3()?"-o-":"-webkit-"}$.d_=z
return z},
ko:{"^":"m:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
dQ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jf:{"^":"b;",
dL:function(){return Math.random()}},
b_:{"^":"b;X:a>,O:b>,$ti",
k:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
B:function(a,b){if(b==null)return!1
return H.ah(b,"$isb_",[P.F],null)&&this.a==J.bE(b)&&this.b==b.gO(b)},
gv:function(a){var z,y,x
z=J.ak(this.a)
y=J.ak(this.b)
y=P.dQ(P.dQ(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
jw:{"^":"b;"},
V:{"^":"jw;$ti"}}],["","",,P,{"^":"",fq:{"^":"h;",$isfq:1,"%":"SVGAnimatedLength"},lb:{"^":"H;0n:height=,0m:width=","%":"SVGFEBlendElement"},lc:{"^":"H;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},ld:{"^":"H;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},le:{"^":"H;0n:height=,0m:width=","%":"SVGFECompositeElement"},lf:{"^":"H;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},lg:{"^":"H;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},lh:{"^":"H;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},li:{"^":"H;0n:height=,0m:width=","%":"SVGFEFloodElement"},lj:{"^":"H;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},lk:{"^":"H;0n:height=,0m:width=","%":"SVGFEImageElement"},ll:{"^":"H;0n:height=,0m:width=","%":"SVGFEMergeElement"},lm:{"^":"H;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},ln:{"^":"H;0n:height=,0m:width=","%":"SVGFEOffsetElement"},lo:{"^":"H;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},lp:{"^":"H;0n:height=,0m:width=","%":"SVGFETileElement"},lq:{"^":"H;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},lt:{"^":"H;0n:height=,0m:width=","%":"SVGFilterElement"},lu:{"^":"bm;0n:height=,0m:width=","%":"SVGForeignObjectElement"},h3:{"^":"bm;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bm:{"^":"H;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},lB:{"^":"bm;0n:height=,0m:width=","%":"SVGImageElement"},aY:{"^":"h;",$isaY:1,"%":"SVGLength"},lH:{"^":"jh;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return this.L(a,b)},
h:function(a,b,c){H.f(c,"$isaY")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
L:function(a,b){return a.getItem(b)},
$asp:function(){return[P.aY]},
$isk:1,
$ask:function(){return[P.aY]},
$isa:1,
$asa:function(){return[P.aY]},
$asq:function(){return[P.aY]},
"%":"SVGLengthList"},lI:{"^":"H;0n:height=,0m:width=","%":"SVGMaskElement"},aZ:{"^":"h;",$isaZ:1,"%":"SVGNumber"},lV:{"^":"jt;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return this.L(a,b)},
h:function(a,b,c){H.f(c,"$isaZ")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
L:function(a,b){return a.getItem(b)},
$asp:function(){return[P.aZ]},
$isk:1,
$ask:function(){return[P.aZ]},
$isa:1,
$asa:function(){return[P.aZ]},
$asq:function(){return[P.aZ]},
"%":"SVGNumberList"},m_:{"^":"H;0n:height=,0m:width=","%":"SVGPatternElement"},m1:{"^":"h;0j:length=","%":"SVGPointList"},m3:{"^":"h;0n:height=,0m:width=","%":"SVGRect"},m4:{"^":"h3;0n:height=,0m:width=","%":"SVGRectElement"},dv:{"^":"H;",$isdv:1,"%":"SVGScriptElement"},mg:{"^":"jM;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return this.L(a,b)},
h:function(a,b,c){H.t(c)
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
L:function(a,b){return a.getItem(b)},
$asp:function(){return[P.d]},
$isk:1,
$ask:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"SVGStringList"},H:{"^":"S;",
K:function(a,b,c,d){var z,y,x,w,v,u
z=H.j([],[W.ab])
C.a.l(z,W.dP(null))
C.a.l(z,W.e_())
C.a.l(z,new W.jN())
c=new W.e2(new W.ds(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).dv(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a6(w)
u=z.ga5(z)
for(z=J.l(v);x=u.firstChild,x!=null;)z.F(v,x)
return v},
$isH:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mh:{"^":"bm;0n:height=,0m:width=","%":"SVGSVGElement"},b2:{"^":"h;",$isb2:1,"%":"SVGTransform"},mq:{"^":"jZ;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return this.L(a,b)},
h:function(a,b,c){H.f(c,"$isb2")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
L:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b2]},
$isk:1,
$ask:function(){return[P.b2]},
$isa:1,
$asa:function(){return[P.b2]},
$asq:function(){return[P.b2]},
"%":"SVGTransformList"},mE:{"^":"bm;0n:height=,0m:width=","%":"SVGUseElement"},jg:{"^":"h+p;"},jh:{"^":"jg+q;"},js:{"^":"h+p;"},jt:{"^":"js+q;"},jL:{"^":"h+p;"},jM:{"^":"jL+q;"},jY:{"^":"h+p;"},jZ:{"^":"jY+q;"}}],["","",,P,{"^":"",af:{"^":"b;",$isk:1,
$ask:function(){return[P.a2]},
$isa:1,
$asa:function(){return[P.a2]},
$isit:1}}],["","",,P,{"^":"",kU:{"^":"h;0j:length=","%":"AudioBuffer"},kV:{"^":"iL;",
i:function(a,b){return P.a1(a.get(H.t(b)))},
C:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a1(y.value[1]))}},
gD:function(a){var z=H.j([],[P.d])
this.C(a,new P.fs(z))
return z},
gj:function(a){return a.size},
$asT:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"AudioParamMap"},fs:{"^":"m:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},kW:{"^":"K;0j:length=","%":"AudioTrackList"},ft:{"^":"K;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lX:{"^":"ft;0j:length=","%":"OfflineAudioContext"},iL:{"^":"h+T;"}}],["","",,P,{"^":"",fv:{"^":"h;",$isfv:1,"%":"WebGLBuffer"},hV:{"^":"h;",$ishV:1,"%":"WebGLProgram"},m5:{"^":"h;",
bo:function(a,b){return a.activeTexture(b)},
bq:function(a,b,c){return a.attachShader(b,c)},
br:function(a,b,c){return a.bindBuffer(b,c)},
bt:function(a,b,c){return a.bindTexture(b,c)},
bu:function(a,b){return a.blendEquation(b)},
bv:function(a,b,c){return a.blendFunc(b,c)},
bw:function(a,b,c,d){return a.bufferData(b,c,d)},
bx:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
by:function(a,b){return a.compileShader(b)},
bz:function(a){return a.createBuffer()},
bA:function(a){return a.createProgram()},
bC:function(a,b){return a.createShader(b)},
bD:function(a){return a.createTexture()},
bF:function(a,b){return a.depthMask(b)},
bG:function(a,b){return a.disable(b)},
bH:function(a,b,c,d){return a.drawArrays(b,c,d)},
bI:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bJ:function(a,b){return a.enable(b)},
bK:function(a,b){return a.enableVertexAttribArray(b)},
ah:function(a){return P.a1(a.getContextAttributes())},
aJ:function(a){return a.getError()},
aL:function(a,b){return a.getProgramInfoLog(b)},
aM:function(a,b,c){return a.getProgramParameter(b,c)},
aO:function(a,b){return a.getShaderInfoLog(b)},
aP:function(a,b,c){return a.getShaderParameter(b,c)},
aQ:function(a,b,c){return a.getUniformLocation(b,c)},
bN:function(a,b){return a.linkProgram(b)},
bT:function(a,b,c){return a.pixelStorei(b,c)},
aV:function(a,b,c){return a.shaderSource(b,c)},
aW:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aF:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.B(g)
if(!!z.$isaH)y=!0
else y=!1
if(y){this.aA(a,b,c,d,e,f,g)
return}if(!!z.$isbj)z=!0
else z=!1
if(z){this.aB(a,b,c,d,e,f,g)
return}throw H.c(P.cT("Incorrect number or type of arguments"))},
bW:function(a,b,c,d,e,f,g){return this.aF(a,b,c,d,e,f,g,null,null,null)},
aA:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aB:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bX:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
"%":"WebGLRenderingContext"},m6:{"^":"h;",
dj:function(a,b){return a.beginTransformFeedback(b)},
dm:function(a,b){return a.bindVertexArray(b)},
dz:function(a){return a.createVertexArray()},
dB:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dC:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dD:function(a){return a.endTransformFeedback()},
dX:function(a,b,c,d){this.dd(a,b,H.w(c,"$isa",[P.d],"$asa"),d)
return},
dd:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dY:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bo:function(a,b){return a.activeTexture(b)},
bq:function(a,b,c){return a.attachShader(b,c)},
br:function(a,b,c){return a.bindBuffer(b,c)},
bt:function(a,b,c){return a.bindTexture(b,c)},
bu:function(a,b){return a.blendEquation(b)},
bv:function(a,b,c){return a.blendFunc(b,c)},
bw:function(a,b,c,d){return a.bufferData(b,c,d)},
bx:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
by:function(a,b){return a.compileShader(b)},
bz:function(a){return a.createBuffer()},
bA:function(a){return a.createProgram()},
bC:function(a,b){return a.createShader(b)},
bD:function(a){return a.createTexture()},
bF:function(a,b){return a.depthMask(b)},
bG:function(a,b){return a.disable(b)},
bH:function(a,b,c,d){return a.drawArrays(b,c,d)},
bI:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bJ:function(a,b){return a.enable(b)},
bK:function(a,b){return a.enableVertexAttribArray(b)},
ah:function(a){return P.a1(a.getContextAttributes())},
aJ:function(a){return a.getError()},
aL:function(a,b){return a.getProgramInfoLog(b)},
aM:function(a,b,c){return a.getProgramParameter(b,c)},
aO:function(a,b){return a.getShaderInfoLog(b)},
aP:function(a,b,c){return a.getShaderParameter(b,c)},
aQ:function(a,b,c){return a.getUniformLocation(b,c)},
bN:function(a,b){return a.linkProgram(b)},
bT:function(a,b,c){return a.pixelStorei(b,c)},
aV:function(a,b,c){return a.shaderSource(b,c)},
aW:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aF:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.B(g)
if(!!z.$isaH)y=!0
else y=!1
if(y){this.aA(a,b,c,d,e,f,g)
return}if(!!z.$isbj)z=!0
else z=!1
if(z){this.aB(a,b,c,d,e,f,g)
return}throw H.c(P.cT("Incorrect number or type of arguments"))},
bW:function(a,b,c,d,e,f,g){return this.aF(a,b,c,d,e,f,g,null,null,null)},
aA:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aB:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bX:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
"%":"WebGL2RenderingContext"},i4:{"^":"h;",$isi4:1,"%":"WebGLShader"},il:{"^":"h;",$isil:1,"%":"WebGLTexture"},iu:{"^":"h;",$isiu:1,"%":"WebGLUniformLocation"},iz:{"^":"h;",$isiz:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",md:{"^":"jJ;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return P.a1(this.cZ(a,b))},
h:function(a,b,c){H.f(c,"$isI")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
cZ:function(a,b){return a.item(b)},
$asp:function(){return[[P.I,,,]]},
$isk:1,
$ask:function(){return[[P.I,,,]]},
$isa:1,
$asa:function(){return[[P.I,,,]]},
$asq:function(){return[[P.I,,,]]},
"%":"SQLResultSetRowList"},jI:{"^":"h+p;"},jJ:{"^":"jI+q;"}}],["","",,G,{"^":"",
iD:function(a){var z,y,x,w
z=H.j(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.n(z,y)
C.a.h(z,y,w+H.e(z[y]))}return C.a.a1(z,"\n")},
dM:function(a,b,c){var z,y,x,w
z=J.l(a)
y=z.bC(a,b)
z.aV(a,y,c)
z.by(a,y)
x=H.bW(z.aP(a,y,35713))
if(x!=null&&!x){w=z.aO(a,y)
P.aD("E:Compilation failed:")
P.aD("E:"+G.iD(c))
P.aD("E:Failure:")
P.aD(C.h.G("E:",w))
throw H.c(w)}return y},
db:function(a,b){var z,y,x
H.w(a,"$isa",[T.y],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.i.h(b,z,J.bE(a[y]))
if(y>=a.length)return H.n(a,y)
C.i.h(b,z+1,J.c7(a[y]))
z+=2
if(y>=a.length)return H.n(a,y)
x=J.cK(a[y])
if(z>=b.length)return H.n(b,z)
b[z]=x}return b},
fY:function(a,b){var z,y
H.w(a,"$isa",[T.aJ],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.i.h(b,z,J.bE(a[y]))
if(y>=a.length)return H.n(a,y)
C.i.h(b,z+1,J.c7(a[y]))}return b},
fZ:function(a,b){var z,y,x,w,v
H.w(a,"$isa",[T.b4],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.i.h(b,z,J.bE(a[y]))
if(y>=a.length)return H.n(a,y)
C.i.h(b,z+1,J.c7(a[y]))
x=z+2
if(y>=a.length)return H.n(a,y)
w=J.cK(a[y])
v=b.length
if(x>=v)return H.n(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.n(a,y)
w=J.f7(a[y])
if(z>=v)return H.n(b,z)
b[z]=w}return b},
fX:function(a,b){var z,y
H.w(a,"$isa",[[P.a,P.E]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.n.h(b,z,J.bf(a[y],0))
if(y>=a.length)return H.n(a,y)
C.n.h(b,z+1,J.bf(a[y],1))
if(y>=a.length)return H.n(a,y)
C.n.h(b,z+2,J.bf(a[y],2))
if(y>=a.length)return H.n(a,y)
C.n.h(b,z+3,J.bf(a[y],3))}return b},
jb:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.ap(z,[H.o(z,0)]),y=y.gw(y),x=b.x,w=[[P.a,P.E]],v=[P.a2],u=[T.b4],t=[T.y],s=[T.aJ];y.t();){r=y.d
if(!x.ae(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.ee>0)H.c2("I: "+r)
continue}q=z.i(0,r)
switch($.a7().i(0,r).a){case"vec2":b.Z(r,G.fY(H.bA(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.Z(r,G.db(H.bA(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.Z(r,G.fZ(H.bA(q,"$isa",u,"$asa"),null),4)
break
case"float":b.Z(r,new Float32Array(H.bT(H.bA(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.Z(r,G.fX(H.bA(q,"$isa",w,"$asa"),null),4)
break}}},
bL:{"^":"b;"},
bQ:{"^":"bL;",
b1:function(){return this.d},
k:function(a){var z,y,x,w
z=H.j(["{"+new H.dF(H.kt(this)).k(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.ap(y,[H.o(y,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.i(0,w)))}return C.a.a1(z,"\n")}},
fy:{"^":"b;0a,b",
bL:function(a,b,c){J.f1(this.a,b)
if(c>0)J.fm(this.a,b,c)},
c9:function(a,b,c,d,e,f,g,h){J.c3(this.a,34962,b)
J.fn(this.a,c,d,e,!1,g,h)}},
fW:{"^":"b;"},
d9:{"^":"b;a,b,c,d"},
h2:{"^":"b;a,b,c,d,e",
cu:function(){var z,y,x,w,v,u,t,s,r
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.j(y,[P.E])
for(y=this.b,w=0,v=0;!1;++v){if(v>=0)return H.n(y,v)
u=y[v]
C.a.h(x,w,u.ge1(u))
C.a.h(x,w+1,u.ge2(u))
C.a.h(x,w+2,u.ge3(u))
w+=3}for(y=z.length,v=0;v<z.length;z.length===y||(0,H.M)(z),++v){t=z[v]
s=t.a
C.a.h(x,w,s)
C.a.h(x,w+1,t.b)
r=t.c
C.a.h(x,w+2,r)
C.a.h(x,w+3,s)
C.a.h(x,w+4,r)
C.a.h(x,w+5,t.d)
w+=6}return x},
cw:function(a,b){var z,y,x,w,v,u,t
z=H.j([],[T.aJ])
this.e.h(0,"aTexUV",z)
for(y=b-1,x=a-1,w=0;w<b;++w)for(v=w/y,u=0;u<a;++u){t=new Float32Array(2)
t[0]=v
t[1]=u/x
C.a.l(z,new T.aJ(t))}},
cv:function(a,b,c){var z,y,x,w,v,u,t,s,r
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
C.a.l(z,new G.d9(v+s,r+s,r+t,v+t))
t=s}w=u}},
k:function(a){var z,y,x,w,v
z=H.j(["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"],[P.d])
for(y=this.e,x=new H.ap(y,[H.o(y,0)]),x=x.gw(x);x.t();){w=x.d
v=$.a7().i(0,w).a
C.a.l(z,H.e(w)+"["+v+","+y.i(0,w).length+"]")}return C.a.a1(z," ")}},
dD:{"^":"b;a,b,c"},
dB:{"^":"b;a,b,c",p:{
dC:function(a,b,c){return new G.dB(a,b,c)}}},
dn:{"^":"bQ;d,a,b,c",p:{
dp:function(a){var z=P.a_(P.d,P.b)
z.h(0,"cDepthTest",!0)
z.h(0,"cDepthWrite",!0)
z.h(0,"cBlendEquation",$.eq())
z.h(0,"cStencilFunc",$.cD())
return new G.dn(z,a,!1,!0)}}},
hr:{"^":"bL;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sat:function(a){this.cx=H.w(a,"$isa",[P.E],"$asa")},
b_:function(a,b,c){var z,y
C.h.aq(a,0)
H.f(b,"$isaf")
this.cy.h(0,a,b)
z=this.d
y=this.r.i(0,a)
J.c3(z.a,34962,y)
J.cJ(z.a,34962,b,35048)},
cz:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
Z:function(a,b,c){var z,y,x,w,v
z=J.cG(a,0)===105
if(z&&this.z===0)this.z=C.e.cr(b.length,c)
y=this.r
x=this.d
y.h(0,a,J.c5(x.a))
this.b_(a,b,c)
w=$.a7().i(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.i(0,a)
J.bC(x.a,this.e)
x.bL(0,v,z?1:0)
x.c9(0,y.i(0,a),v,w.b0(),5126,!1,0,0)},
aZ:function(a){var z,y,x,w
z=this.r
y=this.d
z.h(0,"aPosition",J.c5(y.a))
this.ch=a
this.b_("aPosition",a,3)
x=$.a7().i(0,"aPosition")
if(x==null)throw H.c("Unknown canonical aPosition")
w=this.x.i(0,"aPosition")
J.bC(y.a,this.e)
y.bL(0,w,0)
y.c9(0,z.i(0,"aPosition"),w,x.b0(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.j(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=new H.ap(z,[H.o(z,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(y,H.e(w)+":"+z.i(0,w).length)}return"MESH["+this.a+"] "+C.a.a1(y,"  ")},
p:{
dq:function(a,b,c,d){var z=P.d
return new G.hr(b,J.eV(b.a),c,P.a_(z,P.b),d,0,-1,P.a_(z,P.af),"meshdata:"+a,!1,!0)}}},
hK:{"^":"bQ;",
cs:function(a,b){var z
if(typeof a!=="number")return a.e_()
if(typeof b!=="number")return H.by(b)
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
b1:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
z=this.x
y=this.d
y.h(0,"uEyePosition",z.aK())
x=this.cy
x.E(z.d)
z=this.cx
z.E(this.db)
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
y.h(0,"uPerspectiveViewMatrix",z)
return y}},
l9:{"^":"b;"},
hZ:{"^":"bL;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cC:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.M)(z),++u){t=z[u]
x.h(0,t,J.cL(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.M)(z),++u){t=z[u]
x.h(0,t,J.cL(w.a,v,t))}},
cG:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.j([],[P.d])
x=H.j([],[P.d])
for(y=new H.ap(y,[H.o(y,0)]),y=y.gw(y);y.t();){w=y.d
if(!z.ae(0,w))C.a.l(x,w)}for(z=this.x,z=P.jj(z,z.r,H.o(z,0)),y=this.Q;z.t();){w=z.d
if(!y.u(0,w))C.a.l(x,w)}return x},
cJ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(b,"$isI",[P.d,P.b],"$asI")
z=Date.now()
for(y=new H.ap(b,[H.o(b,0)]),y=y.gw(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.t();){s=y.d
switch(J.cG(s,0)){case 117:if(w.ae(0,s)){r=b.i(0,s)
if(v.ae(0,s))H.c2("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.h(0,s,a)
q=$.a7().i(0,s)
if(q==null)H.a3("unknown "+s)
p=w.i(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.L(r)
J.c9(x.a,p,r)}else if(!!J.B(r).$ish8)J.fk(x.a,p,r)
break
case"float":if(q.c===0){H.ed(r)
J.fi(x.a,p,r)}else if(!!J.B(r).$isaf)J.fj(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.aj(r,"$isaa").a
J.cS(x.a,p,!1,s)}else if(!!J.B(r).$isaf)J.cS(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=C.O.ge0(H.aj(r,"$islJ"))
J.cR(x.a,p,!1,s)}else if(!!J.B(r).$isaf)J.cR(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.cQ(o,p,H.aj(r,"$isb4").a)
else J.cQ(o,p,H.f(r,"$isaf"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cP(o,p,H.aj(r,"$isy").a)
else J.cP(o,p,H.f(r,"$isaf"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cO(o,p,H.aj(r,"$isaJ").a)
else J.cO(o,p,H.f(r,"$isaf"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.by(s)
J.cH(x.a,33984+s)
s=H.aj(r,"$iscp").b
J.bg(x.a,3553,s)
s=this.ch
J.c9(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.G()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.by(s)
J.cH(x.a,33984+s)
s=H.aj(r,"$iscp").b
J.bg(x.a,34067,s)
s=this.ch
J.c9(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.G()
this.ch=s+1
break
default:H.c2("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.i(0,s)
switch(s){case"cDepthTest":s=J.aF(r,!0)
o=x.a
if(s)J.bh(o,2929)
else J.c6(o,2929)
break
case"cStencilFunc":H.aj(r,"$isdD")
s=r.a
o=x.a
if(s===1281)J.c6(o,2960)
else{J.bh(o,2960)
o=r.b
n=r.c
J.fe(x.a,s,o,n)}break
case"cDepthWrite":H.bW(r)
J.eW(x.a,r)
break
case"cBlendEquation":H.aj(r,"$isdB")
s=r.a
o=x.a
if(s===1281)J.c6(o,3042)
else{J.bh(o,3042)
o=r.b
n=r.c
J.eQ(x.a,o,n)
J.eP(x.a,s)}break}++t
break}}m=P.fQ(0,0,0,Date.now()-new P.bH(z,!1).a,0,0)
""+t
m.k(0)},
ct:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[G.bQ],"$asa")
Date.now()
z=this.d
J.fl(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b8()}for(x=0;x<2;++x){w=b[x]
this.cJ(w.a,w.b1())}y=this.Q
y.a0(0)
for(v=a.cy,v=new H.ap(v,[H.o(v,0)]),v=v.gw(v);v.t();)y.l(0,v.d)
u=this.cG()
if(u.length!==0)P.aD("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
J.bC(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.cz()
s=a.Q
r=a.z
if(t)J.eO(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.f_(q,y,v,s,0,r)
else J.eZ(q,y,v,s,0)}else{s=z.a
if(r>1)J.eY(s,y,0,v,r)
else J.eX(s,y,0,v)}if(t)J.f2(z.a)},
al:function(a,b){return this.ct(a,b,null)},
p:{
cm:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
y=P.a4(null,null,null,z)
x=c.b
w=d.b
v=H.w(c.f,"$isa",[z],"$asa")
u=J.eT(b.a)
t=G.dM(b.a,35633,x)
J.cI(b.a,u,t)
s=G.dM(b.a,35632,w)
J.cI(b.a,u,s)
if(v.length>0)J.fh(b.a,u,v,35980)
J.fc(b.a,u)
if(!H.bW(J.fb(b.a,u,35714)))H.a3(J.fa(b.a,u))
z=new G.hZ(b,c,d,u,P.cj(c.c,z),P.a_(z,P.b),P.a_(z,z),y,a,!1,!0)
z.cC(a,b,c,d)
return z}}},
D:{"^":"b;a,b,c",
b0:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
dw:{"^":"b;a,0b,c,d,e,f,r,x",
ak:function(a){var z,y,x,w,v
H.w(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.M)(a),++w){v=a[w]
C.a.l(y,v)
x.h(0,v,this.r);++this.r}C.a.ai(y)},
S:function(a){var z,y,x
H.w(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.M)(a),++x)C.a.l(y,a[x])
C.a.ai(y)},
a6:function(a){var z,y
H.w(a,"$isa",[P.d],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.l(z,a[y])
C.a.ai(z)},
cE:function(a,b){this.b=this.an(!0,H.w(a,"$isa",[P.d],"$asa"),b)},
am:function(a){return this.cE(a,null)},
cD:function(a,b){this.b=this.an(!1,H.w(a,"$isa",[P.d],"$asa"),b)},
b2:function(a){return this.cD(a,null)},
an:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.w(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.j(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.M)(y),++u){t=y[u]
s=$.a7().i(0,t)
C.a.l(w,"layout (location="+H.e(v.i(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.M)(z),++u){q=z[u]
s=$.a7().i(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.M)(z),++u){q=z[u]
s=$.a7().i(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.M)(z),++u){q=z[u]
s=$.a7().i(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.l(w,"")
if(a)C.a.l(w,"void main(void) {")
C.a.H(w,b)
if(a)C.a.l(w,"}")
return C.a.a1(w,"\n")},
p:{
br:function(a){var z,y
z=P.d
y=[z]
return new G.dw(a,H.j([],y),H.j([],y),H.j([],y),H.j([],y),0,P.a_(z,P.E))}}},
i8:{"^":"bL;",
aK:function(){var z,y,x
z=this.e
y=this.d.a
x=z.a
x[0]=y[12]
x[1]=y[13]
x[2]=y[14]
return z}},
im:{"^":"b;a,b,c,d,e,f,r"},
cp:{"^":"b;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
h6:{"^":"cp;f,a,b,c,d,e",p:{
dc:function(a,b,c,d,e){var z=J.eU(a.a)
J.bg(a.a,e,z)
J.fd(a.a,37440,1)
J.bg(a.a,e,z)
J.ff(a.a,e,0,6408,6408,5121,c)
J.cN(a.a,e,10240,9729)
J.cN(a.a,e,10241,9729)
J.f9(a.a)
J.bg(a.a,e,null)
return new G.h6(c,b,z,e,a,new G.im(!1,!1,!1,!0,1,9729,9729))}}}}],["","",,R,{"^":"",
iy:function(a,b,c){var z,y,x,w,v,u
z="stars_"+b
y=b*3
x=new Float32Array(y)
for(w=x.length,v=0;v<y;++v){u=$.eD().dL()
if(v>=w)return H.n(x,v)
x[v]=(u-0.5)*c}y=G.dq(z,a.d,0,a.e.x)
y.aZ(x)
return y},
jl:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.f(W.iU("span",null),"$isS")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.z).ap(y,"float")
y.setProperty(x,"left","")
x=C.z.ap(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.r.F(z,v)}return z},
hL:{"^":"hK;fy,go,x,y,z,Q,ch,cx,cy,db,d,a,b,c",
dQ:[function(a){var z,y,x
z=this.fy
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.aD("size change "+H.e(y)+" "+H.e(x))
this.cs(y,x)
J.fo(this.go.a,0,0,y,x)},"$1","gdP",4,0,11]},
ia:{"^":"b;",
cF:function(a,b,c){var z,y
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
y=J.l(z)
y.F(z,this.b)
y.F(z,this.d)
y.F(z,this.c)}},
ib:{"^":"ia;e,f,a,b,c,d",
cI:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.A.dW(y,2)+" fps"
C.r.cf(this.c,b)
x=C.e.U(30*C.A.dq(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.f(z.firstChild,"$isS")
v=w.style
u=""+x+"px"
v.height=u
C.r.F(z,w)},
cH:function(a){return this.cI(a,"")}}}],["","",,V,{}],["","",,B,{"^":"",
io:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=B.hI(new B.ip(e,d,f,c),0,6.283185307179586,g,0.001,!0)
y=z.length
if(0>=y)return H.n(z,0)
C.a.l(z,z[0])
if(1>=z.length)return H.n(z,1)
C.a.l(z,z[1])
x=g+1
w=B.iq(z,h,i)
for(y=w.length,v=0;v<w.length;w.length===y||(0,H.M)(w),++v){u=w[v]
if(0>=u.length)return H.n(u,0)
C.a.l(u,u[0])
if(1>=u.length)return H.n(u,1)
C.a.l(u,u[1])}t=h+1
y=H.j([],[G.fW])
s=H.j([],[G.d9])
r=[T.y]
q=H.j([],r)
p=new G.h2(!1,y,s,q,P.a_(P.d,[P.a,,]))
for(y=w.length,v=0;v<w.length;w.length===y||(0,H.M)(w),++v){o=w[v]
for(n=0;n<o.length;n+=2){s=H.f(o[n],"$isy")
s.toString
m=new T.y(new Float32Array(3))
m.E(s)
C.a.l(q,m)}}p.cv(t,x,!1)
p.cw(t,x)
l=$.a7().i(0,"aNormal")
switch(l.a){case"vec2":p.e.h(0,"aNormal",H.j([],[T.aJ]))
break
case"vec3":p.e.h(0,"aNormal",H.j([],r))
break
case"vec4":p.e.h(0,"aNormal",H.j([],[T.b4]))
break
case"float":p.e.h(0,"aNormal",H.j([],[P.a2]))
break
case"uvec4":p.e.h(0,"aNormal",H.j([],[[P.a,P.E]]))
break}for(y=w.length,s=p.e,v=0;v<w.length;w.length===y||(0,H.M)(w),++v){o=w[v]
for(n=0;q=o.length,n<q;n+=2){m=n+1
if(m>=q)return H.n(o,m)
m=H.f(o[m],"$isy")
k=H.w(s.i(0,"aNormal"),"$isa",r,"$asa")
m.toString
q=new T.y(new Float32Array(3))
q.E(m);(k&&C.a).l(k,q)}}return p},
iq:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=[T.y]
H.w(a,"$isa",z,"$asa")
y=H.j([],[[P.a,T.y]])
x=new Float32Array(3)
w=new T.y(x)
v=new Float32Array(3)
u=new T.y(v)
t=new Float32Array(3)
s=new T.y(t)
for(r=0;q=a.length,r<q;r+=2){p=a[r]
o=r+1
if(o>=q)return H.n(a,o)
n=a[o]
m=H.j([],z)
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
t[2]=k*j}u.W(0)
s.W(0)
for(i=0;i<b;++i){h=i/b*2*3.141592653589793
g=c*Math.cos(h)
f=c*Math.sin(h)
w.E(p)
w.ad(u,g)
w.ad(s,f)
q=new T.y(new Float32Array(3))
q.E(w)
C.a.l(m,q)
x[2]=0
x[1]=0
x[0]=0
w.ad(u,g)
w.ad(s,f)
w.W(0)
q=new T.y(new Float32Array(3))
q.E(w)
C.a.l(m,q)}}return y},
hI:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
H.i(a,{func:1,ret:-1,args:[P.a2,T.y]})
z=H.j([],[T.y])
y=new T.y(new Float32Array(3))
x=new T.y(new Float32Array(3))
for(w=(c-b)/(d-0),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+e,x)
x.aY(0,y)
t=new T.y(new Float32Array(3))
t.E(y)
C.a.l(z,t)
t=new T.y(new Float32Array(3))
t.E(x)
C.a.l(z,t)}return z},
ip:{"^":"m:26;a,b,c,d",
$2:function(a,b){var z,y,x,w,v,u
z=this.c
y=this.a*a
x=Math.cos(y)
w=Math.sin(y)
y=this.b*a
v=Math.cos(y)
u=Math.sin(y)
y=z*(2+x)*0.5
b.sX(0,y*v)
b.sO(0,y*u)
b.sag(0,this.d*z*0.5*w)}}}],["","",,D,{"^":"",
hl:function(a){var z,y,x,w
z=W.aH
y=new P.P(0,$.C,[z])
x=document.createElement("img")
w=new W.bt(x,"load",!1,[W.O])
w.gdF(w).a2(new D.hm(new P.iE(y,[z]),x),-1)
x.src=a
return y},
hm:{"^":"m:11;a,b",
$1:function(a){H.f(a,"$isO")
return this.a.ds(0,this.b)}},
he:{"^":"b;a,b,c",
cA:function(a){var z,y
a=document
z=W.aX
y={func:1,ret:-1,args:[z]}
W.ag(a,"keydown",H.i(new D.hg(this),y),!1,z)
W.ag(a,"keyup",H.i(new D.hh(this),y),!1,z)},
p:{
hf:function(a){var z=P.E
z=new D.he(P.a4(null,null,null,z),P.a4(null,null,null,z),P.a4(null,null,null,z))
z.cA(a)
return z}}},
hg:{"^":"m:12;a",
$1:function(a){var z
H.f(a,"$isaX")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},
hh:{"^":"m:12;a",
$1:function(a){var z
H.f(a,"$isaX")
z=this.a
z.a.bU(0,a.which)
z.c.l(0,a.which)}},
hu:{"^":"b;a,b,c,d,e,f,r,x",
cB:function(a){var z,y,x
if(a==null)a=document
z=J.l(a)
y=z.gbQ(a)
x=H.o(y,0)
W.ag(y.a,y.b,H.i(new D.hw(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbP(a)
y=H.o(x,0)
W.ag(x.a,x.b,H.i(new D.hx(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbR(a)
x=H.o(y,0)
W.ag(y.a,y.b,H.i(new D.hy(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbS(a)
x=H.o(z,0)
W.ag(z.a,z.b,H.i(new D.hz(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
hv:function(a){var z=P.E
z=new D.hu(P.a4(null,null,null,z),P.a4(null,null,null,z),P.a4(null,null,null,z),0,0,0,0,0)
z.cB(a)
return z}}},
hw:{"^":"m:3;a",
$1:function(a){var z,y
H.f(a,"$isU")
a.preventDefault()
z=this.a
y=J.l(a)
z.r=H.L(y.gbO(a).a)
z.x=H.L(y.gbO(a).b)
z.d=a.movementX
z.e=a.movementY}},
hx:{"^":"m:3;a",
$1:function(a){var z
H.f(a,"$isU")
a.preventDefault()
P.aD("BUTTON "+H.e(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},
hy:{"^":"m:3;a",
$1:function(a){var z
H.f(a,"$isU")
a.preventDefault()
z=this.a
z.a.bU(0,a.button)
z.c.l(0,a.button)}},
hz:{"^":"m:27;a",
$1:function(a){H.f(a,"$isaK")
a.preventDefault()
this.a.f=H.L(C.ag.gdA(a))}},
hH:{"^":"i8;ch,cx,cy,db,dx,dy,fr,fx,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
c_:function(a){var z,y
z=C.i.dG(H.w(a,"$isk",[P.b],"$ask"),0,new A.kv(),P.E)
if(typeof z!=="number")return H.by(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kv:{"^":"m:28;",
$2:function(a,b){var z,y
H.L(a)
z=J.ak(b)
if(typeof a!=="number")return a.G()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",aa:{"^":"b;a",
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
k:function(a){return"[0] "+this.a3(0).k(0)+"\n[1] "+this.a3(1).k(0)+"\n[2] "+this.a3(2).k(0)+"\n[3] "+this.a3(3).k(0)+"\n"},
i:function(a,b){var z=this.a
if(b>=16)return H.n(z,b)
return z[b]},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aa){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gv:function(a){return A.c_(this.a)},
a3:function(a){var z,y,x
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
return new T.b4(z)},
R:function(){var z=this.a
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
aT:function(a,b,c){var z=this.a
z[14]=c
z[13]=b
z[12]=a}},aJ:{"^":"b;a",
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aJ){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gv:function(a){return A.c_(this.a)},
i:function(a,b){var z=this.a
if(b>=2)return H.n(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gX:function(a){return this.a[0]},
gO:function(a){return this.a[1]}},y:{"^":"b;a",
aU:function(a,b,c){var z=this.a
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
if(b instanceof T.y){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.c_(this.a)},
i:function(a,b){var z=this.a
if(b>=3)return H.n(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gbM:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
W:function(a){var z,y,x
z=Math.sqrt(this.gbM())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aC:function(a){var z,y
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
z=new T.y(new Float32Array(3))
z.aU(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
ad:function(a,b){var z,y
z=a.a
y=this.a
y[0]=y[0]+z[0]*b
y[1]=y[1]+z[1]*b
y[2]=y[2]+z[2]*b},
aY:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
sX:function(a,b){this.a[0]=b
return b},
sO:function(a,b){this.a[1]=b
return b},
sag:function(a,b){this.a[2]=b
return b},
gX:function(a){return this.a[0]},
gO:function(a){return this.a[1]},
gag:function(a){return this.a[2]}},b4:{"^":"b;a",
k:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.b4){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gv:function(a){return A.c_(this.a)},
i:function(a,b){var z=this.a
if(b>=4)return H.n(z,b)
return z[b]},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gX:function(a){return this.a[0]},
gO:function(a){return this.a[1]},
gag:function(a){return this.a[2]},
gdZ:function(a){return this.a[3]}}}],["","",,G,{"^":"",
ek:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z={}
y=document
x=C.t.cd(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.ib(0,0,x,w,y.createElement("div"),R.jl("blue","gray",90,30))
u.cF(x,"blue","gray")
t=H.f(C.t.dN(y,"#webgl-canvas"),"$isbj")
s=new G.fy(t)
x=P.d
v=P.b
r=(t&&C.y).aI(t,"webgl2",P.dj(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],x,v))
s.a=r
if(r==null)H.a3(P.d8('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
q="ChronosGL Config: "+H.e(J.f8(r))
if($.ee>0)P.aD("I: "+q)
J.eR(r,0,0,0,1)
J.bh(r,2929)
J.bh(r,2884)
r=new Float32Array(3)
q=D.hf(null)
p=D.hv(t)
o=new T.aa(new Float32Array(16))
o.R()
n=new Float32Array(3)
m=new Float32Array(3)
l=new Float32Array(3)
k=new D.hH(165,0,0,0,new T.y(r),-0.02,q,p,o,new T.y(n),new T.y(m),new T.y(l),new T.y(new Float32Array(3)),"camera:orbit",!1,!0)
r=new T.aa(new Float32Array(16))
r.R()
q=new T.aa(new Float32Array(16))
q.R()
j=new R.hL(t,s,k,50,1,0.1,1000,r,q,new T.aa(new Float32Array(16)),P.a_(x,v),"perspective",!1,!0)
j.b3()
j.dQ(null)
r=W.O
W.ag(window,"resize",H.i(j.gdP(),{func:1,ret:-1,args:[r]}),!1,r)
i=G.cm("textured",s,$.eK(),$.eJ())
r=$.eG()
q=[x]
p=P.E
o=new G.dw("PerlinNoiseColor F",H.j([],q),H.j([],q),H.j([],q),H.j([],q),0,P.a_(x,p))
o.a6(H.j(["vNormal"],q))
o.S(H.j(["uTime","uTransformationMatrix"],q))
o.b=o.an(!1,H.w(H.j(["","vec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n","#define VARIANT 1\n\nvoid main() {\n#if VARIANT == 1\n  float mytime = uTime/2.0;\n#ifdef BLACK\n  mytime = uTime/10.0;\n#endif\n  float period = 10.0;\n  float factor = 1.0; // sin( uTime)/4.0+2.0;\n  vec3 translation = uTransformationMatrix[3].xyz;\n  float r = pnoise( .75 * ( vNormal *factor + mytime ), vec3( period ) );\n  float g = pnoise( 0.8 * ( vNormal *factor + mytime ), vec3( period ) );\n  float b = pnoise( 0.9 * ( vNormal *factor + mytime ), vec3( period ) );\n  float n = pnoise( 1.5 * ( vNormal *factor + mytime ), vec3( period ) );\n#else\n  float mytime = 0.0 ; //uTime/50.0;\n  float period = 5.0;\n  float factor = 1.0; // sin( uTime)/4.0+2.0;\n  vec3 translation = uTransformationMatrix[3].xyz;\n  float r = pnoise( .75 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float g = pnoise( 0.8 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float b = pnoise( 0.9 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float n = pnoise( 1.5 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n#endif\n\n  n = pow( .001, n );\n//float n = 10.0 * pnoise( 5.0 * ( vNormal + uTime ), vec3( 10.0 ) ) * pnoise( .5 * ( vNormal + uTime ), vec3( 10.0 ) );\n//n += .5 * pnoise( 4.0 * vNormal, vec3( 10.0 ) );\n#ifdef BLACK\n  vec3 color = vec3( 1.0-(r + n), 1.0-(g + n), 1.0-(b + n) );\n#else\n  vec3 color = vec3( (r + n), (g + n), (b + n) );\n#endif\n  oFragColor = vec4( color, 1.0 );\n}\n"],q),"$isa",q,"$asa"),null)
h=G.cm("perlin",s,r,o)
g=B.io(!0,!0,1,2,3,20,128,16,4,!1)
f=G.dq("torusknot",i.d,4,i.e.x)
f.aZ(G.db(g.d,null))
r=H.w(g.cu(),"$isa",[p],"$asa")
q=f.d
f.y=J.c5(q.a)
p=f.ch.length
if(p<768){f.sat(new Uint8Array(H.bT(r)))
f.Q=5121}else if(p<196608){f.sat(new Uint16Array(H.bT(r)))
f.Q=5123}else{f.sat(new Uint32Array(H.bT(r)))
f.Q=5125}J.bC(q.a,f.e)
r=f.y
p=f.cx
J.c3(q.a,34963,r)
J.cJ(q.a,34963,p,35048)
G.jb(g,f)
e=G.dp("texture")
r=new T.aa(new Float32Array(16))
r.R()
r.aT(-50,0,0)
q=e.d
q.h(0,"uModelMatrix",r)
q.h(0,"uColor",new T.y(new Float32Array(3)))
d=D.hl("../gradient.jpg")
d.a2(new G.kJ(s,e),null)
r=$.eF()
C.a.l(r,d)
c=G.dp("perlin")
q=c.d
q.h(0,"uTransformationMatrix",new T.aa(new Float32Array(16)))
p=new T.aa(new Float32Array(16))
p.R()
p.aT(50,0,0)
q.h(0,"uModelMatrix",p)
b=G.cm("stars",s,$.eI(),$.eH())
p=$.ep()
x=P.a_(x,v)
x.h(0,"cDepthTest",!0)
x.h(0,"cDepthWrite",!1)
x.h(0,"cBlendEquation",p)
x.h(0,"cStencilFunc",$.cD())
a=y.createElement("canvas")
a.width=64
a.height=64
a0=H.f(C.y.cc(a,"2d"),"$iscc")
a1=(a0&&C.q).bB(a0,32,32,1,32,32,22);(a1&&C.m).ac(a1,0,"gray")
C.m.ac(a1,1,"black")
a0.fillStyle=a1
C.q.dE(a0,0,0,64,64)
a1=C.q.bB(a0,32,32,1,32,32,6);(a1&&C.m).ac(a1,0,"white")
C.m.ac(a1,1,"gray")
a0.globalAlpha=0.9
a0.fillStyle=a1
a0.arc(32,32,4,0,6.283185307179586,!1)
a0.fill()
x.h(0,"uTexture",G.dc(s,"Utils::Particles",a,null,3553))
x.h(0,"uPointSize",1000)
y=new T.aa(new Float32Array(16))
y.R()
x.h(0,"uModelMatrix",y)
a2=R.iy(b,2000,200)
z.a=0
P.h_(r,null,!1,v).a2(new G.kK(new G.kI(z,k,c,i,f,j,e,h,b,a2,new G.dn(x,"stars",!1,!0),u)),null)},
kJ:{"^":"m:29;a,b",
$1:function(a){this.b.d.h(0,"uTexture",G.dc(this.a,"../gradient.jpg",H.f(a,"$isaH"),null,3553))}},
kI:{"^":"m:30;a,b,c,d,e,f,r,x,y,z,Q,ch",
$1:function(a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
H.cA(a9)
if(typeof a9!=="number")return a9.aX()
z=this.a
z.a=a9+0
y=this.b
y.cx+=0.001
x=y.fx
w=x.a
if(w.u(0,0)||w.u(0,1)){w=y.cx
v=x.d
if(typeof v!=="number")return v.aR()
y.cx=w+v*0.01
v=y.cy
w=x.e
if(typeof w!=="number")return w.aR()
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
if(typeof v!=="number")return v.aR()
v=y.ch-v*y.dy
if(v>0)y.ch=v
v=C.u.dr(y.cy,-1.4707963267948965,1.4707963267948965)
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
p=new T.y(new Float32Array(3))
p.aU(0,1,0)
v=y.aK()
u=new Float32Array(3)
o=new T.y(u)
o.E(v)
o.aY(0,t)
o.W(0)
n=p.bE(o)
n.W(0)
m=o.bE(n)
m.W(0)
t=n.aC(v)
r=m.aC(v)
v=o.aC(v)
l=n.a
k=l[0]
j=m.a
i=j[0]
h=u[0]
g=l[1]
f=j[1]
e=u[1]
l=l[2]
j=j[2]
u=u[2]
q[15]=1
q[14]=-v
q[13]=-r
q[12]=-t
q[11]=0
q[10]=u
q[9]=j
q[8]=l
q[7]=0
q[6]=e
q[5]=f
q[4]=g
q[3]=0
q[2]=h
q[1]=i
q[0]=k
k=y.f
i=k.a
i[0]=q[2]
i[1]=q[6]
i[2]=q[10]
y=-y.db
d=Math.sqrt(k.gbM())
n=i[0]/d
m=i[1]/d
o=i[2]/d
c=Math.cos(y)
b=Math.sin(y)
a=1-c
a0=n*n*a+c
y=o*b
a1=n*m*a-y
i=m*b
a2=n*o*a+i
a3=m*n*a+y
a4=m*m*a+c
y=n*b
a5=m*o*a-y
a6=o*n*a-i
a7=o*m*a+y
a8=o*o*a+c
y=q[0]
i=q[4]
k=q[8]
h=q[1]
g=q[5]
f=q[9]
e=q[2]
l=q[6]
j=q[10]
u=q[3]
t=q[7]
r=q[11]
q[0]=y*a0+i*a3+k*a6
q[1]=h*a0+g*a3+f*a6
q[2]=e*a0+l*a3+j*a6
q[3]=u*a0+t*a3+r*a6
q[4]=y*a1+i*a4+k*a7
q[5]=h*a1+g*a4+f*a7
q[6]=e*a1+l*a4+j*a7
q[7]=u*a1+t*a4+r*a7
q[8]=y*a2+i*a5+k*a8
q[9]=h*a2+g*a5+f*a8
q[10]=e*a2+l*a5+j*a8
q[11]=u*a2+t*a5+r*a8
w.c.a0(0)
w.b.a0(0)
x.e=0
x.d=0
x.f=0
x.c.a0(0)
x.b.a0(0)
x=this.c
x.d.h(0,"uTime",a9/1000)
w=this.e
r=this.f
t=[G.bQ]
this.d.al(w,H.j([r,this.r],t))
this.x.al(w,H.j([r,x],t))
this.y.al(this.z,H.j([this.Q,r],t))
C.ah.gdh(window).a2(this,-1)
this.ch.cH(z.a)}},
kK:{"^":"m:31;a",
$1:function(a){H.bd(a)
this.a.$1(0)}}},1]]
setupProgram(dart,0,0)
J.B=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.df.prototype
return J.de.prototype}if(typeof a=="string")return J.bp.prototype
if(a==null)return J.dg.prototype
if(typeof a=="boolean")return J.hc.prototype
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.bZ(a)}
J.bb=function(a){if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.bZ(a)}
J.ef=function(a){if(a==null)return a
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.bZ(a)}
J.kr=function(a){if(typeof a=="number")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b3.prototype
return a}
J.ks=function(a){if(typeof a=="number")return J.bo.prototype
if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b3.prototype
return a}
J.eg=function(a){if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b3.prototype
return a}
J.l=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.bZ(a)}
J.bY=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.b3.prototype
return a}
J.aF=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.B(a).B(a,b)}
J.a8=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kr(a).P(a,b)}
J.bf=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kF(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bb(a).i(a,b)}
J.cG=function(a,b){return J.eg(a).aq(a,b)}
J.bB=function(a,b){return J.l(a).d3(a,b)}
J.eL=function(a,b,c,d){return J.l(a).d4(a,b,c,d)}
J.eM=function(a,b,c){return J.l(a).d5(a,b,c)}
J.cH=function(a,b){return J.l(a).bo(a,b)}
J.eN=function(a,b,c,d){return J.l(a).de(a,b,c,d)}
J.cI=function(a,b,c){return J.l(a).bq(a,b,c)}
J.eO=function(a,b){return J.l(a).dj(a,b)}
J.c3=function(a,b,c){return J.l(a).br(a,b,c)}
J.bg=function(a,b,c){return J.l(a).bt(a,b,c)}
J.bC=function(a,b){return J.l(a).dm(a,b)}
J.eP=function(a,b){return J.l(a).bu(a,b)}
J.eQ=function(a,b,c){return J.l(a).bv(a,b,c)}
J.cJ=function(a,b,c,d){return J.l(a).bw(a,b,c,d)}
J.eR=function(a,b,c,d,e){return J.l(a).bx(a,b,c,d,e)}
J.eS=function(a,b){return J.ks(a).J(a,b)}
J.c4=function(a,b,c){return J.bb(a).dt(a,b,c)}
J.c5=function(a){return J.l(a).bz(a)}
J.eT=function(a){return J.l(a).bA(a)}
J.eU=function(a){return J.l(a).bD(a)}
J.eV=function(a){return J.l(a).dz(a)}
J.eW=function(a,b){return J.l(a).bF(a,b)}
J.c6=function(a,b){return J.l(a).bG(a,b)}
J.eX=function(a,b,c,d){return J.l(a).bH(a,b,c,d)}
J.eY=function(a,b,c,d,e){return J.l(a).dB(a,b,c,d,e)}
J.eZ=function(a,b,c,d,e){return J.l(a).bI(a,b,c,d,e)}
J.f_=function(a,b,c,d,e,f){return J.l(a).dC(a,b,c,d,e,f)}
J.f0=function(a,b){return J.ef(a).q(a,b)}
J.bh=function(a,b){return J.l(a).bJ(a,b)}
J.f1=function(a,b){return J.l(a).bK(a,b)}
J.f2=function(a){return J.l(a).dD(a)}
J.f3=function(a,b){return J.l(a).C(a,b)}
J.f4=function(a){return J.l(a).gdi(a)}
J.ak=function(a){return J.B(a).gv(a)}
J.bD=function(a){return J.ef(a).gw(a)}
J.aS=function(a){return J.bb(a).gj(a)}
J.f5=function(a){return J.l(a).gdM(a)}
J.f6=function(a){return J.l(a).gdU(a)}
J.f7=function(a){return J.bY(a).gdZ(a)}
J.bE=function(a){return J.bY(a).gX(a)}
J.c7=function(a){return J.bY(a).gO(a)}
J.cK=function(a){return J.bY(a).gag(a)}
J.c8=function(a,b){return J.l(a).Y(a,b)}
J.f8=function(a){return J.l(a).ah(a)}
J.f9=function(a){return J.l(a).aJ(a)}
J.fa=function(a,b){return J.l(a).aL(a,b)}
J.fb=function(a,b,c){return J.l(a).aM(a,b,c)}
J.cL=function(a,b,c){return J.l(a).aQ(a,b,c)}
J.fc=function(a,b){return J.l(a).bN(a,b)}
J.fd=function(a,b,c){return J.l(a).bT(a,b,c)}
J.cM=function(a){return J.l(a).dO(a)}
J.fe=function(a,b,c,d){return J.l(a).aW(a,b,c,d)}
J.ff=function(a,b,c,d,e,f,g){return J.l(a).bW(a,b,c,d,e,f,g)}
J.cN=function(a,b,c,d){return J.l(a).bX(a,b,c,d)}
J.fg=function(a){return J.eg(a).dV(a)}
J.bi=function(a){return J.B(a).k(a)}
J.fh=function(a,b,c,d){return J.l(a).dX(a,b,c,d)}
J.fi=function(a,b,c){return J.l(a).bZ(a,b,c)}
J.fj=function(a,b,c){return J.l(a).c_(a,b,c)}
J.c9=function(a,b,c){return J.l(a).c0(a,b,c)}
J.fk=function(a,b,c){return J.l(a).c1(a,b,c)}
J.cO=function(a,b,c){return J.l(a).c2(a,b,c)}
J.cP=function(a,b,c){return J.l(a).c3(a,b,c)}
J.cQ=function(a,b,c){return J.l(a).c4(a,b,c)}
J.cR=function(a,b,c,d){return J.l(a).c5(a,b,c,d)}
J.cS=function(a,b,c,d){return J.l(a).c6(a,b,c,d)}
J.fl=function(a,b){return J.l(a).c7(a,b)}
J.fm=function(a,b,c){return J.l(a).dY(a,b,c)}
J.fn=function(a,b,c,d,e,f,g){return J.l(a).c8(a,b,c,d,e,f,g)}
J.fo=function(a,b,c,d,e){return J.l(a).ca(a,b,c,d,e)}
I.aC=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.bF.prototype
C.y=W.bj.prototype
C.m=W.fw.prototype
C.q=W.cc.prototype
C.z=W.fF.prototype
C.r=W.fM.prototype
C.L=W.fO.prototype
C.M=W.h4.prototype
C.t=W.h5.prototype
C.N=J.h.prototype
C.a=J.bn.prototype
C.A=J.de.prototype
C.e=J.df.prototype
C.O=J.dg.prototype
C.u=J.bo.prototype
C.h=J.bp.prototype
C.V=J.bq.prototype
C.i=H.hA.prototype
C.n=H.hC.prototype
C.a_=W.hD.prototype
C.D=J.hM.prototype
C.E=W.hW.prototype
C.J=W.ik.prototype
C.x=J.b3.prototype
C.ag=W.aK.prototype
C.ah=W.iB.prototype
C.K=new P.jf()
C.d=new P.jx()
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
C.W=H.j(I.aC(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.X=H.j(I.aC(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.Z=H.j(I.aC([]),[P.z])
C.Y=H.j(I.aC([]),[P.d])
C.v=H.j(I.aC(["bind","if","ref","repeat","syntax"]),[P.d])
C.w=H.j(I.aC(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
C.a0=new G.D("vec3","vertex btangents",0)
C.c=new G.D("vec3","",0)
C.a1=new G.D("vec4","delta from light",0)
C.o=new G.D("","",0)
C.F=new G.D("vec3","vertex coordinates",0)
C.a2=new G.D("vec3","vertex binormals",0)
C.G=new G.D("vec4","for wireframe",0)
C.a3=new G.D("vec4","per vertex color",0)
C.a4=new G.D("float","for normal maps",0)
C.j=new G.D("mat4","",0)
C.a6=new G.D("mat4","",4)
C.a5=new G.D("mat4","",128)
C.b=new G.D("float","",0)
C.a7=new G.D("float","",4)
C.a8=new G.D("float","depth for shadowmaps",0)
C.f=new G.D("sampler2D","",0)
C.a9=new G.D("float","for bump maps",0)
C.aa=new G.D("vec2","texture uvs",0)
C.ab=new G.D("float","time since program start in sec",0)
C.k=new G.D("vec2","",0)
C.ac=new G.D("samplerCube","",0)
C.l=new G.D("vec4","",0)
C.ad=new G.D("vec3","vertex normals",0)
C.ae=new G.D("sampler2DShadow","",0)
C.H=new G.D("vec3","per vertex color",0)
C.I=new G.D("mat3","",0)
C.af=new G.D("vec3","vertex tangents",0)
$.a9=0
$.aT=null
$.cW=null
$.cr=!1
$.ei=null
$.ea=null
$.en=null
$.bX=null
$.c0=null
$.cy=null
$.aN=null
$.b5=null
$.b6=null
$.cs=!1
$.C=C.d
$.ae=null
$.ce=null
$.d6=null
$.d5=null
$.d2=null
$.d1=null
$.d0=null
$.d_=null
$.ee=0
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
I.$lazy(y,x,w)}})(["l3","es",function(){return H.eh("_$dart_dartClosure")},"lG","cC",function(){return H.eh("_$dart_js")},"mr","et",function(){return H.ac(H.bP({
toString:function(){return"$receiver$"}}))},"ms","eu",function(){return H.ac(H.bP({$method$:null,
toString:function(){return"$receiver$"}}))},"mt","ev",function(){return H.ac(H.bP(null))},"mu","ew",function(){return H.ac(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"mx","ez",function(){return H.ac(H.bP(void 0))},"my","eA",function(){return H.ac(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"mw","ey",function(){return H.ac(H.dE(null))},"mv","ex",function(){return H.ac(function(){try{null.$method$}catch(z){return z.message}}())},"mA","eC",function(){return H.ac(H.dE(void 0))},"mz","eB",function(){return H.ac(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mL","cE",function(){return P.iF()},"n0","be",function(){return[]},"l0","er",function(){return{}},"mS","eE",function(){return P.cj(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"mT","cF",function(){return P.a_(P.d,P.bl)},"me","cD",function(){return new G.dD(1281,0,4294967295)},"kY","eq",function(){return G.dC(1281,1281,1281)},"kX","ep",function(){return G.dC(32774,770,769)},"mZ","a7",function(){return P.dj(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.H,"aColorAlpha",C.a3,"aPosition",C.F,"aTexUV",C.aa,"aNormal",C.ad,"aBinormal",C.a2,"aCenter",C.G,"aPointSize",C.b,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.af,"aBitangent",C.a0,"iaRotation",C.l,"iaTranslation",C.c,"iaScale",C.b,"iaColor",C.c,"vColor",C.H,"vTexUV",C.k,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.F,"vPositionFromLight",C.a1,"vCenter",C.G,"vDepth",C.a8,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.I,"uConvolutionMatrix",C.I,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ae,"uTexture",C.f,"uTexture2",C.f,"uTexture3",C.f,"uTexture4",C.f,"uSpecularMap",C.f,"uNormalMap",C.f,"uBumpMap",C.f,"uDepthMap",C.f,"uCubeTexture",C.ac,"uAnimationTable",C.f,"uTime",C.ab,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.c,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a5,"uLightDescs",C.a6,"uLightCount",C.b,"uLightTypes",C.a7,"uBumpScale",C.a9,"uNormalScale",C.a4],P.d,G.D)},"mF","eD",function(){return C.K},"n5","eG",function(){var z,y
z=G.br("PerlinNoiseV")
y=[P.d]
z.ak(H.j(["aPosition"],y))
z.a6(H.j(["vNormal"],y))
z.S(H.j(["uPerspectiveViewMatrix","uModelMatrix","uTime"],y))
z.b2(H.j(["vec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n","void main() {\n    vec3 normal = normalize( aPosition);\n    float f = 0.5 * pnoise( normal + uTime/3.0, vec3( 10.0 ) );\n    //vNormal = aPosition + f * normal;\n    //vNormal = f*normal;\n    vNormal = normal;\n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);\n}\n"],y))
return z},"n9","eK",function(){var z,y
z=G.br("Textured")
y=[P.d]
z.ak(H.j(["aPosition","aTexUV"],y))
z.S(H.j(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.a6(H.j(["vTexUV"],y))
z.b2(H.j(["void main() {\n  gl_Position = uPerspectiveViewMatrix * \n                uModelMatrix * \n                vec4(aPosition, 1.0);\n  vTexUV = aTexUV;\n}\n"],y))
return z},"n8","eJ",function(){var z,y
z=G.br("TexturedF")
y=[P.d]
z.a6(H.j(["vTexUV"],y))
z.S(H.j(["uColor","uTexture"],y))
z.am(H.j(["oFragColor = texture(uTexture, vTexUV) + vec4( uColor, 0.0 );"],y))
return z},"n7","eI",function(){var z,y
z=G.br("PointSpritesV")
y=[P.d]
z.ak(H.j(["aPosition"],y))
z.S(H.j(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"],y))
z.am(H.j(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"],y))
return z},"n6","eH",function(){var z,y
z=G.br("PointSpritesF")
y=[P.d]
z.S(H.j(["uTexture"],y))
z.am(H.j(["oFragColor = texture( uTexture,  gl_PointCoord);"],y))
return z},"n3","eF",function(){return H.j([],[[P.X,P.b]])}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.z},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:P.z,args:[W.U]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.z,args:[,]},{func:1,ret:P.z,args:[,,]},{func:1,ret:P.d,args:[P.E]},{func:1,ret:P.R,args:[W.ab]},{func:1,ret:P.R,args:[P.d]},{func:1,ret:-1,args:[W.O]},{func:1,ret:P.z,args:[W.aX]},{func:1,ret:P.R,args:[W.S,P.d,P.d,W.bv]},{func:1,args:[,P.d]},{func:1,args:[P.d]},{func:1,ret:P.z,args:[{func:1,ret:-1}]},{func:1,ret:P.z,args:[,P.Q]},{func:1,ret:P.z,args:[,],opt:[P.Q]},{func:1,ret:[P.P,,],args:[,]},{func:1,ret:P.R,args:[W.r]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.z,args:[P.F]},{func:1,args:[W.O]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.r,W.r]},{func:1,ret:-1,args:[P.a2,T.y]},{func:1,ret:P.z,args:[W.aK]},{func:1,ret:P.E,args:[P.E,P.b]},{func:1,ret:P.z,args:[W.aH]},{func:1,ret:-1,args:[P.F]},{func:1,ret:P.z,args:[[P.a,,]]},{func:1,ret:P.E,args:[,,]}]
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
if(x==y)H.kQ(d||a)
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
Isolate.aC=a.aC
Isolate.b9=a.b9
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
if(typeof dartMainRunner==="function")dartMainRunner(G.ek,[])
else G.ek([])})})()
//# sourceMappingURL=perlin.dart.js.map
