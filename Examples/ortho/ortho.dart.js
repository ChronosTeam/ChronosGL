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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bf=function(){}
var dart=[["","",,H,{"^":"",lH:{"^":"b;a"}}],["","",,J,{"^":"",
cB:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c2:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cA==null){H.kw()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.dF("Return interceptor for "+H.f(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cE()]
if(v!=null)return v
v=H.kB(a)
if(v!=null)return v
if(typeof a=="function")return C.R
y=Object.getPrototypeOf(a)
if(y==null)return C.A
if(y===Object.prototype)return C.A
if(typeof w=="function"){Object.defineProperty(w,$.cE(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
i:{"^":"b;",
F:function(a,b){return a===b},
gB:function(a){return H.b5(a)},
l:["cl",function(a){return"Instance of '"+H.b6(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
ha:{"^":"i;",
l:function(a){return String(a)},
gB:function(a){return a?519018:218159},
$isT:1},
hb:{"^":"i;",
F:function(a,b){return null==b},
l:function(a){return"null"},
gB:function(a){return 0},
$isG:1},
ck:{"^":"i;",
gB:function(a){return 0},
l:["cn",function(a){return String(a)}]},
hL:{"^":"ck;"},
b8:{"^":"ck;"},
bs:{"^":"ck;",
l:function(a){var z=a[$.eu()]
if(z==null)return this.cn(a)
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
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.K)(b),++y)a.push(b[y])},
a9:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.f(a[y]))
return z.join(b)},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
gdD:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.dc())},
bo:function(a,b){var z,y
H.m(b,{func:1,ret:P.T,args:[H.q(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.d(P.aI(a))}return!1},
cf:function(a,b){if(!!a.immutable$list)H.a_(P.z("sort"))
H.ib(a,J.k7(),H.q(a,0))},
aV:function(a){return this.cf(a,null)},
A:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aG(a[z],b))return!0
return!1},
l:function(a){return P.ci(a,"[","]")},
gD:function(a){return new J.fq(a,a.length,0,[H.q(a,0)])},
gB:function(a){return H.b5(a)},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.d(H.be(a,b))
return a[b]},
i:function(a,b,c){H.A(c,H.q(a,0))
if(!!a.immutable$list)H.a_(P.z("indexed set"))
if(b>=a.length||b<0)throw H.d(H.be(a,b))
a[b]=c},
$isw:1,
$asw:I.bf,
$isl:1,
$isa:1,
p:{
h9:function(a,b){return J.cj(H.j(a,[b]))},
cj:function(a){H.bB(a)
a.fixed$length=Array
return a},
lF:[function(a,b){return J.eV(H.ej(a,"$isY"),H.ej(b,"$isY"))},"$2","k7",8,0,29]}},
lG:{"^":"bp;$ti"},
fq:{"^":"b;a,b,c,0d,$ti",
sb4:function(a){this.d=H.A(a,H.q(this,0))},
gE:function(a){return this.d},
u:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.K(z))
x=this.c
if(x>=y){this.sb4(null)
return!1}this.sb4(z[x]);++this.c
return!0},
$isaZ:1},
bq:{"^":"i;",
N:function(a,b){var z
H.cC(b)
if(typeof b!=="number")throw H.d(H.bc(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gaj(b)
if(this.gaj(a)===z)return 0
if(this.gaj(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaj:function(a){return a===0?1/a<0:a<0},
bV:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.d(P.z(""+a+".toInt()"))},
dj:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.d(P.z(""+a+".ceil()"))},
dk:function(a,b,c){if(this.N(b,c)>0)throw H.d(H.bc(b))
if(this.N(a,b)<0)return b
if(this.N(a,c)>0)return c
return a},
dN:function(a,b){var z
if(b>20)throw H.d(P.bR(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gaj(a))return"-"+z
return z},
l:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gB:function(a){return a&0x1FFFFFFF},
aY:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bl(a,b)},
W:function(a,b){return(a|0)===a?a/b|0:this.bl(a,b)},
bl:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.z("Result of truncating division is "+H.f(z)+": "+H.f(a)+" ~/ "+b))},
bj:function(a,b){var z
if(a>0)z=this.d6(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
d6:function(a,b){return b>31?0:a>>>b},
Y:function(a,b){if(typeof b!=="number")throw H.d(H.bc(b))
return a>b},
$isY:1,
$asY:function(){return[P.E]},
$isa3:1,
$isE:1},
de:{"^":"bq;",$isD:1},
dd:{"^":"bq;"},
br:{"^":"i;",
at:function(a,b){if(b>=a.length)throw H.d(H.be(a,b))
return a.charCodeAt(b)},
L:function(a,b){H.v(b)
if(typeof b!=="string")throw H.d(P.cV(b,null,null))
return a+b},
ci:function(a,b,c){var z
if(c>a.length)throw H.d(P.bR(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cg:function(a,b){return this.ci(a,b,0)},
ck:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.d(P.bS(b,null,null))
if(b>c)throw H.d(P.bS(b,null,null))
if(c>a.length)throw H.d(P.bS(c,null,null))
return a.substring(b,c)},
cj:function(a,b){return this.ck(a,b,null)},
dM:function(a){return a.toLowerCase()},
dl:function(a,b,c){if(c>a.length)throw H.d(P.bR(c,0,a.length,null,null))
return H.kJ(a,b,c)},
N:function(a,b){var z
H.v(b)
if(typeof b!=="string")throw H.d(H.bc(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.d(H.be(a,b))
return a[b]},
$isw:1,
$asw:I.bf,
$isY:1,
$asY:function(){return[P.e]},
$ishJ:1,
$ise:1}}],["","",,H,{"^":"",
dc:function(){return new P.cp("No element")},
h8:function(){return new P.cp("Too many elements")},
ib:function(a,b,c){H.x(a,"$isa",[c],"$asa")
H.m(b,{func:1,ret:P.D,args:[c,c]})
H.bu(a,0,J.aU(a)-1,b,c)},
bu:function(a,b,c,d,e){H.x(a,"$isa",[e],"$asa")
H.m(d,{func:1,ret:P.D,args:[e,e]})
if(c-b<=32)H.ia(a,b,c,d,e)
else H.i9(a,b,c,d,e)},
ia:function(a,b,c,d,e){var z,y,x,w,v
H.x(a,"$isa",[e],"$asa")
H.m(d,{func:1,ret:P.D,args:[e,e]})
for(z=b+1,y=J.bg(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.ab(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
i9:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.x(a,"$isa",[a2],"$asa")
H.m(a1,{func:1,ret:P.D,args:[a2,a2]})
z=C.c.W(a0-b+1,6)
y=b+z
x=a0-z
w=C.c.W(b+a0,2)
v=w-z
u=w+z
t=J.bg(a)
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
if(J.aG(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.aa()
if(i<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.Y()
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
if(typeof e!=="number")return e.aa()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.Y()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.Y()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.aa()
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
if(m<y&&l>x){for(;J.aG(a1.$2(t.h(a,m),r),0);)++m
for(;J.aG(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.aa()
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
aJ:function(a,b){return this.cm(0,H.m(b,{func:1,ret:P.T,args:[H.cz(this,"bQ",0)]}))}},
di:{"^":"b;a,b,c,0d,$ti",
sb5:function(a){this.d=H.A(a,H.q(this,0))},
gE:function(a){return this.d},
u:function(){var z,y,x,w
z=this.a
y=J.bg(z)
x=y.gk(z)
if(this.b!==x)throw H.d(P.aI(z))
w=this.c
if(w>=x){this.sb5(null)
return!1}this.sb5(y.t(z,w));++this.c
return!0},
$isaZ:1},
hm:{"^":"bQ;a,b,$ti",
gk:function(a){return J.aU(this.a)},
t:function(a,b){return this.b.$1(J.f2(this.a,b))},
$asbQ:function(a,b){return[b]},
$asl:function(a,b){return[b]}},
dG:{"^":"l;a,b,$ti",
gD:function(a){return new H.iy(J.bH(this.a),this.b,this.$ti)}},
iy:{"^":"aZ;a,b,$ti",
u:function(){var z,y
for(z=this.a,y=this.b;z.u();)if(y.$1(z.gE(z)))return!0
return!1},
gE:function(a){var z=this.a
return z.gE(z)}},
bN:{"^":"b;$ti"}}],["","",,H,{"^":"",
aF:function(a){var z,y
z=H.v(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
ko:function(a){return init.types[H.Q(a)]},
kz:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.B(a).$isy},
f:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bl(a)
if(typeof z!=="string")throw H.d(H.bc(a))
return z},
b5:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b6:function(a){return H.hM(a)+H.bX(H.aj(a),0,null)},
hM:function(a){var z,y,x,w,v,u,t,s,r
z=J.B(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.K||!!z.$isb8){u=C.z(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aF(w.length>1&&C.i.at(w,0)===36?C.i.cj(w,1):w)},
aK:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hT:function(a){var z=H.aK(a).getFullYear()+0
return z},
hR:function(a){var z=H.aK(a).getMonth()+1
return z},
hN:function(a){var z=H.aK(a).getDate()+0
return z},
hO:function(a){var z=H.aK(a).getHours()+0
return z},
hQ:function(a){var z=H.aK(a).getMinutes()+0
return z},
hS:function(a){var z=H.aK(a).getSeconds()+0
return z},
hP:function(a){var z=H.aK(a).getMilliseconds()+0
return z},
ak:function(a){throw H.d(H.bc(a))},
k:function(a,b){if(a==null)J.aU(a)
throw H.d(H.be(a,b))},
be:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aH(!0,b,"index",null)
z=H.Q(J.aU(a))
if(!(b<0)){if(typeof z!=="number")return H.ak(z)
y=b>=z}else y=!0
if(y)return P.F(b,a,"index",null,z)
return P.bS(b,"index",null)},
bc:function(a){return new P.aH(!0,a,null,null)},
d:function(a){var z
if(a==null)a=new P.dp()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.em})
z.name=""}else z.toString=H.em
return z},
em:function(){return J.bl(this.dartException)},
a_:function(a){throw H.d(a)},
K:function(a){throw H.d(P.aI(a))},
a9:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kL(a)
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
if(l)return z.$1(H.dn(H.v(y),m))}}return z.$1(new H.iv(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dw()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aH(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dw()
return a},
bi:function(a){var z
if(a==null)return new H.dW(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dW(a)},
kk:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
ky:function(a,b,c,d,e,f){H.h(a,"$isbn")
switch(H.Q(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.d9("Unsupported number of arguments for wrapped closure"))},
bd:function(a,b){var z
H.Q(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ky)
a.$identity=z
return z},
fB:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.B(d).$isa){z.$reflectionInfo=d
x=H.hX(z).r}else x=d
w=e?Object.create(new H.ic().constructor.prototype):Object.create(new H.cd(null,null,null,null).constructor.prototype)
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
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.ko,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cY:H.ce
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.d("Error in reflectionInfo.")
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
fy:function(a,b,c,d){var z=H.ce
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
d_:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fA(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fy(y,!w,z,b)
if(y===0){w=$.ac
if(typeof w!=="number")return w.L()
$.ac=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aV
if(v==null){v=H.bK("self")
$.aV=v}return new Function(w+H.f(v)+";return "+u+"."+H.f(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ac
if(typeof w!=="number")return w.L()
$.ac=w+1
t+=w
w="return function("+t+"){return this."
v=$.aV
if(v==null){v=H.bK("self")
$.aV=v}return new Function(w+H.f(v)+"."+H.f(z)+"("+t+");}")()},
fz:function(a,b,c,d){var z,y
z=H.ce
y=H.cY
switch(b?-1:a){case 0:throw H.d(H.i2("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fA:function(a,b){var z,y,x,w,v,u,t,s
z=$.aV
if(z==null){z=H.bK("self")
$.aV=z}y=$.cX
if(y==null){y=H.bK("receiver")
$.cX=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fz(w,!u,x,b)
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
cx:function(a,b,c,d,e,f,g){return H.fB(a,b,H.Q(c),d,!!e,!!f,g)},
v:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.a7(a,"String"))},
ea:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.a7(a,"double"))},
cC:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.a7(a,"num"))},
c_:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.a7(a,"bool"))},
Q:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.a7(a,"int"))},
cD:function(a,b){throw H.d(H.a7(a,H.aF(H.v(b).substring(3))))},
kG:function(a,b){throw H.d(H.cZ(a,H.aF(H.v(b).substring(3))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.B(a)[b])return a
H.cD(a,b)},
al:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.B(a)[b]
else z=!0
if(z)return a
H.kG(a,b)},
ej:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.B(a)[b])return a
H.cD(a,b)},
bB:function(a){if(a==null)return a
if(!!J.B(a).$isa)return a
throw H.d(H.a7(a,"List<dynamic>"))},
kA:function(a,b){var z
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
throw H.d(y)}finally{$.ct=!1}},
c1:function(a,b){if(a!=null&&!H.cw(a,b))H.a_(H.a7(a,H.bC(b)))
return a},
e5:function(a){var z,y
z=J.B(a)
if(!!z.$iso){y=H.cy(z)
if(y!=null)return H.bC(y)
return"Closure"}return H.b6(a)},
kK:function(a){throw H.d(new P.fI(H.v(a)))},
ef:function(a){return init.getIsolateTag(a)},
j:function(a,b){a.$ti=b
return a},
aj:function(a){if(a==null)return
return a.$ti},
n4:function(a,b,c){return H.aT(a["$as"+H.f(c)],H.aj(b))},
bh:function(a,b,c,d){var z
H.v(c)
H.Q(d)
z=H.aT(a["$as"+H.f(c)],H.aj(b))
return z==null?null:z[d]},
cz:function(a,b,c){var z
H.v(b)
H.Q(c)
z=H.aT(a["$as"+H.f(b)],H.aj(a))
return z==null?null:z[c]},
q:function(a,b){var z
H.Q(b)
z=H.aj(a)
return z==null?null:z[b]},
bC:function(a){return H.aD(a,null)},
aD:function(a,b){var z,y
H.x(b,"$isa",[P.e],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aF(a[0].builtin$cls)+H.bX(a,1,b)
if(typeof a=="function")return H.aF(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Q(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.k(b,y)
return H.f(b[y])}if('func' in a)return H.k6(a,b)
if('futureOr' in a)return"FutureOr<"+H.aD("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
k6:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.e]
H.x(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.j([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.j(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.k(b,r)
t=C.i.L(t,b[r])
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
for(z=H.kj(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.v(z[l])
n=n+m+H.aD(i[h],b)+(" "+H.f(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bX:function(a,b,c){var z,y,x,w,v,u
H.x(c,"$isa",[P.e],"$asa")
if(a==null)return""
z=new P.cr("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aD(u,c)}return"<"+z.l(0)+">"},
kn:function(a){var z,y,x,w
z=J.B(a)
if(!!z.$iso){y=H.cy(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.aj(a)
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
H.v(b)
H.bB(c)
H.v(d)
if(a==null)return!1
z=H.aj(a)
y=J.B(a)
if(y[b]==null)return!1
return H.e8(H.aT(y[d],z),null,c,null)},
bD:function(a,b,c,d){H.v(b)
H.bB(c)
H.v(d)
if(a==null)return a
if(H.aR(a,b,c,d))return a
throw H.d(H.cZ(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aF(b.substring(3))+H.bX(c,0,null),init.mangledGlobalNames)))},
x:function(a,b,c,d){H.v(b)
H.bB(c)
H.v(d)
if(a==null)return a
if(H.aR(a,b,c,d))return a
throw H.d(H.a7(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aF(b.substring(3))+H.bX(c,0,null),init.mangledGlobalNames)))},
e8:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a1(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a1(a[y],b,c[y],d))return!1
return!0},
n2:function(a,b,c){return a.apply(b,H.aT(J.B(b)["$as"+H.f(c)],H.aj(b)))},
eh:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="G"||a===-1||a===-2||H.eh(z)}return!1},
cw:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="G"||b===-1||b===-2||H.eh(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cw(a,"type" in b?b.type:null))return!0
if('func' in b)return H.by(a,b)}z=J.B(a).constructor
y=H.aj(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a1(z,null,b,null)},
A:function(a,b){if(a!=null&&!H.cw(a,b))throw H.d(H.a7(a,H.bC(b)))
return a},
a1:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a1(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.e1(a,b,c,d)
if('func' in a)return c.builtin$cls==="bn"
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
return H.e8(H.aT(r,z),b,u,d)},
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
return H.kF(m,b,l,d)},
kF:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a1(c[w],d,a[w],b))return!1}return!0},
n3:function(a,b,c){Object.defineProperty(a,H.v(b),{value:c,enumerable:false,writable:true,configurable:true})},
kB:function(a){var z,y,x,w,v,u
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
if(v==="*")throw H.d(P.dF(z))
if(init.leafTags[z]===true){u=H.c4(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ek(a,x)},
ek:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cB(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c4:function(a){return J.cB(a,!1,null,!!a.$isy)},
kE:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c4(z)
else return J.cB(z,c,null,null)},
kw:function(){if(!0===$.cA)return
$.cA=!0
H.kx()},
kx:function(){var z,y,x,w,v,u,t,s
$.c0=Object.create(null)
$.c3=Object.create(null)
H.ks()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.el.$1(v)
if(u!=null){t=H.kE(v,z[v],u)
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
$.eg=new H.kt(v)
$.e7=new H.ku(u)
$.el=new H.kv(t)},
aQ:function(a,b){return a(b)||b},
kJ:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hW:{"^":"b;a,b,c,d,e,f,r,0x",p:{
hX:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cj(z)
y=z[0]
x=z[1]
return new H.hW(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iq:{"^":"b;a,b,c,d,e,f",
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
if(z==null)z=H.j([],[P.e])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iq(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bT:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dC:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hF:{"^":"R;a,b",
l:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dn:function(a,b){return new H.hF(a,b==null?null:b.method)}}},
hc:{"^":"R;a,b,c",
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
return new H.hc(a,y,z?null:b.receiver)}}},
iv:{"^":"R;a",
l:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kL:{"^":"o:5;a",
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
l:function(a){return"Closure '"+H.b6(this).trim()+"'"},
gc9:function(){return this},
$isbn:1,
gc9:function(){return this}},
dy:{"^":"o;"},
ic:{"^":"dy;",
l:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aF(z)+"'"}},
cd:{"^":"dy;a,b,c,d",
F:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cd))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gB:function(a){var z,y
z=this.c
if(z==null)y=H.b5(this.a)
else y=typeof z!=="object"?J.am(z):H.b5(z)
return(y^H.b5(this.b))>>>0},
l:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.b6(z)+"'")},
p:{
ce:function(a){return a.a},
cY:function(a){return a.c},
bK:function(a){var z,y,x,w,v
z=new H.cd("self","target","receiver","name")
y=J.cj(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ir:{"^":"R;a",
l:function(a){return this.a},
p:{
a7:function(a,b){return new H.ir("TypeError: "+H.f(P.bM(a))+": type '"+H.e5(a)+"' is not a subtype of type '"+b+"'")}}},
fw:{"^":"R;a",
l:function(a){return this.a},
p:{
cZ:function(a,b){return new H.fw("CastError: "+H.f(P.bM(a))+": type '"+H.e5(a)+"' is not a subtype of type '"+b+"'")}}},
i1:{"^":"R;a",
l:function(a){return"RuntimeError: "+H.f(this.a)},
p:{
i2:function(a){return new H.i1(a)}}},
dD:{"^":"b;a,0b,0c,0d",
gaf:function(){var z=this.b
if(z==null){z=H.bC(this.a)
this.b=z}return z},
l:function(a){return this.gaf()},
gB:function(a){var z=this.d
if(z==null){z=C.i.gB(this.gaf())
this.d=z}return z},
F:function(a,b){if(b==null)return!1
return b instanceof H.dD&&this.gaf()===b.gaf()}},
df:{"^":"dj;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gJ:function(a){return new H.aq(this,[H.q(this,0)])},
ai:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cR(z,b)}else{y=this.dB(b)
return y}},
dB:function(a){var z=this.d
if(z==null)return!1
return this.aG(this.az(z,J.am(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ad(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ad(w,b)
x=y==null?null:y.b
return x}else return this.dC(b)},
dC:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.az(z,J.am(a)&0x3ffffff)
x=this.aG(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.A(b,H.q(this,0))
H.A(c,H.q(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aB()
this.b=z}this.b6(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aB()
this.c=y}this.b6(y,b,c)}else{x=this.d
if(x==null){x=this.aB()
this.d=x}w=J.am(b)&0x3ffffff
v=this.az(x,w)
if(v==null)this.aE(x,w,[this.ar(b,c)])
else{u=this.aG(v,b)
if(u>=0)v[u].b=c
else v.push(this.ar(b,c))}}},
H:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.aI(this))
z=z.c}},
b6:function(a,b,c){var z
H.A(b,H.q(this,0))
H.A(c,H.q(this,1))
z=this.ad(a,b)
if(z==null)this.aE(a,b,this.ar(b,c))
else z.b=c},
b8:function(){this.r=this.r+1&67108863},
ar:function(a,b){var z,y
z=new H.hh(H.A(a,H.q(this,0)),H.A(b,H.q(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b8()
return z},
aG:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aG(a[y].a,b))return y
return-1},
l:function(a){return P.dk(this)},
ad:function(a,b){return a[b]},
az:function(a,b){return a[b]},
aE:function(a,b,c){a[b]=c},
cS:function(a,b){delete a[b]},
cR:function(a,b){return this.ad(a,b)!=null},
aB:function(){var z=Object.create(null)
this.aE(z,"<non-identifier-key>",z)
this.cS(z,"<non-identifier-key>")
return z},
$isdg:1},
hh:{"^":"b;a,b,0c,0d"},
aq:{"^":"d5;a,$ti",
gk:function(a){return this.a.a},
gD:function(a){var z,y
z=this.a
y=new H.hi(z,z.r,this.$ti)
y.c=z.e
return y}},
hi:{"^":"b;a,b,0c,0d,$ti",
sb7:function(a){this.d=H.A(a,H.q(this,0))},
gE:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aI(z))
else{z=this.c
if(z==null){this.sb7(null)
return!1}else{this.sb7(z.a)
this.c=this.c.c
return!0}}},
$isaZ:1},
kt:{"^":"o:5;a",
$1:function(a){return this.a(a)}},
ku:{"^":"o:13;a",
$2:function(a,b){return this.a(a,b)}},
kv:{"^":"o:14;a",
$1:function(a){return this.a(H.v(a))}}}],["","",,H,{"^":"",
kj:function(a){return J.h9(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
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
ag:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.be(b,a))},
hz:{"^":"i;",$isis:1,"%":"DataView;ArrayBufferView;cn|dQ|dR|dl|dS|dT|at"},
cn:{"^":"hz;",
gk:function(a){return a.length},
$isw:1,
$asw:I.bf,
$isy:1,
$asy:I.bf},
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
at:{"^":"dT;",
i:function(a,b,c){H.Q(c)
H.ag(b,a,a.length)
a[b]=c},
$asbN:function(){return[P.D]},
$asp:function(){return[P.D]},
$isl:1,
$asl:function(){return[P.D]},
$isa:1,
$asa:function(){return[P.D]}},
hy:{"^":"dl;",$isai:1,"%":"Float32Array"},
lP:{"^":"at;",
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lQ:{"^":"at;",
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
$ish6:1,
"%":"Int32Array"},
lR:{"^":"at;",
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lS:{"^":"at;",
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hA:{"^":"at;",
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
$ismC:1,
"%":"Uint32Array"},
lT:{"^":"at;",
gk:function(a){return a.length},
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lU:{"^":"at;",
gk:function(a){return a.length},
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dQ:{"^":"cn+p;"},
dR:{"^":"dQ+bN;"},
dS:{"^":"cn+p;"},
dT:{"^":"dS+bN;"}}],["","",,P,{"^":"",
iC:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.ke()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bd(new P.iE(z),1)).observe(y,{childList:true})
return new P.iD(z,y,x)}else if(self.setImmediate!=null)return P.kf()
return P.kg()},
mM:[function(a){self.scheduleImmediate(H.bd(new P.iF(H.m(a,{func:1,ret:-1})),0))},"$1","ke",4,0,4],
mN:[function(a){self.setImmediate(H.bd(new P.iG(H.m(a,{func:1,ret:-1})),0))},"$1","kf",4,0,4],
mO:[function(a){H.m(a,{func:1,ret:-1})
P.jP(0,a)},"$1","kg",4,0,4],
ka:function(a,b){if(H.by(a,{func:1,args:[P.b,P.a6]}))return H.m(a,{func:1,ret:null,args:[P.b,P.a6]})
if(H.by(a,{func:1,args:[P.b]}))return H.m(a,{func:1,ret:null,args:[P.b]})
throw H.d(P.cV(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
k9:function(){var z,y
for(;z=$.aP,z!=null;){$.bb=null
y=z.b
$.aP=y
if(y==null)$.ba=null
z.a.$0()}},
n0:[function(){$.cu=!0
try{P.k9()}finally{$.bb=null
$.cu=!1
if($.aP!=null)$.cF().$1(P.e9())}},"$0","e9",0,0,1],
e4:function(a){var z=new P.dI(H.m(a,{func:1,ret:-1}))
if($.aP==null){$.ba=z
$.aP=z
if(!$.cu)$.cF().$1(P.e9())}else{$.ba.b=z
$.ba=z}},
kd:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
z=$.aP
if(z==null){P.e4(a)
$.bb=$.ba
return}y=new P.dI(a)
x=$.bb
if(x==null){y.b=z
$.bb=y
$.aP=y}else{y.b=x.b
x.b=y
$.bb=y
if(y.b==null)$.ba=y}},
kH:function(a){var z,y
z={func:1,ret:-1}
H.m(a,z)
y=$.J
if(C.e===y){P.bZ(null,null,C.e,a)
return}y.toString
P.bZ(null,null,y,H.m(y.br(a),z))},
bY:function(a,b,c,d,e){var z={}
z.a=d
P.kd(new P.kb(z,e))},
e2:function(a,b,c,d,e){var z,y
H.m(d,{func:1,ret:e})
y=$.J
if(y===c)return d.$0()
$.J=c
z=y
try{y=d.$0()
return y}finally{$.J=z}},
e3:function(a,b,c,d,e,f,g){var z,y
H.m(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.J
if(y===c)return d.$1(e)
$.J=c
z=y
try{y=d.$1(e)
return y}finally{$.J=z}},
kc:function(a,b,c,d,e,f,g,h,i){var z,y
H.m(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.J
if(y===c)return d.$2(e,f)
$.J=c
z=y
try{y=d.$2(e,f)
return y}finally{$.J=z}},
bZ:function(a,b,c,d){var z
H.m(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.br(d):c.dg(d,-1)
P.e4(d)},
iE:{"^":"o:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iD:{"^":"o:15;a,b,c",
$1:function(a){var z,y
this.a.a=H.m(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iF:{"^":"o:0;a",
$0:function(){this.a.$0()}},
iG:{"^":"o:0;a",
$0:function(){this.a.$0()}},
jO:{"^":"b;a,0b,c",
cN:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bd(new P.jQ(this,b),0),a)
else throw H.d(P.z("`setTimeout()` not found."))},
p:{
jP:function(a,b){var z=new P.jO(!0,0)
z.cN(a,b)
return z}}},
jQ:{"^":"o:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
iJ:{"^":"b;$ti"},
jJ:{"^":"iJ;a,$ti"},
aO:{"^":"b;0a,b,c,d,e,$ti",
dE:function(a){if(this.c!==6)return!0
return this.b.b.aI(H.m(this.d,{func:1,ret:P.T,args:[P.b]}),a.a,P.T,P.b)},
dA:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.q(this,1)}
w=this.b.b
if(H.by(z,{func:1,args:[P.b,P.a6]}))return H.c1(w.dI(z,a.a,a.b,null,y,P.a6),x)
else return H.c1(w.aI(H.m(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
af:{"^":"b;bk:a<,b,0d3:c<,$ti",
bU:function(a,b,c){var z,y,x,w
z=H.q(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.J
if(y!==C.e){y.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ka(b,y)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.af(0,$.J,[c])
w=b==null?1:3
this.ba(new P.aO(x,w,a,b,[z,c]))
return x},
bT:function(a,b){return this.bU(a,null,b)},
ba:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isaO")
this.c=a}else{if(z===2){y=H.h(this.c,"$isaf")
z=y.a
if(z<4){y.ba(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bZ(null,null,z,H.m(new P.iY(this,a),{func:1,ret:-1}))}},
bh:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isaO")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isaf")
y=u.a
if(y<4){u.bh(a)
return}this.a=y
this.c=u.c}z.a=this.ae(a)
y=this.b
y.toString
P.bZ(null,null,y,H.m(new P.j2(z,this),{func:1,ret:-1}))}},
aD:function(){var z=H.h(this.c,"$isaO")
this.c=null
return this.ae(z)},
ae:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
au:function(a){var z,y,x
z=H.q(this,0)
H.c1(a,{futureOr:1,type:z})
y=this.$ti
if(H.aR(a,"$isaY",y,"$asaY"))if(H.aR(a,"$isaf",y,null))P.dL(a,this)
else P.iZ(a,this)
else{x=this.aD()
H.A(a,z)
this.a=4
this.c=a
P.b9(this,x)}},
bc:function(a,b){var z
H.h(b,"$isa6")
z=this.aD()
this.a=8
this.c=new P.a0(a,b)
P.b9(this,z)},
$isaY:1,
p:{
iZ:function(a,b){var z,y,x
b.a=1
try{a.bU(new P.j_(b),new P.j0(b),null)}catch(x){z=H.a9(x)
y=H.bi(x)
P.kH(new P.j1(b,z,y))}},
dL:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isaf")
if(z>=4){y=b.aD()
b.a=a.a
b.c=a.c
P.b9(b,y)}else{y=H.h(b.c,"$isaO")
b.a=2
b.c=a
a.bh(y)}},
b9:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
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
P.b9(z.a,b)}y=z.a
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
b=t.ae(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dL(y,t)
return}}m=b.b
n=H.h(m.c,"$isaO")
m.c=null
b=m.ae(n)
y=x.a
u=x.b
if(!y){H.A(u,H.q(m,0))
m.a=4
m.c=u}else{H.h(u,"$isa0")
m.a=8
m.c=u}z.a=m
y=m}}}},
iY:{"^":"o:0;a,b",
$0:function(){P.b9(this.a,this.b)}},
j2:{"^":"o:0;a,b",
$0:function(){P.b9(this.b,this.a.a)}},
j_:{"^":"o:6;a",
$1:function(a){var z=this.a
z.a=0
z.au(a)}},
j0:{"^":"o:16;a",
$2:function(a,b){H.h(b,"$isa6")
this.a.bc(a,b)},
$1:function(a){return this.$2(a,null)}},
j1:{"^":"o:0;a,b,c",
$0:function(){this.a.bc(this.b,this.c)}},
j5:{"^":"o:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bS(H.m(w.d,{func:1}),null)}catch(v){y=H.a9(v)
x=H.bi(v)
if(this.d){w=H.h(this.a.a.c,"$isa0").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isa0")
else u.b=new P.a0(y,x)
u.a=!0
return}if(!!J.B(z).$isaY){if(z instanceof P.af&&z.gbk()>=4){if(z.gbk()===8){w=this.b
w.b=H.h(z.gd3(),"$isa0")
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
this.a.b=x.b.b.aI(H.m(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a9(t)
y=H.bi(t)
x=this.a
x.b=new P.a0(z,y)
x.a=!0}}},
j3:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isa0")
w=this.c
if(w.dE(z)&&w.e!=null){v=this.b
v.b=w.dA(z)
v.a=!1}}catch(u){y=H.a9(u)
x=H.bi(u)
w=H.h(this.a.a.c,"$isa0")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a0(y,x)
s.a=!0}}},
dI:{"^":"b;a,0b"},
ih:{"^":"b;$ti",
gk:function(a){var z,y,x,w
z={}
y=new P.af(0,$.J,[P.D])
z.a=0
x=H.q(this,0)
w=H.m(new P.ij(z,this),{func:1,ret:-1,args:[x]})
H.m(new P.ik(z,y),{func:1,ret:-1})
W.aC(this.a,this.b,w,!1,x)
return y}},
ij:{"^":"o;a,b",
$1:function(a){H.A(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.q(this.b,0)]}}},
ik:{"^":"o:0;a,b",
$0:function(){this.b.au(this.a.a)}},
ii:{"^":"b;"},
a0:{"^":"b;a,b",
l:function(a){return H.f(this.a)},
$isR:1},
jW:{"^":"b;",$ismK:1},
kb:{"^":"o:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dp()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.l(0)
throw x}},
js:{"^":"jW;",
dJ:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
try{if(C.e===$.J){a.$0()
return}P.e2(null,null,this,a,-1)}catch(x){z=H.a9(x)
y=H.bi(x)
P.bY(null,null,this,z,H.h(y,"$isa6"))}},
dK:function(a,b,c){var z,y,x
H.m(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.e===$.J){a.$1(b)
return}P.e3(null,null,this,a,b,-1,c)}catch(x){z=H.a9(x)
y=H.bi(x)
P.bY(null,null,this,z,H.h(y,"$isa6"))}},
dg:function(a,b){return new P.ju(this,H.m(a,{func:1,ret:b}),b)},
br:function(a){return new P.jt(this,H.m(a,{func:1,ret:-1}))},
dh:function(a,b){return new P.jv(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
bS:function(a,b){H.m(a,{func:1,ret:b})
if($.J===C.e)return a.$0()
return P.e2(null,null,this,a,b)},
aI:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.J===C.e)return a.$1(b)
return P.e3(null,null,this,a,b,c,d)},
dI:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.J===C.e)return a.$2(b,c)
return P.kc(null,null,this,a,b,c,d,e,f)}},
ju:{"^":"o;a,b,c",
$0:function(){return this.a.bS(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jt:{"^":"o:1;a,b",
$0:function(){return this.a.dJ(this.b)}},
jv:{"^":"o;a,b,c",
$1:function(a){var z=this.c
return this.a.dK(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dh:function(a,b,c){H.bB(a)
return H.x(H.kk(a,new H.df(0,0,[b,c])),"$isdg",[b,c],"$asdg")},
S:function(a,b){return new H.df(0,0,[a,b])},
a5:function(a,b,c,d){return new P.jd(0,0,[d])},
h7:function(a,b,c){var z,y
if(P.cv(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.j([],[P.e])
y=$.bj()
C.a.j(y,a)
try{P.k8(a,z)}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=P.dx(b,H.kA(z,"$isl"),", ")+c
return y.charCodeAt(0)==0?y:y},
ci:function(a,b,c){var z,y,x
if(P.cv(a))return b+"..."+c
z=new P.cr(b)
y=$.bj()
C.a.j(y,a)
try{x=z
x.a=P.dx(x.ga_(),a,", ")}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=z
y.a=y.ga_()+c
y=z.ga_()
return y.charCodeAt(0)==0?y:y},
cv:function(a){var z,y
for(z=0;y=$.bj(),z<y.length;++z)if(a===y[z])return!0
return!1},
k8:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.x(b,"$isa",[P.e],"$asa")
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
cm:function(a,b){var z,y,x
z=P.a5(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.K)(a),++x)z.j(0,H.A(a[x],b))
return z},
dk:function(a){var z,y,x
z={}
if(P.cv(a))return"{...}"
y=new P.cr("")
try{C.a.j($.bj(),a)
x=y
x.a=x.ga_()+"{"
z.a=!0
J.f5(a,new P.hl(z,y))
z=y
z.a=z.ga_()+"}"}finally{z=$.bj()
if(0>=z.length)return H.k(z,-1)
z.pop()}z=y.ga_()
return z.charCodeAt(0)==0?z:z},
jd:{"^":"j8;a,0b,0c,0d,0e,0f,r,$ti",
gD:function(a){var z=new P.dP(this,this.r,this.$ti)
z.c=this.e
return z},
gk:function(a){return this.a},
A:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.h(z[b],"$isbx")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.h(y[b],"$isbx")!=null}else return this.cQ(b)},
cQ:function(a){var z=this.d
if(z==null)return!1
return this.ay(this.bf(z,a),a)>=0},
j:function(a,b){var z,y
H.A(b,H.q(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cs()
this.b=z}return this.b9(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cs()
this.c=y}return this.b9(y,b)}else return this.cO(0,b)},
cO:function(a,b){var z,y,x
H.A(b,H.q(this,0))
z=this.d
if(z==null){z=P.cs()
this.d=z}y=this.bd(b)
x=z[y]
if(x==null)z[y]=[this.aC(b)]
else{if(this.ay(x,b)>=0)return!1
x.push(this.aC(b))}return!0},
bR:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bi(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bi(this.c,b)
else return this.cZ(0,b)},
cZ:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bf(z,b)
x=this.ay(y,b)
if(x<0)return!1
this.bm(y.splice(x,1)[0])
return!0},
a8:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aA()}},
b9:function(a,b){H.A(b,H.q(this,0))
if(H.h(a[b],"$isbx")!=null)return!1
a[b]=this.aC(b)
return!0},
bi:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isbx")
if(z==null)return!1
this.bm(z)
delete a[b]
return!0},
aA:function(){this.r=this.r+1&67108863},
aC:function(a){var z,y
z=new P.bx(H.A(a,H.q(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aA()
return z},
bm:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aA()},
bd:function(a){return J.am(a)&0x3ffffff},
bf:function(a,b){return a[this.bd(b)]},
ay:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aG(a[y].a,b))return y
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
if(this.b!==z.r)throw H.d(P.aI(z))
else{z=this.c
if(z==null){this.sbb(null)
return!1}else{this.sbb(H.A(z.a,H.q(this,0)))
this.c=this.c.b
return!0}}},
$isaZ:1,
p:{
je:function(a,b,c){var z=new P.dP(a,b,[c])
z.c=a.e
return z}}},
j8:{"^":"i3;"},
hj:{"^":"jf;",$isl:1,$isa:1},
p:{"^":"b;$ti",
gD:function(a){return new H.di(a,this.gk(a),0,[H.bh(this,a,"p",0)])},
t:function(a,b){return this.h(a,b)},
dz:function(a,b,c,d){var z,y,x
H.A(b,d)
H.m(c,{func:1,ret:d,args:[d,H.bh(this,a,"p",0)]})
z=this.gk(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gk(a))throw H.d(P.aI(a))}return y},
l:function(a){return P.ci(a,"[","]")}},
dj:{"^":"V;"},
hl:{"^":"o:7;a,b",
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
H.m(b,{func:1,ret:-1,args:[H.bh(this,a,"V",0),H.bh(this,a,"V",1)]})
for(z=J.bH(this.gJ(a));z.u();){y=z.gE(z)
b.$2(y,this.h(a,y))}},
gk:function(a){return J.aU(this.gJ(a))},
l:function(a){return P.dk(a)},
$isM:1},
i4:{"^":"b;$ti",
I:function(a,b){var z
for(z=J.bH(H.x(b,"$isl",this.$ti,"$asl"));z.u();)this.j(0,z.gE(z))},
l:function(a){return P.ci(this,"{","}")},
$isl:1,
$ismb:1},
i3:{"^":"i4;"},
jf:{"^":"b+p;"}}],["","",,P,{"^":"",
fW:function(a){if(a instanceof H.o)return a.l(0)
return"Instance of '"+H.b6(a)+"'"},
bM:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bl(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fW(a)},
d9:function(a){return new P.iV(a)},
aE:function(a){H.c5(H.f(a))},
T:{"^":"b;"},
"+bool":0,
bL:{"^":"b;a,b",
F:function(a,b){if(b==null)return!1
return b instanceof P.bL&&this.a===b.a&&!0},
N:function(a,b){return C.c.N(this.a,H.h(b,"$isbL").a)},
gB:function(a){var z=this.a
return(z^C.c.bj(z,30))&1073741823},
l:function(a){var z,y,x,w,v,u,t,s
z=P.fK(H.hT(this))
y=P.bm(H.hR(this))
x=P.bm(H.hN(this))
w=P.bm(H.hO(this))
v=P.bm(H.hQ(this))
u=P.bm(H.hS(this))
t=P.fL(H.hP(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isY:1,
$asY:function(){return[P.bL]},
p:{
fK:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fL:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bm:function(a){if(a>=10)return""+a
return"0"+a}}},
a3:{"^":"E;"},
"+double":0,
aW:{"^":"b;a",
Y:function(a,b){return C.c.Y(this.a,H.h(b,"$isaW").a)},
F:function(a,b){if(b==null)return!1
return b instanceof P.aW&&this.a===b.a},
gB:function(a){return this.a&0x1FFFFFFF},
N:function(a,b){return C.c.N(this.a,H.h(b,"$isaW").a)},
l:function(a){var z,y,x,w,v
z=new P.fT()
y=this.a
if(y<0)return"-"+new P.aW(0-y).l(0)
x=z.$1(C.c.W(y,6e7)%60)
w=z.$1(C.c.W(y,1e6)%60)
v=new P.fS().$1(y%1e6)
return""+C.c.W(y,36e8)+":"+H.f(x)+":"+H.f(w)+"."+H.f(v)},
$isY:1,
$asY:function(){return[P.aW]},
p:{
fR:function(a,b,c,d,e,f){return new P.aW(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fS:{"^":"o:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fT:{"^":"o:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
R:{"^":"b;"},
dp:{"^":"R;",
l:function(a){return"Throw of null."}},
aH:{"^":"R;a,b,c,d",
gaw:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gav:function(){return""},
l:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gaw()+y+x
if(!this.a)return w
v=this.gav()
u=P.bM(this.b)
return w+v+": "+H.f(u)},
p:{
cV:function(a,b,c){return new P.aH(!0,a,b,c)}}},
dq:{"^":"aH;e,f,a,b,c,d",
gaw:function(){return"RangeError"},
gav:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.f(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.f(z)
else if(x>z)y=": Not in range "+H.f(z)+".."+H.f(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.f(z)}return y},
p:{
bS:function(a,b,c){return new P.dq(null,null,!0,a,b,"Value not in range")},
bR:function(a,b,c,d,e){return new P.dq(b,c,!0,a,d,"Invalid value")}}},
h5:{"^":"aH;e,k:f>,a,b,c,d",
gaw:function(){return"RangeError"},
gav:function(){var z,y
z=H.Q(this.b)
if(typeof z!=="number")return z.aa()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.f(y)},
p:{
F:function(a,b,c,d,e){var z=H.Q(e==null?J.aU(b):e)
return new P.h5(b,z,!0,a,c,"Index out of range")}}},
iw:{"^":"R;a",
l:function(a){return"Unsupported operation: "+this.a},
p:{
z:function(a){return new P.iw(a)}}},
iu:{"^":"R;a",
l:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
dF:function(a){return new P.iu(a)}}},
cp:{"^":"R;a",
l:function(a){return"Bad state: "+this.a},
p:{
cq:function(a){return new P.cp(a)}}},
fC:{"^":"R;a",
l:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.bM(z))+"."},
p:{
aI:function(a){return new P.fC(a)}}},
dw:{"^":"b;",
l:function(a){return"Stack Overflow"},
$isR:1},
fI:{"^":"R;a",
l:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iV:{"^":"b;a",
l:function(a){return"Exception: "+this.a}},
bn:{"^":"b;"},
D:{"^":"E;"},
"+int":0,
l:{"^":"b;$ti",
aJ:["cm",function(a,b){var z=H.cz(this,"l",0)
return new H.dG(this,H.m(b,{func:1,ret:P.T,args:[z]}),[z])}],
gk:function(a){var z,y
z=this.gD(this)
for(y=0;z.u();)++y
return y},
t:function(a,b){var z,y,x
if(b<0)H.a_(P.bR(b,0,null,"index",null))
for(z=this.gD(this),y=0;z.u();){x=z.gE(z)
if(b===y)return x;++y}throw H.d(P.F(b,this,"index",null,y))},
l:function(a){return P.h7(this,"(",")")}},
aZ:{"^":"b;$ti"},
a:{"^":"b;$ti",$isl:1},
"+List":0,
M:{"^":"b;$ti"},
G:{"^":"b;",
gB:function(a){return P.b.prototype.gB.call(this,this)},
l:function(a){return"null"}},
"+Null":0,
E:{"^":"b;",$isY:1,
$asY:function(){return[P.E]}},
"+num":0,
b:{"^":";",
F:function(a,b){return this===b},
gB:function(a){return H.b5(this)},
l:function(a){return"Instance of '"+H.b6(this)+"'"},
toString:function(){return this.l(this)}},
a6:{"^":"b;"},
e:{"^":"b;",$isY:1,
$asY:function(){return[P.e]},
$ishJ:1},
"+String":0,
cr:{"^":"b;a_:a<",
gk:function(a){return this.a.length},
l:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dx:function(a,b,c){var z=J.bH(b)
if(!z.u())return a
if(c.length===0){do a+=H.f(z.gE(z))
while(z.u())}else{a+=H.f(z.gE(z))
for(;z.u();)a=a+c+H.f(z.gE(z))}return a}}}}],["","",,W,{"^":"",
fU:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.o).O(z,a,b,c)
y.toString
z=W.u
z=new H.dG(new W.a8(y),H.m(new W.fV(),{func:1,ret:P.T,args:[z]}),[z])
x=z.gD(z)
if(!x.u())H.a_(H.dc())
w=x.gE(x)
if(x.u())H.a_(H.h8())
return H.h(w,"$isU")},
d8:function(a){H.h(a,"$isP")
return"wheel"},
aX:function(a){var z,y,x
z="element tag unavailable"
try{y=J.f8(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a9(x)}return z},
iS:function(a,b){return document.createElement(a)},
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
if("postMessage" in a){z=W.iM(a)
if(!!J.B(z).$isP)return z
return}else return H.h(a,"$isP")},
e6:function(a,b){var z
H.m(a,{func:1,ret:-1,args:[b]})
z=$.J
if(z===C.e)return a
return z.dh(a,b)},
O:{"^":"U;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kM:{"^":"i;0k:length=","%":"AccessibleNodeList"},
fo:{"^":"O;",
l:function(a){return String(a)},
$isfo:1,
"%":"HTMLAnchorElement"},
kN:{"^":"O;",
l:function(a){return String(a)},
"%":"HTMLAreaElement"},
cW:{"^":"O;",$iscW:1,"%":"HTMLBaseElement"},
ft:{"^":"i;","%":";Blob"},
bJ:{"^":"O;",$isbJ:1,"%":"HTMLBodyElement"},
cf:{"^":"O;0n:height=,0m:width=",
ca:function(a,b,c){var z=this.cV(a,b,P.kh(c,null))
return z},
cV:function(a,b,c){return a.getContext(b,c)},
$iscf:1,
"%":"HTMLCanvasElement"},
kS:{"^":"i;",
al:function(a){return P.a2(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kT:{"^":"u;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fD:{"^":"cg;",$isfD:1,"%":"CSSNumericValue|CSSUnitValue"},
kZ:{"^":"fG;0k:length=","%":"CSSPerspective"},
an:{"^":"i;",$isan:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fE:{"^":"iK;0k:length=",
aM:function(a,b){var z=this.cW(a,this.as(a,b))
return z==null?"":z},
as:function(a,b){var z,y
z=$.et()
y=z[b]
if(typeof y==="string")return y
y=this.d7(a,b)
z[b]=y
return y},
d7:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fM()+b
if(z in a)return z
return b},
cW:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fF:{"^":"b;",
gn:function(a){return this.aM(a,"height")},
gm:function(a){return this.aM(a,"width")}},
cg:{"^":"i;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fG:{"^":"i;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
l0:{"^":"cg;0k:length=","%":"CSSTransformValue"},
l1:{"^":"cg;0k:length=","%":"CSSUnparsedValue"},
l3:{"^":"i;0k:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
fN:{"^":"O;","%":"HTMLDivElement"},
fO:{"^":"u;",
da:function(a,b){return a.adoptNode(b)},
cb:function(a,b){return a.getElementById(b)},
dG:function(a,b){return a.querySelector(b)},
gbN:function(a){return new W.bv(a,"mousedown",!1,[W.W])},
gbO:function(a){return new W.bv(a,"mousemove",!1,[W.W])},
gbP:function(a){return new W.bv(a,"mouseup",!1,[W.W])},
gbQ:function(a){return new W.bv(a,H.v(W.d8(a)),!1,[W.aN])},
"%":"XMLDocument;Document"},
l4:{"^":"i;",
l:function(a){return String(a)},
"%":"DOMException"},
fP:{"^":"i;",
dr:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
l5:{"^":"iO;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.x(c,"$isX",[P.E],"$asX")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
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
fQ:{"^":"i;",
l:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gm(a))+" x "+H.f(this.gn(a))},
F:function(a,b){var z
if(b==null)return!1
if(!H.aR(b,"$isX",[P.E],"$asX"))return!1
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
l6:{"^":"iQ;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.v(c)
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[P.e]},
$isy:1,
$asy:function(){return[P.e]},
$asp:function(){return[P.e]},
$isl:1,
$asl:function(){return[P.e]},
$isa:1,
$asa:function(){return[P.e]},
$asr:function(){return[P.e]},
"%":"DOMStringList"},
l7:{"^":"i;0k:length=","%":"DOMTokenList"},
U:{"^":"u;0dL:tagName=",
gde:function(a){return new W.iR(a)},
l:function(a){return a.localName},
O:["am",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.d7
if(z==null){z=H.j([],[W.ad])
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
y=(y&&C.I).dr(y,"")
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
z=$.ah.body;(z&&C.o).K(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.A(C.T,a.tagName)){z=$.ch;(z&&C.B).cc(z,x)
z=$.ch
w=(z&&C.B).dn(z,b)}else{x.innerHTML=b
w=$.ah.createDocumentFragment()
for(z=J.n(w);y=x.firstChild,y!=null;)z.K(w,y)}z=$.ah.body
if(x==null?z!=null:x!==z)J.cP(x)
c.aS(w)
C.q.da(document,w)
return w},function(a,b,c){return this.O(a,b,c,null)},"dq",null,null,"gdR",5,5,null],
ce:function(a,b,c,d){a.textContent=null
this.K(a,this.O(a,b,c,d))},
cd:function(a,b){return this.ce(a,b,null,null)},
a2:function(a,b){return a.getAttribute(b)},
d_:function(a,b){return a.removeAttribute(b)},
gbN:function(a){return new W.bU(a,"mousedown",!1,[W.W])},
gbO:function(a){return new W.bU(a,"mousemove",!1,[W.W])},
gbP:function(a){return new W.bU(a,"mouseup",!1,[W.W])},
gbQ:function(a){return new W.bU(a,H.v(W.d8(a)),!1,[W.aN])},
$isU:1,
"%":";Element"},
fV:{"^":"o:18;",
$1:function(a){return!!J.B(H.h(a,"$isu")).$isU}},
l9:{"^":"O;0n:height=,0m:width=","%":"HTMLEmbedElement"},
a4:{"^":"i;",$isa4:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
P:{"^":"i;",
d9:function(a,b,c,d){H.m(c,{func:1,args:[W.a4]})
if(c!=null)this.cP(a,b,c,!1)},
cP:function(a,b,c,d){return a.addEventListener(b,H.bd(H.m(c,{func:1,args:[W.a4]}),1),!1)},
$isP:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dU|dV|dY|dZ"},
ao:{"^":"ft;",$isao:1,"%":"File"},
lq:{"^":"iX;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isao")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
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
"%":"FileList"},
lr:{"^":"P;0k:length=","%":"FileWriter"},
lu:{"^":"O;0k:length=","%":"HTMLFormElement"},
ap:{"^":"i;",$isap:1,"%":"Gamepad"},
h2:{"^":"O;","%":"HTMLHeadElement"},
lv:{"^":"i;0k:length=","%":"History"},
lw:{"^":"ja;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isu")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
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
h3:{"^":"fO;","%":"HTMLDocument"},
lx:{"^":"O;0n:height=,0m:width=","%":"HTMLIFrameElement"},
lA:{"^":"i;0n:height=,0m:width=","%":"ImageBitmap"},
lB:{"^":"i;0n:height=,0m:width=","%":"ImageData"},
lC:{"^":"O;0n:height=,0m:width=","%":"HTMLImageElement"},
lE:{"^":"O;0n:height=,0m:width=","%":"HTMLInputElement"},
b_:{"^":"dE;",$isb_:1,"%":"KeyboardEvent"},
hk:{"^":"i;",
l:function(a){return String(a)},
$ishk:1,
"%":"Location"},
ho:{"^":"O;","%":"HTMLAudioElement;HTMLMediaElement"},
lL:{"^":"i;0k:length=","%":"MediaList"},
lM:{"^":"jh;",
h:function(a,b){return P.a2(a.get(H.v(b)))},
H:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gJ:function(a){var z=H.j([],[P.e])
this.H(a,new W.hq(z))
return z},
gk:function(a){return a.size},
$asV:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"MIDIInputMap"},
hq:{"^":"o:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
lN:{"^":"ji;",
h:function(a,b){return P.a2(a.get(H.v(b)))},
H:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gJ:function(a){var z=H.j([],[P.e])
this.H(a,new W.hr(z))
return z},
gk:function(a){return a.size},
$asV:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"MIDIOutputMap"},
hr:{"^":"o:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
as:{"^":"i;",$isas:1,"%":"MimeType"},
lO:{"^":"jk;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isas")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
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
$asr:function(){return[W.as]},
"%":"MimeTypeArray"},
W:{"^":"dE;",
gbM:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.b4(a.offsetX,a.offsetY,[P.E])
else{z=a.target
if(!J.B(W.e0(z)).$isU)throw H.d(P.z("offsetX is only supported on elements"))
y=H.h(W.e0(z),"$isU")
z=a.clientX
x=a.clientY
w=[P.E]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.x(new P.b4(u,v,w),"$isb4",w,"$asb4")
if(typeof z!=="number")return z.aX()
if(typeof x!=="number")return x.aX()
return new P.b4(C.r.bV(z-u),C.r.bV(x-v),w)}},
$isW:1,
"%":";DragEvent|MouseEvent"},
a8:{"^":"hj;a",
gab:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.d(P.cq("No elements"))
if(y>1)throw H.d(P.cq("More than one element"))
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
if(b<0||b>=y.length)return H.k(y,b)
J.eN(z,c,y[b])},
gD:function(a){var z=this.a.childNodes
return new W.da(z,z.length,-1,[H.bh(C.V,z,"r",0)])},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.k(z,b)
return z[b]},
$asp:function(){return[W.u]},
$asl:function(){return[W.u]},
$asa:function(){return[W.u]}},
u:{"^":"P;0dF:previousSibling=",
dH:function(a){var z=a.parentNode
if(z!=null)J.bE(z,a)},
l:function(a){var z=a.nodeValue
return z==null?this.cl(a):z},
K:function(a,b){return a.appendChild(b)},
d0:function(a,b){return a.removeChild(b)},
d1:function(a,b,c){return a.replaceChild(b,c)},
$isu:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hB:{"^":"jm;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isu")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
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
lX:{"^":"O;0n:height=,0m:width=","%":"HTMLObjectElement"},
lZ:{"^":"P;0n:height=,0m:width=","%":"OffscreenCanvas"},
m_:{"^":"i;0n:height=,0m:width=","%":"PaintSize"},
au:{"^":"i;0k:length=",$isau:1,"%":"Plugin"},
m1:{"^":"jq;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isau")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
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
"%":"PluginArray"},
m3:{"^":"W;0n:height=,0m:width=","%":"PointerEvent"},
hV:{"^":"i;",
dn:function(a,b){return a.createContextualFragment(b)},
cc:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
m8:{"^":"jw;",
h:function(a,b){return P.a2(a.get(H.v(b)))},
H:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gJ:function(a){var z=H.j([],[P.e])
this.H(a,new W.i0(z))
return z},
gk:function(a){return a.size},
$asV:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"RTCStatsReport"},
i0:{"^":"o:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
m9:{"^":"i;0n:height=,0m:width=","%":"Screen"},
ma:{"^":"O;0k:length=","%":"HTMLSelectElement"},
av:{"^":"P;",$isav:1,"%":"SourceBuffer"},
mc:{"^":"dV;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isav")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
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
"%":"SourceBufferList"},
aw:{"^":"i;",$isaw:1,"%":"SpeechGrammar"},
md:{"^":"jC;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaw")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
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
"%":"SpeechGrammarList"},
ax:{"^":"i;0k:length=",$isax:1,"%":"SpeechRecognitionResult"},
mg:{"^":"jF;",
h:function(a,b){return this.bg(a,H.v(b))},
H:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=0;!0;++z){y=this.cY(a,z)
if(y==null)return
b.$2(y,this.bg(a,y))}},
gJ:function(a){var z=H.j([],[P.e])
this.H(a,new W.ig(z))
return z},
gk:function(a){return a.length},
bg:function(a,b){return a.getItem(b)},
cY:function(a,b){return a.key(b)},
$asV:function(){return[P.e,P.e]},
$isM:1,
$asM:function(){return[P.e,P.e]},
"%":"Storage"},
ig:{"^":"o:19;a",
$2:function(a,b){return C.a.j(this.a,a)}},
ay:{"^":"i;",$isay:1,"%":"CSSStyleSheet|StyleSheet"},
il:{"^":"O;",
O:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.am(a,b,c,d)
z=W.fU("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a8(y).I(0,new W.a8(z))
return y},
"%":"HTMLTableElement"},
mj:{"^":"O;",
O:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.am(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.O(z.createElement("table"),b,c,d)
z.toString
z=new W.a8(z)
x=z.gab(z)
x.toString
z=new W.a8(x)
w=z.gab(z)
y.toString
w.toString
new W.a8(y).I(0,new W.a8(w))
return y},
"%":"HTMLTableRowElement"},
mk:{"^":"O;",
O:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.am(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.O(z.createElement("table"),b,c,d)
z.toString
z=new W.a8(z)
x=z.gab(z)
y.toString
x.toString
new W.a8(y).I(0,new W.a8(x))
return y},
"%":"HTMLTableSectionElement"},
dz:{"^":"O;",$isdz:1,"%":"HTMLTemplateElement"},
ml:{"^":"i;0m:width=","%":"TextMetrics"},
az:{"^":"P;",$isaz:1,"%":"TextTrack"},
aA:{"^":"P;",$isaA:1,"%":"TextTrackCue|VTTCue"},
mm:{"^":"jN;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaA")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
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
"%":"TextTrackCueList"},
mn:{"^":"dZ;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaz")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
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
"%":"TextTrackList"},
mo:{"^":"i;0k:length=","%":"TimeRanges"},
aB:{"^":"i;",$isaB:1,"%":"Touch"},
mp:{"^":"jS;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaB")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
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
$asr:function(){return[W.aB]},
"%":"TouchList"},
mq:{"^":"i;0k:length=","%":"TrackDefaultList"},
dE:{"^":"a4;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mE:{"^":"i;",
l:function(a){return String(a)},
"%":"URL"},
mG:{"^":"ho;0n:height=,0m:width=","%":"HTMLVideoElement"},
mH:{"^":"P;0k:length=","%":"VideoTrackList"},
mI:{"^":"P;0n:height=,0m:width=","%":"VisualViewport"},
mJ:{"^":"i;0m:width=","%":"VTTRegion"},
aN:{"^":"W;",
gdt:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.z("deltaY is not supported"))},
$isaN:1,
"%":"WheelEvent"},
iz:{"^":"P;",
gdd:function(a){var z,y,x
z=P.E
y=new P.af(0,$.J,[z])
x=H.m(new W.iA(new P.jJ(y,[z])),{func:1,ret:-1,args:[P.E]})
this.cU(a)
this.d2(a,W.e6(x,z))
return y},
d2:function(a,b){return a.requestAnimationFrame(H.bd(H.m(b,{func:1,ret:-1,args:[P.E]}),1))},
cU:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdH:1,
"%":"DOMWindow|Window"},
iA:{"^":"o:20;a",
$1:function(a){var z=this.a
a=H.c1(H.cC(a),{futureOr:1,type:H.q(z,0)})
z=z.a
if(z.a!==0)H.a_(P.cq("Future already completed"))
z.au(a)}},
dJ:{"^":"u;",$isdJ:1,"%":"Attr"},
mP:{"^":"jY;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isan")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
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
"%":"CSSRuleList"},
mR:{"^":"fQ;",
l:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
F:function(a,b){var z
if(b==null)return!1
if(!H.aR(b,"$isX",[P.E],"$asX"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.n(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gB:function(a){return W.dO(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mS:{"^":"k_;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isap")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ap]},
$isy:1,
$asy:function(){return[W.ap]},
$asp:function(){return[W.ap]},
$isl:1,
$asl:function(){return[W.ap]},
$isa:1,
$asa:function(){return[W.ap]},
$asr:function(){return[W.ap]},
"%":"GamepadList"},
mX:{"^":"k1;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isu")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
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
mY:{"^":"k3;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isax")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
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
"%":"SpeechRecognitionResultList"},
mZ:{"^":"k5;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isay")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
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
"%":"StyleSheetList"},
iH:{"^":"dj;cT:a<",
H:function(a,b){var z,y,x,w,v,u
H.m(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=this.gJ(this),y=z.length,x=this.a,w=J.n(x),v=0;v<z.length;z.length===y||(0,H.K)(z),++v){u=z[v]
b.$2(u,w.a2(x,u))}},
gJ:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.j([],[P.e])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.k(z,w)
v=H.h(z[w],"$isdJ")
if(v.namespaceURI==null)C.a.j(y,v.name)}return y},
$asV:function(){return[P.e,P.e]},
$asM:function(){return[P.e,P.e]}},
iR:{"^":"iH;a",
h:function(a,b){return J.cb(this.a,H.v(b))},
gk:function(a){return this.gJ(this).length}},
bv:{"^":"ih;a,b,c,$ti"},
bU:{"^":"bv;a,b,c,$ti"},
iT:{"^":"ii;a,b,c,d,e,$ti",p:{
aC:function(a,b,c,d,e){var z=W.e6(new W.iU(c),W.a4)
if(z!=null&&!0)J.eO(a,b,z,!1)
return new W.iT(0,a,b,z,!1,[e])}}},
iU:{"^":"o:21;a",
$1:function(a){return this.a.$1(H.h(a,"$isa4"))}},
bw:{"^":"b;a",
cL:function(a){var z,y
z=$.cG()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.S[y],W.kq())
for(y=0;y<12;++y)z.i(0,C.u[y],W.kr())}},
a0:function(a){return $.eJ().A(0,W.aX(a))},
X:function(a,b,c){var z,y,x
z=W.aX(a)
y=$.cG()
x=y.h(0,H.f(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.c_(x.$4(a,b,c,this))},
$isad:1,
p:{
dM:function(a){var z,y
z=document.createElement("a")
y=new W.jx(z,window.location)
y=new W.bw(y)
y.cL(a)
return y},
mV:[function(a,b,c,d){H.h(a,"$isU")
H.v(b)
H.v(c)
H.h(d,"$isbw")
return!0},"$4","kq",16,0,12],
mW:[function(a,b,c,d){var z,y,x
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
return z},"$4","kr",16,0,12]}},
r:{"^":"b;$ti",
gD:function(a){return new W.da(a,this.gk(a),-1,[H.bh(this,a,"r",0)])}},
dm:{"^":"b;a",
a0:function(a){return C.a.bo(this.a,new W.hD(a))},
X:function(a,b,c){return C.a.bo(this.a,new W.hC(a,b,c))},
$isad:1},
hD:{"^":"o:9;a",
$1:function(a){return H.h(a,"$isad").a0(this.a)}},
hC:{"^":"o:9;a,b,c",
$1:function(a){return H.h(a,"$isad").X(this.a,this.b,this.c)}},
jy:{"^":"b;",
cM:function(a,b,c,d){var z,y,x
this.a.I(0,c)
z=b.aJ(0,new W.jz())
y=b.aJ(0,new W.jA())
this.b.I(0,z)
x=this.c
x.I(0,C.U)
x.I(0,y)},
a0:function(a){return this.a.A(0,W.aX(a))},
X:["co",function(a,b,c){var z,y
z=W.aX(a)
y=this.c
if(y.A(0,H.f(z)+"::"+b))return this.d.dc(c)
else if(y.A(0,"*::"+b))return this.d.dc(c)
else{y=this.b
if(y.A(0,H.f(z)+"::"+b))return!0
else if(y.A(0,"*::"+b))return!0
else if(y.A(0,H.f(z)+"::*"))return!0
else if(y.A(0,"*::*"))return!0}return!1}],
$isad:1},
jz:{"^":"o:10;",
$1:function(a){return!C.a.A(C.u,H.v(a))}},
jA:{"^":"o:10;",
$1:function(a){return C.a.A(C.u,H.v(a))}},
jK:{"^":"jy;e,a,b,c,d",
X:function(a,b,c){if(this.co(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cb(a,"template")==="")return this.e.A(0,b)
return!1},
p:{
dX:function(){var z,y,x,w,v
z=P.e
y=P.cm(C.t,z)
x=H.q(C.t,0)
w=H.m(new W.jL(),{func:1,ret:z,args:[x]})
v=H.j(["TEMPLATE"],[z])
y=new W.jK(y,P.a5(null,null,null,z),P.a5(null,null,null,z),P.a5(null,null,null,z),null)
y.cM(null,new H.hm(C.t,w,[x,z]),v,null)
return y}}},
jL:{"^":"o:22;",
$1:function(a){return"TEMPLATE::"+H.f(H.v(a))}},
jI:{"^":"b;",
a0:function(a){var z=J.B(a)
if(!!z.$isds)return!1
z=!!z.$isH
if(z&&W.aX(a)==="foreignObject")return!1
if(z)return!0
return!1},
X:function(a,b,c){if(b==="is"||C.i.cg(b,"on"))return!1
return this.a0(a)},
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
$isaZ:1},
iL:{"^":"b;a",$isP:1,$isdH:1,p:{
iM:function(a){if(a===window)return H.h(a,"$isdH")
else return new W.iL(a)}}},
ad:{"^":"b;"},
jx:{"^":"b;a,b",$ismD:1},
e_:{"^":"b;a",
aS:function(a){new W.jV(this).$2(a,null)},
a5:function(a,b){if(b==null)J.cP(a)
else J.bE(b,a)},
d5:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.f6(a)
x=J.cb(y.gcT(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a9(t)}v="element unprintable"
try{v=J.bl(a)}catch(t){H.a9(t)}try{u=W.aX(a)
this.d4(H.h(a,"$isU"),b,z,v,u,H.h(y,"$isM"),H.v(x))}catch(t){if(H.a9(t) instanceof P.aH)throw t
else{this.a5(a,b)
window
s="Removing corrupted element "+H.f(v)
if(typeof console!="undefined")window.console.warn(s)}}},
d4:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a5(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a0(a)){this.a5(a,b)
window
z="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.X(a,"is",g)){this.a5(a,b)
window
z="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gJ(f)
y=H.j(z.slice(0),[H.q(z,0)])
for(x=f.gJ(f).length-1,z=f.a,w=J.n(z);x>=0;--x){if(x>=y.length)return H.k(y,x)
v=y[x]
if(!this.a.X(a,J.ff(v),w.a2(z,v))){window
u="Removing disallowed attribute <"+H.f(e)+" "+v+'="'+H.f(w.a2(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.a2(z,v)
w.d_(z,v)}}if(!!J.B(a).$isdz)this.aS(a.content)},
$islV:1},
jV:{"^":"o:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.d5(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a5(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.f7(z)}catch(w){H.a9(w)
v=H.h(z,"$isu")
if(x){u=v.parentNode
if(u!=null)J.bE(u,v)}else J.bE(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.h(y,"$isu")}}},
iK:{"^":"i+fF;"},
iN:{"^":"i+p;"},
iO:{"^":"iN+r;"},
iP:{"^":"i+p;"},
iQ:{"^":"iP+r;"},
iW:{"^":"i+p;"},
iX:{"^":"iW+r;"},
j9:{"^":"i+p;"},
ja:{"^":"j9+r;"},
jh:{"^":"i+V;"},
ji:{"^":"i+V;"},
jj:{"^":"i+p;"},
jk:{"^":"jj+r;"},
jl:{"^":"i+p;"},
jm:{"^":"jl+r;"},
jp:{"^":"i+p;"},
jq:{"^":"jp+r;"},
jw:{"^":"i+V;"},
dU:{"^":"P+p;"},
dV:{"^":"dU+r;"},
jB:{"^":"i+p;"},
jC:{"^":"jB+r;"},
jF:{"^":"i+V;"},
jM:{"^":"i+p;"},
jN:{"^":"jM+r;"},
dY:{"^":"P+p;"},
dZ:{"^":"dY+r;"},
jR:{"^":"i+p;"},
jS:{"^":"jR+r;"},
jX:{"^":"i+p;"},
jY:{"^":"jX+r;"},
jZ:{"^":"i+p;"},
k_:{"^":"jZ+r;"},
k0:{"^":"i+p;"},
k1:{"^":"k0+r;"},
k2:{"^":"i+p;"},
k3:{"^":"k2+r;"},
k4:{"^":"i+p;"},
k5:{"^":"k4+r;"}}],["","",,P,{"^":"",
a2:function(a){var z,y,x,w,v
if(a==null)return
z=P.S(P.e,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.K)(y),++w){v=H.v(y[w])
z.i(0,v,a[v])}return z},
kh:function(a,b){var z={}
a.H(0,new P.ki(z))
return z},
d4:function(){var z=$.d3
if(z==null){z=J.c7(window.navigator.userAgent,"Opera",0)
$.d3=z}return z},
fM:function(){var z,y
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
ki:{"^":"o:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
kI:function(a){return Math.sqrt(a)},
dN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
b4:{"^":"b;S:a>,P:b>,$ti",
l:function(a){return"Point("+H.f(this.a)+", "+H.f(this.b)+")"},
F:function(a,b){if(b==null)return!1
return H.aR(b,"$isb4",[P.E],null)&&this.a==J.bI(b)&&this.b==b.gP(b)},
gB:function(a){var z,y,x
z=J.am(this.a)
y=J.am(this.b)
y=P.dN(P.dN(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
jr:{"^":"b;"},
X:{"^":"jr;$ti"}}],["","",,P,{"^":"",fp:{"^":"i;",$isfp:1,"%":"SVGAnimatedLength"},la:{"^":"H;0n:height=,0m:width=","%":"SVGFEBlendElement"},lb:{"^":"H;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},lc:{"^":"H;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},ld:{"^":"H;0n:height=,0m:width=","%":"SVGFECompositeElement"},le:{"^":"H;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},lf:{"^":"H;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},lg:{"^":"H;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},lh:{"^":"H;0n:height=,0m:width=","%":"SVGFEFloodElement"},li:{"^":"H;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},lj:{"^":"H;0n:height=,0m:width=","%":"SVGFEImageElement"},lk:{"^":"H;0n:height=,0m:width=","%":"SVGFEMergeElement"},ll:{"^":"H;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},lm:{"^":"H;0n:height=,0m:width=","%":"SVGFEOffsetElement"},ln:{"^":"H;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},lo:{"^":"H;0n:height=,0m:width=","%":"SVGFETileElement"},lp:{"^":"H;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},ls:{"^":"H;0n:height=,0m:width=","%":"SVGFilterElement"},lt:{"^":"bo;0n:height=,0m:width=","%":"SVGForeignObjectElement"},h1:{"^":"bo;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bo:{"^":"H;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},lD:{"^":"bo;0n:height=,0m:width=","%":"SVGImageElement"},b0:{"^":"i;",$isb0:1,"%":"SVGLength"},lJ:{"^":"jc;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return this.T(a,b)},
i:function(a,b,c){H.h(c,"$isb0")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
T:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b0]},
$isl:1,
$asl:function(){return[P.b0]},
$isa:1,
$asa:function(){return[P.b0]},
$asr:function(){return[P.b0]},
"%":"SVGLengthList"},lK:{"^":"H;0n:height=,0m:width=","%":"SVGMaskElement"},b3:{"^":"i;",$isb3:1,"%":"SVGNumber"},lW:{"^":"jo;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return this.T(a,b)},
i:function(a,b,c){H.h(c,"$isb3")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
T:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b3]},
$isl:1,
$asl:function(){return[P.b3]},
$isa:1,
$asa:function(){return[P.b3]},
$asr:function(){return[P.b3]},
"%":"SVGNumberList"},m0:{"^":"H;0n:height=,0m:width=","%":"SVGPatternElement"},m2:{"^":"i;0k:length=","%":"SVGPointList"},m4:{"^":"i;0n:height=,0m:width=","%":"SVGRect"},m5:{"^":"h1;0n:height=,0m:width=","%":"SVGRectElement"},ds:{"^":"H;",$isds:1,"%":"SVGScriptElement"},mh:{"^":"jH;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return this.T(a,b)},
i:function(a,b,c){H.v(c)
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
T:function(a,b){return a.getItem(b)},
$asp:function(){return[P.e]},
$isl:1,
$asl:function(){return[P.e]},
$isa:1,
$asa:function(){return[P.e]},
$asr:function(){return[P.e]},
"%":"SVGStringList"},H:{"^":"U;",
O:function(a,b,c,d){var z,y,x,w,v,u
z=H.j([],[W.ad])
C.a.j(z,W.dM(null))
C.a.j(z,W.dX())
C.a.j(z,new W.jI())
c=new W.e_(new W.dm(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.o).dq(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a8(w)
u=z.gab(z)
for(z=J.n(v);x=u.firstChild,x!=null;)z.K(v,x)
return v},
$isH:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mi:{"^":"bo;0n:height=,0m:width=","%":"SVGSVGElement"},b7:{"^":"i;",$isb7:1,"%":"SVGTransform"},mr:{"^":"jU;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return this.T(a,b)},
i:function(a,b,c){H.h(c,"$isb7")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
T:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b7]},
$isl:1,
$asl:function(){return[P.b7]},
$isa:1,
$asa:function(){return[P.b7]},
$asr:function(){return[P.b7]},
"%":"SVGTransformList"},mF:{"^":"bo;0n:height=,0m:width=","%":"SVGUseElement"},jb:{"^":"i+p;"},jc:{"^":"jb+r;"},jn:{"^":"i+p;"},jo:{"^":"jn+r;"},jG:{"^":"i+p;"},jH:{"^":"jG+r;"},jT:{"^":"i+p;"},jU:{"^":"jT+r;"}}],["","",,P,{"^":"",ai:{"^":"b;",$isl:1,
$asl:function(){return[P.a3]},
$isa:1,
$asa:function(){return[P.a3]},
$isis:1}}],["","",,P,{"^":"",kO:{"^":"i;0k:length=","%":"AudioBuffer"},kP:{"^":"iI;",
h:function(a,b){return P.a2(a.get(H.v(b)))},
H:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gJ:function(a){var z=H.j([],[P.e])
this.H(a,new P.fr(z))
return z},
gk:function(a){return a.size},
$asV:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"AudioParamMap"},fr:{"^":"o:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},kQ:{"^":"P;0k:length=","%":"AudioTrackList"},fs:{"^":"P;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lY:{"^":"fs;0k:length=","%":"OfflineAudioContext"},iI:{"^":"i+V;"}}],["","",,P,{"^":"",fu:{"^":"i;",$isfu:1,"%":"WebGLBuffer"},h0:{"^":"i;",$ish0:1,"%":"WebGLFramebuffer"},hU:{"^":"i;",$ishU:1,"%":"WebGLProgram"},m6:{"^":"i;",
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
aK:function(a,b){return a.getProgramInfoLog(b)},
aL:function(a,b,c){return a.getProgramParameter(b,c)},
aN:function(a,b){return a.getShaderInfoLog(b)},
aO:function(a,b,c){return a.getShaderParameter(b,c)},
aP:function(a,b,c){return a.getUniformLocation(b,c)},
bL:function(a,b){return a.linkProgram(b)},
aU:function(a,b,c){return a.shaderSource(b,c)},
aW:function(a,b,c,d){return a.stencilFunc(b,c,d)},
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
"%":"WebGLRenderingContext"},m7:{"^":"i;",
df:function(a,b){return a.beginTransformFeedback(b)},
di:function(a,b){return a.bindVertexArray(b)},
ds:function(a){return a.createVertexArray()},
du:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dv:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dw:function(a){return a.endTransformFeedback()},
dO:function(a,b,c,d){this.d8(a,b,H.x(c,"$isa",[P.e],"$asa"),d)
return},
d8:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dP:function(a,b,c){return a.vertexAttribDivisor(b,c)},
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
aK:function(a,b){return a.getProgramInfoLog(b)},
aL:function(a,b,c){return a.getProgramParameter(b,c)},
aN:function(a,b){return a.getShaderInfoLog(b)},
aO:function(a,b,c){return a.getShaderParameter(b,c)},
aP:function(a,b,c){return a.getUniformLocation(b,c)},
bL:function(a,b){return a.linkProgram(b)},
aU:function(a,b,c){return a.shaderSource(b,c)},
aW:function(a,b,c,d){return a.stencilFunc(b,c,d)},
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
"%":"WebGL2RenderingContext"},i5:{"^":"i;",$isi5:1,"%":"WebGLShader"},io:{"^":"i;",$isio:1,"%":"WebGLTexture"},it:{"^":"i;",$isit:1,"%":"WebGLUniformLocation"},ix:{"^":"i;",$isix:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",me:{"^":"jE;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return P.a2(this.cX(a,b))},
i:function(a,b,c){H.h(c,"$isM")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
cX:function(a,b){return a.item(b)},
$asp:function(){return[[P.M,,,]]},
$isl:1,
$asl:function(){return[[P.M,,,]]},
$isa:1,
$asa:function(){return[[P.M,,,]]},
$asr:function(){return[[P.M,,,]]},
"%":"SQLResultSetRowList"},jD:{"^":"i+p;"},jE:{"^":"jD+r;"}}],["","",,G,{"^":"",
iB:function(a){var z,y,x,w
z=H.j(a.split("\n"),[P.e])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.k(z,y)
C.a.i(z,y,w+H.f(z[y]))}return C.a.a9(z,"\n")},
dK:function(a,b,c){var z,y,x,w
z=J.n(a)
y=z.bC(a,b)
z.aU(a,y,c)
z.bz(a,y)
x=H.c_(z.aO(a,y,35713))
if(x!=null&&!x){w=z.aN(a,y)
P.aE("E:Compilation failed:")
P.aE("E:"+G.iB(c))
P.aE("E:Failure:")
P.aE(C.i.L("E:",w))
throw H.d(w)}return y},
hE:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
d.v(b)
d.ac(0,a)
e.v(c)
e.ac(0,a)
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
r=Math.sqrt(e.gak())
if(r===0)return!1
e.U(0,-1/r)
return!0},
db:function(a,b){var z,y,x
H.x(a,"$isa",[T.c],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.f.i(b,z,J.bI(a[y]))
if(y>=a.length)return H.k(a,y)
C.f.i(b,z+1,J.ca(a[y]))
z+=2
if(y>=a.length)return H.k(a,y)
x=J.cN(a[y])
if(z>=b.length)return H.k(b,z)
b[z]=x}return b},
fY:function(a,b){var z,y
H.x(a,"$isa",[T.t],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.f.i(b,z,J.bI(a[y]))
if(y>=a.length)return H.k(a,y)
C.f.i(b,z+1,J.ca(a[y]))}return b},
fZ:function(a,b){var z,y,x,w,v
H.x(a,"$isa",[T.aM],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.f.i(b,z,J.bI(a[y]))
if(y>=a.length)return H.k(a,y)
C.f.i(b,z+1,J.ca(a[y]))
x=z+2
if(y>=a.length)return H.k(a,y)
w=J.cN(a[y])
v=b.length
if(x>=v)return H.k(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.k(a,y)
w=J.f9(a[y])
if(z>=v)return H.k(b,z)
b[z]=w}return b},
fX:function(a,b){var z,y
H.x(a,"$isa",[[P.a,P.D]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.m.i(b,z,J.bk(a[y],0))
if(y>=a.length)return H.k(a,y)
C.m.i(b,z+1,J.bk(a[y],1))
if(y>=a.length)return H.k(a,y)
C.m.i(b,z+2,J.bk(a[y],2))
if(y>=a.length)return H.k(a,y)
C.m.i(b,z+3,J.bk(a[y],3))}return b},
j7:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.aq(z,[H.q(z,0)]),y=y.gD(y),x=b.x,w=[[P.a,P.D]],v=[P.a3],u=[T.aM],t=[T.c],s=[T.t];y.u();){r=y.d
if(!x.ai(0,r)){r="Dropping unnecessary attribute: "+H.f(r)
if($.ec>0)H.c5("I: "+r)
continue}q=z.h(0,r)
switch($.aa().h(0,r).a){case"vec2":b.a3(r,G.fY(H.bD(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.a3(r,G.db(H.bD(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.a3(r,G.fZ(H.bD(q,"$isa",u,"$asa"),null),4)
break
case"float":b.a3(r,new Float32Array(H.bW(H.bD(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.a3(r,G.fX(H.bD(q,"$isa",w,"$asa"),null),4)
break}}},
bP:function(a,b,c){var z,y,x,w,v,u,t,s
z=b.d
y=b.e.x
x=P.e
w=P.S(x,P.b)
v=J.eX(z.a)
u=new G.hp(z,v,4,w,y,0,-1,P.S(x,P.ai),"meshdata:"+a,!1,!0)
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
y=H.x(c.cu(),"$isa",[P.D],"$asa")
u.y=J.c8(z.a)
x=u.ch.length
if(x<768){u.sax(new Uint8Array(H.bW(y)))
u.Q=5121}else if(x<196608){u.sax(new Uint16Array(H.bW(y)))
u.Q=5123}else{u.sax(new Uint32Array(H.bW(y)))
u.Q=5125}J.bF(z.a,v)
y=u.y
x=u.cx
J.c6(z.a,34963,y)
J.cL(z.a,34963,x,35048)
G.j7(c,u)
return u},
b1:{"^":"b;"},
aL:{"^":"b1;d,a,b,c",
aq:function(){return this.d},
l:function(a){var z,y,x,w
z=H.j(["{"+new H.dD(H.kn(this)).l(0)+"}["+this.a+"]"],[P.e])
for(y=this.d,x=new H.aq(y,[H.q(y,0)]),x=x.gD(x);x.u();){w=x.d
C.a.j(z,H.f(w)+": "+H.f(y.h(0,w)))}return C.a.a9(z,"\n")}},
fv:{"^":"dv;",
aQ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=this.d
a.v(z)
y=a.a
y[12]=0
y[13]=0
y[14]=0
y[15]=1
z=z.a
x=-z[12]
w=-z[13]
v=-z[14]
z=J.B(x)
u=!!z.$isaM
t=u?x.gc8(x):1
if(!!z.$isc){s=x.gS(x)
w=x.gP(x)
v=x.ga1(x)
x=s}else if(u){s=x.gS(x)
w=x.gP(x)
v=x.ga1(x)
x=s}else if(!(typeof x==="number")){x=null
w=null
v=null}z=y[0]
if(typeof x!=="number")return H.ak(x)
u=y[4]
if(typeof w!=="number")return H.ak(w)
r=y[8]
if(typeof v!=="number")return H.ak(v)
q=y[12]
p=y[1]
o=y[5]
n=y[9]
m=y[13]
l=y[2]
k=y[6]
j=y[10]
i=y[14]
h=y[3]
g=y[7]
f=y[11]
e=y[15]
y[12]=z*x+u*w+r*v+q*t
y[13]=p*x+o*w+n*v+m*t
y[14]=l*x+k*w+j*v+i*t
y[15]=h*x+g*w+f*v+e*t}},
fx:{"^":"b;0a,b",
bK:function(a,b,c){J.f3(this.a,b)
if(c>0)J.fl(this.a,b,c)},
c6:function(a,b,c,d,e,f,g,h){J.c6(this.a,34962,b)
J.fm(this.a,c,d,e,!1,g,h)}},
h_:{"^":"b;a,b,c,d,e"},
Z:{"^":"b;ag:a>,a6:b>,a7:c>",p:{
L:function(a,b,c){return new G.Z(a,b,c)}}},
aJ:{"^":"b;ag:a>,a6:b>,a7:c>,d"},
bO:{"^":"b;a,b,c,d,e",
V:function(a){switch($.aa().h(0,a).a){case"vec2":this.e.i(0,a,H.j([],[T.t]))
break
case"vec3":this.e.i(0,a,H.j([],[T.c]))
break
case"vec4":this.e.i(0,a,H.j([],[T.aM]))
break
case"float":this.e.i(0,a,H.j([],[P.a3]))
break
case"uvec4":this.e.i(0,a,H.j([],[[P.a,P.D]]))
break}},
cq:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)C.a.j(y,new G.aJ(z,z+1,z+2,z+3))},
b_:function(a){var z,y,x,w,v
H.x(a,"$isa",[T.c],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.K)(a),++x){w=a[x]
v=new T.c(new Float32Array(3))
v.v(w)
C.a.j(y,v)}},
cr:function(a){var z,y,x,w,v
H.x(a,"$isa",[T.c],"$asa")
z=this.d
y=z.length
C.a.j(this.b,new G.Z(y,y+1,y+2))
for(x=0;x<3;++x){w=a[x]
v=new T.c(new Float32Array(3))
v.v(w)
C.a.j(z,v)}},
an:function(a,b){var z,y,x,w,v,u,t
z=[T.t]
H.x(b,"$isa",z,"$asa")
y=H.x(this.e.h(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.K)(b),++w){v=b[w]
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.j(y,new T.t(u))}},
ao:function(a,b){var z,y,x,w,v,u
z=[T.c]
H.x(b,"$isa",z,"$asa")
y=H.x(this.e.h(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.K)(b),++w){v=b[w]
u=new T.c(new Float32Array(3))
u.v(v)
x.j(y,u)}},
cu:function(){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.j(x,[P.D])
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
cw:function(a,b){var z,y,x,w,v,u,t
z=H.j([],[T.t])
this.e.i(0,"aTexUV",z)
for(y=b-1,x=a-1,w=0;w<b;++w)for(v=w/y,u=0;u<a;++u){t=new Float32Array(2)
t[0]=v
t[1]=u/x
C.a.j(z,new T.t(t))}},
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
C.a.j(z,new G.aJ(v+s,r+s,r+t,v+t))
t=s}w=u}},
l:function(a){var z,y,x,w,v
z=H.j(["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"],[P.e])
for(y=this.e,x=new H.aq(y,[H.q(y,0)]),x=x.gD(x);x.u();){w=x.d
v=$.aa().h(0,w).a
C.a.j(z,H.f(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.a9(z," ")}},
dB:{"^":"b;a,b,c"},
dA:{"^":"b;a,b,c"},
hn:{"^":"aL;d,a,b,c",p:{
bt:function(a){var z=P.S(P.e,P.b)
z.i(0,"cDepthTest",!0)
z.i(0,"cDepthWrite",!0)
z.i(0,"cBlendEquation",$.en())
z.i(0,"cStencilFunc",$.ex())
return new G.hn(z,a,!1,!0)}}},
hp:{"^":"b1;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sax:function(a){this.cx=H.x(a,"$isa",[P.D],"$asa")},
b0:function(a,b,c){var z,y
C.i.at(a,0)
H.h(b,"$isai")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.c6(z.a,34962,y)
J.cL(z.a,34962,b,35048)},
cz:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a3:function(a,b,c){var z,y,x,w,v
z=J.cH(a,0)===105
if(z&&this.z===0)this.z=C.c.aY(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.c8(x.a))
this.b0(a,b,c)
w=$.aa().h(0,a)
if(w==null)throw H.d("Unknown canonical "+a)
v=this.x.h(0,a)
J.bF(x.a,this.e)
x.bK(0,v,z?1:0)
x.c6(0,y.h(0,a),v,w.b2(),5126,!1,0,0)},
l:function(a){var z,y,x,w
z=this.cx
y=H.j(["Faces:"+(z==null?0:z.length)],[P.e])
for(z=this.cy,x=new H.aq(z,[H.q(z,0)]),x=x.gD(x);x.u();){w=x.d
C.a.j(y,H.f(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.a9(y,"  ")}},
hH:{"^":"aL;x,y,z,Q,ch,cx,cy,db,dx,dy,d,a,b,c",
aq:function(){var z,y
z=this.z
this.x.aQ(z)
y=this.Q
y.v(this.y)
y.aH(0,z)
z=this.d
z.i(0,"uPerspectiveViewMatrix",y)
return z},
a4:function(){var z,y,x,w,v,u,t,s,r,q
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
w.aT()
w=w.a
w[0]=2/x
w[5]=2/r
w[10]=-2/q
w[12]=-(z+y)/x
w[13]=-(u+v)/r
w[14]=-(s+t)/q
w[15]=1},
ap:function(a,b){var z
if(typeof b!=="number")return H.ak(b)
z=a/b
if(this.ch===z)return
this.ch=z
this.a4()}},
hK:{"^":"aL;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
ap:function(a,b){var z
if(typeof b!=="number")return H.ak(b)
z=a/b
if(this.z===z)return
this.z=z
this.a4()},
a4:function(){var z,y,x,w,v,u
z=this.db
y=this.z
x=this.Q
w=this.ch
v=Math.tan(this.y*3.141592653589793/180*0.5)
u=x-w
z.aT()
z=z.a
z[0]=1/(v*y)
z[5]=1/v
z[10]=(w+x)/u
z[11]=-1
z[14]=2*x*w/u},
aq:function(){var z,y,x,w,v
z=this.x
y=z.d.a
x=y[12]
w=y[13]
y=y[14]
v=new T.c(new Float32Array(3))
v.q(x,w,y)
y=this.d
y.i(0,"uEyePosition",v)
v=this.cy
z.aQ(v)
z=this.cx
z.v(this.db)
z.aH(0,v)
y.i(0,"uPerspectiveViewMatrix",z)
return y}},
l8:{"^":"b;"},
hZ:{"^":"b1;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cD:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.K)(z),++u){t=z[u]
x.i(0,t,J.cO(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.K)(z),++u){t=z[u]
x.i(0,t,J.cO(w.a,v,t))}},
cG:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.j([],[P.e])
x=H.j([],[P.e])
for(y=new H.aq(y,[H.q(y,0)]),y=y.gD(y);y.u();){w=y.d
if(!z.ai(0,w))C.a.j(x,w)}for(z=this.x,z=P.je(z,z.r,H.q(z,0)),y=this.Q;z.u();){w=z.d
if(!y.A(0,w))C.a.j(x,w)}return x},
cJ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.x(b,"$isM",[P.e,P.b],"$asM")
z=Date.now()
for(y=new H.aq(b,[H.q(b,0)]),y=y.gD(y),x=this.d,w=this.y,v=this.z,u=0;y.u();){t=y.d
switch(J.cH(t,0)){case 117:if(w.ai(0,t)){s=b.h(0,t)
if(v.ai(0,t))H.c5("E:"+(t+" : group ["+a+"] overwrites ["+t+"]"))
v.i(0,t,a)
r=$.aa().h(0,t)
if(r==null)H.a_("unknown "+t)
q=w.h(0,t)
t=r.a
switch(t){case"int":if(r.c===0){H.Q(s)
J.cc(x.a,q,s)}else if(!!J.B(s).$ish6)J.fj(x.a,q,s)
break
case"float":if(r.c===0){H.ea(s)
J.fh(x.a,q,s)}else if(!!J.B(s).$isai)J.fi(x.a,q,s)
break
case"mat4":if(r.c===0){t=H.al(s,"$isN").a
J.cU(x.a,q,!1,t)}else if(!!J.B(s).$isai)J.cU(x.a,q,!1,s)
break
case"mat3":if(r.c===0){t=H.al(s,"$isar").a
J.cT(x.a,q,!1,t)}else if(!!J.B(s).$isai)J.cT(x.a,q,!1,s)
break
case"vec4":t=r.c
p=x.a
if(t===0)J.cS(p,q,H.al(s,"$isaM").a)
else J.cS(p,q,H.h(s,"$isai"))
break
case"vec3":t=r.c
p=x.a
if(t===0)J.cR(p,q,H.al(s,"$isc").a)
else J.cR(p,q,H.h(s,"$isai"))
break
case"vec2":t=r.c
p=x.a
if(t===0)J.cQ(p,q,H.al(s,"$ist").a)
else J.cQ(p,q,H.h(s,"$isai"))
break
case"sampler2D":case"sampler2DShadow":t=this.ch
if(typeof t!=="number")return H.ak(t)
J.cI(x.a,33984+t)
t=H.al(s,"$isim").cA()
J.cK(x.a,3553,t)
t=this.ch
J.cc(x.a,q,t)
t=this.ch
if(typeof t!=="number")return t.L()
this.ch=t+1
break
case"samplerCube":t=this.ch
if(typeof t!=="number")return H.ak(t)
J.cI(x.a,33984+t)
t=H.al(s,"$isim").cA()
J.cK(x.a,34067,t)
t=this.ch
J.cc(x.a,q,t)
t=this.ch
if(typeof t!=="number")return t.L()
this.ch=t+1
break
default:H.c5("Error: unknow uniform type: "+t)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":t=J.aG(s,!0)
p=x.a
if(t)J.bG(p,2929)
else J.c9(p,2929)
break
case"cStencilFunc":H.al(s,"$isdB")
t=s.a
p=x.a
if(t===1281)J.c9(p,2960)
else{J.bG(p,2960)
p=s.b
o=s.c
J.fe(x.a,t,p,o)}break
case"cDepthWrite":H.c_(s)
J.eY(x.a,s)
break
case"cBlendEquation":H.al(s,"$isdA")
t=s.a
p=x.a
if(t===1281)J.c9(p,3042)
else{J.bG(p,3042)
p=s.b
o=s.c
J.eS(x.a,p,o)
J.eR(x.a,t)}break}++u
break}}n=P.fR(0,0,0,Date.now()-new P.bL(z,!1).a,0,0)
""+u
n.l(0)},
ct:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.x(b,"$isa",[G.aL],"$asa")
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
y.b8()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.K)(b),++x){w=b[x]
this.cJ(w.a,w.aq())}y=this.Q
y.a8(0)
for(v=a.cy,v=new H.aq(v,[H.q(v,0)]),v=v.gD(v);v.u();)y.j(0,v.d)
u=this.cG()
if(u.length!==0)P.aE("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(u)))
J.bF(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.cz()
s=a.Q
r=a.z
if(t)J.eP(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.f1(q,y,v,s,0,r)
else J.f0(q,y,v,s,0)}else{s=z.a
if(r>1)J.f_(s,y,0,v,r)
else J.eZ(s,y,0,v)}if(t)J.f4(z.a)},
p:{
i_:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.e
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
z=new G.hZ(b,c,d,u,P.cm(c.c,z),P.S(z,P.b),P.S(z,z),y,a,!1,!0)
z.cD(a,b,c,d)
return z}}},
C:{"^":"b;a,b,c",
b2:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
i6:{"^":"b;a,0b,c,d,e,f,r,x",
cp:function(a){var z,y,x,w
H.x(a,"$isa",[P.e],"$asa")
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
C.a.j(z,w)
y.i(0,w,this.r);++this.r}C.a.aV(z)},
aZ:function(a){var z,y,x
H.x(a,"$isa",[P.e],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.K)(a),++x)C.a.j(y,a[x])
C.a.aV(y)},
cE:function(a,b){this.b=this.cK(!0,H.x(a,"$isa",[P.e],"$asa"),b)},
b3:function(a){return this.cE(a,null)},
cK:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.e]
H.x(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.j(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
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
return C.a.a9(w,"\n")},
p:{
dt:function(a){var z,y
z=P.e
y=[z]
return new G.i6(a,H.j([],y),H.j([],y),H.j([],y),H.j([],y),0,P.S(z,P.D))}}},
dv:{"^":"b1;",
Z:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}}}],["","",,R,{"^":"",
du:function(a,b,c,d,e,f,g,h,i){return G.bP("cube",a,B.fH(!0,c,d,e,f,g,h,i))},
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
x=(y&&C.w).as(y,"float")
y.setProperty(x,"left","")
x=C.w.as(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.p.K(z,v)}return z},
id:{"^":"b;",
cF:function(a,b,c){var z,y
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
y=J.n(z)
y.K(z,this.b)
y.K(z,this.d)
y.K(z,this.c)}},
ie:{"^":"id;e,f,a,b,c,d",
cI:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.x.dN(y,2)+" fps"
C.p.cd(this.c,b)
x=C.c.W(30*C.x.dj(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.h(z.firstChild,"$isU")
v=w.style
u=""+x+"px"
v.height=u
C.p.K(z,w)},
cH:function(a){return this.cI(a,"")}}}],["","",,A,{"^":"",
eb:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.x(e,"$isa",[G.aL],"$asa")
z=b.dx
z.v(c)
y=b.d
z.aH(0,y)
x=b.cx
H.f(b)
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
v.dm(new T.ar(u))
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
a.ct(x,e,d)
if(0>=e.length)return H.k(e,-1)
e.pop()
for(y=b.cy,r=0;!1;++r){if(r>=0)return H.k(y,r)
A.eb(a,y[r],z,d,e)}},
b2:{"^":"dv;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
l:function(a){return"NODE["+this.a+"]"}},
co:{"^":"b1;d,e,f,a,b,c"},
hY:{"^":"b1;d,e,f,r,x,y,z,Q,a,b,c",
cs:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
for(z=this.f,y=z.length,x=P.e,w=P.b,t=0;t<z.length;z.length===y||(0,H.K)(z),++t){s=z[t]
r=s.e
C.a.j(r,new G.aL(P.S(x,w),"transforms",!1,!0))
q=new T.N(new Float32Array(16))
q.G()
for(v=s.f,u=v.length,p=s.d,o=0;o<v.length;v.length===u||(0,H.K)(v),++o)A.eb(p,v[o],q,a,r)
if(0>=r.length)return H.k(r,-1)
r.pop()}},
b1:function(){return this.cs(null)},
p:{
dr:function(a,b,c){var z=new A.hY(c,b,H.j([],[A.co]),17664,0,0,0,0,a,!1,!0)
z.d=new G.h_(b,null,null,null,null)
return z}}}}],["","",,V,{}],["","",,B,{"^":"",
fH:function(a5,a6,a7,a8,a9,b0,b1,b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
z=-b0
y=-b1
x=new T.c(new Float32Array(3))
x.q(z,y,b2)
w=new T.c(new Float32Array(3))
w.q(b0,y,b2)
v=new T.c(new Float32Array(3))
v.q(b0,b1,b2)
u=new T.c(new Float32Array(3))
u.q(z,b1,b2)
t=-b2
s=new T.c(new Float32Array(3))
s.q(z,y,t)
r=new T.c(new Float32Array(3))
r.q(z,b1,t)
q=new T.c(new Float32Array(3))
q.q(b0,b1,t)
p=new T.c(new Float32Array(3))
p.q(b0,y,t)
o=new T.c(new Float32Array(3))
o.q(z,b1,t)
n=new T.c(new Float32Array(3))
n.q(z,b1,b2)
m=new T.c(new Float32Array(3))
m.q(b0,b1,b2)
l=new T.c(new Float32Array(3))
l.q(b0,b1,t)
k=new T.c(new Float32Array(3))
k.q(b0,y,b2)
j=new T.c(new Float32Array(3))
j.q(z,y,b2)
i=new T.c(new Float32Array(3))
i.q(z,y,t)
h=new T.c(new Float32Array(3))
h.q(b0,y,t)
g=new T.c(new Float32Array(3))
g.q(b0,y,t)
f=new T.c(new Float32Array(3))
f.q(b0,b1,t)
e=new T.c(new Float32Array(3))
e.q(b0,b1,b2)
d=new T.c(new Float32Array(3))
d.q(b0,y,b2)
c=new T.c(new Float32Array(3))
c.q(z,y,t)
b=new T.c(new Float32Array(3))
b.q(z,y,b2)
y=new T.c(new Float32Array(3))
y.q(z,b1,b2)
a=new T.c(new Float32Array(3))
a.q(z,b1,t)
t=[T.c]
a0=H.j([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a],t)
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
a1=H.j([z,y,x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b],[T.t])
a2=new G.bO(!1,H.j([],[G.Z]),H.j([],[G.aJ]),H.j([],t),P.S(P.e,[P.a,,]))
a2.V("aTexUV")
a2.V("aNormal")
a2.cq(6)
a2.b_(a0)
a2.an("aTexUV",a1)
for(a3=0;z=$.eI(),a3<6;++a3){a4=z[a3]
a2.ao("aNormal",H.j([a4,a4,a4,a4],t))}return a2},
fJ:function(a,b,c,a0,a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=c/2
y=[T.c]
x=H.j([],y)
w=H.j([],[T.t])
v=H.j([],y)
u=new T.c(new Float32Array(3))
u.q(0,z,0)
C.a.j(x,u)
u=new T.t(new Float32Array(2))
u.w(0,0)
C.a.j(w,u)
u=new T.c(new Float32Array(3))
u.q(0,1,0)
C.a.j(v,u)
u=-z
t=new T.c(new Float32Array(3))
t.q(0,u,0)
C.a.j(x,t)
t=new T.t(new Float32Array(2))
t.w(1,1)
C.a.j(w,t)
t=new T.c(new Float32Array(3))
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
C.a.j(x,new T.c(t))
t=new Float32Array(2)
t[0]=r
t[1]=1
C.a.j(w,new T.t(t))
t=new Float32Array(3)
t[0]=0
t[1]=1
t[2]=0
C.a.j(v,new T.c(t))
t=new Float32Array(3)
t[0]=q*b
t[1]=u
t[2]=p*b
C.a.j(x,new T.c(t))
t=new Float32Array(2)
t[0]=r
t[1]=0
C.a.j(w,new T.t(t))
t=new Float32Array(3)
t[0]=0
t[1]=-1
t[2]=0
C.a.j(v,new T.c(t))}for(u=2*a0,s=0;s<u;s=o){o=s+2
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
j=new T.c(new Float32Array(3))
G.hE(m,l,k,new T.c(t),j)
C.a.j(v,j)
C.a.j(v,j)}u=H.j([],[G.Z])
t=H.j([],[G.aJ])
i=new G.bO(!1,u,t,H.j([],y),P.S(P.e,[P.a,,]))
i.V("aTexUV")
i.b_(x)
i.an("aTexUV",w)
i.V("aNormal")
i.ao("aNormal",v)
for(h=a0*2,s=0;s<a0;s=f){g=s*2+2
l=g+1
f=s+1
e=(f===a0?0:f)*2+2
d=e+1
C.a.j(u,new G.Z(0,g,e))
C.a.j(u,new G.Z(1,d,l))
C.a.j(t,new G.aJ(h+e,h+g,h+l,h+d))}return i},
h4:function(a,a0,a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=[G.Z]
y=H.j([],z)
x=[T.c]
w=H.j([],x)
C.a.I(y,$.ev())
C.a.I(w,$.ew())
for(v=0;v<a;++v,y=u){u=H.j([],z)
for(t=y.length,s=0;s<y.length;y.length===t||(0,H.K)(y),++s){r=y[s]
q=J.cM(r)
if(q>=w.length)return H.k(w,q)
q=w[q]
p=new T.c(new Float32Array(3))
p.v(q)
q=r.ga6(r)
if(q>=w.length)return H.k(w,q)
p.j(0,w[q])
p.U(0,0.5)
p.C(0)
q=r.ga6(r)
if(q>=w.length)return H.k(w,q)
q=w[q]
o=new T.c(new Float32Array(3))
o.v(q)
q=r.ga7(r)
if(q>=w.length)return H.k(w,q)
o.j(0,w[q])
o.U(0,0.5)
o.C(0)
q=r.ga7(r)
if(q>=w.length)return H.k(w,q)
q=w[q]
n=new T.c(new Float32Array(3))
n.v(q)
q=r.gag(r)
if(q>=w.length)return H.k(w,q)
n.j(0,w[q])
n.U(0,0.5)
n.C(0)
m=w.length
C.a.j(w,p)
l=w.length
C.a.j(w,o)
k=w.length
C.a.j(w,n)
C.a.j(u,new G.Z(r.gag(r),m,k))
C.a.j(u,new G.Z(r.ga6(r),l,m))
C.a.j(u,new G.Z(r.ga7(r),k,l))
C.a.j(u,new G.Z(m,l,k))}}j=new G.bO(!1,H.j([],z),H.j([],[G.aJ]),H.j([],x),P.S(P.e,[P.a,,]))
j.V("aTexUV")
j.V("aNormal")
for(z=y.length,t=[T.t],s=0;s<y.length;y.length===z||(0,H.K)(y),++s){r=y[s]
q=J.cM(r)
if(q>=w.length)return H.k(w,q)
i=w[q]
q=r.ga6(r)
if(q>=w.length)return H.k(w,q)
h=w[q]
q=r.ga7(r)
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
j.ao("aNormal",H.j([i,h,g],x))
q=new T.c(new Float32Array(3))
q.v(i)
q.U(0,a0)
f=new T.c(new Float32Array(3))
f.v(h)
f.U(0,a0)
b=new T.c(new Float32Array(3))
b.v(g)
b.U(0,a0)
j.cr(H.j([q,f,b],x))
j.an("aTexUV",H.j([new T.t(e),new T.t(d),new T.t(c)],t))}return j},
i7:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=h+1
y=g+1
x=B.ip(B.hI(new B.i8(e,d,f,c),0,6.283185307179586,y,!1,0.001),h,i,!1)
w=H.j([],[G.Z])
v=H.j([],[G.aJ])
u=[T.c]
t=H.j([],u)
s=new G.bO(!1,w,v,t,P.S(P.e,[P.a,,]))
for(w=x.length,r=0;r<x.length;x.length===w||(0,H.K)(x),++r){q=x[r]
for(p=0;p<q.length;p+=2){v=H.h(q[p],"$isc")
v.toString
o=new T.c(new Float32Array(3))
o.v(v)
C.a.j(t,o)}}s.cv(z,y,!1)
s.cw(z,y)
s.V("aNormal")
for(w=x.length,v=s.e,r=0;r<x.length;x.length===w||(0,H.K)(x),++r){q=x[r]
for(p=0;t=q.length,p<t;p+=2){o=p+1
if(o>=t)return H.k(q,o)
o=H.h(q[o],"$isc")
n=H.x(v.h(0,"aNormal"),"$isa",u,"$asa")
o.toString
t=new T.c(new Float32Array(3))
t.v(o);(n&&C.a).j(n,t)}}return s},
ip:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=[T.c]
H.x(a,"$isa",z,"$asa")
y=H.j([],[[P.a,T.c]])
x=new Float32Array(3)
w=new T.c(x)
v=new Float32Array(3)
u=new T.c(v)
t=new Float32Array(3)
s=new T.c(t)
for(r=b+1,q=0;p=a.length,q<p;q+=2){o=a[q]
n=q+1
if(n>=p)return H.k(a,n)
m=a[n]
l=H.j([],z)
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
w.v(o)
w.ah(u,f)
w.ah(s,e)
p=new T.c(new Float32Array(3))
p.v(w)
C.a.j(l,p)
x[2]=0
x[1]=0
x[0]=0
w.ah(u,f)
w.ah(s,e)
w.C(0)
p=new T.c(new Float32Array(3))
p.v(w)
C.a.j(l,p)}}return y},
hI:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
H.m(a,{func:1,ret:-1,args:[P.a3,T.c]})
z=H.j([],[T.c])
y=new T.c(new Float32Array(3))
x=new T.c(new Float32Array(3))
for(w=(c-b)/(d-1),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+f,x)
x.ac(0,y)
t=new T.c(new Float32Array(3))
t.v(y)
C.a.j(z,t)
t=new T.c(new Float32Array(3))
t.v(x)
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
b.sS(0,y*v)
b.sP(0,y*u)
b.sa1(0,this.d*z*0.5*w)}}}],["","",,D,{"^":"",hd:{"^":"b;a,b,c",
cB:function(a){var z,y
a=document
z=W.b_
y={func:1,ret:-1,args:[z]}
W.aC(a,"keydown",H.m(new D.hf(this),y),!1,z)
W.aC(a,"keyup",H.m(new D.hg(this),y),!1,z)},
p:{
he:function(a){var z=P.D
z=new D.hd(P.a5(null,null,null,z),P.a5(null,null,null,z),P.a5(null,null,null,z))
z.cB(a)
return z}}},hf:{"^":"o:11;a",
$1:function(a){var z
H.h(a,"$isb_")
z=this.a
z.a.j(0,a.which)
z.b.j(0,a.which)}},hg:{"^":"o:11;a",
$1:function(a){var z
H.h(a,"$isb_")
z=this.a
z.a.bR(0,a.which)
z.c.j(0,a.which)}},hs:{"^":"b;a,b,c,d,e,f,r,x",
cC:function(a){var z,y,x
if(a==null)a=document
z=J.n(a)
y=z.gbO(a)
x=H.q(y,0)
W.aC(y.a,y.b,H.m(new D.hu(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbN(a)
y=H.q(x,0)
W.aC(x.a,x.b,H.m(new D.hv(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbP(a)
x=H.q(y,0)
W.aC(y.a,y.b,H.m(new D.hw(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbQ(a)
x=H.q(z,0)
W.aC(z.a,z.b,H.m(new D.hx(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
ht:function(a){var z=P.D
z=new D.hs(P.a5(null,null,null,z),P.a5(null,null,null,z),P.a5(null,null,null,z),0,0,0,0,0)
z.cC(a)
return z}}},hu:{"^":"o:3;a",
$1:function(a){var z,y
H.h(a,"$isW")
a.preventDefault()
z=this.a
y=J.n(a)
z.r=H.Q(y.gbM(a).a)
z.x=H.Q(y.gbM(a).b)
z.d=a.movementX
z.e=a.movementY}},hv:{"^":"o:3;a",
$1:function(a){var z
H.h(a,"$isW")
a.preventDefault()
P.aE("BUTTON "+H.f(a.button))
z=this.a
z.a.j(0,a.button)
z.b.j(0,a.button)}},hw:{"^":"o:3;a",
$1:function(a){var z
H.h(a,"$isW")
a.preventDefault()
z=this.a
z.a.bR(0,a.button)
z.c.j(0,a.button)}},hx:{"^":"o:25;a",
$1:function(a){H.h(a,"$isaN")
a.preventDefault()
this.a.f=H.Q(C.ab.gdt(a))}},hG:{"^":"fv;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bA:function(a){var z,y
z=C.f.dz(H.x(a,"$isl",[P.b],"$asl"),0,new A.kp(),P.D)
if(typeof z!=="number")return H.ak(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kp:{"^":"o:26;",
$2:function(a,b){var z,y
H.Q(a)
z=J.am(b)
if(typeof a!=="number")return a.L()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",ar:{"^":"b;a",
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
l:function(a){return"[0] "+this.R(0).l(0)+"\n[1] "+this.R(1).l(0)+"\n[2] "+this.R(2).l(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=9)return H.k(z,b)
return z[b]},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ar){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gB:function(a){return A.bA(this.a)},
R:function(a){var z,y,x
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
return new T.c(z)},
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
l:function(a){return"[0] "+this.R(0).l(0)+"\n[1] "+this.R(1).l(0)+"\n[2] "+this.R(2).l(0)+"\n[3] "+this.R(3).l(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.k(z,b)
return z[b]},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.N){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gB:function(a){return A.bA(this.a)},
R:function(a){var z,y,x
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
aT:function(){var z=this.a
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
aH:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
if(b>=2)return H.k(z,b)
return z[b]},
gk:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gS:function(a){return this.a[0]},
gP:function(a){return this.a[1]}},c:{"^":"b;a",
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
if(b instanceof T.c){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gB:function(a){return A.bA(this.a)},
h:function(a,b){var z=this.a
if(b>=3)return H.k(z,b)
return z[b]},
gk:function(a){return Math.sqrt(this.gak())},
gak:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
C:function(a){var z,y,x
z=Math.sqrt(this.gak())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aF:function(a){var z,y
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
z=new T.c(new Float32Array(3))
z.q(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
j:function(a,b){var z,y
z=H.h(b,"$isc").a
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
ah:function(a,b){var z,y
z=a.a
y=this.a
y[0]=y[0]+z[0]*b
y[1]=y[1]+z[1]*b
y[2]=y[2]+z[2]*b},
ac:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
U:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
sS:function(a,b){this.a[0]=b
return b},
sP:function(a,b){this.a[1]=b
return b},
sa1:function(a,b){this.a[2]=b
return b},
gS:function(a){return this.a[0]},
gP:function(a){return this.a[1]},
ga1:function(a){return this.a[2]},
p:{
I:function(a,b,c){var z=new T.c(new Float32Array(3))
z.q(a,b,c)
return z}}},aM:{"^":"b;a",
l:function(a){var z=this.a
return H.f(z[0])+","+H.f(z[1])+","+H.f(z[2])+","+H.f(z[3])},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aM){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gB:function(a){return A.bA(this.a)},
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
gS:function(a){return this.a[0]},
gP:function(a){return this.a[1]},
ga1:function(a){return this.a[2]},
gc8:function(a){return this.a[3]}}}],["","",,K,{"^":"",
ei:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z={}
y=document
x=C.q.cb(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.ie(0,0,x,w,y.createElement("div"),R.jg("blue","gray",90,30))
u.cF(x,"blue","gray")
t=H.h(C.q.dG(y,"#webgl-canvas"),"$iscf")
s=new G.fx(t)
y=P.e
x=P.b
v=(t&&C.H).ca(t,"webgl2",P.dh(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],y,x))
s.a=v
if(v==null)H.a_(P.d9('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
r="ChronosGL Config: "+H.f(J.fa(v))
if($.ec>0)P.aE("I: "+r)
J.eU(v,0,0,0,1)
J.bG(v,2929)
v=new Float32Array(3)
r=D.he(null)
q=D.ht(t)
p=new T.N(new Float32Array(16))
p.G()
o=new Float32Array(3)
n=new Float32Array(3)
m=new Float32Array(3)
l=new D.hG(25,10,0,0,new T.c(v),-0.02,r,q,p,new T.c(o),new T.c(n),new T.c(m),new T.c(new Float32Array(3)),"camera:orbit",!1,!0)
k=G.i_("textured",s,$.eL(),$.eK())
v=new Float32Array(16)
r=new Float32Array(16)
q=new T.N(new Float32Array(16))
q.G()
j=new G.hH(l,new T.N(v),new T.N(r),q,1,-20,20,-20,-20,100,P.S(y,x),"othrogrpahic",!1,!0)
j.a4()
i=A.dr("shadow",s,null)
q=[G.aL]
r=H.j([j],q)
v=[A.b2]
p=H.j([],v)
C.a.j(i.f,new A.co(k,r,p,"objects",!1,!0))
r=new T.N(new Float32Array(16))
r.G()
o=new T.N(new Float32Array(16))
o.G()
h=new G.hK(l,50,1,0.1,1000,r,o,new T.N(new Float32Array(16)),P.S(y,x),"perspective",!1,!0)
h.a4()
g=A.dr("perspective",s,null)
g.r&=4294950911
y=H.j([h],q)
x=H.j([],v)
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
y=G.bP("icosahedron-3",k,B.h4(3,1,!0))
r=H.j([],v)
q=new Float32Array(9)
o=new T.N(new Float32Array(16))
o.G()
n=new T.N(new Float32Array(16))
n.G()
m=new Float32Array(3)
a=new Float32Array(3)
a0=new Float32Array(3)
y=new A.b2(f,y,r,new T.ar(q),o,n,new T.c(m),new T.c(a),new T.c(a0),new T.c(new Float32Array(3)),"sphere",!1,!0)
y.Z(0,0,0)
r=R.du(k,!0,1,0,1,0,1,1,1)
q=H.j([],v)
o=new Float32Array(9)
n=new T.N(new Float32Array(16))
n.G()
m=new T.N(new Float32Array(16))
m.G()
a=new Float32Array(3)
a0=new Float32Array(3)
a1=new Float32Array(3)
r=new A.b2(e,r,q,new T.ar(o),n,m,new T.c(a),new T.c(a0),new T.c(a1),new T.c(new Float32Array(3)),"cube",!1,!0)
r.Z(-5,0,-5)
q=G.bP("cylinder-32",k,B.fJ(3,6,2,32,!0))
o=H.j([],v)
n=new Float32Array(9)
m=new T.N(new Float32Array(16))
m.G()
a=new T.N(new Float32Array(16))
a.G()
a0=new Float32Array(3)
a1=new Float32Array(3)
a2=new Float32Array(3)
q=new A.b2(d,q,o,new T.ar(n),m,a,new T.c(a0),new T.c(a1),new T.c(a2),new T.c(new Float32Array(3)),"cylinder",!1,!0)
q.Z(5,0,-5)
o=G.bP("torusknot",k,B.i7(!0,!0,1,2,3,1,128,16,0.4,!1))
n=H.j([],v)
m=new Float32Array(9)
a=new T.N(new Float32Array(16))
a.G()
a0=new T.N(new Float32Array(16))
a0.G()
a1=new Float32Array(3)
a2=new Float32Array(3)
a3=new Float32Array(3)
o=new A.b2(c,o,n,new T.ar(m),a,a0,new T.c(a1),new T.c(a2),new T.c(a3),new T.c(new Float32Array(3)),"torus",!1,!0)
o.Z(5,0,5)
n=R.du(k,!0,1,0,1,0,20,0.1,20)
v=H.j([],v)
m=new Float32Array(9)
a=new T.N(new Float32Array(16))
a.G()
a0=new T.N(new Float32Array(16))
a0.G()
a1=new Float32Array(3)
a2=new Float32Array(3)
a3=new Float32Array(3)
v=new A.b2(b,n,v,new T.ar(m),a,a0,new T.c(a1),new T.c(a2),new T.c(a3),new T.c(new Float32Array(3)),"cube",!1,!0)
v.Z(0,-10,0)
a4=[y,r,q,o,v]
for(a5=0;a5<5;++a5){a6=a4[a5]
C.a.j(p,a6)
C.a.j(x,a6)}y=new K.kD(t,h,j,i,g)
y.$1(null)
x=W.a4
W.aC(window,"resize",H.m(y,{func:1,ret:-1,args:[x]}),!1,x)
z.a=0
new K.kC(z,l,i,g,u).$1(0)},
kD:{"^":"o:27;a,b,c,d,e",
$1:function(a){var z,y,x,w,v
z=this.a
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.aE("size change "+H.f(y)+" "+H.f(x))
if(typeof y!=="number")return y.aY()
z=C.c.W(y,2)
this.b.ap(z,x)
this.c.ap(z,x)
w=this.d
w.z=z
w.Q=x
v=this.e
v.z=z
v.Q=x
w.x=z}},
kC:{"^":"o:28;a,b,c,d,e",
$1:function(b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
H.cC(b2)
if(typeof b2!=="number")return b2.aX()
z=this.a
z.a=b2+0
y=this.b
x=y.r1
w=x.a
if(w.A(0,0)||w.A(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.aR()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.aR()
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
if(typeof v!=="number")return v.aR()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.r.dk(y.id,-1.4707963267948965,1.4707963267948965)
y.id=v
u=y.fy
t=y.go
s=u*Math.cos(v)
y.Z(s*Math.cos(t),u*Math.sin(v),s*Math.sin(t))
t=y.k2
v=y.d.a
u=t.a
v[12]=v[12]+u[0]
v[13]=v[13]+u[1]
v[14]=v[14]+u[2]
r=v[12]
q=v[13]
p=v[14]
o=new T.c(new Float32Array(3))
o.q(0,1,0)
u=y.e
n=u.a
n[0]=v[12]
n[1]=v[13]
n[2]=v[14]
n=new Float32Array(3)
m=new T.c(n)
m.v(u)
m.ac(0,t)
m.C(0)
l=o.bD(m)
l.C(0)
k=m.bD(l)
k.C(0)
t=l.aF(u)
j=k.aF(u)
u=m.aF(u)
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
a=Math.sqrt(h.gak())
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
w.c.a8(0)
w.b.a8(0)
x.e=0
x.d=0
x.f=0
x.c.a8(0)
x.b.a8(0)
this.c.b1()
this.d.b1()
C.ac.gdd(window).bT(this,-1)
this.e.cH(z.a)}}},1]]
setupProgram(dart,0,0)
J.B=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.de.prototype
return J.dd.prototype}if(typeof a=="string")return J.br.prototype
if(a==null)return J.hb.prototype
if(typeof a=="boolean")return J.ha.prototype
if(a.constructor==Array)return J.bp.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.b)return a
return J.c2(a)}
J.bg=function(a){if(typeof a=="string")return J.br.prototype
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
J.kl=function(a){if(typeof a=="number")return J.bq.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b8.prototype
return a}
J.km=function(a){if(typeof a=="number")return J.bq.prototype
if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b8.prototype
return a}
J.ee=function(a){if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b8.prototype
return a}
J.n=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.b)return a
return J.c2(a)}
J.bz=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.b8.prototype
return a}
J.aG=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.B(a).F(a,b)}
J.ab=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kl(a).Y(a,b)}
J.bk=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kz(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bg(a).h(a,b)}
J.cH=function(a,b){return J.ee(a).at(a,b)}
J.bE=function(a,b){return J.n(a).d0(a,b)}
J.eN=function(a,b,c){return J.n(a).d1(a,b,c)}
J.cI=function(a,b){return J.n(a).bn(a,b)}
J.eO=function(a,b,c,d){return J.n(a).d9(a,b,c,d)}
J.cJ=function(a,b,c){return J.n(a).bp(a,b,c)}
J.eP=function(a,b){return J.n(a).df(a,b)}
J.c6=function(a,b,c){return J.n(a).bq(a,b,c)}
J.eQ=function(a,b,c){return J.n(a).bs(a,b,c)}
J.cK=function(a,b,c){return J.n(a).bt(a,b,c)}
J.bF=function(a,b){return J.n(a).di(a,b)}
J.eR=function(a,b){return J.n(a).bu(a,b)}
J.eS=function(a,b,c){return J.n(a).bv(a,b,c)}
J.cL=function(a,b,c,d){return J.n(a).bw(a,b,c,d)}
J.eT=function(a,b){return J.n(a).bx(a,b)}
J.eU=function(a,b,c,d,e){return J.n(a).by(a,b,c,d,e)}
J.eV=function(a,b){return J.km(a).N(a,b)}
J.c7=function(a,b,c){return J.bg(a).dl(a,b,c)}
J.c8=function(a){return J.n(a).bA(a)}
J.eW=function(a){return J.n(a).bB(a)}
J.eX=function(a){return J.n(a).ds(a)}
J.eY=function(a,b){return J.n(a).bE(a,b)}
J.c9=function(a,b){return J.n(a).bF(a,b)}
J.eZ=function(a,b,c,d){return J.n(a).bG(a,b,c,d)}
J.f_=function(a,b,c,d,e){return J.n(a).du(a,b,c,d,e)}
J.f0=function(a,b,c,d,e){return J.n(a).bH(a,b,c,d,e)}
J.f1=function(a,b,c,d,e,f){return J.n(a).dv(a,b,c,d,e,f)}
J.f2=function(a,b){return J.ed(a).t(a,b)}
J.bG=function(a,b){return J.n(a).bI(a,b)}
J.f3=function(a,b){return J.n(a).bJ(a,b)}
J.f4=function(a){return J.n(a).dw(a)}
J.f5=function(a,b){return J.n(a).H(a,b)}
J.cM=function(a){return J.bz(a).gag(a)}
J.f6=function(a){return J.n(a).gde(a)}
J.am=function(a){return J.B(a).gB(a)}
J.bH=function(a){return J.ed(a).gD(a)}
J.aU=function(a){return J.bg(a).gk(a)}
J.f7=function(a){return J.n(a).gdF(a)}
J.f8=function(a){return J.n(a).gdL(a)}
J.f9=function(a){return J.bz(a).gc8(a)}
J.bI=function(a){return J.bz(a).gS(a)}
J.ca=function(a){return J.bz(a).gP(a)}
J.cN=function(a){return J.bz(a).ga1(a)}
J.cb=function(a,b){return J.n(a).a2(a,b)}
J.fa=function(a){return J.n(a).al(a)}
J.fb=function(a,b){return J.n(a).aK(a,b)}
J.fc=function(a,b,c){return J.n(a).aL(a,b,c)}
J.cO=function(a,b,c){return J.n(a).aP(a,b,c)}
J.fd=function(a,b){return J.n(a).bL(a,b)}
J.cP=function(a){return J.n(a).dH(a)}
J.fe=function(a,b,c,d){return J.n(a).aW(a,b,c,d)}
J.ff=function(a){return J.ee(a).dM(a)}
J.bl=function(a){return J.B(a).l(a)}
J.fg=function(a,b,c,d){return J.n(a).dO(a,b,c,d)}
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
J.fl=function(a,b,c){return J.n(a).dP(a,b,c)}
J.fm=function(a,b,c,d,e,f,g){return J.n(a).c5(a,b,c,d,e,f,g)}
J.fn=function(a,b,c,d,e){return J.n(a).c7(a,b,c,d,e)}
I.aS=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.o=W.bJ.prototype
C.H=W.cf.prototype
C.w=W.fE.prototype
C.p=W.fN.prototype
C.I=W.fP.prototype
C.J=W.h2.prototype
C.q=W.h3.prototype
C.K=J.i.prototype
C.a=J.bp.prototype
C.x=J.dd.prototype
C.c=J.de.prototype
C.r=J.bq.prototype
C.i=J.br.prototype
C.R=J.bs.prototype
C.f=H.hy.prototype
C.m=H.hA.prototype
C.V=W.hB.prototype
C.A=J.hL.prototype
C.B=W.hV.prototype
C.G=W.il.prototype
C.v=J.b8.prototype
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
C.S=H.j(I.aS(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.T=H.j(I.aS(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.U=H.j(I.aS([]),[P.e])
C.t=H.j(I.aS(["bind","if","ref","repeat","syntax"]),[P.e])
C.u=H.j(I.aS(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
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
$.aV=null
$.cX=null
$.ct=!1
$.eg=null
$.e7=null
$.el=null
$.c0=null
$.c3=null
$.cA=null
$.aP=null
$.ba=null
$.bb=null
$.cu=!1
$.J=C.e
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
I.$lazy(y,x,w)}})(["l2","eu",function(){return H.ef("_$dart_dartClosure")},"lI","cE",function(){return H.ef("_$dart_js")},"ms","ey",function(){return H.ae(H.bT({
toString:function(){return"$receiver$"}}))},"mt","ez",function(){return H.ae(H.bT({$method$:null,
toString:function(){return"$receiver$"}}))},"mu","eA",function(){return H.ae(H.bT(null))},"mv","eB",function(){return H.ae(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"my","eE",function(){return H.ae(H.bT(void 0))},"mz","eF",function(){return H.ae(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"mx","eD",function(){return H.ae(H.dC(null))},"mw","eC",function(){return H.ae(function(){try{null.$method$}catch(z){return z.message}}())},"mB","eH",function(){return H.ae(H.dC(void 0))},"mA","eG",function(){return H.ae(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mL","cF",function(){return P.iC()},"n1","bj",function(){return[]},"l_","et",function(){return{}},"mT","eJ",function(){return P.cm(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)},"mU","cG",function(){return P.S(P.e,P.bn)},"mf","ex",function(){return new G.dB(1281,0,4294967295)},"kR","en",function(){return new G.dA(1281,1281,1281)},"n_","aa",function(){return P.dh(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.E,"aColorAlpha",C.Z,"aPosition",C.C,"aTexUV",C.a5,"aNormal",C.a8,"aBinormal",C.Y,"aCenter",C.D,"aPointSize",C.b,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.aa,"aBitangent",C.W,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.b,"iaColor",C.d,"vColor",C.E,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.C,"vPositionFromLight",C.X,"vCenter",C.D,"vDepth",C.a3,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.F,"uConvolutionMatrix",C.F,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a9,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a7,"uAnimationTable",C.h,"uTime",C.a6,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a0,"uLightDescs",C.a1,"uLightCount",C.b,"uLightTypes",C.a2,"uBumpScale",C.a4,"uNormalScale",C.a_],P.e,G.C)},"kW","eq",function(){return T.I(0.8,0.8,0.8)},"kU","eo",function(){return T.I(0,0,1)},"kY","es",function(){return T.I(1,0,0)},"kX","er",function(){return T.I(0,1,0)},"kV","ep",function(){return T.I(0,1,1)},"n6","eL",function(){var z,y
z=G.dt("SolidColor")
y=[P.e]
z.cp(H.j(["aPosition"],y))
z.aZ(H.j(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.b3(H.j(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"],y))
return z},"n5","eK",function(){var z,y
z=G.dt("SolidColorF")
y=[P.e]
z.aZ(H.j(["uColor"],y))
z.b3(H.j(["oFragColor = vec4( uColor, 1.0 );"],y))
return z},"mQ","eI",function(){return H.j([T.I(0,0,1),T.I(0,0,-1),T.I(0,1,0),T.I(0,-1,0),T.I(1,0,0),T.I(-1,0,0)],[T.c])},"ly","ev",function(){return H.j([G.L(0,11,5),G.L(0,5,1),G.L(0,1,7),G.L(0,7,10),G.L(0,10,11),G.L(1,5,9),G.L(5,11,4),G.L(11,10,2),G.L(10,7,6),G.L(7,1,8),G.L(3,9,4),G.L(3,4,2),G.L(3,2,6),G.L(3,6,8),G.L(3,8,9),G.L(4,9,5),G.L(2,4,11),G.L(6,2,10),G.L(8,6,7),G.L(9,8,1)],[G.Z])},"n7","eM",function(){return(1+P.kI(5))/2},"lz","ew",function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.eM()
y=T.I(-1,z,0)
y.C(0)
x=T.I(1,z,0)
x.C(0)
if(typeof z!=="number")return z.dQ()
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
return H.j([y,x,w,v,u,t,s,r,q,p,o,z],[T.c])}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.G},{func:1,ret:-1},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:P.G,args:[W.W]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.G,args:[,]},{func:1,ret:P.G,args:[,,]},{func:1,ret:P.e,args:[P.D]},{func:1,ret:P.T,args:[W.ad]},{func:1,ret:P.T,args:[P.e]},{func:1,ret:P.G,args:[W.b_]},{func:1,ret:P.T,args:[W.U,P.e,P.e,W.bw]},{func:1,args:[,P.e]},{func:1,args:[P.e]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.G,args:[,],opt:[P.a6]},{func:1,ret:[P.af,,],args:[,]},{func:1,ret:P.T,args:[W.u]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.G,args:[P.E]},{func:1,args:[W.a4]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[W.u,W.u]},{func:1,ret:-1,args:[P.a3,T.c]},{func:1,ret:P.G,args:[W.aN]},{func:1,ret:P.D,args:[P.D,P.b]},{func:1,ret:-1,args:[W.a4]},{func:1,ret:-1,args:[P.E]},{func:1,ret:P.D,args:[,,]}]
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
if(x==y)H.kK(d||a)
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
if(typeof dartMainRunner==="function")dartMainRunner(K.ei,[])
else K.ei([])})})()
//# sourceMappingURL=ortho.dart.js.map
