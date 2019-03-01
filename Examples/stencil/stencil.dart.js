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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cF"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cF"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cF(this,d,e,f,true,false,a1).prototype
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
var dart=[["","",,H,{"^":"",lT:{"^":"b;a"}}],["","",,J,{"^":"",
cJ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c6:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cI==null){H.kN()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.e(P.dR("Return interceptor for "+H.f(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cM()]
if(v!=null)return v
v=H.kS(a)
if(v!=null)return v
if(typeof a=="function")return C.R
y=Object.getPrototypeOf(a)
if(y==null)return C.A
if(y===Object.prototype)return C.A
if(typeof w=="function"){Object.defineProperty(w,$.cM(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
j:{"^":"b;",
F:function(a,b){return a===b},
gB:function(a){return H.b5(a)},
k:["cv",function(a){return"Instance of '"+H.b6(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
ho:{"^":"j;",
k:function(a){return String(a)},
gB:function(a){return a?519018:218159},
$isT:1},
hp:{"^":"j;",
F:function(a,b){return null==b},
k:function(a){return"null"},
gB:function(a){return 0},
$isH:1},
cq:{"^":"j;",
gB:function(a){return 0},
k:["cz",function(a){return String(a)}]},
hZ:{"^":"cq;"},
b8:{"^":"cq;"},
by:{"^":"cq;",
k:function(a){var z=a[$.eD()]
if(z==null)return this.cz(a)
return"JavaScript function for "+H.f(J.bn(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbr:1},
bv:{"^":"j;$ti",
j:function(a,b){H.A(b,H.r(a,0))
if(!!a.fixed$length)H.Z(P.z("add"))
a.push(b)},
I:function(a,b){var z,y
H.u(b,"$ism",[H.r(a,0)],"$asm")
if(!!a.fixed$length)H.Z(P.z("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.F)(b),++y)a.push(b[y])},
a_:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.f(a[y]))
return z.join(b)},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
gdI:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.e(H.dr())},
bq:function(a,b){var z,y
H.n(b,{func:1,ret:P.T,args:[H.r(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.e(P.aH(a))}return!1},
cq:function(a,b){if(!!a.immutable$list)H.Z(P.z("sort"))
H.io(a,J.kn(),H.r(a,0))},
aV:function(a){return this.cq(a,null)},
A:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aF(a[z],b))return!0
return!1},
k:function(a){return P.co(a,"[","]")},
gD:function(a){return new J.fH(a,a.length,0,[H.r(a,0)])},
gB:function(a){return H.b5(a)},
gl:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.e(H.bf(a,b))
return a[b]},
i:function(a,b,c){H.A(c,H.r(a,0))
if(!!a.immutable$list)H.Z(P.z("indexed set"))
if(b>=a.length||b<0)throw H.e(H.bf(a,b))
a[b]=c},
$isx:1,
$asx:I.bg,
$ism:1,
$isa:1,
p:{
hn:function(a,b){return J.cp(H.h(a,[b]))},
cp:function(a){H.bG(a)
a.fixed$length=Array
return a},
lR:[function(a,b){return J.f7(H.ev(a,"$isa_"),H.ev(b,"$isa_"))},"$2","kn",8,0,28]}},
lS:{"^":"bv;$ti"},
fH:{"^":"b;a,b,c,0d,$ti",
sb6:function(a){this.d=H.A(a,H.r(this,0))},
gE:function(a){return this.d},
v:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.e(H.F(z))
x=this.c
if(x>=y){this.sb6(null)
return!1}this.sb6(z[x]);++this.c
return!0},
$isaZ:1},
bw:{"^":"j;",
O:function(a,b){var z
H.cK(b)
if(typeof b!=="number")throw H.e(H.bd(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gak(b)
if(this.gak(a)===z)return 0
if(this.gak(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gak:function(a){return a===0?1/a<0:a<0},
c5:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.e(P.z(""+a+".toInt()"))},
dq:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.e(P.z(""+a+".ceil()"))},
dr:function(a,b,c){if(this.O(b,c)>0)throw H.e(H.bd(b))
if(this.O(a,b)<0)return b
if(this.O(a,c)>0)return c
return a},
dS:function(a,b){var z
if(b>20)throw H.e(P.bT(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gak(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gB:function(a){return a&0x1FFFFFFF},
cB:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bn(a,b)},
Y:function(a,b){return(a|0)===a?a/b|0:this.bn(a,b)},
bn:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.e(P.z("Result of truncating division is "+H.f(z)+": "+H.f(a)+" ~/ "+b))},
bl:function(a,b){var z
if(a>0)z=this.dc(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dc:function(a,b){return b>31?0:a>>>b},
W:function(a,b){if(typeof b!=="number")throw H.e(H.bd(b))
return a>b},
$isa_:1,
$asa_:function(){return[P.E]},
$isa3:1,
$isE:1},
dt:{"^":"bw;",$isD:1},
ds:{"^":"bw;"},
bx:{"^":"j;",
at:function(a,b){if(b>=a.length)throw H.e(H.bf(a,b))
return a.charCodeAt(b)},
L:function(a,b){H.w(b)
if(typeof b!=="string")throw H.e(P.d5(b,null,null))
return a+b},
cs:function(a,b,c){var z
if(c>a.length)throw H.e(P.bT(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cr:function(a,b){return this.cs(a,b,0)},
cu:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.bU(b,null,null))
if(b>c)throw H.e(P.bU(b,null,null))
if(c>a.length)throw H.e(P.bU(c,null,null))
return a.substring(b,c)},
ct:function(a,b){return this.cu(a,b,null)},
dR:function(a){return a.toLowerCase()},
ds:function(a,b,c){if(c>a.length)throw H.e(P.bT(c,0,a.length,null,null))
return H.kZ(a,b,c)},
O:function(a,b){var z
H.w(b)
if(typeof b!=="string")throw H.e(H.bd(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
k:function(a){return a},
gB:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.bf(a,b))
return a[b]},
$isx:1,
$asx:I.bg,
$isa_:1,
$asa_:function(){return[P.d]},
$ishX:1,
$isd:1}}],["","",,H,{"^":"",
dr:function(){return new P.cw("No element")},
hm:function(){return new P.cw("Too many elements")},
io:function(a,b,c){H.u(a,"$isa",[c],"$asa")
H.n(b,{func:1,ret:P.D,args:[c,c]})
H.bz(a,0,J.aU(a)-1,b,c)},
bz:function(a,b,c,d,e){H.u(a,"$isa",[e],"$asa")
H.n(d,{func:1,ret:P.D,args:[e,e]})
if(c-b<=32)H.im(a,b,c,d,e)
else H.il(a,b,c,d,e)},
im:function(a,b,c,d,e){var z,y,x,w,v
H.u(a,"$isa",[e],"$asa")
H.n(d,{func:1,ret:P.D,args:[e,e]})
for(z=b+1,y=J.bh(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.aa(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
il:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.u(a,"$isa",[a2],"$asa")
H.n(a1,{func:1,ret:P.D,args:[a2,a2]})
z=C.d.Y(a0-b+1,6)
y=b+z
x=a0-z
w=C.d.Y(b+a0,2)
v=w-z
u=w+z
t=J.bh(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.aa(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.aa(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.aa(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.aa(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.aa(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.aa(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.aa(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.aa(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.aa(a1.$2(p,o),0)){n=o
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
if(typeof i!=="number")return i.a8()
if(i<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.W()
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
if(typeof e!=="number")return e.a8()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.W()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.W()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a8()
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
H.bz(a,b,m-2,a1,a2)
H.bz(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aF(a1.$2(t.h(a,m),r),0);)++m
for(;J.aF(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a8()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.bz(a,m,l,a1,a2)}else H.bz(a,m,l,a1,a2)},
dh:{"^":"m;"},
bS:{"^":"dh;$ti",
gD:function(a){return new H.dx(this,this.gl(this),0,[H.cH(this,"bS",0)])},
aK:function(a,b){return this.cw(0,H.n(b,{func:1,ret:P.T,args:[H.cH(this,"bS",0)]}))}},
dx:{"^":"b;a,b,c,0d,$ti",
sb7:function(a){this.d=H.A(a,H.r(this,0))},
gE:function(a){return this.d},
v:function(){var z,y,x,w
z=this.a
y=J.bh(z)
x=y.gl(z)
if(this.b!==x)throw H.e(P.aH(z))
w=this.c
if(w>=x){this.sb7(null)
return!1}this.sb7(y.u(z,w));++this.c
return!0},
$isaZ:1},
hB:{"^":"bS;a,b,$ti",
gl:function(a){return J.aU(this.a)},
u:function(a,b){return this.b.$1(J.fg(this.a,b))},
$asbS:function(a,b){return[b]},
$asm:function(a,b){return[b]}},
dS:{"^":"m;a,b,$ti",
gD:function(a){return new H.iO(J.bL(this.a),this.b,this.$ti)}},
iO:{"^":"aZ;a,b,$ti",
v:function(){var z,y
for(z=this.a,y=this.b;z.v();)if(y.$1(z.gE(z)))return!0
return!1},
gE:function(a){var z=this.a
return z.gE(z)}},
bR:{"^":"b;$ti"}}],["","",,H,{"^":"",
aE:function(a){var z,y
z=H.w(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kF:function(a){return init.types[H.P(a)]},
kQ:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.B(a).$isy},
f:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bn(a)
if(typeof z!=="string")throw H.e(H.bd(a))
return z},
b5:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b6:function(a){return H.i_(a)+H.c0(H.ak(a),0,null)},
i_:function(a){var z,y,x,w,v,u,t,s,r
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
return H.aE(w.length>1&&C.i.at(w,0)===36?C.i.ct(w,1):w)},
aI:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
i6:function(a){var z=H.aI(a).getFullYear()+0
return z},
i4:function(a){var z=H.aI(a).getMonth()+1
return z},
i0:function(a){var z=H.aI(a).getDate()+0
return z},
i1:function(a){var z=H.aI(a).getHours()+0
return z},
i3:function(a){var z=H.aI(a).getMinutes()+0
return z},
i5:function(a){var z=H.aI(a).getSeconds()+0
return z},
i2:function(a){var z=H.aI(a).getMilliseconds()+0
return z},
aD:function(a){throw H.e(H.bd(a))},
k:function(a,b){if(a==null)J.aU(a)
throw H.e(H.bf(a,b))},
bf:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aG(!0,b,"index",null)
z=H.P(J.aU(a))
if(!(b<0)){if(typeof z!=="number")return H.aD(z)
y=b>=z}else y=!0
if(y)return P.G(b,a,"index",null,z)
return P.bU(b,"index",null)},
bd:function(a){return new P.aG(!0,a,null,null)},
e:function(a){var z
if(a==null)a=new P.dD()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ey})
z.name=""}else z.toString=H.ey
return z},
ey:function(){return J.bn(this.dartException)},
Z:function(a){throw H.e(a)},
F:function(a){throw H.e(P.aH(a))},
a8:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.l0(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.bl(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cr(H.f(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dC(H.f(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.eH()
u=$.eI()
t=$.eJ()
s=$.eK()
r=$.eN()
q=$.eO()
p=$.eM()
$.eL()
o=$.eQ()
n=$.eP()
m=v.M(y)
if(m!=null)return z.$1(H.cr(H.w(y),m))
else{m=u.M(y)
if(m!=null){m.method="call"
return z.$1(H.cr(H.w(y),m))}else{m=t.M(y)
if(m==null){m=s.M(y)
if(m==null){m=r.M(y)
if(m==null){m=q.M(y)
if(m==null){m=p.M(y)
if(m==null){m=s.M(y)
if(m==null){m=o.M(y)
if(m==null){m=n.M(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dC(H.w(y),m))}}return z.$1(new H.iL(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dJ()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aG(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dJ()
return a},
bj:function(a){var z
if(a==null)return new H.e7(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.e7(a)},
kB:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
kP:function(a,b,c,d,e,f){H.i(a,"$isbr")
switch(H.P(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.dl("Unsupported number of arguments for wrapped closure"))},
be:function(a,b){var z
H.P(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kP)
a.$identity=z
return z},
fR:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.B(d).$isa){z.$reflectionInfo=d
x=H.ia(z).r}else x=d
w=e?Object.create(new H.ip().constructor.prototype):Object.create(new H.cj(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ab
if(typeof u!=="number")return u.L()
$.ab=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.da(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kF,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.d8:H.ck
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.e("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.da(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
fO:function(a,b,c,d){var z=H.ck
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
da:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fQ(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fO(y,!w,z,b)
if(y===0){w=$.ab
if(typeof w!=="number")return w.L()
$.ab=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aV
if(v==null){v=H.bP("self")
$.aV=v}return new Function(w+H.f(v)+";return "+u+"."+H.f(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ab
if(typeof w!=="number")return w.L()
$.ab=w+1
t+=w
w="return function("+t+"){return this."
v=$.aV
if(v==null){v=H.bP("self")
$.aV=v}return new Function(w+H.f(v)+"."+H.f(z)+"("+t+");}")()},
fP:function(a,b,c,d){var z,y
z=H.ck
y=H.d8
switch(b?-1:a){case 0:throw H.e(H.ig("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fQ:function(a,b){var z,y,x,w,v,u,t,s
z=$.aV
if(z==null){z=H.bP("self")
$.aV=z}y=$.d7
if(y==null){y=H.bP("receiver")
$.d7=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fP(w,!u,x,b)
if(w===1){z="return function(){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+");"
y=$.ab
if(typeof y!=="number")return y.L()
$.ab=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+", "+s+");"
y=$.ab
if(typeof y!=="number")return y.L()
$.ab=y+1
return new Function(z+y+"}")()},
cF:function(a,b,c,d,e,f,g){return H.fR(a,b,H.P(c),d,!!e,!!f,g)},
w:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.a6(a,"String"))},
em:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.a6(a,"double"))},
cK:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.a6(a,"num"))},
c3:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.a6(a,"bool"))},
P:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.a6(a,"int"))},
cL:function(a,b){throw H.e(H.a6(a,H.aE(H.w(b).substring(3))))},
kW:function(a,b){throw H.e(H.d9(a,H.aE(H.w(b).substring(3))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.B(a)[b])return a
H.cL(a,b)},
ag:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.B(a)[b]
else z=!0
if(z)return a
H.kW(a,b)},
ev:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.B(a)[b])return a
H.cL(a,b)},
bG:function(a){if(a==null)return a
if(!!J.B(a).$isa)return a
throw H.e(H.a6(a,"List<dynamic>"))},
kR:function(a,b){var z
if(a==null)return a
z=J.B(a)
if(!!z.$isa)return a
if(z[b])return a
H.cL(a,b)},
cG:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.P(z)]
else return a.$S()}return},
bD:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cG(J.B(a))
if(z==null)return!1
return H.ed(z,null,b,null)},
n:function(a,b){var z,y
if(a==null)return a
if($.cB)return a
$.cB=!0
try{if(H.bD(a,b))return a
z=H.bH(b)
y=H.a6(a,z)
throw H.e(y)}finally{$.cB=!1}},
c5:function(a,b){if(a!=null&&!H.cE(a,b))H.Z(H.a6(a,H.bH(b)))
return a},
eh:function(a){var z,y
z=J.B(a)
if(!!z.$iso){y=H.cG(z)
if(y!=null)return H.bH(y)
return"Closure"}return H.b6(a)},
l_:function(a){throw H.e(new P.fY(H.w(a)))},
er:function(a){return init.getIsolateTag(a)},
h:function(a,b){a.$ti=b
return a},
ak:function(a){if(a==null)return
return a.$ti},
nl:function(a,b,c){return H.aS(a["$as"+H.f(c)],H.ak(b))},
bi:function(a,b,c,d){var z
H.w(c)
H.P(d)
z=H.aS(a["$as"+H.f(c)],H.ak(b))
return z==null?null:z[d]},
cH:function(a,b,c){var z
H.w(b)
H.P(c)
z=H.aS(a["$as"+H.f(b)],H.ak(a))
return z==null?null:z[c]},
r:function(a,b){var z
H.P(b)
z=H.ak(a)
return z==null?null:z[b]},
bH:function(a){return H.aC(a,null)},
aC:function(a,b){var z,y
H.u(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aE(a[0].builtin$cls)+H.c0(a,1,b)
if(typeof a=="function")return H.aE(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.P(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.k(b,y)
return H.f(b[y])}if('func' in a)return H.km(a,b)
if('futureOr' in a)return"FutureOr<"+H.aC("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
km:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
H.u(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.h([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.j(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.k(b,r)
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
for(z=H.kA(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.w(z[l])
n=n+m+H.aC(i[h],b)+(" "+H.f(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
c0:function(a,b,c){var z,y,x,w,v,u
H.u(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.cy("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aC(u,c)}return"<"+z.k(0)+">"},
kE:function(a){var z,y,x,w
z=J.B(a)
if(!!z.$iso){y=H.cG(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ak(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aS:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aP:function(a,b,c,d){var z,y
H.w(b)
H.bG(c)
H.w(d)
if(a==null)return!1
z=H.ak(a)
y=J.B(a)
if(y[b]==null)return!1
return H.ek(H.aS(y[d],z),null,c,null)},
bI:function(a,b,c,d){H.w(b)
H.bG(c)
H.w(d)
if(a==null)return a
if(H.aP(a,b,c,d))return a
throw H.e(H.d9(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aE(b.substring(3))+H.c0(c,0,null),init.mangledGlobalNames)))},
u:function(a,b,c,d){H.w(b)
H.bG(c)
H.w(d)
if(a==null)return a
if(H.aP(a,b,c,d))return a
throw H.e(H.a6(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aE(b.substring(3))+H.c0(c,0,null),init.mangledGlobalNames)))},
ek:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a1(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a1(a[y],b,c[y],d))return!1
return!0},
nf:function(a,b,c){return a.apply(b,H.aS(J.B(b)["$as"+H.f(c)],H.ak(b)))},
et:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="H"||a===-1||a===-2||H.et(z)}return!1},
cE:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="H"||b===-1||b===-2||H.et(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cE(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bD(a,b)}z=J.B(a).constructor
y=H.ak(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a1(z,null,b,null)},
A:function(a,b){if(a!=null&&!H.cE(a,b))throw H.e(H.a6(a,H.bH(b)))
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
if('func' in c)return H.ed(a,b,c,d)
if('func' in a)return c.builtin$cls==="br"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a1("type" in a?a.type:null,b,x,d)
else if(H.a1(a,b,x,d))return!0
else{if(!('$is'+"aY" in y.prototype))return!1
w=y.prototype["$as"+"aY"]
v=H.aS(w,z?a.slice(1):null)
return H.a1(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.ek(H.aS(r,z),b,u,d)},
ed:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.kV(m,b,l,d)},
kV:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a1(c[w],d,a[w],b))return!1}return!0},
ni:function(a,b,c){Object.defineProperty(a,H.w(b),{value:c,enumerable:false,writable:true,configurable:true})},
kS:function(a){var z,y,x,w,v,u
z=H.w($.es.$1(a))
y=$.c4[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c7[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.w($.ej.$2(a,z))
if(z!=null){y=$.c4[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c7[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c8(x)
$.c4[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c7[z]=x
return x}if(v==="-"){u=H.c8(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.ew(a,x)
if(v==="*")throw H.e(P.dR(z))
if(init.leafTags[z]===true){u=H.c8(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ew(a,x)},
ew:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cJ(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c8:function(a){return J.cJ(a,!1,null,!!a.$isy)},
kU:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c8(z)
else return J.cJ(z,c,null,null)},
kN:function(){if(!0===$.cI)return
$.cI=!0
H.kO()},
kO:function(){var z,y,x,w,v,u,t,s
$.c4=Object.create(null)
$.c7=Object.create(null)
H.kJ()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.ex.$1(v)
if(u!=null){t=H.kU(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kJ:function(){var z,y,x,w,v,u,t
z=C.O()
z=H.aO(C.L,H.aO(C.Q,H.aO(C.y,H.aO(C.y,H.aO(C.P,H.aO(C.M,H.aO(C.N(C.z),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.es=new H.kK(v)
$.ej=new H.kL(u)
$.ex=new H.kM(t)},
aO:function(a,b){return a(b)||b},
kZ:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
i9:{"^":"b;a,b,c,d,e,f,r,0x",p:{
ia:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cp(z)
y=z[0]
x=z[1]
return new H.i9(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iE:{"^":"b;a,b,c,d,e,f",
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
ad:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.h([],[P.d])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iE(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bX:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dO:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hU:{"^":"R;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dC:function(a,b){return new H.hU(a,b==null?null:b.method)}}},
hq:{"^":"R;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.f(this.a)+")"},
p:{
cr:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hq(a,y,z?null:b.receiver)}}},
iL:{"^":"R;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
l0:{"^":"o:5;a",
$1:function(a){if(!!J.B(a).$isR)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
e7:{"^":"b;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa5:1},
o:{"^":"b;",
k:function(a){return"Closure '"+H.b6(this).trim()+"'"},
gck:function(){return this},
$isbr:1,
gck:function(){return this}},
dL:{"^":"o;"},
ip:{"^":"dL;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aE(z)+"'"}},
cj:{"^":"dL;a,b,c,d",
F:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cj))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gB:function(a){var z,y
z=this.c
if(z==null)y=H.b5(this.a)
else y=typeof z!=="object"?J.al(z):H.b5(z)
return(y^H.b5(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.b6(z)+"'")},
p:{
ck:function(a){return a.a},
d8:function(a){return a.c},
bP:function(a){var z,y,x,w,v
z=new H.cj("self","target","receiver","name")
y=J.cp(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iF:{"^":"R;a",
k:function(a){return this.a},
p:{
a6:function(a,b){return new H.iF("TypeError: "+P.bQ(a)+": type '"+H.eh(a)+"' is not a subtype of type '"+b+"'")}}},
fM:{"^":"R;a",
k:function(a){return this.a},
p:{
d9:function(a,b){return new H.fM("CastError: "+P.bQ(a)+": type '"+H.eh(a)+"' is not a subtype of type '"+b+"'")}}},
ie:{"^":"R;a",
k:function(a){return"RuntimeError: "+H.f(this.a)},
p:{
ig:function(a){return new H.ie(a)}}},
dP:{"^":"b;a,0b,0c,0d",
gag:function(){var z=this.b
if(z==null){z=H.bH(this.a)
this.b=z}return z},
k:function(a){return this.gag()},
gB:function(a){var z=this.d
if(z==null){z=C.i.gB(this.gag())
this.d=z}return z},
F:function(a,b){if(b==null)return!1
return b instanceof H.dP&&this.gag()===b.gag()}},
du:{"^":"dy;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gJ:function(a){return new H.aq(this,[H.r(this,0)])},
aj:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cW(z,b)}else{y=this.dG(b)
return y}},
dG:function(a){var z=this.d
if(z==null)return!1
return this.aH(this.az(z,J.al(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ae(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ae(w,b)
x=y==null?null:y.b
return x}else return this.dH(b)},
dH:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.az(z,J.al(a)&0x3ffffff)
x=this.aH(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.A(b,H.r(this,0))
H.A(c,H.r(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aB()
this.b=z}this.b8(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aB()
this.c=y}this.b8(y,b,c)}else{x=this.d
if(x==null){x=this.aB()
this.d=x}w=J.al(b)&0x3ffffff
v=this.az(x,w)
if(v==null)this.aE(x,w,[this.ar(b,c)])
else{u=this.aH(v,b)
if(u>=0)v[u].b=c
else v.push(this.ar(b,c))}}},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.e(P.aH(this))
z=z.c}},
b8:function(a,b,c){var z
H.A(b,H.r(this,0))
H.A(c,H.r(this,1))
z=this.ae(a,b)
if(z==null)this.aE(a,b,this.ar(b,c))
else z.b=c},
ba:function(){this.r=this.r+1&67108863},
ar:function(a,b){var z,y
z=new H.hv(H.A(a,H.r(this,0)),H.A(b,H.r(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.ba()
return z},
aH:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aF(a[y].a,b))return y
return-1},
k:function(a){return P.dz(this)},
ae:function(a,b){return a[b]},
az:function(a,b){return a[b]},
aE:function(a,b,c){a[b]=c},
cX:function(a,b){delete a[b]},
cW:function(a,b){return this.ae(a,b)!=null},
aB:function(){var z=Object.create(null)
this.aE(z,"<non-identifier-key>",z)
this.cX(z,"<non-identifier-key>")
return z},
$isdv:1},
hv:{"^":"b;a,b,0c,0d"},
aq:{"^":"dh;a,$ti",
gl:function(a){return this.a.a},
gD:function(a){var z,y
z=this.a
y=new H.hw(z,z.r,this.$ti)
y.c=z.e
return y}},
hw:{"^":"b;a,b,0c,0d,$ti",
sb9:function(a){this.d=H.A(a,H.r(this,0))},
gE:function(a){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aH(z))
else{z=this.c
if(z==null){this.sb9(null)
return!1}else{this.sb9(z.a)
this.c=this.c.c
return!0}}},
$isaZ:1},
kK:{"^":"o:5;a",
$1:function(a){return this.a(a)}},
kL:{"^":"o:13;a",
$2:function(a,b){return this.a(a,b)}},
kM:{"^":"o:14;a",
$1:function(a){return this.a(H.w(a))}}}],["","",,H,{"^":"",
kA:function(a){return J.hn(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
c9:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
c_:function(a){var z,y
if(!!J.B(a).$isx)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.i(z,y,a[y])
return z},
af:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.bf(b,a))},
hO:{"^":"j;",$isiG:1,"%":"DataView;ArrayBufferView;cu|e1|e2|dA|e3|e4|at"},
cu:{"^":"hO;",
gl:function(a){return a.length},
$isx:1,
$asx:I.bg,
$isy:1,
$asy:I.bg},
dA:{"^":"e2;",
h:function(a,b){H.af(b,a,a.length)
return a[b]},
i:function(a,b,c){H.em(c)
H.af(b,a,a.length)
a[b]=c},
$asbR:function(){return[P.a3]},
$asp:function(){return[P.a3]},
$ism:1,
$asm:function(){return[P.a3]},
$isa:1,
$asa:function(){return[P.a3]},
"%":"Float64Array"},
at:{"^":"e4;",
i:function(a,b,c){H.P(c)
H.af(b,a,a.length)
a[b]=c},
$asbR:function(){return[P.D]},
$asp:function(){return[P.D]},
$ism:1,
$asm:function(){return[P.D]},
$isa:1,
$asa:function(){return[P.D]}},
hN:{"^":"dA;",$isaj:1,"%":"Float32Array"},
m0:{"^":"at;",
h:function(a,b){H.af(b,a,a.length)
return a[b]},
"%":"Int16Array"},
m1:{"^":"at;",
h:function(a,b){H.af(b,a,a.length)
return a[b]},
$ishk:1,
"%":"Int32Array"},
m2:{"^":"at;",
h:function(a,b){H.af(b,a,a.length)
return a[b]},
"%":"Int8Array"},
m3:{"^":"at;",
h:function(a,b){H.af(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hP:{"^":"at;",
h:function(a,b){H.af(b,a,a.length)
return a[b]},
$ismP:1,
"%":"Uint32Array"},
m4:{"^":"at;",
gl:function(a){return a.length},
h:function(a,b){H.af(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
m5:{"^":"at;",
gl:function(a){return a.length},
h:function(a,b){H.af(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
e1:{"^":"cu+p;"},
e2:{"^":"e1+bR;"},
e3:{"^":"cu+p;"},
e4:{"^":"e3+bR;"}}],["","",,P,{"^":"",
iS:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.ku()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.be(new P.iU(z),1)).observe(y,{childList:true})
return new P.iT(z,y,x)}else if(self.setImmediate!=null)return P.kv()
return P.kw()},
mZ:[function(a){self.scheduleImmediate(H.be(new P.iV(H.n(a,{func:1,ret:-1})),0))},"$1","ku",4,0,4],
n_:[function(a){self.setImmediate(H.be(new P.iW(H.n(a,{func:1,ret:-1})),0))},"$1","kv",4,0,4],
n0:[function(a){H.n(a,{func:1,ret:-1})
P.k4(0,a)},"$1","kw",4,0,4],
kq:function(a,b){if(H.bD(a,{func:1,args:[P.b,P.a5]}))return H.n(a,{func:1,ret:null,args:[P.b,P.a5]})
if(H.bD(a,{func:1,args:[P.b]}))return H.n(a,{func:1,ret:null,args:[P.b]})
throw H.e(P.d5(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kp:function(){var z,y
for(;z=$.aN,z!=null;){$.bc=null
y=z.b
$.aN=y
if(y==null)$.bb=null
z.a.$0()}},
nd:[function(){$.cC=!0
try{P.kp()}finally{$.bc=null
$.cC=!1
if($.aN!=null)$.cO().$1(P.el())}},"$0","el",0,0,1],
eg:function(a){var z=new P.dU(H.n(a,{func:1,ret:-1}))
if($.aN==null){$.bb=z
$.aN=z
if(!$.cC)$.cO().$1(P.el())}else{$.bb.b=z
$.bb=z}},
kt:function(a){var z,y,x
H.n(a,{func:1,ret:-1})
z=$.aN
if(z==null){P.eg(a)
$.bc=$.bb
return}y=new P.dU(a)
x=$.bc
if(x==null){y.b=z
$.bc=y
$.aN=y}else{y.b=x.b
x.b=y
$.bc=y
if(y.b==null)$.bb=y}},
kX:function(a){var z,y
z={func:1,ret:-1}
H.n(a,z)
y=$.J
if(C.e===y){P.c2(null,null,C.e,a)
return}y.toString
P.c2(null,null,y,H.n(y.bt(a),z))},
c1:function(a,b,c,d,e){var z={}
z.a=d
P.kt(new P.kr(z,e))},
ee:function(a,b,c,d,e){var z,y
H.n(d,{func:1,ret:e})
y=$.J
if(y===c)return d.$0()
$.J=c
z=y
try{y=d.$0()
return y}finally{$.J=z}},
ef:function(a,b,c,d,e,f,g){var z,y
H.n(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.J
if(y===c)return d.$1(e)
$.J=c
z=y
try{y=d.$1(e)
return y}finally{$.J=z}},
ks:function(a,b,c,d,e,f,g,h,i){var z,y
H.n(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.J
if(y===c)return d.$2(e,f)
$.J=c
z=y
try{y=d.$2(e,f)
return y}finally{$.J=z}},
c2:function(a,b,c,d){var z
H.n(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.bt(d):c.dl(d,-1)
P.eg(d)},
iU:{"^":"o:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iT:{"^":"o:15;a,b,c",
$1:function(a){var z,y
this.a.a=H.n(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iV:{"^":"o:0;a",
$0:function(){this.a.$0()}},
iW:{"^":"o:0;a",
$0:function(){this.a.$0()}},
k3:{"^":"b;a,0b,c",
cS:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.be(new P.k5(this,b),0),a)
else throw H.e(P.z("`setTimeout()` not found."))},
p:{
k4:function(a,b){var z=new P.k3(!0,0)
z.cS(a,b)
return z}}},
k5:{"^":"o:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
iZ:{"^":"b;$ti"},
jZ:{"^":"iZ;a,$ti"},
aM:{"^":"b;0a,b,c,d,e,$ti",
dJ:function(a){if(this.c!==6)return!0
return this.b.b.aJ(H.n(this.d,{func:1,ret:P.T,args:[P.b]}),a.a,P.T,P.b)},
dF:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.r(this,1)}
w=this.b.b
if(H.bD(z,{func:1,args:[P.b,P.a5]}))return H.c5(w.dM(z,a.a,a.b,null,y,P.a5),x)
else return H.c5(w.aJ(H.n(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
ae:{"^":"b;bm:a<,b,0d8:c<,$ti",
c4:function(a,b,c){var z,y,x,w
z=H.r(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.J
if(y!==C.e){y.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kq(b,y)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.ae(0,$.J,[c])
w=b==null?1:3
this.bc(new P.aM(x,w,a,b,[z,c]))
return x},
c3:function(a,b){return this.c4(a,null,b)},
bc:function(a){var z,y
z=this.a
if(z<=1){a.a=H.i(this.c,"$isaM")
this.c=a}else{if(z===2){y=H.i(this.c,"$isae")
z=y.a
if(z<4){y.bc(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.c2(null,null,z,H.n(new P.jd(this,a),{func:1,ret:-1}))}},
bj:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.i(this.c,"$isaM")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.i(this.c,"$isae")
y=u.a
if(y<4){u.bj(a)
return}this.a=y
this.c=u.c}z.a=this.af(a)
y=this.b
y.toString
P.c2(null,null,y,H.n(new P.ji(z,this),{func:1,ret:-1}))}},
aD:function(){var z=H.i(this.c,"$isaM")
this.c=null
return this.af(z)},
af:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
au:function(a){var z,y,x
z=H.r(this,0)
H.c5(a,{futureOr:1,type:z})
y=this.$ti
if(H.aP(a,"$isaY",y,"$asaY"))if(H.aP(a,"$isae",y,null))P.dX(a,this)
else P.je(a,this)
else{x=this.aD()
H.A(a,z)
this.a=4
this.c=a
P.ba(this,x)}},
be:function(a,b){var z
H.i(b,"$isa5")
z=this.aD()
this.a=8
this.c=new P.a0(a,b)
P.ba(this,z)},
$isaY:1,
p:{
je:function(a,b){var z,y,x
b.a=1
try{a.c4(new P.jf(b),new P.jg(b),null)}catch(x){z=H.a8(x)
y=H.bj(x)
P.kX(new P.jh(b,z,y))}},
dX:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.i(a.c,"$isae")
if(z>=4){y=b.aD()
b.a=a.a
b.c=a.c
P.ba(b,y)}else{y=H.i(b.c,"$isaM")
b.a=2
b.c=a
a.bj(y)}},
ba:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.i(y.c,"$isa0")
y=y.b
u=v.a
t=v.b
y.toString
P.c1(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.i(r,"$isa0")
y=y.b
u=r.a
t=r.b
y.toString
P.c1(null,null,y,u,t)
return}o=$.J
if(o!=q)$.J=q
else o=null
y=b.c
if(y===8)new P.jl(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jk(x,b,r).$0()}else if((y&2)!==0)new P.jj(z,x,b).$0()
if(o!=null)$.J=o
y=x.b
if(!!J.B(y).$isaY){if(y.a>=4){n=H.i(t.c,"$isaM")
t.c=null
b=t.af(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dX(y,t)
return}}m=b.b
n=H.i(m.c,"$isaM")
m.c=null
b=m.af(n)
y=x.a
u=x.b
if(!y){H.A(u,H.r(m,0))
m.a=4
m.c=u}else{H.i(u,"$isa0")
m.a=8
m.c=u}z.a=m
y=m}}}},
jd:{"^":"o:0;a,b",
$0:function(){P.ba(this.a,this.b)}},
ji:{"^":"o:0;a,b",
$0:function(){P.ba(this.b,this.a.a)}},
jf:{"^":"o:6;a",
$1:function(a){var z=this.a
z.a=0
z.au(a)}},
jg:{"^":"o:16;a",
$2:function(a,b){H.i(b,"$isa5")
this.a.be(a,b)},
$1:function(a){return this.$2(a,null)}},
jh:{"^":"o:0;a,b,c",
$0:function(){this.a.be(this.b,this.c)}},
jl:{"^":"o:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.c_(H.n(w.d,{func:1}),null)}catch(v){y=H.a8(v)
x=H.bj(v)
if(this.d){w=H.i(this.a.a.c,"$isa0").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.i(this.a.a.c,"$isa0")
else u.b=new P.a0(y,x)
u.a=!0
return}if(!!J.B(z).$isaY){if(z instanceof P.ae&&z.gbm()>=4){if(z.gbm()===8){w=this.b
w.b=H.i(z.gd8(),"$isa0")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.c3(new P.jm(t),null)
w.a=!1}}},
jm:{"^":"o:17;a",
$1:function(a){return this.a}},
jk:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.r(x,0)
v=H.A(this.c,w)
u=H.r(x,1)
this.a.b=x.b.b.aJ(H.n(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a8(t)
y=H.bj(t)
x=this.a
x.b=new P.a0(z,y)
x.a=!0}}},
jj:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.i(this.a.a.c,"$isa0")
w=this.c
if(w.dJ(z)&&w.e!=null){v=this.b
v.b=w.dF(z)
v.a=!1}}catch(u){y=H.a8(u)
x=H.bj(u)
w=H.i(this.a.a.c,"$isa0")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a0(y,x)
s.a=!0}}},
dU:{"^":"b;a,0b"},
it:{"^":"b;$ti",
gl:function(a){var z,y,x,w
z={}
y=new P.ae(0,$.J,[P.D])
z.a=0
x=H.r(this,0)
w=H.n(new P.iv(z,this),{func:1,ret:-1,args:[x]})
H.n(new P.iw(z,y),{func:1,ret:-1})
W.aL(this.a,this.b,w,!1,x)
return y}},
iv:{"^":"o;a,b",
$1:function(a){H.A(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.H,args:[H.r(this.b,0)]}}},
iw:{"^":"o:0;a,b",
$0:function(){this.b.au(this.a.a)}},
iu:{"^":"b;"},
a0:{"^":"b;a,b",
k:function(a){return H.f(this.a)},
$isR:1},
kb:{"^":"b;",$ismX:1},
kr:{"^":"o:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dD()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.e(z)
x=H.e(z)
x.stack=y.k(0)
throw x}},
jI:{"^":"kb;",
dN:function(a){var z,y,x
H.n(a,{func:1,ret:-1})
try{if(C.e===$.J){a.$0()
return}P.ee(null,null,this,a,-1)}catch(x){z=H.a8(x)
y=H.bj(x)
P.c1(null,null,this,z,H.i(y,"$isa5"))}},
dO:function(a,b,c){var z,y,x
H.n(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.e===$.J){a.$1(b)
return}P.ef(null,null,this,a,b,-1,c)}catch(x){z=H.a8(x)
y=H.bj(x)
P.c1(null,null,this,z,H.i(y,"$isa5"))}},
dl:function(a,b){return new P.jK(this,H.n(a,{func:1,ret:b}),b)},
bt:function(a){return new P.jJ(this,H.n(a,{func:1,ret:-1}))},
dm:function(a,b){return new P.jL(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
c_:function(a,b){H.n(a,{func:1,ret:b})
if($.J===C.e)return a.$0()
return P.ee(null,null,this,a,b)},
aJ:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.J===C.e)return a.$1(b)
return P.ef(null,null,this,a,b,c,d)},
dM:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.J===C.e)return a.$2(b,c)
return P.ks(null,null,this,a,b,c,d,e,f)}},
jK:{"^":"o;a,b,c",
$0:function(){return this.a.c_(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jJ:{"^":"o:1;a,b",
$0:function(){return this.a.dN(this.b)}},
jL:{"^":"o;a,b,c",
$1:function(a){var z=this.c
return this.a.dO(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dw:function(a,b,c){H.bG(a)
return H.u(H.kB(a,new H.du(0,0,[b,c])),"$isdv",[b,c],"$asdv")},
S:function(a,b){return new H.du(0,0,[a,b])},
a4:function(a,b,c,d){return new P.jt(0,0,[d])},
hl:function(a,b,c){var z,y
if(P.cD(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.h([],[P.d])
y=$.bk()
C.a.j(y,a)
try{P.ko(a,z)}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=P.dK(b,H.kR(z,"$ism"),", ")+c
return y.charCodeAt(0)==0?y:y},
co:function(a,b,c){var z,y,x
if(P.cD(a))return b+"..."+c
z=new P.cy(b)
y=$.bk()
C.a.j(y,a)
try{x=z
x.a=P.dK(x.gX(),a,", ")}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=z
y.a=y.gX()+c
y=z.gX()
return y.charCodeAt(0)==0?y:y},
cD:function(a){var z,y
for(z=0;y=$.bk(),z<y.length;++z)if(a===y[z])return!0
return!1},
ko:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.u(b,"$isa",[P.d],"$asa")
z=a.gD(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.v())return
w=H.f(z.gE(z))
C.a.j(b,w)
y+=w.length+2;++x}if(!z.v()){if(x<=5)return
if(0>=b.length)return H.k(b,-1)
v=b.pop()
if(0>=b.length)return H.k(b,-1)
u=b.pop()}else{t=z.gE(z);++x
if(!z.v()){if(x<=4){C.a.j(b,H.f(t))
return}v=H.f(t)
if(0>=b.length)return H.k(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gE(z);++x
for(;z.v();t=s,s=r){r=z.gE(z);++x
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
cs:function(a,b){var z,y,x
z=P.a4(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.F)(a),++x)z.j(0,H.A(a[x],b))
return z},
dz:function(a){var z,y,x
z={}
if(P.cD(a))return"{...}"
y=new P.cy("")
try{C.a.j($.bk(),a)
x=y
x.a=x.gX()+"{"
z.a=!0
J.fj(a,new P.hA(z,y))
z=y
z.a=z.gX()+"}"}finally{z=$.bk()
if(0>=z.length)return H.k(z,-1)
z.pop()}z=y.gX()
return z.charCodeAt(0)==0?z:z},
jt:{"^":"jo;a,0b,0c,0d,0e,0f,r,$ti",
gD:function(a){var z=new P.e0(this,this.r,this.$ti)
z.c=this.e
return z},
gl:function(a){return this.a},
A:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.i(z[b],"$isbC")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.i(y[b],"$isbC")!=null}else return this.cV(b)},
cV:function(a){var z=this.d
if(z==null)return!1
return this.ay(this.bh(z,a),a)>=0},
j:function(a,b){var z,y
H.A(b,H.r(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cA()
this.b=z}return this.bb(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cA()
this.c=y}return this.bb(y,b)}else return this.cT(0,b)},
cT:function(a,b){var z,y,x
H.A(b,H.r(this,0))
z=this.d
if(z==null){z=P.cA()
this.d=z}y=this.bf(b)
x=z[y]
if(x==null)z[y]=[this.aC(b)]
else{if(this.ay(x,b)>=0)return!1
x.push(this.aC(b))}return!0},
bZ:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bk(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bk(this.c,b)
else return this.d3(0,b)},
d3:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bh(z,b)
x=this.ay(y,b)
if(x<0)return!1
this.bo(y.splice(x,1)[0])
return!0},
a7:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aA()}},
bb:function(a,b){H.A(b,H.r(this,0))
if(H.i(a[b],"$isbC")!=null)return!1
a[b]=this.aC(b)
return!0},
bk:function(a,b){var z
if(a==null)return!1
z=H.i(a[b],"$isbC")
if(z==null)return!1
this.bo(z)
delete a[b]
return!0},
aA:function(){this.r=this.r+1&67108863},
aC:function(a){var z,y
z=new P.bC(H.A(a,H.r(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aA()
return z},
bo:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aA()},
bf:function(a){return J.al(a)&0x3ffffff},
bh:function(a,b){return a[this.bf(b)]},
ay:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aF(a[y].a,b))return y
return-1},
p:{
cA:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bC:{"^":"b;a,0b,0c"},
e0:{"^":"b;a,b,0c,0d,$ti",
sbd:function(a){this.d=H.A(a,H.r(this,0))},
gE:function(a){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aH(z))
else{z=this.c
if(z==null){this.sbd(null)
return!1}else{this.sbd(H.A(z.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
$isaZ:1,
p:{
ju:function(a,b,c){var z=new P.e0(a,b,[c])
z.c=a.e
return z}}},
jo:{"^":"ih;"},
hx:{"^":"jv;",$ism:1,$isa:1},
p:{"^":"b;$ti",
gD:function(a){return new H.dx(a,this.gl(a),0,[H.bi(this,a,"p",0)])},
u:function(a,b){return this.h(a,b)},
dE:function(a,b,c,d){var z,y,x
H.A(b,d)
H.n(c,{func:1,ret:d,args:[d,H.bi(this,a,"p",0)]})
z=this.gl(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gl(a))throw H.e(P.aH(a))}return y},
k:function(a){return P.co(a,"[","]")}},
dy:{"^":"W;"},
hA:{"^":"o:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.f(a)
z.a=y+": "
z.a+=H.f(b)}},
W:{"^":"b;$ti",
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[H.bi(this,a,"W",0),H.bi(this,a,"W",1)]})
for(z=J.bL(this.gJ(a));z.v();){y=z.gE(z)
b.$2(y,this.h(a,y))}},
gl:function(a){return J.aU(this.gJ(a))},
k:function(a){return P.dz(a)},
$isL:1},
ii:{"^":"b;$ti",
I:function(a,b){var z
for(z=J.bL(H.u(b,"$ism",this.$ti,"$asm"));z.v();)this.j(0,z.gE(z))},
k:function(a){return P.co(this,"{","}")},
$ism:1,
$ismn:1},
ih:{"^":"ii;"},
jv:{"^":"b+p;"}}],["","",,P,{"^":"",
ha:function(a){if(a instanceof H.o)return a.k(0)
return"Instance of '"+H.b6(a)+"'"},
bQ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bn(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ha(a)},
dl:function(a){return new P.ja(a)},
aR:function(a){H.c9(H.f(a))},
T:{"^":"b;"},
"+bool":0,
bo:{"^":"b;a,b",
F:function(a,b){if(b==null)return!1
return b instanceof P.bo&&this.a===b.a&&!0},
O:function(a,b){return C.d.O(this.a,H.i(b,"$isbo").a)},
gB:function(a){var z=this.a
return(z^C.d.bl(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.h_(H.i6(this))
y=P.bp(H.i4(this))
x=P.bp(H.i0(this))
w=P.bp(H.i1(this))
v=P.bp(H.i3(this))
u=P.bp(H.i5(this))
t=P.h0(H.i2(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isa_:1,
$asa_:function(){return[P.bo]},
p:{
h_:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
h0:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bp:function(a){if(a>=10)return""+a
return"0"+a}}},
a3:{"^":"E;"},
"+double":0,
aW:{"^":"b;a",
W:function(a,b){return C.d.W(this.a,H.i(b,"$isaW").a)},
F:function(a,b){if(b==null)return!1
return b instanceof P.aW&&this.a===b.a},
gB:function(a){return this.a&0x1FFFFFFF},
O:function(a,b){return C.d.O(this.a,H.i(b,"$isaW").a)},
k:function(a){var z,y,x,w,v
z=new P.h7()
y=this.a
if(y<0)return"-"+new P.aW(0-y).k(0)
x=z.$1(C.d.Y(y,6e7)%60)
w=z.$1(C.d.Y(y,1e6)%60)
v=new P.h6().$1(y%1e6)
return""+C.d.Y(y,36e8)+":"+H.f(x)+":"+H.f(w)+"."+H.f(v)},
$isa_:1,
$asa_:function(){return[P.aW]},
p:{
dg:function(a,b,c,d,e,f){return new P.aW(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
h6:{"^":"o:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
h7:{"^":"o:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
R:{"^":"b;"},
dD:{"^":"R;",
k:function(a){return"Throw of null."}},
aG:{"^":"R;a,b,c,d",
gaw:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gav:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gaw()+y+x
if(!this.a)return w
v=this.gav()
u=P.bQ(this.b)
return w+v+": "+u},
p:{
d5:function(a,b,c){return new P.aG(!0,a,b,c)}}},
dE:{"^":"aG;e,f,a,b,c,d",
gaw:function(){return"RangeError"},
gav:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.f(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.f(z)
else if(x>z)y=": Not in range "+H.f(z)+".."+H.f(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.f(z)}return y},
p:{
bU:function(a,b,c){return new P.dE(null,null,!0,a,b,"Value not in range")},
bT:function(a,b,c,d,e){return new P.dE(b,c,!0,a,d,"Invalid value")}}},
hj:{"^":"aG;e,l:f>,a,b,c,d",
gaw:function(){return"RangeError"},
gav:function(){var z,y
z=H.P(this.b)
if(typeof z!=="number")return z.a8()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.f(y)},
p:{
G:function(a,b,c,d,e){var z=H.P(e==null?J.aU(b):e)
return new P.hj(b,z,!0,a,c,"Index out of range")}}},
iM:{"^":"R;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
z:function(a){return new P.iM(a)}}},
iK:{"^":"R;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
dR:function(a){return new P.iK(a)}}},
cw:{"^":"R;a",
k:function(a){return"Bad state: "+this.a},
p:{
cx:function(a){return new P.cw(a)}}},
fS:{"^":"R;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bQ(z)+"."},
p:{
aH:function(a){return new P.fS(a)}}},
dJ:{"^":"b;",
k:function(a){return"Stack Overflow"},
$isR:1},
fY:{"^":"R;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
ja:{"^":"b;a",
k:function(a){return"Exception: "+this.a}},
br:{"^":"b;"},
D:{"^":"E;"},
"+int":0,
m:{"^":"b;$ti",
aK:["cw",function(a,b){var z=H.cH(this,"m",0)
return new H.dS(this,H.n(b,{func:1,ret:P.T,args:[z]}),[z])}],
gl:function(a){var z,y
z=this.gD(this)
for(y=0;z.v();)++y
return y},
u:function(a,b){var z,y,x
if(b<0)H.Z(P.bT(b,0,null,"index",null))
for(z=this.gD(this),y=0;z.v();){x=z.gE(z)
if(b===y)return x;++y}throw H.e(P.G(b,this,"index",null,y))},
k:function(a){return P.hl(this,"(",")")}},
aZ:{"^":"b;$ti"},
a:{"^":"b;$ti",$ism:1},
"+List":0,
L:{"^":"b;$ti"},
H:{"^":"b;",
gB:function(a){return P.b.prototype.gB.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
E:{"^":"b;",$isa_:1,
$asa_:function(){return[P.E]}},
"+num":0,
b:{"^":";",
F:function(a,b){return this===b},
gB:function(a){return H.b5(this)},
k:function(a){return"Instance of '"+H.b6(this)+"'"},
toString:function(){return this.k(this)}},
a5:{"^":"b;"},
d:{"^":"b;",$isa_:1,
$asa_:function(){return[P.d]},
$ishX:1},
"+String":0,
cy:{"^":"b;X:a<",
gl:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dK:function(a,b,c){var z=J.bL(b)
if(!z.v())return a
if(c.length===0){do a+=H.f(z.gE(z))
while(z.v())}else{a+=H.f(z.gE(z))
for(;z.v();)a=a+c+H.f(z.gE(z))}return a}}}}],["","",,W,{"^":"",
kz:function(){return document},
h8:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.p).P(z,a,b,c)
y.toString
z=W.v
z=new H.dS(new W.a7(y),H.n(new W.h9(),{func:1,ret:P.T,args:[z]}),[z])
x=z.gD(z)
if(!x.v())H.Z(H.dr())
w=x.gE(x)
if(x.v())H.Z(H.hm())
return H.i(w,"$isU")},
dk:function(a){H.i(a,"$isO")
return"wheel"},
aX:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fm(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a8(x)}return z},
j7:function(a,b){return document.createElement(a)},
bZ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
e_:function(a,b,c,d){var z,y
z=W.bZ(W.bZ(W.bZ(W.bZ(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
ec:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.j1(a)
if(!!J.B(z).$isO)return z
return}else return H.i(a,"$isO")},
ei:function(a,b){var z
H.n(a,{func:1,ret:-1,args:[b]})
z=$.J
if(z===C.e)return a
return z.dm(a,b)},
N:{"^":"U;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
l1:{"^":"j;0l:length=","%":"AccessibleNodeList"},
fF:{"^":"N;",
k:function(a){return String(a)},
$isfF:1,
"%":"HTMLAnchorElement"},
l2:{"^":"N;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
d6:{"^":"N;",$isd6:1,"%":"HTMLBaseElement"},
fK:{"^":"j;","%":";Blob"},
bO:{"^":"N;",$isbO:1,"%":"HTMLBodyElement"},
cl:{"^":"N;0n:height=,0m:width=",
cl:function(a,b,c){var z=this.d_(a,b,P.kx(c,null))
return z},
d_:function(a,b,c){return a.getContext(b,c)},
$iscl:1,
"%":"HTMLCanvasElement"},
l7:{"^":"j;",
am:function(a){return P.a2(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
l8:{"^":"v;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fT:{"^":"cm;",$isfT:1,"%":"CSSNumericValue|CSSUnitValue"},
lb:{"^":"fW;0l:length=","%":"CSSPerspective"},
am:{"^":"j;",$isam:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fU:{"^":"j_;0l:length=",
aP:function(a,b){var z=this.d0(a,this.as(a,b))
return z==null?"":z},
as:function(a,b){var z,y
z=$.eC()
y=z[b]
if(typeof y==="string")return y
y=this.dd(a,b)
z[b]=y
return y},
dd:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.h1()+b
if(z in a)return z
return b},
d0:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fV:{"^":"b;",
gn:function(a){return this.aP(a,"height")},
gm:function(a){return this.aP(a,"width")}},
cm:{"^":"j;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fW:{"^":"j;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
ld:{"^":"cm;0l:length=","%":"CSSTransformValue"},
le:{"^":"cm;0l:length=","%":"CSSUnparsedValue"},
lg:{"^":"j;0l:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
h2:{"^":"N;","%":"HTMLDivElement"},
h3:{"^":"v;",
dg:function(a,b){return a.adoptNode(b)},
cm:function(a,b){return a.getElementById(b)},
bY:function(a,b){return a.querySelector(b)},
gbU:function(a){return new W.bA(a,"mousedown",!1,[W.X])},
gbV:function(a){return new W.bA(a,"mousemove",!1,[W.X])},
gbW:function(a){return new W.bA(a,"mouseup",!1,[W.X])},
gbX:function(a){return new W.bA(a,H.w(W.dk(a)),!1,[W.aK])},
"%":"XMLDocument;Document"},
lh:{"^":"j;",
k:function(a){return String(a)},
"%":"DOMException"},
h4:{"^":"j;",
dw:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
li:{"^":"j3;",
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(c,"$isY",[P.E],"$asY")
throw H.e(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[[P.Y,P.E]]},
$isy:1,
$asy:function(){return[[P.Y,P.E]]},
$asp:function(){return[[P.Y,P.E]]},
$ism:1,
$asm:function(){return[[P.Y,P.E]]},
$isa:1,
$asa:function(){return[[P.Y,P.E]]},
$ast:function(){return[[P.Y,P.E]]},
"%":"ClientRectList|DOMRectList"},
h5:{"^":"j;",
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gm(a))+" x "+H.f(this.gn(a))},
F:function(a,b){var z
if(b==null)return!1
if(!H.aP(b,"$isY",[P.E],"$asY"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.l(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gB:function(a){return W.e_(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isY:1,
$asY:function(){return[P.E]},
"%":";DOMRectReadOnly"},
lj:{"^":"j5;",
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.w(c)
throw H.e(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[P.d]},
$isy:1,
$asy:function(){return[P.d]},
$asp:function(){return[P.d]},
$ism:1,
$asm:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$ast:function(){return[P.d]},
"%":"DOMStringList"},
lk:{"^":"j;0l:length=","%":"DOMTokenList"},
U:{"^":"v;0dP:tagName=",
gdj:function(a){return new W.j6(a)},
k:function(a){return a.localName},
P:["ao",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dj
if(z==null){z=H.h([],[W.ac])
y=new W.dB(z)
C.a.j(z,W.dY(null))
C.a.j(z,W.e8())
$.dj=y
d=y}else d=z
z=$.di
if(z==null){z=new W.eb(d)
$.di=z
c=z}else{z.a=d
c=z}}if($.ah==null){z=document
y=z.implementation
y=(y&&C.I).dw(y,"")
$.ah=y
$.cn=y.createRange()
y=$.ah
y.toString
y=y.createElement("base")
H.i(y,"$isd6")
y.href=z.baseURI
z=$.ah.head;(z&&C.J).K(z,y)}z=$.ah
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.i(y,"$isbO")}z=$.ah
if(!!this.$isbO)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ah.body;(z&&C.p).K(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.A(C.T,a.tagName)){z=$.cn;(z&&C.B).cn(z,x)
z=$.cn
w=(z&&C.B).du(z,b)}else{x.innerHTML=b
w=$.ah.createDocumentFragment()
for(z=J.l(w);y=x.firstChild,y!=null;)z.K(w,y)}z=$.ah.body
if(x==null?z!=null:x!==z)J.d_(x)
c.aT(w)
C.m.dg(document,w)
return w},function(a,b,c){return this.P(a,b,c,null)},"dv",null,null,"gdY",5,5,null],
cp:function(a,b,c,d){a.textContent=null
this.K(a,this.P(a,b,c,d))},
co:function(a,b){return this.cp(a,b,null,null)},
a1:function(a,b){return a.getAttribute(b)},
d4:function(a,b){return a.removeAttribute(b)},
gbU:function(a){return new W.bY(a,"mousedown",!1,[W.X])},
gbV:function(a){return new W.bY(a,"mousemove",!1,[W.X])},
gbW:function(a){return new W.bY(a,"mouseup",!1,[W.X])},
gbX:function(a){return new W.bY(a,H.w(W.dk(a)),!1,[W.aK])},
$isU:1,
"%":";Element"},
h9:{"^":"o:18;",
$1:function(a){return!!J.B(H.i(a,"$isv")).$isU}},
ll:{"^":"N;0n:height=,0m:width=","%":"HTMLEmbedElement"},
an:{"^":"j;",$isan:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
O:{"^":"j;",
df:function(a,b,c,d){H.n(c,{func:1,args:[W.an]})
if(c!=null)this.cU(a,b,c,!1)},
cU:function(a,b,c,d){return a.addEventListener(b,H.be(H.n(c,{func:1,args:[W.an]}),1),!1)},
$isO:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;e5|e6|e9|ea"},
ao:{"^":"fK;",$isao:1,"%":"File"},
lD:{"^":"jc;",
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isao")
throw H.e(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.ao]},
$isy:1,
$asy:function(){return[W.ao]},
$asp:function(){return[W.ao]},
$ism:1,
$asm:function(){return[W.ao]},
$isa:1,
$asa:function(){return[W.ao]},
$ast:function(){return[W.ao]},
"%":"FileList"},
lE:{"^":"O;0l:length=","%":"FileWriter"},
lH:{"^":"N;0l:length=","%":"HTMLFormElement"},
ap:{"^":"j;",$isap:1,"%":"Gamepad"},
hg:{"^":"N;","%":"HTMLHeadElement"},
lI:{"^":"j;0l:length=","%":"History"},
lJ:{"^":"jq;",
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isv")
throw H.e(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.v]},
$isy:1,
$asy:function(){return[W.v]},
$asp:function(){return[W.v]},
$ism:1,
$asm:function(){return[W.v]},
$isa:1,
$asa:function(){return[W.v]},
$ast:function(){return[W.v]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hh:{"^":"h3;","%":"HTMLDocument"},
lK:{"^":"N;0n:height=,0m:width=","%":"HTMLIFrameElement"},
lN:{"^":"j;0n:height=,0m:width=","%":"ImageBitmap"},
lO:{"^":"j;0n:height=,0m:width=","%":"ImageData"},
lP:{"^":"N;0n:height=,0m:width=","%":"HTMLImageElement"},
dq:{"^":"N;0n:height=,0m:width=",$isdq:1,"%":"HTMLInputElement"},
b_:{"^":"dQ;",$isb_:1,"%":"KeyboardEvent"},
hy:{"^":"j;",
k:function(a){return String(a)},
$ishy:1,
"%":"Location"},
hD:{"^":"N;","%":"HTMLAudioElement;HTMLMediaElement"},
lX:{"^":"j;0l:length=","%":"MediaList"},
lY:{"^":"jx;",
h:function(a,b){return P.a2(a.get(H.w(b)))},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gJ:function(a){var z=H.h([],[P.d])
this.H(a,new W.hF(z))
return z},
gl:function(a){return a.size},
$asW:function(){return[P.d,null]},
$isL:1,
$asL:function(){return[P.d,null]},
"%":"MIDIInputMap"},
hF:{"^":"o:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
lZ:{"^":"jy;",
h:function(a,b){return P.a2(a.get(H.w(b)))},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gJ:function(a){var z=H.h([],[P.d])
this.H(a,new W.hG(z))
return z},
gl:function(a){return a.size},
$asW:function(){return[P.d,null]},
$isL:1,
$asL:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
hG:{"^":"o:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
as:{"^":"j;",$isas:1,"%":"MimeType"},
m_:{"^":"jA;",
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isas")
throw H.e(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.as]},
$isy:1,
$asy:function(){return[W.as]},
$asp:function(){return[W.as]},
$ism:1,
$asm:function(){return[W.as]},
$isa:1,
$asa:function(){return[W.as]},
$ast:function(){return[W.as]},
"%":"MimeTypeArray"},
X:{"^":"dQ;",
gbT:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.b4(a.offsetX,a.offsetY,[P.E])
else{z=a.target
if(!J.B(W.ec(z)).$isU)throw H.e(P.z("offsetX is only supported on elements"))
y=H.i(W.ec(z),"$isU")
z=a.clientX
x=a.clientY
w=[P.E]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.u(new P.b4(u,v,w),"$isb4",w,"$asb4")
if(typeof z!=="number")return z.aX()
if(typeof x!=="number")return x.aX()
return new P.b4(C.r.c5(z-u),C.r.c5(x-v),w)}},
$isX:1,
"%":";DragEvent|MouseEvent"},
a7:{"^":"hx;a",
ga9:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.e(P.cx("No elements"))
if(y>1)throw H.e(P.cx("More than one element"))
return z.firstChild},
I:function(a,b){var z,y,x,w,v
H.u(b,"$ism",[W.v],"$asm")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.l(y),v=0;v<x;++v)w.K(y,z.firstChild)
return},
i:function(a,b,c){var z,y
H.i(c,"$isv")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.k(y,b)
J.f_(z,c,y[b])},
gD:function(a){var z=this.a.childNodes
return new W.dm(z,z.length,-1,[H.bi(C.V,z,"t",0)])},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.k(z,b)
return z[b]},
$asp:function(){return[W.v]},
$asm:function(){return[W.v]},
$asa:function(){return[W.v]}},
v:{"^":"O;0dK:previousSibling=",
dL:function(a){var z=a.parentNode
if(z!=null)J.bJ(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.cv(a):z},
K:function(a,b){return a.appendChild(b)},
d5:function(a,b){return a.removeChild(b)},
d6:function(a,b,c){return a.replaceChild(b,c)},
$isv:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hQ:{"^":"jC;",
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isv")
throw H.e(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.v]},
$isy:1,
$asy:function(){return[W.v]},
$asp:function(){return[W.v]},
$ism:1,
$asm:function(){return[W.v]},
$isa:1,
$asa:function(){return[W.v]},
$ast:function(){return[W.v]},
"%":"NodeList|RadioNodeList"},
m8:{"^":"N;0n:height=,0m:width=","%":"HTMLObjectElement"},
ma:{"^":"O;0n:height=,0m:width=","%":"OffscreenCanvas"},
mb:{"^":"j;0n:height=,0m:width=","%":"PaintSize"},
au:{"^":"j;0l:length=",$isau:1,"%":"Plugin"},
md:{"^":"jG;",
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isau")
throw H.e(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.au]},
$isy:1,
$asy:function(){return[W.au]},
$asp:function(){return[W.au]},
$ism:1,
$asm:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$ast:function(){return[W.au]},
"%":"PluginArray"},
mf:{"^":"X;0n:height=,0m:width=","%":"PointerEvent"},
i8:{"^":"j;",
du:function(a,b){return a.createContextualFragment(b)},
cn:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
mk:{"^":"jM;",
h:function(a,b){return P.a2(a.get(H.w(b)))},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gJ:function(a){var z=H.h([],[P.d])
this.H(a,new W.id(z))
return z},
gl:function(a){return a.size},
$asW:function(){return[P.d,null]},
$isL:1,
$asL:function(){return[P.d,null]},
"%":"RTCStatsReport"},
id:{"^":"o:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
ml:{"^":"j;0n:height=,0m:width=","%":"Screen"},
mm:{"^":"N;0l:length=","%":"HTMLSelectElement"},
av:{"^":"O;",$isav:1,"%":"SourceBuffer"},
mo:{"^":"e6;",
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isav")
throw H.e(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.av]},
$isy:1,
$asy:function(){return[W.av]},
$asp:function(){return[W.av]},
$ism:1,
$asm:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$ast:function(){return[W.av]},
"%":"SourceBufferList"},
aw:{"^":"j;",$isaw:1,"%":"SpeechGrammar"},
mp:{"^":"jS;",
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isaw")
throw H.e(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aw]},
$isy:1,
$asy:function(){return[W.aw]},
$asp:function(){return[W.aw]},
$ism:1,
$asm:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$ast:function(){return[W.aw]},
"%":"SpeechGrammarList"},
ax:{"^":"j;0l:length=",$isax:1,"%":"SpeechRecognitionResult"},
ms:{"^":"jV;",
h:function(a,b){return this.bi(a,H.w(b))},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.d2(a,z)
if(y==null)return
b.$2(y,this.bi(a,y))}},
gJ:function(a){var z=H.h([],[P.d])
this.H(a,new W.is(z))
return z},
gl:function(a){return a.length},
bi:function(a,b){return a.getItem(b)},
d2:function(a,b){return a.key(b)},
$asW:function(){return[P.d,P.d]},
$isL:1,
$asL:function(){return[P.d,P.d]},
"%":"Storage"},
is:{"^":"o:19;a",
$2:function(a,b){return C.a.j(this.a,a)}},
ay:{"^":"j;",$isay:1,"%":"CSSStyleSheet|StyleSheet"},
ix:{"^":"N;",
P:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ao(a,b,c,d)
z=W.h8("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a7(y).I(0,new W.a7(z))
return y},
"%":"HTMLTableElement"},
mv:{"^":"N;",
P:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ao(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.P(z.createElement("table"),b,c,d)
z.toString
z=new W.a7(z)
x=z.ga9(z)
x.toString
z=new W.a7(x)
w=z.ga9(z)
y.toString
w.toString
new W.a7(y).I(0,new W.a7(w))
return y},
"%":"HTMLTableRowElement"},
mw:{"^":"N;",
P:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ao(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.P(z.createElement("table"),b,c,d)
z.toString
z=new W.a7(z)
x=z.ga9(z)
y.toString
x.toString
new W.a7(y).I(0,new W.a7(x))
return y},
"%":"HTMLTableSectionElement"},
dM:{"^":"N;",$isdM:1,"%":"HTMLTemplateElement"},
mx:{"^":"j;0m:width=","%":"TextMetrics"},
az:{"^":"O;",$isaz:1,"%":"TextTrack"},
aA:{"^":"O;",$isaA:1,"%":"TextTrackCue|VTTCue"},
my:{"^":"k2;",
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isaA")
throw H.e(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aA]},
$isy:1,
$asy:function(){return[W.aA]},
$asp:function(){return[W.aA]},
$ism:1,
$asm:function(){return[W.aA]},
$isa:1,
$asa:function(){return[W.aA]},
$ast:function(){return[W.aA]},
"%":"TextTrackCueList"},
mz:{"^":"ea;",
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isaz")
throw H.e(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.az]},
$isy:1,
$asy:function(){return[W.az]},
$asp:function(){return[W.az]},
$ism:1,
$asm:function(){return[W.az]},
$isa:1,
$asa:function(){return[W.az]},
$ast:function(){return[W.az]},
"%":"TextTrackList"},
mB:{"^":"j;0l:length=","%":"TimeRanges"},
aB:{"^":"j;",$isaB:1,"%":"Touch"},
mC:{"^":"k7;",
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isaB")
throw H.e(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aB]},
$isy:1,
$asy:function(){return[W.aB]},
$asp:function(){return[W.aB]},
$ism:1,
$asm:function(){return[W.aB]},
$isa:1,
$asa:function(){return[W.aB]},
$ast:function(){return[W.aB]},
"%":"TouchList"},
mD:{"^":"j;0l:length=","%":"TrackDefaultList"},
dQ:{"^":"an;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mR:{"^":"j;",
k:function(a){return String(a)},
"%":"URL"},
mT:{"^":"hD;0n:height=,0m:width=","%":"HTMLVideoElement"},
mU:{"^":"O;0l:length=","%":"VideoTrackList"},
mV:{"^":"O;0n:height=,0m:width=","%":"VisualViewport"},
mW:{"^":"j;0m:width=","%":"VTTRegion"},
aK:{"^":"X;",
gdA:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.z("deltaY is not supported"))},
$isaK:1,
"%":"WheelEvent"},
iP:{"^":"O;",
gdi:function(a){var z,y,x
z=P.E
y=new P.ae(0,$.J,[z])
x=H.n(new W.iQ(new P.jZ(y,[z])),{func:1,ret:-1,args:[P.E]})
this.cZ(a)
this.d7(a,W.ei(x,z))
return y},
d7:function(a,b){return a.requestAnimationFrame(H.be(H.n(b,{func:1,ret:-1,args:[P.E]}),1))},
cZ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdT:1,
"%":"DOMWindow|Window"},
iQ:{"^":"o:20;a",
$1:function(a){var z=this.a
a=H.c5(H.cK(a),{futureOr:1,type:H.r(z,0)})
z=z.a
if(z.a!==0)H.Z(P.cx("Future already completed"))
z.au(a)}},
dV:{"^":"v;",$isdV:1,"%":"Attr"},
n1:{"^":"kd;",
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isam")
throw H.e(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.am]},
$isy:1,
$asy:function(){return[W.am]},
$asp:function(){return[W.am]},
$ism:1,
$asm:function(){return[W.am]},
$isa:1,
$asa:function(){return[W.am]},
$ast:function(){return[W.am]},
"%":"CSSRuleList"},
n3:{"^":"h5;",
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
F:function(a,b){var z
if(b==null)return!1
if(!H.aP(b,"$isY",[P.E],"$asY"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.l(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gB:function(a){return W.e_(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
n4:{"^":"kf;",
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isap")
throw H.e(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.ap]},
$isy:1,
$asy:function(){return[W.ap]},
$asp:function(){return[W.ap]},
$ism:1,
$asm:function(){return[W.ap]},
$isa:1,
$asa:function(){return[W.ap]},
$ast:function(){return[W.ap]},
"%":"GamepadList"},
n9:{"^":"kh;",
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isv")
throw H.e(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.v]},
$isy:1,
$asy:function(){return[W.v]},
$asp:function(){return[W.v]},
$ism:1,
$asm:function(){return[W.v]},
$isa:1,
$asa:function(){return[W.v]},
$ast:function(){return[W.v]},
"%":"MozNamedAttrMap|NamedNodeMap"},
na:{"^":"kj;",
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isax")
throw H.e(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.ax]},
$isy:1,
$asy:function(){return[W.ax]},
$asp:function(){return[W.ax]},
$ism:1,
$asm:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$ast:function(){return[W.ax]},
"%":"SpeechRecognitionResultList"},
nb:{"^":"kl;",
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isay")
throw H.e(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.ay]},
$isy:1,
$asy:function(){return[W.ay]},
$asp:function(){return[W.ay]},
$ism:1,
$asm:function(){return[W.ay]},
$isa:1,
$asa:function(){return[W.ay]},
$ast:function(){return[W.ay]},
"%":"StyleSheetList"},
iX:{"^":"dy;cY:a<",
H:function(a,b){var z,y,x,w,v,u
H.n(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gJ(this),y=z.length,x=this.a,w=J.l(x),v=0;v<z.length;z.length===y||(0,H.F)(z),++v){u=z[v]
b.$2(u,w.a1(x,u))}},
gJ:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.h([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.k(z,w)
v=H.i(z[w],"$isdV")
if(v.namespaceURI==null)C.a.j(y,v.name)}return y},
$asW:function(){return[P.d,P.d]},
$asL:function(){return[P.d,P.d]}},
j6:{"^":"iX;a",
h:function(a,b){return J.ch(this.a,H.w(b))},
gl:function(a){return this.gJ(this).length}},
bA:{"^":"it;a,b,c,$ti"},
bY:{"^":"bA;a,b,c,$ti"},
j8:{"^":"iu;a,b,c,d,e,$ti",p:{
aL:function(a,b,c,d,e){var z=W.ei(new W.j9(c),W.an)
if(z!=null&&!0)J.f0(a,b,z,!1)
return new W.j8(0,a,b,z,!1,[e])}}},
j9:{"^":"o:21;a",
$1:function(a){return this.a.$1(H.i(a,"$isan"))}},
bB:{"^":"b;a",
cQ:function(a){var z,y
z=$.cP()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.S[y],W.kH())
for(y=0;y<12;++y)z.i(0,C.u[y],W.kI())}},
Z:function(a){return $.eS().A(0,W.aX(a))},
U:function(a,b,c){var z,y,x
z=W.aX(a)
y=$.cP()
x=y.h(0,H.f(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.c3(x.$4(a,b,c,this))},
$isac:1,
p:{
dY:function(a){var z,y
z=document.createElement("a")
y=new W.jN(z,window.location)
y=new W.bB(y)
y.cQ(a)
return y},
n7:[function(a,b,c,d){H.i(a,"$isU")
H.w(b)
H.w(c)
H.i(d,"$isbB")
return!0},"$4","kH",16,0,12],
n8:[function(a,b,c,d){var z,y,x
H.i(a,"$isU")
H.w(b)
H.w(c)
z=H.i(d,"$isbB").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kI",16,0,12]}},
t:{"^":"b;$ti",
gD:function(a){return new W.dm(a,this.gl(a),-1,[H.bi(this,a,"t",0)])}},
dB:{"^":"b;a",
Z:function(a){return C.a.bq(this.a,new W.hS(a))},
U:function(a,b,c){return C.a.bq(this.a,new W.hR(a,b,c))},
$isac:1},
hS:{"^":"o:9;a",
$1:function(a){return H.i(a,"$isac").Z(this.a)}},
hR:{"^":"o:9;a,b,c",
$1:function(a){return H.i(a,"$isac").U(this.a,this.b,this.c)}},
jO:{"^":"b;",
cR:function(a,b,c,d){var z,y,x
this.a.I(0,c)
z=b.aK(0,new W.jP())
y=b.aK(0,new W.jQ())
this.b.I(0,z)
x=this.c
x.I(0,C.U)
x.I(0,y)},
Z:function(a){return this.a.A(0,W.aX(a))},
U:["cA",function(a,b,c){var z,y
z=W.aX(a)
y=this.c
if(y.A(0,H.f(z)+"::"+b))return this.d.dh(c)
else if(y.A(0,"*::"+b))return this.d.dh(c)
else{y=this.b
if(y.A(0,H.f(z)+"::"+b))return!0
else if(y.A(0,"*::"+b))return!0
else if(y.A(0,H.f(z)+"::*"))return!0
else if(y.A(0,"*::*"))return!0}return!1}],
$isac:1},
jP:{"^":"o:10;",
$1:function(a){return!C.a.A(C.u,H.w(a))}},
jQ:{"^":"o:10;",
$1:function(a){return C.a.A(C.u,H.w(a))}},
k_:{"^":"jO;e,a,b,c,d",
U:function(a,b,c){if(this.cA(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ch(a,"template")==="")return this.e.A(0,b)
return!1},
p:{
e8:function(){var z,y,x,w,v
z=P.d
y=P.cs(C.t,z)
x=H.r(C.t,0)
w=H.n(new W.k0(),{func:1,ret:z,args:[x]})
v=H.h(["TEMPLATE"],[z])
y=new W.k_(y,P.a4(null,null,null,z),P.a4(null,null,null,z),P.a4(null,null,null,z),null)
y.cR(null,new H.hB(C.t,w,[x,z]),v,null)
return y}}},
k0:{"^":"o:22;",
$1:function(a){return"TEMPLATE::"+H.f(H.w(a))}},
jY:{"^":"b;",
Z:function(a){var z=J.B(a)
if(!!z.$isdH)return!1
z=!!z.$isI
if(z&&W.aX(a)==="foreignObject")return!1
if(z)return!0
return!1},
U:function(a,b,c){if(b==="is"||C.i.cr(b,"on"))return!1
return this.Z(a)},
$isac:1},
dm:{"^":"b;a,b,c,0d,$ti",
sbg:function(a){this.d=H.A(a,H.r(this,0))},
v:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbg(J.bl(this.a,z))
this.c=z
return!0}this.sbg(null)
this.c=y
return!1},
gE:function(a){return this.d},
$isaZ:1},
j0:{"^":"b;a",$isO:1,$isdT:1,p:{
j1:function(a){if(a===window)return H.i(a,"$isdT")
else return new W.j0(a)}}},
ac:{"^":"b;"},
jN:{"^":"b;a,b",$ismQ:1},
eb:{"^":"b;a",
aT:function(a){new W.ka(this).$2(a,null)},
a4:function(a,b){if(b==null)J.d_(a)
else J.bJ(b,a)},
da:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fk(a)
x=J.ch(y.gcY(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a8(t)}v="element unprintable"
try{v=J.bn(a)}catch(t){H.a8(t)}try{u=W.aX(a)
this.d9(H.i(a,"$isU"),b,z,v,u,H.i(y,"$isL"),H.w(x))}catch(t){if(H.a8(t) instanceof P.aG)throw t
else{this.a4(a,b)
window
s="Removing corrupted element "+H.f(v)
if(typeof console!="undefined")window.console.warn(s)}}},
d9:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a4(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.Z(a)){this.a4(a,b)
window
z="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.U(a,"is",g)){this.a4(a,b)
window
z="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gJ(f)
y=H.h(z.slice(0),[H.r(z,0)])
for(x=f.gJ(f).length-1,z=f.a,w=J.l(z);x>=0;--x){if(x>=y.length)return H.k(y,x)
v=y[x]
if(!this.a.U(a,J.fw(v),w.a1(z,v))){window
u="Removing disallowed attribute <"+H.f(e)+" "+v+'="'+H.f(w.a1(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.a1(z,v)
w.d4(z,v)}}if(!!J.B(a).$isdM)this.aT(a.content)},
$ism6:1},
ka:{"^":"o:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.da(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a4(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fl(z)}catch(w){H.a8(w)
v=H.i(z,"$isv")
if(x){u=v.parentNode
if(u!=null)J.bJ(u,v)}else J.bJ(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.i(y,"$isv")}}},
j_:{"^":"j+fV;"},
j2:{"^":"j+p;"},
j3:{"^":"j2+t;"},
j4:{"^":"j+p;"},
j5:{"^":"j4+t;"},
jb:{"^":"j+p;"},
jc:{"^":"jb+t;"},
jp:{"^":"j+p;"},
jq:{"^":"jp+t;"},
jx:{"^":"j+W;"},
jy:{"^":"j+W;"},
jz:{"^":"j+p;"},
jA:{"^":"jz+t;"},
jB:{"^":"j+p;"},
jC:{"^":"jB+t;"},
jF:{"^":"j+p;"},
jG:{"^":"jF+t;"},
jM:{"^":"j+W;"},
e5:{"^":"O+p;"},
e6:{"^":"e5+t;"},
jR:{"^":"j+p;"},
jS:{"^":"jR+t;"},
jV:{"^":"j+W;"},
k1:{"^":"j+p;"},
k2:{"^":"k1+t;"},
e9:{"^":"O+p;"},
ea:{"^":"e9+t;"},
k6:{"^":"j+p;"},
k7:{"^":"k6+t;"},
kc:{"^":"j+p;"},
kd:{"^":"kc+t;"},
ke:{"^":"j+p;"},
kf:{"^":"ke+t;"},
kg:{"^":"j+p;"},
kh:{"^":"kg+t;"},
ki:{"^":"j+p;"},
kj:{"^":"ki+t;"},
kk:{"^":"j+p;"},
kl:{"^":"kk+t;"}}],["","",,P,{"^":"",
a2:function(a){var z,y,x,w,v
if(a==null)return
z=P.S(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.F)(y),++w){v=H.w(y[w])
z.i(0,v,a[v])}return z},
kx:function(a,b){var z={}
a.H(0,new P.ky(z))
return z},
df:function(){var z=$.de
if(z==null){z=J.cd(window.navigator.userAgent,"Opera",0)
$.de=z}return z},
h1:function(){var z,y
z=$.db
if(z!=null)return z
y=$.dc
if(y==null){y=J.cd(window.navigator.userAgent,"Firefox",0)
$.dc=y}if(y)z="-moz-"
else{y=$.dd
if(y==null){y=!P.df()&&J.cd(window.navigator.userAgent,"Trident/",0)
$.dd=y}if(y)z="-ms-"
else z=P.df()?"-o-":"-webkit-"}$.db=z
return z},
ky:{"^":"o:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
kY:function(a){return Math.sqrt(a)},
dZ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
b4:{"^":"b;a0:a>,V:b>,$ti",
k:function(a){return"Point("+H.f(this.a)+", "+H.f(this.b)+")"},
F:function(a,b){if(b==null)return!1
return H.aP(b,"$isb4",[P.E],null)&&this.a==J.bM(b)&&this.b==b.gV(b)},
gB:function(a){var z,y,x
z=J.al(this.a)
y=J.al(this.b)
y=P.dZ(P.dZ(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
jH:{"^":"b;"},
Y:{"^":"jH;$ti"}}],["","",,P,{"^":"",fG:{"^":"j;",$isfG:1,"%":"SVGAnimatedLength"},ln:{"^":"I;0n:height=,0m:width=","%":"SVGFEBlendElement"},lo:{"^":"I;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},lp:{"^":"I;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},lq:{"^":"I;0n:height=,0m:width=","%":"SVGFECompositeElement"},lr:{"^":"I;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},ls:{"^":"I;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},lt:{"^":"I;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},lu:{"^":"I;0n:height=,0m:width=","%":"SVGFEFloodElement"},lv:{"^":"I;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},lw:{"^":"I;0n:height=,0m:width=","%":"SVGFEImageElement"},lx:{"^":"I;0n:height=,0m:width=","%":"SVGFEMergeElement"},ly:{"^":"I;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},lz:{"^":"I;0n:height=,0m:width=","%":"SVGFEOffsetElement"},lA:{"^":"I;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},lB:{"^":"I;0n:height=,0m:width=","%":"SVGFETileElement"},lC:{"^":"I;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},lF:{"^":"I;0n:height=,0m:width=","%":"SVGFilterElement"},lG:{"^":"bu;0n:height=,0m:width=","%":"SVGForeignObjectElement"},hf:{"^":"bu;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bu:{"^":"I;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},lQ:{"^":"bu;0n:height=,0m:width=","%":"SVGImageElement"},b0:{"^":"j;",$isb0:1,"%":"SVGLength"},lV:{"^":"js;",
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.G(b,a,null,null,null))
return this.S(a,b)},
i:function(a,b,c){H.i(c,"$isb0")
throw H.e(P.z("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
S:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b0]},
$ism:1,
$asm:function(){return[P.b0]},
$isa:1,
$asa:function(){return[P.b0]},
$ast:function(){return[P.b0]},
"%":"SVGLengthList"},lW:{"^":"I;0n:height=,0m:width=","%":"SVGMaskElement"},b3:{"^":"j;",$isb3:1,"%":"SVGNumber"},m7:{"^":"jE;",
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.G(b,a,null,null,null))
return this.S(a,b)},
i:function(a,b,c){H.i(c,"$isb3")
throw H.e(P.z("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
S:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b3]},
$ism:1,
$asm:function(){return[P.b3]},
$isa:1,
$asa:function(){return[P.b3]},
$ast:function(){return[P.b3]},
"%":"SVGNumberList"},mc:{"^":"I;0n:height=,0m:width=","%":"SVGPatternElement"},me:{"^":"j;0l:length=","%":"SVGPointList"},mg:{"^":"j;0n:height=,0m:width=","%":"SVGRect"},mh:{"^":"hf;0n:height=,0m:width=","%":"SVGRectElement"},dH:{"^":"I;",$isdH:1,"%":"SVGScriptElement"},mt:{"^":"jX;",
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.G(b,a,null,null,null))
return this.S(a,b)},
i:function(a,b,c){H.w(c)
throw H.e(P.z("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
S:function(a,b){return a.getItem(b)},
$asp:function(){return[P.d]},
$ism:1,
$asm:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$ast:function(){return[P.d]},
"%":"SVGStringList"},I:{"^":"U;",
P:function(a,b,c,d){var z,y,x,w,v,u
z=H.h([],[W.ac])
C.a.j(z,W.dY(null))
C.a.j(z,W.e8())
C.a.j(z,new W.jY())
c=new W.eb(new W.dB(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).dv(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a7(w)
u=z.ga9(z)
for(z=J.l(v);x=u.firstChild,x!=null;)z.K(v,x)
return v},
$isI:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mu:{"^":"bu;0n:height=,0m:width=","%":"SVGSVGElement"},b7:{"^":"j;",$isb7:1,"%":"SVGTransform"},mE:{"^":"k9;",
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.G(b,a,null,null,null))
return this.S(a,b)},
i:function(a,b,c){H.i(c,"$isb7")
throw H.e(P.z("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
S:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b7]},
$ism:1,
$asm:function(){return[P.b7]},
$isa:1,
$asa:function(){return[P.b7]},
$ast:function(){return[P.b7]},
"%":"SVGTransformList"},mS:{"^":"bu;0n:height=,0m:width=","%":"SVGUseElement"},jr:{"^":"j+p;"},js:{"^":"jr+t;"},jD:{"^":"j+p;"},jE:{"^":"jD+t;"},jW:{"^":"j+p;"},jX:{"^":"jW+t;"},k8:{"^":"j+p;"},k9:{"^":"k8+t;"}}],["","",,P,{"^":"",aj:{"^":"b;",$ism:1,
$asm:function(){return[P.a3]},
$isa:1,
$asa:function(){return[P.a3]},
$isiG:1}}],["","",,P,{"^":"",l3:{"^":"j;0l:length=","%":"AudioBuffer"},l4:{"^":"iY;",
h:function(a,b){return P.a2(a.get(H.w(b)))},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gJ:function(a){var z=H.h([],[P.d])
this.H(a,new P.fI(z))
return z},
gl:function(a){return a.size},
$asW:function(){return[P.d,null]},
$isL:1,
$asL:function(){return[P.d,null]},
"%":"AudioParamMap"},fI:{"^":"o:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},l5:{"^":"O;0l:length=","%":"AudioTrackList"},fJ:{"^":"O;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},m9:{"^":"fJ;0l:length=","%":"OfflineAudioContext"},iY:{"^":"j+W;"}}],["","",,P,{"^":"",fL:{"^":"j;",$isfL:1,"%":"WebGLBuffer"},he:{"^":"j;",$ishe:1,"%":"WebGLFramebuffer"},i7:{"^":"j;",$isi7:1,"%":"WebGLProgram"},mi:{"^":"j;",
bp:function(a,b){return a.activeTexture(b)},
br:function(a,b,c){return a.attachShader(b,c)},
bs:function(a,b,c){return a.bindBuffer(b,c)},
bu:function(a,b,c){return a.bindFramebuffer(b,c)},
bv:function(a,b,c){return a.bindTexture(b,c)},
bw:function(a,b){return a.blendEquation(b)},
bx:function(a,b,c){return a.blendFunc(b,c)},
by:function(a,b,c,d){return a.bufferData(b,c,d)},
bz:function(a,b){return a.checkFramebufferStatus(b)},
bA:function(a,b){return a.clear(b)},
bB:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bC:function(a,b){return a.compileShader(b)},
bD:function(a){return a.createBuffer()},
bE:function(a){return a.createFramebuffer()},
bF:function(a){return a.createProgram()},
bG:function(a,b){return a.createShader(b)},
bH:function(a){return a.createTexture()},
bJ:function(a,b){return a.depthMask(b)},
bK:function(a,b){return a.disable(b)},
bL:function(a,b,c,d){return a.drawArrays(b,c,d)},
bM:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bN:function(a,b){return a.enable(b)},
bO:function(a,b){return a.enableVertexAttribArray(b)},
bQ:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
am:function(a){return P.a2(a.getContextAttributes())},
aL:function(a){return a.getError()},
aN:function(a,b){return a.getProgramInfoLog(b)},
aO:function(a,b,c){return a.getProgramParameter(b,c)},
aQ:function(a,b){return a.getShaderInfoLog(b)},
aR:function(a,b,c){return a.getShaderParameter(b,c)},
aS:function(a,b,c){return a.getUniformLocation(b,c)},
bR:function(a,b){return a.linkProgram(b)},
aU:function(a,b,c){return a.shaderSource(b,c)},
aW:function(a,b,c,d){return a.stencilFunc(b,c,d)},
c0:function(a,b,c,d,e,f,g,h,i,j){this.aF(a,b,c,d,e,f,g,h,i,j)
return},
aF:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
c1:function(a,b,c,d){return a.texParameterf(b,c,d)},
c2:function(a,b,c,d){return a.texParameteri(b,c,d)},
c6:function(a,b,c){return a.uniform1f(b,c)},
c7:function(a,b,c){return a.uniform1fv(b,c)},
c8:function(a,b,c){return a.uniform1i(b,c)},
c9:function(a,b,c){return a.uniform1iv(b,c)},
ca:function(a,b,c){return a.uniform2fv(b,c)},
cb:function(a,b,c){return a.uniform3fv(b,c)},
cc:function(a,b,c){return a.uniform4fv(b,c)},
cd:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ce:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cf:function(a,b){return a.useProgram(b)},
cg:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cj:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},mj:{"^":"j;",
dk:function(a,b){return a.beginTransformFeedback(b)},
dn:function(a,b){return a.bindVertexArray(b)},
dz:function(a){return a.createVertexArray()},
dB:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dC:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dD:function(a){return a.endTransformFeedback()},
dQ:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
dT:function(a,b,c,d){this.de(a,b,H.u(c,"$isa",[P.d],"$asa"),d)
return},
de:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dU:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bp:function(a,b){return a.activeTexture(b)},
br:function(a,b,c){return a.attachShader(b,c)},
bs:function(a,b,c){return a.bindBuffer(b,c)},
bu:function(a,b,c){return a.bindFramebuffer(b,c)},
bv:function(a,b,c){return a.bindTexture(b,c)},
bw:function(a,b){return a.blendEquation(b)},
bx:function(a,b,c){return a.blendFunc(b,c)},
by:function(a,b,c,d){return a.bufferData(b,c,d)},
bz:function(a,b){return a.checkFramebufferStatus(b)},
bA:function(a,b){return a.clear(b)},
bB:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bC:function(a,b){return a.compileShader(b)},
bD:function(a){return a.createBuffer()},
bE:function(a){return a.createFramebuffer()},
bF:function(a){return a.createProgram()},
bG:function(a,b){return a.createShader(b)},
bH:function(a){return a.createTexture()},
bJ:function(a,b){return a.depthMask(b)},
bK:function(a,b){return a.disable(b)},
bL:function(a,b,c,d){return a.drawArrays(b,c,d)},
bM:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bN:function(a,b){return a.enable(b)},
bO:function(a,b){return a.enableVertexAttribArray(b)},
bQ:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
am:function(a){return P.a2(a.getContextAttributes())},
aL:function(a){return a.getError()},
aN:function(a,b){return a.getProgramInfoLog(b)},
aO:function(a,b,c){return a.getProgramParameter(b,c)},
aQ:function(a,b){return a.getShaderInfoLog(b)},
aR:function(a,b,c){return a.getShaderParameter(b,c)},
aS:function(a,b,c){return a.getUniformLocation(b,c)},
bR:function(a,b){return a.linkProgram(b)},
aU:function(a,b,c){return a.shaderSource(b,c)},
aW:function(a,b,c,d){return a.stencilFunc(b,c,d)},
c0:function(a,b,c,d,e,f,g,h,i,j){this.aF(a,b,c,d,e,f,g,h,i,j)
return},
aF:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
c1:function(a,b,c,d){return a.texParameterf(b,c,d)},
c2:function(a,b,c,d){return a.texParameteri(b,c,d)},
c6:function(a,b,c){return a.uniform1f(b,c)},
c7:function(a,b,c){return a.uniform1fv(b,c)},
c8:function(a,b,c){return a.uniform1i(b,c)},
c9:function(a,b,c){return a.uniform1iv(b,c)},
ca:function(a,b,c){return a.uniform2fv(b,c)},
cb:function(a,b,c){return a.uniform3fv(b,c)},
cc:function(a,b,c){return a.uniform4fv(b,c)},
cd:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ce:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cf:function(a,b){return a.useProgram(b)},
cg:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cj:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},ij:{"^":"j;",$isij:1,"%":"WebGLShader"},iy:{"^":"j;",$isiy:1,"%":"WebGLTexture"},iJ:{"^":"j;",$isiJ:1,"%":"WebGLUniformLocation"},iN:{"^":"j;",$isiN:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",mq:{"^":"jU;",
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.G(b,a,null,null,null))
return P.a2(this.d1(a,b))},
i:function(a,b,c){H.i(c,"$isL")
throw H.e(P.z("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
d1:function(a,b){return a.item(b)},
$asp:function(){return[[P.L,,,]]},
$ism:1,
$asm:function(){return[[P.L,,,]]},
$isa:1,
$asa:function(){return[[P.L,,,]]},
$ast:function(){return[[P.L,,,]]},
"%":"SQLResultSetRowList"},jT:{"^":"j+p;"},jU:{"^":"jT+t;"}}],["","",,G,{"^":"",
iR:function(a){var z,y,x,w
z=H.h(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.k(z,y)
C.a.i(z,y,w+H.f(z[y]))}return C.a.a_(z,"\n")},
dW:function(a,b,c){var z,y,x,w
z=J.l(a)
y=z.bG(a,b)
z.aU(a,y,c)
z.bC(a,y)
x=H.c3(z.aR(a,y,35713))
if(x!=null&&!x){w=z.aQ(a,y)
P.aR("E:Compilation failed:")
P.aR("E:"+G.iR(c))
P.aR("E:Failure:")
P.aR(C.i.L("E:",w))
throw H.e(w)}return y},
hT:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
d.w(b)
d.aa(0,a)
e.w(c)
e.aa(0,a)
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
r=Math.sqrt(e.gaI())
if(r===0)return!1
e.T(0,-1/r)
return!0},
dn:function(a,b){var z,y,x
H.u(a,"$isa",[T.c],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.f.i(b,z,J.bM(a[y]))
if(y>=a.length)return H.k(a,y)
C.f.i(b,z+1,J.cg(a[y]))
z+=2
if(y>=a.length)return H.k(a,y)
x=J.cX(a[y])
if(z>=b.length)return H.k(b,z)
b[z]=x}return b},
hc:function(a,b){var z,y
H.u(a,"$isa",[T.q],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.f.i(b,z,J.bM(a[y]))
if(y>=a.length)return H.k(a,y)
C.f.i(b,z+1,J.cg(a[y]))}return b},
hd:function(a,b){var z,y,x,w,v
H.u(a,"$isa",[T.b9],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.f.i(b,z,J.bM(a[y]))
if(y>=a.length)return H.k(a,y)
C.f.i(b,z+1,J.cg(a[y]))
x=z+2
if(y>=a.length)return H.k(a,y)
w=J.cX(a[y])
v=b.length
if(x>=v)return H.k(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.k(a,y)
w=J.fn(a[y])
if(z>=v)return H.k(b,z)
b[z]=w}return b},
hb:function(a,b){var z,y
H.u(a,"$isa",[[P.a,P.D]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.n.i(b,z,J.bl(a[y],0))
if(y>=a.length)return H.k(a,y)
C.n.i(b,z+1,J.bl(a[y],1))
if(y>=a.length)return H.k(a,y)
C.n.i(b,z+2,J.bl(a[y],2))
if(y>=a.length)return H.k(a,y)
C.n.i(b,z+3,J.bl(a[y],3))}return b},
jn:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.aq(z,[H.r(z,0)]),y=y.gD(y),x=b.x,w=[[P.a,P.D]],v=[P.a3],u=[T.b9],t=[T.c],s=[T.q];y.v();){r=y.d
if(!x.aj(0,r)){r="Dropping unnecessary attribute: "+H.f(r)
if($.eo>0)H.c9("I: "+r)
continue}q=z.h(0,r)
switch($.a9().h(0,r).a){case"vec2":b.a3(r,G.hc(H.bI(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.a3(r,G.dn(H.bI(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.a3(r,G.hd(H.bI(q,"$isa",u,"$asa"),null),4)
break
case"float":b.a3(r,new Float32Array(H.c_(H.bI(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.a3(r,G.hb(H.bI(q,"$isa",w,"$asa"),null),4)
break}}},
bt:function(a,b,c){var z,y,x,w,v,u,t,s
z=b.d
y=b.e.x
x=P.d
w=P.S(x,P.b)
v=J.fa(z.a)
u=new G.hE(z,v,4,w,y,0,-1,P.S(x,P.aj),"meshdata:"+a,!1,!0)
x=G.dn(c.d,null)
w.i(0,"aPosition",J.ce(z.a))
u.ch=x
u.aZ("aPosition",x,3)
t=$.a9().h(0,"aPosition")
if(t==null)H.Z("Unknown canonical aPosition")
s=y.h(0,"aPosition")
J.bK(z.a,v)
z.bP(0,s,0)
z.ci(0,w.h(0,"aPosition"),s,t.b1(),5126,!1,0,0)
y=H.u(c.cF(),"$isa",[P.D],"$asa")
u.y=J.ce(z.a)
x=u.ch.length
if(x<768){u.sax(new Uint8Array(H.c_(y)))
u.Q=5121}else if(x<196608){u.sax(new Uint16Array(H.c_(y)))
u.Q=5123}else{u.sax(new Uint32Array(H.c_(y)))
u.Q=5125}J.bK(z.a,v)
y=u.y
x=u.cx
J.cb(z.a,34963,y)
J.cT(z.a,34963,x,35048)
G.jn(c,u)
return u},
b1:{"^":"b;"},
aJ:{"^":"b1;d,a,b,c",
b2:function(){return this.d},
k:function(a){var z,y,x,w
z=H.h(["{"+new H.dP(H.kE(this)).k(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.aq(y,[H.r(y,0)]),x=x.gD(x);x.v();){w=x.d
C.a.j(z,H.f(w)+": "+H.f(y.h(0,w)))}return C.a.a_(z,"\n")}},
fN:{"^":"b;0a,b",
bP:function(a,b,c){J.fh(this.a,b)
if(c>0)J.fC(this.a,b,c)},
ci:function(a,b,c,d,e,f,g,h){J.cb(this.a,34962,b)
J.fD(this.a,c,d,e,!1,g,h)}},
dp:{"^":"b;a,b,c,d,e"},
V:{"^":"b;ah:a>,a5:b>,a6:c>",p:{
K:function(a,b,c){return new G.V(a,b,c)}}},
ai:{"^":"b;ah:a>,a5:b>,a6:c>,d"},
bs:{"^":"b;a,b,c,d,e",
N:function(a){switch($.a9().h(0,a).a){case"vec2":this.e.i(0,a,H.h([],[T.q]))
break
case"vec3":this.e.i(0,a,H.h([],[T.c]))
break
case"vec4":this.e.i(0,a,H.h([],[T.b9]))
break
case"float":this.e.i(0,a,H.h([],[P.a3]))
break
case"uvec4":this.e.i(0,a,H.h([],[[P.a,P.D]]))
break}},
cC:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)C.a.j(y,new G.ai(z,z+1,z+2,z+3))},
ad:function(a){var z,y,x,w,v
H.u(a,"$isa",[T.c],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.F)(a),++x){w=a[x]
v=new T.c(new Float32Array(3))
v.w(w)
C.a.j(y,v)}},
ab:function(a,b){var z,y,x,w,v,u,t
z=[T.q]
H.u(b,"$isa",z,"$asa")
y=H.u(this.e.h(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.F)(b),++w){v=b[w]
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.j(y,new T.q(u))}},
ac:function(a,b){var z,y,x,w,v,u
z=[T.c]
H.u(b,"$isa",z,"$asa")
y=H.u(this.e.h(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.F)(b),++w){v=b[w]
u=new T.c(new Float32Array(3))
u.w(v)
x.j(y,u)}},
cF:function(){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.h(x,[P.D])
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
cH:function(a,b){var z,y,x,w,v,u,t
z=H.h([],[T.q])
this.e.i(0,"aTexUV",z)
for(y=b-1,x=a-1,w=0;w<b;++w)for(v=w/y,u=0;u<a;++u){t=new Float32Array(2)
t[0]=v
t[1]=u/x
C.a.j(z,new T.q(t))}},
cG:function(a,b,c){var z,y,x,w,v,u,t,s,r
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
k:function(a){var z,y,x,w,v
z=H.h(["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"],[P.d])
for(y=this.e,x=new H.aq(y,[H.r(y,0)]),x=x.gD(x);x.v();){w=x.d
v=$.a9().h(0,w).a
C.a.j(z,H.f(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.a_(z," ")}},
cz:{"^":"b;a,b,c",p:{
iA:function(a,b,c){return new G.cz(a,b,c)}}},
dN:{"^":"b;a,b,c"},
hC:{"^":"aJ;d,a,b,c",p:{
ct:function(a){var z=P.S(P.d,P.b)
z.i(0,"cDepthTest",!0)
z.i(0,"cDepthWrite",!0)
z.i(0,"cBlendEquation",$.ez())
z.i(0,"cStencilFunc",$.ca())
return new G.hC(z,a,!1,!0)}}},
hE:{"^":"b1;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sax:function(a){this.cx=H.u(a,"$isa",[P.D],"$asa")},
aZ:function(a,b,c){var z,y
C.i.at(a,0)
H.i(b,"$isaj")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.cb(z.a,34962,y)
J.cT(z.a,34962,b,35048)},
b0:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a3:function(a,b,c){var z,y,x,w,v
z=J.cQ(a,0)===105
if(z&&this.z===0)this.z=C.d.cB(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.ce(x.a))
this.aZ(a,b,c)
w=$.a9().h(0,a)
if(w==null)throw H.e("Unknown canonical "+a)
v=this.x.h(0,a)
J.bK(x.a,this.e)
x.bP(0,v,z?1:0)
x.ci(0,y.h(0,a),v,w.b1(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.h(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=new H.aq(z,[H.r(z,0)]),x=x.gD(x);x.v();){w=x.d
C.a.j(y,H.f(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.a_(y,"  ")}},
hY:{"^":"aJ;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cD:function(a,b){var z
if(typeof a!=="number")return a.dW()
if(typeof b!=="number")return H.aD(b)
z=a/b
if(this.z===z)return
this.z=z
this.b4()},
b4:function(){var z,y,x,w,v,u
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
y.i(0,"uEyePosition",z.aM())
x=this.cy
x.w(z.d)
z=this.cx
z.w(this.db)
z.bS(0,x)
y.i(0,"uPerspectiveViewMatrix",z)
return y}},
bq:{"^":"b;a,b,c,d,e",
k:function(a){return"["+this.a+"] "+this.b+" "+this.c+" mode:"+this.d+" ["+this.e.a+"usec]"}},
ic:{"^":"b1;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cK:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
x.i(0,t,J.cZ(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
x.i(0,t,J.cZ(w.a,v,t))}},
cN:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.h([],[P.d])
x=H.h([],[P.d])
for(y=new H.aq(y,[H.r(y,0)]),y=y.gD(y);y.v();){w=y.d
if(!z.aj(0,w))C.a.j(x,w)}for(z=this.x,z=P.ju(z,z.r,H.r(z,0)),y=this.Q;z.v();){w=z.d
if(!y.A(0,w))C.a.j(x,w)}return x},
cP:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.u(b,"$isL",[P.d,P.b],"$asL")
z=Date.now()
for(y=new H.aq(b,[H.r(b,0)]),y=y.gD(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.v();){s=y.d
switch(J.cQ(s,0)){case 117:if(w.aj(0,s)){r=b.h(0,s)
if(v.aj(0,s))H.c9("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.i(0,s,a)
q=$.a9().h(0,s)
if(q==null)H.Z("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.P(r)
J.ci(x.a,p,r)}else if(!!J.B(r).$ishk)J.fA(x.a,p,r)
break
case"float":if(q.c===0){H.em(r)
J.fy(x.a,p,r)}else if(!!J.B(r).$isaj)J.fz(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.ag(r,"$isQ").a
J.d4(x.a,p,!1,s)}else if(!!J.B(r).$isaj)J.d4(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=H.ag(r,"$isar").a
J.d3(x.a,p,!1,s)}else if(!!J.B(r).$isaj)J.d3(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.d2(o,p,H.ag(r,"$isb9").a)
else J.d2(o,p,H.i(r,"$isaj"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.d1(o,p,H.ag(r,"$isc").a)
else J.d1(o,p,H.i(r,"$isaj"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.d0(o,p,H.ag(r,"$isq").a)
else J.d0(o,p,H.i(r,"$isaj"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.aD(s)
J.cR(x.a,33984+s)
s=H.ag(r,"$isbW").b
J.aT(x.a,3553,s)
s=this.ch
J.ci(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.L()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.aD(s)
J.cR(x.a,33984+s)
s=H.ag(r,"$isbW").b
J.aT(x.a,34067,s)
s=this.ch
J.ci(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.L()
this.ch=s+1
break
default:H.c9("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":s=J.aF(r,!0)
o=x.a
if(s)J.bm(o,2929)
else J.cf(o,2929)
break
case"cStencilFunc":H.ag(r,"$iscz")
s=r.a
o=x.a
if(s===1281)J.cf(o,2960)
else{J.bm(o,2960)
o=r.b
n=r.c
J.fs(x.a,s,o,n)}break
case"cDepthWrite":H.c3(r)
J.fb(x.a,r)
break
case"cBlendEquation":H.ag(r,"$isdN")
s=r.a
o=x.a
if(s===1281)J.cf(o,3042)
else{J.bm(o,3042)
o=r.b
n=r.c
J.f3(x.a,o,n)
J.f2(x.a,s)}break}++t
break}}m=P.dg(0,0,0,Date.now()-new P.bo(z,!1).a,0,0)
""+t
m.k(0)},
cE:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
H.u(b,"$isa",[G.aJ],"$asa")
H.u(c,"$isa",[G.bq],"$asa")
z=Date.now()
y=this.d
J.fB(y.a,this.r)
this.ch=0
x=this.z
if(x.a>0){x.f=null
x.e=null
x.d=null
x.c=null
x.b=null
x.a=0
x.ba()}for(x=b.length,w=0;w<b.length;b.length===x||(0,H.F)(b),++w){v=b[w]
this.cP(v.a,v.b2())}x=this.Q
x.a7(0)
for(u=a.cy,u=new H.aq(u,[H.r(u,0)]),u=u.gD(u);u.v();)x.j(0,u.d)
t=this.cN()
if(t.length!==0)P.aR("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(t)))
J.bK(a.d.a,a.e)
s=this.e.f.length>0
x=a.f
u=a.b0()
r=a.Q
q=a.z
if(s)J.f1(y.a,x)
if(r!==-1){p=y.a
if(q>1)J.ff(p,x,u,r,0,q)
else J.fe(p,x,u,r,0)}else{r=y.a
if(q>1)J.fd(r,x,0,u,q)
else J.fc(r,x,0,u)}if(s)J.fi(y.a)
C.a.j(c,new G.bq(this.a,a.z,a.b0(),x,P.dg(0,0,0,Date.now()-new P.bo(z,!1).a,0,0)))},
p:{
dG:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
y=P.a4(null,null,null,z)
x=c.b
w=d.b
v=H.u(c.f,"$isa",[z],"$asa")
u=J.f9(b.a)
t=G.dW(b.a,35633,x)
J.cS(b.a,u,t)
s=G.dW(b.a,35632,w)
J.cS(b.a,u,s)
if(v.length>0)J.fx(b.a,u,v,35980)
J.fr(b.a,u)
if(!H.c3(J.fq(b.a,u,35714)))H.Z(J.fp(b.a,u))
z=new G.ic(b,c,d,u,P.cs(c.c,z),P.S(z,P.b),P.S(z,z),y,a,!1,!0)
z.cK(a,b,c,d)
return z}}},
C:{"^":"b;a,b,c",
b1:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
ik:{"^":"b;a,0b,c,d,e,f,r,x",
aY:function(a){var z,y,x,w
H.u(a,"$isa",[P.d],"$asa")
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
C.a.j(z,w)
y.i(0,w,this.r);++this.r}C.a.aV(z)},
ap:function(a){var z,y,x
H.u(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.F)(a),++x)C.a.j(y,a[x])
C.a.aV(y)},
cL:function(a,b){this.b=this.b5(!0,H.u(a,"$isa",[P.d],"$asa"),b)},
aq:function(a){return this.cL(a,null)},
b5:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.u(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.h(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.F)(y),++u){t=y[u]
s=$.a9().h(0,t)
C.a.j(w,"layout (location="+H.f(v.h(0,t))+") in "+s.a+" "+H.f(t)+";")}C.a.j(w,"")
r=x?"in":"out"
if(x)C.a.j(w,"out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.k(z,u)
q=z[u]
s=$.a9().h(0,q)
C.a.j(w,r+" "+s.a+" "+H.f(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){q=z[u]
s=$.a9().h(0,q)
C.a.j(w,r+" "+s.a+" "+H.f(q)+";")}C.a.j(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){q=z[u]
s=$.a9().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.j(w,"uniform "+s.a+" "+H.f(q)+p+";")}C.a.j(w,"")
if(a)C.a.j(w,"void main(void) {")
C.a.I(w,b)
if(a)C.a.j(w,"}")
return C.a.a_(w,"\n")},
p:{
bV:function(a){var z,y
z=P.d
y=[z]
return new G.ik(a,H.h([],y),H.h([],y),H.h([],y),H.h([],y),0,P.S(z,P.D))}}},
dI:{"^":"b1;",
aM:function(){var z,y,x
z=this.e
y=this.d.a
x=z.a
x[0]=y[12]
x[1]=y[13]
x[2]=y[14]
return z},
a2:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}},
iz:{"^":"b;a,b,c,d,e,f,r",
b3:function(a,b){var z=this.e
if(z!==1)J.fu(a.a,b,34046,z)
z=this.r
J.bN(a.a,b,10240,z)
z=this.f
J.bN(a.a,b,10241,z)
if(this.b){J.bN(a.a,b,10242,33071)
J.bN(a.a,b,10243,33071)}}},
bW:{"^":"b;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
iH:{"^":"bW;f,r,x,a,b,c,d,e",
k:function(a){return"TypedTexture["+this.a+", "+this.x+", "+H.f(this.f)+" X "+H.f(this.r)+"]"}},
iI:{"^":"bW;f,r,x,a,b,c,d,e",
k:function(a){return"TypedTextureMutable["+this.a+", "+this.x+", "+this.f+" X "+H.f(this.r)+"]"}}}],["","",,R,{"^":"",
jw:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.i(W.j7("span",null),"$isU")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.w).as(y,"float")
y.setProperty(x,"left","")
x=C.w.as(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.q.K(z,v)}return z},
iq:{"^":"b;",
cM:function(a,b,c){var z,y
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
y=J.l(z)
y.K(z,this.b)
y.K(z,this.d)
y.K(z,this.c)}},
ir:{"^":"iq;e,f,a,b,c,d",
cO:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.x.dS(y,2)+" fps"
C.q.co(this.c,b)
x=C.d.Y(30*C.x.dq(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.i(z.firstChild,"$isU")
v=w.style
u=""+x+"px"
v.height=u
C.q.K(z,w)}}}],["","",,A,{"^":"",
en:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.u(d,"$isa",[G.bq],"$asa")
H.u(e,"$isa",[G.aJ],"$asa")
z=b.dx
z.w(c)
y=b.d
z.bS(0,y)
x=b.ch
if(x!=null){b.cx
w=!0}else w=!1
if(w){H.f(b)
w=C.a.gdI(e)
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
v.dt(new T.ar(u))
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
C.a.j(e,x)
a.cE(b.cx,e,d)
if(0>=e.length)return H.k(e,-1)
e.pop()}for(y=b.cy,r=0;!1;++r){if(r>=0)return H.k(y,r)
A.en(a,y[r],z,d,e)}},
b2:{"^":"dI;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
k:function(a){return"NODE["+this.a+"]"}},
cv:{"^":"b1;d,e,f,a,b,c"},
ib:{"^":"b1;d,e,f,r,x,y,z,Q,a,b,c",
b_:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
H.u(a,"$isa",[G.bq],"$asa")
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.cc(v.a,36160,z)
J.fE(v.a,this.x,this.y,x,w)
if(y!==0)J.f5(v.a,y)
for(z=this.f,y=z.length,x=P.d,w=P.b,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
s=t.e
C.a.j(s,new G.aJ(P.S(x,w),"transforms",!1,!0))
r=new T.Q(new Float32Array(16))
r.G()
for(v=t.f,q=v.length,p=t.d,o=0;o<v.length;v.length===q||(0,H.F)(v),++o)A.en(p,v[o],r,a,s)
if(0>=s.length)return H.k(s,-1)
s.pop()}},
p:{
dF:function(a,b,c){var z=new A.ib(c,b,H.h([],[A.cv]),17664,0,0,0,0,a,!1,!0)
if(c==null)z.d=new G.dp(b,null,null,null,null)
return z}}}}],["","",,V,{}],["","",,B,{"^":"",
fX:function(a5,a6,a7,a8,a9,b0,b1,b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
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
a0=H.h([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a],t)
z=new T.q(new Float32Array(2))
z.t(a7,a9)
y=new T.q(new Float32Array(2))
y.t(a6,a9)
x=new T.q(new Float32Array(2))
x.t(a6,a8)
w=new T.q(new Float32Array(2))
w.t(a7,a8)
v=new T.q(new Float32Array(2))
v.t(a6,a9)
u=new T.q(new Float32Array(2))
u.t(a6,a8)
s=new T.q(new Float32Array(2))
s.t(a7,a8)
r=new T.q(new Float32Array(2))
r.t(a7,a9)
q=new T.q(new Float32Array(2))
q.t(a7,a8)
p=new T.q(new Float32Array(2))
p.t(a7,a9)
o=new T.q(new Float32Array(2))
o.t(a6,a9)
n=new T.q(new Float32Array(2))
n.t(a6,a8)
m=new T.q(new Float32Array(2))
m.t(a6,a8)
l=new T.q(new Float32Array(2))
l.t(a7,a8)
k=new T.q(new Float32Array(2))
k.t(a7,a9)
j=new T.q(new Float32Array(2))
j.t(a6,a9)
i=new T.q(new Float32Array(2))
i.t(a6,a9)
h=new T.q(new Float32Array(2))
h.t(a6,a8)
g=new T.q(new Float32Array(2))
g.t(a7,a8)
f=new T.q(new Float32Array(2))
f.t(a7,a9)
e=new T.q(new Float32Array(2))
e.t(a7,a9)
d=new T.q(new Float32Array(2))
d.t(a6,a9)
c=new T.q(new Float32Array(2))
c.t(a6,a8)
b=new T.q(new Float32Array(2))
b.t(a7,a8)
a1=H.h([z,y,x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b],[T.q])
a2=new G.bs(!1,H.h([],[G.V]),H.h([],[G.ai]),H.h([],t),P.S(P.d,[P.a,,]))
a2.N("aTexUV")
a2.N("aNormal")
a2.cC(6)
a2.ad(a0)
a2.ab("aTexUV",a1)
for(a3=0;z=$.eR(),a3<6;++a3){a4=z[a3]
a2.ac("aNormal",H.h([a4,a4,a4,a4],t))}return a2},
fZ:function(a,b,c,a0,a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=c/2
y=[T.c]
x=H.h([],y)
w=H.h([],[T.q])
v=H.h([],y)
u=new T.c(new Float32Array(3))
u.q(0,z,0)
C.a.j(x,u)
u=new T.q(new Float32Array(2))
u.t(0,0)
C.a.j(w,u)
u=new T.c(new Float32Array(3))
u.q(0,1,0)
C.a.j(v,u)
u=-z
t=new T.c(new Float32Array(3))
t.q(0,u,0)
C.a.j(x,t)
t=new T.q(new Float32Array(2))
t.t(1,1)
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
C.a.j(w,new T.q(t))
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
C.a.j(w,new T.q(t))
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
G.hT(m,l,k,new T.c(t),j)
C.a.j(v,j)
C.a.j(v,j)}u=H.h([],[G.V])
t=H.h([],[G.ai])
i=new G.bs(!1,u,t,H.h([],y),P.S(P.d,[P.a,,]))
i.N("aTexUV")
i.ad(x)
i.ab("aTexUV",w)
i.N("aNormal")
i.ac("aNormal",v)
for(h=a0*2,s=0;s<a0;s=f){g=s*2+2
l=g+1
f=s+1
e=(f===a0?0:f)*2+2
d=e+1
C.a.j(u,new G.V(0,g,e))
C.a.j(u,new G.V(1,d,l))
C.a.j(t,new G.ai(h+e,h+g,h+l,h+d))}return i},
hi:function(a1,a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=[G.V]
y=H.h([],z)
x=[T.c]
w=H.h([],x)
C.a.I(y,$.eF())
C.a.I(w,$.eG())
for(v=0;v<a3;++v,y=u){u=H.h([],z)
for(t=y.length,s=0;s<y.length;y.length===t||(0,H.F)(y),++s){r=y[s]
q=J.cW(r)
if(q>=w.length)return H.k(w,q)
q=w[q]
p=new T.c(new Float32Array(3))
p.w(q)
q=r.ga5(r)
if(q>=w.length)return H.k(w,q)
p.j(0,w[q])
p.T(0,0.5)
p.C(0)
q=r.ga5(r)
if(q>=w.length)return H.k(w,q)
q=w[q]
o=new T.c(new Float32Array(3))
o.w(q)
q=r.ga6(r)
if(q>=w.length)return H.k(w,q)
o.j(0,w[q])
o.T(0,0.5)
o.C(0)
q=r.ga6(r)
if(q>=w.length)return H.k(w,q)
q=w[q]
n=new T.c(new Float32Array(3))
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
C.a.j(u,new G.V(m,l,k))}}z=H.h([],z)
t=H.h([],[G.ai])
q=H.h([],x)
j=new G.bs(!1,z,t,q,P.S(P.d,[P.a,,]))
j.N("aTexUV")
j.N("aNormal")
for(t=y.length,i=[T.q],s=0;s<y.length;y.length===t||(0,H.F)(y),++s){r=y[s]
h=J.cW(r)
if(h>=w.length)return H.k(w,h)
g=w[h]
h=r.ga5(r)
if(h>=w.length)return H.k(w,h)
f=w[h]
h=r.ga6(r)
if(h>=w.length)return H.k(w,h)
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
j.ac("aNormal",H.h([g,f,e],x))
h=new T.c(new Float32Array(3))
h.w(g)
h.T(0,a2)
d=new T.c(new Float32Array(3))
d.w(f)
d.T(0,a2)
a0=new T.c(new Float32Array(3))
a0.w(e)
a0.T(0,a2)
a0=H.u(H.h([h,d,a0],x),"$isa",x,"$asa")
v=q.length
C.a.j(z,new G.V(v,v+1,v+2))
j.ad(a0)
j.ab("aTexUV",H.h([new T.q(c),new T.q(b),new T.q(a)],i))}return j},
iB:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=B.hW(new B.iC(e,d,f,c),0,6.283185307179586,g,0.001,!0)
y=z.length
if(0>=y)return H.k(z,0)
C.a.j(z,z[0])
if(1>=z.length)return H.k(z,1)
C.a.j(z,z[1])
x=g+1
w=B.iD(z,h,i)
for(y=w.length,v=0;v<w.length;w.length===y||(0,H.F)(w),++v){u=w[v]
if(0>=u.length)return H.k(u,0)
C.a.j(u,u[0])
if(1>=u.length)return H.k(u,1)
C.a.j(u,u[1])}t=h+1
y=H.h([],[G.V])
s=H.h([],[G.ai])
r=[T.c]
q=H.h([],r)
p=new G.bs(!1,y,s,q,P.S(P.d,[P.a,,]))
for(y=w.length,v=0;v<w.length;w.length===y||(0,H.F)(w),++v){o=w[v]
for(n=0;n<o.length;n+=2){s=H.i(o[n],"$isc")
s.toString
m=new T.c(new Float32Array(3))
m.w(s)
C.a.j(q,m)}}p.cG(t,x,!1)
p.cH(t,x)
p.N("aNormal")
for(y=w.length,s=p.e,v=0;v<w.length;w.length===y||(0,H.F)(w),++v){o=w[v]
for(n=0;q=o.length,n<q;n+=2){m=n+1
if(m>=q)return H.k(o,m)
m=H.i(o[m],"$isc")
l=H.u(s.h(0,"aNormal"),"$isa",r,"$asa")
m.toString
q=new T.c(new Float32Array(3))
q.w(m);(l&&C.a).j(l,q)}}return p},
iD:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=[T.c]
H.u(a,"$isa",z,"$asa")
y=H.h([],[[P.a,T.c]])
x=new Float32Array(3)
w=new T.c(x)
v=new Float32Array(3)
u=new T.c(v)
t=new Float32Array(3)
s=new T.c(t)
for(r=0;q=a.length,r<q;r+=2){p=a[r]
o=r+1
if(o>=q)return H.k(a,o)
n=a[o]
m=H.h([],z)
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
w.w(p)
w.ai(u,g)
w.ai(s,f)
q=new T.c(new Float32Array(3))
q.w(w)
C.a.j(m,q)
x[2]=0
x[1]=0
x[0]=0
w.ai(u,g)
w.ai(s,f)
w.C(0)
q=new T.c(new Float32Array(3))
q.w(w)
C.a.j(m,q)}}return y},
hW:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
H.n(a,{func:1,ret:-1,args:[P.a3,T.c]})
z=H.h([],[T.c])
y=new T.c(new Float32Array(3))
x=new T.c(new Float32Array(3))
for(w=(c-b)/(d-0),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+e,x)
x.aa(0,y)
t=new T.c(new Float32Array(3))
t.w(y)
C.a.j(z,t)
t=new T.c(new Float32Array(3))
t.w(x)
C.a.j(z,t)}return z},
iC:{"^":"o:24;a,b,c,d",
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
b.sV(0,y*u)
b.sal(0,this.d*z*0.5*w)}}}],["","",,D,{"^":"",hr:{"^":"b;a,b,c",
cI:function(a){var z,y
a=document
z=W.b_
y={func:1,ret:-1,args:[z]}
W.aL(a,"keydown",H.n(new D.ht(this),y),!1,z)
W.aL(a,"keyup",H.n(new D.hu(this),y),!1,z)},
p:{
hs:function(a){var z=P.D
z=new D.hr(P.a4(null,null,null,z),P.a4(null,null,null,z),P.a4(null,null,null,z))
z.cI(a)
return z}}},ht:{"^":"o:11;a",
$1:function(a){var z
H.i(a,"$isb_")
z=this.a
z.a.j(0,a.which)
z.b.j(0,a.which)}},hu:{"^":"o:11;a",
$1:function(a){var z
H.i(a,"$isb_")
z=this.a
z.a.bZ(0,a.which)
z.c.j(0,a.which)}},hH:{"^":"b;a,b,c,d,e,f,r,x",
cJ:function(a){var z,y,x
if(a==null)a=document
z=J.l(a)
y=z.gbV(a)
x=H.r(y,0)
W.aL(y.a,y.b,H.n(new D.hJ(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbU(a)
y=H.r(x,0)
W.aL(x.a,x.b,H.n(new D.hK(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbW(a)
x=H.r(y,0)
W.aL(y.a,y.b,H.n(new D.hL(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbX(a)
x=H.r(z,0)
W.aL(z.a,z.b,H.n(new D.hM(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
hI:function(a){var z=P.D
z=new D.hH(P.a4(null,null,null,z),P.a4(null,null,null,z),P.a4(null,null,null,z),0,0,0,0,0)
z.cJ(a)
return z}}},hJ:{"^":"o:3;a",
$1:function(a){var z,y
H.i(a,"$isX")
a.preventDefault()
z=this.a
y=J.l(a)
z.r=H.P(y.gbT(a).a)
z.x=H.P(y.gbT(a).b)
z.d=a.movementX
z.e=a.movementY}},hK:{"^":"o:3;a",
$1:function(a){var z
H.i(a,"$isX")
a.preventDefault()
P.aR("BUTTON "+H.f(a.button))
z=this.a
z.a.j(0,a.button)
z.b.j(0,a.button)}},hL:{"^":"o:3;a",
$1:function(a){var z
H.i(a,"$isX")
a.preventDefault()
z=this.a
z.a.bZ(0,a.button)
z.c.j(0,a.button)}},hM:{"^":"o:25;a",
$1:function(a){H.i(a,"$isaK")
a.preventDefault()
this.a.f=H.P(C.ab.gdA(a))}},hV:{"^":"dI;ch,cx,cy,db,dx,dy,fr,fx,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bF:function(a){var z,y
z=C.f.dE(H.u(a,"$ism",[P.b],"$asm"),0,new A.kG(),P.D)
if(typeof z!=="number")return H.aD(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kG:{"^":"o:26;",
$2:function(a,b){var z,y
H.P(a)
z=J.al(b)
if(typeof a!=="number")return a.L()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",ar:{"^":"b;a",
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
k:function(a){return"[0] "+this.R(0).k(0)+"\n[1] "+this.R(1).k(0)+"\n[2] "+this.R(2).k(0)+"\n"},
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
gB:function(a){return A.bF(this.a)},
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
dt:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
return m}},Q:{"^":"b;a",
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
k:function(a){return"[0] "+this.R(0).k(0)+"\n[1] "+this.R(1).k(0)+"\n[2] "+this.R(2).k(0)+"\n[3] "+this.R(3).k(0)+"\n"},
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
gB:function(a){return A.bF(this.a)},
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
return new T.b9(z)},
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
bS:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},q:{"^":"b;a",
t:function(a,b){var z=this.a
z[0]=a
z[1]=b},
k:function(a){var z=this.a
return"["+H.f(z[0])+","+H.f(z[1])+"]"},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.q){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gB:function(a){return A.bF(this.a)},
h:function(a,b){var z=this.a
if(b>=2)return H.k(z,b)
return z[b]},
gl:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
ga0:function(a){return this.a[0]},
gV:function(a){return this.a[1]}},c:{"^":"b;a",
q:function(a,b,c){var z=this.a
C.f.i(z,0,a)
C.f.i(z,1,b)
C.f.i(z,2,c)},
w:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.f(z[0])+","+H.f(z[1])+","+H.f(z[2])+"]"},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.c){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gB:function(a){return A.bF(this.a)},
h:function(a,b){var z=this.a
if(b>=3)return H.k(z,b)
return z[b]},
gl:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gaI:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
C:function(a){var z,y,x
z=Math.sqrt(this.gaI())
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
bI:function(a){var z,y,x,w,v,u,t,s
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
z=H.i(b,"$isc").a
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
aa:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
T:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
sa0:function(a,b){this.a[0]=b
return b},
sV:function(a,b){this.a[1]=b
return b},
sal:function(a,b){this.a[2]=b
return b},
ga0:function(a){return this.a[0]},
gV:function(a){return this.a[1]},
gal:function(a){return this.a[2]},
p:{
M:function(a,b,c){var z=new T.c(new Float32Array(3))
z.q(a,b,c)
return z}}},b9:{"^":"b;a",
k:function(a){var z=this.a
return H.f(z[0])+","+H.f(z[1])+","+H.f(z[2])+","+H.f(z[3])},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.b9){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gB:function(a){return A.bF(this.a)},
h:function(a,b){var z=this.a
if(b>=4)return H.k(z,b)
return z[b]},
gl:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
ga0:function(a){return this.a[0]},
gV:function(a){return this.a[1]},
gal:function(a){return this.a[2]},
gdV:function(a){return this.a[3]}}}],["","",,V,{"^":"",
hz:function(a,b,c,d){var z,y,x,w,v,u,t,s
if(typeof b!=="number")return b.an()
if(typeof c!=="number")return H.aD(c)
z=new Uint32Array(b*c)
for(y=z.length,x=2*d,w=0;w<b;++w)for(v=w%x<d,u=0;u<c;++u){t=u*b+w
s=v?0:1
if(t<0||t>=y)return H.k(z,t)
z[t]=s}y=$.cN()
x=J.cU(a.a)
J.aT(a.a,3553,x)
J.ft(a.a,3553,0,35056,b,c,0,34041,34042,z)
y.b3(a,3553)
J.cY(a.a)
J.aT(a.a,3553,null)
return new G.iI(b,c,35056,"frame::depth.stencil",x,3553,a,y)},
eu:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
z={}
y=document
x=C.m.cm(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.ir(0,0,x,w,y.createElement("div"),R.jw("blue","gray",90,30))
u.cM(x,"blue","gray")
t=H.i(C.m.bY(y,"#webgl-canvas"),"$iscl")
s=new G.fN(t)
y=P.d
x=P.b
v=(t&&C.H).cl(t,"webgl2",P.dw(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],y,x))
s.a=v
if(v==null)H.Z(P.dl('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
r="ChronosGL Config: "+H.f(J.fo(v))
if($.eo>0)P.aR("I: "+r)
J.f6(v,0,0,0,1)
J.bm(v,2929)
J.bm(v,2884)
r=new Float32Array(3)
q=D.hs(null)
p=D.hI(t)
o=new T.Q(new Float32Array(16))
o.G()
n=new Float32Array(3)
m=new Float32Array(3)
l=new Float32Array(3)
k=new D.hV(25,10,0,0,new T.c(r),-0.02,q,p,o,new T.c(n),new T.c(m),new T.c(l),new T.c(new Float32Array(3)),"camera:orbit",!1,!0)
r=new T.Q(new Float32Array(16))
r.G()
q=new T.Q(new Float32Array(16))
q.G()
j=new G.hY(k,50,1,0.1,1000,r,q,new T.Q(new Float32Array(16)),P.S(y,x),"perspective",!1,!0)
j.b4()
i=t.clientWidth
h=t.clientHeight
t.width=i
t.height=h
j.cD(i,h)
r=$.cN()
q=J.cU(v)
g=new G.iH(i,h,32856,"frame::color",q,3553,s,r)
J.aT(v,3553,q)
J.fv(s.a,3553,1,32856,i,h)
r.b3(s,3553)
J.cY(s.a)
J.aT(s.a,3553,null)
f=V.hz(s,i,h,8)
e=new G.dp(s,null,g,f,null)
r=J.f8(s.a)
e.b=r
J.cc(s.a,36160,r)
J.cV(s.a,36160,36064,3553,q,0)
J.cV(s.a,36160,33306,3553,f.b,0)
d=J.f4(s.a,36160)
if(d!==36053)H.Z("Error Incomplete Framebuffer: "+H.f(d))
J.cc(s.a,36160,null)
c=A.dF("main",s,e)
c.z=i
c.Q=h
c.r&=4294966271
v=G.dG("solid",s,$.eY(),$.eX())
r=[G.aJ]
q=H.h([j],r)
p=[A.b2]
o=H.h([],p)
C.a.j(c.f,new A.cv(v,q,o,"solid",!1,!0))
b=G.ct("red")
q=b.d
q.i(0,"uColor",$.eB())
q.i(0,"cStencilFunc",$.ca())
a=new G.cz(514,1,255)
a0=G.ct("blue")
q=a0.d
q.i(0,"uColor",$.eA())
q.i(0,"cStencilFunc",a)
q=G.bt("icosahedron-3",v,B.hi(!0,1,3))
n=H.h([],p)
m=new Float32Array(9)
l=new T.Q(new Float32Array(16))
l.G()
a1=new T.Q(new Float32Array(16))
a1.G()
a2=new Float32Array(3)
a3=new Float32Array(3)
a4=new Float32Array(3)
q=new A.b2(b,q,n,new T.ar(m),l,a1,new T.c(a2),new T.c(a3),new T.c(a4),new T.c(new Float32Array(3)),"sphere",!1,!0)
q.a2(0,0,0)
C.a.j(o,q)
q=G.bt("cube",v,B.fX(!0,1,0,1,0,1,1,1))
n=H.h([],p)
m=new Float32Array(9)
l=new T.Q(new Float32Array(16))
l.G()
a1=new T.Q(new Float32Array(16))
a1.G()
a2=new Float32Array(3)
a3=new Float32Array(3)
a4=new Float32Array(3)
q=new A.b2(a0,q,n,new T.ar(m),l,a1,new T.c(a2),new T.c(a3),new T.c(a4),new T.c(new Float32Array(3)),"cube",!1,!0)
q.a2(-5,0,-5)
C.a.j(o,q)
q=G.bt("cylinder-32",v,B.fZ(1,3,2,32,!0))
n=H.h([],p)
m=new Float32Array(9)
l=new T.Q(new Float32Array(16))
l.G()
a1=new T.Q(new Float32Array(16))
a1.G()
a2=new Float32Array(3)
a3=new Float32Array(3)
a4=new Float32Array(3)
q=new A.b2(b,q,n,new T.ar(m),l,a1,new T.c(a2),new T.c(a3),new T.c(a4),new T.c(new Float32Array(3)),"cylinder",!1,!0)
q.a2(5,0,-5)
C.a.j(o,q)
v=G.bt("torusknot",v,B.iB(!0,!0,1,2,3,1,128,16,0.4,!1))
q=H.h([],p)
n=new Float32Array(9)
m=new T.Q(new Float32Array(16))
m.G()
l=new T.Q(new Float32Array(16))
l.G()
a1=new Float32Array(3)
a2=new Float32Array(3)
a3=new Float32Array(3)
v=new A.b2(a0,v,q,new T.ar(n),m,l,new T.c(a1),new T.c(a2),new T.c(a3),new T.c(new Float32Array(3)),"torus",!1,!0)
v.a2(5,0,5)
C.a.j(o,v)
a5=A.dF("copy",s,null)
a5.z=i
a5.Q=h
x=P.S(y,x)
if(typeof i!=="number")return H.aD(i)
if(typeof h!=="number")return H.aD(h)
v=new T.q(new Float32Array(2))
v.t(i,h)
x.i(0,"uCanvasSize",v)
x.i(0,"uTexture",g)
v=G.dG("postproc",s,$.eU(),$.eT())
r=H.h([new G.aJ(x,"plain",!1,!0)],r)
x=H.h([],p)
C.a.j(a5.f,new A.cv(v,r,x,"postproc",!1,!0))
r=new T.c(new Float32Array(3))
r.q(-1,-1,0)
q=new T.c(new Float32Array(3))
q.q(1,-1,0)
o=new T.c(new Float32Array(3))
o.q(1,1,0)
n=new T.c(new Float32Array(3))
n.q(-1,1,0)
m=[T.c]
a6=H.h([r,q,o,n],m)
r=new T.q(new Float32Array(2))
r.t(0,0)
q=new T.q(new Float32Array(2))
q.t(1,0)
o=new T.q(new Float32Array(2))
o.t(1,1)
n=new T.q(new Float32Array(2))
n.t(0,1)
a7=H.h([r,q,o,n],[T.q])
a8=new T.c(new Float32Array(3))
a8.q(0,0,1)
a9=H.h([a8,a8,a8,a8],m)
r=H.h([],[G.V])
q=H.h([],[G.ai])
o=H.h([],m)
b0=new G.bs(!1,r,q,o,P.S(y,[P.a,,]))
b0.N("aTexUV")
H.u(a6,"$isa",m,"$asa")
b1=o.length
C.a.j(q,new G.ai(b1,b1+1,b1+2,b1+3))
b0.ad(a6)
b0.ab("aTexUV",a7)
b0.N("aNormal")
b0.ac("aNormal",a9)
b2=G.bt("quad",v,b0)
v=$.eE()
p=H.h([],p)
y=new Float32Array(9)
r=new T.Q(new Float32Array(16))
r.G()
q=new T.Q(new Float32Array(16))
q.G()
o=new Float32Array(3)
n=new Float32Array(3)
m=new Float32Array(3)
C.a.j(x,new A.b2(v,b2,p,new T.ar(y),r,q,new T.c(o),new T.c(n),new T.c(m),new T.c(new Float32Array(3)),"unit-mesh",!1,!0))
z.a=0
new V.kT(z,k,a0,a,c,a5,u).$1(0)},
kT:{"^":"o:27;a,b,c,d,e,f,r",
$1:function(b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
H.cK(b2)
if(typeof b2!=="number")return b2.aX()
z=this.a
z.a=b2+0
y=this.b
y.cx+=0.001
x=y.fx
w=x.a
if(w.A(0,0)||w.A(0,1)){w=y.cx
v=x.d
if(typeof v!=="number")return v.an()
y.cx=w+v*0.01
v=y.cy
w=x.e
if(typeof w!=="number")return w.an()
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
if(typeof v!=="number")return v.an()
v=y.ch-v*y.dy
if(v>0)y.ch=v
v=C.r.dr(y.cy,-1.4707963267948965,1.4707963267948965)
y.cy=v
u=y.ch
t=y.cx
s=u*Math.cos(v)
y.a2(s*Math.cos(t),u*Math.sin(v),s*Math.sin(t))
t=y.dx
v=y.d.a
u=t.a
v[12]=v[12]+u[0]
v[13]=v[13]+u[1]
v[14]=v[14]+u[2]
r=new T.c(new Float32Array(3))
r.q(0,1,0)
u=y.aM()
q=new Float32Array(3)
p=new T.c(q)
p.w(u)
p.aa(0,t)
p.C(0)
o=r.bI(p)
o.C(0)
n=p.bI(o)
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
d=Math.sqrt(k.gaI())
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
y=$.eW().checked?this.d:$.ca()
this.c.d.i(0,"cStencilFunc",y)
a9=H.h([],[G.bq])
this.e.b_(a9)
this.f.b_(a9)
b0=H.h([],[P.d])
for(y=a9.length,b1=0;b1<a9.length;a9.length===y||(0,H.F)(a9),++b1)C.a.j(b0,a9[b1].k(0))
C.ac.gdi(window).c3(this,-1)
this.r.cO(z.a,C.a.a_(b0,"<br>"))}}},1]]
setupProgram(dart,0,0)
J.B=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dt.prototype
return J.ds.prototype}if(typeof a=="string")return J.bx.prototype
if(a==null)return J.hp.prototype
if(typeof a=="boolean")return J.ho.prototype
if(a.constructor==Array)return J.bv.prototype
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
return a}if(a instanceof P.b)return a
return J.c6(a)}
J.bh=function(a){if(typeof a=="string")return J.bx.prototype
if(a==null)return a
if(a.constructor==Array)return J.bv.prototype
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
return a}if(a instanceof P.b)return a
return J.c6(a)}
J.ep=function(a){if(a==null)return a
if(a.constructor==Array)return J.bv.prototype
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
return a}if(a instanceof P.b)return a
return J.c6(a)}
J.kC=function(a){if(typeof a=="number")return J.bw.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b8.prototype
return a}
J.kD=function(a){if(typeof a=="number")return J.bw.prototype
if(typeof a=="string")return J.bx.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b8.prototype
return a}
J.eq=function(a){if(typeof a=="string")return J.bx.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b8.prototype
return a}
J.l=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
return a}if(a instanceof P.b)return a
return J.c6(a)}
J.bE=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.b8.prototype
return a}
J.aF=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.B(a).F(a,b)}
J.aa=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kC(a).W(a,b)}
J.bl=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kQ(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bh(a).h(a,b)}
J.cQ=function(a,b){return J.eq(a).at(a,b)}
J.bJ=function(a,b){return J.l(a).d5(a,b)}
J.f_=function(a,b,c){return J.l(a).d6(a,b,c)}
J.cR=function(a,b){return J.l(a).bp(a,b)}
J.f0=function(a,b,c,d){return J.l(a).df(a,b,c,d)}
J.cS=function(a,b,c){return J.l(a).br(a,b,c)}
J.f1=function(a,b){return J.l(a).dk(a,b)}
J.cb=function(a,b,c){return J.l(a).bs(a,b,c)}
J.cc=function(a,b,c){return J.l(a).bu(a,b,c)}
J.aT=function(a,b,c){return J.l(a).bv(a,b,c)}
J.bK=function(a,b){return J.l(a).dn(a,b)}
J.f2=function(a,b){return J.l(a).bw(a,b)}
J.f3=function(a,b,c){return J.l(a).bx(a,b,c)}
J.cT=function(a,b,c,d){return J.l(a).by(a,b,c,d)}
J.f4=function(a,b){return J.l(a).bz(a,b)}
J.f5=function(a,b){return J.l(a).bA(a,b)}
J.f6=function(a,b,c,d,e){return J.l(a).bB(a,b,c,d,e)}
J.f7=function(a,b){return J.kD(a).O(a,b)}
J.cd=function(a,b,c){return J.bh(a).ds(a,b,c)}
J.ce=function(a){return J.l(a).bD(a)}
J.f8=function(a){return J.l(a).bE(a)}
J.f9=function(a){return J.l(a).bF(a)}
J.cU=function(a){return J.l(a).bH(a)}
J.fa=function(a){return J.l(a).dz(a)}
J.fb=function(a,b){return J.l(a).bJ(a,b)}
J.cf=function(a,b){return J.l(a).bK(a,b)}
J.fc=function(a,b,c,d){return J.l(a).bL(a,b,c,d)}
J.fd=function(a,b,c,d,e){return J.l(a).dB(a,b,c,d,e)}
J.fe=function(a,b,c,d,e){return J.l(a).bM(a,b,c,d,e)}
J.ff=function(a,b,c,d,e,f){return J.l(a).dC(a,b,c,d,e,f)}
J.fg=function(a,b){return J.ep(a).u(a,b)}
J.bm=function(a,b){return J.l(a).bN(a,b)}
J.fh=function(a,b){return J.l(a).bO(a,b)}
J.fi=function(a){return J.l(a).dD(a)}
J.fj=function(a,b){return J.l(a).H(a,b)}
J.cV=function(a,b,c,d,e,f){return J.l(a).bQ(a,b,c,d,e,f)}
J.cW=function(a){return J.bE(a).gah(a)}
J.fk=function(a){return J.l(a).gdj(a)}
J.al=function(a){return J.B(a).gB(a)}
J.bL=function(a){return J.ep(a).gD(a)}
J.aU=function(a){return J.bh(a).gl(a)}
J.fl=function(a){return J.l(a).gdK(a)}
J.fm=function(a){return J.l(a).gdP(a)}
J.fn=function(a){return J.bE(a).gdV(a)}
J.bM=function(a){return J.bE(a).ga0(a)}
J.cg=function(a){return J.bE(a).gV(a)}
J.cX=function(a){return J.bE(a).gal(a)}
J.ch=function(a,b){return J.l(a).a1(a,b)}
J.fo=function(a){return J.l(a).am(a)}
J.cY=function(a){return J.l(a).aL(a)}
J.fp=function(a,b){return J.l(a).aN(a,b)}
J.fq=function(a,b,c){return J.l(a).aO(a,b,c)}
J.cZ=function(a,b,c){return J.l(a).aS(a,b,c)}
J.fr=function(a,b){return J.l(a).bR(a,b)}
J.d_=function(a){return J.l(a).dL(a)}
J.fs=function(a,b,c,d){return J.l(a).aW(a,b,c,d)}
J.ft=function(a,b,c,d,e,f,g,h,i,j){return J.l(a).c0(a,b,c,d,e,f,g,h,i,j)}
J.fu=function(a,b,c,d){return J.l(a).c1(a,b,c,d)}
J.bN=function(a,b,c,d){return J.l(a).c2(a,b,c,d)}
J.fv=function(a,b,c,d,e,f){return J.l(a).dQ(a,b,c,d,e,f)}
J.fw=function(a){return J.eq(a).dR(a)}
J.bn=function(a){return J.B(a).k(a)}
J.fx=function(a,b,c,d){return J.l(a).dT(a,b,c,d)}
J.fy=function(a,b,c){return J.l(a).c6(a,b,c)}
J.fz=function(a,b,c){return J.l(a).c7(a,b,c)}
J.ci=function(a,b,c){return J.l(a).c8(a,b,c)}
J.fA=function(a,b,c){return J.l(a).c9(a,b,c)}
J.d0=function(a,b,c){return J.l(a).ca(a,b,c)}
J.d1=function(a,b,c){return J.l(a).cb(a,b,c)}
J.d2=function(a,b,c){return J.l(a).cc(a,b,c)}
J.d3=function(a,b,c,d){return J.l(a).cd(a,b,c,d)}
J.d4=function(a,b,c,d){return J.l(a).ce(a,b,c,d)}
J.fB=function(a,b){return J.l(a).cf(a,b)}
J.fC=function(a,b,c){return J.l(a).dU(a,b,c)}
J.fD=function(a,b,c,d,e,f,g){return J.l(a).cg(a,b,c,d,e,f,g)}
J.fE=function(a,b,c,d,e){return J.l(a).cj(a,b,c,d,e)}
I.aQ=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.bO.prototype
C.H=W.cl.prototype
C.w=W.fU.prototype
C.q=W.h2.prototype
C.I=W.h4.prototype
C.J=W.hg.prototype
C.m=W.hh.prototype
C.K=J.j.prototype
C.a=J.bv.prototype
C.x=J.ds.prototype
C.d=J.dt.prototype
C.r=J.bw.prototype
C.i=J.bx.prototype
C.R=J.by.prototype
C.f=H.hN.prototype
C.n=H.hP.prototype
C.V=W.hQ.prototype
C.A=J.hZ.prototype
C.B=W.i8.prototype
C.G=W.ix.prototype
C.v=J.b8.prototype
C.ab=W.aK.prototype
C.ac=W.iP.prototype
C.e=new P.jI()
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
C.S=H.h(I.aQ(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.T=H.h(I.aQ(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.U=H.h(I.aQ([]),[P.d])
C.t=H.h(I.aQ(["bind","if","ref","repeat","syntax"]),[P.d])
C.u=H.h(I.aQ(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
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
$.ab=0
$.aV=null
$.d7=null
$.cB=!1
$.es=null
$.ej=null
$.ex=null
$.c4=null
$.c7=null
$.cI=null
$.aN=null
$.bb=null
$.bc=null
$.cC=!1
$.J=C.e
$.ah=null
$.cn=null
$.dj=null
$.di=null
$.de=null
$.dd=null
$.dc=null
$.db=null
$.eo=0
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
I.$lazy(y,x,w)}})(["lf","eD",function(){return H.er("_$dart_dartClosure")},"lU","cM",function(){return H.er("_$dart_js")},"mF","eH",function(){return H.ad(H.bX({
toString:function(){return"$receiver$"}}))},"mG","eI",function(){return H.ad(H.bX({$method$:null,
toString:function(){return"$receiver$"}}))},"mH","eJ",function(){return H.ad(H.bX(null))},"mI","eK",function(){return H.ad(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"mL","eN",function(){return H.ad(H.bX(void 0))},"mM","eO",function(){return H.ad(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"mK","eM",function(){return H.ad(H.dO(null))},"mJ","eL",function(){return H.ad(function(){try{null.$method$}catch(z){return z.message}}())},"mO","eQ",function(){return H.ad(H.dO(void 0))},"mN","eP",function(){return H.ad(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mY","cO",function(){return P.iS()},"ne","bk",function(){return[]},"lc","eC",function(){return{}},"n5","eS",function(){return P.cs(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"n6","cP",function(){return P.S(P.d,P.br)},"mr","ca",function(){return G.iA(1281,0,4294967295)},"l6","ez",function(){return new G.dN(1281,1281,1281)},"nc","a9",function(){return P.dw(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.E,"aColorAlpha",C.Z,"aPosition",C.C,"aTexUV",C.a5,"aNormal",C.a8,"aBinormal",C.Y,"aCenter",C.D,"aPointSize",C.b,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.aa,"aBitangent",C.W,"iaRotation",C.l,"iaTranslation",C.c,"iaScale",C.b,"iaColor",C.c,"vColor",C.E,"vTexUV",C.k,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.C,"vPositionFromLight",C.X,"vCenter",C.D,"vDepth",C.a3,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.F,"uConvolutionMatrix",C.F,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a9,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a7,"uAnimationTable",C.h,"uTime",C.a6,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.c,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a0,"uLightDescs",C.a1,"uLightCount",C.b,"uLightTypes",C.a2,"uBumpScale",C.a4,"uNormalScale",C.a_],P.d,G.C)},"mA","cN",function(){var z=new G.iz(!1,!1,!1,!0,1,9729,9729)
z.d=!1
z.b=!0
z.f=9728
z.r=9728
return z},"lm","eE",function(){return G.ct("empty-mat")},"l9","eA",function(){return T.M(0,0,1)},"la","eB",function(){return T.M(1,0,0)},"nj","eV",function(){var z,y
z=G.bV("null")
y=[P.d]
z.aY(H.h(["aPosition"],y))
z.b=z.b5(!1,H.u(H.h(["void main() {\n  gl_Position = vec4(aPosition, 1.0);\n}\n"],y),"$isa",y,"$asa"),null)
return z},"nh","eU",function(){return $.eV()},"ng","eT",function(){var z,y
z=G.bV("copyF")
y=[P.d]
z.ap(H.h(["uTexture"],y))
z.aq(H.h(["oFragColor = texelFetch(uTexture, ivec2(gl_FragCoord.xy), 0);"],y))
return z},"nn","eY",function(){var z,y
z=G.bV("SolidColor")
y=[P.d]
z.aY(H.h(["aPosition"],y))
z.ap(H.h(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.aq(H.h(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"],y))
return z},"nm","eX",function(){var z,y
z=G.bV("SolidColorF")
y=[P.d]
z.ap(H.h(["uColor"],y))
z.aq(H.h(["oFragColor = vec4( uColor, 1.0 );"],y))
return z},"n2","eR",function(){return H.h([T.M(0,0,1),T.M(0,0,-1),T.M(0,1,0),T.M(0,-1,0),T.M(1,0,0),T.M(-1,0,0)],[T.c])},"lL","eF",function(){return H.h([G.K(0,11,5),G.K(0,5,1),G.K(0,1,7),G.K(0,7,10),G.K(0,10,11),G.K(1,5,9),G.K(5,11,4),G.K(11,10,2),G.K(10,7,6),G.K(7,1,8),G.K(3,9,4),G.K(3,4,2),G.K(3,2,6),G.K(3,6,8),G.K(3,8,9),G.K(4,9,5),G.K(2,4,11),G.K(6,2,10),G.K(8,6,7),G.K(9,8,1)],[G.V])},"no","eZ",function(){return(1+P.kY(5))/2},"lM","eG",function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.eZ()
y=T.M(-1,z,0)
y.C(0)
x=T.M(1,z,0)
x.C(0)
if(typeof z!=="number")return z.dX()
w=T.M(-1,-z,0)
w.C(0)
v=T.M(1,-z,0)
v.C(0)
u=T.M(0,-1,z)
u.C(0)
t=T.M(0,1,z)
t.C(0)
s=T.M(0,-1,-z)
s.C(0)
r=T.M(0,1,-z)
r.C(0)
q=T.M(z,0,-1)
q.C(0)
p=T.M(z,0,1)
p.C(0)
o=T.M(-z,0,-1)
o.C(0)
z=T.M(-z,0,1)
z.C(0)
return H.h([y,x,w,v,u,t,s,r,q,p,o,z],[T.c])},"nk","eW",function(){return H.ag(C.m.bY(W.kz(),"#stencil"),"$isdq")}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.H},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:P.H,args:[W.X]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.H,args:[,]},{func:1,ret:P.H,args:[,,]},{func:1,ret:P.d,args:[P.D]},{func:1,ret:P.T,args:[W.ac]},{func:1,ret:P.T,args:[P.d]},{func:1,ret:P.H,args:[W.b_]},{func:1,ret:P.T,args:[W.U,P.d,P.d,W.bB]},{func:1,args:[,P.d]},{func:1,args:[P.d]},{func:1,ret:P.H,args:[{func:1,ret:-1}]},{func:1,ret:P.H,args:[,],opt:[P.a5]},{func:1,ret:[P.ae,,],args:[,]},{func:1,ret:P.T,args:[W.v]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.H,args:[P.E]},{func:1,args:[W.an]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.v,W.v]},{func:1,ret:-1,args:[P.a3,T.c]},{func:1,ret:P.H,args:[W.aK]},{func:1,ret:P.D,args:[P.D,P.b]},{func:1,ret:-1,args:[P.E]},{func:1,ret:P.D,args:[,,]}]
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
if(x==y)H.l_(d||a)
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
if(typeof dartMainRunner==="function")dartMainRunner(V.eu,[])
else V.eu([])})})()
//# sourceMappingURL=stencil.dart.js.map
