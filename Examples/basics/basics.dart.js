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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cJ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cJ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cJ(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bi=function(){}
var dart=[["","",,H,{"^":"",mc:{"^":"b;a"}}],["","",,J,{"^":"",
cN:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c9:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cM==null){H.l4()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.dT("Return interceptor for "+H.h(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cQ()]
if(v!=null)return v
v=H.l9(a)
if(v!=null)return v
if(typeof a=="function")return C.U
y=Object.getPrototypeOf(a)
if(y==null)return C.D
if(y===Object.prototype)return C.D
if(typeof w=="function"){Object.defineProperty(w,$.cQ(),{value:C.x,enumerable:false,writable:true,configurable:true})
return C.x}return C.x},
j:{"^":"b;",
G:function(a,b){return a===b},
gB:function(a){return H.b9(a)},
k:["cz",function(a){return"Instance of '"+H.ba(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hz:{"^":"j;",
k:function(a){return String(a)},
gB:function(a){return a?519018:218159},
$isW:1},
hA:{"^":"j;",
G:function(a,b){return null==b},
k:function(a){return"null"},
gB:function(a){return 0},
$isA:1},
cs:{"^":"j;",
gB:function(a){return 0},
k:["cB",function(a){return String(a)}]},
ic:{"^":"cs;"},
bc:{"^":"cs;"},
bC:{"^":"cs;",
k:function(a){var z=a[$.eJ()]
if(z==null)return this.cB(a)
return"JavaScript function for "+H.h(J.bq(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbv:1},
bz:{"^":"j;$ti",
j:function(a,b){H.z(b,H.p(a,0))
if(!!a.fixed$length)H.a8(P.B("add"))
a.push(b)},
I:function(a,b){var z,y
H.t(b,"$ism",[H.p(a,0)],"$asm")
if(!!a.fixed$length)H.a8(P.B("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.G)(b),++y)a.push(b[y])},
a3:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.h(z,y,H.h(a[y]))
return z.join(b)},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
gdV:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.cq())},
bx:function(a,b){var z,y
H.l(b,{func:1,ret:P.W,args:[H.p(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.d(P.aO(a))}return!1},
cs:function(a,b){if(!!a.immutable$list)H.a8(P.B("sort"))
H.iD(a,J.kG(),H.p(a,0))},
at:function(a){return this.cs(a,null)},
A:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aN(a[z],b))return!0
return!1},
k:function(a){return P.cp(a,"[","]")},
gD:function(a){return new J.fM(a,a.length,0,[H.p(a,0)])},
gB:function(a){return H.b9(a)},
gl:function(a){return a.length},
i:function(a,b){if(b>=a.length||b<0)throw H.d(H.bh(a,b))
return a[b]},
h:function(a,b,c){H.z(c,H.p(a,0))
if(!!a.immutable$list)H.a8(P.B("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bh(a,b))
a[b]=c},
$isx:1,
$asx:I.bi,
$ism:1,
$isa:1,
p:{
hy:function(a,b){return J.cr(H.f(a,[b]))},
cr:function(a){H.aY(a)
a.fixed$length=Array
return a},
ma:[function(a,b){return J.fc(H.ey(a,"$isa1"),H.ey(b,"$isa1"))},"$2","kG",8,0,32]}},
mb:{"^":"bz;$ti"},
fM:{"^":"b;a,b,c,0d,$ti",
sbc:function(a){this.d=H.z(a,H.p(this,0))},
gE:function(a){return this.d},
v:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.G(z))
x=this.c
if(x>=y){this.sbc(null)
return!1}this.sbc(z[x]);++this.c
return!0},
$isb3:1},
bA:{"^":"j;",
O:function(a,b){var z
H.cO(b)
if(typeof b!=="number")throw H.d(H.bg(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gaq(b)
if(this.gaq(a)===z)return 0
if(this.gaq(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaq:function(a){return a===0?1/a<0:a<0},
c7:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.d(P.B(""+a+".toInt()"))},
dC:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.d(P.B(""+a+".ceil()"))},
dD:function(a,b,c){if(this.O(b,c)>0)throw H.d(H.bg(b))
if(this.O(a,b)<0)return b
if(this.O(a,c)>0)return c
return a},
e7:function(a,b){var z
if(b>20)throw H.d(P.bY(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gaq(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gB:function(a){return a&0x1FFFFFFF},
cD:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bu(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.bu(a,b)},
bu:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.B("Result of truncating division is "+H.h(z)+": "+H.h(a)+" ~/ "+b))},
bs:function(a,b){var z
if(a>0)z=this.dl(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dl:function(a,b){return b>31?0:a>>>b},
Z:function(a,b){if(typeof b!=="number")throw H.d(H.bg(b))
return a>b},
$isa1:1,
$asa1:function(){return[P.H]},
$isa7:1,
$isH:1},
du:{"^":"bA;",$isF:1},
dt:{"^":"bA;"},
bB:{"^":"j;",
ay:function(a,b){if(b>=a.length)throw H.d(H.bh(a,b))
return a.charCodeAt(b)},
L:function(a,b){H.w(b)
if(typeof b!=="string")throw H.d(P.d9(b,null,null))
return a+b},
cu:function(a,b,c){var z
if(c>a.length)throw H.d(P.bY(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
ct:function(a,b){return this.cu(a,b,0)},
cw:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.d(P.bZ(b,null,null))
if(b>c)throw H.d(P.bZ(b,null,null))
if(c>a.length)throw H.d(P.bZ(c,null,null))
return a.substring(b,c)},
cv:function(a,b){return this.cw(a,b,null)},
e6:function(a){return a.toLowerCase()},
dF:function(a,b,c){if(c>a.length)throw H.d(P.bY(c,0,a.length,null,null))
return H.lh(a,b,c)},
O:function(a,b){var z
H.w(b)
if(typeof b!=="string")throw H.d(H.bg(b))
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
i:function(a,b){if(b>=a.length||!1)throw H.d(H.bh(a,b))
return a[b]},
$isx:1,
$asx:I.bi,
$isa1:1,
$asa1:function(){return[P.e]},
$isia:1,
$ise:1}}],["","",,H,{"^":"",
cq:function(){return new P.cA("No element")},
hx:function(){return new P.cA("Too many elements")},
iD:function(a,b,c){H.t(a,"$isa",[c],"$asa")
H.l(b,{func:1,ret:P.F,args:[c,c]})
H.bD(a,0,J.b_(a)-1,b,c)},
bD:function(a,b,c,d,e){H.t(a,"$isa",[e],"$asa")
H.l(d,{func:1,ret:P.F,args:[e,e]})
if(c-b<=32)H.iC(a,b,c,d,e)
else H.iB(a,b,c,d,e)},
iC:function(a,b,c,d,e){var z,y,x,w,v
H.t(a,"$isa",[e],"$asa")
H.l(d,{func:1,ret:P.F,args:[e,e]})
for(z=b+1,y=J.bk(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.ad(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.h(a,w,y.i(a,v))
w=v}y.h(a,w,x)}},
iB:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.t(a,"$isa",[a2],"$asa")
H.l(a1,{func:1,ret:P.F,args:[a2,a2]})
z=C.e.a1(a0-b+1,6)
y=b+z
x=a0-z
w=C.e.a1(b+a0,2)
v=w-z
u=w+z
t=J.bk(a)
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
if(J.aN(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.i(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.ab()
if(i<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.Z()
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
if(typeof e!=="number")return e.ab()
if(e<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.Z()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.Z()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.ab()
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
H.bD(a,b,m-2,a1,a2)
H.bD(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aN(a1.$2(t.i(a,m),r),0);)++m
for(;J.aN(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.ab()
h=l-1
if(i<0){t.h(a,k,t.i(a,m))
g=m+1
t.h(a,m,t.i(a,l))
t.h(a,l,j)
m=g}else{t.h(a,k,t.i(a,l))
t.h(a,l,j)}l=h
break}}H.bD(a,m,l,a1,a2)}else H.bD(a,m,l,a1,a2)},
dl:{"^":"m;"},
bX:{"^":"dl;$ti",
gD:function(a){return new H.dy(this,this.gl(this),0,[H.cL(this,"bX",0)])},
aQ:function(a,b){return this.cA(0,H.l(b,{func:1,ret:P.W,args:[H.cL(this,"bX",0)]}))}},
dy:{"^":"b;a,b,c,0d,$ti",
sbd:function(a){this.d=H.z(a,H.p(this,0))},
gE:function(a){return this.d},
v:function(){var z,y,x,w
z=this.a
y=J.bk(z)
x=y.gl(z)
if(this.b!==x)throw H.d(P.aO(z))
w=this.c
if(w>=x){this.sbd(null)
return!1}this.sbd(y.u(z,w));++this.c
return!0},
$isb3:1},
hQ:{"^":"bX;a,b,$ti",
gl:function(a){return J.b_(this.a)},
u:function(a,b){return this.b.$1(J.fl(this.a,b))},
$asbX:function(a,b){return[b]},
$asm:function(a,b){return[b]}},
dU:{"^":"m;a,b,$ti",
gD:function(a){return new H.j2(J.bQ(this.a),this.b,this.$ti)}},
j2:{"^":"b3;a,b,$ti",
v:function(){var z,y
for(z=this.a,y=this.b;z.v();)if(y.$1(z.gE(z)))return!0
return!1},
gE:function(a){var z=this.a
return z.gE(z)}},
bV:{"^":"b;$ti"}}],["","",,H,{"^":"",
aM:function(a){var z,y
z=H.w(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kX:function(a){return init.types[H.Q(a)]},
l7:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.C(a).$isy},
h:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bq(a)
if(typeof z!=="string")throw H.d(H.bg(a))
return z},
b9:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
ba:function(a){return H.id(a)+H.c5(H.ap(a),0,null)},
id:function(a){var z,y,x,w,v,u,t,s,r
z=J.C(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.N||!!z.$isbc){u=C.C(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aM(w.length>1&&C.i.ay(w,0)===36?C.i.cv(w,1):w)},
aP:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
il:function(a){var z=H.aP(a).getFullYear()+0
return z},
ij:function(a){var z=H.aP(a).getMonth()+1
return z},
ie:function(a){var z=H.aP(a).getDate()+0
return z},
ig:function(a){var z=H.aP(a).getHours()+0
return z},
ii:function(a){var z=H.aP(a).getMinutes()+0
return z},
ik:function(a){var z=H.aP(a).getSeconds()+0
return z},
ih:function(a){var z=H.aP(a).getMilliseconds()+0
return z},
bL:function(a){throw H.d(H.bg(a))},
k:function(a,b){if(a==null)J.b_(a)
throw H.d(H.bh(a,b))},
bh:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.as(!0,b,"index",null)
z=H.Q(J.b_(a))
if(!(b<0)){if(typeof z!=="number")return H.bL(z)
y=b>=z}else y=!0
if(y)return P.I(b,a,"index",null,z)
return P.bZ(b,"index",null)},
bg:function(a){return new P.as(!0,a,null,null)},
d:function(a){var z
if(a==null)a=new P.cy()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eB})
z.name=""}else z.toString=H.eB
return z},
eB:function(){return J.bq(this.dartException)},
a8:function(a){throw H.d(a)},
G:function(a){throw H.d(P.aO(a))},
a3:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lj(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.bs(x,16)&8191)===10)switch(w){case 438:return z.$1(H.ct(H.h(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dF(H.h(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.eM()
u=$.eN()
t=$.eO()
s=$.eP()
r=$.eS()
q=$.eT()
p=$.eR()
$.eQ()
o=$.eV()
n=$.eU()
m=v.M(y)
if(m!=null)return z.$1(H.ct(H.w(y),m))
else{m=u.M(y)
if(m!=null){m.method="call"
return z.$1(H.ct(H.w(y),m))}else{m=t.M(y)
if(m==null){m=s.M(y)
if(m==null){m=r.M(y)
if(m==null){m=q.M(y)
if(m==null){m=p.M(y)
if(m==null){m=s.M(y)
if(m==null){m=o.M(y)
if(m==null){m=n.M(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dF(H.w(y),m))}}return z.$1(new H.iZ(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dK()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.as(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dK()
return a},
aJ:function(a){var z
if(a==null)return new H.ea(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ea(a)},
kT:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.h(0,a[y],a[x])}return b},
l6:function(a,b,c,d,e,f){H.i(a,"$isbv")
switch(H.Q(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.dq("Unsupported number of arguments for wrapped closure"))},
aX:function(a,b){var z
H.Q(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.l6)
a.$identity=z
return z},
fX:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.C(d).$isa){z.$reflectionInfo=d
x=H.iq(z).r}else x=d
w=e?Object.create(new H.iE().constructor.prototype):Object.create(new H.ck(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ae
if(typeof u!=="number")return u.L()
$.ae=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.de(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kX,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.dc:H.cl
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.d("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.de(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
fU:function(a,b,c,d){var z=H.cl
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
de:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fW(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fU(y,!w,z,b)
if(y===0){w=$.ae
if(typeof w!=="number")return w.L()
$.ae=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b0
if(v==null){v=H.bT("self")
$.b0=v}return new Function(w+H.h(v)+";return "+u+"."+H.h(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ae
if(typeof w!=="number")return w.L()
$.ae=w+1
t+=w
w="return function("+t+"){return this."
v=$.b0
if(v==null){v=H.bT("self")
$.b0=v}return new Function(w+H.h(v)+"."+H.h(z)+"("+t+");}")()},
fV:function(a,b,c,d){var z,y
z=H.cl
y=H.dc
switch(b?-1:a){case 0:throw H.d(H.iw("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fW:function(a,b){var z,y,x,w,v,u,t,s
z=$.b0
if(z==null){z=H.bT("self")
$.b0=z}y=$.db
if(y==null){y=H.bT("receiver")
$.db=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fV(w,!u,x,b)
if(w===1){z="return function(){return this."+H.h(z)+"."+H.h(x)+"(this."+H.h(y)+");"
y=$.ae
if(typeof y!=="number")return y.L()
$.ae=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.h(z)+"."+H.h(x)+"(this."+H.h(y)+", "+s+");"
y=$.ae
if(typeof y!=="number")return y.L()
$.ae=y+1
return new Function(z+y+"}")()},
cJ:function(a,b,c,d,e,f,g){return H.fX(a,b,H.Q(c),d,!!e,!!f,g)},
w:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.aa(a,"String"))},
ep:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aa(a,"double"))},
cO:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aa(a,"num"))},
c7:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.aa(a,"bool"))},
Q:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.aa(a,"int"))},
cP:function(a,b){throw H.d(H.aa(a,H.aM(H.w(b).substring(3))))},
le:function(a,b){throw H.d(H.dd(a,H.aM(H.w(b).substring(3))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.C(a)[b])return a
H.cP(a,b)},
aq:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.C(a)[b]
else z=!0
if(z)return a
H.le(a,b)},
ey:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.C(a)[b])return a
H.cP(a,b)},
aY:function(a){if(a==null)return a
if(!!J.C(a).$isa)return a
throw H.d(H.aa(a,"List<dynamic>"))},
l8:function(a,b){var z
if(a==null)return a
z=J.C(a)
if(!!z.$isa)return a
if(z[b])return a
H.cP(a,b)},
cK:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.Q(z)]
else return a.$S()}return},
bI:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cK(J.C(a))
if(z==null)return!1
return H.eg(z,null,b,null)},
l:function(a,b){var z,y
if(a==null)return a
if($.cF)return a
$.cF=!0
try{if(H.bI(a,b))return a
z=H.bM(b)
y=H.aa(a,z)
throw H.d(y)}finally{$.cF=!1}},
bj:function(a,b){if(a!=null&&!H.cI(a,b))H.a8(H.aa(a,H.bM(b)))
return a},
ek:function(a){var z,y
z=J.C(a)
if(!!z.$iso){y=H.cK(z)
if(y!=null)return H.bM(y)
return"Closure"}return H.ba(a)},
li:function(a){throw H.d(new P.h3(H.w(a)))},
eu:function(a){return init.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
ap:function(a){if(a==null)return
return a.$ti},
nC:function(a,b,c){return H.aZ(a["$as"+H.h(c)],H.ap(b))},
bl:function(a,b,c,d){var z
H.w(c)
H.Q(d)
z=H.aZ(a["$as"+H.h(c)],H.ap(b))
return z==null?null:z[d]},
cL:function(a,b,c){var z
H.w(b)
H.Q(c)
z=H.aZ(a["$as"+H.h(b)],H.ap(a))
return z==null?null:z[c]},
p:function(a,b){var z
H.Q(b)
z=H.ap(a)
return z==null?null:z[b]},
bM:function(a){return H.aI(a,null)},
aI:function(a,b){var z,y
H.t(b,"$isa",[P.e],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aM(a[0].builtin$cls)+H.c5(a,1,b)
if(typeof a=="function")return H.aM(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Q(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.k(b,y)
return H.h(b[y])}if('func' in a)return H.kF(a,b)
if('futureOr' in a)return"FutureOr<"+H.aI("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kF:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.e]
H.t(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.f([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.j(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.k(b,r)
t=C.i.L(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.aI(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aI(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aI(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aI(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kS(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.w(z[l])
n=n+m+H.aI(i[h],b)+(" "+H.h(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
c5:function(a,b,c){var z,y,x,w,v,u
H.t(c,"$isa",[P.e],"$asa")
if(a==null)return""
z=new P.cB("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aI(u,c)}return"<"+z.k(0)+">"},
kW:function(a){var z,y,x,w
z=J.C(a)
if(!!z.$iso){y=H.cK(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ap(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aZ:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ao:function(a,b,c,d){var z,y
H.w(b)
H.aY(c)
H.w(d)
if(a==null)return!1
z=H.ap(a)
y=J.C(a)
if(y[b]==null)return!1
return H.en(H.aZ(y[d],z),null,c,null)},
bN:function(a,b,c,d){H.w(b)
H.aY(c)
H.w(d)
if(a==null)return a
if(H.ao(a,b,c,d))return a
throw H.d(H.dd(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aM(b.substring(3))+H.c5(c,0,null),init.mangledGlobalNames)))},
t:function(a,b,c,d){H.w(b)
H.aY(c)
H.w(d)
if(a==null)return a
if(H.ao(a,b,c,d))return a
throw H.d(H.aa(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aM(b.substring(3))+H.c5(c,0,null),init.mangledGlobalNames)))},
en:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a5(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a5(a[y],b,c[y],d))return!1
return!0},
nz:function(a,b,c){return a.apply(b,H.aZ(J.C(b)["$as"+H.h(c)],H.ap(b)))},
ew:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="A"||a===-1||a===-2||H.ew(z)}return!1},
cI:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="A"||b===-1||b===-2||H.ew(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cI(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bI(a,b)}z=J.C(a).constructor
y=H.ap(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a5(z,null,b,null)},
z:function(a,b){if(a!=null&&!H.cI(a,b))throw H.d(H.aa(a,H.bM(b)))
return a},
a5:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a5(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="A")return!0
if('func' in c)return H.eg(a,b,c,d)
if('func' in a)return c.builtin$cls==="bv"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a5("type" in a?a.type:null,b,x,d)
else if(H.a5(a,b,x,d))return!0
else{if(!('$is'+"a2" in y.prototype))return!1
w=y.prototype["$as"+"a2"]
v=H.aZ(w,z?a.slice(1):null)
return H.a5(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.en(H.aZ(r,z),b,u,d)},
eg:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.ld(m,b,l,d)},
ld:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a5(c[w],d,a[w],b))return!1}return!0},
nA:function(a,b,c){Object.defineProperty(a,H.w(b),{value:c,enumerable:false,writable:true,configurable:true})},
l9:function(a){var z,y,x,w,v,u
z=H.w($.ev.$1(a))
y=$.c8[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ca[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.w($.em.$2(a,z))
if(z!=null){y=$.c8[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ca[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cb(x)
$.c8[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.ca[z]=x
return x}if(v==="-"){u=H.cb(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.ez(a,x)
if(v==="*")throw H.d(P.dT(z))
if(init.leafTags[z]===true){u=H.cb(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ez(a,x)},
ez:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cN(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cb:function(a){return J.cN(a,!1,null,!!a.$isy)},
lc:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cb(z)
else return J.cN(z,c,null,null)},
l4:function(){if(!0===$.cM)return
$.cM=!0
H.l5()},
l5:function(){var z,y,x,w,v,u,t,s
$.c8=Object.create(null)
$.ca=Object.create(null)
H.l0()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eA.$1(v)
if(u!=null){t=H.lc(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
l0:function(){var z,y,x,w,v,u,t
z=C.R()
z=H.aW(C.O,H.aW(C.T,H.aW(C.B,H.aW(C.B,H.aW(C.S,H.aW(C.P,H.aW(C.Q(C.C),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ev=new H.l1(v)
$.em=new H.l2(u)
$.eA=new H.l3(t)},
aW:function(a,b){return a(b)||b},
lh:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
ip:{"^":"b;a,b,c,d,e,f,r,0x",p:{
iq:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cr(z)
y=z[0]
x=z[1]
return new H.ip(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iU:{"^":"b;a,b,c,d,e,f",
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
ag:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.f([],[P.e])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iU(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c1:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dQ:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
i7:{"^":"R;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dF:function(a,b){return new H.i7(a,b==null?null:b.method)}}},
hB:{"^":"R;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.h(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.h(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.h(this.a)+")"},
p:{
ct:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hB(a,y,z?null:b.receiver)}}},
iZ:{"^":"R;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lj:{"^":"o:6;a",
$1:function(a){if(!!J.C(a).$isR)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
ea:{"^":"b;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isV:1},
o:{"^":"b;",
k:function(a){return"Closure '"+H.ba(this).trim()+"'"},
gcm:function(){return this},
$isbv:1,
gcm:function(){return this}},
dM:{"^":"o;"},
iE:{"^":"dM;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aM(z)+"'"}},
ck:{"^":"dM;a,b,c,d",
G:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ck))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gB:function(a){var z,y
z=this.c
if(z==null)y=H.b9(this.a)
else y=typeof z!=="object"?J.ar(z):H.b9(z)
return(y^H.b9(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.ba(z)+"'")},
p:{
cl:function(a){return a.a},
dc:function(a){return a.c},
bT:function(a){var z,y,x,w,v
z=new H.ck("self","target","receiver","name")
y=J.cr(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iV:{"^":"R;a",
k:function(a){return this.a},
p:{
aa:function(a,b){return new H.iV("TypeError: "+P.bU(a)+": type '"+H.ek(a)+"' is not a subtype of type '"+b+"'")}}},
fS:{"^":"R;a",
k:function(a){return this.a},
p:{
dd:function(a,b){return new H.fS("CastError: "+P.bU(a)+": type '"+H.ek(a)+"' is not a subtype of type '"+b+"'")}}},
iv:{"^":"R;a",
k:function(a){return"RuntimeError: "+H.h(this.a)},
p:{
iw:function(a){return new H.iv(a)}}},
dR:{"^":"b;a,0b,0c,0d",
gal:function(){var z=this.b
if(z==null){z=H.bM(this.a)
this.b=z}return z},
k:function(a){return this.gal()},
gB:function(a){var z=this.d
if(z==null){z=C.i.gB(this.gal())
this.d=z}return z},
G:function(a,b){if(b==null)return!1
return b instanceof H.dR&&this.gal()===b.gal()}},
dv:{"^":"dz;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gJ:function(a){return new H.aw(this,[H.p(this,0)])},
ap:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.d1(z,b)}else{y=this.dT(b)
return y}},
dT:function(a){var z=this.d
if(z==null)return!1
return this.aL(this.aD(z,J.ar(a)&0x3ffffff),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ai(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ai(w,b)
x=y==null?null:y.b
return x}else return this.dU(b)},
dU:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aD(z,J.ar(a)&0x3ffffff)
x=this.aL(y,a)
if(x<0)return
return y[x].b},
h:function(a,b,c){var z,y,x,w,v,u
H.z(b,H.p(this,0))
H.z(c,H.p(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aF()
this.b=z}this.be(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aF()
this.c=y}this.be(y,b,c)}else{x=this.d
if(x==null){x=this.aF()
this.d=x}w=J.ar(b)&0x3ffffff
v=this.aD(x,w)
if(v==null)this.aH(x,w,[this.aw(b,c)])
else{u=this.aL(v,b)
if(u>=0)v[u].b=c
else v.push(this.aw(b,c))}}},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.p(this,0),H.p(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.aO(this))
z=z.c}},
be:function(a,b,c){var z
H.z(b,H.p(this,0))
H.z(c,H.p(this,1))
z=this.ai(a,b)
if(z==null)this.aH(a,b,this.aw(b,c))
else z.b=c},
bg:function(){this.r=this.r+1&67108863},
aw:function(a,b){var z,y
z=new H.hG(H.z(a,H.p(this,0)),H.z(b,H.p(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bg()
return z},
aL:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aN(a[y].a,b))return y
return-1},
k:function(a){return P.dA(this)},
ai:function(a,b){return a[b]},
aD:function(a,b){return a[b]},
aH:function(a,b,c){a[b]=c},
d2:function(a,b){delete a[b]},
d1:function(a,b){return this.ai(a,b)!=null},
aF:function(){var z=Object.create(null)
this.aH(z,"<non-identifier-key>",z)
this.d2(z,"<non-identifier-key>")
return z},
$isdw:1},
hG:{"^":"b;a,b,0c,0d"},
aw:{"^":"dl;a,$ti",
gl:function(a){return this.a.a},
gD:function(a){var z,y
z=this.a
y=new H.hH(z,z.r,this.$ti)
y.c=z.e
return y}},
hH:{"^":"b;a,b,0c,0d,$ti",
sbf:function(a){this.d=H.z(a,H.p(this,0))},
gE:function(a){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aO(z))
else{z=this.c
if(z==null){this.sbf(null)
return!1}else{this.sbf(z.a)
this.c=this.c.c
return!0}}},
$isb3:1},
l1:{"^":"o:6;a",
$1:function(a){return this.a(a)}},
l2:{"^":"o:15;a",
$2:function(a,b){return this.a(a,b)}},
l3:{"^":"o:16;a",
$1:function(a){return this.a(H.w(a))}}}],["","",,H,{"^":"",
kS:function(a){return J.hy(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
cc:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
c4:function(a){var z,y
if(!!J.C(a).$isx)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.h(z,y,a[y])
return z},
ah:function(a,b,c){H.aY(b)
if(a>>>0!==a||a>=c)throw H.d(H.bh(b,a))},
i1:{"^":"j;",$isiW:1,"%":"DataView;ArrayBufferView;cx|e4|e5|dD|e6|e7|ay"},
cx:{"^":"i1;",
gl:function(a){return a.length},
$isx:1,
$asx:I.bi,
$isy:1,
$asy:I.bi},
dD:{"^":"e5;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
h:function(a,b,c){H.ep(c)
H.ah(b,a,a.length)
a[b]=c},
$asbV:function(){return[P.a7]},
$asq:function(){return[P.a7]},
$ism:1,
$asm:function(){return[P.a7]},
$isa:1,
$asa:function(){return[P.a7]},
"%":"Float64Array"},
ay:{"^":"e7;",
h:function(a,b,c){H.Q(c)
H.ah(b,a,a.length)
a[b]=c},
$asbV:function(){return[P.F]},
$asq:function(){return[P.F]},
$ism:1,
$asm:function(){return[P.F]},
$isa:1,
$asa:function(){return[P.F]}},
i0:{"^":"dD;",$isak:1,"%":"Float32Array"},
mk:{"^":"ay;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":"Int16Array"},
ml:{"^":"ay;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
$ishv:1,
"%":"Int32Array"},
mm:{"^":"ay;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mn:{"^":"ay;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
i2:{"^":"ay;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
$isn7:1,
"%":"Uint32Array"},
mo:{"^":"ay;",
gl:function(a){return a.length},
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
mp:{"^":"ay;",
gl:function(a){return a.length},
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
e4:{"^":"cx+q;"},
e5:{"^":"e4+bV;"},
e6:{"^":"cx+q;"},
e7:{"^":"e6+bV;"}}],["","",,P,{"^":"",
j7:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kN()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aX(new P.j9(z),1)).observe(y,{childList:true})
return new P.j8(z,y,x)}else if(self.setImmediate!=null)return P.kO()
return P.kP()},
ni:[function(a){self.scheduleImmediate(H.aX(new P.ja(H.l(a,{func:1,ret:-1})),0))},"$1","kN",4,0,5],
nj:[function(a){self.setImmediate(H.aX(new P.jb(H.l(a,{func:1,ret:-1})),0))},"$1","kO",4,0,5],
nk:[function(a){H.l(a,{func:1,ret:-1})
P.km(0,a)},"$1","kP",4,0,5],
hm:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
H.t(a,"$ism",[[P.a2,d]],"$asm")
s=[[P.a,d]]
y=new P.U(0,$.D,s)
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.ho(z,b,!1,y)
try{for(r=a,q=r.length,p=0,o=0;p<r.length;r.length===q||(0,H.G)(r),++p){w=r[p]
v=o
w.aP(new P.hn(z,v,y,b,!1,d),x,null)
o=++z.b}if(o===0){r=new P.U(0,$.D,s)
r.bj(C.Y)
return r}r=new Array(o)
r.fixed$length=Array
z.a=H.f(r,[d])}catch(n){u=H.a3(n)
t=H.aJ(n)
if(z.b===0||!1){m=u
if(m==null)m=new P.cy()
r=$.D
if(r!==C.d)r.toString
s=new P.U(0,r,s)
s.cZ(m,t)
return s}else{z.c=u
z.d=t}}return y},
kJ:function(a,b){if(H.bI(a,{func:1,args:[P.b,P.V]}))return H.l(a,{func:1,ret:null,args:[P.b,P.V]})
if(H.bI(a,{func:1,args:[P.b]}))return H.l(a,{func:1,ret:null,args:[P.b]})
throw H.d(P.d9(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kI:function(){var z,y
for(;z=$.aU,z!=null;){$.bf=null
y=z.b
$.aU=y
if(y==null)$.be=null
z.a.$0()}},
nx:[function(){$.cG=!0
try{P.kI()}finally{$.bf=null
$.cG=!1
if($.aU!=null)$.cS().$1(P.eo())}},"$0","eo",0,0,1],
ej:function(a){var z=new P.dW(H.l(a,{func:1,ret:-1}))
if($.aU==null){$.be=z
$.aU=z
if(!$.cG)$.cS().$1(P.eo())}else{$.be.b=z
$.be=z}},
kM:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.aU
if(z==null){P.ej(a)
$.bf=$.be
return}y=new P.dW(a)
x=$.bf
if(x==null){y.b=z
$.bf=y
$.aU=y}else{y.b=x.b
x.b=y
$.bf=y
if(y.b==null)$.be=y}},
lf:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.D
if(C.d===y){P.aV(null,null,C.d,a)
return}y.toString
P.aV(null,null,y,H.l(y.bA(a),z))},
kE:function(a,b,c){a.dB(0)
b.ah(c)},
c6:function(a,b,c,d,e){var z={}
z.a=d
P.kM(new P.kK(z,e))},
eh:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.D
if(y===c)return d.$0()
$.D=c
z=y
try{y=d.$0()
return y}finally{$.D=z}},
ei:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.D
if(y===c)return d.$1(e)
$.D=c
z=y
try{y=d.$1(e)
return y}finally{$.D=z}},
kL:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.D
if(y===c)return d.$2(e,f)
$.D=c
z=y
try{y=d.$2(e,f)
return y}finally{$.D=z}},
aV:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.bA(d):c.dw(d,-1)
P.ej(d)},
j9:{"^":"o:7;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
j8:{"^":"o:17;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ja:{"^":"o:0;a",
$0:function(){this.a.$0()}},
jb:{"^":"o:0;a",
$0:function(){this.a.$0()}},
kl:{"^":"b;a,0b,c",
cW:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aX(new P.kn(this,b),0),a)
else throw H.d(P.B("`setTimeout()` not found."))},
p:{
km:function(a,b){var z=new P.kl(!0,0)
z.cW(a,b)
return z}}},
kn:{"^":"o:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
a2:{"^":"b;$ti"},
ho:{"^":"o:18;a,b,c,d",
$2:function(a,b){var z,y
H.i(b,"$isV")
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.V(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.V(z.c,z.d)}},
hn:{"^":"o;a,b,c,d,e,f",
$1:function(a){var z,y
H.z(a,this.f)
z=this.a;--z.b
y=z.a
if(y!=null){C.a.h(y,this.b,a)
if(z.b===0)this.c.bl(z.a)}else if(z.b===0&&!this.e)this.c.V(z.c,z.d)},
$S:function(){return{func:1,ret:P.A,args:[this.f]}}},
dZ:{"^":"b;$ti"},
j6:{"^":"dZ;a,$ti",
dE:function(a,b){var z
H.bj(b,{futureOr:1,type:H.p(this,0)})
z=this.a
if(z.a!==0)throw H.d(P.c0("Future already completed"))
z.bj(b)}},
kg:{"^":"dZ;a,$ti"},
aS:{"^":"b;0a,b,c,d,e,$ti",
dW:function(a){if(this.c!==6)return!0
return this.b.b.aN(H.l(this.d,{func:1,ret:P.W,args:[P.b]}),a.a,P.W,P.b)},
dS:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.p(this,1)}
w=this.b.b
if(H.bI(z,{func:1,args:[P.b,P.V]}))return H.bj(w.e2(z,a.a,a.b,null,y,P.V),x)
else return H.bj(w.aN(H.l(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
U:{"^":"b;bt:a<,b,0di:c<,$ti",
aP:function(a,b,c){var z,y,x,w
z=H.p(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.D
if(y!==C.d){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kJ(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.U(0,$.D,[c])
w=b==null?1:3
this.bi(new P.aS(x,w,a,b,[z,c]))
return x},
X:function(a,b){return this.aP(a,null,b)},
bi:function(a){var z,y
z=this.a
if(z<=1){a.a=H.i(this.c,"$isaS")
this.c=a}else{if(z===2){y=H.i(this.c,"$isU")
z=y.a
if(z<4){y.bi(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.aV(null,null,z,H.l(new P.js(this,a),{func:1,ret:-1}))}},
bq:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.i(this.c,"$isaS")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.i(this.c,"$isU")
y=u.a
if(y<4){u.bq(a)
return}this.a=y
this.c=u.c}z.a=this.ak(a)
y=this.b
y.toString
P.aV(null,null,y,H.l(new P.jz(z,this),{func:1,ret:-1}))}},
aj:function(){var z=H.i(this.c,"$isaS")
this.c=null
return this.ak(z)},
ak:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
ah:function(a){var z,y,x
z=H.p(this,0)
H.bj(a,{futureOr:1,type:z})
y=this.$ti
if(H.ao(a,"$isa2",y,"$asa2"))if(H.ao(a,"$isU",y,null))P.c2(a,this)
else P.e_(a,this)
else{x=this.aj()
H.z(a,z)
this.a=4
this.c=a
P.aT(this,x)}},
bl:function(a){var z
H.z(a,H.p(this,0))
z=this.aj()
this.a=4
this.c=a
P.aT(this,z)},
V:function(a,b){var z
H.i(b,"$isV")
z=this.aj()
this.a=8
this.c=new P.a4(a,b)
P.aT(this,z)},
bj:function(a){var z
H.bj(a,{futureOr:1,type:H.p(this,0)})
if(H.ao(a,"$isa2",this.$ti,"$asa2")){this.d_(a)
return}this.a=1
z=this.b
z.toString
P.aV(null,null,z,H.l(new P.ju(this,a),{func:1,ret:-1}))},
d_:function(a){var z=this.$ti
H.t(a,"$isa2",z,"$asa2")
if(H.ao(a,"$isU",z,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.aV(null,null,z,H.l(new P.jy(this,a),{func:1,ret:-1}))}else P.c2(a,this)
return}P.e_(a,this)},
cZ:function(a,b){var z
H.i(b,"$isV")
this.a=1
z=this.b
z.toString
P.aV(null,null,z,H.l(new P.jt(this,a,b),{func:1,ret:-1}))},
$isa2:1,
p:{
e_:function(a,b){var z,y,x
b.a=1
try{a.aP(new P.jv(b),new P.jw(b),null)}catch(x){z=H.a3(x)
y=H.aJ(x)
P.lf(new P.jx(b,z,y))}},
c2:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.i(a.c,"$isU")
if(z>=4){y=b.aj()
b.a=a.a
b.c=a.c
P.aT(b,y)}else{y=H.i(b.c,"$isaS")
b.a=2
b.c=a
a.bq(y)}},
aT:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
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
P.aT(z.a,b)}y=z.a
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
return}o=$.D
if(o!=q)$.D=q
else o=null
y=b.c
if(y===8)new P.jC(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jB(x,b,r).$0()}else if((y&2)!==0)new P.jA(z,x,b).$0()
if(o!=null)$.D=o
y=x.b
if(!!J.C(y).$isa2){if(y.a>=4){n=H.i(t.c,"$isaS")
t.c=null
b=t.ak(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.c2(y,t)
return}}m=b.b
n=H.i(m.c,"$isaS")
m.c=null
b=m.ak(n)
y=x.a
u=x.b
if(!y){H.z(u,H.p(m,0))
m.a=4
m.c=u}else{H.i(u,"$isa4")
m.a=8
m.c=u}z.a=m
y=m}}}},
js:{"^":"o:0;a,b",
$0:function(){P.aT(this.a,this.b)}},
jz:{"^":"o:0;a,b",
$0:function(){P.aT(this.b,this.a.a)}},
jv:{"^":"o:7;a",
$1:function(a){var z=this.a
z.a=0
z.ah(a)}},
jw:{"^":"o:19;a",
$2:function(a,b){H.i(b,"$isV")
this.a.V(a,b)},
$1:function(a){return this.$2(a,null)}},
jx:{"^":"o:0;a,b,c",
$0:function(){this.a.V(this.b,this.c)}},
ju:{"^":"o:0;a,b",
$0:function(){var z=this.a
z.bl(H.z(this.b,H.p(z,0)))}},
jy:{"^":"o:0;a,b",
$0:function(){P.c2(this.b,this.a)}},
jt:{"^":"o:0;a,b,c",
$0:function(){this.a.V(this.b,this.c)}},
jC:{"^":"o:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.c4(H.l(w.d,{func:1}),null)}catch(v){y=H.a3(v)
x=H.aJ(v)
if(this.d){w=H.i(this.a.a.c,"$isa4").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.i(this.a.a.c,"$isa4")
else u.b=new P.a4(y,x)
u.a=!0
return}if(!!J.C(z).$isa2){if(z instanceof P.U&&z.gbt()>=4){if(z.gbt()===8){w=this.b
w.b=H.i(z.gdi(),"$isa4")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.X(new P.jD(t),null)
w.a=!1}}},
jD:{"^":"o:20;a",
$1:function(a){return this.a}},
jB:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.p(x,0)
v=H.z(this.c,w)
u=H.p(x,1)
this.a.b=x.b.b.aN(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a3(t)
y=H.aJ(t)
x=this.a
x.b=new P.a4(z,y)
x.a=!0}}},
jA:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.i(this.a.a.c,"$isa4")
w=this.c
if(w.dW(z)&&w.e!=null){v=this.b
v.b=w.dS(z)
v.a=!1}}catch(u){y=H.a3(u)
x=H.aJ(u)
w=H.i(this.a.a.c,"$isa4")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a4(y,x)
s.a=!0}}},
dW:{"^":"b;a,0b"},
iI:{"^":"b;$ti",
gl:function(a){var z,y,x,w
z={}
y=new P.U(0,$.D,[P.F])
z.a=0
x=H.p(this,0)
w=H.l(new P.iM(z,this),{func:1,ret:-1,args:[x]})
H.l(new P.iN(z,y),{func:1,ret:-1})
W.an(this.a,this.b,w,!1,x)
return y},
gdQ:function(a){var z,y,x,w
z={}
y=new P.U(0,$.D,this.$ti)
z.a=null
x=H.p(this,0)
w=H.l(new P.iK(z,this,y),{func:1,ret:-1,args:[x]})
H.l(new P.iL(y),{func:1,ret:-1})
z.a=W.an(this.a,this.b,w,!1,x)
return y}},
iM:{"^":"o;a,b",
$1:function(a){H.z(a,H.p(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.A,args:[H.p(this.b,0)]}}},
iN:{"^":"o:0;a,b",
$0:function(){this.b.ah(this.a.a)}},
iK:{"^":"o;a,b,c",
$1:function(a){H.z(a,H.p(this.b,0))
P.kE(this.a.a,this.c,a)},
$S:function(){return{func:1,ret:P.A,args:[H.p(this.b,0)]}}},
iL:{"^":"o:0;a",
$0:function(){var z,y,x,w
try{x=H.cq()
throw H.d(x)}catch(w){z=H.a3(w)
y=H.aJ(w)
$.D.toString
this.a.V(z,y)}}},
iJ:{"^":"b;"},
a4:{"^":"b;a,b",
k:function(a){return H.h(this.a)},
$isR:1},
kt:{"^":"b;",$isng:1},
kK:{"^":"o:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.cy()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.k(0)
throw x}},
k_:{"^":"kt;",
e3:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.d===$.D){a.$0()
return}P.eh(null,null,this,a,-1)}catch(x){z=H.a3(x)
y=H.aJ(x)
P.c6(null,null,this,z,H.i(y,"$isV"))}},
e4:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.d===$.D){a.$1(b)
return}P.ei(null,null,this,a,b,-1,c)}catch(x){z=H.a3(x)
y=H.aJ(x)
P.c6(null,null,this,z,H.i(y,"$isV"))}},
dw:function(a,b){return new P.k1(this,H.l(a,{func:1,ret:b}),b)},
bA:function(a){return new P.k0(this,H.l(a,{func:1,ret:-1}))},
dz:function(a,b){return new P.k2(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
c4:function(a,b){H.l(a,{func:1,ret:b})
if($.D===C.d)return a.$0()
return P.eh(null,null,this,a,b)},
aN:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.D===C.d)return a.$1(b)
return P.ei(null,null,this,a,b,c,d)},
e2:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.D===C.d)return a.$2(b,c)
return P.kL(null,null,this,a,b,c,d,e,f)}},
k1:{"^":"o;a,b,c",
$0:function(){return this.a.c4(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
k0:{"^":"o:1;a,b",
$0:function(){return this.a.e3(this.b)}},
k2:{"^":"o;a,b,c",
$1:function(a){var z=this.c
return this.a.e4(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dx:function(a,b,c){H.aY(a)
return H.t(H.kT(a,new H.dv(0,0,[b,c])),"$isdw",[b,c],"$asdw")},
T:function(a,b){return new H.dv(0,0,[a,b])},
a9:function(a,b,c,d){return new P.jL(0,0,[d])},
hw:function(a,b,c){var z,y
if(P.cH(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.f([],[P.e])
y=$.bm()
C.a.j(y,a)
try{P.kH(a,z)}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=P.dL(b,H.l8(z,"$ism"),", ")+c
return y.charCodeAt(0)==0?y:y},
cp:function(a,b,c){var z,y,x
if(P.cH(a))return b+"..."+c
z=new P.cB(b)
y=$.bm()
C.a.j(y,a)
try{x=z
x.a=P.dL(x.ga0(),a,", ")}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=z
y.a=y.ga0()+c
y=z.ga0()
return y.charCodeAt(0)==0?y:y},
cH:function(a){var z,y
for(z=0;y=$.bm(),z<y.length;++z)if(a===y[z])return!0
return!1},
kH:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.t(b,"$isa",[P.e],"$asa")
z=a.gD(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.v())return
w=H.h(z.gE(z))
C.a.j(b,w)
y+=w.length+2;++x}if(!z.v()){if(x<=5)return
if(0>=b.length)return H.k(b,-1)
v=b.pop()
if(0>=b.length)return H.k(b,-1)
u=b.pop()}else{t=z.gE(z);++x
if(!z.v()){if(x<=4){C.a.j(b,H.h(t))
return}v=H.h(t)
if(0>=b.length)return H.k(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gE(z);++x
for(;z.v();t=s,s=r){r=z.gE(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2;--x}C.a.j(b,"...")
return}}u=H.h(t)
v=H.h(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.j(b,q)
C.a.j(b,u)
C.a.j(b,v)},
cu:function(a,b){var z,y,x
z=P.a9(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.G)(a),++x)z.j(0,H.z(a[x],b))
return z},
dA:function(a){var z,y,x
z={}
if(P.cH(a))return"{...}"
y=new P.cB("")
try{C.a.j($.bm(),a)
x=y
x.a=x.ga0()+"{"
z.a=!0
J.fo(a,new P.hP(z,y))
z=y
z.a=z.ga0()+"}"}finally{z=$.bm()
if(0>=z.length)return H.k(z,-1)
z.pop()}z=y.ga0()
return z.charCodeAt(0)==0?z:z},
jL:{"^":"jF;a,0b,0c,0d,0e,0f,r,$ti",
gD:function(a){var z=new P.e3(this,this.r,this.$ti)
z.c=this.e
return z},
gl:function(a){return this.a},
A:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.i(z[b],"$isbH")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.i(y[b],"$isbH")!=null}else return this.d0(b)},
d0:function(a){var z=this.d
if(z==null)return!1
return this.aC(this.bo(z,a),a)>=0},
j:function(a,b){var z,y
H.z(b,H.p(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cE()
this.b=z}return this.bh(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cE()
this.c=y}return this.bh(y,b)}else return this.cX(0,b)},
cX:function(a,b){var z,y,x
H.z(b,H.p(this,0))
z=this.d
if(z==null){z=P.cE()
this.d=z}y=this.bm(b)
x=z[y]
if(x==null)z[y]=[this.aG(b)]
else{if(this.aC(x,b)>=0)return!1
x.push(this.aG(b))}return!0},
c3:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.br(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.br(this.c,b)
else return this.dc(0,b)},
dc:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bo(z,b)
x=this.aC(y,b)
if(x<0)return!1
this.bv(y.splice(x,1)[0])
return!0},
aa:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aE()}},
bh:function(a,b){H.z(b,H.p(this,0))
if(H.i(a[b],"$isbH")!=null)return!1
a[b]=this.aG(b)
return!0},
br:function(a,b){var z
if(a==null)return!1
z=H.i(a[b],"$isbH")
if(z==null)return!1
this.bv(z)
delete a[b]
return!0},
aE:function(){this.r=this.r+1&67108863},
aG:function(a){var z,y
z=new P.bH(H.z(a,H.p(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aE()
return z},
bv:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aE()},
bm:function(a){return J.ar(a)&0x3ffffff},
bo:function(a,b){return a[this.bm(b)]},
aC:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aN(a[y].a,b))return y
return-1},
p:{
cE:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bH:{"^":"b;a,0b,0c"},
e3:{"^":"b;a,b,0c,0d,$ti",
sbk:function(a){this.d=H.z(a,H.p(this,0))},
gE:function(a){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aO(z))
else{z=this.c
if(z==null){this.sbk(null)
return!1}else{this.sbk(H.z(z.a,H.p(this,0)))
this.c=this.c.b
return!0}}},
$isb3:1,
p:{
jM:function(a,b,c){var z=new P.e3(a,b,[c])
z.c=a.e
return z}}},
jF:{"^":"ix;"},
hI:{"^":"jN;",$ism:1,$isa:1},
q:{"^":"b;$ti",
gD:function(a){return new H.dy(a,this.gl(a),0,[H.bl(this,a,"q",0)])},
u:function(a,b){return this.i(a,b)},
dR:function(a,b,c,d){var z,y,x
H.z(b,d)
H.l(c,{func:1,ret:d,args:[d,H.bl(this,a,"q",0)]})
z=this.gl(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.i(a,x))
if(z!==this.gl(a))throw H.d(P.aO(a))}return y},
k:function(a){return P.cp(a,"[","]")}},
dz:{"^":"Z;"},
hP:{"^":"o:8;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.h(a)
z.a=y+": "
z.a+=H.h(b)}},
Z:{"^":"b;$ti",
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.bl(this,a,"Z",0),H.bl(this,a,"Z",1)]})
for(z=J.bQ(this.gJ(a));z.v();){y=z.gE(z)
b.$2(y,this.i(a,y))}},
gl:function(a){return J.b_(this.gJ(a))},
k:function(a){return P.dA(a)},
$isM:1},
iy:{"^":"b;$ti",
I:function(a,b){var z
for(z=J.bQ(H.t(b,"$ism",this.$ti,"$asm"));z.v();)this.j(0,z.gE(z))},
k:function(a){return P.cp(this,"{","}")},
$ism:1,
$ismH:1},
ix:{"^":"iy;"},
jN:{"^":"b+q;"}}],["","",,P,{"^":"",
hg:function(a){if(a instanceof H.o)return a.k(0)
return"Instance of '"+H.ba(a)+"'"},
bU:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bq(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hg(a)},
dq:function(a){return new P.jp(a)},
aL:function(a){H.cc(H.h(a))},
W:{"^":"b;"},
"+bool":0,
bs:{"^":"b;a,b",
G:function(a,b){if(b==null)return!1
return b instanceof P.bs&&this.a===b.a&&!0},
O:function(a,b){return C.e.O(this.a,H.i(b,"$isbs").a)},
gB:function(a){var z=this.a
return(z^C.e.bs(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.h5(H.il(this))
y=P.bt(H.ij(this))
x=P.bt(H.ie(this))
w=P.bt(H.ig(this))
v=P.bt(H.ii(this))
u=P.bt(H.ik(this))
t=P.h6(H.ih(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isa1:1,
$asa1:function(){return[P.bs]},
p:{
h5:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
h6:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bt:function(a){if(a>=10)return""+a
return"0"+a}}},
a7:{"^":"H;"},
"+double":0,
b1:{"^":"b;a",
Z:function(a,b){return C.e.Z(this.a,H.i(b,"$isb1").a)},
G:function(a,b){if(b==null)return!1
return b instanceof P.b1&&this.a===b.a},
gB:function(a){return this.a&0x1FFFFFFF},
O:function(a,b){return C.e.O(this.a,H.i(b,"$isb1").a)},
k:function(a){var z,y,x,w,v
z=new P.hd()
y=this.a
if(y<0)return"-"+new P.b1(0-y).k(0)
x=z.$1(C.e.a1(y,6e7)%60)
w=z.$1(C.e.a1(y,1e6)%60)
v=new P.hc().$1(y%1e6)
return""+C.e.a1(y,36e8)+":"+H.h(x)+":"+H.h(w)+"."+H.h(v)},
$isa1:1,
$asa1:function(){return[P.b1]},
p:{
dk:function(a,b,c,d,e,f){return new P.b1(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hc:{"^":"o:9;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hd:{"^":"o:9;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
R:{"^":"b;"},
cy:{"^":"R;",
k:function(a){return"Throw of null."}},
as:{"^":"R;a,b,c,d",
gaA:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaz:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gaA()+y+x
if(!this.a)return w
v=this.gaz()
u=P.bU(this.b)
return w+v+": "+u},
p:{
d8:function(a){return new P.as(!1,null,null,a)},
d9:function(a,b,c){return new P.as(!0,a,b,c)}}},
dG:{"^":"as;e,f,a,b,c,d",
gaA:function(){return"RangeError"},
gaz:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.h(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.h(z)
else if(x>z)y=": Not in range "+H.h(z)+".."+H.h(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.h(z)}return y},
p:{
bZ:function(a,b,c){return new P.dG(null,null,!0,a,b,"Value not in range")},
bY:function(a,b,c,d,e){return new P.dG(b,c,!0,a,d,"Invalid value")}}},
hu:{"^":"as;e,l:f>,a,b,c,d",
gaA:function(){return"RangeError"},
gaz:function(){var z,y
z=H.Q(this.b)
if(typeof z!=="number")return z.ab()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.h(y)},
p:{
I:function(a,b,c,d,e){var z=H.Q(e==null?J.b_(b):e)
return new P.hu(b,z,!0,a,c,"Index out of range")}}},
j_:{"^":"R;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
B:function(a){return new P.j_(a)}}},
iY:{"^":"R;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
dT:function(a){return new P.iY(a)}}},
cA:{"^":"R;a",
k:function(a){return"Bad state: "+this.a},
p:{
c0:function(a){return new P.cA(a)}}},
fY:{"^":"R;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bU(z)+"."},
p:{
aO:function(a){return new P.fY(a)}}},
dK:{"^":"b;",
k:function(a){return"Stack Overflow"},
$isR:1},
h3:{"^":"R;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
jp:{"^":"b;a",
k:function(a){return"Exception: "+this.a}},
bv:{"^":"b;"},
F:{"^":"H;"},
"+int":0,
m:{"^":"b;$ti",
aQ:["cA",function(a,b){var z=H.cL(this,"m",0)
return new H.dU(this,H.l(b,{func:1,ret:P.W,args:[z]}),[z])}],
gl:function(a){var z,y
z=this.gD(this)
for(y=0;z.v();)++y
return y},
u:function(a,b){var z,y,x
if(b<0)H.a8(P.bY(b,0,null,"index",null))
for(z=this.gD(this),y=0;z.v();){x=z.gE(z)
if(b===y)return x;++y}throw H.d(P.I(b,this,"index",null,y))},
k:function(a){return P.hw(this,"(",")")}},
b3:{"^":"b;$ti"},
a:{"^":"b;$ti",$ism:1},
"+List":0,
M:{"^":"b;$ti"},
A:{"^":"b;",
gB:function(a){return P.b.prototype.gB.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
H:{"^":"b;",$isa1:1,
$asa1:function(){return[P.H]}},
"+num":0,
b:{"^":";",
G:function(a,b){return this===b},
gB:function(a){return H.b9(this)},
k:function(a){return"Instance of '"+H.ba(this)+"'"},
toString:function(){return this.k(this)}},
V:{"^":"b;"},
e:{"^":"b;",$isa1:1,
$asa1:function(){return[P.e]},
$isia:1},
"+String":0,
cB:{"^":"b;a0:a<",
gl:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dL:function(a,b,c){var z=J.bQ(b)
if(!z.v())return a
if(c.length===0){do a+=H.h(z.gE(z))
while(z.v())}else{a+=H.h(z.gE(z))
for(;z.v();)a=a+c+H.h(z.gE(z))}return a}}}}],["","",,W,{"^":"",
he:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.p).P(z,a,b,c)
y.toString
z=W.v
z=new H.dU(new W.ab(y),H.l(new W.hf(),{func:1,ret:P.W,args:[z]}),[z])
x=z.gD(z)
if(!x.v())H.a8(H.cq())
w=x.gE(x)
if(x.v())H.a8(H.hx())
return H.i(w,"$isX")},
dp:function(a){H.i(a,"$isP")
return"wheel"},
b2:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fr(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a3(x)}return z},
jm:function(a,b){return document.createElement(a)},
c3:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
e2:function(a,b,c,d){var z,y
z=W.c3(W.c3(W.c3(W.c3(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
ef:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.jg(a)
if(!!J.C(z).$isP)return z
return}else return H.i(a,"$isP")},
el:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.D
if(z===C.d)return a
return z.dz(a,b)},
N:{"^":"X;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
lk:{"^":"j;0l:length=","%":"AccessibleNodeList"},
fK:{"^":"N;",
k:function(a){return String(a)},
$isfK:1,
"%":"HTMLAnchorElement"},
ll:{"^":"N;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
da:{"^":"N;",$isda:1,"%":"HTMLBaseElement"},
fP:{"^":"j;","%":";Blob"},
bS:{"^":"N;",$isbS:1,"%":"HTMLBodyElement"},
br:{"^":"N;0n:height=,0m:width=",
aR:function(a,b,c){if(c!=null)return this.d5(a,b,P.kQ(c,null))
return this.d6(a,b)},
cn:function(a,b){return this.aR(a,b,null)},
d5:function(a,b,c){return a.getContext(b,c)},
d6:function(a,b){return a.getContext(b)},
$isbr:1,
"%":"HTMLCanvasElement"},
fR:{"^":"j;",
an:function(a,b,c){return a.addColorStop(b,c)},
"%":"CanvasGradient"},
cm:{"^":"j;",
bL:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
dP:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
as:function(a){return P.a6(a.getContextAttributes())},
$iscm:1,
"%":"CanvasRenderingContext2D"},
ls:{"^":"v;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fZ:{"^":"cn;",$isfZ:1,"%":"CSSNumericValue|CSSUnitValue"},
lw:{"^":"h1;0l:length=","%":"CSSPerspective"},
at:{"^":"j;",$isat:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
h_:{"^":"je;0l:length=",
aW:function(a,b){var z=this.d7(a,this.ax(a,b))
return z==null?"":z},
ax:function(a,b){var z,y
z=$.eI()
y=z[b]
if(typeof y==="string")return y
y=this.dm(a,b)
z[b]=y
return y},
dm:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.h7()+b
if(z in a)return z
return b},
d7:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
h0:{"^":"b;",
gn:function(a){return this.aW(a,"height")},
gm:function(a){return this.aW(a,"width")}},
cn:{"^":"j;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
h1:{"^":"j;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
ly:{"^":"cn;0l:length=","%":"CSSTransformValue"},
lz:{"^":"cn;0l:length=","%":"CSSUnparsedValue"},
lB:{"^":"j;0l:length=",
i:function(a,b){return a[b]},
"%":"DataTransferItemList"},
h8:{"^":"N;","%":"HTMLDivElement"},
h9:{"^":"v;",
dr:function(a,b){return a.adoptNode(b)},
co:function(a,b){return a.getElementById(b)},
dZ:function(a,b){return a.querySelector(b)},
gbZ:function(a){return new W.bF(a,"mousedown",!1,[W.a_])},
gc_:function(a){return new W.bF(a,"mousemove",!1,[W.a_])},
gc0:function(a){return new W.bF(a,"mouseup",!1,[W.a_])},
gc1:function(a){return new W.bF(a,H.w(W.dp(a)),!1,[W.aR])},
"%":"XMLDocument;Document"},
lC:{"^":"j;",
k:function(a){return String(a)},
"%":"DOMException"},
ha:{"^":"j;",
dJ:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
lD:{"^":"ji;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(c,"$isa0",[P.H],"$asa0")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[[P.a0,P.H]]},
$isy:1,
$asy:function(){return[[P.a0,P.H]]},
$asq:function(){return[[P.a0,P.H]]},
$ism:1,
$asm:function(){return[[P.a0,P.H]]},
$isa:1,
$asa:function(){return[[P.a0,P.H]]},
$asu:function(){return[[P.a0,P.H]]},
"%":"ClientRectList|DOMRectList"},
hb:{"^":"j;",
k:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gm(a))+" x "+H.h(this.gn(a))},
G:function(a,b){var z
if(b==null)return!1
if(!H.ao(b,"$isa0",[P.H],"$asa0"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.n(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gB:function(a){return W.e2(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isa0:1,
$asa0:function(){return[P.H]},
"%":";DOMRectReadOnly"},
lE:{"^":"jk;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.w(c)
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[P.e]},
$isy:1,
$asy:function(){return[P.e]},
$asq:function(){return[P.e]},
$ism:1,
$asm:function(){return[P.e]},
$isa:1,
$asa:function(){return[P.e]},
$asu:function(){return[P.e]},
"%":"DOMStringList"},
lF:{"^":"j;0l:length=","%":"DOMTokenList"},
X:{"^":"v;0e5:tagName=",
gdu:function(a){return new W.jl(a)},
k:function(a){return a.localName},
P:["au",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dn
if(z==null){z=H.f([],[W.af])
y=new W.dE(z)
C.a.j(z,W.e0(null))
C.a.j(z,W.eb())
$.dn=y
d=y}else d=z
z=$.dm
if(z==null){z=new W.ee(d)
$.dm=z
c=z}else{z.a=d
c=z}}if($.ai==null){z=document
y=z.implementation
y=(y&&C.L).dJ(y,"")
$.ai=y
$.co=y.createRange()
y=$.ai
y.toString
y=y.createElement("base")
H.i(y,"$isda")
y.href=z.baseURI
z=$.ai.head;(z&&C.M).K(z,y)}z=$.ai
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.i(y,"$isbS")}z=$.ai
if(!!this.$isbS)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ai.body;(z&&C.p).K(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.A(C.W,a.tagName)){z=$.co;(z&&C.E).cp(z,x)
z=$.co
w=(z&&C.E).dH(z,b)}else{x.innerHTML=b
w=$.ai.createDocumentFragment()
for(z=J.n(w);y=x.firstChild,y!=null;)z.K(w,y)}z=$.ai.body
if(x==null?z!=null:x!==z)J.d1(x)
c.b0(w)
C.t.dr(document,w)
return w},function(a,b,c){return this.P(a,b,c,null)},"dI",null,null,"ged",5,5,null],
cr:function(a,b,c,d){a.textContent=null
this.K(a,this.P(a,b,c,d))},
cq:function(a,b){return this.cr(a,b,null,null)},
a5:function(a,b){return a.getAttribute(b)},
dd:function(a,b){return a.removeAttribute(b)},
gbZ:function(a){return new W.bE(a,"mousedown",!1,[W.a_])},
gc_:function(a){return new W.bE(a,"mousemove",!1,[W.a_])},
gc0:function(a){return new W.bE(a,"mouseup",!1,[W.a_])},
gc1:function(a){return new W.bE(a,H.w(W.dp(a)),!1,[W.aR])},
$isX:1,
"%":";Element"},
hf:{"^":"o:21;",
$1:function(a){return!!J.C(H.i(a,"$isv")).$isX}},
lG:{"^":"N;0n:height=,0m:width=","%":"HTMLEmbedElement"},
S:{"^":"j;",$isS:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
P:{"^":"j;",
dq:function(a,b,c,d){H.l(c,{func:1,args:[W.S]})
if(c!=null)this.cY(a,b,c,!1)},
cY:function(a,b,c,d){return a.addEventListener(b,H.aX(H.l(c,{func:1,args:[W.S]}),1),!1)},
df:function(a,b,c,d){return a.removeEventListener(b,H.aX(H.l(c,{func:1,args:[W.S]}),1),!1)},
$isP:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;e8|e9|ec|ed"},
au:{"^":"fP;",$isau:1,"%":"File"},
lX:{"^":"jr;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isau")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.au]},
$isy:1,
$asy:function(){return[W.au]},
$asq:function(){return[W.au]},
$ism:1,
$asm:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$asu:function(){return[W.au]},
"%":"FileList"},
lY:{"^":"P;0l:length=","%":"FileWriter"},
m0:{"^":"N;0l:length=","%":"HTMLFormElement"},
av:{"^":"j;",$isav:1,"%":"Gamepad"},
hq:{"^":"N;","%":"HTMLHeadElement"},
m1:{"^":"j;0l:length=","%":"History"},
m2:{"^":"jH;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isv")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.v]},
$isy:1,
$asy:function(){return[W.v]},
$asq:function(){return[W.v]},
$ism:1,
$asm:function(){return[W.v]},
$isa:1,
$asa:function(){return[W.v]},
$asu:function(){return[W.v]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hr:{"^":"h9;","%":"HTMLDocument"},
m3:{"^":"N;0n:height=,0m:width=","%":"HTMLIFrameElement"},
m6:{"^":"j;0n:height=,0m:width=","%":"ImageBitmap"},
m7:{"^":"j;0n:height=,0m:width=","%":"ImageData"},
al:{"^":"N;0n:height=,0m:width=",$isal:1,"%":"HTMLImageElement"},
m9:{"^":"N;0n:height=,0m:width=","%":"HTMLInputElement"},
b4:{"^":"dS;",$isb4:1,"%":"KeyboardEvent"},
hK:{"^":"j;",
k:function(a){return String(a)},
$ishK:1,
"%":"Location"},
hR:{"^":"N;","%":"HTMLAudioElement;HTMLMediaElement"},
mg:{"^":"j;0l:length=","%":"MediaList"},
mh:{"^":"jP;",
i:function(a,b){return P.a6(a.get(H.w(b)))},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a6(y.value[1]))}},
gJ:function(a){var z=H.f([],[P.e])
this.H(a,new W.hT(z))
return z},
gl:function(a){return a.size},
$asZ:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"MIDIInputMap"},
hT:{"^":"o:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
mi:{"^":"jQ;",
i:function(a,b){return P.a6(a.get(H.w(b)))},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a6(y.value[1]))}},
gJ:function(a){var z=H.f([],[P.e])
this.H(a,new W.hU(z))
return z},
gl:function(a){return a.size},
$asZ:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"MIDIOutputMap"},
hU:{"^":"o:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
ax:{"^":"j;",$isax:1,"%":"MimeType"},
mj:{"^":"jS;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isax")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.ax]},
$isy:1,
$asy:function(){return[W.ax]},
$asq:function(){return[W.ax]},
$ism:1,
$asm:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$asu:function(){return[W.ax]},
"%":"MimeTypeArray"},
a_:{"^":"dS;",
gbY:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.b8(a.offsetX,a.offsetY,[P.H])
else{z=a.target
if(!J.C(W.ef(z)).$isX)throw H.d(P.B("offsetX is only supported on elements"))
y=H.i(W.ef(z),"$isX")
z=a.clientX
x=a.clientY
w=[P.H]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.t(new P.b8(u,v,w),"$isb8",w,"$asb8")
if(typeof z!=="number")return z.b3()
if(typeof x!=="number")return x.b3()
return new P.b8(C.u.c7(z-u),C.u.c7(x-v),w)}},
$isa_:1,
"%":";DragEvent|MouseEvent"},
ab:{"^":"hI;a",
gac:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.d(P.c0("No elements"))
if(y>1)throw H.d(P.c0("More than one element"))
return z.firstChild},
I:function(a,b){var z,y,x,w,v
H.t(b,"$ism",[W.v],"$asm")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.n(y),v=0;v<x;++v)w.K(y,z.firstChild)
return},
h:function(a,b,c){var z,y
H.i(c,"$isv")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.k(y,b)
J.f4(z,c,y[b])},
gD:function(a){var z=this.a.childNodes
return new W.dr(z,z.length,-1,[H.bl(C.Z,z,"u",0)])},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.k(z,b)
return z[b]},
$asq:function(){return[W.v]},
$asm:function(){return[W.v]},
$asa:function(){return[W.v]}},
v:{"^":"P;0dY:previousSibling=",
e_:function(a){var z=a.parentNode
if(z!=null)J.bO(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.cz(a):z},
K:function(a,b){return a.appendChild(b)},
de:function(a,b){return a.removeChild(b)},
dg:function(a,b,c){return a.replaceChild(b,c)},
$isv:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
i3:{"^":"jU;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isv")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.v]},
$isy:1,
$asy:function(){return[W.v]},
$asq:function(){return[W.v]},
$ism:1,
$asm:function(){return[W.v]},
$isa:1,
$asa:function(){return[W.v]},
$asu:function(){return[W.v]},
"%":"NodeList|RadioNodeList"},
ms:{"^":"N;0n:height=,0m:width=","%":"HTMLObjectElement"},
mu:{"^":"P;0n:height=,0m:width=","%":"OffscreenCanvas"},
mv:{"^":"j;0n:height=,0m:width=","%":"PaintSize"},
aA:{"^":"j;0l:length=",$isaA:1,"%":"Plugin"},
mx:{"^":"jY;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isaA")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aA]},
$isy:1,
$asy:function(){return[W.aA]},
$asq:function(){return[W.aA]},
$ism:1,
$asm:function(){return[W.aA]},
$isa:1,
$asa:function(){return[W.aA]},
$asu:function(){return[W.aA]},
"%":"PluginArray"},
mz:{"^":"a_;0n:height=,0m:width=","%":"PointerEvent"},
io:{"^":"j;",
dH:function(a,b){return a.createContextualFragment(b)},
cp:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
mE:{"^":"k3;",
i:function(a,b){return P.a6(a.get(H.w(b)))},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a6(y.value[1]))}},
gJ:function(a){var z=H.f([],[P.e])
this.H(a,new W.iu(z))
return z},
gl:function(a){return a.size},
$asZ:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"RTCStatsReport"},
iu:{"^":"o:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
mF:{"^":"j;0n:height=,0m:width=","%":"Screen"},
mG:{"^":"N;0l:length=","%":"HTMLSelectElement"},
aB:{"^":"P;",$isaB:1,"%":"SourceBuffer"},
mI:{"^":"e9;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isaB")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aB]},
$isy:1,
$asy:function(){return[W.aB]},
$asq:function(){return[W.aB]},
$ism:1,
$asm:function(){return[W.aB]},
$isa:1,
$asa:function(){return[W.aB]},
$asu:function(){return[W.aB]},
"%":"SourceBufferList"},
aC:{"^":"j;",$isaC:1,"%":"SpeechGrammar"},
mJ:{"^":"k9;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isaC")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aC]},
$isy:1,
$asy:function(){return[W.aC]},
$asq:function(){return[W.aC]},
$ism:1,
$asm:function(){return[W.aC]},
$isa:1,
$asa:function(){return[W.aC]},
$asu:function(){return[W.aC]},
"%":"SpeechGrammarList"},
aD:{"^":"j;0l:length=",$isaD:1,"%":"SpeechRecognitionResult"},
mM:{"^":"kc;",
i:function(a,b){return this.bp(a,H.w(b))},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=0;!0;++z){y=this.d9(a,z)
if(y==null)return
b.$2(y,this.bp(a,y))}},
gJ:function(a){var z=H.f([],[P.e])
this.H(a,new W.iH(z))
return z},
gl:function(a){return a.length},
bp:function(a,b){return a.getItem(b)},
d9:function(a,b){return a.key(b)},
$asZ:function(){return[P.e,P.e]},
$isM:1,
$asM:function(){return[P.e,P.e]},
"%":"Storage"},
iH:{"^":"o:22;a",
$2:function(a,b){return C.a.j(this.a,a)}},
aE:{"^":"j;",$isaE:1,"%":"CSSStyleSheet|StyleSheet"},
iO:{"^":"N;",
P:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.au(a,b,c,d)
z=W.he("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ab(y).I(0,new W.ab(z))
return y},
"%":"HTMLTableElement"},
mP:{"^":"N;",
P:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.au(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.J.P(z.createElement("table"),b,c,d)
z.toString
z=new W.ab(z)
x=z.gac(z)
x.toString
z=new W.ab(x)
w=z.gac(z)
y.toString
w.toString
new W.ab(y).I(0,new W.ab(w))
return y},
"%":"HTMLTableRowElement"},
mQ:{"^":"N;",
P:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.au(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.J.P(z.createElement("table"),b,c,d)
z.toString
z=new W.ab(z)
x=z.gac(z)
y.toString
x.toString
new W.ab(y).I(0,new W.ab(x))
return y},
"%":"HTMLTableSectionElement"},
dN:{"^":"N;",$isdN:1,"%":"HTMLTemplateElement"},
mR:{"^":"j;0m:width=","%":"TextMetrics"},
aF:{"^":"P;",$isaF:1,"%":"TextTrack"},
aG:{"^":"P;",$isaG:1,"%":"TextTrackCue|VTTCue"},
mS:{"^":"kk;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isaG")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aG]},
$isy:1,
$asy:function(){return[W.aG]},
$asq:function(){return[W.aG]},
$ism:1,
$asm:function(){return[W.aG]},
$isa:1,
$asa:function(){return[W.aG]},
$asu:function(){return[W.aG]},
"%":"TextTrackCueList"},
mT:{"^":"ed;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isaF")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aF]},
$isy:1,
$asy:function(){return[W.aF]},
$asq:function(){return[W.aF]},
$ism:1,
$asm:function(){return[W.aF]},
$isa:1,
$asa:function(){return[W.aF]},
$asu:function(){return[W.aF]},
"%":"TextTrackList"},
mU:{"^":"j;0l:length=","%":"TimeRanges"},
aH:{"^":"j;",$isaH:1,"%":"Touch"},
mV:{"^":"kp;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isaH")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aH]},
$isy:1,
$asy:function(){return[W.aH]},
$asq:function(){return[W.aH]},
$ism:1,
$asm:function(){return[W.aH]},
$isa:1,
$asa:function(){return[W.aH]},
$asu:function(){return[W.aH]},
"%":"TouchList"},
mW:{"^":"j;0l:length=","%":"TrackDefaultList"},
dS:{"^":"S;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
n9:{"^":"j;",
k:function(a){return String(a)},
"%":"URL"},
nc:{"^":"hR;0n:height=,0m:width=","%":"HTMLVideoElement"},
nd:{"^":"P;0l:length=","%":"VideoTrackList"},
ne:{"^":"P;0n:height=,0m:width=","%":"VisualViewport"},
nf:{"^":"j;0m:width=","%":"VTTRegion"},
aR:{"^":"a_;",
gdL:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.B("deltaY is not supported"))},
$isaR:1,
"%":"WheelEvent"},
j3:{"^":"P;",
gdt:function(a){var z,y,x
z=P.H
y=new P.U(0,$.D,[z])
x=H.l(new W.j4(new P.kg(y,[z])),{func:1,ret:-1,args:[P.H]})
this.d4(a)
this.dh(a,W.el(x,z))
return y},
dh:function(a,b){return a.requestAnimationFrame(H.aX(H.l(b,{func:1,ret:-1,args:[P.H]}),1))},
d4:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdV:1,
"%":"DOMWindow|Window"},
j4:{"^":"o:23;a",
$1:function(a){var z=this.a
a=H.bj(H.cO(a),{futureOr:1,type:H.p(z,0)})
z=z.a
if(z.a!==0)H.a8(P.c0("Future already completed"))
z.ah(a)}},
dX:{"^":"v;",$isdX:1,"%":"Attr"},
nl:{"^":"kv;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isat")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.at]},
$isy:1,
$asy:function(){return[W.at]},
$asq:function(){return[W.at]},
$ism:1,
$asm:function(){return[W.at]},
$isa:1,
$asa:function(){return[W.at]},
$asu:function(){return[W.at]},
"%":"CSSRuleList"},
nn:{"^":"hb;",
k:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
G:function(a,b){var z
if(b==null)return!1
if(!H.ao(b,"$isa0",[P.H],"$asa0"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.n(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gB:function(a){return W.e2(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
no:{"^":"kx;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isav")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.av]},
$isy:1,
$asy:function(){return[W.av]},
$asq:function(){return[W.av]},
$ism:1,
$asm:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$asu:function(){return[W.av]},
"%":"GamepadList"},
nt:{"^":"kz;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isv")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.v]},
$isy:1,
$asy:function(){return[W.v]},
$asq:function(){return[W.v]},
$ism:1,
$asm:function(){return[W.v]},
$isa:1,
$asa:function(){return[W.v]},
$asu:function(){return[W.v]},
"%":"MozNamedAttrMap|NamedNodeMap"},
nu:{"^":"kB;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isaD")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aD]},
$isy:1,
$asy:function(){return[W.aD]},
$asq:function(){return[W.aD]},
$ism:1,
$asm:function(){return[W.aD]},
$isa:1,
$asa:function(){return[W.aD]},
$asu:function(){return[W.aD]},
"%":"SpeechRecognitionResultList"},
nv:{"^":"kD;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isaE")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aE]},
$isy:1,
$asy:function(){return[W.aE]},
$asq:function(){return[W.aE]},
$ism:1,
$asm:function(){return[W.aE]},
$isa:1,
$asa:function(){return[W.aE]},
$asu:function(){return[W.aE]},
"%":"StyleSheetList"},
jc:{"^":"dz;d3:a<",
H:function(a,b){var z,y,x,w,v,u
H.l(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=this.gJ(this),y=z.length,x=this.a,w=J.n(x),v=0;v<z.length;z.length===y||(0,H.G)(z),++v){u=z[v]
b.$2(u,w.a5(x,u))}},
gJ:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.f([],[P.e])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.k(z,w)
v=H.i(z[w],"$isdX")
if(v.namespaceURI==null)C.a.j(y,v.name)}return y},
$asZ:function(){return[P.e,P.e]},
$asM:function(){return[P.e,P.e]}},
jl:{"^":"jc;a",
i:function(a,b){return J.ci(this.a,H.w(b))},
gl:function(a){return this.gJ(this).length}},
bF:{"^":"iI;a,b,c,$ti"},
bE:{"^":"bF;a,b,c,$ti"},
jn:{"^":"iJ;a,b,c,d,e,$ti",
sda:function(a){this.d=H.l(a,{func:1,args:[W.S]})},
dB:function(a){var z,y,x
z=this.b
if(z==null)return
y=this.d
x=y!=null
if(x){H.l(y,{func:1,args:[W.S]})
if(x)J.f3(z,this.c,y,!1)}this.b=null
this.sda(null)
return},
p:{
an:function(a,b,c,d,e){var z=W.el(new W.jo(c),W.S)
if(z!=null&&!0)J.f5(a,b,z,!1)
return new W.jn(0,a,b,z,!1,[e])}}},
jo:{"^":"o:24;a",
$1:function(a){return this.a.$1(H.i(a,"$isS"))}},
bG:{"^":"b;a",
cU:function(a){var z,y
z=$.cT()
if(z.a===0){for(y=0;y<262;++y)z.h(0,C.V[y],W.kZ())
for(y=0;y<12;++y)z.h(0,C.w[y],W.l_())}},
a2:function(a){return $.eY().A(0,W.b2(a))},
W:function(a,b,c){var z,y,x
z=W.b2(a)
y=$.cT()
x=y.i(0,H.h(z)+"::"+b)
if(x==null)x=y.i(0,"*::"+b)
if(x==null)return!1
return H.c7(x.$4(a,b,c,this))},
$isaf:1,
p:{
e0:function(a){var z,y
z=document.createElement("a")
y=new W.k4(z,window.location)
y=new W.bG(y)
y.cU(a)
return y},
nr:[function(a,b,c,d){H.i(a,"$isX")
H.w(b)
H.w(c)
H.i(d,"$isbG")
return!0},"$4","kZ",16,0,14],
ns:[function(a,b,c,d){var z,y,x
H.i(a,"$isX")
H.w(b)
H.w(c)
z=H.i(d,"$isbG").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","l_",16,0,14]}},
u:{"^":"b;$ti",
gD:function(a){return new W.dr(a,this.gl(a),-1,[H.bl(this,a,"u",0)])}},
dE:{"^":"b;a",
a2:function(a){return C.a.bx(this.a,new W.i5(a))},
W:function(a,b,c){return C.a.bx(this.a,new W.i4(a,b,c))},
$isaf:1},
i5:{"^":"o:10;a",
$1:function(a){return H.i(a,"$isaf").a2(this.a)}},
i4:{"^":"o:10;a,b,c",
$1:function(a){return H.i(a,"$isaf").W(this.a,this.b,this.c)}},
k5:{"^":"b;",
cV:function(a,b,c,d){var z,y,x
this.a.I(0,c)
z=b.aQ(0,new W.k6())
y=b.aQ(0,new W.k7())
this.b.I(0,z)
x=this.c
x.I(0,C.X)
x.I(0,y)},
a2:function(a){return this.a.A(0,W.b2(a))},
W:["cC",function(a,b,c){var z,y
z=W.b2(a)
y=this.c
if(y.A(0,H.h(z)+"::"+b))return this.d.ds(c)
else if(y.A(0,"*::"+b))return this.d.ds(c)
else{y=this.b
if(y.A(0,H.h(z)+"::"+b))return!0
else if(y.A(0,"*::"+b))return!0
else if(y.A(0,H.h(z)+"::*"))return!0
else if(y.A(0,"*::*"))return!0}return!1}],
$isaf:1},
k6:{"^":"o:11;",
$1:function(a){return!C.a.A(C.w,H.w(a))}},
k7:{"^":"o:11;",
$1:function(a){return C.a.A(C.w,H.w(a))}},
kh:{"^":"k5;e,a,b,c,d",
W:function(a,b,c){if(this.cC(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ci(a,"template")==="")return this.e.A(0,b)
return!1},
p:{
eb:function(){var z,y,x,w,v
z=P.e
y=P.cu(C.v,z)
x=H.p(C.v,0)
w=H.l(new W.ki(),{func:1,ret:z,args:[x]})
v=H.f(["TEMPLATE"],[z])
y=new W.kh(y,P.a9(null,null,null,z),P.a9(null,null,null,z),P.a9(null,null,null,z),null)
y.cV(null,new H.hQ(C.v,w,[x,z]),v,null)
return y}}},
ki:{"^":"o:25;",
$1:function(a){return"TEMPLATE::"+H.h(H.w(a))}},
kf:{"^":"b;",
a2:function(a){var z=J.C(a)
if(!!z.$isdI)return!1
z=!!z.$isJ
if(z&&W.b2(a)==="foreignObject")return!1
if(z)return!0
return!1},
W:function(a,b,c){if(b==="is"||C.i.ct(b,"on"))return!1
return this.a2(a)},
$isaf:1},
dr:{"^":"b;a,b,c,0d,$ti",
sbn:function(a){this.d=H.z(a,H.p(this,0))},
v:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbn(J.bn(this.a,z))
this.c=z
return!0}this.sbn(null)
this.c=y
return!1},
gE:function(a){return this.d},
$isb3:1},
jf:{"^":"b;a",$isP:1,$isdV:1,p:{
jg:function(a){if(a===window)return H.i(a,"$isdV")
else return new W.jf(a)}}},
af:{"^":"b;"},
k4:{"^":"b;a,b",$isn8:1},
ee:{"^":"b;a",
b0:function(a){new W.ks(this).$2(a,null)},
a7:function(a,b){if(b==null)J.d1(a)
else J.bO(b,a)},
dk:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fp(a)
x=J.ci(y.gd3(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a3(t)}v="element unprintable"
try{v=J.bq(a)}catch(t){H.a3(t)}try{u=W.b2(a)
this.dj(H.i(a,"$isX"),b,z,v,u,H.i(y,"$isM"),H.w(x))}catch(t){if(H.a3(t) instanceof P.as)throw t
else{this.a7(a,b)
window
s="Removing corrupted element "+H.h(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dj:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a7(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a2(a)){this.a7(a,b)
window
z="Removing disallowed element <"+H.h(e)+"> from "+H.h(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.W(a,"is",g)){this.a7(a,b)
window
z="Removing disallowed type extension <"+H.h(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gJ(f)
y=H.f(z.slice(0),[H.p(z,0)])
for(x=f.gJ(f).length-1,z=f.a,w=J.n(z);x>=0;--x){if(x>=y.length)return H.k(y,x)
v=y[x]
if(!this.a.W(a,J.fB(v),w.a5(z,v))){window
u="Removing disallowed attribute <"+H.h(e)+" "+v+'="'+H.h(w.a5(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.a5(z,v)
w.dd(z,v)}}if(!!J.C(a).$isdN)this.b0(a.content)},
$ismq:1},
ks:{"^":"o:26;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dk(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a7(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fq(z)}catch(w){H.a3(w)
v=H.i(z,"$isv")
if(x){u=v.parentNode
if(u!=null)J.bO(u,v)}else J.bO(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.i(y,"$isv")}}},
je:{"^":"j+h0;"},
jh:{"^":"j+q;"},
ji:{"^":"jh+u;"},
jj:{"^":"j+q;"},
jk:{"^":"jj+u;"},
jq:{"^":"j+q;"},
jr:{"^":"jq+u;"},
jG:{"^":"j+q;"},
jH:{"^":"jG+u;"},
jP:{"^":"j+Z;"},
jQ:{"^":"j+Z;"},
jR:{"^":"j+q;"},
jS:{"^":"jR+u;"},
jT:{"^":"j+q;"},
jU:{"^":"jT+u;"},
jX:{"^":"j+q;"},
jY:{"^":"jX+u;"},
k3:{"^":"j+Z;"},
e8:{"^":"P+q;"},
e9:{"^":"e8+u;"},
k8:{"^":"j+q;"},
k9:{"^":"k8+u;"},
kc:{"^":"j+Z;"},
kj:{"^":"j+q;"},
kk:{"^":"kj+u;"},
ec:{"^":"P+q;"},
ed:{"^":"ec+u;"},
ko:{"^":"j+q;"},
kp:{"^":"ko+u;"},
ku:{"^":"j+q;"},
kv:{"^":"ku+u;"},
kw:{"^":"j+q;"},
kx:{"^":"kw+u;"},
ky:{"^":"j+q;"},
kz:{"^":"ky+u;"},
kA:{"^":"j+q;"},
kB:{"^":"kA+u;"},
kC:{"^":"j+q;"},
kD:{"^":"kC+u;"}}],["","",,P,{"^":"",
a6:function(a){var z,y,x,w,v
if(a==null)return
z=P.T(P.e,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.G)(y),++w){v=H.w(y[w])
z.h(0,v,a[v])}return z},
kQ:function(a,b){var z={}
a.H(0,new P.kR(z))
return z},
dj:function(){var z=$.di
if(z==null){z=J.ce(window.navigator.userAgent,"Opera",0)
$.di=z}return z},
h7:function(){var z,y
z=$.df
if(z!=null)return z
y=$.dg
if(y==null){y=J.ce(window.navigator.userAgent,"Firefox",0)
$.dg=y}if(y)z="-moz-"
else{y=$.dh
if(y==null){y=!P.dj()&&J.ce(window.navigator.userAgent,"Trident/",0)
$.dh=y}if(y)z="-ms-"
else z=P.dj()?"-o-":"-webkit-"}$.df=z
return z},
kR:{"^":"o:8;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
lg:function(a){return Math.sqrt(a)},
e1:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jI:{"^":"b;",
dX:function(){return Math.random()}},
b8:{"^":"b;a4:a>,Y:b>,$ti",
k:function(a){return"Point("+H.h(this.a)+", "+H.h(this.b)+")"},
G:function(a,b){if(b==null)return!1
return H.ao(b,"$isb8",[P.H],null)&&this.a==J.bR(b)&&this.b==b.gY(b)},
gB:function(a){var z,y,x
z=J.ar(this.a)
y=J.ar(this.b)
y=P.e1(P.e1(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
jZ:{"^":"b;"},
a0:{"^":"jZ;$ti"}}],["","",,P,{"^":"",fL:{"^":"j;",$isfL:1,"%":"SVGAnimatedLength"},lH:{"^":"J;0n:height=,0m:width=","%":"SVGFEBlendElement"},lI:{"^":"J;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},lJ:{"^":"J;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},lK:{"^":"J;0n:height=,0m:width=","%":"SVGFECompositeElement"},lL:{"^":"J;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},lM:{"^":"J;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},lN:{"^":"J;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},lO:{"^":"J;0n:height=,0m:width=","%":"SVGFEFloodElement"},lP:{"^":"J;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},lQ:{"^":"J;0n:height=,0m:width=","%":"SVGFEImageElement"},lR:{"^":"J;0n:height=,0m:width=","%":"SVGFEMergeElement"},lS:{"^":"J;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},lT:{"^":"J;0n:height=,0m:width=","%":"SVGFEOffsetElement"},lU:{"^":"J;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},lV:{"^":"J;0n:height=,0m:width=","%":"SVGFETileElement"},lW:{"^":"J;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},lZ:{"^":"J;0n:height=,0m:width=","%":"SVGFilterElement"},m_:{"^":"by;0n:height=,0m:width=","%":"SVGForeignObjectElement"},hp:{"^":"by;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},by:{"^":"J;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},m8:{"^":"by;0n:height=,0m:width=","%":"SVGImageElement"},b5:{"^":"j;",$isb5:1,"%":"SVGLength"},me:{"^":"jK;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return this.S(a,b)},
h:function(a,b,c){H.i(c,"$isb5")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){return this.i(a,b)},
S:function(a,b){return a.getItem(b)},
$asq:function(){return[P.b5]},
$ism:1,
$asm:function(){return[P.b5]},
$isa:1,
$asa:function(){return[P.b5]},
$asu:function(){return[P.b5]},
"%":"SVGLengthList"},mf:{"^":"J;0n:height=,0m:width=","%":"SVGMaskElement"},b7:{"^":"j;",$isb7:1,"%":"SVGNumber"},mr:{"^":"jW;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return this.S(a,b)},
h:function(a,b,c){H.i(c,"$isb7")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){return this.i(a,b)},
S:function(a,b){return a.getItem(b)},
$asq:function(){return[P.b7]},
$ism:1,
$asm:function(){return[P.b7]},
$isa:1,
$asa:function(){return[P.b7]},
$asu:function(){return[P.b7]},
"%":"SVGNumberList"},mw:{"^":"J;0n:height=,0m:width=","%":"SVGPatternElement"},my:{"^":"j;0l:length=","%":"SVGPointList"},mA:{"^":"j;0n:height=,0m:width=","%":"SVGRect"},mB:{"^":"hp;0n:height=,0m:width=","%":"SVGRectElement"},dI:{"^":"J;",$isdI:1,"%":"SVGScriptElement"},mN:{"^":"ke;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return this.S(a,b)},
h:function(a,b,c){H.w(c)
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){return this.i(a,b)},
S:function(a,b){return a.getItem(b)},
$asq:function(){return[P.e]},
$ism:1,
$asm:function(){return[P.e]},
$isa:1,
$asa:function(){return[P.e]},
$asu:function(){return[P.e]},
"%":"SVGStringList"},J:{"^":"X;",
P:function(a,b,c,d){var z,y,x,w,v,u
z=H.f([],[W.af])
C.a.j(z,W.e0(null))
C.a.j(z,W.eb())
C.a.j(z,new W.kf())
c=new W.ee(new W.dE(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).dI(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ab(w)
u=z.gac(z)
for(z=J.n(v);x=u.firstChild,x!=null;)z.K(v,x)
return v},
$isJ:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mO:{"^":"by;0n:height=,0m:width=","%":"SVGSVGElement"},bb:{"^":"j;",$isbb:1,"%":"SVGTransform"},mX:{"^":"kr;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return this.S(a,b)},
h:function(a,b,c){H.i(c,"$isbb")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){return this.i(a,b)},
S:function(a,b){return a.getItem(b)},
$asq:function(){return[P.bb]},
$ism:1,
$asm:function(){return[P.bb]},
$isa:1,
$asa:function(){return[P.bb]},
$asu:function(){return[P.bb]},
"%":"SVGTransformList"},na:{"^":"by;0n:height=,0m:width=","%":"SVGUseElement"},jJ:{"^":"j+q;"},jK:{"^":"jJ+u;"},jV:{"^":"j+q;"},jW:{"^":"jV+u;"},kd:{"^":"j+q;"},ke:{"^":"kd+u;"},kq:{"^":"j+q;"},kr:{"^":"kq+u;"}}],["","",,P,{"^":"",ak:{"^":"b;",$ism:1,
$asm:function(){return[P.a7]},
$isa:1,
$asa:function(){return[P.a7]},
$isiW:1}}],["","",,P,{"^":"",lm:{"^":"j;0l:length=","%":"AudioBuffer"},ln:{"^":"jd;",
i:function(a,b){return P.a6(a.get(H.w(b)))},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a6(y.value[1]))}},
gJ:function(a){var z=H.f([],[P.e])
this.H(a,new P.fN(z))
return z},
gl:function(a){return a.size},
$asZ:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"AudioParamMap"},fN:{"^":"o:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},lo:{"^":"P;0l:length=","%":"AudioTrackList"},fO:{"^":"P;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mt:{"^":"fO;0l:length=","%":"OfflineAudioContext"},jd:{"^":"j+Z;"}}],["","",,P,{"^":"",fQ:{"^":"j;",$isfQ:1,"%":"WebGLBuffer"},hl:{"^":"j;",$ishl:1,"%":"WebGLFramebuffer"},im:{"^":"j;",$isim:1,"%":"WebGLProgram"},mC:{"^":"j;",
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
bI:function(a,b){return a.compileShader(b)},
bJ:function(a){return a.createBuffer()},
bK:function(a){return a.createProgram()},
bM:function(a,b){return a.createShader(b)},
bN:function(a){return a.createTexture()},
bP:function(a,b){return a.depthMask(b)},
bQ:function(a,b){return a.disable(b)},
bR:function(a,b,c,d){return a.drawArrays(b,c,d)},
bS:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bT:function(a,b){return a.enable(b)},
bU:function(a,b){return a.enableVertexAttribArray(b)},
as:function(a){return P.a6(a.getContextAttributes())},
aS:function(a){return a.getError()},
aU:function(a,b){return a.getProgramInfoLog(b)},
aV:function(a,b,c){return a.getProgramParameter(b,c)},
aX:function(a,b){return a.getShaderInfoLog(b)},
aY:function(a,b,c){return a.getShaderParameter(b,c)},
aZ:function(a,b,c){return a.getUniformLocation(b,c)},
bW:function(a,b){return a.linkProgram(b)},
c2:function(a,b,c){return a.pixelStorei(b,c)},
b1:function(a,b,c){return a.shaderSource(b,c)},
b2:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aO:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.C(g)
if(!!z.$isal)y=!0
else y=!1
if(y){this.aI(a,b,c,d,e,f,g)
return}if(!!z.$isbr)z=!0
else z=!1
if(z){this.aJ(a,b,c,d,e,f,g)
return}throw H.d(P.d8("Incorrect number or type of arguments"))},
c5:function(a,b,c,d,e,f,g){return this.aO(a,b,c,d,e,f,g,null,null,null)},
aI:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aJ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c6:function(a,b,c,d){return a.texParameteri(b,c,d)},
c8:function(a,b,c){return a.uniform1f(b,c)},
c9:function(a,b,c){return a.uniform1fv(b,c)},
ca:function(a,b,c){return a.uniform1i(b,c)},
cb:function(a,b,c){return a.uniform1iv(b,c)},
cc:function(a,b,c){return a.uniform2fv(b,c)},
cd:function(a,b,c){return a.uniform3fv(b,c)},
ce:function(a,b,c){return a.uniform4fv(b,c)},
cf:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cg:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ci:function(a,b){return a.useProgram(b)},
cj:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cl:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},mD:{"^":"j;",
dv:function(a,b){return a.beginTransformFeedback(b)},
dA:function(a,b){return a.bindVertexArray(b)},
dK:function(a){return a.createVertexArray()},
dM:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dN:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dO:function(a){return a.endTransformFeedback()},
e8:function(a,b,c,d){this.dn(a,b,H.t(c,"$isa",[P.e],"$asa"),d)
return},
dn:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
e9:function(a,b,c){return a.vertexAttribDivisor(b,c)},
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
bI:function(a,b){return a.compileShader(b)},
bJ:function(a){return a.createBuffer()},
bK:function(a){return a.createProgram()},
bM:function(a,b){return a.createShader(b)},
bN:function(a){return a.createTexture()},
bP:function(a,b){return a.depthMask(b)},
bQ:function(a,b){return a.disable(b)},
bR:function(a,b,c,d){return a.drawArrays(b,c,d)},
bS:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bT:function(a,b){return a.enable(b)},
bU:function(a,b){return a.enableVertexAttribArray(b)},
as:function(a){return P.a6(a.getContextAttributes())},
aS:function(a){return a.getError()},
aU:function(a,b){return a.getProgramInfoLog(b)},
aV:function(a,b,c){return a.getProgramParameter(b,c)},
aX:function(a,b){return a.getShaderInfoLog(b)},
aY:function(a,b,c){return a.getShaderParameter(b,c)},
aZ:function(a,b,c){return a.getUniformLocation(b,c)},
bW:function(a,b){return a.linkProgram(b)},
c2:function(a,b,c){return a.pixelStorei(b,c)},
b1:function(a,b,c){return a.shaderSource(b,c)},
b2:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aO:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.C(g)
if(!!z.$isal)y=!0
else y=!1
if(y){this.aI(a,b,c,d,e,f,g)
return}if(!!z.$isbr)z=!0
else z=!1
if(z){this.aJ(a,b,c,d,e,f,g)
return}throw H.d(P.d8("Incorrect number or type of arguments"))},
c5:function(a,b,c,d,e,f,g){return this.aO(a,b,c,d,e,f,g,null,null,null)},
aI:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aJ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c6:function(a,b,c,d){return a.texParameteri(b,c,d)},
c8:function(a,b,c){return a.uniform1f(b,c)},
c9:function(a,b,c){return a.uniform1fv(b,c)},
ca:function(a,b,c){return a.uniform1i(b,c)},
cb:function(a,b,c){return a.uniform1iv(b,c)},
cc:function(a,b,c){return a.uniform2fv(b,c)},
cd:function(a,b,c){return a.uniform3fv(b,c)},
ce:function(a,b,c){return a.uniform4fv(b,c)},
cf:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cg:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ci:function(a,b){return a.useProgram(b)},
cj:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cl:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},iz:{"^":"j;",$isiz:1,"%":"WebGLShader"},iP:{"^":"j;",$isiP:1,"%":"WebGLTexture"},iX:{"^":"j;",$isiX:1,"%":"WebGLUniformLocation"},j1:{"^":"j;",$isj1:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",mK:{"^":"kb;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return P.a6(this.d8(a,b))},
h:function(a,b,c){H.i(c,"$isM")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){return this.i(a,b)},
d8:function(a,b){return a.item(b)},
$asq:function(){return[[P.M,,,]]},
$ism:1,
$asm:function(){return[[P.M,,,]]},
$isa:1,
$asa:function(){return[[P.M,,,]]},
$asu:function(){return[[P.M,,,]]},
"%":"SQLResultSetRowList"},ka:{"^":"j+q;"},kb:{"^":"ka+u;"}}],["","",,G,{"^":"",
j5:function(a){var z,y,x,w
z=H.f(a.split("\n"),[P.e])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.k(z,y)
C.a.h(z,y,w+H.h(z[y]))}return C.a.a3(z,"\n")},
dY:function(a,b,c){var z,y,x,w
z=J.n(a)
y=z.bM(a,b)
z.b1(a,y,c)
z.bI(a,y)
x=H.c7(z.aY(a,y,35713))
if(x!=null&&!x){w=z.aX(a,y)
P.aL("E:Compilation failed:")
P.aL("E:"+G.j5(c))
P.aL("E:Failure:")
P.aL(C.i.L("E:",w))
throw H.d(w)}return y},
i6:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
d.w(b)
d.ad(0,a)
e.w(c)
e.ad(0,a)
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
r=Math.sqrt(e.gaM())
if(r===0)return!1
e.T(0,-1/r)
return!0},
ds:function(a,b){var z,y,x
H.t(a,"$isa",[T.c],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.f.h(b,z,J.bR(a[y]))
if(y>=a.length)return H.k(a,y)
C.f.h(b,z+1,J.ch(a[y]))
z+=2
if(y>=a.length)return H.k(a,y)
x=J.d_(a[y])
if(z>=b.length)return H.k(b,z)
b[z]=x}return b},
hi:function(a,b){var z,y
H.t(a,"$isa",[T.r],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.f.h(b,z,J.bR(a[y]))
if(y>=a.length)return H.k(a,y)
C.f.h(b,z+1,J.ch(a[y]))}return b},
hj:function(a,b){var z,y,x,w,v
H.t(a,"$isa",[T.bd],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.f.h(b,z,J.bR(a[y]))
if(y>=a.length)return H.k(a,y)
C.f.h(b,z+1,J.ch(a[y]))
x=z+2
if(y>=a.length)return H.k(a,y)
w=J.d_(a[y])
v=b.length
if(x>=v)return H.k(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.k(a,y)
w=J.fs(a[y])
if(z>=v)return H.k(b,z)
b[z]=w}return b},
hh:function(a,b){var z,y
H.t(a,"$isa",[[P.a,P.F]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.n.h(b,z,J.bn(a[y],0))
if(y>=a.length)return H.k(a,y)
C.n.h(b,z+1,J.bn(a[y],1))
if(y>=a.length)return H.k(a,y)
C.n.h(b,z+2,J.bn(a[y],2))
if(y>=a.length)return H.k(a,y)
C.n.h(b,z+3,J.bn(a[y],3))}return b},
jE:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.aw(z,[H.p(z,0)]),y=y.gD(y),x=b.x,w=[[P.a,P.F]],v=[P.a7],u=[T.bd],t=[T.c],s=[T.r];y.v();){r=y.d
if(!x.ap(0,r)){r="Dropping unnecessary attribute: "+H.h(r)
if($.er>0)H.cc("I: "+r)
continue}q=z.i(0,r)
switch($.ac().i(0,r).a){case"vec2":b.a6(r,G.hi(H.bN(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.a6(r,G.ds(H.bN(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.a6(r,G.hj(H.bN(q,"$isa",u,"$asa"),null),4)
break
case"float":b.a6(r,new Float32Array(H.c4(H.bN(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.a6(r,G.hh(H.bN(q,"$isa",w,"$asa"),null),4)
break}}},
bx:function(a,b,c){var z,y,x,w
z=G.dC(a,b.d,4,b.e.x)
z.U(G.ds(c.d,null))
y=H.t(c.cI(),"$isa",[P.F],"$asa")
x=z.d
z.y=J.cf(x.a)
w=z.ch.length
if(w<768){z.saB(new Uint8Array(H.c4(y)))
z.Q=5121}else if(w<196608){z.saB(new Uint16Array(H.c4(y)))
z.Q=5123}else{z.saB(new Uint32Array(H.c4(y)))
z.Q=5125}J.bP(x.a,z.e)
y=z.y
w=z.cx
J.cd(x.a,34963,y)
J.cY(x.a,34963,w,35048)
G.jE(c,z)
return z},
b6:{"^":"b;"},
aQ:{"^":"b6;d,a,b,c",
b9:function(){return this.d},
k:function(a){var z,y,x,w
z=H.f(["{"+new H.dR(H.kW(this)).k(0)+"}["+this.a+"]"],[P.e])
for(y=this.d,x=new H.aw(y,[H.p(y,0)]),x=x.gD(x);x.v();){w=x.d
C.a.j(z,H.h(w)+": "+H.h(y.i(0,w)))}return C.a.a3(z,"\n")}},
fT:{"^":"b;0a,b",
bV:function(a,b,c){J.fm(this.a,b)
if(c>0)J.fH(this.a,b,c)},
ck:function(a,b,c,d,e,f,g,h){J.cd(this.a,34962,b)
J.fI(this.a,c,d,e,!1,g,h)}},
hk:{"^":"b;a,b,c,d,e"},
Y:{"^":"b;am:a>,a8:b>,a9:c>",p:{
L:function(a,b,c){return new G.Y(a,b,c)}}},
aj:{"^":"b;am:a>,a8:b>,a9:c>,d"},
bw:{"^":"b;a,b,c,d,e",
N:function(a){switch($.ac().i(0,a).a){case"vec2":this.e.h(0,a,H.f([],[T.r]))
break
case"vec3":this.e.h(0,a,H.f([],[T.c]))
break
case"vec4":this.e.h(0,a,H.f([],[T.bd]))
break
case"float":this.e.h(0,a,H.f([],[P.a7]))
break
case"uvec4":this.e.h(0,a,H.f([],[[P.a,P.F]]))
break}},
cE:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)C.a.j(y,new G.aj(z,z+1,z+2,z+3))},
U:function(a){var z,y,x,w,v
H.t(a,"$isa",[T.c],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.G)(a),++x){w=a[x]
v=new T.c(new Float32Array(3))
v.w(w)
C.a.j(y,v)}},
ae:function(a,b){var z,y,x,w,v,u,t
z=[T.r]
H.t(b,"$isa",z,"$asa")
y=H.t(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.G)(b),++w){v=b[w]
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.j(y,new T.r(u))}},
af:function(a,b){var z,y,x,w,v,u
z=[T.c]
H.t(b,"$isa",z,"$asa")
y=H.t(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.G)(b),++w){v=b[w]
u=new T.c(new Float32Array(3))
u.w(v)
x.j(y,u)}},
cI:function(){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.f(x,[P.F])
for(x=z.length,v=0,u=0;u<z.length;z.length===x||(0,H.G)(z),++u){t=z[u]
C.a.h(w,v,t.a)
C.a.h(w,v+1,t.b)
C.a.h(w,v+2,t.c)
v+=3}for(z=y.length,u=0;u<y.length;y.length===z||(0,H.G)(y),++u){s=y[u]
x=s.a
C.a.h(w,v,x)
C.a.h(w,v+1,s.b)
r=s.c
C.a.h(w,v+2,r)
C.a.h(w,v+3,x)
C.a.h(w,v+4,r)
C.a.h(w,v+5,s.d)
v+=6}return w},
cK:function(a,b){var z,y,x,w,v,u,t
z=H.f([],[T.r])
this.e.h(0,"aTexUV",z)
for(y=b-1,x=a-1,w=0;w<b;++w)for(v=w/y,u=0;u<a;++u){t=new Float32Array(2)
t[0]=v
t[1]=u/x
C.a.j(z,new T.r(t))}},
cJ:function(a,b,c){var z,y,x,w,v,u,t,s,r
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
C.a.j(z,new G.aj(v+s,r+s,r+t,v+t))
t=s}w=u}},
k:function(a){var z,y,x,w,v
z=H.f(["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"],[P.e])
for(y=this.e,x=new H.aw(y,[H.p(y,0)]),x=x.gD(x);x.v();){w=x.d
v=$.ac().i(0,w).a
C.a.j(z,H.h(w)+"["+v+","+y.i(0,w).length+"]")}return C.a.a3(z," ")}},
dP:{"^":"b;a,b,c"},
dO:{"^":"b;a,b,c",p:{
cD:function(a,b,c){return new G.dO(a,b,c)}}},
dB:{"^":"aQ;d,a,b,c",p:{
cw:function(a){var z=P.T(P.e,P.b)
z.h(0,"cDepthTest",!0)
z.h(0,"cDepthWrite",!0)
z.h(0,"cBlendEquation",$.eD())
z.h(0,"cStencilFunc",$.cR())
return new G.dB(z,a,!1,!0)}}},
hS:{"^":"b6;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
saB:function(a){this.cx=H.t(a,"$isa",[P.F],"$asa")},
b6:function(a,b,c){var z,y
C.i.ay(a,0)
H.i(b,"$isak")
this.cy.h(0,a,b)
z=this.d
y=this.r.i(0,a)
J.cd(z.a,34962,y)
J.cY(z.a,34962,b,35048)},
b7:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a6:function(a,b,c){var z,y,x,w,v
z=J.cV(a,0)===105
if(z&&this.z===0)this.z=C.e.cD(b.length,c)
y=this.r
x=this.d
y.h(0,a,J.cf(x.a))
this.b6(a,b,c)
w=$.ac().i(0,a)
if(w==null)throw H.d("Unknown canonical "+a)
v=this.x.i(0,a)
J.bP(x.a,this.e)
x.bV(0,v,z?1:0)
x.ck(0,y.i(0,a),v,w.b8(),5126,!1,0,0)},
U:function(a){var z,y,x,w
z=this.r
y=this.d
z.h(0,"aPosition",J.cf(y.a))
this.ch=a
this.b6("aPosition",a,3)
x=$.ac().i(0,"aPosition")
if(x==null)throw H.d("Unknown canonical aPosition")
w=this.x.i(0,"aPosition")
J.bP(y.a,this.e)
y.bV(0,w,0)
y.ck(0,z.i(0,"aPosition"),w,x.b8(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.f(["Faces:"+(z==null?0:z.length)],[P.e])
for(z=this.cy,x=new H.aw(z,[H.p(z,0)]),x=x.gD(x);x.v();){w=x.d
C.a.j(y,H.h(w)+":"+z.i(0,w).length)}return"MESH["+this.a+"] "+C.a.a3(y,"  ")},
p:{
dC:function(a,b,c,d){var z=P.e
return new G.hS(b,J.ff(b.a),c,P.T(z,P.b),d,0,-1,P.T(z,P.ak),"meshdata:"+a,!1,!0)}}},
ib:{"^":"aQ;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cF:function(a,b){var z
if(typeof a!=="number")return a.eb()
if(typeof b!=="number")return H.bL(b)
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
b9:function(){var z,y,x
z=this.x
y=this.d
y.h(0,"uEyePosition",z.aT())
x=this.cy
x.w(z.d)
z=this.cx
z.w(this.db)
z.bX(0,x)
y.h(0,"uPerspectiveViewMatrix",z)
return y}},
bu:{"^":"b;a,b,c,d,e",
k:function(a){return"["+this.a+"] "+this.b+" "+this.c+" mode:"+this.d+" ["+this.e.a+"usec]"}},
it:{"^":"b6;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cO:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){t=z[u]
x.h(0,t,J.d0(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){t=z[u]
x.h(0,t,J.d0(w.a,v,t))}},
cR:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.f([],[P.e])
x=H.f([],[P.e])
for(y=new H.aw(y,[H.p(y,0)]),y=y.gD(y);y.v();){w=y.d
if(!z.ap(0,w))C.a.j(x,w)}for(z=this.x,z=P.jM(z,z.r,H.p(z,0)),y=this.Q;z.v();){w=z.d
if(!y.A(0,w))C.a.j(x,w)}return x},
cT:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.t(b,"$isM",[P.e,P.b],"$asM")
z=Date.now()
for(y=new H.aw(b,[H.p(b,0)]),y=y.gD(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.v();){s=y.d
switch(J.cV(s,0)){case 117:if(w.ap(0,s)){r=b.i(0,s)
if(v.ap(0,s))H.cc("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.h(0,s,a)
q=$.ac().i(0,s)
if(q==null)H.a8("unknown "+s)
p=w.i(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.Q(r)
J.cj(x.a,p,r)}else if(!!J.C(r).$ishv)J.fF(x.a,p,r)
break
case"float":if(q.c===0){H.ep(r)
J.fD(x.a,p,r)}else if(!!J.C(r).$isak)J.fE(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.aq(r,"$isO").a
J.d7(x.a,p,!1,s)}else if(!!J.C(r).$isak)J.d7(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=H.aq(r,"$isam").a
J.d6(x.a,p,!1,s)}else if(!!J.C(r).$isak)J.d6(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.d5(o,p,H.aq(r,"$isbd").a)
else J.d5(o,p,H.i(r,"$isak"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.d4(o,p,H.aq(r,"$isc").a)
else J.d4(o,p,H.i(r,"$isak"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.d3(o,p,H.aq(r,"$isr").a)
else J.d3(o,p,H.i(r,"$isak"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.bL(s)
J.cW(x.a,33984+s)
s=H.aq(r,"$iscC").b
J.bo(x.a,3553,s)
s=this.ch
J.cj(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.L()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.bL(s)
J.cW(x.a,33984+s)
s=H.aq(r,"$iscC").b
J.bo(x.a,34067,s)
s=this.ch
J.cj(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.L()
this.ch=s+1
break
default:H.cc("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.i(0,s)
switch(s){case"cDepthTest":s=J.aN(r,!0)
o=x.a
if(s)J.bp(o,2929)
else J.cg(o,2929)
break
case"cStencilFunc":H.aq(r,"$isdP")
s=r.a
o=x.a
if(s===1281)J.cg(o,2960)
else{J.bp(o,2960)
o=r.b
n=r.c
J.fz(x.a,s,o,n)}break
case"cDepthWrite":H.c7(r)
J.fg(x.a,r)
break
case"cBlendEquation":H.aq(r,"$isdO")
s=r.a
o=x.a
if(s===1281)J.cg(o,3042)
else{J.bp(o,3042)
o=r.b
n=r.c
J.f9(x.a,o,n)
J.f8(x.a,s)}break}++t
break}}m=P.dk(0,0,0,Date.now()-new P.bs(z,!1).a,0,0)
""+t
m.k(0)},
cH:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
H.t(b,"$isa",[G.aQ],"$asa")
H.t(c,"$isa",[G.bu],"$asa")
z=Date.now()
y=this.d
J.fG(y.a,this.r)
this.ch=0
x=this.z
if(x.a>0){x.f=null
x.e=null
x.d=null
x.c=null
x.b=null
x.a=0
x.bg()}for(x=b.length,w=0;w<b.length;b.length===x||(0,H.G)(b),++w){v=b[w]
this.cT(v.a,v.b9())}x=this.Q
x.aa(0)
for(u=a.cy,u=new H.aw(u,[H.p(u,0)]),u=u.gD(u);u.v();)x.j(0,u.d)
t=this.cR()
if(t.length!==0)P.aL("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.h(t)))
J.bP(a.d.a,a.e)
s=this.e.f.length>0
x=a.f
u=a.b7()
r=a.Q
q=a.z
if(s)J.f6(y.a,x)
if(r!==-1){p=y.a
if(q>1)J.fk(p,x,u,r,0,q)
else J.fj(p,x,u,r,0)}else{r=y.a
if(q>1)J.fi(r,x,0,u,q)
else J.fh(r,x,0,u)}if(s)J.fn(y.a)
C.a.j(c,new G.bu(this.a,a.z,a.b7(),x,P.dk(0,0,0,Date.now()-new P.bs(z,!1).a,0,0)))},
p:{
dH:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.e
y=P.a9(null,null,null,z)
x=c.b
w=d.b
v=H.t(c.f,"$isa",[z],"$asa")
u=J.fd(b.a)
t=G.dY(b.a,35633,x)
J.cX(b.a,u,t)
s=G.dY(b.a,35632,w)
J.cX(b.a,u,s)
if(v.length>0)J.fC(b.a,u,v,35980)
J.fx(b.a,u)
if(!H.c7(J.fw(b.a,u,35714)))H.a8(J.fv(b.a,u))
z=new G.it(b,c,d,u,P.cu(c.c,z),P.T(z,P.b),P.T(z,z),y,a,!1,!0)
z.cO(a,b,c,d)
return z}}},
E:{"^":"b;a,b,c",
b8:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
iA:{"^":"b;a,0b,c,d,e,f,r,x",
b4:function(a){var z,y,x,w,v
H.t(a,"$isa",[P.e],"$asa")
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.G)(a),++w){v=a[w]
C.a.j(y,v)
x.h(0,v,this.r);++this.r}C.a.at(y)},
ag:function(a){var z,y,x
H.t(a,"$isa",[P.e],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.G)(a),++x)C.a.j(y,a[x])
C.a.at(y)},
b5:function(a){var z,y
H.t(a,"$isa",[P.e],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.j(z,a[y])
C.a.at(z)},
cP:function(a,b){this.b=this.bb(!0,H.t(a,"$isa",[P.e],"$asa"),b)},
av:function(a){return this.cP(a,null)},
bb:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.e]
H.t(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.f(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.G)(y),++u){t=y[u]
s=$.ac().i(0,t)
C.a.j(w,"layout (location="+H.h(v.i(0,t))+") in "+s.a+" "+H.h(t)+";")}C.a.j(w,"")
r=x?"in":"out"
if(x)C.a.j(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){q=z[u]
s=$.ac().i(0,q)
C.a.j(w,r+" "+s.a+" "+H.h(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){q=z[u]
s=$.ac().i(0,q)
C.a.j(w,r+" "+s.a+" "+H.h(q)+";")}C.a.j(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){q=z[u]
s=$.ac().i(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.j(w,"uniform "+s.a+" "+H.h(q)+p+";")}C.a.j(w,"")
if(a)C.a.j(w,"void main(void) {")
C.a.I(w,b)
if(a)C.a.j(w,"}")
return C.a.a3(w,"\n")},
p:{
c_:function(a){var z,y
z=P.e
y=[z]
return new G.iA(a,H.f([],y),H.f([],y),H.f([],y),H.f([],y),0,P.T(z,P.F))}}},
dJ:{"^":"b6;",
aT:function(){var z,y,x
z=this.e
y=this.d.a
x=z.a
x[0]=y[12]
x[1]=y[13]
x[2]=y[14]
return z},
a_:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}},
iQ:{"^":"b;a,b,c,d,e,f,r"},
cC:{"^":"b;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
ht:{"^":"cC;f,a,b,c,d,e",p:{
bW:function(a,b,c,d,e){var z=J.fe(a.a)
J.bo(a.a,e,z)
J.fy(a.a,37440,1)
J.bo(a.a,e,z)
J.fA(a.a,e,0,6408,6408,5121,c)
J.d2(a.a,e,10240,9729)
J.d2(a.a,e,10241,9729)
J.fu(a.a)
J.bo(a.a,e,null)
return new G.ht(c,b,z,e,a,new G.iQ(!1,!1,!1,!0,1,9729,9729))}}}}],["","",,R,{"^":"",
j0:function(a,b,c){var z,y,x,w,v,u
z="stars_"+b
y=b*3
x=new Float32Array(y)
for(w=x.length,v=0;v<y;++v){u=$.eW().dX()
if(v>=w)return H.k(x,v)
x[v]=(u-0.5)*c}y=G.dC(z,a.d,0,a.e.x)
y.U(x)
return y},
jO:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.i(W.jm("span",null),"$isX")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.z).ax(y,"float")
y.setProperty(x,"left","")
x=C.z.ax(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.r.K(z,v)}return z},
is:{"^":"ir;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
e1:[function(a){var z,y,x
z=this.db
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.aL("size change "+H.h(y)+" "+H.h(x))
this.dx.cF(y,x)
this.z=y
this.Q=x},"$1","ge0",4,0,12]},
iF:{"^":"b;",
cQ:function(a,b,c){var z,y
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
iG:{"^":"iF;e,f,a,b,c,d",
cS:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.A.e7(y,2)+" fps"
C.r.cq(this.c,b)
x=C.e.a1(30*C.A.dC(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.i(z.firstChild,"$isX")
v=w.style
u=""+x+"px"
v.height=u
C.r.K(z,w)}}}],["","",,A,{"^":"",
eq:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.t(d,"$isa",[G.bu],"$asa")
H.t(e,"$isa",[G.aQ],"$asa")
z=b.dx
z.w(c)
y=b.d
z.bX(0,y)
x=b.cx
H.h(b)
w=C.a.gdV(e)
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
v.dG(new T.am(u))
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
a.cH(x,e,d)
if(0>=e.length)return H.k(e,-1)
e.pop()
for(y=b.cy,r=0;!1;++r){if(r>=0)return H.k(y,r)
A.eq(a,y[r],z,d,e)}},
az:{"^":"dJ;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
k:function(a){return"NODE["+this.a+"]"}},
cz:{"^":"b6;d,e,f,a,b,c"},
ir:{"^":"b6;",
cN:function(a,b,c){if(this.d==null)this.d=new G.hk(this.e,null,null,null,null)},
cG:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
H.t(a,"$isa",[G.bu],"$asa")
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.f7(v.a,36160,z)
J.fJ(v.a,this.x,this.y,x,w)
if(y!==0)J.fa(v.a,y)
for(z=this.f,y=z.length,x=P.e,w=P.b,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){t=z[u]
s=t.e
C.a.j(s,new G.aQ(P.T(x,w),"transforms",!1,!0))
r=new T.O(new Float32Array(16))
r.F()
for(v=t.f,q=v.length,p=t.d,o=0;o<v.length;v.length===q||(0,H.G)(v),++o)A.eq(p,v[o],r,a,s)
if(0>=s.length)return H.k(s,-1)
s.pop()}}}}],["","",,V,{}],["","",,B,{"^":"",
h2:function(a5,a6,a7,a8,a9,b0,b1,b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
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
a0=H.f([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a],t)
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
a1=H.f([z,y,x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b],[T.r])
a2=new G.bw(!1,H.f([],[G.Y]),H.f([],[G.aj]),H.f([],t),P.T(P.e,[P.a,,]))
a2.N("aTexUV")
a2.N("aNormal")
a2.cE(6)
a2.U(a0)
a2.ae("aTexUV",a1)
for(a3=0;z=$.eX(),a3<6;++a3){a4=z[a3]
a2.af("aNormal",H.f([a4,a4,a4,a4],t))}return a2},
h4:function(a,b,c,a0,a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=c/2
y=[T.c]
x=H.f([],y)
w=H.f([],[T.r])
v=H.f([],y)
u=new T.c(new Float32Array(3))
u.q(0,z,0)
C.a.j(x,u)
u=new T.r(new Float32Array(2))
u.t(0,0)
C.a.j(w,u)
u=new T.c(new Float32Array(3))
u.q(0,1,0)
C.a.j(v,u)
u=-z
t=new T.c(new Float32Array(3))
t.q(0,u,0)
C.a.j(x,t)
t=new T.r(new Float32Array(2))
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
C.a.j(w,new T.r(t))
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
C.a.j(w,new T.r(t))
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
G.i6(m,l,k,new T.c(t),j)
C.a.j(v,j)
C.a.j(v,j)}u=H.f([],[G.Y])
t=H.f([],[G.aj])
i=new G.bw(!1,u,t,H.f([],y),P.T(P.e,[P.a,,]))
i.N("aTexUV")
i.U(x)
i.ae("aTexUV",w)
i.N("aNormal")
i.af("aNormal",v)
for(h=a0*2,s=0;s<a0;s=f){g=s*2+2
l=g+1
f=s+1
e=(f===a0?0:f)*2+2
d=e+1
C.a.j(u,new G.Y(0,g,e))
C.a.j(u,new G.Y(1,d,l))
C.a.j(t,new G.aj(h+e,h+g,h+l,h+d))}return i},
hs:function(a1,a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=[G.Y]
y=H.f([],z)
x=[T.c]
w=H.f([],x)
C.a.I(y,$.eK())
C.a.I(w,$.eL())
for(v=0;v<a3;++v,y=u){u=H.f([],z)
for(t=y.length,s=0;s<y.length;y.length===t||(0,H.G)(y),++s){r=y[s]
q=J.cZ(r)
if(q>=w.length)return H.k(w,q)
q=w[q]
p=new T.c(new Float32Array(3))
p.w(q)
q=r.ga8(r)
if(q>=w.length)return H.k(w,q)
p.j(0,w[q])
p.T(0,0.5)
p.C(0)
q=r.ga8(r)
if(q>=w.length)return H.k(w,q)
q=w[q]
o=new T.c(new Float32Array(3))
o.w(q)
q=r.ga9(r)
if(q>=w.length)return H.k(w,q)
o.j(0,w[q])
o.T(0,0.5)
o.C(0)
q=r.ga9(r)
if(q>=w.length)return H.k(w,q)
q=w[q]
n=new T.c(new Float32Array(3))
n.w(q)
q=r.gam(r)
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
C.a.j(u,new G.Y(r.gam(r),m,k))
C.a.j(u,new G.Y(r.ga8(r),l,m))
C.a.j(u,new G.Y(r.ga9(r),k,l))
C.a.j(u,new G.Y(m,l,k))}}z=H.f([],z)
t=H.f([],[G.aj])
q=H.f([],x)
j=new G.bw(!1,z,t,q,P.T(P.e,[P.a,,]))
j.N("aTexUV")
j.N("aNormal")
for(t=y.length,i=[T.r],s=0;s<y.length;y.length===t||(0,H.G)(y),++s){r=y[s]
h=J.cZ(r)
if(h>=w.length)return H.k(w,h)
g=w[h]
h=r.ga8(r)
if(h>=w.length)return H.k(w,h)
f=w[h]
h=r.ga9(r)
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
j.af("aNormal",H.f([g,f,e],x))
h=new T.c(new Float32Array(3))
h.w(g)
h.T(0,a2)
d=new T.c(new Float32Array(3))
d.w(f)
d.T(0,a2)
a0=new T.c(new Float32Array(3))
a0.w(e)
a0.T(0,a2)
a0=H.t(H.f([h,d,a0],x),"$isa",x,"$asa")
v=q.length
C.a.j(z,new G.Y(v,v+1,v+2))
j.U(a0)
j.ae("aTexUV",H.f([new T.r(c),new T.r(b),new T.r(a)],i))}return j},
iR:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=B.i9(new B.iS(e,d,f,c),0,6.283185307179586,g,0.001,!0)
y=z.length
if(0>=y)return H.k(z,0)
C.a.j(z,z[0])
if(1>=z.length)return H.k(z,1)
C.a.j(z,z[1])
x=g+1
w=B.iT(z,h,i)
for(y=w.length,v=0;v<w.length;w.length===y||(0,H.G)(w),++v){u=w[v]
if(0>=u.length)return H.k(u,0)
C.a.j(u,u[0])
if(1>=u.length)return H.k(u,1)
C.a.j(u,u[1])}t=h+1
y=H.f([],[G.Y])
s=H.f([],[G.aj])
r=[T.c]
q=H.f([],r)
p=new G.bw(!1,y,s,q,P.T(P.e,[P.a,,]))
for(y=w.length,v=0;v<w.length;w.length===y||(0,H.G)(w),++v){o=w[v]
for(n=0;n<o.length;n+=2){s=H.i(o[n],"$isc")
s.toString
m=new T.c(new Float32Array(3))
m.w(s)
C.a.j(q,m)}}p.cJ(t,x,!1)
p.cK(t,x)
p.N("aNormal")
for(y=w.length,s=p.e,v=0;v<w.length;w.length===y||(0,H.G)(w),++v){o=w[v]
for(n=0;q=o.length,n<q;n+=2){m=n+1
if(m>=q)return H.k(o,m)
m=H.i(o[m],"$isc")
l=H.t(s.i(0,"aNormal"),"$isa",r,"$asa")
m.toString
q=new T.c(new Float32Array(3))
q.w(m);(l&&C.a).j(l,q)}}return p},
iT:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=[T.c]
H.t(a,"$isa",z,"$asa")
y=H.f([],[[P.a,T.c]])
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
w.w(p)
w.ao(u,g)
w.ao(s,f)
q=new T.c(new Float32Array(3))
q.w(w)
C.a.j(m,q)
x[2]=0
x[1]=0
x[0]=0
w.ao(u,g)
w.ao(s,f)
w.C(0)
q=new T.c(new Float32Array(3))
q.w(w)
C.a.j(m,q)}}return y},
i9:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
H.l(a,{func:1,ret:-1,args:[P.a7,T.c]})
z=H.f([],[T.c])
y=new T.c(new Float32Array(3))
x=new T.c(new Float32Array(3))
for(w=(c-b)/(d-0),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+e,x)
x.ad(0,y)
t=new T.c(new Float32Array(3))
t.w(y)
C.a.j(z,t)
t=new T.c(new Float32Array(3))
t.w(x)
C.a.j(z,t)}return z},
iS:{"^":"o:27;a,b,c,d",
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
b.sY(0,y*u)
b.sar(0,this.d*z*0.5*w)}}}],["","",,D,{"^":"",
cv:function(a){var z,y,x,w
z=W.al
y=new P.U(0,$.D,[z])
x=document.createElement("img")
w=new W.bE(x,"load",!1,[W.S])
w.gdQ(w).X(new D.hJ(new P.j6(y,[z]),x),-1)
x.src=a
return y},
hJ:{"^":"o:12;a,b",
$1:function(a){H.i(a,"$isS")
return this.a.dE(0,this.b)}},
hC:{"^":"b;a,b,c",
cL:function(a){var z,y
a=document
z=W.b4
y={func:1,ret:-1,args:[z]}
W.an(a,"keydown",H.l(new D.hE(this),y),!1,z)
W.an(a,"keyup",H.l(new D.hF(this),y),!1,z)},
p:{
hD:function(a){var z=P.F
z=new D.hC(P.a9(null,null,null,z),P.a9(null,null,null,z),P.a9(null,null,null,z))
z.cL(a)
return z}}},
hE:{"^":"o:13;a",
$1:function(a){var z
H.i(a,"$isb4")
z=this.a
z.a.j(0,a.which)
z.b.j(0,a.which)}},
hF:{"^":"o:13;a",
$1:function(a){var z
H.i(a,"$isb4")
z=this.a
z.a.c3(0,a.which)
z.c.j(0,a.which)}},
hV:{"^":"b;a,b,c,d,e,f,r,x",
cM:function(a){var z,y,x
if(a==null)a=document
z=J.n(a)
y=z.gc_(a)
x=H.p(y,0)
W.an(y.a,y.b,H.l(new D.hX(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbZ(a)
y=H.p(x,0)
W.an(x.a,x.b,H.l(new D.hY(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gc0(a)
x=H.p(y,0)
W.an(y.a,y.b,H.l(new D.hZ(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gc1(a)
x=H.p(z,0)
W.an(z.a,z.b,H.l(new D.i_(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
hW:function(a){var z=P.F
z=new D.hV(P.a9(null,null,null,z),P.a9(null,null,null,z),P.a9(null,null,null,z),0,0,0,0,0)
z.cM(a)
return z}}},
hX:{"^":"o:3;a",
$1:function(a){var z,y
H.i(a,"$isa_")
a.preventDefault()
z=this.a
y=J.n(a)
z.r=H.Q(y.gbY(a).a)
z.x=H.Q(y.gbY(a).b)
z.d=a.movementX
z.e=a.movementY}},
hY:{"^":"o:3;a",
$1:function(a){var z
H.i(a,"$isa_")
a.preventDefault()
P.aL("BUTTON "+H.h(a.button))
z=this.a
z.a.j(0,a.button)
z.b.j(0,a.button)}},
hZ:{"^":"o:3;a",
$1:function(a){var z
H.i(a,"$isa_")
a.preventDefault()
z=this.a
z.a.c3(0,a.button)
z.c.j(0,a.button)}},
i_:{"^":"o:28;a",
$1:function(a){H.i(a,"$isaR")
a.preventDefault()
this.a.f=H.Q(C.af.gdL(a))}},
i8:{"^":"dJ;ch,cx,cy,db,dx,dy,fr,fx,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bK:function(a){var z,y
z=C.f.dR(H.t(a,"$ism",[P.b],"$asm"),0,new A.kY(),P.F)
if(typeof z!=="number")return H.bL(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kY:{"^":"o:29;",
$2:function(a,b){var z,y
H.Q(a)
z=J.ar(b)
if(typeof a!=="number")return a.L()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",am:{"^":"b;a",
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
i:function(a,b){var z=this.a
if(b>=9)return H.k(z,b)
return z[b]},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.am){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gB:function(a){return A.bK(this.a)},
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
dG:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
return m}},O:{"^":"b;a",
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
i:function(a,b){var z=this.a
if(b>=16)return H.k(z,b)
return z[b]},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.O){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gB:function(a){return A.bK(this.a)},
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
return new T.bd(z)},
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
bX:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},r:{"^":"b;a",
t:function(a,b){var z=this.a
z[0]=a
z[1]=b},
k:function(a){var z=this.a
return"["+H.h(z[0])+","+H.h(z[1])+"]"},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.r){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gB:function(a){return A.bK(this.a)},
i:function(a,b){var z=this.a
if(b>=2)return H.k(z,b)
return z[b]},
gl:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
ga4:function(a){return this.a[0]},
gY:function(a){return this.a[1]}},c:{"^":"b;a",
q:function(a,b,c){var z=this.a
C.f.h(z,0,a)
C.f.h(z,1,b)
C.f.h(z,2,c)},
w:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.h(z[0])+","+H.h(z[1])+","+H.h(z[2])+"]"},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.c){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gB:function(a){return A.bK(this.a)},
i:function(a,b){var z=this.a
if(b>=3)return H.k(z,b)
return z[b]},
gl:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gaM:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
C:function(a){var z,y,x
z=Math.sqrt(this.gaM())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aK:function(a){var z,y
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
z=new T.c(new Float32Array(3))
z.q(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
j:function(a,b){var z,y
z=H.i(b,"$isc").a
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
ao:function(a,b){var z,y
z=a.a
y=this.a
y[0]=y[0]+z[0]*b
y[1]=y[1]+z[1]*b
y[2]=y[2]+z[2]*b},
ad:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
T:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
sa4:function(a,b){this.a[0]=b
return b},
sY:function(a,b){this.a[1]=b
return b},
sar:function(a,b){this.a[2]=b
return b},
ga4:function(a){return this.a[0]},
gY:function(a){return this.a[1]},
gar:function(a){return this.a[2]},
p:{
K:function(a,b,c){var z=new T.c(new Float32Array(3))
z.q(a,b,c)
return z}}},bd:{"^":"b;a",
k:function(a){var z=this.a
return H.h(z[0])+","+H.h(z[1])+","+H.h(z[2])+","+H.h(z[3])},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.bd){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gB:function(a){return A.bK(this.a)},
i:function(a,b){var z=this.a
if(b>=4)return H.k(z,b)
return z[b]},
gl:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
ga4:function(a){return this.a[0]},
gY:function(a){return this.a[1]},
gar:function(a){return this.a[2]},
gea:function(a){return this.a[3]}}}],["","",,V,{"^":"",
hL:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.t(a3,"$isa",[G.aQ],"$asa")
z=G.dH("textured",a2,$.f2(),$.f1())
y=[A.az]
x=H.f([],y)
w=G.cw("wood")
w.d.h(0,"uColor",$.eF())
v=D.cv("../wood.jpg")
v.X(new V.hM(a2,w),null)
u=$.cU()
C.a.j(u,v)
t=G.cw("gradient")
t.d.h(0,"uColor",$.eH())
s=D.cv("../gradient.jpg")
s.X(new V.hN(a2,t),null)
C.a.j(u,s)
r=G.cw("trans")
q=r.d
q.h(0,"uColor",$.eG())
q.h(0,"cBlendEquation",$.eE())
p=D.cv("../transparent.png")
p.X(new V.hO(a2,r),null)
C.a.j(u,p)
u=G.bx("icosahedron-3",z,B.hs(!0,1,3))
q=H.f([],y)
o=new Float32Array(9)
n=new T.O(new Float32Array(16))
n.F()
m=new T.O(new Float32Array(16))
m.F()
l=new Float32Array(3)
k=new Float32Array(3)
j=new Float32Array(3)
i=new A.az(w,u,q,new T.am(o),n,m,new T.c(l),new T.c(k),new T.c(j),new T.c(new Float32Array(3)),"sphere",!1,!0)
i.a_(0,0,0)
C.a.j(x,i)
u=G.bx("cube",z,B.h2(!0,1,0,1,0,1,1,1))
q=H.f([],y)
o=new Float32Array(9)
n=new T.O(new Float32Array(16))
n.F()
m=new T.O(new Float32Array(16))
m.F()
l=new Float32Array(3)
k=new Float32Array(3)
j=new Float32Array(3)
h=new A.az(t,u,q,new T.am(o),n,m,new T.c(l),new T.c(k),new T.c(j),new T.c(new Float32Array(3)),"cube",!1,!0)
h.a_(-5,0,-5)
C.a.j(x,h)
u=G.bx("cylinder-32",z,B.h4(3,6,2,32,!0))
q=H.f([],y)
o=new Float32Array(9)
n=new T.O(new Float32Array(16))
n.F()
m=new T.O(new Float32Array(16))
m.F()
l=new Float32Array(3)
k=new Float32Array(3)
j=new Float32Array(3)
g=new A.az(r,u,q,new T.am(o),n,m,new T.c(l),new T.c(k),new T.c(j),new T.c(new Float32Array(3)),"cylinder",!1,!0)
g.a_(5,0,-5)
C.a.j(x,g)
u=new T.c(new Float32Array(3))
u.q(-2,-2,0)
q=new T.c(new Float32Array(3))
q.q(2,-2,0)
o=new T.c(new Float32Array(3))
o.q(2,2,0)
n=new T.c(new Float32Array(3))
n.q(-2,2,0)
m=[T.c]
f=H.f([u,q,o,n],m)
u=new T.r(new Float32Array(2))
u.t(0,0)
q=new T.r(new Float32Array(2))
q.t(1,0)
o=new T.r(new Float32Array(2))
o.t(1,1)
n=new T.r(new Float32Array(2))
n.t(0,1)
e=H.f([u,q,o,n],[T.r])
d=new T.c(new Float32Array(3))
d.q(0,0,1)
c=H.f([d,d,d,d],m)
u=H.f([],[G.Y])
q=H.f([],[G.aj])
o=H.f([],m)
b=new G.bw(!1,u,q,o,P.T(P.e,[P.a,,]))
b.N("aTexUV")
H.t(f,"$isa",m,"$asa")
a=o.length
C.a.j(q,new G.aj(a,a+1,a+2,a+3))
b.U(f)
b.ae("aTexUV",e)
b.N("aNormal")
b.af("aNormal",c)
q=G.bx("quad",z,b)
o=H.f([],y)
u=new Float32Array(9)
n=new T.O(new Float32Array(16))
n.F()
m=new T.O(new Float32Array(16))
m.F()
l=new Float32Array(3)
k=new Float32Array(3)
j=new Float32Array(3)
a0=new A.az(r,q,o,new T.am(u),n,m,new T.c(l),new T.c(k),new T.c(j),new T.c(new Float32Array(3)),"quad",!1,!0)
a0.a_(-5,0,5)
C.a.j(x,a0)
u=G.bx("torusknot",z,B.iR(!0,!0,1,2,3,1,128,16,0.4,!1))
y=H.f([],y)
q=new Float32Array(9)
o=new T.O(new Float32Array(16))
o.F()
n=new T.O(new Float32Array(16))
n.F()
m=new Float32Array(3)
l=new Float32Array(3)
k=new Float32Array(3)
a1=new A.az(t,u,y,new T.am(q),o,n,new T.c(m),new T.c(l),new T.c(k),new T.c(new Float32Array(3)),"torus",!1,!0)
a1.a_(5,0,5)
C.a.j(x,a1)
return new A.cz(z,a3,x,"objects",!1,!0)},
ex:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z={}
y=document
x=C.t.co(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.iG(0,0,x,w,y.createElement("div"),R.jO("blue","gray",90,30))
u.cQ(x,"blue","gray")
t=H.i(C.t.dZ(y,"#webgl-canvas"),"$isbr")
s=new G.fT(t)
x=P.e
v=P.b
r=(t&&C.y).aR(t,"webgl2",P.dx(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],x,v))
s.a=r
if(r==null)H.a8(P.dq('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
q="ChronosGL Config: "+H.h(J.ft(r))
if($.er>0)P.aL("I: "+q)
J.fb(r,0,0,0,1)
J.bp(r,2929)
J.bp(r,2884)
r=new Float32Array(3)
q=D.hD(null)
p=D.hW(t)
o=new T.O(new Float32Array(16))
o.F()
n=new Float32Array(3)
m=new Float32Array(3)
l=new Float32Array(3)
k=new D.i8(25,10,0,0,new T.c(r),-0.02,q,p,o,new T.c(n),new T.c(m),new T.c(l),new T.c(new Float32Array(3)),"camera:orbit",!1,!0)
r=new T.O(new Float32Array(16))
r.F()
q=new T.O(new Float32Array(16))
q.F()
j=new G.ib(k,50,1,0.1,1000,r,q,new T.O(new Float32Array(16)),P.T(x,v),"perspective",!1,!0)
j.ba()
r=H.f([],[A.cz])
i=new R.is(t,j,null,s,r,17664,0,0,0,0,"main",!1,!0)
i.cN("main",s,null)
i.e1(null)
q=W.S
W.an(window,"resize",H.l(i.ge0(),{func:1,ret:-1,args:[q]}),!1,q)
q=[G.aQ]
C.a.j(r,V.hL(s,H.f([j],q)))
p=G.dH("stars",s,$.f_(),$.eZ())
q=H.f([j],q)
o=[A.az]
n=H.f([],o)
m=$.eC()
x=P.T(x,v)
x.h(0,"cDepthTest",!0)
x.h(0,"cDepthWrite",!1)
x.h(0,"cBlendEquation",m)
x.h(0,"cStencilFunc",$.cR())
h=y.createElement("canvas")
h.width=64
h.height=64
g=H.i(C.y.cn(h,"2d"),"$iscm")
f=(g&&C.q).bL(g,32,32,1,32,32,22);(f&&C.m).an(f,0,"gray")
C.m.an(f,1,"black")
g.fillStyle=f
C.q.dP(g,0,0,64,64)
f=C.q.bL(g,32,32,1,32,32,6);(f&&C.m).an(f,0,"white")
C.m.an(f,1,"gray")
g.globalAlpha=0.9
g.fillStyle=f
g.arc(32,32,4,0,6.283185307179586,!1)
g.fill()
x.h(0,"uTexture",G.bW(p.d,"Utils::Particles",h,null,3553))
x.h(0,"uPointSize",1000)
e=R.j0(p,2000,100)
y=H.f([],o)
o=new Float32Array(9)
m=new T.O(new Float32Array(16))
m.F()
l=new T.O(new Float32Array(16))
l.F()
d=new Float32Array(3)
c=new Float32Array(3)
b=new Float32Array(3)
C.a.j(n,new A.az(new G.dB(x,"stars",!1,!0),e,y,new T.am(o),m,l,new T.c(d),new T.c(c),new T.c(b),new T.c(new Float32Array(3)),e.a,!1,!0))
C.a.j(r,new A.cz(p,q,n,"stars",!1,!0))
z.a=0
P.hm($.cU(),null,!1,v).X(new V.lb(new V.la(z,k,i,u)),null)},
hM:{"^":"o:4;a,b",
$1:function(a){this.b.d.h(0,"uTexture",G.bW(this.a,"../wood.jpg",H.i(a,"$isal"),null,3553))}},
hN:{"^":"o:4;a,b",
$1:function(a){this.b.d.h(0,"uTexture",G.bW(this.a,"../gradient.jpg",H.i(a,"$isal"),null,3553))}},
hO:{"^":"o:4;a,b",
$1:function(a){this.b.d.h(0,"uTexture",G.bW(this.a,"../transparent.png",H.i(a,"$isal"),null,3553))}},
la:{"^":"o:30;a,b,c,d",
$1:function(b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
H.cO(b2)
if(typeof b2!=="number")return b2.b3()
z=this.a
z.a=b2+0
y=this.b
y.cx+=0.001
x=y.fx
w=x.a
if(w.A(0,0)||w.A(0,1)){w=y.cx
v=x.d
if(typeof v!=="number")return v.b_()
y.cx=w+v*0.01
v=y.cy
w=x.e
if(typeof w!=="number")return w.b_()
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
if(typeof v!=="number")return v.b_()
v=y.ch-v*y.dy
if(v>0)y.ch=v
v=C.u.dD(y.cy,-1.4707963267948965,1.4707963267948965)
y.cy=v
u=y.ch
t=y.cx
s=u*Math.cos(v)
y.a_(s*Math.cos(t),u*Math.sin(v),s*Math.sin(t))
t=y.dx
v=y.d.a
u=t.a
v[12]=v[12]+u[0]
v[13]=v[13]+u[1]
v[14]=v[14]+u[2]
r=new T.c(new Float32Array(3))
r.q(0,1,0)
u=y.aT()
q=new Float32Array(3)
p=new T.c(q)
p.w(u)
p.ad(0,t)
p.C(0)
o=r.bO(p)
o.C(0)
n=p.bO(o)
n.C(0)
t=o.aK(u)
m=n.aK(u)
u=p.aK(u)
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
d=Math.sqrt(k.gaM())
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
a9=H.f([],[G.bu])
this.c.cG(a9)
b0=H.f([],[P.e])
for(y=a9.length,b1=0;b1<a9.length;a9.length===y||(0,H.G)(a9),++b1)C.a.j(b0,a9[b1].k(0))
C.ag.gdt(window).X(this,-1)
this.d.cS(z.a,C.a.a3(b0,"<br>"))}},
lb:{"^":"o:31;a",
$1:function(a){H.aY(a)
this.a.$1(0)}}},1]]
setupProgram(dart,0,0)
J.C=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.du.prototype
return J.dt.prototype}if(typeof a=="string")return J.bB.prototype
if(a==null)return J.hA.prototype
if(typeof a=="boolean")return J.hz.prototype
if(a.constructor==Array)return J.bz.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bC.prototype
return a}if(a instanceof P.b)return a
return J.c9(a)}
J.bk=function(a){if(typeof a=="string")return J.bB.prototype
if(a==null)return a
if(a.constructor==Array)return J.bz.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bC.prototype
return a}if(a instanceof P.b)return a
return J.c9(a)}
J.es=function(a){if(a==null)return a
if(a.constructor==Array)return J.bz.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bC.prototype
return a}if(a instanceof P.b)return a
return J.c9(a)}
J.kU=function(a){if(typeof a=="number")return J.bA.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.bc.prototype
return a}
J.kV=function(a){if(typeof a=="number")return J.bA.prototype
if(typeof a=="string")return J.bB.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.bc.prototype
return a}
J.et=function(a){if(typeof a=="string")return J.bB.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.bc.prototype
return a}
J.n=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bC.prototype
return a}if(a instanceof P.b)return a
return J.c9(a)}
J.bJ=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.bc.prototype
return a}
J.aN=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.C(a).G(a,b)}
J.ad=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kU(a).Z(a,b)}
J.bn=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.l7(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bk(a).i(a,b)}
J.cV=function(a,b){return J.et(a).ay(a,b)}
J.bO=function(a,b){return J.n(a).de(a,b)}
J.f3=function(a,b,c,d){return J.n(a).df(a,b,c,d)}
J.f4=function(a,b,c){return J.n(a).dg(a,b,c)}
J.cW=function(a,b){return J.n(a).bw(a,b)}
J.f5=function(a,b,c,d){return J.n(a).dq(a,b,c,d)}
J.cX=function(a,b,c){return J.n(a).by(a,b,c)}
J.f6=function(a,b){return J.n(a).dv(a,b)}
J.cd=function(a,b,c){return J.n(a).bz(a,b,c)}
J.f7=function(a,b,c){return J.n(a).bB(a,b,c)}
J.bo=function(a,b,c){return J.n(a).bC(a,b,c)}
J.bP=function(a,b){return J.n(a).dA(a,b)}
J.f8=function(a,b){return J.n(a).bD(a,b)}
J.f9=function(a,b,c){return J.n(a).bE(a,b,c)}
J.cY=function(a,b,c,d){return J.n(a).bF(a,b,c,d)}
J.fa=function(a,b){return J.n(a).bG(a,b)}
J.fb=function(a,b,c,d,e){return J.n(a).bH(a,b,c,d,e)}
J.fc=function(a,b){return J.kV(a).O(a,b)}
J.ce=function(a,b,c){return J.bk(a).dF(a,b,c)}
J.cf=function(a){return J.n(a).bJ(a)}
J.fd=function(a){return J.n(a).bK(a)}
J.fe=function(a){return J.n(a).bN(a)}
J.ff=function(a){return J.n(a).dK(a)}
J.fg=function(a,b){return J.n(a).bP(a,b)}
J.cg=function(a,b){return J.n(a).bQ(a,b)}
J.fh=function(a,b,c,d){return J.n(a).bR(a,b,c,d)}
J.fi=function(a,b,c,d,e){return J.n(a).dM(a,b,c,d,e)}
J.fj=function(a,b,c,d,e){return J.n(a).bS(a,b,c,d,e)}
J.fk=function(a,b,c,d,e,f){return J.n(a).dN(a,b,c,d,e,f)}
J.fl=function(a,b){return J.es(a).u(a,b)}
J.bp=function(a,b){return J.n(a).bT(a,b)}
J.fm=function(a,b){return J.n(a).bU(a,b)}
J.fn=function(a){return J.n(a).dO(a)}
J.fo=function(a,b){return J.n(a).H(a,b)}
J.cZ=function(a){return J.bJ(a).gam(a)}
J.fp=function(a){return J.n(a).gdu(a)}
J.ar=function(a){return J.C(a).gB(a)}
J.bQ=function(a){return J.es(a).gD(a)}
J.b_=function(a){return J.bk(a).gl(a)}
J.fq=function(a){return J.n(a).gdY(a)}
J.fr=function(a){return J.n(a).ge5(a)}
J.fs=function(a){return J.bJ(a).gea(a)}
J.bR=function(a){return J.bJ(a).ga4(a)}
J.ch=function(a){return J.bJ(a).gY(a)}
J.d_=function(a){return J.bJ(a).gar(a)}
J.ci=function(a,b){return J.n(a).a5(a,b)}
J.ft=function(a){return J.n(a).as(a)}
J.fu=function(a){return J.n(a).aS(a)}
J.fv=function(a,b){return J.n(a).aU(a,b)}
J.fw=function(a,b,c){return J.n(a).aV(a,b,c)}
J.d0=function(a,b,c){return J.n(a).aZ(a,b,c)}
J.fx=function(a,b){return J.n(a).bW(a,b)}
J.fy=function(a,b,c){return J.n(a).c2(a,b,c)}
J.d1=function(a){return J.n(a).e_(a)}
J.fz=function(a,b,c,d){return J.n(a).b2(a,b,c,d)}
J.fA=function(a,b,c,d,e,f,g){return J.n(a).c5(a,b,c,d,e,f,g)}
J.d2=function(a,b,c,d){return J.n(a).c6(a,b,c,d)}
J.fB=function(a){return J.et(a).e6(a)}
J.bq=function(a){return J.C(a).k(a)}
J.fC=function(a,b,c,d){return J.n(a).e8(a,b,c,d)}
J.fD=function(a,b,c){return J.n(a).c8(a,b,c)}
J.fE=function(a,b,c){return J.n(a).c9(a,b,c)}
J.cj=function(a,b,c){return J.n(a).ca(a,b,c)}
J.fF=function(a,b,c){return J.n(a).cb(a,b,c)}
J.d3=function(a,b,c){return J.n(a).cc(a,b,c)}
J.d4=function(a,b,c){return J.n(a).cd(a,b,c)}
J.d5=function(a,b,c){return J.n(a).ce(a,b,c)}
J.d6=function(a,b,c,d){return J.n(a).cf(a,b,c,d)}
J.d7=function(a,b,c,d){return J.n(a).cg(a,b,c,d)}
J.fG=function(a,b){return J.n(a).ci(a,b)}
J.fH=function(a,b,c){return J.n(a).e9(a,b,c)}
J.fI=function(a,b,c,d,e,f,g){return J.n(a).cj(a,b,c,d,e,f,g)}
J.fJ=function(a,b,c,d,e){return J.n(a).cl(a,b,c,d,e)}
I.aK=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.bS.prototype
C.y=W.br.prototype
C.m=W.fR.prototype
C.q=W.cm.prototype
C.z=W.h_.prototype
C.r=W.h8.prototype
C.L=W.ha.prototype
C.M=W.hq.prototype
C.t=W.hr.prototype
C.N=J.j.prototype
C.a=J.bz.prototype
C.A=J.dt.prototype
C.e=J.du.prototype
C.u=J.bA.prototype
C.i=J.bB.prototype
C.U=J.bC.prototype
C.f=H.i0.prototype
C.n=H.i2.prototype
C.Z=W.i3.prototype
C.D=J.ic.prototype
C.E=W.io.prototype
C.J=W.iO.prototype
C.x=J.bc.prototype
C.af=W.aR.prototype
C.ag=W.j3.prototype
C.K=new P.jI()
C.d=new P.k_()
C.O=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.P=function(hooks) {
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

C.Q=function(getTagFallback) {
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
C.R=function() {
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
C.S=function(hooks) {
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
C.T=function(hooks) {
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
C.V=H.f(I.aK(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.W=H.f(I.aK(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.Y=H.f(I.aK([]),[P.A])
C.X=H.f(I.aK([]),[P.e])
C.v=H.f(I.aK(["bind","if","ref","repeat","syntax"]),[P.e])
C.w=H.f(I.aK(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.a_=new G.E("vec3","vertex btangents",0)
C.c=new G.E("vec3","",0)
C.a0=new G.E("vec4","delta from light",0)
C.o=new G.E("","",0)
C.F=new G.E("vec3","vertex coordinates",0)
C.a1=new G.E("vec3","vertex binormals",0)
C.G=new G.E("vec4","for wireframe",0)
C.a2=new G.E("vec4","per vertex color",0)
C.a3=new G.E("float","for normal maps",0)
C.j=new G.E("mat4","",0)
C.a5=new G.E("mat4","",4)
C.a4=new G.E("mat4","",128)
C.b=new G.E("float","",0)
C.a6=new G.E("float","",4)
C.a7=new G.E("float","depth for shadowmaps",0)
C.h=new G.E("sampler2D","",0)
C.a8=new G.E("float","for bump maps",0)
C.a9=new G.E("vec2","texture uvs",0)
C.aa=new G.E("float","time since program start in sec",0)
C.k=new G.E("vec2","",0)
C.ab=new G.E("samplerCube","",0)
C.l=new G.E("vec4","",0)
C.ac=new G.E("vec3","vertex normals",0)
C.ad=new G.E("sampler2DShadow","",0)
C.H=new G.E("vec3","per vertex color",0)
C.I=new G.E("mat3","",0)
C.ae=new G.E("vec3","vertex tangents",0)
$.ae=0
$.b0=null
$.db=null
$.cF=!1
$.ev=null
$.em=null
$.eA=null
$.c8=null
$.ca=null
$.cM=null
$.aU=null
$.be=null
$.bf=null
$.cG=!1
$.D=C.d
$.ai=null
$.co=null
$.dn=null
$.dm=null
$.di=null
$.dh=null
$.dg=null
$.df=null
$.er=0
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
I.$lazy(y,x,w)}})(["lA","eJ",function(){return H.eu("_$dart_dartClosure")},"md","cQ",function(){return H.eu("_$dart_js")},"mY","eM",function(){return H.ag(H.c1({
toString:function(){return"$receiver$"}}))},"mZ","eN",function(){return H.ag(H.c1({$method$:null,
toString:function(){return"$receiver$"}}))},"n_","eO",function(){return H.ag(H.c1(null))},"n0","eP",function(){return H.ag(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"n3","eS",function(){return H.ag(H.c1(void 0))},"n4","eT",function(){return H.ag(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"n2","eR",function(){return H.ag(H.dQ(null))},"n1","eQ",function(){return H.ag(function(){try{null.$method$}catch(z){return z.message}}())},"n6","eV",function(){return H.ag(H.dQ(void 0))},"n5","eU",function(){return H.ag(function(){try{(void 0).$method$}catch(z){return z.message}}())},"nh","cS",function(){return P.j7()},"ny","bm",function(){return[]},"lx","eI",function(){return{}},"np","eY",function(){return P.cu(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)},"nq","cT",function(){return P.T(P.e,P.bv)},"mL","cR",function(){return new G.dP(1281,0,4294967295)},"lq","eD",function(){return G.cD(1281,1281,1281)},"lr","eE",function(){return G.cD(32774,770,771)},"lp","eC",function(){return G.cD(32774,770,769)},"nw","ac",function(){return P.dx(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.H,"aColorAlpha",C.a2,"aPosition",C.F,"aTexUV",C.a9,"aNormal",C.ac,"aBinormal",C.a1,"aCenter",C.G,"aPointSize",C.b,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ae,"aBitangent",C.a_,"iaRotation",C.l,"iaTranslation",C.c,"iaScale",C.b,"iaColor",C.c,"vColor",C.H,"vTexUV",C.k,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.F,"vPositionFromLight",C.a0,"vCenter",C.G,"vDepth",C.a7,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.I,"uConvolutionMatrix",C.I,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ad,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.ab,"uAnimationTable",C.h,"uTime",C.aa,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.c,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a4,"uLightDescs",C.a5,"uLightCount",C.b,"uLightTypes",C.a6,"uBumpScale",C.a8,"uNormalScale",C.a3],P.e,G.E)},"nb","eW",function(){return C.K},"lu","eG",function(){return T.K(0.4,0.4,0.4)},"lt","eF",function(){return T.K(0,0,0)},"lv","eH",function(){return T.K(1,0,0)},"nH","f2",function(){var z,y
z=G.c_("Textured")
y=[P.e]
z.b4(H.f(["aPosition","aTexUV"],y))
z.ag(H.f(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.b5(H.f(["vTexUV"],y))
z.b=z.bb(!1,H.t(H.f(["void main() {\n  gl_Position = uPerspectiveViewMatrix * \n                uModelMatrix * \n                vec4(aPosition, 1.0);\n  vTexUV = aTexUV;\n}\n"],y),"$isa",y,"$asa"),null)
return z},"nG","f1",function(){var z,y
z=G.c_("TexturedF")
y=[P.e]
z.b5(H.f(["vTexUV"],y))
z.ag(H.f(["uColor","uTexture"],y))
z.av(H.f(["oFragColor = texture(uTexture, vTexUV) + vec4( uColor, 0.0 );"],y))
return z},"nE","f_",function(){var z,y
z=G.c_("PointSpritesV")
y=[P.e]
z.b4(H.f(["aPosition"],y))
z.ag(H.f(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"],y))
z.av(H.f(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"],y))
return z},"nD","eZ",function(){var z,y
z=G.c_("PointSpritesF")
y=[P.e]
z.ag(H.f(["uTexture"],y))
z.av(H.f(["oFragColor = texture( uTexture,  gl_PointCoord);"],y))
return z},"nm","eX",function(){return H.f([T.K(0,0,1),T.K(0,0,-1),T.K(0,1,0),T.K(0,-1,0),T.K(1,0,0),T.K(-1,0,0)],[T.c])},"m4","eK",function(){return H.f([G.L(0,11,5),G.L(0,5,1),G.L(0,1,7),G.L(0,7,10),G.L(0,10,11),G.L(1,5,9),G.L(5,11,4),G.L(11,10,2),G.L(10,7,6),G.L(7,1,8),G.L(3,9,4),G.L(3,4,2),G.L(3,2,6),G.L(3,6,8),G.L(3,8,9),G.L(4,9,5),G.L(2,4,11),G.L(6,2,10),G.L(8,6,7),G.L(9,8,1)],[G.Y])},"nF","f0",function(){return(1+P.lg(5))/2},"m5","eL",function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.f0()
y=T.K(-1,z,0)
y.C(0)
x=T.K(1,z,0)
x.C(0)
if(typeof z!=="number")return z.ec()
w=T.K(-1,-z,0)
w.C(0)
v=T.K(1,-z,0)
v.C(0)
u=T.K(0,-1,z)
u.C(0)
t=T.K(0,1,z)
t.C(0)
s=T.K(0,-1,-z)
s.C(0)
r=T.K(0,1,-z)
r.C(0)
q=T.K(z,0,-1)
q.C(0)
p=T.K(z,0,1)
p.C(0)
o=T.K(-z,0,-1)
o.C(0)
z=T.K(-z,0,1)
z.C(0)
return H.f([y,x,w,v,u,t,s,r,q,p,o,z],[T.c])},"nB","cU",function(){return H.f([],[[P.a2,P.b]])}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.A},{func:1,ret:-1},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:P.A,args:[W.a_]},{func:1,ret:P.A,args:[W.al]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.A,args:[,]},{func:1,ret:P.A,args:[,,]},{func:1,ret:P.e,args:[P.F]},{func:1,ret:P.W,args:[W.af]},{func:1,ret:P.W,args:[P.e]},{func:1,ret:-1,args:[W.S]},{func:1,ret:P.A,args:[W.b4]},{func:1,ret:P.W,args:[W.X,P.e,P.e,W.bG]},{func:1,args:[,P.e]},{func:1,args:[P.e]},{func:1,ret:P.A,args:[{func:1,ret:-1}]},{func:1,ret:P.A,args:[,P.V]},{func:1,ret:P.A,args:[,],opt:[P.V]},{func:1,ret:[P.U,,],args:[,]},{func:1,ret:P.W,args:[W.v]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.A,args:[P.H]},{func:1,args:[W.S]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[W.v,W.v]},{func:1,ret:-1,args:[P.a7,T.c]},{func:1,ret:P.A,args:[W.aR]},{func:1,ret:P.F,args:[P.F,P.b]},{func:1,ret:-1,args:[P.H]},{func:1,ret:P.A,args:[[P.a,,]]},{func:1,ret:P.F,args:[,,]}]
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
if(x==y)H.li(d||a)
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
Isolate.aK=a.aK
Isolate.bi=a.bi
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
if(typeof dartMainRunner==="function")dartMainRunner(V.ex,[])
else V.ex([])})})()
//# sourceMappingURL=basics.dart.js.map
