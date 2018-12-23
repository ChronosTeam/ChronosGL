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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isk)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cM"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cM"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cM(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bk=function(){}
var dart=[["","",,H,{"^":"",mm:{"^":"b;a"}}],["","",,J,{"^":"",
cQ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cc:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cP==null){H.lc()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.dZ("Return interceptor for "+H.c(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cV()]
if(v!=null)return v
v=H.lh(a)
if(v!=null)return v
if(typeof a=="function")return C.S
y=Object.getPrototypeOf(a)
if(y==null)return C.B
if(y===Object.prototype)return C.B
if(typeof w=="function"){Object.defineProperty(w,$.cV(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
k:{"^":"b;",
F:function(a,b){return a===b},
gC:function(a){return H.b7(a)},
l:["cK",function(a){return"Instance of '"+H.b8(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hM:{"^":"k;",
l:function(a){return String(a)},
gC:function(a){return a?519018:218159},
$isV:1},
hN:{"^":"k;",
F:function(a,b){return null==b},
l:function(a){return"null"},
gC:function(a){return 0},
$isG:1},
cw:{"^":"k;",
gC:function(a){return 0},
l:["cM",function(a){return String(a)}]},
ir:{"^":"cw;"},
bc:{"^":"cw;"},
bB:{"^":"cw;",
l:function(a){var z=a[$.eN()]
if(z==null)return this.cM(a)
return"JavaScript function for "+H.c(J.bs(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbw:1},
by:{"^":"k;$ti",
j:function(a,b){H.A(b,H.o(a,0))
if(!!a.fixed$length)H.ai(P.B("add"))
a.push(b)},
H:function(a,b){var z,y
H.t(b,"$ism",[H.o(a,0)],"$asm")
if(!!a.fixed$length)H.ai(P.B("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.D)(b),++y)a.push(b[y])},
ac:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.h(z,y,H.c(a[y]))
return z.join(b)},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
ge4:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.dw())},
bB:function(a,b){var z,y
H.n(b,{func:1,ret:P.V,args:[H.o(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.d(P.aK(a))}return!1},
cF:function(a,b){if(!!a.immutable$list)H.ai(P.B("sort"))
H.iS(a,J.kO(),H.o(a,0))},
ar:function(a){return this.cF(a,null)},
B:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aI(a[z],b))return!0
return!1},
l:function(a){return P.cu(a,"[","]")},
gv:function(a){return new J.fW(a,a.length,0,[H.o(a,0)])},
gC:function(a){return H.b7(a)},
gk:function(a){return a.length},
i:function(a,b){if(b>=a.length||b<0)throw H.d(H.bj(a,b))
return a[b]},
h:function(a,b,c){H.A(c,H.o(a,0))
if(!!a.immutable$list)H.ai(P.B("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bj(a,b))
a[b]=c},
$isw:1,
$asw:I.bk,
$ism:1,
$isa:1,
p:{
hL:function(a,b){return J.cv(H.h(a,[b]))},
cv:function(a){H.bL(a)
a.fixed$length=Array
return a},
mk:[function(a,b){return J.fk(H.eD(a,"$isZ"),H.eD(b,"$isZ"))},"$2","kO",8,0,30]}},
ml:{"^":"by;$ti"},
fW:{"^":"b;a,b,c,0d,$ti",
sbi:function(a){this.d=H.A(a,H.o(this,0))},
gE:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.D(z))
x=this.c
if(x>=y){this.sbi(null)
return!1}this.sbi(z[x]);++this.c
return!0},
$isas:1},
bz:{"^":"k;",
O:function(a,b){var z
H.cR(b)
if(typeof b!=="number")throw H.d(H.aT(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gam(b)
if(this.gam(a)===z)return 0
if(this.gam(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gam:function(a){return a===0?1/a<0:a<0},
cg:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.d(P.B(""+a+".toInt()"))},
dM:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.d(P.B(""+a+".ceil()"))},
e_:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.d(P.B(""+a+".floor()"))},
aS:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.B(""+a+".round()"))},
dN:function(a,b,c){if(this.O(b,c)>0)throw H.d(H.aT(b))
if(this.O(a,b)<0)return b
if(this.O(a,c)>0)return c
return a},
ed:function(a,b){var z
if(b>20)throw H.d(P.b9(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gam(a))return"-"+z
return z},
l:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gC:function(a){return a&0x1FFFFFFF},
cO:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.by(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.by(a,b)},
by:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.B("Result of truncating division is "+H.c(z)+": "+H.c(a)+" ~/ "+b))},
bw:function(a,b){var z
if(a>0)z=this.dA(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dA:function(a,b){return b>31?0:a>>>b},
X:function(a,b){if(typeof b!=="number")throw H.d(H.aT(b))
return a>b},
$isZ:1,
$asZ:function(){return[P.H]},
$isal:1,
$isH:1},
dy:{"^":"bz;",$isx:1},
dx:{"^":"bz;"},
bA:{"^":"k;",
aB:function(a,b){if(b>=a.length)throw H.d(H.bj(a,b))
return a.charCodeAt(b)},
I:function(a,b){H.v(b)
if(typeof b!=="string")throw H.d(P.dc(b,null,null))
return a+b},
cH:function(a,b,c){var z
if(c>a.length)throw H.d(P.b9(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cG:function(a,b){return this.cH(a,b,0)},
cJ:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.d(P.c1(b,null,null))
if(b>c)throw H.d(P.c1(b,null,null))
if(c>a.length)throw H.d(P.c1(c,null,null))
return a.substring(b,c)},
cI:function(a,b){return this.cJ(a,b,null)},
ec:function(a){return a.toLowerCase()},
dO:function(a,b,c){if(c>a.length)throw H.d(P.b9(c,0,a.length,null,null))
return H.lq(a,b,c)},
O:function(a,b){var z
H.v(b)
if(typeof b!=="string")throw H.d(H.aT(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
l:function(a){return a},
gC:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
i:function(a,b){if(b>=a.length||!1)throw H.d(H.bj(a,b))
return a[b]},
$isw:1,
$asw:I.bk,
$isZ:1,
$asZ:function(){return[P.e]},
$isip:1,
$ise:1}}],["","",,H,{"^":"",
dw:function(){return new P.cC("No element")},
hK:function(){return new P.cC("Too many elements")},
iS:function(a,b,c){H.t(a,"$isa",[c],"$asa")
H.n(b,{func:1,ret:P.x,args:[c,c]})
H.bE(a,0,J.aY(a)-1,b,c)},
bE:function(a,b,c,d,e){H.t(a,"$isa",[e],"$asa")
H.n(d,{func:1,ret:P.x,args:[e,e]})
if(c-b<=32)H.iR(a,b,c,d,e)
else H.iQ(a,b,c,d,e)},
iR:function(a,b,c,d,e){var z,y,x,w,v
H.t(a,"$isa",[e],"$asa")
H.n(d,{func:1,ret:P.x,args:[e,e]})
for(z=b+1,y=J.bl(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.a9(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.h(a,w,y.i(a,v))
w=v}y.h(a,w,x)}},
iQ:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.t(a,"$isa",[a2],"$asa")
H.n(a1,{func:1,ret:P.x,args:[a2,a2]})
z=C.d.a0(a0-b+1,6)
y=b+z
x=a0-z
w=C.d.a0(b+a0,2)
v=w-z
u=w+z
t=J.bl(a)
s=t.i(a,y)
r=t.i(a,v)
q=t.i(a,w)
p=t.i(a,u)
o=t.i(a,x)
if(J.a9(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.a9(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.a9(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.a9(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a9(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.a9(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.a9(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.a9(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a9(a1.$2(p,o),0)){n=o
o=p
p=n}t.h(a,y,s)
t.h(a,w,q)
t.h(a,x,o)
t.h(a,v,t.i(a,b))
t.h(a,u,t.i(a,a0))
m=b+1
l=a0-1
if(J.aI(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.i(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.ae()
if(i<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.X()
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
if(typeof e!=="number")return e.ae()
if(e<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.X()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.X()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.ae()
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
H.bE(a,b,m-2,a1,a2)
H.bE(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aI(a1.$2(t.i(a,m),r),0);)++m
for(;J.aI(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.ae()
h=l-1
if(i<0){t.h(a,k,t.i(a,m))
g=m+1
t.h(a,m,t.i(a,l))
t.h(a,l,j)
m=g}else{t.h(a,k,t.i(a,l))
t.h(a,l,j)}l=h
break}}H.bE(a,m,l,a1,a2)}else H.bE(a,m,l,a1,a2)},
dp:{"^":"m;"},
bZ:{"^":"dp;$ti",
gv:function(a){return new H.dB(this,this.gk(this),0,[H.cO(this,"bZ",0)])},
aV:function(a,b){return this.cL(0,H.n(b,{func:1,ret:P.V,args:[H.cO(this,"bZ",0)]}))}},
dB:{"^":"b;a,b,c,0d,$ti",
sa7:function(a){this.d=H.A(a,H.o(this,0))},
gE:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.bl(z)
x=y.gk(z)
if(this.b!==x)throw H.d(P.aK(z))
w=this.c
if(w>=x){this.sa7(null)
return!1}this.sa7(y.u(z,w));++this.c
return!0},
$isas:1},
i0:{"^":"m;a,b,$ti",
gv:function(a){var z=this.a
return new H.bC(z.gv(z),this.b,this.$ti)},
gk:function(a){return this.a.a.a},
$asm:function(a,b){return[b]},
p:{
i1:function(a,b,c,d){H.t(a,"$ism",[c],"$asm")
H.n(b,{func:1,ret:d,args:[c]})
return new H.ho(a,b,[c,d])}}},
ho:{"^":"i0;a,b,$ti"},
bC:{"^":"as;0a,b,c,$ti",
sa7:function(a){this.a=H.A(a,H.o(this,1))},
t:function(){var z=this.b
if(z.t()){this.sa7(this.c.$1(z.d))
return!0}this.sa7(null)
return!1},
gE:function(a){return this.a},
$asas:function(a,b){return[b]}},
i2:{"^":"bZ;a,b,$ti",
gk:function(a){return J.aY(this.a)},
u:function(a,b){return this.b.$1(J.ft(this.a,b))},
$asbZ:function(a,b){return[b]},
$asm:function(a,b){return[b]}},
e_:{"^":"m;a,b,$ti",
gv:function(a){return new H.je(J.bS(this.a),this.b,this.$ti)}},
je:{"^":"as;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gE(z)))return!0
return!1},
gE:function(a){var z=this.a
return z.gE(z)}},
bY:{"^":"b;$ti"}}],["","",,H,{"^":"",
aH:function(a){var z,y
z=H.v(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
l4:function(a){return init.types[H.L(a)]},
lf:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.C(a).$isz},
c:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bs(a)
if(typeof z!=="string")throw H.d(H.aT(a))
return z},
b7:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b8:function(a){return H.is(a)+H.c6(H.am(a),0,null)},
is:function(a){var z,y,x,w,v,u,t,s,r
z=J.C(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.L||!!z.$isbc){u=C.A(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aH(w.length>1&&C.j.aB(w,0)===36?C.j.cI(w,1):w)},
aN:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iz:function(a){var z=H.aN(a).getFullYear()+0
return z},
ix:function(a){var z=H.aN(a).getMonth()+1
return z},
it:function(a){var z=H.aN(a).getDate()+0
return z},
iu:function(a){var z=H.aN(a).getHours()+0
return z},
iw:function(a){var z=H.aN(a).getMinutes()+0
return z},
iy:function(a){var z=H.aN(a).getSeconds()+0
return z},
iv:function(a){var z=H.aN(a).getMilliseconds()+0
return z},
aG:function(a){throw H.d(H.aT(a))},
f:function(a,b){if(a==null)J.aY(a)
throw H.d(H.bj(a,b))},
bj:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aJ(!0,b,"index",null)
z=H.L(J.aY(a))
if(!(b<0)){if(typeof z!=="number")return H.aG(z)
y=b>=z}else y=!0
if(y)return P.I(b,a,"index",null,z)
return P.c1(b,"index",null)},
aT:function(a){return new P.aJ(!0,a,null,null)},
et:function(a){if(typeof a!=="number")throw H.d(H.aT(a))
return a},
d:function(a){var z
if(a==null)a=new P.dI()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eG})
z.name=""}else z.toString=H.eG
return z},
eG:function(){return J.bs(this.dartException)},
ai:function(a){throw H.d(a)},
D:function(a){throw H.d(P.aK(a))},
a7:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.ls(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.bw(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cx(H.c(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dH(H.c(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.eQ()
u=$.eR()
t=$.eS()
s=$.eT()
r=$.eW()
q=$.eX()
p=$.eV()
$.eU()
o=$.eZ()
n=$.eY()
m=v.M(y)
if(m!=null)return z.$1(H.cx(H.v(y),m))
else{m=u.M(y)
if(m!=null){m.method="call"
return z.$1(H.cx(H.v(y),m))}else{m=t.M(y)
if(m==null){m=s.M(y)
if(m==null){m=r.M(y)
if(m==null){m=q.M(y)
if(m==null){m=p.M(y)
if(m==null){m=s.M(y)
if(m==null){m=o.M(y)
if(m==null){m=n.M(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dH(H.v(y),m))}}return z.$1(new H.j8(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dQ()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aJ(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dQ()
return a},
bm:function(a){var z
if(a==null)return new H.ef(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ef(a)},
l0:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.h(0,a[y],a[x])}return b},
le:function(a,b,c,d,e,f){H.j(a,"$isbw")
switch(H.L(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.dt("Unsupported number of arguments for wrapped closure"))},
bi:function(a,b){var z
H.L(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.le)
a.$identity=z
return z},
h6:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.C(d).$isa){z.$reflectionInfo=d
x=H.iF(z).r}else x=d
w=e?Object.create(new H.iT().constructor.prototype):Object.create(new H.cm(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.aa
if(typeof u!=="number")return u.I()
$.aa=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.dh(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.l4,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.df:H.cn
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.d("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dh(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
h3:function(a,b,c,d){var z=H.cn
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dh:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.h5(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.h3(y,!w,z,b)
if(y===0){w=$.aa
if(typeof w!=="number")return w.I()
$.aa=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aZ
if(v==null){v=H.bV("self")
$.aZ=v}return new Function(w+H.c(v)+";return "+u+"."+H.c(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aa
if(typeof w!=="number")return w.I()
$.aa=w+1
t+=w
w="return function("+t+"){return this."
v=$.aZ
if(v==null){v=H.bV("self")
$.aZ=v}return new Function(w+H.c(v)+"."+H.c(z)+"("+t+");}")()},
h4:function(a,b,c,d){var z,y
z=H.cn
y=H.df
switch(b?-1:a){case 0:throw H.d(H.iL("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
h5:function(a,b){var z,y,x,w,v,u,t,s
z=$.aZ
if(z==null){z=H.bV("self")
$.aZ=z}y=$.de
if(y==null){y=H.bV("receiver")
$.de=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.h4(w,!u,x,b)
if(w===1){z="return function(){return this."+H.c(z)+"."+H.c(x)+"(this."+H.c(y)+");"
y=$.aa
if(typeof y!=="number")return y.I()
$.aa=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.c(z)+"."+H.c(x)+"(this."+H.c(y)+", "+s+");"
y=$.aa
if(typeof y!=="number")return y.I()
$.aa=y+1
return new Function(z+y+"}")()},
cM:function(a,b,c,d,e,f,g){return H.h6(a,b,H.L(c),d,!!e,!!f,g)},
v:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.a4(a,"String"))},
eu:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.a4(a,"double"))},
cR:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.a4(a,"num"))},
c9:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.a4(a,"bool"))},
L:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.a4(a,"int"))},
cS:function(a,b){throw H.d(H.a4(a,H.aH(H.v(b).substring(3))))},
ln:function(a,b){throw H.d(H.dg(a,H.aH(H.v(b).substring(3))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.C(a)[b])return a
H.cS(a,b)},
a6:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.C(a)[b]
else z=!0
if(z)return a
H.ln(a,b)},
eD:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.C(a)[b])return a
H.cS(a,b)},
bL:function(a){if(a==null)return a
if(!!J.C(a).$isa)return a
throw H.d(H.a4(a,"List<dynamic>"))},
lg:function(a,b){var z
if(a==null)return a
z=J.C(a)
if(!!z.$isa)return a
if(z[b])return a
H.cS(a,b)},
cN:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.L(z)]
else return a.$S()}return},
bI:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cN(J.C(a))
if(z==null)return!1
return H.ek(z,null,b,null)},
n:function(a,b){var z,y
if(a==null)return a
if($.cI)return a
$.cI=!0
try{if(H.bI(a,b))return a
z=H.bN(b)
y=H.a4(a,z)
throw H.d(y)}finally{$.cI=!1}},
cb:function(a,b){if(a!=null&&!H.cL(a,b))H.ai(H.a4(a,H.bN(b)))
return a},
eo:function(a){var z,y
z=J.C(a)
if(!!z.$isp){y=H.cN(z)
if(y!=null)return H.bN(y)
return"Closure"}return H.b8(a)},
lr:function(a){throw H.d(new P.hd(H.v(a)))},
ez:function(a){return init.getIsolateTag(a)},
h:function(a,b){a.$ti=b
return a},
am:function(a){if(a==null)return
return a.$ti},
nN:function(a,b,c){return H.aX(a["$as"+H.c(c)],H.am(b))},
aV:function(a,b,c,d){var z
H.v(c)
H.L(d)
z=H.aX(a["$as"+H.c(c)],H.am(b))
return z==null?null:z[d]},
cO:function(a,b,c){var z
H.v(b)
H.L(c)
z=H.aX(a["$as"+H.c(b)],H.am(a))
return z==null?null:z[c]},
o:function(a,b){var z
H.L(b)
z=H.am(a)
return z==null?null:z[b]},
bN:function(a){return H.aF(a,null)},
aF:function(a,b){var z,y
H.t(b,"$isa",[P.e],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aH(a[0].builtin$cls)+H.c6(a,1,b)
if(typeof a=="function")return H.aH(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.L(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.c(b[y])}if('func' in a)return H.kN(a,b)
if('futureOr' in a)return"FutureOr<"+H.aF("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kN:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.e]
H.t(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.h([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.j(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.f(b,r)
t=C.j.I(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.aF(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aF(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aF(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aF(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.l_(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.v(z[l])
n=n+m+H.aF(i[h],b)+(" "+H.c(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
c6:function(a,b,c){var z,y,x,w,v,u
H.t(c,"$isa",[P.e],"$asa")
if(a==null)return""
z=new P.cE("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aF(u,c)}return"<"+z.l(0)+">"},
l3:function(a){var z,y,x,w
z=J.C(a)
if(!!z.$isp){y=H.cN(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.am(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aX:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aU:function(a,b,c,d){var z,y
H.v(b)
H.bL(c)
H.v(d)
if(a==null)return!1
z=H.am(a)
y=J.C(a)
if(y[b]==null)return!1
return H.er(H.aX(y[d],z),null,c,null)},
bO:function(a,b,c,d){H.v(b)
H.bL(c)
H.v(d)
if(a==null)return a
if(H.aU(a,b,c,d))return a
throw H.d(H.dg(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aH(b.substring(3))+H.c6(c,0,null),init.mangledGlobalNames)))},
t:function(a,b,c,d){H.v(b)
H.bL(c)
H.v(d)
if(a==null)return a
if(H.aU(a,b,c,d))return a
throw H.d(H.a4(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aH(b.substring(3))+H.c6(c,0,null),init.mangledGlobalNames)))},
er:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a0(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a0(a[y],b,c[y],d))return!1
return!0},
nI:function(a,b,c){return a.apply(b,H.aX(J.C(b)["$as"+H.c(c)],H.am(b)))},
eB:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="G"||a===-1||a===-2||H.eB(z)}return!1},
cL:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="G"||b===-1||b===-2||H.eB(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cL(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bI(a,b)}z=J.C(a).constructor
y=H.am(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a0(z,null,b,null)},
A:function(a,b){if(a!=null&&!H.cL(a,b))throw H.d(H.a4(a,H.bN(b)))
return a},
a0:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a0(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.ek(a,b,c,d)
if('func' in a)return c.builtin$cls==="bw"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a0("type" in a?a.type:null,b,x,d)
else if(H.a0(a,b,x,d))return!0
else{if(!('$is'+"b1" in y.prototype))return!1
w=y.prototype["$as"+"b1"]
v=H.aX(w,z?a.slice(1):null)
return H.a0(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.er(H.aX(r,z),b,u,d)},
ek:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.lm(m,b,l,d)},
lm:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a0(c[w],d,a[w],b))return!1}return!0},
nJ:function(a,b,c){Object.defineProperty(a,H.v(b),{value:c,enumerable:false,writable:true,configurable:true})},
lh:function(a){var z,y,x,w,v,u
z=H.v($.eA.$1(a))
y=$.ca[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cd[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.v($.eq.$2(a,z))
if(z!=null){y=$.ca[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cd[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.ce(x)
$.ca[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cd[z]=x
return x}if(v==="-"){u=H.ce(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eE(a,x)
if(v==="*")throw H.d(P.dZ(z))
if(init.leafTags[z]===true){u=H.ce(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eE(a,x)},
eE:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cQ(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
ce:function(a){return J.cQ(a,!1,null,!!a.$isz)},
ll:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.ce(z)
else return J.cQ(z,c,null,null)},
lc:function(){if(!0===$.cP)return
$.cP=!0
H.ld()},
ld:function(){var z,y,x,w,v,u,t,s
$.ca=Object.create(null)
$.cd=Object.create(null)
H.l8()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eF.$1(v)
if(u!=null){t=H.ll(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
l8:function(){var z,y,x,w,v,u,t
z=C.P()
z=H.aS(C.M,H.aS(C.R,H.aS(C.z,H.aS(C.z,H.aS(C.Q,H.aS(C.N,H.aS(C.O(C.A),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eA=new H.l9(v)
$.eq=new H.la(u)
$.eF=new H.lb(t)},
aS:function(a,b){return a(b)||b},
lq:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
iE:{"^":"b;a,b,c,d,e,f,r,0x",p:{
iF:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cv(z)
y=z[0]
x=z[1]
return new H.iE(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
j3:{"^":"b;a,b,c,d,e,f",
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
af:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.h([],[P.e])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.j3(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c3:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dW:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
il:{"^":"S;a,b",
l:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.c(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dH:function(a,b){return new H.il(a,b==null?null:b.method)}}},
hP:{"^":"S;a,b,c",
l:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.c(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.c(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.c(this.a)+")"},
p:{
cx:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hP(a,y,z?null:b.receiver)}}},
j8:{"^":"S;a",
l:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
ls:{"^":"p:5;a",
$1:function(a){if(!!J.C(a).$isS)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
ef:{"^":"b;a,0b",
l:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa3:1},
p:{"^":"b;",
l:function(a){return"Closure '"+H.b8(this).trim()+"'"},
gcw:function(){return this},
$isbw:1,
gcw:function(){return this}},
dS:{"^":"p;"},
iT:{"^":"dS;",
l:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aH(z)+"'"}},
cm:{"^":"dS;a,b,c,d",
F:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cm))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gC:function(a){var z,y
z=this.c
if(z==null)y=H.b7(this.a)
else y=typeof z!=="object"?J.ao(z):H.b7(z)
return(y^H.b7(this.b))>>>0},
l:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.c(this.d)+"' of "+("Instance of '"+H.b8(z)+"'")},
p:{
cn:function(a){return a.a},
df:function(a){return a.c},
bV:function(a){var z,y,x,w,v
z=new H.cm("self","target","receiver","name")
y=J.cv(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
j4:{"^":"S;a",
l:function(a){return this.a},
p:{
a4:function(a,b){return new H.j4("TypeError: "+P.bX(a)+": type '"+H.eo(a)+"' is not a subtype of type '"+b+"'")}}},
h1:{"^":"S;a",
l:function(a){return this.a},
p:{
dg:function(a,b){return new H.h1("CastError: "+P.bX(a)+": type '"+H.eo(a)+"' is not a subtype of type '"+b+"'")}}},
iK:{"^":"S;a",
l:function(a){return"RuntimeError: "+H.c(this.a)},
p:{
iL:function(a){return new H.iK(a)}}},
dX:{"^":"b;a,0b,0c,0d",
gaj:function(){var z=this.b
if(z==null){z=H.bN(this.a)
this.b=z}return z},
l:function(a){return this.gaj()},
gC:function(a){var z=this.d
if(z==null){z=C.j.gC(this.gaj())
this.d=z}return z},
F:function(a,b){if(b==null)return!1
return b instanceof H.dX&&this.gaj()===b.gaj()}},
dz:{"^":"dC;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gK:function(a){return new H.ad(this,[H.o(this,0)])},
gan:function(a){var z=H.o(this,0)
return H.i1(new H.ad(this,[z]),new H.hO(this),z,H.o(this,1))},
al:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.dd(z,b)}else{y=this.e2(b)
return y}},
e2:function(a){var z=this.d
if(z==null)return!1
return this.aQ(this.aJ(z,J.ao(a)&0x3ffffff),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ah(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ah(w,b)
x=y==null?null:y.b
return x}else return this.e3(b)},
e3:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aJ(z,J.ao(a)&0x3ffffff)
x=this.aQ(y,a)
if(x<0)return
return y[x].b},
h:function(a,b,c){var z,y,x,w,v,u
H.A(b,H.o(this,0))
H.A(c,H.o(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aK()
this.b=z}this.bk(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aK()
this.c=y}this.bk(y,b,c)}else{x=this.d
if(x==null){x=this.aK()
this.d=x}w=J.ao(b)&0x3ffffff
v=this.aJ(x,w)
if(v==null)this.aN(x,w,[this.aL(b,c)])
else{u=this.aQ(v,b)
if(u>=0)v[u].b=c
else v.push(this.aL(b,c))}}},
G:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[H.o(this,0),H.o(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.aK(this))
z=z.c}},
bk:function(a,b,c){var z
H.A(b,H.o(this,0))
H.A(c,H.o(this,1))
z=this.ah(a,b)
if(z==null)this.aN(a,b,this.aL(b,c))
else z.b=c},
bt:function(){this.r=this.r+1&67108863},
aL:function(a,b){var z,y
z=new H.hV(H.A(a,H.o(this,0)),H.A(b,H.o(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bt()
return z},
aQ:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aI(a[y].a,b))return y
return-1},
l:function(a){return P.dD(this)},
ah:function(a,b){return a[b]},
aJ:function(a,b){return a[b]},
aN:function(a,b,c){a[b]=c},
df:function(a,b){delete a[b]},
dd:function(a,b){return this.ah(a,b)!=null},
aK:function(){var z=Object.create(null)
this.aN(z,"<non-identifier-key>",z)
this.df(z,"<non-identifier-key>")
return z},
$isdA:1},
hO:{"^":"p;a",
$1:function(a){var z=this.a
return z.i(0,H.A(a,H.o(z,0)))},
$S:function(){var z=this.a
return{func:1,ret:H.o(z,1),args:[H.o(z,0)]}}},
hV:{"^":"b;a,b,0c,0d"},
ad:{"^":"dp;a,$ti",
gk:function(a){return this.a.a},
gv:function(a){var z,y
z=this.a
y=new H.hW(z,z.r,this.$ti)
y.c=z.e
return y}},
hW:{"^":"b;a,b,0c,0d,$ti",
sbj:function(a){this.d=H.A(a,H.o(this,0))},
gE:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aK(z))
else{z=this.c
if(z==null){this.sbj(null)
return!1}else{this.sbj(z.a)
this.c=this.c.c
return!0}}},
$isas:1},
l9:{"^":"p:5;a",
$1:function(a){return this.a(a)}},
la:{"^":"p:13;a",
$2:function(a,b){return this.a(a,b)}},
lb:{"^":"p:14;a",
$1:function(a){return this.a(H.v(a))}}}],["","",,H,{"^":"",
l_:function(a){return J.hL(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
bM:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
c5:function(a){var z,y
if(!!J.C(a).$isw)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.h(z,y,a[y])
return z},
ah:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bj(b,a))},
ig:{"^":"k;",$isj5:1,"%":"DataView;ArrayBufferView;cA|e9|ea|dF|eb|ec|au"},
cA:{"^":"ig;",
gk:function(a){return a.length},
$isw:1,
$asw:I.bk,
$isz:1,
$asz:I.bk},
dF:{"^":"ea;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
h:function(a,b,c){H.eu(c)
H.ah(b,a,a.length)
a[b]=c},
$asbY:function(){return[P.al]},
$asq:function(){return[P.al]},
$ism:1,
$asm:function(){return[P.al]},
$isa:1,
$asa:function(){return[P.al]},
"%":"Float64Array"},
au:{"^":"ec;",
h:function(a,b,c){H.L(c)
H.ah(b,a,a.length)
a[b]=c},
$asbY:function(){return[P.x]},
$asq:function(){return[P.x]},
$ism:1,
$asm:function(){return[P.x]},
$isa:1,
$asa:function(){return[P.x]}},
ie:{"^":"dF;",$isac:1,"%":"Float32Array"},
mu:{"^":"au;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mv:{"^":"au;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
$ishI:1,
"%":"Int32Array"},
mw:{"^":"au;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mx:{"^":"au;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
ih:{"^":"au;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
$isng:1,
"%":"Uint32Array"},
my:{"^":"au;",
gk:function(a){return a.length},
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
mz:{"^":"au;",
gk:function(a){return a.length},
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
e9:{"^":"cA+q;"},
ea:{"^":"e9+bY;"},
eb:{"^":"cA+q;"},
ec:{"^":"eb+bY;"}}],["","",,P,{"^":"",
ji:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kV()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bi(new P.jk(z),1)).observe(y,{childList:true})
return new P.jj(z,y,x)}else if(self.setImmediate!=null)return P.kW()
return P.kX()},
nr:[function(a){self.scheduleImmediate(H.bi(new P.jl(H.n(a,{func:1,ret:-1})),0))},"$1","kV",4,0,4],
ns:[function(a){self.setImmediate(H.bi(new P.jm(H.n(a,{func:1,ret:-1})),0))},"$1","kW",4,0,4],
nt:[function(a){H.n(a,{func:1,ret:-1})
P.kv(0,a)},"$1","kX",4,0,4],
kR:function(a,b){if(H.bI(a,{func:1,args:[P.b,P.a3]}))return H.n(a,{func:1,ret:null,args:[P.b,P.a3]})
if(H.bI(a,{func:1,args:[P.b]}))return H.n(a,{func:1,ret:null,args:[P.b]})
throw H.d(P.dc(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kQ:function(){var z,y
for(;z=$.aR,z!=null;){$.bh=null
y=z.b
$.aR=y
if(y==null)$.bg=null
z.a.$0()}},
nG:[function(){$.cJ=!0
try{P.kQ()}finally{$.bh=null
$.cJ=!1
if($.aR!=null)$.cW().$1(P.es())}},"$0","es",0,0,1],
en:function(a){var z=new P.e1(H.n(a,{func:1,ret:-1}))
if($.aR==null){$.bg=z
$.aR=z
if(!$.cJ)$.cW().$1(P.es())}else{$.bg.b=z
$.bg=z}},
kU:function(a){var z,y,x
H.n(a,{func:1,ret:-1})
z=$.aR
if(z==null){P.en(a)
$.bh=$.bg
return}y=new P.e1(a)
x=$.bh
if(x==null){y.b=z
$.bh=y
$.aR=y}else{y.b=x.b
x.b=y
$.bh=y
if(y.b==null)$.bg=y}},
lo:function(a){var z,y
z={func:1,ret:-1}
H.n(a,z)
y=$.K
if(C.f===y){P.c8(null,null,C.f,a)
return}y.toString
P.c8(null,null,y,H.n(y.bE(a),z))},
c7:function(a,b,c,d,e){var z={}
z.a=d
P.kU(new P.kS(z,e))},
el:function(a,b,c,d,e){var z,y
H.n(d,{func:1,ret:e})
y=$.K
if(y===c)return d.$0()
$.K=c
z=y
try{y=d.$0()
return y}finally{$.K=z}},
em:function(a,b,c,d,e,f,g){var z,y
H.n(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.K
if(y===c)return d.$1(e)
$.K=c
z=y
try{y=d.$1(e)
return y}finally{$.K=z}},
kT:function(a,b,c,d,e,f,g,h,i){var z,y
H.n(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.K
if(y===c)return d.$2(e,f)
$.K=c
z=y
try{y=d.$2(e,f)
return y}finally{$.K=z}},
c8:function(a,b,c,d){var z
H.n(d,{func:1,ret:-1})
z=C.f!==c
if(z)d=!(!z||!1)?c.bE(d):c.dJ(d,-1)
P.en(d)},
jk:{"^":"p:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jj:{"^":"p:15;a,b,c",
$1:function(a){var z,y
this.a.a=H.n(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jl:{"^":"p:0;a",
$0:function(){this.a.$0()}},
jm:{"^":"p:0;a",
$0:function(){this.a.$0()}},
ku:{"^":"b;a,0b,c",
d8:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bi(new P.kw(this,b),0),a)
else throw H.d(P.B("`setTimeout()` not found."))},
p:{
kv:function(a,b){var z=new P.ku(!0,0)
z.d8(a,b)
return z}}},
kw:{"^":"p:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jp:{"^":"b;$ti"},
kp:{"^":"jp;a,$ti"},
aQ:{"^":"b;0a,b,c,d,e,$ti",
e5:function(a){if(this.c!==6)return!0
return this.b.b.aT(H.n(this.d,{func:1,ret:P.V,args:[P.b]}),a.a,P.V,P.b)},
e1:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.o(this,1)}
w=this.b.b
if(H.bI(z,{func:1,args:[P.b,P.a3]}))return H.cb(w.e8(z,a.a,a.b,null,y,P.a3),x)
else return H.cb(w.aT(H.n(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
ag:{"^":"b;bx:a<,b,0dv:c<,$ti",
cf:function(a,b,c){var z,y,x,w
z=H.o(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.K
if(y!==C.f){y.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kR(b,y)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.ag(0,$.K,[c])
w=b==null?1:3
this.bl(new P.aQ(x,w,a,b,[z,c]))
return x},
ce:function(a,b){return this.cf(a,null,b)},
bl:function(a){var z,y
z=this.a
if(z<=1){a.a=H.j(this.c,"$isaQ")
this.c=a}else{if(z===2){y=H.j(this.c,"$isag")
z=y.a
if(z<4){y.bl(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.c8(null,null,z,H.n(new P.jE(this,a),{func:1,ret:-1}))}},
bu:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.j(this.c,"$isaQ")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.j(this.c,"$isag")
y=u.a
if(y<4){u.bu(a)
return}this.a=y
this.c=u.c}z.a=this.ai(a)
y=this.b
y.toString
P.c8(null,null,y,H.n(new P.jJ(z,this),{func:1,ret:-1}))}},
aM:function(){var z=H.j(this.c,"$isaQ")
this.c=null
return this.ai(z)},
ai:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
aE:function(a){var z,y,x
z=H.o(this,0)
H.cb(a,{futureOr:1,type:z})
y=this.$ti
if(H.aU(a,"$isb1",y,"$asb1"))if(H.aU(a,"$isag",y,null))P.e4(a,this)
else P.jF(a,this)
else{x=this.aM()
H.A(a,z)
this.a=4
this.c=a
P.bf(this,x)}},
bo:function(a,b){var z
H.j(b,"$isa3")
z=this.aM()
this.a=8
this.c=new P.a_(a,b)
P.bf(this,z)},
$isb1:1,
p:{
jF:function(a,b){var z,y,x
b.a=1
try{a.cf(new P.jG(b),new P.jH(b),null)}catch(x){z=H.a7(x)
y=H.bm(x)
P.lo(new P.jI(b,z,y))}},
e4:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.j(a.c,"$isag")
if(z>=4){y=b.aM()
b.a=a.a
b.c=a.c
P.bf(b,y)}else{y=H.j(b.c,"$isaQ")
b.a=2
b.c=a
a.bu(y)}},
bf:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.j(y.c,"$isa_")
y=y.b
u=v.a
t=v.b
y.toString
P.c7(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bf(z.a,b)}y=z.a
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
if(p){H.j(r,"$isa_")
y=y.b
u=r.a
t=r.b
y.toString
P.c7(null,null,y,u,t)
return}o=$.K
if(o!=q)$.K=q
else o=null
y=b.c
if(y===8)new P.jM(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jL(x,b,r).$0()}else if((y&2)!==0)new P.jK(z,x,b).$0()
if(o!=null)$.K=o
y=x.b
if(!!J.C(y).$isb1){if(y.a>=4){n=H.j(t.c,"$isaQ")
t.c=null
b=t.ai(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.e4(y,t)
return}}m=b.b
n=H.j(m.c,"$isaQ")
m.c=null
b=m.ai(n)
y=x.a
u=x.b
if(!y){H.A(u,H.o(m,0))
m.a=4
m.c=u}else{H.j(u,"$isa_")
m.a=8
m.c=u}z.a=m
y=m}}}},
jE:{"^":"p:0;a,b",
$0:function(){P.bf(this.a,this.b)}},
jJ:{"^":"p:0;a,b",
$0:function(){P.bf(this.b,this.a.a)}},
jG:{"^":"p:6;a",
$1:function(a){var z=this.a
z.a=0
z.aE(a)}},
jH:{"^":"p:16;a",
$2:function(a,b){H.j(b,"$isa3")
this.a.bo(a,b)},
$1:function(a){return this.$2(a,null)}},
jI:{"^":"p:0;a,b,c",
$0:function(){this.a.bo(this.b,this.c)}},
jM:{"^":"p:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.ca(H.n(w.d,{func:1}),null)}catch(v){y=H.a7(v)
x=H.bm(v)
if(this.d){w=H.j(this.a.a.c,"$isa_").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.j(this.a.a.c,"$isa_")
else u.b=new P.a_(y,x)
u.a=!0
return}if(!!J.C(z).$isb1){if(z instanceof P.ag&&z.gbx()>=4){if(z.gbx()===8){w=this.b
w.b=H.j(z.gdv(),"$isa_")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ce(new P.jN(t),null)
w.a=!1}}},
jN:{"^":"p:17;a",
$1:function(a){return this.a}},
jL:{"^":"p:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.o(x,0)
v=H.A(this.c,w)
u=H.o(x,1)
this.a.b=x.b.b.aT(H.n(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a7(t)
y=H.bm(t)
x=this.a
x.b=new P.a_(z,y)
x.a=!0}}},
jK:{"^":"p:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.j(this.a.a.c,"$isa_")
w=this.c
if(w.e5(z)&&w.e!=null){v=this.b
v.b=w.e1(z)
v.a=!1}}catch(u){y=H.a7(u)
x=H.bm(u)
w=H.j(this.a.a.c,"$isa_")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a_(y,x)
s.a=!0}}},
e1:{"^":"b;a,0b"},
iX:{"^":"b;$ti",
gk:function(a){var z,y,x,w
z={}
y=new P.ag(0,$.K,[P.x])
z.a=0
x=H.o(this,0)
w=H.n(new P.iZ(z,this),{func:1,ret:-1,args:[x]})
H.n(new P.j_(z,y),{func:1,ret:-1})
W.ak(this.a,this.b,w,!1,x)
return y}},
iZ:{"^":"p;a,b",
$1:function(a){H.A(a,H.o(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.o(this.b,0)]}}},
j_:{"^":"p:0;a,b",
$0:function(){this.b.aE(this.a.a)}},
iY:{"^":"b;"},
a_:{"^":"b;a,b",
l:function(a){return H.c(this.a)},
$isS:1},
kC:{"^":"b;",$isnp:1},
kS:{"^":"p:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dI()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.l(0)
throw x}},
k8:{"^":"kC;",
e9:function(a){var z,y,x
H.n(a,{func:1,ret:-1})
try{if(C.f===$.K){a.$0()
return}P.el(null,null,this,a,-1)}catch(x){z=H.a7(x)
y=H.bm(x)
P.c7(null,null,this,z,H.j(y,"$isa3"))}},
ea:function(a,b,c){var z,y,x
H.n(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.f===$.K){a.$1(b)
return}P.em(null,null,this,a,b,-1,c)}catch(x){z=H.a7(x)
y=H.bm(x)
P.c7(null,null,this,z,H.j(y,"$isa3"))}},
dJ:function(a,b){return new P.ka(this,H.n(a,{func:1,ret:b}),b)},
bE:function(a){return new P.k9(this,H.n(a,{func:1,ret:-1}))},
dK:function(a,b){return new P.kb(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
ca:function(a,b){H.n(a,{func:1,ret:b})
if($.K===C.f)return a.$0()
return P.el(null,null,this,a,b)},
aT:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.K===C.f)return a.$1(b)
return P.em(null,null,this,a,b,c,d)},
e8:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.K===C.f)return a.$2(b,c)
return P.kT(null,null,this,a,b,c,d,e,f)}},
ka:{"^":"p;a,b,c",
$0:function(){return this.a.ca(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
k9:{"^":"p:1;a,b",
$0:function(){return this.a.e9(this.b)}},
kb:{"^":"p;a,b,c",
$1:function(a){var z=this.c
return this.a.ea(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
cy:function(a,b,c){H.bL(a)
return H.t(H.l0(a,new H.dz(0,0,[b,c])),"$isdA",[b,c],"$asdA")},
Q:function(a,b){return new H.dz(0,0,[a,b])},
a2:function(a,b,c,d){return new P.jU(0,0,[d])},
hJ:function(a,b,c){var z,y
if(P.cK(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.h([],[P.e])
y=$.bn()
C.a.j(y,a)
try{P.kP(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.dR(b,H.lg(z,"$ism"),", ")+c
return y.charCodeAt(0)==0?y:y},
cu:function(a,b,c){var z,y,x
if(P.cK(a))return b+"..."+c
z=new P.cE(b)
y=$.bn()
C.a.j(y,a)
try{x=z
x.a=P.dR(x.ga_(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.ga_()+c
y=z.ga_()
return y.charCodeAt(0)==0?y:y},
cK:function(a){var z,y
for(z=0;y=$.bn(),z<y.length;++z)if(a===y[z])return!0
return!1},
kP:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.t(b,"$isa",[P.e],"$asa")
z=a.gv(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.c(z.gE(z))
C.a.j(b,w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gE(z);++x
if(!z.t()){if(x<=4){C.a.j(b,H.c(t))
return}v=H.c(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gE(z);++x
for(;z.t();t=s,s=r){r=z.gE(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2;--x}C.a.j(b,"...")
return}}u=H.c(t)
v=H.c(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.j(b,q)
C.a.j(b,u)
C.a.j(b,v)},
cz:function(a,b){var z,y,x
z=P.a2(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.D)(a),++x)z.j(0,H.A(a[x],b))
return z},
dD:function(a){var z,y,x
z={}
if(P.cK(a))return"{...}"
y=new P.cE("")
try{C.a.j($.bn(),a)
x=y
x.a=x.ga_()+"{"
z.a=!0
J.fw(a,new P.i_(z,y))
z=y
z.a=z.ga_()+"}"}finally{z=$.bn()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.ga_()
return z.charCodeAt(0)==0?z:z},
jU:{"^":"jP;a,0b,0c,0d,0e,0f,r,$ti",
gv:function(a){var z=new P.e8(this,this.r,this.$ti)
z.c=this.e
return z},
gk:function(a){return this.a},
B:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.j(z[b],"$isbH")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.j(y[b],"$isbH")!=null}else return this.dc(b)},
dc:function(a){var z=this.d
if(z==null)return!1
return this.aI(this.br(z,a),a)>=0},
j:function(a,b){var z,y
H.A(b,H.o(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cG()
this.b=z}return this.bm(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cG()
this.c=y}return this.bm(y,b)}else return this.d9(0,b)},
d9:function(a,b){var z,y,x
H.A(b,H.o(this,0))
z=this.d
if(z==null){z=P.cG()
this.d=z}y=this.bp(b)
x=z[y]
if(x==null)z[y]=[this.aD(b)]
else{if(this.aI(x,b)>=0)return!1
x.push(this.aD(b))}return!0},
c9:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bv(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bv(this.c,b)
else return this.dq(0,b)},
dq:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.br(z,b)
x=this.aI(y,b)
if(x<0)return!1
this.bz(y.splice(x,1)[0])
return!0},
ab:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aC()}},
bm:function(a,b){H.A(b,H.o(this,0))
if(H.j(a[b],"$isbH")!=null)return!1
a[b]=this.aD(b)
return!0},
bv:function(a,b){var z
if(a==null)return!1
z=H.j(a[b],"$isbH")
if(z==null)return!1
this.bz(z)
delete a[b]
return!0},
aC:function(){this.r=this.r+1&67108863},
aD:function(a){var z,y
z=new P.bH(H.A(a,H.o(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aC()
return z},
bz:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aC()},
bp:function(a){return J.ao(a)&0x3ffffff},
br:function(a,b){return a[this.bp(b)]},
aI:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aI(a[y].a,b))return y
return-1},
p:{
cG:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bH:{"^":"b;a,0b,0c"},
e8:{"^":"b;a,b,0c,0d,$ti",
sbn:function(a){this.d=H.A(a,H.o(this,0))},
gE:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aK(z))
else{z=this.c
if(z==null){this.sbn(null)
return!1}else{this.sbn(H.A(z.a,H.o(this,0)))
this.c=this.c.b
return!0}}},
$isas:1,
p:{
jV:function(a,b,c){var z=new P.e8(a,b,[c])
z.c=a.e
return z}}},
jP:{"^":"iM;"},
hX:{"^":"jW;",$ism:1,$isa:1},
q:{"^":"b;$ti",
gv:function(a){return new H.dB(a,this.gk(a),0,[H.aV(this,a,"q",0)])},
u:function(a,b){return this.i(a,b)},
e0:function(a,b,c,d){var z,y,x
H.A(b,d)
H.n(c,{func:1,ret:d,args:[d,H.aV(this,a,"q",0)]})
z=this.gk(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.i(a,x))
if(z!==this.gk(a))throw H.d(P.aK(a))}return y},
bZ:function(a,b,c,d){var z
H.A(d,H.aV(this,a,"q",0))
P.iD(b,c,this.gk(a),null,null,null)
for(z=b;z<c;++z)this.h(a,z,d)},
l:function(a){return P.cu(a,"[","]")}},
dC:{"^":"W;"},
i_:{"^":"p:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.c(a)
z.a=y+": "
z.a+=H.c(b)}},
W:{"^":"b;$ti",
G:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[H.aV(this,a,"W",0),H.aV(this,a,"W",1)]})
for(z=J.bS(this.gK(a));z.t();){y=z.gE(z)
b.$2(y,this.i(a,y))}},
gk:function(a){return J.aY(this.gK(a))},
l:function(a){return P.dD(a)},
$isN:1},
iN:{"^":"b;$ti",
H:function(a,b){var z
for(z=J.bS(H.t(b,"$ism",this.$ti,"$asm"));z.t();)this.j(0,z.gE(z))},
l:function(a){return P.cu(this,"{","}")},
$ism:1,
$ismQ:1},
iM:{"^":"iN;"},
jW:{"^":"b+q;"}}],["","",,P,{"^":"",
hr:function(a){if(a instanceof H.p)return a.l(0)
return"Instance of '"+H.b8(a)+"'"},
bX:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bs(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hr(a)},
dt:function(a){return new P.jB(a)},
an:function(a){H.bM(H.c(a))},
V:{"^":"b;"},
"+bool":0,
bW:{"^":"b;a,b",
F:function(a,b){if(b==null)return!1
return b instanceof P.bW&&this.a===b.a&&!0},
O:function(a,b){return C.d.O(this.a,H.j(b,"$isbW").a)},
gC:function(a){var z=this.a
return(z^C.d.bw(z,30))&1073741823},
l:function(a){var z,y,x,w,v,u,t,s
z=P.he(H.iz(this))
y=P.bt(H.ix(this))
x=P.bt(H.it(this))
w=P.bt(H.iu(this))
v=P.bt(H.iw(this))
u=P.bt(H.iy(this))
t=P.hf(H.iv(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isZ:1,
$asZ:function(){return[P.bW]},
p:{
he:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hf:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bt:function(a){if(a>=10)return""+a
return"0"+a}}},
al:{"^":"H;"},
"+double":0,
b_:{"^":"b;a",
X:function(a,b){return C.d.X(this.a,H.j(b,"$isb_").a)},
F:function(a,b){if(b==null)return!1
return b instanceof P.b_&&this.a===b.a},
gC:function(a){return this.a&0x1FFFFFFF},
O:function(a,b){return C.d.O(this.a,H.j(b,"$isb_").a)},
l:function(a){var z,y,x,w,v
z=new P.hn()
y=this.a
if(y<0)return"-"+new P.b_(0-y).l(0)
x=z.$1(C.d.a0(y,6e7)%60)
w=z.$1(C.d.a0(y,1e6)%60)
v=new P.hm().$1(y%1e6)
return""+C.d.a0(y,36e8)+":"+H.c(x)+":"+H.c(w)+"."+H.c(v)},
$isZ:1,
$asZ:function(){return[P.b_]},
p:{
hl:function(a,b,c,d,e,f){return new P.b_(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hm:{"^":"p:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hn:{"^":"p:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
S:{"^":"b;"},
dI:{"^":"S;",
l:function(a){return"Throw of null."}},
aJ:{"^":"S;a,b,c,d",
gaG:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaF:function(){return""},
l:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gaG()+y+x
if(!this.a)return w
v=this.gaF()
u=P.bX(this.b)
return w+v+": "+u},
p:{
dc:function(a,b,c){return new P.aJ(!0,a,b,c)}}},
dK:{"^":"aJ;e,f,a,b,c,d",
gaG:function(){return"RangeError"},
gaF:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.c(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.c(z)
else if(x>z)y=": Not in range "+H.c(z)+".."+H.c(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.c(z)}return y},
p:{
c1:function(a,b,c){return new P.dK(null,null,!0,a,b,"Value not in range")},
b9:function(a,b,c,d,e){return new P.dK(b,c,!0,a,d,"Invalid value")},
iD:function(a,b,c,d,e,f){if(0>a||a>c)throw H.d(P.b9(a,0,c,"start",f))
if(a>b||b>c)throw H.d(P.b9(b,a,c,"end",f))
return b}}},
hH:{"^":"aJ;e,k:f>,a,b,c,d",
gaG:function(){return"RangeError"},
gaF:function(){var z,y
z=H.L(this.b)
if(typeof z!=="number")return z.ae()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.c(y)},
p:{
I:function(a,b,c,d,e){var z=H.L(e==null?J.aY(b):e)
return new P.hH(b,z,!0,a,c,"Index out of range")}}},
j9:{"^":"S;a",
l:function(a){return"Unsupported operation: "+this.a},
p:{
B:function(a){return new P.j9(a)}}},
j7:{"^":"S;a",
l:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
dZ:function(a){return new P.j7(a)}}},
cC:{"^":"S;a",
l:function(a){return"Bad state: "+this.a},
p:{
cD:function(a){return new P.cC(a)}}},
h7:{"^":"S;a",
l:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bX(z)+"."},
p:{
aK:function(a){return new P.h7(a)}}},
dQ:{"^":"b;",
l:function(a){return"Stack Overflow"},
$isS:1},
hd:{"^":"S;a",
l:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
jB:{"^":"b;a",
l:function(a){return"Exception: "+this.a}},
bw:{"^":"b;"},
x:{"^":"H;"},
"+int":0,
m:{"^":"b;$ti",
aV:["cL",function(a,b){var z=H.cO(this,"m",0)
return new H.e_(this,H.n(b,{func:1,ret:P.V,args:[z]}),[z])}],
gk:function(a){var z,y
z=this.gv(this)
for(y=0;z.t();)++y
return y},
gY:function(a){var z,y
z=this.gv(this)
if(!z.t())throw H.d(H.dw())
y=z.gE(z)
if(z.t())throw H.d(H.hK())
return y},
u:function(a,b){var z,y,x
if(b<0)H.ai(P.b9(b,0,null,"index",null))
for(z=this.gv(this),y=0;z.t();){x=z.gE(z)
if(b===y)return x;++y}throw H.d(P.I(b,this,"index",null,y))},
l:function(a){return P.hJ(this,"(",")")}},
as:{"^":"b;$ti"},
a:{"^":"b;$ti",$ism:1},
"+List":0,
N:{"^":"b;$ti"},
G:{"^":"b;",
gC:function(a){return P.b.prototype.gC.call(this,this)},
l:function(a){return"null"}},
"+Null":0,
H:{"^":"b;",$isZ:1,
$asZ:function(){return[P.H]}},
"+num":0,
b:{"^":";",
F:function(a,b){return this===b},
gC:function(a){return H.b7(this)},
l:function(a){return"Instance of '"+H.b8(this)+"'"},
toString:function(){return this.l(this)}},
a3:{"^":"b;"},
e:{"^":"b;",$isZ:1,
$asZ:function(){return[P.e]},
$isip:1},
"+String":0,
cE:{"^":"b;a_:a<",
gk:function(a){return this.a.length},
l:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dR:function(a,b,c){var z=J.bS(b)
if(!z.t())return a
if(c.length===0){do a+=H.c(z.gE(z))
while(z.t())}else{a+=H.c(z.gE(z))
for(;z.t();)a=a+c+H.c(z.gE(z))}return a}}}}],["","",,W,{"^":"",
hp:function(a,b,c){var z,y
z=document.body
y=(z&&C.q).P(z,a,b,c)
y.toString
z=W.u
z=new H.e_(new W.a5(y),H.n(new W.hq(),{func:1,ret:P.V,args:[z]}),[z])
return H.j(z.gY(z),"$isR")},
ds:function(a){H.j(a,"$isO")
return"wheel"},
b0:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fA(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a7(x)}return z},
jy:function(a,b){return document.createElement(a)},
c4:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
e7:function(a,b,c,d){var z,y
z=W.c4(W.c4(W.c4(W.c4(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
cH:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.js(a)
if(!!J.C(z).$isO)return z
return}else return H.j(a,"$isO")},
ep:function(a,b){var z
H.n(a,{func:1,ret:-1,args:[b]})
z=$.K
if(z===C.f)return a
return z.dK(a,b)},
P:{"^":"R;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
lt:{"^":"k;0k:length=","%":"AccessibleNodeList"},
fU:{"^":"P;",
l:function(a){return String(a)},
$isfU:1,
"%":"HTMLAnchorElement"},
lu:{"^":"P;",
l:function(a){return String(a)},
"%":"HTMLAreaElement"},
dd:{"^":"P;",$isdd:1,"%":"HTMLBaseElement"},
fZ:{"^":"k;","%":";Blob"},
bU:{"^":"P;",$isbU:1,"%":"HTMLBodyElement"},
co:{"^":"P;0n:height=,0m:width=",
aX:function(a,b,c){if(c!=null)return this.di(a,b,P.kY(c,null))
return this.dj(a,b)},
cz:function(a,b){return this.aX(a,b,null)},
di:function(a,b,c){return a.getContext(b,c)},
dj:function(a,b){return a.getContext(b)},
$isco:1,
"%":"HTMLCanvasElement"},
cp:{"^":"k;",
dZ:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
ap:function(a){return P.a1(a.getContextAttributes())},
$iscp:1,
"%":"CanvasRenderingContext2D"},
lz:{"^":"u;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
h8:{"^":"cq;",$ish8:1,"%":"CSSNumericValue|CSSUnitValue"},
lF:{"^":"hb;0k:length=","%":"CSSPerspective"},
ap:{"^":"k;",$isap:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
h9:{"^":"jq;0k:length=",
b1:function(a,b){var z=this.dk(a,this.aA(a,b))
return z==null?"":z},
aA:function(a,b){var z,y
z=$.eM()
y=z[b]
if(typeof y==="string")return y
y=this.dB(a,b)
z[b]=y
return y},
dB:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hg()+b
if(z in a)return z
return b},
dk:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
ha:{"^":"b;",
gn:function(a){return this.b1(a,"height")},
gm:function(a){return this.b1(a,"width")}},
cq:{"^":"k;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
hb:{"^":"k;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
lH:{"^":"cq;0k:length=","%":"CSSTransformValue"},
lI:{"^":"cq;0k:length=","%":"CSSUnparsedValue"},
lK:{"^":"k;0k:length=",
i:function(a,b){return a[b]},
"%":"DataTransferItemList"},
hh:{"^":"P;","%":"HTMLDivElement"},
hi:{"^":"u;",
dE:function(a,b){return a.adoptNode(b)},
de:function(a,b){return a.createEvent(b)},
aY:function(a,b){return a.getElementsByTagName(b)},
cA:function(a,b){return a.getElementById(b)},
c8:function(a,b){return a.querySelector(b)},
gc3:function(a){return new W.bF(a,"mousedown",!1,[W.X])},
gc4:function(a){return new W.bF(a,"mousemove",!1,[W.X])},
gc5:function(a){return new W.bF(a,"mouseup",!1,[W.X])},
gc6:function(a){return new W.bF(a,H.v(W.ds(a)),!1,[W.aP])},
"%":"XMLDocument;Document"},
lL:{"^":"k;",
l:function(a){return String(a)},
"%":"DOMException"},
hj:{"^":"k;",
dS:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
lM:{"^":"ju;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(c,"$isY",[P.H],"$asY")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[[P.Y,P.H]]},
$isz:1,
$asz:function(){return[[P.Y,P.H]]},
$asq:function(){return[[P.Y,P.H]]},
$ism:1,
$asm:function(){return[[P.Y,P.H]]},
$isa:1,
$asa:function(){return[[P.Y,P.H]]},
$asr:function(){return[[P.Y,P.H]]},
"%":"ClientRectList|DOMRectList"},
hk:{"^":"k;",
l:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(this.gm(a))+" x "+H.c(this.gn(a))},
F:function(a,b){var z
if(b==null)return!1
if(!H.aU(b,"$isY",[P.H],"$asY"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.l(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gC:function(a){return W.e7(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isY:1,
$asY:function(){return[P.H]},
"%":";DOMRectReadOnly"},
lN:{"^":"jw;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.v(c)
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[P.e]},
$isz:1,
$asz:function(){return[P.e]},
$asq:function(){return[P.e]},
$ism:1,
$asm:function(){return[P.e]},
$isa:1,
$asa:function(){return[P.e]},
$asr:function(){return[P.e]},
"%":"DOMStringList"},
lO:{"^":"k;0k:length=","%":"DOMTokenList"},
R:{"^":"u;0eb:tagName=",
gdH:function(a){return new W.jx(a)},
l:function(a){return a.localName},
P:["as",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dr
if(z==null){z=H.h([],[W.ae])
y=new W.dG(z)
C.a.j(z,W.e5(null))
C.a.j(z,W.eg())
$.dr=y
d=y}else d=z
z=$.dq
if(z==null){z=new W.ej(d)
$.dq=z
c=z}else{z.a=d
c=z}}if($.aj==null){z=document
y=z.implementation
y=(y&&C.J).dS(y,"")
$.aj=y
$.cr=y.createRange()
y=$.aj
y.toString
y=y.createElement("base")
H.j(y,"$isdd")
y.href=z.baseURI
z=$.aj.head;(z&&C.K).L(z,y)}z=$.aj
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.j(y,"$isbU")}z=$.aj
if(!!this.$isbU)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.aj.body;(z&&C.q).L(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.B(C.U,a.tagName)){z=$.cr;(z&&C.C).cB(z,x)
z=$.cr
w=(z&&C.C).dQ(z,b)}else{x.innerHTML=b
w=$.aj.createDocumentFragment()
for(z=J.l(w);y=x.firstChild,y!=null;)z.L(w,y)}z=$.aj.body
if(x==null?z!=null:x!==z)J.d5(x)
c.b7(w)
C.i.dE(document,w)
return w},function(a,b,c){return this.P(a,b,c,null)},"dR",null,null,"gei",5,5,null],
cE:function(a,b,c,d){a.textContent=null
this.L(a,this.P(a,b,c,d))},
cD:function(a,b){return this.cE(a,b,null,null)},
a3:function(a,b){return a.getAttribute(b)},
dr:function(a,b){return a.removeAttribute(b)},
gc2:function(a){return new W.be(a,"change",!1,[W.T])},
gc3:function(a){return new W.be(a,"mousedown",!1,[W.X])},
gc4:function(a){return new W.be(a,"mousemove",!1,[W.X])},
gc5:function(a){return new W.be(a,"mouseup",!1,[W.X])},
gc6:function(a){return new W.be(a,H.v(W.ds(a)),!1,[W.aP])},
$isR:1,
"%":";Element"},
hq:{"^":"p:18;",
$1:function(a){return!!J.C(H.j(a,"$isu")).$isR}},
lQ:{"^":"P;0n:height=,0m:width=","%":"HTMLEmbedElement"},
T:{"^":"k;",
gcb:function(a){return W.cH(a.target)},
dl:function(a,b,c,d){return a.initEvent(b,!0,!0)},
$isT:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
O:{"^":"k;",
dD:function(a,b,c,d){H.n(c,{func:1,args:[W.T]})
if(c!=null)this.da(a,b,c,!1)},
da:function(a,b,c,d){return a.addEventListener(b,H.bi(H.n(c,{func:1,args:[W.T]}),1),!1)},
dV:function(a,b){return a.dispatchEvent(b)},
$isO:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBTransaction|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;ed|ee|eh|ei"},
aq:{"^":"fZ;",$isaq:1,"%":"File"},
m6:{"^":"jD;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.j(c,"$isaq")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aq]},
$isz:1,
$asz:function(){return[W.aq]},
$asq:function(){return[W.aq]},
$ism:1,
$asm:function(){return[W.aq]},
$isa:1,
$asa:function(){return[W.aq]},
$asr:function(){return[W.aq]},
"%":"FileList"},
m7:{"^":"O;0k:length=","%":"FileWriter"},
ma:{"^":"P;0k:length=","%":"HTMLFormElement"},
ar:{"^":"k;",$isar:1,"%":"Gamepad"},
hB:{"^":"P;","%":"HTMLHeadElement"},
mb:{"^":"k;0k:length=","%":"History"},
mc:{"^":"jR;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.j(c,"$isu")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.u]},
$isz:1,
$asz:function(){return[W.u]},
$asq:function(){return[W.u]},
$ism:1,
$asm:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$asr:function(){return[W.u]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hC:{"^":"hi;","%":"HTMLDocument"},
md:{"^":"P;0n:height=,0m:width=","%":"HTMLIFrameElement"},
mg:{"^":"k;0n:height=,0m:width=","%":"ImageBitmap"},
mh:{"^":"k;0n:height=,0m:width=","%":"ImageData"},
mi:{"^":"P;0n:height=,0m:width=","%":"HTMLImageElement"},
dv:{"^":"P;0n:height=,0m:width=",$isdv:1,"%":"HTMLInputElement"},
b2:{"^":"dY;",$isb2:1,"%":"KeyboardEvent"},
hY:{"^":"k;",
l:function(a){return String(a)},
$ishY:1,
"%":"Location"},
i4:{"^":"P;","%":"HTMLAudioElement;HTMLMediaElement"},
mq:{"^":"k;0k:length=","%":"MediaList"},
mr:{"^":"jY;",
i:function(a,b){return P.a1(a.get(H.v(b)))},
G:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a1(y.value[1]))}},
gK:function(a){var z=H.h([],[P.e])
this.G(a,new W.i6(z))
return z},
gk:function(a){return a.size},
$asW:function(){return[P.e,null]},
$isN:1,
$asN:function(){return[P.e,null]},
"%":"MIDIInputMap"},
i6:{"^":"p:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
ms:{"^":"jZ;",
i:function(a,b){return P.a1(a.get(H.v(b)))},
G:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a1(y.value[1]))}},
gK:function(a){var z=H.h([],[P.e])
this.G(a,new W.i7(z))
return z},
gk:function(a){return a.size},
$asW:function(){return[P.e,null]},
$isN:1,
$asN:function(){return[P.e,null]},
"%":"MIDIOutputMap"},
i7:{"^":"p:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
at:{"^":"k;",$isat:1,"%":"MimeType"},
mt:{"^":"k0;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.j(c,"$isat")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.at]},
$isz:1,
$asz:function(){return[W.at]},
$asq:function(){return[W.at]},
$ism:1,
$asm:function(){return[W.at]},
$isa:1,
$asa:function(){return[W.at]},
$asr:function(){return[W.at]},
"%":"MimeTypeArray"},
X:{"^":"dY;",
gc1:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.b6(a.offsetX,a.offsetY,[P.H])
else{z=a.target
if(!J.C(W.cH(z)).$isR)throw H.d(P.B("offsetX is only supported on elements"))
y=H.j(W.cH(z),"$isR")
z=a.clientX
x=a.clientY
w=[P.H]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.t(new P.b6(u,v,w),"$isb6",w,"$asb6")
if(typeof z!=="number")return z.ba()
if(typeof x!=="number")return x.ba()
return new P.b6(C.k.cg(z-u),C.k.cg(x-v),w)}},
$isX:1,
"%":";DragEvent|MouseEvent"},
a5:{"^":"hX;a",
gY:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.d(P.cD("No elements"))
if(y>1)throw H.d(P.cD("More than one element"))
return z.firstChild},
H:function(a,b){var z,y,x,w,v
H.t(b,"$ism",[W.u],"$asm")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.l(y),v=0;v<x;++v)w.L(y,z.firstChild)
return},
h:function(a,b,c){var z,y
H.j(c,"$isu")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.f(y,b)
J.fc(z,c,y[b])},
gv:function(a){var z=this.a.childNodes
return new W.du(z,z.length,-1,[H.aV(C.W,z,"r",0)])},
gk:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
$asq:function(){return[W.u]},
$asm:function(){return[W.u]},
$asa:function(){return[W.u]}},
u:{"^":"O;0e6:previousSibling=",
e7:function(a){var z=a.parentNode
if(z!=null)J.bP(z,a)},
l:function(a){var z=a.nodeValue
return z==null?this.cK(a):z},
L:function(a,b){return a.appendChild(b)},
ds:function(a,b){return a.removeChild(b)},
dt:function(a,b,c){return a.replaceChild(b,c)},
$isu:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
ii:{"^":"k2;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.j(c,"$isu")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.u]},
$isz:1,
$asz:function(){return[W.u]},
$asq:function(){return[W.u]},
$ism:1,
$asm:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$asr:function(){return[W.u]},
"%":"NodeList|RadioNodeList"},
mC:{"^":"P;0n:height=,0m:width=","%":"HTMLObjectElement"},
mE:{"^":"O;0n:height=,0m:width=","%":"OffscreenCanvas"},
mF:{"^":"k;0n:height=,0m:width=","%":"PaintSize"},
aw:{"^":"k;0k:length=",$isaw:1,"%":"Plugin"},
mH:{"^":"k6;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.j(c,"$isaw")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aw]},
$isz:1,
$asz:function(){return[W.aw]},
$asq:function(){return[W.aw]},
$ism:1,
$asm:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$asr:function(){return[W.aw]},
"%":"PluginArray"},
mJ:{"^":"X;0n:height=,0m:width=","%":"PointerEvent"},
iC:{"^":"k;",
dQ:function(a,b){return a.createContextualFragment(b)},
cB:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
mO:{"^":"kc;",
i:function(a,b){return P.a1(a.get(H.v(b)))},
G:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a1(y.value[1]))}},
gK:function(a){var z=H.h([],[P.e])
this.G(a,new W.iJ(z))
return z},
gk:function(a){return a.size},
$asW:function(){return[P.e,null]},
$isN:1,
$asN:function(){return[P.e,null]},
"%":"RTCStatsReport"},
iJ:{"^":"p:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
mP:{"^":"k;0n:height=,0m:width=","%":"Screen"},
dN:{"^":"P;0k:length=",$isdN:1,"%":"HTMLSelectElement"},
ax:{"^":"O;",$isax:1,"%":"SourceBuffer"},
mR:{"^":"ee;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.j(c,"$isax")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ax]},
$isz:1,
$asz:function(){return[W.ax]},
$asq:function(){return[W.ax]},
$ism:1,
$asm:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$asr:function(){return[W.ax]},
"%":"SourceBufferList"},
ay:{"^":"k;",$isay:1,"%":"SpeechGrammar"},
mS:{"^":"ki;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.j(c,"$isay")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ay]},
$isz:1,
$asz:function(){return[W.ay]},
$asq:function(){return[W.ay]},
$ism:1,
$asm:function(){return[W.ay]},
$isa:1,
$asa:function(){return[W.ay]},
$asr:function(){return[W.ay]},
"%":"SpeechGrammarList"},
az:{"^":"k;0k:length=",$isaz:1,"%":"SpeechRecognitionResult"},
mV:{"^":"kl;",
i:function(a,b){return this.bs(a,H.v(b))},
G:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=0;!0;++z){y=this.dn(a,z)
if(y==null)return
b.$2(y,this.bs(a,y))}},
gK:function(a){var z=H.h([],[P.e])
this.G(a,new W.iW(z))
return z},
gk:function(a){return a.length},
bs:function(a,b){return a.getItem(b)},
dn:function(a,b){return a.key(b)},
$asW:function(){return[P.e,P.e]},
$isN:1,
$asN:function(){return[P.e,P.e]},
"%":"Storage"},
iW:{"^":"p:19;a",
$2:function(a,b){return C.a.j(this.a,a)}},
aA:{"^":"k;",$isaA:1,"%":"CSSStyleSheet|StyleSheet"},
j0:{"^":"P;",
P:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.as(a,b,c,d)
z=W.hp("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a5(y).H(0,new W.a5(z))
return y},
"%":"HTMLTableElement"},
mY:{"^":"P;",
P:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.as(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.H.P(z.createElement("table"),b,c,d)
z.toString
z=new W.a5(z)
x=z.gY(z)
x.toString
z=new W.a5(x)
w=z.gY(z)
y.toString
w.toString
new W.a5(y).H(0,new W.a5(w))
return y},
"%":"HTMLTableRowElement"},
mZ:{"^":"P;",
P:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.as(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.H.P(z.createElement("table"),b,c,d)
z.toString
z=new W.a5(z)
x=z.gY(z)
y.toString
x.toString
new W.a5(y).H(0,new W.a5(x))
return y},
"%":"HTMLTableSectionElement"},
dT:{"^":"P;",$isdT:1,"%":"HTMLTemplateElement"},
n_:{"^":"k;0m:width=","%":"TextMetrics"},
aB:{"^":"O;",$isaB:1,"%":"TextTrack"},
aC:{"^":"O;",$isaC:1,"%":"TextTrackCue|VTTCue"},
n0:{"^":"kt;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.j(c,"$isaC")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aC]},
$isz:1,
$asz:function(){return[W.aC]},
$asq:function(){return[W.aC]},
$ism:1,
$asm:function(){return[W.aC]},
$isa:1,
$asa:function(){return[W.aC]},
$asr:function(){return[W.aC]},
"%":"TextTrackCueList"},
n1:{"^":"ei;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.j(c,"$isaB")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aB]},
$isz:1,
$asz:function(){return[W.aB]},
$asq:function(){return[W.aB]},
$ism:1,
$asm:function(){return[W.aB]},
$isa:1,
$asa:function(){return[W.aB]},
$asr:function(){return[W.aB]},
"%":"TextTrackList"},
n2:{"^":"k;0k:length=","%":"TimeRanges"},
aD:{"^":"k;",$isaD:1,"%":"Touch"},
n3:{"^":"ky;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.j(c,"$isaD")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aD]},
$isz:1,
$asz:function(){return[W.aD]},
$asq:function(){return[W.aD]},
$ism:1,
$asm:function(){return[W.aD]},
$isa:1,
$asa:function(){return[W.aD]},
$asr:function(){return[W.aD]},
"%":"TouchList"},
n4:{"^":"k;0k:length=","%":"TrackDefaultList"},
dY:{"^":"T;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
ni:{"^":"k;",
l:function(a){return String(a)},
"%":"URL"},
nl:{"^":"i4;0n:height=,0m:width=","%":"HTMLVideoElement"},
nm:{"^":"O;0k:length=","%":"VideoTrackList"},
nn:{"^":"O;0n:height=,0m:width=","%":"VisualViewport"},
no:{"^":"k;0m:width=","%":"VTTRegion"},
aP:{"^":"X;",
gdU:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.B("deltaY is not supported"))},
$isaP:1,
"%":"WheelEvent"},
jf:{"^":"O;",
gdG:function(a){var z,y,x
z=P.H
y=new P.ag(0,$.K,[z])
x=H.n(new W.jg(new P.kp(y,[z])),{func:1,ret:-1,args:[P.H]})
this.dh(a)
this.du(a,W.ep(x,z))
return y},
du:function(a,b){return a.requestAnimationFrame(H.bi(H.n(b,{func:1,ret:-1,args:[P.H]}),1))},
dh:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ise0:1,
"%":"DOMWindow|Window"},
jg:{"^":"p:20;a",
$1:function(a){var z=this.a
a=H.cb(H.cR(a),{futureOr:1,type:H.o(z,0)})
z=z.a
if(z.a!==0)H.ai(P.cD("Future already completed"))
z.aE(a)}},
e2:{"^":"u;",$ise2:1,"%":"Attr"},
nu:{"^":"kE;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.j(c,"$isap")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ap]},
$isz:1,
$asz:function(){return[W.ap]},
$asq:function(){return[W.ap]},
$ism:1,
$asm:function(){return[W.ap]},
$isa:1,
$asa:function(){return[W.ap]},
$asr:function(){return[W.ap]},
"%":"CSSRuleList"},
nw:{"^":"hk;",
l:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(a.width)+" x "+H.c(a.height)},
F:function(a,b){var z
if(b==null)return!1
if(!H.aU(b,"$isY",[P.H],"$asY"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.l(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gC:function(a){return W.e7(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
nx:{"^":"kG;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.j(c,"$isar")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ar]},
$isz:1,
$asz:function(){return[W.ar]},
$asq:function(){return[W.ar]},
$ism:1,
$asm:function(){return[W.ar]},
$isa:1,
$asa:function(){return[W.ar]},
$asr:function(){return[W.ar]},
"%":"GamepadList"},
nC:{"^":"kI;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.j(c,"$isu")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.u]},
$isz:1,
$asz:function(){return[W.u]},
$asq:function(){return[W.u]},
$ism:1,
$asm:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$asr:function(){return[W.u]},
"%":"MozNamedAttrMap|NamedNodeMap"},
nD:{"^":"kK;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.j(c,"$isaz")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.az]},
$isz:1,
$asz:function(){return[W.az]},
$asq:function(){return[W.az]},
$ism:1,
$asm:function(){return[W.az]},
$isa:1,
$asa:function(){return[W.az]},
$asr:function(){return[W.az]},
"%":"SpeechRecognitionResultList"},
nE:{"^":"kM;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.j(c,"$isaA")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aA]},
$isz:1,
$asz:function(){return[W.aA]},
$asq:function(){return[W.aA]},
$ism:1,
$asm:function(){return[W.aA]},
$isa:1,
$asa:function(){return[W.aA]},
$asr:function(){return[W.aA]},
"%":"StyleSheetList"},
jn:{"^":"dC;dg:a<",
G:function(a,b){var z,y,x,w,v,u
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=this.gK(this),y=z.length,x=this.a,w=J.l(x),v=0;v<z.length;z.length===y||(0,H.D)(z),++v){u=z[v]
b.$2(u,w.a3(x,u))}},
gK:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.h([],[P.e])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.j(z[w],"$ise2")
if(v.namespaceURI==null)C.a.j(y,v.name)}return y},
$asW:function(){return[P.e,P.e]},
$asN:function(){return[P.e,P.e]}},
jx:{"^":"jn;a",
i:function(a,b){return J.ck(this.a,H.v(b))},
gk:function(a){return this.gK(this).length}},
bF:{"^":"iX;a,b,c,$ti"},
be:{"^":"bF;a,b,c,$ti"},
jz:{"^":"iY;a,b,c,d,e,$ti",p:{
ak:function(a,b,c,d,e){var z=W.ep(new W.jA(c),W.T)
if(z!=null&&!0)J.fd(a,b,z,!1)
return new W.jz(0,a,b,z,!1,[e])}}},
jA:{"^":"p:21;a",
$1:function(a){return this.a.$1(H.j(a,"$isT"))}},
bG:{"^":"b;a",
d6:function(a){var z,y
z=$.cX()
if(z.a===0){for(y=0;y<262;++y)z.h(0,C.T[y],W.l6())
for(y=0;y<12;++y)z.h(0,C.v[y],W.l7())}},
a1:function(a){return $.f0().B(0,W.b0(a))},
V:function(a,b,c){var z,y,x
z=W.b0(a)
y=$.cX()
x=y.i(0,H.c(z)+"::"+b)
if(x==null)x=y.i(0,"*::"+b)
if(x==null)return!1
return H.c9(x.$4(a,b,c,this))},
$isae:1,
p:{
e5:function(a){var z,y
z=document.createElement("a")
y=new W.kd(z,window.location)
y=new W.bG(y)
y.d6(a)
return y},
nA:[function(a,b,c,d){H.j(a,"$isR")
H.v(b)
H.v(c)
H.j(d,"$isbG")
return!0},"$4","l6",16,0,12],
nB:[function(a,b,c,d){var z,y,x
H.j(a,"$isR")
H.v(b)
H.v(c)
z=H.j(d,"$isbG").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","l7",16,0,12]}},
r:{"^":"b;$ti",
gv:function(a){return new W.du(a,this.gk(a),-1,[H.aV(this,a,"r",0)])}},
dG:{"^":"b;a",
a1:function(a){return C.a.bB(this.a,new W.ik(a))},
V:function(a,b,c){return C.a.bB(this.a,new W.ij(a,b,c))},
$isae:1},
ik:{"^":"p:9;a",
$1:function(a){return H.j(a,"$isae").a1(this.a)}},
ij:{"^":"p:9;a,b,c",
$1:function(a){return H.j(a,"$isae").V(this.a,this.b,this.c)}},
ke:{"^":"b;",
d7:function(a,b,c,d){var z,y,x
this.a.H(0,c)
z=b.aV(0,new W.kf())
y=b.aV(0,new W.kg())
this.b.H(0,z)
x=this.c
x.H(0,C.V)
x.H(0,y)},
a1:function(a){return this.a.B(0,W.b0(a))},
V:["cN",function(a,b,c){var z,y
z=W.b0(a)
y=this.c
if(y.B(0,H.c(z)+"::"+b))return this.d.dF(c)
else if(y.B(0,"*::"+b))return this.d.dF(c)
else{y=this.b
if(y.B(0,H.c(z)+"::"+b))return!0
else if(y.B(0,"*::"+b))return!0
else if(y.B(0,H.c(z)+"::*"))return!0
else if(y.B(0,"*::*"))return!0}return!1}],
$isae:1},
kf:{"^":"p:10;",
$1:function(a){return!C.a.B(C.v,H.v(a))}},
kg:{"^":"p:10;",
$1:function(a){return C.a.B(C.v,H.v(a))}},
kq:{"^":"ke;e,a,b,c,d",
V:function(a,b,c){if(this.cN(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ck(a,"template")==="")return this.e.B(0,b)
return!1},
p:{
eg:function(){var z,y,x,w,v
z=P.e
y=P.cz(C.u,z)
x=H.o(C.u,0)
w=H.n(new W.kr(),{func:1,ret:z,args:[x]})
v=H.h(["TEMPLATE"],[z])
y=new W.kq(y,P.a2(null,null,null,z),P.a2(null,null,null,z),P.a2(null,null,null,z),null)
y.d7(null,new H.i2(C.u,w,[x,z]),v,null)
return y}}},
kr:{"^":"p:22;",
$1:function(a){return"TEMPLATE::"+H.c(H.v(a))}},
ko:{"^":"b;",
a1:function(a){var z=J.C(a)
if(!!z.$isdM)return!1
z=!!z.$isJ
if(z&&W.b0(a)==="foreignObject")return!1
if(z)return!0
return!1},
V:function(a,b,c){if(b==="is"||C.j.cG(b,"on"))return!1
return this.a1(a)},
$isae:1},
du:{"^":"b;a,b,c,0d,$ti",
sbq:function(a){this.d=H.A(a,H.o(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbq(J.bp(this.a,z))
this.c=z
return!0}this.sbq(null)
this.c=y
return!1},
gE:function(a){return this.d},
$isas:1},
jr:{"^":"b;a",$isO:1,$ise0:1,p:{
js:function(a){if(a===window)return H.j(a,"$ise0")
else return new W.jr(a)}}},
ae:{"^":"b;"},
kd:{"^":"b;a,b",$isnh:1},
ej:{"^":"b;a",
b7:function(a){new W.kB(this).$2(a,null)},
a8:function(a,b){if(b==null)J.d5(a)
else J.bP(b,a)},
dz:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fx(a)
x=J.ck(y.gdg(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a7(t)}v="element unprintable"
try{v=J.bs(a)}catch(t){H.a7(t)}try{u=W.b0(a)
this.dw(H.j(a,"$isR"),b,z,v,u,H.j(y,"$isN"),H.v(x))}catch(t){if(H.a7(t) instanceof P.aJ)throw t
else{this.a8(a,b)
window
s="Removing corrupted element "+H.c(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dw:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a8(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a1(a)){this.a8(a,b)
window
z="Removing disallowed element <"+H.c(e)+"> from "+H.c(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.V(a,"is",g)){this.a8(a,b)
window
z="Removing disallowed type extension <"+H.c(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gK(f)
y=H.h(z.slice(0),[H.o(z,0)])
for(x=f.gK(f).length-1,z=f.a,w=J.l(z);x>=0;--x){if(x>=y.length)return H.f(y,x)
v=y[x]
if(!this.a.V(a,J.fL(v),w.a3(z,v))){window
u="Removing disallowed attribute <"+H.c(e)+" "+v+'="'+H.c(w.a3(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.a3(z,v)
w.dr(z,v)}}if(!!J.C(a).$isdT)this.b7(a.content)},
$ismA:1},
kB:{"^":"p:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dz(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a8(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fz(z)}catch(w){H.a7(w)
v=H.j(z,"$isu")
if(x){u=v.parentNode
if(u!=null)J.bP(u,v)}else J.bP(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.j(y,"$isu")}}},
jq:{"^":"k+ha;"},
jt:{"^":"k+q;"},
ju:{"^":"jt+r;"},
jv:{"^":"k+q;"},
jw:{"^":"jv+r;"},
jC:{"^":"k+q;"},
jD:{"^":"jC+r;"},
jQ:{"^":"k+q;"},
jR:{"^":"jQ+r;"},
jY:{"^":"k+W;"},
jZ:{"^":"k+W;"},
k_:{"^":"k+q;"},
k0:{"^":"k_+r;"},
k1:{"^":"k+q;"},
k2:{"^":"k1+r;"},
k5:{"^":"k+q;"},
k6:{"^":"k5+r;"},
kc:{"^":"k+W;"},
ed:{"^":"O+q;"},
ee:{"^":"ed+r;"},
kh:{"^":"k+q;"},
ki:{"^":"kh+r;"},
kl:{"^":"k+W;"},
ks:{"^":"k+q;"},
kt:{"^":"ks+r;"},
eh:{"^":"O+q;"},
ei:{"^":"eh+r;"},
kx:{"^":"k+q;"},
ky:{"^":"kx+r;"},
kD:{"^":"k+q;"},
kE:{"^":"kD+r;"},
kF:{"^":"k+q;"},
kG:{"^":"kF+r;"},
kH:{"^":"k+q;"},
kI:{"^":"kH+r;"},
kJ:{"^":"k+q;"},
kK:{"^":"kJ+r;"},
kL:{"^":"k+q;"},
kM:{"^":"kL+r;"}}],["","",,P,{"^":"",
a1:function(a){var z,y,x,w,v
if(a==null)return
z=P.Q(P.e,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w){v=H.v(y[w])
z.h(0,v,a[v])}return z},
kY:function(a,b){var z={}
a.G(0,new P.kZ(z))
return z},
dm:function(){var z=$.dl
if(z==null){z=J.ch(window.navigator.userAgent,"Opera",0)
$.dl=z}return z},
hg:function(){var z,y
z=$.di
if(z!=null)return z
y=$.dj
if(y==null){y=J.ch(window.navigator.userAgent,"Firefox",0)
$.dj=y}if(y)z="-moz-"
else{y=$.dk
if(y==null){y=!P.dm()&&J.ch(window.navigator.userAgent,"Trident/",0)
$.dk=y}if(y)z="-ms-"
else z=P.dm()?"-o-":"-webkit-"}$.di=z
return z},
kZ:{"^":"p:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",im:{"^":"iI;",$isim:1,"%":"IDBOpenDBRequest|IDBVersionChangeRequest"},iI:{"^":"O;","%":";IDBRequest"},nk:{"^":"T;0cb:target=","%":"IDBVersionChangeEvent"}}],["","",,P,{"^":"",
lp:function(a){return Math.sqrt(a)},
e6:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
b6:{"^":"b;a2:a>,W:b>,$ti",
l:function(a){return"Point("+H.c(this.a)+", "+H.c(this.b)+")"},
F:function(a,b){if(b==null)return!1
return H.aU(b,"$isb6",[P.H],null)&&this.a==J.bT(b)&&this.b==b.gW(b)},
gC:function(a){var z,y,x
z=J.ao(this.a)
y=J.ao(this.b)
y=P.e6(P.e6(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
k7:{"^":"b;"},
Y:{"^":"k7;$ti"}}],["","",,P,{"^":"",fV:{"^":"k;",$isfV:1,"%":"SVGAnimatedLength"},lR:{"^":"J;0n:height=,0m:width=","%":"SVGFEBlendElement"},lS:{"^":"J;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},lT:{"^":"J;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},lU:{"^":"J;0n:height=,0m:width=","%":"SVGFECompositeElement"},lV:{"^":"J;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},lW:{"^":"J;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},lX:{"^":"J;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},lY:{"^":"J;0n:height=,0m:width=","%":"SVGFEFloodElement"},lZ:{"^":"J;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},m_:{"^":"J;0n:height=,0m:width=","%":"SVGFEImageElement"},m0:{"^":"J;0n:height=,0m:width=","%":"SVGFEMergeElement"},m1:{"^":"J;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},m2:{"^":"J;0n:height=,0m:width=","%":"SVGFEOffsetElement"},m3:{"^":"J;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},m4:{"^":"J;0n:height=,0m:width=","%":"SVGFETileElement"},m5:{"^":"J;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},m8:{"^":"J;0n:height=,0m:width=","%":"SVGFilterElement"},m9:{"^":"bx;0n:height=,0m:width=","%":"SVGForeignObjectElement"},hx:{"^":"bx;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bx:{"^":"J;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},mj:{"^":"bx;0n:height=,0m:width=","%":"SVGImageElement"},b3:{"^":"k;",$isb3:1,"%":"SVGLength"},mo:{"^":"jT;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return this.T(a,b)},
h:function(a,b,c){H.j(c,"$isb3")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){return this.i(a,b)},
T:function(a,b){return a.getItem(b)},
$asq:function(){return[P.b3]},
$ism:1,
$asm:function(){return[P.b3]},
$isa:1,
$asa:function(){return[P.b3]},
$asr:function(){return[P.b3]},
"%":"SVGLengthList"},mp:{"^":"J;0n:height=,0m:width=","%":"SVGMaskElement"},b5:{"^":"k;",$isb5:1,"%":"SVGNumber"},mB:{"^":"k4;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return this.T(a,b)},
h:function(a,b,c){H.j(c,"$isb5")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){return this.i(a,b)},
T:function(a,b){return a.getItem(b)},
$asq:function(){return[P.b5]},
$ism:1,
$asm:function(){return[P.b5]},
$isa:1,
$asa:function(){return[P.b5]},
$asr:function(){return[P.b5]},
"%":"SVGNumberList"},mG:{"^":"J;0n:height=,0m:width=","%":"SVGPatternElement"},mI:{"^":"k;0k:length=","%":"SVGPointList"},mK:{"^":"k;0n:height=,0m:width=","%":"SVGRect"},mL:{"^":"hx;0n:height=,0m:width=","%":"SVGRectElement"},dM:{"^":"J;",$isdM:1,"%":"SVGScriptElement"},mW:{"^":"kn;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return this.T(a,b)},
h:function(a,b,c){H.v(c)
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){return this.i(a,b)},
T:function(a,b){return a.getItem(b)},
$asq:function(){return[P.e]},
$ism:1,
$asm:function(){return[P.e]},
$isa:1,
$asa:function(){return[P.e]},
$asr:function(){return[P.e]},
"%":"SVGStringList"},J:{"^":"R;",
P:function(a,b,c,d){var z,y,x,w,v,u
z=H.h([],[W.ae])
C.a.j(z,W.e5(null))
C.a.j(z,W.eg())
C.a.j(z,new W.ko())
c=new W.ej(new W.dG(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.q).dR(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a5(w)
u=z.gY(z)
for(z=J.l(v);x=u.firstChild,x!=null;)z.L(v,x)
return v},
gc2:function(a){return new W.be(a,"change",!1,[W.T])},
$isJ:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mX:{"^":"bx;0n:height=,0m:width=","%":"SVGSVGElement"},bb:{"^":"k;",$isbb:1,"%":"SVGTransform"},n5:{"^":"kA;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return this.T(a,b)},
h:function(a,b,c){H.j(c,"$isbb")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){return this.i(a,b)},
T:function(a,b){return a.getItem(b)},
$asq:function(){return[P.bb]},
$ism:1,
$asm:function(){return[P.bb]},
$isa:1,
$asa:function(){return[P.bb]},
$asr:function(){return[P.bb]},
"%":"SVGTransformList"},nj:{"^":"bx;0n:height=,0m:width=","%":"SVGUseElement"},jS:{"^":"k+q;"},jT:{"^":"jS+r;"},k3:{"^":"k+q;"},k4:{"^":"k3+r;"},km:{"^":"k+q;"},kn:{"^":"km+r;"},kz:{"^":"k+q;"},kA:{"^":"kz+r;"}}],["","",,P,{"^":"",ac:{"^":"b;",$ism:1,
$asm:function(){return[P.al]},
$isa:1,
$asa:function(){return[P.al]},
$isj5:1}}],["","",,P,{"^":"",lv:{"^":"k;0k:length=","%":"AudioBuffer"},lw:{"^":"jo;",
i:function(a,b){return P.a1(a.get(H.v(b)))},
G:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a1(y.value[1]))}},
gK:function(a){var z=H.h([],[P.e])
this.G(a,new P.fX(z))
return z},
gk:function(a){return a.size},
$asW:function(){return[P.e,null]},
$isN:1,
$asN:function(){return[P.e,null]},
"%":"AudioParamMap"},fX:{"^":"p:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},lx:{"^":"O;0k:length=","%":"AudioTrackList"},fY:{"^":"O;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mD:{"^":"fY;0k:length=","%":"OfflineAudioContext"},jo:{"^":"k+W;"}}],["","",,P,{"^":"",h_:{"^":"k;",$ish_:1,"%":"WebGLBuffer"},hw:{"^":"k;",$ishw:1,"%":"WebGLFramebuffer"},iA:{"^":"k;",$isiA:1,"%":"WebGLProgram"},mM:{"^":"k;",
bA:function(a,b){return a.activeTexture(b)},
bC:function(a,b,c){return a.attachShader(b,c)},
bD:function(a,b,c){return a.bindBuffer(b,c)},
bF:function(a,b,c){return a.bindFramebuffer(b,c)},
bG:function(a,b,c){return a.bindTexture(b,c)},
bH:function(a,b){return a.blendEquation(b)},
bI:function(a,b,c){return a.blendFunc(b,c)},
bJ:function(a,b,c,d){return a.bufferData(b,c,d)},
bK:function(a,b){return a.clear(b)},
bL:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bM:function(a,b){return a.compileShader(b)},
bN:function(a){return a.createBuffer()},
bO:function(a){return a.createProgram()},
bP:function(a,b){return a.createShader(b)},
bQ:function(a){return a.createTexture()},
bS:function(a,b){return a.depthMask(b)},
bT:function(a,b){return a.disable(b)},
bU:function(a,b,c,d){return a.drawArrays(b,c,d)},
bV:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bW:function(a,b){return a.enable(b)},
bX:function(a,b){return a.enableVertexAttribArray(b)},
ap:function(a){return P.a1(a.getContextAttributes())},
aZ:function(a){return a.getError()},
b_:function(a,b){return a.getProgramInfoLog(b)},
b0:function(a,b,c){return a.getProgramParameter(b,c)},
b2:function(a,b){return a.getShaderInfoLog(b)},
b3:function(a,b,c){return a.getShaderParameter(b,c)},
b4:function(a,b,c){return a.getUniformLocation(b,c)},
c_:function(a,b){return a.linkProgram(b)},
c7:function(a,b,c){return a.pixelStorei(b,c)},
b8:function(a,b,c){return a.shaderSource(b,c)},
b9:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aU:function(a,b,c,d,e,f,g,h,i,j){this.aO(a,b,c,d,e,f,g)
return},
cc:function(a,b,c,d,e,f,g){return this.aU(a,b,c,d,e,f,g,null,null,null)},
aO:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cd:function(a,b,c,d){return a.texParameteri(b,c,d)},
ci:function(a,b,c){return a.uniform1f(b,c)},
cj:function(a,b,c){return a.uniform1fv(b,c)},
ck:function(a,b,c){return a.uniform1i(b,c)},
cl:function(a,b,c){return a.uniform1iv(b,c)},
cm:function(a,b,c){return a.uniform2fv(b,c)},
cn:function(a,b,c){return a.uniform3fv(b,c)},
co:function(a,b,c){return a.uniform4fv(b,c)},
cp:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cq:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cr:function(a,b){return a.useProgram(b)},
cs:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cu:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},mN:{"^":"k;",
dI:function(a,b){return a.beginTransformFeedback(b)},
dL:function(a,b){return a.bindVertexArray(b)},
dT:function(a){return a.createVertexArray()},
dW:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dX:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dY:function(a){return a.endTransformFeedback()},
ee:function(a,b,c,d){this.dC(a,b,H.t(c,"$isa",[P.e],"$asa"),d)
return},
dC:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
ef:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bA:function(a,b){return a.activeTexture(b)},
bC:function(a,b,c){return a.attachShader(b,c)},
bD:function(a,b,c){return a.bindBuffer(b,c)},
bF:function(a,b,c){return a.bindFramebuffer(b,c)},
bG:function(a,b,c){return a.bindTexture(b,c)},
bH:function(a,b){return a.blendEquation(b)},
bI:function(a,b,c){return a.blendFunc(b,c)},
bJ:function(a,b,c,d){return a.bufferData(b,c,d)},
bK:function(a,b){return a.clear(b)},
bL:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bM:function(a,b){return a.compileShader(b)},
bN:function(a){return a.createBuffer()},
bO:function(a){return a.createProgram()},
bP:function(a,b){return a.createShader(b)},
bQ:function(a){return a.createTexture()},
bS:function(a,b){return a.depthMask(b)},
bT:function(a,b){return a.disable(b)},
bU:function(a,b,c,d){return a.drawArrays(b,c,d)},
bV:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bW:function(a,b){return a.enable(b)},
bX:function(a,b){return a.enableVertexAttribArray(b)},
ap:function(a){return P.a1(a.getContextAttributes())},
aZ:function(a){return a.getError()},
b_:function(a,b){return a.getProgramInfoLog(b)},
b0:function(a,b,c){return a.getProgramParameter(b,c)},
b2:function(a,b){return a.getShaderInfoLog(b)},
b3:function(a,b,c){return a.getShaderParameter(b,c)},
b4:function(a,b,c){return a.getUniformLocation(b,c)},
c_:function(a,b){return a.linkProgram(b)},
c7:function(a,b,c){return a.pixelStorei(b,c)},
b8:function(a,b,c){return a.shaderSource(b,c)},
b9:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aU:function(a,b,c,d,e,f,g,h,i,j){this.aO(a,b,c,d,e,f,g)
return},
cc:function(a,b,c,d,e,f,g){return this.aU(a,b,c,d,e,f,g,null,null,null)},
aO:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cd:function(a,b,c,d){return a.texParameteri(b,c,d)},
ci:function(a,b,c){return a.uniform1f(b,c)},
cj:function(a,b,c){return a.uniform1fv(b,c)},
ck:function(a,b,c){return a.uniform1i(b,c)},
cl:function(a,b,c){return a.uniform1iv(b,c)},
cm:function(a,b,c){return a.uniform2fv(b,c)},
cn:function(a,b,c){return a.uniform3fv(b,c)},
co:function(a,b,c){return a.uniform4fv(b,c)},
cp:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cq:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cr:function(a,b){return a.useProgram(b)},
cs:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cu:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},iO:{"^":"k;",$isiO:1,"%":"WebGLShader"},j1:{"^":"k;",$isj1:1,"%":"WebGLTexture"},j6:{"^":"k;",$isj6:1,"%":"WebGLUniformLocation"},jd:{"^":"k;",$isjd:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",mT:{"^":"kk;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return P.a1(this.dm(a,b))},
h:function(a,b,c){H.j(c,"$isN")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){return this.i(a,b)},
dm:function(a,b){return a.item(b)},
$asq:function(){return[[P.N,,,]]},
$ism:1,
$asm:function(){return[[P.N,,,]]},
$isa:1,
$asa:function(){return[[P.N,,,]]},
$asr:function(){return[[P.N,,,]]},
"%":"SQLResultSetRowList"},kj:{"^":"k+q;"},kk:{"^":"kj+r;"}}],["","",,G,{"^":"",
jh:function(a){var z,y,x,w
z=H.h(a.split("\n"),[P.e])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.f(z,y)
C.a.h(z,y,w+H.c(z[y]))}return C.a.ac(z,"\n")},
e3:function(a,b,c){var z,y,x,w
z=J.l(a)
y=z.bP(a,b)
z.b8(a,y,c)
z.bM(a,y)
x=H.c9(z.b3(a,y,35713))
if(x!=null&&!x){w=z.b2(a,y)
P.an("E:Compilation failed:")
P.an("E:"+G.jh(c))
P.an("E:Failure:")
P.an(C.j.I("E:",w))
throw H.d(w)}return y},
bv:function(a,b){var z,y,x
H.t(a,"$isa",[T.i],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.e.h(b,z,J.bT(a[y]))
if(y>=a.length)return H.f(a,y)
C.e.h(b,z+1,J.cj(a[y]))
z+=2
if(y>=a.length)return H.f(a,y)
x=J.d3(a[y])
if(z>=b.length)return H.f(b,z)
b[z]=x}return b},
ht:function(a,b){var z,y
H.t(a,"$isa",[T.y],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.e.h(b,z,J.bT(a[y]))
if(y>=a.length)return H.f(a,y)
C.e.h(b,z+1,J.cj(a[y]))}return b},
hu:function(a,b){var z,y,x,w,v
H.t(a,"$isa",[T.aO],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.e.h(b,z,J.bT(a[y]))
if(y>=a.length)return H.f(a,y)
C.e.h(b,z+1,J.cj(a[y]))
x=z+2
if(y>=a.length)return H.f(a,y)
w=J.d3(a[y])
v=b.length
if(x>=v)return H.f(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.f(a,y)
w=J.fC(a[y])
if(z>=v)return H.f(b,z)
b[z]=w}return b},
hs:function(a,b){var z,y
H.t(a,"$isa",[[P.a,P.x]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.o.h(b,z,J.bp(a[y],0))
if(y>=a.length)return H.f(a,y)
C.o.h(b,z+1,J.bp(a[y],1))
if(y>=a.length)return H.f(a,y)
C.o.h(b,z+2,J.bp(a[y],2))
if(y>=a.length)return H.f(a,y)
C.o.h(b,z+3,J.bp(a[y],3))}return b},
jO:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.ad(z,[H.o(z,0)]),y=y.gv(y),x=b.x,w=[[P.a,P.x]],v=[P.al],u=[T.aO],t=[T.i],s=[T.y];y.t();){r=y.d
if(!x.al(0,r)){r="Dropping unnecessary attribute: "+H.c(r)
if($.ew>0)H.bM("I: "+r)
continue}q=z.i(0,r)
switch($.a8().i(0,r).a){case"vec2":b.a4(r,G.ht(H.bO(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.a4(r,G.bv(H.bO(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.a4(r,G.hu(H.bO(q,"$isa",u,"$asa"),null),4)
break
case"float":b.a4(r,new Float32Array(H.c5(H.bO(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.a4(r,G.hs(H.bO(q,"$isa",w,"$asa"),null),4)
break}}},
ct:function(a,b,c){var z=G.i5(a,b.d,4,b.e.x)
z.a5(G.bv(c.d,null))
z.cP(c.cW())
G.jO(c,z)
return z},
aM:{"^":"b;"},
aE:{"^":"aM;d,a,b,c",
ax:function(){return this.d},
l:function(a){var z,y,x,w
z=H.h(["{"+new H.dX(H.l3(this)).l(0)+"}["+H.c(this.a)+"]"],[P.e])
for(y=this.d,x=new H.ad(y,[H.o(y,0)]),x=x.gv(x);x.t();){w=x.d
C.a.j(z,H.c(w)+": "+H.c(y.i(0,w)))}return C.a.ac(z,"\n")}},
h0:{"^":"dO;"},
h2:{"^":"b;0a,b",
bY:function(a,b,c){J.fu(this.a,b)
if(c>0)J.fR(this.a,b,c)},
ct:function(a,b,c,d,e,f,g,h){J.cg(this.a,34962,b)
J.fS(this.a,c,d,e,!1,g,h)}},
hv:{"^":"b;a,b,c,d,e"},
ab:{"^":"b;ak:a>,a9:b>,aa:c>",p:{
M:function(a,b,c){return new G.ab(a,b,c)}}},
bu:{"^":"b;ak:a>,a9:b>,aa:c>,d"},
cs:{"^":"b;a,b,c,d,e",
Z:function(a){switch($.a8().i(0,a).a){case"vec2":this.e.h(0,a,H.h([],[T.y]))
break
case"vec3":this.e.h(0,a,H.h([],[T.i]))
break
case"vec4":this.e.h(0,a,H.h([],[T.aO]))
break
case"float":this.e.h(0,a,H.h([],[P.al]))
break
case"uvec4":this.e.h(0,a,H.h([],[[P.a,P.x]]))
break}},
cQ:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)C.a.j(y,new G.bu(z,z+1,z+2,z+3))},
a5:function(a){var z,y,x,w,v
H.t(a,"$isa",[T.i],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.D)(a),++x){w=a[x]
w.toString
v=new T.i(new Float32Array(3))
v.w(w)
C.a.j(y,v)}},
cR:function(a){var z,y,x,w,v
H.t(a,"$isa",[T.i],"$asa")
z=this.d
y=z.length
C.a.j(this.b,new G.ab(y,y+1,y+2))
for(x=0;x<3;++x){w=a[x]
v=new T.i(new Float32Array(3))
v.w(w)
C.a.j(z,v)}},
au:function(a,b){var z,y,x,w,v,u,t
z=[T.y]
H.t(b,"$isa",z,"$asa")
y=H.t(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.D)(b),++w){v=b[w]
v.toString
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.j(y,new T.y(u))}},
av:function(a,b){var z,y,x,w,v,u
z=[T.i]
H.t(b,"$isa",z,"$asa")
y=H.t(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.D)(b),++w){v=b[w]
v.toString
u=new T.i(new Float32Array(3))
u.w(v)
x.j(y,u)}},
cW:function(){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.h(x,[P.x])
for(x=z.length,v=0,u=0;u<z.length;z.length===x||(0,H.D)(z),++u){t=z[u]
C.a.h(w,v,t.a)
C.a.h(w,v+1,t.b)
C.a.h(w,v+2,t.c)
v+=3}for(z=y.length,u=0;u<y.length;y.length===z||(0,H.D)(y),++u){s=y[u]
x=s.a
C.a.h(w,v,x)
C.a.h(w,v+1,s.b)
r=s.c
C.a.h(w,v+2,r)
C.a.h(w,v+3,x)
C.a.h(w,v+4,r)
C.a.h(w,v+5,s.d)
v+=6}return w},
l:function(a){var z,y,x,w,v
z=H.h(["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"],[P.e])
for(y=this.e,x=new H.ad(y,[H.o(y,0)]),x=x.gv(x);x.t();){w=x.d
v=$.a8().i(0,w).a
C.a.j(z,H.c(w)+"["+v+","+y.i(0,w).length+"]")}return C.a.ac(z," ")}},
b4:{"^":"aM;",
ay:function(a,b,c,d){this.e.w(c)
this.f.w(d)}},
dJ:{"^":"b4;z,Q,d,e,f,a,b,c",
aw:function(a,b){var z,y,x,w
z=this.z.a
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
w=this.e.a
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
z=this.f.a
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
l:function(a){return"PL: p:"+H.c(this.z)+"  r:"+this.Q}},
dn:{"^":"b4;z,Q,ch,cx,d,e,f,a,b,c",
aw:function(a,b){var z,y,x,w
z=b+4
y=this.z.a
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
z=this.e.a
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
y=this.f.a
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
l:function(a){return"DL: p:"+H.c(this.z)}},
dP:{"^":"b4;z,Q,ch,cx,cy,db,dx,dy,fr,fx,d,e,f,a,b,c",
aw:function(a,b){var z,y,x,w
z=this.z.a
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
w=this.Q.a
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
z=this.e.a
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
w=this.f.a
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
z=Math.cos(H.et(this.cx))
if(w>=x)return H.f(a,w)
a[w]=z
z=b+15
if(z>=x)return H.f(a,z)
a[z]=this.cy},
l:function(a){return"SL: p:"+H.c(this.z)+"  d:"+H.c(this.Q)+"  r:"+this.ch+"  a:"+H.c(this.cx)}},
hE:{"^":"aE;x,y,z,d,a,b,c",
ax:function(){var z,y,x
z=this.y
y=this.z
G.hF(z,y,this.x)
x=this.d
x.h(0,"uLightDescs",z)
x.h(0,"uLightTypes",y)
return x},
p:{
hF:function(a,b,c){var z,y,x,w,v
H.t(c,"$isa",[G.b4],"$asa")
C.e.bZ(a,0,a.length,0)
C.e.bZ(b,0,4,0)
for(z=c.length,y=0,x=0;x<c.length;c.length===z||(0,H.D)(c),++x){w=c[x]
if(w.c){w.aw(a,y*16)
v=w.d
if(y>=4)return H.f(b,y)
b[y]=v;++y}}}}},
dV:{"^":"b;a,b,c"},
dU:{"^":"b;a,b,c"},
i3:{"^":"aE;d,a,b,c",p:{
bD:function(a){var z=P.Q(P.e,P.b)
z.h(0,"cDepthTest",!0)
z.h(0,"cDepthWrite",!0)
z.h(0,"cBlendEquation",$.eH())
z.h(0,"cStencilFunc",$.eP())
return new G.i3(z,a,!1,!0)}}},
dE:{"^":"aM;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
saH:function(a){this.cx=H.t(a,"$isa",[P.x],"$asa")},
bc:function(a,b,c){var z,y
C.j.aB(a,0)
H.j(b,"$isac")
this.cy.h(0,a,b)
z=this.d
y=this.r.i(0,a)
J.cg(z.a,34962,y)
J.d0(z.a,34962,b,35048)},
ag:function(a){this.ch=a
this.bc("aPosition",a,3)},
cX:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a4:function(a,b,c){var z,y,x,w,v
z=J.cY(a,0)===105
if(z&&this.z===0)this.z=C.d.cO(b.length,c)
y=this.r
x=this.d
y.h(0,a,J.bR(x.a))
this.bc(a,b,c)
w=$.a8().i(0,a)
if(w==null)throw H.d("Unknown canonical "+a)
v=this.x.i(0,a)
J.bQ(x.a,this.e)
x.bY(0,v,z?1:0)
x.ct(0,y.i(0,a),v,w.bd(),5126,!1,0,0)},
a5:function(a){var z,y,x,w
z=this.r
y=this.d
z.h(0,"aPosition",J.bR(y.a))
this.ag(a)
x=$.a8().i(0,"aPosition")
if(x==null)throw H.d("Unknown canonical aPosition")
w=this.x.i(0,"aPosition")
J.bQ(y.a,this.e)
y.bY(0,w,0)
y.ct(0,z.i(0,"aPosition"),w,x.bd(),5126,!1,0,0)},
a6:function(a){var z,y,x
H.t(a,"$isa",[P.x],"$asa")
z=this.ch.length
if(z<768){this.saH(new Uint8Array(H.c5(a)))
this.Q=5121}else if(z<196608){this.saH(new Uint16Array(H.c5(a)))
this.Q=5123}else{this.saH(new Uint32Array(H.c5(a)))
this.Q=5125}z=this.d
J.bQ(z.a,this.e)
y=this.y
x=this.cx
J.cg(z.a,34963,y)
J.d0(z.a,34963,x,35048)},
cP:function(a){H.t(a,"$isa",[P.x],"$asa")
this.y=J.bR(this.d.a)
this.a6(a)},
l:function(a){var z,y,x,w
z=this.cx
y=H.h(["Faces:"+(z==null?0:z.length)],[P.e])
for(z=this.cy,x=new H.ad(z,[H.o(z,0)]),x=x.gv(x);x.t();){w=x.d
C.a.j(y,H.c(w)+":"+z.i(0,w).length)}return"MESH["+H.c(this.a)+"] "+C.a.ac(y,"  ")},
p:{
i5:function(a,b,c,d){var z=P.e
return new G.dE(b,J.d1(b.a),c,P.Q(z,P.b),d,0,-1,P.Q(z,P.ac),"meshdata:"+a,!1,!0)}}},
iq:{"^":"aE;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cS:function(a,b){var z
if(typeof a!=="number")return a.eg()
if(typeof b!=="number")return H.aG(b)
z=a/b
if(this.z===z)return
this.z=z
this.bg()},
bg:function(){var z,y,x,w,v,u
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
ax:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.i(new Float32Array(3))
u.q(x,w,v)
v=this.d
v.h(0,"uEyePosition",u)
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
y=J.C(t)
x=!!y.$isaO
q=x?t.gcv(t):1
if(!!y.$isi){p=t.ga2(t)
s=t.gW(t)
r=t.gao(t)
t=p}else if(x){p=t.ga2(t)
s=t.gW(t)
r=t.gao(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.aG(t)
x=z[4]
if(typeof s!=="number")return H.aG(s)
w=z[8]
if(typeof r!=="number")return H.aG(r)
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
c.c0(0,u)
v.h(0,"uPerspectiveViewMatrix",c)
return v}},
lP:{"^":"b;"},
iH:{"^":"aM;d,e,f,r,x,y,z,Q,0ch,a,b,c",
d_:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){t=z[u]
x.h(0,t,J.d4(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){t=z[u]
x.h(0,t,J.d4(w.a,v,t))}},
d2:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.h([],[P.e])
x=H.h([],[P.e])
for(y=new H.ad(y,[H.o(y,0)]),y=y.gv(y);y.t();){w=y.d
if(!z.al(0,w))C.a.j(x,w)}for(z=this.x,z=P.jV(z,z.r,H.o(z,0)),y=this.Q;z.t();){w=z.d
if(!y.B(0,w))C.a.j(x,w)}return x},
d5:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.t(b,"$isN",[P.e,P.b],"$asN")
z=Date.now()
for(y=new H.ad(b,[H.o(b,0)]),y=y.gv(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.t();){s=y.d
switch(J.cY(s,0)){case 117:if(w.al(0,s)){r=b.i(0,s)
if(v.al(0,s))H.bM("E:"+(H.c(u)+":  "+s+" : group ["+H.c(a)+"] overwrites ["+s+"]"))
v.h(0,s,a)
q=$.a8().i(0,s)
if(q==null)H.ai("unknown "+s)
p=w.i(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.L(r)
J.cl(x.a,p,r)}else if(!!J.C(r).$ishI)J.fP(x.a,p,r)
break
case"float":if(q.c===0){H.eu(r)
J.fN(x.a,p,r)}else if(!!J.C(r).$isac)J.fO(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.a6(r,"$isU").a
J.db(x.a,p,!1,s)}else if(!!J.C(r).$isac)J.db(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=H.a6(r,"$isaL").a
J.da(x.a,p,!1,s)}else if(!!J.C(r).$isac)J.da(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.d9(o,p,H.a6(r,"$isaO").a)
else J.d9(o,p,H.j(r,"$isac"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.d8(o,p,H.a6(r,"$isi").a)
else J.d8(o,p,H.j(r,"$isac"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.d7(o,p,H.a6(r,"$isy").a)
else J.d7(o,p,H.j(r,"$isac"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.aG(s)
J.cZ(x.a,33984+s)
s=H.a6(r,"$iscF").b
J.bq(x.a,3553,s)
s=this.ch
J.cl(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.I()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.aG(s)
J.cZ(x.a,33984+s)
s=H.a6(r,"$iscF").b
J.bq(x.a,34067,s)
s=this.ch
J.cl(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.I()
this.ch=s+1
break
default:H.bM("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.i(0,s)
switch(s){case"cDepthTest":s=J.aI(r,!0)
o=x.a
if(s)J.br(o,2929)
else J.ci(o,2929)
break
case"cStencilFunc":H.a6(r,"$isdV")
s=r.a
o=x.a
if(s===1281)J.ci(o,2960)
else{J.br(o,2960)
o=r.b
n=r.c
J.fJ(x.a,s,o,n)}break
case"cDepthWrite":H.c9(r)
J.fn(x.a,r)
break
case"cBlendEquation":H.a6(r,"$isdU")
s=r.a
o=x.a
if(s===1281)J.ci(o,3042)
else{J.br(o,3042)
o=r.b
n=r.c
J.fh(x.a,o,n)
J.fg(x.a,s)}break}++t
break}}m=P.hl(0,0,0,Date.now()-new P.bW(z,!1).a,0,0)
""+t
m.l(0)},
cV:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.t(b,"$isa",[G.aE],"$asa")
Date.now()
z=this.d
J.fQ(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.bt()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.D)(b),++x){w=b[x]
this.d5(w.a,w.ax())}y=this.Q
y.ab(0)
for(v=a.cy,v=new H.ad(v,[H.o(v,0)]),v=v.gv(v);v.t();)y.j(0,v.d)
u=this.d2()
if(u.length!==0)P.an("E:"+(H.c(this.a)+" "+a.f+": uninitialized inputs: "+H.c(u)))
y=a.d
v=a.e
J.bQ(y.a,v)
t=this.e.f.length>0
v=a.f
y=a.cX()
s=a.Q
r=a.z
if(t)J.fe(z.a,v)
if(s!==-1){q=z.a
if(r>1)J.fs(q,v,y,s,0,r)
else J.fr(q,v,y,s,0)}else{s=z.a
if(r>1)J.fq(s,v,0,y,r)
else J.fp(s,v,0,y)}if(t)J.fv(z.a)},
p:{
cB:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.e
y=P.a2(null,null,null,z)
x=c.b
w=d.b
v=H.t(c.f,"$isa",[z],"$asa")
u=J.fl(b.a)
t=G.e3(b.a,35633,x)
J.d_(b.a,u,t)
s=G.e3(b.a,35632,w)
J.d_(b.a,u,s)
if(v.length>0)J.fM(b.a,u,v,35980)
J.fH(b.a,u)
if(!H.c9(J.fG(b.a,u,35714)))H.ai(J.fF(b.a,u))
z=new G.iH(b,c,d,u,P.cz(c.c,z),P.Q(z,P.b),P.Q(z,z),y,a,!1,!0)
z.d_(a,b,c,d)
return z}}},
E:{"^":"b;a,b,c",
bd:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
iP:{"^":"b;a,0b,c,d,e,f,r,x",
at:function(a){var z,y,x,w,v
H.t(a,"$isa",[P.e],"$asa")
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.D)(a),++w){v=a[w]
C.a.j(y,v)
x.h(0,v,this.r);++this.r}C.a.ar(y)},
S:function(a){var z,y,x
H.t(a,"$isa",[P.e],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.D)(a),++x)C.a.j(y,a[x])
C.a.ar(y)},
af:function(a){var z,y,x
H.t(a,"$isa",[P.e],"$asa")
for(z=a.length,y=this.e,x=0;x<a.length;a.length===z||(0,H.D)(a),++x)C.a.j(y,a[x])
C.a.ar(y)},
bf:function(a,b){var z=[P.e]
this.b=this.bh(!0,H.t(a,"$isa",z,"$asa"),H.t(b,"$isa",z,"$asa"))},
az:function(a){return this.bf(a,null)},
be:function(a,b){var z=[P.e]
this.b=this.bh(!1,H.t(a,"$isa",z,"$asa"),H.t(b,"$isa",z,"$asa"))},
d0:function(a){return this.be(a,null)},
bh:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.e]
H.t(b,"$isa",z,"$asa")
H.t(c,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.h(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.D)(y),++u){t=y[u]
s=$.a8().i(0,t)
C.a.j(w,"layout (location="+H.c(v.i(0,t))+") in "+s.a+" "+H.c(t)+";")}C.a.j(w,"")
r=x?"in":"out"
if(x)C.a.j(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){q=z[u]
s=$.a8().i(0,q)
C.a.j(w,r+" "+s.a+" "+H.c(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){q=z[u]
s=$.a8().i(0,q)
C.a.j(w,r+" "+s.a+" "+H.c(q)+";")}C.a.j(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){q=z[u]
s=$.a8().i(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.j(w,"uniform "+s.a+" "+H.c(q)+p+";")}C.a.j(w,"")
if(c!=null)C.a.H(w,c)
if(a)C.a.j(w,"void main(void) {")
C.a.H(w,b)
if(a)C.a.j(w,"}")
return C.a.ac(w,"\n")},
p:{
ba:function(a){var z,y
z=P.e
y=[z]
return new G.iP(a,H.h([],y),H.h([],y),H.h([],y),H.h([],y),0,P.Q(z,P.x))}}},
dO:{"^":"aM;",
aW:function(){var z,y,x
z=this.f
y=this.d.a
x=z.a
x[0]=y[2]
x[1]=y[6]
x[2]=y[10]
return z},
b5:function(){var z,y,x
z=this.r
y=this.d.a
x=z.a
x[0]=y[1]
x[1]=y[5]
x[2]=y[9]
return z},
aq:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}},
j2:{"^":"b;a,b,c,d,e,f,r"},
cF:{"^":"b;",
l:function(a){return"Texture["+this.a+", "+this.c+"]"}},
hG:{"^":"cF;f,a,b,c,d,e"}}],["","",,R,{"^":"",
jX:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.j(W.jy("span",null),"$isR")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.y).aA(y,"float")
y.setProperty(x,"left","")
x=C.y.aA(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.r.L(z,v)}return z},
ja:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=d.a
if(z[1]===0)return
y=b*0.5
x=c*C.t.e_(y/c)
w=-x
v=d.U(y).U(1/z[1])
u=H.h([],[T.i])
for(t=w;t<=x;t+=c)for(s=w;s<=x;s+=c){z=new Float32Array(3)
r=new T.i(z)
z[0]=t
z[1]=0
z[2]=s
r.j(0,v)
C.a.j(u,r)
z=new Float32Array(3)
r=new T.i(z)
z[0]=t
z[1]=0
z[2]=s
r.bb(0,v)
C.a.j(u,r)}for(q=0;q<8;++q){t=(q&1)===1?1:-1
p=(q&2)===2?1:-1
s=(q&4)===4?1:-1
if(t>0){z=p*y
r=s*y
o=new Float32Array(3)
o[0]=t*y
o[1]=z
o[2]=r
C.a.j(u,new T.i(o))
o=new Float32Array(3)
o[0]=-t*y
o[1]=z
o[2]=r
C.a.j(u,new T.i(o))}if(p>0){z=t*y
r=s*y
o=new Float32Array(3)
o[0]=z
o[1]=p*y
o[2]=r
C.a.j(u,new T.i(o))
o=new Float32Array(3)
o[0]=z
o[1]=-p*y
o[2]=r
C.a.j(u,new T.i(o))}if(s>0){z=t*y
r=p*y
o=new Float32Array(3)
o[0]=z
o[1]=r
o[2]=s*y
C.a.j(u,new T.i(o))
o=new Float32Array(3)
o[0]=z
o[1]=r
o[2]=-s*y
C.a.j(u,new T.i(o))}}a.ag(G.bv(u,null))
z=new Array(u.length)
z.fixed$length=Array
n=H.h(z,[P.x])
for(q=0;q<u.length;++q)C.a.h(n,q,q)
a.a6(n)},
hy:function(a){var z,y,x
z=a.a
y=z[0]
if(y!==0){x=z[1]
if(x!==0){z=new T.i(new Float32Array(3))
z.q(-x,y,0)
return z}z=z[2]
if(z!==0){x=new T.i(new Float32Array(3))
x.q(-z,0,y)
return x}z=new T.i(new Float32Array(3))
z.q(0,1,1)
return z}else{y=z[1]
if(y===0){z=new T.i(new Float32Array(3))
z.q(1,1,0)
return z}z=z[2]
if(z===0){z=new T.i(new Float32Array(3))
z.q(1,0,1)
return z}x=new T.i(new Float32Array(3))
x.q(0,-z,y)
return x}},
jc:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
c.toString
z=new T.i(new Float32Array(3))
z.w(c)
z.D(0)
y=b.I(0,z.U(d))
x=H.h([b,y],[T.i])
w=R.hy(c)
w.D(0)
w.N(0,Math.tan(H.et(e))*d)
for(v=0;v<8;++v){z=new Float32Array(3)
u=new T.i(z)
u.w(w)
t=new Float32Array(4)
new T.iB(t).cC(c,v*2*3.141592653589793/8)
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
C.a.j(x,u)}f=H.h([],[P.x])
for(v=1;v<x.length;++v){C.a.j(f,0)
C.a.j(f,v)}for(v=3;z=x.length,v<z;++v){C.a.j(f,v-1)
C.a.j(f,v)}C.a.j(f,z-1)
C.a.j(f,2)
for(v=2;v<x.length;++v)if(v%2===0){C.a.j(f,1)
C.a.j(f,v)}a.ag(G.bv(x,null))
a.a6(f)},
jb:function(a,b,c){var z,y,x,w,v,u,t
z=H.h([],[T.i])
y=H.h([],[P.x])
for(x=$.cU(),w=0;w<12;++w){v=x[w]
C.a.j(y,z.length)
C.a.j(y,12)
u=new T.i(new Float32Array(3))
u.w(v)
u.N(0,c)
b.toString
t=new T.i(new Float32Array(3))
t.w(b)
t.j(0,u)
C.a.j(z,t)}C.a.j(z,b)
a.ag(G.bv(z,null))
a.a6(y)},
iU:{"^":"b;",
d1:function(a,b,c){var z,y
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
y=J.l(z)
y.L(z,this.b)
y.L(z,this.d)
y.L(z,this.c)}},
iV:{"^":"iU;e,f,a,b,c,d",
d4:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.t.ed(y,2)+" fps"
C.r.cD(this.c,b)
x=C.d.a0(30*C.t.dM(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.j(z.firstChild,"$isR")
v=w.style
u=""+x+"px"
v.height=u
C.r.L(z,w)},
d3:function(a){return this.d4(a,"")}}}],["","",,A,{"^":"",
ev:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.t(e,"$isa",[G.aE],"$asa")
if(!b.c)return
z=b.dx
z.w(c)
y=b.d
z.c0(0,y)
x=b.ch
if(x!=null&&b.cx!=null){H.c(b)
w=C.a.ge4(e)
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
v.dP(new T.aL(u))
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
a.cV(b.cx,e,d)
if(0>=e.length)return H.f(e,-1)
e.pop()}for(y=b.cy,x=y.length,r=0;r<y.length;y.length===x||(0,H.D)(y),++r)A.ev(a,y[r],z,d,e)},
av:{"^":"dO;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
l:function(a){return"NODE["+H.c(this.a)+"]"}},
c2:{"^":"aM;d,e,f,a,b,c"},
iG:{"^":"aM;d,e,f,r,x,y,z,Q,a,b,c",
cU:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.ff(v.a,36160,z)
J.fT(v.a,this.x,this.y,x,w)
if(y!==0)J.fi(v.a,y)
for(z=this.f,y=z.length,x=P.e,w=P.b,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){t=z[u]
if(!t.c)continue
v=t.d
if(!v.c)continue
s=t.e
C.a.j(s,new G.aE(P.Q(x,w),"transforms",!1,!0))
r=new T.U(new Float32Array(16))
r.J()
for(q=t.f,p=q.length,o=0;o<q.length;q.length===p||(0,H.D)(q),++o)A.ev(v,q[o],r,a,s)
if(0>=s.length)return H.f(s,-1)
s.pop()}},
cT:function(){return this.cU(null)},
p:{
dL:function(a,b,c){var z=new A.iG(c,b,H.h([],[A.c2]),17664,0,0,0,0,a,!1,!0)
z.d=new G.hv(b,null,null,null,null)
return z}}}}],["","",,V,{}],["","",,B,{"^":"",
hc:function(a5,a6,a7,a8,a9,b0,b1,b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
z=-b0
y=-b1
x=new T.i(new Float32Array(3))
x.q(z,y,b2)
w=new T.i(new Float32Array(3))
w.q(b0,y,b2)
v=new T.i(new Float32Array(3))
v.q(b0,b1,b2)
u=new T.i(new Float32Array(3))
u.q(z,b1,b2)
t=-b2
s=new T.i(new Float32Array(3))
s.q(z,y,t)
r=new T.i(new Float32Array(3))
r.q(z,b1,t)
q=new T.i(new Float32Array(3))
q.q(b0,b1,t)
p=new T.i(new Float32Array(3))
p.q(b0,y,t)
o=new T.i(new Float32Array(3))
o.q(z,b1,t)
n=new T.i(new Float32Array(3))
n.q(z,b1,b2)
m=new T.i(new Float32Array(3))
m.q(b0,b1,b2)
l=new T.i(new Float32Array(3))
l.q(b0,b1,t)
k=new T.i(new Float32Array(3))
k.q(b0,y,b2)
j=new T.i(new Float32Array(3))
j.q(z,y,b2)
i=new T.i(new Float32Array(3))
i.q(z,y,t)
h=new T.i(new Float32Array(3))
h.q(b0,y,t)
g=new T.i(new Float32Array(3))
g.q(b0,y,t)
f=new T.i(new Float32Array(3))
f.q(b0,b1,t)
e=new T.i(new Float32Array(3))
e.q(b0,b1,b2)
d=new T.i(new Float32Array(3))
d.q(b0,y,b2)
c=new T.i(new Float32Array(3))
c.q(z,y,t)
b=new T.i(new Float32Array(3))
b.q(z,y,b2)
y=new T.i(new Float32Array(3))
y.q(z,b1,b2)
a=new T.i(new Float32Array(3))
a.q(z,b1,t)
t=[T.i]
a0=H.h([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a],t)
z=new T.y(new Float32Array(2))
z.A(a7,a9)
y=new T.y(new Float32Array(2))
y.A(a6,a9)
x=new T.y(new Float32Array(2))
x.A(a6,a8)
w=new T.y(new Float32Array(2))
w.A(a7,a8)
v=new T.y(new Float32Array(2))
v.A(a6,a9)
u=new T.y(new Float32Array(2))
u.A(a6,a8)
s=new T.y(new Float32Array(2))
s.A(a7,a8)
r=new T.y(new Float32Array(2))
r.A(a7,a9)
q=new T.y(new Float32Array(2))
q.A(a7,a8)
p=new T.y(new Float32Array(2))
p.A(a7,a9)
o=new T.y(new Float32Array(2))
o.A(a6,a9)
n=new T.y(new Float32Array(2))
n.A(a6,a8)
m=new T.y(new Float32Array(2))
m.A(a6,a8)
l=new T.y(new Float32Array(2))
l.A(a7,a8)
k=new T.y(new Float32Array(2))
k.A(a7,a9)
j=new T.y(new Float32Array(2))
j.A(a6,a9)
i=new T.y(new Float32Array(2))
i.A(a6,a9)
h=new T.y(new Float32Array(2))
h.A(a6,a8)
g=new T.y(new Float32Array(2))
g.A(a7,a8)
f=new T.y(new Float32Array(2))
f.A(a7,a9)
e=new T.y(new Float32Array(2))
e.A(a7,a9)
d=new T.y(new Float32Array(2))
d.A(a6,a9)
c=new T.y(new Float32Array(2))
c.A(a6,a8)
b=new T.y(new Float32Array(2))
b.A(a7,a8)
a1=H.h([z,y,x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b],[T.y])
a2=new G.cs(!1,H.h([],[G.ab]),H.h([],[G.bu]),H.h([],t),P.Q(P.e,[P.a,,]))
a2.Z("aTexUV")
a2.Z("aNormal")
a2.cQ(6)
a2.a5(a0)
a2.au("aTexUV",a1)
for(a3=0;z=$.f_(),a3<6;++a3){a4=z[a3]
a2.av("aNormal",H.h([a4,a4,a4,a4],t))}return a2},
hD:function(a,a0,a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=[G.ab]
y=H.h([],z)
x=[T.i]
w=H.h([],x)
C.a.H(y,$.eO())
C.a.H(w,$.cU())
for(v=0;v<a;++v,y=u){u=H.h([],z)
for(t=y.length,s=0;s<y.length;y.length===t||(0,H.D)(y),++s){r=y[s]
q=J.d2(r)
if(q>=w.length)return H.f(w,q)
q=w[q]
p=new T.i(new Float32Array(3))
p.w(q)
q=r.ga9(r)
if(q>=w.length)return H.f(w,q)
p.j(0,w[q])
p.N(0,0.5)
p.D(0)
q=r.ga9(r)
if(q>=w.length)return H.f(w,q)
q=w[q]
o=new T.i(new Float32Array(3))
o.w(q)
q=r.gaa(r)
if(q>=w.length)return H.f(w,q)
o.j(0,w[q])
o.N(0,0.5)
o.D(0)
q=r.gaa(r)
if(q>=w.length)return H.f(w,q)
q=w[q]
n=new T.i(new Float32Array(3))
n.w(q)
q=r.gak(r)
if(q>=w.length)return H.f(w,q)
n.j(0,w[q])
n.N(0,0.5)
n.D(0)
m=w.length
C.a.j(w,p)
l=w.length
C.a.j(w,o)
k=w.length
C.a.j(w,n)
C.a.j(u,new G.ab(r.gak(r),m,k))
C.a.j(u,new G.ab(r.ga9(r),l,m))
C.a.j(u,new G.ab(r.gaa(r),k,l))
C.a.j(u,new G.ab(m,l,k))}}j=new G.cs(!1,H.h([],z),H.h([],[G.bu]),H.h([],x),P.Q(P.e,[P.a,,]))
j.Z("aTexUV")
j.Z("aNormal")
for(z=y.length,t=[T.y],s=0;s<y.length;y.length===z||(0,H.D)(y),++s){r=y[s]
q=J.d2(r)
if(q>=w.length)return H.f(w,q)
i=w[q]
q=r.ga9(r)
if(q>=w.length)return H.f(w,q)
h=w[q]
q=r.gaa(r)
if(q>=w.length)return H.f(w,q)
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
j.av("aNormal",H.h([i,h,g],x))
q=new T.i(new Float32Array(3))
q.w(i)
q.N(0,a0)
f=new T.i(new Float32Array(3))
f.w(h)
f.N(0,a0)
b=new T.i(new Float32Array(3))
b.w(g)
b.N(0,a0)
j.cR(H.h([q,f,b],x))
j.au("aTexUV",H.h([new T.y(e),new T.y(d),new T.y(c)],t))}return j},
hz:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=c*0.5
y=d*0.5
x=c/a
w=c/b
v=new T.i(new Float32Array(3))
v.q(0,0,1)
u=(a+1)*(b+1)
t=new Array(u)
t.fixed$length=Array
s=T.i
r=[s]
q=H.h(t,r)
t=new Array(u)
t.fixed$length=Array
p=H.h(t,r)
u=new Array(u)
u.fixed$length=Array
o=H.h(u,[T.y])
n=new B.hA(a)
for(m=0;m<=a;++m)for(u=m/a,t=m*x-z,l=0;l<=b;++l){k=n.$2(m,l)
r=new Float32Array(3)
r[0]=t
r[1]=l*w-y
r[2]=0
C.a.h(q,k,new T.i(r))
C.a.h(p,k,v)
r=new Float32Array(2)
r[0]=u
r[1]=l/b
C.a.h(o,k,new T.y(r))}u=H.h([],[G.ab])
t=H.h([],[G.bu])
j=new G.cs(!1,u,t,H.h([],[s]),P.Q(P.e,[P.a,,]))
j.a5(q)
for(m=0;m<a;m=i)for(i=m+1,l=0;l<b;){u=n.$2(m,l)
s=n.$2(i,l);++l
r=n.$2(i,l)
h=n.$2(m,l)
C.a.j(t,new G.bu(H.L(u),H.L(s),H.L(r),H.L(h)))}j.Z("aTexUV")
j.au("aTexUV",o)
j.Z("aNormal")
j.av("aNormal",p)
return j},
hA:{"^":"p:24;a",
$2:function(a,b){return a*(this.a+1)+b}}}],["","",,D,{"^":"",
c_:function(a,b,c){var z,y,x,w,v,u
z=c.a
y=C.k.aS(255*z[0])
x=C.k.aS(255*z[1])
w=C.k.aS(255*z[2])
z="rgb("+y+", "+x+", "+w+")"
v=document.createElement("canvas")
v.width=2
v.height=2
u=H.j(C.x.cz(v,"2d"),"$iscp")
u.fillStyle=z;(u&&C.I).dZ(u,0,0,v.width,v.height)
z=J.fm(a.a)
J.bq(a.a,3553,z)
J.fI(a.a,37440,1)
J.bq(a.a,3553,z)
J.fK(a.a,3553,0,6408,6408,5121,v)
J.d6(a.a,3553,10240,9729)
J.d6(a.a,3553,10241,9729)
J.fE(a.a)
J.bq(a.a,3553,null)
return new G.hG(v,b,z,3553,a,new G.j2(!1,!1,!1,!0,1,9729,9729))},
hQ:{"^":"b;a,b,c",
cY:function(a){var z,y
a=document
z=W.b2
y={func:1,ret:-1,args:[z]}
W.ak(a,"keydown",H.n(new D.hS(this),y),!1,z)
W.ak(a,"keyup",H.n(new D.hT(this),y),!1,z)},
p:{
hR:function(a){var z=P.x
z=new D.hQ(P.a2(null,null,null,z),P.a2(null,null,null,z),P.a2(null,null,null,z))
z.cY(a)
return z}}},
hS:{"^":"p:11;a",
$1:function(a){var z
H.j(a,"$isb2")
z=this.a
z.a.j(0,a.which)
z.b.j(0,a.which)}},
hT:{"^":"p:11;a",
$1:function(a){var z
H.j(a,"$isb2")
z=this.a
z.a.c9(0,a.which)
z.c.j(0,a.which)}},
i8:{"^":"b;a,b,c,d,e,f,r,x",
cZ:function(a){var z,y,x
if(a==null)a=document
z=J.l(a)
y=z.gc4(a)
x=H.o(y,0)
W.ak(y.a,y.b,H.n(new D.ia(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gc3(a)
y=H.o(x,0)
W.ak(x.a,x.b,H.n(new D.ib(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gc5(a)
x=H.o(y,0)
W.ak(y.a,y.b,H.n(new D.ic(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gc6(a)
x=H.o(z,0)
W.ak(z.a,z.b,H.n(new D.id(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
i9:function(a){var z=P.x
z=new D.i8(P.a2(null,null,null,z),P.a2(null,null,null,z),P.a2(null,null,null,z),0,0,0,0,0)
z.cZ(a)
return z}}},
ia:{"^":"p:3;a",
$1:function(a){var z,y
H.j(a,"$isX")
a.preventDefault()
z=this.a
y=J.l(a)
z.r=H.L(y.gc1(a).a)
z.x=H.L(y.gc1(a).b)
z.d=a.movementX
z.e=a.movementY}},
ib:{"^":"p:3;a",
$1:function(a){var z
H.j(a,"$isX")
a.preventDefault()
P.an("BUTTON "+H.c(a.button))
z=this.a
z.a.j(0,a.button)
z.b.j(0,a.button)}},
ic:{"^":"p:3;a",
$1:function(a){var z
H.j(a,"$isX")
a.preventDefault()
z=this.a
z.a.c9(0,a.button)
z.c.j(0,a.button)}},
id:{"^":"p:25;a",
$1:function(a){H.j(a,"$isaP")
a.preventDefault()
this.a.f=H.L(C.ac.gdU(a))}},
io:{"^":"h0;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bK:function(a){var z,y
z=C.e.e0(H.t(a,"$ism",[P.b],"$asm"),0,new A.l5(),P.x)
if(typeof z!=="number")return H.aG(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
l5:{"^":"p:26;",
$2:function(a,b){var z,y
H.L(a)
z=J.ao(b)
if(typeof a!=="number")return a.I()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",aL:{"^":"b;a",
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
l:function(a){return"[0] "+this.R(0).l(0)+"\n[1] "+this.R(1).l(0)+"\n[2] "+this.R(2).l(0)+"\n"},
i:function(a,b){var z=this.a
if(b>=9)return H.f(z,b)
return z[b]},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aL){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gC:function(a){return A.bK(this.a)},
R:function(a){var z,y,x
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
return new T.i(z)},
dP:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
return m}},U:{"^":"b;a",
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
l:function(a){return"[0] "+this.R(0).l(0)+"\n[1] "+this.R(1).l(0)+"\n[2] "+this.R(2).l(0)+"\n[3] "+this.R(3).l(0)+"\n"},
i:function(a,b){var z=this.a
if(b>=16)return H.f(z,b)
return z[b]},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.U){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gC:function(a){return A.bK(this.a)},
R:function(a){var z,y,x
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
return new T.aO(z)},
ad:function(a4,a5,a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
z=Math.sqrt(a5.gaR())
y=a5.a
x=y[0]/z
w=y[1]/z
v=y[2]/z
u=Math.cos(a6)
t=Math.sin(a6)
s=1-u
r=x*x*s+u
q=v*t
p=x*w*s-q
o=w*t
n=x*v*s+o
m=w*x*s+q
l=w*w*s+u
q=x*t
k=w*v*s-q
j=v*x*s-o
i=v*w*s+q
h=v*v*s+u
q=this.a
o=q[0]
g=q[4]
f=q[8]
e=q[1]
d=q[5]
c=q[9]
b=q[2]
a=q[6]
a0=q[10]
a1=q[3]
a2=q[7]
a3=q[11]
q[0]=o*r+g*m+f*j
q[1]=e*r+d*m+c*j
q[2]=b*r+a*m+a0*j
q[3]=a1*r+a2*m+a3*j
q[4]=o*p+g*l+f*i
q[5]=e*p+d*l+c*i
q[6]=b*p+a*l+a0*i
q[7]=a1*p+a2*l+a3*i
q[8]=o*n+g*k+f*h
q[9]=e*n+d*k+c*h
q[10]=b*n+a*k+a0*h
q[11]=a1*n+a2*k+a3*h},
J:function(){var z=this.a
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
c0:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
c0:function(){return new T.U(new Float32Array(16))}}},iB:{"^":"b;a",
cC:function(a,b){var z,y,x,w,v
z=Math.sqrt(a.gaR())
if(z===0)return
y=b*0.5
x=Math.sin(y)/z
w=a.a
v=this.a
v[0]=w[0]*x
v[1]=w[1]*x
v[2]=w[2]*x
v[3]=Math.cos(y)},
gk:function(a){var z,y,x,w,v
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=z[3]
return Math.sqrt(y*y+x*x+w*w+v*v)},
i:function(a,b){var z=this.a
if(b>=4)return H.f(z,b)
return z[b]},
l:function(a){var z=this.a
return H.c(z[0])+", "+H.c(z[1])+", "+H.c(z[2])+" @ "+H.c(z[3])}},y:{"^":"b;a",
A:function(a,b){var z=this.a
z[0]=a
z[1]=b},
l:function(a){var z=this.a
return"["+H.c(z[0])+","+H.c(z[1])+"]"},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.y){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gC:function(a){return A.bK(this.a)},
i:function(a,b){var z=this.a
if(b>=2)return H.f(z,b)
return z[b]},
gk:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
ga2:function(a){return this.a[0]},
gW:function(a){return this.a[1]}},i:{"^":"b;a",
q:function(a,b,c){var z=this.a
C.e.h(z,0,a)
C.e.h(z,1,b)
C.e.h(z,2,c)},
w:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
l:function(a){var z=this.a
return"["+H.c(z[0])+","+H.c(z[1])+","+H.c(z[2])+"]"},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.i){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gC:function(a){return A.bK(this.a)},
I:function(a,b){var z=new T.i(new Float32Array(3))
z.w(this)
z.j(0,b)
return z},
i:function(a,b){var z=this.a
if(b>=3)return H.f(z,b)
return z[b]},
gk:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gaR:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
D:function(a){var z,y,x
z=Math.sqrt(this.gaR())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aP:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bR:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.i(new Float32Array(3))
z.q(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
j:function(a,b){var z,y
z=H.j(b,"$isi").a
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
bb:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
N:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
U:function(a){var z=new T.i(new Float32Array(3))
z.w(this)
z.N(0,a)
return z},
ga2:function(a){return this.a[0]},
gW:function(a){return this.a[1]},
gao:function(a){return this.a[2]},
p:{
F:function(a,b,c){var z=new T.i(new Float32Array(3))
z.q(a,b,c)
return z},
bd:function(){return new T.i(new Float32Array(3))}}},aO:{"^":"b;a",
l:function(a){var z=this.a
return H.c(z[0])+","+H.c(z[1])+","+H.c(z[2])+","+H.c(z[3])},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aO){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gC:function(a){return A.bK(this.a)},
i:function(a,b){var z=this.a
if(b>=4)return H.f(z,b)
return z[b]},
gk:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
ga2:function(a){return this.a[0]},
gW:function(a){return this.a[1]},
gao:function(a){return this.a[2]},
gcv:function(a){return this.a[3]}}}],["","",,K,{"^":"",
hU:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
H.t(b,"$isa",[G.aE],"$asa")
z=G.cB("Fixed",a,$.f8(),$.f7())
y=[A.av]
x=H.h([],y)
w=new A.c2(z,b,x,"Fixed",!1,!0)
v=G.bD("light")
v.d.h(0,"uColor",$.eL())
for(x=$.bo(),u=new H.ad(x,[H.o(x,0)]),u=u.gv(u),t=[P.x],s=z.d,z=z.e,r=P.e,q=P.b,p=P.ac;u.t();){o=u.d
n=$.cf()
m=x.i(0,o)
l=z.x
k=new G.dE(s,J.d1(s.a),1,P.Q(r,q),l,0,-1,P.Q(r,p),"meshdata:dirLightViz",!1,!0)
k.a5(new Float32Array(3))
l=H.t(H.h([0,0],t),"$isa",t,"$asa")
k.y=J.bR(s.a)
k.a6(l)
l=J.C(m)
if(!!l.$isdn){l=m.Q
R.ja(k,l,l/4,m.z)}else if(!!l.$isdP)R.jc(k,m.z,m.Q,m.ch,m.cx)
else if(!!l.$isdJ)R.jb(k,m.z,m.Q)
l=H.h([],y)
j=new Float32Array(9)
i=new T.U(new Float32Array(16))
i.J()
h=new T.U(new Float32Array(16))
h.J()
g=new Float32Array(3)
f=new Float32Array(3)
e=new Float32Array(3)
n.h(0,o,new A.av(v,k,l,new T.aL(j),i,h,new T.i(g),new T.i(f),new T.i(e),new T.i(new Float32Array(3)),o,!1,!0))}for(z=$.cf(),z=z.gan(z),y=z.a,z=new H.bC(y.gv(y),z.b,[H.o(z,0),H.o(z,1)]),y=w.f;z.t();)C.a.j(y,z.a)
return w},
hZ:function(a,b,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=G.ct("cube",b,B.hc(!0,1,0,1,0,2,2,2))
y=G.ct("icosahedron-4",b,B.hD(4,1,!0))
x=G.bD("mat0")
w=x.d
w.h(0,"uTexture",D.c_(a,"blue",$.eI().U(0.5)))
w.h(0,"uShininess",50)
w=G.bD("mat1")
v=w.d
v.h(0,"uTexture",D.c_(a,"red",$.eK().U(0.5)))
v.h(0,"uShininess",50)
v=G.bD("mat2")
u=v.d
u.h(0,"uTexture",D.c_(a,"white",$.cT().U(0.5)))
u.h(0,"uShininess",50)
u=G.bD("mat3")
t=u.d
t.h(0,"uTexture",D.c_(a,"green",$.eJ().U(0.5)))
t.h(0,"uShininess",50)
s=[x,w,v,u]
for(x=a0.cy,w=[A.av],r=0;r<8;++r){q=(r&1)===0?-10:10
p=(r&2)===0?-10:10
o=(r&4)===0?-10:10
v=r%2===0?z:y
u=s[r%4]
t=H.h([],w)
n=new Float32Array(9)
m=new T.U(new Float32Array(16))
m.J()
l=new Float32Array(16)
k=new T.U(l)
k.J()
j=new Float32Array(3)
i=new Float32Array(3)
h=new Float32Array(3)
g=new Float32Array(3)
f=new T.i(g)
h=new A.av(u,v,t,new T.aL(n),m,k,new T.i(j),new T.i(i),new T.i(h),f,"mesh",!1,!0)
l[12]=q
l[13]=p
l[14]=o
g[0]=l[0]
g[1]=l[4]
g[2]=l[8]
k.ad(0,f,-1)
k.ad(0,h.b5(),-0.7)
C.a.j(x,h)}v=G.ct("strips",b,B.hz(20,20,80,80))
u=s[2]
w=H.h([],w)
t=new Float32Array(9)
n=new T.U(new Float32Array(16))
n.J()
m=new Float32Array(16)
l=new T.U(m)
l.J()
k=new Float32Array(3)
j=new Float32Array(3)
i=new Float32Array(3)
e=new A.av(u,v,w,new T.aL(t),n,l,new T.i(k),new T.i(j),new T.i(i),new T.i(new Float32Array(3)),"grid",!1,!0)
d=Math.cos(-1.5079644737231006)
c=Math.sin(-1.5079644737231006)
w=m[4]
v=m[8]
u=m[5]
t=m[9]
n=m[6]
l=m[10]
k=m[7]
j=m[11]
i=-c
m[4]=w*d+v*c
m[5]=u*d+t*c
m[6]=n*d+l*c
m[7]=k*d+j*c
m[8]=w*i+v*d
m[9]=u*i+t*d
m[10]=n*i+l*d
m[11]=k*i+j*d
e.aq(0,-20,20)
C.a.j(x,e)},
eC:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z={}
y=document
x=C.i.cA(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.iV(0,0,x,w,y.createElement("div"),R.jX("blue","gray",90,30))
u.d1(x,"blue","gray")
t=H.j(C.i.c8(y,"#webgl-canvas"),"$isco")
s=new G.h2(t)
x=P.e
v=P.b
r=(t&&C.x).aX(t,"webgl2",P.cy(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],x,v))
s.a=r
if(r==null)H.ai(P.dt('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
q="ChronosGL Config: "+H.c(J.fD(r))
if($.ew>0)P.an("I: "+q)
J.fj(r,0,0,0,1)
J.br(r,2929)
J.br(r,2884)
r=new Float32Array(3)
q=D.hR(null)
p=D.i9(t)
o=new T.U(new Float32Array(16))
o.J()
n=new Float32Array(3)
m=new Float32Array(3)
l=new Float32Array(3)
k=new D.io(50,10,0,0,new T.i(r),-0.02,q,p,o,new T.i(n),new T.i(m),new T.i(l),new T.i(new Float32Array(3)),"camera:orbit",!1,!0)
k.aq(0,0,56)
r=new T.U(new Float32Array(16))
r.J()
q=new T.U(new Float32Array(16))
q.J()
j=new G.iq(k,50,1,0.1,1e4,r,q,new T.U(new Float32Array(16)),P.Q(x,v),"perspective",!1,!0)
j.bg()
r=H.h([],[G.b4])
q=new Float32Array(64)
i=new G.hE(r,q,new Float32Array(4),P.Q(x,v),"illumination",!1,!0)
for(x=$.bo(),x=x.gan(x),v=x.a,x=new H.bC(v.gv(v),x.b,[H.o(x,0),H.o(x,1)]);x.t();)C.a.j(r,x.a)
x=[G.aE]
h=K.hU(s,H.h([j],x))
v=G.cB("BlinnPhong",s,$.f4(),$.f2())
r=H.h([j,i],x)
q=[A.av]
p=H.h([],q)
o=G.cB("Gourad",s,$.f5(),$.f3())
x=H.h([j,i],x)
n=H.h([],q)
g=A.dL("BlinnPhong",s,null)
m=g.f
C.a.j(m,new A.c2(v,r,p,"BlinnPhong",!1,!0))
C.a.j(m,h)
f=A.dL("Gourad",s,null)
m=f.f
C.a.j(m,new A.c2(o,x,n,"Gourad",!1,!0))
C.a.j(m,h)
q=H.h([],q)
x=new Float32Array(9)
r=new T.U(new Float32Array(16))
r.J()
o=new T.U(new Float32Array(16))
o.J()
m=new Float32Array(3)
l=new Float32Array(3)
e=new Float32Array(3)
d=new A.av(null,null,q,new T.aL(x),r,o,new T.i(m),new T.i(l),new T.i(e),new T.i(new Float32Array(3)),"scene",!1,!0)
K.hZ(s,v,d)
C.a.j(n,d)
C.a.j(p,d)
c=H.a6(C.i.c8(y,"#phase"),"$isdN")
c.selectedIndex=0
for(x=C.i.aY(y,"input"),v=x.length,b=0;b<x.length;x.length===v||(0,H.D)(x),++b){r=J.fy(H.j(x[b],"$isR"))
q=H.o(r,0)
W.ak(r.a,r.b,H.n(new K.lj(),{func:1,ret:-1,args:[q]}),!1,q)}for(x=C.i.aY(y,"input"),v=x.length,b=0;b<x.length;x.length===v||(0,H.D)(x),++b){r=H.j(x[b],"$isR")
H.bM("initialize inputs "+H.c(r.id))
a=C.i.de(y,"Event")
J.fb(a,"change",!0,!0)
J.fo(r,a)}y=new K.lk(t,j,f,g)
y.$1(null)
x=W.T
W.ak(window,"resize",H.n(y,{func:1,ret:-1,args:[x]}),!1,x)
z.a=0
new K.li(z,k,d,c,g,f,u).$1(0)},
lj:{"^":"p:27;",
$1:function(a){var z,y,x,w,v
z=H.a6(J.fB(a),"$isdv")
y=z.id
P.an(H.c(y)+" toggle "+H.c(z.checked))
if(y==="lightDiffuse")for(x=$.bo(),x=x.gan(x),w=x.a,x=new H.bC(w.gv(w),x.b,[H.o(x,0),H.o(x,1)]);x.t();){w=x.a
v=z.checked?1:0
w=w.e.a
w[0]=v
w[1]=v
w[2]=v}else if(y==="lightSpecular")for(x=$.bo(),x=x.gan(x),w=x.a,x=new H.bC(w.gv(w),x.b,[H.o(x,0),H.o(x,1)]);x.t();){w=x.a
v=z.checked?1:0
w=w.f.a
w[0]=v
w[1]=v
w[2]=v}else{$.bo().i(0,y).c=z.checked
$.cf().i(0,y).c=z.checked}}},
lk:{"^":"p:28;a,b,c,d",
$1:function(a){var z,y,x
z=this.a
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.an("size change "+H.c(y)+" "+H.c(x))
this.b.cS(y,x)
z=this.c
z.z=y
z.Q=x
z=this.d
z.z=y
z.Q=x}},
li:{"^":"p:29;a,b,c,d,e,f,r",
$1:function(a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
H.cR(a3)
z=this.a
y=z.a
if(typeof a3!=="number")return a3.ba()
z.a=a3+0
x=this.b
x.go+=0.001
w=x.r1
v=w.a
if(v.B(0,0)||v.B(0,1)){v=x.go
u=w.d
if(typeof u!=="number")return u.b6()
x.go=v+u*0.01
u=x.id
v=w.e
if(typeof v!=="number")return v.b6()
x.id=u+v*0.01}v=x.k4
u=v.a
if(u.B(0,37))x.go+=0.03
else if(u.B(0,39))x.go-=0.03
if(u.B(0,38))x.id+=0.03
else if(u.B(0,40))x.id-=0.03
if(u.B(0,33))x.fy*=0.99
else if(u.B(0,34))x.fy*=1.01
if(u.B(0,32)){x.go=0
x.id=0}u=w.f
if(typeof u!=="number")return u.b6()
u=x.fy-u*x.k3
if(u>0)x.fy=u
u=C.k.dN(x.id,-1.4707963267948965,1.4707963267948965)
x.id=u
t=x.fy
s=x.go
r=t*Math.cos(u)
x.aq(r*Math.cos(s),t*Math.sin(u),r*Math.sin(s))
s=x.k2
u=x.d
t=u.a
q=s.a
t[12]=t[12]+q[0]
t[13]=t[13]+q[1]
t[14]=t[14]+q[2]
p=t[12]
o=t[13]
n=t[14]
m=new T.i(new Float32Array(3))
m.q(0,1,0)
q=x.e
l=q.a
l[0]=t[12]
l[1]=t[13]
l[2]=t[14]
l=new Float32Array(3)
k=new T.i(l)
k.w(q)
k.bb(0,s)
k.D(0)
j=m.bR(k)
j.D(0)
i=k.bR(j)
i.D(0)
s=j.aP(q)
h=i.aP(q)
q=k.aP(q)
g=j.a
f=g[0]
e=i.a
d=e[0]
c=l[0]
b=g[1]
a=e[1]
a0=l[1]
g=g[2]
e=e[2]
l=l[2]
t[15]=1
t[14]=-q
t[13]=-h
t[12]=-s
t[11]=0
t[10]=l
t[9]=e
t[8]=g
t[7]=0
t[6]=a0
t[5]=a
t[4]=b
t[3]=0
t[2]=c
t[1]=d
t[0]=f
t[12]=p
t[13]=o
t[14]=n
u.ad(0,x.aW(),-x.k1)
v.c.ab(0)
v.b.ab(0)
w.e=0
w.d=0
w.f=0
w.c.ab(0)
w.b.ab(0)
for(x=this.c.cy,w=x.length,y=-((a3-y)*0.0003),a1=0;a1<x.length;x.length===w||(0,H.D)(x),++a1){a2=x[a1]
if(a2.a!=="grid"){v=a2.d
v.ad(0,a2.aW(),y)
v.ad(0,a2.b5(),y)}}(this.d.selectedIndex===0?this.e:this.f).cT()
C.ad.gdG(window).ce(this,-1)
this.r.d3(z.a)}}},1]]
setupProgram(dart,0,0)
J.C=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dy.prototype
return J.dx.prototype}if(typeof a=="string")return J.bA.prototype
if(a==null)return J.hN.prototype
if(typeof a=="boolean")return J.hM.prototype
if(a.constructor==Array)return J.by.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.b)return a
return J.cc(a)}
J.bl=function(a){if(typeof a=="string")return J.bA.prototype
if(a==null)return a
if(a.constructor==Array)return J.by.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.b)return a
return J.cc(a)}
J.ex=function(a){if(a==null)return a
if(a.constructor==Array)return J.by.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.b)return a
return J.cc(a)}
J.l1=function(a){if(typeof a=="number")return J.bz.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.bc.prototype
return a}
J.l2=function(a){if(typeof a=="number")return J.bz.prototype
if(typeof a=="string")return J.bA.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.bc.prototype
return a}
J.ey=function(a){if(typeof a=="string")return J.bA.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.bc.prototype
return a}
J.l=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.b)return a
return J.cc(a)}
J.bJ=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.bc.prototype
return a}
J.aI=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.C(a).F(a,b)}
J.a9=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.l1(a).X(a,b)}
J.bp=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lf(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bl(a).i(a,b)}
J.cY=function(a,b){return J.ey(a).aB(a,b)}
J.fb=function(a,b,c,d){return J.l(a).dl(a,b,c,d)}
J.bP=function(a,b){return J.l(a).ds(a,b)}
J.fc=function(a,b,c){return J.l(a).dt(a,b,c)}
J.cZ=function(a,b){return J.l(a).bA(a,b)}
J.fd=function(a,b,c,d){return J.l(a).dD(a,b,c,d)}
J.d_=function(a,b,c){return J.l(a).bC(a,b,c)}
J.fe=function(a,b){return J.l(a).dI(a,b)}
J.cg=function(a,b,c){return J.l(a).bD(a,b,c)}
J.ff=function(a,b,c){return J.l(a).bF(a,b,c)}
J.bq=function(a,b,c){return J.l(a).bG(a,b,c)}
J.bQ=function(a,b){return J.l(a).dL(a,b)}
J.fg=function(a,b){return J.l(a).bH(a,b)}
J.fh=function(a,b,c){return J.l(a).bI(a,b,c)}
J.d0=function(a,b,c,d){return J.l(a).bJ(a,b,c,d)}
J.fi=function(a,b){return J.l(a).bK(a,b)}
J.fj=function(a,b,c,d,e){return J.l(a).bL(a,b,c,d,e)}
J.fk=function(a,b){return J.l2(a).O(a,b)}
J.ch=function(a,b,c){return J.bl(a).dO(a,b,c)}
J.bR=function(a){return J.l(a).bN(a)}
J.fl=function(a){return J.l(a).bO(a)}
J.fm=function(a){return J.l(a).bQ(a)}
J.d1=function(a){return J.l(a).dT(a)}
J.fn=function(a,b){return J.l(a).bS(a,b)}
J.ci=function(a,b){return J.l(a).bT(a,b)}
J.fo=function(a,b){return J.l(a).dV(a,b)}
J.fp=function(a,b,c,d){return J.l(a).bU(a,b,c,d)}
J.fq=function(a,b,c,d,e){return J.l(a).dW(a,b,c,d,e)}
J.fr=function(a,b,c,d,e){return J.l(a).bV(a,b,c,d,e)}
J.fs=function(a,b,c,d,e,f){return J.l(a).dX(a,b,c,d,e,f)}
J.ft=function(a,b){return J.ex(a).u(a,b)}
J.br=function(a,b){return J.l(a).bW(a,b)}
J.fu=function(a,b){return J.l(a).bX(a,b)}
J.fv=function(a){return J.l(a).dY(a)}
J.fw=function(a,b){return J.l(a).G(a,b)}
J.d2=function(a){return J.bJ(a).gak(a)}
J.fx=function(a){return J.l(a).gdH(a)}
J.ao=function(a){return J.C(a).gC(a)}
J.bS=function(a){return J.ex(a).gv(a)}
J.aY=function(a){return J.bl(a).gk(a)}
J.fy=function(a){return J.l(a).gc2(a)}
J.fz=function(a){return J.l(a).ge6(a)}
J.fA=function(a){return J.l(a).geb(a)}
J.fB=function(a){return J.l(a).gcb(a)}
J.fC=function(a){return J.bJ(a).gcv(a)}
J.bT=function(a){return J.bJ(a).ga2(a)}
J.cj=function(a){return J.bJ(a).gW(a)}
J.d3=function(a){return J.bJ(a).gao(a)}
J.ck=function(a,b){return J.l(a).a3(a,b)}
J.fD=function(a){return J.l(a).ap(a)}
J.fE=function(a){return J.l(a).aZ(a)}
J.fF=function(a,b){return J.l(a).b_(a,b)}
J.fG=function(a,b,c){return J.l(a).b0(a,b,c)}
J.d4=function(a,b,c){return J.l(a).b4(a,b,c)}
J.fH=function(a,b){return J.l(a).c_(a,b)}
J.fI=function(a,b,c){return J.l(a).c7(a,b,c)}
J.d5=function(a){return J.l(a).e7(a)}
J.fJ=function(a,b,c,d){return J.l(a).b9(a,b,c,d)}
J.fK=function(a,b,c,d,e,f,g){return J.l(a).cc(a,b,c,d,e,f,g)}
J.d6=function(a,b,c,d){return J.l(a).cd(a,b,c,d)}
J.fL=function(a){return J.ey(a).ec(a)}
J.bs=function(a){return J.C(a).l(a)}
J.fM=function(a,b,c,d){return J.l(a).ee(a,b,c,d)}
J.fN=function(a,b,c){return J.l(a).ci(a,b,c)}
J.fO=function(a,b,c){return J.l(a).cj(a,b,c)}
J.cl=function(a,b,c){return J.l(a).ck(a,b,c)}
J.fP=function(a,b,c){return J.l(a).cl(a,b,c)}
J.d7=function(a,b,c){return J.l(a).cm(a,b,c)}
J.d8=function(a,b,c){return J.l(a).cn(a,b,c)}
J.d9=function(a,b,c){return J.l(a).co(a,b,c)}
J.da=function(a,b,c,d){return J.l(a).cp(a,b,c,d)}
J.db=function(a,b,c,d){return J.l(a).cq(a,b,c,d)}
J.fQ=function(a,b){return J.l(a).cr(a,b)}
J.fR=function(a,b,c){return J.l(a).ef(a,b,c)}
J.fS=function(a,b,c,d,e,f,g){return J.l(a).cs(a,b,c,d,e,f,g)}
J.fT=function(a,b,c,d,e){return J.l(a).cu(a,b,c,d,e)}
I.aW=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.q=W.bU.prototype
C.x=W.co.prototype
C.I=W.cp.prototype
C.y=W.h9.prototype
C.r=W.hh.prototype
C.J=W.hj.prototype
C.K=W.hB.prototype
C.i=W.hC.prototype
C.L=J.k.prototype
C.a=J.by.prototype
C.t=J.dx.prototype
C.d=J.dy.prototype
C.k=J.bz.prototype
C.j=J.bA.prototype
C.S=J.bB.prototype
C.e=H.ie.prototype
C.o=H.ih.prototype
C.W=W.ii.prototype
C.B=J.ir.prototype
C.C=W.iC.prototype
C.H=W.j0.prototype
C.w=J.bc.prototype
C.ac=W.aP.prototype
C.ad=W.jf.prototype
C.f=new P.k8()
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
C.T=H.h(I.aW(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.U=H.h(I.aW(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.V=H.h(I.aW([]),[P.e])
C.u=H.h(I.aW(["bind","if","ref","repeat","syntax"]),[P.e])
C.v=H.h(I.aW(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.X=new G.E("vec3","vertex btangents",0)
C.c=new G.E("vec3","",0)
C.Y=new G.E("vec4","delta from light",0)
C.p=new G.E("","",0)
C.D=new G.E("vec3","vertex coordinates",0)
C.Z=new G.E("vec3","vertex binormals",0)
C.E=new G.E("vec4","for wireframe",0)
C.a_=new G.E("vec4","per vertex color",0)
C.a0=new G.E("float","for normal maps",0)
C.l=new G.E("mat4","",0)
C.a2=new G.E("mat4","",4)
C.a1=new G.E("mat4","",128)
C.b=new G.E("float","",0)
C.a3=new G.E("float","",4)
C.a4=new G.E("float","depth for shadowmaps",0)
C.h=new G.E("sampler2D","",0)
C.a5=new G.E("float","for bump maps",0)
C.a6=new G.E("vec2","texture uvs",0)
C.a7=new G.E("float","time since program start in sec",0)
C.m=new G.E("vec2","",0)
C.a8=new G.E("samplerCube","",0)
C.n=new G.E("vec4","",0)
C.a9=new G.E("vec3","vertex normals",0)
C.aa=new G.E("sampler2DShadow","",0)
C.F=new G.E("vec3","per vertex color",0)
C.G=new G.E("mat3","",0)
C.ab=new G.E("vec3","vertex tangents",0)
$.aa=0
$.aZ=null
$.de=null
$.cI=!1
$.eA=null
$.eq=null
$.eF=null
$.ca=null
$.cd=null
$.cP=null
$.aR=null
$.bg=null
$.bh=null
$.cJ=!1
$.K=C.f
$.aj=null
$.cr=null
$.dr=null
$.dq=null
$.dl=null
$.dk=null
$.dj=null
$.di=null
$.ew=0
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
I.$lazy(y,x,w)}})(["lJ","eN",function(){return H.ez("_$dart_dartClosure")},"mn","cV",function(){return H.ez("_$dart_js")},"n6","eQ",function(){return H.af(H.c3({
toString:function(){return"$receiver$"}}))},"n7","eR",function(){return H.af(H.c3({$method$:null,
toString:function(){return"$receiver$"}}))},"n8","eS",function(){return H.af(H.c3(null))},"n9","eT",function(){return H.af(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"nc","eW",function(){return H.af(H.c3(void 0))},"nd","eX",function(){return H.af(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"nb","eV",function(){return H.af(H.dW(null))},"na","eU",function(){return H.af(function(){try{null.$method$}catch(z){return z.message}}())},"nf","eZ",function(){return H.af(H.dW(void 0))},"ne","eY",function(){return H.af(function(){try{(void 0).$method$}catch(z){return z.message}}())},"nq","cW",function(){return P.ji()},"nH","bn",function(){return[]},"lG","eM",function(){return{}},"ny","f0",function(){return P.cz(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)},"nz","cX",function(){return P.Q(P.e,P.bw)},"mU","eP",function(){return new G.dV(1281,0,4294967295)},"ly","eH",function(){return new G.dU(1281,1281,1281)},"nF","a8",function(){return P.cy(["cBlendEquation",C.p,"cDepthWrite",C.p,"cDepthTest",C.p,"cStencilFunc",C.p,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.F,"aColorAlpha",C.a_,"aPosition",C.D,"aTexUV",C.a6,"aNormal",C.a9,"aBinormal",C.Z,"aCenter",C.E,"aPointSize",C.b,"aBoneIndex",C.n,"aBoneWeight",C.n,"aTangent",C.ab,"aBitangent",C.X,"iaRotation",C.n,"iaTranslation",C.c,"iaScale",C.b,"iaColor",C.c,"vColor",C.F,"vTexUV",C.m,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.D,"vPositionFromLight",C.Y,"vCenter",C.E,"vDepth",C.a4,"uTransformationMatrix",C.l,"uModelMatrix",C.l,"uNormalMatrix",C.G,"uConvolutionMatrix",C.G,"uPerspectiveViewMatrix",C.l,"uLightPerspectiveViewMatrix",C.l,"uShadowMap",C.aa,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a8,"uAnimationTable",C.h,"uTime",C.a7,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.m,"uCenter2",C.m,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.n,"uColorAlpha2",C.n,"uEyePosition",C.c,"uMaterial",C.l,"uRange",C.m,"uDirection",C.m,"uBoneMatrices",C.a1,"uLightDescs",C.a2,"uLightCount",C.b,"uLightTypes",C.a3,"uBumpScale",C.a5,"uNormalScale",C.a0],P.e,G.E)},"lD","cT",function(){return T.F(1,1,1)},"lA","eI",function(){return T.F(0,0,1)},"lC","eK",function(){return T.F(1,0,0)},"lB","eJ",function(){return T.F(0,1,0)},"lE","eL",function(){return T.F(1,1,0)},"nR","f5",function(){var z,y
z=G.ba("LightGouradV")
y=[P.e]
z.at(H.h(["aPosition","aNormal","aTexUV"],y))
z.af(H.h(["vColor"],y))
z.S(H.h(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"],y))
z.S(H.h(["uLightDescs","uLightTypes","uShininess"],y))
z.S(H.h(["uEyePosition","uTexture"],y))
z.be(H.h(["void main() {\n    vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n    gl_Position = uPerspectiveViewMatrix * pos;\n    vec3 normal = uNormalMatrix * aNormal;\n\n    ColorComponents acc = CombinedLight(pos.xyz, normal, uEyePosition,\n                  uLightDescs,\n                  uLightTypes,\n                  uShininess);\n\n     vColor = acc.diffuse +\n                 acc.specular +\n                 texture(uTexture, aTexUV).rgb;\n}\n        "],y),H.h(["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    // float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"],y))
return z},"nP","f3",function(){var z,y
z=G.ba("LightGrouradV")
y=[P.e]
z.af(H.h(["vColor"],y))
z.az(H.h(["oFragColor = vec4(vColor, 1.0 );"],y))
return z},"nQ","f4",function(){var z,y
z=G.ba("LightBlinnPhongV")
y=[P.e]
z.at(H.h(["aPosition","aNormal","aTexUV"],y))
z.af(H.h(["vPosition","vNormal","vTexUV"],y))
z.S(H.h(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"],y))
z.d0(H.h(["void main() {\n    vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n    gl_Position = uPerspectiveViewMatrix * pos;\n    vPosition = pos.xyz;\n    vTexUV = aTexUV;\n    vNormal = uNormalMatrix * aNormal;\n}\n"],y))
return z},"nO","f2",function(){var z,y
z=G.ba("LightBlinnPhongF")
y=[P.e]
z.af(H.h(["vPosition","vNormal","vTexUV"],y))
z.S(H.h(["uLightDescs","uLightTypes","uShininess"],y))
z.S(H.h(["uEyePosition","uTexture"],y))
z.bf(H.h(["ColorComponents acc = CombinedLight(vPosition,\n                                    vNormal,\n                                    uEyePosition,\n                                    uLightDescs,\n                                    uLightTypes,\n                                    uShininess);\n\noFragColor.rgb = acc.diffuse +\n                    acc.specular +\n                    texture(uTexture, vTexUV).rgb;\noFragColor.a = 1.0;\n"],y),H.h(["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    // float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"],y))
return z},"nU","f8",function(){var z,y
z=G.ba("SolidColor")
y=[P.e]
z.at(H.h(["aPosition"],y))
z.S(H.h(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.az(H.h(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"],y))
return z},"nT","f7",function(){var z,y
z=G.ba("SolidColorF")
y=[P.e]
z.S(H.h(["uColor"],y))
z.az(H.h(["oFragColor = vec4( uColor, 1.0 );"],y))
return z},"nv","f_",function(){return H.h([T.F(0,0,1),T.F(0,0,-1),T.F(0,1,0),T.F(0,-1,0),T.F(1,0,0),T.F(-1,0,0)],[T.i])},"me","eO",function(){return H.h([G.M(0,11,5),G.M(0,5,1),G.M(0,1,7),G.M(0,7,10),G.M(0,10,11),G.M(1,5,9),G.M(5,11,4),G.M(11,10,2),G.M(10,7,6),G.M(7,1,8),G.M(3,9,4),G.M(3,4,2),G.M(3,2,6),G.M(3,6,8),G.M(3,8,9),G.M(4,9,5),G.M(2,4,11),G.M(6,2,10),G.M(8,6,7),G.M(9,8,1)],[G.ab])},"nW","fa",function(){return(1+P.lp(5))/2},"mf","cU",function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.fa()
y=T.F(-1,z,0)
y.D(0)
x=T.F(1,z,0)
x.D(0)
if(typeof z!=="number")return z.eh()
w=T.F(-1,-z,0)
w.D(0)
v=T.F(1,-z,0)
v.D(0)
u=T.F(0,-1,z)
u.D(0)
t=T.F(0,1,z)
t.D(0)
s=T.F(0,-1,-z)
s.D(0)
r=T.F(0,1,-z)
r.D(0)
q=T.F(z,0,-1)
q.D(0)
p=T.F(z,0,1)
p.D(0)
o=T.F(-z,0,-1)
o.D(0)
z=T.F(-z,0,1)
z.D(0)
return H.h([y,x,w,v,u,t,s,r,q,p,o,z],[T.i])},"nS","f6",function(){return T.F(11,20,0)},"nK","f1",function(){return T.F(0,-50,0)},"nV","f9",function(){return T.F(-11,-30,0)},"nL","bo",function(){var z,y,x,w
z=$.f1()
y=$.cT()
z=new G.dn(z,40,T.c0(),T.c0(),1,T.bd(),T.bd(),"dir",!1,!0)
z.ay("dir",1,y,y)
x=$.f6()
w=new G.dJ(x,80,3,T.bd(),T.bd(),"point",!1,!0)
w.ay("point",3,y,y)
x=new G.dP(x,$.f9(),80,0.4487989505128276,2,1,1,40,T.c0(),T.c0(),2,T.bd(),T.bd(),"spot",!1,!0)
x.ay("spot",2,y,y)
return P.cy(["idDirectional",z,"idPoint",w,"idSpot",x],P.e,G.b4)},"nM","cf",function(){return P.Q(P.e,A.av)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.G},{func:1,ret:-1},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:P.G,args:[W.X]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.G,args:[,]},{func:1,ret:P.G,args:[,,]},{func:1,ret:P.e,args:[P.x]},{func:1,ret:P.V,args:[W.ae]},{func:1,ret:P.V,args:[P.e]},{func:1,ret:P.G,args:[W.b2]},{func:1,ret:P.V,args:[W.R,P.e,P.e,W.bG]},{func:1,args:[,P.e]},{func:1,args:[P.e]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.G,args:[,],opt:[P.a3]},{func:1,ret:[P.ag,,],args:[,]},{func:1,ret:P.V,args:[W.u]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.G,args:[P.H]},{func:1,args:[W.T]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[W.u,W.u]},{func:1,ret:P.x,args:[P.x,P.x]},{func:1,ret:P.G,args:[W.aP]},{func:1,ret:P.x,args:[P.x,P.b]},{func:1,ret:P.G,args:[W.T]},{func:1,ret:-1,args:[W.T]},{func:1,ret:-1,args:[P.H]},{func:1,ret:P.x,args:[,,]}]
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
if(x==y)H.lr(d||a)
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
Isolate.aW=a.aW
Isolate.bk=a.bk
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
if(typeof dartMainRunner==="function")dartMainRunner(K.eC,[])
else K.eC([])})})()
//# sourceMappingURL=light.dart.js.map
