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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isi)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.be=function(){}
var dart=[["","",,H,{"^":"",lG:{"^":"b;a"}}],["","",,J,{"^":"",
cB:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c2:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cA==null){H.kv()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.dF("Return interceptor for "+H.f(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cE()]
if(v!=null)return v
v=H.kA(a)
if(v!=null)return v
if(typeof a=="function")return C.R
y=Object.getPrototypeOf(a)
if(y==null)return C.A
if(y===Object.prototype)return C.A
if(typeof w=="function"){Object.defineProperty(w,$.cE(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
i:{"^":"b;",
F:function(a,b){return a===b},
gB:function(a){return H.b3(a)},
l:["ck",function(a){return"Instance of '"+H.b4(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h9:{"^":"i;",
l:function(a){return String(a)},
gB:function(a){return a?519018:218159},
$isT:1},
ha:{"^":"i;",
F:function(a,b){return null==b},
l:function(a){return"null"},
gB:function(a){return 0},
$isH:1},
ck:{"^":"i;",
gB:function(a){return 0},
l:["cm",function(a){return String(a)}]},
hK:{"^":"ck;"},
b6:{"^":"ck;"},
bs:{"^":"ck;",
l:function(a){var z=a[$.eu()]
if(z==null)return this.cm(a)
return"JavaScript function for "+H.f(J.bl(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbn:1},
bp:{"^":"i;$ti",
j:function(a,b){H.A(b,H.q(a,0))
if(!!a.fixed$length)H.a_(P.z("add"))
a.push(b)},
I:function(a,b){var z,y
H.x(b,"$isl",[H.q(a,0)],"$asl")
if(!!a.fixed$length)H.a_(P.z("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.G)(b),++y)a.push(b[y])},
a8:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.f(a[y]))
return z.join(b)},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
gdB:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.c(H.dc())},
bo:function(a,b){var z,y
H.m(b,{func:1,ret:P.T,args:[H.q(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.aH(a))}return!1},
ce:function(a,b){if(!!a.immutable$list)H.a_(P.z("sort"))
H.i8(a,J.k6(),H.q(a,0))},
aW:function(a){return this.ce(a,null)},
A:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aF(a[z],b))return!0
return!1},
l:function(a){return P.ci(a,"[","]")},
gD:function(a){return new J.fq(a,a.length,0,[H.q(a,0)])},
gB:function(a){return H.b3(a)},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bd(a,b))
return a[b]},
i:function(a,b,c){H.A(c,H.q(a,0))
if(!!a.immutable$list)H.a_(P.z("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bd(a,b))
a[b]=c},
$isw:1,
$asw:I.be,
$isl:1,
$isa:1,
p:{
h8:function(a,b){return J.cj(H.k(a,[b]))},
cj:function(a){H.bB(a)
a.fixed$length=Array
return a},
lE:[function(a,b){return J.eV(H.ej(a,"$isY"),H.ej(b,"$isY"))},"$2","k6",8,0,29]}},
lF:{"^":"bp;$ti"},
fq:{"^":"b;a,b,c,0d,$ti",
sb4:function(a){this.d=H.A(a,H.q(this,0))},
gE:function(a){return this.d},
u:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.G(z))
x=this.c
if(x>=y){this.sb4(null)
return!1}this.sb4(z[x]);++this.c
return!0},
$isaX:1},
bq:{"^":"i;",
N:function(a,b){var z
H.cC(b)
if(typeof b!=="number")throw H.c(H.bb(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gai(b)
if(this.gai(a)===z)return 0
if(this.gai(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gai:function(a){return a===0?1/a<0:a<0},
bV:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.z(""+a+".toInt()"))},
dh:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.c(P.z(""+a+".ceil()"))},
di:function(a,b,c){if(this.N(b,c)>0)throw H.c(H.bb(b))
if(this.N(a,b)<0)return b
if(this.N(a,c)>0)return c
return a},
dL:function(a,b){var z
if(b>20)throw H.c(P.bR(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gai(a))return"-"+z
return z},
l:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gB:function(a){return a&0x1FFFFFFF},
aZ:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bl(a,b)},
U:function(a,b){return(a|0)===a?a/b|0:this.bl(a,b)},
bl:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.z("Result of truncating division is "+H.f(z)+": "+H.f(a)+" ~/ "+b))},
bj:function(a,b){var z
if(a>0)z=this.d4(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
d4:function(a,b){return b>31?0:a>>>b},
X:function(a,b){if(typeof b!=="number")throw H.c(H.bb(b))
return a>b},
$isY:1,
$asY:function(){return[P.E]},
$isa3:1,
$isE:1},
de:{"^":"bq;",$isD:1},
dd:{"^":"bq;"},
br:{"^":"i;",
au:function(a,b){if(b>=a.length)throw H.c(H.bd(a,b))
return a.charCodeAt(b)},
L:function(a,b){H.v(b)
if(typeof b!=="string")throw H.c(P.cV(b,null,null))
return a+b},
cg:function(a,b,c){var z
if(c>a.length)throw H.c(P.bR(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cf:function(a,b){return this.cg(a,b,0)},
cj:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bS(b,null,null))
if(b>c)throw H.c(P.bS(b,null,null))
if(c>a.length)throw H.c(P.bS(c,null,null))
return a.substring(b,c)},
ci:function(a,b){return this.cj(a,b,null)},
dK:function(a){return a.toLowerCase()},
dj:function(a,b,c){if(c>a.length)throw H.c(P.bR(c,0,a.length,null,null))
return H.kI(a,b,c)},
N:function(a,b){var z
H.v(b)
if(typeof b!=="string")throw H.c(H.bb(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.c(H.bd(a,b))
return a[b]},
$isw:1,
$asw:I.be,
$isY:1,
$asY:function(){return[P.d]},
$ishI:1,
$isd:1}}],["","",,H,{"^":"",
dc:function(){return new P.cp("No element")},
h7:function(){return new P.cp("Too many elements")},
i8:function(a,b,c){H.x(a,"$isa",[c],"$asa")
H.m(b,{func:1,ret:P.D,args:[c,c]})
H.bu(a,0,J.aS(a)-1,b,c)},
bu:function(a,b,c,d,e){H.x(a,"$isa",[e],"$asa")
H.m(d,{func:1,ret:P.D,args:[e,e]})
if(c-b<=32)H.i7(a,b,c,d,e)
else H.i6(a,b,c,d,e)},
i7:function(a,b,c,d,e){var z,y,x,w,v
H.x(a,"$isa",[e],"$asa")
H.m(d,{func:1,ret:P.D,args:[e,e]})
for(z=b+1,y=J.bf(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.ab(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
i6:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.x(a,"$isa",[a2],"$asa")
H.m(a1,{func:1,ret:P.D,args:[a2,a2]})
z=C.c.U(a0-b+1,6)
y=b+z
x=a0-z
w=C.c.U(b+a0,2)
v=w-z
u=w+z
t=J.bf(a)
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
if(J.aF(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
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
H.bu(a,b,m-2,a1,a2)
H.bu(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aF(a1.$2(t.h(a,m),r),0);)++m
for(;J.aF(a1.$2(t.h(a,l),p),0);)--l
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
break}}H.bu(a,m,l,a1,a2)}else H.bu(a,m,l,a1,a2)},
d5:{"^":"l;"},
bQ:{"^":"d5;$ti",
gD:function(a){return new H.di(this,this.gk(this),0,[H.cz(this,"bQ",0)])},
aK:function(a,b){return this.cl(0,H.m(b,{func:1,ret:P.T,args:[H.cz(this,"bQ",0)]}))}},
di:{"^":"b;a,b,c,0d,$ti",
sb5:function(a){this.d=H.A(a,H.q(this,0))},
gE:function(a){return this.d},
u:function(){var z,y,x,w
z=this.a
y=J.bf(z)
x=y.gk(z)
if(this.b!==x)throw H.c(P.aH(z))
w=this.c
if(w>=x){this.sb5(null)
return!1}this.sb5(y.t(z,w));++this.c
return!0},
$isaX:1},
hl:{"^":"bQ;a,b,$ti",
gk:function(a){return J.aS(this.a)},
t:function(a,b){return this.b.$1(J.f2(this.a,b))},
$asbQ:function(a,b){return[b]},
$asl:function(a,b){return[b]}},
dG:{"^":"l;a,b,$ti",
gD:function(a){return new H.ix(J.bH(this.a),this.b,this.$ti)}},
ix:{"^":"aX;a,b,$ti",
u:function(){var z,y
for(z=this.a,y=this.b;z.u();)if(y.$1(z.gE(z)))return!0
return!1},
gE:function(a){var z=this.a
return z.gE(z)}},
bN:{"^":"b;$ti"}}],["","",,H,{"^":"",
aE:function(a){var z,y
z=H.v(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kn:function(a){return init.types[H.Q(a)]},
ky:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.B(a).$isy},
f:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bl(a)
if(typeof z!=="string")throw H.c(H.bb(a))
return z},
b3:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b4:function(a){return H.hL(a)+H.bX(H.aj(a),0,null)},
hL:function(a){var z,y,x,w,v,u,t,s,r
z=J.B(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.K||!!z.$isb6){u=C.z(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aE(w.length>1&&C.i.au(w,0)===36?C.i.ci(w,1):w)},
aJ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hS:function(a){var z=H.aJ(a).getFullYear()+0
return z},
hQ:function(a){var z=H.aJ(a).getMonth()+1
return z},
hM:function(a){var z=H.aJ(a).getDate()+0
return z},
hN:function(a){var z=H.aJ(a).getHours()+0
return z},
hP:function(a){var z=H.aJ(a).getMinutes()+0
return z},
hR:function(a){var z=H.aJ(a).getSeconds()+0
return z},
hO:function(a){var z=H.aJ(a).getMilliseconds()+0
return z},
bi:function(a){throw H.c(H.bb(a))},
j:function(a,b){if(a==null)J.aS(a)
throw H.c(H.bd(a,b))},
bd:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aG(!0,b,"index",null)
z=H.Q(J.aS(a))
if(!(b<0)){if(typeof z!=="number")return H.bi(z)
y=b>=z}else y=!0
if(y)return P.F(b,a,"index",null,z)
return P.bS(b,"index",null)},
bb:function(a){return new P.aG(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.dp()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.em})
z.name=""}else z.toString=H.em
return z},
em:function(){return J.bl(this.dartException)},
a_:function(a){throw H.c(a)},
G:function(a){throw H.c(P.aH(a))},
a9:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kK(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.bj(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cl(H.f(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dn(H.f(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.ey()
u=$.ez()
t=$.eA()
s=$.eB()
r=$.eE()
q=$.eF()
p=$.eD()
$.eC()
o=$.eH()
n=$.eG()
m=v.M(y)
if(m!=null)return z.$1(H.cl(H.v(y),m))
else{m=u.M(y)
if(m!=null){m.method="call"
return z.$1(H.cl(H.v(y),m))}else{m=t.M(y)
if(m==null){m=s.M(y)
if(m==null){m=r.M(y)
if(m==null){m=q.M(y)
if(m==null){m=p.M(y)
if(m==null){m=s.M(y)
if(m==null){m=o.M(y)
if(m==null){m=n.M(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dn(H.v(y),m))}}return z.$1(new H.iu(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dw()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aG(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dw()
return a},
bh:function(a){var z
if(a==null)return new H.dW(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dW(a)},
kj:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
kx:function(a,b,c,d,e,f){H.h(a,"$isbn")
switch(H.Q(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.d9("Unsupported number of arguments for wrapped closure"))},
bc:function(a,b){var z
H.Q(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kx)
a.$identity=z
return z},
fA:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.B(d).$isa){z.$reflectionInfo=d
x=H.hW(z).r}else x=d
w=e?Object.create(new H.i9().constructor.prototype):Object.create(new H.cd(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ac
if(typeof u!=="number")return u.L()
$.ac=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.d_(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kn,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cY:H.ce
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.c("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.d_(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
fx:function(a,b,c,d){var z=H.ce
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
d_:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fz(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fx(y,!w,z,b)
if(y===0){w=$.ac
if(typeof w!=="number")return w.L()
$.ac=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aT
if(v==null){v=H.bK("self")
$.aT=v}return new Function(w+H.f(v)+";return "+u+"."+H.f(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ac
if(typeof w!=="number")return w.L()
$.ac=w+1
t+=w
w="return function("+t+"){return this."
v=$.aT
if(v==null){v=H.bK("self")
$.aT=v}return new Function(w+H.f(v)+"."+H.f(z)+"("+t+");}")()},
fy:function(a,b,c,d){var z,y
z=H.ce
y=H.cY
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
fz:function(a,b){var z,y,x,w,v,u,t,s
z=$.aT
if(z==null){z=H.bK("self")
$.aT=z}y=$.cX
if(y==null){y=H.bK("receiver")
$.cX=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fy(w,!u,x,b)
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
cx:function(a,b,c,d,e,f,g){return H.fA(a,b,H.Q(c),d,!!e,!!f,g)},
v:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a7(a,"String"))},
ea:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a7(a,"double"))},
cC:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a7(a,"num"))},
c_:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a7(a,"bool"))},
Q:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a7(a,"int"))},
cD:function(a,b){throw H.c(H.a7(a,H.aE(H.v(b).substring(3))))},
kF:function(a,b){throw H.c(H.cZ(a,H.aE(H.v(b).substring(3))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.B(a)[b])return a
H.cD(a,b)},
ak:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.B(a)[b]
else z=!0
if(z)return a
H.kF(a,b)},
ej:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.B(a)[b])return a
H.cD(a,b)},
bB:function(a){if(a==null)return a
if(!!J.B(a).$isa)return a
throw H.c(H.a7(a,"List<dynamic>"))},
kz:function(a,b){var z
if(a==null)return a
z=J.B(a)
if(!!z.$isa)return a
if(z[b])return a
H.cD(a,b)},
cy:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.Q(z)]
else return a.$S()}return},
by:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cy(J.B(a))
if(z==null)return!1
return H.e1(z,null,b,null)},
m:function(a,b){var z,y
if(a==null)return a
if($.ct)return a
$.ct=!0
try{if(H.by(a,b))return a
z=H.bC(b)
y=H.a7(a,z)
throw H.c(y)}finally{$.ct=!1}},
c1:function(a,b){if(a!=null&&!H.cw(a,b))H.a_(H.a7(a,H.bC(b)))
return a},
e5:function(a){var z,y
z=J.B(a)
if(!!z.$iso){y=H.cy(z)
if(y!=null)return H.bC(y)
return"Closure"}return H.b4(a)},
kJ:function(a){throw H.c(new P.fH(H.v(a)))},
ef:function(a){return init.getIsolateTag(a)},
k:function(a,b){a.$ti=b
return a},
aj:function(a){if(a==null)return
return a.$ti},
n3:function(a,b,c){return H.aR(a["$as"+H.f(c)],H.aj(b))},
bg:function(a,b,c,d){var z
H.v(c)
H.Q(d)
z=H.aR(a["$as"+H.f(c)],H.aj(b))
return z==null?null:z[d]},
cz:function(a,b,c){var z
H.v(b)
H.Q(c)
z=H.aR(a["$as"+H.f(b)],H.aj(a))
return z==null?null:z[c]},
q:function(a,b){var z
H.Q(b)
z=H.aj(a)
return z==null?null:z[b]},
bC:function(a){return H.aC(a,null)},
aC:function(a,b){var z,y
H.x(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aE(a[0].builtin$cls)+H.bX(a,1,b)
if(typeof a=="function")return H.aE(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Q(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.j(b,y)
return H.f(b[y])}if('func' in a)return H.k5(a,b)
if('futureOr' in a)return"FutureOr<"+H.aC("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
k5:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
H.x(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.k([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.j(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.j(b,r)
t=C.i.L(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.aC(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aC(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aC(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aC(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.ki(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.v(z[l])
n=n+m+H.aC(i[h],b)+(" "+H.f(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bX:function(a,b,c){var z,y,x,w,v,u
H.x(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.cr("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aC(u,c)}return"<"+z.l(0)+">"},
km:function(a){var z,y,x,w
z=J.B(a)
if(!!z.$iso){y=H.cy(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.aj(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aR:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aP:function(a,b,c,d){var z,y
H.v(b)
H.bB(c)
H.v(d)
if(a==null)return!1
z=H.aj(a)
y=J.B(a)
if(y[b]==null)return!1
return H.e8(H.aR(y[d],z),null,c,null)},
bD:function(a,b,c,d){H.v(b)
H.bB(c)
H.v(d)
if(a==null)return a
if(H.aP(a,b,c,d))return a
throw H.c(H.cZ(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aE(b.substring(3))+H.bX(c,0,null),init.mangledGlobalNames)))},
x:function(a,b,c,d){H.v(b)
H.bB(c)
H.v(d)
if(a==null)return a
if(H.aP(a,b,c,d))return a
throw H.c(H.a7(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aE(b.substring(3))+H.bX(c,0,null),init.mangledGlobalNames)))},
e8:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a1(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a1(a[y],b,c[y],d))return!1
return!0},
n1:function(a,b,c){return a.apply(b,H.aR(J.B(b)["$as"+H.f(c)],H.aj(b)))},
eh:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="H"||a===-1||a===-2||H.eh(z)}return!1},
cw:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="H"||b===-1||b===-2||H.eh(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cw(a,"type" in b?b.type:null))return!0
if('func' in b)return H.by(a,b)}z=J.B(a).constructor
y=H.aj(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a1(z,null,b,null)},
A:function(a,b){if(a!=null&&!H.cw(a,b))throw H.c(H.a7(a,H.bC(b)))
return a},
a1:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a1(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="H")return!0
if('func' in c)return H.e1(a,b,c,d)
if('func' in a)return c.builtin$cls==="bn"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a1("type" in a?a.type:null,b,x,d)
else if(H.a1(a,b,x,d))return!0
else{if(!('$is'+"aW" in y.prototype))return!1
w=y.prototype["$as"+"aW"]
v=H.aR(w,z?a.slice(1):null)
return H.a1(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.e8(H.aR(r,z),b,u,d)},
e1:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.kE(m,b,l,d)},
kE:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a1(c[w],d,a[w],b))return!1}return!0},
n2:function(a,b,c){Object.defineProperty(a,H.v(b),{value:c,enumerable:false,writable:true,configurable:true})},
kA:function(a){var z,y,x,w,v,u
z=H.v($.eg.$1(a))
y=$.c0[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c3[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.v($.e7.$2(a,z))
if(z!=null){y=$.c0[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c3[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c4(x)
$.c0[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c3[z]=x
return x}if(v==="-"){u=H.c4(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.ek(a,x)
if(v==="*")throw H.c(P.dF(z))
if(init.leafTags[z]===true){u=H.c4(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ek(a,x)},
ek:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cB(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c4:function(a){return J.cB(a,!1,null,!!a.$isy)},
kD:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c4(z)
else return J.cB(z,c,null,null)},
kv:function(){if(!0===$.cA)return
$.cA=!0
H.kw()},
kw:function(){var z,y,x,w,v,u,t,s
$.c0=Object.create(null)
$.c3=Object.create(null)
H.kr()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.el.$1(v)
if(u!=null){t=H.kD(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kr:function(){var z,y,x,w,v,u,t
z=C.O()
z=H.aO(C.L,H.aO(C.Q,H.aO(C.y,H.aO(C.y,H.aO(C.P,H.aO(C.M,H.aO(C.N(C.z),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eg=new H.ks(v)
$.e7=new H.kt(u)
$.el=new H.ku(t)},
aO:function(a,b){return a(b)||b},
kI:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hV:{"^":"b;a,b,c,d,e,f,r,0x",p:{
hW:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cj(z)
y=z[0]
x=z[1]
return new H.hV(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ip:{"^":"b;a,b,c,d,e,f",
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
ae:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.k([],[P.d])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ip(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bT:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dC:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hE:{"^":"R;a,b",
l:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dn:function(a,b){return new H.hE(a,b==null?null:b.method)}}},
hb:{"^":"R;a,b,c",
l:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.f(this.a)+")"},
p:{
cl:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hb(a,y,z?null:b.receiver)}}},
iu:{"^":"R;a",
l:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kK:{"^":"o:5;a",
$1:function(a){if(!!J.B(a).$isR)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dW:{"^":"b;a,0b",
l:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa6:1},
o:{"^":"b;",
l:function(a){return"Closure '"+H.b4(this).trim()+"'"},
gc8:function(){return this},
$isbn:1,
gc8:function(){return this}},
dy:{"^":"o;"},
i9:{"^":"dy;",
l:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aE(z)+"'"}},
cd:{"^":"dy;a,b,c,d",
F:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cd))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gB:function(a){var z,y
z=this.c
if(z==null)y=H.b3(this.a)
else y=typeof z!=="object"?J.al(z):H.b3(z)
return(y^H.b3(this.b))>>>0},
l:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.b4(z)+"'")},
p:{
ce:function(a){return a.a},
cY:function(a){return a.c},
bK:function(a){var z,y,x,w,v
z=new H.cd("self","target","receiver","name")
y=J.cj(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iq:{"^":"R;a",
l:function(a){return this.a},
p:{
a7:function(a,b){return new H.iq("TypeError: "+P.bM(a)+": type '"+H.e5(a)+"' is not a subtype of type '"+b+"'")}}},
fv:{"^":"R;a",
l:function(a){return this.a},
p:{
cZ:function(a,b){return new H.fv("CastError: "+P.bM(a)+": type '"+H.e5(a)+"' is not a subtype of type '"+b+"'")}}},
i0:{"^":"R;a",
l:function(a){return"RuntimeError: "+H.f(this.a)},
p:{
i1:function(a){return new H.i0(a)}}},
dD:{"^":"b;a,0b,0c,0d",
gae:function(){var z=this.b
if(z==null){z=H.bC(this.a)
this.b=z}return z},
l:function(a){return this.gae()},
gB:function(a){var z=this.d
if(z==null){z=C.i.gB(this.gae())
this.d=z}return z},
F:function(a,b){if(b==null)return!1
return b instanceof H.dD&&this.gae()===b.gae()}},
df:{"^":"dj;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gJ:function(a){return new H.ap(this,[H.q(this,0)])},
ah:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cP(z,b)}else{y=this.dz(b)
return y}},
dz:function(a){var z=this.d
if(z==null)return!1
return this.aH(this.aA(z,J.al(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ac(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ac(w,b)
x=y==null?null:y.b
return x}else return this.dA(b)},
dA:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aA(z,J.al(a)&0x3ffffff)
x=this.aH(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.A(b,H.q(this,0))
H.A(c,H.q(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aC()
this.b=z}this.b6(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aC()
this.c=y}this.b6(y,b,c)}else{x=this.d
if(x==null){x=this.aC()
this.d=x}w=J.al(b)&0x3ffffff
v=this.aA(x,w)
if(v==null)this.aF(x,w,[this.as(b,c)])
else{u=this.aH(v,b)
if(u>=0)v[u].b=c
else v.push(this.as(b,c))}}},
H:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aH(this))
z=z.c}},
b6:function(a,b,c){var z
H.A(b,H.q(this,0))
H.A(c,H.q(this,1))
z=this.ac(a,b)
if(z==null)this.aF(a,b,this.as(b,c))
else z.b=c},
b8:function(){this.r=this.r+1&67108863},
as:function(a,b){var z,y
z=new H.hg(H.A(a,H.q(this,0)),H.A(b,H.q(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b8()
return z},
aH:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aF(a[y].a,b))return y
return-1},
l:function(a){return P.dk(this)},
ac:function(a,b){return a[b]},
aA:function(a,b){return a[b]},
aF:function(a,b,c){a[b]=c},
cQ:function(a,b){delete a[b]},
cP:function(a,b){return this.ac(a,b)!=null},
aC:function(){var z=Object.create(null)
this.aF(z,"<non-identifier-key>",z)
this.cQ(z,"<non-identifier-key>")
return z},
$isdg:1},
hg:{"^":"b;a,b,0c,0d"},
ap:{"^":"d5;a,$ti",
gk:function(a){return this.a.a},
gD:function(a){var z,y
z=this.a
y=new H.hh(z,z.r,this.$ti)
y.c=z.e
return y}},
hh:{"^":"b;a,b,0c,0d,$ti",
sb7:function(a){this.d=H.A(a,H.q(this,0))},
gE:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aH(z))
else{z=this.c
if(z==null){this.sb7(null)
return!1}else{this.sb7(z.a)
this.c=this.c.c
return!0}}},
$isaX:1},
ks:{"^":"o:5;a",
$1:function(a){return this.a(a)}},
kt:{"^":"o:13;a",
$2:function(a,b){return this.a(a,b)}},
ku:{"^":"o:14;a",
$1:function(a){return this.a(H.v(a))}}}],["","",,H,{"^":"",
ki:function(a){return J.h8(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
c5:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bW:function(a){var z,y
if(!!J.B(a).$isw)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.i(z,y,a[y])
return z},
ag:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bd(b,a))},
hy:{"^":"i;",$isir:1,"%":"DataView;ArrayBufferView;cn|dQ|dR|dl|dS|dT|as"},
cn:{"^":"hy;",
gk:function(a){return a.length},
$isw:1,
$asw:I.be,
$isy:1,
$asy:I.be},
dl:{"^":"dR;",
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
i:function(a,b,c){H.ea(c)
H.ag(b,a,a.length)
a[b]=c},
$asbN:function(){return[P.a3]},
$asp:function(){return[P.a3]},
$isl:1,
$asl:function(){return[P.a3]},
$isa:1,
$asa:function(){return[P.a3]},
"%":"Float64Array"},
as:{"^":"dT;",
i:function(a,b,c){H.Q(c)
H.ag(b,a,a.length)
a[b]=c},
$asbN:function(){return[P.D]},
$asp:function(){return[P.D]},
$isl:1,
$asl:function(){return[P.D]},
$isa:1,
$asa:function(){return[P.D]}},
hx:{"^":"dl;",$isai:1,"%":"Float32Array"},
lO:{"^":"as;",
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lP:{"^":"as;",
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
$ish5:1,
"%":"Int32Array"},
lQ:{"^":"as;",
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lR:{"^":"as;",
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hz:{"^":"as;",
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
$ismB:1,
"%":"Uint32Array"},
lS:{"^":"as;",
gk:function(a){return a.length},
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lT:{"^":"as;",
gk:function(a){return a.length},
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dQ:{"^":"cn+p;"},
dR:{"^":"dQ+bN;"},
dS:{"^":"cn+p;"},
dT:{"^":"dS+bN;"}}],["","",,P,{"^":"",
iB:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kd()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bc(new P.iD(z),1)).observe(y,{childList:true})
return new P.iC(z,y,x)}else if(self.setImmediate!=null)return P.ke()
return P.kf()},
mL:[function(a){self.scheduleImmediate(H.bc(new P.iE(H.m(a,{func:1,ret:-1})),0))},"$1","kd",4,0,4],
mM:[function(a){self.setImmediate(H.bc(new P.iF(H.m(a,{func:1,ret:-1})),0))},"$1","ke",4,0,4],
mN:[function(a){H.m(a,{func:1,ret:-1})
P.jO(0,a)},"$1","kf",4,0,4],
k9:function(a,b){if(H.by(a,{func:1,args:[P.b,P.a6]}))return H.m(a,{func:1,ret:null,args:[P.b,P.a6]})
if(H.by(a,{func:1,args:[P.b]}))return H.m(a,{func:1,ret:null,args:[P.b]})
throw H.c(P.cV(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
k8:function(){var z,y
for(;z=$.aN,z!=null;){$.ba=null
y=z.b
$.aN=y
if(y==null)$.b9=null
z.a.$0()}},
n_:[function(){$.cu=!0
try{P.k8()}finally{$.ba=null
$.cu=!1
if($.aN!=null)$.cF().$1(P.e9())}},"$0","e9",0,0,1],
e4:function(a){var z=new P.dI(H.m(a,{func:1,ret:-1}))
if($.aN==null){$.b9=z
$.aN=z
if(!$.cu)$.cF().$1(P.e9())}else{$.b9.b=z
$.b9=z}},
kc:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
z=$.aN
if(z==null){P.e4(a)
$.ba=$.b9
return}y=new P.dI(a)
x=$.ba
if(x==null){y.b=z
$.ba=y
$.aN=y}else{y.b=x.b
x.b=y
$.ba=y
if(y.b==null)$.b9=y}},
kG:function(a){var z,y
z={func:1,ret:-1}
H.m(a,z)
y=$.K
if(C.e===y){P.bZ(null,null,C.e,a)
return}y.toString
P.bZ(null,null,y,H.m(y.br(a),z))},
bY:function(a,b,c,d,e){var z={}
z.a=d
P.kc(new P.ka(z,e))},
e2:function(a,b,c,d,e){var z,y
H.m(d,{func:1,ret:e})
y=$.K
if(y===c)return d.$0()
$.K=c
z=y
try{y=d.$0()
return y}finally{$.K=z}},
e3:function(a,b,c,d,e,f,g){var z,y
H.m(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.K
if(y===c)return d.$1(e)
$.K=c
z=y
try{y=d.$1(e)
return y}finally{$.K=z}},
kb:function(a,b,c,d,e,f,g,h,i){var z,y
H.m(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.K
if(y===c)return d.$2(e,f)
$.K=c
z=y
try{y=d.$2(e,f)
return y}finally{$.K=z}},
bZ:function(a,b,c,d){var z
H.m(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.br(d):c.de(d,-1)
P.e4(d)},
iD:{"^":"o:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iC:{"^":"o:15;a,b,c",
$1:function(a){var z,y
this.a.a=H.m(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iE:{"^":"o:0;a",
$0:function(){this.a.$0()}},
iF:{"^":"o:0;a",
$0:function(){this.a.$0()}},
jN:{"^":"b;a,0b,c",
cL:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bc(new P.jP(this,b),0),a)
else throw H.c(P.z("`setTimeout()` not found."))},
p:{
jO:function(a,b){var z=new P.jN(!0,0)
z.cL(a,b)
return z}}},
jP:{"^":"o:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
iI:{"^":"b;$ti"},
jI:{"^":"iI;a,$ti"},
aM:{"^":"b;0a,b,c,d,e,$ti",
dC:function(a){if(this.c!==6)return!0
return this.b.b.aJ(H.m(this.d,{func:1,ret:P.T,args:[P.b]}),a.a,P.T,P.b)},
dw:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.q(this,1)}
w=this.b.b
if(H.by(z,{func:1,args:[P.b,P.a6]}))return H.c1(w.dG(z,a.a,a.b,null,y,P.a6),x)
else return H.c1(w.aJ(H.m(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
af:{"^":"b;bk:a<,b,0d1:c<,$ti",
bU:function(a,b,c){var z,y,x,w
z=H.q(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.K
if(y!==C.e){y.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.k9(b,y)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.af(0,$.K,[c])
w=b==null?1:3
this.ba(new P.aM(x,w,a,b,[z,c]))
return x},
bT:function(a,b){return this.bU(a,null,b)},
ba:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isaM")
this.c=a}else{if(z===2){y=H.h(this.c,"$isaf")
z=y.a
if(z<4){y.ba(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bZ(null,null,z,H.m(new P.iX(this,a),{func:1,ret:-1}))}},
bh:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isaM")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isaf")
y=u.a
if(y<4){u.bh(a)
return}this.a=y
this.c=u.c}z.a=this.ad(a)
y=this.b
y.toString
P.bZ(null,null,y,H.m(new P.j1(z,this),{func:1,ret:-1}))}},
aE:function(){var z=H.h(this.c,"$isaM")
this.c=null
return this.ad(z)},
ad:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
av:function(a){var z,y,x
z=H.q(this,0)
H.c1(a,{futureOr:1,type:z})
y=this.$ti
if(H.aP(a,"$isaW",y,"$asaW"))if(H.aP(a,"$isaf",y,null))P.dL(a,this)
else P.iY(a,this)
else{x=this.aE()
H.A(a,z)
this.a=4
this.c=a
P.b8(this,x)}},
bc:function(a,b){var z
H.h(b,"$isa6")
z=this.aE()
this.a=8
this.c=new P.a0(a,b)
P.b8(this,z)},
$isaW:1,
p:{
iY:function(a,b){var z,y,x
b.a=1
try{a.bU(new P.iZ(b),new P.j_(b),null)}catch(x){z=H.a9(x)
y=H.bh(x)
P.kG(new P.j0(b,z,y))}},
dL:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isaf")
if(z>=4){y=b.aE()
b.a=a.a
b.c=a.c
P.b8(b,y)}else{y=H.h(b.c,"$isaM")
b.a=2
b.c=a
a.bh(y)}},
b8:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isa0")
y=y.b
u=v.a
t=v.b
y.toString
P.bY(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.b8(z.a,b)}y=z.a
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
P.bY(null,null,y,u,t)
return}o=$.K
if(o!=q)$.K=q
else o=null
y=b.c
if(y===8)new P.j4(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.j3(x,b,r).$0()}else if((y&2)!==0)new P.j2(z,x,b).$0()
if(o!=null)$.K=o
y=x.b
if(!!J.B(y).$isaW){if(y.a>=4){n=H.h(t.c,"$isaM")
t.c=null
b=t.ad(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dL(y,t)
return}}m=b.b
n=H.h(m.c,"$isaM")
m.c=null
b=m.ad(n)
y=x.a
u=x.b
if(!y){H.A(u,H.q(m,0))
m.a=4
m.c=u}else{H.h(u,"$isa0")
m.a=8
m.c=u}z.a=m
y=m}}}},
iX:{"^":"o:0;a,b",
$0:function(){P.b8(this.a,this.b)}},
j1:{"^":"o:0;a,b",
$0:function(){P.b8(this.b,this.a.a)}},
iZ:{"^":"o:6;a",
$1:function(a){var z=this.a
z.a=0
z.av(a)}},
j_:{"^":"o:16;a",
$2:function(a,b){H.h(b,"$isa6")
this.a.bc(a,b)},
$1:function(a){return this.$2(a,null)}},
j0:{"^":"o:0;a,b,c",
$0:function(){this.a.bc(this.b,this.c)}},
j4:{"^":"o:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bS(H.m(w.d,{func:1}),null)}catch(v){y=H.a9(v)
x=H.bh(v)
if(this.d){w=H.h(this.a.a.c,"$isa0").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isa0")
else u.b=new P.a0(y,x)
u.a=!0
return}if(!!J.B(z).$isaW){if(z instanceof P.af&&z.gbk()>=4){if(z.gbk()===8){w=this.b
w.b=H.h(z.gd1(),"$isa0")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.bT(new P.j5(t),null)
w.a=!1}}},
j5:{"^":"o:17;a",
$1:function(a){return this.a}},
j3:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.q(x,0)
v=H.A(this.c,w)
u=H.q(x,1)
this.a.b=x.b.b.aJ(H.m(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a9(t)
y=H.bh(t)
x=this.a
x.b=new P.a0(z,y)
x.a=!0}}},
j2:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isa0")
w=this.c
if(w.dC(z)&&w.e!=null){v=this.b
v.b=w.dw(z)
v.a=!1}}catch(u){y=H.a9(u)
x=H.bh(u)
w=H.h(this.a.a.c,"$isa0")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a0(y,x)
s.a=!0}}},
dI:{"^":"b;a,0b"},
id:{"^":"b;$ti",
gk:function(a){var z,y,x,w
z={}
y=new P.af(0,$.K,[P.D])
z.a=0
x=H.q(this,0)
w=H.m(new P.ig(z,this),{func:1,ret:-1,args:[x]})
H.m(new P.ih(z,y),{func:1,ret:-1})
W.aB(this.a,this.b,w,!1,x)
return y}},
ig:{"^":"o;a,b",
$1:function(a){H.A(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.H,args:[H.q(this.b,0)]}}},
ih:{"^":"o:0;a,b",
$0:function(){this.b.av(this.a.a)}},
ie:{"^":"b;"},
a0:{"^":"b;a,b",
l:function(a){return H.f(this.a)},
$isR:1},
jV:{"^":"b;",$ismJ:1},
ka:{"^":"o:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dp()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.l(0)
throw x}},
jr:{"^":"jV;",
dH:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
try{if(C.e===$.K){a.$0()
return}P.e2(null,null,this,a,-1)}catch(x){z=H.a9(x)
y=H.bh(x)
P.bY(null,null,this,z,H.h(y,"$isa6"))}},
dI:function(a,b,c){var z,y,x
H.m(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.e===$.K){a.$1(b)
return}P.e3(null,null,this,a,b,-1,c)}catch(x){z=H.a9(x)
y=H.bh(x)
P.bY(null,null,this,z,H.h(y,"$isa6"))}},
de:function(a,b){return new P.jt(this,H.m(a,{func:1,ret:b}),b)},
br:function(a){return new P.js(this,H.m(a,{func:1,ret:-1}))},
df:function(a,b){return new P.ju(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
bS:function(a,b){H.m(a,{func:1,ret:b})
if($.K===C.e)return a.$0()
return P.e2(null,null,this,a,b)},
aJ:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.K===C.e)return a.$1(b)
return P.e3(null,null,this,a,b,c,d)},
dG:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.K===C.e)return a.$2(b,c)
return P.kb(null,null,this,a,b,c,d,e,f)}},
jt:{"^":"o;a,b,c",
$0:function(){return this.a.bS(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
js:{"^":"o:1;a,b",
$0:function(){return this.a.dH(this.b)}},
ju:{"^":"o;a,b,c",
$1:function(a){var z=this.c
return this.a.dI(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dh:function(a,b,c){H.bB(a)
return H.x(H.kj(a,new H.df(0,0,[b,c])),"$isdg",[b,c],"$asdg")},
S:function(a,b){return new H.df(0,0,[a,b])},
a5:function(a,b,c,d){return new P.jc(0,0,[d])},
h6:function(a,b,c){var z,y
if(P.cv(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.k([],[P.d])
y=$.bj()
C.a.j(y,a)
try{P.k7(a,z)}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=P.dx(b,H.kz(z,"$isl"),", ")+c
return y.charCodeAt(0)==0?y:y},
ci:function(a,b,c){var z,y,x
if(P.cv(a))return b+"..."+c
z=new P.cr(b)
y=$.bj()
C.a.j(y,a)
try{x=z
x.a=P.dx(x.gZ(),a,", ")}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=z
y.a=y.gZ()+c
y=z.gZ()
return y.charCodeAt(0)==0?y:y},
cv:function(a){var z,y
for(z=0;y=$.bj(),z<y.length;++z)if(a===y[z])return!0
return!1},
k7:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.x(b,"$isa",[P.d],"$asa")
z=a.gD(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.u())return
w=H.f(z.gE(z))
C.a.j(b,w)
y+=w.length+2;++x}if(!z.u()){if(x<=5)return
if(0>=b.length)return H.j(b,-1)
v=b.pop()
if(0>=b.length)return H.j(b,-1)
u=b.pop()}else{t=z.gE(z);++x
if(!z.u()){if(x<=4){C.a.j(b,H.f(t))
return}v=H.f(t)
if(0>=b.length)return H.j(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gE(z);++x
for(;z.u();t=s,s=r){r=z.gE(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.j(b,-1)
y-=b.pop().length+2;--x}C.a.j(b,"...")
return}}u=H.f(t)
v=H.f(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.j(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.j(b,q)
C.a.j(b,u)
C.a.j(b,v)},
cm:function(a,b){var z,y,x
z=P.a5(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.G)(a),++x)z.j(0,H.A(a[x],b))
return z},
dk:function(a){var z,y,x
z={}
if(P.cv(a))return"{...}"
y=new P.cr("")
try{C.a.j($.bj(),a)
x=y
x.a=x.gZ()+"{"
z.a=!0
J.f5(a,new P.hk(z,y))
z=y
z.a=z.gZ()+"}"}finally{z=$.bj()
if(0>=z.length)return H.j(z,-1)
z.pop()}z=y.gZ()
return z.charCodeAt(0)==0?z:z},
jc:{"^":"j7;a,0b,0c,0d,0e,0f,r,$ti",
gD:function(a){var z=new P.dP(this,this.r,this.$ti)
z.c=this.e
return z},
gk:function(a){return this.a},
A:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.h(z[b],"$isbx")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.h(y[b],"$isbx")!=null}else return this.cO(b)},
cO:function(a){var z=this.d
if(z==null)return!1
return this.az(this.bf(z,a),a)>=0},
j:function(a,b){var z,y
H.A(b,H.q(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cs()
this.b=z}return this.b9(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cs()
this.c=y}return this.b9(y,b)}else return this.cM(0,b)},
cM:function(a,b){var z,y,x
H.A(b,H.q(this,0))
z=this.d
if(z==null){z=P.cs()
this.d=z}y=this.bd(b)
x=z[y]
if(x==null)z[y]=[this.aD(b)]
else{if(this.az(x,b)>=0)return!1
x.push(this.aD(b))}return!0},
bR:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bi(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bi(this.c,b)
else return this.cX(0,b)},
cX:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bf(z,b)
x=this.az(y,b)
if(x<0)return!1
this.bm(y.splice(x,1)[0])
return!0},
a7:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aB()}},
b9:function(a,b){H.A(b,H.q(this,0))
if(H.h(a[b],"$isbx")!=null)return!1
a[b]=this.aD(b)
return!0},
bi:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isbx")
if(z==null)return!1
this.bm(z)
delete a[b]
return!0},
aB:function(){this.r=this.r+1&67108863},
aD:function(a){var z,y
z=new P.bx(H.A(a,H.q(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aB()
return z},
bm:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aB()},
bd:function(a){return J.al(a)&0x3ffffff},
bf:function(a,b){return a[this.bd(b)]},
az:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aF(a[y].a,b))return y
return-1},
p:{
cs:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bx:{"^":"b;a,0b,0c"},
dP:{"^":"b;a,b,0c,0d,$ti",
sbb:function(a){this.d=H.A(a,H.q(this,0))},
gE:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aH(z))
else{z=this.c
if(z==null){this.sbb(null)
return!1}else{this.sbb(H.A(z.a,H.q(this,0)))
this.c=this.c.b
return!0}}},
$isaX:1,
p:{
jd:function(a,b,c){var z=new P.dP(a,b,[c])
z.c=a.e
return z}}},
j7:{"^":"i2;"},
hi:{"^":"je;",$isl:1,$isa:1},
p:{"^":"b;$ti",
gD:function(a){return new H.di(a,this.gk(a),0,[H.bg(this,a,"p",0)])},
t:function(a,b){return this.h(a,b)},
dv:function(a,b,c,d){var z,y,x
H.A(b,d)
H.m(c,{func:1,ret:d,args:[d,H.bg(this,a,"p",0)]})
z=this.gk(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gk(a))throw H.c(P.aH(a))}return y},
l:function(a){return P.ci(a,"[","]")}},
dj:{"^":"V;"},
hk:{"^":"o:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.f(a)
z.a=y+": "
z.a+=H.f(b)}},
V:{"^":"b;$ti",
H:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.bg(this,a,"V",0),H.bg(this,a,"V",1)]})
for(z=J.bH(this.gJ(a));z.u();){y=z.gE(z)
b.$2(y,this.h(a,y))}},
gk:function(a){return J.aS(this.gJ(a))},
l:function(a){return P.dk(a)},
$isM:1},
i3:{"^":"b;$ti",
I:function(a,b){var z
for(z=J.bH(H.x(b,"$isl",this.$ti,"$asl"));z.u();)this.j(0,z.gE(z))},
l:function(a){return P.ci(this,"{","}")},
$isl:1,
$isma:1},
i2:{"^":"i3;"},
je:{"^":"b+p;"}}],["","",,P,{"^":"",
fV:function(a){if(a instanceof H.o)return a.l(0)
return"Instance of '"+H.b4(a)+"'"},
bM:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bl(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fV(a)},
d9:function(a){return new P.iU(a)},
aD:function(a){H.c5(H.f(a))},
T:{"^":"b;"},
"+bool":0,
bL:{"^":"b;a,b",
F:function(a,b){if(b==null)return!1
return b instanceof P.bL&&this.a===b.a&&!0},
N:function(a,b){return C.c.N(this.a,H.h(b,"$isbL").a)},
gB:function(a){var z=this.a
return(z^C.c.bj(z,30))&1073741823},
l:function(a){var z,y,x,w,v,u,t,s
z=P.fJ(H.hS(this))
y=P.bm(H.hQ(this))
x=P.bm(H.hM(this))
w=P.bm(H.hN(this))
v=P.bm(H.hP(this))
u=P.bm(H.hR(this))
t=P.fK(H.hO(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isY:1,
$asY:function(){return[P.bL]},
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
bm:function(a){if(a>=10)return""+a
return"0"+a}}},
a3:{"^":"E;"},
"+double":0,
aU:{"^":"b;a",
X:function(a,b){return C.c.X(this.a,H.h(b,"$isaU").a)},
F:function(a,b){if(b==null)return!1
return b instanceof P.aU&&this.a===b.a},
gB:function(a){return this.a&0x1FFFFFFF},
N:function(a,b){return C.c.N(this.a,H.h(b,"$isaU").a)},
l:function(a){var z,y,x,w,v
z=new P.fS()
y=this.a
if(y<0)return"-"+new P.aU(0-y).l(0)
x=z.$1(C.c.U(y,6e7)%60)
w=z.$1(C.c.U(y,1e6)%60)
v=new P.fR().$1(y%1e6)
return""+C.c.U(y,36e8)+":"+H.f(x)+":"+H.f(w)+"."+H.f(v)},
$isY:1,
$asY:function(){return[P.aU]},
p:{
fQ:function(a,b,c,d,e,f){return new P.aU(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fR:{"^":"o:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fS:{"^":"o:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
R:{"^":"b;"},
dp:{"^":"R;",
l:function(a){return"Throw of null."}},
aG:{"^":"R;a,b,c,d",
gax:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaw:function(){return""},
l:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gax()+y+x
if(!this.a)return w
v=this.gaw()
u=P.bM(this.b)
return w+v+": "+u},
p:{
cV:function(a,b,c){return new P.aG(!0,a,b,c)}}},
dq:{"^":"aG;e,f,a,b,c,d",
gax:function(){return"RangeError"},
gaw:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.f(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.f(z)
else if(x>z)y=": Not in range "+H.f(z)+".."+H.f(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.f(z)}return y},
p:{
bS:function(a,b,c){return new P.dq(null,null,!0,a,b,"Value not in range")},
bR:function(a,b,c,d,e){return new P.dq(b,c,!0,a,d,"Invalid value")}}},
h4:{"^":"aG;e,k:f>,a,b,c,d",
gax:function(){return"RangeError"},
gaw:function(){var z,y
z=H.Q(this.b)
if(typeof z!=="number")return z.a9()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.f(y)},
p:{
F:function(a,b,c,d,e){var z=H.Q(e==null?J.aS(b):e)
return new P.h4(b,z,!0,a,c,"Index out of range")}}},
iv:{"^":"R;a",
l:function(a){return"Unsupported operation: "+this.a},
p:{
z:function(a){return new P.iv(a)}}},
it:{"^":"R;a",
l:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
dF:function(a){return new P.it(a)}}},
cp:{"^":"R;a",
l:function(a){return"Bad state: "+this.a},
p:{
cq:function(a){return new P.cp(a)}}},
fB:{"^":"R;a",
l:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bM(z)+"."},
p:{
aH:function(a){return new P.fB(a)}}},
dw:{"^":"b;",
l:function(a){return"Stack Overflow"},
$isR:1},
fH:{"^":"R;a",
l:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iU:{"^":"b;a",
l:function(a){return"Exception: "+this.a}},
bn:{"^":"b;"},
D:{"^":"E;"},
"+int":0,
l:{"^":"b;$ti",
aK:["cl",function(a,b){var z=H.cz(this,"l",0)
return new H.dG(this,H.m(b,{func:1,ret:P.T,args:[z]}),[z])}],
gk:function(a){var z,y
z=this.gD(this)
for(y=0;z.u();)++y
return y},
t:function(a,b){var z,y,x
if(b<0)H.a_(P.bR(b,0,null,"index",null))
for(z=this.gD(this),y=0;z.u();){x=z.gE(z)
if(b===y)return x;++y}throw H.c(P.F(b,this,"index",null,y))},
l:function(a){return P.h6(this,"(",")")}},
aX:{"^":"b;$ti"},
a:{"^":"b;$ti",$isl:1},
"+List":0,
M:{"^":"b;$ti"},
H:{"^":"b;",
gB:function(a){return P.b.prototype.gB.call(this,this)},
l:function(a){return"null"}},
"+Null":0,
E:{"^":"b;",$isY:1,
$asY:function(){return[P.E]}},
"+num":0,
b:{"^":";",
F:function(a,b){return this===b},
gB:function(a){return H.b3(this)},
l:function(a){return"Instance of '"+H.b4(this)+"'"},
toString:function(){return this.l(this)}},
a6:{"^":"b;"},
d:{"^":"b;",$isY:1,
$asY:function(){return[P.d]},
$ishI:1},
"+String":0,
cr:{"^":"b;Z:a<",
gk:function(a){return this.a.length},
l:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dx:function(a,b,c){var z=J.bH(b)
if(!z.u())return a
if(c.length===0){do a+=H.f(z.gE(z))
while(z.u())}else{a+=H.f(z.gE(z))
for(;z.u();)a=a+c+H.f(z.gE(z))}return a}}}}],["","",,W,{"^":"",
fT:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.o).O(z,a,b,c)
y.toString
z=W.u
z=new H.dG(new W.a8(y),H.m(new W.fU(),{func:1,ret:P.T,args:[z]}),[z])
x=z.gD(z)
if(!x.u())H.a_(H.dc())
w=x.gE(x)
if(x.u())H.a_(H.h7())
return H.h(w,"$isU")},
d8:function(a){H.h(a,"$isP")
return"wheel"},
aV:function(a){var z,y,x
z="element tag unavailable"
try{y=J.f8(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a9(x)}return z},
iR:function(a,b){return document.createElement(a)},
bV:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dO:function(a,b,c,d){var z,y
z=W.bV(W.bV(W.bV(W.bV(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
e0:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.iL(a)
if(!!J.B(z).$isP)return z
return}else return H.h(a,"$isP")},
e6:function(a,b){var z
H.m(a,{func:1,ret:-1,args:[b]})
z=$.K
if(z===C.e)return a
return z.df(a,b)},
O:{"^":"U;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kL:{"^":"i;0k:length=","%":"AccessibleNodeList"},
fo:{"^":"O;",
l:function(a){return String(a)},
$isfo:1,
"%":"HTMLAnchorElement"},
kM:{"^":"O;",
l:function(a){return String(a)},
"%":"HTMLAreaElement"},
cW:{"^":"O;",$iscW:1,"%":"HTMLBaseElement"},
ft:{"^":"i;","%":";Blob"},
bJ:{"^":"O;",$isbJ:1,"%":"HTMLBodyElement"},
cf:{"^":"O;0n:height=,0m:width=",
c9:function(a,b,c){var z=this.cT(a,b,P.kg(c,null))
return z},
cT:function(a,b,c){return a.getContext(b,c)},
$iscf:1,
"%":"HTMLCanvasElement"},
kR:{"^":"i;",
al:function(a){return P.a2(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kS:{"^":"u;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fC:{"^":"cg;",$isfC:1,"%":"CSSNumericValue|CSSUnitValue"},
kY:{"^":"fF;0k:length=","%":"CSSPerspective"},
am:{"^":"i;",$isam:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fD:{"^":"iJ;0k:length=",
aO:function(a,b){var z=this.cU(a,this.at(a,b))
return z==null?"":z},
at:function(a,b){var z,y
z=$.et()
y=z[b]
if(typeof y==="string")return y
y=this.d5(a,b)
z[b]=y
return y},
d5:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fL()+b
if(z in a)return z
return b},
cU:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fE:{"^":"b;",
gn:function(a){return this.aO(a,"height")},
gm:function(a){return this.aO(a,"width")}},
cg:{"^":"i;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fF:{"^":"i;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
l_:{"^":"cg;0k:length=","%":"CSSTransformValue"},
l0:{"^":"cg;0k:length=","%":"CSSUnparsedValue"},
l2:{"^":"i;0k:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
fM:{"^":"O;","%":"HTMLDivElement"},
fN:{"^":"u;",
d8:function(a,b){return a.adoptNode(b)},
ca:function(a,b){return a.getElementById(b)},
dE:function(a,b){return a.querySelector(b)},
gbN:function(a){return new W.bv(a,"mousedown",!1,[W.W])},
gbO:function(a){return new W.bv(a,"mousemove",!1,[W.W])},
gbP:function(a){return new W.bv(a,"mouseup",!1,[W.W])},
gbQ:function(a){return new W.bv(a,H.v(W.d8(a)),!1,[W.aL])},
"%":"XMLDocument;Document"},
l3:{"^":"i;",
l:function(a){return String(a)},
"%":"DOMException"},
fO:{"^":"i;",
dn:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
l4:{"^":"iN;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.x(c,"$isX",[P.E],"$asX")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isw:1,
$asw:function(){return[[P.X,P.E]]},
$isy:1,
$asy:function(){return[[P.X,P.E]]},
$asp:function(){return[[P.X,P.E]]},
$isl:1,
$asl:function(){return[[P.X,P.E]]},
$isa:1,
$asa:function(){return[[P.X,P.E]]},
$asr:function(){return[[P.X,P.E]]},
"%":"ClientRectList|DOMRectList"},
fP:{"^":"i;",
l:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gm(a))+" x "+H.f(this.gn(a))},
F:function(a,b){var z
if(b==null)return!1
if(!H.aP(b,"$isX",[P.E],"$asX"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.n(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gB:function(a){return W.dO(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isX:1,
$asX:function(){return[P.E]},
"%":";DOMRectReadOnly"},
l5:{"^":"iP;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.v(c)
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
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
$asr:function(){return[P.d]},
"%":"DOMStringList"},
l6:{"^":"i;0k:length=","%":"DOMTokenList"},
U:{"^":"u;0dJ:tagName=",
gdc:function(a){return new W.iQ(a)},
l:function(a){return a.localName},
O:["am",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.d7
if(z==null){z=H.k([],[W.ad])
y=new W.dm(z)
C.a.j(z,W.dM(null))
C.a.j(z,W.dX())
$.d7=y
d=y}else d=z
z=$.d6
if(z==null){z=new W.e_(d)
$.d6=z
c=z}else{z.a=d
c=z}}if($.ah==null){z=document
y=z.implementation
y=(y&&C.I).dn(y,"")
$.ah=y
$.ch=y.createRange()
y=$.ah
y.toString
y=y.createElement("base")
H.h(y,"$iscW")
y.href=z.baseURI
z=$.ah.head;(z&&C.J).K(z,y)}z=$.ah
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.h(y,"$isbJ")}z=$.ah
if(!!this.$isbJ)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ah.body;(z&&C.o).K(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.A(C.T,a.tagName)){z=$.ch;(z&&C.B).cb(z,x)
z=$.ch
w=(z&&C.B).dl(z,b)}else{x.innerHTML=b
w=$.ah.createDocumentFragment()
for(z=J.n(w);y=x.firstChild,y!=null;)z.K(w,y)}z=$.ah.body
if(x==null?z!=null:x!==z)J.cP(x)
c.aT(w)
C.q.d8(document,w)
return w},function(a,b,c){return this.O(a,b,c,null)},"dm",null,null,"gdQ",5,5,null],
cd:function(a,b,c,d){a.textContent=null
this.K(a,this.O(a,b,c,d))},
cc:function(a,b){return this.cd(a,b,null,null)},
a1:function(a,b){return a.getAttribute(b)},
cY:function(a,b){return a.removeAttribute(b)},
gbN:function(a){return new W.bU(a,"mousedown",!1,[W.W])},
gbO:function(a){return new W.bU(a,"mousemove",!1,[W.W])},
gbP:function(a){return new W.bU(a,"mouseup",!1,[W.W])},
gbQ:function(a){return new W.bU(a,H.v(W.d8(a)),!1,[W.aL])},
$isU:1,
"%":";Element"},
fU:{"^":"o:18;",
$1:function(a){return!!J.B(H.h(a,"$isu")).$isU}},
l8:{"^":"O;0n:height=,0m:width=","%":"HTMLEmbedElement"},
a4:{"^":"i;",$isa4:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
P:{"^":"i;",
d7:function(a,b,c,d){H.m(c,{func:1,args:[W.a4]})
if(c!=null)this.cN(a,b,c,!1)},
cN:function(a,b,c,d){return a.addEventListener(b,H.bc(H.m(c,{func:1,args:[W.a4]}),1),!1)},
$isP:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dU|dV|dY|dZ"},
an:{"^":"ft;",$isan:1,"%":"File"},
lp:{"^":"iW;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isan")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.an]},
$isy:1,
$asy:function(){return[W.an]},
$asp:function(){return[W.an]},
$isl:1,
$asl:function(){return[W.an]},
$isa:1,
$asa:function(){return[W.an]},
$asr:function(){return[W.an]},
"%":"FileList"},
lq:{"^":"P;0k:length=","%":"FileWriter"},
lt:{"^":"O;0k:length=","%":"HTMLFormElement"},
ao:{"^":"i;",$isao:1,"%":"Gamepad"},
h1:{"^":"O;","%":"HTMLHeadElement"},
lu:{"^":"i;0k:length=","%":"History"},
lv:{"^":"j9;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isu")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.u]},
$isy:1,
$asy:function(){return[W.u]},
$asp:function(){return[W.u]},
$isl:1,
$asl:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$asr:function(){return[W.u]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
h2:{"^":"fN;","%":"HTMLDocument"},
lw:{"^":"O;0n:height=,0m:width=","%":"HTMLIFrameElement"},
lz:{"^":"i;0n:height=,0m:width=","%":"ImageBitmap"},
lA:{"^":"i;0n:height=,0m:width=","%":"ImageData"},
lB:{"^":"O;0n:height=,0m:width=","%":"HTMLImageElement"},
lD:{"^":"O;0n:height=,0m:width=","%":"HTMLInputElement"},
aY:{"^":"dE;",$isaY:1,"%":"KeyboardEvent"},
hj:{"^":"i;",
l:function(a){return String(a)},
$ishj:1,
"%":"Location"},
hn:{"^":"O;","%":"HTMLAudioElement;HTMLMediaElement"},
lK:{"^":"i;0k:length=","%":"MediaList"},
lL:{"^":"jg;",
h:function(a,b){return P.a2(a.get(H.v(b)))},
H:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gJ:function(a){var z=H.k([],[P.d])
this.H(a,new W.hp(z))
return z},
gk:function(a){return a.size},
$asV:function(){return[P.d,null]},
$isM:1,
$asM:function(){return[P.d,null]},
"%":"MIDIInputMap"},
hp:{"^":"o:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
lM:{"^":"jh;",
h:function(a,b){return P.a2(a.get(H.v(b)))},
H:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gJ:function(a){var z=H.k([],[P.d])
this.H(a,new W.hq(z))
return z},
gk:function(a){return a.size},
$asV:function(){return[P.d,null]},
$isM:1,
$asM:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
hq:{"^":"o:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
ar:{"^":"i;",$isar:1,"%":"MimeType"},
lN:{"^":"jj;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isar")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
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
$asr:function(){return[W.ar]},
"%":"MimeTypeArray"},
W:{"^":"dE;",
gbM:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.b2(a.offsetX,a.offsetY,[P.E])
else{z=a.target
if(!J.B(W.e0(z)).$isU)throw H.c(P.z("offsetX is only supported on elements"))
y=H.h(W.e0(z),"$isU")
z=a.clientX
x=a.clientY
w=[P.E]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.x(new P.b2(u,v,w),"$isb2",w,"$asb2")
if(typeof z!=="number")return z.aY()
if(typeof x!=="number")return x.aY()
return new P.b2(C.r.bV(z-u),C.r.bV(x-v),w)}},
$isW:1,
"%":";DragEvent|MouseEvent"},
a8:{"^":"hi;a",
gaa:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.cq("No elements"))
if(y>1)throw H.c(P.cq("More than one element"))
return z.firstChild},
I:function(a,b){var z,y,x,w,v
H.x(b,"$isl",[W.u],"$asl")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.n(y),v=0;v<x;++v)w.K(y,z.firstChild)
return},
i:function(a,b,c){var z,y
H.h(c,"$isu")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.j(y,b)
J.eN(z,c,y[b])},
gD:function(a){var z=this.a.childNodes
return new W.da(z,z.length,-1,[H.bg(C.V,z,"r",0)])},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.j(z,b)
return z[b]},
$asp:function(){return[W.u]},
$asl:function(){return[W.u]},
$asa:function(){return[W.u]}},
u:{"^":"P;0dD:previousSibling=",
dF:function(a){var z=a.parentNode
if(z!=null)J.bE(z,a)},
l:function(a){var z=a.nodeValue
return z==null?this.ck(a):z},
K:function(a,b){return a.appendChild(b)},
cZ:function(a,b){return a.removeChild(b)},
d_:function(a,b,c){return a.replaceChild(b,c)},
$isu:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hA:{"^":"jl;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isu")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.u]},
$isy:1,
$asy:function(){return[W.u]},
$asp:function(){return[W.u]},
$isl:1,
$asl:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$asr:function(){return[W.u]},
"%":"NodeList|RadioNodeList"},
lW:{"^":"O;0n:height=,0m:width=","%":"HTMLObjectElement"},
lY:{"^":"P;0n:height=,0m:width=","%":"OffscreenCanvas"},
lZ:{"^":"i;0n:height=,0m:width=","%":"PaintSize"},
at:{"^":"i;0k:length=",$isat:1,"%":"Plugin"},
m0:{"^":"jp;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isat")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
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
$asr:function(){return[W.at]},
"%":"PluginArray"},
m2:{"^":"W;0n:height=,0m:width=","%":"PointerEvent"},
hU:{"^":"i;",
dl:function(a,b){return a.createContextualFragment(b)},
cb:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
m7:{"^":"jv;",
h:function(a,b){return P.a2(a.get(H.v(b)))},
H:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gJ:function(a){var z=H.k([],[P.d])
this.H(a,new W.i_(z))
return z},
gk:function(a){return a.size},
$asV:function(){return[P.d,null]},
$isM:1,
$asM:function(){return[P.d,null]},
"%":"RTCStatsReport"},
i_:{"^":"o:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
m8:{"^":"i;0n:height=,0m:width=","%":"Screen"},
m9:{"^":"O;0k:length=","%":"HTMLSelectElement"},
au:{"^":"P;",$isau:1,"%":"SourceBuffer"},
mb:{"^":"dV;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isau")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.au]},
$isy:1,
$asy:function(){return[W.au]},
$asp:function(){return[W.au]},
$isl:1,
$asl:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$asr:function(){return[W.au]},
"%":"SourceBufferList"},
av:{"^":"i;",$isav:1,"%":"SpeechGrammar"},
mc:{"^":"jB;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isav")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
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
$asr:function(){return[W.av]},
"%":"SpeechGrammarList"},
aw:{"^":"i;0k:length=",$isaw:1,"%":"SpeechRecognitionResult"},
mf:{"^":"jE;",
h:function(a,b){return this.bg(a,H.v(b))},
H:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.cW(a,z)
if(y==null)return
b.$2(y,this.bg(a,y))}},
gJ:function(a){var z=H.k([],[P.d])
this.H(a,new W.ic(z))
return z},
gk:function(a){return a.length},
bg:function(a,b){return a.getItem(b)},
cW:function(a,b){return a.key(b)},
$asV:function(){return[P.d,P.d]},
$isM:1,
$asM:function(){return[P.d,P.d]},
"%":"Storage"},
ic:{"^":"o:19;a",
$2:function(a,b){return C.a.j(this.a,a)}},
ax:{"^":"i;",$isax:1,"%":"CSSStyleSheet|StyleSheet"},
ii:{"^":"O;",
O:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.am(a,b,c,d)
z=W.fT("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a8(y).I(0,new W.a8(z))
return y},
"%":"HTMLTableElement"},
mi:{"^":"O;",
O:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.am(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.O(z.createElement("table"),b,c,d)
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
mj:{"^":"O;",
O:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.am(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.O(z.createElement("table"),b,c,d)
z.toString
z=new W.a8(z)
x=z.gaa(z)
y.toString
x.toString
new W.a8(y).I(0,new W.a8(x))
return y},
"%":"HTMLTableSectionElement"},
dz:{"^":"O;",$isdz:1,"%":"HTMLTemplateElement"},
mk:{"^":"i;0m:width=","%":"TextMetrics"},
ay:{"^":"P;",$isay:1,"%":"TextTrack"},
az:{"^":"P;",$isaz:1,"%":"TextTrackCue|VTTCue"},
ml:{"^":"jM;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaz")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
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
$asr:function(){return[W.az]},
"%":"TextTrackCueList"},
mm:{"^":"dZ;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isay")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
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
$asr:function(){return[W.ay]},
"%":"TextTrackList"},
mn:{"^":"i;0k:length=","%":"TimeRanges"},
aA:{"^":"i;",$isaA:1,"%":"Touch"},
mo:{"^":"jR;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaA")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
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
$asr:function(){return[W.aA]},
"%":"TouchList"},
mp:{"^":"i;0k:length=","%":"TrackDefaultList"},
dE:{"^":"a4;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mD:{"^":"i;",
l:function(a){return String(a)},
"%":"URL"},
mF:{"^":"hn;0n:height=,0m:width=","%":"HTMLVideoElement"},
mG:{"^":"P;0k:length=","%":"VideoTrackList"},
mH:{"^":"P;0n:height=,0m:width=","%":"VisualViewport"},
mI:{"^":"i;0m:width=","%":"VTTRegion"},
aL:{"^":"W;",
gdr:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.z("deltaY is not supported"))},
$isaL:1,
"%":"WheelEvent"},
iy:{"^":"P;",
gda:function(a){var z,y,x
z=P.E
y=new P.af(0,$.K,[z])
x=H.m(new W.iz(new P.jI(y,[z])),{func:1,ret:-1,args:[P.E]})
this.cS(a)
this.d0(a,W.e6(x,z))
return y},
d0:function(a,b){return a.requestAnimationFrame(H.bc(H.m(b,{func:1,ret:-1,args:[P.E]}),1))},
cS:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdH:1,
"%":"DOMWindow|Window"},
iz:{"^":"o:20;a",
$1:function(a){var z=this.a
a=H.c1(H.cC(a),{futureOr:1,type:H.q(z,0)})
z=z.a
if(z.a!==0)H.a_(P.cq("Future already completed"))
z.av(a)}},
dJ:{"^":"u;",$isdJ:1,"%":"Attr"},
mO:{"^":"jX;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isam")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.am]},
$isy:1,
$asy:function(){return[W.am]},
$asp:function(){return[W.am]},
$isl:1,
$asl:function(){return[W.am]},
$isa:1,
$asa:function(){return[W.am]},
$asr:function(){return[W.am]},
"%":"CSSRuleList"},
mQ:{"^":"fP;",
l:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
F:function(a,b){var z
if(b==null)return!1
if(!H.aP(b,"$isX",[P.E],"$asX"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.n(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gB:function(a){return W.dO(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mR:{"^":"jZ;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isao")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ao]},
$isy:1,
$asy:function(){return[W.ao]},
$asp:function(){return[W.ao]},
$isl:1,
$asl:function(){return[W.ao]},
$isa:1,
$asa:function(){return[W.ao]},
$asr:function(){return[W.ao]},
"%":"GamepadList"},
mW:{"^":"k0;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isu")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.u]},
$isy:1,
$asy:function(){return[W.u]},
$asp:function(){return[W.u]},
$isl:1,
$asl:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$asr:function(){return[W.u]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mX:{"^":"k2;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaw")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aw]},
$isy:1,
$asy:function(){return[W.aw]},
$asp:function(){return[W.aw]},
$isl:1,
$asl:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$asr:function(){return[W.aw]},
"%":"SpeechRecognitionResultList"},
mY:{"^":"k4;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isax")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
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
$asr:function(){return[W.ax]},
"%":"StyleSheetList"},
iG:{"^":"dj;cR:a<",
H:function(a,b){var z,y,x,w,v,u
H.m(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gJ(this),y=z.length,x=this.a,w=J.n(x),v=0;v<z.length;z.length===y||(0,H.G)(z),++v){u=z[v]
b.$2(u,w.a1(x,u))}},
gJ:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.k([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.j(z,w)
v=H.h(z[w],"$isdJ")
if(v.namespaceURI==null)C.a.j(y,v.name)}return y},
$asV:function(){return[P.d,P.d]},
$asM:function(){return[P.d,P.d]}},
iQ:{"^":"iG;a",
h:function(a,b){return J.cb(this.a,H.v(b))},
gk:function(a){return this.gJ(this).length}},
bv:{"^":"id;a,b,c,$ti"},
bU:{"^":"bv;a,b,c,$ti"},
iS:{"^":"ie;a,b,c,d,e,$ti",p:{
aB:function(a,b,c,d,e){var z=W.e6(new W.iT(c),W.a4)
if(z!=null&&!0)J.eO(a,b,z,!1)
return new W.iS(0,a,b,z,!1,[e])}}},
iT:{"^":"o:21;a",
$1:function(a){return this.a.$1(H.h(a,"$isa4"))}},
bw:{"^":"b;a",
cJ:function(a){var z,y
z=$.cG()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.S[y],W.kp())
for(y=0;y<12;++y)z.i(0,C.u[y],W.kq())}},
a_:function(a){return $.eJ().A(0,W.aV(a))},
V:function(a,b,c){var z,y,x
z=W.aV(a)
y=$.cG()
x=y.h(0,H.f(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.c_(x.$4(a,b,c,this))},
$isad:1,
p:{
dM:function(a){var z,y
z=document.createElement("a")
y=new W.jw(z,window.location)
y=new W.bw(y)
y.cJ(a)
return y},
mU:[function(a,b,c,d){H.h(a,"$isU")
H.v(b)
H.v(c)
H.h(d,"$isbw")
return!0},"$4","kp",16,0,12],
mV:[function(a,b,c,d){var z,y,x
H.h(a,"$isU")
H.v(b)
H.v(c)
z=H.h(d,"$isbw").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kq",16,0,12]}},
r:{"^":"b;$ti",
gD:function(a){return new W.da(a,this.gk(a),-1,[H.bg(this,a,"r",0)])}},
dm:{"^":"b;a",
a_:function(a){return C.a.bo(this.a,new W.hC(a))},
V:function(a,b,c){return C.a.bo(this.a,new W.hB(a,b,c))},
$isad:1},
hC:{"^":"o:9;a",
$1:function(a){return H.h(a,"$isad").a_(this.a)}},
hB:{"^":"o:9;a,b,c",
$1:function(a){return H.h(a,"$isad").V(this.a,this.b,this.c)}},
jx:{"^":"b;",
cK:function(a,b,c,d){var z,y,x
this.a.I(0,c)
z=b.aK(0,new W.jy())
y=b.aK(0,new W.jz())
this.b.I(0,z)
x=this.c
x.I(0,C.U)
x.I(0,y)},
a_:function(a){return this.a.A(0,W.aV(a))},
V:["cn",function(a,b,c){var z,y
z=W.aV(a)
y=this.c
if(y.A(0,H.f(z)+"::"+b))return this.d.d9(c)
else if(y.A(0,"*::"+b))return this.d.d9(c)
else{y=this.b
if(y.A(0,H.f(z)+"::"+b))return!0
else if(y.A(0,"*::"+b))return!0
else if(y.A(0,H.f(z)+"::*"))return!0
else if(y.A(0,"*::*"))return!0}return!1}],
$isad:1},
jy:{"^":"o:10;",
$1:function(a){return!C.a.A(C.u,H.v(a))}},
jz:{"^":"o:10;",
$1:function(a){return C.a.A(C.u,H.v(a))}},
jJ:{"^":"jx;e,a,b,c,d",
V:function(a,b,c){if(this.cn(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cb(a,"template")==="")return this.e.A(0,b)
return!1},
p:{
dX:function(){var z,y,x,w,v
z=P.d
y=P.cm(C.t,z)
x=H.q(C.t,0)
w=H.m(new W.jK(),{func:1,ret:z,args:[x]})
v=H.k(["TEMPLATE"],[z])
y=new W.jJ(y,P.a5(null,null,null,z),P.a5(null,null,null,z),P.a5(null,null,null,z),null)
y.cK(null,new H.hl(C.t,w,[x,z]),v,null)
return y}}},
jK:{"^":"o:22;",
$1:function(a){return"TEMPLATE::"+H.f(H.v(a))}},
jH:{"^":"b;",
a_:function(a){var z=J.B(a)
if(!!z.$isds)return!1
z=!!z.$isI
if(z&&W.aV(a)==="foreignObject")return!1
if(z)return!0
return!1},
V:function(a,b,c){if(b==="is"||C.i.cf(b,"on"))return!1
return this.a_(a)},
$isad:1},
da:{"^":"b;a,b,c,0d,$ti",
sbe:function(a){this.d=H.A(a,H.q(this,0))},
u:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbe(J.bk(this.a,z))
this.c=z
return!0}this.sbe(null)
this.c=y
return!1},
gE:function(a){return this.d},
$isaX:1},
iK:{"^":"b;a",$isP:1,$isdH:1,p:{
iL:function(a){if(a===window)return H.h(a,"$isdH")
else return new W.iK(a)}}},
ad:{"^":"b;"},
jw:{"^":"b;a,b",$ismC:1},
e_:{"^":"b;a",
aT:function(a){new W.jU(this).$2(a,null)},
a4:function(a,b){if(b==null)J.cP(a)
else J.bE(b,a)},
d3:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.f6(a)
x=J.cb(y.gcR(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a9(t)}v="element unprintable"
try{v=J.bl(a)}catch(t){H.a9(t)}try{u=W.aV(a)
this.d2(H.h(a,"$isU"),b,z,v,u,H.h(y,"$isM"),H.v(x))}catch(t){if(H.a9(t) instanceof P.aG)throw t
else{this.a4(a,b)
window
s="Removing corrupted element "+H.f(v)
if(typeof console!="undefined")window.console.warn(s)}}},
d2:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a4(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a_(a)){this.a4(a,b)
window
z="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.V(a,"is",g)){this.a4(a,b)
window
z="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gJ(f)
y=H.k(z.slice(0),[H.q(z,0)])
for(x=f.gJ(f).length-1,z=f.a,w=J.n(z);x>=0;--x){if(x>=y.length)return H.j(y,x)
v=y[x]
if(!this.a.V(a,J.ff(v),w.a1(z,v))){window
u="Removing disallowed attribute <"+H.f(e)+" "+v+'="'+H.f(w.a1(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.a1(z,v)
w.cY(z,v)}}if(!!J.B(a).$isdz)this.aT(a.content)},
$islU:1},
jU:{"^":"o:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.d3(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a4(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.f7(z)}catch(w){H.a9(w)
v=H.h(z,"$isu")
if(x){u=v.parentNode
if(u!=null)J.bE(u,v)}else J.bE(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.h(y,"$isu")}}},
iJ:{"^":"i+fE;"},
iM:{"^":"i+p;"},
iN:{"^":"iM+r;"},
iO:{"^":"i+p;"},
iP:{"^":"iO+r;"},
iV:{"^":"i+p;"},
iW:{"^":"iV+r;"},
j8:{"^":"i+p;"},
j9:{"^":"j8+r;"},
jg:{"^":"i+V;"},
jh:{"^":"i+V;"},
ji:{"^":"i+p;"},
jj:{"^":"ji+r;"},
jk:{"^":"i+p;"},
jl:{"^":"jk+r;"},
jo:{"^":"i+p;"},
jp:{"^":"jo+r;"},
jv:{"^":"i+V;"},
dU:{"^":"P+p;"},
dV:{"^":"dU+r;"},
jA:{"^":"i+p;"},
jB:{"^":"jA+r;"},
jE:{"^":"i+V;"},
jL:{"^":"i+p;"},
jM:{"^":"jL+r;"},
dY:{"^":"P+p;"},
dZ:{"^":"dY+r;"},
jQ:{"^":"i+p;"},
jR:{"^":"jQ+r;"},
jW:{"^":"i+p;"},
jX:{"^":"jW+r;"},
jY:{"^":"i+p;"},
jZ:{"^":"jY+r;"},
k_:{"^":"i+p;"},
k0:{"^":"k_+r;"},
k1:{"^":"i+p;"},
k2:{"^":"k1+r;"},
k3:{"^":"i+p;"},
k4:{"^":"k3+r;"}}],["","",,P,{"^":"",
a2:function(a){var z,y,x,w,v
if(a==null)return
z=P.S(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.G)(y),++w){v=H.v(y[w])
z.i(0,v,a[v])}return z},
kg:function(a,b){var z={}
a.H(0,new P.kh(z))
return z},
d4:function(){var z=$.d3
if(z==null){z=J.c7(window.navigator.userAgent,"Opera",0)
$.d3=z}return z},
fL:function(){var z,y
z=$.d0
if(z!=null)return z
y=$.d1
if(y==null){y=J.c7(window.navigator.userAgent,"Firefox",0)
$.d1=y}if(y)z="-moz-"
else{y=$.d2
if(y==null){y=!P.d4()&&J.c7(window.navigator.userAgent,"Trident/",0)
$.d2=y}if(y)z="-ms-"
else z=P.d4()?"-o-":"-webkit-"}$.d0=z
return z},
kh:{"^":"o:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
kH:function(a){return Math.sqrt(a)},
dN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
b2:{"^":"b;a0:a>,W:b>,$ti",
l:function(a){return"Point("+H.f(this.a)+", "+H.f(this.b)+")"},
F:function(a,b){if(b==null)return!1
return H.aP(b,"$isb2",[P.E],null)&&this.a==J.bI(b)&&this.b==b.gW(b)},
gB:function(a){var z,y,x
z=J.al(this.a)
y=J.al(this.b)
y=P.dN(P.dN(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
jq:{"^":"b;"},
X:{"^":"jq;$ti"}}],["","",,P,{"^":"",fp:{"^":"i;",$isfp:1,"%":"SVGAnimatedLength"},l9:{"^":"I;0n:height=,0m:width=","%":"SVGFEBlendElement"},la:{"^":"I;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},lb:{"^":"I;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},lc:{"^":"I;0n:height=,0m:width=","%":"SVGFECompositeElement"},ld:{"^":"I;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},le:{"^":"I;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},lf:{"^":"I;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},lg:{"^":"I;0n:height=,0m:width=","%":"SVGFEFloodElement"},lh:{"^":"I;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},li:{"^":"I;0n:height=,0m:width=","%":"SVGFEImageElement"},lj:{"^":"I;0n:height=,0m:width=","%":"SVGFEMergeElement"},lk:{"^":"I;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},ll:{"^":"I;0n:height=,0m:width=","%":"SVGFEOffsetElement"},lm:{"^":"I;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},ln:{"^":"I;0n:height=,0m:width=","%":"SVGFETileElement"},lo:{"^":"I;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},lr:{"^":"I;0n:height=,0m:width=","%":"SVGFilterElement"},ls:{"^":"bo;0n:height=,0m:width=","%":"SVGForeignObjectElement"},h0:{"^":"bo;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bo:{"^":"I;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},lC:{"^":"bo;0n:height=,0m:width=","%":"SVGImageElement"},aZ:{"^":"i;",$isaZ:1,"%":"SVGLength"},lI:{"^":"jb;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){H.h(c,"$isaZ")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$asp:function(){return[P.aZ]},
$isl:1,
$asl:function(){return[P.aZ]},
$isa:1,
$asa:function(){return[P.aZ]},
$asr:function(){return[P.aZ]},
"%":"SVGLengthList"},lJ:{"^":"I;0n:height=,0m:width=","%":"SVGMaskElement"},b1:{"^":"i;",$isb1:1,"%":"SVGNumber"},lV:{"^":"jn;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){H.h(c,"$isb1")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b1]},
$isl:1,
$asl:function(){return[P.b1]},
$isa:1,
$asa:function(){return[P.b1]},
$asr:function(){return[P.b1]},
"%":"SVGNumberList"},m_:{"^":"I;0n:height=,0m:width=","%":"SVGPatternElement"},m1:{"^":"i;0k:length=","%":"SVGPointList"},m3:{"^":"i;0n:height=,0m:width=","%":"SVGRect"},m4:{"^":"h0;0n:height=,0m:width=","%":"SVGRectElement"},ds:{"^":"I;",$isds:1,"%":"SVGScriptElement"},mg:{"^":"jG;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){H.v(c)
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$asp:function(){return[P.d]},
$isl:1,
$asl:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asr:function(){return[P.d]},
"%":"SVGStringList"},I:{"^":"U;",
O:function(a,b,c,d){var z,y,x,w,v,u
z=H.k([],[W.ad])
C.a.j(z,W.dM(null))
C.a.j(z,W.dX())
C.a.j(z,new W.jH())
c=new W.e_(new W.dm(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.o).dm(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a8(w)
u=z.gaa(z)
for(z=J.n(v);x=u.firstChild,x!=null;)z.K(v,x)
return v},
$isI:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mh:{"^":"bo;0n:height=,0m:width=","%":"SVGSVGElement"},b5:{"^":"i;",$isb5:1,"%":"SVGTransform"},mq:{"^":"jT;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){H.h(c,"$isb5")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b5]},
$isl:1,
$asl:function(){return[P.b5]},
$isa:1,
$asa:function(){return[P.b5]},
$asr:function(){return[P.b5]},
"%":"SVGTransformList"},mE:{"^":"bo;0n:height=,0m:width=","%":"SVGUseElement"},ja:{"^":"i+p;"},jb:{"^":"ja+r;"},jm:{"^":"i+p;"},jn:{"^":"jm+r;"},jF:{"^":"i+p;"},jG:{"^":"jF+r;"},jS:{"^":"i+p;"},jT:{"^":"jS+r;"}}],["","",,P,{"^":"",ai:{"^":"b;",$isl:1,
$asl:function(){return[P.a3]},
$isa:1,
$asa:function(){return[P.a3]},
$isir:1}}],["","",,P,{"^":"",kN:{"^":"i;0k:length=","%":"AudioBuffer"},kO:{"^":"iH;",
h:function(a,b){return P.a2(a.get(H.v(b)))},
H:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gJ:function(a){var z=H.k([],[P.d])
this.H(a,new P.fr(z))
return z},
gk:function(a){return a.size},
$asV:function(){return[P.d,null]},
$isM:1,
$asM:function(){return[P.d,null]},
"%":"AudioParamMap"},fr:{"^":"o:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},kP:{"^":"P;0k:length=","%":"AudioTrackList"},fs:{"^":"P;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lX:{"^":"fs;0k:length=","%":"OfflineAudioContext"},iH:{"^":"i+V;"}}],["","",,P,{"^":"",fu:{"^":"i;",$isfu:1,"%":"WebGLBuffer"},h_:{"^":"i;",$ish_:1,"%":"WebGLFramebuffer"},hT:{"^":"i;",$ishT:1,"%":"WebGLProgram"},m5:{"^":"i;",
bn:function(a,b){return a.activeTexture(b)},
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
bC:function(a,b){return a.createShader(b)},
bE:function(a,b){return a.depthMask(b)},
bF:function(a,b){return a.disable(b)},
bG:function(a,b,c,d){return a.drawArrays(b,c,d)},
bH:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bI:function(a,b){return a.enable(b)},
bJ:function(a,b){return a.enableVertexAttribArray(b)},
al:function(a){return P.a2(a.getContextAttributes())},
aM:function(a,b){return a.getProgramInfoLog(b)},
aN:function(a,b,c){return a.getProgramParameter(b,c)},
aP:function(a,b){return a.getShaderInfoLog(b)},
aQ:function(a,b,c){return a.getShaderParameter(b,c)},
aR:function(a,b,c){return a.getUniformLocation(b,c)},
bL:function(a,b){return a.linkProgram(b)},
aV:function(a,b,c){return a.shaderSource(b,c)},
aX:function(a,b,c,d){return a.stencilFunc(b,c,d)},
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
"%":"WebGLRenderingContext"},m6:{"^":"i;",
dd:function(a,b){return a.beginTransformFeedback(b)},
dg:function(a,b){return a.bindVertexArray(b)},
dq:function(a){return a.createVertexArray()},
ds:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dt:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
du:function(a){return a.endTransformFeedback()},
dM:function(a,b,c,d){this.d6(a,b,H.x(c,"$isa",[P.d],"$asa"),d)
return},
d6:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dN:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bn:function(a,b){return a.activeTexture(b)},
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
bC:function(a,b){return a.createShader(b)},
bE:function(a,b){return a.depthMask(b)},
bF:function(a,b){return a.disable(b)},
bG:function(a,b,c,d){return a.drawArrays(b,c,d)},
bH:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bI:function(a,b){return a.enable(b)},
bJ:function(a,b){return a.enableVertexAttribArray(b)},
al:function(a){return P.a2(a.getContextAttributes())},
aM:function(a,b){return a.getProgramInfoLog(b)},
aN:function(a,b,c){return a.getProgramParameter(b,c)},
aP:function(a,b){return a.getShaderInfoLog(b)},
aQ:function(a,b,c){return a.getShaderParameter(b,c)},
aR:function(a,b,c){return a.getUniformLocation(b,c)},
bL:function(a,b){return a.linkProgram(b)},
aV:function(a,b,c){return a.shaderSource(b,c)},
aX:function(a,b,c,d){return a.stencilFunc(b,c,d)},
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
"%":"WebGL2RenderingContext"},i4:{"^":"i;",$isi4:1,"%":"WebGLShader"},ik:{"^":"i;",$isik:1,"%":"WebGLTexture"},is:{"^":"i;",$isis:1,"%":"WebGLUniformLocation"},iw:{"^":"i;",$isiw:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",md:{"^":"jD;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return P.a2(this.cV(a,b))},
i:function(a,b,c){H.h(c,"$isM")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
cV:function(a,b){return a.item(b)},
$asp:function(){return[[P.M,,,]]},
$isl:1,
$asl:function(){return[[P.M,,,]]},
$isa:1,
$asa:function(){return[[P.M,,,]]},
$asr:function(){return[[P.M,,,]]},
"%":"SQLResultSetRowList"},jC:{"^":"i+p;"},jD:{"^":"jC+r;"}}],["","",,G,{"^":"",
iA:function(a){var z,y,x,w
z=H.k(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.j(z,y)
C.a.i(z,y,w+H.f(z[y]))}return C.a.a8(z,"\n")},
dK:function(a,b,c){var z,y,x,w
z=J.n(a)
y=z.bC(a,b)
z.aV(a,y,c)
z.bz(a,y)
x=H.c_(z.aQ(a,y,35713))
if(x!=null&&!x){w=z.aP(a,y)
P.aD("E:Compilation failed:")
P.aD("E:"+G.iA(c))
P.aD("E:Failure:")
P.aD(C.i.L("E:",w))
throw H.c(w)}return y},
hD:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
d.v(b)
d.ab(0,a)
e.v(c)
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
r=Math.sqrt(e.gaj())
if(r===0)return!1
e.S(0,-1/r)
return!0},
db:function(a,b){var z,y,x
H.x(a,"$isa",[T.e],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.f.i(b,z,J.bI(a[y]))
if(y>=a.length)return H.j(a,y)
C.f.i(b,z+1,J.ca(a[y]))
z+=2
if(y>=a.length)return H.j(a,y)
x=J.cN(a[y])
if(z>=b.length)return H.j(b,z)
b[z]=x}return b},
fX:function(a,b){var z,y
H.x(a,"$isa",[T.t],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.f.i(b,z,J.bI(a[y]))
if(y>=a.length)return H.j(a,y)
C.f.i(b,z+1,J.ca(a[y]))}return b},
fY:function(a,b){var z,y,x,w,v
H.x(a,"$isa",[T.b7],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.f.i(b,z,J.bI(a[y]))
if(y>=a.length)return H.j(a,y)
C.f.i(b,z+1,J.ca(a[y]))
x=z+2
if(y>=a.length)return H.j(a,y)
w=J.cN(a[y])
v=b.length
if(x>=v)return H.j(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.j(a,y)
w=J.f9(a[y])
if(z>=v)return H.j(b,z)
b[z]=w}return b},
fW:function(a,b){var z,y
H.x(a,"$isa",[[P.a,P.D]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.m.i(b,z,J.bk(a[y],0))
if(y>=a.length)return H.j(a,y)
C.m.i(b,z+1,J.bk(a[y],1))
if(y>=a.length)return H.j(a,y)
C.m.i(b,z+2,J.bk(a[y],2))
if(y>=a.length)return H.j(a,y)
C.m.i(b,z+3,J.bk(a[y],3))}return b},
j6:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.ap(z,[H.q(z,0)]),y=y.gD(y),x=b.x,w=[[P.a,P.D]],v=[P.a3],u=[T.b7],t=[T.e],s=[T.t];y.u();){r=y.d
if(!x.ah(0,r)){r="Dropping unnecessary attribute: "+H.f(r)
if($.ec>0)H.c5("I: "+r)
continue}q=z.h(0,r)
switch($.aa().h(0,r).a){case"vec2":b.a2(r,G.fX(H.bD(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.a2(r,G.db(H.bD(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.a2(r,G.fY(H.bD(q,"$isa",u,"$asa"),null),4)
break
case"float":b.a2(r,new Float32Array(H.bW(H.bD(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.a2(r,G.fW(H.bD(q,"$isa",w,"$asa"),null),4)
break}}},
bP:function(a,b,c){var z,y,x,w,v,u,t,s
z=b.d
y=b.e.x
x=P.d
w=P.S(x,P.b)
v=J.eX(z.a)
u=new G.ho(z,v,4,w,y,0,-1,P.S(x,P.ai),"meshdata:"+a,!1,!0)
x=G.db(c.d,null)
w.i(0,"aPosition",J.c8(z.a))
u.ch=x
u.b0("aPosition",x,3)
t=$.aa().h(0,"aPosition")
if(t==null)H.a_("Unknown canonical aPosition")
s=y.h(0,"aPosition")
J.bF(z.a,v)
z.bK(0,s,0)
z.c6(0,w.h(0,"aPosition"),s,t.b2(),5126,!1,0,0)
y=H.x(c.cs(),"$isa",[P.D],"$asa")
u.y=J.c8(z.a)
x=u.ch.length
if(x<768){u.say(new Uint8Array(H.bW(y)))
u.Q=5121}else if(x<196608){u.say(new Uint16Array(H.bW(y)))
u.Q=5123}else{u.say(new Uint32Array(H.bW(y)))
u.Q=5125}J.bF(z.a,v)
y=u.y
x=u.cx
J.c6(z.a,34963,y)
J.cL(z.a,34963,x,35048)
G.j6(c,u)
return u},
b_:{"^":"b;"},
aK:{"^":"b_;d,a,b,c",
ar:function(){return this.d},
l:function(a){var z,y,x,w
z=H.k(["{"+new H.dD(H.km(this)).l(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.ap(y,[H.q(y,0)]),x=x.gD(x);x.u();){w=x.d
C.a.j(z,H.f(w)+": "+H.f(y.h(0,w)))}return C.a.a8(z,"\n")}},
fw:{"^":"b;0a,b",
bK:function(a,b,c){J.f3(this.a,b)
if(c>0)J.fl(this.a,b,c)},
c6:function(a,b,c,d,e,f,g,h){J.c6(this.a,34962,b)
J.fm(this.a,c,d,e,!1,g,h)}},
fZ:{"^":"b;a,b,c,d,e"},
Z:{"^":"b;af:a>,a5:b>,a6:c>",p:{
L:function(a,b,c){return new G.Z(a,b,c)}}},
aI:{"^":"b;af:a>,a5:b>,a6:c>,d"},
bO:{"^":"b;a,b,c,d,e",
T:function(a){switch($.aa().h(0,a).a){case"vec2":this.e.i(0,a,H.k([],[T.t]))
break
case"vec3":this.e.i(0,a,H.k([],[T.e]))
break
case"vec4":this.e.i(0,a,H.k([],[T.b7]))
break
case"float":this.e.i(0,a,H.k([],[P.a3]))
break
case"uvec4":this.e.i(0,a,H.k([],[[P.a,P.D]]))
break}},
cp:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)C.a.j(y,new G.aI(z,z+1,z+2,z+3))},
ap:function(a){var z,y,x,w,v
H.x(a,"$isa",[T.e],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.G)(a),++x){w=a[x]
v=new T.e(new Float32Array(3))
v.v(w)
C.a.j(y,v)}},
an:function(a,b){var z,y,x,w,v,u,t
z=[T.t]
H.x(b,"$isa",z,"$asa")
y=H.x(this.e.h(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.G)(b),++w){v=b[w]
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.j(y,new T.t(u))}},
ao:function(a,b){var z,y,x,w,v,u
z=[T.e]
H.x(b,"$isa",z,"$asa")
y=H.x(this.e.h(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.G)(b),++w){v=b[w]
u=new T.e(new Float32Array(3))
u.v(v)
x.j(y,u)}},
cs:function(){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.k(x,[P.D])
for(x=z.length,v=0,u=0;u<z.length;z.length===x||(0,H.G)(z),++u){t=z[u]
C.a.i(w,v,t.a)
C.a.i(w,v+1,t.b)
C.a.i(w,v+2,t.c)
v+=3}for(z=y.length,u=0;u<y.length;y.length===z||(0,H.G)(y),++u){s=y[u]
x=s.a
C.a.i(w,v,x)
C.a.i(w,v+1,s.b)
r=s.c
C.a.i(w,v+2,r)
C.a.i(w,v+3,x)
C.a.i(w,v+4,r)
C.a.i(w,v+5,s.d)
v+=6}return w},
cu:function(a,b){var z,y,x,w,v,u,t
z=H.k([],[T.t])
this.e.i(0,"aTexUV",z)
for(y=b-1,x=a-1,w=0;w<b;++w)for(v=w/y,u=0;u<a;++u){t=new Float32Array(2)
t[0]=v
t[1]=u/x
C.a.j(z,new T.t(t))}},
ct:function(a,b,c){var z,y,x,w,v,u,t,s,r
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
C.a.j(z,new G.aI(v+s,r+s,r+t,v+t))
t=s}w=u}},
l:function(a){var z,y,x,w,v
z=H.k(["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"],[P.d])
for(y=this.e,x=new H.ap(y,[H.q(y,0)]),x=x.gD(x);x.u();){w=x.d
v=$.aa().h(0,w).a
C.a.j(z,H.f(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.a8(z," ")}},
dB:{"^":"b;a,b,c"},
dA:{"^":"b;a,b,c"},
hm:{"^":"aK;d,a,b,c",p:{
bt:function(a){var z=P.S(P.d,P.b)
z.i(0,"cDepthTest",!0)
z.i(0,"cDepthWrite",!0)
z.i(0,"cBlendEquation",$.en())
z.i(0,"cStencilFunc",$.ex())
return new G.hm(z,a,!1,!0)}}},
ho:{"^":"b_;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
say:function(a){this.cx=H.x(a,"$isa",[P.D],"$asa")},
b0:function(a,b,c){var z,y
C.i.au(a,0)
H.h(b,"$isai")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.c6(z.a,34962,y)
J.cL(z.a,34962,b,35048)},
cv:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a2:function(a,b,c){var z,y,x,w,v
z=J.cH(a,0)===105
if(z&&this.z===0)this.z=C.c.aZ(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.c8(x.a))
this.b0(a,b,c)
w=$.aa().h(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.h(0,a)
J.bF(x.a,this.e)
x.bK(0,v,z?1:0)
x.c6(0,y.h(0,a),v,w.b2(),5126,!1,0,0)},
l:function(a){var z,y,x,w
z=this.cx
y=H.k(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=new H.ap(z,[H.q(z,0)]),x=x.gD(x);x.u();){w=x.d
C.a.j(y,H.f(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.a8(y,"  ")}},
hG:{"^":"aK;x,y,z,Q,ch,cx,cy,db,dx,dy,d,a,b,c",
ar:function(){var z,y
z=this.z
z.v(this.x.d)
y=this.Q
y.v(this.y)
y.aI(0,z)
z=this.d
z.i(0,"uPerspectiveViewMatrix",y)
return z},
a3:function(){var z,y,x,w,v,u,t,s,r,q
z=this.cy
y=this.cx
x=z-y
w=this.y
v=this.db
u=v+x/this.ch
t=this.dx
s=this.dy
r=u-v
q=s-t
w.aU()
w=w.a
w[0]=2/x
w[5]=2/r
w[10]=-2/q
w[12]=-(z+y)/x
w[13]=-(u+v)/r
w[14]=-(s+t)/q
w[15]=1},
aq:function(a,b){var z
if(typeof b!=="number")return H.bi(b)
z=a/b
if(this.ch===z)return
this.ch=z
this.a3()}},
hJ:{"^":"aK;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
aq:function(a,b){var z
if(typeof b!=="number")return H.bi(b)
z=a/b
if(this.z===z)return
this.z=z
this.a3()},
a3:function(){var z,y,x,w,v,u
z=this.db
y=this.z
x=this.Q
w=this.ch
v=Math.tan(this.y*3.141592653589793/180*0.5)
u=x-w
z.aU()
z=z.a
z[0]=1/(v*y)
z[5]=1/v
z[10]=(w+x)/u
z[11]=-1
z[14]=2*x*w/u},
ar:function(){var z,y,x
z=this.x
y=this.d
y.i(0,"uEyePosition",z.aL())
x=this.cy
x.v(z.d)
z=this.cx
z.v(this.db)
z.aI(0,x)
y.i(0,"uPerspectiveViewMatrix",z)
return y}},
l7:{"^":"b;"},
hY:{"^":"b_;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cB:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){t=z[u]
x.i(0,t,J.cO(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){t=z[u]
x.i(0,t,J.cO(w.a,v,t))}},
cE:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.k([],[P.d])
x=H.k([],[P.d])
for(y=new H.ap(y,[H.q(y,0)]),y=y.gD(y);y.u();){w=y.d
if(!z.ah(0,w))C.a.j(x,w)}for(z=this.x,z=P.jd(z,z.r,H.q(z,0)),y=this.Q;z.u();){w=z.d
if(!y.A(0,w))C.a.j(x,w)}return x},
cH:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.x(b,"$isM",[P.d,P.b],"$asM")
z=Date.now()
for(y=new H.ap(b,[H.q(b,0)]),y=y.gD(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.u();){s=y.d
switch(J.cH(s,0)){case 117:if(w.ah(0,s)){r=b.h(0,s)
if(v.ah(0,s))H.c5("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.i(0,s,a)
q=$.aa().h(0,s)
if(q==null)H.a_("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.Q(r)
J.cc(x.a,p,r)}else if(!!J.B(r).$ish5)J.fj(x.a,p,r)
break
case"float":if(q.c===0){H.ea(r)
J.fh(x.a,p,r)}else if(!!J.B(r).$isai)J.fi(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.ak(r,"$isN").a
J.cU(x.a,p,!1,s)}else if(!!J.B(r).$isai)J.cU(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=H.ak(r,"$isaq").a
J.cT(x.a,p,!1,s)}else if(!!J.B(r).$isai)J.cT(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.cS(o,p,H.ak(r,"$isb7").a)
else J.cS(o,p,H.h(r,"$isai"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cR(o,p,H.ak(r,"$ise").a)
else J.cR(o,p,H.h(r,"$isai"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cQ(o,p,H.ak(r,"$ist").a)
else J.cQ(o,p,H.h(r,"$isai"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.bi(s)
J.cI(x.a,33984+s)
s=H.ak(r,"$isij").cw()
J.cK(x.a,3553,s)
s=this.ch
J.cc(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.L()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.bi(s)
J.cI(x.a,33984+s)
s=H.ak(r,"$isij").cw()
J.cK(x.a,34067,s)
s=this.ch
J.cc(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.L()
this.ch=s+1
break
default:H.c5("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":s=J.aF(r,!0)
o=x.a
if(s)J.bG(o,2929)
else J.c9(o,2929)
break
case"cStencilFunc":H.ak(r,"$isdB")
s=r.a
o=x.a
if(s===1281)J.c9(o,2960)
else{J.bG(o,2960)
o=r.b
n=r.c
J.fe(x.a,s,o,n)}break
case"cDepthWrite":H.c_(r)
J.eY(x.a,r)
break
case"cBlendEquation":H.ak(r,"$isdA")
s=r.a
o=x.a
if(s===1281)J.c9(o,3042)
else{J.bG(o,3042)
o=r.b
n=r.c
J.eS(x.a,o,n)
J.eR(x.a,s)}break}++t
break}}m=P.fQ(0,0,0,Date.now()-new P.bL(z,!1).a,0,0)
""+t
m.l(0)},
cr:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.x(b,"$isa",[G.aK],"$asa")
Date.now()
z=this.d
J.fk(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b8()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.G)(b),++x){w=b[x]
this.cH(w.a,w.ar())}y=this.Q
y.a7(0)
for(v=a.cy,v=new H.ap(v,[H.q(v,0)]),v=v.gD(v);v.u();)y.j(0,v.d)
u=this.cE()
if(u.length!==0)P.aD("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(u)))
J.bF(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.cv()
s=a.Q
r=a.z
if(t)J.eP(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.f1(q,y,v,s,0,r)
else J.f0(q,y,v,s,0)}else{s=z.a
if(r>1)J.f_(s,y,0,v,r)
else J.eZ(s,y,0,v)}if(t)J.f4(z.a)},
p:{
hZ:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
y=P.a5(null,null,null,z)
x=c.b
w=d.b
v=H.x(c.f,"$isa",[z],"$asa")
u=J.eW(b.a)
t=G.dK(b.a,35633,x)
J.cJ(b.a,u,t)
s=G.dK(b.a,35632,w)
J.cJ(b.a,u,s)
if(v.length>0)J.fg(b.a,u,v,35980)
J.fd(b.a,u)
if(!H.c_(J.fc(b.a,u,35714)))H.a_(J.fb(b.a,u))
z=new G.hY(b,c,d,u,P.cm(c.c,z),P.S(z,P.b),P.S(z,z),y,a,!1,!0)
z.cB(a,b,c,d)
return z}}},
C:{"^":"b;a,b,c",
b2:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
i5:{"^":"b;a,0b,c,d,e,f,r,x",
co:function(a){var z,y,x,w
H.x(a,"$isa",[P.d],"$asa")
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
C.a.j(z,w)
y.i(0,w,this.r);++this.r}C.a.aW(z)},
b_:function(a){var z,y,x
H.x(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.G)(a),++x)C.a.j(y,a[x])
C.a.aW(y)},
cC:function(a,b){this.b=this.cI(!0,H.x(a,"$isa",[P.d],"$asa"),b)},
b3:function(a){return this.cC(a,null)},
cI:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.x(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.k(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.G)(y),++u){t=y[u]
s=$.aa().h(0,t)
C.a.j(w,"layout (location="+H.f(v.h(0,t))+") in "+s.a+" "+H.f(t)+";")}C.a.j(w,"")
r=x?"in":"out"
if(x)C.a.j(w,"out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.j(z,u)
q=z[u]
s=$.aa().h(0,q)
C.a.j(w,r+" "+s.a+" "+H.f(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){q=z[u]
s=$.aa().h(0,q)
C.a.j(w,r+" "+s.a+" "+H.f(q)+";")}C.a.j(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){q=z[u]
s=$.aa().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.j(w,"uniform "+s.a+" "+H.f(q)+p+";")}C.a.j(w,"")
C.a.j(w,"void main(void) {")
C.a.I(w,b)
C.a.j(w,"}")
return C.a.a8(w,"\n")},
p:{
dt:function(a){var z,y
z=P.d
y=[z]
return new G.i5(a,H.k([],y),H.k([],y),H.k([],y),H.k([],y),0,P.S(z,P.D))}}},
dv:{"^":"b_;",
aL:function(){var z,y,x
z=this.e
y=this.d.a
x=z.a
x[0]=y[12]
x[1]=y[13]
x[2]=y[14]
return z},
Y:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}}}],["","",,R,{"^":"",
du:function(a,b,c,d,e,f,g,h,i){return G.bP("cube",a,B.fG(!0,c,d,e,f,g,h,i))},
jf:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.h(W.iR("span",null),"$isU")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.w).at(y,"float")
y.setProperty(x,"left","")
x=C.w.at(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.p.K(z,v)}return z},
ia:{"^":"b;",
cD:function(a,b,c){var z,y
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
y=J.n(z)
y.K(z,this.b)
y.K(z,this.d)
y.K(z,this.c)}},
ib:{"^":"ia;e,f,a,b,c,d",
cG:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.x.dL(y,2)+" fps"
C.p.cc(this.c,b)
x=C.c.U(30*C.x.dh(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.h(z.firstChild,"$isU")
v=w.style
u=""+x+"px"
v.height=u
C.p.K(z,w)},
cF:function(a){return this.cG(a,"")}}}],["","",,A,{"^":"",
eb:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.x(e,"$isa",[G.aK],"$asa")
z=b.dx
z.v(c)
y=b.d
z.aI(0,y)
x=b.cx
H.f(b)
w=C.a.gdB(e)
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
v.dk(new T.aq(u))
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
a.cr(x,e,d)
if(0>=e.length)return H.j(e,-1)
e.pop()
for(y=b.cy,r=0;!1;++r){if(r>=0)return H.j(y,r)
A.eb(a,y[r],z,d,e)}},
b0:{"^":"dv;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
l:function(a){return"NODE["+this.a+"]"}},
co:{"^":"b_;d,e,f,a,b,c"},
hX:{"^":"b_;d,e,f,r,x,y,z,Q,a,b,c",
cq:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.d
y=this.r
x=this.x
w=this.z
v=this.Q
u=z.a
z=z.b
J.eQ(u.a,36160,z)
J.fn(u.a,x,this.y,w,v)
if(y!==0)J.eT(u.a,y)
for(z=this.f,y=z.length,x=P.d,w=P.b,t=0;t<z.length;z.length===y||(0,H.G)(z),++t){s=z[t]
r=s.e
C.a.j(r,new G.aK(P.S(x,w),"transforms",!1,!0))
q=new T.N(new Float32Array(16))
q.G()
for(v=s.f,u=v.length,p=s.d,o=0;o<v.length;v.length===u||(0,H.G)(v),++o)A.eb(p,v[o],q,a,r)
if(0>=r.length)return H.j(r,-1)
r.pop()}},
b1:function(){return this.cq(null)},
p:{
dr:function(a,b,c){var z=new A.hX(c,b,H.k([],[A.co]),17664,0,0,0,0,a,!1,!0)
z.d=new G.fZ(b,null,null,null,null)
return z}}}}],["","",,V,{}],["","",,B,{"^":"",
fG:function(a5,a6,a7,a8,a9,b0,b1,b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
z=-b0
y=-b1
x=new T.e(new Float32Array(3))
x.q(z,y,b2)
w=new T.e(new Float32Array(3))
w.q(b0,y,b2)
v=new T.e(new Float32Array(3))
v.q(b0,b1,b2)
u=new T.e(new Float32Array(3))
u.q(z,b1,b2)
t=-b2
s=new T.e(new Float32Array(3))
s.q(z,y,t)
r=new T.e(new Float32Array(3))
r.q(z,b1,t)
q=new T.e(new Float32Array(3))
q.q(b0,b1,t)
p=new T.e(new Float32Array(3))
p.q(b0,y,t)
o=new T.e(new Float32Array(3))
o.q(z,b1,t)
n=new T.e(new Float32Array(3))
n.q(z,b1,b2)
m=new T.e(new Float32Array(3))
m.q(b0,b1,b2)
l=new T.e(new Float32Array(3))
l.q(b0,b1,t)
k=new T.e(new Float32Array(3))
k.q(b0,y,b2)
j=new T.e(new Float32Array(3))
j.q(z,y,b2)
i=new T.e(new Float32Array(3))
i.q(z,y,t)
h=new T.e(new Float32Array(3))
h.q(b0,y,t)
g=new T.e(new Float32Array(3))
g.q(b0,y,t)
f=new T.e(new Float32Array(3))
f.q(b0,b1,t)
e=new T.e(new Float32Array(3))
e.q(b0,b1,b2)
d=new T.e(new Float32Array(3))
d.q(b0,y,b2)
c=new T.e(new Float32Array(3))
c.q(z,y,t)
b=new T.e(new Float32Array(3))
b.q(z,y,b2)
y=new T.e(new Float32Array(3))
y.q(z,b1,b2)
a=new T.e(new Float32Array(3))
a.q(z,b1,t)
t=[T.e]
a0=H.k([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a],t)
z=new T.t(new Float32Array(2))
z.w(a7,a9)
y=new T.t(new Float32Array(2))
y.w(a6,a9)
x=new T.t(new Float32Array(2))
x.w(a6,a8)
w=new T.t(new Float32Array(2))
w.w(a7,a8)
v=new T.t(new Float32Array(2))
v.w(a6,a9)
u=new T.t(new Float32Array(2))
u.w(a6,a8)
s=new T.t(new Float32Array(2))
s.w(a7,a8)
r=new T.t(new Float32Array(2))
r.w(a7,a9)
q=new T.t(new Float32Array(2))
q.w(a7,a8)
p=new T.t(new Float32Array(2))
p.w(a7,a9)
o=new T.t(new Float32Array(2))
o.w(a6,a9)
n=new T.t(new Float32Array(2))
n.w(a6,a8)
m=new T.t(new Float32Array(2))
m.w(a6,a8)
l=new T.t(new Float32Array(2))
l.w(a7,a8)
k=new T.t(new Float32Array(2))
k.w(a7,a9)
j=new T.t(new Float32Array(2))
j.w(a6,a9)
i=new T.t(new Float32Array(2))
i.w(a6,a9)
h=new T.t(new Float32Array(2))
h.w(a6,a8)
g=new T.t(new Float32Array(2))
g.w(a7,a8)
f=new T.t(new Float32Array(2))
f.w(a7,a9)
e=new T.t(new Float32Array(2))
e.w(a7,a9)
d=new T.t(new Float32Array(2))
d.w(a6,a9)
c=new T.t(new Float32Array(2))
c.w(a6,a8)
b=new T.t(new Float32Array(2))
b.w(a7,a8)
a1=H.k([z,y,x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b],[T.t])
a2=new G.bO(!1,H.k([],[G.Z]),H.k([],[G.aI]),H.k([],t),P.S(P.d,[P.a,,]))
a2.T("aTexUV")
a2.T("aNormal")
a2.cp(6)
a2.ap(a0)
a2.an("aTexUV",a1)
for(a3=0;z=$.eI(),a3<6;++a3){a4=z[a3]
a2.ao("aNormal",H.k([a4,a4,a4,a4],t))}return a2},
fI:function(a,b,c,a0,a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=c/2
y=[T.e]
x=H.k([],y)
w=H.k([],[T.t])
v=H.k([],y)
u=new T.e(new Float32Array(3))
u.q(0,z,0)
C.a.j(x,u)
u=new T.t(new Float32Array(2))
u.w(0,0)
C.a.j(w,u)
u=new T.e(new Float32Array(3))
u.q(0,1,0)
C.a.j(v,u)
u=-z
t=new T.e(new Float32Array(3))
t.q(0,u,0)
C.a.j(x,t)
t=new T.t(new Float32Array(2))
t.w(1,1)
C.a.j(w,t)
t=new T.e(new Float32Array(3))
t.q(0,-1,0)
C.a.j(v,t)
for(s=0;s<a0;++s){r=s/a0
t=r*3.141592653589793*2
q=Math.sin(t)
p=Math.cos(t)
t=new Float32Array(3)
t[0]=q*a
t[1]=z
t[2]=p*a
C.a.j(x,new T.e(t))
t=new Float32Array(2)
t[0]=r
t[1]=1
C.a.j(w,new T.t(t))
t=new Float32Array(3)
t[0]=0
t[1]=1
t[2]=0
C.a.j(v,new T.e(t))
t=new Float32Array(3)
t[0]=q*b
t[1]=u
t[2]=p*b
C.a.j(x,new T.e(t))
t=new Float32Array(2)
t[0]=r
t[1]=0
C.a.j(w,new T.t(t))
t=new Float32Array(3)
t[0]=0
t[1]=-1
t[2]=0
C.a.j(v,new T.e(t))}for(u=2*a0,s=0;s<u;s=o){o=s+2
if(o>=x.length)return H.j(x,o)
C.a.j(x,x[o])
t=s+3
if(t>=x.length)return H.j(x,t)
C.a.j(x,x[t])
if(o>=w.length)return H.j(w,o)
C.a.j(w,w[o])
if(t>=w.length)return H.j(w,t)
C.a.j(w,w[t])
n=x.length
if(o>=n)return H.j(x,o)
m=x[o]
if(t>=n)return H.j(x,t)
l=x[t]
t=s+4
if(t>=n)return H.j(x,t)
k=x[t]
t=new Float32Array(3)
j=new T.e(new Float32Array(3))
G.hD(m,l,k,new T.e(t),j)
C.a.j(v,j)
C.a.j(v,j)}u=H.k([],[G.Z])
t=H.k([],[G.aI])
i=new G.bO(!1,u,t,H.k([],y),P.S(P.d,[P.a,,]))
i.T("aTexUV")
i.ap(x)
i.an("aTexUV",w)
i.T("aNormal")
i.ao("aNormal",v)
for(h=a0*2,s=0;s<a0;s=f){g=s*2+2
l=g+1
f=s+1
e=(f===a0?0:f)*2+2
d=e+1
C.a.j(u,new G.Z(0,g,e))
C.a.j(u,new G.Z(1,d,l))
C.a.j(t,new G.aI(h+e,h+g,h+l,h+d))}return i},
h3:function(a1,a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=[G.Z]
y=H.k([],z)
x=[T.e]
w=H.k([],x)
C.a.I(y,$.ev())
C.a.I(w,$.ew())
for(v=0;v<a3;++v,y=u){u=H.k([],z)
for(t=y.length,s=0;s<y.length;y.length===t||(0,H.G)(y),++s){r=y[s]
q=J.cM(r)
if(q>=w.length)return H.j(w,q)
q=w[q]
p=new T.e(new Float32Array(3))
p.v(q)
q=r.ga5(r)
if(q>=w.length)return H.j(w,q)
p.j(0,w[q])
p.S(0,0.5)
p.C(0)
q=r.ga5(r)
if(q>=w.length)return H.j(w,q)
q=w[q]
o=new T.e(new Float32Array(3))
o.v(q)
q=r.ga6(r)
if(q>=w.length)return H.j(w,q)
o.j(0,w[q])
o.S(0,0.5)
o.C(0)
q=r.ga6(r)
if(q>=w.length)return H.j(w,q)
q=w[q]
n=new T.e(new Float32Array(3))
n.v(q)
q=r.gaf(r)
if(q>=w.length)return H.j(w,q)
n.j(0,w[q])
n.S(0,0.5)
n.C(0)
m=w.length
C.a.j(w,p)
l=w.length
C.a.j(w,o)
k=w.length
C.a.j(w,n)
C.a.j(u,new G.Z(r.gaf(r),m,k))
C.a.j(u,new G.Z(r.ga5(r),l,m))
C.a.j(u,new G.Z(r.ga6(r),k,l))
C.a.j(u,new G.Z(m,l,k))}}z=H.k([],z)
t=H.k([],[G.aI])
q=H.k([],x)
j=new G.bO(!1,z,t,q,P.S(P.d,[P.a,,]))
j.T("aTexUV")
j.T("aNormal")
for(t=y.length,i=[T.t],s=0;s<y.length;y.length===t||(0,H.G)(y),++s){r=y[s]
h=J.cM(r)
if(h>=w.length)return H.j(w,h)
g=w[h]
h=r.ga5(r)
if(h>=w.length)return H.j(w,h)
f=w[h]
h=r.ga6(r)
if(h>=w.length)return H.j(w,h)
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
j.ao("aNormal",H.k([g,f,e],x))
h=new T.e(new Float32Array(3))
h.v(g)
h.S(0,a2)
d=new T.e(new Float32Array(3))
d.v(f)
d.S(0,a2)
a0=new T.e(new Float32Array(3))
a0.v(e)
a0.S(0,a2)
a0=H.x(H.k([h,d,a0],x),"$isa",x,"$asa")
v=q.length
C.a.j(z,new G.Z(v,v+1,v+2))
j.ap(a0)
j.an("aTexUV",H.k([new T.t(c),new T.t(b),new T.t(a)],i))}return j},
il:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=B.hH(new B.im(e,d,f,c),0,6.283185307179586,g,0.001,!0)
y=z.length
if(0>=y)return H.j(z,0)
C.a.j(z,z[0])
if(1>=z.length)return H.j(z,1)
C.a.j(z,z[1])
x=g+1
w=B.io(z,h,i)
for(y=w.length,v=0;v<w.length;w.length===y||(0,H.G)(w),++v){u=w[v]
if(0>=u.length)return H.j(u,0)
C.a.j(u,u[0])
if(1>=u.length)return H.j(u,1)
C.a.j(u,u[1])}t=h+1
y=H.k([],[G.Z])
s=H.k([],[G.aI])
r=[T.e]
q=H.k([],r)
p=new G.bO(!1,y,s,q,P.S(P.d,[P.a,,]))
for(y=w.length,v=0;v<w.length;w.length===y||(0,H.G)(w),++v){o=w[v]
for(n=0;n<o.length;n+=2){s=H.h(o[n],"$ise")
s.toString
m=new T.e(new Float32Array(3))
m.v(s)
C.a.j(q,m)}}p.ct(t,x,!1)
p.cu(t,x)
p.T("aNormal")
for(y=w.length,s=p.e,v=0;v<w.length;w.length===y||(0,H.G)(w),++v){o=w[v]
for(n=0;q=o.length,n<q;n+=2){m=n+1
if(m>=q)return H.j(o,m)
m=H.h(o[m],"$ise")
l=H.x(s.h(0,"aNormal"),"$isa",r,"$asa")
m.toString
q=new T.e(new Float32Array(3))
q.v(m);(l&&C.a).j(l,q)}}return p},
io:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=[T.e]
H.x(a,"$isa",z,"$asa")
y=H.k([],[[P.a,T.e]])
x=new Float32Array(3)
w=new T.e(x)
v=new Float32Array(3)
u=new T.e(v)
t=new Float32Array(3)
s=new T.e(t)
for(r=0;q=a.length,r<q;r+=2){p=a[r]
o=r+1
if(o>=q)return H.j(a,o)
n=a[o]
m=H.k([],z)
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
w.v(p)
w.ag(u,g)
w.ag(s,f)
q=new T.e(new Float32Array(3))
q.v(w)
C.a.j(m,q)
x[2]=0
x[1]=0
x[0]=0
w.ag(u,g)
w.ag(s,f)
w.C(0)
q=new T.e(new Float32Array(3))
q.v(w)
C.a.j(m,q)}}return y},
hH:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
H.m(a,{func:1,ret:-1,args:[P.a3,T.e]})
z=H.k([],[T.e])
y=new T.e(new Float32Array(3))
x=new T.e(new Float32Array(3))
for(w=(c-b)/(d-0),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+e,x)
x.ab(0,y)
t=new T.e(new Float32Array(3))
t.v(y)
C.a.j(z,t)
t=new T.e(new Float32Array(3))
t.v(x)
C.a.j(z,t)}return z},
im:{"^":"o:24;a,b,c,d",
$2:function(a,b){var z,y,x,w,v,u
z=this.c
y=this.a*a
x=Math.cos(y)
w=Math.sin(y)
y=this.b*a
v=Math.cos(y)
u=Math.sin(y)
y=z*(2+x)*0.5
b.sa0(0,y*v)
b.sW(0,y*u)
b.sak(0,this.d*z*0.5*w)}}}],["","",,D,{"^":"",hc:{"^":"b;a,b,c",
cz:function(a){var z,y
a=document
z=W.aY
y={func:1,ret:-1,args:[z]}
W.aB(a,"keydown",H.m(new D.he(this),y),!1,z)
W.aB(a,"keyup",H.m(new D.hf(this),y),!1,z)},
p:{
hd:function(a){var z=P.D
z=new D.hc(P.a5(null,null,null,z),P.a5(null,null,null,z),P.a5(null,null,null,z))
z.cz(a)
return z}}},he:{"^":"o:11;a",
$1:function(a){var z
H.h(a,"$isaY")
z=this.a
z.a.j(0,a.which)
z.b.j(0,a.which)}},hf:{"^":"o:11;a",
$1:function(a){var z
H.h(a,"$isaY")
z=this.a
z.a.bR(0,a.which)
z.c.j(0,a.which)}},hr:{"^":"b;a,b,c,d,e,f,r,x",
cA:function(a){var z,y,x
if(a==null)a=document
z=J.n(a)
y=z.gbO(a)
x=H.q(y,0)
W.aB(y.a,y.b,H.m(new D.ht(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbN(a)
y=H.q(x,0)
W.aB(x.a,x.b,H.m(new D.hu(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbP(a)
x=H.q(y,0)
W.aB(y.a,y.b,H.m(new D.hv(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbQ(a)
x=H.q(z,0)
W.aB(z.a,z.b,H.m(new D.hw(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
hs:function(a){var z=P.D
z=new D.hr(P.a5(null,null,null,z),P.a5(null,null,null,z),P.a5(null,null,null,z),0,0,0,0,0)
z.cA(a)
return z}}},ht:{"^":"o:3;a",
$1:function(a){var z,y
H.h(a,"$isW")
a.preventDefault()
z=this.a
y=J.n(a)
z.r=H.Q(y.gbM(a).a)
z.x=H.Q(y.gbM(a).b)
z.d=a.movementX
z.e=a.movementY}},hu:{"^":"o:3;a",
$1:function(a){var z
H.h(a,"$isW")
a.preventDefault()
P.aD("BUTTON "+H.f(a.button))
z=this.a
z.a.j(0,a.button)
z.b.j(0,a.button)}},hv:{"^":"o:3;a",
$1:function(a){var z
H.h(a,"$isW")
a.preventDefault()
z=this.a
z.a.bR(0,a.button)
z.c.j(0,a.button)}},hw:{"^":"o:25;a",
$1:function(a){H.h(a,"$isaL")
a.preventDefault()
this.a.f=H.Q(C.ab.gdr(a))}},hF:{"^":"dv;ch,cx,cy,db,dx,dy,fr,fx,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bA:function(a){var z,y
z=C.f.dv(H.x(a,"$isl",[P.b],"$asl"),0,new A.ko(),P.D)
if(typeof z!=="number")return H.bi(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
ko:{"^":"o:26;",
$2:function(a,b){var z,y
H.Q(a)
z=J.al(b)
if(typeof a!=="number")return a.L()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",aq:{"^":"b;a",
v:function(a){var z,y
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
if(b>=9)return H.j(z,b)
return z[b]},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aq){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gB:function(a){return A.bA(this.a)},
P:function(a){var z,y,x
z=new Float32Array(3)
y=this.a
if(a>=9)return H.j(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.j(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.j(y,x)
z[2]=y[x]
return new T.e(z)},
dk:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if(m===0){this.v(a)
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
return m}},N:{"^":"b;a",
v:function(a){var z,y
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
if(b>=16)return H.j(z,b)
return z[b]},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.N){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gB:function(a){return A.bA(this.a)},
P:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.j(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.j(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.j(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.j(y,x)
z[3]=y[x]
return new T.b7(z)},
aU:function(){var z=this.a
z[0]=0
z[1]=0
z[2]=0
z[3]=0
z[4]=0
z[5]=0
z[6]=0
z[7]=0
z[8]=0
z[9]=0
z[10]=0
z[11]=0
z[12]=0
z[13]=0
z[14]=0
z[15]=0},
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
aI:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},t:{"^":"b;a",
w:function(a,b){var z=this.a
z[0]=a
z[1]=b},
l:function(a){var z=this.a
return"["+H.f(z[0])+","+H.f(z[1])+"]"},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.t){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gB:function(a){return A.bA(this.a)},
h:function(a,b){var z=this.a
if(b>=2)return H.j(z,b)
return z[b]},
gk:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
ga0:function(a){return this.a[0]},
gW:function(a){return this.a[1]}},e:{"^":"b;a",
q:function(a,b,c){var z=this.a
C.f.i(z,0,a)
C.f.i(z,1,b)
C.f.i(z,2,c)},
v:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
l:function(a){var z=this.a
return"["+H.f(z[0])+","+H.f(z[1])+","+H.f(z[2])+"]"},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.e){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gB:function(a){return A.bA(this.a)},
h:function(a,b){var z=this.a
if(b>=3)return H.j(z,b)
return z[b]},
gk:function(a){return Math.sqrt(this.gaj())},
gaj:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
C:function(a){var z,y,x
z=Math.sqrt(this.gaj())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aG:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bD:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.e(new Float32Array(3))
z.q(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
j:function(a,b){var z,y
z=H.h(b,"$ise").a
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
ag:function(a,b){var z,y
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
S:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
sa0:function(a,b){this.a[0]=b
return b},
sW:function(a,b){this.a[1]=b
return b},
sak:function(a,b){this.a[2]=b
return b},
ga0:function(a){return this.a[0]},
gW:function(a){return this.a[1]},
gak:function(a){return this.a[2]},
p:{
J:function(a,b,c){var z=new T.e(new Float32Array(3))
z.q(a,b,c)
return z}}},b7:{"^":"b;a",
l:function(a){var z=this.a
return H.f(z[0])+","+H.f(z[1])+","+H.f(z[2])+","+H.f(z[3])},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.b7){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gB:function(a){return A.bA(this.a)},
h:function(a,b){var z=this.a
if(b>=4)return H.j(z,b)
return z[b]},
gk:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
ga0:function(a){return this.a[0]},
gW:function(a){return this.a[1]},
gak:function(a){return this.a[2]},
gdO:function(a){return this.a[3]}}}],["","",,K,{"^":"",
ei:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z={}
y=document
x=C.q.ca(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.ib(0,0,x,w,y.createElement("div"),R.jf("blue","gray",90,30))
u.cD(x,"blue","gray")
t=H.h(C.q.dE(y,"#webgl-canvas"),"$iscf")
s=new G.fw(t)
y=P.d
x=P.b
v=(t&&C.H).c9(t,"webgl2",P.dh(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],y,x))
s.a=v
if(v==null)H.a_(P.d9('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
r="ChronosGL Config: "+H.f(J.fa(v))
if($.ec>0)P.aD("I: "+r)
J.eU(v,0,0,0,1)
J.bG(v,2929)
v=new Float32Array(3)
r=D.hd(null)
q=D.hs(t)
p=new T.N(new Float32Array(16))
p.G()
o=new Float32Array(3)
n=new Float32Array(3)
m=new Float32Array(3)
l=new D.hF(25,10,0,0,new T.e(v),-0.02,r,q,p,new T.e(o),new T.e(n),new T.e(m),new T.e(new Float32Array(3)),"camera:orbit",!1,!0)
k=G.hZ("textured",s,$.eL(),$.eK())
v=new Float32Array(16)
r=new Float32Array(16)
q=new T.N(new Float32Array(16))
q.G()
j=new G.hG(l,new T.N(v),new T.N(r),q,1,-20,20,-20,-20,100,P.S(y,x),"othrogrpahic",!1,!0)
j.a3()
i=A.dr("shadow",s,null)
q=[G.aK]
r=H.k([j],q)
v=[A.b0]
p=H.k([],v)
C.a.j(i.f,new A.co(k,r,p,"objects",!1,!0))
r=new T.N(new Float32Array(16))
r.G()
o=new T.N(new Float32Array(16))
o.G()
h=new G.hJ(l,50,1,0.1,1000,r,o,new T.N(new Float32Array(16)),P.S(y,x),"perspective",!1,!0)
h.a3()
g=A.dr("perspective",s,null)
g.r&=4294950911
y=H.k([h],q)
x=H.k([],v)
C.a.j(g.f,new A.co(k,y,x,"objects",!1,!0))
f=G.bt("mat1")
f.d.i(0,"uColor",$.eo())
e=G.bt("mat2")
e.d.i(0,"uColor",$.es())
d=G.bt("mat3")
d.d.i(0,"uColor",$.er())
c=G.bt("mat4")
c.d.i(0,"uColor",$.ep())
b=G.bt("plane")
b.d.i(0,"uColor",$.eq())
y=G.bP("icosahedron-3",k,B.h3(!0,1,3))
r=H.k([],v)
q=new Float32Array(9)
o=new T.N(new Float32Array(16))
o.G()
n=new T.N(new Float32Array(16))
n.G()
m=new Float32Array(3)
a=new Float32Array(3)
a0=new Float32Array(3)
y=new A.b0(f,y,r,new T.aq(q),o,n,new T.e(m),new T.e(a),new T.e(a0),new T.e(new Float32Array(3)),"sphere",!1,!0)
y.Y(0,0,0)
r=R.du(k,!0,1,0,1,0,1,1,1)
q=H.k([],v)
o=new Float32Array(9)
n=new T.N(new Float32Array(16))
n.G()
m=new T.N(new Float32Array(16))
m.G()
a=new Float32Array(3)
a0=new Float32Array(3)
a1=new Float32Array(3)
r=new A.b0(e,r,q,new T.aq(o),n,m,new T.e(a),new T.e(a0),new T.e(a1),new T.e(new Float32Array(3)),"cube",!1,!0)
r.Y(-5,0,-5)
q=G.bP("cylinder-32",k,B.fI(3,6,2,32,!0))
o=H.k([],v)
n=new Float32Array(9)
m=new T.N(new Float32Array(16))
m.G()
a=new T.N(new Float32Array(16))
a.G()
a0=new Float32Array(3)
a1=new Float32Array(3)
a2=new Float32Array(3)
q=new A.b0(d,q,o,new T.aq(n),m,a,new T.e(a0),new T.e(a1),new T.e(a2),new T.e(new Float32Array(3)),"cylinder",!1,!0)
q.Y(5,0,-5)
o=G.bP("torusknot",k,B.il(!0,!0,1,2,3,1,128,16,0.4,!1))
n=H.k([],v)
m=new Float32Array(9)
a=new T.N(new Float32Array(16))
a.G()
a0=new T.N(new Float32Array(16))
a0.G()
a1=new Float32Array(3)
a2=new Float32Array(3)
a3=new Float32Array(3)
o=new A.b0(c,o,n,new T.aq(m),a,a0,new T.e(a1),new T.e(a2),new T.e(a3),new T.e(new Float32Array(3)),"torus",!1,!0)
o.Y(5,0,5)
n=R.du(k,!0,1,0,1,0,20,0.1,20)
v=H.k([],v)
m=new Float32Array(9)
a=new T.N(new Float32Array(16))
a.G()
a0=new T.N(new Float32Array(16))
a0.G()
a1=new Float32Array(3)
a2=new Float32Array(3)
a3=new Float32Array(3)
v=new A.b0(b,n,v,new T.aq(m),a,a0,new T.e(a1),new T.e(a2),new T.e(a3),new T.e(new Float32Array(3)),"cube",!1,!0)
v.Y(0,-10,0)
a4=[y,r,q,o,v]
for(a5=0;a5<5;++a5){a6=a4[a5]
C.a.j(p,a6)
C.a.j(x,a6)}y=new K.kC(t,h,j,i,g)
y.$1(null)
x=W.a4
W.aB(window,"resize",H.m(y,{func:1,ret:-1,args:[x]}),!1,x)
z.a=0
new K.kB(z,l,i,g,u).$1(0)},
kC:{"^":"o:27;a,b,c,d,e",
$1:function(a){var z,y,x,w,v
z=this.a
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.aD("size change "+H.f(y)+" "+H.f(x))
if(typeof y!=="number")return y.aZ()
z=C.c.U(y,2)
this.b.aq(z,x)
this.c.aq(z,x)
w=this.d
w.z=z
w.Q=x
v=this.e
v.z=z
v.Q=x
w.x=z}},
kB:{"^":"o:28;a,b,c,d,e",
$1:function(a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
H.cC(a9)
if(typeof a9!=="number")return a9.aY()
z=this.a
z.a=a9+0
y=this.b
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
v=C.r.di(y.cy,-1.4707963267948965,1.4707963267948965)
y.cy=v
u=y.ch
t=y.cx
s=u*Math.cos(v)
y.Y(s*Math.cos(t),u*Math.sin(v),s*Math.sin(t))
t=y.dx
v=y.d.a
u=t.a
v[12]=v[12]+u[0]
v[13]=v[13]+u[1]
v[14]=v[14]+u[2]
r=new T.e(new Float32Array(3))
r.q(0,1,0)
u=y.aL()
q=new Float32Array(3)
p=new T.e(q)
p.v(u)
p.ab(0,t)
p.C(0)
o=r.bD(p)
o.C(0)
n=p.bD(o)
n.C(0)
t=o.aG(u)
m=n.aG(u)
u=p.aG(u)
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
d=Math.sqrt(k.gaj())
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
w.c.a7(0)
w.b.a7(0)
x.e=0
x.d=0
x.f=0
x.c.a7(0)
x.b.a7(0)
this.c.b1()
this.d.b1()
C.ac.gda(window).bT(this,-1)
this.e.cF(z.a)}}},1]]
setupProgram(dart,0,0)
J.B=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.de.prototype
return J.dd.prototype}if(typeof a=="string")return J.br.prototype
if(a==null)return J.ha.prototype
if(typeof a=="boolean")return J.h9.prototype
if(a.constructor==Array)return J.bp.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.b)return a
return J.c2(a)}
J.bf=function(a){if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(a.constructor==Array)return J.bp.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.b)return a
return J.c2(a)}
J.ed=function(a){if(a==null)return a
if(a.constructor==Array)return J.bp.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.b)return a
return J.c2(a)}
J.kk=function(a){if(typeof a=="number")return J.bq.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b6.prototype
return a}
J.kl=function(a){if(typeof a=="number")return J.bq.prototype
if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b6.prototype
return a}
J.ee=function(a){if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b6.prototype
return a}
J.n=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.b)return a
return J.c2(a)}
J.bz=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.b6.prototype
return a}
J.aF=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.B(a).F(a,b)}
J.ab=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kk(a).X(a,b)}
J.bk=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ky(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bf(a).h(a,b)}
J.cH=function(a,b){return J.ee(a).au(a,b)}
J.bE=function(a,b){return J.n(a).cZ(a,b)}
J.eN=function(a,b,c){return J.n(a).d_(a,b,c)}
J.cI=function(a,b){return J.n(a).bn(a,b)}
J.eO=function(a,b,c,d){return J.n(a).d7(a,b,c,d)}
J.cJ=function(a,b,c){return J.n(a).bp(a,b,c)}
J.eP=function(a,b){return J.n(a).dd(a,b)}
J.c6=function(a,b,c){return J.n(a).bq(a,b,c)}
J.eQ=function(a,b,c){return J.n(a).bs(a,b,c)}
J.cK=function(a,b,c){return J.n(a).bt(a,b,c)}
J.bF=function(a,b){return J.n(a).dg(a,b)}
J.eR=function(a,b){return J.n(a).bu(a,b)}
J.eS=function(a,b,c){return J.n(a).bv(a,b,c)}
J.cL=function(a,b,c,d){return J.n(a).bw(a,b,c,d)}
J.eT=function(a,b){return J.n(a).bx(a,b)}
J.eU=function(a,b,c,d,e){return J.n(a).by(a,b,c,d,e)}
J.eV=function(a,b){return J.kl(a).N(a,b)}
J.c7=function(a,b,c){return J.bf(a).dj(a,b,c)}
J.c8=function(a){return J.n(a).bA(a)}
J.eW=function(a){return J.n(a).bB(a)}
J.eX=function(a){return J.n(a).dq(a)}
J.eY=function(a,b){return J.n(a).bE(a,b)}
J.c9=function(a,b){return J.n(a).bF(a,b)}
J.eZ=function(a,b,c,d){return J.n(a).bG(a,b,c,d)}
J.f_=function(a,b,c,d,e){return J.n(a).ds(a,b,c,d,e)}
J.f0=function(a,b,c,d,e){return J.n(a).bH(a,b,c,d,e)}
J.f1=function(a,b,c,d,e,f){return J.n(a).dt(a,b,c,d,e,f)}
J.f2=function(a,b){return J.ed(a).t(a,b)}
J.bG=function(a,b){return J.n(a).bI(a,b)}
J.f3=function(a,b){return J.n(a).bJ(a,b)}
J.f4=function(a){return J.n(a).du(a)}
J.f5=function(a,b){return J.n(a).H(a,b)}
J.cM=function(a){return J.bz(a).gaf(a)}
J.f6=function(a){return J.n(a).gdc(a)}
J.al=function(a){return J.B(a).gB(a)}
J.bH=function(a){return J.ed(a).gD(a)}
J.aS=function(a){return J.bf(a).gk(a)}
J.f7=function(a){return J.n(a).gdD(a)}
J.f8=function(a){return J.n(a).gdJ(a)}
J.f9=function(a){return J.bz(a).gdO(a)}
J.bI=function(a){return J.bz(a).ga0(a)}
J.ca=function(a){return J.bz(a).gW(a)}
J.cN=function(a){return J.bz(a).gak(a)}
J.cb=function(a,b){return J.n(a).a1(a,b)}
J.fa=function(a){return J.n(a).al(a)}
J.fb=function(a,b){return J.n(a).aM(a,b)}
J.fc=function(a,b,c){return J.n(a).aN(a,b,c)}
J.cO=function(a,b,c){return J.n(a).aR(a,b,c)}
J.fd=function(a,b){return J.n(a).bL(a,b)}
J.cP=function(a){return J.n(a).dF(a)}
J.fe=function(a,b,c,d){return J.n(a).aX(a,b,c,d)}
J.ff=function(a){return J.ee(a).dK(a)}
J.bl=function(a){return J.B(a).l(a)}
J.fg=function(a,b,c,d){return J.n(a).dM(a,b,c,d)}
J.fh=function(a,b,c){return J.n(a).bW(a,b,c)}
J.fi=function(a,b,c){return J.n(a).bX(a,b,c)}
J.cc=function(a,b,c){return J.n(a).bY(a,b,c)}
J.fj=function(a,b,c){return J.n(a).bZ(a,b,c)}
J.cQ=function(a,b,c){return J.n(a).c_(a,b,c)}
J.cR=function(a,b,c){return J.n(a).c0(a,b,c)}
J.cS=function(a,b,c){return J.n(a).c1(a,b,c)}
J.cT=function(a,b,c,d){return J.n(a).c2(a,b,c,d)}
J.cU=function(a,b,c,d){return J.n(a).c3(a,b,c,d)}
J.fk=function(a,b){return J.n(a).c4(a,b)}
J.fl=function(a,b,c){return J.n(a).dN(a,b,c)}
J.fm=function(a,b,c,d,e,f,g){return J.n(a).c5(a,b,c,d,e,f,g)}
J.fn=function(a,b,c,d,e){return J.n(a).c7(a,b,c,d,e)}
I.aQ=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.o=W.bJ.prototype
C.H=W.cf.prototype
C.w=W.fD.prototype
C.p=W.fM.prototype
C.I=W.fO.prototype
C.J=W.h1.prototype
C.q=W.h2.prototype
C.K=J.i.prototype
C.a=J.bp.prototype
C.x=J.dd.prototype
C.c=J.de.prototype
C.r=J.bq.prototype
C.i=J.br.prototype
C.R=J.bs.prototype
C.f=H.hx.prototype
C.m=H.hz.prototype
C.V=W.hA.prototype
C.A=J.hK.prototype
C.B=W.hU.prototype
C.G=W.ii.prototype
C.v=J.b6.prototype
C.ab=W.aL.prototype
C.ac=W.iy.prototype
C.e=new P.jr()
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
C.S=H.k(I.aQ(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.T=H.k(I.aQ(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.U=H.k(I.aQ([]),[P.d])
C.t=H.k(I.aQ(["bind","if","ref","repeat","syntax"]),[P.d])
C.u=H.k(I.aQ(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
C.W=new G.C("vec3","vertex btangents",0)
C.d=new G.C("vec3","",0)
C.X=new G.C("vec4","delta from light",0)
C.n=new G.C("","",0)
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
$.aT=null
$.cX=null
$.ct=!1
$.eg=null
$.e7=null
$.el=null
$.c0=null
$.c3=null
$.cA=null
$.aN=null
$.b9=null
$.ba=null
$.cu=!1
$.K=C.e
$.ah=null
$.ch=null
$.d7=null
$.d6=null
$.d3=null
$.d2=null
$.d1=null
$.d0=null
$.ec=0
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
I.$lazy(y,x,w)}})(["l1","eu",function(){return H.ef("_$dart_dartClosure")},"lH","cE",function(){return H.ef("_$dart_js")},"mr","ey",function(){return H.ae(H.bT({
toString:function(){return"$receiver$"}}))},"ms","ez",function(){return H.ae(H.bT({$method$:null,
toString:function(){return"$receiver$"}}))},"mt","eA",function(){return H.ae(H.bT(null))},"mu","eB",function(){return H.ae(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"mx","eE",function(){return H.ae(H.bT(void 0))},"my","eF",function(){return H.ae(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"mw","eD",function(){return H.ae(H.dC(null))},"mv","eC",function(){return H.ae(function(){try{null.$method$}catch(z){return z.message}}())},"mA","eH",function(){return H.ae(H.dC(void 0))},"mz","eG",function(){return H.ae(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mK","cF",function(){return P.iB()},"n0","bj",function(){return[]},"kZ","et",function(){return{}},"mS","eJ",function(){return P.cm(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"mT","cG",function(){return P.S(P.d,P.bn)},"me","ex",function(){return new G.dB(1281,0,4294967295)},"kQ","en",function(){return new G.dA(1281,1281,1281)},"mZ","aa",function(){return P.dh(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.E,"aColorAlpha",C.Z,"aPosition",C.C,"aTexUV",C.a5,"aNormal",C.a8,"aBinormal",C.Y,"aCenter",C.D,"aPointSize",C.b,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.aa,"aBitangent",C.W,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.b,"iaColor",C.d,"vColor",C.E,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.C,"vPositionFromLight",C.X,"vCenter",C.D,"vDepth",C.a3,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.F,"uConvolutionMatrix",C.F,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a9,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a7,"uAnimationTable",C.h,"uTime",C.a6,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a0,"uLightDescs",C.a1,"uLightCount",C.b,"uLightTypes",C.a2,"uBumpScale",C.a4,"uNormalScale",C.a_],P.d,G.C)},"kV","eq",function(){return T.J(0.8,0.8,0.8)},"kT","eo",function(){return T.J(0,0,1)},"kX","es",function(){return T.J(1,0,0)},"kW","er",function(){return T.J(0,1,0)},"kU","ep",function(){return T.J(0,1,1)},"n5","eL",function(){var z,y
z=G.dt("SolidColor")
y=[P.d]
z.co(H.k(["aPosition"],y))
z.b_(H.k(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.b3(H.k(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"],y))
return z},"n4","eK",function(){var z,y
z=G.dt("SolidColorF")
y=[P.d]
z.b_(H.k(["uColor"],y))
z.b3(H.k(["oFragColor = vec4( uColor, 1.0 );"],y))
return z},"mP","eI",function(){return H.k([T.J(0,0,1),T.J(0,0,-1),T.J(0,1,0),T.J(0,-1,0),T.J(1,0,0),T.J(-1,0,0)],[T.e])},"lx","ev",function(){return H.k([G.L(0,11,5),G.L(0,5,1),G.L(0,1,7),G.L(0,7,10),G.L(0,10,11),G.L(1,5,9),G.L(5,11,4),G.L(11,10,2),G.L(10,7,6),G.L(7,1,8),G.L(3,9,4),G.L(3,4,2),G.L(3,2,6),G.L(3,6,8),G.L(3,8,9),G.L(4,9,5),G.L(2,4,11),G.L(6,2,10),G.L(8,6,7),G.L(9,8,1)],[G.Z])},"n6","eM",function(){return(1+P.kH(5))/2},"ly","ew",function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.eM()
y=T.J(-1,z,0)
y.C(0)
x=T.J(1,z,0)
x.C(0)
if(typeof z!=="number")return z.dP()
w=T.J(-1,-z,0)
w.C(0)
v=T.J(1,-z,0)
v.C(0)
u=T.J(0,-1,z)
u.C(0)
t=T.J(0,1,z)
t.C(0)
s=T.J(0,-1,-z)
s.C(0)
r=T.J(0,1,-z)
r.C(0)
q=T.J(z,0,-1)
q.C(0)
p=T.J(z,0,1)
p.C(0)
o=T.J(-z,0,-1)
o.C(0)
z=T.J(-z,0,1)
z.C(0)
return H.k([y,x,w,v,u,t,s,r,q,p,o,z],[T.e])}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.H},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:P.H,args:[W.W]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.H,args:[,]},{func:1,ret:P.H,args:[,,]},{func:1,ret:P.d,args:[P.D]},{func:1,ret:P.T,args:[W.ad]},{func:1,ret:P.T,args:[P.d]},{func:1,ret:P.H,args:[W.aY]},{func:1,ret:P.T,args:[W.U,P.d,P.d,W.bw]},{func:1,args:[,P.d]},{func:1,args:[P.d]},{func:1,ret:P.H,args:[{func:1,ret:-1}]},{func:1,ret:P.H,args:[,],opt:[P.a6]},{func:1,ret:[P.af,,],args:[,]},{func:1,ret:P.T,args:[W.u]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.H,args:[P.E]},{func:1,args:[W.a4]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.u,W.u]},{func:1,ret:-1,args:[P.a3,T.e]},{func:1,ret:P.H,args:[W.aL]},{func:1,ret:P.D,args:[P.D,P.b]},{func:1,ret:-1,args:[W.a4]},{func:1,ret:-1,args:[P.E]},{func:1,ret:P.D,args:[,,]}]
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
if(x==y)H.kJ(d||a)
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
Isolate.aQ=a.aQ
Isolate.be=a.be
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
if(typeof dartMainRunner==="function")dartMainRunner(K.ei,[])
else K.ei([])})})()
//# sourceMappingURL=ortho.dart.js.map
